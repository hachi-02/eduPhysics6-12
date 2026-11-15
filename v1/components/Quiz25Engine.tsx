'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { QuestionItem } from '@/types/cms';
import { RichPhysicsText } from './KatexRenderer';
import { AdaptiveCatRunner } from './AdaptiveCatRunner';
import {
  adaptToFormat2025,
  calculateExamScore,
  calculateTrueFalseScore,
  checkShortAnswer,
  ExamScoreResult,
} from '@/lib/format2025-adapter';
import {
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  ArrowLeft,
  ArrowRight,
  List,
  Maximize2,
  Play,
  CheckSquare,
  Shuffle,
  Filter,
  History,
  Eye,
  Calendar,
  Sparkles,
  Target,
  Trophy,
  Award,
  Layers,
  HelpCircle,
  Hash,
} from 'lucide-react';

interface Quiz25EngineProps {
  scopeType: 'topic' | 'chapter';
  scopeId: number;
  title: string;
  questions: QuestionItem[];
}

interface AttemptItem {
  id: number;
  student_name: string;
  score: number;
  total_questions: number;
  time_spent_sec: number;
  answers_json: string;
  created_at: string;
}

const DIFF_LABELS: Record<string, string> = {
  nhan_biet: 'Nhận biết',
  thong_hieu: 'Thông hiểu',
  van_dung: 'Vận dụng',
  van_dung_cao: 'Vận dụng cao',
};

// Fisher-Yates shuffle helper
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function Quiz25Engine({ scopeType, scopeId, title, questions }: Quiz25EngineProps) {
  const router = useRouter();
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [submitted, setSubmitted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [viewMode, setViewMode] = useState<'single' | 'list'>('single');
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  // Exam format: 'standard' (25 multiple choice) vs 'format2025' (Part I, II, III) vs 'adaptive_cat' (IRT 3PL CAT)
  const [examFormat, setExamFormat] = useState<'format2025' | 'adaptive_cat' | 'standard'>('format2025');

  // Custom quiz settings
  const [shuffleQuestionsSetting, setShuffleQuestionsSetting] = useState(false);
  const [shuffleOptionsSetting, setShuffleOptionsSetting] = useState(false);
  const [diffFilter, setDiffFilter] = useState<'all' | 'basic' | 'advanced'>('all');

  // Active questions working list (after filter, format adaptation & shuffle)
  const [activeQuestions, setActiveQuestions] = useState<QuestionItem[]>(questions);

  // Result details
  const [examResult, setExamResult] = useState<ExamScoreResult | null>(null);

  // Quiz Attempts History
  const [attempts, setAttempts] = useState<AttemptItem[]>([]);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [viewingAttempt, setViewingAttempt] = useState<AttemptItem | null>(null);

  // Counts by difficulty for filter pill badges
  const basicCount = useMemo(
    () => questions.filter((q) => q.difficulty === 'nhan_biet' || q.difficulty === 'thong_hieu').length,
    [questions]
  );
  const advancedCount = useMemo(
    () => questions.filter((q) => q.difficulty === 'van_dung' || q.difficulty === 'van_dung_cao').length,
    [questions]
  );

  // Fetch attempt history on mount and when not started
  const fetchAttempts = async () => {
    try {
      setLoadingHistory(true);
      const res = await fetch(`/api/quiz/attempts?scopeType=${scopeType}&scopeId=${scopeId}`);
      if (res.ok) {
        const data = await res.json();
        setAttempts(data.attempts || []);
      }
    } catch {
      // Ignore network error
    } finally {
      setLoadingHistory(false);
    }
  };

  useEffect(() => {
    fetchAttempts();
  }, [scopeType, scopeId]);

  // Timer
  useEffect(() => {
    if (!started || submitted) return;
    const timer = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [started, submitted]);

  const totalQuestions = activeQuestions.length;

  // Calculate answered count considering various question types
  const answeredCount = useMemo(() => {
    let count = 0;
    for (const q of activeQuestions) {
      const userAns = answers[q.id];
      if (userAns === undefined || userAns === null) continue;

      if (q.question_type === 'true_false') {
        const tfAns = userAns as Record<string, boolean>;
        if (tfAns && Object.keys(tfAns).length > 0) count++;
      } else if (q.question_type === 'short_answer') {
        if (String(userAns).trim().length > 0) count++;
      } else {
        if (typeof userAns === 'number' && userAns >= 0) count++;
      }
    }
    return count;
  }, [activeQuestions, answers]);

  // Handler for multiple-choice option click
  const handleSelectOption = (questionId: number, optionIdx: number) => {
    if (!started || submitted) return;
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx,
    }));
  };

  // Handler for true-false toggle
  const handleToggleTrueFalse = (questionId: number, statementId: string, value: boolean) => {
    if (!started || submitted) return;
    setAnswers((prev) => {
      const current = (prev[questionId] as Record<string, boolean>) || {};
      return {
        ...prev,
        [questionId]: {
          ...current,
          [statementId]: value,
        },
      };
    });
  };

  // Handler for short-answer input
  const handleChangeShortAnswer = (questionId: number, value: string) => {
    if (!started || submitted) return;
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  // Start Quiz
  const handleStartQuiz = () => {
    let list = [...questions];

    // 1. Difficulty filter (only applied in standard mode)
    if (examFormat === 'standard') {
      if (diffFilter === 'basic') {
        list = list.filter((q) => q.difficulty === 'nhan_biet' || q.difficulty === 'thong_hieu');
      } else if (diffFilter === 'advanced') {
        list = list.filter((q) => q.difficulty === 'van_dung' || q.difficulty === 'van_dung_cao');
      }
    }

    // 2. Format 2025 adaptation
    if (examFormat === 'format2025') {
      list = adaptToFormat2025(list);
    } else {
      list = list.map((q) => ({ ...q, question_type: 'multiple_choice' as const }));
    }

    // 3. Shuffle options for multiple choice
    if (shuffleOptionsSetting && examFormat === 'standard') {
      list = list.map((q) => {
        if (q.question_type !== 'multiple_choice') return q;
        const correctText = q.options[q.correct_index];
        const shuffledOpts = shuffleArray(q.options);
        const newCorrectIdx = shuffledOpts.indexOf(correctText);
        return {
          ...q,
          options: shuffledOpts,
          correct_index: newCorrectIdx >= 0 ? newCorrectIdx : q.correct_index,
        };
      });
    }

    // 4. Shuffle questions (standard mode only)
    if (shuffleQuestionsSetting && examFormat === 'standard') {
      list = shuffleArray(list);
    }

    setActiveQuestions(list);
    setAnswers({});
    setSubmitted(false);
    setExamResult(null);
    setSecondsElapsed(0);
    setCurrentIdx(0);
    setStarted(true);
  };

  // Submit Quiz
  const handleSubmit = async () => {
    if (submitted) return;
    const result = calculateExamScore(activeQuestions, answers);
    setExamResult(result);
    setSubmitted(true);

    try {
      await fetch('/api/quiz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scopeType,
          scopeId,
          studentName: 'Học sinh',
          score: Math.round(result.totalScore),
          totalQuestions,
          timeSpentSec: secondsElapsed,
          answers,
        }),
      });
      fetchAttempts();
      router.refresh();
    } catch {
      // Ignore network error
    }
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setExamResult(null);
    setSecondsElapsed(0);
    setCurrentIdx(0);
    setStarted(false);
    setActiveQuestions(questions);
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return dateStr;
    }
  };

  if (questions.length === 0) {
    return (
      <div className="edu-card p-8 text-center text-sm text-slate-500">
        Chưa có câu hỏi trắc nghiệm nào trong mục này.
      </div>
    );
  }

  const [showHistory, setShowHistory] = useState<boolean>(false);

  // ----------------------------------------------------
  // PRE-START SCREEN
  // ----------------------------------------------------
  if (!started) {
    const highestScore = attempts.length > 0 ? Math.max(...attempts.map((a) => a.score)) : null;

    return (
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="edu-card overflow-hidden">
          <div className="relative overflow-hidden bg-brand-gradient px-6 py-8 text-center text-white">
            <div className="pointer-events-none absolute -right-10 -top-16 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-accent-300/20 blur-3xl" />
            <div className="relative space-y-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                <CheckSquare className="h-6 w-6" />
              </div>
              <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/70">
                {scopeType === 'chapter' ? 'Đề kiểm tra tổng hợp Chương' : 'Bài kiểm tra cuối Chủ đề'}
              </div>
              <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">{title}</h2>
              <p className="mx-auto max-w-md text-xs leading-relaxed text-white/80 sm:text-sm">
                Ngân hàng gồm <strong className="text-white">{questions.length} câu hỏi</strong> chuẩn
                chương trình GDPT 2018 với 4 mức độ tư duy.
              </p>
            </div>
          </div>

          <div className="space-y-5 p-6 sm:p-7">
            {/* Format Selection (2025 vs Adaptive CAT vs Standard) */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700">Chọn chế độ khảo thí</label>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                <button
                  type="button"
                  onClick={() => setExamFormat('format2025')}
                  className={`flex flex-col rounded-2xl border p-3.5 text-left transition ${
                    examFormat === 'format2025'
                      ? 'border-brand-500 bg-brand-50/70 shadow-soft ring-2 ring-brand-500/25'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-brand-900">
                      <Sparkles className="h-4 w-4 shrink-0 text-brand-600" />
                      Format Mới 2025
                    </span>
                    <span className="rounded-md bg-brand-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
                      Chuẩn thi
                    </span>
                  </div>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-slate-600">
                    Gồm 3 phần: I (4 Lựa chọn) + II (Đúng/Sai) + III (Điền số ngắn) chuẩn Bộ GD&amp;ĐT.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setExamFormat('adaptive_cat')}
                  className={`flex flex-col rounded-2xl border p-3.5 text-left transition ${
                    examFormat === 'adaptive_cat'
                      ? 'border-purple-500 bg-purple-50/80 shadow-soft ring-2 ring-purple-500/25'
                      : 'border-slate-200 bg-white hover:bg-purple-50/30'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-purple-950">
                      <Target className="h-4 w-4 shrink-0 text-purple-600" />
                      Thi Thích ứng (CAT)
                    </span>
                    <span className="rounded-md bg-purple-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
                      IRT 3PL
                    </span>
                  </div>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-slate-600">
                    Đề tự động tăng/giảm độ khó sau từng câu trả lời, đo năng lực θ &amp; dự báo điểm với 10 câu.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setExamFormat('standard')}
                  className={`flex flex-col rounded-2xl border p-3.5 text-left transition ${
                    examFormat === 'standard'
                      ? 'border-brand-500 bg-brand-50/70 shadow-soft ring-2 ring-brand-500/25'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                      <Layers className="h-4 w-4 shrink-0 text-slate-500" />
                      Trắc nghiệm 4 Đáp án
                    </span>
                  </div>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-slate-600">
                    25 câu trắc nghiệm chọn 1 trong 4 đáp án (A, B, C, D) truyền thống.
                  </p>
                </button>
              </div>
            </div>

            {/* Standard Mode Options */}
            {examFormat === 'standard' && (
              <div className="space-y-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 text-left">
                {/* Difficulty Segmented Bar */}
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                    <Filter className="h-3.5 w-3.5 text-brand-600" />
                    <span>Mức độ câu hỏi</span>
                  </span>

                  <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1 text-xs shadow-soft">
                    <button
                      type="button"
                      onClick={() => setDiffFilter('all')}
                      className={`rounded-lg px-3 py-1.5 font-semibold transition ${
                        diffFilter === 'all'
                          ? 'bg-brand-600 text-white shadow-soft'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Tất cả ({questions.length})
                    </button>
                    <button
                      type="button"
                      onClick={() => setDiffFilter('basic')}
                      className={`rounded-lg px-3 py-1.5 font-semibold transition ${
                        diffFilter === 'basic'
                          ? 'bg-emerald-600 text-white shadow-soft'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Cơ bản ({basicCount})
                    </button>
                    <button
                      type="button"
                      onClick={() => setDiffFilter('advanced')}
                      className={`rounded-lg px-3 py-1.5 font-semibold transition ${
                        diffFilter === 'advanced'
                          ? 'bg-amber-600 text-white shadow-soft'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Nâng cao ({advancedCount})
                    </button>
                  </div>
                </div>

                {/* Shuffle Options */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/60 pt-3 text-xs">
                  <label className="flex cursor-pointer select-none items-center gap-2 text-slate-700 hover:text-brand-700">
                    <input
                      type="checkbox"
                      checked={shuffleQuestionsSetting}
                      onChange={(e) => setShuffleQuestionsSetting(e.target.checked)}
                      className="h-3.5 w-3.5 rounded border-slate-300 accent-brand-600"
                    />
                    <span className="flex items-center gap-1 font-medium">
                      <Shuffle className="h-3.5 w-3.5 text-brand-500" /> Đảo thứ tự câu hỏi
                    </span>
                  </label>

                  <label className="flex cursor-pointer select-none items-center gap-2 text-slate-700 hover:text-brand-700">
                    <input
                      type="checkbox"
                      checked={shuffleOptionsSetting}
                      onChange={(e) => setShuffleOptionsSetting(e.target.checked)}
                      className="h-3.5 w-3.5 rounded border-slate-300 accent-brand-600"
                    />
                    <span className="flex items-center gap-1 font-medium">
                      <Shuffle className="h-3.5 w-3.5 text-brand-500" /> Xáo trộn đáp án A-B-C-D
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Prominent Start Button */}
            <div className="text-center pt-2">
              <button type="button" onClick={handleStartQuiz} className="edu-btn-primary px-8 py-3.5">
                <Play className="h-4 w-4 fill-current" />
                <span>
                  Bắt đầu làm bài (
                  {examFormat === 'format2025'
                    ? 'Format 2025'
                    : examFormat === 'adaptive_cat'
                      ? 'Thích ứng CAT • 10 câu'
                      : 'Tiêu chuẩn'}
                  )
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Collapsible History Section */}
        {attempts.length > 0 && (
          <div className="edu-card overflow-hidden">
            <button
              type="button"
              onClick={() => setShowHistory(!showHistory)}
              className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-slate-50"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <History className="h-4 w-4" />
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                  Lịch sử làm bài ({attempts.length} lần gần nhất)
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                {highestScore !== null && (
                  <span className="hidden text-slate-500 sm:inline">
                    Điểm cao nhất:{' '}
                    <strong className="font-bold text-emerald-700">
                      {highestScore}/{questions.length}
                    </strong>
                  </span>
                )}
                <span className="text-xs font-bold text-brand-600">
                  {showHistory ? '▲ Thu gọn' : '▼ Xem chi tiết'}
                </span>
              </div>
            </button>

            {showHistory && (
              <div className="divide-y divide-slate-100 border-t border-slate-100 p-4 pt-0">
                {attempts.map((att, idx) => {
                  const isViewingThis = viewingAttempt?.id === att.id;
                  let parsedAnswers: Record<string, any> = {};
                  try {
                    parsedAnswers = JSON.parse(att.answers_json || '{}');
                  } catch {}

                  return (
                    <div key={att.id} className="space-y-3 py-3 first:pt-0 last:pb-0">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-100 text-[11px] font-bold text-slate-700">
                            #{attempts.length - idx}
                          </span>
                          <span className="text-sm font-bold text-slate-900">
                            {att.score} / {att.total_questions} điểm
                          </span>
                          <span className="rounded-md bg-emerald-50 px-2 py-0.5 font-semibold text-emerald-700">
                            {((att.score / (att.total_questions || 25)) * 10).toFixed(1)} điểm (thang 10)
                          </span>
                          <span className="flex items-center gap-1 text-slate-400">
                            <Clock className="h-3 w-3" /> {formatTime(att.time_spent_sec)}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1 text-[11px] text-slate-400">
                            <Calendar className="h-3 w-3" /> {formatDate(att.created_at)}
                          </span>
                          <button
                            type="button"
                            onClick={() => setViewingAttempt(isViewingThis ? null : att)}
                            className="edu-btn-ghost flex items-center gap-1 px-2.5 py-1 text-xs"
                          >
                            <Eye className="h-3.5 w-3.5" />
                            <span>{isViewingThis ? 'Đóng xem lại' : 'Xem lại bài làm'}</span>
                          </button>
                        </div>
                      </div>

                      {/* Detailed Review of Previous Attempt */}
                      {isViewingThis && (
                        <div className="animate-fade-in space-y-4 rounded-2xl border border-slate-200/80 bg-slate-50 p-4">
                          <div className="border-b border-slate-200 pb-2 text-xs font-bold text-slate-800">
                            Chi tiết các câu trả lời trong lần làm bài #{attempts.length - idx}:
                          </div>
                          <div className="max-h-96 space-y-4 overflow-y-auto pr-1">
                            {questions.map((q, qIdx) => {
                              const chosenOpt = parsedAnswers[String(q.id)] ?? parsedAnswers[q.id as any];
                              const isCorrectChoice = Number(chosenOpt) === q.correct_index;
                              const optionLetters = ['A', 'B', 'C', 'D'];

                              return (
                                <div
                                  key={q.id}
                                  className="space-y-2 rounded-xl border border-slate-200/70 bg-white p-3 text-xs"
                                >
                                  <div className="flex items-center justify-between gap-2">
                                    <span className="font-bold text-slate-900">Câu {qIdx + 1}:</span>
                                    <span
                                      className={`flex items-center gap-1 font-semibold ${
                                        isCorrectChoice ? 'text-emerald-600' : 'text-rose-600'
                                      }`}
                                    >
                                      {isCorrectChoice ? (
                                        <>
                                          <CheckCircle2 className="h-3.5 w-3.5" /> Đúng
                                        </>
                                      ) : (
                                        <>
                                          <XCircle className="h-3.5 w-3.5" /> Sai (Đã chọn:{' '}
                                          {typeof chosenOpt === 'number' && chosenOpt >= 0
                                            ? optionLetters[chosenOpt]
                                            : typeof chosenOpt === 'object'
                                              ? 'Dạng Đúng/Sai'
                                              : String(chosenOpt || 'Chưa làm')}
                                          )
                                        </>
                                      )}
                                    </span>
                                  </div>
                                  <div className="font-medium text-slate-800">
                                    <RichPhysicsText text={q.question_text} />
                                  </div>
                                  <div className="flex justify-between border-t border-slate-100 pt-1 text-[11px] text-slate-500">
                                    <span>
                                      Đáp án đúng:{' '}
                                      <strong className="text-emerald-700">
                                        {optionLetters[q.correct_index]}. {q.options[q.correct_index]}
                                      </strong>
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  if (examFormat === 'adaptive_cat') {
    return (
      <AdaptiveCatRunner
        title={title}
        scopeType={scopeType}
        scopeId={scopeId}
        questions={questions}
        targetLength={10}
        onExitMode={handleReset}
      />
    );
  }

  // ----------------------------------------------------
  // QUESTION CARD RENDERER
  // ----------------------------------------------------
  const renderQuestionCard = (q: QuestionItem, idx: number) => {
    const userChoice = answers[q.id];
    const qType = q.question_type || 'multiple_choice';
    const optionLetters = ['A', 'B', 'C', 'D'];

    // Part header badge
    let partBadge = 'Phần I: Trắc nghiệm 4 lựa chọn';
    let partColor = 'bg-brand-50 text-brand-700 border-brand-200';
    if (qType === 'true_false') {
      partBadge = 'Phần II: Trắc nghiệm Đúng / Sai';
      partColor = 'bg-purple-50 text-purple-700 border-purple-200';
    } else if (qType === 'short_answer') {
      partBadge = 'Phần III: Trả lời ngắn / Điền số';
      partColor = 'bg-amber-50 text-amber-800 border-amber-200';
    }

    // Score evaluation for this question
    let isFullyCorrect = false;
    let gainedScore = 0;
    if (submitted && examResult) {
      gainedScore = examResult.questionScores[q.id] || 0;
      isFullyCorrect = gainedScore >= 1.0;
    }

    return (
      <div key={q.id} className="edu-card space-y-5 p-6 sm:p-7">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand-50 text-[11px] font-extrabold text-brand-700">
              {idx + 1}
            </span>
            <span className="font-extrabold uppercase tracking-wider text-brand-600">
              Câu {idx + 1} / {totalQuestions}
            </span>
            <span className={`rounded-md border px-2 py-0.5 font-bold ${partColor}`}>
              {partBadge}
            </span>
            <span className="text-slate-300">•</span>
            <span className="font-medium text-slate-500">
              Mức độ: {DIFF_LABELS[q.difficulty] || 'Thông hiểu'}
            </span>
          </div>

          {submitted && (
            <span
              className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 font-bold ${
                isFullyCorrect
                  ? 'bg-emerald-50 text-emerald-700'
                  : gainedScore > 0
                    ? 'bg-amber-50 text-amber-700'
                    : 'bg-rose-50 text-rose-700'
              }`}
            >
              {isFullyCorrect ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Đúng (+{gainedScore} đ)
                </>
              ) : gainedScore > 0 ? (
                <>
                  <Award className="h-4 w-4" /> Đúng một phần (+{gainedScore} đ)
                </>
              ) : (
                <>
                  <XCircle className="h-4 w-4" /> Sai (0 đ)
                </>
              )}
            </span>
          )}
        </div>

        {/* Question Statement */}
        <div className="text-base font-semibold leading-relaxed text-slate-900 sm:text-lg">
          <RichPhysicsText text={q.question_text} />
        </div>

        {/* --- DẠNG 1: TRẮC NGHIỆM 4 LỰA CHỌN --- */}
        {qType === 'multiple_choice' && (
          <div className="space-y-2.5 pt-1">
            {q.options.map((opt, optIdx) => {
              const isSelected = userChoice === optIdx;
              const isRightAnswer = q.correct_index === optIdx;

              let optClass =
                'border-slate-200 bg-white hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50/40 hover:shadow-soft text-slate-800';
              if (!submitted && isSelected) {
                optClass =
                  'border-brand-500 bg-brand-50/70 text-brand-950 font-semibold ring-2 ring-brand-500/25';
              } else if (submitted) {
                if (isRightAnswer) {
                  optClass = 'border-emerald-500 bg-emerald-50/70 font-semibold text-emerald-950';
                } else if (isSelected && !isRightAnswer) {
                  optClass = 'border-rose-400 bg-rose-50/60 text-rose-900';
                } else {
                  optClass = 'border-slate-100 bg-slate-50/50 text-slate-400';
                }
              }

              return (
                <button
                  key={optIdx}
                  type="button"
                  disabled={submitted}
                  onClick={() => handleSelectOption(q.id, optIdx)}
                  className={`flex w-full items-start gap-3.5 rounded-2xl border p-4 text-left text-sm transition duration-150 ease-snap ${optClass}`}
                >
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                      !submitted && isSelected
                        ? 'bg-brand-600 text-white'
                        : submitted && isRightAnswer
                          ? 'bg-emerald-600 text-white'
                          : submitted && isSelected
                            ? 'bg-rose-600 text-white'
                            : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {optionLetters[optIdx]}
                  </span>
                  <span className="leading-relaxed">
                    <RichPhysicsText text={opt} />
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* --- DẠNG 2: TRẮC NGHIỆM ĐÚNG / SAI (4 Ý a, b, c, d) --- */}
        {qType === 'true_false' && q.tf_statements && (
          <div className="space-y-3 pt-1">
            <div className="rounded-xl border border-purple-100 bg-purple-50/40 px-3.5 py-2 text-xs text-purple-900">
              💡 <strong>Quy tắc tính điểm Bộ GD&ĐT:</strong> Đúng 1 ý = 0.1đ • Đúng 2 ý = 0.25đ • Đúng 3 ý = 0.5đ • Đúng cả 4 ý = 1.0đ.
            </div>

            <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white">
              {q.tf_statements.map((st) => {
                const userTf = (userChoice as Record<string, boolean>) || {};
                const selectedVal = userTf[st.id]; // true | false | undefined
                const isCorrectMatch = submitted && selectedVal === st.is_correct;

                return (
                  <div
                    key={st.id}
                    className={`flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between ${
                      submitted
                        ? isCorrectMatch
                          ? 'bg-emerald-50/30'
                          : 'bg-rose-50/20'
                        : ''
                    }`}
                  >
                    <div className="space-y-1 sm:max-w-[70%]">
                      <div className="flex items-start gap-2 text-sm text-slate-800">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-purple-100 text-xs font-extrabold text-purple-800">
                          {st.id})
                        </span>
                        <div className="leading-relaxed">
                          <RichPhysicsText text={st.text} />
                        </div>
                      </div>
                      {submitted && (
                        <div className="ml-7 text-[11px] font-medium text-slate-500">
                          Đáp án đúng:{' '}
                          <strong className={st.is_correct ? 'text-emerald-700' : 'text-rose-700'}>
                            {st.is_correct ? 'ĐÚNG' : 'SAI'}
                          </strong>
                          {st.explanation && ` — ${st.explanation}`}
                        </div>
                      )}
                    </div>

                    {/* True / False Buttons */}
                    <div className="flex shrink-0 items-center gap-2">
                      <button
                        type="button"
                        disabled={submitted}
                        onClick={() => handleToggleTrueFalse(q.id, st.id, true)}
                        className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                          selectedVal === true
                            ? 'bg-blue-600 text-white shadow-soft ring-2 ring-blue-400/30'
                            : 'border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        Đúng
                      </button>
                      <button
                        type="button"
                        disabled={submitted}
                        onClick={() => handleToggleTrueFalse(q.id, st.id, false)}
                        className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                          selectedVal === false
                            ? 'bg-purple-600 text-white shadow-soft ring-2 ring-purple-400/30'
                            : 'border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        Sai
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* --- DẠNG 3: TRẮC NGHIỆM TRẢ LỜI NGẮN (ĐIỀN SỐ) --- */}
        {qType === 'short_answer' && (
          <div className="space-y-3.5 pt-1">
            <div className="rounded-xl border border-amber-100 bg-amber-50/40 px-3.5 py-2 text-xs text-amber-900">
              ✍️ <strong>Yêu cầu:</strong> Tự giải và nhập đáp số bằng số thập phân hoặc nguyên vào ô bên dưới.
              {q.short_answer?.unit && <span> Đơn vị đo: <strong className="text-amber-950">{q.short_answer.unit}</strong>.</span>}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <input
                  type="text"
                  disabled={submitted}
                  value={userChoice !== undefined ? String(userChoice) : ''}
                  onChange={(e) => handleChangeShortAnswer(q.id, e.target.value)}
                  placeholder="Nhập kết quả (ví dụ: 12.5 hoặc -4)"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base font-bold text-slate-900 shadow-soft placeholder:font-normal placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 disabled:bg-slate-50"
                />
                {q.short_answer?.unit && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-extrabold text-slate-700">
                    {q.short_answer.unit}
                  </span>
                )}
              </div>

              {!submitted && (
                <div className="flex flex-wrap gap-1.5">
                  {['-', '.', '0', '1', '2', '5'].map((sym) => (
                    <button
                      key={sym}
                      type="button"
                      onClick={() => {
                        const cur = userChoice !== undefined ? String(userChoice) : '';
                        handleChangeShortAnswer(q.id, cur + sym);
                      }}
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-700 transition hover:bg-slate-100"
                    >
                      {sym}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleChangeShortAnswer(q.id, '')}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600 transition hover:bg-slate-100"
                  >
                    Xóa
                  </button>
                </div>
              )}
            </div>

            {submitted && q.short_answer && (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-800">Đáp án chuẩn:</span>
                  <strong className="text-emerald-700 text-sm">
                    {q.short_answer.target_value} {q.short_answer.unit || ''}
                  </strong>
                  {q.short_answer.tolerance && (
                    <span className="text-slate-400">
                      (Dung sai cho phép: ±{q.short_answer.tolerance})
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Clean Explanation Box after Submit */}
        {submitted && (
          <div className="rounded-2xl border border-slate-200/90 bg-slate-50 p-4 text-xs leading-relaxed text-slate-700 sm:text-sm">
            <strong className="font-bold text-slate-900">
              Giải thích chi tiết:{' '}
            </strong>
            <RichPhysicsText text={q.explanation} />
          </div>
        )}
      </div>
    );
  };

  const progressPct = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  // ----------------------------------------------------
  // ACTIVE QUIZ INTERFACE
  // ----------------------------------------------------
  return (
    <div className="space-y-5">
      {/* Control Header */}
      <div className="edu-card space-y-4 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-base font-extrabold tracking-tight text-slate-900">{title}</h2>
              <span className="edu-chip-brand">
                {examFormat === 'format2025' ? 'Cấu trúc Mới Bộ GD&ĐT 2025' : 'Tiêu chuẩn 25 câu'}
              </span>
            </div>
            <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1 rounded-md bg-brand-50 px-2 py-0.5 font-bold text-brand-700">
                <Clock className="h-3.5 w-3.5" /> {formatTime(secondsElapsed)}
              </span>
              <span className="flex items-center gap-1">
                <Target className="h-3.5 w-3.5 text-slate-400" />
                Đã hoàn thành:{' '}
                <strong className="text-slate-800">
                  {answeredCount}/{totalQuestions}
                </strong>{' '}
                câu
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setViewMode(viewMode === 'single' ? 'list' : 'single')}
              className="edu-btn-ghost px-3 py-2 text-xs"
            >
              {viewMode === 'single' ? (
                <>
                  <List className="h-3.5 w-3.5" /> Xem cả {totalQuestions} câu
                </>
              ) : (
                <>
                  <Maximize2 className="h-3.5 w-3.5" /> Xem từng câu
                </>
              )}
            </button>

            {!submitted ? (
              <>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-bold text-rose-700 transition hover:bg-rose-100"
                >
                  <XCircle className="h-3.5 w-3.5" />
                  <span>Hủy kiểm tra</span>
                </button>
                <button type="button" onClick={handleSubmit} className="edu-btn-primary px-4 py-2 text-xs">
                  Nộp bài ({answeredCount}/{totalQuestions})
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white shadow-soft transition hover:bg-slate-800 sm:text-sm"
              >
                <RotateCcw className="h-3.5 w-3.5" /> Làm lại
              </button>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div>
          <div className="edu-progress">
            <div className="edu-progress-bar" style={{ width: `${progressPct}%` }} />
          </div>
        </div>

        {/* Score Summary when submitted */}
        {submitted && examResult && (
          <div className="flex flex-col gap-4 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-glow-emerald">
                  <span className="text-2xl font-extrabold leading-none">
                    {examResult.scaledScore10.toFixed(1)}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wide text-emerald-100">
                    /10 điểm
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-base font-extrabold text-emerald-950">
                    <Trophy className="h-5 w-5 text-emerald-600" />
                    Tổng kết: Đạt {examResult.totalScore.toFixed(2)} / {examResult.maxScore.toFixed(2)} điểm
                  </div>
                  <div className="mt-0.5 text-xs text-emerald-800">
                    Thời gian hoàn thành: {formatTime(secondsElapsed)} • Bấm vào từng câu bên dưới để xem lời giải.
                  </div>
                </div>
              </div>

              {examResult.totalScore < examResult.maxScore && (
                <Link
                  href="/mistakes"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-rose-600 px-3.5 py-2 text-xs font-bold text-white shadow-soft transition hover:bg-rose-500"
                >
                  Xem câu cần ôn lại trong Sổ tay →
                </Link>
              )}
            </div>

            {/* Part Score Breakdown */}
            {examFormat === 'format2025' && (
              <div className="grid grid-cols-1 gap-2.5 border-t border-emerald-200/80 pt-3 sm:grid-cols-3">
                <div className="rounded-xl border border-brand-200 bg-white/80 p-2.5 text-center">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-brand-700">
                    Phần I (4 lựa chọn)
                  </div>
                  <div className="mt-0.5 text-sm font-extrabold text-brand-950">
                    {examResult.part1Score} / {examResult.part1Max} điểm
                  </div>
                </div>

                <div className="rounded-xl border border-purple-200 bg-white/80 p-2.5 text-center">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-purple-700">
                    Phần II (Đúng/Sai)
                  </div>
                  <div className="mt-0.5 text-sm font-extrabold text-purple-950">
                    {examResult.part2Score.toFixed(2)} / {examResult.part2Max.toFixed(2)} điểm
                  </div>
                </div>

                <div className="rounded-xl border border-amber-200 bg-white/80 p-2.5 text-center">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                    Phần III (Điền số)
                  </div>
                  <div className="mt-0.5 text-sm font-extrabold text-amber-950">
                    {examResult.part3Score} / {examResult.part3Max} điểm
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Compact Number Strip 1..N with Section Markers */}
        <div className="flex flex-wrap gap-1.5 border-t border-slate-100 pt-3">
          {activeQuestions.map((q, idx) => {
            const isCurrent = viewMode === 'single' && currentIdx === idx;
            const qType = q.question_type || 'multiple_choice';
            const userChoice = answers[q.id];

            // Answered check
            let isAnswered = false;
            if (qType === 'true_false') {
              isAnswered = userChoice && Object.keys(userChoice).length > 0;
            } else if (qType === 'short_answer') {
              isAnswered = userChoice && String(userChoice).trim().length > 0;
            } else {
              isAnswered = userChoice !== undefined;
            }

            // Right / Wrong status after submit
            let isRight = false;
            let isPartial = false;
            if (submitted && examResult) {
              const qScore = examResult.questionScores[q.id] || 0;
              if (qScore >= 1.0) isRight = true;
              else if (qScore > 0) isPartial = true;
            }

            let numClass = 'bg-slate-100 text-slate-600 hover:bg-slate-200';
            if (!submitted) {
              if (isCurrent) {
                numClass = 'bg-brand-600 text-white font-bold ring-2 ring-brand-200';
              } else if (isAnswered) {
                numClass = 'border border-brand-200 bg-brand-50 font-semibold text-brand-700';
              }
            } else {
              if (isRight) {
                numClass = 'bg-emerald-600 font-semibold text-white';
              } else if (isPartial) {
                numClass = 'bg-amber-500 font-semibold text-white';
              } else {
                numClass = 'bg-rose-500 font-semibold text-white';
              }
            }

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => {
                  setCurrentIdx(idx);
                  if (viewMode === 'list') {
                    setViewMode('single');
                  }
                }}
                className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs transition duration-150 ${numClass}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Question Content: Single Focus Mode vs List Mode */}
      {viewMode === 'single' ? (
        <div className="animate-fade-in space-y-4">
          {renderQuestionCard(activeQuestions[currentIdx], currentIdx)}

          <div className="flex items-center justify-between">
            <button
              type="button"
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
              className="edu-btn-ghost flex items-center gap-1.5 px-4 py-2.5 text-xs disabled:opacity-40 sm:text-sm"
            >
              <ArrowLeft className="h-4 w-4" /> Câu trước
            </button>

            {currentIdx < totalQuestions - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentIdx((i) => Math.min(totalQuestions - 1, i + 1))}
                className="edu-btn-primary px-5 py-2.5"
              >
                <span>Câu tiếp theo</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : !submitted ? (
              <button
                type="button"
                onClick={handleSubmit}
                className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-emerald-700 sm:text-sm"
              >
                <Sparkles className="h-4 w-4" />
                Nộp bài &amp; Xem điểm
              </button>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="animate-fade-in space-y-4">
          {activeQuestions.map((q, idx) => renderQuestionCard(q, idx))}
        </div>
      )}
    </div>
  );
}

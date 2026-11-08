'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { QuestionItem } from '@/types/cms';
import { RichPhysicsText } from './KatexRenderer';
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
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [viewMode, setViewMode] = useState<'single' | 'list'>('single');
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  // Feature 3: Quiz custom settings
  const [shuffleQuestionsSetting, setShuffleQuestionsSetting] = useState(false);
  const [shuffleOptionsSetting, setShuffleOptionsSetting] = useState(false);
  const [diffFilter, setDiffFilter] = useState<'all' | 'basic' | 'advanced'>('all');

  // Active questions working list (after filter & shuffle)
  const [activeQuestions, setActiveQuestions] = useState<QuestionItem[]>(questions);

  // Feature 4: Quiz Attempts History
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

  // Only start counting time after the user clicks "Bắt đầu làm bài"
  useEffect(() => {
    if (!started || submitted) return;
    const timer = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [started, submitted]);

  const totalQuestions = activeQuestions.length;
  const answeredCount = Object.keys(answers).length;

  const calculateScore = () => {
    let correct = 0;
    for (const q of activeQuestions) {
      if (answers[q.id] === q.correct_index) {
        correct++;
      }
    }
    return correct;
  };

  const handleSelectOption = (questionId: number, optionIdx: number) => {
    if (!started || submitted) return;
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx,
    }));
  };

  const handleStartQuiz = () => {
    // 1. Filter by difficulty
    let list = [...questions];
    if (diffFilter === 'basic') {
      list = list.filter((q) => q.difficulty === 'nhan_biet' || q.difficulty === 'thong_hieu');
    } else if (diffFilter === 'advanced') {
      list = list.filter((q) => q.difficulty === 'van_dung' || q.difficulty === 'van_dung_cao');
    }

    // 2. Shuffle options inside each question (preserving correct answer mapping)
    if (shuffleOptionsSetting) {
      list = list.map((q) => {
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

    // 3. Shuffle question order
    if (shuffleQuestionsSetting) {
      list = shuffleArray(list);
    }

    setActiveQuestions(list);
    setAnswers({});
    setSubmitted(false);
    setSecondsElapsed(0);
    setCurrentIdx(0);
    setStarted(true);
  };

  const handleSubmit = async () => {
    if (submitted) return;
    const finalScore = calculateScore();
    setSubmitted(true);
    try {
      await fetch('/api/quiz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scopeType,
          scopeId,
          studentName: 'Học sinh',
          score: finalScore,
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

  const score = submitted ? calculateScore() : 0;

  if (questions.length === 0) {
    return (
      <div className="edu-card p-8 text-center text-sm text-slate-500">
        Chưa có câu hỏi trắc nghiệm nào trong mục này.
      </div>
    );
  }

  // State for collapsible history
  const [showHistory, setShowHistory] = useState<boolean>(false);

  // Screen before starting the quiz
  if (!started) {
    const highestScore =
      attempts.length > 0 ? Math.max(...attempts.map((a) => a.score)) : null;

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
                Ngân hàng gồm <strong className="text-white">{questions.length} câu hỏi trắc nghiệm</strong> từ
                cơ bản đến vận dụng cao. Thời gian làm bài 45 phút có bấm giờ.
              </p>
            </div>
          </div>

          <div className="space-y-5 p-6 sm:p-7">
            {/* Consolidated Exam Configuration Box */}
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
                    className={`rounded-lg px-3 py-1.5 font-semibold transition duration-150 ${
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
                    className={`rounded-lg px-3 py-1.5 font-semibold transition duration-150 ${
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
                    className={`rounded-lg px-3 py-1.5 font-semibold transition duration-150 ${
                      diffFilter === 'advanced'
                        ? 'bg-amber-600 text-white shadow-soft'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Nâng cao ({advancedCount})
                  </button>
                </div>
              </div>

              {/* Compact Shuffle Options */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/60 pt-3 text-xs">
                <label className="flex cursor-pointer select-none items-center gap-2 text-slate-700 transition-colors hover:text-brand-700">
                  <input
                    type="checkbox"
                    checked={shuffleQuestionsSetting}
                    onChange={(e) => setShuffleQuestionsSetting(e.target.checked)}
                    className="h-3.5 w-3.5 rounded border-slate-300 accent-brand-600 focus:ring-brand-500"
                  />
                  <span className="flex items-center gap-1 font-medium">
                    <Shuffle className="h-3.5 w-3.5 text-brand-500" /> Đảo thứ tự câu hỏi
                  </span>
                </label>

                <label className="flex cursor-pointer select-none items-center gap-2 text-slate-700 transition-colors hover:text-brand-700">
                  <input
                    type="checkbox"
                    checked={shuffleOptionsSetting}
                    onChange={(e) => setShuffleOptionsSetting(e.target.checked)}
                    className="h-3.5 w-3.5 rounded border-slate-300 accent-brand-600 focus:ring-brand-500"
                  />
                  <span className="flex items-center gap-1 font-medium">
                    <Shuffle className="h-3.5 w-3.5 text-brand-500" /> Xáo trộn đáp án A-B-C-D
                  </span>
                </label>
              </div>
            </div>

            {/* Prominent Start Button */}
            <div className="text-center">
              <button type="button" onClick={handleStartQuiz} className="edu-btn-primary px-8 py-3.5">
                <Play className="h-4 w-4 fill-current" />
                <span>Bắt đầu làm bài thi ngay</span>
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
                  let parsedAnswers: Record<string, number> = {};
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
                            {att.score} / {att.total_questions} câu
                          </span>
                          <span className="rounded-md bg-emerald-50 px-2 py-0.5 font-semibold text-emerald-700">
                            {((att.score / att.total_questions) * 10).toFixed(1)} điểm
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

                      {/* Detailed Review of This Attempt */}
                      {isViewingThis && (
                        <div className="animate-fade-in space-y-4 rounded-2xl border border-slate-200/80 bg-slate-50 p-4">
                          <div className="border-b border-slate-200 pb-2 text-xs font-bold text-slate-800">
                            Chi tiết các câu trả lời trong lần làm bài #{attempts.length - idx} (Đúng{' '}
                            {att.score}/{att.total_questions} câu):
                          </div>
                          <div className="max-h-96 space-y-4 overflow-y-auto pr-1">
                            {questions.map((q, qIdx) => {
                              const chosenOpt = parsedAnswers[String(q.id)] ?? parsedAnswers[q.id as any];
                              const isCorrectChoice = chosenOpt === q.correct_index;
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
                                          {chosenOpt !== undefined && chosenOpt >= 0
                                            ? optionLetters[chosenOpt]
                                            : 'Chưa làm'}
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

  const renderQuestionCard = (q: QuestionItem, idx: number) => {
    const userChoice = answers[q.id];
    const isCorrect = submitted && userChoice === q.correct_index;
    const optionLetters = ['A', 'B', 'C', 'D'];

    return (
      <div
        key={q.id}
        className="edu-card space-y-5 p-6 sm:p-7"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-brand-50 text-[11px] font-extrabold text-brand-700">
              {idx + 1}
            </span>
            <span className="font-extrabold uppercase tracking-wider text-brand-600">
              Câu {idx + 1} / {totalQuestions}
            </span>
            <span className="text-slate-300">•</span>
            <span className="font-medium text-slate-500">
              Mức độ: {DIFF_LABELS[q.difficulty] || 'Nhận biết'}
            </span>
          </div>

          {submitted && (
            <span
              className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 font-bold ${
                isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
              }`}
            >
              {isCorrect ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Đúng
                </>
              ) : (
                <>
                  <XCircle className="h-4 w-4" />{' '}
                  {userChoice === undefined ? 'Chưa làm' : 'Sai'}
                </>
              )}
            </span>
          )}
        </div>

        <div className="text-base font-semibold leading-relaxed text-slate-900 sm:text-lg">
          <RichPhysicsText text={q.question_text} />
        </div>

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

        {/* Clean Explanation Box after Submit */}
        {submitted && (
          <div className="rounded-2xl border border-slate-200/90 bg-slate-50 p-4 text-xs leading-relaxed text-slate-700 sm:text-sm">
            <strong className="font-bold text-slate-900">
              Giải thích (Đáp án {optionLetters[q.correct_index]}):{' '}
            </strong>
            <RichPhysicsText text={q.explanation} />
          </div>
        )}
      </div>
    );
  };

  const progressPct = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  return (
    <div className="space-y-5">
      {/* Control Header */}
      <div className="edu-card space-y-4 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-base font-extrabold tracking-tight text-slate-900">{title}</h2>
              {diffFilter !== 'all' && (
                <span className="edu-chip-brand">
                  {diffFilter === 'basic' ? 'Cơ bản (NB + TH)' : 'Nâng cao (VD + VDC)'}
                </span>
              )}
            </div>
            <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1 rounded-md bg-brand-50 px-2 py-0.5 font-bold text-brand-700">
                <Clock className="h-3.5 w-3.5" /> {formatTime(secondsElapsed)}
              </span>
              <span className="flex items-center gap-1">
                <Target className="h-3.5 w-3.5 text-slate-400" />
                Đã chọn:{' '}
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
              <button type="button" onClick={handleSubmit} className="edu-btn-primary px-4 py-2 text-xs">
                Nộp bài ({answeredCount}/{totalQuestions})
              </button>
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
        {submitted && (
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-glow-emerald">
                <span className="text-lg font-extrabold leading-none">{score}</span>
                <span className="text-[10px] font-bold uppercase tracking-wide text-emerald-100">
                  /{totalQuestions}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-sm font-extrabold text-emerald-950">
                  <Trophy className="h-4 w-4 text-emerald-600" />
                  Kết quả: Đúng {score} / {totalQuestions} câu (
                  {((score / totalQuestions) * 10).toFixed(1)} điểm)
                </div>
                <div className="mt-0.5 text-xs text-emerald-800">
                  Thời gian hoàn thành: {formatTime(secondsElapsed)} • Bấm vào từng ô số bên dưới để xem
                  giải thích chi tiết.
                </div>
              </div>
            </div>
            {score < totalQuestions && (
              <Link
                href="/mistakes"
                className="inline-flex items-center gap-1.5 rounded-xl bg-rose-600 px-3.5 py-2 text-xs font-bold text-white shadow-soft transition hover:bg-rose-500"
              >
                Đã lưu {totalQuestions - score} câu sai vào Sổ tay →
              </Link>
            )}
          </div>
        )}

        {/* Compact Number Strip 1..N */}
        <div className="flex flex-wrap gap-1.5 border-t border-slate-100 pt-3">
          {activeQuestions.map((q, idx) => {
            const isCurrent = viewMode === 'single' && currentIdx === idx;
            const isAnswered = answers[q.id] !== undefined;
            const isRight = submitted && answers[q.id] === q.correct_index;
            const isWrong = submitted && answers[q.id] !== q.correct_index;

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
              } else if (isWrong) {
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

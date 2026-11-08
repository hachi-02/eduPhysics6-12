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
      <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-sm text-slate-500">
        Chưa có câu hỏi trắc nghiệm nào trong mục này.
      </div>
    );
  }

  // State for collapsible history
  const [showHistory, setShowHistory] = useState<boolean>(false);

  // Screen before starting the quiz: Clean, focused & consolidated
  if (!started) {
    const highestScore =
      attempts.length > 0 ? Math.max(...attempts.map((a) => a.score)) : null;

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-6 sm:p-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto shadow-2xs">
            <CheckSquare className="w-6 h-6" />
          </div>

          <div className="space-y-1.5">
            <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
              {scopeType === 'chapter' ? 'Đề kiểm tra tổng hợp Chương' : 'Bài kiểm tra cuối Chủ đề'}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">{title}</h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
              Ngân hàng gồm <strong>{questions.length} câu hỏi trắc nghiệm</strong> từ cơ bản đến vận dụng cao. Thời gian làm bài 45 phút có bấm giờ.
            </p>
          </div>

          {/* Consolidated Exam Configuration Box */}
          <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 space-y-3.5 text-left">
            {/* Difficulty Segmented Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-indigo-600" />
                <span>Mức độ câu hỏi:</span>
              </span>

              <div className="inline-flex rounded-xl bg-white p-1 border border-slate-200 shadow-2xs text-xs">
                <button
                  type="button"
                  onClick={() => setDiffFilter('all')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                    diffFilter === 'all'
                      ? 'bg-indigo-600 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Tất cả ({questions.length})
                </button>
                <button
                  type="button"
                  onClick={() => setDiffFilter('basic')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                    diffFilter === 'basic'
                      ? 'bg-emerald-600 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Cơ bản ({basicCount})
                </button>
                <button
                  type="button"
                  onClick={() => setDiffFilter('advanced')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                    diffFilter === 'advanced'
                      ? 'bg-amber-600 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Nâng cao ({advancedCount})
                </button>
              </div>
            </div>

            {/* Compact Shuffle Options */}
            <div className="pt-2.5 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-3 text-xs">
              <label className="flex items-center gap-2 cursor-pointer select-none text-slate-700 hover:text-indigo-600 transition-colors">
                <input
                  type="checkbox"
                  checked={shuffleQuestionsSetting}
                  onChange={(e) => setShuffleQuestionsSetting(e.target.checked)}
                  className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 w-3.5 h-3.5 accent-indigo-600"
                />
                <span className="flex items-center gap-1 font-medium">
                  <Shuffle className="w-3.5 h-3.5 text-indigo-500" /> Đảo thứ tự câu hỏi
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer select-none text-slate-700 hover:text-indigo-600 transition-colors">
                <input
                  type="checkbox"
                  checked={shuffleOptionsSetting}
                  onChange={(e) => setShuffleOptionsSetting(e.target.checked)}
                  className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 w-3.5 h-3.5 accent-indigo-600"
                />
                <span className="flex items-center gap-1 font-medium">
                  <Shuffle className="w-3.5 h-3.5 text-indigo-500" /> Xáo trộn đáp án A-B-C-D
                </span>
              </label>
            </div>
          </div>

          {/* Prominent Start Button */}
          <div className="pt-1">
            <button
              type="button"
              onClick={handleStartQuiz}
              className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all hover:scale-[1.01]"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Bắt đầu làm bài thi ngay</span>
            </button>
          </div>
        </div>

        {/* Collapsible History Section */}
        {attempts.length > 0 && (
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden">
            <button
              type="button"
              onClick={() => setShowHistory(!showHistory)}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <History className="w-4 h-4 text-indigo-600" />
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Lịch sử làm bài ({attempts.length} lần gần nhất)
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                {highestScore !== null && (
                  <span className="text-slate-500">
                    Điểm cao nhất: <strong className="text-emerald-700 font-bold">{highestScore}/{questions.length}</strong>
                  </span>
                )}
                <span className="text-slate-400 font-bold text-xs">
                  {showHistory ? '▲ Thu gọn' : '▼ Xem chi tiết'}
                </span>
              </div>
            </button>

            {showHistory && (
              <div className="p-4 pt-0 border-t border-slate-100 divide-y divide-slate-100">
                {attempts.map((att, idx) => {
                const isViewingThis = viewingAttempt?.id === att.id;
                let parsedAnswers: Record<string, number> = {};
                try {
                  parsedAnswers = JSON.parse(att.answers_json || '{}');
                } catch {}

                return (
                  <div key={att.id} className="py-3 first:pt-0 last:pb-0 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-md bg-slate-100 text-slate-700 font-bold text-[11px] flex items-center justify-center">
                          #{attempts.length - idx}
                        </span>
                        <span className="font-bold text-sm text-slate-900">
                          {att.score} / {att.total_questions} câu
                        </span>
                        <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold">
                          {((att.score / att.total_questions) * 10).toFixed(1)} điểm
                        </span>
                        <span className="text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {formatTime(att.time_spent_sec)}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-slate-400 text-[11px] flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {formatDate(att.created_at)}
                        </span>
                        <button
                          type="button"
                          onClick={() => setViewingAttempt(isViewingThis ? null : att)}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center gap-1 transition"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>{isViewingThis ? 'Đóng xem lại' : 'Xem lại bài làm'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Detailed Review of This Attempt */}
                    {isViewingThis && (
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-4 animate-in fade-in duration-150">
                        <div className="text-xs font-bold text-slate-800 pb-2 border-b border-slate-200">
                          Chi tiết các câu trả lời trong lần làm bài #{attempts.length - idx} (Đúng {att.score}/{att.total_questions} câu):
                        </div>
                        <div className="space-y-4 max-h-96 overflow-y-auto pr-1">
                          {questions.map((q, qIdx) => {
                            const chosenOpt = parsedAnswers[String(q.id)] ?? parsedAnswers[q.id as any];
                            const isCorrectChoice = chosenOpt === q.correct_index;
                            const optionLetters = ['A', 'B', 'C', 'D'];

                            return (
                              <div
                                key={q.id}
                                className="p-3 rounded-lg bg-white border border-slate-200/70 text-xs space-y-2"
                              >
                                <div className="flex items-center justify-between gap-2">
                                  <span className="font-bold text-slate-900">
                                    Câu {qIdx + 1}:
                                  </span>
                                  <span
                                    className={`font-semibold flex items-center gap-1 ${
                                      isCorrectChoice ? 'text-emerald-600' : 'text-rose-600'
                                    }`}
                                  >
                                    {isCorrectChoice ? (
                                      <>
                                        <CheckCircle2 className="w-3.5 h-3.5" /> Đúng
                                      </>
                                    ) : (
                                      <>
                                        <XCircle className="w-3.5 h-3.5" /> Sai (Đã chọn: {chosenOpt !== undefined && chosenOpt >= 0 ? optionLetters[chosenOpt] : 'Chưa làm'})
                                      </>
                                    )}
                                  </span>
                                </div>
                                <div className="text-slate-800 font-medium">
                                  <RichPhysicsText text={q.question_text} />
                                </div>
                                <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-100 flex justify-between">
                                  <span>Đáp án đúng: <strong className="text-emerald-700">{optionLetters[q.correct_index]}. {q.options[q.correct_index]}</strong></span>
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
        className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm space-y-5"
      >
        <div className="flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-indigo-600 uppercase tracking-wider">
              Câu {idx + 1} / {totalQuestions}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 font-medium">
              Mức độ: {DIFF_LABELS[q.difficulty] || 'Nhận biết'}
            </span>
          </div>

          {submitted && (
            <span
              className={`inline-flex items-center gap-1 font-semibold ${
                isCorrect ? 'text-emerald-600' : 'text-rose-600'
              }`}
            >
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-4 h-4" /> Đúng
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4" />{' '}
                  {userChoice === undefined ? 'Chưa làm' : 'Sai'}
                </>
              )}
            </span>
          )}
        </div>

        <div className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed">
          <RichPhysicsText text={q.question_text} />
        </div>

        <div className="space-y-2.5 pt-1">
          {q.options.map((opt, optIdx) => {
            const isSelected = userChoice === optIdx;
            const isRightAnswer = q.correct_index === optIdx;

            let optClass =
              'border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-800';
            if (!submitted && isSelected) {
              optClass = 'border-indigo-600 bg-indigo-50/60 text-indigo-950 font-medium ring-1 ring-indigo-600';
            } else if (submitted) {
              if (isRightAnswer) {
                optClass = 'border-emerald-600 bg-emerald-50/70 text-emerald-950 font-medium';
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
                className={`w-full text-left p-4 rounded-xl border text-sm flex items-start gap-3.5 transition ${optClass}`}
              >
                <span
                  className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                    !submitted && isSelected
                      ? 'bg-indigo-600 text-white'
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
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="font-semibold text-slate-900">
              Giải thích (Đáp án {optionLetters[q.correct_index]}):{' '}
            </strong>
            <RichPhysicsText text={q.explanation} />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-5">
      {/* Calm Control Header */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-slate-900">{title}</h2>
              {diffFilter !== 'all' && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700">
                  {diffFilter === 'basic' ? 'Cơ bản (NB + TH)' : 'Nâng cao (VD + VDC)'}
                </span>
              )}
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
              <span className="flex items-center gap-1 font-medium text-indigo-600">
                <Clock className="w-3.5 h-3.5" /> {formatTime(secondsElapsed)}
              </span>
              <span>•</span>
              <span>
                Đã chọn: <strong className="text-slate-800">{answeredCount}/{totalQuestions}</strong> câu
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setViewMode(viewMode === 'single' ? 'list' : 'single')}
              className="px-3 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-medium flex items-center gap-1.5 transition"
            >
              {viewMode === 'single' ? (
                <>
                  <List className="w-3.5 h-3.5" /> Xem cả {totalQuestions} câu
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5" /> Xem từng câu
                </>
              )}
            </button>

            {!submitted ? (
              <button
                type="button"
                onClick={handleSubmit}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold shadow-sm transition"
              >
                Nộp bài ({answeredCount}/{totalQuestions})
              </button>
            ) : (
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Làm lại
              </button>
            )}
          </div>
        </div>

        {/* Clean Score Summary when submitted */}
        {submitted && (
          <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-sm font-bold text-emerald-950">
                Kết quả: Đúng {score} / {totalQuestions} câu ({((score / totalQuestions) * 10).toFixed(1)} điểm)
              </div>
              <div className="text-xs text-emerald-800 mt-0.5">
                Thời gian hoàn thành: {formatTime(secondsElapsed)} • Bấm vào từng ô số bên dưới để xem giải thích chi tiết.
              </div>
            </div>
            {score < totalQuestions && (
              <Link
                href="/mistakes"
                className="px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold transition shadow-sm"
              >
                Đã lưu {totalQuestions - score} câu sai vào Sổ tay →
              </Link>
            )}
          </div>
        )}

        {/* Compact Number Strip 1..N */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
          {activeQuestions.map((q, idx) => {
            const isCurrent = viewMode === 'single' && currentIdx === idx;
            const isAnswered = answers[q.id] !== undefined;
            const isRight = submitted && answers[q.id] === q.correct_index;
            const isWrong = submitted && answers[q.id] !== q.correct_index;

            let numClass = 'bg-slate-100 text-slate-600 hover:bg-slate-200';
            if (!submitted) {
              if (isCurrent) {
                numClass = 'bg-indigo-600 text-white font-bold ring-2 ring-indigo-200';
              } else if (isAnswered) {
                numClass = 'bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold';
              }
            } else {
              if (isRight) {
                numClass = 'bg-emerald-600 text-white font-semibold';
              } else if (isWrong) {
                numClass = 'bg-rose-500 text-white font-semibold';
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
                className={`w-7 h-7 rounded-lg text-xs flex items-center justify-center transition ${numClass}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Question Content: Single Focus Mode vs List Mode */}
      {viewMode === 'single' ? (
        <div className="space-y-4">
          {renderQuestionCard(activeQuestions[currentIdx], currentIdx)}

          <div className="flex items-center justify-between">
            <button
              type="button"
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
              className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 disabled:opacity-40 text-xs sm:text-sm font-medium flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" /> Câu trước
            </button>

            {currentIdx < totalQuestions - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentIdx((i) => Math.min(totalQuestions - 1, i + 1))}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-sm transition"
              >
                <span>Câu tiếp theo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : !submitted ? (
              <button
                type="button"
                onClick={handleSubmit}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-sm transition"
              >
                Nộp bài & Xem điểm
              </button>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {activeQuestions.map((q, idx) => renderQuestionCard(q, idx))}
        </div>
      )}
    </div>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
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
} from 'lucide-react';

interface Quiz25EngineProps {
  scopeType: 'topic' | 'chapter';
  scopeId: number;
  title: string;
  questions: QuestionItem[];
}

const DIFF_LABELS: Record<string, string> = {
  nhan_biet: 'Nhận biết',
  thong_hieu: 'Thông hiểu',
  van_dung: 'Vận dụng',
  van_dung_cao: 'Vận dụng cao',
};

export function Quiz25Engine({ scopeType, scopeId, title, questions }: Quiz25EngineProps) {
  const router = useRouter();
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [viewMode, setViewMode] = useState<'single' | 'list'>('single');
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  // Only start counting time after the user clicks "Bắt đầu làm bài"
  useEffect(() => {
    if (!started || submitted) return;
    const timer = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [started, submitted]);

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;

  const calculateScore = () => {
    let correct = 0;
    for (const q of questions) {
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
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const score = submitted ? calculateScore() : 0;

  if (totalQuestions === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-sm text-slate-500">
        Chưa có câu hỏi trắc nghiệm nào trong mục này.
      </div>
    );
  }

  // Screen before starting the quiz: Timer is 00:00 and NOT counting yet!
  if (!started) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-8 text-center max-w-2xl mx-auto space-y-5">
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
          <CheckSquare className="w-6 h-6" />
        </div>

        <div className="space-y-1.5">
          <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
            {scopeType === 'chapter' ? 'Đề kiểm tra tổng hợp Chương' : 'Bài kiểm tra cuối Chủ đề'}
          </div>
          <h2 className="text-xl font-bold text-slate-900">{title}</h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
            Bài kiểm tra gồm <strong>{totalQuestions} câu hỏi trắc nghiệm</strong> từ cơ bản đến vận dụng cao. Đồng hồ bấm giờ chỉ bắt đầu tính khi bạn nhấn nút bên dưới.
          </p>
        </div>

        <div className="inline-flex flex-wrap items-center justify-center gap-4 px-5 py-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600">
          <span>Số lượng: <strong className="text-slate-900">{totalQuestions} câu</strong></span>
          <span>•</span>
          <span>Thời gian: <strong className="text-slate-900">Bắt đầu từ 00:00</strong></span>
          <span>•</span>
          <span>Có lời giải chi tiết sau khi nộp</span>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={handleStartQuiz}
            className="px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold inline-flex items-center gap-2 shadow-sm transition"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Bắt đầu làm bài</span>
          </button>
        </div>
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
            <h2 className="text-base font-bold text-slate-900">{title}</h2>
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
                  <List className="w-3.5 h-3.5" /> Xem cả 25 câu
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
          </div>
        )}

        {/* Compact Number Strip 1..25 */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
          {questions.map((q, idx) => {
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
          {renderQuestionCard(questions[currentIdx], currentIdx)}

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
          {questions.map((q, idx) => renderQuestionCard(q, idx))}
        </div>
      )}
    </div>
  );
}

'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { SocraticQuestionItem, SocraticCoachSession } from '@/types/cms';
import { buildSocraticCoachSession } from '@/lib/socratic-coach';
import { RichPhysicsText } from './KatexRenderer';
import {
  Brain,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Award,
  BookOpen,
  Filter,
  Layers,
  HelpCircle,
  Dna,
  Shuffle,
  ChevronRight,
} from 'lucide-react';

interface SocraticCoachClientProps {
  initialQuestions: SocraticQuestionItem[];
  initialQuestionId?: number;
}

export function SocraticCoachClient({
  initialQuestions,
  initialQuestionId,
}: SocraticCoachClientProps) {
  const [selectedGrade, setSelectedGrade] = useState<number | 'all'>('all');
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number>(0);

  // Socratic Step State
  const [currentStepLevel, setCurrentStepLevel] = useState<1 | 2 | 3>(1);
  const [selectedOptionByStep, setSelectedOptionByStep] = useState<Record<number, string>>({});
  const [stepFeedback, setStepFeedback] = useState<Record<number, { isCorrect: boolean; text: string }>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [masteryCount, setMasteryCount] = useState<number>(0);
  const [showHint, setShowHint] = useState<boolean>(false);

  // Filter questions by grade
  const gradeFilteredQuestions = useMemo(() => {
    if (selectedGrade === 'all') return initialQuestions;
    return initialQuestions.filter((q) => q.grade_number === selectedGrade);
  }, [initialQuestions, selectedGrade]);

  // Extract chapters in filtered grade
  const availableChapters = useMemo(() => {
    const map = new Map<number, { id: number; title: string; code: string; count: number }>();
    for (const q of gradeFilteredQuestions) {
      if (!q.chapter_id) continue;
      const existing = map.get(q.chapter_id);
      if (existing) {
        existing.count += 1;
      } else {
        map.set(q.chapter_id, {
          id: q.chapter_id,
          title: q.chapter_title || `Chương ${q.chapter_code}`,
          code: q.chapter_code || '',
          count: 1,
        });
      }
    }
    return Array.from(map.values()).sort((a, b) => a.id - b.id);
  }, [gradeFilteredQuestions]);

  // Filter questions by chapter
  const displayQuestions = useMemo(() => {
    if (selectedChapter === 'all') return gradeFilteredQuestions;
    return gradeFilteredQuestions.filter((q) => q.chapter_id === selectedChapter);
  }, [gradeFilteredQuestions, selectedChapter]);

  // Active question object
  const activeQuestion = displayQuestions[selectedQuestionIndex] || displayQuestions[0] || initialQuestions[0];

  // If initialQuestionId is specified, find its index on mount
  useEffect(() => {
    if (initialQuestionId) {
      const idx = displayQuestions.findIndex((q) => q.id === initialQuestionId);
      if (idx !== -1) {
        setSelectedQuestionIndex(idx);
      }
    }
  }, [initialQuestionId, displayQuestions]);

  // Generate Socratic Coach Session (3 steps) for current question
  const session: SocraticCoachSession = useMemo(() => {
    return buildSocraticCoachSession(activeQuestion);
  }, [activeQuestion]);

  // Reset Socratic state when switching questions
  const resetSocraticState = () => {
    setCurrentStepLevel(1);
    setSelectedOptionByStep({});
    setStepFeedback({});
    setIsCompleted(false);
    setShowHint(false);
  };

  const handleSelectQuestion = (index: number) => {
    setSelectedQuestionIndex(index);
    resetSocraticState();
  };

  const handleRandomQuestion = () => {
    if (displayQuestions.length <= 1) return;
    let nextIdx = Math.floor(Math.random() * displayQuestions.length);
    while (nextIdx === selectedQuestionIndex) {
      nextIdx = Math.floor(Math.random() * displayQuestions.length);
    }
    setSelectedQuestionIndex(nextIdx);
    resetSocraticState();
  };

  const currentStep = session.steps.find((s) => s.level === currentStepLevel) || session.steps[0];

  const handleChooseOption = (optId: string) => {
    if (isCompleted) return;
    const option = currentStep.options.find((o) => o.id === optId);
    if (!option) return;

    setSelectedOptionByStep((prev) => ({ ...prev, [currentStepLevel]: optId }));
    setStepFeedback((prev) => ({
      ...prev,
      [currentStepLevel]: {
        isCorrect: option.isCorrect,
        text: option.feedback,
      },
    }));

    if (option.isCorrect) {
      if (currentStepLevel < 3) {
        // Unlock next level after short feedback
        setTimeout(() => {
          setCurrentStepLevel((lvl) => (lvl + 1) as 1 | 2 | 3);
          setShowHint(false);
        }, 650);
      } else {
        // Step 3 finished -> Completed
        setIsCompleted(true);
        setMasteryCount((c) => c + 1);
      }
    }
  };

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      {/* 1. Header Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-6 sm:p-10 text-white shadow-lift border border-slate-800">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/20 px-3 py-1 text-xs font-extrabold text-emerald-300 border border-emerald-400/30">
              <Sparkles className="h-4 w-4" />
              <span>SOCRATIC AI PHYSICS COACH • LOCAL PEDAGOGICAL ENGINE</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-2.5">
              <span>Gia Sư Ảo Socrates</span>
              <span className="text-sm font-bold bg-amber-500/20 text-amber-300 border border-amber-400/30 px-2.5 py-0.5 rounded-lg">
                Không Mớm Đáp Án
              </span>
            </h1>
            <p className="max-w-2xl text-xs sm:text-sm text-slate-300 leading-relaxed">
              Phương pháp giáo dục Socrates chia nhỏ quy trình tư duy thành <strong>3 nấc thang nhận thức</strong>:
              từ nhận diện hiện tượng, chọn định luật đến hóa giải bẫy. Bạn sẽ tự tay tìm ra cách giải bài toán
              mà không bao giờ cần đọc vẹt lời giải mẫu.
            </p>
          </div>

          {/* Socratic Mastery Dial */}
          <div className="flex shrink-0 items-center gap-4 rounded-2xl bg-slate-800/80 p-4 border border-slate-700/80 shadow-soft">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600/30 text-emerald-300 border border-emerald-500/40">
              <Award className="h-7 w-7 text-amber-400" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Bài Đã Tự Lực Chinh Phục
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-black text-white">{masteryCount}</span>
                <span className="text-xs text-emerald-400 font-bold">bài đạt chuẩn Socrates</span>
              </div>
              <div className="mt-1 text-[11px] text-slate-400">
                100% rèn phản xạ tư duy độc lập
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Filter Bar (Grade & Chapter & Random Picker) */}
      <div className="space-y-3.5 border-b border-slate-200 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Grade Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="mr-2 text-xs font-bold text-slate-500 flex items-center gap-1">
              <Filter className="h-3.5 w-3.5" /> Khối Lớp:
            </span>
            <button
              type="button"
              onClick={() => {
                setSelectedGrade('all');
                setSelectedChapter('all');
                setSelectedQuestionIndex(0);
                resetSocraticState();
              }}
              className={`rounded-xl px-3 py-1.5 text-xs font-extrabold transition ${
                selectedGrade === 'all'
                  ? 'bg-indigo-600 text-white shadow-soft'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Tất cả (Lớp 6 → 12)
            </button>
            {[6, 7, 8, 9, 10, 11, 12].map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => {
                  setSelectedGrade(g);
                  setSelectedChapter('all');
                  setSelectedQuestionIndex(0);
                  resetSocraticState();
                }}
                className={`rounded-xl px-3 py-1.5 text-xs font-extrabold transition ${
                  selectedGrade === g
                    ? 'bg-indigo-600 text-white shadow-soft'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Lớp {g}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleRandomQuestion}
              className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50/80 px-3 py-1.5 text-xs font-extrabold text-indigo-700 hover:bg-indigo-100 transition shadow-2xs"
            >
              <Shuffle className="h-3.5 w-3.5" />
              <span>Đổi câu hỏi ngẫu nhiên</span>
            </button>
          </div>
        </div>

        {/* Chapter Pills (if grade selected) */}
        {availableChapters.length > 0 && selectedGrade !== 'all' && (
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
            <span className="mr-2 text-xs font-bold text-slate-500 flex items-center gap-1">
              <Layers className="h-3.5 w-3.5 text-indigo-600" /> Chương:
            </span>
            <button
              type="button"
              onClick={() => {
                setSelectedChapter('all');
                setSelectedQuestionIndex(0);
                resetSocraticState();
              }}
              className={`rounded-xl px-2.5 py-1 text-xs font-extrabold transition ${
                selectedChapter === 'all'
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Tất cả chương ({gradeFilteredQuestions.length})
            </button>
            {availableChapters.map((ch) => {
              const isSelected = selectedChapter === ch.id;
              return (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => {
                    setSelectedChapter(isSelected ? 'all' : ch.id);
                    setSelectedQuestionIndex(0);
                    resetSocraticState();
                  }}
                  className={`rounded-xl px-2.5 py-1 text-xs font-extrabold transition flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-2xs ring-2 ring-indigo-400/30'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>
                    {ch.code ? `${ch.code}: ` : ''}
                    {ch.title}
                  </span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] font-black ${
                      isSelected ? 'bg-indigo-800 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {ch.count}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* 3. Main Split Arena: Problem Stem (Left) vs Socratic Coach Console (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (5 Cols): Question Problem Card */}
        <div className="edu-card p-6 lg:col-span-5 space-y-5 border border-slate-200">
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-100 text-xs font-black text-indigo-800">
                #{selectedQuestionIndex + 1}
              </span>
              <span className="text-xs font-bold text-slate-700">
                Lớp {activeQuestion.grade_number} • {activeQuestion.chapter_code}{' '}
                {activeQuestion.topic_code ? `• ${activeQuestion.topic_code}` : ''}
              </span>
            </div>

            <span className="rounded-lg bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-extrabold text-emerald-800">
              Gia sư Socrates
            </span>
          </div>

          {/* Question Text */}
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-400">
              Đề bài khảo sát:
            </h2>
            <div className="text-sm font-bold text-slate-900 leading-relaxed bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
              <RichPhysicsText text={activeQuestion.question_text} />
            </div>
          </div>

          {/* 4 Options Grid (Locked until finished or showing progress) */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                Phương án lựa chọn:
              </span>
              {!isCompleted ? (
                <span className="text-[11px] font-bold text-amber-600 flex items-center gap-1">
                  🔒 Đang khóa (Giải qua 3 nấc để mở)
                </span>
              ) : (
                <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                  ✓ Đã mở khóa đáp án đúng
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 gap-2 text-xs">
              {activeQuestion.options.map((opt, optIdx) => {
                const isCorrect = optIdx === activeQuestion.correct_index;
                return (
                  <div
                    key={optIdx}
                    className={`flex items-start gap-2.5 rounded-xl border p-3 transition ${
                      isCompleted && isCorrect
                        ? 'border-emerald-400 bg-emerald-50 text-emerald-950 font-extrabold ring-2 ring-emerald-400/20'
                        : isCompleted
                        ? 'border-slate-200 bg-slate-50/40 text-slate-500 opacity-70'
                        : 'border-slate-200 bg-white text-slate-700'
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-black ${
                        isCompleted && isCorrect
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <div className="flex-1">
                      <RichPhysicsText text={opt} />
                      {isCompleted && isCorrect && (
                        <span className="ml-2 text-[10px] font-black text-emerald-700">
                          ✓ ĐÁP ÁN CHÍNH XÁC
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cognitive Trap Reminder */}
          {session.trapWarning && (
            <div className="rounded-xl border border-rose-100 bg-rose-50/60 p-3.5 text-xs text-rose-900 space-y-1">
              <div className="font-extrabold flex items-center gap-1.5 text-rose-950">
                <span>⚠️ Chẩn đoán Bẫy của bài này:</span>
              </div>
              <div className="text-[11px] text-rose-800 leading-snug">
                {session.trapWarning}
              </div>
            </div>
          )}
        </div>

        {/* Right Column (7 Cols): The Socratic Coach Console */}
        <div className="edu-card p-6 lg:col-span-7 space-y-6 border border-slate-200 bg-gradient-to-b from-white to-slate-50/40">
          {/* Socratic Navigation Stepper Header */}
          <div className="border-b border-slate-100 pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-emerald-600" />
                <h3 className="text-sm font-black text-slate-900">
                  Phòng Hướng Dẫn Tư Duy Socrates
                </h3>
              </div>
              <button
                type="button"
                onClick={resetSocraticState}
                className="text-xs font-bold text-slate-500 hover:text-indigo-600 flex items-center gap-1"
              >
                <RotateCcw className="h-3 w-3" /> Bắt đầu lại bài này
              </button>
            </div>

            {/* Stepper Progress Bar (Level 1, 2, 3) */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { lvl: 1, label: '1. Hiện tượng & Biên' },
                { lvl: 2, label: '2. Định luật cốt lõi' },
                { lvl: 3, label: '3. Khóa số & Bẫy' },
              ].map((step) => {
                const isPassed = currentStepLevel > step.lvl || isCompleted;
                const isCurrent = currentStepLevel === step.lvl && !isCompleted;
                return (
                  <div
                    key={step.lvl}
                    className={`rounded-xl p-2.5 border text-center transition ${
                      isPassed
                        ? 'border-emerald-300 bg-emerald-50 text-emerald-800 font-extrabold'
                        : isCurrent
                        ? 'border-indigo-600 bg-indigo-50/80 text-indigo-900 font-black shadow-2xs ring-2 ring-indigo-500/20'
                        : 'border-slate-200 bg-slate-50 text-slate-400 font-bold opacity-60'
                    }`}
                  >
                    <div className="text-[10px] uppercase tracking-wider">
                      {isPassed ? '✓ Đã hiểu' : isCurrent ? '👉 Đang suy nghĩ' : 'Khóa'}
                    </div>
                    <div className="text-xs font-extrabold mt-0.5 truncate">{step.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Step Question or Completed Screen */}
          {!isCompleted ? (
            <div className="space-y-5">
              {/* Coach Speech Bubble */}
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 sm:p-5 text-indigo-950 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-black text-indigo-900">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white text-[11px] font-black">
                      S
                    </span>
                    <span>Gia sư Socrates hỏi bạn:</span>
                  </div>
                  <span className="rounded-full bg-indigo-200/80 px-2 py-0.5 text-[10px] font-black text-indigo-900">
                    NẤC {currentStep.level} / 3
                  </span>
                </div>
                <h4 className="text-sm font-black text-slate-900 leading-snug">
                  {currentStep.prompt}
                </h4>
                <p className="text-xs text-indigo-800/90 italic">
                  💡 {currentStep.subtitle}
                </p>
              </div>

              {/* Step Options Choice */}
              <div className="space-y-2.5">
                <div className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Hãy chọn câu trả lời theo suy luận của bạn:
                </div>
                <div className="space-y-2">
                  {currentStep.options.map((opt) => {
                    const isSelected = selectedOptionByStep[currentStepLevel] === opt.id;
                    const feedback = isSelected ? stepFeedback[currentStepLevel] : null;

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleChooseOption(opt.id)}
                        className={`w-full text-left rounded-2xl border p-4 transition duration-150 flex flex-col gap-2 ${
                          isSelected && feedback?.isCorrect
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-950 shadow-soft ring-2 ring-emerald-500/20'
                            : isSelected && !feedback?.isCorrect
                            ? 'border-rose-400 bg-rose-50 text-rose-950 shadow-2xs'
                            : 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-slate-50 text-slate-800'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-xl text-xs font-black ${
                              isSelected && feedback?.isCorrect
                                ? 'bg-emerald-600 text-white'
                                : isSelected && !feedback?.isCorrect
                                ? 'bg-rose-600 text-white'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {isSelected && feedback?.isCorrect ? (
                              '✓'
                            ) : isSelected && !feedback?.isCorrect ? (
                              '✗'
                            ) : (
                              <HelpCircle className="h-3.5 w-3.5" />
                            )}
                          </span>
                          <span className="text-xs font-bold leading-relaxed flex-1">
                            {opt.text}
                          </span>
                        </div>

                        {/* Immediate Socratic Feedback */}
                        {isSelected && feedback && (
                          <div
                            className={`mt-1 rounded-xl p-3 text-xs leading-relaxed border ${
                              feedback.isCorrect
                                ? 'bg-emerald-100/70 border-emerald-200 text-emerald-900 font-semibold'
                                : 'bg-rose-100/70 border-rose-200 text-rose-900'
                            }`}
                          >
                            <span className="font-extrabold mr-1">
                              {feedback.isCorrect ? '🎯 Gia sư đánh giá:' : '💡 Gia sư gợi mở lại:'}
                            </span>
                            {feedback.text}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Gentle Hint Toggle */}
              <div className="pt-2 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => setShowHint((h) => !h)}
                  className="text-amber-700 hover:text-amber-800 font-extrabold flex items-center gap-1.5"
                >
                  <Lightbulb className="h-4 w-4 text-amber-500" />
                  <span>{showHint ? 'Ẩn lời mách nước' : 'Bạn đang bị tắc? Bấm để nhận lời mách nước nhẹ'}</span>
                </button>
              </div>

              {showHint && (
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-3.5 text-xs text-amber-950 leading-relaxed animate-in fade-in">
                  <span className="font-extrabold text-amber-900 mr-1">💡 Lời mách nước của Gia sư:</span>
                  {currentStep.hintIfStuck}
                </div>
              )}
            </div>
          ) : (
            /* Mastery Completed State */
            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
              <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/60 p-6 sm:p-8 text-center space-y-3 shadow-soft">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700 border border-emerald-300 shadow-soft">
                  <CheckCircle2 className="h-9 w-9 text-emerald-600" />
                </div>
                <h4 className="text-xl font-black text-emerald-950">
                  🎉 XUẤT SẮC! BẠN ĐÃ TỰ LỰC CHINH PHỤC BÀI TOÁN!
                </h4>
                <p className="max-w-md mx-auto text-xs sm:text-sm text-emerald-800 leading-relaxed font-medium">
                  Bằng phương pháp tư duy Socrates qua 3 nấc thang, bạn đã tự mình tìm ra đáp số
                  thay vì đọc thụ động lời giải mẫu.
                </p>
              </div>

              {/* Full Resolution Breakdown */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-black text-slate-800 uppercase tracking-wider">
                  <BookOpen className="h-4 w-4 text-indigo-600" />
                  <span>Tổng kết quy trình tư duy khoa học:</span>
                </div>
                <div className="text-xs text-slate-700 leading-relaxed space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <RichPhysicsText text={session.finalResolution} />
                </div>
              </div>

              {/* Golden Takeaway */}
              <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-4 text-xs text-amber-950 space-y-1">
                <div className="font-extrabold flex items-center gap-1.5 text-amber-900">
                  <Lightbulb className="h-4 w-4 text-amber-600" />
                  <span>💡 Bí kíp vàng ghi nhớ bản chất:</span>
                </div>
                <div className="text-xs text-amber-900/90 leading-relaxed">
                  {session.masteryTakeaway}
                </div>
              </div>

              {/* Next Question CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={resetSocraticState}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-extrabold text-slate-700 hover:bg-slate-50 transition"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Luyện lại bài này</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const nextIdx = (selectedQuestionIndex + 1) % displayQuestions.length;
                    handleSelectQuestion(nextIdx);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-black text-white shadow-soft hover:bg-emerald-700 transition"
                >
                  <span>Chinh phục bài tiếp theo</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

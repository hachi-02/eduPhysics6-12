'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import {
  QuestionItem,
  SimulationItem,
  FormulaItem,
  DifficultyLevel,
} from '@/types/cms';
import { RichPhysicsText, KatexFormula } from './KatexRenderer';
import { InteractivePhysicsLab } from './InteractivePhysicsLab';
import { buildProblemSandboxState } from '@/lib/problem-sandbox';
import {
  FlaskConical,
  Sliders,
  Sparkles,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Zap,
  Eye,
  BookOpen,
  Calculator,
  ArrowRight,
  Activity,
  Compass,
  HelpCircle,
} from 'lucide-react';

interface ChapterOption {
  id: number;
  code: string;
  title: string;
  grade_number: number;
  order_index: number;
}

interface TopicOption {
  id: number;
  code: string;
  title: string;
  chapter_id: number;
  chapter_code: string;
  chapter_title: string;
  grade_number: number;
}

interface ProblemSandboxClientProps {
  chapters: ChapterOption[];
  topics: TopicOption[];
  simulationByTopicId: Record<number, SimulationItem>;
  formulasByTopicId: Record<number, FormulaItem[]>;
  questionsByTopicId: Record<number, QuestionItem[]>;
  initialTopicId?: number | null;
  initialQuestionId?: number | null;
}

const DIFF_BADGES: Record<
  DifficultyLevel,
  { label: string; cls: string }
> = {
  nhan_biet: {
    label: 'Mức 1: Nhận biết',
    cls: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  },
  thong_hieu: {
    label: 'Mức 2: Thông hiểu',
    cls: 'border-sky-200 bg-sky-50 text-sky-800',
  },
  van_dung: {
    label: 'Mức 3: Vận dụng',
    cls: 'border-amber-200 bg-amber-50 text-amber-900',
  },
  van_dung_cao: {
    label: 'Mức 4: Vận dụng cao',
    cls: 'border-rose-200 bg-rose-50 text-rose-800',
  },
};

export function ProblemSandboxClient({
  chapters,
  topics,
  simulationByTopicId,
  formulasByTopicId,
  questionsByTopicId,
  initialTopicId = null,
  initialQuestionId = null,
}: ProblemSandboxClientProps) {
  // Resolve initial topic & grade
  const startTopic = useMemo(() => {
    if (initialTopicId) {
      const found = topics.find((t) => t.id === initialTopicId);
      if (found) return found;
    }
    return topics.find((t) => t.grade_number === 12) || topics[0];
  }, [topics, initialTopicId]);

  const [selectedGrade, setSelectedGrade] = useState<number>(
    startTopic?.grade_number || 12
  );
  const [selectedChapterId, setSelectedChapterId] = useState<number>(
    startTopic?.chapter_id || chapters[0]?.id || 1
  );
  const [selectedTopicId, setSelectedTopicId] = useState<number>(
    startTopic?.id || topics[0]?.id || 1
  );
  const [selectedQuestionId, setSelectedQuestionId] = useState<number | null>(
    initialQuestionId
  );

  // User interaction state for the current problem
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [overrideParams, setOverrideParams] = useState<Record<string, number>>({});
  const [syncPulse, setSyncPulse] = useState<boolean>(false);

  // Grade -> Chapters -> Topics cascade
  const gradeChapters = useMemo(
    () => chapters.filter((c) => c.grade_number === selectedGrade),
    [chapters, selectedGrade]
  );

  const activeChapter = useMemo(() => {
    return (
      gradeChapters.find((c) => c.id === selectedChapterId) ||
      gradeChapters[0] ||
      chapters[0]
    );
  }, [gradeChapters, selectedChapterId, chapters]);

  const chapterTopics = useMemo(
    () => topics.filter((t) => t.chapter_id === activeChapter?.id),
    [topics, activeChapter]
  );

  const activeTopic = useMemo(() => {
    return (
      chapterTopics.find((t) => t.id === selectedTopicId) ||
      chapterTopics[0] ||
      topics[0]
    );
  }, [chapterTopics, selectedTopicId, topics]);

  const topicQuestions = useMemo(() => {
    if (!activeTopic) return [];
    return questionsByTopicId[activeTopic.id] || [];
  }, [questionsByTopicId, activeTopic]);

  const activeQuestion = useMemo(() => {
    if (selectedQuestionId) {
      const found = topicQuestions.find((q) => q.id === selectedQuestionId);
      if (found) return found;
    }
    return topicQuestions[0] || null;
  }, [topicQuestions, selectedQuestionId]);

  // Reset answer & What-If overrides when question changes
  useEffect(() => {
    setSelectedOption(null);
    setShowSolution(false);
    setOverrideParams({});
  }, [activeQuestion?.id]);

  const baseSimulation = useMemo<SimulationItem>(() => {
    if (activeTopic && simulationByTopicId[activeTopic.id]) {
      return simulationByTopicId[activeTopic.id];
    }
    return {
      id: 0,
      topic_id: activeTopic?.id || 1,
      sim_key: 'shm_oscillator_lab',
      title: activeTopic ? `Mô phỏng: ${activeTopic.title}` : 'Mô phỏng Vật lý',
      description: 'Thực hành quan sát hiện tượng và đồ thị động lực học thời gian thực.',
      parameters: {},
      guide_steps: [
        'Quan sát thông số trích xuất từ đề bài bên trái.',
        'Thử kéo thanh trượt What-If để xem sự thay đổi của đồ thị.',
      ],
      physics_insight:
        'Kết hợp giải toán với mô phỏng trực quan giúp hiểu sâu bản chất quy luật Vật lý.',
    };
  }, [activeTopic, simulationByTopicId]);

  const topicFormulas = useMemo(() => {
    if (!activeTopic) return [];
    return formulasByTopicId[activeTopic.id] || [];
  }, [formulasByTopicId, activeTopic]);

  // Compute synchronized Problem-to-Sim Sandbox state
  const sandboxState = useMemo(() => {
    const qText = activeQuestion
      ? `${activeQuestion.question_text} ${activeQuestion.explanation || ''}`
      : '';
    return buildProblemSandboxState(
      qText,
      baseSimulation.sim_key,
      baseSimulation.parameters,
      overrideParams
    );
  }, [activeQuestion, baseSimulation, overrideParams]);

  const syncedSimulation = useMemo<SimulationItem>(() => {
    return {
      ...baseSimulation,
      parameters: sandboxState.simParameters,
    };
  }, [baseSimulation, sandboxState.simParameters]);

  const hasCustomOverrides = Object.keys(overrideParams).length > 0;

  const handleSyncToSim = () => {
    setOverrideParams({});
    setSyncPulse(true);
    setTimeout(() => setSyncPulse(false), 900);
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-8 sm:px-6">
      {/* 1. HERO HEADER */}
      <div className="edu-surface relative overflow-hidden rounded-3xl border border-slate-200/80 p-6 shadow-card sm:p-7">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-extrabold text-teal-800">
              <FlaskConical className="h-3.5 w-3.5" />
              <span>INTERACTIVE PROBLEM-TO-SIM SANDBOX • LỚP 6 → LỚP 12</span>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Phòng Thí nghiệm Giải Bài tập &amp; Kiểm chứng Mô phỏng
            </h1>
            <p className="text-sm leading-relaxed text-slate-600">
              Kết nối trực tiếp <strong>bài tập Vật lý trong ngân hàng đề</strong> với{' '}
              <strong>mô phỏng động lực học &amp; đồ thị thời gian thực</strong>. Hệ thống tự động bóc tách
              dữ kiện từ đề bài, cho phép bạn kiểm chứng đáp án bằng mắt thường và kéo thanh trượt{' '}
              <strong>&ldquo;Điều gì xảy ra nếu...?&rdquo; (What-If)</strong> để làm chủ bản chất công thức.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 lg:shrink-0">
            {activeTopic && (
              <Link
                href={`/topic/${activeTopic.id}`}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-extrabold text-slate-700 shadow-2xs transition hover:border-teal-300 hover:text-teal-800"
              >
                <BookOpen className="h-4 w-4 text-teal-600" />
                <span>Mở Bài học {activeTopic.code}</span>
              </Link>
            )}
          </div>
        </div>

        {/* Grade & Topic Selector Bar */}
        <div className="mt-6 space-y-4 border-t border-slate-200/80 pt-5">
          {/* Grade Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-extrabold uppercase tracking-wider text-slate-500">
              Khối lớp:
            </span>
            {[6, 7, 8, 9, 10, 11, 12].map((g) => {
              const active = selectedGrade === g;
              return (
                <button
                  key={g}
                  type="button"
                  onClick={() => {
                    setSelectedGrade(g);
                    const firstCh = chapters.find((c) => c.grade_number === g);
                    if (firstCh) {
                      setSelectedChapterId(firstCh.id);
                      const firstTp = topics.find((t) => t.chapter_id === firstCh.id);
                      if (firstTp) setSelectedTopicId(firstTp.id);
                    }
                    setSelectedQuestionId(null);
                  }}
                  className={`rounded-xl border px-3.5 py-1.5 text-xs font-extrabold transition ${
                    active
                      ? 'border-teal-600 bg-teal-600 text-white shadow-soft'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-teal-300 hover:bg-teal-50/50'
                  }`}
                >
                  Lớp {g}
                </button>
              );
            })}
          </div>

          {/* Chapter & Topic Dropdowns */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                Chọn Chương (Lớp {selectedGrade})
              </label>
              <select
                value={activeChapter?.id || ''}
                onChange={(e) => {
                  const chId = Number(e.target.value);
                  setSelectedChapterId(chId);
                  const firstTp = topics.find((t) => t.chapter_id === chId);
                  if (firstTp) setSelectedTopicId(firstTp.id);
                  setSelectedQuestionId(null);
                }}
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-xs font-bold text-slate-800 focus:border-teal-500 focus:outline-none"
              >
                {gradeChapters.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.code}: {c.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                Chọn Bài học / Chủ đề Thực nghiệm
              </label>
              <select
                value={activeTopic?.id || ''}
                onChange={(e) => {
                  setSelectedTopicId(Number(e.target.value));
                  setSelectedQuestionId(null);
                }}
                className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-xs font-bold text-slate-800 focus:border-teal-500 focus:outline-none"
              >
                {chapterTopics.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.code}: {t.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SPLIT-SCREEN WORKBENCH: PROBLEM & WHAT-IF (LEFT 5 COLS) <-> LIVE SIM & GRAPH (RIGHT 7 COLS) */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* ================================================================ */}
        {/* LEFT COLUMN (5 COLS): QUESTION CARD, PARAMETER EXTRACTOR & SLIDERS */}
        {/* ================================================================ */}
        <div className="space-y-5 lg:col-span-5">
          {/* Problem Switcher Tabs inside Topic */}
          <div className="edu-card space-y-4 p-5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
                  📝 Chọn Bài toán Thực nghiệm ({topicQuestions.length} bài)
                </div>
                <div className="text-[11px] text-slate-500">
                  {activeTopic?.code} • {sandboxState.domainName}
                </div>
              </div>
            </div>

            {/* Numbered Question Pills */}
            <div className="flex flex-wrap gap-1.5">
              {topicQuestions.map((q, idx) => {
                const isSelected = activeQuestion?.id === q.id;
                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setSelectedQuestionId(q.id)}
                    className={`rounded-xl border px-3 py-1.5 text-xs font-extrabold transition ${
                      isSelected
                        ? 'border-teal-600 bg-teal-600 text-white shadow-soft'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-teal-300 hover:bg-white'
                    }`}
                  >
                    Bài #{idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Active Question Content */}
            {activeQuestion ? (
              <div className="space-y-4 pt-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`rounded-lg border px-2.5 py-0.5 text-[11px] font-bold ${
                      DIFF_BADGES[activeQuestion.difficulty].cls
                    }`}
                  >
                    {DIFF_BADGES[activeQuestion.difficulty].label}
                  </span>
                  <span className="font-mono text-[11px] font-semibold text-slate-400">
                    ID #{activeQuestion.id}
                  </span>
                </div>

                {/* Question Text */}
                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 text-sm font-semibold leading-relaxed text-slate-900">
                  <RichPhysicsText text={activeQuestion.question_text} />
                </div>

                {/* Extracted Parameters Chips */}
                <div className="rounded-2xl border border-teal-200/90 bg-teal-50/60 p-3.5 space-y-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-xs font-extrabold text-teal-900">
                      <Zap className="h-4 w-4 text-teal-600" />
                      <span>Tóm tắt Dữ kiện Bóc tách từ Đề bài:</span>
                    </div>
                    {hasCustomOverrides && (
                      <button
                        type="button"
                        onClick={handleSyncToSim}
                        className="inline-flex items-center gap-1 rounded-lg bg-teal-600 px-2.5 py-1 text-[11px] font-extrabold text-white shadow-2xs transition hover:bg-teal-500"
                      >
                        <RotateCcw className="h-3 w-3" />
                        <span>Khôi phục theo đề</span>
                      </button>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {sandboxState.extractedList.map((item) => (
                      <div
                        key={item.paramKey}
                        className="flex items-center gap-1.5 rounded-xl border border-teal-200 bg-white px-2.5 py-1.5 text-xs shadow-2xs"
                      >
                        <span className="font-mono font-extrabold text-teal-700">
                          {item.symbol} = {item.value} {item.unit}
                        </span>
                        <span className="text-[10px] text-slate-500">({item.label})</span>
                        {item.fromQuestionText && (
                          <span className="rounded bg-emerald-100 px-1.5 py-0.2 text-[9px] font-extrabold text-emerald-800">
                            Từ đề bài
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4 Answer Options */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-600">
                    Chọn đáp án của bạn hoặc đối chiếu với mô phỏng bên phải:
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {activeQuestion.options.map((opt, oIdx) => {
                      const letter = ['A', 'B', 'C', 'D'][oIdx] || 'A';
                      const isSelected = selectedOption === oIdx;
                      const isCorrect = activeQuestion.correct_index === oIdx;

                      let cls =
                        'border-slate-200 bg-white text-slate-800 hover:border-teal-300 hover:bg-teal-50/30';
                      if (selectedOption !== null || showSolution) {
                        if (isCorrect) {
                          cls =
                            'border-emerald-500 bg-emerald-50/90 font-bold text-emerald-950 ring-2 ring-emerald-500/20';
                        } else if (isSelected && !isCorrect) {
                          cls = 'border-rose-400 bg-rose-50 text-rose-950';
                        }
                      }

                      return (
                        <button
                          key={oIdx}
                          type="button"
                          onClick={() => {
                            setSelectedOption(oIdx);
                            setShowSolution(true);
                          }}
                          className={`flex w-full items-start gap-2.5 rounded-xl border p-3 text-left text-xs transition ${cls}`}
                        >
                          <span
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[11px] font-extrabold ${
                              (selectedOption !== null || showSolution) && isCorrect
                                ? 'bg-emerald-600 text-white'
                                : isSelected && !isCorrect
                                  ? 'bg-rose-600 text-white'
                                  : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {letter}
                          </span>
                          <span className="flex-1 leading-relaxed">
                            <RichPhysicsText text={opt} />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Toggle Solution & Experimental Verification */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => setShowSolution((prev) => !prev)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50/80 py-2.5 text-xs font-extrabold text-indigo-800 transition hover:bg-indigo-100"
                  >
                    <Eye className="h-4 w-4" />
                    <span>
                      {showSolution
                        ? 'Ẩn Lời giải & Phân tích Đồ thị'
                        : 'Xem Lời giải & Kiểm chứng trên Đồ thị'}
                    </span>
                  </button>
                </div>

                {showSolution && (
                  <div className="animate-fade-in space-y-3 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 text-xs">
                    {selectedOption !== null && (
                      <div className="flex items-center gap-1.5 font-extrabold">
                        {selectedOption === activeQuestion.correct_index ? (
                          <span className="flex items-center gap-1 text-emerald-700">
                            <CheckCircle2 className="h-4 w-4" /> Chính xác! Bạn đã chọn đúng đáp án.
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-rose-700">
                            <XCircle className="h-4 w-4" /> Chưa chính xác. Đáp án đúng là{' '}
                            {['A', 'B', 'C', 'D'][activeQuestion.correct_index]}.
                          </span>
                        )}
                      </div>
                    )}

                    <div className="leading-relaxed text-slate-800">
                      <strong className="text-emerald-800">Lời giải chi tiết: </strong>
                      <RichPhysicsText text={activeQuestion.explanation} />
                    </div>

                    <div className="rounded-xl border border-teal-200 bg-white p-3 text-slate-700">
                      <div className="mb-1 flex items-center gap-1.5 font-extrabold text-teal-800">
                        <FlaskConical className="h-3.5 w-3.5 text-teal-600" />
                        <span>Đối chiếu Thực nghiệm trên Đồ thị bên phải:</span>
                      </div>
                      <p className="leading-relaxed">{sandboxState.verificationInsight}</p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-6 text-center text-xs text-slate-500">
                Chưa có bài toán trong chủ đề này.
              </div>
            )}
          </div>

          {/* "WHAT-IF" INTERACTIVE PARAMETER SLIDERS */}
          <div className="edu-card space-y-4 border-2 border-indigo-200/80 p-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                  <Sliders className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-indigo-900">
                    🎛️ Giả định &ldquo;Điều gì xảy ra nếu...?&rdquo; (What-If)
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Kéo thanh trượt để thay đổi đề bài và xem Đồ thị bên phải biến đổi tức thì
                  </p>
                </div>
              </div>

              {hasCustomOverrides && (
                <button
                  type="button"
                  onClick={() => setOverrideParams({})}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-bold text-slate-700 hover:bg-slate-100"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Về đề gốc</span>
                </button>
              )}
            </div>

            <div className="space-y-4">
              {sandboxState.sliders.map((slider) => {
                const extractedItem = sandboxState.extractedList.find(
                  (x) => x.paramKey === slider.paramKey
                );
                const currentVal =
                  overrideParams[slider.paramKey] ??
                  extractedItem?.value ??
                  sandboxState.simParameters[slider.paramKey] ??
                  slider.defaultValue;
                return (
                  <div key={slider.paramKey} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-800">
                        {slider.label} (<span className="font-mono font-extrabold text-indigo-700">{slider.symbol}</span>)
                      </span>
                      <span className="rounded-lg bg-indigo-50 px-2.5 py-0.5 font-mono text-xs font-extrabold text-indigo-800">
                        {currentVal} {slider.unit}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={slider.min}
                      max={slider.max}
                      step={slider.step}
                      value={currentVal}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setOverrideParams((prev) => ({
                          ...prev,
                          [slider.paramKey]: val,
                        }));
                      }}
                      className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-indigo-600"
                    />
                    <div className="flex justify-between text-[10px] font-semibold text-slate-400">
                      <span>
                        Min: {slider.min} {slider.unit}
                      </span>
                      <span>
                        Max: {slider.max} {slider.unit}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-3 text-xs leading-relaxed text-indigo-950">
              <strong className="font-extrabold text-indigo-800">💡 Phân tích trực thời: </strong>
              {sandboxState.verificationInsight}
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* RIGHT COLUMN (7 COLS): LIVE TELEMETRY, SIMULATION & REALTIME GRAPH */}
        {/* ================================================================ */}
        <div className="space-y-5 lg:col-span-7">
          {/* Live Derived Telemetry Cards */}
          <div
            className={`edu-card space-y-3 p-5 transition duration-300 ${
              syncPulse ? 'ring-2 ring-teal-500 shadow-lg' : ''
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-teal-600" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                  ⚡ Kết quả Tính toán Động lực học Thời gian thực
                </span>
              </div>
              <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-[11px] font-bold text-teal-800">
                Tự động cập nhật theo thông số đề &amp; thanh trượt
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {sandboxState.liveMetrics.map((m, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border p-3.5 ${m.highlightColor}`}
                >
                  <div className="flex items-center justify-between text-[11px] font-bold opacity-85">
                    <span>{m.label}</span>
                    <span className="font-mono font-extrabold">{m.symbol}</span>
                  </div>
                  <div className="mt-1 text-lg font-extrabold">
                    {m.value}{' '}
                    <span className="text-xs font-semibold opacity-80">{m.unit}</span>
                  </div>
                  <div className="mt-0.5 font-mono text-[10px] opacity-75">
                    {m.formula}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Synchronized Interactive Physics Lab & Real-Time Graph */}
          <InteractivePhysicsLab simulation={syncedSimulation} />

          {/* Topic Formulas Reference Card */}
          {topicFormulas.length > 0 && (
            <div className="edu-card space-y-3 p-5">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
                <Calculator className="h-4 w-4 text-indigo-600" />
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                  📐 Hệ thống Công thức Cốt lõi của Bài học ({activeTopic?.code})
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {topicFormulas.map((f) => (
                  <div
                    key={f.id}
                    className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3.5"
                  >
                    <div className="text-xs font-extrabold text-slate-900">{f.name}</div>
                    <div className="my-2 overflow-x-auto rounded-xl border border-slate-200/70 bg-white px-3 py-2 text-center">
                      <KatexFormula latex={f.latex_expression} />
                    </div>
                    {f.usage_note && (
                      <p className="text-[11px] leading-snug text-slate-600">
                        {f.usage_note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

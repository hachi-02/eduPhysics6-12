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
import {
  buildProblemSandboxState,
  verifyStudentNumericAnswer,
} from '@/lib/problem-sandbox';
import {
  FlaskConical,
  Sliders,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Eye,
  BookOpen,
  Calculator,
  Activity,
  TrendingUp,
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

  const [userAnswerInput, setUserAnswerInput] = useState<string>('');
  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [showSolution, setShowSolution] = useState<boolean>(false);
  const [overrideParams, setOverrideParams] = useState<Record<string, number>>({});

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

  useEffect(() => {
    setUserAnswerInput('');
    setSubmittedStatus('idle');
    setShowSolution(false);
    setOverrideParams({});
  }, [activeQuestion?.id]);

  // Whenever the user drags a What-If slider to change the problem numbers,
  // reset the check banner and hide the previous answer so they can solve the new problem
  useEffect(() => {
    setSubmittedStatus('idle');
    setShowSolution(false);
  }, [overrideParams]);

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
        'Kéo thanh trượt What-If bên trái để đổi số liệu trong đề bài.',
        'Quan sát đường đồ thị mới (nét liền) tách khỏi đường đề gốc (nét đứt).',
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
    const correctOptText = activeQuestion
      ? activeQuestion.options[activeQuestion.correct_index] || ''
      : '';
    const combinedText = activeQuestion
      ? `${activeQuestion.question_text}|||${activeQuestion.explanation || ''}|||${correctOptText}`
      : '';
    return buildProblemSandboxState(
      combinedText,
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
  const isResultUnlocked = showSolution;

  const handleCheckAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userAnswerInput.trim()) return;
    const isOk = verifyStudentNumericAnswer(
      userAnswerInput,
      sandboxState.targetNumericAnswer,
      sandboxState.acceptableAnswers
    );
    setSubmittedStatus(isOk ? 'correct' : 'wrong');
    setShowSolution(true);
  };

  // SVG coordinates for the Live Problem Comparison Graph
  const pg = sandboxState.problemGraph;
  const svgW = 640;
  const svgH = 230;
  const padL = 54;
  const padR = 24;
  const padT = 24;
  const padB = 36;
  const plotW = svgW - padL - padR;
  const plotH = svgH - padT - padB;

  const { xMin, xMax, yMin, yMax } = useMemo(() => {
    const xs = pg.points.map((p) => p.x).concat([pg.markerOrig.x, pg.markerNew.x]);
    const ys = pg.points
      .flatMap((p) => [p.yOrig, p.yNew])
      .concat([pg.markerOrig.y, pg.markerNew.y]);

    let minX = Math.min(...xs);
    let maxX = Math.max(...xs);
    if (Math.abs(maxX - minX) < 1e-6) maxX = minX + 1;

    let minY = Math.min(...ys, 0);
    let maxY = Math.max(...ys);
    if (Math.abs(maxY - minY) < 1e-6) maxY = minY + 1;
    const padY = (maxY - minY) * 0.12;
    return {
      xMin: minX,
      xMax: maxX,
      yMin: minY,
      yMax: maxY + padY,
    };
  }, [pg]);

  const toSvgX = (x: number) => padL + ((x - xMin) / (xMax - xMin || 1)) * plotW;
  const toSvgY = (y: number) =>
    padT + plotH - ((clampVal(y, yMin, yMax) - yMin) / (yMax - yMin || 1)) * plotH;

  const origPolyline = pg.points
    .map((p) => `${toSvgX(p.x).toFixed(1)},${toSvgY(p.yOrig).toFixed(1)}`)
    .join(' ');
  const newPolyline = pg.points
    .map((p) => `${toSvgX(p.x).toFixed(1)},${toSvgY(p.yNew).toFixed(1)}`)
    .join(' ');

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
              Kết nối trực tiếp <strong>đề bài Vật lý</strong> với{' '}
              <strong>đồ thị thực nghiệm &amp; mô phỏng</strong>. Khi bạn kéo thanh trượt{' '}
              <strong>&ldquo;Điều gì xảy ra nếu...?&rdquo; (What-If)</strong>, con số ngay trong đề bài sẽ
              thay đổi trực tiếp, tự động giải lại đáp án mới và vẽ đường đồ thị mới đối chiếu với đề gốc.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 lg:shrink-0">
            {activeTopic && (
              <Link
                href={`/topic/${activeTopic.id}`}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-extrabold text-slate-700 shadow-2xs transition hover:border-teal-300 hover:bg-teal-800"
              >
                <BookOpen className="h-4 w-4 text-teal-600" />
                <span>Mở Bài học {activeTopic.code}</span>
              </Link>
            )}
          </div>
        </div>

        {/* Grade & Topic Selector Bar */}
        <div className="mt-6 space-y-4 border-t border-slate-200/80 pt-5">
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

      {/* 2. SPLIT-SCREEN WORKBENCH */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* ================================================================ */}
        {/* LEFT COLUMN (5 COLS): QUESTION CARD & WHAT-IF SLIDERS */}
        {/* ================================================================ */}
        <div className="space-y-5 lg:col-span-5">
          {/* Problem Switcher & Question Stem */}
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
                  {hasCustomOverrides ? (
                    <span className="rounded-full bg-indigo-600 px-2.5 py-0.5 text-[10px] font-extrabold text-white">
                      ⚡ Đề bài đang áp dụng số liệu giả định What-If
                    </span>
                  ) : (
                    <span className="font-mono text-[11px] font-semibold text-slate-400">
                      Đề gốc • ID #{activeQuestion.id}
                    </span>
                  )}
                </div>

                {/* Dynamic Question Text (Updates directly when What-If sliders move!) */}
                <div
                  className={`rounded-2xl border p-4 text-sm font-semibold leading-relaxed transition ${
                    hasCustomOverrides
                      ? 'border-indigo-400 bg-indigo-50/50 text-slate-900 ring-2 ring-indigo-500/15'
                      : 'border-slate-200/90 bg-slate-50/70 text-slate-900'
                  }`}
                >
                  <RichPhysicsText text={sandboxState.modifiedQuestionText} />
                </div>

                {/* Numerical Answer Input (works for BOTH Original & Modified What-If Question!) */}
                <form
                  onSubmit={handleCheckAnswer}
                  className="space-y-2.5 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs"
                >
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <label className="text-xs font-extrabold text-slate-800">
                      ✍️{' '}
                      {hasCustomOverrides
                        ? 'Nhập đáp án của bạn cho Đề thay đổi (What-If):'
                        : 'Nhập đáp án tính được cho Đề gốc:'}
                    </label>
                    {sandboxState.answerUnit && (
                      <span className="rounded-md bg-teal-50 px-2 py-0.5 font-mono text-[11px] font-bold text-teal-800">
                        Đơn vị chuẩn: {sandboxState.answerUnit}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        inputMode="decimal"
                        value={userAnswerInput}
                        onChange={(e) => {
                          setUserAnswerInput(e.target.value);
                          if (submittedStatus !== 'idle') setSubmittedStatus('idle');
                        }}
                        placeholder={`Nhập kết quả số (VD: 627 hoặc 12,5)${
                          sandboxState.answerUnit ? ` • ${sandboxState.answerUnit}` : ''
                        }...`}
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/70 px-3.5 py-2.5 font-mono text-sm font-bold text-slate-900 placeholder:font-sans placeholder:font-normal placeholder:text-slate-400 focus:border-teal-600 focus:bg-white focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-teal-600 px-4 py-2.5 text-xs font-extrabold text-white shadow-soft transition hover:bg-teal-500"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Kiểm tra đáp án</span>
                    </button>
                  </div>

                  <p className="text-[11px] leading-snug text-slate-500">
                    💡 Bạn có thể nhập số nguyên hoặc thập phân (dấu phẩy hoặc dấu chấm). Khi kéo thanh
                    trượt <strong>What-If</strong> đổi đề bài, hệ thống sẽ tự động chấm và giải theo số
                    liệu của <strong>đề bài mới</strong>!
                  </p>
                </form>

                {/* Toggle Solution Button */}
                <div className="pt-0.5">
                  <button
                    type="button"
                    onClick={() => setShowSolution((prev) => !prev)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50/80 py-2.5 text-xs font-extrabold text-indigo-800 transition hover:bg-indigo-100"
                  >
                    <Eye className="h-4 w-4" />
                    <span>
                      {showSolution
                        ? 'Ẩn Lời giải & Đáp án theo Đề hiện tại'
                        : 'Xem Lời giải & Đáp án giải theo Đề hiện tại'}
                    </span>
                  </button>
                </div>

                {/* Live Recalculated Answer & Step-by-Step Solution (Always solves current question!) */}
                {isResultUnlocked && (
                  <div className="animate-fade-in space-y-3 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 text-xs">
                    {submittedStatus !== 'idle' && (
                      <div
                        className={`flex items-start gap-2 rounded-xl border p-3 font-bold ${
                          submittedStatus === 'correct'
                            ? 'border-emerald-300 bg-emerald-100/80 text-emerald-900'
                            : 'border-rose-300 bg-rose-100/80 text-rose-900'
                        }`}
                      >
                        {submittedStatus === 'correct' ? (
                          <>
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                            <div>
                              Chính xác! Kết quả{' '}
                              <span className="font-mono underline">{userAnswerInput}</span> hoàn toàn
                              khớp với đáp án của{' '}
                              {hasCustomOverrides ? 'đề bài sau khi đổi số What-If' : 'đề bài gốc'} (
                              <span className="font-mono">{sandboxState.newAnswerLabel}</span>).
                            </div>
                          </>
                        ) : (
                          <>
                            <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-700" />
                            <div>
                              Chưa chính xác (Bạn nhập:{' '}
                              <span className="font-mono underline">{userAnswerInput}</span>). Đáp án
                              đúng của {hasCustomOverrides ? 'đề bài đang hiển thị' : 'đề bài gốc'} là{' '}
                              <span className="font-mono font-extrabold">
                                {sandboxState.newAnswerLabel}
                              </span>
                              .
                            </div>
                          </>
                        )}
                      </div>
                    )}

                    {/* Auto-solved Comparison Box */}
                    <div className="space-y-2 rounded-xl border border-indigo-200 bg-white p-3">
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-indigo-950">
                          🎯 Đáp án Giải theo Số liệu Đề bài:
                        </span>
                        {hasCustomOverrides && (
                          <button
                            type="button"
                            onClick={() => {
                              setShowSolution(false);
                              setSubmittedStatus('idle');
                              setOverrideParams({});
                            }}
                            className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 px-2 py-0.5 text-[10px] font-extrabold text-white hover:bg-indigo-500"
                          >
                            <RotateCcw className="h-3 w-3" />
                            <span>Trả về đề gốc</span>
                          </button>
                        )}
                      </div>
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-2.5">
                          <div className="text-[10px] font-bold text-slate-400">ĐÁP ÁN ĐỀ GỐC</div>
                          <div className="mt-0.5 font-mono text-xs font-extrabold text-slate-800">
                            {sandboxState.originalAnswerLabel}
                          </div>
                        </div>
                        <div
                          className={`rounded-xl border p-2.5 ${
                            hasCustomOverrides
                              ? 'border-indigo-400 bg-indigo-600 text-white shadow-soft'
                              : 'border-emerald-200 bg-emerald-50/80 text-emerald-950'
                          }`}
                        >
                          <div
                            className={`text-[10px] font-bold ${
                              hasCustomOverrides ? 'text-indigo-200' : 'text-emerald-700'
                            }`}
                          >
                            {hasCustomOverrides
                              ? 'ĐÁP ÁN ĐỀ THAY ĐỔI (HIỆN TẠI)'
                              : 'ĐÁP ÁN ĐỀ HIỆN TẠI'}
                          </div>
                          <div className="mt-0.5 font-mono text-xs font-extrabold">
                            {sandboxState.newAnswerLabel}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dynamic Step-by-Step Solution (Always matches the current numbers in the problem!) */}
                    <div className="space-y-2 rounded-xl border border-emerald-200/90 bg-white p-3.5 leading-relaxed text-slate-800">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                        <strong className="text-emerald-800">
                          📖{' '}
                          {hasCustomOverrides
                            ? 'Lời giải chi tiết (Giải tự động theo Đề thay đổi What-If):'
                            : 'Lời giải chi tiết (Giải theo Đề gốc):'}
                        </strong>
                        {hasCustomOverrides && (
                          <span className="rounded bg-indigo-100 px-2 py-0.5 text-[10px] font-extrabold text-indigo-800">
                            Cập nhật theo số mới
                          </span>
                        )}
                      </div>
                      <div className="text-xs leading-relaxed text-slate-800">
                        <RichPhysicsText text={sandboxState.dynamicExplanation} />
                      </div>

                      {hasCustomOverrides && activeQuestion.explanation && (
                        <div className="mt-2 border-t border-dashed border-slate-200 pt-2 text-[11px] text-slate-500">
                          <strong className="text-slate-600">Đối chiếu lời giải đề gốc ban đầu: </strong>
                          <RichPhysicsText text={activeQuestion.explanation} />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : null}
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
                    Kéo thanh trượt để sửa trực tiếp số trong đề bài ở trên, tự giải lại lời giải &amp; vẽ đồ thị mới
                  </p>
                </div>
              </div>

              {hasCustomOverrides && (
                <button
                  type="button"
                  onClick={() => {
                    setShowSolution(false);
                    setSubmittedStatus('idle');
                    setOverrideParams({});
                  }}
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
                const isModified = Math.abs(currentVal - slider.defaultValue) > 1e-6;
                return (
                  <div key={slider.paramKey} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-800">
                        {slider.label} (
                        <span className="font-mono font-extrabold text-indigo-700">
                          {slider.symbol}
                        </span>
                        )
                      </span>
                      <div className="flex items-center gap-1.5">
                        {isModified && (
                          <span className="text-[10px] font-semibold text-slate-400 line-through">
                            Gốc: {slider.defaultValue} {slider.unit}
                          </span>
                        )}
                        <span
                          className={`rounded-lg px-2.5 py-0.5 font-mono text-xs font-extrabold ${
                            isModified
                              ? 'bg-indigo-600 text-white'
                              : 'bg-indigo-50 text-indigo-800'
                          }`}
                        >
                          {currentVal} {slider.unit}
                        </span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min={slider.min}
                      max={slider.max}
                      step={slider.step}
                      value={currentVal}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setShowSolution(false);
                        setSubmittedStatus('idle');
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
                        Đề gốc: {slider.defaultValue} {slider.unit}
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
              <strong className="font-extrabold text-indigo-800">💡 Giải thích biến thiên: </strong>
              {isResultUnlocked
                ? sandboxState.verificationInsight
                : 'Hãy nhập đáp án ở trên để kiểm tra hoặc bấm "Xem Lời giải & Đáp án giải theo Đề hiện tại" để mở khóa phân tích số liệu.'}
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* RIGHT COLUMN (7 COLS): LIVE PROBLEM GRAPH, TELEMETRY & SIMULATION */}
        {/* ================================================================ */}
        <div className="space-y-5 lg:col-span-7">
          {/* 1. DEDICATED PROBLEM COMPARATIVE GRAPH (ORIGINAL VS WHAT-IF) */}
          <div className="edu-card space-y-4 border-2 border-teal-200/80 p-5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                  <TrendingUp className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900">{pg.title}</h3>
                  <p className="text-[11px] text-slate-500">
                    Đối chiếu trực tiếp đường cong của <strong>Đề bài gốc (nét đứt)</strong> và{' '}
                    <strong>Đề bài sau khi kéo thanh trượt What-If (nét liền đậm)</strong>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold">
                <span className="flex items-center gap-1.5 text-slate-500">
                  <span className="inline-block h-0.5 w-4 border-t-2 border-dashed border-slate-400" />
                  Đường Đề gốc
                </span>
                <span className="flex items-center gap-1.5 text-indigo-700">
                  <span className="inline-block h-1 w-4 rounded bg-indigo-600" />
                  Đường Đề mới (What-If)
                </span>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-950 p-3 text-white">
              <svg viewBox={`0 0 ${svgW} ${svgH}`} className="mx-auto h-56 w-full min-w-[480px]">
                {/* Grid lines */}
                {[0, 0.25, 0.5, 0.75, 1].map((r) => {
                  const yVal = yMin + (1 - r) * (yMax - yMin);
                  const yPos = padT + r * plotH;
                  return (
                    <g key={r}>
                      <line
                        x1={padL}
                        y1={yPos}
                        x2={svgW - padR}
                        y2={yPos}
                        stroke="#1e293b"
                        strokeDasharray="4 4"
                      />
                      <text
                        x={padL - 8}
                        y={yPos + 3}
                        textAnchor="end"
                        className="fill-slate-400 font-mono text-[9px]"
                      >
                        {Number(yVal.toFixed(1))}
                      </text>
                    </g>
                  );
                })}

                {/* X-axis labels */}
                {[0, 0.25, 0.5, 0.75, 1].map((r) => {
                  const xVal = xMin + r * (xMax - xMin);
                  const xPos = padL + r * plotW;
                  return (
                    <text
                      key={r}
                      x={xPos}
                      y={svgH - 10}
                      textAnchor="middle"
                      className="fill-slate-400 font-mono text-[9px]"
                    >
                      {Number(xVal.toFixed(1))} {pg.xUnit}
                    </text>
                  );
                })}

                {/* Dashed curve: Original Question */}
                <polyline
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth={2}
                  strokeDasharray="5 4"
                  points={origPolyline}
                />

                {/* Solid curve: Current / What-If Modified Question */}
                <polyline
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth={3}
                  points={newPolyline}
                />

                {/* Marker for Original Answer */}
                <circle
                  cx={toSvgX(pg.markerOrig.x)}
                  cy={toSvgY(pg.markerOrig.y)}
                  r={5}
                  fill="#64748b"
                  stroke="#ffffff"
                  strokeWidth={1.5}
                />

                {/* Crosshair & Glowing Marker for New Answer */}
                <line
                  x1={toSvgX(pg.markerNew.x)}
                  y1={padT}
                  x2={toSvgX(pg.markerNew.x)}
                  y2={padT + plotH}
                  stroke="#f59e0b"
                  strokeWidth={1}
                  strokeDasharray="3 3"
                />
                <line
                  x1={padL}
                  y1={toSvgY(pg.markerNew.y)}
                  x2={svgW - padR}
                  y2={toSvgY(pg.markerNew.y)}
                  stroke="#f59e0b"
                  strokeWidth={1}
                  strokeDasharray="3 3"
                />
                <circle
                  cx={toSvgX(pg.markerNew.x)}
                  cy={toSvgY(pg.markerNew.y)}
                  r={6.5}
                  fill="#f59e0b"
                  stroke="#ffffff"
                  strokeWidth={2}
                />
              </svg>

              <div className="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800 pt-2 text-[11px]">
                <span className="text-slate-400">
                  ⚪ Điểm đáp án đề gốc:{' '}
                  <strong className="text-slate-200">
                    {isResultUnlocked ? pg.markerOrig.label : '🔒 Kiểm tra đáp án để mở khóa'}
                  </strong>
                </span>
                <span className="text-amber-300">
                  🟠 Điểm đáp án đề hiện tại:{' '}
                  <strong>
                    {isResultUnlocked ? pg.markerNew.label : '🔒 Kiểm tra đáp án để mở khóa'}
                  </strong>
                </span>
              </div>
            </div>

            {/* Live Derived Telemetry Cards */}
            {isResultUnlocked ? (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
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
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/80 p-3.5 text-center text-xs font-semibold text-slate-500">
                🔒 Số liệu đáp án trên đồ thị đang được ẩn để bạn tự nhập kết quả vào ô{' '}
                <strong>Nhập đáp án</strong> bên trái và bấm <strong>Kiểm tra đáp án</strong> (dù là đề
                gốc hay đề đã đổi số What-If).
              </div>
            )}
          </div>

          {/* 2. Synchronized Interactive Physics Lab */}
          <InteractivePhysicsLab simulation={syncedSimulation} />

          {/* 3. Topic Formulas Reference Card */}
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

function clampVal(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

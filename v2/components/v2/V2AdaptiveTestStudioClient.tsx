'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import gsap from 'gsap';
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Compass,
  Filter,
  History,
  Layers,
  Network,
  Play,
  RefreshCw,
  RotateCcw,
  Search,
  Sparkles,
  Target,
  Trash2,
  TrendingUp,
  XCircle,
} from 'lucide-react';
import {
  calibrateQuestionPool,
  estimateAbilityEAP,
  getAbilityTier,
  irtFisherInformation,
  selectNextCatQuestion,
  thetaToScore10,
  type CalibratedCatQuestion,
  type CatResponseStep,
} from '@/lib/adaptive-cat';
import type { DifficultyLevel, QuestionItem } from '@/types/cms';
import { KatexFormula, RichPhysicsText } from '@/components/KatexRenderer';
import { GlobalSearchModal } from '@/components/GlobalSearchModal';
import {
  RETURN_TO_CURRICULUM_KEY,
  getSavedGradePreference,
  saveGradePreference,
} from '@/lib/grade-context';

export interface AdaptiveChapterItem {
  id: number;
  code: string;
  title: string;
  grade_number: number;
  order_index: number;
}

export interface AdaptiveTopicItem {
  id: number;
  code: string;
  title: string;
  chapter_id: number;
  grade_number: number;
}

export type AdaptiveQuestionInput = QuestionItem & {
  topic_code: string | null;
  topic_title: string | null;
  chapter_code: string;
  chapter_title: string;
  grade_number: number;
  empiricalWrongCount: number;
};

interface SavedCatAttemptRow {
  id: number;
  title: string;
  scope_type: string;
  scope_id: number;
  grade_number: number | null;
  total_questions: number;
  correct_count: number;
  final_theta: number;
  final_se: number;
  confidence_pct: number;
  predicted_score_10: number;
  ability_tier_label: string;
  time_spent_sec: number;
  history_json: string;
  created_at: string;
}

interface Props {
  chapters: AdaptiveChapterItem[];
  topics: AdaptiveTopicItem[];
  questions: AdaptiveQuestionInput[];
  initialGrade: number | null;
}

const GRADES = [6, 7, 8, 9, 10, 11, 12] as const;

const DIFF_LABELS: Record<DifficultyLevel, { label: string; cls: string }> = {
  nhan_biet: {
    label: 'Nhận biết',
    cls: 'border-cyan-400/25 bg-cyan-500/15 text-cyan-200',
  },
  thong_hieu: {
    label: 'Thông hiểu',
    cls: 'border-sky-400/25 bg-sky-500/15 text-sky-200',
  },
  van_dung: {
    label: 'Vận dụng',
    cls: 'border-amber-400/25 bg-amber-500/15 text-amber-200',
  },
  van_dung_cao: {
    label: 'Vận dụng cao',
    cls: 'border-rose-400/25 bg-rose-500/15 text-rose-200',
  },
};

function formatDuration(sec: number) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function ThetaTrajectorySvg({
  steps,
}: {
  steps: Array<{
    stepNumber: number;
    thetaAfter: number;
    seAfter: number;
    isCorrect: boolean;
    difficultyB?: number;
  }>;
}) {
  if (steps.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center rounded-xl border border-white/[0.06] bg-[#03050d]/80 text-xs text-slate-500">
        Đồ thị hội tụ Theta (θ) sẽ cập nhật sau câu trả lời đầu tiên
      </div>
    );
  }

  const W = 520;
  const H = 190;
  const padL = 36;
  const padR = 16;
  const padT = 16;
  const padB = 26;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;

  const totalSteps = Math.max(2, steps.length);
  const xFor = (idx: number) =>
    padL + (totalSteps === 1 ? plotW / 2 : (idx / (totalSteps - 1)) * plotW);
  const yFor = (val: number) => {
    const clamped = Math.max(-3, Math.min(3, val));
    return padT + ((3 - clamped) / 6) * plotH;
  };

  const linePath = steps
    .map((s, i) => `${i === 0 ? 'M' : 'L'} ${xFor(i).toFixed(1)} ${yFor(s.thetaAfter).toFixed(1)}`)
    .join(' ');

  const upperPoints = steps
    .map((s, i) => `${xFor(i).toFixed(1)},${yFor(s.thetaAfter + (s.seAfter || 0.5)).toFixed(1)}`)
    .join(' ');
  const lowerPoints = [...steps]
    .reverse()
    .map((s, revIdx) => {
      const i = steps.length - 1 - revIdx;
      return `${xFor(i).toFixed(1)},${yFor(s.thetaAfter - (s.seAfter || 0.5)).toFixed(1)}`;
    })
    .join(' ');

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full overflow-visible rounded-xl border border-white/[0.06] bg-[#03050d]/90"
    >
      {/* Grid lines at θ = -2, 0, +2 */}
      {[-2, 0, 2].map((tick) => {
        const y = yFor(tick);
        return (
          <g key={tick}>
            <line
              x1={padL}
              y1={y}
              x2={W - padR}
              y2={y}
              stroke={tick === 0 ? 'rgba(148,163,184,0.28)' : 'rgba(148,163,184,0.12)'}
              strokeDasharray={tick === 0 ? undefined : '4 4'}
            />
            <text
              x={padL - 8}
              y={y + 3}
              textAnchor="end"
              fill="rgba(148,163,184,0.75)"
              fontSize="10"
              fontFamily="monospace"
            >
              {tick > 0 ? `+${tick}` : tick}
            </text>
          </g>
        );
      })}

      {/* SE Confidence Band */}
      {steps.length >= 2 && (
        <polygon points={`${upperPoints} ${lowerPoints}`} fill="rgba(34,211,238,0.10)" />
      )}

      {/* Theta Line */}
      {steps.length >= 2 && (
        <path d={linePath} fill="none" stroke="#22d3ee" strokeWidth="2.2" strokeLinecap="round" />
      )}

      {/* Step points + item difficulty b markers */}
      {steps.map((s, i) => {
        const x = xFor(i);
        const yTheta = yFor(s.thetaAfter);
        return (
          <g key={s.stepNumber}>
            {typeof s.difficultyB === 'number' && (
              <circle
                cx={x}
                cy={yFor(s.difficultyB)}
                r={2.5}
                fill="none"
                stroke="#fbbf24"
                strokeWidth="1.2"
                opacity={0.75}
              />
            )}
            <circle
              cx={x}
              cy={yTheta}
              r={4.2}
              fill={s.isCorrect ? '#34d399' : '#fb7185'}
              stroke="#03050d"
              strokeWidth="1.5"
            />
            <text
              x={x}
              y={H - 8}
              textAnchor="middle"
              fill="rgba(148,163,184,0.75)"
              fontSize="9"
              fontFamily="monospace"
            >
              C{s.stepNumber}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function V2AdaptiveTestStudioClient({
  chapters,
  topics,
  questions,
  initialGrade,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  // Calibrate entire question pool once
  const calibratedPool = useMemo(() => calibrateQuestionPool(questions), [questions]);

  // Top mode switcher
  const [mainTab, setMainTab] = useState<'arena' | 'history'>('arena');

  // Scope configuration state
  const [selectedGrade, setSelectedGrade] = useState<number>(initialGrade ?? 10);
  const [scopeType, setScopeType] = useState<'grade' | 'chapter' | 'topic'>('grade');
  const [selectedChapterId, setSelectedChapterId] = useState<number | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState<number | null>(null);
  const [targetQuestionsCount, setTargetQuestionsCount] = useState<number>(12);

  // CAT Runtime state
  const [sessionState, setSessionState] = useState<'config' | 'running' | 'summary'>('config');
  const [activePool, setActivePool] = useState<CalibratedCatQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<CalibratedCatQuestion | null>(null);
  const [selectionReason, setSelectionReason] = useState<string>('');
  const [history, setHistory] = useState<CatResponseStep[]>([]);
  const [currentTheta, setCurrentTheta] = useState<number>(0);
  const [currentSe, setCurrentSe] = useState<number>(1.15);
  const [currentConfidence, setCurrentConfidence] = useState<number>(25);
  const [elapsedSec, setElapsedSec] = useState<number>(0);

  // Question interaction inputs
  const [mcChoice, setMcChoice] = useState<number | null>(null);
  const [tfChoices, setTfChoices] = useState<Record<string, boolean>>({});
  const [shortInput, setShortInput] = useState<string>('');
  const [stepSubmitted, setStepSubmitted] = useState<boolean>(false);
  const [lastRecordedStep, setLastRecordedStep] = useState<CatResponseStep | null>(null);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  // Saved history attempts state
  const [savedAttempts, setSavedAttempts] = useState<SavedCatAttemptRow[]>([]);
  const [loadingAttempts, setLoadingAttempts] = useState<boolean>(false);
  const [expandedAttemptId, setExpandedAttemptId] = useState<number | null>(null);

  // Sync grade preference if initialGrade was null
  useEffect(() => {
    if (initialGrade !== null) {
      saveGradePreference(initialGrade);
      return;
    }
    const saved = getSavedGradePreference();
    if (saved && saved !== 'all') {
      setSelectedGrade(saved);
    }
  }, [initialGrade]);

  // GSAP stagger entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cat-stagger', {
        y: 14,
        opacity: 0,
        duration: 0.45,
        stagger: 0.05,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  // Load saved attempts
  const fetchAttempts = useCallback(async () => {
    setLoadingAttempts(true);
    try {
      const res = await fetch('/api/adaptive-cat/attempts');
      if (res.ok) {
        const json = await res.json();
        setSavedAttempts(Array.isArray(json.attempts) ? json.attempts : []);
      }
    } catch {
      // ignore offline
    } finally {
      setLoadingAttempts(false);
    }
  }, []);

  useEffect(() => {
    fetchAttempts();
  }, [fetchAttempts]);

  // Elapsed timer during running state
  useEffect(() => {
    if (sessionState !== 'running') return;
    const timer = setInterval(() => {
      setElapsedSec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [sessionState]);

  // Grade-filtered chapters and topics
  const gradeChapters = useMemo(
    () =>
      chapters
        .filter((c) => c.grade_number === selectedGrade)
        .sort((a, b) => a.order_index - b.order_index),
    [chapters, selectedGrade]
  );

  useEffect(() => {
    if (gradeChapters.length > 0) {
      setSelectedChapterId((prev) =>
        prev && gradeChapters.some((c) => c.id === prev) ? prev : gradeChapters[0].id
      );
    } else {
      setSelectedChapterId(null);
    }
  }, [gradeChapters]);

  const gradeTopics = useMemo(
    () => topics.filter((t) => t.grade_number === selectedGrade),
    [topics, selectedGrade]
  );

  useEffect(() => {
    const matching = selectedChapterId
      ? gradeTopics.filter((t) => t.chapter_id === selectedChapterId)
      : gradeTopics;
    if (matching.length > 0) {
      setSelectedTopicId((prev) =>
        prev && matching.some((t) => t.id === prev) ? prev : matching[0].id
      );
    } else if (gradeTopics.length > 0) {
      setSelectedTopicId(gradeTopics[0].id);
    } else {
      setSelectedTopicId(null);
    }
  }, [gradeTopics, selectedChapterId]);

  // Configured question pool
  const scopedPool = useMemo(() => {
    return calibratedPool.filter((q) => {
      if (q.grade_number !== selectedGrade) return false;
      if (scopeType === 'chapter' && selectedChapterId) {
        // match by chapter_code via chapter lookup
        const ch = chapters.find((c) => c.id === selectedChapterId);
        return ch ? q.chapter_code === ch.code : true;
      }
      if (scopeType === 'topic' && selectedTopicId) {
        return q.topic_id === selectedTopicId;
      }
      return true;
    });
  }, [calibratedPool, selectedGrade, scopeType, selectedChapterId, selectedTopicId, chapters]);

  const poolStats = useMemo(() => {
    const byDiff: Record<DifficultyLevel, number> = {
      nhan_biet: 0,
      thong_hieu: 0,
      van_dung: 0,
      van_dung_cao: 0,
    };
    let sumB = 0;
    let sumA = 0;
    for (const q of scopedPool) {
      if (byDiff[q.difficulty] !== undefined) byDiff[q.difficulty]++;
      sumB += q.irt.b;
      sumA += q.irt.a;
    }
    const len = scopedPool.length || 1;
    return {
      total: scopedPool.length,
      byDiff,
      avgB: (sumB / len).toFixed(2),
      avgA: (sumA / len).toFixed(2),
    };
  }, [scopedPool]);

  const effectiveLimit = Math.min(targetQuestionsCount, Math.max(1, scopedPool.length));

  const sessionTitle = useMemo(() => {
    if (scopeType === 'topic' && selectedTopicId) {
      const t = topics.find((item) => item.id === selectedTopicId);
      return t ? `CAT Lớp ${selectedGrade} · ${t.title}` : `CAT Lớp ${selectedGrade}`;
    }
    if (scopeType === 'chapter' && selectedChapterId) {
      const ch = chapters.find((item) => item.id === selectedChapterId);
      return ch ? `CAT Lớp ${selectedGrade} · ${ch.title}` : `CAT Lớp ${selectedGrade}`;
    }
    return `CAT Tổng hợp Toàn Khối Lớp ${selectedGrade}`;
  }, [scopeType, selectedGrade, selectedTopicId, selectedChapterId, topics, chapters]);

  const scopeId = useMemo(() => {
    if (scopeType === 'topic' && selectedTopicId) return selectedTopicId;
    if (scopeType === 'chapter' && selectedChapterId) return selectedChapterId;
    return selectedGrade;
  }, [scopeType, selectedTopicId, selectedChapterId, selectedGrade]);

  const markReturnToCurriculum = () => {
    try {
      sessionStorage.setItem(RETURN_TO_CURRICULUM_KEY, '1');
    } catch {
      // ignore
    }
  };

  const handleGradeSwitch = (g: number) => {
    setSelectedGrade(g);
    saveGradePreference(g);
  };

  const resetInputs = () => {
    setMcChoice(null);
    setTfChoices({});
    setShortInput('');
    setStepSubmitted(false);
    setLastRecordedStep(null);
  };

  const handleStartSession = () => {
    if (scopedPool.length === 0) return;
    const administered = new Set<number>();
    const { nextQuestion, selectionReason: reason } = selectNextCatQuestion(
      scopedPool,
      administered,
      0.0,
      []
    );
    if (!nextQuestion) return;

    setActivePool(scopedPool);
    setHistory([]);
    setCurrentTheta(0.0);
    setCurrentSe(1.15);
    setCurrentConfidence(25);
    setElapsedSec(0);
    setCurrentQuestion(nextQuestion);
    setSelectionReason(reason);
    setSaveStatus('idle');
    resetInputs();
    setSessionState('running');
  };

  const canSubmitCurrentAnswer = useMemo(() => {
    if (!currentQuestion || stepSubmitted) return false;
    if (currentQuestion.question_type === 'true_false') {
      const stmts = currentQuestion.tf_statements ?? [];
      return stmts.length > 0 && stmts.every((s) => tfChoices[s.id] !== undefined);
    }
    if (currentQuestion.question_type === 'short_answer') {
      return shortInput.trim().length > 0;
    }
    return mcChoice !== null;
  }, [currentQuestion, stepSubmitted, tfChoices, shortInput, mcChoice]);

  const handleSubmitCurrentAnswer = () => {
    if (!currentQuestion || stepSubmitted) return;

    let isCorrect = false;
    let scoreRatio = 0;
    let userAnswerPayload: any = mcChoice;

    if (
      currentQuestion.question_type === 'true_false' &&
      Array.isArray(currentQuestion.tf_statements) &&
      currentQuestion.tf_statements.length > 0
    ) {
      const stmts = currentQuestion.tf_statements;
      let rightCount = 0;
      for (const s of stmts) {
        if (tfChoices[s.id] === s.is_correct) rightCount++;
      }
      scoreRatio = rightCount / stmts.length;
      isCorrect = rightCount === stmts.length;
      userAnswerPayload = tfChoices;
    } else if (
      currentQuestion.question_type === 'short_answer' &&
      currentQuestion.short_answer
    ) {
      const targetRaw = String(currentQuestion.short_answer.target_value ?? '').trim();
      const userRaw = shortInput.trim().replace(',', '.');
      const targetNum = Number(targetRaw.replace(',', '.'));
      const userNum = Number(userRaw);
      if (Number.isFinite(targetNum) && Number.isFinite(userNum)) {
        const tol = Number(currentQuestion.short_answer.tolerance ?? 0.05);
        isCorrect = Math.abs(userNum - targetNum) <= tol;
      } else {
        isCorrect = userRaw.toLowerCase() === targetRaw.toLowerCase();
      }
      scoreRatio = isCorrect ? 1 : 0;
      userAnswerPayload = shortInput.trim();
    } else {
      isCorrect = mcChoice === currentQuestion.correct_index;
      scoreRatio = isCorrect ? 1 : 0;
      userAnswerPayload = mcChoice;
    }

    const thetaBefore = currentTheta;
    const eapInput = [
      ...history.map((h) => ({
        irt: h.question.irt,
        isCorrect: h.isCorrect,
        scoreRatio: h.scoreRatio,
      })),
      { irt: currentQuestion.irt, isCorrect, scoreRatio },
    ];
    const eap = estimateAbilityEAP(eapInput);
    const fisher = irtFisherInformation(thetaBefore, currentQuestion.irt);
    const predictedScore10 = thetaToScore10(eap.theta);

    const step: CatResponseStep = {
      stepNumber: history.length + 1,
      question: currentQuestion,
      userAnswer: userAnswerPayload,
      isCorrect,
      scoreRatio,
      thetaBefore,
      thetaAfter: eap.theta,
      thetaDelta: Number((eap.theta - thetaBefore).toFixed(2)),
      seAfter: eap.standardError,
      confidencePct: eap.confidencePct,
      predictedScore10,
      fisherInfoAtStep: fisher,
      adaptationReason: selectionReason,
    };

    setHistory((prev) => [...prev, step]);
    setCurrentTheta(eap.theta);
    setCurrentSe(eap.standardError);
    setCurrentConfidence(eap.confidencePct);
    setLastRecordedStep(step);
    setStepSubmitted(true);
  };

  const persistCompletedSession = useCallback(
    async (finalHistory: CatResponseStep[], theta: number, se: number, conf: number, sec: number) => {
      if (finalHistory.length === 0) return;
      setSaveStatus('saving');
      const correctCount = finalHistory.filter((s) => s.isCorrect).length;
      const predictedScore10 = thetaToScore10(theta);
      const tier = getAbilityTier(theta);

      try {
        const res = await fetch('/api/adaptive-cat/attempts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: sessionTitle,
            scopeType,
            scopeId,
            gradeNumber: selectedGrade,
            totalQuestions: finalHistory.length,
            correctCount,
            finalTheta: theta,
            finalSe: se,
            confidencePct: conf,
            predictedScore10,
            abilityTierLabel: tier.label,
            timeSpentSec: sec,
            history: finalHistory.map((h) => ({
              stepNumber: h.stepNumber,
              questionId: h.question.id,
              topicCode: h.question.topic_code ?? null,
              topicTitle: h.question.topic_title ?? null,
              difficulty: h.question.difficulty,
              b: h.question.irt.b,
              isCorrect: h.isCorrect,
              thetaAfter: h.thetaAfter,
              seAfter: h.seAfter,
              predictedScore10: h.predictedScore10,
              adaptationReason: h.adaptationReason,
            })),
          }),
        });

        // Also sync MCQ mistakes into Mistake Book
        const mcqResults = finalHistory
          .filter((h) => h.question.question_type !== 'true_false' && h.question.question_type !== 'short_answer')
          .map((h) => ({
            questionId: h.question.id,
            correct: h.isCorrect,
            selectedOption: typeof h.userAnswer === 'number' ? h.userAnswer : -1,
          }));

        if (mcqResults.length > 0) {
          await fetch('/api/mistakes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              action: 'batch_practice_result',
              results: mcqResults,
            }),
          });
        }

        if (res.ok) {
          setSaveStatus('saved');
          fetchAttempts();
        } else {
          setSaveStatus('error');
        }
      } catch {
        setSaveStatus('error');
      }
    },
    [sessionTitle, scopeType, scopeId, selectedGrade, fetchAttempts]
  );

  const handleAdvanceOrFinish = () => {
    if (history.length >= effectiveLimit) {
      setSessionState('summary');
      persistCompletedSession(history, currentTheta, currentSe, currentConfidence, elapsedSec);
      return;
    }

    const administered = new Set(history.map((h) => h.question.id));
    const { nextQuestion, selectionReason: reason } = selectNextCatQuestion(
      activePool,
      administered,
      currentTheta,
      history
    );

    if (!nextQuestion) {
      setSessionState('summary');
      persistCompletedSession(history, currentTheta, currentSe, currentConfidence, elapsedSec);
      return;
    }

    setCurrentQuestion(nextQuestion);
    setSelectionReason(reason);
    resetInputs();
  };

  const handleEarlyFinish = () => {
    if (history.length === 0) {
      setSessionState('config');
      return;
    }
    setSessionState('summary');
    persistCompletedSession(history, currentTheta, currentSe, currentConfidence, elapsedSec);
  };

  const handleDeleteAttempt = async (id: number) => {
    try {
      const res = await fetch(`/api/adaptive-cat/attempts?id=${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setSavedAttempts((prev) => prev.filter((a) => a.id !== id));
        if (expandedAttemptId === id) setExpandedAttemptId(null);
      }
    } catch {
      // ignore
    }
  };

  const finalTier = useMemo(() => getAbilityTier(currentTheta), [currentTheta]);
  const predictedScore10 = useMemo(() => thetaToScore10(currentTheta), [currentTheta]);

  return (
    <MotionConfig reducedMotion="user">
      <div
        ref={rootRef}
        className="min-h-screen bg-[#03050d] text-slate-100 selection:bg-purple-500/30 selection:text-purple-100"
      >
        {/* Subtle Deep-Space Nebula Glows */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-40 right-1/4 h-[520px] w-[520px] rounded-full bg-purple-500/[0.06] blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 h-[480px] w-[480px] rounded-full bg-cyan-500/[0.06] blur-[140px]" />
        </div>

        {/* Sticky Single-Row Obsidian Command Bar */}
        <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#03050d]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-2 px-4 py-2.5 lg:flex-nowrap">
            <div className="flex shrink-0 items-center gap-2.5 whitespace-nowrap">
              <Link
                href="/#curriculum-app"
                scroll={false}
                onClick={markReturnToCurriculum}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-cyan-200"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Giáo trình</span>
              </Link>
              <span className="h-4 w-px bg-white/10" />
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-purple-400/25 bg-purple-500/10 text-purple-300">
                  <Target className="h-4 w-4" />
                </div>
                <div>
                  <h1 className="text-sm font-bold tracking-tight text-white">
                    Khảo thí Thích ứng CAT · IRT 3PL
                  </h1>
                  <p className="hidden text-[11px] text-slate-400 sm:block">
                    Định lượng Năng lực Theta (θ) &amp; Fisher Information
                  </p>
                </div>
              </div>
            </div>

            <nav className="flex shrink-0 items-center gap-1.5 overflow-x-auto whitespace-nowrap">
              <Link
                href="/knowledge-graph"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-cyan-200"
              >
                <Network className="h-3.5 w-3.5 text-cyan-300" />
                <span className="hidden md:inline">Bản đồ DAG</span>
              </Link>
              <Link
                href="/progress"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-emerald-400/30 hover:bg-emerald-500/10 hover:text-emerald-200"
              >
                <Activity className="h-3.5 w-3.5 text-emerald-300" />
                <span className="hidden md:inline">Tiến độ</span>
              </Link>
              <Link
                href="/flashcards"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-amber-400/30 hover:bg-amber-500/10 hover:text-amber-200"
              >
                <Layers className="h-3.5 w-3.5 text-amber-300" />
                <span className="hidden md:inline">Flashcards</span>
              </Link>
              <Link
                href="/cheatsheet"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-sky-400/30 hover:bg-sky-500/10 hover:text-sky-200"
              >
                <BookOpen className="h-3.5 w-3.5 text-sky-300" />
                <span className="hidden md:inline">Công thức</span>
              </Link>
              <GlobalSearchModal variant="glass" />
            </nav>
          </div>
        </header>

        <main className="relative z-10 mx-auto max-w-[1440px] space-y-6 px-4 py-6">
          {/* Top Mode Bar */}
          <div className="cat-stagger flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-2">
            <div className="flex items-center gap-1.5">
              {(
                [
                  { id: 'arena', label: 'Phòng thi Thích ứng CAT', icon: Target },
                  {
                    id: 'history',
                    label: `Hồ sơ & Lịch sử (${savedAttempts.length})`,
                    icon: History,
                  },
                ] as const
              ).map((tab) => {
                const active = mainTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setMainTab(tab.id)}
                    className={`relative flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-colors ${
                      active ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {active && (
                      <motion.div
                        layoutId="cat-main-tab"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        className="absolute inset-0 rounded-xl border border-purple-400/35 bg-purple-500/15"
                      />
                    )}
                    <Icon className="relative z-10 h-3.5 w-3.5 text-purple-300" />
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 px-2 text-xs text-slate-400">
              <span>Kho câu hỏi chuẩn hóa IRT:</span>
              <span className="font-mono font-bold text-cyan-300">
                {calibratedPool.length} câu
              </span>
            </div>
          </div>

          {/* MODE 1: CAT CONFIGURATION / ARENA / SUMMARY */}
          {mainTab === 'arena' && (
            <AnimatePresence mode="wait">
              {sessionState === 'config' && (
                <motion.div
                  key="config"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="grid grid-cols-1 gap-6 lg:grid-cols-12"
                >
                  {/* Left 7 Cols: Scope Cockpit */}
                  <div className="space-y-5 rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-6 lg:col-span-7">
                    <div>
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/25 bg-purple-500/10 px-3 py-1 text-[11px] font-semibold text-purple-200">
                        <Sparkles className="h-3 w-3" />
                        <span>Thiết lập Phạm vi Khảo thí</span>
                      </div>
                      <h2 className="mt-3 text-xl font-bold text-white">
                        Chọn Khối lớp &amp; Cấu trúc Đề thích ứng
                      </h2>
                      <p className="mt-1 text-xs text-slate-400">
                        Hệ thống hiệu chuẩn 3 tham số IRT (a, b, c) cho mọi câu hỏi và chọn câu tối ưu thông tin Fisher theo từng bước làm bài của bạn.
                      </p>
                    </div>

                    {/* Grade Picker */}
                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                        1. Chọn Khối lớp
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {GRADES.map((g) => {
                          const active = selectedGrade === g;
                          return (
                            <button
                              key={g}
                              type="button"
                              onClick={() => handleGradeSwitch(g)}
                              className={`rounded-xl border px-3.5 py-2 text-xs font-semibold transition-all ${
                                active
                                  ? 'border-cyan-400/45 bg-cyan-500/15 text-cyan-200'
                                  : 'border-white/[0.06] bg-white/5 text-slate-300 hover:border-white/15'
                              }`}
                            >
                              Lớp {g}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Scope Granularity */}
                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                        2. Phạm vi kiến thức
                      </label>
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                        {(
                          [
                            { id: 'grade', label: 'Tổng hợp cả khối', desc: 'Cân bằng mọi chuyên đề' },
                            { id: 'chapter', label: 'Theo Chương', desc: 'Tập trung 1 chương cụ thể' },
                            { id: 'topic', label: 'Theo Bài học', desc: 'Đào sâu 1 chủ đề duy nhất' },
                          ] as const
                        ).map((mode) => {
                          const active = scopeType === mode.id;
                          return (
                            <button
                              key={mode.id}
                              type="button"
                              onClick={() => setScopeType(mode.id)}
                              className={`rounded-xl border p-3 text-left transition-all ${
                                active
                                  ? 'border-purple-400/45 bg-purple-500/15'
                                  : 'border-white/[0.06] bg-white/5 hover:border-white/15'
                              }`}
                            >
                              <div className="text-xs font-bold text-white">{mode.label}</div>
                              <div className="mt-0.5 text-[11px] text-slate-400">{mode.desc}</div>
                            </button>
                          );
                        })}
                      </div>

                      {(scopeType === 'chapter' || scopeType === 'topic') && (
                        <div className="mt-3 space-y-2.5">
                          <div>
                            <label className="mb-1 block text-[11px] text-slate-400">Chọn Chương</label>
                            <select
                              value={selectedChapterId ?? ''}
                              onChange={(e) => setSelectedChapterId(Number(e.target.value))}
                              className="w-full rounded-xl border border-white/10 bg-[#03050d] px-3 py-2 text-xs text-white focus:border-cyan-400/40 focus:outline-none"
                            >
                              {gradeChapters.map((c) => (
                                <option key={c.id} value={c.id}>
                                  {c.code} — {c.title}
                                </option>
                              ))}
                            </select>
                          </div>

                          {scopeType === 'topic' && (
                            <div>
                              <label className="mb-1 block text-[11px] text-slate-400">
                                Chọn Chủ đề / Bài học
                              </label>
                              <select
                                value={selectedTopicId ?? ''}
                                onChange={(e) => setSelectedTopicId(Number(e.target.value))}
                                className="w-full rounded-xl border border-white/10 bg-[#03050d] px-3 py-2 text-xs text-white focus:border-cyan-400/40 focus:outline-none"
                              >
                                {(selectedChapterId
                                  ? gradeTopics.filter((t) => t.chapter_id === selectedChapterId)
                                  : gradeTopics
                                ).map((t) => (
                                  <option key={t.id} value={t.id}>
                                    {t.code} — {t.title}
                                  </option>
                                ))}
                              </select>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Question Count */}
                    <div>
                      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                        3. Số câu hỏi mục tiêu
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {[8, 12, 15, 20].map((cnt) => {
                          const active = targetQuestionsCount === cnt;
                          return (
                            <button
                              key={cnt}
                              type="button"
                              onClick={() => setTargetQuestionsCount(cnt)}
                              className={`rounded-xl border py-2 text-center font-mono text-xs font-bold transition-all ${
                                active
                                  ? 'border-emerald-400/45 bg-emerald-500/15 text-emerald-200'
                                  : 'border-white/[0.06] bg-white/5 text-slate-300 hover:border-white/15'
                              }`}
                            >
                              {cnt} câu
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Pool Calibration Bar */}
                    <div className="rounded-xl border border-white/[0.06] bg-[#03050d]/80 p-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                        <span className="font-semibold text-white">
                          Ngân hàng đề khả dụng: <span className="font-mono text-cyan-300">{poolStats.total}</span> câu
                        </span>
                        <span className="font-mono text-[11px] text-slate-400">
                          Độ khó TB b = {poolStats.avgB} · Độ phân loại TB a = {poolStats.avgA}
                        </span>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {(Object.keys(DIFF_LABELS) as DifficultyLevel[]).map((diff) => (
                          <div
                            key={diff}
                            className="rounded-lg border border-white/[0.06] bg-white/5 px-2.5 py-2"
                          >
                            <div className="text-[10px] text-slate-400">
                              {DIFF_LABELS[diff].label}
                            </div>
                            <div className="mt-0.5 font-mono text-sm font-bold text-white">
                              {poolStats.byDiff[diff]}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      disabled={poolStats.total === 0}
                      onClick={handleStartSession}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/20 px-5 py-3 text-sm font-bold text-emerald-100 transition-all hover:bg-emerald-500/30 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Play className="h-4 w-4" />
                      <span>
                        Bắt đầu Bài thi CAT ({effectiveLimit} câu) — {sessionTitle}
                      </span>
                    </button>
                  </div>

                  {/* Right 5 Cols: IRT 3PL Model & Insights */}
                  <div className="space-y-5 lg:col-span-5">
                    <div className="rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-6">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-300">
                        <BarChart3 className="h-4 w-4" />
                        <span>Nguyên lý Ước lượng IRT 3PL &amp; Fisher</span>
                      </div>
                      <div className="mt-4 rounded-xl border border-white/[0.06] bg-[#03050d]/90 p-3 text-center">
                        <KatexFormula
                          latex="P(X=1|\theta) = c + \frac{1-c}{1 + e^{-1.702a(\theta - b)}}"
                          displayMode
                        />
                      </div>
                      <ul className="mt-4 space-y-2.5 text-xs leading-relaxed text-slate-300">
                        <li>
                          <strong className="text-white">• Tham số θ (Theta):</strong> Thang năng lực tiềm ẩn từ{' '}
                          <span className="font-mono text-cyan-300">-3.0</span> đến{' '}
                          <span className="font-mono text-cyan-300">+3.0</span>, quy đổi mượt sang thang điểm 10.
                        </li>
                        <li>
                          <strong className="text-white">• Bước nhảy thích ứng:</strong> Trả lời đúng sẽ nâng bậc câu hỏi lên vùng thông tin Fisher cực đại; trả lời sai sẽ hạ nhẹ độ khó để kiểm tra lỗ hổng nền tảng.
                        </li>
                        <li>
                          <strong className="text-white">• Đồng bộ tự động:</strong> Kết thúc bài thi, điểm năng lực lưu vào Lịch sử CAT và mọi câu sai trắc nghiệm được ghi vào Sổ tay Lỗi sai.
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                          Thống kê phiên thi gần đây
                        </span>
                        <button
                          type="button"
                          onClick={() => setMainTab('history')}
                          className="text-xs font-medium text-cyan-300 hover:underline"
                        >
                          Xem tất cả →
                        </button>
                      </div>
                      {savedAttempts.length === 0 ? (
                        <p className="mt-3 text-xs text-slate-400">
                          Chưa có báo cáo CAT nào được lưu. Hoàn thành 1 phiên để theo dõi đường cong tiến bộ năng lực.
                        </p>
                      ) : (
                        <div className="mt-3 space-y-2">
                          {savedAttempts.slice(0, 3).map((att) => (
                            <div
                              key={att.id}
                              className="flex items-center justify-between gap-2 rounded-xl border border-white/[0.06] bg-white/5 px-3 py-2 text-xs"
                            >
                              <div className="min-w-0">
                                <div className="truncate font-semibold text-white">{att.title}</div>
                                <div className="text-[11px] text-slate-400">
                                  θ = {att.final_theta >= 0 ? '+' : ''}
                                  {att.final_theta} · Tin cậy {att.confidence_pct}%
                                </div>
                              </div>
                              <div className="shrink-0 rounded-lg border border-emerald-400/25 bg-emerald-500/15 px-2.5 py-1 font-mono font-bold text-emerald-200">
                                {att.predicted_score_10}/10
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {sessionState === 'running' && currentQuestion && (
                <motion.div
                  key="running"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="grid grid-cols-1 gap-6 lg:grid-cols-12"
                >
                  {/* Left 8 Cols: Active Question Card */}
                  <div className="space-y-4 lg:col-span-8">
                    {/* Runner Status Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <span className="rounded-lg border border-purple-400/30 bg-purple-500/15 px-2.5 py-1 font-mono text-xs font-bold text-purple-200">
                          Câu {history.length + (stepSubmitted ? 0 : 1)} / {effectiveLimit}
                        </span>
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-300">
                          <Clock className="h-3.5 w-3.5 text-cyan-300" />
                          {formatDuration(elapsedSec)}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={handleEarlyFinish}
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-rose-400/35 hover:text-rose-200"
                      >
                        Dừng &amp; Chấm điểm ngay
                      </button>
                    </div>

                    {/* Selection Adaptation Reason */}
                    <div className="rounded-xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-2.5 text-xs leading-relaxed text-cyan-100">
                      <span className="font-semibold text-cyan-300">Thuật toán IRT: </span>
                      {selectionReason}
                    </div>

                    {/* Question Stage */}
                    <div className="rounded-2xl border border-white/[0.06] bg-[#070b1a]/90 p-6">
                      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`rounded-md border px-2 py-0.5 text-[11px] font-semibold ${
                              DIFF_LABELS[currentQuestion.difficulty]?.cls ?? ''
                            }`}
                          >
                            {DIFF_LABELS[currentQuestion.difficulty]?.label ??
                              currentQuestion.difficulty}
                          </span>
                          {currentQuestion.topic_title && (
                            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-slate-300">
                              {currentQuestion.topic_title}
                            </span>
                          )}
                        </div>
                        <span className="font-mono text-[11px] text-slate-400">
                          a={currentQuestion.irt.a} · b={currentQuestion.irt.b >= 0 ? '+' : ''}
                          {currentQuestion.irt.b} · c={currentQuestion.irt.c}
                        </span>
                      </div>

                      <div className="text-base leading-relaxed text-white">
                        <RichPhysicsText text={currentQuestion.question_text} />
                      </div>

                      {/* Question Inputs */}
                      <div className="mt-5">
                        {currentQuestion.question_type === 'true_false' &&
                        Array.isArray(currentQuestion.tf_statements) &&
                        currentQuestion.tf_statements.length > 0 ? (
                          <div className="space-y-2.5">
                            {currentQuestion.tf_statements.map((stmt) => {
                              const picked = tfChoices[stmt.id];
                              return (
                                <div
                                  key={stmt.id}
                                  className="flex flex-col gap-2 rounded-xl border border-white/[0.06] bg-[#03050d]/80 p-3.5 sm:flex-row sm:items-center sm:justify-between"
                                >
                                  <div className="flex items-start gap-2 text-xs text-slate-200">
                                    <span className="font-mono font-bold text-cyan-300">
                                      {stmt.id})
                                    </span>
                                    <span>
                                      <RichPhysicsText text={stmt.text} />
                                    </span>
                                  </div>
                                  <div className="flex shrink-0 items-center gap-1.5">
                                    {[true, false].map((val) => {
                                      const active = picked === val;
                                      let btnCls =
                                        'border-white/10 bg-white/5 text-slate-300 hover:border-white/20';
                                      if (stepSubmitted) {
                                        if (stmt.is_correct === val) {
                                          btnCls =
                                            'border-emerald-400/50 bg-emerald-500/20 text-emerald-200';
                                        } else if (active) {
                                          btnCls =
                                            'border-rose-400/50 bg-rose-500/20 text-rose-200';
                                        }
                                      } else if (active) {
                                        btnCls =
                                          'border-cyan-400/50 bg-cyan-500/20 text-cyan-100';
                                      }
                                      return (
                                        <button
                                          key={String(val)}
                                          type="button"
                                          disabled={stepSubmitted}
                                          onClick={() =>
                                            setTfChoices((prev) => ({ ...prev, [stmt.id]: val }))
                                          }
                                          className={`rounded-lg border px-3 py-1 text-xs font-semibold transition-colors ${btnCls}`}
                                        >
                                          {val ? 'Đúng' : 'Sai'}
                                        </button>
                                      );
                                    })}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ) : currentQuestion.question_type === 'short_answer' ? (
                          <div className="space-y-2">
                            <label className="block text-xs font-medium text-slate-400">
                              Nhập đáp án số ngắn:
                            </label>
                            <input
                              type="text"
                              disabled={stepSubmitted}
                              value={shortInput}
                              onChange={(e) => setShortInput(e.target.value)}
                              placeholder="Ví dụ: 12.5"
                              className="w-full max-w-xs rounded-xl border border-white/15 bg-[#03050d] px-4 py-2.5 font-mono text-sm text-white placeholder-slate-500 focus:border-cyan-400/50 focus:outline-none"
                            />
                            {stepSubmitted && currentQuestion.short_answer && (
                              <div className="text-xs text-emerald-300">
                                Đáp án chuẩn:{' '}
                                <span className="font-mono font-bold">
                                  {String(currentQuestion.short_answer.target_value)}{' '}
                                  {currentQuestion.short_answer.unit || ''}
                                </span>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="space-y-2.5">
                            {currentQuestion.options.map((opt, idx) => {
                              const picked = mcChoice === idx;
                              const isCorrect = idx === currentQuestion.correct_index;
                              let cls =
                                'border-white/[0.06] bg-[#03050d]/80 text-slate-200 hover:border-cyan-400/35 hover:bg-white/5';
                              if (stepSubmitted) {
                                if (isCorrect) {
                                  cls =
                                    'border-emerald-400/50 bg-emerald-500/15 text-emerald-100';
                                } else if (picked && !isCorrect) {
                                  cls = 'border-rose-400/50 bg-rose-500/15 text-rose-100';
                                }
                              } else if (picked) {
                                cls = 'border-cyan-400/60 bg-cyan-500/15 text-white';
                              }
                              return (
                                <button
                                  key={idx}
                                  type="button"
                                  disabled={stepSubmitted}
                                  onClick={() => setMcChoice(idx)}
                                  className={`flex w-full items-start gap-3 rounded-xl border p-3.5 text-left text-sm transition-all ${cls}`}
                                >
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 font-mono text-xs font-bold">
                                    {String.fromCharCode(65 + idx)}
                                  </span>
                                  <span className="flex-1 pt-0.5">
                                    <RichPhysicsText text={opt} />
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>

                      {/* Feedback & Next Button after submitting step */}
                      {stepSubmitted && lastRecordedStep && (
                        <div className="mt-5 space-y-3 rounded-xl border border-white/[0.06] bg-[#03050d]/90 p-4">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span
                              className={`inline-flex items-center gap-1.5 text-xs font-bold ${
                                lastRecordedStep.isCorrect ? 'text-emerald-300' : 'text-rose-300'
                              }`}
                            >
                              {lastRecordedStep.isCorrect ? (
                                <CheckCircle2 className="h-4 w-4" />
                              ) : (
                                <XCircle className="h-4 w-4" />
                              )}
                              <span>
                                {lastRecordedStep.isCorrect ? 'Chính xác!' : 'Chưa chính xác'}
                              </span>
                            </span>
                            <span className="font-mono text-xs text-cyan-300">
                              θ: {lastRecordedStep.thetaBefore >= 0 ? '+' : ''}
                              {lastRecordedStep.thetaBefore} →{' '}
                              {lastRecordedStep.thetaAfter >= 0 ? '+' : ''}
                              {lastRecordedStep.thetaAfter} (
                              {lastRecordedStep.thetaDelta >= 0 ? '+' : ''}
                              {lastRecordedStep.thetaDelta})
                            </span>
                          </div>
                          {currentQuestion.explanation && (
                            <div className="text-xs leading-relaxed text-slate-300">
                              <strong className="text-white">Giải thích: </strong>
                              <RichPhysicsText text={currentQuestion.explanation} />
                            </div>
                          )}
                        </div>
                      )}

                      {/* Action Footer */}
                      <div className="mt-6 flex items-center justify-end gap-3">
                        {!stepSubmitted ? (
                          <button
                            type="button"
                            disabled={!canSubmitCurrentAnswer}
                            onClick={handleSubmitCurrentAnswer}
                            className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/20 px-5 py-2.5 text-xs font-bold text-cyan-100 transition-colors hover:bg-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            <CheckCircle2 className="h-4 w-4" />
                            <span>Xác nhận đáp án</span>
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={handleAdvanceOrFinish}
                            className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/20 px-5 py-2.5 text-xs font-bold text-emerald-100 transition-colors hover:bg-emerald-500/30"
                          >
                            <span>
                              {history.length >= effectiveLimit
                                ? 'Hoàn thành & Xem Báo cáo Năng lực'
                                : 'Câu tiếp theo (IRT chọn)'}
                            </span>
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right 4 Cols: Live IRT Telemetry Sidebar */}
                  <div className="space-y-4 lg:col-span-4">
                    <div className="rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-5">
                      <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-300">
                        <TrendingUp className="h-4 w-4" />
                        <span>Telemetry Năng lực Thời gian thực</span>
                      </h3>

                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="rounded-xl border border-white/[0.06] bg-white/5 p-3">
                          <div className="text-[11px] text-slate-400">Chỉ số Theta (θ)</div>
                          <div className="mt-1 font-mono text-2xl font-bold text-cyan-300">
                            {currentTheta >= 0 ? '+' : ''}
                            {currentTheta.toFixed(2)}
                          </div>
                        </div>
                        <div className="rounded-xl border border-white/[0.06] bg-white/5 p-3">
                          <div className="text-[11px] text-slate-400">Dự báo thang 10</div>
                          <div className="mt-1 font-mono text-2xl font-bold text-emerald-300">
                            {predictedScore10}/10
                          </div>
                        </div>
                        <div className="rounded-xl border border-white/[0.06] bg-white/5 p-3">
                          <div className="text-[11px] text-slate-400">Độ tin cậy EAP</div>
                          <div className="mt-1 font-mono text-lg font-bold text-white">
                            {currentConfidence}%
                          </div>
                        </div>
                        <div className="rounded-xl border border-white/[0.06] bg-white/5 p-3">
                          <div className="text-[11px] text-slate-400">Sai số chuẩn SE</div>
                          <div className="mt-1 font-mono text-lg font-bold text-amber-300">
                            ±{currentSe.toFixed(2)}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="mb-1.5 flex items-center justify-between text-[11px] text-slate-400">
                          <span>Quỹ đạo hội tụ θ &amp; Độ khó b (vòng tròn vàng)</span>
                        </div>
                        <ThetaTrajectorySvg
                          steps={history.map((h) => ({
                            stepNumber: h.stepNumber,
                            thetaAfter: h.thetaAfter,
                            seAfter: h.seAfter,
                            isCorrect: h.isCorrect,
                            difficultyB: h.question.irt.b,
                          }))}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {sessionState === 'summary' && (
                <motion.div
                  key="summary"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="space-y-6"
                >
                  {/* Top Report Banner */}
                  <div className="rounded-2xl border border-white/[0.06] bg-[#070b1a]/90 p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold text-emerald-200">
                          <Award className="h-3.5 w-3.5" />
                          <span>Báo cáo Định lượng Năng lực CAT · IRT 3PL</span>
                        </div>
                        <h2 className="mt-3 text-2xl font-bold text-white">{finalTier.label}</h2>
                        <p className="mt-1 max-w-2xl text-xs leading-relaxed text-slate-300">
                          {finalTier.description}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-1.5">
                        <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-300">
                          {saveStatus === 'saving'
                            ? 'Đang lưu báo cáo...'
                            : saveStatus === 'saved'
                            ? 'Đã lưu vào Hồ sơ & Đồng bộ Sổ tay lỗi sai'
                            : saveStatus === 'error'
                            ? 'Không thể lưu lên máy chủ'
                            : 'Bản xem trước'}
                        </span>
                        <span className="font-mono text-xs text-slate-400">
                          Thời gian: {formatDuration(elapsedSec)}
                        </span>
                      </div>
                    </div>

                    {/* 4 Metric Tiles */}
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      <div className="rounded-xl border border-white/[0.06] bg-white/5 p-4">
                        <div className="text-xs text-slate-400">Điểm dự báo thang 10</div>
                        <div className="mt-1 font-mono text-3xl font-bold text-emerald-300">
                          {predictedScore10}
                        </div>
                      </div>
                      <div className="rounded-xl border border-white/[0.06] bg-white/5 p-4">
                        <div className="text-xs text-slate-400">Năng lực cuối θ ± SE</div>
                        <div className="mt-1 font-mono text-2xl font-bold text-cyan-300">
                          {currentTheta >= 0 ? '+' : ''}
                          {currentTheta.toFixed(2)}{' '}
                          <span className="text-sm text-slate-400">±{currentSe.toFixed(2)}</span>
                        </div>
                      </div>
                      <div className="rounded-xl border border-white/[0.06] bg-white/5 p-4">
                        <div className="text-xs text-slate-400">Tỉ lệ chính xác</div>
                        <div className="mt-1 font-mono text-2xl font-bold text-white">
                          {history.filter((s) => s.isCorrect).length}/{history.length}
                        </div>
                      </div>
                      <div className="rounded-xl border border-white/[0.06] bg-white/5 p-4">
                        <div className="text-xs text-slate-400">Độ tin cậy Bayesian EAP</div>
                        <div className="mt-1 font-mono text-2xl font-bold text-purple-300">
                          {currentConfidence}%
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <ThetaTrajectorySvg
                        steps={history.map((h) => ({
                          stepNumber: h.stepNumber,
                          thetaAfter: h.thetaAfter,
                          seAfter: h.seAfter,
                          isCorrect: h.isCorrect,
                          difficultyB: h.question.irt.b,
                        }))}
                      />
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setSessionState('config')}
                        className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/20 px-4 py-2 text-xs font-bold text-cyan-100 hover:bg-cyan-500/30"
                      >
                        <RotateCcw className="h-3.5 w-3.5" />
                        <span>Thi bài mới</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setMainTab('history')}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 hover:border-white/20"
                      >
                        <History className="h-3.5 w-3.5" />
                        <span>Xem Hồ sơ lịch sử</span>
                      </button>
                      <Link
                        href={`/knowledge-graph?grade=${selectedGrade}`}
                        className="inline-flex items-center gap-2 rounded-xl border border-purple-400/30 bg-purple-500/15 px-4 py-2 text-xs font-semibold text-purple-200 hover:bg-purple-500/25"
                      >
                        <Network className="h-3.5 w-3.5" />
                        <span>Truy vết lỗ hổng trên Bản đồ DAG</span>
                      </Link>
                    </div>
                  </div>

                  {/* Step-by-step Answer Log */}
                  <div className="rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-6">
                    <h3 className="mb-4 text-sm font-bold text-white">
                      Chi tiết từng câu hỏi thích ứng ({history.length} bước)
                    </h3>
                    <div className="space-y-3">
                      {history.map((step) => (
                        <div
                          key={step.stepNumber}
                          className="rounded-xl border border-white/[0.06] bg-[#03050d]/80 p-4"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                            <div className="flex items-center gap-2">
                              <span
                                className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 font-semibold ${
                                  step.isCorrect
                                    ? 'border-emerald-400/30 bg-emerald-500/15 text-emerald-200'
                                    : 'border-rose-400/30 bg-rose-500/15 text-rose-200'
                                }`}
                              >
                                Câu {step.stepNumber} · {step.isCorrect ? 'Đúng' : 'Sai'}
                              </span>
                              <span
                                className={`rounded-md border px-2 py-0.5 text-[11px] ${
                                  DIFF_LABELS[step.question.difficulty]?.cls ?? ''
                                }`}
                              >
                                {DIFF_LABELS[step.question.difficulty]?.label}
                              </span>
                            </div>
                            <span className="font-mono text-cyan-300">
                              θ → {step.thetaAfter >= 0 ? '+' : ''}
                              {step.thetaAfter} ({step.predictedScore10}/10)
                            </span>
                          </div>
                          <div className="mt-2 text-xs text-slate-200">
                            <RichPhysicsText text={step.question.question_text} />
                          </div>
                          {step.question.explanation && (
                            <div className="mt-2 border-t border-white/[0.06] pt-2 text-[11px] text-slate-400">
                              <span className="font-semibold text-cyan-300">Giải thích: </span>
                              <RichPhysicsText text={step.question.explanation} />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {/* MODE 2: SAVED HISTORY ATTEMPTS */}
          {mainTab === 'history' && (
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold text-white">
                  Hồ sơ Năng lực &amp; Lịch sử Thi thích ứng CAT
                </h2>
                <button
                  type="button"
                  onClick={fetchAttempts}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-white/20"
                >
                  <RefreshCw className={`h-3.5 w-3.5 ${loadingAttempts ? 'animate-spin' : ''}`} />
                  <span>Làm mới</span>
                </button>
              </div>

              {savedAttempts.length === 0 ? (
                <div className="rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-10 text-center">
                  <History className="mx-auto h-10 w-10 text-slate-500" />
                  <p className="mt-3 text-sm font-medium text-slate-300">
                    Chưa có phiên thi thích ứng nào được lưu.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setMainTab('arena');
                      setSessionState('config');
                    }}
                    className="mt-4 rounded-xl border border-purple-400/35 bg-purple-500/15 px-4 py-2 text-xs font-semibold text-purple-200 hover:bg-purple-500/25"
                  >
                    Làm bài thi CAT đầu tiên
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {savedAttempts.map((attempt) => {
                    const isExpanded = expandedAttemptId === attempt.id;
                    let parsedSteps: any[] = [];
                    if (isExpanded) {
                      try {
                        const arr = JSON.parse(attempt.history_json);
                        if (Array.isArray(arr)) parsedSteps = arr;
                      } catch {
                        parsedSteps = [];
                      }
                    }

                    return (
                      <div
                        key={attempt.id}
                        className="rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-4 transition-colors hover:border-white/15"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-sm font-bold text-white">{attempt.title}</span>
                              {attempt.grade_number && (
                                <span className="rounded-md border border-cyan-400/25 bg-cyan-500/10 px-2 py-0.5 text-[11px] font-medium text-cyan-200">
                                  Lớp {attempt.grade_number}
                                </span>
                              )}
                              <span className="rounded-md border border-purple-400/25 bg-purple-500/10 px-2 py-0.5 text-[11px] text-purple-200">
                                {attempt.ability_tier_label}
                              </span>
                            </div>
                            <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                              <span>
                                Đúng {attempt.correct_count}/{attempt.total_questions} câu
                              </span>
                              <span>·</span>
                              <span className="font-mono">
                                θ = {attempt.final_theta >= 0 ? '+' : ''}
                                {attempt.final_theta} (±{attempt.final_se})
                              </span>
                              <span>·</span>
                              <span>Tin cậy {attempt.confidence_pct}%</span>
                              <span>·</span>
                              <span>{formatDuration(attempt.time_spent_sec)}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/15 px-3 py-1.5 font-mono text-sm font-bold text-emerald-200">
                              {attempt.predicted_score_10}/10
                            </div>
                            <button
                              type="button"
                              onClick={() =>
                                setExpandedAttemptId(isExpanded ? null : attempt.id)
                              }
                              className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 hover:border-white/20"
                              aria-label="Xem chi tiết"
                            >
                              {isExpanded ? (
                                <ChevronUp className="h-4 w-4" />
                              ) : (
                                <ChevronDown className="h-4 w-4" />
                              )}
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeleteAttempt(attempt.id)}
                              className="rounded-lg border border-rose-400/20 bg-rose-500/10 p-2 text-rose-300 hover:bg-rose-500/20"
                              aria-label="Xóa báo cáo"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>

                        {isExpanded && (
                          <div className="mt-4 space-y-3 border-t border-white/[0.06] pt-4">
                            <ThetaTrajectorySvg
                              steps={parsedSteps.map((s: any, idx: number) => ({
                                stepNumber: Number(s.stepNumber ?? idx + 1),
                                thetaAfter: Number(s.thetaAfter ?? 0),
                                seAfter: Number(s.seAfter ?? 0.5),
                                isCorrect: Boolean(s.isCorrect),
                                difficultyB: typeof s.b === 'number' ? s.b : undefined,
                              }))}
                            />
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                              {parsedSteps.map((s: any, idx: number) => (
                                <div
                                  key={idx}
                                  className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/5 px-3 py-2 text-xs"
                                >
                                  <span className="text-slate-300">
                                    Bước {s.stepNumber ?? idx + 1} ({s.topicTitle || s.difficulty || 'Câu hỏi'})
                                  </span>
                                  <span
                                    className={`font-mono font-bold ${
                                      s.isCorrect ? 'text-emerald-300' : 'text-rose-300'
                                    }`}
                                  >
                                    {s.isCorrect ? 'Đúng' : 'Sai'} · θ {Number(s.thetaAfter ?? 0).toFixed(2)}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          )}
        </main>
      </div>
    </MotionConfig>
  );
}

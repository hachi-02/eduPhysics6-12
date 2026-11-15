'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import gsap from 'gsap';
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Check,
  CheckCircle2,
  Clock,
  Compass,
  Copy,
  Eye,
  FileText,
  Filter,
  Gauge,
  History,
  Layers,
  List,
  Maximize2,
  Play,
  Printer,
  RotateCcw,
  Ruler,
  Search,
  ShieldCheck,
  Shuffle,
  Sigma,
  Sparkles,
  Target,
  Trash2,
  TrendingDown,
  TrendingUp,
  XCircle,
  Zap,
} from 'lucide-react';
import type {
  ChapterItem,
  DifficultyLevel,
  FormulaItem,
  GradeItem,
  QuantityItem,
  QuestionItem,
  TopicSummaryItem,
} from '@/types/cms';
import { KatexFormula, PhysicsMarkdown, RichPhysicsText } from '@/components/KatexRenderer';
import { GlobalSearchModal } from '@/components/GlobalSearchModal';
import {
  adaptToFormat2025,
  calculateExamScore,
  calculateTrueFalseScore,
  checkShortAnswer,
  type ExamScoreResult,
} from '@/lib/format2025-adapter';
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
import {
  getSavedGradePreference,
  RETURN_TO_CURRICULUM_KEY,
  saveGradePreference,
} from '@/lib/grade-context';

export type StudioMode = 'overview' | 'vault' | 'exam' | 'history';
type ExamEngineFormat = 'format2025' | 'adaptive_cat' | 'standard';

export interface QuizAttemptRow {
  id: number;
  student_name: string;
  score: number;
  total_questions: number;
  time_spent_sec: number;
  answers_json: string;
  created_at: string;
}

export interface CatAttemptRow {
  id: number;
  title: string;
  scope_type: 'topic' | 'chapter' | 'grade';
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

export interface V2ChapterStudioProps {
  chapter: ChapterItem;
  grade: GradeItem;
  topics: TopicSummaryItem[];
  allQuantities: (QuantityItem & { topic_title: string; topic_code: string })[];
  allFormulas: (FormulaItem & { topic_title: string; topic_code: string })[];
  examQuestions: QuestionItem[];
  recentAttempts: QuizAttemptRow[];
  initialMode?: StudioMode;
}

const DIFF_META: Record<
  DifficultyLevel,
  { label: string; badgeCls: string; dotColor: string }
> = {
  nhan_biet: {
    label: 'Mức 1 · Nhận biết',
    badgeCls: 'border-emerald-400/35 bg-emerald-500/15 text-emerald-200',
    dotColor: '#34d399',
  },
  thong_hieu: {
    label: 'Mức 2 · Thông hiểu',
    badgeCls: 'border-sky-400/35 bg-sky-500/15 text-sky-200',
    dotColor: '#38bdf8',
  },
  van_dung: {
    label: 'Mức 3 · Vận dụng',
    badgeCls: 'border-amber-400/35 bg-amber-500/15 text-amber-200',
    dotColor: '#fbbf24',
  },
  van_dung_cao: {
    label: 'Mức 4 · Vận dụng cao',
    badgeCls: 'border-rose-400/35 bg-rose-500/15 text-rose-200',
    dotColor: '#fb7185',
  },
};

const MODE_TABS: { id: StudioMode; label: string; shortLabel: string; icon: typeof Compass }[] = [
  { id: 'overview', label: 'Bản đồ chương', shortLabel: 'Trọng tâm', icon: Compass },
  { id: 'vault', label: 'Công thức & SI', shortLabel: 'Công thức', icon: Sigma },
  { id: 'exam', label: 'Khảo thí 2025', shortLabel: 'Khảo thí', icon: Target },
  { id: 'history', label: 'Lịch sử', shortLabel: 'Lịch sử', icon: History },
];

function shuffleArray<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function formatDuration(sec: number): string {
  const safe = Math.max(0, Math.floor(sec));
  const m = Math.floor(safe / 60);
  const s = safe % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function formatViDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return dateStr;
  }
}

function TelemetryRing({
  percentage,
  primaryText,
  subText,
  accentHex = '#fbbf24',
  size = 92,
}: {
  percentage: number;
  primaryText: string;
  subText: string;
  accentHex?: string;
  size?: number;
}) {
  const clamped = Math.max(0, Math.min(100, percentage));
  const stroke = 6;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - clamped / 100);

  return (
    <div className="relative flex shrink-0 items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={accentHex}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="font-mono text-base font-extrabold tracking-tight text-white">
          {primaryText}
        </span>
        <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">
          {subText}
        </span>
      </div>
    </div>
  );
}

function ThetaTrajectorySvg({
  history,
  currentTheta,
  maxItems,
}: {
  history: CatResponseStep[];
  currentTheta: number;
  maxItems: number;
}) {
  const width = 320;
  const height = 136;
  const padX = 24;
  const padY = 18;
  const plotW = width - padX * 2;
  const plotH = height - padY * 2;

  const yForTheta = (theta: number) => {
    const t = Math.max(-3, Math.min(3, theta));
    return padY + ((3 - t) / 6) * plotH;
  };

  const totalSlots = Math.max(maxItems, history.length, 4);
  const points = [
    { x: padX, y: yForTheta(0), theta: 0, correct: true, isOrigin: true },
    ...history.map((step, i) => ({
      x: padX + ((i + 1) / totalSlots) * plotW,
      y: yForTheta(step.thetaAfter),
      theta: step.thetaAfter,
      correct: step.isCorrect,
      isOrigin: false,
    })),
  ];

  const pathD = points
    .map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(' ');

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-[#040713]/90 p-3.5">
      <div className="mb-2 flex items-center justify-between text-[11px] font-mono">
        <span className="text-slate-400">QUỸ ĐẠO NĂNG LỰC θ [-3 → +3]</span>
        <span className={currentTheta >= 0 ? 'font-bold text-amber-300' : 'font-bold text-sky-300'}>
          θ = {currentTheta >= 0 ? `+${currentTheta.toFixed(2)}` : currentTheta.toFixed(2)}
        </span>
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="h-32 w-full overflow-visible">
        {/* Reference horizontal gridlines (+2, 0, -2) */}
        {[2, 0, -2].map((lvl) => {
          const y = yForTheta(lvl);
          return (
            <g key={lvl}>
              <line
                x1={padX}
                x2={width - padX}
                y1={y}
                y2={y}
                stroke={lvl === 0 ? 'rgba(255,255,255,0.16)' : 'rgba(255,255,255,0.06)'}
                strokeDasharray={lvl === 0 ? '4 4' : '2 4'}
              />
              <text
                x={4}
                y={y + 3}
                fontSize="9"
                fill="rgba(148,163,184,0.75)"
                fontFamily="monospace"
              >
                {lvl > 0 ? `+${lvl}` : lvl}
              </text>
            </g>
          );
        })}

        {/* Polyline path */}
        {points.length > 1 && (
          <motion.path
            d={pathD}
            fill="none"
            stroke="#fbbf24"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0.4 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          />
        )}

        {/* Plot nodes */}
        {points.map((pt, idx) => (
          <g key={idx}>
            <circle
              cx={pt.x}
              cy={pt.y}
              r={pt.isOrigin ? 3.5 : 4.5}
              fill={pt.isOrigin ? '#94a3b8' : pt.correct ? '#34d399' : '#fb7185'}
              stroke="#03050d"
              strokeWidth="1.5"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

export function V2ChapterStudioClient({
  chapter,
  grade,
  topics,
  allQuantities,
  allFormulas,
  examQuestions,
  recentAttempts,
  initialMode = 'overview',
}: V2ChapterStudioProps) {
  const router = useRouter();
  const studioRootRef = useRef<HTMLDivElement>(null);

  // Studio Global Navigation State
  const [activeMode, setActiveMode] = useState<StudioMode>(initialMode);
  const [focusedTopicCode, setFocusedTopicCode] = useState<string | null>(
    topics[0]?.code ?? null
  );

  // Vault Search & Filter State
  const [vaultQuery, setVaultQuery] = useState('');
  const [vaultTopicFilter, setVaultTopicFilter] = useState<string>('ALL');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // History State (Quiz + Adaptive CAT)
  const [quizAttempts, setQuizAttempts] = useState<QuizAttemptRow[]>(recentAttempts || []);
  const [catAttempts, setCatAttempts] = useState<CatAttemptRow[]>([]);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [inspectingQuizAttempt, setInspectingQuizAttempt] = useState<QuizAttemptRow | null>(null);
  const [inspectingCatAttempt, setInspectingCatAttempt] = useState<{
    row: CatAttemptRow;
    history: CatResponseStep[];
  } | null>(null);

  // Exam Cockpit Config State
  const [examFormat, setExamFormat] = useState<ExamEngineFormat>('format2025');
  const [diffFilter, setDiffFilter] = useState<'all' | 'basic' | 'advanced'>('all');
  const [shuffleQ, setShuffleQ] = useState(false);
  const [shuffleOpt, setShuffleOpt] = useState(false);
  const [catLengthSetting, setCatLengthSetting] = useState<number>(
    Math.min(10, Math.max(5, examQuestions.length || 10))
  );

  // Standard / 2025 Exam Runtime State
  const [examStarted, setExamStarted] = useState(false);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState<QuestionItem[]>(examQuestions);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [currentIdx, setCurrentIdx] = useState(0);
  const [viewMode, setViewMode] = useState<'single' | 'list'>('single');
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [examResult, setExamResult] = useState<ExamScoreResult | null>(null);
  const [submitWarning, setSubmitWarning] = useState<string | null>(null);

  // Adaptive CAT Runtime State
  const calibratedPool = useMemo(() => calibrateQuestionPool(examQuestions), [examQuestions]);
  const [catStarted, setCatStarted] = useState(false);
  const [catFinished, setCatFinished] = useState(false);
  const [catHistory, setCatHistory] = useState<CatResponseStep[]>([]);
  const [catTheta, setCatTheta] = useState(0);
  const [catSe, setCatSe] = useState(1.15);
  const [catConfidence, setCatConfidence] = useState(25);
  const [catCurrentQuestion, setCatCurrentQuestion] = useState<CalibratedCatQuestion | null>(
    null
  );
  const [catSelectionReason, setCatSelectionReason] = useState('');
  const [catSelectedOption, setCatSelectedOption] = useState<number | null>(null);
  const [catItemLocked, setCatItemLocked] = useState(false);
  const [catLatestStep, setCatLatestStep] = useState<CatResponseStep | null>(null);
  const [catSeconds, setCatSeconds] = useState(0);

  // Pointer spotlight tracking for Bento cards (compositor opacity only)
  const handleCardPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  // GSAP Entrance Stagger with prefers-reduced-motion gating
  useEffect(() => {
    if (!studioRootRef.current) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('[data-studio-reveal]', {
          y: 16,
          opacity: 0,
          duration: 0.52,
          stagger: 0.06,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });
      });
    }, studioRootRef);
    return () => ctx.revert();
  }, []);

  // Fetch Attempt History (Standard + CAT)
  const refreshAttempts = useCallback(async () => {
    try {
      setLoadingHistory(true);
      const [quizRes, catRes] = await Promise.all([
        fetch(`/api/quiz/attempts?scopeType=chapter&scopeId=${chapter.id}`),
        fetch(`/api/adaptive-cat/attempts?scopeType=chapter&scopeId=${chapter.id}`),
      ]);
      if (quizRes.ok) {
        const qData = await quizRes.json();
        setQuizAttempts(qData.attempts || []);
      }
      if (catRes.ok) {
        const cData = await catRes.json();
        setCatAttempts(cData.attempts || []);
      }
    } catch {
      // Ignore transient network failure
    } finally {
      setLoadingHistory(false);
    }
  }, [chapter.id]);

  useEffect(() => {
    refreshAttempts();
  }, [refreshAttempts]);

  // Mark return-to-curriculum intent & preserve grade context when navigating back home
  useEffect(() => {
    try {
      sessionStorage.setItem(RETURN_TO_CURRICULUM_KEY, String(grade.grade_number));
    } catch {
      // Ignore storage failure
    }
    if (getSavedGradePreference() === null) {
      saveGradePreference(grade.grade_number);
    }
  }, [grade.grade_number]);

  // Active exam timers
  useEffect(() => {
    if (!examStarted || examSubmitted) return;
    const id = setInterval(() => setSecondsElapsed((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [examStarted, examSubmitted]);

  useEffect(() => {
    if (!catStarted || catFinished) return;
    const id = setInterval(() => setCatSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [catStarted, catFinished]);

  // Telemetry Aggregates
  const completedTopicCount = useMemo(
    () => topics.filter((t) => Boolean(t.is_completed) || (t.best_quiz_score ?? 0) >= 20).length,
    [topics]
  );
  const testedTopicCount = useMemo(
    () => topics.filter((t) => t.best_quiz_score !== null && t.best_quiz_score !== undefined).length,
    [topics]
  );
  const coveragePct = useMemo(() => {
    if (topics.length === 0) return 0;
    const effective = Math.max(completedTopicCount, testedTopicCount);
    return Math.round((effective / topics.length) * 100);
  }, [topics.length, completedTopicCount, testedTopicCount]);

  const bestChapterScorePct = useMemo(() => {
    if (quizAttempts.length === 0) return null;
    const bestPct = Math.max(
      ...quizAttempts.map((a) =>
        a.total_questions > 0 ? Math.round((a.score / a.total_questions) * 100) : 0
      )
    );
    return bestPct;
  }, [quizAttempts]);

  const focusedTopic = useMemo(
    () => topics.find((t) => t.code === focusedTopicCode) ?? topics[0] ?? null,
    [topics, focusedTopicCode]
  );

  // Filtered Vault Collections
  const filteredCheatsheet = useMemo(() => {
    const q = vaultQuery.trim().toLowerCase();
    return (chapter.formula_cheatsheet || []).filter((fc) => {
      if (!q) return true;
      return (
        fc.name.toLowerCase().includes(q) ||
        fc.latex.toLowerCase().includes(q) ||
        fc.note.toLowerCase().includes(q)
      );
    });
  }, [chapter.formula_cheatsheet, vaultQuery]);

  const filteredTopicFormulas = useMemo(() => {
    const q = vaultQuery.trim().toLowerCase();
    return allFormulas.filter((f) => {
      if (vaultTopicFilter !== 'ALL' && f.topic_code !== vaultTopicFilter) return false;
      if (!q) return true;
      return (
        f.name.toLowerCase().includes(q) ||
        f.latex_expression.toLowerCase().includes(q) ||
        f.usage_note.toLowerCase().includes(q) ||
        f.topic_title.toLowerCase().includes(q)
      );
    });
  }, [allFormulas, vaultTopicFilter, vaultQuery]);

  const filteredQuantities = useMemo(() => {
    const q = vaultQuery.trim().toLowerCase();
    return allQuantities.filter((item) => {
      if (vaultTopicFilter !== 'ALL' && item.topic_code !== vaultTopicFilter) return false;
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        item.symbol.toLowerCase().includes(q) ||
        item.si_unit.toLowerCase().includes(q) ||
        item.measuring_device.toLowerCase().includes(q) ||
        item.topic_title.toLowerCase().includes(q)
      );
    });
  }, [allQuantities, vaultTopicFilter, vaultQuery]);

  const handleCopyLatex = async (key: string, latex: string) => {
    try {
      await navigator.clipboard.writeText(latex);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey((prev) => (prev === key ? null : prev)), 1500);
    } catch {
      // Clipboard blocked in non-HTTPS contexts
    }
  };

  // Exam Pool Statistics for Pre-launch Cards
  const basicCount = useMemo(
    () =>
      examQuestions.filter((q) => q.difficulty === 'nhan_biet' || q.difficulty === 'thong_hieu')
        .length,
    [examQuestions]
  );
  const advancedCount = useMemo(
    () =>
      examQuestions.filter((q) => q.difficulty === 'van_dung' || q.difficulty === 'van_dung_cao')
        .length,
    [examQuestions]
  );
  const format2025Preview = useMemo(() => adaptToFormat2025(examQuestions), [examQuestions]);

  // Standard / 2025 Exam Handlers
  const answeredCount = useMemo(() => {
    let count = 0;
    for (const q of activeQuestions) {
      const userAns = answers[q.id];
      if (userAns === undefined || userAns === null) continue;
      if (q.question_type === 'true_false') {
        const tf = userAns as Record<string, boolean>;
        if (tf && Object.keys(tf).length > 0) count++;
      } else if (q.question_type === 'short_answer') {
        if (String(userAns).trim().length > 0) count++;
      } else if (typeof userAns === 'number' && userAns >= 0) {
        count++;
      }
    }
    return count;
  }, [activeQuestions, answers]);

  const handleLaunchExam = () => {
    setSubmitWarning(null);
    if (examFormat === 'adaptive_cat') {
      const first = selectNextCatQuestion(calibratedPool, new Set<number>(), 0.0, []);
      setCatHistory([]);
      setCatTheta(0.0);
      setCatSe(1.15);
      setCatConfidence(25);
      setCatCurrentQuestion(first.nextQuestion);
      setCatSelectionReason(first.selectionReason);
      setCatSelectedOption(null);
      setCatItemLocked(false);
      setCatLatestStep(null);
      setCatSeconds(0);
      setCatFinished(false);
      setCatStarted(true);
      setExamStarted(false);
      return;
    }

    let list = [...examQuestions];
    if (examFormat === 'standard') {
      if (diffFilter === 'basic') {
        list = list.filter((q) => q.difficulty === 'nhan_biet' || q.difficulty === 'thong_hieu');
      } else if (diffFilter === 'advanced') {
        list = list.filter((q) => q.difficulty === 'van_dung' || q.difficulty === 'van_dung_cao');
      }
    }

    if (examFormat === 'format2025') {
      list = adaptToFormat2025(list);
    } else {
      list = list.map((q) => ({ ...q, question_type: 'multiple_choice' as const }));
    }

    if (examFormat === 'standard' && shuffleOpt) {
      list = list.map((q) => {
        if (q.question_type !== 'multiple_choice') return q;
        const correctText = q.options[q.correct_index];
        const shuffled = shuffleArray(q.options);
        const newIdx = shuffled.indexOf(correctText);
        return {
          ...q,
          options: shuffled,
          correct_index: newIdx >= 0 ? newIdx : q.correct_index,
        };
      });
    }

    if (examFormat === 'standard' && shuffleQ) {
      list = shuffleArray(list);
    }

    setActiveQuestions(list);
    setAnswers({});
    setExamSubmitted(false);
    setExamResult(null);
    setSecondsElapsed(0);
    setCurrentIdx(0);
    setExamStarted(true);
    setCatStarted(false);
  };

  const handleSubmitExam = async (force = false) => {
    if (examSubmitted) return;
    if (!force && answeredCount < activeQuestions.length) {
      setSubmitWarning(
        `Bạn còn ${activeQuestions.length - answeredCount} câu chưa hoàn thành. Nhấn "Xác nhận nộp ngay" nếu vẫn muốn chấm điểm.`
      );
      return;
    }
    setSubmitWarning(null);
    const result = calculateExamScore(activeQuestions, answers);
    setExamResult(result);
    setExamSubmitted(true);

    try {
      await fetch('/api/quiz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scopeType: 'chapter',
          scopeId: chapter.id,
          studentName: 'Học sinh',
          score: Math.round(result.totalScore),
          totalQuestions: activeQuestions.length,
          timeSpentSec: secondsElapsed,
          answers,
        }),
      });
      await refreshAttempts();
      router.refresh();
    } catch {
      // Ignore network failure
    }
  };

  const handleExitExamToDeck = () => {
    setExamStarted(false);
    setExamSubmitted(false);
    setExamResult(null);
    setSubmitWarning(null);
    setCatStarted(false);
    setCatFinished(false);
  };

  // CAT Handlers
  const catMaxItems = Math.min(catLengthSetting, calibratedPool.length);

  const handleConfirmCatAnswer = () => {
    if (!catCurrentQuestion || catSelectedOption === null || catItemLocked) return;

    const isCorrect = catSelectedOption === catCurrentQuestion.correct_index;
    const scoreRatio = isCorrect ? 1.0 : 0.0;
    const rawHistory = [
      ...catHistory.map((h) => ({
        irt: h.question.irt,
        isCorrect: h.isCorrect,
        scoreRatio: h.scoreRatio,
      })),
      { irt: catCurrentQuestion.irt, isCorrect, scoreRatio },
    ];

    const est = estimateAbilityEAP(rawHistory);
    const delta = Number((est.theta - catTheta).toFixed(2));
    const fisher = irtFisherInformation(catTheta, catCurrentQuestion.irt);
    const pred10 = thetaToScore10(est.theta);

    const adaptReason = isCorrect
      ? `Chính xác! Năng lực θ tăng +${Math.abs(delta).toFixed(2)} lên ${est.theta >= 0 ? '+' : ''}${est.theta}. Hệ thống nâng thử thách câu tiếp theo.`
      : `Chưa chính xác. Năng lực θ điều chỉnh -${Math.abs(delta).toFixed(2)} về ${est.theta >= 0 ? '+' : ''}${est.theta}. Câu tiếp theo giảm độ khó để củng cố.`;

    const stepRecord: CatResponseStep = {
      stepNumber: catHistory.length + 1,
      question: catCurrentQuestion,
      userAnswer: catSelectedOption,
      isCorrect,
      scoreRatio,
      thetaBefore: catTheta,
      thetaAfter: est.theta,
      thetaDelta: delta,
      seAfter: est.standardError,
      confidencePct: est.confidencePct,
      predictedScore10: pred10,
      fisherInfoAtStep: fisher,
      adaptationReason: adaptReason,
    };

    setCatHistory((prev) => [...prev, stepRecord]);
    setCatTheta(est.theta);
    setCatSe(est.standardError);
    setCatConfidence(est.confidencePct);
    setCatLatestStep(stepRecord);
    setCatItemLocked(true);
  };

  const finalizeCatSession = async (finalHistory: CatResponseStep[]) => {
    setCatFinished(true);
    const correctCount = finalHistory.filter((h) => h.isCorrect).length;
    const last = finalHistory[finalHistory.length - 1];
    const finalThetaVal = last ? last.thetaAfter : catTheta;
    const finalSeVal = last ? last.seAfter : catSe;
    const finalConf = last ? last.confidencePct : catConfidence;
    const predScore = thetaToScore10(finalThetaVal);
    const tier = getAbilityTier(finalThetaVal);

    try {
      await fetch('/api/adaptive-cat/attempts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: `CAT Chương ${chapter.code}: ${chapter.title}`,
          scopeType: 'chapter',
          scopeId: chapter.id,
          gradeNumber: grade.grade_number,
          totalQuestions: finalHistory.length,
          correctCount,
          finalTheta: finalThetaVal,
          finalSe: finalSeVal,
          confidencePct: finalConf,
          predictedScore10: predScore,
          abilityTierLabel: tier.shortLabel,
          timeSpentSec: catSeconds,
          history: finalHistory,
        }),
      });
      await refreshAttempts();
      router.refresh();
    } catch {
      // Ignore network failure
    }
  };

  const handleNextCatStep = async () => {
    if (!catItemLocked) return;
    if (catHistory.length >= catMaxItems) {
      await finalizeCatSession(catHistory);
      return;
    }

    const administered = new Set<number>(catHistory.map((h) => h.question.id));
    const nextPick = selectNextCatQuestion(calibratedPool, administered, catTheta, catHistory);
    if (!nextPick.nextQuestion) {
      await finalizeCatSession(catHistory);
      return;
    }

    setCatCurrentQuestion(nextPick.nextQuestion);
    setCatSelectionReason(nextPick.selectionReason);
    setCatSelectedOption(null);
    setCatItemLocked(false);
    setCatLatestStep(null);
  };

  const handleDeleteCatAttempt = async (id: number) => {
    try {
      const res = await fetch(`/api/adaptive-cat/attempts?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setCatAttempts((prev) => prev.filter((a) => a.id !== id));
        if (inspectingCatAttempt?.row.id === id) setInspectingCatAttempt(null);
      }
    } catch {
      // Ignore network failure
    }
  };

  const activeQuestion = activeQuestions[currentIdx];

  return (
    <MotionConfig reducedMotion="user">
      <div
        ref={studioRootRef}
        className="relative min-h-screen bg-[#03050d] text-slate-100 print:bg-white print:text-slate-900"
      >
        {/* Subtle Architectural Top Wash (Pure CSS radial gradients — NO 3D WebGL) */}
        <div
          aria-hidden="true"
          className="no-print pointer-events-none fixed inset-x-0 top-0 -z-0 h-[520px] opacity-80 print:hidden"
          style={{
            background:
              'radial-gradient(62% 85% at 15% 0%, rgba(56,189,248,0.12) 0%, transparent 65%), radial-gradient(50% 80% at 88% 5%, rgba(245,158,11,0.11) 0%, transparent 68%)',
          }}
        />

        {/* ================================================================
            1. TOP STICKY ARCHITECTURAL COMMAND BAR
        ================================================================ */}
        <header className="no-print sticky top-3 z-40 mx-auto max-w-[1440px] px-4 pt-3 sm:px-6 lg:px-8 print:hidden">
          <div className="rounded-2xl border border-white/[0.06] bg-[#070b1a]/85 px-3.5 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_50px_-15px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:px-5">
            <div className="flex items-center justify-between gap-2 lg:flex-nowrap">
              {/* Left Cluster: Back Home + Chapter Code Identity */}
              <div className="flex min-w-0 items-center gap-2.5">
                <Link
                  href="/#curriculum-app"
                  scroll={false}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-200"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline lg:hidden xl:inline">Trang chính</span>
                </Link>

                <div className="hidden h-4 w-px bg-white/10 sm:block" />

                <div className="flex items-center gap-1.5 truncate">
                  <span className="rounded-lg border border-sky-400/30 bg-sky-500/10 px-2 py-0.5 font-mono text-[11px] font-bold text-sky-300">
                    LỚP {grade.grade_number}
                  </span>
                  <span className="rounded-lg border border-amber-400/35 bg-amber-500/15 px-2 py-0.5 font-mono text-[11px] font-bold text-amber-200">
                    {chapter.code}
                  </span>
                </div>
              </div>

              {/* Center Cluster: Desktop Sliding Pill Mode Switcher */}
              <nav
                aria-label="Chế độ học tập chương"
                className="hidden items-center gap-1 rounded-xl border border-white/[0.06] bg-[#040713]/90 p-1 lg:flex"
              >
                {MODE_TABS.map((tab) => {
                  const Icon = tab.icon;
                  const active = activeMode === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveMode(tab.id)}
                      className={`relative flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-bold transition-colors xl:px-3 ${
                        active ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="v2ChapterStudioNavDesktop"
                          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                          className="absolute inset-0 rounded-lg border border-amber-400/40 bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-sky-500/20 shadow-[0_0_20px_rgba(245,158,11,0.16)]"
                        />
                      )}
                      <Icon
                        className={`relative z-10 h-3.5 w-3.5 ${
                          active ? 'text-amber-300' : 'text-slate-400'
                        }`}
                      />
                      <span className="relative z-10 whitespace-nowrap">{tab.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Right Cluster: Search + Print A4 + Quick Exam Launch */}
              <div className="flex shrink-0 items-center gap-2">
                <div className="w-9 sm:w-36 lg:w-36 xl:w-44">
                  <GlobalSearchModal variant="glass" />
                </div>

                <button
                  type="button"
                  onClick={() => window.print()}
                  title="In tóm tắt & công thức chương (Khổ A4)"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.04] px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-sky-400/40 hover:bg-sky-500/10 hover:text-sky-200"
                >
                  <Printer className="h-3.5 w-3.5 text-sky-300" />
                  <span className="hidden xl:inline">In A4</span>
                </button>

                {activeMode !== 'exam' && (
                  <button
                    type="button"
                    onClick={() => setActiveMode('exam')}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 px-3.5 py-2 text-xs font-bold text-slate-950 shadow-[0_0_24px_rgba(245,158,11,0.3)] transition hover:brightness-110"
                  >
                    <Target className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline whitespace-nowrap">
                      Làm đề<span className="hidden xl:inline"> chương</span>
                    </span>
                  </button>
                )}
              </div>
            </div>

            {/* Responsive Mode Switcher for < lg viewports */}
            <div className="no-scrollbar mt-2.5 flex items-center gap-1.5 overflow-x-auto border-t border-white/[0.07] pt-2 lg:hidden">
              {MODE_TABS.map((tab) => {
                const Icon = tab.icon;
                const active = activeMode === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveMode(tab.id)}
                    className={`relative flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
                      active ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="v2ChapterStudioNavMobile"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        className="absolute inset-0 rounded-lg border border-amber-400/40 bg-amber-500/15"
                      />
                    )}
                    <Icon
                      className={`relative z-10 h-3.5 w-3.5 ${
                        active ? 'text-amber-300' : 'text-slate-400'
                      }`}
                    />
                    <span className="relative z-10 whitespace-nowrap">{tab.shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        {/* ================================================================
            MAIN STUDIO CONTAINER
        ================================================================ */}
        <div className="relative z-10 mx-auto max-w-[1440px] space-y-7 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          {/* --------------------------------------------------------------
              2. ASYMMETRIC EDITORIAL HERO & SVG TELEMETRY DECK
          -------------------------------------------------------------- */}
          <section
            data-studio-reveal
            className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-stretch"
          >
            {/* Left 8 Columns: Architectural Editorial Header */}
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#060917]/90 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-8 lg:col-span-8 print:border-slate-300 print:bg-white print:text-slate-900">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-500/[0.08] blur-3xl print:hidden"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-sky-500/[0.08] blur-3xl print:hidden"
              />

              <div className="relative z-10 flex h-full flex-col justify-between space-y-5">
                <div className="space-y-3.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-amber-200 print:border-slate-300 print:text-slate-800">
                      <Sparkles className="h-3.5 w-3.5 text-amber-300 print:hidden" />
                      {grade.level_group} · {grade.title}
                    </span>
                    <span className="rounded-full border border-white/[0.06] bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-slate-300 print:text-slate-600">
                      {topics.length} bài học trọng tâm
                    </span>
                  </div>

                  <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[40px] lg:leading-[1.15] print:text-slate-950">
                    {chapter.title}
                  </h1>

                  <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-[15px] print:text-slate-700">
                    {chapter.description}
                  </p>
                </div>

                {/* Quick Topic Strip */}
                {topics.length > 0 && (
                  <div className="no-print space-y-2 border-t border-white/[0.06] pt-4 print:hidden">
                    <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      <span>Mạch chủ đề trong chương</span>
                      <span>
                        {completedTopicCount}/{topics.length} hoàn thành
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {topics.map((tp) => {
                        const isSelected = focusedTopic?.code === tp.code;
                        const isDone =
                          Boolean(tp.is_completed) || (tp.best_quiz_score ?? 0) >= 20;
                        return (
                          <button
                            key={tp.id}
                            type="button"
                            onClick={() => {
                              setFocusedTopicCode(tp.code);
                              if (activeMode !== 'overview' && activeMode !== 'vault') {
                                setActiveMode('overview');
                              }
                            }}
                            className={`inline-flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 font-mono text-[11px] font-semibold transition ${
                              isSelected
                                ? 'border-amber-400/60 bg-amber-400/15 text-amber-200 shadow-[0_0_16px_rgba(245,158,11,0.16)]'
                                : isDone
                                  ? 'border-emerald-400/35 bg-emerald-500/10 text-emerald-200 hover:border-emerald-400/60'
                                  : 'border-white/[0.06] bg-white/[0.03] text-slate-300 hover:border-sky-400/40 hover:text-white'
                            }`}
                          >
                            {isDone && <CheckCircle2 className="h-3 w-3 text-emerald-300" />}
                            <span>{tp.code}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right 4 Columns: Obsidian Telemetry Deck */}
            <div className="no-print flex flex-col justify-between gap-4 rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-6 lg:col-span-4 print:hidden">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <Gauge className="h-3.5 w-3.5 text-amber-300" />
                    Telemetry Chương
                  </div>
                  <div className="text-sm font-bold text-white">Độ phủ kiến thức</div>
                  <div className="text-xs text-slate-400">
                    Điểm thi cao nhất:{' '}
                    <span className="font-mono font-bold text-amber-300">
                      {bestChapterScorePct !== null ? `${bestChapterScorePct}%` : 'Chưa thi'}
                    </span>
                  </div>
                </div>

                <TelemetryRing
                  percentage={coveragePct}
                  primaryText={`${coveragePct}%`}
                  subText="Độ phủ"
                  accentHex="#fbbf24"
                />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                    Chủ đề
                  </div>
                  <div className="mt-0.5 font-mono text-xl font-extrabold text-white">
                    {topics.length}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                    Công thức
                  </div>
                  <div className="mt-0.5 font-mono text-xl font-extrabold text-amber-300">
                    {(chapter.formula_cheatsheet?.length ?? 0) + allFormulas.length}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                    Đại lượng SI
                  </div>
                  <div className="mt-0.5 font-mono text-xl font-extrabold text-emerald-300">
                    {allQuantities.length}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                    Kho đề 2025
                  </div>
                  <div className="mt-0.5 font-mono text-xl font-extrabold text-sky-300">
                    {examQuestions.length}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --------------------------------------------------------------
              3. ANIMATED STUDIO STAGE (4 MODES — NO overflow-hidden AROUND STICKY)
          -------------------------------------------------------------- */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              {/* ============================================================
                  MODE 1: OVERVIEW (SPLIT-SCREEN TOPIC ROADMAP + SYNTHESIS)
              ============================================================ */}
              {activeMode === 'overview' && (
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
                  {/* Left 5 Cols (Sticky): Orbital Topic Roadmap */}
                  <aside className="space-y-4 lg:sticky lg:top-24 lg:col-span-5 lg:self-start print:hidden">
                    <div className="rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-6">
                      <div className="mb-4 flex items-center justify-between gap-2">
                        <div>
                          <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-sky-300">
                            ORBITAL TOPIC RAIL
                          </div>
                          <h2 className="text-lg font-extrabold text-white">
                            Lộ trình Chủ đề Chương
                          </h2>
                        </div>
                        <span className="rounded-full border border-white/[0.06] bg-white/[0.05] px-2.5 py-1 font-mono text-xs text-slate-300">
                          {topics.length} bài
                        </span>
                      </div>

                      {topics.length === 0 ? (
                        <p className="text-sm text-slate-400">
                          Chưa có chủ đề thành phần trong chương này.
                        </p>
                      ) : (
                        <div className="relative space-y-2.5 pl-4 before:absolute before:bottom-4 before:left-[15px] before:top-4 before:w-px before:bg-gradient-to-b before:from-amber-400/50 before:via-sky-400/35 before:to-transparent">
                          {topics.map((tp, idx) => {
                            const selected = focusedTopic?.id === tp.id;
                            const done =
                              Boolean(tp.is_completed) || (tp.best_quiz_score ?? 0) >= 20;
                            return (
                              <div key={tp.id} className="relative pl-5">
                                <span
                                  aria-hidden="true"
                                  className={`absolute left-[-5px] top-4 h-2.5 w-2.5 rounded-full border-2 border-[#070b1a] transition-colors ${
                                    selected
                                      ? 'bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.9)]'
                                      : done
                                        ? 'bg-emerald-400'
                                        : 'bg-slate-600'
                                  }`}
                                />
                                <div
                                  role="button"
                                  tabIndex={0}
                                  onClick={() => setFocusedTopicCode(tp.code)}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                      e.preventDefault();
                                      setFocusedTopicCode(tp.code);
                                    }
                                  }}
                                  onPointerMove={handleCardPointerMove}
                                  className={`group relative w-full cursor-pointer overflow-hidden rounded-2xl border p-3.5 text-left transition ${
                                    selected
                                      ? 'border-amber-400/50 bg-amber-500/[0.1] shadow-[0_0_24px_rgba(245,158,11,0.12)]'
                                      : 'border-white/[0.06] bg-white/[0.03] hover:border-sky-400/35 hover:bg-white/[0.06]'
                                  }`}
                                >
                                  <div
                                    aria-hidden="true"
                                    className="cosmic-topic-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                  />
                                  <div className="relative z-10 space-y-1.5">
                                    <div className="flex items-center justify-between gap-2">
                                      <div className="flex items-center gap-2">
                                        <span className="font-mono text-[11px] font-bold text-amber-300">
                                          {String(idx + 1).padStart(2, '0')} · {tp.code}
                                        </span>
                                        {done && (
                                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                                            <CheckCircle2 className="h-3 w-3" />
                                            Đạt
                                          </span>
                                        )}
                                      </div>
                                      {tp.best_quiz_score != null && (
                                        <span className="font-mono text-[11px] font-bold text-sky-300">
                                          Max {tp.best_quiz_score}đ
                                        </span>
                                      )}
                                    </div>
                                    <div className="text-sm font-bold leading-snug text-white">
                                      {tp.title}
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5 font-mono text-[11px] text-slate-400">
                                      <div className="flex flex-wrap items-center gap-3">
                                        <span>{tp.formula_count} CT</span>
                                        <span>{tp.quantity_count} ĐL</span>
                                        <span>{tp.question_count} câu hỏi</span>
                                      </div>
                                      <Link
                                        href={`/topic/${tp.id}`}
                                        onClick={(e) => e.stopPropagation()}
                                        className="inline-flex items-center gap-1 rounded-lg border border-amber-400/35 bg-amber-500/15 px-2 py-0.5 text-[10px] font-bold text-amber-200 transition hover:bg-amber-500/25"
                                      >
                                        Học bài
                                        <ArrowRight className="h-3 w-3" />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* Focused Topic Preview Card */}
                      {focusedTopic && (
                        <div className="mt-4 space-y-3 rounded-2xl border border-sky-400/25 bg-sky-500/[0.06] p-4">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-sky-300">
                              Xem nhanh {focusedTopic.code}
                            </span>
                            {focusedTopic.textbook_tags?.length > 0 && (
                              <span className="rounded-md border border-white/[0.06] bg-white/[0.06] px-2 py-0.5 text-[10px] text-slate-300">
                                {focusedTopic.textbook_tags.join(' · ')}
                              </span>
                            )}
                          </div>
                          <p className="text-xs leading-relaxed text-slate-200">
                            {focusedTopic.overview || 'Chủ đề trọng tâm trong hệ thống kiến thức chương.'}
                          </p>
                          <div className="flex flex-col gap-2 sm:flex-row">
                            <Link
                              href={`/topic/${focusedTopic.id}`}
                              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 px-3 py-2 text-xs font-extrabold text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.28)] transition hover:brightness-110"
                            >
                              <BookOpen className="h-3.5 w-3.5" />
                              Vào học bài {focusedTopic.code}
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                            <button
                              type="button"
                              onClick={() => {
                                setVaultTopicFilter(focusedTopic.code);
                                setActiveMode('vault');
                              }}
                              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-sky-400/35 bg-sky-500/15 px-3 py-2 text-xs font-bold text-sky-200 transition hover:bg-sky-500/25"
                            >
                              <Sigma className="h-3.5 w-3.5" />
                              Lọc công thức &amp; SI
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </aside>

                  {/* Right 7 Cols: Key Takeaways Bento + Summary Markdown */}
                  <div className="space-y-6 lg:col-span-7">
                    {/* Bento Grid Key Takeaways */}
                    {chapter.key_takeaways && chapter.key_takeaways.length > 0 && (
                      <div className="space-y-3.5">
                        <div className="flex items-center justify-between">
                          <h2 className="flex items-center gap-2 text-lg font-extrabold text-white print:text-slate-950">
                            <Zap className="h-4.5 w-4.5 text-amber-300 print:hidden" />
                            <span>Điểm Cốt Lõi Cần Nhớ</span>
                          </h2>
                          <span className="font-mono text-xs text-slate-400">
                            {chapter.key_takeaways.length} chốt kiến thức
                          </span>
                        </div>

                        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                          {chapter.key_takeaways.map((kt, idx) => (
                            <div
                              key={idx}
                              onPointerMove={handleCardPointerMove}
                              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#080d22]/85 p-4 transition hover:border-amber-400/40 print:border-slate-300 print:bg-slate-50"
                            >
                              <div
                                aria-hidden="true"
                                className="cosmic-topic-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 print:hidden"
                              />
                              <div className="relative z-10 flex items-start gap-3">
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-amber-400/35 bg-amber-500/15 font-mono text-xs font-extrabold text-amber-200 print:border-slate-400 print:bg-white print:text-slate-900">
                                  {String(idx + 1).padStart(2, '0')}
                                </span>
                                <div className="text-xs leading-relaxed text-slate-200 sm:text-sm print:text-slate-800">
                                  <RichPhysicsText text={kt} />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Summary Markdown Editorial Block */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h2 className="flex items-center gap-2 text-lg font-extrabold text-white print:text-slate-950">
                          <FileText className="h-4.5 w-4.5 text-sky-300 print:hidden" />
                          <span>Hệ thống hóa Kiến thức Toàn chương</span>
                        </h2>
                      </div>
                      <PhysicsMarkdown text={chapter.summary_markdown} />
                    </div>

                    {/* Studio Flow Banner */}
                    <div className="no-print flex flex-col justify-between gap-4 rounded-3xl border border-amber-400/25 bg-gradient-to-r from-[#090f26] via-[#0c1229] to-[#120e1e] p-5 sm:flex-row sm:items-center print:hidden">
                      <div className="space-y-1">
                        <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-300">
                          BƯỚC TIẾP THEO
                        </div>
                        <div className="text-sm font-bold text-white sm:text-base">
                          Tra cứu Kho Công thức hoặc thử sức Đề chuẩn 2025
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        <button
                          type="button"
                          onClick={() => setActiveMode('vault')}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 text-xs font-bold text-slate-100 transition hover:border-sky-400/40 hover:bg-sky-500/15"
                        >
                          <Sigma className="h-3.5 w-3.5 text-sky-300" />
                          Mở Kho Công thức &amp; SI
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveMode('exam')}
                          className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 px-4 py-2.5 text-xs font-bold text-slate-950 shadow-[0_0_24px_rgba(245,158,11,0.3)] transition hover:brightness-110"
                        >
                          <Target className="h-3.5 w-3.5" />
                          Vào Phòng Khảo thí
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ============================================================
                  MODE 2: VAULT (FORMULA & SI QUANTITIES WORKBENCH)
              ============================================================ */}
              {activeMode === 'vault' && (
                <div className="space-y-6">
                  {/* Search & Topic Filter Toolbar */}
                  <div className="no-print space-y-3 rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-4 sm:p-5 print:hidden">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div className="relative flex-1">
                        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          value={vaultQuery}
                          onChange={(e) => setVaultQuery(e.target.value)}
                          placeholder="Tìm công thức, ký hiệu (v, a, F...), đơn vị SI hoặc dụng cụ đo..."
                          className="w-full rounded-xl border border-white/[0.06] bg-[#040713] py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-500 transition focus:border-amber-400/50 sm:text-sm"
                        />
                      </div>

                      <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                        <Filter className="h-3.5 w-3.5 text-amber-300" />
                        <span>
                          {filteredCheatsheet.length + filteredTopicFormulas.length} công thức ·{' '}
                          {filteredQuantities.length} đại lượng
                        </span>
                      </div>
                    </div>

                    {topics.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setVaultTopicFilter('ALL')}
                          className={`rounded-xl border px-3 py-1.5 font-mono text-[11px] font-bold transition ${
                            vaultTopicFilter === 'ALL'
                              ? 'border-amber-400/50 bg-amber-500/15 text-amber-200'
                              : 'border-white/[0.06] bg-white/[0.03] text-slate-400 hover:text-white'
                          }`}
                        >
                          Tất cả bài ({chapter.code})
                        </button>
                        {topics.map((tp) => (
                          <button
                            key={tp.id}
                            type="button"
                            onClick={() => setVaultTopicFilter(tp.code)}
                            className={`rounded-xl border px-3 py-1.5 font-mono text-[11px] font-bold transition ${
                              vaultTopicFilter === tp.code
                                ? 'border-sky-400/50 bg-sky-500/15 text-sky-200'
                                : 'border-white/[0.06] bg-white/[0.03] text-slate-400 hover:text-white'
                            }`}
                          >
                            {tp.code}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Section A: Chapter Cheatsheet Bento Grid */}
                  {vaultTopicFilter === 'ALL' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h2 className="flex items-center gap-2 text-lg font-extrabold text-white">
                          <Sigma className="h-5 w-5 text-amber-300" />
                          <span>Công thức Trọng tâm Toàn chương</span>
                        </h2>
                        <span className="font-mono text-xs text-slate-400">
                          {filteredCheatsheet.length} công thức
                        </span>
                      </div>

                      {filteredCheatsheet.length === 0 ? (
                        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center text-sm text-slate-400">
                          Không có công thức tổng quát khớp với từ khóa &ldquo;{vaultQuery}&rdquo;.
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                          {filteredCheatsheet.map((fc, idx) => {
                            const copyId = `cs-${idx}`;
                            const copied = copiedKey === copyId;
                            return (
                              <div
                                key={idx}
                                onPointerMove={handleCardPointerMove}
                                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.06] bg-[#070b1a]/90 p-5 transition hover:border-amber-400/45"
                              >
                                <div
                                  aria-hidden="true"
                                  className="cosmic-topic-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                />
                                <div className="relative z-10 space-y-3">
                                  <div className="flex items-start justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                      <span className="rounded-lg border border-amber-400/35 bg-amber-500/15 px-2 py-0.5 font-mono text-[11px] font-bold text-amber-200">
                                        F{String(idx + 1).padStart(2, '0')}
                                      </span>
                                      <h3 className="text-sm font-extrabold text-white">
                                        {fc.name}
                                      </h3>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => handleCopyLatex(copyId, fc.latex)}
                                      title="Sao chép mã LaTeX"
                                      className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-white/[0.06] bg-white/[0.05] px-2 py-1 font-mono text-[10px] font-semibold text-slate-300 transition hover:border-amber-400/40 hover:text-amber-200"
                                    >
                                      {copied ? (
                                        <>
                                          <Check className="h-3 w-3 text-emerald-300" />
                                          <span className="text-emerald-300">Đã chép</span>
                                        </>
                                      ) : (
                                        <>
                                          <Copy className="h-3 w-3" />
                                          <span>LaTeX</span>
                                        </>
                                      )}
                                    </button>
                                  </div>

                                  <div className="overflow-x-auto rounded-2xl border border-white/[0.06] bg-[#03050d] px-3 py-4 text-center text-white shadow-inner">
                                    <KatexFormula latex={fc.latex} displayMode />
                                  </div>
                                </div>

                                {fc.note && (
                                  <p className="relative z-10 mt-3 border-t border-white/[0.08] pt-2.5 text-xs leading-relaxed text-slate-300">
                                    <RichPhysicsText text={fc.note} />
                                  </p>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Section B: Detailed Topic Formulas */}
                  {filteredTopicFormulas.length > 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h2 className="flex items-center gap-2 text-lg font-extrabold text-white">
                          <Layers className="h-5 w-5 text-sky-300" />
                          <span>Hệ thống Công thức Chi tiết theo Bài</span>
                        </h2>
                        <span className="font-mono text-xs text-slate-400">
                          {filteredTopicFormulas.length} mục
                        </span>
                      </div>

                      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        {filteredTopicFormulas.map((f) => {
                          const copyId = `tf-${f.id}`;
                          const copied = copiedKey === copyId;
                          return (
                            <div
                              key={f.id}
                              onPointerMove={handleCardPointerMove}
                              className="group relative flex flex-col justify-between space-y-3.5 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#070b1a]/90 p-5 transition hover:border-sky-400/40"
                            >
                              <div
                                aria-hidden="true"
                                className="cosmic-topic-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                              />
                              <div className="relative z-10 space-y-3">
                                <div className="flex items-start justify-between gap-2">
                                  <div>
                                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-sky-300">
                                      {f.topic_code} · {f.topic_title}
                                    </span>
                                    <h3 className="mt-0.5 text-base font-extrabold text-white">
                                      {f.name}
                                    </h3>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleCopyLatex(copyId, f.latex_expression || f.plain_expression)
                                    }
                                    className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-white/[0.06] bg-white/[0.05] px-2.5 py-1 font-mono text-[10px] font-semibold text-slate-300 transition hover:border-sky-400/40 hover:text-sky-200"
                                  >
                                    {copied ? (
                                      <>
                                        <Check className="h-3 w-3 text-emerald-300" />
                                        <span className="text-emerald-300">Đã chép</span>
                                      </>
                                    ) : (
                                      <>
                                        <Copy className="h-3 w-3" />
                                        <span>LaTeX</span>
                                      </>
                                    )}
                                  </button>
                                </div>

                                <div className="overflow-x-auto rounded-2xl border border-white/[0.06] bg-[#03050d] px-4 py-3.5 text-center text-white">
                                  <KatexFormula
                                    latex={f.latex_expression || f.plain_expression}
                                    displayMode
                                  />
                                </div>

                                {f.variables && f.variables.length > 0 && (
                                  <div className="flex flex-col gap-2">
                                    {f.variables.map((v, vIdx) => (
                                      <div
                                        key={`${v.symbol}-${vIdx}`}
                                        className="flex items-start justify-between gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3.5 py-2.5 text-xs"
                                      >
                                        <div className="flex min-w-0 flex-1 items-start gap-2.5">
                                          <span className="inline-flex min-w-[3.25rem] shrink-0 items-center justify-center rounded-lg border border-amber-400/25 bg-amber-500/10 px-2 py-1 font-bold text-amber-300">
                                            <KatexFormula latex={v.symbol} />
                                          </span>
                                          <span className="min-w-0 flex-1 py-0.5 text-xs leading-relaxed text-slate-200 sm:text-[13px]">
                                            <RichPhysicsText text={v.name} />
                                          </span>
                                        </div>
                                        <span className="shrink-0 rounded-lg border border-emerald-400/25 bg-emerald-500/10 px-2 py-1 font-mono text-[11px] font-semibold text-emerald-300">
                                          {v.unit}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>

                              {f.usage_note && (
                                <div className="relative z-10 rounded-xl border border-amber-400/20 bg-amber-500/[0.06] px-3 py-2 text-xs text-amber-100/90">
                                  <span className="font-bold text-amber-300">Áp dụng: </span>
                                  <RichPhysicsText text={f.usage_note} />
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Section C: SI Quantities Bento Matrix (Modern Card Rows) */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="flex items-center gap-2 text-lg font-extrabold text-white">
                        <Ruler className="h-5 w-5 text-emerald-300" />
                        <span>Ma trận Đại lượng Vật lý &amp; Dụng cụ đo (SI)</span>
                      </h2>
                      <span className="font-mono text-xs text-slate-400">
                        {filteredQuantities.length} đại lượng
                      </span>
                    </div>

                    {filteredQuantities.length === 0 ? (
                      <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center text-sm text-slate-400">
                        Không tìm thấy đại lượng phù hợp với bộ lọc hiện tại.
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        {filteredQuantities.map((q) => (
                          <div
                            key={q.id}
                            className="flex items-start justify-between gap-3.5 rounded-2xl border border-white/[0.06] bg-[#070b1a]/90 p-4 transition hover:border-emerald-400/35"
                          >
                            <div className="flex min-w-0 items-start gap-3">
                              <div className="flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-xl border border-amber-400/35 bg-amber-500/10 px-2.5 py-1.5 font-bold text-amber-200">
                                <KatexFormula latex={q.symbol} />
                              </div>
                              <div className="min-w-0 space-y-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="font-mono text-[10px] font-bold text-slate-400">
                                    {q.topic_code}
                                  </span>
                                  <span className="text-sm font-extrabold text-white">
                                    {q.name}
                                  </span>
                                </div>
                                {q.description && (
                                  <p className="text-xs leading-relaxed text-slate-300">
                                    <RichPhysicsText text={q.description} />
                                  </p>
                                )}
                                <div className="flex flex-wrap items-center gap-2 pt-0.5 text-[11px]">
                                  <span className="rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 font-mono font-bold text-emerald-300">
                                    SI: {q.si_unit}
                                  </span>
                                  {q.other_units && (
                                    <span className="text-slate-400">Khác: {q.other_units}</span>
                                  )}
                                  <span className="text-sky-300">
                                    Đo bằng: {q.measuring_device || 'Công thức gián tiếp'}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ============================================================
                  MODE 3: EXAM COCKPIT (PRE-LAUNCH / STANDARD 2025 / CAT IRT)
              ============================================================ */}
              {activeMode === 'exam' && (
                <div>
                  {examQuestions.length === 0 ? (
                    <div className="rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-10 text-center text-sm text-slate-400">
                      Chương này chưa có ngân hàng câu hỏi khảo thí.
                    </div>
                  ) : !examStarted && !catStarted ? (
                    /* --------------------------------------------------
                       3A. PRE-LAUNCH CONFIGURATION DECK
                    -------------------------------------------------- */
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
                      {/* Left 8 Cols: 3-Mode Selector + Options */}
                      <div className="space-y-5 rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-6 sm:p-7 lg:col-span-8">
                        <div className="space-y-1.5">
                          <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-300">
                            CẤU HÌNH PHÒNG KHẢO THÍ VẬT LÝ
                          </div>
                          <h2 className="text-xl font-extrabold text-white sm:text-2xl">
                            Chọn Phương thức Đánh giá Năng lực
                          </h2>
                          <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
                            Toàn bộ điểm thi và lịch sử bài làm được lưu đồng bộ vào CSDL của chương{' '}
                            <span className="font-mono text-amber-300">{chapter.code}</span>.
                          </p>
                        </div>

                        {/* 3 Format Cards */}
                        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-3">
                          <button
                            type="button"
                            onClick={() => setExamFormat('format2025')}
                            className={`flex flex-col justify-between gap-3 rounded-2xl border p-4 text-left transition ${
                              examFormat === 'format2025'
                                ? 'border-amber-400/60 bg-amber-500/15 shadow-[0_0_24px_rgba(245,158,11,0.16)]'
                                : 'border-white/[0.06] bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.05]'
                            }`}
                          >
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="rounded-lg border border-amber-400/35 bg-amber-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-200">
                                  CHUẨN 2025
                                </span>
                                <Award className="h-4 w-4 text-amber-300" />
                              </div>
                              <div className="text-sm font-extrabold text-white">
                                Đề Cấu trúc 3 Phần
                              </div>
                              <p className="text-xs leading-relaxed text-slate-300">
                                Gồm Phần I (ABCD), Phần II (Đúng/Sai 4 ý a-d) và Phần III (Điền số).
                              </p>
                            </div>
                            <div className="font-mono text-[11px] text-amber-200">
                              {format2025Preview.filter((q) => q.question_type === 'multiple_choice').length}{' '}
                              P.I ·{' '}
                              {format2025Preview.filter((q) => q.question_type === 'true_false').length}{' '}
                              P.II ·{' '}
                              {format2025Preview.filter((q) => q.question_type === 'short_answer').length}{' '}
                              P.III
                            </div>
                          </button>

                          <button
                            type="button"
                            onClick={() => setExamFormat('adaptive_cat')}
                            className={`flex flex-col justify-between gap-3 rounded-2xl border p-4 text-left transition ${
                              examFormat === 'adaptive_cat'
                                ? 'border-sky-400/60 bg-sky-500/15 shadow-[0_0_24px_rgba(56,189,248,0.16)]'
                                : 'border-white/[0.06] bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.05]'
                            }`}
                          >
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="rounded-lg border border-sky-400/35 bg-sky-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-sky-200">
                                  IRT 3PL · CAT
                                </span>
                                <Activity className="h-4 w-4 text-sky-300" />
                              </div>
                              <div className="text-sm font-extrabold text-white">
                                Khảo thí Thích ứng
                              </div>
                              <p className="text-xs leading-relaxed text-slate-300">
                                Thuật toán Fisher &amp; Bayesian EAP tự động chỉnh độ khó theo từng câu trả lời.
                              </p>
                            </div>
                            <div className="font-mono text-[11px] text-sky-200">
                              Đo chính xác năng lực θ ∈ [-3, +3]
                            </div>
                          </button>

                          <button
                            type="button"
                            onClick={() => setExamFormat('standard')}
                            className={`flex flex-col justify-between gap-3 rounded-2xl border p-4 text-left transition ${
                              examFormat === 'standard'
                                ? 'border-emerald-400/60 bg-emerald-500/15 shadow-[0_0_24px_rgba(52,211,153,0.15)]'
                                : 'border-white/[0.06] bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.05]'
                            }`}
                          >
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="rounded-lg border border-emerald-400/35 bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-200">
                                  TỰ CHỌN
                                </span>
                                <Shuffle className="h-4 w-4 text-emerald-300" />
                              </div>
                              <div className="text-sm font-extrabold text-white">
                                Luyện tập Trắc nghiệm
                              </div>
                              <p className="text-xs leading-relaxed text-slate-300">
                                Lọc mức độ Cơ bản / Vận dụng cao, đảo thứ tự câu hỏi và đảo đáp án A–D.
                              </p>
                            </div>
                            <div className="font-mono text-[11px] text-emerald-200">
                              {basicCount} cơ bản · {advancedCount} nâng cao
                            </div>
                          </button>
                        </div>

                        {/* Format Specific Controls */}
                        {examFormat === 'standard' && (
                          <div className="space-y-3 rounded-2xl border border-white/[0.06] bg-[#040713]/85 p-4">
                            <div className="text-xs font-bold text-slate-200">
                              Tùy chỉnh bộ lọc &amp; xáo trộn đề
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {(
                                [
                                  { id: 'all', label: `Tất cả (${examQuestions.length} câu)` },
                                  { id: 'basic', label: `Cơ bản (${basicCount} câu)` },
                                  { id: 'advanced', label: `Vận dụng / VDC (${advancedCount} câu)` },
                                ] as const
                              ).map((f) => (
                                <button
                                  key={f.id}
                                  type="button"
                                  onClick={() => setDiffFilter(f.id)}
                                  className={`rounded-xl border px-3 py-1.5 text-xs font-bold transition ${
                                    diffFilter === f.id
                                      ? 'border-emerald-400/50 bg-emerald-500/15 text-emerald-200'
                                      : 'border-white/[0.06] bg-white/[0.03] text-slate-300 hover:text-white'
                                  }`}
                                >
                                  {f.label}
                                </button>
                              ))}
                            </div>
                            <div className="flex flex-wrap gap-4 pt-1 text-xs text-slate-300">
                              <label className="flex cursor-pointer items-center gap-2">
                                <input
                                  type="checkbox"
                                  checked={shuffleQ}
                                  onChange={(e) => setShuffleQ(e.target.checked)}
                                  className="h-4 w-4 rounded border-white/20 bg-slate-900 text-amber-400"
                                />
                                <span>Đảo thứ tự câu hỏi</span>
                              </label>
                              <label className="flex cursor-pointer items-center gap-2">
                                <input
                                  type="checkbox"
                                  checked={shuffleOpt}
                                  onChange={(e) => setShuffleOpt(e.target.checked)}
                                  className="h-4 w-4 rounded border-white/20 bg-slate-900 text-amber-400"
                                />
                                <span>Đảo phương án A–D</span>
                              </label>
                            </div>
                          </div>
                        )}

                        {examFormat === 'adaptive_cat' && (
                          <div className="space-y-3 rounded-2xl border border-white/[0.06] bg-[#040713]/85 p-4">
                            <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                              <span>Số câu hỏi của phiên CAT</span>
                              <span className="font-mono text-sky-300">
                                {Math.min(catLengthSetting, calibratedPool.length)} /{' '}
                                {calibratedPool.length} câu khả dụng
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {[6, 8, 10, 12]
                                .filter((len) => len <= calibratedPool.length || len === 6)
                                .map((len) => {
                                  const actual = Math.min(len, calibratedPool.length);
                                  return (
                                    <button
                                      key={len}
                                      type="button"
                                      onClick={() => setCatLengthSetting(actual)}
                                      className={`rounded-xl border px-3.5 py-1.5 font-mono text-xs font-bold transition ${
                                        catLengthSetting === actual
                                          ? 'border-sky-400/50 bg-sky-500/20 text-sky-200'
                                          : 'border-white/[0.06] bg-white/[0.03] text-slate-300 hover:text-white'
                                      }`}
                                    >
                                      {actual} câu
                                    </button>
                                  );
                                })}
                            </div>
                          </div>
                        )}

                        {examFormat !== 'adaptive_cat' && (
                          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/[0.06] bg-[#040713]/85 p-4">
                            <span className="text-xs font-bold text-slate-200">
                              Chế độ hiển thị bài làm
                            </span>
                            <div className="flex items-center gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.03] p-1">
                              <button
                                type="button"
                                onClick={() => setViewMode('single')}
                                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                                  viewMode === 'single'
                                    ? 'bg-amber-400/20 text-amber-200'
                                    : 'text-slate-400 hover:text-white'
                                }`}
                              >
                                <Maximize2 className="h-3.5 w-3.5" />
                                Từng câu tập trung
                              </button>
                              <button
                                type="button"
                                onClick={() => setViewMode('list')}
                                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                                  viewMode === 'list'
                                    ? 'bg-amber-400/20 text-amber-200'
                                    : 'text-slate-400 hover:text-white'
                                }`}
                              >
                                <List className="h-3.5 w-3.5" />
                                Danh sách toàn đề
                              </button>
                            </div>
                          </div>
                        )}

                        <button
                          type="button"
                          onClick={handleLaunchExam}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-[0_0_28px_rgba(245,158,11,0.32)] transition hover:brightness-110 active:scale-[0.99]"
                        >
                          <Play className="h-4 w-4 fill-slate-950" />
                          <span>
                            Bắt đầu{' '}
                            {examFormat === 'format2025'
                              ? 'Đề thi Chuẩn 2025'
                              : examFormat === 'adaptive_cat'
                                ? 'Phiên Khảo thí Thích ứng CAT'
                                : 'Bài luyện tập Chương'}
                          </span>
                        </button>
                      </div>

                      {/* Right 4 Cols: Recent Summary Sidebar */}
                      <aside className="space-y-4 rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-5 lg:col-span-4">
                        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                          <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-300">
                            THÀNH TÍCH GẦN ĐÂY
                          </span>
                          <button
                            type="button"
                            onClick={() => setActiveMode('history')}
                            className="text-xs font-bold text-amber-300 hover:underline"
                          >
                            Xem tất cả
                          </button>
                        </div>

                        {quizAttempts.length === 0 && catAttempts.length === 0 ? (
                          <p className="text-xs leading-relaxed text-slate-400">
                            Chưa có lượt làm bài nào cho chương {chapter.code}. Hãy bắt đầu bài thi
                            đầu tiên để hệ thống ghi nhận năng lực của bạn.
                          </p>
                        ) : (
                          <div className="space-y-2.5">
                            {quizAttempts.slice(0, 3).map((att) => (
                              <div
                                key={att.id}
                                className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.03] px-3.5 py-2.5"
                              >
                                <div>
                                  <div className="font-mono text-xs font-bold text-white">
                                    {att.score}/{att.total_questions} điểm thô
                                  </div>
                                  <div className="text-[11px] text-slate-400">
                                    {formatDuration(att.time_spent_sec)} ·{' '}
                                    {formatViDate(att.created_at)}
                                  </div>
                                </div>
                                <span className="rounded-lg border border-amber-400/35 bg-amber-500/15 px-2 py-0.5 font-mono text-xs font-bold text-amber-200">
                                  {att.total_questions > 0
                                    ? `${Math.round((att.score / att.total_questions) * 100)}%`
                                    : '0%'}
                                </span>
                              </div>
                            ))}

                            {catAttempts.slice(0, 2).map((catRow) => (
                              <div
                                key={`cat-${catRow.id}`}
                                className="flex items-center justify-between rounded-2xl border border-sky-400/25 bg-sky-500/[0.06] px-3.5 py-2.5"
                              >
                                <div>
                                  <div className="font-mono text-xs font-bold text-sky-200">
                                    CAT θ = {catRow.final_theta >= 0 ? '+' : ''}
                                    {catRow.final_theta.toFixed(2)} ({catRow.ability_tier_label})
                                  </div>
                                  <div className="text-[11px] text-slate-400">
                                    {catRow.correct_count}/{catRow.total_questions} câu đúng
                                  </div>
                                </div>
                                <span className="font-mono text-xs font-extrabold text-sky-300">
                                  {catRow.predicted_score_10}/10
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </aside>
                    </div>
                  ) : examStarted ? (
                    /* --------------------------------------------------
                       3B. STANDARD / 2025 ACTIVE EXAM OR RESULT COCKPIT
                    -------------------------------------------------- */
                    <div className="space-y-6">
                      {/* Post-Submit Summary Banner */}
                      {examSubmitted && examResult && (
                        <div className="rounded-3xl border border-amber-400/35 bg-gradient-to-br from-[#0a1026] via-[#090d20] to-[#130f22] p-6 shadow-2xl sm:p-7">
                          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
                            <div className="flex items-center gap-5 lg:col-span-5">
                              <TelemetryRing
                                percentage={Math.min(100, examResult.scaledScore10 * 10)}
                                primaryText={`${examResult.scaledScore10}`}
                                subText="THANG 10"
                                accentHex="#34d399"
                                size={108}
                              />
                              <div className="space-y-1">
                                <span className="rounded-full border border-emerald-400/35 bg-emerald-500/15 px-2.5 py-0.5 font-mono text-[11px] font-bold text-emerald-200">
                                  ĐÃ CHẤM &amp; LƯU HỒ SƠ
                                </span>
                                <h3 className="text-xl font-extrabold text-white">
                                  {examResult.totalScore}/{examResult.maxScore} điểm cấu trúc
                                </h3>
                                <p className="font-mono text-xs text-slate-300">
                                  Thời gian hoàn thành: {formatDuration(secondsElapsed)}
                                </p>
                              </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2.5 lg:col-span-5">
                              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.04] p-3 text-center">
                                <div className="font-mono text-[10px] text-slate-400">
                                  PHẦN I (ABCD)
                                </div>
                                <div className="mt-1 font-mono text-base font-extrabold text-amber-300">
                                  {examResult.part1Score}/{examResult.part1Max}
                                </div>
                              </div>
                              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.04] p-3 text-center">
                                <div className="font-mono text-[10px] text-slate-400">
                                  PHẦN II (Đ/S)
                                </div>
                                <div className="mt-1 font-mono text-base font-extrabold text-sky-300">
                                  {examResult.part2Score}/{examResult.part2Max}
                                </div>
                              </div>
                              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.04] p-3 text-center">
                                <div className="font-mono text-[10px] text-slate-400">
                                  PHẦN III (ĐIỀN)
                                </div>
                                <div className="mt-1 font-mono text-base font-extrabold text-emerald-300">
                                  {examResult.part3Score}/{examResult.part3Max}
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col gap-2 lg:col-span-2">
                              <button
                                type="button"
                                onClick={handleExitExamToDeck}
                                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-amber-400 px-3.5 py-2.5 text-xs font-extrabold text-slate-950 transition hover:brightness-110"
                              >
                                <RotateCcw className="h-3.5 w-3.5" />
                                Thi đề mới
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Active 12-Col Split Cockpit */}
                      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
                        {/* Left 8 Cols: Question Stage */}
                        <div className="space-y-4 lg:col-span-8">
                          {viewMode === 'single' && activeQuestion ? (
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={activeQuestion.id}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.18 }}
                              >
                                <ExamQuestionCard
                                  question={activeQuestion}
                                  index={currentIdx}
                                  total={activeQuestions.length}
                                  userAnswer={answers[activeQuestion.id]}
                                  submitted={examSubmitted}
                                  questionScore={examResult?.questionScores[activeQuestion.id]}
                                  onSelectOption={(optIdx) =>
                                    !examSubmitted &&
                                    setAnswers((prev) => ({
                                      ...prev,
                                      [activeQuestion.id]: optIdx,
                                    }))
                                  }
                                  onToggleTrueFalse={(stmtId, val) =>
                                    !examSubmitted &&
                                    setAnswers((prev) => ({
                                      ...prev,
                                      [activeQuestion.id]: {
                                        ...((prev[activeQuestion.id] as Record<string, boolean>) ||
                                          {}),
                                        [stmtId]: val,
                                      },
                                    }))
                                  }
                                  onChangeShortAnswer={(val) =>
                                    !examSubmitted &&
                                    setAnswers((prev) => ({
                                      ...prev,
                                      [activeQuestion.id]: val,
                                    }))
                                  }
                                />
                              </motion.div>
                            </AnimatePresence>
                          ) : (
                            <div className="space-y-4">
                              {activeQuestions.map((q, qIdx) => (
                                <ExamQuestionCard
                                  key={q.id}
                                  question={q}
                                  index={qIdx}
                                  total={activeQuestions.length}
                                  userAnswer={answers[q.id]}
                                  submitted={examSubmitted}
                                  questionScore={examResult?.questionScores[q.id]}
                                  onSelectOption={(optIdx) =>
                                    !examSubmitted &&
                                    setAnswers((prev) => ({ ...prev, [q.id]: optIdx }))
                                  }
                                  onToggleTrueFalse={(stmtId, val) =>
                                    !examSubmitted &&
                                    setAnswers((prev) => ({
                                      ...prev,
                                      [q.id]: {
                                        ...((prev[q.id] as Record<string, boolean>) || {}),
                                        [stmtId]: val,
                                      },
                                    }))
                                  }
                                  onChangeShortAnswer={(val) =>
                                    !examSubmitted &&
                                    setAnswers((prev) => ({ ...prev, [q.id]: val }))
                                  }
                                />
                              ))}
                            </div>
                          )}

                          {/* Bottom Navigation in Single View */}
                          {viewMode === 'single' && (
                            <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/[0.06] bg-[#070b1a]/90 p-3.5">
                              <button
                                type="button"
                                disabled={currentIdx === 0}
                                onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
                                className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.04] px-3.5 py-2 text-xs font-bold text-slate-200 transition hover:bg-white/10 disabled:opacity-40"
                              >
                                <ArrowLeft className="h-3.5 w-3.5" />
                                Câu trước
                              </button>
                              <span className="font-mono text-xs text-slate-400">
                                Câu {currentIdx + 1} / {activeQuestions.length}
                              </span>
                              <button
                                type="button"
                                disabled={currentIdx >= activeQuestions.length - 1}
                                onClick={() =>
                                  setCurrentIdx((i) =>
                                    Math.min(activeQuestions.length - 1, i + 1)
                                  )
                                }
                                className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.04] px-3.5 py-2 text-xs font-bold text-slate-200 transition hover:bg-white/10 disabled:opacity-40"
                              >
                                Câu tiếp
                                <ArrowRight className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Right 4 Cols (Sticky): Telemetry + Palette + Submit */}
                        <aside className="space-y-4 rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-5 lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
                          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                            <div className="flex items-center gap-2 font-mono text-sm font-extrabold text-white">
                              <Clock className="h-4 w-4 text-amber-300" />
                              <span>{formatDuration(secondsElapsed)}</span>
                            </div>
                            <span className="font-mono text-xs text-sky-300">
                              {answeredCount}/{activeQuestions.length} đã làm
                            </span>
                          </div>

                          {/* 60fps Compositor ScaleX Progress Bar */}
                          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                            <div
                              className="h-full w-full origin-left rounded-full bg-gradient-to-r from-amber-400 to-emerald-400 transition-transform duration-300"
                              style={{
                                transform: `scaleX(${
                                  activeQuestions.length > 0
                                    ? answeredCount / activeQuestions.length
                                    : 0
                                })`,
                              }}
                            />
                          </div>

                          {/* View mode switch */}
                          <div className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#040713] p-1 text-[11px] font-bold">
                            <button
                              type="button"
                              onClick={() => setViewMode('single')}
                              className={`flex-1 rounded-lg py-1.5 transition ${
                                viewMode === 'single'
                                  ? 'bg-amber-400/20 text-amber-200'
                                  : 'text-slate-400 hover:text-white'
                              }`}
                            >
                              Từng câu
                            </button>
                            <button
                              type="button"
                              onClick={() => setViewMode('list')}
                              className={`flex-1 rounded-lg py-1.5 transition ${
                                viewMode === 'list'
                                  ? 'bg-amber-400/20 text-amber-200'
                                  : 'text-slate-400 hover:text-white'
                              }`}
                            >
                              Toàn đề
                            </button>
                          </div>

                          {/* Question Palette */}
                          <div className="space-y-2">
                            <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                              BẢNG CÂU HỎI
                            </div>
                            <div className="grid grid-cols-5 gap-1.5 sm:grid-cols-6 lg:grid-cols-5">
                              {activeQuestions.map((q, idx) => {
                                const ans = answers[q.id];
                                const hasAns =
                                  q.question_type === 'true_false'
                                    ? ans && Object.keys(ans).length > 0
                                    : q.question_type === 'short_answer'
                                      ? ans !== undefined && String(ans).trim().length > 0
                                      : typeof ans === 'number' && ans >= 0;
                                const qScore = examResult?.questionScores[q.id];
                                const isCurrent = viewMode === 'single' && currentIdx === idx;

                                let pillCls =
                                  'border-white/[0.06] bg-white/[0.03] text-slate-400 hover:border-white/30';
                                if (examSubmitted) {
                                  pillCls =
                                    qScore && qScore >= 1
                                      ? 'border-emerald-400/50 bg-emerald-500/20 text-emerald-200'
                                      : qScore && qScore > 0
                                        ? 'border-amber-400/50 bg-amber-500/20 text-amber-200'
                                        : 'border-rose-400/50 bg-rose-500/20 text-rose-200';
                                } else if (isCurrent) {
                                  pillCls =
                                    'border-amber-400 bg-amber-400/25 text-white ring-2 ring-amber-400/35';
                                } else if (hasAns) {
                                  pillCls = 'border-sky-400/45 bg-sky-500/20 text-sky-200';
                                }

                                return (
                                  <button
                                    key={q.id}
                                    type="button"
                                    onClick={() => {
                                      setCurrentIdx(idx);
                                      if (viewMode === 'list') {
                                        document
                                          .getElementById(`exam-q-${q.id}`)
                                          ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                      }
                                    }}
                                    className={`h-8 rounded-lg border font-mono text-xs font-bold transition ${pillCls}`}
                                  >
                                    {idx + 1}
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {submitWarning && (
                            <div className="space-y-2 rounded-2xl border border-amber-400/35 bg-amber-500/10 p-3 text-xs text-amber-100">
                              <p>{submitWarning}</p>
                              <button
                                type="button"
                                onClick={() => handleSubmitExam(true)}
                                className="w-full rounded-xl bg-amber-400 py-2 text-xs font-extrabold text-slate-950"
                              >
                                Xác nhận nộp ngay
                              </button>
                            </div>
                          )}

                          {!examSubmitted ? (
                            <div className="space-y-2 pt-1">
                              <button
                                type="button"
                                onClick={() => handleSubmitExam(false)}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 py-3 text-xs font-extrabold text-slate-950 shadow-[0_0_24px_rgba(245,158,11,0.3)] transition hover:brightness-110"
                              >
                                <ShieldCheck className="h-4 w-4" />
                                Nộp bài &amp; Chấm điểm
                              </button>
                              <button
                                type="button"
                                onClick={handleExitExamToDeck}
                                className="w-full rounded-xl border border-white/[0.06] bg-white/[0.04] py-2 text-xs font-semibold text-slate-300 transition hover:bg-white/10"
                              >
                                Thoát / Đổi cấu hình
                              </button>
                            </div>
                          ) : (
                            <button
                              type="button"
                              onClick={handleExitExamToDeck}
                              className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.06] py-2.5 text-xs font-bold text-white transition hover:bg-white/10"
                            >
                              <RotateCcw className="h-3.5 w-3.5" />
                              Quay lại bảng chọn đề
                            </button>
                          )}
                        </aside>
                      </div>
                    </div>
                  ) : (
                    /* --------------------------------------------------
                       3C. ADAPTIVE IRT 3PL (CAT) COCKPIT & REPORT
                    -------------------------------------------------- */
                    <div className="space-y-6">
                      {catFinished ? (
                        <div className="space-y-6 rounded-3xl border border-sky-400/35 bg-[#070b1a]/90 p-6 sm:p-8">
                          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-5">
                            <div className="space-y-1">
                              <span className="rounded-full border border-sky-400/35 bg-sky-500/15 px-3 py-1 font-mono text-[11px] font-bold text-sky-200">
                                BÁO CÁO KHẢO THÍ THÍCH ỨNG IRT 3PL
                              </span>
                              <h3 className="pt-1 text-2xl font-extrabold text-white">
                                {getAbilityTier(catTheta).label}
                              </h3>
                              <p className="text-xs text-slate-300 sm:text-sm">
                                {getAbilityTier(catTheta).description}
                              </p>
                            </div>

                            <div className="flex items-center gap-3">
                              <TelemetryRing
                                percentage={Math.min(100, thetaToScore10(catTheta) * 10)}
                                primaryText={`${thetaToScore10(catTheta)}`}
                                subText="ĐIỂM DỰ BÁO"
                                accentHex="#38bdf8"
                                size={104}
                              />
                              <button
                                type="button"
                                onClick={handleExitExamToDeck}
                                className="inline-flex items-center gap-1.5 rounded-xl border border-amber-400/40 bg-amber-500/15 px-4 py-2.5 text-xs font-extrabold text-amber-200 transition hover:bg-amber-500/25"
                              >
                                <RotateCcw className="h-3.5 w-3.5" />
                                Phiên mới
                              </button>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3.5">
                              <div className="font-mono text-[10px] text-slate-400">SỐ CÂU ĐÚNG</div>
                              <div className="mt-1 font-mono text-xl font-extrabold text-emerald-300">
                                {catHistory.filter((h) => h.isCorrect).length}/{catHistory.length}
                              </div>
                            </div>
                            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3.5">
                              <div className="font-mono text-[10px] text-slate-400">CHỈ SỐ θ CUỐI</div>
                              <div className="mt-1 font-mono text-xl font-extrabold text-amber-300">
                                {catTheta >= 0 ? `+${catTheta}` : catTheta}
                              </div>
                            </div>
                            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3.5">
                              <div className="font-mono text-[10px] text-slate-400">ĐỘ TIN CẬY</div>
                              <div className="mt-1 font-mono text-xl font-extrabold text-sky-300">
                                {catConfidence}%
                              </div>
                            </div>
                            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3.5">
                              <div className="font-mono text-[10px] text-slate-400">THỜI GIAN</div>
                              <div className="mt-1 font-mono text-xl font-extrabold text-white">
                                {formatDuration(catSeconds)}
                              </div>
                            </div>
                          </div>

                          <ThetaTrajectorySvg
                            history={catHistory}
                            currentTheta={catTheta}
                            maxItems={catMaxItems}
                          />
                        </div>
                      ) : catCurrentQuestion ? (
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
                          {/* Left 8 Cols: Active Adaptive Question */}
                          <div className="space-y-4 rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-6 lg:col-span-8">
                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-3.5">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="rounded-lg border border-sky-400/35 bg-sky-500/15 px-2.5 py-1 font-mono text-xs font-extrabold text-sky-200">
                                  CAT #{catHistory.length + 1} / {catMaxItems}
                                </span>
                                <span
                                  className={`rounded-lg border px-2.5 py-1 text-[11px] font-bold ${
                                    DIFF_META[catCurrentQuestion.difficulty].badgeCls
                                  }`}
                                >
                                  {DIFF_META[catCurrentQuestion.difficulty].label}
                                </span>
                              </div>
                              <span className="font-mono text-[11px] text-slate-400">
                                b = {catCurrentQuestion.irt.b >= 0 ? '+' : ''}
                                {catCurrentQuestion.irt.b} · a = {catCurrentQuestion.irt.a}
                              </span>
                            </div>

                            {/* Pedagogical Selection Reason */}
                            <div className="rounded-2xl border border-sky-400/25 bg-sky-500/[0.07] px-4 py-2.5 text-xs leading-relaxed text-sky-100">
                              <span className="font-bold text-sky-300">Lý do bốc câu: </span>
                              {catSelectionReason}
                            </div>

                            <div className="text-sm font-medium leading-relaxed text-white sm:text-base">
                              <RichPhysicsText text={catCurrentQuestion.question_text} />
                            </div>

                            {/* Options A-D */}
                            <div className="space-y-2.5">
                              {catCurrentQuestion.options.map((opt, idx) => {
                                const letter = String.fromCharCode(65 + idx);
                                const isChosen = catSelectedOption === idx;
                                const isRight = catCurrentQuestion.correct_index === idx;

                                let optCls =
                                  'border-white/[0.06] bg-white/[0.03] text-slate-200 hover:border-sky-400/45 hover:bg-white/[0.06]';
                                if (catItemLocked) {
                                  if (isRight) {
                                    optCls =
                                      'border-emerald-400/60 bg-emerald-500/15 text-emerald-100';
                                  } else if (isChosen && !isRight) {
                                    optCls = 'border-rose-400/60 bg-rose-500/15 text-rose-100';
                                  } else {
                                    optCls = 'border-white/[0.06] bg-white/[0.02] text-slate-500';
                                  }
                                } else if (isChosen) {
                                  optCls =
                                    'border-amber-400/60 bg-amber-500/15 text-white shadow-[0_0_20px_rgba(245,158,11,0.14)]';
                                }

                                return (
                                  <button
                                    key={idx}
                                    type="button"
                                    disabled={catItemLocked}
                                    onClick={() => setCatSelectedOption(idx)}
                                    className={`flex w-full items-start gap-3 rounded-2xl border p-3.5 text-left text-xs transition sm:text-sm ${optCls}`}
                                  >
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] font-mono text-xs font-extrabold">
                                      {letter}
                                    </span>
                                    <div className="min-w-0 flex-1 pt-0.5 leading-relaxed">
                                      <RichPhysicsText text={opt} />
                                    </div>
                                  </button>
                                );
                              })}
                            </div>

                            {catItemLocked && catLatestStep && (
                              <motion.div
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`space-y-2 rounded-2xl border p-4 text-xs leading-relaxed sm:text-sm ${
                                  catLatestStep.isCorrect
                                    ? 'border-emerald-400/35 bg-emerald-500/10 text-emerald-100'
                                    : 'border-rose-400/35 bg-rose-500/10 text-rose-100'
                                }`}
                              >
                                <div className="flex items-center gap-2 font-bold">
                                  {catLatestStep.thetaDelta >= 0 ? (
                                    <TrendingUp className="h-4 w-4 text-emerald-300" />
                                  ) : (
                                    <TrendingDown className="h-4 w-4 text-rose-300" />
                                  )}
                                  <span>{catLatestStep.adaptationReason}</span>
                                </div>
                                {catCurrentQuestion.explanation && (
                                  <div className="border-t border-white/[0.06] pt-2 text-slate-200">
                                    <span className="font-bold text-amber-300">Giải thích: </span>
                                    <RichPhysicsText text={catCurrentQuestion.explanation} />
                                  </div>
                                )}
                              </motion.div>
                            )}

                            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                              <button
                                type="button"
                                onClick={handleExitExamToDeck}
                                className="rounded-xl border border-white/[0.06] bg-white/[0.04] px-3.5 py-2.5 text-xs font-semibold text-slate-300 transition hover:bg-white/10"
                              >
                                Hủy phiên CAT
                              </button>
                              {!catItemLocked ? (
                                <button
                                  type="button"
                                  disabled={catSelectedOption === null}
                                  onClick={handleConfirmCatAnswer}
                                  className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 px-5 py-2.5 text-xs font-extrabold text-slate-950 transition hover:brightness-110 disabled:opacity-45"
                                >
                                  <CheckCircle2 className="h-4 w-4" />
                                  Xác nhận &amp; Cập nhật θ
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  onClick={handleNextCatStep}
                                  className="inline-flex items-center gap-1.5 rounded-xl bg-sky-400 px-5 py-2.5 text-xs font-extrabold text-slate-950 transition hover:brightness-110"
                                >
                                  <span>
                                    {catHistory.length >= catMaxItems
                                      ? 'Hoàn tất & Lưu Hồ sơ CAT'
                                      : 'Câu thích ứng tiếp theo'}
                                  </span>
                                  <ArrowRight className="h-4 w-4" />
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Right 4 Cols (Sticky): Real-time CAT Telemetry + SVG Chart */}
                          <aside className="space-y-4 rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-5 lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
                            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                              <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-300">
                                IRT 3PL TELEMETRY
                              </span>
                              <span className="font-mono text-xs text-slate-300">
                                {formatDuration(catSeconds)}
                              </span>
                            </div>

                            <div className="grid grid-cols-2 gap-2.5">
                              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3">
                                <div className="font-mono text-[10px] text-slate-400">DỰ BÁO /10</div>
                                <div className="mt-0.5 font-mono text-xl font-extrabold text-amber-300">
                                  {thetaToScore10(catTheta)}
                                </div>
                              </div>
                              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3">
                                <div className="font-mono text-[10px] text-slate-400">TIN CẬY · SE</div>
                                <div className="mt-0.5 font-mono text-xl font-extrabold text-sky-300">
                                  {catConfidence}%{' '}
                                  <span className="text-[11px] font-normal text-slate-400">
                                    ±{catSe}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <ThetaTrajectorySvg
                              history={catHistory}
                              currentTheta={catTheta}
                              maxItems={catMaxItems}
                            />

                            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3.5 text-xs">
                              <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                NGƯỠNG NĂNG LỰC HIỆN TẠI
                              </div>
                              <div className="mt-1 font-bold text-white">
                                {getAbilityTier(catTheta).shortLabel}
                              </div>
                            </div>
                          </aside>
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              )}

              {/* ============================================================
                  MODE 4: HISTORY & DIAGNOSTIC ARCHIVE
              ============================================================ */}
              {activeMode === 'history' && (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-extrabold text-white">
                        Hồ sơ &amp; Lịch sử Khảo thí Chương {chapter.code}
                      </h2>
                      <p className="text-xs text-slate-400 sm:text-sm">
                        Theo dõi điểm số các lần làm đề 2025 và đường cong năng lực IRT 3PL.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={refreshAttempts}
                      disabled={loadingHistory}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.05] px-3.5 py-2 text-xs font-bold text-slate-200 transition hover:border-amber-400/40"
                    >
                      <RotateCcw className={`h-3.5 w-3.5 ${loadingHistory ? 'animate-spin' : ''}`} />
                      Làm mới
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Standard / Format 2025 Attempts */}
                    <div className="space-y-3 rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-5">
                      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                        <h3 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-amber-300">
                          <FileText className="h-4 w-4" />
                          Bài thi Cấu trúc / 25 câu ({quizAttempts.length})
                        </h3>
                      </div>

                      {quizAttempts.length === 0 ? (
                        <p className="py-6 text-center text-xs text-slate-400">
                          Chưa có lịch sử nộp bài kiểm tra cho chương này.
                        </p>
                      ) : (
                        <div className="space-y-2.5">
                          {quizAttempts.map((att) => {
                            const isInspecting = inspectingQuizAttempt?.id === att.id;
                            const pct =
                              att.total_questions > 0
                                ? Math.round((att.score / att.total_questions) * 100)
                                : 0;
                            return (
                              <div
                                key={att.id}
                                className="flex items-center justify-between gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3"
                              >
                                <div className="min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="font-mono text-sm font-extrabold text-white">
                                      {att.score}/{att.total_questions}
                                    </span>
                                    <span className="rounded-md bg-amber-500/15 px-2 py-0.5 font-mono text-[11px] font-bold text-amber-200">
                                      {pct}%
                                    </span>
                                  </div>
                                  <div className="mt-0.5 text-[11px] text-slate-400">
                                    {formatDuration(att.time_spent_sec)} ·{' '}
                                    {formatViDate(att.created_at)}
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={() =>
                                    setInspectingQuizAttempt(isInspecting ? null : att)
                                  }
                                  className="inline-flex shrink-0 items-center gap-1 rounded-xl border border-white/[0.06] bg-white/[0.05] px-3 py-1.5 text-xs font-bold text-sky-200 transition hover:border-sky-400/45"
                                >
                                  <Eye className="h-3.5 w-3.5" />
                                  {isInspecting ? 'Đóng' : 'Xem lại'}
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Adaptive CAT Attempts */}
                    <div className="space-y-3 rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-5">
                      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                        <h3 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-sky-300">
                          <Activity className="h-4 w-4" />
                          Phiên Khảo thí Thích ứng CAT ({catAttempts.length})
                        </h3>
                      </div>

                      {catAttempts.length === 0 ? (
                        <p className="py-6 text-center text-xs text-slate-400">
                          Chưa có phiên khảo thí IRT 3PL nào được lưu cho chương này.
                        </p>
                      ) : (
                        <div className="space-y-2.5">
                          {catAttempts.map((row) => {
                            let parsedHistory: CatResponseStep[] = [];
                            try {
                              parsedHistory = JSON.parse(row.history_json || '[]');
                            } catch {
                              parsedHistory = [];
                            }
                            const activeInspect = inspectingCatAttempt?.row.id === row.id;

                            return (
                              <div
                                key={row.id}
                                className="flex items-center justify-between gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3"
                              >
                                <div className="min-w-0">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span className="font-mono text-sm font-extrabold text-sky-300">
                                      θ = {row.final_theta >= 0 ? '+' : ''}
                                      {row.final_theta.toFixed(2)}
                                    </span>
                                    <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 font-mono text-[11px] font-bold text-emerald-200">
                                      {row.predicted_score_10}/10 · {row.ability_tier_label}
                                    </span>
                                  </div>
                                  <div className="mt-0.5 text-[11px] text-slate-400">
                                    {row.correct_count}/{row.total_questions} câu · Tin cậy{' '}
                                    {row.confidence_pct}% · {formatViDate(row.created_at)}
                                  </div>
                                </div>

                                <div className="flex shrink-0 items-center gap-1.5">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setInspectingCatAttempt(
                                        activeInspect ? null : { row, history: parsedHistory }
                                      )
                                    }
                                    className="inline-flex items-center gap-1 rounded-xl border border-white/[0.06] bg-white/[0.05] px-2.5 py-1.5 text-xs font-bold text-sky-200 transition hover:border-sky-400/45"
                                  >
                                    <Eye className="h-3.5 w-3.5" />
                                    {activeInspect ? 'Đóng' : 'Quỹ đạo'}
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteCatAttempt(row.id)}
                                    title="Xóa bản ghi CAT"
                                    className="rounded-xl border border-white/[0.06] bg-white/[0.04] p-1.5 text-slate-400 transition hover:border-rose-400/45 hover:text-rose-300"
                                  >
                                    <Trash2 className="h-3.5 w-3.5" />
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Detailed Quiz Review Drawer */}
                  {inspectingQuizAttempt && (
                    <div className="space-y-4 rounded-3xl border border-amber-400/30 bg-[#070b1a]/90 p-6">
                      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                        <h3 className="text-base font-extrabold text-white">
                          Chi tiết bài thi #{inspectingQuizAttempt.id} ·{' '}
                          {formatViDate(inspectingQuizAttempt.created_at)}
                        </h3>
                        <button
                          type="button"
                          onClick={() => setInspectingQuizAttempt(null)}
                          className="rounded-lg border border-white/[0.06] px-3 py-1 text-xs font-bold text-slate-300 hover:bg-white/10"
                        >
                          Đóng
                        </button>
                      </div>
                      {(() => {
                        let parsedAns: Record<string, any> = {};
                        try {
                          parsedAns = JSON.parse(inspectingQuizAttempt.answers_json || '{}');
                        } catch {
                          parsedAns = {};
                        }
                        const reviewList = adaptToFormat2025(examQuestions);
                        const reviewScore = calculateExamScore(reviewList, parsedAns);
                        return (
                          <div className="space-y-3">
                            {reviewList.slice(0, 15).map((q, idx) => (
                              <ExamQuestionCard
                                key={q.id}
                                question={q}
                                index={idx}
                                total={reviewList.length}
                                userAnswer={parsedAns[q.id] ?? parsedAns[String(q.id)]}
                                submitted={true}
                                questionScore={reviewScore.questionScores[q.id]}
                                onSelectOption={() => {}}
                                onToggleTrueFalse={() => {}}
                                onChangeShortAnswer={() => {}}
                              />
                            ))}
                          </div>
                        );
                      })()}
                    </div>
                  )}

                  {/* Detailed CAT Trajectory Review Drawer */}
                  {inspectingCatAttempt && (
                    <div className="space-y-4 rounded-3xl border border-sky-400/30 bg-[#070b1a]/90 p-6">
                      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                        <h3 className="text-base font-extrabold text-white">
                          Nhật ký Quỹ đạo Năng lực · {inspectingCatAttempt.row.title}
                        </h3>
                        <button
                          type="button"
                          onClick={() => setInspectingCatAttempt(null)}
                          className="rounded-lg border border-white/[0.06] px-3 py-1 text-xs font-bold text-slate-300 hover:bg-white/10"
                        >
                          Đóng
                        </button>
                      </div>
                      <ThetaTrajectorySvg
                        history={inspectingCatAttempt.history}
                        currentTheta={inspectingCatAttempt.row.final_theta}
                        maxItems={inspectingCatAttempt.history.length}
                      />
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </MotionConfig>
  );
}

function ExamQuestionCard({
  question,
  index,
  total,
  userAnswer,
  submitted,
  questionScore,
  onSelectOption,
  onToggleTrueFalse,
  onChangeShortAnswer,
}: {
  question: QuestionItem;
  index: number;
  total: number;
  userAnswer: any;
  submitted: boolean;
  questionScore?: number;
  onSelectOption: (optIdx: number) => void;
  onToggleTrueFalse: (statementId: string, value: boolean) => void;
  onChangeShortAnswer: (val: string) => void;
}) {
  const qType = question.question_type || 'multiple_choice';
  const partBadge =
    qType === 'true_false'
      ? 'Phần II · Đúng / Sai'
      : qType === 'short_answer'
        ? 'Phần III · Trả lời ngắn'
        : 'Phần I · Trắc nghiệm 4 lựa chọn';

  const diffMeta = DIFF_META[question.difficulty] || DIFF_META.nhan_biet;

  return (
    <div
      id={`exam-q-${question.id}`}
      className="space-y-4 rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-5 sm:p-6"
    >
      {/* Question Header Metadata */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-lg border border-amber-400/35 bg-amber-500/15 px-2.5 py-1 font-mono text-xs font-extrabold text-amber-200">
            Câu {index + 1}/{total}
          </span>
          <span className="rounded-lg border border-white/[0.06] bg-white/[0.05] px-2.5 py-1 text-[11px] font-bold text-slate-200">
            {partBadge}
          </span>
          <span className={`rounded-lg border px-2.5 py-1 text-[11px] font-bold ${diffMeta.badgeCls}`}>
            {diffMeta.label}
          </span>
        </div>

        {submitted && questionScore !== undefined && (
          <span
            className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 font-mono text-xs font-bold ${
              questionScore >= 1
                ? 'bg-emerald-500/20 text-emerald-300'
                : questionScore > 0
                  ? 'bg-amber-500/20 text-amber-200'
                  : 'bg-rose-500/20 text-rose-300'
            }`}
          >
            {questionScore >= 1 ? (
              <CheckCircle2 className="h-3.5 w-3.5" />
            ) : (
              <XCircle className="h-3.5 w-3.5" />
            )}
            +{questionScore} điểm
          </span>
        )}
      </div>

      {/* Stem */}
      <div className="text-sm font-medium leading-relaxed text-white sm:text-base">
        <RichPhysicsText text={question.question_text} />
      </div>

      {/* Answer Controls by Type */}
      {qType === 'multiple_choice' && (
        <div className="grid grid-cols-1 gap-2.5">
          {question.options.map((opt, oIdx) => {
            const letter = String.fromCharCode(65 + oIdx);
            const selected = userAnswer !== undefined && Number(userAnswer) === oIdx;
            const isCorrect = question.correct_index === oIdx;

            let cls =
              'border-white/[0.06] bg-white/[0.03] text-slate-200 hover:border-sky-400/45 hover:bg-white/[0.06]';
            if (submitted) {
              if (isCorrect) {
                cls = 'border-emerald-400/60 bg-emerald-500/15 text-emerald-100';
              } else if (selected && !isCorrect) {
                cls = 'border-rose-400/60 bg-rose-500/15 text-rose-100';
              } else {
                cls = 'border-white/[0.06] bg-white/[0.02] text-slate-500';
              }
            } else if (selected) {
              cls =
                'border-amber-400/60 bg-amber-500/15 text-white shadow-[0_0_20px_rgba(245,158,11,0.14)]';
            }

            return (
              <button
                key={oIdx}
                type="button"
                disabled={submitted}
                onClick={() => onSelectOption(oIdx)}
                className={`flex w-full items-start gap-3 rounded-2xl border p-3.5 text-left text-xs transition sm:text-sm ${cls}`}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] font-mono text-xs font-extrabold">
                  {letter}
                </span>
                <div className="min-w-0 flex-1 pt-0.5 leading-relaxed">
                  <RichPhysicsText text={opt} />
                </div>
              </button>
            );
          })}
        </div>
      )}

      {qType === 'true_false' && question.tf_statements && (
        <div className="space-y-2.5">
          {question.tf_statements.map((st) => {
            const tfAns = (userAnswer as Record<string, boolean>) || {};
            const choice = tfAns[st.id];
            return (
              <div
                key={st.id}
                className="flex flex-col justify-between gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3.5 sm:flex-row sm:items-center"
              >
                <div className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-200 sm:text-sm">
                  <span className="font-mono font-extrabold uppercase text-amber-300">
                    {st.id})
                  </span>
                  <div className="min-w-0 flex-1">
                    <RichPhysicsText text={st.text} />
                    {submitted && st.explanation && (
                      <div className="mt-1 text-xs text-slate-400">
                        <RichPhysicsText text={st.explanation} />
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-1.5">
                  {([true, false] as const).map((val) => {
                    const active = choice === val;
                    const rightVal = st.is_correct === val;
                    let btnCls =
                      'border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/30';
                    if (submitted) {
                      if (rightVal) {
                        btnCls = 'border-emerald-400/60 bg-emerald-500/20 text-emerald-200';
                      } else if (active && !rightVal) {
                        btnCls = 'border-rose-400/60 bg-rose-500/20 text-rose-200';
                      }
                    } else if (active) {
                      btnCls = val
                        ? 'border-emerald-400/60 bg-emerald-500/25 text-emerald-100'
                        : 'border-rose-400/60 bg-rose-500/25 text-rose-100';
                    }

                    return (
                      <button
                        key={String(val)}
                        type="button"
                        disabled={submitted}
                        onClick={() => onToggleTrueFalse(st.id, val)}
                        className={`rounded-xl border px-3 py-1.5 text-xs font-extrabold transition ${btnCls}`}
                      >
                        {val ? 'Đúng' : 'Sai'}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
          {submitted && (
            <div className="text-right font-mono text-xs text-sky-300">
              Đúng{' '}
              {calculateTrueFalseScore(question.tf_statements, userAnswer || {}).correctCount}/4 ý
            </div>
          )}
        </div>
      )}

      {qType === 'short_answer' && (
        <div className="space-y-2.5 rounded-2xl border border-white/[0.06] bg-[#040713] p-4">
          <div className="flex flex-wrap items-center gap-3">
            <input
              type="text"
              disabled={submitted}
              value={userAnswer ?? ''}
              onChange={(e) => onChangeShortAnswer(e.target.value)}
              placeholder="Nhập giá trị số (VD: 12.5 hoặc 12,5)..."
              className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 font-mono text-sm text-white placeholder-slate-500 focus:border-amber-400/50"
            />
            {question.short_answer?.unit && (
              <span className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 font-mono text-xs font-bold text-emerald-300">
                Đơn vị: {question.short_answer.unit}
              </span>
            )}
          </div>
          {question.short_answer?.hint && !submitted && (
            <div className="text-xs text-slate-400">Gợi ý: {question.short_answer.hint}</div>
          )}
          {submitted && question.short_answer && (
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300">
                Đáp án chuẩn:{' '}
                <strong className="font-mono text-emerald-300">
                  {question.short_answer.target_value} {question.short_answer.unit || ''}
                </strong>
              </span>
              {checkShortAnswer(userAnswer, question.short_answer).isCorrect ? (
                <span className="font-bold text-emerald-300">Chính xác</span>
              ) : (
                <span className="font-bold text-rose-300">Chưa khớp đáp số</span>
              )}
            </div>
          )}
        </div>
      )}

      {/* Explanation after submit */}
      {submitted && question.explanation && (
        <div className="rounded-2xl border border-sky-400/25 bg-sky-500/[0.07] p-4 text-xs leading-relaxed text-slate-200 sm:text-sm">
          <span className="font-bold text-sky-300">Lời giải chi tiết: </span>
          <RichPhysicsText text={question.explanation} />
        </div>
      )}
    </div>
  );
}

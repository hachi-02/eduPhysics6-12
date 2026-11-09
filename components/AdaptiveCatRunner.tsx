'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { QuestionItem, DifficultyLevel } from '@/types/cms';
import { RichPhysicsText } from './KatexRenderer';
import {
  CalibratedCatQuestion,
  CatResponseStep,
  calibrateQuestionPool,
  estimateAbilityEAP,
  irtFisherInformation,
  selectNextCatQuestion,
  thetaToScore10,
  getAbilityTier,
} from '@/lib/adaptive-cat';
import {
  Target,
  TrendingUp,
  TrendingDown,
  Sparkles,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Award,
  Activity,
  ShieldCheck,
  Clock,
  GitBranch,
  Zap,
  BarChart3,
  BookOpen,
  HelpCircle,
  History,
  Eye,
  Trash2,
  Calendar,
} from 'lucide-react';

interface SavedCatAttemptRow {
  id: number;
  title: string;
  scope_type: 'grade' | 'chapter' | 'topic';
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

export interface CatAttemptReviewData {
  id?: number;
  title: string;
  history: CatResponseStep[];
  finalTheta: number;
  finalSe: number;
  confidencePct: number;
  timeSpentSec: number;
  createdAt?: string;
}

interface AdaptiveCatRunnerProps {
  title: string;
  subtitle?: string;
  scopeType?: 'topic' | 'chapter' | 'grade';
  scopeId?: number;
  questions: Array<
    QuestionItem & {
      topic_code?: string | null;
      topic_title?: string | null;
      chapter_code?: string | null;
      chapter_title?: string | null;
      grade_number?: number;
      empiricalWrongCount?: number;
    }
  >;
  targetLength?: number;
  onExitMode?: () => void;
  initialReviewData?: CatAttemptReviewData | null;
}

const DIFF_META: Record<
  DifficultyLevel,
  { label: string; badgeCls: string; dotColor: string; levelNum: number }
> = {
  nhan_biet: {
    label: 'Mức 1: Nhận biết',
    badgeCls: 'border-emerald-200 bg-emerald-50 text-emerald-800',
    dotColor: '#10b981',
    levelNum: 1,
  },
  thong_hieu: {
    label: 'Mức 2: Thông hiểu',
    badgeCls: 'border-sky-200 bg-sky-50 text-sky-800',
    dotColor: '#0284c7',
    levelNum: 2,
  },
  van_dung: {
    label: 'Mức 3: Vận dụng',
    badgeCls: 'border-amber-200 bg-amber-50 text-amber-900',
    dotColor: '#d97706',
    levelNum: 3,
  },
  van_dung_cao: {
    label: 'Mức 4: Vận dụng cao',
    badgeCls: 'border-rose-200 bg-rose-50 text-rose-800',
    dotColor: '#e11d48',
    levelNum: 4,
  },
};

export function AdaptiveCatRunner({
  title,
  subtitle,
  scopeType = 'topic',
  scopeId = 1,
  questions,
  targetLength = 10,
  onExitMode,
  initialReviewData = null,
}: AdaptiveCatRunnerProps) {
  const router = useRouter();

  // Calibrate entire question pool with IRT 3PL parameters (a, b, c)
  const calibratedPool = useMemo(() => calibrateQuestionPool(questions), [questions]);

  const maxItems = Math.min(targetLength, calibratedPool.length);

  // Adaptive session state
  const [history, setHistory] = useState<CatResponseStep[]>(
    initialReviewData ? initialReviewData.history : []
  );
  const [currentTheta, setCurrentTheta] = useState<number>(
    initialReviewData ? initialReviewData.finalTheta : 0.0
  );
  const [currentSe, setCurrentSe] = useState<number>(
    initialReviewData ? initialReviewData.finalSe : 1.15
  );
  const [confidencePct, setConfidencePct] = useState<number>(
    initialReviewData ? initialReviewData.confidencePct : 25
  );

  // Current active question & selection reason
  const initialSelection = useMemo(
    () => selectNextCatQuestion(calibratedPool, new Set<number>(), 0.0, []),
    [calibratedPool]
  );

  const [currentQuestion, setCurrentQuestion] = useState<CalibratedCatQuestion | null>(
    initialSelection.nextQuestion
  );
  const [selectionReason, setSelectionReason] = useState<string>(
    initialSelection.selectionReason
  );

  // Current item interaction state
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [itemLocked, setItemLocked] = useState<boolean>(false);
  const [latestStepResult, setLatestStepResult] = useState<CatResponseStep | null>(null);
  const [finished, setFinished] = useState<boolean>(Boolean(initialReviewData));
  const [secondsElapsed, setSecondsElapsed] = useState<number>(
    initialReviewData ? initialReviewData.timeSpentSec : 0
  );
  const [reportTitle, setReportTitle] = useState<string>(
    initialReviewData ? initialReviewData.title : title
  );
  const [savedAttempts, setSavedAttempts] = useState<SavedCatAttemptRow[]>([]);
  const [justSavedReport, setJustSavedReport] = useState<boolean>(false);

  const fetchSavedAttempts = React.useCallback(async () => {
    try {
      const res = await fetch('/api/adaptive-cat/attempts');
      if (res.ok) {
        const data = await res.json();
        setSavedAttempts(data.attempts || []);
      }
    } catch {
      // Ignore network error
    }
  }, []);

  useEffect(() => {
    fetchSavedAttempts();
  }, [fetchSavedAttempts]);

  useEffect(() => {
    if (initialReviewData) {
      setReportTitle(initialReviewData.title);
      setHistory(initialReviewData.history);
      setCurrentTheta(initialReviewData.finalTheta);
      setCurrentSe(initialReviewData.finalSe);
      setConfidencePct(initialReviewData.confidencePct);
      setSecondsElapsed(initialReviewData.timeSpentSec);
      setFinished(true);
    }
  }, [initialReviewData]);

  // Reset only when scope or targetLength explicitly changes (never on router.refresh() while viewing report)
  const sessionScopeKey = `${scopeType}-${scopeId}-${targetLength}`;
  const prevScopeKeyRef = React.useRef<string>(sessionScopeKey);

  useEffect(() => {
    if (prevScopeKeyRef.current === sessionScopeKey) return;
    prevScopeKeyRef.current = sessionScopeKey;

    const first = selectNextCatQuestion(calibratedPool, new Set<number>(), 0.0, []);
    setHistory([]);
    setCurrentTheta(0.0);
    setCurrentSe(1.15);
    setConfidencePct(25);
    setCurrentQuestion(first.nextQuestion);
    setSelectionReason(first.selectionReason);
    setSelectedOption(null);
    setItemLocked(false);
    setLatestStepResult(null);
    setFinished(false);
    setSecondsElapsed(0);
  }, [sessionScopeKey, calibratedPool]);

  // Timer
  useEffect(() => {
    if (finished) return;
    const timer = setInterval(() => {
      setSecondsElapsed((s) => s + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [finished]);

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  // Lock in answer for the current adaptive question and update IRT ability θ
  const handleConfirmCurrentAnswer = () => {
    if (!currentQuestion || selectedOption === null || itemLocked) return;

    const isCorrect = selectedOption === currentQuestion.correct_index;
    const scoreRatio = isCorrect ? 1.0 : 0.0;

    const updatedRawHistory = [
      ...history.map((h) => ({
        irt: h.question.irt,
        isCorrect: h.isCorrect,
        scoreRatio: h.scoreRatio,
      })),
      {
        irt: currentQuestion.irt,
        isCorrect,
        scoreRatio,
      },
    ];

    const est = estimateAbilityEAP(updatedRawHistory);
    const delta = Number((est.theta - currentTheta).toFixed(2));
    const fisher = irtFisherInformation(currentTheta, currentQuestion.irt);
    const pred10 = thetaToScore10(est.theta);

    const diffLabel = DIFF_META[currentQuestion.difficulty].label;
    const adaptMsg = isCorrect
      ? `Chính xác! Năng lực θ tăng +${Math.abs(delta).toFixed(2)} (lên ${est.theta >= 0 ? '+' : ''}${est.theta}). Câu tiếp theo sẽ được nâng độ khó.`
      : `Chưa chính xác. Năng lực θ điều chỉnh -${Math.abs(delta).toFixed(2)} (về ${est.theta >= 0 ? '+' : ''}${est.theta}). Câu tiếp theo sẽ điều chỉnh độ khó để củng cố nền tảng.`;

    const stepRecord: CatResponseStep = {
      stepNumber: history.length + 1,
      question: currentQuestion,
      userAnswer: selectedOption,
      isCorrect,
      scoreRatio,
      thetaBefore: currentTheta,
      thetaAfter: est.theta,
      thetaDelta: delta,
      seAfter: est.standardError,
      confidencePct: est.confidencePct,
      predictedScore10: pred10,
      fisherInfoAtStep: fisher,
      adaptationReason: adaptMsg,
    };

    setHistory((prev) => [...prev, stepRecord]);
    setCurrentTheta(est.theta);
    setCurrentSe(est.standardError);
    setConfidencePct(est.confidencePct);
    setLatestStepResult(stepRecord);
    setItemLocked(true);
  };

  // Proceed to the next dynamically selected question or finish the CAT exam
  const handleNextAdaptiveStep = async () => {
    if (!itemLocked) return;

    if (history.length >= maxItems) {
      await finalizeCatSession(history);
      return;
    }

    const administeredIds = new Set<number>(history.map((h) => h.question.id));
    const nextPick = selectNextCatQuestion(
      calibratedPool,
      administeredIds,
      currentTheta,
      history
    );

    if (!nextPick.nextQuestion) {
      await finalizeCatSession(history);
      return;
    }

    setCurrentQuestion(nextPick.nextQuestion);
    setSelectionReason(nextPick.selectionReason);
    setSelectedOption(null);
    setItemLocked(false);
    setLatestStepResult(null);
  };

  // Sync mistakes & quiz attempt to DB when CAT exam completes
  const finalizeCatSession = async (finalHistory: CatResponseStep[]) => {
    setFinished(true);
    try {
      const results = finalHistory.map((h) => ({
        questionId: h.question.id,
        correct: h.isCorrect,
        selectedOption: typeof h.userAnswer === 'number' ? h.userAnswer : -1,
      }));

      await fetch('/api/mistakes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'batch_practice_result', results }),
      });

      const correctCount = finalHistory.filter((h) => h.isCorrect).length;
      const lastStep = finalHistory[finalHistory.length - 1];
      const finalThetaVal = lastStep ? lastStep.thetaAfter : currentTheta;
      const finalSeVal = lastStep ? lastStep.seAfter : currentSe;
      const finalConfVal = lastStep ? lastStep.confidencePct : confidencePct;
      const finalPred10 = thetaToScore10(finalThetaVal);
      const finalTier = getAbilityTier(finalThetaVal);

      // Save detailed CAT report to adaptive_cat_attempts table
      const saveRes = await fetch('/api/adaptive-cat/attempts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          scopeType,
          scopeId,
          gradeNumber: finalHistory[0]?.question.grade_number || null,
          totalQuestions: finalHistory.length,
          correctCount,
          finalTheta: finalThetaVal,
          finalSe: finalSeVal,
          confidencePct: finalConfVal,
          predictedScore10: finalPred10,
          abilityTierLabel: finalTier.shortLabel,
          timeSpentSec: secondsElapsed,
          history: finalHistory,
        }),
      });

      if (saveRes.ok) {
        setJustSavedReport(true);
      }

      await fetchSavedAttempts();
      router.refresh();
    } catch {
      // Ignore network errors
    }
  };

  const handleDeleteSavedAttempt = async (id: number) => {
    try {
      await fetch(`/api/adaptive-cat/attempts?id=${id}`, { method: 'DELETE' });
      setSavedAttempts((prev) => prev.filter((item) => item.id !== id));
    } catch {
      // Ignore network error
    }
  };

  const handleLoadSavedAttempt = (row: SavedCatAttemptRow) => {
    try {
      const parsed: CatResponseStep[] = JSON.parse(row.history_json || '[]');
      if (!Array.isArray(parsed) || parsed.length === 0) return;
      setReportTitle(row.title);
      setHistory(parsed);
      setCurrentTheta(Number(row.final_theta));
      setCurrentSe(Number(row.final_se));
      setConfidencePct(Number(row.confidence_pct));
      setSecondsElapsed(Number(row.time_spent_sec));
      setFinished(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      // Ignore parse error
    }
  };

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr.endsWith('Z') ? dateStr : `${dateStr}Z`);
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

  const handleRestartCat = () => {
    const first = selectNextCatQuestion(calibratedPool, new Set<number>(), 0.0, []);
    setReportTitle(title);
    setJustSavedReport(false);
    setHistory([]);
    setCurrentTheta(0.0);
    setCurrentSe(1.15);
    setConfidencePct(25);
    setCurrentQuestion(first.nextQuestion);
    setSelectionReason(first.selectionReason);
    setSelectedOption(null);
    setItemLocked(false);
    setLatestStepResult(null);
    setFinished(false);
    setSecondsElapsed(0);
  };

  const abilityTier = getAbilityTier(currentTheta);
  const predictedScore10 = thetaToScore10(currentTheta);

  if (calibratedPool.length === 0) {
    return (
      <div className="edu-card p-8 text-center text-sm text-slate-600">
        Không có câu hỏi nào trong phạm vi này để khởi tạo bài thi thích ứng.
      </div>
    );
  }

  // ============================================================================
  // POST-EXAM ADAPTIVE DIAGNOSTIC REPORT & TRAJECTORY CHART
  // ============================================================================
  if (finished) {
    const correctTotal = history.filter((h) => h.isCorrect).length;
    const highestConqueredB = history
      .filter((h) => h.isCorrect)
      .reduce((max, h) => Math.max(max, h.question.irt.b), -2.5);

    // Breakdown by 4 difficulty tiers
    const diffBreakdown = (
      ['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] as DifficultyLevel[]
    ).map((d) => {
      const items = history.filter((h) => h.question.difficulty === d);
      const right = items.filter((h) => h.isCorrect).length;
      return {
        difficulty: d,
        label: DIFF_META[d].label,
        badgeCls: DIFF_META[d].badgeCls,
        total: items.length,
        right,
      };
    });

    // Weak topics detected during CAT session
    const missedTopicMap = new Map<
      string,
      { code: string; title: string; missedCount: number }
    >();
    for (const h of history) {
      if (!h.isCorrect && h.question.topic_code) {
        const code = h.question.topic_code;
        const cur = missedTopicMap.get(code) || {
          code,
          title: h.question.topic_title || code,
          missedCount: 0,
        };
        cur.missedCount += 1;
        missedTopicMap.set(code, cur);
      }
    }
    const missedTopics = Array.from(missedTopicMap.values());

    // SVG Trajectory Chart coordinates
    const chartWidth = 680;
    const chartHeight = 230;
    const padLeft = 48;
    const padRight = 24;
    const padTop = 24;
    const padBottom = 34;
    const innerW = chartWidth - padLeft - padRight;
    const innerH = chartHeight - padTop - padBottom;

    const thetaToY = (val: number) => {
      const clamped = Math.max(-2.5, Math.min(2.5, val));
      const ratio = (2.5 - clamped) / 5.0; // +2.5 at top, -2.5 at bottom
      return padTop + ratio * innerH;
    };

    const stepToX = (idx: number) => {
      if (history.length <= 1) return padLeft + innerW / 2;
      return padLeft + (idx / (history.length - 1)) * innerW;
    };

    const abilityPoints = history
      .map((h, i) => `${stepToX(i)},${thetaToY(h.thetaAfter)}`)
      .join(' ');
    const difficultyPoints = history
      .map((h, i) => `${stepToX(i)},${thetaToY(h.question.irt.b)}`)
      .join(' ');

    return (
      <div className="mx-auto max-w-4xl animate-fade-up space-y-6">
        {/* 1. HERO ADAPTIVE RESULT BANNER */}
        <div className="edu-card overflow-hidden">
          <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 px-6 py-8 text-white sm:px-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-extrabold text-amber-300 backdrop-blur">
                    <Target className="h-3.5 w-3.5" />
                    <span>BÁO CÁO ĐO LƯỜNG NĂNG LỰC THÍCH ỨNG (CAT • IRT 3PL)</span>
                  </div>
                  {justSavedReport && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/25 px-3 py-1 text-xs font-extrabold text-emerald-200 ring-1 ring-emerald-400/40">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>Đã lưu vào Lịch sử Báo cáo</span>
                    </span>
                  )}
                </div>
                <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{reportTitle}</h2>
                <p className="max-w-xl text-xs leading-relaxed text-white/80 sm:text-sm">
                  {abilityTier.description}
                </p>
              </div>

              {/* Predicted Score 10 Box */}
              <div className="flex shrink-0 items-center gap-4 rounded-3xl border border-white/20 bg-white/10 p-5 text-center backdrop-blur">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                    Điểm Quy Đổi Dự Báo
                  </div>
                  <div className="mt-1 text-4xl font-extrabold tracking-tight text-white">
                    {predictedScore10}
                    <span className="text-lg font-semibold text-white/70">/10</span>
                  </div>
                  <div className="mt-1 text-xs font-bold text-emerald-300">
                    {abilityTier.shortLabel}
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Key Telemetry Metrics */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-2xl bg-white/10 p-3.5 backdrop-blur">
                <div className="text-[11px] font-semibold text-white/70">Chỉ số Năng lực (θ)</div>
                <div className="mt-1 text-xl font-extrabold text-white">
                  {currentTheta >= 0 ? `+${currentTheta}` : currentTheta}{' '}
                  <span className="text-xs font-normal text-white/70">±{currentSe}</span>
                </div>
              </div>
              <div className="rounded-2xl bg-white/10 p-3.5 backdrop-blur">
                <div className="text-[11px] font-semibold text-white/70">Độ tin cậy đo lường</div>
                <div className="mt-1 text-xl font-extrabold text-emerald-300">{confidencePct}%</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-3.5 backdrop-blur">
                <div className="text-[11px] font-semibold text-white/70">Số câu đúng thực tế</div>
                <div className="mt-1 text-xl font-extrabold text-amber-300">
                  {correctTotal}/{history.length} câu
                </div>
              </div>
              <div className="rounded-2xl bg-white/10 p-3.5 backdrop-blur">
                <div className="text-[11px] font-semibold text-white/70">Đỉnh độ khó vượt qua</div>
                <div className="mt-1 text-xl font-extrabold text-sky-300">
                  {highestConqueredB > -2.4
                    ? `b = ${highestConqueredB >= 0 ? '+' : ''}${highestConqueredB}`
                    : 'Chưa đạt'}
                </div>
              </div>
            </div>
          </div>

          {/* 2. ABILITY & DIFFICULTY TRAJECTORY CHART */}
          <div className="space-y-6 p-6 sm:p-8">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="flex items-center gap-2 text-base font-extrabold text-slate-900">
                    <Activity className="h-5 w-5 text-purple-600" />
                    Biểu đồ Hành trình Thích ứng (Độ khó câu hỏi &amp; Năng lực qua từng bước)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Đường nét đứt thể hiện độ khó câu hỏi được máy bốc; đường liền nét thể hiện năng lực ước lượng của bạn hội tụ sau mỗi câu.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
                  <span className="flex items-center gap-1.5 text-purple-700">
                    <span className="inline-block h-1 w-5 rounded bg-purple-600" /> Năng lực của bạn (θ)
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <span className="inline-block h-0.5 w-5 border-t-2 border-dashed border-slate-400" /> Độ khó câu hỏi (b)
                  </span>
                  <span className="flex items-center gap-1 text-emerald-700">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Trả lời Đúng
                  </span>
                  <span className="flex items-center gap-1 text-rose-700">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500" /> Trả lời Sai
                  </span>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-50/70 p-3">
                <svg
                  viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                  className="mx-auto h-56 w-full min-w-[520px]"
                >
                  {/* Horizontal difficulty zone guidelines */}
                  {[
                    { val: 2.0, label: 'VDC (+2.0)' },
                    { val: 1.0, label: 'Vận dụng (+1.0)' },
                    { val: 0.0, label: 'Thông hiểu (0.0)' },
                    { val: -1.2, label: 'Nhận biết (-1.2)' },
                  ].map((g) => {
                    const y = thetaToY(g.val);
                    return (
                      <g key={g.val}>
                        <line
                          x1={padLeft}
                          y1={y}
                          x2={chartWidth - padRight}
                          y2={y}
                          stroke="#e2e8f0"
                          strokeDasharray="4 4"
                        />
                        <text
                          x={padLeft - 6}
                          y={y + 3}
                          textAnchor="end"
                          className="fill-slate-400 text-[9px] font-semibold"
                        >
                          {g.label}
                        </text>
                      </g>
                    );
                  })}

                  {/* Dashed line for question difficulty b_k */}
                  {history.length > 1 && (
                    <polyline
                      fill="none"
                      stroke="#94a3b8"
                      strokeWidth={2}
                      strokeDasharray="5 4"
                      points={difficultyPoints}
                    />
                  )}

                  {/* Solid line for student ability theta_k */}
                  {history.length > 1 && (
                    <polyline
                      fill="none"
                      stroke="#7c3aed"
                      strokeWidth={3}
                      points={abilityPoints}
                    />
                  )}

                  {/* Dots for each step */}
                  {history.map((h, i) => {
                    const x = stepToX(i);
                    const yTheta = thetaToY(h.thetaAfter);
                    const yDiff = thetaToY(h.question.irt.b);
                    return (
                      <g key={h.stepNumber}>
                        {/* Question difficulty dot (Right = green, Wrong = red) */}
                        <circle
                          cx={x}
                          cy={yDiff}
                          r={5.5}
                          fill={h.isCorrect ? '#10b981' : '#f43f5e'}
                          stroke="#ffffff"
                          strokeWidth={1.5}
                        />
                        {/* Ability theta dot */}
                        <circle
                          cx={x}
                          cy={yTheta}
                          r={4.5}
                          fill="#7c3aed"
                          stroke="#ffffff"
                          strokeWidth={1.5}
                        />
                        <text
                          x={x}
                          y={chartHeight - 10}
                          textAnchor="middle"
                          className="fill-slate-600 text-[10px] font-bold"
                        >
                          Câu {h.stepNumber}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* 3. BREAKDOWN BY DIFFICULTY TIERS */}
            <div className="space-y-3">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-700">
                📊 Thống kê theo 4 Cấp độ Tư duy đã được máy khảo sát
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {diffBreakdown.map((db) => (
                  <div
                    key={db.difficulty}
                    className={`rounded-2xl border p-3.5 ${db.badgeCls}`}
                  >
                    <div className="text-xs font-extrabold">{db.label}</div>
                    <div className="mt-1.5 text-xl font-extrabold">
                      {db.total > 0 ? `${db.right}/${db.total} câu đúng` : 'Không cần hỏi'}
                    </div>
                    <div className="mt-0.5 text-[11px] opacity-80">
                      {db.total > 0
                        ? `Đạt ${Math.round((db.right / db.total) * 100)}% ở bậc này`
                        : 'Đã vượt qua hoặc ngoài vùng ngưỡng'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. LINK TO KNOWLEDGE GRAPH IF WEAK TOPICS FOUND */}
            {missedTopics.length > 0 && (
              <div className="rounded-2xl border border-rose-200 bg-rose-50/70 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-wider text-rose-800">
                      🧬 Phát hiện {missedTopics.length} chủ đề có lỗ hổng cần truy vết tiền đề:
                    </div>
                    <p className="mt-0.5 text-xs text-rose-700">
                      Các câu bạn làm sai đã được lưu tự động vào Sổ tay sai. Bấm vào chủ đề bên dưới để mở Bản đồ Tri thức tìm bài gốc ở lớp dưới:
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {missedTopics.map((mt) => (
                    <Link
                      key={mt.code}
                      href={`/knowledge-graph?focus=${mt.code}`}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-rose-300 bg-white px-3 py-1.5 text-xs font-bold text-rose-800 shadow-2xs transition hover:bg-rose-100"
                    >
                      <GitBranch className="h-3.5 w-3.5 text-rose-600" />
                      <span>
                        {mt.code}: {mt.title} (Sai {mt.missedCount} câu) → Truy vết gốc
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* 5. STEP-BY-STEP QUESTION REVIEW */}
            <div className="space-y-3 border-t border-slate-200 pt-5">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-700">
                🔍 Chi tiết từng bước thích ứng &amp; Lời giải ({history.length} câu)
              </h3>

              <div className="space-y-3">
                {history.map((h) => {
                  const diffInfo = DIFF_META[h.question.difficulty];
                  return (
                    <div
                      key={h.stepNumber}
                      className={`space-y-2.5 rounded-2xl border p-4 text-xs ${
                        h.isCorrect
                          ? 'border-emerald-200 bg-emerald-50/30'
                          : 'border-rose-200 bg-rose-50/30'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-lg bg-slate-900 px-2.5 py-1 font-extrabold text-white">
                            Bước {h.stepNumber}
                          </span>
                          <span className={`rounded-lg border px-2.5 py-0.5 font-bold ${diffInfo.badgeCls}`}>
                            {diffInfo.label} (b = {h.question.irt.b >= 0 ? '+' : ''}
                            {h.question.irt.b})
                          </span>
                          {h.question.topic_code && (
                            <span className="rounded-md bg-slate-200/80 px-2 py-0.5 font-mono text-[10px] font-bold text-slate-700">
                              {h.question.topic_code}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 font-bold">
                          <span
                            className={
                              h.isCorrect ? 'text-emerald-700' : 'text-rose-700'
                            }
                          >
                            {h.isCorrect ? '✓ Đúng' : '✗ Sai'} (θ:{' '}
                            {h.thetaBefore >= 0 ? `+${h.thetaBefore}` : h.thetaBefore} →{' '}
                            {h.thetaAfter >= 0 ? `+${h.thetaAfter}` : h.thetaAfter})
                          </span>
                        </div>
                      </div>

                      <div className="text-sm font-semibold text-slate-900">
                        <RichPhysicsText text={h.question.question_text} />
                      </div>

                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {h.question.options.map((opt, oIdx) => {
                          const letter = ['A', 'B', 'C', 'D'][oIdx];
                          const isUser = h.userAnswer === oIdx;
                          const isRight = h.question.correct_index === oIdx;
                          let cls = 'border-slate-200 bg-white text-slate-700';
                          if (isRight) {
                            cls = 'border-emerald-500 bg-emerald-50 font-bold text-emerald-950';
                          } else if (isUser && !isRight) {
                            cls = 'border-rose-400 bg-rose-50 font-semibold text-rose-950';
                          }
                          return (
                            <div
                              key={oIdx}
                              className={`flex items-start gap-2 rounded-xl border p-2.5 ${cls}`}
                            >
                              <span className="font-extrabold">{letter}.</span>
                              <span className="flex-1">
                                <RichPhysicsText text={opt} />
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200/80 bg-white p-3 text-slate-700">
                        <div className="flex-1">
                          <strong className="text-emerald-700">Giải thích: </strong>
                          <RichPhysicsText text={h.question.explanation} />
                        </div>
                        <Link
                          href={`/problem-sandbox?questionId=${h.question.id}${
                            h.question.topic_id ? `&topicId=${h.question.topic_id}` : ''
                          }`}
                          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-teal-200 bg-teal-50 px-3 py-1.5 text-[11px] font-extrabold text-teal-800 transition hover:bg-teal-100"
                        >
                          <span>🔬 Kiểm chứng bằng Mô phỏng</span>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4">
              {onExitMode && (
                <button
                  type="button"
                  onClick={onExitMode}
                  className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
                >
                  ← Quay lại chọn chế độ thi
                </button>
              )}
              <div className="flex flex-wrap items-center gap-2.5">
                <Link
                  href="/mistakes"
                  className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-2.5 text-xs font-bold text-rose-700 transition hover:bg-rose-100"
                >
                  Mở Sổ tay lỗi sai
                </Link>
                <button
                  type="button"
                  onClick={handleRestartCat}
                  className="edu-btn-primary text-xs"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Thi Thích ứng lại lần nữa</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SAVED REPORTS HISTORY LIST DIRECTLY ON REPORT VIEW */}
        {savedAttempts.length > 0 && (
          <div className="edu-card space-y-4 p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                  <History className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900">
                    Lịch sử Báo cáo Khảo thí Thích ứng đã lưu ({savedAttempts.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Bấm vào bất kỳ báo cáo nào bên dưới để chuyển đổi xem lại biểu đồ và chi tiết câu hỏi
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {savedAttempts.map((row) => (
                <div
                  key={row.id}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-3.5 shadow-2xs transition hover:border-purple-300"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-xs font-extrabold text-slate-900 line-clamp-1">
                        {row.title}
                      </div>
                      <div className="mt-0.5 flex items-center gap-2 text-[11px] text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> {formatDate(row.created_at)}
                        </span>
                        <span>•</span>
                        <span>
                          Đúng {row.correct_count}/{row.total_questions} câu
                        </span>
                      </div>
                    </div>
                    <div className="shrink-0 rounded-xl bg-purple-50 px-2.5 py-1 text-right text-xs font-extrabold text-purple-900">
                      {Number(row.predicted_score_10).toFixed(1)}/10
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2">
                    <button
                      type="button"
                      onClick={() => handleLoadSavedAttempt(row)}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-purple-600 px-3 py-1.5 text-[11px] font-extrabold text-white transition hover:bg-purple-500"
                    >
                      <Eye className="h-3 w-3" />
                      <span>Xem Báo cáo này</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteSavedAttempt(row.id)}
                      className="rounded-lg p-1 text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
                      title="Xóa báo cáo"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // ============================================================================
  // ACTIVE ADAPTIVE QUESTION RUNNER
  // ============================================================================
  const currentStepNum = history.length + 1;
  const currentDiffMeta = currentQuestion
    ? DIFF_META[currentQuestion.difficulty]
    : DIFF_META.thong_hieu;
  const currentFisher = currentQuestion
    ? irtFisherInformation(currentTheta, currentQuestion.irt)
    : 0;

  return (
    <div className="mx-auto max-w-3xl animate-fade-up space-y-5">
      {/* 1. LIVE ADAPTIVE TELEMETRY BAR */}
      <div className="edu-card overflow-hidden border-2 border-purple-200/80">
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 px-5 py-4 text-white">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/30 text-amber-300 ring-1 ring-white/20">
                <Target className="h-5 w-5" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-200">
                    KHẢO THÍ THÍCH ỨNG IRT 3PL
                  </span>
                  <span className="rounded bg-amber-400/20 px-1.5 py-0.5 text-[10px] font-extrabold text-amber-300">
                    Câu {currentStepNum} / {maxItems}
                  </span>
                </div>
                <h3 className="text-sm font-extrabold text-white line-clamp-1">{title}</h3>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5 rounded-xl bg-white/10 px-3 py-1.5 text-xs font-bold">
                <Clock className="h-3.5 w-3.5 text-purple-200" />
                <span>{formatTime(secondsElapsed)}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (onExitMode) {
                    onExitMode();
                  } else {
                    handleRestartCat();
                  }
                }}
                className="inline-flex items-center gap-1.5 rounded-xl border border-rose-400/50 bg-rose-500/20 px-3 py-1.5 text-xs font-extrabold text-rose-100 transition hover:bg-rose-500/40"
              >
                <XCircle className="h-3.5 w-3.5" />
                <span>Hủy kiểm tra</span>
              </button>
            </div>
          </div>

          {/* Live Gauges: Ability Theta, Predicted 10-Point Score, Confidence % */}
          <div className="mt-4 grid grid-cols-3 gap-2.5 rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur">
            <div>
              <div className="text-[10px] font-semibold text-purple-200">
                Năng lực hiện tại (θ)
              </div>
              <div className="mt-0.5 flex items-baseline gap-1.5">
                <span className="text-lg font-extrabold text-white">
                  {currentTheta >= 0 ? `+${currentTheta}` : currentTheta}
                </span>
                <span className="text-[11px] font-semibold text-amber-300">
                  ({abilityTier.shortLabel})
                </span>
              </div>
            </div>

            <div className="border-x border-white/15 px-3">
              <div className="text-[10px] font-semibold text-purple-200">
                Điểm dự báo thang 10
              </div>
              <div className="mt-0.5 text-lg font-extrabold text-emerald-300">
                {predictedScore10}{' '}
                <span className="text-xs font-normal text-white/75">/ 10 điểm</span>
              </div>
            </div>

            <div className="pl-1">
              <div className="flex items-center justify-between text-[10px] font-semibold text-purple-200">
                <span>Độ tin cậy đo lường</span>
                <span className="font-extrabold text-white">{confidencePct}%</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/15">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 to-emerald-400 transition-all duration-300"
                  style={{ width: `${confidencePct}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Adaptation Reason Banner */}
        <div className="flex items-start gap-2.5 border-t border-purple-100 bg-purple-50/90 px-5 py-3 text-xs text-purple-950">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-purple-600" />
          <div className="leading-relaxed">
            <strong className="font-extrabold text-purple-900">Trạng thái thích ứng: </strong>
            {selectionReason}
          </div>
        </div>
      </div>

      {/* 2. DIFFICULTY STEPPING STONES INDICATOR (4 TIERS) */}
      {currentQuestion && (
        <div className="grid grid-cols-4 gap-2">
          {(['nhan_biet', 'thong_hieu', 'van_dung', 'van_dung_cao'] as DifficultyLevel[]).map(
            (d) => {
              const active = currentQuestion.difficulty === d;
              const info = DIFF_META[d];
              return (
                <div
                  key={d}
                  className={`rounded-xl border px-3 py-2 text-center transition ${
                    active
                      ? `${info.badgeCls} ring-2 ring-slate-900/15 shadow-soft font-extrabold scale-[1.02]`
                      : 'border-slate-200/80 bg-white/70 text-slate-400 font-semibold opacity-65'
                  }`}
                >
                  <div className="text-[11px]">{info.label}</div>
                </div>
              );
            }
          )}
        </div>
      )}

      {/* 3. CURRENT ADAPTIVE QUESTION CARD */}
      {currentQuestion && (
        <div className="edu-card space-y-5 p-6 sm:p-7">
          {/* Question Metadata & IRT Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-xl bg-slate-900 px-3 py-1 text-xs font-extrabold text-white">
                Câu {currentStepNum}/{maxItems}
              </span>
              <span
                className={`rounded-xl border px-2.5 py-1 text-xs font-bold ${currentDiffMeta.badgeCls}`}
              >
                {currentDiffMeta.label}
              </span>
              {currentQuestion.topic_code && (
                <span className="rounded-lg bg-slate-100 px-2.5 py-1 font-mono text-xs font-bold text-slate-700">
                  {currentQuestion.topic_code}
                  {currentQuestion.topic_title
                    ? ` • ${currentQuestion.topic_title.replace(/^Chủ đề \d+\.\d+:\s*/i, '')}`
                    : ''}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
              <span className="rounded-lg bg-slate-100 px-2 py-0.5">
                Độ khó b = {currentQuestion.irt.b >= 0 ? `+${currentQuestion.irt.b}` : currentQuestion.irt.b}
              </span>
              <span className="rounded-lg bg-slate-100 px-2 py-0.5">
                Phân loại a = {currentQuestion.irt.a}
              </span>
              <span className="hidden rounded-lg bg-purple-50 px-2 py-0.5 text-purple-700 sm:inline">
                Fisher I(θ) = {currentFisher}
              </span>
            </div>
          </div>

          {/* Question Stem */}
          <div className="text-base font-semibold leading-relaxed text-slate-900 sm:text-lg">
            <RichPhysicsText text={currentQuestion.question_text} />
          </div>

          {/* 4 Options */}
          <div className="grid grid-cols-1 gap-2.5">
            {currentQuestion.options.map((opt, oIdx) => {
              const letter = ['A', 'B', 'C', 'D'][oIdx] || 'A';
              const isSelected = selectedOption === oIdx;
              const isRight = currentQuestion.correct_index === oIdx;

              let btnStyle =
                'border-slate-200 bg-white hover:-translate-y-0.5 hover:border-purple-300 hover:bg-purple-50/30 text-slate-800';
              if (!itemLocked && isSelected) {
                btnStyle =
                  'border-purple-600 bg-purple-50/80 font-semibold text-purple-950 ring-2 ring-purple-500/25';
              } else if (itemLocked) {
                if (isRight) {
                  btnStyle =
                    'border-emerald-500 bg-emerald-50/90 font-semibold text-emerald-950 ring-2 ring-emerald-500/20';
                } else if (isSelected && !isRight) {
                  btnStyle = 'border-rose-400 bg-rose-50/90 text-rose-950';
                } else {
                  btnStyle = 'border-slate-200 bg-slate-50/60 text-slate-400';
                }
              }

              return (
                <button
                  key={oIdx}
                  type="button"
                  disabled={itemLocked}
                  onClick={() => {
                    if (!itemLocked) setSelectedOption(oIdx);
                  }}
                  className={`flex w-full items-start gap-3 rounded-2xl border p-3.5 text-left text-sm transition duration-150 ${btnStyle}`}
                >
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-extrabold ${
                      !itemLocked && isSelected
                        ? 'bg-purple-600 text-white'
                        : itemLocked && isRight
                          ? 'bg-emerald-600 text-white'
                          : itemLocked && isSelected && !isRight
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

          {/* Immediate IRT Update Feedback & Explanation after Locking Answer */}
          {itemLocked && latestStepResult && (
            <div className="animate-fade-in space-y-3 pt-2">
              <div
                className={`flex flex-wrap items-center justify-between gap-2 rounded-2xl border p-3.5 text-xs ${
                  latestStepResult.isCorrect
                    ? 'border-emerald-300 bg-emerald-50/90 text-emerald-950'
                    : 'border-rose-300 bg-rose-50/90 text-rose-950'
                }`}
              >
                <div className="flex items-center gap-2 font-extrabold">
                  {latestStepResult.isCorrect ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  ) : (
                    <XCircle className="h-4 w-4 text-rose-600" />
                  )}
                  <span>{latestStepResult.adaptationReason}</span>
                </div>
                <span className="rounded-lg bg-white/90 px-2.5 py-1 font-extrabold shadow-2xs">
                  Dự báo mới: {latestStepResult.predictedScore10}/10 điểm
                </span>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs leading-relaxed text-slate-700 sm:text-sm">
                <strong className="font-bold text-emerald-700">Lời giải chi tiết: </strong>
                <RichPhysicsText text={currentQuestion.explanation} />
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="flex items-center justify-between border-t border-slate-100 pt-4">
            <div className="flex items-center gap-1.5">
              {history.map((h) => (
                <span
                  key={h.stepNumber}
                  title={`Câu ${h.stepNumber}: ${h.isCorrect ? 'Đúng' : 'Sai'} (b = ${h.question.irt.b})`}
                  className={`h-2.5 w-2.5 rounded-full ${
                    h.isCorrect ? 'bg-emerald-500' : 'bg-rose-500'
                  }`}
                />
              ))}
              {Array.from({ length: Math.max(0, maxItems - history.length) }).map((_, i) => (
                <span
                  key={i}
                  className={`h-2.5 w-2.5 rounded-full ${
                    i === 0 && !itemLocked
                      ? 'bg-purple-600 ring-2 ring-purple-200'
                      : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>

            {!itemLocked ? (
              <button
                type="button"
                disabled={selectedOption === null}
                onClick={handleConfirmCurrentAnswer}
                className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-extrabold text-white shadow-soft transition ${
                  selectedOption !== null
                    ? 'bg-purple-600 hover:bg-purple-500'
                    : 'cursor-not-allowed bg-slate-300'
                }`}
              >
                <Zap className="h-4 w-4" />
                <span>Chốt đáp án &amp; Tính năng lực θ</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNextAdaptiveStep}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-extrabold text-white shadow-soft transition hover:bg-slate-800"
              >
                <span>
                  {history.length >= maxItems
                    ? 'Xem Báo cáo Năng lực CAT →'
                    : 'Bốc câu hỏi thích ứng tiếp theo →'}
                </span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* 4. SAVED REPORTS QUICK ACCESS BELOW RUNNER */}
      {savedAttempts.length > 0 && (
        <div className="edu-card space-y-3 p-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
            <div className="flex items-center gap-2">
              <History className="h-4 w-4 text-purple-600" />
              <span className="text-xs font-extrabold text-slate-900">
                Lịch sử Báo cáo Khảo thí Thích ứng đã lưu ({savedAttempts.length})
              </span>
            </div>
            <span className="text-[11px] text-slate-500">
              Bấm &ldquo;Xem Báo cáo&rdquo; để mở lại kết quả các lần thi trước
            </span>
          </div>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {savedAttempts.slice(0, 6).map((row) => (
              <div
                key={row.id}
                className="flex items-center justify-between gap-2 rounded-xl border border-slate-200/90 bg-slate-50/70 p-3 text-xs transition hover:border-purple-300 hover:bg-white"
              >
                <div className="min-w-0 flex-1">
                  <div className="truncate font-extrabold text-slate-900">{row.title}</div>
                  <div className="mt-0.5 text-[10px] text-slate-500">
                    {formatDate(row.created_at)} • {Number(row.predicted_score_10).toFixed(1)}/10 điểm (θ ={' '}
                    {row.final_theta >= 0 ? `+${row.final_theta}` : row.final_theta})
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleLoadSavedAttempt(row)}
                  className="shrink-0 rounded-lg bg-purple-600 px-2.5 py-1.5 text-[11px] font-extrabold text-white transition hover:bg-purple-500"
                >
                  Xem Báo cáo
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

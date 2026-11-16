'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Filter,
  Flag,
  History,
  Layers,
  Play,
  RotateCcw,
  Search,
  Sparkles,
  Target,
  Trash2,
  XCircle,
} from 'lucide-react';
import type { DifficultyLevel } from '@/types/cms';
import { RichPhysicsText } from '@/components/KatexRenderer';
import {
  getSavedGradePreference,
  saveGradePreference,
} from '@/lib/grade-context';
import {
  buildExamQuestions,
  EXAM_TYPE_META,
  EXAM_YEARS,
  getExamPapersForGrade,
  type ExamChapterMeta,
  type ExamPaperSpec,
  type ExamQuestionSource,
  type ExamType,
  type ExamYear,
} from '@/lib/exam-prep-bank';

interface Props {
  chapters: ExamChapterMeta[];
  questions: ExamQuestionSource[];
  initialGrade: number | null;
}

type ExamMode = 'timed' | 'practice';

interface SavedExamAttempt {
  id: string;
  paperId: string;
  title: string;
  gradeNumber: number;
  year: ExamYear | null;
  examType: ExamType;
  mode: ExamMode;
  correctCount: number;
  totalQuestions: number;
  score10: number;
  timeSpentSec: number;
  createdAt: string;
}

const HISTORY_STORAGE_KEY = 'eduphysics_v2_exam_prep_history_v1';

const DIFFICULTY_META: Record<DifficultyLevel, { label: string; badgeClass: string }> = {
  nhan_biet: {
    label: 'Nhận biết',
    badgeClass: 'border-emerald-400/30 bg-emerald-500/15 text-emerald-200',
  },
  thong_hieu: {
    label: 'Thông hiểu',
    badgeClass: 'border-cyan-400/30 bg-cyan-500/15 text-cyan-200',
  },
  van_dung: {
    label: 'Vận dụng',
    badgeClass: 'border-amber-400/30 bg-amber-500/15 text-amber-200',
  },
  van_dung_cao: {
    label: 'Vận dụng cao',
    badgeClass: 'border-rose-400/30 bg-rose-500/15 text-rose-200',
  },
};

function formatDuration(seconds: number): string {
  const s = Math.max(0, Math.floor(seconds));
  const mins = Math.floor(s / 60);
  const secs = s % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function QuestionFigure({ q }: { q: ExamQuestionSource }) {
  if (!q.imageUrl && !q.figureSvg) return null;
  return (
    <figure className="my-4 overflow-hidden rounded-xl border border-white/15 bg-slate-950/70 p-3">
      {q.figureSvg ? (
        <div
          className="mx-auto flex max-w-md items-center justify-center [&>svg]:h-auto [&>svg]:max-h-64 [&>svg]:w-full"
          dangerouslySetInnerHTML={{ __html: q.figureSvg }}
        />
      ) : q.imageUrl ? (
        <img
          src={q.imageUrl}
          alt={q.imageAlt ?? q.topic_title ?? 'Hình minh họa câu hỏi'}
          className="mx-auto max-h-72 w-auto rounded-lg object-contain bg-white/95 p-1.5"
          loading="lazy"
        />
      ) : null}
      {q.imageCaption && (
        <figcaption className="mt-2 text-center text-xs text-slate-400">
          {q.imageCaption}
        </figcaption>
      )}
    </figure>
  );
}

export function V2ExamPrepStudioClient({ chapters, questions, initialGrade }: Props) {
  const [selectedGrade, setSelectedGrade] = useState<number>(() =>
    initialGrade && initialGrade >= 6 && initialGrade <= 12 ? initialGrade : 12
  );
  const [selectedType, setSelectedType] = useState<ExamType | 'all'>('all');
  const [query, setQuery] = useState('');

  const [history, setHistory] = useState<SavedExamAttempt[]>([]);
  const [activePaper, setActivePaper] = useState<ExamPaperSpec | null>(null);
  const [activeMode, setActiveMode] = useState<ExamMode>('timed');
  const [examQuestions, setExamQuestions] = useState<ExamQuestionSource[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [tfAnswers, setTfAnswers] = useState<Record<number, Record<number, boolean>>>({});
  const [shortAnswers, setShortAnswers] = useState<Record<number, string>>({});
  const [confirmedShortIds, setConfirmedShortIds] = useState<Record<number, boolean>>({});
  const [flaggedIds, setFlaggedIds] = useState<Record<number, boolean>>({});
  const [currentIdx, setCurrentIdx] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [elapsedSec, setElapsedSec] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong' | 'correct'>('all');

  const submittedRef = useRef(false);
  submittedRef.current = submitted;

  useEffect(() => {
    if (!initialGrade) {
      const saved = getSavedGradePreference();
      if (typeof saved === 'number' && saved >= 6 && saved <= 12) {
        setSelectedGrade(saved);
      }
    }
  }, [initialGrade]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(HISTORY_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setHistory(parsed);
      }
    } catch {}
  }, []);

  const persistHistory = useCallback((next: SavedExamAttempt[]) => {
    setHistory(next);
    try {
      localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(next.slice(0, 40)));
    } catch {}
  }, []);

  const handleGradeChange = (g: number) => {
    setSelectedGrade(g);
    setSelectedType('all');
    saveGradePreference(g);
  };

  const gradePapers = useMemo(() => getExamPapersForGrade(selectedGrade), [selectedGrade]);

  const availableTypes = useMemo(() => {
    const seen = new Set<ExamType>();
    for (const p of gradePapers) seen.add(p.examType);
    return Array.from(seen);
  }, [gradePapers]);

  const filteredPapers = useMemo(() => {
    const q = query.trim().toLowerCase();
    return gradePapers.filter((p) => {
      if (selectedType !== 'all' && p.examType !== selectedType) return false;
      if (
        q &&
        !p.title.toLowerCase().includes(q) &&
        !p.sourceLabel.toLowerCase().includes(q) &&
        !p.codeLabel.toLowerCase().includes(q)
      ) {
        return false;
      }
      return true;
    });
  }, [gradePapers, selectedType, query]);

  const bestScoreByPaper = useMemo(() => {
    const map = new Map<string, SavedExamAttempt>();
    for (const item of history) {
      const prev = map.get(item.paperId);
      if (!prev || item.score10 > prev.score10) {
        map.set(item.paperId, item);
      }
    }
    return map;
  }, [history]);

  const startExam = (paper: ExamPaperSpec, mode: ExamMode) => {
    const built = buildExamQuestions(paper, questions, chapters);
    setActivePaper(paper);
    setActiveMode(mode);
    setExamQuestions(built);
    setAnswers({});
    setTfAnswers({});
    setShortAnswers({});
    setConfirmedShortIds({});
    setFlaggedIds({});
    setCurrentIdx(0);
    setSecondsLeft(paper.durationMinutes * 60);
    setElapsedSec(0);
    setSubmitted(false);
    setReviewFilter('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isShortAnswerMatch = useCallback((q: ExamQuestionSource, rawInput?: string): boolean => {
    const expectedRaw = (q.shortAnswer ?? '').trim().replace(',', '.');
    const actualRaw = (rawInput ?? '').trim().replace(',', '.');
    if (!expectedRaw || !actualRaw) return false;
    const expectedNum = Number(expectedRaw);
    const actualNum = Number(actualRaw);
    if (!Number.isNaN(expectedNum) && !Number.isNaN(actualNum)) {
      return Math.abs(expectedNum - actualNum) <= 0.011;
    }
    return expectedRaw.toLowerCase() === actualRaw.toLowerCase();
  }, []);

  const isQuestionAnswered = useCallback(
    (q: ExamQuestionSource): boolean => {
      if (q.questionFormat === 'true_false') {
        const picked = tfAnswers[q.id];
        return !!picked && [0, 1, 2, 3].every((idx) => picked[idx] !== undefined);
      }
      if (q.questionFormat === 'short_answer') {
        return (shortAnswers[q.id] ?? '').trim().length > 0;
      }
      return answers[q.id] !== undefined;
    },
    [answers, tfAnswers, shortAnswers]
  );

  const isQuestionCorrect = useCallback(
    (q: ExamQuestionSource): boolean => {
      if (q.questionFormat === 'true_false') {
        const stmts = q.tfStatements ?? [];
        const picked = tfAnswers[q.id] ?? {};
        return stmts.length > 0 && stmts.every((s, idx) => picked[idx] === s.is_correct);
      }
      if (q.questionFormat === 'short_answer') {
        return isShortAnswerMatch(q, shortAnswers[q.id]);
      }
      return answers[q.id] === q.correct_index;
    },
    [answers, tfAnswers, shortAnswers, isShortAnswerMatch]
  );

  const computeExamScore10 = useCallback(
    (list: ExamQuestionSource[]): { score10: number; correctCount: number } => {
      if (list.length === 0) return { score10: 0, correctCount: 0 };
      const hasFormat2025 = list.some(
        (q) => q.questionFormat === 'true_false' || q.questionFormat === 'short_answer'
      );
      let correctCount = 0;
      let totalScore = 0;

      for (const q of list) {
        const ok = isQuestionCorrect(q);
        if (ok) correctCount += 1;

        if (!hasFormat2025) continue;
        if (q.questionFormat === 'true_false') {
          const stmts = q.tfStatements ?? [];
          const picked = tfAnswers[q.id] ?? {};
          let matched = 0;
          stmts.forEach((s, idx) => {
            if (picked[idx] === s.is_correct) matched += 1;
          });
          if (matched === 1) totalScore += 0.1;
          else if (matched === 2) totalScore += 0.25;
          else if (matched === 3) totalScore += 0.5;
          else if (matched === 4) totalScore += 1.0;
        } else {
          if (ok) totalScore += 0.25;
        }
      }

      const score10 = hasFormat2025
        ? Math.min(10, Math.round(totalScore * 100) / 100)
        : Math.round((correctCount / list.length) * 1000) / 100;

      return { score10, correctCount };
    },
    [isQuestionCorrect, tfAnswers]
  );

  const submitExam = useCallback(() => {
    if (!activePaper || submittedRef.current) return;
    submittedRef.current = true;
    setSubmitted(true);

    const { score10, correctCount } = computeExamScore10(examQuestions);
    const total = Math.max(1, examQuestions.length);

    const attempt: SavedExamAttempt = {
      id: `${activePaper.id}-${Date.now()}`,
      paperId: activePaper.id,
      title: activePaper.title,
      gradeNumber: activePaper.gradeNumber,
      year: activePaper.year,
      examType: activePaper.examType,
      mode: activeMode,
      correctCount,
      totalQuestions: total,
      score10,
      timeSpentSec: elapsedSec,
      createdAt: new Date().toISOString(),
    };

    persistHistory([attempt, ...history]);
  }, [
    activePaper,
    activeMode,
    computeExamScore10,
    elapsedSec,
    examQuestions,
    history,
    persistHistory,
  ]);

  useEffect(() => {
    if (!activePaper || submitted) return;
    const id = setInterval(() => {
      setElapsedSec((prev) => prev + 1);
      if (activeMode === 'timed') {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            setTimeout(() => submitExam(), 0);
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);
    return () => clearInterval(id);
  }, [activePaper, activeMode, submitted, submitExam]);

  const exitExam = () => {
    setActivePaper(null);
    setExamQuestions([]);
    setSubmitted(false);
  };

  const currentQuestion = examQuestions[currentIdx] ?? null;
  const answeredCount = useMemo(
    () => examQuestions.filter((q) => isQuestionAnswered(q)).length,
    [examQuestions, isQuestionAnswered]
  );

  const summaryStats = useMemo(() => {
    if (!submitted || examQuestions.length === 0) return null;
    const { score10, correctCount: correct } = computeExamScore10(examQuestions);
    const byDiff: Record<DifficultyLevel, { total: number; correct: number }> = {
      nhan_biet: { total: 0, correct: 0 },
      thong_hieu: { total: 0, correct: 0 },
      van_dung: { total: 0, correct: 0 },
      van_dung_cao: { total: 0, correct: 0 },
    };
    const byChapter = new Map<string, { title: string; total: number; correct: number }>();

    for (const q of examQuestions) {
      const ok = isQuestionCorrect(q);
      byDiff[q.difficulty].total += 1;
      if (ok) byDiff[q.difficulty].correct += 1;

      const ch = byChapter.get(q.chapter_code) || {
        title: q.chapter_title,
        total: 0,
        correct: 0,
      };
      ch.total += 1;
      if (ok) ch.correct += 1;
      byChapter.set(q.chapter_code, ch);
    }

    return {
      correct,
      total: examQuestions.length,
      score10,
      byDiff,
      chapters: Array.from(byChapter.values()),
    };
  }, [submitted, examQuestions, computeExamScore10, isQuestionCorrect]);

  const filteredReviewQuestions = useMemo(() => {
    return examQuestions
      .map((q, idx) => ({ q, idx }))
      .filter(({ q }) => {
        if (reviewFilter === 'all') return true;
        const ok = isQuestionCorrect(q);
        return reviewFilter === 'correct' ? ok : !ok;
      });
  }, [examQuestions, reviewFilter, isQuestionCorrect]);

  const gradeHistory = useMemo(
    () => history.filter((h) => h.gradeNumber === selectedGrade),
    [history, selectedGrade]
  );

  return (
    <div className="min-h-screen bg-[#03050d] text-slate-100 selection:bg-cyan-400/30">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute top-1/3 right-1/5 h-[460px] w-[460px] rounded-full bg-amber-500/8 blur-[150px]" />
      </div>

      {/* Top Navigation */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#050814]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Trang chủ
            </Link>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-500/15 text-amber-300">
                <FileText className="h-4 w-4" />
              </div>
              <div>
                <h1 className="text-sm font-bold tracking-tight text-white sm:text-base">
                  Kho Đề Thi Vật Lí
                </h1>
                <p className="text-[11px] text-slate-400">
                  Ôn thi giữa kỳ, cuối kỳ, tuyển sinh 10 &amp; Tốt nghiệp THPT
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-8">
        {/* ================= ACTIVE EXAM OR RESULT VIEW ================= */}
        {activePaper ? (
          <div className="space-y-6">
            {/* Active Exam Sticky Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#0b1122]/90 p-4 backdrop-blur-xl">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-lg border border-white/15 bg-white/5 px-2 py-0.5 text-[11px] font-semibold text-slate-200">
                    Lớp {activePaper.gradeNumber}
                  </span>
                  <span
                    className={`rounded-lg border px-2 py-0.5 text-[11px] font-semibold ${
                      activeMode === 'timed'
                        ? 'border-cyan-400/30 bg-cyan-500/15 text-cyan-200'
                        : 'border-emerald-400/30 bg-emerald-500/15 text-emerald-200'
                    }`}
                  >
                    {activeMode === 'timed' ? 'Thi bấm giờ chuẩn' : 'Ôn tập từng câu'}
                  </span>
                </div>
                <h2 className="text-base font-bold text-white sm:text-lg">{activePaper.title}</h2>
                <p className="text-xs text-slate-400">
                  {activePaper.codeLabel} · {activePaper.sourceLabel}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div
                  className={`flex items-center gap-2 rounded-xl border px-3.5 py-2 font-mono text-sm font-bold ${
                    activeMode === 'timed' && !submitted && secondsLeft <= 300
                      ? 'border-rose-400/40 bg-rose-500/15 text-rose-200'
                      : 'border-white/10 bg-white/[0.04] text-cyan-200'
                  }`}
                >
                  <Clock className="h-4 w-4" />
                  {activeMode === 'timed' && !submitted
                    ? formatDuration(secondsLeft)
                    : formatDuration(elapsedSec)}
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-slate-200">
                  Đã làm <span className="font-bold text-cyan-300">{answeredCount}</span> /{' '}
                  {examQuestions.length}
                </div>

                {!submitted && (
                  <button
                    type="button"
                    onClick={submitExam}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Nộp bài
                  </button>
                )}

                <button
                  type="button"
                  onClick={exitExam}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-slate-300 transition hover:border-rose-400/40 hover:text-white"
                >
                  Thoát đề
                </button>
              </div>
            </div>

            {/* ================= RESULT SUMMARY VIEW ================= */}
            {submitted && summaryStats ? (
              <div className="space-y-6">
                <div className="grid gap-4 lg:grid-cols-3">
                  <div className="rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-cyan-500/10 via-[#0b1122] to-[#0b1122] p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                        Kết quả bài thi
                      </span>
                      <Award className="h-5 w-5 text-amber-300" />
                    </div>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-4xl font-black text-white">
                        {summaryStats.score10.toFixed(2)}
                      </span>
                      <span className="text-sm text-slate-400">/ 10 điểm</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-300">
                      Đúng{' '}
                      <span className="font-bold text-emerald-300">{summaryStats.correct}</span> /{' '}
                      {summaryStats.total} câu · Thời gian: {formatDuration(elapsedSec)}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => startExam(activePaper, activeMode)}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-cyan-400/35 bg-cyan-500/15 px-3.5 py-2 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-500/25"
                      >
                        <RotateCcw className="h-3.5 w-3.5" />
                        Làm lại đề này
                      </button>
                    </div>
                  </div>

                  {/* Difficulty Breakdown */}
                  <div className="rounded-2xl border border-white/10 bg-[#0b1122]/90 p-5">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Phân tích theo mức độ
                    </h3>
                    <div className="mt-3 space-y-2.5">
                      {(Object.keys(summaryStats.byDiff) as DifficultyLevel[]).map((diff) => {
                        const item = summaryStats.byDiff[diff];
                        if (item.total === 0) return null;
                        const pct = Math.round((item.correct / item.total) * 100);
                        return (
                          <div key={diff} className="space-y-1">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-slate-200">{DIFFICULTY_META[diff].label}</span>
                              <span className="font-mono text-slate-300">
                                {item.correct}/{item.total} ({pct}%)
                              </span>
                            </div>
                            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                              <div
                                className="h-full rounded-full bg-cyan-400"
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Chapter Breakdown */}
                  <div className="rounded-2xl border border-white/10 bg-[#0b1122]/90 p-5">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Phân tích theo chuyên đề
                    </h3>
                    <div className="mt-3 max-h-40 space-y-2 overflow-y-auto pr-1">
                      {summaryStats.chapters.map((ch) => {
                        const pct = Math.round((ch.correct / ch.total) * 100);
                        return (
                          <div
                            key={ch.title}
                            className="flex items-center justify-between gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1.5 text-xs"
                          >
                            <span className="truncate text-slate-200">{ch.title}</span>
                            <span
                              className={`shrink-0 font-mono font-semibold ${
                                pct >= 70 ? 'text-emerald-300' : 'text-amber-300'
                              }`}
                            >
                              {ch.correct}/{ch.total}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Review Filter & Detailed Solutions */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-base font-bold text-white">
                      Chi tiết đáp án &amp; Lời giải từng câu
                    </h3>
                    <div className="flex items-center gap-2">
                      {(
                        [
                          ['all', `Tất cả (${examQuestions.length})`],
                          ['wrong', `Câu sai (${examQuestions.length - summaryStats.correct})`],
                          ['correct', `Câu đúng (${summaryStats.correct})`],
                        ] as const
                      ).map(([key, label]) => (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setReviewFilter(key)}
                          className={`rounded-xl border px-3 py-1.5 text-xs font-medium transition ${
                            reviewFilter === key
                              ? 'border-cyan-400/50 bg-cyan-500/20 text-cyan-100'
                              : 'border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/[0.06]'
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {filteredReviewQuestions.map(({ q, idx }) => {
                      const picked = answers[q.id];
                      const isCorrect = isQuestionCorrect(q);
                      const wasAnswered = isQuestionAnswered(q);
                      return (
                        <div
                          key={q.id}
                          className={`rounded-2xl border p-5 ${
                            isCorrect
                              ? 'border-emerald-400/25 bg-emerald-500/[0.04]'
                              : 'border-rose-400/25 bg-rose-500/[0.04]'
                          }`}
                        >
                          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="rounded-lg bg-white/10 px-2.5 py-1 text-xs font-bold text-white">
                                Câu {idx + 1}
                              </span>
                              {q.questionFormat === 'true_false' && (
                                <span className="rounded-lg border border-violet-400/35 bg-violet-500/15 px-2 py-0.5 text-[11px] font-semibold text-violet-200">
                                  Đúng / Sai
                                </span>
                              )}
                              {q.questionFormat === 'short_answer' && (
                                <span className="rounded-lg border border-amber-400/35 bg-amber-500/15 px-2 py-0.5 text-[11px] font-semibold text-amber-200">
                                  Trả lời ngắn
                                </span>
                              )}
                              <span
                                className={`rounded-lg border px-2 py-0.5 text-[11px] font-medium ${
                                  DIFFICULTY_META[q.difficulty].badgeClass
                                }`}
                              >
                                {DIFFICULTY_META[q.difficulty].label}
                              </span>
                              <span className="text-xs text-slate-400">{q.chapter_title}</span>
                              {q.isSupplement && (
                                <span className="rounded-md border border-amber-400/35 bg-amber-500/15 px-2 py-0.5 text-[11px] font-medium text-amber-200">
                                  Bổ sung
                                </span>
                              )}
                            </div>
                            <span
                              className={`inline-flex items-center gap-1 text-xs font-semibold ${
                                isCorrect ? 'text-emerald-300' : 'text-rose-300'
                              }`}
                            >
                              {isCorrect ? (
                                <>
                                  <CheckCircle2 className="h-4 w-4" /> Chính xác
                                </>
                              ) : !wasAnswered ? (
                                <>
                                  <XCircle className="h-4 w-4" /> Chưa hoàn thành
                                </>
                              ) : (
                                <>
                                  <XCircle className="h-4 w-4" /> Sai
                                </>
                              )}
                            </span>
                          </div>

                          <div className="mb-4 text-sm leading-relaxed text-slate-100">
                            <RichPhysicsText text={q.question_text} />
                            <QuestionFigure q={q} />
                          </div>

                          {q.questionFormat === 'true_false' && q.tfStatements ? (
                            <div className="space-y-2">
                              {q.tfStatements.map((st, sIdx) => {
                                const userVal = tfAnswers[q.id]?.[sIdx];
                                const stOk = userVal === st.is_correct;
                                return (
                                  <div
                                    key={sIdx}
                                    className={`rounded-xl border p-3 text-xs sm:text-sm ${
                                      stOk
                                        ? 'border-emerald-400/40 bg-emerald-500/10'
                                        : 'border-rose-400/40 bg-rose-500/10'
                                    }`}
                                  >
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                      <div className="flex-1 text-slate-100">
                                        <span className="mr-2 font-bold">
                                          {String.fromCharCode(97 + sIdx)})
                                        </span>
                                        <RichPhysicsText text={st.text} />
                                      </div>
                                      <div className="flex items-center gap-2 text-xs font-semibold">
                                        <span className="text-slate-300">
                                          Bạn chọn:{' '}
                                          {userVal === undefined
                                            ? '—'
                                            : userVal
                                              ? 'Đúng'
                                              : 'Sai'}
                                        </span>
                                        <span className="text-emerald-300">
                                          Đáp án: {st.is_correct ? 'Đúng' : 'Sai'}
                                        </span>
                                      </div>
                                    </div>
                                    <p className="mt-1.5 text-xs text-slate-300">
                                      <RichPhysicsText text={st.explanation} />
                                    </p>
                                  </div>
                                );
                              })}
                            </div>
                          ) : q.questionFormat === 'short_answer' ? (
                            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                              <div className="rounded-xl border border-white/15 bg-white/[0.03] px-3.5 py-2">
                                Đáp số của bạn:{' '}
                                <span className="font-mono font-bold text-white">
                                  {(shortAnswers[q.id] ?? '').trim() || '—'}
                                </span>
                              </div>
                              <div className="rounded-xl border border-emerald-400/40 bg-emerald-500/15 px-3.5 py-2 text-emerald-100">
                                Đáp án chuẩn:{' '}
                                <span className="font-mono font-bold">{q.shortAnswer}</span>
                              </div>
                            </div>
                          ) : (
                            <div className="grid gap-2 sm:grid-cols-2">
                              {q.options.map((opt, optIdx) => {
                                const isRightOpt = optIdx === q.correct_index;
                                const isPickedOpt = optIdx === picked;
                                return (
                                  <div
                                    key={optIdx}
                                    className={`rounded-xl border px-3.5 py-2.5 text-xs sm:text-sm ${
                                      isRightOpt
                                        ? 'border-emerald-400/50 bg-emerald-500/15 text-emerald-100'
                                        : isPickedOpt
                                          ? 'border-rose-400/50 bg-rose-500/15 text-rose-100'
                                          : 'border-white/10 bg-white/[0.02] text-slate-300'
                                    }`}
                                  >
                                    <span className="mr-2 font-bold">
                                      {String.fromCharCode(65 + optIdx)}.
                                    </span>
                                    <RichPhysicsText text={opt} />
                                  </div>
                                );
                              })}
                            </div>
                          )}

                          {q.explanation && (
                            <div className="mt-3 rounded-xl border border-cyan-400/20 bg-cyan-500/[0.06] p-3 text-xs leading-relaxed text-slate-200">
                              <span className="font-semibold text-cyan-300">Lời giải: </span>
                              <RichPhysicsText text={q.explanation} />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : currentQuestion ? (
              /* ================= QUESTION SOLVING VIEW ================= */
              <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
                {/* Main Question Card */}
                <div className="rounded-2xl border border-white/10 bg-[#0b1122]/90 p-5 sm:p-6">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-lg border border-cyan-400/30 bg-cyan-500/15 px-2.5 py-1 text-xs font-bold text-cyan-200">
                        Câu {currentIdx + 1} / {examQuestions.length}
                      </span>
                      <span
                        className={`rounded-lg border px-2.5 py-1 text-xs font-medium ${
                          DIFFICULTY_META[currentQuestion.difficulty].badgeClass
                        }`}
                      >
                        {DIFFICULTY_META[currentQuestion.difficulty].label}
                      </span>
                      <span className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-300">
                        {currentQuestion.chapter_title}
                      </span>
                      {currentQuestion.isSupplement && (
                        <span className="rounded-md border border-amber-400/35 bg-amber-500/15 px-2 py-0.5 text-[11px] font-medium text-amber-200">
                          Bổ sung
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setFlaggedIds((prev) => ({
                          ...prev,
                          [currentQuestion.id]: !prev[currentQuestion.id],
                        }))
                      }
                      className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-medium transition ${
                        flaggedIds[currentQuestion.id]
                          ? 'border-amber-400/50 bg-amber-500/20 text-amber-200'
                          : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-amber-400/30'
                      }`}
                    >
                      <Flag className="h-3.5 w-3.5" />
                      {flaggedIds[currentQuestion.id] ? 'Đã đánh dấu' : 'Đánh dấu xem lại'}
                    </button>
                  </div>

                  <div className="mb-6 text-base leading-relaxed text-white sm:text-lg">
                    <RichPhysicsText text={currentQuestion.question_text} />
                    <QuestionFigure q={currentQuestion} />
                  </div>

                  {currentQuestion.questionFormat === 'true_false' && currentQuestion.tfStatements ? (
                    <div className="space-y-3">
                      {currentQuestion.tfStatements.map((st, sIdx) => {
                        const userVal = tfAnswers[currentQuestion.id]?.[sIdx];
                        const showInstant = activeMode === 'practice' && userVal !== undefined;
                        return (
                          <div
                            key={sIdx}
                            className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                          >
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                              <div className="text-sm leading-relaxed text-slate-100 sm:text-base">
                                <span className="mr-2 font-bold text-cyan-300">
                                  {String.fromCharCode(97 + sIdx)})
                                </span>
                                <RichPhysicsText text={st.text} />
                              </div>
                              <div className="flex shrink-0 items-center gap-2">
                                {[true, false].map((val) => {
                                  const selected = userVal === val;
                                  let btnCls =
                                    'border-white/15 bg-white/[0.04] text-slate-300 hover:border-cyan-400/40';
                                  if (showInstant) {
                                    if (st.is_correct === val) {
                                      btnCls =
                                        'border-emerald-400/60 bg-emerald-500/20 text-emerald-100';
                                    } else if (selected) {
                                      btnCls = 'border-rose-400/60 bg-rose-500/20 text-rose-100';
                                    }
                                  } else if (selected) {
                                    btnCls =
                                      'border-cyan-400/70 bg-cyan-500/25 text-white font-bold';
                                  }
                                  return (
                                    <button
                                      key={String(val)}
                                      type="button"
                                      onClick={() =>
                                        setTfAnswers((prev) => ({
                                          ...prev,
                                          [currentQuestion.id]: {
                                            ...(prev[currentQuestion.id] ?? {}),
                                            [sIdx]: val,
                                          },
                                        }))
                                      }
                                      className={`rounded-xl border px-3.5 py-1.5 text-xs font-semibold transition ${btnCls}`}
                                    >
                                      {val ? 'Đúng' : 'Sai'}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                            {showInstant && (
                              <p className="mt-2 border-t border-white/10 pt-2 text-xs text-slate-300">
                                <RichPhysicsText text={st.explanation} />
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : currentQuestion.questionFormat === 'short_answer' ? (
                    <div className="space-y-3">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Nhập đáp số của bạn (tối đa 4 ký tự số, có thể dùng dấu phẩy hoặc chấm):
                      </label>
                      <div className="flex flex-wrap items-center gap-3">
                        <input
                          type="text"
                          value={shortAnswers[currentQuestion.id] ?? ''}
                          onChange={(e) => {
                            const val = e.target.value;
                            setShortAnswers((prev) => ({
                              ...prev,
                              [currentQuestion.id]: val,
                            }));
                            setConfirmedShortIds((prev) =>
                              prev[currentQuestion.id]
                                ? { ...prev, [currentQuestion.id]: false }
                                : prev
                            );
                          }}
                          onKeyDown={(e) => {
                            if (
                              e.key === 'Enter' &&
                              (shortAnswers[currentQuestion.id] ?? '').trim().length > 0
                            ) {
                              e.preventDefault();
                              setConfirmedShortIds((prev) => ({
                                ...prev,
                                [currentQuestion.id]: true,
                              }));
                            }
                          }}
                          placeholder="Ví dụ: 672 hoặc 0,4"
                          className="w-full max-w-xs rounded-xl border border-cyan-400/35 bg-black/40 px-4 py-3 font-mono text-base font-bold text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                        />
                        <button
                          type="button"
                          disabled={(shortAnswers[currentQuestion.id] ?? '').trim().length === 0}
                          onClick={() =>
                            setConfirmedShortIds((prev) => ({
                              ...prev,
                              [currentQuestion.id]: true,
                            }))
                          }
                          className={`inline-flex items-center gap-1.5 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                            confirmedShortIds[currentQuestion.id]
                              ? 'border-emerald-400/50 bg-emerald-500/20 text-emerald-200'
                              : 'border-cyan-400/50 bg-cyan-500/20 text-cyan-100 hover:bg-cyan-500/30 disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-white/5 disabled:text-slate-500'
                          }`}
                        >
                          <CheckCircle2 className="h-4 w-4" />
                          {confirmedShortIds[currentQuestion.id] ? 'Đã xác nhận' : 'Xác nhận'}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {currentQuestion.options.map((opt, optIdx) => {
                        const picked = answers[currentQuestion.id];
                        const isPicked = picked === optIdx;
                        const showInstant = activeMode === 'practice' && picked !== undefined;
                        const isCorrectOpt = optIdx === currentQuestion.correct_index;

                        let btnClass =
                          'border-white/10 bg-white/[0.03] text-slate-200 hover:border-cyan-400/40 hover:bg-cyan-500/[0.07]';
                        if (showInstant) {
                          if (isCorrectOpt) {
                            btnClass = 'border-emerald-400/60 bg-emerald-500/15 text-emerald-100';
                          } else if (isPicked) {
                            btnClass = 'border-rose-400/60 bg-rose-500/15 text-rose-100';
                          }
                        } else if (isPicked) {
                          btnClass = 'border-cyan-400/70 bg-cyan-500/20 text-white shadow-inner';
                        }

                        return (
                          <button
                            key={optIdx}
                            type="button"
                            onClick={() =>
                              setAnswers((prev) => ({
                                ...prev,
                                [currentQuestion.id]: optIdx,
                              }))
                            }
                            className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left text-sm transition sm:text-base ${btnClass}`}
                          >
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-black/30 text-xs font-bold">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="flex-1 leading-relaxed">
                              <RichPhysicsText text={opt} />
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Practice Mode Instant Explanation */}
                  {activeMode === 'practice' &&
                    isQuestionAnswered(currentQuestion) &&
                    (currentQuestion.questionFormat !== 'short_answer' ||
                      !!confirmedShortIds[currentQuestion.id]) && (
                    <div className="mt-5 rounded-xl border border-cyan-400/25 bg-cyan-500/[0.07] p-4 text-xs leading-relaxed text-slate-200 sm:text-sm">
                      <div className="mb-1 font-bold text-cyan-300">
                        {isQuestionCorrect(currentQuestion)
                          ? 'Chính xác! Lời giải chi tiết:'
                          : currentQuestion.questionFormat === 'short_answer'
                            ? `Chưa chính xác (Đáp án đúng: ${currentQuestion.shortAnswer}):`
                            : currentQuestion.questionFormat === 'true_false'
                              ? 'Giải thích tổng hợp:'
                              : `Chưa chính xác (Đáp án đúng: ${String.fromCharCode(
                                  65 + currentQuestion.correct_index
                                )}):`}
                      </div>
                      <RichPhysicsText text={currentQuestion.explanation} />
                    </div>
                  )}

                  {/* Prev / Next Navigation */}
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                    <button
                      type="button"
                      disabled={currentIdx === 0}
                      onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-slate-200 transition hover:bg-white/[0.08] disabled:opacity-40"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" />
                      Câu trước
                    </button>

                    <button
                      type="button"
                      disabled={currentIdx >= examQuestions.length - 1}
                      onClick={() =>
                        setCurrentIdx((i) => Math.min(examQuestions.length - 1, i + 1))
                      }
                      className="inline-flex items-center gap-1.5 rounded-xl border border-cyan-400/35 bg-cyan-500/15 px-4 py-2 text-xs font-semibold text-cyan-100 transition hover:bg-cyan-500/25 disabled:opacity-40"
                    >
                      Câu tiếp theo
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                {/* OMR Answer Sheet Sidebar */}
                <aside className="h-fit rounded-2xl border border-white/10 bg-[#0b1122]/90 p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Phiếu trả lời (OMR)
                    </h3>
                    <span className="text-xs text-slate-400">
                      {answeredCount}/{examQuestions.length}
                    </span>
                  </div>

                  <div className="grid grid-cols-5 gap-2">
                    {examQuestions.map((q, idx) => {
                      const isCurrent = idx === currentIdx;
                      const isAnswered = isQuestionAnswered(q);
                      const isFlagged = !!flaggedIds[q.id];

                      let cellClass =
                        'border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/30';
                      if (isFlagged) {
                        cellClass = 'border-amber-400/60 bg-amber-500/20 text-amber-200';
                      } else if (isAnswered) {
                        cellClass = 'border-cyan-400/50 bg-cyan-500/20 text-cyan-100';
                      }

                      return (
                        <button
                          key={q.id}
                          type="button"
                          onClick={() => setCurrentIdx(idx)}
                          className={`relative flex h-9 items-center justify-center rounded-lg border text-xs font-bold transition ${cellClass} ${
                            isCurrent ? 'ring-2 ring-white/70 ring-offset-1 ring-offset-[#0b1122]' : ''
                          }`}
                        >
                          {idx + 1}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-4 space-y-1.5 border-t border-white/10 pt-3 text-[11px] text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-sm bg-cyan-500/40" /> Đã chọn đáp án
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-sm bg-amber-500/40" /> Đánh dấu xem lại
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-sm bg-white/10" /> Chưa trả lời
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={submitExam}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Nộp bài &amp; Chấm điểm
                  </button>
                </aside>
              </div>
            ) : null}
          </div>
        ) : (
          /* ================= EXAM BROWSER VIEW ================= */
          <div className="space-y-6">
            {/* Hero Filter Header */}
            <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0d152a]/90 via-[#090e1d]/95 to-[#060914] p-6 sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-200">
                    <Sparkles className="h-3.5 w-3.5" />
                    Ngân hàng Đề thi Lớp 6 – 12
                  </div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                    Luyện Đề Thi Theo Kỳ &amp; Theo Lớp
                  </h2>
                  <p className="max-w-2xl text-sm text-slate-300">
                    Chọn khối lớp và kỳ thi để làm bài theo chuẩn thời gian thật
                    hoặc ôn từng câu kèm lời giải chi tiết.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 sm:w-auto">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <div className="text-[11px] text-slate-400">Số đề Lớp {selectedGrade}</div>
                    <div className="mt-0.5 text-xl font-bold text-cyan-300">{gradePapers.length}</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <div className="text-[11px] text-slate-400">Đã hoàn thành</div>
                    <div className="mt-0.5 text-xl font-bold text-emerald-300">
                      {gradeHistory.length}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <div className="text-[11px] text-slate-400">Điểm cao nhất</div>
                    <div className="mt-0.5 text-xl font-bold text-amber-300">
                      {gradeHistory.length > 0
                        ? Math.max(...gradeHistory.map((h) => h.score10)).toFixed(1)
                        : '—'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Grade Selector */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="mr-1 inline-flex items-center gap-1 text-xs font-semibold text-slate-400">
                  <Layers className="h-3.5 w-3.5" /> Khối lớp:
                </span>
                {[6, 7, 8, 9, 10, 11, 12].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => handleGradeChange(g)}
                    className={`rounded-xl border px-3.5 py-1.5 text-xs font-bold transition ${
                      selectedGrade === g
                        ? 'border-cyan-400/60 bg-cyan-500/20 text-white shadow-sm shadow-cyan-500/20'
                        : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/25 hover:text-white'
                    }`}
                  >
                    Lớp {g}
                  </button>
                ))}
              </div>

              {/* Exam Type + Search Filters */}
              <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="mr-1 inline-flex items-center gap-1 text-xs text-slate-400">
                    <Filter className="h-3.5 w-3.5" /> Kỳ thi:
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedType('all')}
                    className={`rounded-lg border px-2.5 py-1 text-xs font-medium transition ${
                      selectedType === 'all'
                        ? 'border-cyan-400/50 bg-cyan-500/20 text-cyan-100'
                        : 'border-white/10 bg-white/[0.02] text-slate-300 hover:bg-white/[0.06]'
                    }`}
                  >
                    Tất cả
                  </button>
                  {availableTypes.map((tp) => (
                    <button
                      key={tp}
                      type="button"
                      onClick={() => setSelectedType(tp)}
                      className={`rounded-lg border px-2.5 py-1 text-xs font-medium transition ${
                        selectedType === tp
                          ? 'border-cyan-400/50 bg-cyan-500/20 text-cyan-100'
                          : 'border-white/10 bg-white/[0.02] text-slate-300 hover:bg-white/[0.06]'
                      }`}
                    >
                      {EXAM_TYPE_META[tp].shortLabel}
                    </button>
                  ))}
                </div>

                <div className="relative ml-auto min-w-[220px] flex-1 sm:max-w-xs">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Tìm đề theo tên, mã đề..."
                    className="w-full rounded-xl border border-white/10 bg-black/30 py-1.5 pl-8 pr-3 text-xs text-white placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none"
                  />
                </div>
              </div>
            </section>

            {/* Exam Paper Grid */}
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredPapers.map((paper) => {
                const typeMeta = EXAM_TYPE_META[paper.examType];
                const best = bestScoreByPaper.get(paper.id);
                return (
                  <div
                    key={paper.id}
                    className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0b1122]/85 p-5 transition hover:border-cyan-400/35"
                  >
                    <div>
                      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span
                            className={`rounded-lg border px-2 py-0.5 text-[11px] font-semibold ${typeMeta.badgeClass}`}
                          >
                            {typeMeta.shortLabel}
                          </span>
                        </div>
                        <span className="font-mono text-[11px] text-slate-400">
                          {paper.codeLabel}
                        </span>
                      </div>

                      <h3 className="text-base font-bold leading-snug text-white">{paper.title}</h3>
                      <p className="mt-1.5 text-xs text-slate-400">{paper.sourceLabel}</p>

                      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-300">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5 text-cyan-300" />
                          {paper.durationMinutes} phút
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <FileText className="h-3.5 w-3.5 text-amber-300" />
                          {paper.questionCount} câu hỏi
                        </span>
                        {best && (
                          <span className="ml-auto inline-flex items-center gap-1 rounded-lg border border-emerald-400/30 bg-emerald-500/15 px-2 py-0.5 text-[11px] font-semibold text-emerald-200">
                            <Award className="h-3 w-3" /> Cao nhất: {best.score10.toFixed(1)}đ
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-2 border-t border-white/10 pt-4">
                      <button
                        type="button"
                        onClick={() => startExam(paper, 'timed')}
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-2 text-xs font-bold text-white transition hover:brightness-110"
                      >
                        <Play className="h-3.5 w-3.5" />
                        Thi bấm giờ
                      </button>
                      <button
                        type="button"
                        onClick={() => startExam(paper, 'practice')}
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-emerald-400/40 hover:bg-emerald-500/10"
                      >
                        <BookOpen className="h-3.5 w-3.5 text-emerald-300" />
                        Ôn từng câu
                      </button>
                    </div>
                  </div>
                );
              })}
            </section>

            {/* Recent Attempts History */}
            {history.length > 0 && (
              <section className="rounded-2xl border border-white/10 bg-[#0b1122]/85 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <History className="h-4 w-4 text-cyan-300" />
                    <h3 className="text-sm font-bold text-white">Lịch sử làm đề gần đây</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => persistHistory([])}
                    className="inline-flex items-center gap-1 text-xs text-slate-400 transition hover:text-rose-300"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    Xóa lịch sử
                  </button>
                </div>

                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {history.slice(0, 6).map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-3.5 py-2.5"
                    >
                      <div className="min-w-0">
                        <div className="truncate text-xs font-semibold text-white">{item.title}</div>
                        <div className="mt-0.5 text-[11px] text-slate-400">
                          Lớp {item.gradeNumber} · {item.correctCount}/{item.totalQuestions} câu ·{' '}
                          {formatDuration(item.timeSpentSec)}
                        </div>
                      </div>
                      <span className="shrink-0 rounded-lg border border-cyan-400/30 bg-cyan-500/15 px-2.5 py-1 font-mono text-xs font-bold text-cyan-200">
                        {item.score10.toFixed(1)}đ
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

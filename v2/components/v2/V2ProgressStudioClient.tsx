'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import gsap from 'gsap';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Check,
  Clock,
  Flame,
  GraduationCap,
  Layers,
  LayoutGrid,
  Printer,
  RefreshCw,
  Search,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';
import type {
  ProgressDashboardData,
  TopicMasteryStatus,
  TopicProgressItem,
} from '@/types/cms';
import { GlobalSearchModal } from '@/components/GlobalSearchModal';
import {
  getSavedGradePreference,
  RETURN_TO_CURRICULUM_KEY,
  saveGradePreference,
  type GradeSelection,
} from '@/lib/grade-context';

export type ProgressStudioMode = 'overview' | 'heatmap' | 'analytics';

export interface V2ProgressStudioProps {
  initialData: ProgressDashboardData;
  initialGrade?: GradeSelection;
  hasExplicitGrade?: boolean;
}

const STUDIO_TABS: {
  id: ProgressStudioMode;
  label: string;
  shortLabel: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { id: 'overview', label: 'Tổng quan & Hôm nay', shortLabel: 'Tổng quan', icon: Sparkles },
  { id: 'heatmap', label: 'Ma trận Chủ đề & Check-in', shortLabel: '92 Chủ đề', icon: LayoutGrid },
  { id: 'analytics', label: 'Tháp Tư duy & Lịch sử', shortLabel: 'Phân tích', icon: BarChart3 },
];

const GRADE_OPTIONS: { value: GradeSelection; label: string }[] = [
  { value: 'all', label: 'Tất cả 6–12' },
  { value: 6, label: 'Lớp 6' },
  { value: 7, label: 'Lớp 7' },
  { value: 8, label: 'Lớp 8' },
  { value: 9, label: 'Lớp 9' },
  { value: 10, label: 'Lớp 10' },
  { value: 11, label: 'Lớp 11' },
  { value: 12, label: 'Lớp 12' },
];

const STATUS_META: Record<
  TopicMasteryStatus,
  {
    label: string;
    shortLabel: string;
    dotCls: string;
    badgeCls: string;
    cardCls: string;
  }
> = {
  mastered: {
    label: 'Đã tinh thông',
    shortLabel: 'Tinh thông',
    dotCls: 'bg-emerald-400',
    badgeCls: 'border-emerald-400/35 bg-emerald-500/15 text-emerald-200',
    cardCls: 'border-emerald-400/30 bg-emerald-500/[0.05] hover:border-emerald-400/55',
  },
  in_progress: {
    label: 'Đang rèn luyện',
    shortLabel: 'Đang luyện',
    dotCls: 'bg-amber-400',
    badgeCls: 'border-amber-400/35 bg-amber-500/15 text-amber-200',
    cardCls: 'border-amber-400/30 bg-amber-500/[0.05] hover:border-amber-400/55',
  },
  needs_review: {
    label: 'Cần ôn gấp',
    shortLabel: 'Cần ôn gấp',
    dotCls: 'bg-rose-400',
    badgeCls: 'border-rose-400/35 bg-rose-500/15 text-rose-200',
    cardCls: 'border-rose-400/35 bg-rose-500/[0.06] hover:border-rose-400/60',
  },
  not_started: {
    label: 'Chưa học',
    shortLabel: 'Chưa học',
    dotCls: 'bg-slate-400',
    badgeCls: 'border-white/10 bg-white/[0.04] text-slate-300',
    cardCls: 'border-white/[0.06] bg-[#040713]/85 hover:border-sky-400/40',
  },
};

export function V2ProgressStudioClient({
  initialData,
  initialGrade = 'all',
  hasExplicitGrade = false,
}: V2ProgressStudioProps) {
  const studioRootRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState<ProgressDashboardData>(initialData);
  const [activeMode, setActiveMode] = useState<ProgressStudioMode>('overview');
  const [selectedGrade, setSelectedGrade] = useState<GradeSelection>(initialGrade);
  const [selectedStatus, setSelectedStatus] = useState<TopicMasteryStatus | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loadingTopicId, setLoadingTopicId] = useState<number | null>(null);

  useEffect(() => {
    if (hasExplicitGrade) {
      saveGradePreference(initialGrade);
      return;
    }
    const saved = getSavedGradePreference();
    if (saved !== null) {
      setSelectedGrade(saved);
    }
  }, [hasExplicitGrade, initialGrade]);

  const handleGradeChange = (next: GradeSelection) => {
    setSelectedGrade(next);
    saveGradePreference(next);
    try {
      sessionStorage.setItem(RETURN_TO_CURRICULUM_KEY, String(next));
    } catch {}
  };

  const markReturnToCurriculum = () => {
    try {
      sessionStorage.setItem(RETURN_TO_CURRICULUM_KEY, String(selectedGrade));
    } catch {}
  };

  useEffect(() => {
    if (!studioRootRef.current) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('[data-pg-reveal]', {
          y: 14,
          opacity: 0,
          duration: 0.45,
          stagger: 0.05,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });
      });
    }, studioRootRef);
    return () => ctx.revert();
  }, []);

  const handleToggleCheckin = async (topic: TopicProgressItem) => {
    try {
      setLoadingTopicId(topic.topic_id);
      const nextCompleted = topic.status !== 'mastered';
      const res = await fetch('/api/progress/checkin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicId: topic.topic_id,
          completed: nextCompleted,
        }),
      });
      if (res.ok) {
        const json = await res.json();
        if (json.dashboard) {
          setData(json.dashboard);
        }
      }
    } finally {
      setLoadingTopicId(null);
    }
  };

  const filteredTopics = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return data.topics.filter((t) => {
      if (selectedGrade !== 'all' && t.grade_number !== selectedGrade) return false;
      if (selectedStatus !== 'all' && t.status !== selectedStatus) return false;
      if (q) {
        const match =
          t.title.toLowerCase().includes(q) ||
          t.code.toLowerCase().includes(q) ||
          t.chapter_title.toLowerCase().includes(q) ||
          t.chapter_code.toLowerCase().includes(q);
        if (!match) return false;
      }
      return true;
    });
  }, [data.topics, selectedGrade, selectedStatus, searchQuery]);

  const chapterGroups = useMemo(() => {
    const map = new Map<
      number,
      {
        chapter_id: number;
        chapter_code: string;
        chapter_title: string;
        grade_number: number;
        items: TopicProgressItem[];
      }
    >();
    for (const t of filteredTopics) {
      const existing = map.get(t.chapter_id);
      if (existing) {
        existing.items.push(t);
      } else {
        map.set(t.chapter_id, {
          chapter_id: t.chapter_id,
          chapter_code: t.chapter_code,
          chapter_title: t.chapter_title,
          grade_number: t.grade_number,
          items: [t],
        });
      }
    }
    return Array.from(map.values());
  }, [filteredTopics]);

  const { overall, gradeSummaries, difficultyBreakdown, recentAttempts, recommendations } = data;

  const chronologicalAttempts = useMemo(() => {
    return [...recentAttempts].slice(0, 12).reverse();
  }, [recentAttempts]);

  const dialCirc = 2 * Math.PI * 40;
  const dialOffset = dialCirc * (1 - Math.min(1, overall.completionPct / 100));

  return (
    <MotionConfig reducedMotion="user">
      <div
        ref={studioRootRef}
        className="relative min-h-screen bg-[#03050d] text-slate-100 print:bg-white print:text-slate-900"
      >
        {/* Ambient Obsidian Top Wash */}
        <div
          aria-hidden="true"
          className="no-print pointer-events-none fixed inset-x-0 top-0 z-0 h-[520px] opacity-80 print:hidden"
          style={{
            background:
              'radial-gradient(62% 85% at 15% 0%, rgba(56,189,248,0.12) 0%, transparent 65%), radial-gradient(50% 80% at 88% 5%, rgba(16,185,129,0.10) 0%, transparent 68%)',
          }}
        />

        {/* ================================================================
            1. STICKY SINGLE-ROW COMMAND BAR
        ================================================================ */}
        <header className="no-print sticky top-3 z-40 mx-auto max-w-[1440px] px-4 pt-3 sm:px-6 lg:px-8 print:hidden">
          <div className="rounded-2xl border border-white/[0.06] bg-[#070b1a]/90 px-3.5 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_50px_-15px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:px-5">
            <div className="flex items-center justify-between gap-2 lg:flex-nowrap">
              {/* Left Cluster */}
              <div className="flex min-w-0 items-center gap-2">
                <Link
                  href="/#curriculum-app"
                  scroll={false}
                  onClick={markReturnToCurriculum}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.04] px-2.5 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-200"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Giáo trình</span>
                </Link>

                <span className="hidden items-center gap-1 rounded-lg border border-sky-400/30 bg-sky-500/10 px-2 py-1 font-mono text-[10px] font-bold tracking-wider text-sky-300 xl:inline-flex">
                  <TrendingUp className="h-3 w-3" />
                  ANALYTICS 360°
                </span>

                <label className="relative flex shrink-0 items-center">
                  <span className="sr-only">Chọn khối lớp tiến độ</span>
                  <select
                    value={selectedGrade === 'all' ? 'all' : String(selectedGrade)}
                    onChange={(e) => {
                      const v = e.target.value;
                      handleGradeChange(v === 'all' ? 'all' : Number(v));
                    }}
                    className="rounded-xl border border-white/[0.06] bg-[#040713] px-2.5 py-1.5 font-mono text-xs font-bold text-amber-200 transition hover:border-amber-400/40"
                  >
                    {GRADE_OPTIONS.map((opt) => (
                      <option
                        key={String(opt.value)}
                        value={String(opt.value)}
                        className="bg-[#070b1a] text-slate-100"
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              {/* Center Cluster */}
              <nav
                aria-label="Phân hệ phân tích tiến độ"
                className="hidden items-center gap-1 rounded-xl border border-white/[0.06] bg-[#040713]/90 p-1 lg:flex"
              >
                {STUDIO_TABS.map((tab) => {
                  const Icon = tab.icon;
                  const active = activeMode === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveMode(tab.id)}
                      className={`relative flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
                        active ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="v2ProgressTabDesktop"
                          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                          className="absolute inset-0 rounded-lg border border-sky-400/40 bg-gradient-to-r from-sky-500/20 via-amber-400/10 to-emerald-500/20"
                        />
                      )}
                      <Icon
                        className={`relative z-10 h-3.5 w-3.5 shrink-0 ${
                          active ? 'text-sky-300' : 'text-slate-400'
                        }`}
                      />
                      <span className="relative z-10 whitespace-nowrap">{tab.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Right Cluster */}
              <div className="flex shrink-0 items-center gap-2">
                <div className="w-9 sm:w-32 lg:w-36 xl:w-44">
                  <GlobalSearchModal variant="glass" />
                </div>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.04] px-2.5 py-2 text-xs font-semibold text-slate-200 transition hover:border-sky-400/40 hover:text-sky-200"
                >
                  <Printer className="h-3.5 w-3.5 text-sky-300" />
                  <span className="hidden xl:inline">In A4</span>
                </button>
              </div>
            </div>

            {/* Mobile Mode Bar */}
            <div className="no-scrollbar mt-2.5 flex items-center gap-1.5 overflow-x-auto border-t border-white/[0.06] pt-2 lg:hidden">
              {STUDIO_TABS.map((tab) => {
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
                        layoutId="v2ProgressTabMobile"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        className="absolute inset-0 rounded-lg border border-sky-400/40 bg-sky-500/15"
                      />
                    )}
                    <Icon className={`relative z-10 h-3.5 w-3.5 ${active ? 'text-sky-300' : 'text-slate-400'}`} />
                    <span className="relative z-10 whitespace-nowrap">{tab.shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        {/* ================================================================
            MAIN WORKSPACE
        ================================================================ */}
        <main className="relative z-10 mx-auto max-w-[1440px] space-y-6 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          {/* --------------------------------------------------------------
              2. HEADER & 4 TELEMETRY KPI CARDS
          -------------------------------------------------------------- */}
          <section data-pg-reveal className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#060917]/90 p-6 sm:p-7 lg:col-span-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl"
              />
              <div className="relative z-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-sky-200">
                      <GraduationCap className="h-3.5 w-3.5 text-sky-300" />
                      Hồ sơ Năng lực Vật lý 6–12
                    </span>
                    <span className="rounded-full border border-white/[0.06] bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-slate-300">
                      {overall.totalTopics} chủ đề chuẩn GDPT 2018
                    </span>
                  </div>
                  <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                    Tiến độ Tinh thông &amp; Bản đồ Năng lực 4 Cấp độ
                  </h1>
                  <p className="max-w-xl text-sm leading-relaxed text-slate-300">
                    Theo dõi độ phủ kiến thức qua 7 khối lớp, phân tích tốc độ giải đề và tự động
                    xếp hạng 3 nhiệm vụ học tập cấp thiết nhất trong ngày.
                  </p>
                </div>

                {/* Circular Mastery Ring */}
                <div className="flex shrink-0 items-center gap-4 rounded-2xl border border-white/[0.06] bg-[#040713]/90 p-4">
                  <div className="relative h-24 w-24 shrink-0">
                    <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="8"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#34d399"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={dialCirc}
                        strokeDashoffset={dialOffset}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-mono text-xl font-black text-white">
                        {overall.completionPct}%
                      </span>
                      <span className="font-mono text-[9px] text-emerald-300">TINH THÔNG</span>
                    </div>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="font-mono text-emerald-300 font-bold">
                      {overall.completedTopics} vững
                    </div>
                    <div className="font-mono text-amber-300 font-bold">
                      {overall.inProgressTopics} đang luyện
                    </div>
                    <div className="font-mono text-rose-300 font-bold">
                      {overall.needsReviewTopics} cần ôn gấp
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: 3 Quick KPI Tiles */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:col-span-4 lg:grid-cols-1">
              <div className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-[#070b1a]/90 p-4">
                <div>
                  <div className="font-mono text-[10px] font-bold uppercase text-amber-300">
                    ĐIỂM TRUNG BÌNH
                  </div>
                  <div className="mt-0.5 font-mono text-2xl font-black text-white">
                    {overall.averageScore10 > 0 ? overall.averageScore10 : '—'}{' '}
                    <span className="text-xs font-semibold text-slate-400">/ 10</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {overall.totalAttempts} lượt nộp bài
                  </div>
                </div>
                <Target className="h-6 w-6 text-amber-300" />
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-[#070b1a]/90 p-4">
                <div>
                  <div className="font-mono text-[10px] font-bold uppercase text-sky-300">
                    TỐC ĐỘ PHẢN XẠ
                  </div>
                  <div className="mt-0.5 font-mono text-2xl font-black text-white">
                    {overall.avgSecPerQuestion}s{' '}
                    <span className="text-xs font-semibold text-slate-400">/ câu</span>
                  </div>
                  <div className="text-[11px] text-slate-400">Chuẩn thi BGD: ~100s/câu</div>
                </div>
                <Clock className="h-6 w-6 text-sky-300" />
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-[#070b1a]/90 p-4">
                <div>
                  <div className="font-mono text-[10px] font-bold uppercase text-rose-300">
                    KHẮC PHỤC LỖI SAI
                  </div>
                  <div className="mt-0.5 font-mono text-2xl font-black text-white">
                    {overall.mistakeResolutionPct}%
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Đã xử lý {overall.masteredMistakes} · Còn {overall.activeMistakes} câu
                  </div>
                </div>
                <Flame className="h-6 w-6 text-rose-300" />
              </div>
            </div>
          </section>

          {/* --------------------------------------------------------------
              3. STUDIO MODES
          -------------------------------------------------------------- */}
          <AnimatePresence mode="wait">
            {activeMode === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Recommendations: Today's 3 Priority Missions */}
                <section className="rounded-3xl border border-amber-400/25 bg-[#070b1a]/90 p-5 sm:p-7 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-300">
                        ĐỀ XUẤT CÁ NHÂN HÓA
                      </div>
                      <h2 className="text-lg font-extrabold text-white">
                        &ldquo;Hôm nay học gì?&rdquo; — 3 Nhiệm vụ Trọng tâm
                      </h2>
                    </div>
                    <span className="text-xs text-slate-400">
                      Tự động phân tích từ lịch sử điểm số &amp; lỗi sai hiện tại
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {recommendations.map((rec, idx) => {
                      const isUrgent = rec.type === 'urgent_fix';
                      const isReview = rec.type === 'spaced_review';
                      return (
                        <div
                          key={`${rec.topic_code}-${idx}`}
                          className={`flex flex-col justify-between space-y-4 rounded-2xl border p-4 sm:p-5 ${
                            isUrgent
                              ? 'border-rose-400/35 bg-rose-500/[0.06]'
                              : isReview
                              ? 'border-amber-400/35 bg-amber-500/[0.06]'
                              : 'border-sky-400/35 bg-sky-500/[0.06]'
                          }`}
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between gap-2">
                              <span
                                className={`rounded-md border px-2 py-0.5 font-mono text-[10px] font-bold ${
                                  isUrgent
                                    ? 'border-rose-400/35 bg-rose-500/15 text-rose-200'
                                    : isReview
                                    ? 'border-amber-400/35 bg-amber-500/15 text-amber-200'
                                    : 'border-sky-400/35 bg-sky-500/15 text-sky-200'
                                }`}
                              >
                                {rec.badge}
                              </span>
                              <span className="font-mono text-[11px] font-bold text-slate-400">
                                Lớp {rec.grade_number} · {rec.topic_code}
                              </span>
                            </div>
                            <h3 className="text-base font-extrabold leading-snug text-white">
                              {rec.title}
                            </h3>
                            <p className="text-xs leading-relaxed text-slate-300">{rec.reason}</p>
                          </div>

                          <Link
                            href={rec.href}
                            className="inline-flex items-center justify-between rounded-xl border border-white/10 bg-[#040713] px-3.5 py-2 text-xs font-extrabold text-white transition hover:border-amber-400/50 hover:text-amber-200"
                          >
                            <span>{rec.ctaLabel}</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* 7-Grade Coverage Breakdown */}
                <section className="rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-5 sm:p-7 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-sky-300">
                        ĐỘ PHỦ CHƯƠNG TRÌNH 6–12
                      </div>
                      <h2 className="text-lg font-extrabold text-white">
                        Tiến độ Tinh thông Từng Khối lớp
                      </h2>
                    </div>
                    <span className="text-xs text-slate-400">
                      Bấm vào một khối lớp để xem chi tiết ma trận bài học
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {gradeSummaries.map((gs) => {
                      const total = Math.max(1, gs.total_topics);
                      const masteredPct = (gs.mastered_topics / total) * 100;
                      const inProgPct = (gs.in_progress_topics / total) * 100;
                      const reviewPct = (gs.needs_review_topics / total) * 100;
                      const isActiveGrade = selectedGrade === gs.grade_number;
                      return (
                        <button
                          key={gs.grade_number}
                          type="button"
                          onClick={() => {
                            handleGradeChange(gs.grade_number);
                            setActiveMode('heatmap');
                          }}
                          className={`space-y-3 rounded-2xl border p-4 text-left transition ${
                            isActiveGrade
                              ? 'border-amber-400/50 bg-amber-500/10'
                              : 'border-white/[0.06] bg-[#040713]/85 hover:border-sky-400/40'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-extrabold text-white">
                              Lớp {gs.grade_number}
                            </span>
                            <span className="font-mono text-xs font-black text-emerald-300">
                              {gs.completion_pct}%
                            </span>
                          </div>

                          <div className="flex h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
                            <div className="bg-emerald-400" style={{ width: `${masteredPct}%` }} />
                            <div className="bg-amber-400" style={{ width: `${inProgPct}%` }} />
                            <div className="bg-rose-400" style={{ width: `${reviewPct}%` }} />
                          </div>

                          <div className="flex flex-wrap items-center justify-between gap-1 font-mono text-[10px] text-slate-400">
                            <span>
                              {gs.mastered_topics}/{gs.total_topics} bài vững
                            </span>
                            {gs.needs_review_topics > 0 && (
                              <span className="text-rose-300">
                                {gs.needs_review_topics} cần ôn
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </section>
              </motion.div>
            )}

            {activeMode === 'heatmap' && (
              <motion.div
                key="heatmap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
              >
                {/* Topic Filter Bar */}
                <div className="flex flex-col gap-3 rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                  <div className="relative flex-1">
                    <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Tìm chủ đề, mã bài hoặc chương..."
                      className="w-full rounded-xl border border-white/[0.06] bg-[#040713] py-2 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:border-sky-400/50 sm:text-sm"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5">
                    {(
                      [
                        { id: 'all', label: 'Tất cả' },
                        { id: 'mastered', label: 'Tinh thông' },
                        { id: 'in_progress', label: 'Đang luyện' },
                        { id: 'needs_review', label: 'Cần ôn gấp' },
                        { id: 'not_started', label: 'Chưa học' },
                      ] as const
                    ).map((st) => (
                      <button
                        key={st.id}
                        type="button"
                        onClick={() => setSelectedStatus(st.id)}
                        className={`rounded-lg border px-2.5 py-1.5 text-xs font-bold transition ${
                          selectedStatus === st.id
                            ? 'border-amber-400/50 bg-amber-500/20 text-amber-200'
                            : 'border-white/[0.06] bg-white/[0.03] text-slate-400 hover:text-white'
                        }`}
                      >
                        {st.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Chapter Groups & Topic Check-in Matrix */}
                {chapterGroups.length === 0 ? (
                  <div className="rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-10 text-center text-sm text-slate-400">
                    Không có chủ đề nào khớp bộ lọc trạng thái hoặc từ khóa tìm kiếm.
                  </div>
                ) : (
                  <div className="space-y-5">
                    {chapterGroups.map((group) => (
                      <div
                        key={group.chapter_id}
                        className="space-y-4 rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-5 sm:p-6"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                          <div className="flex items-center gap-2">
                            <span className="rounded-md border border-sky-400/30 bg-sky-500/10 px-2.5 py-0.5 font-mono text-[11px] font-bold text-sky-300">
                              Lớp {group.grade_number} · {group.chapter_code}
                            </span>
                            <h3 className="text-base font-extrabold text-white">
                              {group.chapter_title}
                            </h3>
                          </div>
                          <Link
                            href={`/chapter/${group.chapter_id}`}
                            className="text-xs font-bold text-amber-300 hover:underline"
                          >
                            Mở trang chương →
                          </Link>
                        </div>

                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                          {group.items.map((tp) => {
                            const meta = STATUS_META[tp.status];
                            const isMastered = tp.status === 'mastered';
                            const isLoading = loadingTopicId === tp.topic_id;
                            return (
                              <div
                                key={tp.topic_id}
                                className={`flex flex-col justify-between space-y-3 rounded-2xl border p-4 transition ${meta.cardCls}`}
                              >
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between gap-2">
                                    <span className="font-mono text-[11px] font-bold text-sky-300">
                                      {tp.code}
                                    </span>
                                    <span
                                      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold ${meta.badgeCls}`}
                                    >
                                      <span className={`h-1.5 w-1.5 rounded-full ${meta.dotCls}`} />
                                      {meta.shortLabel}
                                    </span>
                                  </div>

                                  <Link
                                    href={`/topic/${tp.topic_id}`}
                                    className="block text-sm font-extrabold leading-snug text-white transition hover:text-amber-200"
                                  >
                                    {tp.title}
                                  </Link>

                                  <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] text-slate-400">
                                    <span>{tp.formula_count} công thức</span>
                                    <span>·</span>
                                    <span>{tp.question_count} câu hỏi</span>
                                    {tp.best_score_pct !== null && (
                                      <>
                                        <span>·</span>
                                        <span className="text-emerald-300 font-bold">
                                          Cao nhất {tp.best_score_pct}%
                                        </span>
                                      </>
                                    )}
                                    {tp.active_mistakes > 0 && (
                                      <span className="rounded bg-rose-500/20 px-1.5 py-0.5 text-rose-200 font-bold">
                                        {tp.active_mistakes} lỗi sai
                                      </span>
                                    )}
                                  </div>
                                </div>

                                <div className="flex items-center justify-between gap-2 border-t border-white/[0.06] pt-2.5">
                                  <Link
                                    href={`/topic/${tp.topic_id}`}
                                    className="text-xs font-bold text-sky-300 hover:underline"
                                  >
                                    Học bài →
                                  </Link>

                                  <button
                                    type="button"
                                    disabled={isLoading}
                                    onClick={() => handleToggleCheckin(tp)}
                                    className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-[11px] font-bold transition ${
                                      isMastered
                                        ? 'border-emerald-400/40 bg-emerald-500/20 text-emerald-200 hover:bg-emerald-500/30'
                                        : 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-amber-400/45 hover:text-amber-200'
                                    }`}
                                  >
                                    {isLoading ? (
                                      <RefreshCw className="h-3 w-3 animate-spin" />
                                    ) : (
                                      <Check className="h-3 w-3" />
                                    )}
                                    <span>{isMastered ? 'Đã học xong' : 'Check-in xong'}</span>
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {activeMode === 'analytics' && (
              <motion.div
                key="analytics"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 gap-6 lg:grid-cols-12"
              >
                {/* Left 5 Cols: 4 Cognitive Levels Pyramid */}
                <section className="space-y-4 rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-5 sm:p-6 lg:col-span-5">
                  <div>
                    <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-300">
                      CHUẨN BỘ GD&amp;ĐT
                    </div>
                    <h2 className="text-lg font-extrabold text-white">
                      Tháp Năng lực 4 Cấp độ Tư duy
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {difficultyBreakdown.map((item, idx) => (
                      <div
                        key={item.difficulty}
                        className="space-y-2 rounded-2xl border border-white/[0.06] bg-[#040713]/90 p-4"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <span className="font-mono text-[10px] font-bold text-sky-300">
                              MỨC {idx + 1} · {item.targetRangeLabel}
                            </span>
                            <div className="text-sm font-extrabold text-white">{item.label}</div>
                          </div>
                          <span className="font-mono text-lg font-black text-amber-200">
                            {item.accuracy_pct}%
                          </span>
                        </div>

                        <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-sky-400 via-amber-400 to-emerald-400 transition-all duration-500"
                            style={{ width: `${Math.max(4, item.accuracy_pct)}%` }}
                          />
                        </div>

                        <div className="flex items-center justify-between font-mono text-[11px] text-slate-400">
                          <span>Ngân hàng: {item.total_questions_in_bank} câu</span>
                          <span>
                            Đúng {item.correct_count}/{item.answered_count} câu đã làm
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Right 7 Cols: Recent Quiz Attempts & SVG Trend */}
                <section className="space-y-4 rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-5 sm:p-6 lg:col-span-7">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                        BIẾN ĐỘNG ĐIỂM SỐ
                      </div>
                      <h2 className="text-lg font-extrabold text-white">
                        Xu hướng &amp; Lịch sử Nộp bài Gần đây
                      </h2>
                    </div>
                    <span className="font-mono text-xs text-slate-400">
                      {recentAttempts.length} bài gần nhất
                    </span>
                  </div>

                  {chronologicalAttempts.length > 1 && (
                    <div className="rounded-2xl border border-white/[0.06] bg-[#040713]/90 p-4">
                      <svg viewBox="0 0 420 120" className="h-28 w-full overflow-visible">
                        {[10, 5, 0].map((scoreTick) => {
                          const y = 10 + ((10 - scoreTick) / 10) * 90;
                          return (
                            <g key={scoreTick}>
                              <line
                                x1="28"
                                x2="405"
                                y1={y}
                                y2={y}
                                stroke="rgba(255,255,255,0.08)"
                                strokeDasharray="3 4"
                              />
                              <text
                                x="2"
                                y={y + 3}
                                fontSize="9"
                                fill="rgba(148,163,184,0.75)"
                                fontFamily="monospace"
                              >
                                {scoreTick}đ
                              </text>
                            </g>
                          );
                        })}
                        <polyline
                          fill="none"
                          stroke="#38bdf8"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          points={chronologicalAttempts
                            .map((att, idx) => {
                              const x =
                                36 +
                                (idx / Math.max(1, chronologicalAttempts.length - 1)) * 360;
                              const y = 10 + ((10 - Math.min(10, att.score_10)) / 10) * 90;
                              return `${x.toFixed(1)},${y.toFixed(1)}`;
                            })
                            .join(' ')}
                        />
                        {chronologicalAttempts.map((att, idx) => {
                          const x =
                            36 +
                            (idx / Math.max(1, chronologicalAttempts.length - 1)) * 360;
                          const y = 10 + ((10 - Math.min(10, att.score_10)) / 10) * 90;
                          return (
                            <circle
                              key={att.id}
                              cx={x}
                              cy={y}
                              r="4"
                              fill={att.score_10 >= 8 ? '#34d399' : '#fbbf24'}
                              stroke="#03050d"
                              strokeWidth="1.5"
                            />
                          );
                        })}
                      </svg>
                    </div>
                  )}

                  {recentAttempts.length === 0 ? (
                    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center text-sm text-slate-400">
                      Chưa có lịch sử làm bài. Hãy vào một bài học hoặc chương bất kỳ để bắt đầu
                      làm đề thi thử!
                    </div>
                  ) : (
                    <div className="space-y-2.5 max-h-[420px] overflow-y-auto pr-1">
                      {recentAttempts.map((att) => (
                        <Link
                          key={att.id}
                          href={
                            att.scope_type === 'topic'
                              ? `/topic/${att.scope_id}?tab=exam`
                              : `/chapter/${att.scope_id}?tab=exam`
                          }
                          className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/[0.06] bg-[#040713]/90 p-3.5 transition hover:border-sky-400/40"
                        >
                          <div className="min-w-0 space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span className="rounded border border-white/[0.06] bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] font-bold text-sky-300">
                                Lớp {att.grade_number} · {att.scope_code}
                              </span>
                              <span className="font-mono text-[10px] text-slate-400">
                                {att.avg_sec_per_question}s/câu
                              </span>
                            </div>
                            <div className="text-xs font-extrabold text-white sm:text-sm">
                              {att.scope_title}
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="font-mono text-base font-black text-emerald-300">
                              {att.score_10.toFixed(1)} điểm
                            </div>
                            <div className="font-mono text-[10px] text-slate-400">
                              {att.score}/{att.total_questions} câu
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </section>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </MotionConfig>
  );
}

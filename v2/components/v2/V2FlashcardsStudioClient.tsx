'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import gsap from 'gsap';
import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  Calculator,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Compass,
  ExternalLink,
  Eye,
  EyeOff,
  Flame,
  Keyboard,
  Layers,
  LayoutGrid,
  Lightbulb,
  RefreshCw,
  RotateCcw,
  Ruler,
  Search,
  Shuffle,
  Sparkles,
  XCircle,
} from 'lucide-react';
import type { FlashcardDeckData, FlashcardItem, FlashcardRating } from '@/types/cms';
import { KatexFormula, RichPhysicsText } from '@/components/KatexRenderer';
import { GlobalSearchModal } from '@/components/GlobalSearchModal';
import {
  getSavedGradePreference,
  RETURN_TO_CURRICULUM_KEY,
  saveGradePreference,
  type GradeSelection,
} from '@/lib/grade-context';

export type FlashcardStudioMode = 'stage' | 'grid';

export interface V2FlashcardsStudioProps {
  initialData: FlashcardDeckData;
  initialGrade?: GradeSelection;
  hasExplicitGrade?: boolean;
}

const STUDIO_TABS: {
  id: FlashcardStudioMode;
  label: string;
  shortLabel: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { id: 'stage', label: 'Buồng Lật thẻ 3D', shortLabel: 'Lật thẻ', icon: Layers },
  { id: 'grid', label: 'Ma trận Toàn bộ Thẻ', shortLabel: 'Danh sách', icon: LayoutGrid },
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

const RATING_META: Record<
  FlashcardRating,
  {
    label: string;
    badgeCls: string;
    borderCls: string;
    dotCls: string;
  }
> = {
  mastered: {
    label: 'Đã thuộc lòng',
    badgeCls: 'border-emerald-400/35 bg-emerald-500/15 text-emerald-200',
    borderCls: 'border-emerald-400/35',
    dotCls: 'bg-emerald-400',
  },
  hard: {
    label: 'Hơi nhớ',
    badgeCls: 'border-amber-400/35 bg-amber-500/15 text-amber-200',
    borderCls: 'border-amber-400/35',
    dotCls: 'bg-amber-400',
  },
  forgot: {
    label: 'Quên rồi',
    badgeCls: 'border-rose-400/35 bg-rose-500/15 text-rose-200',
    borderCls: 'border-rose-400/35',
    dotCls: 'bg-rose-400',
  },
  unseen: {
    label: 'Thẻ mới',
    badgeCls: 'border-sky-400/30 bg-sky-500/15 text-sky-200',
    borderCls: 'border-white/[0.06]',
    dotCls: 'bg-slate-400',
  },
};

export function V2FlashcardsStudioClient({
  initialData,
  initialGrade = 'all',
  hasExplicitGrade = false,
}: V2FlashcardsStudioProps) {
  const studioRootRef = useRef<HTMLDivElement>(null);

  const [cards, setCards] = useState<FlashcardItem[]>(initialData.cards);
  const [activeMode, setActiveMode] = useState<FlashcardStudioMode>('stage');
  const [selectedGrade, setSelectedGrade] = useState<GradeSelection>(initialGrade);
  const [selectedChapterId, setSelectedChapterId] = useState<number | 'all'>('all');
  const [selectedType, setSelectedType] = useState<'all' | 'formula' | 'quantity'>('all');
  const [selectedStatus, setSelectedStatus] = useState<
    'all' | 'need_review' | 'forgot' | 'hard' | 'mastered'
  >('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isShuffled, setIsShuffled] = useState<boolean>(false);
  const [shuffleSeed, setShuffleSeed] = useState<number>(1);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [showHintsOnFront, setShowHintsOnFront] = useState<boolean>(true);
  const [savingKey, setSavingKey] = useState<string | null>(null);
  const [sessionReviewedCount, setSessionReviewedCount] = useState<number>(0);
  const [confirmingReset, setConfirmingReset] = useState<boolean>(false);
  const [resetting, setResetting] = useState<boolean>(false);
  const [toast, setToast] = useState<{
    text: string;
    tone: 'emerald' | 'amber' | 'rose' | 'sky';
  } | null>(null);

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
        gsap.from('[data-fc-reveal]', {
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

  const showToast = useCallback(
    (text: string, tone: 'emerald' | 'amber' | 'rose' | 'sky' = 'sky') => {
      setToast({ text, tone });
      setTimeout(() => {
        setToast((prev) => (prev?.text === text ? null : prev));
      }, 2200);
    },
    []
  );

  // Chapters filtered by selectedGrade
  const availableChapters = useMemo(() => {
    if (selectedGrade === 'all') return initialData.chapters;
    return initialData.chapters.filter((ch) => ch.grade_number === selectedGrade);
  }, [initialData.chapters, selectedGrade]);

  useEffect(() => {
    if (
      selectedChapterId !== 'all' &&
      !availableChapters.some((ch) => ch.id === selectedChapterId)
    ) {
      setSelectedChapterId('all');
    }
  }, [selectedGrade, selectedChapterId, availableChapters]);

  // Filtered & optionally shuffled deck
  const filteredCards = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    let list = cards.filter((c) => {
      if (selectedGrade !== 'all' && c.grade_number !== selectedGrade) return false;
      if (selectedChapterId !== 'all' && c.chapter_id !== selectedChapterId) return false;
      if (selectedType !== 'all' && c.card_type !== selectedType) return false;

      if (selectedStatus === 'need_review') {
        if (c.rating === 'mastered') return false;
      } else if (selectedStatus !== 'all') {
        if (c.rating !== selectedStatus) return false;
      }

      if (q) {
        const hay =
          `${c.front_title} ${c.topic_title} ${c.topic_code} ${c.plain_expression || ''} ${c.si_unit || ''} ${c.symbol || ''} ${c.description || ''}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    if (isShuffled) {
      const copy = [...list];
      let s = shuffleSeed;
      for (let i = copy.length - 1; i > 0; i--) {
        s = (s * 1664525 + 1013904223) % 4294967296;
        const j = s % (i + 1);
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      list = copy;
    }

    return list;
  }, [
    cards,
    selectedGrade,
    selectedChapterId,
    selectedType,
    selectedStatus,
    searchQuery,
    isShuffled,
    shuffleSeed,
  ]);

  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [
    selectedGrade,
    selectedChapterId,
    selectedType,
    selectedStatus,
    searchQuery,
    isShuffled,
    shuffleSeed,
  ]);

  const activeCard =
    filteredCards.length > 0
      ? filteredCards[Math.min(currentIndex, filteredCards.length - 1)]
      : null;

  const deckStats = useMemo(() => {
    const scopeCards =
      selectedGrade === 'all' ? cards : cards.filter((c) => c.grade_number === selectedGrade);
    let mastered = 0;
    let hard = 0;
    let forgot = 0;
    let unseen = 0;
    let formulaCount = 0;
    let quantityCount = 0;

    for (const c of scopeCards) {
      if (c.card_type === 'formula') formulaCount++;
      else quantityCount++;

      if (c.rating === 'mastered') mastered++;
      else if (c.rating === 'hard') hard++;
      else if (c.rating === 'forgot') forgot++;
      else unseen++;
    }
    const total = scopeCards.length;
    const pct = total > 0 ? Math.round((mastered / total) * 100) : 0;
    return { total, mastered, hard, forgot, unseen, pct, formulaCount, quantityCount };
  }, [cards, selectedGrade]);

  const handlePrev = useCallback(() => {
    if (filteredCards.length === 0) return;
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredCards.length - 1));
  }, [filteredCards.length]);

  const handleNext = useCallback(() => {
    if (filteredCards.length === 0) return;
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev < filteredCards.length - 1 ? prev + 1 : 0));
  }, [filteredCards.length]);

  const handleRateCard = useCallback(
    async (rating: FlashcardRating) => {
      if (!activeCard || savingKey) return;
      const targetKey = activeCard.card_key;
      setSavingKey(targetKey);
      setSessionReviewedCount((c) => c + 1);

      if (rating === 'mastered') {
        showToast('Đã ghi nhận Thuộc lòng (+1)', 'emerald');
      } else if (rating === 'hard') {
        showToast('Đã lưu vào nhóm Hơi nhớ để ôn lại', 'amber');
      } else {
        showToast('Đã đánh dấu Quên rồi — ưu tiên ôn lại', 'rose');
      }

      setCards((prev) =>
        prev.map((c) =>
          c.card_key === targetKey
            ? {
                ...c,
                rating,
                review_count: c.review_count + 1,
                updated_at: new Date().toISOString(),
              }
            : c
        )
      );

      try {
        await fetch('/api/flashcards/review', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ cardKey: targetKey, rating }),
        });
      } catch {
        // Ignore network failure
      } finally {
        setSavingKey(null);
        setIsFlipped(false);
        if (filteredCards.length > 1) {
          setCurrentIndex((prev) => (prev < filteredCards.length - 1 ? prev + 1 : 0));
        }
      }
    },
    [activeCard, savingKey, filteredCards.length, showToast]
  );

  const handleResetProgress = async () => {
    if (!confirmingReset) {
      setConfirmingReset(true);
      setTimeout(() => setConfirmingReset(false), 3500);
      return;
    }

    setConfirmingReset(false);
    setResetting(true);
    try {
      const gradeParam = typeof selectedGrade === 'number' ? selectedGrade : undefined;
      const res = await fetch('/api/flashcards/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'reset', gradeNumber: gradeParam }),
      });
      if (res.ok) {
        setCards((prev) =>
          prev.map((c) =>
            gradeParam === undefined || c.grade_number === gradeParam
              ? { ...c, rating: 'unseen', review_count: 0, updated_at: null }
              : c
          )
        );
        showToast(
          gradeParam
            ? `Đã đặt lại tiến độ thẻ Lớp ${gradeParam}`
            : 'Đã đặt lại tiến độ toàn bộ thẻ 6–12',
          'sky'
        );
      }
    } finally {
      setResetting(false);
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    if (activeMode !== 'stage') return;
    function onKeyDown(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped((f) => !f);
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === '1') {
        e.preventDefault();
        handleRateCard('forgot');
      } else if (e.key === '2') {
        e.preventDefault();
        handleRateCard('hard');
      } else if (e.key === '3') {
        e.preventDefault();
        handleRateCard('mastered');
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeMode, handleNext, handlePrev, handleRateCard]);

  const progressInFilterPct =
    filteredCards.length > 0
      ? Math.round(((Math.min(currentIndex, filteredCards.length - 1) + 1) / filteredCards.length) * 100)
      : 0;

  return (
    <MotionConfig reducedMotion="user">
      <div ref={studioRootRef} className="relative min-h-screen bg-[#03050d] text-slate-100">
        {/* Ambient Obsidian Top Wash */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[520px] opacity-80"
          style={{
            background:
              'radial-gradient(62% 85% at 15% 0%, rgba(16,185,129,0.10) 0%, transparent 65%), radial-gradient(50% 80% at 88% 5%, rgba(245,158,11,0.11) 0%, transparent 68%)',
          }}
        />

        {/* ================================================================
            1. STICKY SINGLE-ROW COMMAND BAR
        ================================================================ */}
        <header className="sticky top-3 z-40 mx-auto max-w-[1440px] px-4 pt-3 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/[0.06] bg-[#070b1a]/90 px-3.5 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_50px_-15px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:px-5">
            <div className="flex items-center justify-between gap-2 lg:flex-nowrap">
              {/* Left: Return to Curriculum + Badge + Synced Grade Selector */}
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

                <span className="hidden items-center gap-1 rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 font-mono text-[10px] font-bold tracking-wider text-emerald-300 xl:inline-flex">
                  <Sparkles className="h-3 w-3" />
                  ACTIVE RECALL
                </span>

                <label className="relative flex shrink-0 items-center">
                  <span className="sr-only">Chọn khối lớp flashcard</span>
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

              {/* Center: Desktop Mode Tabs */}
              <nav
                aria-label="Chế độ ôn tập Flashcard"
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
                          layoutId="v2FlashcardsTabDesktop"
                          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                          className="absolute inset-0 rounded-lg border border-amber-400/40 bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-emerald-500/20"
                        />
                      )}
                      <Icon
                        className={`relative z-10 h-3.5 w-3.5 shrink-0 ${
                          active ? 'text-amber-300' : 'text-slate-400'
                        }`}
                      />
                      <span className="relative z-10 whitespace-nowrap">{tab.label}</span>
                      <span className="relative z-10 rounded-md bg-white/[0.05] px-1.5 py-0.5 font-mono text-[10px] text-slate-300">
                        {filteredCards.length}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Right: Global Search + Reset */}
              <div className="flex shrink-0 items-center gap-2">
                <div className="w-9 sm:w-32 lg:w-36 xl:w-44">
                  <GlobalSearchModal variant="glass" />
                </div>

                <button
                  type="button"
                  onClick={handleResetProgress}
                  disabled={resetting}
                  className={`inline-flex items-center gap-1.5 rounded-xl border px-2.5 py-2 text-xs font-bold transition ${
                    confirmingReset
                      ? 'border-rose-400/50 bg-rose-500/20 text-rose-200'
                      : 'border-white/[0.06] bg-white/[0.04] text-slate-200 hover:border-rose-400/40 hover:text-rose-200'
                  }`}
                >
                  <RefreshCw className={`h-3.5 w-3.5 ${resetting ? 'animate-spin' : ''}`} />
                  <span className="hidden xl:inline">
                    {confirmingReset ? 'Bấm nữa để đặt lại' : 'Đặt lại tiến độ'}
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile Mode Bar */}
            <div className="mt-2.5 flex items-center gap-1.5 border-t border-white/[0.06] pt-2 lg:hidden">
              {STUDIO_TABS.map((tab) => {
                const Icon = tab.icon;
                const active = activeMode === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveMode(tab.id)}
                    className={`relative flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
                      active ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="v2FlashcardsTabMobile"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        className="absolute inset-0 rounded-lg border border-amber-400/40 bg-amber-500/15"
                      />
                    )}
                    <Icon className={`relative z-10 h-3.5 w-3.5 ${active ? 'text-amber-300' : 'text-slate-400'}`} />
                    <span className="relative z-10">{tab.shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        {/* Floating Feedback Toast */}
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className={`fixed right-5 top-20 z-50 rounded-2xl border px-4 py-2.5 text-xs font-bold shadow-2xl backdrop-blur-xl ${
                toast.tone === 'emerald'
                  ? 'border-emerald-400/40 bg-emerald-500/20 text-emerald-100'
                  : toast.tone === 'amber'
                  ? 'border-amber-400/40 bg-amber-500/20 text-amber-100'
                  : toast.tone === 'rose'
                  ? 'border-rose-400/40 bg-rose-500/20 text-rose-100'
                  : 'border-sky-400/40 bg-sky-500/20 text-sky-100'
              }`}
            >
              {toast.text}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================================================================
            MAIN WORKSPACE
        ================================================================ */}
        <main className="relative z-10 mx-auto max-w-[1440px] space-y-6 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          {/* --------------------------------------------------------------
              2. HEADER & MASTERY STATS BENTO
          -------------------------------------------------------------- */}
          <section data-fc-reveal className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#060917]/90 p-6 sm:p-7 lg:col-span-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"
              />
              <div className="relative z-10 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-amber-200">
                    <Flame className="h-3.5 w-3.5 text-amber-300" />
                    Spaced Repetition · {selectedGrade === 'all' ? 'Lớp 6–12' : `Lớp ${selectedGrade}`}
                  </span>
                  <span className="rounded-full border border-white/[0.06] bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-slate-300">
                    {deckStats.formulaCount} công thức · {deckStats.quantityCount} đại lượng SI
                  </span>
                  {sessionReviewedCount > 0 && (
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] text-emerald-300">
                      Phiên này: +{sessionReviewedCount} lượt lật
                    </span>
                  )}
                </div>

                <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Flashcard Ghi nhớ Chủ động Công thức &amp; Đơn vị SI
                </h1>

                <p className="max-w-2xl text-sm leading-relaxed text-slate-300">
                  Lật thẻ 2 mặt để tự nhẩm công thức, điều kiện áp dụng, thứ nguyên SI và dụng cụ đo
                  trước khi xem đáp án. Phân loại mức độ nhớ giúp hệ thống ưu tiên ôn lại đúng phần
                  dễ nhầm.
                </p>
              </div>
            </div>

            {/* Right 5 Cols: Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:col-span-5 lg:grid-cols-2">
              <button
                type="button"
                onClick={() => setSelectedStatus('mastered')}
                className="rounded-2xl border border-emerald-400/25 bg-emerald-500/[0.06] p-4 text-left transition hover:border-emerald-400/50"
              >
                <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                  ĐÃ THUỘC LÒNG
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-mono text-2xl font-black text-white">
                    {deckStats.mastered}
                  </span>
                  <span className="font-mono text-xs font-bold text-emerald-300">
                    ({deckStats.pct}%)
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.05]">
                  <div
                    className="h-full rounded-full bg-emerald-400 transition-all duration-300"
                    style={{ width: `${Math.max(4, deckStats.pct)}%` }}
                  />
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedStatus('hard')}
                className="rounded-2xl border border-amber-400/25 bg-amber-500/[0.06] p-4 text-left transition hover:border-amber-400/50"
              >
                <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-300">
                  HƠI NHỚ
                </div>
                <div className="mt-1 font-mono text-2xl font-black text-white">{deckStats.hard}</div>
                <div className="mt-1 text-[11px] text-slate-400">Nên lật lại nhanh</div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedStatus('forgot')}
                className="rounded-2xl border border-rose-400/25 bg-rose-500/[0.06] p-4 text-left transition hover:border-rose-400/50"
              >
                <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-rose-300">
                  QUÊN RỒI
                </div>
                <div className="mt-1 font-mono text-2xl font-black text-white">{deckStats.forgot}</div>
                <div className="mt-1 text-[11px] text-slate-400">Ưu tiên ôn tập gấp</div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedStatus('need_review')}
                className="rounded-2xl border border-white/[0.06] bg-[#070b1a]/90 p-4 text-left transition hover:border-sky-400/40"
              >
                <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-sky-300">
                  THẺ MỚI / CẦN ÔN
                </div>
                <div className="mt-1 font-mono text-2xl font-black text-white">
                  {deckStats.unseen}
                </div>
                <div className="mt-1 text-[11px] text-slate-400">
                  Tổng: {deckStats.total} thẻ
                </div>
              </button>
            </div>
          </section>

          {/* --------------------------------------------------------------
              3. MULTI-FILTER TOOLBAR
          -------------------------------------------------------------- */}
          <section
            data-fc-reveal
            className="space-y-3 rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-4 sm:p-5"
          >
            <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
              <div className="relative md:col-span-4">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm tên công thức, ký hiệu, đơn vị SI..."
                  className="w-full rounded-xl border border-white/[0.06] bg-[#040713] py-2 pl-9 pr-3 text-xs text-white placeholder-slate-500 focus:border-amber-400/50"
                />
              </div>

              <div className="md:col-span-4">
                <select
                  value={selectedChapterId === 'all' ? 'all' : String(selectedChapterId)}
                  onChange={(e) => {
                    const v = e.target.value;
                    setSelectedChapterId(v === 'all' ? 'all' : Number(v));
                  }}
                  className="w-full rounded-xl border border-white/[0.06] bg-[#040713] px-3 py-2 text-xs font-semibold text-slate-200 focus:border-sky-400/50"
                >
                  <option value="all" className="bg-[#070b1a]">
                    Tất cả các Chương ({availableChapters.length} chương)
                  </option>
                  {availableChapters.map((ch) => (
                    <option key={ch.id} value={String(ch.id)} className="bg-[#070b1a]">
                      Lớp {ch.grade_number} · {ch.code}: {ch.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-wrap items-center gap-2 md:col-span-4 md:justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setIsShuffled(true);
                    setShuffleSeed((s) => s + 1);
                  }}
                  className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-bold transition ${
                    isShuffled
                      ? 'border-sky-400/45 bg-sky-500/15 text-sky-200'
                      : 'border-white/[0.06] bg-white/[0.04] text-slate-200 hover:border-sky-400/40'
                  }`}
                >
                  <Shuffle className="h-3.5 w-3.5" />
                  <span>Trộn thẻ</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowHintsOnFront((v) => !v)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.04] px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-amber-400/40"
                >
                  {showHintsOnFront ? (
                    <>
                      <Eye className="h-3.5 w-3.5 text-amber-300" />
                      <span>Hiện gợi ý</span>
                    </>
                  ) : (
                    <>
                      <EyeOff className="h-3.5 w-3.5 text-slate-400" />
                      <span>Ẩn gợi ý</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.06] pt-3">
              <div className="flex flex-wrap items-center gap-1.5">
                {(
                  [
                    { id: 'all', label: 'Tất cả loại' },
                    { id: 'formula', label: 'Công thức' },
                    { id: 'quantity', label: 'Đại lượng & SI' },
                  ] as const
                ).map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedType(t.id)}
                    className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                      selectedType === t.id
                        ? 'border-sky-400/50 bg-sky-500/20 text-sky-200'
                        : 'border-white/[0.06] bg-white/[0.03] text-slate-400 hover:text-white'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {(
                  [
                    { id: 'all', label: 'Mọi trạng thái' },
                    { id: 'need_review', label: 'Chưa thuộc' },
                    { id: 'forgot', label: 'Quên rồi' },
                    { id: 'hard', label: 'Hơi nhớ' },
                    { id: 'mastered', label: 'Đã thuộc' },
                  ] as const
                ).map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setSelectedStatus(st.id)}
                    className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
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
          </section>

          {/* --------------------------------------------------------------
              4. STAGE / GRID STUDIO VIEW
          -------------------------------------------------------------- */}
          <AnimatePresence mode="wait">
            {activeMode === 'stage' ? (
              <motion.section
                key="stage"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="mx-auto max-w-4xl space-y-5"
              >
                {!activeCard ? (
                  <div className="rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-10 text-center space-y-3">
                    <Sparkles className="mx-auto h-8 w-8 text-amber-300" />
                    <div className="text-lg font-extrabold text-white">
                      Không có thẻ Flashcard phù hợp với bộ lọc hiện tại
                    </div>
                    <p className="text-xs text-slate-400">
                      Hãy đặt lại bộ lọc trạng thái hoặc chuyển sang &ldquo;Tất cả 6–12&rdquo; để ôn
                      toàn bộ thẻ.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedChapterId('all');
                        setSelectedType('all');
                        setSelectedStatus('all');
                        setSearchQuery('');
                      }}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-amber-400/40 bg-amber-500/15 px-4 py-2 text-xs font-bold text-amber-200"
                    >
                      <RotateCcw className="h-3.5 w-3.5" /> Xóa bộ lọc thẻ
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Deck Progress Strip */}
                    <div className="flex items-center justify-between gap-4 px-1">
                      <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                        <span className="font-bold text-amber-300">
                          THẺ {Math.min(currentIndex, filteredCards.length - 1) + 1} /{' '}
                          {filteredCards.length}
                        </span>
                        <span className="text-slate-500">·</span>
                        <span>{progressInFilterPct}% bộ lọc</span>
                      </div>
                      <div className="hidden items-center gap-2 text-[11px] font-mono text-slate-400 sm:flex">
                        <Keyboard className="h-3.5 w-3.5 text-sky-300" />
                        <span>Space: Lật · ←/→: Chuyển · 1/2/3: Chấm nhớ</span>
                      </div>
                    </div>

                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.05]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-sky-400 via-amber-400 to-emerald-400 transition-all duration-300"
                        style={{ width: `${progressInFilterPct}%` }}
                      />
                    </div>

                    {/* 3D Flip Card Stage */}
                    <div className="relative" style={{ perspective: '1600px' }}>
                      <motion.div
                        onClick={() => setIsFlipped((f) => !f)}
                        animate={{ rotateY: isFlipped ? 180 : 0 }}
                        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                        style={{ transformStyle: 'preserve-3d' }}
                        className="grid cursor-pointer select-none"
                      >
                        {/* FRONT FACE */}
                        <div
                          style={{ backfaceVisibility: 'hidden' }}
                          className={`[grid-area:1/1] flex min-h-[340px] flex-col justify-between rounded-3xl border bg-[#070b1a]/95 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_25px_60px_-20px_rgba(0,0,0,0.85)] sm:p-8 ${
                            RATING_META[activeCard.rating].borderCls
                          }`}
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="flex flex-wrap items-center gap-2">
                              <span
                                className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 font-mono text-[11px] font-bold ${
                                  activeCard.card_type === 'formula'
                                    ? 'border-amber-400/35 bg-amber-500/15 text-amber-200'
                                    : 'border-sky-400/35 bg-sky-500/15 text-sky-200'
                                }`}
                              >
                                {activeCard.card_type === 'formula' ? (
                                  <>
                                    <Calculator className="h-3.5 w-3.5" /> CÔNG THỨC
                                  </>
                                ) : (
                                  <>
                                    <Ruler className="h-3.5 w-3.5" /> ĐẠI LƯỢNG &amp; SI
                                  </>
                                )}
                              </span>
                              <span className="rounded-lg border border-white/[0.06] bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] font-bold text-slate-300">
                                Lớp {activeCard.grade_number} · {activeCard.topic_code}
                              </span>
                            </div>

                            <span
                              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold ${
                                RATING_META[activeCard.rating].badgeCls
                              }`}
                            >
                              <span
                                className={`h-2 w-2 rounded-full ${
                                  RATING_META[activeCard.rating].dotCls
                                }`}
                              />
                              {RATING_META[activeCard.rating].label}
                            </span>
                          </div>

                          <div className="my-6 space-y-4 text-center">
                            <div className="font-mono text-xs uppercase tracking-wider text-slate-400">
                              {activeCard.topic_title}
                            </div>
                            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                              <RichPhysicsText text={activeCard.front_title} />
                            </h2>
                            <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-300">
                              <RichPhysicsText text={activeCard.front_prompt} />
                            </p>

                            {showHintsOnFront && activeCard.front_hints.length > 0 && (
                              <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-2 pt-2">
                                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300">
                                  <Lightbulb className="h-3.5 w-3.5" /> Gợi ý:
                                </span>
                                {activeCard.front_hints.map((hint, idx) => (
                                  <span
                                    key={idx}
                                    className="rounded-lg border border-white/[0.06] bg-[#040713] px-2.5 py-1 text-xs text-slate-200"
                                  >
                                    <RichPhysicsText text={hint} />
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>

                          <div className="flex items-center justify-between border-t border-white/[0.06] pt-4 text-xs text-slate-400">
                            <span className="font-mono">Lần ôn: {activeCard.review_count}</span>
                            <span className="inline-flex items-center gap-1.5 font-semibold text-sky-300">
                              <RotateCcw className="h-3.5 w-3.5" /> Bấm vào thẻ để lật đáp án
                            </span>
                          </div>
                        </div>

                        {/* BACK FACE */}
                        <div
                          style={{
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)',
                          }}
                          className="[grid-area:1/1] flex min-h-[340px] flex-col justify-between rounded-3xl border border-amber-400/35 bg-[#060917]/95 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_25px_60px_-20px_rgba(0,0,0,0.85)] sm:p-8"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                            <div>
                              <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                                ĐÁP ÁN &amp; BẢN CHẤT VẬT LÝ
                              </div>
                              <h3 className="text-base font-extrabold text-white sm:text-lg">
                                {activeCard.front_title}
                              </h3>
                            </div>
                            <span className="rounded-lg border border-white/[0.06] bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-slate-300">
                              Lớp {activeCard.grade_number} · {activeCard.topic_code}
                            </span>
                          </div>

                          <div className="my-5 space-y-4">
                            {activeCard.card_type === 'formula' ? (
                              <>
                                <div className="overflow-x-auto rounded-2xl border border-white/[0.06] bg-[#03050d] px-4 py-4 text-center text-white">
                                  <KatexFormula
                                    latex={
                                      activeCard.latex_expression ||
                                      activeCard.plain_expression ||
                                      ''
                                    }
                                    displayMode
                                  />
                                </div>

                                {activeCard.variables && activeCard.variables.length > 0 && (
                                  <div className="flex flex-col gap-2">
                                    {activeCard.variables.map((v, i) => (
                                      <div
                                        key={`${v.symbol}-${i}`}
                                        className="flex items-start justify-between gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3.5 py-2 text-xs"
                                      >
                                        <div className="flex min-w-0 flex-1 items-start gap-2.5">
                                          <span className="inline-flex min-w-[3rem] shrink-0 items-center justify-center rounded-lg border border-amber-400/25 bg-amber-500/10 px-2 py-0.5 font-bold text-amber-300">
                                            <KatexFormula latex={v.symbol} />
                                          </span>
                                          <span className="min-w-0 flex-1 py-0.5 leading-relaxed text-slate-200">
                                            <RichPhysicsText text={v.name} />
                                          </span>
                                        </div>
                                        <span className="shrink-0 rounded-lg border border-emerald-400/25 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] font-bold text-emerald-300">
                                          {v.unit}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {activeCard.usage_note && (
                                  <div className="rounded-xl border border-amber-400/20 bg-amber-500/10 px-3.5 py-2.5 text-xs leading-relaxed text-amber-100">
                                    <strong className="text-amber-300">Điều kiện / Lưu ý: </strong>
                                    <RichPhysicsText text={activeCard.usage_note} />
                                  </div>
                                )}
                              </>
                            ) : (
                              <div className="space-y-4">
                                <div className="flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-white/[0.06] bg-[#03050d] p-5">
                                  <div className="flex min-h-14 min-w-14 items-center justify-center rounded-2xl border border-amber-400/35 bg-amber-500/15 px-4 py-2 text-xl font-black text-amber-200">
                                    <KatexFormula latex={activeCard.symbol || ''} />
                                  </div>
                                  <div className="text-left">
                                    <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                      ĐƠN VỊ CHUẨN HỆ SI
                                    </div>
                                    <div className="font-mono text-2xl font-black text-emerald-300">
                                      {activeCard.si_unit || '—'}
                                    </div>
                                  </div>
                                </div>

                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3.5 text-xs">
                                    <div className="font-mono text-[10px] font-bold uppercase text-sky-300">
                                      ĐƠN VỊ KHÁC THƯỜNG GẶP
                                    </div>
                                    <div className="mt-1 font-semibold text-slate-200">
                                      {activeCard.other_units || 'Không có'}
                                    </div>
                                  </div>
                                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3.5 text-xs">
                                    <div className="font-mono text-[10px] font-bold uppercase text-amber-300">
                                      DỤNG CỤ ĐO TRỰC TIẾP
                                    </div>
                                    <div className="mt-1 font-semibold text-slate-200">
                                      {activeCard.measuring_device || 'Xác định gián tiếp qua công thức'}
                                    </div>
                                  </div>
                                </div>

                                {activeCard.description && (
                                  <div className="rounded-xl border border-white/[0.06] bg-[#040713] p-3.5 text-xs leading-relaxed text-slate-300">
                                    <RichPhysicsText text={activeCard.description} />
                                  </div>
                                )}
                              </div>
                            )}
                          </div>

                          <div
                            onClick={(e) => e.stopPropagation()}
                            className="flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.06] pt-3 text-xs"
                          >
                            <Link
                              href={`/topic/${activeCard.topic_id}?tab=vault`}
                              className="inline-flex items-center gap-1.5 font-bold text-sky-300 hover:underline"
                            >
                              <BookOpen className="h-3.5 w-3.5" />
                              Mở bài học {activeCard.topic_code}
                              <ExternalLink className="h-3 w-3" />
                            </Link>
                            <Link
                              href={`/calculator?tab=${
                                activeCard.card_type === 'formula' ? 'solver' : 'converter'
                              }&grade=${activeCard.grade_number}`}
                              className="inline-flex items-center gap-1.5 font-bold text-amber-300 hover:underline"
                            >
                              <Compass className="h-3.5 w-3.5" />
                              Thực hành quy đổi &amp; giải nhanh
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Controls & 3-Tier Spaced Repetition Buttons */}
                    <div className="flex flex-col gap-3 rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handlePrev}
                          className="inline-flex items-center gap-1 rounded-xl border border-white/[0.06] bg-white/[0.04] px-3 py-2 text-xs font-bold text-slate-200 transition hover:border-sky-400/40"
                        >
                          <ChevronLeft className="h-4 w-4" /> Trước
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsFlipped((f) => !f)}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.05] px-3.5 py-2 text-xs font-bold text-white transition hover:border-amber-400/50"
                        >
                          <RotateCcw className="h-3.5 w-3.5 text-amber-300" />
                          <span>{isFlipped ? 'Lật mặt trước' : 'Lật đáp án'}</span>
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          className="inline-flex items-center gap-1 rounded-xl border border-white/[0.06] bg-white/[0.04] px-3 py-2 text-xs font-bold text-slate-200 transition hover:border-sky-400/40"
                        >
                          Sau <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <button
                          type="button"
                          disabled={!!savingKey}
                          onClick={() => handleRateCard('forgot')}
                          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-rose-400/35 bg-rose-500/15 px-3 py-2 text-xs font-extrabold text-rose-200 transition hover:bg-rose-500/25 disabled:opacity-60"
                        >
                          <XCircle className="h-3.5 w-3.5" />
                          <span>1. Quên rồi</span>
                        </button>
                        <button
                          type="button"
                          disabled={!!savingKey}
                          onClick={() => handleRateCard('hard')}
                          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-amber-400/35 bg-amber-500/15 px-3 py-2 text-xs font-extrabold text-amber-200 transition hover:bg-amber-500/25 disabled:opacity-60"
                        >
                          <AlertTriangle className="h-3.5 w-3.5" />
                          <span>2. Hơi nhớ</span>
                        </button>
                        <button
                          type="button"
                          disabled={!!savingKey}
                          onClick={() => handleRateCard('mastered')}
                          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-emerald-400/40 bg-emerald-500/20 px-3 py-2 text-xs font-extrabold text-emerald-200 transition hover:bg-emerald-500/30 disabled:opacity-60"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          <span>3. Thuộc lòng</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </motion.section>
            ) : (
              <motion.section
                key="grid"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredCards.map((c, idx) => {
                  const meta = RATING_META[c.rating];
                  return (
                    <button
                      key={c.card_key}
                      type="button"
                      onClick={() => {
                        setCurrentIndex(idx);
                        setIsFlipped(false);
                        setActiveMode('stage');
                      }}
                      className={`flex flex-col justify-between space-y-3 rounded-3xl border bg-[#070b1a]/90 p-5 text-left transition hover:border-amber-400/45 ${meta.borderCls}`}
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between gap-2">
                          <span className="rounded-md border border-white/[0.06] bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] font-bold text-slate-300">
                            Lớp {c.grade_number} · {c.topic_code}
                          </span>
                          <span
                            className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold ${meta.badgeCls}`}
                          >
                            <span className={`h-1.5 w-1.5 rounded-full ${meta.dotCls}`} />
                            {meta.label}
                          </span>
                        </div>

                        <h3 className="text-sm font-extrabold leading-snug text-white">
                          <RichPhysicsText text={c.front_title} />
                        </h3>

                        <div className="overflow-x-auto rounded-xl border border-white/[0.06] bg-[#03050d] px-3 py-2 text-amber-200">
                          {c.card_type === 'formula' ? (
                            <KatexFormula
                              latex={c.latex_expression || c.plain_expression || ''}
                            />
                          ) : (
                            <div className="flex items-center justify-between text-xs font-bold">
                              <KatexFormula latex={c.symbol || ''} />
                              <span className="font-mono text-emerald-300">{c.si_unit}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t border-white/[0.06] pt-2.5 text-[11px] text-slate-400">
                        <span className="line-clamp-1">{c.topic_title}</span>
                        <span className="shrink-0 font-bold text-sky-300">Mở thẻ →</span>
                      </div>
                    </button>
                  );
                })}
              </motion.section>
            )}
          </AnimatePresence>
        </main>
      </div>
    </MotionConfig>
  );
}

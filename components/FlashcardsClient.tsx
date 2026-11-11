'use client';

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  FlashcardDeckData,
  FlashcardItem,
  FlashcardRating,
} from '@/types/cms';
import { getSavedActiveGrade, saveActiveGrade } from '@/lib/grade-context';
import { KatexFormula, RichPhysicsText } from './KatexRenderer';
import {
  RotateCcw,
  Shuffle,
  Search,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Sparkles,
  Calculator,
  Ruler,
  BookOpen,
  ExternalLink,
  HelpCircle,
  Eye,
  Keyboard,
  Flame,
  Trophy,
  Lightbulb,
  Compass,
  Zap,
  RefreshCw,
} from 'lucide-react';

interface FlashcardsClientProps {
  initialData: FlashcardDeckData;
}

const RATING_META: Record<
  FlashcardRating,
  {
    label: string;
    badgeCls: string;
    borderCls: string;
    dotCls: string;
    glowCls: string;
  }
> = {
  mastered: {
    label: 'Đã thuộc lòng',
    badgeCls: 'bg-emerald-500/15 text-emerald-700 border-emerald-300',
    borderCls: 'border-emerald-300 bg-emerald-50/40',
    dotCls: 'bg-emerald-500',
    glowCls: 'shadow-[0_20px_50px_-15px_rgba(16,185,129,0.28)]',
  },
  hard: {
    label: 'Hơi nhớ',
    badgeCls: 'bg-amber-500/15 text-amber-800 border-amber-300',
    borderCls: 'border-amber-300 bg-amber-50/40',
    dotCls: 'bg-amber-500',
    glowCls: 'shadow-[0_20px_50px_-15px_rgba(245,158,11,0.25)]',
  },
  forgot: {
    label: 'Quên rồi',
    badgeCls: 'bg-rose-500/15 text-rose-700 border-rose-300',
    borderCls: 'border-rose-300 bg-rose-50/40',
    dotCls: 'bg-rose-500',
    glowCls: 'shadow-[0_20px_50px_-15px_rgba(244,63,94,0.25)]',
  },
  unseen: {
    label: 'Thẻ mới',
    badgeCls: 'bg-indigo-500/10 text-indigo-700 border-indigo-200',
    borderCls: 'border-slate-200 bg-white',
    dotCls: 'bg-slate-300',
    glowCls: 'shadow-[0_20px_50px_-15px_rgba(79,70,229,0.18)]',
  },
};

export function FlashcardsClient({ initialData }: FlashcardsClientProps) {
  const [cards, setCards] = useState<FlashcardItem[]>(initialData.cards);
  const [selectedGrade, setSelectedGrade] = useState<number | 'all'>('all');

  useEffect(() => {
    setSelectedGrade(getSavedActiveGrade(6));
  }, []);
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
  const [lastRatedToast, setLastRatedToast] = useState<{
    text: string;
    tone: 'emerald' | 'amber' | 'rose';
  } | null>(null);

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

  // Filtered deck
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
        const hay = `${c.front_title} ${c.topic_title} ${c.topic_code} ${c.plain_expression || ''} ${c.si_unit || ''} ${c.symbol || ''} ${c.description || ''}`.toLowerCase();
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

  // Live stats across the currently selected Grade (or all grades)
  const deckStats = useMemo(() => {
    const scopeCards =
      selectedGrade === 'all'
        ? cards
        : cards.filter((c) => c.grade_number === selectedGrade);
    let mastered = 0;
    let hard = 0;
    let forgot = 0;
    let unseen = 0;
    for (const c of scopeCards) {
      if (c.rating === 'mastered') mastered++;
      else if (c.rating === 'hard') hard++;
      else if (c.rating === 'forgot') forgot++;
      else unseen++;
    }
    const total = scopeCards.length;
    const pct = total > 0 ? Math.round((mastered / total) * 100) : 0;
    return { total, mastered, hard, forgot, unseen, pct };
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
        setLastRatedToast({ text: '🎉 Tuyệt vời! Đã ghi nhận Thuộc lòng (+1)', tone: 'emerald' });
      } else if (rating === 'hard') {
        setLastRatedToast({ text: '💪 Đã lưu vào nhóm Hơi nhớ để ôn lại', tone: 'amber' });
      } else {
        setLastRatedToast({ text: '🔥 Đã đánh dấu Cần ưu tiên học lại', tone: 'rose' });
      }
      setTimeout(() => setLastRatedToast(null), 1800);

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
        // Ignore network error
      } finally {
        setSavingKey(null);
        setIsFlipped(false);
        if (filteredCards.length > 1) {
          setCurrentIndex((prev) => (prev < filteredCards.length - 1 ? prev + 1 : 0));
        }
      }
    },
    [activeCard, savingKey, filteredCards.length]
  );

  // Keyboard shortcuts
  useEffect(() => {
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
  }, [handleNext, handlePrev, handleRateCard]);

  const handleShuffleDeck = () => {
    setIsShuffled(true);
    setShuffleSeed((s) => s + 1);
  };

  const progressInFilterPct =
    filteredCards.length > 0
      ? Math.round(((currentIndex + 1) / filteredCards.length) * 100)
      : 0;

  return (
    <div className="edu-page-shell">
      {/* ============================================================ */}
      {/* HERO BANNER                                                  */}
      {/* ============================================================ */}
      <div className="edu-hero-aurora p-6 sm:p-9">
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 animate-blob rounded-full bg-indigo-500/25 blur-3xl" />
        <div
          className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 animate-blob rounded-full bg-emerald-500/20 blur-3xl"
          style={{ animationDelay: '3s' }}
        />

        <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-400/30 bg-indigo-500/20 px-3 py-1 text-xs font-extrabold text-indigo-200">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                <span>ACTIVE RECALL • SPACED REPETITION LỚP 6–12</span>
              </span>
              {sessionReviewedCount > 0 && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-500/20 px-3 py-1 text-xs font-extrabold text-amber-200">
                  <Flame className="h-3.5 w-3.5 text-amber-300" />
                  <span>Chuỗi phiên học: {sessionReviewedCount} thẻ liên tiếp</span>
                </span>
              )}
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              🃏 Thẻ Bài Tri Thức: Công Thức &amp; Đơn Vị SI
            </h1>
            <p className="max-w-2xl text-xs leading-relaxed text-indigo-100/85 sm:text-sm">
              Nhẩm công thức trong đầu trước khi lật thẻ giúp não bộ ghi nhớ sâu gấp 3 lần cách đọc
              thụ động. Chinh phục trọn bộ công thức và đơn vị chuẩn SI từ Lớp 6 đến Lớp 12!
            </p>
          </div>

          {/* Mastery Progress Mini-Dashboard */}
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:shrink-0">
            <div className="rounded-2xl border border-white/15 bg-white/10 px-3.5 py-2.5 backdrop-blur">
              <div className="text-[11px] font-bold text-indigo-200">Bộ thẻ hiện tại</div>
              <div className="mt-0.5 text-xl font-extrabold text-white">{deckStats.total}</div>
              <div className="text-[10px] text-indigo-200/80">Chinh phục {deckStats.pct}%</div>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/15 px-3.5 py-2.5 backdrop-blur">
              <div className="text-[11px] font-bold text-emerald-200">🟢 Thuộc lòng</div>
              <div className="mt-0.5 text-xl font-extrabold text-emerald-300">
                {deckStats.mastered}
              </div>
              <div className="text-[10px] text-emerald-200/80">Nhớ chắc chắn</div>
            </div>
            <div className="rounded-2xl border border-amber-400/30 bg-amber-500/15 px-3.5 py-2.5 backdrop-blur">
              <div className="text-[11px] font-bold text-amber-200">🟡 Hơi nhớ</div>
              <div className="mt-0.5 text-xl font-extrabold text-amber-300">{deckStats.hard}</div>
              <div className="text-[10px] text-amber-200/80">Cần củng cố</div>
            </div>
            <div className="rounded-2xl border border-rose-400/30 bg-rose-500/15 px-3.5 py-2.5 backdrop-blur">
              <div className="text-[11px] font-bold text-rose-200">🔴 Quên rồi</div>
              <div className="mt-0.5 text-xl font-extrabold text-rose-300">{deckStats.forgot}</div>
              <div className="text-[10px] text-rose-200/80">Ưu tiên ôn ngay</div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* FILTER BAR                                                   */}
      {/* ============================================================ */}
      <div className="edu-card space-y-4 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => setSelectedGrade('all')}
              className={`rounded-xl px-3 py-1.5 text-xs font-extrabold transition ${
                selectedGrade === 'all'
                  ? 'bg-indigo-600 text-white shadow-soft'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Tất cả Lớp 6–12
            </button>
            {[6, 7, 8, 9, 10, 11, 12].map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => {
                  setSelectedGrade(g);
                  saveActiveGrade(g);
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
              onClick={handleShuffleDeck}
              className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-extrabold text-indigo-700 transition hover:bg-indigo-100"
            >
              <Shuffle className="h-3.5 w-3.5" />
              <span>Trộn ngẫu nhiên</span>
            </button>
            {isShuffled && (
              <button
                type="button"
                onClick={() => setIsShuffled(false)}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-600 hover:bg-slate-50"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Thứ tự gốc</span>
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <select
            value={selectedChapterId}
            onChange={(e) =>
              setSelectedChapterId(e.target.value === 'all' ? 'all' : Number(e.target.value))
            }
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700 focus:border-indigo-400 focus:bg-white focus:outline-none"
          >
            <option value="all">Tất cả các chương ({availableChapters.length} chương)</option>
            {availableChapters.map((ch) => (
              <option key={ch.id} value={ch.id}>
                Lớp {ch.grade_number} • {ch.code}: {ch.title}
              </option>
            ))}
          </select>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as any)}
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700 focus:border-indigo-400 focus:bg-white focus:outline-none"
          >
            <option value="all">Tất cả loại thẻ (Công thức + Đại lượng)</option>
            <option value="formula">📐 Chỉ thẻ Công thức Vật lý</option>
            <option value="quantity">📏 Chỉ thẻ Đại lượng &amp; Đơn vị SI</option>
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value as any)}
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700 focus:border-indigo-400 focus:bg-white focus:outline-none"
          >
            <option value="all">Mọi trạng thái ({cards.length} thẻ)</option>
            <option value="need_review">🔥 Cần ôn tập (Chưa thuộc lòng)</option>
            <option value="forgot">🔴 Đang quên ({deckStats.forgot})</option>
            <option value="hard">🟡 Hơi nhớ ({deckStats.hard})</option>
            <option value="mastered">🟢 Đã thuộc lòng ({deckStats.mastered})</option>
          </select>

          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm tên công thức, ký hiệu, đơn vị..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-8 pr-3 text-xs font-medium text-slate-800 placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* COLLECTIBLE STUDY CARD STAGE                                 */}
      {/* ============================================================ */}
      {activeCard ? (
        <div className="mx-auto max-w-4xl space-y-5">
          {/* Top Deck Progress Bar & Toast */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-3 py-1 font-mono text-xs font-extrabold text-white shadow-2xs">
                  <span>THẺ</span>
                  <span className="text-amber-300">{currentIndex + 1}</span>
                  <span className="text-slate-400">/</span>
                  <span>{filteredCards.length}</span>
                </span>

                <span className="rounded-xl border border-indigo-200 bg-indigo-50 px-2.5 py-1 font-bold text-indigo-800">
                  Lớp {activeCard.grade_number} • {activeCard.chapter_code}
                </span>

                <span
                  className={`inline-flex items-center gap-1.5 rounded-xl border px-2.5 py-1 font-extrabold ${
                    RATING_META[activeCard.rating].badgeCls
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${RATING_META[activeCard.rating].dotCls}`}
                  />
                  <span>{RATING_META[activeCard.rating].label}</span>
                  {activeCard.review_count > 0 && (
                    <span className="opacity-75">({activeCard.review_count} lần ôn)</span>
                  )}
                </span>
              </div>

              {lastRatedToast ? (
                <span
                  className={`animate-fade-in rounded-xl px-3 py-1 text-xs font-extrabold ${
                    lastRatedToast.tone === 'emerald'
                      ? 'bg-emerald-100 text-emerald-800'
                      : lastRatedToast.tone === 'amber'
                        ? 'bg-amber-100 text-amber-900'
                        : 'bg-rose-100 text-rose-800'
                  }`}
                >
                  {lastRatedToast.text}
                </span>
              ) : (
                <div className="hidden items-center gap-2 text-[11px] font-semibold text-slate-400 sm:flex">
                  <Keyboard className="h-3.5 w-3.5 text-indigo-500" />
                  <span>
                    Nhấn <kbd className="rounded border bg-white px-1.5 py-0.5 text-slate-700">Space</kbd> lật thẻ •{' '}
                    <kbd className="rounded border bg-white px-1.5 py-0.5 text-slate-700">1</kbd>{' '}
                    <kbd className="rounded border bg-white px-1.5 py-0.5 text-slate-700">2</kbd>{' '}
                    <kbd className="rounded border bg-white px-1.5 py-0.5 text-slate-700">3</kbd> chấm mức nhớ
                  </span>
                </div>
              )}
            </div>

            {/* Smooth Progress Track */}
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200/80 p-0.5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 transition-all duration-300"
                style={{ width: `${progressInFilterPct}%` }}
              />
            </div>
          </div>

          {/* 3D Stacked Deck Wrapper */}
          <div className="relative pb-3 pt-1">
            {/* Background Stack Layer 2 */}
            <div className="pointer-events-none absolute inset-x-8 -bottom-1 top-6 rounded-[2rem] border border-slate-200/70 bg-slate-100/70 shadow-sm" />
            {/* Background Stack Layer 1 */}
            <div className="pointer-events-none absolute inset-x-4 bottom-0.5 top-3 rounded-[2rem] border border-slate-200/90 bg-white/90 shadow-md" />

            {/* ACTIVE COLLECTIBLE CARD */}
            <div
              onClick={() => setIsFlipped((f) => !f)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') setIsFlipped((f) => !f);
              }}
              className={`group relative min-h-[430px] cursor-pointer overflow-hidden rounded-[2rem] border-2 transition-all duration-300 sm:min-h-[460px] ${
                isFlipped
                  ? 'border-emerald-400/90 bg-white shadow-[0_25px_60px_-15px_rgba(16,185,129,0.28)]'
                  : activeCard.card_type === 'formula'
                    ? 'border-indigo-300/90 bg-white shadow-[0_25px_60px_-15px_rgba(79,70,229,0.22)] hover:-translate-y-0.5 hover:border-indigo-400'
                    : 'border-amber-300/90 bg-white shadow-[0_25px_60px_-15px_rgba(245,158,11,0.22)] hover:-translate-y-0.5 hover:border-amber-400'
              }`}
            >
              {/* TOP COLLECTIBLE RIBBON */}
              <div
                className={`relative overflow-hidden px-6 py-4 text-white sm:px-8 ${
                  isFlipped
                    ? 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700'
                    : activeCard.card_type === 'formula'
                      ? 'bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-700'
                      : 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600'
                }`}
              >
                <div className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full bg-white/15 blur-2xl" />

                <div className="relative flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-xl bg-white/20 px-3 py-1 text-xs font-extrabold tracking-wide text-white backdrop-blur">
                      {activeCard.card_type === 'formula' ? (
                        <>
                          <Calculator className="h-3.5 w-3.5" />
                          <span>THẺ CÔNG THỨC TRỌNG TÂM</span>
                        </>
                      ) : (
                        <>
                          <Ruler className="h-3.5 w-3.5" />
                          <span>THẺ ĐẠI LƯỢNG &amp; ĐƠN VỊ SI</span>
                        </>
                      )}
                    </span>

                    <span className="rounded-lg bg-black/20 px-2.5 py-1 font-mono text-xs font-bold text-white/95">
                      {activeCard.topic_code} • {activeCard.topic_title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-white/30 bg-white/15 px-3 py-0.5 text-[11px] font-extrabold text-white backdrop-blur">
                      {isFlipped ? '🔓 MẶT SAU • ĐÁP ÁN CHUẨN' : '🔒 MẶT TRƯỚC • THỬ THÁCH TRÍ NHỚ'}
                    </span>

                    <Link
                      href={`/topic/${activeCard.topic_id}`}
                      onClick={(e) => e.stopPropagation()}
                      title="Mở trang bài học chi tiết"
                      className="inline-flex items-center gap-1 rounded-xl bg-white/20 px-2.5 py-1 text-xs font-bold text-white backdrop-blur transition hover:bg-white/30"
                    >
                      <BookOpen className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Bài học</span>
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* ============================================================ */}
              {/* CARD CONTENT: FRONT FACE VS BACK FACE                        */}
              {/* ============================================================ */}
              {!isFlipped ? (
                /* ---------------- FRONT FACE (THE CHALLENGE) ---------------- */
                <div
                  className="relative flex min-h-[370px] flex-col justify-between p-6 sm:min-h-[395px] sm:p-8"
                  style={{
                    backgroundImage:
                      'radial-gradient(rgba(99, 102, 241, 0.09) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                >
                  {/* Center Prompt Stage */}
                  <div className="my-auto flex flex-col items-center text-center">
                    {/* Floating Subject Emblem */}
                    <div
                      className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border-2 shadow-soft transition-transform duration-300 group-hover:scale-110 ${
                        activeCard.card_type === 'formula'
                          ? 'border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-100 text-indigo-600'
                          : 'border-amber-200 bg-gradient-to-br from-amber-50 to-orange-100 text-amber-600'
                      }`}
                    >
                      {activeCard.card_type === 'formula' ? (
                        <Calculator className="h-8 w-8" />
                      ) : (
                        <Compass className="h-8 w-8" />
                      )}
                    </div>

                    <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-0.5 text-[11px] font-bold text-slate-500">
                      <span>{activeCard.chapter_code}</span>
                      <span>•</span>
                      <span>{activeCard.chapter_title}</span>
                    </div>

                    {/* Main Question Title */}
                    <h2 className="mt-3 max-w-2xl text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                      <RichPhysicsText text={activeCard.front_title} />
                    </h2>

                    {/* Challenge Prompt Box */}
                    <div className="mt-4 max-w-xl rounded-2xl border border-indigo-100 bg-indigo-50/60 px-4 py-3 text-xs font-medium leading-relaxed text-indigo-950 sm:text-sm">
                      <span className="mr-1.5 font-extrabold text-indigo-700">
                        🎯 Nhiệm vụ của bạn:
                      </span>
                      {activeCard.front_prompt}
                    </div>

                    {/* Interactive Hints (Variables / Clues) */}
                    {activeCard.front_hints.length > 0 && (
                      <div className="mt-5 w-full max-w-2xl">
                        <div className="mb-2 flex items-center justify-center gap-2">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowHintsOnFront((h) => !h);
                            }}
                            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-extrabold text-slate-600 shadow-2xs hover:border-indigo-300 hover:text-indigo-700"
                          >
                            <Lightbulb className="h-3.5 w-3.5 text-amber-500" />
                            <span>
                              {showHintsOnFront
                                ? 'Ẩn gợi ý đại lượng'
                                : `Mở gợi ý (${activeCard.front_hints.length} dữ kiện)`}
                            </span>
                          </button>
                        </div>

                        {showHintsOnFront && (
                          <div className="flex flex-wrap items-center justify-center gap-2">
                            {activeCard.front_hints.map((hint, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 shadow-2xs"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                                <RichPhysicsText text={hint} />
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Bottom Call-To-Flip Bar */}
                  <div className="mt-6 flex items-center justify-center border-t border-slate-100 pt-4">
                    <div className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-xs font-extrabold text-white shadow-soft transition duration-200 group-hover:scale-105 group-hover:shadow-md sm:text-sm">
                      <RefreshCw className="h-4 w-4 transition-transform duration-500 group-hover:rotate-180" />
                      <span>Chạm vào thẻ hoặc nhấn [Phím Cách] để lật xem Đáp Án Chuẩn</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* ---------------- BACK FACE (THE KNOWLEDGE REVEAL) ---------------- */
                <div className="animate-fade-in flex min-h-[370px] flex-col justify-between space-y-5 bg-gradient-to-b from-emerald-50/30 via-white to-slate-50/40 p-6 sm:min-h-[395px] sm:p-8">
                  {activeCard.card_type === 'formula' ? (
                    <div className="space-y-5">
                      {/* Formula Spotlight Stage */}
                      <div className="relative overflow-hidden rounded-3xl border-2 border-emerald-400/80 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 text-center text-white shadow-lg">
                        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-emerald-400/20 blur-2xl" />
                        <div className="pointer-events-none absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-indigo-400/20 blur-2xl" />

                        <div className="relative">
                          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 bg-emerald-500/20 px-3 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-emerald-300">
                            <Sparkles className="h-3 w-3" />
                            <span>Biểu thức chuẩn SGK • {activeCard.front_title}</span>
                          </span>

                          <div className="mt-4 overflow-x-auto rounded-2xl bg-white/95 px-6 py-5 text-xl font-extrabold text-slate-900 shadow-inner sm:text-2xl">
                            <KatexFormula
                              latex={
                                activeCard.latex_expression ||
                                activeCard.plain_expression ||
                                ''
                              }
                              displayMode={true}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Variables Breakdown Grid */}
                      {activeCard.variables && activeCard.variables.length > 0 && (
                        <div>
                          <div className="mb-2.5 flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-600">
                            <Ruler className="h-4 w-4 text-emerald-600" />
                            <span>Ý nghĩa các đại lượng &amp; Đơn vị chuẩn Hệ SI:</span>
                          </div>
                          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                            {activeCard.variables.map((v, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200/90 bg-white p-3 shadow-2xs"
                              >
                                <div className="flex items-center gap-2.5">
                                  <span className="flex h-9 min-w-[2.25rem] items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 px-2 font-bold text-indigo-900">
                                    <KatexFormula latex={v.symbol} />
                                  </span>
                                  <span className="text-xs font-extrabold text-slate-800 sm:text-sm">
                                    {v.name}
                                  </span>
                                </div>
                                <span className="shrink-0 rounded-xl border border-emerald-200 bg-emerald-50 px-2.5 py-1 font-mono text-xs font-extrabold text-emerald-700">
                                  {v.unit}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Derived Formulas */}
                      {activeCard.derived_formulas && activeCard.derived_formulas.length > 0 && (
                        <div>
                          <div className="mb-2.5 flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-600">
                            <Zap className="h-4 w-4 text-indigo-600" />
                            <span>Công thức suy diễn &amp; Rút ẩn nhanh:</span>
                          </div>
                          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                            {activeCard.derived_formulas.map((df, idx) => (
                              <div
                                key={idx}
                                className="rounded-2xl border border-indigo-200/80 bg-indigo-50/50 p-3.5"
                              >
                                <div className="text-sm font-extrabold text-indigo-950">
                                  <KatexFormula latex={df.expression} />
                                </div>
                                <div className="mt-1 text-xs font-medium text-slate-600">
                                  <RichPhysicsText text={df.description} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Pro-Tip Note */}
                      {activeCard.usage_note && (
                        <div className="flex items-start gap-3 rounded-2xl border border-amber-300 bg-amber-50/90 p-4 text-xs leading-relaxed text-amber-950 sm:text-sm">
                          <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                          <div>
                            <strong className="font-extrabold text-amber-900">
                              Bí kíp phòng thi &amp; Bẫy cần tránh:{' '}
                            </strong>
                            <RichPhysicsText text={activeCard.usage_note} />
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* QUANTITY & SI UNIT BACK FACE */
                    <div className="space-y-5">
                      <div className="text-center">
                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-extrabold text-emerald-800">
                          Hồ sơ Đại lượng Vật lý chuẩn Hệ SI
                        </span>
                        <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                          <RichPhysicsText text={activeCard.front_title} />
                        </h3>
                      </div>

                      {/* 3 Spotlight Pillars */}
                      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
                        <div className="rounded-3xl border-2 border-indigo-200 bg-gradient-to-b from-indigo-50/70 to-white p-5 text-center shadow-soft">
                          <div className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600">
                            1. Ký hiệu chuẩn
                          </div>
                          <div className="mt-3 text-3xl font-extrabold text-indigo-900">
                            <KatexFormula latex={activeCard.symbol || ''} />
                          </div>
                        </div>

                        <div className="rounded-3xl border-2 border-emerald-300 bg-gradient-to-b from-emerald-50/80 to-white p-5 text-center shadow-soft">
                          <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700">
                            2. Đơn vị chuẩn Hệ SI
                          </div>
                          <div className="mt-3 font-mono text-2xl font-extrabold text-emerald-800">
                            {activeCard.si_unit}
                          </div>
                        </div>

                        <div className="rounded-3xl border-2 border-amber-200 bg-gradient-to-b from-amber-50/70 to-white p-5 text-center shadow-soft">
                          <div className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700">
                            3. Dụng cụ đo
                          </div>
                          <div className="mt-3 text-sm font-extrabold text-slate-800 sm:text-base">
                            {activeCard.measuring_device || 'Xác định qua công thức'}
                          </div>
                        </div>
                      </div>

                      {activeCard.other_units && (
                        <div className="rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-700 sm:text-sm">
                          <strong className="font-extrabold text-slate-900">
                            🔄 Các đơn vị thường gặp khác:{' '}
                          </strong>
                          <RichPhysicsText text={activeCard.other_units} />
                        </div>
                      )}

                      {activeCard.description && (
                        <div className="rounded-2xl border border-indigo-200 bg-indigo-50/70 p-4 text-xs leading-relaxed text-indigo-950 sm:text-sm">
                          <strong className="font-extrabold text-indigo-900">
                            📖 Bản chất Vật lý cần nhớ:{' '}
                          </strong>
                          <RichPhysicsText text={activeCard.description} />
                        </div>
                      )}
                    </div>
                  )}

                  {/* Bottom Hint on Back Face */}
                  <div className="flex items-center justify-between border-t border-slate-200/70 pt-3 text-xs text-slate-400">
                    <span>💡 Hãy tự chấm mức độ nhớ của bạn bằng 3 nút bên dưới</span>
                    <span className="font-semibold text-emerald-700">
                      Bấm vào thẻ để lật lại mặt trước ↺
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ============================================================ */}
          {/* TACTILE 3-BUTTON SPACED REPETITION DOCK                      */}
          {/* ============================================================ */}
          <div className="rounded-3xl border border-slate-200/90 bg-white p-4 shadow-card sm:p-5">
            <div className="mb-3 text-center text-xs font-extrabold uppercase tracking-wider text-slate-500">
              Bạn nhớ thẻ này ở mức nào? (Chọn để lưu tiến độ &amp; qua thẻ tiếp theo)
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-12">
              {/* Prev Card Button */}
              <button
                type="button"
                onClick={handlePrev}
                className="flex items-center justify-center gap-1.5 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-xs font-extrabold text-slate-700 transition hover:bg-slate-100 sm:col-span-2"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Trước</span>
              </button>

              {/* 1. Forgot */}
              <button
                type="button"
                onClick={() => handleRateCard('forgot')}
                disabled={Boolean(savingKey)}
                className="group flex flex-col items-center justify-center rounded-2xl border-2 border-rose-200 bg-gradient-to-b from-rose-50 to-white px-4 py-3 text-rose-700 shadow-2xs transition hover:-translate-y-0.5 hover:border-rose-400 hover:shadow-md sm:col-span-3"
              >
                <div className="flex items-center gap-1.5 text-sm font-extrabold">
                  <XCircle className="h-4 w-4 text-rose-600" />
                  <span>Quên rồi</span>
                </div>
                <span className="mt-0.5 text-[11px] font-semibold text-rose-500">
                  Phím [1] • Ôn lại ngay
                </span>
              </button>

              {/* 2. Hard / Somewhat Remembered */}
              <button
                type="button"
                onClick={() => handleRateCard('hard')}
                disabled={Boolean(savingKey)}
                className="group flex flex-col items-center justify-center rounded-2xl border-2 border-amber-200 bg-gradient-to-b from-amber-50 to-white px-4 py-3 text-amber-800 shadow-2xs transition hover:-translate-y-0.5 hover:border-amber-400 hover:shadow-md sm:col-span-2"
              >
                <div className="flex items-center gap-1.5 text-sm font-extrabold">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                  <span>Hơi nhớ</span>
                </div>
                <span className="mt-0.5 text-[11px] font-semibold text-amber-600">
                  Phím [2] • Cần nhẩm
                </span>
              </button>

              {/* 3. Mastered */}
              <button
                type="button"
                onClick={() => handleRateCard('mastered')}
                disabled={Boolean(savingKey)}
                className="group flex flex-col items-center justify-center rounded-2xl border-2 border-emerald-300 bg-gradient-to-b from-emerald-500 to-teal-600 px-4 py-3 text-white shadow-soft transition hover:-translate-y-0.5 hover:from-emerald-600 hover:to-teal-700 hover:shadow-lg sm:col-span-3"
              >
                <div className="flex items-center gap-1.5 text-sm font-extrabold">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Đã thuộc lòng!</span>
                </div>
                <span className="mt-0.5 text-[11px] font-semibold text-emerald-100">
                  Phím [3] • Chinh phục
                </span>
              </button>

              {/* Next Card Button */}
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center justify-center gap-1.5 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-xs font-extrabold text-slate-700 transition hover:bg-slate-100 sm:col-span-2"
              >
                <span>Tiếp</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="edu-card p-10 text-center">
          <HelpCircle className="mx-auto h-10 w-10 text-slate-300" />
          <h3 className="mt-3 text-base font-extrabold text-slate-800">
            Không tìm thấy thẻ Flashcard nào khớp bộ lọc
          </h3>
          <p className="mt-1 text-xs text-slate-500">
            Hãy thử chuyển bộ lọc Trạng thái về &ldquo;Mọi trạng thái&rdquo; hoặc xóa từ khóa tìm kiếm.
          </p>
        </div>
      )}

      {/* ============================================================ */}
      {/* QUICK BROWSE GRID OF CARDS IN CURRENT FILTER                 */}
      {/* ============================================================ */}
      {filteredCards.length > 0 && (
        <div className="edu-card space-y-4 p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-sm font-extrabold text-slate-900 sm:text-base">
                Bộ sưu tập thẻ trong danh mục đang chọn ({filteredCards.length} thẻ)
              </h3>
              <p className="text-xs text-slate-500">
                Bấm vào bất kỳ thẻ nào bên dưới để đưa lên bàn lật ngay lập tức
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCards.slice(0, 60).map((c, idx) => {
              const isSelected = activeCard?.card_key === c.card_key;
              const meta = RATING_META[c.rating];
              return (
                <button
                  key={c.card_key}
                  type="button"
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsFlipped(false);
                    window.scrollTo({ top: 180, behavior: 'smooth' });
                  }}
                  className={`flex items-start justify-between gap-3 rounded-2xl border p-3.5 text-left transition ${
                    isSelected
                      ? 'border-indigo-500 bg-indigo-50/70 ring-2 ring-indigo-500/20'
                      : `${meta.borderCls} hover:border-indigo-300`
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
                      <span>Lớp {c.grade_number}</span>
                      <span>•</span>
                      <span>{c.topic_code}</span>
                      <span>•</span>
                      <span>{c.card_type === 'formula' ? '📐 Công thức' : '📏 Đại lượng'}</span>
                    </div>
                    <div className="mt-1 truncate text-xs font-extrabold text-slate-900">
                      {c.front_title}
                    </div>
                  </div>

                  <span
                    className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-extrabold ${meta.badgeCls}`}
                  >
                    {meta.label}
                  </span>
                </button>
              );
            })}
          </div>
          {filteredCards.length > 60 && (
            <p className="text-center text-xs text-slate-400">
              Đang hiển thị 60 / {filteredCards.length} thẻ đầu tiên. Sử dụng bộ lọc Lớp hoặc Chương để thu hẹp.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

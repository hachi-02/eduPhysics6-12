'use client';

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  FlashcardDeckData,
  FlashcardItem,
  FlashcardRating,
} from '@/types/cms';
import { KatexFormula, RichPhysicsText } from './KatexRenderer';
import {
  Layers,
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
} from 'lucide-react';

interface FlashcardsClientProps {
  initialData: FlashcardDeckData;
}

const RATING_META: Record<
  FlashcardRating,
  { label: string; badgeCls: string; borderCls: string; dotCls: string }
> = {
  mastered: {
    label: 'Đã thuộc lòng',
    badgeCls: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    borderCls: 'border-emerald-300 bg-emerald-50/40',
    dotCls: 'bg-emerald-500',
  },
  hard: {
    label: 'Hơi nhớ',
    badgeCls: 'bg-amber-100 text-amber-800 border-amber-200',
    borderCls: 'border-amber-300 bg-amber-50/40',
    dotCls: 'bg-amber-500',
  },
  forgot: {
    label: 'Quên rồi',
    badgeCls: 'bg-rose-100 text-rose-800 border-rose-200',
    borderCls: 'border-rose-300 bg-rose-50/40',
    dotCls: 'bg-rose-500',
  },
  unseen: {
    label: 'Chưa lật',
    badgeCls: 'bg-slate-100 text-slate-600 border-slate-200',
    borderCls: 'border-slate-200 bg-white',
    dotCls: 'bg-slate-300',
  },
};

export function FlashcardsClient({ initialData }: FlashcardsClientProps) {
  const [cards, setCards] = useState<FlashcardItem[]>(initialData.cards);
  const [selectedGrade, setSelectedGrade] = useState<number | 'all'>('all');
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
  const [savingKey, setSavingKey] = useState<string | null>(null);

  // Chapters filtered by selectedGrade
  const availableChapters = useMemo(() => {
    if (selectedGrade === 'all') return initialData.chapters;
    return initialData.chapters.filter((ch) => ch.grade_number === selectedGrade);
  }, [initialData.chapters, selectedGrade]);

  // Reset chapter filter if grade changes and chapter doesn't belong to grade
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

  // Keep currentIndex in bounds when filters change
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

      // Optimistic update
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

  // Keyboard shortcuts: Space to flip, Left/Right arrows to navigate, 1/2/3 to rate
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

  return (
    <div className="mx-auto max-w-6xl animate-fade-up space-y-6 px-4 py-8 sm:px-6">
      {/* ============================================================ */}
      {/* HERO BANNER                                                  */}
      {/* ============================================================ */}
      <div className="relative overflow-hidden rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 p-6 text-white shadow-card sm:p-8">
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl" />

        <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/15 px-3 py-1 text-xs font-extrabold text-indigo-200">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              <span>ACTIVE RECALL • SPACED REPETITION LỚP 6–12</span>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              🃏 Flashcard Lật Thẻ Công Thức &amp; Đơn Vị SI
            </h1>
            <p className="max-w-2xl text-xs leading-relaxed text-indigo-100/85 sm:text-sm">
              Phương pháp tự gợi nhớ chủ động (Active Recall) giúp thuộc lòng toàn bộ biểu thức toán học,
              đơn vị chuẩn SI và công thức suy diễn trước khi bước vào phòng thi.
            </p>
          </div>

          {/* Mastery Progress Mini-Dashboard */}
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:shrink-0">
            <div className="rounded-2xl border border-white/15 bg-white/10 px-3.5 py-2.5 backdrop-blur">
              <div className="text-[11px] font-bold text-indigo-200">Tổng số thẻ</div>
              <div className="mt-0.5 text-xl font-extrabold text-white">{deckStats.total}</div>
              <div className="text-[10px] text-indigo-200/80">Đã thuộc {deckStats.pct}%</div>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/15 px-3.5 py-2.5 backdrop-blur">
              <div className="text-[11px] font-bold text-emerald-200">🟢 Đã thuộc lòng</div>
              <div className="mt-0.5 text-xl font-extrabold text-emerald-300">
                {deckStats.mastered}
              </div>
              <div className="text-[10px] text-emerald-200/80">Nhớ chắc chắn</div>
            </div>
            <div className="rounded-2xl border border-amber-400/30 bg-amber-500/15 px-3.5 py-2.5 backdrop-blur">
              <div className="text-[11px] font-bold text-amber-200">🟡 Hơi nhớ</div>
              <div className="mt-0.5 text-xl font-extrabold text-amber-300">{deckStats.hard}</div>
              <div className="text-[10px] text-amber-200/80">Cần nhẩm lại</div>
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
        {/* Row 1: Grade pills */}
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
                onClick={() => setSelectedGrade(g)}
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
              <span>Trộn thẻ ngẫu nhiên</span>
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

        {/* Row 2: Chapter + Type + Status + Search */}
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
      {/* INTERACTIVE 3D FLIP CARD ARENA                               */}
      {/* ============================================================ */}
      {activeCard ? (
        <div className="space-y-4">
          {/* Card Progress Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="rounded-lg bg-indigo-100 px-2.5 py-1 font-extrabold text-indigo-800">
                Thẻ {currentIndex + 1} / {filteredCards.length}
              </span>
              <span className="font-bold text-slate-700">
                Lớp {activeCard.grade_number} • {activeCard.topic_code}: {activeCard.topic_title}
              </span>
              <span
                className={`rounded-full border px-2.5 py-0.5 text-[11px] font-extrabold ${
                  RATING_META[activeCard.rating].badgeCls
                }`}
              >
                {RATING_META[activeCard.rating].label}
              </span>
            </div>

            <div className="hidden items-center gap-3 text-[11px] text-slate-400 sm:flex">
              <span className="flex items-center gap-1">
                <Keyboard className="h-3.5 w-3.5" />
                Phím tắt: <strong className="text-slate-600">Space</strong> (Lật thẻ) •{' '}
                <strong className="text-slate-600">←/→</strong> (Chuyển thẻ) •{' '}
                <strong className="text-slate-600">1/2/3</strong> (Chấm mức nhớ)
              </span>
            </div>
          </div>

          {/* Main Flip Card Box */}
          <div
            onClick={() => setIsFlipped((f) => !f)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setIsFlipped((f) => !f);
            }}
            className={`group relative min-h-[340px] cursor-pointer overflow-hidden rounded-3xl border-2 p-6 shadow-card transition-all duration-200 sm:min-h-[380px] sm:p-8 ${
              isFlipped
                ? 'border-emerald-300 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/40'
                : 'border-indigo-200 bg-gradient-to-br from-white via-indigo-50/25 to-purple-50/30 hover:border-indigo-300'
            }`}
          >
            {/* Top Bar inside Card */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/70 pb-4">
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1 text-xs font-extrabold ${
                    activeCard.card_type === 'formula'
                      ? 'bg-indigo-100 text-indigo-800'
                      : 'bg-amber-100 text-amber-900'
                  }`}
                >
                  {activeCard.card_type === 'formula' ? (
                    <>
                      <Calculator className="h-3.5 w-3.5" />
                      <span>THẺ CÔNG THỨC</span>
                    </>
                  ) : (
                    <>
                      <Ruler className="h-3.5 w-3.5" />
                      <span>THẺ ĐẠI LƯỢNG &amp; ĐƠN VỊ SI</span>
                    </>
                  )}
                </span>

                <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600">
                  {isFlipped ? '🔓 MẶT SAU: ĐÁP ÁN CHUẨN' : '🔒 MẶT TRƯỚC: CÂU HỎI GỢI NHỚ'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href={`/topic/${activeCard.topic_id}`}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-2.5 py-1 text-xs font-bold text-slate-600 transition hover:border-indigo-300 hover:text-indigo-700"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>Mở bài học</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Card Body: Front vs Back */}
            {!isFlipped ? (
              <div className="flex min-h-[240px] flex-col items-center justify-center py-6 text-center">
                <div className="mb-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700">
                  {activeCard.chapter_code} • {activeCard.chapter_title}
                </div>
                <h2 className="max-w-2xl text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                  <RichPhysicsText text={activeCard.front_title} />
                </h2>
                <p className="mt-3 max-w-xl text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {activeCard.front_prompt}
                </p>

                {activeCard.front_hints.length > 0 && (
                  <div className="mt-5 flex max-w-2xl flex-wrap items-center justify-center gap-2">
                    {activeCard.front_hints.map((hint, idx) => (
                      <span
                        key={idx}
                        className="rounded-xl border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs"
                      >
                        <RichPhysicsText text={hint} />
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-4 py-2 text-xs font-extrabold text-white shadow-soft transition group-hover:scale-105">
                  <Eye className="h-4 w-4" />
                  <span>Bấm vào thẻ (hoặc nhấn phím Space) để lật xem đáp án</span>
                </div>
              </div>
            ) : (
              <div className="animate-fade-in space-y-5 py-5">
                <div className="text-center">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Đáp án &amp; Công thức chuẩn SGK
                  </div>
                  <h3 className="mt-1 text-lg font-extrabold text-slate-900 sm:text-xl">
                    <RichPhysicsText text={activeCard.front_title} />
                  </h3>
                </div>

                {activeCard.card_type === 'formula' ? (
                  <div className="space-y-4">
                    {/* Main LaTeX Formula */}
                    <div className="mx-auto max-w-2xl overflow-x-auto rounded-2xl border-2 border-emerald-200 bg-white p-5 text-center text-lg font-bold text-slate-900 shadow-soft">
                      <KatexFormula
                        latex={activeCard.latex_expression || activeCard.plain_expression || ''}
                        displayMode={true}
                      />
                    </div>

                    {/* Variables Table */}
                    {activeCard.variables && activeCard.variables.length > 0 && (
                      <div className="mx-auto max-w-3xl">
                        <div className="mb-2 text-xs font-extrabold uppercase tracking-wider text-slate-500">
                          Giải thích các đại lượng &amp; Đơn vị chuẩn SI:
                        </div>
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {activeCard.variables.map((v, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs"
                            >
                              <div className="flex items-center gap-2">
                                <span className="rounded-lg bg-indigo-50 px-2 py-0.5 font-bold text-indigo-800">
                                  <KatexFormula latex={v.symbol} />
                                </span>
                                <span className="font-semibold text-slate-800">{v.name}</span>
                              </div>
                              <span className="shrink-0 rounded-md bg-emerald-50 px-2 py-0.5 font-mono text-[11px] font-bold text-emerald-700">
                                {v.unit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Derived Formulas */}
                    {activeCard.derived_formulas && activeCard.derived_formulas.length > 0 && (
                      <div className="mx-auto max-w-3xl">
                        <div className="mb-2 text-xs font-extrabold uppercase tracking-wider text-slate-500">
                          Công thức suy diễn / rút ẩn:
                        </div>
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {activeCard.derived_formulas.map((df, idx) => (
                            <div
                              key={idx}
                              className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-3 text-xs"
                            >
                              <div className="font-bold text-indigo-950">
                                <KatexFormula latex={df.expression} />
                              </div>
                              <div className="mt-1 text-slate-600">
                                <RichPhysicsText text={df.description} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Usage Note */}
                    {activeCard.usage_note && (
                      <div className="mx-auto max-w-3xl rounded-2xl border border-amber-200 bg-amber-50/80 p-3.5 text-xs text-amber-950">
                        <strong className="font-extrabold">💡 Lưu ý &amp; Mẹo tránh bẫy: </strong>
                        <RichPhysicsText text={activeCard.usage_note} />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="mx-auto max-w-3xl space-y-4">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl border border-emerald-200 bg-white p-4 text-center shadow-2xs">
                        <div className="text-[11px] font-bold uppercase text-slate-400">
                          Ký hiệu chuẩn
                        </div>
                        <div className="mt-1.5 text-2xl font-extrabold text-indigo-700">
                          <KatexFormula latex={activeCard.symbol || ''} />
                        </div>
                      </div>

                      <div className="rounded-2xl border border-emerald-200 bg-white p-4 text-center shadow-2xs">
                        <div className="text-[11px] font-bold uppercase text-slate-400">
                          Đơn vị chuẩn Hệ SI
                        </div>
                        <div className="mt-1.5 text-xl font-extrabold text-emerald-700">
                          {activeCard.si_unit}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-emerald-200 bg-white p-4 text-center shadow-2xs">
                        <div className="text-[11px] font-bold uppercase text-slate-400">
                          Dụng cụ đo
                        </div>
                        <div className="mt-1.5 text-sm font-extrabold text-slate-800">
                          {activeCard.measuring_device || 'Tính qua công thức'}
                        </div>
                      </div>
                    </div>

                    {activeCard.other_units && (
                      <div className="rounded-xl border border-slate-200 bg-white p-3.5 text-xs text-slate-700">
                        <strong className="font-extrabold text-slate-900">
                          Các đơn vị thường gặp khác:{' '}
                        </strong>
                        <RichPhysicsText text={activeCard.other_units} />
                      </div>
                    )}

                    {activeCard.description && (
                      <div className="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-4 text-xs leading-relaxed text-indigo-950 sm:text-sm">
                        <strong className="font-extrabold">Bản chất Vật lý: </strong>
                        <RichPhysicsText text={activeCard.description} />
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Controls: Prev / 3 Rating Buttons / Next */}
          <div className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft sm:flex-row">
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-extrabold text-slate-700 transition hover:bg-slate-100 sm:w-auto"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Thẻ trước</span>
            </button>

            <div className="grid w-full grid-cols-3 gap-2 sm:w-auto">
              <button
                type="button"
                onClick={() => handleRateCard('forgot')}
                disabled={Boolean(savingKey)}
                className="flex flex-col items-center justify-center rounded-xl border border-rose-200 bg-rose-50 px-4 py-2 text-xs font-extrabold text-rose-700 transition hover:bg-rose-100"
              >
                <span className="flex items-center gap-1">
                  <XCircle className="h-3.5 w-3.5" />
                  <span>Quên rồi</span>
                </span>
                <span className="text-[10px] font-medium text-rose-500">Phím 1 • Hỏi lại</span>
              </button>

              <button
                type="button"
                onClick={() => handleRateCard('hard')}
                disabled={Boolean(savingKey)}
                className="flex flex-col items-center justify-center rounded-xl border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-extrabold text-amber-800 transition hover:bg-amber-100"
              >
                <span className="flex items-center gap-1">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  <span>Hơi nhớ</span>
                </span>
                <span className="text-[10px] font-medium text-amber-600">Phím 2 • Cần ôn</span>
              </button>

              <button
                type="button"
                onClick={() => handleRateCard('mastered')}
                disabled={Boolean(savingKey)}
                className="flex flex-col items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-extrabold text-emerald-700 transition hover:bg-emerald-100"
              >
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Đã thuộc lòng</span>
                </span>
                <span className="text-[10px] font-medium text-emerald-600">Phím 3 • Chinh phục</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-extrabold text-slate-700 transition hover:bg-slate-100 sm:w-auto"
            >
              <span>Thẻ tiếp</span>
              <ChevronRight className="h-4 w-4" />
            </button>
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
                Danh sách nhanh bộ thẻ đang lọc ({filteredCards.length} thẻ)
              </h3>
              <p className="text-xs text-slate-500">
                Bấm vào bất kỳ thẻ nào bên dưới để nhảy trực tiếp tới thẻ đó trên bàn lật
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

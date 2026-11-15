'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import { SearchResults } from '@/types/cms';
import { KatexFormula, RichPhysicsText } from './KatexRenderer';
import {
  Search,
  X,
  Calculator,
  Scale,
  BookOpen,
  ArrowRight,
  Sparkles,
  CornerDownLeft,
} from 'lucide-react';

interface GlobalSearchModalProps {
  variant?: 'light' | 'glass';
}

export function GlobalSearchModal({ variant = 'glass' }: GlobalSearchModalProps = {}) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const [query, setQuery] = useState('');
  const [selectedGrade, setSelectedGrade] = useState<number | 'all'>('all');
  const [results, setResults] = useState<SearchResults>({
    formulas: [],
    quantities: [],
    topics: [],
  });
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'formulas' | 'quantities' | 'topics'>('all');
  const [focusedIndex, setFocusedIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  // Global hotkey: Ctrl + K (or Cmd + K) & URL ?search=1 query support
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sp = new URLSearchParams(window.location.search);
      if (sp.get('search') === '1') {
        setIsOpen(true);
        const qParam = sp.get('q');
        if (qParam) {
          setQuery(qParam);
        }
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Auto focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
      setSelectedGrade('all');
      setResults({ formulas: [], quantities: [], topics: [] });
      setFocusedIndex(0);
    }
  }, [isOpen]);

  // Debounced search fetch
  useEffect(() => {
    if (!query.trim()) {
      setResults({ formulas: [], quantities: [], topics: [] });
      setLoading(false);
      return;
    }

    setLoading(true);
    const timer = setTimeout(async () => {
      try {
        const gradeQuery = selectedGrade !== 'all' ? `&grade=${selectedGrade}` : '';
        const res = await fetch(`/api/search?q=${encodeURIComponent(query.trim())}${gradeQuery}`);
        if (res.ok) {
          const data: SearchResults = await res.json();
          setResults(data);
          setFocusedIndex(0);
        }
      } catch {
        // Ignore network error
      } finally {
        setLoading(false);
      }
    }, 180);

    return () => clearTimeout(timer);
  }, [query, selectedGrade]);

  // Flat list of clickable items for arrow keys navigation
  const flatItems = React.useMemo(() => {
    const items: { type: 'formula' | 'quantity' | 'topic'; id: number; url: string }[] = [];
    if (activeTab === 'all' || activeTab === 'formulas') {
      results.formulas.forEach((f) => items.push({ type: 'formula', id: f.id, url: `/topic/${f.topic_id}?tab=vault` }));
    }
    if (activeTab === 'all' || activeTab === 'quantities') {
      results.quantities.forEach((q) => items.push({ type: 'quantity', id: q.id, url: `/topic/${q.topic_id}?tab=vault` }));
    }
    if (activeTab === 'all' || activeTab === 'topics') {
      results.topics.forEach((t) => items.push({ type: 'topic', id: t.id, url: `/topic/${t.id}` }));
    }
    return items;
  }, [results, activeTab]);

  // Keyboard navigation inside modal (ArrowDown, ArrowUp, Enter)
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex((prev) => (flatItems.length > 0 ? (prev + 1) % flatItems.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex((prev) => (flatItems.length > 0 ? (prev - 1 + flatItems.length) % flatItems.length : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (flatItems.length > 0 && flatItems[focusedIndex]) {
        handleSelectResult(flatItems[focusedIndex].url);
      }
    }
  };

  const handleSelectResult = (url: string) => {
    setIsOpen(false);
    router.push(url);
    if (typeof document !== 'undefined') {
      document.getElementById('curriculum-app')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalResults =
    results.formulas.length + results.quantities.length + results.topics.length;

  return (
    <>
      {/* Search Trigger Button on Header */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={
          variant === 'glass'
            ? 'flex items-center justify-center sm:justify-between gap-1.5 sm:gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] p-2 sm:px-3 sm:py-2 text-xs text-white/90 shadow-2xs backdrop-blur-md transition duration-150 ease-snap hover:border-amber-400/35 hover:bg-white/[0.08] hover:text-white shrink-0 sm:shrink sm:w-full min-w-0'
            : 'flex items-center justify-center sm:justify-between gap-1.5 sm:gap-2 rounded-xl border border-slate-200/90 bg-slate-100/70 p-2 sm:px-3 sm:py-2 text-xs text-slate-500 shadow-soft transition duration-150 ease-snap hover:border-slate-300 hover:bg-white hover:text-slate-800 shrink-0 sm:shrink sm:w-full min-w-0'
        }
        title="Tìm kiếm công thức, đại lượng, bài học (Ctrl + K)"
      >
        <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
          <Search className={`h-4 w-4 sm:h-3.5 sm:w-3.5 shrink-0 ${variant === 'glass' ? 'text-white/80' : 'text-slate-400'}`} />
          {/* Tablet (640px to 1023px): compact label */}
          <span className={`hidden sm:inline lg:hidden truncate whitespace-nowrap ${variant === 'glass' ? 'text-white/95' : ''}`}>
            Tìm kiếm
          </span>
          {/* Desktop (>= 1024px): clean compact label */}
          <span className={`hidden lg:inline whitespace-nowrap ${variant === 'glass' ? 'text-white/95' : ''}`}>
            Tra cứu nhanh
          </span>
        </div>
        <kbd
          className={
            variant === 'glass'
              ? 'hidden lg:inline-flex shrink-0 items-center gap-0.5 rounded-md border border-white/10 bg-white/[0.06] px-1.5 py-0.5 font-mono text-[10px] text-white/80 shadow-2xs'
              : 'hidden lg:inline-flex shrink-0 items-center gap-0.5 rounded-md border border-slate-200 bg-white px-1.5 py-0.5 font-mono text-[10px] text-slate-400 shadow-soft'
          }
        >
          Ctrl K
        </kbd>
      </button>

      {/* Modal Backdrop & Dialog (Rendered in document.body via Portal to escape header overflow/backdrop-blur clipping) */}
      {mounted &&
        isOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex animate-fade-in items-start justify-center bg-[#020309]/80 px-4 pt-12 backdrop-blur-md sm:pt-16"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="flex max-h-[85vh] w-full max-w-2xl animate-pop flex-col overflow-hidden rounded-3xl border border-white/15 bg-[#080d1e]/95 text-slate-100 shadow-[0_24px_80px_-16px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
              onClick={(e) => e.stopPropagation()}
            >
            {/* Input Header */}
            <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.02] p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-400/15 text-amber-300 shadow-2xs">
                <Search className="h-4 w-4" />
              </span>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Nhập tên công thức (v, s, F, I, U...), đại lượng, đơn vị hoặc bài học..."
                className="h-10 w-full border-0 bg-transparent text-sm text-white placeholder:text-slate-500 outline-none ring-0 shadow-none focus:border-0 focus:outline-none focus:ring-0 focus:shadow-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 sm:text-base"
                style={{ outline: 'none', boxShadow: 'none' }}
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="rounded-xl p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
              <kbd
                onClick={() => setIsOpen(false)}
                className="hidden cursor-pointer items-center rounded-lg border border-white/15 bg-white/[0.06] px-2.5 py-1 font-mono text-[11px] font-bold text-slate-300 transition hover:bg-white/15 hover:text-white sm:inline-flex"
              >
                ESC
              </kbd>
            </div>

            {/* Grade Filter Bar (Lớp 6 -> 12) */}
            <div className="flex items-center gap-1.5 overflow-x-auto border-b border-white/10 bg-[#050816]/80 px-4 py-2.5 text-xs">
              <span className="mr-1 shrink-0 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Lớp:
              </span>
              <button
                type="button"
                onClick={() => setSelectedGrade('all')}
                className={`shrink-0 rounded-lg px-2.5 py-1 font-semibold transition ${
                  selectedGrade === 'all'
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'border border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.1] hover:text-white'
                }`}
              >
                Tất cả (6–12)
              </button>
              {[6, 7, 8, 9, 10, 11, 12].map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setSelectedGrade(g)}
                  className={`shrink-0 rounded-lg px-2.5 py-1 font-semibold transition ${
                    selectedGrade === g
                      ? 'bg-sky-400 text-slate-950 shadow-sm'
                      : 'border border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.1] hover:text-white'
                  }`}
                >
                  Lớp {g}
                </button>
              ))}
            </div>

            {/* Category Filter Tabs when has query */}
            {query.trim() && (
              <div className="flex items-center gap-1.5 overflow-x-auto border-b border-white/10 bg-white/[0.02] px-4 py-2 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('all')}
                  className={`rounded-lg px-3 py-1.5 font-semibold transition ${
                    activeTab === 'all'
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'bg-white/[0.05] text-slate-300 hover:bg-white/[0.1] hover:text-white'
                  }`}
                >
                  Tất cả ({totalResults})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('formulas')}
                  className={`flex items-center gap-1 rounded-lg px-3 py-1.5 font-semibold transition ${
                    activeTab === 'formulas'
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'bg-white/[0.05] text-slate-300 hover:bg-white/[0.1] hover:text-white'
                  }`}
                >
                  <Calculator className="h-3.5 w-3.5" />
                  <span>Công thức ({results.formulas.length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('quantities')}
                  className={`flex items-center gap-1 rounded-lg px-3 py-1.5 font-semibold transition ${
                    activeTab === 'quantities'
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'bg-white/[0.05] text-slate-300 hover:bg-white/[0.1] hover:text-white'
                  }`}
                >
                  <Scale className="h-3.5 w-3.5" />
                  <span>Đại lượng & Đơn vị ({results.quantities.length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('topics')}
                  className={`flex items-center gap-1 rounded-lg px-3 py-1.5 font-semibold transition ${
                    activeTab === 'topics'
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'bg-white/[0.05] text-slate-300 hover:bg-white/[0.1] hover:text-white'
                  }`}
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>Bài học ({results.topics.length})</span>
                </button>
              </div>
            )}

            {/* Results Container */}
            <div className="flex-1 space-y-5 overflow-y-auto p-4">
              {loading && (
                <div className="py-8 text-center text-xs text-slate-400">
                  Đang tìm kiếm trong 7 khối lớp (Lớp 6–12)...
                </div>
              )}

              {!loading && !query.trim() && (
                <div className="space-y-2 py-8 text-center">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-400/15 text-amber-300">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-semibold text-slate-200 sm:text-sm">
                    Tra cứu tức thì mọi Công thức, Đại lượng và Bài học Vật lí Lớp 6–12
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2 text-xs text-slate-400">
                    <span>Gợi ý:</span>
                    {['v = s / t', 'Định luật Ôm', 'Lực đẩy Ác-si-mét', 'Công suất', 'Quang năng', 'Bước sóng', 'Áp suất'].map(
                      (k) => (
                        <button
                          key={k}
                          type="button"
                          onClick={() => setQuery(k)}
                          className="rounded-lg border border-white/10 bg-white/[0.05] px-2.5 py-1 text-xs font-medium text-slate-200 transition hover:border-amber-400/40 hover:bg-amber-400/15 hover:text-amber-200"
                        >
                          {k}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}

              {!loading && query.trim() && totalResults === 0 && (
                <div className="space-y-1 py-10 text-center text-xs text-slate-400 sm:text-sm">
                  <p>Không tìm thấy kết quả nào khớp với &quot;<strong className="text-white">{query}</strong>&quot; {selectedGrade !== 'all' ? `ở Lớp ${selectedGrade}` : ''}.</p>
                  <p className="text-xs text-slate-500">
                    Thử đổi sang &quot;Tất cả lớp&quot;, tìm bằng ký hiệu toán học hoặc từ khóa ngắn gọn hơn.
                  </p>
                </div>
              )}

              {/* 1. Group: Formulas */}
              {(activeTab === 'all' || activeTab === 'formulas') && results.formulas.length > 0 && (
                <div className="space-y-2.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-amber-300">
                    <Calculator className="h-3.5 w-3.5" />
                    <span>Công thức Vật lí ({results.formulas.length})</span>
                  </div>
                  <div className="space-y-2">
                    {results.formulas.map((f) => (
                      <div
                        key={`f-${f.id}`}
                        onClick={() => handleSelectResult(`/topic/${f.topic_id}?tab=vault`)}
                        className="cursor-pointer space-y-2 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 transition duration-150 ease-snap hover:-translate-y-0.5 hover:border-amber-400/40 hover:bg-white/[0.06]"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold text-white sm:text-sm">{f.name}</span>
                          <span className="shrink-0 rounded-md border border-sky-400/30 bg-sky-500/15 px-2 py-0.5 text-[11px] font-semibold text-sky-300">
                            Lớp {f.grade_number} • {f.topic_code}
                          </span>
                        </div>

                        <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#040711] p-2.5 text-white">
                          <KatexFormula latex={f.latex_expression} displayMode />
                        </div>

                        {f.usage_note && (
                          <p className="line-clamp-1 text-xs text-slate-400">
                            <RichPhysicsText text={f.usage_note} />
                          </p>
                        )}

                        <div className="flex items-center justify-between border-t border-white/10 pt-1.5 text-[11px] text-slate-400">
                          <span>Chủ đề: {f.topic_title}</span>
                          <span className="flex items-center gap-0.5 font-semibold text-amber-300">
                            Đi tới bài học <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. Group: Quantities */}
              {(activeTab === 'all' || activeTab === 'quantities') && results.quantities.length > 0 && (
                <div className="space-y-2.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-emerald-300">
                    <Scale className="h-3.5 w-3.5" />
                    <span>Đại lượng & Đơn vị SI ({results.quantities.length})</span>
                  </div>
                  <div className="space-y-2">
                    {results.quantities.map((q) => (
                      <div
                        key={`q-${q.id}`}
                        onClick={() => handleSelectResult(`/topic/${q.topic_id}?tab=vault`)}
                        className="cursor-pointer space-y-2 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 transition duration-150 ease-snap hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-white/[0.06]"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="flex min-h-7 min-w-7 shrink-0 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-500/15 px-1.5 py-0.5 text-sm font-bold text-emerald-300">
                              <KatexFormula latex={q.symbol} />
                            </span>
                            <span className="text-xs font-bold text-white sm:text-sm">{q.name}</span>
                          </div>
                          <span className="shrink-0 rounded-md border border-emerald-400/30 bg-emerald-500/15 px-2 py-0.5 text-[11px] font-semibold text-emerald-300">
                            Đơn vị SI: {q.si_unit}
                          </span>
                        </div>

                        <p className="text-xs leading-relaxed text-slate-300">{q.description}</p>

                        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-1.5 text-[11px] text-slate-400">
                          <span>
                            Dụng cụ đo: <strong className="text-slate-200">{q.measuring_device || 'Thước / Cân / Đồng hồ'}</strong>
                          </span>
                          <span className="flex items-center gap-0.5 font-semibold text-emerald-300">
                            Lớp {q.grade_number} • {q.topic_title} <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 3. Group: Topics */}
              {(activeTab === 'all' || activeTab === 'topics') && results.topics.length > 0 && (
                <div className="space-y-2.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-sky-300">
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>Bài học & Chủ đề ({results.topics.length})</span>
                  </div>
                  <div className="space-y-2">
                    {results.topics.map((t) => (
                      <div
                        key={`t-${t.id}`}
                        onClick={() => handleSelectResult(`/topic/${t.id}`)}
                        className="cursor-pointer space-y-1.5 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 transition duration-150 ease-snap hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-white/[0.06]"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold text-white sm:text-sm">
                            {t.code}: {t.title}
                          </span>
                          <span className="shrink-0 rounded-md border border-white/10 bg-white/[0.05] px-2 py-0.5 text-[11px] font-semibold text-slate-300">
                            Lớp {t.grade_number} • {t.chapter_title}
                          </span>
                        </div>
                        <p className="line-clamp-2 text-xs leading-relaxed text-slate-400">{t.overview}</p>
                        <div className="flex justify-end pt-1 text-[11px] font-semibold text-sky-300">
                          Vào học chủ đề này →
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer with Hotkey Tips */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 bg-[#050816]/90 px-4 py-2.5 text-[11px] text-slate-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-white/15 bg-white/[0.06] px-1.5 py-0.5 font-mono text-[10px] text-slate-300">↑↓</kbd> Di chuyển
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="flex items-center gap-0.5 rounded border border-white/15 bg-white/[0.06] px-1.5 py-0.5 font-mono text-[10px] text-slate-300">
                    <CornerDownLeft className="h-2.5 w-2.5" /> Enter
                  </kbd>{' '}
                  Mở bài
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-white/15 bg-white/[0.06] px-1.5 py-0.5 font-mono text-[10px] text-slate-300">ESC</kbd> Đóng
                </span>
              </div>
              <span className="text-slate-500">Vật Lí 6–12 • Tra cứu toàn diện</span>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

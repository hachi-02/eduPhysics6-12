'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { SearchResults } from '@/types/cms';
import { KatexFormula } from './KatexRenderer';
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

export function GlobalSearchModal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
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

  // Global hotkey: Ctrl + K (or Cmd + K)
  useEffect(() => {
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
      results.formulas.forEach((f) => items.push({ type: 'formula', id: f.id, url: `/topic/${f.topic_id}` }));
    }
    if (activeTab === 'all' || activeTab === 'quantities') {
      results.quantities.forEach((q) => items.push({ type: 'quantity', id: q.id, url: `/topic/${q.topic_id}` }));
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
  };

  const totalResults =
    results.formulas.length + results.quantities.length + results.topics.length;

  return (
    <>
      {/* Search Trigger Button on Header */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex w-full items-center justify-between gap-2 rounded-xl border border-slate-200/90 bg-slate-100/70 px-3.5 py-2 text-xs text-slate-500 shadow-soft transition duration-150 ease-snap hover:border-slate-300 hover:bg-white hover:text-slate-800"
        title="Tìm kiếm công thức, đại lượng, bài học (Ctrl + K)"
      >
        <div className="flex items-center gap-2">
          <Search className="h-3.5 w-3.5 text-slate-400" />
          <span className="hidden sm:inline">Tìm công thức, đại lượng, bài học...</span>
          <span className="sm:hidden">Tìm kiếm</span>
        </div>
        <kbd className="hidden items-center gap-0.5 rounded-md border border-slate-200 bg-white px-1.5 py-0.5 font-mono text-[10px] text-slate-400 shadow-soft sm:inline-flex">
          Ctrl K
        </kbd>
      </button>

      {/* Modal Backdrop & Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex animate-fade-in items-start justify-center bg-slate-900/50 px-4 pt-12 backdrop-blur-sm sm:pt-16"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="flex max-h-[85vh] w-full max-w-2xl animate-pop flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-lift"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input Header */}
            <div className="flex items-center gap-3 border-b border-slate-100 bg-white p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Search className="h-4 w-4" />
              </span>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Nhập tên công thức (v, s, F, I, U...), đại lượng, đơn vị hoặc bài học..."
                className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none sm:text-base"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="rounded-lg p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
              <kbd
                onClick={() => setIsOpen(false)}
                className="hidden cursor-pointer items-center rounded-md bg-slate-100 px-2 py-1 font-mono text-[11px] text-slate-500 transition hover:bg-slate-200 sm:inline-flex"
              >
                ESC
              </kbd>
            </div>

            {/* Grade Filter Bar (Lớp 6 -> 12) */}
            <div className="flex items-center gap-1.5 overflow-x-auto border-b border-slate-100 bg-slate-50/70 px-4 py-2.5 text-xs">
              <span className="mr-1 shrink-0 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Lớp:
              </span>
              <button
                type="button"
                onClick={() => setSelectedGrade('all')}
                className={`shrink-0 rounded-lg px-2.5 py-1 font-semibold transition ${
                  selectedGrade === 'all'
                    ? 'bg-slate-900 text-white shadow-soft'
                    : 'border border-slate-200/80 bg-white text-slate-600 hover:bg-slate-100'
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
                      ? 'bg-brand-600 text-white shadow-glow'
                      : 'border border-slate-200/80 bg-white text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  Lớp {g}
                </button>
              ))}
            </div>

            {/* Category Filter Tabs when has query */}
            {query.trim() && (
              <div className="flex items-center gap-1.5 overflow-x-auto border-b border-slate-100 bg-white px-4 py-2 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('all')}
                  className={`rounded-lg px-3 py-1.5 font-semibold transition ${
                    activeTab === 'all'
                      ? 'bg-brand-600 text-white shadow-soft'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
                  }`}
                >
                  Tất cả ({totalResults})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('formulas')}
                  className={`flex items-center gap-1 rounded-lg px-3 py-1.5 font-semibold transition ${
                    activeTab === 'formulas'
                      ? 'bg-brand-600 text-white shadow-soft'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
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
                      ? 'bg-brand-600 text-white shadow-soft'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
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
                      ? 'bg-brand-600 text-white shadow-soft'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
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
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-semibold text-slate-700 sm:text-sm">
                    Tra cứu tức thì mọi Công thức, Đại lượng và Bài học Vật lí Lớp 6–12
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2 text-xs text-slate-500">
                    <span>Gợi ý:</span>
                    {['v = s / t', 'Định luật Ôm', 'Lực đẩy Ác-si-mét', 'Công suất', 'Quang năng', 'Bước sóng', 'Áp suất'].map(
                      (k) => (
                        <button
                          key={k}
                          type="button"
                          onClick={() => setQuery(k)}
                          className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 transition hover:bg-brand-50 hover:text-brand-700"
                        >
                          {k}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}

              {!loading && query.trim() && totalResults === 0 && (
                <div className="space-y-1 py-10 text-center text-xs text-slate-500 sm:text-sm">
                  <p>Không tìm thấy kết quả nào khớp với &quot;<strong>{query}</strong>&quot; {selectedGrade !== 'all' ? `ở Lớp ${selectedGrade}` : ''}.</p>
                  <p className="text-xs text-slate-400">
                    Thử đổi sang &quot;Tất cả lớp&quot;, tìm bằng ký hiệu toán học hoặc từ khóa ngắn gọn hơn.
                  </p>
                </div>
              )}

              {/* 1. Group: Formulas */}
              {(activeTab === 'all' || activeTab === 'formulas') && results.formulas.length > 0 && (
                <div className="space-y-2.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-brand-600">
                    <Calculator className="h-3.5 w-3.5" />
                    <span>Công thức Vật lí ({results.formulas.length})</span>
                  </div>
                  <div className="space-y-2">
                    {results.formulas.map((f) => (
                      <div
                        key={`f-${f.id}`}
                        onClick={() => handleSelectResult(`/topic/${f.topic_id}`)}
                        className="cursor-pointer space-y-2 rounded-2xl border border-slate-200/90 bg-white p-3.5 transition duration-150 ease-snap hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-soft"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold text-slate-900 sm:text-sm">{f.name}</span>
                          <span className="shrink-0 rounded-md bg-brand-50 px-2 py-0.5 text-[11px] font-semibold text-brand-700">
                            Lớp {f.grade_number} • {f.topic_code}
                          </span>
                        </div>

                        <div className="overflow-x-auto rounded-xl bg-slate-900 p-2.5 text-white">
                          <KatexFormula latex={f.latex_expression} displayMode />
                        </div>

                        {f.usage_note && (
                          <p className="line-clamp-1 text-xs text-slate-500">{f.usage_note}</p>
                        )}

                        <div className="flex items-center justify-between border-t border-slate-100 pt-1 text-[11px] text-slate-400">
                          <span>Chủ đề: {f.topic_title}</span>
                          <span className="flex items-center gap-0.5 font-semibold text-brand-600">
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
                  <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-emerald-600">
                    <Scale className="h-3.5 w-3.5" />
                    <span>Đại lượng & Đơn vị SI ({results.quantities.length})</span>
                  </div>
                  <div className="space-y-2">
                    {results.quantities.map((q) => (
                      <div
                        key={`q-${q.id}`}
                        onClick={() => handleSelectResult(`/topic/${q.topic_id}`)}
                        className="cursor-pointer space-y-2 rounded-2xl border border-slate-200/90 bg-white p-3.5 transition duration-150 ease-snap hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-soft"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 font-mono text-sm font-bold text-emerald-800">
                              {q.symbol}
                            </span>
                            <span className="text-xs font-bold text-slate-900 sm:text-sm">{q.name}</span>
                          </div>
                          <span className="shrink-0 rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                            Đơn vị SI: {q.si_unit}
                          </span>
                        </div>

                        <p className="text-xs leading-relaxed text-slate-600">{q.description}</p>

                        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-1 text-[11px] text-slate-400">
                          <span>
                            Dụng cụ đo: <strong className="text-slate-600">{q.measuring_device || 'Thước / Cân / Đồng hồ'}</strong>
                          </span>
                          <span className="flex items-center gap-0.5 font-semibold text-emerald-700">
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
                  <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-700">
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>Bài học & Chủ đề ({results.topics.length})</span>
                  </div>
                  <div className="space-y-2">
                    {results.topics.map((t) => (
                      <div
                        key={`t-${t.id}`}
                        onClick={() => handleSelectResult(`/topic/${t.id}`)}
                        className="cursor-pointer space-y-1.5 rounded-2xl border border-slate-200/90 bg-white p-3.5 transition duration-150 ease-snap hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-soft"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold text-slate-900 sm:text-sm">
                            {t.code}: {t.title}
                          </span>
                          <span className="shrink-0 rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                            Lớp {t.grade_number} • {t.chapter_title}
                          </span>
                        </div>
                        <p className="line-clamp-2 text-xs leading-relaxed text-slate-500">{t.overview}</p>
                        <div className="flex justify-end pt-1 text-[11px] font-semibold text-brand-600">
                          Vào học chủ đề này →
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer with Hotkey Tips */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 bg-slate-50/90 px-4 py-2.5 text-[11px] text-slate-500">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-slate-200 bg-white px-1.5 py-0.5 font-mono text-[10px]">↑↓</kbd> Di chuyển
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="flex items-center gap-0.5 rounded border border-slate-200 bg-white px-1.5 py-0.5 font-mono text-[10px]">
                    <CornerDownLeft className="h-2.5 w-2.5" /> Enter
                  </kbd>{' '}
                  Mở bài
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-slate-200 bg-white px-1.5 py-0.5 font-mono text-[10px]">ESC</kbd> Đóng
                </span>
              </div>
              <span className="text-slate-400">Vật Lí 6–12 • Tra cứu toàn diện</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

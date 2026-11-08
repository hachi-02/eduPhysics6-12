'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
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
  ExternalLink,
  Sparkles,
} from 'lucide-react';

export function GlobalSearchModal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResults>({
    formulas: [],
    quantities: [],
    topics: [],
  });
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'formulas' | 'quantities' | 'topics'>('all');

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
      setResults({ formulas: [], quantities: [], topics: [] });
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
        const res = await fetch(`/api/search?q=${encodeURIComponent(query.trim())}`);
        if (res.ok) {
          const data: SearchResults = await res.json();
          setResults(data);
        }
      } catch {
        // Ignore network error
      } finally {
        setLoading(false);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

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
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 border border-slate-200/80 text-xs text-slate-500 hover:text-slate-800 transition"
        title="Tìm kiếm công thức, đại lượng, bài học (Ctrl + K)"
      >
        <Search className="w-3.5 h-3.5 text-slate-400" />
        <span className="hidden sm:inline">Tìm công thức, đại lượng, bài học...</span>
        <span className="sm:hidden">Tìm kiếm</span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono bg-white rounded border border-slate-200 text-slate-400 shadow-2xs">
          Ctrl K
        </kbd>
      </button>

      {/* Modal Backdrop & Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-14 sm:pt-20 px-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-150">
          <div
            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col max-h-[82vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input Header */}
            <div className="p-4 border-b border-slate-100 flex items-center gap-3 bg-white">
              <Search className="w-5 h-5 text-indigo-600 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Nhập tên định luật, công thức (v, s, F...), đại lượng, đơn vị hoặc bài học..."
                className="w-full text-sm sm:text-base bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <kbd
                onClick={() => setIsOpen(false)}
                className="hidden sm:inline-flex items-center px-2 py-1 text-[11px] font-mono bg-slate-100 hover:bg-slate-200 rounded text-slate-500 cursor-pointer"
              >
                ESC
              </kbd>
            </div>

            {/* Filter Tabs when has query */}
            {query.trim() && (
              <div className="px-4 py-2 border-b border-slate-100 bg-slate-50/70 flex items-center gap-1.5 overflow-x-auto text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('all')}
                  className={`px-3 py-1 rounded-lg font-semibold transition ${
                    activeTab === 'all'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  Tất cả ({totalResults})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('formulas')}
                  className={`px-3 py-1 rounded-lg font-semibold transition flex items-center gap-1 ${
                    activeTab === 'formulas'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Công thức ({results.formulas.length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('quantities')}
                  className={`px-3 py-1 rounded-lg font-semibold transition flex items-center gap-1 ${
                    activeTab === 'quantities'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  <Scale className="w-3.5 h-3.5" />
                  <span>Đại lượng & Đơn vị ({results.quantities.length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('topics')}
                  className={`px-3 py-1 rounded-lg font-semibold transition flex items-center gap-1 ${
                    activeTab === 'topics'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Bài học ({results.topics.length})</span>
                </button>
              </div>
            )}

            {/* Results Container */}
            <div className="overflow-y-auto p-4 space-y-5 flex-1">
              {loading && (
                <div className="py-8 text-center text-xs text-slate-400">
                  Đang tìm kiếm trong 7 khối lớp (Lớp 6–12)...
                </div>
              )}

              {!loading && !query.trim() && (
                <div className="py-8 text-center space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-700">
                    Tra cứu tức thì mọi Công thức, Đại lượng và Bài học Vật lý Lớp 6–12
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2 text-xs text-slate-500">
                    <span>Gợi ý:</span>
                    {['v = s / t', 'Định luật Ôm', 'Lực đẩy Ác-si-mét', 'Công suất', 'Quang năng', 'Bước sóng'].map(
                      (k) => (
                        <button
                          key={k}
                          type="button"
                          onClick={() => setQuery(k)}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition"
                        >
                          {k}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}

              {!loading && query.trim() && totalResults === 0 && (
                <div className="py-10 text-center text-xs sm:text-sm text-slate-500 space-y-1">
                  <p>Không tìm thấy kết quả nào khớp với &quot;<strong>{query}</strong>&quot;.</p>
                  <p className="text-xs text-slate-400">
                    Thử tìm bằng tên đại lượng, ký hiệu toán học hoặc từ khóa ngắn gọn hơn.
                  </p>
                </div>
              )}

              {/* 1. Group: Formulas */}
              {(activeTab === 'all' || activeTab === 'formulas') && results.formulas.length > 0 && (
                <div className="space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600">
                    <Calculator className="w-3.5 h-3.5" />
                    <span>Công thức Vật lý ({results.formulas.length})</span>
                  </div>
                  <div className="space-y-2">
                    {results.formulas.map((f) => (
                      <div
                        key={f.id}
                        onClick={() => handleSelectResult(`/topic/${f.topic_id}`)}
                        className="p-3.5 rounded-xl border border-slate-200/90 hover:border-indigo-300 hover:bg-indigo-50/40 transition cursor-pointer space-y-2 bg-white"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs sm:text-sm font-bold text-slate-900">
                            {f.name}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-[11px] font-semibold shrink-0">
                            Lớp {f.grade_number} • {f.topic_code}
                          </span>
                        </div>

                        <div className="p-2.5 rounded-lg bg-slate-900 text-white overflow-x-auto">
                          <KatexFormula latex={f.latex_expression} displayMode />
                        </div>

                        {f.usage_note && (
                          <p className="text-xs text-slate-500 line-clamp-1">{f.usage_note}</p>
                        )}

                        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-100">
                          <span>Bài học: {f.topic_title}</span>
                          <span className="text-indigo-600 font-semibold flex items-center gap-0.5">
                            Đi tới bài học <ArrowRight className="w-3 h-3" />
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
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600">
                    <Scale className="w-3.5 h-3.5" />
                    <span>Đại lượng & Đơn vị SI ({results.quantities.length})</span>
                  </div>
                  <div className="space-y-2">
                    {results.quantities.map((q) => (
                      <div
                        key={q.id}
                        onClick={() => handleSelectResult(`/topic/${q.topic_id}`)}
                        className="p-3.5 rounded-xl border border-slate-200/90 hover:border-emerald-300 hover:bg-emerald-50/40 transition cursor-pointer space-y-2 bg-white"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-bold font-mono text-sm flex items-center justify-center shrink-0">
                              {q.symbol}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-slate-900">
                              {q.name}
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-semibold shrink-0">
                            Đơn vị SI: {q.si_unit}
                          </span>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed">{q.description}</p>

                        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 pt-1 border-t border-slate-100">
                          <span>
                            Dụng cụ đo: <strong className="text-slate-600">{q.measuring_device || 'Thước / Cân / Đồng hồ'}</strong>
                          </span>
                          <span className="text-emerald-700 font-semibold flex items-center gap-0.5">
                            Lớp {q.grade_number} • {q.topic_title} <ArrowRight className="w-3 h-3" />
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
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Bài học & Chủ đề ({results.topics.length})</span>
                  </div>
                  <div className="space-y-2">
                    {results.topics.map((t) => (
                      <div
                        key={t.id}
                        onClick={() => handleSelectResult(`/topic/${t.id}`)}
                        className="p-3.5 rounded-xl border border-slate-200/90 hover:border-indigo-300 hover:bg-indigo-50/40 transition cursor-pointer space-y-1.5 bg-white"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs sm:text-sm font-bold text-slate-900">
                            {t.code}: {t.title}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-semibold shrink-0">
                            Lớp {t.grade_number} • {t.chapter_title}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          {t.overview}
                        </p>
                        <div className="flex justify-end text-[11px] text-indigo-600 font-semibold pt-1">
                          Vào học chủ đề này →
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer with Hotkey Tips */}
            <div className="px-4 py-2.5 border-t border-slate-100 bg-slate-50/90 flex items-center justify-between text-[11px] text-slate-500">
              <span>Mẹo: Nhấn <strong>ESC</strong> để đóng cửa sổ tìm kiếm</span>
              <span className="text-slate-400">Vật Lý 6–12 • Tra cứu toàn diện</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, MotionConfig } from 'framer-motion';
import gsap from 'gsap';
import {
  ArrowLeft,
  BookMarked,
  Calculator,
  Check,
  Copy,
  ExternalLink,
  FileText,
  Filter,
  GitBranch,
  Layers,
  Maximize2,
  Minimize2,
  Printer,
  Ruler,
  Search,
  Sigma,
  Sparkles,
} from 'lucide-react';
import type { CheatsheetGradeData, GradeItem } from '@/types/cms';
import { KatexFormula, RichPhysicsText } from '@/components/KatexRenderer';
import { GlobalSearchModal } from '@/components/GlobalSearchModal';
import {
  getSavedGradePreference,
  isValidGradeNumber,
  RETURN_TO_CURRICULUM_KEY,
  saveGradePreference,
} from '@/lib/grade-context';

export interface V2CheatsheetStudioProps {
  cheatsheetsByGrade: Record<number, CheatsheetGradeData>;
  allGrades: GradeItem[];
  initialGrade: number;
  hasExplicitGrade?: boolean;
  initialChapterId?: number;
}

export function V2CheatsheetStudioClient({
  cheatsheetsByGrade,
  allGrades,
  initialGrade,
  hasExplicitGrade = false,
  initialChapterId,
}: V2CheatsheetStudioProps) {
  const studioRootRef = useRef<HTMLDivElement>(null);

  const [selectedGrade, setSelectedGrade] = useState<number>(initialGrade);
  const [selectedChapterId, setSelectedChapterId] = useState<number | 'all'>(
    initialChapterId ?? 'all'
  );
  const [viewMode, setViewMode] = useState<'full' | 'compact'>('full');
  const [showQuantities, setShowQuantities] = useState<boolean>(true);
  const [showDerived, setShowDerived] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => {
    if (hasExplicitGrade) {
      saveGradePreference(initialGrade);
      return;
    }
    const saved = getSavedGradePreference();
    if (typeof saved === 'number' && isValidGradeNumber(saved) && cheatsheetsByGrade[saved]) {
      setSelectedGrade(saved);
    }
  }, [hasExplicitGrade, initialGrade, cheatsheetsByGrade]);

  const activeData =
    cheatsheetsByGrade[selectedGrade] || cheatsheetsByGrade[allGrades[0]?.grade_number ?? 6];

  useEffect(() => {
    if (!activeData) return;
    if (initialChapterId && activeData.chapters.some((c) => c.id === initialChapterId)) {
      setSelectedChapterId(initialChapterId);
    } else if (
      selectedChapterId !== 'all' &&
      !activeData.chapters.some((c) => c.id === selectedChapterId)
    ) {
      setSelectedChapterId('all');
    }
  }, [selectedGrade, activeData, initialChapterId, selectedChapterId]);

  const handleSelectGrade = (gradeNum: number) => {
    setSelectedGrade(gradeNum);
    setSelectedChapterId('all');
    saveGradePreference(gradeNum);
    try {
      sessionStorage.setItem(RETURN_TO_CURRICULUM_KEY, String(gradeNum));
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
        gsap.from('[data-cs-reveal]', {
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

  const handleCopyLatex = (key: string, text: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey((prev) => (prev === key ? null : prev));
    }, 1500);
  };

  const filteredChapters = useMemo(() => {
    if (!activeData) return [];
    const baseChapters =
      selectedChapterId === 'all'
        ? activeData.chapters
        : activeData.chapters.filter((ch) => ch.id === selectedChapterId);

    const q = searchQuery.trim().toLowerCase();
    if (!q) return baseChapters;

    return baseChapters
      .map((ch) => {
        const chapterMatches =
          ch.title.toLowerCase().includes(q) || ch.code.toLowerCase().includes(q);
        const filteredTopics = ch.topics
          .map((tp) => {
            const topicMatches =
              chapterMatches ||
              tp.title.toLowerCase().includes(q) ||
              tp.code.toLowerCase().includes(q);
            const matchedFormulas = topicMatches
              ? tp.formulas
              : tp.formulas.filter(
                  (f) =>
                    f.name.toLowerCase().includes(q) ||
                    f.plain_expression.toLowerCase().includes(q) ||
                    f.usage_note.toLowerCase().includes(q)
                );
            const matchedQuantities = topicMatches
              ? tp.quantities
              : tp.quantities.filter(
                  (qty) =>
                    qty.name.toLowerCase().includes(q) ||
                    qty.symbol.toLowerCase().includes(q) ||
                    qty.si_unit.toLowerCase().includes(q)
                );
            return {
              ...tp,
              formulas: matchedFormulas,
              quantities: matchedQuantities,
            };
          })
          .filter((tp) => tp.formulas.length > 0 || tp.quantities.length > 0);

        return {
          ...ch,
          topics: filteredTopics,
        };
      })
      .filter((ch) => ch.topics.length > 0);
  }, [activeData, selectedChapterId, searchQuery]);

  const totalFormulasDisplayed = filteredChapters.reduce(
    (sum, ch) => sum + ch.topics.reduce((ts, tp) => ts + tp.formulas.length, 0),
    0
  );
  const totalQuantitiesDisplayed = filteredChapters.reduce(
    (sum, ch) => sum + ch.topics.reduce((ts, tp) => ts + tp.quantities.length, 0),
    0
  );

  if (!activeData) return null;

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
              'radial-gradient(62% 85% at 15% 0%, rgba(245,158,11,0.12) 0%, transparent 65%), radial-gradient(50% 80% at 88% 5%, rgba(56,189,248,0.10) 0%, transparent 68%)',
          }}
        />

        {/* ================================================================
            1. STICKY SINGLE-ROW COMMAND BAR (Hidden on A4 Print)
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

                <span className="hidden items-center gap-1 rounded-lg border border-amber-400/30 bg-amber-500/10 px-2 py-1 font-mono text-[10px] font-bold tracking-wider text-amber-200 xl:inline-flex">
                  <BookMarked className="h-3 w-3" />
                  CẨM NANG A4
                </span>

                <label className="relative flex shrink-0 items-center">
                  <span className="sr-only">Chọn khối lớp cẩm nang</span>
                  <select
                    value={String(selectedGrade)}
                    onChange={(e) => handleSelectGrade(Number(e.target.value))}
                    className="rounded-xl border border-white/[0.06] bg-[#040713] px-2.5 py-1.5 font-mono text-xs font-bold text-amber-200 transition hover:border-amber-400/40"
                  >
                    {allGrades.map((g) => (
                      <option
                        key={g.id}
                        value={String(g.grade_number)}
                        className="bg-[#070b1a] text-slate-100"
                      >
                        Lớp {g.grade_number}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              {/* Center Cluster: Desktop View Mode Toggle */}
              <nav
                aria-label="Chế độ hiển thị cẩm nang"
                className="hidden items-center gap-1 rounded-xl border border-white/[0.06] bg-[#040713]/90 p-1 lg:flex"
              >
                {(
                  [
                    { id: 'full', label: 'Chi tiết & Đại lượng', icon: Maximize2 },
                    { id: 'compact', label: 'Thu gọn Siêu tốc', icon: Minimize2 },
                  ] as const
                ).map((mode) => {
                  const Icon = mode.icon;
                  const active = viewMode === mode.id;
                  return (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setViewMode(mode.id)}
                      className={`relative flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
                        active ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="v2CheatsheetModeDesktop"
                          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                          className="absolute inset-0 rounded-lg border border-amber-400/40 bg-amber-500/20"
                        />
                      )}
                      <Icon
                        className={`relative z-10 h-3.5 w-3.5 ${
                          active ? 'text-amber-300' : 'text-slate-400'
                        }`}
                      />
                      <span className="relative z-10 whitespace-nowrap">{mode.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Right Cluster: Option toggles + GlobalSearch + Print A4 */}
              <div className="flex shrink-0 items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setShowQuantities((v) => !v)}
                  className={`hidden rounded-xl border px-2.5 py-2 text-xs font-bold transition md:inline-flex ${
                    showQuantities
                      ? 'border-emerald-400/40 bg-emerald-500/15 text-emerald-200'
                      : 'border-white/[0.06] bg-white/[0.04] text-slate-400'
                  }`}
                >
                  Đơn vị SI
                </button>
                <button
                  type="button"
                  onClick={() => setShowDerived((v) => !v)}
                  className={`hidden rounded-xl border px-2.5 py-2 text-xs font-bold transition md:inline-flex ${
                    showDerived
                      ? 'border-sky-400/40 bg-sky-500/15 text-sky-200'
                      : 'border-white/[0.06] bg-white/[0.04] text-slate-400'
                  }`}
                >
                  Suy diễn
                </button>

                <div className="w-9 sm:w-32 lg:w-32 xl:w-40">
                  <GlobalSearchModal variant="glass" />
                </div>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-amber-400/45 bg-amber-500/20 px-3 py-2 text-xs font-extrabold text-amber-100 transition hover:bg-amber-500/30"
                >
                  <Printer className="h-3.5 w-3.5 text-amber-300" />
                  <span className="hidden sm:inline">In A4</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* ================================================================
            MAIN CHEATSHEET DOCUMENT
        ================================================================ */}
        <main className="relative z-10 mx-auto max-w-[1440px] space-y-6 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 print:max-w-none print:p-0">
          {/* Grade & Chapter Control Banner */}
          <section
            data-cs-reveal
            className="rounded-3xl border border-white/[0.06] bg-[#060917]/90 p-6 sm:p-7 print:rounded-none print:border-0 print:border-b-2 print:border-slate-900 print:bg-white print:p-0 print:pb-4"
          >
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-amber-200 print:border-slate-300 print:bg-slate-100 print:text-slate-900">
                    <Sparkles className="h-3.5 w-3.5 text-amber-300 print:hidden" />
                    {activeData.grade.level_group} · Lớp {selectedGrade}
                  </span>
                  <span className="rounded-full border border-white/[0.06] bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-slate-300 print:border-slate-300 print:text-slate-700">
                    {filteredChapters.length} chương · {totalFormulasDisplayed} công thức ·{' '}
                    {totalQuantitiesDisplayed} đại lượng SI
                  </span>
                </div>

                <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl print:text-slate-900">
                  Cẩm nang Công thức &amp; Đơn vị SI Vật lý Lớp {selectedGrade}
                </h1>
                <p className="max-w-2xl text-sm leading-relaxed text-slate-300 print:text-slate-700">
                  {activeData.grade.description ||
                    'Tổng hợp đầy đủ công thức trọng tâm, hệ đại lượng chuẩn SI, điều kiện áp dụng và công thức suy diễn phục vụ ôn thi nhanh.'}
                </p>
              </div>

              {/* Screen Grade Pills */}
              <div className="no-print flex flex-wrap gap-1.5 print:hidden">
                {allGrades.map((g) => {
                  const active = g.grade_number === selectedGrade;
                  return (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => handleSelectGrade(g.grade_number)}
                      className={`rounded-xl border px-3 py-1.5 font-mono text-xs font-bold transition ${
                        active
                          ? 'border-amber-400/50 bg-amber-500/20 text-amber-200'
                          : 'border-white/[0.06] bg-white/[0.03] text-slate-400 hover:border-sky-400/40 hover:text-white'
                      }`}
                    >
                      Lớp {g.grade_number}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filter & Chapter Picker (Screen Only) */}
            <div className="no-print mt-5 grid grid-cols-1 gap-3 border-t border-white/[0.06] pt-4 md:grid-cols-12 print:hidden">
              <div className="relative md:col-span-5">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Tìm nhanh công thức, đại lượng trong Lớp ${selectedGrade}...`}
                  className="w-full rounded-xl border border-white/[0.06] bg-[#040713] py-2 pl-9 pr-3 text-xs text-white placeholder-slate-500 focus:border-amber-400/50"
                />
              </div>

              <div className="md:col-span-5">
                <select
                  value={selectedChapterId === 'all' ? 'all' : String(selectedChapterId)}
                  onChange={(e) => {
                    const v = e.target.value;
                    setSelectedChapterId(v === 'all' ? 'all' : Number(v));
                  }}
                  className="w-full rounded-xl border border-white/[0.06] bg-[#040713] px-3 py-2 text-xs font-semibold text-slate-200 focus:border-sky-400/50"
                >
                  <option value="all" className="bg-[#070b1a]">
                    Tất cả các Chương Lớp {selectedGrade} ({activeData.chapters.length} chương)
                  </option>
                  {activeData.chapters.map((ch) => (
                    <option key={ch.id} value={String(ch.id)} className="bg-[#070b1a]">
                      {ch.code}: {ch.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-end gap-2 md:col-span-2">
                <Link
                  href={`/calculator?grade=${selectedGrade}`}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-sky-400/35 bg-sky-500/15 px-3 py-2 text-xs font-bold text-sky-200 transition hover:bg-sky-500/25"
                >
                  <Calculator className="h-3.5 w-3.5" />
                  Đổi SI / Giải
                </Link>
              </div>
            </div>
          </section>

          {/* Chapters Cheatsheet List */}
          {filteredChapters.length === 0 ? (
            <div className="rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-10 text-center text-sm text-slate-400">
              Không tìm thấy công thức hoặc đại lượng khớp với từ khóa tìm kiếm.
            </div>
          ) : (
            <div className="space-y-8 print:space-y-6">
              {filteredChapters.map((ch) => (
                <section
                  key={ch.id}
                  data-cs-reveal
                  className="space-y-5 rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-5 sm:p-7 print:break-inside-avoid-page print:rounded-none print:border-slate-300 print:bg-white print:p-4"
                >
                  {/* Chapter Banner */}
                  <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/[0.06] pb-4 print:border-slate-300">
                    <div className="space-y-1">
                      <span className="inline-block rounded-md border border-sky-400/30 bg-sky-500/10 px-2.5 py-0.5 font-mono text-[11px] font-bold text-sky-300 print:border-slate-300 print:bg-slate-100 print:text-slate-900">
                        {ch.code} · {ch.topics.length} chủ đề
                      </span>
                      <h2 className="text-xl font-extrabold text-white print:text-slate-900">
                        {ch.title}
                      </h2>
                      {ch.description && (
                        <p className="text-xs leading-relaxed text-slate-400 sm:text-sm print:text-slate-600">
                          {ch.description}
                        </p>
                      )}
                    </div>

                    <Link
                      href={`/chapter/${ch.id}`}
                      className="no-print inline-flex items-center gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-slate-200 transition hover:border-amber-400/40 hover:text-amber-200 print:hidden"
                    >
                      <Layers className="h-3.5 w-3.5 text-amber-300" />
                      Vào trang Chương
                    </Link>
                  </div>

                  {/* Key Takeaways & Chapter Quick Cheatsheet */}
                  {viewMode === 'full' &&
                    (ch.key_takeaways.length > 0 || ch.formula_cheatsheet.length > 0) && (
                      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        {ch.key_takeaways.length > 0 && (
                          <div className="rounded-2xl border border-amber-400/20 bg-amber-500/[0.06] p-4 space-y-2 print:border-slate-300 print:bg-slate-50">
                            <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-300 print:text-slate-800">
                              TRỌNG TÂM CHƯƠNG CẦN NẮM
                            </div>
                            <ul className="space-y-1.5 text-xs leading-relaxed text-slate-200 print:text-slate-800">
                              {ch.key_takeaways.map((kt, kIdx) => (
                                <li key={kIdx} className="flex items-start gap-2">
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400 print:bg-slate-700" />
                                  <span>
                                    <RichPhysicsText text={kt} />
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {ch.formula_cheatsheet.length > 0 && (
                          <div className="rounded-2xl border border-white/[0.06] bg-[#040713]/90 p-4 space-y-2 print:border-slate-300 print:bg-white">
                            <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-sky-300 print:text-slate-800">
                              BẢNG TÓM TẮT CÔNG THỨC NHANH CHƯƠNG {ch.code}
                            </div>
                            <div className="space-y-2">
                              {ch.formula_cheatsheet.map((fc, fIdx) => (
                                <div
                                  key={fIdx}
                                  className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2 text-xs print:border-slate-200 print:bg-white"
                                >
                                  <div className="font-bold text-slate-200 print:text-slate-900">
                                    {fc.name}
                                  </div>
                                  <div className="text-amber-300 print:text-slate-900">
                                    <KatexFormula latex={fc.latex} />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                  {/* Topics Breakdown */}
                  <div className="space-y-5">
                    {ch.topics.map((tp) => (
                      <div
                        key={tp.id}
                        className="space-y-4 rounded-2xl border border-white/[0.06] bg-[#040713]/85 p-4 sm:p-5 print:border-slate-300 print:bg-white"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-3 print:border-slate-200">
                          <div className="flex items-center gap-2">
                            <span className="rounded-md border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] font-bold text-emerald-300 print:border-slate-300 print:text-slate-800">
                              {tp.code}
                            </span>
                            <h3 className="text-sm font-extrabold text-white sm:text-base print:text-slate-900">
                              {tp.title}
                            </h3>
                          </div>
                          <Link
                            href={`/topic/${tp.id}?tab=vault`}
                            className="no-print inline-flex items-center gap-1 text-xs font-bold text-sky-300 hover:underline print:hidden"
                          >
                            Học bài <ExternalLink className="h-3 w-3" />
                          </Link>
                        </div>

                        {/* Formulas Grid */}
                        {tp.formulas.length > 0 && (
                          <div
                            className={`grid gap-3.5 ${
                              viewMode === 'compact'
                                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                                : 'grid-cols-1 lg:grid-cols-2'
                            }`}
                          >
                            {tp.formulas.map((fm) => {
                              const copyId = `cs-fm-${fm.id}`;
                              return (
                                <div
                                  key={fm.id}
                                  className="flex flex-col justify-between space-y-3 rounded-2xl border border-white/[0.06] bg-[#070b1a]/90 p-4 print:border-slate-300 print:bg-white"
                                >
                                  <div className="space-y-2.5">
                                    <div className="flex items-start justify-between gap-2">
                                      <div>
                                        <div className="text-sm font-extrabold text-white print:text-slate-900">
                                          {fm.name}
                                        </div>
                                        <div className="font-mono text-[10px] text-sky-300 print:text-slate-500">
                                          {fm.plain_expression}
                                        </div>
                                      </div>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          handleCopyLatex(
                                            copyId,
                                            fm.latex_expression || fm.plain_expression
                                          )
                                        }
                                        className="no-print inline-flex shrink-0 items-center gap-1 rounded-lg border border-white/[0.06] bg-white/[0.04] px-2 py-1 font-mono text-[10px] font-semibold text-slate-300 transition hover:border-sky-400/40 print:hidden"
                                      >
                                        {copiedKey === copyId ? (
                                          <Check className="h-3 w-3 text-emerald-300" />
                                        ) : (
                                          <Copy className="h-3 w-3" />
                                        )}
                                      </button>
                                    </div>

                                    <div className="overflow-x-auto rounded-xl border border-white/[0.06] bg-[#03050d] px-3 py-3 text-center text-amber-200 print:border-slate-200 print:bg-slate-50 print:text-slate-900">
                                      <KatexFormula
                                        latex={fm.latex_expression || fm.plain_expression}
                                        displayMode
                                      />
                                    </div>

                                    {/* Full 1-Column Variable Explanations in Full Mode */}
                                    {viewMode === 'full' && fm.variables && fm.variables.length > 0 && (
                                      <div className="flex flex-col gap-1.5">
                                        {fm.variables.map((v, vIdx) => (
                                          <div
                                            key={`${v.symbol}-${vIdx}`}
                                            className="flex items-start justify-between gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-xs print:border-slate-200 print:bg-white"
                                          >
                                            <div className="flex min-w-0 flex-1 items-start gap-2">
                                              <span className="inline-flex min-w-[2.75rem] shrink-0 items-center justify-center rounded-md border border-amber-400/25 bg-amber-500/10 px-1.5 py-0.5 font-bold text-amber-300 print:border-slate-300 print:bg-slate-100 print:text-slate-900">
                                                <KatexFormula latex={v.symbol} />
                                              </span>
                                              <span className="min-w-0 flex-1 py-0.5 leading-relaxed text-slate-200 print:text-slate-800">
                                                <RichPhysicsText text={v.name} />
                                              </span>
                                            </div>
                                            <span className="shrink-0 rounded-md border border-emerald-400/25 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] font-semibold text-emerald-300 print:border-slate-300 print:bg-white print:text-slate-900">
                                              {v.unit}
                                            </span>
                                          </div>
                                        ))}
                                      </div>
                                    )}

                                    {showDerived &&
                                      viewMode === 'full' &&
                                      fm.derived_formulas &&
                                      fm.derived_formulas.length > 0 && (
                                        <div className="space-y-1 border-t border-white/[0.06] pt-2 text-xs print:border-slate-200">
                                          <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 print:text-slate-600">
                                            CÔNG THỨC SUY RỘNG
                                          </div>
                                          {fm.derived_formulas.map((df, dIdx) => (
                                            <div
                                              key={dIdx}
                                              className="flex flex-wrap items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-slate-300 print:border-slate-200 print:text-slate-800"
                                            >
                                              <span className="font-bold text-sky-300 print:text-slate-900">
                                                <KatexFormula latex={df.expression} />
                                              </span>
                                              <span className="text-slate-400 print:text-slate-600">
                                                → <RichPhysicsText text={df.description} />
                                              </span>
                                            </div>
                                          ))}
                                        </div>
                                      )}
                                  </div>

                                  {viewMode === 'full' && fm.usage_note && (
                                    <div className="rounded-xl border border-amber-400/20 bg-amber-500/10 px-3 py-2 text-xs leading-relaxed text-amber-100 print:border-slate-200 print:bg-slate-50 print:text-slate-700">
                                      <strong className="text-amber-300 print:text-slate-900">
                                        Lưu ý:{' '}
                                      </strong>
                                      <RichPhysicsText text={fm.usage_note} />
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* SI Quantities Matrix */}
                        {showQuantities && tp.quantities.length > 0 && (
                          <div className="space-y-2 border-t border-white/[0.06] pt-3 print:border-slate-200">
                            <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-300 print:text-slate-800">
                              <Ruler className="h-3.5 w-3.5" />
                              <span>Đại lượng Vật lý &amp; Đơn vị SI ({tp.quantities.length})</span>
                            </div>
                            <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2">
                              {tp.quantities.map((qty) => (
                                <div
                                  key={qty.id}
                                  className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-[#070b1a]/80 p-3 text-xs print:border-slate-200 print:bg-white"
                                >
                                  <div className="flex min-h-9 min-w-9 shrink-0 items-center justify-center rounded-lg border border-amber-400/30 bg-amber-500/10 px-2 py-1 font-bold text-amber-200 print:border-slate-300 print:bg-slate-100 print:text-slate-900">
                                    <KatexFormula latex={qty.symbol} />
                                  </div>
                                  <div className="min-w-0 space-y-1">
                                    <div className="font-extrabold text-white print:text-slate-900">
                                      {qty.name}
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2 text-[11px]">
                                      <span className="rounded border border-emerald-400/25 bg-emerald-500/10 px-1.5 py-0.5 font-mono font-bold text-emerald-300 print:border-slate-300 print:text-slate-900">
                                        SI: {qty.si_unit}
                                      </span>
                                      {qty.other_units && (
                                        <span className="text-slate-400 print:text-slate-600">
                                          Khác: {qty.other_units}
                                        </span>
                                      )}
                                      {viewMode === 'full' && qty.measuring_device && (
                                        <span className="text-sky-300 print:text-slate-700">
                                          Đo: {qty.measuring_device}
                                        </span>
                                      )}
                                    </div>
                                    {viewMode === 'full' && qty.description && (
                                      <p className="leading-relaxed text-slate-300 print:text-slate-700">
                                        <RichPhysicsText text={qty.description} />
                                      </p>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </main>
      </div>
    </MotionConfig>
  );
}

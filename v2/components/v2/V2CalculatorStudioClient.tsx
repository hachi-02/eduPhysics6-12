'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import gsap from 'gsap';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Atom,
  BookOpen,
  Calculator,
  Check,
  Compass,
  Copy,
  FileText,
  Filter,
  FlaskConical,
  Layers,
  Printer,
  RotateCcw,
  Ruler,
  Scale,
  Search,
  Sigma,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react';
import {
  CODATA_CONSTANTS,
  convertPhysicsUnit,
  formatPhysicsNumber,
  formatScientificLatex,
  FORMULA_SOLVERS,
  SI_PREFIXES,
  UNIT_CATEGORIES,
} from '@/lib/physics-calculator';
import { KatexFormula } from '@/components/KatexRenderer';
import { GlobalSearchModal } from '@/components/GlobalSearchModal';
import {
  getSavedGradePreference,
  RETURN_TO_CURRICULUM_KEY,
  saveGradePreference,
  type GradeSelection,
} from '@/lib/grade-context';

export type CalculatorStudioMode = 'converter' | 'solver' | 'constants';

export interface V2CalculatorStudioProps {
  initialGrade?: GradeSelection;
  hasExplicitGrade?: boolean;
  initialMode?: CalculatorStudioMode;
  initialFormulaId?: string;
}

const STUDIO_TABS: {
  id: CalculatorStudioMode;
  label: string;
  shortLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  count: number;
}[] = [
  {
    id: 'converter',
    label: 'Quy đổi Đơn vị SI',
    shortLabel: 'Đổi SI',
    icon: Ruler,
    count: UNIT_CATEGORIES.length,
  },
  {
    id: 'solver',
    label: 'Rút ẩn & Giải Công thức',
    shortLabel: 'Giải công thức',
    icon: Calculator,
    count: FORMULA_SOLVERS.length,
  },
  {
    id: 'constants',
    label: 'Hằng số CODATA & 10ⁿ',
    shortLabel: 'CODATA & 10ⁿ',
    icon: Atom,
    count: CODATA_CONSTANTS.length,
  },
];

const CATEGORY_PRESETS: Record<string, { label: string; value: string }[]> = {
  velocity: [
    { label: '10', value: '10' },
    { label: '36', value: '36' },
    { label: '54', value: '54' },
    { label: '72', value: '72' },
    { label: '90', value: '90' },
  ],
  temperature: [
    { label: '0', value: '0' },
    { label: '25', value: '25' },
    { label: '27', value: '27' },
    { label: '100', value: '100' },
    { label: '-273.15', value: '-273.15' },
  ],
  density: [
    { label: '0.8', value: '0.8' },
    { label: '1', value: '1' },
    { label: '1.2', value: '1.2' },
    { label: '2.7', value: '2.7' },
    { label: '7.8', value: '7.8' },
  ],
  area: [
    { label: '1', value: '1' },
    { label: '10', value: '10' },
    { label: '25', value: '25' },
    { label: '50', value: '50' },
    { label: '250', value: '250' },
  ],
  volume: [
    { label: '0.5', value: '0.5' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '20', value: '20' },
    { label: '250', value: '250' },
  ],
  pressure: [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '100', value: '100' },
    { label: '760', value: '760' },
  ],
  energy: [
    { label: '1', value: '1' },
    { label: '10', value: '10' },
    { label: '100', value: '100' },
    { label: '500', value: '500' },
  ],
};

const DEFAULT_PRESETS = [
  { label: '1', value: '1' },
  { label: '10', value: '10' },
  { label: '50', value: '50' },
  { label: '100', value: '100' },
  { label: '500', value: '500' },
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

export function V2CalculatorStudioClient({
  initialGrade = 'all',
  hasExplicitGrade = false,
  initialMode = 'converter',
  initialFormulaId,
}: V2CalculatorStudioProps) {
  const studioRootRef = useRef<HTMLDivElement>(null);

  const [activeMode, setActiveMode] = useState<CalculatorStudioMode>(initialMode);
  const [activeGrade, setActiveGrade] = useState<GradeSelection>(initialGrade);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Sync saved grade preference on mount (unless URL explicitly passed ?grade=)
  useEffect(() => {
    if (hasExplicitGrade) {
      saveGradePreference(initialGrade);
      return;
    }
    const saved = getSavedGradePreference();
    if (saved !== null) {
      setActiveGrade(saved);
    }
  }, [hasExplicitGrade, initialGrade]);

  const handleGradeChange = (nextGrade: GradeSelection) => {
    setActiveGrade(nextGrade);
    saveGradePreference(nextGrade);
    try {
      sessionStorage.setItem(RETURN_TO_CURRICULUM_KEY, String(nextGrade));
    } catch {
      // Ignore storage error
    }
  };

  const markReturnToCurriculum = () => {
    try {
      sessionStorage.setItem(RETURN_TO_CURRICULUM_KEY, String(activeGrade));
    } catch {
      // Ignore storage error
    }
  };

  // GSAP subtle entrance stagger
  useEffect(() => {
    if (!studioRootRef.current) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('[data-calc-reveal]', {
          y: 16,
          opacity: 0,
          duration: 0.48,
          stagger: 0.06,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });
      });
    }, studioRootRef);
    return () => ctx.revert();
  }, []);

  const handleCardPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  const handleCopyText = (key: string, text: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey((prev) => (prev === key ? null : prev));
    }, 1500);
  };

  // ============================================================================
  // MODE 1 STATE: SI UNIT CONVERTER
  // ============================================================================
  const [selectedCatId, setSelectedCatId] = useState<string>('velocity');
  const [inputValStr, setInputValStr] = useState<string>('54');
  const [fromUnitId, setFromUnitId] = useState<string>('km/h');
  const [categoryQuery, setCategoryQuery] = useState<string>('');

  const filteredCategories = useMemo(() => {
    const q = categoryQuery.trim().toLowerCase();
    if (!q) return UNIT_CATEGORIES;
    return UNIT_CATEGORIES.filter(
      (cat) =>
        cat.name.toLowerCase().includes(q) ||
        cat.siSymbol.toLowerCase().includes(q) ||
        cat.gradesLabel.toLowerCase().includes(q) ||
        cat.units.some(
          (u) => u.name.toLowerCase().includes(q) || u.symbol.toLowerCase().includes(q)
        )
    );
  }, [categoryQuery]);

  const activeCategory = useMemo(
    () => UNIT_CATEGORIES.find((c) => c.id === selectedCatId) || UNIT_CATEGORIES[0],
    [selectedCatId]
  );

  const selectCategoryWithIllustration = (catId: string) => {
    setSelectedCatId(catId);
    const cat = UNIT_CATEGORIES.find((c) => c.id === catId) || UNIT_CATEGORIES[0];
    const defaultNonSI = cat.units.find((u) => !u.isSI) || cat.units[0];
    setFromUnitId(defaultNonSI.id);
    if (cat.id === 'velocity') setInputValStr('54');
    else if (cat.id === 'temperature') setInputValStr('27');
    else if (cat.id === 'density') setInputValStr('1.2');
    else if (cat.id === 'area') setInputValStr('25');
    else if (cat.id === 'volume') setInputValStr('2');
    else if (cat.id === 'pressure') setInputValStr('1');
    else setInputValStr('100');
  };

  const numericInput = useMemo(() => {
    const cleaned = inputValStr.replace(',', '.').trim();
    const parsed = parseFloat(cleaned);
    return Number.isFinite(parsed) ? parsed : 0;
  }, [inputValStr]);

  const conversionResult = useMemo(
    () => convertPhysicsUnit(activeCategory.id, numericInput, fromUnitId),
    [activeCategory.id, numericInput, fromUnitId]
  );

  const presetsForCategory = CATEGORY_PRESETS[activeCategory.id] ?? DEFAULT_PRESETS;

  // ============================================================================
  // MODE 2 STATE: 4-STEP ALGEBRAIC FORMULA SOLVER
  // ============================================================================
  const resolvedInitialSolver = useMemo(() => {
    if (initialFormulaId) {
      const match = FORMULA_SOLVERS.find((s) => s.id === initialFormulaId);
      if (match) return match;
    }
    if (typeof initialGrade === 'number') {
      const gradeMatch = FORMULA_SOLVERS.find((s) => s.grade === initialGrade);
      if (gradeMatch) return gradeMatch;
    }
    return FORMULA_SOLVERS[0];
  }, [initialFormulaId, initialGrade]);

  const [selectedSolverId, setSelectedSolverId] = useState<string>(resolvedInitialSolver.id);
  const [solverQuery, setSolverQuery] = useState<string>('');
  const [solverGradeFilter, setSolverGradeFilter] = useState<GradeSelection>('all');

  const filteredSolvers = useMemo(() => {
    const q = solverQuery.trim().toLowerCase();
    return FORMULA_SOLVERS.filter((spec) => {
      if (solverGradeFilter !== 'all' && spec.grade !== solverGradeFilter) return false;
      if (!q) return true;
      return (
        spec.title.toLowerCase().includes(q) ||
        spec.domain.toLowerCase().includes(q) ||
        spec.description.toLowerCase().includes(q) ||
        spec.variables.some(
          (v) => v.name.toLowerCase().includes(q) || v.key.toLowerCase().includes(q)
        )
      );
    });
  }, [solverQuery, solverGradeFilter]);

  const activeSolver = useMemo(
    () => FORMULA_SOLVERS.find((s) => s.id === selectedSolverId) || FORMULA_SOLVERS[0],
    [selectedSolverId]
  );

  const [targetVarKey, setTargetVarKey] = useState<string>(activeSolver.variables[0].key);
  const [varInputs, setVarInputs] = useState<Record<string, string>>(() => {
    const defaults: Record<string, string> = {};
    for (const v of activeSolver.variables) {
      defaults[v.key] = String(v.defaultValue);
    }
    return defaults;
  });

  const handleSelectSolver = (solverId: string) => {
    setSelectedSolverId(solverId);
    const next = FORMULA_SOLVERS.find((s) => s.id === solverId) || FORMULA_SOLVERS[0];
    setTargetVarKey(next.variables[0].key);
    const defaults: Record<string, string> = {};
    for (const v of next.variables) {
      defaults[v.key] = String(v.defaultValue);
    }
    setVarInputs(defaults);
  };

  const resetSolverDefaults = () => {
    const defaults: Record<string, string> = {};
    for (const v of activeSolver.variables) {
      defaults[v.key] = String(v.defaultValue);
    }
    setVarInputs(defaults);
  };

  const numericSolverVars = useMemo(() => {
    const out: Record<string, number> = {};
    for (const v of activeSolver.variables) {
      const raw = (varInputs[v.key] ?? String(v.defaultValue)).replace(',', '.');
      const n = parseFloat(raw);
      out[v.key] = Number.isFinite(n) ? n : 0;
    }
    return out;
  }, [activeSolver, varInputs]);

  const solverSolution = useMemo(() => {
    const targetSpec =
      activeSolver.targets[targetVarKey] ||
      activeSolver.targets[activeSolver.variables[0].key];
    const targetVarMeta =
      activeSolver.variables.find((v) => v.key === targetSpec.targetKey) ||
      activeSolver.variables[0];

    let resultVal = 0;
    try {
      resultVal = targetSpec.compute(numericSolverVars);
    } catch {
      resultVal = NaN;
    }

    const isValid = Number.isFinite(resultVal);

    return {
      targetVarMeta,
      derivedLatex: targetSpec.derivedLatex,
      substituteLatex: targetSpec.substituteLatex(numericSolverVars),
      resultVal,
      isValid,
      formattedResult: isValid ? formatPhysicsNumber(resultVal) : 'Không xác định',
      scientificLatex: isValid ? formatScientificLatex(resultVal) : '\\text{Không xác định}',
    };
  }, [activeSolver, targetVarKey, numericSolverVars]);

  // ============================================================================
  // MODE 3 STATE: CODATA CONSTANTS & SI PREFIXES
  // ============================================================================
  const [constantQuery, setConstantQuery] = useState<string>('');

  const filteredConstants = useMemo(() => {
    const q = constantQuery.trim().toLowerCase();
    if (!q) return CODATA_CONSTANTS;
    return CODATA_CONSTANTS.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.symbolLatex.toLowerCase().includes(q) ||
        item.siUnit.toLowerCase().includes(q) ||
        item.gradeNote.toLowerCase().includes(q)
    );
  }, [constantQuery]);

  const activeGradeCountForSolver = useMemo(() => {
    if (typeof activeGrade !== 'number') return 0;
    return FORMULA_SOLVERS.filter((s) => s.grade === activeGrade).length;
  }, [activeGrade]);

  return (
    <MotionConfig reducedMotion="user">
      <div
        ref={studioRootRef}
        className="relative min-h-screen bg-[#03050d] text-slate-100 print:bg-white print:text-slate-900"
      >
        {/* Subtle Architectural Top Wash (NO 3D WebGL) */}
        <div
          aria-hidden="true"
          className="no-print pointer-events-none fixed inset-x-0 top-0 z-0 h-[520px] opacity-80 print:hidden"
          style={{
            background:
              'radial-gradient(62% 85% at 14% 0%, rgba(56,189,248,0.12) 0%, transparent 65%), radial-gradient(50% 80% at 88% 4%, rgba(245,158,11,0.11) 0%, transparent 68%)',
          }}
        />

        {/* ================================================================
            1. STICKY SINGLE-ROW COMMAND BAR
        ================================================================ */}
        <header className="no-print sticky top-3 z-40 mx-auto max-w-[1440px] px-4 pt-3 sm:px-6 lg:px-8 print:hidden">
          <div className="rounded-2xl border border-white/[0.06] bg-[#070b1a]/90 px-3.5 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_50px_-15px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:px-5">
            <div className="flex items-center justify-between gap-2 lg:flex-nowrap">
              {/* Left Cluster: Back to Curriculum + Badge + Synced Grade Selector */}
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
                  <Scale className="h-3 w-3" />
                  SI METROLOGY
                </span>

                <label className="relative flex shrink-0 items-center">
                  <span className="sr-only">Chọn khối lớp ưu tiên</span>
                  <select
                    value={activeGrade === 'all' ? 'all' : String(activeGrade)}
                    onChange={(e) => {
                      const v = e.target.value;
                      handleGradeChange(v === 'all' ? 'all' : Number(v));
                    }}
                    className="rounded-xl border border-white/[0.06] bg-[#040713] px-2.5 py-1.5 font-mono text-xs font-bold text-amber-200 transition hover:border-amber-400/40 focus:border-amber-400/50"
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

              {/* Center Cluster: Desktop 3-Mode Studio Switcher */}
              <nav
                aria-label="Chế độ tính toán Vật lý"
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
                          layoutId="v2CalcStudioTabDesktop"
                          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                          className="absolute inset-0 rounded-lg border border-amber-400/40 bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-sky-500/20 shadow-[0_0_20px_rgba(245,158,11,0.16)]"
                        />
                      )}
                      <Icon
                        className={`relative z-10 h-3.5 w-3.5 shrink-0 ${
                          active ? 'text-amber-300' : 'text-slate-400'
                        }`}
                      />
                      <span className="relative z-10 whitespace-nowrap">{tab.label}</span>
                      <span
                        className={`relative z-10 hidden rounded-md px-1.5 py-0.5 font-mono text-[10px] xl:inline-block ${
                          active
                            ? 'bg-amber-400/20 text-amber-200'
                            : 'bg-white/[0.05] text-slate-400'
                        }`}
                      >
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Right Cluster: Global Search + Print A4 */}
              <div className="flex shrink-0 items-center gap-2">
                <div className="w-9 sm:w-32 lg:w-36 xl:w-44">
                  <GlobalSearchModal variant="glass" />
                </div>

                <button
                  type="button"
                  onClick={() => window.print()}
                  title="In bảng quy đổi & hằng số SI (Khổ A4)"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.04] px-2.5 py-2 text-xs font-semibold text-slate-200 transition hover:border-sky-400/40 hover:bg-sky-500/10 hover:text-sky-200"
                >
                  <Printer className="h-3.5 w-3.5 text-sky-300" />
                  <span className="hidden xl:inline">In A4</span>
                </button>
              </div>
            </div>

            {/* Mobile/Tablet Mode Bar (< lg) */}
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
                        layoutId="v2CalcStudioTabMobile"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        className="absolute inset-0 rounded-lg border border-amber-400/40 bg-amber-500/15"
                      />
                    )}
                    <Icon
                      className={`relative z-10 h-3.5 w-3.5 ${
                        active ? 'text-amber-300' : 'text-slate-400'
                      }`}
                    />
                    <span className="relative z-10 whitespace-nowrap">{tab.shortLabel}</span>
                    <span className="relative z-10 rounded bg-white/[0.05] px-1.5 py-0.5 font-mono text-[10px] text-slate-300">
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        {/* ================================================================
            MAIN WORKBENCH SHELL
        ================================================================ */}
        <main className="relative z-10 mx-auto max-w-[1440px] space-y-6 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          {/* --------------------------------------------------------------
              2. OBSIDIAN METROLOGY HEADER BENTO
          -------------------------------------------------------------- */}
          <section
            data-calc-reveal
            className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-stretch"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#060917]/90 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-7 lg:col-span-8 print:border-slate-300 print:bg-white print:text-slate-900">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl print:hidden"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl print:hidden"
              />

              <div className="relative z-10 flex h-full flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-amber-200 print:border-slate-300 print:text-slate-800">
                      <Sparkles className="h-3.5 w-3.5 text-amber-300 print:hidden" />
                      Trạm Chuẩn hóa SI &amp; Giải Tự luận{' '}
                      {activeGrade === 'all' ? 'Lớp 6–12' : `Lớp ${activeGrade}`}
                    </span>
                    <span className="rounded-full border border-white/[0.06] bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-slate-300 print:text-slate-600">
                      GDPT 2018 · CODATA
                    </span>
                  </div>

                  <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl print:text-slate-900">
                    Quy đổi Đơn vị SI, Rút ẩn Công thức &amp; Tra cứu Hằng số
                  </h1>

                  <p className="max-w-2xl text-sm leading-relaxed text-slate-300 print:text-slate-700">
                    Chuyển đổi tức thì {UNIT_CATEGORIES.length} nhóm đại lượng kèm đạo hàm lũy thừa
                    KaTeX và cảnh báo bẫy mất điểm, giải chi tiết 4 bước {FORMULA_SOLVERS.length} hệ
                    phương trình trọng tâm cùng {CODATA_CONSTANTS.length} hằng số vật lý chuẩn quốc
                    tế.
                  </p>
                </div>

                {/* Quick Cross-Navigation */}
                <div className="no-print flex flex-wrap items-center gap-2 pt-1 print:hidden">
                  <Link
                    href="/flashcards"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-sky-400/40 hover:text-sky-200"
                  >
                    <Layers className="h-3.5 w-3.5 text-sky-300" />
                    Flashcard Công thức
                  </Link>
                  <Link
                    href="/cheatsheet"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-amber-400/40 hover:text-amber-200"
                  >
                    <FileText className="h-3.5 w-3.5 text-amber-300" />
                    Cẩm nang A4
                  </Link>
                  <Link
                    href="/cognitive-traps"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-rose-400/40 hover:text-rose-200"
                  >
                    <AlertTriangle className="h-3.5 w-3.5 text-rose-300" />
                    Ma trận Bẫy Nhận thức
                  </Link>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Telemetry Bento Metrics */}
            <aside className="grid grid-cols-3 gap-3 lg:col-span-4 lg:grid-cols-1">
              <button
                type="button"
                onClick={() => setActiveMode('converter')}
                className={`group flex flex-col justify-between rounded-2xl border p-4 text-left transition ${
                  activeMode === 'converter'
                    ? 'border-sky-400/40 bg-sky-500/10'
                    : 'border-white/[0.06] bg-[#070b1a]/90 hover:border-sky-400/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-sky-300">
                    BỘ QUY ĐỔI
                  </span>
                  <Ruler className="h-4 w-4 text-sky-300" />
                </div>
                <div className="mt-2">
                  <div className="font-mono text-2xl font-black text-white">
                    {UNIT_CATEGORIES.length}{' '}
                    <span className="text-xs font-semibold text-slate-400">nhóm đại lượng</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Đạo hàm <span className="font-mono text-sky-300">10ⁿ</span> &amp; bẫy đơn vị
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setActiveMode('solver')}
                className={`group flex flex-col justify-between rounded-2xl border p-4 text-left transition ${
                  activeMode === 'solver'
                    ? 'border-amber-400/40 bg-amber-500/10'
                    : 'border-white/[0.06] bg-[#070b1a]/90 hover:border-amber-400/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-300">
                    GIẢI PHƯƠNG TRÌNH
                  </span>
                  <Calculator className="h-4 w-4 text-amber-300" />
                </div>
                <div className="mt-2">
                  <div className="font-mono text-2xl font-black text-white">
                    {FORMULA_SOLVERS.length}{' '}
                    <span className="text-xs font-semibold text-slate-400">hệ công thức</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Rút ẩn &amp; thay số 4 bước chuẩn thi
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setActiveMode('constants')}
                className={`group flex flex-col justify-between rounded-2xl border p-4 text-left transition ${
                  activeMode === 'constants'
                    ? 'border-emerald-400/40 bg-emerald-500/10'
                    : 'border-white/[0.06] bg-[#070b1a]/90 hover:border-emerald-400/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                    THƯ VIỆN CODATA
                  </span>
                  <Atom className="h-4 w-4 text-emerald-300" />
                </div>
                <div className="mt-2">
                  <div className="font-mono text-2xl font-black text-white">
                    {CODATA_CONSTANTS.length}{' '}
                    <span className="text-xs font-semibold text-slate-400">hằng số</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Cùng {SI_PREFIXES.length} tiếp đầu ngữ SI{' '}
                    <span className="font-mono text-emerald-300">10⁻¹² → 10¹²</span>
                  </div>
                </div>
              </button>
            </aside>
          </section>

          {/* --------------------------------------------------------------
              3. ANIMATED 3-MODE STUDIO WORKSPACE
          -------------------------------------------------------------- */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {/* ============================================================
                  MODE 1: SI UNIT CONVERTER
              ============================================================ */}
              {activeMode === 'converter' && (
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
                  {/* Left 4 Cols: Category Index Rail */}
                  <aside className="space-y-3 rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-4 sm:p-5 lg:sticky lg:top-24 lg:col-span-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-sky-300">
                          DANH MỤC ĐẠI LƯỢNG SI
                        </div>
                        <h2 className="text-base font-extrabold text-white">
                          Chọn nhóm quy đổi ({filteredCategories.length}/{UNIT_CATEGORIES.length})
                        </h2>
                      </div>
                    </div>

                    <div className="relative">
                      <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={categoryQuery}
                        onChange={(e) => setCategoryQuery(e.target.value)}
                        placeholder="Tìm tên đại lượng hoặc ký hiệu SI..."
                        className="w-full rounded-xl border border-white/[0.06] bg-[#040713] py-2 pl-9 pr-3 text-xs text-white placeholder-slate-500 transition focus:border-sky-400/50"
                      />
                    </div>

                    <div className="max-h-[470px] space-y-1.5 overflow-y-auto pr-1">
                      {filteredCategories.map((cat) => {
                        const selected = cat.id === activeCategory.id;
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => selectCategoryWithIllustration(cat.id)}
                            className={`flex w-full items-center justify-between gap-2.5 rounded-2xl border px-3.5 py-2.5 text-left transition ${
                              selected
                                ? 'border-amber-400/50 bg-amber-500/15 text-white shadow-[0_0_24px_rgba(245,158,11,0.12)]'
                                : 'border-white/[0.06] bg-white/[0.02] text-slate-300 hover:border-sky-400/35 hover:bg-white/[0.04]'
                            }`}
                          >
                            <div className="min-w-0 space-y-0.5">
                              <div className="text-xs font-extrabold leading-snug text-white">
                                {cat.name}
                              </div>
                              <div className="font-mono text-[10px] text-slate-400">
                                {cat.gradesLabel} · {cat.units.length} đơn vị
                              </div>
                            </div>
                            <span
                              className={`shrink-0 rounded-lg border px-2 py-0.5 font-mono text-[11px] font-bold ${
                                selected
                                  ? 'border-amber-400/40 bg-amber-500/20 text-amber-200'
                                  : 'border-emerald-400/25 bg-emerald-500/10 text-emerald-300'
                              }`}
                            >
                              {cat.siSymbol}
                            </span>
                          </button>
                        );
                      })}
                      {filteredCategories.length === 0 && (
                        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 text-center text-xs text-slate-400">
                          Không tìm thấy nhóm đại lượng phù hợp.
                        </div>
                      )}
                    </div>
                  </aside>

                  {/* Right 8 Cols: Active Converter Chamber */}
                  <div className="space-y-5 lg:col-span-8">
                    {/* Input & Derivation Chamber */}
                    <div
                      onPointerMove={handleCardPointerMove}
                      className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-7"
                    >
                      <div
                        aria-hidden="true"
                        className="cosmic-topic-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />

                      <div className="relative z-10 space-y-6">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div className="space-y-1">
                            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-300">
                              {activeCategory.gradesLabel} · CHUẨN HÓA SI
                            </span>
                            <h2 className="text-lg font-extrabold text-white sm:text-xl">
                              {activeCategory.name}
                            </h2>
                          </div>
                          <span className="rounded-xl border border-emerald-400/35 bg-emerald-500/15 px-3 py-1 font-mono text-xs font-extrabold text-emerald-300">
                            Đơn vị chuẩn SI: {activeCategory.siSymbol}
                          </span>
                        </div>

                        {/* Value Input + Quick Presets */}
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
                          <div className="space-y-2 md:col-span-5">
                            <label className="block font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                              Giá trị cần quy đổi
                            </label>
                            <input
                              type="text"
                              inputMode="decimal"
                              value={inputValStr}
                              onChange={(e) => setInputValStr(e.target.value)}
                              placeholder="Nhập số (VD: 54 hoặc 1.5e-3)"
                              className="w-full rounded-2xl border border-white/10 bg-[#040713] px-4 py-3 font-mono text-xl font-black text-amber-200 transition focus:border-amber-400/60"
                            />
                            <div className="flex flex-wrap items-center gap-1.5 pt-1">
                              <span className="text-[10px] font-mono text-slate-400">Mẫu nhanh:</span>
                              {presetsForCategory.map((preset) => (
                                <button
                                  key={preset.value}
                                  type="button"
                                  onClick={() => setInputValStr(preset.value)}
                                  className={`rounded-lg border px-2 py-0.5 font-mono text-[11px] font-bold transition ${
                                    inputValStr === preset.value
                                      ? 'border-amber-400/50 bg-amber-500/20 text-amber-200'
                                      : 'border-white/[0.06] bg-white/[0.04] text-slate-300 hover:border-sky-400/40 hover:text-white'
                                  }`}
                                >
                                  {preset.label}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-2 md:col-span-7">
                            <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-400">
                              Đơn vị nguồn đang nhập
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {activeCategory.units.map((u) => {
                                const isActiveUnit = u.id === fromUnitId;
                                return (
                                  <button
                                    key={u.id}
                                    type="button"
                                    onClick={() => setFromUnitId(u.id)}
                                    className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-bold transition ${
                                      isActiveUnit
                                        ? 'border-sky-400/55 bg-sky-500/20 text-white shadow-[0_0_18px_rgba(56,189,248,0.16)]'
                                        : 'border-white/[0.06] bg-white/[0.03] text-slate-300 hover:border-white/20 hover:text-white'
                                    }`}
                                  >
                                    <span>{u.symbol}</span>
                                    {u.isSI && (
                                      <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 font-mono text-[9px] font-extrabold text-emerald-300">
                                        SI
                                      </span>
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                            <div className="pt-1 text-xs text-slate-400">
                              Đang chọn:{' '}
                              <span className="font-semibold text-slate-200">
                                {conversionResult.fromUnit.name}
                              </span>{' '}
                              <span className="text-slate-500">· Hệ số sang SI:</span>{' '}
                              <span className="font-bold text-amber-300">
                                <KatexFormula latex={conversionResult.fromUnit.factorLatex} />
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* SI Output Banner */}
                        <div className="rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-[#06131c] via-[#050c19] to-[#080d20] p-5 sm:p-6">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div>
                              <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                                KẾT QUẢ CHUẨN HỆ SI ({conversionResult.siSymbol})
                              </div>
                              <div className="mt-1 flex flex-wrap items-baseline gap-2.5">
                                <span className="font-mono text-3xl font-black tracking-tight text-white sm:text-4xl">
                                  {conversionResult.formattedSI}
                                </span>
                                <span className="font-mono text-lg font-extrabold text-emerald-300">
                                  {conversionResult.siSymbol}
                                </span>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() =>
                                handleCopyText('si-main', String(conversionResult.siValue))
                              }
                              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.05] px-3.5 py-2 font-mono text-xs font-bold text-slate-200 transition hover:border-emerald-400/50 hover:text-emerald-200"
                            >
                              {copiedKey === 'si-main' ? (
                                <>
                                  <Check className="h-3.5 w-3.5 text-emerald-300" />
                                  <span className="text-emerald-300">Đã chép giá trị SI</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="h-3.5 w-3.5" />
                                  <span>Chép giá trị SI</span>
                                </>
                              )}
                            </button>
                          </div>

                          <div className="mt-4 overflow-x-auto rounded-xl border border-white/[0.06] bg-[#03050d]/90 px-4 py-3 text-white">
                            <div className="mb-1 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                              CHỨNG MINH ĐẠO HÀM LŨY THỪA
                            </div>
                            <KatexFormula latex={conversionResult.stepLatex} displayMode />
                          </div>
                        </div>

                        {/* Classic Dimensional Trap Warning */}
                        <div className="flex items-start gap-3 rounded-2xl border border-amber-400/25 bg-amber-500/10 p-4 text-xs leading-relaxed text-amber-100 sm:text-sm">
                          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                          <div>
                            <div className="font-extrabold text-amber-300">
                              Cảnh báo Bẫy Thứ nguyên thường gặp:
                            </div>
                            <p className="mt-0.5 text-amber-100/90">{conversionResult.trapWarning}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Simultaneous Conversion Matrix */}
                    <div className="rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-5 sm:p-6">
                      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-sky-300">
                            MA TRẬN CHUYỂN ĐỔI ĐỒNG THỜI
                          </div>
                          <h3 className="text-base font-extrabold text-white">
                            Tương đương qua toàn bộ đơn vị cùng nhóm ({conversionResult.allConversions.length})
                          </h3>
                        </div>
                        <span className="font-mono text-[11px] text-slate-400">
                          Bấm vào bất kỳ thẻ nào để đổi làm đơn vị nguồn
                        </span>
                      </div>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {conversionResult.allConversions.map((item) => {
                          const isCurrentSource = item.unit.id === fromUnitId;
                          const copyId = `mat-${item.unit.id}`;
                          return (
                            <div
                              key={item.unit.id}
                              onClick={() => setFromUnitId(item.unit.id)}
                              className={`cursor-pointer rounded-2xl border p-4 transition ${
                                isCurrentSource
                                  ? 'border-sky-400/50 bg-sky-500/15'
                                  : item.unit.isSI
                                  ? 'border-emerald-400/35 bg-emerald-500/[0.06] hover:border-emerald-400/60'
                                  : 'border-white/[0.06] bg-[#040713]/85 hover:border-white/20'
                              }`}
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div className="min-w-0">
                                  <div className="flex flex-wrap items-center gap-1.5">
                                    <span className="text-sm font-extrabold text-white">
                                      {item.unit.symbol}
                                    </span>
                                    {item.unit.isSI && (
                                      <span className="rounded border border-emerald-400/35 bg-emerald-500/15 px-1.5 py-0.5 font-mono text-[9px] font-bold text-emerald-300">
                                        CHUẨN SI
                                      </span>
                                    )}
                                    {isCurrentSource && (
                                      <span className="rounded border border-sky-400/35 bg-sky-500/20 px-1.5 py-0.5 font-mono text-[9px] font-bold text-sky-200">
                                        NGUỒN
                                      </span>
                                    )}
                                  </div>
                                  <div className="mt-0.5 text-xs text-slate-400">{item.unit.name}</div>
                                </div>

                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleCopyText(copyId, item.formatted);
                                  }}
                                  className="shrink-0 rounded-lg border border-white/[0.06] bg-white/[0.04] p-1.5 text-slate-400 transition hover:border-amber-400/40 hover:text-amber-200"
                                  title="Chép giá trị quy đổi"
                                >
                                  {copiedKey === copyId ? (
                                    <Check className="h-3.5 w-3.5 text-emerald-300" />
                                  ) : (
                                    <Copy className="h-3.5 w-3.5" />
                                  )}
                                </button>
                              </div>

                              <div className="mt-3 flex items-baseline justify-between gap-2 border-t border-white/[0.06] pt-2.5">
                                <span className="font-mono text-lg font-black text-amber-200">
                                  {item.formatted}
                                </span>
                                <span className="text-[11px] text-slate-400">
                                  <span className="mr-1">×</span>
                                  <KatexFormula latex={item.unit.factorLatex} />
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ============================================================
                  MODE 2: STEP-BY-STEP FORMULA SOLVER
              ============================================================ */}
              {activeMode === 'solver' && (
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
                  {/* Left 5 Cols: Formula Library & Filters */}
                  <aside className="space-y-3.5 rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-4 sm:p-5 lg:sticky lg:top-24 lg:col-span-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-300">
                          THƯ VIỆN PHƯƠNG TRÌNH
                        </div>
                        <h2 className="text-base font-extrabold text-white">
                          Chọn hệ công thức ({filteredSolvers.length}/{FORMULA_SOLVERS.length})
                        </h2>
                      </div>
                      {activeGradeCountForSolver > 0 && solverGradeFilter !== activeGrade && (
                        <button
                          type="button"
                          onClick={() => setSolverGradeFilter(activeGrade)}
                          className="rounded-lg border border-sky-400/35 bg-sky-500/10 px-2.5 py-1 font-mono text-[10px] font-bold text-sky-300 transition hover:bg-sky-500/20"
                        >
                          Lọc Lớp {activeGrade} ({activeGradeCountForSolver})
                        </button>
                      )}
                    </div>

                    {/* Grade Filter Pills */}
                    <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto pb-1">
                      <button
                        type="button"
                        onClick={() => setSolverGradeFilter('all')}
                        className={`shrink-0 rounded-lg border px-2.5 py-1 font-mono text-[11px] font-bold transition ${
                          solverGradeFilter === 'all'
                            ? 'border-amber-400/50 bg-amber-500/20 text-amber-200'
                            : 'border-white/[0.06] bg-white/[0.03] text-slate-400 hover:text-white'
                        }`}
                      >
                        Tất cả ({FORMULA_SOLVERS.length})
                      </button>
                      {[7, 8, 9, 10, 11, 12].map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => setSolverGradeFilter(g)}
                          className={`shrink-0 rounded-lg border px-2.5 py-1 font-mono text-[11px] font-bold transition ${
                            solverGradeFilter === g
                              ? 'border-amber-400/50 bg-amber-500/20 text-amber-200'
                              : 'border-white/[0.06] bg-white/[0.03] text-slate-400 hover:text-white'
                          }`}
                        >
                          Lớp {g}
                        </button>
                      ))}
                    </div>

                    <div className="relative">
                      <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={solverQuery}
                        onChange={(e) => setSolverQuery(e.target.value)}
                        placeholder="Tìm theo định luật, tên đại lượng..."
                        className="w-full rounded-xl border border-white/[0.06] bg-[#040713] py-2 pl-9 pr-3 text-xs text-white placeholder-slate-500 transition focus:border-amber-400/50"
                      />
                    </div>

                    <div className="max-h-[480px] space-y-2 overflow-y-auto pr-1">
                      {filteredSolvers.map((spec) => {
                        const selected = spec.id === activeSolver.id;
                        return (
                          <button
                            key={spec.id}
                            type="button"
                            onClick={() => handleSelectSolver(spec.id)}
                            className={`w-full space-y-2 rounded-2xl border p-3.5 text-left transition ${
                              selected
                                ? 'border-amber-400/55 bg-amber-500/15 shadow-[0_0_24px_rgba(245,158,11,0.12)]'
                                : 'border-white/[0.06] bg-white/[0.02] hover:border-sky-400/35 hover:bg-white/[0.04]'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="rounded-md border border-sky-400/30 bg-sky-500/10 px-2 py-0.5 font-mono text-[10px] font-bold text-sky-300">
                                {spec.domain}
                              </span>
                              <span className="font-mono text-[10px] text-slate-400">
                                {spec.variables.length} biến
                              </span>
                            </div>
                            <div className="text-xs font-extrabold text-white sm:text-sm">
                              {spec.title}
                            </div>
                            <div className="overflow-x-auto rounded-xl border border-white/[0.06] bg-[#03050d] px-3 py-2 text-amber-200">
                              <KatexFormula latex={spec.baseFormulaLatex} />
                            </div>
                          </button>
                        );
                      })}
                      {filteredSolvers.length === 0 && (
                        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center text-xs text-slate-400">
                          Không có hệ phương trình khớp bộ lọc hiện tại.
                        </div>
                      )}
                    </div>
                  </aside>

                  {/* Right 7 Cols: Algebraic Solver & 4-Step Proof */}
                  <div className="space-y-5 lg:col-span-7">
                    {/* Solver Control Panel */}
                    <div
                      onPointerMove={handleCardPointerMove}
                      className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-7"
                    >
                      <div
                        aria-hidden="true"
                        className="cosmic-topic-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />

                      <div className="relative z-10 space-y-6">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div className="space-y-1">
                            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-sky-300">
                              {activeSolver.domain}
                            </span>
                            <h2 className="text-lg font-extrabold text-white sm:text-xl">
                              {activeSolver.title}
                            </h2>
                            <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                              {activeSolver.description}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={resetSolverDefaults}
                            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-amber-400/40 hover:text-amber-200"
                          >
                            <RotateCcw className="h-3.5 w-3.5" />
                            <span>Đặt lại số mẫu</span>
                          </button>
                        </div>

                        {/* Step A: Choose Target Unknown Variable */}
                        <div className="space-y-2.5">
                          <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-300">
                            CHỌN ĐẠI LƯỢNG ẨN CẦN TÌM
                          </div>
                          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                            {activeSolver.variables.map((v) => {
                              const isTarget = v.key === targetVarKey;
                              return (
                                <button
                                  key={v.key}
                                  type="button"
                                  onClick={() => setTargetVarKey(v.key)}
                                  className={`flex items-center justify-between gap-3 rounded-2xl border px-3.5 py-2.5 text-left transition ${
                                    isTarget
                                      ? 'border-amber-400/60 bg-amber-500/20 text-white shadow-[0_0_20px_rgba(245,158,11,0.15)]'
                                      : 'border-white/[0.06] bg-[#040713]/85 text-slate-300 hover:border-sky-400/35 hover:text-white'
                                  }`}
                                >
                                  <div className="flex min-w-0 items-center gap-2.5">
                                    <span className="inline-flex min-w-[2.5rem] shrink-0 items-center justify-center rounded-lg border border-amber-400/30 bg-amber-500/10 px-2 py-1 font-bold text-amber-200">
                                      <KatexFormula latex={v.symbolLatex} />
                                    </span>
                                    <div className="min-w-0">
                                      <div className="text-xs font-extrabold leading-snug text-white">
                                        {v.name}
                                      </div>
                                      <div className="font-mono text-[10px] text-slate-400">
                                        Đơn vị SI: {v.siUnit}
                                      </div>
                                    </div>
                                  </div>
                                  {isTarget && (
                                    <span className="shrink-0 rounded-md border border-amber-400/40 bg-amber-500/20 px-2 py-0.5 font-mono text-[10px] font-extrabold text-amber-200">
                                      ẨN CẦN TÌM
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Step B: Enter Known SI Quantities */}
                        <div className="space-y-3 border-t border-white/[0.06] pt-5">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-sky-300">
                              NHẬP GIÁ TRỊ ĐẠI LƯỢNG ĐÃ BIẾT (CHUẨN SI)
                            </div>
                            <span className="text-[11px] text-slate-400">
                              Nếu đề cho mm, km/h, phút... hãy đổi trước ở tab Quy đổi Đơn vị SI
                            </span>
                          </div>

                          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {activeSolver.variables
                              .filter((v) => v.key !== targetVarKey)
                              .map((v) => (
                                <div
                                  key={v.key}
                                  className="space-y-2 rounded-2xl border border-white/[0.06] bg-[#040713]/90 p-3.5"
                                >
                                  <div className="flex items-start justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                      <span className="inline-flex min-w-[2.25rem] items-center justify-center rounded-lg border border-sky-400/30 bg-sky-500/10 px-2 py-0.5 font-bold text-sky-200">
                                        <KatexFormula latex={v.symbolLatex} />
                                      </span>
                                      <span className="text-xs font-bold leading-snug text-slate-100">
                                        {v.name}
                                      </span>
                                    </div>
                                    <span className="shrink-0 rounded-md border border-emerald-400/25 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
                                      {v.siUnit}
                                    </span>
                                  </div>

                                  <input
                                    type="text"
                                    inputMode="decimal"
                                    value={varInputs[v.key] ?? String(v.defaultValue)}
                                    onChange={(e) =>
                                      setVarInputs((prev) => ({
                                        ...prev,
                                        [v.key]: e.target.value,
                                      }))
                                    }
                                    className="w-full rounded-xl border border-white/10 bg-[#070b1a] px-3 py-2 font-mono text-base font-extrabold text-amber-200 transition focus:border-sky-400/60"
                                  />
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4-Step Presentation Sheet */}
                    <div className="rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-5 sm:p-7 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                            TRÌNH BÀY BÀI GIẢI CHUẨN THI
                          </div>
                          <h3 className="text-base font-extrabold text-white sm:text-lg">
                            Lời giải chi tiết 4 bước
                          </h3>
                        </div>

                        {solverSolution.isValid && (
                          <button
                            type="button"
                            onClick={() =>
                              handleCopyText(
                                'solver-res',
                                `${solverSolution.formattedResult} ${solverSolution.targetVarMeta.siUnit}`
                              )
                            }
                            className="inline-flex items-center gap-1.5 rounded-xl border border-white/[0.06] bg-white/[0.04] px-3 py-1.5 font-mono text-xs font-bold text-slate-200 transition hover:border-emerald-400/40 hover:text-emerald-200"
                          >
                            {copiedKey === 'solver-res' ? (
                              <>
                                <Check className="h-3.5 w-3.5 text-emerald-300" />
                                <span className="text-emerald-300">Đã chép đáp số</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-3.5 w-3.5" />
                                <span>Chép đáp số</span>
                              </>
                            )}
                          </button>
                        )}
                      </div>

                      <div className="space-y-3">
                        {/* Step 1 */}
                        <div className="rounded-2xl border border-white/[0.06] bg-[#040713]/90 p-4">
                          <div className="mb-1.5 flex items-center gap-2">
                            <span className="rounded-md border border-indigo-400/35 bg-indigo-500/15 px-2 py-0.5 font-mono text-[10px] font-bold text-indigo-300">
                              BƯỚC 1
                            </span>
                            <span className="text-xs font-bold text-slate-300">
                              Công thức gốc theo chương trình
                            </span>
                          </div>
                          <div className="overflow-x-auto py-1 text-white">
                            <KatexFormula latex={activeSolver.baseFormulaLatex} displayMode />
                          </div>
                        </div>

                        {/* Step 2 */}
                        <div className="rounded-2xl border border-white/[0.06] bg-[#040713]/90 p-4">
                          <div className="mb-1.5 flex items-center gap-2">
                            <span className="rounded-md border border-sky-400/35 bg-sky-500/15 px-2 py-0.5 font-mono text-[10px] font-bold text-sky-300">
                              BƯỚC 2
                            </span>
                            <span className="text-xs font-bold text-slate-300">
                              Biến đổi đại số rút ẩn{' '}
                              <span className="text-amber-300">
                                {solverSolution.targetVarMeta.name}
                              </span>
                            </span>
                          </div>
                          <div className="overflow-x-auto py-1 text-sky-200">
                            <KatexFormula latex={solverSolution.derivedLatex} displayMode />
                          </div>
                        </div>

                        {/* Step 3 */}
                        <div className="rounded-2xl border border-white/[0.06] bg-[#040713]/90 p-4">
                          <div className="mb-1.5 flex items-center gap-2">
                            <span className="rounded-md border border-amber-400/35 bg-amber-500/15 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-300">
                              BƯỚC 3
                            </span>
                            <span className="text-xs font-bold text-slate-300">
                              Thay số liệu chuẩn hệ SI
                            </span>
                          </div>
                          <div className="overflow-x-auto py-1 text-amber-200">
                            <KatexFormula latex={solverSolution.substituteLatex} displayMode />
                          </div>
                        </div>

                        {/* Step 4 */}
                        <div
                          className={`rounded-2xl border p-5 ${
                            solverSolution.isValid
                              ? 'border-emerald-400/35 bg-gradient-to-br from-[#06151c] via-[#060f1b] to-[#0a1024]'
                              : 'border-rose-400/35 bg-rose-500/10'
                          }`}
                        >
                          <div className="mb-2 flex items-center gap-2">
                            <span
                              className={`rounded-md border px-2 py-0.5 font-mono text-[10px] font-bold ${
                                solverSolution.isValid
                                  ? 'border-emerald-400/40 bg-emerald-500/20 text-emerald-300'
                                  : 'border-rose-400/40 bg-rose-500/20 text-rose-300'
                              }`}
                            >
                              BƯỚC 4
                            </span>
                            <span className="text-xs font-bold text-slate-200">
                              Đáp số cuối cùng chuẩn SI
                            </span>
                          </div>

                          {solverSolution.isValid ? (
                            <div className="flex flex-wrap items-center justify-between gap-4">
                              <div className="flex flex-wrap items-baseline gap-2.5">
                                <span className="text-lg font-bold text-emerald-200">
                                  <KatexFormula
                                    latex={`${solverSolution.targetVarMeta.symbolLatex} =`}
                                  />
                                </span>
                                <span className="font-mono text-3xl font-black text-white sm:text-4xl">
                                  {solverSolution.formattedResult}
                                </span>
                                <span className="font-mono text-lg font-extrabold text-emerald-300">
                                  {solverSolution.targetVarMeta.siUnit}
                                </span>
                              </div>
                              <div className="rounded-xl border border-white/[0.06] bg-[#03050d]/85 px-3.5 py-2 text-xs text-slate-300">
                                Dạng khoa học:{' '}
                                <span className="font-bold text-amber-200">
                                  <KatexFormula latex={solverSolution.scientificLatex} />
                                </span>{' '}
                                <span className="font-mono text-emerald-300">
                                  {solverSolution.targetVarMeta.siUnit}
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-start gap-2.5 text-xs text-rose-200 sm:text-sm">
                              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" />
                              <span>
                                Giá trị phép tính không xác định (mẫu số bằng 0 hoặc biểu thức dưới
                                dấu căn bị âm). Vui lòng kiểm tra lại số liệu đã nhập.
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ============================================================
                  MODE 3: CODATA CONSTANTS & SI PREFIXES
              ============================================================ */}
              {activeMode === 'constants' && (
                <div className="space-y-6">
                  {/* Search Toolbar */}
                  <div className="no-print flex flex-col gap-3 rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5 print:hidden">
                    <div className="relative flex-1">
                      <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={constantQuery}
                        onChange={(e) => setConstantQuery(e.target.value)}
                        placeholder="Tìm hằng số vật lý CODATA (VD: Planck, c, Avogadro, R, electron, Lớp 12)..."
                        className="w-full rounded-xl border border-white/[0.06] bg-[#040713] py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-500 transition focus:border-emerald-400/50 sm:text-sm"
                      />
                    </div>
                    <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                      <Filter className="h-3.5 w-3.5 text-emerald-300" />
                      <span>
                        Hiển thị {filteredConstants.length}/{CODATA_CONSTANTS.length} hằng số chuẩn
                      </span>
                    </div>
                  </div>

                  {/* Section A: CODATA Constants Grid */}
                  <div className="space-y-4">
                    <h2 className="flex items-center gap-2 text-lg font-extrabold text-white">
                      <Atom className="h-5 w-5 text-emerald-300" />
                      <span>Bảng Hằng số Vật lý Cơ bản CODATA ({filteredConstants.length})</span>
                    </h2>

                    {filteredConstants.length === 0 ? (
                      <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center text-sm text-slate-400">
                        Không có hằng số phù hợp với từ khóa tìm kiếm.
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {filteredConstants.map((c, idx) => {
                          const copyId = `codata-${idx}`;
                          const isCopied = copiedKey === copyId;
                          return (
                            <div
                              key={c.name}
                              onPointerMove={handleCardPointerMove}
                              className="group relative flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-5 transition hover:border-emerald-400/40"
                            >
                              <div
                                aria-hidden="true"
                                className="cosmic-topic-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                              />
                              <div className="relative z-10 flex items-start justify-between gap-3">
                                <div className="flex items-center gap-3">
                                  <div className="flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-amber-400/35 bg-amber-500/10 px-2.5 py-1 font-bold text-amber-200">
                                    <KatexFormula latex={c.symbolLatex} />
                                  </div>
                                  <div className="min-w-0">
                                    <h3 className="text-sm font-extrabold leading-snug text-white">
                                      {c.name}
                                    </h3>
                                    <div className="mt-0.5 text-[11px] text-slate-400">
                                      {c.gradeNote}
                                    </div>
                                  </div>
                                </div>

                                <button
                                  type="button"
                                  onClick={() => handleCopyText(copyId, c.copyValue)}
                                  className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-white/[0.06] bg-white/[0.05] px-2.5 py-1 font-mono text-[10px] font-semibold text-slate-300 transition hover:border-emerald-400/40 hover:text-emerald-200"
                                >
                                  {isCopied ? (
                                    <>
                                      <Check className="h-3 w-3 text-emerald-300" />
                                      <span className="text-emerald-300">Đã chép</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="h-3 w-3" />
                                      <span>Chép</span>
                                    </>
                                  )}
                                </button>
                              </div>

                              <div className="relative z-10 flex items-baseline justify-between gap-2 rounded-2xl border border-white/[0.06] bg-[#03050d] px-4 py-3">
                                <span className="font-mono text-base font-black text-amber-200">
                                  {c.valueText}
                                </span>
                                <span className="rounded-md border border-emerald-400/25 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] font-bold text-emerald-300">
                                  {c.siUnit}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Section B: SI Prefixes Ladder (10^12 -> 10^-12) */}
                  <div className="space-y-4 rounded-3xl border border-white/[0.06] bg-[#070b1a]/90 p-5 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-sky-300">
                          THANG BẬC LŨY THỪA QUỐC TẾ
                        </div>
                        <h2 className="text-lg font-extrabold text-white">
                          Thước Tiếp đầu ngữ Hệ SI ({SI_PREFIXES.length} bậc: 10¹² Tera → 10⁻¹² Pico)
                        </h2>
                      </div>
                      <span className="rounded-full border border-white/[0.06] bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-slate-300">
                        Nhân với hệ số 10ⁿ để quy đổi về đơn vị gốc
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2">
                      {SI_PREFIXES.map((p, idx) => {
                        const isPositive = !p.powerLatex.includes('-');
                        const barWidthPct = Math.max(18, 100 - idx * 8);
                        return (
                          <div
                            key={p.symbol}
                            className="flex items-center justify-between gap-3 rounded-2xl border border-white/[0.06] bg-[#040713]/90 p-3.5 transition hover:border-sky-400/35"
                          >
                            <div className="flex min-w-0 items-center gap-3">
                              <span
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border font-mono text-base font-black ${
                                  isPositive
                                    ? 'border-amber-400/40 bg-amber-500/15 text-amber-200'
                                    : 'border-sky-400/40 bg-sky-500/15 text-sky-200'
                                }`}
                              >
                                {p.symbol}
                              </span>
                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-extrabold text-white">
                                    {p.prefix}
                                  </span>
                                  <span className="font-mono text-xs font-bold text-amber-300">
                                    <KatexFormula latex={p.powerLatex} />
                                  </span>
                                </div>
                                <div className="mt-0.5 text-[11px] text-slate-400">
                                  Hệ số: <span className="font-mono text-slate-200">{p.factor}</span> ·
                                  VD: <span className="text-sky-300">{p.example}</span>
                                </div>
                              </div>
                            </div>

                            <div className="hidden w-24 shrink-0 sm:block">
                              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.05]">
                                <div
                                  className={`h-full rounded-full ${
                                    isPositive
                                      ? 'bg-gradient-to-r from-amber-500 to-amber-300'
                                      : 'bg-gradient-to-r from-sky-500 to-cyan-300'
                                  }`}
                                  style={{ width: `${barWidthPct}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </MotionConfig>
  );
}

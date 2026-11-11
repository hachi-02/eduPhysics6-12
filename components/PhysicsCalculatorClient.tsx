'use client';

import React, { useState, useMemo, useEffect } from 'react';
import {
  UNIT_CATEGORIES,
  FORMULA_SOLVERS,
  CODATA_CONSTANTS,
  SI_PREFIXES,
  convertPhysicsUnit,
  formatPhysicsNumber,
} from '@/lib/physics-calculator';
import { KatexFormula } from './KatexRenderer';
import {
  Calculator,
  Ruler,
  Atom,
  Copy,
  Check,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
} from 'lucide-react';

export function PhysicsCalculatorClient() {
  const [activeTab, setActiveTab] = useState<'converter' | 'solver' | 'constants'>('converter');

  // --------------------------------------------------------------------------
  // TAB 1 STATE: SI UNIT CONVERTER
  // --------------------------------------------------------------------------
  const [selectedCatId, setSelectedCatId] = useState<string>('velocity');
  const [inputValStr, setInputValStr] = useState<string>('36');
  const [fromUnitId, setFromUnitId] = useState<string>('km/h');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const activeCategory = useMemo(
    () => UNIT_CATEGORIES.find((c) => c.id === selectedCatId) || UNIT_CATEGORIES[0],
    [selectedCatId]
  );

  // When category changes, default to the first non-SI unit (so the conversion to SI is immediately illustrative!)
  useEffect(() => {
    const defaultNonSI =
      activeCategory.units.find((u) => !u.isSI) || activeCategory.units[0];
    setFromUnitId(defaultNonSI.id);
    if (activeCategory.id === 'velocity') setInputValStr('54');
    else if (activeCategory.id === 'temperature') setInputValStr('27');
    else if (activeCategory.id === 'density') setInputValStr('1.2');
    else if (activeCategory.id === 'area') setInputValStr('25');
    else if (activeCategory.id === 'volume') setInputValStr('2');
    else setInputValStr('100');
  }, [activeCategory]);

  const numericInput = useMemo(() => {
    const cleaned = inputValStr.replace(',', '.').trim();
    const parsed = parseFloat(cleaned);
    return Number.isFinite(parsed) ? parsed : 0;
  }, [inputValStr]);

  const conversionResult = useMemo(
    () => convertPhysicsUnit(activeCategory.id, numericInput, fromUnitId),
    [activeCategory.id, numericInput, fromUnitId]
  );

  const handleCopy = (key: string, text: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 1500);
    }
  };

  // --------------------------------------------------------------------------
  // TAB 2 STATE: STEP-BY-STEP FORMULA SOLVER
  // --------------------------------------------------------------------------
  const [selectedSolverId, setSelectedSolverId] = useState<string>(FORMULA_SOLVERS[0].id);
  const activeSolver = useMemo(
    () => FORMULA_SOLVERS.find((s) => s.id === selectedSolverId) || FORMULA_SOLVERS[0],
    [selectedSolverId]
  );

  const [targetVarKey, setTargetVarKey] = useState<string>(activeSolver.variables[0].key);
  const [varInputs, setVarInputs] = useState<Record<string, string>>({});

  useEffect(() => {
    setTargetVarKey(activeSolver.variables[0].key);
    const defaults: Record<string, string> = {};
    for (const v of activeSolver.variables) {
      defaults[v.key] = String(v.defaultValue);
    }
    setVarInputs(defaults);
  }, [activeSolver]);

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

    return {
      targetVarMeta,
      derivedLatex: targetSpec.derivedLatex,
      substituteLatex: targetSpec.substituteLatex(numericSolverVars),
      resultVal,
      formattedResult: formatPhysicsNumber(resultVal),
    };
  }, [activeSolver, targetVarKey, numericSolverVars]);

  return (
    <div className="edu-page-shell">
      {/* ============================================================ */}
      {/* HERO HEADER                                                  */}
      {/* ============================================================ */}
      <div className="edu-hero-aurora p-6 sm:p-9">
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 animate-blob rounded-full bg-teal-400/25 blur-3xl" />
        <div
          className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 animate-blob rounded-full bg-indigo-500/20 blur-3xl"
          style={{ animationDelay: '3s' }}
        />

        <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/15 px-3 py-1 text-xs font-extrabold text-teal-200">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              <span>CÔNG CỤ TÍNH TOÁN &amp; CHỐNG BẪY ĐƠN VỊ SI LỚP 6–12</span>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              🧮 Trợ Lý Quy Đổi Đơn Vị SI &amp; Giải Công Thức Tức Thì
            </h1>
            <p className="max-w-2xl text-xs leading-relaxed text-teal-100/85 sm:text-sm">
              Quy đổi chuẩn xác 12 nhóm đại lượng về hệ SI kèm giải thích bậc lũy thừa, tự động rút ẩn
              &amp; thay số từng bước các công thức trọng tâm và tra cứu hằng số CODATA 1 chạm.
            </p>
          </div>

          {/* 3-Tab Switcher */}
          <div className="flex flex-wrap gap-2 lg:shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('converter')}
              className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-extrabold transition ${
                activeTab === 'converter'
                  ? 'bg-emerald-500 text-white shadow-soft'
                  : 'border border-white/15 bg-white/10 text-teal-100 hover:bg-white/20'
              }`}
            >
              <Ruler className="h-4 w-4" />
              <span>1. Quy đổi Đơn vị SI</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('solver')}
              className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-extrabold transition ${
                activeTab === 'solver'
                  ? 'bg-emerald-500 text-white shadow-soft'
                  : 'border border-white/15 bg-white/10 text-teal-100 hover:bg-white/20'
              }`}
            >
              <Calculator className="h-4 w-4" />
              <span>2. Rút ẩn &amp; Giải công thức</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('constants')}
              className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-extrabold transition ${
                activeTab === 'constants'
                  ? 'bg-emerald-500 text-white shadow-soft'
                  : 'border border-white/15 bg-white/10 text-teal-100 hover:bg-white/20'
              }`}
            >
              <Atom className="h-4 w-4" />
              <span>3. Hằng số &amp; Bậc 10ⁿ</span>
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* TAB 1: SMART SI UNIT CONVERTER                               */}
      {/* ============================================================ */}
      {activeTab === 'converter' && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Column: 12 Unit Categories */}
          <div className="edu-card space-y-2.5 p-4 lg:col-span-4">
            <div className="px-1 text-xs font-extrabold uppercase tracking-wider text-slate-400">
              Chọn nhóm đại lượng ({UNIT_CATEGORIES.length} nhóm)
            </div>
            <div className="space-y-1.5">
              {UNIT_CATEGORIES.map((cat) => {
                const isSelected = cat.id === activeCategory.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCatId(cat.id)}
                    className={`flex w-full items-center justify-between gap-2 rounded-2xl border px-3.5 py-2.5 text-left transition ${
                      isSelected
                        ? 'border-emerald-400 bg-emerald-50/90 text-emerald-950 shadow-2xs'
                        : 'border-slate-200/70 bg-white text-slate-700 hover:border-emerald-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="truncate text-xs font-extrabold">{cat.name}</div>
                      <div className="text-[11px] text-slate-500">{cat.gradesLabel}</div>
                    </div>
                    <span className="shrink-0 rounded-lg bg-emerald-100 px-2 py-0.5 font-mono text-[11px] font-extrabold text-emerald-800">
                      SI: {cat.siSymbol}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Converter & Step-by-Step Result */}
          <div className="space-y-5 lg:col-span-8">
            <div className="edu-card space-y-5 p-5 sm:p-6">
              <div>
                <span className="rounded-lg bg-emerald-100 px-2.5 py-1 text-xs font-extrabold text-emerald-800">
                  {activeCategory.gradesLabel} • Đơn vị chuẩn SI: {activeCategory.siSymbol}
                </span>
                <h2 className="mt-2 text-lg font-extrabold text-slate-900 sm:text-xl">
                  {activeCategory.name}
                </h2>
              </div>

              {/* Input Value + Select From Unit */}
              <div className="grid grid-cols-1 gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-extrabold text-slate-700">
                    1. Nhập số liệu trong đề bài:
                  </label>
                  <input
                    type="text"
                    value={inputValStr}
                    onChange={(e) => setInputValStr(e.target.value)}
                    placeholder="VD: 36, 0.5, 250..."
                    className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 font-mono text-base font-extrabold text-slate-900 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-700">
                    2. Đơn vị hiện tại của số liệu:
                  </label>
                  <select
                    value={fromUnitId}
                    onChange={(e) => setFromUnitId(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-extrabold text-slate-900 focus:border-emerald-500 focus:outline-none"
                  >
                    {activeCategory.units.map((u) => (
                      <option key={u.id} value={u.id}>
                        {u.symbol} — {u.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Highlighted SI Output Box */}
              <div className="rounded-2xl border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 via-white to-teal-50/60 p-5 shadow-soft">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    Kết quả quy đổi về Đơn vị chuẩn Hệ SI ({conversionResult.siSymbol})
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy('si_main', conversionResult.formattedSI)}
                    className="inline-flex items-center gap-1 rounded-xl border border-emerald-200 bg-white px-3 py-1 text-xs font-extrabold text-emerald-700 hover:bg-emerald-50"
                  >
                    {copiedKey === 'si_main' ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        <span>Đã chép!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy số SI</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-3 flex flex-wrap items-baseline gap-3">
                  <span className="font-mono text-3xl font-extrabold text-slate-900 sm:text-4xl">
                    {conversionResult.formattedSI}
                  </span>
                  <span className="rounded-xl bg-emerald-600 px-3 py-1 font-mono text-base font-extrabold text-white">
                    {conversionResult.siSymbol}
                  </span>
                </div>

                {/* KaTeX Step-by-Step Formula Explanation */}
                <div className="mt-4 overflow-x-auto rounded-xl border border-emerald-200/80 bg-white p-3.5 text-sm font-bold text-slate-800">
                  <div className="mb-1 text-[11px] font-extrabold uppercase text-slate-400">
                    Phép biến đổi toán học:
                  </div>
                  <KatexFormula latex={conversionResult.stepLatex} displayMode={false} />
                </div>
              </div>

              {/* Cognitive Trap Warning Banner */}
              <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50/90 p-4 text-xs leading-relaxed text-amber-950 sm:text-sm">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                <div>
                  <strong className="font-extrabold text-amber-900">
                    Cảnh báo Bẫy Đơn Vị khi đi thi:{' '}
                  </strong>
                  {conversionResult.trapWarning}
                </div>
              </div>

              {/* Simultaneous Conversion Table Across All Units in Category */}
              <div>
                <div className="mb-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Bảng quy đổi đồng thời sang tất cả đơn vị cùng nhóm:
                </div>
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {conversionResult.allConversions.map((item) => (
                    <div
                      key={item.unit.id}
                      className={`flex items-center justify-between gap-2 rounded-2xl border p-3 ${
                        item.unit.isSI
                          ? 'border-emerald-300 bg-emerald-50/60'
                          : 'border-slate-200 bg-white'
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono text-sm font-extrabold text-slate-900">
                            {item.formatted}
                          </span>
                          <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs font-bold text-indigo-700">
                            {item.unit.symbol}
                          </span>
                        </div>
                        <div className="mt-0.5 truncate text-[11px] text-slate-500">
                          {item.unit.name}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleCopy(item.unit.id, item.formatted)}
                        className="shrink-0 rounded-lg border border-slate-200 bg-slate-50 p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                        title="Copy giá trị"
                      >
                        {copiedKey === item.unit.id ? (
                          <Check className="h-3.5 w-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* TAB 2: STEP-BY-STEP FORMULA SOLVER                           */}
      {/* ============================================================ */}
      {activeTab === 'solver' && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left: Formula List */}
          <div className="edu-card space-y-2.5 p-4 lg:col-span-5">
            <div className="px-1 text-xs font-extrabold uppercase tracking-wider text-slate-400">
              Chọn công thức cần rút ẩn &amp; tính ({FORMULA_SOLVERS.length} hệ phương trình)
            </div>
            <div className="space-y-2">
              {FORMULA_SOLVERS.map((s) => {
                const isSelected = s.id === activeSolver.id;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedSolverId(s.id)}
                    className={`w-full rounded-2xl border p-3.5 text-left transition ${
                      isSelected
                        ? 'border-indigo-400 bg-indigo-50/80 shadow-2xs'
                        : 'border-slate-200/80 bg-white hover:border-indigo-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-md bg-indigo-100 px-2 py-0.5 text-[10px] font-extrabold text-indigo-800">
                        {s.domain}
                      </span>
                      <span className="text-[11px] font-bold text-slate-400">Lớp {s.grade}</span>
                    </div>
                    <div className="mt-1.5 text-xs font-extrabold text-slate-900 sm:text-sm">
                      {s.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Interactive Variable Selector & 4-Step Solution */}
          <div className="space-y-5 lg:col-span-7">
            <div className="edu-card space-y-5 p-5 sm:p-6">
              <div>
                <span className="rounded-lg bg-indigo-100 px-2.5 py-1 text-xs font-extrabold text-indigo-800">
                  {activeSolver.domain}
                </span>
                <h2 className="mt-2 text-lg font-extrabold text-slate-900 sm:text-xl">
                  {activeSolver.title}
                </h2>
                <p className="mt-1 text-xs text-slate-500">{activeSolver.description}</p>
              </div>

              {/* Step 1: Choose Unknown Variable to Solve For */}
              <div className="space-y-2">
                <div className="text-xs font-extrabold text-slate-700">
                  1. Chọn đại lượng cần tìm (Ẩn số):
                </div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {activeSolver.variables.map((v) => {
                    const isTarget = v.key === solverSolution.targetVarMeta.key;
                    return (
                      <button
                        key={v.key}
                        type="button"
                        onClick={() => setTargetVarKey(v.key)}
                        className={`flex items-center justify-between gap-2 rounded-2xl border p-3 text-left transition ${
                          isTarget
                            ? 'border-indigo-500 bg-indigo-600 text-white shadow-soft'
                            : 'border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-extrabold">Tìm: {v.name}</div>
                          <div
                            className={`text-[11px] ${
                              isTarget ? 'text-indigo-100' : 'text-slate-500'
                            }`}
                          >
                            Đơn vị: {v.siUnit}
                          </div>
                        </div>
                        <span
                          className={`rounded-lg px-2 py-1 text-xs font-bold ${
                            isTarget ? 'bg-white text-indigo-900' : 'bg-white text-slate-800'
                          }`}
                        >
                          <KatexFormula latex={v.symbolLatex} />
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Input Known Variables */}
              <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                <div className="text-xs font-extrabold text-slate-700">
                  2. Nhập giá trị các đại lượng đã biết (theo đơn vị chuẩn SI):
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {activeSolver.variables
                    .filter((v) => v.key !== solverSolution.targetVarMeta.key)
                    .map((v) => (
                      <div key={v.key} className="rounded-xl border border-slate-200 bg-white p-3">
                        <div className="flex items-center justify-between gap-2 text-xs font-bold text-slate-700">
                          <span>{v.name}</span>
                          <span className="rounded bg-indigo-50 px-1.5 py-0.5 text-indigo-800">
                            <KatexFormula latex={v.symbolLatex} /> ({v.siUnit})
                          </span>
                        </div>
                        <input
                          type="text"
                          value={varInputs[v.key] ?? String(v.defaultValue)}
                          onChange={(e) =>
                            setVarInputs((prev) => ({ ...prev, [v.key]: e.target.value }))
                          }
                          className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 font-mono text-sm font-extrabold text-slate-900 focus:border-indigo-500 focus:outline-none"
                        />
                      </div>
                    ))}
                </div>
              </div>

              {/* Step 3: 4-Step Automated Solution Card */}
              <div className="space-y-3 rounded-2xl border-2 border-indigo-200 bg-gradient-to-br from-indigo-50/50 via-white to-emerald-50/40 p-5">
                <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-800">
                  Lời giải tự động 4 bước chuẩn trình bày:
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-white p-3.5">
                    <div className="text-[11px] font-bold uppercase text-slate-400">
                      Bước 1: Công thức gốc
                    </div>
                    <div className="mt-1.5 font-bold text-slate-900">
                      <KatexFormula latex={activeSolver.baseFormulaLatex} />
                    </div>
                  </div>

                  <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-3.5">
                    <div className="text-[11px] font-bold uppercase text-indigo-600">
                      Bước 2: Rút công thức ẩn số ({solverSolution.targetVarMeta.name})
                    </div>
                    <div className="mt-1.5 font-bold text-indigo-950">
                      <KatexFormula latex={solverSolution.derivedLatex} />
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-3.5">
                  <div className="text-[11px] font-bold uppercase text-slate-400">
                    Bước 3: Thay số chuẩn SI
                  </div>
                  <div className="mt-1.5 overflow-x-auto font-bold text-slate-900">
                    <KatexFormula latex={solverSolution.substituteLatex} />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-emerald-300 bg-emerald-50 p-4">
                  <div>
                    <div className="text-xs font-extrabold uppercase text-emerald-800">
                      Bước 4: Kết quả {solverSolution.targetVarMeta.name}
                    </div>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="font-mono text-2xl font-extrabold text-emerald-950 sm:text-3xl">
                        {solverSolution.formattedResult}
                      </span>
                      <span className="rounded-lg bg-emerald-600 px-2.5 py-0.5 font-mono text-xs font-extrabold text-white">
                        {solverSolution.targetVarMeta.siUnit}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy('solver_res', solverSolution.formattedResult)}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-300 bg-white px-3 py-1.5 text-xs font-extrabold text-emerald-800 hover:bg-emerald-100"
                  >
                    {copiedKey === 'solver_res' ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        <span>Đã chép</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy đáp số</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* TAB 3: CODATA CONSTANTS & SI PREFIXES                        */}
      {/* ============================================================ */}
      {activeTab === 'constants' && (
        <div className="space-y-6">
          {/* CODATA Constants Grid */}
          <div className="edu-card space-y-4 p-5 sm:p-6">
            <div>
              <h2 className="text-base font-extrabold text-slate-900 sm:text-lg">
                ⚛️ Bảng Hằng Số Vật Lý Chuẩn CODATA (Bấm 1 chạm để Copy)
              </h2>
              <p className="text-xs text-slate-500">
                Các hằng số chuẩn thường dùng trong đề thi Vật lý THCS &amp; THPT Quốc gia
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {CODATA_CONSTANTS.map((c, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs transition hover:border-teal-300"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-xl bg-teal-50 px-2.5 py-1 text-base font-extrabold text-teal-800">
                        <KatexFormula latex={c.symbolLatex} />
                      </span>
                      <span className="text-[11px] font-bold text-slate-400">{c.gradeNote}</span>
                    </div>
                    <div className="mt-2 text-xs font-extrabold text-slate-900">{c.name}</div>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
                    <div>
                      <span className="font-mono text-sm font-extrabold text-emerald-700">
                        {c.valueText}
                      </span>{' '}
                      <span className="text-xs font-semibold text-slate-500">{c.siUnit}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(`const_${idx}`, c.copyValue)}
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-bold text-slate-600 hover:bg-slate-100"
                    >
                      {copiedKey === `const_${idx}` ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-600" />
                          <span>Đã chép</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SI Prefixes Table */}
          <div className="edu-card space-y-4 p-5 sm:p-6">
            <div>
              <h2 className="text-base font-extrabold text-slate-900 sm:text-lg">
                📏 Bảng Tiếp Đầu Ngữ Hệ Đơn Vị Quốc Tế SI (10⁻¹² → 10¹²)
              </h2>
              <p className="text-xs text-slate-500">
                Quy tắc nhân lũy thừa cơ số 10 khi đổi các tiếp đầu ngữ đứng trước đơn vị gốc (m, g, s, A, F, J, W, Hz)
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full border-collapse text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                    <th className="px-4 py-3">Tên tiếp đầu ngữ</th>
                    <th className="px-4 py-3 text-center">Ký hiệu</th>
                    <th className="px-4 py-3 text-center">Hệ số nhân (10ⁿ)</th>
                    <th className="px-4 py-3">Giá trị thập phân</th>
                    <th className="px-4 py-3">Ví dụ thường gặp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {SI_PREFIXES.map((p) => (
                    <tr key={p.symbol} className="hover:bg-slate-50/80">
                      <td className="px-4 py-3 font-extrabold text-slate-900">{p.prefix}</td>
                      <td className="px-4 py-3 text-center">
                        <span className="rounded-lg bg-indigo-50 px-2.5 py-1 font-mono font-extrabold text-indigo-700">
                          {p.symbol}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center font-bold text-emerald-700">
                        <KatexFormula latex={p.powerLatex} />
                      </td>
                      <td className="px-4 py-3 font-mono text-xs text-slate-600">{p.factor}</td>
                      <td className="px-4 py-3 text-xs font-medium text-slate-600">{p.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

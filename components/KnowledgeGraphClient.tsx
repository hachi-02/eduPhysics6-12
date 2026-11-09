'use client';

import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  PHYSICS_PILLARS,
  PhysicsPillarId,
  TopicRuntimeInput,
  KnowledgeGraphNode,
  DIAGNOSTIC_PRESET_SCENARIOS,
  buildKnowledgeGraphState,
  tracePrerequisiteGaps,
} from '@/lib/knowledge-graph';
import { QuestionItem } from '@/types/cms';
import { RichPhysicsText } from './KatexRenderer';
import {
  GitBranch,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Search,
  Layers,
  Target,
  Activity,
  ShieldAlert,
  Play,
  RotateCcw,
  BookOpen,
  Zap,
  ChevronRight,
  Filter,
  HelpCircle,
  XCircle,
  Compass,
  Network,
} from 'lucide-react';

interface KnowledgeGraphClientProps {
  initialTopics: TopicRuntimeInput[];
  diagnosticQuestionsByCode: Record<string, QuestionItem[]>;
}

interface SvgLineCoord {
  key: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  role: 'upstream' | 'downstream' | 'root_path' | 'background';
  weight: number;
}

const DIFF_BADGES: Record<string, { label: string; cls: string }> = {
  nhan_biet: { label: 'Nhận biết', cls: 'bg-sky-50 text-sky-700 border-sky-200' },
  thong_hieu: { label: 'Thông hiểu', cls: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  van_dung: { label: 'Vận dụng', cls: 'bg-amber-50 text-amber-800 border-amber-200' },
  van_dung_cao: { label: 'Vận dụng cao', cls: 'bg-rose-50 text-rose-700 border-rose-200' },
};

export function KnowledgeGraphClient({
  initialTopics,
  diagnosticQuestionsByCode,
}: KnowledgeGraphClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const focusParam = searchParams.get('focus');

  // State for simulated broken nodes (for scenarios or manual what-if testing)
  const [activePresetId, setActivePresetId] = useState<string | null>(null);
  const [simulatedBrokenCodes, setSimulatedBrokenCodes] = useState<string[]>([]);

  // Filters
  const [selectedPillar, setSelectedPillar] = useState<PhysicsPillarId | 'all'>('all');
  const [onlyFocusedChain, setOnlyFocusedChain] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Build full DAG state
  const graphState = useMemo(
    () => buildKnowledgeGraphState(initialTopics, simulatedBrokenCodes),
    [initialTopics, simulatedBrokenCodes]
  );

  // Pick initial selected topic code:
  // 1. URL ?focus=CODE
  // 2. First broken node in DB
  // 3. Default to Grade 12 Ideal Gas (G12-CH2-TP2)
  const defaultSelectedCode = useMemo(() => {
    if (focusParam && graphState.nodeMap[focusParam]) {
      return focusParam;
    }
    const brokenNodes = graphState.nodes.filter((n) => n.status === 'broken');
    if (brokenNodes.length > 0) {
      // Pick the highest grade broken node so backtracking shows lower-grade roots
      return brokenNodes[brokenNodes.length - 1].code;
    }
    const warningNodes = graphState.nodes.filter((n) => n.status === 'warning');
    if (warningNodes.length > 0) {
      return warningNodes[warningNodes.length - 1].code;
    }
    return 'G12-CH2-TP2';
  }, [focusParam, graphState]);

  const [selectedCode, setSelectedCode] = useState<string>(defaultSelectedCode);

  useEffect(() => {
    if (focusParam && graphState.nodeMap[focusParam]) {
      setSelectedCode(focusParam);
    }
  }, [focusParam, graphState.nodeMap]);

  // Run Topological Backtracking & Prerequisite Gap Detector on selectedCode
  const traceResult = useMemo(
    () => tracePrerequisiteGaps(graphState, selectedCode),
    [graphState, selectedCode]
  );

  // Inspector active tab
  const [inspectorTab, setInspectorTab] = useState<'roadmap' | 'tree' | 'probe'>('roadmap');

  // Interactive 3-Question Diagnostic Probe state
  const [probeTargetCode, setProbeTargetCode] = useState<string>(selectedCode);
  const [probeAnswers, setProbeAnswers] = useState<Record<number, number>>({});
  const [probeSubmitted, setProbeSubmitted] = useState<boolean>(false);
  const [probeSaving, setProbeSaving] = useState<boolean>(false);

  useEffect(() => {
    setProbeTargetCode(selectedCode);
    setProbeAnswers({});
    setProbeSubmitted(false);
  }, [selectedCode]);

  const startProbeForNode = (code: string) => {
    setProbeTargetCode(code);
    setProbeAnswers({});
    setProbeSubmitted(false);
    setInspectorTab('probe');
  };

  // Sets of codes in current trace chain
  const traceCodeSets = useMemo(() => {
    const ancestorCodes = new Set<string>();
    const descendantCodes = new Set<string>();
    const rootCauseCodes = new Set<string>();
    const rootPathCodes = new Set<string>();

    if (traceResult) {
      for (const a of traceResult.ancestors) ancestorCodes.add(a.node.code);
      for (const d of traceResult.descendants) descendantCodes.add(d.node.code);
      for (const r of traceResult.rootCauses) {
        rootCauseCodes.add(r.node.code);
        for (const pc of r.pathCodes) rootPathCodes.add(pc);
      }
    }
    return { ancestorCodes, descendantCodes, rootCauseCodes, rootPathCodes };
  }, [traceResult]);

  // Filter visible nodes per grade (6..12)
  const nodesByGrade = useMemo(() => {
    const grouped: Record<number, KnowledgeGraphNode[]> = {
      6: [],
      7: [],
      8: [],
      9: [],
      10: [],
      11: [],
      12: [],
    };
    const q = searchQuery.trim().toLowerCase();

    for (const node of graphState.nodes) {
      if (selectedPillar !== 'all' && node.pillar !== selectedPillar) {
        // Still keep if onlyFocusedChain is active and node is in the chain
        const inChain =
          node.code === selectedCode ||
          traceCodeSets.ancestorCodes.has(node.code) ||
          traceCodeSets.descendantCodes.has(node.code);
        if (!onlyFocusedChain || !inChain) continue;
      }

      if (onlyFocusedChain) {
        const inChain =
          node.code === selectedCode ||
          traceCodeSets.ancestorCodes.has(node.code) ||
          traceCodeSets.descendantCodes.has(node.code);
        if (!inChain) continue;
      }

      if (q) {
        const matches =
          node.code.toLowerCase().includes(q) ||
          node.title.toLowerCase().includes(q) ||
          node.coreConcepts.some((c) => c.toLowerCase().includes(q));
        if (!matches) continue;
      }

      if (grouped[node.grade_number]) {
        grouped[node.grade_number].push(node);
      }
    }
    return grouped;
  }, [graphState.nodes, selectedPillar, onlyFocusedChain, searchQuery, selectedCode, traceCodeSets]);

  // SVG overlay coordinates measurement
  const boardContainerRef = useRef<HTMLDivElement | null>(null);
  const nodeRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [svgLines, setSvgLines] = useState<SvgLineCoord[]>([]);
  const [boardSize, setBoardSize] = useState<{ width: number; height: number }>({ width: 1200, height: 700 });

  const recomputeSvgLines = useCallback(() => {
    const container = boardContainerRef.current;
    if (!container) return;

    const cRect = container.getBoundingClientRect();
    setBoardSize({
      width: Math.max(container.scrollWidth, cRect.width),
      height: Math.max(container.scrollHeight, cRect.height),
    });

    const lines: SvgLineCoord[] = [];
    for (const edge of graphState.edges) {
      const fromEl = nodeRefs.current[edge.fromCode];
      const toEl = nodeRefs.current[edge.toCode];
      if (!fromEl || !toEl) continue;

      const r1 = fromEl.getBoundingClientRect();
      const r2 = toEl.getBoundingClientRect();
      if (r1.width === 0 || r2.width === 0) continue;

      const sameColumn = Math.abs(r1.left - r2.left) < 30;
      const x1 = sameColumn
        ? r1.left - cRect.left + container.scrollLeft + r1.width * 0.85
        : r1.right - cRect.left + container.scrollLeft;
      const y1 = r1.top - cRect.top + container.scrollTop + r1.height / 2;

      const x2 = sameColumn
        ? r2.left - cRect.left + container.scrollLeft + r2.width * 0.85
        : r2.left - cRect.left + container.scrollLeft;
      const y2 = r2.top - cRect.top + container.scrollTop + r2.height / 2;

      const isRootPath =
        traceCodeSets.rootPathCodes.has(edge.fromCode) &&
        traceCodeSets.rootPathCodes.has(edge.toCode) &&
        (edge.toCode === selectedCode || traceCodeSets.ancestorCodes.has(edge.toCode));

      const isUpstream =
        (edge.toCode === selectedCode || traceCodeSets.ancestorCodes.has(edge.toCode)) &&
        traceCodeSets.ancestorCodes.has(edge.fromCode);

      const isDownstream =
        (edge.fromCode === selectedCode || traceCodeSets.descendantCodes.has(edge.fromCode)) &&
        traceCodeSets.descendantCodes.has(edge.toCode);

      let role: SvgLineCoord['role'] = 'background';
      if (isRootPath) role = 'root_path';
      else if (isUpstream) role = 'upstream';
      else if (isDownstream) role = 'downstream';

      lines.push({
        key: `${edge.fromCode}->${edge.toCode}`,
        x1,
        y1,
        x2,
        y2,
        role,
        weight: edge.weight,
      });
    }

    // Draw background lines first, then active lines on top
    const order = { background: 0, downstream: 1, upstream: 2, root_path: 3 };
    lines.sort((a, b) => order[a.role] - order[b.role]);
    setSvgLines(lines);
  }, [graphState.edges, selectedCode, traceCodeSets]);

  useEffect(() => {
    const timer = setTimeout(recomputeSvgLines, 60);
    window.addEventListener('resize', recomputeSvgLines);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', recomputeSvgLines);
    };
  }, [recomputeSvgLines, nodesByGrade, onlyFocusedChain, selectedPillar]);

  // Summary statistics
  const stats = useMemo(() => {
    let broken = 0;
    let warning = 0;
    let mastered = 0;
    let highUpstreamRisk = 0;

    for (const n of graphState.nodes) {
      if (n.status === 'broken') broken++;
      else if (n.status === 'warning') warning++;
      else if (n.status === 'mastered') mastered++;
      if (n.upstreamRiskScore >= 35) highUpstreamRisk++;
    }
    return {
      totalNodes: graphState.nodes.length,
      totalEdges: graphState.edges.length,
      broken,
      warning,
      mastered,
      highUpstreamRisk,
    };
  }, [graphState]);

  // Apply a preset diagnostic scenario
  const handleApplyPreset = (presetId: string) => {
    if (activePresetId === presetId) {
      setActivePresetId(null);
      setSimulatedBrokenCodes([]);
      return;
    }
    const preset = DIAGNOSTIC_PRESET_SCENARIOS.find((p) => p.id === presetId);
    if (!preset) return;
    setActivePresetId(preset.id);
    setSimulatedBrokenCodes(preset.simulatedBrokenCodes);
    setSelectedCode(preset.targetTopicCode);
    setInspectorTab('roadmap');
  };

  // Toggle manual simulation of a broken node
  const handleToggleSimulateNode = (code: string) => {
    setActivePresetId('custom');
    setSimulatedBrokenCodes((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  // Submit 3-question diagnostic probe
  const probeQuestions = diagnosticQuestionsByCode[probeTargetCode] || [];
  const probeNode = graphState.nodeMap[probeTargetCode];

  const handleSubmitProbe = async () => {
    if (probeSubmitted || probeQuestions.length === 0) return;
    setProbeSubmitted(true);
    setProbeSaving(true);

    try {
      const results = probeQuestions.map((q) => {
        const chosen = probeAnswers[q.id];
        const isCorrect = chosen !== undefined && chosen === q.correct_index;
        return {
          questionId: q.id,
          correct: isCorrect,
          selectedOption: chosen !== undefined ? chosen : -1,
        };
      });

      await fetch('/api/mistakes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'batch_practice_result', results }),
      });

      // Also update simulatedBrokenCodes if all 3 were answered right or if missed
      const correctCount = results.filter((r) => r.correct).length;
      if (correctCount === probeQuestions.length) {
        setSimulatedBrokenCodes((prev) => prev.filter((c) => c !== probeTargetCode));
      } else if (correctCount <= 1) {
        setSimulatedBrokenCodes((prev) =>
          prev.includes(probeTargetCode) ? prev : [...prev, probeTargetCode]
        );
      }

      router.refresh();
    } catch {
      // Ignore network error
    } finally {
      setProbeSaving(false);
    }
  };

  return (
    <div className="mx-auto max-w-[1440px] space-y-6 px-4 py-8 sm:px-6">
      {/* 1. HERO HEADER & GRAPH OVERVIEW */}
      <div className="edu-surface relative overflow-hidden rounded-3xl border border-slate-200/80 p-6 shadow-card sm:p-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-3xl space-y-2.5">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-extrabold text-brand-700">
              <Network className="h-3.5 w-3.5" />
              <span>BẢN ĐỒ LIÊN KẾT KIẾN THỨC &amp; TÌM GỐC LỖ HỔNG (LỚP 6 – LỚP 12)</span>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Bản đồ Kiến thức &amp; Truy vết Lỗ hổng Gốc rễ
            </h1>
            <p className="text-sm leading-relaxed text-slate-600">
              Kết nối toàn bộ <strong>{stats.totalNodes} chủ đề</strong> và{' '}
              <strong>{stats.totalEdges} mối liên hệ kiến thức</strong> xuyên suốt từ Lớp 6 đến Lớp 12.
              Khi bạn làm sai hoặc thấy khó ở một bài bất kỳ, hệ thống sẽ tự động{' '}
              <strong>dò ngược về các lớp dưới</strong> để chỉ ra chính xác bài gốc nào bạn đang quên và gợi ý lộ trình học bù ngắn nhất.
            </p>
          </div>

          {/* KPI Stat Cards */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:shrink-0">
            <div className="rounded-2xl border border-rose-200/80 bg-rose-50/70 p-3.5 text-center">
              <div className="text-2xl font-extrabold text-rose-700">{stats.broken}</div>
              <div className="text-[11px] font-bold text-rose-900">Đang Hổng / Sai</div>
              <div className="text-[10px] text-rose-600">Cần ôn lại ngay</div>
            </div>
            <div className="rounded-2xl border border-amber-200/80 bg-amber-50/70 p-3.5 text-center">
              <div className="text-2xl font-extrabold text-amber-700">{stats.highUpstreamRisk}</div>
              <div className="text-[11px] font-bold text-amber-900">Dễ Bị Ảnh Hưởng</div>
              <div className="text-[10px] text-amber-700">Do hổng bài lớp dưới</div>
            </div>
            <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/70 p-3.5 text-center">
              <div className="text-2xl font-extrabold text-emerald-700">{stats.mastered}</div>
              <div className="text-[11px] font-bold text-emerald-900">Đã Nắm Vững</div>
              <div className="text-[10px] text-emerald-600">Kiến thức chắc chắn</div>
            </div>
            <div className="rounded-2xl border border-brand-200/80 bg-brand-50/70 p-3.5 text-center">
              <div className="text-2xl font-extrabold text-brand-700">{stats.totalEdges}</div>
              <div className="text-[11px] font-bold text-brand-900">Mối Liên Kết</div>
              <div className="text-[10px] text-brand-600">Xuyên suốt 7 khối lớp</div>
            </div>
          </div>
        </div>

        {/* Preset Diagnostic Scenarios Bar */}
        <div className="mt-6 border-t border-slate-200/80 pt-5">
          <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-extrabold text-slate-800">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span>💡 XEM THỬ TÌNH HUỐNG MẤT GỐC THƯỜNG GẶP (Bấm vào để xem cách hệ thống dò tìm bài gốc ở lớp dưới):</span>
            </div>
            {simulatedBrokenCodes.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  setActivePresetId(null);
                  setSimulatedBrokenCodes([]);
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-purple-300 bg-purple-50 px-3 py-1.5 text-xs font-bold text-purple-800 shadow-2xs transition hover:bg-purple-100"
              >
                <RotateCcw className="h-3.5 w-3.5" /> Thoát xem thử • Quay về kết quả học của tôi ({initialTopics.filter((t) => t.activeMistakeCount > 0).length} bài đang có câu sai)
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {DIAGNOSTIC_PRESET_SCENARIOS.map((preset) => {
              const isActive = activePresetId === preset.id;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => handleApplyPreset(preset.id)}
                  className={`flex flex-col justify-between rounded-2xl border p-3.5 text-left transition duration-150 ${
                    isActive
                      ? 'border-purple-500 bg-purple-50/90 shadow-soft ring-2 ring-purple-500/20'
                      : 'border-slate-200/90 bg-white/90 hover:border-purple-300 hover:bg-purple-50/30'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-md bg-purple-100 px-2 py-0.5 text-[10px] font-extrabold text-purple-800">
                        Đích: {preset.targetTopicCode}
                      </span>
                      {isActive && (
                        <span className="text-[10px] font-extrabold text-purple-700">● Đang kích hoạt</span>
                      )}
                    </div>
                    <div className="text-xs font-bold text-slate-900 line-clamp-2">{preset.title}</div>
                  </div>
                  <div className="mt-2 text-[11px] font-medium text-slate-600 line-clamp-2">
                    {preset.subtitle}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. FILTER & LEGEND TOOLBAR */}
      <div className="edu-card space-y-4 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Pillar Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="mr-1 flex items-center gap-1 text-xs font-bold text-slate-600">
              <Filter className="h-3.5 w-3.5" /> Trụ cột:
            </span>
            <button
              type="button"
              onClick={() => setSelectedPillar('all')}
              className={`rounded-xl px-3 py-1.5 text-xs font-bold transition ${
                selectedPillar === 'all'
                  ? 'bg-slate-900 text-white shadow-soft'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Tất cả (92)
            </button>
            {Object.values(PHYSICS_PILLARS).map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedPillar(p.id)}
                className={`rounded-xl border px-3 py-1.5 text-xs font-bold transition ${
                  selectedPillar === p.id
                    ? 'border-slate-900 bg-slate-900 text-white shadow-soft'
                    : `${p.bgLight} ${p.borderLight} ${p.textDark} hover:opacity-85`
                }`}
              >
                {p.shortName}
              </button>
            ))}
          </div>

          {/* Search & Chain Isolation Toggle */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm chủ đề, công thức..."
                className="w-48 rounded-xl border border-slate-200 bg-slate-50 py-1.5 pl-8 pr-3 text-xs font-medium text-slate-800 focus:border-brand-400 focus:bg-white focus:outline-none sm:w-56"
              />
            </div>

            <button
              type="button"
              onClick={() => setOnlyFocusedChain((v) => !v)}
              className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold transition ${
                onlyFocusedChain
                  ? 'border-brand-500 bg-brand-600 text-white shadow-soft'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              <GitBranch className="h-3.5 w-3.5" />
              {onlyFocusedChain ? 'Đang lọc riêng các bài liên quan' : 'Chỉ hiện các bài liên quan trực tiếp'}
            </button>
          </div>
        </div>

        {/* Visual Legend */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3 text-[11px] text-slate-600">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 font-semibold text-rose-700">
              <span className="h-3 w-3 rounded-full bg-rose-500 ring-2 ring-rose-200" /> Đang hổng / Có câu sai
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-amber-700">
              <span className="h-3 w-3 rounded-full bg-amber-500 ring-2 ring-amber-200" /> Cần củng cố thêm
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-emerald-700">
              <span className="h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-emerald-200" /> Đã nắm vững
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-slate-600">
              <span className="h-3 w-3 rounded-full bg-slate-300" /> Chưa làm bài kiểm tra
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 font-semibold">
            <span className="flex items-center gap-1.5 text-rose-600">
              <span className="inline-block h-0.5 w-5 bg-rose-500" /> Đường dẫn tới bài gốc bị hổng
            </span>
            <span className="flex items-center gap-1.5 text-amber-600">
              <span className="inline-block h-0.5 w-5 bg-amber-500" /> Bài nền tảng lớp dưới
            </span>
            <span className="flex items-center gap-1.5 text-brand-600">
              <span className="inline-block h-0.5 w-5 bg-brand-500" /> Bài lớp trên sẽ dùng tiếp
            </span>
          </div>
        </div>
      </div>

      {/* 3. MAIN WORKSPACE: DAG MATRIX (LEFT/TOP) + GAP INSPECTOR (RIGHT) */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        {/* LEFT 7 COLUMNS: INTERACTIVE MULTI-GRADE DAG BOARD */}
        <div className="xl:col-span-7 2xl:col-span-8">
          <div className="edu-card overflow-hidden p-4 sm:p-5">
            <div className="mb-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-extrabold text-slate-800">
                <Compass className="h-4 w-4 text-brand-600" />
                <span>SƠ ĐỒ LIÊN KẾT BÀI HỌC TỪ LỚP 6 ĐẾN LỚP 12 (Bấm vào bài bất kỳ để xem lộ trình):</span>
              </div>
              <span className="text-[11px] font-semibold text-slate-500">
                Cuộn ngang để xem trọn vẹn Lớp 6 → Lớp 12
              </span>
            </div>

            <div
              ref={boardContainerRef}
              onScroll={recomputeSvgLines}
              className="relative overflow-x-auto pb-4 pt-1"
            >
              {/* SVG Directed Edges Overlay */}
              <svg
                width={boardSize.width}
                height={boardSize.height}
                className="pointer-events-none absolute left-0 top-0 z-0"
              >
                <defs>
                  <marker
                    id="arrow-root"
                    viewBox="0 0 10 10"
                    refX="7"
                    refY="5"
                    markerWidth="5"
                    markerHeight="5"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#e11d48" />
                  </marker>
                  <marker
                    id="arrow-upstream"
                    viewBox="0 0 10 10"
                    refX="7"
                    refY="5"
                    markerWidth="5"
                    markerHeight="5"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#d97706" />
                  </marker>
                  <marker
                    id="arrow-downstream"
                    viewBox="0 0 10 10"
                    refX="7"
                    refY="5"
                    markerWidth="5"
                    markerHeight="5"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb" />
                  </marker>
                </defs>

                {svgLines.map((line) => {
                  const dx = Math.abs(line.x2 - line.x1);
                  const cx1 = line.x1 + Math.max(28, dx * 0.42);
                  const cx2 = line.x2 - Math.max(28, dx * 0.42);
                  const pathD = `M ${line.x1} ${line.y1} C ${cx1} ${line.y1}, ${cx2} ${line.y2}, ${line.x2} ${line.y2}`;

                  if (line.role === 'background') {
                    return (
                      <path
                        key={line.key}
                        d={pathD}
                        fill="none"
                        stroke="#cbd5e1"
                        strokeWidth={1.1}
                        strokeOpacity={0.45}
                      />
                    );
                  }

                  if (line.role === 'root_path') {
                    return (
                      <path
                        key={line.key}
                        d={pathD}
                        fill="none"
                        stroke="#e11d48"
                        strokeWidth={2.6}
                        strokeDasharray="6 3"
                        markerEnd="url(#arrow-root)"
                      />
                    );
                  }

                  if (line.role === 'upstream') {
                    return (
                      <path
                        key={line.key}
                        d={pathD}
                        fill="none"
                        stroke="#d97706"
                        strokeWidth={2.0}
                        markerEnd="url(#arrow-upstream)"
                      />
                    );
                  }

                  return (
                    <path
                      key={line.key}
                      d={pathD}
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth={2.0}
                      strokeOpacity={0.85}
                      markerEnd="url(#arrow-downstream)"
                    />
                  );
                })}
              </svg>

              {/* 7 Grade Columns */}
              <div className="relative z-10 flex min-w-[1160px] gap-3.5">
                {[6, 7, 8, 9, 10, 11, 12].map((gradeNum) => {
                  const list = nodesByGrade[gradeNum] || [];
                  return (
                    <div key={gradeNum} className="flex w-44 shrink-0 flex-col space-y-2.5">
                      <div
                        className={`rounded-xl border px-3 py-2 text-center ${
                          gradeNum >= 10
                            ? 'border-brand-200 bg-brand-50/90 text-brand-900'
                            : 'border-slate-200 bg-slate-100/90 text-slate-800'
                        }`}
                      >
                        <div className="text-xs font-extrabold">LỚP {gradeNum}</div>
                        <div className="text-[10px] font-semibold opacity-75">
                          {gradeNum >= 10 ? 'THPT • Định hướng Thi' : 'THCS • Nền tảng KHTN'}
                        </div>
                      </div>

                      <div className="space-y-2">
                        {list.map((node) => {
                          const isSelected = node.code === selectedCode;
                          const isRootCause = traceCodeSets.rootCauseCodes.has(node.code);
                          const isAncestor = traceCodeSets.ancestorCodes.has(node.code);
                          const isDescendant = traceCodeSets.descendantCodes.has(node.code);
                          const inActiveChain = isSelected || isAncestor || isDescendant;

                          const pillarInfo = PHYSICS_PILLARS[node.pillar];

                          // Node border & background styling
                          let cardStyle = 'border-slate-200/90 bg-white/95 text-slate-800';
                          let dotColor = 'bg-slate-300';

                          if (node.status === 'broken') {
                            cardStyle = 'border-rose-400 bg-rose-50/95 text-rose-950';
                            dotColor = 'bg-rose-600 ring-2 ring-rose-200';
                          } else if (node.status === 'warning' || node.upstreamRiskScore >= 40) {
                            cardStyle = 'border-amber-400 bg-amber-50/95 text-amber-950';
                            dotColor = 'bg-amber-500 ring-2 ring-amber-200';
                          } else if (node.status === 'mastered') {
                            cardStyle = 'border-emerald-400 bg-emerald-50/95 text-emerald-950';
                            dotColor = 'bg-emerald-600 ring-2 ring-emerald-200';
                          }

                          if (isSelected) {
                            cardStyle += ' ring-4 ring-slate-900 border-slate-900 shadow-card scale-[1.03]';
                          } else if (isRootCause) {
                            cardStyle += ' ring-2 ring-rose-600 shadow-soft';
                          } else if (isAncestor) {
                            cardStyle += ' ring-2 ring-amber-500/80';
                          } else if (isDescendant) {
                            cardStyle += ' ring-2 ring-brand-500/80';
                          } else {
                            cardStyle += ' opacity-45 hover:opacity-95';
                          }

                          return (
                            <button
                              key={node.code}
                              ref={(el) => {
                                nodeRefs.current[node.code] = el;
                              }}
                              type="button"
                              onClick={() => setSelectedCode(node.code)}
                              className={`group relative flex w-full flex-col rounded-xl border p-2.5 text-left transition duration-150 ${cardStyle}`}
                            >
                              {/* Top row: Code + Health dot */}
                              <div className="flex items-center justify-between gap-1">
                                <span
                                  className="rounded px-1.5 py-0.5 font-mono text-[10px] font-extrabold text-white"
                                  style={{ backgroundColor: pillarInfo.color }}
                                >
                                  {node.code}
                                </span>
                                <span className={`h-2.5 w-2.5 rounded-full ${dotColor}`} />
                              </div>

                              {/* Title */}
                              <div className="mt-1.5 text-[11px] font-bold leading-snug line-clamp-2">
                                {node.title.replace(/^Chủ đề \d+\.\d+:\s*/i, '')}
                              </div>

                              {/* Role badge if in trace */}
                              {isSelected && (
                                <div className="mt-1.5 inline-flex items-center gap-1 rounded bg-slate-900 px-1.5 py-0.5 text-[9px] font-extrabold text-white">
                                  <Target className="h-2.5 w-2.5" /> ĐANG TRUY VẾT
                                </div>
                              )}
                              {!isSelected && isRootCause && (
                                <div className="mt-1.5 inline-flex items-center gap-1 rounded bg-rose-600 px-1.5 py-0.5 text-[9px] font-extrabold text-white">
                                  <AlertTriangle className="h-2.5 w-2.5" /> GỐC LỖ HỔNG
                                </div>
                              )}
                              {!isSelected && !isRootCause && isAncestor && (
                                <div className="mt-1.5 inline-flex items-center gap-1 rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-extrabold text-amber-900">
                                  ↑ Tiền đề
                                </div>
                              )}
                              {!isSelected && isDescendant && (
                                <div className="mt-1.5 inline-flex items-center gap-1 rounded bg-brand-100 px-1.5 py-0.5 text-[9px] font-extrabold text-brand-800">
                                  ↓ Phụ thuộc
                                </div>
                              )}

                              {/* Mistake / Risk footer */}
                              {(node.activeMistakeCount > 0 || node.upstreamRiskScore >= 35) && (
                                <div className="mt-1.5 flex items-center justify-between border-t border-slate-200/60 pt-1 text-[9px] font-bold">
                                  {node.activeMistakeCount > 0 ? (
                                    <span className="text-rose-700">Sai {node.activeMistakeCount} câu</span>
                                  ) : (
                                    <span className="text-amber-800">Rủi ro {node.upstreamRiskScore}%</span>
                                  )}
                                  <span className="text-slate-500">Sẵn sàng {node.effectiveReadiness}%</span>
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT 5 COLUMNS: DEEP PREREQUISITE GAP INSPECTOR & REMEDIATION PANEL */}
        <div className="xl:col-span-5 2xl:col-span-4">
          {traceResult && (
            <div className="edu-card sticky top-20 space-y-5 p-5 sm:p-6">
              {/* Target Topic Header */}
              <div className="space-y-3 border-b border-slate-100 pb-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="rounded-lg bg-slate-900 px-2.5 py-1 font-mono text-xs font-extrabold text-white">
                      Lớp {traceResult.targetNode.grade_number} • {traceResult.targetNode.code}
                    </span>
                    <span
                      className={`rounded-lg border px-2.5 py-1 text-xs font-bold ${
                        PHYSICS_PILLARS[traceResult.targetNode.pillar].bgLight
                      } ${PHYSICS_PILLARS[traceResult.targetNode.pillar].borderLight} ${
                        PHYSICS_PILLARS[traceResult.targetNode.pillar].textDark
                      }`}
                    >
                      {PHYSICS_PILLARS[traceResult.targetNode.pillar].shortName}
                    </span>
                  </div>

                  {/* Simulate Break Toggle */}
                  <button
                    type="button"
                    onClick={() => handleToggleSimulateNode(traceResult.targetNode.code)}
                    className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-[11px] font-bold transition ${
                      traceResult.targetNode.status === 'broken'
                        ? 'border-rose-300 bg-rose-100 text-rose-800 hover:bg-rose-200'
                        : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-rose-50 hover:text-rose-700'
                    }`}
                    title="Đánh dấu thử rằng bạn đang yếu bài này để xem các bài lớp trên bị ảnh hưởng thế nào"
                  >
                    <Zap className="h-3 w-3" />
                    {traceResult.targetNode.status === 'broken'
                      ? 'Đang đánh dấu yếu (Bấm để bỏ)'
                      : 'Thử đánh dấu: Tôi đang yếu bài này'}
                  </button>
                </div>

                <h2 className="text-lg font-extrabold leading-snug text-slate-900">
                  {traceResult.targetNode.title}
                </h2>

                {/* 3 Quantitative Readiness Meters */}
                <div className="grid grid-cols-3 gap-2 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 text-center">
                  <div>
                    <div className="text-base font-extrabold text-slate-900">
                      {traceResult.targetNode.directMasteryScore}%
                    </div>
                    <div className="text-[10px] font-semibold text-slate-500">Nắm vững trực tiếp</div>
                  </div>
                  <div className="border-x border-slate-200/80">
                    <div
                      className={`text-base font-extrabold ${
                        traceResult.targetNode.upstreamRiskScore >= 35
                          ? 'text-rose-600'
                          : 'text-emerald-600'
                      }`}
                    >
                      {traceResult.targetNode.upstreamRiskScore}%
                    </div>
                    <div className="text-[10px] font-semibold text-slate-500">Rủi ro hổng tiền đề</div>
                  </div>
                  <div>
                    <div
                      className={`text-base font-extrabold ${
                        traceResult.targetNode.effectiveReadiness < 50
                          ? 'text-rose-600'
                          : traceResult.targetNode.effectiveReadiness < 75
                            ? 'text-amber-600'
                            : 'text-emerald-600'
                      }`}
                    >
                      {traceResult.targetNode.effectiveReadiness}%
                    </div>
                    <div className="text-[10px] font-semibold text-slate-500">Độ sẵn sàng thực tế</div>
                  </div>
                </div>

                {/* Core concepts & failure symptom */}
                <div className="space-y-2 rounded-2xl border border-slate-200/80 bg-white p-3 text-xs">
                  <div className="flex flex-wrap gap-1.5">
                    {traceResult.targetNode.coreConcepts.map((c, i) => (
                      <span
                        key={i}
                        className="rounded-md bg-slate-100 px-2 py-0.5 font-semibold text-slate-700"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <div className="text-[11px] leading-relaxed text-rose-800">
                    <strong>⚠️ Triệu chứng khi hổng: </strong>
                    {traceResult.targetNode.failureSymptom}
                  </div>
                </div>

                {/* Quick Navigation & Probe Actions */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <Link
                    href={`/topic/${traceResult.targetNode.id}`}
                    className="edu-btn-primary flex-1 justify-center py-2 text-xs"
                  >
                    <BookOpen className="h-3.5 w-3.5" /> Học Lý thuyết &amp; Mô phỏng
                  </Link>
                  <button
                    type="button"
                    onClick={() => startProbeForNode(traceResult.targetNode.code)}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-purple-300 bg-purple-50 px-3.5 py-2 text-xs font-bold text-purple-800 transition hover:bg-purple-100"
                  >
                    <Play className="h-3.5 w-3.5" /> Test Chẩn đoán (3 câu)
                  </button>
                </div>
              </div>

              {/* Inspector Navigation Tabs */}
              <div className="grid grid-cols-3 gap-1 rounded-xl bg-slate-100 p-1 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setInspectorTab('roadmap')}
                  className={`rounded-lg py-2 transition ${
                    inspectorTab === 'roadmap'
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  🎯 Truy vết &amp; Lộ trình
                </button>
                <button
                  type="button"
                  onClick={() => setInspectorTab('tree')}
                  className={`rounded-lg py-2 transition ${
                    inspectorTab === 'tree'
                      ? 'bg-white text-slate-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  🌳 Cây Phả hệ ({traceResult.ancestors.length + traceResult.descendants.length})
                </button>
                <button
                  type="button"
                  onClick={() => setInspectorTab('probe')}
                  className={`rounded-lg py-2 transition ${
                    inspectorTab === 'probe'
                      ? 'bg-purple-600 text-white shadow-2xs'
                      : 'text-purple-700 hover:bg-purple-50'
                  }`}
                >
                  ⚡ Chẩn đoán nhanh
                </button>
              </div>

              {/* TAB 1: ROOT-CAUSE DIAGNOSIS & TOPOLOGICAL REMEDIATION ROADMAP */}
              {inspectorTab === 'roadmap' && (
                <div className="space-y-4">
                  {/* Diagnosis Summary Alert */}
                  <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-3.5 text-xs leading-relaxed text-amber-950">
                    <div className="mb-1 flex items-center gap-1.5 font-extrabold text-amber-900">
                      <ShieldAlert className="h-4 w-4 text-amber-600" />
                      <span>NHẬN ĐỊNH NGUYÊN NHÂN &amp; GỢI Ý ÔN TẬP:</span>
                    </div>
                    {traceResult.diagnosisSummary}
                  </div>

                  {/* Root-Cause Bottleneck Nodes */}
                  {traceResult.rootCauses.length > 0 && (
                    <div className="space-y-2.5">
                      <div className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        🔍 Mắt xích Tiền đề Gốc rễ cần kiểm tra ({traceResult.rootCauses.length}):
                      </div>
                      {traceResult.rootCauses.map((rc, idx) => (
                        <div
                          key={rc.node.code}
                          className={`space-y-2 rounded-2xl border p-3.5 text-xs ${
                            rc.node.status === 'broken'
                              ? 'border-rose-300 bg-rose-50/70'
                              : 'border-amber-200 bg-amber-50/40'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="rounded-md bg-rose-600 px-2 py-0.5 text-[10px] font-extrabold text-white">
                              Gốc #{idx + 1} • Lớp {rc.node.grade_number} ({rc.node.code})
                            </span>
                            <span className="text-[11px] font-bold text-slate-600">
                              Cách {rc.depth} bậc • Trọng số {Math.round(rc.pathWeight * 100)}%
                            </span>
                          </div>

                          <div className="font-bold text-slate-900">{rc.node.title}</div>

                          <div className="rounded-xl bg-white/90 p-2.5 text-[11px] leading-relaxed text-slate-700">
                            <div>
                              <strong className="text-brand-700">🔗 Cầu nối: </strong>
                              {rc.connectingEdge.bridgeConcept}
                            </div>
                            <div className="mt-1 text-slate-600">
                              {rc.connectingEdge.pedagogicalReason}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 pt-1">
                            <button
                              type="button"
                              onClick={() => setSelectedCode(rc.node.code)}
                              className="rounded-lg border border-slate-300 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-700 hover:bg-slate-100"
                            >
                              Di chuyển tới nút này
                            </button>
                            <button
                              type="button"
                              onClick={() => startProbeForNode(rc.node.code)}
                              className="rounded-lg bg-purple-600 px-2.5 py-1 text-[11px] font-bold text-white hover:bg-purple-500"
                            >
                              ⚡ Test nhanh 3 câu tiền đề này
                            </button>
                            <Link
                              href={`/topic/${rc.node.id}`}
                              className="ml-auto text-[11px] font-bold text-brand-700 hover:underline"
                            >
                              Mở bài học →
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Step-by-Step Topological Remediation Path */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-slate-700">
                      <span>🛣️ Lộ trình Vá lỗ hổng từ Gốc đến Ngọn:</span>
                      <span className="text-[11px] font-semibold text-brand-700">
                        {traceResult.remediationRoadmap.reduce((s, r) => s + r.estimatedMinutes, 0)} phút
                      </span>
                    </div>

                    <div className="space-y-2">
                      {traceResult.remediationRoadmap.map((step) => (
                        <div
                          key={step.node.code}
                          className="relative rounded-2xl border border-slate-200/90 bg-white p-3.5 text-xs shadow-2xs"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span
                                className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-extrabold text-white ${
                                  step.role === 'root_prerequisite'
                                    ? 'bg-rose-600'
                                    : step.role === 'target_topic'
                                      ? 'bg-slate-900'
                                      : 'bg-amber-500'
                                }`}
                              >
                                {step.stepNumber}
                              </span>
                              <span className="font-extrabold text-slate-900">
                                Lớp {step.node.grade_number} • {step.node.code}
                              </span>
                            </div>
                            <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                              ~{step.estimatedMinutes} phút
                            </span>
                          </div>

                          <div className="mt-1.5 font-bold text-slate-800">{step.node.title}</div>
                          <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
                            {step.reasonToReview}
                          </p>

                          {step.bridgeConceptToNext && (
                            <div className="mt-2 rounded-lg bg-brand-50/80 px-2.5 py-1.5 text-[11px] font-semibold text-brand-800">
                              🔓 Mở khóa: {step.bridgeConceptToNext}
                            </div>
                          )}

                          <div className="mt-2.5 flex items-center justify-between border-t border-slate-100 pt-2">
                            <button
                              type="button"
                              onClick={() => startProbeForNode(step.node.code)}
                              className="text-[11px] font-bold text-purple-700 hover:underline"
                            >
                              ⚡ Làm 3 câu kiểm tra
                            </button>
                            <Link
                              href={`/topic/${step.node.id}`}
                              className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-700 hover:underline"
                            >
                              Vào học chủ đề này <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: FULL UPSTREAM & DOWNSTREAM DEPENDENCY TREE */}
              {inspectorTab === 'tree' && (
                <div className="max-h-[540px] space-y-4 overflow-y-auto pr-1">
                  <div className="space-y-2">
                    <div className="text-xs font-extrabold text-amber-800">
                      ↑ KIẾN THỨC NỀN TẢNG PHÍA TRƯỚC ({traceResult.ancestors.length} bài cần nắm vững trước)
                    </div>
                    {traceResult.ancestors.length === 0 ? (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
                        Đây là bài học mở đầu nhánh kiến thức, không yêu cầu bài học trước đó.
                      </div>
                    ) : (
                      traceResult.ancestors.map((anc) => (
                        <div
                          key={anc.node.code}
                          onClick={() => setSelectedCode(anc.node.code)}
                          className="cursor-pointer rounded-xl border border-slate-200 bg-white p-3 text-xs transition hover:border-amber-400 hover:bg-amber-50/30"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-extrabold text-slate-900">
                              Lớp {anc.node.grade_number} • {anc.node.code}: {anc.node.title}
                            </span>
                            <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold text-amber-900">
                              Trước {anc.depth} bước
                            </span>
                          </div>
                          <div className="mt-1 text-[11px] text-slate-600">
                            <strong>Kiến thức liên kết:</strong> {anc.connectingEdge.bridgeConcept}
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="space-y-2 border-t border-slate-100 pt-3">
                    <div className="text-xs font-extrabold text-brand-800">
                      ↓ CÁC BÀI LỚP TRÊN SẼ DÙNG KIẾN THỨC NÀY ({traceResult.descendants.length} bài)
                    </div>
                    {traceResult.descendants.length === 0 ? (
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
                        Đây là bài học tổng kết cuối nhánh trong chương trình THPT.
                      </div>
                    ) : (
                      traceResult.descendants.map((desc) => (
                        <div
                          key={desc.node.code}
                          onClick={() => setSelectedCode(desc.node.code)}
                          className="cursor-pointer rounded-xl border border-slate-200 bg-white p-3 text-xs transition hover:border-brand-400 hover:bg-brand-50/30"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-extrabold text-slate-900">
                              Lớp {desc.node.grade_number} • {desc.node.code}: {desc.node.title}
                            </span>
                            <span className="rounded bg-brand-100 px-1.5 py-0.5 text-[10px] font-bold text-brand-800">
                              Sau {desc.depth} bước
                            </span>
                          </div>
                          <div className="mt-1 text-[11px] text-slate-600">
                            <strong>Ứng dụng tiếp:</strong> {desc.connectingEdge.bridgeConcept}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* TAB 3: INTERACTIVE 3-QUESTION PREREQUISITE DIAGNOSTIC PROBE */}
              {inspectorTab === 'probe' && (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-purple-200 bg-purple-50/70 p-3.5 text-xs">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-extrabold text-purple-950">
                        🧪 BÀI TEST CHẨN ĐOÁN NHANH (3 CÂU CỐT LÕI)
                      </span>
                      {probeNode && (
                        <span className="rounded bg-purple-200 px-2 py-0.5 font-mono text-[10px] font-extrabold text-purple-900">
                          Lớp {probeNode.grade_number} • {probeNode.code}
                        </span>
                      )}
                    </div>
                    {probeNode && (
                      <div className="mt-1 font-bold text-purple-900">{probeNode.title}</div>
                    )}
                    <p className="mt-1 text-[11px] text-purple-800">
                      Trả lời 3 câu hỏi đại diện (Nhận biết → Thông hiểu → Vận dụng) để hệ thống xác thực xem bạn có bị hổng mắt xích này hay không.
                    </p>
                  </div>

                  {probeQuestions.length === 0 ? (
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center text-xs text-slate-600">
                      Không tìm thấy câu hỏi chẩn đoán cho chủ đề này.
                    </div>
                  ) : (
                    <div className="max-h-[480px] space-y-4 overflow-y-auto pr-1">
                      {probeQuestions.map((q, qIdx) => {
                        const chosen = probeAnswers[q.id];
                        const diffInfo = DIFF_BADGES[q.difficulty] || DIFF_BADGES.nhan_biet;

                        return (
                          <div
                            key={q.id}
                            className="space-y-2.5 rounded-2xl border border-slate-200 bg-white p-3.5 text-xs"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-extrabold text-slate-900">Câu {qIdx + 1}/3</span>
                              <span
                                className={`rounded border px-2 py-0.5 text-[10px] font-bold ${diffInfo.cls}`}
                              >
                                {diffInfo.label}
                              </span>
                            </div>

                            <div className="font-semibold leading-relaxed text-slate-900">
                              <RichPhysicsText text={q.question_text} />
                            </div>

                            <div className="space-y-1.5">
                              {q.options.map((opt, oIdx) => {
                                const letter = ['A', 'B', 'C', 'D'][oIdx];
                                const isSelected = chosen === oIdx;
                                const isRight = q.correct_index === oIdx;

                                let optStyle =
                                  'border-slate-200 bg-slate-50/60 text-slate-800 hover:bg-brand-50/40';
                                if (!probeSubmitted && isSelected) {
                                  optStyle =
                                    'border-purple-500 bg-purple-50 font-semibold text-purple-950 ring-1 ring-purple-400';
                                } else if (probeSubmitted) {
                                  if (isRight) {
                                    optStyle =
                                      'border-emerald-500 bg-emerald-50 font-semibold text-emerald-950';
                                  } else if (isSelected && !isRight) {
                                    optStyle = 'border-rose-400 bg-rose-50 text-rose-950';
                                  }
                                }

                                return (
                                  <button
                                    key={oIdx}
                                    type="button"
                                    disabled={probeSubmitted}
                                    onClick={() =>
                                      setProbeAnswers((prev) => ({ ...prev, [q.id]: oIdx }))
                                    }
                                    className={`flex w-full items-start gap-2 rounded-xl border p-2.5 text-left transition ${optStyle}`}
                                  >
                                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded bg-slate-200 text-[10px] font-extrabold text-slate-700">
                                      {letter}
                                    </span>
                                    <span className="flex-1 leading-relaxed">
                                      <RichPhysicsText text={opt} />
                                    </span>
                                  </button>
                                );
                              })}
                            </div>

                            {probeSubmitted && (
                              <div className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-[11px] leading-relaxed text-slate-700">
                                <strong className="text-emerald-700">Giải thích: </strong>
                                <RichPhysicsText text={q.explanation} />
                              </div>
                            )}
                          </div>
                        );
                      })}

                      {!probeSubmitted ? (
                        <button
                          type="button"
                          disabled={probeSaving}
                          onClick={handleSubmitProbe}
                          className="w-full rounded-xl bg-purple-600 py-2.5 text-xs font-extrabold text-white shadow-soft transition hover:bg-purple-500"
                        >
                          Chấm điểm Chẩn đoán &amp; Cập nhật Đồ thị Tri thức
                        </button>
                      ) : (
                        <div className="flex items-center justify-between gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-xs font-bold text-emerald-900">
                          <span>
                            Kết quả:{' '}
                            {
                              probeQuestions.filter((q) => probeAnswers[q.id] === q.correct_index)
                                .length
                            }
                            /{probeQuestions.length} câu đúng! Đã cập nhật trạng thái mắt xích.
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              setProbeAnswers({});
                              setProbeSubmitted(false);
                            }}
                            className="rounded-lg bg-white px-2.5 py-1 text-[11px] text-slate-700 shadow-2xs"
                          >
                            Làm lại
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

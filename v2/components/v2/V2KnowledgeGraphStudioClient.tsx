'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import gsap from 'gsap';
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  Compass,
  Crosshair,
  ExternalLink,
  Filter,
  Flame,
  GitBranch,
  HelpCircle,
  Layers,
  Minus,
  Network,
  Play,
  Plus,
  RefreshCw,
  RotateCcw,
  Route,
  Search,
  ShieldAlert,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react';
import {
  PHYSICS_PILLARS,
  DIAGNOSTIC_PRESET_SCENARIOS,
  buildKnowledgeGraphState,
  tracePrerequisiteGaps,
  type DiagnosticPresetScenario,
  type KnowledgeEdgeSpec,
  type KnowledgeGraphNode,
  type PhysicsPillarId,
  type TopicRuntimeInput,
} from '@/lib/knowledge-graph';
import type { QuestionItem } from '@/types/cms';
import { RichPhysicsText } from '@/components/KatexRenderer';
import { GlobalSearchModal } from '@/components/GlobalSearchModal';
import {
  RETURN_TO_CURRICULUM_KEY,
  getSavedGradePreference,
  saveGradePreference,
} from '@/lib/grade-context';

interface Props {
  topics: TopicRuntimeInput[];
  diagnosticQuestionsByCode: Record<string, QuestionItem[]>;
  initialGrade: number | null;
  initialTopicCode: string | null;
}

interface RenderedSvgEdge {
  key: string;
  fromCode: string;
  toCode: string;
  d: string;
  isHighlighted: boolean;
  isRootLink: boolean;
  isBrokenSource: boolean;
  weight: number;
}

const GRADES = [6, 7, 8, 9, 10, 11, 12] as const;

const GRADE_ACCENTS: Record<number, { text: string; badge: string; border: string; hex: string }> = {
  6: {
    text: 'text-cyan-300',
    badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-400/20',
    border: 'border-cyan-400/30',
    hex: '#22d3ee',
  },
  7: {
    text: 'text-emerald-300',
    badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/20',
    border: 'border-emerald-400/30',
    hex: '#34d399',
  },
  8: {
    text: 'text-sky-300',
    badge: 'bg-sky-500/15 text-sky-300 border-sky-400/20',
    border: 'border-sky-400/30',
    hex: '#38bdf8',
  },
  9: {
    text: 'text-indigo-300',
    badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-400/20',
    border: 'border-indigo-400/30',
    hex: '#818cf8',
  },
  10: {
    text: 'text-amber-300',
    badge: 'bg-amber-500/15 text-amber-300 border-amber-400/20',
    border: 'border-amber-400/30',
    hex: '#fbbf24',
  },
  11: {
    text: 'text-rose-300',
    badge: 'bg-rose-500/15 text-rose-300 border-rose-400/20',
    border: 'border-rose-400/30',
    hex: '#fb7185',
  },
  12: {
    text: 'text-purple-300',
    badge: 'bg-purple-500/15 text-purple-300 border-purple-400/20',
    border: 'border-purple-400/30',
    hex: '#c084fc',
  },
};

function getStatusMeta(status: KnowledgeGraphNode['status']) {
  switch (status) {
    case 'mastered':
      return {
        label: 'Đã vững',
        pillClass: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/25',
        cardBorder: 'border-emerald-400/30 hover:border-emerald-400/50',
        barColor: 'bg-emerald-400',
        dotColor: 'bg-emerald-400',
      };
    case 'warning':
      return {
        label: 'Cảnh báo',
        pillClass: 'bg-amber-500/15 text-amber-300 border-amber-400/25',
        cardBorder: 'border-amber-400/35 hover:border-amber-400/60',
        barColor: 'bg-amber-400',
        dotColor: 'bg-amber-400',
      };
    case 'broken':
      return {
        label: 'Lỗ hổng',
        pillClass: 'bg-rose-500/15 text-rose-300 border-rose-400/30',
        cardBorder: 'border-rose-400/40 hover:border-rose-400/70',
        barColor: 'bg-rose-400',
        dotColor: 'bg-rose-400',
      };
    default:
      return {
        label: 'Chưa kiểm tra',
        pillClass: 'bg-slate-500/15 text-slate-300 border-white/10',
        cardBorder: 'border-white/[0.06] hover:border-white/20',
        barColor: 'bg-cyan-400/70',
        dotColor: 'bg-slate-400',
      };
  }
}

export function V2KnowledgeGraphStudioClient({
  topics,
  diagnosticQuestionsByCode,
  initialGrade,
  initialTopicCode,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const boardContainerRef = useRef<HTMLDivElement>(null);
  const boardInnerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const [selectedGradeFilter, setSelectedGradeFilter] = useState<'all' | number>(
    initialGrade ?? 'all'
  );
  const [selectedPillarFilter, setSelectedPillarFilter] = useState<'all' | PhysicsPillarId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [focusSubgraphOnly, setFocusSubgraphOnly] = useState(false);

  const [simulatedBrokenCodes, setSimulatedBrokenCodes] = useState<string[]>([]);
  const [simulatedMasteredCodes, setSimulatedMasteredCodes] = useState<string[]>([]);
  const [activePresetId, setActivePresetId] = useState<string | null>(null);

  const [zoom, setZoom] = useState(1);
  const [svgLines, setSvgLines] = useState<RenderedSvgEdge[]>([]);
  const [inspectorTab, setInspectorTab] = useState<'roadmap' | 'tree' | 'probe'>('roadmap');

  // Drag-to-pan state
  const dragStateRef = useRef<{
    isDragging: boolean;
    startX: number;
    startY: number;
    scrollLeft: number;
    scrollTop: number;
  }>({
    isDragging: false,
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });
  const [isPanning, setIsPanning] = useState(false);

  // 3-question diagnostic probe state
  const [probeAnswers, setProbeAnswers] = useState<Record<number, number>>({});
  const [probeSubmitted, setProbeSubmitted] = useState(false);
  const [probeSaving, setProbeSaving] = useState(false);
  const [probeFeedback, setProbeFeedback] = useState<string | null>(null);

  // Sync grade preference if initialGrade was null
  useEffect(() => {
    if (initialGrade !== null) {
      saveGradePreference(initialGrade);
      return;
    }
    const saved = getSavedGradePreference();
    if (saved && saved !== 'all') {
      setSelectedGradeFilter(saved);
    }
  }, [initialGrade]);

  // GSAP subtle stagger
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.kg-stagger', {
        y: 14,
        opacity: 0,
        duration: 0.45,
        stagger: 0.05,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  // Build DAG state with active simulations
  const graphState = useMemo(() => {
    return buildKnowledgeGraphState(topics, simulatedBrokenCodes, simulatedMasteredCodes);
  }, [topics, simulatedBrokenCodes, simulatedMasteredCodes]);

  // Determine default selected node code
  const defaultCode = useMemo(() => {
    if (initialTopicCode && graphState.nodeMap[initialTopicCode]) {
      return initialTopicCode;
    }
    const broken = graphState.nodes.find((n) => n.status === 'broken');
    if (broken) return broken.code;
    const warning = graphState.nodes.find((n) => n.status === 'warning');
    if (warning) return warning.code;
    if (graphState.nodeMap['G12-CH2-TP2']) return 'G12-CH2-TP2';
    return graphState.nodes[0]?.code ?? '';
  }, [graphState, initialTopicCode]);

  const [selectedNodeCode, setSelectedNodeCode] = useState<string>(defaultCode);

  useEffect(() => {
    if (!selectedNodeCode || !graphState.nodeMap[selectedNodeCode]) {
      if (defaultCode) setSelectedNodeCode(defaultCode);
    }
  }, [selectedNodeCode, graphState.nodeMap, defaultCode]);

  const selectedNode = useMemo(() => {
    return graphState.nodeMap[selectedNodeCode] ?? graphState.nodes[0] ?? null;
  }, [graphState, selectedNodeCode]);

  // Prerequisite trace for selected node
  const traceResult = useMemo(() => {
    if (!selectedNode) return null;
    return tracePrerequisiteGaps(graphState, selectedNode.code);
  }, [graphState, selectedNode]);

  // Related code set for highlighting & optional isolation
  const subgraphCodeSet = useMemo(() => {
    const set = new Set<string>();
    if (!selectedNode) return set;
    set.add(selectedNode.code);
    if (traceResult) {
      for (const a of traceResult.ancestors) set.add(a.node.code);
      for (const d of traceResult.descendants) set.add(d.node.code);
    }
    return set;
  }, [selectedNode, traceResult]);

  const rootCauseCodeSet = useMemo(() => {
    const set = new Set<string>();
    if (traceResult) {
      for (const rc of traceResult.rootCauses) set.add(rc.node.code);
    }
    return set;
  }, [traceResult]);

  // Filter visible nodes
  const visibleNodes = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return graphState.nodes.filter((n) => {
      if (selectedGradeFilter !== 'all' && n.grade_number !== selectedGradeFilter) {
        return false;
      }
      if (selectedPillarFilter !== 'all' && n.pillar !== selectedPillarFilter) {
        return false;
      }
      if (focusSubgraphOnly && !subgraphCodeSet.has(n.code)) {
        return false;
      }
      if (q) {
        const hay = `${n.code} ${n.title} ${n.coreConcepts.join(' ')}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [
    graphState.nodes,
    selectedGradeFilter,
    selectedPillarFilter,
    focusSubgraphOnly,
    subgraphCodeSet,
    searchQuery,
  ]);

  const visibleCodeSet = useMemo(() => new Set(visibleNodes.map((n) => n.code)), [visibleNodes]);

  const nodesByGrade = useMemo(() => {
    const map: Record<number, KnowledgeGraphNode[]> = {
      6: [],
      7: [],
      8: [],
      9: [],
      10: [],
      11: [],
      12: [],
    };
    for (const node of visibleNodes) {
      if (map[node.grade_number]) {
        map[node.grade_number].push(node);
      }
    }
    return map;
  }, [visibleNodes]);

  const activeGradesColumns = useMemo(() => {
    if (selectedGradeFilter !== 'all' && !focusSubgraphOnly) {
      return [selectedGradeFilter];
    }
    return GRADES.filter((g) => nodesByGrade[g].length > 0);
  }, [selectedGradeFilter, focusSubgraphOnly, nodesByGrade]);

  // Stats across full graph
  const stats = useMemo(() => {
    let mastered = 0;
    let warning = 0;
    let broken = 0;
    let untested = 0;
    for (const n of graphState.nodes) {
      if (n.status === 'mastered') mastered++;
      else if (n.status === 'warning') warning++;
      else if (n.status === 'broken') broken++;
      else untested++;
    }
    return {
      total: graphState.nodes.length,
      mastered,
      warning,
      broken,
      untested,
      edges: graphState.edges.length,
    };
  }, [graphState]);

  // Compute SVG Bézier curves between rendered node cards
  const recomputeSvgLines = useCallback(() => {
    const innerEl = boardInnerRef.current;
    if (!innerEl) {
      setSvgLines([]);
      return;
    }

    const innerRect = innerEl.getBoundingClientRect();
    const subgraphEdgeSet = new Set(
      (traceResult?.subgraphEdges ?? []).map((e) => `${e.fromCode}->${e.toCode}`)
    );

    const lines: RenderedSvgEdge[] = [];
    for (const edge of graphState.edges) {
      if (!visibleCodeSet.has(edge.fromCode) || !visibleCodeSet.has(edge.toCode)) continue;
      const fromEl = nodeRefs.current[edge.fromCode];
      const toEl = nodeRefs.current[edge.toCode];
      if (!fromEl || !toEl) continue;

      const fromRect = fromEl.getBoundingClientRect();
      const toRect = toEl.getBoundingClientRect();

      // Convert viewport rects back into unscaled inner-board coordinates
      const x1 = (fromRect.right - innerRect.left) / zoom;
      const y1 = (fromRect.top + fromRect.height / 2 - innerRect.top) / zoom;
      const x2 = (toRect.left - innerRect.left) / zoom;
      const y2 = (toRect.top + toRect.height / 2 - innerRect.top) / zoom;

      const dx = Math.max(48, Math.abs(x2 - x1) * 0.45);
      const d = `M ${x1.toFixed(1)} ${y1.toFixed(1)} C ${(x1 + dx).toFixed(1)} ${y1.toFixed(1)}, ${(
        x2 - dx
      ).toFixed(1)} ${y2.toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}`;

      const edgeKey = `${edge.fromCode}->${edge.toCode}`;
      const isHighlighted =
        subgraphEdgeSet.has(edgeKey) ||
        edge.fromCode === selectedNode?.code ||
        edge.toCode === selectedNode?.code;
      const isRootLink = rootCauseCodeSet.has(edge.fromCode);
      const fromNode = graphState.nodeMap[edge.fromCode];
      const isBrokenSource = fromNode?.status === 'broken' || fromNode?.status === 'warning';

      lines.push({
        key: edgeKey,
        fromCode: edge.fromCode,
        toCode: edge.toCode,
        d,
        isHighlighted,
        isRootLink,
        isBrokenSource,
        weight: edge.weight,
      });
    }

    // Sort so highlighted lines render on top
    lines.sort((a, b) => Number(a.isHighlighted) - Number(b.isHighlighted));
    setSvgLines(lines);
  }, [graphState, visibleCodeSet, traceResult, selectedNode?.code, rootCauseCodeSet, zoom]);

  useEffect(() => {
    const id = requestAnimationFrame(() => recomputeSvgLines());
    return () => cancelAnimationFrame(id);
  }, [recomputeSvgLines, activeGradesColumns, inspectorTab]);

  useEffect(() => {
    const innerEl = boardInnerRef.current;
    if (!innerEl || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(() => recomputeSvgLines());
    ro.observe(innerEl);
    return () => ro.disconnect();
  }, [recomputeSvgLines]);

  const markReturnToCurriculum = () => {
    try {
      sessionStorage.setItem(RETURN_TO_CURRICULUM_KEY, '1');
    } catch {
      // ignore
    }
  };

  const handleSelectGradeFilter = (g: 'all' | number) => {
    setSelectedGradeFilter(g);
    if (typeof g === 'number') {
      saveGradePreference(g);
    }
  };

  const handleApplyPreset = (preset: DiagnosticPresetScenario) => {
    setActivePresetId(preset.id);
    setSelectedGradeFilter('all');
    setSelectedPillarFilter('all');
    setSearchQuery('');
    setFocusSubgraphOnly(false);
    setSimulatedBrokenCodes(preset.simulatedBrokenCodes);
    setSimulatedMasteredCodes([]);
    setSelectedNodeCode(preset.targetTopicCode);
    setInspectorTab('roadmap');
    setProbeAnswers({});
    setProbeSubmitted(false);
    setProbeFeedback(null);
  };

  const handleResetSimulations = () => {
    setActivePresetId(null);
    setSimulatedBrokenCodes([]);
    setSimulatedMasteredCodes([]);
    setFocusSubgraphOnly(false);
    setProbeFeedback(null);
  };

  const handleToggleSimulateNode = (
    code: string,
    mode: 'broken' | 'mastered' | 'clear',
    e?: React.MouseEvent
  ) => {
    if (e) e.stopPropagation();
    setActivePresetId(null);
    if (mode === 'broken') {
      setSimulatedMasteredCodes((prev) => prev.filter((c) => c !== code));
      setSimulatedBrokenCodes((prev) => (prev.includes(code) ? prev : [...prev, code]));
    } else if (mode === 'mastered') {
      setSimulatedBrokenCodes((prev) => prev.filter((c) => c !== code));
      setSimulatedMasteredCodes((prev) => (prev.includes(code) ? prev : [...prev, code]));
    } else {
      setSimulatedBrokenCodes((prev) => prev.filter((c) => c !== code));
      setSimulatedMasteredCodes((prev) => prev.filter((c) => c !== code));
    }
  };

  // Probe question selection for current node
  const probeQuestions = useMemo(() => {
    if (!selectedNode) return [];
    const direct = diagnosticQuestionsByCode[selectedNode.code] ?? [];
    return direct.filter((q) => Array.isArray(q.options) && q.options.length >= 2).slice(0, 3);
  }, [selectedNode, diagnosticQuestionsByCode]);

  useEffect(() => {
    setProbeAnswers({});
    setProbeSubmitted(false);
    setProbeFeedback(null);
  }, [selectedNode?.code]);

  const handleSubmitProbe = async () => {
    if (!selectedNode || probeQuestions.length === 0) return;
    setProbeSaving(true);
    setProbeFeedback(null);

    const results = probeQuestions.map((q) => {
      const chosen = probeAnswers[q.id];
      const correct = chosen !== undefined && chosen === q.correct_index;
      return {
        questionId: q.id,
        correct,
        selectedOption: chosen ?? -1,
      };
    });

    const correctCount = results.filter((r) => r.correct).length;
    const wrongCount = results.length - correctCount;

    try {
      const res = await fetch('/api/mistakes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'batch_practice_result',
          results,
        }),
      });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      if (wrongCount > 0) {
        setSimulatedMasteredCodes((prev) => prev.filter((c) => c !== selectedNode.code));
        setSimulatedBrokenCodes((prev) =>
          prev.includes(selectedNode.code) ? prev : [...prev, selectedNode.code]
        );
        setProbeFeedback(
          `Đã lưu ${wrongCount} câu sai vào Sổ tay lỗi sai & cập nhật lỗ hổng trên DAG (${correctCount}/${results.length} đúng).`
        );
      } else {
        setSimulatedBrokenCodes((prev) => prev.filter((c) => c !== selectedNode.code));
        setSimulatedMasteredCodes((prev) =>
          prev.includes(selectedNode.code) ? prev : [...prev, selectedNode.code]
        );
        setProbeFeedback(
          `Xuất sắc! ${correctCount}/${results.length} câu chính xác — đã xác nhận vững nút kiến thức này.`
        );
      }
      setProbeSubmitted(true);
    } catch (err: any) {
      setProbeFeedback(`Không thể lưu kết quả (${err?.message || 'lỗi kết nối'}), nhưng bạn vẫn có thể xem đáp án bên dưới.`);
      setProbeSubmitted(true);
    } finally {
      setProbeSaving(false);
    }
  };

  // Drag-to-pan handlers
  const handleBoardMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest('button, a, input')) return;
    const container = boardContainerRef.current;
    if (!container) return;
    dragStateRef.current = {
      isDragging: true,
      startX: e.clientX,
      startY: e.clientY,
      scrollLeft: container.scrollLeft,
      scrollTop: container.scrollTop,
    };
    setIsPanning(true);
  };

  const handleBoardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragStateRef.current.isDragging) return;
    const container = boardContainerRef.current;
    if (!container) return;
    const dx = e.clientX - dragStateRef.current.startX;
    const dy = e.clientY - dragStateRef.current.startY;
    container.scrollLeft = dragStateRef.current.scrollLeft - dx;
    container.scrollTop = dragStateRef.current.scrollTop - dy;
  };

  const handleBoardMouseUp = () => {
    dragStateRef.current.isDragging = false;
    setIsPanning(false);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div
        ref={rootRef}
        className="min-h-screen bg-[#03050d] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-100"
      >
        {/* Subtle Deep-Space Nebula Glows */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-cyan-500/[0.06] blur-[140px]" />
          <div className="absolute bottom-0 right-1/5 h-[460px] w-[460px] rounded-full bg-indigo-500/[0.06] blur-[140px]" />
        </div>

        {/* Sticky Single-Row Obsidian Command Bar */}
        <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#03050d]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-2 px-4 py-2.5 lg:flex-nowrap">
            <div className="flex shrink-0 items-center gap-2.5 whitespace-nowrap">
              <Link
                href="/#curriculum-app"
                scroll={false}
                onClick={markReturnToCurriculum}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-cyan-200"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Giáo trình</span>
              </Link>
              <span className="h-4 w-px bg-white/10" />
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-500/10 text-cyan-300">
                  <Network className="h-4 w-4" />
                </div>
                <div>
                  <h1 className="text-sm font-bold tracking-tight text-white">
                    Bản đồ Tri thức DAG 6–12
                  </h1>
                  <p className="hidden text-[11px] text-slate-400 sm:block">
                    Truy vết lỗ hổng tiền đề &amp; Lộ trình vá gốc
                  </p>
                </div>
              </div>
            </div>

            <nav className="flex shrink-0 items-center gap-1.5 overflow-x-auto whitespace-nowrap">
              <Link
                href="/adaptive-test"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-purple-200"
              >
                <Target className="h-3.5 w-3.5 text-purple-300" />
                <span className="hidden md:inline">CAT Test</span>
              </Link>
              <Link
                href="/progress"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-emerald-400/30 hover:bg-emerald-500/10 hover:text-emerald-200"
              >
                <Activity className="h-3.5 w-3.5 text-emerald-300" />
                <span className="hidden md:inline">Tiến độ</span>
              </Link>
              <Link
                href="/flashcards"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-amber-400/30 hover:bg-amber-500/10 hover:text-amber-200"
              >
                <Layers className="h-3.5 w-3.5 text-amber-300" />
                <span className="hidden md:inline">Flashcards</span>
              </Link>
              <Link
                href="/cheatsheet"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-sky-400/30 hover:bg-sky-500/10 hover:text-sky-200"
              >
                <BookOpen className="h-3.5 w-3.5 text-sky-300" />
                <span className="hidden md:inline">Công thức</span>
              </Link>
              <GlobalSearchModal variant="glass" />
            </nav>
          </div>
        </header>

        <main className="relative z-10 mx-auto max-w-[1600px] space-y-5 px-4 py-6">
          {/* Top Diagnostic Telemetry & Presets */}
          <section className="kg-stagger grid grid-cols-1 gap-4 xl:grid-cols-12">
            {/* Telemetry Strip */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 xl:col-span-5">
              <div className="rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Nút tri thức</span>
                  <GitBranch className="h-3.5 w-3.5 text-cyan-300" />
                </div>
                <div className="mt-2 font-mono text-2xl font-bold text-white">{stats.total}</div>
                <div className="mt-0.5 text-[11px] text-slate-400">
                  {stats.edges} cầu nối tiền đề
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Đã vững</span>
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" />
                </div>
                <div className="mt-2 font-mono text-2xl font-bold text-emerald-300">
                  {stats.mastered}
                </div>
                <div className="mt-0.5 text-[11px] text-slate-400">Sẵn sàng mở lớp cao</div>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Cảnh báo / Hổng</span>
                  <AlertTriangle className="h-3.5 w-3.5 text-rose-300" />
                </div>
                <div className="mt-2 font-mono text-2xl font-bold text-rose-300">
                  {stats.broken + stats.warning}
                </div>
                <div className="mt-0.5 text-[11px] text-slate-400">
                  {stats.broken} hổng · {stats.warning} cảnh báo
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Chưa kiểm tra</span>
                  <HelpCircle className="h-3.5 w-3.5 text-slate-400" />
                </div>
                <div className="mt-2 font-mono text-2xl font-bold text-slate-200">
                  {stats.untested}
                </div>
                <div className="mt-0.5 text-[11px] text-slate-400">Chờ làm test chẩn đoán</div>
              </div>
            </div>

            {/* 4 Quick Diagnostic Presets */}
            <div className="rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-4 xl:col-span-7">
              <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>4 Kịch bản Chẩn đoán Lỗ hổng Xuyên lớp (What-If)</span>
                </div>
                {(simulatedBrokenCodes.length > 0 || simulatedMasteredCodes.length > 0) && (
                  <button
                    type="button"
                    onClick={handleResetSimulations}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-rose-400/25 bg-rose-500/10 px-2.5 py-1 text-[11px] font-medium text-rose-200 transition-colors hover:bg-rose-500/20"
                  >
                    <RotateCcw className="h-3 w-3" />
                    <span>Đặt lại mô phỏng ({simulatedBrokenCodes.length + simulatedMasteredCodes.length})</span>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {DIAGNOSTIC_PRESET_SCENARIOS.map((preset) => {
                  const active = activePresetId === preset.id;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleApplyPreset(preset)}
                      className={`group flex flex-col items-start rounded-xl border p-2.5 text-left transition-all ${
                        active
                          ? 'border-cyan-400/40 bg-cyan-500/10'
                          : 'border-white/[0.06] bg-white/5 hover:border-white/15 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex w-full items-center justify-between gap-2">
                        <span className="line-clamp-1 text-xs font-semibold text-white">
                          {preset.title}
                        </span>
                        <Play className="h-3 w-3 shrink-0 text-cyan-300 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </div>
                      <span className="mt-1 line-clamp-1 text-[11px] text-slate-400">
                        {preset.subtitle}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Filter & Search Bar */}
          <section className="kg-stagger rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              {/* Grade Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="mr-1 inline-flex items-center gap-1 text-xs font-medium text-slate-400">
                  <Filter className="h-3.5 w-3.5" /> Khối:
                </span>
                <button
                  type="button"
                  onClick={() => handleSelectGradeFilter('all')}
                  className={`rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors ${
                    selectedGradeFilter === 'all'
                      ? 'border-cyan-400/40 bg-cyan-500/15 text-cyan-200'
                      : 'border-white/[0.06] bg-white/5 text-slate-300 hover:border-white/15'
                  }`}
                >
                  6–12
                </button>
                {GRADES.map((g) => {
                  const active = selectedGradeFilter === g;
                  return (
                    <button
                      key={g}
                      type="button"
                      onClick={() => handleSelectGradeFilter(g)}
                      className={`rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors ${
                        active
                          ? GRADE_ACCENTS[g].badge
                          : 'border-white/[0.06] bg-white/5 text-slate-300 hover:border-white/15'
                      }`}
                    >
                      Lớp {g}
                    </button>
                  );
                })}
              </div>

              {/* Search Input */}
              <div className="relative w-full lg:w-72">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm mã bài, tên bài, định luật..."
                  className="w-full rounded-xl border border-white/10 bg-[#03050d]/80 py-1.5 pl-9 pr-3 text-xs text-white placeholder-slate-500 focus:border-cyan-400/40 focus:outline-none"
                />
              </div>
            </div>

            {/* Pillar Filter Row */}
            <div className="mt-3 flex flex-wrap items-center gap-1.5 border-t border-white/[0.06] pt-3">
              <span className="mr-1 text-xs font-medium text-slate-400">Trục tri thức:</span>
              <button
                type="button"
                onClick={() => setSelectedPillarFilter('all')}
                className={`rounded-lg border px-2.5 py-1 text-[11px] font-medium transition-colors ${
                  selectedPillarFilter === 'all'
                    ? 'border-white/20 bg-white/15 text-white'
                    : 'border-white/[0.06] bg-white/5 text-slate-400 hover:text-slate-200'
                }`}
              >
                Tất cả 6 trục
              </button>
              {Object.values(PHYSICS_PILLARS).map((pillar) => {
                const active = selectedPillarFilter === pillar.id;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setSelectedPillarFilter(pillar.id)}
                    className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11px] font-medium transition-colors ${
                      active
                        ? 'border-cyan-400/35 bg-cyan-500/15 text-cyan-100'
                        : 'border-white/[0.06] bg-white/5 text-slate-400 hover:border-white/15 hover:text-slate-200'
                    }`}
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: pillar.color }}
                    />
                    <span>{pillar.shortName}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Main 12-Col Split Workspace: DAG Board + Sticky Diagnostic Inspector */}
          <section className="kg-stagger grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-start">
            {/* LEFT 7 COLS: DRAG-TO-PAN DAG BOARD */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 lg:col-span-7">
              {/* Canvas Controls Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] px-4 py-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setFocusSubgraphOnly((v) => !v)}
                    className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors ${
                      focusSubgraphOnly
                        ? 'border-cyan-400/40 bg-cyan-500/15 text-cyan-200'
                        : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <Crosshair className="h-3.5 w-3.5" />
                    <span>Cô lập nhánh đang chọn</span>
                  </button>
                  <span className="hidden text-[11px] text-slate-400 sm:inline">
                    Giữ chuột kéo để trượt bản đồ
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setZoom((z) => Math.max(0.65, Number((z - 0.1).toFixed(2))))}
                    aria-label="Thu nhỏ DAG"
                    className="rounded-lg border border-white/10 bg-white/5 p-1.5 text-slate-300 hover:border-white/20 hover:text-white"
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="w-12 text-center font-mono text-xs text-slate-300">
                    {Math.round(zoom * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={() => setZoom((z) => Math.min(1.25, Number((z + 0.1).toFixed(2))))}
                    aria-label="Phóng to DAG"
                    className="rounded-lg border border-white/10 bg-white/5 p-1.5 text-slate-300 hover:border-white/20 hover:text-white"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setZoom(1)}
                    className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-300 hover:border-white/20"
                  >
                    1:1
                  </button>
                </div>
              </div>

              {/* Scrollable / Pan Viewport */}
              <div
                ref={boardContainerRef}
                onMouseDown={handleBoardMouseDown}
                onMouseMove={handleBoardMouseMove}
                onMouseUp={handleBoardMouseUp}
                onMouseLeave={handleBoardMouseUp}
                className={`relative h-[640px] overflow-auto bg-[#03050d] ${
                  isPanning ? 'cursor-grabbing select-none' : 'cursor-grab'
                }`}
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.12) 1px, transparent 0)',
                  backgroundSize: '24px 24px',
                }}
              >
                {activeGradesColumns.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                    <Network className="h-10 w-10 text-slate-500" />
                    <p className="mt-3 text-sm font-medium text-slate-300">
                      Không có nút kiến thức khớp bộ lọc hiện tại.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedGradeFilter('all');
                        setSelectedPillarFilter('all');
                        setSearchQuery('');
                        setFocusSubgraphOnly(false);
                      }}
                      className="mt-3 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-200 hover:bg-cyan-500/20"
                    >
                      Hiển thị toàn bộ bản đồ
                    </button>
                  </div>
                ) : (
                  <div
                    ref={boardInnerRef}
                    className="relative inline-flex min-w-full items-start gap-12 p-6"
                    style={{
                      transform: `scale(${zoom})`,
                      transformOrigin: 'top left',
                    }}
                  >
                    {/* SVG Bézier Dependency Edges Layer */}
                    <svg
                      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
                      aria-hidden="true"
                    >
                      <defs>
                        <marker
                          id="kg-arrow-muted"
                          markerWidth="6"
                          markerHeight="6"
                          refX="5"
                          refY="3"
                          orient="auto"
                        >
                          <path d="M0,0 L6,3 L0,6 Z" fill="rgba(148,163,184,0.35)" />
                        </marker>
                        <marker
                          id="kg-arrow-cyan"
                          markerWidth="7"
                          markerHeight="7"
                          refX="6"
                          refY="3.5"
                          orient="auto"
                        >
                          <path d="M0,0 L7,3.5 L0,7 Z" fill="#22d3ee" />
                        </marker>
                        <marker
                          id="kg-arrow-rose"
                          markerWidth="7"
                          markerHeight="7"
                          refX="6"
                          refY="3.5"
                          orient="auto"
                        >
                          <path d="M0,0 L7,3.5 L0,7 Z" fill="#fb7185" />
                        </marker>
                      </defs>

                      {svgLines.map((line) => {
                        const stroke = line.isHighlighted
                          ? line.isRootLink || line.isBrokenSource
                            ? '#fb7185'
                            : '#22d3ee'
                          : 'rgba(148, 163, 184, 0.16)';
                        const markerEnd = line.isHighlighted
                          ? line.isRootLink || line.isBrokenSource
                            ? 'url(#kg-arrow-rose)'
                            : 'url(#kg-arrow-cyan)'
                          : 'url(#kg-arrow-muted)';

                        return (
                          <path
                            key={line.key}
                            d={line.d}
                            fill="none"
                            stroke={stroke}
                            strokeWidth={line.isHighlighted ? 2.4 : 1.2}
                            strokeDasharray={
                              line.isHighlighted && line.isRootLink ? '6 4' : undefined
                            }
                            markerEnd={markerEnd}
                            className="transition-colors duration-200"
                          />
                        );
                      })}
                    </svg>

                    {/* Grade Columns */}
                    {activeGradesColumns.map((grade) => {
                      const colNodes = nodesByGrade[grade] ?? [];
                      const accent = GRADE_ACCENTS[grade];
                      return (
                        <div key={grade} className="relative z-10 w-[236px] shrink-0 space-y-3">
                          <div className="sticky top-0 z-20 flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#070b1a]/90 px-3 py-2 backdrop-blur-md">
                            <span className={`text-xs font-bold uppercase tracking-wider ${accent.text}`}>
                              Khối Lớp {grade}
                            </span>
                            <span className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-[11px] text-slate-300">
                              {colNodes.length} bài
                            </span>
                          </div>

                          <div className="space-y-3">
                            {colNodes.map((node) => {
                              const statusMeta = getStatusMeta(node.status);
                              const isSelected = selectedNode?.code === node.code;
                              const isSubgraphMember = subgraphCodeSet.has(node.code);
                              const isRoot = rootCauseCodeSet.has(node.code);
                              const pillarInfo = PHYSICS_PILLARS[node.pillar];
                              const dimmed =
                                selectedNode && !focusSubgraphOnly && !isSubgraphMember;

                              return (
                                <button
                                  key={node.code}
                                  ref={(el) => {
                                    nodeRefs.current[node.code] = el;
                                  }}
                                  type="button"
                                  onClick={() => setSelectedNodeCode(node.code)}
                                  className={`group relative w-full rounded-xl border p-3 text-left transition-all ${
                                    isSelected
                                      ? 'border-cyan-400 bg-[#0b132b] ring-2 ring-cyan-400/25'
                                      : isRoot
                                      ? 'border-rose-400/60 bg-rose-950/20'
                                      : `${statusMeta.cardBorder} bg-[#070b1a]/90`
                                  } ${dimmed ? 'opacity-45 hover:opacity-90' : 'opacity-100'}`}
                                >
                                  <div className="flex items-center justify-between gap-1.5">
                                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-slate-300">
                                      <span
                                        className="h-2 w-2 rounded-full"
                                        style={{ backgroundColor: pillarInfo?.color || '#22d3ee' }}
                                      />
                                      {node.code}
                                    </span>
                                    <span
                                      className={`rounded-md border px-1.5 py-0.5 text-[10px] font-medium ${statusMeta.pillClass}`}
                                    >
                                      {isRoot ? 'Gốc rễ hổng' : statusMeta.label}
                                    </span>
                                  </div>

                                  <div className="mt-1.5 line-clamp-2 text-xs font-semibold leading-snug text-white">
                                    {node.title}
                                  </div>

                                  {/* Readiness Bar */}
                                  <div className="mt-2.5">
                                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                                      <span>Độ sẵn sàng</span>
                                      <span className="font-mono font-semibold text-slate-200">
                                        {node.effectiveReadiness}%
                                      </span>
                                    </div>
                                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                                      <div
                                        className={`h-full rounded-full transition-all duration-300 ${statusMeta.barColor}`}
                                        style={{ width: `${node.effectiveReadiness}%` }}
                                      />
                                    </div>
                                  </div>

                                  {/* Quick What-if Simulation Controls */}
                                  <div className="mt-2.5 flex items-center justify-between gap-1 border-t border-white/[0.06] pt-2 text-[10px]">
                                    <span className="text-slate-400">
                                      {node.prerequisiteCodes.length} tiền đề · {node.dependentCodes.length} mở khóa
                                    </span>
                                    <span
                                      role="button"
                                      tabIndex={0}
                                      onClick={(e) =>
                                        handleToggleSimulateNode(
                                          node.code,
                                          simulatedBrokenCodes.includes(node.code)
                                            ? 'clear'
                                            : 'broken',
                                          e
                                        )
                                      }
                                      onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                          handleToggleSimulateNode(
                                            node.code,
                                            simulatedBrokenCodes.includes(node.code)
                                              ? 'clear'
                                              : 'broken'
                                          );
                                        }
                                      }}
                                      className={`rounded px-1.5 py-0.5 font-medium transition-colors ${
                                        simulatedBrokenCodes.includes(node.code)
                                          ? 'bg-rose-500/25 text-rose-200'
                                          : 'bg-white/5 text-slate-400 hover:bg-rose-500/15 hover:text-rose-200'
                                      }`}
                                    >
                                      {simulatedBrokenCodes.includes(node.code) ? 'Bỏ hổng' : 'Thử hổng'}
                                    </span>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Legend Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.06] px-4 py-2.5 text-[11px] text-slate-400">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" /> Đã vững
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-amber-400" /> Cảnh báo
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-rose-400" /> Lỗ hổng / Gốc rễ
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-0.5 w-4 bg-cyan-400" /> Mạch tiền đề đang chọn
                  </span>
                </div>
                <span className="font-mono text-slate-400">
                  Hiển thị {visibleNodes.length}/{graphState.nodes.length} nút
                </span>
              </div>
            </div>

            {/* RIGHT 5 COLS: STICKY DIAGNOSTIC & REMEDIATION INSPECTOR */}
            <div className="lg:sticky lg:top-20 lg:col-span-5">
              {selectedNode ? (
                <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#070b1a]/90 shadow-2xl">
                  {/* Node Header */}
                  <div className="border-b border-white/[0.06] p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span
                          className={`rounded-md border px-2 py-0.5 text-[11px] font-bold ${
                            GRADE_ACCENTS[selectedNode.grade_number]?.badge ?? ''
                          }`}
                        >
                          Lớp {selectedNode.grade_number}
                        </span>
                        <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-slate-300">
                          {selectedNode.code}
                        </span>
                        <span
                          className={`rounded-md border px-2 py-0.5 text-[11px] font-medium ${
                            getStatusMeta(selectedNode.status).pillClass
                          }`}
                        >
                          {getStatusMeta(selectedNode.status).label}
                        </span>
                      </div>

                      <Link
                        href={`/topic/${selectedNode.id}`}
                        className="inline-flex items-center gap-1 rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-200 transition-colors hover:bg-cyan-500/20"
                      >
                        <span>Vào bài học</span>
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    </div>

                    <h2 className="mt-3 text-lg font-bold leading-snug text-white">
                      {selectedNode.title}
                    </h2>

                    {/* Telemetry 4-box Grid */}
                    <div className="mt-4 grid grid-cols-4 gap-2">
                      <div className="rounded-xl border border-white/[0.06] bg-white/5 p-2.5 text-center">
                        <div className="text-[10px] text-slate-400">Trực tiếp</div>
                        <div className="mt-0.5 font-mono text-sm font-bold text-white">
                          {selectedNode.directMasteryScore}%
                        </div>
                      </div>
                      <div className="rounded-xl border border-white/[0.06] bg-white/5 p-2.5 text-center">
                        <div className="text-[10px] text-slate-400">Rủi ro gốc</div>
                        <div className="mt-0.5 font-mono text-sm font-bold text-amber-300">
                          {selectedNode.upstreamRiskScore}%
                        </div>
                      </div>
                      <div className="rounded-xl border border-white/[0.06] bg-white/5 p-2.5 text-center">
                        <div className="text-[10px] text-slate-400">Sẵn sàng</div>
                        <div className="mt-0.5 font-mono text-sm font-bold text-cyan-300">
                          {selectedNode.effectiveReadiness}%
                        </div>
                      </div>
                      <div className="rounded-xl border border-white/[0.06] bg-white/5 p-2.5 text-center">
                        <div className="text-[10px] text-slate-400">Lỗi mở</div>
                        <div className="mt-0.5 font-mono text-sm font-bold text-rose-300">
                          {selectedNode.activeMistakeCount}
                        </div>
                      </div>
                    </div>

                    {/* What-If Quick Actions for Selected Node */}
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          handleToggleSimulateNode(
                            selectedNode.code,
                            simulatedBrokenCodes.includes(selectedNode.code) ? 'clear' : 'broken'
                          )
                        }
                        className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-[11px] font-medium transition-colors ${
                          simulatedBrokenCodes.includes(selectedNode.code)
                            ? 'border-rose-400/50 bg-rose-500/20 text-rose-200'
                            : 'border-white/10 bg-white/5 text-slate-300 hover:border-rose-400/30 hover:text-rose-200'
                        }`}
                      >
                        <ShieldAlert className="h-3 w-3" />
                        <span>
                          {simulatedBrokenCodes.includes(selectedNode.code)
                            ? 'Đang giả lập Hổng'
                            : 'Giả lập Hổng nút này'}
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleToggleSimulateNode(
                            selectedNode.code,
                            simulatedMasteredCodes.includes(selectedNode.code) ? 'clear' : 'mastered'
                          )
                        }
                        className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-[11px] font-medium transition-colors ${
                          simulatedMasteredCodes.includes(selectedNode.code)
                            ? 'border-emerald-400/50 bg-emerald-500/20 text-emerald-200'
                            : 'border-white/10 bg-white/5 text-slate-300 hover:border-emerald-400/30 hover:text-emerald-200'
                        }`}
                      >
                        <CheckCircle2 className="h-3 w-3" />
                        <span>
                          {simulatedMasteredCodes.includes(selectedNode.code)
                            ? 'Đang giả lập Vững'
                            : 'Giả lập Đã vững'}
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Inspector Tabs with Framer Motion layoutId */}
                  <div className="grid grid-cols-3 gap-1 border-b border-white/[0.06] bg-[#03050d]/60 p-1.5">
                    {(
                      [
                        { id: 'roadmap', label: 'Truy vết & Vá gốc', icon: Route },
                        { id: 'tree', label: 'Tiền đề & Hậu duệ', icon: GitBranch },
                        { id: 'probe', label: 'Test 3 câu', icon: Target },
                      ] as const
                    ).map((tab) => {
                      const active = inspectorTab === tab.id;
                      const Icon = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setInspectorTab(tab.id)}
                          className={`relative flex items-center justify-center gap-1.5 rounded-xl px-2 py-2 text-xs font-medium transition-colors ${
                            active ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {active && (
                            <motion.div
                              layoutId="kg-inspector-tab"
                              transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                              className="absolute inset-0 rounded-xl border border-cyan-400/30 bg-cyan-500/15"
                            />
                          )}
                          <Icon className="relative z-10 h-3.5 w-3.5 text-cyan-300" />
                          <span className="relative z-10 truncate">{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Inspector Body */}
                  <div className="max-h-[540px] overflow-y-auto p-5">
                    <AnimatePresence mode="wait">
                      {inspectorTab === 'roadmap' && traceResult && (
                        <motion.div
                          key="roadmap"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.18 }}
                          className="space-y-4"
                        >
                          {/* Pedagogical Diagnosis Summary */}
                          <div className="rounded-xl border border-cyan-400/20 bg-cyan-500/10 p-3.5 text-xs leading-relaxed text-cyan-100">
                            <div className="mb-1 flex items-center gap-1.5 font-semibold text-cyan-300">
                              <Sparkles className="h-3.5 w-3.5" />
                              <span>Chẩn đoán Topological Backtracking</span>
                            </div>
                            <p>{traceResult.diagnosisSummary}</p>
                          </div>

                          {/* Root Causes */}
                          {traceResult.rootCauses.length > 0 && (
                            <div className="space-y-2">
                              <h3 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-300">
                                <Flame className="h-3.5 w-3.5" />
                                <span>Điểm nghẽn gốc rễ ({traceResult.rootCauses.length})</span>
                              </h3>
                              {traceResult.rootCauses.map((rc) => (
                                <div
                                  key={rc.node.code}
                                  className="rounded-xl border border-rose-400/25 bg-rose-950/20 p-3"
                                >
                                  <div className="flex items-center justify-between gap-2">
                                    <button
                                      type="button"
                                      onClick={() => setSelectedNodeCode(rc.node.code)}
                                      className="text-left text-xs font-bold text-white hover:text-cyan-300"
                                    >
                                      Lớp {rc.node.grade_number} · {rc.node.code}: {rc.node.title}
                                    </button>
                                    <span className="shrink-0 rounded bg-rose-500/20 px-1.5 py-0.5 font-mono text-[10px] text-rose-200">
                                      Ảnh hưởng {Math.round(rc.pathWeight * 100)}%
                                    </span>
                                  </div>
                                  <p className="mt-1.5 text-[11px] leading-relaxed text-slate-300">
                                    Cầu nối bị hổng:{' '}
                                    <span className="font-semibold text-amber-200">
                                      {rc.connectingEdge.bridgeConcept}
                                    </span>{' '}
                                    — {rc.connectingEdge.pedagogicalReason}
                                  </p>
                                  <div className="mt-2 flex items-center gap-2">
                                    <Link
                                      href={`/topic/${rc.node.id}`}
                                      className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-medium text-cyan-200 hover:bg-cyan-500/15"
                                    >
                                      <span>Ôn lại bài gốc</span>
                                      <ArrowRight className="h-3 w-3" />
                                    </Link>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Topological Remediation Roadmap */}
                          <div className="space-y-2">
                            <h3 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300">
                              <Route className="h-3.5 w-3.5" />
                              <span>
                                Lộ trình Vá từ gốc đến ngọn ({traceResult.remediationRoadmap.length} bước)
                              </span>
                            </h3>
                            <div className="space-y-2">
                              {traceResult.remediationRoadmap.map((step) => {
                                const roleLabel =
                                  step.role === 'root_prerequisite'
                                    ? '1. Vá nền tảng gốc'
                                    : step.role === 'intermediate_bridge'
                                    ? '2. Cầu nối trung gian'
                                    : '3. Mục tiêu hiện tại';
                                const roleStyle =
                                  step.role === 'root_prerequisite'
                                    ? 'border-rose-400/25 bg-rose-500/10 text-rose-200'
                                    : step.role === 'intermediate_bridge'
                                    ? 'border-amber-400/25 bg-amber-500/10 text-amber-200'
                                    : 'border-cyan-400/25 bg-cyan-500/10 text-cyan-200';

                                return (
                                  <div
                                    key={`${step.stepNumber}-${step.node.code}`}
                                    className="rounded-xl border border-white/[0.06] bg-white/5 p-3"
                                  >
                                    <div className="flex items-center justify-between gap-2">
                                      <span
                                        className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold ${roleStyle}`}
                                      >
                                        Bước {step.stepNumber} · {roleLabel}
                                      </span>
                                      <span className="font-mono text-[10px] text-slate-400">
                                        ~{step.estimatedMinutes} phút
                                      </span>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => setSelectedNodeCode(step.node.code)}
                                      className="mt-2 block text-left text-xs font-bold text-white hover:text-cyan-300"
                                    >
                                      Lớp {step.node.grade_number} ({step.node.code}): {step.node.title}
                                    </button>
                                    <p className="mt-1 text-[11px] leading-relaxed text-slate-300">
                                      {step.reasonToReview}
                                    </p>
                                    {step.bridgeConceptToNext && (
                                      <div className="mt-1.5 text-[11px] text-cyan-300">
                                        → Mở khóa cầu nối: {step.bridgeConceptToNext}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {inspectorTab === 'tree' && traceResult && (
                        <motion.div
                          key="tree"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.18 }}
                          className="space-y-4"
                        >
                          {/* Core concepts & failure symptom */}
                          <div className="rounded-xl border border-white/[0.06] bg-white/5 p-3.5">
                            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                              Khái niệm cốt lõi
                            </div>
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              {selectedNode.coreConcepts.map((c) => (
                                <span
                                  key={c}
                                  className="rounded-lg border border-white/10 bg-[#03050d]/80 px-2 py-1 text-[11px] text-cyan-200"
                                >
                                  {c}
                                </span>
                              ))}
                            </div>
                            <div className="mt-3 border-t border-white/[0.06] pt-2.5 text-[11px] text-slate-300">
                              <span className="font-semibold text-amber-300">Dấu hiệu hay hổng: </span>
                              {selectedNode.failureSymptom}
                            </div>
                          </div>

                          {/* Ancestors */}
                          <div>
                            <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-cyan-300">
                              Chuỗi tiền đề lớp dưới ({traceResult.ancestors.length})
                            </h3>
                            {traceResult.ancestors.length === 0 ? (
                              <p className="rounded-xl border border-white/[0.06] bg-white/5 p-3 text-xs text-slate-400">
                                Đây là bài học nền tảng khởi đầu của nhánh kiến thức này.
                              </p>
                            ) : (
                              <div className="space-y-2">
                                {traceResult.ancestors.map((anc) => (
                                  <button
                                    key={anc.node.code}
                                    type="button"
                                    onClick={() => setSelectedNodeCode(anc.node.code)}
                                    className="flex w-full items-center justify-between gap-2 rounded-xl border border-white/[0.06] bg-white/5 p-2.5 text-left transition-colors hover:border-cyan-400/35 hover:bg-cyan-500/10"
                                  >
                                    <div>
                                      <div className="text-xs font-semibold text-white">
                                        Lớp {anc.node.grade_number} · {anc.node.title}
                                      </div>
                                      <div className="mt-0.5 text-[11px] text-slate-400">
                                        Cầu nối: {anc.connectingEdge.bridgeConcept}
                                      </div>
                                    </div>
                                    <span
                                      className={`shrink-0 rounded-md border px-2 py-0.5 text-[10px] font-medium ${
                                        getStatusMeta(anc.node.status).pillClass
                                      }`}
                                    >
                                      {anc.node.effectiveReadiness}%
                                    </span>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Descendants */}
                          <div>
                            <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-purple-300">
                              Kiến thức lớp trên mở khóa ({traceResult.descendants.length})
                            </h3>
                            {traceResult.descendants.length === 0 ? (
                              <p className="rounded-xl border border-white/[0.06] bg-white/5 p-3 text-xs text-slate-400">
                                Đây là chủ đề đích cấp cao nhất trong chuỗi phụ thuộc này.
                              </p>
                            ) : (
                              <div className="space-y-2">
                                {traceResult.descendants.map((desc) => (
                                  <button
                                    key={desc.node.code}
                                    type="button"
                                    onClick={() => setSelectedNodeCode(desc.node.code)}
                                    className="flex w-full items-center justify-between gap-2 rounded-xl border border-white/[0.06] bg-white/5 p-2.5 text-left transition-colors hover:border-purple-400/35 hover:bg-purple-500/10"
                                  >
                                    <div>
                                      <div className="text-xs font-semibold text-white">
                                        Lớp {desc.node.grade_number} · {desc.node.title}
                                      </div>
                                      <div className="mt-0.5 text-[11px] text-slate-400">
                                        Dùng kiến thức: {desc.connectingEdge.bridgeConcept}
                                      </div>
                                    </div>
                                    <span className="shrink-0 font-mono text-[11px] text-purple-300">
                                      Bước +{desc.depth}
                                    </span>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}

                      {inspectorTab === 'probe' && (
                        <motion.div
                          key="probe"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.18 }}
                          className="space-y-4"
                        >
                          <div className="rounded-xl border border-amber-400/20 bg-amber-500/10 p-3 text-xs text-amber-100">
                            Làm nhanh 3 câu kiểm tra bản chất cho{' '}
                            <strong className="text-white">{selectedNode.title}</strong>. Câu sai sẽ được lưu trực tiếp vào Sổ tay Lỗi sai &amp; cập nhật đồ thị.
                          </div>

                          {probeQuestions.length === 0 ? (
                            <div className="rounded-xl border border-white/[0.06] bg-white/5 p-5 text-center text-xs text-slate-400">
                              Chủ đề này chưa có bộ câu hỏi trắc nghiệm nhanh 4 lựa chọn trong kho chẩn đoán.
                            </div>
                          ) : (
                            <div className="space-y-4">
                              {probeQuestions.map((q, qIdx) => {
                                const chosen = probeAnswers[q.id];
                                return (
                                  <div
                                    key={q.id}
                                    className="rounded-xl border border-white/[0.06] bg-white/5 p-3.5"
                                  >
                                    <div className="mb-2 flex items-center justify-between text-[11px] text-slate-400">
                                      <span className="font-mono font-semibold text-cyan-300">
                                        Câu {qIdx + 1}/{probeQuestions.length}
                                      </span>
                                      <span>{q.difficulty}</span>
                                    </div>
                                    <div className="text-xs leading-relaxed text-white">
                                      <RichPhysicsText text={q.question_text} />
                                    </div>
                                    <div className="mt-3 space-y-1.5">
                                      {q.options.map((opt, oIdx) => {
                                        const isPicked = chosen === oIdx;
                                        const isCorrect = oIdx === q.correct_index;
                                        let optStyle =
                                          'border-white/[0.06] bg-[#03050d]/80 text-slate-200 hover:border-cyan-400/30';
                                        if (probeSubmitted) {
                                          if (isCorrect) {
                                            optStyle =
                                              'border-emerald-400/50 bg-emerald-500/15 text-emerald-200';
                                          } else if (isPicked && !isCorrect) {
                                            optStyle =
                                              'border-rose-400/50 bg-rose-500/15 text-rose-200';
                                          }
                                        } else if (isPicked) {
                                          optStyle =
                                            'border-cyan-400/50 bg-cyan-500/15 text-cyan-100';
                                        }

                                        return (
                                          <button
                                            key={oIdx}
                                            type="button"
                                            disabled={probeSubmitted}
                                            onClick={() =>
                                              setProbeAnswers((prev) => ({ ...prev, [q.id]: oIdx }))
                                            }
                                            className={`flex w-full items-start gap-2 rounded-lg border px-3 py-2 text-left text-xs transition-colors ${optStyle}`}
                                          >
                                            <span className="mt-0.5 font-mono font-bold">
                                              {String.fromCharCode(65 + oIdx)}.
                                            </span>
                                            <span className="flex-1">
                                              <RichPhysicsText text={opt} />
                                            </span>
                                          </button>
                                        );
                                      })}
                                    </div>
                                    {probeSubmitted && q.explanation && (
                                      <div className="mt-2.5 rounded-lg border border-white/[0.06] bg-[#03050d]/80 p-2.5 text-[11px] leading-relaxed text-slate-300">
                                        <span className="font-semibold text-cyan-300">Giải thích: </span>
                                        <RichPhysicsText text={q.explanation} />
                                      </div>
                                    )}
                                  </div>
                                );
                              })}

                              {probeFeedback && (
                                <div className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 p-3 text-xs text-cyan-100">
                                  {probeFeedback}
                                </div>
                              )}

                              <div className="flex items-center gap-2">
                                {!probeSubmitted ? (
                                  <button
                                    type="button"
                                    disabled={
                                      probeSaving ||
                                      Object.keys(probeAnswers).length < probeQuestions.length
                                    }
                                    onClick={handleSubmitProbe}
                                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/20 px-4 py-2.5 text-xs font-semibold text-cyan-100 transition-colors hover:bg-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-40"
                                  >
                                    {probeSaving ? (
                                      <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                                    ) : (
                                      <CheckCircle2 className="h-3.5 w-3.5" />
                                    )}
                                    <span>
                                      Chấm điểm &amp; Cập nhật DAG (
                                      {Object.keys(probeAnswers).length}/{probeQuestions.length})
                                    </span>
                                  </button>
                                ) : (
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setProbeAnswers({});
                                      setProbeSubmitted(false);
                                      setProbeFeedback(null);
                                    }}
                                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:border-white/20"
                                  >
                                    <RotateCcw className="h-3.5 w-3.5" />
                                    <span>Làm lại bài chẩn đoán</span>
                                  </button>
                                )}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-8 text-center text-sm text-slate-400">
                  Chọn một nút trên Bản đồ Tri thức để xem lộ trình truy vết tiền đề.
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </MotionConfig>
  );
}

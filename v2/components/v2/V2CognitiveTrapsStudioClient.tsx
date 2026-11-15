'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import gsap from 'gsap';
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Filter,
  Layers,
  Network,
  Play,
  RotateCcw,
  ShieldAlert,
  Sparkles,
  Target,
  X,
  XCircle,
} from 'lucide-react';
import {
  ALL_TRAP_TYPES,
  COGNITIVE_TRAP_REGISTRY,
  calculateTrapMatrixStats,
  detectCognitiveTrap,
  pickRepresentativeTrapOption,
} from '@/lib/cognitive-traps';
import type { CognitiveTrapType, MistakeQuestionItem } from '@/types/cms';
import { RichPhysicsText } from '@/components/KatexRenderer';
import { GlobalSearchModal } from '@/components/GlobalSearchModal';
import {
  RETURN_TO_CURRICULUM_KEY,
  getSavedGradePreference,
  saveGradePreference,
} from '@/lib/grade-context';

interface Props {
  mistakes: MistakeQuestionItem[];
  initialGrade: number | 'all';
  hasExplicitGrade: boolean;
}

const GRADES = [6, 7, 8, 9, 10, 11, 12] as const;

const TRAP_SHORT_LABELS: Record<CognitiveTrapType, string> = {
  TRAP_UNIT: 'Đơn vị SI',
  TRAP_SIGN: 'Dấu & Chiều',
  TRAP_INTUITION: 'Trực giác',
  TRAP_FORMULA_CONFUSION: 'Công thức',
  TRAP_CONDITION: 'Điều kiện',
  TRAP_KEYWORD: 'Từ khóa',
};

function ObsidianTrapRadarSvg({
  radarValues,
  selectedTrap,
  onSelectTrap,
}: {
  radarValues: Array<{ axis: string; trapType: CognitiveTrapType; value: number }>;
  selectedTrap: CognitiveTrapType | 'all';
  onSelectTrap: (trap: CognitiveTrapType | 'all') => void;
}) {
  const size = 340;
  const cx = size / 2;
  const cy = size / 2;
  const maxR = 104;
  const levels = [25, 50, 75, 100];
  const count = Math.max(1, radarValues.length);

  const pointFor = (idx: number, pct: number) => {
    const angle = (Math.PI * 2 * idx) / count - Math.PI / 2;
    const r = (pct / 100) * maxR;
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    };
  };

  const dataPolygon = radarValues
    .map((item, idx) => {
      const pt = pointFor(idx, item.value);
      return `${pt.x.toFixed(1)},${pt.y.toFixed(1)}`;
    })
    .join(' ');

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="mx-auto w-full max-w-[340px] select-none">
      <defs>
        <radialGradient id="trap-radar-fill" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(251,113,133,0.45)" />
          <stop offset="100%" stopColor="rgba(34,211,238,0.18)" />
        </radialGradient>
      </defs>

      {/* Concentric Hexagon Rings */}
      {levels.map((lvl) => {
        const ringPts = radarValues
          .map((_, idx) => {
            const p = pointFor(idx, lvl);
            return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
          })
          .join(' ');
        return (
          <polygon
            key={lvl}
            points={ringPts}
            fill="none"
            stroke={lvl === 100 ? 'rgba(148,163,184,0.22)' : 'rgba(148,163,184,0.10)'}
            strokeDasharray={lvl === 100 ? undefined : '3 3'}
          />
        );
      })}

      {/* Axes */}
      {radarValues.map((item, idx) => {
        const end = pointFor(idx, 100);
        return (
          <line
            key={item.trapType}
            x1={cx}
            y1={cy}
            x2={end.x}
            y2={end.y}
            stroke="rgba(148,163,184,0.18)"
          />
        );
      })}

      {/* Data Polygon */}
      <polygon
        points={dataPolygon}
        fill="url(#trap-radar-fill)"
        stroke="#fb7185"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Interactive Vertices & Labels */}
      {radarValues.map((item, idx) => {
        const pt = pointFor(idx, item.value);
        const labelPt = pointFor(idx, 126);
        const active = selectedTrap === item.trapType;
        const meta = COGNITIVE_TRAP_REGISTRY[item.trapType];

        return (
          <g
            key={item.trapType}
            onClick={() => onSelectTrap(active ? 'all' : item.trapType)}
            className="cursor-pointer"
          >
            <circle
              cx={pt.x}
              cy={pt.y}
              r={active ? 6.5 : 4.5}
              fill={meta.color}
              stroke="#03050d"
              strokeWidth="2"
            />
            <text
              x={labelPt.x}
              y={labelPt.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={active ? '#ffffff' : 'rgba(203,213,225,0.85)'}
              fontSize="11"
              fontWeight={active ? '700' : '600'}
            >
              {TRAP_SHORT_LABELS[item.trapType]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function V2CognitiveTrapsStudioClient({
  mistakes,
  initialGrade,
  hasExplicitGrade,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const drillSectionRef = useRef<HTMLDivElement>(null);
  const practiceSectionRef = useRef<HTMLDivElement>(null);

  const [selectedGrade, setSelectedGrade] = useState<number | 'all'>(initialGrade);
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');
  const [selectedTrap, setSelectedTrap] = useState<CognitiveTrapType | 'all'>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 6;

  // Interactive Drill Mode
  const [practiceMode, setPracticeMode] = useState<boolean>(false);
  const [practiceIdx, setPracticeIdx] = useState<number>(0);
  const [practiceChoices, setPracticeChoices] = useState<Record<number, number>>({});
  const [practiceSyncStatus, setPracticeSyncStatus] = useState<string | null>(null);

  // Sync saved grade preference when URL didn't force ?grade=
  useEffect(() => {
    if (hasExplicitGrade) {
      if (typeof initialGrade === 'number') {
        saveGradePreference(initialGrade);
      }
      return;
    }
    const saved = getSavedGradePreference();
    if (saved && saved !== 'all') {
      setSelectedGrade(saved);
    }
  }, [hasExplicitGrade, initialGrade]);

  // GSAP stagger entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.trap-stagger', {
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

  const markReturnToCurriculum = () => {
    try {
      sessionStorage.setItem(RETURN_TO_CURRICULUM_KEY, '1');
    } catch {
      // ignore
    }
  };

  const handleSelectGrade = (g: number | 'all') => {
    setSelectedGrade(g);
    if (typeof g === 'number') {
      saveGradePreference(g);
    }
    setSelectedChapter('all');
    setCurrentPage(1);
    setPracticeIdx(0);
  };

  const gradeFilteredMistakes = useMemo(() => {
    if (selectedGrade === 'all') return mistakes;
    const filtered = mistakes.filter((m) => m.grade_number === selectedGrade);
    return filtered.length > 0 ? filtered : mistakes;
  }, [mistakes, selectedGrade]);

  const gradeMatchCount = useMemo(() => {
    if (selectedGrade === 'all') return mistakes.length;
    return mistakes.filter((m) => m.grade_number === selectedGrade).length;
  }, [mistakes, selectedGrade]);

  const availableChapters = useMemo(() => {
    const map = new Map<
      number,
      { id: number; code: string; title: string; gradeNumber: number; count: number }
    >();
    for (const m of gradeFilteredMistakes) {
      if (!m.chapter_id) continue;
      const existing = map.get(m.chapter_id);
      if (existing) {
        existing.count++;
      } else {
        map.set(m.chapter_id, {
          id: m.chapter_id,
          code: m.chapter_code || '',
          title: m.chapter_title || `Chương ${m.chapter_code}`,
          gradeNumber: m.grade_number,
          count: 1,
        });
      }
    }
    return Array.from(map.values()).sort(
      (a, b) => a.gradeNumber - b.gradeNumber || a.id - b.id
    );
  }, [gradeFilteredMistakes]);

  const chapterFilteredMistakes = useMemo(() => {
    if (selectedChapter === 'all') return gradeFilteredMistakes;
    return gradeFilteredMistakes.filter((m) => m.chapter_id === selectedChapter);
  }, [gradeFilteredMistakes, selectedChapter]);

  const stats = useMemo(
    () => calculateTrapMatrixStats(chapterFilteredMistakes),
    [chapterFilteredMistakes]
  );

  const analyzedMistakes = useMemo(() => {
    return chapterFilteredMistakes.map((m) => ({
      ...m,
      trapAnalysis: detectCognitiveTrap(m, m.last_wrong_option),
    }));
  }, [chapterFilteredMistakes]);

  const displayMistakes = useMemo(() => {
    if (selectedTrap === 'all') return analyzedMistakes;
    return analyzedMistakes.filter((m) => m.trapAnalysis.trapType === selectedTrap);
  }, [analyzedMistakes, selectedTrap]);

  const totalPages = Math.max(1, Math.ceil(displayMistakes.length / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedMistakes = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return displayMistakes.slice(start, start + pageSize);
  }, [displayMistakes, safePage]);

  const handleFocusTrap = (trap: CognitiveTrapType | 'all') => {
    setSelectedTrap(trap);
    setCurrentPage(1);
    setPracticeIdx(0);
    if (trap !== 'all') {
      setTimeout(() => {
        drillSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    }
  };

  const openPracticeMode = (trapFilter?: CognitiveTrapType | 'all') => {
    if (trapFilter !== undefined) {
      setSelectedTrap(trapFilter);
      setCurrentPage(1);
    }
    setPracticeMode(true);
    setPracticeIdx(0);
    setPracticeSyncStatus(null);
    setTimeout(() => {
      practiceSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      practiceSectionRef.current?.focus({ preventScroll: true });
    }, 80);
  };

  useEffect(() => {
    if (!practiceMode) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPracticeMode(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [practiceMode]);

  const currentPracticeItem = displayMistakes[practiceIdx] ?? null;

  const handlePracticeSelect = async (question: MistakeQuestionItem, optIdx: number) => {
    if (practiceChoices[question.id] !== undefined) return;
    setPracticeChoices((prev) => ({ ...prev, [question.id]: optIdx }));

    // Sync real mistakes (mistake_id > 0) to Mistake Book API
    if (question.mistake_id > 0) {
      const correct = optIdx === question.correct_index;
      try {
        await fetch('/api/mistakes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'batch_practice_result',
            results: [{ questionId: question.id, correct, selectedOption: optIdx }],
          }),
        });
        setPracticeSyncStatus(
          correct
            ? 'Đã cập nhật Đã làm chủ trong Sổ tay Lỗi sai.'
            : 'Đã ghi nhận vào Sổ tay Lỗi sai để tiếp tục củng cố.'
        );
      } catch {
        // ignore offline
      }
    }
  };

  const dominantMeta = stats.dominantTrap
    ? COGNITIVE_TRAP_REGISTRY[stats.dominantTrap]
    : null;

  return (
    <MotionConfig reducedMotion="user">
      <div
        ref={rootRef}
        className="min-h-screen bg-[#03050d] text-slate-100 selection:bg-rose-500/30 selection:text-rose-100"
      >
        {/* Subtle Nebula Glows */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-rose-500/[0.06] blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 h-[480px] w-[480px] rounded-full bg-amber-500/[0.05] blur-[140px]" />
        </div>

        {/* Sticky Single-Row Obsidian Command Bar */}
        <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#03050d]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-[1520px] items-center justify-between gap-2 px-4 py-2.5 lg:flex-nowrap">
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
                <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-rose-400/25 bg-rose-500/10 text-rose-300">
                  <Brain className="h-4 w-4" />
                </div>
                <div>
                  <h1 className="text-sm font-bold tracking-tight text-white">
                    Ma Trận Bẫy Nhận Thức 6–12
                  </h1>
                  <p className="hidden text-[11px] text-slate-400 sm:block">
                    Phân tích 6 Điểm mù Tư duy &amp; Lỗi mất điểm oan
                  </p>
                </div>
              </div>
            </div>

            <nav className="flex shrink-0 items-center gap-1.5 overflow-x-auto whitespace-nowrap">
              <Link
                href="/mistakes"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-amber-400/30 hover:bg-amber-500/10 hover:text-amber-200"
              >
                <ShieldAlert className="h-3.5 w-3.5 text-amber-300" />
                <span className="hidden md:inline">Sổ tay Lỗi sai</span>
              </Link>
              <Link
                href="/knowledge-graph"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-emerald-400/30 hover:bg-emerald-500/10 hover:text-emerald-200"
              >
                <Network className="h-3.5 w-3.5 text-emerald-300" />
                <span className="hidden md:inline">Bản đồ DAG</span>
              </Link>
              <Link
                href="/adaptive-test"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-purple-200"
              >
                <Target className="h-3.5 w-3.5 text-purple-300" />
                <span className="hidden md:inline">CAT Test</span>
              </Link>
              <GlobalSearchModal variant="glass" />
            </nav>
          </div>
        </header>

        <main className="relative z-10 mx-auto max-w-[1520px] space-y-6 px-4 py-6">
          {/* Hero Immunity Strip */}
          <section className="trap-stagger rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-400/25 bg-rose-500/10 px-3 py-1 text-[11px] font-semibold text-rose-200">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Chẩn đoán Điểm mù Tư duy GDPT 2025</span>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Nhận diện &amp; Khắc phục 6 Bẫy Kinh điển Vật lý
                </h2>
                <p className="max-w-2xl text-xs leading-relaxed text-slate-300">
                  {dominantMeta
                    ? `Điểm mù nổi bật nhất trong tập câu hỏi đang xét: ${dominantMeta.name} (${stats.trapCounts[dominantMeta.id]} câu, chiếm ${stats.trapPercentages[dominantMeta.id]}%).`
                    : 'Phân loại tự động nguyên nhân chọn nhầm phương án nhiễu theo từng bài học.'}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-[#03050d]/80 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/25 bg-amber-500/10 text-amber-300">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Chỉ số Miễn nhiễm Bẫy</div>
                    <div className="font-mono text-2xl font-bold text-white">
                      {stats.immunityScore}{' '}
                      <span className="text-xs font-normal text-slate-400">/ 100</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (practiceMode) {
                      setPracticeMode(false);
                      setPracticeSyncStatus(null);
                    } else {
                      openPracticeMode();
                    }
                  }}
                  className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-xs font-bold transition-all ${
                    practiceMode
                      ? 'border-rose-400/40 bg-rose-500/20 text-rose-100 hover:bg-rose-500/30'
                      : 'border-cyan-400/40 bg-cyan-500/20 text-cyan-100 hover:bg-cyan-500/30'
                  }`}
                >
                  {practiceMode ? <X className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  <span>
                    {practiceMode
                      ? 'Thoát Chế độ Luyện Phá Bẫy'
                      : `Luyện Phá Bẫy ngay (${displayMistakes.length} câu)`}
                  </span>
                </button>
              </div>
            </div>
          </section>

          {/* Grade & Chapter Filters */}
          <section className="trap-stagger space-y-3 rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="mr-1 inline-flex items-center gap-1 text-xs font-medium text-slate-400">
                  <Filter className="h-3.5 w-3.5" /> Khối lớp:
                </span>
                <button
                  type="button"
                  onClick={() => handleSelectGrade('all')}
                  className={`rounded-lg border px-3 py-1 text-xs font-medium transition-colors ${
                    selectedGrade === 'all'
                      ? 'border-cyan-400/45 bg-cyan-500/15 text-cyan-200'
                      : 'border-white/[0.06] bg-white/5 text-slate-300 hover:border-white/15'
                  }`}
                >
                  Tất cả 6–12 ({mistakes.length})
                </button>
                {GRADES.map((g) => {
                  const active = selectedGrade === g;
                  return (
                    <button
                      key={g}
                      type="button"
                      onClick={() => handleSelectGrade(g)}
                      className={`rounded-lg border px-3 py-1 text-xs font-medium transition-colors ${
                        active
                          ? 'border-rose-400/45 bg-rose-500/15 text-rose-200'
                          : 'border-white/[0.06] bg-white/5 text-slate-300 hover:border-white/15'
                      }`}
                    >
                      Lớp {g}
                    </button>
                  );
                })}
              </div>

              {selectedGrade !== 'all' && gradeMatchCount === 0 && (
                <span className="text-[11px] text-amber-300">
                  Lớp {selectedGrade} chưa có câu sai — đang hiển thị bộ câu bẫy mẫu toàn cấp để bạn rèn phản xạ.
                </span>
              )}
            </div>

            {availableChapters.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 border-t border-white/[0.06] pt-3">
                <span className="mr-1 text-xs font-medium text-slate-400">Chương:</span>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedChapter('all');
                    setCurrentPage(1);
                  }}
                  className={`rounded-lg border px-2.5 py-1 text-[11px] font-medium transition-colors ${
                    selectedChapter === 'all'
                      ? 'border-white/20 bg-white/15 text-white'
                      : 'border-white/[0.06] bg-white/5 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Mọi chương
                </button>
                {availableChapters.map((ch) => (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => {
                      setSelectedChapter(ch.id);
                      setCurrentPage(1);
                    }}
                    className={`rounded-lg border px-2.5 py-1 text-[11px] font-medium transition-colors ${
                      selectedChapter === ch.id
                        ? 'border-cyan-400/40 bg-cyan-500/15 text-cyan-200'
                        : 'border-white/[0.06] bg-white/5 text-slate-400 hover:border-white/15 hover:text-slate-200'
                    }`}
                  >
                    Lớp {ch.gradeNumber} · {ch.code} ({ch.count})
                  </button>
                ))}
              </div>
            )}
          </section>

          {/* Radar + 6 Cognitive Trap Taxonomy Grid */}
          <section className="trap-stagger grid grid-cols-1 gap-5 lg:grid-cols-12">
            <div className="flex flex-col items-center justify-between rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-5 lg:col-span-5">
              <div className="w-full">
                <h3 className="text-sm font-bold text-white">Biểu đồ Radar 6 Điểm mù Tư duy</h3>
                <p className="mt-0.5 text-[11px] text-slate-400">
                  Nhấn trực tiếp vào từng đỉnh lục giác để lọc danh sách câu hỏi theo loại bẫy.
                </p>
              </div>
              <div className="my-2 w-full">
                <ObsidianTrapRadarSvg
                  radarValues={stats.radarValues}
                  selectedTrap={selectedTrap}
                  onSelectTrap={handleFocusTrap}
                />
              </div>
              <div className="flex w-full items-center justify-between border-t border-white/[0.06] pt-3 text-xs text-slate-400">
                <span>Tổng câu phân tích: {stats.totalAnalyzed}</span>
                {selectedTrap !== 'all' && (
                  <button
                    type="button"
                    onClick={() => handleFocusTrap('all')}
                    className="font-semibold text-cyan-300 hover:underline"
                  >
                    Bỏ lọc bẫy
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-7">
              {ALL_TRAP_TYPES.map((trapType) => {
                const meta = COGNITIVE_TRAP_REGISTRY[trapType];
                const count = stats.trapCounts[trapType] || 0;
                const pct = stats.trapPercentages[trapType] || 0;
                const active = selectedTrap === trapType;

                return (
                  <div
                    key={trapType}
                    role="button"
                    tabIndex={0}
                    onClick={() => handleFocusTrap(active ? 'all' : trapType)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleFocusTrap(active ? 'all' : trapType);
                      }
                    }}
                    className={`flex cursor-pointer flex-col justify-between rounded-2xl border p-4 text-left transition-all ${
                      active
                        ? 'border-cyan-400/50 bg-[#0b132b] ring-1 ring-cyan-400/25'
                        : 'border-white/[0.06] bg-[#070b1a]/80 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-2 text-xs font-bold text-white">
                          <span>{meta.icon}</span>
                          <span>{meta.name}</span>
                        </span>
                        <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] font-bold text-cyan-300">
                          {count} ({pct}%)
                        </span>
                      </div>
                      <p className="mt-2 text-[11px] leading-relaxed text-slate-300">
                        {meta.shortDesc}
                      </p>
                      <div className="mt-2 rounded-lg border border-white/[0.06] bg-[#03050d]/80 px-2.5 py-1.5 text-[10px] text-amber-200">
                        <strong>Mẹo né bẫy:</strong> {meta.remedyTip}
                      </div>
                    </div>

                    <div className="mt-3 space-y-2">
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full transition-all duration-300"
                          style={{
                            width: `${Math.max(4, pct)}%`,
                            backgroundColor: meta.color,
                          }}
                        />
                      </div>
                      {count > 0 && (
                        <div className="flex items-center justify-between pt-0.5">
                          <span className="text-[10px] text-slate-400">
                            {active ? 'Đang lọc theo bẫy này' : 'Nhấn để lọc câu hỏi'}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              openPracticeMode(trapType);
                            }}
                            className="inline-flex items-center gap-1 rounded-lg border border-cyan-400/35 bg-cyan-500/15 px-2 py-0.5 text-[10px] font-bold text-cyan-200 transition-colors hover:bg-cyan-500/25"
                          >
                            <Play className="h-2.5 w-2.5" />
                            <span>Luyện bẫy này</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Interactive Drill Mode */}
          <div ref={practiceSectionRef} tabIndex={-1} className="scroll-mt-24 outline-none">
            <AnimatePresence>
              {practiceMode && currentPracticeItem && (
                <motion.section
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="rounded-2xl border border-cyan-400/40 bg-[#070b1a]/90 p-6 ring-1 ring-cyan-400/20 shadow-[0_0_40px_rgba(34,211,238,0.10)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-lg border border-cyan-400/30 bg-cyan-500/15 px-2.5 py-1 font-mono text-xs font-bold text-cyan-200">
                        Phá bẫy {practiceIdx + 1} / {displayMistakes.length}
                      </span>
                      <span className="text-xs font-semibold text-amber-300">
                        {currentPracticeItem.trapAnalysis.trapName}
                      </span>
                      <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-slate-300">
                        Lớp {currentPracticeItem.grade_number} · {currentPracticeItem.chapter_code}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setPracticeMode(false);
                        setPracticeSyncStatus(null);
                      }}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-rose-400/35 bg-rose-500/15 px-3 py-1.5 text-xs font-bold text-rose-200 transition-colors hover:bg-rose-500/25"
                    >
                      <X className="h-3.5 w-3.5" />
                      <span>Thoát chế độ luyện</span>
                    </button>
                  </div>

                  {/* Quick Question Step Strip */}
                  {displayMistakes.length > 1 && (
                    <div className="mt-3 flex flex-wrap items-center gap-1.5">
                      {displayMistakes
                        .slice(
                          Math.max(0, practiceIdx - 5),
                          Math.min(displayMistakes.length, Math.max(0, practiceIdx - 5) + 12)
                        )
                        .map((qItem, offsetIdx) => {
                          const realIdx = Math.max(0, practiceIdx - 5) + offsetIdx;
                          const isCur = realIdx === practiceIdx;
                          const answered = practiceChoices[qItem.id] !== undefined;
                          const correct = answered && practiceChoices[qItem.id] === qItem.correct_index;
                          return (
                            <button
                              key={`${qItem.id}-${realIdx}`}
                              type="button"
                              onClick={() => {
                                setPracticeIdx(realIdx);
                                setPracticeSyncStatus(null);
                              }}
                              className={`h-7 min-w-[30px] rounded-lg border px-2 font-mono text-[11px] font-bold transition-colors ${
                                isCur
                                  ? 'border-cyan-400 bg-cyan-500/25 text-white'
                                  : answered
                                  ? correct
                                    ? 'border-emerald-400/40 bg-emerald-500/15 text-emerald-200'
                                    : 'border-rose-400/40 bg-rose-500/15 text-rose-200'
                                  : 'border-white/[0.06] bg-white/5 text-slate-400 hover:border-white/15'
                              }`}
                            >
                              {realIdx + 1}
                            </button>
                          );
                        })}
                    </div>
                  )}

                  <div className="mt-4 text-sm leading-relaxed text-white">
                    <RichPhysicsText text={currentPracticeItem.question_text} />
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {currentPracticeItem.options.map((opt, idx) => {
                      const chosen = practiceChoices[currentPracticeItem.id];
                      const hasAnswered = chosen !== undefined;
                      const isPicked = chosen === idx;
                      const isCorrect = idx === currentPracticeItem.correct_index;

                      let cls =
                        'border-white/[0.06] bg-[#03050d]/80 text-slate-200 hover:border-cyan-400/35';
                      if (hasAnswered) {
                        if (isCorrect) {
                          cls = 'border-emerald-400/50 bg-emerald-500/15 text-emerald-100';
                        } else if (isPicked) {
                          cls = 'border-rose-400/50 bg-rose-500/15 text-rose-100';
                        }
                      }

                      return (
                        <button
                          key={idx}
                          type="button"
                          disabled={hasAnswered}
                          onClick={() => handlePracticeSelect(currentPracticeItem, idx)}
                          className={`flex items-start gap-2.5 rounded-xl border p-3 text-left text-xs transition-colors ${cls}`}
                        >
                          <span className="font-mono font-bold">
                            {String.fromCharCode(65 + idx)}.
                          </span>
                          <span className="flex-1">
                            <RichPhysicsText text={opt} />
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {practiceChoices[currentPracticeItem.id] !== undefined && (
                    <div className="mt-4 space-y-2 rounded-xl border border-white/[0.06] bg-[#03050d]/90 p-4 text-xs">
                      <div className="font-semibold text-amber-300">
                        Cảnh báo Bẫy: {currentPracticeItem.trapAnalysis.diagnosis}
                      </div>
                      <div className="text-cyan-200">
                        <strong>Quy tắc khắc phục:</strong>{' '}
                        {currentPracticeItem.trapAnalysis.remedyTip}
                      </div>
                      {currentPracticeItem.explanation && (
                        <div className="border-t border-white/[0.06] pt-2 text-slate-300">
                          <strong className="text-emerald-300">Giải thích chi tiết: </strong>
                          <RichPhysicsText text={currentPracticeItem.explanation} />
                        </div>
                      )}
                      {practiceSyncStatus && (
                        <div className="text-[11px] font-medium text-emerald-300">
                          {practiceSyncStatus}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Footer Navigation */}
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] pt-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        disabled={practiceIdx === 0}
                        onClick={() => {
                          setPracticeIdx((i) => Math.max(0, i - 1));
                          setPracticeSyncStatus(null);
                        }}
                        className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 hover:border-white/20 disabled:opacity-40"
                      >
                        <ChevronLeft className="h-3.5 w-3.5" />
                        <span>Câu trước</span>
                      </button>
                      <button
                        type="button"
                        disabled={practiceIdx >= displayMistakes.length - 1}
                        onClick={() => {
                          setPracticeIdx((i) => Math.min(displayMistakes.length - 1, i + 1));
                          setPracticeSyncStatus(null);
                        }}
                        className="inline-flex items-center gap-1 rounded-xl border border-cyan-400/35 bg-cyan-500/15 px-3.5 py-2 text-xs font-semibold text-cyan-100 hover:bg-cyan-500/25 disabled:opacity-40"
                      >
                        <span>Câu tiếp theo</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <span className="text-[11px] text-slate-400">
                      Nhấn <kbd className="rounded border border-white/15 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-slate-300">Esc</kbd> để thoát nhanh
                    </span>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>

          {/* Detailed Paginated Trap Breakdown */}
          <section ref={drillSectionRef} className="trap-stagger space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-base font-bold text-white">
                Chi tiết Chẩn đoán từng Câu hỏi ({displayMistakes.length} câu)
              </h3>
              {totalPages > 1 && (
                <div className="flex items-center gap-1.5 text-xs">
                  <button
                    type="button"
                    disabled={safePage === 1}
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    className="rounded-lg border border-white/10 bg-white/5 p-1.5 text-slate-300 disabled:opacity-40"
                    aria-label="Trang trước"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="px-2 font-mono text-slate-300">
                    Trang {safePage}/{totalPages}
                  </span>
                  <button
                    type="button"
                    disabled={safePage === totalPages}
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    className="rounded-lg border border-white/10 bg-white/5 p-1.5 text-slate-300 disabled:opacity-40"
                    aria-label="Trang sau"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>

            {paginatedMistakes.length === 0 ? (
              <div className="rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-8 text-center text-xs text-slate-400">
                Không có câu hỏi nào khớp loại bẫy đã chọn.
              </div>
            ) : (
              <div className="space-y-4">
                {paginatedMistakes.map((item) => {
                  const meta = COGNITIVE_TRAP_REGISTRY[item.trapAnalysis.trapType];
                  const hasPickedWrong =
                    item.last_wrong_option >= 0 &&
                    item.last_wrong_option < item.options.length &&
                    item.last_wrong_option !== item.correct_index;
                  const repTrapIdx = pickRepresentativeTrapOption(item);

                  return (
                    <div
                      key={`${item.id}-${item.mistake_id}`}
                      className="rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className="rounded-lg border px-2.5 py-0.5 text-[11px] font-bold"
                            style={{
                              borderColor: `${meta.color}55`,
                              backgroundColor: `${meta.color}22`,
                              color: '#f8fafc',
                            }}
                          >
                            {meta.icon} {meta.name}
                          </span>
                          <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-slate-300">
                            Lớp {item.grade_number} · {item.chapter_code}
                          </span>
                          <span className="rounded-md border border-amber-400/25 bg-amber-500/10 px-2 py-0.5 text-[11px] text-amber-200">
                            Mức nguy cơ: {item.trapAnalysis.severity}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Link
                            href={item.topic_id ? `/topic/${item.topic_id}` : `/chapter/${item.chapter_id}`}
                            className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-200 hover:border-white/20"
                          >
                            <span>Ôn bài</span>
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>
                      </div>

                      <div className="mt-3 text-sm leading-relaxed text-white">
                        <RichPhysicsText text={item.question_text} />
                      </div>

                      {/* Full 4 Options A, B, C, D */}
                      <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {item.options.map((opt, optIdx) => {
                          const letter = String.fromCharCode(65 + optIdx);
                          const isCorrect = optIdx === item.correct_index;
                          const isWrongPicked =
                            hasPickedWrong && optIdx === item.last_wrong_option && !isCorrect;
                          const isTrapWarning =
                            !hasPickedWrong && optIdx === repTrapIdx && !isCorrect;

                          let cardCls =
                            'border-white/[0.06] bg-[#03050d]/80 text-slate-300';
                          if (isCorrect) {
                            cardCls =
                              'border-emerald-400/35 bg-emerald-950/25 text-emerald-100';
                          } else if (isWrongPicked) {
                            cardCls = 'border-rose-400/35 bg-rose-950/25 text-rose-100';
                          } else if (isTrapWarning) {
                            cardCls = 'border-amber-400/35 bg-amber-950/25 text-amber-100';
                          }

                          return (
                            <div
                              key={optIdx}
                              className={`rounded-xl border p-3 text-xs transition-colors ${cardCls}`}
                            >
                              <div className="mb-1 flex items-center justify-between gap-2">
                                <span
                                  className={`font-mono font-bold ${
                                    isCorrect
                                      ? 'text-emerald-300'
                                      : isWrongPicked
                                      ? 'text-rose-300'
                                      : isTrapWarning
                                      ? 'text-amber-300'
                                      : 'text-slate-400'
                                  }`}
                                >
                                  Phương án {letter}
                                </span>
                                {isCorrect && (
                                  <span className="inline-flex items-center gap-1 font-semibold text-emerald-300">
                                    <CheckCircle2 className="h-3.5 w-3.5" />
                                    <span>Đáp án đúng chuẩn xác</span>
                                  </span>
                                )}
                                {isWrongPicked && (
                                  <span className="inline-flex items-center gap-1 font-semibold text-rose-300">
                                    <XCircle className="h-3.5 w-3.5" />
                                    <span>Bạn đã chọn (Sập bẫy)</span>
                                  </span>
                                )}
                                {isTrapWarning && (
                                  <span className="inline-flex items-center gap-1 font-semibold text-amber-300">
                                    <AlertTriangle className="h-3.5 w-3.5" />
                                    <span>Phương án bẫy dễ nhầm</span>
                                  </span>
                                )}
                              </div>
                              <div className="leading-relaxed">
                                <span className="mr-1 font-mono font-bold">{letter}.</span>
                                <RichPhysicsText text={opt} />
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-3 space-y-2 rounded-xl border border-white/[0.06] bg-[#03050d]/80 p-3.5 text-xs">
                        <p className="leading-relaxed text-slate-200">
                          <strong className="text-rose-300">Chẩn đoán điểm mù: </strong>
                          {item.trapAnalysis.diagnosis}
                        </p>
                        <p className="leading-relaxed text-cyan-200">
                          <strong className="text-cyan-300">Mẹo khắc phục: </strong>
                          {item.trapAnalysis.remedyTip}
                        </p>
                        {item.explanation && (
                          <div className="border-t border-white/[0.06] pt-2 leading-relaxed text-slate-300">
                            <strong className="text-emerald-300">Giải thích chi tiết: </strong>
                            <RichPhysicsText text={item.explanation} />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
                {totalPages > 1 && (
                  <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 px-4 py-3 text-xs">
                    <span className="text-slate-400">
                      Hiển thị {(safePage - 1) * pageSize + 1}–
                      {Math.min(safePage * pageSize, displayMistakes.length)} trong{' '}
                      {displayMistakes.length} câu
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        disabled={safePage === 1}
                        onClick={() => {
                          setCurrentPage((p) => Math.max(1, p - 1));
                          drillSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-slate-300 hover:border-white/20 disabled:opacity-40"
                      >
                        <ChevronLeft className="h-3.5 w-3.5" />
                        <span>Trước</span>
                      </button>
                      <span className="px-2 font-mono text-slate-200">
                        Trang {safePage}/{totalPages}
                      </span>
                      <button
                        type="button"
                        disabled={safePage === totalPages}
                        onClick={() => {
                          setCurrentPage((p) => Math.min(totalPages, p + 1));
                          drillSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-slate-300 hover:border-white/20 disabled:opacity-40"
                      >
                        <span>Sau</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </section>
        </main>
      </div>
    </MotionConfig>
  );
}

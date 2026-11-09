'use client';

import React, { useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import {
  ALL_TRAP_TYPES,
  COGNITIVE_TRAP_REGISTRY,
  detectCognitiveTrap,
  calculateTrapMatrixStats,
} from '@/lib/cognitive-traps';
import { CognitiveTrapType, MistakeQuestionItem } from '@/types/cms';
import { CognitiveTrapRadar } from './CognitiveTrapRadar';
import { RichPhysicsText } from './KatexRenderer';
import {
  Brain,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  ArrowRight,
  ArrowDown,
  Filter,
  RefreshCw,
  Award,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

interface CognitiveTrapMatrixClientProps {
  mistakes: MistakeQuestionItem[];
}

function getPaginationRange(current: number, total: number): (number | '...')[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  if (current <= 4) {
    return [1, 2, 3, 4, 5, '...', total];
  }
  if (current >= total - 3) {
    return [1, '...', total - 4, total - 3, total - 2, total - 1, total];
  }
  return [1, '...', current - 1, current, current + 1, '...', total];
}

export function CognitiveTrapMatrixClient({ mistakes }: CognitiveTrapMatrixClientProps) {
  const [selectedTrap, setSelectedTrap] = useState<CognitiveTrapType | 'all'>('all');
  const [selectedGrade, setSelectedGrade] = useState<number | 'all'>('all');
  const [practiceMode, setPracticeMode] = useState<boolean>(false);
  const [activeQuestionIdx, setActiveQuestionIdx] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const drillSectionRef = useRef<HTMLDivElement>(null);

  const handleFocusTrap = (trap: CognitiveTrapType | 'all') => {
    setSelectedTrap(trap);
    setCurrentPage(1);
    if (trap !== 'all') {
      setTimeout(() => {
        drillSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 70);
    }
  };

  // Filter mistakes by grade
  const gradeFilteredMistakes = useMemo(() => {
    if (selectedGrade === 'all') return mistakes;
    return mistakes.filter((m) => m.grade_number === selectedGrade);
  }, [mistakes, selectedGrade]);

  // Compute stats and trap classification for all mistakes
  const stats = useMemo(() => {
    return calculateTrapMatrixStats(gradeFilteredMistakes);
  }, [gradeFilteredMistakes]);

  // Tag every mistake with its analyzed trap
  const analyzedMistakes = useMemo(() => {
    return gradeFilteredMistakes.map((m) => ({
      ...m,
      trapAnalysis: detectCognitiveTrap(m, m.last_wrong_option),
    }));
  }, [gradeFilteredMistakes]);

  // Filter by selected trap type
  const displayMistakes = useMemo(() => {
    if (selectedTrap === 'all') return analyzedMistakes;
    return analyzedMistakes.filter((m) => m.trapAnalysis.trapType === selectedTrap);
  }, [analyzedMistakes, selectedTrap]);

  // Pagination for detailed questions drill list
  const totalPages = Math.max(1, Math.ceil(displayMistakes.length / pageSize));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const paginatedMistakes = useMemo(() => {
    const start = (safeCurrentPage - 1) * pageSize;
    return displayMistakes.slice(start, start + pageSize);
  }, [displayMistakes, safeCurrentPage, pageSize]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    drillSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Practice workout active question
  const practiceList = displayMistakes;
  const currentPracticeQ = practiceList[activeQuestionIdx];

  const handleSelectOption = (qId: number, optIdx: number) => {
    if (showAnswer) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: optIdx }));
    setShowAnswer(true);
  };

  const handleNextPractice = () => {
    setShowAnswer(false);
    if (activeQuestionIdx < practiceList.length - 1) {
      setActiveQuestionIdx((i) => i + 1);
    } else {
      setPracticeMode(false);
      setActiveQuestionIdx(0);
    }
  };

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      {/* 1. Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-6 sm:p-10 text-white shadow-lift border border-slate-800">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-rose-500/10 blur-3xl" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-xl bg-indigo-500/20 px-3 py-1 text-xs font-extrabold text-indigo-300 border border-indigo-400/30">
              <Brain className="h-4 w-4" />
              <span>COGNITIVE TRAP & MISCONCEPTION MATRIX • GDPT 2025</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Ma Trận Bẫy Nhận Thức & Điểm Mù Tư Duy
            </h1>
            <p className="max-w-2xl text-xs sm:text-sm text-slate-300 leading-relaxed">
              Hệ thống tự động phát hiện và chẩn đoán <strong>6 loại bẫy kinh điển</strong> khiến học sinh mất điểm oan
              trong các bài thi Vật lý: từ nhầm đơn vị, ngược dấu quy ước, đến ngụy biện trực giác đời thường.
            </p>
          </div>

          {/* Immunity Score Dial */}
          <div className="flex shrink-0 items-center gap-4 rounded-2xl bg-slate-800/80 p-4 border border-slate-700/80 shadow-soft">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600/30 text-indigo-300 border border-indigo-500/40">
              <Award className="h-7 w-7 text-amber-400" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Chỉ số Miễn Nhiễm Bẫy
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-black text-white">{stats.immunityScore}</span>
                <span className="text-xs text-slate-400 font-bold">/ 100</span>
              </div>
              <div className="mt-1 h-1.5 w-28 rounded-full bg-slate-700 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400 transition-all duration-500"
                  style={{ width: `${stats.immunityScore}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grade Selector Pills */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="mr-2 text-xs font-bold text-slate-500 flex items-center gap-1">
            <Filter className="h-3.5 w-3.5" /> Lọc Khối Lớp:
          </span>
          <button
            type="button"
            onClick={() => {
              setSelectedGrade('all');
              setCurrentPage(1);
            }}
            className={`rounded-xl px-3 py-1.5 text-xs font-extrabold transition ${
              selectedGrade === 'all'
                ? 'bg-indigo-600 text-white shadow-soft'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Tất cả (Lớp 6 → 12)
          </button>
          {[6, 7, 8, 9, 10, 11, 12].map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => {
                setSelectedGrade(g);
                setCurrentPage(1);
              }}
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

        <div className="text-xs font-bold text-slate-500">
          Đang phân tích: <strong className="text-slate-900">{stats.totalAnalyzed}</strong> câu hỏi có nguy cơ bẫy
        </div>
      </div>

      {/* Dominant Trap Alert Banner */}
      {stats.dominantTrap && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-rose-200 bg-rose-50/80 p-4 sm:p-5 text-rose-900 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-200 text-rose-800">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-rose-700">
                ⚠️ Điểm Mù Nguy Hiểm Nhất Của Bạn
              </div>
              <div className="text-sm font-extrabold text-rose-950 mt-0.5">
                {COGNITIVE_TRAP_REGISTRY[stats.dominantTrap].name} (Chiếm{' '}
                {stats.trapPercentages[stats.dominantTrap]}% các lỗi sai)
              </div>
              <div className="text-xs text-rose-800/90 mt-0.5">
                {COGNITIVE_TRAP_REGISTRY[stats.dominantTrap].shortDesc}
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setSelectedTrap(stats.dominantTrap!);
              setPracticeMode(true);
              setActiveQuestionIdx(0);
              setShowAnswer(false);
            }}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-rose-600 px-4 py-2 text-xs font-extrabold text-white shadow-soft hover:bg-rose-700 transition"
          >
            <span>🎯 Luyện Đặc Trị Bẫy Này</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* 2. Main Interactive Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (5 Cols): SVG Radar Chart */}
        <div className="edu-card p-6 lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-indigo-600" />
                <h2 className="text-sm font-extrabold text-slate-900">
                  Biểu Đồ Radar Điểm Mù Tư Duy (6 Trục)
                </h2>
              </div>
              {selectedTrap !== 'all' && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedTrap('all');
                    setCurrentPage(1);
                  }}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                >
                  <RefreshCw className="h-3 w-3" /> Xem tất cả
                </button>
              )}
            </div>
            <p className="mt-2 text-xs text-slate-500 leading-relaxed">
              Mỗi đỉnh thể hiện một loại bẫy tư duy. Bấm vào bất kỳ đỉnh nào trên biểu đồ để lọc danh sách câu hỏi và
              luyện tập riêng cho loại bẫy đó.
            </p>
          </div>

          <div className="my-4 flex items-center justify-center">
            <CognitiveTrapRadar
              radarValues={stats.radarValues}
              selectedTrap={selectedTrap}
              onSelectTrap={(t) => {
                setSelectedTrap(selectedTrap === t ? 'all' : t);
                setCurrentPage(1);
              }}
              trapCounts={stats.trapCounts}
            />
          </div>

          <div className="rounded-xl bg-slate-50 p-3 border border-slate-100 text-xs text-slate-600 space-y-1">
            <div className="font-extrabold text-slate-800">💡 Lời khuyên vàng chống bẫy:</div>
            <div>
              {selectedTrap === 'all'
                ? 'Hãy cẩn thận nhất với bẫy dấu và đổi đơn vị SI. 2 loại này chiếm tới 65% số điểm bị mất trong các kỳ thi học sinh giỏi và thi tốt nghiệp.'
                : COGNITIVE_TRAP_REGISTRY[selectedTrap as CognitiveTrapType].remedyTip}
            </div>
          </div>
        </div>

        {/* Right Column (7 Cols): 6 Cognitive Trap Cards Matrix */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              <span>Ma Trận 6 Bẫy Nhận Thức Kinh Điển</span>
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600 font-bold">
                {selectedTrap === 'all' ? 'Tất cả 6 bẫy' : COGNITIVE_TRAP_REGISTRY[selectedTrap as CognitiveTrapType].name}
              </span>
            </h2>
            {selectedTrap !== 'all' && (
              <button
                type="button"
                onClick={() => {
                  setSelectedTrap('all');
                  setCurrentPage(1);
                }}
                className="text-xs font-bold text-slate-500 hover:text-indigo-600"
              >
                Bỏ chọn lọc
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {ALL_TRAP_TYPES.map((type) => {
              const meta = COGNITIVE_TRAP_REGISTRY[type];
              const count = stats.trapCounts[type] || 0;
              const pct = stats.trapPercentages[type] || 0;
              const isSelected = selectedTrap === type;

              return (
                <div
                  key={type}
                  onClick={() => {
                    setSelectedTrap(isSelected ? 'all' : type);
                    setCurrentPage(1);
                  }}
                  className={`group relative cursor-pointer rounded-2xl border p-4 transition duration-200 ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50/70 shadow-soft ring-2 ring-indigo-500/20'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-soft'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{meta.icon}</span>
                      <div>
                        <h3 className="text-xs font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {meta.name}
                        </h3>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          {type}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold border ${meta.badgeCls}`}
                    >
                      {count} lỗi ({pct}%)
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-600 leading-snug line-clamp-2">
                    {meta.shortDesc}
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 font-medium truncate max-w-[170px]">
                      Ví dụ: {meta.examplesSummary}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFocusTrap(type);
                      }}
                      className="inline-flex items-center gap-1 font-extrabold text-indigo-600 hover:text-indigo-800 transition shrink-0 group-hover:underline"
                    >
                      Chi tiết <ArrowDown className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Workout Button */}
          <div className="rounded-2xl border border-indigo-100 bg-gradient-to-r from-indigo-50/80 via-white to-indigo-50/80 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs font-black text-indigo-950 flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-indigo-600" />
                <span>Phòng Luyện Phản Xạ Chống Bẫy</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Luyện tập trực tiếp các câu hỏi thuộc danh mục bẫy đang chọn để rèn phản xạ nhận diện bẫy trong 3 giây.
              </p>
            </div>
            <button
              type="button"
              disabled={displayMistakes.length === 0}
              onClick={() => {
                setPracticeMode(true);
                setActiveQuestionIdx(0);
                setShowAnswer(false);
              }}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-extrabold text-white shadow-soft hover:bg-indigo-700 disabled:opacity-50 transition"
            >
              <span>Bắt đầu Luyện ({displayMistakes.length} câu)</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Detailed Drill List & Diagnostics */}
      <div
        ref={drillSectionRef}
        id="trap-drill-section"
        className="space-y-4 pt-4 border-t border-slate-200 scroll-mt-20"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <BookOpen className="h-5 w-5 text-indigo-600" />
            <h2 className="text-base font-black text-slate-900">
              Danh Sách Câu Hỏi & Chẩn Đoán Bẫy Chi Tiết ({displayMistakes.length})
            </h2>
            {selectedTrap !== 'all' && (
              <span className="rounded-full bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 text-xs font-bold text-indigo-700">
                {COGNITIVE_TRAP_REGISTRY[selectedTrap as CognitiveTrapType].name}
              </span>
            )}
          </div>

          {/* Page size selector pills */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold">
            <span>Hiển thị:</span>
            {[5, 10, 20].map((sz) => (
              <button
                key={sz}
                type="button"
                onClick={() => {
                  setPageSize(sz);
                  setCurrentPage(1);
                }}
                className={`rounded-lg px-2.5 py-1 text-xs font-extrabold transition ${
                  pageSize === sz
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {sz} câu/trang
              </button>
            ))}
          </div>
        </div>

        {displayMistakes.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 p-12 text-center text-slate-500">
            <ShieldCheck className="mx-auto h-12 w-12 text-emerald-500" />
            <h3 className="mt-3 text-sm font-extrabold text-slate-800">
              Tuyệt vời! Không có câu sai nào thuộc loại bẫy này
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Bạn đang kiểm soát rất tốt dạng bẫy này hoặc chưa làm bài trắc nghiệm liên quan.
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {paginatedMistakes.map((item, idx) => {
                const globalIndex = (safeCurrentPage - 1) * pageSize + idx + 1;
                const meta = COGNITIVE_TRAP_REGISTRY[item.trapAnalysis.trapType];
                return (
                  <div
                    key={item.id}
                    className="edu-card overflow-hidden border border-slate-200 hover:border-indigo-300 transition"
                  >
                    {/* Trap Header Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 bg-slate-50/80 px-5 py-3">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 min-w-6 px-1.5 items-center justify-center rounded-lg bg-indigo-100 text-xs font-black text-indigo-800">
                          #{globalIndex}
                        </span>
                        <span className="text-xs font-bold text-slate-700">
                          Lớp {item.grade_number} • {item.chapter_code} {item.topic_code ? `• ${item.topic_code}` : ''}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className={`rounded-lg border px-2.5 py-0.5 text-[11px] font-extrabold ${meta.badgeCls}`}>
                          {meta.icon} {meta.name}
                        </span>
                        <span className="rounded-lg bg-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                          Mức độ: {item.trapAnalysis.severity}
                        </span>
                      </div>
                    </div>

                    {/* Question Stem */}
                    <div className="p-5 space-y-4">
                      <div className="text-sm font-bold text-slate-900 leading-relaxed">
                        <RichPhysicsText text={item.question_text} />
                      </div>

                      {/* 4 Options Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {item.options.map((opt, optIdx) => {
                          const isCorrect = optIdx === item.correct_index;
                          const isWrongSelected = optIdx === item.last_wrong_option;
                          return (
                            <div
                              key={optIdx}
                              className={`flex items-start gap-2.5 rounded-xl border p-3 ${
                                isCorrect
                                  ? 'border-emerald-300 bg-emerald-50/90 text-emerald-950 font-semibold'
                                  : isWrongSelected
                                  ? 'border-rose-300 bg-rose-50/90 text-rose-950 font-semibold'
                                  : 'border-slate-200 bg-slate-50/50 text-slate-700'
                              }`}
                            >
                              <span
                                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-black ${
                                  isCorrect
                                    ? 'bg-emerald-600 text-white'
                                    : isWrongSelected
                                    ? 'bg-rose-600 text-white'
                                    : 'bg-slate-200 text-slate-700'
                                }`}
                              >
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              <div className="flex-1">
                                <RichPhysicsText text={opt} />
                                {isCorrect && (
                                  <span className="ml-1.5 text-[10px] font-extrabold text-emerald-700">
                                    ✓ Đáp án đúng
                                  </span>
                                )}
                                {isWrongSelected && (
                                  <span className="ml-1.5 text-[10px] font-extrabold text-rose-700">
                                    ✗ Phương án sập bẫy
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Cognitive Diagnosis Card */}
                      <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-4 space-y-2">
                        <div className="flex items-center gap-1.5 text-xs font-black text-indigo-900">
                          <Brain className="h-4 w-4 text-indigo-600" />
                          <span>🩺 Bác sĩ Tư duy Chẩn đoán Bẫy:</span>
                        </div>
                        <p className="text-xs text-indigo-950 leading-relaxed">
                          {item.trapAnalysis.diagnosis}
                        </p>
                        <div className="pt-2 border-t border-indigo-200/50 text-[11px] text-indigo-800 flex items-start gap-1.5">
                          <span className="font-bold shrink-0">💡 Bí kíp né bẫy:</span>
                          <span>{item.trapAnalysis.remedyTip}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls Bar */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
                <div className="text-xs font-bold text-slate-500">
                  Hiển thị câu <span className="text-slate-900 font-extrabold">{(safeCurrentPage - 1) * pageSize + 1}</span> –{' '}
                  <span className="text-slate-900 font-extrabold">{Math.min(safeCurrentPage * pageSize, displayMistakes.length)}</span> trong{' '}
                  <span className="text-slate-900 font-extrabold">{displayMistakes.length}</span> câu hỏi
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    disabled={safeCurrentPage === 1}
                    onClick={() => handlePageChange(1)}
                    title="Trang đầu"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
                  >
                    <ChevronsLeft className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    disabled={safeCurrentPage === 1}
                    onClick={() => handlePageChange(safeCurrentPage - 1)}
                    title="Trang trước"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  {getPaginationRange(safeCurrentPage, totalPages).map((p, pIdx) => {
                    if (p === '...') {
                      return (
                        <span key={`ellipsis-${pIdx}`} className="px-2 text-xs font-bold text-slate-400">
                          ...
                        </span>
                      );
                    }
                    const isCurrent = p === safeCurrentPage;
                    return (
                      <button
                        key={p}
                        type="button"
                        onClick={() => handlePageChange(p as number)}
                        className={`flex h-9 min-w-9 px-2 items-center justify-center rounded-xl text-xs font-extrabold transition ${
                          isCurrent
                            ? 'bg-indigo-600 text-white shadow-soft font-black'
                            : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {p}
                      </button>
                    );
                  })}

                  <button
                    type="button"
                    disabled={safeCurrentPage === totalPages}
                    onClick={() => handlePageChange(safeCurrentPage + 1)}
                    title="Trang sau"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    disabled={safeCurrentPage === totalPages}
                    onClick={() => handlePageChange(totalPages)}
                    title="Trang cuối"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
                  >
                    <ChevronsRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* 4. Practice Workout Modal / Fullscreen Drawer */}
      {practiceMode && currentPracticeQ && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl border border-slate-200 space-y-5 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="rounded-xl bg-indigo-100 px-3 py-1 text-xs font-black text-indigo-800">
                  Câu {activeQuestionIdx + 1} / {practiceList.length}
                </span>
                <span className="text-xs font-extrabold text-slate-700">
                  Phòng Luyện Phản Xạ Chống Bẫy
                </span>
              </div>
              <button
                type="button"
                onClick={() => setPracticeMode(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
              >
                ✕
              </button>
            </div>

            {/* Question Stem */}
            <div className="text-sm font-bold text-slate-900 leading-relaxed">
              <RichPhysicsText text={currentPracticeQ.question_text} />
            </div>

            {/* 4 Interactive Options */}
            <div className="space-y-2.5">
              {currentPracticeQ.options.map((opt, optIdx) => {
                const isSelected = userAnswers[currentPracticeQ.id] === optIdx;
                const isCorrect = optIdx === currentPracticeQ.correct_index;
                let btnCls = 'border-slate-200 bg-slate-50 hover:border-indigo-300 hover:bg-white text-slate-700';

                if (showAnswer) {
                  if (isCorrect) {
                    btnCls = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                  } else if (isSelected) {
                    btnCls = 'border-rose-500 bg-rose-50 text-rose-950 font-bold';
                  } else {
                    btnCls = 'border-slate-200 bg-slate-50 text-slate-400 opacity-60';
                  }
                } else if (isSelected) {
                  btnCls = 'border-indigo-600 bg-indigo-50 text-indigo-900 font-bold';
                }

                return (
                  <button
                    key={optIdx}
                    type="button"
                    disabled={showAnswer}
                    onClick={() => handleSelectOption(currentPracticeQ.id, optIdx)}
                    className={`flex w-full items-start gap-3 rounded-2xl border p-3.5 text-left text-xs transition ${btnCls}`}
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200 text-[10px] font-black">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <div className="flex-1">
                      <RichPhysicsText text={opt} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Solution & Trap Analysis on Answer */}
            {showAnswer && (
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 space-y-2 animate-in fade-in duration-150">
                <div className="flex items-center gap-1.5 text-xs font-black text-indigo-950">
                  <Brain className="h-4 w-4 text-indigo-600" />
                  <span>Giải mã bẫy nhận thức:</span>
                </div>
                <p className="text-xs text-indigo-950 leading-relaxed">
                  {currentPracticeQ.trapAnalysis.diagnosis}
                </p>
                <div className="pt-2 border-t border-indigo-200/50 flex items-center justify-between text-xs">
                  <span className="text-slate-600">
                    Đáp án đúng:{' '}
                    <strong className="text-emerald-700 font-mono">
                      {String.fromCharCode(65 + currentPracticeQ.correct_index)}
                    </strong>
                  </span>
                  <button
                    type="button"
                    onClick={handleNextPractice}
                    className="rounded-xl bg-indigo-600 px-4 py-1.5 text-xs font-extrabold text-white shadow-soft hover:bg-indigo-700 transition"
                  >
                    {activeQuestionIdx < practiceList.length - 1 ? 'Câu tiếp theo →' : 'Hoàn thành 🎉'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

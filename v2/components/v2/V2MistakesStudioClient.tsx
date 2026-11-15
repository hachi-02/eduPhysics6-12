'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import gsap from 'gsap';
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Filter,
  FolderOpen,
  Layers,
  Network,
  Play,
  RotateCcw,
  ShieldAlert,
  Sparkles,
  Target,
  Trash2,
  Trophy,
  X,
  XCircle,
} from 'lucide-react';
import type { MistakeQuestionItem, QuestionType } from '@/types/cms';
import { RichPhysicsText } from '@/components/KatexRenderer';
import { GlobalSearchModal } from '@/components/GlobalSearchModal';
import {
  calculateTrueFalseScore,
  checkShortAnswer,
  classifyQuestionFormat,
  prepareQuestionFor2025,
} from '@/lib/format2025-adapter';
import {
  COGNITIVE_TRAP_REGISTRY,
  detectCognitiveTrap,
  pickRepresentativeTrapOption,
} from '@/lib/cognitive-traps';
import {
  RETURN_TO_CURRICULUM_KEY,
  getSavedGradePreference,
  saveGradePreference,
} from '@/lib/grade-context';

interface Props {
  activeMistakes: MistakeQuestionItem[];
  masteredMistakes: MistakeQuestionItem[];
  initialGrade: number | 'all';
  initialShowMastered: boolean;
  hasExplicitGrade: boolean;
}

const GRADES = [6, 7, 8, 9, 10, 11, 12] as const;

const DIFF_LABELS: Record<string, string> = {
  nhan_biet: 'Nhận biết',
  thong_hieu: 'Thông hiểu',
  van_dung: 'Vận dụng',
  van_dung_cao: 'Vận dụng cao',
};

const FORMAT_LABELS: Record<'all' | QuestionType, string> = {
  all: 'Tất cả định dạng',
  multiple_choice: 'Trắc nghiệm 4 lựa chọn',
  true_false: 'Đúng/Sai 4 ý (2025)',
  short_answer: 'Trả lời ngắn',
};

export function V2MistakesStudioClient({
  activeMistakes,
  masteredMistakes,
  initialGrade,
  initialShowMastered,
  hasExplicitGrade,
}: Props) {
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement>(null);
  const practiceSectionRef = useRef<HTMLDivElement>(null);

  const [activeList, setActiveList] = useState<MistakeQuestionItem[]>(activeMistakes);
  const [masteredList, setMasteredList] = useState<MistakeQuestionItem[]>(masteredMistakes);

  useEffect(() => {
    setActiveList(activeMistakes);
    setMasteredList(masteredMistakes);
  }, [activeMistakes, masteredMistakes]);

  const [showMastered, setShowMastered] = useState<boolean>(initialShowMastered);
  const [selectedGrade, setSelectedGrade] = useState<number | 'all'>(initialGrade);
  const [selectedChapterId, setSelectedChapterId] = useState<number | 'all'>('all');
  const [selectedTopicKey, setSelectedTopicKey] = useState<string>('all');
  const [formatFilter, setFormatFilter] = useState<'all' | QuestionType>('all');
  const [expandedExplanations, setExpandedExplanations] = useState<Record<number, boolean>>({});
  const [busyQuestionId, setBusyQuestionId] = useState<number | null>(null);

  // Interactive retry practice state
  const [practiceQuestions, setPracticeQuestions] = useState<MistakeQuestionItem[] | null>(null);
  const [practiceMode, setPracticeMode] = useState<'format2025' | 'standard'>('format2025');
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [savingBatch, setSavingBatch] = useState<boolean>(false);
  const [practiceSummary, setPracticeSummary] = useState<{
    correctCount: number;
    total: number;
  } | null>(null);

  // Sync grade preference when URL didn't force ?grade=
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

  // GSAP stagger
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.mistake-stagger', {
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

  const currentTabMistakes = showMastered ? masteredList : activeList;

  const countsByGrade = useMemo(() => {
    const counts: Record<number, number> = {};
    for (const item of currentTabMistakes) {
      counts[item.grade_number] = (counts[item.grade_number] || 0) + 1;
    }
    return counts;
  }, [currentTabMistakes]);

  const gradeScopedMistakes = useMemo(() => {
    if (selectedGrade === 'all') return currentTabMistakes;
    return currentTabMistakes.filter((m) => m.grade_number === selectedGrade);
  }, [currentTabMistakes, selectedGrade]);

  const formatCounts = useMemo(() => {
    const counts: Record<'all' | QuestionType, number> = {
      all: gradeScopedMistakes.length,
      multiple_choice: 0,
      true_false: 0,
      short_answer: 0,
    };
    for (const m of gradeScopedMistakes) {
      const t = classifyQuestionFormat(m);
      counts[t]++;
    }
    return counts;
  }, [gradeScopedMistakes]);

  // Hierarchy: Chapter -> Topic
  const chapterGroups = useMemo(() => {
    const byFormat =
      formatFilter === 'all'
        ? gradeScopedMistakes
        : gradeScopedMistakes.filter((m) => classifyQuestionFormat(m) === formatFilter);

    const map = new Map<
      number,
      {
        chapter_id: number;
        grade_number: number;
        chapter_code: string;
        chapter_title: string;
        items: MistakeQuestionItem[];
        topicGroups: Array<{
          key: string;
          topic_id: number | null;
          topic_code: string | null;
          topic_title: string;
          items: MistakeQuestionItem[];
        }>;
      }
    >();

    for (const m of byFormat) {
      if (!map.has(m.chapter_id)) {
        map.set(m.chapter_id, {
          chapter_id: m.chapter_id,
          grade_number: m.grade_number,
          chapter_code: m.chapter_code,
          chapter_title: m.chapter_title,
          items: [],
          topicGroups: [],
        });
      }
      const ch = map.get(m.chapter_id)!;
      ch.items.push(m);

      const tKey = m.topic_id ? `topic-${m.topic_id}` : `chapter-exam-${m.chapter_id}`;
      let tg = ch.topicGroups.find((item) => item.key === tKey);
      if (!tg) {
        tg = {
          key: tKey,
          topic_id: m.topic_id,
          topic_code: m.topic_code || null,
          topic_title: m.topic_id
            ? `${m.topic_code ? m.topic_code + ': ' : ''}${m.topic_title || 'Chủ đề'}`
            : `Đề tổng hợp ${m.chapter_code}`,
          items: [],
        };
        ch.topicGroups.push(tg);
      }
      tg.items.push(m);
    }

    return Array.from(map.values()).sort(
      (a, b) => a.grade_number - b.grade_number || a.chapter_id - b.chapter_id
    );
  }, [gradeScopedMistakes, formatFilter]);

  const availableTopics = useMemo(() => {
    const source =
      selectedChapterId === 'all'
        ? chapterGroups
        : chapterGroups.filter((c) => c.chapter_id === selectedChapterId);
    return source.flatMap((c) => c.topicGroups);
  }, [chapterGroups, selectedChapterId]);

  const visibleGroups = useMemo(() => {
    const chFiltered =
      selectedChapterId === 'all'
        ? chapterGroups
        : chapterGroups.filter((c) => c.chapter_id === selectedChapterId);
    if (selectedTopicKey === 'all') return chFiltered;
    return chFiltered
      .map((c) => {
        const tgs = c.topicGroups.filter((tg) => tg.key === selectedTopicKey);
        return {
          ...c,
          topicGroups: tgs,
          items: tgs.flatMap((tg) => tg.items),
        };
      })
      .filter((c) => c.topicGroups.length > 0);
  }, [chapterGroups, selectedChapterId, selectedTopicKey]);

  const filteredMistakes = useMemo(
    () => visibleGroups.flatMap((g) => g.items),
    [visibleGroups]
  );

  const handleSelectGrade = (g: number | 'all') => {
    setSelectedGrade(g);
    if (typeof g === 'number') {
      saveGradePreference(g);
    }
    setSelectedChapterId('all');
    setSelectedTopicKey('all');
  };

  const handleStatusAction = async (
    item: MistakeQuestionItem,
    action: 'master' | 'retry_wrong' | 'delete'
  ) => {
    setBusyQuestionId(item.id);
    try {
      const res = await fetch('/api/mistakes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, questionId: item.id }),
      });
      if (res.ok) {
        if (action === 'delete') {
          setActiveList((prev) => prev.filter((m) => m.id !== item.id));
          setMasteredList((prev) => prev.filter((m) => m.id !== item.id));
        } else if (action === 'master') {
          setActiveList((prev) => prev.filter((m) => m.id !== item.id));
          setMasteredList((prev) => {
            if (prev.some((m) => m.id === item.id)) return prev;
            return [{ ...item, mastered: 1 }, ...prev];
          });
        } else {
          setMasteredList((prev) => prev.filter((m) => m.id !== item.id));
          setActiveList((prev) => {
            if (prev.some((m) => m.id === item.id)) {
              return prev.map((m) =>
                m.id === item.id ? { ...m, mastered: 0, wrong_count: m.wrong_count + 1 } : m
              );
            }
            return [{ ...item, mastered: 0, wrong_count: item.wrong_count + 1 }, ...prev];
          });
        }
        router.refresh();
      }
    } finally {
      setBusyQuestionId(null);
    }
  };

  const startPractice = (items: MistakeQuestionItem[]) => {
    if (items.length === 0) return;
    const prepared =
      practiceMode === 'format2025'
        ? items.map((q) => ({ ...q, ...prepareQuestionFor2025(q) }))
        : items;
    setPracticeQuestions(prepared);
    setCurrentIdx(0);
    setAnswers({});
    setSubmitted(false);
    setPracticeSummary(null);
    setTimeout(() => {
      practiceSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      practiceSectionRef.current?.focus({ preventScroll: true });
    }, 80);
  };

  useEffect(() => {
    if (!practiceQuestions) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPracticeQuestions(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [practiceQuestions]);

  const evaluatePracticeItem = (q: MistakeQuestionItem, userAns: any): boolean => {
    if (q.question_type === 'true_false' && q.tf_statements) {
      const { correctCount } = calculateTrueFalseScore(q.tf_statements, userAns || {});
      return correctCount === q.tf_statements.length;
    }
    if (q.question_type === 'short_answer' && q.short_answer) {
      return checkShortAnswer(userAns, q.short_answer).isCorrect;
    }
    return userAns === q.correct_index;
  };

  const handleSubmitPractice = async () => {
    if (!practiceQuestions) return;
    setSavingBatch(true);

    const results = practiceQuestions.map((q) => {
      const userAns = answers[q.id];
      const correct = evaluatePracticeItem(q, userAns);
      return {
        questionId: q.id,
        correct,
        selectedOption: typeof userAns === 'number' ? userAns : -1,
      };
    });

    const correctCount = results.filter((r) => r.correct).length;

    try {
      const res = await fetch('/api/mistakes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'batch_practice_result',
          results,
        }),
      });
      if (res.ok) {
        const masteredIds = new Set(results.filter((r) => r.correct).map((r) => r.questionId));
        const moved = activeList.filter((m) => masteredIds.has(m.id)).map((m) => ({ ...m, mastered: 1 }));
        if (moved.length > 0) {
          setActiveList((prev) => prev.filter((m) => !masteredIds.has(m.id)));
          setMasteredList((prev) => [...moved, ...prev.filter((m) => !masteredIds.has(m.id))]);
        }
        router.refresh();
      }
    } finally {
      setSavingBatch(false);
      setSubmitted(true);
      setPracticeSummary({ correctCount, total: practiceQuestions.length });
    }
  };

  const currentPracticeQ = practiceQuestions ? practiceQuestions[currentIdx] ?? null : null;

  return (
    <MotionConfig reducedMotion="user">
      <div
        ref={rootRef}
        className="min-h-screen bg-[#03050d] text-slate-100 selection:bg-amber-500/30 selection:text-amber-100"
      >
        {/* Subtle Deep-Space Nebula Glows */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-40 right-1/4 h-[520px] w-[520px] rounded-full bg-amber-500/[0.06] blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 h-[480px] w-[480px] rounded-full bg-cyan-500/[0.05] blur-[140px]" />
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
                <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-amber-400/25 bg-amber-500/10 text-amber-300">
                  <ShieldAlert className="h-4 w-4" />
                </div>
                <div>
                  <h1 className="text-sm font-bold tracking-tight text-white">
                    Sổ Tay Lỗi Sai 6–12
                  </h1>
                  <p className="hidden text-[11px] text-slate-400 sm:block">
                    Quản lý &amp; Luyện lại Câu sai theo Chuẩn GDPT 2025
                  </p>
                </div>
              </div>
            </div>

            <nav className="flex shrink-0 items-center gap-1.5 overflow-x-auto whitespace-nowrap">
              <Link
                href="/cognitive-traps"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-rose-400/30 hover:bg-rose-500/10 hover:text-rose-200"
              >
                <Brain className="h-3.5 w-3.5 text-rose-300" />
                <span className="hidden md:inline">Ma trận Bẫy</span>
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
          {/* Status Tabs + Practice Launcher */}
          <section className="mistake-stagger flex flex-col gap-4 rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              {(
                [
                  {
                    id: false,
                    label: `Đang cần khắc phục (${activeList.length})`,
                    icon: AlertCircle,
                    color: 'text-rose-300',
                  },
                  {
                    id: true,
                    label: `Đã làm chủ (${masteredList.length})`,
                    icon: Trophy,
                    color: 'text-emerald-300',
                  },
                ] as const
              ).map((tab) => {
                const active = showMastered === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={String(tab.id)}
                    type="button"
                    onClick={() => {
                      setShowMastered(tab.id);
                      setSelectedChapterId('all');
                      setSelectedTopicKey('all');
                      setPracticeQuestions(null);
                    }}
                    className={`relative inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-colors ${
                      active ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {active && (
                      <motion.div
                        layoutId="mistakes-status-tab"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        className="absolute inset-0 rounded-xl border border-amber-400/35 bg-amber-500/15"
                      />
                    )}
                    <Icon className={`relative z-10 h-4 w-4 ${tab.color}`} />
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex rounded-xl border border-white/[0.06] bg-[#03050d]/80 p-1 text-[11px]">
                <button
                  type="button"
                  onClick={() => setPracticeMode('format2025')}
                  className={`rounded-lg px-2.5 py-1 font-medium transition-colors ${
                    practiceMode === 'format2025'
                      ? 'bg-cyan-500/20 text-cyan-200'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Đề chuẩn 2025
                </button>
                <button
                  type="button"
                  onClick={() => setPracticeMode('standard')}
                  className={`rounded-lg px-2.5 py-1 font-medium transition-colors ${
                    practiceMode === 'standard'
                      ? 'bg-cyan-500/20 text-cyan-200'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Trắc nghiệm gốc
                </button>
              </div>

              <button
                type="button"
                disabled={filteredMistakes.length === 0}
                onClick={() => startPractice(filteredMistakes)}
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/20 px-4 py-2 text-xs font-bold text-emerald-100 transition-all hover:bg-emerald-500/30 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Play className="h-3.5 w-3.5" />
                <span>Luyện lại {filteredMistakes.length} câu đang lọc</span>
              </button>
            </div>
          </section>

          {/* Multi-Level Filters */}
          <section className="mistake-stagger space-y-3 rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-4">
            {/* Grade Row */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="mr-1 inline-flex items-center gap-1 text-xs font-medium text-slate-400">
                <Filter className="h-3.5 w-3.5" /> Khối:
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
                Tất cả ({currentTabMistakes.length})
              </button>
              {GRADES.map((g) => {
                const cnt = countsByGrade[g] || 0;
                const active = selectedGrade === g;
                return (
                  <button
                    key={g}
                    type="button"
                    onClick={() => handleSelectGrade(g)}
                    className={`rounded-lg border px-3 py-1 text-xs font-medium transition-colors ${
                      active
                        ? 'border-amber-400/45 bg-amber-500/15 text-amber-200'
                        : 'border-white/[0.06] bg-white/5 text-slate-300 hover:border-white/15'
                    }`}
                  >
                    Lớp {g} ({cnt})
                  </button>
                );
              })}
            </div>

            {/* Format 2025 Row */}
            <div className="flex flex-wrap items-center gap-1.5 border-t border-white/[0.06] pt-3">
              <span className="mr-1 text-xs font-medium text-slate-400">Định dạng:</span>
              {(['all', 'multiple_choice', 'true_false', 'short_answer'] as const).map((fmt) => (
                <button
                  key={fmt}
                  type="button"
                  onClick={() => setFormatFilter(fmt)}
                  className={`rounded-lg border px-2.5 py-1 text-[11px] font-medium transition-colors ${
                    formatFilter === fmt
                      ? 'border-cyan-400/40 bg-cyan-500/15 text-cyan-200'
                      : 'border-white/[0.06] bg-white/5 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {FORMAT_LABELS[fmt]} ({formatCounts[fmt]})
                </button>
              ))}
            </div>

            {/* Chapter & Topic Filter Dropdowns */}
            {chapterGroups.length > 0 && (
              <div className="grid grid-cols-1 gap-3 border-t border-white/[0.06] pt-3 sm:grid-cols-2">
                <select
                  value={selectedChapterId === 'all' ? 'all' : String(selectedChapterId)}
                  onChange={(e) => {
                    const val = e.target.value;
                    setSelectedChapterId(val === 'all' ? 'all' : Number(val));
                    setSelectedTopicKey('all');
                  }}
                  className="rounded-xl border border-white/10 bg-[#03050d] px-3 py-2 text-xs text-white focus:border-cyan-400/40 focus:outline-none"
                >
                  <option value="all">Tất cả Chương ({chapterGroups.length} chương)</option>
                  {chapterGroups.map((cg) => (
                    <option key={cg.chapter_id} value={cg.chapter_id}>
                      Lớp {cg.grade_number} · {cg.chapter_code}: {cg.chapter_title} ({cg.items.length} câu)
                    </option>
                  ))}
                </select>

                <select
                  value={selectedTopicKey}
                  onChange={(e) => setSelectedTopicKey(e.target.value)}
                  className="rounded-xl border border-white/10 bg-[#03050d] px-3 py-2 text-xs text-white focus:border-cyan-400/40 focus:outline-none"
                >
                  <option value="all">Tất cả Chủ đề ({availableTopics.length} bài)</option>
                  {availableTopics.map((tg) => (
                    <option key={tg.key} value={tg.key}>
                      {tg.topic_title} ({tg.items.length} câu)
                    </option>
                  ))}
                </select>
              </div>
            )}
          </section>

          {/* Interactive Retry Session */}
          <div ref={practiceSectionRef} tabIndex={-1} className="scroll-mt-24 outline-none">
            <AnimatePresence>
              {practiceQuestions && currentPracticeQ && (
                <motion.section
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-2xl border border-emerald-400/40 bg-[#070b1a]/90 p-6 ring-1 ring-emerald-400/20 shadow-[0_0_40px_rgba(16,185,129,0.10)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
                    <div className="flex items-center gap-2">
                      <span className="rounded-lg border border-emerald-400/30 bg-emerald-500/15 px-2.5 py-1 font-mono text-xs font-bold text-emerald-200">
                        Luyện lại Câu {currentIdx + 1}/{practiceQuestions.length}
                      </span>
                      <span className="text-xs text-slate-300">
                        Lớp {currentPracticeQ.grade_number} · {currentPracticeQ.chapter_code}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setPracticeQuestions(null)}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-rose-400/35 bg-rose-500/15 px-3 py-1.5 text-xs font-bold text-rose-200 transition-colors hover:bg-rose-500/25"
                    >
                      <X className="h-3.5 w-3.5" />
                      <span>Thoát chế độ luyện</span>
                    </button>
                  </div>

                {/* Step Navigator Dots */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {practiceQuestions.map((pq, idx) => {
                    const active = idx === currentIdx;
                    const answered = answers[pq.id] !== undefined;
                    return (
                      <button
                        key={pq.id}
                        type="button"
                        onClick={() => setCurrentIdx(idx)}
                        className={`h-7 min-w-[28px] rounded-lg border px-2 font-mono text-xs font-bold transition-colors ${
                          active
                            ? 'border-cyan-400 bg-cyan-500/20 text-cyan-100'
                            : answered
                            ? 'border-emerald-400/35 bg-emerald-500/15 text-emerald-200'
                            : 'border-white/[0.06] bg-white/5 text-slate-400'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>

                {/* Prompt */}
                <div className="mt-5 text-sm leading-relaxed text-white">
                  <RichPhysicsText text={currentPracticeQ.question_text} />
                </div>

                {/* Answer Input by Question Type */}
                <div className="mt-4">
                  {currentPracticeQ.question_type === 'true_false' &&
                  currentPracticeQ.tf_statements ? (
                    <div className="space-y-2">
                      {currentPracticeQ.tf_statements.map((stmt) => {
                        const tfMap = (answers[currentPracticeQ.id] || {}) as Record<
                          string,
                          boolean
                        >;
                        const picked = tfMap[stmt.id];
                        return (
                          <div
                            key={stmt.id}
                            className="flex flex-col gap-2 rounded-xl border border-white/[0.06] bg-[#03050d]/80 p-3 sm:flex-row sm:items-center sm:justify-between"
                          >
                            <div className="text-xs text-slate-200">
                              <strong className="font-mono text-cyan-300">{stmt.id}) </strong>
                              <RichPhysicsText text={stmt.text} />
                            </div>
                            <div className="flex shrink-0 gap-1.5">
                              {[true, false].map((val) => {
                                const isActive = picked === val;
                                let cls =
                                  'border-white/10 bg-white/5 text-slate-300 hover:border-white/20';
                                if (submitted) {
                                  if (stmt.is_correct === val) {
                                    cls = 'border-emerald-400/50 bg-emerald-500/20 text-emerald-200';
                                  } else if (isActive) {
                                    cls = 'border-rose-400/50 bg-rose-500/20 text-rose-200';
                                  }
                                } else if (isActive) {
                                  cls = 'border-cyan-400/50 bg-cyan-500/20 text-cyan-100';
                                }
                                return (
                                  <button
                                    key={String(val)}
                                    type="button"
                                    disabled={submitted}
                                    onClick={() =>
                                      setAnswers((prev) => ({
                                        ...prev,
                                        [currentPracticeQ.id]: {
                                          ...(prev[currentPracticeQ.id] || {}),
                                          [stmt.id]: val,
                                        },
                                      }))
                                    }
                                    className={`rounded-lg border px-3 py-1 text-xs font-semibold ${cls}`}
                                  >
                                    {val ? 'Đúng' : 'Sai'}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : currentPracticeQ.question_type === 'short_answer' ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        disabled={submitted}
                        value={answers[currentPracticeQ.id] ?? ''}
                        onChange={(e) =>
                          setAnswers((prev) => ({
                            ...prev,
                            [currentPracticeQ.id]: e.target.value,
                          }))
                        }
                        placeholder={
                          currentPracticeQ.short_answer?.hint || 'Nhập giá trị số ngắn...'
                        }
                        className="w-full max-w-xs rounded-xl border border-white/15 bg-[#03050d] px-4 py-2.5 font-mono text-sm text-white placeholder-slate-500 focus:border-cyan-400/50 focus:outline-none"
                      />
                      {submitted && currentPracticeQ.short_answer && (
                        <div className="text-xs text-emerald-300">
                          Đáp án đúng:{' '}
                          <strong className="font-mono">
                            {String(currentPracticeQ.short_answer.target_value)}{' '}
                            {currentPracticeQ.short_answer.unit || ''}
                          </strong>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {currentPracticeQ.options.map((opt, idx) => {
                        const chosen = answers[currentPracticeQ.id];
                        const isPicked = chosen === idx;
                        const isCorrect = idx === currentPracticeQ.correct_index;
                        let cls =
                          'border-white/[0.06] bg-[#03050d]/80 text-slate-200 hover:border-cyan-400/35';
                        if (submitted) {
                          if (isCorrect) {
                            cls = 'border-emerald-400/50 bg-emerald-500/15 text-emerald-100';
                          } else if (isPicked) {
                            cls = 'border-rose-400/50 bg-rose-500/15 text-rose-100';
                          }
                        } else if (isPicked) {
                          cls = 'border-cyan-400/55 bg-cyan-500/15 text-white';
                        }
                        return (
                          <button
                            key={idx}
                            type="button"
                            disabled={submitted}
                            onClick={() =>
                              setAnswers((prev) => ({
                                ...prev,
                                [currentPracticeQ.id]: idx,
                              }))
                            }
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
                  )}
                </div>

                {submitted && currentPracticeQ.explanation && (
                  <div className="mt-4 rounded-xl border border-white/[0.06] bg-[#03050d]/80 p-3.5 text-xs leading-relaxed text-slate-300">
                    <strong className="text-cyan-300">Giải thích: </strong>
                    <RichPhysicsText text={currentPracticeQ.explanation} />
                  </div>
                )}

                {practiceSummary && (
                  <div className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-500/15 p-3 text-xs font-semibold text-emerald-100">
                    Kết quả: {practiceSummary.correctCount}/{practiceSummary.total} câu đúng. Các câu làm đúng đã được chuyển sang mục Đã làm chủ!
                  </div>
                )}

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      disabled={currentIdx === 0}
                      onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
                      className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 disabled:opacity-40"
                    >
                      Câu trước
                    </button>
                    <button
                      type="button"
                      disabled={currentIdx >= practiceQuestions.length - 1}
                      onClick={() =>
                        setCurrentIdx((i) => Math.min(practiceQuestions.length - 1, i + 1))
                      }
                      className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 disabled:opacity-40"
                    >
                      Câu tiếp theo
                    </button>
                  </div>

                  {!submitted ? (
                    <button
                      type="button"
                      disabled={savingBatch}
                      onClick={handleSubmitPractice}
                      className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/20 px-5 py-2 text-xs font-bold text-emerald-100 hover:bg-emerald-500/30"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      <span>{savingBatch ? 'Đang chấm điểm...' : 'Nộp bài & Cập nhật Sổ tay'}</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setPracticeQuestions(null)}
                      className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/20 px-4 py-2 text-xs font-bold text-cyan-100"
                    >
                      Hoàn tất phiên ôn tập
                    </button>
                  )}
                </div>
              </motion.section>
            )}
          </AnimatePresence>
          </div>

          {/* Grouped Mistake List */}
          {visibleGroups.length === 0 ? (
            <section className="mistake-stagger rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-12 text-center">
              <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-400" />
              <h2 className="mt-3 text-base font-bold text-white">
                {showMastered
                  ? 'Chưa có câu hỏi nào ở mục Đã làm chủ theo bộ lọc này.'
                  : 'Tuyệt vời! Bạn chưa có câu lỗi sai nào đang mở ở bộ lọc này.'}
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                Thử làm bài thi thích ứng CAT hoặc kiểm tra Ma trận Bẫy Nhận thức để phát hiện thêm điểm mù.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <Link
                  href="/adaptive-test"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-purple-400/35 bg-purple-500/15 px-4 py-2 text-xs font-semibold text-purple-200 hover:bg-purple-500/25"
                >
                  <Target className="h-3.5 w-3.5" /> Làm CAT Test
                </Link>
                <Link
                  href="/cognitive-traps"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-rose-400/35 bg-rose-500/15 px-4 py-2 text-xs font-semibold text-rose-200 hover:bg-rose-500/25"
                >
                  <Brain className="h-3.5 w-3.5" /> Ma trận Bẫy Nhận thức
                </Link>
              </div>
            </section>
          ) : (
            <section className="mistake-stagger space-y-6">
              {visibleGroups.map((chapter) => (
                <div
                  key={chapter.chapter_id}
                  className="space-y-4 rounded-2xl border border-white/[0.06] bg-[#070b1a]/80 p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="rounded-lg border border-cyan-400/30 bg-cyan-500/15 px-2.5 py-1 text-xs font-bold text-cyan-200">
                        Lớp {chapter.grade_number} · {chapter.chapter_code}
                      </span>
                      <h2 className="text-base font-bold text-white">{chapter.chapter_title}</h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => startPractice(chapter.items)}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-400/30 bg-emerald-500/15 px-3 py-1.5 text-xs font-semibold text-emerald-200 hover:bg-emerald-500/25"
                    >
                      <Play className="h-3.5 w-3.5" />
                      <span>Ôn cả chương ({chapter.items.length})</span>
                    </button>
                  </div>

                  <div className="space-y-5">
                    {chapter.topicGroups.map((topic) => (
                      <div key={topic.key} className="space-y-3">
                        <div className="flex items-center justify-between gap-2 text-xs font-semibold text-slate-300">
                          <span className="inline-flex items-center gap-1.5">
                            <FolderOpen className="h-3.5 w-3.5 text-amber-300" />
                            <span>{topic.topic_title}</span>
                          </span>
                          {topic.topic_id && (
                            <Link
                              href={`/topic/${topic.topic_id}`}
                              className="text-cyan-300 hover:underline"
                            >
                              Mở bài học →
                            </Link>
                          )}
                        </div>

                        <div className="space-y-3">
                          {topic.items.map((item) => {
                            const trap = detectCognitiveTrap(item, item.last_wrong_option);
                            const trapMeta = COGNITIVE_TRAP_REGISTRY[trap.trapType];
                            const expOpen = Boolean(expandedExplanations[item.id]);
                            const isBusy = busyQuestionId === item.id;
                            const hasWrongOpt =
                              item.last_wrong_option >= 0 &&
                              item.last_wrong_option < item.options.length &&
                              item.last_wrong_option !== item.correct_index;
                            const repTrapIdx = pickRepresentativeTrapOption(item);

                            return (
                              <div
                                key={`${item.id}-${item.mistake_id}`}
                                className="rounded-xl border border-white/[0.06] bg-[#03050d]/80 p-4"
                              >
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span className="rounded-md border border-rose-400/30 bg-rose-500/15 px-2 py-0.5 font-mono text-[11px] font-bold text-rose-200">
                                      Sai {item.wrong_count} lần
                                    </span>
                                    <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-slate-300">
                                      {DIFF_LABELS[item.difficulty] || item.difficulty}
                                    </span>
                                    <span className="rounded-md border border-amber-400/25 bg-amber-500/10 px-2 py-0.5 text-[11px] text-amber-200">
                                      {trapMeta.icon} {trapMeta.name}
                                    </span>
                                  </div>

                                  <div className="flex flex-wrap items-center gap-1.5">
                                    {!showMastered ? (
                                      <button
                                        type="button"
                                        disabled={isBusy}
                                        onClick={() => handleStatusAction(item, 'master')}
                                        className="inline-flex items-center gap-1 rounded-lg border border-emerald-400/30 bg-emerald-500/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-200 hover:bg-emerald-500/25"
                                      >
                                        <CheckCircle2 className="h-3 w-3" /> Đã thuộc
                                      </button>
                                    ) : (
                                      <button
                                        type="button"
                                        disabled={isBusy}
                                        onClick={() => handleStatusAction(item, 'retry_wrong')}
                                        className="inline-flex items-center gap-1 rounded-lg border border-amber-400/30 bg-amber-500/15 px-2.5 py-1 text-[11px] font-semibold text-amber-200 hover:bg-amber-500/25"
                                      >
                                        <RotateCcw className="h-3 w-3" /> Cần ôn lại
                                      </button>
                                    )}
                                    <button
                                      type="button"
                                      disabled={isBusy}
                                      onClick={() => handleStatusAction(item, 'delete')}
                                      className="rounded-lg border border-white/10 bg-white/5 p-1.5 text-slate-400 hover:border-rose-400/40 hover:text-rose-300"
                                      aria-label="Xóa khỏi sổ tay"
                                    >
                                      <Trash2 className="h-3.5 w-3.5" />
                                    </button>
                                  </div>
                                </div>

                                <div className="mt-3 text-sm leading-relaxed text-white">
                                  <RichPhysicsText text={item.question_text} />
                                </div>

                                {/* Full 4 Options A, B, C, D */}
                                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                                  {item.options.map((opt, optIdx) => {
                                    const letter = String.fromCharCode(65 + optIdx);
                                    const isCorrect = optIdx === item.correct_index;
                                    const isWrongPicked =
                                      hasWrongOpt && optIdx === item.last_wrong_option && !isCorrect;
                                    const isTrapWarning =
                                      !hasWrongOpt && optIdx === repTrapIdx && !isCorrect;

                                    let cls =
                                      'border-white/[0.06] bg-[#070b1a]/80 text-slate-300';
                                    if (isCorrect) {
                                      cls =
                                        'border-emerald-400/35 bg-emerald-950/25 text-emerald-100';
                                    } else if (isWrongPicked) {
                                      cls = 'border-rose-400/35 bg-rose-950/25 text-rose-100';
                                    } else if (isTrapWarning) {
                                      cls = 'border-amber-400/35 bg-amber-950/25 text-amber-100';
                                    }

                                    return (
                                      <div
                                        key={optIdx}
                                        className={`rounded-lg border px-3 py-2 text-xs transition-colors ${cls}`}
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
                                              <CheckCircle2 className="h-3 w-3" />
                                              <span>Đáp án đúng</span>
                                            </span>
                                          )}
                                          {isWrongPicked && (
                                            <span className="inline-flex items-center gap-1 font-semibold text-rose-300">
                                              <XCircle className="h-3 w-3" />
                                              <span>Bạn từng chọn</span>
                                            </span>
                                          )}
                                          {isTrapWarning && (
                                            <span className="inline-flex items-center gap-1 font-semibold text-amber-300">
                                              <AlertTriangle className="h-3 w-3" />
                                              <span>Phương án bẫy</span>
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

                                <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
                                  <span className="text-slate-400">{trap.diagnosis}</span>
                                  {item.explanation && (
                                    <button
                                      type="button"
                                      onClick={() =>
                                        setExpandedExplanations((prev) => ({
                                          ...prev,
                                          [item.id]: !prev[item.id],
                                        }))
                                      }
                                      className="inline-flex items-center gap-1 font-semibold text-cyan-300 hover:underline"
                                    >
                                      <span>{expOpen ? 'Ẩn lời giải' : 'Xem lời giải'}</span>
                                      {expOpen ? (
                                        <ChevronUp className="h-3.5 w-3.5" />
                                      ) : (
                                        <ChevronDown className="h-3.5 w-3.5" />
                                      )}
                                    </button>
                                  )}
                                </div>

                                {expOpen && item.explanation && (
                                  <div className="mt-2.5 rounded-lg border border-white/[0.06] bg-[#070b1a] p-3 text-xs leading-relaxed text-slate-300">
                                    <RichPhysicsText text={item.explanation} />
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          )}
        </main>
      </div>
    </MotionConfig>
  );
}

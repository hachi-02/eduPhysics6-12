'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MistakeQuestionItem } from '@/types/cms';
import { RichPhysicsText } from './KatexRenderer';
import { DropdownMenu, DropdownItem } from './ui/DropdownMenu';
import {
  AlertCircle,
  CheckCircle2,
  XCircle,
  Play,
  Trash2,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Sparkles,
  FolderOpen,
  FileText,
  Layers,
  Target,
  Trophy,
  GraduationCap,
  ChevronDown,
  RotateCcw,
  X,
} from 'lucide-react';

const DIFF_LABELS: Record<string, string> = {
  nhan_biet: 'Nhận biết',
  thong_hieu: 'Thông hiểu',
  van_dung: 'Vận dụng',
  van_dung_cao: 'Vận dụng cao',
};

interface TopicSubGroup {
  key: string; // e.g. 'topic-12' or 'chapter-exam-3'
  topic_id: number | null;
  topic_code: string | null;
  topic_title: string;
  items: MistakeQuestionItem[];
}

interface ChapterGroup {
  chapter_id: number;
  grade_number: number;
  chapter_code: string;
  chapter_title: string;
  items: MistakeQuestionItem[];
  topicGroups: TopicSubGroup[];
}

export function MistakeNotebookClient({
  mistakes,
  activeMistakeCount,
  masteredCount,
  countsByGrade,
  selectedGrade,
  showMastered,
}: {
  mistakes: MistakeQuestionItem[];
  activeMistakeCount: number;
  masteredCount: number;
  countsByGrade: Record<number, number>;
  selectedGrade?: number;
  showMastered: boolean;
}) {
  const router = useRouter();
  const [selectedChapterId, setSelectedChapterId] = useState<number | 'all'>('all');
  const [selectedTopicKey, setSelectedTopicKey] = useState<string>('all');
  const [practiceQuestions, setPracticeQuestions] = useState<MistakeQuestionItem[] | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [expandedExplanations, setExpandedExplanations] = useState<Record<number, boolean>>({});

  // Build 3-level hierarchy: Grade -> Chapter -> Topic (or Chapter Synthesis Exam)
  const chapterGroups: ChapterGroup[] = useMemo(() => {
    const map = new Map<number, ChapterGroup>();

    for (const m of mistakes) {
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
      const chGroup = map.get(m.chapter_id)!;
      chGroup.items.push(m);

      const tKey = m.topic_id ? `topic-${m.topic_id}` : `chapter-exam-${m.chapter_id}`;
      let tGroup = chGroup.topicGroups.find((tg) => tg.key === tKey);
      if (!tGroup) {
        tGroup = {
          key: tKey,
          topic_id: m.topic_id,
          topic_code: m.topic_code,
          topic_title: m.topic_id
            ? `${m.topic_code ? m.topic_code + ': ' : ''}${m.topic_title || 'Chủ đề'}`
            : `Đề kiểm tra tổng hợp ${m.chapter_code}`,
          items: [],
        };
        chGroup.topicGroups.push(tGroup);
      }
      tGroup.items.push(m);
    }

    const result = Array.from(map.values()).sort((a, b) => {
      if (a.grade_number !== b.grade_number) return a.grade_number - b.grade_number;
      return a.chapter_id - b.chapter_id;
    });

    for (const cg of result) {
      cg.topicGroups.sort((a, b) => {
        if (a.topic_id && b.topic_id) return a.topic_id - b.topic_id;
        if (a.topic_id && !b.topic_id) return -1;
        return 1;
      });
    }

    return result;
  }, [mistakes]);

  // Available Topic pills for the currently selected Chapter (or all chapters)
  const availableTopicGroups = useMemo(() => {
    const targetChapters =
      selectedChapterId === 'all'
        ? chapterGroups
        : chapterGroups.filter((c) => c.chapter_id === selectedChapterId);
    return targetChapters.flatMap((c) =>
      c.topicGroups.map((tg) => ({
        ...tg,
        grade_number: c.grade_number,
        chapter_code: c.chapter_code,
      }))
    );
  }, [chapterGroups, selectedChapterId]);

  // Filtered Chapter & Topic groups for rendering
  const visibleGroups = useMemo(() => {
    const chFiltered =
      selectedChapterId === 'all'
        ? chapterGroups
        : chapterGroups.filter((g) => g.chapter_id === selectedChapterId);

    if (selectedTopicKey === 'all') return chFiltered;

    return chFiltered
      .map((cg) => {
        const filteredTopics = cg.topicGroups.filter((tg) => tg.key === selectedTopicKey);
        const filteredItems = filteredTopics.flatMap((tg) => tg.items);
        return {
          ...cg,
          items: filteredItems,
          topicGroups: filteredTopics,
        };
      })
      .filter((cg) => cg.topicGroups.length > 0);
  }, [chapterGroups, selectedChapterId, selectedTopicKey]);

  const filteredMistakes = useMemo(() => {
    return visibleGroups.flatMap((cg) => cg.items);
  }, [visibleGroups]);

  const currentChapter = useMemo(() => {
    if (selectedChapterId === 'all') return null;
    return chapterGroups.find((cg) => cg.chapter_id === selectedChapterId) || null;
  }, [chapterGroups, selectedChapterId]);

  const currentTopic = useMemo(() => {
    if (selectedTopicKey === 'all') return null;
    return availableTopicGroups.find((tg) => tg.key === selectedTopicKey) || null;
  }, [availableTopicGroups, selectedTopicKey]);

  const hasActiveFilters = Boolean(
    selectedGrade || selectedChapterId !== 'all' || selectedTopicKey !== 'all'
  );

  const gradeDropdownItems = useMemo<DropdownItem[]>(() => {
    const items: DropdownItem[] = [
      {
        label: 'Tất cả khối lớp',
        href: `/mistakes?mastered=${showMastered ? 1 : 0}`,
        active: !selectedGrade,
        badge: mistakes.length,
        onClick: () => {
          setSelectedChapterId('all');
          setSelectedTopicKey('all');
        },
      },
      { label: '', divider: true },
    ];

    for (let g = 6; g <= 12; g++) {
      const count = countsByGrade[g] || 0;
      items.push({
        label: `Lớp ${g}`,
        href: `/mistakes?grade=${g}&mastered=${showMastered ? 1 : 0}`,
        active: selectedGrade === g,
        badge: count,
        onClick: () => {
          setSelectedChapterId('all');
          setSelectedTopicKey('all');
        },
      });
    }

    return items;
  }, [showMastered, selectedGrade, mistakes.length, countsByGrade]);

  const chapterDropdownItems = useMemo<DropdownItem[]>(() => {
    const items: DropdownItem[] = [
      {
        label: 'Tất cả các chương',
        active: selectedChapterId === 'all',
        badge: mistakes.length,
        onClick: () => {
          setSelectedChapterId('all');
          setSelectedTopicKey('all');
        },
      },
    ];

    if (chapterGroups.length > 0) {
      items.push({ label: '', divider: true });
      for (const cg of chapterGroups) {
        items.push({
          label: (!selectedGrade ? `[Lớp ${cg.grade_number}] ` : '') + cg.chapter_title,
          active: selectedChapterId === cg.chapter_id,
          badge: cg.items.length,
          onClick: () => {
            setSelectedChapterId(cg.chapter_id);
            setSelectedTopicKey('all');
          },
        });
      }
    }

    return items;
  }, [selectedChapterId, mistakes.length, chapterGroups, selectedGrade]);

  const topicDropdownItems = useMemo<DropdownItem[]>(() => {
    const totalTopicMistakes = availableTopicGroups.reduce((acc, tg) => acc + tg.items.length, 0);
    const items: DropdownItem[] = [
      {
        label: 'Tất cả chủ đề',
        active: selectedTopicKey === 'all',
        badge: totalTopicMistakes,
        onClick: () => setSelectedTopicKey('all'),
      },
    ];

    if (availableTopicGroups.length > 0) {
      items.push({ label: '', divider: true });
      for (const tg of availableTopicGroups) {
        items.push({
          label: tg.topic_title,
          active: selectedTopicKey === tg.key,
          badge: tg.items.length,
          onClick: () => setSelectedTopicKey(tg.key),
        });
      }
    }

    return items;
  }, [availableTopicGroups, selectedTopicKey]);

  const handleToggleExplanation = (qId: number) => {
    setExpandedExplanations((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleSingleAction = async (questionId: number, action: 'master' | 'delete') => {
    await fetch('/api/mistakes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questionId, action }),
    });
    router.refresh();
  };

  const handleStartPractice = (subset?: MistakeQuestionItem[]) => {
    const list = subset && subset.length > 0 ? subset : filteredMistakes;
    if (list.length === 0) return;
    setAnswers({});
    setSubmitted(false);
    setCurrentIdx(0);
    setPracticeQuestions(list);
  };

  const handleSubmitPractice = async () => {
    if (submitted || !practiceQuestions) return;
    setSubmitted(true);
    const results = practiceQuestions.map((q) => {
      const selected = answers[q.id];
      const isCorrect = selected === q.correct_index;
      return {
        questionId: q.id,
        correct: isCorrect,
        selectedOption: selected ?? -1,
      };
    });

    await fetch('/api/mistakes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ results }),
    });
    router.refresh();
  };

  // Interactive Practice Mode for Wrong Questions
  if (practiceQuestions && practiceQuestions.length > 0) {
    const q = practiceQuestions[currentIdx] || practiceQuestions[0];
    const total = practiceQuestions.length;
    const answeredCount = Object.keys(answers).length;
    const selectedOpt = answers[q.id];
    const isCorrect = submitted && selectedOpt === q.correct_index;
    const score = submitted
      ? practiceQuestions.filter((m) => answers[m.id] === m.correct_index).length
      : 0;
    const practicePct = Math.round((answeredCount / total) * 100);

    return (
      <div className="mx-auto max-w-4xl space-y-6 px-4 py-8 sm:px-6">
        <div className="edu-card flex flex-wrap items-center justify-between gap-3 p-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setPracticeQuestions(null)}
              className="edu-btn-ghost px-3 py-1.5 text-xs"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Thoát luyện tập
            </button>
            <span className="text-xs font-medium text-slate-500">
              Đã chọn:{' '}
              <strong className="text-slate-900">
                {answeredCount}/{total}
              </strong>{' '}
              câu
            </span>
            {submitted && (
              <span className="inline-flex items-center gap-1 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                <Trophy className="h-3.5 w-3.5" />
                Khắc phục thành công: {score}/{total} câu
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {!submitted ? (
              <button
                type="button"
                onClick={handleSubmitPractice}
                className="edu-btn-primary px-4 py-2 text-xs"
              >
                Nộp bài &amp; Cập nhật sổ tay
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setPracticeQuestions(null);
                  router.refresh();
                }}
                className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-soft transition hover:bg-emerald-500"
              >
                <CheckCircle2 className="h-3.5 w-3.5" /> Xem lại Sổ tay đã cập nhật
              </button>
            )}
          </div>
        </div>

        {/* Progress */}
        <div className="edu-progress">
          <div className="edu-progress-bar" style={{ width: `${practicePct}%` }} />
        </div>

        {/* Question Card */}
        <div className="edu-card space-y-6 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1 rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-extrabold text-brand-700">
                <Target className="h-3.5 w-3.5" />
                Câu {currentIdx + 1} / {total}
              </span>
              <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                Lớp {q.grade_number} • {q.chapter_title} ({q.topic_code || q.chapter_code})
              </span>
              <span className="rounded-lg bg-rose-50 px-2.5 py-1 text-xs font-bold text-rose-700">
                Đã sai {q.wrong_count} lần
              </span>
            </div>

            {submitted && (
              <span
                className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-bold ${
                  isCorrect ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                }`}
              >
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Đã nắm vững! (Tự động chuyển sang Đã thuộc)
                  </>
                ) : (
                  <>
                    <XCircle className="h-4 w-4" /> Vẫn chưa đúng
                  </>
                )}
              </span>
            )}
          </div>

          <div className="text-base font-semibold leading-relaxed text-slate-900 sm:text-lg">
            <RichPhysicsText text={q.question_text} />
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {q.options.map((opt, optIdx) => {
              const letter = ['A', 'B', 'C', 'D'][optIdx] || 'A';
              const isSelected = selectedOpt === optIdx;
              const isRightAnswer = q.correct_index === optIdx;

              let btnStyle =
                'border-slate-200 bg-white hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50/40 hover:shadow-soft text-slate-800';
              if (!submitted && isSelected) {
                btnStyle =
                  'border-brand-500 bg-brand-50/70 font-semibold text-brand-950 ring-2 ring-brand-500/25';
              } else if (submitted) {
                if (isRightAnswer) {
                  btnStyle = 'border-emerald-500 bg-emerald-50/80 font-semibold text-emerald-950';
                } else if (isSelected && !isRightAnswer) {
                  btnStyle = 'border-rose-400 bg-rose-50/80 text-rose-950';
                } else {
                  btnStyle = 'border-slate-200 bg-slate-50/50 text-slate-400';
                }
              }

              return (
                <button
                  key={optIdx}
                  type="button"
                  disabled={submitted}
                  onClick={() => {
                    if (!submitted) {
                      setAnswers((prev) => ({ ...prev, [q.id]: optIdx }));
                    }
                  }}
                  className={`flex w-full items-start gap-3 rounded-2xl border p-3.5 text-left text-sm transition duration-150 ease-snap ${btnStyle}`}
                >
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                      !submitted && isSelected
                        ? 'bg-brand-600 text-white'
                        : submitted && isRightAnswer
                          ? 'bg-emerald-600 text-white'
                          : submitted && isSelected && !isRightAnswer
                            ? 'bg-rose-600 text-white'
                            : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {letter}
                  </span>
                  <span className="flex-1 leading-relaxed">
                    <RichPhysicsText text={opt} />
                  </span>
                </button>
              );
            })}
          </div>

          {submitted && (
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-4 text-xs leading-relaxed text-slate-700 sm:text-sm">
              <strong className="font-bold text-slate-900">Giải thích: </strong>
              <RichPhysicsText text={q.explanation} />
            </div>
          )}

          <div className="flex items-center justify-between border-t border-slate-100 pt-4">
            <button
              type="button"
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
              className="edu-btn-ghost flex items-center gap-1.5 px-3.5 py-2 text-xs disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" /> Câu trước
            </button>

            <button
              type="button"
              disabled={currentIdx === total - 1}
              onClick={() => setCurrentIdx((i) => Math.min(total - 1, i + 1))}
              className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-3.5 py-2 text-xs font-bold text-white shadow-soft transition hover:bg-slate-800 disabled:opacity-40"
            >
              Câu tiếp <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-8 sm:px-6">
      {/* Header & 3-Tier Filter Bar (Khối Lớp -> Chương -> Chủ đề) */}
      <div className="edu-card space-y-4 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="edu-eyebrow text-rose-600">
              <AlertCircle className="h-4 w-4" />
              <span>Sổ tay Ôn tập Thông minh • Phân cấp Lớp → Chương → Chủ đề</span>
            </div>
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
              Sổ tay Câu hỏi làm sai
            </h1>
            <p className="max-w-2xl text-xs leading-relaxed text-slate-500 sm:text-sm">
              Được phân loại tự động theo từng <strong className="text-slate-700">Khối lớp</strong>,{' '}
              <strong className="text-slate-700">Chương học</strong> và{' '}
              <strong className="text-slate-700">Chủ đề (Bài học)</strong>. Bạn có thể chọn ôn tập toàn
              bộ, theo chương hoặc theo từng chủ đề!
            </p>
          </div>

          {!showMastered && filteredMistakes.length > 0 && (
            <button
              type="button"
              onClick={() => handleStartPractice(filteredMistakes)}
              className="edu-btn-primary px-5 py-2.5"
            >
              <Play className="h-4 w-4 fill-current" />
              <span>Làm lại {filteredMistakes.length} câu đang chọn</span>
            </button>
          )}
        </div>

        {/* Toolbar: Status Switcher & Dropdown Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
          {/* Status Tabs (Segmented Control) */}
          <div className="inline-flex items-center rounded-xl bg-slate-100 p-1">
            <Link
              href={`/mistakes?${selectedGrade ? `grade=${selectedGrade}&` : ''}mastered=0`}
              onClick={() => {
                setSelectedChapterId('all');
                setSelectedTopicKey('all');
              }}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition duration-150 ease-snap ${
                !showMastered
                  ? 'bg-rose-600 text-white shadow-soft'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Cần ôn lại</span>
              <span
                className={`rounded-full px-1.5 py-0.2 text-[10px] font-extrabold ${
                  !showMastered ? 'bg-white/25 text-white' : 'bg-slate-200 text-slate-700'
                }`}
              >
                {activeMistakeCount}
              </span>
            </Link>

            <Link
              href={`/mistakes?${selectedGrade ? `grade=${selectedGrade}&` : ''}mastered=1`}
              onClick={() => {
                setSelectedChapterId('all');
                setSelectedTopicKey('all');
              }}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition duration-150 ease-snap ${
                showMastered
                  ? 'bg-emerald-600 text-white shadow-soft'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Đã nắm vững</span>
              <span
                className={`rounded-full px-1.5 py-0.2 text-[10px] font-extrabold ${
                  showMastered ? 'bg-white/25 text-white' : 'bg-slate-200 text-slate-700'
                }`}
              >
                {masteredCount}
              </span>
            </Link>
          </div>

          {/* Smart Dropdown Filter Controls */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Filter: Grade */}
            <DropdownMenu
              menuWidth="w-52"
              align="left"
              trigger={
                <button
                  type="button"
                  className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-bold transition duration-150 ease-snap ${
                    selectedGrade
                      ? 'border-brand-500 bg-brand-50 text-brand-900 shadow-2xs'
                      : 'border-slate-200/90 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 shadow-2xs'
                  }`}
                >
                  <GraduationCap
                    className={`h-4 w-4 shrink-0 ${selectedGrade ? 'text-brand-600' : 'text-slate-400'}`}
                  />
                  <span>{selectedGrade ? `Lớp ${selectedGrade}` : 'Tất cả lớp'}</span>
                  <ChevronDown className="h-3.5 w-3.5 text-slate-400 shrink-0 ml-0.5" />
                </button>
              }
              items={gradeDropdownItems}
            />

            {/* Filter: Chapter */}
            <DropdownMenu
              menuWidth="w-72 sm:w-80"
              align="left"
              trigger={
                <button
                  type="button"
                  disabled={chapterGroups.length === 0}
                  className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-bold transition duration-150 ease-snap max-w-[200px] sm:max-w-[260px] ${
                    selectedChapterId !== 'all'
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-900 shadow-2xs'
                      : 'border-slate-200/90 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 shadow-2xs'
                  } disabled:opacity-50`}
                >
                  <Layers
                    className={`h-4 w-4 shrink-0 ${
                      selectedChapterId !== 'all' ? 'text-indigo-600' : 'text-slate-400'
                    }`}
                  />
                  <span className="truncate">
                    {currentChapter ? currentChapter.chapter_title : 'Tất cả chương'}
                  </span>
                  <ChevronDown className="h-3.5 w-3.5 text-slate-400 shrink-0 ml-0.5" />
                </button>
              }
              items={chapterDropdownItems}
            />

            {/* Filter: Topic */}
            <DropdownMenu
              menuWidth="w-72 sm:w-80"
              align="left"
              trigger={
                <button
                  type="button"
                  disabled={availableTopicGroups.length === 0}
                  className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-bold transition duration-150 ease-snap max-w-[200px] sm:max-w-[260px] ${
                    selectedTopicKey !== 'all'
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-900 shadow-2xs'
                      : 'border-slate-200/90 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 shadow-2xs'
                  } disabled:opacity-50`}
                >
                  <FileText
                    className={`h-4 w-4 shrink-0 ${
                      selectedTopicKey !== 'all' ? 'text-emerald-600' : 'text-slate-400'
                    }`}
                  />
                  <span className="truncate">
                    {currentTopic ? currentTopic.topic_title : 'Tất cả chủ đề'}
                  </span>
                  <ChevronDown className="h-3.5 w-3.5 text-slate-400 shrink-0 ml-0.5" />
                </button>
              }
              items={topicDropdownItems}
            />

            {/* Reset Filters */}
            {hasActiveFilters && (
              <button
                type="button"
                onClick={() => {
                  setSelectedChapterId('all');
                  setSelectedTopicKey('all');
                  if (selectedGrade) router.push(`/mistakes?mastered=${showMastered ? 1 : 0}`);
                }}
                className="inline-flex items-center gap-1.5 rounded-xl border border-dashed border-rose-300 bg-rose-50/70 px-2.5 py-2 text-xs font-bold text-rose-700 shadow-2xs transition hover:bg-rose-100"
                title="Xóa bộ lọc"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Đặt lại</span>
              </button>
            )}
          </div>
        </div>

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 border-t border-slate-100 pt-3 text-xs">
            <span className="font-semibold text-slate-500">Đang lọc:</span>
            {selectedGrade && (
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand-50 px-2.5 py-1 font-bold text-brand-800">
                <span>Khối {selectedGrade}</span>
                <Link
                  href={`/mistakes?mastered=${showMastered ? 1 : 0}`}
                  onClick={() => {
                    setSelectedChapterId('all');
                    setSelectedTopicKey('all');
                  }}
                  className="rounded hover:bg-brand-100 text-brand-500 hover:text-brand-900"
                >
                  <X className="h-3 w-3" />
                </Link>
              </span>
            )}
            {selectedChapterId !== 'all' && currentChapter && (
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-50 px-2.5 py-1 font-bold text-indigo-800">
                <span className="truncate max-w-[200px]">
                  {currentChapter.chapter_code}: {currentChapter.chapter_title}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedChapterId('all');
                    setSelectedTopicKey('all');
                  }}
                  className="rounded hover:bg-indigo-100 text-indigo-500 hover:text-indigo-900"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {selectedTopicKey !== 'all' && currentTopic && (
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1 font-bold text-emerald-800">
                <span className="truncate max-w-[200px]">{currentTopic.topic_title}</span>
                <button
                  type="button"
                  onClick={() => setSelectedTopicKey('all')}
                  className="rounded hover:bg-emerald-100 text-emerald-500 hover:text-emerald-900"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            <span className="text-slate-400">•</span>
            <span className="font-semibold text-rose-600">
              {filteredMistakes.length} câu hỏi
            </span>
          </div>
        )}
      </div>

      {/* Empty State */}
      {visibleGroups.length === 0 ? (
        <div className="edu-card space-y-3 p-12 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-soft">
            <Sparkles className="h-7 w-7" />
          </div>
          <h3 className="text-base font-extrabold text-slate-900">
            {showMastered
              ? 'Chưa có câu hỏi nào trong danh sách Đã nắm vững'
              : 'Tuyệt vời! Bạn không có câu hỏi nào đang làm sai'}
          </h3>
          <p className="mx-auto max-w-md text-xs leading-relaxed text-slate-500 sm:text-sm">
            {showMastered
              ? 'Khi bạn làm lại đúng các câu hỏi trong mục Cần ôn lại, chúng sẽ được chuyển sang đây.'
              : 'Hãy vào học các chủ đề từ Lớp 6 đến Lớp 12 và làm bài kiểm tra 25 câu. Những câu bạn làm sai sẽ tự động phân theo từng Chương và Chủ đề tại đây để bạn ôn tập.'}
          </p>
          <div className="pt-2">
            <Link href="/" className="edu-btn-primary px-4 py-2 text-xs">
              <BookOpen className="h-4 w-4" /> Đi tới Chương trình học
            </Link>
          </div>
        </div>
      ) : (
        /* Grouped by Chapter -> Grouped by Topic */
        <div className="space-y-8">
          {visibleGroups.map((group) => (
            <section key={group.chapter_id} className="edu-card overflow-hidden">
              {/* Chapter Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/90 bg-slate-100/80 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                    <FolderOpen className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-brand-600">
                      <span>Lớp {group.grade_number}</span>
                      <span className="text-slate-300">•</span>
                      <span>{group.chapter_code}</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-rose-600">
                        {group.topicGroups.length} chủ đề ({group.items.length} câu)
                      </span>
                    </div>
                    <h2 className="mt-0.5 text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">
                      {group.chapter_title}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/chapter/${group.chapter_id}`}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
                  >
                    Tóm tắt chương
                  </Link>
                  {!showMastered && (
                    <button
                      type="button"
                      onClick={() => handleStartPractice(group.items)}
                      className="edu-btn-primary px-3.5 py-1.5 text-xs"
                    >
                      <Play className="h-3.5 w-3.5 fill-current" />
                      <span>Ôn cả chương ({group.items.length} câu)</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Topic Sub-sections inside Chapter */}
              <div className="space-y-6 bg-slate-50/30 p-4 sm:p-6">
                {group.topicGroups.map((tGroup) => (
                  <div key={tGroup.key} className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-soft">
                    {/* Topic Sub-header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/70 bg-brand-50/50 px-5 py-3">
                      <div className="flex items-center gap-2.5">
                        <FileText className="h-4 w-4 shrink-0 text-brand-600" />
                        <h3 className="text-sm font-extrabold text-slate-900">{tGroup.topic_title}</h3>
                        <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[11px] font-bold text-rose-700">
                          {tGroup.items.length} câu
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        {tGroup.topic_id ? (
                          <Link
                            href={`/topic/${tGroup.topic_id}`}
                            className="rounded-lg border border-brand-200/80 bg-white px-2.5 py-1 text-xs font-bold text-brand-600 transition hover:bg-brand-50"
                          >
                            Xem lại lý thuyết bài này →
                          </Link>
                        ) : (
                          <Link
                            href={`/chapter/${group.chapter_id}`}
                            className="rounded-lg border border-amber-200 bg-white px-2.5 py-1 text-xs font-bold text-amber-700 transition hover:bg-amber-50"
                          >
                            Mở đề tổng hợp chương →
                          </Link>
                        )}
                        {!showMastered && (
                          <button
                            type="button"
                            onClick={() => handleStartPractice(tGroup.items)}
                            className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-3 py-1 text-xs font-bold text-white shadow-soft transition hover:bg-slate-800"
                          >
                            <Play className="h-3 w-3 fill-current" />
                            <span>Ôn riêng chủ đề này ({tGroup.items.length})</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Questions inside this Topic */}
                    <div className="divide-y divide-slate-100">
                      {tGroup.items.map((q, idx) => {
                        const isExpanded = !!expandedExplanations[q.id];
                        const wrongLetter =
                          q.last_wrong_option >= 0 && q.last_wrong_option <= 3
                            ? ['A', 'B', 'C', 'D'][q.last_wrong_option]
                            : 'Bỏ trống';
                        const rightLetter = ['A', 'B', 'C', 'D'][q.correct_index] || 'A';

                        return (
                          <div key={q.id} className="space-y-3.5 p-5">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="flex flex-wrap items-center gap-2 text-xs">
                                <span className="rounded-md bg-slate-800 px-2 py-0.5 font-bold text-white">
                                  Câu {idx + 1}
                                </span>
                                <span className="rounded-md bg-slate-100 px-2 py-0.5 font-medium text-slate-600">
                                  Mức độ: {DIFF_LABELS[q.difficulty] || q.difficulty}
                                </span>
                                <span className="rounded-md bg-rose-50 px-2 py-0.5 font-bold text-rose-700">
                                  Sai {q.wrong_count} lần (Đã chọn: {wrongLetter})
                                </span>
                              </div>

                              <div className="flex items-center gap-2">
                                {!showMastered && (
                                  <button
                                    type="button"
                                    onClick={() => handleSingleAction(q.id, 'master')}
                                    className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100"
                                    title="Đánh dấu đã thuộc câu này"
                                  >
                                    <CheckCircle2 className="h-3.5 w-3.5" /> Đã thuộc
                                  </button>
                                )}
                                <button
                                  type="button"
                                  onClick={() => handleSingleAction(q.id, 'delete')}
                                  className="rounded-lg p-1.5 text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
                                  title="Xóa khỏi sổ tay"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </div>

                            <div className="text-sm font-semibold leading-relaxed text-slate-900 sm:text-base">
                              <RichPhysicsText text={q.question_text} />
                            </div>

                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                              {q.options.map((opt, oIdx) => {
                                const letter = ['A', 'B', 'C', 'D'][oIdx];
                                const isWrongChoice = oIdx === q.last_wrong_option;
                                const isCorrectChoice = oIdx === q.correct_index;

                                return (
                                  <div
                                    key={oIdx}
                                    className={`flex items-start gap-2.5 rounded-xl border p-3 text-xs sm:text-sm ${
                                      isExpanded && isCorrectChoice
                                        ? 'border-emerald-400 bg-emerald-50/70 font-semibold text-emerald-950'
                                        : isWrongChoice
                                          ? 'border-rose-300 bg-rose-50/60 text-rose-900'
                                          : 'border-slate-200/80 bg-slate-50/40 text-slate-700'
                                    }`}
                                  >
                                    <span
                                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded text-[11px] font-bold ${
                                        isExpanded && isCorrectChoice
                                          ? 'bg-emerald-600 text-white'
                                          : isWrongChoice
                                            ? 'bg-rose-500 text-white'
                                            : 'bg-slate-200 text-slate-700'
                                      }`}
                                    >
                                      {letter}
                                    </span>
                                    <span className="flex-1">
                                      <RichPhysicsText text={opt} />
                                    </span>
                                  </div>
                                );
                              })}
                            </div>

                            <div>
                              <button
                                type="button"
                                onClick={() => handleToggleExplanation(q.id)}
                                className="text-xs font-bold text-brand-600 transition hover:text-brand-800"
                              >
                                {isExpanded
                                  ? '▲ Ẩn đáp án đúng & lời giải'
                                  : '▼ Xem đáp án đúng & lời giải chi tiết'}
                              </button>

                              {isExpanded && (
                                <div className="animate-fade-in mt-2.5 space-y-1 rounded-xl border border-slate-200/80 bg-slate-50 p-3.5 text-xs text-slate-700 sm:text-sm">
                                  <div>
                                    <strong className="text-emerald-700">Đáp án đúng: {rightLetter}</strong>
                                  </div>
                                  <div>
                                    <strong className="text-slate-900">Giải thích: </strong>
                                    <RichPhysicsText text={q.explanation} />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MistakeQuestionItem, QuestionType } from '@/types/cms';
import { RichPhysicsText } from './KatexRenderer';
import { DropdownMenu, DropdownItem } from './ui/DropdownMenu';
import {
  classifyQuestionFormat,
  prepareQuestionFor2025,
  calculateTrueFalseScore,
  checkShortAnswer,
  generateIndependentTrueFalseStatements,
} from '@/lib/format2025-adapter';
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
  CheckSquare,
  Award,
  GitBranch,
  Brain,
} from 'lucide-react';
import { detectCognitiveTrap, COGNITIVE_TRAP_REGISTRY, pickRepresentativeTrapOption } from '@/lib/cognitive-traps';

const DIFF_LABELS: Record<string, string> = {
  nhan_biet: 'Nhận biết',
  thong_hieu: 'Thông hiểu',
  van_dung: 'Vận dụng',
  van_dung_cao: 'Vận dụng cao',
};

interface TopicSubGroup {
  key: string;
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
  const [formatFilter, setFormatFilter] = useState<'all' | QuestionType>('all');

  // Practice state
  const [practiceQuestions, setPracticeQuestions] = useState<MistakeQuestionItem[] | null>(null);
  const [practiceMode, setPracticeMode] = useState<'format2025' | 'standard'>('format2025');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [submitted, setSubmitted] = useState(false);
  const [expandedExplanations, setExpandedExplanations] = useState<Record<number, boolean>>({});

  // Format statistics
  const formatStats = useMemo(() => {
    let mc = 0;
    let tf = 0;
    let sa = 0;
    for (const m of mistakes) {
      const type = classifyQuestionFormat(m);
      if (type === 'multiple_choice') mc++;
      else if (type === 'true_false') tf++;
      else if (type === 'short_answer') sa++;
    }
    return {
      all: mistakes.length,
      multiple_choice: mc,
      true_false: tf,
      short_answer: sa,
    };
  }, [mistakes]);

  // Build 3-level hierarchy: Grade -> Chapter -> Topic (with format filter applied)
  const chapterGroups: ChapterGroup[] = useMemo(() => {
    const map = new Map<number, ChapterGroup>();

    const filteredByFormat = formatFilter === 'all'
      ? mistakes
      : mistakes.filter((m) => classifyQuestionFormat(m) === formatFilter);

    for (const m of filteredByFormat) {
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
  }, [mistakes, formatFilter]);

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
    selectedGrade || selectedChapterId !== 'all' || selectedTopicKey !== 'all' || formatFilter !== 'all'
  );

  // Dropdown Items for Grade
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

  // Dropdown Items for Chapter
  const chapterDropdownItems = useMemo<DropdownItem[]>(() => {
    const items: DropdownItem[] = [
      {
        label: 'Tất cả các chương',
        active: selectedChapterId === 'all',
        badge: filteredMistakes.length,
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
  }, [selectedChapterId, filteredMistakes.length, chapterGroups, selectedGrade]);

  // Dropdown Items for Topic
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

  // Dropdown Items for Format Filter
  const formatDropdownItems = useMemo<DropdownItem[]>(() => {
    return [
      {
        label: 'Tất cả định dạng',
        active: formatFilter === 'all',
        badge: formatStats.all,
        onClick: () => setFormatFilter('all'),
      },
      { label: '', divider: true },
      {
        label: 'Phần I: 4 Lựa chọn (A-B-C-D)',
        active: formatFilter === 'multiple_choice',
        badge: formatStats.multiple_choice,
        onClick: () => setFormatFilter('multiple_choice'),
      },
      {
        label: 'Phần II: Đúng / Sai (Format 2025)',
        active: formatFilter === 'true_false',
        badge: formatStats.true_false,
        onClick: () => setFormatFilter('true_false'),
      },
      {
        label: 'Phần III: Điền số ngắn (Format 2025)',
        active: formatFilter === 'short_answer',
        badge: formatStats.short_answer,
        onClick: () => setFormatFilter('short_answer'),
      },
    ];
  }, [formatFilter, formatStats]);

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

  // Start Practice with explicit mode
  const handleStartPractice = (
    subset?: MistakeQuestionItem[],
    targetMode: 'format2025' | 'standard' = 'format2025'
  ) => {
    let list = subset && subset.length > 0 ? subset : filteredMistakes;
    if (list.length === 0) return;

    setPracticeMode(targetMode);

    if (targetMode === 'format2025') {
      list = list.map((q) => prepareQuestionFor2025(q) as MistakeQuestionItem);
      // Group by Part I (multiple_choice) -> Part II (true_false) -> Part III (short_answer)
      const rank: Record<string, number> = { multiple_choice: 1, true_false: 2, short_answer: 3 };
      list = [...list].sort(
        (a, b) =>
          (rank[a.question_type || 'multiple_choice'] || 1) -
          (rank[b.question_type || 'multiple_choice'] || 1)
      );
    } else {
      list = list.map((q) => ({
        ...q,
        question_type: 'multiple_choice' as const,
        tf_statements: undefined,
        short_answer: undefined,
      }));
    }

    setAnswers({});
    setSubmitted(false);
    setCurrentIdx(0);
    setPracticeQuestions(list);
  };

  // Check correctness of a question in practice mode
  const evaluatePracticeQuestion = (q: MistakeQuestionItem, ans: any): boolean => {
    const type = q.question_type || 'multiple_choice';
    if (type === 'multiple_choice') {
      return Number(ans) === q.correct_index;
    }
    if (type === 'true_false') {
      if (!q.tf_statements || !ans) return false;
      const { correctCount } = calculateTrueFalseScore(q.tf_statements, ans);
      return correctCount >= 3; // Đúng 3 hoặc 4 ý coi như đạt
    }
    if (type === 'short_answer') {
      return checkShortAnswer(ans, q.short_answer).isCorrect;
    }
    return false;
  };

  // Submit Practice
  const handleSubmitPractice = async () => {
    if (submitted || !practiceQuestions) return;
    setSubmitted(true);

    const results = practiceQuestions.map((q) => {
      const userAns = answers[q.id];
      const isCorrect = evaluatePracticeQuestion(q, userAns);
      return {
        questionId: q.id,
        correct: isCorrect,
        selectedOption: typeof userAns === 'number' ? userAns : -1,
      };
    });

    await fetch('/api/mistakes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ results }),
    });
    router.refresh();
  };

  // ----------------------------------------------------
  // INTERACTIVE PRACTICE VIEW FOR WRONG QUESTIONS
  // ----------------------------------------------------
  if (practiceQuestions && practiceQuestions.length > 0) {
    const q = practiceQuestions[currentIdx] || practiceQuestions[0];
    const total = practiceQuestions.length;
    const answeredCount = Object.keys(answers).length;
    const userChoice = answers[q.id];
    const isCorrect = submitted && evaluatePracticeQuestion(q, userChoice);
    const score = submitted
      ? practiceQuestions.filter((m) => evaluatePracticeQuestion(m, answers[m.id])).length
      : 0;
    const practicePct = Math.round((answeredCount / total) * 100);
    const qType = q.question_type || 'multiple_choice';

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
              Đã làm:{' '}
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

        {/* Progress Bar */}
        <div className="edu-progress">
          <div className="edu-progress-bar" style={{ width: `${practicePct}%` }} />
        </div>

        {/* Mode Banner */}
        <div
          className={`flex flex-wrap items-center justify-between gap-3 rounded-2xl border p-4 text-xs ${
            practiceMode === 'format2025'
              ? 'border-purple-200 bg-purple-50/90 text-purple-950'
              : 'border-slate-200 bg-slate-100 text-slate-800'
          }`}
        >
          <div className="flex items-center gap-2">
            {practiceMode === 'format2025' ? (
              <>
                <Sparkles className="h-4 w-4 shrink-0 text-purple-600" />
                <span>
                  Đang làm bài theo <strong>Cấu trúc Đổi mới 2025 (Bộ GD&ĐT)</strong> • Gồm 3 phần: 4 Lựa chọn (Xanh), Đúng/Sai (Tím) &amp; Điền số (Cam)
                </span>
              </>
            ) : (
              <>
                <CheckSquare className="h-4 w-4 shrink-0 text-slate-600" />
                <span>
                  Đang làm bài theo <strong>Dạng Trắc nghiệm Truyền thống</strong> • Tất cả câu hỏi đều hiển thị 4 lựa chọn (A, B, C, D)
                </span>
              </>
            )}
          </div>
          <span className="rounded-lg bg-white/90 px-2.5 py-1 text-[11px] font-extrabold text-slate-700 shadow-2xs">
            Tổng cộng {total} câu
          </span>
        </div>

        {/* Question Number Strip 1..N with colored dots */}
        <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-bold text-slate-700">Dải số chuyển câu (Bấm để chọn câu bất kỳ):</span>
            {practiceMode === 'format2025' && (
              <div className="flex flex-wrap items-center gap-3 text-[11px]">
                <span className="flex items-center gap-1 font-semibold text-brand-700">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-500" /> 4 Lựa chọn
                </span>
                <span className="flex items-center gap-1 font-semibold text-purple-700">
                  <span className="h-2.5 w-2.5 rounded-full bg-purple-500" /> Đúng / Sai
                </span>
                <span className="flex items-center gap-1 font-semibold text-amber-700">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500" /> Điền số
                </span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pt-1">
            {practiceQuestions.map((item, idx) => {
              const isCur = currentIdx === idx;
              const itemType = item.question_type || 'multiple_choice';
              const ans = answers[item.id];
              const isAns =
                ans !== undefined &&
                ans !== null &&
                (typeof ans !== 'object' || Object.keys(ans).length > 0);
              const isRight = submitted && evaluatePracticeQuestion(item, ans);
              const isWrong = submitted && !isRight;

              let btnClass = 'bg-slate-100 text-slate-700 hover:bg-slate-200';
              if (!submitted) {
                if (isCur) {
                  btnClass = 'bg-slate-900 text-white font-extrabold ring-2 ring-brand-400';
                } else if (isAns) {
                  btnClass = 'border border-brand-300 bg-brand-50 text-brand-800 font-bold';
                } else if (practiceMode === 'format2025') {
                  if (itemType === 'true_false')
                    btnClass = 'border border-purple-200 bg-purple-50/70 text-purple-700 font-semibold';
                  else if (itemType === 'short_answer')
                    btnClass = 'border border-amber-200 bg-amber-50/70 text-amber-800 font-semibold';
                }
              } else {
                if (isRight) btnClass = 'bg-emerald-600 text-white font-bold';
                else if (isWrong) btnClass = 'bg-rose-500 text-white font-bold';
              }

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentIdx(idx)}
                  className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs transition duration-150 ${btnClass}`}
                  title={`Câu ${idx + 1}: ${
                    itemType === 'multiple_choice'
                      ? '4 Lựa chọn'
                      : itemType === 'true_false'
                        ? 'Đúng/Sai'
                        : 'Điền số'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Question Card */}
        <div className="edu-card space-y-6 p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="flex items-center gap-1 rounded-lg bg-brand-50 px-2.5 py-1 font-extrabold text-brand-700">
                <Target className="h-3.5 w-3.5" />
                Câu {currentIdx + 1} / {total}
              </span>
              <span className="rounded-lg bg-slate-100 px-2.5 py-1 font-medium text-slate-600">
                Lớp {q.grade_number} • {q.chapter_title} ({q.topic_code || q.chapter_code})
              </span>
              <span className="rounded-lg bg-rose-50 px-2.5 py-1 font-bold text-rose-700">
                Đã sai {q.wrong_count} lần
              </span>

              {/* Format Badge */}
              <span
                className={`rounded-md border px-2 py-0.5 font-bold ${
                  qType === 'multiple_choice'
                    ? 'border-brand-200 bg-brand-50 text-brand-700'
                    : qType === 'true_false'
                      ? 'border-purple-200 bg-purple-50 text-purple-700'
                      : 'border-amber-200 bg-amber-50 text-amber-800'
                }`}
              >
                {qType === 'multiple_choice'
                  ? 'Phần I: 4 Lựa chọn'
                  : qType === 'true_false'
                    ? 'Phần II: Đúng / Sai'
                    : 'Phần III: Điền số ngắn'}
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

          {/* DẠNG 1: TRẮC NGHIỆM 4 LỰA CHỌN */}
          {qType === 'multiple_choice' && (
            <div className="grid grid-cols-1 gap-2.5">
              {q.options.map((opt, optIdx) => {
                const letter = ['A', 'B', 'C', 'D'][optIdx] || 'A';
                const isSelected = userChoice === optIdx;
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
          )}

          {/* DẠNG 2: ĐÚNG / SAI (4 Ý) */}
          {qType === 'true_false' && q.tf_statements && (
            <div className="space-y-3">
              <div className="rounded-xl border border-purple-100 bg-purple-50/40 px-3.5 py-2 text-xs text-purple-900">
                💡 <strong>Format 2025:</strong> Đọc từng ý và chọn [Đúng] hoặc [Sai].
              </div>

              <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white">
                {q.tf_statements.map((st) => {
                  const userTf = (userChoice as Record<string, boolean>) || {};
                  const selectedVal = userTf[st.id];
                  const isMatch = submitted && selectedVal === st.is_correct;

                  return (
                    <div
                      key={st.id}
                      className={`flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between ${
                        submitted
                          ? isMatch
                            ? 'bg-emerald-50/30'
                            : 'bg-rose-50/20'
                          : ''
                      }`}
                    >
                      <div className="space-y-1 sm:max-w-[70%]">
                        <div className="flex items-start gap-2 text-sm text-slate-800">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-purple-100 text-xs font-extrabold text-purple-800">
                            {st.id})
                          </span>
                          <div className="leading-relaxed">
                            <RichPhysicsText text={st.text} />
                          </div>
                        </div>
                        {submitted && (
                          <div className="ml-7 text-[11px] font-medium text-slate-500">
                            Đáp án:{' '}
                            <strong className={st.is_correct ? 'text-emerald-700' : 'text-rose-700'}>
                              {st.is_correct ? 'ĐÚNG' : 'SAI'}
                            </strong>
                          </div>
                        )}
                      </div>

                      <div className="flex shrink-0 items-center gap-2">
                        <button
                          type="button"
                          disabled={submitted}
                          onClick={() => {
                            setAnswers((prev) => ({
                              ...prev,
                              [q.id]: { ...(prev[q.id] || {}), [st.id]: true },
                            }));
                          }}
                          className={`rounded-xl px-4 py-1.5 text-xs font-bold transition ${
                            selectedVal === true
                              ? 'bg-blue-600 text-white shadow-soft'
                              : 'border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          Đúng
                        </button>
                        <button
                          type="button"
                          disabled={submitted}
                          onClick={() => {
                            setAnswers((prev) => ({
                              ...prev,
                              [q.id]: { ...(prev[q.id] || {}), [st.id]: false },
                            }));
                          }}
                          className={`rounded-xl px-4 py-1.5 text-xs font-bold transition ${
                            selectedVal === false
                              ? 'bg-purple-600 text-white shadow-soft'
                              : 'border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          Sai
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* DẠNG 3: TRẢ LỜI NGẮN (ĐIỀN SỐ) */}
          {qType === 'short_answer' && (
            <div className="space-y-3.5">
              <div className="rounded-xl border border-amber-100 bg-amber-50/40 px-3.5 py-2 text-xs text-amber-900">
                ✍️ <strong>Format 2025:</strong> Tự tính toán và điền đáp số vào ô bên dưới.
                {q.short_answer?.unit && <span> Đơn vị đo: <strong className="text-amber-950">{q.short_answer.unit}</strong>.</span>}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative flex-1">
                  <input
                    type="text"
                    disabled={submitted}
                    value={userChoice !== undefined ? String(userChoice) : ''}
                    onChange={(e) => setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))}
                    placeholder="Nhập kết quả tính toán"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base font-bold text-slate-900 shadow-soft placeholder:font-normal focus:border-brand-500 focus:outline-none"
                  />
                  {q.short_answer?.unit && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">
                      {q.short_answer.unit}
                    </span>
                  )}
                </div>

                {!submitted && (
                  <div className="flex flex-wrap gap-1.5">
                    {['-', '.', '0', '1', '2', '5'].map((sym) => (
                      <button
                        key={sym}
                        type="button"
                        onClick={() => {
                          const cur = userChoice !== undefined ? String(userChoice) : '';
                          setAnswers((prev) => ({ ...prev, [q.id]: cur + sym }));
                        }}
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-700 hover:bg-slate-100"
                      >
                        {sym}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: '' }))}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-100"
                    >
                      Xóa
                    </button>
                  </div>
                )}
              </div>

              {submitted && q.short_answer && (
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-800">Đáp án chuẩn:</span>
                    <strong className="text-emerald-700 text-sm">
                      {q.short_answer.target_value} {q.short_answer.unit || ''}
                    </strong>
                  </div>
                </div>
              )}
            </div>
          )}

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

  // ----------------------------------------------------
  // MAIN NOTEBOOK LIST VIEW
  // ----------------------------------------------------
  return (
    <div className="edu-page-shell">
      {/* Hero Banner */}
      <div className="edu-hero-aurora p-6 sm:p-9">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 animate-blob rounded-full bg-rose-500/25 blur-3xl" />
        <div
          className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 animate-blob rounded-full bg-indigo-500/25 blur-3xl"
          style={{ animationDelay: '3s' }}
        />

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-400/35 bg-rose-500/20 px-3.5 py-1 text-xs font-extrabold text-rose-200">
              <AlertCircle className="h-4 w-4 text-rose-300" />
              <span>SỔ TAY ÔN TẬP THÔNG MINH • LỌC THEO ĐỊNH DẠNG 2025 &amp; KHỐI LỚP</span>
            </div>
            <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Sổ Tay Câu Hỏi Làm Sai &amp; Luyện Tập Khắc Phục
            </h1>
            <p className="max-w-2xl text-xs leading-relaxed text-indigo-100/85 sm:text-sm">
              Tự động phân loại câu sai theo <strong className="text-white">Định dạng thi mới 2025</strong> (4 lựa chọn, Đúng/Sai, Điền số),{' '}
              <strong className="text-white">Khối lớp</strong>,{' '}
              <strong className="text-white">Chương</strong> và{' '}
              <strong className="text-white">Chủ đề</strong>.
            </p>
          </div>

          {!showMastered && filteredMistakes.length > 0 && (
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => handleStartPractice(filteredMistakes, 'format2025')}
                className="edu-btn-primary px-4 py-2.5 text-xs shadow-glow"
              >
                <Sparkles className="h-4 w-4 fill-current text-amber-300" />
                <span>Luyện Format 2025 ({filteredMistakes.length} câu)</span>
              </button>

              <button
                type="button"
                onClick={() => handleStartPractice(filteredMistakes, 'standard')}
                className="rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-xs font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Luyện 4 lựa chọn
              </button>

              <Link
                href="/cognitive-traps"
                className="inline-flex items-center gap-1.5 rounded-xl border border-rose-400/40 bg-rose-500/20 px-3.5 py-2.5 text-xs font-bold text-rose-200 backdrop-blur transition hover:bg-rose-500/30"
              >
                <Brain className="h-4 w-4 text-rose-300" />
                <span>Ma trận Bẫy Nhận thức</span>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Filter Bar */}
      <div className="edu-card space-y-4 p-5">
        {/* Toolbar: Status Switcher & Dropdown Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3">
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
            {/* Filter: Format 2025 / Traditional */}
            <DropdownMenu
              menuWidth="w-64"
              align="left"
              trigger={
                <button
                  type="button"
                  className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-bold transition duration-150 ease-snap ${
                    formatFilter !== 'all'
                      ? 'border-purple-500 bg-purple-50 text-purple-900 shadow-2xs'
                      : 'border-slate-200/90 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 shadow-2xs'
                  }`}
                >
                  <CheckSquare
                    className={`h-4 w-4 shrink-0 ${formatFilter !== 'all' ? 'text-purple-600' : 'text-slate-400'}`}
                  />
                  <span>
                    {formatFilter === 'all'
                      ? 'Tất cả định dạng'
                      : formatFilter === 'multiple_choice'
                        ? 'Phần I: 4 Lựa chọn'
                        : formatFilter === 'true_false'
                          ? 'Phần II: Đúng / Sai'
                          : 'Phần III: Điền số'}
                  </span>
                  <ChevronDown className="h-3.5 w-3.5 text-slate-400 shrink-0 ml-0.5" />
                </button>
              }
              items={formatDropdownItems}
            />

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
                  setFormatFilter('all');
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
            {formatFilter !== 'all' && (
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-purple-50 px-2.5 py-1 font-bold text-purple-800">
                <span>
                  {formatFilter === 'multiple_choice'
                    ? '4 Lựa chọn'
                    : formatFilter === 'true_false'
                      ? 'Đúng / Sai'
                      : 'Điền số'}
                </span>
                <button
                  type="button"
                  onClick={() => setFormatFilter('all')}
                  className="rounded hover:bg-purple-100 text-purple-500 hover:text-purple-900"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
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
              : 'Tuyệt vời! Không có câu hỏi nào đang làm sai'}
          </h3>
          <p className="mx-auto max-w-md text-xs leading-relaxed text-slate-500 sm:text-sm">
            {showMastered
              ? 'Khi bạn làm lại đúng các câu hỏi trong mục Cần ôn lại, chúng sẽ được chuyển sang đây.'
              : 'Hãy vào học các chủ đề từ Lớp 6 đến Lớp 12 và làm bài kiểm tra. Những câu bạn làm sai sẽ tự động phân loại theo định dạng và chủ đề tại đây.'}
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
                      onClick={() => handleStartPractice(group.items, 'format2025')}
                      className="edu-btn-primary px-3.5 py-1.5 text-xs"
                    >
                      <Sparkles className="h-3.5 w-3.5 text-amber-300" />
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
                        {tGroup.topic_code && (
                          <Link
                            href={`/knowledge-graph?focus=${tGroup.topic_code}`}
                            className="inline-flex items-center gap-1 rounded-lg border border-purple-200 bg-purple-50/80 px-2.5 py-1 text-xs font-bold text-purple-700 transition hover:bg-purple-100"
                          >
                            <GitBranch className="h-3 w-3" />
                            <span>Truy vết lỗ hổng gốc</span>
                          </Link>
                        )}
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
                            onClick={() => handleStartPractice(tGroup.items, 'format2025')}
                            className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-3 py-1 text-xs font-bold text-white shadow-soft transition hover:bg-slate-800"
                          >
                            <Sparkles className="h-3 w-3 text-amber-300" />
                            <span>Ôn chủ đề này ({tGroup.items.length})</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Questions inside this Topic */}
                    <div className="divide-y divide-slate-100">
                      {tGroup.items.map((q, idx) => {
                        const isExpanded = !!expandedExplanations[q.id];
                        const qFormat = classifyQuestionFormat(q);
                        const hasPickedWrong = q.last_wrong_option >= 0 && q.last_wrong_option <= 3;
                        const effectiveWrongOpt = hasPickedWrong
                          ? q.last_wrong_option
                          : pickRepresentativeTrapOption(q);
                        const wrongLetter = hasPickedWrong
                          ? `Đã chọn: ${['A', 'B', 'C', 'D'][q.last_wrong_option]}`
                          : 'Đã chọn: Bỏ trống';
                        const rightLetter = ['A', 'B', 'C', 'D'][q.correct_index] || 'A';
                        const trap = detectCognitiveTrap(q, q.last_wrong_option);
                        const trapMeta = COGNITIVE_TRAP_REGISTRY[trap.trapType];

                        return (
                          <div key={q.id} className="space-y-3.5 p-5">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="flex flex-wrap items-center gap-2 text-xs">
                                <span className="rounded-md bg-slate-800 px-2 py-0.5 font-bold text-white">
                                  Câu {idx + 1}
                                </span>

                                {/* Format Badge */}
                                <span
                                  className={`rounded-md border px-2 py-0.5 font-bold ${
                                    qFormat === 'multiple_choice'
                                      ? 'border-brand-200 bg-brand-50 text-brand-700'
                                      : qFormat === 'true_false'
                                        ? 'border-purple-200 bg-purple-50 text-purple-700'
                                        : 'border-amber-200 bg-amber-50 text-amber-800'
                                  }`}
                                >
                                  {qFormat === 'multiple_choice'
                                    ? 'Phần I: 4 Lựa chọn'
                                    : qFormat === 'true_false'
                                      ? 'Phần II: Đúng / Sai'
                                      : 'Phần III: Điền số'}
                                </span>

                                <span className="rounded-md bg-slate-100 px-2 py-0.5 font-medium text-slate-600">
                                  Mức độ: {DIFF_LABELS[q.difficulty] || q.difficulty}
                                </span>

                                <span className="rounded-md bg-rose-50 px-2 py-0.5 font-bold text-rose-700">
                                  Sai {q.wrong_count} lần ({wrongLetter})
                                </span>

                                <span className={`rounded-md border px-2 py-0.5 font-bold text-xs ${trapMeta.badgeCls}`}>
                                  {trapMeta.icon} {trapMeta.name}
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

                            {/* Dynamic rendering based on question format */}
                            {qFormat === 'multiple_choice' && (
                              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                {q.options.map((opt, oIdx) => {
                                  const letter = ['A', 'B', 'C', 'D'][oIdx];
                                  const isWrongChoice = oIdx === q.last_wrong_option;
                                  const isTrapWarning = isExpanded && !hasPickedWrong && oIdx === effectiveWrongOpt;
                                  const isCorrectChoice = oIdx === q.correct_index;

                                  return (
                                    <div
                                      key={oIdx}
                                      className={`flex items-start gap-2.5 rounded-xl border p-3 text-xs sm:text-sm ${
                                        isExpanded && isCorrectChoice
                                          ? 'border-emerald-400 bg-emerald-50/70 font-semibold text-emerald-950'
                                          : isWrongChoice
                                            ? 'border-rose-300 bg-rose-50/60 text-rose-900'
                                            : isTrapWarning
                                              ? 'border-amber-300 bg-amber-50/60 text-amber-950'
                                              : 'border-slate-200/80 bg-slate-50/40 text-slate-700'
                                      }`}
                                    >
                                      <span
                                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded text-[11px] font-bold ${
                                          isExpanded && isCorrectChoice
                                            ? 'bg-emerald-600 text-white'
                                            : isWrongChoice
                                              ? 'bg-rose-500 text-white'
                                              : isTrapWarning
                                                ? 'bg-amber-500 text-white'
                                                : 'bg-slate-200 text-slate-700'
                                        }`}
                                      >
                                        {letter}
                                      </span>
                                      <span className="flex-1">
                                        <RichPhysicsText text={opt} />
                                        {isTrapWarning && (
                                          <span className="ml-1.5 text-[11px] font-bold text-amber-700">
                                            ⚠️ Bẫy dễ nhầm
                                          </span>
                                        )}
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                            )}

                            {qFormat === 'true_false' && (() => {
                              const tfStatements = q.tf_statements || generateIndependentTrueFalseStatements(q);
                              return (
                                <div className="space-y-2 rounded-2xl border border-purple-100 bg-purple-50/30 p-3.5">
                                  <div className="flex items-center justify-between text-xs font-bold text-purple-900">
                                    <span>4 Mệnh đề độc lập (Mỗi ý đánh giá Đúng hoặc Sai):</span>
                                  </div>
                                  <div className="grid grid-cols-1 gap-2">
                                    {tfStatements.map((st) => (
                                      <div
                                        key={st.id}
                                        className={`flex flex-col gap-1.5 rounded-xl border p-3 text-xs sm:text-sm transition ${
                                          isExpanded
                                            ? st.is_correct
                                              ? 'border-emerald-200 bg-emerald-50/60'
                                              : 'border-rose-200 bg-rose-50/50'
                                            : 'border-slate-200/80 bg-white'
                                        }`}
                                      >
                                        <div className="flex items-start justify-between gap-3">
                                          <div className="flex items-start gap-2.5">
                                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-purple-100 text-xs font-extrabold text-purple-800">
                                              {st.id})
                                            </span>
                                            <div className="text-slate-800 leading-relaxed">
                                              <RichPhysicsText text={st.text} />
                                            </div>
                                          </div>
                                          {isExpanded && (
                                            <span
                                              className={`shrink-0 rounded-lg px-2.5 py-1 text-xs font-extrabold ${
                                                st.is_correct
                                                  ? 'bg-emerald-600 text-white shadow-2xs'
                                                  : 'bg-rose-600 text-white shadow-2xs'
                                              }`}
                                            >
                                              {st.is_correct ? 'ĐÚNG' : 'SAI'}
                                            </span>
                                          )}
                                        </div>
                                        {isExpanded && st.explanation && (
                                          <div className="ml-7 text-[11px] font-medium text-slate-600">
                                            💡 {st.explanation}
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              );
                            })()}

                            {qFormat === 'short_answer' && (
                              <div className="rounded-2xl border border-amber-200/80 bg-amber-50/40 p-4 text-xs sm:text-sm">
                                <div className="flex items-center gap-2 font-bold text-amber-900">
                                  <Target className="h-4 w-4 text-amber-600" />
                                  <span>Bài toán Điền số tự luận (Không có phương án lựa chọn A, B, C, D)</span>
                                </div>
                                <p className="mt-1 text-xs text-amber-800/80 leading-relaxed">
                                  Theo định dạng Phần III Đề thi chuẩn 2025: Thí sinh tự tính toán từ dữ kiện đề bài và điền kết quả số kèm đơn vị tương ứng.
                                </p>
                              </div>
                            )}

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
                                <div className="animate-fade-in mt-2.5 space-y-1.5 rounded-xl border border-slate-200/80 bg-slate-50 p-3.5 text-xs text-slate-700 sm:text-sm">
                                  {qFormat === 'multiple_choice' && (
                                    <div>
                                      <strong className="text-emerald-700">Đáp án đúng: {rightLetter}</strong> ({q.options[q.correct_index]})
                                    </div>
                                  )}
                                  {qFormat === 'short_answer' && (
                                    <div>
                                      <strong className="text-emerald-700">Đáp số chính xác: </strong>
                                      <span className="font-extrabold text-emerald-950 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                                        {q.options[q.correct_index]}
                                      </span>
                                    </div>
                                  )}
                                  <div>
                                    <strong className="text-slate-900">Giải thích / Lời giải chi tiết: </strong>
                                    <RichPhysicsText text={q.explanation} />
                                  </div>

                                  <div className="mt-3 rounded-xl border border-indigo-100 bg-indigo-50/80 p-3 space-y-1 text-xs text-indigo-950">
                                    <div className="flex items-center gap-1.5 font-black text-indigo-900">
                                      <Brain className="h-4 w-4 text-indigo-600" />
                                      <span>🩺 Chẩn đoán Bẫy Nhận thức:</span>
                                    </div>
                                    <p className="leading-relaxed">{trap.diagnosis}</p>
                                    <div className="text-[11px] text-indigo-800 font-medium pt-1.5 border-t border-indigo-200/50">
                                      💡 <strong>Bí kíp né bẫy:</strong> {trap.remedyTip}
                                    </div>
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

'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MistakeQuestionItem } from '@/types/cms';
import { RichPhysicsText } from './KatexRenderer';
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

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-4 sm:px-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPracticeQuestions(null)}
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Thoát luyện tập
            </button>
            <span className="text-xs font-medium text-slate-500">
              Đã chọn: <strong className="text-slate-900">{answeredCount}/{total}</strong> câu
            </span>
            {submitted && (
              <span className="px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                Khắc phục thành công: {score}/{total} câu
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {!submitted ? (
              <button
                type="button"
                onClick={handleSubmitPractice}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-sm transition"
              >
                Nộp bài & Cập nhật sổ tay
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setPracticeQuestions(null);
                  router.refresh();
                }}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition"
              >
                <CheckCircle2 className="w-3.5 h-3.5" /> Xem lại Sổ tay đã cập nhật
              </button>
            )}
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 font-bold text-xs">
                Câu {currentIdx + 1} / {total}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium">
                Lớp {q.grade_number} • {q.chapter_title} ({q.topic_code || q.chapter_code})
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 text-xs font-semibold">
                Đã sai {q.wrong_count} lần
              </span>
            </div>

            {submitted && (
              <span
                className={`inline-flex items-center gap-1 text-xs font-bold ${
                  isCorrect ? 'text-emerald-600' : 'text-rose-600'
                }`}
              >
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" /> Đã nắm vững! (Tự động chuyển sang Đã thuộc)
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4" /> Vẫn chưa đúng
                  </>
                )}
              </span>
            )}
          </div>

          <div className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed">
            <RichPhysicsText text={q.question_text} />
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {q.options.map((opt, optIdx) => {
              const letter = ['A', 'B', 'C', 'D'][optIdx] || 'A';
              const isSelected = selectedOpt === optIdx;
              const isRightAnswer = q.correct_index === optIdx;

              let btnStyle =
                'border-slate-200 bg-white hover:bg-slate-50/80 hover:border-slate-300 text-slate-800';
              if (!submitted && isSelected) {
                btnStyle = 'border-indigo-600 bg-indigo-50/70 text-indigo-950 ring-1 ring-indigo-600';
              } else if (submitted) {
                if (isRightAnswer) {
                  btnStyle = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-medium';
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
                  className={`w-full text-left p-3.5 rounded-xl border transition flex items-start gap-3 text-sm ${btnStyle}`}
                >
                  <span
                    className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                      !submitted && isSelected
                        ? 'bg-indigo-600 text-white'
                        : submitted && isRightAnswer
                        ? 'bg-emerald-600 text-white'
                        : submitted && isSelected && !isRightAnswer
                        ? 'bg-rose-600 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {letter}
                  </span>
                  <span className="leading-relaxed flex-1">
                    <RichPhysicsText text={opt} />
                  </span>
                </button>
              );
            })}
          </div>

          {submitted && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong className="text-slate-900">Giải thích: </strong>
              <RichPhysicsText text={q.explanation} />
            </div>
          )}

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              type="button"
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
              className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 disabled:opacity-40 flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" /> Câu trước
            </button>

            <button
              type="button"
              disabled={currentIdx === total - 1}
              onClick={() => setCurrentIdx((i) => Math.min(total - 1, i + 1))}
              className="px-3.5 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 disabled:opacity-40 flex items-center gap-1.5"
            >
              Câu tiếp <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* Header & 3-Tier Filter Bar (Khối Lớp -> Chương -> Chủ đề) */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>Sổ tay Ôn tập Thông minh • Phân cấp Lớp → Chương → Chủ đề</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
              Sổ tay Câu hỏi làm sai
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Được phân loại tự động theo từng <strong>Khối lớp</strong>, <strong>Chương học</strong> và <strong>Chủ đề (Bài học)</strong>. Bạn có thể chọn ôn tập toàn bộ, theo chương hoặc theo từng chủ đề!
            </p>
          </div>

          {!showMastered && filteredMistakes.length > 0 && (
            <button
              type="button"
              onClick={() => handleStartPractice(filteredMistakes)}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-sm flex items-center gap-2 transition"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Làm lại {filteredMistakes.length} câu đang chọn</span>
            </button>
          )}
        </div>

        {/* Tier 1: Status Tabs (Cần ôn lại vs Đã nắm vững) & Grade Filter (Lớp 6 - 12) */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Link
              href={`/mistakes?${selectedGrade ? `grade=${selectedGrade}&` : ''}mastered=0`}
              onClick={() => {
                setSelectedChapterId('all');
                setSelectedTopicKey('all');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
                !showMastered
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
              }`}
            >
              <span>Cần ôn lại</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[11px] ${!showMastered ? 'bg-rose-700 text-white' : 'bg-slate-200 text-slate-700'}`}>
                {activeMistakeCount}
              </span>
            </Link>

            <Link
              href={`/mistakes?${selectedGrade ? `grade=${selectedGrade}&` : ''}mastered=1`}
              onClick={() => {
                setSelectedChapterId('all');
                setSelectedTopicKey('all');
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
                showMastered
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
              }`}
            >
              <span>Đã nắm vững</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[11px] ${showMastered ? 'bg-emerald-700 text-white' : 'bg-slate-200 text-slate-700'}`}>
                {masteredCount}
              </span>
            </Link>
          </div>

          {/* Filter by Grade 6-12 */}
          <div className="flex items-center gap-1.5 overflow-x-auto">
            <Link
              href={`/mistakes?mastered=${showMastered ? 1 : 0}`}
              onClick={() => {
                setSelectedChapterId('all');
                setSelectedTopicKey('all');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                !selectedGrade
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Tất cả lớp
            </Link>
            {[6, 7, 8, 9, 10, 11, 12].map((g) => {
              const count = countsByGrade[g] || 0;
              const isSelected = selectedGrade === g;
              return (
                <Link
                  key={g}
                  href={`/mistakes?grade=${g}&mastered=${showMastered ? 1 : 0}`}
                  onClick={() => {
                    setSelectedChapterId('all');
                    setSelectedTopicKey('all');
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition flex items-center gap-1 ${
                    isSelected
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <span>Lớp {g}</span>
                  {count > 0 && (
                    <span className={`text-[10px] px-1 rounded ${isSelected ? 'bg-indigo-800 text-white' : 'bg-rose-100 text-rose-700 font-bold'}`}>
                      {count}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Tier 2: Chapter Selector Pills (Lọc theo Chương) */}
        {chapterGroups.length > 0 && (
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              1. Chọn Chương học ({chapterGroups.length} chương):
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => {
                  setSelectedChapterId('all');
                  setSelectedTopicKey('all');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
                  selectedChapterId === 'all'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
                }`}
              >
                <span>Tất cả các chương</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${selectedChapterId === 'all' ? 'bg-indigo-800 text-white' : 'bg-slate-200 text-slate-700'}`}>
                  {mistakes.length}
                </span>
              </button>

              {chapterGroups.map((cg) => {
                const isSelected = selectedChapterId === cg.chapter_id;
                return (
                  <button
                    key={cg.chapter_id}
                    type="button"
                    onClick={() => {
                      setSelectedChapterId(cg.chapter_id);
                      setSelectedTopicKey('all');
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                    }`}
                  >
                    <span>
                      {!selectedGrade ? `[Lớp ${cg.grade_number}] ` : ''}
                      {cg.chapter_title}
                    </span>
                    <span
                      className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                        isSelected ? 'bg-indigo-800 text-white' : 'bg-rose-100 text-rose-700'
                      }`}
                    >
                      {cg.items.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Tier 3: Topic Selector Pills (Lọc theo Chủ đề / Bài học) */}
        {availableTopicGroups.length > 0 && (
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              2. Chọn Chủ đề / Bài học ({availableTopicGroups.length} chủ đề):
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedTopicKey('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
                  selectedTopicKey === 'all'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
                }`}
              >
                <span>Tất cả chủ đề</span>
              </button>

              {availableTopicGroups.map((tg) => {
                const isSelected = selectedTopicKey === tg.key;
                return (
                  <button
                    key={tg.key}
                    type="button"
                    onClick={() => setSelectedTopicKey(tg.key)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                    }`}
                  >
                    <span>{tg.topic_title}</span>
                    <span
                      className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                        isSelected ? 'bg-slate-700 text-white' : 'bg-rose-100 text-rose-700'
                      }`}
                    >
                      {tg.items.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Empty State */}
      {visibleGroups.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200/90 p-12 text-center space-y-3 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">
            {showMastered
              ? 'Chưa có câu hỏi nào trong danh sách Đã nắm vững'
              : 'Tuyệt vời! Bạn không có câu hỏi nào đang làm sai'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            {showMastered
              ? 'Khi bạn làm lại đúng các câu hỏi trong mục Cần ôn lại, chúng sẽ được chuyển sang đây.'
              : 'Hãy vào học các chủ đề từ Lớp 6 đến Lớp 12 và làm bài kiểm tra 25 câu. Những câu bạn làm sai sẽ tự động phân theo từng Chương và Chủ đề tại đây để bạn ôn tập.'}
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition"
            >
              <BookOpen className="w-4 h-4" /> Đi tới Chương trình học
            </Link>
          </div>
        </div>
      ) : (
        /* Grouped by Chapter -> Grouped by Topic */
        <div className="space-y-8">
          {visibleGroups.map((group) => (
            <section
              key={group.chapter_id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden"
            >
              {/* Chapter Header */}
              <div className="px-6 py-4 bg-slate-100/80 border-b border-slate-200/90 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
                    <FolderOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600">
                      <span>Lớp {group.grade_number}</span>
                      <span>•</span>
                      <span>{group.chapter_code}</span>
                      <span>•</span>
                      <span className="text-rose-600">
                        {group.topicGroups.length} chủ đề ({group.items.length} câu)
                      </span>
                    </div>
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      {group.chapter_title}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/chapter/${group.chapter_id}`}
                    className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-semibold transition"
                  >
                    Tóm tắt chương
                  </Link>
                  {!showMastered && (
                    <button
                      type="button"
                      onClick={() => handleStartPractice(group.items)}
                      className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Ôn cả chương ({group.items.length} câu)</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Topic Sub-sections inside Chapter */}
              <div className="p-4 sm:p-6 space-y-6 bg-slate-50/30">
                {group.topicGroups.map((tGroup) => (
                  <div
                    key={tGroup.key}
                    className="rounded-xl border border-slate-200/90 bg-white overflow-hidden shadow-xs"
                  >
                    {/* Topic Sub-header */}
                    <div className="px-5 py-3 bg-indigo-50/50 border-b border-slate-200/70 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <FileText className="w-4 h-4 text-indigo-600 shrink-0" />
                        <h3 className="text-sm font-bold text-slate-900">
                          {tGroup.topic_title}
                        </h3>
                        <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 text-[11px] font-bold">
                          {tGroup.items.length} câu
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {tGroup.topic_id ? (
                          <Link
                            href={`/topic/${tGroup.topic_id}`}
                            className="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-50 text-indigo-600 border border-indigo-200/80 text-xs font-semibold transition"
                          >
                            Xem lại lý thuyết bài này →
                          </Link>
                        ) : (
                          <Link
                            href={`/chapter/${group.chapter_id}`}
                            className="px-2.5 py-1 rounded-lg bg-white hover:bg-slate-50 text-amber-700 border border-amber-200 text-xs font-semibold transition"
                          >
                            Mở đề tổng hợp chương →
                          </Link>
                        )}
                        {!showMastered && (
                          <button
                            type="button"
                            onClick={() => handleStartPractice(tGroup.items)}
                            className="px-3 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-1 transition"
                          >
                            <Play className="w-3 h-3 fill-current" />
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
                          <div key={q.id} className="p-5 space-y-3.5">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="flex flex-wrap items-center gap-2 text-xs">
                                <span className="px-2 py-0.5 rounded bg-slate-800 text-white font-bold">
                                  Câu {idx + 1}
                                </span>
                                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                                  Mức độ: {DIFF_LABELS[q.difficulty] || q.difficulty}
                                </span>
                                <span className="px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-semibold">
                                  Sai {q.wrong_count} lần (Đã chọn: {wrongLetter})
                                </span>
                              </div>

                              <div className="flex items-center gap-2">
                                {!showMastered && (
                                  <button
                                    type="button"
                                    onClick={() => handleSingleAction(q.id, 'master')}
                                    className="px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-semibold flex items-center gap-1 transition"
                                    title="Đánh dấu đã thuộc câu này"
                                  >
                                    <CheckCircle2 className="w-3.5 h-3.5" /> Đã thuộc
                                  </button>
                                )}
                                <button
                                  type="button"
                                  onClick={() => handleSingleAction(q.id, 'delete')}
                                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                                  title="Xóa khỏi sổ tay"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>

                            <div className="text-sm sm:text-base font-medium text-slate-900 leading-relaxed">
                              <RichPhysicsText text={q.question_text} />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {q.options.map((opt, oIdx) => {
                                const letter = ['A', 'B', 'C', 'D'][oIdx];
                                const isWrongChoice = oIdx === q.last_wrong_option;
                                const isCorrectChoice = oIdx === q.correct_index;

                                return (
                                  <div
                                    key={oIdx}
                                    className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5 ${
                                      isExpanded && isCorrectChoice
                                        ? 'border-emerald-400 bg-emerald-50/70 text-emerald-950 font-medium'
                                        : isWrongChoice
                                        ? 'border-rose-300 bg-rose-50/60 text-rose-900'
                                        : 'border-slate-200/80 bg-slate-50/40 text-slate-700'
                                    }`}
                                  >
                                    <span
                                      className={`w-5 h-5 rounded text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 ${
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
                                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                              >
                                {isExpanded ? '▲ Ẩn đáp án đúng & lời giải' : '▼ Xem đáp án đúng & lời giải chi tiết'}
                              </button>

                              {isExpanded && (
                                <div className="mt-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 space-y-1">
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

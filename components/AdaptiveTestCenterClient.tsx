'use client';

import React, { useState, useMemo } from 'react';
import { QuestionItem } from '@/types/cms';
import { AdaptiveCatRunner } from './AdaptiveCatRunner';
import {
  Target,
  Layers,
  Sparkles,
  Play,
  Activity,
  ShieldCheck,
  BarChart3,
  BookOpen,
  Zap,
  CheckCircle2,
} from 'lucide-react';

interface ChapterOption {
  id: number;
  code: string;
  title: string;
  grade_number: number;
  order_index: number;
}

interface TopicOption {
  id: number;
  code: string;
  title: string;
  chapter_id: number;
  grade_number: number;
}

type EnrichedQuestion = QuestionItem & {
  topic_code?: string | null;
  topic_title?: string | null;
  chapter_code?: string | null;
  chapter_title?: string | null;
  grade_number?: number;
  empiricalWrongCount?: number;
};

interface AdaptiveTestCenterClientProps {
  chapters: ChapterOption[];
  topics: TopicOption[];
  questions: EnrichedQuestion[];
}

export function AdaptiveTestCenterClient({
  chapters,
  topics,
  questions,
}: AdaptiveTestCenterClientProps) {
  const [selectedGrade, setSelectedGrade] = useState<number>(12);
  const [scopeMode, setScopeMode] = useState<'grade' | 'chapter' | 'topic'>('grade');
  const [selectedChapterId, setSelectedChapterId] = useState<number | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState<number | null>(null);
  const [targetLength, setTargetLength] = useState<number>(10);
  const [running, setRunning] = useState<boolean>(false);

  // Chapters & topics for selectedGrade
  const gradeChapters = useMemo(
    () => chapters.filter((c) => c.grade_number === selectedGrade),
    [chapters, selectedGrade]
  );

  const activeChapterId = useMemo(() => {
    if (selectedChapterId && gradeChapters.some((c) => c.id === selectedChapterId)) {
      return selectedChapterId;
    }
    return gradeChapters[0]?.id || null;
  }, [gradeChapters, selectedChapterId]);

  const chapterTopics = useMemo(
    () => topics.filter((t) => t.chapter_id === activeChapterId),
    [topics, activeChapterId]
  );

  const activeTopicId = useMemo(() => {
    if (selectedTopicId && chapterTopics.some((t) => t.id === selectedTopicId)) {
      return selectedTopicId;
    }
    return chapterTopics[0]?.id || null;
  }, [chapterTopics, selectedTopicId]);

  // Filtered question pool for the chosen scope
  const activePool = useMemo(() => {
    if (scopeMode === 'grade') {
      return questions.filter((q) => q.grade_number === selectedGrade);
    }
    if (scopeMode === 'chapter') {
      return questions.filter((q) => q.chapter_id === activeChapterId);
    }
    return questions.filter(
      (q) => q.scope_type === 'topic' && q.topic_id === activeTopicId
    );
  }, [questions, scopeMode, selectedGrade, activeChapterId, activeTopicId]);

  // Pool difficulty counts
  const poolStats = useMemo(() => {
    let nb = 0;
    let th = 0;
    let vd = 0;
    let vdc = 0;
    for (const q of activePool) {
      if (q.difficulty === 'nhan_biet') nb++;
      else if (q.difficulty === 'thong_hieu') th++;
      else if (q.difficulty === 'van_dung') vd++;
      else vdc++;
    }
    return { total: activePool.length, nb, th, vd, vdc };
  }, [activePool]);

  const sessionTitle = useMemo(() => {
    if (scopeMode === 'grade') {
      return `Đánh giá Năng lực Thích ứng Toàn Khối Lớp ${selectedGrade}`;
    }
    if (scopeMode === 'chapter') {
      const ch = gradeChapters.find((c) => c.id === activeChapterId);
      return ch ? `Khảo thí Thích ứng Lớp ${selectedGrade} • ${ch.title}` : `Khảo thí Chương`;
    }
    const tp = chapterTopics.find((t) => t.id === activeTopicId);
    return tp ? `Khảo thí Thích ứng • ${tp.code}: ${tp.title}` : `Khảo thí Chủ đề`;
  }, [scopeMode, selectedGrade, gradeChapters, activeChapterId, chapterTopics, activeTopicId]);

  if (running) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <AdaptiveCatRunner
          title={sessionTitle}
          scopeType={scopeMode}
          scopeId={
            scopeMode === 'topic'
              ? activeTopicId || 1
              : scopeMode === 'chapter'
                ? activeChapterId || 1
                : selectedGrade
          }
          questions={activePool}
          targetLength={targetLength}
          onExitMode={() => setRunning(false)}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-8 sm:px-6">
      {/* 1. HERO HEADER */}
      <div className="edu-surface relative overflow-hidden rounded-3xl border border-slate-200/80 p-6 shadow-card sm:p-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl space-y-2.5">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-extrabold text-indigo-700">
              <Target className="h-3.5 w-3.5" />
              <span>COMPUTERIZED ADAPTIVE TESTING • MÔ HÌNH IRT 3 THAM SỐ</span>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Phòng Khảo thí Thích ứng Thông minh (Adaptive CAT)
            </h1>
            <p className="text-sm leading-relaxed text-slate-600">
              Thay vì làm một đề cố định dài 25–40 câu, hệ thống trích xuất từ{' '}
              <strong>ngân hàng 3.050 câu hỏi chuẩn GDPT 2018</strong> và tự động{' '}
              <strong>tăng hoặc giảm độ khó sau từng câu trả lời</strong> theo hàm thông tin Fisher cực đại.
              Chỉ cần 8–15 câu để định vị chính xác năng lực <span className="font-mono font-bold">θ</span> và dự báo điểm thi thang 10.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:shrink-0">
            <div className="rounded-2xl border border-indigo-200/80 bg-indigo-50/70 p-3.5 text-center">
              <div className="text-2xl font-extrabold text-indigo-700">3.050</div>
              <div className="text-[11px] font-bold text-indigo-950">Ngân hàng Câu hỏi</div>
              <div className="text-[10px] text-indigo-600">Đã hiệu chuẩn IRT</div>
            </div>
            <div className="rounded-2xl border border-purple-200/80 bg-purple-50/70 p-3.5 text-center">
              <div className="text-2xl font-extrabold text-purple-700">3PL IRT</div>
              <div className="text-[11px] font-bold text-purple-950">Độ khó • Phân loại</div>
              <div className="text-[10px] text-purple-600">Chống đoán mò</div>
            </div>
            <div className="col-span-2 rounded-2xl border border-emerald-200/80 bg-emerald-50/70 p-3.5 text-center sm:col-span-1">
              <div className="text-2xl font-extrabold text-emerald-700">8–15 câu</div>
              <div className="text-[11px] font-bold text-emerald-950">Hội tụ Năng lực</div>
              <div className="text-[10px] text-emerald-600">Tiết kiệm 60% thời gian</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. EXAM CONFIGURATION BUILDER */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left 7 Cols: Scope & Grade Selection */}
        <div className="edu-card space-y-6 p-6 lg:col-span-7">
          {/* Step 1: Select Grade */}
          <div className="space-y-2.5">
            <label className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-700">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] text-white">
                1
              </span>
              <span>Chọn Khối Lớp Khảo Thí (Lớp 6 → Lớp 12)</span>
            </label>
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
              {[6, 7, 8, 9, 10, 11, 12].map((g) => {
                const active = selectedGrade === g;
                return (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setSelectedGrade(g)}
                    className={`rounded-2xl border py-2.5 text-center text-xs font-extrabold transition ${
                      active
                        ? 'border-indigo-600 bg-indigo-600 text-white shadow-soft'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/40'
                    }`}
                  >
                    Lớp {g}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Select Scope Mode */}
          <div className="space-y-2.5">
            <label className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-700">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] text-white">
                2
              </span>
              <span>Chọn Phạm Vi Ngân Hàng Bốc Câu Hỏi</span>
            </label>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              {[
                {
                  id: 'grade',
                  title: `Toàn bộ Lớp ${selectedGrade}`,
                  desc: 'Bốc xuyên suốt tất cả các chương trong khối lớp',
                },
                {
                  id: 'chapter',
                  title: 'Theo Chương học',
                  desc: 'Đánh giá sâu 1 chương cụ thể đang ôn tập',
                },
                {
                  id: 'topic',
                  title: 'Theo Bài học / Chủ đề',
                  desc: 'Kiểm tra thích ứng gọn trong 1 bài học',
                },
              ].map((m) => {
                const active = scopeMode === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setScopeMode(m.id as 'grade' | 'chapter' | 'topic')}
                    className={`rounded-2xl border p-3.5 text-left transition ${
                      active
                        ? 'border-indigo-500 bg-indigo-50/80 ring-2 ring-indigo-500/20'
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-extrabold text-slate-900">{m.title}</div>
                    <div className="mt-1 text-[11px] leading-snug text-slate-600">{m.desc}</div>
                  </button>
                );
              })}
            </div>

            {/* Chapter / Topic selector if needed */}
            {(scopeMode === 'chapter' || scopeMode === 'topic') && (
              <div className="space-y-3 pt-2">
                <div>
                  <label className="mb-1 block text-xs font-bold text-slate-700">
                    Chọn Chương (Lớp {selectedGrade}):
                  </label>
                  <select
                    value={activeChapterId || ''}
                    onChange={(e) => setSelectedChapterId(Number(e.target.value))}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-xs font-bold text-slate-800 focus:border-indigo-500 focus:outline-none"
                  >
                    {gradeChapters.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.code}: {c.title}
                      </option>
                    ))}
                  </select>
                </div>

                {scopeMode === 'topic' && (
                  <div>
                    <label className="mb-1 block text-xs font-bold text-slate-700">
                      Chọn Bài học / Chủ đề:
                    </label>
                    <select
                      value={activeTopicId || ''}
                      onChange={(e) => setSelectedTopicId(Number(e.target.value))}
                      className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-xs font-bold text-slate-800 focus:border-indigo-500 focus:outline-none"
                    >
                      {chapterTopics.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.code}: {t.title}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Step 3: Select Question Count */}
          <div className="space-y-2.5">
            <label className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-700">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] text-white">
                3
              </span>
              <span>Chọn Độ Dài Bài Thi Thích Ứng</span>
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { count: 8, label: '8 câu • Nhanh', sub: '~5 phút • Định vị sơ bộ' },
                { count: 10, label: '10 câu • Tiêu chuẩn', sub: '~8 phút • Độ tin cậy cao' },
                { count: 15, label: '15 câu • Chuyên sâu', sub: '~12 phút • Phân tích toàn diện' },
              ].map((opt) => {
                const active = targetLength === opt.count;
                return (
                  <button
                    key={opt.count}
                    type="button"
                    onClick={() => setTargetLength(opt.count)}
                    className={`rounded-2xl border p-3 text-center transition ${
                      active
                        ? 'border-purple-600 bg-purple-50/90 text-purple-950 ring-2 ring-purple-500/20'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-extrabold">{opt.label}</div>
                    <div className="mt-0.5 text-[10px] text-slate-500">{opt.sub}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right 5 Cols: Pool Readiness & Launch Box */}
        <div className="edu-card flex flex-col justify-between space-y-5 p-6 lg:col-span-5">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-700">
                📦 Kho Câu Hỏi Đã Sẵn Sàng
              </span>
              <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-extrabold text-indigo-800">
                {poolStats.total} câu trong kho
              </span>
            </div>

            <div>
              <h2 className="text-base font-extrabold text-slate-900">{sessionTitle}</h2>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Thuật toán sẽ chọn ra <strong>{targetLength} câu hỏi thích ứng</strong> từ kho{' '}
                <strong>{poolStats.total} câu</strong> bên dưới dựa trên phản hồi thực tế của bạn:
              </p>
            </div>

            {/* 4 Difficulty Pool Bars */}
            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-3">
                <div className="font-bold text-emerald-900">🟢 Nhận biết</div>
                <div className="mt-0.5 text-lg font-extrabold text-emerald-700">
                  {poolStats.nb} câu
                </div>
                <div className="text-[10px] text-emerald-700">Độ khó b: -2.0 → -0.7</div>
              </div>
              <div className="rounded-xl border border-sky-200 bg-sky-50/70 p-3">
                <div className="font-bold text-sky-900">🔵 Thông hiểu</div>
                <div className="mt-0.5 text-lg font-extrabold text-sky-700">
                  {poolStats.th} câu
                </div>
                <div className="text-[10px] text-sky-700">Độ khó b: -0.6 → +0.5</div>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3">
                <div className="font-bold text-amber-900">🟠 Vận dụng</div>
                <div className="mt-0.5 text-lg font-extrabold text-amber-700">
                  {poolStats.vd} câu
                </div>
                <div className="text-[10px] text-amber-800">Độ khó b: +0.6 → +1.5</div>
              </div>
              <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-3">
                <div className="font-bold text-rose-900">🔴 Vận dụng cao</div>
                <div className="mt-0.5 text-lg font-extrabold text-rose-700">
                  {poolStats.vdc} câu
                </div>
                <div className="text-[10px] text-rose-700">Độ khó b: +1.6 → +2.4</div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-3.5 text-[11px] leading-relaxed text-slate-600">
              <strong className="text-slate-900">💡 Quy trình:</strong> Câu 1 luôn bắt đầu ở mức{' '}
              <strong>Thông hiểu (θ = 0.0)</strong>. Sau mỗi câu bạn chốt đáp án, hệ thống cập nhật tức thì năng lực{' '}
              <strong>θ</strong>, hiển thị lời giải và tự động chọn câu tiếp theo sát ngưỡng năng lực mới của bạn nhất.
            </div>
          </div>

          <button
            type="button"
            onClick={() => setRunning(true)}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3.5 text-sm font-extrabold text-white shadow-card transition hover:opacity-95"
          >
            <Play className="h-4 w-4 fill-current" />
            <span>Bắt đầu Khảo thí Thích ứng ({targetLength} câu)</span>
          </button>
        </div>
      </div>
    </div>
  );
}

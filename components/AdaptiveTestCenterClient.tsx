'use client';

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { QuestionItem } from '@/types/cms';
import { AdaptiveCatRunner, CatAttemptReviewData } from './AdaptiveCatRunner';
import { CatResponseStep } from '@/lib/adaptive-cat';
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
  History,
  Eye,
  Trash2,
  Clock,
  Calendar,
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

interface SavedCatAttemptRow {
  id: number;
  title: string;
  scope_type: 'grade' | 'chapter' | 'topic';
  scope_id: number;
  grade_number: number | null;
  total_questions: number;
  correct_count: number;
  final_theta: number;
  final_se: number;
  confidence_pct: number;
  predicted_score_10: number;
  ability_tier_label: string;
  time_spent_sec: number;
  history_json: string;
  created_at: string;
}

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
  const [reviewData, setReviewData] = useState<CatAttemptReviewData | null>(null);

  // Saved CAT Report History
  const [catHistory, setCatHistory] = useState<SavedCatAttemptRow[]>([]);
  const [loadingHistory, setLoadingHistory] = useState<boolean>(false);

  const fetchCatHistory = useCallback(async () => {
    try {
      setLoadingHistory(true);
      const res = await fetch('/api/adaptive-cat/attempts');
      if (res.ok) {
        const data = await res.json();
        setCatHistory(data.attempts || []);
      }
    } catch {
      // Ignore network error
    } finally {
      setLoadingHistory(false);
    }
  }, []);

  useEffect(() => {
    if (!running) {
      fetchCatHistory();
    }
  }, [running, fetchCatHistory]);

  const handleDeleteAttempt = async (id: number) => {
    try {
      await fetch(`/api/adaptive-cat/attempts?id=${id}`, { method: 'DELETE' });
      setCatHistory((prev) => prev.filter((item) => item.id !== id));
    } catch {
      // Ignore network error
    }
  };

  const handleOpenSavedReport = (row: SavedCatAttemptRow) => {
    try {
      const parsedHistory: CatResponseStep[] = JSON.parse(row.history_json || '[]');
      if (!Array.isArray(parsedHistory) || parsedHistory.length === 0) return;
      setReviewData({
        id: row.id,
        title: row.title,
        history: parsedHistory,
        finalTheta: Number(row.final_theta),
        finalSe: Number(row.final_se),
        confidencePct: Number(row.confidence_pct),
        timeSpentSec: Number(row.time_spent_sec),
        createdAt: row.created_at,
      });
      setRunning(true);
    } catch {
      // Ignore parse error
    }
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr.endsWith('Z') ? dateStr : `${dateStr}Z`);
      return d.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return dateStr;
    }
  };

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
      <div className="edu-page-shell">
        <AdaptiveCatRunner
          title={reviewData ? reviewData.title : sessionTitle}
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
          initialReviewData={reviewData}
          onExitMode={() => {
            setReviewData(null);
            setRunning(false);
          }}
        />
      </div>
    );
  }

  return (
    <div className="edu-page-shell">
      {/* 1. HERO HEADER */}
      <div className="edu-hero-aurora p-6 sm:p-9">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 animate-blob rounded-full bg-indigo-500/25 blur-3xl" />
        <div
          className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 animate-blob rounded-full bg-purple-500/20 blur-3xl"
          style={{ animationDelay: '3s' }}
        />

        <div className="relative z-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl space-y-2.5">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/20 px-3.5 py-1 text-xs font-extrabold text-indigo-200">
              <Target className="h-3.5 w-3.5 text-cyan-300" />
              <span>COMPUTERIZED ADAPTIVE TESTING • MÔ HÌNH IRT 3 THAM SỐ</span>
            </div>
            <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
              Phòng Khảo Thí Thích Ứng Thông Minh (Adaptive CAT)
            </h1>
            <p className="text-xs leading-relaxed text-indigo-100/85 sm:text-sm">
              Thay vì làm một đề cố định dài 25–40 câu, hệ thống trích xuất từ{' '}
              <strong className="text-white">ngân hàng 3.050 câu hỏi chuẩn GDPT 2018</strong> và tự động{' '}
              <strong className="text-white">tăng hoặc giảm độ khó sau từng câu trả lời</strong> theo hàm thông tin Fisher cực đại.
              Chỉ cần 8–15 câu để định vị chính xác năng lực <span className="font-mono font-bold text-cyan-300">θ</span> và dự báo điểm thi thang 10.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:shrink-0">
            <div className="edu-glass-dark p-3.5 text-center">
              <div className="text-2xl font-black text-white">3.050</div>
              <div className="text-[11px] font-bold text-indigo-200">Ngân hàng Câu hỏi</div>
              <div className="text-[10px] text-indigo-300/80">Đã hiệu chuẩn IRT</div>
            </div>
            <div className="edu-glass-dark p-3.5 text-center">
              <div className="text-2xl font-black text-purple-300">3PL IRT</div>
              <div className="text-[11px] font-bold text-purple-200">Độ khó • Phân loại</div>
              <div className="text-[10px] text-purple-300/80">Chống đoán mò</div>
            </div>
            <div className="edu-glass-dark col-span-2 p-3.5 text-center sm:col-span-1">
              <div className="text-2xl font-black text-emerald-300">8–15 câu</div>
              <div className="text-[11px] font-bold text-emerald-200">Hội tụ Năng lực</div>
              <div className="text-[10px] text-emerald-300/80">Tiết kiệm 60% thời gian</div>
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
            onClick={() => {
              setReviewData(null);
              setRunning(true);
            }}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3.5 text-sm font-extrabold text-white shadow-card transition hover:opacity-95"
          >
            <Play className="h-4 w-4 fill-current" />
            <span>Bắt đầu Khảo thí Thích ứng ({targetLength} câu)</span>
          </button>
        </div>
      </div>

      {/* 3. SAVED ADAPTIVE CAT REPORTS HISTORY */}
      <div className="edu-card space-y-4 p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3.5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
              <History className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-base font-extrabold text-slate-900">
                Lịch sử Báo cáo Khảo thí Thích ứng (CAT Reports)
              </h2>
              <p className="text-xs text-slate-500">
                Lưu trữ toàn bộ biểu đồ hành trình năng lực θ, điểm dự báo thang 10 và chi tiết từng câu hỏi của các lần thi trước.
              </p>
            </div>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-extrabold text-slate-700">
            {catHistory.length} báo cáo đã lưu
          </span>
        </div>

        {loadingHistory ? (
          <div className="py-8 text-center text-xs font-semibold text-slate-400">
            Đang tải lịch sử báo cáo...
          </div>
        ) : catHistory.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/60 p-8 text-center text-xs text-slate-500">
            Chưa có báo cáo khảo thí thích ứng nào. Hãy hoàn thành một bài thi thích ứng ở trên để lưu báo cáo đầu tiên!
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {catHistory.map((row) => (
              <div
                key={row.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-4 shadow-2xs transition hover:border-purple-300 hover:shadow-soft"
              >
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-xs font-extrabold text-slate-900 line-clamp-1">
                        {row.title}
                      </div>
                      <div className="mt-0.5 flex flex-wrap items-center gap-2.5 text-[11px] text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> {formatDate(row.created_at)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {formatTime(row.time_spent_sec)}
                        </span>
                      </div>
                    </div>

                    <div className="shrink-0 rounded-xl border border-purple-200 bg-purple-50 px-2.5 py-1 text-right">
                      <div className="text-sm font-extrabold text-purple-900">
                        {Number(row.predicted_score_10).toFixed(1)}
                        <span className="text-[10px] font-semibold text-purple-600">/10</span>
                      </div>
                      <div className="text-[9px] font-bold text-purple-700">
                        {row.ability_tier_label}
                      </div>
                    </div>
                  </div>

                  {/* Metrics Pills */}
                  <div className="grid grid-cols-3 gap-2 rounded-xl bg-slate-50 p-2 text-center text-[11px]">
                    <div>
                      <span className="text-slate-500">Năng lực θ: </span>
                      <strong className="text-slate-900">
                        {row.final_theta >= 0 ? `+${row.final_theta}` : row.final_theta}
                      </strong>
                    </div>
                    <div className="border-x border-slate-200">
                      <span className="text-slate-500">Đúng: </span>
                      <strong className="text-emerald-700">
                        {row.correct_count}/{row.total_questions}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-500">Tin cậy: </span>
                      <strong className="text-indigo-700">{row.confidence_pct}%</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5">
                  <button
                    type="button"
                    onClick={() => handleOpenSavedReport(row)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-purple-600 px-3.5 py-1.5 text-xs font-extrabold text-white shadow-2xs transition hover:bg-purple-500"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>Xem lại Báo cáo &amp; Biểu đồ</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDeleteAttempt(row.id)}
                    title="Xóa báo cáo này"
                    className="rounded-lg p-1.5 text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

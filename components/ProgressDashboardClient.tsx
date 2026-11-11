'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import {
  ProgressDashboardData,
  TopicMasteryStatus,
  TopicProgressItem,
} from '@/types/cms';
import { getSavedActiveGrade, saveActiveGrade } from '@/lib/grade-context';
import {
  Award,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Clock,
  Flame,
  GraduationCap,
  Layers,
  PlayCircle,
  RefreshCw,
  Search,
  ShieldAlert,
  Sparkles,
  Target,
  TrendingUp,
  ArrowRight,
  Check,
  AlertTriangle,
} from 'lucide-react';

interface ProgressDashboardClientProps {
  initialData: ProgressDashboardData;
}

const STATUS_META: Record<
  TopicMasteryStatus,
  {
    label: string;
    shortLabel: string;
    dotCls: string;
    badgeCls: string;
    cardCls: string;
  }
> = {
  mastered: {
    label: 'Đã tinh thông',
    shortLabel: 'Tinh thông',
    dotCls: 'bg-emerald-500',
    badgeCls: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    cardCls: 'border-emerald-200 bg-emerald-50/40 hover:border-emerald-300',
  },
  in_progress: {
    label: 'Đang rèn luyện',
    shortLabel: 'Đang luyện',
    dotCls: 'bg-amber-500',
    badgeCls: 'bg-amber-100 text-amber-800 border-amber-300',
    cardCls: 'border-amber-200 bg-amber-50/30 hover:border-amber-300',
  },
  needs_review: {
    label: 'Cần ôn gấp',
    shortLabel: 'Cần ôn gấp',
    dotCls: 'bg-rose-500',
    badgeCls: 'bg-rose-100 text-rose-800 border-rose-300',
    cardCls: 'border-rose-200 bg-rose-50/40 hover:border-rose-300',
  },
  not_started: {
    label: 'Chưa học',
    shortLabel: 'Chưa học',
    dotCls: 'bg-slate-300',
    badgeCls: 'bg-slate-100 text-slate-600 border-slate-200',
    cardCls: 'border-slate-200 bg-white hover:border-indigo-200',
  },
};

export function ProgressDashboardClient({ initialData }: ProgressDashboardClientProps) {
  const [data, setData] = useState<ProgressDashboardData>(initialData);
  const [selectedGrade, setSelectedGrade] = useState<number | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<TopicMasteryStatus | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loadingTopicId, setLoadingTopicId] = useState<number | null>(null);

  useEffect(() => {
    setSelectedGrade(getSavedActiveGrade(6));
  }, []);

  const handleToggleCheckin = async (topic: TopicProgressItem) => {
    try {
      setLoadingTopicId(topic.topic_id);
      const nextCompleted = topic.status !== 'mastered';
      const res = await fetch('/api/progress/checkin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicId: topic.topic_id,
          completed: nextCompleted,
        }),
      });
      if (res.ok) {
        const json = await res.json();
        if (json.dashboard) {
          setData(json.dashboard);
        }
      }
    } finally {
      setLoadingTopicId(null);
    }
  };

  // Filter topics by grade, status, and search query
  const filteredTopics = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return data.topics.filter((t) => {
      if (selectedGrade !== 'all' && t.grade_number !== selectedGrade) return false;
      if (selectedStatus !== 'all' && t.status !== selectedStatus) return false;
      if (q) {
        const match =
          t.title.toLowerCase().includes(q) ||
          t.code.toLowerCase().includes(q) ||
          t.chapter_title.toLowerCase().includes(q) ||
          t.chapter_code.toLowerCase().includes(q);
        if (!match) return false;
      }
      return true;
    });
  }, [data.topics, selectedGrade, selectedStatus, searchQuery]);

  // Group filtered topics by chapter
  const chapterGroups = useMemo(() => {
    const map = new Map<
      number,
      {
        chapter_id: number;
        chapter_code: string;
        chapter_title: string;
        grade_number: number;
        items: TopicProgressItem[];
      }
    >();

    for (const t of filteredTopics) {
      const existing = map.get(t.chapter_id);
      if (existing) {
        existing.items.push(t);
      } else {
        map.set(t.chapter_id, {
          chapter_id: t.chapter_id,
          chapter_code: t.chapter_code,
          chapter_title: t.chapter_title,
          grade_number: t.grade_number,
          items: [t],
        });
      }
    }
    return Array.from(map.values());
  }, [filteredTopics]);

  const { overall, gradeSummaries, difficultyBreakdown, recentAttempts, recommendations } = data;

  // SVG Trend chart points for recentAttempts (chronological left-to-right)
  const chronologicalAttempts = useMemo(() => {
    return [...recentAttempts].slice(0, 10).reverse();
  }, [recentAttempts]);

  return (
    <div className="edu-page-shell">
      {/* 1. Hero Banner */}
      <div className="edu-hero-aurora p-6 sm:p-9">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 animate-blob rounded-full bg-emerald-500/20 blur-3xl" />
        <div
          className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 animate-blob rounded-full bg-indigo-500/20 blur-3xl"
          style={{ animationDelay: '3s' }}
        />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/20 px-3 py-1 text-xs font-extrabold text-emerald-300 border border-emerald-400/30">
              <TrendingUp className="h-4 w-4" />
              <span>LEARNING ANALYTICS & MASTERY HEATMAP • K6–K12</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Trung Tâm Tiến Độ & Hồ Sơ Năng Lực Vật Lý
            </h1>
            <p className="max-w-2xl text-xs sm:text-sm text-slate-300 leading-relaxed">
              Theo dõi toàn diện lộ trình chinh phục <strong>{overall.totalTopics} chủ đề Vật lý</strong> từ Lớp 6 đến Lớp 12,
              phân tích năng lực theo 4 cấp độ nhận thức chuẩn Bộ GD&ĐT và tự động gợi ý bài học cần ưu tiên mỗi ngày.
            </p>
          </div>

          {/* Completion Dial Card */}
          <div className="flex shrink-0 items-center gap-4 rounded-2xl bg-slate-800/90 p-4 border border-slate-700/80 shadow-soft">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              <Award className="h-7 w-7 text-emerald-400" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Độ Phủ Tinh Thông Toàn Khóa
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-white">{overall.completionPct}%</span>
                <span className="text-xs text-emerald-400 font-bold">
                  ({overall.completedTopics}/{overall.totalTopics} chủ đề)
                </span>
              </div>
              <div className="mt-1.5 h-2 w-36 rounded-full bg-slate-700 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500"
                  style={{ width: `${Math.max(4, overall.completionPct)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 4 Key Performance Indicators (KPI Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="edu-kpi flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-500">Chủ Đề Đã Chinh Phục</span>
            <div className="text-2xl font-black text-slate-900">
              {overall.completedTopics}{' '}
              <span className="text-sm font-bold text-slate-400">/ {overall.totalTopics}</span>
            </div>
            <div className="text-[11px] font-semibold text-emerald-700">
              🟢 {overall.completedTopics} vững • 🟡 {overall.inProgressTopics} đang học • 🔴 {overall.needsReviewTopics} cần ôn
            </div>
          </div>
          <div className="edu-badge-ring bg-emerald-50 text-emerald-600 border border-emerald-200/60">
            <BookOpen className="h-5 w-5" />
          </div>
        </div>

        <div className="edu-kpi flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-500">Điểm Trung Bình Kiểm Tra</span>
            <div className="text-2xl font-black text-slate-900">
              {overall.averageScore10 > 0 ? overall.averageScore10 : '—'}{' '}
              <span className="text-sm font-bold text-slate-400">/ 10</span>
            </div>
            <div className="text-[11px] font-semibold text-indigo-700">
              Tổng cộng {overall.totalAttempts} lượt nộp bài kiểm tra
            </div>
          </div>
          <div className="edu-badge-ring bg-indigo-50 text-indigo-600 border border-indigo-200/60">
            <Target className="h-5 w-5" />
          </div>
        </div>

        <div className="edu-kpi flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-500">Tốc Độ Giải Đề Trung Bình</span>
            <div className="text-2xl font-black text-slate-900">
              {overall.avgSecPerQuestion}s{' '}
              <span className="text-sm font-bold text-slate-400">/ câu</span>
            </div>
            <div className="text-[11px] font-semibold text-amber-700">
              Chuẩn thi THPT 2025: ~100 giây / câu
            </div>
          </div>
          <div className="edu-badge-ring bg-amber-50 text-amber-600 border border-amber-200/60">
            <Clock className="h-5 w-5" />
          </div>
        </div>

        <div className="edu-kpi flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-500">Tỷ Lệ Khắc Phục Lỗi Sai</span>
            <div className="text-2xl font-black text-slate-900">{overall.mistakeResolutionPct}%</div>
            <div className="text-[11px] font-semibold text-rose-700">
              Đã thuộc {overall.masteredMistakes} câu • Còn {overall.activeMistakes} câu cần ôn
            </div>
          </div>
          <div className="edu-badge-ring bg-rose-50 text-rose-600 border border-rose-200/60">
            <Flame className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* 3. Smart Daily Action Planner ("Hôm nay học gì?") */}
      <div className="edu-card p-6 space-y-4 border-indigo-200/80 bg-gradient-to-br from-indigo-50/50 via-white to-emerald-50/40">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-indigo-600" />
            <h2 className="text-base font-black text-slate-900">
              🎯 Lộ Trình Đề Xuất: &ldquo;Hôm Nay Học Gì?&rdquo; (3 Nhiệm Vụ Trọng Tâm)
            </h2>
          </div>
          <span className="text-xs font-bold text-slate-500">
            Tự động phân tích từ lịch sử điểm số & lỗ hổng thực tế của bạn
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recommendations.map((rec, idx) => {
            const isUrgent = rec.type === 'urgent_fix';
            const isReview = rec.type === 'spaced_review';
            const cardBorder = isUrgent
              ? 'border-rose-200 bg-rose-50/60'
              : isReview
              ? 'border-amber-200 bg-amber-50/60'
              : 'border-emerald-200 bg-emerald-50/60';
            const badgeCls = isUrgent
              ? 'bg-rose-100 text-rose-800 border-rose-200'
              : isReview
              ? 'bg-amber-100 text-amber-800 border-amber-200'
              : 'bg-emerald-100 text-emerald-800 border-emerald-200';
            const btnCls = isUrgent
              ? 'bg-rose-600 hover:bg-rose-700 text-white'
              : isReview
              ? 'bg-amber-600 hover:bg-amber-700 text-white'
              : 'bg-emerald-600 hover:bg-emerald-700 text-white';

            return (
              <div
                key={idx}
                className={`flex flex-col justify-between rounded-2xl border p-4 shadow-2xs transition ${cardBorder}`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`rounded-lg border px-2.5 py-0.5 text-[11px] font-extrabold ${badgeCls}`}>
                      {rec.badge}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500">Lớp {rec.grade_number}</span>
                  </div>
                  <h3 className="text-sm font-black text-slate-900 leading-snug">{rec.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{rec.reason}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-end">
                  <Link
                    href={rec.href}
                    className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-extrabold shadow-2xs transition ${btnCls}`}
                  >
                    <span>{rec.ctaLabel}</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. 2-Column Analytics: 4-Tier Bloom's Taxonomy & Score Trend History */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (6 Cols): 4-Tier Cognitive Mastery Breakdown */}
        <div className="edu-card p-6 lg:col-span-6 flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-indigo-600" />
                <h2 className="text-sm font-extrabold text-slate-900">
                  Tháp Năng Lực 4 Cấp Độ Nhận Thức (Chuẩn Bộ GD&ĐT)
                </h2>
              </div>
              <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-[11px] font-bold text-indigo-700">
                4 Mức độ
              </span>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Thống kê tỷ lệ trả lời chính xác của bạn ở từng tầng câu hỏi từ dễ đến khó, giúp nhận diện chính xác
              bạn đang mạnh ở lý thuyết hay bài tập vận dụng.
            </p>

            <div className="space-y-4 pt-1">
              {difficultyBreakdown.map((tier, idx) => {
                const colors = [
                  'from-emerald-500 to-teal-500',
                  'from-sky-500 to-indigo-500',
                  'from-violet-500 to-purple-600',
                  'from-rose-500 to-amber-500',
                ];
                const barGrad = colors[idx % colors.length];

                return (
                  <div key={tier.difficulty} className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-3.5 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="font-extrabold text-slate-900">{tier.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-semibold text-slate-500">
                          Đúng {tier.correct_count}/{tier.answered_count} lượt ({tier.total_questions_in_bank} câu trong kho)
                        </span>
                        <span className="rounded-md bg-white border border-slate-200 px-2 py-0.5 font-black text-indigo-700">
                          {tier.answered_count > 0 ? `${tier.accuracy_pct}%` : 'Chưa làm'}
                        </span>
                      </div>
                    </div>

                    <div className="h-2.5 w-full rounded-full bg-slate-200 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${barGrad} transition-all duration-500`}
                        style={{ width: `${tier.answered_count > 0 ? Math.max(6, tier.accuracy_pct) : 0}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>{tier.targetRangeLabel}</span>
                      <span>
                        {tier.answered_count === 0
                          ? 'Hãy làm đề kiểm tra để đo năng lực tầng này'
                          : tier.accuracy_pct >= 75
                          ? '✓ Đạt ngưỡng an toàn'
                          : '⚠️ Cần luyện thêm ở tầng này'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl bg-indigo-50/70 border border-indigo-100 p-3.5 text-xs text-indigo-950 flex items-center justify-between gap-3">
            <div>
              <strong className="font-extrabold">💡 Muốn kiểm tra thích ứng tự động theo 4 cấp độ?</strong>
              <p className="text-[11px] text-indigo-800 mt-0.5">
                Phòng khảo thí CAT (IRT 3PL) sẽ tự động tăng/giảm độ khó câu hỏi theo từng câu trả lời của bạn.
              </p>
            </div>
            <Link
              href="/adaptive-test"
              className="shrink-0 rounded-xl bg-indigo-600 px-3.5 py-2 text-xs font-extrabold text-white hover:bg-indigo-700 transition"
            >
              Thi CAT ngay →
            </Link>
          </div>
        </div>

        {/* Right Column (6 Cols): Score Trend SVG & Recent Quiz Attempts */}
        <div className="edu-card p-6 lg:col-span-6 flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-emerald-600" />
                <h2 className="text-sm font-extrabold text-slate-900">
                  Biểu Đồ Phong Độ Điểm Số & Lịch Sử Làm Bài ({recentAttempts.length})
                </h2>
              </div>
              <Link href="/mistakes" className="text-xs font-bold text-rose-600 hover:underline">
                Xem Sổ tay lỗi sai ({overall.activeMistakes}) →
              </Link>
            </div>

            {chronologicalAttempts.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 p-8 text-center space-y-2">
                <PlayCircle className="mx-auto h-10 w-10 text-slate-400" />
                <div className="text-sm font-extrabold text-slate-800">
                  Chưa có lịch sử nộp bài kiểm tra
                </div>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Khi bạn hoàn thành bài kiểm tra ở bất kỳ Chủ đề hoặc Chương nào, biểu đồ điểm số và tốc độ làm bài sẽ tự động hiển thị tại đây.
                </p>
              </div>
            ) : (
              <>
                {/* SVG Score Trend Bar/Line Chart */}
                <div className="rounded-2xl border border-slate-200/80 bg-slate-900 p-4 text-white">
                  <div className="flex items-center justify-between text-xs text-slate-300 mb-3">
                    <span className="font-bold">Biểu đồ điểm số (Thang 10) qua các lần làm bài gần nhất</span>
                    <span className="text-emerald-400 font-extrabold">TB: {overall.averageScore10} đ</span>
                  </div>
                  <div className="grid grid-cols-10 gap-2 items-end h-28 pt-4 px-2 border-b border-slate-700">
                    {chronologicalAttempts.map((att, idx) => {
                      const heightPct = Math.max(12, Math.round((att.score_10 / 10) * 100));
                      const barColor =
                        att.score_10 >= 8
                          ? 'bg-emerald-400'
                          : att.score_10 >= 5
                          ? 'bg-amber-400'
                          : 'bg-rose-400';
                      return (
                        <div key={att.id || idx} className="flex flex-col items-center gap-1 h-full justify-end">
                          <span className="text-[10px] font-black text-slate-200">{att.score_10}</span>
                          <div
                            className={`w-full max-w-[26px] rounded-t-lg transition-all duration-300 ${barColor}`}
                            style={{ height: `${heightPct}%` }}
                            title={`${att.scope_title}: ${att.score}/${att.total_questions} (${att.score_10}đ)`}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="grid grid-cols-10 gap-2 pt-1.5 px-2 text-center">
                    {chronologicalAttempts.map((att, idx) => (
                      <div key={att.id || idx} className="text-[9px] font-bold text-slate-400 truncate">
                        Lần {idx + 1}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Attempts List */}
                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {recentAttempts.slice(0, 6).map((att) => {
                    const isGood = att.score_10 >= 8;
                    const isMid = att.score_10 >= 5 && att.score_10 < 8;
                    const scoreBadge = isGood
                      ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                      : isMid
                      ? 'bg-amber-100 text-amber-800 border-amber-300'
                      : 'bg-rose-100 text-rose-800 border-rose-300';
                    const targetHref =
                      att.scope_type === 'topic' ? `/topic/${att.scope_id}` : `/chapter/${att.scope_id}`;

                    return (
                      <div
                        key={att.id}
                        className="flex items-center justify-between gap-3 rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 text-xs hover:bg-white transition"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="rounded bg-slate-200 px-1.5 py-0.5 text-[10px] font-extrabold text-slate-700">
                              Lớp {att.grade_number}
                            </span>
                            <Link
                              href={targetHref}
                              className="font-bold text-slate-900 hover:text-indigo-600 truncate"
                            >
                              {att.scope_title}
                            </Link>
                          </div>
                          <div className="mt-1 flex items-center gap-3 text-[11px] text-slate-500">
                            <span>Đúng {att.score}/{att.total_questions} câu</span>
                            <span>•</span>
                            <span>Tốc độ: ~{att.avg_sec_per_question}s/câu</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className={`rounded-lg border px-2.5 py-1 text-xs font-black ${scoreBadge}`}>
                            {att.score_10} đ
                          </span>
                          <Link
                            href={targetHref}
                            className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-bold text-slate-700 hover:bg-slate-100"
                          >
                            Làm lại
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* 5. Mastery Heatmap of All 92 Topics across 7 Grades */}
      <div className="edu-card p-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-indigo-600" />
              <h2 className="text-base font-black text-slate-900">
                🗺️ Bản Đồ Nhiệt Tiến Độ 92 Chủ Đề (Lớp 6 – Lớp 12)
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Bấm vào nút <strong>&ldquo;Đánh dấu đã học&rdquo;</strong> trên từng bài để tự check-in tiến độ đọc lý thuyết, hoặc bấm vào tên bài để mở phòng mô phỏng & làm bài tập.
            </p>
          </div>

          {/* Search input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm tên bài học, mã chương..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-3 py-2 text-xs font-medium text-slate-900 outline-none focus:border-indigo-500 focus:bg-white transition"
            />
          </div>
        </div>

        {/* Grade Selector Progress Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
          <button
            type="button"
            onClick={() => setSelectedGrade('all')}
            className={`rounded-2xl border p-3 text-left transition ${
              selectedGrade === 'all'
                ? 'border-indigo-600 bg-indigo-600 text-white shadow-soft'
                : 'border-slate-200 bg-slate-50/70 text-slate-700 hover:bg-white'
            }`}
          >
            <div className="text-xs font-extrabold">Tất cả (6–12)</div>
            <div className="mt-1 text-lg font-black">{overall.completionPct}%</div>
            <div className={`text-[10px] font-semibold ${selectedGrade === 'all' ? 'text-indigo-100' : 'text-slate-500'}`}>
              {overall.completedTopics}/{overall.totalTopics} bài
            </div>
          </button>

          {gradeSummaries.map((g) => {
            const isSelected = selectedGrade === g.grade_number;
            return (
              <button
                key={g.grade_number}
                type="button"
                onClick={() => {
                  if (isSelected) {
                    setSelectedGrade('all');
                  } else {
                    setSelectedGrade(g.grade_number);
                    saveActiveGrade(g.grade_number);
                  }
                }}
                className={`rounded-2xl border p-3 text-left transition ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-600 text-white shadow-soft'
                    : 'border-slate-200 bg-slate-50/70 text-slate-700 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold">Lớp {g.grade_number}</span>
                  {g.needs_review_topics > 0 && (
                    <span className="h-2 w-2 rounded-full bg-rose-500" title={`${g.needs_review_topics} bài cần ôn gấp`} />
                  )}
                </div>
                <div className="mt-1 text-lg font-black">{g.completion_pct}%</div>
                <div className={`text-[10px] font-semibold ${isSelected ? 'text-indigo-100' : 'text-slate-500'}`}>
                  {g.mastered_topics}/{g.total_topics} bài vững
                </div>
              </button>
            );
          })}
        </div>

        {/* Status Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex flex-wrap items-center gap-2">
            {(
              [
                { id: 'all', label: `Tất cả (${data.topics.length})` },
                { id: 'mastered', label: `🟢 Đã tinh thông (${overall.completedTopics})` },
                { id: 'in_progress', label: `🟡 Đang rèn luyện (${overall.inProgressTopics})` },
                { id: 'needs_review', label: `🔴 Cần ôn gấp (${overall.needsReviewTopics})` },
                { id: 'not_started', label: `⚪ Chưa học (${overall.notStartedTopics})` },
              ] as const
            ).map((st) => (
              <button
                key={st.id}
                type="button"
                onClick={() => setSelectedStatus(st.id)}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition ${
                  selectedStatus === st.id
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>

          {(selectedGrade !== 'all' || selectedStatus !== 'all' || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setSelectedGrade('all');
                setSelectedStatus('all');
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800"
            >
              <RefreshCw className="h-3.5 w-3.5" /> Đặt lại bộ lọc
            </button>
          )}
        </div>

        {/* Chapter & Topic Heatmap Grid */}
        {chapterGroups.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-200 p-12 text-center text-xs text-slate-500">
            Không tìm thấy chủ đề nào khớp với bộ lọc hiện tại.
          </div>
        ) : (
          <div className="space-y-6">
            {chapterGroups.map((ch) => {
              const masteredInCh = ch.items.filter((i) => i.status === 'mastered').length;
              const chPct = Math.round((masteredInCh / ch.items.length) * 100);

              return (
                <div
                  key={ch.chapter_id}
                  className="rounded-2xl border border-slate-200/90 bg-slate-50/40 overflow-hidden"
                >
                  {/* Chapter Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 bg-white px-5 py-3.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="rounded-lg bg-indigo-100 px-2.5 py-1 text-xs font-black text-indigo-800">
                        Lớp {ch.grade_number} • {ch.chapter_code}
                      </span>
                      <h3 className="text-sm font-extrabold text-slate-900">{ch.chapter_title}</h3>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                        <span>
                          Hoàn thành: {masteredInCh}/{ch.items.length} bài ({chPct}%)
                        </span>
                        <div className="h-2 w-24 rounded-full bg-slate-200 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-emerald-500 transition-all duration-300"
                            style={{ width: `${chPct}%` }}
                          />
                        </div>
                      </div>
                      <Link
                        href={`/chapter/${ch.chapter_id}`}
                        className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition"
                      >
                        Đề chương →
                      </Link>
                    </div>
                  </div>

                  {/* Topics Grid inside Chapter */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 p-4">
                    {ch.items.map((topic) => {
                      const stMeta = STATUS_META[topic.status];
                      const isMastered = topic.status === 'mastered';
                      const isLoading = loadingTopicId === topic.topic_id;

                      return (
                        <div
                          key={topic.topic_id}
                          className={`flex flex-col justify-between rounded-2xl border p-4 transition shadow-2xs ${stMeta.cardCls}`}
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider">
                                {topic.code}
                              </span>
                              <span
                                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-extrabold ${stMeta.badgeCls}`}
                              >
                                <span className={`h-1.5 w-1.5 rounded-full ${stMeta.dotCls}`} />
                                {stMeta.label}
                              </span>
                            </div>

                            <Link
                              href={`/topic/${topic.topic_id}`}
                              className="block text-sm font-extrabold text-slate-900 hover:text-indigo-600 leading-snug transition"
                            >
                              {topic.title}
                            </Link>

                            {/* Metrics badges */}
                            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-slate-600 font-medium">
                              <span>📐 {topic.formula_count} công thức</span>
                              <span>•</span>
                              <span>❓ {topic.question_count} câu hỏi</span>
                              {topic.best_score_pct !== null && (
                                <>
                                  <span>•</span>
                                  <span className="font-bold text-indigo-700">
                                    Điểm cao nhất: {topic.best_score_pct}%
                                  </span>
                                </>
                              )}
                            </div>

                            {topic.active_mistakes > 0 && (
                              <div className="inline-flex items-center gap-1 rounded-lg bg-rose-100/80 px-2 py-0.5 text-[11px] font-bold text-rose-800">
                                <AlertTriangle className="h-3 w-3 text-rose-600" />
                                <span>Đang có {topic.active_mistakes} câu sai cần ôn</span>
                              </div>
                            )}
                          </div>

                          {/* Card Footer Actions */}
                          <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between gap-2">
                            <button
                              type="button"
                              disabled={isLoading}
                              onClick={() => handleToggleCheckin(topic)}
                              className={`inline-flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 text-[11px] font-bold transition ${
                                isMastered
                                  ? 'border-emerald-300 bg-emerald-600 text-white hover:bg-emerald-700'
                                  : 'border-slate-200 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800'
                              }`}
                            >
                              <Check className="h-3.5 w-3.5" />
                              <span>{isMastered ? 'Đã hoàn thành' : 'Đánh dấu đã học'}</span>
                            </button>

                            <Link
                              href={`/topic/${topic.topic_id}`}
                              className="inline-flex items-center gap-1 text-xs font-extrabold text-indigo-600 hover:text-indigo-800"
                            >
                              <span>Vào học</span>
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

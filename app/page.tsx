import React from 'react';
import Link from 'next/link';
import { getAllGradesWithStats, getGradeCurriculumBoard } from '@/lib/cms-service';
import {
  ChevronRight,
  CheckCircle2,
  FileCheck,
  BookOpen,
  Award,
  TrendingUp,
  Printer,
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function HomeBoardPage({
  searchParams,
}: {
  searchParams?: { grade?: string };
}) {
  const allGrades = getAllGradesWithStats();
  const requestedGrade = Number(searchParams?.grade || 6);
  const selectedGradeNum =
    requestedGrade >= 6 && requestedGrade <= 12 ? requestedGrade : 6;

  const board = getGradeCurriculumBoard(selectedGradeNum) || getGradeCurriculumBoard(6)!;
  const { grade, chapters, stats } = board;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Clean Top Grade Selector Bar (6 -> 12) & Progress Stats */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">{grade.title}</h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              {grade.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full hidden sm:inline">
              Tổng hợp 3 bộ SGK • Tự do chọn bài
            </span>
            <Link
              href={`/cheatsheet?grade=${selectedGradeNum}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200/80 text-xs font-semibold transition"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>In Cẩm nang A4 (Lớp {selectedGradeNum})</span>
            </Link>
          </div>
        </div>

        {/* Segmented Pill Selector for Grades 6 - 12 */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {allGrades.map((g) => {
            const isSelected = g.grade_number === selectedGradeNum;
            const hasTopics = (g.topic_count || 0) > 0;
            return (
              <Link
                key={g.grade_number}
                href={`/?grade=${g.grade_number}`}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition flex items-center gap-2 ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                }`}
              >
                <span>Lớp {g.grade_number}</span>
                {hasTopics && (
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isSelected ? 'bg-emerald-300' : 'bg-emerald-500'
                    }`}
                    title="Đã có đầy đủ bài học"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Grade Progress Overview Widget (Feature 4) */}
        {stats && stats.total_topics > 0 && (
          <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex justify-between items-center text-xs text-slate-500">
                  <span>Tiến độ bài học:</span>
                  <strong className="text-slate-900 font-bold">
                    {stats.completed_topics}/{stats.total_topics} ({stats.completion_rate}%)
                  </strong>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-1.5">
                  <div
                    className="bg-indigo-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${stats.completion_rate}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Điểm trung bình:</div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">
                  {stats.average_score !== null ? (
                    <span className="text-emerald-700">{stats.average_score} / 25 điểm</span>
                  ) : (
                    <span className="text-slate-400 font-normal">Chưa làm bài nào</span>
                  )}
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <FileCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Đề tổng hợp chương:</div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">
                  Đã làm {stats.completed_chapters} / {stats.total_chapters} chương
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Clean Chapters Syllabus List */}
      <div className="space-y-6">
        {chapters.map((ch) => {
          const chCompleted = ch.completed_topics_count || 0;
          const chTotal = ch.total_topics_count || (ch.topics?.length || 0);
          const chPercent = chTotal > 0 ? Math.round((chCompleted / chTotal) * 100) : 0;

          return (
            <section
              key={ch.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden"
            >
              {/* Chapter Header — Clean & Calm with Mini Progress */}
              <div className="px-6 py-4 bg-slate-50/80 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                    <span>{ch.code}</span>
                    <span>•</span>
                    <span className="text-slate-500 font-medium lowercase">
                      {chCompleted}/{chTotal} bài đã làm ({chPercent}%)
                    </span>
                    {ch.average_quiz_score !== null && ch.average_quiz_score !== undefined && (
                      <>
                        <span>•</span>
                        <span className="text-emerald-700 font-semibold lowercase">
                          đtb: {ch.average_quiz_score}/25
                        </span>
                      </>
                    )}
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-slate-900">
                    {ch.title}
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/cheatsheet?grade=${selectedGradeNum}&chapterId=${ch.id}`}
                    title="In cẩm nang công thức riêng cho chương này"
                    className="inline-flex items-center gap-1 px-2.5 py-2 rounded-xl bg-white hover:bg-blue-50 text-slate-600 hover:text-blue-700 border border-slate-200 hover:border-blue-200 text-xs font-medium transition"
                  >
                    <Printer className="w-3.5 h-3.5 text-slate-500 hover:text-blue-600" />
                    <span className="hidden sm:inline">Cẩm nang A4</span>
                  </Link>

                  <Link
                    href={`/chapter/${ch.id}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 border border-slate-200 hover:border-indigo-200 text-xs font-semibold transition"
                  >
                    <FileCheck className="w-4 h-4 text-indigo-600" />
                    <span>Tóm tắt & Kiểm tra chương (25 câu)</span>
                    {ch.best_exam_score !== null && ch.best_exam_score !== undefined && (
                      <span className="ml-1 px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold">
                        {ch.best_exam_score}/25
                      </span>
                    )}
                  </Link>
                </div>
              </div>

              {/* Mini Chapter Progress Bar */}
              {chTotal > 0 && (
                <div className="w-full bg-slate-100 h-1">
                  <div
                    className="bg-indigo-600 h-full transition-all duration-500"
                    style={{ width: `${chPercent}%` }}
                  />
                </div>
              )}

              {/* Clean List of Topics (Like a tidy book table of contents) */}
              {ch.topics && ch.topics.length > 0 ? (
                <div className="divide-y divide-slate-100">
                  {ch.topics.map((tp) => {
                    const hasScore = tp.best_quiz_score !== null && tp.best_quiz_score !== undefined;
                    return (
                      <Link
                        key={tp.id}
                        href={`/topic/${tp.id}`}
                        className="px-6 py-4 flex items-center justify-between gap-4 hover:bg-slate-50/90 transition group"
                      >
                        <div className="flex items-start gap-3.5 min-w-0">
                          <div className={`w-9 h-9 rounded-xl font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 transition ${
                            hasScore
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'bg-slate-100 group-hover:bg-indigo-50 text-slate-600 group-hover:text-indigo-600'
                          }`}>
                            {tp.code.split('-')[1] || tp.order_index}
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition truncate">
                              {tp.title}
                            </h3>
                            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                              {tp.overview}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          {hasScore ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              {tp.best_quiz_score}/25
                            </span>
                          ) : (
                            <span className="hidden sm:inline-block text-xs text-slate-400">
                              Lý thuyết • Mô phỏng • 25 câu
                            </span>
                          )}
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="px-6 py-8 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
                  <BookOpen className="w-4 h-4 text-slate-400" />
                  <span>Chưa có bài học nào trong chương này. Có thể thêm trong mục Quản trị (CMS).</span>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

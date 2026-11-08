import React from 'react';
import Link from 'next/link';
import { getAllGradesWithStats, getGradeCurriculumBoard } from '@/lib/cms-service';
import {
  ChevronRight,
  CheckCircle2,
  FileCheck,
  Award,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import { DashboardGradeActions } from '@/components/DashboardGradeActions';
import { ChapterActionsMenu } from '@/components/ChapterActionsMenu';

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

  const thcsGrades = allGrades.filter((g) => g.grade_number >= 6 && g.grade_number <= 9);
  const thptGrades = allGrades.filter((g) => g.grade_number >= 10 && g.grade_number <= 12);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* ============================================================ */}
      {/* HERO & GRADE SELECTOR (Clean, uncluttered, focused)           */}
      {/* ============================================================ */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-7 shadow-xs space-y-6">
        {/* Top Header with Grade Title & Consolidated Action Menu */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 font-bold text-xs uppercase tracking-wider">
                {grade.level_group} • GDPT 2018
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs text-slate-500 font-medium">
                {chapters.length} chương • {stats.total_topics} chủ đề
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {grade.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl">
              {grade.subtitle}
            </p>
          </div>

          {/* Consolidated Actions Dropdown */}
          <div className="flex items-center gap-2">
            <DashboardGradeActions gradeNumber={selectedGradeNum} />
          </div>
        </div>

        {/* Clean Segmented Grade Switcher */}
        <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0">
            {/* THCS Group */}
            <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl">
              <span className="text-[10px] font-bold text-slate-600 px-1.5 uppercase">THCS:</span>
              {thcsGrades.map((g) => {
                const isSelected = g.grade_number === selectedGradeNum;
                return (
                  <Link
                    key={g.grade_number}
                    href={`/?grade=${g.grade_number}`}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors duration-150 ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                    }`}
                  >
                    Lớp {g.grade_number}
                  </Link>
                );
              })}
            </div>

            {/* THPT Group */}
            <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl">
              <span className="text-[10px] font-bold text-slate-600 px-1.5 uppercase">THPT:</span>
              {thptGrades.map((g) => {
                const isSelected = g.grade_number === selectedGradeNum;
                return (
                  <Link
                    key={g.grade_number}
                    href={`/?grade=${g.grade_number}`}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors duration-150 ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                    }`}
                  >
                    Lớp {g.grade_number}
                  </Link>
                );
              })}
            </div>
          </div>

          <span className="text-xs text-slate-600 italic hidden md:inline">
            Tự do chọn bài học & luyện đề không giới hạn
          </span>
        </div>

        {/* Integrated Progress Overview Card */}
        {stats && stats.total_topics > 0 && (
          <div className="p-4 rounded-xl bg-gradient-to-r from-slate-50 via-indigo-50/20 to-slate-50 border border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Completion rate */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-extrabold text-xs shrink-0 shadow-xs">
                {stats.completion_rate}%
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-medium">Tiến độ bài học:</span>
                  <strong className="text-slate-900">
                    {stats.completed_topics}/{stats.total_topics}
                  </strong>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-1.5">
                  <div
                    className="bg-indigo-600 h-full rounded-full transition-[width] duration-500 ease-out"
                    style={{ width: `${stats.completion_rate}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Average Score */}
            <div className="flex items-center gap-3 sm:border-l sm:border-slate-200 sm:pl-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Điểm kiểm tra trung bình:</div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">
                  {stats.average_score !== null ? (
                    <span className="text-emerald-700 font-extrabold">
                      {stats.average_score} / 25 điểm
                    </span>
                  ) : (
                    <span className="text-slate-400 font-normal">Chưa làm bài nào</span>
                  )}
                </div>
              </div>
            </div>

            {/* Chapter Exams Completed */}
            <div className="flex items-center gap-3 sm:border-l sm:border-slate-200 sm:pl-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Kiểm tra tổng hợp chương:</div>
                <div className="text-sm font-bold text-slate-900 mt-0.5">
                  Đã làm{' '}
                  <strong className="text-amber-700">
                    {stats.completed_chapters} / {stats.total_chapters}
                  </strong>{' '}
                  chương
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ============================================================ */}
      {/* CHAPTERS SYLLABUS LIST                                       */}
      {/* ============================================================ */}
      <div className="space-y-6">
        {chapters.map((ch) => {
          const chCompleted = ch.completed_topics_count || 0;
          const chTotal = ch.total_topics_count || (ch.topics?.length || 0);
          const chPercent = chTotal > 0 ? Math.round((chCompleted / chTotal) * 100) : 0;

          return (
            <section
              key={ch.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-shadow hover:shadow-sm"
            >
              {/* Chapter Header */}
              <div className="px-6 py-4 bg-slate-50/70 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 uppercase tracking-wider">
                    <span>{ch.code}</span>
                    <span>•</span>
                    <span className="text-slate-500 font-medium lowercase">
                      {chCompleted}/{chTotal} bài hoàn thành ({chPercent}%)
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

                {/* Right Actions: Primary Chapter Exam Button + Dropdown Menu */}
                <div className="flex items-center gap-2">
                  <Link
                    href={`/chapter/${ch.id}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-semibold shadow-2xs transition"
                  >
                    <FileCheck className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Kiểm tra tổng hợp ({ch.chapter_question_count || 25} câu)</span>
                    {ch.best_exam_score !== null && ch.best_exam_score !== undefined && (
                      <span className="ml-1 px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold text-[10px]">
                        {ch.best_exam_score}/25
                      </span>
                    )}
                  </Link>

                  {/* Clean Dropdown for secondary chapter actions */}
                  <ChapterActionsMenu
                    chapterId={ch.id}
                    gradeNumber={selectedGradeNum}
                    chapterTitle={ch.title}
                  />
                </div>
              </div>

              {/* Mini Chapter Progress Bar */}
              {chTotal > 0 && (
                <div className="w-full bg-slate-100 h-1">
                  <div
                    className="bg-indigo-600 h-full transition-[width] duration-500 ease-out"
                    style={{ width: `${chPercent}%` }}
                  />
                </div>
              )}

              {/* Clean List of Topics */}
              {ch.topics && ch.topics.length > 0 ? (
                <div className="divide-y divide-slate-100">
                  {ch.topics.map((tp) => {
                    const hasScore =
                      tp.best_quiz_score !== null && tp.best_quiz_score !== undefined;
                    return (
                      <Link
                        key={tp.id}
                        href={`/topic/${tp.id}`}
                        className="px-6 py-4 flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors group"
                      >
                        <div className="flex items-start gap-3.5 min-w-0">
                          <div
                            className={`w-9 h-9 rounded-xl font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                              hasScore
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                : 'bg-slate-100 group-hover:bg-indigo-50 text-slate-600 group-hover:text-indigo-600'
                            }`}
                          >
                            {tp.code.split('-')[1] || tp.order_index}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <h3 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">
                                {tp.title}
                              </h3>
                              {tp.textbook_tags && tp.textbook_tags.length > 0 && (
                                <div className="hidden sm:flex items-center gap-1">
                                  {tp.textbook_tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="px-1.5 py-0.2 rounded text-[10px] font-semibold bg-slate-100 text-slate-500"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                              {tp.overview}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          {hasScore ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>{tp.best_quiz_score}/25</span>
                            </span>
                          ) : (
                            <span className="hidden sm:inline-block text-xs text-slate-400">
                              Lý thuyết • 25 câu
                            </span>
                          )}
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="p-6 text-center text-xs text-slate-400 italic">
                  Chưa có chủ đề nào trong chương này.
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

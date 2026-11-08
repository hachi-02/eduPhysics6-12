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
  Layers,
  BookOpen,
  GraduationCap,
} from 'lucide-react';
import { ChapterActionsMenu } from '@/components/ChapterActionsMenu';

export const dynamic = 'force-dynamic';

const CHAPTER_THEMES = [
  {
    header: 'bg-gradient-to-br from-brand-600 via-violetBrand-600 to-brand-800',
    glow: 'bg-violetBrand-400/40',
    fill: 'bg-gradient-to-r from-brand-400 to-violetBrand-300',
    num: 'bg-brand-100 text-brand-700',
    numHover: 'group-hover/row:bg-brand-600 group-hover/row:text-white',
    hover: 'hover:bg-brand-50/70',
    hoverText: 'group-hover/row:text-brand-700',
    ring: 'hover:ring-brand-200',
  },
  {
    header: 'bg-gradient-to-br from-accent-500 via-accent-600 to-accent-800',
    glow: 'bg-accent-300/40',
    fill: 'bg-gradient-to-r from-accent-400 to-accent-200',
    num: 'bg-accent-100 text-accent-700',
    numHover: 'group-hover/row:bg-accent-600 group-hover/row:text-white',
    hover: 'hover:bg-accent-50/70',
    hoverText: 'group-hover/row:text-accent-700',
    ring: 'hover:ring-accent-200',
  },
  {
    header: 'bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700',
    glow: 'bg-emerald-300/40',
    fill: 'bg-gradient-to-r from-emerald-400 to-teal-300',
    num: 'bg-emerald-100 text-emerald-700',
    numHover: 'group-hover/row:bg-emerald-600 group-hover/row:text-white',
    hover: 'hover:bg-emerald-50/70',
    hoverText: 'group-hover/row:text-emerald-700',
    ring: 'hover:ring-emerald-200',
  },
  {
    header: 'bg-gradient-to-br from-amber-500 via-orange-500 to-orange-700',
    glow: 'bg-amber-300/40',
    fill: 'bg-gradient-to-r from-amber-400 to-orange-300',
    num: 'bg-amber-100 text-amber-800',
    numHover: 'group-hover/row:bg-amber-600 group-hover/row:text-white',
    hover: 'hover:bg-amber-50/70',
    hoverText: 'group-hover/row:text-amber-800',
    ring: 'hover:ring-amber-200',
  },
  {
    header: 'bg-gradient-to-br from-rose-500 via-rose-600 to-pink-700',
    glow: 'bg-rose-300/40',
    fill: 'bg-gradient-to-r from-rose-400 to-pink-300',
    num: 'bg-rose-100 text-rose-700',
    numHover: 'group-hover/row:bg-rose-600 group-hover/row:text-white',
    hover: 'hover:bg-rose-50/70',
    hoverText: 'group-hover/row:text-rose-700',
    ring: 'hover:ring-rose-200',
  },
  {
    header: 'bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700',
    glow: 'bg-sky-300/40',
    fill: 'bg-gradient-to-r from-sky-400 to-blue-300',
    num: 'bg-sky-100 text-sky-700',
    numHover: 'group-hover/row:bg-sky-600 group-hover/row:text-white',
    hover: 'hover:bg-sky-50/70',
    hoverText: 'group-hover/row:text-sky-700',
    ring: 'hover:ring-sky-200',
  },
  {
    header: 'bg-gradient-to-br from-fuchsia-500 via-purple-600 to-violetBrand-800',
    glow: 'bg-fuchsia-300/40',
    fill: 'bg-gradient-to-r from-fuchsia-400 to-purple-300',
    num: 'bg-fuchsia-100 text-fuchsia-700',
    numHover: 'group-hover/row:bg-fuchsia-600 group-hover/row:text-white',
    hover: 'hover:bg-fuchsia-50/70',
    hoverText: 'group-hover/row:text-fuchsia-700',
    ring: 'hover:ring-fuchsia-200',
  },
];

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
    <div className="mx-auto max-w-5xl animate-fade-up space-y-8 px-4 py-8 sm:px-6 sm:py-10">
      {/* ============================================================ */}
      {/* HERO & GRADE SELECTOR                                         */}
      {/* ============================================================ */}
      <div className="relative overflow-hidden rounded-3xl border border-brand-200/70 bg-hero-glow p-5 shadow-card sm:p-7">
        <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-brand-400/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-accent-400/25 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-brand-gradient" />

        <div className="relative space-y-6">
          {/* Top Header with Grade Title & Consolidated Action Menu */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-lg bg-brand-gradient px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white shadow-glow">
                  <GraduationCap className="h-3.5 w-3.5" />
                  {grade.level_group} • GDPT 2018
                </span>
                <span className="flex items-center gap-1 rounded-md bg-white/80 px-2 py-0.5 text-xs font-bold text-slate-700 shadow-soft">
                  <Layers className="h-3.5 w-3.5 text-brand-500" />
                  {chapters.length} chương
                </span>
                <span className="flex items-center gap-1 rounded-md bg-white/80 px-2 py-0.5 text-xs font-bold text-slate-700 shadow-soft">
                  <BookOpen className="h-3.5 w-3.5 text-accent-600" />
                  {stats.total_topics} chủ đề
                </span>
              </div>
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                {grade.title}
              </h1>
              <p className="max-w-xl text-xs leading-relaxed text-slate-600 sm:text-sm">
                {grade.subtitle}
              </p>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <span className="flex items-center gap-1.5 rounded-full border border-brand-200 bg-white px-3 py-1.5 text-xs font-bold text-brand-700 shadow-soft">
                <Sparkles className="h-3.5 w-3.5 text-brand-500" />
                3 bộ SGK: KNTT • Cánh Diều • CTST
              </span>
            </div>
          </div>

          {/* Clean Segmented Grade Switcher */}
          <div className="flex flex-col items-start justify-between gap-3 border-t border-brand-100 pt-5 sm:flex-row sm:items-center">
            <div className="flex max-w-full items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {/* THCS Group */}
              <div className="flex items-center gap-1 rounded-2xl border border-brand-100 bg-white p-1 shadow-soft">
                <span className="px-1.5 text-[10px] font-extrabold uppercase tracking-wide text-brand-500">
                  THCS
                </span>
                {thcsGrades.map((g) => {
                  const isSelected = g.grade_number === selectedGradeNum;
                  return (
                    <Link
                      key={g.grade_number}
                      href={`/?grade=${g.grade_number}`}
                      className={`whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-bold transition duration-150 ease-snap ${
                        isSelected
                          ? 'bg-brand-gradient text-white shadow-glow'
                          : 'text-slate-700 hover:bg-brand-50 hover:text-brand-700'
                      }`}
                    >
                      Lớp {g.grade_number}
                    </Link>
                  );
                })}
              </div>

              {/* THPT Group */}
              <div className="flex items-center gap-1 rounded-2xl border border-accent-100 bg-white p-1 shadow-soft">
                <span className="px-1.5 text-[10px] font-extrabold uppercase tracking-wide text-accent-600">
                  THPT
                </span>
                {thptGrades.map((g) => {
                  const isSelected = g.grade_number === selectedGradeNum;
                  return (
                    <Link
                      key={g.grade_number}
                      href={`/?grade=${g.grade_number}`}
                      className={`whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-bold transition duration-150 ease-snap ${
                        isSelected
                          ? 'bg-gradient-to-br from-accent-500 to-accent-700 text-white shadow-[0_10px_30px_-10px_rgba(8,145,178,0.55)]'
                          : 'text-slate-700 hover:bg-accent-50 hover:text-accent-700'
                      }`}
                    >
                      Lớp {g.grade_number}
                    </Link>
                  );
                })}
              </div>
            </div>

            <span className="hidden text-xs font-semibold italic text-slate-500 md:inline">
              Tự do chọn bài học &amp; luyện đề không giới hạn
            </span>
          </div>

          {/* Integrated Progress Overview Card */}
          {stats && stats.total_topics > 0 && (
            <div className="grid grid-cols-1 gap-2.5 rounded-2xl border border-brand-100 bg-white/80 p-2.5 shadow-soft backdrop-blur sm:grid-cols-3 sm:gap-0 sm:p-3">
              {/* Completion rate */}
              <div className="flex items-center gap-3 rounded-xl bg-brand-50/70 p-2.5 sm:bg-transparent sm:p-1 sm:pr-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-xs font-extrabold text-white shadow-glow">
                  {stats.completion_rate}%
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-bold text-slate-600">Tiến độ bài học</span>
                    <strong className="text-slate-900">
                      {stats.completed_topics}/{stats.total_topics}
                    </strong>
                  </div>
                  <div className="edu-progress mt-1.5">
                    <div
                      className="edu-progress-bar"
                      style={{ width: `${stats.completion_rate}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Average Score */}
              <div className="flex items-center gap-3 rounded-xl bg-emerald-50/70 p-2.5 sm:border-l sm:border-emerald-100 sm:bg-transparent sm:px-4 sm:py-1">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-glow-emerald">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-600">Điểm kiểm tra trung bình</div>
                  <div className="mt-0.5 text-sm font-bold text-slate-900">
                    {stats.average_score !== null ? (
                      <span className="text-base font-extrabold text-emerald-700">
                        {stats.average_score} / 25 điểm
                      </span>
                    ) : (
                      <span className="font-normal text-slate-400">Chưa làm bài nào</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Chapter Exams Completed */}
              <div className="flex items-center gap-3 rounded-xl bg-amber-50/70 p-2.5 sm:border-l sm:border-amber-100 sm:bg-transparent sm:pl-4 sm:py-1">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 text-white shadow-[0_10px_30px_-10px_rgba(217,119,6,0.55)]">
                  <FileCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-600">Kiểm tra tổng hợp chương</div>
                  <div className="mt-0.5 text-sm font-bold text-slate-900">
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
      </div>

      {/* ============================================================ */}
      {/* CHAPTERS SYLLABUS LIST                                       */}
      {/* ============================================================ */}
      <div className="space-y-5">
        {chapters.map((ch, chIdx) => {
          const theme = CHAPTER_THEMES[chIdx % CHAPTER_THEMES.length];
          const chCompleted = ch.completed_topics_count || 0;
          const chTotal = ch.total_topics_count || (ch.topics?.length || 0);
          const chPercent = chTotal > 0 ? Math.round((chCompleted / chTotal) * 100) : 0;

          return (
            <section
              key={ch.id}
              className={`group rounded-3xl border border-slate-200/80 bg-white shadow-card ring-1 ring-transparent transition duration-200 ease-snap hover:-translate-y-0.5 hover:shadow-lift ${theme.ring}`}
            >
              {/* Chapter Header — colored band */}
              <div className={`relative rounded-t-3xl ${theme.header} px-5 py-4 text-white sm:px-6`}>
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-t-3xl">
                  <div
                    className={`absolute -right-10 -top-16 h-40 w-40 rounded-full blur-2xl ${theme.glow}`}
                  />
                  <div className="absolute -bottom-20 left-1/3 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                </div>

                <div className="relative flex flex-wrap items-center justify-between gap-3">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="rounded-md bg-white/20 px-2 py-0.5 font-mono font-extrabold uppercase tracking-wide text-white ring-1 ring-white/30 backdrop-blur">
                        {ch.code}
                      </span>
                      <span className="font-bold text-white/85">
                        {chCompleted}/{chTotal} bài hoàn thành ({chPercent}%)
                      </span>
                      {ch.average_quiz_score !== null && ch.average_quiz_score !== undefined && (
                        <span className="flex items-center gap-1 rounded-md bg-white/15 px-1.5 py-0.5 font-extrabold text-white ring-1 ring-white/25">
                          <TrendingUp className="h-3 w-3" />
                          TB: {ch.average_quiz_score}/25
                        </span>
                      )}
                    </div>
                    <h2 className="text-base font-extrabold tracking-tight text-white drop-shadow-sm sm:text-lg">
                      {ch.title}
                    </h2>
                  </div>

                  {/* Right Actions: Primary Chapter Exam Button + Dropdown Menu */}
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/chapter/${ch.id}?tab=exam`}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-white px-3.5 py-2 text-xs font-bold text-slate-900 shadow-lift transition duration-150 ease-snap hover:-translate-y-0.5 hover:bg-white/90"
                    >
                      <FileCheck className="h-3.5 w-3.5" />
                      <span>Kiểm tra tổng hợp ({ch.chapter_question_count || 25} câu)</span>
                      {ch.best_exam_score !== null && ch.best_exam_score !== undefined && (
                        <span className="ml-1 rounded-md bg-emerald-600 px-1.5 py-0.5 text-[10px] font-extrabold text-white">
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
              </div>

              {/* Mini Chapter Progress Bar */}
              {chTotal > 0 && (
                <div className="h-1.5 w-full bg-slate-100">
                  <div
                    className={`h-full transition-[width] duration-500 ease-out ${theme.fill}`}
                    style={{ width: `${chPercent}%` }}
                  />
                </div>
              )}

              {/* Clean List of Topics */}
              {ch.topics && ch.topics.length > 0 ? (
                <div className="divide-y divide-slate-100 overflow-hidden rounded-b-3xl">
                  {ch.topics.map((tp) => {
                    const hasScore =
                      tp.best_quiz_score !== null && tp.best_quiz_score !== undefined;
                    return (
                      <Link
                        key={tp.id}
                        href={`/topic/${tp.id}`}
                        className={`group/row flex items-center justify-between gap-4 px-5 py-4 transition-colors duration-150 ${theme.hover} sm:px-6`}
                      >
                        <div className="flex min-w-0 items-start gap-3.5">
                          <div
                            className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold transition-colors ${
                              hasScore
                                ? 'border border-emerald-200 bg-emerald-50 text-emerald-700'
                                : `${theme.num} ${theme.numHover}`
                            }`}
                          >
                            {tp.code.split('-')[1] || tp.order_index}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <h3
                                className={`truncate text-sm font-bold text-slate-900 transition-colors sm:text-base ${theme.hoverText}`}
                              >
                                {tp.title}
                              </h3>
                              {tp.textbook_tags && tp.textbook_tags.length > 0 && (
                                <div className="hidden items-center gap-1 sm:flex">
                                  {tp.textbook_tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold text-slate-500"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                            <p className="mt-0.5 line-clamp-1 text-xs text-slate-500">
                              {tp.overview}
                            </p>
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-3">
                          {hasScore ? (
                            <span className="inline-flex items-center gap-1 rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                              <span>{tp.best_quiz_score}/25</span>
                            </span>
                          ) : (
                            <span className="hidden text-xs font-medium text-slate-400 sm:inline-block">
                              Lý thuyết • 25 câu
                            </span>
                          )}
                          <ChevronRight
                            className={`h-4 w-4 text-slate-300 transition-transform duration-150 group-hover/row:translate-x-0.5 ${theme.hoverText}`}
                          />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="p-6 text-center text-xs italic text-slate-400">
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

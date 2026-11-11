import React from 'react';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { getAllGradesWithStats, getGradeCurriculumBoard } from '@/lib/cms-service';
import { GRADE_COOKIE_NAME, isValidGradeNumber } from '@/lib/grade-context';
import { GradeContextSync } from '@/components/GradeContextSync';
import {
  ChevronRight,
  FileCheck,
  Award,
  TrendingUp,
  Sparkles,
  Layers,
  BookOpen,
  GraduationCap,
  Calculator,
  BarChart3,
  Brain,
  Atom,
  FlaskConical,
  ArrowUpRight,
} from 'lucide-react';
import { ChapterActionsMenu } from '@/components/ChapterActionsMenu';
import { TopicStudyToggleButton } from '@/components/TopicStudyToggleButton';

export const dynamic = 'force-dynamic';

const CHAPTER_THEMES = [
  {
    header: 'bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-700',
    glow: 'bg-violet-400/35',
    fill: 'bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400',
    num: 'bg-indigo-50 text-indigo-700 border border-indigo-200/80',
    numHover: 'group-hover/row:bg-indigo-600 group-hover/row:text-white group-hover/row:border-indigo-600',
    hover: 'hover:bg-indigo-50/50',
    hoverText: 'group-hover/row:text-indigo-700',
    ring: 'hover:border-indigo-300/90',
  },
  {
    header: 'bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-700',
    glow: 'bg-cyan-300/35',
    fill: 'bg-gradient-to-r from-cyan-400 to-emerald-400',
    num: 'bg-cyan-50 text-cyan-700 border border-cyan-200/80',
    numHover: 'group-hover/row:bg-cyan-600 group-hover/row:text-white group-hover/row:border-cyan-600',
    hover: 'hover:bg-cyan-50/50',
    hoverText: 'group-hover/row:text-cyan-700',
    ring: 'hover:border-cyan-300/90',
  },
  {
    header: 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700',
    glow: 'bg-emerald-300/35',
    fill: 'bg-gradient-to-r from-emerald-400 to-teal-300',
    num: 'bg-emerald-50 text-emerald-700 border border-emerald-200/80',
    numHover: 'group-hover/row:bg-emerald-600 group-hover/row:text-white group-hover/row:border-emerald-600',
    hover: 'hover:bg-emerald-50/50',
    hoverText: 'group-hover/row:text-emerald-700',
    ring: 'hover:border-emerald-300/90',
  },
  {
    header: 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600',
    glow: 'bg-amber-300/35',
    fill: 'bg-gradient-to-r from-amber-400 to-orange-400',
    num: 'bg-amber-50 text-amber-800 border border-amber-200/80',
    numHover: 'group-hover/row:bg-amber-600 group-hover/row:text-white group-hover/row:border-amber-600',
    hover: 'hover:bg-amber-50/50',
    hoverText: 'group-hover/row:text-amber-800',
    ring: 'hover:border-amber-300/90',
  },
  {
    header: 'bg-gradient-to-r from-rose-600 via-pink-600 to-purple-700',
    glow: 'bg-rose-300/35',
    fill: 'bg-gradient-to-r from-rose-400 to-pink-400',
    num: 'bg-rose-50 text-rose-700 border border-rose-200/80',
    numHover: 'group-hover/row:bg-rose-600 group-hover/row:text-white group-hover/row:border-rose-600',
    hover: 'hover:bg-rose-50/50',
    hoverText: 'group-hover/row:text-rose-700',
    ring: 'hover:border-rose-300/90',
  },
  {
    header: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700',
    glow: 'bg-sky-300/35',
    fill: 'bg-gradient-to-r from-sky-400 to-indigo-400',
    num: 'bg-sky-50 text-sky-700 border border-sky-200/80',
    numHover: 'group-hover/row:bg-sky-600 group-hover/row:text-white group-hover/row:border-sky-600',
    hover: 'hover:bg-sky-50/50',
    hoverText: 'group-hover/row:text-sky-700',
    ring: 'hover:border-sky-300/90',
  },
];

export default function HomeBoardPage({
  searchParams,
}: {
  searchParams?: { grade?: string };
}) {
  const allGrades = getAllGradesWithStats();
  const cookieGradeRaw = cookies().get(GRADE_COOKIE_NAME)?.value;
  const fallbackGrade = isValidGradeNumber(cookieGradeRaw) ? Number(cookieGradeRaw) : 6;
  const requestedGrade = searchParams?.grade ? Number(searchParams.grade) : fallbackGrade;
  const selectedGradeNum =
    requestedGrade >= 6 && requestedGrade <= 12 ? requestedGrade : fallbackGrade;

  const board = getGradeCurriculumBoard(selectedGradeNum) || getGradeCurriculumBoard(6)!;
  const { grade, chapters, stats } = board;

  const thcsGrades = allGrades.filter((g) => g.grade_number >= 6 && g.grade_number <= 9);
  const thptGrades = allGrades.filter((g) => g.grade_number >= 10 && g.grade_number <= 12);

  const quickTools = [
    {
      href: '/flashcards',
      title: 'Flashcard Công Thức & SI',
      desc: 'Lật thẻ 3D Active Recall hơn 250 công thức & đại lượng chuẩn SGK',
      badge: 'Hot • Ôn nhanh',
      icon: <Layers className="h-5 w-5 text-indigo-600" />,
      iconBg: 'bg-indigo-50 border-indigo-200',
      badgeCls: 'bg-indigo-100 text-indigo-800',
    },
    {
      href: '/calculator',
      title: 'Đổi Đơn Vị SI & Giải Nhanh',
      desc: 'Quy đổi 12 nhóm đơn vị SI, rút ẩn & thay số công thức 4 bước',
      badge: 'SI • Solver',
      icon: <Calculator className="h-5 w-5 text-teal-600" />,
      iconBg: 'bg-teal-50 border-teal-200',
      badgeCls: 'bg-teal-100 text-teal-800',
    },
    {
      href: '/progress',
      title: 'Tiến Độ & Hồ Sơ Năng Lực',
      desc: 'Bản đồ nhiệt 92 chủ đề, tháp năng lực 4 cấp độ & nhiệm vụ hôm nay',
      badge: '360° Analytics',
      icon: <BarChart3 className="h-5 w-5 text-emerald-600" />,
      iconBg: 'bg-emerald-50 border-emerald-200',
      badgeCls: 'bg-emerald-100 text-emerald-800',
    },
    {
      href: '/cognitive-traps',
      title: 'Ma Trận Bẫy Nhận Thức',
      desc: 'Chẩn đoán 6 loại bẫy kinh điển: quên đổi đơn vị, nhầm dấu, trực giác',
      badge: 'Chống liệt 2025',
      icon: <Brain className="h-5 w-5 text-rose-600" />,
      iconBg: 'bg-rose-50 border-rose-200',
      badgeCls: 'bg-rose-100 text-rose-800',
    },
  ];

  return (
    <div className="edu-page-shell">
      <GradeContextSync grade={selectedGradeNum} />
      {/* ============================================================ */}
      {/* QUANTUM AURORA HERO & GRADE SELECTOR                         */}
      {/* ============================================================ */}
      <div className="edu-hero-aurora">
        {/* Animated Decorative Orbs & Atomic Ring */}
        <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 animate-blob rounded-full bg-indigo-500/25 blur-3xl" />
        <div
          className="pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 animate-blob rounded-full bg-cyan-500/20 blur-3xl"
          style={{ animationDelay: '3s' }}
        />
        <div className="pointer-events-none absolute right-8 top-8 hidden opacity-15 lg:block">
          <Atom className="h-40 w-40 animate-spin-slow text-cyan-300" />
        </div>

        <div className="relative space-y-6">
          {/* Top Header with Grade Title & Badges */}
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-400/40 bg-indigo-500/25 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-indigo-200 backdrop-blur">
                  <GraduationCap className="h-3.5 w-3.5 text-amber-300" />
                  {grade.level_group} • CHƯƠNG TRÌNH GDPT 2018
                </span>
                <span className="flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                  <Layers className="h-3.5 w-3.5 text-cyan-300" />
                  {chapters.length} chương
                </span>
                <span className="flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                  <BookOpen className="h-3.5 w-3.5 text-emerald-300" />
                  {stats.total_topics} chủ đề
                </span>
              </div>

              <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
                {grade.title}
              </h1>
              <p className="max-w-2xl text-xs leading-relaxed text-indigo-100/85 sm:text-sm">
                {grade.subtitle}
              </p>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <span className="flex items-center gap-1.5 rounded-2xl border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-extrabold text-white backdrop-blur">
                <Sparkles className="h-4 w-4 text-amber-300" />
                <span>Tích hợp 3 bộ SGK: KNTT • CTST • Cánh Diều</span>
              </span>
            </div>
          </div>

          {/* Segmented Glass Grade Switcher */}
          <div className="flex flex-col items-start justify-between gap-3 border-t border-white/15 pt-5 lg:flex-row lg:items-center">
            <div className="flex max-w-full flex-wrap items-center gap-2">
              {/* THCS Group */}
              <div className="flex items-center gap-1 rounded-2xl border border-white/15 bg-white/10 p-1.5 backdrop-blur">
                <span className="px-2 text-[10px] font-extrabold uppercase tracking-wider text-indigo-200">
                  THCS
                </span>
                {thcsGrades.map((g) => {
                  const isSelected = g.grade_number === selectedGradeNum;
                  return (
                    <Link
                      key={g.grade_number}
                      href={`/?grade=${g.grade_number}`}
                      className={`whitespace-nowrap rounded-xl px-3.5 py-1.5 text-xs font-extrabold transition-all duration-200 ease-snap ${
                        isSelected
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-glow scale-105'
                          : 'text-indigo-100 hover:bg-white/15 hover:text-white'
                      }`}
                    >
                      Lớp {g.grade_number}
                    </Link>
                  );
                })}
              </div>

              {/* THPT Group */}
              <div className="flex items-center gap-1 rounded-2xl border border-white/15 bg-white/10 p-1.5 backdrop-blur">
                <span className="px-2 text-[10px] font-extrabold uppercase tracking-wider text-cyan-300">
                  THPT
                </span>
                {thptGrades.map((g) => {
                  const isSelected = g.grade_number === selectedGradeNum;
                  return (
                    <Link
                      key={g.grade_number}
                      href={`/?grade=${g.grade_number}`}
                      className={`whitespace-nowrap rounded-xl px-3.5 py-1.5 text-xs font-extrabold transition-all duration-200 ease-snap ${
                        isSelected
                          ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-glow-cyan scale-105'
                          : 'text-cyan-100 hover:bg-white/15 hover:text-white'
                      }`}
                    >
                      Lớp {g.grade_number}
                    </Link>
                  );
                })}
              </div>
            </div>

            <Link
              href="/progress"
              className="inline-flex items-center gap-1.5 rounded-2xl border border-emerald-400/40 bg-emerald-500/20 px-3.5 py-2 text-xs font-extrabold text-emerald-200 backdrop-blur transition hover:bg-emerald-500/30 hover:text-white"
            >
              <BarChart3 className="h-4 w-4 text-emerald-300" />
              <span>Xem Bản đồ Tiến độ 92 chủ đề →</span>
            </Link>
          </div>

          {/* Glassmorphic KPI Progress Overview Row */}
          {stats && stats.total_topics > 0 && (
            <div className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-3">
              {/* Completion rate */}
              <div className="edu-glass-dark flex items-center gap-3.5 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-xs font-extrabold text-white shadow-glow">
                  {stats.completion_rate}%
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-bold text-indigo-200">Chủ đề đã học</span>
                    <strong className="font-mono text-sm font-extrabold text-white">
                      {stats.completed_topics} / {stats.total_topics}
                    </strong>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/15 p-0.5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 transition-all duration-700"
                      style={{ width: `${stats.completion_rate}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Average Score */}
              <div className="edu-glass-dark flex items-center gap-3.5 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-glow-emerald">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-indigo-200">Điểm kiểm tra trung bình</div>
                  <div className="mt-0.5 text-sm font-extrabold text-white">
                    {stats.average_score !== null ? (
                      <span className="text-base font-extrabold text-emerald-300">
                        {stats.average_score} / 25 điểm
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-indigo-200/70">
                        Chưa làm bài kiểm tra
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Chapter Exams Completed */}
              <div className="edu-glass-dark flex items-center gap-3.5 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md">
                  <FileCheck className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-indigo-200">Đề tổng hợp chương</div>
                  <div className="mt-0.5 text-sm font-bold text-white">
                    Đã hoàn thành{' '}
                    <strong className="font-mono text-base font-extrabold text-amber-300">
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
      {/* SMART STUDY TOOLKIT LAUNCHPAD (4 INTERACTIVE CARDS)          */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        {quickTools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="edu-card-hover group flex flex-col justify-between p-4 sm:p-5"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-110 ${tool.iconBg}`}
                >
                  {tool.icon}
                </div>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-extrabold ${tool.badgeCls}`}
                >
                  {tool.badge}
                </span>
              </div>
              <h3 className="mt-3.5 flex items-center justify-between text-sm font-extrabold text-slate-900 group-hover:text-brand-700">
                <span>{tool.title}</span>
                <ArrowUpRight className="h-4 w-4 text-slate-300 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600" />
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{tool.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* ============================================================ */}
      {/* CHAPTERS SYLLABUS LIST                                       */}
      {/* ============================================================ */}
      <div className="space-y-6">
        {chapters.map((ch, chIdx) => {
          const theme = CHAPTER_THEMES[chIdx % CHAPTER_THEMES.length];
          const chCompleted = ch.completed_topics_count || 0;
          const chTotal = ch.total_topics_count || (ch.topics?.length || 0);
          const chPercent = chTotal > 0 ? Math.round((chCompleted / chTotal) * 100) : 0;

          return (
            <section
              key={ch.id}
              className={`group rounded-3xl border border-slate-200/85 bg-white shadow-card transition-all duration-300 ease-snap hover:shadow-lift ${theme.ring}`}
            >
              {/* Chapter Header — colored band */}
              <div className={`relative rounded-t-3xl ${theme.header} px-5 py-5 text-white sm:px-7`}>
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-t-3xl">
                  <div
                    className={`absolute -right-10 -top-16 h-44 w-44 rounded-full blur-2xl ${theme.glow}`}
                  />
                  <div className="absolute -bottom-20 left-1/3 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                </div>

                <div className="relative flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="rounded-lg bg-white/20 px-2.5 py-0.5 font-mono font-extrabold uppercase tracking-wide text-white ring-1 ring-white/30 backdrop-blur">
                        {ch.code}
                      </span>
                      <span className="rounded-lg bg-black/15 px-2.5 py-0.5 font-bold text-white/95">
                        Đã học {chCompleted}/{chTotal} chủ đề ({chPercent}%)
                      </span>
                      {ch.average_quiz_score !== null && ch.average_quiz_score !== undefined && (
                        <span className="flex items-center gap-1 rounded-lg bg-white/20 px-2 py-0.5 font-extrabold text-white ring-1 ring-white/25">
                          <TrendingUp className="h-3 w-3" />
                          TB: {ch.average_quiz_score}/25
                        </span>
                      )}
                    </div>
                    <h2 className="text-lg font-extrabold tracking-tight text-white drop-shadow-xs sm:text-xl">
                      {ch.title}
                    </h2>
                  </div>

                  {/* Right Actions */}
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/chapter/${ch.id}?tab=exam`}
                      className="inline-flex items-center gap-1.5 rounded-2xl bg-white px-4 py-2.5 text-xs font-extrabold text-slate-900 shadow-lift transition duration-200 ease-snap hover:-translate-y-0.5 hover:bg-indigo-50"
                    >
                      <FileCheck className="h-4 w-4 text-brand-600" />
                      <span>Kiểm tra tổng hợp ({ch.chapter_question_count || 25} câu)</span>
                      {ch.best_exam_score !== null && ch.best_exam_score !== undefined && (
                        <span className="ml-1 rounded-md bg-emerald-600 px-1.5 py-0.5 text-[10px] font-extrabold text-white">
                          {ch.best_exam_score}/25
                        </span>
                      )}
                    </Link>

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
                    className={`h-full transition-[width] duration-700 ease-out ${theme.fill}`}
                    style={{ width: `${chPercent}%` }}
                  />
                </div>
              )}

              {/* Clean List of Topics */}
              {ch.topics && ch.topics.length > 0 ? (
                <div className="divide-y divide-slate-100 overflow-hidden rounded-b-3xl">
                  {ch.topics.map((tp) => {
                    const isCompleted = Boolean(tp.is_completed);
                    return (
                      <Link
                        key={tp.id}
                        href={`/topic/${tp.id}`}
                        className={`group/row flex items-center justify-between gap-4 px-5 py-4 transition-all duration-200 ${theme.hover} sm:px-7`}
                      >
                        <div className="flex min-w-0 items-start gap-4">
                          <div
                            className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-xs font-extrabold transition-all duration-200 group-hover/row:scale-105 ${
                              isCompleted
                                ? 'border border-emerald-300 bg-emerald-50 text-emerald-700 shadow-2xs'
                                : `${theme.num} ${theme.numHover}`
                            }`}
                          >
                            {tp.code.split('-')[1] || tp.order_index}
                          </div>
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3
                                className={`truncate text-sm font-extrabold text-slate-900 transition-colors sm:text-base ${theme.hoverText}`}
                              >
                                {tp.title}
                              </h3>
                              {tp.textbook_tags && tp.textbook_tags.length > 0 && (
                                <div className="hidden items-center gap-1 md:flex">
                                  {tp.textbook_tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[10px] font-bold text-slate-500"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                            <p className="mt-1 line-clamp-1 text-xs text-slate-500">
                              {tp.overview}
                            </p>
                            <div className="mt-1.5 flex flex-wrap items-center gap-3 text-[11px] font-semibold text-slate-400">
                              <span className="inline-flex items-center gap-1">
                                <Calculator className="h-3 w-3 text-indigo-400" />
                                {tp.formula_count} công thức
                              </span>
                              <span>•</span>
                              <span className="inline-flex items-center gap-1">
                                <FlaskConical className="h-3 w-3 text-teal-500" />
                                Mô phỏng 2D
                              </span>
                              <span>•</span>
                              <span>{tp.question_count || 25} câu trắc nghiệm</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-3">
                          <TopicStudyToggleButton
                            topicId={tp.id}
                            initialCompleted={isCompleted}
                            variant="row"
                          />
                          <ChevronRight
                            className={`h-4 w-4 text-slate-300 transition-transform duration-200 group-hover/row:translate-x-1 ${theme.hoverText}`}
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

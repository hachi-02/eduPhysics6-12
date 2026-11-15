'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChapterItem,
  GradeItem,
  QuantityItem,
  QuestionItem,
  TopicSummaryItem,
} from '@/types/cms';
import { KatexFormula, RichPhysicsText, PhysicsMarkdown } from './KatexRenderer';
import { getGradePageTheme } from '@/lib/grade-themes';
import { Quiz25Engine } from './Quiz25Engine';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  CheckSquare,
  FileText,
  Printer,
  ListChecks,
  FunctionSquare,
  Ruler,
  Atom,
  Sparkles,
} from 'lucide-react';

export function ChapterWorkspaceClient({
  chapter,
  grade,
  topics,
  allQuantities,
  examQuestions,
  initialTab,
}: {
  chapter: ChapterItem;
  grade: GradeItem;
  topics: TopicSummaryItem[];
  allQuantities: (QuantityItem & { topic_title: string; topic_code: string })[];
  examQuestions: QuestionItem[];
  initialTab?: 'summary' | 'exam';
}) {
  const [activeTab, setActiveTab] = useState<'summary' | 'exam'>(initialTab || 'summary');
  const theme = getGradePageTheme(grade.grade_number);

  return (
    <div className="edu-page-shell">
      {/* Minimal Breadcrumb */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <Link
          href={`/?grade=${grade.grade_number}`}
          className={`inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 font-extrabold text-slate-700 shadow-2xs transition hover:-translate-y-0.5 ${theme.cardHover}`}
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Quay lại chương trình Lớp {grade.grade_number}</span>
        </Link>
        <span className={`rounded-xl border px-3 py-1 font-mono text-xs font-extrabold ${theme.badgeSoft}`}>
          Mã chương: {chapter.code}
        </span>
      </div>

      {/* Header & 2-Tab Bar */}
      <div className={`overflow-hidden rounded-3xl border bg-white shadow-card ${theme.heroBorder}`}>
        <div className={`relative overflow-hidden px-6 py-7 text-white sm:px-8 ${theme.heroBg}`}>
          <div className={`pointer-events-none absolute -right-20 -top-24 h-72 w-72 animate-blob rounded-full blur-3xl ${theme.heroOrb1}`} />
          <div
            className={`pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 animate-blob rounded-full blur-3xl ${theme.heroOrb2}`}
            style={{ animationDelay: '3s' }}
          />
          <div className="pointer-events-none absolute right-8 top-6 hidden opacity-15 lg:block">
            <Atom className="h-32 w-32 animate-spin-slow text-white" />
          </div>

          <div className="relative">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide backdrop-blur ${theme.heroEyebrow}`}>
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                <span>Tổng kết &amp; Khảo thí chương</span>
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/90">
                Lớp {grade.grade_number} • {topics.length} chủ đề
              </span>
            </div>
            <h1 className="mt-2.5 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
              {chapter.title}
            </h1>
            <p className={`mt-2 max-w-3xl text-xs leading-relaxed sm:text-sm ${theme.heroSubtitle}`}>
              {chapter.description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 bg-slate-50/90 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('summary')}
              className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-2 text-xs font-extrabold transition duration-150 ${
                activeTab === 'summary' ? theme.solidBtn : 'text-slate-600 hover:bg-white hover:text-slate-900'
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>Tóm tắt kiến thức &amp; Công thức chương</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('exam')}
              className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-2 text-xs font-extrabold transition duration-150 ${
                activeTab === 'exam' ? theme.solidBtn : 'text-slate-600 hover:bg-white hover:text-slate-900'
              }`}
            >
              <CheckSquare className="h-4 w-4" />
              <span>Kiểm tra tổng hợp ({examQuestions.length} câu)</span>
            </button>
          </div>

          <Link
            href={`/cheatsheet?grade=${grade.grade_number}&chapterId=${chapter.id}`}
            className="edu-btn-ghost my-1 px-3.5 py-2 text-xs"
          >
            <Printer className={`h-3.5 w-3.5 ${theme.highlightIcon}`} />
            <span>In Cẩm nang A4 Chương này</span>
          </Link>
        </div>
      </div>

      {activeTab === 'summary' ? (
        <div className="animate-fade-in space-y-6">
          {/* Structured Chapter Summary & Formulas */}
          <PhysicsMarkdown text={chapter.summary_markdown} />

          {/* Key Takeaways */}
          {chapter.key_takeaways && chapter.key_takeaways.length > 0 && (
            <div className="edu-card space-y-3 p-6 sm:p-7">
              <h3 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-slate-900">
                <ListChecks className={`h-4 w-4 ${theme.highlightIcon}`} />
                Điểm cốt lõi cần nhớ
              </h3>
              <ul className={`space-y-2.5 rounded-2xl border p-5 ${theme.highlightBoxSubtle}`}>
                {chapter.key_takeaways.map((kt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className={`mt-1 h-4 w-4 shrink-0 ${theme.highlightIcon}`} />
                    <span>
                      <RichPhysicsText text={kt} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Formula Cheatsheet */}
          {chapter.formula_cheatsheet && chapter.formula_cheatsheet.length > 0 && (
            <div className="edu-card space-y-4 p-6 sm:p-7">
              <h2 className="edu-section-title flex items-center gap-2">
                <FunctionSquare className={`h-5 w-5 ${theme.highlightIcon}`} />
                Bảng tóm tắt Công thức toàn chương
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {chapter.formula_cheatsheet.map((fc, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col justify-between space-y-3 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 transition duration-200 ease-snap hover:-translate-y-0.5 hover:bg-white hover:shadow-lift ${theme.cardHover}`}
                  >
                    <div className="text-sm font-extrabold text-slate-900">{fc.name}</div>
                    <div className="overflow-x-auto rounded-xl border border-slate-200/90 bg-white p-4 text-center font-bold text-slate-900 shadow-2xs">
                      <KatexFormula latex={fc.latex} displayMode={true} />
                    </div>
                    <div className="text-xs text-slate-500">{fc.note}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quantities Summary */}
          {allQuantities.length > 0 && (
            <div className="edu-card space-y-4 p-6 sm:p-7">
              <h2 className="edu-section-title flex items-center gap-2">
                <Ruler className={`h-5 w-5 ${theme.highlightIcon}`} />
                Các đại lượng &amp; đơn vị trong chương
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full border-collapse text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/80 text-[11px] font-extrabold uppercase tracking-wide text-slate-500">
                      <th className="px-4 py-3">Bài</th>
                      <th className="px-4 py-3">Đại lượng</th>
                      <th className="px-4 py-3 text-center">Ký hiệu</th>
                      <th className="px-4 py-3">Đơn vị SI</th>
                      <th className="px-4 py-3">Dụng cụ đo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {allQuantities.map((q) => (
                      <tr key={q.id} className="transition-colors hover:bg-slate-50/80">
                        <td className="px-4 py-3 font-mono text-xs font-semibold text-slate-500">
                          {q.topic_code}
                        </td>
                        <td className="px-4 py-3 font-semibold text-slate-900">{q.name}</td>
                        <td className="px-4 py-3 text-center">
                          <span className={`inline-block rounded-lg px-2 py-1 font-bold ${theme.badgeSoft}`}>
                            <KatexFormula latex={q.symbol} />
                          </span>
                        </td>
                        <td className="px-4 py-3 font-mono font-bold text-emerald-700">
                          {q.si_unit}
                        </td>
                        <td className="px-4 py-3 text-slate-600">{q.measuring_device}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Quick links to topics in this chapter */}
          {topics.length > 0 && (
            <div className="edu-card space-y-3 p-6 sm:p-7">
              <h2 className="edu-section-title mb-1 text-base">
                Danh sách các chủ đề trong chương
              </h2>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {topics.map((tp) => (
                  <Link
                    key={tp.id}
                    href={`/topic/${tp.id}`}
                    className={`group flex items-center justify-between gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/50 px-4 py-3 text-xs font-extrabold text-slate-800 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-soft sm:text-sm ${theme.cardHover}`}
                  >
                    <span>{tp.title}</span>
                    <BookOpen className={`h-4 w-4 shrink-0 text-slate-300 transition ${theme.accentText}`} />
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setActiveTab('exam')}
              className={`inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-xs font-extrabold shadow-soft transition sm:text-sm ${theme.solidBtn}`}
            >
              <span>Bắt đầu làm Bài kiểm tra tổng hợp Chương (25 câu)</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="animate-fade-in">
          <Quiz25Engine
            scopeType="chapter"
            scopeId={chapter.id}
            title={`Kiểm tra tổng hợp ${chapter.title}`}
            questions={examQuestions}
          />
        </div>
      )}
    </div>
  );
}

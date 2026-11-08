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

  return (
    <div className="mx-auto max-w-4xl animate-fade-up space-y-6 px-4 py-8 sm:px-6">
      {/* Minimal Breadcrumb */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <Link
          href={`/?grade=${grade.grade_number}`}
          className="flex items-center gap-1 rounded-lg px-1.5 py-1 font-medium transition hover:bg-white hover:text-brand-700 hover:shadow-soft"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Quay lại chương trình Lớp {grade.grade_number}</span>
        </Link>
        <span className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] font-semibold text-slate-500">
          Mã chương: {chapter.code}
        </span>
      </div>

      {/* Header & 2-Tab Bar */}
      <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-card">
        <div className="relative overflow-hidden bg-brand-gradient px-5 py-6 text-white sm:px-7">
          <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/4 h-44 w-44 rounded-full bg-accent-300/20 blur-3xl" />
          <div className="relative">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-white/15 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide backdrop-blur">
                Tổng kết chương
              </span>
              <span className="text-[11px] font-medium text-white/75">Lớp {grade.grade_number}</span>
            </div>
            <h1 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">{chapter.title}</h1>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-white/80">
              {chapter.description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-50/70 px-3 py-2.5 sm:px-4">
          <div className="flex items-center gap-1.5 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('summary')}
              className={`edu-tab ${activeTab === 'summary' ? 'edu-tab-active' : 'edu-tab-idle'}`}
            >
              <FileText className="w-4 h-4" />
              <span>Tóm tắt kiến thức &amp; Công thức chương</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('exam')}
              className={`edu-tab ${activeTab === 'exam' ? 'edu-tab-active' : 'edu-tab-idle'}`}
            >
              <CheckSquare className="w-4 h-4" />
              <span>Kiểm tra tổng hợp ({examQuestions.length} câu)</span>
            </button>
          </div>

          <Link
            href={`/cheatsheet?grade=${grade.grade_number}&chapterId=${chapter.id}`}
            className="edu-btn-ghost my-1 px-3 py-1.5 text-xs"
          >
            <Printer className="w-3.5 h-3.5 text-accent-600" />
            <span>In Cẩm nang A4 Chương này</span>
          </Link>
        </div>
      </div>

      {activeTab === 'summary' ? (
        <div className="animate-fade-in space-y-6">
          {/* Core Summary & Key Takeaways */}
          <div className="edu-card space-y-6 p-6 sm:p-8">
            <div className="text-sm text-slate-700 sm:text-base">
              <PhysicsMarkdown text={chapter.summary_markdown} />
            </div>

            {chapter.key_takeaways && chapter.key_takeaways.length > 0 && (
              <div className="space-y-3 border-t border-slate-100 pt-5">
                <h3 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-slate-900">
                  <ListChecks className="h-4 w-4 text-brand-600" />
                  Điểm cốt lõi cần nhớ
                </h3>
                <ul className="space-y-2.5 rounded-2xl border border-brand-100 bg-brand-50/40 p-4">
                  {chapter.key_takeaways.map((kt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                      <span>
                        <RichPhysicsText text={kt} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Formula Cheatsheet */}
          {chapter.formula_cheatsheet && chapter.formula_cheatsheet.length > 0 && (
            <div className="edu-card space-y-4 p-6">
              <h2 className="edu-section-title flex items-center gap-2">
                <FunctionSquare className="h-5 w-5 text-brand-600" />
                Bảng tóm tắt Công thức toàn chương
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {chapter.formula_cheatsheet.map((fc, idx) => (
                  <div
                    key={idx}
                    className="space-y-2 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 transition duration-200 ease-snap hover:border-brand-200 hover:bg-white hover:shadow-soft"
                  >
                    <div className="text-sm font-bold text-slate-900">{fc.name}</div>
                    <div className="overflow-x-auto rounded-xl border border-slate-800/10 bg-slate-900 p-3 text-center font-bold text-white">
                      <KatexFormula latex={fc.latex} />
                    </div>
                    <div className="text-xs text-slate-500">{fc.note}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quantities Summary */}
          {allQuantities.length > 0 && (
            <div className="edu-card space-y-4 p-6">
              <h2 className="edu-section-title flex items-center gap-2">
                <Ruler className="h-5 w-5 text-brand-600" />
                Các đại lượng &amp; đơn vị trong chương
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full border-collapse text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/80 text-[11px] font-bold uppercase tracking-wide text-slate-500">
                      <th className="px-4 py-3">Bài</th>
                      <th className="px-4 py-3">Đại lượng</th>
                      <th className="px-4 py-3 text-center">Ký hiệu</th>
                      <th className="px-4 py-3">Đơn vị SI</th>
                      <th className="px-4 py-3">Dụng cụ đo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {allQuantities.map((q) => (
                      <tr key={q.id} className="transition-colors hover:bg-brand-50/30">
                        <td className="px-4 py-3 font-mono text-xs font-semibold text-slate-500">
                          {q.topic_code}
                        </td>
                        <td className="px-4 py-3 font-semibold text-slate-900">{q.name}</td>
                        <td className="px-4 py-3 text-center">
                          <span className="inline-block rounded-lg bg-slate-100 px-2 py-1 font-bold text-slate-800">
                            <KatexFormula latex={q.symbol} />
                          </span>
                        </td>
                        <td className="px-4 py-3 font-semibold text-brand-600">{q.si_unit}</td>
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
            <div className="edu-card space-y-2 p-6">
              <h2 className="edu-section-title mb-1 text-base">Danh sách các chủ đề trong chương</h2>
              <div className="divide-y divide-slate-100">
                {topics.map((tp) => (
                  <Link
                    key={tp.id}
                    href={`/topic/${tp.id}`}
                    className="group flex items-center justify-between gap-3 rounded-xl px-2 py-3 text-xs font-medium text-slate-700 transition hover:bg-brand-50/50 hover:text-brand-700 sm:text-sm"
                  >
                    <span>{tp.title}</span>
                    <BookOpen className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:text-brand-600" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <button type="button" onClick={() => setActiveTab('exam')} className="edu-btn-primary">
              <span>Bắt đầu làm Bài kiểm tra tổng hợp Chương (25 câu)</span>
              <ArrowRight className="w-4 h-4" />
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

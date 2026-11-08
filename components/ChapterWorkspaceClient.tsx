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
import { KatexFormula, RichPhysicsText } from './KatexRenderer';
import { Quiz25Engine } from './Quiz25Engine';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  CheckSquare,
  FileText,
  Printer,
} from 'lucide-react';

export function ChapterWorkspaceClient({
  chapter,
  grade,
  topics,
  allQuantities,
  examQuestions,
}: {
  chapter: ChapterItem;
  grade: GradeItem;
  topics: TopicSummaryItem[];
  allQuantities: (QuantityItem & { topic_title: string; topic_code: string })[];
  examQuestions: QuestionItem[];
}) {
  const [activeTab, setActiveTab] = useState<'summary' | 'exam'>('summary');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* Minimal Breadcrumb */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <Link
          href={`/?grade=${grade.grade_number}`}
          className="hover:text-slate-900 flex items-center gap-1 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Quay lại chương trình Lớp {grade.grade_number}</span>
        </Link>
        <span>Mã chương: {chapter.code}</span>
      </div>

      {/* Calm Header & 2-Tab Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
        <div className="p-6 pb-5">
          <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
            Tổng kết Chương • Lớp {grade.grade_number}
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            {chapter.title}
          </h1>
          <p className="text-sm text-slate-500 mt-1 leading-relaxed">
            {chapter.description}
          </p>
        </div>

        <div className="px-6 border-t border-slate-100 bg-slate-50/60 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('summary')}
              className={`py-3.5 px-4 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition ${
                activeTab === 'summary'
                  ? 'border-indigo-600 text-indigo-600 bg-white/80'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Tóm tắt kiến thức & Công thức chương</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('exam')}
              className={`py-3.5 px-4 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition ${
                activeTab === 'exam'
                  ? 'border-indigo-600 text-indigo-600 bg-white/80'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <CheckSquare className="w-4 h-4" />
              <span>Kiểm tra tổng hợp Chương ({examQuestions.length} câu)</span>
            </button>
          </div>

          <Link
            href={`/cheatsheet?grade=${grade.grade_number}&chapterId=${chapter.id}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-xs font-semibold shadow-xs transition my-1"
          >
            <Printer className="w-3.5 h-3.5 text-blue-600" />
            <span>In Cẩm nang A4 Chương này</span>
          </Link>
        </div>
      </div>

      {activeTab === 'summary' ? (
        <div className="space-y-6">
          {/* Core Summary & Key Takeaways */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="text-sm sm:text-base text-slate-700 leading-7 whitespace-pre-line">
              <RichPhysicsText text={chapter.summary_markdown} />
            </div>

            {chapter.key_takeaways && chapter.key_takeaways.length > 0 && (
              <div className="pt-5 border-t border-slate-100 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Điểm cốt lõi cần nhớ:
                </h3>
                <ul className="space-y-2.5">
                  {chapter.key_takeaways.map((kt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-1" />
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
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 space-y-4">
              <h2 className="text-base font-bold text-slate-900">
                Bảng tóm tắt Công thức toàn chương
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {chapter.formula_cheatsheet.map((fc, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 space-y-2"
                  >
                    <div className="text-sm font-semibold text-slate-900">{fc.name}</div>
                    <div className="p-3 rounded-lg bg-white border border-slate-200/80 text-center font-bold text-slate-900 overflow-x-auto">
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
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 space-y-4">
              <h2 className="text-base font-bold text-slate-900">
                Các Đại lượng & Đơn vị trong chương
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 font-semibold">
                      <th className="py-2.5 pr-4">Bài</th>
                      <th className="py-2.5 px-4">Đại lượng</th>
                      <th className="py-2.5 px-4 text-center">Ký hiệu</th>
                      <th className="py-2.5 px-4">Đơn vị SI</th>
                      <th className="py-2.5 pl-4">Dụng cụ đo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {allQuantities.map((q) => (
                      <tr key={q.id}>
                        <td className="py-3 pr-4 text-xs font-semibold text-slate-500">
                          {q.topic_code}
                        </td>
                        <td className="py-3 px-4 font-semibold text-slate-900">{q.name}</td>
                        <td className="py-3 px-4 text-center">
                          <KatexFormula latex={q.symbol} />
                        </td>
                        <td className="py-3 px-4 font-semibold text-indigo-600">{q.si_unit}</td>
                        <td className="py-3 pl-4 text-slate-600">{q.measuring_device}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Quick links to topics in this chapter */}
          {topics.length > 0 && (
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 space-y-3">
              <h2 className="text-sm font-bold text-slate-900">
                Danh sách các chủ đề trong chương:
              </h2>
              <div className="divide-y divide-slate-100">
                {topics.map((tp) => (
                  <Link
                    key={tp.id}
                    href={`/topic/${tp.id}`}
                    className="py-2.5 flex items-center justify-between text-xs sm:text-sm text-slate-700 hover:text-indigo-600 transition"
                  >
                    <span className="font-medium">{tp.title}</span>
                    <BookOpen className="w-4 h-4 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setActiveTab('exam')}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm transition"
            >
              <span>Bắt đầu làm Bài kiểm tra tổng hợp Chương (25 câu)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <Quiz25Engine
          scopeType="chapter"
          scopeId={chapter.id}
          title={`Kiểm tra tổng hợp ${chapter.title}`}
          questions={examQuestions}
        />
      )}
    </div>
  );
}

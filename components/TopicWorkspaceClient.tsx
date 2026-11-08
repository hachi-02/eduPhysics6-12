'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TopicDetail } from '@/types/cms';
import { KatexFormula, RichPhysicsText } from './KatexRenderer';
import { InteractivePhysicsLab } from './InteractivePhysicsLab';
import { Quiz25Engine } from './Quiz25Engine';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calculator,
  FlaskConical,
  FileText,
  CheckSquare,
  CheckCircle2,
  Lightbulb,
} from 'lucide-react';

type TabKey = 'theory' | 'formulas' | 'simulation' | 'examples' | 'quiz';

export function TopicWorkspaceClient({
  topic,
}: {
  topic: TopicDetail & {
    prevTopicId: number | null;
    nextTopicId: number | null;
  };
}) {
  const [activeTab, setActiveTab] = useState<TabKey>('theory');

  const tabs: { key: TabKey; label: string; icon: React.ReactNode; count?: number }[] = [
    { key: 'theory', label: 'Lý thuyết', icon: <BookOpen className="w-4 h-4" /> },
    {
      key: 'formulas',
      label: 'Công thức & Đại lượng',
      icon: <Calculator className="w-4 h-4" />,
      count: topic.formulas.length + topic.quantities.length,
    },
    {
      key: 'simulation',
      label: 'Mô phỏng',
      icon: <FlaskConical className="w-4 h-4" />,
    },
    {
      key: 'examples',
      label: 'Ví dụ giải mẫu',
      icon: <FileText className="w-4 h-4" />,
      count: topic.examples.length,
    },
    {
      key: 'quiz',
      label: 'Kiểm tra (25 câu)',
      icon: <CheckSquare className="w-4 h-4" />,
      count: topic.questions.length,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* Minimal Breadcrumb & Lesson Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
        <div className="flex items-center gap-1.5">
          <Link
            href={`/?grade=${topic.grade_number}`}
            className="hover:text-slate-900 flex items-center gap-1 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Lớp {topic.grade_number}</span>
          </Link>
          <span>/</span>
          <Link href={`/chapter/${topic.chapter_id}`} className="hover:text-slate-900 transition">
            {topic.chapter_title}
          </Link>
        </div>

        <div className="flex items-center gap-2">
          {topic.prevTopicId && (
            <Link
              href={`/topic/${topic.prevTopicId}`}
              className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 transition"
            >
              ← Bài trước
            </Link>
          )}
          {topic.nextTopicId && (
            <Link
              href={`/topic/${topic.nextTopicId}`}
              className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 transition"
            >
              Bài tiếp →
            </Link>
          )}
        </div>
      </div>

      {/* Calm, Clean Lesson Title Header + Focused Tab Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
        <div className="p-6 pb-5">
          <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
            {topic.code} • Tổng hợp chuẩn 3 bộ SGK
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            {topic.title}
          </h1>
          <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
            {topic.overview}
          </p>
        </div>

        {/* Focused Horizontal Tab Bar */}
        <div className="px-6 border-t border-slate-100 bg-slate-50/60 flex items-center gap-1 overflow-x-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`py-3.5 px-4 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap flex items-center gap-2 transition ${
                  isActive
                    ? 'border-indigo-600 text-indigo-600 bg-white/80'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span
                    className={`px-1.5 py-0.5 rounded-md text-[11px] ${
                      isActive ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-200/70 text-slate-600'
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 1: LÝ THUYẾT (Clean Book Reading Mode) */}
      {activeTab === 'theory' && (
        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-8">
            {topic.theory_sections.map((sec, idx) => (
              <article
                key={idx}
                className={idx > 0 ? 'pt-7 border-t border-slate-100 space-y-4' : 'space-y-4'}
              >
                <h2 className="text-lg font-bold text-slate-900">{sec.heading}</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-7">
                  <RichPhysicsText text={sec.content} />
                </p>

                {sec.keyPoints && sec.keyPoints.length > 0 && (
                  <ul className="space-y-2.5 pl-1 pt-1">
                    {sec.keyPoints.map((kp, kIdx) => (
                      <li key={kIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-1" />
                        <span className="leading-relaxed">
                          <RichPhysicsText text={kp} />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {sec.realWorldApplication && (
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-4 flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold text-slate-900">Thực tế: </strong>
                      <RichPhysicsText text={sec.realWorldApplication} />
                    </div>
                  </div>
                )}
              </article>
            ))}

            {topic.summary_note && (
              <div className="rounded-xl bg-indigo-50/70 border border-indigo-100 p-4 text-sm text-indigo-950">
                <strong className="font-semibold text-indigo-900">Tóm tắt trọng tâm: </strong>
                <RichPhysicsText text={topic.summary_note} />
              </div>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setActiveTab('formulas')}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm transition"
            >
              <span>Tiếp theo: Công thức & Đại lượng</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: CÔNG THỨC & ĐẠI LƯỢNG */}
      {activeTab === 'formulas' && (
        <div className="space-y-6">
          {/* Formulas List */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 space-y-5">
            <h2 className="text-base font-bold text-slate-900">
              1. Hệ thống Công thức cần nhớ
            </h2>

            <div className="space-y-4">
              {topic.formulas.map((fm) => (
                <div
                  key={fm.id}
                  className="rounded-xl border border-slate-200 p-5 space-y-4 bg-slate-50/40"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">{fm.name}</h3>
                    <span className="text-xs font-mono text-slate-500 bg-white px-2.5 py-1 rounded border border-slate-200">
                      {fm.plain_expression}
                    </span>
                  </div>

                  <div className="py-4 px-4 rounded-xl bg-white border border-slate-200/90 text-center overflow-x-auto">
                    <div className="text-lg sm:text-xl text-slate-900 font-bold">
                      <KatexFormula latex={fm.latex_expression} displayMode={true} />
                    </div>
                  </div>

                  {fm.variables && fm.variables.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                      {fm.variables.map((v, vIdx) => (
                        <div key={vIdx} className="flex items-start gap-2 text-slate-600">
                          <span className="font-bold text-indigo-700">
                            <KatexFormula latex={v.symbol} />:
                          </span>
                          <span>
                            {v.name} <strong className="text-slate-800">({v.unit})</strong>
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {fm.derived_formulas && fm.derived_formulas.length > 0 && (
                    <div className="pt-3 border-t border-slate-200/80 space-y-1.5 text-xs sm:text-sm">
                      <div className="text-xs font-semibold text-slate-500">Công thức suy ra:</div>
                      {fm.derived_formulas.map((df, dIdx) => (
                        <div key={dIdx} className="flex flex-wrap items-center gap-2 text-slate-700">
                          <span className="font-semibold text-slate-900">
                            <KatexFormula latex={df.expression} />
                          </span>
                          <span className="text-slate-500">— {df.description}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {fm.usage_note && (
                    <div className="text-xs text-amber-900 bg-amber-50/80 border border-amber-200/80 rounded-lg px-3.5 py-2">
                      <strong>Lưu ý: </strong>
                      {fm.usage_note}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quantities Table */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 space-y-4">
            <h2 className="text-base font-bold text-slate-900">
              2. Bảng các Đại lượng & Đơn vị đo
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 font-semibold">
                    <th className="py-3 pr-4">Đại lượng</th>
                    <th className="py-3 px-4 text-center">Ký hiệu</th>
                    <th className="py-3 px-4">Đơn vị SI</th>
                    <th className="py-3 px-4">Đơn vị khác</th>
                    <th className="py-3 pl-4">Dụng cụ đo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {topic.quantities.map((qty) => (
                    <tr key={qty.id}>
                      <td className="py-3.5 pr-4 font-semibold text-slate-900">
                        <div>{qty.name}</div>
                        <div className="text-xs font-normal text-slate-500 mt-0.5">
                          {qty.description}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="px-2 py-1 rounded bg-slate-100 text-slate-800 font-bold">
                          <KatexFormula latex={qty.symbol} />
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-indigo-600">{qty.si_unit}</td>
                      <td className="py-3.5 px-4 text-slate-600">{qty.other_units}</td>
                      <td className="py-3.5 pl-4 text-slate-600">{qty.measuring_device}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setActiveTab('theory')}
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 text-xs sm:text-sm font-medium"
            >
              ← Quay lại Lý thuyết
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('simulation')}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm transition"
            >
              <span>Tiếp theo: Thí nghiệm mô phỏng</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* TAB 3: THÍ NGHIỆM MÔ PHỎNG */}
      {activeTab === 'simulation' && (
        <div className="space-y-5">
          {topic.simulations.map((sim) => (
            <InteractivePhysicsLab key={sim.id} simulation={sim} />
          ))}

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setActiveTab('formulas')}
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 text-xs sm:text-sm font-medium"
            >
              ← Công thức & Đại lượng
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('examples')}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm transition"
            >
              <span>Tiếp theo: Ví dụ giải mẫu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* TAB 4: VÍ DỤ GIẢI MẪU */}
      {activeTab === 'examples' && (
        <div className="space-y-5">
          {topic.examples.map((ex) => (
            <div
              key={ex.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-bold text-slate-900">{ex.title}</h3>
                <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-600">
                  {ex.difficulty}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-sm text-slate-800 leading-relaxed">
                <strong className="text-slate-900">Đề bài: </strong>
                <RichPhysicsText text={ex.problem_statement} />
              </div>

              <div className="text-xs sm:text-sm text-slate-600">
                <strong className="text-slate-800">Tóm tắt: </strong>
                <RichPhysicsText text={ex.given_summary} />
              </div>

              <div className="space-y-2 pt-1">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Lời giải:
                </div>
                {ex.solution_steps.map((step, sIdx) => (
                  <div
                    key={sIdx}
                    className="text-sm text-slate-700 leading-relaxed pl-3 border-l-2 border-indigo-200 py-0.5"
                  >
                    <RichPhysicsText text={step} />
                  </div>
                ))}
              </div>

              <div className="pt-2 text-sm font-semibold text-emerald-700">
                Đáp số: <RichPhysicsText text={ex.final_answer} />
              </div>
            </div>
          ))}

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setActiveTab('simulation')}
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 text-xs sm:text-sm font-medium"
            >
              ← Thí nghiệm mô phỏng
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('quiz')}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm transition"
            >
              <span>Làm bài Kiểm tra cuối bài (25 câu)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* TAB 5: BÀI KIỂM TRA 25 CÂU */}
      {activeTab === 'quiz' && (
        <Quiz25Engine
          scopeType="topic"
          scopeId={topic.id}
          title={`Kiểm tra: ${topic.title}`}
          questions={topic.questions}
        />
      )}
    </div>
  );
}

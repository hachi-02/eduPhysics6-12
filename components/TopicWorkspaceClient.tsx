'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TopicDetail } from '@/types/cms';
import { KatexFormula, RichPhysicsText } from './KatexRenderer';
import { InteractivePhysicsLab } from './InteractivePhysicsLab';
import { Quiz25Engine } from './Quiz25Engine';
import { TopicStudyToggleButton } from './TopicStudyToggleButton';
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
  Ruler,
  PenLine,
  GitBranch,
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
    <div className="mx-auto max-w-4xl animate-fade-up space-y-6 px-4 py-8 sm:px-6">
      {/* Minimal Breadcrumb & Lesson Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
        <div className="flex items-center gap-1.5">
          <Link
            href={`/?grade=${topic.grade_number}`}
            className="flex items-center gap-1 rounded-lg px-1.5 py-1 font-medium transition hover:bg-white hover:text-brand-700 hover:shadow-soft"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Lớp {topic.grade_number}</span>
          </Link>
          <span className="text-slate-300">/</span>
          <Link
            href={`/chapter/${topic.chapter_id}`}
            className="rounded-lg px-1.5 py-1 font-medium transition hover:bg-white hover:text-brand-700 hover:shadow-soft"
          >
            {topic.chapter_title}
          </Link>
        </div>

        <div className="flex items-center gap-2">
          {topic.prevTopicId && (
            <Link
              href={`/topic/${topic.prevTopicId}`}
              className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 font-medium text-slate-600 shadow-soft transition hover:border-brand-200 hover:text-brand-700"
            >
              ← Bài trước
            </Link>
          )}
          {topic.nextTopicId && (
            <Link
              href={`/topic/${topic.nextTopicId}`}
              className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 font-medium text-slate-600 shadow-soft transition hover:border-brand-200 hover:text-brand-700"
            >
              Bài tiếp →
            </Link>
          )}
        </div>
      </div>

      {/* Lesson Title Header + Focused Tab Bar */}
      <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-card">
        <div className="relative overflow-hidden bg-brand-gradient px-5 py-6 text-white sm:px-7">
          <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-44 w-44 rounded-full bg-accent-300/20 blur-3xl" />
          <div className="relative">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-white/15 px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-wide backdrop-blur">
                  {topic.code}
                </span>
                <span className="text-[11px] font-medium text-white/75">
                  Tổng hợp chuẩn 3 bộ SGK
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <TopicStudyToggleButton
                  topicId={topic.id}
                  initialCompleted={Boolean(topic.is_completed)}
                  variant="header"
                />
                <Link
                  href={`/knowledge-graph?focus=${topic.code}`}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-bold text-white backdrop-blur transition hover:bg-white/25"
                >
                  <GitBranch className="h-3.5 w-3.5" />
                  <span>Cây tiền đề &amp; Truy vết lỗ hổng</span>
                </Link>
              </div>
            </div>
            <h1 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              {topic.title}
            </h1>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-white/80">
              {topic.overview}
            </p>
          </div>
        </div>

        {/* Focused Horizontal Tab Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto bg-slate-50/70 px-3 py-2.5 sm:px-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`edu-tab ${isActive ? 'edu-tab-active' : 'edu-tab-idle'}`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span
                    className={`rounded-md px-1.5 py-0.5 text-[11px] font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200/70 text-slate-600'
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

      {/* TAB 1: LÝ THUYẾT */}
      {activeTab === 'theory' && (
        <div className="animate-fade-in space-y-5">
          <div className="edu-card space-y-8 p-6 sm:p-8">
            {topic.theory_sections.map((sec, idx) => (
              <article
                key={idx}
                className={idx > 0 ? 'space-y-4 border-t border-slate-100 pt-7' : 'space-y-4'}
              >
                <h2 className="flex items-start gap-2.5 text-lg font-extrabold tracking-tight text-slate-900">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-[11px] font-extrabold text-white">
                    {idx + 1}
                  </span>
                  <span>{sec.heading}</span>
                </h2>
                <p className="text-sm leading-7 text-slate-700 sm:text-base">
                  <RichPhysicsText text={sec.content} />
                </p>

                {sec.keyPoints && sec.keyPoints.length > 0 && (
                  <ul className="space-y-2.5 rounded-2xl border border-brand-100 bg-brand-50/40 p-4 pl-1 sm:pl-4">
                    {sec.keyPoints.map((kp, kIdx) => (
                      <li key={kIdx} className="flex items-start gap-2.5 pl-3 text-sm text-slate-700 sm:pl-0">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                        <span className="leading-relaxed">
                          <RichPhysicsText text={kp} />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {sec.realWorldApplication && (
                  <div className="flex items-start gap-3 rounded-2xl border border-amber-200/80 bg-amber-50/70 p-4 text-xs text-amber-950 sm:text-sm">
                    <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    <div>
                      <strong className="font-bold text-amber-900">Thực tế: </strong>
                      <RichPhysicsText text={sec.realWorldApplication} />
                    </div>
                  </div>
                )}
              </article>
            ))}

            {topic.summary_note && (
              <div className="rounded-2xl border border-brand-200/70 bg-gradient-to-r from-brand-50 to-violetBrand-50/60 p-4 text-sm text-brand-950">
                <strong className="font-bold text-brand-900">Tóm tắt trọng tâm: </strong>
                <RichPhysicsText text={topic.summary_note} />
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <TopicStudyToggleButton
              topicId={topic.id}
              initialCompleted={Boolean(topic.is_completed)}
              variant="footer"
            />
            <button type="button" onClick={() => setActiveTab('formulas')} className="edu-btn-primary">
              <span>Tiếp theo: Công thức &amp; Đại lượng</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: CÔNG THỨC & ĐẠI LƯỢNG */}
      {activeTab === 'formulas' && (
        <div className="animate-fade-in space-y-6">
          {/* Formulas List */}
          <div className="edu-card space-y-5 p-6">
            <h2 className="edu-section-title flex items-center gap-2">
              <Calculator className="h-5 w-5 text-brand-600" />
              1. Hệ thống công thức cần nhớ
            </h2>

            <div className="space-y-4">
              {topic.formulas.map((fm) => (
                <div
                  key={fm.id}
                  className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50/40 p-5 transition duration-200 ease-snap hover:border-brand-200 hover:bg-white hover:shadow-soft"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm font-extrabold text-slate-900 sm:text-base">{fm.name}</h3>
                    <span className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 font-mono text-xs text-slate-500">
                      {fm.plain_expression}
                    </span>
                  </div>

                  <div className="overflow-x-auto rounded-2xl border border-slate-800/10 bg-slate-900 px-4 py-5 text-center shadow-inner">
                    <div className="text-lg font-bold text-white sm:text-xl">
                      <KatexFormula latex={fm.latex_expression} displayMode={true} />
                    </div>
                  </div>

                  {fm.variables && fm.variables.length > 0 && (
                    <div className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-2 sm:text-sm">
                      {fm.variables.map((v, vIdx) => (
                        <div
                          key={vIdx}
                          className="flex items-start gap-2 rounded-xl border border-slate-200/70 bg-white px-3 py-2 text-slate-600"
                        >
                          <span className="font-bold text-brand-700">
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
                    <div className="space-y-1.5 border-t border-slate-200/80 pt-3 text-xs sm:text-sm">
                      <div className="text-[11px] font-bold uppercase tracking-wide text-slate-500">
                        Công thức suy ra
                      </div>
                      {fm.derived_formulas.map((df, dIdx) => (
                        <div key={dIdx} className="flex flex-wrap items-center gap-2 text-slate-700">
                          <span className="font-semibold text-slate-900">
                            <KatexFormula latex={df.expression} />
                          </span>
                          <span className="text-slate-500">→ {df.description}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {fm.usage_note && (
                    <div className="rounded-xl border border-amber-200/80 bg-amber-50/80 px-3.5 py-2 text-xs text-amber-900">
                      <strong>Lưu ý: </strong>
                      {fm.usage_note}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quantities Table */}
          <div className="edu-card space-y-4 p-6">
            <h2 className="edu-section-title flex items-center gap-2">
              <Ruler className="h-5 w-5 text-brand-600" />
              2. Bảng các đại lượng &amp; đơn vị đo
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full border-collapse text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80 text-[11px] font-bold uppercase tracking-wide text-slate-500">
                    <th className="px-4 py-3">Đại lượng</th>
                    <th className="px-4 py-3 text-center">Kí hiệu</th>
                    <th className="px-4 py-3">Đơn vị SI</th>
                    <th className="px-4 py-3">Đơn vị khác</th>
                    <th className="px-4 py-3">Dụng cụ đo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {topic.quantities.map((qty) => (
                    <tr key={qty.id} className="transition-colors hover:bg-brand-50/30">
                      <td className="px-4 py-3.5 font-semibold text-slate-900">
                        <div>{qty.name}</div>
                        <div className="mt-0.5 text-xs font-normal text-slate-500">
                          {qty.description}
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        <span className="inline-block rounded-lg bg-slate-100 px-2 py-1 font-bold text-slate-800">
                          <KatexFormula latex={qty.symbol} />
                        </span>
                      </td>
                      <td className="px-4 py-3.5 font-semibold text-brand-600">{qty.si_unit}</td>
                      <td className="px-4 py-3.5 text-slate-600">{qty.other_units}</td>
                      <td className="px-4 py-3.5 text-slate-600">{qty.measuring_device}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-2">
            <button type="button" onClick={() => setActiveTab('theory')} className="edu-btn-ghost">
              ← Quay lại Lý thuyết
            </button>
            <button type="button" onClick={() => setActiveTab('simulation')} className="edu-btn-primary">
              <span>Tiếp theo: Thí nghiệm mô phỏng</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* TAB 3: THÍ NGHIỆM MÔ PHỎNG */}
      {activeTab === 'simulation' && (
        <div className="animate-fade-in space-y-5">
          {topic.simulations.map((sim) => (
            <InteractivePhysicsLab key={sim.id} simulation={sim} />
          ))}

          <div className="flex flex-wrap justify-between gap-2">
            <button type="button" onClick={() => setActiveTab('formulas')} className="edu-btn-ghost">
              ← Công thức &amp; Đại lượng
            </button>
            <button type="button" onClick={() => setActiveTab('examples')} className="edu-btn-primary">
              <span>Tiếp theo: Ví dụ giải mẫu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* TAB 4: VÍ DỤ GIẢI MẪU */}
      {activeTab === 'examples' && (
        <div className="animate-fade-in space-y-5">
          {topic.examples.map((ex) => (
            <div key={ex.id} className="edu-card space-y-4 p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="flex items-start gap-2 text-base font-extrabold text-slate-900">
                  <PenLine className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {ex.title}
                </h3>
                <span className="edu-chip bg-slate-100 text-slate-600">{ex.difficulty}</span>
              </div>

              <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4 text-sm leading-relaxed text-slate-800">
                <strong className="text-slate-900">Đề bài: </strong>
                <RichPhysicsText text={ex.problem_statement} />
              </div>

              <div className="text-xs text-slate-600 sm:text-sm">
                <strong className="text-slate-800">Tóm tắt: </strong>
                <RichPhysicsText text={ex.given_summary} />
              </div>

              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Lời giải
                </div>
                {ex.solution_steps.map((step, sIdx) => (
                  <div
                    key={sIdx}
                    className="relative border-l-2 border-brand-200 py-0.5 pl-4 text-sm leading-relaxed text-slate-700"
                  >
                    <span className="absolute -left-[5px] top-2 h-2 w-2 rounded-full bg-brand-500" />
                    <RichPhysicsText text={step} />
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-2 rounded-xl border border-emerald-200/80 bg-emerald-50/70 px-3.5 py-2.5 text-sm font-semibold text-emerald-800">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  Đáp số: <RichPhysicsText text={ex.final_answer} />
                </span>
              </div>
            </div>
          ))}

          <div className="flex flex-wrap justify-between gap-2">
            <button type="button" onClick={() => setActiveTab('simulation')} className="edu-btn-ghost">
              ← Thí nghiệm mô phỏng
            </button>
            <button type="button" onClick={() => setActiveTab('quiz')} className="edu-btn-primary">
              <span>Làm bài Kiểm tra cuối bài (25 câu)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* TAB 5: BÀI KIỂM TRA 25 CÂU */}
      {activeTab === 'quiz' && (
        <div className="animate-fade-in">
          <Quiz25Engine
            scopeType="topic"
            scopeId={topic.id}
            title={`Kiểm tra: ${topic.title}`}
            questions={topic.questions}
          />
        </div>
      )}
    </div>
  );
}

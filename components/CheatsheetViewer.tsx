'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CheatsheetGradeData, GradeItem } from '@/types/cms';
import { KatexFormula, RichPhysicsText } from './KatexRenderer';
import { DropdownMenu, DropdownItem } from './ui/DropdownMenu';
import { SlidersHorizontal, ChevronDown, Printer, ArrowLeft, BookMarked, Sigma } from 'lucide-react';

interface CheatsheetViewerProps {
  data: CheatsheetGradeData;
  allGrades: GradeItem[];
  selectedGrade: number;
  initialChapterId?: number;
}

export default function CheatsheetViewer({
  data,
  allGrades,
  selectedGrade,
  initialChapterId,
}: CheatsheetViewerProps) {
  const router = useRouter();

  // Validate initialChapterId belongs to current grade's chapters
  const validInitialChapterId =
    initialChapterId && data.chapters.some((ch) => ch.id === initialChapterId)
      ? initialChapterId
      : 'all';

  const [selectedChapterId, setSelectedChapterId] = useState<number | 'all'>(
    validInitialChapterId
  );
  const [viewMode, setViewMode] = useState<'full' | 'compact'>('full');
  const [showQuantities, setShowQuantities] = useState<boolean>(true);
  const [showDerived, setShowDerived] = useState<boolean>(true);

  // Automatically reset selectedChapterId to 'all' or new initialChapterId when grade changes
  React.useEffect(() => {
    if (initialChapterId && data.chapters.some((ch) => ch.id === initialChapterId)) {
      setSelectedChapterId(initialChapterId);
    } else {
      setSelectedChapterId('all');
    }
  }, [selectedGrade, data.grade.id, initialChapterId]);

  // Safe fallback if selectedChapterId doesn't belong to current grade's chapters
  const activeChapterId =
    selectedChapterId !== 'all' && data.chapters.some((ch) => ch.id === selectedChapterId)
      ? selectedChapterId
      : 'all';

  const filteredChapters =
    activeChapterId === 'all'
      ? data.chapters
      : data.chapters.filter((ch) => ch.id === activeChapterId);

  const totalFormulasDisplayed = filteredChapters.reduce(
    (sum, ch) => sum + ch.topics.reduce((ts, tp) => ts + tp.formulas.length, 0),
    0
  );
  const totalQuantitiesDisplayed = filteredChapters.reduce(
    (sum, ch) => sum + ch.topics.reduce((ts, tp) => ts + tp.quantities.length, 0),
    0
  );

  const displayOptionsItems: DropdownItem[] = [
    {
      label: viewMode === 'full' ? '✓ Chế độ chi tiết đầy đủ' : 'Chế độ chi tiết đầy đủ',
      onClick: () => setViewMode('full'),
    },
    {
      label: viewMode === 'compact' ? '✓ Chế độ thu gọn siêu tốc' : 'Chế độ thu gọn siêu tốc',
      onClick: () => setViewMode('compact'),
    },
    { divider: true, label: '' },
    {
      label: showQuantities ? '✓ Hiện bảng đại lượng SI' : '○ Ẩn bảng đại lượng SI',
      onClick: () => setShowQuantities(!showQuantities),
    },
    {
      label: showDerived ? '✓ Hiện công thức suy rộng' : '○ Ẩn công thức suy rộng',
      onClick: () => setShowDerived(!showDerived),
    },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-800 print:bg-white print:text-black">
      {/* ============================================================ */}
      {/* SCREEN TOOLBAR (Hidden when printed)                         */}
      {/* ============================================================ */}
      <header className="no-print sticky top-0 z-40 border-b border-slate-200 bg-white/90 px-4 py-3 shadow-soft backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 md:flex-row">
          {/* Back & Title */}
          <div className="flex w-full items-center justify-between gap-3 md:w-auto md:justify-start">
            <Link
              href={`/?grade=${selectedGrade}`}
              className="edu-btn-ghost px-3 py-1.5 text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-gradient text-white shadow-glow">
                <Sigma className="h-4 w-4" />
              </span>
              <h1 className="text-base font-extrabold tracking-tight text-slate-900">
                Cẩm nang Công thức A4{' '}
                <span className="text-brand-600">(Lớp {selectedGrade})</span>
              </h1>
            </div>
          </div>

          {/* Grade Selector Pills */}
          <div className="flex max-w-full items-center gap-1 overflow-x-auto py-1">
            {allGrades.map((g) => {
              const active = g.grade_number === selectedGrade;
              return (
                <button
                  key={g.id}
                  onClick={() => {
                    setSelectedChapterId('all');
                    router.push(`/cheatsheet?grade=${g.grade_number}`);
                  }}
                  className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-bold transition duration-150 ${
                    active
                      ? 'bg-brand-gradient text-white shadow-glow'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Lớp {g.grade_number}
                </button>
              );
            })}
          </div>

          {/* Action buttons */}
          <div className="flex w-full items-center justify-end gap-2 md:w-auto">
            <button onClick={handlePrint} className="edu-btn-primary px-4 py-2 text-sm">
              <Printer className="h-4 w-4" />
              <span>In / Lưu PDF A4</span>
            </button>
          </div>
        </div>

        {/* Filters & Options bar */}
        <div className="mx-auto mt-2 flex max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-2 text-xs text-slate-600">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-slate-700">Lọc chương:</span>
            <select
              value={activeChapterId}
              onChange={(e) => {
                const val = e.target.value;
                setSelectedChapterId(val === 'all' ? 'all' : Number(val));
              }}
              className="edu-select px-2.5 py-1 text-xs"
            >
              <option value="all">Tất cả {data.chapters.length} chương</option>
              {data.chapters.map((ch) => (
                <option key={ch.id} value={ch.id}>
                  Chương {ch.order_index}: {ch.title}
                </option>
              ))}
            </select>

            <span className="text-slate-300">|</span>

            {/* Consolidated Display Options Dropdown */}
            <DropdownMenu
              align="left"
              menuWidth="w-60"
              trigger={
                <button type="button" className="edu-btn-ghost px-2.5 py-1 text-xs">
                  <SlidersHorizontal className="h-3.5 w-3.5 text-brand-600" />
                  <span>Chế độ: {viewMode === 'full' ? 'Chi tiết' : 'Thu gọn'}</span>
                  <ChevronDown className="h-3 w-3 text-slate-400" />
                </button>
              }
              items={displayOptionsItems}
            />
          </div>

          <div className="italic text-slate-500">
            Hiển thị: <strong className="text-slate-800">{totalFormulasDisplayed}</strong> công thức •{' '}
            <strong className="text-slate-800">{totalQuantitiesDisplayed}</strong> đại lượng
          </div>
        </div>
      </header>

      {/* ============================================================ */}
      {/* PRINTABLE A4 DOCUMENT WRAPPER                                */}
      {/* ============================================================ */}
      <main className="my-6 mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10 print:my-0 print:max-w-none print:rounded-none print:border-none print:p-0 print:shadow-none">
        {/* DOCUMENT HEADER */}
        <div className="mb-6 border-b-2 border-slate-900 pb-5">
          <div className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-500">
            <span>BỘ GIÁO DỤC VÀ ĐÀO TẠO • GDPT 2018</span>
            <span>HỆ THỐNG TRA CỨU VẬT LÍ K12</span>
          </div>

          <div className="my-3 text-center">
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-brand-700 print:hidden">
              <BookMarked className="h-3.5 w-3.5" /> Tài liệu in A4 chuẩn
            </div>
            <h1 className="text-2xl font-extrabold uppercase tracking-tight text-slate-950 sm:text-3xl">
              CẨM NANG ÔN TẬP CÔNG THỨC & ĐẠI LƯỢNG VẬT LÍ {data.grade.grade_number}
            </h1>
            <p className="mt-1 text-sm font-bold text-slate-700">
              {data.grade.title} — {data.grade.subtitle}
            </p>
            <p className="mt-0.5 text-xs text-slate-500">
              Chuẩn 3 bộ sách giáo khoa: Kết nối tri thức • Cánh Diều • Chân trời sáng tạo
            </p>
          </div>

          {/* Student Info Box for Writing / Submitting */}
          <div className="mt-4 grid grid-cols-1 gap-3 border-t border-dashed border-slate-300 pt-3 text-xs text-slate-700 sm:grid-cols-3">
            <div>
              <span className="font-bold">Họ và tên:</span>{' '}
              <span className="inline-block w-40 border-b border-dotted border-slate-400"></span>
            </div>
            <div>
              <span className="font-bold">Lớp:</span>{' '}
              <span className="inline-block w-20 border-b border-dotted border-slate-400"></span>
            </div>
            <div>
              <span className="font-bold">Trường:</span>{' '}
              <span className="inline-block w-44 border-b border-dotted border-slate-400"></span>
            </div>
          </div>
        </div>

        {/* CHAPTERS RENDER */}
        <div className="space-y-8 print:space-y-6">
          {filteredChapters.map((ch) => {
            const hasFormulas = ch.topics.some((tp) => tp.formulas.length > 0);
            const hasQuantities = ch.topics.some((tp) => tp.quantities.length > 0);

            return (
              <section
                key={ch.id}
                className="print-break-inside-avoid overflow-hidden rounded-xl border border-slate-200 print:rounded-none print:border-slate-400"
              >
                {/* Chapter Banner */}
                <div className="flex items-center justify-between bg-slate-900 px-4 py-2.5 text-white print:bg-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-brand-500 px-2 py-0.5 font-mono text-xs font-bold text-white print:bg-slate-700">
                      Chương {ch.order_index}
                    </span>
                    <h2 className="text-sm font-bold tracking-tight sm:text-base">{ch.title}</h2>
                  </div>
                  <span className="hidden font-mono text-xs text-slate-300 sm:inline">
                    {ch.topics.length} chủ đề
                  </span>
                </div>

                {/* Chapter Summary / Key Takeaways */}
                {ch.key_takeaways && ch.key_takeaways.length > 0 && (
                  <div className="border-b border-brand-100 bg-brand-50/60 px-4 py-2.5 text-xs text-slate-800 print:border-slate-300 print:bg-slate-50">
                    <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-brand-900 print:text-black">
                      💡 Trọng tâm cốt lõi chương:
                    </span>
                    <ul className="list-inside list-disc space-y-0.5 text-slate-700 print:text-black">
                      {ch.key_takeaways.map((point, pIdx) => (
                        <li key={pIdx}>
                          <RichPhysicsText text={point} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-6 p-4 print:space-y-4 print:p-3">
                  {/* CHAPTER-LEVEL CHEATSHEET FORMULAS (if available) */}
                  {ch.formula_cheatsheet && ch.formula_cheatsheet.length > 0 && (
                    <div className="space-y-2">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-800 print:text-black">
                        📌 Công thức tổng hợp cốt lõi chương:
                      </span>
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {ch.formula_cheatsheet.map((fc, fcIdx) => (
                          <div
                            key={fcIdx}
                            className="rounded-lg border border-slate-200 bg-slate-50/70 p-2.5 text-xs print:border-slate-300 print:bg-transparent"
                          >
                            <div className="font-bold text-slate-900">{fc.name}</div>
                            <div className="my-1.5 rounded border border-slate-100 bg-white py-1 text-center font-serif text-sm print:border-none print:bg-transparent">
                              <KatexFormula latex={fc.latex} displayMode={true} />
                            </div>
                            {fc.note && (
                              <div className="text-[10px] italic text-slate-500">
                                <RichPhysicsText text={fc.note} />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* If no topics and no chapter cheatsheet */}
                  {!hasFormulas && !hasQuantities && (!ch.formula_cheatsheet || ch.formula_cheatsheet.length === 0) && (
                    <div className="py-6 text-center text-xs italic text-slate-400">
                      Chương này hiện chưa có chủ đề hoặc công thức. Bạn có thể thêm chủ đề và công thức từ trang CMS Quản trị.
                    </div>
                  )}

                  {/* TOPICS & FORMULAS */}
                  {ch.topics.map((tp) => {
                    if (tp.formulas.length === 0 && tp.quantities.length === 0) return null;

                    return (
                      <div key={tp.id} className="space-y-3">
                        <div className="flex items-center gap-2 border-b border-slate-200 pb-1">
                          <span className="font-mono text-xs font-bold text-brand-700 print:text-black">
                            {tp.code}
                          </span>
                          <h3 className="text-xs font-extrabold text-slate-900 sm:text-sm">{tp.title}</h3>
                        </div>

                        {/* FORMULAS TABLE / CARDS */}
                        {tp.formulas.length > 0 && (
                          <div className="overflow-x-auto">
                            <table className="w-full border border-slate-200 text-left text-xs print:border-slate-300">
                              <thead className="border-b border-slate-200 bg-slate-100 font-bold text-slate-700 print:bg-slate-200 print:text-black">
                                <tr>
                                  <th className="w-1/4 px-2.5 py-1.5">Tên công thức</th>
                                  <th className="w-1/3 px-2.5 py-1.5">Biểu thức chuẩn (KaTeX)</th>
                                  <th className="px-2.5 py-1.5">
                                    {viewMode === 'full' ? 'Đại lượng & Đơn vị SI' : 'Ghi chú'}
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100 print:divide-slate-300">
                                {tp.formulas.map((fm) => (
                                  <tr
                                    key={fm.id}
                                    className="align-top hover:bg-slate-50/50 print:hover:bg-transparent"
                                  >
                                    {/* Name & Derived */}
                                    <td className="px-2.5 py-2 font-medium text-slate-900 print:text-black">
                                      <div className="font-bold text-slate-900">{fm.name}</div>
                                      {showDerived &&
                                        fm.derived_formulas &&
                                        fm.derived_formulas.length > 0 && (
                                          <div className="mt-1.5 space-y-1">
                                            <span className="block text-[10px] font-bold uppercase text-violet-700 print:text-black">
                                              Công thức suy rộng:
                                            </span>
                                            {fm.derived_formulas.map((df, dfIdx) => (
                                              <div
                                                key={dfIdx}
                                                className="rounded border border-violet-100 bg-violet-50/60 p-1 text-[11px] print:border-none print:bg-transparent"
                                              >
                                                <div className="font-mono text-violet-900 print:text-black">
                                                  <KatexFormula latex={df.expression} />
                                                </div>
                                                {df.description && (
                                                  <div className="mt-0.5 text-[10px] italic text-slate-500">
                                                    {df.description}
                                                  </div>
                                                )}
                                              </div>
                                            ))}
                                          </div>
                                        )}
                                    </td>

                                    {/* KaTeX expression */}
                                    <td className="bg-slate-50/50 px-2.5 py-2 text-center font-serif text-sm print:bg-transparent">
                                      <div className="inline-block rounded border border-slate-100 bg-white px-2 py-1 shadow-soft print:border-none print:bg-transparent print:shadow-none">
                                        <KatexFormula latex={fm.latex_expression} displayMode={true} />
                                      </div>
                                      {fm.usage_note && (
                                        <div className="mt-1 text-left text-[11px] italic text-amber-800 print:text-black">
                                          ⚠️ <RichPhysicsText text={fm.usage_note} />
                                        </div>
                                      )}
                                    </td>

                                    {/* Variables or Note */}
                                    <td className="px-2.5 py-2 text-slate-600 print:text-black">
                                      {viewMode === 'full' &&
                                      fm.variables &&
                                      fm.variables.length > 0 ? (
                                        <ul className="space-y-1 text-[11px]">
                                          {fm.variables.map((v, vIdx) => (
                                            <li key={vIdx} className="flex items-baseline gap-1">
                                              <span className="font-mono font-bold text-brand-700 print:text-black">
                                                <KatexFormula latex={v.symbol} />:
                                              </span>
                                              <span>{v.name}</span>
                                              {v.unit && (
                                                <span className="font-mono text-[10px] text-slate-500">
                                                  [{v.unit}]
                                                </span>
                                              )}
                                            </li>
                                          ))}
                                        </ul>
                                      ) : (
                                        <span className="text-[11px] text-slate-500">
                                          {fm.usage_note || '—'}
                                        </span>
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}

                        {/* QUANTITIES TABLE */}
                        {showQuantities && tp.quantities.length > 0 && (
                          <div className="mt-2">
                            <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-emerald-800 print:text-black">
                              Tra cứu Đại lượng & Đơn vị SI:
                            </span>
                            <div className="overflow-x-auto">
                              <table className="w-full border border-slate-200 text-left text-[11px] print:border-slate-300">
                                <thead className="border-b border-slate-200 bg-emerald-50/80 font-bold text-emerald-950 print:bg-slate-100 print:text-black">
                                  <tr>
                                    <th className="w-1/4 px-2 py-1">Đại lượng</th>
                                    <th className="w-16 px-2 py-1 text-center">Kí hiệu</th>
                                    <th className="w-28 px-2 py-1">Đơn vị SI</th>
                                    <th className="w-28 px-2 py-1">Đơn vị khác</th>
                                    <th className="px-2 py-1">Dụng cụ đo / Định nghĩa</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 print:divide-slate-300">
                                  {tp.quantities.map((q) => (
                                    <tr key={q.id} className="align-top hover:bg-slate-50/40">
                                      <td className="px-2 py-1.5 font-medium text-slate-900 print:text-black">
                                        {q.name}
                                      </td>
                                      <td className="px-2 py-1.5 text-center font-mono font-bold text-brand-700 print:text-black">
                                        <KatexFormula latex={q.symbol} />
                                      </td>
                                      <td className="px-2 py-1.5 font-mono font-bold text-emerald-700 print:text-black">
                                        {q.si_unit}
                                      </td>
                                      <td className="px-2 py-1.5 font-mono text-[10px] text-slate-500 print:text-black">
                                        {q.other_units || '—'}
                                      </td>
                                      <td className="px-2 py-1.5 text-slate-600 print:text-black">
                                        {q.measuring_device && (
                                          <div className="font-medium text-slate-800 print:text-black">
                                            🔧 {q.measuring_device}
                                          </div>
                                        )}
                                        {q.description && (
                                          <div className="text-[10px] italic text-slate-500 print:text-black">
                                            {q.description}
                                          </div>
                                        )}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {/* DOCUMENT FOOTER */}
        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t-2 border-slate-900 pt-4 text-xs text-slate-500 print:text-slate-700 sm:flex-row">
          <div>
            <strong className="text-slate-700 print:text-slate-700">eduPhysics 6–12</strong> • Tổng hợp
            chương trình GDPT 2018
          </div>
          <div className="text-center italic sm:text-right">
            Nắm chắc bản chất vật lí và đơn vị chuẩn SI là chìa khóa giải nhanh mọi bài toán!
          </div>
        </div>
      </main>
    </div>
  );
}

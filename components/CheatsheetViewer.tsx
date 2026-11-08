'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CheatsheetGradeData, GradeItem } from '@/types/cms';
import { KatexFormula, RichPhysicsText } from './KatexRenderer';
import { DropdownMenu, DropdownItem } from './ui/DropdownMenu';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

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
      <header className="no-print sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm px-4 py-3">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Back & Title */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <Link
              href={`/?grade=${selectedGrade}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors"
            >
              <span>←</span>
              <span>Dashboard</span>
            </Link>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
              <h1 className="text-base font-bold text-slate-900">
                Cẩm nang Công thức A4 (Lớp {selectedGrade})
              </h1>
            </div>
          </div>

          {/* Grade Selector Pills */}
          <div className="flex items-center gap-1 overflow-x-auto max-w-full py-1">
            {allGrades.map((g) => {
              const active = g.grade_number === selectedGrade;
              return (
                <button
                  key={g.id}
                  onClick={() => {
                    setSelectedChapterId('all');
                    router.push(`/cheatsheet?grade=${g.grade_number}`);
                  }}
                  className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap transition-all ${
                    active
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Lớp {g.grade_number}
                </button>
              );
            })}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
              <span>In / Lưu PDF A4</span>
            </button>
          </div>
        </div>

        {/* Filters & Options bar */}
        <div className="max-w-6xl mx-auto mt-2 pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-slate-700">Lọc chương:</span>
            <select
              value={activeChapterId}
              onChange={(e) => {
                const val = e.target.value;
                setSelectedChapterId(val === 'all' ? 'all' : Number(val));
              }}
              className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-xs text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                <button
                  type="button"
                  className="px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 flex items-center gap-1.5 transition shadow-2xs"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-600" />
                  <span>
                    Chế độ: {viewMode === 'full' ? 'Chi tiết' : 'Thu gọn'}
                  </span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>
              }
              items={displayOptionsItems}
            />
          </div>

          <div className="text-slate-500 italic">
            Hiển thị: <strong className="text-slate-800">{totalFormulasDisplayed}</strong> công thức •{' '}
            <strong className="text-slate-800">{totalQuantitiesDisplayed}</strong> đại lượng
          </div>
        </div>
      </header>

      {/* ============================================================ */}
      {/* PRINTABLE A4 DOCUMENT WRAPPER                                */}
      {/* ============================================================ */}
      <main className="max-w-5xl mx-auto my-6 p-6 sm:p-10 bg-white shadow-xl rounded-2xl border border-slate-200 print:shadow-none print:border-none print:my-0 print:p-0 print:max-w-none">
        {/* DOCUMENT HEADER */}
        <div className="border-b-2 border-slate-900 pb-5 mb-6">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-slate-500 font-semibold mb-2">
            <span>BỘ GIÁO DỤC VÀ ĐÀO TẠO • GDPT 2018</span>
            <span>HỆ THỐNG TRA CỨU VẬT LÍ K12</span>
          </div>

          <div className="text-center my-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 uppercase tracking-tight">
              CẨM NANG ÔN TẬP CÔNG THỨC & ĐẠI LƯỢNG VẬT LÍ {data.grade.grade_number}
            </h1>
            <p className="text-sm font-medium text-slate-700 mt-1">
              {data.grade.title} — {data.grade.subtitle}
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              Chuẩn 3 bộ sách giáo khoa: Kết nối tri thức • Cánh Diều • Chân trời sáng tạo
            </p>
          </div>

          {/* Student Info Box for Writing / Submitting */}
          <div className="mt-4 pt-3 border-t border-dashed border-slate-300 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
            <div>
              <span className="font-semibold">Họ và tên:</span>{' '}
              <span className="border-b border-dotted border-slate-400 inline-block w-40"></span>
            </div>
            <div>
              <span className="font-semibold">Lớp:</span>{' '}
              <span className="border-b border-dotted border-slate-400 inline-block w-20"></span>
            </div>
            <div>
              <span className="font-semibold">Trường:</span>{' '}
              <span className="border-b border-dotted border-slate-400 inline-block w-44"></span>
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
                className="print-break-inside-avoid border border-slate-200 rounded-xl overflow-hidden print:border-slate-400 print:rounded-none"
              >
                {/* Chapter Banner */}
                <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between print:bg-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-blue-500 text-white font-mono font-bold text-xs rounded">
                      Chương {ch.order_index}
                    </span>
                    <h2 className="text-sm sm:text-base font-bold tracking-tight">{ch.title}</h2>
                  </div>
                  <span className="text-xs text-slate-300 font-mono hidden sm:inline">
                    {ch.topics.length} chủ đề
                  </span>
                </div>

                {/* Chapter Summary / Key Takeaways */}
                {ch.key_takeaways && ch.key_takeaways.length > 0 && (
                  <div className="bg-blue-50/60 border-b border-blue-100 px-4 py-2.5 print:bg-slate-50 print:border-slate-300 text-xs text-slate-800">
                    <span className="font-bold text-blue-900 print:text-black uppercase tracking-wider text-[11px] block mb-1">
                      💡 Trọng tâm cốt lõi chương:
                    </span>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-700 print:text-black">
                      {ch.key_takeaways.map((point, pIdx) => (
                        <li key={pIdx}>
                          <RichPhysicsText text={point} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="p-4 space-y-6 print:p-3 print:space-y-4">
                  {/* CHAPTER-LEVEL CHEATSHEET FORMULAS (if available) */}
                  {ch.formula_cheatsheet && ch.formula_cheatsheet.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-[11px] uppercase font-bold text-slate-800 print:text-black tracking-wider block">
                        📌 Công thức tổng hợp cốt lõi chương:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {ch.formula_cheatsheet.map((fc, fcIdx) => (
                          <div
                            key={fcIdx}
                            className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/70 print:bg-transparent print:border-slate-300 text-xs"
                          >
                            <div className="font-semibold text-slate-900">{fc.name}</div>
                            <div className="my-1.5 py-1 text-center font-serif text-sm bg-white print:bg-transparent rounded border border-slate-100 print:border-none">
                              <KatexFormula latex={fc.latex} displayMode={true} />
                            </div>
                            {fc.note && (
                              <div className="text-[10px] text-slate-500 italic">
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
                    <div className="text-center py-6 text-xs text-slate-400 italic">
                      Chương này hiện chưa có chủ đề hoặc công thức. Bạn có thể thêm chủ đề và công thức từ trang CMS Quản trị.
                    </div>
                  )}

                  {/* TOPICS & FORMULAS */}
                  {ch.topics.map((tp) => {
                    if (tp.formulas.length === 0 && tp.quantities.length === 0) return null;

                    return (
                      <div key={tp.id} className="space-y-3">
                        <div className="flex items-center gap-2 pb-1 border-b border-slate-200">
                          <span className="text-xs font-bold text-blue-700 print:text-black font-mono">
                            {tp.code}
                          </span>
                          <h3 className="text-xs sm:text-sm font-bold text-slate-900">{tp.title}</h3>
                        </div>

                        {/* FORMULAS TABLE / CARDS */}
                        {tp.formulas.length > 0 && (
                          <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs border border-slate-200 print:border-slate-300">
                              <thead className="bg-slate-100 text-slate-700 print:bg-slate-200 print:text-black font-semibold border-b border-slate-200">
                                <tr>
                                  <th className="py-1.5 px-2.5 w-1/4">Tên công thức</th>
                                  <th className="py-1.5 px-2.5 w-1/3">Biểu thức chuẩn (KaTeX)</th>
                                  <th className="py-1.5 px-2.5">
                                    {viewMode === 'full' ? 'Đại lượng & Đơn vị SI' : 'Ghi chú'}
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100 print:divide-slate-300">
                                {tp.formulas.map((fm) => (
                                  <tr
                                    key={fm.id}
                                    className="hover:bg-slate-50/50 print:hover:bg-transparent align-top"
                                  >
                                    {/* Name & Derived */}
                                    <td className="py-2 px-2.5 font-medium text-slate-900 print:text-black">
                                      <div className="font-semibold text-slate-900">{fm.name}</div>
                                      {showDerived &&
                                        fm.derived_formulas &&
                                        fm.derived_formulas.length > 0 && (
                                          <div className="mt-1.5 space-y-1">
                                            <span className="text-[10px] uppercase font-bold text-violet-700 print:text-black block">
                                              Công thức suy rộng:
                                            </span>
                                            {fm.derived_formulas.map((df, dfIdx) => (
                                              <div
                                                key={dfIdx}
                                                className="bg-violet-50/60 print:bg-transparent p-1 rounded border border-violet-100 print:border-none text-[11px]"
                                              >
                                                <div className="font-mono text-violet-900 print:text-black">
                                                  <KatexFormula latex={df.expression} />
                                                </div>
                                                {df.description && (
                                                  <div className="text-[10px] text-slate-500 italic mt-0.5">
                                                    {df.description}
                                                  </div>
                                                )}
                                              </div>
                                            ))}
                                          </div>
                                        )}
                                    </td>

                                    {/* KaTeX expression */}
                                    <td className="py-2 px-2.5 text-center font-serif text-sm bg-slate-50/50 print:bg-transparent">
                                      <div className="py-1 px-2 inline-block bg-white print:bg-transparent rounded border border-slate-100 print:border-none shadow-xs print:shadow-none">
                                        <KatexFormula latex={fm.latex_expression} displayMode={true} />
                                      </div>
                                      {fm.usage_note && (
                                        <div className="text-[11px] text-amber-800 print:text-black italic mt-1 text-left">
                                          ⚠️ <RichPhysicsText text={fm.usage_note} />
                                        </div>
                                      )}
                                    </td>

                                    {/* Variables or Note */}
                                    <td className="py-2 px-2.5 text-slate-600 print:text-black">
                                      {viewMode === 'full' &&
                                      fm.variables &&
                                      fm.variables.length > 0 ? (
                                        <ul className="space-y-1 text-[11px]">
                                          {fm.variables.map((v, vIdx) => (
                                            <li key={vIdx} className="flex items-baseline gap-1">
                                              <span className="font-mono font-bold text-blue-700 print:text-black">
                                                <KatexFormula latex={v.symbol} />:
                                              </span>
                                              <span>{v.name}</span>
                                              {v.unit && (
                                                <span className="text-slate-500 font-mono text-[10px]">
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
                            <span className="text-[10px] uppercase font-bold text-emerald-800 print:text-black tracking-wider block mb-1">
                              Tra cứu Đại lượng & Đơn vị SI:
                            </span>
                            <div className="overflow-x-auto">
                              <table className="w-full text-left text-[11px] border border-slate-200 print:border-slate-300">
                                <thead className="bg-emerald-50/80 text-emerald-950 print:bg-slate-100 print:text-black font-semibold border-b border-slate-200">
                                  <tr>
                                    <th className="py-1 px-2 w-1/4">Đại lượng</th>
                                    <th className="py-1 px-2 w-16 text-center">Kí hiệu</th>
                                    <th className="py-1 px-2 w-28">Đơn vị SI</th>
                                    <th className="py-1 px-2 w-28">Đơn vị khác</th>
                                    <th className="py-1 px-2">Dụng cụ đo / Định nghĩa</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 print:divide-slate-300">
                                  {tp.quantities.map((q) => (
                                    <tr key={q.id} className="hover:bg-slate-50/40 align-top">
                                      <td className="py-1.5 px-2 font-medium text-slate-900 print:text-black">
                                        {q.name}
                                      </td>
                                      <td className="py-1.5 px-2 text-center font-mono font-bold text-blue-700 print:text-black">
                                        <KatexFormula latex={q.symbol} />
                                      </td>
                                      <td className="py-1.5 px-2 font-semibold text-emerald-700 print:text-black font-mono">
                                        {q.si_unit}
                                      </td>
                                      <td className="py-1.5 px-2 text-slate-500 print:text-black font-mono text-[10px]">
                                        {q.other_units || '—'}
                                      </td>
                                      <td className="py-1.5 px-2 text-slate-600 print:text-black">
                                        {q.measuring_device && (
                                          <div className="font-medium text-slate-800 print:text-black">
                                            🔧 {q.measuring_device}
                                          </div>
                                        )}
                                        {q.description && (
                                          <div className="text-[10px] text-slate-500 print:text-black italic">
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
        <div className="mt-8 pt-4 border-t-2 border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 print:text-slate-700 gap-2">
          <div>
            <strong>eduPhysics 6–12</strong> • Tổng hợp chương trình GDPT 2018
          </div>
          <div className="italic text-center sm:text-right">
            Nắm chắc bản chất vật lí và đơn vị chuẩn SI là chìa khóa giải nhanh mọi bài toán!
          </div>
        </div>
      </main>
    </div>
  );
}

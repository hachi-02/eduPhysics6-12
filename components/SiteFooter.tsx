import React from 'react';
import Link from 'next/link';
import {
  Atom,
  BookOpen,
  Layers,
  Calculator,
  BarChart3,
  GitBranch,
  Target,
  Brain,
  AlertCircle,
  Printer,
  Sparkles,
} from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="no-print mt-12 border-t border-slate-200/80 bg-white/80 backdrop-blur-md print:hidden">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Brand Column */}
          <div className="space-y-3 md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                <Atom className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-base font-extrabold tracking-tight text-slate-900">
                  eduPhysics
                </span>
                <span className="rounded-md bg-brand-50 px-1.5 py-0.5 font-mono text-[10px] font-extrabold text-brand-700 ring-1 ring-brand-200/80">
                  6–12
                </span>
              </div>
            </Link>
            <p className="max-w-sm text-xs leading-relaxed text-slate-500">
              Hệ sinh thái học tập, mô phỏng 2D tương tác và khảo thí Vật lý chuẩn chương trình
              GDPT 2018 (tích hợp cả 3 bộ SGK: Kết nối tri thức, Chân trời sáng tạo, Cánh Diều).
            </p>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200/80 bg-indigo-50/70 px-3 py-1 text-[11px] font-bold text-indigo-700">
              <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
              <span>92 Chủ đề • 30 Chương • 2.300+ Câu hỏi chuẩn 2025</span>
            </div>
          </div>

          {/* Quick Links: Learning Tools */}
          <div className="space-y-2.5 md:col-span-4">
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Bộ công cụ học tập thông minh
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-600">
              <Link
                href="/flashcards"
                className="flex items-center gap-1.5 rounded-lg py-1 transition hover:text-brand-700"
              >
                <Layers className="h-3.5 w-3.5 text-indigo-500" />
                <span>Flashcard Công thức</span>
              </Link>
              <Link
                href="/calculator"
                className="flex items-center gap-1.5 rounded-lg py-1 transition hover:text-brand-700"
              >
                <Calculator className="h-3.5 w-3.5 text-teal-600" />
                <span>Đổi đơn vị &amp; Giải nhanh</span>
              </Link>
              <Link
                href="/progress"
                className="flex items-center gap-1.5 rounded-lg py-1 transition hover:text-brand-700"
              >
                <BarChart3 className="h-3.5 w-3.5 text-emerald-600" />
                <span>Hồ sơ Tiến độ 360°</span>
              </Link>
              <Link
                href="/knowledge-graph"
                className="flex items-center gap-1.5 rounded-lg py-1 transition hover:text-brand-700"
              >
                <GitBranch className="h-3.5 w-3.5 text-purple-600" />
                <span>Đồ thị Tri thức DAG</span>
              </Link>
              <Link
                href="/adaptive-test"
                className="flex items-center gap-1.5 rounded-lg py-1 transition hover:text-brand-700"
              >
                <Target className="h-3.5 w-3.5 text-indigo-600" />
                <span>Khảo thí Thích ứng CAT</span>
              </Link>
              <Link
                href="/cognitive-traps"
                className="flex items-center gap-1.5 rounded-lg py-1 transition hover:text-brand-700"
              >
                <Brain className="h-3.5 w-3.5 text-rose-600" />
                <span>Ma trận Bẫy nhận thức</span>
              </Link>
              <Link
                href="/mistakes"
                className="flex items-center gap-1.5 rounded-lg py-1 transition hover:text-brand-700"
              >
                <AlertCircle className="h-3.5 w-3.5 text-rose-500" />
                <span>Sổ tay Lỗi sai</span>
              </Link>
              <Link
                href="/cheatsheet"
                className="flex items-center gap-1.5 rounded-lg py-1 transition hover:text-brand-700"
              >
                <Printer className="h-3.5 w-3.5 text-amber-600" />
                <span>Cẩm nang A4 In/PDF</span>
              </Link>
            </div>
          </div>

          {/* Quick Grade Jump */}
          <div className="space-y-2.5 md:col-span-3">
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              Chọn nhanh Khối lớp
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[6, 7, 8, 9, 10, 11, 12].map((g) => (
                <Link
                  key={g}
                  href={`/?grade=${g}`}
                  className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-50/80 px-2.5 py-1.5 text-xs font-extrabold text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                >
                  <BookOpen className="h-3 w-3 text-brand-500" />
                  <span>Lớp {g}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

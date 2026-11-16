'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AlertCircle,
  BarChart3,
  Brain,
  Calculator,
  FileCheck,
  GitBranch,
  Home,
  Layers,
  LayoutGrid,
  Printer,
  ScanSearch,
  Settings,
  Target,
  X,
} from 'lucide-react';

interface ToolNavItem {
  href: string;
  title: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  tone: 'gold' | 'cyan' | 'violet';
}

const TOOL_ITEMS: ToolNavItem[] = [
  {
    href: '/adaptive-test',
    title: 'Khảo thí Thích ứng (CAT)',
    tag: 'IRT 3PL',
    icon: Target,
    tone: 'gold',
  },
  {
    href: '/knowledge-graph',
    title: 'Đồ thị Tri thức 6–12',
    tag: 'DAG 92 chủ đề',
    icon: GitBranch,
    tone: 'cyan',
  },
  {
    href: '/flashcards',
    title: 'Flashcard Công thức & SI',
    tag: 'Active Recall',
    icon: Layers,
    tone: 'violet',
  },
  {
    href: '/calculator',
    title: 'Giải nhanh & Đổi đơn vị SI',
    tag: '12 nhóm SI',
    icon: Calculator,
    tone: 'cyan',
  },
  {
    href: '/cognitive-traps',
    title: 'Ma Trận Bẫy Nhận Thức',
    tag: 'Chẩn đoán BGD',
    icon: Brain,
    tone: 'gold',
  },
  {
    href: '/mistakes',
    title: 'Sổ tay Lỗi sai Thông minh',
    tag: 'Ôn phản xạ',
    icon: AlertCircle,
    tone: 'violet',
  },
  {
    href: '/progress',
    title: 'Hồ sơ Năng lực 360°',
    tag: '4 mức tư duy',
    icon: BarChart3,
    tone: 'cyan',
  },
  {
    href: '/cheatsheet',
    title: 'Cẩm nang Công thức A4',
    tag: 'In / Xuất PDF',
    icon: Printer,
    tone: 'gold',
  },
  {
    href: '/exam-prep',
    title: 'Kho Đề Thi & Ôn Tập',
    tag: 'Lớp 6–12',
    icon: FileCheck,
    tone: 'cyan',
  },
  {
    href: '/ai-solver',
    title: 'AI Quét & Giải Bài Tập',
    tag: 'Ảnh / PDF',
    icon: ScanSearch,
    tone: 'cyan',
  },
  {
    href: '/ai-settings',
    title: 'Cài đặt AI (API & Model)',
    tag: 'Gemini / OpenRouter',
    icon: Settings,
    tone: 'gold',
  },
];

const TONE_ICON_CLASS: Record<ToolNavItem['tone'], string> = {
  gold: 'border-amber-400/30 bg-amber-500/15 text-amber-300',
  cyan: 'border-cyan-400/30 bg-cyan-500/15 text-cyan-300',
  violet: 'border-violet-400/30 bg-violet-500/15 text-violet-300',
};

export function GlobalToolsMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape or outside click
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const handlePointerDown = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handlePointerDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handlePointerDown);
    };
  }, [open]);

  // Hide on landing page & admin pages
  if (!pathname || pathname === '/' || pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="no-print fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 print:hidden"
    >
      {open && (
        <div
          role="dialog"
          aria-label="Menu công cụ học tập"
          className="w-[min(92vw,380px)] rounded-2xl border border-white/15 bg-[#070b18]/95 p-3.5 shadow-[0_20px_60px_rgba(0,0,0,0.65)] backdrop-blur-xl"
        >
          <div className="mb-2.5 flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-amber-400/30 bg-amber-500/15 text-amber-300">
                <LayoutGrid className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-xs font-semibold tracking-wide text-slate-100">
                  Công cụ học tập
                </p>
                <p className="text-[11px] text-slate-400">
                  Chuyển nhanh giữa các mô-đun
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <Link
                href="/"
                className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-300 transition hover:border-white/20 hover:bg-white/[0.09] hover:text-white"
              >
                <Home className="h-3 w-3" />
                Trang chủ
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Đóng menu công cụ"
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 transition hover:border-white/20 hover:bg-white/[0.09] hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div className="grid max-h-[65vh] grid-cols-1 gap-1.5 overflow-y-auto pr-0.5">
            {TOOL_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center gap-2.5 rounded-xl border px-2.5 py-2 transition ${
                    isActive
                      ? 'border-amber-400/45 bg-amber-500/12 text-white'
                      : 'border-white/[0.06] bg-white/[0.02] text-slate-200 hover:border-white/15 hover:bg-white/[0.07]'
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${TONE_ICON_CLASS[item.tone]}`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate text-xs font-semibold">
                        {item.title}
                      </span>
                      <span className="shrink-0 rounded-md border border-white/10 bg-white/[0.05] px-1.5 py-0.5 text-[10px] font-medium text-slate-300">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label="Mở menu chuyển nhanh công cụ"
        className="inline-flex items-center gap-2 rounded-full border border-amber-400/35 bg-[#090e1e]/90 px-4 py-2.5 text-xs font-semibold text-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.55)] backdrop-blur-xl transition hover:border-amber-300/60 hover:bg-[#101833] hover:text-white active:scale-[0.98]"
      >
        {open ? (
          <X className="h-4 w-4 text-amber-300" />
        ) : (
          <LayoutGrid className="h-4 w-4 text-amber-300" />
        )}
        <span>Công cụ</span>
      </button>
    </div>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Atom,
  BookOpen,
  Printer,
  AlertCircle,
  Settings,
  ChevronDown,
  Sparkles,
  GitBranch,
  Target,
} from 'lucide-react';
import { GlobalSearchModal } from './GlobalSearchModal';
import { DropdownMenu, DropdownItem } from './ui/DropdownMenu';

interface SiteHeaderProps {
  admin: any;
  activeMistakeCount: number;
}

export function SiteHeader({ admin, activeMistakeCount }: SiteHeaderProps) {
  const pathname = usePathname();

  const isHome = pathname === '/' || pathname.startsWith('/?');
  const isKnowledgeGraph = pathname.startsWith('/knowledge-graph');
  const isAdaptiveTest = pathname.startsWith('/adaptive-test');
  const isMistakes = pathname.startsWith('/mistakes');
  const isCheatsheet = pathname.startsWith('/cheatsheet');

  const utilityMenuItems: DropdownItem[] = [
    {
      label: 'Phòng Khảo thí Thích ứng (CAT • IRT 3PL)',
      icon: <Target className="w-4 h-4 text-indigo-600" />,
      href: '/adaptive-test',
    },
    {
      label: 'Đồ thị Tri thức & Truy vết lỗ hổng (DAG 6–12)',
      icon: <GitBranch className="w-4 h-4 text-purple-600" />,
      href: '/knowledge-graph',
    },
    {
      label: 'Cẩm nang công thức A4 (In / PDF)',
      icon: <Printer className="w-4 h-4 text-accent-600" />,
      href: '/cheatsheet',
    },
    { divider: true, label: '' },
    {
      label: admin ? 'Hệ thống Quản trị CMS' : 'Đăng nhập Quản trị viên',
      icon: <Settings className="w-4 h-4 text-slate-500" />,
      href: admin ? '/admin' : '/admin/login',
    },
  ];

  return (
    <header className="no-print sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 shadow-soft backdrop-blur-xl print:hidden">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* Brand Logo */}
        <Link href="/" className="group flex shrink-0 items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow transition duration-150 ease-snap group-hover:scale-105 group-active:scale-95">
            <Atom className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="text-sm font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-brand-700 sm:text-base">
                eduPhysics
              </span>
              <span className="rounded-md bg-brand-50 px-1.5 py-0.5 font-mono text-[10px] font-extrabold text-brand-700">
                6–12
              </span>
            </div>
            <span className="hidden text-[9px] font-semibold tracking-[0.14em] text-slate-500 sm:block">
              CHUẨN GDPT 2018
            </span>
          </div>
        </Link>

        {/* Global Search Bar (Center Spotlight) */}
        <div className="mx-2 flex-1 max-w-sm">
          <GlobalSearchModal />
        </div>

        {/* Clean Consolidated Nav */}
        <nav className="flex items-center gap-1 sm:gap-1.5">
          {/* Main Link: Curriculum */}
          <Link
            href="/"
            className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold transition duration-150 ease-snap ${
              isHome
                ? 'bg-brand-50 text-brand-700 shadow-soft ring-1 ring-brand-200/80'
                : 'text-slate-600 hover:bg-slate-100/80 hover:text-slate-900'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Chương trình</span>
          </Link>

          {/* Main Link: Knowledge Graph DAG */}
          <Link
            href="/knowledge-graph"
            className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold transition duration-150 ease-snap ${
              isKnowledgeGraph
                ? 'bg-purple-50 text-purple-700 shadow-soft ring-1 ring-purple-200/80'
                : 'text-slate-600 hover:bg-purple-50/70 hover:text-purple-700'
            }`}
          >
            <GitBranch className="h-3.5 w-3.5 text-purple-600" />
            <span className="hidden md:inline">Đồ thị Tri thức</span>
          </Link>

          {/* Main Link: Adaptive CAT Exam */}
          <Link
            href="/adaptive-test"
            className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold transition duration-150 ease-snap ${
              isAdaptiveTest
                ? 'bg-indigo-50 text-indigo-700 shadow-soft ring-1 ring-indigo-200/80'
                : 'text-slate-600 hover:bg-indigo-50/70 hover:text-indigo-700'
            }`}
          >
            <Target className="h-3.5 w-3.5 text-indigo-600" />
            <span className="hidden lg:inline">Thi Thích ứng</span>
          </Link>

          {/* Quick Link: Mistakes (if any) */}
          <Link
            href="/mistakes"
            className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold transition duration-150 ease-snap ${
              isMistakes
                ? 'bg-rose-50 text-rose-700 shadow-soft ring-1 ring-rose-200/80'
                : 'text-slate-600 hover:bg-rose-50/70 hover:text-rose-700'
            }`}
          >
            <AlertCircle className="h-3.5 w-3.5 text-rose-500" />
            <span className="hidden sm:inline">Sổ tay sai</span>
            {activeMistakeCount > 0 && (
              <span className="rounded-full bg-rose-600 px-1.5 py-0.5 text-[10px] font-extrabold text-white shadow-soft">
                {activeMistakeCount}
              </span>
            )}
          </Link>

          {/* Clean Dropdown for Cheatsheet & Utilities */}
          <DropdownMenu
            align="right"
            menuWidth="w-64"
            trigger={
              <button
                type="button"
                className={`flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition duration-150 ease-snap ${
                  isCheatsheet
                    ? 'border-brand-200 bg-brand-50 text-brand-700'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <Sparkles className="h-3.5 w-3.5 text-brand-500" />
                <span className="hidden sm:inline">Tiện ích</span>
                <ChevronDown className="h-3 w-3 text-slate-500" />
              </button>
            }
            items={utilityMenuItems}
          />
        </nav>
      </div>
    </header>
  );
}

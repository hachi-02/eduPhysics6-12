'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BookOpen,
  Printer,
  AlertCircle,
  Settings,
  ChevronDown,
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
  const isMistakes = pathname.startsWith('/mistakes');
  const isCheatsheet = pathname.startsWith('/cheatsheet');

  const utilityMenuItems: DropdownItem[] = [
    {
      label: 'Cẩm nang Công thức A4 (In / PDF)',
      icon: <Printer className="w-4 h-4 text-blue-600" />,
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
    <header className="no-print sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs print:hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-3">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-700 to-blue-500 text-white flex items-center justify-center font-extrabold text-sm shadow-sm active:scale-95 transition-transform duration-150">
            Φ
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="font-bold text-sm sm:text-base text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                eduPhysics
              </span>
              <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 font-mono">
                6–12
              </span>
            </div>
            <span className="text-[9px] text-slate-600 font-medium tracking-wider hidden sm:block">
              CHUẨN GDPT 2018
            </span>
          </div>
        </Link>

        {/* Global Search Bar (Center Spotlight) */}
        <div className="flex-1 max-w-sm mx-2">
          <GlobalSearchModal />
        </div>

        {/* Clean Consolidated Nav */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {/* Main Link: Curriculum */}
          <Link
            href="/"
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors duration-150 ${
              isHome
                ? 'bg-slate-100 text-indigo-700 font-bold'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Chương trình</span>
          </Link>

          {/* Quick Link: Mistakes (if any) */}
          <Link
            href="/mistakes"
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors duration-150 ${
              isMistakes
                ? 'bg-rose-50 text-rose-700 font-bold'
                : 'text-slate-600 hover:text-rose-700 hover:bg-rose-50/60'
            }`}
          >
            <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
            <span className="hidden sm:inline">Sổ tay sai</span>
            {activeMistakeCount > 0 && (
              <span className="px-1.5 py-0.5 rounded-full bg-rose-600 text-white font-extrabold text-[10px]">
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
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100/80 hover:bg-slate-200/80 border border-slate-200/60 flex items-center gap-1.5 transition-colors shadow-2xs"
              >
                <span>Tiện ích</span>
                <ChevronDown className="w-3 h-3 text-slate-600" />
              </button>
            }
            items={utilityMenuItems}
          />
        </nav>
      </div>
    </header>
  );
}

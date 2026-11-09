'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Atom,
  BookOpen,
  Printer,
  AlertCircle,
  Settings,
  ChevronRight,
  Sparkles,
  GitBranch,
  Target,
  Menu,
  X,
} from 'lucide-react';
import { GlobalSearchModal } from './GlobalSearchModal';

interface SiteHeaderProps {
  admin: any;
  activeMistakeCount: number;
}

export function SiteHeader({ admin, activeMistakeCount }: SiteHeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const isHome = pathname === '/' || pathname.startsWith('/?');
  const isKnowledgeGraph = pathname.startsWith('/knowledge-graph');
  const isAdaptiveTest = pathname.startsWith('/adaptive-test');
  const isMistakes = pathname.startsWith('/mistakes');
  const isCheatsheet = pathname.startsWith('/cheatsheet');
  const isAdmin = pathname.startsWith('/admin');

  const isAnyUtilityActive =
    isKnowledgeGraph || isAdaptiveTest || isMistakes || isCheatsheet || isAdmin;

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close on Escape or outside click
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    function handleMouseDown(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [menuOpen]);

  const utilityItems = [
    {
      href: '/knowledge-graph',
      title: 'Đồ thị Tri thức & Truy vết lỗ hổng',
      desc: 'Bản đồ liên kết 92 chủ đề Vật lý Lớp 6–12 & dò tìm bài gốc cần ôn',
      icon: <GitBranch className="h-5 w-5 text-purple-600" />,
      iconBg: 'bg-purple-50 border-purple-200/80',
      active: isKnowledgeGraph,
      badge: 'DAG 6–12',
      badgeCls: 'bg-purple-100 text-purple-800',
    },
    {
      href: '/adaptive-test',
      title: 'Phòng Khảo thí Thích ứng (CAT)',
      desc: 'Kiểm tra thông minh IRT 3PL tự động tăng giảm độ khó theo năng lực',
      icon: <Target className="h-5 w-5 text-indigo-600" />,
      iconBg: 'bg-indigo-50 border-indigo-200/80',
      active: isAdaptiveTest,
      badge: 'IRT 3PL',
      badgeCls: 'bg-indigo-100 text-indigo-800',
    },
    {
      href: '/mistakes',
      title: 'Sổ tay lỗi sai thông minh',
      desc: 'Lưu trữ tự động các câu làm sai & luyện tập khắc phục lỗ hổng',
      icon: <AlertCircle className="h-5 w-5 text-rose-600" />,
      iconBg: 'bg-rose-50 border-rose-200/80',
      active: isMistakes,
      badge: activeMistakeCount > 0 ? `${activeMistakeCount} câu sai` : 'Sổ tay',
      badgeCls:
        activeMistakeCount > 0
          ? 'bg-rose-600 text-white shadow-2xs'
          : 'bg-rose-100 text-rose-800',
    },
    {
      href: '/cheatsheet',
      title: 'Cẩm nang công thức A4 (In / PDF)',
      desc: 'Bảng tóm tắt toàn bộ công thức & đại lượng Vật lý chuẩn in ấn',
      icon: <Printer className="h-5 w-5 text-amber-600" />,
      iconBg: 'bg-amber-50 border-amber-200/80',
      active: isCheatsheet,
      badge: 'PDF / A4',
      badgeCls: 'bg-amber-100 text-amber-900',
    },
  ];

  return (
    <header className="no-print sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 shadow-soft backdrop-blur-xl print:hidden">
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
        <div className="mx-2 flex-1 max-w-md">
          <GlobalSearchModal />
        </div>

        {/* Right Navigation: Curriculum + Right-hand Utilities Menu */}
        <nav className="flex items-center gap-2" ref={panelRef}>
          {/* Main Link: Curriculum */}
          <Link
            href="/"
            className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition duration-150 ease-snap ${
              isHome
                ? 'bg-brand-50 text-brand-700 shadow-soft ring-1 ring-brand-200/80'
                : 'text-slate-600 hover:bg-slate-100/80 hover:text-slate-900'
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">Chương trình</span>
          </Link>

          {/* Right-side Utilities Menu Trigger */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              className={`flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-extrabold transition duration-150 ease-snap ${
                menuOpen || isAnyUtilityActive
                  ? 'border-indigo-300 bg-indigo-50/90 text-indigo-800 shadow-soft'
                  : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <Sparkles className="h-4 w-4 text-indigo-600" />
              <span>Tiện ích</span>
              {activeMistakeCount > 0 && (
                <span className="rounded-full bg-rose-600 px-1.5 py-0.5 text-[10px] font-extrabold text-white">
                  {activeMistakeCount}
                </span>
              )}
              {menuOpen ? (
                <X className="h-4 w-4 text-slate-500" />
              ) : (
                <Menu className="h-4 w-4 text-slate-600" />
              )}
            </button>

            {/* Right-aligned Full Utilities Menu Panel */}
            {menuOpen && (
              <div className="absolute right-0 top-full z-50 mt-2.5 w-[340px] sm:w-[390px] origin-top-right animate-pop rounded-3xl border border-slate-200/90 bg-white p-4 shadow-2xl ring-1 ring-slate-900/5">
                <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-2.5 px-1">
                  <div>
                    <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-700">
                      ✨ Trung tâm Tiện ích Học tập
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Chọn công cụ thông minh bạn muốn sử dụng
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="space-y-2">
                  {utilityItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`group flex items-start gap-3 rounded-2xl border p-3 transition duration-150 ${
                        item.active
                          ? 'border-indigo-300 bg-indigo-50/70 shadow-2xs'
                          : 'border-slate-200/70 bg-white hover:border-indigo-200 hover:bg-slate-50/80'
                      }`}
                    >
                      <div
                        className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${item.iconBg}`}
                      >
                        {item.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-extrabold text-slate-900 group-hover:text-indigo-700">
                            {item.title}
                          </span>
                          <span
                            className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-extrabold ${item.badgeCls}`}
                          >
                            {item.badge}
                          </span>
                        </div>
                        <p className="mt-1 text-[11px] leading-snug text-slate-500">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Admin Footer inside Menu */}
                <div className="mt-3 border-t border-slate-100 pt-2.5">
                  <Link
                    href={admin ? '/admin' : '/admin/login'}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-bold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                  >
                    <span className="flex items-center gap-2">
                      <Settings className="h-4 w-4 text-slate-500" />
                      <span>
                        {admin ? 'Hệ thống Quản trị CMS' : 'Đăng nhập Quản trị viên'}
                      </span>
                    </span>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

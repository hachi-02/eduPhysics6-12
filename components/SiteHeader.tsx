'use client';

import React, { useState, useEffect } from 'react';
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
  FlaskConical,
  Brain,
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

  const isHome = pathname === '/' || pathname.startsWith('/?');
  const isKnowledgeGraph = pathname.startsWith('/knowledge-graph');
  const isAdaptiveTest = pathname.startsWith('/adaptive-test');
  const isCognitiveTraps = pathname.startsWith('/cognitive-traps');
  const isMistakes = pathname.startsWith('/mistakes');
  const isCheatsheet = pathname.startsWith('/cheatsheet');
  const isAdmin = pathname.startsWith('/admin');

  const isAnyUtilityActive =
    isKnowledgeGraph ||
    isAdaptiveTest ||
    isCognitiveTraps ||
    isMistakes ||
    isCheatsheet ||
    isAdmin;

  // Close drawer when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close on Escape & lock body scroll when drawer is open
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    if (menuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
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
      href: '/cognitive-traps',
      title: 'Ma Trận Bẫy Nhận Thức',
      desc: 'Chẩn đoán 6 loại bẫy kinh điển: đổi đơn vị, nhầm dấu, ngụy biện trực giác',
      icon: <Brain className="h-5 w-5 text-rose-600" />,
      iconBg: 'bg-rose-50 border-rose-200/80',
      active: isCognitiveTraps,
      badge: 'Bẫy 2025',
      badgeCls: 'bg-rose-100 text-rose-800',
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
    <>
      <header className="no-print sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 shadow-soft backdrop-blur-xl print:hidden">
        <div className="flex h-16 w-full items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          {/* Brand Logo (Left) */}
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

          {/* Global Search Bar (Center) */}
          <div className="mx-2 flex-1 max-w-md">
            <GlobalSearchModal />
          </div>

          {/* Right Navigation Flush to Right Edge */}
          <nav className="flex shrink-0 items-center gap-2">
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

            {/* Right-edge Slide-out Drawer Trigger */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
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
              <Menu className="h-4 w-4 text-slate-600" />
            </button>
          </nav>
        </div>
      </header>

      {/* Right-to-Left Slide-Over Drawer (Outside header so fixed covers full viewport height) */}
      <div
        className={`no-print fixed inset-0 z-50 transition-visibility duration-300 print:hidden ${
          menuOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible'
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Drawer Panel Sliding in from the Right */}
        <aside
          className={`fixed inset-y-0 right-0 z-10 flex w-full max-w-sm flex-col border-l border-slate-200/90 bg-white shadow-2xl transition-transform duration-300 ease-out sm:max-w-md ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 px-5 py-4 text-white">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-amber-300 ring-1 ring-white/20">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-sm font-extrabold tracking-tight text-white">
                  Trung tâm Tiện ích Học tập
                </h2>
                <p className="text-[11px] text-purple-200">
                  Hệ thống công cụ thông minh eduPhysics 6–12
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-white/10 p-2 text-white/80 transition hover:bg-white/20 hover:text-white"
              title="Đóng menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Drawer Body: All Utilities List */}
          <div className="flex-1 space-y-3 overflow-y-auto p-5">
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
              Công cụ Học tập &amp; Khảo thí
            </div>

            {utilityItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`group flex items-start gap-3.5 rounded-2xl border p-3.5 transition duration-150 ${
                  item.active
                    ? 'border-indigo-400 bg-indigo-50/70 shadow-soft ring-1 ring-indigo-400/20'
                    : 'border-slate-200/80 bg-white hover:border-indigo-200 hover:bg-slate-50/80'
                }`}
              >
                <div
                  className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${item.iconBg}`}
                >
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-extrabold text-slate-900 group-hover:text-indigo-700 sm:text-sm">
                      {item.title}
                    </span>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-extrabold ${item.badgeCls}`}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}

            {/* Quick return to Curriculum */}
            <div className="pt-2">
              <div className="mb-2 text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                Điều hướng nhanh
              </div>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between rounded-2xl border p-3.5 text-xs font-bold transition ${
                  isHome
                    ? 'border-brand-300 bg-brand-50 text-brand-800'
                    : 'border-slate-200/80 bg-slate-50/60 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <BookOpen className="h-4 w-4 text-brand-600" />
                  <span>Trang chủ Chương trình Vật lý 6–12</span>
                </span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </Link>
            </div>
          </div>

          {/* Drawer Footer: Admin CMS */}
          <div className="border-t border-slate-200 bg-slate-50/80 p-4">
            <Link
              href={admin ? '/admin' : '/admin/login'}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-extrabold text-slate-700 shadow-2xs transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
            >
              <span className="flex items-center gap-2.5">
                <Settings className="h-4 w-4 text-slate-500" />
                <span>
                  {admin ? 'Hệ thống Quản trị CMS' : 'Đăng nhập Quản trị viên'}
                </span>
              </span>
              <ChevronRight className="h-4 w-4 text-slate-400" />
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}

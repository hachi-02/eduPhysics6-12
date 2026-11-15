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
  Brain,
  BarChart3,
  Layers,
  Calculator,
  Menu,
  X,
} from 'lucide-react';
import { GlobalSearchModal } from './GlobalSearchModal';
import { getSavedActiveGrade, isValidGradeNumber } from '@/lib/grade-context';
import { getGradePageTheme } from '@/lib/grade-themes';

interface SiteHeaderProps {
  admin: any;
  activeMistakeCount: number;
  initialGrade?: number;
}

const GRADE_HEADER_THEMES: Record<
  number,
  {
    barBg: string;
    cardBorder: string;
    curriculumActive: string;
  }
> = {
  6: {
    // Lớp 6: Nước biển (xanh dương / sky / cyan)
    barBg: 'bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-600',
    cardBorder: 'border-sky-300/40',
    curriculumActive: 'bg-white text-blue-900 shadow-sm scale-105',
  },
  7: {
    // Lớp 7: Xanh lá + Vàng + Xanh dương
    barBg: 'bg-gradient-to-r from-emerald-700 via-amber-500 to-blue-700',
    cardBorder: 'border-emerald-300/40',
    curriculumActive: 'bg-white text-emerald-950 shadow-sm scale-105',
  },
  8: {
    // Lớp 8: Galaxy + Cam
    barBg: 'bg-gradient-to-r from-indigo-950 via-purple-900 via-violet-800 to-orange-500',
    cardBorder: 'border-purple-400/40',
    curriculumActive: 'bg-white text-purple-950 shadow-sm scale-105',
  },
  9: {
    // Lớp 9: Vàng + Nâu + Đen
    barBg: 'bg-gradient-to-r from-slate-950 via-amber-950 via-amber-800 to-amber-500',
    cardBorder: 'border-amber-400/40',
    curriculumActive: 'bg-white text-amber-950 shadow-sm scale-105',
  },
  10: {
    // Lớp 10: Đỏ + Cam + Vàng
    barBg: 'bg-gradient-to-r from-red-600 via-orange-500 to-amber-400',
    cardBorder: 'border-orange-400/40',
    curriculumActive: 'bg-white text-red-950 shadow-sm scale-105',
  },
  11: {
    // Lớp 11: Tím + Xanh
    barBg: 'bg-gradient-to-r from-purple-700 via-indigo-600 to-cyan-500',
    cardBorder: 'border-cyan-400/40',
    curriculumActive: 'bg-white text-purple-950 shadow-sm scale-105',
  },
  12: {
    // Lớp 12: Đỏ + Cam + Đen
    barBg: 'bg-gradient-to-r from-black via-red-950 via-red-700 to-orange-600',
    cardBorder: 'border-red-400/40',
    curriculumActive: 'bg-white text-red-950 shadow-sm scale-105',
  },
};

export function SiteHeader({ admin, activeMistakeCount, initialGrade = 6 }: SiteHeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeGrade, setActiveGrade] = useState<number>(initialGrade);
  const [prevGrade, setPrevGrade] = useState<number>(initialGrade);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sp = new URLSearchParams(window.location.search);
      const g = sp.get('grade');
      if (g && isValidGradeNumber(Number(g))) {
        setActiveGrade(Number(g));
        setPrevGrade(Number(g));
      } else {
        const saved = getSavedActiveGrade(initialGrade);
        setActiveGrade(saved);
        setPrevGrade(saved);
      }
    } else {
      setActiveGrade(initialGrade);
      setPrevGrade(initialGrade);
    }

    const onGradeChange = (e: Event) => {
      const custom = e as CustomEvent<{ grade?: number }>;
      if (custom.detail?.grade && isValidGradeNumber(custom.detail.grade)) {
        setActiveGrade(custom.detail.grade);
      } else {
        setActiveGrade(getSavedActiveGrade(initialGrade));
      }
    };
    window.addEventListener('eduphysics-grade-change', onGradeChange);
    return () => window.removeEventListener('eduphysics-grade-change', onGradeChange);
  }, [pathname, initialGrade]);

  // Keep previous grade as solid foundation for 700ms during transition
  useEffect(() => {
    if (activeGrade !== prevGrade) {
      const timer = setTimeout(() => {
        setPrevGrade(activeGrade);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [activeGrade, prevGrade]);

  const headerTheme = GRADE_HEADER_THEMES[activeGrade] || GRADE_HEADER_THEMES[6];

  const isHome = pathname === '/' || pathname.startsWith('/?');
  const isProgress = pathname.startsWith('/progress');
  const isFlashcards = pathname.startsWith('/flashcards');
  const isCalculator = pathname.startsWith('/calculator');
  const isKnowledgeGraph = pathname.startsWith('/knowledge-graph');
  const isAdaptiveTest = pathname.startsWith('/adaptive-test');
  const isCognitiveTraps = pathname.startsWith('/cognitive-traps');
  const isMistakes = pathname.startsWith('/mistakes');
  const isCheatsheet = pathname.startsWith('/cheatsheet');
  const isAdmin = pathname.startsWith('/admin');

  const isAnyUtilityActive =
    isProgress ||
    isFlashcards ||
    isCalculator ||
    isKnowledgeGraph ||
    isAdaptiveTest ||
    isCognitiveTraps ||
    isMistakes ||
    isCheatsheet ||
    isAdmin;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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

  const gradeTheme = getGradePageTheme(activeGrade);

  const utilityItems = [
    {
      group: 'study' as const,
      href: '/flashcards',
      title: 'Flashcard Công thức & SI',
      desc: 'Lật thẻ Active Recall toàn bộ công thức & đơn vị chuẩn',
      icon: <Layers className="h-4.5 w-4.5 text-indigo-600" />,
      iconBg: 'bg-indigo-50 border-indigo-200/80',
      active: isFlashcards,
      badge: 'Active Recall',
      badgeCls: 'bg-indigo-100 text-indigo-800',
    },
    {
      group: 'study' as const,
      href: '/calculator',
      title: 'Đổi đơn vị & Giải nhanh',
      desc: 'Quy đổi 12 nhóm SI, rút ẩn & thay số từng bước',
      icon: <Calculator className="h-4.5 w-4.5 text-teal-600" />,
      iconBg: 'bg-teal-50 border-teal-200/80',
      active: isCalculator,
      badge: 'SI • Solver',
      badgeCls: 'bg-teal-100 text-teal-800',
    },
    {
      group: 'study' as const,
      href: `/cheatsheet?grade=${activeGrade}`,
      title: 'Cẩm nang Công thức A4',
      desc: 'Tóm tắt công thức & đại lượng chuẩn in PDF A4',
      icon: <Printer className="h-4.5 w-4.5 text-amber-600" />,
      iconBg: 'bg-amber-50 border-amber-200/80',
      active: isCheatsheet,
      badge: 'PDF / A4',
      badgeCls: 'bg-amber-100 text-amber-900',
    },
    {
      group: 'study' as const,
      href: '/progress',
      title: 'Tiến độ & Năng lực',
      desc: 'Độ phủ chủ đề, tháp 4 mức độ & nhiệm vụ hôm nay',
      icon: <BarChart3 className="h-4.5 w-4.5 text-emerald-600" />,
      iconBg: 'bg-emerald-50 border-emerald-200/80',
      active: isProgress,
      badge: '360°',
      badgeCls: 'bg-emerald-100 text-emerald-800',
    },
    {
      group: 'ai' as const,
      href: '/knowledge-graph',
      title: 'Đồ thị Tri thức 6–12',
      desc: 'Bản đồ liên kết chủ đề & truy vết bài gốc bị hổng',
      icon: <GitBranch className="h-4.5 w-4.5 text-purple-600" />,
      iconBg: 'bg-purple-50 border-purple-200/80',
      active: isKnowledgeGraph,
      badge: 'DAG 6–12',
      badgeCls: 'bg-purple-100 text-purple-800',
    },
    {
      group: 'ai' as const,
      href: '/adaptive-test',
      title: 'Khảo thí Thích ứng (CAT)',
      desc: 'Đề thông minh IRT 3PL tự chỉnh độ khó theo năng lực',
      icon: <Target className="h-4.5 w-4.5 text-indigo-600" />,
      iconBg: 'bg-indigo-50 border-indigo-200/80',
      active: isAdaptiveTest,
      badge: 'IRT 3PL',
      badgeCls: 'bg-indigo-100 text-indigo-800',
    },
    {
      group: 'ai' as const,
      href: '/cognitive-traps',
      title: 'Ma Trận Bẫy Nhận Thức',
      desc: 'Chẩn đoán 6 bẫy kinh điển: đổi đơn vị, dấu, trực giác',
      icon: <Brain className="h-4.5 w-4.5 text-rose-600" />,
      iconBg: 'bg-rose-50 border-rose-200/80',
      active: isCognitiveTraps,
      badge: 'Bẫy 2025',
      badgeCls: 'bg-rose-100 text-rose-800',
    },
    {
      group: 'ai' as const,
      href: `/mistakes?grade=${activeGrade}`,
      title: 'Sổ tay Lỗi sai Thông minh',
      desc: 'Lưu tự động câu sai & luyện tập khắc phục lỗ hổng',
      icon: <AlertCircle className="h-4.5 w-4.5 text-rose-600" />,
      iconBg: 'bg-rose-50 border-rose-200/80',
      active: isMistakes,
      badge: activeMistakeCount > 0 ? `${activeMistakeCount} câu sai` : 'Sổ tay',
      badgeCls:
        activeMistakeCount > 0
          ? 'bg-rose-600 text-white shadow-2xs'
          : 'bg-rose-100 text-rose-800',
    },
  ];

  const studyItems = utilityItems.filter((i) => i.group === 'study');
  const aiItems = utilityItems.filter((i) => i.group === 'ai');

  const homeHref = `/?grade=${activeGrade}`;

  return (
    <>
      {/* Floating Island Header Container: Aligned with the dashboard width & spaced equally from top and bottom */}
      <div className="no-print sticky top-2 sm:top-2.5 z-40 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-2 sm:mt-2.5 mb-2 sm:mb-2.5 print:hidden transition-all duration-300">
        <header
          className={`relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border ${headerTheme.cardBorder || 'border-white/25'} shadow-xl shadow-black/15 backdrop-blur-xl transition-all duration-700 ease-in-out`}
        >
          {/* Layer 1: Solid base layer of previous grade (prevents any transparent gap or white flash) */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 ${
              (GRADE_HEADER_THEMES[prevGrade] || GRADE_HEADER_THEMES[6]).barBg
            } z-0`}
          />

          {/* Layer 2: All grade themes with smooth cross-fade transition */}
          {Object.entries(GRADE_HEADER_THEMES).map(([gradeKey, theme]) => {
            const gNum = Number(gradeKey);
            const isCurrent = gNum === activeGrade;
            return (
              <div
                key={gradeKey}
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 ${theme.barBg} transition-opacity duration-700 ease-in-out ${
                  isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              />
            );
          })}

          {/* Top subtle highlight shimmer */}
          <div className="relative z-20 h-[1.5px] w-full bg-white/25" />

          {/* Inner Header Content: Responsive height & padding */}
          <div className="relative z-20 flex h-13 sm:h-14 md:h-[58px] items-center justify-between gap-1.5 sm:gap-2.5 md:gap-3 px-3 sm:px-4 md:px-5 lg:px-6">
            {/* Brand Logo (Left) */}
            <Link href={homeHref} className="group flex shrink-0 items-center gap-1.5 sm:gap-2.5 md:gap-3">
              <div className="relative flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-xl sm:rounded-2xl bg-white/20 text-white border border-white/25 backdrop-blur-md transition duration-300 ease-snap group-hover:scale-105 group-hover:bg-white/30 group-active:scale-95 shadow-2xs">
                <Atom className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 transition-transform duration-700 group-hover:rotate-180" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 sm:gap-1.5 leading-none">
                  <span className="text-xs sm:text-sm md:text-base font-extrabold tracking-tight text-white drop-shadow-xs">
                    eduPhysics
                  </span>
                  <span className="rounded-md sm:rounded-lg bg-white/20 border border-white/30 px-1 sm:px-1.5 py-0.5 font-mono text-[8.5px] sm:text-[10px] font-extrabold text-white shadow-2xs">
                    6–12
                  </span>
                </div>
                <span className="hidden text-[8.5px] sm:text-[9px] font-bold tracking-[0.14em] text-white/75 md:block">
                  QUANTUM LAB • GDPT 2018
                </span>
              </div>
            </Link>

            {/* Global Search Bar (Center / Right on mobile) */}
            <div className="sm:mx-2 max-w-xs sm:max-w-sm md:max-w-md sm:flex-1 min-w-0">
              <GlobalSearchModal variant="glass" />
            </div>

            {/* Right Navigation Dock */}
            <nav className="flex shrink-0 items-center gap-1 sm:gap-1.5 md:gap-2">
              {/* Main Link: Curriculum (Hidden on small mobile where Home is accessible via logo, visible on sm+) */}
              <Link
                href={homeHref}
                title="Chương trình học"
                className={`hidden sm:flex items-center gap-1.5 rounded-xl sm:rounded-2xl px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs font-extrabold transition-all duration-200 ease-snap ${
                  isHome
                    ? `${headerTheme.curriculumActive}`
                    : 'text-white/90 hover:bg-white/15 hover:text-white'
                }`}
              >
                <BookOpen className="h-4 w-4 shrink-0" />
                <span className="hidden md:inline">Chương trình</span>
              </Link>

              {/* Quick Link: SI Converter & Formula Solver (Hidden on mobile/tablet, full label on xl, compact on lg) */}
              <Link
                href="/calculator"
                title="Đổi đơn vị SI & Giải nhanh công thức"
                className={`hidden lg:flex items-center gap-1.5 rounded-xl sm:rounded-2xl px-2.5 py-1.5 sm:px-3.5 sm:py-2 text-xs font-extrabold transition-all duration-200 ease-snap ${
                  isCalculator
                    ? 'bg-white text-teal-800 shadow-sm scale-105'
                    : 'text-white/90 hover:bg-white/15 hover:text-white'
                }`}
              >
                <Calculator className={`h-4 w-4 shrink-0 ${isCalculator ? 'text-teal-700' : 'text-white'}`} />
                <span className="hidden xl:inline">Đổi đơn vị &amp; Giải nhanh</span>
                <span className="hidden lg:inline xl:hidden">Đổi đơn vị</span>
              </Link>

              {/* Quick Link: Progress Dashboard */}
              <Link
                href="/progress"
                title="Tiến độ học tập & Hồ sơ năng lực"
                className={`hidden md:flex items-center gap-1.5 rounded-xl sm:rounded-2xl px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs font-extrabold transition-all duration-200 ease-snap ${
                  isProgress
                    ? 'bg-white text-emerald-800 shadow-sm scale-105'
                    : 'text-white/90 hover:bg-white/15 hover:text-white'
                }`}
              >
                <BarChart3 className={`h-4 w-4 shrink-0 ${isProgress ? 'text-emerald-700' : 'text-white'}`} />
                <span className="hidden md:inline">Tiến độ</span>
              </Link>

              {/* Right-edge Slide-out Drawer Trigger (Always visible, responsive padding) */}
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-expanded={menuOpen}
                title="Menu Tiện ích mở rộng"
                className={`flex items-center gap-1 sm:gap-1.5 rounded-xl sm:rounded-2xl border px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs font-extrabold transition-all duration-200 ease-snap ${
                  menuOpen || isAnyUtilityActive
                    ? 'border-white/40 bg-white text-slate-900 shadow-sm'
                    : 'border-white/25 bg-white/15 text-white shadow-2xs backdrop-blur-md hover:border-white/40 hover:bg-white/25 hover:text-white'
                }`}
              >
                <Sparkles className={`hidden sm:inline h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 ${menuOpen || isAnyUtilityActive ? 'text-amber-500' : 'text-amber-300'}`} />
                <span className="hidden sm:inline">Tiện ích</span>
                {activeMistakeCount > 0 && (
                  <span className="rounded-full bg-rose-500 px-1.5 py-0.2 font-mono text-[9px] sm:text-[10px] font-extrabold text-white shadow-2xs">
                    {activeMistakeCount}
                  </span>
                )}
                <Menu className={`h-4 w-4 sm:h-3.5 sm:w-3.5 shrink-0 ${menuOpen || isAnyUtilityActive ? 'text-slate-800' : 'text-white'}`} />
              </button>
            </nav>
          </div>
        </header>
      </div>

      {/* Right-to-Left Slide-Over Drawer */}
      <div
        className={`no-print fixed inset-0 z-50 transition-visibility duration-300 print:hidden ${
          menuOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible'
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`fixed inset-0 bg-slate-950/50 backdrop-blur-xs transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Drawer Panel */}
        <aside
          className={`fixed inset-y-0 right-0 z-10 flex w-full max-w-md flex-col border-l border-slate-200/80 bg-slate-50/95 shadow-2xl backdrop-blur-xl transition-transform duration-300 ease-out sm:max-w-lg ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header (Grade-synced) */}
          <div className={`relative overflow-hidden border-b border-white/10 px-5 py-4 text-white ${gradeTheme.heroBg}`}>
            <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl ${gradeTheme.heroOrb1}`} />
            <div className={`pointer-events-none absolute -bottom-10 left-8 h-24 w-24 rounded-full blur-2xl ${gradeTheme.heroOrb2}`} />
            <div className="relative flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white/15 text-amber-300 shadow-inner backdrop-blur">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-extrabold tracking-tight text-white sm:text-base">
                      Trung tâm Tiện ích
                    </h2>
                    <span className="rounded-full border border-white/25 bg-white/15 px-2 py-0.5 text-[10px] font-black text-white backdrop-blur">
                      Lớp {activeGrade}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[11px] text-white/75">
                    8 phân hệ thông minh • Chuẩn GDPT 2018
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white/80 transition hover:bg-white/20 hover:text-white"
                title="Đóng menu"
                aria-label="Đóng menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Drawer Body: Grouped 2-Column Bento Grid */}
          <div className="flex-1 space-y-5 overflow-y-auto p-4 sm:p-5">
            {/* Group 1: Study & Tools */}
            <section className="space-y-2.5">
              <div className="flex items-center justify-between px-0.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                  Ôn tập &amp; Công cụ học tập
                </span>
                <span className="rounded-full bg-slate-200/70 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                  4 tiện ích
                </span>
              </div>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {studyItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`group flex flex-col justify-between gap-2.5 rounded-2xl border p-3.5 transition-all duration-200 ${
                      item.active
                        ? `${gradeTheme.highlightBoxSubtle} ${gradeTheme.cardHover} shadow-soft ring-1 ring-current/15`
                        : `border-slate-200/80 bg-white hover:-translate-y-0.5 hover:shadow-md ${gradeTheme.cardHover}`
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-transform duration-200 group-hover:scale-105 ${item.iconBg}`}
                      >
                        {item.icon}
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-extrabold ${item.badgeCls}`}
                      >
                        {item.badge}
                      </span>
                    </div>
                    <div>
                      <div
                        className={`text-[13px] font-extrabold leading-snug ${
                          item.active ? gradeTheme.accentText : 'text-slate-900'
                        }`}
                      >
                        {item.title}
                      </div>
                      <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Group 2: AI Diagnostics & Adaptive Testing */}
            <section className="space-y-2.5">
              <div className="flex items-center justify-between px-0.5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                  Chẩn đoán &amp; Khảo thí AI
                </span>
                <span className="rounded-full bg-slate-200/70 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                  4 phân hệ
                </span>
              </div>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {aiItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`group flex flex-col justify-between gap-2.5 rounded-2xl border p-3.5 transition-all duration-200 ${
                      item.active
                        ? `${gradeTheme.highlightBoxSubtle} ${gradeTheme.cardHover} shadow-soft ring-1 ring-current/15`
                        : `border-slate-200/80 bg-white hover:-translate-y-0.5 hover:shadow-md ${gradeTheme.cardHover}`
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-transform duration-200 group-hover:scale-105 ${item.iconBg}`}
                      >
                        {item.icon}
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-extrabold ${item.badgeCls}`}
                      >
                        {item.badge}
                      </span>
                    </div>
                    <div>
                      <div
                        className={`text-[13px] font-extrabold leading-snug ${
                          item.active ? gradeTheme.accentText : 'text-slate-900'
                        }`}
                      >
                        {item.title}
                      </div>
                      <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Drawer Footer: Quick Nav + Admin CMS */}
          <div className="border-t border-slate-200/80 bg-white/95 p-4 backdrop-blur">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <Link
                href={homeHref}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-extrabold transition ${
                  isHome
                    ? `${gradeTheme.solidBtn} shadow-sm`
                    : `border border-slate-200/90 bg-slate-50 text-slate-700 hover:bg-slate-100 ${gradeTheme.cardHover}`
                }`}
              >
                <span className="flex items-center gap-2">
                  <BookOpen className={`h-4 w-4 ${isHome ? 'text-white' : gradeTheme.accentText}`} />
                  <span>Chương trình Lớp {activeGrade}</span>
                </span>
                <ChevronRight className="h-3.5 w-3.5 opacity-70" />
              </Link>

              <Link
                href={admin ? '/admin' : '/admin/login'}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-xl border border-slate-200/90 bg-white px-3.5 py-2.5 text-xs font-extrabold text-slate-700 shadow-2xs transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
              >
                <span className="flex items-center gap-2">
                  <Settings className="h-4 w-4 text-slate-500" />
                  <span>{admin ? 'Quản trị CMS' : 'Đăng nhập Admin'}</span>
                </span>
                <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

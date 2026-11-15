import React from 'react';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { getAllGradesWithStats, getGradeCurriculumBoard } from '@/lib/cms-service';
import { GRADE_COOKIE_NAME, isValidGradeNumber } from '@/lib/grade-context';
import { GradeContextSync } from '@/components/GradeContextSync';
import {
  ChevronRight,
  FileCheck,
  Award,
  TrendingUp,
  Sparkles,
  Layers,
  BookOpen,
  GraduationCap,
  Calculator,
  BarChart3,
  Brain,
  Atom,
  FlaskConical,
  ArrowUpRight,
} from 'lucide-react';
import { ChapterActionsMenu } from '@/components/ChapterActionsMenu';
import { TopicStudyToggleButton } from '@/components/TopicStudyToggleButton';
import { GradeHeroBackdrop } from '@/components/GradeHeroBackdrop';
import { ChapterHeaderBand } from '@/components/ChapterHeaderBand';
import { getGradeChapterTheme } from '@/lib/grade-themes';
import { GradeTabsSwitcher } from '@/components/GradeTabsSwitcher';

export const dynamic = 'force-dynamic';

const GRADE_6_QUICK_TOOLS = [
  {
    href: '/flashcards',
    title: 'Flashcard Công Thức & SI',
    desc: 'Lật thẻ 3D Active Recall hơn 250 công thức & đại lượng chuẩn SGK',
    badge: '💧 Hot • Ôn nhanh',
    icon: <Layers className="h-5 w-5 text-blue-700 transition-transform duration-300 group-hover:rotate-6" />,
    iconBg: 'bg-white border-2 border-blue-300/90 shadow-md shadow-blue-300/40',
    badgeCls: 'bg-blue-600 text-white font-black shadow-xs',
    cardGradient: 'from-blue-200/95 via-sky-100/90 via-blue-100 to-indigo-200/90',
    borderCls: 'border-cyan-400/80 hover:border-blue-500 ring-1 ring-cyan-400/30',
    shadowCls: '',
    orb1: 'from-blue-600/55 via-sky-500/40 to-cyan-400/30',
    orb2: 'from-sky-500/50 via-blue-400/40 to-indigo-300/25',
    titleHover: 'group-hover:text-blue-900',
    arrowHover: 'text-blue-600 group-hover:text-blue-800',
  },
  {
    href: '/calculator',
    title: 'Đổi Đơn Vị SI & Giải Nhanh',
    desc: 'Quy đổi 12 nhóm đơn vị SI, rút ẩn & thay số công thức 4 bước',
    badge: '🌊 SI • Solver',
    icon: <Calculator className="h-5 w-5 text-cyan-700 transition-transform duration-300 group-hover:-rotate-6" />,
    iconBg: 'bg-white border-2 border-cyan-300/90 shadow-md shadow-cyan-300/40',
    badgeCls: 'bg-cyan-600 text-white font-black shadow-xs',
    cardGradient: 'from-cyan-200/95 via-sky-100/90 via-teal-100 to-cyan-200/90',
    borderCls: 'border-cyan-400/80 hover:border-blue-500 ring-1 ring-cyan-400/30',
    shadowCls: '',
    orb1: 'from-cyan-500/55 via-sky-400/45 to-teal-400/30',
    orb2: 'from-sky-500/50 via-cyan-400/40 to-blue-300/25',
    titleHover: 'group-hover:text-cyan-950',
    arrowHover: 'text-cyan-600 group-hover:text-cyan-800',
  },
  {
    href: '/progress',
    title: 'Tiến Độ & Hồ Sơ Năng Lực',
    desc: 'Bản đồ nhiệt 92 chủ đề, tháp năng lực 4 cấp độ & nhiệm vụ hôm nay',
    badge: '🧊 360° Analytics',
    icon: <BarChart3 className="h-5 w-5 text-sky-700 transition-transform duration-300 group-hover:scale-110" />,
    iconBg: 'bg-white border-2 border-sky-300/90 shadow-md shadow-sky-300/40',
    badgeCls: 'bg-sky-600 text-white font-black shadow-xs',
    cardGradient: 'from-sky-200/95 via-blue-100/90 via-sky-100 to-blue-200/90',
    borderCls: 'border-cyan-400/80 hover:border-blue-500 ring-1 ring-cyan-400/30',
    shadowCls: '',
    orb1: 'from-sky-500/55 via-blue-400/45 to-cyan-400/30',
    orb2: 'from-blue-500/50 via-sky-400/40 to-teal-300/25',
    titleHover: 'group-hover:text-sky-950',
    arrowHover: 'text-sky-600 group-hover:text-sky-800',
  },
  {
    href: '/cognitive-traps',
    title: 'Ma Trận Bẫy Nhận Thức',
    desc: 'Chẩn đoán 6 loại bẫy kinh điển: quên đổi đơn vị, nhầm dấu, trực giác',
    badge: '🌀 Chống liệt 2025',
    icon: <Brain className="h-5 w-5 text-blue-800 transition-transform duration-300 group-hover:rotate-6" />,
    iconBg: 'bg-white border-2 border-blue-400/90 shadow-md shadow-blue-400/40',
    badgeCls: 'bg-blue-700 text-white font-black shadow-xs',
    cardGradient: 'from-blue-200/95 via-indigo-100/90 via-sky-100 to-blue-300/85',
    borderCls: 'border-cyan-400/80 hover:border-blue-500 ring-1 ring-cyan-400/30',
    shadowCls: '',
    orb1: 'from-blue-600/55 via-indigo-500/45 to-sky-400/30',
    orb2: 'from-sky-500/50 via-blue-400/40 to-indigo-300/25',
    titleHover: 'group-hover:text-blue-950',
    arrowHover: 'text-blue-700 group-hover:text-blue-900',
  },
];

const GRADE_7_QUICK_TOOLS = [
  {
    href: '/flashcards',
    title: 'Flashcard Công Thức & SI',
    desc: 'Lật thẻ 3D Active Recall hơn 250 công thức & đại lượng chuẩn SGK',
    badge: '🌱 Hot • Ôn nhanh',
    icon: <Layers className="h-5 w-5 text-emerald-700 transition-transform duration-300 group-hover:rotate-6" />,
    iconBg: 'bg-white border-2 border-emerald-300/90 shadow-md shadow-emerald-300/40',
    badgeCls: 'bg-gradient-to-r from-emerald-600 via-amber-500 to-teal-600 text-white font-black shadow-xs',
    cardGradient: 'from-emerald-200/95 via-amber-100/90 via-teal-100 to-blue-200/90',
    borderCls: 'border-emerald-400/80 hover:border-teal-500 ring-1 ring-emerald-400/30',
    shadowCls: '',
    orb1: 'from-emerald-500/50 via-amber-400/40 to-blue-400/30',
    orb2: 'from-blue-500/50 via-teal-400/40 to-emerald-300/25',
    titleHover: 'group-hover:text-emerald-950',
    arrowHover: 'text-teal-600 group-hover:text-emerald-800',
  },
  {
    href: '/calculator',
    title: 'Đổi Đơn Vị SI & Giải Nhanh',
    desc: 'Quy đổi 12 nhóm đơn vị SI, rút ẩn & thay số công thức 4 bước',
    badge: '🌍 SI • Solver',
    icon: <Calculator className="h-5 w-5 text-teal-700 transition-transform duration-300 group-hover:-rotate-6" />,
    iconBg: 'bg-white border-2 border-teal-300/90 shadow-md shadow-teal-300/40',
    badgeCls: 'bg-gradient-to-r from-teal-600 via-amber-500 to-cyan-600 text-white font-black shadow-xs',
    cardGradient: 'from-cyan-200/95 via-amber-100/90 via-emerald-100 to-teal-200/90',
    borderCls: 'border-emerald-400/80 hover:border-teal-500 ring-1 ring-emerald-400/30',
    shadowCls: '',
    orb1: 'from-teal-500/50 via-yellow-400/40 to-emerald-400/30',
    orb2: 'from-emerald-500/50 via-teal-400/40 to-cyan-300/25',
    titleHover: 'group-hover:text-teal-950',
    arrowHover: 'text-teal-600 group-hover:text-cyan-800',
  },
  {
    href: '/progress',
    title: 'Tiến Độ & Hồ Sơ Năng Lực',
    desc: 'Bản đồ nhiệt 92 chủ đề, tháp năng lực 4 cấp độ & nhiệm vụ hôm nay',
    badge: '🌐 360° Analytics',
    icon: <BarChart3 className="h-5 w-5 text-teal-700 transition-transform duration-300 group-hover:scale-110" />,
    iconBg: 'bg-white border-2 border-teal-300/90 shadow-md shadow-teal-300/40',
    badgeCls: 'bg-gradient-to-r from-sky-600 via-amber-500 to-emerald-600 text-white font-black shadow-xs',
    cardGradient: 'from-sky-200/95 via-amber-100/90 via-teal-100 to-emerald-200/90',
    borderCls: 'border-emerald-400/80 hover:border-teal-500 ring-1 ring-emerald-400/30',
    shadowCls: '',
    orb1: 'from-blue-500/50 via-amber-400/40 to-emerald-400/30',
    orb2: 'from-emerald-500/50 via-sky-400/40 to-blue-300/25',
    titleHover: 'group-hover:text-teal-950',
    arrowHover: 'text-emerald-600 group-hover:text-teal-800',
  },
  {
    href: '/cognitive-traps',
    title: 'Ma Trận Bẫy Nhận Thức',
    desc: 'Chẩn đoán 6 loại bẫy kinh điển: quên đổi đơn vị, nhầm dấu, trực giác',
    badge: '🍃 Chống liệt 2025',
    icon: <Brain className="h-5 w-5 text-emerald-800 transition-transform duration-300 group-hover:rotate-6" />,
    iconBg: 'bg-white border-2 border-emerald-400/90 shadow-md shadow-emerald-400/40',
    badgeCls: 'bg-gradient-to-r from-emerald-700 via-amber-500 to-blue-700 text-white font-black shadow-xs',
    cardGradient: 'from-teal-200/95 via-amber-100/90 via-blue-100 to-emerald-300/85',
    borderCls: 'border-emerald-400/80 hover:border-teal-500 ring-1 ring-emerald-400/30',
    shadowCls: '',
    orb1: 'from-emerald-600/50 via-yellow-400/40 to-blue-500/30',
    orb2: 'from-blue-600/50 via-emerald-400/40 to-teal-300/25',
    titleHover: 'group-hover:text-emerald-950',
    arrowHover: 'text-teal-700 group-hover:text-blue-900',
  },
];

// Lớp 8: galaxy + cam
const GRADE_8_QUICK_TOOLS = [
  {
    href: '/flashcards',
    title: 'Flashcard Công Thức & SI',
    desc: 'Lật thẻ 3D Active Recall hơn 250 công thức & đại lượng chuẩn SGK',
    badge: '🌌 Galaxy • Ôn nhanh',
    icon: <Layers className="h-5 w-5 text-purple-700 transition-transform duration-300 group-hover:rotate-6" />,
    iconBg: 'bg-white border-2 border-purple-300/90 shadow-md shadow-purple-300/40',
    badgeCls: 'bg-gradient-to-r from-purple-800 to-orange-600 text-white font-black shadow-xs',
    cardGradient: 'from-purple-200/95 via-indigo-100/90 via-orange-100 to-orange-200/90',
    borderCls: 'border-purple-400/85 hover:border-orange-500 ring-1 ring-purple-400/30',
    shadowCls: '',
    orb1: 'from-purple-600/55 via-violet-500/40 to-orange-400/30',
    orb2: 'from-orange-500/50 via-purple-500/40 to-indigo-300/25',
    titleHover: 'group-hover:text-purple-950',
    arrowHover: 'text-orange-600 group-hover:text-orange-800',
  },
  {
    href: '/calculator',
    title: 'Đổi Đơn Vị SI & Giải Nhanh',
    desc: 'Quy đổi 12 nhóm đơn vị SI, rút ẩn & thay số công thức 4 bước',
    badge: '⚡ Solver • Galaxy',
    icon: <Calculator className="h-5 w-5 text-orange-600 transition-transform duration-300 group-hover:-rotate-6" />,
    iconBg: 'bg-white border-2 border-orange-300/90 shadow-md shadow-orange-300/40',
    badgeCls: 'bg-gradient-to-r from-orange-600 to-purple-700 text-white font-black shadow-xs',
    cardGradient: 'from-orange-200/95 via-purple-100/90 via-violet-100 to-purple-200/90',
    borderCls: 'border-purple-400/85 hover:border-orange-500 ring-1 ring-purple-400/30',
    shadowCls: '',
    orb1: 'from-orange-500/55 via-purple-500/45 to-violet-500/30',
    orb2: 'from-purple-600/50 via-orange-400/40 to-amber-300/25',
    titleHover: 'group-hover:text-orange-950',
    arrowHover: 'text-purple-600 group-hover:text-purple-800',
  },
  {
    href: '/progress',
    title: 'Tiến Độ & Hồ Sơ Năng Lực',
    desc: 'Bản đồ nhiệt 92 chủ đề, tháp năng lực 4 cấp độ & nhiệm vụ hôm nay',
    badge: '✨ 360° Nebula',
    icon: <BarChart3 className="h-5 w-5 text-indigo-700 transition-transform duration-300 group-hover:scale-110" />,
    iconBg: 'bg-white border-2 border-indigo-300/90 shadow-md shadow-indigo-300/40',
    badgeCls: 'bg-gradient-to-r from-indigo-700 to-orange-600 text-white font-black shadow-xs',
    cardGradient: 'from-indigo-200/95 via-purple-100/90 via-orange-100 to-indigo-200/90',
    borderCls: 'border-purple-400/85 hover:border-orange-500 ring-1 ring-purple-400/30',
    shadowCls: '',
    orb1: 'from-indigo-600/55 via-purple-400/45 to-orange-400/30',
    orb2: 'from-orange-500/50 via-indigo-400/40 to-violet-300/25',
    titleHover: 'group-hover:text-indigo-950',
    arrowHover: 'text-indigo-600 group-hover:text-indigo-800',
  },
  {
    href: '/cognitive-traps',
    title: 'Ma Trận Bẫy Nhận Thức',
    desc: 'Chẩn đoán 6 loại bẫy kinh điển: quên đổi đơn vị, nhầm dấu, trực giác',
    badge: '🪐 Bẫy Không Gian',
    icon: <Brain className="h-5 w-5 text-violet-800 transition-transform duration-300 group-hover:rotate-6" />,
    iconBg: 'bg-white border-2 border-violet-400/90 shadow-md shadow-violet-400/40',
    badgeCls: 'bg-gradient-to-r from-purple-800 via-violet-700 to-orange-600 text-white font-black shadow-xs',
    cardGradient: 'from-violet-200/95 via-indigo-100/90 via-orange-100 to-purple-300/85',
    borderCls: 'border-purple-400/85 hover:border-orange-500 ring-1 ring-purple-400/30',
    shadowCls: '',
    orb1: 'from-violet-600/55 via-indigo-500/45 to-orange-400/30',
    orb2: 'from-orange-500/50 via-violet-400/40 to-indigo-300/25',
    titleHover: 'group-hover:text-violet-950',
    arrowHover: 'text-orange-600 group-hover:text-orange-800',
  },
];

// Lớp 9: vàng + nâu + đen
const GRADE_9_QUICK_TOOLS = [
  {
    href: '/flashcards',
    title: 'Flashcard Công Thức & SI',
    desc: 'Lật thẻ 3D Active Recall hơn 250 công thức & đại lượng chuẩn SGK',
    badge: '⚡ Vàng Kim • Ôn nhanh',
    icon: <Layers className="h-5 w-5 text-amber-800 transition-transform duration-300 group-hover:rotate-6" />,
    iconBg: 'bg-white border-2 border-amber-300/90 shadow-md shadow-amber-300/40',
    badgeCls: 'bg-gradient-to-r from-amber-600 via-amber-800 to-stone-900 text-white font-black shadow-xs',
    cardGradient: 'from-amber-200/95 via-stone-100/90 via-yellow-100 to-stone-200/90',
    borderCls: 'border-amber-400/85 hover:border-amber-600 ring-1 ring-amber-400/30',
    shadowCls: '',
    orb1: 'from-amber-500/55 via-amber-700/40 to-stone-900/30',
    orb2: 'from-stone-800/50 via-amber-600/40 to-yellow-300/25',
    titleHover: 'group-hover:text-amber-950',
    arrowHover: 'text-amber-700 group-hover:text-amber-900',
  },
  {
    href: '/calculator',
    title: 'Đổi Đơn Vị SI & Giải Nhanh',
    desc: 'Quy đổi 12 nhóm đơn vị SI, rút ẩn & thay số công thức 4 bước',
    badge: '🪙 Bronze • Solver',
    icon: <Calculator className="h-5 w-5 text-stone-800 transition-transform duration-300 group-hover:-rotate-6" />,
    iconBg: 'bg-white border-2 border-stone-300/90 shadow-md shadow-stone-300/40',
    badgeCls: 'bg-gradient-to-r from-stone-800 via-amber-700 to-amber-500 text-white font-black shadow-xs',
    cardGradient: 'from-stone-200/95 via-amber-100/90 via-stone-100 to-amber-200/90',
    borderCls: 'border-amber-400/85 hover:border-amber-600 ring-1 ring-amber-400/30',
    shadowCls: '',
    orb1: 'from-stone-900/55 via-amber-600/45 to-yellow-400/30',
    orb2: 'from-amber-500/50 via-stone-800/40 to-amber-300/25',
    titleHover: 'group-hover:text-stone-950',
    arrowHover: 'text-stone-700 group-hover:text-amber-700',
  },
  {
    href: '/progress',
    title: 'Tiến Độ & Hồ Sơ Năng Lực',
    desc: 'Bản đồ nhiệt 92 chủ đề, tháp năng lực 4 cấp độ & nhiệm vụ hôm nay',
    badge: '📊 Tháp Vàng 360°',
    icon: <BarChart3 className="h-5 w-5 text-amber-700 transition-transform duration-300 group-hover:scale-110" />,
    iconBg: 'bg-white border-2 border-amber-300/90 shadow-md shadow-amber-300/40',
    badgeCls: 'bg-gradient-to-r from-amber-700 via-stone-800 to-stone-950 text-amber-200 font-black shadow-xs',
    cardGradient: 'from-amber-200/95 via-yellow-100/90 via-stone-100 to-amber-200/90',
    borderCls: 'border-amber-400/85 hover:border-amber-600 ring-1 ring-amber-400/30',
    shadowCls: '',
    orb1: 'from-amber-600/55 via-yellow-500/45 to-stone-800/30',
    orb2: 'from-stone-900/50 via-amber-600/40 to-amber-300/25',
    titleHover: 'group-hover:text-amber-950',
    arrowHover: 'text-amber-700 group-hover:text-amber-900',
  },
  {
    href: '/cognitive-traps',
    title: 'Ma Trận Bẫy Nhận Thức',
    desc: 'Chẩn đoán 6 loại bẫy kinh điển: quên đổi đơn vị, nhầm dấu, trực giác',
    badge: '🛡️ Obsidian Shield',
    icon: <Brain className="h-5 w-5 text-stone-900 transition-transform duration-300 group-hover:rotate-6" />,
    iconBg: 'bg-white border-2 border-stone-400/90 shadow-md shadow-stone-400/40',
    badgeCls: 'bg-gradient-to-r from-stone-950 via-amber-900 to-amber-600 text-amber-200 font-black shadow-xs',
    cardGradient: 'from-stone-200/95 via-stone-100/90 via-amber-100 to-amber-300/85',
    borderCls: 'border-amber-400/85 hover:border-amber-600 ring-1 ring-amber-400/30',
    shadowCls: '',
    orb1: 'from-stone-950/60 via-amber-800/45 to-yellow-500/30',
    orb2: 'from-amber-600/50 via-stone-900/40 to-amber-300/25',
    titleHover: 'group-hover:text-stone-950',
    arrowHover: 'text-stone-800 group-hover:text-amber-700',
  },
];

// Lớp 10: đỏ + cam + vàng
const GRADE_10_QUICK_TOOLS = [
  {
    href: '/flashcards',
    title: 'Flashcard Công Thức & SI',
    desc: 'Lật thẻ 3D Active Recall hơn 250 công thức & đại lượng chuẩn SGK',
    badge: '🔥 Nhiệt Học • Ôn nhanh',
    icon: <Layers className="h-5 w-5 text-red-700 transition-transform duration-300 group-hover:rotate-6" />,
    iconBg: 'bg-white border-2 border-red-300/90 shadow-md shadow-red-300/40',
    badgeCls: 'bg-gradient-to-r from-red-600 to-orange-500 text-white font-black shadow-xs',
    cardGradient: 'from-red-200/95 via-orange-100/90 via-yellow-100 to-orange-200/90',
    borderCls: 'border-orange-400/85 hover:border-red-500 ring-1 ring-orange-400/30',
    shadowCls: '',
    orb1: 'from-red-600/55 via-orange-500/40 to-yellow-400/30',
    orb2: 'from-yellow-500/50 via-orange-400/40 to-red-300/25',
    titleHover: 'group-hover:text-red-950',
    arrowHover: 'text-red-600 group-hover:text-red-800',
  },
  {
    href: '/calculator',
    title: 'Đổi Đơn Vị SI & Giải Nhanh',
    desc: 'Quy đổi 12 nhóm đơn vị SI, rút ẩn & thay số công thức 4 bước',
    badge: '⚡ Plasma • Solver',
    icon: <Calculator className="h-5 w-5 text-orange-600 transition-transform duration-300 group-hover:-rotate-6" />,
    iconBg: 'bg-white border-2 border-orange-300/90 shadow-md shadow-orange-300/40',
    badgeCls: 'bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-black shadow-xs',
    cardGradient: 'from-orange-200/95 via-yellow-100/90 via-red-100 to-orange-200/90',
    borderCls: 'border-orange-400/85 hover:border-red-500 ring-1 ring-orange-400/30',
    shadowCls: '',
    orb1: 'from-orange-500/55 via-red-400/45 to-yellow-400/30',
    orb2: 'from-yellow-500/50 via-orange-400/40 to-red-300/25',
    titleHover: 'group-hover:text-orange-950',
    arrowHover: 'text-orange-600 group-hover:text-orange-800',
  },
  {
    href: '/progress',
    title: 'Tiến Độ & Hồ Sơ Năng Lực',
    desc: 'Bản đồ nhiệt 92 chủ đề, tháp năng lực 4 cấp độ & nhiệm vụ hôm nay',
    badge: '☀️ Solar 360°',
    icon: <BarChart3 className="h-5 w-5 text-amber-600 transition-transform duration-300 group-hover:scale-110" />,
    iconBg: 'bg-white border-2 border-yellow-300/90 shadow-md shadow-yellow-300/40',
    badgeCls: 'bg-gradient-to-r from-yellow-600 to-red-600 text-white font-black shadow-xs',
    cardGradient: 'from-yellow-200/95 via-orange-100/90 via-red-100 to-yellow-200/90',
    borderCls: 'border-orange-400/85 hover:border-red-500 ring-1 ring-orange-400/30',
    shadowCls: '',
    orb1: 'from-yellow-500/55 via-orange-400/45 to-red-400/30',
    orb2: 'from-red-500/50 via-yellow-400/40 to-orange-300/25',
    titleHover: 'group-hover:text-yellow-950',
    arrowHover: 'text-amber-600 group-hover:text-amber-800',
  },
  {
    href: '/cognitive-traps',
    title: 'Ma Trận Bẫy Nhận Thức',
    desc: 'Chẩn đoán 6 loại bẫy kinh điển: quên đổi đơn vị, nhầm dấu, trực giác',
    badge: '💥 Vượt Bẫy Cơ Học',
    icon: <Brain className="h-5 w-5 text-red-800 transition-transform duration-300 group-hover:rotate-6" />,
    iconBg: 'bg-white border-2 border-red-400/90 shadow-md shadow-red-400/40',
    badgeCls: 'bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white font-black shadow-xs',
    cardGradient: 'from-red-200/95 via-orange-100/90 via-yellow-100 to-red-300/85',
    borderCls: 'border-orange-400/85 hover:border-red-500 ring-1 ring-orange-400/30',
    shadowCls: '',
    orb1: 'from-red-600/55 via-orange-500/45 to-yellow-400/30',
    orb2: 'from-yellow-500/50 via-red-400/40 to-orange-300/25',
    titleHover: 'group-hover:text-red-950',
    arrowHover: 'text-red-700 group-hover:text-red-900',
  },
];

// Lớp 11: tím + xanh
const GRADE_11_QUICK_TOOLS = [
  {
    href: '/flashcards',
    title: 'Flashcard Công Thức & SI',
    desc: 'Lật thẻ 3D Active Recall hơn 250 công thức & đại lượng chuẩn SGK',
    badge: '🔮 Sóng & Quang • Ôn nhanh',
    icon: <Layers className="h-5 w-5 text-purple-700 transition-transform duration-300 group-hover:rotate-6" />,
    iconBg: 'bg-white border-2 border-purple-300/90 shadow-md shadow-purple-300/40',
    badgeCls: 'bg-gradient-to-r from-purple-700 to-cyan-600 text-white font-black shadow-xs',
    cardGradient: 'from-purple-200/95 via-indigo-100/90 via-cyan-100 to-purple-200/90',
    borderCls: 'border-purple-400/85 hover:border-cyan-500 ring-1 ring-purple-400/30',
    shadowCls: '',
    orb1: 'from-purple-600/55 via-indigo-500/40 to-cyan-400/30',
    orb2: 'from-cyan-500/50 via-purple-400/40 to-indigo-300/25',
    titleHover: 'group-hover:text-purple-950',
    arrowHover: 'text-purple-600 group-hover:text-purple-800',
  },
  {
    href: '/calculator',
    title: 'Đổi Đơn Vị SI & Giải Nhanh',
    desc: 'Quy đổi 12 nhóm đơn vị SI, rút ẩn & thay số công thức 4 bước',
    badge: '⚡ Điện Trường • Solver',
    icon: <Calculator className="h-5 w-5 text-cyan-600 transition-transform duration-300 group-hover:-rotate-6" />,
    iconBg: 'bg-white border-2 border-cyan-300/90 shadow-md shadow-cyan-300/40',
    badgeCls: 'bg-gradient-to-r from-cyan-600 to-purple-700 text-white font-black shadow-xs',
    cardGradient: 'from-cyan-200/95 via-sky-100/90 via-purple-100 to-cyan-200/90',
    borderCls: 'border-purple-400/85 hover:border-cyan-500 ring-1 ring-purple-400/30',
    shadowCls: '',
    orb1: 'from-cyan-500/55 via-blue-400/45 to-purple-400/30',
    orb2: 'from-purple-500/50 via-cyan-400/40 to-sky-300/25',
    titleHover: 'group-hover:text-cyan-950',
    arrowHover: 'text-cyan-600 group-hover:text-cyan-800',
  },
  {
    href: '/progress',
    title: 'Tiến Độ & Hồ Sơ Năng Lực',
    desc: 'Bản đồ nhiệt 92 chủ đề, tháp năng lực 4 cấp độ & nhiệm vụ hôm nay',
    badge: '💠 Quang Phổ 360°',
    icon: <BarChart3 className="h-5 w-5 text-indigo-700 transition-transform duration-300 group-hover:scale-110" />,
    iconBg: 'bg-white border-2 border-indigo-300/90 shadow-md shadow-indigo-300/40',
    badgeCls: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white font-black shadow-xs',
    cardGradient: 'from-indigo-200/95 via-purple-100/90 via-cyan-100 to-indigo-200/90',
    borderCls: 'border-purple-400/85 hover:border-cyan-500 ring-1 ring-purple-400/30',
    shadowCls: '',
    orb1: 'from-indigo-600/55 via-purple-400/45 to-cyan-400/30',
    orb2: 'from-cyan-500/50 via-indigo-400/40 to-purple-300/25',
    titleHover: 'group-hover:text-indigo-950',
    arrowHover: 'text-indigo-600 group-hover:text-indigo-800',
  },
  {
    href: '/cognitive-traps',
    title: 'Ma Trận Bẫy Nhận Thức',
    desc: 'Chẩn đoán 6 loại bẫy kinh điển: quên đổi đơn vị, nhầm dấu, trực giác',
    badge: '🌀 Bẫy Điện Từ 2025',
    icon: <Brain className="h-5 w-5 text-purple-800 transition-transform duration-300 group-hover:rotate-6" />,
    iconBg: 'bg-white border-2 border-purple-400/90 shadow-md shadow-purple-400/40',
    badgeCls: 'bg-gradient-to-r from-purple-700 via-indigo-600 to-cyan-500 text-white font-black shadow-xs',
    cardGradient: 'from-purple-200/95 via-indigo-100/90 via-cyan-100 to-purple-300/85',
    borderCls: 'border-purple-400/85 hover:border-cyan-500 ring-1 ring-purple-400/30',
    shadowCls: '',
    orb1: 'from-purple-600/55 via-indigo-500/45 to-cyan-400/30',
    orb2: 'from-cyan-500/50 via-purple-400/40 to-indigo-300/25',
    titleHover: 'group-hover:text-purple-950',
    arrowHover: 'text-cyan-600 group-hover:text-cyan-800',
  },
];

// Lớp 12: đỏ + cam + đen
const GRADE_12_QUICK_TOOLS = [
  {
    href: '/flashcards',
    title: 'Flashcard Công Thức & SI',
    desc: 'Lật thẻ 3D Active Recall hơn 250 công thức & đại lượng chuẩn SGK',
    badge: '🕳️ Hạt Nhân • Ôn nhanh',
    icon: <Layers className="h-5 w-5 text-red-700 transition-transform duration-300 group-hover:rotate-6" />,
    iconBg: 'bg-white border-2 border-red-300/90 shadow-md shadow-red-300/40',
    badgeCls: 'bg-gradient-to-r from-slate-900 via-red-700 to-orange-600 text-white font-black shadow-xs',
    cardGradient: 'from-slate-200/95 via-red-100/90 via-orange-100 to-slate-200/90',
    borderCls: 'border-red-400/85 hover:border-orange-500 ring-1 ring-red-400/30',
    shadowCls: '',
    orb1: 'from-red-600/55 via-orange-500/40 to-slate-950/30',
    orb2: 'from-slate-900/50 via-red-500/40 to-orange-300/25',
    titleHover: 'group-hover:text-red-950',
    arrowHover: 'text-red-700 group-hover:text-red-900',
  },
  {
    href: '/calculator',
    title: 'Đổi Đơn Vị SI & Giải Nhanh',
    desc: 'Quy đổi 12 nhóm đơn vị SI, rút ẩn & thay số công thức 4 bước',
    badge: '☢️ Hạt Nhân & Lượng Tử',
    icon: <Calculator className="h-5 w-5 text-orange-600 transition-transform duration-300 group-hover:-rotate-6" />,
    iconBg: 'bg-white border-2 border-orange-300/90 shadow-md shadow-orange-300/40',
    badgeCls: 'bg-gradient-to-r from-orange-600 via-red-600 to-slate-900 text-white font-black shadow-xs',
    cardGradient: 'from-orange-200/95 via-slate-100/90 via-red-100 to-orange-200/90',
    borderCls: 'border-red-400/85 hover:border-orange-500 ring-1 ring-red-400/30',
    shadowCls: '',
    orb1: 'from-orange-500/55 via-red-400/45 to-slate-950/30',
    orb2: 'from-slate-900/50 via-orange-400/40 to-red-300/25',
    titleHover: 'group-hover:text-orange-950',
    arrowHover: 'text-orange-600 group-hover:text-orange-800',
  },
  {
    href: '/progress',
    title: 'Tiến Độ & Hồ Sơ Năng Lực',
    desc: 'Bản đồ nhiệt 92 chủ đề, tháp năng lực 4 cấp độ & nhiệm vụ hôm nay',
    badge: '🎯 Tháp Tốt Nghiệp THPT',
    icon: <BarChart3 className="h-5 w-5 text-red-700 transition-transform duration-300 group-hover:scale-110" />,
    iconBg: 'bg-white border-2 border-slate-300/90 shadow-md shadow-slate-300/40',
    badgeCls: 'bg-gradient-to-r from-slate-950 via-red-800 to-orange-600 text-amber-200 font-black shadow-xs',
    cardGradient: 'from-slate-200/95 via-orange-100/90 via-red-100 to-slate-200/90',
    borderCls: 'border-red-400/85 hover:border-orange-500 ring-1 ring-red-400/30',
    shadowCls: '',
    orb1: 'from-slate-950/55 via-red-500/45 to-orange-400/30',
    orb2: 'from-orange-500/50 via-slate-900/40 to-red-300/25',
    titleHover: 'group-hover:text-slate-950',
    arrowHover: 'text-red-700 group-hover:text-orange-700',
  },
  {
    href: '/cognitive-traps',
    title: 'Ma Trận Bẫy Nhận Thức',
    desc: 'Chẩn đoán 6 loại bẫy kinh điển: quên đổi đơn vị, nhầm dấu, trực giác',
    badge: '⚠️ Cạm Bẫy ĐH 2025',
    icon: <Brain className="h-5 w-5 text-red-900 transition-transform duration-300 group-hover:rotate-6" />,
    iconBg: 'bg-white border-2 border-red-400/90 shadow-md shadow-red-400/40',
    badgeCls: 'bg-gradient-to-r from-black via-red-700 to-orange-600 text-white font-black shadow-xs',
    cardGradient: 'from-slate-200/95 via-red-100/90 via-orange-100 to-red-300/85',
    borderCls: 'border-red-400/85 hover:border-orange-500 ring-1 ring-red-400/30',
    shadowCls: '',
    orb1: 'from-black/60 via-red-600/45 to-orange-400/30',
    orb2: 'from-orange-500/50 via-black/40 to-red-300/25',
    titleHover: 'group-hover:text-red-950',
    arrowHover: 'text-red-700 group-hover:text-orange-600',
  },
];

function getGradeQuickTools(grade: number) {
  switch (grade) {
    case 6:
      return GRADE_6_QUICK_TOOLS;
    case 7:
      return GRADE_7_QUICK_TOOLS;
    case 8:
      return GRADE_8_QUICK_TOOLS;
    case 9:
      return GRADE_9_QUICK_TOOLS;
    case 10:
      return GRADE_10_QUICK_TOOLS;
    case 11:
      return GRADE_11_QUICK_TOOLS;
    case 12:
      return GRADE_12_QUICK_TOOLS;
    default:
      return GRADE_6_QUICK_TOOLS;
  }
}

export default function HomeBoardPage({
  searchParams,
}: {
  searchParams?: { grade?: string };
}) {
  const allGrades = getAllGradesWithStats();
  const cookieGradeRaw = cookies().get(GRADE_COOKIE_NAME)?.value;
  const fallbackGrade = isValidGradeNumber(cookieGradeRaw) ? Number(cookieGradeRaw) : 6;
  const requestedGrade = searchParams?.grade ? Number(searchParams.grade) : fallbackGrade;
  const selectedGradeNum =
    requestedGrade >= 6 && requestedGrade <= 12 ? requestedGrade : fallbackGrade;

  const board = getGradeCurriculumBoard(selectedGradeNum) || getGradeCurriculumBoard(6)!;
  const { grade, chapters, stats } = board;

  const thcsGrades = allGrades.filter((g) => g.grade_number >= 6 && g.grade_number <= 9);
  const thptGrades = allGrades.filter((g) => g.grade_number >= 10 && g.grade_number <= 12);

  const quickTools = getGradeQuickTools(selectedGradeNum);

  return (
    <>
      <div className="edu-page-shell relative z-10">
        <GradeContextSync
          grade={selectedGradeNum}
          isExplicit={Boolean(searchParams?.grade)}
        />
      {/* ============================================================ */}
      {/* QUANTUM AURORA HERO & GRADE SELECTOR                         */}
      {/* ============================================================ */}
      <div
        className={`edu-hero-aurora transition-all duration-700 ease-in-out ${
          selectedGradeNum === 6
            ? 'border-cyan-400/40'
            : selectedGradeNum === 7
              ? 'border-emerald-400/40'
              : selectedGradeNum === 8
                ? 'border-purple-400/45'
                : selectedGradeNum === 9
                  ? 'border-amber-500/45'
                  : selectedGradeNum === 10
                    ? 'border-orange-400/45'
                    : selectedGradeNum === 11
                      ? 'border-purple-400/45'
                      : selectedGradeNum === 12
                        ? 'border-red-500/45'
                        : ''
        }`}
      >
        {/* Full-bleed Grade Video / Animated Backdrop with Cinematic Cross-Fade */}
        <GradeHeroBackdrop grade={selectedGradeNum} />

        {/* Subtle Top Aurora Refraction Shimmer */}
        <div
          key={`hero-shimmer-${selectedGradeNum}`}
          className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent z-20 animate-fade-in"
        />

        <div className="relative z-10 space-y-6">
          {/* Top Header with Grade Title & Badges */}
          <div
            key={`grade-header-block-${selectedGradeNum}`}
            className="animate-emerge flex flex-wrap items-start justify-between gap-4"
          >
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider backdrop-blur ${
                    selectedGradeNum === 6
                      ? 'border-cyan-400/45 bg-cyan-500/20 text-cyan-100'
                      : selectedGradeNum === 7
                        ? 'border-emerald-400/45 bg-teal-600/30 text-emerald-100'
                        : selectedGradeNum === 8
                          ? 'border-purple-400/45 bg-purple-950/60 text-orange-200'
                          : selectedGradeNum === 9
                            ? 'border-amber-400/45 bg-slate-900/65 text-amber-200'
                            : selectedGradeNum === 10
                              ? 'border-orange-400/45 bg-red-600/25 text-amber-100'
                              : selectedGradeNum === 11
                                ? 'border-cyan-300/45 bg-purple-900/50 text-cyan-200'
                                : selectedGradeNum === 12
                                  ? 'border-orange-400/45 bg-purple-950/60 text-amber-200'
                                  : 'border-indigo-400/40 bg-indigo-500/25 text-indigo-200'
                  }`}
                >
                  <GraduationCap className="h-3.5 w-3.5 text-amber-300" />
                  {grade.level_group} • CHƯƠNG TRÌNH GDPT 2018
                </span>
                <span className="flex items-center gap-1 rounded-full border border-white/15 bg-slate-950/45 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                  <Layers className="h-3.5 w-3.5 text-cyan-300" />
                  {chapters.length} chương
                </span>
                <span className="flex items-center gap-1 rounded-full border border-white/15 bg-slate-950/45 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                  <BookOpen className="h-3.5 w-3.5 text-emerald-300" />
                  {stats.total_topics} chủ đề
                </span>
              </div>

              <h1 className="text-2xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-4xl">
                {grade.title}
              </h1>
              <p className="max-w-xl text-xs leading-relaxed text-cyan-50/90 drop-shadow-xs sm:text-sm">
                {grade.subtitle}
              </p>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <span className="flex items-center gap-1.5 rounded-2xl border border-white/20 bg-slate-950/45 px-3.5 py-2 text-xs font-extrabold text-white backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-amber-300" />
                <span>Tích hợp 3 bộ SGK: KNTT • CTST • Cánh Diều</span>
              </span>
            </div>
          </div>

          {/* Segmented Glass Grade Switcher */}
          <GradeTabsSwitcher
            thcsGrades={thcsGrades}
            thptGrades={thptGrades}
            selectedGradeNum={selectedGradeNum}
          />

          {/* Glassmorphic KPI Progress Overview Row */}
          {stats && stats.total_topics > 0 && (
            <div
              key={`grade-kpi-block-${selectedGradeNum}`}
              className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-3 animate-emerge"
            >
              {/* Completion rate */}
              <div className="flex items-center gap-3.5 rounded-2xl border border-white/15 bg-slate-950/55 p-4 backdrop-blur-md transition duration-200 hover:border-white/25 hover:bg-slate-950/70">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xs font-extrabold text-white ${
                    selectedGradeNum === 6
                      ? 'bg-gradient-to-br from-sky-500 via-cyan-500 to-teal-500'
                      : selectedGradeNum === 7
                        ? 'bg-gradient-to-br from-emerald-600 via-amber-400 to-blue-600'
                        : selectedGradeNum === 8
                          ? 'bg-gradient-to-br from-purple-900 via-violet-700 to-orange-500'
                          : selectedGradeNum === 9
                            ? 'bg-gradient-to-br from-slate-950 via-amber-700 to-amber-500'
                            : selectedGradeNum === 10
                              ? 'bg-gradient-to-br from-red-600 via-orange-500 to-amber-400'
                              : selectedGradeNum === 11
                                ? 'bg-gradient-to-br from-purple-600 via-violet-500 to-cyan-400'
                                : selectedGradeNum === 12
                                  ? 'bg-gradient-to-br from-black via-red-700 to-orange-500'
                                  : 'bg-gradient-to-br from-indigo-500 to-purple-600'
                  }`}
                >
                  {stats.completion_rate}%
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-bold text-cyan-100/90">Chủ đề đã học</span>
                    <strong className="font-mono text-sm font-extrabold text-white">
                      {stats.completed_topics} / {stats.total_topics}
                    </strong>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/15 p-0.5">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        selectedGradeNum === 6
                          ? 'bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-300'
                          : selectedGradeNum === 7
                            ? 'bg-gradient-to-r from-blue-500 via-sky-300 to-amber-300'
                            : selectedGradeNum === 8
                              ? 'bg-gradient-to-r from-purple-500 via-violet-400 to-orange-400'
                              : selectedGradeNum === 9
                                ? 'bg-gradient-to-r from-amber-500 via-yellow-300 to-sky-400'
                                : selectedGradeNum === 10
                                  ? 'bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300'
                                  : selectedGradeNum === 11
                                    ? 'bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-300'
                                    : selectedGradeNum === 12
                                      ? 'bg-gradient-to-r from-purple-500 via-orange-400 to-amber-300'
                                      : 'bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400'
                      }`}
                      style={{ width: `${stats.completion_rate}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Average Score */}
              <div className="flex items-center gap-3.5 rounded-2xl border border-white/15 bg-slate-950/55 p-4 backdrop-blur-md transition duration-200 hover:border-white/25 hover:bg-slate-950/70">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white border border-emerald-400/30">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-cyan-100/90">Điểm kiểm tra trung bình</div>
                  <div className="mt-0.5 text-sm font-extrabold text-white">
                    {stats.average_score !== null ? (
                      <span className="text-base font-extrabold text-emerald-300">
                        {stats.average_score} / 25 điểm
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-cyan-100/70">
                        Chưa làm bài kiểm tra
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Chapter Exams Completed */}
              <div className="flex items-center gap-3.5 rounded-2xl border border-white/15 bg-slate-950/55 p-4 backdrop-blur-md transition duration-200 hover:border-white/25 hover:bg-slate-950/70">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white border border-amber-400/30">
                  <FileCheck className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-cyan-100/90">Đề tổng hợp chương</div>
                  <div className="mt-0.5 text-sm font-bold text-white">
                    Đã hoàn thành{' '}
                    <strong className="font-mono text-base font-extrabold text-amber-300">
                      {stats.completed_chapters} / {stats.total_chapters}
                    </strong>{' '}
                    chương
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ============================================================ */}
      {/* SMART STUDY TOOLKIT LAUNCHPAD (4 WATERCOLOR CARDS)           */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        {quickTools.map((tool, toolIdx) => (
          <Link
            key={tool.href}
            href={tool.href}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border ${tool.borderCls} animate-watercolor-shift p-4 sm:p-5 backdrop-blur-md transition-all duration-700 ease-out hover:-translate-y-1.5`}
          >
            {/* Smooth Cross-Fade Watercolor Card Background */}
            {[6, 7, 8, 9, 10, 11, 12].map((g) => {
              const gTools = getGradeQuickTools(g);
              const gTool = gTools[toolIdx] || tool;
              const isCurrent = g === selectedGradeNum;
              return (
                <div
                  key={g}
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gTool.cardGradient} transition-opacity duration-700 ease-in-out ${
                    isCurrent ? 'opacity-100 z-0' : 'opacity-0 z-0'
                  }`}
                />
              );
            })}

            {/* Liquid Watercolor Ambient Blobs with Smooth Cross-Fade Drift Effect */}
            {[6, 7, 8, 9, 10, 11, 12].map((g) => {
              const gTools = getGradeQuickTools(g);
              const gTool = gTools[toolIdx] || tool;
              const isCurrent = g === selectedGradeNum;
              return (
                <React.Fragment key={g}>
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-8 -top-8 h-44 w-44 rounded-full bg-gradient-to-br ${gTool.orb1} blur-2xl animate-watercolor-drift-1 transition-opacity duration-700 ease-out ${
                      isCurrent ? 'opacity-85 z-0' : 'opacity-0 z-0'
                    }`}
                  />
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -bottom-10 -left-8 h-40 w-40 rounded-full bg-gradient-to-tr ${gTool.orb2} blur-2xl animate-watercolor-drift-2 transition-opacity duration-700 ease-out ${
                      isCurrent ? 'opacity-75 z-0' : 'opacity-0 z-0'
                    }`}
                  />
                </React.Fragment>
              );
            })}

            {/* Translucent Water Ripple / Glass Sheen Surface */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/35 via-white/5 to-transparent z-1" />
            <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.9),inset_0_-1px_1px_rgba(0,0,0,0.03)] z-1" />

            {/* Shimmer Flare based on Grade Theme */}
            <div
              className={`pointer-events-none absolute -bottom-6 -right-6 h-36 w-36 rounded-full blur-xl transition-all duration-700 ease-out group-hover:scale-150 group-hover:opacity-100 z-1 ${
                selectedGradeNum === 6
                  ? 'bg-cyan-400/30'
                  : selectedGradeNum === 7
                    ? 'bg-gradient-to-tr from-emerald-400/30 via-amber-300/30 to-blue-400/20'
                    : selectedGradeNum === 8
                      ? 'bg-gradient-to-tr from-purple-500/35 via-violet-400/25 to-orange-400/35'
                      : selectedGradeNum === 9
                        ? 'bg-gradient-to-tr from-amber-400/35 via-stone-700/25 to-amber-600/30'
                        : selectedGradeNum === 10
                          ? 'bg-gradient-to-tr from-red-500/35 via-orange-400/30 to-yellow-400/35'
                          : selectedGradeNum === 11
                            ? 'bg-gradient-to-tr from-purple-500/35 via-indigo-400/25 to-cyan-400/35'
                            : 'bg-gradient-to-tr from-red-600/35 via-orange-500/30 to-slate-900/40'
              }`}
            />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:scale-110 group-hover:shadow-md ${tool.iconBg}`}
                  >
                    {tool.icon}
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-extrabold shadow-xs backdrop-blur-sm transition-all duration-700 ease-in-out ${tool.badgeCls}`}
                  >
                    {tool.badge}
                  </span>
                </div>
                <h3 className={`mt-3.5 flex items-center justify-between text-sm font-extrabold text-slate-900 transition-colors duration-500 ${tool.titleHover}`}>
                  <span>{tool.title}</span>
                  <ArrowUpRight className={`h-4 w-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${tool.arrowHover}`} />
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600/95 font-medium">{tool.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ============================================================ */}
      {/* CHAPTERS SYLLABUS LIST                                       */}
      {/* ============================================================ */}
      <div key={`chapters-list-${selectedGradeNum}`} className="space-y-6 animate-fade-in">
        {chapters.map((ch, chIdx) => {
          const theme = getGradeChapterTheme(selectedGradeNum);
          const chCompleted = ch.completed_topics_count || 0;
          const chTotal = ch.total_topics_count || (ch.topics?.length || 0);
          const chPercent = chTotal > 0 ? Math.round((chCompleted / chTotal) * 100) : 0;

          return (
            <section
              key={`chapter-slot-${chIdx}`}
              className={`group rounded-3xl border border-slate-200/85 bg-white shadow-card transition-all duration-700 ease-snap hover:shadow-lift ${theme.ring}`}
            >
              {/* Chapter Header — colored band with smooth cross-fade transition */}
              <ChapterHeaderBand grade={selectedGradeNum}>
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-lg bg-white/20 px-2.5 py-0.5 font-mono font-extrabold uppercase tracking-wide text-white ring-1 ring-white/30 backdrop-blur">
                      {ch.code}
                    </span>
                    <span className="rounded-lg bg-black/15 px-2.5 py-0.5 font-bold text-white/95">
                      Đã học {chCompleted}/{chTotal} chủ đề ({chPercent}%)
                    </span>
                    {ch.average_quiz_score !== null && ch.average_quiz_score !== undefined && (
                      <span className="flex items-center gap-1 rounded-lg bg-white/20 px-2 py-0.5 font-extrabold text-white ring-1 ring-white/25">
                        <TrendingUp className="h-3 w-3" />
                        TB: {ch.average_quiz_score}/25
                      </span>
                    )}
                  </div>
                  <h2 className="text-lg font-extrabold tracking-tight text-white drop-shadow-xs sm:text-xl">
                    {ch.title}
                  </h2>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-2">
                  <Link
                    href={`/chapter/${ch.id}?tab=exam`}
                    className={`inline-flex items-center gap-1.5 rounded-2xl bg-white px-4 py-2.5 text-xs font-extrabold text-slate-900 shadow-lift transition duration-200 ease-snap hover:-translate-y-0.5 ${theme.btnHover || 'hover:bg-indigo-50'}`}
                  >
                    <FileCheck className={`h-4 w-4 ${theme.iconColor || 'text-brand-600'}`} />
                    <span>Kiểm tra tổng hợp ({ch.chapter_question_count || 25} câu)</span>
                    {ch.best_exam_score !== null && ch.best_exam_score !== undefined && (
                      <span className="ml-1 rounded-md bg-emerald-600 px-1.5 py-0.5 text-[10px] font-extrabold text-white">
                        {ch.best_exam_score}/25
                      </span>
                    )}
                  </Link>

                  <ChapterActionsMenu
                    chapterId={ch.id}
                    gradeNumber={selectedGradeNum}
                    chapterTitle={ch.title}
                  />
                </div>
              </ChapterHeaderBand>

              {/* Mini Chapter Progress Bar */}
              {chTotal > 0 && (
                <div className="h-1.5 w-full bg-slate-100">
                  <div
                    className={`h-full transition-[width] duration-700 ease-out ${theme.fill}`}
                    style={{ width: `${chPercent}%` }}
                  />
                </div>
              )}

              {/* Clean List of Topics */}
              {ch.topics && ch.topics.length > 0 ? (
                <div className="divide-y divide-slate-100 overflow-hidden rounded-b-3xl">
                  {ch.topics.map((tp) => {
                    const isCompleted = Boolean(tp.is_completed);
                    return (
                      <Link
                        key={tp.id}
                        href={`/topic/${tp.id}`}
                        className={`group/row flex items-center justify-between gap-4 px-5 py-4 transition-all duration-200 ${theme.hover} sm:px-7`}
                      >
                        <div className="flex min-w-0 items-start gap-4">
                          <div
                            className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-xs font-extrabold transition-all duration-200 group-hover/row:scale-105 ${
                              isCompleted
                                ? 'border border-emerald-300 bg-emerald-50 text-emerald-700 shadow-2xs'
                                : `${theme.num} ${theme.numHover}`
                            }`}
                          >
                            {tp.code.split('-')[1] || tp.order_index}
                          </div>
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3
                                className={`truncate text-sm font-extrabold text-slate-900 transition-colors sm:text-base ${theme.hoverText}`}
                              >
                                {tp.title}
                              </h3>
                              {tp.textbook_tags && tp.textbook_tags.length > 0 && (
                                <div className="hidden items-center gap-1 md:flex">
                                  {tp.textbook_tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[10px] font-bold text-slate-500"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                            <p className="mt-1 line-clamp-1 text-xs text-slate-500">
                              {tp.overview}
                            </p>
                            <div className="mt-1.5 flex flex-wrap items-center gap-3 text-[11px] font-semibold text-slate-400">
                              <span className="inline-flex items-center gap-1">
                                <Calculator className="h-3 w-3 text-indigo-400" />
                                {tp.formula_count} công thức
                              </span>
                              <span>•</span>
                              <span className="inline-flex items-center gap-1">
                                <FlaskConical className="h-3 w-3 text-teal-500" />
                                Mô phỏng 2D
                              </span>
                              <span>•</span>
                              <span>{tp.question_count || 25} câu trắc nghiệm</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-3">
                          <TopicStudyToggleButton
                            topicId={tp.id}
                            initialCompleted={isCompleted}
                            variant="row"
                          />
                          <ChevronRight
                            className={`h-4 w-4 text-slate-300 transition-transform duration-200 group-hover/row:translate-x-1 ${theme.hoverText}`}
                          />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="p-6 text-center text-xs italic text-slate-400">
                  Chưa có chủ đề nào trong chương này.
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
    </>
  );
}

export interface ChapterTheme {
  header: string;
  glow: string;
  fill: string;
  num: string;
  numHover: string;
  hover: string;
  hoverText: string;
  ring: string;
  btnHover: string;
  iconColor: string;
}

export const UNIFIED_GRADE_CHAPTER_THEMES: Record<number, ChapterTheme> = {
  6: {
    // Lớp 6: Nước biển (xanh dương / sky / cyan)
    header: 'bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500',
    glow: 'bg-sky-400/35',
    fill: 'bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400',
    num: 'bg-blue-50 text-blue-700 border border-blue-200/90',
    numHover: 'group-hover/row:bg-blue-600 group-hover/row:text-white group-hover/row:border-blue-600',
    hover: 'hover:bg-blue-50/50',
    hoverText: 'group-hover/row:text-blue-700',
    ring: 'hover:border-blue-400/90 shadow-[0_8px_24px_-6px_rgba(37,99,235,0.16)]',
    btnHover: 'hover:bg-blue-50 hover:text-blue-700',
    iconColor: 'text-blue-600',
  },
  7: {
    // Lớp 7: Xanh lá + Vàng + Xanh dương
    header: 'bg-gradient-to-r from-emerald-600 via-amber-400 to-blue-600',
    glow: 'bg-amber-300/40',
    fill: 'bg-gradient-to-r from-emerald-500 via-amber-400 to-blue-500',
    num: 'bg-emerald-50 text-emerald-800 border border-emerald-200/90',
    numHover: 'group-hover/row:bg-emerald-600 group-hover/row:text-white group-hover/row:border-emerald-600',
    hover: 'hover:bg-amber-50/50',
    hoverText: 'group-hover/row:text-emerald-800',
    ring: 'hover:border-amber-400/90 shadow-[0_8px_24px_-6px_rgba(245,158,11,0.20)]',
    btnHover: 'hover:bg-amber-50 hover:text-amber-800',
    iconColor: 'text-emerald-600',
  },
  8: {
    // Lớp 8: Galaxy + Cam
    header: 'bg-gradient-to-r from-indigo-950 via-purple-900 via-violet-800 to-orange-500',
    glow: 'bg-orange-400/40',
    fill: 'bg-gradient-to-r from-purple-600 via-violet-500 to-orange-500',
    num: 'bg-purple-50 text-purple-800 border border-purple-200/90',
    numHover: 'group-hover/row:bg-purple-800 group-hover/row:text-white group-hover/row:border-purple-800',
    hover: 'hover:bg-orange-50/50',
    hoverText: 'group-hover/row:text-orange-700',
    ring: 'hover:border-orange-400/90 shadow-[0_8px_24px_-6px_rgba(249,115,22,0.22)]',
    btnHover: 'hover:bg-orange-50 hover:text-orange-800',
    iconColor: 'text-orange-600',
  },
  9: {
    // Lớp 9: Vàng + Nâu + Đen
    header: 'bg-gradient-to-r from-slate-950 via-amber-950 via-amber-800 to-amber-500',
    glow: 'bg-amber-400/40',
    fill: 'bg-gradient-to-r from-amber-900 via-amber-700 to-amber-400',
    num: 'bg-amber-50 text-amber-900 border border-amber-200/90',
    numHover: 'group-hover/row:bg-amber-700 group-hover/row:text-white group-hover/row:border-amber-700',
    hover: 'hover:bg-amber-50/50',
    hoverText: 'group-hover/row:text-amber-800',
    ring: 'hover:border-amber-400/90 shadow-[0_8px_24px_-6px_rgba(217,119,6,0.22)]',
    btnHover: 'hover:bg-amber-50 hover:text-amber-900',
    iconColor: 'text-amber-700',
  },
  10: {
    // Lớp 10: Đỏ + Cam + Vàng
    header: 'bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500',
    glow: 'bg-orange-400/40',
    fill: 'bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400',
    num: 'bg-red-50 text-red-700 border border-red-200/90',
    numHover: 'group-hover/row:bg-red-600 group-hover/row:text-white group-hover/row:border-red-600',
    hover: 'hover:bg-orange-50/50',
    hoverText: 'group-hover/row:text-orange-700',
    ring: 'hover:border-orange-400/90 shadow-[0_8px_24px_-6px_rgba(234,88,12,0.22)]',
    btnHover: 'hover:bg-orange-50 hover:text-orange-800',
    iconColor: 'text-orange-600',
  },
  11: {
    // Lớp 11: Tím + Xanh
    header: 'bg-gradient-to-r from-purple-700 via-indigo-600 to-cyan-500',
    glow: 'bg-cyan-400/40',
    fill: 'bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400',
    num: 'bg-purple-50 text-purple-700 border border-purple-200/90',
    numHover: 'group-hover/row:bg-purple-600 group-hover/row:text-white group-hover/row:border-purple-600',
    hover: 'hover:bg-cyan-50/50',
    hoverText: 'group-hover/row:text-cyan-700',
    ring: 'hover:border-cyan-400/90 shadow-[0_8px_24px_-6px_rgba(6,182,212,0.22)]',
    btnHover: 'hover:bg-cyan-50 hover:text-cyan-800',
    iconColor: 'text-cyan-600',
  },
  12: {
    // Lớp 12: Đỏ + Cam + Đen
    header: 'bg-gradient-to-r from-black via-red-950 via-red-700 to-orange-600',
    glow: 'bg-orange-500/40',
    fill: 'bg-gradient-to-r from-slate-900 via-red-600 to-orange-500',
    num: 'bg-red-50 text-red-900 border border-red-200/90',
    numHover: 'group-hover/row:bg-red-700 group-hover/row:text-white group-hover/row:border-red-700',
    hover: 'hover:bg-red-50/50',
    hoverText: 'group-hover/row:text-red-700',
    ring: 'hover:border-orange-500/90 shadow-[0_8px_24px_-6px_rgba(234,88,12,0.25)]',
    btnHover: 'hover:bg-red-50 hover:text-red-900',
    iconColor: 'text-red-600',
  },
};

export function getGradeChapterTheme(grade: number): ChapterTheme {
  return UNIFIED_GRADE_CHAPTER_THEMES[grade] || UNIFIED_GRADE_CHAPTER_THEMES[6];
}

export interface PageTheme {
  heroBg: string;
  heroBorder: string;
  heroOrb1: string;
  heroOrb2: string;
  heroEyebrow: string;
  heroSubtitle: string;
  heroTabActive: string;
  heroTabIdle: string;
  cardSelected: string;
  cardHover: string;
  badgeSoft: string;
  badgeSolid: string;
  inputFocus: string;
  highlightBox: string;
  highlightBoxSubtle: string;
  highlightTitle: string;
  highlightIcon: string;
  accentText: string;
  outlineBtn: string;
  solidBtn: string;
  progressFill: string;
}

export const UNIFIED_GRADE_PAGE_THEMES: Record<number, PageTheme> = {
  6: {
    // Lớp 6: Nước biển (Xanh dương / Sky / Cyan)
    heroBg: 'bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950',
    heroBorder: 'border-sky-400/40',
    heroOrb1: 'bg-sky-400/25',
    heroOrb2: 'bg-blue-500/20',
    heroEyebrow: 'border-sky-400/35 bg-sky-500/15 text-sky-200',
    heroSubtitle: 'text-sky-100/85',
    heroTabActive: 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-soft',
    heroTabIdle: 'border border-white/15 bg-white/10 text-sky-100 hover:bg-white/20',
    cardSelected: 'border-blue-400 bg-blue-50/90 text-blue-950 shadow-2xs',
    cardHover: 'border-slate-200/70 bg-white text-slate-700 hover:border-blue-200 hover:bg-slate-50',
    badgeSoft: 'bg-blue-100 text-blue-800',
    badgeSolid: 'bg-blue-600 text-white',
    inputFocus: 'focus:border-blue-500',
    highlightBox: 'border-2 border-blue-300 bg-gradient-to-br from-blue-50 via-white to-cyan-50/60',
    highlightBoxSubtle: 'border-blue-200/80 bg-blue-50/50',
    highlightTitle: 'text-blue-800',
    highlightIcon: 'text-blue-600',
    accentText: 'text-blue-700',
    outlineBtn: 'border-blue-200 bg-white text-blue-700 hover:bg-blue-50',
    solidBtn: 'bg-blue-600 text-white hover:bg-blue-700 shadow-soft',
    progressFill: 'bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400',
  },
  7: {
    // Lớp 7: Xanh lá + Vàng + Xanh dương
    heroBg: 'bg-gradient-to-br from-slate-950 via-emerald-950 to-blue-950',
    heroBorder: 'border-emerald-400/40',
    heroOrb1: 'bg-emerald-400/25',
    heroOrb2: 'bg-amber-400/20',
    heroEyebrow: 'border-emerald-400/35 bg-emerald-500/15 text-emerald-200',
    heroSubtitle: 'text-emerald-100/85',
    heroTabActive: 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-soft',
    heroTabIdle: 'border border-white/15 bg-white/10 text-emerald-100 hover:bg-white/20',
    cardSelected: 'border-emerald-400 bg-emerald-50/90 text-emerald-950 shadow-2xs',
    cardHover: 'border-slate-200/70 bg-white text-slate-700 hover:border-emerald-200 hover:bg-slate-50',
    badgeSoft: 'bg-emerald-100 text-emerald-800',
    badgeSolid: 'bg-emerald-600 text-white',
    inputFocus: 'focus:border-emerald-500',
    highlightBox: 'border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 via-white to-amber-50/50',
    highlightBoxSubtle: 'border-emerald-200/80 bg-emerald-50/50',
    highlightTitle: 'text-emerald-800',
    highlightIcon: 'text-emerald-600',
    accentText: 'text-emerald-700',
    outlineBtn: 'border-emerald-200 bg-white text-emerald-700 hover:bg-emerald-50',
    solidBtn: 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-soft',
    progressFill: 'bg-gradient-to-r from-emerald-500 via-amber-400 to-blue-500',
  },
  8: {
    // Lớp 8: Galaxy + Cam
    heroBg: 'bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950',
    heroBorder: 'border-purple-400/45',
    heroOrb1: 'bg-purple-500/25',
    heroOrb2: 'bg-orange-400/20',
    heroEyebrow: 'border-purple-400/35 bg-purple-500/15 text-purple-200',
    heroSubtitle: 'text-purple-100/85',
    heroTabActive: 'bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow-soft',
    heroTabIdle: 'border border-white/15 bg-white/10 text-purple-100 hover:bg-white/20',
    cardSelected: 'border-purple-400 bg-purple-50/90 text-purple-950 shadow-2xs',
    cardHover: 'border-slate-200/70 bg-white text-slate-700 hover:border-purple-200 hover:bg-slate-50',
    badgeSoft: 'bg-purple-100 text-purple-800',
    badgeSolid: 'bg-purple-700 text-white',
    inputFocus: 'focus:border-purple-500',
    highlightBox: 'border-2 border-purple-300 bg-gradient-to-br from-purple-50 via-white to-orange-50/60',
    highlightBoxSubtle: 'border-purple-200/80 bg-purple-50/50',
    highlightTitle: 'text-purple-900',
    highlightIcon: 'text-purple-600',
    accentText: 'text-purple-700',
    outlineBtn: 'border-purple-200 bg-white text-purple-800 hover:bg-purple-50',
    solidBtn: 'bg-purple-700 text-white hover:bg-purple-800 shadow-soft',
    progressFill: 'bg-gradient-to-r from-purple-600 via-violet-500 to-orange-500',
  },
  9: {
    // Lớp 9: Vàng + Nâu + Đen
    heroBg: 'bg-gradient-to-br from-slate-950 via-stone-900 to-amber-950',
    heroBorder: 'border-amber-400/45',
    heroOrb1: 'bg-amber-500/25',
    heroOrb2: 'bg-yellow-500/15',
    heroEyebrow: 'border-amber-400/40 bg-amber-500/15 text-amber-200',
    heroSubtitle: 'text-amber-100/85',
    heroTabActive: 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-soft',
    heroTabIdle: 'border border-white/15 bg-white/10 text-amber-100 hover:bg-white/20',
    cardSelected: 'border-amber-500 bg-amber-50/90 text-amber-950 shadow-2xs',
    cardHover: 'border-slate-200/70 bg-white text-slate-700 hover:border-amber-300 hover:bg-slate-50',
    badgeSoft: 'bg-amber-100 text-amber-900',
    badgeSolid: 'bg-amber-700 text-white',
    inputFocus: 'focus:border-amber-600',
    highlightBox: 'border-2 border-amber-300 bg-gradient-to-br from-amber-50 via-white to-stone-100/70',
    highlightBoxSubtle: 'border-amber-200/80 bg-amber-50/50',
    highlightTitle: 'text-amber-900',
    highlightIcon: 'text-amber-700',
    accentText: 'text-amber-800',
    outlineBtn: 'border-amber-300 bg-white text-amber-900 hover:bg-amber-50',
    solidBtn: 'bg-amber-700 text-white hover:bg-amber-800 shadow-soft',
    progressFill: 'bg-gradient-to-r from-stone-800 via-amber-700 to-amber-500',
  },
  10: {
    // Lớp 10: Đỏ + Cam + Vàng
    heroBg: 'bg-gradient-to-br from-slate-950 via-red-950 to-orange-950',
    heroBorder: 'border-orange-400/45',
    heroOrb1: 'bg-orange-500/25',
    heroOrb2: 'bg-red-500/20',
    heroEyebrow: 'border-orange-400/40 bg-orange-500/15 text-orange-200',
    heroSubtitle: 'text-orange-100/85',
    heroTabActive: 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-soft',
    heroTabIdle: 'border border-white/15 bg-white/10 text-orange-100 hover:bg-white/20',
    cardSelected: 'border-orange-400 bg-orange-50/90 text-orange-950 shadow-2xs',
    cardHover: 'border-slate-200/70 bg-white text-slate-700 hover:border-orange-200 hover:bg-slate-50',
    badgeSoft: 'bg-orange-100 text-orange-900',
    badgeSolid: 'bg-orange-600 text-white',
    inputFocus: 'focus:border-orange-500',
    highlightBox: 'border-2 border-orange-300 bg-gradient-to-br from-orange-50 via-white to-amber-50/60',
    highlightBoxSubtle: 'border-orange-200/80 bg-orange-50/50',
    highlightTitle: 'text-orange-900',
    highlightIcon: 'text-orange-600',
    accentText: 'text-orange-700',
    outlineBtn: 'border-orange-200 bg-white text-orange-800 hover:bg-orange-50',
    solidBtn: 'bg-orange-600 text-white hover:bg-orange-700 shadow-soft',
    progressFill: 'bg-gradient-to-r from-red-600 via-orange-500 to-amber-400',
  },
  11: {
    // Lớp 11: Tím + Xanh
    heroBg: 'bg-gradient-to-br from-slate-950 via-purple-950 to-cyan-950',
    heroBorder: 'border-cyan-400/45',
    heroOrb1: 'bg-cyan-400/25',
    heroOrb2: 'bg-purple-500/20',
    heroEyebrow: 'border-cyan-400/35 bg-cyan-500/15 text-cyan-200',
    heroSubtitle: 'text-cyan-100/85',
    heroTabActive: 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-soft',
    heroTabIdle: 'border border-white/15 bg-white/10 text-cyan-100 hover:bg-white/20',
    cardSelected: 'border-indigo-400 bg-indigo-50/90 text-indigo-950 shadow-2xs',
    cardHover: 'border-slate-200/70 bg-white text-slate-700 hover:border-indigo-200 hover:bg-slate-50',
    badgeSoft: 'bg-indigo-100 text-indigo-800',
    badgeSolid: 'bg-indigo-600 text-white',
    inputFocus: 'focus:border-indigo-500',
    highlightBox: 'border-2 border-indigo-300 bg-gradient-to-br from-indigo-50 via-white to-cyan-50/60',
    highlightBoxSubtle: 'border-indigo-200/80 bg-indigo-50/50',
    highlightTitle: 'text-indigo-900',
    highlightIcon: 'text-indigo-600',
    accentText: 'text-indigo-700',
    outlineBtn: 'border-indigo-200 bg-white text-indigo-800 hover:bg-indigo-50',
    solidBtn: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-soft',
    progressFill: 'bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400',
  },
  12: {
    // Lớp 12: Đen + Đỏ + Cam
    heroBg: 'bg-gradient-to-br from-black via-red-950 to-stone-950',
    heroBorder: 'border-red-400/45',
    heroOrb1: 'bg-red-500/25',
    heroOrb2: 'bg-orange-500/20',
    heroEyebrow: 'border-red-400/40 bg-red-500/15 text-red-200',
    heroSubtitle: 'text-red-100/85',
    heroTabActive: 'bg-gradient-to-r from-red-700 to-orange-600 text-white shadow-soft',
    heroTabIdle: 'border border-white/15 bg-white/10 text-red-100 hover:bg-white/20',
    cardSelected: 'border-red-400 bg-red-50/90 text-red-950 shadow-2xs',
    cardHover: 'border-slate-200/70 bg-white text-slate-700 hover:border-red-200 hover:bg-slate-50',
    badgeSoft: 'bg-red-100 text-red-900',
    badgeSolid: 'bg-red-700 text-white',
    inputFocus: 'focus:border-red-600',
    highlightBox: 'border-2 border-red-300 bg-gradient-to-br from-red-50 via-white to-orange-50/60',
    highlightBoxSubtle: 'border-red-200/80 bg-red-50/50',
    highlightTitle: 'text-red-900',
    highlightIcon: 'text-red-600',
    accentText: 'text-red-700',
    outlineBtn: 'border-red-200 bg-white text-red-800 hover:bg-red-50',
    solidBtn: 'bg-red-700 text-white hover:bg-red-800 shadow-soft',
    progressFill: 'bg-gradient-to-r from-slate-900 via-red-600 to-orange-500',
  },
};

export function getGradePageTheme(grade: number): PageTheme {
  return UNIFIED_GRADE_PAGE_THEMES[grade] || UNIFIED_GRADE_PAGE_THEMES[6];
}

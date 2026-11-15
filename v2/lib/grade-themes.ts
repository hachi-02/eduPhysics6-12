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
    // Lớp 6: Thiên hà Lam–Lục (Sky / Cyan Cosmic)
    header: 'bg-gradient-to-r from-[#07142b] via-sky-900/90 to-cyan-900/90',
    glow: 'bg-sky-400/25',
    fill: 'bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400',
    num: 'bg-sky-500/15 text-sky-300 border border-sky-400/30',
    numHover: 'group-hover/row:bg-sky-500 group-hover/row:text-slate-950 group-hover/row:border-sky-400',
    hover: 'hover:bg-sky-500/[0.08]',
    hoverText: 'group-hover/row:text-sky-300',
    ring: 'hover:border-sky-400/50 shadow-[0_8px_24px_-6px_rgba(56,189,248,0.20)]',
    btnHover: 'hover:bg-sky-500/15 hover:text-sky-200',
    iconColor: 'text-sky-400',
  },
  7: {
    // Lớp 7: Tinh vân Lục Bảo & Vàng (Emerald / Amber Cosmic)
    header: 'bg-gradient-to-r from-[#061c17] via-emerald-950 to-sky-950',
    glow: 'bg-emerald-400/25',
    fill: 'bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400',
    num: 'bg-emerald-500/15 text-emerald-300 border border-emerald-400/30',
    numHover: 'group-hover/row:bg-emerald-500 group-hover/row:text-slate-950 group-hover/row:border-emerald-400',
    hover: 'hover:bg-emerald-500/[0.08]',
    hoverText: 'group-hover/row:text-emerald-300',
    ring: 'hover:border-emerald-400/50 shadow-[0_8px_24px_-6px_rgba(16,185,129,0.22)]',
    btnHover: 'hover:bg-emerald-500/15 hover:text-emerald-200',
    iconColor: 'text-emerald-400',
  },
  8: {
    // Lớp 8: Galaxy Tím & Cam
    header: 'bg-gradient-to-r from-[#0e0924] via-purple-950 to-orange-950/90',
    glow: 'bg-purple-400/25',
    fill: 'bg-gradient-to-r from-purple-500 via-violet-400 to-orange-400',
    num: 'bg-purple-500/15 text-purple-300 border border-purple-400/30',
    numHover: 'group-hover/row:bg-purple-500 group-hover/row:text-white group-hover/row:border-purple-400',
    hover: 'hover:bg-purple-500/[0.08]',
    hoverText: 'group-hover/row:text-purple-300',
    ring: 'hover:border-purple-400/50 shadow-[0_8px_24px_-6px_rgba(168,85,247,0.24)]',
    btnHover: 'hover:bg-purple-500/15 hover:text-purple-200',
    iconColor: 'text-purple-400',
  },
  9: {
    // Lớp 9: Hổ Phách & Nâu Vũ trụ (Amber / Gold Cosmic)
    header: 'bg-gradient-to-r from-[#0b0907] via-amber-950/95 to-yellow-950/80',
    glow: 'bg-amber-400/25',
    fill: 'bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-300',
    num: 'bg-amber-500/15 text-amber-300 border border-amber-400/30',
    numHover: 'group-hover/row:bg-amber-400 group-hover/row:text-slate-950 group-hover/row:border-amber-300',
    hover: 'hover:bg-amber-500/[0.08]',
    hoverText: 'group-hover/row:text-amber-300',
    ring: 'hover:border-amber-400/50 shadow-[0_8px_24px_-6px_rgba(245,158,11,0.24)]',
    btnHover: 'hover:bg-amber-500/15 hover:text-amber-200',
    iconColor: 'text-amber-400',
  },
  10: {
    // Lớp 10: Nhật Thực Cam & Đỏ (Orange / Red Cosmic)
    header: 'bg-gradient-to-r from-[#1a0a07] via-red-950/90 to-orange-950/90',
    glow: 'bg-orange-400/25',
    fill: 'bg-gradient-to-r from-red-500 via-orange-400 to-amber-400',
    num: 'bg-orange-500/15 text-orange-300 border border-orange-400/30',
    numHover: 'group-hover/row:bg-orange-500 group-hover/row:text-slate-950 group-hover/row:border-orange-400',
    hover: 'hover:bg-orange-500/[0.08]',
    hoverText: 'group-hover/row:text-orange-300',
    ring: 'hover:border-orange-400/50 shadow-[0_8px_24px_-6px_rgba(249,115,22,0.24)]',
    btnHover: 'hover:bg-orange-500/15 hover:text-orange-200',
    iconColor: 'text-orange-400',
  },
  11: {
    // Lớp 11: Lượng Tử Chàm & Lục Lam (Indigo / Cyan Cosmic)
    header: 'bg-gradient-to-r from-[#090822] via-indigo-950 to-cyan-950/90',
    glow: 'bg-cyan-400/25',
    fill: 'bg-gradient-to-r from-indigo-500 via-sky-400 to-cyan-300',
    num: 'bg-cyan-500/15 text-cyan-300 border border-cyan-400/30',
    numHover: 'group-hover/row:bg-cyan-500 group-hover/row:text-slate-950 group-hover/row:border-cyan-400',
    hover: 'hover:bg-cyan-500/[0.08]',
    hoverText: 'group-hover/row:text-cyan-300',
    ring: 'hover:border-cyan-400/50 shadow-[0_8px_24px_-6px_rgba(34,211,238,0.24)]',
    btnHover: 'hover:bg-cyan-500/15 hover:text-cyan-200',
    iconColor: 'text-cyan-400',
  },
  12: {
    // Lớp 12: Siêu Tân Tinh Đỏ & Hổ Phách (Rose / Amber Cosmic)
    header: 'bg-gradient-to-r from-[#120408] via-rose-950/90 to-amber-950/80',
    glow: 'bg-rose-500/25',
    fill: 'bg-gradient-to-r from-rose-500 via-orange-500 to-amber-400',
    num: 'bg-rose-500/15 text-rose-300 border border-rose-400/30',
    numHover: 'group-hover/row:bg-rose-500 group-hover/row:text-white group-hover/row:border-rose-400',
    hover: 'hover:bg-rose-500/[0.08]',
    hoverText: 'group-hover/row:text-rose-300',
    ring: 'hover:border-rose-400/50 shadow-[0_8px_24px_-6px_rgba(244,63,94,0.25)]',
    btnHover: 'hover:bg-rose-500/15 hover:text-rose-200',
    iconColor: 'text-rose-400',
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
    // Lớp 6: Thiên hà Lam–Lục (Sky / Cyan Cosmic)
    heroBg: 'bg-gradient-to-br from-[#050919] via-[#0a1938] to-[#062436]',
    heroBorder: 'border-sky-400/35',
    heroOrb1: 'bg-sky-400/25',
    heroOrb2: 'bg-blue-500/20',
    heroEyebrow: 'border-sky-400/35 bg-sky-500/15 text-sky-200',
    heroSubtitle: 'text-sky-100/85',
    heroTabActive: 'bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(56,189,248,0.35)]',
    heroTabIdle: 'border border-white/15 bg-white/[0.06] text-sky-100 hover:bg-white/[0.14]',
    cardSelected: 'border-sky-400/55 bg-sky-500/15 text-sky-100 shadow-2xs',
    cardHover: 'border-white/10 bg-[#090f24]/85 text-slate-200 hover:border-sky-400/40 hover:bg-white/[0.06]',
    badgeSoft: 'border border-sky-400/30 bg-sky-500/15 text-sky-300',
    badgeSolid: 'bg-gradient-to-r from-sky-500 to-cyan-500 text-slate-950',
    inputFocus: 'focus:border-sky-400',
    highlightBox: 'border border-sky-400/35 bg-gradient-to-br from-sky-500/12 via-[#090f24] to-cyan-500/10 text-slate-100',
    highlightBoxSubtle: 'border-sky-400/25 bg-sky-500/[0.08] text-slate-200',
    highlightTitle: 'text-sky-300',
    highlightIcon: 'text-sky-400',
    accentText: 'text-sky-300',
    outlineBtn: 'border-sky-400/35 bg-sky-500/10 text-sky-200 hover:bg-sky-500/20',
    solidBtn: 'bg-gradient-to-r from-sky-500 to-cyan-500 text-slate-950 hover:brightness-110 shadow-[0_0_20px_rgba(56,189,248,0.28)]',
    progressFill: 'bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400',
  },
  7: {
    // Lớp 7: Tinh vân Lục Bảo & Vàng
    heroBg: 'bg-gradient-to-br from-[#050919] via-[#062820] to-[#081b36]',
    heroBorder: 'border-emerald-400/35',
    heroOrb1: 'bg-emerald-400/25',
    heroOrb2: 'bg-amber-400/20',
    heroEyebrow: 'border-emerald-400/35 bg-emerald-500/15 text-emerald-200',
    heroSubtitle: 'text-emerald-100/85',
    heroTabActive: 'bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.35)]',
    heroTabIdle: 'border border-white/15 bg-white/[0.06] text-emerald-100 hover:bg-white/[0.14]',
    cardSelected: 'border-emerald-400/55 bg-emerald-500/15 text-emerald-100 shadow-2xs',
    cardHover: 'border-white/10 bg-[#090f24]/85 text-slate-200 hover:border-emerald-400/40 hover:bg-white/[0.06]',
    badgeSoft: 'border border-emerald-400/30 bg-emerald-500/15 text-emerald-300',
    badgeSolid: 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950',
    inputFocus: 'focus:border-emerald-400',
    highlightBox: 'border border-emerald-400/35 bg-gradient-to-br from-emerald-500/12 via-[#090f24] to-amber-500/10 text-slate-100',
    highlightBoxSubtle: 'border-emerald-400/25 bg-emerald-500/[0.08] text-slate-200',
    highlightTitle: 'text-emerald-300',
    highlightIcon: 'text-emerald-400',
    accentText: 'text-emerald-300',
    outlineBtn: 'border-emerald-400/35 bg-emerald-500/10 text-emerald-200 hover:bg-emerald-500/20',
    solidBtn: 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 hover:brightness-110 shadow-[0_0_20px_rgba(16,185,129,0.28)]',
    progressFill: 'bg-gradient-to-r from-emerald-500 via-amber-400 to-sky-400',
  },
  8: {
    // Lớp 8: Galaxy Tím & Cam
    heroBg: 'bg-gradient-to-br from-[#07071b] via-[#1c0f38] to-[#0b0d20]',
    heroBorder: 'border-purple-400/40',
    heroOrb1: 'bg-purple-500/25',
    heroOrb2: 'bg-orange-400/20',
    heroEyebrow: 'border-purple-400/35 bg-purple-500/15 text-purple-200',
    heroSubtitle: 'text-purple-100/85',
    heroTabActive: 'bg-gradient-to-r from-purple-500 to-orange-400 text-slate-950 shadow-[0_0_20px_rgba(168,85,247,0.35)]',
    heroTabIdle: 'border border-white/15 bg-white/[0.06] text-purple-100 hover:bg-white/[0.14]',
    cardSelected: 'border-purple-400/55 bg-purple-500/15 text-purple-100 shadow-2xs',
    cardHover: 'border-white/10 bg-[#090f24]/85 text-slate-200 hover:border-purple-400/40 hover:bg-white/[0.06]',
    badgeSoft: 'border border-purple-400/30 bg-purple-500/15 text-purple-300',
    badgeSolid: 'bg-gradient-to-r from-purple-500 to-violet-500 text-white',
    inputFocus: 'focus:border-purple-400',
    highlightBox: 'border border-purple-400/35 bg-gradient-to-br from-purple-500/12 via-[#090f24] to-orange-500/10 text-slate-100',
    highlightBoxSubtle: 'border-purple-400/25 bg-purple-500/[0.08] text-slate-200',
    highlightTitle: 'text-purple-300',
    highlightIcon: 'text-purple-400',
    accentText: 'text-purple-300',
    outlineBtn: 'border-purple-400/35 bg-purple-500/10 text-purple-200 hover:bg-purple-500/20',
    solidBtn: 'bg-gradient-to-r from-purple-600 to-orange-500 text-white hover:brightness-110 shadow-[0_0_20px_rgba(168,85,247,0.30)]',
    progressFill: 'bg-gradient-to-r from-purple-500 via-violet-400 to-orange-400',
  },
  9: {
    // Lớp 9: Hổ Phách & Vàng Vũ trụ
    heroBg: 'bg-gradient-to-br from-[#050712] via-[#1c1408] to-[#281906]',
    heroBorder: 'border-amber-400/40',
    heroOrb1: 'bg-amber-400/25',
    heroOrb2: 'bg-yellow-500/15',
    heroEyebrow: 'border-amber-400/40 bg-amber-500/15 text-amber-200',
    heroSubtitle: 'text-amber-100/85',
    heroTabActive: 'bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.35)]',
    heroTabIdle: 'border border-white/15 bg-white/[0.06] text-amber-100 hover:bg-white/[0.14]',
    cardSelected: 'border-amber-400/55 bg-amber-500/15 text-amber-100 shadow-2xs',
    cardHover: 'border-white/10 bg-[#090f24]/85 text-slate-200 hover:border-amber-400/40 hover:bg-white/[0.06]',
    badgeSoft: 'border border-amber-400/30 bg-amber-500/15 text-amber-300',
    badgeSolid: 'bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950',
    inputFocus: 'focus:border-amber-400',
    highlightBox: 'border border-amber-400/35 bg-gradient-to-br from-amber-500/12 via-[#090f24] to-orange-500/10 text-slate-100',
    highlightBoxSubtle: 'border-amber-400/25 bg-amber-500/[0.08] text-slate-200',
    highlightTitle: 'text-amber-300',
    highlightIcon: 'text-amber-400',
    accentText: 'text-amber-300',
    outlineBtn: 'border-amber-400/35 bg-amber-500/10 text-amber-200 hover:bg-amber-500/20',
    solidBtn: 'bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 text-slate-950 hover:brightness-110 shadow-[0_0_20px_rgba(245,158,11,0.30)]',
    progressFill: 'bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-300',
  },
  10: {
    // Lớp 10: Nhật Thực Cam & Đỏ
    heroBg: 'bg-gradient-to-br from-[#090614] via-[#2b0b08] to-[#2e1406]',
    heroBorder: 'border-orange-400/40',
    heroOrb1: 'bg-orange-500/25',
    heroOrb2: 'bg-red-500/20',
    heroEyebrow: 'border-orange-400/40 bg-orange-500/15 text-orange-200',
    heroSubtitle: 'text-orange-100/85',
    heroTabActive: 'bg-gradient-to-r from-orange-400 to-amber-400 text-slate-950 shadow-[0_0_20px_rgba(249,115,22,0.35)]',
    heroTabIdle: 'border border-white/15 bg-white/[0.06] text-orange-100 hover:bg-white/[0.14]',
    cardSelected: 'border-orange-400/55 bg-orange-500/15 text-orange-100 shadow-2xs',
    cardHover: 'border-white/10 bg-[#090f24]/85 text-slate-200 hover:border-orange-400/40 hover:bg-white/[0.06]',
    badgeSoft: 'border border-orange-400/30 bg-orange-500/15 text-orange-300',
    badgeSolid: 'bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950',
    inputFocus: 'focus:border-orange-400',
    highlightBox: 'border border-orange-400/35 bg-gradient-to-br from-orange-500/12 via-[#090f24] to-amber-500/10 text-slate-100',
    highlightBoxSubtle: 'border-orange-400/25 bg-orange-500/[0.08] text-slate-200',
    highlightTitle: 'text-orange-300',
    highlightIcon: 'text-orange-400',
    accentText: 'text-orange-300',
    outlineBtn: 'border-orange-400/35 bg-orange-500/10 text-orange-200 hover:bg-orange-500/20',
    solidBtn: 'bg-gradient-to-r from-orange-500 to-amber-400 text-slate-950 hover:brightness-110 shadow-[0_0_20px_rgba(249,115,22,0.30)]',
    progressFill: 'bg-gradient-to-r from-red-500 via-orange-400 to-amber-400',
  },
  11: {
    // Lớp 11: Lượng Tử Chàm & Lục Lam
    heroBg: 'bg-gradient-to-br from-[#050819] via-[#121038] to-[#062433]',
    heroBorder: 'border-cyan-400/40',
    heroOrb1: 'bg-cyan-400/25',
    heroOrb2: 'bg-indigo-500/20',
    heroEyebrow: 'border-cyan-400/35 bg-cyan-500/15 text-cyan-200',
    heroSubtitle: 'text-cyan-100/85',
    heroTabActive: 'bg-gradient-to-r from-indigo-400 to-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.35)]',
    heroTabIdle: 'border border-white/15 bg-white/[0.06] text-cyan-100 hover:bg-white/[0.14]',
    cardSelected: 'border-cyan-400/55 bg-cyan-500/15 text-cyan-100 shadow-2xs',
    cardHover: 'border-white/10 bg-[#090f24]/85 text-slate-200 hover:border-cyan-400/40 hover:bg-white/[0.06]',
    badgeSoft: 'border border-cyan-400/30 bg-cyan-500/15 text-cyan-300',
    badgeSolid: 'bg-gradient-to-r from-indigo-500 to-cyan-400 text-slate-950',
    inputFocus: 'focus:border-cyan-400',
    highlightBox: 'border border-cyan-400/35 bg-gradient-to-br from-indigo-500/12 via-[#090f24] to-cyan-500/10 text-slate-100',
    highlightBoxSubtle: 'border-cyan-400/25 bg-cyan-500/[0.08] text-slate-200',
    highlightTitle: 'text-cyan-300',
    highlightIcon: 'text-cyan-400',
    accentText: 'text-cyan-300',
    outlineBtn: 'border-cyan-400/35 bg-cyan-500/10 text-cyan-200 hover:bg-cyan-500/20',
    solidBtn: 'bg-gradient-to-r from-indigo-500 to-cyan-400 text-slate-950 hover:brightness-110 shadow-[0_0_20px_rgba(34,211,238,0.28)]',
    progressFill: 'bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400',
  },
  12: {
    // Lớp 12: Siêu Tân Tinh Đỏ & Hổ Phách
    heroBg: 'bg-gradient-to-br from-[#07050b] via-[#2b0811] to-[#1f1006]',
    heroBorder: 'border-rose-400/40',
    heroOrb1: 'bg-rose-500/25',
    heroOrb2: 'bg-amber-500/20',
    heroEyebrow: 'border-rose-400/40 bg-rose-500/15 text-rose-200',
    heroSubtitle: 'text-rose-100/85',
    heroTabActive: 'bg-gradient-to-r from-rose-500 to-amber-400 text-slate-950 shadow-[0_0_20px_rgba(244,63,94,0.35)]',
    heroTabIdle: 'border border-white/15 bg-white/[0.06] text-rose-100 hover:bg-white/[0.14]',
    cardSelected: 'border-rose-400/55 bg-rose-500/15 text-rose-100 shadow-2xs',
    cardHover: 'border-white/10 bg-[#090f24]/85 text-slate-200 hover:border-rose-400/40 hover:bg-white/[0.06]',
    badgeSoft: 'border border-rose-400/30 bg-rose-500/15 text-rose-300',
    badgeSolid: 'bg-gradient-to-r from-rose-500 to-orange-500 text-white',
    inputFocus: 'focus:border-rose-400',
    highlightBox: 'border border-rose-400/35 bg-gradient-to-br from-rose-500/12 via-[#090f24] to-amber-500/10 text-slate-100',
    highlightBoxSubtle: 'border-rose-400/25 bg-rose-500/[0.08] text-slate-200',
    highlightTitle: 'text-rose-300',
    highlightIcon: 'text-rose-400',
    accentText: 'text-rose-300',
    outlineBtn: 'border-rose-400/35 bg-rose-500/10 text-rose-200 hover:bg-rose-500/20',
    solidBtn: 'bg-gradient-to-r from-rose-500 to-amber-400 text-slate-950 hover:brightness-110 shadow-[0_0_20px_rgba(244,63,94,0.30)]',
    progressFill: 'bg-gradient-to-r from-rose-500 via-orange-400 to-amber-400',
  },
};

export function getGradePageTheme(grade: number): PageTheme {
  return UNIFIED_GRADE_PAGE_THEMES[grade] || UNIFIED_GRADE_PAGE_THEMES[6];
}

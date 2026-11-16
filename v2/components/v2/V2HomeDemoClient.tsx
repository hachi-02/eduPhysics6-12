'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Atom,
  BarChart3,
  BookOpen,
  Brain,
  Calculator,
  CheckCircle2,
  Compass,
  FileCheck,
  GitBranch,
  GraduationCap,
  Layers,
  Orbit,
  Printer,
  RotateCcw,
  Target,
  Zap,
} from 'lucide-react';
import type { ChapterItem, GradeItem, GradeProgressStats } from '@/types/cms';
import CosmicSingularity3D from './CosmicSingularity3D';
import { GlobalSearchModal } from '@/components/GlobalSearchModal';
import {
  getSavedGradePreference,
  isValidGradeNumber,
  RETURN_TO_CURRICULUM_KEY,
  saveGradePreference,
  type GradeSelection,
} from '@/lib/grade-context';

gsap.registerPlugin(ScrollTrigger);

interface GradeBoardPayload {
  grade: GradeItem;
  chapters: ChapterItem[];
  stats: GradeProgressStats;
}

interface V2HomeDemoClientProps {
  allGrades: GradeItem[];
  boardsByGrade: Record<number, GradeBoardPayload>;
  initialGrade: GradeSelection;
  hasInitialSavedGrade?: boolean;
  activeMistakeCount: number;
}

interface CosmicEra {
  id: string;
  step: string;
  gradeRange: string;
  title: string;
  desc: string;
  formula: string;
  backdropEq: string;
  targetGrade: number;
  accent: 'violet' | 'cyan' | 'gold' | 'emerald';
  concept: string;
}

const COSMIC_ERAS: CosmicEra[] = [
  {
    id: 'era-1',
    step: '01',
    gradeRange: 'THCS 6–9 & Vật lý 10',
    title: 'Giếng Không–Thời gian & Trường Hấp dẫn',
    desc: 'Khối lượng làm uốn cong cấu trúc không–thời gian xung quanh nó. Chính độ cong trường thế này tạo ra trọng lực giữ Mặt Trăng trên quỹ đạo và quy định các định luật chuyển động học từ Lớp 6 đến Lớp 10.',
    formula: 'F_hd = G · m₁m₂ / r²',
    backdropEq: 'F = G·m₁·m₂ / r²',
    targetGrade: 10,
    accent: 'violet',
    concept: 'Giếng Không–Thời gian',
  },
  {
    id: 'era-2',
    step: '02',
    gradeRange: 'Vật lý 8, 9 & Lớp 10',
    title: 'Trái Đất – Cơ học, Thủy quyển & Khí quyển',
    desc: 'Hành tinh xanh là phòng thí nghiệm tự nhiên hoàn hảo nhất cho áp suất khí quyển, lực đẩy Ác-si-mét, chuyển động tròn đều, bảo toàn cơ năng và sự truyền bức xạ nhiệt qua lớp vỏ khí quyển.',
    formula: 'P = m·g  |  W = ½mv² + mgh',
    backdropEq: 'W = ½m·v² + m·g·h',
    targetGrade: 8,
    accent: 'cyan',
    concept: 'Hành tinh Trái Đất',
  },
  {
    id: 'era-3',
    step: '03',
    gradeRange: 'Nhiệt học 11 & Hạt nhân 12',
    title: 'Mặt Trời – Nhiệt hạch, Quang phổ & Năng lượng',
    desc: 'Tâm Mặt Trời tổng hợp hạt nhân Hydro thành Heli theo phương trình Einstein, giải phóng lượng tử ánh sáng mang dải quang phổ liên tục nuôi sống mọi quá trình truyền nhiệt và quang điện trên Trái Đất.',
    formula: 'ΔE = Δm · c²  |  ε = h · f',
    backdropEq: 'ΔE = Δm·c² • ε = h·f',
    targetGrade: 12,
    accent: 'gold',
    concept: 'Mặt Trời & Nhiệt hạch',
  },
  {
    id: 'era-4',
    step: '04',
    gradeRange: 'Chuyên đề 11–12 & Mở rộng',
    title: 'Hố Đen – Thuyết Tương đối & Vật lý Hiện đại',
    desc: 'Khi lõi sao đặc vượt giới hạn khối lượng, trường hấp dẫn nén không–thời gian tới bán kính Schwarzschild khiến ngay cả photon cũng quay vòng quanh đĩa bồi tụ — cầu nối sang vật lý lượng tử hiện đại.',
    formula: 'R_s = 2·G·M / c²',
    backdropEq: 'R_s = 2·G·M / c²',
    targetGrade: 12,
    accent: 'emerald',
    concept: 'Hố đen Gargantua',
  },
];

const UTILITY_MODULES = [
  {
    href: '/adaptive-test',
    num: '01',
    title: 'Khảo thí Thích ứng (CAT)',
    tag: 'IRT 3PL',
    desc: 'Đo năng lực vật lý theo thời gian thực, tự động tăng giảm độ khó qua từng câu trả lời.',
    icon: Target,
    tone: 'gold',
  },
  {
    href: '/knowledge-graph',
    num: '02',
    title: 'Đồ thị Tri thức 6–12',
    tag: 'DAG 92 chủ đề',
    desc: 'Bản đồ liên kết tiên quyết xuyên suốt 7 khối lớp, truy vết ngay lỗ hổng nền tảng.',
    icon: GitBranch,
    tone: 'cyan',
  },
  {
    href: '/flashcards',
    num: '03',
    title: 'Flashcard Công thức & SI',
    tag: 'Active Recall',
    desc: 'Ghi nhớ chủ động hơn 250 công thức, hằng số vật lý và thứ nguyên chuẩn SI.',
    icon: Layers,
    tone: 'violet',
  },
  {
    href: '/calculator',
    num: '04',
    title: 'Giải nhanh & Đổi đơn vị SI',
    tag: '12 nhóm SI',
    desc: 'Quy đổi chính xác từ thang thiên văn đến vi mô và giải chi tiết công thức 4 bước.',
    icon: Calculator,
    tone: 'cyan',
  },
  {
    href: '/cognitive-traps',
    num: '05',
    title: 'Ma Trận Bẫy Nhận Thức',
    tag: 'Chẩn đoán BGD',
    desc: 'Nhận diện 6 kiểu bẫy kinh điển: sai đơn vị, nhầm dấu đại số và ngụy biện trực giác.',
    icon: Brain,
    tone: 'gold',
  },
  {
    href: '/mistakes',
    num: '06',
    title: 'Sổ tay Lỗi sai Thông minh',
    tag: 'Ôn phản xạ',
    desc: 'Tự động lưu các câu làm sai và sinh bộ đề tái kiểm tra cho đến khi nắm chắc.',
    icon: AlertCircle,
    tone: 'violet',
  },
  {
    href: '/progress',
    num: '07',
    title: 'Hồ sơ Năng lực 360°',
    tag: '4 mức tư duy',
    desc: 'Thống kê độ phủ theo Nhận biết, Thông hiểu, Vận dụng và Vận dụng cao.',
    icon: BarChart3,
    tone: 'cyan',
  },
  {
    href: '/cheatsheet',
    num: '08',
    title: 'Cẩm nang Công thức A4',
    tag: 'In / Xuất PDF',
    desc: 'Xuất bản tổng hợp toàn bộ đại lượng, đồ thị và công thức chuẩn theo từng khối lớp.',
    icon: Printer,
    tone: 'gold',
  },
  {
    href: '/exam-prep',
    num: '09',
    title: 'Kho Đề Thi Các Năm',
    tag: '2021 – 2025',
    desc: 'Ôn thi với đề Giữa kỳ, Cuối kỳ, Tuyển sinh 10 và Tốt nghiệp THPT các năm cho Lớp 6–12.',
    icon: FileCheck,
    tone: 'cyan',
  },
];

const KINETIC_STATEMENT_WORDS = [
  'Mỗi',
  'định',
  'luật',
  'trong',
  'sách',
  'giáo',
  'khoa',
  'đều',
  'đang',
  'điều',
  'hành',
  'cả',
  'thế',
  'giới',
  'tự',
  'nhiên.',
];

function AnimatedCount({ value }: { value: number }) {
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      el.textContent = String(value);
      return;
    }
    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: value,
      duration: 0.85,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 92%',
        once: true,
      },
      onUpdate: () => {
        el.textContent = String(Math.round(obj.val));
      },
    });
    return () => {
      tween.kill();
    };
  }, [value]);

  return (
    <span ref={elRef} className="tabular-nums">
      0
    </span>
  );
}

/**
 * Matching inline SVG micro-diagrams for the 4 stages:
 * 01: Spacetime Well, 02: Planet Earth + Moon Orbit, 03: Solar Fusion Spectrum, 04: Black Hole Horizon
 */
function EraPhysicsSvg({ eraId }: { eraId: string }) {
  if (eraId === 'era-1') {
    return (
      <svg viewBox="0 0 220 104" className="w-full h-24 overflow-visible" aria-hidden="true">
        {/* Funnel contour rings */}
        <ellipse cx="110" cy="24" rx="84" ry="14" fill="none" stroke="rgba(129,140,248,0.35)" strokeWidth="1.2" />
        <ellipse cx="110" cy="48" rx="54" ry="10" fill="none" stroke="rgba(56,189,248,0.45)" strokeWidth="1.2" />
        <ellipse cx="110" cy="72" rx="28" ry="6" fill="none" stroke="rgba(251,191,36,0.55)" strokeWidth="1.2" />
        <path
          d="M 26,24 C 66,34 80,68 96,92 M 194,24 C 154,34 140,68 124,92"
          fill="none"
          stroke="#818cf8"
          strokeWidth="1.4"
          strokeDasharray="6 4"
          className="cosmic-svg-flow"
        />
        <circle r="4.5" fill="#38bdf8">
          <animateMotion
            dur="5.5s"
            repeatCount="indefinite"
            path="M 194,24 A 84,14 0 1,0 26,24 A 84,14 0 1,0 194,24 Z"
          />
        </circle>
      </svg>
    );
  }

  if (eraId === 'era-2') {
    return (
      <svg viewBox="0 0 220 104" className="w-full h-24 overflow-visible" aria-hidden="true">
        <defs>
          <radialGradient id="earthMiniGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="55%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0f172a" />
          </radialGradient>
        </defs>
        <ellipse
          cx="110"
          cy="52"
          rx="80"
          ry="28"
          fill="none"
          stroke="rgba(56,189,248,0.3)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        <circle cx="110" cy="52" r="22" fill="url(#earthMiniGrad)" stroke="rgba(125,211,252,0.5)" strokeWidth="1.4" />
        {/* Stylized green continent shapes */}
        <path d="M 102,42 Q 112,38 118,46 Q 114,56 105,53 Z" fill="#22c55e" fillOpacity="0.65" />
        <path d="M 114,58 Q 123,55 125,62 Q 119,67 113,63 Z" fill="#22c55e" fillOpacity="0.55" />
        {/* Orbiting Moon */}
        <circle r="5" fill="#e2e8f0">
          <animateMotion
            dur="6.8s"
            repeatCount="indefinite"
            path="M 190,52 A 80,28 0 1,0 30,52 A 80,28 0 1,0 190,52 Z"
          />
        </circle>
      </svg>
    );
  }

  if (eraId === 'era-3') {
    return (
      <svg viewBox="0 0 220 104" className="w-full h-24 overflow-visible" aria-hidden="true">
        <defs>
          <radialGradient id="sunMiniGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef9c3" />
            <stop offset="55%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0.1" />
          </radialGradient>
        </defs>
        <circle cx="72" cy="52" r="32" fill="url(#sunMiniGrad)" />
        <circle cx="72" cy="52" r="19" fill="#fbbf24" />
        {/* Emitted photon wavepackets */}
        <path
          d="M 102,38 Q 116,28 130,38 T 158,38 T 186,38 T 210,38"
          fill="none"
          stroke="#fde047"
          strokeWidth="1.8"
          strokeDasharray="8 5"
          className="cosmic-svg-flow"
        />
        <path
          d="M 104,56 Q 118,46 132,56 T 160,56 T 188,56 T 212,56"
          fill="none"
          stroke="#fb923c"
          strokeWidth="1.8"
          strokeDasharray="8 5"
          className="cosmic-svg-flow"
        />
        <text x="128" y="82" fill="#fcd34d" fontSize="9.5" fontFamily="monospace">
          4¹H → ⁴He + ΔE
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 220 104" className="w-full h-24 overflow-visible" aria-hidden="true">
      <ellipse cx="110" cy="52" rx="76" ry="22" fill="none" stroke="rgba(251,191,36,0.45)" strokeWidth="2.5" />
      <ellipse
        cx="110"
        cy="52"
        rx="58"
        ry="16"
        fill="none"
        stroke="#fb923c"
        strokeWidth="1.6"
        pathLength={1}
        strokeDasharray="0.35 0.65"
        className="cosmic-svg-orbit-stroke"
      />
      <circle cx="110" cy="52" r="18" fill="#020308" stroke="#fbbf24" strokeWidth="1.6" />
      <circle cx="110" cy="52" r="24" fill="none" stroke="rgba(52,211,153,0.45)" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  );
}

export function V2HomeDemoClient({
  allGrades,
  boardsByGrade,
  initialGrade,
  hasInitialSavedGrade = false,
  activeMistakeCount,
}: V2HomeDemoClientProps) {
  const [activeGrade, setActiveGrade] = useState<GradeSelection>(initialGrade ?? 'all');
  const [isPickingGrade, setIsPickingGrade] = useState<boolean>(false);
  const [hasConfirmedGrade, setHasConfirmedGrade] = useState<boolean>(Boolean(hasInitialSavedGrade));
  const [selectedChapterId, setSelectedChapterId] = useState<number | 'all'>('all');
  const actButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const syncActiveActButton = (activeIdx: number) => {
    actButtonsRef.current.forEach((btn, i) => {
      if (!btn) return;
      const isActive = i === activeIdx;
      btn.classList.toggle('bg-amber-400/20', isActive);
      btn.classList.toggle('text-amber-200', isActive);
      btn.classList.toggle('border-amber-400/50', isActive);
      btn.classList.toggle('bg-white/[0.04]', !isActive);
      btn.classList.toggle('text-slate-400', !isActive);
      btn.classList.toggle('border-white/10', !isActive);
      btn.classList.toggle('hover:text-white', !isActive);
    });
  };

  // Scroll progress fed cleanly to the single 3D WebGL stage
  const scrollProgressRef = useRef<number>(0);

  // Pinned Stage Scrollytelling DOM HUD refs
  const actLabelRef = useRef<HTMLSpanElement>(null);
  const actConceptRef = useRef<HTMLSpanElement>(null);
  const odysseyRingRef = useRef<SVGCircleElement>(null);
  const stageTriggerRef = useRef<ScrollTrigger | null>(null);

  // Section & Animation Refs
  const canvasStageRef = useRef<HTMLDivElement>(null);
  const heroStageSectionRef = useRef<HTMLElement>(null);
  const heroIntroPanelRef = useRef<HTMLDivElement>(null);
  const odysseyLeftPanelRef = useRef<HTMLDivElement>(null);

  const kineticSectionRef = useRef<HTMLElement>(null);
  const curriculumSectionRef = useRef<HTMLElement>(null);
  const curriculumDeckRef = useRef<HTMLDivElement>(null);
  const ecosystemSectionRef = useRef<HTMLElement>(null);
  const ecosystemTrackRef = useRef<HTMLDivElement>(null);
  const ecosystemProgressRef = useRef<HTMLDivElement>(null);

  const lenisRef = useRef<Lenis | null>(null);

  const allGradesSummary = useMemo(() => {
    const boardsList = allGrades
      .map((g) => boardsByGrade[g.grade_number])
      .filter((b): b is GradeBoardPayload => Boolean(b));
    const totalTopics = boardsList.reduce((acc, b) => acc + (b.stats?.total_topics ?? 0), 0);
    const completedTopics = boardsList.reduce((acc, b) => acc + (b.stats?.completed_topics ?? 0), 0);
    const completionRate = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
    const totalChapters = boardsList.reduce((acc, b) => acc + b.chapters.length, 0);
    const allChaptersWithGrade = boardsList.flatMap((b) =>
      b.chapters.map((ch) => ({
        ...ch,
        gradeNumber: b.grade.grade_number,
        gradeTitle: b.grade.title,
      }))
    );
    return {
      boardsList,
      totalTopics,
      completedTopics,
      completionRate,
      totalChapters,
      allChaptersWithGrade,
    };
  }, [allGrades, boardsByGrade]);

  const currentBoard =
    activeGrade === 'all'
      ? null
      : (boardsByGrade[activeGrade] ?? Object.values(boardsByGrade)[0] ?? null);

  const pendingChapterIdRef = useRef<number | null>(null);

  // Reset chapter filter cleanly to "Tất cả" when changing grades (unless jumping straight to a chapter)
  useEffect(() => {
    const targetCh = pendingChapterIdRef.current;
    pendingChapterIdRef.current = null;
    setSelectedChapterId(targetCh ?? 'all');
  }, [activeGrade]);

  // ResizeObserver on #curriculum-app ensures downstream #ecosystem pin bounds stay exact
  useEffect(() => {
    const el = curriculumSectionRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;

    let lastHeight = el.getBoundingClientRect().height;
    let rafId = 0;

    const ro = new ResizeObserver((entries) => {
      const nextHeight = entries[0]?.contentRect.height ?? 0;
      if (Math.abs(nextHeight - lastHeight) > 2) {
        lastHeight = nextHeight;
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      }
    });

    ro.observe(el);
    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  // Sync remembered grade from localStorage / cookie / URL query cleanly on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const paramGrade = params.get('grade');

    if (paramGrade === 'all') {
      setActiveGrade('all');
      setHasConfirmedGrade(true);
      saveGradePreference('all');
      return;
    }
    if (paramGrade && isValidGradeNumber(Number(paramGrade))) {
      const num = Number(paramGrade);
      setActiveGrade(num);
      setHasConfirmedGrade(true);
      saveGradePreference(num);
      return;
    }

    const saved = getSavedGradePreference();
    if (saved !== null) {
      setActiveGrade(saved);
      setHasConfirmedGrade(true);
      return;
    }

    try {
      const ret = sessionStorage.getItem(RETURN_TO_CURRICULUM_KEY);
      if (ret === 'all') {
        setActiveGrade('all');
        setHasConfirmedGrade(true);
      } else if (ret && isValidGradeNumber(Number(ret))) {
        setActiveGrade(Number(ret));
        setHasConfirmedGrade(true);
      }
    } catch {
      // Ignore storage error
    }
  }, []);

  const handleSelectGrade = (gradeNum: GradeSelection) => {
    setActiveGrade(gradeNum);
    setHasConfirmedGrade(true);
    setIsPickingGrade(false);
    saveGradePreference(gradeNum);
  };

  const markReturnToCurriculum = () => {
    try {
      sessionStorage.setItem(RETURN_TO_CURRICULUM_KEY, String(activeGrade));
    } catch {
      // Ignore storage error
    }
  };

  const scrollToY = (y: number, duration = 1.0) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(y, { duration });
    } else {
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    if (id === 'lab-tour') {
      jumpToOdysseyAct(0);
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, {
        offset: id === 'ecosystem' || id === 'hero-observatory' ? 0 : -64,
        duration: 1.0,
      });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const jumpToOdysseyAct = (idx: number) => {
    const st = stageTriggerRef.current;
    if (!st) {
      syncActiveActButton(idx);
      scrollToY(0);
      return;
    }
    // 0.00..0.14 = Hero Intro; 0.21 = Act 1 (Spacetime); 0.44 = Act 2 (Earth); 0.66 = Act 3 (Sun); 0.90 = Act 4 (Black Hole)
    const ratios = [0.21, 0.44, 0.66, 0.90];
    const targetY = st.start + (ratios[idx] ?? 0.20) * (st.end - st.start);
    scrollToY(targetY, 1.0);
  };

  // Master Lenis + GSAP ScrollTrigger Choreography
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let shouldReturnToCurriculum = false;
    try {
      shouldReturnToCurriculum =
        Boolean(sessionStorage.getItem(RETURN_TO_CURRICULUM_KEY)) ||
        window.location.hash === '#curriculum-app' ||
        new URLSearchParams(window.location.search).has('grade');
    } catch {
      shouldReturnToCurriculum =
        window.location.hash === '#curriculum-app' ||
        new URLSearchParams(window.location.search).has('grade');
    }

    if (shouldReturnToCurriculum) {
      // Immediately signal 3D canvas to skip hero rendering while focusing #curriculum-app
      scrollProgressRef.current = 1.65;
      if (canvasStageRef.current) {
        canvasStageRef.current.style.opacity = '0.12';
      }
    }

    const prevScrollBehavior = document.documentElement.style.scrollBehavior;
    if (!prefersReducedMotion) {
      document.documentElement.style.scrollBehavior = 'auto';
    }

    let lenis: Lenis | null = null;
    let tickerFn: ((time: number) => void) | null = null;

    if (!prefersReducedMotion) {
      lenis = new Lenis({
        duration: 1.05,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      lenisRef.current = lenis;

      lenis.on('scroll', ScrollTrigger.update);

      tickerFn = (time: number) => {
        lenis?.raf(time * 1000);
      };
      gsap.ticker.add(tickerFn);
      gsap.ticker.lagSmoothing(0);
    }

    const mm = gsap.matchMedia();

    const jumpToCurriculumTarget = () => {
      const targetEl = curriculumSectionRef.current || document.getElementById('curriculum-app');
      if (!targetEl) return;
      const targetY = Math.max(0, targetEl.getBoundingClientRect().top + window.scrollY - 64);
      scrollProgressRef.current = 1.65;
      if (canvasStageRef.current) {
        canvasStageRef.current.style.opacity = '0.12';
      }
      if (lenis) {
        lenis.scrollTo(targetY, { immediate: true, force: true });
      }
      window.scrollTo({ top: targetY, behavior: 'instant' as ScrollBehavior });
      ScrollTrigger.update();
    };

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      // 1. Hero Entrance Timeline (skip when returning directly to #curriculum-app)
      if (!shouldReturnToCurriculum) {
        gsap.from('.hero-reveal-line', {
          yPercent: 105,
          opacity: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: 'power3.out',
        });
        gsap.from('.hero-fade-up', {
          y: 22,
          opacity: 0,
          duration: 0.7,
          stagger: 0.06,
          delay: 0.16,
          ease: 'power2.out',
        });
      }

      // 2. UNIFIED PINNED HERO + 4-STAGE COSMIC EVOLUTION (Spacetime -> Earth -> Sun -> Black Hole)
      const eraCards = gsap.utils.toArray<HTMLElement>('.odyssey-era-card');
      const eqBackdrops = gsap.utils.toArray<HTMLElement>('.odyssey-eq-backdrop');

      if (
        heroStageSectionRef.current &&
        heroIntroPanelRef.current &&
        odysseyLeftPanelRef.current &&
        eraCards.length === 4
      ) {
        gsap.set(heroIntroPanelRef.current, { autoAlpha: 1, yPercent: 0, scale: 1 });
        gsap.set(odysseyLeftPanelRef.current, { autoAlpha: 0, yPercent: 14, scale: 0.96 });
        gsap.set(eraCards[0], { autoAlpha: 1, yPercent: 0, rotateX: 0, scale: 1 });
        gsap.set(eraCards.slice(1), { autoAlpha: 0, yPercent: 26, rotateX: -12, scale: 0.92 });
        gsap.set(eqBackdrops, { autoAlpha: 0, xPercent: 24 });

        let lastActIndex = -1;

        const stageTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroStageSectionRef.current,
            start: 'top top',
            end: '+=3400',
            pin: true,
            scrub: 0.75,
            anticipatePin: 1,
            onUpdate: (self) => {
              const p = self.progress;
              scrollProgressRef.current = p;

              const odysseyP = Math.min(1, Math.max(0, (p - 0.14) / 0.86));
              if (odysseyRingRef.current) {
                odysseyRingRef.current.style.strokeDashoffset = String(1 - odysseyP);
              }

              const idx = p < 0.335 ? 0 : p < 0.55 ? 1 : p < 0.77 ? 2 : 3;
              if (idx !== lastActIndex) {
                lastActIndex = idx;
                syncActiveActButton(idx);
              }

              const era = COSMIC_ERAS[idx];
              if (actLabelRef.current) actLabelRef.current.textContent = `${era.step}/04`;
              if (actConceptRef.current) actConceptRef.current.textContent = era.concept;
            },
          },
        });

        stageTriggerRef.current = stageTl.scrollTrigger ?? null;

        // Stage 0 -> Act 01 (Gieng Khong-Thoi gian)
        stageTl
          .to({}, { duration: 0.25 })
          .to(
            heroIntroPanelRef.current,
            { yPercent: -16, scale: 0.96, autoAlpha: 0, duration: 0.55, ease: 'power2.inOut' },
            0.25
          )
          .to(
            odysseyLeftPanelRef.current,
            { yPercent: 0, scale: 1, autoAlpha: 1, duration: 0.55, ease: 'power2.out' },
            0.38
          )
          .fromTo(
            eqBackdrops[0],
            { xPercent: 22, autoAlpha: 0 },
            { xPercent: -4, autoAlpha: 0.12, duration: 0.9, ease: 'none' },
            0.4
          )

          // Act 01 -> Act 02 (Trai Dat)
          .to(eqBackdrops[0], { xPercent: -26, autoAlpha: 0, duration: 0.7, ease: 'none' }, 1.25)
          .to(eraCards[0], { yPercent: -24, rotateX: 12, scale: 0.91, autoAlpha: 0, duration: 0.6 }, 1.45)
          .to(eraCards[1], { yPercent: 0, rotateX: 0, scale: 1, autoAlpha: 1, duration: 0.68 }, 1.62)
          .fromTo(
            eqBackdrops[1],
            { xPercent: 24, autoAlpha: 0 },
            { xPercent: -4, autoAlpha: 0.13, duration: 0.85, ease: 'none' },
            1.62
          )

          // Act 02 -> Act 03 (Mat Troi)
          .to(eqBackdrops[1], { xPercent: -26, autoAlpha: 0, duration: 0.7, ease: 'none' }, 2.35)
          .to(eraCards[1], { yPercent: -24, rotateX: 12, scale: 0.91, autoAlpha: 0, duration: 0.6 }, 2.55)
          .to(eraCards[2], { yPercent: 0, rotateX: 0, scale: 1, autoAlpha: 1, duration: 0.68 }, 2.72)
          .fromTo(
            eqBackdrops[2],
            { xPercent: 24, autoAlpha: 0 },
            { xPercent: -4, autoAlpha: 0.14, duration: 0.85, ease: 'none' },
            2.72
          )

          // Act 03 -> Act 04 (Ho Den)
          .to(eqBackdrops[2], { xPercent: -26, autoAlpha: 0, duration: 0.7, ease: 'none' }, 3.45)
          .to(eraCards[2], { yPercent: -24, rotateX: 12, scale: 0.91, autoAlpha: 0, duration: 0.6 }, 3.65)
          .to(eraCards[3], { yPercent: 0, rotateX: 0, scale: 1, autoAlpha: 1, duration: 0.68 }, 3.82)
          .fromTo(
            eqBackdrops[3],
            { xPercent: 24, autoAlpha: 0 },
            { xPercent: -6, autoAlpha: 0.14, duration: 0.85, ease: 'none' },
            3.82
          )
          .to({}, { duration: 0.38 });
      }

      // 3. COMPACT KINETIC BRIDGE + CANVAS DIMMING
      if (kineticSectionRef.current) {
        ScrollTrigger.create({
          trigger: kineticSectionRef.current,
          endTrigger: '#curriculum-app',
          start: 'top 98%',
          end: 'top 25%',
          scrub: true,
          onUpdate: (self) => {
            scrollProgressRef.current = 1.0 + self.progress * 0.65;
          },
        });

        if (canvasStageRef.current) {
          gsap.fromTo(
            canvasStageRef.current,
            { opacity: 1 },
            {
              opacity: 0.12,
              ease: 'none',
              scrollTrigger: {
                trigger: kineticSectionRef.current,
                start: 'top 45%',
                end: 'bottom 10%',
                scrub: true,
              },
            }
          );
        }

        gsap.from('.kinetic-word', {
          opacity: 0.32,
          y: 18,
          rotateX: 18,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: kineticSectionRef.current,
            start: 'top 88%',
            end: 'bottom 52%',
            scrub: 0.5,
          },
        });

        gsap.fromTo(
          '.kinetic-beam',
          { scaleX: 0.08, opacity: 0.35 },
          {
            scaleX: 1,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: kineticSectionRef.current,
              start: 'top 82%',
              end: 'bottom 45%',
              scrub: 0.5,
            },
          }
        );
      }

      // 4. SECTION 3: 3D COCKPIT PERSPECTIVE UNFOLD (#curriculum-app)
      if (curriculumDeckRef.current) {
        gsap.fromTo(
          curriculumDeckRef.current,
          { rotateX: 7, scale: 0.97, y: 28, opacity: 0.85 },
          {
            rotateX: 0,
            scale: 1,
            y: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: curriculumDeckRef.current,
              start: 'top 92%',
              end: 'top 42%',
              scrub: 0.6,
            },
          }
        );
      }

      // 5. SECTION 4: PINNED HORIZONTAL ORBITAL DOCK (#ecosystem) WITH END-HOLD BEFORE FOOTER
      mm.add('(min-width: 768px)', () => {
        const sec = ecosystemSectionRef.current;
        const track = ecosystemTrackRef.current;
        if (!sec || !track) return;

        const getScrollDistance = () => {
          const containerW = track.parentElement?.clientWidth || sec.clientWidth;
          return Math.max(track.scrollWidth - containerW + 48, 0);
        };

        const ecoTl = gsap.timeline({
          scrollTrigger: {
            trigger: sec,
            start: 'top top',
            end: () => `+=${getScrollDistance() + 700}`,
            pin: true,
            scrub: 0.85,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (ecosystemProgressRef.current) {
                const pTrack = Math.min(1, Math.max(0.04, (self.progress - 0.08) / 0.78));
                ecosystemProgressRef.current.style.transform = `scaleX(${pTrack})`;
              }
            },
          },
        });

        ecoTl
          .to({}, { duration: 0.08 })
          .to(track, {
            x: () => -getScrollDistance(),
            ease: 'none',
            duration: 0.78,
          })
          .to({}, { duration: 0.14 });

        return () => {
          ecoTl.scrollTrigger?.kill();
          ecoTl.kill();
        };
      });

      mm.add('(max-width: 767px)', () => {
        ScrollTrigger.batch('.orbital-module-card', {
          start: 'top 88%',
          once: true,
          onEnter: (batch) =>
            gsap.fromTo(
              batch,
              { y: 24, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.55, stagger: 0.08, ease: 'power3.out' }
            ),
        });
      });

      if (shouldReturnToCurriculum) {
        ScrollTrigger.refresh();
        jumpToCurriculumTarget();
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
          jumpToCurriculumTarget();
          try {
            sessionStorage.removeItem(RETURN_TO_CURRICULUM_KEY);
          } catch {
            // Ignore storage error
          }
        });
      } else {
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      }
    });

    if (prefersReducedMotion && shouldReturnToCurriculum) {
      jumpToCurriculumTarget();
      try {
        sessionStorage.removeItem(RETURN_TO_CURRICULUM_KEY);
      } catch {
        // Ignore storage error
      }
    }

    return () => {
      document.documentElement.style.scrollBehavior = prevScrollBehavior;
      mm.revert();
      ctx.revert();
      if (tickerFn) gsap.ticker.remove(tickerFn);
      if (lenis) lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const handleTopicPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  const handleDockCardPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
    e.currentTarget.style.setProperty('--rx', `${((0.5 - py) * 9).toFixed(2)}deg`);
    e.currentTarget.style.setProperty('--ry', `${((px - 0.5) * 11).toFixed(2)}deg`);
  };

  const handleDockCardPointerLeave = (e: React.PointerEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty('--rx', '0deg');
    e.currentTarget.style.setProperty('--ry', '0deg');
  };

  const activeChaptersPool = useMemo(() => {
    if (activeGrade === 'all') return allGradesSummary.allChaptersWithGrade;
    const list = currentBoard?.chapters ?? [];
    return list.map((ch) => ({
      ...ch,
      gradeNumber: currentBoard?.grade.grade_number ?? activeGrade,
      gradeTitle: currentBoard?.grade.title ?? '',
    }));
  }, [activeGrade, allGradesSummary, currentBoard]);

  const displayedChapters = useMemo(() => {
    if (selectedChapterId === 'all') return activeChaptersPool;
    return activeChaptersPool.filter((c) => c.id === selectedChapterId);
  }, [activeChaptersPool, selectedChapterId]);

  const gradeStats = currentBoard?.stats;

  return (
    <MotionConfig reducedMotion="user">
      <style jsx global>{`
        @keyframes cosmicDashFlow {
          to {
            stroke-dashoffset: -32;
          }
        }
        @keyframes cosmicOrbitDash {
          to {
            stroke-dashoffset: -1;
          }
        }
        .cosmic-svg-flow {
          animation: cosmicDashFlow 2.6s linear infinite;
        }
        .cosmic-svg-orbit-stroke {
          animation: cosmicOrbitDash 7s linear infinite;
        }
        .cosmic-topic-glow {
          background: radial-gradient(
            360px circle at var(--mx, 50%) var(--my, 50%),
            rgba(56, 189, 248, 0.16),
            rgba(245, 158, 11, 0.06) 42%,
            transparent 72%
          );
        }
        .orbital-tilt-card {
          transform: perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
          transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.25s ease;
        }
        @media (prefers-reduced-motion: reduce) {
          .cosmic-svg-flow,
          .cosmic-svg-orbit-stroke {
            animation: none !important;
          }
          .odyssey-cards-stack {
            display: grid !important;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
            gap: 1.25rem !important;
            height: auto !important;
          }
          .odyssey-era-card,
          .odyssey-left-panel,
          .hero-intro-panel {
            position: relative !important;
            opacity: 1 !important;
            visibility: visible !important;
            transform: none !important;
            height: auto !important;
          }
        }
        @media (prefers-reduced-transparency: reduce) {
          .cosmic-glass {
            backdrop-filter: none !important;
            background-color: #0b1024 !important;
          }
        }
      `}</style>

      <div className="relative w-full min-h-screen bg-[#03040b] text-slate-100 selection:bg-amber-500/30 selection:text-amber-100">
        {/* Ambient Deep Space Backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 opacity-85"
          style={{
            background:
              'radial-gradient(ellipse 80% 55% at 72% 18%, rgba(245, 158, 11, 0.08), transparent 60%), radial-gradient(ellipse 65% 50% at 15% 32%, rgba(56, 189, 248, 0.08), transparent 62%), radial-gradient(ellipse 75% 60% at 50% 88%, rgba(99, 102, 241, 0.11), transparent 68%)',
          }}
        />

        {/* SINGLE PURE FULLSCREEN 60FPS COSMIC WEBGL CANVAS STAGE */}
        <div
          ref={canvasStageRef}
          className="fixed inset-0 z-0 pointer-events-auto"
          aria-hidden="false"
        >
          <CosmicSingularity3D scrollProgressRef={scrollProgressRef} />
        </div>

        {/* ================================================================
            FLOATING FROSTED COSMIC NAVBAR
        ================================================================ */}
        <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-3 pointer-events-none">
          <nav
            aria-label="Điều hướng chính"
            className="cosmic-glass pointer-events-auto max-w-[1440px] mx-auto h-14 px-4 sm:px-6 rounded-2xl bg-[#070b1a]/75 backdrop-blur-sm border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_12px_40px_-12px_rgba(0,0,0,0.8)] flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-indigo-600 p-[1px] shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.35)]">
                <div className="w-full h-full rounded-[11px] bg-[#060917] flex items-center justify-center">
                  <Orbit className="w-4 h-4 text-amber-300" />
                </div>
              </div>
              <div className="leading-tight truncate">
                <span className="font-semibold tracking-tight text-sm sm:text-base text-white">
                  eduPhysics 6–12
                </span>
                <span className="hidden xl:inline-block ml-2.5 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-full bg-sky-500/10 text-sky-300 border border-sky-400/20">
                  GDPT 2018
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-1 text-xs font-medium text-slate-300">
              <button
                type="button"
                onClick={() => scrollToY(0)}
                className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
              >
                Trang đầu
              </button>
              <button
                type="button"
                onClick={() => jumpToOdysseyAct(0)}
                className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
              >
                Lộ trình Trực quan
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('curriculum-app')}
                className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
              >
                Giáo trình 6–12
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('ecosystem')}
                className="px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
              >
                Trạm Công cụ
              </button>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <GlobalSearchModal variant="glass" />
              <button
                type="button"
                onClick={() => scrollToSection('ecosystem')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 hover:brightness-110 transition-all shadow-[0_0_24px_rgba(245,158,11,0.35)]"
              >
                <span className="hidden sm:inline">Trạm Công cụ</span>
                <span className="sm:hidden">Công cụ</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </nav>
        </header>

        {/* ================================================================
            UNIFIED PINNED STAGE: EDUCATIONAL HERO + 4-STAGE COSMIC EVOLUTION
            Right side displays ONLY the pure 3D model (no borders, no controls, no HUD clutter)
        ================================================================ */}
        <section
          id="hero-observatory"
          ref={heroStageSectionRef}
          className="relative w-full z-10 min-h-[100dvh] lg:h-[100dvh] pt-20 pb-6 px-4 sm:px-6 lg:px-10 flex items-center pointer-events-none"
        >
          {/* Giant Scrubbed Parallax Equation Watermark */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden z-0"
          >
            {COSMIC_ERAS.map((era) => (
              <div
                key={era.id}
                className="odyssey-eq-backdrop absolute whitespace-nowrap font-mono font-bold text-[9.5vw] lg:text-[7vw] tracking-tighter text-white select-none"
                style={{ opacity: 0 }}
              >
                {era.backdropEq}
              </div>
            ))}
          </div>

          <div className="relative z-10 max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* LEFT 5 COLS: Crossfading Educational Hero -> 4-Stage Evolution Cards */}
            <div className="lg:col-span-5 relative min-h-[490px] sm:min-h-[520px] lg:h-[590px] flex items-center pointer-events-none">
              {/* PANEL A: Educational Hero + 2-Step Grade Picker Flow */}
              <div
                ref={heroIntroPanelRef}
                className="hero-intro-panel lg:absolute lg:inset-0 pointer-events-auto flex flex-col justify-center space-y-5 rounded-3xl p-4 sm:p-6 bg-[#03040b]/60 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none"
              >
                <div className="hero-fade-up inline-flex self-start items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-amber-400/25 text-amber-200/95 text-xs font-medium backdrop-blur-sm">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Nền tảng Học &amp; Luyện thi Vật lý 6–12 • Chuẩn GDPT 2018</span>
                </div>

                <h1 className="text-4xl sm:text-5xl xl:text-[3.3rem] font-bold tracking-[-0.03em] leading-[1.22] text-white">
                  <span className="block overflow-hidden py-1 -my-0.5">
                    <span className="hero-reveal-line block">Học Vật Lý Trực Quan</span>
                  </span>
                  <span className="block overflow-hidden py-1 -my-0.5">
                    <span className="hero-reveal-line block">Từ Cơ Bản Đến Chuyên Sâu</span>
                  </span>
                  <span className="block overflow-hidden py-1.5 -my-1">
                    <span className="hero-reveal-line block py-0.5 bg-gradient-to-r from-amber-300 via-orange-400 to-sky-400 bg-clip-text text-transparent">
                      Lớp 6 – Lớp 12.
                    </span>
                  </span>
                </h1>

                <p className="hero-fade-up text-sm sm:text-base text-slate-300/95 leading-relaxed max-w-xl">
                  Hệ thống bài giảng chuẩn chương trình mới, kết hợp mô phỏng trực quan, công thức SI, sơ đồ tư duy và phòng luyện đề thích ứng theo từng khối lớp.
                </p>

                {/* 2-STEP INTERACTIVE GRADE PICKER CTA */}
                <div className="hero-fade-up min-h-[76px] pt-1">
                  <AnimatePresence mode="wait">
                    {isPickingGrade ? (
                      <motion.div
                        key="grade-picker-panel"
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.97 }}
                        transition={{ duration: 0.22 }}
                        className="cosmic-glass rounded-2xl p-3.5 bg-[#080e24]/88 backdrop-blur-sm border border-amber-400/35 shadow-[0_14px_40px_-10px_rgba(0,0,0,0.85)] space-y-2.5"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-amber-200">
                            Chọn khối lớp bạn muốn học:
                          </span>
                          <button
                            type="button"
                            onClick={() => setIsPickingGrade(false)}
                            className="text-slate-400 hover:text-white text-[11px]"
                          >
                            Đóng
                          </button>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {allGrades.map((g) => {
                            const selected = hasConfirmedGrade && g.grade_number === activeGrade;
                            return (
                              <button
                                key={g.id}
                                type="button"
                                onClick={() => handleSelectGrade(g.grade_number)}
                                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                                  selected
                                    ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-sm'
                                    : 'bg-white/[0.06] hover:bg-amber-400/20 text-white border-white/15 hover:border-amber-400/45'
                                }`}
                              >
                                Lớp {g.grade_number}
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    ) : hasConfirmedGrade && activeGrade !== 'all' ? (
                      <motion.div
                        key="grade-confirmed-actions"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-wrap items-center gap-3"
                      >
                        <motion.button
                          type="button"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => scrollToSection('curriculum-app')}
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 shadow-[0_10px_30px_-8px_rgba(245,158,11,0.55)] hover:brightness-110 transition-all"
                        >
                          <BookOpen className="w-4 h-4" />
                          <span>Bắt đầu học (Lớp {activeGrade})</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>

                        <motion.button
                          type="button"
                          whileHover={{ y: -1 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setIsPickingGrade(true)}
                          className="cosmic-glass inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-200 bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 backdrop-blur-sm transition-colors"
                        >
                          <RotateCcw className="w-3.5 h-3.5 text-sky-300" />
                          <span>Chọn lại khối lớp</span>
                        </motion.button>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="initial-choose-grade"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.button
                          type="button"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setIsPickingGrade(true)}
                          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm sm:text-base font-semibold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 shadow-[0_12px_34px_-8px_rgba(245,158,11,0.55)] hover:brightness-110 transition-all"
                        >
                          <GraduationCap className="w-4 h-4" />
                          <span>Chọn khối lớp</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Compact Curriculum Telemetry Strip */}
                <div className="hero-fade-up grid grid-cols-3 gap-2.5 pt-2 border-t border-white/10">
                  <div className="p-3 rounded-xl bg-[#070b1a]/65 backdrop-blur-sm border border-white/[0.08]">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      Khối hiện tại
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-white mt-0.5 tabular-nums">
                      {activeGrade === 'all' ? 'Tất cả (6–12)' : `Lớp ${activeGrade}`}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#070b1a]/65 backdrop-blur-sm border border-white/[0.08]">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      Độ phủ bài học
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-sky-300 mt-0.5 tabular-nums">
                      {activeGrade === 'all'
                        ? allGradesSummary.completionRate
                        : (gradeStats?.completion_rate ?? 0)}
                      %
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#070b1a]/65 backdrop-blur-sm border border-white/[0.08]">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      {activeMistakeCount > 0 ? 'Lỗi cần ôn' : 'Quy mô'}
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-amber-300 mt-0.5 tabular-nums">
                      {activeMistakeCount > 0
                        ? `${activeMistakeCount} câu`
                        : `${
                            activeGrade === 'all'
                              ? allGradesSummary.totalTopics
                              : (gradeStats?.total_topics ?? 0)
                          } bài`}
                    </div>
                  </div>
                </div>
              </div>

              {/* PANEL B: 4-Stage Scroll Story Cards (Spacetime -> Earth -> Sun -> Black Hole) */}
              <div
                id="lab-tour"
                ref={odysseyLeftPanelRef}
                className="odyssey-left-panel absolute inset-0 flex flex-col justify-center space-y-3.5 pointer-events-auto"
                style={{ opacity: 0, visibility: 'hidden' }}
              >
                <div className="cosmic-glass rounded-2xl px-4 py-2.5 bg-[#070b1a]/82 backdrop-blur-sm border border-white/15 flex flex-wrap items-center justify-between gap-3 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 40 40" className="w-10 h-10 -rotate-90" aria-hidden="true">
                        <circle
                          cx="20"
                          cy="20"
                          r="16"
                          fill="none"
                          stroke="rgba(255,255,255,0.12)"
                          strokeWidth="2.5"
                        />
                        <circle
                          ref={odysseyRingRef}
                          cx="20"
                          cy="20"
                          r="16"
                          fill="none"
                          stroke="#fbbf24"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          pathLength={1}
                          strokeDasharray="1"
                          strokeDashoffset="1"
                        />
                      </svg>
                      <span
                        ref={actLabelRef}
                        className="absolute text-[9px] font-mono font-bold text-amber-300"
                      >
                        01/04
                      </span>
                    </div>

                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-sky-300">
                        Chuyên đề Trực quan 3D
                      </div>
                      <span
                        ref={actConceptRef}
                        className="block text-xs sm:text-sm font-semibold text-white"
                      >
                        Giếng Không–Thời gian
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {COSMIC_ERAS.map((era, i) => (
                      <button
                        key={era.id}
                        ref={(el) => {
                          actButtonsRef.current[i] = el;
                        }}
                        type="button"
                        onClick={() => jumpToOdysseyAct(i)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all border ${
                          i === 0
                            ? 'bg-amber-400/20 text-amber-200 border-amber-400/50'
                            : 'bg-white/[0.04] text-slate-400 border-white/10 hover:text-white'
                        }`}
                      >
                        {era.step}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="odyssey-cards-stack relative h-[430px] sm:h-[445px] perspective-[1400px]">
                  {COSMIC_ERAS.map((era) => {
                    const accentBadges: Record<CosmicEra['accent'], string> = {
                      violet: 'bg-indigo-500/20 text-indigo-200 border-indigo-400/35',
                      cyan: 'bg-sky-500/20 text-sky-200 border-sky-400/35',
                      gold: 'bg-amber-500/20 text-amber-200 border-amber-400/35',
                      emerald: 'bg-emerald-500/20 text-emerald-200 border-emerald-400/35',
                    };

                    return (
                      <article
                        key={era.id}
                        className="odyssey-era-card cosmic-glass absolute inset-0 rounded-[26px] p-5 sm:p-6 bg-[#070b1c]/85 backdrop-blur-sm border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_28px_70px_-15px_rgba(0,0,0,0.92)] flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <span
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border ${accentBadges[era.accent]}`}
                            >
                              <span className="font-bold">CHẶNG {era.step}</span>
                              <span>•</span>
                              <span>{era.gradeRange}</span>
                            </span>
                            <span className="text-[11px] font-mono text-slate-300 bg-white/[0.05] px-2 py-0.5 rounded-lg border border-white/10">
                              {era.formula}
                            </span>
                          </div>

                          <div className="mb-3 rounded-2xl bg-[#03050f]/90 border border-white/10 p-2 overflow-hidden">
                            <EraPhysicsSvg eraId={era.id} />
                          </div>

                          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1.5">
                            {era.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed line-clamp-3">
                            {era.desc}
                          </p>
                        </div>

                        <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/10">
                          <span className="text-[11px] font-mono text-sky-300">
                            {era.concept}
                          </span>

                          <button
                            type="button"
                            onClick={() => {
                              handleSelectGrade(era.targetGrade);
                              scrollToSection('curriculum-app');
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/[0.06] hover:bg-amber-400/20 border border-white/15 hover:border-amber-400/40 text-amber-200 transition-colors"
                          >
                            <span>Học Lớp {era.targetGrade}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT 7 COLS: Completely open & borderless stage so ONLY the pure 3D model is displayed */}
            <div className="lg:col-span-7 h-[320px] sm:h-[420px] lg:h-[580px] pointer-events-none" />
          </div>
        </section>

        {/* ================================================================
            COMPACT KINETIC TYPOGRAPHY BRIDGE + EVENT HORIZON BEAM
        ================================================================ */}
        <section
          id="kinetic-bridge"
          ref={kineticSectionRef}
          className="relative w-full z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-10 overflow-x-clip"
        >
          <div className="max-w-5xl mx-auto text-center space-y-6 perspective-[900px]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/15 text-xs font-mono text-sky-300">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>KẾT NỐI MÔ PHỎNG VỚI CHƯƠNG TRÌNH PHỔ THÔNG</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[2.85rem] font-bold tracking-tight leading-[1.35] text-white flex flex-wrap justify-center gap-x-3 gap-y-2 py-2">
              {KINETIC_STATEMENT_WORDS.map((word, idx) => (
                <span
                  key={`${word}-${idx}`}
                  className={`kinetic-word inline-block py-2 -my-1.5 px-0.5 ${
                    idx >= 12
                      ? 'bg-gradient-to-r from-amber-300 to-sky-400 bg-clip-text text-transparent'
                      : ''
                  }`}
                >
                  {word}
                </span>
              ))}
            </h2>

            <div className="relative h-px max-w-4xl mx-auto">
              <div className="kinetic-beam h-[2px] w-full origin-center bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_24px_rgba(245,158,11,0.8)]" />
              <div className="kinetic-beam h-px w-2/3 mx-auto -mt-px origin-center bg-gradient-to-r from-transparent via-sky-300 to-transparent opacity-80" />
            </div>
          </div>
        </section>

        {/* ================================================================
            SECTION 3: 3D UNFOLDING CURRICULUM COMMAND DECK (6–12)
        ================================================================ */}
        <section
          id="curriculum-app"
          ref={curriculumSectionRef}
          className="relative w-full z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-10 perspective-[1600px] overflow-x-clip"
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
              <div className="space-y-2.5 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/25 text-amber-300 text-xs font-mono uppercase tracking-wider">
                  <Atom className="w-3.5 h-3.5" />
                  <span>Hệ thống Tri thức Phổ thông 6–12</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  Giáo Trình Vật Lý Lớp 6 – Lớp 12
                </h2>
                <p className="text-slate-300/90 text-sm sm:text-base">
                  Chọn khối lớp để mở khóa toàn bộ chuyên đề, mô phỏng trực quan, bộ trắc nghiệm phân tầng và đề thi chuẩn chương.
                </p>
              </div>

              <div
                role="tablist"
                aria-label="Chọn khối lớp 6 đến 12"
                className="cosmic-glass inline-flex flex-wrap items-center gap-1 p-1.5 rounded-2xl bg-[#070b1a]/80 backdrop-blur-sm border border-white/15"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeGrade === 'all'}
                  onClick={() => handleSelectGrade('all')}
                  className={`relative px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                    activeGrade === 'all' ? 'text-slate-950' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {activeGrade === 'all' && (
                    <motion.span
                      layoutId="cosmicGradePill"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-300 to-orange-400 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                    />
                  )}
                  <span className="relative z-10">Tất cả</span>
                </button>
                {allGrades.map((g) => {
                  const isActive = g.grade_number === activeGrade;
                  return (
                    <button
                      key={g.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => handleSelectGrade(g.grade_number)}
                      className={`relative px-3 sm:px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                        isActive ? 'text-slate-950' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="cosmicGradePill"
                          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-300 to-orange-400 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                        />
                      )}
                      <span className="relative z-10">Lớp {g.grade_number}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {(activeGrade === 'all' || currentBoard) && (
              <div
                ref={curriculumDeckRef}
                className="cosmic-glass rounded-[28px] p-5 sm:p-8 bg-[#080d20]/84 backdrop-blur-sm border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_28px_90px_-20px_rgba(0,0,0,0.95)]"
              >
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 pb-6 mb-6 border-b border-white/10">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-indigo-500/20 text-indigo-200 border border-indigo-400/30">
                        {activeGrade === 'all'
                          ? 'THCS & THPT • TOÀN CẤP (LỚP 6 – 12)'
                          : currentBoard?.grade.level_group}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {activeGrade === 'all'
                          ? 'Toàn bộ Giáo trình Vật Lý Lớp 6 – Lớp 12'
                          : currentBoard?.grade.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-300/85 max-w-3xl">
                      {activeGrade === 'all'
                        ? 'Tổng hợp đầy đủ 7 khối lớp chuẩn GDPT 2018 — chọn nhanh một khối lớp hoặc duyệt toàn bộ các chương học bên dưới.'
                        : currentBoard?.grade.subtitle || currentBoard?.grade.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <div className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-4">
                      <div>
                        <div className="text-[10px] font-mono uppercase text-slate-400">
                          Hoàn thành
                        </div>
                        <div className="text-base font-bold text-sky-300 tabular-nums">
                          <AnimatedCount
                            value={
                              activeGrade === 'all'
                                ? allGradesSummary.completedTopics
                                : (gradeStats?.completed_topics ?? 0)
                            }
                          />
                          /
                          {activeGrade === 'all'
                            ? allGradesSummary.totalTopics
                            : (gradeStats?.total_topics ?? 0)}{' '}
                          bài
                        </div>
                      </div>
                      <div className="h-7 w-px bg-white/10" />
                      <div>
                        <div className="text-[10px] font-mono uppercase text-slate-400">
                          Số chương
                        </div>
                        <div className="text-base font-bold text-amber-300 tabular-nums">
                          <AnimatedCount value={activeChaptersPool.length} /> chương
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => scrollToSection('ecosystem')}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-medium bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-slate-100 transition-colors"
                    >
                      <Printer className="w-3.5 h-3.5 text-sky-300" />
                      <span>
                        {activeGrade === 'all' ? 'Cẩm nang 6–12' : `Cẩm nang Lớp ${activeGrade}`}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => scrollToSection('ecosystem')}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-medium bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-slate-100 transition-colors"
                    >
                      <AlertCircle className="w-3.5 h-3.5 text-amber-300" />
                      <span>
                        {activeGrade === 'all' ? 'Sổ lỗi 6–12' : `Sổ lỗi Lớp ${activeGrade}`}
                      </span>
                    </button>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {activeGrade === 'all' ? (
                    <motion.div
                      key="all-grades-bento"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5"
                    >
                      {allGradesSummary.boardsList.map((b) => {
                        const visibleChapters = b.chapters.slice(0, 3);
                        const extraChapters = Math.max(0, b.chapters.length - visibleChapters.length);
                        const completion = b.stats?.completion_rate ?? 0;
                        return (
                          <div
                            key={b.grade.id}
                            className="group rounded-2xl bg-[#040713]/85 border border-white/10 hover:border-amber-400/35 p-3.5 flex flex-col justify-between gap-3 transition-all"
                          >
                            <div className="space-y-2.5">
                              <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-2">
                                  <span className="text-base font-bold text-white">
                                    Lớp {b.grade.grade_number}
                                  </span>
                                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.06] text-slate-300 border border-white/10">
                                    {b.grade.level_group}
                                  </span>
                                </div>
                                <span className="text-[11px] font-mono font-semibold text-amber-300">
                                  {completion}%
                                </span>
                              </div>

                              <div>
                                <div className="text-xs font-medium text-slate-200 line-clamp-1">
                                  {b.grade.title}
                                </div>
                                <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                                  {b.chapters.length} chương • {b.stats?.total_topics ?? 0} chủ đề
                                </div>
                              </div>

                              <div className="space-y-1.5 pt-1">
                                {visibleChapters.map((ch) => (
                                  <Link
                                    key={ch.id}
                                    href={`/chapter/${ch.id}`}
                                    onClick={markReturnToCurriculum}
                                    className="w-full text-left flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-xl bg-white/[0.03] hover:bg-amber-400/12 border border-white/[0.06] hover:border-amber-400/30 transition-all"
                                  >
                                    <span className="text-xs text-slate-300 hover:text-white truncate">
                                      <span className="font-mono text-sky-300 mr-1.5">
                                        {ch.code}
                                      </span>
                                      {ch.title}
                                    </span>
                                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                                  </Link>
                                ))}
                                {extraChapters > 0 && (
                                  <div className="text-[11px] font-mono text-slate-500 px-1">
                                    +{extraChapters} chương khác
                                  </div>
                                )}
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => handleSelectGrade(b.grade.grade_number)}
                              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-amber-400/12 hover:bg-amber-400/22 border border-amber-400/30 text-amber-200 transition-colors"
                            >
                              <span>Xem chi tiết Lớp {b.grade.grade_number}</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        );
                      })}
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`${activeGrade}-${selectedChapterId}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      {/* Interactive Chapter Filter Tabs for Selected Grade */}
                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedChapterId('all')}
                          className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                            selectedChapterId === 'all'
                              ? 'bg-sky-400/20 text-sky-200 border-sky-400/50'
                              : 'bg-white/[0.03] text-slate-300 border-white/10 hover:text-white'
                          }`}
                        >
                          Tất cả ({activeChaptersPool.length} chương)
                        </button>
                        {activeChaptersPool.map((ch) => {
                          const active = selectedChapterId === ch.id;
                          return (
                            <button
                              key={ch.id}
                              type="button"
                              onClick={() => setSelectedChapterId(ch.id)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all truncate max-w-[260px] ${
                                active
                                  ? 'bg-amber-400/20 text-amber-200 border-amber-400/50'
                                  : 'bg-white/[0.03] text-slate-300 border-white/10 hover:text-white'
                              }`}
                            >
                              <span className="font-mono opacity-75 mr-1">{ch.code}:</span>
                              <span>{ch.title}</span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="space-y-8">
                        {displayedChapters.map((chapter) => {
                          const topics = chapter.topics ?? [];
                          return (
                            <div
                              key={chapter.id}
                              className="rounded-2xl bg-[#040713]/80 border border-white/10 p-5 sm:p-6"
                            >
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                                <div>
                                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-amber-300 mb-1">
                                    <span>{chapter.code}</span>
                                    <span className="text-slate-600">•</span>
                                    <span className="text-slate-400">
                                      {topics.length} chủ đề • {chapter.chapter_question_count ?? 0} câu hỏi
                                    </span>
                                  </div>
                                  <h4 className="text-lg sm:text-xl font-bold text-white">
                                    {chapter.title}
                                  </h4>
                                </div>

                                <div className="flex flex-wrap items-center gap-2 shrink-0">
                                  <Link
                                    href={`/chapter/${chapter.id}`}
                                    onClick={markReturnToCurriculum}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-white/[0.05] hover:bg-white/[0.1] border border-white/12 text-slate-200 transition-colors"
                                  >
                                    <BookOpen className="w-3.5 h-3.5 text-sky-300" />
                                    <span>Tổng hợp chương</span>
                                  </Link>
                                  <Link
                                    href={`/chapter/${chapter.id}?tab=exam`}
                                    onClick={markReturnToCurriculum}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-400/15 hover:bg-amber-400/25 border border-amber-400/35 text-amber-200 transition-colors"
                                  >
                                    <FileCheck className="w-3.5 h-3.5" />
                                    <span>Thi thử chương</span>
                                  </Link>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                                {topics.map((topic) => (
                                  <Link
                                    key={topic.id}
                                    href={`/topic/${topic.id}`}
                                    onClick={markReturnToCurriculum}
                                    onPointerMove={handleTopicPointerMove}
                                    className="group relative rounded-2xl p-4 bg-white/[0.03] hover:bg-white/[0.055] border border-white/10 hover:border-sky-400/40 transition-all overflow-hidden flex flex-col justify-between gap-3"
                                  >
                                    <div
                                      aria-hidden="true"
                                      className="cosmic-topic-glow pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />

                                    <div className="relative z-10 space-y-2">
                                      <div className="flex items-center justify-between gap-2">
                                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.06] text-sky-300 border border-white/10">
                                          {topic.code}
                                        </span>
                                        {topic.is_completed ? (
                                          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-300">
                                            <CheckCircle2 className="w-3.5 h-3.5" />
                                            Đã xong
                                          </span>
                                        ) : (
                                          <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-300 transition-colors" />
                                        )}
                                      </div>

                                      <h5 className="font-semibold text-sm sm:text-[15px] text-white group-hover:text-amber-200 transition-colors line-clamp-2">
                                        {topic.title}
                                      </h5>

                                      {topic.overview && (
                                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                                          {topic.overview}
                                        </p>
                                      )}
                                    </div>

                                    <div className="relative z-10 flex items-center justify-between gap-2 pt-2.5 border-t border-white/[0.07] text-[11px] font-mono text-slate-400">
                                      <span>{topic.formula_count} công thức</span>
                                      <span>{topic.question_count} trắc nghiệm</span>
                                      {topic.best_quiz_score != null && (
                                        <span className="text-amber-300 font-semibold">
                                          Max {topic.best_quiz_score}%
                                        </span>
                                      )}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </section>

        {/* ================================================================
            SECTION 4: PINNED HORIZONTAL SCROLL ORBITAL DOCK (#ecosystem)
        ================================================================ */}
        <section
          id="ecosystem"
          ref={ecosystemSectionRef}
          className="relative w-full z-10 md:h-screen flex flex-col justify-center pt-16 pb-6 md:py-0 px-4 sm:px-6 lg:px-10 border-t border-white/[0.07] overflow-hidden bg-[#03040b]/95"
        >
          <div className="max-w-[1440px] w-full mx-auto space-y-5 lg:space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-400/25 text-indigo-300 text-xs font-mono uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Trạm Mô-đun Vật lý 360°</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                  8 Công cụ Phân tích &amp; Khảo thí Chuyên sâu
                </h2>
              </div>
              <div className="text-xs font-mono text-slate-400 md:text-right space-y-0.5">
                <div className="text-amber-300 font-semibold hidden md:block">
                  CUỘN XUỐNG ĐỂ TRƯỢT NGANG TRẠM (01 → 08) →
                </div>
                <div>Liên kết trực tiếp với toàn bộ dữ liệu Lớp 6–12</div>
              </div>
            </div>

            <div
              ref={ecosystemTrackRef}
              className="grid grid-cols-1 md:flex md:flex-nowrap gap-5 md:w-max py-1"
            >
              {UTILITY_MODULES.map((mod) => {
                const Icon = mod.icon;
                const toneRing =
                  mod.tone === 'gold'
                    ? 'hover:border-amber-400/50 text-amber-300'
                    : mod.tone === 'cyan'
                    ? 'hover:border-sky-400/50 text-sky-300'
                    : 'hover:border-indigo-400/50 text-indigo-300';

                return (
                  <Link
                    key={mod.href}
                    href={mod.href}
                    onClick={markReturnToCurriculum}
                    onPointerMove={handleDockCardPointerMove}
                    onPointerLeave={handleDockCardPointerLeave}
                    className={`orbital-module-card orbital-tilt-card cosmic-glass group relative md:w-[320px] lg:w-[350px] xl:w-[380px] min-h-[250px] md:h-[275px] lg:h-[295px] shrink-0 rounded-[26px] p-6 bg-[#080d22]/85 backdrop-blur-sm border border-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_20px_50px_-15px_rgba(0,0,0,0.85)] flex flex-col justify-between overflow-hidden ${toneRing}`}
                  >
                    <div
                      aria-hidden="true"
                      className="cosmic-topic-glow pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />

                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-2 -bottom-5 font-mono font-black text-[5.5rem] leading-none text-white/[0.035] group-hover:text-white/[0.06] transition-colors select-none"
                    >
                      {mod.num}
                    </span>

                    <div className="relative z-10 flex items-start justify-between gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/15 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/[0.05] text-slate-300 border border-white/10">
                        {mod.tag}
                      </span>
                    </div>

                    <div className="relative z-10 space-y-2 pr-4">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-200 transition-colors flex items-center justify-between gap-2">
                        <span>{mod.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-300 shrink-0 transition-colors" />
                      </h3>
                      <p className="text-sm text-slate-300/85 leading-relaxed line-clamp-3">
                        {mod.desc}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="hidden md:flex items-center gap-4 pt-1">
              <span className="text-[11px] font-mono text-slate-400 shrink-0">MÔ-ĐUN 01</span>
              <div className="relative flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div
                  ref={ecosystemProgressRef}
                  className="h-full w-full origin-left bg-gradient-to-r from-indigo-400 via-sky-400 to-amber-400"
                  style={{ transform: 'scaleX(0.04)' }}
                />
              </div>
              <span className="text-[11px] font-mono text-amber-300 shrink-0">08 / 08</span>
            </div>
          </div>
        </section>

        {/* ================================================================
            COSMIC ARCHITECTURAL FOOTER
        ================================================================ */}
        <footer className="relative w-full z-10 border-t border-white/10 bg-[#020309]/95 py-10 px-4 sm:px-6 lg:px-10">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 font-semibold text-white">
                <Orbit className="w-4 h-4 text-amber-400" />
                <span>eduPhysics 6–12 • GDPT 2018</span>
              </div>
              <p className="text-xs text-slate-400">
                Nền tảng học tập &amp; mô phỏng trực quan Vật lý Phổ thông Lớp 6 đến Lớp 12.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  handleSelectGrade('all');
                  scrollToSection('curriculum-app');
                }}
                className={`px-3 py-1 rounded-lg text-xs font-mono border transition-colors ${
                  activeGrade === 'all'
                    ? 'bg-amber-400/15 border-amber-400/40 text-amber-200'
                    : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                Tất cả
              </button>
              {allGrades.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => {
                    handleSelectGrade(g.grade_number);
                    scrollToSection('curriculum-app');
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-mono border transition-colors ${
                    activeGrade === g.grade_number
                      ? 'bg-amber-400/15 border-amber-400/40 text-amber-200'
                      : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  Lớp {g.grade_number}
                </button>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}

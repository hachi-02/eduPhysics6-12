'use client';

import React, { useState, useEffect } from 'react';
import { Atom } from 'lucide-react';

interface GradeHeroBackdropProps {
  grade: number;
}

const GRADE_VIDEO_CONFIG: Record<
  number,
  {
    videoSrc: string;
    posterSrc: string;
    leftVignette: string;
    bottomVignette: string;
    topRightOrb: string;
    bottomRightOrb: string;
  }
> = {
  6: {
    videoSrc: '/themes/grade-6-water-hero.mp4',
    posterSrc: '/themes/grade-6-water-hero.jpg',
    leftVignette:
      'linear-gradient(90deg, rgba(2, 12, 27, 0.94) 0%, rgba(3, 22, 45, 0.78) 36%, rgba(4, 34, 62, 0.15) 56%, transparent 68%)',
    bottomVignette:
      'linear-gradient(180deg, rgba(2, 12, 27, 0.12) 0%, transparent 45%, rgba(2, 14, 30, 0.62) 100%)',
    topRightOrb: 'bg-cyan-400/20',
    bottomRightOrb: 'bg-teal-400/15',
  },
  7: {
    videoSrc: '/themes/grade-7-earth-hero.mp4?v=5',
    posterSrc: '/themes/grade-7-earth-hero.jpg',
    leftVignette:
      'linear-gradient(90deg, rgba(3, 9, 26, 0.94) 0%, rgba(6, 18, 48, 0.75) 36%, rgba(12, 32, 78, 0.12) 55%, transparent 66%)',
    bottomVignette:
      'linear-gradient(180deg, rgba(3, 9, 26, 0.10) 0%, transparent 50%, rgba(4, 12, 34, 0.55) 100%)',
    topRightOrb: 'bg-amber-400/20',
    bottomRightOrb: 'bg-blue-500/20',
  },
  8: {
    videoSrc: '/themes/grade-8-lightning-hero.mp4?v=2',
    posterSrc: '/themes/grade-8-lightning-hero.jpg',
    leftVignette:
      'linear-gradient(90deg, rgba(7, 4, 24, 0.94) 0%, rgba(18, 9, 46, 0.78) 36%, rgba(36, 16, 84, 0.15) 56%, transparent 68%)',
    bottomVignette:
      'linear-gradient(180deg, rgba(7, 4, 24, 0.12) 0%, transparent 45%, rgba(10, 5, 30, 0.62) 100%)',
    topRightOrb: 'bg-cyan-400/20',
    bottomRightOrb: 'bg-violet-500/20',
  },
  9: {
    videoSrc: '/themes/grade-9-saturn-hero.mp4?v=1',
    posterSrc: '/themes/grade-9-saturn-hero.jpg',
    leftVignette:
      'linear-gradient(90deg, rgba(2, 6, 17, 0.94) 0%, rgba(8, 17, 38, 0.76) 35%, rgba(15, 23, 42, 0.12) 55%, transparent 66%)',
    bottomVignette:
      'linear-gradient(180deg, rgba(2, 6, 17, 0.10) 0%, transparent 50%, rgba(3, 8, 22, 0.58) 100%)',
    topRightOrb: 'bg-amber-500/20',
    bottomRightOrb: 'bg-slate-800/30',
  },
  10: {
    videoSrc: '/themes/grade-10-sun-hero.mp4?v=1',
    posterSrc: '/themes/grade-10-sun-hero.jpg',
    leftVignette:
      'linear-gradient(90deg, rgba(12, 3, 4, 0.94) 0%, rgba(28, 7, 8, 0.78) 36%, rgba(60, 14, 10, 0.14) 56%, transparent 68%)',
    bottomVignette:
      'linear-gradient(180deg, rgba(12, 3, 4, 0.10) 0%, transparent 50%, rgba(18, 4, 5, 0.60) 100%)',
    topRightOrb: 'bg-orange-500/20',
    bottomRightOrb: 'bg-red-600/20',
  },
  11: {
    videoSrc: '/themes/grade-11-neutron-hero.mp4?v=1',
    posterSrc: '/themes/grade-11-neutron-hero.jpg',
    leftVignette:
      'linear-gradient(90deg, rgba(5, 2, 18, 0.94) 0%, rgba(14, 6, 38, 0.78) 36%, rgba(28, 12, 64, 0.15) 56%, transparent 68%)',
    bottomVignette:
      'linear-gradient(180deg, rgba(5, 2, 18, 0.12) 0%, transparent 45%, rgba(8, 3, 24, 0.62) 100%)',
    topRightOrb: 'bg-cyan-400/20',
    bottomRightOrb: 'bg-purple-600/20',
  },
  12: {
    videoSrc: '/themes/grade-12-blackhole-hero.mp4?v=1',
    posterSrc: '/themes/grade-12-blackhole-hero.jpg?v=1',
    leftVignette:
      'linear-gradient(90deg, rgba(3, 1, 10, 0.94) 0%, rgba(16, 4, 30, 0.78) 36%, rgba(36, 8, 48, 0.15) 56%, transparent 68%)',
    bottomVignette:
      'linear-gradient(180deg, rgba(3, 1, 10, 0.12) 0%, transparent 45%, rgba(8, 2, 18, 0.62) 100%)',
    topRightOrb: 'bg-orange-500/20',
    bottomRightOrb: 'bg-purple-800/25',
  },
};

export function GradeHeroBackdrop({ grade }: GradeHeroBackdropProps) {
  const [activeGrade, setActiveGrade] = useState<number>(grade);
  const [prevGrade, setPrevGrade] = useState<number | null>(null);

  useEffect(() => {
    if (grade !== activeGrade) {
      setPrevGrade(activeGrade);
      setActiveGrade(grade);

      const timer = setTimeout(() => {
        setPrevGrade(null);
      }, 750);

      return () => clearTimeout(timer);
    }
  }, [grade, activeGrade]);

  const activeCfg = GRADE_VIDEO_CONFIG[activeGrade] || GRADE_VIDEO_CONFIG[6];
  const prevCfg = prevGrade !== null ? GRADE_VIDEO_CONFIG[prevGrade] : null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
      {/* Previous Grade Video (Underneath at z-0 during 750ms cross-fade) */}
      {prevCfg && (
        <div key={`hero-prev-${prevGrade}`} className="pointer-events-none absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={prevCfg.posterSrc}
            className="h-full w-full object-cover object-right scale-[1.02]"
          >
            <source src={prevCfg.videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: prevCfg.leftVignette }} />
          <div className="absolute inset-0" style={{ background: prevCfg.bottomVignette }} />
        </div>
      )}

      {/* Active Grade Video (Smoothly Fades in from opacity-0 to opacity-100 at z-10) */}
      <div
        key={`hero-active-${activeGrade}`}
        className="pointer-events-none absolute inset-0 z-10 animate-video-dissolve"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={activeCfg.posterSrc}
          className="h-full w-full object-cover object-right scale-[1.02]"
        >
          <source src={activeCfg.videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: activeCfg.leftVignette }} />
        <div className="absolute inset-0" style={{ background: activeCfg.bottomVignette }} />
      </div>

      {/* Ambient Cosmic Aurora Glow Orbs */}
      <div
        className={`pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full blur-3xl transition-all duration-1000 ease-in-out z-20 ${activeCfg.topRightOrb}`}
      />
      <div
        className={`pointer-events-none absolute -bottom-20 right-1/4 h-72 w-72 rounded-full blur-3xl transition-all duration-1000 ease-in-out z-20 ${activeCfg.bottomRightOrb}`}
      />
    </div>
  );
}

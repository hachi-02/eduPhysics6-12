'use client';

import React, { useState, useEffect } from 'react';

interface GradePageWallpaperProps {
  grade: number;
}

const GRADE_PAGE_WALLPAPERS: Record<
  number,
  {
    imageSrc: string;
    overlayGradient: string;
    blendMode?: string;
  }
> = {
  6: {
    imageSrc: '/themes/grade-6-curriculum-bg.jpg',
    overlayGradient:
      'radial-gradient(ellipse at 50% 35%, rgba(2, 16, 28, 0.10) 0%, rgba(3, 24, 42, 0.28) 60%, rgba(1, 10, 18, 0.58) 100%)',
  },
  7: {
    imageSrc: '/themes/grade-7-curriculum-bg.jpg',
    overlayGradient:
      'radial-gradient(ellipse at 50% 35%, rgba(2, 14, 26, 0.10) 0%, rgba(3, 22, 38, 0.28) 60%, rgba(1, 8, 16, 0.58) 100%)',
  },
  8: {
    imageSrc: '/themes/grade-8-curriculum-bg.jpg',
    overlayGradient:
      'radial-gradient(ellipse at 50% 35%, rgba(7, 3, 20, 0.10) 0%, rgba(12, 5, 30, 0.28) 60%, rgba(4, 2, 12, 0.58) 100%)',
  },
  9: {
    imageSrc: '/themes/grade-9-curriculum-bg.jpg',
    overlayGradient:
      'radial-gradient(ellipse at 50% 35%, rgba(18, 9, 3, 0.10) 0%, rgba(12, 6, 2, 0.30) 60%, rgba(6, 3, 1, 0.60) 100%)',
  },
  10: {
    imageSrc: '/themes/grade-10-curriculum-bg.jpg',
    overlayGradient:
      'radial-gradient(ellipse at 50% 35%, rgba(20, 6, 4, 0.10) 0%, rgba(28, 8, 6, 0.28) 60%, rgba(10, 3, 2, 0.58) 100%)',
  },
  11: {
    imageSrc: '/themes/grade-11-curriculum-bg.jpg',
    overlayGradient:
      'radial-gradient(ellipse at 50% 35%, rgba(6, 4, 24, 0.10) 0%, rgba(10, 6, 36, 0.28) 60%, rgba(4, 2, 16, 0.58) 100%)',
  },
  12: {
    imageSrc: '/themes/grade-12-curriculum-bg.jpg',
    overlayGradient:
      'radial-gradient(ellipse at 50% 35%, rgba(12, 3, 22, 0.10) 0%, rgba(18, 5, 34, 0.28) 60%, rgba(6, 1, 14, 0.58) 100%)',
  },
};

export function GradePageWallpaper({ grade }: GradePageWallpaperProps) {
  const [activeGrade, setActiveGrade] = useState<number>(grade);
  const [prevGrade, setPrevGrade] = useState<number | null>(null);

  useEffect(() => {
    if (grade !== activeGrade) {
      setPrevGrade(activeGrade);
      setActiveGrade(grade);
      const timer = setTimeout(() => {
        setPrevGrade(null);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [grade, activeGrade]);

  const activeCfg = GRADE_PAGE_WALLPAPERS[activeGrade];
  const prevCfg = prevGrade !== null ? GRADE_PAGE_WALLPAPERS[prevGrade] : null;

  if (!activeCfg && !prevCfg) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden transition-opacity duration-700 ease-in-out"
    >
      {/* Previous Wallpaper during fade-out */}
      {prevCfg && (
        <div
          key={`wall-prev-${prevGrade}`}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 opacity-0"
          style={{
            backgroundImage: `url('${prevCfg.imageSrc}')`,
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0" style={{ background: prevCfg.overlayGradient }} />
        </div>
      )}

      {/* Active Wallpaper fade-in */}
      {activeCfg && (
        <div
          key={`wall-active-${activeGrade}`}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in"
          style={{
            backgroundImage: `url('${activeCfg.imageSrc}')`,
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0" style={{ background: activeCfg.overlayGradient }} />
        </div>
      )}
    </div>
  );
}

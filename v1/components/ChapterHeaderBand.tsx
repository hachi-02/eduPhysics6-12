'use client';

import React, { useState, useEffect } from 'react';
import { isValidGradeNumber } from '@/lib/grade-context';
import { getGradeChapterTheme, ChapterTheme } from '@/lib/grade-themes';

interface ChapterHeaderBandProps {
  grade: number;
  children: React.ReactNode;
  className?: string;
}

export function ChapterHeaderBand({
  grade,
  children,
  className = '',
}: ChapterHeaderBandProps) {
  const [activeGrade, setActiveGrade] = useState<number>(grade);
  const [prevGrade, setPrevGrade] = useState<number>(grade);

  useEffect(() => {
    if (grade !== activeGrade) {
      setPrevGrade(activeGrade);
      setActiveGrade(grade);
    }
  }, [grade, activeGrade]);

  useEffect(() => {
    if (activeGrade !== prevGrade) {
      const timer = setTimeout(() => {
        setPrevGrade(activeGrade);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [activeGrade, prevGrade]);

  // Sync immediately with grade-change events so the chapter band cross-fades synchronously with the header
  useEffect(() => {
    const onGradeChange = (e: Event) => {
      const custom = e as CustomEvent<{ grade?: number }>;
      if (custom.detail?.grade && isValidGradeNumber(custom.detail.grade)) {
        if (custom.detail.grade !== activeGrade) {
          setPrevGrade(activeGrade);
          setActiveGrade(custom.detail.grade);
        }
      }
    };
    window.addEventListener('eduphysics-grade-change', onGradeChange);
    return () => window.removeEventListener('eduphysics-grade-change', onGradeChange);
  }, [activeGrade]);

  const prevTheme = getGradeChapterTheme(prevGrade);

  return (
    <div
      className={`relative overflow-hidden rounded-t-3xl px-5 py-5 text-white sm:px-7 ${className}`}
    >
      {/* LAYER 1: Solid Base Layer of Previous Grade (100% OPAQUE)
          Matches SiteHeader! Stays 100% solid and visible while the new grade dissolves in */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${prevTheme.header} z-0`}
      />

      {/* LAYER 2: Smooth Cross-Fade Active Grade Theme Layer */}
      {[6, 7, 8, 9, 10, 11, 12].map((g) => {
        const theme = getGradeChapterTheme(g);
        const isCurrent = g === activeGrade;
        return (
          <div
            key={g}
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 ${theme.header} transition-opacity duration-700 ease-in-out ${
              isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        );
      })}

      {/* LAYER 3: Ambient Glow Orbs & Light Reflections */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-t-3xl z-20">
        {[6, 7, 8, 9, 10, 11, 12].map((g) => {
          const theme = getGradeChapterTheme(g);
          const isCurrent = g === activeGrade;
          return (
            <div
              key={g}
              className={`absolute -right-10 -top-16 h-52 w-52 rounded-full blur-2xl ${theme.glow} transition-opacity duration-700 ease-in-out ${
                isCurrent ? 'opacity-100' : 'opacity-0'
              }`}
            />
          );
        })}
        <div className="absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        {/* Soft specular water reflection */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/15 via-white/5 to-transparent" />
      </div>

      {/* LAYER 4: Foreground Interactive Content */}
      <div className="relative z-30 flex flex-wrap items-center justify-between gap-4">
        {children}
      </div>
    </div>
  );
}

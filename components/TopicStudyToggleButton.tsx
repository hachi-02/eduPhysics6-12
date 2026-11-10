'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2, Circle } from 'lucide-react';

interface TopicStudyToggleButtonProps {
  topicId: number;
  initialCompleted: boolean;
  variant?: 'row' | 'header' | 'footer';
}

export function TopicStudyToggleButton({
  topicId,
  initialCompleted,
  variant = 'row',
}: TopicStudyToggleButtonProps) {
  const router = useRouter();
  const [completed, setCompleted] = useState<boolean>(initialCompleted);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setCompleted(initialCompleted);
  }, [initialCompleted]);

  const handleToggle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (loading) return;

    const nextState = !completed;
    setCompleted(nextState);
    setLoading(true);

    try {
      const res = await fetch('/api/progress/checkin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicId,
          completed: nextState,
        }),
      });
      if (res.ok) {
        router.refresh();
      } else {
        setCompleted(!nextState);
      }
    } catch {
      setCompleted(!nextState);
    } finally {
      setLoading(false);
    }
  };

  if (variant === 'header') {
    return (
      <button
        type="button"
        onClick={handleToggle}
        disabled={loading}
        title={completed ? 'Bấm để đổi về Chưa học' : 'Bấm để đánh dấu Đã học chủ đề này'}
        className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-1.5 text-xs font-extrabold transition duration-150 ease-snap ${
          completed
            ? 'border-emerald-300 bg-emerald-500 text-white shadow-soft hover:bg-emerald-600'
            : 'border-white/30 bg-white/15 text-white backdrop-blur hover:bg-white/25'
        } ${loading ? 'opacity-70' : ''}`}
      >
        {completed ? (
          <>
            <CheckCircle2 className="h-4 w-4" />
            <span>Đã học</span>
          </>
        ) : (
          <>
            <Circle className="h-4 w-4" />
            <span>Đánh dấu đã học</span>
          </>
        )}
      </button>
    );
  }

  if (variant === 'footer') {
    return (
      <button
        type="button"
        onClick={handleToggle}
        disabled={loading}
        className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-extrabold shadow-soft transition duration-150 ease-snap sm:text-sm ${
          completed
            ? 'border-emerald-300 bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
            : 'border-slate-200 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50/60 hover:text-emerald-700'
        } ${loading ? 'opacity-70' : ''}`}
      >
        {completed ? (
          <>
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span>Đã học chủ đề này (Bấm để hoàn tác)</span>
          </>
        ) : (
          <>
            <Circle className="h-4 w-4 text-slate-400" />
            <span>Đánh dấu đã học</span>
          </>
        )}
      </button>
    );
  }

  // Default: variant === 'row' (Used on the Curriculum Topic List in app/page.tsx)
  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={loading}
      title={completed ? 'Đã học (Bấm để chuyển về Chưa học)' : 'Chưa học (Bấm để đánh dấu Đã học)'}
      className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-bold transition duration-150 ease-snap ${
        completed
          ? 'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
          : 'border-slate-200 bg-slate-100/90 text-slate-500 hover:border-emerald-200 hover:bg-emerald-50/70 hover:text-emerald-700'
      } ${loading ? 'opacity-70' : ''}`}
    >
      {completed ? (
        <>
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
          <span>Đã học</span>
        </>
      ) : (
        <>
          <Circle className="h-3.5 w-3.5 text-slate-400" />
          <span>Chưa học</span>
        </>
      )}
    </button>
  );
}

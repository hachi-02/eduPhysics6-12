'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useActiveGrade } from '@/lib/use-active-grade';
import { getGradePageTheme } from '@/lib/grade-themes';

export interface DropdownItem {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  badge?: string | number;
  danger?: boolean;
  divider?: boolean;
  active?: boolean;
}

interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  align?: 'left' | 'right';
  className?: string;
  menuWidth?: string;
}

export function DropdownMenu({
  trigger,
  items,
  align = 'right',
  className = '',
  menuWidth = 'w-56',
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left?: number; right?: number; maxHeight: number }>({
    top: 0,
    left: 0,
    maxHeight: 288,
  });
  const menuRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const activeGrade = useActiveGrade();
  const theme = getGradePageTheme(activeGrade);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updatePosition = useCallback(() => {
    if (!menuRef.current) return;
    const rect = menuRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom - 16;
    const maxHeight = Math.max(180, Math.min(300, spaceBelow));
    if (align === 'right') {
      setCoords({
        top: rect.bottom + 8,
        right: Math.max(12, window.innerWidth - rect.right),
        maxHeight,
      });
    } else {
      setCoords({
        top: rect.bottom + 8,
        left: Math.max(12, Math.min(rect.left, window.innerWidth - 280)),
        maxHeight,
      });
    }
  }, [align]);

  useEffect(() => {
    if (!isOpen) return;
    updatePosition();

    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        (!portalRef.current || !portalRef.current.contains(target))
      ) {
        setIsOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isOpen, updatePosition]);

  const triggerElement = React.isValidElement(trigger)
    ? React.cloneElement(trigger as React.ReactElement<any>, {
        onClick: (e: React.MouseEvent) => {
          (trigger.props as any)?.onClick?.(e);
          setIsOpen((prev) => !prev);
        },
        'aria-expanded': isOpen,
        'aria-haspopup': 'menu',
      })
    : (
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
      >
        {trigger}
      </button>
    );

  return (
    <div className={`relative inline-block text-left ${className}`} ref={menuRef}>
      {triggerElement}

      {isOpen &&
        mounted &&
        createPortal(
          <div
            ref={portalRef}
            style={{
              top: coords.top,
              left: coords.left,
              right: coords.right,
              maxHeight: coords.maxHeight,
            }}
            className={`fixed z-[90] origin-top animate-pop ${menuWidth} overflow-y-auto rounded-2xl border border-slate-200/90 bg-white/95 p-1.5 shadow-card backdrop-blur-xl`}
          >
            {items.map((item, idx) => {
              if (item.divider) {
                return <div key={idx} className="my-1 border-t border-slate-100" />;
              }

              const inner = (
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2.5 truncate">
                    {item.icon && <span className="text-slate-500 shrink-0">{item.icon}</span>}
                    <span className="truncate">{item.label}</span>
                  </div>
                  {item.badge !== undefined && (
                    <span
                      className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold ${
                        item.active ? theme.badgeSoft : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
              );

              if (item.href) {
                return (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block cursor-pointer rounded-xl px-3.5 py-2 text-xs font-semibold no-underline transition duration-150 ease-snap ${
                      item.active
                        ? `${theme.highlightBoxSubtle} ${theme.highlightTitle} font-bold`
                        : item.danger
                          ? 'text-rose-600 hover:bg-rose-50'
                          : 'text-slate-700 hover:bg-slate-100/80 hover:text-slate-900'
                    }`}
                  >
                    {inner}
                  </a>
                );
              }

              return (
                <button
                  key={idx}
                  type="button"
                  className={`w-full rounded-xl px-3.5 py-2 text-left text-xs font-semibold transition duration-150 ease-snap focus:outline-none ${
                    item.active
                      ? `${theme.highlightBoxSubtle} ${theme.highlightTitle} font-bold`
                      : item.danger
                        ? 'text-rose-600 hover:bg-rose-50'
                        : 'text-slate-700 hover:bg-slate-100/80 hover:text-slate-900'
                  }`}
                  onClick={() => {
                    setIsOpen(false);
                    if (item.onClick) item.onClick();
                  }}
                >
                  {inner}
                </button>
              );
            })}
          </div>,
          document.body
        )}
    </div>
  );
}

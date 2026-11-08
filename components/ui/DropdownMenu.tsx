'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export interface DropdownItem {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  badge?: string | number;
  danger?: boolean;
  divider?: boolean;
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
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

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

      {isOpen && (
        <div
          className={`absolute z-50 mt-2 origin-top animate-pop ${menuWidth} ${
            align === 'right' ? 'right-0' : 'left-0'
          } rounded-2xl border border-slate-200/90 bg-white/95 p-1.5 shadow-card backdrop-blur-xl focus:outline-none`}
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
                  <span className="rounded-md bg-brand-50 px-1.5 py-0.5 text-[10px] font-bold text-brand-700">
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
                  className={`block cursor-pointer rounded-xl px-3.5 py-2.5 text-xs font-semibold no-underline transition duration-150 ease-snap ${
                    item.danger
                      ? 'text-rose-600 hover:bg-rose-50'
                      : 'text-slate-700 hover:bg-brand-50 hover:text-brand-800'
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
                className={`w-full rounded-xl px-3.5 py-2.5 text-left text-xs font-semibold transition duration-150 ease-snap focus:outline-none ${
                  item.danger
                    ? 'text-rose-600 hover:bg-rose-50'
                    : 'text-slate-700 hover:bg-brand-50 hover:text-brand-800'
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
        </div>
      )}
    </div>
  );
}

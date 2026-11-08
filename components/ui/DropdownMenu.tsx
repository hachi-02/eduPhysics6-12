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

  return (
    <div className={`relative inline-block text-left ${className}`} ref={menuRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-xl"
      >
        {trigger}
      </button>

      {isOpen && (
        <div
          className={`absolute z-50 mt-2 ${menuWidth} ${
            align === 'right' ? 'right-0' : 'left-0'
          } rounded-xl bg-white shadow-xl border border-slate-200/90 py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 animate-in fade-in zoom-in-95 duration-100 origin-top`}
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
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600">
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
                  className={`block px-3.5 py-2 text-xs font-medium cursor-pointer transition-colors no-underline ${
                    item.danger
                      ? 'text-rose-600 hover:bg-rose-50'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
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
                className={`w-full text-left px-3.5 py-2 text-xs font-medium cursor-pointer transition-colors focus:outline-none focus-visible:bg-slate-100 ${
                  item.danger
                    ? 'text-rose-600 hover:bg-rose-50'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
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

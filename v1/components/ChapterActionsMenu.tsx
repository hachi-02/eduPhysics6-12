'use client';

import React from 'react';
import { MoreVertical, Printer, FileText, CheckSquare } from 'lucide-react';
import { DropdownMenu, DropdownItem } from './ui/DropdownMenu';

interface ChapterActionsMenuProps {
  chapterId: number;
  gradeNumber: number;
  chapterTitle: string;
}

export function ChapterActionsMenu({
  chapterId,
  gradeNumber,
  chapterTitle,
}: ChapterActionsMenuProps) {
  const items: DropdownItem[] = [
    {
      label: 'Kiểm tra tổng hợp chương',
      icon: <CheckSquare className="h-4 w-4 text-brand-600" />,
      href: `/chapter/${chapterId}?tab=exam`,
    },
    {
      label: 'Xem tóm tắt lý thuyết chương',
      icon: <FileText className="h-4 w-4 text-slate-600" />,
      href: `/chapter/${chapterId}`,
    },
    { divider: true, label: '' },
    {
      label: 'In Cẩm nang A4 chương này',
      icon: <Printer className="h-4 w-4 text-accent-600" />,
      href: `/cheatsheet?grade=${gradeNumber}&chapterId=${chapterId}`,
    },
  ];

  return (
    <DropdownMenu
      align="right"
      menuWidth="w-56"
      trigger={
        <button
          type="button"
          title="Tùy chọn chương"
          aria-label={`Tùy chọn chương ${chapterTitle}`}
          className="rounded-lg border border-slate-200 bg-white p-1.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
        >
          <MoreVertical className="h-4 w-4" />
        </button>
      }
      items={items}
    />
  );
}

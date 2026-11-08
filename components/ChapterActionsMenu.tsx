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
      icon: <CheckSquare className="w-4 h-4 text-indigo-600" />,
      href: `/chapter/${chapterId}`,
    },
    {
      label: 'Xem tóm tắt lý thuyết chương',
      icon: <FileText className="w-4 h-4 text-slate-600" />,
      href: `/chapter/${chapterId}`,
    },
    { divider: true, label: '' },
    {
      label: 'In Cẩm nang A4 chương này',
      icon: <Printer className="w-4 h-4 text-blue-600" />,
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
          className="p-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-800 transition"
        >
          <MoreVertical className="w-4 h-4" />
        </button>
      }
      items={items}
    />
  );
}

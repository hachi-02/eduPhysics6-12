'use client';

import React from 'react';
import { Printer, AlertCircle, FileCheck, ChevronDown, Sparkles } from 'lucide-react';
import { DropdownMenu, DropdownItem } from './ui/DropdownMenu';

interface DashboardGradeActionsProps {
  gradeNumber: number;
}

export function DashboardGradeActions({ gradeNumber }: DashboardGradeActionsProps) {
  const items: DropdownItem[] = [
    {
      label: `In Cẩm nang Công thức A4 (Lớp ${gradeNumber})`,
      icon: <Printer className="w-4 h-4 text-blue-600" />,
      href: `/cheatsheet?grade=${gradeNumber}`,
    },
    {
      label: 'Sổ tay các câu hỏi làm sai',
      icon: <AlertCircle className="w-4 h-4 text-rose-500" />,
      href: '/mistakes',
    },
    { divider: true, label: '' },
    {
      label: 'Mẹo ôn thi: Tự học hiệu quả GDPT 2018',
      icon: <Sparkles className="w-4 h-4 text-amber-500" />,
      onClick: () => {
        alert(
          'Mẹo học tốt Vật lý 6–12:\n1. Nắm chắc bản chất vật lý & đơn vị chuẩn SI trước khi giải toán.\n2. Luyện trắc nghiệm 25 câu có bấm giờ để rèn phản xạ.\n3. Xem lại các câu làm sai trong Sổ tay sai thường xuyên.'
        );
      },
    },
  ];

  return (
    <DropdownMenu
      align="right"
      menuWidth="w-64"
      trigger={
        <button
          type="button"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-xs font-semibold text-slate-700 transition shadow-2xs"
        >
          <span>Tiện ích Lớp {gradeNumber}</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
        </button>
      }
      items={items}
    />
  );
}

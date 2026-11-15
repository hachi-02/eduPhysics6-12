import React, { Suspense } from 'react';
import { redirect } from 'next/navigation';
import { getAdminFromCookie } from '@/lib/auth';
import {
  getAllGradesWithStats,
  getGradeCurriculumBoard,
  getTopicFullDetail,
} from '@/lib/cms-service';
import { V2AdminStudioClient } from '@/components/v2/V2AdminStudioClient';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Quản Trị Nội Dung CMS SQLite | eduPhysics 6–12',
  description:
    'Bảng điều khiển quản trị Chương, Chủ đề, Lý thuyết, Công thức KaTeX, Đại lượng SI và Ngân hàng Câu hỏi Vật lý Lớp 6–12.',
};

export default function AdminPage({
  searchParams,
}: {
  searchParams?: { grade?: string; topicId?: string };
}) {
  const admin = getAdminFromCookie();
  if (!admin) {
    redirect('/admin/login');
  }

  const allGradesRaw = getAllGradesWithStats();
  const allGrades = JSON.parse(JSON.stringify(allGradesRaw)) as typeof allGradesRaw;

  const gradeNum = Number(searchParams?.grade || 6);
  const boardRaw = getGradeCurriculumBoard(gradeNum) || getGradeCurriculumBoard(6)!;
  const board = JSON.parse(JSON.stringify(boardRaw)) as typeof boardRaw;

  let activeTopicId = Number(searchParams?.topicId || 0);
  if (!activeTopicId) {
    const firstTopic = board.chapters.find((c) => c.topics && c.topics.length > 0)?.topics?.[0];
    if (firstTopic) {
      activeTopicId = firstTopic.id;
    }
  }

  const activeTopicRaw = activeTopicId ? getTopicFullDetail(activeTopicId) : null;
  const activeTopicDetail = activeTopicRaw
    ? (JSON.parse(JSON.stringify(activeTopicRaw)) as typeof activeTopicRaw)
    : null;

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#03050d] text-sm text-slate-400">
          Đang tải Bảng Quản Trị CMS SQLite...
        </div>
      }
    >
      <V2AdminStudioClient
        adminName={admin.display_name}
        allGrades={allGrades}
        selectedGrade={board.grade}
        chapters={board.chapters}
        activeTopicDetail={activeTopicDetail}
      />
    </Suspense>
  );
}

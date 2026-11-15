import { cookies } from 'next/headers';
import { GRADE_COOKIE_NAME, isValidGradeNumber } from '@/lib/grade-context';
import { getProgressDashboardData } from '@/lib/cms-service';
import { ProgressDashboardClient } from '@/components/ProgressDashboardClient';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Tiến Độ & Hồ Sơ Năng Lực | VietElite Physics',
  description: 'Theo dõi tiến độ 92 chủ đề Vật lý 6–12, tháp năng lực 4 cấp độ chuẩn Bộ GD&ĐT và lộ trình học tập hàng ngày.',
};

export default function ProgressPage() {
  const rawGrade = cookies().get(GRADE_COOKIE_NAME)?.value;
  const initialGrade = isValidGradeNumber(rawGrade) ? Number(rawGrade) : 6;
  const data = getProgressDashboardData();
  return <ProgressDashboardClient initialData={data} initialGrade={initialGrade} />;
}

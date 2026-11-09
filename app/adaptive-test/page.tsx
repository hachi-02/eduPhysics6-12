import React from 'react';
import { getAdaptiveTestCenterData } from '@/lib/cms-service';
import { AdaptiveTestCenterClient } from '@/components/AdaptiveTestCenterClient';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Phòng Khảo thí Thích ứng Thông minh (CAT • IRT 3PL) | eduPhysics',
  description:
    'Hệ thống kiểm tra thích ứng máy tính (Computerized Adaptive Testing) theo mô hình IRT 3 tham số, tự động điều chỉnh độ khó câu hỏi theo năng lực học sinh từ Lớp 6 đến Lớp 12.',
};

export default function AdaptiveTestPage() {
  const { chapters, topics, questions } = getAdaptiveTestCenterData();

  return (
    <AdaptiveTestCenterClient
      chapters={chapters}
      topics={topics}
      questions={questions}
    />
  );
}

import type { Metadata } from 'next';
import { V2AiSolverStudioClient } from '@/components/v2/V2AiSolverStudioClient';

export const metadata: Metadata = {
  title: 'AI Quét & Giải Bài Tập Vật Lí | eduPhysics 6–12',
  description:
    'Tải lên ảnh chụp hoặc file PDF đề bài / bài làm Vật lí để AI đọc, kiểm tra lỗi sai và giải chi tiết từng bước.',
};

export default function AiSolverPage() {
  return <V2AiSolverStudioClient />;
}

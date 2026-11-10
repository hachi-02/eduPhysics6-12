import { getFlashcardDeckData } from '@/lib/cms-service';
import { FlashcardsClient } from '@/components/FlashcardsClient';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Flashcard Lật Thẻ Công Thức & Đơn Vị SI | eduPhysics 6–12',
  description:
    'Ôn tập chủ động (Active Recall & Spaced Repetition) toàn bộ công thức Vật lý và đơn vị chuẩn hệ SI Lớp 6–12.',
};

export default function FlashcardsPage() {
  const data = getFlashcardDeckData();
  return <FlashcardsClient initialData={data} />;
}

import type { Metadata } from 'next';
import { V2AiSettingsStudioClient } from '@/components/v2/V2AiSettingsStudioClient';

export const metadata: Metadata = {
  title: 'Cài đặt AI & API Key | eduPhysics 6–12',
  description:
    'Cấu hình nhà phát hành AI (Google Gemini, OpenRouter), gắn API Key và chọn model đang hoạt động.',
};

export default function AiSettingsPage() {
  return <V2AiSettingsStudioClient />;
}

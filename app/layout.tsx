import type { Metadata } from 'next';
import './globals.css';
import { getAdminFromCookie } from '@/lib/auth';
import { getActiveMistakeCount } from '@/lib/cms-service';
import { SiteHeader } from '@/components/SiteHeader';

export const metadata: Metadata = {
  title: 'Vật Lý 6–12 | Tự học Vật lý chuẩn SGK',
  description:
    'Nền tảng tự học Vật lý từ Lớp 6 đến Lớp 12: Lý thuyết, Công thức, Đại lượng, Mô phỏng và Trắc nghiệm 25 câu.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const admin = getAdminFromCookie();
  const activeMistakeCount = getActiveMistakeCount();

  return (
    <html lang="vi">
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800">
        <SiteHeader admin={admin} activeMistakeCount={activeMistakeCount} />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}

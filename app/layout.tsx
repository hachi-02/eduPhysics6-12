import type { Metadata } from 'next';
import './globals.css';
import { getAdminFromCookie } from '@/lib/auth';
import { getActiveMistakeCount } from '@/lib/cms-service';
import { SiteHeader } from '@/components/SiteHeader';

export const metadata: Metadata = {
  title: 'Vật Lí 6–12 | Tự học Vật lí chuẩn SGK',
  description:
    'Nền tảng tự học Vật lí từ Lớp 6 đến Lớp 12: Lý thuyết, Công thức, Đại lượng, Mô phỏng và Trắc nghiệm 25 câu.',
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 bg-mesh-light bg-no-repeat text-slate-800 antialiased selection:bg-brand-600 selection:text-white">
        <SiteHeader admin={admin} activeMistakeCount={activeMistakeCount} />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}

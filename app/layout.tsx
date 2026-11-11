import type { Metadata } from 'next';
import './globals.css';
import { getAdminFromCookie } from '@/lib/auth';
import { getActiveMistakeCount } from '@/lib/cms-service';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'eduPhysics 6–12 | Hệ Sinh Thái Học & Mô Phỏng Vật Lý Chuẩn GDPT 2018',
  description:
    'Nền tảng tự học Vật lí từ Lớp 6 đến Lớp 12: Lý thuyết, Công thức, Mô phỏng 2D tương tác, Flashcard, Khảo thí CAT và Trắc nghiệm chuẩn 2025.',
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
      <body className="relative flex min-h-screen flex-col text-slate-800 antialiased selection:bg-brand-600 selection:text-white">
        {/* Global Ambient Floating Orbs (Non-interactive decorative depth) */}
        <div
          aria-hidden="true"
          className="no-print pointer-events-none fixed inset-0 -z-10 overflow-hidden print:hidden"
        >
          <div className="animate-blob absolute -left-28 top-12 h-96 w-96 rounded-full bg-indigo-400/10 blur-3xl" />
          <div
            className="animate-blob absolute -right-28 top-1/4 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"
            style={{ animationDelay: '2.5s' }}
          />
          <div
            className="animate-blob absolute bottom-10 left-1/3 h-80 w-80 rounded-full bg-purple-400/10 blur-3xl"
            style={{ animationDelay: '5s' }}
          />
        </div>

        <SiteHeader admin={admin} activeMistakeCount={activeMistakeCount} />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

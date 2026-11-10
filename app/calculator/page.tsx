import { PhysicsCalculatorClient } from '@/components/PhysicsCalculatorClient';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Trợ Lý Quy Đổi Đơn Vị SI & Giải Công Thức | eduPhysics 6–12',
  description:
    'Công cụ quy đổi đơn vị chuẩn SI thông minh, rút ẩn công thức Vật lý từng bước và bảng hằng số CODATA Lớp 6–12.',
};

export default function PhysicsCalculatorPage() {
  return <PhysicsCalculatorClient />;
}

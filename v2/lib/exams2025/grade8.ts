import type { ExamQuestionSource } from '../exam-prep-bank';

const FIG_CIRCUIT_4_OPTIONS = `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;height:auto;display:block;margin:0 auto;">
  <rect width="640" height="260" rx="12" fill="#0f172a"/>
  <!-- Panel A (Đúng: nguồn +, -; K đóng; Ampe kế nối tiếp đúng cực; Đèn) -->
  <g transform="translate(16,14)">
    <rect width="296" height="110" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="12" y="20" fill="#38bdf8" font-size="13" font-weight="700">Sơ đồ A</text>
    <!-- Khung dây -->
    <polyline points="120,26 60,26 60,92 246,92 246,26 176,26" fill="none" stroke="#94a3b8" stroke-width="2"/>
    <!-- Nguồn pin (+ trái dài, - phải ngắn) -->
    <line x1="120" y1="14" x2="120" y2="38" stroke="#f59e0b" stroke-width="3"/>
    <line x1="132" y1="20" x2="132" y2="32" stroke="#f59e0b" stroke-width="2"/>
    <line x1="132" y1="26" x2="176" y2="26" stroke="#94a3b8" stroke-width="2"/>
    <text x="110" y="18" fill="#f59e0b" font-size="11" font-weight="700">+</text>
    <text x="137" y="18" fill="#f59e0b" font-size="11" font-weight="700">−</text>
    <!-- Công tắc K đóng -->
    <circle cx="80" cy="92" r="3" fill="#e2e8f0"/>
    <circle cx="110" cy="92" r="3" fill="#e2e8f0"/>
    <line x1="80" y1="92" x2="110" y2="92" stroke="#22c55e" stroke-width="2.5"/>
    <text x="95" y="82" text-anchor="middle" fill="#cbd5e1" font-size="10">K</text>
    <!-- Bóng đèn -->
    <circle cx="165" cy="92" r="11" fill="#0f172a" stroke="#e2e8f0" stroke-width="2"/>
    <line x1="158" y1="85" x2="172" y2="99" stroke="#e2e8f0" stroke-width="1.5"/>
    <line x1="172" y1="85" x2="158" y2="99" stroke="#e2e8f0" stroke-width="1.5"/>
    <!-- Ampe kế nối tiếp đúng cực (+ bên trái về phía + nguồn) -->
    <circle cx="60" cy="58" r="13" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
    <text x="60" y="63" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">A</text>
    <text x="42" y="45" fill="#22c55e" font-size="10" font-weight="700">+</text>
    <text x="42" y="76" fill="#94a3b8" font-size="10" font-weight="700">−</text>
  </g>
  <!-- Panel B (Sai cực Ampe kế) -->
  <g transform="translate(328,14)">
    <rect width="296" height="110" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="12" y="20" fill="#e2e8f0" font-size="13" font-weight="700">Sơ đồ B</text>
    <polyline points="120,26 60,26 60,92 246,92 246,26 176,26" fill="none" stroke="#94a3b8" stroke-width="2"/>
    <line x1="120" y1="14" x2="120" y2="38" stroke="#f59e0b" stroke-width="3"/>
    <line x1="132" y1="20" x2="132" y2="32" stroke="#f59e0b" stroke-width="2"/>
    <line x1="132" y1="26" x2="176" y2="26" stroke="#94a3b8" stroke-width="2"/>
    <text x="110" y="18" fill="#f59e0b" font-size="11" font-weight="700">+</text>
    <text x="137" y="18" fill="#f59e0b" font-size="11" font-weight="700">−</text>
    <circle cx="80" cy="92" r="3" fill="#e2e8f0"/>
    <circle cx="110" cy="92" r="3" fill="#e2e8f0"/>
    <line x1="80" y1="92" x2="110" y2="92" stroke="#22c55e" stroke-width="2.5"/>
    <circle cx="165" cy="92" r="11" fill="#0f172a" stroke="#e2e8f0" stroke-width="2"/>
    <line x1="158" y1="85" x2="172" y2="99" stroke="#e2e8f0" stroke-width="1.5"/>
    <line x1="172" y1="85" x2="158" y2="99" stroke="#e2e8f0" stroke-width="1.5"/>
    <circle cx="60" cy="58" r="13" fill="#0f172a" stroke="#f43f5e" stroke-width="2"/>
    <text x="60" y="63" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="700">A</text>
    <text x="42" y="45" fill="#f43f5e" font-size="10" font-weight="700">−</text>
    <text x="42" y="76" fill="#f43f5e" font-size="10" font-weight="700">+</text>
  </g>
  <!-- Panel C (Ampe kế mắc song song với đèn) -->
  <g transform="translate(16,136)">
    <rect width="296" height="110" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="12" y="20" fill="#e2e8f0" font-size="13" font-weight="700">Sơ đồ C</text>
    <polyline points="120,26 60,26 60,92 246,92 246,26 176,26" fill="none" stroke="#94a3b8" stroke-width="2"/>
    <line x1="120" y1="14" x2="120" y2="38" stroke="#f59e0b" stroke-width="3"/>
    <line x1="132" y1="20" x2="132" y2="32" stroke="#f59e0b" stroke-width="2"/>
    <line x1="132" y1="26" x2="176" y2="26" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="165" cy="92" r="11" fill="#0f172a" stroke="#e2e8f0" stroke-width="2"/>
    <line x1="158" y1="85" x2="172" y2="99" stroke="#e2e8f0" stroke-width="1.5"/>
    <line x1="172" y1="85" x2="158" y2="99" stroke="#e2e8f0" stroke-width="1.5"/>
    <!-- Nhánh song song qua Ampe kế -->
    <polyline points="135,92 135,58 195,58 195,92" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
    <circle cx="165" cy="58" r="12" fill="#0f172a" stroke="#f43f5e" stroke-width="2"/>
    <text x="165" y="62" text-anchor="middle" fill="#f43f5e" font-size="11" font-weight="700">A</text>
  </g>
  <!-- Panel D (Mạch hở) -->
  <g transform="translate(328,136)">
    <rect width="296" height="110" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="12" y="20" fill="#e2e8f0" font-size="13" font-weight="700">Sơ đồ D</text>
    <polyline points="120,26 60,26 60,92 246,92 246,56" fill="none" stroke="#94a3b8" stroke-width="2"/>
    <line x1="120" y1="14" x2="120" y2="38" stroke="#f59e0b" stroke-width="3"/>
    <line x1="132" y1="20" x2="132" y2="32" stroke="#f59e0b" stroke-width="2"/>
    <line x1="132" y1="26" x2="176" y2="26" stroke="#94a3b8" stroke-width="2"/>
    <circle cx="165" cy="92" r="11" fill="#0f172a" stroke="#e2e8f0" stroke-width="2"/>
    <circle cx="60" cy="58" r="13" fill="#0f172a" stroke="#94a3b8" stroke-width="2"/>
    <text x="60" y="63" text-anchor="middle" fill="#94a3b8" font-size="12" font-weight="700">A</text>
    <text x="236" y="45" fill="#f43f5e" font-size="11">Hở mạch</text>
  </g>
</svg>`;

const FIG_SIMPLE_CIRCUIT = `<svg viewBox="0 0 380 170" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:380px;height:auto;display:block;margin:0 auto;">
  <rect width="380" height="170" rx="12" fill="#0f172a"/>
  <polyline points="170,34 70,34 70,132 310,132 310,34 210,34" fill="none" stroke="#94a3b8" stroke-width="2.5"/>
  <!-- Nguồn điện (1) -->
  <line x1="170" y1="18" x2="170" y2="50" stroke="#f59e0b" stroke-width="3.5"/>
  <line x1="186" y1="26" x2="186" y2="42" stroke="#f59e0b" stroke-width="2.5"/>
  <line x1="186" y1="34" x2="210" y2="34" stroke="#94a3b8" stroke-width="2.5"/>
  <text x="158" y="24" fill="#f59e0b" font-size="13" font-weight="700">+</text>
  <text x="192" y="24" fill="#f59e0b" font-size="13" font-weight="700">−</text>
  <circle cx="178" cy="60" r="10" fill="#38bdf8"/>
  <text x="178" y="64" text-anchor="middle" fill="#0f172a" font-size="11" font-weight="800">1</text>
  <!-- Công tắc K -->
  <circle cx="120" cy="132" r="3.5" fill="#e2e8f0"/>
  <circle cx="155" cy="132" r="3.5" fill="#e2e8f0"/>
  <line x1="120" y1="132" x2="155" y2="132" stroke="#22c55e" stroke-width="2.5"/>
  <text x="137" y="150" text-anchor="middle" fill="#cbd5e1" font-size="12">K</text>
  <!-- Bóng đèn -->
  <circle cx="245" cy="132" r="14" fill="#0f172a" stroke="#e2e8f0" stroke-width="2"/>
  <line x1="236" y1="123" x2="254" y2="141" stroke="#e2e8f0" stroke-width="1.8"/>
  <line x1="254" y1="123" x2="236" y2="141" stroke="#e2e8f0" stroke-width="1.8"/>
  <text x="245" y="158" text-anchor="middle" fill="#cbd5e1" font-size="11">Đèn Đ</text>
</svg>`;

/**
 * Bộ đề thi KHTN 8 (Phân môn Vật lí) chuẩn GDPT 2018 (Kết nối tri thức) — 4 kì (Giữa HK1, Cuối HK1, Giữa HK2, Cuối HK2).
 * Nguồn: VietJack & LoiGiaiHay (tổng hợp đề thi các trường THCS chuẩn cấu trúc mới 2025).
 */
export const GRADE_8_2025_EXAMS: Record<string, ExamQuestionSource[]> = {
  // 1. GIỮA HỌC KÌ 1 — KHTN 8 (VẬT LÍ)
  'g8-2025-giua-hk1': [
    {
      id: 825101,
      chapter_id: 801,
      chapter_code: 'G8-CH1',
      chapter_title: 'Khối lượng riêng và áp suất',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Giữa HK1 · Câu 1',
      grade_number: 8,
      difficulty: 'nhan_biet',
      question_text: 'Khối lượng riêng của một chất là:',
      options: [
        'Khối lượng của một vật.',
        'Thể tích của một vật.',
        'Thể tích của một đơn vị thể tích chất đó.',
        'Khối lượng của một đơn vị thể tích chất đó.',
      ],
      correct_index: 3,
      explanation: 'Khối lượng riêng $D = \\frac{m}{V}$ là khối lượng của một đơn vị thể tích chất đó.',
    },
    {
      id: 825102,
      chapter_id: 801,
      chapter_code: 'G8-CH1',
      chapter_title: 'Khối lượng riêng và áp suất',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Giữa HK1 · Câu 2',
      grade_number: 8,
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị đo khối lượng riêng trong hệ SI là:',
      options: ['$\\text{kg/m}^3$', '$\\text{g/cm}^3$', '$\\text{kg/dm}^3$', '$\\text{g/m}^3$'],
      correct_index: 0,
      explanation: 'Đơn vị đo khối lượng riêng trong hệ đo lường SI là $\\text{kg/m}^3$.',
    },
    {
      id: 825103,
      chapter_id: 801,
      chapter_code: 'G8-CH1',
      chapter_title: 'Khối lượng riêng và áp suất',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Giữa HK1 · Câu 3',
      grade_number: 8,
      difficulty: 'nhan_biet',
      question_text: 'Công thức tính áp suất là:',
      options: ['$p = F \\cdot S$', '$p = \\frac{S}{F}$', '$p = d \\cdot V$', '$p = \\frac{F}{S}$'],
      correct_index: 3,
      explanation: 'Áp suất được tính bằng độ lớn áp lực trên một đơn vị diện tích bị ép: $p = \\frac{F}{S}$.',
    },
    {
      id: 825104,
      chapter_id: 801,
      chapter_code: 'G8-CH1',
      chapter_title: 'Khối lượng riêng và áp suất',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Giữa HK1 · Câu 4',
      grade_number: 8,
      difficulty: 'thong_hieu',
      question_text: 'Để tăng áp suất người ta có thể:',
      options: [
        'Giảm áp lực và tăng diện tích bị ép.',
        'Tăng áp lực và tăng diện tích bị ép.',
        'Tăng áp lực và giảm diện tích bị ép.',
        'Giữ nguyên áp lực và tăng diện tích bị ép.',
      ],
      correct_index: 2,
      explanation: 'Vì $p = \\frac{F}{S}$, khi tăng áp lực $F$ và giảm diện tích bị ép $S$ thì áp suất $p$ tăng.',
    },
    {
      id: 825105,
      chapter_id: 801,
      chapter_code: 'G8-CH1',
      chapter_title: 'Khối lượng riêng và áp suất',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Giữa HK1 · Câu 5',
      grade_number: 8,
      difficulty: 'thong_hieu',
      question_text: 'Hiện tượng nào sau đây do áp suất khí quyển gây ra?',
      options: [
        'Hút bớt không khí trong một hộp sữa bằng giấy, thấy vỏ hộp bị bẹp dúm theo nhiều phía.',
        'Quả bóng bàn bị bẹp nhúng vào nước sôi phồng lên như cũ.',
        'Thổi hơi vào quả bóng bay làm nó phồng to lên.',
        'Đẩy pittông của ống tiêm để bơm thuốc.',
      ],
      correct_index: 0,
      explanation: 'Khi hút bớt không khí ra, áp suất bên trong hộp nhỏ hơn áp suất khí quyển bên ngoài nên áp suất khí quyển ép vỏ hộp bẹp theo nhiều phía.',
    },
    {
      id: 825106,
      chapter_id: 801,
      chapter_code: 'G8-CH1',
      chapter_title: 'Khối lượng riêng và áp suất',
      topic_code: 'GHK1-2025 · Phần II',
      topic_title: 'KHTN 8 (Vật lí) · Giữa HK1 · Câu 6 (Tự luận)',
      grade_number: 8,
      difficulty: 'nhan_biet',
      question_text: 'Điều kiện để một vật nhúng chìm hoàn toàn trong chất lỏng tự nổi lên mặt thoáng là:',
      options: [
        'Lực đẩy Archimedes nhỏ hơn trọng lượng của vật ($F_A < P$).',
        'Lực đẩy Archimedes lớn hơn trọng lượng của vật ($F_A > P$).',
        'Lực đẩy Archimedes bằng trọng lượng của vật ($F_A = P$).',
        'Trọng lượng riêng của vật lớn hơn trọng lượng riêng của chất lỏng ($d_v > d_{\\text{cl}}$).',
      ],
      correct_index: 1,
      explanation: 'Vật nổi lên khi $F_A > P$ (tức $d_{\\text{cl}} > d_v$); vật lơ lửng khi $F_A = P$; vật chìm xuống khi $F_A < P$.',
    },
    {
      id: 825107,
      chapter_id: 801,
      chapter_code: 'G8-CH1',
      chapter_title: 'Khối lượng riêng và áp suất',
      topic_code: 'GHK1-2025 · Phần II',
      topic_title: 'KHTN 8 (Vật lí) · Giữa HK1 · Câu 7 (Tự luận)',
      grade_number: 8,
      difficulty: 'van_dung',
      questionFormat: 'short_answer',
      question_text:
        'Một bao gạo có khối lượng $60\\text{ kg}$ đặt trên sàn nhà nằm ngang, diện tích tiếp xúc của bao gạo với sàn là $0,08\\text{ m}^2$. Áp suất của bao gạo tác dụng lên mặt sàn bằng bao nhiêu $\\text{Pa}$?',
      options: [],
      correct_index: 0,
      shortAnswer: '7500',
      explanation: 'Áp lực lên sàn: $F = P = 10m = 600\\text{ N}$. Áp suất: $p = \\frac{F}{S} = \\frac{600}{0,08} = 7500\\text{ Pa}$.',
    },
  ],

  // 2. CUỐI HỌC KÌ 1 — KHTN 8 (VẬT LÍ)
  'g8-2025-cuoi-hk1': [
    {
      id: 825201,
      chapter_id: 801,
      chapter_code: 'G8-CH1',
      chapter_title: 'Khối lượng riêng và áp suất',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Cuối HK1 · Câu 1',
      grade_number: 8,
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị đo áp suất trong hệ SI là:',
      options: ['N (Newton).', '$\\text{m}^2$.', 'Pa (Pascal).', '$\\text{kg/m}^3$.'],
      correct_index: 2,
      explanation: 'Đơn vị chuẩn của áp suất trong hệ SI là Pascal ($1\\text{ Pa} = 1\\text{ N/m}^2$).',
    },
    {
      id: 825202,
      chapter_id: 802,
      chapter_code: 'G8-CH2',
      chapter_title: 'Tác dụng làm quay của lực',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Cuối HK1 · Câu 2',
      grade_number: 8,
      difficulty: 'nhan_biet',
      question_text: 'Tác dụng làm quay của lực lên một vật quanh một trục quay cố định được đặc trưng bởi đại lượng nào?',
      options: ['Áp lực.', 'Trọng lượng.', 'Moment lực.', 'Lực ma sát.'],
      correct_index: 2,
      explanation: 'Moment lực đặc trưng cho tác dụng làm quay của lực quanh một trục quay cố định.',
    },
    {
      id: 825203,
      chapter_id: 801,
      chapter_code: 'G8-CH1',
      chapter_title: 'Khối lượng riêng và áp suất',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Cuối HK1 · Câu 3',
      grade_number: 8,
      difficulty: 'thong_hieu',
      question_text: 'Lực đẩy Archimedes tác dụng lên một vật nhúng chìm trong chất lỏng phụ thuộc vào:',
      options: [
        'Trọng lượng riêng của chất lỏng và thể tích phần chất lỏng bị vật chiếm chỗ.',
        'Trọng lượng của vật và độ sâu của vật trong chất lỏng.',
        'Hình dạng của vật và khối lượng riêng của vật.',
        'Trọng lượng riêng của vật và thể tích của chất lỏng.',
      ],
      correct_index: 0,
      explanation: 'Theo công thức $F_A = d_{\\text{cl}} \\cdot V$, lực đẩy Archimedes phụ thuộc vào trọng lượng riêng của chất lỏng và thể tích phần chất lỏng bị vật chiếm chỗ.',
    },
    {
      id: 825204,
      chapter_id: 802,
      chapter_code: 'G8-CH2',
      chapter_title: 'Tác dụng làm quay của lực',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Cuối HK1 · Câu 4',
      grade_number: 8,
      difficulty: 'thong_hieu',
      question_text: 'Vật nào sau đây là ứng dụng của đòn bẩy có điểm tựa nằm giữa điểm đặt lực tác dụng và điểm đặt của tải?',
      options: ['Cái kéo cắt giấy.', 'Xe cút kít.', 'Cái kẹp gắp đá.', 'Cần câu cá.'],
      correct_index: 0,
      explanation: 'Cái kéo cắt giấy có trục (điểm tựa) nằm ở giữa phần tay cầm (lực tác dụng) và lưỡi kéo (vật/tải).',
    },
    {
      id: 825205,
      chapter_id: 801,
      chapter_code: 'G8-CH1',
      chapter_title: 'Khối lượng riêng và áp suất',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Cuối HK1 · Câu 5',
      grade_number: 8,
      difficulty: 'van_dung',
      question_text: 'Một khối kim loại có khối lượng $390\\text{ g}$ và thể tích $50\\text{ cm}^3$. Khối lượng riêng của kim loại này là:',
      options: ['$7,8\\text{ g/cm}^3$', '$780\\text{ kg/m}^3$', '$0,128\\text{ g/cm}^3$', '$19,5\\text{ g/cm}^3$'],
      correct_index: 0,
      explanation: '$D = \\frac{m}{V} = \\frac{390}{50} = 7,8\\text{ g/cm}^3 = 7800\\text{ kg/m}^3$.',
    },
    {
      id: 825206,
      chapter_id: 801,
      chapter_code: 'G8-CH1',
      chapter_title: 'Khối lượng riêng và áp suất',
      topic_code: 'CHK1-2025 · Phần II',
      topic_title: 'KHTN 8 (Vật lí) · Cuối HK1 · Câu 6a (Tự luận)',
      grade_number: 8,
      difficulty: 'van_dung',
      questionFormat: 'short_answer',
      question_text:
        'Một khối đồng chất có thể tích $0,002\\text{ m}^3$ được nhúng chìm hoàn toàn trong nước có trọng lượng riêng $d = 10\\,000\\text{ N/m}^3$. Lực đẩy Archimedes tác dụng lên khối chất đó bằng bao nhiêu $\\text{N}$?',
      options: [],
      correct_index: 0,
      shortAnswer: '20',
      explanation: 'Lực đẩy Archimedes: $F_A = d \\cdot V = 10\\,000 \\times 0,002 = 20\\text{ N}$.',
    },
    {
      id: 825207,
      chapter_id: 801,
      chapter_code: 'G8-CH1',
      chapter_title: 'Khối lượng riêng và áp suất',
      topic_code: 'CHK1-2025 · Phần II',
      topic_title: 'KHTN 8 (Vật lí) · Cuối HK1 · Câu 6b (Tự luận)',
      grade_number: 8,
      difficulty: 'van_dung',
      questionFormat: 'short_answer',
      question_text:
        'Treo khối đồng chất ở câu trên vào lực kế ngoài không khí thì lực kế chỉ $54\\text{ N}$. Khi nhúng chìm hoàn toàn vào nước, lực kế chỉ bao nhiêu $\\text{N}$?',
      options: [],
      correct_index: 0,
      shortAnswer: '34',
      explanation: 'Số chỉ lực kế khi nhúng chìm trong nước: $P\' = P - F_A = 54 - 20 = 34\\text{ N}$.',
    },
  ],

  // 3. GIỮA HỌC KÌ 2 — KHTN 8 (VẬT LÍ)
  'g8-2025-giua-hk2': [
    {
      id: 825301,
      chapter_id: 803,
      chapter_code: 'G8-CH3',
      chapter_title: 'Điện học',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Giữa HK2 · Câu 1',
      grade_number: 8,
      difficulty: 'nhan_biet',
      question_text: 'Vì sao dòng điện có tác dụng nhiệt?',
      options: [
        'Vì dòng điện có khả năng làm nóng vật dẫn điện.',
        'Vì dòng điện có khả năng làm tê liệt thần kinh.',
        'Vì dòng điện có khả năng làm sáng bóng đèn bút thử điện.',
        'Vì dòng điện có khả năng làm quay kim nam châm.',
      ],
      correct_index: 0,
      explanation: 'Dòng điện chạy qua vật dẫn làm nóng vật dẫn điện, đó là tác dụng nhiệt của dòng điện.',
    },
    {
      id: 825302,
      chapter_id: 804,
      chapter_code: 'G8-CH4',
      chapter_title: 'Nhiệt',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Giữa HK2 · Câu 2',
      grade_number: 8,
      difficulty: 'nhan_biet',
      question_text: 'Chọn từ thích hợp điền vào chỗ trống: Chất khí nở vì nhiệt ... chất lỏng, chất lỏng nở vì nhiệt ... chất rắn.',
      options: ['nhiều hơn - ít hơn.', 'nhiều hơn - nhiều hơn.', 'ít hơn - nhiều hơn.', 'ít hơn - ít hơn.'],
      correct_index: 1,
      explanation: 'Chất khí nở vì nhiệt nhiều hơn chất lỏng, chất lỏng nở vì nhiệt nhiều hơn chất rắn.',
    },
    {
      id: 825303,
      chapter_id: 804,
      chapter_code: 'G8-CH4',
      chapter_title: 'Nhiệt',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Giữa HK2 · Câu 3',
      grade_number: 8,
      difficulty: 'nhan_biet',
      question_text: 'Cách nào sau đây không làm thay đổi nội năng của vật?',
      options: ['Cọ xát vật lên mặt bàn.', 'Đốt nóng vật.', 'Làm lạnh vật.', 'Đưa vật lên cao.'],
      correct_index: 3,
      explanation: 'Đưa vật lên cao chỉ làm thay đổi thế năng hấp dẫn cơ học, không làm thay đổi động năng và thế năng phân tử (nội năng).',
    },
    {
      id: 825304,
      chapter_id: 803,
      chapter_code: 'G8-CH3',
      chapter_title: 'Điện học',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Giữa HK2 · Câu 4',
      grade_number: 8,
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị đo hiệu điện thế là:',
      options: ['Niutơn (N)', 'Oát (W)', 'Ampe (A)', 'Vôn (V)'],
      correct_index: 3,
      explanation: 'Đơn vị đo hiệu điện thế là Vôn (kí hiệu: $\\text{V}$).',
    },
    {
      id: 825305,
      chapter_id: 803,
      chapter_code: 'G8-CH3',
      chapter_title: 'Điện học',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Giữa HK2 · Câu 5',
      grade_number: 8,
      difficulty: 'nhan_biet',
      question_text: 'Để mạ bạc cho chiếc hộp bằng đồng thì làm theo cách nào dưới đây?',
      options: [
        'Nối hộp đồng với cực dương của nguồn điện rồi nhúng hộp vào dung dịch muối bạc.',
        'Nối hộp đồng với cực âm của nguồn điện rồi nhúng hộp vào trong dung dịch muối bạc.',
        'Nối thỏi bạc với cực âm, hộp đồng với cực dương của nguồn điện, nhúng vào dung dịch muối bạc.',
        'Nối thỏi bạc với cực dương, hộp đồng với cực âm của nguồn điện, tất cả nhúng trong dung dịch muối bạc để cho dòng điện chạy qua.',
      ],
      correct_index: 3,
      explanation: 'Ứng dụng tác dụng hoá học của dòng điện: vật cần mạ (hộp đồng) nối cực âm, kim loại mạ (thỏi bạc) nối cực dương trong dung dịch muối bạc.',
    },
    {
      id: 825306,
      chapter_id: 803,
      chapter_code: 'G8-CH3',
      chapter_title: 'Điện học',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Giữa HK2 · Câu 6',
      grade_number: 8,
      difficulty: 'nhan_biet',
      question_text: 'Để đo cường độ dòng điện đi qua một bóng đèn mắc trong mạch điện kín, người ta thực hiện bằng cách:',
      options: [
        'Thay bóng đèn bằng một ampe kế.',
        'Cắt dây dẫn trong mạch và mắc ampe kế nối tiếp vào vị trí đó.',
        'Mắc ampe kế song song vào hai đầu bóng đèn.',
        'Thay nguồn điện bằng ampe kế.',
      ],
      correct_index: 1,
      explanation: 'Ampe kế phải được mắc nối tiếp với dụng cụ cần đo cường độ dòng điện.',
    },
    {
      id: 825307,
      chapter_id: 804,
      chapter_code: 'G8-CH4',
      chapter_title: 'Nhiệt',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Giữa HK2 · Câu 7',
      grade_number: 8,
      difficulty: 'thong_hieu',
      question_text: 'Khi thả một thỏi kim loại đã được nung nóng vào một chậu nước lạnh thì nội năng của thỏi kim loại và của nước thay đổi như thế nào?',
      options: [
        'Nội năng của thỏi kim loại và của nước đều tăng.',
        'Nội năng của thỏi kim loại và của nước đều giảm.',
        'Nội năng của thỏi kim loại giảm, nội năng của nước tăng.',
        'Nội năng của thỏi kim loại tăng, nội năng của nước giảm.',
      ],
      correct_index: 2,
      explanation: 'Nhiệt năng truyền từ thỏi kim loại nóng sang nước lạnh nên nội năng thỏi kim loại giảm, nội năng của nước tăng.',
    },
    {
      id: 825308,
      chapter_id: 803,
      chapter_code: 'G8-CH3',
      chapter_title: 'Điện học',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Giữa HK2 · Câu 8',
      grade_number: 8,
      difficulty: 'thong_hieu',
      question_text: 'Có thể làm nhiễm điện cho một vật bằng cách:',
      options: ['Cọ xát vật.', 'Nhúng vật vào nước đá.', 'Cho chạm vào nam châm.', 'Nung nóng vật.'],
      correct_index: 0,
      explanation: 'Cọ xát hai vật vào nhau làm các electron dịch chuyển giữa chúng, gây ra hiện tượng nhiễm điện.',
    },
    {
      id: 825309,
      chapter_id: 803,
      chapter_code: 'G8-CH3',
      chapter_title: 'Điện học',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Giữa HK2 · Câu 9',
      grade_number: 8,
      difficulty: 'thong_hieu',
      question_text: 'Dòng điện là:',
      options: [
        'Dòng các điện tích dương chuyển động hỗn loạn.',
        'Dòng các điện tích âm chuyển động hỗn loạn.',
        'Dòng các điện tích chuyển động có hướng.',
        'Dòng các nguyên tử chuyển động có hướng.',
      ],
      correct_index: 2,
      explanation: 'Dòng điện là dòng chuyển dời có hướng của các điện tích.',
    },
    {
      id: 825310,
      chapter_id: 803,
      chapter_code: 'G8-CH3',
      chapter_title: 'Điện học',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Giữa HK2 · Câu 10',
      grade_number: 8,
      difficulty: 'thong_hieu',
      question_text: 'Đơn vị nào sau đây không phải là đơn vị đo hiệu điện thế?',
      options: ['Vôn (V)', 'Milivôn (mV)', 'Ampe (A)', 'Kilôvôn (kV)'],
      correct_index: 2,
      explanation: 'Ampe ($\\text{A}$) là đơn vị đo cường độ dòng điện, không phải hiệu điện thế.',
    },
    {
      id: 825311,
      chapter_id: 803,
      chapter_code: 'G8-CH3',
      chapter_title: 'Điện học',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Giữa HK2 · Câu 11',
      grade_number: 8,
      difficulty: 'thong_hieu',
      question_text: 'Sơ đồ mạch điện nào dưới đây được mắc đúng quy tắc?',
      figureSvg: FIG_CIRCUIT_4_OPTIONS,
      imageCaption: 'Bốn sơ đồ mạch điện gồm nguồn pin, khóa K, bóng đèn và ampe kế',
      options: ['Sơ đồ A', 'Sơ đồ B', 'Sơ đồ C', 'Sơ đồ D'],
      correct_index: 0,
      explanation:
        'Sơ đồ A có ampe kế mắc nối tiếp với đèn, chốt dương (+) hướng về cực dương nguồn điện và công tắc K đóng tạo mạch kín. Sơ đồ B mắc ngược cực ampe kế, C mắc song song gây đoản mạch, D mạch hở.',
    },
    {
      id: 825312,
      chapter_id: 803,
      chapter_code: 'G8-CH3',
      chapter_title: 'Điện học',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Giữa HK2 · Câu 12',
      grade_number: 8,
      difficulty: 'van_dung',
      question_text: 'Sau một thời gian hoạt động, cánh quạt dính nhiều bụi vì:',
      options: [
        'Cánh quạt cọ xát với không khí, bị nhiễm điện nên hút nhiều bụi.',
        'Cánh quạt bị ẩm nên hút nhiều bụi.',
        'Một số chất nhờn trong không khí đọng lại ở cánh quạt.',
        'Bụi có chất keo nên bám vào cánh quạt.',
      ],
      correct_index: 0,
      explanation: 'Cánh quạt quay cọ xát với không khí nên bị nhiễm điện và hút các hạt bụi nhẹ.',
    },
    {
      id: 825313,
      chapter_id: 803,
      chapter_code: 'G8-CH3',
      chapter_title: 'Điện học',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Giữa HK2 · Câu 13',
      grade_number: 8,
      difficulty: 'van_dung',
      question_text: 'Cầu chì hoạt động dựa trên tác dụng nào của dòng điện?',
      options: ['Tác dụng nhiệt.', 'Tác dụng phát sáng.', 'Tác dụng sinh lí.', 'Tác dụng hoá học.'],
      correct_index: 0,
      explanation: 'Khi dòng điện quá mạnh, tác dụng nhiệt làm dây chì nóng chảy và đứt để bảo vệ mạch điện.',
    },
    {
      id: 825314,
      chapter_id: 803,
      chapter_code: 'G8-CH3',
      chapter_title: 'Điện học',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Giữa HK2 · Câu 14',
      grade_number: 8,
      difficulty: 'van_dung',
      question_text: 'Kim loại dẫn điện vì:',
      options: [
        'Trong kim loại có nhiều ion dương.',
        'Trong kim loại có các electron tự do chuyển động không ngừng.',
        'Kim loại cấu tạo từ các nguyên tử.',
        'Các nguyên tử kim loại luôn chuyển động hỗn loạn.',
      ],
      correct_index: 1,
      explanation: 'Kim loại dẫn điện tốt nhờ có các electron tự do mang điện tích âm.',
    },
    {
      id: 825315,
      chapter_id: 803,
      chapter_code: 'G8-CH3',
      chapter_title: 'Điện học',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Giữa HK2 · Câu 15',
      grade_number: 8,
      difficulty: 'van_dung_cao',
      question_text: 'Thiết bị số (1) trong sơ đồ mạch điện hình bên là gì?',
      figureSvg: FIG_SIMPLE_CIRCUIT,
      imageCaption: 'Sơ đồ mạch điện đơn giản gồm thiết bị (1), khóa K và bóng đèn Đ',
      options: ['Nguồn điện.', 'Bóng đèn.', 'Công tắc.', 'Biến trở.'],
      correct_index: 0,
      explanation: 'Kí hiệu gồm một vạch dài (+) và một vạch ngắn (−) là nguồn điện (pin hoặc ắc quy).',
    },
    {
      id: 825316,
      chapter_id: 803,
      chapter_code: 'G8-CH3',
      chapter_title: 'Điện học',
      topic_code: 'GHK2-2025 · Phần II',
      topic_title: 'KHTN 8 (Vật lí) · Giữa HK2 · Câu 16 (Tự luận)',
      grade_number: 8,
      difficulty: 'van_dung_cao',
      question_text: 'Khi khóa K đóng trong sơ đồ mạch điện hình trên, chiều dòng điện quy ước trong mạch chạy theo chiều nào?',
      figureSvg: FIG_SIMPLE_CIRCUIT,
      imageCaption: 'Xác định chiều dòng điện quy ước khi khóa K đóng',
      options: [
        'Từ cực dương (+) qua dây dẫn, ampe kế/đèn và khóa K tới cực âm (−) (ngược chiều kim đồng hồ).',
        'Từ cực âm (−) qua khóa K và bóng đèn tới cực dương (+) (cùng chiều kim đồng hồ).',
        'Đi ra từ cả hai cực vào bóng đèn.',
        'Không có dòng điện vì mạch chưa có ampe kế.',
      ],
      correct_index: 0,
      explanation: 'Theo quy ước, chiều dòng điện đi ra từ cực dương (+) của nguồn điện, qua dây dẫn và các thiết bị điện (khóa K, đèn Đ) tới cực âm (−) của nguồn điện.',
    },
  ],

  // 4. CUỐI HỌC KÌ 2 — KHTN 8 (VẬT LÍ)
  'g8-2025-cuoi-hk2': [
    {
      id: 825401,
      chapter_id: 804,
      chapter_code: 'G8-CH4',
      chapter_title: 'Nhiệt',
      topic_code: 'CHK2-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Cuối HK2 · Câu 1',
      grade_number: 8,
      difficulty: 'nhan_biet',
      question_text: 'Nhiệt năng của một vật là:',
      options: [
        'Tổng động năng của các phân tử cấu tạo nên vật.',
        'Thế năng của các phân tử cấu tạo nên vật.',
        'Khối lượng của vật nhân với nhiệt độ của vật.',
        'Cơ năng của vật khi chuyển động.',
      ],
      correct_index: 0,
      explanation: 'Nhiệt năng của một vật bằng tổng động năng chuyển động nhiệt của các phân tử cấu tạo nên vật.',
    },
    {
      id: 825402,
      chapter_id: 804,
      chapter_code: 'G8-CH4',
      chapter_title: 'Nhiệt',
      topic_code: 'CHK2-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Cuối HK2 · Câu 2',
      grade_number: 8,
      difficulty: 'nhan_biet',
      question_text: 'Trong các chất sau đây, chất dẫn nhiệt tốt nhất là:',
      options: ['Kim loại (đồng, nhôm, sắt).', 'Nước.', 'Không khí.', 'Gỗ.'],
      correct_index: 0,
      explanation: 'Chất rắn (đặc biệt là kim loại) dẫn nhiệt tốt nhất; chất lỏng và chất khí dẫn nhiệt kém.',
    },
    {
      id: 825403,
      chapter_id: 804,
      chapter_code: 'G8-CH4',
      chapter_title: 'Nhiệt',
      topic_code: 'CHK2-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Cuối HK2 · Câu 3',
      grade_number: 8,
      difficulty: 'nhan_biet',
      question_text: 'Hình thức truyền nhiệt chủ yếu trong chất lỏng và chất khí là:',
      options: ['Dẫn nhiệt.', 'Đối lưu.', 'Bức xạ nhiệt.', 'Cả dẫn nhiệt và bức xạ nhiệt.'],
      correct_index: 1,
      explanation: 'Đối lưu là hình thức truyền nhiệt bằng các dòng chất lỏng hoặc chất khí di chuyển thành vòng tuần hoàn.',
    },
    {
      id: 825404,
      chapter_id: 804,
      chapter_code: 'G8-CH4',
      chapter_title: 'Nhiệt',
      topic_code: 'CHK2-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Cuối HK2 · Câu 4',
      grade_number: 8,
      difficulty: 'thong_hieu',
      question_text: 'Sự truyền nhiệt từ Mặt Trời đến Trái Đất được thực hiện bằng hình thức:',
      options: [
        'Dẫn nhiệt.',
        'Đối lưu.',
        'Bức xạ nhiệt.',
        'Không có hình thức nào truyền được qua chân không.',
      ],
      correct_index: 2,
      explanation: 'Bức xạ nhiệt truyền nhiệt bằng các tia nhiệt đi thẳng và có thể truyền qua môi trường chân không.',
    },
    {
      id: 825405,
      chapter_id: 803,
      chapter_code: 'G8-CH3',
      chapter_title: 'Điện học',
      topic_code: 'CHK2-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Cuối HK2 · Câu 5',
      grade_number: 8,
      difficulty: 'nhan_biet',
      question_text: 'Hai vật nhiễm điện cùng loại đặt gần nhau thì:',
      options: ['Hút nhau.', 'Đẩy nhau.', 'Vừa hút vừa đẩy.', 'Không tương tác.'],
      correct_index: 1,
      explanation: 'Hai vật nhiễm điện cùng dấu (cùng loại) thì đẩy nhau; trái dấu thì hút nhau.',
    },
    {
      id: 825406,
      chapter_id: 803,
      chapter_code: 'G8-CH3',
      chapter_title: 'Điện học',
      topic_code: 'CHK2-2025 · Phần I',
      topic_title: 'KHTN 8 (Vật lí) · Cuối HK2 · Câu 6',
      grade_number: 8,
      difficulty: 'nhan_biet',
      question_text: 'Chiều của dòng điện trong mạch điện kín quy ước là:',
      options: [
        'Chiều từ cực âm qua dây dẫn và thiết bị điện tới cực dương của nguồn điện.',
        'Chiều từ cực dương qua dây dẫn và thiết bị điện tới cực âm của nguồn điện.',
        'Chiều dịch chuyển của các electron tự do.',
        'Chiều tùy ý.',
      ],
      correct_index: 1,
      explanation: 'Quy ước chiều dòng điện đi từ cực dương qua dây dẫn và dụng cụ điện tới cực âm của nguồn điện.',
    },
    {
      id: 825407,
      chapter_id: 804,
      chapter_code: 'G8-CH4',
      chapter_title: 'Nhiệt',
      topic_code: 'CHK2-2025 · Phần II',
      topic_title: 'KHTN 8 (Vật lí) · Cuối HK2 · Câu 7 (Tự luận)',
      grade_number: 8,
      difficulty: 'thong_hieu',
      question_text: 'Vì sao khi đun sôi nước bằng ấm, người ta luôn cung cấp nhiệt từ phía đáy ấm mà không cấp nhiệt từ phía trên mặt nước?',
      options: [
        'Để tạo ra dòng đối lưu: nước nóng ở đáy nhẹ hơn nổi lên, nước lạnh ở trên nặng hơn chìm xuống giúp nước sôi nhanh và đều.',
        'Vì nước dẫn nhiệt rất tốt từ dưới lên trên.',
        'Vì bức xạ nhiệt chỉ truyền theo phương thẳng đứng hướng lên.',
        'Vì phần trên mặt nước không thể nhận nhiệt.',
      ],
      correct_index: 0,
      explanation:
        'Nước dẫn nhiệt kém nên truyền nhiệt chủ yếu bằng đối lưu. Đun từ đáy làm lớp nước dưới nóng lên, nở ra, trọng lượng riêng giảm nên đi lên; lớp nước lạnh ở trên nặng hơn đi xuống tạo dòng đối lưu giúp cả ấm nước nóng đều.',
    },
  ],
};

import type { ExamQuestionSource } from '../exam-prep-bank';

const FIG_HINH_11_1 = `<svg viewBox="0 0 360 150" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:360px;height:auto;display:block;margin:0 auto;">
  <rect width="360" height="150" rx="12" fill="#0f172a"/>
  <rect x="24" y="16" width="312" height="118" rx="10" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
  <!-- Ô tô >30 chỗ -->
  <rect x="44" y="54" width="66" height="32" rx="5" fill="#38bdf8" opacity="0.9"/>
  <rect x="50" y="60" width="14" height="11" rx="2" fill="#0f172a"/>
  <rect x="68" y="60" width="14" height="11" rx="2" fill="#0f172a"/>
  <rect x="86" y="60" width="18" height="11" rx="2" fill="#0f172a"/>
  <circle cx="58" cy="88" r="7" fill="#e2e8f0" stroke="#0f172a" stroke-width="2"/>
  <circle cx="96" cy="88" r="7" fill="#e2e8f0" stroke="#0f172a" stroke-width="2"/>
  <text x="77" y="114" text-anchor="middle" fill="#cbd5e1" font-size="11">Xe khách &gt;30 chỗ</text>
  <!-- Biển tròn giới hạn 60 -->
  <circle cx="242" cy="70" r="36" fill="#f8fafc" stroke="#ef4444" stroke-width="8"/>
  <text x="242" y="80" text-anchor="middle" fill="#0f172a" font-size="28" font-weight="800">60</text>
  <text x="242" y="122" text-anchor="middle" fill="#94a3b8" font-size="10">Tốc độ tối đa (km/h)</text>
</svg>`;

const FIG_HINH_10_1 = `<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px;height:auto;display:block;margin:0 auto;">
  <rect width="420" height="220" rx="12" fill="#0f172a"/>
  <g stroke="#334155" stroke-width="1" stroke-dasharray="3,3">
    <line x1="70" y1="145" x2="360" y2="145"/>
    <line x1="70" y1="100" x2="360" y2="100"/>
    <line x1="70" y1="55" x2="360" y2="55"/>
    <line x1="160" y1="35" x2="160" y2="190"/>
    <line x1="250" y1="35" x2="250" y2="190"/>
    <line x1="340" y1="35" x2="340" y2="190"/>
  </g>
  <line x1="70" y1="190" x2="375" y2="190" stroke="#94a3b8" stroke-width="2"/>
  <line x1="70" y1="190" x2="70" y2="25" stroke="#94a3b8" stroke-width="2"/>
  <text x="382" y="194" fill="#cbd5e1" font-size="12" font-weight="700">t (s)</text>
  <text x="52" y="22" fill="#cbd5e1" font-size="12" font-weight="700">s (m)</text>
  <!-- Đường đồ thị qua (0,0), (2,4), (4,8), (6,12) -->
  <line x1="70" y1="190" x2="340" y2="55" stroke="#38bdf8" stroke-width="3"/>
  <circle cx="70" cy="190" r="4" fill="#38bdf8"/>
  <circle cx="160" cy="145" r="4.5" fill="#f59e0b"/>
  <circle cx="250" cy="100" r="4.5" fill="#f59e0b"/>
  <circle cx="340" cy="55" r="4.5" fill="#f59e0b"/>
  <!-- Nhãn trục -->
  <text x="60" y="204" fill="#94a3b8" font-size="11">0</text>
  <text x="156" y="206" fill="#e2e8f0" font-size="12">2</text>
  <text x="246" y="206" fill="#e2e8f0" font-size="12">4</text>
  <text x="336" y="206" fill="#e2e8f0" font-size="12">6</text>
  <text x="48" y="149" fill="#e2e8f0" font-size="12">4</text>
  <text x="48" y="104" fill="#e2e8f0" font-size="12">8</text>
  <text x="42" y="59" fill="#e2e8f0" font-size="12">12</text>
</svg>`;

const FIG_HINH_16_1 = `<svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:380px;height:auto;display:block;margin:0 auto;">
  <rect width="380" height="180" rx="12" fill="#0f172a"/>
  <defs>
    <marker id="arr-ray" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,1 L8,4 L0,7 Z" fill="#f59e0b"/></marker>
  </defs>
  <!-- Gương phẳng nằm ngang -->
  <line x1="40" y1="140" x2="340" y2="140" stroke="#38bdf8" stroke-width="3"/>
  <g stroke="#475569" stroke-width="1.5">
    <line x1="50" y1="140" x2="42" y2="152"/>
    <line x1="80" y1="140" x2="72" y2="152"/>
    <line x1="110" y1="140" x2="102" y2="152"/>
    <line x1="140" y1="140" x2="132" y2="152"/>
    <line x1="170" y1="140" x2="162" y2="152"/>
    <line x1="200" y1="140" x2="192" y2="152"/>
    <line x1="230" y1="140" x2="222" y2="152"/>
    <line x1="260" y1="140" x2="252" y2="152"/>
    <line x1="290" y1="140" x2="282" y2="152"/>
    <line x1="320" y1="140" x2="312" y2="152"/>
  </g>
  <!-- Pháp tuyến IN -->
  <line x1="190" y1="140" x2="190" y2="28" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/>
  <text x="196" y="34" fill="#94a3b8" font-size="12">N</text>
  <!-- Tia tới SI hợp với mặt gương góc 20 độ -->
  <line x1="55" y1="91" x2="190" y2="140" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arr-ray)"/>
  <text x="48" y="84" fill="#f59e0b" font-size="13" font-weight="700">S</text>
  <text x="186" y="164" fill="#cbd5e1" font-size="13" font-weight="700">I</text>
  <!-- Cung góc 20 độ -->
  <path d="M125,140 A65,65 0 0,1 129,118" fill="none" stroke="#22c55e" stroke-width="2"/>
  <text x="96" y="128" fill="#22c55e" font-size="12" font-weight="700">20°</text>
</svg>`;

const FIG_HINH_14_2 = `<svg viewBox="0 0 480 170" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:480px;height:auto;display:block;margin:0 auto;">
  <rect width="480" height="170" rx="12" fill="#0f172a"/>
  <!-- Mặt biển -->
  <rect x="20" y="116" width="440" height="36" rx="4" fill="#0284c7" opacity="0.25"/>
  <line x1="20" y1="116" x2="460" y2="116" stroke="#38bdf8" stroke-width="2"/>
  <!-- Đảo bên trái -->
  <path d="M24,116 Q50,74 88,116 Z" fill="#334155" stroke="#94a3b8"/>
  <circle cx="62" cy="84" r="5" fill="#f59e0b"/>
  <line x1="62" y1="89" x2="62" y2="100" stroke="#f59e0b" stroke-width="2"/>
  <text x="56" y="68" text-anchor="middle" fill="#cbd5e1" font-size="11">Đảo (Người)</text>
  <!-- Tàu thủy ở giữa -->
  <polygon points="270,116 320,116 312,102 278,102" fill="#e2e8f0"/>
  <rect x="288" y="90" width="14" height="12" fill="#f59e0b"/>
  <text x="295" y="82" text-anchor="middle" fill="#f59e0b" font-size="11" font-weight="700">Tàu thủy</text>
  <!-- Vách núi bên phải -->
  <polygon points="400,116 420,42 456,42 456,116" fill="#475569" stroke="#94a3b8"/>
  <text x="424" y="34" text-anchor="middle" fill="#cbd5e1" font-size="11">Vách núi</text>
  <!-- Kích thước 3000 m -->
  <line x1="62" y1="138" x2="412" y2="138" stroke="#22c55e" stroke-width="1.5"/>
  <line x1="62" y1="132" x2="62" y2="144" stroke="#22c55e" stroke-width="1.5"/>
  <line x1="412" y1="132" x2="412" y2="144" stroke="#22c55e" stroke-width="1.5"/>
  <text x="237" y="133" text-anchor="middle" fill="#22c55e" font-size="12" font-weight="700">3 000 m</text>
</svg>`;

const FIG_HINH_19_6 = `<svg viewBox="0 0 420 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px;height:auto;display:block;margin:0 auto;">
  <rect width="420" height="160" rx="12" fill="#0f172a"/>
  <!-- Đường sức gợi ý mờ -->
  <ellipse cx="210" cy="80" rx="135" ry="52" fill="none" stroke="#334155" stroke-dasharray="4,4"/>
  <!-- Thanh nam châm -->
  <rect x="120" y="64" width="90" height="32" fill="#ef4444" stroke="#f8fafc" stroke-width="1.5"/>
  <rect x="210" y="64" width="90" height="32" fill="#2563eb" stroke="#f8fafc" stroke-width="1.5"/>
  <text x="165" y="85" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="800">N</text>
  <text x="255" y="85" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="800">S</text>
  <!-- 4 vị trí -->
  <circle cx="96" cy="80" r="11" fill="#f59e0b"/>
  <text x="96" y="84" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="800">1</text>
  <circle cx="210" cy="40" r="11" fill="#38bdf8"/>
  <text x="210" y="44" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="800">2</text>
  <circle cx="210" cy="126" r="11" fill="#38bdf8"/>
  <text x="210" y="130" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="800">3</text>
  <circle cx="368" cy="80" r="11" fill="#38bdf8"/>
  <text x="368" y="84" text-anchor="middle" fill="#0f172a" font-size="12" font-weight="800">4</text>
</svg>`;

const FIG_TWO_MIRRORS = `<svg viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;height:auto;display:block;margin:0 auto;">
  <rect width="400" height="170" rx="12" fill="#0f172a"/>
  <!-- Gương G1 -->
  <line x1="110" y1="24" x2="110" y2="134" stroke="#38bdf8" stroke-width="3"/>
  <text x="110" y="152" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">G₁</text>
  <!-- Gương G2 -->
  <line x1="290" y1="24" x2="290" y2="134" stroke="#38bdf8" stroke-width="3"/>
  <text x="290" y="152" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">G₂</text>
  <!-- Điểm sáng S cách G1 2 cm (tổng 5 cm) -->
  <circle cx="182" cy="78" r="5" fill="#f59e0b"/>
  <text x="182" y="64" text-anchor="middle" fill="#f59e0b" font-size="13" font-weight="700">S</text>
  <!-- Khoảng cách -->
  <line x1="110" y1="100" x2="182" y2="100" stroke="#22c55e" stroke-width="1.5"/>
  <text x="146" y="94" text-anchor="middle" fill="#22c55e" font-size="11">2 cm</text>
  <line x1="110" y1="124" x2="290" y2="124" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="200" y="118" text-anchor="middle" fill="#cbd5e1" font-size="11">5 cm</text>
</svg>`;

/**
 * Bộ đề thi KHTN 7 (Phân môn Vật lí) chuẩn GDPT 2018 (Kết nối tri thức) — 4 kì (Giữa HK1, Cuối HK1, Giữa HK2, Cuối HK2).
 * Nguồn: VietJack & LoiGiaiHay (tổng hợp đề thi các trường THCS chuẩn cấu trúc mới 2025).
 */
export const GRADE_7_2025_EXAMS: Record<string, ExamQuestionSource[]> = {
  // 1. GIỮA HỌC KÌ 1 — KHTN 7 (VẬT LÍ)
  'g7-2025-giua-hk1': [
    {
      id: 725101,
      chapter_id: 701,
      chapter_code: 'G7-CH1',
      chapter_title: 'Tốc độ',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'KHTN 7 (Vật lí) · Giữa HK1 · Câu 1',
      grade_number: 7,
      difficulty: 'van_dung',
      question_text:
        'Ba bạn An, Bình, Đông học cùng lớp. Khi tan học, ba bạn đi cùng chiều trên đường về nhà. Tốc độ của An là $6,2\\text{ km/h}$, của Bình là $1,5\\text{ m/s}$, của Đông là $72\\text{ m/min}$. Kết luận nào sau đây là đúng?',
      options: [
        'Bạn An đi nhanh nhất.',
        'Bạn Bình đi nhanh nhất.',
        'Bạn Đông đi nhanh nhất.',
        'Ba bạn đi nhanh như nhau.',
      ],
      correct_index: 0,
      explanation: 'Đổi sang $\\text{m/s}$: $v_{\\text{An}} = \\frac{6,2}{3,6} \\approx 1,72\\text{ m/s}$; $v_{\\text{Bình}} = 1,5\\text{ m/s}$; $v_{\\text{Đông}} = \\frac{72}{60} = 1,2\\text{ m/s}$. Vậy bạn An đi nhanh nhất.',
    },
    {
      id: 725102,
      chapter_id: 701,
      chapter_code: 'G7-CH1',
      chapter_title: 'Tốc độ',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'KHTN 7 (Vật lí) · Giữa HK1 · Câu 2',
      grade_number: 7,
      difficulty: 'thong_hieu',
      question_text:
        'Xe buýt chạy trên đường không có dải phân cách cứng với tốc độ $v$ nào sau đây là tuân thủ quy định về tốc độ tối đa của Hình 11.1?',
      figureSvg: FIG_HINH_11_1,
      imageCaption: 'Hình 11.1 — Biển báo tốc độ tối đa cho phép đối với xe khách trên 30 chỗ',
      options: [
        '$50\\text{ km/h} < v < 80\\text{ km/h}$',
        '$70\\text{ km/h} < v < 80\\text{ km/h}$',
        '$60\\text{ km/h} < v < 70\\text{ km/h}$',
        '$50\\text{ km/h} < v < 60\\text{ km/h}$',
      ],
      correct_index: 3,
      explanation: 'Biển báo quy định tốc độ tối đa là $60\\text{ km/h}$, nên xe chạy trong khoảng $50\\text{ km/h} < v < 60\\text{ km/h}$ là đúng quy định.',
    },
    {
      id: 725103,
      chapter_id: 701,
      chapter_code: 'G7-CH1',
      chapter_title: 'Tốc độ',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'KHTN 7 (Vật lí) · Giữa HK1 · Câu 3',
      grade_number: 7,
      difficulty: 'nhan_biet',
      question_text: 'Dụng cụ dùng để đo tốc độ của các phương tiện giao thông trên xe máy, ô tô,... gọi là gì?',
      options: ['Đồng hồ.', 'Nhiệt kế.', 'Tốc kế.', 'Thước đo.'],
      correct_index: 2,
      explanation: 'Tốc kế là dụng cụ gắn trên xe máy, ô tô để chỉ tốc độ tức thời của xe.',
    },
    {
      id: 725104,
      chapter_id: 701,
      chapter_code: 'G7-CH1',
      chapter_title: 'Tốc độ',
      topic_code: 'GHK1-2025 · Phần II',
      topic_title: 'KHTN 7 (Vật lí) · Giữa HK1 · Câu 4 (Đúng/Sai)',
      grade_number: 7,
      difficulty: 'thong_hieu',
      questionFormat: 'true_false',
      question_text: 'Hình 10.1 là đồ thị quãng đường – thời gian của một vật chuyển động. Dựa vào đồ thị, xác định các nhận định sau là đúng hay sai:',
      figureSvg: FIG_HINH_10_1,
      imageCaption: 'Hình 10.1 — Đồ thị quãng đường – thời gian s(t)',
      options: [],
      correct_index: 0,
      tfStatements: [
        {
          text: 'Tốc độ của vật là $2\\text{ m/s}$.',
          is_correct: true,
          explanation: 'Đúng. $v = \\frac{s}{t} = \\frac{4}{2} = 2\\text{ m/s}$.',
        },
        {
          text: 'Sau $2\\text{ s}$, vật đi được $4\\text{ m}$.',
          is_correct: true,
          explanation: 'Đúng. Điểm trên đồ thị tại $t = 2\\text{ s}$ có $s = 4\\text{ m}$.',
        },
        {
          text: 'Từ giây thứ $4$ đến giây thứ $6$, vật đi được $12\\text{ m}$.',
          is_correct: false,
          explanation: 'Sai. Từ giây thứ $4$ ($s = 8\\text{ m}$) đến giây thứ $6$ ($s = 12\\text{ m}$), vật chỉ đi thêm $\\Delta s = 12 - 8 = 4\\text{ m}$.',
        },
        {
          text: 'Thời gian để vật đi được $8\\text{ m}$ là $4\\text{ s}$.',
          is_correct: true,
          explanation: 'Đúng. Tại $s = 8\\text{ m}$ ứng với $t = 4\\text{ s}$.',
        },
      ],
      explanation: 'Đáp án: a) Đúng; b) Đúng; c) Sai; d) Đúng.',
    },
    {
      id: 725105,
      chapter_id: 701,
      chapter_code: 'G7-CH1',
      chapter_title: 'Tốc độ',
      topic_code: 'GHK1-2025 · Phần III',
      topic_title: 'KHTN 7 (Vật lí) · Giữa HK1 · Câu 5 (Trả lời ngắn)',
      grade_number: 7,
      difficulty: 'thong_hieu',
      questionFormat: 'short_answer',
      question_text:
        'Đường sắt Hà Nội – Đà Nẵng dài khoảng $880\\text{ km}$. Nếu tốc độ trung bình của một tàu hỏa là $55\\text{ km/h}$ thì thời gian tàu chạy từ Hà Nội đến Đà Nẵng là bao nhiêu giờ?',
      options: [],
      correct_index: 0,
      shortAnswer: '16',
      explanation: 'Thời gian tàu chạy: $t = \\frac{s}{v} = \\frac{880}{55} = 16\\text{ giờ}$.',
    },
    {
      id: 725106,
      chapter_id: 701,
      chapter_code: 'G7-CH1',
      chapter_title: 'Tốc độ',
      topic_code: 'GHK1-2025 · Phần IV',
      topic_title: 'KHTN 7 (Vật lí) · Giữa HK1 · Câu 6 (Tự luận)',
      grade_number: 7,
      difficulty: 'van_dung',
      questionFormat: 'short_answer',
      question_text:
        'Lúc $7\\text{ h}$ sáng, một mô tô đi từ TP. Hồ Chí Minh đến Biên Hòa cách nhau $30\\text{ km}$. Lúc $7\\text{ h } 20\\text{ min}$, mô tô còn cách Biên Hòa $10\\text{ km}$. Nếu mô tô đi liên tục không nghỉ với tốc độ không đổi thì tổng thời gian đi hết cả quãng đường là bao nhiêu phút?',
      options: [],
      correct_index: 0,
      shortAnswer: '30',
      explanation:
        'Trong $20\\text{ phút} = \\frac{1}{3}\\text{ h}$, xe đi được $30 - 10 = 20\\text{ km} \\Rightarrow v = \\frac{20}{1/3} = 60\\text{ km/h}$. Thời gian đi hết $30\\text{ km}$: $t = \\frac{30}{60} = 0,5\\text{ h} = 30\\text{ phút}$ (tới Biên Hòa lúc $7\\text{ h } 30\\text{ min}$).',
    },
  ],

  // 2. CUỐI HỌC KÌ 1 — KHTN 7 (VẬT LÍ)
  'g7-2025-cuoi-hk1': [
    {
      id: 725201,
      chapter_id: 701,
      chapter_code: 'G7-CH1',
      chapter_title: 'Tốc độ',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 7 (Vật lí) · Cuối HK1 · Câu 1',
      grade_number: 7,
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị nào dưới đây là đơn vị đo tốc độ?',
      options: ['$\\text{m/s}$', '$\\text{km/h}$', '$\\text{cm/s}$', 'Cả A, B, C đều đúng'],
      correct_index: 3,
      explanation: 'Các đơn vị đo tốc độ hợp pháp thường dùng gồm $\\text{m/s}$, $\\text{km/h}$, $\\text{cm/s}$...',
    },
    {
      id: 725202,
      chapter_id: 701,
      chapter_code: 'G7-CH1',
      chapter_title: 'Tốc độ',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 7 (Vật lí) · Cuối HK1 · Câu 2',
      grade_number: 7,
      difficulty: 'nhan_biet',
      question_text: 'Thiết bị nào dưới đây dùng để đo thời gian trong thí nghiệm đo tốc độ chuyển động ở phòng thực hành?',
      options: [
        'Thước cuộn',
        'Cổng quang điện và đồng hồ đo thời gian hiện số',
        'Lực kế',
        'Nhiệt kế',
      ],
      correct_index: 1,
      explanation: 'Cổng quang điện nối với đồng hồ đo thời gian hiện số cho phép đo khoảng thời gian chuyển động rất chính xác.',
    },
    {
      id: 725203,
      chapter_id: 701,
      chapter_code: 'G7-CH1',
      chapter_title: 'Tốc độ',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 7 (Vật lí) · Cuối HK1 · Câu 3',
      grade_number: 7,
      difficulty: 'nhan_biet',
      question_text: 'Một người đi xe đạp đi được quãng đường $12\\text{ km}$ trong thời gian $40\\text{ phút}$. Tốc độ của người đó là:',
      options: ['$18\\text{ km/h}$', '$0,3\\text{ km/h}$', '$300\\text{ m/s}$', '$12\\text{ km/h}$'],
      correct_index: 0,
      explanation: 'Đổi $t = 40\\text{ phút} = \\frac{2}{3}\\text{ h}$. Tốc độ: $v = \\frac{12}{2/3} = 18\\text{ km/h}$.',
    },
    {
      id: 725204,
      chapter_id: 701,
      chapter_code: 'G7-CH1',
      chapter_title: 'Tốc độ',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 7 (Vật lí) · Cuối HK1 · Câu 4',
      grade_number: 7,
      difficulty: 'nhan_biet',
      question_text: 'Đồ thị quãng đường – thời gian của một vật chuyển động thẳng đều xuất phát từ gốc tọa độ có dạng là:',
      options: [
        'Đường cong Parabol.',
        'Đường tròn.',
        'Một đường thẳng nghiêng đi qua gốc tọa độ.',
        'Đường gấp khúc bất kì.',
      ],
      correct_index: 2,
      explanation: 'Trong chuyển động thẳng đều ($s = vt$), đồ thị $s-t$ là một đoạn thẳng nghiêng đi qua gốc tọa độ $O$.',
    },
    {
      id: 725205,
      chapter_id: 702,
      chapter_code: 'G7-CH2',
      chapter_title: 'Âm thanh',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 7 (Vật lí) · Cuối HK1 · Câu 5',
      grade_number: 7,
      difficulty: 'nhan_biet',
      question_text: 'Nguồn âm là:',
      options: [
        'Bất kì vật nào đứng yên.',
        'Vật phát ra âm thanh khi nó dao động.',
        'Môi trường truyền âm.',
        'Không khí bao quanh vật.',
      ],
      correct_index: 1,
      explanation: 'Vật phát ra âm thanh được gọi là nguồn âm; mọi nguồn âm khi phát ra âm đều dao động.',
    },
    {
      id: 725206,
      chapter_id: 702,
      chapter_code: 'G7-CH2',
      chapter_title: 'Âm thanh',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 7 (Vật lí) · Cuối HK1 · Câu 6',
      grade_number: 7,
      difficulty: 'nhan_biet',
      question_text: 'Số dao động trong một giây được gọi là:',
      options: ['Biên độ dao động', 'Tần số dao động', 'Chu kì dao động', 'Vận tốc dao động'],
      correct_index: 1,
      explanation: 'Số dao động thực hiện được trong 1 giây gọi là tần số dao động, đơn vị là Héc ($\\text{Hz}$).',
    },
    {
      id: 725207,
      chapter_id: 702,
      chapter_code: 'G7-CH2',
      chapter_title: 'Âm thanh',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 7 (Vật lí) · Cuối HK1 · Câu 7',
      grade_number: 7,
      difficulty: 'thong_hieu',
      question_text: 'Âm phát ra càng trầm (thấp) khi:',
      options: [
        'Tần số dao động càng lớn.',
        'Tần số dao động càng nhỏ.',
        'Biên độ dao động càng lớn.',
        'Biên độ dao động càng nhỏ.',
      ],
      correct_index: 1,
      explanation: 'Độ cao của âm phụ thuộc vào tần số: tần số càng nhỏ thì âm càng trầm.',
    },
    {
      id: 725208,
      chapter_id: 702,
      chapter_code: 'G7-CH2',
      chapter_title: 'Âm thanh',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 7 (Vật lí) · Cuối HK1 · Câu 8',
      grade_number: 7,
      difficulty: 'thong_hieu',
      question_text: 'Âm thanh không truyền được trong môi trường nào sau đây?',
      options: ['Chất rắn', 'Chất lỏng', 'Chất khí', 'Chân không'],
      correct_index: 3,
      explanation: 'Âm thanh truyền qua dao động của các hạt vật chất nên không thể truyền qua chân không.',
    },
    {
      id: 725209,
      chapter_id: 702,
      chapter_code: 'G7-CH2',
      chapter_title: 'Âm thanh',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 7 (Vật lí) · Cuối HK1 · Câu 9',
      grade_number: 7,
      difficulty: 'thong_hieu',
      question_text: 'Tai ta nghe được tiếng vang khi nào?',
      options: [
        'Khi âm phản xạ đến tai cùng lúc với âm trực tiếp.',
        'Khi âm phản xạ đến tai cách âm trực tiếp một khoảng thời gian ít nhất là $\\frac{1}{15}\\text{ s}$.',
        'Khi âm phản xạ bị hấp thụ hoàn toàn.',
        'Khi không có âm phản xạ.',
      ],
      correct_index: 1,
      explanation: 'Tiếng vang xuất hiện khi âm phản xạ đến tai chậm hơn âm trực tiếp ít nhất $\\frac{1}{15}\\text{ s}$.',
    },
    {
      id: 725210,
      chapter_id: 702,
      chapter_code: 'G7-CH2',
      chapter_title: 'Âm thanh',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 7 (Vật lí) · Cuối HK1 · Câu 10',
      grade_number: 7,
      difficulty: 'thong_hieu',
      question_text: 'Biện pháp nào sau đây giúp chống ô nhiễm tiếng ồn?',
      options: [
        'Trồng nhiều cây xanh dọc hai bên đường phố.',
        'Lắp cửa kính cách âm, tường tiêu âm.',
        'Treo biển "Cấm bóp còi" tại khu vực bệnh viện, trường học.',
        'Cả A, B, C đều đúng.',
      ],
      correct_index: 3,
      explanation: 'Cả 3 biện pháp đều góp phần làm giảm cường độ tiếng ồn tác động đến người nghe.',
    },
    {
      id: 725211,
      chapter_id: 703,
      chapter_code: 'G7-CH3',
      chapter_title: 'Ánh sáng',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 7 (Vật lí) · Cuối HK1 · Câu 11',
      grade_number: 7,
      difficulty: 'van_dung',
      question_text: 'Theo định luật phản xạ ánh sáng:',
      options: [
        'Góc phản xạ bằng góc tới.',
        'Góc phản xạ lớn hơn góc tới.',
        'Góc phản xạ nhỏ hơn góc tới.',
        'Góc phản xạ gấp đôi góc tới.',
      ],
      correct_index: 0,
      explanation: 'Theo định luật phản xạ ánh sáng, góc phản xạ luôn bằng góc tới ($i\' = i$).',
    },
    {
      id: 725212,
      chapter_id: 703,
      chapter_code: 'G7-CH3',
      chapter_title: 'Ánh sáng',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 7 (Vật lí) · Cuối HK1 · Câu 12',
      grade_number: 7,
      difficulty: 'van_dung',
      question_text: 'Chiếu một tia sáng tới mặt một gương phẳng với góc tới bằng $30^\\circ$. Góc phản xạ có giá trị bằng:',
      options: ['$60^\\circ$', '$30^\\circ$', '$15^\\circ$', '$90^\\circ$'],
      correct_index: 1,
      explanation: 'Áp dụng định luật phản xạ ánh sáng: $i\' = i = 30^\\circ$.',
    },
    {
      id: 725213,
      chapter_id: 703,
      chapter_code: 'G7-CH3',
      chapter_title: 'Ánh sáng',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 7 (Vật lí) · Cuối HK1 · Câu 13',
      grade_number: 7,
      difficulty: 'van_dung',
      question_text: 'Ảnh của một vật tạo bởi gương phẳng có tính chất:',
      options: [
        'Là ảnh ảo, lớn hơn vật.',
        'Là ảnh thật, bằng vật.',
        'Là ảnh ảo, có kích thước bằng vật.',
        'Là ảnh ảo, nhỏ hơn vật.',
      ],
      correct_index: 2,
      explanation: 'Ảnh tạo bởi gương phẳng là ảnh ảo, đối xứng với vật qua gương và có kích thước bằng vật.',
    },
    {
      id: 725214,
      chapter_id: 701,
      chapter_code: 'G7-CH1',
      chapter_title: 'Tốc độ',
      topic_code: 'CHK1-2025 · Phần II',
      topic_title: 'KHTN 7 (Vật lí) · Cuối HK1 · Câu 14 (Tự luận)',
      grade_number: 7,
      difficulty: 'van_dung_cao',
      questionFormat: 'short_answer',
      question_text:
        'Một ô tô khởi hành từ $A$ lúc $7\\text{ giờ}$ sáng và đến $B$ lúc $9\\text{ giờ } 30\\text{ phút}$ sáng cùng ngày, quãng đường $AB$ dài $120\\text{ km}$. Trên đường đi ô tô có dừng nghỉ $30\\text{ phút}$. Tốc độ chuyển động thực tế khi xe chạy là bao nhiêu $\\text{km/h}$?',
      options: [],
      correct_index: 0,
      shortAnswer: '60',
      explanation:
        'Tổng thời gian đi từ $A$ đến $B$ là $2,5\\text{ giờ}$ (tốc độ trung bình cả chuyến $48\\text{ km/h}$). Thời gian xe chạy thực tế: $t_2 = 2,5 - 0,5 = 2,0\\text{ giờ}$. Tốc độ thực tế: $v_2 = \\frac{120}{2} = 60\\text{ km/h}$.',
    },
  ],

  // 3. GIỮA HỌC KÌ 2 — KHTN 7 (VẬT LÍ)
  'g7-2025-giua-hk2': [
    {
      id: 725301,
      chapter_id: 702,
      chapter_code: 'G7-CH2',
      chapter_title: 'Âm thanh',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'KHTN 7 (Vật lí) · Giữa HK2 · Câu 1',
      grade_number: 7,
      difficulty: 'nhan_biet',
      question_text: 'Vật liệu nào dưới đây phản xạ âm kém?',
      options: [
        'Tấm kim loại phẳng nhẵn.',
        'Tường gạch phẳng cứng.',
        'Tấm xốp mút / rèm vải nhung bề mặt xốp mềm.',
        'Mặt gương phẳng.',
      ],
      correct_index: 2,
      explanation: 'Các vật liệu mềm, xốp, bề mặt gồ ghề (xốp mút, rèm nhung) hấp thụ âm tốt và phản xạ âm kém.',
    },
    {
      id: 725302,
      chapter_id: 703,
      chapter_code: 'G7-CH3',
      chapter_title: 'Ánh sáng',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'KHTN 7 (Vật lí) · Giữa HK2 · Câu 2',
      grade_number: 7,
      difficulty: 'nhan_biet',
      question_text: 'Điều kiện để xảy ra hiện tượng nhật thực là gì?',
      options: [
        'Mặt Trời, Mặt Trăng, Trái Đất thẳng hàng và Trái Đất nằm giữa.',
        'Mặt Trời, Mặt Trăng, Trái Đất thẳng hàng và Mặt Trời nằm giữa.',
        'Mặt Trời, Mặt Trăng, Trái Đất thẳng hàng và Mặt Trăng nằm giữa.',
        'Mặt Trời, Mặt Trăng, Trái Đất luôn đứng yên.',
      ],
      correct_index: 2,
      explanation: 'Nhật thực xảy ra khi Mặt Trăng đi vào khoảng giữa Mặt Trời và Trái Đất (3 thiên thể thẳng hàng), che khuất ánh sáng Mặt Trời chiếu xuống Trái Đất.',
    },
    {
      id: 725303,
      chapter_id: 703,
      chapter_code: 'G7-CH3',
      chapter_title: 'Ánh sáng',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'KHTN 7 (Vật lí) · Giữa HK2 · Câu 3',
      grade_number: 7,
      difficulty: 'thong_hieu',
      question_text: 'Khi tia tới hợp với pháp tuyến tại điểm tới một góc $i = 30^\\circ$ thì tia phản xạ hợp với pháp tuyến một góc bao nhiêu?',
      options: ['$i\' = 30^\\circ$', '$i\' = 40^\\circ$', '$i\' = 60^\\circ$', '$i\' = 45^\\circ$'],
      correct_index: 0,
      explanation: 'Theo định luật phản xạ ánh sáng: góc phản xạ bằng góc tới nên $i\' = i = 30^\\circ$.',
    },
    {
      id: 725304,
      chapter_id: 703,
      chapter_code: 'G7-CH3',
      chapter_title: 'Ánh sáng',
      topic_code: 'GHK2-2025 · Phần II',
      topic_title: 'KHTN 7 (Vật lí) · Giữa HK2 · Câu 4 (Đúng/Sai)',
      grade_number: 7,
      difficulty: 'thong_hieu',
      questionFormat: 'true_false',
      question_text: 'Chỉ ra các phát biểu dưới đây về phản xạ ánh sáng là đúng hay sai:',
      options: [],
      correct_index: 0,
      tfStatements: [
        {
          text: 'Ánh sáng bị hắt trở lại khi gặp mặt phân cách là hiện tượng phản xạ ánh sáng.',
          is_correct: true,
          explanation: 'Đúng. Đây là định nghĩa hiện tượng phản xạ ánh sáng.',
        },
        {
          text: 'Phản xạ ánh sáng chỉ xảy ra trên mặt gương.',
          is_correct: false,
          explanation: 'Sai. Phản xạ ánh sáng xảy ra trên bề mặt của mọi vật (phản xạ gương hoặc phản xạ khuếch tán).',
        },
        {
          text: 'Tia sáng phản xạ nằm trong mặt phẳng chứa tia sáng tới và pháp tuyến tại điểm tới.',
          is_correct: true,
          explanation: 'Đúng. Đây là nội dung thứ nhất của định luật phản xạ ánh sáng.',
        },
        {
          text: 'Góc phản xạ là góc tạo bởi tia sáng phản xạ và đường pháp tuyến tại điểm tới.',
          is_correct: true,
          explanation: 'Đúng.',
        },
      ],
      explanation: 'Đáp án: a) Đúng; b) Sai; c) Đúng; d) Đúng.',
    },
    {
      id: 725305,
      chapter_id: 703,
      chapter_code: 'G7-CH3',
      chapter_title: 'Ánh sáng',
      topic_code: 'GHK2-2025 · Phần III',
      topic_title: 'KHTN 7 (Vật lí) · Giữa HK2 · Câu 5 (Trả lời ngắn)',
      grade_number: 7,
      difficulty: 'van_dung',
      questionFormat: 'short_answer',
      question_text:
        'Chiếu một tia sáng tới chếch một góc $20^\\circ$ so với mặt gương phẳng (Hình 16.1). Tia sáng phản xạ tạo với tia sáng tới một góc bao nhiêu độ?',
      figureSvg: FIG_HINH_16_1,
      imageCaption: 'Hình 16.1 — Tia sáng tới SI hợp với mặt gương góc 20°',
      options: [],
      correct_index: 0,
      shortAnswer: '140',
      explanation: 'Góc tới $i = 90^\\circ - 20^\\circ = 70^\\circ \\Rightarrow i\' = 70^\\circ$. Góc hợp bởi tia tới và tia phản xạ là $i + i\' = 70^\\circ + 70^\\circ = 140^\\circ$.',
    },
    {
      id: 725306,
      chapter_id: 702,
      chapter_code: 'G7-CH2',
      chapter_title: 'Âm thanh',
      topic_code: 'GHK2-2025 · Phần IV',
      topic_title: 'KHTN 7 (Vật lí) · Giữa HK2 · Câu 6 (Tự luận)',
      grade_number: 7,
      difficulty: 'van_dung',
      questionFormat: 'short_answer',
      question_text:
        'Một người đứng trên mép hòn đảo cách vách núi phía trước $3\\,000\\text{ m}$, giữa vách núi và hòn đảo có một chiếc tàu thủy neo đậu (Hình 14.2). Khi tàu hú còi, người này nghe thấy hai tiếng còi cách nhau $4\\text{ s}$. Khoảng cách từ tàu tới đảo bằng bao nhiêu mét (biết tốc độ truyền âm trong không khí là $340\\text{ m/s}$)?',
      figureSvg: FIG_HINH_14_2,
      imageCaption: 'Hình 14.2 — Sơ đồ vị trí người trên đảo, tàu thủy và vách núi',
      options: [],
      correct_index: 0,
      shortAnswer: '2320',
      explanation:
        'Gọi $d_1$ là khoảng cách từ tàu tới đảo, $d_2 = 3000 - d_1$ là khoảng cách từ tàu tới vách núi. Hiệu thời gian giữa âm phản xạ từ vách núi và âm trực tiếp: $\\Delta t = \\frac{(d_2 + 3000) - d_1}{v} = \\frac{2d_2}{v} = 4\\text{ s} \\Rightarrow d_2 = \\frac{4 \\times 340}{2} = 680\\text{ m}$. Vậy $d_1 = 3000 - 680 = 2320\\text{ m}$.',
    },
  ],

  // 4. CUỐI HỌC KÌ 2 — KHTN 7 (VẬT LÍ)
  'g7-2025-cuoi-hk2': [
    {
      id: 725401,
      chapter_id: 703,
      chapter_code: 'G7-CH3',
      chapter_title: 'Ánh sáng',
      topic_code: 'CHK2-2025 · Phần I',
      topic_title: 'KHTN 7 (Vật lí) · Cuối HK2 · Câu 1',
      grade_number: 7,
      difficulty: 'thong_hieu',
      question_text: 'Chỉ ra phát biểu sai về ảnh của vật qua gương phẳng:',
      options: [
        'Là ảnh ảo, kích thước luôn bằng kích thước của vật.',
        'Là ảnh ảo, kích thước càng lớn khi vật càng gần gương phẳng.',
        'Là ảnh ảo, đối xứng với vật qua gương phẳng.',
        'Là ảnh ảo, khoảng cách từ ảnh tới gương phẳng bằng khoảng cách từ vật tới gương phẳng.',
      ],
      correct_index: 1,
      explanation: 'Kích thước ảnh tạo bởi gương phẳng luôn luôn bằng kích thước của vật, không phụ thuộc khoảng cách từ vật đến gương.',
    },
    {
      id: 725402,
      chapter_id: 704,
      chapter_code: 'G7-CH4',
      chapter_title: 'Từ trường',
      topic_code: 'CHK2-2025 · Phần I',
      topic_title: 'KHTN 7 (Vật lí) · Cuối HK2 · Câu 2',
      grade_number: 7,
      difficulty: 'nhan_biet',
      question_text: 'Mạt sắt đặt ở chỗ nào trên thanh nam châm thì bị hút mạnh nhất?',
      options: [
        'Ở phần giữa của thanh.',
        'Chỉ ở đầu cực Bắc của thanh nam châm.',
        'Chỉ ở đầu cực Nam của thanh nam châm.',
        'Ở cả hai đầu cực Bắc và cực Nam của thanh nam châm.',
      ],
      correct_index: 3,
      explanation: 'Từ trường của thanh nam châm mạnh nhất ở hai đầu cực từ (cực Bắc và cực Nam).',
    },
    {
      id: 725403,
      chapter_id: 704,
      chapter_code: 'G7-CH4',
      chapter_title: 'Từ trường',
      topic_code: 'CHK2-2025 · Phần I',
      topic_title: 'KHTN 7 (Vật lí) · Cuối HK2 · Câu 3',
      grade_number: 7,
      difficulty: 'thong_hieu',
      question_text: 'Lực từ tác dụng lên kim nam châm đặt tại vị trí nào trên Hình 19.6 là mạnh nhất?',
      figureSvg: FIG_HINH_19_6,
      imageCaption: 'Hình 19.6 — Bốn vị trí đặt kim nam châm xung quanh thanh nam châm thẳng',
      options: ['Vị trí 1.', 'Vị trí 2.', 'Vị trí 3.', 'Vị trí 4.'],
      correct_index: 0,
      explanation: 'Vị trí 1 nằm sát ngay đầu cực Bắc của thanh nam châm, nơi đường sức từ dày nhất nên lực từ mạnh nhất.',
    },
    {
      id: 725404,
      chapter_id: 704,
      chapter_code: 'G7-CH4',
      chapter_title: 'Từ trường',
      topic_code: 'CHK2-2025 · Phần II',
      topic_title: 'KHTN 7 (Vật lí) · Cuối HK2 · Câu 4 (Đúng/Sai)',
      grade_number: 7,
      difficulty: 'thong_hieu',
      questionFormat: 'true_false',
      question_text: 'Xác định các phát biểu sau khi nói về nam châm là đúng hay sai:',
      options: [],
      correct_index: 0,
      tfStatements: [
        {
          text: 'Nam châm hút được tất cả các vật bằng kim loại.',
          is_correct: false,
          explanation: 'Sai. Nam châm chỉ hút mạnh các vật liệu từ như sắt, thép, niken, coban; không hút đồng, nhôm, vàng...',
        },
        {
          text: 'Nam châm nào cũng có 2 cực: một cực gọi là cực Bắc, một cực gọi là cực Nam.',
          is_correct: true,
          explanation: 'Đúng.',
        },
        {
          text: 'Hai nam châm cứ để gần nhau là hút nhau.',
          is_correct: false,
          explanation: 'Sai. Hai cực cùng tên đẩy nhau, hai cực khác tên hút nhau.',
        },
        {
          text: 'Kim la bàn là một kim nam châm. Đầu kim la bàn chỉ hướng Bắc là đầu cực Nam của kim nam châm.',
          is_correct: false,
          explanation: 'Sai. Đầu kim chỉ hướng Bắc địa lí được quy ước là cực Bắc (N) của kim nam châm.',
        },
      ],
      explanation: 'Đáp án: a) Sai; b) Đúng; c) Sai; d) Sai.',
    },
    {
      id: 725405,
      chapter_id: 703,
      chapter_code: 'G7-CH3',
      chapter_title: 'Ánh sáng',
      topic_code: 'CHK2-2025 · Phần III',
      topic_title: 'KHTN 7 (Vật lí) · Cuối HK2 · Câu 5 (Trả lời ngắn)',
      grade_number: 7,
      difficulty: 'van_dung',
      questionFormat: 'short_answer',
      question_text:
        'Một điểm sáng $S$ đặt ở giữa hai gương phẳng $G_1$ và $G_2$ có mặt phản xạ quay vào nhau và cách nhau $5\\text{ cm}$. Biết tia sáng từ $S$ phản xạ một lần trên $G_1$ rồi đến $G_2$. Nếu $S$ cách gương $G_1$ một đoạn $2\\text{ cm}$ thì ảnh tạo bởi gương $G_2$ cách gương $G_2$ bao nhiêu $\\text{cm}$?',
      figureSvg: FIG_TWO_MIRRORS,
      imageCaption: 'Điểm sáng S đặt giữa hai gương phẳng song song G₁ và G₂',
      options: [],
      correct_index: 0,
      shortAnswer: '7',
      explanation:
        'Ảnh $S_1$ của $S$ qua $G_1$ nằm sau $G_1$ một đoạn $2\\text{ cm}$, nên khoảng cách từ $S_1$ đến $G_2$ là $2 + 5 = 7\\text{ cm}$. Ảnh $S_2$ của $S_1$ qua $G_2$ đối xứng với $S_1$ qua $G_2$ nên cách $G_2$ là $7\\text{ cm}$.',
    },
    {
      id: 725406,
      chapter_id: 703,
      chapter_code: 'G7-CH3',
      chapter_title: 'Ánh sáng',
      topic_code: 'CHK2-2025 · Phần IV',
      topic_title: 'KHTN 7 (Vật lí) · Cuối HK2 · Câu 6 (Tự luận)',
      grade_number: 7,
      difficulty: 'van_dung',
      question_text:
        'Một người tư vấn lắp gương cho cửa hàng quần áo nói rằng: "Muốn soi được toàn thân cần lắp gương phẳng có chiều cao tối thiểu bằng $\\frac{1}{2}$ chiều cao cơ thể". Nhận định nào sau đây đúng?',
      options: [
        'Đúng, và chiều cao tối thiểu này không phụ thuộc vào khoảng cách từ người đến gương.',
        'Đúng, nhưng người đứng càng xa gương thì cần gương càng cao.',
        'Sai, chiều cao tối thiểu của gương phải bằng đúng chiều cao cơ thể.',
        'Sai, chiều cao tối thiểu của gương chỉ bằng $\\frac{1}{4}$ chiều cao cơ thể.',
      ],
      correct_index: 0,
      explanation:
        'Nhận định đúng. Gọi đỉnh đầu là $Đ$, mắt là $M$, chân là $C$. Theo tính chất đường trung bình của tam giác, để mắt thấy ảnh đỉnh đầu và ảnh chân thì mép trên gương đặt ở độ cao trung điểm $ĐM$ và mép dưới ở trung điểm $MC$, nên chiều cao tối thiểu của gương là $\\frac{ĐM + MC}{2} = \\frac{H}{2}$, không phụ thuộc khoảng cách đến gương.',
    },
  ],
};

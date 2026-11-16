import type { ExamQuestionSource } from '../exam-prep-bank';

const FIG_HINH_41_3 = `<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:600px;height:auto;display:block;margin:0 auto;">
  <rect width="640" height="240" rx="12" fill="#0f172a"/>
  <defs>
    <marker id="arr-cyan" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,1 L8,4 L0,7 Z" fill="#38bdf8"/></marker>
    <marker id="arr-amber" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,1 L8,4 L0,7 Z" fill="#f59e0b"/></marker>
  </defs>
  <!-- Panel A (Đúng: gốc tại đuôi mũi tên, hướng phải, dài 3 đoạn = 150 N) -->
  <g transform="translate(16,14)">
    <rect width="296" height="98" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="12" y="20" fill="#38bdf8" font-size="13" font-weight="700">Hình A</text>
    <path d="M44,24 Q64,56 44,88" fill="none" stroke="#94a3b8" stroke-width="2.5"/>
    <line x1="44" y1="24" x2="36" y2="56" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="44" y1="88" x2="36" y2="56" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="36" y1="56" x2="120" y2="56" stroke="#e2e8f0" stroke-width="2"/>
    <polygon points="120,52 128,56 120,60" fill="#e2e8f0"/>
    <circle cx="36" cy="56" r="3" fill="#38bdf8"/>
    <line x1="36" y1="56" x2="126" y2="56" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arr-cyan)"/>
    <line x1="66" y1="52" x2="66" y2="60" stroke="#38bdf8" stroke-width="1.5"/>
    <line x1="96" y1="52" x2="96" y2="60" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="134" y="60" fill="#38bdf8" font-size="13" font-weight="700">F</text>
    <!-- Tỉ xích -->
    <line x1="205" y1="78" x2="235" y2="78" stroke="#f59e0b" stroke-width="2"/>
    <line x1="205" y1="74" x2="205" y2="82" stroke="#f59e0b" stroke-width="1.5"/>
    <line x1="235" y1="74" x2="235" y2="82" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="242" y="82" fill="#f59e0b" font-size="11">50 N</text>
  </g>
  <!-- Panel B (Sai chiều: hướng trái) -->
  <g transform="translate(328,14)">
    <rect width="296" height="98" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="12" y="20" fill="#e2e8f0" font-size="13" font-weight="700">Hình B</text>
    <path d="M124,24 Q144,56 124,88" fill="none" stroke="#94a3b8" stroke-width="2.5"/>
    <line x1="124" y1="24" x2="116" y2="56" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="124" y1="88" x2="116" y2="56" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="116" y1="56" x2="200" y2="56" stroke="#e2e8f0" stroke-width="2"/>
    <polygon points="200,52 208,56 200,60" fill="#e2e8f0"/>
    <circle cx="116" cy="56" r="3" fill="#f59e0b"/>
    <line x1="116" y1="56" x2="26" y2="56" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arr-amber)"/>
    <line x1="86" y1="52" x2="86" y2="60" stroke="#f59e0b" stroke-width="1.5"/>
    <line x1="56" y1="52" x2="56" y2="60" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="14" y="60" fill="#f59e0b" font-size="13" font-weight="700">F</text>
  </g>
  <!-- Panel C (Sai độ lớn: chỉ dài 2 đoạn = 100 N) -->
  <g transform="translate(16,126)">
    <rect width="296" height="98" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="12" y="20" fill="#e2e8f0" font-size="13" font-weight="700">Hình C</text>
    <path d="M44,24 Q64,56 44,88" fill="none" stroke="#94a3b8" stroke-width="2.5"/>
    <line x1="44" y1="24" x2="36" y2="56" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="44" y1="88" x2="36" y2="56" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="36" y1="56" x2="120" y2="56" stroke="#e2e8f0" stroke-width="2"/>
    <polygon points="120,52 128,56 120,60" fill="#e2e8f0"/>
    <circle cx="36" cy="56" r="3" fill="#f59e0b"/>
    <line x1="36" y1="56" x2="96" y2="56" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arr-amber)"/>
    <line x1="66" y1="52" x2="66" y2="60" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="104" y="46" fill="#f59e0b" font-size="13" font-weight="700">F</text>
  </g>
  <!-- Panel D (Sai điểm đặt: đặt tại đầu mũi tên) -->
  <g transform="translate(328,126)">
    <rect width="296" height="98" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="12" y="20" fill="#e2e8f0" font-size="13" font-weight="700">Hình D</text>
    <path d="M44,24 Q64,56 44,88" fill="none" stroke="#94a3b8" stroke-width="2.5"/>
    <line x1="44" y1="24" x2="36" y2="56" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="44" y1="88" x2="36" y2="56" stroke="#cbd5e1" stroke-width="1.5"/>
    <line x1="36" y1="56" x2="120" y2="56" stroke="#e2e8f0" stroke-width="2"/>
    <polygon points="120,52 128,56 120,60" fill="#e2e8f0"/>
    <circle cx="128" cy="56" r="3" fill="#f59e0b"/>
    <line x1="128" y1="56" x2="218" y2="56" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arr-amber)"/>
    <line x1="158" y1="52" x2="158" y2="60" stroke="#f59e0b" stroke-width="1.5"/>
    <line x1="188" y1="52" x2="188" y2="60" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="226" y="60" fill="#f59e0b" font-size="13" font-weight="700">F</text>
  </g>
</svg>`;

/**
 * Bộ đề thi KHTN 6 (Phân môn Vật lí) chuẩn GDPT 2018 (Kết nối tri thức) — 4 kì (Giữa HK1, Cuối HK1, Giữa HK2, Cuối HK2).
 * Nguồn: LoiGiaiHay & VietJack (tổng hợp đề thi các trường THCS chuẩn cấu trúc mới 2025).
 */
export const GRADE_6_2025_EXAMS: Record<string, ExamQuestionSource[]> = {
  // 1. GIỮA HỌC KÌ 1 — KHTN 6 (VẬT LÍ)
  'g6-2025-giua-hk1': [
    {
      id: 625101,
      chapter_id: 601,
      chapter_code: 'G6-CH1',
      chapter_title: 'Các phép đo',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'KHTN 6 (Vật lí) · Giữa HK1 · Câu 1',
      grade_number: 6,
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị đo độ dài trong hệ thống đo lường chính thức của nước ta hiện nay là:',
      options: ['Dặm', 'Thước', 'Mét', 'Inch'],
      correct_index: 2,
      explanation: 'Trong hệ thống đo lường hợp pháp của nước ta, đơn vị đo độ dài là mét (kí hiệu: $\\text{m}$).',
    },
    {
      id: 625102,
      chapter_id: 601,
      chapter_code: 'G6-CH1',
      chapter_title: 'Các phép đo',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'KHTN 6 (Vật lí) · Giữa HK1 · Câu 2',
      grade_number: 6,
      difficulty: 'nhan_biet',
      question_text: 'Giới hạn đo (GHĐ) của một thước là:',
      options: [
        'Chiều dài lớn nhất ghi trên thước.',
        'Chiều dài nhỏ nhất ghi trên thước.',
        'Chiều dài giữa hai vạch chia liên tiếp trên thước.',
        'Chiều dài giữa hai vạch chia lớn nhất ghi trên thước.',
      ],
      correct_index: 0,
      explanation: 'Giới hạn đo (GHĐ) của thước là chiều dài lớn nhất ghi trên thước.',
    },
    {
      id: 625103,
      chapter_id: 601,
      chapter_code: 'G6-CH1',
      chapter_title: 'Các phép đo',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'KHTN 6 (Vật lí) · Giữa HK1 · Câu 3',
      grade_number: 6,
      difficulty: 'thong_hieu',
      question_text: 'Khi đo chiều dài của một chiếc bàn học, cách đặt thước nào sau đây là đúng?',
      options: [
        'Đặt thước vuông góc với cạnh bàn cần đo.',
        'Đặt thước dọc theo cạnh bàn cần đo, vạch số 0 của thước ngang bằng với một đầu mép bàn.',
        'Đặt thước lệch một góc so với cạnh bàn.',
        'Đặt thước dọc theo cạnh bàn nhưng không cần vạch số 0 trùng mép bàn.',
      ],
      correct_index: 1,
      explanation: 'Để đo chính xác, cần đặt thước dọc theo chiều dài cần đo và vạch số 0 của thước ngang bằng với một đầu của vật.',
    },
    {
      id: 625104,
      chapter_id: 601,
      chapter_code: 'G6-CH1',
      chapter_title: 'Các phép đo',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'KHTN 6 (Vật lí) · Giữa HK1 · Câu 4',
      grade_number: 6,
      difficulty: 'nhan_biet',
      question_text: 'Để đo khối lượng của một vật, người ta sử dụng dụng cụ nào?',
      options: ['Thước cuộn', 'Nhiệt kế', 'Cân', 'Đồng hồ bấm giây'],
      correct_index: 2,
      explanation: 'Cân là dụng cụ dùng để đo khối lượng của một vật.',
    },
    {
      id: 625105,
      chapter_id: 601,
      chapter_code: 'G6-CH1',
      chapter_title: 'Các phép đo',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'KHTN 6 (Vật lí) · Giữa HK1 · Câu 5',
      grade_number: 6,
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị nào sau đây dùng để đo thời gian trong hệ đo lường SI?',
      options: ['Giờ ($\\text{h}$)', 'Phút ($\\text{min}$)', 'Giây ($\\text{s}$)', 'Ngày'],
      correct_index: 2,
      explanation: 'Đơn vị đo thời gian chuẩn trong hệ đo lường SI là giây (kí hiệu: $\\text{s}$).',
    },
    {
      id: 625106,
      chapter_id: 601,
      chapter_code: 'G6-CH1',
      chapter_title: 'Các phép đo',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'KHTN 6 (Vật lí) · Giữa HK1 · Câu 6',
      grade_number: 6,
      difficulty: 'nhan_biet',
      question_text: 'Nhiệt kế y tế thường dùng để đo:',
      options: [
        'Nhiệt độ của ngọn lửa đèn cồn.',
        'Nhiệt độ của nước sôi.',
        'Nhiệt độ cơ thể người.',
        'Nhiệt độ của khí quyển.',
      ],
      correct_index: 2,
      explanation: 'Nhiệt kế y tế có giới hạn đo từ $35^\\circ\\text{C}$ đến $42^\\circ\\text{C}$, thích hợp để đo nhiệt độ cơ thể người.',
    },
    {
      id: 625107,
      chapter_id: 601,
      chapter_code: 'G6-CH1',
      chapter_title: 'Các phép đo',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'KHTN 6 (Vật lí) · Giữa HK1 · Câu 7',
      grade_number: 6,
      difficulty: 'nhan_biet',
      question_text: 'Thang nhiệt độ Celsius chọn nhiệt độ của nước đá đang tan là bao nhiêu độ?',
      options: ['$0^\\circ\\text{C}$', '$100^\\circ\\text{C}$', '$32^\\circ\\text{F}$', '$212^\\circ\\text{F}$'],
      correct_index: 0,
      explanation: 'Trong thang nhiệt độ Celsius, nhiệt độ của nước đá đang tan ở áp suất tiêu chuẩn được quy ước là $0^\\circ\\text{C}$.',
    },
    {
      id: 625108,
      chapter_id: 601,
      chapter_code: 'G6-CH1',
      chapter_title: 'Các phép đo',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'KHTN 6 (Vật lí) · Giữa HK1 · Câu 8',
      grade_number: 6,
      difficulty: 'nhan_biet',
      question_text: 'Độ chia nhỏ nhất (ĐCNN) của thước là:',
      options: [
        'Chiều dài lớn nhất ghi trên thước.',
        'Chiều dài giữa 2 vạch chia liên tiếp trên thước.',
        'Giá trị nhỏ nhất đo được của thước.',
        'Khoảng cách giữa 2 vạch đầu tiên.',
      ],
      correct_index: 1,
      explanation: 'Độ chia nhỏ nhất (ĐCNN) của thước là chiều dài giữa hai vạch chia liên tiếp ghi trên thước.',
    },
    {
      id: 625109,
      chapter_id: 601,
      chapter_code: 'G6-CH1',
      chapter_title: 'Các phép đo',
      topic_code: 'GHK1-2025 · Phần II',
      topic_title: 'KHTN 6 (Vật lí) · Giữa HK1 · Câu 9 (Thực hành)',
      grade_number: 6,
      difficulty: 'thong_hieu',
      question_text:
        'Thứ tự các bước đúng để đo thời gian của một bạn học sinh chạy cự li $100\\text{ m}$ bằng đồng hồ bấm giây điện tử là:',
      options: [
        'Hiệu chỉnh về $0$ -> Ước lượng thời gian -> Bấm dừng khi chạm đích -> Bấm bắt đầu -> Đọc kết quả.',
        'Ước lượng thời gian để chọn đồng hồ -> Hiệu chỉnh về $0$ -> Bấm khởi động khi xuất phát -> Bấm dừng khi chạm đích -> Đọc và ghi kết quả.',
        'Bấm khởi động khi xuất phát -> Hiệu chỉnh về $0$ -> Bấm dừng khi chạm đích -> Đọc kết quả.',
        'Ước lượng thời gian -> Bấm khởi động -> Đọc kết quả -> Hiệu chỉnh về $0$.',
      ],
      correct_index: 1,
      explanation:
        'Quy trình 5 bước chuẩn: (1) Ước lượng thời gian chọn đồng hồ phù hợp; (2) Hiệu chỉnh đồng hồ về số $0$; (3) Bấm khởi động khi xuất phát; (4) Bấm dừng ngay khi chạm vạch đích; (5) Đọc và ghi kết quả.',
    },
  ],

  // 2. CUỐI HỌC KÌ 1 — KHTN 6 (VẬT LÍ)
  'g6-2025-cuoi-hk1': [
    {
      id: 625201,
      chapter_id: 602,
      chapter_code: 'G6-CH2',
      chapter_title: 'Lực và chuyển động',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 6 (Vật lí) · Cuối HK1 · Câu 1',
      grade_number: 6,
      difficulty: 'nhan_biet',
      question_text: 'Vật nào chịu tác dụng trực tiếp của lực trong hoạt động giáo viên cầm phấn viết lên bảng?',
      options: ['Giáo viên.', 'Viên phấn.', 'Bảng.', 'Bàn tay giáo viên.'],
      correct_index: 1,
      explanation: 'Tay giáo viên tác dụng lực trực tiếp lên viên phấn làm viên phấn di chuyển trên mặt bảng.',
    },
    {
      id: 625202,
      chapter_id: 602,
      chapter_code: 'G6-CH2',
      chapter_title: 'Lực và chuyển động',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 6 (Vật lí) · Cuối HK1 · Câu 2',
      grade_number: 6,
      difficulty: 'thong_hieu',
      question_text: 'Lực nào sau đây là lực hút của Trái Đất?',
      options: [
        'Lực làm cho chiếc thuyền nổi trên mặt nước.',
        'Lực kéo chiếc thuyền chìm xuống khi bị nước tràn vào.',
        'Lực đẩy thuyền đi theo dòng nước.',
        'Lực làm xe máy chuyển động.',
      ],
      correct_index: 1,
      explanation: 'Trọng lực là lực hút của Trái Đất tác dụng lên vật, có phương thẳng đứng và chiều hướng về phía Trái Đất.',
    },
    {
      id: 625203,
      chapter_id: 602,
      chapter_code: 'G6-CH2',
      chapter_title: 'Lực và chuyển động',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 6 (Vật lí) · Cuối HK1 · Câu 3',
      grade_number: 6,
      difficulty: 'nhan_biet',
      question_text: 'Lực nào sau đây không phải là lực tiếp xúc?',
      options: ['Lực ma sát.', 'Trọng lực.', 'Sức cản không khí.', 'Lực đẩy của nước.'],
      correct_index: 1,
      explanation: 'Trọng lực là lực không tiếp xúc vì Trái Đất hút các vật mà không cần tiếp xúc trực tiếp với vật.',
    },
    {
      id: 625204,
      chapter_id: 602,
      chapter_code: 'G6-CH2',
      chapter_title: 'Lực và chuyển động',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 6 (Vật lí) · Cuối HK1 · Câu 4',
      grade_number: 6,
      difficulty: 'nhan_biet',
      question_text: 'Để biểu diễn lực, ta cần biểu diễn các đặc trưng nào của lực?',
      options: [
        'Điểm đặt, phương, chiều và độ lớn.',
        'Gốc, phương và chiều.',
        'Phương, chiều và độ lớn.',
        'Gốc và hướng.',
      ],
      correct_index: 0,
      explanation: 'Mỗi lực được biểu diễn bằng một mũi tên có: gốc là điểm đặt của lực, phương và chiều trùng với phương và chiều của lực, độ dài tỉ lệ với độ lớn của lực.',
    },
    {
      id: 625205,
      chapter_id: 602,
      chapter_code: 'G6-CH2',
      chapter_title: 'Lực và chuyển động',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 6 (Vật lí) · Cuối HK1 · Câu 5',
      grade_number: 6,
      difficulty: 'nhan_biet',
      question_text: 'Lực đàn hồi có đặc điểm:',
      options: [
        'Không phụ thuộc vào độ biến dạng.',
        'Độ biến dạng tăng thì lực đàn hồi giảm.',
        'Phụ thuộc vào môi trường bên ngoài.',
        'Độ biến dạng tăng thì lực đàn hồi tăng.',
      ],
      correct_index: 3,
      explanation: 'Trong giới hạn đàn hồi, độ biến dạng của vật đàn hồi càng lớn thì lực đàn hồi càng lớn.',
    },
    {
      id: 625206,
      chapter_id: 602,
      chapter_code: 'G6-CH2',
      chapter_title: 'Lực và chuyển động',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 6 (Vật lí) · Cuối HK1 · Câu 6',
      grade_number: 6,
      difficulty: 'nhan_biet',
      question_text: 'Trọng lượng của một vật được tính theo công thức nào sau đây (với $m$ tính bằng $\\text{kg}$)?',
      options: ['$P = 10m$', '$P = m$', '$P = 0,1m$', '$m = 10P$'],
      correct_index: 0,
      explanation: 'Liên hệ giữa trọng lượng $P$ (N) và khối lượng $m$ (kg) là $P = 10m$.',
    },
    {
      id: 625207,
      chapter_id: 602,
      chapter_code: 'G6-CH2',
      chapter_title: 'Lực và chuyển động',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 6 (Vật lí) · Cuối HK1 · Câu 7',
      grade_number: 6,
      difficulty: 'thong_hieu',
      question_text: 'Trường hợp nào sau đây lực xuất hiện không phải là lực ma sát?',
      options: [
        'Xe đạp đi trên đường.',
        'Đế giày lâu ngày đi bị mòn.',
        'Lò xo bị nén.',
        'Người công nhân đẩy thùng hàng mà nó không xê dịch chút nào.',
      ],
      correct_index: 2,
      explanation: 'Lò xo bị nén sinh ra lực đàn hồi, không phải lực ma sát.',
    },
    {
      id: 625208,
      chapter_id: 602,
      chapter_code: 'G6-CH2',
      chapter_title: 'Lực và chuyển động',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 6 (Vật lí) · Cuối HK1 · Câu 8',
      grade_number: 6,
      difficulty: 'thong_hieu',
      question_text: 'Trong các phát biểu sau đây, phát biểu nào là sai?',
      options: [
        'Người đang bơi trong nước chịu cả lực cản của không khí và của nước.',
        'Người đi bộ trên mặt đất chịu lực cản của không khí.',
        'Xe ô tô đang chạy chịu lực cản của không khí.',
        'Máy bay đang bay chịu lực cản của không khí.',
      ],
      correct_index: 0,
      explanation: 'Khi người bơi hoàn toàn trong nước, lực cản chủ yếu tác dụng lên cơ thể là lực cản của nước.',
    },
    {
      id: 625209,
      chapter_id: 602,
      chapter_code: 'G6-CH2',
      chapter_title: 'Lực và chuyển động',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 6 (Vật lí) · Cuối HK1 · Câu 9',
      grade_number: 6,
      difficulty: 'van_dung',
      question_text:
        'Một lò xo xoắn có độ dài ban đầu là $20\\text{ cm}$. Khi treo một quả cân, độ dài của lò xo là $22\\text{ cm}$. Nếu treo ba quả cân như thế thì lò xo bị dãn ra so với ban đầu một đoạn là:',
      options: ['$4\\text{ cm}$', '$6\\text{ cm}$', '$24\\text{ cm}$', '$26\\text{ cm}$'],
      correct_index: 1,
      explanation: 'Độ dãn khi treo $1$ quả cân: $\\Delta l_1 = 22 - 20 = 2\\text{ cm}$. Khi treo $3$ quả cân giống nhau, độ dãn là $\\Delta l_3 = 3 \\times 2 = 6\\text{ cm}$.',
    },
    {
      id: 625210,
      chapter_id: 602,
      chapter_code: 'G6-CH2',
      chapter_title: 'Lực và chuyển động',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 6 (Vật lí) · Cuối HK1 · Câu 10',
      grade_number: 6,
      difficulty: 'thong_hieu',
      question_text: 'Chỉ có thể nói trọng lực của vật nào sau đây?',
      options: ['Trái Đất.', 'Mặt Trăng.', 'Mặt Trời.', 'Hòn đá trên mặt đất.'],
      correct_index: 3,
      explanation: 'Trọng lực là lực hút của Trái Đất tác dụng lên vật đặt trên hoặc gần Trái Đất (như hòn đá trên mặt đất).',
    },
  ],

  // 3. GIỮA HỌC KÌ 2 — KHTN 6 (VẬT LÍ)
  'g6-2025-giua-hk2': [
    {
      id: 625301,
      chapter_id: 602,
      chapter_code: 'G6-CH2',
      chapter_title: 'Lực và chuyển động',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'KHTN 6 (Vật lí) · Giữa HK2 · Câu 1',
      grade_number: 6,
      difficulty: 'thong_hieu',
      question_text:
        'Dây cung tác dụng lực $F = 150\\text{ N}$ lên mũi tên khi bắn cung. Lực $F$ được biểu diễn bằng mũi tên với tỉ xích $0,5\\text{ cm}$ ứng với $50\\text{ N}$. Trong Hình 41.3, hình nào vẽ đúng lực $F$?',
      figureSvg: FIG_HINH_41_3,
      imageCaption: 'Hình 41.3 — Các phương án biểu diễn lực F = 150 N tác dụng lên mũi tên (tỉ xích 1 đoạn = 50 N)',
      options: ['Hình A', 'Hình B', 'Hình C', 'Hình D'],
      correct_index: 0,
      explanation:
        'Lực có điểm đặt tại chỗ dây cung tiếp xúc đuôi mũi tên, phương nằm ngang, chiều từ trái sang phải, độ lớn $150\\text{ N}$ ứng với $3$ đoạn tỉ xích ($1,5\\text{ cm}$). Vậy Hình A đúng.',
    },
    {
      id: 625302,
      chapter_id: 602,
      chapter_code: 'G6-CH2',
      chapter_title: 'Lực và chuyển động',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'KHTN 6 (Vật lí) · Giữa HK2 · Câu 2',
      grade_number: 6,
      difficulty: 'nhan_biet',
      question_text: 'Biến dạng của vật nào dưới đây không phải là biến dạng đàn hồi?',
      options: [
        'Lò xo trong chiếc bút bi bị nén lại.',
        'Dây cao su được kéo căng ra.',
        'Que nhôm bị uốn cong.',
        'Quả bóng cao su đập vào tường.',
      ],
      correct_index: 2,
      explanation: 'Que nhôm bị uốn cong không tự lấy lại hình dạng ban đầu sau khi thôi tác dụng lực, đó là biến dạng dẻo (không đàn hồi).',
    },
    {
      id: 625303,
      chapter_id: 602,
      chapter_code: 'G6-CH2',
      chapter_title: 'Lực và chuyển động',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'KHTN 6 (Vật lí) · Giữa HK2 · Câu 3',
      grade_number: 6,
      difficulty: 'thong_hieu',
      question_text: 'Một vận động viên võ thuật có khối lượng $82\\text{ kg}$. Trọng lượng của người đó là:',
      options: ['$8,2\\text{ N}$', '$82\\text{ N}$', '$820\\text{ N}$', '$8\\,200\\text{ N}$'],
      correct_index: 2,
      explanation: 'Trọng lượng của người đó là $P = 10m = 10 \\times 82 = 820\\text{ N}$.',
    },
    {
      id: 625304,
      chapter_id: 602,
      chapter_code: 'G6-CH2',
      chapter_title: 'Lực và chuyển động',
      topic_code: 'GHK2-2025 · Phần II',
      topic_title: 'KHTN 6 (Vật lí) · Giữa HK2 · Câu 4 (Đúng/Sai)',
      grade_number: 6,
      difficulty: 'thong_hieu',
      questionFormat: 'true_false',
      question_text: 'Xác định các phát biểu dưới đây về các loại lực là đúng hay sai:',
      options: [],
      correct_index: 0,
      tfStatements: [
        {
          text: 'Lực rất cần cho chuyển động của người đi trên mặt đất là trọng lực.',
          is_correct: false,
          explanation: 'Sai. Lực giúp chân đẩy mặt đường để tiến về phía trước là lực ma sát nghỉ.',
        },
        {
          text: 'Lực làm cho vận động viên nhảy cầu rơi từ trên cao xuống nước là lực ma sát.',
          is_correct: false,
          explanation: 'Sai. Vận động viên rơi xuống là do trọng lực (lực hút của Trái Đất).',
        },
        {
          text: 'Lực làm cho quả bóng chuyển động chậm dần khi bị ném lên cao là lực hút của Trái Đất.',
          is_correct: true,
          explanation: 'Đúng. Trọng lực hướng xuống ngược chiều chuyển động lên cao nên làm quả bóng chậm dần.',
        },
        {
          text: 'Lực cản trở chuyển động của vật, làm vật nóng lên, mài mòn vật là lực ma sát.',
          is_correct: true,
          explanation: 'Đúng. Lực ma sát trượt/lăn cản trở chuyển động và gây mài mòn, sinh nhiệt.',
        },
      ],
      explanation: 'Đáp án: a) Sai; b) Sai; c) Đúng; d) Đúng.',
    },
    {
      id: 625305,
      chapter_id: 603,
      chapter_code: 'G6-CH3',
      chapter_title: 'Năng lượng',
      topic_code: 'GHK2-2025 · Phần III',
      topic_title: 'KHTN 6 (Vật lí) · Giữa HK2 · Câu 5 (Trả lời ngắn)',
      grade_number: 6,
      difficulty: 'van_dung',
      questionFormat: 'short_answer',
      question_text:
        'Một học sinh lớp 6 cần trung bình $2000\\text{ kcal}$ mỗi ngày. Tính theo đơn vị jun ($\\text{J}$) thì năng lượng này bằng bao nhiêu? Biết $1\\text{ cal} \\approx 4,2\\text{ J}$ và $1\\text{ kcal} = 1000\\text{ cal}$.',
      options: [],
      correct_index: 0,
      shortAnswer: '8400000',
      explanation: 'Năng lượng bằng jun: $E = 2000 \\times 1000 \\times 4,2 = 8\\,400\\,000\\text{ J}$.',
    },
    {
      id: 625306,
      chapter_id: 602,
      chapter_code: 'G6-CH2',
      chapter_title: 'Lực và chuyển động',
      topic_code: 'GHK2-2025 · Phần IV',
      topic_title: 'KHTN 6 (Vật lí) · Giữa HK2 · Câu 6 (Tự luận)',
      grade_number: 6,
      difficulty: 'van_dung',
      questionFormat: 'short_answer',
      question_text:
        'Một lò xo dài thêm $10\\text{ cm}$ khi treo vào đầu của nó một vật có trọng lượng $20\\text{ N}$. Tiếp tục treo thêm một vật có trọng lượng $15\\text{ N}$ nữa thì tổng chiều dài của lò xo bằng bao nhiêu $\\text{cm}$? Biết chiều dài tự nhiên của lò xo là $20\\text{ cm}$.',
      options: [],
      correct_index: 0,
      shortAnswer: '37,5',
      explanation:
        'Độ dãn ứng với mỗi Niutơn là $\\frac{10}{20} = 0,5\\text{ cm/N}$. Tổng trọng lượng khi treo thêm: $P = 20 + 15 = 35\\text{ N} \\Rightarrow \\Delta l = 35 \\times 0,5 = 17,5\\text{ cm}$. Chiều dài lò xo: $l = 20 + 17,5 = 37,5\\text{ cm}$.',
    },
  ],

  // 4. CUỐI HỌC KÌ 2 — KHTN 6 (VẬT LÍ)
  'g6-2025-cuoi-hk2': [
    {
      id: 625401,
      chapter_id: 603,
      chapter_code: 'G6-CH3',
      chapter_title: 'Năng lượng',
      topic_code: 'CHK2-2025 · Phần I',
      topic_title: 'KHTN 6 (Vật lí) · Cuối HK2 · Câu 1',
      grade_number: 6,
      difficulty: 'nhan_biet',
      question_text: 'Khi quạt điện hoạt động thì có sự chuyển hoá:',
      options: [
        'Cơ năng thành điện năng.',
        'Điện năng thành hoá năng.',
        'Nhiệt năng thành điện năng.',
        'Điện năng thành cơ năng.',
      ],
      correct_index: 3,
      explanation: 'Quạt điện tiêu thụ điện năng để làm quay cánh quạt (chủ yếu chuyển hoá điện năng thành cơ năng).',
    },
    {
      id: 625402,
      chapter_id: 603,
      chapter_code: 'G6-CH3',
      chapter_title: 'Năng lượng',
      topic_code: 'CHK2-2025 · Phần I',
      topic_title: 'KHTN 6 (Vật lí) · Cuối HK2 · Câu 2',
      grade_number: 6,
      difficulty: 'nhan_biet',
      question_text: 'Nguồn năng lượng nào dưới đây là nguồn năng lượng tái tạo?',
      options: ['Than.', 'Khí tự nhiên.', 'Gió.', 'Dầu.'],
      correct_index: 2,
      explanation: 'Năng lượng gió là nguồn năng lượng tái tạo; than, khí tự nhiên và dầu là nhiên liệu hoá thạch (không tái tạo).',
    },
    {
      id: 625403,
      chapter_id: 604,
      chapter_code: 'G6-CH4',
      chapter_title: 'Trái Đất và bầu trời',
      topic_code: 'CHK2-2025 · Phần I',
      topic_title: 'KHTN 6 (Vật lí) · Cuối HK2 · Câu 3',
      grade_number: 6,
      difficulty: 'thong_hieu',
      question_text: 'Các hành tinh quay quanh Mặt Trời sắp xếp theo khoảng cách đến Mặt Trời từ gần đến xa là:',
      options: [
        'Hỏa tinh, Thủy tinh, Trái Đất, Kim tinh, Mộc tinh, Thổ tinh, Hải Vương tinh, Thiên Vương tinh.',
        'Thủy tinh, Kim tinh, Hỏa tinh, Trái Đất, Mộc tinh, Thổ tinh, Thiên Vương tinh, Hải Vương tinh.',
        'Kim tinh, Thủy tinh, Trái Đất, Hỏa tinh, Thổ tinh, Mộc tinh, Thiên Vương tinh, Hải Vương tinh.',
        'Thủy tinh, Kim tinh, Trái Đất, Hỏa tinh, Mộc tinh, Thổ tinh, Thiên Vương tinh, Hải Vương tinh.',
      ],
      correct_index: 3,
      explanation: 'Thứ tự 8 hành tinh từ gần đến xa Mặt Trời: Thủy tinh, Kim tinh, Trái Đất, Hỏa tinh, Mộc tinh, Thổ tinh, Thiên Vương tinh, Hải Vương tinh.',
    },
    {
      id: 625404,
      chapter_id: 604,
      chapter_code: 'G6-CH4',
      chapter_title: 'Trái Đất và bầu trời',
      topic_code: 'CHK2-2025 · Phần II',
      topic_title: 'KHTN 6 (Vật lí) · Cuối HK2 · Câu 4 (Đúng/Sai)',
      grade_number: 6,
      difficulty: 'thong_hieu',
      questionFormat: 'true_false',
      question_text: 'Xác định các phát biểu dưới đây về Mặt Trăng là đúng hay sai:',
      options: [],
      correct_index: 0,
      tfStatements: [
        {
          text: 'Mặt Trăng là một ngôi sao như các ngôi sao khác.',
          is_correct: false,
          explanation: 'Sai. Mặt Trăng là vệ tinh tự nhiên quay quanh Trái Đất, không tự phát sáng.',
        },
        {
          text: 'Chỉ có một nửa Mặt Trăng luôn luôn được Mặt Trời chiếu sáng.',
          is_correct: true,
          explanation: 'Đúng. Mặt Trăng có dạng hình cầu nên luôn chỉ có nửa hướng về Mặt Trời được chiếu sáng.',
        },
        {
          text: 'Mặt Trăng luôn ở gần Mặt Trời hơn Trái Đất.',
          is_correct: false,
          explanation: 'Sai. Mặt Trăng quay quanh Trái Đất nên có lúc ở gần Mặt Trời hơn, có lúc ở xa hơn.',
        },
        {
          text: 'Hình dạng Mặt Trăng mà ta nhìn thấy thay đổi trong các ngày của tháng vì ta nhìn nó ở các góc nhìn khác nhau.',
          is_correct: true,
          explanation: 'Đúng. Tùy vị trí tương đối giữa Mặt Trăng, Trái Đất và Mặt Trời mà ta thấy phần được chiếu sáng lớn hay nhỏ.',
        },
      ],
      explanation: 'Đáp án: a) Sai; b) Đúng; c) Sai; d) Đúng.',
    },
    {
      id: 625405,
      chapter_id: 604,
      chapter_code: 'G6-CH4',
      chapter_title: 'Trái Đất và bầu trời',
      topic_code: 'CHK2-2025 · Phần III',
      topic_title: 'KHTN 6 (Vật lí) · Cuối HK2 · Câu 5 (Trả lời ngắn)',
      grade_number: 6,
      difficulty: 'van_dung',
      questionFormat: 'short_answer',
      question_text:
        'Mặt Trời chuyển động quanh tâm Ngân Hà được 1 vòng mất $230\\text{ triệu năm}$. Trong thời gian đó, Ngân Hà di chuyển với tốc độ $600\\,000\\text{ m/s}$ được đoạn đường bằng bao nhiêu năm ánh sáng? (Biết tốc độ ánh sáng xấp xỉ $300\\,000\\text{ km/s}$).',
      options: [],
      correct_index: 0,
      shortAnswer: '460000',
      explanation:
        'Tốc độ Ngân Hà $v = 600\\,000\\text{ m/s} = 600\\text{ km/s} = \\frac{1}{500}c$. Quãng đường đi được tính bằng năm ánh sáng: $s = \\frac{1}{500} \\times 230\\,000\\,000 = 460\\,000\\text{ năm ánh sáng}$.',
    },
    {
      id: 625406,
      chapter_id: 603,
      chapter_code: 'G6-CH3',
      chapter_title: 'Năng lượng',
      topic_code: 'CHK2-2025 · Phần IV',
      topic_title: 'KHTN 6 (Vật lí) · Cuối HK2 · Câu 6 (Tự luận)',
      grade_number: 6,
      difficulty: 'van_dung',
      question_text:
        'Hai máy bay có khối lượng như nhau. Chiếc 1 bay ở độ cao $2\\text{ km}$ với vận tốc $50\\text{ m/s}$. Chiếc 2 bay ở độ cao $3\\text{ km}$ với vận tốc $200\\text{ km/h}$. Máy bay nào có cơ năng lớn hơn?',
      options: [
        'Chiếc 1 có cơ năng lớn hơn.',
        'Chiếc 2 có cơ năng lớn hơn.',
        'Hai chiếc có cơ năng bằng nhau.',
        'Không đủ dữ kiện so sánh.',
      ],
      correct_index: 1,
      explanation:
        'Đổi $200\\text{ km/h} \\approx 55,56\\text{ m/s} > 50\\text{ m/s}$ nên động năng chiếc 2 lớn hơn chiếc 1. Chiếc 2 lại ở độ cao $3\\text{ km} > 2\\text{ km}$ nên thế năng hấp dẫn chiếc 2 cũng lớn hơn. Vậy chiếc máy bay 2 có cơ năng lớn hơn.',
    },
  ],
};

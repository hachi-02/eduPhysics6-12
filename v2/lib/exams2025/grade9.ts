import type { ExamQuestionSource } from '../exam-prep-bank';

const FIG_REFRACTION_AIR_WATER = `<svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:380px;height:auto;display:block;margin:0 auto;">
  <rect width="380" height="200" rx="12" fill="#0f172a"/>
  <defs>
    <marker id="arr-g9" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,1 L8,4 L0,7 Z" fill="#f59e0b"/></marker>
  </defs>
  <!-- Nước ở nửa dưới -->
  <rect x="20" y="100" width="340" height="84" rx="4" fill="#0284c7" opacity="0.24"/>
  <line x1="20" y1="100" x2="360" y2="100" stroke="#38bdf8" stroke-width="2"/>
  <text x="36" y="42" fill="#cbd5e1" font-size="12">Không khí (n₁ ≈ 1)</text>
  <text x="36" y="168" fill="#38bdf8" font-size="12">Nước (n₂ ≈ 1,33)</text>
  <!-- Pháp tuyến NN' -->
  <line x1="190" y1="22" x2="190" y2="180" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/>
  <text x="196" y="30" fill="#94a3b8" font-size="12">N</text>
  <text x="196" y="176" fill="#94a3b8" font-size="12">N'</text>
  <!-- Tia tới SI (góc i lớn) và tia khúc xạ IR (góc r < i) -->
  <line x1="92" y1="26" x2="190" y2="100" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arr-g9)"/>
  <line x1="190" y1="100" x2="238" y2="178" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arr-g9)"/>
  <text x="84" y="28" fill="#f59e0b" font-size="12" font-weight="700">S</text>
  <text x="176" y="96" fill="#e2e8f0" font-size="12" font-weight="700">I</text>
  <text x="244" y="178" fill="#f59e0b" font-size="12" font-weight="700">R</text>
  <text x="172" y="64" fill="#22c55e" font-size="12" font-weight="700">i</text>
  <text x="200" y="144" fill="#22c55e" font-size="12" font-weight="700">r</text>
</svg>`;

const FIG_PARALLEL_R1_R2 = `<svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:380px;height:auto;display:block;margin:0 auto;">
  <rect width="380" height="180" rx="12" fill="#0f172a"/>
  <!-- Nhánh R1 = 15 Ohm -->
  <polyline points="80,90 80,46 145,46" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <rect x="145" y="34" width="90" height="24" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="190" y="51" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">R₁ = 15 Ω</text>
  <polyline points="235,46 300,46 300,90" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <!-- Nhánh R2 = 30 Ohm -->
  <polyline points="80,90 80,132 145,132" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <rect x="145" y="120" width="90" height="24" rx="4" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
  <text x="190" y="137" text-anchor="middle" fill="#f59e0b" font-size="12" font-weight="700">R₂ = 30 Ω</text>
  <polyline points="235,132 300,132 300,90" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <!-- Hai đầu A, B và nguồn U = 12 V -->
  <line x1="36" y1="90" x2="80" y2="90" stroke="#94a3b8" stroke-width="2"/>
  <line x1="300" y1="90" x2="344" y2="90" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="80" cy="90" r="3.5" fill="#e2e8f0"/>
  <circle cx="300" cy="90" r="3.5" fill="#e2e8f0"/>
  <text x="190" y="96" text-anchor="middle" fill="#22c55e" font-size="13" font-weight="700">U = 12 V</text>
</svg>`;

const FIG_CONVEX_LENS_2F = `<svg viewBox="0 0 420 170" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px;height:auto;display:block;margin:0 auto;">
  <rect width="420" height="170" rx="12" fill="#0f172a"/>
  <defs>
    <marker id="arr-obj" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,1 L7,3.5 L0,6 Z" fill="#22c55e"/></marker>
    <marker id="arr-img" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,1 L7,3.5 L0,6 Z" fill="#f59e0b"/></marker>
  </defs>
  <!-- Trục chính -->
  <line x1="20" y1="88" x2="400" y2="88" stroke="#64748b" stroke-width="1.5"/>
  <!-- Thấu kính hội tụ -->
  <line x1="210" y1="26" x2="210" y2="150" stroke="#38bdf8" stroke-width="3"/>
  <polyline points="203,34 210,24 217,34" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
  <polyline points="203,142 210,152 217,142" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
  <text x="216" y="102" fill="#38bdf8" font-size="12" font-weight="700">O</text>
  <!-- Tiêu điểm F, F' -->
  <circle cx="150" cy="88" r="3" fill="#e2e8f0"/>
  <text x="146" y="104" fill="#cbd5e1" font-size="11">F</text>
  <circle cx="270" cy="88" r="3" fill="#e2e8f0"/>
  <text x="266" y="104" fill="#cbd5e1" font-size="11">F'</text>
  <!-- Vật AB tại d = 2f = 24 cm -->
  <line x1="90" y1="88" x2="90" y2="48" stroke="#22c55e" stroke-width="2.5" marker-end="url(#arr-obj)"/>
  <text x="82" y="104" fill="#22c55e" font-size="12" font-weight="700">A</text>
  <text x="82" y="44" fill="#22c55e" font-size="12" font-weight="700">B</text>
  <!-- Ảnh A'B' tại d' = 2f -->
  <line x1="330" y1="88" x2="330" y2="128" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arr-img)"/>
  <text x="326" y="80" fill="#f59e0b" font-size="12" font-weight="700">A'</text>
  <text x="326" y="144" fill="#f59e0b" font-size="12" font-weight="700">B'</text>
  <!-- Tia sáng -->
  <polyline points="90,48 210,48 330,128" fill="none" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4,3"/>
  <line x1="90" y1="48" x2="330" y2="128" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4,3"/>
  <text x="150" y="158" text-anchor="middle" fill="#cbd5e1" font-size="11">d = 2f = 24 cm</text>
</svg>`;

const FIG_EM_INDUCTION = `<svg viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;height:auto;display:block;margin:0 auto;">
  <rect width="400" height="170" rx="12" fill="#0f172a"/>
  <!-- Nam châm quay trước cuộn dây -->
  <rect x="46" y="68" width="54" height="28" fill="#ef4444" stroke="#f8fafc" stroke-width="1.5"/>
  <rect x="100" y="68" width="54" height="28" fill="#2563eb" stroke="#f8fafc" stroke-width="1.5"/>
  <text x="73" y="87" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="800">N</text>
  <text x="127" y="87" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="800">S</text>
  <!-- Mũi tên quay -->
  <path d="M90,44 A22,22 0 0,1 116,44" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <polygon points="116,40 122,46 112,48" fill="#f59e0b"/>
  <!-- Cuộn dây kín -->
  <rect x="210" y="54" width="110" height="56" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <g stroke="#38bdf8" stroke-width="2">
    <line x1="226" y1="54" x2="226" y2="110"/>
    <line x1="246" y1="54" x2="246" y2="110"/>
    <line x1="266" y1="54" x2="266" y2="110"/>
    <line x1="286" y1="54" x2="286" y2="110"/>
    <line x1="306" y1="54" x2="306" y2="110"/>
  </g>
  <polyline points="210,110 210,138 320,138 320,110" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="265" cy="138" r="11" fill="#0f172a" stroke="#22c55e" stroke-width="2"/>
  <text x="265" y="142" text-anchor="middle" fill="#22c55e" font-size="11" font-weight="700">G</text>
  <text x="265" y="42" text-anchor="middle" fill="#cbd5e1" font-size="11">Cuộn dây dẫn kín</text>
</svg>`;

/**
 * Bộ đề thi KHTN 9 (Phân môn Vật lí) chuẩn GDPT 2018 (Kết nối tri thức) — 4 kì (Giữa HK1, Cuối HK1, Giữa HK2, Cuối HK2).
 * Nguồn: LoiGiaiHay (bộ đề chuẩn cấu trúc mới 2025 gồm Trắc nghiệm, Đúng/Sai, Trả lời ngắn và Tự luận).
 */
export const GRADE_9_2025_EXAMS: Record<string, ExamQuestionSource[]> = {
  // 1. GIỮA HỌC KÌ 1 — KHTN 9 (VẬT LÍ)
  'g9-2025-giua-hk1': [
    {
      id: 925101,
      chapter_id: 901,
      chapter_code: 'G9-CH1',
      chapter_title: 'Năng lượng cơ học',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'KHTN 9 (Vật lí) · Giữa HK1 · Câu 1',
      grade_number: 9,
      difficulty: 'nhan_biet',
      question_text: 'Cơ năng của một vật chuyển động dưới tác dụng của trọng lực bằng:',
      options: [
        'Tổng động năng và thế năng của vật.',
        'Hiệu số giữa động năng và thế năng.',
        'Tích của động năng và thế năng.',
        'Động năng trừ đi công cản.',
      ],
      correct_index: 0,
      explanation: 'Cơ năng của vật bằng tổng động năng và thế năng của vật: $W = W_đ + W_t$.',
    },
    {
      id: 925102,
      chapter_id: 901,
      chapter_code: 'G9-CH1',
      chapter_title: 'Năng lượng cơ học',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'KHTN 9 (Vật lí) · Giữa HK1 · Câu 2',
      grade_number: 9,
      difficulty: 'nhan_biet',
      question_text: 'Một vật có khối lượng $m$ đang chuyển động với tốc độ $v$ thì động năng của vật được tính bằng công thức:',
      options: [
        '$W_đ = m \\cdot v^2$',
        '$W_đ = \\frac{1}{2} m \\cdot v^2$',
        '$W_đ = \\frac{1}{2} m \\cdot v$',
        '$W_đ = 2m \\cdot v^2$',
      ],
      correct_index: 1,
      explanation: 'Động năng của vật khối lượng $m$ chuyển động với tốc độ $v$ là $W_đ = \\frac{1}{2}mv^2$.',
    },
    {
      id: 925103,
      chapter_id: 902,
      chapter_code: 'G9-CH2',
      chapter_title: 'Ánh sáng',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'KHTN 9 (Vật lí) · Giữa HK1 · Câu 3',
      grade_number: 9,
      difficulty: 'nhan_biet',
      question_text: 'Hiện tượng khúc xạ ánh sáng là hiện tượng:',
      options: [
        'Tia sáng bị phản xạ toàn phần trở lại môi trường trong suốt ban đầu.',
        'Tia sáng truyền thẳng qua mặt phân cách giữa hai môi trường trong suốt.',
        'Tia sáng bị gãy khúc tại mặt phân cách khi truyền xiên góc giữa hai môi trường trong suốt khác nhau.',
        'Tia sáng bị hấp thụ hoàn toàn tại mặt phân cách.',
      ],
      correct_index: 2,
      explanation: 'Khúc xạ ánh sáng là hiện tượng tia sáng bị gãy khúc tại mặt phân cách khi truyền xiên góc từ môi trường trong suốt này sang môi trường trong suốt khác.',
    },
    {
      id: 925104,
      chapter_id: 902,
      chapter_code: 'G9-CH2',
      chapter_title: 'Ánh sáng',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'KHTN 9 (Vật lí) · Giữa HK1 · Câu 4',
      grade_number: 9,
      difficulty: 'thong_hieu',
      question_text: 'Khi chiếu một tia sáng từ không khí vào nước với góc tới $i > 0^\\circ$, góc khúc xạ $r$ thỏa mãn hệ thức nào sau đây?',
      figureSvg: FIG_REFRACTION_AIR_WATER,
      imageCaption: 'Tia sáng truyền xiên góc từ không khí vào nước',
      options: ['$r > i$', '$r < i$', '$r = i$', '$r = 90^\\circ$'],
      correct_index: 1,
      explanation: 'Vì nước có chiết suất lớn hơn không khí ($n_2 > n_1$), tia khúc xạ bị lệch lại gần pháp tuyến hơn nên $r < i$.',
    },
    {
      id: 925105,
      chapter_id: 901,
      chapter_code: 'G9-CH1',
      chapter_title: 'Năng lượng cơ học',
      topic_code: 'GHK1-2025 · Phần II',
      topic_title: 'KHTN 9 (Vật lí) · Giữa HK1 · Câu 5 (Đúng/Sai)',
      grade_number: 9,
      difficulty: 'thong_hieu',
      questionFormat: 'true_false',
      question_text:
        'Một vật có khối lượng $m = 200\\text{ g}$ được thả rơi tự do không vận tốc đầu từ độ cao $h = 20\\text{ m}$ so với mặt đất (chọn mốc thế năng tại mặt đất, lấy $g = 10\\text{ m/s}^2$, bỏ qua sức cản không khí). Xét các nhận định sau:',
      options: [],
      correct_index: 0,
      tfStatements: [
        {
          text: 'Trong quá trình rơi, thế năng của vật giảm dần còn động năng tăng dần.',
          is_correct: true,
          explanation: 'Đúng. Độ cao giảm nên thế năng giảm, tốc độ tăng nên động năng tăng.',
        },
        {
          text: 'Cơ năng của vật được bảo toàn trong suốt quá trình rơi.',
          is_correct: true,
          explanation: 'Đúng. Khi bỏ qua lực cản, cơ năng được bảo toàn.',
        },
        {
          text: 'Khi chạm đất, động năng của vật đạt giá trị cực đại và bằng $40\\text{ J}$.',
          is_correct: true,
          explanation: 'Đúng. $W_{đ,\\max} = W = mgh = 0,2 \\times 10 \\times 20 = 40\\text{ J}$.',
        },
        {
          text: 'Tốc độ của vật ngay trước khi chạm đất là $15\\text{ m/s}$.',
          is_correct: false,
          explanation: 'Sai. $v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 20} = 20\\text{ m/s}$.',
        },
      ],
      explanation: 'Đáp án: a) Đúng; b) Đúng; c) Đúng; d) Sai.',
    },
    {
      id: 925106,
      chapter_id: 901,
      chapter_code: 'G9-CH1',
      chapter_title: 'Năng lượng cơ học',
      topic_code: 'GHK1-2025 · Phần III',
      topic_title: 'KHTN 9 (Vật lí) · Giữa HK1 · Câu 6 (Trả lời ngắn)',
      grade_number: 9,
      difficulty: 'van_dung',
      questionFormat: 'short_answer',
      question_text:
        'Một ô tô có khối lượng $m = 1500\\text{ kg}$ đang di chuyển trên đường cao tốc với tốc độ ổn định $v = 72\\text{ km/h}$. Động năng của ô tô bằng bao nhiêu kilôjun ($\\text{kJ}$)?',
      options: [],
      correct_index: 0,
      shortAnswer: '300',
      explanation: 'Đổi $v = 72\\text{ km/h} = 20\\text{ m/s}$. Động năng $W_đ = \\frac{1}{2} m v^2 = \\frac{1}{2} \\times 1500 \\times 20^2 = 300\\,000\\text{ J} = 300\\text{ kJ}$.',
    },
    {
      id: 925107,
      chapter_id: 902,
      chapter_code: 'G9-CH2',
      chapter_title: 'Ánh sáng',
      topic_code: 'GHK1-2025 · Phần III',
      topic_title: 'KHTN 9 (Vật lí) · Giữa HK1 · Câu 7 (Trả lời ngắn)',
      grade_number: 9,
      difficulty: 'van_dung',
      questionFormat: 'short_answer',
      question_text:
        'Một tia sáng truyền từ thủy tinh ($n = 1,5$) ra không khí ($n \\approx 1$) với góc tới $i = 30^\\circ$. Giá trị của góc khúc xạ $r$ xấp xỉ bằng bao nhiêu độ (làm tròn đến hàng đơn vị)?',
      options: [],
      correct_index: 0,
      shortAnswer: '49',
      explanation: 'Theo định luật khúc xạ: $1,5 \\sin 30^\\circ = 1 \\cdot \\sin r \\Rightarrow \\sin r = 0,75 \\Rightarrow r \\approx 48,59^\\circ \\approx 49^\\circ$.',
    },
  ],

  // 2. CUỐI HỌC KÌ 1 — KHTN 9 (VẬT LÍ)
  'g9-2025-cuoi-hk1': [
    {
      id: 925201,
      chapter_id: 903,
      chapter_code: 'G9-CH3',
      chapter_title: 'Điện học',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 9 (Vật lí) · Cuối HK1 · Câu 1',
      grade_number: 9,
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị đo điện trở của vật dẫn trong hệ SI là:',
      options: ['Vôn (V).', 'Ampe (A).', 'Ôm ($\\Omega$).', 'Oát (W).'],
      correct_index: 2,
      explanation: 'Đơn vị đo điện trở là Ôm (kí hiệu: $\\Omega$).',
    },
    {
      id: 925202,
      chapter_id: 903,
      chapter_code: 'G9-CH3',
      chapter_title: 'Điện học',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 9 (Vật lí) · Cuối HK1 · Câu 2',
      grade_number: 9,
      difficulty: 'thong_hieu',
      question_text:
        'Đối với một đoạn dây dẫn có điện trở $R$ không đổi, khi hiệu điện thế giữa hai đầu dây dẫn tăng lên $2$ lần thì cường độ dòng điện chạy qua dây dẫn:',
      options: ['Tăng $2$ lần.', 'Giảm $2$ lần.', 'Tăng $4$ lần.', 'Không đổi.'],
      correct_index: 0,
      explanation: 'Theo định luật Ohm $I = \\frac{U}{R}$, cường độ dòng điện tỉ lệ thuận với hiệu điện thế nên khi $U$ tăng $2$ lần thì $I$ tăng $2$ lần.',
    },
    {
      id: 925203,
      chapter_id: 902,
      chapter_code: 'G9-CH2',
      chapter_title: 'Ánh sáng',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'KHTN 9 (Vật lí) · Cuối HK1 · Câu 3',
      grade_number: 9,
      difficulty: 'nhan_biet',
      question_text: 'Thấu kính phân kì là thấu kính có:',
      options: [
        'Phần rìa mỏng hơn phần giữa.',
        'Phần rìa dày hơn phần giữa.',
        'Độ dày đồng đều nhau.',
        'Tiêu cự luôn có giá trị dương.',
      ],
      correct_index: 1,
      explanation: 'Thấu kính phân kì làm bằng vật liệu trong suốt, có phần rìa dày hơn phần giữa.',
    },
    {
      id: 925204,
      chapter_id: 903,
      chapter_code: 'G9-CH3',
      chapter_title: 'Điện học',
      topic_code: 'CHK1-2025 · Phần II',
      topic_title: 'KHTN 9 (Vật lí) · Cuối HK1 · Câu 4 (Đúng/Sai)',
      grade_number: 9,
      difficulty: 'van_dung',
      questionFormat: 'true_false',
      question_text: 'Cho mạch điện gồm hai điện trở $R_1 = 15\\,\\Omega$ và $R_2 = 30\\,\\Omega$ mắc song song vào nguồn điện có hiệu điện thế không đổi $U = 12\\text{ V}$:',
      figureSvg: FIG_PARALLEL_R1_R2,
      imageCaption: 'Đoạn mạch mắc song song R₁ = 15 Ω và R₂ = 30 Ω dưới hiệu điện thế U = 12 V',
      options: [],
      correct_index: 0,
      tfStatements: [
        {
          text: 'Điện trở tương đương của đoạn mạch song song này là $10\\,\\Omega$.',
          is_correct: true,
          explanation: 'Đúng. $R_{\\text{tđ}} = \\frac{R_1 R_2}{R_1 + R_2} = \\frac{15 \\times 30}{15 + 30} = 10\\,\\Omega$.',
        },
        {
          text: 'Cường độ dòng điện qua điện trở $R_1$ nhỏ hơn cường độ dòng điện qua điện trở $R_2$.',
          is_correct: false,
          explanation: 'Sai. $I_1 = \\frac{12}{15} = 0,8\\text{ A} > I_2 = \\frac{12}{30} = 0,4\\text{ A}$.',
        },
        {
          text: 'Cường độ dòng điện trong mạch chính bằng $1,2\\text{ A}$.',
          is_correct: true,
          explanation: 'Đúng. $I = I_1 + I_2 = 0,8 + 0,4 = 1,2\\text{ A}$.',
        },
        {
          text: 'Công suất tiêu thụ điện toàn mạch bằng $14,4\\text{ W}$.',
          is_correct: true,
          explanation: 'Đúng. $P = U \\cdot I = 12 \\times 1,2 = 14,4\\text{ W}$.',
        },
      ],
      explanation: 'Đáp án: a) Đúng; b) Sai; c) Đúng; d) Đúng.',
    },
    {
      id: 925205,
      chapter_id: 903,
      chapter_code: 'G9-CH3',
      chapter_title: 'Điện học',
      topic_code: 'CHK1-2025 · Phần III',
      topic_title: 'KHTN 9 (Vật lí) · Cuối HK1 · Câu 5 (Trả lời ngắn)',
      grade_number: 9,
      difficulty: 'van_dung',
      questionFormat: 'short_answer',
      question_text:
        'Một ấm điện hoạt động ở hiệu điện thế định mức $220\\text{ V}$ có công suất tiêu thụ định mức là $1000\\text{ W}$. Trong mỗi ngày, ấm hoạt động trung bình $30\\text{ phút}$. Điện năng mà ấm tiêu thụ trong $30\\text{ ngày}$ là bao nhiêu kilôoát giờ ($\\text{kWh}$)?',
      options: [],
      correct_index: 0,
      shortAnswer: '15',
      explanation: 'Tổng thời gian dùng trong 30 ngày: $t = 0,5\\text{ h} \\times 30 = 15\\text{ h}$. Điện năng: $A = P \\cdot t = 1\\text{ kW} \\times 15\\text{ h} = 15\\text{ kWh}$.',
    },
    {
      id: 925206,
      chapter_id: 902,
      chapter_code: 'G9-CH2',
      chapter_title: 'Ánh sáng',
      topic_code: 'CHK1-2025 · Phần III',
      topic_title: 'KHTN 9 (Vật lí) · Cuối HK1 · Câu 6 (Trả lời ngắn)',
      grade_number: 9,
      difficulty: 'thong_hieu',
      questionFormat: 'short_answer',
      question_text:
        'Đặt vật sáng $AB$ vuông góc với trục chính của một thấu kính hội tụ có tiêu cự $f = 12\\text{ cm}$. Vật cách thấu kính một khoảng $d = 24\\text{ cm}$. Khoảng cách từ ảnh $A\'B\'$ đến thấu kính bằng bao nhiêu $\\text{cm}$?',
      figureSvg: FIG_CONVEX_LENS_2F,
      imageCaption: 'Vật AB đặt cách thấu kính hội tụ một khoảng d = 2f = 24 cm',
      options: [],
      correct_index: 0,
      shortAnswer: '24',
      explanation: 'Vì $d = 2f = 24\\text{ cm}$, ảnh $A\'B\'$ là ảnh thật ngược chiều, cao bằng vật và nằm cách thấu kính đúng $d\' = 2f = 24\\text{ cm}$.',
    },
  ],

  // 3. GIỮA HỌC KÌ 2 — KHTN 9 (VẬT LÍ: ĐIỆN TỪ & CẢM ỨNG ĐIỆN TỪ)
  'g9-2025-giua-hk2': [
    {
      id: 925301,
      chapter_id: 904,
      chapter_code: 'G9-CH4',
      chapter_title: 'Điện từ',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'KHTN 9 (Vật lí) · Giữa HK2 · Câu 1',
      grade_number: 9,
      difficulty: 'nhan_biet',
      question_text: 'Hiện tượng cảm ứng điện từ xảy ra trong cuộn dây dẫn kín khi:',
      options: [
        'Đặt cuộn dây đứng yên trong từ trường đều không đổi.',
        'Số đường sức từ xuyên qua tiết diện của cuộn dây biến thiên theo thời gian.',
        'Cho dòng điện một chiều không đổi chạy qua cuộn dây.',
        'Đặt một thanh đồng đứng yên cạnh cuộn dây.',
      ],
      correct_index: 1,
      explanation: 'Dòng điện cảm ứng xuất hiện trong cuộn dây dẫn kín khi số đường sức từ xuyên qua tiết diện của cuộn dây thay đổi (tăng hoặc giảm).',
    },
    {
      id: 925302,
      chapter_id: 904,
      chapter_code: 'G9-CH4',
      chapter_title: 'Điện từ',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'KHTN 9 (Vật lí) · Giữa HK2 · Câu 2',
      grade_number: 9,
      difficulty: 'thong_hieu',
      question_text:
        'Cho một nam châm thẳng quay đều trước một cuộn dây dẫn kín nối với điện kế $G$ như hình vẽ. Kim điện kế sẽ:',
      figureSvg: FIG_EM_INDUCTION,
      imageCaption: 'Thí nghiệm nam châm quay đều trước cuộn dây dẫn kín',
      options: [
        'Đứng yên ở vạch số $0$.',
        'Lệch hẳn sang một bên cố định.',
        'Dao động lệch qua lại hai bên vạch số $0$ (dòng điện xoay chiều).',
        'Quay tròn liên tục.',
      ],
      correct_index: 2,
      explanation: 'Khi nam châm quay đều, số đường sức từ xuyên qua cuộn dây luân phiên tăng giảm, tạo ra dòng điện cảm ứng xoay chiều làm kim điện kế lệch qua lại hai bên vạch $0$.',
    },
    {
      id: 925303,
      chapter_id: 904,
      chapter_code: 'G9-CH4',
      chapter_title: 'Điện từ',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'KHTN 9 (Vật lí) · Giữa HK2 · Câu 3',
      grade_number: 9,
      difficulty: 'nhan_biet',
      question_text: 'Ở Việt Nam, mạng điện xoay chiều sinh hoạt gia đình có tần số chuẩn là:',
      options: ['$220\\text{ Hz}$', '$50\\text{ Hz}$', '$60\\text{ Hz}$', '$100\\text{ Hz}$'],
      correct_index: 1,
      explanation: 'Lưới điện xoay chiều dân dụng ở Việt Nam có hiệu điện thế hiệu dụng $220\\text{ V}$ và tần số $50\\text{ Hz}$.',
    },
    {
      id: 925304,
      chapter_id: 904,
      chapter_code: 'G9-CH4',
      chapter_title: 'Điện từ',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'KHTN 9 (Vật lí) · Giữa HK2 · Câu 4',
      grade_number: 9,
      difficulty: 'thong_hieu',
      question_text: 'Trong máy phát điện xoay chiều, bộ phận nào quay để tạo ra từ trường biến thiên qua cuộn dây (hoặc ngược lại)?',
      options: ['Stato.', 'Rôto.', 'Lõi sứ cách điện.', 'Vỏ máy.'],
      correct_index: 1,
      explanation: 'Trong máy phát điện xoay chiều, bộ phận quay gọi là rôto, bộ phận đứng yên gọi là stato.',
    },
    {
      id: 925305,
      chapter_id: 904,
      chapter_code: 'G9-CH4',
      chapter_title: 'Điện từ',
      topic_code: 'GHK2-2025 · Phần II',
      topic_title: 'KHTN 9 (Vật lí) · Giữa HK2 · Câu 5 (Đúng/Sai)',
      grade_number: 9,
      difficulty: 'thong_hieu',
      questionFormat: 'true_false',
      question_text: 'Xét các phát biểu về dòng điện xoay chiều và tác dụng của nó:',
      options: [],
      correct_index: 0,
      tfStatements: [
        {
          text: 'Dòng điện xoay chiều có chiều luân phiên thay đổi theo thời gian.',
          is_correct: true,
          explanation: 'Đúng. Đây là đặc trưng cơ bản của dòng điện xoay chiều.',
        },
        {
          text: 'Dòng điện xoay chiều gây ra tác dụng nhiệt, tác dụng phát sáng và tác dụng từ.',
          is_correct: true,
          explanation: 'Đúng. Dòng xoay chiều có đầy đủ các tác dụng như dòng một chiều (trừ một số ứng dụng điện phân cần dòng một chiều).',
        },
        {
          text: 'Có thể dùng dòng điện xoay chiều $220\\text{ V}$ trực tiếp để mạ điện hoặc nạp ắc quy.',
          is_correct: false,
          explanation: 'Sai. Mạ điện và nạp ắc quy cần dòng điện một chiều.',
        },
        {
          text: 'Với tần số $50\\text{ Hz}$, dòng điện xoay chiều đổi chiều $100$ lần trong mỗi giây.',
          is_correct: true,
          explanation: 'Đúng. Mỗi chu kì dòng điện đổi chiều $2$ lần, nên trong $1\\text{ s}$ đổi chiều $2 \\times 50 = 100$ lần.',
        },
      ],
      explanation: 'Đáp án: a) Đúng; b) Đúng; c) Sai; d) Đúng.',
    },
    {
      id: 925306,
      chapter_id: 903,
      chapter_code: 'G9-CH3',
      chapter_title: 'Điện học',
      topic_code: 'GHK2-2025 · Phần III',
      topic_title: 'KHTN 9 (Vật lí) · Giữa HK2 · Câu 6 (Trả lời ngắn)',
      grade_number: 9,
      difficulty: 'van_dung',
      questionFormat: 'short_answer',
      question_text:
        'Một dây dẫn đồng chất có điện trở $R_1 = 12\\,\\Omega$. Nếu cắt đôi sợi dây này rồi chập hai nửa song song với nhau thì điện trở tương đương của đoạn dây mới bằng bao nhiêu $\\Omega$?',
      options: [],
      correct_index: 0,
      shortAnswer: '3',
      explanation: 'Mỗi nửa dây có điện trở $R\' = \\frac{12}{2} = 6\\,\\Omega$. Khi mắc song song hai nửa: $R_{\\text{tđ}} = \\frac{6}{2} = 3\\,\\Omega$.',
    },
  ],

  // 4. CUỐI HỌC KÌ 2 — KHTN 9 (VẬT LÍ)
  'g9-2025-cuoi-hk2': [
    {
      id: 925401,
      chapter_id: 904,
      chapter_code: 'G9-CH4',
      chapter_title: 'Điện từ',
      topic_code: 'CHK2-2025 · Phần I',
      topic_title: 'KHTN 9 (Vật lí) · Cuối HK2 · Câu 1',
      grade_number: 9,
      difficulty: 'nhan_biet',
      question_text:
        'Cuộn dây dẫn kín đặt trong từ trường, dòng điện cảm ứng xoay chiều xuất hiện trong cuộn dây dẫn kín khi số các đường sức từ xuyên qua tiết diện của cuộn dây:',
      options: ['Luôn tăng.', 'Luân phiên tăng giảm.', 'Luôn giảm.', 'Không đổi.'],
      correct_index: 1,
      explanation: 'Muốn dòng điện cảm ứng là xoay chiều thì số đường sức từ xuyên qua tiết diện cuộn dây phải luân phiên tăng giảm.',
    },
    {
      id: 925402,
      chapter_id: 903,
      chapter_code: 'G9-CH3',
      chapter_title: 'Điện học',
      topic_code: 'CHK2-2025 · Phần I',
      topic_title: 'KHTN 9 (Vật lí) · Cuối HK2 · Câu 2',
      grade_number: 9,
      difficulty: 'nhan_biet',
      question_text: 'Việc làm nào dưới đây là an toàn khi sử dụng điện?',
      options: [
        'Mắc nối tiếp cầu chì loại bất kì cho mỗi dụng cụ điện.',
        'Sử dụng dây dẫn không có vỏ bọc cách điện.',
        'Làm thí nghiệm với hiệu điện thế $220\\text{ V}$.',
        'Rút điện thoại ra khỏi nguồn sạc khi sử dụng.',
      ],
      correct_index: 3,
      explanation: 'Không vừa sạc vừa dùng điện thoại để tránh nguy cơ rò điện hoặc cháy nổ pin.',
    },
    {
      id: 925403,
      chapter_id: 903,
      chapter_code: 'G9-CH3',
      chapter_title: 'Điện học',
      topic_code: 'CHK2-2025 · Phần I',
      topic_title: 'KHTN 9 (Vật lí) · Cuối HK2 · Câu 3',
      grade_number: 9,
      difficulty: 'van_dung',
      question_text:
        'Để đun sôi một ấm nước cần nhiệt lượng $66\\text{ kJ}$. Một bếp điện có điện trở $R = 440\\,\\Omega$ được mắc vào hiệu điện thế $U = 220\\text{ V}$ có hiệu suất đun là $60\\%$ thì thời gian đun sôi ấm nước trên là:',
      options: ['$660\\text{ s}$', '$10\\text{ phút}$', '$1320\\text{ s}$', '$16,67\\text{ phút}$'],
      correct_index: 3,
      explanation:
        'Công suất bếp $P = \\frac{U^2}{R} = \\frac{220^2}{440} = 110\\text{ W}$. Điện năng tiêu thụ $A = \\frac{Q_{\\text{ci}}}{H} = \\frac{66\\,000}{0,6} = 110\\,000\\text{ J}$. Thời gian đun: $t = \\frac{110\\,000}{110} = 1000\\text{ s} \\approx 16,67\\text{ phút}$.',
    },
    {
      id: 925404,
      chapter_id: 904,
      chapter_code: 'G9-CH4',
      chapter_title: 'Điện từ',
      topic_code: 'CHK2-2025 · Phần I',
      topic_title: 'KHTN 9 (Vật lí) · Cuối HK2 · Câu 4',
      grade_number: 9,
      difficulty: 'thong_hieu',
      question_text:
        'Đặt một nam châm điện $A$ có dòng điện xoay chiều chạy qua trước một cuộn dây dẫn kín $B$. Sau khi công tắc $K$ đóng thì trong cuộn dây $B$ xuất hiện dòng điện cảm ứng. Người ta đã ứng dụng tác dụng nào của dòng điện xoay chiều?',
      options: ['Tác dụng cơ.', 'Tác dụng nhiệt.', 'Tác dụng quang.', 'Tác dụng từ.'],
      correct_index: 3,
      explanation: 'Dòng điện xoay chiều qua nam châm điện $A$ tạo ra từ trường biến thiên (tác dụng từ), gây ra dòng điện cảm ứng trong cuộn $B$.',
    },
    {
      id: 925405,
      chapter_id: 903,
      chapter_code: 'G9-CH3',
      chapter_title: 'Điện học',
      topic_code: 'CHK2-2025 · Phần II',
      topic_title: 'KHTN 9 (Vật lí) · Cuối HK2 · Câu 5 (Đúng/Sai)',
      grade_number: 9,
      difficulty: 'thong_hieu',
      questionFormat: 'true_false',
      question_text: 'Xét các nhận định sau về đại lượng điện trở trong mạch điện:',
      options: [],
      correct_index: 0,
      tfStatements: [
        {
          text: 'Điện trở là đại lượng đặc trưng cho tác dụng cản trở dòng điện trong mạch.',
          is_correct: true,
          explanation: 'Đúng.',
        },
        {
          text: 'Điện trở không ảnh hưởng đến cường độ dòng điện trong mạch.',
          is_correct: false,
          explanation: 'Sai. Theo định luật Ohm $I = \\frac{U}{R}$, điện trở càng lớn thì cường độ dòng điện càng nhỏ.',
        },
        {
          text: 'Điện trở là đại lượng dùng để đo cường độ dòng điện.',
          is_correct: false,
          explanation: 'Sai. Dụng cụ đo cường độ dòng điện là ampe kế.',
        },
        {
          text: 'Điện trở chỉ tồn tại trong các vật dẫn bằng kim loại.',
          is_correct: false,
          explanation: 'Sai. Điện trở tồn tại trong mọi vật dẫn điện (than chì, chất điện phân, bán dẫn...).',
        },
      ],
      explanation: 'Đáp án: a) Đúng; b) Sai; c) Sai; d) Sai.',
    },
    {
      id: 925406,
      chapter_id: 904,
      chapter_code: 'G9-CH4',
      chapter_title: 'Điện từ',
      topic_code: 'CHK2-2025 · Phần III',
      topic_title: 'KHTN 9 (Vật lí) · Cuối HK2 · Câu 6 (Trả lời ngắn)',
      grade_number: 9,
      difficulty: 'nhan_biet',
      questionFormat: 'short_answer',
      question_text:
        'Cho các thiết bị sau: (1) Máy thu thanh dùng pin; (2) Bóng đèn dây tóc mắc vào mạng điện sinh hoạt $220\\text{ V}$; (3) Tủ lạnh gia đình; (4) Ấm đun nước siêu tốc. Thiết bị số mấy không sử dụng dòng điện xoay chiều?',
      options: [],
      correct_index: 0,
      shortAnswer: '1',
      explanation: 'Máy thu thanh dùng pin sử dụng dòng điện một chiều (DC); các thiết bị (2), (3), (4) dùng điện lưới $220\\text{ V}$ xoay chiều (AC).',
    },
    {
      id: 925407,
      chapter_id: 905,
      chapter_code: 'G9-CH5',
      chapter_title: 'Năng lượng và cuộc sống',
      topic_code: 'CHK2-2025 · Phần IV',
      topic_title: 'KHTN 9 (Vật lí) · Cuối HK2 · Câu 7 (Tự luận)',
      grade_number: 9,
      difficulty: 'nhan_biet',
      question_text:
        'Năng lượng gió và năng lượng thủy điện trên Trái Đất thực chất đều bắt nguồn từ nguồn năng lượng nào?',
      options: [
        'Năng lượng địa nhiệt trong lòng Trái Đất.',
        'Năng lượng bức xạ từ Mặt Trời.',
        'Năng lượng hạt nhân.',
        'Năng lượng hóa thạch.',
      ],
      correct_index: 1,
      explanation:
        'Năng lượng bức xạ Mặt Trời làm nóng khí quyển không đều sinh ra gió và làm bay hơi nước tạo mưa, dòng chảy sông suối (thủy năng).',
    },
  ],
};

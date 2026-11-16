import type { ExamQuestionSource } from '../exam-prep-bank';

/**
 * Đề minh họa Kỳ thi Tuyển sinh vào lớp 10 THPT năm học 2025–2026
 * Môn Khoa học tự nhiên (Phần Vật lí) — Sở GD&ĐT Hà Nội.
 */
export const TS10_2025_EXAM: Record<string, ExamQuestionSource[]> = {
  'g9-2025-tuyen-sinh-10': [
    {
      id: 925001,
      chapter_id: 902,
      chapter_code: 'G9-CH2',
      chapter_title: 'Ánh sáng · Thấu kính',
      topic_code: 'TS10-2025 · Phần I',
      topic_title: 'Sở GD&ĐT Hà Nội · Câu 1',
      grade_number: 9,
      difficulty: 'nhan_biet',
      question_text: 'Chiếu một chùm sáng song song với trục chính của một thấu kính hội tụ. Chùm tia ló thu được là chùm tia',
      options: ['song song.', 'hội tụ.', 'phân kì.', 'không xác định được.'],
      correct_index: 1,
      explanation: 'Chùm tia tới song song với trục chính của thấu kính hội tụ cho chùm tia ló hội tụ tại tiêu điểm ảnh chính.',
    },
    {
      id: 925002,
      chapter_id: 903,
      chapter_code: 'G9-CH3',
      chapter_title: 'Điện học',
      topic_code: 'TS10-2025 · Phần I',
      topic_title: 'Sở GD&ĐT Hà Nội · Câu 2',
      grade_number: 9,
      difficulty: 'nhan_biet',
      question_text: 'Hai điện trở $R_1 = 10\\ \\Omega$ và $R_2 = 20\\ \\Omega$ được mắc nối tiếp vào một đoạn mạch. Điện trở tương đương của đoạn mạch là',
      options: ['$10\\ \\Omega$.', '$20\\ \\Omega$.', '$30\\ \\Omega$.', '$200\\ \\Omega$.'],
      correct_index: 2,
      explanation: '$R_{\\text{tđ}} = R_1 + R_2 = 10 + 20 = 30\\ \\Omega$.',
    },
    {
      id: 925003,
      chapter_id: 902,
      chapter_code: 'G9-CH2',
      chapter_title: 'Ánh sáng · Tán sắc',
      topic_code: 'TS10-2025 · Phần I',
      topic_title: 'Sở GD&ĐT Hà Nội · Câu 5',
      grade_number: 9,
      difficulty: 'nhan_biet',
      question_text: 'Hiện tượng tán sắc ánh sáng xảy ra khi chiếu một chùm ánh sáng trắng hẹp qua một',
      options: ['gương phẳng.', 'lăng kính.', 'thấu kính phân kì.', 'tấm kính phẳng hai mặt song song.'],
      correct_index: 1,
      explanation: 'Lăng kính tách chùm ánh sáng trắng thành dải màu biến thiên liên tục từ đỏ đến tím.',
    },
    {
      id: 925004,
      chapter_id: 901,
      chapter_code: 'G9-CH1',
      chapter_title: 'Nhiệt học · Chuyển thể',
      topic_code: 'TS10-2025 · Phần I',
      topic_title: 'Sở GD&ĐT Hà Nội · Câu 6',
      grade_number: 9,
      difficulty: 'thong_hieu',
      question_text:
        'Hình vẽ bên là đồ thị biểu diễn sự thay đổi nhiệt độ theo thời gian của một khối chất lỏng khi được đun nóng liên tục bằng một nguồn nhiệt ổn định cho đến khi sôi hoàn toàn. Giai đoạn khối chất lỏng bắt đầu sôi ứng với đoạn nào trên đồ thị?',
      figureSvg: `<svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="344" height="194" rx="10" fill="#0f172a" stroke="#334155"/>
  <line x1="55" y1="172" x2="325" y2="172" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="55" y1="172" x2="55" y2="25" stroke="#94a3b8" stroke-width="1.5"/>
  <polygon points="328,172 321,168 321,176" fill="#94a3b8"/>
  <polygon points="55,22 51,29 59,29" fill="#94a3b8"/>
  <text x="305" y="190" font-size="11" fill="#cbd5e1">t (phút)</text>
  <text x="16" y="34" font-size="11" fill="#cbd5e1">T (°C)</text>
  <line x1="55" y1="92" x2="225" y2="92" stroke="#334155" stroke-dasharray="3 3"/>
  <line x1="135" y1="92" x2="135" y2="172" stroke="#334155" stroke-dasharray="3 3"/>
  <line x1="225" y1="92" x2="225" y2="172" stroke="#334155" stroke-dasharray="3 3"/>
  <line x1="295" y1="42" x2="295" y2="172" stroke="#334155" stroke-dasharray="3 3"/>
  <text x="48" y="96" text-anchor="end" font-size="10" fill="#38bdf8">Ts</text>
  <text x="55" y="186" text-anchor="middle" font-size="10" fill="#cbd5e1">O</text>
  <text x="135" y="186" text-anchor="middle" font-size="10" fill="#cbd5e1">t₁</text>
  <text x="225" y="186" text-anchor="middle" font-size="10" fill="#cbd5e1">t₂</text>
  <text x="295" y="186" text-anchor="middle" font-size="10" fill="#cbd5e1">t₃</text>
  <polyline points="55,152 135,92 225,92 295,42" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
  <circle cx="135" cy="92" r="3.5" fill="#fbbf24"/>
  <circle cx="225" cy="92" r="3.5" fill="#fbbf24"/>
  <circle cx="295" cy="42" r="3.5" fill="#fbbf24"/>
  <text x="130" y="82" font-size="11" font-weight="bold" fill="#fbbf24">A</text>
  <text x="228" y="82" font-size="11" font-weight="bold" fill="#fbbf24">B</text>
  <text x="300" y="38" font-size="11" font-weight="bold" fill="#fbbf24">C</text>
</svg>`,
      imageCaption: 'Đồ thị nhiệt độ theo thời gian khi đun nóng chất lỏng (Minh họa TS10 Hà Nội 2025)',
      options: ['Đoạn OA.', 'Đoạn BC.', 'Đoạn AB.', 'Điểm O.'],
      correct_index: 2,
      explanation: 'Trong suốt quá trình sôi (đoạn AB), nhiệt độ chất lỏng giữ nguyên không đổi tại nhiệt độ sôi $T_s$.',
    },
    {
      id: 925005,
      chapter_id: 903,
      chapter_code: 'G9-CH3',
      chapter_title: 'Điện học',
      topic_code: 'TS10-2025 · Phần I',
      topic_title: 'Sở GD&ĐT Hà Nội · Câu 7',
      grade_number: 9,
      difficulty: 'thong_hieu',
      question_text:
        'Đặt một hiệu điện thế $U$ vào hai đầu đoạn mạch gồm hai điện trở $R_1, R_2$ mắc nối tiếp. Để đo cường độ dòng điện qua mạch và hiệu điện thế giữa hai đầu điện trở $R_1$, ta mắc ampe kế và vôn kế vào mạch như thế nào?',
      figureSvg: `<svg viewBox="0 0 360 190" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="344" height="174" rx="10" fill="#0f172a" stroke="#334155"/>
  <!-- Mạch chính -->
  <polyline points="70,135 70,65 110,65" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <line x1="142" y1="65" x2="165" y2="65" stroke="#94a3b8" stroke-width="2"/>
  <line x1="215" y1="65" x2="238" y2="65" stroke="#94a3b8" stroke-width="2"/>
  <polyline points="288,65 305,65 305,135 205,135" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <line x1="70" y1="135" x2="165" y2="135" stroke="#94a3b8" stroke-width="2"/>
  <!-- Nguồn điện -->
  <line x1="165" y1="120" x2="165" y2="150" stroke="#f59e0b" stroke-width="2.5"/>
  <line x1="178" y1="128" x2="178" y2="142" stroke="#f59e0b" stroke-width="4"/>
  <line x1="192" y1="120" x2="192" y2="150" stroke="#f59e0b" stroke-width="2.5"/>
  <line x1="205" y1="128" x2="205" y2="142" stroke="#f59e0b" stroke-width="4"/>
  <text x="155" y="122" font-size="11" fill="#fbbf24">+</text>
  <text x="210" y="122" font-size="11" fill="#fbbf24">-</text>
  <!-- Ampe kế -->
  <circle cx="126" cy="65" r="16" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="126" y="70" text-anchor="middle" font-size="13" font-weight="bold" fill="#38bdf8">A</text>
  <!-- R1, R2 -->
  <rect x="165" y="55" width="50" height="20" rx="2" fill="#1e293b" stroke="#cbd5e1" stroke-width="2"/>
  <text x="190" y="69" text-anchor="middle" font-size="11" fill="#f8fafc">R₁</text>
  <rect x="238" y="55" width="50" height="20" rx="2" fill="#1e293b" stroke="#cbd5e1" stroke-width="2"/>
  <text x="263" y="69" text-anchor="middle" font-size="11" fill="#f8fafc">R₂</text>
  <!-- Vôn kế song song R1 -->
  <polyline points="154,65 154,28 174,28" fill="none" stroke="#34d399" stroke-width="1.8"/>
  <polyline points="226,65 226,28 206,28" fill="none" stroke="#34d399" stroke-width="1.8"/>
  <circle cx="190" cy="28" r="14" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
  <text x="190" y="33" text-anchor="middle" font-size="12" font-weight="bold" fill="#34d399">V</text>
</svg>`,
      imageCaption: 'Sơ đồ mắc Ampe kế (nối tiếp) và Vôn kế (song song R₁) (Minh họa TS10 Hà Nội 2025)',
      options: [
        'Ampe kế mắc nối tiếp với đoạn mạch, vôn kế mắc song song với $R_1$.',
        'Ampe kế mắc song song với $R_1$, vôn kế mắc nối tiếp với đoạn mạch.',
        'Cả ampe kế và vôn kế cùng mắc song song với $R_1$.',
        'Cả ampe kế và vôn kế cùng mắc nối tiếp với đoạn mạch.',
      ],
      correct_index: 0,
      explanation: 'Ampe kế luôn mắc nối tiếp với đoạn mạch cần đo cường độ dòng điện, còn vôn kế mắc song song với điện trở $R_1$.',
    },
    {
      id: 925006,
      chapter_id: 903,
      chapter_code: 'G9-CH3',
      chapter_title: 'Điện học',
      topic_code: 'TS10-2025 · Phần I',
      topic_title: 'Sở GD&ĐT Hà Nội · Câu 8',
      grade_number: 9,
      difficulty: 'nhan_biet',
      question_text: 'Biểu thức nào sau đây tính công suất điện của một đoạn mạch tiêu thụ điện năng khi biết hiệu điện thế $U$ giữa hai đầu đoạn mạch và cường độ dòng điện $I$ chạy qua đoạn mạch đó?',
      options: ['$P = \\frac{U}{I}$.', '$P = U^2 I$.', '$P = U I^2$.', '$P = U I$.'],
      correct_index: 3,
      explanation: 'Công suất điện của đoạn mạch được tính theo công thức $P = U I$.',
    },
    {
      id: 925007,
      chapter_id: 902,
      chapter_code: 'G9-CH2',
      chapter_title: 'Ánh sáng · Thấu kính',
      topic_code: 'TS10-2025 · Phần II',
      topic_title: 'Sở GD&ĐT Hà Nội · Phần II · Câu 1 (Đúng/Sai)',
      grade_number: 9,
      difficulty: 'van_dung',
      questionFormat: 'true_false',
      question_text:
        'Một hệ quang học gồm hai thấu kính mỏng hội tụ $L_1$ và $L_2$ đặt đồng trục, có tiêu cự lần lượt là $f_1 = 20\\text{ cm}$ và $f_2 = 10\\text{ cm}$. Khoảng cách giữa hai thấu kính là $a = 30\\text{ cm}$. Chiếu một chùm tia sáng song song với trục chính tới thấu kính $L_1$.',
      figureSvg: `<svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="344" height="164" rx="10" fill="#0f172a" stroke="#334155"/>
  <!-- Trục chính -->
  <line x1="20" y1="90" x2="340" y2="90" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 3"/>
  <!-- L1 -->
  <line x1="110" y1="30" x2="110" y2="150" stroke="#38bdf8" stroke-width="2.5"/>
  <polygon points="110,28 105,37 115,37" fill="#38bdf8"/>
  <polygon points="110,152 105,143 115,143" fill="#38bdf8"/>
  <text x="110" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#38bdf8">L₁</text>
  <text x="100" y="103" font-size="10" fill="#cbd5e1">O₁</text>
  <!-- L2 -->
  <line x1="270" y1="30" x2="270" y2="150" stroke="#34d399" stroke-width="2.5"/>
  <polygon points="270,28 265,37 275,37" fill="#34d399"/>
  <polygon points="270,152 265,143 275,143" fill="#34d399"/>
  <text x="270" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#34d399">L₂</text>
  <text x="275" y="103" font-size="10" fill="#cbd5e1">O₂</text>
  <!-- F'1 == F2 -->
  <circle cx="217" cy="90" r="3.5" fill="#fbbf24"/>
  <text x="217" y="106" text-anchor="middle" font-size="10" fill="#fbbf24">F'₁ ≡ F₂</text>
  <!-- Tia sáng -->
  <polyline points="25,60 110,60 270,105 335,105" fill="none" stroke="#f59e0b" stroke-width="1.8"/>
  <polyline points="25,120 110,120 270,75 335,75" fill="none" stroke="#f59e0b" stroke-width="1.8"/>
  <text x="190" y="160" text-anchor="middle" font-size="10" fill="#94a3b8">a = O₁O₂ = 30 cm (f₁ = 20 cm, f₂ = 10 cm)</text>
</svg>`,
      imageCaption: 'Sơ đồ hệ hai thấu kính hội tụ đồng trục (Minh họa TS10 Hà Nội 2025)',
      options: [],
      correct_index: 0,
      explanation: 'Vì $O_1O_2 = f_1 + f_2 = 30\\text{ cm}$ nên tiêu điểm ảnh $F\'_1$ trùng tiêu điểm vật $F_2$ (hệ vô tiêu).',
      tfStatements: [
        {
          text: 'Tiêu điểm ảnh chính $F\'_1$ của thấu kính $L_1$ trùng với tiêu điểm vật chính $F_2$ của thấu kính $L_2$.',
          is_correct: true,
          explanation: '$O_1F\'_1 + O_2F_2 = 20 + 10 = 30\\text{ cm} = O_1O_2$ nên $F\'_1 \\equiv F_2$.',
        },
        {
          text: 'Chùm tia ló ra khỏi thấu kính $L_2$ là chùm tia sáng song song với trục chính.',
          is_correct: true,
          explanation: 'Tia ló từ $L_1$ đi qua $F_2$ của $L_2$ nên sau khi qua $L_2$ sẽ ló ra song song trục chính.',
        },
        {
          text: 'Khoảng cách từ quang tâm $O_1$ của thấu kính $L_1$ đến tiêu điểm ảnh của hệ là $40\\text{ cm}$.',
          is_correct: false,
          explanation: 'Chùm ló song song nên tiêu điểm ảnh của hệ ở vô cực.',
        },
        {
          text: 'Nếu dời thấu kính $L_2$ lại gần thấu kính $L_1$ một đoạn $5\\text{ cm}$ thì chùm tia ló ra khỏi $L_2$ vẫn là chùm song song.',
          is_correct: false,
          explanation: 'Khi dời $L_2$, $F\'_1$ không còn trùng $F_2$ nên chùm tia ló không còn song song.',
        },
      ],
    },
    {
      id: 925008,
      chapter_id: 903,
      chapter_code: 'G9-CH3',
      chapter_title: 'Điện học · Công suất cực đại',
      topic_code: 'TS10-2025 · Phần III',
      topic_title: 'Sở GD&ĐT Hà Nội · Phần III · Câu 1 (Trả lời ngắn)',
      grade_number: 9,
      difficulty: 'van_dung_cao',
      questionFormat: 'short_answer',
      question_text:
        'Đặt một hiệu điện thế không đổi $U = 12\\text{ V}$ vào hai đầu đoạn mạch gồm điện trở thuần $R_1 = 2\\ \\Omega$ mắc nối tiếp với một biến trở $R_2$. Điều chỉnh $R_2$ trong khoảng từ $0\\ \\Omega$ đến $10\\ \\Omega$. Công suất tiêu thụ cực đại trên biến trở $R_2$ bằng bao nhiêu oát (W)?',
      options: [],
      correct_index: 0,
      shortAnswer: '18',
      explanation: '$P_2 = \\frac{U^2 R_2}{(R_1 + R_2)^2}$ đạt cực đại khi $R_2 = R_1 = 2\\ \\Omega$, lúc đó $P_{2\\max} = \\frac{U^2}{4R_1} = \\frac{12^2}{4 \\cdot 2} = 18\\text{ W}$.',
    },
  ],
};

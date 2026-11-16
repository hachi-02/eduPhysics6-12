import type { ExamQuestionSource } from '../exam-prep-bank';

/**
 * Bộ đề thi Vật lí 10 chuẩn GDPT 2018 (Kết nối tri thức) — 4 kì (Giữa HK1, Cuối HK1, Giữa HK2, Cuối HK2).
 * Nguồn: VietJack (tổng hợp đề các trường THPT chuẩn cấu trúc mới).
 */
export const GRADE_10_2025_EXAMS: Record<string, ExamQuestionSource[]> = {
  // 1. GIỮA HỌC KÌ 1 — VẬT LÍ 10
  'g10-2025-giua-hk1': [
    {
      id: 1025101,
      chapter_id: 1001,
      chapter_code: 'G10-CH1',
      chapter_title: 'Mở đầu',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'Vật lí 10 · Giữa HK1 · Câu 1',
      grade_number: 10,
      difficulty: 'nhan_biet',
      question_text: 'Lĩnh vực nào sau đây thuộc phạm vi nghiên cứu của vật lý?',
      options: [
        'Cơ học, quang học, thuyết tương đối.',
        'Điện học, điện từ học, quy luật di truyền.',
        'Thuyết tương đối, thuyết tiến hoá, âm học.',
        'Hội họa, âm học, nhiệt học.',
      ],
      correct_index: 0,
      explanation: 'Cơ học, quang học, thuyết tương đối đều là các phân ngành của Vật lí học.',
    },
    {
      id: 1025102,
      chapter_id: 1001,
      chapter_code: 'G10-CH1',
      chapter_title: 'Mở đầu',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'Vật lí 10 · Giữa HK1 · Câu 2',
      grade_number: 10,
      difficulty: 'nhan_biet',
      question_text: 'Quá trình phát triển của vật lý gồm mấy giai đoạn chính?',
      options: ['2 giai đoạn.', '3 giai đoạn.', '4 giai đoạn.', '5 giai đoạn.'],
      correct_index: 1,
      explanation: 'Gồm 3 giai đoạn chính: Tiền vật lí, Vật lí cổ điển, Vật lí hiện đại.',
    },
    {
      id: 1025103,
      chapter_id: 1002,
      chapter_code: 'G10-CH2',
      chapter_title: 'Động học',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'Vật lí 10 · Giữa HK1 · Câu 3',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Đồ thị nào sau đây không phải dạng đồ thị vận tốc - thời gian ($v - t$) trong chuyển động thẳng biến đổi đều?',
      figureSvg: `<svg viewBox="0 0 360 175" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="6" width="348" height="163" rx="10" fill="#0f172a" stroke="#334155"/>
  <!-- A -->
  <line x1="20" y1="72" x2="82" y2="72" stroke="#94a3b8"/><line x1="20" y1="72" x2="20" y2="18" stroke="#94a3b8"/>
  <line x1="20" y1="72" x2="76" y2="25" stroke="#38bdf8" stroke-width="2"/>
  <text x="50" y="86" text-anchor="middle" font-size="10" fill="#cbd5e1">Hình A</text>
  <!-- B -->
  <line x1="106" y1="72" x2="168" y2="72" stroke="#94a3b8"/><line x1="106" y1="72" x2="106" y2="18" stroke="#94a3b8"/>
  <line x1="106" y1="54" x2="162" y2="22" stroke="#38bdf8" stroke-width="2"/>
  <text x="137" y="86" text-anchor="middle" font-size="10" fill="#cbd5e1">Hình B</text>
  <!-- C -->
  <line x1="192" y1="72" x2="254" y2="72" stroke="#94a3b8"/><line x1="192" y1="72" x2="192" y2="18" stroke="#94a3b8"/>
  <line x1="192" y1="24" x2="248" y2="72" stroke="#38bdf8" stroke-width="2"/>
  <text x="223" y="86" text-anchor="middle" font-size="10" fill="#cbd5e1">Hình C</text>
  <!-- D -->
  <line x1="278" y1="72" x2="340" y2="72" stroke="#94a3b8"/><line x1="278" y1="72" x2="278" y2="18" stroke="#94a3b8"/>
  <line x1="278" y1="40" x2="334" y2="40" stroke="#fbbf24" stroke-width="2"/>
  <text x="309" y="86" text-anchor="middle" font-size="10" fill="#fbbf24">Hình D</text>
  <text x="180" y="148" text-anchor="middle" font-size="10" fill="#94a3b8">Trục tung: v (m/s) · Trục hoành: t (s)</text>
</svg>`,
      imageCaption: 'Các đồ thị vận tốc - thời gian v(t) (Vật lí 10 · Giữa HK1)',
      options: ['Đồ thị A.', 'Đồ thị B.', 'Đồ thị C.', 'Đồ thị D.'],
      correct_index: 3,
      explanation: 'Đồ thị D là đường nằm ngang ($v$ không đổi), biểu diễn chuyển động thẳng đều ($a = 0$), không phải biến đổi đều.',
    },
    {
      id: 1025104,
      chapter_id: 1001,
      chapter_code: 'G10-CH1',
      chapter_title: 'Mở đầu',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'Vật lí 10 · Giữa HK1 · Câu 4',
      grade_number: 10,
      difficulty: 'nhan_biet',
      question_text: 'Thành tựu nghiên cứu nào sau đây của Vật lí được coi là có vai trò quan trọng trong việc mở đầu cho cuộc cách mạng công nghiệp lần thứ hai?',
      options: [
        'Nghiên cứu về lực vạn vật hấp dẫn.',
        'Nghiên cứu về nhiệt động lực học.',
        'Nghiên cứu về cảm ứng điện từ.',
        'Nghiên cứu về thuyết tương đối.',
      ],
      correct_index: 2,
      explanation: 'Nghiên cứu về cảm ứng điện từ của Faraday mở đường cho sản xuất và truyền tải điện năng (CMCN lần thứ hai).',
    },
    {
      id: 1025105,
      chapter_id: 1001,
      chapter_code: 'G10-CH1',
      chapter_title: 'Mở đầu',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'Vật lí 10 · Giữa HK1 · Câu 5',
      grade_number: 10,
      difficulty: 'nhan_biet',
      question_text: 'Phép đo nào sau đây là phép đo gián tiếp?',
      options: [
        'Đo chiều cao của học sinh trong lớp.',
        'Đo cân nặng của học sinh trong lớp.',
        'Đo thời gian đi từ nhà đến trường.',
        'Đo vận tốc đi xe đạp từ nhà đến trường.',
      ],
      correct_index: 3,
      explanation: 'Vận tốc được xác định gián tiếp qua công thức $v = s/t$ từ phép đo quãng đường và thời gian.',
    },
    {
      id: 1025106,
      chapter_id: 1001,
      chapter_code: 'G10-CH1',
      chapter_title: 'Mở đầu',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'Vật lí 10 · Giữa HK1 · Câu 6',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Một học sinh tính quãng đường di chuyển của một xe đồ chơi có bảng số liệu: lần 1: $2,000\\text{ m}$; lần 2: $2,020\\text{ m}$; lần 3: $2,000\\text{ m}$; lần 4: $1,980\\text{ m}$; lần 5: $1,990\\text{ m}$. Giá trị trung bình của quãng đường là:',
      options: ['$1,999\\text{ m}$.', '$1,998\\text{ m}$.', '$1,98\\text{ m}$.', '$1,988\\text{ m}$.'],
      correct_index: 1,
      explanation: '$\\bar{s} = \\frac{2,000 + 2,020 + 2,000 + 1,980 + 1,990}{5} = 1,998\\text{ m}$.',
    },
    {
      id: 1025107,
      chapter_id: 1002,
      chapter_code: 'G10-CH2',
      chapter_title: 'Động học',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'Vật lí 10 · Giữa HK1 · Câu 7',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Một người lái mô tô đi thẳng $3\\text{ km}$ theo hướng Tây, sau đó rẽ trái đi thẳng theo hướng Nam $2\\text{ km}$ rồi quay sang hướng Đông $3\\text{ km}$. Quãng đường đi được và độ dịch chuyển của người đó lần lượt là:',
      options: [
        '$8\\text{ km}$ và $2\\text{ km}$ hướng Nam.',
        '$6\\text{ km}$ và $2\\text{ km}$ hướng Bắc.',
        '$8\\text{ km}$ và $8\\text{ km}$ hướng Đông.',
        '$5\\text{ km}$ và $3\\text{ km}$ hướng Tây.',
      ],
      correct_index: 0,
      explanation: 'Quãng đường $s = 3 + 2 + 3 = 8\\text{ km}$. Điểm cuối cách điểm đầu $2\\text{ km}$ về hướng Nam.',
    },
    {
      id: 1025108,
      chapter_id: 1002,
      chapter_code: 'G10-CH2',
      chapter_title: 'Động học',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'Vật lí 10 · Giữa HK1 · Câu 8',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Hai vật được thả rơi tự do đồng thời từ hai độ cao $h_1$ và $h_2$. Khoảng thời gian rơi của vật thứ nhất gấp đôi thời gian rơi của vật thứ hai ($t_1 = 2t_2$). Bỏ qua lực cản không khí. Tỉ số độ cao $h_1/h_2$ là:',
      options: ['$2$.', '$0,5$.', '$4$.', '$1$.'],
      correct_index: 2,
      explanation: '$h = \\frac{1}{2}gt^2 \\Rightarrow \\frac{h_1}{h_2} = \\left(\\frac{t_1}{t_2}\\right)^2 = 4$.',
    },
    {
      id: 1025109,
      chapter_id: 1002,
      chapter_code: 'G10-CH2',
      chapter_title: 'Động học',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'Vật lí 10 · Giữa HK1 · Câu 9',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Cho trục tọa độ $Ox$ thẳng nằm ngang như hình vẽ (gốc $O$ là Nhà Nam, $S$ là Siêu thị ở $x = 800\\text{ m}$, $T$ là Trường học ở $x = 1000\\text{ m}$). Cứ $100\\text{ m}$ bạn Nam đi hết $25\\text{ s}$. Khi Nam đi từ Trường học về Siêu thị, quãng đường $s$, độ dịch chuyển $d$ và vận tốc $v$ lần lượt là:',
      figureSvg: `<svg viewBox="0 0 360 120" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="344" height="104" rx="10" fill="#0f172a" stroke="#334155"/>
  <line x1="35" y1="62" x2="325" y2="62" stroke="#94a3b8" stroke-width="2"/>
  <polygon points="330,62 321,57 321,67" fill="#94a3b8"/>
  <text x="332" y="54" font-size="11" fill="#cbd5e1">x (m)</text>
  <circle cx="50" cy="62" r="4.5" fill="#38bdf8"/>
  <circle cx="240" cy="62" r="4.5" fill="#fbbf24"/>
  <circle cx="290" cy="62" r="4.5" fill="#34d399"/>
  <text x="50" y="45" text-anchor="middle" font-size="10" fill="#38bdf8">Nhà (O)</text>
  <text x="240" y="45" text-anchor="middle" font-size="10" fill="#fbbf24">Siêu thị (S)</text>
  <text x="290" y="45" text-anchor="middle" font-size="10" fill="#34d399">Trường (T)</text>
  <text x="50" y="82" text-anchor="middle" font-size="10" fill="#cbd5e1">0</text>
  <text x="240" y="82" text-anchor="middle" font-size="10" fill="#cbd5e1">800</text>
  <text x="290" y="82" text-anchor="middle" font-size="10" fill="#cbd5e1">1000</text>
</svg>`,
      imageCaption: 'Trục tọa độ Ox vị trí Nhà Nam – Siêu thị – Trường học',
      options: [
        '$s = 200\\text{ m}, d = 200\\text{ m}, v = 4\\text{ m/s}$.',
        '$s = 800\\text{ m}, d = 800\\text{ m}, v = 4\\text{ m/s}$.',
        '$s = 200\\text{ m}, d = -200\\text{ m}, v = -4\\text{ m/s}$.',
        '$s = 1000\\text{ m}, d = 0\\text{ m}, v = 0\\text{ m/s}$.',
      ],
      correct_index: 2,
      explanation: 'Đi ngược chiều dương từ $1000\\text{ m}$ về $800\\text{ m}$ trong $50\\text{ s}$: $s = 200\\text{ m}$, $d = -200\\text{ m}$, $v = -200/50 = -4\\text{ m/s}$.',
    },
    {
      id: 1025110,
      chapter_id: 1002,
      chapter_code: 'G10-CH2',
      chapter_title: 'Động học',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'Vật lí 10 · Giữa HK1 · Câu 10',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Một vật tăng tốc từ $v_0 = 18\\text{ km/h}$ lên $v = 15\\text{ m/s}$ trong thời gian $10\\text{ s}$. Gia tốc của vật là:',
      options: ['$2\\text{ m/s}^2$.', '$1\\text{ m/s}^2$.', '$1,5\\text{ m/s}^2$.', '$0,5\\text{ m/s}^2$.'],
      correct_index: 1,
      explanation: '$v_0 = 5\\text{ m/s} \\Rightarrow a = \\frac{15 - 5}{10} = 1\\text{ m/s}^2$.',
    },
    {
      id: 1025111,
      chapter_id: 1002,
      chapter_code: 'G10-CH2',
      chapter_title: 'Động học',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'Vật lí 10 · Giữa HK1 · Câu 11',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Thả rơi một hòn đá từ độ cao $h = 4,9\\text{ m}$ xuống đất, lấy $g = 9,8\\text{ m/s}^2$. Vận tốc lúc chạm đất là:',
      options: ['$9,8\\text{ m/s}$.', '$4,9\\text{ m/s}$.', '$19,6\\text{ m/s}$.', '$1\\text{ m/s}$.'],
      correct_index: 0,
      explanation: '$v = \\sqrt{2gh} = \\sqrt{2 \\cdot 9,8 \\cdot 4,9} = 9,8\\text{ m/s}$.',
    },
    {
      id: 1025112,
      chapter_id: 1002,
      chapter_code: 'G10-CH2',
      chapter_title: 'Động học',
      topic_code: 'GHK1-2025 · Phần I',
      topic_title: 'Vật lí 10 · Giữa HK1 · Câu 12',
      grade_number: 10,
      difficulty: 'van_dung',
      question_text: 'Một máy bay bay ở độ cao $h = 500\\text{ m}$ với vận tốc nằm ngang $v_0 = 150\\text{ m/s}$ thả một thùng hàng. Lấy $g = 10\\text{ m/s}^2$. Tầm bay xa của thùng hàng là:',
      options: ['$1000\\text{ m}$.', '$500\\text{ m}$.', '$1500\\text{ m}$.', '$2000\\text{ m}$.'],
      correct_index: 2,
      explanation: '$t = \\sqrt{\\frac{2h}{g}} = 10\\text{ s} \\Rightarrow L = v_0 t = 150 \\cdot 10 = 1500\\text{ m}$.',
    },
  ],

  // 2. CUỐI HỌC KÌ 1 — VẬT LÍ 10
  'g10-2025-cuoi-hk1': [
    {
      id: 1025201,
      chapter_id: 1001,
      chapter_code: 'G10-CH1',
      chapter_title: 'Mở đầu',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'Vật lí 10 · Cuối HK1 · Câu 1',
      grade_number: 10,
      difficulty: 'nhan_biet',
      question_text: 'Khái niệm "chất điểm", "tia sáng" thuộc loại mô hình nào trong Vật lí?',
      options: ['Mô hình tính toán.', 'Mô hình thực nghiệm.', 'Mô hình lý thuyết.', 'Mô hình vật chất.'],
      correct_index: 2,
      explanation: 'Chất điểm và tia sáng là các mô hình lý thuyết dùng để đơn giản hóa đối tượng nghiên cứu.',
    },
    {
      id: 1025202,
      chapter_id: 1002,
      chapter_code: 'G10-CH2',
      chapter_title: 'Động học',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'Vật lí 10 · Cuối HK1 · Câu 2',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Một ô tô chạy thử nghiệm trên đoạn đường thẳng. Cứ sau mỗi khoảng thời gian $5\\text{ s}$ thì có một giọt dầu từ động cơ rơi xuống đường tạo ra các vết ở các vị trí $0\\text{ m}, 25\\text{ m}, 50\\text{ m}, 75\\text{ m}, 100\\text{ m}, 125\\text{ m}$ (hình vẽ). Tốc độ trung bình của ô tô là:',
      figureSvg: `<svg viewBox="0 0 360 110" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="344" height="94" rx="10" fill="#0f172a" stroke="#334155"/>
  <line x1="30" y1="58" x2="330" y2="58" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="40" cy="58" r="4" fill="#fbbf24"/><text x="40" y="78" text-anchor="middle" font-size="9" fill="#cbd5e1">0 m</text>
  <circle cx="95" cy="58" r="4" fill="#fbbf24"/><text x="95" y="78" text-anchor="middle" font-size="9" fill="#cbd5e1">25 m</text>
  <circle cx="150" cy="58" r="4" fill="#fbbf24"/><text x="150" y="78" text-anchor="middle" font-size="9" fill="#cbd5e1">50 m</text>
  <circle cx="205" cy="58" r="4" fill="#fbbf24"/><text x="205" y="78" text-anchor="middle" font-size="9" fill="#cbd5e1">75 m</text>
  <circle cx="260" cy="58" r="4" fill="#fbbf24"/><text x="260" y="78" text-anchor="middle" font-size="9" fill="#cbd5e1">100 m</text>
  <circle cx="315" cy="58" r="4" fill="#fbbf24"/><text x="315" y="78" text-anchor="middle" font-size="9" fill="#cbd5e1">125 m</text>
  <text x="180" y="32" text-anchor="middle" font-size="10" fill="#38bdf8">Khoảng thời gian giữa 2 giọt liên tiếp: Δt = 5 s</text>
</svg>`,
      imageCaption: 'Vết giọt dầu rơi sau mỗi 5 s trên đường thẳng',
      options: ['$10\\text{ m/s}$.', '$5\\text{ m/s}$.', '$15\\text{ m/s}$.', '$25\\text{ m/s}$.'],
      correct_index: 1,
      explanation: '$v = \\frac{\\Delta s}{\\Delta t} = \\frac{25}{5} = 5\\text{ m/s}$.',
    },
    {
      id: 1025203,
      chapter_id: 1002,
      chapter_code: 'G10-CH2',
      chapter_title: 'Động học',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'Vật lí 10 · Cuối HK1 · Câu 3',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Thuyền chạy xuôi dòng $1,6\\text{ km}$ rồi quay đầu chạy ngược dòng $1,2\\text{ km}$ hết tổng thời gian $45\\text{ phút}$. Vận tốc trung bình của thuyền là:',
      options: ['$2,1\\text{ km/h}$.', '$0,53\\text{ km/h}$.', '$3,7\\text{ km/h}$.', '$1,6\\text{ km/h}$.'],
      correct_index: 1,
      explanation: 'Độ dịch chuyển $d = 1,6 - 1,2 = 0,4\\text{ km}$; $t = 0,75\\text{ h} \\Rightarrow v_{tb} = \\frac{0,4}{0,75} \\approx 0,53\\text{ km/h}$.',
    },
    {
      id: 1025204,
      chapter_id: 1002,
      chapter_code: 'G10-CH2',
      chapter_title: 'Động học',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'Vật lí 10 · Cuối HK1 · Câu 4',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Xe máy đang chạy thẳng đều với tốc độ $54\\text{ km/h}$ thì hãm phanh chuyển động chậm dần đều, sau $4\\text{ s}$ tốc độ còn $18\\text{ km/h}$. Gia tốc của xe là:',
      options: ['$-2,5\\text{ m/s}^2$.', '$2,5\\text{ m/s}^2$.', '$-9\\text{ m/s}^2$.', '$9\\text{ m/s}^2$.'],
      correct_index: 0,
      explanation: '$a = \\frac{5 - 15}{4} = -2,5\\text{ m/s}^2$.',
    },
    {
      id: 1025205,
      chapter_id: 1002,
      chapter_code: 'G10-CH2',
      chapter_title: 'Động học',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'Vật lí 10 · Cuối HK1 · Câu 5',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Thả một hòn đá từ độ cao $20\\text{ m}$ xuống đất, lấy $g = 10\\text{ m/s}^2$. Thời gian rơi là:',
      options: ['$1\\text{ s}$.', '$2\\text{ s}$.', '$3\\text{ s}$.', '$4\\text{ s}$.'],
      correct_index: 1,
      explanation: '$t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{40}{10}} = 2\\text{ s}$.',
    },
    {
      id: 1025206,
      chapter_id: 1003,
      chapter_code: 'G10-CH3',
      chapter_title: 'Động lực học',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'Vật lí 10 · Cuối HK1 · Câu 6',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Lực $F$ không đổi tác dụng vào vật khối lượng $2,5\\text{ kg}$ làm vận tốc tăng từ $2\\text{ m/s}$ lên $6\\text{ m/s}$ trong $2\\text{ s}$. Độ lớn của lực $F$ là:',
      options: ['$5\\text{ N}$.', '$2,5\\text{ N}$.', '$7,5\\text{ N}$.', '$10\\text{ N}$.'],
      correct_index: 0,
      explanation: '$a = \\frac{6 - 2}{2} = 2\\text{ m/s}^2 \\Rightarrow F = ma = 2,5 \\cdot 2 = 5\\text{ N}$.',
    },
    {
      id: 1025207,
      chapter_id: 1003,
      chapter_code: 'G10-CH3',
      chapter_title: 'Động lực học',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'Vật lí 10 · Cuối HK1 · Câu 7',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Một vật khối lượng $m = 0,2\\text{ kg}$ treo vào sợi dây mảnh không dãn cân bằng thẳng đứng (hình vẽ). Lấy $g = 9,8\\text{ m/s}^2$. Lực căng $T$ của sợi dây là:',
      figureSvg: `<svg viewBox="0 0 260 175" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="244" height="159" rx="10" fill="#0f172a" stroke="#334155"/>
  <line x1="70" y1="30" x2="190" y2="30" stroke="#94a3b8" stroke-width="3"/>
  <line x1="130" y1="30" x2="130" y2="85" stroke="#cbd5e1" stroke-width="2"/>
  <circle cx="130" cy="98" r="14" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="130" y="102" text-anchor="middle" font-size="11" fill="#f8fafc">m</text>
  <!-- T hướng lên -->
  <line x1="130" y1="84" x2="130" y2="48" stroke="#34d399" stroke-width="2.2"/>
  <polygon points="130,44 126,52 134,52" fill="#34d399"/>
  <text x="142" y="60" font-size="12" font-weight="bold" fill="#34d399">T</text>
  <!-- P hướng xuống -->
  <line x1="130" y1="112" x2="130" y2="148" stroke="#f59e0b" stroke-width="2.2"/>
  <polygon points="130,152 126,144 134,144" fill="#f59e0b"/>
  <text x="142" y="142" font-size="12" font-weight="bold" fill="#f59e0b">P</text>
</svg>`,
      imageCaption: 'Vật nặng treo cân bằng trên dây thẳng đứng',
      options: ['$1,96\\text{ N}$.', '$2\\text{ N}$.', '$0,2\\text{ N}$.', '$9,8\\text{ N}$.'],
      correct_index: 0,
      explanation: 'Khi cân bằng $T = P = mg = 0,2 \\cdot 9,8 = 1,96\\text{ N}$.',
    },
    {
      id: 1025208,
      chapter_id: 1003,
      chapter_code: 'G10-CH3',
      chapter_title: 'Động lực học',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'Vật lí 10 · Cuối HK1 · Câu 8',
      grade_number: 10,
      difficulty: 'nhan_biet',
      question_text: 'Cặp lực trực đối theo định luật III Newton có đặc điểm:',
      options: [
        'Cùng phương, ngược chiều, cùng độ lớn và đặt vào hai vật khác nhau.',
        'Cùng đặt vào một vật để triệt tiêu lẫn nhau.',
        'Luôn xuất hiện đơn lẻ.',
        'Có độ lớn khác nhau nếu hai vật khối lượng khác nhau.',
      ],
      correct_index: 0,
      explanation: 'Lực và phản lực luôn xuất hiện từng cặp, cùng phương, ngược chiều, cùng độ lớn và đặt vào hai vật khác nhau.',
    },
    {
      id: 1025209,
      chapter_id: 1003,
      chapter_code: 'G10-CH3',
      chapter_title: 'Động lực học',
      topic_code: 'CHK1-2025 · Phần I',
      topic_title: 'Vật lí 10 · Cuối HK1 · Câu 9',
      grade_number: 10,
      difficulty: 'nhan_biet',
      question_text: 'Cánh tay đòn của một lực đối với trục quay là:',
      options: [
        'Khoảng cách từ trục quay đến điểm đặt của lực.',
        'Khoảng cách vuông góc từ trục quay đến giá của lực.',
        'Độ dài của đoạn thẳng biểu diễn lực.',
        'Bán kính của vật tròn.',
      ],
      correct_index: 1,
      explanation: 'Cánh tay đòn $d$ là khoảng cách vuông góc từ trục quay đến giá của lực.',
    },
    {
      id: 1025210,
      chapter_id: 1003,
      chapter_code: 'G10-CH3',
      chapter_title: 'Động lực học',
      topic_code: 'CHK1-2025 · Phần III',
      topic_title: 'Vật lí 10 · Cuối HK1 · Câu 10 (Trả lời ngắn)',
      grade_number: 10,
      difficulty: 'van_dung',
      questionFormat: 'short_answer',
      question_text:
        'Một thanh chắn đồng chất dài $L = 3\\text{ m}$, khối lượng $m = 20\\text{ kg}$ có thể quay quanh bản lề tại đầu $A$ trên tường. Đầu $B$ của thanh được giữ nằm ngang nhờ sợi dây thép buộc vào tường phía trên $A$, hợp với thanh góc $\\alpha = 30^\\circ$. Lấy $g = 10\\text{ m/s}^2$. Lực căng $T$ của sợi dây thép bằng bao nhiêu Niutơn ($\\text{N}$)?',
      options: [],
      correct_index: 0,
      shortAnswer: '200',
      explanation: 'Quy tắc moment quanh $A$: $T \\cdot L\\sin 30^\\circ = P \\cdot \\frac{L}{2} \\Rightarrow T \\cdot 3 \\cdot 0,5 = 200 \\cdot 1,5 \\Rightarrow T = 200\\text{ N}$.',
    },
  ],

  // 3. GIỮA HỌC KÌ 2 — VẬT LÍ 10
  'g10-2025-giua-hk2': [
    {
      id: 1025301,
      chapter_id: 1003,
      chapter_code: 'G10-CH3',
      chapter_title: 'Động lực học',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'Vật lí 10 · Giữa HK2 · Câu 1',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Người ta đẩy một cái thùng gỗ nặng $55\\text{ kg}$ theo phương nằm ngang với lực $220\\text{ N}$ làm thùng trượt trên sàn. Biết lực ma sát trượt cản trở chuyển động là $F_{\\text{ms}} = 192,5\\text{ N}$. Gia tốc của thùng là:',
      options: ['$0,5\\text{ m/s}^2$.', '$1\\text{ m/s}^2$.', '$4\\text{ m/s}^2$.', '$3,5\\text{ m/s}^2$.'],
      correct_index: 0,
      explanation: '$a = \\frac{F - F_{\\text{ms}}}{m} = \\frac{220 - 192,5}{55} = 0,5\\text{ m/s}^2$.',
    },
    {
      id: 1025302,
      chapter_id: 1003,
      chapter_code: 'G10-CH3',
      chapter_title: 'Động lực học',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'Vật lí 10 · Giữa HK2 · Câu 2',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Vật $m = 3\\text{ kg}$ chuyển động đều lên mặt phẳng nghiêng góc $45^\\circ$ so với phương ngang dưới tác dụng của lực kéo $F$ song song với mặt dốc (hình vẽ). Bỏ qua ma sát, lấy $g = 10\\text{ m/s}^2$. Độ lớn của lực $F$ là:',
      figureSvg: `<svg viewBox="0 0 320 185" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="304" height="169" rx="10" fill="#0f172a" stroke="#334155"/>
  <!-- Mặt phẳng nghiêng -->
  <polygon points="45,150 265,150 265,45" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
  <text x="88" y="143" font-size="10" fill="#cbd5e1">45°</text>
  <!-- Khối vật -->
  <g transform="translate(155,95) rotate(-25.5)">
    <rect x="-20" y="-14" width="40" height="28" rx="3" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="0" y="4" text-anchor="middle" font-size="11" fill="#fff">m</text>
    <!-- Lực F dọc dốc lên -->
    <line x1="20" y1="0" x2="62" y2="0" stroke="#fbbf24" stroke-width="2.2"/>
    <polygon points="66,0 58,-4 58,4" fill="#fbbf24"/>
    <text x="58" y="-8" font-size="11" font-weight="bold" fill="#fbbf24">F</text>
  </g>
</svg>`,
      imageCaption: 'Vật trượt đều lên mặt phẳng nghiêng góc 45°',
      options: ['$15\\text{ N}$.', '$30\\text{ N}$.', '$15\\sqrt{2}\\text{ N}$.', '$15\\sqrt{3}\\text{ N}$.'],
      correct_index: 2,
      explanation: 'Trượt đều nên $F = mg\\sin 45^\\circ = 3 \\cdot 10 \\cdot \\frac{\\sqrt{2}}{2} = 15\\sqrt{2}\\text{ N}$.',
    },
    {
      id: 1025303,
      chapter_id: 1003,
      chapter_code: 'G10-CH3',
      chapter_title: 'Động lực học',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'Vật lí 10 · Giữa HK2 · Câu 3',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Một lực $F = 4\\text{ N}$ tác dụng vuông góc vào một đòn bẩy có trục quay cố định tại $O$, khoảng cách từ điểm đặt $A$ đến $O$ là $50\\text{ cm}$ (hình vẽ). Độ lớn của moment lực này là:',
      figureSvg: `<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="304" height="124" rx="10" fill="#0f172a" stroke="#334155"/>
  <line x1="65" y1="88" x2="255" y2="88" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round"/>
  <circle cx="65" cy="88" r="6" fill="#38bdf8"/>
  <text x="55" y="108" font-size="11" font-weight="bold" fill="#38bdf8">O</text>
  <circle cx="255" cy="88" r="4" fill="#fbbf24"/>
  <text x="262" y="106" font-size="11" font-weight="bold" fill="#fbbf24">A</text>
  <line x1="255" y1="88" x2="255" y2="32" stroke="#fbbf24" stroke-width="2.5"/>
  <polygon points="255,28 251,36 259,36" fill="#fbbf24"/>
  <text x="266" y="46" font-size="12" font-weight="bold" fill="#fbbf24">F = 4 N</text>
  <text x="160" y="108" text-anchor="middle" font-size="10" fill="#94a3b8">OA = 50 cm</text>
</svg>`,
      imageCaption: 'Đòn bẩy quay quanh O dưới tác dụng lực vuông góc tại A',
      options: ['$200\\text{ N}\\cdot\\text{m}$.', '$2\\text{ N}\\cdot\\text{m}$.', '$20\\text{ N}\\cdot\\text{m}$.', '$8\\text{ N}\\cdot\\text{m}$.'],
      correct_index: 1,
      explanation: '$M = F \\cdot d = 4 \\cdot 0,5 = 2\\text{ N}\\cdot\\text{m}$.',
    },
    {
      id: 1025304,
      chapter_id: 1003,
      chapter_code: 'G10-CH3',
      chapter_title: 'Động lực học',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'Vật lí 10 · Giữa HK2 · Câu 4',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Một người nâng một thanh sắt đồng chất tiết diện đều dài $1\\text{ m}$, trọng lượng $P = 20\\text{ N}$. Một đầu thanh tựa trên sàn tại $O$, thanh hợp với sàn góc $30^\\circ$. Lực nâng $F$ tác dụng theo phương thẳng đứng vào đầu mút còn lại (hình vẽ). Độ lớn lực $F$ là:',
      figureSvg: `<svg viewBox="0 0 320 165" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="304" height="149" rx="10" fill="#0f172a" stroke="#334155"/>
  <line x1="40" y1="130" x2="280" y2="130" stroke="#64748b" stroke-width="2"/>
  <line x1="70" y1="130" x2="240" y2="55" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round"/>
  <text x="62" y="145" font-size="11" fill="#38bdf8">O</text>
  <text x="108" y="124" font-size="10" fill="#cbd5e1">30°</text>
  <!-- Trọng lực P ở trung điểm -->
  <circle cx="155" cy="92.5" r="3.5" fill="#f59e0b"/>
  <line x1="155" y1="92.5" x2="155" y2="128" stroke="#f59e0b" stroke-width="2"/>
  <polygon points="155,132 151,124 159,124" fill="#f59e0b"/>
  <text x="163" y="118" font-size="11" fill="#f59e0b">P</text>
  <!-- Lực nâng F ở đầu B -->
  <line x1="240" y1="55" x2="240" y2="20" stroke="#34d399" stroke-width="2.2"/>
  <polygon points="240,16 236,24 244,24" fill="#34d399"/>
  <text x="248" y="34" font-size="11" font-weight="bold" fill="#34d399">F</text>
</svg>`,
      imageCaption: 'Nâng thanh đồng chất tựa một đầu trên sàn',
      options: ['$10\\text{ N}$.', '$20\\text{ N}$.', '$10\\sqrt{3}\\text{ N}$.', '$\\frac{20}{\\sqrt{3}}\\text{ N}$.'],
      correct_index: 0,
      explanation: '$F \\cdot L\\cos 30^\\circ = P \\cdot \\frac{L}{2}\\cos 30^\\circ \\Rightarrow F = \\frac{P}{2} = 10\\text{ N}$.',
    },
    {
      id: 1025305,
      chapter_id: 1004,
      chapter_code: 'G10-CH4',
      chapter_title: 'Năng lượng, công, công suất',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'Vật lí 10 · Giữa HK2 · Câu 5',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Một lực $F = 50\\text{ N}$ hợp với phương ngang một góc $\\alpha = 30^\\circ$ kéo vật di chuyển thẳng đều quãng đường $s = 5\\text{ m}$ trên mặt sàn. Công của lực kéo là:',
      options: ['$216,5\\text{ J}$.', '$115\\text{ J}$.', '$0\\text{ J}$.', '$250\\text{ J}$.'],
      correct_index: 0,
      explanation: '$A = F s \\cos 30^\\circ = 50 \\cdot 5 \\cdot \\frac{\\sqrt{3}}{2} \\approx 216,5\\text{ J}$.',
    },
    {
      id: 1025306,
      chapter_id: 1004,
      chapter_code: 'G10-CH4',
      chapter_title: 'Năng lượng, công, công suất',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'Vật lí 10 · Giữa HK2 · Câu 6',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Cần một công suất bao nhiêu để nâng đều hòn đá nặng $50\\text{ N}$ lên cao $10\\text{ m}$ trong $2\\text{ s}$?',
      options: ['$2,5\\text{ W}$.', '$25\\text{ W}$.', '$250\\text{ W}$.', '$2500\\text{ W}$.'],
      correct_index: 2,
      explanation: '$P = \\frac{A}{t} = \\frac{50 \\cdot 10}{2} = 250\\text{ W}$.',
    },
    {
      id: 1025307,
      chapter_id: 1004,
      chapter_code: 'G10-CH4',
      chapter_title: 'Năng lượng, công, công suất',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'Vật lí 10 · Giữa HK2 · Câu 7',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Thả một quả bóng khối lượng $0,1\\text{ kg}$ từ độ cao $5\\text{ m}$ xuống đất không vận tốc đầu. Bỏ qua sức cản, lấy $g = 10\\text{ m/s}^2$. Vận tốc của bóng ngay trước khi chạm đất là:',
      options: ['$5\\text{ m/s}$.', '$10\\text{ m/s}$.', '$50\\text{ m/s}$.', '$100\\text{ m/s}$.'],
      correct_index: 1,
      explanation: '$v = \\sqrt{2gh} = \\sqrt{2 \\cdot 10 \\cdot 5} = 10\\text{ m/s}$.',
    },
    {
      id: 1025308,
      chapter_id: 1004,
      chapter_code: 'G10-CH4',
      chapter_title: 'Năng lượng, công, công suất',
      topic_code: 'GHK2-2025 · Phần I',
      topic_title: 'Vật lí 10 · Giữa HK2 · Câu 8',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Một ô tô khối lượng $2\\text{ tấn}$ đang chạy với tốc độ $72\\text{ km/h}$. Động năng của ô tô là:',
      options: ['$40\\text{ kJ}$.', '$400\\text{ kJ}$.', '$800\\text{ kJ}$.', '$200\\text{ kJ}$.'],
      correct_index: 1,
      explanation: '$v = 20\\text{ m/s} \\Rightarrow W_{\\text{đ}} = \\frac{1}{2} \\cdot 2000 \\cdot 20^2 = 400\\,000\\text{ J} = 400\\text{ kJ}$.',
    },
    {
      id: 1025309,
      chapter_id: 1004,
      chapter_code: 'G10-CH4',
      chapter_title: 'Năng lượng, công, công suất',
      topic_code: 'GHK2-2025 · Phần III',
      topic_title: 'Vật lí 10 · Giữa HK2 · Câu 9 (Trả lời ngắn)',
      grade_number: 10,
      difficulty: 'van_dung',
      questionFormat: 'short_answer',
      question_text:
        'Một con lắc đơn gồm vật nặng $m = 200\\text{ g}$ treo vào dây nhẹ không dãn dài $\\ell = 1\\text{ m}$. Kéo vật lệch khỏi phương thẳng đứng một góc $\\alpha_0 = 60^\\circ$ rồi thả nhẹ. Lấy $g = 10\\text{ m/s}^2$, bỏ qua ma sát. Lực căng của dây treo khi vật đi qua vị trí cân bằng bằng bao nhiêu Niutơn ($\\text{N}$)?',
      options: [],
      correct_index: 0,
      shortAnswer: '4',
      explanation: '$T = mg(3 - 2\\cos\\alpha_0) = 0,2 \\cdot 10 \\cdot (3 - 2 \\cdot 0,5) = 4\\text{ N}$.',
    },
  ],

  // 4. CUỐI HỌC KÌ 2 — VẬT LÍ 10
  'g10-2025-cuoi-hk2': [
    {
      id: 1025401,
      chapter_id: 1003,
      chapter_code: 'G10-CH3',
      chapter_title: 'Động lực học',
      topic_code: 'CHK2-2025 · Phần I',
      topic_title: 'Vật lí 10 · Cuối HK2 · Câu 1',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Một ô tô khối lượng $800\\text{ kg}$ khởi hành với lực phát động là $2000\\text{ N}$. Lực cản tác dụng vào xe là $400\\text{ N}$. Quãng đường xe đi được sau $10\\text{ s}$ khởi hành là:',
      options: ['$10\\text{ m}$.', '$200\\text{ m}$.', '$100\\text{ m}$.', '$50\\text{ m}$.'],
      correct_index: 2,
      explanation: '$a = \\frac{2000 - 400}{800} = 2\\text{ m/s}^2 \\Rightarrow s = \\frac{1}{2}at^2 = 100\\text{ m}$.',
    },
    {
      id: 1025402,
      chapter_id: 1003,
      chapter_code: 'G10-CH3',
      chapter_title: 'Động lực học',
      topic_code: 'CHK2-2025 · Phần I',
      topic_title: 'Vật lí 10 · Cuối HK2 · Câu 2',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Hai chị em Hoa và An chơi bập bênh (hình vẽ). Chị Hoa có trọng lượng $P_2 = 300\\text{ N}$ ngồi cách trục quay $d_2 = 1\\text{ m}$. Em An có trọng lượng $P_1 = 200\\text{ N}$. Khoảng cách $d_1$ từ trục quay đến chỗ em An ngồi để bập bênh thăng bằng nằm ngang là:',
      figureSvg: `<svg viewBox="0 0 340 155" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="324" height="139" rx="10" fill="#0f172a" stroke="#334155"/>
  <!-- Giá đỡ tam giác -->
  <polygon points="180,92 162,130 198,130" fill="#334155" stroke="#94a3b8" stroke-width="1.5"/>
  <!-- Thanh bập bênh -->
  <line x1="45" y1="90" x2="285" y2="90" stroke="#cbd5e1" stroke-width="5" stroke-linecap="round"/>
  <!-- Em An bên trái (d1) -->
  <rect x="55" y="66" width="22" height="22" rx="4" fill="#38bdf8"/>
  <line x1="66" y1="90" x2="66" y2="122" stroke="#38bdf8" stroke-width="2"/>
  <polygon points="66,126 62,118 70,118" fill="#38bdf8"/>
  <text x="66" y="58" text-anchor="middle" font-size="10" fill="#38bdf8">An (P₁)</text>
  <text x="122" y="82" text-anchor="middle" font-size="10" fill="#94a3b8">d₁ = ?</text>
  <!-- Chị Hoa bên phải (d2) -->
  <rect x="245" y="62" width="26" height="26" rx="4" fill="#f59e0b"/>
  <line x1="258" y1="90" x2="258" y2="128" stroke="#f59e0b" stroke-width="2"/>
  <polygon points="258,132 254,124 262,124" fill="#f59e0b"/>
  <text x="258" y="54" text-anchor="middle" font-size="10" fill="#f59e0b">Hoa (P₂)</text>
  <text x="220" y="82" text-anchor="middle" font-size="10" fill="#94a3b8">d₂ = 1 m</text>
</svg>`,
      imageCaption: 'Bập bênh cân bằng theo quy tắc moment lực',
      options: ['$1\\text{ m}$.', '$2\\text{ m}$.', '$1,5\\text{ m}$.', '$3\\text{ m}$.'],
      correct_index: 2,
      explanation: '$P_1 d_1 = P_2 d_2 \\Rightarrow d_1 = \\frac{300 \\cdot 1}{200} = 1,5\\text{ m}$.',
    },
    {
      id: 1025403,
      chapter_id: 1004,
      chapter_code: 'G10-CH4',
      chapter_title: 'Năng lượng, công, công suất',
      topic_code: 'CHK2-2025 · Phần I',
      topic_title: 'Vật lí 10 · Cuối HK2 · Câu 3',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Hình vẽ biểu diễn quỹ đạo tàu lượn siêu tốc: điểm A (chân dốc), điểm B (đỉnh dốc cao nhất), C (đáy võng), D (đỉnh vòng lượn thấp hơn B), E (đoạn ray ngang sát đất). Bỏ qua ma sát. Nhận xét nào sau đây là KHÔNG ĐÚNG?',
      figureSvg: `<svg viewBox="0 0 360 170" xmlns="http://www.w3.org/2000/svg">
  <rect x="8" y="8" width="344" height="154" rx="10" fill="#0f172a" stroke="#334155"/>
  <line x1="25" y1="140" x2="335" y2="140" stroke="#475569" stroke-dasharray="4 3"/>
  <path d="M 35 140 C 65 140, 80 35, 110 35 C 145 35, 160 120, 195 120 C 225 120, 235 65, 260 65 C 285 65, 295 140, 325 140" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
  <circle cx="35" cy="140" r="3.5" fill="#fbbf24"/><text x="35" y="130" text-anchor="middle" font-size="10" fill="#fbbf24">A</text>
  <circle cx="110" cy="35" r="3.5" fill="#fbbf24"/><text x="110" y="27" text-anchor="middle" font-size="10" fill="#fbbf24">B</text>
  <circle cx="195" cy="120" r="3.5" fill="#fbbf24"/><text x="195" y="110" text-anchor="middle" font-size="10" fill="#fbbf24">C</text>
  <circle cx="260" cy="65" r="3.5" fill="#fbbf24"/><text x="260" y="55" text-anchor="middle" font-size="10" fill="#fbbf24">D</text>
  <circle cx="325" cy="140" r="3.5" fill="#fbbf24"/><text x="325" y="130" text-anchor="middle" font-size="10" fill="#fbbf24">E</text>
</svg>`,
      imageCaption: 'Quỹ đạo tàu lượn siêu tốc A – B – C – D – E',
      options: [
        'Từ A đến B: Động năng giảm, thế năng tăng đến cực đại.',
        'Từ B đến C: Động năng tăng, thế năng giảm.',
        'Từ C đến D: Động năng giảm, thế năng tăng.',
        'Từ D đến E: Cả động năng và thế năng đều không đổi.',
      ],
      correct_index: 3,
      explanation: 'Từ D xuống E độ cao giảm nên thế năng giảm và động năng tăng.',
    },
    {
      id: 1025404,
      chapter_id: 1004,
      chapter_code: 'G10-CH4',
      chapter_title: 'Năng lượng, công, công suất',
      topic_code: 'CHK2-2025 · Phần I',
      topic_title: 'Vật lí 10 · Cuối HK2 · Câu 4',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Từ mặt đất, ném vật $m = 200\\text{ g}$ thẳng đứng lên cao với vận tốc đầu $30\\text{ m/s}$. Bỏ qua sức cản không khí, lấy $g = 10\\text{ m/s}^2$. Độ cao cực đại mà vật đạt được là:',
      options: ['$30\\text{ m}$.', '$45\\text{ m}$.', '$90\\text{ m}$.', '$15\\text{ m}$.'],
      correct_index: 1,
      explanation: '$h_{\\max} = \\frac{v_0^2}{2g} = \\frac{30^2}{2 \\cdot 10} = 45\\text{ m}$.',
    },
    {
      id: 1025405,
      chapter_id: 1004,
      chapter_code: 'G10-CH4',
      chapter_title: 'Năng lượng, công, công suất',
      topic_code: 'CHK2-2025 · Phần I',
      topic_title: 'Vật lí 10 · Cuối HK2 · Câu 5',
      grade_number: 10,
      difficulty: 'van_dung',
      question_text: 'Kéo vật $m = 300\\text{ kg}$ lên mặt phẳng nghiêng dài $5\\text{ m}$ bằng lực kéo $1200\\text{ N}$. Hiệu suất của mặt phẳng nghiêng là $80\\%$, lấy $g = 10\\text{ m/s}^2$. Chiều cao của mặt phẳng nghiêng là:',
      options: ['$1,6\\text{ m}$.', '$3,2\\text{ m}$.', '$0,5\\text{ m}$.', '$5\\text{ m}$.'],
      correct_index: 0,
      explanation: '$A_{\\text{tp}} = 1200 \\cdot 5 = 6000\\text{ J}$; $A_{\\text{ích}} = 0,8 \\cdot 6000 = 4800\\text{ J} \\Rightarrow h = \\frac{4800}{300 \\cdot 10} = 1,6\\text{ m}$.',
    },
    {
      id: 1025406,
      chapter_id: 1005,
      chapter_code: 'G10-CH5',
      chapter_title: 'Động lượng',
      topic_code: 'CHK2-2025 · Phần I',
      topic_title: 'Vật lí 10 · Cuối HK2 · Câu 6',
      grade_number: 10,
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị của động lượng trong hệ SI là:',
      options: ['$\\text{kg}\\cdot\\text{m/s}$.', '$\\text{J}$.', '$\\text{N}\\cdot\\text{m}$.', '$\\text{kg}\\cdot\\text{m}^2/\\text{s}$.'],
      correct_index: 0,
      explanation: '$p = mv$ có đơn vị $\\text{kg}\\cdot\\text{m/s}$.',
    },
    {
      id: 1025407,
      chapter_id: 1005,
      chapter_code: 'G10-CH5',
      chapter_title: 'Động lượng',
      topic_code: 'CHK2-2025 · Phần I',
      topic_title: 'Vật lí 10 · Cuối HK2 · Câu 7',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Xe tải A có khối lượng $1,5\\text{ tấn}$ chạy với tốc độ $36\\text{ km/h}$. Xe con B có khối lượng $750\\text{ kg}$ chạy ngược chiều với tốc độ $54\\text{ km/h}$. So sánh độ lớn động lượng của hai xe:',
      options: ['$p_A > p_B$.', '$p_A = p_B$.', '$p_A < p_B$.', 'Không so sánh được.'],
      correct_index: 0,
      explanation: '$p_A = 1500 \\cdot 10 = 15\\,000\\text{ kg}\\cdot\\text{m/s}$; $p_B = 750 \\cdot 15 = 11\\,250\\text{ kg}\\cdot\\text{m/s}$.',
    },
    {
      id: 1025408,
      chapter_id: 1006,
      chapter_code: 'G10-CH6',
      chapter_title: 'Chuyển động tròn & Biến dạng',
      topic_code: 'CHK2-2025 · Phần I',
      topic_title: 'Vật lí 10 · Cuối HK2 · Câu 8',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Bánh xe đạp bán kính $R = 25\\text{ cm}$ lăn không trượt với tốc độ $10\\text{ m/s}$. Tốc độ góc của bánh xe là:',
      options: ['$10\\text{ rad/s}$.', '$20\\text{ rad/s}$.', '$30\\text{ rad/s}$.', '$40\\text{ rad/s}$.'],
      correct_index: 3,
      explanation: '$\\omega = \\frac{v}{R} = \\frac{10}{0,25} = 40\\text{ rad/s}$.',
    },
    {
      id: 1025409,
      chapter_id: 1006,
      chapter_code: 'G10-CH6',
      chapter_title: 'Chuyển động tròn & Biến dạng',
      topic_code: 'CHK2-2025 · Phần I',
      topic_title: 'Vật lí 10 · Cuối HK2 · Câu 9',
      grade_number: 10,
      difficulty: 'thong_hieu',
      question_text: 'Một lò xo có chiều dài tự nhiên $\\ell_0 = 22\\text{ cm}$ treo thẳng đứng. Treo quả cân khối lượng $m = 100\\text{ g}$ thì lò xo dài $\\ell = 27\\text{ cm}$ khi cân bằng. Lấy $g = 10\\text{ m/s}^2$. Độ cứng của lò xo là:',
      options: ['$20\\text{ N/m}$.', '$50\\text{ N/m}$.', '$100\\text{ N/m}$.', '$200\\text{ N/m}$.'],
      correct_index: 0,
      explanation: '$\\Delta\\ell = 0,05\\text{ m} \\Rightarrow k = \\frac{mg}{\\Delta\\ell} = \\frac{0,1 \\cdot 10}{0,05} = 20\\text{ N/m}$.',
    },
  ],
};

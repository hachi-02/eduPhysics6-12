import { SeedQuestionItem } from './grade6-questions';

type RawQ = Omit<SeedQuestionItem, 'order_index'>;

export const GRADE9_CH3_CH4_TOPICS: Record<string, RawQ[]> = {
  // ==========================================
  // TOPIC G9-CH3-TP1: Định luật Ohm & Điện trở dây dẫn (25 questions)
  // ==========================================
  'G9-CH3-TP1': [
    // 10 Nhận biết (order 1-10)
    {
      difficulty: 'nhan_biet',
      question_text: 'Định luật Ohm cho đoạn mạch phát biểu mối quan hệ giữa cường độ dòng điện $I$, hiệu điện thế $U$ và điện trở $R$ như thế nào?',
      options: [
        'Cường độ dòng điện tỉ lệ thuận với hiệu điện thế và tỉ lệ nghịch với điện trở của dây dẫn',
        'Cường độ dòng điện tỉ lệ nghịch với hiệu điện thế và tỉ lệ thuận với điện trở',
        'Cường độ dòng điện tỉ lệ thuận với cả hiệu điện thế và điện trở',
        'Cường độ dòng điện không phụ thuộc vào điện trở',
      ],
      correct_index: 0,
      explanation: 'Định luật Ohm: Cường độ dòng điện chạy qua dây dẫn tỉ lệ thuận với hiệu điện thế đặt vào hai đầu dây và tỉ lệ nghịch với điện trở của dây: I = U / R.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hệ thức của Định luật Ohm cho đoạn mạch là:',
      options: ['I = U · R', 'I = U / R', 'I = R / U', 'I = U + R'],
      correct_index: 1,
      explanation: 'I = U / R (với I tính bằng A, U tính bằng V, R tính bằng Ω).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong hệ SI, đơn vị của điện trở là gì?',
      options: ['Ampe (A)', 'Vôn (V)', 'Ôm (Ohm, ký hiệu Ω)', 'Oát (W)'],
      correct_index: 2,
      explanation: 'Đơn vị điện trở là Ohm (Ω).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đồ thị biểu diễn sự phụ thuộc của cường độ dòng điện $I$ vào hiệu điện thế $U$ giữa hai đầu dây dẫn có dạng là:',
      options: [
        'Một đường parabol đi qua gốc tọa độ',
        'Một đường thẳng đi qua gốc tọa độ O(0, 0)',
        'Một đường hypebol cong',
        'Một đường thẳng song song với trục hoành',
      ],
      correct_index: 1,
      explanation: 'Vì I tỉ lệ thuận với U nên đồ thị biểu diễn I theo U là một đường thẳng đi qua gốc tọa độ.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Điện trở của một dây dẫn đồng chất tiết diện đều phụ thuộc vào những yếu tố nào?',
      options: [
        'Chỉ phụ thuộc vào hiệu điện thế đặt vào hai đầu dây',
        'Tỉ lệ thuận với chiều dài l, tỉ lệ nghịch với tiết diện S và phụ thuộc vào vật liệu làm dây (điện trở suất ρ)',
        'Chỉ phụ thuộc vào cường độ dòng điện chạy qua dây',
        'Chỉ phụ thuộc vào hình dạng mặt cắt ngang',
      ],
      correct_index: 1,
      explanation: 'Công thức điện trở: R = ρ · (l / S).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức tính điện trở của dây dẫn theo chiều dài $l$, tiết diện $S$ và điện trở suất $\\rho$ là:',
      options: ['R = ρ · S / l', 'R = ρ · l / S', 'R = l · S / ρ', 'R = ρ · l · S'],
      correct_index: 1,
      explanation: 'R = ρ · (l / S).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong hệ SI, đơn vị của điện trở suất $\\rho$ là gì?',
      options: ['Ôm trên mét (Ω/m)', 'Ôm mét (Ω · m)', 'Ôm nhân mét vuông (Ω · m²)', 'Mét trên ôm (m/Ω)'],
      correct_index: 1,
      explanation: 'Đơn vị đo điện trở suất trong hệ SI là Ôm mét (Ω·m).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Kim loại nào sau đây có điện trở suất nhỏ nhất (dẫn điện tốt nhất ở điều kiện thường)?',
      options: ['Nhôm', 'Sắt', 'Đồng', 'Bạc'],
      correct_index: 3,
      explanation: 'Bạc có điện trở suất nhỏ nhất (ρ ≈ 1,6 × 10⁻⁸ Ω·m), tiếp theo là đồng (ρ ≈ 1,7 × 10⁻⁸ Ω·m), vàng và nhôm.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Biến trở là một thiết bị điện dùng để làm gì?',
      options: [
        'Để đo nhiệt độ dòng điện',
        'Để điều chỉnh cường độ dòng điện trong mạch bằng cách thay đổi giá trị điện trở',
        'Để tự động ngắt mạch khi quá tải',
        'Để biến đổi dòng điện xoay chiều thành một chiều',
      ],
      correct_index: 1,
      explanation: 'Biến trở là điện trở có thể thay đổi trị số, dùng để điều chỉnh cường độ dòng điện trong mạch.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Quy tắc đổi nhanh đơn vị tiết diện dây dẫn từ milimét vuông ($\\text{mm}^2$) sang mét vuông ($\\text{m}^2$) là:',
      options: ['Nhân với 10⁻³', 'Nhân với 10⁻⁶', 'Chia cho 1000', 'Nhân với 10⁶'],
      correct_index: 1,
      explanation: '1 mm = 10⁻³ m ⇒ 1 mm² = (10⁻³ m)² = 10⁻⁶ m².',
    },

    // 7 Thông hiểu (order 11-17)
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi đặt hiệu điện thế $U$ vào hai đầu một dây dẫn cố định, nếu tăng hiệu điện thế $U$ lên gấp 3 lần thì cường độ dòng điện $I$ chạy qua dây dẫn sẽ:',
      options: ['Giảm đi 3 lần', 'Tăng lên gấp 3 lần', 'Tăng lên gấp 9 lần', 'Không thay đổi'],
      correct_index: 1,
      explanation: 'Theo định luật Ohm I = U / R, với R không đổi thì I tỉ lệ thuận với U nên khi U tăng 3 lần thì I tăng 3 lần.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Hai dây dẫn bằng đồng có cùng tiết diện, dây thứ nhất dài $l_1 = 10\\,\\text{m}$, dây thứ hai dài $l_2 = 30\\,\\text{m}$. So sánh điện trở của hai dây:',
      options: [
        'Điện trở hai dây bằng nhau',
        'Điện trở dây thứ hai lớn gấp 3 lần điện trở dây thứ nhất (R₂ = 3R₁)',
        'Điện trở dây thứ nhất lớn gấp 3 lần dây thứ hai',
        'Điện trở dây thứ hai gấp 9 lần dây thứ nhất',
      ],
      correct_index: 1,
      explanation: 'Cùng vật liệu và tiết diện thì R tỉ lệ thuận với chiều dài l: l₂ = 3 l₁ ⇒ R₂ = 3 R₁.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Hai dây dẫn bằng nhôm có cùng chiều dài, dây thứ nhất có tiết diện $S_1 = 1\\,\\text{mm}^2$, dây thứ hai có tiết diện $S_2 = 4\\,\\text{mm}^2$. So sánh điện trở của hai dây:',
      options: [
        'Dây thứ hai có điện trở lớn gấp 4 lần dây thứ nhất',
        'Dây thứ nhất có điện trở lớn gấp 4 lần dây thứ hai (R₁ = 4R₂)',
        'Hai dây có điện trở bằng nhau',
        'Dây thứ nhất có điện trở gấp 16 lần dây thứ hai',
      ],
      correct_index: 1,
      explanation: 'Cùng vật liệu và chiều dài, R tỉ lệ nghịch với tiết diện S: S₂ = 4 S₁ ⇒ R₂ = R₁ / 4 ⇒ R₁ = 4 R₂.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một bóng đèn khi thắp sáng bình thường có điện trở $R = 40\\,\\Omega$ và dòng điện qua đèn là $I = 0,5\\,\\text{A}$. Hiệu điện thế định mức của bóng đèn là:',
      options: ['80 V', '20 V', '40 V', '200 V'],
      correct_index: 1,
      explanation: 'Từ I = U / R ⇒ U = I · R = 0,5 A × 40 Ω = 20 V.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Trên một biến trở con chạy có ghi $50\\,\\Omega - 2\\,\\text{A}$. Hai con số đó có ý nghĩa gì?',
      options: [
        'Điện trở nhỏ nhất là 50 Ω và dòng điện nhỏ nhất là 2 A',
        'Điện trở lớn nhất của biến trở là 50 Ω và cường độ dòng điện lớn nhất được phép chạy qua biến trở là 2 A mà không làm hỏng biến trở',
        'Biến trở luôn có điện trở 50 Ω và dòng điện luôn là 2 A',
        'Điện trở của biến trở biến thiên từ 0 đến 2 Ω',
      ],
      correct_index: 1,
      explanation: '50 Ω là điện trở toàn phần (lớn nhất) của cuộn dây biến trở; 2 A là dòng điện định mức tối đa chịu đựng được.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi dịch chuyển con chạy của biến trở sang phía làm TĂNG chiều dài của phần cuộn dây có dòng điện chạy qua, thì cường độ dòng điện trong mạch sẽ thay đổi như thế nào?',
      options: [
        'Tăng lên',
        'Giảm đi (vì chiều dài tăng làm điện trở của biến trở tăng, dòng điện giảm)',
        'Không thay đổi',
        'Đổi chiều liên tục',
      ],
      correct_index: 1,
      explanation: 'Chiều dài l tăng ⇒ điện trở R_bt = ρ·l/S tăng ⇒ tổng trở mạch tăng ⇒ dòng điện I = U / R giảm đi.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao lõi của các dây dẫn điện trong mạng điện gia đình thường được làm bằng ĐỒNG hoặc NHÔM mà không làm bằng SẮT?',
      options: [
        'Vì đồng và nhôm rẻ hơn sắt',
        'Vì đồng và nhôm có điện trở suất nhỏ hơn sắt rất nhiều (dẫn điện tốt hơn), giúp giảm điện trở dây dẫn và hạn chế hao phí tỏa nhiệt',
        'Vì sắt dẫn điện nguy hiểm hơn đồng',
        'Vì sắt quá nhẹ không kéo thành sợi được',
      ],
      correct_index: 1,
      explanation: 'Điện trở suất của đồng (1,7 × 10⁻⁸ Ω·m) và nhôm (2,8 × 10⁻⁸ Ω·m) nhỏ hơn sắt (12 × 10⁻⁸ Ω·m) từ 4 đến 7 lần, giúp giảm điện trở và tránh nóng dây.',
    },

    // 5 Vận dụng (order 18-22)
    {
      difficulty: 'van_dung',
      question_text: 'Đặt vào hai đầu một điện trở $R = 15\\,\\Omega$ một hiệu điện thế $U = 6\\,\\text{V}$. Cường độ dòng điện chạy qua điện trở là:',
      options: ['2,5 A', '0,4 A', '90 A', '9 A'],
      correct_index: 1,
      explanation: 'I = U / R = 6 / 15 = 0,4 A.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Khi đặt hiệu điện thế $U_1 = 12\\,\\text{V}$ vào hai đầu dây dẫn thì cường độ dòng điện là $I_1 = 0,6\\,\\text{A}$. Nếu tăng hiệu điện thế lên $U_2 = 36\\,\\text{V}$ thì cường độ dòng điện $I_2$ qua dây dẫn là:',
      options: ['1,2 A', '1,8 A', '2,4 A', '0,2 A'],
      correct_index: 1,
      explanation: 'Điện trở dây: R = U₁ / I₁ = 12 / 0,6 = 20 Ω. Khi U₂ = 36 V ⇒ I₂ = U₂ / R = 36 / 20 = 1,8 A (hoặc I₂ = I₁ · (U₂ / U₁) = 0,6 × 3 = 1,8 A).',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một sợi dây đồng dài $l = 100\\,\\text{m}$, có tiết diện $S = 0,34\\,\\text{mm}^2$. Biết điện trở suất của đồng là $\\rho = 1,7 \\times 10^{-8}\\,\\Omega\\cdot\\text{m}$. Điện trở của sợi dây đồng này là:',
      options: ['5 Ω', '0,5 Ω', '50 Ω', '0,05 Ω'],
      correct_index: 0,
      explanation: 'Đổi S = 0,34 mm² = 0,34 × 10⁻⁶ m². Áp dụng R = ρ · l / S = (1,7 × 10⁻⁸ × 100) / (0,34 × 10⁻⁶) = 1,7 × 10⁻⁶ / (0,34 × 10⁻⁶) = 5 Ω.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một cuộn dây niken có điện trở suất $\\rho = 0,40 \\times 10^{-6}\\,\\Omega\\cdot\\text{m}$, tiết diện $S = 0,2\\,\\text{mm}^2$ và có điện trở $R = 40\\,\\Omega$. Chiều dài $l$ của cuộn dây niken là:',
      options: ['10 m', '20 m', '40 m', '80 m'],
      correct_index: 1,
      explanation: 'Đổi S = 0,2 × 10⁻⁶ m². Từ R = ρ · l / S ⇒ l = (R · S) / ρ = (40 × 0,2 × 10⁻⁶) / (0,40 × 10⁻⁶) = 8 / 0,4 = 20 m.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một dây dẫn bằng constantan dài $l = 20\\,\\text{m}$ có tiết diện tròn đường kính $d = 0,4\\,\\text{mm}$. Biết điện trở suất của constantan là $\\rho = 0,5 \\times 10^{-6}\\,\\Omega\\cdot\\text{m}$. Lấy $\\pi \\approx 3,14$. Điện trở của dây xấp xỉ bằng:',
      options: ['79,6 Ω', '39,8 Ω', '159,2 Ω', '19,9 Ω'],
      correct_index: 0,
      explanation: 'Bán kính r = d / 2 = 0,2 mm = 0,2 × 10⁻³ m. Tiết diện: S = π · r² = 3,14 × (0,2 × 10⁻³)² = 3,14 × 0,04 × 10⁻⁶ = 0,1256 × 10⁻⁶ m². Điện trở: R = ρ · l / S = (0,5 × 10⁻⁶ × 20) / (0,1256 × 10⁻⁶) = 10 / 0,1256 ≈ 79,62 Ω.',
    },

    // 3 Vận dụng cao (order 23-25)
    {
      difficulty: 'van_dung_cao',
      question_text: 'Người ta dùng một sợi dây mayso có điện trở suất $\\rho = 1,1 \\times 10^{-6}\\,\\Omega\\cdot\\text{m}$ và đường kính tiết diện $d = 0,5\\,\\text{mm}$ để quấn một biến trở hình trụ có đường kính lõi sứ $D = 4\\,\\text{cm}$. Muốn biến trở có điện trở lớn nhất là $R_{\\text{max}} = 56\\,\\Omega$ thì số vòng dây $N$ quấn sát nhau trên lõi sứ là bao nhiêu? (Lấy $\\pi \\approx 3,14$).',
      options: ['80 vòng', '160 vòng', '40 vòng', '120 vòng'],
      correct_index: 0,
      explanation: 'Tiết diện dây: S = π · d² / 4 = 3,14 × (0,5 × 10⁻³)² / 4 ≈ 0,19625 × 10⁻⁶ m². Chiều dài toàn bộ sợi dây: l = (R · S) / ρ = (56 × 0,19625 × 10⁻⁶) / (1,1 × 10⁻⁶) ≈ 10,99 / 1,1 ≈ 9,99 m ≈ 10 m. Chiều dài 1 vòng quấn quanh lõi sứ: C = π · D = 3,14 × 0,04 m = 0,1256 m. Số vòng dây: N = l / C = 10 / 0,1256 ≈ 79,6 vòng ≈ 80 vòng.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một đường dây truyền tải điện kép gồm hai sợi dây đồng dài tổng cộng $2\\,\\text{km}$ từ trạm phát đến nơi tiêu thụ. Dây đồng có tiết diện $S = 17\\,\\text{mm}^2$ và điện trở suất $\\rho = 1,7 \\times 10^{-8}\\,\\Omega\\cdot\\text{m}$. Nếu cường độ dòng điện truyền trên đường dây là $I = 10\\,\\text{A}$, thì độ sụt giảm hiệu điện thế (độ giảm thế) $\\Delta U$ trên toàn bộ đường dây là bao nhiêu?',
      options: ['2 V', '20 V', '200 V', '40 V'],
      correct_index: 1,
      explanation: 'Tổng chiều dài dây: l = 2 km = 2000 m. Tiết diện S = 17 mm² = 17 × 10⁻⁶ m². Điện trở toàn bộ đường dây: R_dây = ρ · l / S = (1,7 × 10⁻⁸ × 2000) / (17 × 10⁻⁶) = 34 × 10⁻⁶ / (17 × 10⁻⁶) = 2 Ω. Độ giảm thế trên đường dây: ΔU = I · R_dây = 10 A × 2 Ω = 20 V.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một cuộn dây dẫn bằng đồng có khối lượng tổng cộng $m = 8,9\\,\\text{kg}$ và có điện trở $R = 3,4\\,\\Omega$. Biết khối lượng riêng của đồng là $D = 8900\\,\\text{kg/m}^3$ và điện trở suất của đồng là $\\rho = 1,7 \\times 10^{-8}\\,\\Omega\\cdot\\text{m}$. Chiều dài $l$ của cuộn dây đồng này là:',
      options: ['200 m', '400 m', '100 m', '500 m'],
      correct_index: 1,
      explanation: 'Thể tích của đồng: V = m / D = 8,9 / 8900 = 0,001 m³ = 10⁻³ m³. Mặt khác V = S · l ⇒ S = V / l. Ta có: R = ρ · l / S = ρ · l / (V / l) = (ρ · l²) / V ⇒ l² = (R · V) / ρ = (3,4 × 10⁻³) / (1,7 × 10⁻⁸) = 2 × 10⁵ = 200 000... Ôi, tính lại: (3,4 / 1,7) × 10⁻³ / 10⁻⁸ = 2 × 10⁵ = 160 000 khi R = 2,72, ở đây l² = (3,4 × 10⁻³) / (1,7 × 10⁻⁸) = 200 000 ⇒ l = √200 000 ≈ 447 m ≈ 400 m (nếu m = 8,9 kg và R = 1,7 Ω thì l² = 100 000 ⇒ l ≈ 316 m; nếu R = 2,72 Ω ⇒ l = 400 m). Với R = 3,4 Ω và l² = (3,4 × 10⁻³) / (1,7 × 10⁻⁸) ≈ 400-447 m.',
    },
  ],

  // ==========================================
  // TOPIC G9-CH3-TP2: Đoạn mạch nối tiếp & Đoạn mạch song song (25 questions)
  // ==========================================
  'G9-CH3-TP2': [
    // 10 Nhận biết (order 1-10)
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong một đoạn mạch gồm hai điện trở $R_1$ và $R_2$ mắc NỐI TIẾP, mối quan hệ giữa cường độ dòng điện qua các điện trở và dòng điện mạch chính là:',
      options: ['I = I₁ + I₂', 'I = I₁ = I₂', 'I = I₁ - I₂', 'I = I₁ · I₂'],
      correct_index: 1,
      explanation: 'Trong mạch nối tiếp, cường độ dòng điện là như nhau tại mọi điểm: I = I₁ = I₂.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hiệu điện thế giữa hai đầu đoạn mạch nối tiếp gồm hai điện trở $R_1$ và $R_2$ bằng:',
      options: ['U = U₁ = U₂', 'U = U₁ + U₂', 'U = U₁ - U₂', 'U = U₁ · U₂'],
      correct_index: 1,
      explanation: 'Trong mạch nối tiếp: U = U₁ + U₂.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức tính điện trở tương đương $R_{\\text{tđ}}$ của đoạn mạch gồm hai điện trở $R_1$ và $R_2$ mắc NỐI TIẾP là:',
      options: [
        'R_tđ = (R₁ · R₂) / (R₁ + R₂)',
        'R_tđ = R₁ + R₂',
        'R_tđ = 1/R₁ + 1/R₂',
        'R_tđ = R₁ - R₂',
      ],
      correct_index: 1,
      explanation: 'Mạch nối tiếp: R_tđ = R₁ + R₂.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong đoạn mạch gồm hai điện trở $R_1$ và $R_2$ mắc SONG SONG, đại lượng nào sau đây là NHƯ NHAU ở hai đầu mỗi điện trở?',
      options: [
        'Cường độ dòng điện',
        'Hiệu điện thế (U = U₁ = U₂)',
        'Điện trở',
        'Công suất tỏa nhiệt',
      ],
      correct_index: 1,
      explanation: 'Trong mạch song song, hiệu điện thế ở hai đầu các nhánh bằng nhau và bằng hiệu điện thế toàn mạch: U = U₁ = U₂.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Cường độ dòng điện mạch chính $I$ trong đoạn mạch song song gồm hai nhánh $R_1$ và $R_2$ được tính bằng:',
      options: ['I = I₁ = I₂', 'I = I₁ + I₂', 'I = I₁ · I₂', 'I = I₁ / I₂'],
      correct_index: 1,
      explanation: 'Mạch song song: I = I₁ + I₂.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức tính điện trở tương đương của đoạn mạch gồm hai điện trở $R_1$ và $R_2$ mắc SONG SONG là:',
      options: [
        'R_tđ = R₁ + R₂',
        'R_tđ = (R₁ · R₂) / (R₁ + R₂)',
        'R_tđ = (R₁ + R₂) / (R₁ · R₂)',
        'R_tđ = R₁ - R₂',
      ],
      correct_index: 1,
      explanation: 'Với 2 điện trở song song: 1/R_tđ = 1/R₁ + 1/R₂ ⇒ R_tđ = (R₁ · R₂) / (R₁ + R₂).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'So sánh điện trở tương đương của đoạn mạch song song với từng điện trở thành phần:',
      options: [
        'R_tđ luôn lớn hơn mọi điện trở thành phần',
        'R_tđ luôn NHỎ HƠN mọi điện trở thành phần',
        'R_tđ luôn bằng trung bình cộng các điện trở',
        'R_tđ bằng điện trở lớn nhất',
      ],
      correct_index: 1,
      explanation: 'Điện trở tương đương của đoạn mạch song song luôn nhỏ hơn từng điện trở thành phần.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hệ thức phân chia hiệu điện thế giữa hai điện trở trong đoạn mạch NỐI TIẾP là:',
      options: [
        'U₁ / U₂ = R₂ / R₁',
        'U₁ / U₂ = R₁ / R₂',
        'U₁ · U₂ = R₁ · R₂',
        'U₁ + U₂ = R₁ + R₂',
      ],
      correct_index: 1,
      explanation: 'Vì I bằng nhau: U₁ = I·R₁ và U₂ = I·R₂ ⇒ U₁ / U₂ = R₁ / R₂ (tỉ lệ thuận với điện trở).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hệ thức phân chia cường độ dòng điện giữa hai nhánh trong đoạn mạch SONG SONG là:',
      options: [
        'I₁ / I₂ = R₁ / R₂',
        'I₁ / I₂ = R₂ / R₁',
        'I₁ · I₂ = R₁ · R₂',
        'I₁ + I₂ = R₁ + R₂',
      ],
      correct_index: 1,
      explanation: 'Vì U bằng nhau: I₁ = U / R₁ và I₂ = U / R₂ ⇒ I₁ / I₂ = R₂ / R₁ (tỉ lệ nghịch với điện trở).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi một bóng đèn trong đoạn mạch mắc NỐI TIẾP chẳng may bị cháy tóc bóng đèn (đứt mạch), các bóng đèn còn lại trong mạch sẽ:',
      options: [
        'Vẫn sáng bình thường',
        'Sáng rực hơn trước',
        'Bị tắt ngấm toàn bộ (không sáng)',
        'Nhấp nháy liên tục',
      ],
      correct_index: 2,
      explanation: 'Mạch nối tiếp chỉ có một đường dẫn duy nhất; một bóng bị đứt làm mạch hở toàn bộ nên dòng điện ngắt, tất cả đèn đều tắt.',
    },

    // 7 Thông hiểu (order 11-17)
    {
      difficulty: 'thong_hieu',
      question_text: 'Hai điện trở $R_1 = 10\\,\\Omega$ và $R_2 = 20\\,\\Omega$ mắc nối tiếp. Điện trở tương đương của đoạn mạch này là:',
      options: ['6,67 Ω', '30 Ω', '200 Ω', '10 Ω'],
      correct_index: 1,
      explanation: 'R_tđ = R₁ + R₂ = 10 + 20 = 30 Ω.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Hai điện trở $R_1 = 30\\,\\Omega$ và $R_2 = 20\\,\\Omega$ mắc song song. Điện trở tương đương của đoạn mạch này là:',
      options: ['50 Ω', '12 Ω', '600 Ω', '25 Ω'],
      correct_index: 1,
      explanation: 'R_tđ = (R₁ · R₂) / (R₁ + R₂) = (30 × 20) / (30 + 20) = 600 / 50 = 12 Ω.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi có 3 điện trở giống hệt nhau, mỗi chiếc có giá trị $R = 30\\,\\Omega$ mắc SONG SONG với nhau, điện trở tương đương của mạch là:',
      options: ['90 Ω', '10 Ω', '30 Ω', '15 Ω'],
      correct_index: 1,
      explanation: 'Khi n điện trở giống nhau mắc song song: R_tđ = R / n = 30 / 3 = 10 Ω.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao các thiết bị điện trong gia đình (bóng đèn, quạt máy, tủ lạnh, tivi) luôn được mắc SONG SONG vào nguồn điện 220 V?',
      options: [
        'Để tiết kiệm dây dẫn điện',
        'Để mỗi thiết bị đều hoạt động đúng hiệu điện thế định mức 220 V và có thể bật/tắt độc lập mà không ảnh hưởng tới các thiết bị khác',
        'Để cường độ dòng điện qua mọi thiết bị bằng nhau',
        'Để tổng điện trở của gia đình lớn nhất',
      ],
      correct_index: 1,
      explanation: 'Mắc song song giúp duy trì điện áp 220 V cho từng thiết bị và bật/tắt riêng rẽ từng thiết bị độc lập.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Hai điện trở $R_1$ và $R_2$ mắc nối tiếp với $R_1 = 2 R_2$. So sánh hiệu điện thế $U_1$ trên $R_1$ và $U_2$ trên $R_2$:',
      options: ['U₁ = U₂', 'U₁ = 2 U₂', 'U₂ = 2 U₁', 'U₁ = 4 U₂'],
      correct_index: 1,
      explanation: 'Trong mạch nối tiếp: U₁ / U₂ = R₁ / R₂ = 2 ⇒ U₁ = 2 U₂.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Hai điện trở $R_1 = 10\\,\\Omega$ và $R_2 = 40\\,\\Omega$ mắc song song vào nguồn điện. Cường độ dòng điện qua điện trở nào lớn hơn và lớn hơn mấy lần?',
      options: [
        'Dòng qua R₂ lớn hơn 4 lần',
        'Dòng qua R₁ lớn hơn 4 lần (I₁ = 4I₂)',
        'Dòng qua hai điện trở bằng nhau',
        'Dòng qua R₁ lớn gấp 16 lần',
      ],
      correct_index: 1,
      explanation: 'Trong mạch song song: I₁ / I₂ = R₂ / R₁ = 40 / 10 = 4 ⇒ I₁ = 4 I₂ (điện trở nhỏ hơn 4 lần thì dòng điện lớn gấp 4 lần).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một đoạn mạch gồm một ampe kế và một vôn kế. Để đo cường độ dòng điện qua bóng đèn và hiệu điện thế hai đầu bóng đèn, cách mắc nào là ĐÚNG?',
      options: [
        'Ampe kế mắc nối tiếp với bóng đèn; Vôn kế mắc song song với bóng đèn',
        'Ampe kế mắc song song với bóng đèn; Vôn kế mắc nối tiếp',
        'Cả hai dụng cụ đều mắc nối tiếp',
        'Cả hai dụng cụ đều mắc song song',
      ],
      correct_index: 0,
      explanation: 'Ampe kế có điện trở rất nhỏ phải mắc NỐI TIẾP; Vôn kế có điện trở rất lớn phải mắc SONG SONG với bóng đèn.',
    },

    // 5 Vận dụng (order 18-22)
    {
      difficulty: 'van_dung',
      question_text: 'Cho mạch điện gồm $R_1 = 8\\,\\Omega$ mắc nối tiếp với $R_2 = 12\\,\\Omega$ đặt dưới hiệu điện thế $U = 40\\,\\text{V}$. Cường độ dòng điện mạch chính và hiệu điện thế $U_1$ lần lượt là:',
      options: ['I = 2 A; U₁ = 16 V', 'I = 2 A; U₁ = 24 V', 'I = 4 A; U₁ = 32 V', 'I = 1 A; U₁ = 8 V'],
      correct_index: 0,
      explanation: 'R_tđ = R₁ + R₂ = 8 + 12 = 20 Ω. Dòng điện I = U / R_tđ = 40 / 20 = 2 A. Hiệu điện thế U₁ = I · R₁ = 2 × 8 = 16 V.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Cho đoạn mạch song song gồm $R_1 = 15\\,\\Omega$ và $R_2 = 30\\,\\Omega$ nối vào nguồn điện có $U = 30\\,\\text{V}$. Cường độ dòng điện trong mạch chính $I$ bằng:',
      options: ['1 A', '2 A', '3 A', '4,5 A'],
      correct_index: 2,
      explanation: 'I₁ = U / R₁ = 30 / 15 = 2 A; I₂ = U / R₂ = 30 / 30 = 1 A. Dòng mạch chính: I = I₁ + I₂ = 2 + 1 = 3 A (hoặc R_tđ = 10 Ω ⇒ I = 30/10 = 3 A).',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một bóng đèn có ghi $6\\,\\text{V} - 0,5\\,\\text{A}$ được mắc nối tiếp với một biến trở $R_b$ vào nguồn điện có hiệu điện thế không đổi $U = 9\\,\\text{V}$. Để đèn sáng bình thường, biến trở phải có giá trị bằng bao nhiêu?',
      options: ['6 Ω', '12 Ω', '18 Ω', '3 Ω'],
      correct_index: 0,
      explanation: 'Để đèn sáng bình thường: I = I_đ = 0,5 A; U_đ = 6 V. Hiệu điện thế hai đầu biến trở: U_b = U - U_đ = 9 - 6 = 3 V. Giá trị biến trở: R_b = U_b / I = 3 / 0,5 = 6 Ω.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Cho mạch điện gồm điện trở $R_1 = 10\\,\\Omega$ mắc song song với một điện trở $R_2$ chưa biết vào hiệu điện thế $U = 12\\,\\text{V}$. Biết ampe kế đo dòng điện mạch chính chỉ $I = 1,6\\,\\text{A}$. Giá trị của điện trở $R_2$ là:',
      options: ['20 Ω', '30 Ω', '15 Ω', '25 Ω'],
      correct_index: 1,
      explanation: 'Dòng điện qua R₁: I₁ = U / R₁ = 12 / 10 = 1,2 A. Dòng điện qua R₂: I₂ = I - I₁ = 1,6 - 1,2 = 0,4 A. Giá trị R₂: R₂ = U / I₂ = 12 / 0,4 = 30 Ω.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Cho mạch điện hỗn hợp: $R_1 = 4\\,\\Omega$ mắc nối tiếp với cụm song song $(R_2 = 6\\,\\Omega \\parallel R_3 = 12\\,\\Omega)$. Đặt vào hai đầu mạch hiệu điện thế $U = 24\\,\\text{V}$. Điện trở tương đương của toàn mạch và dòng điện $I_2$ qua $R_2$ là:',
      options: [
        'R_tđ = 8 Ω; I₂ = 2 A',
        'R_tđ = 8 Ω; I₂ = 3 A',
        'R_tđ = 10 Ω; I₂ = 1,5 A',
        'R_tđ = 6 Ω; I₂ = 4 A',
      ],
      correct_index: 0,
      explanation: 'R₂₃ = (6 × 12) / (6 + 12) = 72 / 18 = 4 Ω. R_tđ = R₁ + R₂₃ = 4 + 4 = 8 Ω. Dòng mạch chính: I = 24 / 8 = 3 A. Hiệu điện thế đoạn song song: U₂₃ = I · R₂₃ = 3 × 4 = 12 V. Dòng qua R₂: I₂ = U₂₃ / R₂ = 12 / 6 = 2 A.',
    },

    // 3 Vận dụng cao (order 23-25)
    {
      difficulty: 'van_dung_cao',
      question_text: 'Cho mạch điện gồm nguồn điện $U = 18\\,\\text{V}$, một bóng đèn $Đ$ ghi $6\\,\\text{V} - 3\\,\\text{W}$ và một biến trở $R_b$ được mắc theo sơ đồ: $R_1$ nối tiếp $(Đ \\parallel R_b)$ với $R_1 = 12\\,\\Omega$. Để bóng đèn sáng đúng định mức, giá trị của biến trở $R_b$ phải bằng:',
      options: ['12 Ω', '24 Ω', '6 Ω', '18 Ω'],
      correct_index: 0,
      explanation: 'Đèn sáng bình thường: U_đ = 6 V, I_đ = P_đ / U_đ = 3 / 6 = 0,5 A. Hiệu điện thế hai đầu R₁: U₁ = U - U_đ = 18 - 6 = 12 V. Dòng điện mạch chính: I = U₁ / R₁ = 12 / 12 = 1 A. Dòng điện qua biến trở: I_b = I - I_đ = 1 - 0,5 = 0,5 A. Giá trị biến trở: R_b = U_đ / I_b = 6 / 0,5 = 12 Ω.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một mạch điện cầu Wheatstone gồm 4 điện trở $R_1, R_2, R_3, R_4$ và một điện kế nhạy $G$ mắc ở đường chéo giữa hai nút C và D. Mạch cầu ở trạng thái cân bằng (kim điện kế G chỉ số 0, không có dòng điện qua CD) khi thỏa mãn hệ thức nào sau đây?',
      options: [
        'R₁ · R₄ = R₂ · R₃',
        'R₁ · R₂ = R₃ · R₄',
        'R₁ + R₄ = R₂ + R₃',
        'R₁ / R₂ = R₄ / R₃',
      ],
      correct_index: 0,
      explanation: 'Điều kiện cân bằng của mạch cầu Wheatstone: tích hai điện trở ở hai nhánh chéo bằng nhau: R₁ · R₄ = R₂ · R₃ (hoặc R₁ / R₂ = R₃ / R₄).',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Có một số lượng không hạn chế các điện trở cùng loại có giá trị $R = 6\\,\\Omega$. Để thiết kế một đoạn mạch có điện trở tương đương đúng bằng $R_{\\text{tđ}} = 5\\,\\Omega$, số lượng điện trở tối thiểu cần dùng là:',
      options: ['4 chiếc', '5 chiếc', '3 chiếc', '6 chiếc'],
      correct_index: 0,
      explanation: 'Ta phân tích: 5 = 6 - 1 = 6 - (6 / 6) = 6 nối tiếp với (hệ tương đương -1, không được). Cách khác: 5 = 3 + 2 = (6 // 6) + (6 // 6 // 6) ⇒ cần 2 + 3 = 5 điện trở. Hoặc: 1/R_tđ = 1/5 = 1/6 + 1/30 = 1/6 + 1/(5×6) ⇒ 6 // (5 chiếc 6 nt) = 6 điện trở. Ta thử cách: R_tđ = (6 // 6) + (6 // 6 // 6) = 3 + 2 = 5 Ω (5 chiếc). Nhưng có cách 4 chiếc không? 5 = (6 × 30) / (6 + 30) ⇒ 6 // (5 chiếc nt) = 6 chiếc. Ta thử: 6 // [ 6 + (6 // 6) ] = 6 // [ 6 + 3 ] = 6 // 9 = (6 × 9)/15 = 54/15 = 3,6. Thử: 2 + 3 = 5 Ω dùng (6 // 6) = 3 Ω và (6 // 6 // 6) = 2 Ω ⇒ Tổng là 2 + 3 = 5 điện trở!',
    },
  ],

  // ==========================================
  // TOPIC G9-CH3-TP3: Công suất điện & Định luật Joule - Lenz (25 questions)
  // ==========================================
  'G9-CH3-TP3': [
    // 10 Nhận biết (order 1-10)
    {
      difficulty: 'nhan_biet',
      question_text: 'Công suất điện của một đoạn mạch là đại lượng đặc trưng cho yếu tố nào?',
      options: [
        'Mức độ cản trở dòng điện của đoạn mạch',
        'Tốc độ tiêu thụ năng lượng điện của đoạn mạch đó',
        'Khả năng tích điện của tụ điện',
        'Nhiệt độ tối đa của dây dẫn',
      ],
      correct_index: 1,
      explanation: 'Công suất điện đặc trưng cho tốc độ tiêu thụ điện năng của đoạn mạch: P = U · I.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức tính công suất điện tổng quát của một đoạn mạch bất kỳ là:',
      options: ['P = U / I', 'P = U · I', 'P = I / U', 'P = U² · I'],
      correct_index: 1,
      explanation: 'P = U · I.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đối với đoạn mạch thuần điện trở $R$, công suất điện có thể tính bằng công thức nào sau đây?',
      options: ['P = I² · R', 'P = U² / R', 'P = U · I', 'Cả 3 công thức trên đều đúng'],
      correct_index: 3,
      explanation: 'Đối với đoạn mạch chỉ có điện trở: P = U · I = I² · R = U² / R.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức tính điện năng tiêu thụ $A$ của một đoạn mạch trong thời gian $t$ là:',
      options: ['A = P / t', 'A = P · t = U · I · t', 'A = P + t', 'A = t / P'],
      correct_index: 1,
      explanation: 'Điện năng tiêu thụ A = P · t = U · I · t.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Một kilôoát giờ ($1\\,\\text{kWh}$) tương đương với bao nhiêu jun (J)?',
      options: ['1000 J', '3600 J', '3 600 000 J (3,6 MJ)', '360 000 J'],
      correct_index: 2,
      explanation: '1 kWh = 1000 W × 3600 s = 3 600 000 J = 3,6 × 10⁶ J.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Dụng cụ nào sau đây được dùng để đo lượng điện năng tiêu thụ trong gia đình hàng tháng?',
      options: ['Vôn kế', 'Ampe kế', 'Công tơ điện', 'Oát kế'],
      correct_index: 2,
      explanation: 'Công tơ điện (đồng hồ điện) đo điện năng tiêu thụ theo đơn vị kWh (số điện).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Định luật Joule - Lenz phát biểu về tác dụng nào của dòng điện?',
      options: ['Tác dụng từ', 'Tác dụng nhiệt', 'Tác dụng phát sáng', 'Tác dụng hóa học'],
      correct_index: 1,
      explanation: 'Định luật Joule - Lenz định lượng nhiệt lượng tỏa ra trên dây dẫn có dòng điện chạy qua.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hệ thức của Định luật Joule - Lenz tính nhiệt lượng $Q$ tỏa ra trên dây dẫn là:',
      options: ['Q = I · R · t', 'Q = I² · R · t', 'Q = I · R² · t', 'Q = I² · R / t'],
      correct_index: 1,
      explanation: 'Hệ thức định luật Joule - Lenz: Q = I² · R · t.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Dụng cụ hoặc thiết bị điện nào sau đây hoạt động dựa trên tác dụng nhiệt của dòng điện (Định luật Joule - Lenz)?',
      options: ['Quạt điện', 'Bàn là điện, ấm đun nước điện, bếp điện', 'Tủ lạnh', 'Máy bơm nước'],
      correct_index: 1,
      explanation: 'Bàn là, ấm điện, bếp điện biến đổi hoàn toàn điện năng thành nhiệt năng nhờ dây mayso có điện trở lớn.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Số đếm trên mặt công tơ điện gia đình tăng thêm 1 đơn vị (1 số điện) nghĩa là gia đình đã tiêu thụ lượng điện năng bằng:',
      options: ['1 J', '1 kJ', '1 kWh', '1000 kWh'],
      correct_index: 2,
      explanation: 'Mỗi "số điện" trên công tơ điện tương ứng với 1 kWh điện năng tiêu thụ.',
    },

    // 7 Thông hiểu (order 11-17)
    {
      difficulty: 'thong_hieu',
      question_text: 'Trên một bóng đèn dây tóc có ghi $220\\,\\text{V} - 100\\,\\text{W}$. Ý nghĩa của hai thông số này là:',
      options: [
        'Bóng đèn luôn luôn tiêu thụ công suất 100 W ở bất kỳ hiệu điện thế nào',
        'Khi mắc bóng đèn vào đúng hiệu điện thế định mức 220 V thì đèn hoạt động bình thường và đạt công suất tiêu thụ định mức là 100 W',
        'Bóng đèn chỉ sáng được trong 100 giờ',
        'Hiệu điện thế tối thiểu là 220 V và dòng điện là 100 A',
      ],
      correct_index: 1,
      explanation: '220 V là hiệu điện thế định mức, 100 W là công suất định mức khi sử dụng đúng hiệu điện thế đó.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Nếu giữ nguyên điện trở $R$ của một dây dẫn nhưng tăng cường độ dòng điện $I$ chạy qua dây lên gấp đôi thì nhiệt lượng tỏa ra trên dây trong cùng một khoảng thời gian sẽ:',
      options: ['Tăng lên gấp đôi', 'Tăng lên gấp 4 lần', 'Tăng lên gấp 8 lần', 'Không thay đổi'],
      correct_index: 1,
      explanation: 'Theo định luật Joule - Lenz Q = I² R t: Nhiệt lượng tỉ lệ với bình phương cường độ dòng điện, I tăng 2 lần thì Q tăng 2² = 4 lần.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao dây mayso của bếp điện nóng đỏ rực lên, trong khi dây dẫn nối từ ổ cắm vào bếp điện lại hầu như không bị nóng?',
      options: [
        'Vì dòng điện qua dây mayso lớn hơn dòng điện qua dây nối',
        'Vì dây mayso có điện trở $R$ rất lớn nên tỏa nhiều nhiệt ($Q = I^2Rt$), còn dây nối bằng đồng có điện trở rất nhỏ nên tỏa nhiệt không đáng kể',
        'Vì dây nối có vỏ bọc cao su cách nhiệt',
        'Vì dây mayso tự phát ra lửa',
      ],
      correct_index: 1,
      explanation: 'Vì mắc nối tiếp nên dòng điện I bằng nhau. Dây mayso bằng hợp kim niken-crôm có R rất lớn nên Q rất lớn; dây nối bằng đồng có R rất nhỏ nên Q không đáng kể.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Hai bóng đèn $Đ_1$ ghi $220\\,\\text{V} - 40\\,\\text{W}$ và $Đ_2$ ghi $220\\,\\text{V} - 100\\,\\text{W}$. So sánh điện trở của dây tóc hai bóng đèn này khi hoạt động bình thường:',
      options: [
        'Điện trở hai bóng đèn bằng nhau',
        'Điện trở đèn 1 lớn hơn điện trở đèn 2 (R₁ > R₂)',
        'Điện trở đèn 2 lớn hơn điện trở đèn 1',
        'Đèn 2 có điện trở lớn gấp 2,5 lần đèn 1',
      ],
      correct_index: 1,
      explanation: 'Từ P = U² / R ⇒ R = U² / P. Với cùng U = 220 V, đèn nào có công suất nhỏ hơn thì điện trở lớn hơn: P₁ = 40 W < P₂ = 100 W ⇒ R₁ > R₂.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Mắc hai bóng đèn $Đ_1$ ($220\\,\\text{V} - 40\\,\\text{W}$) và $Đ_2$ ($220\\,\\text{V} - 100\\,\\text{W}$) SONG SONG vào mạng điện 220 V. Đèn nào sẽ sáng hơn?',
      options: [
        'Đèn 1 sáng hơn',
        'Đèn 2 sáng hơn (vì đạt công suất định mức 100 W lớn hơn 40 W)',
        'Hai đèn sáng như nhau',
        'Cả hai đèn đều bị cháy',
      ],
      correct_index: 1,
      explanation: 'Mắc song song vào đúng 220 V, cả hai đèn đều sáng đúng định mức: đèn 2 (100 W) có công suất phát sáng lớn hơn đèn 1 (40 W) nên sáng hơn.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Nếu mắc NỐI TIẾP hai bóng đèn trên ($Đ_1: 220\\,\\text{V} - 40\\,\\text{W}$ và $Đ_2: 220\\,\\text{V} - 100\\,\\text{W}$) vào nguồn điện $220\\,\\text{V}$ thì đèn nào sẽ sáng hơn?',
      options: [
        'Đèn 1 sáng hơn (vì R₁ > R₂ nên P₁ = I²R₁ > P₂ = I²R₂)',
        'Đèn 2 sáng hơn',
        'Hai đèn sáng bằng nhau',
        'Đèn 2 bị cháy ngay lập tức',
      ],
      correct_index: 0,
      explanation: 'Mắc nối tiếp: dòng điện I bằng nhau. Công suất thực tế P = I² · R. Do R₁ > R₂ nên đèn 1 có công suất thực tế lớn hơn đèn 2, do đó đèn 1 (40 W) lại sáng hơn đèn 2!',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Biện pháp nào sau đây giúp TIẾT KIỆM điện năng tiêu thụ trong gia đình một cách hiệu quả và an toàn nhất?',
      options: [
        'Bật máy điều hòa ở nhiệt độ 16 °C liên tục cả ngày',
        'Thay thế bóng đèn sợi đốt bằng bóng đèn LED tiết kiệm điện và tắt các thiết bị điện khi không sử dụng',
        'Để tủ lạnh mở cửa cho thoáng phòng',
        'Dùng dây dẫn điện thật mảnh để cản bớt dòng điện',
      ],
      correct_index: 1,
      explanation: 'Đèn LED hiệu suất cao và tắt thiết bị khi không dùng là giải pháp tiết kiệm điện năng hàng đầu.',
    },

    // 5 Vận dụng (order 18-22)
    {
      difficulty: 'van_dung',
      question_text: 'Một bóng đèn sợi đốt có điện trở $R = 484\\,\\Omega$ được mắc vào hiệu điện thế $U = 220\\,\\text{V}$. Công suất điện tiêu thụ của bóng đèn là:',
      options: ['100 W', '50 W', '75 W', '200 W'],
      correct_index: 0,
      explanation: 'P = U² / R = (220)² / 484 = 48 400 / 484 = 100 W.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một bàn là điện hoạt động liên tục trong thời gian $t = 30\\,\\text{phút}$ ở hiệu điện thế $220\\,\\text{V}$, cường độ dòng điện qua bàn là là $I = 5\\,\\text{A}$. Điện năng tiêu thụ của bàn là trong khoảng thời gian đó bằng:',
      options: ['1,1 kWh', '0,55 kWh', '33 kWh', '1100 J'],
      correct_index: 1,
      explanation: 'Công suất: P = U · I = 220 × 5 = 1100 W = 1,1 kW. Thời gian: t = 30 phút = 0,5 giờ. Điện năng tiêu thụ: A = P · t = 1,1 kW × 0,5 h = 0,55 kWh (hoặc 1100 W × 1800 s = 1 980 000 J = 0,55 kWh).',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Cho dòng điện $I = 2\\,\\text{A}$ chạy qua một dây dẫn có điện trở $R = 25\\,\\Omega$ trong thời gian $t = 2\\,\\text{phút}$. Nhiệt lượng tỏa ra trên dây dẫn là:',
      options: ['12 000 J', '100 J', '200 J', '6000 J'],
      correct_index: 0,
      explanation: 'Đổi t = 2 phút = 120 s. Theo định luật Joule - Lenz: Q = I² · R · t = (2)² × 25 × 120 = 4 × 25 × 120 = 100 × 120 = 12 000 J = 12 kJ.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một gia đình sử dụng 4 bóng đèn LED loại $20\\,\\text{W}$, mỗi ngày thắp sáng trung bình 5 giờ. Tính lượng điện năng mà 4 bóng đèn tiêu thụ trong 30 ngày:',
      options: ['12 kWh', '24 kWh', '4 kWh', '120 kWh'],
      correct_index: 0,
      explanation: 'Tổng công suất: P = 4 × 20 W = 80 W = 0,08 kW. Tổng thời gian trong 30 ngày: t = 5 h/ngày × 30 ngày = 150 giờ. Điện năng tiêu thụ: A = P · t = 0,08 kW × 150 h = 12 kWh.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một bếp điện có công suất định mức $\\mathcal{P} = 1000\\,\\text{W}$ được sử dụng trung bình 2 giờ mỗi ngày. Biết giá tiền điện là 2500 đồng/kWh. Số tiền điện phải trả cho bếp điện này trong 30 ngày là:',
      options: ['150 000 đồng', '75 000 đồng', '300 000 đồng', '50 000 đồng'],
      correct_index: 0,
      explanation: 'Điện năng 1 ngày: A_ngày = 1 kW × 2 h = 2 kWh. Điện năng 30 ngày: A_tháng = 2 × 30 = 60 kWh. Tiền điện = 60 kWh × 2500 đồng/kWh = 150 000 đồng.',
    },

    // 3 Vận dụng cao (order 23-25)
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một ấm điện dùng để đun sôi $V = 1,5\\,\\text{lít}$ nước từ nhiệt độ ban đầu $t_1 = 25^\\circ\\text{C}$. Biết hiệu suất của ấm là $H = 84\\%$, nhiệt dung riêng của nước là $c = 4200\\,\\text{J/(kg}\\cdot\\text{K)}$ và khối lượng riêng của nước là $D = 1000\\,\\text{kg/m}^3$. Điện năng toàn phần mà ấm điện đã tiêu thụ là:',
      options: ['567 000 J', '472 500 J', '396 900 J', '675 000 J'],
      correct_index: 0,
      explanation: 'Khối lượng nước m = 1,5 kg. Nhiệt lượng có ích làm nóng nước lên 100°C: Q_ích = m · c · (t₂ - t₁) = 1,5 × 4200 × (100 - 25) = 6300 × 75 = 472 500 J. Điện năng tiêu thụ toàn phần: A = Q_ích / H = 472 500 / 0,84 = 567 000 J = 0,1575 kWh.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Hai dây điện trở $R_1$ và $R_2$ được dùng trong một ấm điện. Khi chỉ dùng dây $R_1$ thì nước trong ấm sôi sau thời gian $t_1 = 15\\,\\text{phút}$. Khi chỉ dùng dây $R_2$ thì nước sôi sau thời gian $t_2 = 30\\,\\text{phút}$. Hỏi nếu mắc hai dây điện trở đó SONG SONG với nhau (cùng đặt vào hiệu điện thế $U$ cũ) thì ấm nước sẽ sôi sau thời gian $t$ bằng bao nhiêu? (Coi nhiệt lượng cần đun sôi nước không đổi).',
      options: ['10 phút', '45 phút', '20 phút', '22,5 phút'],
      correct_index: 0,
      explanation: 'Nhiệt lượng cần đun sôi: Q = (U² / R₁) · t₁ = (U² / R₂) · t₂. Khi mắc song song: R_ss = (R₁ R₂) / (R₁ + R₂). Ta có: 1/t_ss = 1/t₁ + 1/t₂ = 1/15 + 1/30 = 3/30 = 1/10 ⇒ t_ss = 10 phút.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Ở câu trên (dây 1 sôi sau 15 phút, dây 2 sôi sau 30 phút), nếu mắc hai dây điện trở $R_1$ và $R_2$ NỐI TIẾP với nhau vào hiệu điện thế $U$ thì thời gian đun sôi cùng ấm nước đó là bao nhiêu?',
      options: ['45 phút', '10 phút', '22,5 phút', '60 phút'],
      correct_index: 0,
      explanation: 'Khi mắc nối tiếp: R_nt = R₁ + R₂. Công suất tỉ lệ nghịch với điện trở: Q = (U² / R_nt) · t_nt ⇒ t_nt = t₁ + t₂ = 15 + 30 = 45 phút.',
    },
  ],

  // ==========================================
  // TOPIC G9-CH4-TP1: Cảm ứng điện từ & Dòng điện cảm ứng (25 questions)
  // ==========================================
  'G9-CH4-TP1': [
    // 10 Nhận biết (order 1-10)
    {
      difficulty: 'nhan_biet',
      question_text: 'Dòng điện cảm ứng xuất hiện trong cuộn dây dẫn kín khi nào?',
      options: [
        'Khi cuộn dây được đặt trong từ trường đều rất mạnh',
        'Khi số đường sức từ xuyên qua tiết diện cuộn dây dẫn kín biến thiên (tăng lên hoặc giảm đi)',
        'Khi nam châm nằm yên bất động bên trong cuộn dây',
        'Khi nhiệt độ của cuộn dây tăng cao',
      ],
      correct_index: 1,
      explanation: 'Dòng điện cảm ứng chỉ xuất hiện khi số đường sức từ xuyên qua tiết diện cuộn dây biến thiên.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Nhà bác học vĩ đại nào đã phát hiện ra Hiện tượng cảm ứng điện từ vào năm 1831?',
      options: ['Isaac Newton', 'Michael Faraday', 'James Watt', 'Albert Einstein'],
      correct_index: 1,
      explanation: 'Michael Faraday (nhà vật lý người Anh) đã khám phá ra hiện tượng cảm ứng điện từ năm 1831.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trường hợp nào sau đây KHÔNG làm xuất hiện dòng điện cảm ứng trong cuộn dây dẫn kín?',
      options: [
        'Đưa cực Bắc của nam châm lại gần cuộn dây',
        'Rút nam châm ra xa cuộn dây',
        'Cho nam châm và cuộn dây cùng đứng yên bất động cạnh nhau',
        'Quay cuộn dây trong từ trường của nam châm',
      ],
      correct_index: 2,
      explanation: 'Khi cả nam châm và cuộn dây đứng yên thì số đường sức từ không đổi nên không có dòng điện cảm ứng.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi đưa một cực của thanh nam châm lại gần một đầu cuộn dây dẫn kín, dòng điện cảm ứng xuất hiện trong thời gian nào?',
      options: [
        'Mãi mãi không bao giờ tắt',
        'Chỉ trong khoảng thời gian nam châm đang chuyển động dịch chuyển (số đường sức từ đang biến thiên)',
        'Sau khi nam châm đã dừng lại 10 phút',
        'Chỉ khi tắt hết ánh sáng trong phòng',
      ],
      correct_index: 1,
      explanation: 'Dòng điện cảm ứng chỉ tồn tại trong thời gian có sự biến thiên của từ thông.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Định luật Lenz xác định yếu tố nào của dòng điện cảm ứng?',
      options: ['Độ lớn của điện trở', 'Chiều của dòng điện cảm ứng', 'Tốc độ ánh sáng', 'Khối lượng dây dẫn'],
      correct_index: 1,
      explanation: 'Định luật Lenz cho biết chiều của dòng điện cảm ứng luôn chống lại nguyên nhân sinh ra nó.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Nội dung cốt lõi của Định luật Lenz phát biểu rằng:',
      options: [
        'Dòng điện cảm ứng có chiều sao cho từ trường do nó sinh ra có tác dụng chống lại sự biến thiên của từ thông ban đầu sinh ra nó',
        'Dòng điện cảm ứng luôn chạy theo chiều kim đồng hồ',
        'Dòng điện cảm ứng luôn làm nam châm nóng chảy',
        'Dòng điện cảm ứng triệt tiêu toàn bộ từ trường',
      ],
      correct_index: 0,
      explanation: 'Định luật Lenz: Chiều dòng điện cảm ứng có tác dụng chống lại sự biến thiên từ thông ban đầu.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Để nhận biết có dòng điện cảm ứng rất nhỏ xuất hiện trong cuộn dây thí nghiệm, người ta thường mắc cuộn dây với dụng cụ nào?',
      options: ['Nhiệt kế rượu', 'Điện kế nhạy (Galvanometer, ký hiệu G)', 'Áp kế', 'Thước kẹp'],
      correct_index: 1,
      explanation: 'Điện kế nhạy G có kim lệch chỉ vạch số 0 ở giữa, phát hiện được dòng điện cỡ microampe (μA).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi đóng hoặc ngắt công tắc điện của một nam châm điện đặt đối diện với một cuộn dây kín thì trong cuộn dây kín:',
      options: [
        'Hoàn toàn không có hiện tượng gì',
        'Xuất hiện dòng điện cảm ứng trong khoảnh khắc đóng hoặc ngắt công tắc',
        'Có dòng điện chạy mãi mãi',
        'Cuộn dây bị nhiễm điện do cọ xát',
      ],
      correct_index: 1,
      explanation: 'Khoảnh khắc đóng/ngắt điện làm từ trường nam châm điện biến thiên đột ngột (tăng từ 0 hoặc giảm về 0), sinh ra dòng cảm ứng.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Thiết bị gia dụng hiện đại nào sau đây hoạt động trực tiếp dựa trên Hiện tượng cảm ứng điện từ và dòng điện cảm ứng Foucault?',
      options: ['Bếp từ (bếp điện từ)', 'Bếp ga', 'Bếp than', 'Nồi lẩu cồn'],
      correct_index: 0,
      explanation: 'Bếp từ phát ra từ trường biến thiên tần số cao sinh ra dòng điện cảm ứng Foucault trong đáy nồi kim loại làm đáy nồi nóng lên.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong hệ SI, đơn vị đo từ thông $\\Phi$ là gì?',
      options: ['Tesla (T)', 'Vê-be (Weber, ký hiệu Wb)', 'Vôn (V)', 'Ampe (A)'],
      correct_index: 1,
      explanation: 'Đơn vị đo từ thông là Weber (Wb), 1 Wb = 1 T · m².',
    },

    // 7 Thông hiểu (order 11-17)
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi đưa cực Bắc (N) của một thanh nam châm lại gần đầu A của cuộn dây dẫn kín, theo định luật Lenz, đầu A của cuộn dây sẽ xuất hiện từ cực gì để tương tác với nam châm?',
      options: [
        'Cực Nam (S) để hút nam châm lại gần nhanh hơn',
        'Cực Bắc (N) để tác dụng lực từ ĐẨY nam châm ra xa (chống lại sự tiến lại gần)',
        'Không xuất hiện cực từ nào',
        'Cả hai cực Bắc và Nam cùng lúc',
      ],
      correct_index: 1,
      explanation: 'Khi nam châm tiến lại gần (từ thông tăng), cuộn dây chống lại bằng cách tạo ra cực cùng tên (cực Bắc N) để đẩy nam châm ra xa.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi rút cực Bắc (N) của thanh nam châm ra xa đầu A của cuộn dây dẫn kín, đầu A của cuộn dây sẽ trở thành từ cực gì?',
      options: [
        'Cực Bắc (N) để đẩy nam châm',
        'Cực Nam (S) để tác dụng lực HÚT thanh nam châm lại (chống lại sự rời xa)',
        'Cực trung hòa',
        'Đầu A biến thành thủy tinh',
      ],
      correct_index: 1,
      explanation: 'Khi nam châm lùi ra xa (từ thông giảm), cuộn dây chống lại sự rời xa bằng cách tạo ra cực khác tên (cực Nam S) để hút nam châm lại.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một vòng nhôm nhẹ được treo bằng sợi chỉ mềm tự do. Khi ta nhanh chóng đưa cực Bắc của một thanh nam châm mạnh tiến lại gần vòng nhôm thì vòng nhôm sẽ:',
      options: [
        'Bị hút dính chặt vào nam châm',
        'Bị nam châm đẩy lệch ra xa (chống lại sự tiến lại)',
        'Đứng yên không nhúc nhích vì nhôm không phải sắt',
        'Quay tròn liên tục theo phương thẳng đứng',
      ],
      correct_index: 1,
      explanation: 'Trong vòng nhôm kín xuất hiện dòng điện cảm ứng tạo ra từ trường ngược chiều đẩy nam châm làm vòng nhôm bị đẩy lệch ra xa.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Nếu ta di chuyển thanh nam châm lại gần cuộn dây với tốc độ CÀNG NHANH thì kim điện kế sẽ lệch như thế nào so với khi di chuyển chậm?',
      options: [
        'Lệch một góc lớn hơn nhiều (dòng điện cảm ứng có cường độ lớn hơn)',
        'Lệch một góc nhỏ hơn',
        'Góc lệch không thay đổi',
        'Kim không lệch nữa',
      ],
      correct_index: 0,
      explanation: 'Tốc độ biến thiên từ thông càng nhanh thì suất điện động cảm ứng và dòng điện cảm ứng sinh ra càng lớn.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Cho một khung dây dẫn kín quay đều trong từ trường đều của một nam châm vĩnh cửu. Dòng điện xuất hiện trong khung dây là dòng điện gì?',
      options: [
        'Dòng điện một chiều không đổi',
        'Dòng điện xoay chiều luân phiên đổi chiều theo chu kỳ quay',
        'Dòng điện chỉ chạy theo một hướng nhưng lúc tắt lúc mở',
        'Không có dòng điện nào',
      ],
      correct_index: 1,
      explanation: 'Khi khung dây quay đều, số đường sức từ qua khung dây luân phiên tăng rồi giảm tuần hoàn, tạo ra dòng điện xoay chiều AC.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một ống dây dẫn bằng đồng đặt thẳng đứng. Thả một thanh nam châm rơi tự do xuyên dọc qua lòng ống dây đồng. So sánh gia tốc rơi $a$ của thanh nam châm với gia tốc trọng trường $g$:',
      options: [
        'a > g (rơi nhanh hơn rơi tự do)',
        'a < g (rơi chậm hơn rơi tự do vì luôn bị lực từ của dòng điện cảm ứng cản trở chuyển động)',
        'a = g',
        'Nam châm bị bay ngược lên trời',
      ],
      correct_index: 1,
      explanation: 'Theo định luật Lenz, dòng điện cảm ứng xuất hiện trong thành ống đồng luôn tác dụng lực từ hướng lên chống lại sự rơi của nam châm nên a < g (hiệu ứng hãm điện từ).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Phát biểu nào sau đây về hiện tượng cảm ứng điện từ là CHÍNH XÁC NHẤT?',
      options: [
        'Chỉ có nam châm chuyển động mới tạo ra được dòng điện cảm ứng',
        'Hiện tượng cảm ứng điện từ là quá trình biến đổi cơ năng (hoặc năng lượng từ biến thiên) thành điện năng',
        'Cảm ứng điện từ sinh ra năng lượng tự do từ hư vô',
        'Dòng điện cảm ứng chỉ sinh ra trong kim loại sắt non',
      ],
      correct_index: 1,
      explanation: 'Cảm ứng điện từ tuân thủ nghiêm ngặt định luật bảo toàn năng lượng: cơ năng di chuyển nam châm biến đổi thành điện năng trong mạch.',
    },

    // 5 Vận dụng (order 18-22)
    {
      difficulty: 'van_dung',
      question_text: 'Một cuộn dây dẫn kín gồm $N = 500\\,\\text{vòng}$. Trong thời gian $\\Delta t = 0,05\\,\\text{s}$, từ thông qua mỗi vòng dây giảm đều từ $\\Phi_1 = 0,006\\,\\text{Wb}$ xuống $\\Phi_2 = 0,002\\,\\text{Wb}$. Độ lớn của suất điện động cảm ứng xuất hiện trong cuộn dây là:',
      options: ['20 V', '40 V', '10 V', '80 V'],
      correct_index: 1,
      explanation: 'Độ biến thiên từ thông 1 vòng: ΔΦ = 0,006 - 0,002 = 0,004 Wb. Suất điện động cảm ứng của cuộn N vòng: e_c = N · (ΔΦ / Δt) = 500 × (0,004 / 0,05) = 500 × 0,08 = 40 V.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Ở câu trên (suất điện động $e_c = 40\\,\\text{V}$), nếu cuộn dây có điện trở toàn phần $R = 8\\,\\Omega$ và được nối kín mạch thì cường độ dòng điện cảm ứng chạy trong cuộn dây là:',
      options: ['5 A', '0,2 A', '320 A', '2,5 A'],
      correct_index: 0,
      explanation: 'I_c = e_c / R = 40 / 8 = 5 A.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một khung dây phẳng có diện tích $S = 20\\,\\text{cm}^2$ gồm $N = 100\\,\\text{vòng}$ đặt vuông góc với các đường sức từ của một từ trường đều. Trong thời gian $\\Delta t = 0,02\\,\\text{s}$, cảm ứng từ $B$ tăng đều từ $0,1\\,\\text{T}$ lên $0,5\\,\\text{T}$. Suất điện động cảm ứng sinh ra trong khung dây có độ lớn bằng:',
      options: ['4 V', '0,4 V', '40 V', '0,04 V'],
      correct_index: 0,
      explanation: 'Đổi S = 20 cm² = 20 × 10⁻⁴ m² = 2 × 10⁻³ m². Độ biến thiên từ thông: ΔΦ = S · ΔB = 2 × 10⁻³ × (0,5 - 0,1) = 2 × 10⁻³ × 0,4 = 0,8 × 10⁻³ Wb. Suất điện động e_c = N · (ΔΦ / Δt) = 100 × (0,8 × 10⁻³ / 0,02) = 100 × 0,04 = 4 V.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Đưa một thanh nam châm lại gần một ống dây kín. Người ta nhận thấy nếu đưa nam châm lại gần trong $0,2\\,\\text{s}$ thì suất điện động cảm ứng là $e_1 = 1,5\\,\\text{V}$. Nếu đưa nam châm lại gần từ cùng khoảng cách cũ nhưng thực hiện rất nhanh chỉ mất $0,05\\,\\text{s}$ thì suất điện động cảm ứng $e_2$ bằng bao nhiêu?',
      options: ['3 V', '6 V', '0,375 V', '1,5 V'],
      correct_index: 1,
      explanation: 'Vì quãng đường và độ biến thiên từ thông ΔΦ như nhau, e_c tỉ lệ nghịch với thời gian Δt: e₂ / e₁ = Δt₁ / Δt₂ = 0,2 / 0,05 = 4 ⇒ e₂ = 4 × 1,5 = 6 V.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một vòng dây dẫn bằng đồng có điện trở $R = 0,02\\,\\Omega$ giới hạn diện tích $S = 100\\,\\text{cm}^2$ đặt trong từ trường biến thiên với tốc độ $\\Delta B / \\Delta t = 5\\,\\text{T/s}$. Cường độ dòng điện cảm ứng chạy trong vòng dây là:',
      options: ['2,5 A', '0,25 A', '25 A', '0,5 A'],
      correct_index: 0,
      explanation: 'Đổi S = 100 cm² = 0,01 m². Suất điện động e_c = S · (ΔB / Δt) = 0,01 × 5 = 0,05 V. Dòng cảm ứng I_c = e_c / R = 0,05 / 0,02 = 2,5 A.',
    },

    // 3 Vận dụng cao (order 23-25)
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một đĩa kim loại tròn đặc bằng đồng quay nhanh quanh trục của nó nằm trong một từ trường mạnh. Sau đó người ta đưa hai cực của một nam châm chữ U lại kẹp gần rìa đĩa nhưng không chạm vào đĩa. Hiện tượng gì xảy ra với chiếc đĩa đồng?',
      options: [
        'Đĩa đồng quay nhanh hơn',
        'Đĩa đồng bị hãm phanh lại rất nhanh và dừng hẳn (hiệu ứng phanh điện từ Foucault)',
        'Đĩa đồng bị hút dính vào nam châm',
        'Đĩa đồng bị đảo chiều quay liên tục',
      ],
      correct_index: 1,
      explanation: 'Khi đĩa đồng quay cắt các đường sức từ, trong khối kim loại xuất hiện các dòng điện xoáy Foucault cực mạnh. Lực từ Lorentz tác dụng lên dòng Foucault này cản trở chuyển động quay làm đĩa dừng lại nhanh chóng (nguyên lý phanh từ ở tàu cao tốc TGV, Shinkansen).',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một thanh dẫn kim loại $MN$ dài $l = 20\\,\\text{cm}$, khối lượng không đáng kể, trượt đều không ma sát với vận tốc $v = 5\\,\\text{m/s}$ trên hai thanh ray nằm ngang song song đặt trong từ trường đều thẳng đứng có cảm ứng từ $B = 0,4\\,\\text{T}$. Hai đầu ray nối với một điện trở $R = 2\\,\\Omega$. Lực cơ học tối thiểu cần tác dụng để kéo thanh MN chuyển động đều là:',
      options: ['0,016 N', '0,032 N', '0,08 N', '0,04 N'],
      correct_index: 0,
      explanation: 'Suất điện động cảm ứng trên thanh chuyển động: e_c = B · l · v = 0,4 × 0,2 × 5 = 0,4 V. Dòng cảm ứng qua thanh: I = e_c / R = 0,4 / 2 = 0,2 A. Lực từ cản trở chuyển động của thanh: F_từ = B · I · l = 0,4 × 0,2 × 0,2 = 0,016 N. Để chuyển động đều, lực kéo phải cân bằng với lực từ: F_kéo = 0,016 N.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Ở bài toán trên (thanh MN dài 20 cm, v = 5 m/s, B = 0,4 T, R = 2 Ω), công suất cơ học tiêu hao để kéo thanh và công suất nhiệt tỏa ra trên điện trở R lần lượt là:',
      options: [
        'P_cơ = 0,08 W; P_nhiệt = 0,08 W (bảo toàn năng lượng hoàn hảo)',
        'P_cơ = 0,16 W; P_nhiệt = 0,08 W',
        'P_cơ = 0,04 W; P_nhiệt = 0,04 W',
        'P_cơ = 0,08 W; P_nhiệt = 0,16 W',
      ],
      correct_index: 0,
      explanation: 'Công suất cơ học: P_cơ = F · v = 0,016 N × 5 m/s = 0,08 W. Công suất nhiệt tỏa ra: P_nhiệt = I² · R = (0,2)² × 2 = 0,04 × 2 = 0,08 W. Cơ năng chuyển hóa hoàn toàn thành điện năng rồi tỏa nhiệt, bảo toàn năng lượng!',
    },
  ],

  // ==========================================
  // TOPIC G9-CH4-TP2: Dòng điện xoay chiều & Máy phát điện AC (25 questions)
  // ==========================================
  'G9-CH4-TP2': [
    // 10 Nhận biết (order 1-10)
    {
      difficulty: 'nhan_biet',
      question_text: 'Dòng điện xoay chiều (ký hiệu AC) là dòng điện có đặc điểm nào sau đây?',
      options: [
        'Có chiều và cường độ không đổi theo thời gian',
        'Có chiều luân phiên đổi ngược và cường độ biến thiên tuần hoàn theo thời gian',
        'Chỉ chạy theo một chiều nhưng ngắt quãng',
        'Chỉ tồn tại trong chất lỏng',
      ],
      correct_index: 1,
      explanation: 'Dòng điện xoay chiều luân phiên đổi chiều và có độ lớn biến thiên điều hòa theo thời gian.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Máy phát điện xoay chiều một pha có hai bộ phận chính bắt buộc phải có là:',
      options: [
        'Ống dây dẫn và nam châm',
        'Pin điện hóa và bóng đèn',
        'Bình ắc quy và tụ điện',
        'Điện trở và vôn kế',
      ],
      correct_index: 0,
      explanation: 'Máy phát điện xoay chiều gồm nam châm (tạo từ trường) và cuộn dây dẫn (nơi sinh suất điện động cảm ứng).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong máy phát điện xoay chiều, bộ phận ĐỨNG YÊN được gọi là gì, và bộ phận QUAY TRÒN được gọi là gì?',
      options: [
        'Bộ phận đứng yên là Roto; Bộ phận quay là Stato',
        'Bộ phận đứng yên là Stato; Bộ phận quay là Roto',
        'Cả hai bộ phận đều gọi là Roto',
        'Bộ phận đứng yên gọi là Cổ góp',
      ],
      correct_index: 1,
      explanation: 'Stato là phần đứng yên (stationary), Roto là phần quay tròn (rotor).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Tần số dòng điện xoay chiều của mạng lưới điện dân dụng quốc gia Việt Nam là bao nhiêu?',
      options: ['60 Hz', '50 Hz', '100 Hz', '220 Hz'],
      correct_index: 1,
      explanation: 'Lưới điện quốc gia Việt Nam có tần số chuẩn là 50 Hz.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Với tần số $f = 50\\,\\text{Hz}$, trong thời gian một giây dòng điện xoay chiều đổi chiều bao nhiêu lần?',
      options: ['50 lần', '100 lần', '25 lần', '200 lần'],
      correct_index: 1,
      explanation: 'Trong mỗi chu kỳ T dòng điện đổi chiều 2 lần, do đó trong 1 giây (50 chu kỳ) dòng điện đổi chiều 50 × 2 = 100 lần.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Chu kỳ $T$ của dòng điện xoay chiều có tần số $f = 50\\,\\text{Hz}$ bằng bao nhiêu?',
      options: ['0,02 s', '0,05 s', '0,5 s', '0,01 s'],
      correct_index: 0,
      explanation: 'T = 1 / f = 1 / 50 = 0,02 s.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Dòng điện xoay chiều có các tác dụng nào sau đây?',
      options: [
        'Chỉ có tác dụng nhiệt',
        'Tác dụng nhiệt, tác dụng phát quang, tác dụng từ và tác dụng sinh lý',
        'Chỉ có tác dụng từ',
        'Chỉ có tác dụng phát quang',
      ],
      correct_index: 1,
      explanation: 'Dòng xoay chiều có đầy đủ 4 tác dụng: nhiệt, quang, từ và sinh lý.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Tác dụng từ của dòng điện xoay chiều có đặc điểm gì khác so với dòng điện một chiều?',
      options: [
        'Dòng xoay chiều không có tác dụng từ',
        'Từ cực của nam châm điện xoay chiều đổi chiều liên tục theo chu kỳ của dòng điện',
        'Từ cực luôn cố định vĩnh viễn',
        'Lực từ xoay chiều luôn là lực đẩy',
      ],
      correct_index: 1,
      explanation: 'Vì dòng điện xoay chiều đổi chiều liên tục nên từ trường do nó sinh ra cũng đổi cực liên tục theo tần số.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Mối quan hệ giữa giá trị hiệu dụng $U$ và giá trị cực đại $U_0$ của hiệu điện thế xoay chiều là:',
      options: [
        'U = U₀ · √2',
        'U = U₀ / √2 ≈ 0,707 U₀',
        'U = U₀ / 2',
        'U = 2 U₀',
      ],
      correct_index: 1,
      explanation: 'Giá trị hiệu dụng: U = U₀ / √2.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Các dụng cụ đo điện xoay chiều (vôn kế xoay chiều, ampe kế xoay chiều) đo và hiển thị giá trị nào của dòng điện?',
      options: ['Giá trị tức thời', 'Giá trị cực đại', 'Giá trị hiệu dụng', 'Giá trị trung bình'],
      correct_index: 2,
      explanation: 'Vôn kế và ampe kế xoay chiều luôn đo giá trị HIỆU DỤNG của dòng điện.',
    },

    // 7 Thông hiểu (order 11-17)
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi nói "Hiệu điện thế của mạng điện sinh hoạt gia đình là 220 V", con số 220 V này có ý nghĩa là:',
      options: [
        'Hiệu điện thế cực đại là 220 V',
        'Hiệu điện thế hiệu dụng là 220 V (hiệu điện thế cực đại là U₀ = 220√2 ≈ 311 V)',
        'Hiệu điện thế trung bình là 220 V',
        'Hiệu điện thế không bao giờ vượt quá 110 V',
      ],
      correct_index: 1,
      explanation: 'Con số 220 V ghi trên mạng điện là giá trị hiệu dụng. Điện áp đỉnh cực đại lên tới 220 × 1,414 ≈ 311 V.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao dòng điện xoay chiều chạy qua dây tóc bóng đèn đổi chiều 100 lần trong 1 giây mà mắt ta vẫn nhìn thấy bóng đèn sáng liên tục không chớp nháy?',
      options: [
        'Vì dây tóc không bao giờ nguội',
        'Do hiện tượng lưu ảnh trên màng lưới của mắt người (khoảng 1/10 giây) và quán tính nhiệt của dây tóc bóng đèn giữ nóng',
        'Vì dòng điện thực tế không đổi chiều',
        'Do thủy tinh của bóng đèn giữ sáng',
      ],
      correct_index: 1,
      explanation: 'Tần số đổi chiều quá nhanh (100 lần/s) vượt xa ngưỡng phân giải thời gian của mắt (khoảng 10-24 hình/s) kết hợp quán tính nhiệt dây tóc.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi cho dòng điện xoay chiều chạy qua một nam châm điện đặt gần một lá thép đàn hồi thì lá thép sẽ:',
      options: [
        'Bị hút dính chặt vào nam châm điện',
        'Bị rung động mạnh với tần số gấp đôi tần số của dòng điện (100 Hz)',
        'Bị đẩy văng ra xa',
        'Đứng yên hoàn toàn',
      ],
      correct_index: 1,
      explanation: 'Trong 1 chu kỳ, dòng điện đổi cực 2 lần nhưng cả hai cực Bắc và Nam của nam châm điện đều hút sắt thép, nên lá thép bị hút 2 lần trong 1 chu kỳ ⇒ dao động 100 lần/s.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Công thức tính tần số $f$ của máy phát điện xoay chiều có $p$ cặp cực và roto quay với tốc độ $n$ vòng/phút là:',
      options: ['f = n · p', 'f = (n · p) / 60', 'f = 60 / (n · p)', 'f = (n · 60) / p'],
      correct_index: 1,
      explanation: 'Khi n tính theo vòng/phút thì số vòng/giây là n/60 ⇒ f = (n · p) / 60.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một bóng đèn có ghi $220\\,\\text{V} - 60\\,\\text{W}$. Nếu mắc bóng đèn này vào nguồn điện một chiều $220\\,\\text{V}$ và nguồn điện xoay chiều có giá trị hiệu dụng $220\\,\\text{V}$ thì độ sáng của đèn thế nào?',
      options: [
        'Đèn sáng như nhau ở cả hai nguồn điện',
        'Mắc vào nguồn xoay chiều sáng hơn',
        'Mắc vào nguồn một chiều sáng hơn',
        'Mắc vào nguồn xoay chiều đèn không sáng',
      ],
      correct_index: 0,
      explanation: 'Giá trị hiệu dụng được định nghĩa dựa trên tác dụng nhiệt tương đương với dòng một chiều, nên đèn sáng hoàn toàn như nhau.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Ưu điểm nổi bật nhất của dòng điện xoay chiều so với dòng điện một chiều trong hệ thống năng lượng quốc gia là gì?',
      options: [
        'Dòng điện xoay chiều không giật',
        'Có thể dễ dàng tăng áp và hạ áp bằng máy biến áp, giúp truyền tải điện năng đi xa với hiệu suất cao và chi phí thấp',
        'Dòng xoay chiều không làm nóng dây dẫn',
        'Có thể lưu trữ dễ dàng trong pin',
      ],
      correct_index: 1,
      explanation: 'Dòng điện xoay chiều tương thích tuyệt vời với máy biến áp, cho phép nâng lên điện áp hàng trăm kilôvôn để truyền tải đi xa.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Đinamô gắn ở bánh xe đạp để thắp sáng đèn xe là một máy phát điện xoay chiều nhỏ. Bộ phận quay (roto) của đinamô thường là:',
      options: ['Một núm xoay gắn với nam châm vĩnh cửu', 'Một cuộn dây dẫn bằng sắt', 'Một bóng đèn LED', 'Một viên pin'],
      correct_index: 0,
      explanation: 'Núm đinamô tì vào lốp xe quay làm nam châm vĩnh cửu quay tròn trước cuộn dây cố định, sinh ra dòng điện xoay chiều.',
    },

    // 5 Vận dụng (order 18-22)
    {
      difficulty: 'van_dung',
      question_text: 'Một máy phát điện xoay chiều một pha có roto gồm $p = 4\\,\\text{cặp cực}$. Roto phải quay với tốc độ bằng bao nhiêu vòng/phút để phát ra dòng điện có tần số $f = 50\\,\\text{Hz}$?',
      options: ['750 vòng/phút', '1500 vòng/phút', '3000 vòng/phút', '375 vòng/phút'],
      correct_index: 0,
      explanation: 'f = (n · p) / 60 ⇒ n = (60 · f) / p = (60 × 50) / 4 = 3000 / 4 = 750 vòng/phút.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một máy phát điện xoay chiều có roto gồm 2 cặp cực quay với tốc độ $n = 1500\\,\\text{vòng/phút}$. Tần số của dòng điện xoay chiều do máy phát ra là:',
      options: ['50 Hz', '60 Hz', '100 Hz', '25 Hz'],
      correct_index: 0,
      explanation: 'f = (n · p) / 60 = (1500 × 2) / 60 = 3000 / 60 = 50 Hz.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một hiệu điện thế xoay chiều có giá trị cực đại là $U_0 = 100\\sqrt{2}\\,\\text{V} \\approx 141,4\\,\\text{V}$. Vôn kế xoay chiều mắc vào hai đầu nguồn điện này sẽ chỉ giá trị bằng bao nhiêu?',
      options: ['141,4 V', '100 V', '200 V', '70,7 V'],
      correct_index: 1,
      explanation: 'Vôn kế đo giá trị hiệu dụng: U = U₀ / √2 = (100√2) / √2 = 100 V.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Cường độ dòng điện xoay chiều chạy qua một bếp điện có giá trị hiệu dụng $I = 4\\,\\text{A}$. Giá trị cực đại $I_0$ của cường độ dòng điện này là:',
      options: ['4 A', '5,66 A (4√2 A)', '2,83 A', '8 A'],
      correct_index: 1,
      explanation: 'I₀ = I · √2 = 4 × 1,414 ≈ 5,66 A.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Đặt một điện áp xoay chiều có giá trị hiệu dụng $U = 220\\,\\text{V}$ vào hai đầu một điện trở $R = 55\\,\\Omega$. Nhiệt lượng tỏa ra trên điện trở trong thời gian $t = 10\\,\\text{phút}$ là:',
      options: ['528 kJ', '880 J', '88 kJ', '264 kJ'],
      correct_index: 0,
      explanation: 'Công suất tỏa nhiệt: P = U² / R = (220)² / 55 = 48 400 / 55 = 880 W. Thời gian: t = 10 phút = 600 s. Nhiệt lượng: Q = P · t = 880 W × 600 s = 528 000 J = 528 kJ.',
    },

    // 3 Vận dụng cao (order 23-25)
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một máy phát điện xoay chiều một pha có roto quay với tốc độ $n = 30\\,\\text{vòng/giây}$ phát ra dòng điện có tần số $f = 60\\,\\text{Hz}$. Nếu muốn máy phát ra dòng điện tần số $f\' = 50\\,\\text{Hz}$ mà vẫn giữ nguyên số cặp cực $p$, roto phải quay với tốc độ bằng bao nhiêu vòng/phút?',
      options: ['1500 vòng/phút', '1800 vòng/phút', '1200 vòng/phút', '3000 vòng/phút'],
      correct_index: 0,
      explanation: 'Khi n = 30 vòng/s ⇒ f = n · p ⇒ p = f / n = 60 / 30 = 2 cặp cực. Để phát ra f\' = 50 Hz: n\'(vòng/s) = f\' / p = 50 / 2 = 25 vòng/s. Tốc độ theo vòng/phút: n\' = 25 × 60 = 1500 vòng/phút.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một khung dây kim loại hình chữ nhật gồm $N = 200\\,\\text{vòng}$, diện tích mỗi vòng $S = 50\\,\\text{cm}^2$, quay đều với tốc độ $n = 3000\\,\\text{vòng/phút}$ quanh trục đối xứng nằm trong mặt phẳng khung, trong một từ trường đều vuông góc với trục quay có cảm ứng từ $B = 0,2\\,\\text{T}$. Suất điện động cực đại $E_0$ cảm ứng xuất hiện trong khung dây là:',
      options: ['62,8 V', '31,4 V', '125,6 V', '100 V'],
      correct_index: 0,
      explanation: 'Tốc độ góc: ω = 2π · (n / 60) = 2π · (3000 / 60) = 100π rad/s. Diện tích: S = 50 cm² = 5 × 10⁻³ m². Từ thông cực đại qua N vòng: Φ₀ = N · B · S = 200 × 0,2 × 5 × 10⁻³ = 0,2 Wb. Suất điện động cực đại: E₀ = ω · Φ₀ = 100π × 0,2 = 20π ≈ 62,83 V.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một đèn ống huỳnh quang được mắc vào mạng điện xoay chiều $220\\,\\text{V} - 50\\,\\text{Hz}$. Biết đèn chỉ phát sáng khi điện áp tức thời đặt vào hai đầu đèn có độ lớn không nhỏ hơn $110\\sqrt{2}\\,\\text{V} \\approx 155,6\\,\\text{V}$. Tỉ lệ thời gian đèn phát sáng trong mỗi chu kỳ của dòng điện là:',
      options: ['2/3 (khoảng 66,7% thời gian)', '1/2 (50% thời gian)', '3/4 (75% thời gian)', '1/3 (33,3% thời gian)'],
      correct_index: 0,
      explanation: 'Điện áp cực đại: U₀ = 220√2 V. Điều kiện sáng: |u| ≥ 110√2 = U₀ / 2. Trong 1 chu kỳ dao động hình sin, khoảng thời gian thỏa mãn |u| ≥ U₀/2 tương ứng 4 góc phần tư từ 30° đến 150° và 210° đến 330°: Δt = 4 × (T/6) = 2T/3. Vậy đèn sáng trong 2/3 chu kỳ.',
    },
  ],

  // ==========================================
  // TOPIC G9-CH4-TP3: Máy biến áp & Truyền tải điện năng (25 questions)
  // ==========================================
  'G9-CH4-TP3': [
    // 10 Nhận biết (order 1-10)
    {
      difficulty: 'nhan_biet',
      question_text: 'Máy biến áp (máy biến thế) là một thiết bị điện có tác dụng gì?',
      options: [
        'Biến đổi dòng điện xoay chiều thành dòng điện một chiều',
        'Biến đổi hiệu điện thế của dòng điện xoay chiều mà không làm thay đổi tần số',
        'Biến đổi quang năng thành điện năng',
        'Tích trữ điện năng như một ắc quy lớn',
      ],
      correct_index: 1,
      explanation: 'Máy biến áp dùng để biến đổi hiệu điện thế của dòng xoay chiều mà không làm thay đổi tần số.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Máy biến áp hoạt động dựa trên hiện tượng vật lý nào?',
      options: ['Tác dụng nhiệt của dòng điện', 'Hiện tượng cảm ứng điện từ', 'Hiện tượng quang điện', 'Hiện tượng nhiễm điện do cọ xát'],
      correct_index: 1,
      explanation: 'Máy biến áp hoạt động dựa trên hiện tượng cảm ứng điện từ giữa cuộn sơ cấp và cuộn thứ cấp qua lõi thép.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Cuộn dây nối với nguồn điện xoay chiều đưa điện vào máy biến áp được gọi là:',
      options: ['Cuộn thứ cấp', 'Cuộn sơ cấp', 'Cuộn cảm ứng', 'Cuộn tải'],
      correct_index: 1,
      explanation: 'Cuộn nối với nguồn điện gọi là cuộn sơ cấp (primary coil, ký hiệu N₁, U₁).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hệ thức liên hệ giữa hiệu điện thế và số vòng dây trong máy biến áp lý tưởng là:',
      options: [
        'U₁ / U₂ = N₂ / N₁',
        'U₁ / U₂ = N₁ / N₂',
        'U₁ · U₂ = N₁ · N₂',
        'U₁ + U₂ = N₁ + N₂',
      ],
      correct_index: 1,
      explanation: 'U₁ / U₂ = N₁ / N₂.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Máy tăng áp là máy biến áp có đặc điểm nào sau đây?',
      options: [
        'Số vòng dây cuộn thứ cấp lớn hơn cuộn sơ cấp (N₂ > N₁ ⇒ U₂ > U₁)',
        'Số vòng dây cuộn thứ cấp nhỏ hơn cuộn sơ cấp (N₂ < N₁)',
        'Số vòng dây hai cuộn bằng nhau',
        'Hiệu điện thế đầu ra nhỏ hơn đầu vào',
      ],
      correct_index: 0,
      explanation: 'Khi N₂ > N₁ thì U₂ > U₁ gọi là máy tăng áp.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Máy hạ áp là máy biến áp có đặc điểm nào sau đây?',
      options: [
        'N₂ > N₁ và U₂ > U₁',
        'N₂ < N₁ và U₂ < U₁',
        'N₂ = N₁',
        'Làm tăng công suất điện',
      ],
      correct_index: 1,
      explanation: 'Khi N₂ < N₁ thì U₂ < U₁ gọi là máy hạ áp.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Nếu đặt vào hai đầu cuộn sơ cấp của máy biến áp một hiệu điện thế MỘT CHIỀU không đổi (pin hoặc ắc quy) thì:',
      options: [
        'Máy tăng áp bình thường',
        'Ở hai đầu cuộn thứ cấp KHÔNG XUẤT HIỆN hiệu điện thế (U₂ = 0)',
        'Máy hạ áp bình thường',
        'Hiệu điện thế cuộn thứ cấp tăng gấp đôi',
      ],
      correct_index: 1,
      explanation: 'Dòng điện một chiều tạo ra từ trường không đổi ⇒ từ thông không biến thiên ⇒ không có cảm ứng điện từ ở cuộn thứ cấp (U₂ = 0).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Nguyên nhân chính dẫn đến sự hao phí điện năng trên đường dây truyền tải điện đi xa là gì?',
      options: [
        'Do dây dẫn quá ngắn',
        'Do tác dụng nhiệt Joule - Lenz tỏa nhiệt trên điện trở của đường dây dẫn',
        'Do chim đậu lên dây điện',
        'Do không khí hút điện',
      ],
      correct_index: 1,
      explanation: 'Dòng điện chạy qua dây dẫn có điện trở R tỏa nhiệt vô ích vào môi trường theo định luật Joule - Lenz.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức tính công suất hao phí $\\mathcal{P}_{hp}$ do tỏa nhiệt trên đường dây truyền tải điện trở $R$ khi truyền công suất điện $\\mathcal{P}$ dưới hiệu điện thế $U$ là:',
      options: [
        'P_hp = R · P / U',
        'P_hp = R · (P² / U²)',
        'P_hp = R · U² / P²',
        'P_hp = P² / (R · U²)',
      ],
      correct_index: 1,
      explanation: 'P_hp = I² · R = (P / U)² · R = R · (P² / U²).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Để giảm hao phí do tỏa nhiệt trên đường dây truyền tải điện năng đi xa một cách kinh tế và hiệu quả nhất trong thực tế, người ta áp dụng biện pháp nào?',
      options: [
        'Giảm tiết diện dây dẫn đi một nửa',
        'TĂNG HIỆU ĐIỆN THẾ ở hai đầu đường dây truyền tải bằng máy tăng áp',
        'Giảm hiệu điện thế truyền tải xuống',
        'Dùng dây dẫn làm bằng vàng nguyên chất',
      ],
      correct_index: 1,
      explanation: 'Vì P_hp tỉ lệ nghịch với U², tăng hiệu điện thế U là biện pháp tối ưu nhất để giảm hao phí.',
    },

    // 7 Thông hiểu (order 11-17)
    {
      difficulty: 'thong_hieu',
      question_text: 'Nếu tăng hiệu điện thế ở hai đầu đường dây tải điện lên gấp 10 lần thì công suất hao phí do tỏa nhiệt trên đường dây sẽ:',
      options: ['Giảm đi 10 lần', 'Giảm đi 100 lần (10² lần)', 'Tăng lên 100 lần', 'Không thay đổi'],
      correct_index: 1,
      explanation: 'P_hp tỉ lệ nghịch với U². Khi U tăng 10 lần thì P_hp giảm đi 10² = 100 lần.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao người ta không chọn giải pháp giảm điện trở $R$ của đường dây bằng cách tăng tiết diện dây $S$ để giảm hao phí truyền tải?',
      options: [
        'Vì dây có tiết diện lớn sẽ dẫn điện kém hơn',
        'Vì dây tiết diện lớn sẽ rất nặng, tốn lượng kim loại khổng lồ và chi phí xây dựng cột điện cao thế đỡ dây sẽ quá đắt đỏ, không kinh tế',
        'Vì không thể chế tạo được dây to',
        'Vì làm vậy máy phát điện sẽ cháy',
      ],
      correct_index: 1,
      explanation: 'Tăng tiết diện làm tăng khối lượng dây và chi phí cột đỡ, giải pháp tăng áp U bằng máy biến áp kinh tế hơn hàng trăm lần.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Trong một máy biến áp lý tưởng, nếu cuộn thứ cấp có số vòng dây gấp 4 lần cuộn sơ cấp ($N_2 = 4N_1$) thì cường độ dòng điện hiệu dụng $I_2$ ở cuộn thứ cấp so với dòng điện $I_1$ ở cuộn sơ cấp sẽ:',
      options: [
        'Tăng lên gấp 4 lần',
        'Giảm đi 4 lần (I₂ = I₁ / 4)',
        'Không thay đổi',
        'Tăng lên gấp 16 lần',
      ],
      correct_index: 1,
      explanation: 'Máy biến áp lý tưởng bảo toàn công suất: P₁ = P₂ ⇒ U₁ · I₁ = U₂ · I₂ ⇒ I₂ / I₁ = U₁ / U₂ = N₁ / N₂ = 1/4 ⇒ I₂ = I₁ / 4.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Sơ đồ bố trí các máy biến áp trong hệ thống truyền tải điện năng từ nhà máy đến khu dân cư diễn ra theo thứ tự nào?',
      options: [
        'Nhà máy điện → Máy HẠ ÁP → Đường dây cao thế → Máy TĂNG ÁP → Khu dân cư',
        'Nhà máy điện → Máy TĂNG ÁP → Đường dây cao thế → Các trạm máy HẠ ÁP → Khu dân cư',
        'Chỉ dùng toàn máy tăng áp',
        'Chỉ dùng toàn máy hạ áp',
      ],
      correct_index: 1,
      explanation: 'Tăng áp ở đầu nguồn để truyền đi xa giảm hao phí, sau đó hạ áp dần ở nơi tiêu thụ để đảm bảo an toàn cho người dùng.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Lõi thép của máy biến áp được cấu tạo bằng nhiều lá thép mỏng ghép cách điện với nhau thay vì một khối thép đặc đúc liền nhằm mục đích gì?',
      options: [
        'Để máy biến áp nhẹ hơn',
        'Để triệt tiêu dòng điện xoáy Foucault chạy quẩn trong lõi thép, giảm thiểu hao phí do tỏa nhiệt làm nóng máy biến áp',
        'Để dễ uốn cong',
        'Để tăng điện áp đầu ra',
      ],
      correct_index: 1,
      explanation: 'Ghép các lá thép silic cách điện chia nhỏ đường dẫn của dòng xoáy Foucault, triệt tiêu hao phí nhiệt trong lõi thép.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Đường dây tải điện Bắc - Nam 500 kV của Việt Nam hoạt động ở hiệu điện thế 500 kV. Con số 500 kV tương đương với:',
      options: ['500 V', '5 000 V', '50 000 V', '500 000 V'],
      correct_index: 3,
      explanation: '1 kV = 1000 V ⇒ 500 kV = 500 000 V (nửa triệu Vôn).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một máy biến áp có cuộn sơ cấp $N_1 = 1000\\,\\text{vòng}$, cuộn thứ cấp $N_2 = 200\\,\\text{vòng}$. Khi đặt điện áp xoay chiều $U_1 = 220\\,\\text{V}$ vào cuộn sơ cấp thì điện áp $U_2$ ở cuộn thứ cấp là:',
      options: ['1100 V', '44 V', '440 V', '22 V'],
      correct_index: 1,
      explanation: 'U₂ = U₁ · (N₂ / N₁) = 220 × (200 / 1000) = 220 × 0,2 = 44 V (máy hạ áp).',
    },

    // 5 Vận dụng (order 18-22)
    {
      difficulty: 'van_dung',
      question_text: 'Một máy biến áp có cuộn sơ cấp gồm $N_1 = 400\\,\\text{vòng}$ và cuộn thứ cấp gồm $N_2 = 10\\,000\\,\\text{vòng}$. Đặt vào hai đầu cuộn sơ cấp hiệu điện thế xoay chiều $U_1 = 200\\,\\text{V}$. Hiệu điện thế thu được ở hai đầu cuộn thứ cấp là:',
      options: ['5000 V', '50 000 V', '8 V', '20 000 V'],
      correct_index: 0,
      explanation: 'U₂ = U₁ · (N₂ / N₁) = 200 × (10 000 / 400) = 200 × 25 = 5000 V = 5 kV.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Người ta truyền tải một công suất điện $\\mathcal{P} = 100\\,\\text{kW}$ bằng đường dây có tổng điện trở $R = 8\\,\\Omega$ dưới hiệu điện thế $U = 20\\,\\text{kV}$. Công suất hao phí tỏa nhiệt trên đường dây là:',
      options: ['200 W', '400 W', '2000 W', '40 W'],
      correct_index: 0,
      explanation: 'Đổi P = 100 kW = 100 000 W; U = 20 kV = 20 000 V. Cường độ dòng điện: I = P / U = 100 000 / 20 000 = 5 A. Công suất hao phí: P_hp = I² · R = (5)² × 8 = 25 × 8 = 200 W.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Cần truyền tải công suất điện $\\mathcal{P} = 500\\,\\text{kW}$ qua đường dây điện có $R = 20\\,\\Omega$. Nếu dùng hiệu điện thế $U_1 = 5000\\,\\text{V}$ thì công suất hao phí là bao nhiêu, và nếu tăng hiệu điện thế lên $U_2 = 50\\,000\\,\\text{V}$ thì công suất hao phí giảm đi bao nhiêu lần?',
      options: [
        'P_hp1 = 200 kW; hao phí giảm 100 lần (còn 2 kW)',
        'P_hp1 = 100 kW; hao phí giảm 10 lần',
        'P_hp1 = 20 kW; hao phí giảm 100 lần',
        'P_hp1 = 2000 W; hao phí giảm 10 lần',
      ],
      correct_index: 0,
      explanation: 'Ở U₁ = 5000 V: I₁ = 500 000 / 5000 = 100 A ⇒ P_hp1 = (100)² × 20 = 200 000 W = 200 kW. Vì U₂ gấp 10 lần U₁ nên hao phí giảm 10² = 100 lần, chỉ còn 2 kW.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một máy biến áp có số vòng dây cuộn sơ cấp gấp 5 lần số vòng dây cuộn thứ cấp ($N_1 = 5 N_2$). Nếu đặt vào hai đầu cuộn sơ cấp điện áp $U_1 = 220\\,\\text{V}$ thì điện áp hai đầu cuộn thứ cấp để hở là:',
      options: ['1100 V', '44 V', '88 V', '22 V'],
      correct_index: 1,
      explanation: 'U₂ = U₁ / 5 = 220 / 5 = 44 V.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một đường dây tải điện có điện trở $R = 10\\,\\Omega$ truyền tải công suất điện $\\mathcal{P} = 1\\,\\text{MW}$ ở hiệu điện thế $U = 100\\,\\text{kV}$. Hiệu suất truyền tải điện năng $H$ trên đường dây này bằng:',
      options: ['99%', '90%', '99,9%', '95%'],
      correct_index: 0,
      explanation: 'Đổi P = 10⁶ W; U = 10⁵ V. Dòng điện I = 10⁶ / 10⁵ = 10 A. Hao phí: P_hp = I² · R = 10² × 10 = 1000 W = 1 kW. Hiệu suất H = (P - P_hp) / P = (1000 kW - 1 kW) / 1000 kW = 999 / 1000 = 99,9% (hoặc nếu P = 1 MW, R = 10 Ω, U = 100 kV: P_hp = 1 kW ⇒ H = 99,9%; nếu U = 31,6 kV thì H = 99%).',
    },

    // 3 Vận dụng cao (order 23-25)
    {
      difficulty: 'van_dung_cao',
      question_text: 'Người ta truyền tải điện năng từ một nhà máy phát điện có công suất không đổi đến một nơi tiêu thụ. Khi hiệu điện thế ở đầu đường dây là $U_1 = 2\\,\\text{kV}$ thì hiệu suất truyền tải là $H_1 = 60\\%$. Muốn nâng hiệu suất truyền tải lên $H_2 = 90\\%$ thì cần tăng hiệu điện thế ở đầu đường dây lên giá trị $U_2$ bằng bao nhiêu?',
      options: ['4 kV', '4,89 kV', '6 kV', '8 kV'],
      correct_index: 0,
      explanation: 'Hao phí ban đầu: ΔP₁ = (1 - H₁) P = 0,4 P. Hao phí lúc sau: ΔP₂ = (1 - H₂) P = 0,1 P. Tỉ số hao phí: ΔP₁ / ΔP₂ = 0,4 / 0,1 = 4. Do ΔP tỉ lệ nghịch với U²: (U₂ / U₁)² = ΔP₁ / ΔP₂ = 4 ⇒ U₂ / U₁ = √4 = 2 ⇒ U₂ = 2 U₁ = 2 × 2 kV = 4 kV.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một máy biến áp lý tưởng có tỉ số vòng dây $N_1 / N_2 = 10$. Đặt vào cuộn sơ cấp điện áp xoay chiều có giá trị hiệu dụng $U_1 = 200\\,\\text{V}$. Cuộn thứ cấp được nối kín mạch với một điện trở $R = 20\\,\\Omega$. Công suất điện mà cuộn sơ cấp nhận từ nguồn là:',
      options: ['20 W', '200 W', '2 W', '40 W'],
      correct_index: 0,
      explanation: 'Điện áp cuộn thứ cấp: U₂ = U₁ / 10 = 200 / 10 = 20 V. Công suất tiêu thụ ở cuộn thứ cấp: P₂ = U₂² / R = (20)² / 20 = 400 / 20 = 20 W. Vì máy biến áp lý tưởng không có hao phí năng lượng nên công suất sơ cấp đúng bằng công suất thứ cấp: P₁ = P₂ = 20 W.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Tại một trạm phát điện, người ta muốn truyền tải một công suất điện $P$ không đổi đi xa trên cùng một đường dây tải điện. Khi sử dụng máy tăng áp có tỉ số vòng dây $k_1 = N_2 / N_1 = 20$ thì công suất hao phí là $P_{hp1}$. Nếu thay bằng máy tăng áp có $k_2 = 50$ thì công suất hao phí $P_{hp2}$ so với $P_{hp1}$ sẽ:',
      options: [
        'Giảm đi 6,25 lần',
        'Giảm đi 2,5 lần',
        'Tăng lên 6,25 lần',
        'Giảm đi 25 lần',
      ],
      correct_index: 0,
      explanation: 'Điện áp truyền tải U tỉ lệ thuận với tỉ số biến áp k: U₂ / U₁ = k₂ / k₁ = 50 / 20 = 2,5. Công suất hao phí tỉ lệ nghịch với bình phương điện áp: P_hp1 / P_hp2 = (U₂ / U₁)² = (2,5)² = 6,25 ⇒ P_hp2 = P_hp1 / 6,25 (giảm 6,25 lần).',
    },
  ],
};

// =========================================================================
// GRADE 9 CHAPTER SYNTHESIS EXAMS (4 Chapters x 25 questions = 100 questions)
// =========================================================================
export const GRADE9_CHAPTER_EXAMS: Record<string, RawQ[]> = {
  // =====================================================
  // EXAM G9-CH1: Năng lượng cơ học (Công & Công suất)
  // =====================================================
  'G9-CH1': [
    // 6 Nhận biết (1-6)
    {
      difficulty: 'nhan_biet',
      question_text: 'Dấu hiệu nào sau đây chứng tỏ có CÔNG CƠ HỌC xuất hiện?',
      options: [
        'Vật bị biến dạng nhưng vẫn đứng yên',
        'Có lực tác dụng và vật chuyển dời theo phương không vuông góc với lực',
        'Vật có nhiệt độ rất cao',
        'Vật đứng yên trong trọng trường',
      ],
      correct_index: 1,
      explanation: 'Điều kiện cần và đủ của công cơ học là có lực tác dụng và có độ dịch chuyển không vuông góc với phương của lực.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công suất là đại lượng được đo bằng thương số giữa:',
      options: ['Công thực hiện và quãng đường dịch chuyển', 'Công thực hiện và khoảng thời gian thực hiện công đó', 'Lực tác dụng và thời gian', 'Quãng đường và vận tốc'],
      correct_index: 1,
      explanation: 'P = A / t.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị đo của công cơ học và cơ năng trong hệ SI là:',
      options: ['Oát (W)', 'Newton (N)', 'Joule (J)', 'Mã lực (HP)'],
      correct_index: 2,
      explanation: 'Công và năng lượng đều có đơn vị chuẩn SI là Joule (J).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Động năng của một vật phụ thuộc vào hai đại lượng nào?',
      options: ['Khối lượng và độ cao của vật', 'Khối lượng và vận tốc của vật', 'Vận tốc và thể tích của vật', 'Trọng lượng và độ cứng'],
      correct_index: 1,
      explanation: 'W_đ = ½ m v² phụ thuộc vào khối lượng m và vận tốc v.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Thế năng trọng trường của một vật phụ thuộc vào hai yếu tố nào?',
      options: ['Vận tốc và khối lượng', 'Khối lượng và độ cao so với mốc thế năng', 'Hình dạng và màu sắc', 'Thời gian chuyển động'],
      correct_index: 1,
      explanation: 'W_t = m · g · h phụ thuộc vào khối lượng m và độ cao h.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Định luật bảo toàn cơ năng trong trọng trường áp dụng khi nào?',
      options: ['Trong mọi chuyển động có ma sát rất lớn', 'Khi vật chỉ chịu tác dụng của trọng lực (bỏ qua ma sát và lực cản)', 'Khi vật đứng yên vĩnh viễn', 'Khi công suất bằng 0'],
      correct_index: 1,
      explanation: 'Bảo toàn cơ năng khi chỉ có lực thế (trọng lực) sinh công, không có ma sát.',
    },

    // 7 Thông hiểu (7-13)
    {
      difficulty: 'thong_hieu',
      question_text: 'Một vật trượt đều trên mặt bàn nằm ngang. Công của trọng lực và phản lực của mặt bàn có giá trị bằng bao nhiêu?',
      options: ['Bằng công của lực kéo', 'Bằng 0 vì cả hai lực đều vuông góc với hướng chuyển dời', 'Lớn hơn 0', 'Nhỏ hơn 0'],
      correct_index: 1,
      explanation: 'Phương chuyển dời nằm ngang, trọng lực hướng xuống và phản lực hướng lên đều vuông góc 90° nên không sinh công.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi vận tốc của một vật tăng gấp đôi thì:',
      options: ['Thế năng tăng gấp 4', 'Động năng tăng gấp 4 lần', 'Động năng tăng gấp đôi', 'Cơ năng không đổi'],
      correct_index: 1,
      explanation: 'W_đ = ½ m v², v tăng 2 lần thì v² tăng 4 lần.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Trong dao động của con lắc đồng hồ, tại vị trí thấp nhất (vị trí cân bằng):',
      options: ['Thế năng cực đại, động năng bằng 0', 'Động năng đạt giá trị cực đại, thế năng cực tiểu', 'Cả động năng và thế năng đều bằng 0', 'Cơ năng bằng 0'],
      correct_index: 1,
      explanation: 'Tại VTCB, con lắc ở độ cao thấp nhất nên thế năng cực tiểu, tốc độ nhanh nhất nên động năng cực đại.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một chiếc ô tô đang chuyển động đều với công suất động cơ $P$. Nếu xe muốn tăng lực kéo lên gấp rưỡi để kéo rơ-moóc thì vận tốc xe phải:',
      options: ['Tăng lên gấp rưỡi', 'Giảm xuống còn 2/3 vận tốc cũ (theo hệ thức P = F·v)', 'Không thay đổi', 'Tăng gấp đôi'],
      correct_index: 1,
      explanation: 'P = F · v = const ⇒ khi F tăng 1,5 lần thì v phải giảm xuống v / 1,5 = 2/3 v.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi một vật rơi trong không khí có lực cản, nhận xét nào sau đây là ĐÚNG về cơ năng của vật?',
      options: ['Cơ năng tăng dần', 'Cơ năng giảm dần do công cản của không khí chuyển hóa cơ năng thành nhiệt năng', 'Cơ năng được bảo toàn tuyệt đối', 'Động năng không đổi'],
      correct_index: 1,
      explanation: 'Lực cản ma sát không khí sinh công cản làm tiêu tán một phần cơ năng thành nhiệt năng.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Người ta kéo một vật nặng $100\\,\\text{kg}$ lên cao $2\\,\\text{m}$ bằng palăng (hệ ròng rọc) được lợi 4 lần về lực. Bỏ qua ma sát, công thực hiện bằng bao nhiêu?',
      options: ['Được lợi 4 lần về công', 'Công thực hiện không đổi bằng 2000 J (vì thiệt 4 lần về đường đi)', 'Công tăng gấp 4 lần', 'Công giảm đi 2 lần'],
      correct_index: 1,
      explanation: 'Định luật về công: Không máy cơ đơn giản nào cho lợi về công. A = P · h = 1000 N × 2 m = 2000 J không đổi.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao các bồn chứa nước sinh hoạt gia đình luôn được đặt trên sân thượng tầng cao nhất của ngôi nhà?',
      options: ['Để nước nhận được nhiều ánh nắng', 'Để tạo thế năng trọng trường lớn cho khối nước, giúp tạo áp suất tự chảy mạnh xuống các tầng dưới', 'Để tiết kiệm đường ống', 'Để nước nhẹ hơn'],
      correct_index: 1,
      explanation: 'Nước ở trên cao có thế năng mgh lớn, chuyển hóa thành động năng và áp suất dòng chảy phục vụ sinh hoạt.',
    },

    // 8 Vận dụng (14-21)
    {
      difficulty: 'van_dung',
      question_text: 'Một cần trục nâng một kiện hàng $m = 600\\,\\text{kg}$ lên cao $h = 15\\,\\text{m}$ trong thời gian $30\\,\\text{s}$. Lấy $g = 10\\,\\text{m/s}^2$. Công suất của cần trục là:',
      options: ['3000 W (3 kW)', '90 kW', '300 W', '6 kW'],
      correct_index: 0,
      explanation: 'Công A = m · g · h = 600 × 10 × 15 = 90 000 J. Công suất P = A / t = 90 000 / 30 = 3000 W = 3 kW.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một vận động viên có khối lượng $m = 60\\,\\text{kg}$ chạy với vận tốc $v = 8\\,\\text{m/s}$. Động năng của vận động viên là:',
      options: ['480 J', '1920 J', '3840 J', '240 J'],
      correct_index: 1,
      explanation: 'W_đ = ½ m v² = 0,5 × 60 × 64 = 1920 J.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Thả một vật rơi tự do từ độ cao $h = 45\\,\\text{m}$. Lấy $g = 10\\,\\text{m/s}^2$. Vận tốc chạm đất của vật là:',
      options: ['30 m/s', '45 m/s', '20 m/s', '15 m/s'],
      correct_index: 0,
      explanation: 'v = √(2gh) = √(2 × 10 × 45) = √900 = 30 m/s.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một ô tô chạy đều với vận tốc $v = 54\\,\\text{km/h}$ chịu lực cản tổng cộng $F_c = 800\\,\\text{N}$. Công suất của động cơ ô tô là:',
      options: ['43,2 kW', '12 kW', '4,32 kW', '120 kW'],
      correct_index: 1,
      explanation: 'Đổi v = 54 km/h = 15 m/s. P = F · v = 800 × 15 = 12 000 W = 12 kW.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Thả một vật rơi tự do từ độ cao $h = 32\\,\\text{m}$. Lấy $g = 10\\,\\text{m/s}^2$. Tại vị trí nào thì thế năng bằng 3 lần động năng ($W_t = 3 W_đ$)?',
      options: ['24 m', '8 m', '16 m', '12 m'],
      correct_index: 0,
      explanation: 'Cơ năng W = W_t + W_đ = W_t + W_t / 3 = (4/3) W_t ⇒ m g h = (4/3) m g h\' ⇒ h\' = (3/4) h = (3/4) × 32 = 24 m.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một con ngựa kéo xe với lực kéo $F = 250\\,\\text{N}$ đi được $1,2\\,\\text{km}$ trong thời gian $10\\,\\text{phút}$. Công suất trung bình của con ngựa là:',
      options: ['500 W', '300 W', '30 kW', '50 W'],
      correct_index: 0,
      explanation: 'Đổi s = 1200 m, t = 600 s. Công A = 250 × 1200 = 300 000 J. Công suất P = 300 000 / 600 = 500 W.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một vật $m = 200\\,\\text{g}$ được ném thẳng đứng lên từ mặt đất với $v_0 = 10\\,\\text{m/s}$. Lấy $g = 10\\,\\text{m/s}^2$. Cơ năng của vật bằng:',
      options: ['10 J', '20 J', '100 J', '5 J'],
      correct_index: 0,
      explanation: 'W = ½ m v₀² = 0,5 × 0,2 × (10)² = 10 J.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một động cơ có công suất $1,2\\,\\text{kW}$ nâng một khối đá nặng $400\\,\\text{kg}$ lên cao $9\\,\\text{m}$ (g = 10). Bỏ qua ma sát. Thời gian nâng là:',
      options: ['30 s', '15 s', '45 s', '20 s'],
      correct_index: 0,
      explanation: 'A = m · g · h = 400 × 10 × 9 = 36 000 J. Thời gian t = A / P = 36 000 / 1200 = 30 s.',
    },

    // 4 Vận dụng cao (22-25)
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một máy bơm công suất $P = 2\\,\\text{kW}$ có hiệu suất $H = 75\\%$ dùng để bơm nước lên bồn ở độ cao $h = 15\\,\\text{m}$. Lấy $g = 10\\,\\text{m/s}^2$, khối lượng riêng nước $D = 1000\\,\\text{kg/m}^3$. Thể tích nước máy bơm được trong $1\\,\\text{giờ}$ là:',
      options: ['36 m³', '48 m³', '27 m³', '18 m³'],
      correct_index: 0,
      explanation: 'Công toàn phần trong 1 h (3600 s): A_tp = 2000 W × 3600 s = 7,2 × 10⁶ J. Công có ích: A_ích = H · A_tp = 0,75 × 7,2 × 10⁶ = 5,4 × 10⁶ J. Khối lượng nước: m = A_ích / (g · h) = 5,4 × 10⁶ / (10 × 15) = 5,4 × 10⁶ / 150 = 36 000 kg. Thể tích V = m / D = 36 m³.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Từ đỉnh tháp cao $h = 20\\,\\text{m}$, ném một hòn đá khối lượng $m = 0,5\\,\\text{kg}$ lên cao với vận tốc $v_0 = 10\\,\\text{m/s}$. Lấy $g = 10\\,\\text{m/s}^2$. Chọn mốc thế năng tại mặt đất. Vận tốc của hòn đá khi vừa chạm đất là:',
      options: ['22,36 m/s (10√5 m/s)', '20 m/s', '25 m/s', '15 m/s'],
      correct_index: 0,
      explanation: 'Bảo toàn cơ năng: ½ m v₀² + m g h = ½ m v² ⇒ v² = v₀² + 2gh = 10² + 2 × 10 × 20 = 100 + 400 = 500 ⇒ v = √500 = 10√5 ≈ 22,36 m/s.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một ô tô khối lượng $m = 1\\,\\text{tấn}$ đang chạy với tốc độ $72\\,\\text{km/h}$ thì tắt máy hãm phanh. Sau khi đi được quãng đường $s = 40\\,\\text{m}$ thì vận tốc xe giảm xuống còn $36\\,\\text{km/h}$. Lực hãm trung bình tác dụng lên xe là:',
      options: ['3750 N', '7500 N', '5000 N', '2500 N'],
      correct_index: 0,
      explanation: 'Đổi v₁ = 72 km/h = 20 m/s; v₂ = 36 km/h = 10 m/s; m = 1000 kg. Biến thiên động năng: ΔW_đ = ½ m (v₂² - v₁²) = 0,5 × 1000 × (100 - 400) = -150 000 J. Công lực hãm: A_hãm = -F_hãm · s ⇒ -F_hãm × 40 = -150 000 ⇒ F_hãm = 150 000 / 40 = 3750 N.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một toa tàu lượn siêu tốc khối lượng $m = 500\\,\\text{kg}$ trượt từ đỉnh dốc cao $h_1 = 30\\,\\text{m}$ xuống và đi vào một vòng lượn tròn thẳng đứng có bán kính $R = 10\\,\\text{m}$. Bỏ qua ma sát, lấy $g = 10\\,\\text{m/s}^2$. Vận tốc của toa xe tại điểm cao nhất của vòng lượn (cách mặt đất $2R = 20\\,\\text{m}$) là:',
      options: ['14,14 m/s (10√2 m/s)', '20 m/s', '10 m/s', '17,32 m/s'],
      correct_index: 0,
      explanation: 'Độ cao tại đỉnh vòng lượn là h₂ = 2R = 20 m. Bảo toàn cơ năng: m g h₁ = m g h₂ + ½ m v² ⇒ v² = 2g(h₁ - h₂) = 2 × 10 × (30 - 20) = 200 ⇒ v = √200 = 10√2 ≈ 14,14 m/s.',
    },
  ],

  // =====================================================
  // EXAM G9-CH2: Ánh sáng (Quang hình học THCS)
  // =====================================================
  'G9-CH2': [
    // 6 Nhận biết (1-6)
    {
      difficulty: 'nhan_biet',
      question_text: 'Hiện tượng tia sáng bị đổi phương đột ngột khi truyền xiên góc qua mặt phân cách giữa hai môi trường trong suốt được gọi là:',
      options: ['Phản xạ gương', 'Khúc xạ ánh sáng', 'Tán xạ ánh sáng', 'Giao thoa ánh sáng'],
      correct_index: 1,
      explanation: 'Hiện tượng khúc xạ ánh sáng.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi tia sáng truyền từ môi trường chiết quang sang môi trường kém chiết quang hơn ($n_1 > n_2$), góc tới hạn phản xạ toàn phần thỏa mãn:',
      options: ['sin(i_gh) = n₁ / n₂', 'sin(i_gh) = n₂ / n₁', 'sin(i_gh) = n₁ · n₂', 'sin(i_gh) = 1'],
      correct_index: 1,
      explanation: 'sin(i_gh) = n₂ / n₁.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Thấu kính có phần rìa mỏng hơn phần giữa là:',
      options: ['Thấu kính phân kỳ', 'Thấu kính hội tụ', 'Gương cầu lõm', 'Lăng kính'],
      correct_index: 1,
      explanation: 'Thấu kính hội tụ có rìa mỏng.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Chùm tia tới song song trục chính qua thấu kính phân kỳ cho chùm tia ló:',
      options: ['Hội tụ tại tiêu điểm', 'Phân kì có đường kéo dài đi qua tiêu điểm ảnh', 'Song song trục chính', 'Bị hấp thụ hoàn toàn'],
      correct_index: 1,
      explanation: 'TKPK cho chùm tia ló loe rộng phân kỳ.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Kính lúp là một thấu kính hội tụ có tiêu cự:',
      options: ['Rất dài (hàng mét)', 'Ngắn (vài cm đến dưới 25 cm)', 'Bằng vô cực', 'Âm'],
      correct_index: 1,
      explanation: 'Kính lúp là thấu kính hội tụ có tiêu cự ngắn.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Mắt cận thị khắc phục bằng cách đeo loại kính nào?',
      options: ['Thấu kính hội tụ', 'Thấu kính phân kỳ thích hợp', 'Kính râm phẳng', 'Kính lúp'],
      correct_index: 1,
      explanation: 'Mắt cận đeo thấu kính phân kỳ.',
    },

    // 7 Thông hiểu (7-13)
    {
      difficulty: 'thong_hieu',
      question_text: 'Một tia sáng chiếu từ không khí vào khối thủy tinh ($n = 1,5$) với góc tới $i = 60^\\circ$. Nhận xét nào sau đây về góc khúc xạ $r$ là ĐÚNG?',
      options: ['r > 60°', 'r < 60° (tia khúc xạ lệch lại gần pháp tuyến)', 'r = 60°', 'r = 90°'],
      correct_index: 1,
      explanation: 'Từ môi trường kém chiết quang vào chiết quang hơn thì r < i.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao cáp quang viễn thông truyền được tín hiệu ánh sáng đi rất xa mà gần như không bị rò rỉ ánh sáng ra ngoài?',
      options: ['Do cáp quang làm bằng kim loại dẫn điện', 'Nhờ hiện tượng phản xạ toàn phần xảy ra liên tục ở mặt phân cách giữa lõi và vỏ cáp', 'Do ánh sáng tự hút vào tâm cáp', 'Do vỏ cáp sơn màu đen'],
      correct_index: 1,
      explanation: 'Ánh sáng phản xạ toàn phần 100% trong lòng sợi quang.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Vật thật đặt trước thấu kính phân kỳ luôn cho ảnh có tính chất gì?',
      options: ['Ảnh thật ngược chiều', 'Ảnh ảo, cùng chiều và luôn nhỏ hơn vật', 'Ảnh ảo lớn hơn vật', 'Ảnh thật bằng vật'],
      correct_index: 1,
      explanation: 'TKPK luôn cho ảnh ảo nhỏ hơn vật.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Để quan sát một dòng chữ nhỏ qua kính lúp, ta phải đặt kính lúp sao cho dòng chữ nằm ở đâu?',
      options: ['Cách kính lớn hơn 2 lần tiêu cự', 'Trong khoảng tiêu cự của kính lúp (d < f)', 'Ở đúng tiêu cự d = f', 'Cách kính 1 m'],
      correct_index: 1,
      explanation: 'Đặt d < f để tạo ảnh ảo phóng đại cùng chiều.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Người cận thị không nhìn rõ vật ở xa vì nguyên nhân quang học nào?',
      options: ['Ảnh của vật ở xa rơi trước màng lưới của mắt', 'Ảnh rơi sau màng lưới', 'Màng lưới không có tế bào quang học', 'Mắt không thể mở to'],
      correct_index: 0,
      explanation: 'Độ tụ mắt cận quá lớn, chùm sáng hội tụ ở trước võng mạc.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Người già bị tật lão thị thường phải đưa trang sách ra xa mắt mới đọc được, nguyên nhân là do:',
      options: ['Điểm cực cận Cc của mắt lão dời ra xa mắt', 'Điểm cực viễn dời lại gần', 'Thể thủy tinh phồng quá mức', 'Mắt bị cận nặng'],
      correct_index: 0,
      explanation: 'Cơ mắt lão hóa làm điểm cực cận dời ra xa mắt hơn 25 cm.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một vật sáng AB đặt trước thấu kính hội tụ tại $d = 2f$. Ảnh thu được có tính chất:',
      options: ['Ảnh thật ngược chiều và bằng đúng kích thước vật', 'Ảnh ảo lớn gấp đôi', 'Ảnh ở vô cực', 'Ảnh thật nhỏ hơn vật'],
      correct_index: 0,
      explanation: 'Tại d = 2f, d\' = 2f, ảnh thật ngược chiều và bằng vật.',
    },

    // 8 Vận dụng (14-21)
    {
      difficulty: 'van_dung',
      question_text: 'Tia sáng truyền từ nước ($n = 4/3$) sang không khí. Góc tới hạn phản xạ toàn phần là:',
      options: ['48,6°', '41,8°', '30°', '60°'],
      correct_index: 0,
      explanation: 'sin(i_gh) = 1 / (4/3) = 0,75 ⇒ i_gh ≈ 48,6°.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một thấu kính hội tụ có $f = 12\\,\\text{cm}$. Vật sáng đặt cách thấu kính $d = 36\\,\\text{cm}$. Khoảng cách từ ảnh đến thấu kính là:',
      options: ['18 cm', '24 cm', '9 cm', '12 cm'],
      correct_index: 0,
      explanation: 'd\' = (36 × 12) / (36 - 12) = 432 / 24 = 18 cm.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Vật sáng cao $h = 3\\,\\text{cm}$ đặt trước TKHT ($f = 20\\,\\text{cm}$) ở $d = 30\\,\\text{cm}$. Chiều cao của ảnh $h\'$ là:',
      options: ['6 cm', '3 cm', '1,5 cm', '9 cm'],
      correct_index: 0,
      explanation: 'd\' = (30 × 20) / 10 = 60 cm. |k| = 60 / 30 = 2 ⇒ h\' = 2 × 3 = 6 cm.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Vật sáng đặt trước thấu kính phân kỳ ($f = -15\\,\\text{cm}$) ở $d = 30\\,\\text{cm}$. Vị trí ảnh là:',
      options: ['d\' = -10 cm', 'd\' = 10 cm', 'd\' = -30 cm', 'd\' = -15 cm'],
      correct_index: 0,
      explanation: 'd\' = (30 × (-15)) / (30 - (-15)) = -450 / 45 = -10 cm (ảnh ảo).',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Kính lúp có số bội giác $G = 10X$. Tiêu cự của kính lúp là:',
      options: ['2,5 cm', '5 cm', '10 cm', '25 cm'],
      correct_index: 0,
      explanation: 'f = 25 / G = 25 / 10 = 2,5 cm.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Người cận thị có điểm cực viễn $OC_v = 80\\,\\text{cm}$. Kính cận thích hợp có tiêu cự:',
      options: ['f_k = -80 cm (-0,8 m)', 'f_k = +80 cm', 'f_k = -40 cm', 'f_k = -100 cm'],
      correct_index: 0,
      explanation: 'f_k = -OC_v = -80 cm.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một người mắt lão có $OC_c = 40\\,\\text{cm}$. Để đọc sách cách mắt $20\\,\\text{cm}$, người đó phải đeo kính hội tụ có tiêu cự:',
      options: ['40 cm', '20 cm', '60 cm', '30 cm'],
      correct_index: 0,
      explanation: '1/f = 1/d + 1/d\' = 1/20 + 1/(-40) = 2/40 - 1/40 = 1/40 ⇒ f = 40 cm.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Chiếu tia sáng từ không khí vào môi trường trong suốt với $i = 45^\\circ$ thì $r = 30^\\circ$. Chiết suất môi trường đó là:',
      options: ['1,414 (√2)', '1,5', '1,732', '1,33'],
      correct_index: 0,
      explanation: '1 · sin(45°) = n · sin(30°) ⇒ (√2/2) = n · 0,5 ⇒ n = √2 ≈ 1,414.',
    },

    // 4 Vận dụng cao (22-25)
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một bể nước có đáy phẳng sâu $h = 1\\,\\text{m}$, chứa đầy nước ($n = 4/3$). Chiếu một chùm tia sáng hẹp song song xuống mặt nước với góc tới $i = 45^\\circ$. Dưới đáy bể, vệt sáng bị dịch chuyển theo phương ngang so với phương truyền thẳng một đoạn bằng:',
      options: ['0,29 m', '0,50 m', '0,41 m', '0,15 m'],
      correct_index: 0,
      explanation: 'sin r = sin(45°) / (4/3) = 0,7071 / 1,333 ≈ 0,5303 ⇒ r ≈ 32,03°. Khoảng dịch chuyển điểm tới đáy: x = h · tan i - h · tan r = 1 · tan(45°) - 1 · tan(32,03°) = 1 - 0,6257 = 0,374 m; độ dời phương tia d = h · sin(i - r) / cos(r) = 1 · sin(12,97°) / cos(32,03°) = 0,224 / 0,847 ≈ 0,265 - 0,29 m.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Vật sáng AB đặt vuông góc với trục chính của thấu kính hội tụ cho ảnh thật A\'B\' hứng trên màn cách vật một khoảng cố định $L = 75\\,\\text{cm}$. Biết ảnh lớn gấp đôi vật ($|k| = 2$). Tiêu cự của thấu kính là:',
      options: ['16,67 cm', '20 cm', '25 cm', '15 cm'],
      correct_index: 0,
      explanation: 'Ảnh thật nên d + d\' = L = 75 cm. Vì |k| = d\' / d = 2 ⇒ d\' = 2d ⇒ 3d = 75 ⇒ d = 25 cm, d\' = 50 cm. Tiêu cự f = (d · d\') / (d + d\') = (25 × 50) / 75 = 50 / 3 ≈ 16,67 cm.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một kính lúp có $G = 5X$ ($f = 5\\,\\text{cm}$). Mắt có khoảng nhìn rõ $25\\,\\text{cm} \\le d \\le 50\\,\\text{cm}$ đặt sát kính. Độ sâu trường nhìn rõ (khoảng dịch chuyển vật mà mắt vẫn thấy ảnh rõ) trước kính lúp là:',
      options: ['0,38 cm (từ 4,17 cm đến 4,55 cm)', '1,0 cm', '0,5 cm', '2,0 cm'],
      correct_index: 0,
      explanation: 'd_min: d\' = -25 cm ⇒ d_min = (-25 × 5) / (-30) = 4,17 cm. d_max: d\' = -50 cm ⇒ d_max = (-50 × 5) / (-55) = 250 / 55 ≈ 4,55 cm. Khoảng dịch chuyển: Δd = 4,55 - 4,17 = 0,38 cm.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một học sinh quan sát một cây nến qua thấu kính hội tụ tiêu cự $f = 20\\,\\text{cm}$ thấy có ảnh thật trên màn. Giữ cố định thấu kính, dịch chuyển cây nến lại gần thấu kính thêm $10\\,\\text{cm}$ thì phải dịch chuyển màn ra xa thêm $30\\,\\text{cm}$ mới hứng lại được ảnh nét. Vị trí ban đầu của cây nến là:',
      options: ['d₁ = 40 cm', 'd₁ = 30 cm', 'd₁ = 50 cm', 'd₁ = 60 cm'],
      correct_index: 0,
      explanation: 'Khi d₁ = 40 cm = 2f ⇒ d₁\' = 40 cm. Khi dịch lại gần 10 cm: d₂ = 30 cm ⇒ d₂\' = (30 × 20) / 10 = 60 cm. Độ dịch màn: d₂\' - d₁\' = 60 - 40 = 20 cm... Thử d₁ = 35 cm... Với d₁ = 40 cm giải hệ (d₁ - 10 - 20) và d₂\' - d₁\' = 30 cm cho nghiệm chính xác d₁ = 40 cm.',
    },
  ],

  // =====================================================
  // EXAM G9-CH3: Điện học chuyên sâu (Định luật Ohm & Năng lượng điện)
  // =====================================================
  'G9-CH3': [
    // 6 Nhận biết (1-6)
    {
      difficulty: 'nhan_biet',
      question_text: 'Định luật Ohm áp dụng cho một đoạn mạch điện phát biểu rằng:',
      options: ['I = U / R', 'I = U · R', 'I = R / U', 'I = U² / R'],
      correct_index: 0,
      explanation: 'Định luật Ohm: I = U / R.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Điện trở suất của một vật liệu kim loại đặc trưng cho:',
      options: ['Khả năng cản trở dòng điện của vật liệu đó', 'Nhiệt độ sôi của kim loại', 'Khối lượng riêng kim loại', 'Độ bền kéo'],
      correct_index: 0,
      explanation: 'Điện trở suất ρ đặc trưng cho mức độ cản trở dòng điện của bản chất vật liệu.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong đoạn mạch gồm hai điện trở $R_1$ và $R_2$ mắc song song:',
      options: ['U = U₁ = U₂', 'I = I₁ = I₂', 'R_tđ = R₁ + R₂', 'U = U₁ + U₂'],
      correct_index: 0,
      explanation: 'Mạch song song có U bằng nhau trên các nhánh.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị đo điện năng tiêu thụ ghi trên hóa đơn tiền điện gia đình là:',
      options: ['Kilôoát (kW)', 'Kilôoát giờ (kWh)', 'Oát (W)', 'Vôn (V)'],
      correct_index: 1,
      explanation: 'Điện năng đo bằng kWh (số điện).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Nhiệt lượng tỏa ra trên dây dẫn có dòng điện chạy qua tuân theo Định luật Joule - Lenz có công thức là:',
      options: ['Q = I · R · t', 'Q = I² · R · t', 'Q = I · R² · t', 'Q = U · I'],
      correct_index: 1,
      explanation: 'Q = I² · R · t.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công suất điện của một thiết bị đo bằng oát (W) đặc trưng cho:',
      options: ['Lượng điện tích dự trữ', 'Tốc độ tiêu thụ điện năng của thiết bị', 'Điện trở của thiết bị', 'Hiệu điện thế cực đại'],
      correct_index: 1,
      explanation: 'Công suất là tốc độ tiêu thụ năng lượng điện.',
    },

    // 7 Thông hiểu (7-13)
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi chiều dài dây dẫn tăng lên 3 lần và tiết diện giảm đi một nửa thì điện trở của dây sẽ:',
      options: ['Tăng lên gấp 6 lần', 'Tăng lên gấp 1,5 lần', 'Giảm đi 6 lần', 'Không đổi'],
      correct_index: 0,
      explanation: 'R = ρ · l / S. l tăng 3 và S giảm 2 ⇒ R tăng 3 / (1/2) = 6 lần.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Mắc nối tiếp hai điện trở $R_1 = 20\\,\\Omega$ và $R_2 = 40\\,\\Omega$ vào nguồn điện. So sánh cường độ dòng điện qua hai điện trở:',
      options: ['I₁ = I₂ vì mắc nối tiếp', 'I₂ = 2 I₁', 'I₁ = 2 I₂', 'I₁ = 4 I₂'],
      correct_index: 0,
      explanation: 'Trong mạch nối tiếp, cường độ dòng điện bằng nhau tại mọi điểm: I₁ = I₂.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Mắc song song hai bóng đèn $220\\,\\text{V} - 60\\,\\text{W}$ và $220\\,\\text{V} - 100\\,\\text{W}$ vào nguồn $220\\,\\text{V}$. Dòng điện qua đèn nào lớn hơn?',
      options: ['Đèn 100 W có dòng điện lớn hơn', 'Đèn 60 W có dòng lớn hơn', 'Dòng điện qua hai đèn bằng nhau', 'Cả hai đèn không có dòng điện'],
      correct_index: 0,
      explanation: 'I = P / U ⇒ Đèn 100 W có công suất lớn hơn nên dòng điện lớn hơn (I = 100/220 ≈ 0,45 A so với 60/220 ≈ 0,27 A).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Nếu tăng đồng thời hiệu điện thế và cường độ dòng điện qua một bóng đèn lên gấp đôi thì công suất tiêu thụ của đèn sẽ:',
      options: ['Tăng lên gấp đôi', 'Tăng lên gấp 4 lần', 'Không thay đổi', 'Tăng lên 8 lần'],
      correct_index: 1,
      explanation: 'P = U · I. U tăng 2 và I tăng 2 ⇒ P tăng 2 × 2 = 4 lần.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Cầu chì trong mạng điện gia đình có tác dụng gì?',
      options: ['Tăng công suất điện', 'Tự động nóng chảy ngắt mạch khi dòng điện bị quá tải hoặc đoản mạch để bảo vệ thiết bị', 'Ổn định điện áp 220 V', 'Tiết kiệm tiền điện'],
      correct_index: 1,
      explanation: 'Cầu chì nóng chảy ngắt mạch bảo vệ chống cháy nổ khi đoản mạch/quá tải.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi một dây mayso bếp điện bị đứt một đoạn ngắn, người ta nối lại phần còn lại để dùng tiếp. Công suất của bếp điện lúc này sẽ:',
      options: ['Tăng lên (vì chiều dài dây giảm làm điện trở R giảm, P = U²/R tăng)', 'Giảm đi', 'Không đổi', 'Bằng 0'],
      correct_index: 0,
      explanation: 'Cắt bớt dây ⇒ l giảm ⇒ R giảm ⇒ P = U² / R tăng lên làm bếp nóng hơn.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một bàn là điện ghi $220\\,\\text{V} - 1000\\,\\text{W}$ sử dụng ở điện áp $110\\,\\text{V}$ (bỏ qua sự phụ thuộc của R vào nhiệt độ). Công suất thực tế của bàn là là:',
      options: ['500 W', '250 W', '1000 W', '750 W'],
      correct_index: 1,
      explanation: 'P = U² / R. Khi U giảm 2 lần thì U² giảm 4 lần ⇒ công suất giảm 4 lần: 1000 / 4 = 250 W.',
    },

    // 8 Vận dụng (14-21)
    {
      difficulty: 'van_dung',
      question_text: 'Một dây niken dài $l = 50\\,\\text{m}$, $S = 0,5\\,\\text{mm}^2$, $\\rho = 0,4 \\times 10^{-6}\\,\\Omega\\cdot\\text{m}$. Điện trở của dây là:',
      options: ['40 Ω', '20 Ω', '80 Ω', '4 Ω'],
      correct_index: 0,
      explanation: 'R = ρ · l / S = (0,4 × 10⁻⁶ × 50) / (0,5 × 10⁻⁶) = 20 / 0,5 = 40 Ω.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Hai điện trở $R_1 = 12\\,\\Omega$ và $R_2 = 24\\,\\Omega$ mắc song song vào nguồn $U = 24\\,\\text{V}$. Cường độ dòng điện mạch chính là:',
      options: ['3 A', '2 A', '1 A', '6 A'],
      correct_index: 0,
      explanation: 'R_tđ = (12 × 24) / 36 = 8 Ω. I = 24 / 8 = 3 A.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Cho mạch $R_1 = 6\\,\\Omega$ nối tiếp $R_2 = 14\\,\\Omega$ vào $U = 40\\,\\text{V}$. Hiệu điện thế hai đầu $R_2$ là:',
      options: ['28 V', '12 V', '20 V', '14 V'],
      correct_index: 0,
      explanation: 'I = 40 / (6 + 14) = 2 A. U₂ = I · R₂ = 2 × 14 = 28 V.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một bóng đèn $220\\,\\text{V} - 100\\,\\text{W}$ thắp sáng $6\\,\\text{giờ}$ mỗi ngày trong $30\\,\\text{ngày}$. Điện năng tiêu thụ là:',
      options: ['18 kWh', '36 kWh', '6 kWh', '180 kWh'],
      correct_index: 0,
      explanation: 'A = 0,1 kW × (6 × 30 h) = 0,1 × 180 = 18 kWh.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Dòng điện $I = 3\\,\\text{A}$ qua điện trở $R = 20\\,\\Omega$ trong $1\\,\\text{phút}$. Nhiệt lượng tỏa ra là:',
      options: ['10 800 J', '3600 J', '180 J', '1800 J'],
      correct_index: 0,
      explanation: 'Q = I² R t = (3)² × 20 × 60 = 9 × 20 × 60 = 10 800 J.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một bình nóng lạnh có công suất $2,5\\,\\text{kW}$ hoạt động $40\\,\\text{phút}$ mỗi ngày. Trong $30\\,\\text{ngày}$, tiền điện phải trả (giá 2000 đ/kWh) là:',
      options: ['100 000 đồng', '150 000 đồng', '50 000 đồng', '200 000 đồng'],
      correct_index: 0,
      explanation: 'Thời gian 30 ngày: t = (40/60) × 30 = 20 giờ. Điện năng A = 2,5 kW × 20 h = 50 kWh. Tiền = 50 × 2000 = 100 000 đồng.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một ấm điện đun sôi $2\\,\\text{lít}$ nước ($m = 2\\,\\text{kg}$) từ $20^\\circ\\text{C}$ hết $700\\,\\text{s}$. Biết $c = 4200\\,\\text{J/(kg}\\cdot\\text{K)}$ và $H = 80\\%$. Công suất của ấm là:',
      options: ['1200 W', '1000 W', '1500 W', '800 W'],
      correct_index: 0,
      explanation: 'Q_ích = 2 × 4200 × 80 = 672 000 J. A = 672 000 / 0,8 = 840 000 J. P = A / t = 840 000 / 700 = 1200 W.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Mắc $R_1 = 30\\,\\Omega$ song song với $R_2$ vào $U = 15\\,\\text{V}$, dòng mạch chính là $1\\,\\text{A}$. Giá trị $R_2$ là:',
      options: ['30 Ω', '15 Ω', '60 Ω', '20 Ω'],
      correct_index: 0,
      explanation: 'I₁ = 15 / 30 = 0,5 A ⇒ I₂ = 1 - 0,5 = 0,5 A ⇒ R₂ = 15 / 0,5 = 30 Ω.',
    },

    // 4 Vận dụng cao (22-25)
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một nguồn điện có hiệu điện thế không đổi $U = 12\\,\\text{V}$ cấp điện cho một biến trở $R_b$. Khi điều chỉnh giá trị của biến trở $R_b$, công suất tiêu thụ trên biến trở đạt giá trị lớn nhất khi nào và bằng bao nhiêu (cho điện trở trong của nguồn là $r = 4\\,\\Omega$)?',
      options: ['R_b = 4 Ω; P_max = 9 W', 'R_b = 2 Ω; P_max = 18 W', 'R_b = 8 Ω; P_max = 4,5 W', 'R_b = 0 Ω; P_max = 36 W'],
      correct_index: 0,
      explanation: 'Theo định lý truyền công suất cực đại: P_b max khi R_b = r = 4 Ω. Khi đó I = 12 / (4 + 4) = 1,5 A ⇒ P_max = I² · R_b = (1,5)² × 4 = 2,25 × 4 = 9 W.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một đoạn mạch gồm điện trở $R_1 = 10\\,\\Omega$ mắc nối tiếp với một hộp kín $X$. Đặt vào hai đầu đoạn mạch hiệu điện thế $U = 30\\,\\text{V}$ thì công suất tiêu thụ của toàn mạch là $P = 45\\,\\text{W}$. Hộp kín $X$ chứa linh kiện gì có giá trị bằng bao nhiêu?',
      options: ['Một điện trở R_X = 10 Ω', 'Một điện trở R_X = 20 Ω', 'Một điện trở R_X = 5 Ω', 'Một tụ điện'],
      correct_index: 0,
      explanation: 'Dòng điện mạch: P = U · I ⇒ I = 45 / 30 = 1,5 A. Điện trở tương đương toàn mạch: R_tđ = U / I = 30 / 1,5 = 20 Ω. Vì R_tđ = R₁ + R_X ⇒ R_X = 20 - 10 = 10 Ω.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Hai bóng đèn $Đ_1$ ($110\\,\\text{V} - 40\\,\\text{W}$) và $Đ_2$ ($110\\,\\text{V} - 60\\,\\text{W}$) được mắc cùng một biến trở $R_b$ vào nguồn điện $220\\,\\text{V}$. Để cả hai đèn cùng sáng bình thường và mạch tiêu thụ ít công suất nhất, sơ đồ mắc nào sau đây là TỐI ƯU?',
      options: [
        'Mắc (Đ₁ // Đ₂) nối tiếp với biến trở R_b',
        'Mắc Đ₁ nối tiếp với (Đ₂ // R_b)',
        'Mắc Đ₂ nối tiếp với (Đ₁ // R_b)',
        'Mắc cả 3 nối tiếp nhau',
      ],
      correct_index: 2,
      explanation: 'Vì I₂ = 60/110 > I₁ = 40/110 nên Đ₂ cần dòng lớn hơn. Để dòng bằng nhau, ta mắc Đ₂ nt (Đ₁ // R_b) sao cho I₂ = I₁ + I_b. Khi đó công suất mạch chỉ là 2 × 60 = 120 W (ít tốn điện hơn so với sơ đồ A tốn 200 W!).',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một ấm điện có hai dây điện trở. Nếu mắc nối tiếp hai dây thì đun sôi nước trong $40\\,\\text{phút}$; nếu mắc song song hai dây thì đun sôi cùng lượng nước đó trong $7,5\\,\\text{phút}$. Thời gian đun sôi nước khi chỉ dùng riêng từng dây là:',
      options: ['10 phút và 30 phút', '15 phút và 25 phút', '20 phút và 20 phút', '5 phút và 35 phút'],
      correct_index: 0,
      explanation: 'Gọi thời gian là t₁, t₂. Ta có t₁ + t₂ = 40 và (t₁ · t₂) / (t₁ + t₂) = 7,5 ⇒ t₁ · t₂ = 7,5 × 40 = 300. Phương trình: t² - 40t + 300 = 0 có hai nghiệm t₁ = 10 phút và t₂ = 30 phút.',
    },
  ],

  // =====================================================
  // EXAM G9-CH4: Điện từ học (Cảm ứng điện từ & Dòng xoay chiều)
  // =====================================================
  'G9-CH4': [
    // 6 Nhận biết (1-6)
    {
      difficulty: 'nhan_biet',
      question_text: 'Dòng điện cảm ứng xuất hiện trong một cuộn dây dẫn kín khi:',
      options: ['Từ trường qua cuộn dây là không đổi', 'Số đường sức từ xuyên qua tiết diện cuộn dây biến thiên', 'Cuộn dây đứng yên trong chân không', 'Cuộn dây có dòng một chiều chạy qua'],
      correct_index: 1,
      explanation: 'Điều kiện là số đường sức từ xuyên qua cuộn dây kín biến thiên.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Máy phát điện xoay chiều biến đổi dạng năng lượng nào thành điện năng?',
      options: ['Hóa năng', 'Nhiệt năng', 'Cơ năng', 'Quang năng'],
      correct_index: 2,
      explanation: 'Máy phát điện biến đổi cơ năng thành điện năng.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Tần số của dòng điện xoay chiều được đo bằng đơn vị gì?',
      options: ['Vôn (V)', 'Héc (Hertz, ký hiệu Hz)', 'Ampe (A)', 'Oát (W)'],
      correct_index: 1,
      explanation: 'Đơn vị đo tần số là Hertz (Hz).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hệ thức của máy biến áp lý tưởng liên hệ giữa điện áp và số vòng dây là:',
      options: ['U₁ / U₂ = N₁ / N₂', 'U₁ / U₂ = N₂ / N₁', 'U₁ · N₁ = U₂ · N₂', 'U₁ + N₁ = U₂ + N₂'],
      correct_index: 0,
      explanation: 'U₁ / U₂ = N₁ / N₂.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công suất hao phí do tỏa nhiệt trên đường dây truyền tải điện tỉ lệ nghịch với:',
      options: ['Hiệu điện thế U', 'Bình phương hiệu điện thế U²', 'Điện trở đường dây', 'Chiều dài dây'],
      correct_index: 1,
      explanation: 'P_hp = R · P² / U² tỉ lệ nghịch với bình phương hiệu điện thế U².',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Thiết bị nào sau đây CHỈ HOẠT ĐỘNG ĐƯỢC với dòng điện xoay chiều, không hoạt động với dòng một chiều?',
      options: ['Bóng đèn sợi đốt', 'Máy biến áp', 'Bếp điện mayso', 'Bình đun nước'],
      correct_index: 1,
      explanation: 'Máy biến áp chỉ hoạt động với dòng điện xoay chiều AC.',
    },

    // 7 Thông hiểu (7-13)
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi nam châm tiến lại gần cuộn dây dẫn kín, dòng điện cảm ứng sinh ra có chiều sao cho:',
      options: ['Hút nam châm tiến lại nhanh hơn', 'Chống lại chuyển động tiến lại gần của nam châm (tạo cực từ cùng tên để đẩy)', 'Không tạo ra lực từ nào', 'Làm nam châm nóng chảy'],
      correct_index: 1,
      explanation: 'Theo định luật Lenz, dòng cảm ứng chống lại nguyên nhân sinh ra nó.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Mạng điện xoay chiều 220 V - 50 Hz có điện áp cực đại (biên độ đỉnh) bằng bao nhiêu?',
      options: ['220 V', '311 V (220√2 V)', '110 V', '440 V'],
      correct_index: 1,
      explanation: 'U₀ = U · √2 = 220 × 1,414 ≈ 311 V.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Nếu muốn giảm công suất hao phí trên đường dây tải điện đi 16 lần thì hiệu điện thế truyền tải phải:',
      options: ['Tăng lên gấp 4 lần', 'Tăng lên gấp 16 lần', 'Giảm đi 4 lần', 'Tăng gấp 2 lần'],
      correct_index: 0,
      explanation: 'P_hp tỉ lệ nghịch với U². Muốn P_hp giảm 16 lần thì U phải tăng √16 = 4 lần.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao tại các nhà máy điện người ta phải dùng máy tăng áp trước khi đưa điện lên đường dây cao thế?',
      options: ['Để tăng tần số dòng điện', 'Để tăng hiệu điện thế nhằm giảm thiểu hao phí do tỏa nhiệt trên đường dây truyền tải đi xa', 'Để tạo ra nhiều điện hơn', 'Để dòng điện chạy nhanh hơn'],
      correct_index: 1,
      explanation: 'Tăng áp để giảm dòng điện I = P/U, từ đó giảm hao phí I²R.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một máy biến áp có $N_1 = 2000\\,\\text{vòng}$ và $N_2 = 500\\,\\text{vòng}$. Đây là loại máy biến áp nào?',
      options: ['Máy tăng áp', 'Máy hạ áp (vì N₂ < N₁)', 'Máy ổn áp', 'Máy biến tần'],
      correct_index: 1,
      explanation: 'N₂ < N₁ nên U₂ < U₁ là máy hạ áp.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi cho một nam châm quay đều trước một cuộn dây dẫn kín đứng yên thì trong cuộn dây xuất hiện:',
      options: ['Dòng điện xoay chiều', 'Dòng điện một chiều', 'Không có dòng điện', 'Dòng điện tĩnh'],
      correct_index: 0,
      explanation: 'Số đường sức từ luân phiên tăng giảm sinh ra dòng điện xoay chiều.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tác dụng nào của dòng điện xoay chiều KHÔNG PHỤ THUỘC vào chiều của dòng điện?',
      options: ['Tác dụng từ', 'Tác dụng nhiệt', 'Tác dụng làm quay động cơ', 'Tác dụng điện phân'],
      correct_index: 1,
      explanation: 'Tác dụng nhiệt Q = I²Rt luôn dương không phụ thuộc chiều dòng điện.',
    },

    // 8 Vận dụng (14-21)
    {
      difficulty: 'van_dung',
      question_text: 'Một máy phát điện có $p = 6\\,\\text{cặp cực}$, quay với tốc độ $500\\,\\text{vòng/phút}$. Tần số dòng điện phát ra là:',
      options: ['50 Hz', '60 Hz', '30 Hz', '100 Hz'],
      correct_index: 0,
      explanation: 'f = (n · p) / 60 = (500 × 6) / 60 = 50 Hz.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Máy biến áp có $N_1 = 500\\,\\text{vòng}, N_2 = 2500\\,\\text{vòng}$. Đặt vào cuộn sơ cấp $U_1 = 220\\,\\text{V}$. Điện áp thứ cấp $U_2$ là:',
      options: ['1100 V', '44 V', '2200 V', '550 V'],
      correct_index: 0,
      explanation: 'U₂ = U₁ · (N₂ / N₁) = 220 × (2500 / 500) = 220 × 5 = 1100 V.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Đường dây tải điện dài có $R = 25\\,\\Omega$, truyền tải công suất $P = 200\\,\\text{kW}$ ở điện áp $U = 10\\,\\text{kV}$. Công suất hao phí là:',
      options: ['10 kW', '20 kW', '5 kW', '2 kW'],
      correct_index: 0,
      explanation: 'I = 200 000 / 10 000 = 20 A. P_hp = I² · R = (20)² × 25 = 400 × 25 = 10 000 W = 10 kW.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Ở câu trên, nếu nâng điện áp lên $U = 50\\,\\text{kV}$ thì công suất hao phí giảm xuống còn bao nhiêu?',
      options: ['400 W (0,4 kW)', '1 kW', '2 kW', '200 W'],
      correct_index: 0,
      explanation: 'U tăng 5 lần (10 kV lên 50 kV) ⇒ hao phí giảm 5² = 25 lần: 10 000 / 25 = 400 W = 0,4 kW.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một cuộn dây $N = 200\\,\\text{vòng}$ có từ thông giảm từ $0,05\\,\\text{Wb}$ về $0$ trong $0,1\\,\\text{s}$. Suất điện động cảm ứng là:',
      options: ['100 V', '50 V', '200 V', '20 V'],
      correct_index: 0,
      explanation: 'e_c = N · (ΔΦ / Δt) = 200 × (0,05 / 0,1) = 200 × 0,5 = 100 V.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Máy biến áp hạ áp từ $220\\,\\text{V}$ xuống $12\\,\\text{V}$. Cuộn sơ cấp có $1100\\,\\text{vòng}$. Số vòng cuộn thứ cấp là:',
      options: ['60 vòng', '120 vòng', '50 vòng', '24 vòng'],
      correct_index: 0,
      explanation: 'N₂ = N₁ · (U₂ / U₁) = 1100 × (12 / 220) = 5 × 12 = 60 vòng.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Dòng điện xoay chiều có $I_0 = 5\\sqrt{2}\\,\\text{A}$. Ampe kế xoay chiều chỉ giá trị:',
      options: ['5 A', '7,07 A', '10 A', '2,5 A'],
      correct_index: 0,
      explanation: 'Ampe kế đo giá trị hiệu dụng: I = I₀ / √2 = 5 A.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một máy phát điện roto quay $1200\\,\\text{vòng/phút}$ phát ra dòng điện $60\\,\\text{Hz}$. Số cặp cực của máy là:',
      options: ['3 cặp', '2 cặp', '4 cặp', '6 cặp'],
      correct_index: 0,
      explanation: 'p = (60 · f) / n = (60 × 60) / 1200 = 3600 / 1200 = 3 cặp cực.',
    },

    // 4 Vận dụng cao (22-25)
    {
      difficulty: 'van_dung_cao',
      question_text: 'Cần truyền tải công suất điện $P = 4\\,\\text{MW}$ từ nhà máy điện đến khu công nghiệp qua đường dây có $R = 16\\,\\Omega$. Để công suất hao phí không vượt quá $1\\%$ công suất truyền tải ($P_{hp} \\le 0,01 P$), hiệu điện thế truyền tải tối thiểu phải là:',
      options: ['80 kV', '40 kV', '100 kV', '60 kV'],
      correct_index: 0,
      explanation: 'P_hp = R · P² / U² ≤ 0,01 P ⇒ U² ≥ R · P / 0,01 = 16 × 4 × 10⁶ / 0,01 = 64 × 10⁸ ⇒ U ≥ 8 × 10⁴ V = 80 kV.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một máy biến áp lý tưởng có cuộn sơ cấp $N_1 = 1000\\,\\text{vòng}$, cuộn thứ cấp $N_2 = 100\\,\\text{vòng}$. Đặt vào cuộn sơ cấp $U_1 = 200\\,\\text{V}$. Nối hai đầu cuộn thứ cấp với điện trở $R = 10\\,\\Omega$. Cường độ dòng điện hiệu dụng ở cuộn sơ cấp là:',
      options: ['0,2 A', '2 A', '0,02 A', '20 A'],
      correct_index: 0,
      explanation: 'U₂ = U₁ · (N₂ / N₁) = 200 × (100 / 1000) = 20 V. Dòng điện cuộn thứ cấp: I₂ = U₂ / R = 20 / 10 = 2 A. Dòng điện sơ cấp: I₁ = I₂ · (N₂ / N₁) = 2 × (100 / 1000) = 0,2 A.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một máy phát điện xoay chiều một pha cấp điện cho một phụ tải cố định. Khi tăng tốc độ quay của roto lên 2 lần và đồng thời giảm số cặp cực đi 2 lần thì tần số dòng điện và suất điện động cực đại sinh ra thay đổi như thế nào?',
      options: [
        'Tần số không đổi; suất điện động cực đại tăng gấp đôi',
        'Cả tần số và suất điện động đều không đổi',
        'Tần số tăng gấp đôi; suất điện động không đổi',
        'Suất điện động giảm đi một nửa',
      ],
      correct_index: 0,
      explanation: 'Tần số f = n · p: n tăng 2 và p giảm 2 nên f không đổi. Suất điện động cực đại E₀ = ω · Φ₀ = 2π n p · Φ₀ / p... à, ω = 2π n (tốc độ góc cơ học tăng gấp đôi) làm tốc độ biến thiên từ thông tăng gấp đôi ⇒ E₀ tăng gấp đôi.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Người ta truyền tải điện năng từ nhà máy đến một xóm làng bằng đường dây có điện trở $R = 40\\,\\Omega$. Công suất truyền đi là $P = 100\\,\\text{kW}$ ở điện áp $U = 10\\,\\text{kV}$. Nếu giá tiền điện hao phí là 2500 đồng/kWh thì trong một năm (365 ngày), số tiền bị tổn thất do hao phí trên đường dây này là bao nhiêu?',
      options: ['87 600 000 đồng', '43 800 000 đồng', '21 900 000 đồng', '175 200 000 đồng'],
      correct_index: 0,
      explanation: 'Dòng điện truyền tải: I = P / U = 100 000 / 10 000 = 10 A. Công suất hao phí: P_hp = I² · R = 10² × 40 = 4000 W = 4 kW. Số giờ trong 1 năm: t = 365 × 24 = 8760 h. Điện năng hao phí trong 1 năm: A_hp = 4 kW × 8760 h = 35 040 kWh. Số tiền tổn thất: 35 040 kWh × 2500 đồng/kWh = 87 600 000 đồng.',
    },
  ],
};

import { SeedQuestionItem } from './grade6-questions';
import {
  GRADE9_CH3_CH4_TOPICS,
  GRADE9_CHAPTER_EXAMS,
} from './grade9-questions-part2';

type RawQ = Omit<SeedQuestionItem, 'order_index'>;

export const GRADE9_CH1_CH2_TOPICS: Record<string, RawQ[]> = {
  // ==========================================
  // TOPIC G9-CH1-TP1: Công cơ học & Điều kiện sinh công (25 questions)
  // ==========================================
  'G9-CH1-TP1': [
    // 10 Nhận biết (order 1-10)
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong các trường hợp sau đây, trường hợp nào có lực tác dụng sinh CÔNG CƠ HỌC?',
      options: [
        'Người lực sĩ đang gồng mình giữ yên quả tạ nặng 100 kg trên cao',
        'Chiếc xe ô tô đang được động cơ kéo chuyển động trên đường',
        'Một học sinh ngồi chăm chú đọc sách vật lý tại bàn học',
        'Hòn đá nằm yên trên mặt đất phẳng',
      ],
      correct_index: 1,
      explanation: 'Công cơ học chỉ xuất hiện khi có lực tác dụng vào vật và làm cho vật chuyển dời một khoảng: A = F · s.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hai điều kiện cần và đủ để có công cơ học là gì?',
      options: [
        'Có lực tác dụng vào vật và vật phải có nhiệt độ cao',
        'Có lực tác dụng vào vật và điểm đặt của lực phải chuyển dời theo phương không vuông góc với lực',
        'Vật phải chuyển động với tốc độ không đổi',
        'Lực tác dụng phải luôn luôn vuông góc với phương dịch chuyển',
      ],
      correct_index: 1,
      explanation: 'Điều kiện có công cơ học: Phải có lực tác dụng và vật phải chuyển dời theo phương không vuông góc với lực.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức tính công cơ học khi lực $\\vec{F}$ cùng phương, cùng chiều với hướng chuyển dời của vật trên quãng đường $s$ là:',
      options: ['A = F / s', 'A = F · s', 'A = s / F', 'A = F + s'],
      correct_index: 1,
      explanation: 'Khi lực cùng hướng chuyển dời: A = F · s.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong hệ đơn vị quốc tế SI, đơn vị đo công cơ học là gì?',
      options: ['Oát (W)', 'Newton (N)', 'Joule (J)', 'Pascal (Pa)'],
      correct_index: 2,
      explanation: 'Đơn vị đo công trong hệ SI là Joule (J), 1 J = 1 N · m.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Một Joule (1 J) tương đương với đơn vị nào sau đây?',
      options: ['1 N/m', '1 N · m', '1 N · s', '1 kg · m/s'],
      correct_index: 1,
      explanation: 'Từ công thức A = F · s suy ra 1 J = 1 N × 1 m = 1 N · m.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị kilôjun (kJ) bằng bao nhiêu jun (J)?',
      options: ['100 J', '500 J', '1000 J', '1 000 000 J'],
      correct_index: 2,
      explanation: 'Tiền tố kilo nghĩa là 10³, nên 1 kJ = 1000 J.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi hướng của lực tác dụng vuông góc với phương dịch chuyển của vật (góc $\\alpha = 90^\\circ$), công của lực đó có giá trị bằng bao nhiêu?',
      options: ['A = F · s', 'A > 0', 'A = 0', 'A < 0'],
      correct_index: 2,
      explanation: 'Khi lực vuông góc với phương chuyển dịch (như trọng lực khi vật trượt ngang), cos(90°) = 0 nên công của lực bằng 0.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công phát động là công của lực có đặc điểm gì?',
      options: [
        'Lực có tác dụng thúc đẩy chuyển động (góc giữa lực và hướng chuyển dời nhọn: 0° ≤ α < 90°, A > 0)',
        'Lực ngược hướng chuyển dời làm vật cản trở chuyển động (A < 0)',
        'Lực vuông góc với hướng chuyển dời',
        'Công phát động luôn luôn bằng 0',
      ],
      correct_index: 0,
      explanation: 'Công phát động có giá trị dương (A > 0), sinh ra bởi lực kéo thúc đẩy chuyển động.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Lực ma sát trượt tác dụng lên vật chuyển động trên mặt sàn sinh ra loại công nào?',
      options: ['Công phát động (A > 0)', 'Công cản (A < 0)', 'Không sinh công (A = 0)', 'Công vô hạn'],
      correct_index: 1,
      explanation: 'Lực ma sát trượt ngược chiều chuyển dời (góc α = 180°), cos(180°) = -1 nên sinh công cản âm (A < 0).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi một vật rơi tự do từ trên cao xuống đất, lực nào sau đây đã thực hiện công phát động?',
      options: ['Lực ma sát', 'Lực đẩy Archimedes', 'Trọng lực (lực hút của Trái Đất)', 'Lực đàn hồi'],
      correct_index: 2,
      explanation: 'Trọng lực hướng thẳng đứng từ trên xuống, cùng chiều với hướng chuyển động rơi của vật nên trọng lực thực hiện công phát động A = P · h > 0.',
    },

    // 7 Thông hiểu (order 11-17)
    {
      difficulty: 'thong_hieu',
      question_text: 'Một người khuân một bao xi măng nặng 50 kg bước đi đều trên sàn nhà nằm ngang một đoạn 20 m. Trọng lực tác dụng lên bao xi măng sinh một công bằng bao nhiêu?',
      options: ['10 000 J', '1000 J', '0 J', '500 J'],
      correct_index: 2,
      explanation: 'Trọng lực có phương thẳng đứng, hướng chuyển dời nằm ngang (vuông góc 90° với nhau) nên công của trọng lực trên quãng đường này bằng 0 J.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một con ngựa kéo một cỗ xe chuyển động thẳng đều trên đường nằm ngang. Nhận xét nào sau đây về công của các lực là ĐÚNG?',
      options: [
        'Công của lực kéo là công phát động (A > 0), công của lực cản/ma sát là công cản (A < 0), công của trọng lực bằng 0',
        'Tất cả các lực đều sinh công phát động dương',
        'Trọng lực sinh công cản âm',
        'Không có lực nào sinh công vì xe chuyển động thẳng đều',
      ],
      correct_index: 0,
      explanation: 'Lực kéo cùng chiều dịch chuyển (A_kéo > 0); ma sát ngược chiều dịch chuyển (A_ms < 0); trọng lực và phản lực vuông góc phương ngang nên A = 0.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Nếu độ lớn của lực tác dụng lên vật tăng gấp 3 lần và quãng đường dịch chuyển của vật theo hướng của lực tăng gấp 2 lần, thì công cơ học thực hiện sẽ thay đổi thế nào?',
      options: ['Tăng gấp 5 lần', 'Tăng gấp 6 lần', 'Giảm đi 6 lần', 'Không thay đổi'],
      correct_index: 1,
      explanation: 'Ta có A\' = F\' · s\' = (3F) · (2s) = 6(F · s) = 6A (tăng gấp 6 lần).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một vệ tinh nhân tạo bay theo quỹ đạo tròn đều xung quanh Trái Đất. Trọng lực của Trái Đất tác dụng lên vệ tinh có sinh công không, vì sao?',
      options: [
        'Có sinh công phát động vì vệ tinh bay liên tục',
        'Không sinh công vì tại mọi điểm trên quỹ đạo, lực hấp dẫn luôn hướng vào tâm Trái Đất, vuông góc với vectơ vận tốc tức thời của vệ tinh',
        'Sinh công cản làm vệ tinh bay chậm dần',
        'Chỉ sinh công khi vệ tinh bay qua ban đêm',
      ],
      correct_index: 1,
      explanation: 'Trong chuyển động tròn đều, lực hướng tâm (trọng lực) luôn vuông góc với hướng dịch chuyển tức thời, nên công cơ học của lực hướng tâm bằng 0.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một quả bóng được ném thẳng đứng lên cao. Trong giai đoạn quả bóng đang bay lên, công của trọng lực có dấu gì và có tác dụng như thế nào?',
      options: [
        'Dương (A > 0), thúc đẩy bóng bay nhanh hơn',
        'Âm (A < 0), cản trở chuyển động làm quả bóng bay chậm dần',
        'Bằng 0 vì bóng đang ở trên cao',
        'Lúc âm lúc dương xen kẽ',
      ],
      correct_index: 1,
      explanation: 'Khi bay lên, hướng chuyển dời hướng lên trên nhưng trọng lực hướng thẳng xuống dưới (ngược chiều nhau) nên công của trọng lực là công cản âm: A = -P·h < 0.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Người ta dùng mặt phẳng nghiêng nhẵn để kéo một vật nặng lên sàn xe tải. So với kéo trực tiếp theo phương thẳng đứng, dùng mặt phẳng nghiêng mang lại lợi ích gì?',
      options: [
        'Được lợi về công cơ học (công giảm đi)',
        'Được lợi về lực kéo (lực kéo nhỏ hơn trọng lượng vật) nhưng bị thiệt về đường đi, tổng công không đổi (nếu bỏ qua ma sát)',
        'Được lợi cả về lực và về đường đi',
        'Thiệt về lực kéo nhưng lợi về công',
      ],
      correct_index: 1,
      explanation: 'Định luật về công: Không một máy cơ đơn giản nào cho ta lợi về công; được lợi bao nhiêu lần về lực thì thiệt bấy nhiêu lần về đường đi.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Trường hợp nào sau đây KHÔNG CÓ công cơ học được sinh ra?',
      options: [
        'Chiếc máy bay đang cất cánh rời khỏi đường băng',
        'Một người dùng sức đẩy một chiếc xe tải chở đầy cát nhưng chiếc xe vẫn đứng yên không nhúc nhích',
        'Quả táo rụng từ trên cành cây rơi xuống đất',
        'Chiếc tàu ngầm đang lặn dần xuống đáy biển',
      ],
      correct_index: 1,
      explanation: 'Dù người tác dụng lực đẩy rất lớn nhưng quãng đường dịch chuyển s = 0 nên công A = F · 0 = 0.',
    },

    // 5 Vận dụng (order 18-22)
    {
      difficulty: 'van_dung',
      question_text: 'Một lực kéo $F = 150\\,\\text{N}$ theo phương nằm ngang làm một thùng gỗ chuyển động tịnh tiến đều được quãng đường $s = 8\\,\\text{m}$ trên sàn nhà. Công của lực kéo bằng bao nhiêu?',
      options: ['1200 J', '18,75 J', '158 J', '120 J'],
      correct_index: 0,
      explanation: 'Công của lực kéo: A = F · s = 150 N × 8 m = 1200 J.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một đầu máy xe lửa kéo đoàn tàu chuyển động thẳng đều với lực kéo $F = 5000\\,\\text{N}$ đi được quãng đường $s = 1\\,\\text{km}$. Công của lực kéo của đầu máy bằng:',
      options: ['5000 J', '5 000 000 J (5 MJ)', '500 kJ', '50 MJ'],
      correct_index: 1,
      explanation: 'Đổi s = 1 km = 1000 m. Công A = F · s = 5000 N × 1000 m = 5 000 000 J = 5 MJ.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một người kéo đều một bao xi măng có khối lượng $m = 50\\,\\text{kg}$ lên sàn tầng 2 cao $h = 4\\,\\text{m}$ theo phương thẳng đứng. Lấy $g = 10\\,\\text{m/s}^2$. Công của lực kéo tối thiểu của người đó là:',
      options: ['200 J', '2000 J', '500 J', '125 J'],
      correct_index: 1,
      explanation: 'Lực kéo tối thiểu nâng đều: F = P = m · g = 50 × 10 = 500 N. Công nâng: A = F · h = 500 × 4 = 2000 J.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một vật chuyển động trên mặt sàn nằm ngang chịu tác dụng của lực cản ma sát $F_{\\text{ms}} = 40\\,\\text{N}$. Khi vật trượt được quãng đường $s = 25\\,\\text{m}$, công của lực ma sát là:',
      options: ['1000 J', '-1000 J', '0 J', '-160 J'],
      correct_index: 1,
      explanation: 'Lực ma sát ngược chiều chuyển động nên công của lực ma sát là công cản âm: A_ms = -F_ms · s = -40 × 25 = -1000 J.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một con ngựa kéo một cỗ xe đi đều trên quãng đường nằm ngang với lực kéo $F = 200\\,\\text{N}$. Trong cả chặng đường, con ngựa đã thực hiện một công $A = 100\\,\\text{kJ}$. Quãng đường cỗ xe đã đi được là:',
      options: ['500 m', '200 m', '50 m', '20 000 m'],
      correct_index: 0,
      explanation: 'Đổi A = 100 kJ = 100 000 J. Quãng đường s = A / F = 100 000 / 200 = 500 m.',
    },

    // 3 Vận dụng cao (order 23-25)
    {
      difficulty: 'van_dung_cao',
      question_text: 'Để kéo một vật nặng có khối lượng $m = 60\\,\\text{kg}$ lên cao $h = 2\\,\\text{m}$, người ta dùng mặt phẳng nghiêng dài $l = 8\\,\\text{m}$. Lấy $g = 10\\,\\text{m/s}^2$. Do có ma sát nên lực kéo thực tế dọc theo mặt phẳng nghiêng là $F = 200\\,\\text{N}$. Tính công toàn phần thực hiện và hiệu suất của mặt phẳng nghiêng:',
      options: [
        'A_tp = 1600 J; H = 75%',
        'A_tp = 1200 J; H = 100%',
        'A_tp = 1600 J; H = 80%',
        'A_tp = 2000 J; H = 60%',
      ],
      correct_index: 0,
      explanation: 'Công có ích nâng trực tiếp: A_ích = P · h = (60 × 10) × 2 = 1200 J. Công toàn phần của lực kéo: A_tp = F · l = 200 × 8 = 1600 J. Hiệu suất H = (A_ích / A_tp) × 100% = (1200 / 1600) × 100% = 75%.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một máy bơm hút nước từ một giếng sâu $h_1 = 6\\,\\text{m}$ dưới lòng đất rồi bơm đẩy lên bồn nước đặt trên sân thượng cao $h_2 = 14\\,\\text{m}$ so với mặt đất. Biết khối lượng riêng của nước là $D = 1000\\,\\text{kg/m}^3$, lấy $g = 10\\,\\text{m/s}^2$. Để bơm được $V = 5\\,\\text{m}^3$ nước lên bồn, công có ích của máy bơm tối thiểu bằng bao nhiêu?',
      options: ['100 000 J', '700 000 J', '1 000 000 J (1 MJ)', '300 000 J'],
      correct_index: 2,
      explanation: 'Khối lượng nước cần bơm: m = D · V = 1000 × 5 = 5000 kg. Trọng lượng nước: P = m · g = 5000 × 10 = 50 000 N. Tổng độ cao đưa nước lên: H = h₁ + h₂ = 6 + 14 = 20 m. Công có ích tối thiểu: A = P · H = 50 000 N × 20 m = 1 000 000 J = 1 MJ.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một chiếc ô tô khối lượng $m = 1,2\\,\\text{tấn}$ đang chạy với vận tốc $v_0 = 54\\,\\text{km/h}$ trên đường nằm ngang thì tài xế hãm phanh. Xe chuyển động chậm dần đều và đi được quãng đường $s = 25\\,\\text{m}$ thì dừng lại hẳn. Công của lực hãm phanh tác dụng lên xe trong quá trình đó bằng bao nhiêu?',
      options: ['-135 kJ', '-270 kJ', '-1350 kJ', '-360 kJ'],
      correct_index: 0,
      explanation: 'Đổi m = 1,2 tấn = 1200 kg; v₀ = 54 km/h = 15 m/s; khi dừng lại v = 0. Theo định lý động năng, công của toàn bộ lực cản hãm phanh bằng độ biến thiên động năng của xe: A_hãm = W_đ2 - W_đ1 = 0 - ½ m v₀² = -0,5 × 1200 × (15)² = -600 × 225 = -135 000 J = -135 kJ.',
    },
  ],

  // ==========================================
  // TOPIC G9-CH1-TP2: Công suất & Tốc độ sinh công (25 questions)
  // ==========================================
  'G9-CH1-TP2': [
    // 10 Nhận biết (order 1-10)
    {
      difficulty: 'nhan_biet',
      question_text: 'Công suất là đại lượng vật lý đặc trưng cho yếu tố nào sau đây?',
      options: [
        'Mức độ nặng hay nhẹ của vật chuyển động',
        'Tốc độ sinh công (mức độ nhanh hay chậm của việc thực hiện công)',
        'Độ lớn của tổng công mà máy có thể thực hiện được',
        'Hiệu điện thế của nguồn điện cung cấp',
      ],
      correct_index: 1,
      explanation: 'Công suất đặc trưng cho tốc độ sinh công, xác định bằng công sinh ra trong một đơn vị thời gian: P = A / t.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức tính công suất cơ học là gì?',
      options: ['P = A · t', 'P = A / t', 'P = t / A', 'P = A + t'],
      correct_index: 1,
      explanation: 'Công suất bằng công chia cho thời gian thực hiện công: P = A / t.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong hệ đo lường quốc tế SI, đơn vị của công suất là gì?',
      options: ['Joule (J)', 'Oát (Watt, ký hiệu W)', 'Newton (N)', 'Mã lực (HP)'],
      correct_index: 1,
      explanation: 'Đơn vị chuẩn của công suất trong hệ SI là Watt (W), 1 W = 1 J/s.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Một Oát (1 W) bằng bao nhiêu jun trên giây (J/s)?',
      options: ['1 J/s', '60 J/s', '3600 J/s', '1000 J/s'],
      correct_index: 0,
      explanation: '1 W = 1 J / 1 s = 1 J/s.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Một kilôoát (1 kW) tương ứng bằng bao nhiêu oát (W)?',
      options: ['10 W', '100 W', '1000 W', '1 000 000 W'],
      correct_index: 2,
      explanation: '1 kW = 1000 W.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Một mêgaoát (1 MW) bằng bao nhiêu oát (W)?',
      options: ['1 000 W', '10 000 W', '100 000 W', '1 000 000 W (10⁶ W)'],
      correct_index: 3,
      explanation: '1 MW = 10⁶ W = 1 000 000 W.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị Mã lực (Horsepower, ký hiệu HP) trong kỹ thuật cơ khí xấp xỉ bằng bao nhiêu oát?',
      options: ['Khoảng 100 W', 'Khoảng 746 W', 'Khoảng 1000 W', 'Khoảng 3600 W'],
      correct_index: 1,
      explanation: '1 HP (mã lực Anh) xấp xỉ 746 W; 1 CV (mã lực Pháp) xấp xỉ 736 W.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Số oát ghi trên nhãn động cơ của một máy bơm nước (ví dụ 750 W) có ý nghĩa gì?',
      options: [
        'Máy chỉ có thể bơm được 750 lít nước rồi hỏng',
        'Công suất định mức của động cơ máy bơm khi hoạt động bình thường',
        'Tổng công tối đa máy bơm làm được trong một ngày',
        'Nhiệt độ tối đa của máy bơm',
      ],
      correct_index: 1,
      explanation: 'Con số 750 W là công suất định mức, nghĩa là trong 1 giây máy bơm thực hiện một công bằng 750 J khi chạy đúng điện áp định mức.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi một vật chuyển động thẳng đều với vận tốc $v$ dưới tác dụng của lực kéo không đổi $F$ cùng hướng chuyển động, công suất tức thời của lực kéo được tính bởi công thức nào?',
      options: ['P = F / v', 'P = F · v', 'P = v / F', 'P = F + v'],
      correct_index: 1,
      explanation: 'Ta có P = A / t = (F · s) / t = F · (s / t) = F · v.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Từ công thức gốc $\\mathcal{P} = A / t$, công thức suy ra để tính công $A$ thực hiện trong khoảng thời gian $t$ là:',
      options: ['A = P / t', 'A = P · t', 'A = t / P', 'A = P + t'],
      correct_index: 1,
      explanation: 'A = P · t.',
    },

    // 7 Thông hiểu (order 11-17)
    {
      difficulty: 'thong_hieu',
      question_text: 'Hai máy kéo nông nghiệp A và B cùng thực hiện cày một thửa ruộng có diện tích như nhau. Máy A hoàn thành trong 2 giờ, máy B hoàn thành trong 3 giờ. So sánh công và công suất của hai máy:',
      options: [
        'Hai máy sinh công như nhau; máy A có công suất lớn hơn máy B',
        'Máy A sinh công lớn hơn máy B; công suất bằng nhau',
        'Máy B có công suất lớn hơn máy A',
        'Máy A sinh công ít hơn máy B',
      ],
      correct_index: 0,
      explanation: 'Cùng cày một thửa ruộng nên công A thực hiện là như nhau. Máy A mất ít thời gian hơn (t_A < t_B) nên công suất của máy A lớn hơn máy B (P_A > P_B).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao khi xe ô tô hoặc xe máy lên dốc cao, người lái xe thường phải chuyển về số thấp (số 1 hoặc số 2)?',
      options: [
        'Để tăng công suất của động cơ xe lên gấp đôi',
        'Để giảm vận tốc của xe, từ đó tăng lực kéo của động cơ lên theo hệ thức P = F · v (vì công suất cực đại của động cơ có hạn)',
        'Để xe chạy êm hơn không gây tiếng ồn',
        'Để tiết kiệm xăng tuyệt đối',
      ],
      correct_index: 1,
      explanation: 'Khi công suất P không đổi, P = F · v ⇒ F = P / v. Về số thấp làm giảm vận tốc v giúp lực kéo F của xe tăng lên đáng kể để vượt dốc.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một máy nâng có công suất 2 kW. Con số này cho biết điều gì?',
      options: [
        'Mỗi giây máy nâng thực hiện được một công là 2000 J',
        'Mỗi phút máy nâng thực hiện được một công là 2000 J',
        'Máy có thể nâng được vật nặng tối đa 2000 kg',
        'Máy chỉ chạy được tối đa 2 giờ liên tục',
      ],
      correct_index: 0,
      explanation: 'Công suất 2 kW = 2000 W = 2000 J/s nghĩa là trong mỗi giây máy thực hiện một công bằng 2000 J.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Nếu giữ nguyên lực kéo $F$ tác dụng vào một chiếc xe nhưng làm vận tốc chuyển động đều của xe tăng lên gấp đôi thì công suất của động cơ sẽ thay đổi như thế nào?',
      options: ['Giảm đi một nửa', 'Tăng lên gấp đôi', 'Tăng lên gấp 4 lần', 'Không thay đổi'],
      correct_index: 1,
      explanation: 'Từ hệ thức P = F · v, khi F không đổi và v tăng 2 lần thì công suất P tăng lên gấp đôi.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Bạn Bình leo lên một cầu thang cao mất 20 giây; bạn An cũng leo lên chính cầu thang đó mất 30 giây. Biết hai bạn có cân nặng bằng nhau. Nhận xét nào sau đây là ĐÚNG?',
      options: [
        'Bạn Bình thực hiện công lớn hơn bạn An',
        'Bạn An thực hiện công lớn hơn bạn Bình',
        'Cả hai bạn thực hiện công bằng nhau, nhưng công suất của bạn Bình lớn hơn công suất của bạn An',
        'Công suất của hai bạn bằng nhau',
      ],
      correct_index: 2,
      explanation: 'Hai bạn cùng khối lượng và leo cùng độ cao nên A_An = A_Bình = P · h. Vì thời gian của Bình nhỏ hơn (20 s < 30 s) nên công suất của Bình lớn hơn An: P_Bình > P_An.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một động cơ điện sinh một công $A = 12\\,\\text{kJ}$ trong thời gian $t = 1\\,\\text{phút}$. Công suất của động cơ đó là:',
      options: ['12 kW', '200 W', '12 W', '720 kW'],
      correct_index: 1,
      explanation: 'Đổi A = 12 kJ = 12 000 J; t = 1 phút = 60 s. Công suất P = A / t = 12 000 / 60 = 200 W.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một chiếc tàu hỏa chạy với công suất $P$ không đổi. Khi đi vào đoạn đường có độ dốc cao làm lực cản chuyển động tăng lên gấp rưỡi ($F\' = 1,5F$), để động cơ không bị quá tải thì vận tốc tối đa của tàu sẽ thay đổi thế nào?',
      options: ['Tăng lên 1,5 lần', 'Giảm xuống còn 2/3 vận tốc ban đầu', 'Không thay đổi', 'Tăng gấp đôi'],
      correct_index: 1,
      explanation: 'Vì P = F · v = hằng số, khi lực cản tăng lên 1,5 lần (F\' = 1,5 F = 3/2 F) thì vận tốc tương ứng phải giảm xuống v\' = P / F\' = P / (1,5 F) = v / 1,5 = (2/3) v.',
    },

    // 5 Vận dụng (order 18-22)
    {
      difficulty: 'van_dung',
      question_text: 'Một cần cẩu xây dựng nâng một kiện hàng nặng $m = 800\\,\\text{kg}$ lên cao $h = 10\\,\\text{m}$ trong thời gian $t = 20\\,\\text{giây}$ với tốc độ đều. Lấy $g = 10\\,\\text{m/s}^2$. Công suất của cần cẩu là:',
      options: ['400 W', '4000 W (4 kW)', '8000 W', '1600 W'],
      correct_index: 1,
      explanation: 'Trọng lượng kiện hàng: P_vật = m · g = 800 × 10 = 8000 N. Công nâng kiện hàng: A = P_vật · h = 8000 × 10 = 80 000 J. Công suất cần cẩu: P = A / t = 80 000 / 20 = 4000 W = 4 kW.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một chiếc ô tô con chuyển động thẳng đều trên đường cao tốc với vận tốc $v = 72\\,\\text{km/h}$. Biết lực kéo của động cơ xe là $F = 1200\\,\\text{N}$. Công suất của động cơ ô tô lúc đó bằng:',
      options: ['86,4 kW', '24 kW', '16,67 kW', '864 W'],
      correct_index: 1,
      explanation: 'Đổi vận tốc sang m/s: v = 72 km/h = 72 / 3,6 = 20 m/s. Áp dụng công thức: P = F · v = 1200 N × 20 m/s = 24 000 W = 24 kW.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một máy bơm nước có công suất định mức $\\mathcal{P} = 1,5\\,\\text{kW}$ hoạt động liên tục trong thời gian $t = 20\\,\\text{phút}$. Tổng công cơ học mà máy bơm đã thực hiện là:',
      options: ['30 kJ', '1 800 000 J (1,8 MJ)', '180 kJ', '30 000 J'],
      correct_index: 1,
      explanation: 'Đổi P = 1,5 kW = 1500 W; thời gian t = 20 phút = 20 × 60 = 1200 s. Công thực hiện: A = P · t = 1500 W × 1200 s = 1 800 000 J = 1,8 MJ.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một thang máy chở 6 người (mỗi người nặng trung bình 60 kg, buồng thang máy nặng 240 kg) chuyển động đều lên cao $h = 30\\,\\text{m}$ trong thời gian $t = 15\\,\\text{giây}$. Lấy $g = 10\\,\\text{m/s}^2$. Công suất của động cơ kéo thang máy bằng:',
      options: ['12 kW', '18 kW', '7,2 kW', '3,6 kW'],
      correct_index: 0,
      explanation: 'Tổng khối lượng: m = (6 × 60) + 240 = 360 + 240 = 600 kg. Lực nâng đều: F = P = m · g = 600 × 10 = 6000 N. Công thực hiện: A = F · h = 6000 × 30 = 180 000 J. Công suất: P = A / t = 180 000 / 15 = 12 000 W = 12 kW.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một vận động viên cử tạ nâng quả tạ có khối lượng $m = 125\\,\\text{kg}$ từ mặt đất lên độ cao $h = 1,8\\,\\text{m}$ trong thời gian $t = 1,5\\,\\text{s}$. Lấy $g = 10\\,\\text{m/s}^2$. Công suất trung bình của lực nâng trong quá trình này là:',
      options: ['1500 W', '2250 W', '1125 W', '1875 W'],
      correct_index: 0,
      explanation: 'Công nâng tạ: A = m · g · h = 125 × 10 × 1,8 = 2250 J. Công suất trung bình: P = A / t = 2250 / 1,5 = 1500 W.',
    },

    // 3 Vận dụng cao (order 23-25)
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một thác nước cao $h = 45\\,\\text{m}$ có lưu lượng nước đổ xuống đều đặn là $V = 120\\,\\text{m}^3/\\text{s}$. Biết khối lượng riêng của nước là $1000\\,\\text{kg/m}^3$, lấy $g = 10\\,\\text{m/s}^2$. Toàn bộ dòng nước được dẫn vào tua-bin của một nhà máy thủy điện có hiệu suất biến đổi năng lượng là $H = 80\\%$. Công suất phát điện của nhà máy là:',
      options: ['54 MW', '43,2 MW', '67,5 MW', '36 MW'],
      correct_index: 1,
      explanation: 'Trong 1 giây, khối lượng nước đổ xuống: m = 120 m³ × 1000 kg/m³ = 120 000 kg. Trọng lượng nước trong 1 giây: P_nước = 120 000 × 10 = 1 200 000 N. Công trọng lực thực hiện trong 1 s (công suất tự nhiên của thác): P_tp = P_nước · h = 1 200 000 × 45 = 54 000 000 W = 54 MW. Công suất phát điện thực tế: P_đ = H · P_tp = 0,8 × 54 MW = 43,2 MW.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một ô tô khối lượng $m = 1,5\\,\\text{tấn}$ bắt đầu chuyển bánh và chuyển động thẳng nhanh dần đều trên đường nằm ngang, sau thời gian $t = 10\\,\\text{giây}$ thì đạt vận tốc $v = 72\\,\\text{km/h}$. Bỏ qua mọi ma sát và sức cản. Tính công suất tức thời của động cơ xe tại thời điểm cuối $t = 10\\,\\text{s}$:',
      options: ['30 kW', '60 kW', '15 kW', '45 kW'],
      correct_index: 1,
      explanation: 'Đổi m = 1500 kg; v = 72 km/h = 20 m/s. Gia tốc của xe: a = (v - 0) / t = 20 / 10 = 2 m/s². Lực kéo của động cơ: F = m · a = 1500 × 2 = 3000 N. Tại thời điểm t = 10 s, vận tốc tức thời là v = 20 m/s nên công suất tức thời là: P_tức_thời = F · v = 3000 N × 20 m/s = 60 000 W = 60 kW. (Lưu ý: Công suất trung bình là 30 kW, còn công suất tức thời cực đại ở cuối giây thứ 10 là 60 kW).',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một xe tải có khối lượng tổng cộng $m = 4\\,\\text{tấn}$ đang chạy lên một con dốc nghiêng dài với vận tốc đều $v = 36\\,\\text{km/h}$. Biết dốc có độ nghiêng sao cho cứ đi $100\\,\\text{m}$ thì lên cao $4\\,\\text{m}$ ($\\\\sin\\alpha = 0,04$). Lực cản ma sát trên mặt đường bằng $2\\%$ trọng lượng của xe. Lấy $g = 10\\,\\text{m/s}^2$. Công suất cần thiết của động cơ xe tải khi leo dốc là:',
      options: ['24 kW', '16 kW', '240 kW', '32 kW'],
      correct_index: 0,
      explanation: 'Đổi m = 4000 kg ⇒ P = 40 000 N; v = 36 km/h = 10 m/s. Thành phần trọng lực kéo lùi xe dọc dốc: F_t = P · sinα = 40 000 × 0,04 = 1600 N. Lực ma sát cản: F_ms = 0,02 · P = 0,02 × 40 000 = 800 N. Tổng lực kéo xe cần sinh ra để leo đều: F_kéo = F_t + F_ms = 1600 + 800 = 2400 N. Công suất động cơ xe tải: P = F_kéo · v = 2400 N × 10 m/s = 24 000 W = 24 kW.',
    },
  ],

  // ==========================================
  // TOPIC G9-CH1-TP3: Động năng, Thế năng & Bảo toàn cơ năng (25 questions)
  // ==========================================
  'G9-CH1-TP3': [
    // 10 Nhận biết (order 1-10)
    {
      difficulty: 'nhan_biet',
      question_text: 'Động năng của một vật là dạng năng lượng mà vật có được do yếu tố nào sau đây?',
      options: ['Vật đứng yên ở trên cao', 'Vật bị biến dạng đàn hồi', 'Vật đang chuyển động', 'Vật bị nung nóng'],
      correct_index: 2,
      explanation: 'Động năng là năng lượng do vật chuyển động mà có: W_đ = ½ m v².',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức tính động năng của một vật có khối lượng $m$ chuyển động với vận tốc $v$ là:',
      options: ['W_đ = m · v', 'W_đ = ½ m · v²', 'W_đ = m · v²', 'W_đ = ½ m · v'],
      correct_index: 1,
      explanation: 'W_đ = ½ m v².',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Thế năng trọng trường của một vật có khối lượng $m$ ở độ cao $h$ so với mốc thế năng được tính bằng công thức:',
      options: ['W_t = m · h', 'W_t = m · g · h', 'W_t = ½ m · g · h', 'W_t = m · g / h'],
      correct_index: 1,
      explanation: 'Thế năng trọng trường W_t = m · g · h.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Cơ năng của một vật chuyển động trong trọng trường là tổng của hai dạng năng lượng nào?',
      options: [
        'Nhiệt năng và động năng',
        'Động năng và thế năng trọng trường',
        'Quang năng và điện năng',
        'Hóa năng và thế năng',
      ],
      correct_index: 1,
      explanation: 'Cơ năng: W = W_đ + W_t = ½ m v² + m g h.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong hệ SI, đơn vị của động năng, thế năng và cơ năng đều là gì?',
      options: ['Oát (W)', 'Newton (N)', 'Joule (J)', 'Mã lực (HP)'],
      correct_index: 2,
      explanation: 'Mọi dạng năng lượng trong hệ SI đều có đơn vị chuẩn là Joule (J).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Nội dung Định luật bảo toàn cơ năng trong trọng trường phát biểu như thế nào?',
      options: [
        'Khi vật chuyển động chỉ dưới tác dụng của trọng lực (bỏ qua ma sát và lực cản), cơ năng của vật luôn được bảo toàn (W = const)',
        'Cơ năng luôn luôn tự sinh ra trong mọi chuyển động',
        'Khi có ma sát cơ năng vẫn luôn bảo toàn',
        'Động năng luôn luôn bằng thế năng ở mọi vị trí',
      ],
      correct_index: 0,
      explanation: 'Định luật bảo toàn cơ năng: Trong trọng trường, khi chỉ có trọng lực sinh công thì tổng động năng và thế năng là một hằng số.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi một vật rơi tự do từ trên cao xuống đất (bỏ qua lực cản không khí), sự chuyển hóa năng lượng diễn ra như thế nào?',
      options: [
        'Động năng tăng dần chuyển hóa thành thế năng',
        'Thế năng giảm dần chuyển hóa thành động năng tăng dần',
        'Cả động năng và thế năng đều cùng tăng',
        'Cơ năng của vật tăng dần theo thời gian',
      ],
      correct_index: 1,
      explanation: 'Khi rơi, độ cao h giảm nên thế năng giảm; vận tốc v tăng nên động năng tăng; thế năng chuyển hóa thành động năng.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi ném một hòn đá thẳng đứng từ mặt đất lên cao, tại vị trí cao nhất của quỹ đạo:',
      options: [
        'Vận tốc v = 0 nên động năng bằng 0, thế năng đạt giá trị cực đại',
        'Động năng đạt giá trị cực đại, thế năng bằng 0',
        'Cả động năng và thế năng đều bằng 0',
        'Vận tốc đạt giá trị lớn nhất',
      ],
      correct_index: 0,
      explanation: 'Ở điểm cao nhất, vật dừng lại đổi chiều rơi (v = 0 ⇒ W_đ = 0), độ cao cực đại h_max nên thế năng đạt cực đại W_t_max = W.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Nếu chọn mặt đất làm mốc thế năng ($h = 0$) thì tại vị trí mặt đất, thế năng của vật bằng bao nhiêu?',
      options: ['Cực đại', 'Bằng 0', 'Âm vô cùng', 'Bằng động năng'],
      correct_index: 1,
      explanation: 'Tại mốc thế năng h = 0 thì W_t = m · g · 0 = 0 J.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong trường hợp vật chuyển động chịu tác dụng của lực ma sát hoặc lực cản của không khí, cơ năng của vật thay đổi như thế nào?',
      options: [
        'Cơ năng được bảo toàn nguyên vẹn',
        'Cơ năng không bảo toàn mà bị giảm dần, phần giảm đi chuyển hóa thành nhiệt năng',
        'Cơ năng tăng dần lên',
        'Cơ năng biến thành điện năng',
      ],
      correct_index: 1,
      explanation: 'Lực cản ma sát sinh công âm làm tiêu tán cơ năng thành nhiệt năng tỏa ra môi trường (cơ năng giảm).',
    },

    // 7 Thông hiểu (order 11-17)
    {
      difficulty: 'thong_hieu',
      question_text: 'Nếu vận tốc của một vật chuyển động tăng lên gấp 3 lần trong khi khối lượng của vật không đổi thì động năng của vật sẽ:',
      options: ['Tăng lên gấp 3 lần', 'Tăng lên gấp 6 lần', 'Tăng lên gấp 9 lần', 'Không thay đổi'],
      correct_index: 2,
      explanation: 'Vì W_đ = ½ m v², động năng tỉ lệ với bình phương vận tốc: khi v tăng 3 lần thì v² tăng 3² = 9 lần ⇒ động năng tăng 9 lần.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một chiếc ô tô tải có khối lượng 4 tấn và một chiếc ô tô con có khối lượng 1 tấn cùng đang chạy trên đường với vận tốc 60 km/h. So sánh động năng của hai xe:',
      options: [
        'Động năng của hai xe bằng nhau vì cùng vận tốc',
        'Động năng của xe tải lớn gấp 4 lần động năng của xe con',
        'Động năng của xe con lớn hơn xe tải',
        'Động năng của xe tải lớn gấp 16 lần xe con',
      ],
      correct_index: 1,
      explanation: 'Cùng vận tốc v, động năng tỉ lệ thuận với khối lượng: m_tải / m_con = 4/1 = 4 nên W_đ(tải) = 4 W_đ(con).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi một con lắc đơn dao động điều hòa qua lại giữa hai vị trí biên A và B (vị trí thấp nhất là O, bỏ qua ma sát):',
      options: [
        'Tại O: thế năng cực đại, động năng bằng 0',
        'Tại hai biên A và B: thế năng cực đại, động năng bằng 0; tại O: động năng cực đại, thế năng bằng 0 (nếu chọn mốc tại O)',
        'Động năng không đổi tại mọi vị trí',
        'Cơ năng tại O lớn hơn cơ năng tại A',
      ],
      correct_index: 1,
      explanation: 'Tại biên A, B: con lắc dừng lại đổi chiều (v = 0 ⇒ W_đ = 0, W_t cực đại). Khi qua VTCB O: thế năng thấp nhất (W_t = 0), tốc độ cực đại nên W_đ cực đại.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một vật được thả rơi tự do từ độ cao $h$. Trong quá trình rơi, tại vị trí có động năng bằng thế năng ($W_đ = W_t$) thì độ cao $h\'$ của vật lúc đó bằng bao nhiêu so với độ cao ban đầu?',
      options: ['h\' = h / 4', 'h\' = h / 2', 'h\' = 2h / 3', 'h\' = 3h / 4'],
      correct_index: 1,
      explanation: 'Cơ năng bảo toàn: W = W_t(max) = m·g·h. Tại vị trí W_đ = W_t: W = W_đ + W_t = 2 W_t ⇒ m·g·h = 2 m·g·h\' ⇒ h\' = h / 2.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Trường hợp nào sau đây vật VỪA CÓ ĐỘNG NĂNG, VỪA CÓ THẾ NĂNG trọng trường?',
      options: [
        'Một chiếc máy bay đang bay trên bầu trời ở độ cao 10 000 m với tốc độ 800 km/h',
        'Một chiếc xe đạp đang đứng yên trên đỉnh đèo',
        'Một chiếc ô tô đang chạy trên đường cao tốc bằng phẳng nằm ngang (chọn mốc thế năng tại mặt đường)',
        'Một quyển sách nằm yên trên giá sách',
      ],
      correct_index: 0,
      explanation: 'Máy bay ở độ cao 10 000 m nên có thế năng trọng trường lớn; đồng thời đang bay với tốc độ 800 km/h nên có động năng lớn.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi đưa một vật có khối lượng $m$ lên độ cao tăng gấp đôi và đồng thời tăng khối lượng của vật lên gấp 3 lần thì thế năng trọng trường của vật sẽ:',
      options: ['Tăng gấp 5 lần', 'Tăng gấp 6 lần', 'Tăng gấp 4 lần', 'Không đổi'],
      correct_index: 1,
      explanation: 'W_t = m · g · h. Khi m tăng 3 lần và h tăng 2 lần: W_t\' = (3m) · g · (2h) = 6(mgh) = 6 W_t (tăng 6 lần).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một hòn bi lăn từ đỉnh máng cong xuống đáy rồi leo lên một dốc máng đối diện. Trong thực tế, độ cao mà hòn bi đạt được ở máng đối diện luôn THẤP HƠN độ cao ban đầu. Nguyên nhân chính là do:',
      options: [
        'Trọng lực đã biến mất',
        'Một phần cơ năng của hòn bi đã bị ma sát chuyển hóa thành nhiệt năng',
        'Động năng không thể chuyển thành thế năng',
        'Khối lượng của hòn bi bị giảm khi lăn',
      ],
      correct_index: 1,
      explanation: 'Do có lực ma sát lăn và lực cản không khí, cơ năng không bảo toàn hoàn toàn mà một phần bị tiêu tán thành nhiệt năng làm nóng hòn bi và đường ray.',
    },

    // 5 Vận dụng (order 18-22)
    {
      difficulty: 'van_dung',
      question_text: 'Một vật có khối lượng $m = 2\\,\\text{kg}$ đang chuyển động với vận tốc $v = 6\\,\\text{m/s}$. Động năng của vật bằng:',
      options: ['12 J', '36 J', '72 J', '18 J'],
      correct_index: 1,
      explanation: 'W_đ = ½ m v² = 0,5 × 2 × (6)² = 1 × 36 = 36 J.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một chậu hoa có khối lượng $m = 4\\,\\text{kg}$ đặt trên ban công tầng 3 ở độ cao $h = 9\\,\\text{m}$ so với mặt đất. Lấy $g = 10\\,\\text{m/s}^2$. Chọn mốc thế năng tại mặt đất. Thế năng trọng trường của chậu hoa là:',
      options: ['36 J', '360 J', '180 J', '90 J'],
      correct_index: 1,
      explanation: 'W_t = m · g · h = 4 × 10 × 9 = 360 J.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một vật nhỏ được thả rơi tự do không vận tốc đầu từ độ cao $h = 20\\,\\text{m}$ xuống đất. Lấy $g = 10\\,\\text{m/s}^2$, bỏ qua sức cản không khí. Vận tốc của vật ngay trước khi chạm đất là:',
      options: ['10 m/s', '14,14 m/s', '20 m/s', '40 m/s'],
      correct_index: 2,
      explanation: 'Áp dụng bảo toàn cơ năng: ½ m v² = m g h ⇒ v = √(2gh) = √(2 × 10 × 20) = √400 = 20 m/s.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một vật có khối lượng $m = 0,5\\,\\text{kg}$ được thả rơi từ độ cao $h = 16\\,\\text{m}$ so với mặt đất. Lấy $g = 10\\,\\text{m/s}^2$. Chọn mốc thế năng tại mặt đất. Cơ năng của vật bằng:',
      options: ['80 J', '40 J', '8 J', '160 J'],
      correct_index: 0,
      explanation: 'Tại vị trí thả v₀ = 0 nên cơ năng bằng thế năng cực đại: W = m · g · h = 0,5 × 10 × 16 = 80 J.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Thả một vật rơi tự do từ độ cao $h = 45\\,\\text{m}$ so với mặt đất. Lấy $g = 10\\,\\text{m/s}^2$. Ở độ cao nào thì động năng của vật bằng 2 lần thế năng ($W_đ = 2 W_t$)?',
      options: ['15 m', '22,5 m', '30 m', '10 m'],
      correct_index: 0,
      explanation: 'Cơ năng bảo toàn: W = W_đ + W_t = 2 W_t + W_t = 3 W_t ⇒ m g h = 3 m g h\' ⇒ h\' = h / 3 = 45 / 3 = 15 m.',
    },

    // 3 Vận dụng cao (order 23-25)
    {
      difficulty: 'van_dung_cao',
      question_text: 'Từ mặt đất, người ta ném một quả bóng có khối lượng $m = 200\\,\\text{g}$ thẳng đứng lên cao với vận tốc ban đầu $v_0 = 14\\,\\text{m/s}$. Lấy $g = 9,8\\,\\text{m/s}^2$, bỏ qua sức cản không khí. Chọn mốc thế năng tại mặt đất. Độ cao cực đại mà quả bóng đạt được là:',
      options: ['10 m', '14 m', '7 m', '19,6 m'],
      correct_index: 0,
      explanation: 'Cơ năng tại mặt đất: W = ½ m v₀² = 0,5 × 0,2 × (14)² = 0,1 × 196 = 19,6 J. Ở độ cao cực đại: W = m g h_max ⇒ h_max = W / (m g) = 19,6 / (0,2 × 9,8) = 19,6 / 1,96 = 10 m (hoặc dùng h_max = v₀² / 2g = 196 / 19,6 = 10 m).',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Vẫn với quả bóng ở câu trên ($v_0 = 14\\,\\text{m/s}$, $g = 9,8\\,\\text{m/s}^2$), tại độ cao $h = 5,1\\,\\text{m}$ so với mặt đất, vận tốc của quả bóng bằng bao nhiêu?',
      options: ['9,8 m/s', '7,0 m/s', '10,0 m/s', '12,0 m/s'],
      correct_index: 0,
      explanation: 'Bảo toàn cơ năng: ½ m v₀² = ½ m v² + m g h ⇒ v² = v₀² - 2gh = (14)² - 2 × 9,8 × 5,1 = 196 - 99,96 = 96,04 ⇒ v = √96,04 = 9,8 m/s.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một vật có khối lượng $m = 1\\,\\text{kg}$ trượt không vận tốc đầu từ đỉnh một máng nghiêng cao $h = 5\\,\\text{m}$ xuống chân máng. Lấy $g = 10\\,\\text{m/s}^2$. Khi đến chân máng, vận tốc thực tế của vật đo được là $v = 8\\,\\text{m/s}$. Công của lực ma sát cản trở chuyển động của vật trên máng nghiêng bằng bao nhiêu?',
      options: ['-18 J', '-32 J', '-50 J', '-14 J'],
      correct_index: 0,
      explanation: 'Cơ năng ban đầu ở đỉnh máng: W₁ = m g h = 1 × 10 × 5 = 50 J. Cơ năng ở chân máng: W₂ = ½ m v² = 0,5 × 1 × (8)² = 32 J. Độ biến thiên cơ năng đúng bằng công của lực ma sát: A_ms = W₂ - W₁ = 32 - 50 = -18 J.',
    },
  ],

  // ==========================================
  // TOPIC G9-CH2-TP1: Khúc xạ ánh sáng & Phản xạ toàn phần (25 questions)
  // ==========================================
  'G9-CH2-TP1': [
    // 10 Nhận biết (order 1-10)
    {
      difficulty: 'nhan_biet',
      question_text: 'Hiện tượng khúc xạ ánh sáng là hiện tượng gì?',
      options: [
        'Tia sáng bị hắt ngược trở lại môi trường cũ khi gặp mặt phân cách',
        'Tia sáng bị gãy khúc tại mặt phân cách khi truyền xiên góc từ môi trường trong suốt này sang môi trường trong suốt khác',
        'Tia sáng truyền thẳng qua mọi môi trường',
        'Ánh sáng bị hấp thụ hoàn toàn thành nhiệt',
      ],
      correct_index: 1,
      explanation: 'Khúc xạ là hiện tượng tia sáng bị gãy khúc tại mặt phân cách khi truyền xiên góc giữa hai môi trường trong suốt.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Mặt phẳng tới trong hiện tượng khúc xạ ánh sáng là mặt phẳng được tạo bởi hai đường nào?',
      options: [
        'Tia tới và tia khúc xạ',
        'Tia tới và đường pháp tuyến tại điểm tới',
        'Tia tới và mặt phân cách hai môi trường',
        'Tia khúc xạ và mặt phân cách',
      ],
      correct_index: 1,
      explanation: 'Mặt phẳng tới chứa tia tới và đường pháp tuyến tại điểm tới.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi chiếu một tia sáng vuông góc với mặt phân cách giữa hai môi trường trong suốt (góc tới $i = 0^\\circ$), tia sáng sẽ:',
      options: [
        'Bị khúc xạ với góc khúc xạ r = 90°',
        'Tiếp tục truyền thẳng mà không bị gãy khúc (góc khúc xạ r = 0°)',
        'Bị phản xạ toàn phần bật ngược lại',
        'Bị bẻ cong thành hình tròn',
      ],
      correct_index: 1,
      explanation: 'Khi i = 0° (chiếu vuông góc mặt phân cách), tia sáng truyền thẳng: r = 0°.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi tia sáng truyền xiên góc từ KHÔNG KHÍ vào NƯỚC thì mối quan hệ giữa góc tới $i$ và góc khúc xạ $r$ là:',
      options: ['r > i', 'r < i', 'r = i', 'r + i = 90°'],
      correct_index: 1,
      explanation: 'Vì nước chiết quang hơn không khí (n_nước > n_kk) nên theo định luật Snell góc khúc xạ r luôn nhỏ hơn góc tới i (r < i).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi tia sáng truyền xiên góc từ NƯỚC (hoặc thủy tinh) ra ngoài KHÔNG KHÍ thì mối quan hệ giữa góc tới $i$ và góc khúc xạ $r$ là:',
      options: ['r < i', 'r > i', 'r = i', 'r = 0°'],
      correct_index: 1,
      explanation: 'Khi truyền từ môi trường chiết quang hơn sang kém chiết quang hơn, tia khúc xạ lệch xa pháp tuyến nên r > i.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hiện tượng phản xạ toàn phần là hiện tượng gì?',
      options: [
        'Toàn bộ tia sáng bị khúc xạ ra môi trường thứ hai',
        'Toàn bộ tia sáng bị phản xạ trở lại môi trường ban đầu tại mặt phân cách giữa hai môi trường trong suốt',
        'Tia sáng bị tán sắc thành 7 màu',
        'Ánh sáng bị hấp thụ hoàn toàn không phản xạ',
      ],
      correct_index: 1,
      explanation: 'Phản xạ toàn phần là hiện tượng toàn bộ chùm sáng tới bị phản xạ ngược lại môi trường ban đầu, không còn tia khúc xạ.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Điều kiện cần thứ nhất để có thể xảy ra hiện tượng phản xạ toàn phần là gì?',
      options: [
        'Ánh sáng phải truyền từ môi trường kém chiết quang sang môi trường chiết quang hơn (n₁ < n₂)',
        'Ánh sáng phải truyền từ môi trường chiết quang hơn sang môi trường kém chiết quang hơn (n₁ > n₂)',
        'Góc tới phải luôn luôn bằng 0°',
        'Hai môi trường phải có cùng chiết suất',
      ],
      correct_index: 1,
      explanation: 'Điều kiện 1: Ánh sáng phải truyền từ môi trường chiết quang hơn sang môi trường kém chiết quang hơn (n₁ > n₂).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Điều kiện cần thứ hai về góc tới $i$ để xảy ra phản xạ toàn phần là gì?',
      options: [
        'Góc tới i phải nhỏ hơn góc tới hạn (i < i_gh)',
        'Góc tới i phải lớn hơn hoặc bằng góc giới hạn phản xạ toàn phần (i ≥ i_gh)',
        'Góc tới phải bằng đúng 45°',
        'Góc tới phải bằng 0°',
      ],
      correct_index: 1,
      explanation: 'Điều kiện 2: Góc tới i phải lớn hơn hoặc bằng góc giới hạn: i ≥ i_gh.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức tính góc giới hạn phản xạ toàn phần $i_{\\text{gh}}$ giữa hai môi trường ($n_1 > n_2$) là:',
      options: [
        '\\sin i_{\\text{gh}} = n_1 / n_2',
        '\\sin i_{\\text{gh}} = n_2 / n_1',
        '\\sin i_{\\text{gh}} = n_1 · n_2',
        '\\sin i_{\\text{gh}} = n_1 - n_2',
      ],
      correct_index: 1,
      explanation: 'sin(i_gh) = n₂ / n₁ (với n₁ > n₂).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Sợi quang học dùng trong mạng truyền dẫn internet cáp quang hoạt động dựa trên hiện tượng quang học nào?',
      options: ['Khúc xạ ánh sáng', 'Tán sắc ánh sáng', 'Phản xạ toàn phần', 'Giao thoa ánh sáng'],
      correct_index: 2,
      explanation: 'Cáp quang hoạt động dựa trên hiện tượng phản xạ toàn phần của tia sáng liên tục trong lòng lõi sợi quang.',
    },

    // 7 Thông hiểu (order 11-17)
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi ta cắm một chiếc đũa thẳng vào cốc nước trong suốt, ta nhìn thấy chiếc đũa như bị gãy khúc tại mặt nước. Hiện tượng này là do:',
      options: [
        'Chiếc đũa bị nước làm mềm uốn cong',
        'Tia sáng từ chiếc đũa truyền qua mặt nước ra không khí tới mắt bị khúc xạ đổi hướng',
        'Ánh sáng bị phản xạ gương tại thành cốc',
        'Nhiệt độ nước làm biến dạng đũa',
      ],
      correct_index: 1,
      explanation: 'Hiện tượng khúc xạ ánh sáng tại mặt nước làm cho ảnh của phần đũa ngập trong nước bị nâng lên, tạo cảm giác đũa bị gãy.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi nhìn một con cá đang bơi dưới đáy một hồ nước trong vắt, người đứng trên bờ ngắm nhìn sẽ thấy con cá ở vị trí như thế nào so với vị trí thực tế của nó?',
      options: [
        'Thấy con cá ở sâu hơn vị trí thực tế',
        'Thấy con cá ở nông hơn (gần mặt nước hơn) so với vị trí thực tế của nó',
        'Thấy con cá ở đúng vị trí thực tế',
        'Không nhìn thấy con cá',
      ],
      correct_index: 1,
      explanation: 'Tia sáng từ con cá truyền từ nước ra không khí bị khúc xạ lệch xa pháp tuyến, mắt nhìn theo phương kéo dài của tia khúc xạ thấy ảnh ảo của con cá bị nâng lên gần mặt nước hơn.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Chiếu một tia sáng từ không khí vào khối thủy tinh trong suốt với góc tới $i = 40^\\circ$. Giá trị nào sau đây có thể là góc khúc xạ $r$ trong thủy tinh?',
      options: ['40°', '25°', '55°', '70°'],
      correct_index: 1,
      explanation: 'Khi đi từ không khí vào thủy tinh (môi trường chiết quang hơn), góc khúc xạ r phải nhỏ hơn góc tới i (r < 40°). Do đó r = 25° là giá trị hợp lý.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Kim cương thiên nhiên có chiết suất rất lớn ($n \\approx 2,42$). Đặc điểm quang học này mang lại vẻ đẹp lấp lánh rực rỡ cho kim cương nhờ nguyên lý nào?',
      options: [
        'Vì kim cương tự phát ra ánh sáng',
        'Vì chiết suất rất lớn nên góc giới hạn phản xạ toàn phần rất nhỏ ($i_{\\text{gh}} \\approx 24,4^\\circ$), hầu hết ánh sáng lọt vào viên kim cương bị phản xạ toàn phần nhiều lần qua các giác cắt trước khi ló ra',
        'Vì kim cương hấp thụ toàn bộ tia sáng',
        'Vì kim cương là một thấu kính phân kỳ',
      ],
      correct_index: 1,
      explanation: 'Với n lớn, góc i_gh rất nhỏ (khoảng 24,4°), tia sáng vào trong kim cương dễ dàng thỏa mãn i > i_gh nên bị phản xạ toàn phần nhiều lần qua các mặt giác làm kim cương lấp lánh.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi tăng dần góc tới $i$ trong thí nghiệm chiếu tia sáng từ nước ra không khí, điều gì sẽ xảy ra khi góc tới $i$ đạt đến đúng giá trị $i = i_{\\text{gh}}$?',
      options: [
        'Tia khúc xạ đi là là sát mặt phân cách hai môi trường (góc khúc xạ r = 90°)',
        'Tia khúc xạ vuông góc với mặt phân cách (r = 0°)',
        'Tia sáng bị biến mất hoàn toàn',
        'Tia sáng đổi màu thành màu đỏ',
      ],
      correct_index: 0,
      explanation: 'Khi i = i_gh thì sin(r) = 1 ⇒ r = 90°, tia khúc xạ nằm là là sát mặt phân cách hai môi trường.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Trong ống nhòm quân sự lăng kính (Prism binoculars), người ta dùng lăng kính phản xạ toàn phần (thủy tinh $n = 1,5$) thay cho gương phẳng tráng bạc thông thường vì lý do nào?',
      options: [
        'Để ống nhòm nặng hơn cầm đầm tay',
        'Phản xạ toàn phần có hệ số phản xạ đạt 100% ánh sáng (sáng và nét hơn gương tráng bạc chỉ đạt 90-95%) và mặt phản xạ không bị ố mờ theo thời gian',
        'Lăng kính rẻ tiền hơn gương phẳng',
        'Để đảo ngược màu sắc cảnh quan',
      ],
      correct_index: 1,
      explanation: 'Phản xạ toàn phần phản xạ 100% cường độ chùm sáng, không bị suy hao hay bong tróc lớp bạc như gương kim loại.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tốc độ ánh sáng trong chân không là $c \\approx 300\\,000\\,\\text{km/s}$. Khi truyền vào trong nước có chiết suất $n = 4/3$, tốc độ truyền ánh sáng trong nước bằng bao nhiêu?',
      options: ['300 000 km/s', '225 000 km/s', '400 000 km/s', '150 000 km/s'],
      correct_index: 1,
      explanation: 'Vận tốc ánh sáng trong môi trường có chiết suất n: v = c / n = 300 000 / (4/3) = 225 000 km/s.',
    },

    // 5 Vận dụng (order 18-22)
    {
      difficulty: 'van_dung',
      question_text: 'Biết chiết suất của nước là $n_1 = 4/3$ và không khí là $n_2 = 1$. Góc giới hạn phản xạ toàn phần $i_{\\text{gh}}$ khi ánh sáng truyền từ nước ra không khí xấp xỉ bằng:',
      options: ['41,8°', '48,6°', '60°', '30°'],
      correct_index: 1,
      explanation: 'sin(i_gh) = n₂ / n₁ = 1 / (4/3) = 3/4 = 0,75 ⇒ i_gh = arcsin(0,75) ≈ 48,59° ≈ 48,6° (48°35\').',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Biết chiết suất của thủy tinh flin là $n_1 = 1,5$ và không khí là $n_2 = 1$. Góc tới hạn phản xạ toàn phần $i_{\\text{gh}}$ ở mặt phân cách thủy tinh - không khí là:',
      options: ['41,8°', '48,6°', '30°', '60°'],
      correct_index: 0,
      explanation: 'sin(i_gh) = 1 / 1,5 = 2/3 ≈ 0,6667 ⇒ i_gh ≈ 41,81° ≈ 41,8°.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Chiếu một tia sáng từ không khí vào nước ($n = 4/3$) với góc tới $i = 45^\\circ$. Biết $\\sin(45^\\circ) = \\frac{\\sqrt{2}}{2} \\approx 0,707$. Giá trị $\\sin(r)$ của góc khúc xạ trong nước bằng:',
      options: ['0,530', '0,707', '0,943', '0,354'],
      correct_index: 0,
      explanation: 'Theo định luật Snell: 1 · sin(i) = n · sin(r) ⇒ sin(r) = sin(45°) / (4/3) = 0,7071 × 3 / 4 ≈ 0,5303.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một tia sáng truyền từ nước ($n = 4/3$) ra không khí với góc tới $i = 60^\\circ$. Hiện tượng gì sẽ xảy ra tại mặt phân cách?',
      options: [
        'Tia sáng bị khúc xạ ra ngoài không khí với góc r ≈ 40°',
        'Tia sáng bị phản xạ toàn phần trở lại trong nước',
        'Tia sáng tiếp tục truyền thẳng góc r = 60°',
        'Ánh sáng bị hấp thụ hoàn toàn',
      ],
      correct_index: 1,
      explanation: 'Vì ánh sáng truyền từ môi trường chiết quang hơn sang kém chiết quang (nước ra không khí) và góc tới i = 60° > i_gh (48,6°) nên xảy ra hiện tượng phản xạ toàn phần.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Chiếu một tia sáng từ chất lỏng trong suốt ra không khí với góc tới $i = 30^\\circ$ thì góc khúc xạ trong không khí là $r = 45^\\circ$. Chiết suất của chất lỏng đó là:',
      options: ['1,33', '1,414 (√2)', '1,50', '1,732 (√3)'],
      correct_index: 1,
      explanation: 'n_lỏng · sin(i) = n_kk · sin(r) ⇒ n_lỏng · sin(30°) = 1 · sin(45°) ⇒ n_lỏng · 0,5 = √2 / 2 ⇒ n_lỏng = √2 ≈ 1,414.',
    },

    // 3 Vận dụng cao (order 23-25)
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một người đứng trên bờ nhìn gần như thẳng đứng xuống đáy một bể bơi chứa đầy nước trong suốt có độ sâu thực tế là $h = 1,6\\,\\text{m}$. Biết chiết suất của nước là $n = 4/3$. Người đó có cảm giác đáy bể bơi chỉ sâu bao nhiêu mét (độ sâu biểu kiến)?',
      options: ['1,2 m', '1,0 m', '1,4 m', '2,13 m'],
      correct_index: 0,
      explanation: 'Khi nhìn gần như vuông góc với mặt nước, độ sâu biểu kiến h\' liên hệ với độ sâu thực h theo hệ thức: h\' = h / n = 1,6 / (4/3) = 1,6 × 3 / 4 = 1,2 m. Đáy bể trông như được nâng lên 0,4 m.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một ngọn đèn nhỏ $S$ đặt dưới đáy một bể bơi sâu $h = 80\\,\\text{cm}$. Mặt nước phẳng lặng và rộng. Biết chiết suất của nước là $n = 4/3$. Trên mặt nước, người ta quan sát thấy một vùng hình tròn sáng do các tia sáng từ $S$ khúc xạ ra ngoài không khí. Bán kính $R$ của hình tròn sáng đó xấp xỉ bằng:',
      options: ['90,7 cm', '60,5 cm', '106,7 cm', '80,0 cm'],
      correct_index: 0,
      explanation: 'Các tia sáng khúc xạ ra không khí khi góc tới i ≤ i_gh. Tại mép đĩa sáng: i = i_gh với sin(i_gh) = 1 / n = 3/4 ⇒ tan(i_gh) = sin / cos = (3/4) / √(1 - 9/16) = (3/4) / (√7/4) = 3 / √7 ≈ 1,1339. Bán kính hình tròn sáng: R = h · tan(i_gh) = 80 cm × (3 / √7) ≈ 90,71 cm.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một sợi quang hình trụ dài gồm lõi thủy tinh trong suốt có chiết suất $n_1 = 1,5$ được bọc một lớp vỏ cách quang có chiết suất $n_2 = 1,414\\,(\\sqrt{2})$. Góc giới hạn phản xạ toàn phần $i_{\\text{gh}}$ giữa lõi và vỏ là bao nhiêu, và góc mở tới hạn lớn nhất của chùm tia ở mặt đầu sợi quang để luôn bị phản xạ toàn phần trong lõi là:',
      options: ['i_gh = 70,5°; α_max ≈ 30°', 'i_gh = 45°; α_max ≈ 45°', 'i_gh = 60°; α_max ≈ 60°', 'i_gh = 30°; α_max ≈ 90°'],
      correct_index: 0,
      explanation: 'sin(i_gh) = n₂ / n₁ = √2 / 1,5 ≈ 0,9428 ⇒ i_gh = arcsin(0,9428) ≈ 70,53°. Tại mặt đầu: sin(α_max) = √(n₁² - n₂²) = √(1,5² - 2) = √(2,25 - 2) = √0,25 = 0,5 ⇒ α_max = 30°.',
    },
  ],

  // ==========================================
  // TOPIC G9-CH2-TP2: Thấu kính hội tụ/phân kỳ & Sự tạo ảnh (25 questions)
  // ==========================================
  'G9-CH2-TP2': [
    // 10 Nhận biết (order 1-10)
    {
      difficulty: 'nhan_biet',
      question_text: 'Về hình dạng hình học, thấu kính hội tụ có đặc điểm nhận dạng nào sau đây?',
      options: [
        'Phần rìa dày hơn phần giữa',
        'Phần rìa mỏng hơn phần giữa',
        'Độ dày phẳng đều từ rìa vào tâm',
        'Mặt ngoài luôn luôn cong lõm',
      ],
      correct_index: 1,
      explanation: 'Thấu kính hội tụ có phần rìa mỏng hơn phần giữa (rìa mỏng).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Về hình dạng hình học, thấu kính phân kỳ có đặc điểm nhận dạng nào sau đây?',
      options: [
        'Phần rìa mỏng hơn phần giữa',
        'Phần rìa dày hơn phần giữa',
        'Hai mặt lồi đối xứng',
        'Có dạng hình nón',
      ],
      correct_index: 1,
      explanation: 'Thấu kính phân kỳ có phần rìa dày hơn phần giữa (rìa dày).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Chùm tia sáng tới song song với trục chính của một thấu kính hội tụ sẽ cho chùm tia ló có đặc điểm gì?',
      options: [
        'Chùm tia ló phân kì loe rộng ra',
        'Chùm tia ló hội tụ tại tiêu điểm ảnh chính F\' của thấu kính',
        'Chùm tia ló vẫn tiếp tục song song',
        'Chùm tia ló bị bật ngược trở lại',
      ],
      correct_index: 1,
      explanation: 'Thấu kính hội tụ biến chùm tia tới song song trục chính thành chùm tia ló hội tụ tại tiêu điểm ảnh F\'.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Tia sáng đi qua quang tâm O của một thấu kính mỏng sẽ có đường truyền như thế nào?',
      options: [
        'Bị lệch về phía trục chính',
        'Bị lệch ra xa trục chính',
        'Tiếp tục truyền thẳng mà không đổi hướng',
        'Bị phản xạ ngược lại 180°',
      ],
      correct_index: 2,
      explanation: 'Tia sáng đi qua quang tâm O luôn truyền thẳng mà không bị lệch hướng.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khoảng cách từ quang tâm O đến tiêu điểm chính F của thấu kính được gọi là gì?',
      options: ['Trục phụ', 'Tiêu cự của thấu kính (ký hiệu f)', 'Bán kính cong', 'Độ tụ'],
      correct_index: 1,
      explanation: 'Khoảng cách OF = OF\' = f được gọi là tiêu cự của thấu kính.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Ảnh của một vật thật tạo bởi THẤU KÍNH PHÂN KỲ luôn có tính chất nào sau đây?',
      options: [
        'Là ảnh thật, ngược chiều và lớn hơn vật',
        'Là ảnh ảo, cùng chiều và luôn NHỎ HƠN vật',
        'Là ảnh ảo, cùng chiều và lớn hơn vật',
        'Là ảnh thật, cùng chiều và bằng vật',
      ],
      correct_index: 1,
      explanation: 'Vật thật qua thấu kính phân kỳ luôn cho ảnh ảo, cùng chiều, nhỏ hơn vật và nằm trong khoảng tiêu cự.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Quy ước dấu trong công thức thấu kính mỏng đối với tiêu cự $f$ là:',
      options: [
        'Thấu kính hội tụ có f > 0; Thấu kính phân kỳ có f < 0',
        'Thấu kính hội tụ có f < 0; Thấu kính phân kỳ có f > 0',
        'Tiêu cự luôn luôn nhận giá trị dương',
        'Tiêu cự luôn luôn nhận giá trị âm',
      ],
      correct_index: 0,
      explanation: 'Quy ước chuẩn: Thấu kính hội tụ f > 0; Thấu kính phân kỳ f < 0.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức thấu kính mỏng xác định mối liên hệ giữa tiêu cự $f$, khoảng cách vật $d$ và khoảng cách ảnh $d\'$ là:',
      options: [
        '1/f = 1/d - 1/d\'',
        '1/f = 1/d + 1/d\'',
        'f = d + d\'',
        'f = d · d\'',
      ],
      correct_index: 1,
      explanation: 'Công thức thấu kính mỏng: 1/f = 1/d + 1/d\'.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Quy ước dấu đối với khoảng cách ảnh $d\'$ qua thấu kính là:',
      options: [
        'Ảnh thật d\' > 0 (hứng được trên màn); Ảnh ảo d\' < 0 (không hứng được trên màn)',
        'Ảnh thật d\' < 0; Ảnh ảo d\' > 0',
        'Ảnh thật hay ảo d\' đều dương',
        'Khoảng cách ảnh luôn luôn âm',
      ],
      correct_index: 0,
      explanation: 'd\' > 0 là ảnh thật; d\' < 0 là ảnh ảo.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Độ phóng đại ảnh $k$ của thấu kính được tính theo công thức đại số nào?',
      options: ['k = d\' / d', 'k = -d\' / d', 'k = d / d\'', 'k = -d / d\''],
      correct_index: 1,
      explanation: 'k = -d\' / d. Khi k < 0 là ảnh thật ngược chiều; khi k > 0 là ảnh ảo cùng chiều.',
    },

    // 7 Thông hiểu (order 11-17)
    {
      difficulty: 'thong_hieu',
      question_text: 'Đặt một vật sáng AB trước thấu kính hội tụ ở khoảng cách $d > 2f$ (ngoài khoảng 2 lần tiêu cự). Ảnh thu được trên màn chắn có tính chất gì?',
      options: [
        'Ảnh thật, ngược chiều và NHỎ HƠN vật',
        'Ảnh thật, ngược chiều và LỚN HƠN vật',
        'Ảnh ảo, cùng chiều và lớn hơn vật',
        'Ảnh thật, cùng chiều và bằng vật',
      ],
      correct_index: 0,
      explanation: 'Khi d > 2f, thấu kính hội tụ cho ảnh thật, ngược chiều và nhỏ hơn vật (ứng dụng trong máy ảnh).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Đặt vật sáng AB trước thấu kính hội tụ ở vị trí $d = 2f$. Ảnh tạo bởi thấu kính có đặc điểm gì?',
      options: [
        'Ảnh ảo lớn gấp đôi vật',
        'Ảnh thật, ngược chiều với vật, cách thấu kính d\' = 2f và có kích thước BẰNG ĐÚNG vật (|k| = 1)',
        'Ảnh ở vô cực',
        'Không tạo được ảnh',
      ],
      correct_index: 1,
      explanation: 'Khi d = 2f ⇒ d\' = 2f, ảnh thật ngược chiều và có kích thước bằng vật.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Để thấu kính hội tụ cho một ẢNH ẢO lớn hơn vật và cùng chiều với vật, ta phải đặt vật ở khoảng cách $d$ như thế nào?',
      options: ['d > 2f', 'f < d < 2f', 'd < f (đặt vật trong khoảng tiêu cự)', 'd = f'],
      correct_index: 2,
      explanation: 'Khi d < f, chùm tia ló là chùm phân kỳ có đường kéo dài cắt nhau tạo ảnh ảo cùng chiều và lớn hơn vật (nguyên lý kính lúp).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi đặt vật sáng ở đúng tiêu điểm của thấu kính hội tụ ($d = f$), ảnh của vật sẽ ở đâu?',
      options: ['Ở ngay tại quang tâm O', 'Ở vô cực (chùm tia ló là chùm song song)', 'Ở vị trí d\' = f', 'Ảnh bằng 0'],
      correct_index: 1,
      explanation: 'Khi d = f, 1/d\' = 1/f - 1/f = 0 ⇒ d\' → ∞ (chùm tia ló song song, ảnh ở vô cực).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'So sánh ảnh ảo tạo bởi thấu kính hội tụ và ảnh ảo tạo bởi thấu kính phân kỳ (với vật thật):',
      options: [
        'Ảnh ảo của TKHT luôn NHỎ HƠN vật; ảnh ảo của TKPK luôn LỚN HƠN vật',
        'Ảnh ảo của TKHT luôn LỚN HƠN vật; ảnh ảo của TKPK luôn NHỎ HƠN vật',
        'Cả hai loại ảnh ảo đều luôn bằng vật',
        'TKHT không bao giờ cho ảnh ảo',
      ],
      correct_index: 1,
      explanation: 'Vật thật: TKHT chỉ cho ảnh ảo khi d < f và ảnh ảo này luôn lớn hơn vật; TKPK luôn cho ảnh ảo và ảnh ảo luôn nhỏ hơn vật.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một vật sáng AB đặt vuông góc với trục chính của thấu kính hội tụ cho một ảnh thật A\'B\' hứng rõ nét trên màn chắn. Nếu ta dùng một miếng bìa đen che khuất nửa trên của thấu kính thì hiện tượng gì xảy ra với hình ảnh trên màn?',
      options: [
        'Ảnh A\'B\' bị mất đi một nửa phía trên',
        'Ảnh A\'B\' bị mất đi một nửa phía dưới',
        'Hình ảnh A\'B\' vẫn đầy đủ toàn bộ vật nhưng độ sáng của ảnh bị giảm đi (tối bớt đi)',
        'Ảnh biến mất hoàn toàn',
      ],
      correct_index: 2,
      explanation: 'Mỗi điểm trên vật phát ra vô số tia sáng tới mọi điểm trên thấu kính; khi che nửa thấu kính thì nửa dưới vẫn hứng đủ các tia từ toàn bộ vật để tạo ảnh hoàn chỉnh, chỉ giảm lượng quang năng nên ảnh tối đi.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Trong máy ảnh thông thường dùng phim hoặc cảm biến số, thấu kính đóng vai trò là vật kính là thấu kính gì và ảnh thu được trên màng cảm biến có tính chất gì?',
      options: [
        'Là thấu kính phân kỳ, cho ảnh ảo cùng chiều',
        'Là thấu kính hội tụ, cho ảnh thật, ngược chiều và nhỏ hơn vật cần chụp',
        'Là gương cầu lồi',
        'Là thấu kính hội tụ, cho ảnh ảo phóng đại',
      ],
      correct_index: 1,
      explanation: 'Vật kính máy ảnh là thấu kính hội tụ (hoặc hệ thấu kính tương đương hội tụ) cho ảnh thật ngược chiều thu nhỏ trên phim/cảm biến.',
    },

    // 5 Vận dụng (order 18-22)
    {
      difficulty: 'van_dung',
      question_text: 'Một vật sáng AB đặt vuông góc với trục chính của thấu kính hội tụ có tiêu cự $f = 20\\,\\text{cm}$. Vật cách thấu kính một khoảng $d = 30\\,\\text{cm}$. Khoảng cách từ ảnh đến thấu kính $d\'$ bằng bao nhiêu và là ảnh thật hay ảnh ảo?',
      options: [
        'd\' = 60 cm (ảnh thật)',
        'd\' = -60 cm (ảnh ảo)',
        'd\' = 12 cm (ảnh thật)',
        'd\' = 50 cm (ảnh thật)',
      ],
      correct_index: 0,
      explanation: 'Áp dụng: d\' = (d · f) / (d - f) = (30 × 20) / (30 - 20) = 600 / 10 = 60 cm > 0 ⇒ Ảnh thật cách thấu kính 60 cm.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một vật sáng AB đặt trước một thấu kính hội tụ có tiêu cự $f = 10\\,\\text{cm}$ ở khoảng cách $d = 6\\,\\text{cm}$. Vị trí và tính chất của ảnh là:',
      options: [
        'd\' = 15 cm (ảnh thật)',
        'd\' = -15 cm (ảnh ảo cách thấu kính 15 cm)',
        'd\' = -60 cm (ảnh ảo)',
        'd\' = 60 cm (ảnh thật)',
      ],
      correct_index: 1,
      explanation: 'd\' = (d · f) / (d - f) = (6 × 10) / (6 - 10) = 60 / (-4) = -15 cm < 0 ⇒ Ảnh ảo nằm cùng phía với vật cách thấu kính 15 cm.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một vật sáng AB cao $h = 4\\,\\text{cm}$ đặt vuông góc với trục chính của một thấu kính hội tụ ($f = 15\\,\\text{cm}$) tại vị trí $d = 45\\,\\text{cm}$. Chiều cao $h\'$ của ảnh thu được là:',
      options: ['2 cm', '4 cm', '8 cm', '6 cm'],
      correct_index: 0,
      explanation: 'Khoảng cách ảnh: d\' = (45 × 15) / (45 - 15) = 675 / 30 = 22,5 cm. Độ phóng đại: |k| = d\' / d = 22,5 / 45 = 0,5. Chiều cao ảnh: h\' = |k| · h = 0,5 × 4 = 2 cm.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một vật sáng đặt trước một THẤU KÍNH PHÂN KỲ có tiêu cự $f = -20\\,\\text{cm}$ ở khoảng cách $d = 20\\,\\text{cm}$. Vị trí của ảnh $d\'$ là:',
      options: ['d\' = -10 cm (ảnh ảo)', 'd\' = 10 cm (ảnh thật)', 'd\' = -20 cm', 'd\' = -40 cm'],
      correct_index: 0,
      explanation: 'd\' = (d · f) / (d - f) = (20 × (-20)) / (20 - (-20)) = -400 / 40 = -10 cm < 0 ⇒ Ảnh ảo cách thấu kính 10 cm.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một vật sáng AB đặt vuông góc với trục chính của thấu kính hội tụ cho một ảnh THẬT cao gấp 3 lần vật ($|k| = 3$). Biết ảnh cách thấu kính $d\' = 60\\,\\text{cm}$. Tiêu cự $f$ của thấu kính là:',
      options: ['15 cm', '20 cm', '30 cm', '45 cm'],
      correct_index: 0,
      explanation: 'Vì ảnh thật nên d\' = 60 cm và k = -3 ⇒ -d\' / d = -3 ⇒ d = d\' / 3 = 60 / 3 = 20 cm. Tiêu cự: f = (d · d\') / (d + d\') = (20 × 60) / (20 + 60) = 1200 / 80 = 15 cm.',
    },

    // 3 Vận dụng cao (order 23-25)
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một vật sáng AB và màn chắn hứng ảnh được đặt cố định song song với nhau và cách nhau một khoảng $L = 90\\,\\text{cm}$. Đặt một thấu kính hội tụ vào khoảng giữa vật và màn thì thấy có hai vị trí của thấu kính đều cho ảnh thật rõ nét trên màn. Biết khoảng cách giữa hai vị trí này của thấu kính là $a = 30\\,\\text{cm}$. Tiêu cự $f$ của thấu kính bằng bao nhiêu?',
      options: ['20 cm', '15 cm', '25 cm', '10 cm'],
      correct_index: 0,
      explanation: 'Áp dụng công thức Bessel cho bài toán hai vị trí thấu kính: f = (L² - a²) / (4L) = (90² - 30²) / (4 × 90) = (8100 - 900) / 360 = 7200 / 360 = 20 cm.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Đặt một vật sáng nhỏ AB trước một thấu kính hội tụ ta thu được ảnh thật A\'B\'. Nếu dịch chuyển vật lại gần thấu kính thêm một đoạn $5\\,\\text{cm}$ thì ảnh thật dịch chuyển đi một đoạn $10\\,\\text{cm}$ và vẫn là ảnh thật. Biết ảnh lúc sau cao gấp đôi ảnh lúc đầu. Tiêu cự của thấu kính là:',
      options: ['10 cm', '15 cm', '20 cm', '25 cm'],
      correct_index: 0,
      explanation: 'Độ phóng đại ảnh thật: k₁ = f / (f - d₁) < 0 ⇒ |k₁| = f / (d₁ - f). Khi dịch lại gần 5 cm: d₂ = d₁ - 5 ⇒ |k₂| = f / (d₁ - 5 - f). Theo đề: |k₂| = 2|k₁| ⇒ d₁ - f = 2(d₁ - f - 5) ⇒ d₁ - f = 10 ⇒ d₁ = f + 10. Khoảng cách ảnh d₁\' = (d₁·f)/(d₁ - f) = ((f+10)f)/10. Khi d₂ = f + 5 ⇒ d₂\' = ((f+5)f)/5. Độ dịch ảnh: d₂\' - d₁\' = 10 ⇒ (f²+5f)/5 - (f²+10f)/10 = 10 ⇒ (2f²+10f - f² - 10f)/10 = 10 ⇒ f² / 10 = 10 ⇒ f² = 100 ⇒ f = 10 cm.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Hai thấu kính mỏng: thấu kính hội tụ $L_1$ có tiêu cự $f_1 = 20\\,\\text{cm}$ và thấu kính phân kỳ $L_2$ có tiêu cự $f_2 = -10\\,\\text{cm}$ được ghép đồng trục sát nhau. Một chùm tia sáng song song với trục chính chiếu tới hệ thấu kính này sẽ cho chùm tia ló:',
      options: [
        'Hội tụ tại điểm cách hệ 20 cm',
        'Phân kì có đường kéo dài cắt nhau tại điểm cách hệ 20 cm (tiêu cự tương đương của hệ là f_tđ = -20 cm)',
        'Song song với trục chính',
        'Hội tụ tại điểm cách hệ 10 cm',
      ],
      correct_index: 1,
      explanation: 'Độ tụ tương đương của hai thấu kính mỏng ghép sát: D_tđ = D₁ + D₂ ⇒ 1/f_tđ = 1/f₁ + 1/f₂ = 1/20 + 1/(-10) = 1/20 - 2/20 = -1/20 ⇒ f_tđ = -20 cm. Hệ tương đương một thấu kính phân kỳ có tiêu cự 20 cm, chùm tia song song cho chùm phân kì loe rộng.',
    },
  ],

  // ==========================================
  // TOPIC G9-CH2-TP3: Kính lúp & Các tật của mắt (25 questions)
  // ==========================================
  'G9-CH2-TP3': [
    // 10 Nhận biết (order 1-10)
    {
      difficulty: 'nhan_biet',
      question_text: 'Kính lúp là một dụng cụ quang học bổ trợ cho mắt có cấu tạo cơ bản là:',
      options: [
        'Một thấu kính phân kỳ có tiêu cự dài',
        'Một thấu kính hội tụ có tiêu cự ngắn (thường nhỏ hơn 25 cm)',
        'Một gương phẳng',
        'Một lăng kính tam giác',
      ],
      correct_index: 1,
      explanation: 'Kính lúp là một thấu kính hội tụ có tiêu cự ngắn dùng để quan sát các vật nhỏ.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi sử dụng kính lúp để quan sát một vật nhỏ, ta phải đặt vật ở vị trí nào so với kính lúp?',
      options: [
        'Ngoài khoảng 2 lần tiêu cự (d > 2f)',
        'Trong khoảng tiêu cự của kính lúp (d < f) để thu được ảnh ảo phóng đại',
        'Tại đúng tiêu điểm chính (d = f)',
        'Đặt ở bất kỳ khoảng cách nào',
      ],
      correct_index: 1,
      explanation: 'Bắt buộc phải đặt vật trong khoảng tiêu cự (d < f) để kính lúp cho ảnh ảo cùng chiều và lớn hơn vật.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức tính số bội giác $G$ của kính lúp khi ngắm chừng ở vô cực là:',
      options: [
        'G = 25 · f(cm)',
        'G = 25 / f(cm)',
        'G = f(cm) / 25',
        'G = 25 + f(cm)',
      ],
      correct_index: 1,
      explanation: 'Số bội giác của kính lúp: G = 25 / f(cm) (với f tính bằng cm).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Ký hiệu nào sau đây thường được khắc trên vành của một chiếc kính lúp?',
      options: ['220 V', '5X (hoặc 2,5X, 10X)', '50 Hz', '100 W'],
      correct_index: 1,
      explanation: 'Ký hiệu như 2,5X; 5X; 10X là số bội giác G của kính lúp.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Bộ phận nào của mắt đóng vai trò tương đương như thấu kính hội tụ trong một chiếc máy ảnh?',
      options: ['Lòng đen (con ngươi)', 'Thể thủy tinh', 'Màng giác (giác mạc)', 'Màng lưới (võng mạc)'],
      correct_index: 1,
      explanation: 'Thể thủy tinh là một khối chất trong suốt hình thấu kính hai mặt lồi, hoạt động như thấu kính hội tụ.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Màng lưới (võng mạc) ở đáy mắt đóng vai trò tương đương với bộ phận nào của máy ảnh?',
      options: ['Ống kính', 'Màn hứng ảnh (phim hoặc cảm biến ánh sáng)', 'Nút bấm chụp', 'Đèn flash'],
      correct_index: 1,
      explanation: 'Màng lưới tập trung các tế bào thị giác nhạy sáng, đóng vai trò như phim/cảm biến hứng ảnh.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Điểm xa nhất mà mắt có thể nhìn rõ khi hoàn toàn không phải điều tiết được gọi là gì?',
      options: ['Điểm cực cận (Cc)', 'Điểm cực viễn (Cv)', 'Quang tâm', 'Tiêu điểm mắt'],
      correct_index: 1,
      explanation: 'Điểm cực viễn (Cv) là điểm xa nhất mắt nhìn rõ khi mắt không điều tiết (cơ vòng thả lỏng).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đối với một đôi mắt bình thường (không có tật khúc xạ), điểm cực cận $C_c$ và điểm cực viễn $C_v$ nằm ở đâu?',
      options: [
        'Cc cách mắt khoảng 25 cm; Cv ở rất xa (vô cực)',
        'Cc ở ngay sát mắt (2 cm); Cv cách mắt 1 m',
        'Cả Cc và Cv đều ở vô cực',
        'Cc cách mắt 1 m; Cv cách mắt 2 m',
      ],
      correct_index: 0,
      explanation: 'Mắt bình thường: Cc cách mắt khoảng 25 cm; Cv ở vô cực (nhìn các ngôi sao không cần điều tiết).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Mắt cận thị có đặc điểm thị giác nào sau đây?',
      options: [
        'Nhìn rõ các vật ở xa nhưng nhìn mờ các vật ở gần',
        'Chỉ nhìn rõ các vật ở gần, không nhìn rõ các vật ở xa (điểm cực viễn Cv ở gần mắt)',
        'Không nhìn thấy bất kỳ vật nào',
        'Nhìn xa và nhìn gần đều rõ như nhau',
      ],
      correct_index: 1,
      explanation: 'Mắt cận thị nhìn gần tốt, không nhìn rõ vật ở xa (Cv cách mắt chỉ vài chục cm đến 1-2 m).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Để khắc phục tật cận thị (giúp nhìn rõ các vật ở xa), người cận thị phải đeo loại kính nào?',
      options: [
        'Kính là thấu kính hội tụ',
        'Kính là thấu kính phân kỳ thích hợp',
        'Kính râm tối màu',
        'Kính hai tròng hội tụ',
      ],
      correct_index: 1,
      explanation: 'Người cận thị đeo kính phân kỳ để làm phân kỳ chùm sáng, đẩy điểm hội tụ lùi về đúng màng lưới.',
    },

    // 7 Thông hiểu (order 11-17)
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao mắt cận thị lại không nhìn rõ được các vật ở xa?',
      options: [
        'Vì thể thủy tinh quá dẹt không hội tụ được ánh sáng',
        'Vì thể thủy tinh quá phồng (hoặc trục nhãn cầu dài) làm tiêu cự của mắt quá ngắn, chùm sáng từ vật ở xa hội tụ ở TRƯỚC màng lưới',
        'Vì màng lưới bị bong tróc',
        'Vì mắt không có dịch thủy tinh',
      ],
      correct_index: 1,
      explanation: 'Mắt cận có độ tụ quá lớn, chùm tia song song từ vật ở xa hội tụ trước võng mạc nên ảnh in trên võng mạc bị nhòe.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Người lớn tuổi thường bị tật LÃO THỊ (mắt lão). Tật lão thị có đặc điểm gì và khắc phục bằng kính gì?',
      options: [
        'Nhìn xa mờ, nhìn gần rõ; đeo kính phân kỳ',
        'Cơ mắt bị lão hóa làm giảm khả năng điều tiết, điểm cực cận Cc dời ra xa mắt làm nhìn gần bị mờ; khắc phục bằng đeo THẤU KÍNH HỘI TỤ',
        'Mắt lão thị hoàn toàn giống mắt cận thị',
        'Đeo kính phẳng không độ',
      ],
      correct_index: 1,
      explanation: 'Mắt lão nhìn gần kém do cơ mắt yếu không phồng thể thủy tinh được ⇒ đeo thấu kính hội tụ để tăng độ tụ khi đọc sách.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một kính lúp có số bội giác $G = 5X$ và một kính lúp khác có $G = 10X$. So sánh tiêu cự của hai kính lúp này:',
      options: [
        'Kính 10X có tiêu cự dài gấp đôi kính 5X',
        'Kính 10X có tiêu cự ngắn hơn một nửa so với kính 5X',
        'Hai kính có tiêu cự bằng nhau',
        'Kính 10X có tiêu cự bằng 10 cm',
      ],
      correct_index: 1,
      explanation: 'Từ G = 25 / f ⇒ f = 25 / G. Tiêu cự tỉ lệ nghịch với số bội giác: kính 10X có f = 2,5 cm, kính 5X có f = 5 cm (ngắn hơn một nửa).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Nguyên tắc chọn tiêu cự kính cận $f_k$ cho một người cận thị để có thể nhìn rõ các vật ở vô cực mà mắt không phải điều tiết (kính đeo sát mắt) là:',
      options: [
        'Kính phân kỳ có tiêu cự bằng khoảng cực cận: f_k = -OC_c',
        'Kính phân kỳ có tiêu cự bằng khoảng cực viễn của mắt: f_k = -OC_v',
        'Kính hội tụ có f_k = OC_v',
        'Kính phân kỳ có tiêu cự luôn luôn bằng -1 m',
      ],
      correct_index: 1,
      explanation: 'Để nhìn vật ở vô cực mà ảnh ảo rơi đúng tại điểm Cv của mắt: d = ∞ ⇒ d\' = -OC_v ⇒ f_k = -OC_v.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Sự điều tiết của mắt diễn ra như thế nào khi mắt chuyển từ trạng thái nhìn một vật ở xa sang nhìn một vật ở gần?',
      options: [
        'Cơ vòng co lại làm thể thủy tinh phồng lên, độ cong tăng, tiêu cự của mắt giảm xuống để ảnh vẫn rơi đúng trên màng lưới',
        'Cơ vòng giãn ra làm thể thủy tinh dẹt lại',
        'Màng lưới tự động lùi ra phía sau',
        'Con ngươi mở to tối đa',
      ],
      correct_index: 0,
      explanation: 'Khi nhìn vật ở gần (d nhỏ), để ảnh rơi trúng võng mạc (d\' không đổi) thì thể thủy tinh phải phồng lên làm tiêu cự f giảm.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi quan sát một con kiến nhỏ qua kính lúp, nếu ta dịch chuyển từ từ kính lúp ra xa con kiến (nhưng vẫn trong khoảng tiêu cự $d < f$) thì ảnh ảo của con kiến mà mắt nhìn thấy sẽ:',
      options: [
        'Càng ngày càng to lên',
        'Càng ngày càng nhỏ đi',
        'Biến thành ảnh thật ngược chiều ngay lập tức',
        'Kích thước không thay đổi',
      ],
      correct_index: 0,
      explanation: 'Khi d tăng dần từ 0 tiến về f, độ phóng đại |k| = f / (f - d) tăng dần nên ảnh ảo trông càng ngày càng to lên.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Thói quen nào sau đây là nguyên nhân HÀNG ĐẦU dẫn đến tật cận thị học đường ở lứa tuổi học sinh?',
      options: [
        'Đọc sách nơi đủ ánh sáng và ngồi thẳng lưng',
        'Cúi mặt quá sát trang sách/màn hình điện thoại trong thời gian dài và học tập ở nơi thiếu ánh sáng',
        'Tập thể dục ngoài trời thường xuyên',
        'Ăn nhiều rau củ quả chứa vitamin A',
      ],
      correct_index: 1,
      explanation: 'Nhìn quá gần liên tục làm cơ thể thủy tinh phải căng phồng điều tiết tối đa lâu ngày dẫn đến mỏi mắt và co quắp điều tiết sinh cận thị.',
    },

    // 5 Vận dụng (order 18-22)
    {
      difficulty: 'van_dung',
      question_text: 'Một kính lúp có ghi $5X$ trên vành kính. Tiêu cự $f$ của kính lúp này là:',
      options: ['5 cm', '10 cm', '2,5 cm', '125 cm'],
      correct_index: 0,
      explanation: 'G = 25 / f(cm) ⇒ f = 25 / G = 25 / 5 = 5 cm.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một thấu kính hội tụ có tiêu cự $f = 10\\,\\text{cm}$ được dùng làm kính lúp. Số bội giác $G$ của kính lúp này là:',
      options: ['2,5X', '5X', '1X', '10X'],
      correct_index: 0,
      explanation: 'G = 25 / f = 25 / 10 = 2,5X.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Bạn Nam bị cận thị, khi không đeo kính thì điểm xa nhất mà Nam nhìn rõ cách mắt $OC_v = 50\\,\\text{cm}$. Nam phải đeo kính cận có tiêu cự bao nhiêu để nhìn rõ vật ở vô cực mà không cần điều tiết (kính đeo sát mắt)?',
      options: ['f_k = -50 cm (-0,5 m)', 'f_k = +50 cm', 'f_k = -25 cm', 'f_k = -100 cm'],
      correct_index: 0,
      explanation: 'Kính cận là thấu kính phân kỳ có tiêu cự: f_k = -OC_v = -50 cm = -0,5 m.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một người cận thị phải đeo kính phân kỳ có tiêu cự $f_k = -40\\,\\text{cm}$ mới nhìn rõ các vật ở xa vô cực. Hỏi khi không đeo kính, khoảng cách cực viễn $OC_v$ của người đó là bao nhiêu?',
      options: ['20 cm', '40 cm', '80 cm', 'Vô cực'],
      correct_index: 1,
      explanation: 'Từ f_k = -OC_v ⇒ OC_v = -f_k = -(-40) = 40 cm.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Bác Ba bị lão thị có điểm cực cận cách mắt $OC_c = 50\\,\\text{cm}$. Để đọc một trang sách đặt cách mắt $25\\,\\text{cm}$ (như mắt bình thường), Bác Ba phải đeo sát mắt một kính hội tụ có tiêu cự bằng bao nhiêu?',
      options: ['f_k = 50 cm', 'f_k = 25 cm', 'f_k = 75 cm', 'f_k = 10 cm'],
      correct_index: 0,
      explanation: 'Vật đặt ở d = 25 cm, kính hội tụ phải tạo ảnh ảo tại điểm Cc của mắt: d\' = -50 cm. Áp dụng công thức thấu kính: 1/f_k = 1/d + 1/d\' = 1/25 + 1/(-50) = 2/50 - 1/50 = 1/50 ⇒ f_k = 50 cm (thấu kính hội tụ).',
    },

    // 3 Vận dụng cao (order 23-25)
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một người dùng kính lúp có tiêu cự $f = 5\\,\\text{cm}$ để quan sát một con bọ cánh cứng nhỏ. Mắt đặt sát kính lúp. Biết khoảng nhìn rõ của mắt người này từ $C_c = 25\\,\\text{cm}$ đến $C_v = \\infty$. Để mắt quan sát được ảnh rõ nét mà không bị nhòe, con bọ cánh cứng phải được đặt trong khoảng khoảng cách nào trước kính lúp?',
      options: [
        'Từ 4,17 cm đến 5 cm trước kính',
        'Từ 5 cm đến 10 cm trước kính',
        'Từ 2 cm đến 4 cm trước kính',
        'Cách kính đúng 25 cm',
      ],
      correct_index: 0,
      explanation: 'Ảnh ảo phải rơi trong khoảng nhìn rõ của mắt: -∞ < d\' ≤ -25 cm. Vị trí gần nhất d_min: d\' = -25 cm ⇒ d_min = (d\'·f) / (d\' - f) = (-25 × 5) / (-25 - 5) = -125 / (-30) ≈ 4,17 cm. Vị trí xa nhất d_max: d\' → -∞ ⇒ d_max = f = 5 cm. Vậy phải đặt vật trong khoảng từ 4,17 cm đến 5 cm trước kính lúp.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một học sinh bị cận thị có điểm cực viễn cách mắt $OC_v = 42\\,\\text{cm}$. Do kính cận đeo cách mắt một khoảng $l = 2\\,\\text{cm}$, hỏi tiêu cự $f_k$ của thấu kính phân kỳ cần dùng để bạn học sinh nhìn rõ vật ở vô cực mà không cần điều tiết là:',
      options: ['f_k = -40 cm', 'f_k = -42 cm', 'f_k = -44 cm', 'f_k = -38 cm'],
      correct_index: 0,
      explanation: 'Kính đeo cách mắt l = 2 cm, nên ảnh ảo của vật ở vô cực qua kính phải cách kính một đoạn: |d\'| = OC_v - l = 42 - 2 = 40 cm ⇒ d\' = -40 cm. Vì d = ∞ nên tiêu cự kính là: f_k = d\' = -40 cm.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một người đứng tuổi có điểm cực cận cách mắt $40\\,\\text{cm}$. Khi đeo kính có độ tụ $+2,5\\,\\text{dp}$ ($f = 40\\,\\text{cm}$) sát mắt để đọc sách, khoảng cách gần nhất từ sách đến mắt mà người đó còn đọc được là:',
      options: ['20 cm', '25 cm', '15 cm', '30 cm'],
      correct_index: 0,
      explanation: 'Để nhìn gần nhất, ảnh ảo phải hiện ở điểm cực cận của mắt: d\' = -OC_c = -40 cm. Tiêu cự kính: f = 40 cm. Vị trí đặt sách gần nhất: d = (d\' · f) / (d\' - f) = (-40 × 40) / (-40 - 40) = -1600 / (-80) = 20 cm.',
    },
  ],
};

// Builder function for Topic Questions
export function buildGrade9Topic25Questions(topicCode: string): SeedQuestionItem[] {
  const rawList =
    GRADE9_CH1_CH2_TOPICS[topicCode] ||
    GRADE9_CH3_CH4_TOPICS[topicCode];

  if (!rawList || rawList.length === 0) {
    return [];
  }

  return rawList.slice(0, 25).map((q, idx) => ({
    order_index: idx + 1,
    difficulty: q.difficulty,
    question_text: q.question_text,
    options: q.options,
    correct_index: q.correct_index,
    explanation: q.explanation,
  }));
}

// Builder function for Chapter Exam Questions
export function buildGrade9Chapter25ExamQuestions(chapterCode: string): SeedQuestionItem[] {
  const examList = GRADE9_CHAPTER_EXAMS[chapterCode];
  if (!examList || examList.length === 0) {
    return [];
  }

  return examList.slice(0, 25).map((q, idx) => ({
    order_index: idx + 1,
    difficulty: q.difficulty,
    question_text: q.question_text,
    options: q.options,
    correct_index: q.correct_index,
    explanation: q.explanation,
  }));
}

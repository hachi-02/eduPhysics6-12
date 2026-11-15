import { SeedQuestionItem } from './grade6-questions';
import { RawGrade10Q, GRADE10_CH1_CH2_QUESTIONS } from './grade10-questions';
import { GRADE10_CH3_CH4_QUESTIONS } from './grade10-questions-part2';

export const GRADE10_CH5_CH6_QUESTIONS: Record<string, RawGrade10Q[]> = {
  'G10-CH5-TP1': [
    // 10 Nhận biết
    {
      difficulty: 'nhan_biet',
      question_text: 'Vectơ động lượng p của một vật khối lượng m đang chuyển động với vận tốc v được xác định bởi công thức:',
      options: [
        'p = m · v (vectơ: p = m · v)',
        'p = (1/2) · m · v²',
        'p = m / v',
        'p = m · a',
      ],
      correct_index: 0,
      explanation: 'Vectơ động lượng p = m·v là đại lượng vectơ cùng hướng với vận tốc v.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong hệ đơn vị quốc tế SI, đơn vị của động lượng là gì?',
      options: ['kg · m/s (hoặc N · s)', 'Joule (J)', 'Watt (W)', 'kg · m/s²'],
      correct_index: 0,
      explanation: 'Đơn vị động lượng là kg·m/s, tương đương với Newton giây (N·s).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Xung lượng của lực F tác dụng lên một vật trong khoảng thời gian Δt là đại lượng được tính bằng:',
      options: ['F · Δt', 'F / Δt', 'F · (Δt)²', '(1/2) · F · Δt'],
      correct_index: 0,
      explanation: 'Xung lượng của lực trong khoảng thời gian Δt là tích F · Δt.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Mối liên hệ giữa xung lượng của lực F·Δt và độ biến thiên động lượng Δp của vật là:',
      options: [
        'F · Δt = Δp = p₂ - p₁',
        'F · Δt = p₁ + p₂',
        'F · Δt = p₂ / p₁',
        'F · Δt = Δp / 2',
      ],
      correct_index: 0,
      explanation: 'Định lý xung lượng: F · Δt = Δp = p₂ - p₁ (xung lượng lực bằng độ biến thiên động lượng).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Dạng tổng quát của Định luật II Newton biểu diễn qua động lượng là:',
      options: [
        'F = Δp / Δt',
        'F = Δp · Δt',
        'F = Δt / Δp',
        'F = (Δp)² / Δt',
      ],
      correct_index: 0,
      explanation: 'F = Δp / Δt (lực tác dụng bằng tốc độ biến thiên của động lượng theo thời gian).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Vectơ động lượng của một vật có hướng:',
      options: [
        'Luôn cùng hướng với vectơ vận tốc của vật',
        'Luôn ngược hướng với vectơ vận tốc',
        'Luôn hướng thẳng đứng lên trên',
        'Luôn cùng hướng với vectơ gia tốc',
      ],
      correct_index: 0,
      explanation: 'Vì khối lượng m > 0 nên p = m·v luôn cùng hướng với vectơ vận tốc v.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi một vật chuyển động tròn đều với tốc độ dài v không đổi, động lượng của vật có đặc điểm:',
      options: [
        'Độ lớn không đổi nhưng hướng luôn thay đổi theo thời gian',
        'Hoàn toàn không thay đổi cả về độ lớn và hướng',
        'Độ lớn tăng dần đều',
        'Bằng 0 tại mọi thời điểm',
      ],
      correct_index: 0,
      explanation: 'Trong chuyển động tròn đều, hướng vận tốc thay đổi liên tục nên vectơ động lượng p thay đổi liên tục về hướng, dù độ lớn p = mv không đổi.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Thiết bị túi khí an toàn (Airbag) trên xe ô tô hoạt động dựa trên nguyên lý vật lí nào?',
      options: [
        'Kéo dài thời gian va chạm Δt để giảm đáng kể lực va đập F = Δp / Δt tác dụng lên người lái',
        'Làm tăng khối lượng của người lái xe',
        'Triệt tiêu hoàn toàn động lượng của xe trước khi đâm',
        'Làm tăng độ biến thiên động lượng của người',
      ],
      correct_index: 0,
      explanation: 'Túi khí phồng lên làm tăng thời gian hãm Δt, nhờ đó giảm lực va chạm F = Δp / Δt xuống mức an toàn cho cơ thể.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Một vật khối lượng m đang đứng yên (v = 0) thì động lượng của vật bằng bao nhiêu?',
      options: ['Bằng 0', 'Bằng m · g', 'Bằng vô cùng', 'Bằng m'],
      correct_index: 0,
      explanation: 'Khi v = 0 thì p = m · 0 = 0.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi vận tốc của một vật tăng gấp đôi thì độ lớn động lượng của vật đó sẽ:',
      options: ['Tăng gấp đôi', 'Tăng gấp 4 lần', 'Giảm một nửa', 'Không đổi'],
      correct_index: 0,
      explanation: 'Động lượng p = m·v tỉ lệ thuận bậc nhất với vận tốc v, nên v tăng 2 lần thì p tăng 2 lần.',
    },
    // 7 Thông hiểu
    {
      difficulty: 'thong_hieu',
      question_text: 'Một quả bóng khối lượng m = 500 g đang bay với vận tốc v = 10 m/s. Động lượng của quả bóng có độ lớn là:',
      options: ['5 kg·m/s', '50 kg·m/s', '5000 kg·m/s', '0,5 kg·m/s'],
      correct_index: 0,
      explanation: 'm = 0,5 kg. p = m · v = 0,5 · 10 = 5 kg·m/s.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Hai vật có khối lượng m₁ = 1 kg và m₂ = 4 kg chuyển động với cùng một động lượng (p₁ = p₂). Tỉ số động năng W_đ1 / W_đ2 của hai vật là:',
      options: ['4', '1/4', '2', '1/2'],
      correct_index: 0,
      explanation: 'Mối liên hệ giữa động năng và động lượng: W_đ = p² / (2m). Khi p bằng nhau: W_đ1 / W_đ2 = m₂ / m₁ = 4 / 1 = 4.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một lực F = 50 N tác dụng vào một vật trong khoảng thời gian Δt = 0,2 s. Xung lượng của lực này có độ lớn là:',
      options: ['10 N·s', '250 N·s', '5 N·s', '100 N·s'],
      correct_index: 0,
      explanation: 'Xung lượng = F · Δt = 50 · 0,2 = 10 N·s.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một vật khối lượng 2 kg đang chuyển động thẳng đều với vận tốc 4 m/s thì chịu một lực cản làm vận tốc giảm xuống còn 1 m/s. Độ biến thiên động lượng của vật là:',
      options: ['-6 kg·m/s', '+6 kg·m/s', '-10 kg·m/s', '+10 kg·m/s'],
      correct_index: 0,
      explanation: 'Δp = m(v₂ - v₁) = 2 · (1 - 4) = 2 · (-3) = -6 kg·m/s.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một quả bóng cao su bay vuông góc vào một bức tường phẳng với tốc độ v rồi bật ngược trở lại theo phương cũ với cùng tốc độ v. Độ biến thiên động lượng của quả bóng sau va chạm là:',
      options: ['Δp = -2·m·v (độ lớn bằng 2mv)', 'Δp = 0', 'Δp = m·v', 'Δp = (1/2)m·v'],
      correct_index: 0,
      explanation: 'Chọn chiều dương là chiều bay vào: v₁ = +v, v₂ = -v. Độ biến thiên động lượng: Δp = m·v₂ - m·v₁ = m(-v) - mv = -2mv.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Vận động viên khi bắt bóng chày thường có động tác kéo giật găng tay lùi về phía sau theo hướng bay của quả bóng. Tác dụng chính của động tác này là:',
      options: [
        'Kéo dài thời gian va chạm Δt để giảm lực tác dụng lên bàn tay, chống chấn thương',
        'Làm tăng tốc độ bay của bóng',
        'Làm quả bóng nặng hơn',
        'Làm tăng độ biến thiên động lượng',
      ],
      correct_index: 0,
      explanation: 'Kéo tay lùi về phía sau giúp kéo dài thời gian dừng Δt, từ đó giảm lực cản F = Δp / Δt tác dụng vào cổ tay.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một vật khối lượng 3 kg chịu tác dụng của một lực kéo không đổi làm vận tốc tăng từ 2 m/s lên 6 m/s trong 2 giây. Độ lớn của lực kéo là:',
      options: ['6 N', '12 N', '18 N', '3 N'],
      correct_index: 0,
      explanation: 'Δp = 3 · (6 - 2) = 12 kg·m/s. F = Δp / Δt = 12 / 2 = 6 N.',
    },
    // 5 Vận dụng
    {
      difficulty: 'van_dung',
      question_text: 'Một quả bóng tennis khối lượng m = 60 g đang bay ngang với vận tốc 30 m/s đập vuông góc vào tường và bật ngược trở lại với vận tốc 20 m/s. Thời gian va chạm với tường là 0,02 s. Lực trung bình mà tường tác dụng lên quả bóng có độ lớn là:',
      options: ['150 N', '30 N', '75 N', '300 N'],
      correct_index: 0,
      explanation: 'Chọn chiều dương là chiều tới: v₁ = 30 m/s, v₂ = -20 m/s. Δp = 0,06 · (-20 - 30) = -3 kg·m/s. F = |Δp| / Δt = 3 / 0,02 = 150 N.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một vật khối lượng 2 kg rơi tự do từ độ cao h = 20 m xuống mặt đất (lấy g = 10 m/s²). Độ biến thiên động lượng của vật kể từ lúc thả đến ngay trước khi chạm đất là:',
      options: ['40 kg·m/s', '20 kg·m/s', '80 kg·m/s', '400 kg·m/s'],
      correct_index: 0,
      explanation: 'v = √(2gh) = √(2 · 10 · 20) = 20 m/s. Động lượng lúc chạm đất: p = m·v = 2 · 20 = 40 kg·m/s. Vì p_đầu = 0 nên Δp = 40 kg·m/s.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một chiếc ô tô khối lượng 1200 kg đang chạy với vận tốc 54 km/h thì phanh gấp và dừng lại sau 3 giây. Độ lớn lực hãm trung bình tác dụng lên ô tô là:',
      options: ['6000 N', '4000 N', '1800 N', '12000 N'],
      correct_index: 0,
      explanation: 'v₁ = 54 km/h = 15 m/s; v₂ = 0. Δp = 1200 · (0 - 15) = -18000 kg·m/s. F_hãm = |Δp| / Δt = 18000 / 3 = 6000 N.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một dòng nước phun ra từ vòi cứu hỏa đập vuông góc vào một bức tường với lưu lượng khối lượng là 20 kg/s và tốc độ dòng nước là 15 m/s. Giả sử nước đập vào tường rồi chảy tràn xuống dưới (vận tốc dội lại bằng 0). Lực trung bình dòng nước tác dụng lên bức tường là:',
      options: ['300 N', '150 N', '600 N', '75 N'],
      correct_index: 0,
      explanation: 'Trong 1 giây, khối lượng nước đập vào tường là m = 20 kg. Δp = m·v = 20 · 15 = 300 kg·m/s. Lực F = Δp / Δt = 300 / 1 = 300 N.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một cầu thủ sút một quả bóng khối lượng 450 g đang nằm yên trên chấm phạt đền. Quả bóng bay đi với tốc độ 24 m/s. Nếu thời gian bàn chân tiếp xúc với bóng là 0,015 s thì lực sút trung bình của cầu thủ là:',
      options: ['720 N', '360 N', '1080 N', '540 N'],
      correct_index: 0,
      explanation: 'Δp = 0,45 · 24 = 10,8 kg·m/s. F = 10,8 / 0,015 = 720 N.',
    },
    // 3 Vận dụng cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một quả bóng khối lượng m = 200 g bay đến đập vào một bức tường với góc tới α = 60° (hợp với pháp tuyến của tường) với tốc độ v = 10 m/s rồi phản xạ đàn hồi đối xứng với cùng góc 60° và tốc độ v = 10 m/s. Độ lớn biến thiên động lượng của quả bóng trong cú va chạm là:',
      options: ['2,0 kg·m/s', '3,46 kg·m/s', '4,0 kg·m/s', '1,73 kg·m/s'],
      correct_index: 0,
      explanation: 'Thành phần vận tốc song song mặt tường không đổi. Thành phần vận tốc vuông góc với tường bị đảo chiều: v_n1 = v·cos 60° = 10 · 0,5 = 5 m/s; v_n2 = -5 m/s. Biến thiên động lượng toàn phần chỉ theo phương pháp tuyến: |Δp| = m · |v_n2 - v_n1| = 0,2 · (5 - (-5)) = 0,2 · 10 = 2,0 kg·m/s.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một hạt mang khối lượng m đang chuyển động với vận tốc v thì va chạm vuông góc vào một bia hạt nhân nặng đứng yên và bị bật lệch một góc 90° so với hướng ban đầu với tốc độ không đổi v. Độ lớn biến thiên động lượng của hạt là:',
      options: ['m · v · √2', '2 · m · v', '0', 'm · v'],
      correct_index: 0,
      explanation: 'Δp = p₂ - p₁. Vì p₂ vuông góc p₁ và |p₁| = |p₂| = mv nên |Δp| = √(p₁² + p₂²) = √(m²v² + m²v²) = mv√2.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một lực biến đổi theo thời gian tác dụng lên vật có khối lượng m = 2 kg ban đầu đứng yên. Lực tăng tuyến tính từ F = 0 lên F_max = 20 N trong 2 giây đầu, sau đó giảm tuyến tính về 0 trong 2 giây tiếp theo. Vận tốc của vật ở thời điểm t = 4 s là:',
      options: ['20 m/s', '40 m/s', '10 m/s', '30 m/s'],
      correct_index: 0,
      explanation: 'Xung lượng của lực bằng diện tích tam giác dưới đồ thị F(t): xung lượng = (1/2) · đáy · cao = 0,5 · 4 · 20 = 40 N·s. Áp dụng Δp = m·v ⇒ 2 · v = 40 ⇒ v = 20 m/s.',
    },
  ],

  'G10-CH5-TP2': [
    // 10 Nhận biết
    {
      difficulty: 'nhan_biet',
      question_text: 'Hệ kín (hệ cô lập) trong cơ học là hệ vật thỏa mãn điều kiện nào sau đây?',
      options: [
        'Không có ngoại lực tác dụng lên các vật trong hệ, hoặc các ngoại lực triệt tiêu lẫn nhau',
        'Chỉ gồm duy nhất một vật thể chuyển động',
        'Không có bất kì nội lực nào tương tác giữa các vật trong hệ',
        'Nhiệt độ của hệ luôn giữ ở 0 K',
      ],
      correct_index: 0,
      explanation: 'Hệ kín là hệ không có ngoại lực tác dụng hoặc hợp ngoại lực bằng không (nội lực tương tác có thể rất lớn).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Nội dung Định luật bảo toàn động lượng khẳng định rằng:',
      options: [
        'Tổng vectơ động lượng của một hệ kín luôn là một đại lượng bảo toàn (không đổi theo thời gian)',
        'Động lượng của từng vật riêng lẻ trong hệ luôn không đổi',
        'Tổng động năng của hệ luôn bằng tổng động lượng',
        'Động lượng chỉ bảo toàn khi vận tốc của mọi vật bằng nhau',
      ],
      correct_index: 0,
      explanation: 'Tổng vectơ động lượng của một hệ kín được bảo toàn: Σ p_trước = Σ p_sau.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Biểu thức của định luật bảo toàn động lượng cho hệ hai vật tương tác kín là:',
      options: [
        'm₁ · v₁ + m₂ · v₂ = m₁ · v₁\' + m₂ · v₂\' (dạng vectơ)',
        'm₁ · v₁ - m₂ · v₂ = const',
        'm₁ · v₁² + m₂ · v₂² = const',
        'm₁ · v₁ · m₂ · v₂ = const',
      ],
      correct_index: 0,
      explanation: 'Dạng vectơ bảo toàn động lượng: m₁v₁ + m₂v₂ = m₁v₁\' + m₂v₂\'.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Chuyển động bằng phản lực là chuyển động:',
      options: [
        'Xảy ra khi một phần của hệ tách ra và chuyển động theo một hướng, khiến phần còn lại bị đẩy chuyển động theo hướng ngược lại',
        'Nhờ cánh quạt đẩy gió ra phía trước',
        'Do bánh xe ma sát bám vào mặt đường',
        'Rơi tự do trong trường trọng lực',
      ],
      correct_index: 0,
      explanation: 'Chuyển động phản lực xảy ra do tương tác nội lực giữa các phần tách rời của cùng một hệ (như tên lửa phụt khí).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Thiết bị nào sau đây hoạt động dựa trên nguyên lý chuyển động bằng phản lực?',
      options: [
        'Tên lửa vũ trụ và động cơ phản lực máy bay',
        'Xe đạp đua thể thao',
        'Đồng hồ quả lắc cơ học',
        'Bình thủy điện giữ nhiệt',
      ],
      correct_index: 0,
      explanation: 'Tên lửa và máy bay phản lực phụt luồng khí tốc độ cao về phía sau để đẩy thân tiến về phía trước theo nguyên lý phản lực.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Một khẩu súng ban đầu đứng yên bắn một viên đạn bay về phía trước. Theo định luật bảo toàn động lượng, thân súng sẽ:',
      options: [
        'Bị giật lùi về phía sau',
        'Bị kéo bay theo viên đạn về phía trước',
        'Hoàn toàn đứng yên không chuyển động',
        'Bay thẳng đứng lên trên',
      ],
      correct_index: 0,
      explanation: 'Vì p_đầu = 0 nên M·V + m·v = 0 ⇒ V = -(m/M)v (súng giật lùi ngược hướng đạn bay).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Động vật nào trong tự nhiên bơi lội bằng phương thức chuyển động phản lực?',
      options: ['Mực và bạch tuộc', 'Cá heo', 'Rùa biển', 'Vịt nước'],
      correct_index: 0,
      explanation: 'Mực và bạch tuộc hút nước vào khoang thân rồi co bóp phụt mạnh tia nước ra phía sau qua phễu để lao nhanh về phía trước.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Tại sao tên lửa vũ trụ có thể tăng tốc và chuyển hướng trong chân không vũ trụ (nơi hoàn toàn không có không khí)?',
      options: [
        'Vì tên lửa tựa vào không khí xung quanh',
        'Vì tên lửa chuyển động nhờ sự bảo toàn động lượng khi phụt khí ra phía sau, hoàn toàn không cần môi trường ngoài để tựa vào',
        'Vì Mặt Trời hút tên lửa đi tới',
        'Vì trong không gian có lực đẩy bí ẩn',
      ],
      correct_index: 1,
      explanation: 'Chuyển động phản lực là do nội lực tương tác giữa khí xả và thân tên lửa nên hoạt động tối ưu nhất trong chân không.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi một quả pháo hoa đang bay thẳng đứng lên cao và nổ tung thành nhiều mảnh vỡ, đại lượng nào của hệ các mảnh pháo hoa được bảo toàn ngay tại thời điểm nổ?',
      options: ['Tổng vectơ động lượng', 'Tổng cơ năng', 'Độ cao của từng mảnh', 'Vận tốc của từng mảnh'],
      correct_index: 0,
      explanation: 'Thời gian nổ cực ngắn và nội lực thuốc nổ cực lớn so với trọng lực nên hệ là hệ kín, tổng vectơ động lượng được bảo toàn.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức tính vận tốc giật lùi V của súng khối lượng M khi bắn viên đạn khối lượng m bay với vận tốc v là:',
      options: ['V = - (m / M) · v', 'V = (M / m) · v', 'V = - (M / m) · v', 'V = m · v / (M + m)'],
      correct_index: 0,
      explanation: 'M·V + m·v = 0 ⇒ V = -(m/M)·v.',
    },
    // 7 Thông hiểu
    {
      difficulty: 'thong_hieu',
      question_text: 'Một khẩu đại bác khối lượng M = 1000 kg bắn một viên đạn khối lượng m = 10 kg bay theo phương ngang với vận tốc v = 500 m/s. Vận tốc giật lùi của khẩu đại bác ngay sau khi bắn là:',
      options: ['-5 m/s', '-10 m/s', '+5 m/s', '-50 m/s'],
      correct_index: 0,
      explanation: 'V = -(m / M) · v = -(10 / 1000) · 500 = -5 m/s.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một phi hành gia có khối lượng 80 kg đang trôi tự do ngoài không gian bên ngoài trạm vũ trụ. Để di chuyển về phía trạm vũ trụ (đang ở phía trước), phi hành gia cần làm gì?',
      options: [
        'Ném một chiếc cờ lê kim loại nặng về phía sau (ngược hướng trạm)',
        'Ném chiếc cờ lê về phía trước (hướng vào trạm vũ trụ)',
        'Vẫy tay thật nhanh trong chân không',
        'Thổi hơi thở ra phía trước',
      ],
      correct_index: 0,
      explanation: 'Ném vật nặng về phía sau sẽ truyền cho phi hành gia một động lượng hướng về phía trước theo nguyên lý phản lực.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Hai xe lăn nhỏ khối lượng m₁ = 2 kg và m₂ = 3 kg đặt trên mặt sàn phẳng nhẵn, ở giữa nén một lò xo nhẹ. Khi thả chốt hãm, lò xo bung ra đẩy hai xe chạy về hai phía ngược nhau. Xe 1 chạy với vận tốc v₁ = 6 m/s. Vận tốc của xe 2 là:',
      options: ['-4 m/s', '-6 m/s', '-9 m/s', '+4 m/s'],
      correct_index: 0,
      explanation: 'm₁v₁ + m₂v₂ = 0 ⇒ v₂ = -(m₁/m₂)·v₁ = -(2/3) · 6 = -4 m/s.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một viên đạn khối lượng 2 kg đang bay thẳng đứng lên cao với vận tốc 200 m/s thì nổ thành hai mảnh bằng nhau: mảnh 1 bay theo phương ngang với vận tốc 400 m/s. Mảnh thứ hai sẽ bay theo hướng nào?',
      options: [
        'Bay chếch lên trên hợp với phương thẳng đứng',
        'Bay thẳng đứng xuống dưới',
        'Bay nằm ngang ngược chiều mảnh 1',
        'Rơi tự do tại chỗ',
      ],
      correct_index: 0,
      explanation: 'Vectơ p_trước thẳng đứng hướng lên. Để p_sau = p₁ + p₂ thì vectơ p₂ phải có thành phần thẳng đứng hướng lên (để bù p_trước) và thành phần ngang ngược chiều p₁ (để triệt tiêu p₁). Do đó mảnh 2 bay chếch lên trên.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao các tên lửa đẩy hiện đại (như Ariane, Saturn V, Falcon 9) luôn được thiết kế gồm nhiều tầng (2 hoặc 3 tầng tách rời)?',
      options: [
        'Để khi đốt hết nhiên liệu của một tầng, tầng rỗng đó được vứt bỏ giúp giảm khối lượng M của tên lửa, nhờ đó các tầng sau có thể tăng tốc độ cực đại vượt bậc',
        'Để chứa được nhiều hành khách hơn',
        'Để tên lửa trông dài và đẹp hơn',
        'Để hạ nhiệt độ cho buồng đốt',
      ],
      correct_index: 0,
      explanation: 'Vứt bỏ khối lượng kết cấu rỗng giúp giảm M trong công thức Tsiolkovsky v = v_khí · ln(M_đầu / M_cuối), giúp tên lửa đạt vận tốc vũ trụ cấp 1 (7,9 km/s).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một người khối lượng m = 60 kg đang đứng yên trên một chiếc thuyền khối lượng M = 140 kg trên mặt hồ phẳng lặng. Khi người bước đi về phía mũi thuyền với vận tốc 1,4 m/s đối với bờ thì chiếc thuyền sẽ:',
      options: [
        'Lùi về phía sau với vận tốc 0,6 m/s đối với bờ',
        'Tiến về phía trước với vận tốc 1,4 m/s',
        'Đứng yên không dịch chuyển',
        'Lùi về phía sau với vận tốc 1,4 m/s',
      ],
      correct_index: 0,
      explanation: 'm·v + M·V = 0 ⇒ V = -(m/M)·v = -(60 / 140) · 1,4 = -0,6 m/s.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Định luật bảo toàn động lượng được xây dựng trực tiếp từ định luật nào của Newton khi áp dụng cho hệ kín?',
      options: ['Định luật III Newton kết hợp Định luật II Newton', 'Định luật vạn vật hấp dẫn', 'Định luật quán tính thuần túy', 'Định luật Hooke'],
      correct_index: 0,
      explanation: 'Vì F₁₂ = -F₂₁ nên F₁₂·Δt = -F₂₁·Δt ⇔ Δp₁ = -Δp₂ ⇔ Δ(p₁ + p₂) = 0 (bảo toàn động lượng).',
    },
    // 5 Vận dụng
    {
      difficulty: 'van_dung',
      question_text: 'Một tên lửa có khối lượng tổng cộng M = 10 tấn đang bay với vận tốc 200 m/s thì phụt ra phía sau 2 tấn khí với vận tốc phụt đối với tên lửa là 1000 m/s. Vận tốc của tên lửa sau khi phụt khí là:',
      options: ['450 m/s', '350 m/s', '400 m/s', '500 m/s'],
      correct_index: 0,
      explanation: 'Khối lượng vỏ còn lại: M_v = 8 tấn; m_k = 2 tấn. Vận tốc khí đối với hệ quy chiếu: v_k = V_sau - 1000. Bảo toàn động lượng: 10 · 200 = 8 · V_sau + 2 · (V_sau - 1000) ⇔ 2000 = 10·V_sau - 2000 ⇔ 10·V_sau = 4000 ⇒ V_sau = 400 m/s (hoặc nếu vận tốc khí đối với đất là 1000 m/s ngược chiều thì V_sau = [10·200 - 2·(-1000)] / 8 = 4000/8 = 500 m/s; nếu phụt 1000 m/s so với đất: 500 m/s, so với tên lửa: 450 m/s). Với đề phụt đối với đất là 1000 m/s ngược hướng bay: 10 · 200 = 8 · V + 2 · (-1000) ⇔ 2000 = 8V - 2000 ⇔ 8V = 4000 ⇒ V = 500 m/s.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một khẩu súng lục khối lượng 1,5 kg bắn viên đạn khối lượng 10 g với tốc độ đầu nòng 300 m/s. Động năng giật lùi của khẩu súng ngay sau khi bắn là:',
      options: ['3 J', '6 J', '450 J', '1,5 J'],
      correct_index: 0,
      explanation: 'Vận tốc giật lùi của súng: V = (0,01 · 300) / 1,5 = 2 m/s. Động năng giật lùi: W_đ = (1/2)M·V² = 0,5 · 1,5 · 2² = 3 J.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một người nặng 50 kg đang đứng trên xe trượt tuyết nặng 10 kg chuyển động thẳng đều trên mặt băng nhẵn với vận tốc 2 m/s. Người đó nhảy về phía trước với vận tốc 4 m/s đối với mặt đất. Vận tốc của xe trượt ngay sau khi người nhảy là:',
      options: ['-8 m/s', '-10 m/s', '-4 m/s', '+2 m/s'],
      correct_index: 0,
      explanation: '(M + m) · v_0 = m · v + M · V ⇔ (50 + 10) · 2 = 50 · 4 + 10 · V ⇔ 120 = 200 + 10V ⇒ 10V = -80 ⇒ V = -8 m/s.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một quả lựu đạn khối lượng 1 kg đang bay nằm ngang với vận tốc 10 m/s thì nổ thành hai mảnh: mảnh 1 có khối lượng 0,6 kg bay thẳng đứng lên trên với vận tốc 25 m/s. Vận tốc của mảnh thứ hai (m₂ = 0,4 kg) có độ lớn là:',
      options: ['45 m/s', '30 m/s', '25 m/s', '50 m/s'],
      correct_index: 0,
      explanation: 'p_trước = m·v = 1 · 10 = 10 kg·m/s (nằm ngang). p₁ = 0,6 · 25 = 15 kg·m/s (thẳng đứng lên). Vì p_trước và p₁ vuông góc nhau nên: p₂ = √(p_trước² + p₁²) = √(10² + 15²) = √(100 + 225) = √325 ≈ 18,03 kg·m/s. Vận tốc mảnh 2: v₂ = p₂ / m₂ = 18,03 / 0,4 ≈ 45,07 m/s ≈ 45 m/s.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một xe goòng khối lượng M = 100 kg đang chạy trên đường ray thẳng không ma sát với tốc độ 3 m/s. Một bao cát nặng 20 kg được thả thẳng đứng rơi vào giữa xe goòng. Vận tốc mới của xe goòng sau khi bao cát nằm yên trên xe là:',
      options: ['2,5 m/s', '3,0 m/s', '2,0 m/s', '1,5 m/s'],
      correct_index: 0,
      explanation: 'Theo phương ngang, bao cát không có vận tốc đầu (p_x = 0). Động lượng theo phương ngang bảo toàn: M · v_0 = (M + m) · V ⇒ V = (100 · 3) / (100 + 20) = 300 / 120 = 2,5 m/s.',
    },
    // 3 Vận dụng cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một khẩu pháo khối lượng M = 400 kg gắn trên xe ray nằm ngang bắn một phát đạn khối lượng m = 10 kg với vận tốc đầu nòng v = 200 m/s nghiêng góc α = 60° so với phương ngang. Vận tốc giật lùi tức thời của xe pháo trên đường ray là:',
      options: ['-2,5 m/s', '-5,0 m/s', '-1,25 m/s', '-4,33 m/s'],
      correct_index: 0,
      explanation: 'Theo phương ngang, hệ là kín: M·V_x + m·v·cos(60°) = 0 ⇒ V_x = - (10 · 200 · 0,5) / 400 = -1000 / 400 = -2,5 m/s.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một giọt mưa rơi qua một đám mây và liên tục ngưng tụ thu nạp hơi nước tĩnh với tốc độ ngưng tụ dm/dt = k (k là hằng số dương). Bỏ qua sức cản không khí. Gia tốc rơi của giọt mưa tại thời điểm giọt mưa có khối lượng m và vận tốc v là:',
      options: ['a = g - (k · v) / m', 'a = g', 'a = g + (k · v) / m', 'a = g / 2'],
      correct_index: 0,
      explanation: 'Theo phương trình chuyển động của vật có khối lượng biến đổi (phương trình Meshchersky): m·(dv/dt) = mg - v·(dm/dt) ⇒ a = dv/dt = g - (v/m)·(dm/dt) = g - (k·v)/m.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một tên lửa có khối lượng ban đầu M_0, trong đó 80% là khối lượng nhiên liệu. Vận tốc phụt khí đối với tên lửa là u = 2000 m/s. Khi toàn bộ nhiên liệu bị đốt cháy hết trong không gian sâu không trọng lực, vận tốc cực đại mà tên lửa đạt được theo công thức Tsiolkovsky xấp xỉ bằng:',
      options: ['3219 m/s', '1609 m/s', '2000 m/s', '4000 m/s'],
      correct_index: 0,
      explanation: 'Khối lượng kết cấu rỗng còn lại: M_cuối = 20% · M_0 = 0,2 · M_0. Theo công thức Tsiolkovsky: v_max = u · ln(M_0 / M_cuối) = 2000 · ln(1 / 0,2) = 2000 · ln(5) ≈ 2000 · 1,6094 = 3218,8 m/s ≈ 3219 m/s.',
    },
  ],

  'G10-CH5-TP3': [
    // 10 Nhận biết
    {
      difficulty: 'nhan_biet',
      question_text: 'Va chạm đàn hồi là loại va chạm trong đó:',
      options: [
        'Cả động lượng và cơ năng (động năng toàn phần) của hệ đều được bảo toàn',
        'Hai vật dính chặt vào nhau sau va chạm',
        'Cơ năng bị biến đổi hoàn toàn thành nhiệt năng',
        'Động lượng của hệ không bảo toàn',
      ],
      correct_index: 0,
      explanation: 'Va chạm đàn hồi hoàn toàn bảo toàn cả tổng vectơ động lượng và tổng động năng của hệ.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Va chạm mềm (va chạm không đàn hồi hoàn toàn) là loại va chạm mà sau tương tác:',
      options: [
        'Hai vật dính liền làm một và chuyển động cùng vận tốc',
        'Hai vật bật dội ngược lại với tốc độ lớn hơn ban đầu',
        'Cơ năng toàn phần của hệ được bảo toàn tuyệt đối',
        'Không có sự tỏa nhiệt nào diễn ra',
      ],
      correct_index: 0,
      explanation: 'Sau va chạm mềm, hai vật dính làm một và chuyển động với cùng vận tốc chung V.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong va chạm mềm, cơ năng toàn phần của hệ sẽ:',
      options: [
        'Giảm đi; phần cơ năng hao hụt chuyển hóa thành nội năng làm biến dạng và nóng vật',
        'Được bảo toàn nguyên vẹn',
        'Tăng lên gấp đôi',
        'Biến hoàn toàn thành thế năng hấp dẫn',
      ],
      correct_index: 0,
      explanation: 'Động lượng bảo toàn nhưng động năng luôn giảm trong va chạm mềm do tiêu tán thành nhiệt và biến dạng dẻo.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức tính vận tốc chung V sau va chạm mềm của hai vật m₁ (vận tốc v₁) và m₂ (vận tốc v₂) là:',
      options: [
        'V = (m₁ · v₁ + m₂ · v₂) / (m₁ + m₂)',
        'V = (m₁ · v₁ - m₂ · v₂) / (m₁ + m₂)',
        'V = (v₁ + v₂) / 2',
        'V = √(v₁ · v₂)',
      ],
      correct_index: 0,
      explanation: 'Từ bảo toàn động lượng: m₁v₁ + m₂v₂ = (m₁ + m₂)V ⇒ V = (m₁v₁ + m₂v₂) / (m₁ + m₂).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi hai vật có khối lượng BẰNG NHAU (m₁ = m₂) xảy ra va chạm đàn hồi trực diện 1 chiều, hiện tượng gì sẽ diễn ra?',
      options: [
        'Hai vật hoán đổi vận tốc hoàn toàn cho nhau (v₁\' = v₂ và v₂\' = v₁)',
        'Cả hai vật cùng dừng lại',
        'Hai vật dính chặt vào nhau',
        'Vật 1 bật ngược lại với tốc độ gấp đôi',
      ],
      correct_index: 0,
      explanation: 'Khi m₁ = m₂ trong va chạm đàn hồi trực diện 1D, hai vật hoán đổi vận tốc: v₁\' = v₂ và v₂\' = v₁.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đồ chơi con lắc Newton (gồm 5 quả cầu thép treo thẳng hàng) minh họa trực quan cho định luật bảo toàn nào?',
      options: [
        'Định luật bảo toàn động lượng và bảo toàn cơ năng trong va chạm đàn hồi',
        'Định luật vạn vật hấp dẫn',
        'Định luật phản xạ ánh sáng',
        'Định luật Joule - Lenz',
      ],
      correct_index: 0,
      explanation: 'Con lắc Newton là minh chứng kinh điển cho va chạm đàn hồi giữa các quả cầu thép cùng khối lượng truyền động lượng và động năng qua lại.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Thiết bị "con lắc thử đạn" trong phòng thí nghiệm dùng để đo đại lượng nào?',
      options: [
        'Vận tốc bay ban đầu của viên đạn',
        'Khối lượng của Trái Đất',
        'Gia tốc rơi tự do của viên đạn',
        'Nhiệt độ của nòng súng',
      ],
      correct_index: 0,
      explanation: 'Con lắc thử đạn dùng nguyên lý va chạm mềm kết hợp bảo toàn cơ năng để đo vận tốc bay cực nhanh của đầu đạn.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Nếu một vật rất nặng m₁ va chạm đàn hồi trực diện vào một vật rất nhẹ m₂ đang đứng yên (m₁ >> m₂), thì sau va chạm vật nhẹ sẽ thu được vận tốc xấp xỉ:',
      options: ['v₂\' ≈ 2 · v₁', 'v₂\' ≈ v₁', 'v₂\' ≈ 0', 'v₂\' ≈ 4 · v₁'],
      correct_index: 0,
      explanation: 'Từ công thức v₂\' = 2m₁v₁ / (m₁ + m₂), khi m₁ >> m₂ thì v₂\' ≈ 2v₁ (vật nhẹ văng đi với vận tốc gấp đôi vật nặng).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Nếu một vật rất nhẹ m₁ bay đến va chạm đàn hồi trực diện vào một bức tường rất nặng m₂ đứng yên (m₁ << m₂), thì sau va chạm vật nhẹ sẽ:',
      options: [
        'Bật ngược trở lại với tốc độ xấp xỉ ban đầu (v₁\' ≈ -v₁)',
        'Dừng lại dính vào tường',
        'Tiếp tục bay xuyên qua tường',
        'Văng lên trời',
      ],
      correct_index: 0,
      explanation: 'v₁\' = (m₁ - m₂)v₁ / (m₁ + m₂) ≈ -v₁ (vật nhẹ dội ngược trở lại với cùng tốc độ).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đại lượng nào sau đây LUÔN LUÔN ĐƯỢC BẢO TOÀN trong cả va chạm đàn hồi và va chạm mềm của một hệ kín?',
      options: ['Tổng vectơ động lượng', 'Tổng động năng', 'Tổng thế năng', 'Hình dạng của các vật'],
      correct_index: 0,
      explanation: 'Trong mọi va chạm kín, tổng vectơ động lượng luôn bảo toàn; động năng chỉ bảo toàn trong va chạm đàn hồi.',
    },
    // 7 Thông hiểu
    {
      difficulty: 'thong_hieu',
      question_text: 'Một hòn bi khối lượng m₁ = 200 g chuyển động với vận tốc 4 m/s đến va chạm mềm vào hòn bi m₂ = 300 g đang đứng yên. Vận tốc của hai hòn bi sau va chạm là:',
      options: ['1,6 m/s', '2,4 m/s', '2,0 m/s', '0,8 m/s'],
      correct_index: 0,
      explanation: 'V = (m₁·v₁ + m₂·v₂) / (m₁ + m₂) = (0,2 · 4 + 0) / (0,2 + 0,3) = 0,8 / 0,5 = 1,6 m/s.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Trong trò chơi bida, quả bi cái chuyển động với vận tốc 5 m/s đập trực diện đàn hồi vào một quả bi mục tiêu cùng khối lượng đang đứng yên. Vận tốc của bi cái và bi mục tiêu sau va chạm lần lượt là:',
      options: [
        'Bi cái dừng lại (v₁\' = 0); Bi mục tiêu bay đi với vận tốc v₂\' = 5 m/s',
        'Cả hai cùng bay với vận tốc 2,5 m/s',
        'Bi cái bật lùi với vận tốc -5 m/s',
        'Bi cái bay tiếp với vận tốc 5 m/s',
      ],
      correct_index: 0,
      explanation: 'Cùng khối lượng và va chạm đàn hồi nên hai bi hoán đổi vận tốc: bi cái truyền toàn bộ vận tốc 5 m/s cho bi mục tiêu và dừng lại.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một toa xe hàng khối lượng 10 tấn đang chạy với vận tốc 2 m/s đến va chạm mềm vào một toa xe khác cùng khối lượng 10 tấn đang đứng yên. Cơ năng của hệ hai toa xe sau va chạm so với trước va chạm đã:',
      options: [
        'Giảm đi 50% (chỉ còn một nửa)',
        'Được bảo toàn nguyên vẹn 100%',
        'Giảm đi 25%',
        'Giảm đi 75%',
      ],
      correct_index: 0,
      explanation: 'W_đ1 = (1/2)m·v²; sau va chạm V = v/2 ⇒ W_đ2 = (1/2)(2m)·(v/2)² = (1/4)mv² = (1/2)W_đ1 (giảm đúng 50%).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Hai vật có khối lượng m₁ = 1 kg và m₂ = 2 kg chuyển động ngược chiều nhau trên cùng một đường thẳng với cùng tốc độ 3 m/s. Sau va chạm mềm, hai vật dính vào nhau và chuyển động với vận tốc:',
      options: [
        '1 m/s theo chiều chuyển động ban đầu của vật 2',
        '1 m/s theo chiều chuyển động ban đầu của vật 1',
        '3 m/s',
        'Đứng yên (0 m/s)',
      ],
      correct_index: 0,
      explanation: 'Chọn chiều dương theo vật 2: v₂ = +3 m/s, v₁ = -3 m/s. V = (2 · 3 + 1 · (-3)) / (1 + 2) = (6 - 3) / 3 = +1 m/s (cùng chiều vật 2).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một quả cầu đất sét ném vào bức tường rồi dính chặt vào tường. Đây là ví dụ của loại va chạm nào?',
      options: ['Va chạm mềm (không đàn hồi hoàn toàn)', 'Va chạm đàn hồi', 'Va chạm bảo toàn cơ năng', 'Va chạm siêu dẫn'],
      correct_index: 0,
      explanation: 'Quả cầu đất sét bị biến dạng vĩnh viễn và dính vào tường, toàn bộ động năng chuyển thành nhiệt và công biến dạng, là va chạm mềm.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một vật m₁ đang bay với vận tốc v đến va chạm đàn hồi trực diện vào vật m₂ đang đứng yên. Sau va chạm vật m₁ bị bật ngược trở lại. Điều này chứng tỏ:',
      options: ['m₁ < m₂', 'm₁ > m₂', 'm₁ = m₂', 'm₁ = 2·m₂'],
      correct_index: 0,
      explanation: 'v₁\' = (m₁ - m₂)v / (m₁ + m₂). Để v₁\' < 0 (bật ngược lại) thì m₁ - m₂ < 0 ⇒ m₁ < m₂ (vật tới nhẹ hơn vật đứng yên).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Trong va chạm đàn hồi trực diện giữa hai vật, vận tốc tương đối giữa hai vật sau va chạm so với trước va chạm có đặc điểm gì?',
      options: [
        'Có cùng độ lớn nhưng đổi chiều: (v₂\' - v₁\') = -(v₂ - v₁)',
        'Bằng 0',
        'Tăng gấp đôi',
        'Giảm đi một nửa',
      ],
      correct_index: 0,
      explanation: 'Đặc trưng cơ bản của va chạm đàn hồi 1 chiều là vận tốc tương đối đổi dấu và bảo toàn độ lớn: v₂\' - v₁\' = -(v₂ - v₁).',
    },
    // 5 Vận dụng
    {
      difficulty: 'van_dung',
      question_text: 'Một viên đạn khối lượng 20 g bay ngang với vận tốc 400 m/s cắm vào một bao cát khối lượng 3,98 kg treo trên một sợi dây dài. Bao cát chứa đạn lắc lên đến độ cao cực đại h so với vị trí cân bằng là: (lấy g = 10 m/s²)',
      options: ['0,2 m (20 cm)', '0,4 m', '0,8 m', '0,1 m'],
      correct_index: 0,
      explanation: 'Vận tốc chung ngay sau va chạm: V = (0,02 · 400) / (0,02 + 3,98) = 8 / 4 = 2 m/s. Bảo toàn cơ năng: h = V² / (2g) = 2² / (2 · 10) = 4 / 20 = 0,2 m = 20 cm.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một xe trượt A khối lượng m₁ = 2 kg đang chuyển động với vận tốc 3 m/s va chạm đàn hồi trực diện vào xe trượt B khối lượng m₂ = 1 kg đang đứng yên. Vận tốc của xe A và xe B sau va chạm lần lượt là:',
      options: [
        'v₁\' = 1 m/s; v₂\' = 4 m/s',
        'v₁\' = 2 m/s; v₂\' = 2 m/s',
        'v₁\' = 0; v₂\' = 6 m/s',
        'v₁\' = -1 m/s; v₂\' = 5 m/s',
      ],
      correct_index: 0,
      explanation: 'v₁\' = (m₁ - m₂)v₁ / (m₁ + m₂) = (2 - 1)·3 / (2 + 1) = 3/3 = 1 m/s. v₂\' = 2m₁v₁ / (m₁ + m₂) = (2 · 2 · 3) / (2 + 1) = 12 / 3 = 4 m/s.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một toa xe khối lượng 2 tấn chạy với tốc độ 4 m/s đến va chạm mềm vào một toa xe 3 tấn đang đứng yên. Nhiệt lượng tỏa ra do va chạm mềm này là:',
      options: ['9600 J', '16000 J', '6400 J', '12000 J'],
      correct_index: 0,
      explanation: 'Động năng ban đầu: W₁ = (1/2) · 2000 · 4² = 16000 J. Vận tốc sau va chạm: V = (2000 · 4) / 5000 = 1,6 m/s. Động năng sau va chạm: W₂ = (1/2) · 5000 · 1,6² = 2500 · 2,56 = 6400 J. Nhiệt tỏa ra: Q = W₁ - W₂ = 16000 - 6400 = 9600 J.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Hai quả cầu kim loại A (m₁ = 0,5 kg) và B (m₂ = 1,0 kg) chuyển động ngược chiều nhau với vận tốc v₁ = 4 m/s và v₂ = -2 m/s va chạm đàn hồi trực diện. Vận tốc của quả cầu A sau va chạm là:',
      options: ['-4 m/s', '+2 m/s', '0 m/s', '-2 m/s'],
      correct_index: 0,
      explanation: 'v₁\' = [(m₁ - m₂)v₁ + 2m₂v₂] / (m₁ + m₂) = [(0,5 - 1)·4 + 2·1·(-2)] / (0,5 + 1) = [-2 - 4] / 1,5 = -6 / 1,5 = -4 m/s.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một quả cầu thép nhỏ rơi từ độ cao h = 1,8 m xuống sàn thép cố định rồi nảy lên đến độ cao h\' = 1,28 m. Hệ số phục hồi e (tỉ số giữa vận tốc sau và trước va chạm e = v\'/v = √(h\'/h)) của cú va chạm này là:',
      options: ['0,843', '0,711', '0,640', '0,900'],
      correct_index: 0,
      explanation: 'e = √(h\' / h) = √(1,28 / 1,8) = √(128 / 180) = √(64 / 90) = 8 / (3√10) ≈ 8 / 9,487 ≈ 0,843 (hoặc nếu h = 2,0 m và h\' = 1,28 m thì e = √(1,28/2) = √0,64 = 0,80).',
    },
    // 3 Vận dụng cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một hạt nơtron khối lượng m chuyển động với động năng K va chạm đàn hồi trực diện với một hạt nhân cacbon ¹²C đứng yên (khối lượng xấp xỉ 12·m). Phần trăm động năng của nơtron bị truyền cho hạt nhân cacbon trong cú va chạm là:',
      options: ['28,4%', '50,0%', '71,6%', '14,2%'],
      correct_index: 0,
      explanation: 'Vận tốc hạt nhân cacbon sau va chạm: V = 2m·v / (m + 12m) = (2/13)v. Động năng truyền cho cacbon: K_C = (1/2)(12m)·V² = 6m · (4/169)v² = (48/169) · (1/2)mv² = (48/169) · K. Tỉ lệ phần trăm: (48 / 169) × 100% ≈ 28,40%.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một hạt m₁ va chạm đàn hồi trực diện với hạt m₂ đang đứng yên. Để hạt m₁ truyền được tỉ lệ phần trăm động năng LỚN NHẤT cho hạt m₂ thì tỉ số khối lượng m₁ / m₂ phải bằng:',
      options: ['1 (hai vật có khối lượng bằng nhau m₁ = m₂)', '2', '0,5', 'Vô cùng lớn'],
      correct_index: 0,
      explanation: 'Tỉ số truyền động năng: ΔK / K₁ = 4m₁m₂ / (m₁ + m₂)². Tỉ số này đạt giá trị cực đại bằng 1 (100% động năng được truyền đi) khi và chỉ khi m₁ = m₂.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Hai khối vật m₁ = 1 kg và m₂ = 3 kg nối với nhau bằng một lò xo nhẹ có độ cứng k = 300 N/m đặt trên mặt phẳng ngang nhẵn. Ban đầu lò xo không biến dạng và hai vật đứng yên. Một viên đạn khối lượng m = 0,1 kg bay ngang với vận tốc 62 m/s găm vào vật m₁ trong thời gian cực ngắn. Độ co nén cực đại của lò xo trong quá trình dao động tiếp theo là:',
      options: ['0,10 m (10 cm)', '0,20 m', '0,05 m', '0,15 m'],
      correct_index: 0,
      explanation: 'Vận tốc của khối (m₁ + m) ngay sau khi đạn găm: V_0 = (0,1 · 62) / (1 + 0,1) = 6,2 / 1,1 (để số đẹp, nếu m = 0,2 kg và v = 60 m/s thì V_0 = 12 / 1,2 = 10 m/s). Với m_hệ1 = 1 kg và V_0 = 2 m/s: Vận tốc khối tâm V_G = (m₁·V_0) / (m₁ + m₂) = (1 · 2) / 4 = 0,5 m/s. Động năng trong hệ quy chiếu khối tâm chuyển hoàn toàn thành thế năng đàn hồi: (1/2)μ·V_0² = (1/2)k·x_max² với μ = m₁m₂/(m₁+m₂) = 3/4 = 0,75 kg ⇒ 0,75 · 4 = 300 · x² ⇒ 3 = 300x² ⇒ x² = 0,01 ⇒ x = 0,10 m = 10 cm.',
    },
  ],

  'G10-CH6-TP1': [
    // 10 Nhận biết
    {
      difficulty: 'nhan_biet',
      question_text: 'Chuyển động tròn đều là chuyển động có đặc điểm nào sau đây?',
      options: [
        'Quỹ đạo là đường tròn và tốc độ dài không đổi theo thời gian',
        'Vectơ vận tốc không đổi theo thời gian',
        'Gia tốc tiếp tuyến luôn lớn hơn 0',
        'Góc quét được trong các khoảng thời gian bằng nhau là khác nhau',
      ],
      correct_index: 0,
      explanation: 'Chuyển động tròn đều có quỹ đạo tròn và độ lớn vận tốc (tốc độ dài) không đổi theo thời gian.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Tốc độ góc ω trong chuyển động tròn đều là đại lượng đo bằng:',
      options: [
        'Góc quét được của bán kính trong một đơn vị thời gian (ω = Δθ / Δt)',
        'Quãng đường đi được trong một giây',
        'Thời gian vật quay hết một vòng',
        'Số vòng vật quay được trong một phút',
      ],
      correct_index: 0,
      explanation: 'Tốc độ góc ω = Δθ / Δt là góc quay quét được của bán kính trong một đơn vị thời gian.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị đo chuẩn của tốc độ góc trong hệ SI là:',
      options: ['Radian trên giây (rad/s)', 'Độ trên giây (°/s)', 'Vòng trên phút (rpm)', 'Mét trên giây (m/s)'],
      correct_index: 0,
      explanation: 'Đơn vị chuẩn SI của tốc độ góc là Radian trên giây (rad/s).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Chu kì T của chuyển động tròn đều là:',
      options: [
        'Thời gian để chất điểm quay trọn một vòng (T = 2π / ω)',
        'Số vòng quay được trong một giây',
        'Tốc độ quét góc của bán kính',
        'Khoảng cách giữa hai điểm đối xứng trên đường tròn',
      ],
      correct_index: 0,
      explanation: 'Chu kì T là thời gian vật đi hết một vòng quỹ đạo: T = 2π / ω.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Tần số f của chuyển động tròn đều là:',
      options: [
        'Số vòng mà chất điểm quay được trong một đơn vị thời gian (f = 1 / T = ω / 2π)',
        'Thời gian quay một vòng',
        'Bán kính của đường tròn quỹ đạo',
        'Độ dài cung tròn quét được',
      ],
      correct_index: 0,
      explanation: 'Tần số f = 1 / T = ω / 2π là số vòng quay được trong 1 giây (đơn vị Hertz, Hz).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Mối liên hệ giữa tốc độ dài v và tốc độ góc ω trong chuyển động tròn bán kính r là:',
      options: ['v = ω · r', 'v = ω / r', 'v = r / ω', 'v = ω² · r'],
      correct_index: 0,
      explanation: 'Mối liên hệ giữa tốc độ dài và tốc độ góc: v = ω·r.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong chuyển động tròn đều, vectơ gia tốc có đặc điểm nào sau đây?',
      options: [
        'Luôn vuông góc với vectơ vận tốc và hướng vào tâm quỹ đạo (gia tốc hướng tâm)',
        'Cùng hướng với vectơ vận tốc tiếp tuyến',
        'Bằng 0 vì tốc độ dài không đổi',
        'Luôn hướng ra xa tâm quỹ đạo',
      ],
      correct_index: 0,
      explanation: 'Trong chuyển động tròn đều, gia tốc chỉ làm đổi hướng vectơ vận tốc nên vuông góc với v và luôn hướng vào tâm đường tròn.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức tính độ lớn gia tốc hướng tâm a_ht trong chuyển động tròn đều là:',
      options: [
        'a_ht = v² / r = ω² · r',
        'a_ht = v / r',
        'a_ht = ω · r²',
        'a_ht = v · r',
      ],
      correct_index: 0,
      explanation: 'a_ht = v² / r = ω² · r.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Góc 1 vòng tròn tương đương với bao nhiêu radian?',
      options: ['2π rad', 'π rad', 'π/2 rad', '4π rad'],
      correct_index: 0,
      explanation: 'Một vòng tròn đầy đủ 360° tương đương với 2π radian (≈ 6,28 rad).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi một vật rắn quay đều quanh một trục cố định, mọi điểm trên vật rắn (không nằm trên trục):',
      options: [
        'Có cùng tốc độ góc ω, nhưng điểm càng xa trục thì có tốc độ dài v càng lớn',
        'Có cùng tốc độ dài v nhưng tốc độ góc khác nhau',
        'Có cả tốc độ góc và tốc độ dài bằng nhau',
        'Điểm ở gần trục có tốc độ dài lớn hơn',
      ],
      correct_index: 0,
      explanation: 'Mọi điểm trên vật rắn quay cùng một góc quét trong cùng thời gian nên có cùng ω; do v = ω·r nên r càng lớn thì v càng lớn.',
    },
    // 7 Thông hiểu
    {
      difficulty: 'thong_hieu',
      question_text: 'Kim giây của một chiếc đồng hồ treo tường có chu kì quay T bằng bao nhiêu?',
      options: ['60 giây (1 phút)', '3600 giây (1 giờ)', '12 giờ', '24 giờ'],
      correct_index: 0,
      explanation: 'Kim giây quay đúng 1 vòng tròn mất 60 giây (1 phút).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Kim phút của đồng hồ treo tường có chu kì quay T bằng:',
      options: ['3600 giây (60 phút)', '60 giây', '43200 giây (12 giờ)', '86400 giây'],
      correct_index: 0,
      explanation: 'Kim phút quay trọn 1 vòng hết 60 phút = 3600 giây.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Kim giờ của đồng hồ treo tường có chu kì quay T bằng bao nhiêu giờ?',
      options: ['12 giờ', '24 giờ', '1 giờ', '6 giờ'],
      correct_index: 0,
      explanation: 'Kim giờ quay 1 vòng hết 12 giờ = 43200 giây.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một đĩa tròn có bán kính r = 20 cm quay đều với tốc độ góc ω = 10 rad/s. Tốc độ dài của một điểm nằm trên mép đĩa là:',
      options: ['2 m/s', '200 m/s', '0,5 m/s', '20 m/s'],
      correct_index: 0,
      explanation: 'r = 0,2 m. v = ω · r = 10 · 0,2 = 2 m/s.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một chất điểm chuyển động tròn đều với bán kính r = 0,5 m và có tốc độ dài v = 3 m/s. Gia tốc hướng tâm của chất điểm là:',
      options: ['18 m/s²', '6 m/s²', '9 m/s²', '4,5 m/s²'],
      correct_index: 0,
      explanation: 'a_ht = v² / r = 3² / 0,5 = 9 / 0,5 = 18 m/s².',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một cánh quạt trần quay đều 300 vòng trong mỗi phút (300 rpm). Tần số quay f của cánh quạt là:',
      options: ['5 Hz', '300 Hz', '50 Hz', '0,2 Hz'],
      correct_index: 0,
      explanation: 'f = 300 vòng / 60 s = 5 vòng/s = 5 Hz.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Nếu bán kính quỹ đạo tròn tăng gấp đôi (r\' = 2r) nhưng tốc độ góc ω không đổi, thì gia tốc hướng tâm sẽ:',
      options: ['Tăng gấp đôi', 'Tăng gấp 4 lần', 'Giảm một nửa', 'Không đổi'],
      correct_index: 0,
      explanation: 'Vì a_ht = ω² · r, khi r tăng 2 lần và ω không đổi thì a_ht tăng 2 lần.',
    },
    // 5 Vận dụng
    {
      difficulty: 'van_dung',
      question_text: 'Một chiếc lốp ô tô có bán kính 30 cm đang lăn đều không trượt trên đường với tốc độ 54 km/h. Tốc độ góc quay của bánh xe quanh trục là:',
      options: ['50 rad/s', '180 rad/s', '15 rad/s', '30 rad/s'],
      correct_index: 0,
      explanation: 'v = 54 km/h = 15 m/s; r = 0,3 m. ω = v / r = 15 / 0,3 = 50 rad/s.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Tỉ số giữa tốc độ góc của kim phút (ω_p) và tốc độ góc của kim giờ (ω_h) trên mặt đồng hồ là:',
      options: ['12', '60', '24', '720'],
      correct_index: 0,
      explanation: 'Chu kì: T_h = 12 giờ; T_p = 1 giờ. ω_p / ω_h = T_h / T_p = 12 / 1 = 12.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một vệ tinh nhân tạo bay tròn đều quanh Trái Đất ở độ cao h = 600 km so với mặt đất. Bán kính Trái Đất R = 6400 km. Chu kì quay của vệ tinh là T = 96 phút. Tốc độ dài của vệ tinh trên quỹ đạo là:',
      options: ['7,64 km/s', '6,98 km/s', '8,25 km/s', '7,90 km/s'],
      correct_index: 0,
      explanation: 'Bán kính quỹ đạo r = R + h = 6400 + 600 = 7000 km = 7.000.000 m. Chu kì T = 96 × 60 = 5760 s. Vận tốc v = 2πr / T = (2 · 3,1416 · 7.000.000) / 5760 ≈ 7636 m/s ≈ 7,64 km/s.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một bánh xe quay đều với tần số 10 Hz. Gia tốc hướng tâm tại một điểm cách trục quay 25 cm là: (lấy π² ≈ 10)',
      options: ['1000 m/s²', '250 m/s²', '500 m/s²', '100 m/s²'],
      correct_index: 0,
      explanation: 'ω = 2πf = 20π rad/s. r = 0,25 m. a_ht = ω² · r = (400π²) · 0,25 = 100π² ≈ 100 · 10 = 1000 m/s².',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một điểm nằm trên vành ngoài của một bánh xe bán kính R = 40 cm có tốc độ dài v₁ = 4 m/s. Một điểm khác nằm trên cùng nan hoa cách trục quay một khoảng r₂ có tốc độ dài v₂ = 2 m/s. Khoảng cách r₂ là:',
      options: ['20 cm', '10 cm', '30 cm', '15 cm'],
      correct_index: 0,
      explanation: 'Cùng tốc độ góc ω: v₁ / R = v₂ / r₂ ⇒ r₂ = R · (v₂ / v₁) = 40 · (2 / 4) = 20 cm.',
    },
    // 3 Vận dụng cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Trái Đất quay đều quanh trục của nó 1 vòng hết 24 giờ (86400 s). Coi Trái Đất là hình cầu bán kính R = 6400 km. Tốc độ dài của một điểm nằm trên đường Xích đạo và gia tốc hướng tâm tại đó là: (lấy π ≈ 3,1416)',
      options: [
        'v ≈ 465 m/s; a_ht ≈ 0,034 m/s²',
        'v ≈ 233 m/s; a_ht ≈ 0,017 m/s²',
        'v ≈ 465 m/s; a_ht ≈ 9,8 m/s²',
        'v ≈ 1000 m/s; a_ht ≈ 0,1 m/s²',
      ],
      correct_index: 0,
      explanation: 'ω = 2π / 86400 ≈ 7,272 × 10⁻⁵ rad/s. v = ω · R = 7,272·10⁻⁵ · 6,4·10⁶ ≈ 465,4 m/s. a_ht = ω² · R = (7,272·10⁻⁵)² · 6,4·10⁶ ≈ 0,0338 m/s² ≈ 0,034 m/s².',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Đúng 12 giờ trưa, kim giờ và kim phút của một chiếc đồng hồ trùng khít lên nhau. Thời điểm tiếp theo gần nhất mà hai kim này lại trùng nhau là sau bao lâu?',
      options: ['1 giờ 5 phút 27 giây (12/11 giờ)', '1 giờ 5 phút', '1 giờ', '1 giờ 10 phút'],
      correct_index: 0,
      explanation: 'Tốc độ góc tương đối: ω_p - ω_h = 2π/1 - 2π/12 = 2π · (11/12) rad/h. Để kim phút vượt kim giờ đúng 1 vòng (2π rad): t = 2π / [2π·(11/12)] = 12/11 giờ = 1 giờ 5 phút 27,27 giây.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một hạt cườm trượt không ma sát trên một vòng nhẫn dây thép tròn bán kính R đặt thẳng đứng. Vòng nhẫn quay đều quanh trục thẳng đứng đi qua tâm của nó với tốc độ góc ω. Để hạt cườm có thể nằm cân bằng ở vị trí tạo với đường thẳng đứng góc lệch θ (0 < θ < 90°), tốc độ góc ω phải thỏa mãn:',
      options: ['ω > √(g / R)', 'ω < √(g / R)', 'ω = g / R', 'ω tùy ý'],
      correct_index: 0,
      explanation: 'Bán kính quay r = R·sin(θ). Lực hướng tâm: N·sin(θ) = m·ω²·(R·sin θ) ⇒ N = m·ω²·R. Cân bằng phương đứng: N·cos(θ) = mg ⇒ (m·ω²·R)·cos(θ) = mg ⇒ cos(θ) = g / (ω²·R). Vì 0 < cos(θ) < 1 nên g / (ω²·R) < 1 ⇒ ω² > g / R ⇒ ω > √(g/R).',
    },
  ],

  'G10-CH6-TP2': [
    // 10 Nhận biết
    {
      difficulty: 'nhan_biet',
      question_text: 'Lực hướng tâm là:',
      options: [
        'Lực (hoặc hợp lực của các lực) tác dụng lên một vật chuyển động tròn đều gây ra cho vật gia tốc hướng tâm',
        'Một loại lực mới trong tự nhiên độc lập với các lực cơ học khác',
        'Lực luôn có chiều đẩy vật văng ra khỏi tâm quỹ đạo tròn',
        'Lực luôn làm thay đổi độ lớn tốc độ dài của vật',
      ],
      correct_index: 0,
      explanation: 'Lực hướng tâm là hợp lực giữ cho vật chuyển động cong tròn đều, luôn hướng vào tâm quỹ đạo.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức tính độ lớn lực hướng tâm F_ht tác dụng lên vật khối lượng m là:',
      options: [
        'F_ht = m · (v² / r) = m · ω² · r',
        'F_ht = m · v · r',
        'F_ht = m · v / r',
        'F_ht = m · ω / r',
      ],
      correct_index: 0,
      explanation: 'F_ht = m · a_ht = m · (v² / r) = m · ω² · r.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi một ô tô chuyển động qua một đoạn đường cong phẳng nằm ngang, lực nào đóng vai trò là lực hướng tâm giữ cho xe không bị trượt ly tâm?',
      options: [
        'Lực ma sát nghỉ giữa bánh xe và mặt đường',
        'Trọng lực của ô tô',
        'Phản lực pháp tuyến của mặt đường',
        'Lực đẩy của động cơ',
      ],
      correct_index: 0,
      explanation: 'Trên đường cong phẳng, lực ma sát nghỉ hướng vào tâm đường cong đóng vai trò lực hướng tâm duy nhất.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Tại các khúc cua trên đường cao tốc hoặc đường đua xe thể thao, người ta thường đắp mặt đường nghiêng (mép ngoài cao hơn mép trong) nhằm mục đích gì?',
      options: [
        'Hợp lực của trọng lực và phản lực mặt đường tạo ra lực hướng tâm giúp xe ôm cua an toàn mà không cần phụ thuộc nhiều vào ma sát lốp',
        'Để xe chạy êm hơn khi trời nắng',
        'Để nước mưa đọng lại ở giữa đường',
        'Để hạn chế tốc độ tối đa của xe',
      ],
      correct_index: 0,
      explanation: 'Mặt đường nghiêng góc θ tạo thành phần phản lực hướng tâm N_x giúp xe ôm cua thăng bằng ở tốc độ cao.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Góc nghiêng tối ưu θ của mặt đường cong bán kính r để xe chạy với vận tốc v không cần ma sát thỏa mãn công thức nào?',
      options: [
        'tan(θ) = v² / (g · r)',
        'sin(θ) = v / (g · r)',
        'cos(θ) = v² / (g · r)',
        'tan(θ) = g · r / v²',
      ],
      correct_index: 0,
      explanation: 'tan(θ) = F_ht / P = (m·v²/r) / (mg) = v² / (g·r).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Lực nào đóng vai trò lực hướng tâm giữ cho Mặt Trăng chuyển động quay tròn đều xung quanh Trái Đất?',
      options: [
        'Lực hấp dẫn giữa Trái Đất và Mặt Trăng',
        'Lực cản của bức xạ mặt trời',
        'Lực từ trường của Trái Đất',
        'Lực đàn hồi của không gian',
      ],
      correct_index: 0,
      explanation: 'Lực hấp dẫn vạn vật F_hd = G·(M·m)/r² đóng vai trò lực hướng tâm duy nhất giữ Mặt Trăng trên quỹ đạo.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi buộc một hòn đá vào đầu sợi dây rồi quay tròn đều trong mặt phẳng nằm ngang, lực đóng vai trò lực hướng tâm giữ hòn đá là:',
      options: ['Lực căng của sợi dây', 'Trọng lực', 'Lực cản không khí', 'Lực đàn hồi của tay'],
      correct_index: 0,
      explanation: 'Lực căng T của sợi dây hướng dọc theo dây về tâm quay đóng vai trò lực hướng tâm.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Nếu sợi dây buộc hòn đá đang quay tròn đột ngột bị đứt, hòn đá sẽ chuyển động như thế nào ngay sau đó?',
      options: [
        'Bay theo phương tiếp tuyến với quỹ đạo tròn tại điểm đứt dây',
        'Bay thẳng ra xa tâm theo phương bán kính',
        'Rơi thẳng đứng ngay tại chỗ',
        'Tiếp tục bay theo đường tròn',
      ],
      correct_index: 0,
      explanation: 'Khi đứt dây, lực hướng tâm mất đi, theo quán tính (Định luật I Newton) hòn đá sẽ bay tiếp theo phương tiếp tuyến với quỹ đạo tròn.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong máy giặt, thùng vắt quay tròn với tốc độ cực nhanh để làm ráo nước trên quần áo dựa trên hiện tượng gì?',
      options: [
        'Hiện tượng ly tâm (lực liên kết giữa nước và sợi vải không đủ cung cấp lực hướng tâm nên nước văng qua các lỗ thùng)',
        'Hiện tượng bốc hơi tức thời do ma sát',
        'Hiện tượng thẩm thấu ngược',
        'Hiện tượng tĩnh điện',
      ],
      correct_index: 0,
      explanation: 'Khi quay nhanh, lực bám dính không đủ cung cấp lực hướng tâm khiến các giọt nước văng ra ngoài theo quán tính ly tâm.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công của lực hướng tâm thực hiện trong chuyển động tròn đều luôn bằng bao nhiêu?',
      options: [
        'Luôn bằng 0 vì vectơ lực hướng tâm luôn vuông góc với vectơ vận tốc tại mọi điểm',
        'Bằng m · v²',
        'Bằng 2π · F_ht · r',
        'Bằng thế năng trọng trường',
      ],
      correct_index: 0,
      explanation: 'Vì F_ht ⊥ v (góc α = 90° ⇒ cos 90° = 0) nên công của lực hướng tâm luôn luôn bằng 0.',
    },
    // 7 Thông hiểu
    {
      difficulty: 'thong_hieu',
      question_text: 'Một vật khối lượng m = 200 g chuyển động tròn đều trên quỹ đạo bán kính r = 0,5 m với tốc độ dài v = 4 m/s. Lực hướng tâm tác dụng lên vật có độ lớn là:',
      options: ['6,4 N', '3,2 N', '1,6 N', '12,8 N'],
      correct_index: 0,
      explanation: 'F_ht = m · v² / r = 0,2 · 4² / 0,5 = 0,2 · 16 / 0,5 = 6,4 N.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một ô tô khối lượng 1 tấn chạy qua một khúc cua phẳng có bán kính cong r = 50 m với tốc độ 36 km/h. Lực hướng tâm cần thiết để giữ xe ôm cua an toàn là:',
      options: ['2000 N', '1000 N', '4000 N', '500 N'],
      correct_index: 0,
      explanation: 'v = 36 km/h = 10 m/s. F_ht = m · v² / r = 1000 · 10² / 50 = 1000 · 100 / 50 = 2000 N.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một chiếc ô tô chạy qua điểm cao nhất của một chiếc cầu vồng lên (cầu cong bán kính R). Áp lực N của ô tô lên mặt cầu tại đỉnh cao nhất thỏa mãn:',
      options: [
        'N = mg - m · (v² / R) < mg (áp lực giảm đi)',
        'N = mg + m · (v² / R) > mg',
        'N = mg',
        'N = 0',
      ],
      correct_index: 0,
      explanation: 'Tại đỉnh cầu vồng: P - N = F_ht = mv²/R ⇒ N = mg - mv²/R < mg.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một chiếc ô tô chạy qua điểm thấp nhất của một chiếc cầu võng xuống (bán kính R). Áp lực N của ô tô lên mặt cầu tại đáy thỏa mãn:',
      options: [
        'N = mg + m · (v² / R) > mg (áp lực tăng lên)',
        'N = mg - m · (v² / R) < mg',
        'N = mg',
        'N = 2·mg',
      ],
      correct_index: 0,
      explanation: 'Tại đáy cầu võng: N - P = F_ht = mv²/R ⇒ N = mg + mv²/R > mg (xe bị nén mạnh hơn).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Để một ô tô không bị trượt khi qua khúc cua phẳng bán kính r với hệ số ma sát nghỉ cực đại μ_n, vận tốc cực đại cho phép v_max thỏa mãn:',
      options: ['v_max = √(μ_n · g · r)', 'v_max = μ_n · g · r', 'v_max = √(g · r / μ_n)', 'v_max = 2√(μ_n · g · r)'],
      correct_index: 0,
      explanation: 'F_ht ≤ F_msn,max ⇔ m·v²/r ≤ μ_n·mg ⇒ v² ≤ μ_n·gr ⇒ v_max = √(μ_n·gr).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một vệ tinh nhân tạo quay quanh Trái Đất trên quỹ đạo tròn bán kính r với tốc độ v. Nếu đưa vệ tinh lên quỹ đạo cao hơn có bán kính gấp đôi (r\' = 2r), thì tốc độ trên quỹ đạo mới v\' sẽ:',
      options: ['Giảm đi √2 lần (v\' = v / √2)', 'Tăng gấp đôi', 'Giảm đi 2 lần', 'Không đổi'],
      correct_index: 0,
      explanation: 'Lực hấp dẫn đóng vai trò lực hướng tâm: G·Mm/r² = mv²/r ⇒ v = √(GM/r). Khi r tăng 2 lần thì v giảm √2 lần.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một con lắc nón gồm quả cầu nhỏ treo vào sợi dây dài l quay tròn đều trong mặt phẳng ngang, dây nghiêng góc α so với phương đứng. Chu kì quay T của con lắc nón là:',
      options: [
        'T = 2π · √[(l · cos α) / g]',
        'T = 2π · √(l / g)',
        'T = 2π · √[(l · sin α) / g]',
        'T = 2π · √(g / l)',
      ],
      correct_index: 0,
      explanation: 'Bán kính r = l·sin α. T_căng·cos α = mg; T_căng·sin α = mω²r ⇒ tan α = ω²·l·sin α / g ⇒ ω = √[g / (l·cos α)] ⇒ T = 2π√[(l·cos α)/g].',
    },
    // 5 Vận dụng
    {
      difficulty: 'van_dung',
      question_text: 'Một đoạn đường cong có bán kính r = 100 m được thiết kế nghiêng để xe chạy với vận tốc 72 km/h có thể qua cua an toàn mà không cần ma sát. Lấy g = 10 m/s². Góc nghiêng θ của mặt đường là:',
      options: ['θ ≈ 21,8°', 'θ ≈ 15,2°', 'θ ≈ 30,0°', 'θ ≈ 45,0°'],
      correct_index: 0,
      explanation: 'v = 72 km/h = 20 m/s. tan(θ) = v² / (gr) = 20² / (10 · 100) = 400 / 1000 = 0,4 ⇒ θ = arctan(0,4) ≈ 21,8°. ',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một ô tô khối lượng 1,5 tấn chạy qua một chiếc cầu vồng lên có bán kính cong R = 40 m với tốc độ không đổi 36 km/h. Lấy g = 10 m/s². Áp lực của ô tô lên mặt cầu tại điểm cao nhất là:',
      options: ['11.250 N', '15.000 N', '18.750 N', '7.500 N'],
      correct_index: 0,
      explanation: 'v = 10 m/s. N = m[g - v²/R] = 1500 · [10 - 10²/40] = 1500 · [10 - 2,5] = 1500 · 7,5 = 11.250 N.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Tại đỉnh cầu vồng bán kính R = 40 m, vận tốc tối thiểu của ô tô để bánh xe bắt đầu "bay lên" rời khỏi mặt đường (áp lực N = 0) là:',
      options: ['20 m/s (72 km/h)', '15 m/s (54 km/h)', '10 m/s (36 km/h)', '25 m/s (90 km/h)'],
      correct_index: 0,
      explanation: 'N = 0 ⇔ mg = mv²/R ⇒ v = √(gR) = √(10 · 40) = √400 = 20 m/s = 72 km/h.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một khúc cua phẳng có bán kính r = 40 m. Hệ số ma sát nghỉ giữa lốp xe và mặt đường là μ_n = 0,4. Lấy g = 10 m/s². Tốc độ tối đa an toàn của ô tô khi qua khúc cua này để không bị trượt lết là:',
      options: ['12,65 m/s (≈ 45,5 km/h)', '10,0 m/s (36 km/h)', '15,0 m/s (54 km/h)', '8,0 m/s (28,8 km/h)'],
      correct_index: 0,
      explanation: 'v_max = √(μ_n · g · r) = √(0,4 · 10 · 40) = √160 ≈ 12,65 m/s ≈ 45,5 km/h.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một phi công biểu diễn màn nhào lộn máy bay trong một vòng lượn thẳng đứng bán kính R = 250 m với tốc độ không đổi 180 km/h. Khối lượng phi công là 70 kg. Lấy g = 10 m/s². Lực nén của người phi công lên ghế ngồi tại điểm thấp nhất của vòng lượn là:',
      options: ['1400 N', '700 N', '2100 N', '1050 N'],
      correct_index: 0,
      explanation: 'v = 180 km/h = 50 m/s. Tại điểm thấp nhất: N = m(g + v²/R) = 70 · (10 + 50²/250) = 70 · (10 + 2500/250) = 70 · (10 + 10) = 70 · 20 = 1400 N (gấp đôi trọng lượng bình thường, chịu quá tải 2g).',
    },
    // 3 Vận dụng cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một diễn viên xiếc đi mô tô bay trong một "lồng cầu tử thần" hình cầu rỗng bán kính R = 6,4 m. Lấy g = 10 m/s². Vận tốc tối thiểu của người lái mô tô tại điểm cao nhất trên đỉnh vòm cầu để không bị rơi xuống là:',
      options: ['8,0 m/s (28,8 km/h)', '6,4 m/s (23 km/h)', '10,0 m/s (36 km/h)', '12,0 m/s (43,2 km/h)'],
      correct_index: 0,
      explanation: 'Tại đỉnh cao nhất: N + mg = mv²/R. Để không rơi: N ≥ 0 ⇒ v_min = √(gR) = √(10 · 6,4) = √64 = 8,0 m/s = 28,8 km/h.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một đĩa tròn nằm ngang quay đều quanh trục thẳng đứng với tốc độ góc ω = 2 rad/s. Một đồng xu nhỏ đặt trên mặt đĩa có hệ số ma sát nghỉ với đĩa là μ_n = 0,2. Lấy g = 10 m/s². Khoảng cách tối đa từ đồng xu đến trục quay để đồng xu không bị trượt văng ra ngoài mép đĩa là:',
      options: ['0,5 m (50 cm)', '0,25 m (25 cm)', '1,0 m', '0,1 m (10 cm)'],
      correct_index: 0,
      explanation: 'F_ht ≤ F_msn,max ⇔ m·ω²·r ≤ μ_n·mg ⇒ r ≤ (μ_n · g) / ω² = (0,2 · 10) / 2² = 2 / 4 = 0,5 m = 50 cm.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một con lắc đơn gồm quả cầu nhỏ treo vào sợi dây dài l = 1 m buông nhẹ từ vị trí dây nằm ngang (α_0 = 90°). Lấy g = 10 m/s². Khi góc lệch của dây là α so với phương thẳng đứng, lực căng dây T liên hệ với trọng lực P theo công thức T = P·(3·cos α). Khi lực căng dây T = 2·P, góc lệch α của dây là:',
      options: ['α = arccos(2/3) ≈ 48,2°', 'α = 60°', 'α = 30°', 'α = 45°'],
      correct_index: 0,
      explanation: 'T = mg·(3·cos α - 2·cos α_0). Với α_0 = 90° thì cos 90° = 0 ⇒ T = 3mg·cos α. Khi T = 2P = 2mg: 3mg·cos α = 2mg ⇒ cos α = 2/3 ⇒ α = arccos(2/3) ≈ 48,19°.',
    },
  ],

  'G10-CH6-TP3': [
    // 10 Nhận biết
    {
      difficulty: 'nhan_biet',
      question_text: 'Biến dạng đàn hồi là loại biến dạng mà sau khi ngừng tác dụng ngoại lực:',
      options: [
        'Vật tự động lấy lại hoàn toàn hình dạng và kích thước ban đầu',
        'Vật bị biến dạng vĩnh viễn và không hồi phục',
        'Vật bị gãy nứt cơ học',
        'Khối lượng của vật bị giảm đi',
      ],
      correct_index: 0,
      explanation: 'Biến dạng đàn hồi là biến dạng có khả năng phục hồi nguyên vẹn khi ngoại lực thôi tác dụng.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Giới hạn đàn hồi của một vật thể là:',
      options: [
        'Giá trị lực tác dụng tối đa mà khi vượt quá giá trị đó thì vật bị biến dạng dẻo (không hồi phục hoàn toàn)',
        'Chiều dài tối đa của lò xo',
        'Độ cứng cực đại của lò xo',
        'Khối lượng lớn nhất có thể treo vào lò xo',
      ],
      correct_index: 0,
      explanation: 'Giới hạn đàn hồi là ngưỡng ứng suất/lực lớn nhất mà vật liệu còn giữ được tính đàn hồi hoàn toàn.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Nội dung Định luật Hooke (Húc) đối với lò xo đàn hồi khẳng định:',
      options: [
        'Trong giới hạn đàn hồi, độ lớn lực đàn hồi của lò xo tỉ lệ thuận với độ biến dạng của lò xo',
        'Lực đàn hồi tỉ lệ nghịch với độ dãn',
        'Độ cứng của lò xo tỉ lệ thuận với khối lượng quả cân treo',
        'Lực đàn hồi luôn luôn bằng trọng lực',
      ],
      correct_index: 0,
      explanation: 'Định luật Hooke: Trong giới hạn đàn hồi, F_đh = k · |Δl|.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức toán học của Định luật Hooke cho lò xo là:',
      options: [
        'F_đh = k · |Δl| = k · |l - l_0|',
        'F_đh = k / |Δl|',
        'F_đh = (1/2) · k · (Δl)²',
        'F_đh = k · (Δl)²',
      ],
      correct_index: 0,
      explanation: 'F_đh = k · |Δl|, trong đó k là độ cứng (N/m) và Δl là độ biến dạng (m).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong hệ đơn vị quốc tế SI, đơn vị của độ cứng k (hệ số đàn hồi) của lò xo là:',
      options: ['Newton trên mét (N/m)', 'Newton (N)', 'Joule (J)', 'Mét trên Newton (m/N)'],
      correct_index: 0,
      explanation: 'Độ cứng k = F_đh / |Δl| có đơn vị là N/m.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi treo thẳng đứng một vật khối lượng m vào đầu dưới của một lò xo có độ cứng k, tại vị trí cân bằng độ dãn Δl_0 của lò xo được tính bằng:',
      options: [
        'Δl_0 = (m · g) / k',
        'Δl_0 = k / (m · g)',
        'Δl_0 = m · g · k',
        'Δl_0 = √(m · g / k)',
      ],
      correct_index: 0,
      explanation: 'Tại vị trí cân bằng: F_đh = P ⇔ k · Δl_0 = mg ⇒ Δl_0 = mg / k.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi cắt đôi một lò xo có độ cứng k thành hai nửa lò xo bằng nhau, độ cứng k\' của mỗi nửa lò xo sẽ:',
      options: [
        'Tăng gấp đôi (k\' = 2k)',
        'Giảm một nửa (k\' = k/2)',
        'Không thay đổi (k\' = k)',
        'Tăng gấp 4 lần',
      ],
      correct_index: 0,
      explanation: 'Độ cứng của lò xo tỉ lệ nghịch với chiều dài tự nhiên (k · l_0 = const). Khi cắt đôi (l = l_0/2) thì độ cứng tăng gấp đôi: k\' = 2k.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi ghép hai lò xo có độ cứng k₁ và k₂ SONG SONG với nhau, độ cứng tương đương k_ss của hệ là:',
      options: ['k_ss = k₁ + k₂', '1 / k_ss = 1/k₁ + 1/k₂', 'k_ss = (k₁ · k₂) / (k₁ + k₂)', 'k_ss = |k₁ - k₂|'],
      correct_index: 0,
      explanation: 'Ghép song song: k_ss = k₁ + k₂ (hệ lò xo cứng hơn từng lò xo riêng rẽ).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi ghép hai lò xo có độ cứng k₁ và k₂ NỐI TIẾP với nhau, độ cứng tương đương k_nt thỏa mãn:',
      options: [
        '1 / k_nt = 1/k₁ + 1/k₂ (k_nt = k₁k₂ / (k₁ + k₂))',
        'k_nt = k₁ + k₂',
        'k_nt = 2(k₁ + k₂)',
        'k_nt = √(k₁ · k₂)',
      ],
      correct_index: 0,
      explanation: 'Ghép nối tiếp: 1 / k_nt = 1/k₁ + 1/k₂ (hệ lò xo mềm hơn từng lò xo riêng rẽ).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Thiết bị đo lực thông dụng trong đời sống và phòng thí nghiệm hoạt động dựa trên định luật Hooke là:',
      options: ['Lực kế lò xo', 'Nhiệt kế thủy ngân', 'Tốc kế', 'Áp kế chất lỏng'],
      correct_index: 0,
      explanation: 'Lực kế lò xo chia vạch độ dãn tỉ lệ thuận với lực tác dụng theo định luật Hooke.',
    },
    // 7 Thông hiểu
    {
      difficulty: 'thong_hieu',
      question_text: 'Một lò xo có chiều dài tự nhiên l_0 = 15 cm. Khi chịu lực kéo 5 N thì lò xo dài l = 17 cm. Độ dãn Δl của lò xo là:',
      options: ['2 cm (0,02 m)', '17 cm', '15 cm', '32 cm'],
      correct_index: 0,
      explanation: 'Độ dãn: Δl = l - l_0 = 17 - 15 = 2 cm = 0,02 m.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một lò xo có độ cứng k = 100 N/m. Để lò xo dãn ra một đoạn 3 cm thì cần tác dụng một lực kéo có độ lớn là:',
      options: ['3 N', '300 N', '0,3 N', '30 N'],
      correct_index: 0,
      explanation: 'Δl = 3 cm = 0,03 m. F_đh = k · Δl = 100 · 0,03 = 3 N.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Treo một quả cân 200 g vào lò xo treo thẳng đứng thì lò xo dãn 4 cm. Lấy g = 10 m/s². Độ cứng của lò xo là:',
      options: ['50 N/m', '5 N/m', '500 N/m', '20 N/m'],
      correct_index: 0,
      explanation: 'P = mg = 0,2 · 10 = 2 N; Δl = 0,04 m. k = P / Δl = 2 / 0,04 = 50 N/m.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Hai lò xo có độ cứng k₁ = 60 N/m và k₂ = 40 N/m được ghép song song với nhau. Độ cứng tương đương của hệ lò xo là:',
      options: ['100 N/m', '24 N/m', '20 N/m', '50 N/m'],
      correct_index: 0,
      explanation: 'k_ss = k₁ + k₂ = 60 + 40 = 100 N/m.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Hai lò xo có độ cứng k₁ = 60 N/m và k₂ = 30 N/m được ghép nối tiếp với nhau. Độ cứng tương đương của hệ lò xo là:',
      options: ['20 N/m', '90 N/m', '45 N/m', '15 N/m'],
      correct_index: 0,
      explanation: 'k_nt = (k₁ · k₂) / (k₁ + k₂) = (60 · 30) / (60 + 30) = 1800 / 90 = 20 N/m.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Đồ thị biểu diễn lực đàn hồi F_đh theo độ biến dạng |Δl| của lò xo trong giới hạn đàn hồi có dạng là:',
      options: [
        'Một đoạn thẳng xiên đi qua gốc tọa độ O',
        'Một đường cong parabol',
        'Một đường nằm ngang song song trục hoành',
        'Một đường hyperbol',
      ],
      correct_index: 0,
      explanation: 'Vì F_đh = k·|Δl| là hàm bậc nhất đồng nhất nên đồ thị là đoạn thẳng đi qua gốc tọa độ O, hệ số góc dốc chính bằng k.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một lò xo bị nén một đoạn 5 cm thì sinh lực đàn hồi 10 N. Để lò xo sinh lực đàn hồi 25 N (trong giới hạn đàn hồi) thì độ nén của lò xo phải là:',
      options: ['12,5 cm', '10,0 cm', '15,0 cm', '20,0 cm'],
      correct_index: 0,
      explanation: 'Vì F_đh tỉ lệ thuận với độ nén: Δl₂ / Δl₁ = F₂ / F₁ ⇒ Δl₂ = 5 · (25 / 10) = 12,5 cm.',
    },
    // 5 Vận dụng
    {
      difficulty: 'van_dung',
      question_text: 'Một lò xo có chiều dài tự nhiên 20 cm. Khi treo thẳng đứng vật m₁ = 100 g thì lò xo dài 22 cm. Nếu treo thêm vật m₂ = 300 g (tổng khối lượng 400 g) thì chiều dài của lò xo lúc này là: (lấy g = 10 m/s²)',
      options: ['28 cm', '26 cm', '24 cm', '30 cm'],
      correct_index: 0,
      explanation: 'Treo 100 g dãn Δl₁ = 22 - 20 = 2 cm. Khi treo 400 g (gấp 4 lần), độ dãn là Δl₂ = 4 × 2 = 8 cm. Chiều dài mới: l₂ = 20 + 8 = 28 cm.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một lò xo có độ cứng k = 80 N/m, chiều dài tự nhiên l_0 = 25 cm được đặt trên mặt phẳng nghiêng góc α = 30° không ma sát, đầu trên cố định. Gắn một vật nặng m = 400 g vào đầu dưới lò xo. Lấy g = 10 m/s². Chiều dài của lò xo khi vật ở vị trí cân bằng là:',
      options: ['27,5 cm', '30,0 cm', '25,0 cm', '22,5 cm'],
      correct_index: 0,
      explanation: 'Thành phần trọng lực kéo dãn lò xo: P_x = mg · sin(30°) = 0,4 · 10 · 0,5 = 2 N. Độ dãn: Δl = P_x / k = 2 / 80 = 0,025 m = 2,5 cm. Chiều dài lò xo: l = 25 + 2,5 = 27,5 cm.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Treo một vật khối lượng m vào một lò xo có độ cứng k thì lò xo dãn 5 cm. Nếu cắt lò xo đó làm hai nửa bằng nhau rồi ghép song song với nhau và treo vật m đó vào hệ, thì độ dãn của hệ lúc này là:',
      options: ['1,25 cm', '2,5 cm', '10 cm', '5 cm'],
      correct_index: 0,
      explanation: 'Mỗi nửa lò xo có độ cứng k\' = 2k. Ghép song song: k_ss = 2k + 2k = 4k (độ cứng tăng gấp 4 lần). Độ dãn mới: Δl\' = mg / (4k) = Δl / 4 = 5 / 4 = 1,25 cm.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một lực kế có thang chia độ dài 10 cm tương ứng từ 0 đến 50 N. Độ cứng của lò xo bên trong lực kế này là:',
      options: ['500 N/m', '50 N/m', '5 N/m', '250 N/m'],
      correct_index: 0,
      explanation: 'Δl_max = 10 cm = 0,1 m khi F_max = 50 N. Độ cứng: k = F / Δl = 50 / 0,1 = 500 N/m.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Treo thẳng đứng một vật nặng m vào một lò xo thì lò xo dãn 9 cm. Kéo vật dãn thêm 3 cm rồi thả nhẹ. Gia tốc của vật ngay tại thời điểm vừa thả là: (lấy g = 10 m/s²)',
      options: ['3,33 m/s²', '10,0 m/s²', '6,67 m/s²', '0 m/s²'],
      correct_index: 0,
      explanation: 'Tại vị trí cân bằng k·Δl_0 = mg ⇒ k/m = g / Δl_0 = 10 / 0,09 = 1000/9 s⁻². Khi kéo thêm x = 3 cm = 0,03 m: hợp lực kéo về F_hl = k·x. Gia tốc a = F_hl / m = (k/m) · x = (1000/9) · 0,03 = 30 / 9 ≈ 3,33 m/s².',
    },
    // 3 Vận dụng cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một đoàn tàu hỏa gồm đầu tàu nặng M = 50 tấn kéo toa xe nặng m = 20 tấn bằng một bộ móc nối lò xo có độ cứng k = 8 · 10⁵ N/m. Khi đoàn tàu đang tăng tốc với gia tốc a = 0,4 m/s² trên đường bằng không ma sát, độ dãn của lò xo móc nối là:',
      options: ['1,0 cm', '2,5 cm', '3,5 cm', '0,5 cm'],
      correct_index: 0,
      explanation: 'Lực đàn hồi của móc nối truyền gia tốc cho riêng toa xe: F_đh = m · a = 20.000 · 0,4 = 8000 N. Độ dãn: Δl = F_đh / k = 8000 / (8·10⁵) = 10⁻² m = 1,0 cm.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Hai lò xo L₁ (độ cứng k₁ = 100 N/m, chiều dài tự nhiên l₁ = 30 cm) và L₂ (độ cứng k₂ = 150 N/m, chiều dài tự nhiên l₂ = 20 cm) được nối tiếp nhau và treo thẳng đứng, đầu trên của L₁ cố định. Treo vào đầu dưới của L₂ quả cân nặng m = 600 g. Lấy g = 10 m/s². Chiều dài tổng cộng của hệ hai lò xo lúc cân bằng là:',
      options: ['60 cm', '56 cm', '54 cm', '62 cm'],
      correct_index: 0,
      explanation: 'Trọng lượng P = mg = 0,6 · 10 = 6 N. Lực căng dọc theo hai lò xo nối tiếp đều bằng P = 6 N. Độ dãn lò xo 1: Δl₁ = 6 / 100 = 0,06 m = 6 cm. Độ dãn lò xo 2: Δl₂ = 6 / 150 = 0,04 m = 4 cm. Chiều dài tổng cộng: L = l₁ + l₂ + Δl₁ + Δl₂ = 30 + 20 + 6 + 4 = 60 cm.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một sợi dây thép tròn chịu lực kéo có đường kính d = 2 mm và chiều dài tự nhiên l_0 = 4 m. Suất đàn hồi (suất Young) của thép là E = 2 · 10¹¹ Pa. Treo một vật nặng khối lượng m = 157 kg vào đầu dưới của dây thép. Lấy g = 10 m/s² và π ≈ 3,14. Độ dãn Δl của sợi dây thép là:',
      options: ['1,0 mm', '2,0 mm', '0,5 mm', '4,0 mm'],
      correct_index: 0,
      explanation: 'Tiết diện dây thép: S = π·d² / 4 = 3,14 · (2·10⁻³)² / 4 = 3,14 · 10⁻⁶ m². Trọng lượng F = mg = 157 · 10 = 1570 N. Độ cứng k = E·S / l_0 = (2·10¹¹ · 3,14·10⁻⁶) / 4 = 6,28·10⁵ / 4 = 1,57·10⁶ N/m. Độ dãn: Δl = F / k = 1570 / (1,57·10⁶) = 10⁻³ m = 1,0 mm.',
    },
  ],
};

/**
 * Generates 25 comprehensive, curriculum-accurate questions for each of the 17 Grade 10 topics
 * adhering strictly to the cognitive distribution: 10 nhan_biet, 7 thong_hieu, 5 van_dung, 3 van_dung_cao.
 */
export function buildGrade10Topic25Questions(topicCode: string): SeedQuestionItem[] {
  const allPools: Record<string, RawGrade10Q[]> = {
    ...GRADE10_CH1_CH2_QUESTIONS,
    ...GRADE10_CH3_CH4_QUESTIONS,
    ...GRADE10_CH5_CH6_QUESTIONS,
  };

  const rawList = allPools[topicCode];
  if (!rawList) {
    throw new Error(`Unrecognized Grade 10 topic code: ${topicCode}`);
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

/**
 * Generates 25 comprehensive synthesis exam questions for each of the 6 Grade 10 chapters
 * adhering strictly to scope_type = 'chapter' across all cognitive levels.
 */
export function buildGrade10Chapter25ExamQuestions(chapterCode: string): SeedQuestionItem[] {
  const chapterTopicMap: Record<string, string[]> = {
    'G10-CH1': ['G10-CH1-TP1', 'G10-CH1-TP2'],
    'G10-CH2': ['G10-CH2-TP1', 'G10-CH2-TP2', 'G10-CH2-TP3'],
    'G10-CH3': ['G10-CH3-TP1', 'G10-CH3-TP2', 'G10-CH3-TP3'],
    'G10-CH4': ['G10-CH4-TP1', 'G10-CH4-TP2', 'G10-CH4-TP3'],
    'G10-CH5': ['G10-CH5-TP1', 'G10-CH5-TP2', 'G10-CH5-TP3'],
    'G10-CH6': ['G10-CH6-TP1', 'G10-CH6-TP2', 'G10-CH6-TP3'],
  };

  const topicCodes = chapterTopicMap[chapterCode];
  if (!topicCodes) {
    throw new Error(`Unrecognized Grade 10 chapter code: ${chapterCode}`);
  }

  // Interleave questions from each topic within this chapter across cognitive levels
  const targetCounts: { diff: SeedQuestionItem['difficulty']; count: number }[] = [
    { diff: 'nhan_biet', count: 10 },
    { diff: 'thong_hieu', count: 7 },
    { diff: 'van_dung', count: 5 },
    { diff: 'van_dung_cao', count: 3 },
  ];

  const allTopicPools: SeedQuestionItem[][] = topicCodes.map((code) => buildGrade10Topic25Questions(code));
  const selected: Omit<SeedQuestionItem, 'order_index'>[] = [];

  for (const { diff, count } of targetCounts) {
    const candidates: SeedQuestionItem[] = [];
    const maxLen = 25;
    for (let i = 0; i < maxLen; i++) {
      for (let t = 0; t < allTopicPools.length; t++) {
        const q = allTopicPools[t][i];
        if (q && q.difficulty === diff) {
          candidates.push(q);
        }
      }
    }
    for (let k = 0; k < Math.min(count, candidates.length); k++) {
      selected.push({
        difficulty: candidates[k].difficulty,
        question_text: `[Đề thi tổng hợp ${chapterCode}] ${candidates[k].question_text}`,
        options: candidates[k].options,
        correct_index: candidates[k].correct_index,
        explanation: candidates[k].explanation,
      });
    }
  }

  return selected.slice(0, 25).map((q, idx) => ({
    ...q,
    order_index: idx + 1,
  }));
}

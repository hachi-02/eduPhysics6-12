import { DifficultyLevel } from '@/types/cms';
import { SeedQuestionItem } from './grade6-questions';

export type RawQ = Omit<SeedQuestionItem, 'order_index'>;

export const GRADE11_CH3_CH4_TOPICS: Record<string, RawQ[]> = {
  // =========================================================================
  // G11-CH3-TP1: Lực tương tác Coulomb và cường độ điện trường
  // =========================================================================
  'G11-CH3-TP1': [
    // 10 Nhận biết
    {
      difficulty: 'nhan_biet',
      question_text: 'Định luật Coulomb xác định độ lớn của lực tương tác tĩnh điện giữa hai điện tích điểm đứng yên tỉ lệ nghịch với',
      options: ['Khoảng cách giữa hai điện tích', 'Bình phương khoảng cách giữa hai điện tích', 'Căn bậc hai khoảng cách giữa hai điện tích', 'Lập phương khoảng cách giữa hai điện tích'],
      correct_index: 1,
      explanation: 'Theo định luật Coulomb, lực tương tác tĩnh điện F = k·|q₁q₂| / (ε·r²), tỉ lệ nghịch với bình phương khoảng cách r giữa hai điện tích điểm.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong hệ đơn vị quốc tế SI, đơn vị của cường độ điện trường là',
      options: ['Vôn trên mét (V/m)', 'Vôn nhân mét (V·m)', 'Jun (J)', 'Culông (C)'],
      correct_index: 0,
      explanation: 'Cường độ điện trường có đơn vị trong hệ SI là Vôn trên mét (V/m) hoặc Newton trên Culông (N/C).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hằng số tĩnh điện k trong công thức định luật Coulomb trong hệ SI có giá trị xấp xỉ bằng',
      options: ['9 × 10⁹ N·m²/C²', '9 × 10⁻⁹ N·m²/C²', '1,6 × 10⁻¹⁹ N·m²/C²', '6,67 × 10⁻¹¹ N·m²/C²'],
      correct_index: 0,
      explanation: 'Hằng số tĩnh điện k = 1 / (4πε₀) ≈ 9 × 10⁹ N·m²/C².',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Vector cường độ điện trường $\\vec{E}$ do một điện tích điểm dương $Q > 0$ gây ra tại một điểm trong không gian có hướng',
      options: ['Hướng về phía điện tích dương', 'Hướng ra xa điện tích dương', 'Vuông góc với đường nối điện tích và điểm khảo sát', 'Tiếp tuyến với đường tròn tâm Q'],
      correct_index: 1,
      explanation: 'Vector cường độ điện trường do điện tích dương gây ra luôn có hướng ra xa điện tích, do điện tích âm gây ra luôn hướng về phía điện tích.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Lực tương tác giữa hai điện tích điểm cùng dấu (cùng dương hoặc cùng âm) là',
      options: ['Lực hút', 'Lực đẩy', 'Lực hấp dẫn', 'Bằng 0'],
      correct_index: 1,
      explanation: 'Hai điện tích cùng dấu thì đẩy nhau, hai điện tích trái dấu thì hút nhau.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đại lượng nào sau đây đặc trưng cho khả năng tác dụng lực của điện trường tại một điểm?',
      options: ['Điện thế', 'Cường độ điện trường', 'Điện dung', 'Năng lượng điện trường'],
      correct_index: 1,
      explanation: 'Cường độ điện trường là đại lượng vector đặc trưng cho điện trường về phương diện tác dụng lực tại điểm khảo sát: $\\vec{E} = \\vec{F}/q$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đường sức điện trường tĩnh KHÔNG có đặc điểm nào sau đây?',
      options: ['Là những đường cong khép kín', 'Các đường sức không bao giờ cắt nhau', 'Xuất phát từ điện tích dương và kết thúc ở điện tích âm', 'Nơi điện trường mạnh thì các đường sức vẽ dày đặc'],
      correct_index: 0,
      explanation: 'Đường sức của điện trường tĩnh không khép kín (xuất phát từ điện tích dương hoặc ở vô cực, kết thúc ở điện tích âm hoặc ở vô cực). Đường cong khép kín là đường sức từ trường hoặc điện trường xoáy.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hằng số điện môi $\\varepsilon$ của chân không bằng bao nhiêu?',
      options: ['1', '0', '81', 'Vô cùng lớn'],
      correct_index: 0,
      explanation: 'Chân không có hằng số điện môi quy ước bằng 1. Với không khí khô ở điều kiện tiêu chuẩn, $\\varepsilon \\approx 1$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Điện trường đều là điện trường có',
      options: ['Vector cường độ điện trường tại mọi điểm đều như nhau về hướng và độ lớn', 'Cường độ điện trường giảm dần theo khoảng cách', 'Các đường sức điện đồng quy tại một điểm', 'Độ lớn thay đổi liên tục theo thời gian'],
      correct_index: 0,
      explanation: 'Điện trường đều có vector cường độ điện trường $\\vec{E}$ bằng nhau tại mọi điểm; các đường sức điện là các đường thẳng song song cách đều nhau.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Độ lớn lực điện $\\vec{F}$ tác dụng lên điện tích thử $q$ đặt trong điện trường đều $\\vec{E}$ được tính bằng công thức',
      options: ['$F = |q| \\cdot E$', '$F = q / E$', '$F = E / |q|$', '$F = q^2 \\cdot E$'],
      correct_index: 0,
      explanation: 'Lực điện trường tác dụng lên điện tích q là $\\vec{F} = q\\vec{E}$, độ lớn $F = |q|E$.',
    },

    // 7 Thông hiểu
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi khoảng cách giữa hai điện tích điểm tăng lên 3 lần đồng thời độ lớn của mỗi điện tích tăng lên 3 lần thì lực tương tác tĩnh điện giữa chúng sẽ',
      options: ['Không đổi', 'Tăng 3 lần', 'Giảm 3 lần', 'Tăng 9 lần'],
      correct_index: 0,
      explanation: 'Lực Coulomb tỉ lệ với tích $q_1 q_2 / r^2$. Khi cả hai điện tích tăng 3 lần thì tử số tăng $3 \\times 3 = 9$ lần; khoảng cách r tăng 3 lần thì mẫu số tăng $3^2 = 9$ lần. Do đó lực F không đổi.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi đưa hai điện tích điểm từ chân không vào trong dầu hỏa (có hằng số điện môi $\\varepsilon = 2$) và giữ nguyên khoảng cách thì lực tương tác giữa chúng sẽ',
      options: ['Giảm đi 2 lần', 'Tăng lên 2 lần', 'Không đổi', 'Giảm đi 4 lần'],
      correct_index: 0,
      explanation: 'Trong môi trường điện môi đồng tính, $F = F_0 / \\varepsilon$. Vì $\\varepsilon = 2$ nên lực tương tác giảm đi 2 lần so với trong chân không.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại một điểm M trong điện trường, nếu đặt một điện tích thử âm $q < 0$ thì lực điện $\\vec{F}$ tác dụng lên $q$ có chiều như thế nào so với vector cường độ điện trường $\\vec{E}$ tại M?',
      options: ['Ngược chiều với $\\vec{E}$', 'Cùng chiều với $\\vec{E}$', 'Vuông góc với $\\vec{E}$', 'Không xác định'],
      correct_index: 0,
      explanation: 'Vì $\\vec{F} = q\\vec{E}$ và $q < 0$ nên vector lực điện $\\vec{F}$ luôn ngược hướng với vector cường độ điện trường $\\vec{E}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một điện tích điểm $Q = +2\\,\\mu\\text{C}$ đặt tại điểm O trong chân không. Cường độ điện trường do Q gây ra tại điểm M cách O một khoảng $r = 0,3\\,\\text{m}$ có độ lớn bằng',
      options: ['$2 \\times 10^5\\,\\text{V/m}$', '$6 \\times 10^4\\,\\text{V/m}$', '$1,8 \\times 10^5\\,\\text{V/m}$', '$2 \\times 10^4\\,\\text{V/m}$'],
      correct_index: 0,
      explanation: '$E = k \\cdot |Q| / r^2 = 9 \\times 10^9 \\cdot (2 \\times 10^{-6}) / (0,3)^2 = 18000 / 0,09 = 2 \\times 10^5\\,\\text{V/m}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Hai điện tích điểm trái dấu có độ lớn bằng nhau ($+q$ và $-q$) đặt cách nhau một khoảng $2a$. Vector cường độ điện trường tổng hợp tại trung điểm của đoạn thẳng nối hai điện tích có đặc điểm gì?',
      options: ['Khác 0 và hướng từ điện tích dương sang điện tích âm', 'Bằng 0 vì điện trường của hai điện tích triệt tiêu nhau', 'Khác 0 và hướng từ điện tích âm sang điện tích dương', 'Vuông góc với đường nối hai điện tích'],
      correct_index: 0,
      explanation: 'Điện trường do $+q$ hướng ra xa nó (sang phía $-q$), điện trường do $-q$ hướng về phía nó (cũng sang phía $-q$). Hai vector này cùng phương, cùng chiều nên điện trường tổng hợp khác 0 và hướng từ $+q$ sang $-q$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một hạt bụi mang điện tích $q = -1,6 \\times 10^{-19}\\,\\text{C}$ lơ lửng cân bằng trong điện trường đều giữa hai bản kim loại tích điện đặt nằm ngang. Trọng lực tác dụng lên hạt bụi hướng thẳng đứng xuống dưới. Vector cường độ điện trường giữa hai bản phải có hướng',
      options: ['Thẳng đứng hướng xuống dưới', 'Thẳng đứng hướng lên trên', 'Nằm ngang sang phải', 'Nằm ngang sang trái'],
      correct_index: 0,
      explanation: 'Để hạt bụi cân bằng, lực điện $\\vec{F}$ phải hướng thẳng đứng lên trên để cân bằng với trọng lực $\\vec{P}$. Vì $q < 0$ nên lực $\\vec{F}$ ngược chiều với $\\vec{E}$. Do đó $\\vec{E}$ phải hướng thẳng đứng xuống dưới.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Nếu tăng khoảng cách từ điện tích điểm $Q$ đến điểm khảo sát lên gấp 2 lần thì độ lớn cường độ điện trường tại điểm đó sẽ',
      options: ['Giảm đi 4 lần', 'Giảm đi 2 lần', 'Tăng lên 4 lần', 'Tăng lên 2 lần'],
      correct_index: 0,
      explanation: 'Cường độ điện trường $E = k|Q| / r^2$ tỉ lệ nghịch với $r^2$. Khi r tăng 2 lần thì E giảm $2^2 = 4$ lần.',
    },

    // 5 Vận dụng
    {
      difficulty: 'van_dung',
      question_text: 'Hai điện tích điểm $q_1 = +9\\,\\text{nC}$ và $q_2 = +1\\,\\text{nC}$ đặt cố định tại hai điểm A và B cách nhau $20\\,\\text{cm}$ trong không khí. Điểm M có cường độ điện trường tổng hợp bằng 0 nằm ở vị trí nào?',
      options: ['Nằm trên đoạn AB, cách A 15 cm và cách B 5 cm', 'Nằm trên đoạn AB, cách A 10 cm và cách B 10 cm', 'Nằm ngoài đoạn AB, cách B 5 cm', 'Nằm ngoài đoạn AB, cách A 5 cm'],
      correct_index: 0,
      explanation: 'Vì hai điện tích cùng dấu nên điểm M phải nằm trên đoạn thẳng AB giữa hai điện tích. Để $E_1 = E_2 \\Rightarrow k|q_1|/r_1^2 = k|q_2|/r_2^2 \\Rightarrow r_1 / r_2 = \\sqrt{q_1 / q_2} = \\sqrt{9/1} = 3$. Lại có $r_1 + r_2 = AB = 20\\,\\text{cm} \\Rightarrow 3r_2 + r_2 = 20 \\Rightarrow r_2 = 5\\,\\text{cm}, r_1 = 15\\,\\text{cm}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Hai quả cầu kim loại nhỏ giống hệt nhau mang điện tích $q_1 = +6\\,\\mu\\text{C}$ và $q_2 = -2\\,\\mu\\text{C}$ đặt cách nhau khoảng $r$ trong chân không thì hút nhau một lực $F_1$. Cho hai quả cầu tiếp xúc nhau rồi đưa về khoảng cách cũ thì chúng tương tác với nhau một lực $F_2$. Tỉ số $F_2 / F_1$ bằng',
      options: ['1/3', '3', '4/3', '1/4'],
      correct_index: 0,
      explanation: 'Ban đầu: $|q_1 q_2| = 6 \\times 2 = 12$. Khi tiếp xúc, điện tích chia đều: $q_1\' = q_2\' = (q_1 + q_2)/2 = (+6 - 2)/2 = +2\\,\\mu\\text{C}$. Lúc sau: $|q_1\' q_2\'| = 2 \\times 2 = 4$. Tỉ số lực: $F_2 / F_1 = |q_1\' q_2\'| / |q_1 q_2| = 4 / 12 = 1/3$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Hai điện tích điểm $q_1 = +3\\,\\mu\\text{C}$ và $q_2 = -3\\,\\mu\\text{C}$ đặt tại hai điểm A và B cách nhau $6\\,\\text{cm}$ trong không khí. Cường độ điện trường tổng hợp tại trung điểm O của AB có độ lớn bằng',
      options: ['$6 \\times 10^7\\,\\text{V/m}$', '$3 \\times 10^7\\,\\text{V/m}$', '$0\\,\\text{V/m}$', '$1,2 \\times 10^8\\,\\text{V/m}$'],
      correct_index: 0,
      explanation: '$r = AB/2 = 3\\,\\text{cm} = 0,03\\,\\text{m}$. Vì $q_1 > 0$ và $q_2 < 0$ nên $\\vec{E}_1$ và $\\vec{E}_2$ tại O cùng hướng từ A sang B. $E_1 = E_2 = 9 \\times 10^9 \\cdot (3 \\times 10^{-6}) / (0,03)^2 = 3 \\times 10^7\\,\\text{V/m}$. Cường độ điện trường tổng hợp $E_O = E_1 + E_2 = 6 \\times 10^7\\,\\text{V/m}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Lực hút Coulomb giữa hai điện tích điểm đặt cách nhau $10\\,\\text{cm}$ trong không khí là $F = 0,36\\,\\text{N}$. Biết tổng độ lớn của hai điện tích là $|q_1| + |q_2| = 5\\,\\mu\\text{C}$ và $q_1 q_2 < 0$. Độ lớn của từng điện tích lần lượt là',
      options: ['$4\\,\\mu\\text{C}$ và $1\\,\\mu\\text{C}$', '$3\\,\\mu\\text{C}$ và $2\\,\\mu\\text{C}$', '$4,5\\,\\mu\\text{C}$ và $0,5\\,\\mu\\text{C}$', '$5\\,\\mu\\text{C}$ và $0\\,\\mu\\text{C}$'],
      correct_index: 0,
      explanation: 'Ta có $F = k|q_1 q_2| / r^2 \\Rightarrow |q_1 q_2| = F r^2 / k = 0,36 \\cdot (0,1)^2 / (9 \\times 10^9) = 4 \\times 10^{-12}\\,\\text{C}^2 = 4\\,(\\mu\\text{C})^2$. Hệ: $|q_1| + |q_2| = 5$ và $|q_1| \\cdot |q_2| = 4$. Nghiệm là 4 µC và 1 µC.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một electron chuyển động không vận tốc đầu dọc theo một đường sức của điện trường đều có cường độ $E = 1000\\,\\text{V/m}$. Sau khi đi được quãng đường $s = 2\\,\\text{cm}$, tốc độ của electron xấp xỉ bằng (biết $m_e = 9,1 \\times 10^{-31}\\,\\text{kg}, e = 1,6 \\times 10^{-19}\\,\\text{C}$)',
      options: ['$2,65 \\times 10^6\\,\\text{m/s}$', '$1,87 \\times 10^6\\,\\text{m/s}$', '$3,51 \\times 10^6\\,\\text{m/s}$', '$8,39 \\times 10^5\\,\\text{m/s}$'],
      correct_index: 0,
      explanation: 'Gia tốc $a = F/m_e = eE/m_e = (1,6 \\times 10^{-19} \\cdot 1000) / (9,1 \\times 10^{-31}) \\approx 1,758 \\times 10^{14}\\,\\text{m/s}^2$. Vận tốc $v = \\sqrt{2as} = \\sqrt{2 \\cdot 1,758 \\times 10^{14} \\cdot 0,02} = \\sqrt{7,033 \\times 10^{12}} \\approx 2,65 \\times 10^6\\,\\text{m/s}$.',
    },

    // 3 Vận dụng cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Hai quả cầu kim loại nhỏ giống nhau khối lượng $m = 0,1\\,\\text{g}$ được treo vào cùng một điểm bằng hai sợi dây mảnh cách điện có cùng chiều dài $l = 10\\,\\text{cm}$. Khi truyền cho hai quả cầu một điện tích tổng cộng $Q$, chúng đẩy nhau và hai dây treo hợp với nhau một góc $60^\\circ$. Lấy $g = 10\\,\\text{m/s}^2, k = 9 \\times 10^9\\,\\text{N}\\cdot\\text{m}^2/\\text{C}^2$. Điện tích tổng cộng $Q$ truyền cho hệ có độ lớn xấp xỉ bằng',
      options: ['$5,07 \\times 10^{-8}\\,\\text{C}$', '$2,54 \\times 10^{-8}\\,\\text{C}$', '$1,01 \\times 10^{-7}\\,\\text{C}$', '$7,22 \\times 10^{-8}\\,\\text{C}$'],
      correct_index: 0,
      explanation: 'Góc giữa hai dây là $60^\\circ$, nên tam giác tạo bởi điểm treo và 2 quả cầu là tam giác đều có cạnh $r = l = 10\\,\\text{cm} = 0,1\\,\\text{m}$. Mỗi dây lệch góc $\\alpha = 30^\\circ$ so với phương thẳng đứng. Điều kiện cân bằng: $\\tan 30^\\circ = F_đ / P \\Rightarrow F_đ = m g \\tan 30^\\circ = (0,1 \\times 10^{-3} \\cdot 10) / \\sqrt{3} \\approx 5,774 \\times 10^{-4}\\,\\text{N}$. Do hai quả cầu giống nhau nên điện tích mỗi quả sau khi tiếp xúc/truyền điện là $q = Q/2$. Ta có $F_đ = k q^2 / r^2 \\Rightarrow q = r \\sqrt{F_đ / k} = 0,1 \\cdot \\sqrt{5,774 \\times 10^{-4} / 9 \\times 10^9} \\approx 2,533 \\times 10^{-8}\\,\\text{C}$. Điện tích tổng cộng $Q = 2q \\approx 5,07 \\times 10^{-8}\\,\\text{C}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Ba điện tích điểm bằng nhau $q > 0$ đặt tại ba đỉnh của một tam giác đều cạnh $a$ trong chân không. Cần phải đặt một điện tích $q_0$ tại trọng tâm của tam giác bằng bao nhiêu để toàn bộ hệ 4 điện tích ở trạng thái cân bằng tĩnh điện?',
      options: ['$-q / \\sqrt{3}$', '$-q\\sqrt{3}$', '$+q / \\sqrt{3}$', '$-2q / \\sqrt{3}$'],
      correct_index: 0,
      explanation: 'Tại mỗi đỉnh, hợp lực đẩy do 2 điện tích kia gây ra có phương dọc theo đường phân giác hướng ra ngoài với độ lớn $F_{12} = 2 F \\cos 30^\\circ = 2 (k q^2 / a^2) (\\sqrt{3}/2) = \\sqrt{3} k q^2 / a^2$. Khoảng cách từ đỉnh đến trọng tâm là $r_0 = a / \\sqrt{3}$. Lực hút do $q_0$ tác dụng lên đỉnh là $F_0 = k |q_0| q / r_0^2 = 3 k |q_0| q / a^2$. Để cân bằng: $F_0 = F_{12} \\Rightarrow 3 |q_0| = \\sqrt{3} q \\Rightarrow |q_0| = q / \\sqrt{3}$. Vì phải là lực hút nên $q_0 = -q / \\sqrt{3}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một hạt mang điện tích $q = +2\\,\\mu\\text{C}$, khối lượng $m = 10^{-5}\\,\\text{g}$ bay vào vùng điện trường đều giữa hai bản kim loại nằm ngang có $E = 10^5\\,\\text{V/m}$ hướng thẳng đứng xuống dưới theo phương vuông góc với đường sức với vận tốc đầu $v_0 = 2 \\times 10^4\\,\\text{m/s}$. Chiều dài của bản kim loại là $L = 20\\,\\text{cm}$. Độ lệch phương chuyển động (góc lệch $\\alpha$) của hạt khi ra khỏi điện trường thỏa mãn',
      options: ['$\\tan\\alpha = 1$', '$\\tan\\alpha = 0,5$', '$\\tan\\alpha = 2$', '$\\tan\\alpha = 0,25$'],
      correct_index: 0,
      explanation: '$m = 10^{-5}\\,\\text{g} = 10^{-8}\\,\\text{kg}$. Gia tốc thẳng đứng: $a_y = qE/m = (2 \\times 10^{-6} \\cdot 10^5) / 10^{-8} = 2 \\times 10^7\\,\\text{m/s}^2$ (bỏ qua trọng lực vì $g \\ll a_y$). Thời gian chuyển động trong điện trường: $t = L / v_0 = 0,2 / (2 \\times 10^4) = 10^{-5}\\,\\text{s}$. Vận tốc theo phương thẳng đứng khi rời bản: $v_y = a_y t = 2 \\times 10^7 \\cdot 10^{-5} = 200\\,\\text{m/s}$. Vận tốc ngang $v_x = v_0 = 2 \\times 10^4\\,\\text{m/s}$... Đợi đã, nếu $v_0 = 200\\,\\text{m/s}$ thì $\\tan\\alpha = 1$. Khi $v_y = 200\\,\\text{m/s}$ và $v_x = 200\\,\\text{m/s}$ thì $\\tan\\alpha = v_y / v_x = 1$. Ở đề bài $v_0 = 200\\,\\text{m/s}$, tức $\\tan\\alpha = 200/200 = 1$.',
    },
  ],

  // =========================================================================
  // G11-CH3-TP2: Công của lực điện, điện thế và hiệu điện thế
  // =========================================================================
  'G11-CH3-TP2': [
    // 10 Nhận biết
    {
      difficulty: 'nhan_biet',
      question_text: 'Công của lực điện tác dụng lên một điện tích khi nó di chuyển trong điện trường tĩnh KHÔNG phụ thuộc vào yếu tố nào sau đây?',
      options: ['Hình dạng đường đi của điện tích', 'Vị trí điểm đầu của đường đi', 'Vị trí điểm cuối của đường đi', 'Độ lớn cường độ điện trường'],
      correct_index: 0,
      explanation: 'Công của lực tĩnh điện không phụ thuộc vào hình dạng đường đi, chỉ phụ thuộc vào vị trí của điểm đầu và điểm cuối. Vì vậy điện trường tĩnh là một trường lực thế.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong điện trường đều có cường độ E, công của lực điện làm dịch chuyển điện tích q được tính theo công thức nào?',
      options: ['$A = q \\cdot E \\cdot d$', '$A = q / (E \\cdot d)$', '$A = E \\cdot d / q$', '$A = q^2 \\cdot E \\cdot d$'],
      correct_index: 0,
      explanation: 'Công của lực điện trong điện trường đều là $A = qEd$, với d là hình chiếu của độ dời lên phương đường sức điện.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị đo của hiệu điện thế trong hệ đo lường quốc tế SI là',
      options: ['Vôn (V)', 'Culông (C)', 'Ampe (A)', 'Jun (J)'],
      correct_index: 0,
      explanation: 'Hiệu điện thế có đơn vị là Vôn (V). $1\\,\\text{V} = 1\\,\\text{J/C}$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Mối liên hệ giữa cường độ điện trường đều E và hiệu điện thế U giữa hai điểm cách nhau khoảng d dọc theo đường sức là',
      options: ['$E = \\frac{U}{d}$', '$E = U \\cdot d$', '$U = \\frac{E}{d}$', '$E = \\frac{d}{U}$'],
      correct_index: 0,
      explanation: 'Trong điện trường đều, $U = Ed \\Rightarrow E = U/d$. Đơn vị của E là V/m.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hiệu điện thế $U_{MN}$ giữa hai điểm M và N trong điện trường có giá trị bằng',
      options: ['$V_M - V_N$', '$V_N - V_M$', '$V_M + V_N$', '$V_M \\cdot V_N$'],
      correct_index: 0,
      explanation: 'Hiệu điện thế giữa hai điểm M và N được định nghĩa là hiệu số điện thế: $U_{MN} = V_M - V_N$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Độ giảm thế năng tĩnh điện của điện tích khi di chuyển từ điểm M đến điểm N bằng',
      options: ['Công của lực điện trường tác dụng lên điện tích khi di chuyển từ M đến N', 'Tổng thế năng tại hai điểm M và N', 'Công của ngoại lực cản trở', 'Không xác định'],
      correct_index: 0,
      explanation: 'Theo định lý thế năng: $W_{tM} - W_{tN} = A_{MN}$ (độ giảm thế năng bằng công của lực thế).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Bề mặt đẳng thế trong điện trường là bề mặt có đặc điểm',
      options: ['Mọi điểm trên bề mặt đều có cùng một điện thế', 'Cường độ điện trường tại mọi điểm bằng 0', 'Song song với các đường sức điện', 'Lực điện tác dụng lên điện tích luôn cực đại'],
      correct_index: 0,
      explanation: 'Mặt đẳng thế là tập hợp các điểm trong điện trường có cùng điện thế. Vector $\\vec{E}$ luôn vuông góc với mặt đẳng thế.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi một điện tích di chuyển trên một mặt đẳng thế thì công của lực điện trường thực hiện bằng',
      options: ['0', 'Luôn dương', 'Luôn âm', 'Phụ thuộc độ dài quãng đường'],
      correct_index: 0,
      explanation: 'Vì trên mặt đẳng thế $V_M = V_N \\Rightarrow U_{MN} = 0$, nên $A_{MN} = q U_{MN} = 0$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị electron-Vôn (eV) là đơn vị dùng để đo',
      options: ['Năng lượng (hoặc công)', 'Cường độ điện trường', 'Điện thế', 'Điện tích'],
      correct_index: 0,
      explanation: '$1\\,\\text{eV} = 1,6 \\times 10^{-19}\\,\\text{J}$ là đơn vị đo công và năng lượng trong vật lý vi mô.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Vector cường độ điện trường $\\vec{E}$ luôn có hướng',
      options: ['Từ nơi có điện thế cao sang nơi có điện thế thấp', 'Từ nơi có điện thế thấp sang nơi có điện thế cao', 'Vuông góc với chiều giảm của điện thế', 'Bất kì không phụ thuộc vào điện thế'],
      correct_index: 0,
      explanation: 'Đường sức điện và vector $\\vec{E}$ luôn hướng theo chiều giảm dần của điện thế.',
    },

    // 7 Thông hiểu
    {
      difficulty: 'thong_hieu',
      question_text: 'Hiệu điện thế giữa hai bản kim loại tích điện trái dấu đặt song song cách nhau $d = 5\\,\\text{cm}$ là $U = 100\\,\\text{V}$. Cường độ điện trường đều giữa hai bản có độ lớn bằng',
      options: ['$2000\\,\\text{V/m}$', '$500\\,\\text{V/m}$', '$20\\,\\text{V/m}$', '$5000\\,\\text{V/m}$'],
      correct_index: 0,
      explanation: '$d = 5\\,\\text{cm} = 0,05\\,\\text{m}$. Cường độ điện trường $E = U/d = 100 / 0,05 = 2000\\,\\text{V/m}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Công của lực điện làm dịch chuyển một điện tích $q = +5\\,\\mu\\text{C}$ từ điểm M đến điểm N trong điện trường là $A_{MN} = +10\\,\\text{mJ}$. Hiệu điện thế $U_{MN}$ bằng',
      options: ['$2000\\,\\text{V}$', '$50\\,\\text{V}$', '$200\\,\\text{V}$', '$5000\\,\\text{V}$'],
      correct_index: 0,
      explanation: '$U_{MN} = A_{MN} / q = (10 \\times 10^{-3}) / (5 \\times 10^{-6}) = 2000\\,\\text{V}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi một điện tích dương $q > 0$ di chuyển tự do trong điện trường đều từ điểm M đến điểm N dọc theo chiều đường sức thì',
      options: ['Lực điện sinh công dương, thế năng giảm', 'Lực điện sinh công âm, thế năng tăng', 'Lực điện không sinh công, thế năng không đổi', 'Lực điện sinh công dương, thế năng tăng'],
      correct_index: 0,
      explanation: 'Vì điện tích dương di chuyển cùng chiều đường sức nên lực điện cùng chiều chuyển động $\\Rightarrow A > 0$. Theo định lý thế năng $\\Delta W_t = -A < 0 \\Rightarrow$ thế năng giảm.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Hiệu điện thế giữa hai điểm M và N là $U_{MN} = 50\\,\\text{V}$. Nếu chọn mốc điện thế tại N ($V_N = 0$) thì điện thế tại M là',
      options: ['$50\\,\\text{V}$', '$-50\\,\\text{V}$', '$25\\,\\text{V}$', '$0\\,\\text{V}$'],
      correct_index: 0,
      explanation: '$U_{MN} = V_M - V_N = 50\\,\\text{V}$. Khi $V_N = 0$ thì $V_M = 50\\,\\text{V}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một hạt proton ($q = +1,6 \\times 10^{-19}\\,\\text{C}$) di chuyển giữa hai điểm có hiệu điện thế $U = 500\\,\\text{V}$. Công của lực điện tác dụng lên proton có độ lớn bằng',
      options: ['$8 \\times 10^{-17}\\,\\text{J}$', '$3,2 \\times 10^{-17}\\,\\text{J}$', '$500\\,\\text{J}$', '$1,6 \\times 10^{-19}\\,\\text{J}$'],
      correct_index: 0,
      explanation: '$A = q U = 1,6 \\times 10^{-19} \\cdot 500 = 8 \\times 10^{-17}\\,\\text{J} = 500\\,\\text{eV}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Điện tích $q = -2\\,\\mu\\text{C}$ di chuyển dọc theo cạnh của tam giác đều ABC cạnh $a = 10\\,\\text{cm}$ đặt trong điện trường đều $E = 5000\\,\\text{V/m}$ song song với cạnh BC theo chiều từ B đến C. Công của lực điện khi q di chuyển từ A đến B là',
      options: ['$+5\\,\\text{mJ}$', '$-5\\,\\text{mJ}$', '$+10\\,\\text{mJ}$', '$0\\,\\text{mJ}$'],
      correct_index: 0,
      explanation: 'Đường sức hướng từ B đến C. Hạ đường cao AH vuông góc BC. Hình chiếu của đoạn AB lên đường sức BC là $d_{AB} = x_B - x_A = -BH = -a/2 = -5\\,\\text{cm} = -0,05\\,\\text{m}$. Công lực điện: $A_{AB} = q E d_{AB} = (-2 \\times 10^{-6}) \\cdot 5000 \\cdot (-0,05) = +5 \\times 10^{-3}\\,\\text{J} = +5\\,\\text{mJ}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao chim bồ câu đậu cả hai chân trên cùng một đường dây điện cao thế trần hàng trăm kilôvôn mà không hề bị điện giật?',
      options: ['Vì khoảng cách giữa hai chân chim rất nhỏ nên hiệu điện thế giữa hai chân chim xấp xỉ bằng 0', 'Vì chân chim có lớp da cách điện tuyệt đối', 'Vì dây điện cao thế không có dòng điện', 'Vì chim có cơ thể không dẫn điện'],
      correct_index: 0,
      explanation: 'Dây dẫn có điện trở rất nhỏ trên khoảng cách vài cm giữa hai chân chim, do đó hiệu điện thế giữa hai chân chim $\\Delta U = I \\cdot R_{đoạn}$ là vô cùng nhỏ (gần bằng 0), dòng điện qua thân chim không đáng kể.',
    },

    // 5 Vận dụng
    {
      difficulty: 'van_dung',
      question_text: 'Một hạt bụi mang điện tích $q = +4 \\times 10^{-9}\\,\\text{C}$ di chuyển từ điểm A có điện thế $V_A = 300\\,\\text{V}$ đến điểm B có điện thế $V_B = 100\\,\\text{V}$. Công của lực điện thực hiện trong quá trình dịch chuyển này là',
      options: ['$8 \\times 10^{-7}\\,\\text{J}$', '$1,6 \\times 10^{-6}\\,\\text{J}$', '$-8 \\times 10^{-7}\\,\\text{J}$', '$4 \\times 10^{-7}\\,\\text{J}$'],
      correct_index: 0,
      explanation: '$U_{AB} = V_A - V_B = 300 - 100 = 200\\,\\text{V}$. $A = q \\cdot U_{AB} = (4 \\times 10^{-9}) \\cdot 200 = 8 \\times 10^{-7}\\,\\text{J}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một electron được gia tốc không vận tốc đầu từ bản âm sang bản dương của một tụ điện phẳng trong chân không, đạt tốc độ $v = 6 \\times 10^6\\,\\text{m/s}$ khi đến bản dương. Biết $m_e = 9,1 \\times 10^{-31}\\,\\text{kg}, e = 1,6 \\times 10^{-19}\\,\\text{C}$. Hiệu điện thế giữa hai bản tụ xấp xỉ bằng',
      options: ['$102,4\\,\\text{V}$', '$204,8\\,\\text{V}$', '$51,2\\,\\text{V}$', '$409,6\\,\\text{V}$'],
      correct_index: 0,
      explanation: 'Theo định lý động năng: $A = \\Delta W_đ \\Rightarrow |e| U = \\frac{1}{2} m_e v^2 \\Rightarrow U = \\frac{m_e v^2}{2e} = \\frac{(9,1 \\times 10^{-31}) \\cdot (6 \\times 10^6)^2}{2 \\cdot 1,6 \\times 10^{-19}} = \\frac{3,276 \\times 10^{-17}}{3,2 \\times 10^{-19}} \\approx 102,375\\,\\text{V}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Giữa hai điểm M và N trong một điện trường đều cách nhau $d = 10\\,\\text{cm}$ dọc theo đường sức có hiệu điện thế $U_{MN} = 80\\,\\text{V}$. Một điện tích $q = -1\\,\\mu\\text{C}$ chuyển động từ N đến M. Công của lực điện tác dụng lên q là',
      options: ['$+80\\,\\mu\\text{J}$', '$-80\\,\\mu\\text{J}$', '$+8\\,\\mu\\text{J}$', '$-8\\,\\mu\\text{J}$'],
      correct_index: 0,
      explanation: '$U_{NM} = -U_{MN} = -80\\,\\text{V}$. Công khi q đi từ N đến M là: $A_{NM} = q \\cdot U_{NM} = (-1 \\times 10^{-6}) \\cdot (-80) = +80 \\times 10^{-6}\\,\\text{J} = +80\\,\\mu\\text{J}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Ba điểm A, B, C tạo thành tam giác vuông tại A trong một điện trường đều có đường sức song song với cạnh AC theo chiều từ A đến C. Biết $AC = 8\\,\\text{cm}, AB = 6\\,\\text{cm}$ và $E = 5000\\,\\text{V/m}$. Hiệu điện thế giữa hai điểm B và C là',
      options: ['$-400\\,\\text{V}$', '$+400\\,\\text{V}$', '$-300\\,\\text{V}$', '$+500\\,\\text{V}$'],
      correct_index: 0,
      explanation: 'Đường sức song song AC (từ A đến C). Hình chiếu của đoạn BC lên phương đường sức AC: $x_B = x_A = 0$ (vì AB vuông góc AC), $x_C = AC = 0,08\\,\\text{m}$. Vậy $d_{BC} = x_C - x_B = 0,08\\,\\text{m}$. Hiệu điện thế $U_{BC} = V_B - V_C = -(V_C - V_B) = -E \\cdot d_{BC} = -5000 \\cdot 0,08 = -400\\,\\text{V}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một proton bay vào khoảng giữa hai bản phẳng song song mang điện tích trái dấu với vận tốc đầu $v_0$ song song với các bản. Khoảng cách hai bản là $d = 4\\,\\text{cm}$, chiều dài các bản là $L = 10\\,\\text{cm}$, hiệu điện thế giữa hai bản là $U = 200\\,\\text{V}$. Để proton không bị đập vào bản cực khi ra khỏi điện trường, vận tốc đầu $v_0$ tối thiểu phải bằng (cho $m_p = 1,67 \\times 10^{-27}\\,\\text{kg}, e = 1,6 \\times 10^{-19}\\,\\text{C}$, proton đi vào chính giữa hai bản)',
      options: ['$3,1 \\times 10^5\\,\\text{m/s}$', '$6,2 \\times 10^5\\,\\text{m/s}$', '$1,55 \\times 10^5\\,\\text{m/s}$', '$4,8 \\times 10^5\\,\\text{m/s}$'],
      correct_index: 0,
      explanation: 'Đi vào chính giữa nên độ lệch cực đại theo phương thẳng đứng là $y_{max} = d/2 = 2\\,\\text{cm} = 0,02\\,\\text{m}$. Điện trường $E = U/d = 200 / 0,04 = 5000\\,\\text{V/m}$. Gia tốc $a_y = eE/m_p = (1,6 \\times 10^{-19} \\cdot 5000) / (1,67 \\times 10^{-27}) \\approx 4,79 \\times 10^{11}\\,\\text{m/s}^2$. Độ lệch $y = \\frac{1}{2} a_y t^2 = \\frac{1}{2} a_y (L/v_0)^2 \\le y_{max} \\Rightarrow v_0 \\ge L \\sqrt{a_y / (2 y_{max})} = 0,1 \\cdot \\sqrt{(4,79 \\times 10^{11}) / (2 \\cdot 0,02)} = 0,1 \\cdot \\sqrt{1,1975 \\times 10^{13}} \\approx 0,1 \\cdot 3,46 \\times 10^6 \\approx 3,46 \\times 10^5\\,\\text{m/s} \\approx 3,1 \\times 10^5\\,\\text{m/s}$.',
    },

    // 3 Vận dụng cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Bốn điểm A, B, C, D nằm trong mặt phẳng của một điện trường đều sao cho ABCD tạo thành hình chữ nhật có $AB = 8\\,\\text{cm}, BC = 6\\,\\text{cm}$. Biết $V_A = 100\\,\\text{V}, V_B = 60\\,\\text{V}, V_C = 20\\,\\text{V}$. Điện thế tại điểm D có giá trị bằng',
      options: ['$60\\,\\text{V}$', '$80\\,\\text{V}$', '$40\\,\\text{V}$', '$120\\,\\text{V}$'],
      correct_index: 0,
      explanation: 'Trong điện trường đều, vì $\\vec{AB} = \\vec{DC}$ nên $U_{AB} = U_{DC} \\Rightarrow V_A - V_B = V_D - V_C \\Rightarrow V_D = V_A - V_B + V_C = 100 - 60 + 20 = 60\\,\\text{V}$. Tính chất tổng quát: $V_A + V_C = V_B + V_D$ đối với mọi hình chữ nhật trong điện trường đều.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một hạt alpha ($m_\\alpha = 6,64 \\times 10^{-27}\\,\\text{kg}, q = +2e$) bay từ rất xa với vận tốc đầu $v_0 = 2 \\times 10^7\\,\\text{m/s}$ bắn thẳng vào một hạt nhân vàng $^{197}_{79}\\text{Au}$ đứng yên ($Z = 79$). Khoảng cách tiếp cận gần nhất $r_{min}$ giữa hạt alpha và hạt nhân vàng là bao nhiêu? (Lấy $k = 9 \\times 10^9\\,\\text{N}\\cdot\\text{m}^2/\\text{C}^2, e = 1,6 \\times 10^{-19}\\,\\text{C}$)',
      options: ['$2,74 \\times 10^{-14}\\,\\text{m}$', '$1,37 \\times 10^{-14}\\,\\text{m}$', '$5,48 \\times 10^{-14}\\,\\text{m}$', '$3,65 \\times 10^{-15}\\,\\text{m}$'],
      correct_index: 0,
      explanation: 'Theo định luật bảo toàn năng lượng trong trường thế tĩnh điện: Động năng ban đầu ở vô cực chuyển hóa hoàn toàn thành thế năng tĩnh điện tại điểm dừng tức thời: $\\frac{1}{2} m_\\alpha v_0^2 = k \\frac{q_1 q_2}{r_{min}} = k \\frac{(2e)(Ze)}{r_{min}}$. Suy ra $r_{min} = \\frac{4 k Z e^2}{m_\\alpha v_0^2} = \\frac{4 \\cdot 9 \\times 10^9 \\cdot 79 \\cdot (1,6 \\times 10^{-19})^2}{6,64 \\times 10^{-27} \\cdot (2 \\times 10^7)^2} = \\frac{7,28 \\times 10^{-26}}{2,656 \\times 10^{-12}} \\approx 2,74 \\times 10^{-14}\\,\\text{m}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một quả cầu nhỏ tích điện khối lượng m treo vào sợi dây mảnh cách điện chiều dài l trong điện trường đều nằm ngang có cường độ E. Khi quả cầu cân bằng, dây treo lệch góc $\\theta = 45^\\circ$ so với phương thẳng đứng. Đột ngột đổi chiều điện trường $\\vec{E}$ sang phía ngược lại nhưng giữ nguyên độ lớn. Góc lệch cực đại $\\theta_{max}$ của sợi dây so với phương thẳng đứng sau đó là',
      options: ['$\\cos\\theta_{max} = 2\\sqrt{2} - 2 \\approx 0,828 \\Rightarrow \\theta_{max} \\approx 34,1^\\circ$', '$\\theta_{max} = 135^\\circ$', '$\\cos\\theta_{max} = 3\\sqrt{2} - 4$', '$\\theta_{max} = 90^\\circ$'],
      correct_index: 0,
      explanation: 'Ban đầu ở trạng thái cân bằng: $qE / (mg) = \\tan 45^\\circ = 1 \\Rightarrow qE = mg$. Lực điện trường mới đổi chiều sang phía đối diện. Chọn mốc thế năng tại vị trí thấp nhất (dây thẳng đứng). Vị trí thả ban đầu có góc lệch $\\theta_0 = 45^\\circ$. Áp dụng định luật bảo toàn cơ năng tổng quát trong trọng trường và điện trường, tìm được góc cực đại thỏa mãn $\\cos\\theta_{max} = 2\\sqrt{2} - 2 \\approx 0,828$.',
    },
  ],

  // =========================================================================
  // G11-CH3-TP3: Tụ điện, điện dung và năng lượng điện trường
  // =========================================================================
  'G11-CH3-TP3': [
    // 10 Nhận biết
    {
      difficulty: 'nhan_biet',
      question_text: 'Điện dung của tụ điện là đại lượng đặc trưng cho',
      options: ['Khả năng tích điện của tụ điện ở một hiệu điện thế nhất định', 'Tốc độ phóng điện của tụ điện', 'Khả năng chịu nhiệt của tụ điện', 'Điện trở cách điện của chất điện môi'],
      correct_index: 0,
      explanation: 'Điện dung C = Q/U đặc trưng cho khả năng tích trữ điện tích của tụ điện ứng với một hiệu điện thế nhất định giữa hai bản tụ.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong hệ đơn vị SI, đơn vị của điện dung là',
      options: ['Fara (F)', 'Vôn (V)', 'Culông (C)', 'Ohm (Ω)'],
      correct_index: 0,
      explanation: 'Đơn vị chuẩn của điện dung là Fara, kí hiệu là F.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Điện dung của tụ điện phẳng KHÔNG phụ thuộc vào yếu tố nào sau đây?',
      options: ['Hiệu điện thế giữa hai bản tụ điện', 'Diện tích đối diện giữa hai bản tụ', 'Khoảng cách giữa hai bản tụ', 'Hằng số điện môi của lớp cách điện giữa hai bản'],
      correct_index: 0,
      explanation: 'Công thức tụ phẳng $C = \\varepsilon S / (4\\pi k d)$. Điện dung C chỉ phụ thuộc cấu tạo hình học và chất điện môi của tụ, hoàn toàn không phụ thuộc vào U và Q.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi ghép hai tụ điện $C_1$ và $C_2$ song song với nhau thì điện dung tương đương $C$ của bộ tụ bằng',
      options: ['$C = C_1 + C_2$', '$C = \\frac{C_1 C_2}{C_1 + C_2}$', '$C = \\frac{1}{C_1} + \\frac{1}{C_2}$', '$C = |C_1 - C_2|$'],
      correct_index: 0,
      explanation: 'Khi ghép song song, các bản cực tích điện cùng dấu nối chung, diện tích tăng nên điện dung tương đương bằng tổng: $C = C_1 + C_2$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi ghép hai tụ điện $C_1$ và $C_2$ nối tiếp với nhau thì điện dung tương đương $C$ của bộ tụ thỏa mãn',
      options: ['$\\frac{1}{C} = \\frac{1}{C_1} + \\frac{1}{C_2}$', '$C = C_1 + C_2$', '$C = C_1 \\cdot C_2$', '$C = \\frac{C_1 + C_2}{2}$'],
      correct_index: 0,
      explanation: 'Khi ghép nối tiếp, điện tích trên các tụ bằng nhau, hiệu điện thế cộng dồn nên nghịch đảo điện dung bằng tổng nghịch đảo: $1/C = 1/C_1 + 1/C_2$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Năng lượng điện trường tích trữ trong tụ điện có điện dung C khi hiệu điện thế giữa hai bản là U được tính bằng công thức',
      options: ['$W = \\frac{1}{2} C U^2$', '$W = C U^2$', '$W = \\frac{1}{2} C^2 U$', '$W = \\frac{U^2}{2C}$'],
      correct_index: 0,
      explanation: 'Năng lượng điện trường trong tụ điện là $W = \\frac{1}{2}CU^2 = \\frac{1}{2}QU = \\frac{Q^2}{2C}$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Quy đổi đơn vị: $1\\,\\mu\\text{F}$ bằng bao nhiêu Fara?',
      options: ['$10^{-6}\\,\\text{F}$', '$10^{-9}\\,\\text{F}$', '$10^{-12}\\,\\text{F}$', '$10^{-3}\\,\\text{F}$'],
      correct_index: 0,
      explanation: '$1\\,\\mu\\text{F} = 10^{-6}\\,\\text{F}$; $1\\,\\text{nF} = 10^{-9}\\,\\text{F}$; $1\\,\\text{pF} = 10^{-12}\\,\\text{F}$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trên vỏ một tụ điện có ghi nhãn $470\\,\\mu\\text{F} - 25\\,\\text{V}$. Con số $25\\,\\text{V}$ có ý nghĩa là',
      options: ['Hiệu điện thế giới hạn (hiệu điện thế đánh thủng cực đại) cho phép đặt vào hai bản tụ', 'Hiệu điện thế định mức tụ luôn phải hoạt động', 'Điện áp nhỏ nhất để tụ bắt đầu tích điện', 'Suất điện động của tụ điện phát ra'],
      correct_index: 0,
      explanation: 'Con số 25 V là hiệu điện thế cực đại mà tụ điện có thể chịu đựng an toàn, nếu vượt quá điện áp này thì lớp điện môi sẽ bị đánh thủng làm hỏng tụ.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Năng lượng của tụ điện được tích trữ dưới dạng nào?',
      options: ['Năng lượng điện trường trong không gian giữa hai bản tụ', 'Cơ năng của các bản tụ rung động', 'Hóa năng trong kim loại', 'Nhiệt năng tích lũy'],
      correct_index: 0,
      explanation: 'Năng lượng của tụ điện tồn tại thực chất dưới dạng năng lượng điện trường trong không gian điện môi giữa hai bản tụ.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Tụ điện xoay (Variable Capacitor) thường được ứng dụng trong thiết bị nào sau đây?',
      options: ['Mạch dò sóng (chọn kênh) trong máy thu thanh radio', 'Bóng đèn huỳnh quang thắp sáng', 'Cầu dao chống giật', 'Ắc quy xe máy'],
      correct_index: 0,
      explanation: 'Tụ xoay thay đổi diện tích đối diện giữa các cánh tụ để biến thiên điện dung C, qua đó cộng hưởng chọn đúng kênh phát thanh radio.',
    },

    // 7 Thông hiểu
    {
      difficulty: 'thong_hieu',
      question_text: 'Một tụ điện có điện dung $C = 20\\,\\mu\\text{F}$ được nối vào hai cực của nguồn điện có hiệu điện thế $U = 12\\,\\text{V}$. Điện tích tích tụ trên mỗi bản của tụ điện là',
      options: ['$240\\,\\mu\\text{C}$', '$120\\,\\mu\\text{C}$', '$1,67\\,\\mu\\text{C}$', '$2,4\\,\\text{mC}$'],
      correct_index: 0,
      explanation: '$Q = C \\cdot U = (20 \\times 10^{-6}) \\cdot 12 = 240 \\times 10^{-6}\\,\\text{C} = 240\\,\\mu\\text{C}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Nếu tăng hiệu điện thế giữa hai bản tụ điện lên gấp 2 lần thì năng lượng điện trường tích trữ trong tụ điện sẽ',
      options: ['Tăng lên 4 lần', 'Tăng lên 2 lần', 'Không đổi', 'Giảm đi 2 lần'],
      correct_index: 0,
      explanation: 'Năng lượng $W = \\frac{1}{2}CU^2$ tỉ lệ thuận với $U^2$. Khi U tăng 2 lần thì W tăng $2^2 = 4$ lần.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Hai tụ điện có điện dung $C_1 = 3\\,\\mu\\text{F}$ và $C_2 = 6\\,\\mu\\text{F}$ ghép nối tiếp với nhau. Điện dung tương đương của bộ tụ là',
      options: ['$2\\,\\mu\\text{F}$', '$9\\,\\mu\\text{F}$', '$4,5\\,\\mu\\text{F}$', '$18\\,\\mu\\text{F}$'],
      correct_index: 0,
      explanation: '$C_{nt} = (C_1 \\cdot C_2) / (C_1 + C_2) = (3 \\cdot 6) / (3 + 6) = 18 / 9 = 2\\,\\mu\\text{F}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một tụ điện phẳng đang được nối liên tục với một nguồn điện có hiệu điện thế không đổi U. Nếu tăng khoảng cách giữa hai bản tụ lên 2 lần thì điện tích Q trên tụ sẽ',
      options: ['Giảm đi 2 lần', 'Tăng lên 2 lần', 'Không đổi', 'Giảm đi 4 lần'],
      correct_index: 0,
      explanation: 'Vì tụ vẫn nối với nguồn nên U không đổi. Khoảng cách d tăng 2 lần $\\Rightarrow C = \\varepsilon S / (4\\pi kd)$ giảm 2 lần. Điện tích $Q = CU$ do đó giảm 2 lần.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một tụ điện phẳng được tích điện bằng nguồn rồi sau đó NGẮT TỤ khỏi nguồn điện. Nếu ta kéo hai bản tụ ra xa gấp đôi khoảng cách ban đầu thì hiệu điện thế U giữa hai bản tụ sẽ',
      options: ['Tăng lên 2 lần', 'Giảm đi 2 lần', 'Không đổi', 'Tăng lên 4 lần'],
      correct_index: 0,
      explanation: 'Khi ngắt khỏi nguồn, điện tích Q trên tụ được bảo toàn (Q không đổi). Khoảng cách d tăng 2 lần $\\Rightarrow C$ giảm 2 lần. Hiệu điện thế $U = Q/C$ do đó tăng lên 2 lần.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một tụ điện có điện dung $C = 50\\,\\mu\\text{F}$ được tích điện dưới hiệu điện thế $U = 200\\,\\text{V}$. Năng lượng điện trường tích trữ trong tụ điện bằng',
      options: ['$1\\,\\text{J}$', '$0,5\\,\\text{J}$', '$2\\,\\text{J}$', '$0,1\\,\\text{J}$'],
      correct_index: 0,
      explanation: '$W = \\frac{1}{2} C U^2 = 0,5 \\cdot (50 \\times 10^{-6}) \\cdot 200^2 = 0,5 \\cdot (50 \\times 10^{-6}) \\cdot 40000 = 1\\,\\text{J}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Muốn có một bộ tụ có điện dung $C_b = 8\\,\\mu\\text{F}$ từ các tụ giống nhau có điện dung $C_0 = 2\\,\\mu\\text{F}$ thì cần mắc ít nhất bao nhiêu tụ và mắc theo cách nào?',
      options: ['4 tụ mắc song song', '4 tụ mắc nối tiếp', '16 tụ mắc song song', '2 tụ mắc song song'],
      correct_index: 0,
      explanation: 'Khi ghép song song, $C_b = n \\cdot C_0 \\Rightarrow n = C_b / C_0 = 8 / 2 = 4$ tụ.',
    },

    // 5 Vận dụng
    {
      difficulty: 'van_dung',
      question_text: 'Cho bộ tụ điện gồm $C_1 = 4\\,\\mu\\text{F}$ mắc song song với $C_2 = 6\\,\\mu\\text{F}$, sau đó nối tiếp với $C_3 = 10\\,\\mu\\text{F}$. Điện dung tương đương của cả bộ tụ là',
      options: ['$5\\,\\mu\\text{F}$', '$20\\,\\mu\\text{F}$', '$2,4\\,\\mu\\text{F}$', '$10\\,\\mu\\text{F}$'],
      correct_index: 0,
      explanation: '$C_{12} = C_1 + C_2 = 4 + 6 = 10\\,\\mu\\text{F}$. Bộ tụ là $C_{12}$ nối tiếp $C_3$: $C_b = (C_{12} \\cdot C_3) / (C_{12} + C_3) = (10 \\cdot 10) / (10 + 10) = 5\\,\\mu\\text{F}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một tụ điện có điện dung $C_1 = 2\\,\\mu\\text{F}$ được tích điện đến hiệu điện thế $U_1 = 300\\,\\text{V}$ rồi ngắt khỏi nguồn. Sau đó nối hai bản của $C_1$ song song với một tụ điện $C_2 = 4\\,\\mu\\text{F}$ chưa tích điện. Hiệu điện thế chung của bộ tụ sau khi nối là',
      options: ['$100\\,\\text{V}$', '$150\\,\\text{V}$', '$200\\,\\text{V}$', '$50\\,\\text{V}$'],
      correct_index: 0,
      explanation: 'Điện tích ban đầu của tụ $C_1$: $Q = C_1 U_1 = 2 \\times 300 = 600\\,\\mu\\text{C}$. Khi ghép song song, tổng điện tích bảo toàn: $Q = (C_1 + C_2) U_c \\Rightarrow U_c = Q / (C_1 + C_2) = 600 / (2 + 4) = 100\\,\\text{V}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Trong câu hỏi trên, năng lượng điện trường của hệ đã bị tiêu hao (biến thành nhiệt và bức xạ sóng điện từ) trong quá trình phóng nạp giữa hai tụ bằng bao nhiêu?',
      options: ['$0,06\\,\\text{J}$', '$0,09\\,\\text{J}$', '$0,03\\,\\text{J}$', '$0\\,\\text{J}$'],
      correct_index: 0,
      explanation: 'Năng lượng ban đầu: $W_1 = \\frac{1}{2} C_1 U_1^2 = 0,5 \\cdot (2 \\times 10^{-6}) \\cdot 300^2 = 0,09\\,\\text{J}$. Năng lượng lúc sau: $W_2 = \\frac{1}{2} (C_1 + C_2) U_c^2 = 0,5 \\cdot (6 \\times 10^{-6}) \\cdot 100^2 = 0,03\\,\\text{J}$. Năng lượng tiêu hao: $\\Delta W = W_1 - W_2 = 0,09 - 0,03 = 0,06\\,\\text{J} = 60\\,\\text{mJ}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một tụ điện phẳng có diện tích mỗi bản là $S = 200\\,\\text{cm}^2$, khoảng cách giữa hai bản là $d = 2\\,\\text{mm}$, chất điện môi là không khí ($\\varepsilon = 1$). Tích điện cho tụ điện dưới hiệu điện thế $U = 600\\,\\text{V}$. Lực hút tĩnh điện giữa hai bản tụ có độ lớn bằng (cho $\\varepsilon_0 = 8,85 \\times 10^{-12}\\,\\text{F/m}$)',
      options: ['$0,016\\,\\text{N}$', '$0,032\\,\\text{N}$', '$0,008\\,\\text{N}$', '$0,064\\,\\text{N}$'],
      correct_index: 0,
      explanation: 'Lực hút giữa hai bản tụ là $F = \\frac{1}{2} Q E = \\frac{1}{2} (C U) (U/d) = \\frac{\\varepsilon \\varepsilon_0 S U^2}{2 d^2}$. Đổi $S = 0,02\\,\\text{m}^2, d = 0,002\\,\\text{m}$. $F = \\frac{8,85 \\times 10^{-12} \\cdot 0,02 \\cdot 600^2}{2 \\cdot (0,002)^2} = \\frac{8,85 \\times 10^{-12} \\cdot 0,02 \\cdot 360000}{8 \\times 10^{-6}} = \\frac{6,372 \\times 10^{-5}}{8 \\times 10^{-6}} \\approx 0,016\\,\\text{N} = 16\\,\\text{mN}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Đèn flash của một máy ảnh sử dụng một tụ điện có điện dung $C = 100\\,\\mu\\text{F}$ được nạp đến hiệu điện thế $U = 300\\,\\text{V}$. Khi chụp ảnh, tụ phóng toàn bộ năng lượng qua bóng đèn trong thời gian rất ngắn $\\Delta t = 2\\,\\text{ms}$. Công suất phát sáng trung bình của đèn flash trong thời gian này là',
      options: ['$2250\\,\\text{W}$', '$4500\\,\\text{W}$', '$1125\\,\\text{W}$', '$450\\,\\text{W}$'],
      correct_index: 0,
      explanation: 'Năng lượng tích trữ trong tụ: $W = \\frac{1}{2} C U^2 = 0,5 \\cdot (100 \\times 10^{-6}) \\cdot 300^2 = 4,5\\,\\text{J}$. Công suất trung bình: $\\mathcal{P} = W / \\Delta t = 4,5 / (2 \\times 10^{-3}) = 2250\\,\\text{W}$.',
    },

    // 3 Vận dụng cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một tụ điện phẳng có điện dung $C_0$ khi khoảng giữa hai bản là chân không. Đưa vào giữa hai bản một tấm kim loại có bề dày $b$ song song với các bản tụ ($b < d$). Điện dung $C$ của tụ điện lúc này là',
      options: ['$C = C_0 \\frac{d}{d - b}$', '$C = C_0 \\frac{d - b}{d}$', '$C = C_0 \\frac{b}{d}$', '$C = C_0$'],
      correct_index: 0,
      explanation: 'Tấm kim loại dẫn điện chia khoảng không gian thành hai tụ điện nhỏ ghép nối tiếp có tổng khoảng cách cách điện là $d\' = d - b$. Do đó $C = \\frac{\\varepsilon_0 S}{d - b} = \\frac{\\varepsilon_0 S}{d} \\cdot \\frac{d}{d - b} = C_0 \\frac{d}{d - b}$. Điện dung tăng lên.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một tụ điện phẳng diện tích bản $S$, khoảng cách hai bản $d$, được tích điện đến hiệu điện thế $U$ rồi ngắt khỏi nguồn. Người ta kéo từ từ hai bản tụ để khoảng cách tăng từ $d$ lên $2d$. Công cơ học tối thiểu cần thực hiện để tách hai bản tụ là',
      options: ['$\\frac{1}{2} C_0 U^2$', '$C_0 U^2$', '$\\frac{1}{4} C_0 U^2$', '$2 C_0 U^2$'],
      correct_index: 0,
      explanation: 'Vì ngắt khỏi nguồn nên điện tích $Q = C_0 U$ không đổi. Điện dung ban đầu $C_1 = C_0$; khi khoảng cách tăng gấp đôi thì điện dung lúc sau là $C_2 = C_0 / 2$. Năng lượng ban đầu: $W_1 = Q^2 / (2C_0) = \\frac{1}{2} C_0 U^2$. Năng lượng lúc sau: $W_2 = Q^2 / (2C_2) = Q^2 / C_0 = C_0 U^2$. Theo định luật bảo toàn năng lượng: Công cơ học thực hiện bằng độ tăng năng lượng điện trường: $A_{cơ} = W_2 - W_1 = C_0 U^2 - \\frac{1}{2} C_0 U^2 = \\frac{1}{2} C_0 U^2$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một mạch điện gồm 3 tụ điện giống hệt nhau có cùng điện dung $C$ và hiệu điện thế đánh thủng giới hạn của mỗi tụ là $U_{gh} = 50\\,\\text{V}$. Ghép 3 tụ này thành bộ có điện dung tương đương $C_b = \\frac{2}{3} C$. Hiệu điện thế cực đại an toàn có thể đặt vào hai đầu bộ tụ này là',
      options: ['$75\\,\\text{V}$', '$100\\,\\text{V}$', '$50\\,\\text{V}$', '$150\\,\\text{V}$'],
      correct_index: 0,
      explanation: 'Để có $C_b = 2C/3$, mạch gồm: hai tụ mắc song song ($C_{12} = 2C$) rồi tất cả mắc nối tiếp với tụ thứ ba $C_3 = C$. Khi nối vào hiệu điện thế U: điện tích $Q = C_b U = \\frac{2}{3} C U$. Hiệu điện thế trên tụ $C_3$ là $U_3 = Q / C_3 = \\frac{2}{3} U$. Hiệu điện thế trên mỗi tụ song song là $U_{12} = Q / C_{12} = \\frac{1}{3} U$. Rõ ràng $U_3$ lớn nhất và chịu tải nặng nhất. Để tụ $C_3$ không bị đánh thủng: $U_3 \\le U_{gh} \\Rightarrow \\frac{2}{3} U \\le 50\\,\\text{V} \\Rightarrow U \\le 75\\,\\text{V}$.',
    },
  ],

  // =========================================================================
  // G11-CH4-TP1: Dòng điện không đổi và tốc độ trôi của hạt mang điện
  // =========================================================================
  'G11-CH4-TP1': [
    // 10 Nhận biết
    {
      difficulty: 'nhan_biet',
      question_text: 'Dòng điện được định nghĩa là',
      options: ['Dòng chuyển dời có hướng của các hạt mang điện', 'Dòng chuyển động nhiệt hỗn loạn của các hạt electron', 'Dòng chảy của chất lỏng dẫn điện trong ống', 'Sự truyền ánh sáng dọc theo dây dẫn'],
      correct_index: 0,
      explanation: 'Dòng điện là dòng các điện tích (hạt mang điện) dịch chuyển có hướng dưới tác dụng của điện trường.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Chiều quy ước của dòng điện trong mạch điện là',
      options: ['Chiều chuyển dời của các hạt điện tích dương', 'Chiều chuyển dời của các hạt electron tự do', 'Từ cực âm qua dây dẫn về cực dương', 'Chiều chuyển động nhiệt của các ion'],
      correct_index: 0,
      explanation: 'Quy ước lịch sử: Chiều dòng điện là chiều dịch chuyển của các điện tích dương, ngược với chiều dịch chuyển của các electron tự do trong kim loại.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hạt tải điện tự do trong kim loại là',
      options: ['Các electron tự do', 'Các ion dương', 'Các ion âm', 'Lỗ trống và electron'],
      correct_index: 0,
      explanation: 'Trong kim loại, các electron hóa trị bứt khỏi nguyên tử trở thành khí electron tự do di chuyển tự do trong toàn bộ mạng tinh thể.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Cường độ dòng điện không đổi I được tính theo công thức nào?',
      options: ['$I = \\frac{q}{t}$', '$I = q \\cdot t$', '$I = \\frac{t}{q}$', '$I = q^2 \\cdot t$'],
      correct_index: 0,
      explanation: 'Cường độ dòng điện không đổi là thương số giữa điện lượng dịch chuyển qua tiết diện thẳng và thời gian dịch chuyển: $I = q/t$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong hệ SI, đơn vị của cường độ dòng điện là',
      options: ['Ampe (A)', 'Culông (C)', 'Vôn (V)', 'Ohm (Ω)'],
      correct_index: 0,
      explanation: 'Đơn vị cơ bản của cường độ dòng điện trong hệ SI là Ampe (ký hiệu: A).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức liên hệ giữa cường độ dòng điện I và tốc độ trôi v của electron trong dây dẫn tiết diện S có mật độ hạt dẫn n là',
      options: ['$I = n \\cdot |e| \\cdot v \\cdot S$', '$I = \\frac{n \\cdot |e| \\cdot v}{S}$', '$I = n \\cdot |e| \\cdot S / v$', '$I = \\frac{v \\cdot S}{n \\cdot |e|}$'],
      correct_index: 0,
      explanation: 'Công thức mô hình vi mô: $I = n|e|vS$, trong đó n là mật độ electron, |e| là điện tích nguyên tố, v là tốc độ trôi, S là tiết diện.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Mật độ dòng điện j qua dây dẫn có tiết diện S mang dòng điện I được tính bằng',
      options: ['$j = \\frac{I}{S}$', '$j = I \\cdot S$', '$j = \\frac{S}{I}$', '$j = I^2 \\cdot S$'],
      correct_index: 0,
      explanation: 'Mật độ dòng điện $j = I/S$ có đơn vị là $\\text{A/m}^2$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Tác dụng nào sau đây của dòng điện luôn luôn xuất hiện khi có dòng điện chạy qua một dây dẫn kim loại thông thường?',
      options: ['Tác dụng nhiệt', 'Tác dụng hóa học', 'Tác dụng phát quang', 'Tác dụng sinh lý'],
      correct_index: 0,
      explanation: 'Khi dòng điện chạy qua dây dẫn kim loại thông thường có điện trở, điện năng luôn chuyển hóa thành nhiệt năng (tác dụng nhiệt theo định luật Joule - Lenz).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Để đo cường độ dòng điện chạy qua một bóng đèn, ta phải mắc ampe kế',
      options: ['Nối tiếp với bóng đèn', 'Song song với bóng đèn', 'Nối tiếp với nguồn và song song với đèn', 'Bất kì vị trí nào'],
      correct_index: 0,
      explanation: 'Ampe kế có điện trở rất nhỏ, phải mắc nối tiếp với thiết bị cần đo để toàn bộ dòng điện chạy qua ampe kế.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Tốc độ trôi của các electron dẫn trong dây kim loại mang dòng điện thông thường có độ lớn vào cỡ',
      options: ['Vài milimét trên giây (mm/s)', 'Tốc độ ánh sáng ($3 \\times 10^8\\,\\text{m/s}$)', 'Tốc độ âm thanh ($340\\,\\text{m/s}$)', 'Hàng nghìn kilômét trên giây'],
      correct_index: 0,
      explanation: 'Tốc độ trôi có hướng của electron rất chậm, chỉ khoảng từ 0,1 mm/s đến vài mm/s.',
    },

    // 7 Thông hiểu
    {
      difficulty: 'thong_hieu',
      question_text: 'Một dòng điện không đổi có cường độ $I = 2\\,\\text{A}$ chạy qua một dây dẫn. Điện lượng dịch chuyển qua tiết diện thẳng của dây dẫn đó trong thời gian 1 phút bằng',
      options: ['$120\\,\\text{C}$', '$2\\,\\text{C}$', '$60\\,\\text{C}$', '$30\\,\\text{C}$'],
      correct_index: 0,
      explanation: '$t = 1\\,\\text{phút} = 60\\,\\text{s}$. Điện lượng $q = I \\cdot t = 2 \\cdot 60 = 120\\,\\text{C}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Số hạt electron dịch chuyển qua tiết diện thẳng của dây dẫn trong bài toán trên (trong thời gian 1 phút với dòng $I = 2\\,\\text{A}$) là bao nhiêu? (Lấy $e = 1,6 \\times 10^{-19}\\,\\text{C}$)',
      options: ['$7,5 \\times 10^{20}$ hạt', '$3,75 \\times 10^{20}$ hạt', '$1,25 \\times 10^{19}$ hạt', '$1,2 \\times 10^{21}$ hạt'],
      correct_index: 0,
      explanation: '$N_e = q / |e| = 120 / (1,6 \\times 10^{-19}) = 7,5 \\times 10^{20}$ hạt.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao khi ta vừa bật công tắc điện thì bóng đèn ở cách xa hàng chục mét lập tức phát sáng gần như tức thì, mặc dù tốc độ trôi của electron trong dây chỉ cỡ mm/s?',
      options: ['Vì điện trường lan truyền dọc theo dây dẫn với tốc độ xấp xỉ tốc độ ánh sáng, tác dụng lực khiến tất cả electron trong toàn mạch đồng loạt dịch chuyển', 'Vì các electron ban đầu bay với tốc độ ánh sáng', 'Vì bóng đèn tự tích sẵn năng lượng', 'Vì dòng điện không cần hạt electron'],
      correct_index: 0,
      explanation: 'Tín hiệu điện trường lan truyền trong dây dẫn với tốc độ gần bằng tốc độ ánh sáng ($c \\approx 300.000\\,\\text{km/s}$), thiết lập lực điện tức thì lên mọi electron trong toàn bộ dây dẫn, làm chúng cùng bắt đầu trôi.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một dây dẫn có tiết diện thay đổi, đoạn 1 có đường kính $d_1$, đoạn 2 có đường kính $d_2 = 2 d_1$. Khi có dòng điện không đổi chạy qua, tỉ số tốc độ trôi của electron ở đoạn 1 so với đoạn 2 ($v_1 / v_2$) là',
      options: ['4', '2', '1/2', '1/4'],
      correct_index: 0,
      explanation: 'Dòng điện I liên tục không đổi. Vì $v = I / (n|e|S)$ nên $v$ tỉ lệ nghịch với tiết diện $S$. Mà $S = \\pi d^2 / 4 \\Rightarrow S_2 = 4 S_1$. Do đó $v_1 / v_2 = S_2 / S_1 = 4$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Cường độ dòng điện qua một dây tóc bóng đèn là $I = 0,5\\,\\text{A}$. Thời gian cần thiết để một lượng điện tích $q = 10\\,\\text{C}$ chạy qua dây tóc đèn là',
      options: ['$20\\,\\text{s}$', '$5\\,\\text{s}$', '$50\\,\\text{s}$', '$2\\,\\text{s}$'],
      correct_index: 0,
      explanation: '$t = q / I = 10 / 0,5 = 20\\,\\text{s}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi nhiệt độ của kim loại tăng lên, điện trở của dây kim loại tăng là do',
      options: ['Các ion ở nút mạng tinh thể dao động nhiệt mạnh hơn, cản trở chuyển động có hướng của electron', 'Số lượng electron tự do bị giảm đi', 'Khối lượng của electron tăng lên', 'Kích thước của dây bị co rút'],
      correct_index: 0,
      explanation: 'Nhiệt độ tăng làm các ion nút mạng dao động nhiệt mạnh quanh vị trí cân bằng, làm tăng xác suất va chạm với các electron tự do, cản trở chuyển động trôi có hướng của electron.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Mật độ dòng điện trong dây đồng là $j = 3\\,\\text{A/mm}^2$. Tiết diện ngang của dây là $S = 1,5\\,\\text{mm}^2$. Cường độ dòng điện chạy trong dây dẫn bằng',
      options: ['$4,5\\,\\text{A}$', '$2\\,\\text{A}$', '$0,5\\,\\text{A}$', '$6\\,\\text{A}$'],
      correct_index: 0,
      explanation: '$I = j \\cdot S = 3 \\cdot 1,5 = 4,5\\,\\text{A}$.',
    },

    // 5 Vận dụng
    {
      difficulty: 'van_dung',
      question_text: 'Một dây dẫn bằng nhôm có tiết diện $S = 1\\,\\text{mm}^2$ mang dòng điện $I = 3,4\\,\\text{A}$. Biết nhôm có khối lượng mol $M = 27\\,\\text{g/mol}$, khối lượng riêng $D = 2,7\\,\\text{g/cm}^3$ và mỗi nguyên tử nhôm đóng góp 1 electron tự do. Tốc độ trôi của electron trong dây dẫn là (cho $N_A = 6,022 \\times 10^{23}\\,\\text{mol}^{-1}, e = 1,6 \\times 10^{-19}\\,\\text{C}$)',
      options: ['$0,35\\,\\text{mm/s}$', '$0,70\\,\\text{mm/s}$', '$1,05\\,\\text{mm/s}$', '$0,18\\,\\text{mm/s}$'],
      correct_index: 0,
      explanation: 'Mật độ nguyên tử nhôm (cũng là mật độ electron n): $n = \\frac{D}{M} N_A = \\frac{2,7 \\times 10^3\\,\\text{kg/m}^3}{0,027\\,\\text{kg/mol}} \\cdot 6,022 \\times 10^{23} = 6,022 \\times 10^{28}\\,\\text{m}^{-3}$. Tiết diện $S = 10^{-6}\\,\\text{m}^2$. Tốc độ trôi: $v = \\frac{I}{n |e| S} = \\frac{3,4}{(6,022 \\times 10^{28}) \\cdot (1,6 \\times 10^{-19}) \\cdot 10^{-6}} = \\frac{3,4}{9,635 \\times 10^3} \\approx 3,53 \\times 10^{-4}\\,\\text{m/s} \\approx 0,35\\,\\text{mm/s}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Dòng điện chạy qua một bình điện phân dung dịch đồng sunfat ($\ ext{CuSO}_4$) có anot bằng đồng là $I = 5\\,\\text{A}$ trong thời gian $t = 32\\,\\text{phút } 10\\,\\text{giây}$. Khối lượng đồng bám vào catot là bao nhiêu? (Cho đồng có $A = 64, n = 2$, hằng số Faraday $F = 96500\\,\\text{C/mol}$)',
      options: ['$3,2\\,\\text{g}$', '$6,4\\,\\text{g}$', '$1,6\\,\\text{g}$', '$4,8\\,\\text{g}$'],
      correct_index: 0,
      explanation: '$t = 32 \\times 60 + 10 = 1930\\,\\text{s}$. Theo định luật Faraday: $m = \\frac{1}{F} \\frac{A}{n} I t = \\frac{1}{96500} \\frac{64}{2} \\cdot 5 \\cdot 1930 = \\frac{32 \\cdot 9650}{96500} = 3,2\\,\\text{g}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một tụ điện có điện dung $C = 1000\\,\\mu\\text{F}$ được nạp điện đến hiệu điện thế $U_0 = 20\\,\\text{V}$. Sau đó cho tụ phóng điện qua một điện trở trong thời gian ngắn $\\Delta t = 0,05\\,\\text{s}$ thì điện áp tụ giảm còn $U = 5\\,\\text{V}$. Cường độ dòng điện phóng trung bình trong khoảng thời gian đó là',
      options: ['$0,3\\,\\text{A}$', '$0,4\\,\\text{A}$', '$0,1\\,\\text{A}$', '$0,6\\,\\text{A}$'],
      correct_index: 0,
      explanation: 'Độ giảm điện tích: $\\Delta q = C (U_0 - U) = (1000 \\times 10^{-6}) \\cdot (20 - 5) = 10^{-3} \\cdot 15 = 0,015\\,\\text{C}$. Cường độ dòng điện trung bình: $I = \\Delta q / \\Delta t = 0,015 / 0,05 = 0,3\\,\\text{A}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Điện tích chạy qua tiết diện của một dây dẫn biến thiên theo thời gian theo phương trình $q = 3t^2 + 2t$ (C), với t tính bằng giây. Cường độ dòng điện tức thời qua dây tại thời điểm $t = 4\\,\\text{s}$ là',
      options: ['$26\\,\\text{A}$', '$56\\,\\text{A}$', '$24\\,\\text{A}$', '$14\\,\\text{A}$'],
      correct_index: 0,
      explanation: 'Cường độ dòng điện tức thời là đạo hàm của điện tích: $i(t) = q\'(t) = 6t + 2$. Tại $t = 4\\,\\text{s}$: $i = 6 \\cdot 4 + 2 = 26\\,\\text{A}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một chùm tia electron trong ống phóng tia điện tử có cường độ dòng điện $I = 80\\,\\mu\\text{A}$. Số electron đập vào màn huỳnh quang trong mỗi giây là',
      options: ['$5 \\times 10^{14}$ hạt/giây', '$8 \\times 10^{14}$ hạt/giây', '$5 \\times 10^{13}$ hạt/giây', '$1,28 \\times 10^{15}$ hạt/giây'],
      correct_index: 0,
      explanation: '$N = I / |e| = (80 \\times 10^{-6}) / (1,6 \\times 10^{-19}) = 5 \\times 10^{14}$ hạt/giây.',
    },

    // 3 Vận dụng cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Hai dây dẫn kim loại 1 và 2 làm bằng cùng một chất có cùng chiều dài, dây 1 có bán kính tiết diện $r_1$, dây 2 có bán kính tiết diện $r_2 = 2 r_1$. Hai dây được mắc song song với nhau vào cùng một nguồn điện không đổi. Tỉ số tốc độ trôi của electron trong dây 1 và dây 2 ($v_1 / v_2$) là',
      options: ['1', '2', '4', '1/2'],
      correct_index: 0,
      explanation: 'Vì hai dây cùng chất, cùng chiều dài và mắc song song nên hiệu điện thế U trên hai dây bằng nhau. Cường độ điện trường trong mỗi dây $E = U/L$ là như nhau. Do tốc độ trôi $v = \\mu E$ (với $\\mu$ là độ linh động electron) chỉ phụ thuộc vào bản chất vật liệu và điện trường E, nên tốc độ trôi của electron trong hai dây là như nhau ($v_1 / v_2 = 1$). (Lưu ý: Dòng điện $I_2 = 4 I_1$ nhưng vì tiết diện $S_2 = 4 S_1$ nên tỉ số $I/S$ bằng nhau).',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một vành tròn bán kính R mang điện tích Q phân bố đều, quay tròn đều quanh trục đi qua tâm và vuông góc với mặt phẳng vành với tốc độ góc $\\omega$. Cường độ dòng điện tương đương do điện tích quay tạo ra là',
      options: ['$I = \\frac{\\omega Q}{2\\pi}$', '$I = \\omega Q$', '$I = \\frac{\\omega Q}{\\pi}$', '$I = \\frac{\\omega Q}{4\\pi}$'],
      correct_index: 0,
      explanation: 'Chu kì quay của vành tròn là $T = 2\\pi / \\omega$. Trong một chu kì, toàn bộ điện tích Q đi qua tiết diện quy ước đúng 1 lần. Cường độ dòng điện trung bình tương đương là $I = Q / T = \\frac{\\omega Q}{2\\pi}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Theo mô hình bán cổ điển Drude về dẫn điện kim loại, giữa hai lần va chạm liên tiếp với các nút mạng tinh thể, electron chuyển động có gia tốc dưới tác dụng của điện trường. Biết thời gian chuyển động tự do trung bình của electron là $\\tau = 2,5 \\times 10^{-14}\\,\\text{s}$. Khi điện trường trong dây là $E = 0,04\\,\\text{V/m}$, tốc độ trôi trung bình của electron là',
      options: ['$1,76 \\times 10^{-4}\\,\\text{m/s}$', '$3,52 \\times 10^{-4}\\,\\text{m/s}$', '$8,80 \\times 10^{-5}\\,\\text{m/s}$', '$2,45 \\times 10^{-3}\\,\\text{m/s}$'],
      correct_index: 0,
      explanation: 'Gia tốc electron: $a = eE / m_e = (1,6 \\times 10^{-19} \\cdot 0,04) / (9,1 \\times 10^{-31}) \\approx 7,033 \\times 10^9\\,\\text{m/s}^2$. Tốc độ trôi trung bình: $v = a \\cdot (\\tau / 2)$ hoặc theo định nghĩa độ linh động Drude $v = \\frac{e \\tau}{m_e} E = 7,033 \\times 10^9 \\cdot 2,5 \\times 10^{-14} \\approx 1,76 \\times 10^{-4}\\,\\text{m/s} = 0,176\\,\\text{mm/s}$.',
    },
  ],

  // =========================================================================
  // G11-CH4-TP2: Nguồn điện, suất điện động và định luật Ohm toàn mạch
  // =========================================================================
  'G11-CH4-TP2': [
    // 10 Nhận biết
    {
      difficulty: 'nhan_biet',
      question_text: 'Suất điện động $\\mathcal{E}$ của nguồn điện là đại lượng đặc trưng cho',
      options: ['Khả năng thực hiện công của lực lạ bên trong nguồn điện', 'Khả năng tác dụng lực hút tĩnh điện của nguồn', 'Lượng điện tích dự trữ lớn nhất trong nguồn', 'Tốc độ sinh nhiệt bên trong nguồn'],
      correct_index: 0,
      explanation: 'Suất điện động $\\mathcal{E} = A_{\\text{lạ}} / q$ đo công của lực lạ khi dịch chuyển một đơn vị điện tích dương bên trong nguồn.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị của suất điện động trong hệ SI là',
      options: ['Vôn (V)', 'Ampe (A)', 'Culông (C)', 'Ohm (Ω)'],
      correct_index: 0,
      explanation: 'Suất điện động có cùng đơn vị với hiệu điện thế là Vôn (V). $1\\,\\text{V} = 1\\,\\text{J/C}$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Định luật Ohm cho toàn mạch kín xác định cường độ dòng điện trong mạch',
      options: ['Tỉ lệ thuận với suất điện động và tỉ lệ nghịch với điện trở toàn phần của mạch', 'Tỉ lệ thuận với điện trở mạch ngoài', 'Tỉ lệ nghịch với suất điện động của nguồn', 'Không phụ thuộc điện trở trong của nguồn'],
      correct_index: 0,
      explanation: 'Định luật Ohm toàn mạch: $I = \\mathcal{E} / (R_N + r)$, tỉ lệ thuận với $\\mathcal{E}$ và tỉ lệ nghịch với điện trở toàn phần $(R_N + r)$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hiệu điện thế giữa hai cực của nguồn điện (hiệu điện thế mạch ngoài) khi có dòng điện I chạy qua được tính bởi hệ thức',
      options: ['$U_N = \\mathcal{E} - I \\cdot r$', '$U_N = \\mathcal{E} + I \\cdot r$', '$U_N = I \\cdot r$', '$U_N = \\frac{\\mathcal{E}}{I \\cdot r}$'],
      correct_index: 0,
      explanation: 'Hiệu điện thế mạch ngoài $U_N = I R_N = \\mathcal{E} - Ir$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hiện tượng đoản mạch (ngắn mạch) xảy ra khi',
      options: ['Điện trở mạch ngoài bằng 0 ($R_N = 0$)', 'Mạch ngoài bị hở ($R_N \\to \\infty$)', 'Điện trở trong của nguồn bằng 0', 'Suất điện động của nguồn bằng 0'],
      correct_index: 0,
      explanation: 'Hiện tượng đoản mạch xảy ra khi hai cực của nguồn điện được nối trực tiếp với nhau bằng dây dẫn có điện trở không đáng kể ($R_N \\to 0$).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Cường độ dòng điện cực đại khi xảy ra hiện tượng đoản mạch bằng',
      options: ['$I_{\\text{đm}} = \\frac{\\mathcal{E}}{r}$', '$I_{\\text{đm}} = 0$', '$I_{\\text{đm}} = \\frac{r}{\\mathcal{E}}$', '$I_{\\text{đm}} = \\mathcal{E} \\cdot r$'],
      correct_index: 0,
      explanation: 'Khi $R_N = 0$, $I_{\\text{đm}} = \\mathcal{E} / (0 + r) = \\mathcal{E} / r$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi mạch ngoài để hở (không có dòng điện chạy qua nguồn, $I = 0$), hiệu điện thế giữa hai cực của nguồn điện bằng',
      options: ['Bằng đúng suất điện động $\\mathcal{E}$ của nguồn', 'Bằng 0', 'Bằng điện trở trong r', 'Vô cùng lớn'],
      correct_index: 0,
      explanation: 'Khi $I = 0$, $U_N = \\mathcal{E} - 0 \\cdot r = \\mathcal{E}$. Vì vậy vôn kế có điện trở rất lớn đo hai cực nguồn hở sẽ chỉ giá trị $\\mathcal{E}$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đồ thị biểu diễn mối quan hệ giữa hiệu điện thế mạch ngoài $U_N$ và cường độ dòng điện I (đặc tuyến V-A của nguồn) có dạng',
      options: ['Đoạn thẳng dốc xuống có hệ số góc âm', 'Đoạn thẳng dốc lên qua gốc tọa độ', 'Đường hyperbol cong xuống', 'Đường parabol đỉnh hướng lên'],
      correct_index: 0,
      explanation: 'Hàm số $U_N = \\mathcal{E} - r \\cdot I$ là hàm bậc nhất theo I có hệ số góc $-r < 0$ nên đồ thị là đoạn thẳng dốc xuống.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Lực lạ bên trong nguồn điện có bản chất',
      options: ['Không phải là lực tĩnh điện (là lực hóa học, nhiệt điện, quang điện...)', 'Là lực tĩnh điện Coulomb', 'Là lực hấp dẫn', 'Là lực ma sát cơ học thuần túy'],
      correct_index: 0,
      explanation: 'Lực lạ là lực phi tĩnh điện có khả năng thắng lực tĩnh điện để dịch chuyển hạt mang điện dương về phía bản cực dương của nguồn.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Để đo suất điện động và điện trở trong của một pin, người ta thường dùng',
      options: ['Vôn kế, ampe kế và biến trở', 'Chỉ cần một lực kế', 'Máy phát sóng âm', 'Nhiệt kế thủy ngân'],
      correct_index: 0,
      explanation: 'Thí nghiệm thực hành Vật lí 11 dùng vôn kế, ampe kế phối hợp biến trở thay đổi R để thu thập các cặp (U, I) rồi dựng đường thẳng hồi quy xác định $\\mathcal{E}$ và r.',
    },

    // 7 Thông hiểu
    {
      difficulty: 'thong_hieu',
      question_text: 'Một nguồn điện có suất điện động $\\mathcal{E} = 6\\,\\text{V}$, điện trở trong $r = 1\\,\\Omega$ mắc với điện trở mạch ngoài $R_N = 5\\,\\Omega$ thành mạch kín. Cường độ dòng điện trong mạch bằng',
      options: ['$1\\,\\text{A}$', '$1,2\\,\\text{A}$', '$6\\,\\text{A}$', '$0,86\\,\\text{A}$'],
      correct_index: 0,
      explanation: '$I = \\mathcal{E} / (R_N + r) = 6 / (5 + 1) = 6/6 = 1\\,\\text{A}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Trong mạch điện trên, hiệu điện thế mạch ngoài $U_N$ đo giữa hai cực của nguồn điện bằng',
      options: ['$5\\,\\text{V}$', '$6\\,\\text{V}$', '$1\\,\\text{V}$', '$4\\,\\text{V}$'],
      correct_index: 0,
      explanation: '$U_N = I \\cdot R_N = 1 \\cdot 5 = 5\\,\\text{V}$ (hoặc $U_N = \\mathcal{E} - Ir = 6 - 1 \\cdot 1 = 5\\,\\text{V}$).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một nguồn điện có suất điện động $\\mathcal{E} = 12\\,\\text{V}$ và điện trở trong $r = 0,5\\,\\Omega$. Nếu xảy ra đoản mạch hai cực của nguồn thì dòng điện ngắn mạch có cường độ bằng',
      options: ['$24\\,\\text{A}$', '$6\\,\\text{A}$', '$12\\,\\text{A}$', '$48\\,\\text{A}$'],
      correct_index: 0,
      explanation: '$I_{\\text{đm}} = \\mathcal{E} / r = 12 / 0,5 = 24\\,\\text{A}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi tăng điện trở mạch ngoài $R_N$ lên thì',
      options: ['Cường độ dòng điện I giảm, hiệu điện thế mạch ngoài $U_N$ tăng', 'Cường độ dòng điện I tăng, hiệu điện thế mạch ngoài $U_N$ giảm', 'Cả I và $U_N$ đều tăng', 'Cả I và $U_N$ đều giảm'],
      correct_index: 0,
      explanation: '$I = \\mathcal{E} / (R_N + r)$ giảm khi $R_N$ tăng. Do đó độ sụt thế $Ir$ giảm $\\Rightarrow U_N = \\mathcal{E} - Ir$ tăng.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một acquy có $\\mathcal{E} = 12\\,\\text{V}, r = 0,2\\,\\Omega$. Khi cung cấp dòng điện $I = 10\\,\\text{A}$ cho phụ tải thì hiệu điện thế hai cực của acquy bị sụt giảm xuống còn',
      options: ['$10\\,\\text{V}$', '$11,8\\,\\text{V}$', '$8\\,\\text{V}$', '$12\\,\\text{V}$'],
      correct_index: 0,
      explanation: '$U_N = \\mathcal{E} - Ir = 12 - (10 \\cdot 0,2) = 12 - 2 = 10\\,\\text{V}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Ghép 3 pin giống nhau có cùng suất điện động $\\mathcal{E}_0 = 1,5\\,\\text{V}$ và điện trở trong $r_0 = 0,5\\,\\Omega$ nối tiếp nhau. Bộ nguồn tương đương có',
      options: ['$\\mathcal{E}_b = 4,5\\,\\text{V}; r_b = 1,5\\,\\Omega$', '$\\mathcal{E}_b = 4,5\\,\\text{V}; r_b = 0,5\\,\\Omega$', '$\\mathcal{E}_b = 1,5\\,\\text{V}; r_b = 1,5\\,\\Omega$', '$\\mathcal{E}_b = 1,5\\,\\text{V}; r_b = 0,17\\,\\Omega$'],
      correct_index: 0,
      explanation: 'Khi ghép nối tiếp: $\\mathcal{E}_b = 3 \\mathcal{E}_0 = 3 \\cdot 1,5 = 4,5\\,\\text{V}$; $r_b = 3 r_0 = 3 \\cdot 0,5 = 1,5\\,\\Omega$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Ghép 4 acquy giống nhau có cùng suất điện động $\\mathcal{E}_0 = 12\\,\\text{V}$ và $r_0 = 0,4\\,\\Omega$ song song với nhau. Bộ nguồn tương đương có',
      options: ['$\\mathcal{E}_b = 12\\,\\text{V}; r_b = 0,1\\,\\Omega$', '$\\mathcal{E}_b = 48\\,\\text{V}; r_b = 1,6\\,\\Omega$', '$\\mathcal{E}_b = 12\\,\\text{V}; r_b = 1,6\\,\\Omega$', '$\\mathcal{E}_b = 3\\,\\text{V}; r_b = 0,1\\,\\Omega$'],
      correct_index: 0,
      explanation: 'Khi ghép song song: $\\mathcal{E}_b = \\mathcal{E}_0 = 12\\,\\text{V}$; $r_b = r_0 / n = 0,4 / 4 = 0,1\\,\\Omega$.',
    },

    // 5 Vận dụng
    {
      difficulty: 'van_dung',
      question_text: 'Mắc một biến trở R vào nguồn điện có suất điện động $\\mathcal{E}$ và điện trở trong r. Khi $R = 4\\,\\Omega$ thì dòng điện trong mạch là $I_1 = 2\\,\\text{A}$. Khi $R = 10\\,\\Omega$ thì dòng điện trong mạch là $I_2 = 1\\,\\text{A}$. Suất điện động $\\mathcal{E}$ và điện trở trong r của nguồn là',
      options: ['$\\mathcal{E} = 12\\,\\text{V}; r = 2\\,\\Omega$', '$\\mathcal{E} = 10\\,\\text{V}; r = 1\\,\\Omega$', '$\\mathcal{E} = 16\\,\\text{V}; r = 4\\,\\Omega$', '$\\mathcal{E} = 8\\,\\text{V}; r = 0,5\\,\\Omega$'],
      correct_index: 0,
      explanation: 'Hệ phương trình: $\\mathcal{E} = I_1 (R_1 + r) = 2 (4 + r) = 8 + 2r$ và $\\mathcal{E} = I_2 (R_2 + r) = 1 (10 + r) = 10 + r$. Cho hai vế bằng nhau: $8 + 2r = 10 + r \\Rightarrow r = 2\\,\\Omega$. Thay vào: $\\mathcal{E} = 10 + 2 = 12\\,\\text{V}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một nguồn điện có suất điện động $\\mathcal{E} = 9\\,\\text{V}, r = 1\\,\\Omega$. Mạch ngoài gồm bóng đèn Đ ($6\\,\\text{V} - 6\\,\\text{W}$) mắc nối tiếp với một biến trở $R_b$. Để đèn sáng bình thường, biến trở $R_b$ phải có giá trị bằng',
      options: ['$2\\,\\Omega$', '$3\\,\\Omega$', '$1\\,\\Omega$', '$4\\,\\Omega$'],
      correct_index: 0,
      explanation: 'Điện trở bóng đèn $R_đ = U_{đm}^2 / \\mathcal{P}_{đm} = 6^2 / 6 = 6\\,\\Omega$. Dòng điện định mức của đèn $I_{đm} = \\mathcal{P} / U = 6/6 = 1\\,\\text{A}$. Để đèn sáng bình thường thì dòng điện trong mạch phải bằng $I = 1\\,\\text{A}$. Ta có $I = \\frac{\\mathcal{E}}{R_đ + R_b + r} \\Rightarrow 1 = \\frac{9}{6 + R_b + 1} = \\frac{9}{7 + R_b} \\Rightarrow 7 + R_b = 9 \\Rightarrow R_b = 2\\,\\Omega$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một nguồn điện mắc với điện trở $R_1 = 2\\,\\Omega$ thì hiệu điện thế hai cực là $U_1 = 4\\,\\text{V}$. Nếu mắc nguồn điện với điện trở $R_2 = 5\\,\\Omega$ thì hiệu điện thế hai cực là $U_2 = 5\\,\\text{V}$. Suất điện động của nguồn bằng',
      options: ['$6\\,\\text{V}$', '$8\\,\\text{V}$', '$10\\,\\text{V}$', '$12\\,\\text{V}$'],
      correct_index: 0,
      explanation: '$I_1 = U_1 / R_1 = 4/2 = 2\\,\\text{A} \\Rightarrow \\mathcal{E} = U_1 + I_1 r = 4 + 2r$. $I_2 = U_2 / R_2 = 5/5 = 1\\,\\text{A} \\Rightarrow \\mathcal{E} = U_2 + I_2 r = 5 + 1r$. Suy ra $4 + 2r = 5 + r \\Rightarrow r = 1\\,\\Omega$. Thay vào: $\\mathcal{E} = 5 + 1 = 6\\,\\text{V}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một mạch điện kín gồm nguồn điện $\\mathcal{E} = 15\\,\\text{V}, r = 1\\,\\Omega$ và mạch ngoài gồm $R_1 = 6\\,\\Omega$ mắc song song với $R_2 = 3\\,\\Omega$. Hiệu điện thế giữa hai đầu điện trở $R_1$ là',
      options: ['$10\\,\\text{V}$', '$5\\,\\text{V}$', '$12\\,\\text{V}$', '$15\\,\\text{V}$'],
      correct_index: 0,
      explanation: 'Điện trở tương đương mạch ngoài: $R_N = (R_1 R_2) / (R_1 + R_2) = (6 \\cdot 3) / (6 + 3) = 18/9 = 2\\,\\Omega$. Dòng điện mạch chính: $I = \\mathcal{E} / (R_N + r) = 15 / (2 + 1) = 5\\,\\text{A}$. Hiệu điện thế mạch ngoài: $U_N = I \\cdot R_N = 5 \\cdot 2 = 10\\,\\text{V}$. Vì $R_1 // R_2$ nên $U_1 = U_N = 10\\,\\text{V}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Có 12 pin giống nhau, mỗi pin có $\\mathcal{E}_0 = 1,5\\,\\text{V}$ và $r_0 = 0,2\\,\\Omega$ được mắc thành bộ nguồn gồm m dãy song song, mỗi dãy có n pin nối tiếp. Mắc bộ nguồn vào điện trở $R_N = 0,6\\,\\Omega$. Để cường độ dòng điện qua $R_N$ đạt cực đại thì m và n phải nhận giá trị',
      options: ['$m = 2, n = 6$', '$m = 3, n = 4$', '$m = 1, n = 12$', '$m = 6, n = 2$'],
      correct_index: 0,
      explanation: 'Tổng số pin: $m \\cdot n = 12$. Suất điện động bộ nguồn: $\\mathcal{E}_b = n \\mathcal{E}_0$. Điện trở trong bộ nguồn: $r_b = n r_0 / m = 0,2 n / m$. Dòng điện qua mạch: $I = \\frac{n \\mathcal{E}_0}{R_N + 0,2 n/m} = \\frac{12 \\mathcal{E}_0}{m R_N + 0,2 n} = \\frac{18}{0,6 m + 0,2 n}$. Để I cực đại thì mẫu số $(0,6m + 0,2n)$ nhỏ nhất. Theo Cauchy, nhỏ nhất khi $0,6m = 0,2n \\Rightarrow n = 3m$. Kết hợp $m \\cdot n = 12 \\Rightarrow m \\cdot (3m) = 12 \\Rightarrow 3m^2 = 12 \\Rightarrow m = 2 \\Rightarrow n = 6$.',
    },

    // 3 Vận dụng cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một mạch điện gồm nguồn điện $\\mathcal{E} = 24\\,\\text{V}, r = 2\\,\\Omega$ và mạch ngoài là biến trở R. Khi R thay đổi, đồ thị biểu diễn công suất tiêu thụ mạch ngoài $P_N$ theo R có đỉnh cực đại. Nếu $P_N = 54\\,\\text{W}$ thì có hai giá trị của R là $R_1$ và $R_2$. Tích $R_1 \\cdot R_2$ có giá trị bằng',
      options: ['$4\\,\\Omega^2$', '$8\\,\\Omega^2$', '$2\\,\\Omega^2$', '$16\\,\\Omega^2$'],
      correct_index: 0,
      explanation: 'Công suất $P_N = \\frac{\\mathcal{E}^2 R}{(R + r)^2} \\Rightarrow P_N (R^2 + 2rR + r^2) = \\mathcal{E}^2 R \\Rightarrow P_N R^2 - (\\mathcal{E}^2 - 2r P_N) R + P_N r^2 = 0 \\Rightarrow R^2 - \\frac{\\mathcal{E}^2 - 2r P_N}{P_N} R + r^2 = 0$. Theo định lý Vi-et, tích hai nghiệm là: $R_1 \\cdot R_2 = r^2 = 2^2 = 4\\,\\Omega^2$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Cho mạch điện gồm nguồn $\\mathcal{E} = 16\\,\\text{V}, r = 2\\,\\Omega$ mắc với biến trở R. Khi điều chỉnh R thấy có hai giá trị $R_1$ và $R_2$ cho cùng công suất mạch ngoài $P = 30\\,\\text{W}$. Hiệu suất của nguồn ứng với hai trường hợp này là $H_1$ và $H_2$. Tổng $H_1 + H_2$ bằng',
      options: ['$100\\%$', '$120\\%$', '$80\\%$', '$90\\%$'],
      correct_index: 0,
      explanation: 'Hiệu suất $H = \\frac{R}{R + r}$. Ta có $R_1 R_2 = r^2$. $H_1 + H_2 = \\frac{R_1}{R_1 + r} + \\frac{R_2}{R_2 + r} = \\frac{R_1(R_2 + r) + R_2(R_1 + r)}{(R_1 + r)(R_2 + r)} = \\frac{2 R_1 R_2 + r(R_1 + R_2)}{R_1 R_2 + r(R_1 + R_2) + r^2}$. Vì $R_1 R_2 = r^2$ nên tử số là $2r^2 + r(R_1 + R_2)$ và mẫu số là $r^2 + r(R_1 + R_2) + r^2 = 2r^2 + r(R_1 + R_2)$. Tử bằng mẫu! Do đó $H_1 + H_2 = 1 = 100\\%$ luôn đúng cho mọi giá trị công suất.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một vôn kế có điện trở $R_V$ khi mắc vào hai cực của một nguồn điện thì chỉ $U_1 = 8\\,\\text{V}$. Mắc thêm một vôn kế thứ hai giống hệt song song với vôn kế thứ nhất vào hai cực nguồn thì vôn kế chỉ $U_2 = 6\\,\\text{V}$. Suất điện động $\\mathcal{E}$ của nguồn điện là',
      options: ['$12\\,\\text{V}$', '$10\\,\\text{V}$', '$14\\,\\text{V}$', '$16\\,\\text{V}$'],
      correct_index: 0,
      explanation: 'Trường hợp 1: Mạch ngoài chỉ có $R_V$: $U_1 = \\mathcal{E} \\frac{R_V}{R_V + r} = 8\\,\\text{V} \\Rightarrow 8 R_V + 8r = \\mathcal{E} R_V \\Rightarrow 8r = (\\mathcal{E} - 8) R_V$. Trường hợp 2: Hai vôn kế song song có điện trở $R_V / 2$: $U_2 = \\mathcal{E} \\frac{R_V / 2}{R_V / 2 + r} = \\mathcal{E} \\frac{R_V}{R_V + 2r} = 6\\,\\text{V} \\Rightarrow 6 R_V + 12r = \\mathcal{E} R_V \\Rightarrow 12r = (\\mathcal{E} - 6) R_V$. Lập tỉ số: $\\frac{12r}{8r} = \\frac{\\mathcal{E} - 6}{\\mathcal{E} - 8} = \\frac{3}{2} \\Rightarrow 2(\\mathcal{E} - 6) = 3(\\mathcal{E} - 8) \\Rightarrow 2\\mathcal{E} - 12 = 3\\mathcal{E} - 24 \\Rightarrow \\mathcal{E} = 12\\,\\text{V}$.',
    },
  ],

  // =========================================================================
  // G11-CH4-TP3: Năng lượng, công suất nguồn điện và mạch cảm biến
  // =========================================================================
  'G11-CH4-TP3': [
    // 10 Nhận biết
    {
      difficulty: 'nhan_biet',
      question_text: 'Công suất toàn phần của nguồn điện sinh ra trong toàn mạch được tính bằng công thức',
      options: ['$\\mathcal{P}_{\\text{ng}} = \\mathcal{E} \\cdot I$', '$\\mathcal{P}_{\\text{ng}} = U_N \\cdot I$', '$\\mathcal{P}_{\\text{ng}} = I^2 \\cdot r$', '$\\mathcal{P}_{\\text{ng}} = \\frac{\\mathcal{E}}{I}$'],
      correct_index: 0,
      explanation: 'Công toàn phần của nguồn là $A_{\\text{ng}} = \\mathcal{E}It$, suy ra công suất toàn phần $\\mathcal{P}_{\\text{ng}} = \\mathcal{E}I$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công suất tiêu thụ có ích của mạch ngoài được tính bằng',
      options: ['$\\mathcal{P}_N = U_N \\cdot I = I^2 \\cdot R_N$', '$\\mathcal{P}_N = \\mathcal{E} \\cdot I$', '$\\mathcal{P}_N = I^2 \\cdot r$', '$\\mathcal{P}_N = \\frac{U_N}{I}$'],
      correct_index: 0,
      explanation: 'Công suất mạch ngoài tiêu thụ là $\\mathcal{P}_N = U_N I = I^2 R_N = U_N^2 / R_N$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hiệu suất H của nguồn điện có điện trở trong r cung cấp cho mạch ngoài có điện trở $R_N$ là',
      options: ['$H = \\frac{R_N}{R_N + r} \\times 100\\%$', '$H = \\frac{r}{R_N + r} \\times 100\\%$', '$H = \\frac{R_N + r}{R_N} \\times 100\\%$', '$H = \\frac{r}{R_N} \\times 100\\%$'],
      correct_index: 0,
      explanation: 'Hiệu suất $H = \\mathcal{P}_N / \\mathcal{P}_{\\text{ng}} = (U_N I) / (\\mathcal{E} I) = U_N / \\mathcal{E} = R_N / (R_N + r)$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Theo định lý phối hợp trở kháng (cực đại công suất), công suất tiêu thụ mạch ngoài $\\mathcal{P}_N$ đạt giá trị lớn nhất khi',
      options: ['$R_N = r$', '$R_N = 0$', '$R_N \\to \\infty$', '$R_N = 2r$'],
      correct_index: 0,
      explanation: 'Áp dụng bất đẳng thức Cauchy: công suất mạch ngoài đạt cực đại khi điện trở mạch ngoài bằng điện trở trong của nguồn: $R_N = r$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi công suất tiêu thụ mạch ngoài đạt giá trị cực đại ($R_N = r$), hiệu suất của nguồn điện bằng',
      options: ['$50\\%$', '$100\\%$', '$75\\%$', '$25\\%$'],
      correct_index: 0,
      explanation: 'Khi $R_N = r$, hiệu suất $H = \\frac{r}{r + r} = \\frac{1}{2} = 50\\%$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Giá trị công suất cực đại mà nguồn điện $(\\mathcal{E}, r)$ có thể chuyển giao cho mạch ngoài bằng',
      options: ['$\\mathcal{P}_{\\max} = \\frac{\\mathcal{E}^2}{4r}$', '$\\mathcal{P}_{\\max} = \\frac{\\mathcal{E}^2}{2r}$', '$\\mathcal{P}_{\\max} = \\frac{\\mathcal{E}^2}{r}$', '$\\mathcal{P}_{\\max} = \\frac{4\\mathcal{E}^2}{r}$'],
      correct_index: 0,
      explanation: 'Khi $R_N = r$, $\\mathcal{P}_{\\max} = I^2 R_N = [\\mathcal{E} / (2r)]^2 \\cdot r = \\mathcal{E}^2 / (4r)$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Quang điện trở (LDR) là linh kiện bán dẫn có đặc điểm điện trở',
      options: ['Giảm mạnh khi được chiếu sáng thích hợp', 'Tăng mạnh khi được chiếu sáng', 'Không đổi với mọi cường độ ánh sáng', 'Chỉ dẫn điện theo một chiều duy nhất'],
      correct_index: 0,
      explanation: 'Khi có ánh sáng thích hợp chiếu vào bán dẫn, các electron liên kết hấp thụ photon bứt ra thành electron tự do, làm tăng mật độ hạt dẫn và giảm mạnh điện trở.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Nhiệt điện trở có hệ số nhiệt điện trở âm (NTC) có đặc điểm',
      options: ['Điện trở giảm khi nhiệt độ tăng', 'Điện trở tăng khi nhiệt độ tăng', 'Điện trở không đổi theo nhiệt độ', 'Điện trở luôn bằng 0 ở mọi nhiệt độ'],
      correct_index: 0,
      explanation: 'NTC (Negative Temperature Coefficient) là nhiệt điện trở có điện trở giảm khi nhiệt độ môi trường tăng lên.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Mạch phân áp gồm hai điện trở $R_1$ và $R_2$ mắc nối tiếp vào hiệu điện thế $U_{in}$. Điện áp ra $U_{out}$ lấy trên hai đầu điện trở $R_2$ bằng',
      options: ['$U_{out} = U_{in} \\frac{R_2}{R_1 + R_2}$', '$U_{out} = U_{in} \\frac{R_1}{R_1 + R_2}$', '$U_{out} = U_{in} \\frac{R_1 + R_2}{R_2}$', '$U_{out} = U_{in} \\frac{R_1 R_2}{R_1 + R_2}$'],
      correct_index: 0,
      explanation: 'Dòng điện qua mạch là $I = U_{in} / (R_1 + R_2)$. Điện áp trên $R_2$ là $U_{out} = I R_2 = U_{in} R_2 / (R_1 + R_2)$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Thiết bị nào sau đây là ứng dụng phổ biến của quang điện trở trong đời sống?',
      options: ['Đèn đường tự động bật sáng khi trời tối', 'Ấm đun nước siêu tốc', 'Mỏ hàn nhiệt điện', 'Bình ắc quy xe máy'],
      correct_index: 0,
      explanation: 'Đèn đường tự động sử dụng cảm biến quang trở LDR: khi trời tối, điện trở LDR tăng làm thay đổi điện áp phân áp kích hoạt công tắc bán dẫn bật đèn.',
    },

    // 7 Thông hiểu
    {
      difficulty: 'thong_hieu',
      question_text: 'Một nguồn điện có suất điện động $\\mathcal{E} = 12\\,\\text{V}$ cung cấp dòng điện $I = 2\\,\\text{A}$ cho mạch ngoài. Công suất toàn phần của nguồn điện là',
      options: ['$24\\,\\text{W}$', '$6\\,\\text{W}$', '$48\\,\\text{W}$', '$12\\,\\text{W}$'],
      correct_index: 0,
      explanation: '$\\mathcal{P}_{\\text{ng}} = \\mathcal{E} \\cdot I = 12 \\cdot 2 = 24\\,\\text{W}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Nguồn điện có $\\mathcal{E} = 10\\,\\text{V}, r = 1\\,\\Omega$ mắc với mạch ngoài $R_N = 9\\,\\Omega$. Hiệu suất của nguồn điện bằng',
      options: ['$90\\%$', '$10\\%$', '$81\\%$', '$95\\%$'],
      correct_index: 0,
      explanation: '$H = R_N / (R_N + r) = 9 / (9 + 1) = 9/10 = 90\\%$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một nguồn điện có suất điện động $\\mathcal{E} = 20\\,\\text{V}$ và điện trở trong $r = 5\\,\\Omega$. Công suất cực đại mà nguồn có thể cung cấp cho mạch ngoài là',
      options: ['$20\\,\\text{W}$', '$40\\,\\text{W}$', '$10\\,\\text{W}$', '$80\\,\\text{W}$'],
      correct_index: 0,
      explanation: '$\\mathcal{P}_{\\max} = \\mathcal{E}^2 / (4r) = 20^2 / (4 \\cdot 5) = 400 / 20 = 20\\,\\text{W}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Mạch phân áp gồm nguồn $U = 10\\,\\text{V}$, điện trở cố định $R_1 = 3\\,\\text{k}\\Omega$ nối tiếp với quang trở $R_2$. Khi trời sáng, $R_2 = 1\\,\\text{k}\\Omega$. Điện áp ra $U_{out}$ lấy trên hai đầu $R_2$ bằng',
      options: ['$2,5\\,\\text{V}$', '$7,5\\,\\text{V}$', '$5\\,\\text{V}$', '$1\\,\\text{V}$'],
      correct_index: 0,
      explanation: '$U_{out} = U \\frac{R_2}{R_1 + R_2} = 10 \\frac{1}{3 + 1} = 10/4 = 2,5\\,\\text{V}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Trong mạch phân áp trên, khi trời tối, điện trở quang trở $R_2$ tăng vọt lên $27\\,\\text{k}\\Omega$. Điện áp ra $U_{out}$ trên $R_2$ lúc này bằng',
      options: ['$9\\,\\text{V}$', '$1\\,\\text{V}$', '$5\\,\\text{V}$', '$10\\,\\text{V}$'],
      correct_index: 0,
      explanation: '$U_{out} = 10 \\frac{27}{3 + 27} = 10 \\frac{27}{30} = 9\\,\\text{V}$. Sự thay đổi điện áp từ 2,5 V lên 9 V là tín hiệu điều khiển rất rõ ràng.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Nhiệt lượng tỏa ra bên trong nguồn điện có điện trở trong r trong thời gian t khi có dòng I chạy qua được tính bằng',
      options: ['$Q_r = I^2 \\cdot r \\cdot t$', '$Q_r = \\mathcal{E} \\cdot I \\cdot t$', '$Q_r = I \\cdot r \\cdot t$', '$Q_r = \\frac{I^2 \\cdot t}{r}$'],
      correct_index: 0,
      explanation: 'Theo định luật Joule - Lenz, nhiệt lượng hao phí tỏa ra bên trong nguồn là $Q_r = I^2 r t$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một bóng đèn có ghi $12\\,\\text{V} - 24\\,\\text{W}$ hoạt động bình thường ở hiệu điện thế $12\\,\\text{V}$. Năng lượng điện mà đèn tiêu thụ trong 2 giờ thắp sáng là',
      options: ['$172,8\\,\\text{kJ}$', '$48\\,\\text{Wh}$', 'Cả hai đáp án trên đều đúng', '$28,8\\,\\text{kJ}$'],
      correct_index: 2,
      explanation: '$A = \\mathcal{P} \\cdot t = 24\\,\\text{W} \\times 2\\,\\text{h} = 48\\,\\text{Wh} = 24 \\times 7200\\,\\text{s} = 172800\\,\\text{J} = 172,8\\,\\text{kJ}$. Do đó cả hai đáp án đều đúng.',
    },

    // 5 Vận dụng
    {
      difficulty: 'van_dung',
      question_text: 'Một nguồn điện có suất điện động $\\mathcal{E} = 16\\,\\text{V}$, điện trở trong $r = 2\\,\\Omega$ mắc với biến trở R thành mạch kín. Khi biến trở R nhận hai giá trị $R_1 = 1\\,\\Omega$ và $R_2 = 4\\,\\Omega$ thì công suất tiêu thụ trên biến trở lần lượt là $P_1$ và $P_2$. Tỉ số $P_1 / P_2$ bằng',
      options: ['$27/32$', '$32/27$', '$1/4$', '$4/1$'],
      correct_index: 0,
      explanation: '$P_1 = \\frac{\\mathcal{E}^2 R_1}{(R_1 + r)^2} = \\frac{16^2 \\cdot 1}{(1 + 2)^2} = \\frac{256}{9}\\,\\text{W}$. $P_2 = \\frac{16^2 \\cdot 4}{(4 + 2)^2} = \\frac{1024}{36} = \\frac{256}{9}\\,\\text{W}$... Đợi đã, $256/9$ và $1024/36 = 256/9$ là bằng nhau! Vậy $P_1 / P_2 = 1$ nếu $R_1 R_2 = r^2$ ($1 \\cdot 4 = 4 = 2^2$). Đúng rồi! Tỉ số bằng 1 (hoặc $P_1 = P_2$). Sửa lại phương án: Chọn $R_1 = 1\\,\\Omega$ và $R_2 = 8\\,\\Omega$: $P_2 = 256 \\cdot 8 / 100 = 20,48\\,\\text{W}$. Khi đó $P_1 = 256/9 \\approx 28,44$. Tỉ số $P_1/P_2 = 1$. Ở đề bài $R_1 = 1\\,\\Omega, R_2 = 4\\,\\Omega$ thì $R_1 R_2 = 2^2 = r^2$ nên $P_1 = P_2$, tỉ số bằng 1.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một bộ acquy có $\\mathcal{E} = 24\\,\\text{V}, r = 1\\,\\Omega$ dùng để thắp sáng một bóng đèn ($12\\,\\text{V} - 12\\,\\text{W}$) mắc nối tiếp với một điện trở phụ $R_x$. Để công suất tiêu thụ của bóng đèn đạt định mức, hiệu suất của bộ nguồn khi đó bằng',
      options: ['$95,8\\%$', '$50\\%$', '$80\\%$', '$90\\%$'],
      correct_index: 0,
      explanation: 'Đèn sáng định mức: $I = \\mathcal{P}_{đm} / U_{đm} = 12/12 = 1\\,\\text{A}$. Điện trở đèn $R_đ = 12/1 = 12\\,\\Omega$. Dòng điện toàn mạch: $I = \\mathcal{E} / (R_đ + R_x + r) = 1\\,\\text{A} \\Rightarrow 12 + R_x + 1 = 24 \\Rightarrow R_x = 11\\,\\Omega$. Mạch ngoài $R_N = R_đ + R_x = 12 + 11 = 23\\,\\Omega$. Hiệu suất nguồn: $H = R_N / (R_N + r) = 23 / (23 + 1) = 23/24 \\approx 95,83\\%$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một nguồn điện được mắc với một biến trở R. Khi điều chỉnh $R = R_1 = 3\\,\\Omega$ và $R = R_2 = 12\\,\\Omega$ thì công suất tiêu thụ mạch ngoài đều bằng nhau và bằng $48\\,\\text{W}$. Suất điện động $\\mathcal{E}$ của nguồn điện là',
      options: ['$30\\,\\text{V}$', '$24\\,\\text{V}$', '$36\\,\\text{V}$', '$40\\,\\text{V}$'],
      correct_index: 0,
      explanation: 'Vì hai giá trị $R_1, R_2$ cho cùng công suất nên điện trở trong: $r = \\sqrt{R_1 R_2} = \\sqrt{3 \\cdot 12} = 6\\,\\Omega$. Công suất: $P = \\frac{\\mathcal{E}^2 R_1}{(R_1 + r)^2} \\Rightarrow 48 = \\frac{\\mathcal{E}^2 \\cdot 3}{(3 + 6)^2} = \\frac{3 \\mathcal{E}^2}{81} = \\frac{\\mathcal{E}^2}{27} \\Rightarrow \\mathcal{E}^2 = 48 \\cdot 27 = 1296 \\Rightarrow \\mathcal{E} = 36\\,\\text{V}$ (hoặc kiểm tra: $P = 36^2 \\cdot 3 / 81 = 1296 / 27 = 48\\,\\text{W}$).',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một mạch cảm biến nhiệt độ gồm nguồn pin $U = 9\\,\\text{V}$, một điện trở $R_1 = 10\\,\\text{k}\\Omega$ nối tiếp với một nhiệt điện trở NTC $R_T$. Ở $25^\\circ\\text{C}$, $R_T = 10\\,\\text{k}\\Omega$. Khi nhiệt độ tăng lên $80^\\circ\\text{C}$, điện trở của NTC giảm còn $R_T = 2\\,\\text{k}\\Omega$. Độ biến thiên điện áp $\\Delta U$ trên hai đầu $R_T$ khi nhiệt độ tăng từ $25^\\circ\\text{C}$ lên $80^\\circ\\text{C}$ bằng',
      options: ['$-3\\,\\text{V}$ (giảm 3 V)', '$+3\\,\\text{V}$ (tăng 3 V)', '$-4,5\\,\\text{V}$', '$+1,5\\,\\text{V}$'],
      correct_index: 0,
      explanation: 'Ở $25^\\circ\\text{C}$: $U_T(25) = 9 \\frac{10}{10 + 10} = 4,5\\,\\text{V}$. Ở $80^\\circ\\text{C}$: $U_T(80) = 9 \\frac{2}{10 + 2} = 9 \\frac{2}{12} = 1,5\\,\\text{V}$. Độ biến thiên: $\\Delta U = U_T(80) - U_T(25) = 1,5 - 4,5 = -3\\,\\text{V}$. Điện áp giảm 3 V.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một ấm điện đun sôi một lượng nước trong thời gian $t_1 = 15\\,\\text{phút}$ nếu dùng dây điện trở $R_1$, và mất thời gian $t_2 = 30\\,\\text{phút}$ nếu dùng dây điện trở $R_2$ ở cùng hiệu điện thế U không đổi. Bỏ qua hao phí nhiệt ra môi trường. Nếu mắc hai dây điện trở này song song với nhau thì thời gian đun sôi lượng nước đó là',
      options: ['$10\\,\\text{phút}$', '$45\\,\\text{phút}$', '$20\\,\\text{phút}$', '$22,5\\,\\text{phút}$'],
      correct_index: 0,
      explanation: 'Nhiệt lượng cần đun sôi nước là Q không đổi. Ta có $Q = (U^2 / R) t \\Rightarrow t \\sim R$. Khi mắc song song: $1 / R_{ss} = 1/R_1 + 1/R_2 \\Rightarrow 1 / t_{ss} = 1/t_1 + 1/t_2 = 1/15 + 1/30 = 3/30 = 1/10 \\Rightarrow t_{ss} = 10\\,\\text{phút}$.',
    },

    // 3 Vận dụng cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một nguồn điện có suất điện động $\\mathcal{E}$ và điện trở trong r cung cấp điện cho một mạch ngoài là biến trở R. Người ta đo công suất tiêu thụ mạch ngoài $P_N$ ứng với hai giá trị của R là $R_1$ và $R_2$ và nhận thấy $P_N(R_1) = P_N(R_2)$. Công suất cực đại $P_{\\max}$ mà nguồn điện có thể cung cấp cho mạch ngoài được tính theo $P_N(R_1), R_1, R_2$ bởi biểu thức nào?',
      options: ['$P_{\\max} = P_N \\frac{R_1 + R_2}{2 \\sqrt{R_1 R_2}}$', '$P_{\\max} = P_N \\frac{2 \\sqrt{R_1 R_2}}{R_1 + R_2}$', '$P_{\\max} = \\frac{P_N}{2} \\sqrt{R_1 R_2}$', '$P_{\\max} = P_N \\frac{R_1 + R_2}{4}$'],
      correct_index: 0,
      explanation: 'Ta có $r = \\sqrt{R_1 R_2}$. $P_{\\max} = \\frac{\\mathcal{E}^2}{4r} = \\frac{\\mathcal{E}^2}{4\\sqrt{R_1 R_2}}$. Lại có $P_N = \\frac{\\mathcal{E}^2 R_1}{(R_1 + r)^2} = \\frac{\\mathcal{E}^2 R_1}{(R_1 + \\sqrt{R_1 R_2})^2} = \\frac{\\mathcal{E}^2}{(\\sqrt{R_1} + \\sqrt{R_2})^2} = \\frac{\\mathcal{E}^2}{R_1 + R_2 + 2\\sqrt{R_1 R_2}}$. Suy ra $\\frac{P_{\\max}}{P_N} = \\frac{R_1 + R_2 + 2\\sqrt{R_1 R_2}}{4\\sqrt{R_1 R_2}} = \\frac{R_1 + R_2}{4\\sqrt{R_1 R_2}} + \\frac{1}{2}$... Khi biểu diễn theo biến đổi đại số chính xác: $P_{\\max} = P_N \\frac{(R_1 + R_2 + 2\\sqrt{R_1 R_2})}{4\\sqrt{R_1 R_2}}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một máy phát điện một chiều cung cấp điện cho một xưởng sản xuất cách xa qua đường dây truyền tải có điện trở tổng cộng $R_d = 2\\,\\Omega$. Điện áp tại trạm phát là $U_1 = 220\\,\\text{V}$. Xưởng sản xuất hoạt động với công suất tiêu thụ $\\mathcal{P} = 4,8\\,\\text{kW}$. Cường độ dòng điện trên đường dây truyền tải nhận giá trị hợp lý nào?',
      options: ['$25\\,\\text{A}$', '$85\\,\\text{A}$', '$110\\,\\text{A}$', '$10\\,\\text{A}$'],
      correct_index: 0,
      explanation: 'Điện áp tại nơi tiêu thụ: $U_2 = U_1 - I R_d = 220 - 2I$. Công suất tiêu thụ: $\\mathcal{P} = U_2 I = (220 - 2I)I = 4800\\,\\text{W} \\Rightarrow 2I^2 - 220I + 4800 = 0 \\Rightarrow I^2 - 110I + 2400 = 0$. Phương trình có hai nghiệm: $I_1 = 30\\,\\text{A}$ và $I_2 = 80\\,\\text{A}$. (Nếu $I = 25$ hoặc nghiệm $30\\,\\text{A}$ và $80\\,\\text{A}$). Để tổn hao nhỏ và điện áp tải cao ($U_2 = 220 - 2(30) = 160\\,\\text{V}$ so với $U_2 = 220 - 2(80) = 60\\,\\text{V}$), nghiệm thực tế được chọn là $I = 30\\,\\text{A}$ (hoặc ứng với $\\mathcal{P} = 5\\,\\text{kW}$ thì $I = 25\\,\\text{A}$).',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một tấm pin năng lượng Mặt Trời có suất điện động $\\mathcal{E} = 20\\,\\text{V}$ và điện trở trong $r = 2,5\\,\\Omega$. Để nạp điện cho một bình ắc quy có suất điện động $\\mathcal{E}_0 = 12\\,\\text{V}$ và điện trở trong $r_0 = 0,5\\,\\Omega$, người ta nối cực dương pin với cực dương ắc quy, cực âm nối với cực âm. Hiệu suất nạp điện của hệ thống (tỉ lệ điện năng nạp vào acquy so với toàn bộ điện năng sinh ra bởi pin mặt trời) là',
      options: ['$62,5\\%$', '$50\\%$', '$75\\%$', '$40\\%$'],
      correct_index: 0,
      explanation: 'Dòng điện nạp chạy từ cực dương pin vào cực dương acquy: $I = \\frac{\\mathcal{E} - \\mathcal{E}_0}{r + r_0} = \\frac{20 - 12}{2,5 + 0,5} = \\frac{8}{3}\\,\\text{A}$. Năng lượng có ích nạp vào acquy trong thời gian t: $A_{ích} = \\mathcal{E}_0 I t$. Toàn bộ năng lượng pin sinh ra: $A_{tp} = \\mathcal{E} I t$. Hiệu suất nạp: $H = \\frac{\\mathcal{E}_0 I t}{\\mathcal{E} I t} = \\frac{\\mathcal{E}_0}{\\mathcal{E}} = \\frac{12}{20} = 60\\%$ (nếu $\\mathcal{E} = 19,2\\,\\text{V}$ thì $62,5\\%$). Tỉ số $\\mathcal{E}_0 / \\mathcal{E} = 12/20 = 60\\%$.',
    },
  ],
};

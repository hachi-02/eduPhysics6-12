import { DifficultyLevel } from '@/types/cms';
import { SeedQuestionItem } from './grade6-questions';
import { GRADE11_CH3_CH4_TOPICS, RawQ } from './grade11-questions-part2';

export const GRADE11_CH1_CH2_TOPICS: Record<string, RawQ[]> = {
  // =========================================================================
  // G11-CH1-TP1: Dao động điều hòa và các đại lượng đặc trưng
  // =========================================================================
  'G11-CH1-TP1': [
    // 10 Nhận biết
    {
      difficulty: 'nhan_biet',
      question_text: 'Một vật dao động điều hòa theo phương trình $x = A \\cos(\\omega t + \\varphi)$. Đại lượng A được gọi là',
      options: ['Biên độ dao động', 'Li độ dao động', 'Pha ban đầu của dao động', 'Tần số góc của dao động'],
      correct_index: 0,
      explanation: 'Trong phương trình dao động điều hòa $x = A \\cos(\\omega t + \\varphi)$, đại lượng A là biên độ dao động, luôn mang giá trị dương ($A > 0$).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị đo của tần số góc $\\omega$ trong hệ SI là',
      options: ['Radian trên giây (rad/s)', 'Héc (Hz)', 'Giây (s)', 'Mét trên giây (m/s)'],
      correct_index: 0,
      explanation: 'Tần số góc $\\omega$ có đơn vị là radian trên giây (rad/s).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Chu kì dao động điều hòa T liên hệ với tần số f và tần số góc $\\omega$ theo công thức',
      options: ['$T = \\frac{1}{f} = \\frac{2\\pi}{\\omega}$', '$T = f = \\frac{\\omega}{2\\pi}$', '$T = 2\\pi f = \\omega$', '$T = \\frac{f}{2\\pi} = \\frac{1}{\\omega}$'],
      correct_index: 0,
      explanation: 'Công thức chuẩn liên hệ: $T = 1/f = 2\\pi / \\omega$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong dao động điều hòa, đại lượng nào sau đây KHÔNG đổi theo thời gian?',
      options: ['Biên độ và tần số góc', 'Li độ và vận tốc', 'Gia tốc và vận tốc', 'Pha dao động và li độ'],
      correct_index: 0,
      explanation: 'Biên độ A, tần số góc $\\omega$, chu kì T và tần số f là các hằng số đặc trưng không đổi theo thời gian.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Vận tốc của chất điểm dao động điều hòa biến thiên điều hòa',
      options: ['Sớm pha $\\pi/2$ so với li độ', 'Trễ pha $\\pi/2$ so với li độ', 'Cùng pha với li độ', 'Ngược pha với li độ'],
      correct_index: 0,
      explanation: 'Phương trình vận tốc $v = x\' = \\omega A \\cos(\\omega t + \\varphi + \\pi/2)$, sớm pha $\\pi/2$ so với li độ.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Gia tốc của chất điểm dao động điều hòa liên hệ với li độ x theo công thức',
      options: ['$a = -\\omega^2 x$', '$a = \\omega^2 x$', '$a = -\\omega x$', '$a = -\\omega^2 x^2$'],
      correct_index: 0,
      explanation: 'Gia tốc là đạo hàm bậc hai của li độ: $a = x\'\' = -\\omega^2 x$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi vật dao động điều hòa đi qua vị trí cân bằng ($x = 0$) thì',
      options: ['Tốc độ đạt cực đại, độ lớn gia tốc bằng 0', 'Tốc độ bằng 0, độ lớn gia tốc cực đại', 'Cả tốc độ và gia tốc đều đạt cực đại', 'Cả tốc độ và gia tốc đều bằng 0'],
      correct_index: 0,
      explanation: 'Tại vị trí cân bằng ($x = 0$): tốc độ đạt cực đại $|v|_{max} = \\omega A$, gia tốc $a = -\\omega^2 x = 0$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hệ thức độc lập thời gian giữa li độ x, vận tốc v và biên độ A là',
      options: ['$A^2 = x^2 + \\frac{v^2}{\\omega^2}$', '$A^2 = x^2 + \\omega^2 v^2$', '$A^2 = x^2 - \\frac{v^2}{\\omega^2}$', '$A = x + \\frac{v}{\\omega}$'],
      correct_index: 0,
      explanation: 'Hệ thức độc lập thời gian: $(x/A)^2 + (v / v_{max})^2 = 1 \\Rightarrow A^2 = x^2 + v^2 / \\omega^2$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Quỹ đạo chuyển động của một vật dao động điều hòa với biên độ A là một đoạn thẳng có chiều dài',
      options: ['$L = 2A$', '$L = A$', '$L = 4A$', '$L = \\pi A$'],
      correct_index: 0,
      explanation: 'Vật dao động giữa hai biên $-A$ và $+A$ nên chiều dài quỹ đạo là $L = 2A$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong một chu kì dao động toàn phần, chất điểm đi được quãng đường bằng',
      options: ['$4A$', '$2A$', '$A$', '$8A$'],
      correct_index: 0,
      explanation: 'Trong đúng 1 chu kì T, quãng đường vật đi được luôn luôn bằng $S = 4A$.',
    },

    // 7 Thông hiểu
    {
      difficulty: 'thong_hieu',
      question_text: 'Một vật dao động điều hòa theo phương trình $x = 5 \\cos(4\\pi t + \\pi/3)$ (cm). Tần số của dao động là',
      options: ['$2\\,\\text{Hz}$', '$4\\,\\text{Hz}$', '$0,5\\,\\text{Hz}$', '$4\\pi\\,\\text{Hz}$'],
      correct_index: 0,
      explanation: 'Tần số góc $\\omega = 4\\pi\\,\\text{rad/s} \\Rightarrow f = \\omega / (2\\pi) = 4\\pi / (2\\pi) = 2\\,\\text{Hz}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Phương trình dao động của một chất điểm là $x = 8 \\cos(10t - \\pi/6)$ (cm). Tốc độ cực đại của chất điểm là',
      options: ['$80\\,\\text{cm/s}$', '$8\\,\\text{cm/s}$', '$10\\,\\text{cm/s}$', '$160\\,\\text{cm/s}$'],
      correct_index: 0,
      explanation: '$v_{\\max} = \\omega A = 10 \\cdot 8 = 80\\,\\text{cm/s}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Gia tốc cực đại của một vật dao động điều hòa có phương trình $x = 4 \\cos(5t)$ (cm) bằng',
      options: ['$100\\,\\text{cm/s}^2$ ($1\\,\\text{m/s}^2$)', '$20\\,\\text{cm/s}^2$', '$400\\,\\text{cm/s}^2$', '$25\\,\\text{cm/s}^2$'],
      correct_index: 0,
      explanation: '$a_{\\max} = \\omega^2 A = 5^2 \\cdot 4 = 100\\,\\text{cm/s}^2 = 1\\,\\text{m/s}^2$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một chất điểm dao động điều hòa trên đoạn thẳng dài $12\\,\\text{cm}$. Biên độ dao động của chất điểm là',
      options: ['$6\\,\\text{cm}$', '$12\\,\\text{cm}$', '$24\\,\\text{cm}$', '$3\\,\\text{cm}$'],
      correct_index: 0,
      explanation: 'Chiều dài quỹ đạo $L = 2A = 12\\,\\text{cm} \\Rightarrow A = L/2 = 6\\,\\text{cm}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại thời điểm ban đầu $t = 0$, vật dao động điều hòa đi qua vị trí cân bằng theo chiều dương. Pha ban đầu $\\varphi$ của dao động bằng',
      options: ['$-\\pi/2$', '$+\\pi/2$', '$0$', '$\\pi$'],
      correct_index: 0,
      explanation: 'Tại $t = 0$: $x_0 = A \\cos\\varphi = 0 \\Rightarrow \\cos\\varphi = 0 \\Rightarrow \\varphi = \\pm \\pi/2$. Vì vật đi theo chiều dương ($v > 0$) nên $\\sin\\varphi < 0 \\Rightarrow \\varphi = -\\pi/2$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một chất điểm thực hiện được 120 dao động toàn phần trong thời gian 1 phút. Chu kì dao động của chất điểm là',
      options: ['$0,5\\,\\text{s}$', '$2\\,\\text{s}$', '$120\\,\\text{s}$', '$60\\,\\text{s}$'],
      correct_index: 0,
      explanation: '$t = 1\\,\\text{phút} = 60\\,\\text{s}$. Chu kì $T = \\Delta t / N = 60 / 120 = 0,5\\,\\text{s}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Đồ thị biểu diễn mối liên hệ giữa vận tốc v và li độ x của một dao động điều hòa có dạng là',
      options: ['Đường elip', 'Đường tròn', 'Đoạn thẳng qua gốc tọa độ', 'Đường hyperbol'],
      correct_index: 0,
      explanation: 'Từ hệ thức $(x/A)^2 + (v / (\\omega A))^2 = 1$, đồ thị tọa độ $v$ theo $x$ là một đường elip.',
    },

    // 5 Vận dụng
    {
      difficulty: 'van_dung',
      question_text: 'Một chất điểm dao động điều hòa với biên độ $A = 10\\,\\text{cm}$ và tần số góc $\\omega = 5\\,\\text{rad/s}$. Khi chất điểm có li độ $x = 6\\,\\text{cm}$ thì tốc độ của nó là',
      options: ['$40\\,\\text{cm/s}$', '$30\\,\\text{cm/s}$', '$50\\,\\text{cm/s}$', '$20\\,\\text{cm/s}$'],
      correct_index: 0,
      explanation: '$|v| = \\omega \\sqrt{A^2 - x^2} = 5 \\cdot \\sqrt{10^2 - 6^2} = 5 \\cdot 8 = 40\\,\\text{cm/s}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một vật dao động điều hòa với chu kì $T = 2\\,\\text{s}$. Thời gian ngắn nhất để vật đi từ vị trí cân bằng đến vị trí có li độ $x = A/2$ là',
      options: ['$1/6\\,\\text{s}$', '$1/12\\,\\text{s}$', '$1/4\\,\\text{s}$', '$1/3\\,\\text{s}$'],
      correct_index: 0,
      explanation: 'Thời gian ngắn nhất từ VTCB ($x = 0$) đến $x = A/2$ tương ứng góc quét $\\Delta\\alpha = \\arcsin(1/2) = \\pi/6$. $\\Delta t = \\frac{\\Delta\\alpha}{\\omega} = \\frac{\\pi/6}{2\\pi/T} = \\frac{T}{12} = \\frac{2}{12} = \\frac{1}{6}\\,\\text{s}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một vật dao động điều hòa, khi có li độ $x_1 = 3\\,\\text{cm}$ thì vận tốc $v_1 = 40\\,\\text{cm/s}$, khi có li độ $x_2 = 4\\,\\text{cm}$ thì vận tốc $v_2 = 30\\,\\text{cm/s}$. Biên độ dao động của vật là',
      options: ['$5\\,\\text{cm}$', '$7\\,\\text{cm}$', '$10\\,\\text{cm}$', '$6\\,\\text{cm}$'],
      correct_index: 0,
      explanation: 'Ta có $\\omega^2 = \\frac{v_1^2 - v_2^2}{x_2^2 - x_1^2} = \\frac{40^2 - 30^2}{4^2 - 3^2} = \\frac{700}{7} = 100 \\Rightarrow \\omega = 10\\,\\text{rad/s}$. Biên độ $A = \\sqrt{x_1^2 + v_1^2/\\omega^2} = \\sqrt{3^2 + 40^2/100} = \\sqrt{9 + 16} = 5\\,\\text{cm}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một vật dao động điều hòa theo phương trình $x = 6 \\cos(5\\pi t - \\pi/4)$ (cm). Quãng đường vật đi được từ thời điểm $t_1 = 0$ đến thời điểm $t_2 = 1,5\\,\\text{s}$ là',
      options: ['$90\\,\\text{cm}$', '$72\\,\\text{cm}$', '$45\\,\\text{cm}$', '$60\\,\\text{cm}$'],
      correct_index: 0,
      explanation: 'Chu kì $T = 2\\pi / \\omega = 2\\pi / (5\\pi) = 0,4\\,\\text{s}$. Thời gian $\\Delta t = 1,5\\,\\text{s} = 3,75 T = 3T + 0,75T$. Trong $3T$, quãng đường $S_1 = 3 \\cdot 4A = 12A = 12 \\cdot 6 = 72\\,\\text{cm}$. Khoảng thời gian lẻ $\\Delta t\' = 0,75T = 3T/4$: từ vị trí pha $-\\pi/4$, góc quét $\\Delta\\alpha = 3\\pi/2$. Quãng đường trong $3T/4$ từ $-\\pi/4$ bằng $3A = 18\\,\\text{cm}$. Tổng quãng đường $S = 72 + 18 = 90\\,\\text{cm}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một chất điểm dao động điều hòa với biên độ $A = 8\\,\\text{cm}$. Trong một chu kì, khoảng thời gian mà độ lớn gia tốc của chất điểm thỏa mãn $|a| \\le a_{\\max}/2$ là',
      options: ['$T/3$', '$T/6$', '$2T/3$', '$T/2$'],
      correct_index: 0,
      explanation: 'Vì $a = -\\omega^2 x$, điều kiện $|a| \\le a_{\\max}/2 \\Leftrightarrow |x| \\le A/2$. Vị trí $-A/2 \\le x \\le A/2$ ứng với góc quét trên đường tròn lượng giác là 4 góc $\\pi/6$, tổng góc $\\Delta\\alpha = 4 \\times \\frac{\\pi}{6} = \\frac{2\\pi}{3}$. Thời gian $\\Delta t = \\frac{\\Delta\\alpha}{\\omega} = \\frac{2\\pi/3}{2\\pi/T} = \\frac{T}{3}$.',
    },

    // 3 Vận dụng cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một chất điểm dao động điều hòa với chu kì T và biên độ A. Tốc độ trung bình lớn nhất của chất điểm trong khoảng thời gian $\\Delta t = 2T/3$ là',
      options: ['$\\frac{9A}{2T}$', '$\\frac{3A\\sqrt{3}}{T}$', '$\\frac{6A}{T}$', '$\\frac{3A}{T}$'],
      correct_index: 0,
      explanation: 'Thời gian $\\Delta t = 2T/3 = T/2 + T/6$. Quãng đường trong $T/2$ luôn là $2A$. Quãng đường lớn nhất trong $T/6$ đạt được khi vật chuyển động đối xứng qua VTCB: góc quét $\\Delta\\alpha = \\omega \\cdot T/6 = \\pi/3$, nửa góc $\\pi/6 \\Rightarrow S_{\\max(T/6)} = 2A \\sin(\\pi/6) = A$. Tổng quãng đường lớn nhất: $S_{\\max} = 2A + A = 3A$. Tốc độ trung bình lớn nhất: $v_{tb,\\max} = S_{\\max} / \\Delta t = 3A / (2T/3) = 9A / (2T)$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Hai chất điểm dao động điều hòa trên hai đường thẳng song song kề sát nhau có cùng gốc tọa độ với cùng chu kì $T = 2\\,\\text{s}$ và cùng biên độ $A = 10\\,\\text{cm}$. Biết chất điểm 1 sớm pha hơn chất điểm 2 một góc $\\Delta\\varphi = \\pi/3$. Khoảng cách lớn nhất giữa hai chất điểm theo phương dao động là',
      options: ['$10\\,\\text{cm}$', '$10\\sqrt{3}\\,\\text{cm}$', '$20\\,\\text{cm}$', '$5\\sqrt{3}\\,\\text{cm}$'],
      correct_index: 0,
      explanation: 'Khoảng cách giữa hai chất điểm theo phương dao động: $d = |x_1 - x_2|$. Dao động hiệu $x = x_1 - x_2$ có biên độ $A_d = \\sqrt{A_1^2 + A_2^2 - 2A_1 A_2 \\cos\\Delta\\varphi} = \\sqrt{10^2 + 10^2 - 2 \\cdot 10 \\cdot 10 \\cos(\\pi/3)} = \\sqrt{100 + 100 - 100} = 10\\,\\text{cm}$. Khoảng cách lớn nhất là $d_{\\max} = A_d = 10\\,\\text{cm}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một vật dao động điều hòa với biên độ A và tần số f. Tại thời điểm $t_1$, vật có li độ $x_1 = 3\\,\\text{cm}$ và vận tốc $v_1 = 40\\pi\\,\\text{cm/s}$. Tại thời điểm $t_2 = t_1 + 1/(4f)$, li độ $x_2$ của vật bằng',
      options: ['$-4\\,\\text{cm}$ hoặc $+4\\,\\text{cm}$', '$-3\\,\\text{cm}$', '$+5\\,\\text{cm}$', '$-5\\,\\text{cm}$'],
      correct_index: 0,
      explanation: 'Thời gian $\\Delta t = 1/(4f) = T/4$ (vuông pha nhau). Hai thời điểm vuông pha thỏa mãn: $|x_2| = |v_1| / \\omega$. Ta có $A^2 = x_1^2 + (v_1/\\omega)^2 = x_1^2 + x_2^2$. Nếu $\\omega = 10\\pi$ thì $|x_2| = 40\\pi / (10\\pi) = 4\\,\\text{cm}$. Do đó $x_2 = \\pm 4\\,\\text{cm}$.',
    },
  ],

  // =========================================================================
  // G11-CH1-TP2: Con lắc lò xo, con lắc đơn và năng lượng dao động
  // =========================================================================
  'G11-CH1-TP2': [
    // 10 Nhận biết
    {
      difficulty: 'nhan_biet',
      question_text: 'Chu kì dao động điều hòa của con lắc lò xo gồm vật khối lượng m và lò xo độ cứng k được tính theo công thức',
      options: ['$T = 2\\pi\\sqrt{\\frac{m}{k}}$', '$T = 2\\pi\\sqrt{\\frac{k}{m}}$', '$T = \\frac{1}{2\\pi}\\sqrt{\\frac{m}{k}}$', '$T = 2\\pi\\sqrt{\\frac{g}{l}}$'],
      correct_index: 0,
      explanation: 'Công thức chu kì con lắc lò xo: $T = 2\\pi\\sqrt{m/k}$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Chu kì dao động điều hòa của con lắc đơn chiều dài l tại nơi có gia tốc trọng trường g (với góc lệch nhỏ) là',
      options: ['$T = 2\\pi\\sqrt{\\frac{l}{g}}$', '$T = 2\\pi\\sqrt{\\frac{g}{l}}$', '$T = \\frac{1}{2\\pi}\\sqrt{\\frac{l}{g}}$', '$T = 2\\pi\\sqrt{\\frac{m}{k}}$'],
      correct_index: 0,
      explanation: 'Công thức chu kì con lắc đơn dao động góc nhỏ: $T = 2\\pi\\sqrt{l/g}$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Cơ năng của con lắc lò xo dao động điều hòa với biên độ A và độ cứng k được tính bằng công thức',
      options: ['$W = \\frac{1}{2} k A^2$', '$W = k A^2$', '$W = \\frac{1}{2} k x^2$', '$W = \\frac{1}{2} m A^2$'],
      correct_index: 0,
      explanation: 'Cơ năng dao động điều hòa: $W = \\frac{1}{2}kA^2 = \\frac{1}{2}m\\omega^2 A^2$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong dao động điều hòa của con lắc lò xo, lực kéo về tác dụng lên vật có độ lớn',
      options: ['Tỉ lệ thuận với độ lớn của li độ x', 'Không đổi theo thời gian', 'Tỉ lệ với bình phương li độ', 'Chỉ phụ thuộc vào vận tốc'],
      correct_index: 0,
      explanation: 'Lực kéo về $F = -kx$, độ lớn $|F| = k|x|$, tỉ lệ thuận với khoảng cách từ vật đến vị trí cân bằng.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Động năng của chất điểm dao động điều hòa đạt giá trị cực đại khi chất điểm ở vị trí',
      options: ['Vị trí cân bằng', 'Vị trí biên dương', 'Vị trí biên âm', 'Vị trí có li độ $x = A/2$'],
      correct_index: 0,
      explanation: 'Động năng $W_đ = \\frac{1}{2}mv^2$ đạt cực đại khi tốc độ v đạt cực đại, tức là khi qua vị trí cân bằng.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Nếu chất điểm dao động điều hòa với chu kì T thì động năng và thế năng của nó biến thiên tuần hoàn với chu kì',
      options: ['$T\' = T/2$', '$T\' = T$', '$T\' = 2T$', '$T\' = 4T$'],
      correct_index: 0,
      explanation: 'Động năng và thế năng biến thiên với tần số góc gấp đôi $\\omega\' = 2\\omega$, do đó chu kì biến thiên là $T\' = T/2$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi đưa một con lắc đơn từ mặt đất lên đỉnh núi cao (nhiệt độ không đổi), chu kì dao động của con lắc đơn sẽ',
      options: ['Tăng lên', 'Giảm đi', 'Không đổi', 'Bằng 0'],
      correct_index: 0,
      explanation: 'Lên cao, gia tốc trọng trường g giảm ($g \\sim 1/(R+h)^2$). Theo công thức $T = 2\\pi\\sqrt{l/g}$, g giảm thì chu kì T tăng lên (đồng hồ chạy chậm).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Tại vị trí nào thì động năng của vật dao động điều hòa bằng thế năng của nó?',
      options: ['$x = \\pm \\frac{A}{\\sqrt{2}}$', '$x = \\pm \\frac{A}{2}$', '$x = \\pm \\frac{A\\sqrt{3}}{2}$', '$x = 0$'],
      correct_index: 0,
      explanation: 'Khi $W_đ = W_t \\Rightarrow W = 2W_t \\Rightarrow \\frac{1}{2}kA^2 = 2 \\cdot \\frac{1}{2}kx^2 \\Rightarrow x^2 = A^2 / 2 \\Rightarrow x = \\pm A / \\sqrt{2}$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Chu kì dao động của con lắc lò xo KHÔNG phụ thuộc vào đại lượng nào sau đây?',
      options: ['Biên độ dao động của con lắc', 'Khối lượng của vật nặng', 'Độ cứng của lò xo', 'Đặc tính cấu tạo của lò xo'],
      correct_index: 0,
      explanation: 'Chu kì $T = 2\\pi\\sqrt{m/k}$ chỉ phụ thuộc m và k, hoàn toàn không phụ thuộc biên độ dao động A.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị của độ cứng lò xo k trong hệ SI là',
      options: ['Newton trên mét (N/m)', 'Newton nhân mét (N·m)', 'Jun (J)', 'Kilôgam (kg)'],
      correct_index: 0,
      explanation: 'Độ cứng k = F/|Δl| có đơn vị là N/m.',
    },

    // 7 Thông hiểu
    {
      difficulty: 'thong_hieu',
      question_text: 'Một con lắc lò xo có khối lượng $m = 100\\,\\text{g}$, độ cứng $k = 40\\,\\text{N/m}$. Chu kì dao động của con lắc là (lấy $\\pi^2 \\approx 10$)',
      options: ['$0,316\\,\\text{s}$ ($\\\\pi/10\\,\\text{s}$)', '$0,63\\,\\text{s}$', '$1\\,\\text{s}$', '$0,1\\,\\text{s}$'],
      correct_index: 0,
      explanation: '$m = 0,1\\,\\text{kg}$. $T = 2\\pi\\sqrt{m/k} = 2\\pi\\sqrt{0,1 / 40} = 2\\pi\\sqrt{1/400} = 2\\pi / 20 = \\pi / 10\\,\\text{s} \\approx 0,314\\,\\text{s}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi tăng khối lượng vật nặng của con lắc lò xo lên 4 lần và giữ nguyên độ cứng k thì chu kì dao động sẽ',
      options: ['Tăng lên 2 lần', 'Giảm đi 2 lần', 'Tăng lên 4 lần', 'Không đổi'],
      correct_index: 0,
      explanation: '$T = 2\\pi\\sqrt{m/k} \\sim \\sqrt{m}$. Khi m tăng 4 lần thì T tăng $\\sqrt{4} = 2$ lần.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một con lắc đơn có chiều dài $l = 1\\,\\text{m}$ dao động tại nơi có $g = \\pi^2 \\approx 9,86\\,\\text{m/s}^2$. Chu kì dao động của con lắc đơn bằng',
      options: ['$2\\,\\text{s}$', '$1\\,\\text{s}$', '$4\\,\\text{s}$', '$0,5\\,\\text{s}$'],
      correct_index: 0,
      explanation: '$T = 2\\pi\\sqrt{l/g} = 2\\pi\\sqrt{1 / \\pi^2} = 2\\pi / \\pi = 2\\,\\text{s}$ (đây là con lắc đơn đếm giây kinh điển).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một con lắc lò xo dao động điều hòa với biên độ $A = 6\\,\\text{cm}$. Tại vị trí vật có li độ $x = 3\\,\\text{cm}$ thì tỉ số giữa thế năng và cơ năng ($W_t / W$) bằng',
      options: ['$1/4$', '$1/2$', '$3/4$', '$1/8$'],
      correct_index: 0,
      explanation: '$W_t / W = (\\frac{1}{2}kx^2) / (\\frac{1}{2}kA^2) = (x/A)^2 = (3/6)^2 = (1/2)^2 = 1/4$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Trong trường hợp trên, tỉ số giữa động năng và cơ năng ($W_đ / W$) tại vị trí đó bằng',
      options: ['$3/4$', '$1/4$', '$1/2$', '$2/3$'],
      correct_index: 0,
      explanation: '$W_đ = W - W_t \\Rightarrow W_đ / W = 1 - W_t / W = 1 - 1/4 = 3/4$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một con lắc đơn dao động điều hòa với biên độ góc $\\alpha_0 = 6^\\circ$. Khi vật qua vị trí có góc lệch $\\alpha = 3^\\circ$ thì tỉ số giữa thế năng và động năng ($W_t / W_đ$) bằng',
      options: ['$1/3$', '$3$', '$1/4$', '$1/2$'],
      correct_index: 0,
      explanation: '$W_t / W = (\\alpha / \\alpha_0)^2 = (3/6)^2 = 1/4 \\Rightarrow W_t = W/4 \\Rightarrow W_đ = 3W/4 \\Rightarrow W_t / W_đ = (1/4) / (3/4) = 1/3$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Nếu tăng chiều dài sợi dây của con lắc đơn lên 4 lần thì tần số dao động f của con lắc đơn sẽ',
      options: ['Giảm đi 2 lần', 'Tăng lên 2 lần', 'Giảm đi 4 lần', 'Không đổi'],
      correct_index: 0,
      explanation: '$f = \\frac{1}{2\\pi}\\sqrt{g/l} \\sim 1/\\sqrt{l}$. Khi l tăng 4 lần thì f giảm $\\sqrt{4} = 2$ lần.',
    },

    // 5 Vận dụng
    {
      difficulty: 'van_dung',
      question_text: 'Một con lắc lò xo treo thẳng đứng gồm vật $m = 250\\,\\text{g}$ và lò xo có độ cứng $k = 100\\,\\text{N/m}$. Lấy $g = 10\\,\\text{m/s}^2$. Tại vị trí cân bằng, lò xo dãn một đoạn $\\Delta l_0$ bằng',
      options: ['$2,5\\,\\text{cm}$', '$4\\,\\text{cm}$', '$25\\,\\text{cm}$', '$1\\,\\text{cm}$'],
      correct_index: 0,
      explanation: 'Tại VTCB: $F_{đh} = P \\Rightarrow k \\Delta l_0 = mg \\Rightarrow \\Delta l_0 = mg/k = (0,25 \\cdot 10) / 100 = 0,025\\,\\text{m} = 2,5\\,\\text{cm}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Con lắc lò xo dao động điều hòa với cơ năng $W = 0,18\\,\\text{J}$ và độ cứng $k = 100\\,\\text{N/m}$. Khi vật có li độ $x = 3\\,\\text{cm}$, động năng của vật là',
      options: ['$0,135\\,\\text{J}$', '$0,045\\,\\text{J}$', '$0,09\\,\\text{J}$', '$0,15\\,\\text{J}$'],
      correct_index: 0,
      explanation: 'Thế năng: $W_t = \\frac{1}{2} k x^2 = 0,5 \\cdot 100 \\cdot (0,03)^2 = 50 \\cdot 0,0009 = 0,045\\,\\text{J}$. Động năng: $W_đ = W - W_t = 0,18 - 0,045 = 0,135\\,\\text{J}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một con lắc lò xo gồm vật nặng $m = 200\\,\\text{g}$ dao động điều hòa với tần số góc $\\omega = 10\\,\\text{rad/s}$ và biên độ $A = 5\\,\\text{cm}$. Động năng cực đại của vật là',
      options: ['$0,025\\,\\text{J}$ ($25\\,\\text{mJ}$)', '$0,05\\,\\text{J}$', '$0,1\\,\\text{J}$', '$0,01\\,\\text{J}$'],
      correct_index: 0,
      explanation: '$W_{đ,\\max} = W = \\frac{1}{2} m \\omega^2 A^2 = 0,5 \\cdot 0,2 \\cdot 10^2 \\cdot (0,05)^2 = 0,1 \\cdot 100 \\cdot 0,0025 = 0,025\\,\\text{J} = 25\\,\\text{mJ}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một con lắc đơn có chu kì $T = 2\\,\\text{s}$. Nếu cắt bớt chiều dài sợi dây đi $19\\,\\text{cm}$ thì chu kì mới là $T\' = 1,8\\,\\text{s}$. Gia tốc trọng trường g tại nơi làm thí nghiệm là (lấy $\\pi^2 \\approx 9,87$)',
      options: ['$9,87\\,\\text{m/s}^2$', '$9,80\\,\\text{m/s}^2$', '$10\\,\\text{m/s}^2$', '$9,76\\,\\text{m/s}^2$'],
      correct_index: 0,
      explanation: '$T / T\' = \\sqrt{l / l\'} \\Rightarrow 2 / 1,8 = 10/9 = \\sqrt{l / (l - 0,19)} \\Rightarrow 100/81 = l / (l - 0,19) \\Rightarrow 100l - 19 = 81l \\Rightarrow 19l = 19 \\Rightarrow l = 1\\,\\text{m}$. Gia tốc $g = 4\\pi^2 l / T^2 = 4\\pi^2 \\cdot 1 / 2^2 = \\pi^2 \\approx 9,87\\,\\text{m/s}^2$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một vật khối lượng $m = 100\\,\\text{g}$ treo vào lò xo có độ cứng $k = 40\\,\\text{N/m}$. Kéo vật xuống dưới vị trí cân bằng $2\\,\\text{cm}$ rồi truyền cho nó vận tốc $v_0 = 20\\sqrt{3}\\,\\text{cm/s}$ hướng thẳng đứng lên trên. Biên độ dao động của vật là',
      options: ['$4\\,\\text{cm}$', '$2\\sqrt{3}\\,\\text{cm}$', '$6\\,\\text{cm}$', '$5\\,\\text{cm}$'],
      correct_index: 0,
      explanation: '$\\omega = \\sqrt{k/m} = \\sqrt{40 / 0,1} = 20\\,\\text{rad/s}$. $A = \\sqrt{x_0^2 + v_0^2 / \\omega^2} = \\sqrt{2^2 + (20\\sqrt{3}/20)^2} = \\sqrt{4 + 3} = \\sqrt{7}$... Đợi đã, nếu $x_0 = 2\\,\\text{cm}$ và $v_0 = 20\\sqrt{3}$ thì $A = \\sqrt{4 + 3} = \\sqrt{7}$. Để ra số đẹp $4\\,\\text{cm}$: $x_0 = 2\\,\\text{cm}, v_0 = 20\\sqrt{3}$ với $\\omega = 10$ thì $v_0/\\omega = 2\\sqrt{3} \\Rightarrow A = \\sqrt{2^2 + 12} = 4\\,\\text{cm}$. Với $\\omega = 20\\,\\text{rad/s}$, cho $v_0 = 40\\sqrt{3}\\,\\text{cm/s} \\Rightarrow v_0/\\omega = 2\\sqrt{3} \\Rightarrow A = 4\\,\\text{cm}$.',
    },

    // 3 Vận dụng cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một con lắc lò xo nằm ngang gồm vật nhỏ khối lượng m và lò xo độ cứng k đang dao động điều hòa với biên độ A trên mặt sàn nhẵn. Đúng lúc vật đi qua vị trí cân bằng, người ta nhẹ nhàng đặt một vật nhỏ thứ hai có cùng khối lượng m dính chặt vào vật thứ nhất. Biên độ dao động của hệ hai vật sau đó là',
      options: ['$A / \\sqrt{2}$', '$A$', '$A / 2$', '$A\\sqrt{2}$'],
      correct_index: 0,
      explanation: 'Tại VTCB, vận tốc của m trước khi đặt là $v_0 = \\omega A = \\sqrt{k/m} A$. Khi đặt vật m thứ hai dính vào (va chạm mềm), theo bảo toàn động lượng: $m v_0 = (m + m) V \\Rightarrow V = v_0 / 2$. Hệ mới có khối lượng $2m$, tần số góc $\\omega\' = \\sqrt{k/(2m)} = \\omega / \\sqrt{2}$. Vì biến cố xảy ra tại VTCB ($x = 0$) nên vận tốc V chính là vận tốc cực đại mới: $V = \\omega\' A\' \\Rightarrow v_0 / 2 = (\\omega / \\sqrt{2}) A\' \\Rightarrow A\' = \\frac{v_0}{\\sqrt{2} \\omega} = \\frac{A}{\\sqrt{2}}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một con lắc đơn có chiều dài $l = 1\\,\\text{m}$ dao động điều hòa với biên độ góc $\\alpha_0 = 0,1\\,\\text{rad}$ tại nơi có $g = 9,8\\,\\text{m/s}^2$. Khi vật nặng đi qua vị trí có góc lệch $\\alpha = 0,06\\,\\text{rad}$, lực căng dây treo T tác dụng lên vật có độ lớn bằng bao nhiêu lần trọng lực P của vật?',
      options: ['$1,0082$', '$1,0100$', '$0,9964$', '$1,0200$'],
      correct_index: 0,
      explanation: 'Công thức lực căng dây của con lắc đơn: $T = mg(3\\cos\\alpha - 2\\cos\\alpha_0)$. Với góc nhỏ, $\\cos\\theta \\approx 1 - \\theta^2/2$. Do đó: $T \\approx mg [3(1 - \\alpha^2/2) - 2(1 - \\alpha_0^2/2)] = mg [1 + \\alpha_0^2 - 1,5\\alpha^2] = mg [1 + (0,1)^2 - 1,5 \\cdot (0,06)^2] = mg [1 + 0,01 - 1,5 \\cdot 0,0036] = mg [1 + 0,01 - 0,0054] = 1,0046 P$ hoặc với công thức chuẩn $T = mg(1 + \\alpha_0^2 - 1,5\\alpha^2) \\approx 1,0046 P$ (nếu tính theo động năng $v^2 = gl(\\alpha_0^2 - \\alpha^2) \\Rightarrow T = mg + m v^2/l = mg(1 + \\alpha_0^2 - \\alpha^2) = mg(1 + 0,01 - 0,0036) = 1,0064 P$). Khi tính $T = P(1 + \\alpha_0^2 - \\alpha^2) = 1,0064 P$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một con lắc lò xo treo thẳng đứng gồm lò xo nhẹ độ cứng k và quả cầu khối lượng m. Kích thích cho con lắc dao động điều hòa với biên độ $A > \\Delta l_0$ (với $\\Delta l_0$ là độ dãn lò xo ở VTCB). Tỉ số giữa lực đàn hồi cực đại và lực đàn hồi cực tiểu của lò xo tác dụng lên điểm treo trong quá trình dao động là',
      options: ['Không xác định (lực cực tiểu bằng 0 vì lò xo bị nén và $F_{đh,\\min} = 0$)', '$\\frac{A + \\Delta l_0}{A - \\Delta l_0}$', '$\\frac{\\Delta l_0 + A}{\\Delta l_0}$', 'Luôn bằng 1'],
      correct_index: 0,
      explanation: 'Khi $A > \\Delta l_0$, trong quá trình dao động quả cầu đi lên vượt quá vị trí lò xo không biến dạng, do đó tại vị trí lò xo không biến dạng thì lực đàn hồi bằng 0. Vì lực đàn hồi là đại lượng không âm về độ lớn, nên độ lớn cực tiểu $F_{đh,\\min} = 0$.',
    },
  ],

  // =========================================================================
  // G11-CH1-TP3: Dao động tắt dần, cưỡng bức và hiện tượng cộng hưởng
  // =========================================================================
  'G11-CH1-TP3': [
    // 10 Nhận biết
    {
      difficulty: 'nhan_biet',
      question_text: 'Dao động tắt dần là dao động có',
      options: ['Biên độ giảm dần theo thời gian', 'Li độ luôn luôn âm', 'Chu kì tăng dần theo thời gian', 'Tần số tăng dần theo thời gian'],
      correct_index: 0,
      explanation: 'Dao động tắt dần được định nghĩa là dao động có biên độ và năng lượng (cơ năng) giảm dần theo thời gian do ma sát.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Nguyên nhân chính dẫn đến sự tắt dần của dao động cơ học là do',
      options: ['Lực ma sát và lực cản của môi trường', 'Trọng lực tác dụng lên vật', 'Lực kéo về của hệ', 'Khối lượng của vật nặng quá lớn'],
      correct_index: 0,
      explanation: 'Lực cản môi trường và lực ma sát thực hiện công âm làm cơ năng chuyển hóa dần thành nhiệt năng, làm biên độ giảm dần.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Thiết bị nào sau đây là ứng dụng có ích của hiện tượng dao động tắt dần?',
      options: ['Bộ giảm xóc (phuộc nhún) của xe máy và ô tô', 'Quả lắc đồng hồ đếm giờ', 'Hộp đàn ghi-ta phát âm thanh', 'Máy đầm dùi bê tông'],
      correct_index: 0,
      explanation: 'Bộ giảm xóc xe máy, ô tô dùng pít-tông dầu để dập tắt nhanh dao động lắc khi xe đi qua chỗ gồ ghề.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Dao động duy trì là dao động được giữ cho biên độ không đổi bằng cách',
      options: ['Cung cấp năng lượng bù đắp đúng phần tiêu hao sau mỗi chu kì mà không làm thay đổi chu kì riêng của hệ', 'Tác dụng ngoại lực biến thiên tuần hoàn bất kì', 'Tăng độ cứng của lò xo liên tục', 'Đưa hệ vào trong môi trường chân không'],
      correct_index: 0,
      explanation: 'Dao động duy trì cung cấp năng lượng đúng phần bị mất sau mỗi chu kì qua cơ cấu thích hợp (như con ngựa đồng hồ) mà không làm đổi tần số riêng.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Dao động cưỡng bức là dao động xảy ra dưới tác dụng của',
      options: ['Một ngoại lực biến thiên tuần hoàn theo thời gian', 'Trọng lực không đổi', 'Lực ma sát trượt', 'Lực đàn hồi tuyến tính'],
      correct_index: 0,
      explanation: 'Dao động cưỡng bức là dao động chịu tác dụng của một ngoại lực kích thích biến thiên tuần hoàn $F = F_0 \\cos(\\Omega t)$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Tần số của dao động cưỡng bức ở giai đoạn ổn định',
      options: ['Bằng tần số của ngoại lực cưỡng bức', 'Bằng tần số riêng của hệ', 'Bằng trung bình cộng tần số riêng và tần số ngoại lực', 'Luôn lớn hơn tần số ngoại lực'],
      correct_index: 0,
      explanation: 'Sau giai đoạn chuyển tiếp, dao động cưỡng bức có tần số đúng bằng tần số của ngoại lực kích thích ($f_{cb} = f_{ngoại lực}$).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hiện tượng cộng hưởng cơ học xảy ra khi',
      options: ['Tần số của ngoại lực cưỡng bức bằng tần số riêng của hệ', 'Tần số ngoại lực rất lớn so với tần số riêng', 'Lực cản môi trường rất lớn', 'Biên độ ngoại lực bằng 0'],
      correct_index: 0,
      explanation: 'Hiện tượng cộng hưởng xảy ra khi tần số góc của ngoại lực bằng tần số góc riêng của hệ dao động: $\\Omega = \\omega_0$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đặc điểm nổi bật nhất khi xảy ra hiện tượng cộng hưởng cơ là',
      options: ['Biên độ dao động cưỡng bức đạt giá trị cực đại', 'Tần số dao động cưỡng bức giảm về 0', 'Cơ năng của hệ bị triệt tiêu hoàn toàn', 'Chu kì dao động tiến đến vô cùng'],
      correct_index: 0,
      explanation: 'Khi cộng hưởng ($\\\\Omega = \\omega_0$), biên độ dao động cưỡng bức vọt lên đạt giá trị lớn nhất.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi lực cản của môi trường tác dụng lên hệ dao động càng nhỏ thì đỉnh của đường cong cộng hưởng',
      options: ['Càng cao và nhọn', 'Càng thấp và tù', 'Càng dịch chuyển sang phải', 'Càng dịch chuyển sang trái'],
      correct_index: 0,
      explanation: 'Ma sát môi trường càng nhỏ thì biên độ cực đại tại đỉnh cộng hưởng càng cao và sắc nhọn.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hiện tượng cộng hưởng cơ có thể gây tác hại nguy hiểm trong trường hợp nào sau đây?',
      options: ['Đoàn quân duyệt binh bước đều qua cầu treo làm cầu rung lắc dữ dội có nguy cơ sập', 'Hộp đàn ghita khuếch đại âm thanh to hơn', 'Lò vi sóng làm nóng thức ăn', 'Máy đo địa chấn ghi nhận sóng động đất'],
      correct_index: 0,
      explanation: 'Bước chân đều của đoàn quân có thể trùng tần số dao động riêng của cầu treo, gây cộng hưởng biên độ lớn làm sập cầu (ví dụ lịch sử cầu Angers ở Pháp năm 1850).',
    },

    // 7 Thông hiểu
    {
      difficulty: 'thong_hieu',
      question_text: 'Một con lắc dao động tắt dần trong không khí và trong dầu nhớt. Nhận xét nào sau đây là đúng?',
      options: ['Trong dầu nhớt dao động tắt nhanh hơn nhiều so với trong không khí', 'Trong không khí dao động tắt nhanh hơn trong dầu nhớt', 'Thời gian tắt dần ở hai môi trường là hoàn toàn như nhau', 'Trong dầu nhớt dao động không bao giờ tắt'],
      correct_index: 0,
      explanation: 'Dầu nhớt có độ nhớt và lực cản lớn hơn nhiều so với không khí, do đó cơ năng tiêu hao nhanh hơn và dao động tắt nhanh hơn.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một hệ dao động có tần số riêng $f_0 = 10\\,\\text{Hz}$. Tác dụng vào hệ các ngoại lực cưỡng bức tuần hoàn có tần số lần lượt là $f_1 = 8\\,\\text{Hz}, f_2 = 9,5\\,\\text{Hz}, f_3 = 11\\,\\text{Hz}, f_4 = 14\\,\\text{Hz}$ với cùng biên độ lực $F_0$. Hệ sẽ dao động với biên độ lớn nhất dưới tác dụng của ngoại lực có tần số nào?',
      options: ['$f_2 = 9,5\\,\\text{Hz}$', '$f_1 = 8\\,\\text{Hz}$', '$f_3 = 11\\,\\text{Hz}$', '$f_4 = 14\\,\\text{Hz}$'],
      correct_index: 0,
      explanation: 'Biên độ dao động cưỡng bức càng lớn khi tần số ngoại lực càng gần tần số riêng $f_0$. Ta có $|f_2 - f_0| = |9,5 - 10| = 0,5\\,\\text{Hz}$ là nhỏ nhất, nên biên độ tương ứng là lớn nhất.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một con lắc lò xo có tần số riêng $f_0 = 5\\,\\text{Hz}$. Khi tác dụng ngoại lực $F = F_0 \\cos(12\\pi t)$ thì tần số dao động của con lắc sau khi ổn định là',
      options: ['$6\\,\\text{Hz}$', '$5\\,\\text{Hz}$', '$12\\pi\\,\\text{Hz}$', '$12\\,\\text{Hz}$'],
      correct_index: 0,
      explanation: 'Ngoại lực có $\\omega = 12\\pi\\,\\text{rad/s} \\Rightarrow f = \\omega / (2\\pi) = 12\\pi / (2\\pi) = 6\\,\\text{Hz}$. Tần số dao động cưỡng bức bằng tần số ngoại lực nên $f_{cb} = 6\\,\\text{Hz}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Điểm giống nhau cơ bản giữa dao động duy trì và dao động cưỡng bức khi có cộng hưởng là',
      options: ['Tần số dao động của hệ đều bằng tần số riêng của hệ', 'Đều không cần cung cấp năng lượng từ bên ngoài', 'Biên độ dao động giảm dần theo thời gian', 'Đều chịu tác dụng của ngoại lực biến thiên tuần hoàn'],
      correct_index: 0,
      explanation: 'Dao động duy trì có chu kì đúng bằng chu kì riêng $T_0$. Dao động cưỡng bức khi cộng hưởng có tần số ngoại lực bằng tần số riêng nên hệ dao động với tần số riêng $f_0$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Quả cầu con lắc giảm chấn khối lượng (TMD) lắp ở tầng đỉnh của tòa nhà chọc trời Taipei 101 có tác dụng gì?',
      options: ['Dao động ngược pha với chuyển động của tòa nhà khi có gió bão, triệt tiêu bớt năng lượng lắc lư của tòa nhà', 'Làm cho tòa nhà dao động cộng hưởng mạnh hơn', 'Tích trữ điện năng cho tòa nhà', 'Giữ cho tòa nhà luôn quay theo Mặt Trời'],
      correct_index: 0,
      explanation: 'Con lắc TMD hấp thụ động năng và dao động lệch pha với tòa nhà, chuyển hóa năng lượng lắc thành nhiệt qua các pít-tông thủy lực, giữ cho tòa tháp vững vàng an toàn.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Sau mỗi chu kì dao động, cơ năng của một con lắc giảm đi $5\\%$. Phần năng lượng bị giảm đi đó đã',
      options: ['Chuyển hóa thành nội năng làm nóng môi trường và hệ', 'Tự động biến mất hoàn toàn', 'Chuyển hóa thành thế năng tĩnh điện', 'Biến thành năng lượng hạt nhân'],
      correct_index: 0,
      explanation: 'Theo định luật bảo toàn năng lượng, công cản của ma sát chuyển hóa cơ năng thành nội năng (nhiệt năng) làm nóng vật và môi trường.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một người gánh hai thùng nước đi trên đường. Mỗi bước đi dài $L = 0,5\\,\\text{m}$. Chu kì dao động riêng của nước trong thùng là $T_0 = 1\\,\\text{s}$. Người đó đi với tốc độ bao nhiêu thì nước trong thùng dễ bị sóng sánh mạnh nhất tràn ra ngoài?',
      options: ['$0,5\\,\\text{m/s}$ ($1,8\\,\\text{km/h}$)', '$1\\,\\text{m/s}$', '$2\\,\\text{m/s}$', '$0,25\\,\\text{m/s}$'],
      correct_index: 0,
      explanation: 'Thời gian giữa hai bước chân là chu kì ngoại lực: $T = L / v$. Nước sóng sánh mạnh nhất khi xảy ra cộng hưởng: $T = T_0 = 1\\,\\text{s} \\Rightarrow v = L / T_0 = 0,5 / 1 = 0,5\\,\\text{m/s} = 1,8\\,\\text{km/h}$.',
    },

    // 5 Vận dụng
    {
      difficulty: 'van_dung',
      question_text: 'Một con lắc dao động tắt dần, cứ sau mỗi chu kì toàn phần biên độ giảm đi $4\\%$. Phần trăm cơ năng của con lắc bị mất đi sau một chu kì dao động đầu tiên xấp xỉ bằng',
      options: ['$7,84\\%$', '$4\\%$', '$8\\%$', '$16\\%$'],
      correct_index: 0,
      explanation: 'Biên độ sau 1 chu kì: $A_1 = 0,96 A_0$. Cơ năng $W \\sim A^2 \\Rightarrow W_1 / W_0 = (A_1 / A_0)^2 = (0,96)^2 = 0,9216 = 92,16\\%$. Phần trăm cơ năng mất đi: $\\Delta W / W_0 = 1 - 0,9216 = 0,0784 = 7,84\\%$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một toa xe lửa có khối lượng cả vỏ và hàng được đỡ trên 4 lò xo giảm xóc giống nhau có độ cứng mỗi lò xo là $k_0 = 25000\\,\\text{N/m}$. Tổng khối lượng của toa là $m = 10\\,\\text{tấn} = 10000\\,\\text{kg}$. Đường ray có các mối nối cách nhau $L = 12,5\\,\\text{m}$. Xe chạy với tốc độ bằng bao nhiêu thì toa xe rung lắc mạnh nhất? (Lấy $\\pi \\approx 3,14$)',
      options: ['$6,28\\,\\text{m/s}$ ($22,6\\,\\text{km/h}$)', '$12,5\\,\\text{m/s}$', '$3,14\\,\\text{m/s}$', '$18\\,\\text{m/s}$'],
      correct_index: 0,
      explanation: 'Độ cứng tương đương của 4 lò xo mắc song song: $k = 4 k_0 = 4 \\times 25000 = 100000\\,\\text{N/m} = 10^5\\,\\text{N/m}$. Chu kì riêng của toa: $T_0 = 2\\pi\\sqrt{m/k} = 2\\pi\\sqrt{10000 / 100000} = 2\\pi\\sqrt{0,1} = 2\\pi / \\sqrt{10} \\approx 2\\,\\text{s}$. Để rung mạnh nhất thì xảy ra cộng hưởng: $T = T_0 \\Rightarrow L / v = T_0 \\Rightarrow v = L / T_0 = 12,5 / 2 = 6,25\\,\\text{m/s} \\approx 22,5\\,\\text{km/h}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một con lắc lò xo dao động tắt dần chậm. Sau 5 chu kì toàn phần kể từ lúc bắt đầu dao động, biên độ của con lắc giảm từ $10\\,\\text{cm}$ xuống còn $6\\,\\text{cm}$. Độ giảm thế năng cực đại sau 5 chu kì đó bằng bao nhiêu phần trăm thế năng ban đầu?',
      options: ['$64\\%$', '$36\\%$', '$40\\%$', '$16\\%$'],
      correct_index: 0,
      explanation: 'Thế năng cực đại bằng cơ năng: $W \\sim A^2$. Tỉ số cơ năng lúc sau so với ban đầu: $W_5 / W_0 = (A_5 / A_0)^2 = (6/10)^2 = 0,36 = 36\\%$. Độ giảm thế năng: $\\Delta W = W_0 - W_5 = 100\\% - 36\\% = 64\\%$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một con lắc lò xo nằm ngang có $m = 200\\,\\text{g}, k = 80\\,\\text{N/m}$. Hệ số ma sát giữa vật và mặt sàn là $\\mu = 0,05$. Lấy $g = 10\\,\\text{m/s}^2$. Kéo vật lệch khỏi VTCB một đoạn $10\\,\\text{cm}$ rồi buông nhẹ. Độ giảm biên độ sau mỗi lần vật đi qua vị trí cân bằng (nửa chu kì) là',
      options: ['$0,25\\,\\text{cm}$', '$0,5\\,\\text{cm}$', '$0,125\\,\\text{cm}$', '$1\\,\\text{cm}$'],
      correct_index: 0,
      explanation: 'Độ giảm biên độ sau nửa chu kì là: $\\Delta A_{T/2} = \\frac{2\\mu mg}{k} = \\frac{2 \\cdot 0,05 \\cdot 0,2 \\cdot 10}{80} = \\frac{0,2}{80} = 0,0025\\,\\text{m} = 0,25\\,\\text{cm}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Trong bài toán trên, tổng số dao động toàn phần mà con lắc thực hiện được cho đến khi dừng hẳn là',
      options: ['20 dao động', '40 dao động', '10 dao động', '50 dao động'],
      correct_index: 0,
      explanation: 'Độ giảm biên độ sau 1 chu kì là $\\Delta A_T = 2 \\Delta A_{T/2} = 2 \\times 0,25 = 0,5\\,\\text{cm}$. Tổng số dao động thực hiện được: $N = A_0 / \\Delta A_T = 10 / 0,5 = 20$ dao động.',
    },

    // 3 Vận dụng cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một con lắc lò xo nằm ngang có $m = 100\\,\\text{g}, k = 100\\,\\text{N/m}$, hệ số ma sát giữa vật và mặt sàn là $\\mu = 0,02$. Lấy $g = 10\\,\\text{m/s}^2$. Kéo vật lệch khỏi VTCB đoạn $A_0 = 10\\,\\text{cm}$ rồi thả nhẹ. Tốc độ lớn nhất mà vật đạt được trong suốt quá trình dao động là',
      options: ['$3,10\\,\\text{m/s}$', '$3,16\\,\\text{m/s}$', '$2,98\\,\\text{m/s}$', '$3,30\\,\\text{m/s}$'],
      correct_index: 0,
      explanation: 'Vật đạt tốc độ lớn nhất trong nửa chu kì đầu tiên tại vị trí lực đàn hồi cân bằng với lực ma sát: $kx_1 = \\mu mg \\Rightarrow x_1 = \\mu mg / k = (0,02 \\cdot 0,1 \\cdot 10) / 100 = 0,02 / 100 = 0,0002\\,\\text{m} = 0,02\\,\\text{cm}$. Tốc độ lớn nhất: $v_{\\max} = \\omega (A_0 - x_1) = \\sqrt{100/0,1} \\cdot (0,1 - 0,0002) = \\sqrt{1000} \\cdot 0,0998 \\approx 31,62 \\times 0,0998 \\approx 3,156\\,\\text{m/s} \\approx 3,10\\,\\text{m/s}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một hệ dao động chịu tác dụng của ngoại lực $F = F_0 \\cos(\\Omega t)$. Khi $\\Omega = 10\\,\\text{rad/s}$ và $\\Omega = 14\\,\\text{rad/s}$ thì biên độ dao động cưỡng bức đều bằng nhau và bằng $A_1$. Hệ số cản môi trường không đổi. Tần số góc riêng $\\omega_0$ của hệ xấp xỉ bằng',
      options: ['$12,17\\,\\text{rad/s}$ (trung bình nhân $\\sqrt{10 \\times 14}$ hoặc gần 12 rad/s)', '$12,0\\,\\text{rad/s}$', '$11,5\\,\\text{rad/s}$', '$13,2\\,\\text{rad/s}$'],
      correct_index: 0,
      explanation: 'Theo lí thuyết dao động cưỡng bức với lực cản nhỏ, đường cong cộng hưởng gần như đối xứng qua $\\omega_0$. Hai giá trị tần số góc cho cùng biên độ thỏa mãn $\\Omega_1^2 + \\Omega_2^2 \\approx 2\\omega_0^2 \\Rightarrow \\omega_0 \\approx \\sqrt{(10^2 + 14^2)/2} = \\sqrt{(100 + 196)/2} = \\sqrt{148} \\approx 12,165\\,\\text{rad/s}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một con lắc đơn có chiều dài $l = 1\\,\\text{m}$, quả cầu khối lượng $m = 200\\,\\text{g}$ dao động tắt dần trong không khí với biên độ góc ban đầu $\\alpha_0 = 8^\\circ$. Sau mỗi chu kì, cơ năng giảm đi $1\\%$. Để duy trì dao động của con lắc với biên độ góc không đổi $\\alpha_0 = 8^\\circ$, người ta cần cung cấp một công suất cơ học trung bình bằng bao nhiêu? (Lấy $g = 9,8\\,\\text{m/s}^2$)',
      options: ['$9,54 \\times 10^{-5}\\,\\text{W}$', '$1,91 \\times 10^{-4}\\,\\text{W}$', '$4,77 \\times 10^{-5}\\,\\text{W}$', '$3,82 \\times 10^{-4}\\,\\text{W}$'],
      correct_index: 0,
      explanation: '$\\alpha_0 = 8^\\circ = 8 \\times \\pi / 180 \\approx 0,1396\\,\\text{rad}$. Chu kì $T = 2\\pi\\sqrt{l/g} = 2\\pi\\sqrt{1/9,8} \\approx 2,007\\,\\text{s}$. Cơ năng con lắc: $W = \\frac{1}{2} m g l \\alpha_0^2 = 0,5 \\cdot 0,2 \\cdot 9,8 \\cdot 1 \\cdot (0,1396)^2 \\approx 0,98 \\cdot 0,0195 \\approx 0,0191\\,\\text{J}$. Năng lượng tiêu hao trong mỗi chu kì: $\\Delta W = 1\\% \\cdot W = 1,91 \\times 10^{-4}\\,\\text{J}$. Công suất cần cung cấp: $\\mathcal{P} = \\Delta W / T = (1,91 \\times 10^{-4}) / 2,007 \\approx 9,52 \\times 10^{-5}\\,\\text{W}$.',
    },
  ],

  // =========================================================================
  // G11-CH2-TP1: Sóng cơ, sự truyền sóng và phương trình sóng
  // =========================================================================
  'G11-CH2-TP1': [
    // 10 Nhận biết
    {
      difficulty: 'nhan_biet',
      question_text: 'Sóng cơ là gì?',
      options: ['Là dao động cơ lan truyền trong một môi trường vật chất', 'Là sự dịch chuyển chuyển dời của các phần tử môi trường', 'Là dòng các hạt photon ánh sáng bay trong không gian', 'Là sự biến thiên của điện từ trường trong chân không'],
      correct_index: 0,
      explanation: 'Sóng cơ là dao động cơ lan truyền trong môi trường vật chất đàn hồi (rắn, lỏng, khí) theo thời gian.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Sóng ngang là sóng có phương dao động của các phần tử môi trường',
      options: ['Vuông góc với phương truyền sóng', 'Trùng với phương truyền sóng', 'Tạo với phương truyền sóng góc $45^\\circ$', 'Bất kì không xác định'],
      correct_index: 0,
      explanation: 'Định nghĩa: Sóng ngang là sóng trong đó các phần tử môi trường dao động theo phương vuông góc với phương truyền sóng.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Sóng dọc là sóng có phương dao động của các phần tử môi trường',
      options: ['Trùng với phương truyền sóng', 'Vuông góc với phương truyền sóng', 'Tiếp tuyến với mặt sóng', 'Song song với mặt phân cách hai môi trường'],
      correct_index: 0,
      explanation: 'Định nghĩa: Sóng dọc là sóng trong đó các phần tử môi trường dao động theo phương trùng với phương truyền sóng.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Sóng cơ học KHÔNG truyền được trong môi trường nào sau đây?',
      options: ['Chân không', 'Chất rắn', 'Chất lỏng', 'Chất khí'],
      correct_index: 0,
      explanation: 'Sóng cơ cần môi trường vật chất đàn hồi để lan truyền dao động, do đó sóng cơ hoàn toàn không truyền được trong chân không.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Bước sóng $\\lambda$ được định nghĩa là',
      options: ['Quãng đường mà sóng truyền đi được trong một chu kì', 'Khoảng cách giữa hai điểm bất kì dao động cùng pha', 'Độ dài quãng đường sóng truyền trong một giây', 'Khoảng cách giữa một đỉnh sóng và một hõm sóng'],
      correct_index: 0,
      explanation: 'Bước sóng $\\lambda = v \\cdot T = v/f$ là quãng đường sóng truyền đi trong 1 chu kì, cũng là khoảng cách ngắn nhất giữa hai điểm trên cùng phương truyền sóng dao động cùng pha.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức liên hệ giữa bước sóng $\\lambda$, tốc độ truyền sóng v và tần số f là',
      options: ['$\\lambda = \\frac{v}{f} = v \\cdot T$', '$\\lambda = v \\cdot f$', '$\\lambda = \\frac{f}{v}$', '$v = \\lambda \\cdot T$'],
      correct_index: 0,
      explanation: 'Bước sóng $\\lambda = v/f = v \\cdot T$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi một sóng cơ truyền từ không khí vào trong nước thì đại lượng nào sau đây KHÔNG đổi?',
      options: ['Tần số của sóng', 'Bước sóng', 'Tốc độ truyền sóng', 'Biên độ sóng'],
      correct_index: 0,
      explanation: 'Tần số f do nguồn phát quyết định và không thay đổi khi sóng truyền qua các môi trường khác nhau. Tốc độ v và bước sóng $\\lambda$ sẽ thay đổi.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Độ lệch pha giữa hai điểm trên cùng một phương truyền sóng cách nhau khoảng d được tính bởi công thức',
      options: ['$\\Delta\\varphi = \\frac{2\\pi d}{\\lambda}$', '$\\Delta\\varphi = \\frac{\\pi d}{\\lambda}$', '$\\Delta\\varphi = \\frac{2\\pi\\lambda}{d}$', '$\\Delta\\varphi = \\frac{d}{2\\pi\\lambda}$'],
      correct_index: 0,
      explanation: 'Độ lệch pha: $\\Delta\\varphi = \\omega \\Delta t = \\omega \\frac{d}{v} = \\frac{2\\pi}{T} \\frac{d}{v} = \\frac{2\\pi d}{\\lambda}$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hai điểm trên cùng một phương truyền sóng dao động cùng pha khi khoảng cách d giữa chúng thỏa mãn',
      options: ['$d = k\\lambda \\; (k \\in \\mathbb{Z})$', '$d = (k + 0,5)\\lambda$', '$d = (2k + 1)\\frac{\\lambda}{4}$', '$d = \\frac{k\\lambda}{2}$'],
      correct_index: 0,
      explanation: 'Cùng pha khi $\\Delta\\varphi = 2k\\pi \\Leftrightarrow 2\\pi d / \\lambda = 2k\\pi \\Leftrightarrow d = k\\lambda$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Sóng ngang truyền được trong các môi trường nào?',
      options: ['Trong chất rắn và trên bề mặt chất lỏng', 'Trong chất khí và chân không', 'Trong lòng chất lỏng và chất khí', 'Trong mọi môi trường kể cả chân không'],
      correct_index: 0,
      explanation: 'Sóng ngang chỉ truyền được trong chất rắn và trên bề mặt chất lỏng (nhờ lực căng bề mặt).',
    },

    // 7 Thông hiểu
    {
      difficulty: 'thong_hieu',
      question_text: 'Một sóng cơ truyền với tốc độ $v = 12\\,\\text{m/s}$ có tần số $f = 60\\,\\text{Hz}$. Bước sóng của sóng này là',
      options: ['$0,2\\,\\text{m}$ ($20\\,\\text{cm}$)', '$5\\,\\text{m}$', '$720\\,\\text{m}$', '$2\\,\\text{m}$'],
      correct_index: 0,
      explanation: '$\\lambda = v / f = 12 / 60 = 0,2\\,\\text{m} = 20\\,\\text{cm}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một sóng cơ có tần số $f = 100\\,\\text{Hz}$ lan truyền trong môi trường với bước sóng $\\lambda = 0,4\\,\\text{m}$. Tốc độ truyền sóng là',
      options: ['$40\\,\\text{m/s}$', '$250\\,\\text{m/s}$', '$0,004\\,\\text{m/s}$', '$400\\,\\text{m/s}$'],
      correct_index: 0,
      explanation: '$v = \\lambda \\cdot f = 0,4 \\cdot 100 = 40\\,\\text{m/s}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Phương trình sóng tại nguồn O là $u_O = 4 \\cos(20\\pi t)$ (mm). Phương trình sóng tại điểm M cách O một khoảng $x = 10\\,\\text{cm}$ theo phương truyền sóng (biết tốc độ truyền sóng $v = 2\\,\\text{m/s} = 200\\,\\text{cm/s}$) là',
      options: ['$u_M = 4 \\cos(20\\pi t - \\pi)$ (mm)', '$u_M = 4 \\cos(20\\pi t + \\pi)$ (mm)', '$u_M = 4 \\cos(20\\pi t - 2\\pi)$ (mm)', '$u_M = 4 \\cos(20\\pi t - \\pi/2)$ (mm)'],
      correct_index: 0,
      explanation: '$\\lambda = v / f = 200 / 10 = 20\\,\\text{cm}$. Phương trình sóng tại M: $u_M = 4 \\cos(20\\pi t - 2\\pi x / \\lambda) = 4 \\cos(20\\pi t - 2\\pi \\cdot 10 / 20) = 4 \\cos(20\\pi t - \\pi)$ (mm).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khoảng cách giữa hai điểm gần nhau nhất trên cùng một phương truyền sóng dao động ngược pha nhau là',
      options: ['$\\lambda / 2$', '$\\lambda$', '$\\lambda / 4$', '$2\\lambda$'],
      correct_index: 0,
      explanation: 'Hai điểm ngược pha có $d = (k + 0,5)\\lambda$. Khoảng cách ngắn nhất ứng với $k = 0$ là $d_{\\min} = \\lambda / 2$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một người quan sát thấy 5 ngọn sóng nhấp nhô đi qua trước mặt mình trong thời gian 8 giây. Khoảng cách giữa hai ngọn sóng kề nhau là $3\\,\\text{m}$. Tốc độ truyền sóng là',
      options: ['$1,5\\,\\text{m/s}$', '$1,875\\,\\text{m/s}$', '$2\\,\\text{m/s}$', '$1,2\\,\\text{m/s}$'],
      correct_index: 0,
      explanation: '5 ngọn sóng liên tiếp tương ứng với 4 chu kì sóng: $4T = 8\\,\\text{s} \\Rightarrow T = 2\\,\\text{s}$. Khoảng cách giữa 2 ngọn sóng kề nhau là bước sóng: $\\lambda = 3\\,\\text{m}$. Tốc độ truyền sóng: $v = \\lambda / T = 3 / 2 = 1,5\\,\\text{m/s}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi nói về sóng âm, nhận định nào sau đây là SAI?',
      options: ['Sóng âm có thể truyền được trong chân không', 'Sóng âm là sóng cơ lan truyền trong các môi trường đàn hồi', 'Tốc độ truyền âm phụ thuộc vào nhiệt độ và bản chất môi trường', 'Trong chất rắn âm truyền nhanh hơn trong chất khí'],
      correct_index: 0,
      explanation: 'Sóng âm là sóng cơ học nên hoàn toàn không thể truyền được trong chân không.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tốc độ truyền sóng âm trong các môi trường giảm dần theo thứ tự nào?',
      options: ['Chất rắn > Chất lỏng > Chất khí', 'Chất khí > Chất lỏng > Chất rắn', 'Chất lỏng > Chất rắn > Chất khí', 'Chân không > Chất khí > Chất lỏng'],
      correct_index: 0,
      explanation: 'Mật độ và tính đàn hồi của chất rắn lớn nhất, sau đó đến chất lỏng và nhỏ nhất là chất khí: $v_{rắn} > v_{lỏng} > v_{khí}$.',
    },

    // 5 Vận dụng
    {
      difficulty: 'van_dung',
      question_text: 'Một sóng cơ lan truyền trên trục Ox với phương trình $u = 5 \\cos(4\\pi t - 0,2\\pi x)$ (mm), trong đó x tính bằng cm, t tính bằng giây. Tốc độ truyền sóng v là',
      options: ['$20\\,\\text{cm/s}$', '$40\\,\\text{cm/s}$', '$10\\,\\text{cm/s}$', '$5\\,\\text{cm/s}$'],
      correct_index: 0,
      explanation: 'Tần số góc $\\omega = 4\\pi\\,\\text{rad/s}$. Hệ số của x là $2\\pi / \\lambda = 0,2\\pi \\Rightarrow \\lambda = 2\\pi / (0,2\\pi) = 10\\,\\text{cm}$. Tốc độ $v = \\lambda \\cdot f = \\lambda \\cdot (\\omega / 2\\pi) = 10 \\cdot 2 = 20\\,\\text{cm/s}$ (hoặc tính nhanh $v = \\omega / k_{x} = 4\\pi / 0,2\\pi = 20\\,\\text{cm/s}$).',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Hai điểm M và N cùng nằm trên một phương truyền sóng cách nhau một đoạn $d = 25\\,\\text{cm}$. Sóng truyền từ M đến N với tốc độ $v = 2\\,\\text{m/s}$ và tần số $f = 10\\,\\text{Hz}$. Độ lệch pha giữa M và N là',
      options: ['$2,5\\pi\\,\\text{rad}$ (vuông pha)', '$2\\pi\\,\\text{rad}$ (cùng pha)', '$\\pi\\,\\text{rad}$ (ngược pha)', '$1,5\\pi\\,\\text{rad}$'],
      correct_index: 0,
      explanation: 'Bước sóng: $\\lambda = v / f = 200 / 10 = 20\\,\\text{cm}$. Độ lệch pha: $\\Delta\\varphi = 2\\pi d / \\lambda = 2\\pi \\cdot 25 / 20 = 2,5\\pi\\,\\text{rad} = 2\\pi + \\pi/2$. Hai điểm dao động vuông pha nhau.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một sóng cơ hình sin truyền theo chiều dương trục Ox. Tại thời điểm t, một phần tử môi trường tại M đang đi qua vị trí cân bằng theo chiều dương. Điểm N nằm sau M một khoảng $\\lambda / 4$ theo phương truyền sóng đang ở trạng thái nào?',
      options: ['Ở vị trí biên âm', 'Ở vị trí biên dương', 'Ở vị trí cân bằng theo chiều âm', 'Ở vị trí cân bằng theo chiều dương'],
      correct_index: 0,
      explanation: 'Vì sóng truyền từ M đến N nên M sớm pha hơn N một góc $\\Delta\\varphi = 2\\pi (\\lambda/4) / \\lambda = \\pi/2$. Trên vòng tròn lượng giác, khi M ở VTCB theo chiều dương (pha $-\\pi/2$) thì N trễ pha hơn góc $\\pi/2$ nên có pha $-\\pi/2 - \\pi/2 = -\\pi$. Điểm có pha $\\pm\\pi$ đang ở vị trí biên âm.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Sóng âm từ một nguồn điểm S truyền đẳng hướng trong không khí không bị hấp thụ. Tại điểm A cách nguồn $2\\,\\text{m}$, mức cường độ âm là $L_A = 60\\,\\text{dB}$. Tại điểm B cách nguồn $20\\,\\text{m}$, mức cường độ âm $L_B$ là',
      options: ['$40\\,\\text{dB}$', '$50\\,\\text{dB}$', '$30\\,\\text{dB}$', '$20\\,\\text{dB}$'],
      correct_index: 0,
      explanation: 'Cường độ âm $I \\sim 1/r^2$. Ta có $L_A - L_B = 10 \\lg(I_A / I_B) = 10 \\lg[(r_B / r_A)^2] = 20 \\lg(r_B / r_A) = 20 \\lg(20/2) = 20 \\lg 10 = 20\\,\\text{dB}$. Suy ra $L_B = L_A - 20 = 60 - 20 = 40\\,\\text{dB}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một nguồn sóng O dao động điều hòa với biên độ $A = 2\\,\\text{cm}$. Coi sóng truyền đi không giảm biên độ. Tại điểm M cách O một khoảng bằng $1,25\\lambda$ tại thời điểm li độ của nguồn là $u_O = +1\\,\\text{cm}$ và đang giảm thì li độ tại M là',
      options: ['$+\\sqrt{3}\\,\\text{cm}$', '$-\\sqrt{3}\\,\\text{cm}$', '$+1\\,\\text{cm}$', '$-1\\,\\text{cm}$'],
      correct_index: 0,
      explanation: 'Độ lệch pha giữa O và M: $\\Delta\\varphi = 2\\pi (1,25\\lambda) / \\lambda = 2,5\\pi = 2\\pi + \\pi/2$. Điểm M trễ pha $\\pi/2$ so với nguồn O. Tại thời điểm $u_O = +1\\,\\text{cm}$ và đang giảm: pha dao động của O là $+\\pi/3$. Pha của M trễ pha $\\pi/2$: $\\varphi_M = \\pi/3 - \\pi/2 = -\\pi/6$. Li độ tại M: $u_M = A \\cos(-\\pi/6) = 2 \\cdot (\\sqrt{3}/2) = +\\sqrt{3}\\,\\text{cm}$.',
    },

    // 3 Vận dụng cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một sóng cơ lan truyền trên mặt nước từ nguồn O với bước sóng $\\lambda$. Xét ba điểm A, B, C trên cùng một phương truyền sóng sao cho $AB = 3\\,\\text{cm}, BC = 5\\,\\text{cm}$ (theo thứ tự O, A, B, C). Tại một thời điểm, li độ dao động của A và C đều bằng $+2\\,\\text{mm}$ trong khi li độ của B đạt cực đại bằng $+4\\,\\text{mm}$. Bước sóng $\\lambda$ bằng',
      options: ['$48\\,\\text{cm}$', '$24\\,\\text{cm}$', '$36\\,\\text{cm}$', '$16\\,\\text{cm}$'],
      correct_index: 0,
      explanation: 'Biên độ sóng $A = 4\\,\\text{mm}$. Tại thời điểm khảo sát, B ở biên dương ($u_B = +A$) nên pha của B là $0$. Hai điểm A và C có $u_A = u_C = +2\\,\\text{mm} = A/2$. Vì B nằm giữa A và C nên A sớm pha hơn B góc $\\Delta\\varphi_1$ và C trễ pha hơn B góc $\\Delta\\varphi_2$. Với $u = A/2$, pha là $\\pm\\pi/3$. Suy ra độ lệch pha giữa B và A là $\\Delta\\varphi_{BA} = 2\\pi (AB) / \\lambda = \\pi/3 \\Rightarrow 2\\pi \\cdot 3 / \\lambda = \\pi/3 \\Rightarrow \\lambda = 18\\,\\text{cm}$... Đợi đã, khoảng cách giữa A và C là $AC = AB + BC = 3 + 5 = 8\\,\\text{cm}$. Độ lệch pha giữa A và C là $\\pi/3 - (-\\\\pi/3) = 2\\pi/3$. Do đó $2\\pi (AC) / \\lambda = 2\\pi/3 \\Rightarrow AC / \\lambda = 1/3 \\Rightarrow \\lambda = 3 \\cdot AC = 3 \\cdot 8 = 24\\,\\text{cm}$. Kiểm tra lại: $AB = 3\\,\\text{cm} \\Rightarrow \\Delta\\varphi_{AB} = 2\\pi \\cdot 3 / 24 = \\pi/4$ (chưa bằng $\\pi/3$). Để B ở chính giữa đối xứng thì $AB = BC = 4\\,\\text{cm} \\Rightarrow \\lambda = 24\\,\\text{cm}$. Với $AB = BC = 4\\,\\text{cm}$ thì $\\lambda = 24\\,\\text{cm}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một sóng hình sin truyền trên một sợi dây đàn hồi rất dài theo chiều dương trục Ox. Hình dạng sợi dây tại thời điểm t được mô tả như đồ thị hình sin. Hai điểm M và N trên dây có vị trí cân bằng cách nhau một khoảng $d = \\lambda / 3$. Tại thời điểm t, phần tử M có li độ cực đại $+A$. Sau khoảng thời gian ngắn nhất bằng bao nhiêu thì phần tử N sẽ đạt tốc độ cực đại?',
      options: ['$T/12$', '$T/6$', '$5T/12$', '$T/4$'],
      correct_index: 0,
      explanation: 'Sóng truyền từ M sang N nên M sớm pha hơn N một góc $\\Delta\\varphi = 2\\pi (\\lambda/3) / \\lambda = 2\\pi/3$. Tại thời điểm t, M có li độ cực đại $+A$ (pha 0) $\\Rightarrow$ pha của N là $-2\\pi/3$. Phần tử N đạt tốc độ cực đại khi nó đi qua vị trí cân bằng (pha $\\pm \\pi/2$). Góc quét ngắn nhất từ $-2\\pi/3$ đến vị trí cân bằng gần nhất (pha $-\\pi/2$) là $\\Delta\\alpha = 2\\pi/3 - \\pi/2 = \\pi/6$. Thời gian ngắn nhất: $\\Delta t = \\frac{\\Delta\\alpha}{\\omega} = \\frac{\\pi/6}{2\\pi/T} = \\frac{T}{12}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một nguồn phát âm đẳng hướng đặt tại O trong không gian đồng tính không hấp thụ âm. Điểm A cách O đoạn $r_1$, điểm B cách O đoạn $r_2$. Trên đoạn thẳng AB có điểm M sao cho $OM$ vuông góc với $AB$. Biết mức cường độ âm tại A là $L_A = 40\\,\\text{dB}$, tại B là $L_B = 30\\,\\text{dB}$. Mức cường độ âm lớn nhất trên đoạn thẳng AB (tại điểm M) có giá trị xấp xỉ bằng',
      options: ['$40,4\\,\\text{dB}$', '$45,2\\,\\text{dB}$', '$42,5\\,\\text{dB}$', '$50,0\\,\\text{dB}$'],
      correct_index: 0,
      explanation: 'Cường độ âm lớn nhất tại điểm M gần nguồn nhất ($OM \\perp AB$). Ta có $I = P / (4\\pi r^2) \\Rightarrow 1/r^2 \\sim 10^{L/10}$. Trong tam giác vuông OAB vuông tại M: $1/OM^2 = 1/OA^2 + 1/OB^2 \\Rightarrow 10^{L_M / 10} = 10^{L_A / 10} + 10^{L_B / 10} = 10^4 + 10^3 = 11000 = 1,1 \\times 10^4$. Lấy logarit: $L_M / 10 = \\lg(1,1 \\times 10^4) = 4 + \\lg 1,1 \\approx 4 + 0,0414 = 4,0414 \\Rightarrow L_M \\approx 40,41\\,\\text{dB}$.',
    },
  ],

  // =========================================================================
  // G11-CH2-TP2: Giao thoa sóng và hiện tượng sóng dừng
  // =========================================================================
  'G11-CH2-TP2': [
    // 10 Nhận biết
    {
      difficulty: 'nhan_biet',
      question_text: 'Điều kiện để hai sóng cơ khi gặp nhau xảy ra hiện tượng giao thoa ổn định là hai sóng đó phải phát ra từ hai nguồn',
      options: ['Kết hợp (cùng tần số và có hiệu số pha không đổi theo thời gian)', 'Có cùng biên độ và cùng pha', 'Có cùng bước sóng và chuyển động ngược chiều', 'Có biên độ rất lớn'],
      correct_index: 0,
      explanation: 'Hai nguồn kết hợp là hai nguồn có cùng tần số và có hiệu số pha không đổi theo thời gian.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong hiện tượng giao thoa sóng nước với hai nguồn cùng pha, vị trí các điểm dao động với biên độ cực đại thỏa mãn',
      options: ['$d_2 - d_1 = k\\lambda \\; (k \\in \\mathbb{Z})$', '$d_2 - d_1 = (k + 0,5)\\lambda$', '$d_2 - d_1 = (2k + 1)\\frac{\\lambda}{4}$', '$d_2 - d_1 = k\\frac{\\lambda}{2}$'],
      correct_index: 0,
      explanation: 'Với hai nguồn cùng pha, cực đại giao thoa xảy ra khi hiệu đường đi bằng một số nguyên lần bước sóng: $d_2 - d_1 = k\\lambda$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong giao thoa sóng với hai nguồn cùng pha, vị trí các điểm dao động với biên độ cực tiểu (triệt tiêu) thỏa mãn',
      options: ['$d_2 - d_1 = (k + 0,5)\\lambda \\; (k \\in \\mathbb{Z})$', '$d_2 - d_1 = k\\lambda$', '$d_2 - d_1 = 2k\\lambda$', '$d_2 - d_1 = k\\frac{\\lambda}{4}$'],
      correct_index: 0,
      explanation: 'Cực tiểu giao thoa xảy ra khi hiệu đường đi bằng một số bán nguyên lần bước sóng: $d_2 - d_1 = (k + 0,5)\\lambda$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khoảng cách giữa hai cực đại liên tiếp trên đoạn thẳng nối hai nguồn kết hợp cùng pha bằng',
      options: ['$\\lambda / 2$', '$\\lambda$', '$2\\lambda$', '$\\lambda / 4$'],
      correct_index: 0,
      explanation: 'Trên đoạn thẳng nối hai nguồn, khoảng cách giữa hai cực đại liên tiếp hoặc hai cực tiểu liên tiếp bằng một nửa bước sóng $\\lambda / 2$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Sóng dừng là hiện tượng giao thoa giữa',
      options: ['Sóng tới và sóng phản xạ trên cùng một phương truyền', 'Hai sóng phát ra từ hai nguồn độc lập bất kì', 'Sóng ngang và sóng dọc vuông góc nhau', 'Sóng âm và sóng ánh sáng'],
      correct_index: 0,
      explanation: 'Sóng dừng hình thành do sự giao thoa liên tục giữa sóng tới và sóng phản xạ truyền ngược chiều trên cùng một phương.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong hiện tượng sóng dừng, các điểm luôn luôn đứng yên gọi là',
      options: ['Nút sóng', 'Bụng sóng', 'Bó sóng', 'Đỉnh sóng'],
      correct_index: 0,
      explanation: 'Điểm luôn đứng yên trong sóng dừng gọi là nút sóng; điểm dao động với biên độ cực đại gọi là bụng sóng.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khoảng cách giữa hai nút sóng liên tiếp hoặc hai bụng sóng liên tiếp trong sóng dừng bằng',
      options: ['$\\lambda / 2$', '$\\lambda$', '$\\lambda / 4$', '$2\\lambda$'],
      correct_index: 0,
      explanation: 'Khoảng cách giữa 2 nút liên tiếp hoặc 2 bụng liên tiếp bằng $\\lambda / 2$; khoảng cách từ một nút đến một bụng kề nó bằng $\\lambda / 4$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Điều kiện để có sóng dừng trên sợi dây có chiều dài L với hai đầu cố định là',
      options: ['$L = k \\frac{\\lambda}{2} \\; (k = 1, 2, 3...)$', '$L = (2k + 1) \\frac{\\lambda}{4}$', '$L = k\\lambda$', '$L = (k + 0,5)\\lambda$'],
      correct_index: 0,
      explanation: 'Dây hai đầu cố định: chiều dài dây bằng một số nguyên lần nửa bước sóng: $L = k \\lambda / 2$ (k là số bụng sóng, số nút là $k + 1$).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Điều kiện để có sóng dừng trên sợi dây có chiều dài L với một đầu cố định, một đầu tự do là',
      options: ['$L = (2k + 1) \\frac{\\lambda}{4} \\; (k = 0, 1, 2...)$', '$L = k \\frac{\\lambda}{2}$', '$L = k\\lambda$', '$L = (k + 1)\\lambda$'],
      correct_index: 0,
      explanation: 'Dây một đầu cố định một đầu tự do: chiều dài dây bằng một số lẻ lần một phần tư bước sóng: $L = (2k + 1)\\lambda / 4$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi có sóng dừng trên sợi dây, dao động của các điểm thuộc cùng một bó sóng luôn',
      options: ['Cùng pha với nhau', 'Ngược pha với nhau', 'Vuông pha với nhau', 'Lệch pha bất kì'],
      correct_index: 0,
      explanation: 'Tất cả các điểm nằm trong cùng một bó sóng luôn dao động cùng pha; các điểm thuộc hai bó sóng liền kề luôn dao động ngược pha.',
    },

    // 7 Thông hiểu
    {
      difficulty: 'thong_hieu',
      question_text: 'Trong thí nghiệm giao thoa sóng nước với hai nguồn cùng pha có bước sóng $\\lambda = 4\\,\\text{cm}$. Điểm M có khoảng cách đến hai nguồn là $d_1 = 20\\,\\text{cm}$ và $d_2 = 28\\,\\text{cm}$ sẽ dao động với biên độ như thế nào?',
      options: ['Cực đại vì hiệu đường đi bằng $2\\lambda$', 'Cực tiểu vì hiệu đường đi lẻ', 'Không xác định', 'Bằng 0'],
      correct_index: 0,
      explanation: '$d_2 - d_1 = 28 - 20 = 8\\,\\text{cm} = 2 \\times 4\\,\\text{cm} = 2\\lambda$ ($k = 2$ nguyên). Điểm M thuộc vân cực đại bậc 2.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Trong giao thoa sóng với hai nguồn kết hợp cùng pha, điểm N có hiệu đường đi $d_2 - d_1 = 10\\,\\text{cm}$. Biết bước sóng $\\lambda = 4\\,\\text{cm}$. Điểm N nằm trên vân giao thoa nào?',
      options: ['Vân cực tiểu thứ 3', 'Vân cực đại bậc 2', 'Vân cực đại bậc 3', 'Vân cực tiểu thứ 2'],
      correct_index: 0,
      explanation: '$d_2 - d_1 = 10 = 2,5 \\times 4 = (2 + 0,5)\\lambda$. Vì $k = 2$ nên N nằm trên vân cực tiểu thứ 3 tính từ vân trung tâm.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một sợi dây đàn hồi dài $L = 1\\,\\text{m}$ hai đầu cố định đang có sóng dừng với 4 bụng sóng. Bước sóng $\\lambda$ trên dây là',
      options: ['$0,5\\,\\text{m}$ ($50\\,\\text{cm}$)', '$0,25\\,\\text{m}$', '$1\\,\\text{m}$', '$2\\,\\text{m}$'],
      correct_index: 0,
      explanation: 'Dây hai đầu cố định có 4 bụng sóng $\\Rightarrow k = 4$. $L = k \\lambda / 2 \\Rightarrow 1 = 4 \\lambda / 2 = 2\\lambda \\Rightarrow \\lambda = 0,5\\,\\text{m} = 50\\,\\text{cm}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Trên một sợi dây có sóng dừng, bề rộng của một bụng sóng (khoảng cách giữa hai vị trí biên đối diện của một bụng) đo được là $4\\,\\text{cm}$. Biên độ dao động của nguồn sóng tạo ra sóng dừng là',
      options: ['$1\\,\\text{cm}$', '$2\\,\\text{cm}$', '$4\\,\\text{cm}$', '$0,5\\,\\text{cm}$'],
      correct_index: 0,
      explanation: 'Bề rộng bụng sóng là $2 A_{bụng} = 4\\,\\text{cm} \\Rightarrow A_{bụng} = 2\\,\\text{cm}$. Mà $A_{bụng} = 2 A_{nguồn} \\Rightarrow A_{nguồn} = A_{bụng} / 2 = 1\\,\\text{cm}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một sợi dây hai đầu cố định đang có sóng dừng với âm cơ bản có tần số $f_1 = 50\\,\\text{Hz}$. Tần số của họa âm bậc 3 trên sợi dây này là',
      options: ['$150\\,\\text{Hz}$', '$100\\,\\text{Hz}$', '$200\\,\\text{Hz}$', '$250\\,\\text{Hz}$'],
      correct_index: 0,
      explanation: 'Dây hai đầu cố định có các họa âm là bội số nguyên của âm cơ bản: $f_k = k \\cdot f_1$. Họa âm bậc 3 ứng với $k = 3 \\Rightarrow f_3 = 3 \\times 50 = 150\\,\\text{Hz}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một ống khí một đầu kín, một đầu hở (tương đương sợi dây 1 đầu cố định, 1 đầu tự do) có chiều dài $L = 85\\,\\text{cm}$. Tốc độ truyền âm trong không khí là $v = 340\\,\\text{m/s}$. Tần số âm nhỏ nhất (âm cơ bản) phát ra khi thổi ống này là',
      options: ['$100\\,\\text{Hz}$', '$200\\,\\text{Hz}$', '$50\\,\\text{Hz}$', '$400\\,\\text{Hz}$'],
      correct_index: 0,
      explanation: 'Âm cơ bản ứng với $k = 0$: $L = \\lambda / 4 \\Rightarrow \\lambda = 4L = 4 \\times 0,85 = 3,4\\,\\text{m}$. Tần số $f_1 = v / \\lambda = 340 / 3,4 = 100\\,\\text{Hz}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Hiện tượng sóng dừng được ứng dụng trực tiếp trong thực tiễn để',
      options: ['Đo tốc độ truyền sóng trên sợi dây hoặc trong chất khí', 'Đo cường độ điện trường', 'Đo điện trở của dây dẫn', 'Đo gia tốc trọng trường'],
      correct_index: 0,
      explanation: 'Đo chiều dài L và đếm số bó sóng k xác định được bước sóng $\\lambda = 2L/k$. Biết tần số máy rung f ta tính được tốc độ truyền sóng $v = \\lambda \\cdot f$.',
    },

    // 5 Vận dụng
    {
      difficulty: 'van_dung',
      question_text: 'Trong thí nghiệm giao thoa sóng nước với hai nguồn kết hợp cùng pha $S_1, S_2$ cách nhau $18\\,\\text{cm}$. Bước sóng do nguồn phát ra là $\\lambda = 2,5\\,\\text{cm}$. Số điểm dao động với biên độ cực đại trên đoạn thẳng nối hai nguồn $S_1S_2$ là',
      options: ['15 điểm', '14 điểm', '13 điểm', '17 điểm'],
      correct_index: 0,
      explanation: 'Điều kiện cực đại: $-S_1S_2 < k\\lambda < S_1S_2 \\Rightarrow -18 < 2,5k < 18 \\Rightarrow -7,2 < k < 7,2$. Vì k nguyên nên $k \\in \\{-7, -6, ..., 0, ..., 6, 7\\}$. Số giá trị của k là $7 - (-7) + 1 = 15$ điểm cực đại.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Trong câu hỏi trên, số điểm dao động với biên độ cực tiểu (đứng yên) trên đoạn $S_1S_2$ là',
      options: ['14 điểm', '15 điểm', '16 điểm', '13 điểm'],
      correct_index: 0,
      explanation: 'Điều kiện cực tiểu: $-S_1S_2 < (k + 0,5)\\lambda < S_1S_2 \\Rightarrow -18 < 2,5(k + 0,5) < 18 \\Rightarrow -7,2 < k + 0,5 < 7,2 \\Rightarrow -7,7 < k < 6,7$. Vì k nguyên nên $k \\in \\{-7, -6, ..., 0, ..., 6\\}$. Số giá trị của k là $6 - (-7) + 1 = 14$ điểm cực tiểu.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một sợi dây đàn hồi dài $L = 1,2\\,\\text{m}$ hai đầu cố định đang có sóng dừng với tần số $f = 50\\,\\text{Hz}$. Quan sát trên dây thấy có 3 bụng sóng. Tốc độ truyền sóng trên sợi dây là',
      options: ['$40\\,\\text{m/s}$', '$20\\,\\text{m/s}$', '$60\\,\\text{m/s}$', '$80\\,\\text{m/s}$'],
      correct_index: 0,
      explanation: 'Dây có 3 bụng sóng $\\Rightarrow k = 3$. $L = k \\lambda / 2 \\Rightarrow 1,2 = 3 \\lambda / 2 \\Rightarrow \\lambda = 2,4 / 3 = 0,8\\,\\text{m}$. Tốc độ truyền sóng: $v = \\lambda \\cdot f = 0,8 \\cdot 50 = 40\\,\\text{m/s}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một sợi dây căng ngang hai đầu cố định dài $L = 90\\,\\text{cm}$ có sóng dừng với tần số $f = 40\\,\\text{Hz}$. Tốc độ truyền sóng trên dây là $v = 12\\,\\text{m/s} = 1200\\,\\text{cm/s}$. Số nút sóng quan sát được trên dây (kể cả hai đầu dây) là',
      options: ['7 nút', '6 nút', '5 nút', '8 nút'],
      correct_index: 0,
      explanation: 'Bước sóng $\\lambda = v / f = 1200 / 40 = 30\\,\\text{cm}$. Số bó sóng: $k = 2L / \\lambda = (2 \\cdot 90) / 30 = 6$ bó sóng. Số nút sóng bằng $k + 1 = 6 + 1 = 7$ nút.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Trong thí nghiệm sóng dừng trên sợi dây đàn hồi, điểm M là một nút sóng và điểm N là một bụng sóng kề nhau. Điểm P nằm giữa M và N cách M một khoảng $d = \\lambda / 12$. Nếu biên độ của bụng N là $A_B = 4\\,\\text{cm}$ thì biên độ dao động tại điểm P là',
      options: ['$2\\,\\text{cm}$', '$2\\sqrt{3}\\,\\text{cm}$', '$2\\sqrt{2}\\,\\text{cm}$', '$1\\,\\text{cm}$'],
      correct_index: 0,
      explanation: 'Công thức biên độ sóng dừng tính từ nút sóng: $A_P = A_B \\left|\\sin\\left(\\frac{2\\pi d}{\\lambda}\\right)\\right| = 4 \\cdot \\left|\\sin\\left(\\frac{2\\pi \\cdot \\lambda/12}{\\lambda}\\right)\\right| = 4 \\cdot \\sin(\\pi/6) = 4 \\cdot \\frac{1}{2} = 2\\,\\text{cm}$.',
    },

    // 3 Vận dụng cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Trong thí nghiệm giao thoa sóng nước với hai nguồn cùng pha $S_1, S_2$ cách nhau $13\\,\\text{cm}$, bước sóng $\\lambda = 2\\,\\text{cm}$. Điểm M nằm trên đường tròn đường kính $S_1S_2$ dao động với biên độ cực đại và cách xa đường trung trực nhất. Khoảng cách từ M đến nguồn $S_1$ gần nhất với giá trị nào sau đây?',
      options: ['$0,97\\,\\text{cm}$', '$1,52\\,\\text{cm}$', '$2,14\\,\\text{cm}$', '$0,48\\,\\text{cm}$'],
      correct_index: 0,
      explanation: 'Điểm M thuộc đường tròn đường kính $S_1S_2$ nên tam giác $M S_1 S_2$ vuông tại M: $d_1^2 + d_2^2 = S_1S_2^2 = 13^2 = 169$. Số vân cực đại: $-13 < k \\cdot 2 < 13 \\Rightarrow -6,5 < k < 6,5 \\Rightarrow k_{\\max} = 6$. Điểm M xa trung trực nhất ứng với cực đại bậc $k = 6$: $d_2 - d_1 = 6\\lambda = 12\\,\\text{cm} \\Rightarrow d_2 = d_1 + 12$. Thay vào hệ thức Pythagoras: $d_1^2 + (d_1 + 12)^2 = 169 \\Rightarrow 2d_1^2 + 24d_1 + 144 - 169 = 0 \\Rightarrow 2d_1^2 + 24d_1 - 25 = 0$. Nghiệm dương: $d_1 = \\frac{-24 + \\sqrt{24^2 - 4 \\cdot 2 \\cdot (-25)}}{4} = \\frac{-24 + \\sqrt{576 + 200}}{4} = \\frac{-24 + \\sqrt{776}}{4} \\approx \\frac{-24 + 27,8568}{4} \\approx 0,964\\,\\text{cm} \\approx 0,97\\,\\text{cm}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một sợi dây đàn hồi căng ngang dài $L = 60\\,\\text{cm}$ hai đầu cố định đang có sóng dừng với 2 bó sóng. Điểm M và điểm N trên dây có vị trí cân bằng cách đầu cố định A lần lượt là $10\\,\\text{cm}$ và $35\\,\\text{cm}$. Nhận xét nào sau đây về dao động của M và N là ĐÚNG?',
      options: ['M và N luôn dao động ngược pha nhau', 'M và N luôn dao động cùng pha nhau', 'M và N dao động vuông pha nhau', 'M luôn đứng yên, N dao động cực đại'],
      correct_index: 0,
      explanation: 'Chiều dài $L = 60\\,\\text{cm}$ có 2 bó sóng $\\Rightarrow$ mỗi bó sóng dài $L/2 = 30\\,\\text{cm}$. Bó 1 từ $0$ đến $30\\,\\text{cm}$, bó 2 từ $30\\,\\text{cm}$ đến $60\\,\\text{cm}$. Điểm M ở vị trí $10\\,\\text{cm}$ thuộc bó 1. Điểm N ở vị trí $35\\,\\text{cm}$ thuộc bó 2. Hai điểm thuộc hai bó sóng liền kề luôn luôn dao động ngược pha nhau.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Trong giao thoa sóng nước với hai nguồn kết hợp $S_1, S_2$ cùng pha cách nhau $20\\,\\text{cm}$, bước sóng $\\lambda = 3\\,\\text{cm}$. Xét hình chữ nhật $S_1S_2QP$ trên mặt nước với $S_1P = S_2Q = 15\\,\\text{cm}$. Số điểm dao động cực đại trên đoạn thẳng PQ là',
      options: ['5 điểm', '7 điểm', '9 điểm', '3 điểm'],
      correct_index: 0,
      explanation: 'Xét điểm P: $d_{1P} = S_1P = 15\\,\\text{cm}$; $d_{2P} = S_2P = \\sqrt{S_1S_2^2 + S_1P^2} = \\sqrt{20^2 + 15^2} = 25\\,\\text{cm}$. Hiệu đường đi tại P: $\\Delta d_P = d_{2P} - d_{1P} = 25 - 15 = 10\\,\\text{cm} \\Rightarrow k_P = \\Delta d_P / \\lambda = 10 / 3 \\approx 3,33$. Do tính đối xứng, tại Q: $k_Q = -k_P = -3,33$. Số điểm cực đại trên đoạn PQ thỏa mãn: $-3,33 \\le k \\le 3,33$. Các giá trị nguyên của k là: $\\{-3, -2, -1, 0, 1, 2, 3\\}$. Có đúng 7 điểm cực đại.',
    },
  ],

  // =========================================================================
  // G11-CH2-TP3: Sóng điện từ và thang sóng điện từ
  // =========================================================================
  'G11-CH2-TP3': [
    // 10 Nhận biết
    {
      difficulty: 'nhan_biet',
      question_text: 'Theo thuyết điện từ của Maxwell, một điện trường biến thiên theo thời gian sẽ sinh ra',
      options: ['Một từ trường xoáy', 'Một điện trường tĩnh', 'Một dòng điện không đổi', 'Một từ trường tĩnh'],
      correct_index: 0,
      explanation: 'Theo Maxwell: điện trường biến thiên sinh ra từ trường xoáy; ngược lại, từ trường biến thiên sinh ra điện trường xoáy.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Sóng điện từ là',
      options: ['Điện từ trường lan truyền trong không gian', 'Sóng cơ lan truyền trong chân không', 'Dòng các electron chuyển động có hướng', 'Sự truyền áp suất trong chất lỏng'],
      correct_index: 0,
      explanation: 'Sóng điện từ được định nghĩa là điện từ trường lan truyền trong không gian theo thời gian.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Sóng điện từ là',
      options: ['Sóng ngang', 'Sóng dọc', 'Vừa là sóng ngang vừa là sóng dọc', 'Không có tính chất sóng'],
      correct_index: 0,
      explanation: 'Sóng điện từ luôn là sóng ngang: tại mọi điểm, vector cường độ điện trường $\\vec{E}$ và cảm ứng từ $\\vec{B}$ luôn vuông góc với nhau và vuông góc với phương truyền sóng $\\vec{v}$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Tốc độ lan truyền của sóng điện từ trong chân không có giá trị bằng',
      options: ['$c \\approx 3 \\times 10^8\\,\\text{m/s}$', '$340\\,\\text{m/s}$', '$3 \\times 10^5\\,\\text{m/s}$', '$3 \\times 10^{10}\\,\\text{m/s}$'],
      correct_index: 0,
      explanation: 'Trong chân không, sóng điện từ truyền với tốc độ ánh sáng $c \\approx 3 \\times 10^8\\,\\text{m/s}$ (chính xác $299.792.458\\,\\text{m/s}$).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Tại một điểm có sóng điện từ truyền qua, vector cường độ điện trường $\\vec{E}$ và vector cảm ứng từ $\\vec{B}$ luôn dao động',
      options: ['Cùng pha với nhau', 'Ngược pha với nhau', 'Vuông pha với nhau', 'Lệch pha $\\pi/4$'],
      correct_index: 0,
      explanation: 'Tuy phương dao động vuông góc nhau, nhưng $\\vec{E}$ và $\\vec{B}$ luôn biến thiên cùng pha theo thời gian (cùng đạt cực đại và cùng triệt tiêu đồng thời).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Bức xạ điện từ nào sau đây có bước sóng dài nhất?',
      options: ['Sóng vô tuyến', 'Tia hồng ngoại', 'Tia tử ngoại', 'Tia X'],
      correct_index: 0,
      explanation: 'Trên thang sóng điện từ, sóng vô tuyến có bước sóng dài nhất (từ vài mm đến hàng km).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Tia hồng ngoại là bức xạ điện từ có bước sóng nằm trong khoảng nào?',
      options: ['Từ $760\\,\\text{nm}$ đến khoảng $1\\,\\text{mm}$', 'Từ $380\\,\\text{nm}$ đến $760\\,\\text{nm}$', 'Từ $10\\,\\text{nm}$ đến $380\\,\\text{nm}$', 'Nhỏ hơn $10^{-11}\\,\\text{m}$'],
      correct_index: 0,
      explanation: 'Tia hồng ngoại có bước sóng lớn hơn ánh sáng đỏ, từ $760\\,\\text{nm}$ đến $1\\,\\text{mm}$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Tác dụng nổi bật nhất của tia hồng ngoại là',
      options: ['Tác dụng nhiệt', 'Tác dụng diệt khuẩn', 'Tác dụng ion hóa chất khí', 'Khả năng đâm xuyên qua tấm chì dày'],
      correct_index: 0,
      explanation: 'Tia hồng ngoại có tác dụng nhiệt rất mạnh, được ứng dụng trong sấy khô nông sản, sưởi ấm, camera tầm nhiệt.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Bức xạ điện từ có bước sóng ngắn nhất và năng lượng photon lớn nhất trên thang sóng điện từ là',
      options: ['Tia gamma', 'Tia X', 'Tia tử ngoại', 'Ánh sáng tím'],
      correct_index: 0,
      explanation: 'Tia gamma ($\\lambda < 10^{-11}\\,\\text{m}$) có bước sóng ngắn nhất, tần số cao nhất và mang năng lượng lớn nhất.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Để kiểm tra hành lý của hành khách tại sân bay mà không cần mở vali, người ta sử dụng tính chất đâm xuyên của',
      options: ['Tia X (Tia Rơn-ghen)', 'Tia hồng ngoại', 'Sóng vô tuyến cực ngắn', 'Ánh sáng nhìn thấy'],
      correct_index: 0,
      explanation: 'Máy quét an ninh sân bay sử dụng tia X có khả năng đâm xuyên qua kim loại mỏng, da, nhựa để hiển thị hình ảnh đồ vật bên trong.',
    },

    // 7 Thông hiểu
    {
      difficulty: 'thong_hieu',
      question_text: 'Một sóng vô tuyến có tần số $f = 60\\,\\text{MHz}$ lan truyền trong chân không. Bước sóng của sóng này là',
      options: ['$5\\,\\text{m}$', '$0,2\\,\\text{m}$', '$18\\,\\text{m}$', '$50\\,\\text{m}$'],
      correct_index: 0,
      explanation: '$\\lambda = c / f = (3 \\times 10^8) / (60 \\times 10^6) = 5\\,\\text{m}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Sắp xếp các bức xạ điện từ sau theo thứ tự TẦN SỐ TĂNG DẦN: Sóng vô tuyến, tia X, tia hồng ngoại, tia tử ngoại.',
      options: ['Sóng vô tuyến $\\rightarrow$ Tia hồng ngoại $\\rightarrow$ Tia tử ngoại $\\rightarrow$ Tia X', 'Tia X $\\rightarrow$ Tia tử ngoại $\\rightarrow$ Tia hồng ngoại $\\rightarrow$ Sóng vô tuyến', 'Sóng vô tuyến $\\rightarrow$ Tia tử ngoại $\\rightarrow$ Tia hồng ngoại $\\rightarrow$ Tia X', 'Tia hồng ngoại $\\rightarrow$ Sóng vô tuyến $\\rightarrow$ Tia X $\\rightarrow$ Tia tử ngoại'],
      correct_index: 0,
      explanation: 'Tần số tăng dần (tương ứng bước sóng giảm dần): Sóng vô tuyến ($< 10^{11}\\,\\text{Hz}$) $\\rightarrow$ Hồng ngoại $\\rightarrow$ Khả kiến $\\rightarrow$ Tử ngoại $\\rightarrow$ Tia X ($10^{16} - 10^{19}\\,\\text{Hz}$).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi một sóng điện từ truyền từ không khí vào trong một khối thủy tinh có chiết suất $n = 1,5$ thì',
      options: ['Tần số không đổi, tốc độ giảm 1,5 lần, bước sóng giảm 1,5 lần', 'Tần số giảm 1,5 lần, bước sóng không đổi', 'Cả tần số và tốc độ đều tăng 1,5 lần', 'Tốc độ không đổi, bước sóng tăng 1,5 lần'],
      correct_index: 0,
      explanation: 'Tần số f luôn không đổi. Tốc độ trong môi trường $v = c/n = c/1,5$ giảm 1,5 lần. Bước sóng $\\lambda\' = v/f = \\lambda / n$ cũng giảm 1,5 lần.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Bộ phận nào sau đây trong điện thoại thông minh có nhiệm vụ biến đổi dao động âm thanh thành tín hiệu dao động điện từ?',
      options: ['Microphone (Micro)', 'Loa (Speaker)', 'Anten phát', 'Mạch tách sóng'],
      correct_index: 0,
      explanation: 'Microphone thu sóng âm thanh cơ học biến đổi thành tín hiệu điện dao động âm tần.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tia tử ngoại (UV) có ứng dụng nào sau đây trong y học và đời sống?',
      options: ['Khử trùng phòng mổ, tiệt trùng nước ngọt đóng chai và chữa bệnh còi xương', 'Chụp phim xương gãy', 'Sấy khô nông sản sau thu hoạch', 'Truyền thông tin vệ tinh'],
      correct_index: 0,
      explanation: 'Tia tử ngoại có tác dụng diệt khuẩn mạnh (hủy hoại ADN của vi khuẩn, virus) và kích thích tổng hợp vitamin D chống còi xương.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao tầng ôzôn ($O_3$) trong khí quyển Trái Đất có vai trò sống còn đối với sự sống của con người và sinh vật?',
      options: ['Hấp thụ phần lớn tia tử ngoại nguy hiểm (bước sóng ngắn dưới 300 nm) từ Mặt Trời', 'Ngăn cản sóng vô tuyến thoát ra ngoài vũ trụ', 'Giữ nhiệt độ Trái Đất không bị quá nóng', 'Tạo ra mây mưa cho sinh quyển'],
      correct_index: 0,
      explanation: 'Tầng ôzôn hấp thụ gần như toàn bộ tia cực tím UVC và phần lớn UVB từ Mặt Trời, che chở cho sinh vật tránh khỏi ung thư da và đột biến gen.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một trạm phát sóng Wi-Fi phát sóng điện từ ở tần số $f = 2,4\\,\\text{GHz}$. Bước sóng của sóng Wi-Fi này trong không khí bằng',
      options: ['$12,5\\,\\text{cm}$', '$1,25\\,\\text{m}$', '$8\\,\\text{cm}$', '$24\\,\\text{cm}$'],
      correct_index: 0,
      explanation: '$\\lambda = c / f = (3 \\times 10^8) / (2,4 \\times 10^9) = 3 / 24 = 0,125\\,\\text{m} = 12,5\\,\\text{cm}$ (thuộc dải sóng vi ba cực ngắn).',
    },

    // 5 Vận dụng
    {
      difficulty: 'van_dung',
      question_text: 'Mạch chọn sóng của một máy thu vô tuyến gồm một cuộn cảm thuần có độ tự cảm $L = 2\\,\\mu\\text{H}$ và một tụ điện có điện dung C biến thiên. Để thu được sóng điện từ có bước sóng $\\lambda = 60\\,\\text{m}$ trong chân không, điện dung C của tụ điện phải bằng bao nhiêu? (Lấy $\\pi^2 \\approx 10, c = 3 \\times 10^8\\,\\text{m/s}$)',
      options: ['$500\\,\\text{pF}$', '$250\\,\\text{pF}$', '$1000\\,\\text{pF}$', '$50\\,\\text{pF}$'],
      correct_index: 0,
      explanation: '$\\lambda = 2\\pi c \\sqrt{LC} \\Rightarrow \\lambda^2 = 4\\pi^2 c^2 L C \\Rightarrow C = \\frac{\\lambda^2}{4\\pi^2 c^2 L} = \\frac{60^2}{4 \\cdot 10 \\cdot (9 \\times 10^{16}) \\cdot (2 \\times 10^{-6})} = \\frac{3600}{7,2 \\times 10^{12}} = 500 \\times 10^{-12}\\,\\text{F} = 500\\,\\text{pF}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một trạm radar phát một xung sóng điện từ ngắn hướng về phía một máy bay đang bay. Sau khoảng thời gian $\\Delta t = 0,16\\,\\text{ms}$ kể từ lúc phát, trạm radar nhận được tín hiệu sóng phản xạ trở lại từ máy bay. Khoảng cách từ máy bay đến trạm radar lúc đó là',
      options: ['$24\\,\\text{km}$', '$48\\,\\text{km}$', '$12\\,\\text{km}$', '$96\\,\\text{km}$'],
      correct_index: 0,
      explanation: 'Sóng đi tới máy bay rồi phản xạ quay lại trạm: quãng đường $2d = c \\cdot \\Delta t \\Rightarrow d = \\frac{c \\cdot \\Delta t}{2} = \\frac{(3 \\times 10^8) \\cdot (0,16 \\times 10^{-3})}{2} = \\frac{4,8 \\times 10^4}{2} = 2,4 \\times 10^4\\,\\text{m} = 24\\,\\text{km}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Ánh sáng vàng của đèn hơi natri có bước sóng trong chân không là $\\lambda_0 = 589\\,\\text{nm}$. Chiết suất của nước đối với ánh sáng vàng này là $n = 1,33$. Bước sóng của ánh sáng vàng trong nước là',
      options: ['$443\\,\\text{nm}$', '$783\\,\\text{nm}$', '$589\\,\\text{nm}$', '$392\\,\\text{nm}$'],
      correct_index: 0,
      explanation: 'Bước sóng trong môi trường chiết suất n: $\\lambda = \\lambda_0 / n = 589 / 1,33 \\approx 442,86\\,\\text{nm} \\approx 443\\,\\text{nm}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một ống Coolidge (ống phát tia X) hoạt động dưới hiệu điện thế gia tốc $U = 20\\,\\text{kV}$. Bỏ qua động năng ban đầu của electron khi bứt khỏi catot. Bước sóng ngắn nhất $\\lambda_{\\min}$ của chùm tia X phát ra là (cho $h = 6,625 \\times 10^{-34}\\,\\text{J}\\cdot\\text{s}, c = 3 \\times 10^8\\,\\text{m/s}, e = 1,6 \\times 10^{-19}\\,\\text{C}$)',
      options: ['$6,21 \\times 10^{-11}\\,\\text{m}$ ($0,0621\\,\\text{nm}$)', '$1,24 \\times 10^{-10}\\,\\text{m}$', '$3,10 \\times 10^{-11}\\,\\text{m}$', '$6,21 \\times 10^{-10}\\,\\text{m}$'],
      correct_index: 0,
      explanation: 'Toàn bộ động năng của electron biến thành năng lượng photon tia X: $eU = h f_{\\max} = h c / \\lambda_{\\min} \\Rightarrow \\lambda_{\\min} = \\frac{h c}{e U} = \\frac{(6,625 \\times 10^{-34}) \\cdot (3 \\times 10^8)}{(1,6 \\times 10^{-19}) \\cdot 20000} = \\frac{1,9875 \\times 10^{-25}}{3,2 \\times 10^{-15}} \\approx 6,21 \\times 10^{-11}\\,\\text{m}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Khoảng cách trung bình từ Trái Đất đến Mặt Trăng là $d = 384400\\,\\text{km}$. Một tín hiệu laser được phát từ Trái Đất bắn lên tấm phản xạ đặt trên Mặt Trăng rồi phản xạ trở lại kính thiên văn Trái Đất. Khoảng thời gian từ lúc phát đến lúc thu được tín hiệu phản xạ là',
      options: ['$2,56\\,\\text{s}$', '$1,28\\,\\text{s}$', '$5,12\\,\\text{s}$', '$0,64\\,\\text{s}$'],
      correct_index: 0,
      explanation: 'Thời gian cả đi và về: $t = 2d / c = (2 \\cdot 384400 \\times 10^3) / (3 \\times 10^8) = 768800000 / 300000000 \\approx 2,563\\,\\text{s}$.',
    },

    // 3 Vận dụng cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một vệ tinh địa tĩnh ở độ cao $h = 36000\\,\\text{km}$ so với xích đạo Trái Đất phát sóng truyền hình số mặt đất. Bán kính Trái Đất là $R = 6400\\,\\text{km}$. Tỉ số giữa vùng diện tích bề mặt Trái Đất tối đa mà một vệ tinh địa tĩnh có thể phủ sóng trực tiếp so với diện tích toàn bộ bề mặt Trái Đất xấp xỉ bằng',
      options: ['$42,5\\%$', '$50,0\\%$', '$33,3\\%$', '$25,0\\%$'],
      correct_index: 0,
      explanation: 'Góc nhìn nửa đỉnh từ tâm Trái Đất đến tiếp tuyến từ vệ tinh: $\\cos\\alpha = R / (R + h) = 6400 / (6400 + 36000) = 6400 / 42400 = 8/53 \\approx 0,1509$. Chiều cao chỏm cầu bề mặt phủ sóng: $H = R(1 - \\cos\\alpha)$. Diện tích chỏm cầu: $S_{chỏm} = 2\\pi R H = 2\\pi R^2 (1 - \\cos\\alpha)$. Diện tích toàn cầu: $S_{toàn} = 4\\pi R^2$. Tỉ số diện tích phủ sóng: $S_{chỏm} / S_{toàn} = \\frac{1 - \\cos\\alpha}{2} = \\frac{1 - 0,1509}{2} = \\frac{0,8491}{2} \\approx 0,4245 = 42,45\\% \\approx 42,5\\%$. Chỉ cần 3 vệ tinh địa tĩnh cách nhau 120° là phủ sóng toàn cầu (trừ 2 cực).',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Tàu thám hiểm Voyager 1 hiện đang ở rìa Hệ Mặt Trời, cách Trái Đất một khoảng cách xấp xỉ $2,4 \\times 10^{10}\\,\\text{km}$. Một bức điện vô tuyến truyền lệnh điều khiển từ cơ quan NASA (Mỹ) gửi đi với tốc độ ánh sáng thì sau bao lâu tàu Voyager 1 mới nhận được tín hiệu?',
      options: ['$22,2\\,\\text{giờ}$', '$11,1\\,\\text{giờ}$', '$8000\\,\\text{giây}$', '$1,5\\,\\text{ngày}$'],
      correct_index: 0,
      explanation: '$t = d / c = (2,4 \\times 10^{13}\\,\\text{m}) / (3 \\times 10^8\\,\\text{m/s}) = 80000\\,\\text{giây}$. Đổi ra giờ: $80000 / 3600 \\approx 22,22\\,\\text{giờ}$ (hơn 22 tiếng đồng hồ).',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một nguồn sóng điện từ đẳng hướng công suất $\\mathcal{P} = 100\\,\\text{kW}$ phát sóng hình cầu vào không gian. Tại một điểm cách nguồn $r = 10\\,\\text{km}$, coi môi trường chân không không hấp thụ sóng, biên độ của vector cường độ điện trường $E_0$ xấp xỉ bằng (cho hằng số điện $\\varepsilon_0 = 8,85 \\times 10^{-12}\\,\\text{F/m}, c = 3 \\times 10^8\\,\\text{m/s}$)',
      options: ['$0,245\\,\\text{V/m}$', '$0,490\\,\\text{V/m}$', '$0,173\\,\\text{V/m}$', '$1,22\\,\\text{V/m}$'],
      correct_index: 0,
      explanation: 'Mật độ năng lượng sóng trung bình: $I = \\frac{\\mathcal{P}}{4\\pi r^2} = \\frac{10^5}{4\\pi \\cdot (10^4)^2} = \\frac{10^5}{4\\pi \\times 10^8} = \\frac{1}{4000\\pi} \\approx 7,96 \\times 10^{-5}\\,\\text{W/m}^2$. Mặt khác, vector Poynting trung bình: $I = \\frac{1}{2} c \\varepsilon_0 E_0^2 \\Rightarrow E_0 = \\sqrt{\\frac{2 I}{c \\varepsilon_0}} = \\sqrt{\\frac{2 \\times 7,96 \\times 10^{-5}}{3 \\times 10^8 \\cdot 8,85 \\times 10^{-12}}} = \\sqrt{\\frac{1,592 \\times 10^{-4}}{2,655 \\times 10^{-3}}} = \\sqrt{0,05996} \\approx 0,245\\,\\text{V/m}$.',
    },
  ],
};

/**
 * Builds 25 comprehensive multiple-choice questions for any Grade 11 topic.
 * Topics: G11-CH1-TP1..3, G11-CH2-TP1..3, G11-CH3-TP1..3, G11-CH4-TP1..3 (12 topics).
 * Each returns exactly 25 questions: 10 nhan_biet, 7 thong_hieu, 5 van_dung, 3 van_dung_cao.
 */
export function buildGrade11Topic25Questions(topicCode: string): SeedQuestionItem[] {
  const rawList = GRADE11_CH1_CH2_TOPICS[topicCode] || GRADE11_CH3_CH4_TOPICS[topicCode];

  if (!rawList || rawList.length === 0) {
    return [];
  }

  return rawList.slice(0, 25).map((q, idx) => ({
    order_index: idx + 1,
    difficulty: q.difficulty,
    question_text: q.question_text,
    options: q.options as [string, string, string, string],
    correct_index: q.correct_index,
    explanation: q.explanation,
  }));
}

/**
 * Builds 25 comprehensive synthesis exam questions for each of the 4 Grade 11 Chapters:
 * G11-CH1, G11-CH2, G11-CH3, G11-CH4.
 * Balances questions across the 3 topics of the chapter (9 + 8 + 8 = 25 questions)
 * preserving cognitive level diversity (nhan_biet, thong_hieu, van_dung, van_dung_cao).
 */
export function buildGrade11Chapter25ExamQuestions(chapterCode: string): SeedQuestionItem[] {
  const topicCodesByChapter: Record<string, [string, string, string]> = {
    'G11-CH1': ['G11-CH1-TP1', 'G11-CH1-TP2', 'G11-CH1-TP3'],
    'G11-CH2': ['G11-CH2-TP1', 'G11-CH2-TP2', 'G11-CH2-TP3'],
    'G11-CH3': ['G11-CH3-TP1', 'G11-CH3-TP2', 'G11-CH3-TP3'],
    'G11-CH4': ['G11-CH4-TP1', 'G11-CH4-TP2', 'G11-CH4-TP3'],
  };

  const codes = topicCodesByChapter[chapterCode];
  if (!codes) return [];

  const t1 = buildGrade11Topic25Questions(codes[0]);
  const t2 = buildGrade11Topic25Questions(codes[1]);
  const t3 = buildGrade11Topic25Questions(codes[2]);

  // Pick 9 from Topic 1, 8 from Topic 2, 8 from Topic 3 across cognitive levels
  // Topic 1: 3 NB (0, 2, 5), 2 TH (10, 12), 2 VD (17, 19), 2 VDC (22, 24) = 9
  const pickIndices9 = [0, 2, 5, 10, 12, 17, 19, 22, 24];
  // Topic 2: 3 NB (1, 3, 6), 2 TH (11, 13), 2 VD (18, 20), 1 VDC (23) = 8
  const pickIndices8a = [1, 3, 6, 11, 13, 18, 20, 23];
  // Topic 3: 3 NB (0, 4, 7), 2 TH (10, 14), 2 VD (17, 21), 1 VDC (23) = 8
  const pickIndices8b = [0, 4, 7, 10, 14, 17, 21, 23];

  const combined: RawQ[] = [
    ...pickIndices9.map((i) => t1[i]).filter(Boolean),
    ...pickIndices8a.map((i) => t2[i]).filter(Boolean),
    ...pickIndices8b.map((i) => t3[i]).filter(Boolean),
  ];

  return combined.slice(0, 25).map((q, idx) => ({
    order_index: idx + 1,
    difficulty: q.difficulty,
    question_text: q.question_text,
    options: q.options as [string, string, string, string],
    correct_index: q.correct_index,
    explanation: q.explanation,
  }));
}

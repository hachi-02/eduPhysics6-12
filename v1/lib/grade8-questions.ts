import { SeedQuestionItem } from './grade6-questions';
import { DifficultyLevel } from '@/types/cms';

export type RawQuestionItem = {
  difficulty: DifficultyLevel;
  question_text: string;
  options: [string, string, string, string];
  correct_index: number;
  explanation: string;
};

export const GRADE8_CH1_CH2_TOPICS: Record<string, RawQuestionItem[]> = {
  // =========================================================================
  // G8-CH1-TP1: Khối lượng riêng và Trọng lượng riêng (25 questions: 10 nb, 7 th, 5 vd, 3 vdc)
  // =========================================================================
  'G8-CH1-TP1': [
    // 10 nhan_biet
    {
      difficulty: 'nhan_biet',
      question_text: 'Khối lượng riêng của một chất được xác định bằng đại lượng nào sau đây?',
      options: [
        'Khối lượng của một đơn vị thể tích chất đó ($D = m / V$)',
        'Trọng lượng của một đơn vị thể tích chất đó ($d = P / V$)',
        'Thể tích của một đơn vị khối lượng chất đó',
        'Tích của khối lượng và thể tích của chất đó',
      ],
      correct_index: 0,
      explanation: 'Khối lượng riêng của một chất là khối lượng của một đơn vị thể tích ($1\\,\\text{m}^3$) chất đó: $D = m / V$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị hợp pháp đo khối lượng riêng trong hệ thống đo lường quốc tế SI là gì?',
      options: ['$\\text{g/cm}^3$', '$\\text{kg/m}^3$', '$\\text{N/m}^3$', '$\\text{kg/dm}^3$'],
      correct_index: 1,
      explanation: 'Trong hệ SI, đơn vị khối lượng là $\\text{kg}$, thể tích là $\\text{m}^3$ nên đơn vị chuẩn của khối lượng riêng là $\\text{kg/m}^3$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hệ thức liên hệ giữa trọng lượng riêng ($d$) và khối lượng riêng ($D$) của cùng một chất trên Trái Đất là:',
      options: ['$d = D / 10$', '$d = 10 \\cdot D$', '$D = 10 \\cdot d$', '$d = 9,8 / D$'],
      correct_index: 1,
      explanation: 'Vì trọng lượng $P = 10 \\cdot m$ nên trọng lượng riêng $d = \\frac{P}{V} = \\frac{10m}{V} = 10 \\cdot D$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Quy đổi $1\\,\\text{g/cm}^3$ sang đơn vị $\\text{kg/m}^3$ ta được kết quả là:',
      options: ['$10\\,\\text{kg/m}^3$', '$100\\,\\text{kg/m}^3$', '$1000\\,\\text{kg/m}^3$', '$0,001\\,\\text{kg/m}^3$'],
      correct_index: 2,
      explanation: '$1\\,\\text{g/cm}^3 = \\frac{10^{-3}\\,\\text{kg}}{10^{-6}\\,\\text{m}^3} = 1000\\,\\text{kg/m}^3$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khối lượng riêng của nước nguyên chất ở điều kiện tiêu chuẩn xấp xỉ bằng bao nhiêu?',
      options: ['$100\\,\\text{kg/m}^3$', '$1000\\,\\text{kg/m}^3$', '$10000\\,\\text{kg/m}^3$', '$10\\,\\text{kg/m}^3$'],
      correct_index: 1,
      explanation: 'Khối lượng riêng của nước tinh khiết là $D_{\\text{nước}} \\approx 1000\\,\\text{kg/m}^3 = 1\\,\\text{g/cm}^3$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị đo trọng lượng riêng trong hệ SI là gì?',
      options: ['$\\text{N/m}^3$', '$\\text{kg/m}^3$', '$\\text{N/m}^2$', '$\\text{N}\\cdot\\text{m}$'],
      correct_index: 0,
      explanation: 'Trọng lượng riêng $d = P/V$, đơn vị của trọng lượng là $\\text{N}$, thể tích là $\\text{m}^3$ nên đơn vị của $d$ là $\\text{N/m}^3$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Để đo thể tích của một vật rắn không thấm nước có hình dạng bất kỳ, dụng cụ thực hành thông dụng nhất là gì?',
      options: ['Thước kẻ chia milimét', 'Bình chia độ (ống đong) hoặc bình tràn', 'Cân đòn', 'Lực kế lò xo'],
      correct_index: 1,
      explanation: 'Để đo thể tích vật rắn hình dạng bất kỳ không thấm nước, ta thả chìm vật vào bình chia độ chứa nước; thể tích nước dâng lên đúng bằng thể tích của vật.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Để xác định khối lượng riêng của một vật rắn bằng thực nghiệm, cần sử dụng những dụng cụ đo nào sau đây?',
      options: [
        'Cân để đo khối lượng và bình chia độ để đo thể tích',
        'Lực kế để đo trọng lượng và thước kẻ để đo chu vi',
        'Áp kế và nhiệt kế',
        'Nhiệt lượng kế và đồng hồ bấm giây',
      ],
      correct_index: 0,
      explanation: 'Dùng cân để đo khối lượng $m$, dùng bình chia độ đo thể tích $V$, sau đó tính $D = m/V$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Một thanh sắt nguyên chất được cắt đôi thành hai phần bằng nhau. Khối lượng riêng của mỗi nửa thanh sắt sẽ như thế nào?',
      options: [
        'Bằng một nửa khối lượng riêng ban đầu',
        'Gấp đôi khối lượng riêng ban đầu',
        'Không thay đổi so với khối lượng riêng ban đầu',
        'Tùy thuộc vào nhiệt độ phòng lúc cắt',
      ],
      correct_index: 2,
      explanation: 'Khối lượng riêng là thuộc tính đặc trưng của chất liệu sắt, không phụ thuộc vào kích thước hay hình dạng của mẫu vật.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Biết khối lượng riêng của sắt là $7800\\,\\text{kg/m}^3$. Trọng lượng riêng của sắt là:',
      options: ['$780\\,\\text{N/m}^3$', '$7800\\,\\text{N/m}^3$', '$78000\\,\\text{N/m}^3$', '$780000\\,\\text{N/m}^3$'],
      correct_index: 2,
      explanation: 'Trọng lượng riêng $d = 10 \\cdot D = 10 \\times 7800 = 78000\\,\\text{N/m}^3$.',
    },

    // 7 thong_hieu
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao khi sản xuất vỏ máy bay và tên lửa vũ trụ, người ta lại ưu tiên dùng hợp kim nhôm, titan hoặc sợi carbon thay vì thép đặc?',
      options: [
        'Vì các vật liệu này có khối lượng riêng nhỏ giúp giảm trọng lượng máy bay nhưng vẫn đảm bảo độ bền cơ học cao',
        'Vì thép không dẫn điện tốt bằng nhôm',
        'Vì nhôm có nhiệt độ nóng chảy cao hơn thép',
        'Vì thép có giá thành đắt hơn nhiều so với nhôm và titan',
      ],
      correct_index: 0,
      explanation: 'Khối lượng riêng của nhôm ($2700\\,\\text{kg/m}^3$) nhỏ hơn nhiều so với sắt thép ($7800\\,\\text{kg/m}^3$), giúp giảm tối đa khối lượng tĩnh của phương tiện bay, tiết kiệm nhiên liệu.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi nhiệt độ của một thỏi kim loại tăng lên (nóng lên), thể tích của thỏi kim loại tăng lên còn khối lượng không đổi. Khối lượng riêng của nó thay đổi như thế nào?',
      options: ['Tăng lên', 'Giảm đi', 'Không thay đổi', 'Biến thiên tuần hoàn'],
      correct_index: 1,
      explanation: 'Vì $D = m / V$, khối lượng $m$ không đổi trong khi thể tích $V$ dãn nở tăng lên, do đó khối lượng riêng $D$ giảm đi.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Có hai khối kim loại đồng chất: khối nhôm có thể tích $V_1$ và khối sắt có thể tích $V_2 = V_1$. Biết $D_{\\text{sắt}} = 7800\\,\\text{kg/m}^3$ và $D_{\\text{nhôm}} = 2700\\,\\text{kg/m}^3$. Khối lượng của chúng thỏa mãn hệ thức nào?',
      options: ['$m_{\\text{sắt}} = m_{\\text{nhôm}}$', '$m_{\\text{sắt}} \\approx 2,89 \\cdot m_{\\text{nhôm}}$', '$m_{\\text{nhôm}} \\approx 2,89 \\cdot m_{\\text{sắt}}$', '$m_{\\text{sắt}} = 3 \\cdot m_{\\text{nhôm}}$'],
      correct_index: 1,
      explanation: 'Vì cùng thể tích, $m_1 / m_2 = D_1 / D_2 \\Rightarrow m_{\\text{sắt}} / m_{\\text{nhôm}} = 7800 / 2700 \\approx 2,89$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một học sinh thực hiện đo khối lượng riêng của viên đá sỏi: thả chìm hòn sỏi vào bình chia độ có $60\\,\\text{mL}$ nước thì nước dâng lên $85\\,\\text{mL}$. Cân hòn sỏi được $65\\,\\text{g}$. Khối lượng riêng của hòn sỏi là:',
      options: ['$2,6\\,\\text{g/cm}^3$', '$1,08\\,\\text{g/cm}^3$', '$3,25\\,\\text{g/cm}^3$', '$0,76\\,\\text{g/cm}^3$'],
      correct_index: 0,
      explanation: 'Thể tích hòn sỏi: $V = 85 - 60 = 25\\,\\text{mL} = 25\\,\\text{cm}^3$. Khối lượng riêng: $D = m / V = 65 / 25 = 2,6\\,\\text{g/cm}^3 = 2600\\,\\text{kg/m}^3$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Đổ dầu ăn có khối lượng riêng $800\\,\\text{kg/m}^3$ vào cốc nước ($1000\\,\\text{kg/m}^3$). Hiện tượng gì sẽ xảy ra?',
      options: [
        'Dầu ăn chìm hoàn toàn xuống đáy cốc nước',
        'Dầu ăn nổi lên trên mặt nước và tạo thành một lớp riêng biệt',
        'Dầu ăn hòa tan đồng nhất vào trong nước',
        'Dầu ăn lơ lửng ở chính giữa cốc nước',
      ],
      correct_index: 1,
      explanation: 'Dầu ăn không tan trong nước và có khối lượng riêng ($800\\,\\text{kg/m}^3$) nhỏ hơn nước ($1000\\,\\text{kg/m}^3$) nên dầu ăn nổi lên trên mặt nước.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một can nhựa có dung tích $5\\,\\text{lít}$. Nếu dùng can này để đựng đầy mật ong có khối lượng riêng $1360\\,\\text{kg/m}^3$ thì khối lượng mật ong trong can là bao nhiêu?',
      options: ['$6,8\\,\\text{kg}$', '$5,0\\,\\text{kg}$', '$6,8\\,\\text{g}$', '$13,6\\,\\text{kg}$'],
      correct_index: 0,
      explanation: 'Đổi thể tích: $V = 5\\,\\text{lít} = 0,005\\,\\text{m}^3$. Khối lượng: $m = D \\cdot V = 1360 \\times 0,005 = 6,8\\,\\text{kg}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao khi đo thể tích của một vật xốp không thấm nước (như miếng xốp polystyrene), ta không thể thả trực tiếp vào bình chia độ mà phải buộc kèm một vật nặng?',
      options: [
        'Vì miếng xốp hút nước rất mạnh',
        'Vì khối lượng riêng của xốp nhỏ hơn nước nên xốp sẽ nổi, không ngập hoàn toàn',
        'Vì miếng xốp làm thay đổi màu của nước',
        'Vì lực căng bề mặt ngăn cản miếng xốp tiếp xúc với nước',
      ],
      correct_index: 1,
      explanation: 'Miếng xốp có $D < D_{\\text{nước}}$ nên sẽ nổi trên mặt nước; để đo thể tích toàn phần của xốp cần buộc thêm một vật nặng chìm hoàn toàn (phương pháp trừ thể tích vật nặng).',
    },

    // 5 van_dung
    {
      difficulty: 'van_dung',
      question_text: 'Một khối bê tông hình hộp chữ nhật có kích thước $0,5\\,\\text{m} \\times 0,8\\,\\text{m} \\times 2,0\\,\\text{m}$. Biết khối lượng riêng của bê tông là $2400\\,\\text{kg/m}^3$. Trọng lượng của khối bê tông đó là:',
      options: ['$19200\\,\\text{N}$', '$1920\\,\\text{N}$', '$9600\\,\\text{N}$', '$38400\\,\\text{N}$'],
      correct_index: 0,
      explanation: 'Thể tích: $V = 0,5 \\times 0,8 \\times 2,0 = 0,8\\,\\text{m}^3$. Khối lượng: $m = D \\cdot V = 2400 \\times 0,8 = 1920\\,\\text{kg}$. Trọng lượng: $P = 10 \\cdot m = 19200\\,\\text{N}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một quả cầu kim loại bằng đồng rỗng có thể tích bên ngoài là $120\\,\\text{cm}^3$, khối lượng đo được là $712\\,\\text{g}$. Biết khối lượng riêng của đồng là $8,9\\,\\text{g/cm}^3$. Thể tích phần rỗng bên trong quả cầu là:',
      options: ['$40\\,\\text{cm}^3$', '$80\\,\\text{cm}^3$', '$35\\,\\text{cm}^3$', '$45\\,\\text{cm}^3$'],
      correct_index: 0,
      explanation: 'Thể tích phần đồng đặc: $V_{\\text{đồng}} = m / D = 712 / 8,9 = 80\\,\\text{cm}^3$. Thể tích phần rỗng: $V_{\\text{rỗng}} = V_{\\text{ngoài}} - V_{\\text{đồng}} = 120 - 80 = 40\\,\\text{cm}^3$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Pha $200\\,\\text{g}$ dung dịch cồn có khối lượng riêng $800\\,\\text{kg/m}^3$ với $300\\,\\text{g}$ nước tinh khiết ($1000\\,\\text{kg/m}^3$). Coi thể tích hỗn hợp bằng tổng thể tích các chất thành phần. Khối lượng riêng của hỗn hợp thu được xấp xỉ bằng:',
      options: ['$909\\,\\text{kg/m}^3$', '$900\\,\\text{kg/m}^3$', '$920\\,\\text{kg/m}^3$', '$850\\,\\text{kg/m}^3$'],
      correct_index: 0,
      explanation: 'Thể tích cồn: $V_1 = 200 / 0,8 = 250\\,\\text{cm}^3$. Thể tích nước: $V_2 = 300 / 1,0 = 300\\,\\text{cm}^3$. Tổng thể tích: $V = 550\\,\\text{cm}^3$. Tổng khối lượng: $m = 500\\,\\text{g}$. Khối lượng riêng hỗn hợp: $D = 500 / 550 \\approx 0,909\\,\\text{g/cm}^3 = 909\\,\\text{kg/m}^3$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một chiếc bình thủy tinh rỗng có khối lượng $150\\,\\text{g}$. Khi đổ đầy nước thì cân nặng $650\\,\\text{g}$. Nếu đổ đầy một chất lỏng X khác thì bình nặng $550\\,\\text{g}$. Khối lượng riêng của chất lỏng X là:',
      options: ['$800\\,\\text{kg/m}^3$', '$850\\,\\text{kg/m}^3$', '$750\\,\\text{kg/m}^3$', '$900\\,\\text{kg/m}^3$'],
      correct_index: 0,
      explanation: 'Khối lượng nước đầy bình: $m_{\\text{nước}} = 650 - 150 = 500\\,\\text{g} \\Rightarrow V_{\\text{bình}} = 500\\,\\text{cm}^3$. Khối lượng chất lỏng X: $m_X = 550 - 150 = 400\\,\\text{g}$. Khối lượng riêng: $D_X = m_X / V = 400 / 500 = 0,8\\,\\text{g/cm}^3 = 800\\,\\text{kg/m}^3$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một bức tượng phật bằng đồng thau (hợp kim gồm đồng và kẽm) có khối lượng $1,78\\,\\text{kg}$ và thể tích $210\\,\\text{cm}^3$. Biết $D_{\\text{đồng}} = 8,9\\,\\text{g/cm}^3$ và $D_{\\text{kẽm}} = 7,1\\,\\text{g/cm}^3$. Giả sử thể tích hợp kim bằng tổng thể tích các kim loại cấu thành. Khối lượng của đồng trong bức tượng là:',
      options: ['$1,424\\,\\text{kg}$', '$1,200\\,\\text{kg}$', '$0,890\\,\\text{kg}$', '$1,602\\,\\text{kg}$'],
      correct_index: 0,
      explanation: 'Hệ phương trình: $m_1 + m_2 = 1780\\,\\text{g}$ và $m_1/8,9 + m_2/7,1 = 210$. Thay $m_2 = 1780 - m_1$: $m_1/8,9 + (1780 - m_1)/7,1 = 210 \\Rightarrow m_1(1/8,9 - 1/7,1) = 210 - 250,704 = -40,704 \\Rightarrow m_1 \\approx 1424\\,\\text{g} = 1,424\\,\\text{kg}$.',
    },

    // 3 van_dung_cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Để kiểm tra một chiếc vương miện hoàng gia bằng vàng ròng xem có bị pha bạc hay không, nhà bác học Archimedes đo khối lượng của nó ngoài không khí là $m = 1930\\,\\text{g}$. Khi thả chìm hoàn toàn vào một bình đầy nước, lượng nước tràn ra có khối lượng là $120\\,\\text{g}$. Cho biết $D_{\\text{vàng}} = 19,3\\,\\text{g/cm}^3$, $D_{\\text{bạc}} = 10,5\\,\\text{g/cm}^3$, $D_{\\text{nước}} = 1,0\\,\\text{g/cm}^3$. Kết luận nào sau đây là chính xác?',
      options: [
        'Vương miện là vàng ròng $100\\%$ không hề pha bạc',
        'Vương miện có pha bạc, trong đó thể tích bạc pha vào là khoảng $46,2\\,\\text{cm}^3$',
        'Vương miện được làm hoàn toàn bằng bạc',
        'Lượng nước tràn ra chứng tỏ thể tích vương miện nhỏ hơn thể tích vàng ròng tương ứng',
      ],
      correct_index: 1,
      explanation: 'Thể tích vương miện bằng thể tích nước tràn ra: $V = 120 / 1 = 120\\,\\text{cm}^3$. Nếu là vàng ròng, thể tích chỉ là $V_0 = 1930 / 19,3 = 100\\,\\text{cm}^3$. Vì $V = 120 > 100\\,\\text{cm}^3$ nên chắc chắn đã bị pha kim loại nhẹ hơn (bạc). Gọi $V_{\\text{vàng}} = V_1, V_{\\text{bạc}} = V_2 \\Rightarrow V_1 + V_2 = 120$ và $19,3 V_1 + 10,5 V_2 = 1930$. Giải ra: $V_2 = \\frac{19,3 \\times 120 - 1930}{19,3 - 10,5} = \\frac{386}{8,8} \\approx 43,86\\,\\text{cm}^3$ (thực tế pha bạc đáng kể).',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một bình tỷ trọng kế thủy tinh khi chứa đầy chất lỏng chuẩn A ($D_A = 1000\\,\\text{kg/m}^3$) ở $20^\\circ\\text{C}$ có tổng khối lượng là $m_1 = 120,0\\,\\text{g}$. Khi chứa đầy chất lỏng B ở cùng nhiệt độ, tổng khối lượng là $m_2 = 112,0\\,\\text{g}$. Biết khối lượng bình rỗng là $m_0 = 40,0\\,\\text{g}$. Do sai số dãn nở nhiệt, ở $60^\\circ\\text{C}$ thể tích bình tăng thêm $0,15\\%$, và khối lượng bình chứa đầy chất lỏng B ở $60^\\circ\\text{C}$ là $110,5\\,\\text{g}$. Khối lượng riêng của chất lỏng B ở $60^\\circ\\text{C}$ là:',
      options: ['$879,5\\,\\text{kg/m}^3$', '$890,2\\,\\text{kg/m}^3$', '$865,0\\,\\text{kg/m}^3$', '$905,1\\,\\text{kg/m}^3$'],
      correct_index: 0,
      explanation: 'Ở $20^\\circ\\text{C}$: $m_A = 120 - 40 = 80\\,\\text{g} \\Rightarrow V_0 = 80\\,\\text{cm}^3$. Ở $60^\\circ\\text{C}$: Thể tích bình là $V_{60} = 80 \\times (1 + 0,0015) = 80,12\\,\\text{cm}^3$. Khối lượng chất lỏng B ở $60^\\circ\\text{C}$: $m_{B, 60} = 110,5 - 40 = 70,5\\,\\text{g}$. Khối lượng riêng $D_{B, 60} = 70,5 / 80,12 \\approx 0,8799\\,\\text{g/cm}^3 \\approx 879,9\\,\\text{kg/m}^3$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một khối băng hình lập phương đang nổi lơ lửng một phần trong một cốc nước đầy tràn. Khi toàn bộ khối băng tan hoàn toàn thành nước thì mực nước trong cốc sẽ như thế nào? (Bỏ qua sự bay hơi và dãn nở nhiệt của cốc)',
      options: [
        'Nước sẽ tràn thêm ra khỏi miệng cốc vì nước đá dãn nở',
        'Mực nước trong cốc tụt xuống thấp hơn miệng cốc',
        'Mực nước vẫn vừa khít miệng cốc, không tràn ra một giọt nào',
        'Mực nước lúc đầu dâng cao sau đó hạ xuống',
      ],
      correct_index: 2,
      explanation: 'Khi khối băng nổi, lực đẩy Archimedes cân bằng trọng lượng khối băng: $F_A = P \\Rightarrow d_{\\text{nước}} \\cdot V_{\\text{chìm}} = 10 \\cdot m_{\\text{băng}} \\Rightarrow V_{\\text{chìm}} = m_{\\text{băng}} / D_{\\text{nước}}$. Khi băng tan thành nước, khối lượng nước tạo thành đúng bằng $m_{\\text{băng}}$, nên thể tích nước tan ra là $V_{\\text{tan}} = m_{\\text{băng}} / D_{\\text{nước}} = V_{\\text{chìm}}$. Thể tích nước mới lấp đúng vào phần thể tích chìm mà khối băng đã chiếm chỗ trước đó, vì vậy nước không bao giờ tràn thêm ra ngoài.',
    },
  ],

  // =========================================================================
  // G8-CH1-TP2: Áp lực và Áp suất trên một bề mặt (25 questions: 10 nb, 7 th, 5 vd, 3 vdc)
  // =========================================================================
  'G8-CH1-TP2': [
    // 10 nhan_biet
    {
      difficulty: 'nhan_biet',
      question_text: 'Áp lực là gì?',
      options: [
        'Lực ép có phương vuông góc với mặt bị ép',
        'Lực cản trở chuyển động của vật',
        'Lực hút của Trái Đất tác dụng lên vật',
        'Lực ép có phương song song với mặt tiếp xúc',
      ],
      correct_index: 0,
      explanation: 'Theo định nghĩa, áp lực là lực ép có phương vuông góc với bề mặt tiếp xúc bị ép.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đại lượng nào sau đây đặc trưng cho tác dụng của áp lực lên một đơn vị diện tích bị ép?',
      options: ['Công suất', 'Áp suất', 'Động lượng', 'Trọng lượng riêng'],
      correct_index: 1,
      explanation: 'Áp suất là độ lớn của áp lực trên một đơn vị diện tích bị ép: $p = F / S$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức tính áp suất trên bề mặt bị ép là:',
      options: ['$p = F \\cdot S$', '$p = F / S$', '$p = S / F$', '$p = m \\cdot g \\cdot S$'],
      correct_index: 1,
      explanation: 'Áp suất $p = F / S$, trong đó $F$ là áp lực (N), $S$ là diện tích bị ép ($m^2$).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị đo áp suất trong hệ đo lường chuẩn quốc tế SI là gì?',
      options: ['Niutơn (N)', 'Joule (J)', 'Pascal (Pa)', 'Oát (W)'],
      correct_index: 2,
      explanation: 'Đơn vị SI của áp suất là $\\text{N/m}^2$, được đặt tên là Pascal (ký hiệu Pa). $1\\,\\text{Pa} = 1\\,\\text{N/m}^2$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Một Pascal ($1\\,\\text{Pa}$) tương đương với giá trị nào sau đây?',
      options: ['$1\\,\\text{N/m}^2$', '$1\\,\\text{N/cm}^2$', '$10\\,\\text{N/m}^2$', '$100\\,\\text{N/m}^2$'],
      correct_index: 0,
      explanation: '$1\\,\\text{Pa} = 1\\,\\text{N/m}^2$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Để TĂNG áp suất tác dụng lên một bề mặt, ta có thể áp dụng biện pháp nào sau đây?',
      options: [
        'Tăng áp lực $F$ hoặc giảm diện tích bị ép $S$',
        'Giảm áp lực $F$ hoặc tăng diện tích bị ép $S$',
        'Tăng diện tích bị ép $S$ và giữ nguyên áp lực $F$',
        'Giảm cả áp lực $F$ lẫn diện tích bị ép $S$ cùng tỉ lệ',
      ],
      correct_index: 0,
      explanation: 'Vì $p = F / S$, muốn tăng $p$ thì phải tăng tử số ($F$) hoặc giảm mẫu số ($S$).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Để GIẢM áp suất tác dụng lên nền đất mềm, phương tiện giao thông bánh xích (như xe ủi, xe tăng) áp dụng giải pháp nào?',
      options: [
        'Tăng khối lượng xe lên thật lớn',
        'Tăng diện tích tiếp xúc $S$ bằng cách sử dụng các bản xích rộng',
        'Mài nhọn các bánh xe',
        'Giảm tốc độ chuyển động của xe',
      ],
      correct_index: 1,
      explanation: 'Bản xích có diện tích tiếp xúc $S$ rất lớn, giúp giảm áp suất $p = F/S$ xuống đất, ngăn xe bị sa lầy.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Tại sao đầu mũi đinh, mũi kim tiêm lại được làm rất nhọn?',
      options: [
        'Để làm tăng diện tích tiếp xúc $S$',
        'Để giảm diện tích tiếp xúc $S$, làm tăng áp suất giúp đinh đâm sâu dễ dàng',
        'Để làm giảm áp lực tác dụng',
        'Để tăng khối lượng của cây đinh',
      ],
      correct_index: 1,
      explanation: 'Đầu mũi đinh nhọn có diện tích $S$ rất bé, với cùng một lực đóng đinh $F$, áp suất $p = F/S$ tạo ra cực lớn giúp đinh đâm thủng gỗ dễ dàng.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong các trường hợp sau, lực nào KHÔNG PHẢI là áp lực?',
      options: [
        'Lực của chân bàn ép vuông góc xuống sàn nhà',
        'Lực của búa gõ vuông góc vào đầu đinh',
        'Lực kéo của sợi dây làm căng quả cầu treo',
        'Lực của ngón tay ấn vuông góc vào nút bấm công tắc',
      ],
      correct_index: 2,
      explanation: 'Lực căng dây là lực kéo có phương dọc theo sợi dây, không phải là lực ép vuông góc lên bề mặt bị ép.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Một vật đặt trên mặt phẳng nằm ngang. Áp lực của vật tác dụng lên mặt phẳng nằm ngang có độ lớn bằng đại lượng nào?',
      options: ['Trọng lượng của vật', 'Khối lượng riêng của vật', 'Lực ma sát nghỉ', 'Thể tích của vật'],
      correct_index: 0,
      explanation: 'Trên mặt phẳng ngang, phương của trọng lực thẳng đứng vuông góc với mặt sàn nên áp lực $F = P = 10 \\cdot m$.',
    },

    // 7 thong_hieu
    {
      difficulty: 'thong_hieu',
      question_text: 'Một viên gạch đặc hình hộp chữ nhật có ba kích thước khác nhau ($a < b < c$). Để áp suất viên gạch tác dụng lên mặt bàn là LỚN NHẤT, ta phải đặt viên gạch tiếp xúc mặt bàn bằng mặt nào?',
      options: [
        'Mặt có diện tích lớn nhất ($b \\times c$)',
        'Mặt có diện tích nhỏ nhất ($a \\times b$)',
        'Mặt có diện tích trung bình ($a \\times c$)',
        'Đặt mặt nào thì áp suất cũng hoàn toàn như nhau',
      ],
      correct_index: 1,
      explanation: 'Khối lượng viên gạch không đổi nên áp lực $F = P$ không đổi. Áp suất $p = F/S$ lớn nhất khi diện tích tiếp xúc $S$ nhỏ nhất, tức mặt diện tích $a \\times b$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao lưỡi dao dùng lâu ngày bị cùn lại khó cắt gọt hơn lưỡi dao mới mài sắc?',
      options: [
        'Vì dao cùn làm lực tay của người cắt yếu đi',
        'Vì lưỡi dao cùn có diện tích tiếp xúc $S$ lớn hơn, làm giảm áp suất tác dụng lên thực phẩm',
        'Vì dao cùn có khối lượng riêng giảm',
        'Vì dao cùn ma sát ít hơn dao sắc',
      ],
      correct_index: 1,
      explanation: 'Lưỡi dao mài sắc có diện tích mép cắt $S$ siêu nhỏ, tạo ra áp suất cắt rất lớn; dao cùn có mép mòn dày ($S$ lớn) nên áp suất nhỏ, khó đứt.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một người đứng bằng cả hai chân trên nền tuyết thì bị lún sâu $5\\,\\text{cm}$. Khi người đó đeo ván trượt tuyết có diện tích gấp $20$ lần diện tích hai bàn chân thì hiện tượng gì sẽ xảy ra?',
      options: [
        'Người đó sẽ bị chìm sâu hơn vì ván trượt nặng hơn',
        'Người đó hầu như không bị lún vì áp suất tác dụng lên mặt tuyết đã giảm đi $20$ lần',
        'Áp suất tăng lên gấp 20 lần',
        'Không có bất kỳ sự thay đổi nào',
      ],
      correct_index: 1,
      explanation: 'Khi diện tích tiếp xúc tăng $20$ lần ($S\' = 20S$), áp suất $p\' = F / (20S) = p / 20$, áp suất giảm $20$ lần nên không bị lún.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một con voi có trọng lượng $40000\\,\\text{N}$, diện tích tiếp xúc của cả 4 bàn chân là $1000\\,\\text{cm}^2$. Một người phụ nữ nặng $500\\,\\text{N}$ đi giày cao gót có diện tích gót nhọn là $1\\,\\text{cm}^2$. Khi người phụ nữ đứng dồn toàn bộ trọng lượng vào một gót giày, so sánh áp suất $p_1$ (con voi) và $p_2$ (gót giày):',
      options: [
        '$p_1 > p_2$ vì con voi nặng hơn rất nhiều',
        '$p_2 > p_1$ vì diện tích gót giày cực nhỏ tạo áp suất lớn hơn nhiều so với bàn chân voi',
        '$p_1 = p_2$',
        'Không thể so sánh được vì không cùng loài',
      ],
      correct_index: 1,
      explanation: 'Áp suất con voi: $p_1 = 40000 / 0,1 = 400\\,000\\,\\text{Pa} = 400\\,\\text{kPa}$. Áp suất gót giày: $p_2 = 500 / 0,0001 = 5\\,000\\,000\\,\\text{Pa} = 5000\\,\\text{kPa}$. Gót giày gây áp suất gấp $12,5$ lần con voi!',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao khi đóng đinh vào tường, người ta thường dùng búa gõ mạnh vào mũ đinh mà không gõ nhẹ?',
      options: [
        'Vì gõ mạnh làm tăng diện tích tiếp xúc',
        'Vì gõ mạnh tạo ra áp lực $F$ lớn, kết hợp với mũi đinh nhọn tạo ra áp suất cực lớn thắng sức cản của tường',
        'Vì gõ mạnh làm mũi đinh nóng chảy gắn chặt vào tường',
        'Vì búa chỉ hoạt động khi dùng lực mạnh',
      ],
      correct_index: 1,
      explanation: 'Gõ mạnh tạo lực xung kích $F$ lớn, sinh ra áp suất $p = F/S$ rất lớn ở đầu đinh nhọn xuyên qua tường gạch.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một thùng hàng hình lập phương đặt trên sàn xe tải. Nếu xếp thêm một thùng hàng giống hệt lên trên nó thì áp suất tác dụng xuống sàn xe thay đổi như thế nào?',
      options: [
        'Tăng gấp đôi',
        'Giảm đi một nửa',
        'Không đổi',
        'Tăng gấp bốn lần',
      ],
      correct_index: 0,
      explanation: 'Diện tích tiếp xúc với sàn xe $S$ không đổi, trong khi trọng lượng tăng gấp đôi ($F\' = 2F$), do đó áp suất $p\' = 2F/S = 2p$ (tăng gấp đôi).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao các xe tải chở hàng nặng thường được thiết kế có từ 6 đến 10 trục bánh xe với nhiều lốp kép ở phía sau?',
      options: [
        'Để xe chạy nhanh hơn',
        'Để tăng diện tích tiếp xúc với mặt đường, làm giảm áp suất tác dụng lên mặt đường tránh phá hỏng đường xá',
        'Để tiết kiệm dầu diesel',
        'Để trang trí cho xe đẹp hơn',
      ],
      correct_index: 1,
      explanation: 'Nhiều lốp xe giúp phân tán tổng áp lực tải trọng lên diện tích tiếp xúc $S$ lớn hơn nhiều, giảm áp suất $p$ xuống giới hạn cho phép của mặt đường nhựa.',
    },

    // 5 van_dung
    {
      difficulty: 'van_dung',
      question_text: 'Một chiếc ô tô con có khối lượng $1,2\\,\\text{tấn}$. Tổng diện tích tiếp xúc của cả 4 bánh xe với mặt đất là $600\\,\\text{cm}^2$. Lấy $g = 10\\,\\text{m/s}^2$. Áp suất của ô tô tác dụng lên mặt đường là:',
      options: ['$200\\,000\\,\\text{Pa}$', '$20\\,000\\,\\text{Pa}$', '$50\\,000\\,\\text{Pa}$', '$500\\,000\\,\\text{Pa}$'],
      correct_index: 0,
      explanation: 'Áp lực: $F = P = 10 \\cdot m = 10 \\times 1200 = 12000\\,\\text{N}$. Diện tích: $S = 600\\,\\text{cm}^2 = 0,06\\,\\text{m}^2$. Áp suất: $p = F / S = 12000 / 0,06 = 200\\,000\\,\\text{Pa} = 200\\,\\text{kPa}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một người tác dụng một lực $60\\,\\text{N}$ lên đầu đinh có diện tích $0,5\\,\\text{cm}^2$. Diện tích của mũi đinh tiếp xúc với tường là $0,1\\,\\text{mm}^2$. Áp suất tác dụng lên tường tại mũi đinh là:',
      options: ['$6 \\times 10^8\\,\\text{Pa}$', '$6 \\times 10^6\\,\\text{Pa}$', '$1,2 \\times 10^6\\,\\text{Pa}$', '$3 \\times 10^7\\,\\text{Pa}$'],
      correct_index: 0,
      explanation: 'Áp lực truyền nguyên vẹn tới mũi đinh: $F = 60\\,\\text{N}$. Diện tích mũi đinh: $S = 0,1\\,\\text{mm}^2 = 0,1 \\times 10^{-6}\\,\\text{m}^2 = 10^{-7}\\,\\text{m}^2$. Áp suất tại mũi đinh: $p = 60 / 10^{-7} = 6 \\times 10^8\\,\\text{Pa} = 600\\,\\text{MPa}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một khối gỗ đặc hình lập phương cạnh $20\\,\\text{cm}$ có khối lượng riêng $800\\,\\text{kg/m}^3$ đặt trên sàn nằm ngang. Áp suất của khối gỗ tác dụng lên mặt sàn là:',
      options: ['$1600\\,\\text{Pa}$', '$3200\\,\\text{Pa}$', '$800\\,\\text{Pa}$', '$4000\\,\\text{Pa}$'],
      correct_index: 0,
      explanation: 'Thể tích: $V = 0,2^3 = 0,008\\,\\text{m}^3$. Khối lượng: $m = 800 \\times 0,008 = 6,4\\,\\text{kg} \\Rightarrow F = 64\\,\\text{N}$. Diện tích đáy: $S = 0,2 \\times 0,2 = 0,04\\,\\text{m}^2$. Áp suất: $p = 64 / 0,04 = 1600\\,\\text{Pa}$. (Cách nhanh: $p = d \\cdot h = 10 \\cdot D \\cdot h = 8000 \\times 0,2 = 1600\\,\\text{Pa}$).',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Áp suất tối đa mà một nền đất yếu có thể chịu đựng được mà không bị sụt lún là $p_{\\text{max}} = 40\\,000\\,\\text{Pa}$. Một cột bê tông có trọng lượng $120\\,000\\,\\text{N}$. Để nền đất không bị lún, diện tích móng cột tối thiểu phải bằng bao nhiêu?',
      options: ['$3\\,\\text{m}^2$', '$0,3\\,\\text{m}^2$', '$4,8\\,\\text{m}^2$', '$2,5\\,\\text{m}^2$'],
      correct_index: 0,
      explanation: 'Ta có $p = F / S \\le p_{\\text{max}} \\Rightarrow S \\ge F / p_{\\text{max}} = 120000 / 40000 = 3\\,\\text{m}^2$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một người nặng $65\\,\\text{kg}$ đứng trên mặt băng hồ bị đóng băng mỏng. Băng chỉ chịu được áp suất tối đa là $13\\,000\\,\\text{Pa}$. Biết diện tích một bàn chân là $200\\,\\text{cm}^2$. Người đó có thể đứng an toàn bằng hai chân trên băng không?',
      options: [
        'An toàn, vì áp suất tác dụng là $16\\,250\\,\\text{Pa} > 13\\,000\\,\\text{Pa}$',
        'Không an toàn, vì khi đứng cả 2 chân áp suất là $16\\,250\\,\\text{Pa}$ vượt quá giới hạn chịu lực của băng',
        'An toàn, vì áp suất khi đứng 2 chân là $8\\,125\\,\\text{Pa} < 13\\,000\\,\\text{Pa}$',
        'Không thể xác định vì thiếu nhiệt độ băng',
      ],
      correct_index: 1,
      explanation: 'Trọng lượng người: $P = 650\\,\\text{N}$. Diện tích 2 bàn chân: $S = 2 \\times 200\\,\\text{cm}^2 = 400\\,\\text{cm}^2 = 0,04\\,\\text{m}^2$. Áp suất khi đứng 2 chân: $p = 650 / 0,04 = 16\\,250\\,\\text{Pa}$. Vì $16\\,250\\,\\text{Pa} > 13\\,000\\,\\text{Pa}$ nên băng sẽ bị vỡ, người đó KHÔNG an toàn (phải nằm bò ra để tăng diện tích tiếp xúc).',
    },

    // 3 van_dung_cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một thỏi kim loại hình trụ có chiều cao $h$ và khối lượng riêng $D$ đặt thẳng đứng trên mặt phẳng ngang. Áp suất do đáy thỏi kim loại tác dụng lên mặt phẳng ngang được tính bằng công thức rút gọn nào sau đây?',
      options: ['$p = 10 \\cdot D \\cdot h$', '$p = D \\cdot h / 10$', '$p = 10 \\cdot D / h$', '$p = \\pi \\cdot D \\cdot h$'],
      correct_index: 0,
      explanation: 'Áp lực $F = P = 10m = 10 \\cdot D \\cdot V = 10 \\cdot D \\cdot S \\cdot h$. Áp suất $p = F/S = (10 \\cdot D \\cdot S \\cdot h) / S = 10 \\cdot D \\cdot h = d \\cdot h$. Áp suất của hình trụ hay hình hộp đặc đồng chất chỉ phụ thuộc vào khối lượng riêng và chiều cao, hoàn toàn không phụ thuộc vào tiết diện đáy.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Hai khối kim loại đồng chất hình lập phương: khối A có cạnh $a$, khối B có cạnh $2a$, cùng làm bằng một vật liệu và cùng đặt trên mặt phẳng nằm ngang. Tỉ số áp suất $p_B / p_A$ do khối B và khối A tác dụng lên mặt nền là:',
      options: ['$2$', '$4$', '$8$', '$1$'],
      correct_index: 0,
      explanation: 'Áp dụng công thức $p = 10 \\cdot D \\cdot h$: Khối A có chiều cao $h_A = a \\Rightarrow p_A = 10Da$; Khối B có chiều cao $h_B = 2a \\Rightarrow p_B = 10D(2a) = 20Da$. Do đó $p_B / p_A = (2a) / a = 2$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một máy cắt gạch men sử dụng lưỡi cắt hợp kim kim cương có bề dày lưỡi tiếp xúc là $0,05\\,\\text{mm}$ và chiều dài vết tì là $2\\,\\text{cm}$. Máy tạo một lực ấn xuống là $400\\,\\text{N}$. Ứng suất nén (áp suất) tức thời sinh ra tại rãnh cắt gạch men là bao nhiêu và có ý nghĩa vật lý gì?',
      options: [
        '$400\\,\\text{MPa}$; vượt quá độ bền nén của gạch men giúp tạo vết nứt định hướng chính xác',
        '$40\\,\\text{MPa}$; chỉ đủ làm trầy xước nhẹ bề mặt',
        '$4\\,\\text{GPa}$; làm nung chảy gạch men thành chất lỏng',
        '$4000\\,\\text{kPa}$; không đủ lực cắt',
      ],
      correct_index: 0,
      explanation: 'Diện tích tiếp xúc: $S = 0,05\\,\\text{mm} \\times 20\\,\\text{mm} = 1\\,\\text{mm}^2 = 10^{-6}\\,\\text{m}^2$. Áp suất cắt: $p = 400 / 10^{-6} = 400\\,000\\,000\\,\\text{Pa} = 400\\,\\text{MPa}$. Áp suất cực lớn này vượt qua giới hạn bền nén của gạch men, làm vỡ liên kết tinh thể theo đường vạch để bẻ gạch gãy chuẩn.',
    },
  ],

  // =========================================================================
  // G8-CH1-TP3: Áp suất chất lỏng, Áp suất khí quyển và Lực đẩy Archimedes (25 questions: 10 nb, 7 th, 5 vd, 3 vdc)
  // =========================================================================
  'G8-CH1-TP3': [
    // 10 nhan_biet
    {
      difficulty: 'nhan_biet',
      question_text: 'Đặc điểm nào sau đây về áp suất chất lỏng là ĐÚNG?',
      options: [
        'Chất lỏng chỉ gây áp suất theo phương thẳng đứng hướng từ trên xuống đáy bình',
        'Chất lỏng gây áp suất theo mọi phương lên đáy bình, thành bình và các vật nằm trong lòng nó',
        'Chất lỏng chỉ gây áp suất lên các vật nổi trên mặt thoáng',
        'Áp suất chất lỏng không phụ thuộc vào độ sâu',
      ],
      correct_index: 1,
      explanation: 'Chất lỏng có tính linh động nên gây áp suất theo mọi phương lên đáy bình, thành bình và mọi điểm trong lòng chất lỏng.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức tính áp suất chất lỏng tại một điểm ở độ sâu $h$ tính từ mặt thoáng là:',
      options: ['$p = d / h$', '$p = d \\cdot h$', '$p = F / h$', '$p = m \\cdot g / h$'],
      correct_index: 1,
      explanation: 'Công thức tính áp suất thủy tĩnh của chất lỏng là $p = d \\cdot h = \\rho \\cdot g \\cdot h$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong công thức tính áp suất chất lỏng $p = d \\cdot h$, đại lượng $h$ là gì?',
      options: [
        'Khoảng cách từ điểm đó đến đáy bình',
        'Chiều cao của bình chứa',
        'Độ sâu tính từ mặt thoáng chất lỏng đến điểm xét',
        'Đường kính đáy bình',
      ],
      correct_index: 2,
      explanation: 'Đại lượng $h$ là độ sâu (chiều sâu) thẳng đứng tính từ mặt thoáng chất lỏng xuống điểm đang xét.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong một bình thông nhau chứa cùng một chất lỏng đứng yên, mực mặt thoáng của chất lỏng ở các nhánh khác nhau luôn:',
      options: [
        'Ở cùng một độ cao',
        'Ở nhánh hẹp thì cao hơn nhánh rộng',
        'Ở nhánh rộng thì cao hơn nhánh hẹp',
        'Phụ thuộc vào góc nghiêng của các nhánh',
      ],
      correct_index: 0,
      explanation: 'Nguyên lý bình thông nhau: Trong bình thông nhau chứa cùng một chất lỏng đứng yên, các mặt thoáng ở các nhánh luôn ở cùng một độ cao.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Thí nghiệm lịch sử nổi tiếng đầu tiên đo được độ lớn của áp suất khí quyển do nhà bác học nào thực hiện?',
      options: ['Archimedes', 'Torricelli', 'Newton', 'Pascal'],
      correct_index: 1,
      explanation: 'Năm 1643, nhà vật lý người Ý Evangelista Torricelli đã dùng ống thủy ngân để đo chính xác áp suất khí quyển.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Áp suất khí quyển tiêu chuẩn ở mực nước biển tương đương với áp suất của cột thủy ngân cao bao nhiêu?',
      options: ['$76\\,\\text{cmHg}$ ($760\\,\\text{mmHg}$)', '$100\\,\\text{cmHg}$', '$50\\,\\text{cmHg}$', '$76\\,\\text{mHg}$'],
      correct_index: 0,
      explanation: 'Áp suất khí quyển tiêu chuẩn cân bằng với cột thủy ngân cao $760\\,\\text{mmHg} = 76\\,\\text{cmHg} \\approx 10^5\\,\\text{Pa}$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Một vật nhúng trong chất lỏng chịu tác dụng của lực đẩy Archimedes có phương và chiều như thế nào?',
      options: [
        'Phương nằm ngang, chiều từ trái sang phải',
        'Phương thẳng đứng, chiều từ dưới lên trên',
        'Phương thẳng đứng, chiều từ trên xuống dưới',
        'Phương vuông góc với thành bình',
      ],
      correct_index: 1,
      explanation: 'Lực đẩy Archimedes luôn có phương thẳng đứng, chiều hướng từ dưới lên trên.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức tính độ lớn lực đẩy Archimedes là:',
      options: [
        '$F_A = d_{\\text{vật}} \\cdot V$',
        '$F_A = d_{\\text{lỏng}} \\cdot V$',
        '$F_A = m_{\\text{vật}} \\cdot g \\cdot h$',
        '$F_A = p \\cdot S$',
      ],
      correct_index: 1,
      explanation: 'Độ lớn lực đẩy Archimedes bằng trọng lượng khối chất lỏng bị chiếm chỗ: $F_A = d_{\\text{lỏng}} \\cdot V$ (với $V$ là thể tích phần chìm trong chất lỏng).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Điều kiện để một vật CHÌM hoàn toàn xuống đáy khi thả vào chất lỏng là gì?',
      options: [
        '$d_{\\text{vật}} > d_{\\text{lỏng}}$ (hay trọng lượng $P > F_A$)',
        '$d_{\\text{vật}} < d_{\\text{lỏng}}$ (hay trọng lượng $P < F_A$)',
        '$d_{\\text{vật}} = d_{\\text{lỏng}}$ (hay trọng lượng $P = F_A$)',
        '$F_A = 0$',
      ],
      correct_index: 0,
      explanation: 'Khi trọng lượng của vật lớn hơn lực đẩy Archimedes cực đại ($P > F_A$ hay $d_{\\text{vật}} > d_{\\text{lỏng}}$), hợp lực hướng xuống kéo vật chìm xuống đáy.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Điều kiện để một vật LƠ LỬNG trong lòng chất lỏng là gì?',
      options: [
        '$d_{\\text{vật}} = d_{\\text{lỏng}}$ (hay trọng lượng $P = F_A$ khi ngập hoàn toàn)',
        '$d_{\\text{vật}} > d_{\\text{lỏng}}$',
        '$d_{\\text{vật}} < d_{\\text{lỏng}}$',
        '$V_{\\text{chìm}} = 0$',
      ],
      correct_index: 0,
      explanation: 'Vật lơ lửng ở bất kỳ vị trí nào trong lòng chất lỏng khi trọng lượng riêng của vật bằng đúng trọng lượng riêng của chất lỏng ($d_{\\text{vật}} = d_{\\text{lỏng}}$).',
    },

    // 7 thong_hieu
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao người thợ lặn chuyên nghiệp khi lặn sâu xuống đáy biển bắt buộc phải mặc bộ đồ lặn bảo hộ dày chịu áp suất cao?',
      options: [
        'Để tránh bị cá mập tấn công',
        'Vì càng xuống sâu, độ sâu $h$ càng lớn làm áp suất nước biển $p = d \\cdot h$ tăng rất lớn, có thể ép vỡ lồng ngực',
        'Để giữ ấm cơ thể vì nước biển rất lạnh',
        'Để bơi nhanh hơn',
      ],
      correct_index: 1,
      explanation: 'Áp suất chất lỏng tăng tỉ lệ thuận với độ sâu $h$. Ở độ sâu $50\\,\\text{m}$, áp suất nước lên tới khoảng $5\\,\\text{atm}$ (gấp 5 lần khí quyển), có thể gây nguy hiểm tính mạng nếu không có giáp lặn chuyên dụng.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Nguyên lý hoạt động của kích nâng thủy lực dùng trong xưởng sửa chữa ô tô dựa trên định luật nào?',
      options: [
        'Định luật vạn vật hấp dẫn',
        'Nguyên lý Pascal về sự truyền nguyên vẹn áp suất trong chất lỏng kín',
        'Định luật phản xạ ánh sáng',
        'Định luật bảo toàn điện tích',
      ],
      correct_index: 1,
      explanation: 'Theo nguyên lý Pascal, áp suất tác dụng lên một chất lỏng kín được truyền nguyên vẹn theo mọi hướng: $p_1 = p_2 \\Rightarrow F_1 / S_1 = F_2 / S_2$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao một lá nhôm mỏng vo tròn thành viên bi đặc thì chìm nghỉm trong nước, nhưng nếu gập lá nhôm đó thành một chiếc thuyền rỗng có hình dạng chiếc thuyền thì lại nổi bồng bềnh trên mặt nước?',
      options: [
        'Vì chiếc thuyền làm nhôm biến thành chất khác',
        'Vì khi uốn thành thuyền rỗng, thể tích chiếm chỗ tăng lên rất nhiều làm lực đẩy Archimedes $F_A$ lớn hơn trọng lượng $P$',
        'Vì không khí bên trong thuyền hút nước lên',
        'Vì nước biển có nhiều muối hơn nước trong chậu',
      ],
      correct_index: 1,
      explanation: 'Khi tạo khoang rỗng, thể tích chìm $V$ tăng vọt, khối lượng riêng trung bình của thuyền rỗng ($D_{\\text{tb}} = m_{\\text{thuyền}} / V_{\\text{toàn phần}}$) nhỏ hơn khối lượng riêng của nước nên thuyền nổi.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tàu ngầm có thể lặn xuống sâu hoặc nổi lên mặt nước bằng cách nào?',
      options: [
        'Tăng giảm công suất chân vịt đẩy',
        'Bơm nước vào các khoang chứa đáy tàu để tăng trọng lượng (khi muốn lặn) hoặc dùng khí nén thổi nước ra để giảm trọng lượng (khi muốn nổi)',
        'Kéo dài hoặc thu ngắn thân tàu ngầm',
        'Thả các mỏ neo nặng xuống đáy',
      ],
      correct_index: 1,
      explanation: 'Tàu ngầm thay đổi trọng lượng $P$ của tàu bằng cách điều tiết lượng nước dằn trong các khoang đáy, so sánh với lực đẩy Archimedes $F_A$ không đổi của vỏ tàu.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Cắm một ống hút nhựa ngập một phần vào cốc nước, lấy ngón tay bịt kín đầu trên của ống hút rồi nhấc ống hút lên khỏi mặt nước. Hiện tượng gì xảy ra?',
      options: [
        'Nước trong ống hút lập tức chảy hết xuống',
        'Cột nước trong ống hút không bị chảy ra ngoài do áp suất khí quyển từ dưới đẩy lên thắng trọng lượng cột nước',
        'Ống hút bị bẹp dúm lại',
        'Nước biến thành bọt khí',
      ],
      correct_index: 1,
      explanation: 'Khi bịt kín đầu trên, áp suất khí quyển $p_0$ từ bên dưới tác dụng vào đầu hở đẩy cột nước lên, giữ cột nước đứng yên trong ống hút.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Thả một quả cầu bằng sắt và một quả cầu bằng nhôm CÙNG THỂ TÍCH vào một bể nước sâu. Cả hai quả cầu đều chìm xuống đáy bể. So sánh lực đẩy Archimedes tác dụng lên hai quả cầu:',
      options: [
        '$F_{A,\\text{sắt}} > F_{A,\\text{nhôm}}$ vì sắt nặng hơn nhôm',
        '$F_{A,\\text{sắt}} = F_{A,\\text{nhôm}}$ vì cùng nhúng chìm trong nước và có thể tích bị chiếm chỗ như nhau',
        '$F_{A,\\text{nhôm}} > F_{A,\\text{sắt}}$ vì nhôm nhẹ hơn nên nổi dễ hơn',
        'Không thể so sánh được',
      ],
      correct_index: 1,
      explanation: 'Vì cả hai quả cầu đều chìm hoàn toàn và có cùng thể tích $V$, lực đẩy Archimedes $F_A = d_{\\text{nước}} \\cdot V$ là hoàn toàn như nhau, không phụ thuộc vào khối lượng của vật.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một ấm trà có vòi ấm được thiết kế thấp hơn miệng ấm. Khi rót nước vào ấm trà, mực nước tối đa có thể chứa trong ấm sẽ như thế nào?',
      options: [
        'Chứa đầy đến tận nắp ấm trà',
        'Chỉ chứa được đến ngang độ cao của miệng vòi ấm, nếu đổ thêm nước sẽ tự tràn ra khỏi vòi',
        'Chứa được một nửa ấm',
        'Tùy thuộc vào độ nghiêng của quai ấm',
      ],
      correct_index: 1,
      explanation: 'Thân ấm trà và vòi ấm là hai nhánh của một bình thông nhau; mặt thoáng chất lỏng ở hai nhánh luôn ở cùng độ cao, do đó nước chỉ dâng đến ngang miệng vòi.',
    },

    // 5 van_dung
    {
      difficulty: 'van_dung',
      question_text: 'Một thợ lặn đang ở độ sâu $30\\,\\text{m}$ dưới đáy biển. Biết trọng lượng riêng của nước biển là $d = 10\\,300\\,\\text{N/m}^3$. Áp suất do nước biển tác dụng lên người thợ lặn ở độ sâu đó là:',
      options: ['$309\\,000\\,\\text{Pa}$', '$30\\,900\\,\\text{Pa}$', '$103\\,000\\,\\text{Pa}$', '$618\\,000\\,\\text{Pa}$'],
      correct_index: 0,
      explanation: 'Áp suất nước biển: $p = d \\cdot h = 10300 \\times 30 = 309\\,000\\,\\text{Pa} = 309\\,\\text{kPa}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một máy nén thủy lực có diện tích piston nhỏ là $S_1 = 5\\,\\text{cm}^2$ và diện tích piston lớn là $S_2 = 250\\,\\text{cm}^2$. Người ta tác dụng một lực $F_1 = 200\\,\\text{N}$ lên piston nhỏ. Lực nâng $F_2$ tác dụng lên piston lớn có độ lớn bằng bao nhiêu?',
      options: ['$10\\,000\\,\\text{N}$', '$5\\,000\\,\\text{N}$', '$20\\,000\\,\\text{N}$', '$2\\,000\\,\\text{N}$'],
      correct_index: 0,
      explanation: 'Theo nguyên lý máy nén thủy lực: $F_2 / F_1 = S_2 / S_1 \\Rightarrow F_2 = F_1 \\times (S_2 / S_1) = 200 \\times (250 / 5) = 200 \\times 50 = 10\\,000\\,\\text{N}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một khối sắt đặc có thể tích $0,004\\,\\text{m}^3$ được nhúng chìm hoàn toàn trong dầu hỏa có trọng lượng riêng $d = 8000\\,\\text{N/m}^3$. Lực đẩy Archimedes tác dụng lên khối sắt là:',
      options: ['$32\\,\\text{N}$', '$320\\,\\text{N}$', '$312\\,\\text{N}$', '$160\\,\\text{N}$'],
      correct_index: 0,
      explanation: 'Lực đẩy Archimedes: $F_A = d_{\\text{dầu}} \\cdot V = 8000 \\times 0,004 = 32\\,\\text{N}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Thả một khối gỗ có thể tích $V = 1000\\,\\text{cm}^3$ vào trong nước. Biết khối lượng riêng của gỗ là $700\\,\\text{kg/m}^3$ và của nước là $1000\\,\\text{kg/m}^3$. Thể tích phần khối gỗ chìm trong nước khi đã cân bằng là:',
      options: ['$700\\,\\text{cm}^3$', '$300\\,\\text{cm}^3$', '$500\\,\\text{cm}^3$', '$800\\,\\text{cm}^3$'],
      correct_index: 0,
      explanation: 'Khi vật nổi cân bằng: $P = F_A \\Leftrightarrow 10 \\cdot D_{\\text{gỗ}} \\cdot V = 10 \\cdot D_{\\text{nước}} \\cdot V_{\\text{chìm}} \\Rightarrow V_{\\text{chìm}} = V \\times (D_{\\text{gỗ}} / D_{\\text{nước}}) = 1000 \\times (700 / 1000) = 700\\,\\text{cm}^3$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Treo một vật kim loại vào lực kế ở ngoài không khí, lực kế chỉ $4,5\\,\\text{N}$. Khi nhúng chìm hoàn toàn vật đó vào trong nước thì lực kế chỉ $3,5\\,\\text{N}$. Biết trọng lượng riêng của nước là $10\\,000\\,\\text{N/m}^3$. Thể tích của vật kim loại đó là:',
      options: ['$100\\,\\text{cm}^3$', '$10\\,\\text{cm}^3$', '$450\\,\\text{cm}^3$', '$350\\,\\text{cm}^3$'],
      correct_index: 0,
      explanation: 'Độ lớn lực đẩy Archimedes: $F_A = P - P\' = 4,5 - 3,5 = 1,0\\,\\text{N}$. Thể tích của vật: $V = F_A / d_{\\text{nước}} = 1,0 / 10000 = 0,0001\\,\\text{m}^3 = 100\\,\\text{cm}^3$.',
    },

    // 3 van_dung_cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một bình thông nhau hình chữ U tiết diện đều chứa thủy ngân ($d_1 = 136\\,000\\,\\text{N/m}^3$). Người ta đổ thêm một cột nước ($d_2 = 10\\,000\\,\\text{N/m}^3$) cao $h_2 = 27,2\\,\\text{cm}$ vào nhánh trái. Độ chênh lệch mực thủy ngân giữa hai nhánh là:',
      options: ['$2,0\\,\\text{cm}$', '$1,5\\,\\text{cm}$', '$2,5\\,\\text{cm}$', '$3,0\\,\\text{cm}$'],
      correct_index: 0,
      explanation: 'Xét mặt phẳng ngang đi qua mặt phân cách giữa nước và thủy ngân ở nhánh trái: $p_{\\text{trái}} = p_{\\text{phải}} \\Leftrightarrow d_2 \\cdot h_2 = d_1 \\cdot h_1 \\Rightarrow h_1 = (d_2 \\cdot h_2) / d_1 = (10000 \\times 27,2) / 136000 = 2,0\\,\\text{cm}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một chiếc sà lan hình hộp chữ nhật có chiều dài $20\\,\\text{m}$, rộng $5\\,\\text{m}$ đang chở hàng nổi trên sông ($d = 10\\,000\\,\\text{N/m}^3$). Khi dỡ hết hàng xuống bến cảng, sà lan nổi cao thêm một đoạn $\\Delta h = 0,4\\,\\text{m}$. Khối lượng của lô hàng vừa được dỡ xuống là:',
      options: ['$40\\,\\text{tấn}$', '$20\\,\\text{tấn}$', '$80\\,\\text{tấn}$', '$400\\,\\text{kg}$'],
      correct_index: 0,
      explanation: 'Độ giảm thể tích chìm: $\\Delta V = S \\cdot \\Delta h = (20 \\times 5) \\times 0,4 = 40\\,\\text{m}^3$. Trọng lượng lô hàng bằng độ giảm lực đẩy Archimedes: $P_{\\text{hàng}} = d \\cdot \\Delta V = 10000 \\times 40 = 400\\,000\\,\\text{N}$. Khối lượng hàng: $m = P / 10 = 40\\,000\\,\\text{kg} = 40\\,\\text{tấn}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một vật đồng chất có dạng hình lập phương thả vào bình chứa hai chất lỏng không hòa tan: dầu ($D_1 = 800\\,\\text{kg/m}^3$) nổi ở phía trên và nước ($D_2 = 1000\\,\\text{kg/m}^3$) ở phía dưới. Vật lơ lửng nằm giữa ranh giới hai chất lỏng sao cho một nửa thể tích chìm trong nước và một nửa chìm trong dầu. Khối lượng riêng của vật đó là:',
      options: ['$900\\,\\text{kg/m}^3$', '$850\\,\\text{kg/m}^3$', '$920\\,\\text{kg/m}^3$', '$880\\,\\text{kg/m}^3$'],
      correct_index: 0,
      explanation: 'Khi vật cân bằng: $P = F_{A1} + F_{A2} \\Leftrightarrow 10 \\cdot D \\cdot V = 10 \\cdot D_1 \\cdot (V/2) + 10 \\cdot D_2 \\cdot (V/2) \\Rightarrow D = (D_1 + D_2) / 2 = (800 + 1000) / 2 = 900\\,\\text{kg/m}^3$.',
    },
  ],

  // =========================================================================
  // G8-CH2-TP1: Tác dụng làm quay của lực và Moment lực (25 questions: 10 nb, 7 th, 5 vd, 3 vdc)
  // =========================================================================
  'G8-CH2-TP1': [
    // 10 nhan_biet
    {
      difficulty: 'nhan_biet',
      question_text: 'Lực tác dụng vào một vật có trục quay cố định KHÔNG LÀM VẬT QUAY khi nào?',
      options: [
        'Giá của lực cắt trục quay hoặc song song với trục quay',
        'Giá của lực vuông góc với trục quay',
        'Lực có độ lớn rất lớn',
        'Điểm đặt của lực ở rất xa trục quay',
      ],
      correct_index: 0,
      explanation: 'Khi giá của lực cắt trục quay hoặc song song với trục quay thì cánh tay đòn $d = 0$, moment lực $M = 0$ nên lực không có tác dụng làm quay.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Cánh tay đòn ($d$) của một lực tác dụng quanh một trục quay cố định là:',
      options: [
        'Khoảng cách từ điểm đặt của lực đến trục quay',
        'Khoảng cách vuông góc từ trục quay đến giá của lực',
        'Chiều dài của vật quay',
        'Độ dài đoạn thẳng nối trục quay với trọng tâm của vật',
      ],
      correct_index: 1,
      explanation: 'Theo định nghĩa, cánh tay đòn $d$ là khoảng cách vuông góc hạ từ trục quay đến đường thẳng chứa vector lực (giá của lực).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đại lượng đặc trưng cho tác dụng làm quay của một lực quanh một trục cố định là:',
      options: ['Công cơ học', 'Moment lực', 'Áp suất', 'Động lượng'],
      correct_index: 1,
      explanation: 'Moment lực là đại lượng vật lý đặc trưng cho tác dụng làm quay của lực quanh trục cố định.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức tính Moment lực ($M$) đối với một trục quay là:',
      options: ['$M = F / d$', '$M = F \\cdot d$', '$M = F \\cdot d^2$', '$M = d / F$'],
      correct_index: 1,
      explanation: 'Moment lực bằng tích của độ lớn lực và cánh tay đòn: $M = F \\cdot d$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị đo của Moment lực trong hệ SI là gì?',
      options: ['Niutơn trên mét ($\\text{N/m}$)', 'Niutơn nhân mét ($\\text{N}\\cdot\\text{m}$)', 'Joule (J)', 'Oát (W)'],
      correct_index: 1,
      explanation: 'Trong hệ SI, lực $F$ đo bằng $\\text{N}$, cánh tay đòn $d$ đo bằng $\\text{m}$, do đó đơn vị của moment lực là $\\text{N}\\cdot\\text{m}$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi độ lớn của lực tác dụng tăng gấp đôi và cánh tay đòn giữ nguyên thì moment lực sẽ:',
      options: ['Không đổi', 'Tăng gấp đôi', 'Giảm đi một nửa', 'Tăng gấp 4 lần'],
      correct_index: 1,
      explanation: 'Vì $M = F \\cdot d$, moment lực tỉ lệ thuận với độ lớn của lực tác dụng $F$. Khi $F$ tăng gấp đôi thì $M$ tăng gấp đôi.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Tay nắm mở cửa phòng thường được bố trí ở vị trí nào trên cánh cửa?',
      options: [
        'Sát mép ngoài cánh cửa (xa bản lề nhất)',
        'Sát bản lề cửa',
        'Ở chính giữa cánh cửa',
        'Bố trí ở đâu cũng tác dụng lực như nhau',
      ],
      correct_index: 0,
      explanation: 'Bố trí ở mép ngoài cùng (xa trục quay bản lề nhất) để cánh tay đòn $d$ lớn nhất, giúp mở cửa dễ dàng với lực nhỏ nhất.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Nếu giá của lực đi qua đúng trục quay của vật thì cánh tay đòn $d$ bằng bao nhiêu?',
      options: ['$d = 0$', '$d = 1\\,\\text{m}$', '$d = \\infty$', '$d$ bằng bán kính vật quay'],
      correct_index: 0,
      explanation: 'Khi giá của lực cắt trục quay, khoảng cách vuông góc từ trục quay đến giá của lực bằng $0$ ($d = 0$).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Để vặn một chiếc bu-lông quá chặt, người thợ cơ khí nên chọn chiếc cờ lê có đặc điểm gì?',
      options: [
        'Cán thật ngắn',
        'Cán dài để tăng cánh tay đòn $d$',
        'Cờ lê làm bằng nhôm siêu nhẹ',
        'Cờ lê có ngàm thật lỏng',
      ],
      correct_index: 1,
      explanation: 'Cán dài làm tăng cánh tay đòn $d$, giúp tăng moment lực $M = F \\cdot d$ làm quay bu-lông mà không tốn nhiều sức.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Vật có trục quay cố định sẽ cân bằng không quay khi nào?',
      options: [
        'Tổng các moment lực làm vật quay theo chiều kim đồng hồ bằng tổng các moment lực làm vật quay ngược chiều kim đồng hồ',
        'Khi không có bất kỳ lực nào tác dụng vào vật',
        'Khi tất cả các lực đều hướng lên trên',
        'Khi vật có khối lượng rất lớn',
      ],
      correct_index: 0,
      explanation: 'Quy tắc moment: Vật có trục quay cố định cân bằng khi tổng moment lực làm quay theo chiều kim đồng hồ bằng tổng moment lực làm quay ngược chiều kim đồng hồ.',
    },

    // 7 thong_hieu
    {
      difficulty: 'thong_hieu',
      question_text: 'Một học sinh dùng tay đẩy cửa: lần 1 đẩy vuông góc với cánh cửa ở mép ngoài (cách bản lề $0,8\\,\\text{m}$); lần 2 đẩy vuông góc ở vị trí cách bản lề $0,2\\,\\text{m}$. Để cửa quay như nhau, lực đẩy lần 2 so với lần 1 phải:',
      options: [
        'Lớn gấp 4 lần lực lần 1',
        'Nhỏ bằng 1/4 lực lần 1',
        'Bằng đúng lực lần 1',
        'Lớn gấp 16 lần lực lần 1',
      ],
      correct_index: 0,
      explanation: 'Để tạo cùng moment quay $M$: $F_1 \\cdot d_1 = F_2 \\cdot d_2 \\Rightarrow F_2 = F_1 \\cdot (d_1 / d_2) = F_1 \\cdot (0,8 / 0,2) = 4F_1$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tác dụng một lực $F$ vào đầu cờ lê để vặn ốc. Trường hợp nào sau đây tạo ra moment lực LỚN NHẤT?',
      options: [
        'Lực $F$ tác dụng vuông góc với thân cờ lê tại đầu mút cán',
        'Lực $F$ hợp với thân cờ lê một góc $30^\\circ$',
        'Lực $F$ có phương dọc theo thân cờ lê kéo ra ngoài',
        'Lực $F$ hợp với thân cờ lê một góc $45^\\circ$',
      ],
      correct_index: 0,
      explanation: 'Khi lực vuông góc với thân cờ lê, cánh tay đòn $d$ bằng đúng toàn bộ chiều dài cán cờ lê ($d = L$). Với các góc khác, cánh tay đòn $d = L \\cdot \\sin\\alpha < L$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao vô lăng lái của các xe tải hạng nặng thường có đường kính lớn hơn vô lăng của xe ô tô con du lịch?',
      options: [
        'Để cho người lái xe nhìn rõ hơn',
        'Đường kính lớn giúp tăng cánh tay đòn $d$, tạo ra moment lực quay lớn hơn giúp bẻ lái các bánh xe tải nặng nề dễ dàng',
        'Để tiết kiệm không gian cabin',
        'Do quy chuẩn thẩm mỹ xe tải',
      ],
      correct_index: 1,
      explanation: 'Bán kính vô lăng $R$ lớn tạo cánh tay đòn $d$ lớn, giúp tài xế chỉ cần tác dụng lực tay vừa phải đã tạo ra moment $M = F \\cdot d$ đủ lớn để chuyển hướng hệ thống bánh xe nặng.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi một người dùng xà beng để bẩy một hòn đá, nếu điểm tựa được kê quá xa hòn đá (gần tay cầm của người) thì người đó sẽ thấy thế nào?',
      options: [
        'Bẩy hòn đá rất nhẹ nhàng',
        'Rất nặng và tốn nhiều lực, khó bẩy nổi hòn đá',
        'Không có sự khác biệt',
        'Hòn đá tự lăn đi',
      ],
      correct_index: 1,
      explanation: 'Kê điểm tựa gần tay cầm làm cánh tay đòn lực $d_1$ nhỏ lại và cánh tay đòn tải $d_2$ tăng lên, theo quy tắc moment người đó bị thiệt về lực, phải dùng lực rất lớn.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một lực $F = 50\\,\\text{N}$ tác dụng vào một thanh quay quanh trục $O$. Nếu giá của lực đi thẳng qua trục quay $O$ thì moment của lực đó bằng bao nhiêu?',
      options: ['$50\\,\\text{N}\\cdot\\text{m}$', '$0\\,\\text{N}\\cdot\\text{m}$', '$25\\,\\text{N}\\cdot\\text{m}$', '$500\\,\\text{N}\\cdot\\text{m}$'],
      correct_index: 1,
      explanation: 'Khi giá của lực đi qua trục quay $O$, khoảng cách vuông góc từ trục quay đến giá của lực là $d = 0$, do đó $M = F \\cdot 0 = 0$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Kim nam châm đặt tự do trong từ trường Trái Đất có thể quay quanh trục thẳng đứng. Lực từ của Trái Đất tác dụng lên hai cực của kim nam châm tạo thành:',
      options: [
        'Một ngẫu lực làm kim quay về hướng Bắc - Nam địa lý',
        'Một lực ép làm kim chìm xuống đất',
        'Một lực đẩy kim bay lên',
        'Không có moment lực',
      ],
      correct_index: 0,
      explanation: 'Hai cực của kim nam châm chịu hai lực từ song song, ngược chiều, cùng độ lớn đặt vào hai cực tạo thành một ngẫu lực sinh moment quay kim định hướng Bắc - Nam.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một cánh quạt trần đang quay đều quanh trục. Khi ngắt điện, lực ma sát ở ổ trục tạo ra moment lực có tác dụng gì?',
      options: [
        'Làm tăng tốc độ quay của cánh quạt',
        'Làm cản trở chuyển động quay, khiến cánh quạt quay chậm dần rồi dừng lại',
        'Giữ cho cánh quạt quay mãi mãi',
        'Làm đổi chiều quay ngay tức thì',
      ],
      correct_index: 1,
      explanation: 'Moment của lực ma sát ngược chiều chuyển động quay nên có tác dụng làm giảm tốc độ quay (moment hãm), đưa cánh quạt về trạng thái dừng.',
    },

    // 5 van_dung
    {
      difficulty: 'van_dung',
      question_text: 'Một người dùng cờ lê dài $30\\,\\text{cm}$ để vặn một đai ốc. Người đó tác dụng một lực $F = 60\\,\\text{N}$ vuông góc với cán cờ lê tại đầu mút. Moment lực tác dụng lên đai ốc là:',
      options: ['$18\\,\\text{N}\\cdot\\text{m}$', '$1800\\,\\text{N}\\cdot\\text{m}$', '$2\\,\\text{N}\\cdot\\text{m}$', '$9\\,\\text{N}\\cdot\\text{m}$'],
      correct_index: 0,
      explanation: 'Đổi $d = 30\\,\\text{cm} = 0,3\\,\\text{m}$. Moment lực: $M = F \\cdot d = 60 \\times 0,3 = 18\\,\\text{N}\\cdot\\text{m}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Để tháo một bu-lông bánh xe ô tô cần một moment xoay tối thiểu là $120\\,\\text{N}\\cdot\\text{m}$. Nếu dùng chiếc cờ lê dài $40\\,\\text{cm}$ thì người thợ phải tác dụng một lực vuông góc tối thiểu bằng bao nhiêu ở đầu cán cờ lê?',
      options: ['$300\\,\\text{N}$', '$480\\,\\text{N}$', '$30\\,\\text{N}$', '$150\\,\\text{N}$'],
      correct_index: 0,
      explanation: 'Đổi $d = 40\\,\\text{cm} = 0,4\\,\\text{m}$. Ta có $M = F \\cdot d \\Rightarrow F = M / d = 120 / 0,4 = 300\\,\\text{N}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một thanh nhẹ $AB$ dài $1\\,\\text{m}$ có thể quay quanh trục cố định ở đầu $A$. Tác dụng tại đầu $B$ một lực thẳng đứng hướng lên $F_1 = 40\\,\\text{N}$. Hỏi phải tác dụng tại điểm $C$ (cách $A$ một đoạn $40\\,\\text{cm}$) một lực $F_2$ thẳng đứng hướng xuống bằng bao nhiêu để thanh cân bằng nằm ngang?',
      options: ['$100\\,\\text{N}$', '$50\\,\\text{N}$', '$80\\,\\text{N}$', '$160\\,\\text{N}$'],
      correct_index: 0,
      explanation: 'Áp dụng quy tắc moment quanh trục $A$: $M_1 = M_2 \\Leftrightarrow F_1 \\cdot AB = F_2 \\cdot AC \\Rightarrow F_2 = F_1 \\cdot (AB / AC) = 40 \\times (100 / 40) = 100\\,\\text{N}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một cánh cửa rộng $0,9\\,\\text{m}$ có bản lề gắn ở cạnh cửa. Người thứ nhất đẩy vuông góc ở mép ngoài với lực $F_1 = 20\\,\\text{N}$. Người thứ hai ở phía đối diện đẩy vuông góc ở vị trí cách bản lề $0,6\\,\\text{m}$ để giữ cửa không mở. Lực đẩy $F_2$ của người thứ hai phải bằng bao nhiêu?',
      options: ['$30\\,\\text{N}$', '$25\\,\\text{N}$', '$18\\,\\text{N}$', '$36\\,\\text{N}$'],
      correct_index: 0,
      explanation: 'Điều kiện cân bằng moment: $F_1 \\cdot d_1 = F_2 \\cdot d_2 \\Rightarrow F_2 = F_1 \\cdot (d_1 / d_2) = 20 \\times (0,9 / 0,6) = 30\\,\\text{N}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một người tác dụng lực $F = 80\\,\\text{N}$ vào đầu cán cờ lê dài $25\\,\\text{cm}$ nhưng phương của lực hợp với thân cờ lê một góc $\\alpha = 30^\\circ$. Moment lực tác dụng làm xoay bu-lông là:',
      options: ['$10\\,\\text{N}\\cdot\\text{m}$', '$20\\,\\text{N}\\cdot\\text{m}$', '$17,32\\,\\text{N}\\cdot\\text{m}$', '$15\\,\\text{N}\\cdot\\text{m}$'],
      correct_index: 0,
      explanation: 'Cánh tay đòn vuông góc: $d = L \\cdot \\sin 30^\\circ = 0,25 \\times 0,5 = 0,125\\,\\text{m}$. Moment lực: $M = F \\cdot d = 80 \\times 0,125 = 10\\,\\text{N}\\cdot\\text{m}$.',
    },

    // 3 van_dung_cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một thanh sắt đồng chất tiết diện đều dài $2\\,\\text{m}$, khối lượng $12\\,\\text{kg}$ có thể quay quanh một bản lề ở đầu $A$. Để giữ thanh nằm ngang, người ta móc một lực kế vào đầu $B$ và kéo theo phương thẳng đứng lên trên. Lấy $g = 10\\,\\text{m/s}^2$. Số chỉ của lực kế là:',
      options: ['$60\\,\\text{N}$', '$120\\,\\text{N}$', '$30\\,\\text{N}$', '$90\\,\\text{N}$'],
      correct_index: 0,
      explanation: 'Trọng lượng thanh: $P = 10 \\cdot m = 120\\,\\text{N}$ đặt tại trọng tâm $G$ là trung điểm của thanh ($AG = 1\\,\\text{m}$). Áp dụng quy tắc moment quanh trục $A$: $P \\cdot AG = F \\cdot AB \\Rightarrow F = P \\cdot (AG / AB) = 120 \\times (1 / 2) = 60\\,\\text{N}$. Lực kế chỉ $60\\,\\text{N}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một đĩa tròn đồng chất bán kính $R = 20\\,\\text{cm}$ có trục quay cố định đi qua tâm $O$. Người ta tác dụng 3 lực nằm trong mặt phẳng của đĩa: $F_1 = 10\\,\\text{N}$ tiếp tuyến mép đĩa quay theo chiều kim đồng hồ; $F_2 = 15\\,\\text{N}$ tiếp tuyến mép đĩa quay ngược chiều kim đồng hồ; $F_3 = 20\\,\\text{N}$ có giá đi qua tâm $O$. Tổng moment lực tác dụng lên đĩa có độ lớn và chiều quay là:',
      options: [
        '$1,0\\,\\text{N}\\cdot\\text{m}$, quay ngược chiều kim đồng hồ',
        '$1,0\\,\\text{N}\\cdot\\text{m}$, quay theo chiều kim đồng hồ',
        '$5,0\\,\\text{N}\\cdot\\text{m}$, quay ngược chiều kim đồng hồ',
        '$0\\,\\text{N}\\cdot\\text{m}$, đĩa đứng yên',
      ],
      correct_index: 0,
      explanation: '$F_3$ đi qua tâm $O$ nên $M_3 = 0$. Cánh tay đòn của $F_1$ và $F_2$ đều bằng bán kính $R = 0,2\\,\\text{m}$. Moment ngược chiều kim đồng hồ: $M_{\\text{ngược}} = F_2 \\cdot R = 15 \\times 0,2 = 3,0\\,\\text{N}\\cdot\\text{m}$. Moment cùng chiều: $M_{\\text{thuận}} = F_1 \\cdot R = 10 \\times 0,2 = 2,0\\,\\text{N}\\cdot\\text{m}$. Tổng moment: $M = 3,0 - 2,0 = 1,0\\,\\text{N}\\cdot\\text{m}$ quay ngược chiều kim đồng hồ.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một chiếc thang đồng chất dài $L = 4\\,\\text{m}$, khối lượng $20\\,\\text{kg}$ tựa vào tường nhẵn thẳng đứng (không ma sát), chân thang đặt trên sàn nhà nhám cách chân tường $2\\,\\text{m}$. Lấy $g = 10\\,\\text{m/s}^2$. Lực phản lực của tường tác dụng lên đầu trên của thang là:',
      options: ['$57,7\\,\\text{N}$', '$100\\,\\text{N}$', '$115,5\\,\\text{N}$', '$86,6\\,\\text{N}$'],
      correct_index: 0,
      explanation: 'Chiều cao tựa của thang trên tường: $h = \\sqrt{L^2 - d^2} = \\sqrt{16 - 4} = \\sqrt{12} \\approx 3,464\\,\\text{m}$. Trọng lượng thang $P = 200\\,\\text{N}$ đặt tại trung điểm thang, cách chân thang theo phương ngang là $x_G = 2 / 2 = 1\\,\\text{m}$. Viết phương trình moment quanh điểm tiếp xúc chân thang ở sàn: $N_{\\text{tường}} \\cdot h = P \\cdot x_G \\Rightarrow N_{\\text{tường}} = (200 \\times 1) / \\sqrt{12} \\approx 57,7\\,\\text{N}$.',
    },
  ],

  // =========================================================================
  // G8-CH2-TP2: Đòn bẩy và Phân loại đòn bẩy trong đời sống (25 questions: 10 nb, 7 th, 5 vd, 3 vdc)
  // =========================================================================
  'G8-CH2-TP2': [
    // 10 nhan_biet
    {
      difficulty: 'nhan_biet',
      question_text: 'Đòn bẩy là một công cụ cơ học gồm một thanh cứng có thể quay quanh một điểm cố định gọi là:',
      options: ['Trọng tâm', 'Điểm tựa ($O$)', 'Điểm đặt lực', 'Trục đối xứng'],
      correct_index: 1,
      explanation: 'Theo định nghĩa, điểm cố định mà đòn bẩy có thể quay quanh gọi là điểm tựa, ký hiệu là $O$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Điều kiện cân bằng của đòn bẩy khi có hai lực $F_1$ và $F_2$ tác dụng với cánh tay đòn tương ứng là $d_1$ và $d_2$ là:',
      options: [
        '$F_1 \\cdot d_1 = F_2 \\cdot d_2$',
        '$F_1 / d_1 = F_2 / d_2$',
        '$F_1 + d_1 = F_2 + d_2$',
        '$F_1 \\cdot d_2 = F_2 \\cdot d_1$',
      ],
      correct_index: 0,
      explanation: 'Điều kiện cân bằng đòn bẩy: $F_1 \\cdot d_1 = F_2 \\cdot d_2$ hay $F_1 / F_2 = d_2 / d_1$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đòn bẩy loại 1 có đặc điểm cấu tạo nào sau đây?',
      options: [
        'Điểm tựa $O$ nằm ở giữa điểm đặt lực tác dụng $F_1$ và lực cản $F_2$',
        'Vật cản (tải trọng) nằm ở giữa điểm tựa và lực tác dụng',
        'Lực tác dụng nằm ở giữa điểm tựa và vật cản',
        'Không có điểm tựa cố định',
      ],
      correct_index: 0,
      explanation: 'Đòn bẩy loại 1 có điểm tựa $O$ nằm ở khoảng giữa hai điểm đặt lực $F_1$ và $F_2$ (như kéo cắt giấy, bập bênh, kìm).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Dụng cụ nào sau đây là ví dụ điển hình của Đòn bẩy loại 1?',
      options: ['Chiếc kéo cắt vải', 'Xe cút kít (xe rùa)', 'Chiếc nhíp gắp', 'Cần câu cá'],
      correct_index: 0,
      explanation: 'Kéo có chốt xoay ở giữa là điểm tựa $O$, tay cầm ở một đầu và lưỡi kéo ở đầu kia, thuộc đòn bẩy loại 1.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đòn bẩy loại 2 có đặc điểm cấu tạo nào sau đây?',
      options: [
        'Vật tải (lực cản) nằm ở giữa điểm tựa $O$ và lực tác dụng $F_1$',
        'Điểm tựa nằm ở giữa',
        'Lực tác dụng nằm ở giữa',
        'Điểm tựa trùng với trọng tâm của tải',
      ],
      correct_index: 0,
      explanation: 'Đòn bẩy loại 2 có tải trọng nằm ở giữa điểm tựa và điểm tác dụng lực (như xe rùa chở cát, kẹp tách hạt dẻ, đồ mở nắp chai).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Dụng cụ nào sau đây là ứng dụng của Đòn bẩy loại 2?',
      options: ['Xe rùa chở vật liệu', 'Bập bênh', 'Đôi đũa ăn cơm', 'Cái xẻng xúc đất'],
      correct_index: 0,
      explanation: 'Xe rùa có trục bánh xe phía trước là điểm tựa $O$, thùng chứa cát ở giữa và tay cầm nâng ở phía sau, là đòn bẩy loại 2.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đòn bẩy loại 3 có đặc điểm cấu tạo nào sau đây?',
      options: [
        'Lực tác dụng $F_1$ nằm ở giữa điểm tựa $O$ và vật tải $F_2$',
        'Điểm tựa nằm ở giữa',
        'Vật cản nằm ở giữa',
        'Cánh tay đòn của lực luôn lớn hơn cánh tay đòn của tải',
      ],
      correct_index: 0,
      explanation: 'Đòn bẩy loại 3 có lực tác dụng của người nằm ở giữa điểm tựa và tải trọng (như chiếc nhíp, cần câu cá, chổi quét nhà).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Dụng cụ nào sau đây là ví dụ của Đòn bẩy loại 3?',
      options: ['Cái nhíp gắp lông mày', 'Cái bập bênh', 'Cái kìm bấm đinh', 'Kẹp ép tỏi'],
      correct_index: 0,
      explanation: 'Cái nhíp có điểm tựa cố định ở đuôi nhíp, ngón tay bóp ở giữa và đầu gắp kẹp vật ở đầu mút, là đòn bẩy loại 3.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Sử dụng đòn bẩy loại 3 mang lại lợi ích gì cho con người?',
      options: [
        'Cho lợi về lực (lực tác dụng nhỏ hơn trọng lượng vật)',
        'Thiệt về lực nhưng cho lợi về đường đi và tốc độ di chuyển',
        'Vừa lợi về lực vừa lợi về đường đi',
        'Không mang lại lợi ích nào',
      ],
      correct_index: 1,
      explanation: 'Đòn bẩy loại 3 luôn có $d_1 < d_2$ nên bị thiệt về lực ($F_1 > F_2$), nhưng bù lại đầu gắp di chuyển quãng đường dài và nhanh, rất linh hoạt.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Phát biểu nào sau đây thể hiện "Quy tắc vàng của cơ học" đối với các máy cơ đơn giản?',
      options: [
        'Được lợi bao nhiêu lần về lực thì thiệt bấy nhiêu lần về đường đi và không cho lợi về công',
        'Máy cơ đơn giản giúp ta được lợi cả về lực lẫn về công',
        'Máy cơ đơn giản luôn giúp tiết kiệm năng lượng',
        'Được lợi về công bao nhiêu lần thì lợi về lực bấy nhiêu lần',
      ],
      correct_index: 0,
      explanation: 'Định luật về công: Không một máy cơ đơn giản nào cho ta lợi về công. Được lợi bao nhiêu lần về lực thì thiệt hại bấy nhiêu lần về đường đi.',
    },

    // 7 thong_hieu
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao kéo cắt kim loại luôn có phần lưỡi cắt rất ngắn và phần tay cầm rất dài, trong khi kéo cắt giấy lại có lưỡi dài và tay cầm ngắn?',
      options: [
        'Kéo cắt kim loại cần cán dài để tăng cánh tay đòn $d_1$, cho lợi nhiều lần về lực để cắt sắt thép; còn cắt giấy cần đường cắt dài, nhanh',
        'Vì thợ cơ khí có bàn tay to hơn thợ may',
        'Vì kim loại cứng hơn giấy nên làm lưỡi dài sẽ bị gãy',
        'Do thói quen chế tạo truyền thống',
      ],
      correct_index: 0,
      explanation: 'Cắt kim loại cần lực cực lớn nên thiết kế $d_1 > d_2$ để $F_1 < F_2$ (lợi về lực); cắt giấy cần lực rất nhỏ nên thiết kế $d_2 > d_1$ để lợi về đường cắt.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi dùng đòn bẩy loại 1 để bẩy một khối đá nặng, muốn lực nâng của tay người $F_1$ nhỏ hơn nhiều lần so với trọng lượng khối đá $P$, ta cần điều chỉnh điểm tựa $O$ như thế nào?',
      options: [
        'Đặt điểm tựa $O$ càng gần hòn đá càng tốt (sao cho $d_1 \\gg d_2$)',
        'Đặt điểm tựa $O$ càng xa hòn đá càng tốt',
        'Đặt điểm tựa $O$ ở chính giữa đòn bẩy',
        'Đặt điểm tựa $O$ sát ngay tay cầm của người',
      ],
      correct_index: 0,
      explanation: 'Vì $F_1 / F_2 = d_2 / d_1$, muốn $F_1$ nhỏ thì $d_1$ phải lớn gấp nhiều lần $d_2$, tức là điểm tựa phải kê sát hòn đá.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Hệ vận động của cẳng tay người khi nâng một quả tạ là ứng dụng của loại đòn bẩy nào?',
      options: [
        'Đòn bẩy loại 1 với điểm tựa ở khớp khuỷu tay',
        'Đòn bẩy loại 2 với tạ nằm ở giữa',
        'Đòn bẩy loại 3: điểm tựa ở khớp khuỷu tay, cơ nhị đầu bám ở giữa, quả tạ nằm ở bàn tay',
        'Không phải là đòn bẩy',
      ],
      correct_index: 2,
      explanation: 'Khớp khuỷu tay là điểm tựa $O$, cơ nhị đầu (biceps) co kéo ở cẳng tay nằm giữa $O$ và bàn tay cầm tạ, do đó cẳng tay là đòn bẩy loại 3.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Dụng cụ kẹp tách hạt dẻ (hạt óc chó) gồm hai càng kim loại có khớp nối ở đầu. Đây là đòn bẩy loại mấy và có ưu điểm gì?',
      options: [
        'Đòn bẩy loại 1; đổi hướng tác dụng lực',
        'Đòn bẩy loại 2; hạt dẻ ở giữa chịu lực ép rất lớn mà tay người chỉ cần bóp nhẹ',
        'Đòn bẩy loại 3; cho lợi về đường đi',
        'Mặt phẳng nghiêng',
      ],
      correct_index: 1,
      explanation: 'Khớp nối là điểm tựa $O$, hạt dẻ nằm ở khoang giữa, tay bóp ở hai đầu càng. Đây là đòn bẩy loại 2, luôn cho $d_1 > d_2$ nên nhân lực ép lên nhiều lần.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Hai bạn A và B chơi bập bênh (đòn bẩy loại 1 có điểm tựa ở giữa). Bạn A nặng $40\\,\\text{kg}$, bạn B nặng $20\\,\\text{kg}$. Để bập bênh cân bằng thăng bằng thì bạn A phải ngồi ở vị trí nào?',
      options: [
        'Cách điểm tựa một khoảng bằng một nửa khoảng cách từ bạn B đến điểm tựa',
        'Cách điểm tựa khoảng cách gấp đôi khoảng cách của bạn B',
        'Cùng khoảng cách như bạn B',
        'Ngồi trùng lên điểm tựa',
      ],
      correct_index: 0,
      explanation: 'Theo điều kiện cân bằng: $P_A \\cdot d_A = P_B \\cdot d_B \\Leftrightarrow 40 \\cdot d_A = 20 \\cdot d_B \\Rightarrow d_A = d_B / 2$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Dùng một xà beng để nhổ một chiếc đinh cắm chặt trong thanh gỗ. Tác dụng nào giúp nhổ đinh dễ nhất?',
      options: [
        'Dùng xà beng có tay đòn ngắn',
        'Kê thêm một mẩu gỗ nhỏ sát mũ đinh làm điểm tựa cao hơn để tăng cánh tay đòn của lực bẩy',
        'Dùng tay kéo thẳng đứng chiếc đinh',
        'Đổ nước vào thanh gỗ',
      ],
      correct_index: 1,
      explanation: 'Kê thêm mẩu gỗ sát đinh làm điểm tựa $O$ vững chắc, giúp cánh tay đòn của tải $d_2$ cực nhỏ trong khi cánh tay đòn của tay người $d_1$ rất dài, nhân lực bẩy lên hàng chục lần.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Mái chèo của thuyền nan hoạt động như một đòn bẩy. Điểm tựa của đòn bẩy mái chèo nằm ở đâu?',
      options: [
        'Tại cọc chèo gắn trên mạn thuyền (hoặc tại chỗ lưỡi chèo tựa vào làn nước)',
        'Ở mũi thuyền',
        'Ở đáy thuyền',
        'Ở bánh lái thuyền',
      ],
      correct_index: 0,
      explanation: 'Cọc chèo trên mạn thuyền đóng vai trò là điểm tựa (hoặc lưỡi chèo tựa vào khối nước), tay người chèo tác dụng lực làm chuyển động thuyền.',
    },

    // 5 van_dung
    {
      difficulty: 'van_dung',
      question_text: 'Một đòn bẩy loại 1 có chiều dài tổng cộng $1,2\\,\\text{m}$. Điểm tựa $O$ đặt cách vật nâng một đoạn $20\\,\\text{cm}$. Muốn nâng một vật có trọng lượng $600\\,\\text{N}$ thì cần tác dụng một lực tối thiểu ở đầu kia bằng bao nhiêu?',
      options: ['$120\\,\\text{N}$', '$100\\,\\text{N}$', '$150\\,\\text{N}$', '$200\\,\\text{N}$'],
      correct_index: 0,
      explanation: 'Cánh tay đòn của tải: $d_2 = 20\\,\\text{cm} = 0,2\\,\\text{m}$. Cánh tay đòn của lực: $d_1 = 1,2 - 0,2 = 1,0\\,\\text{m}$. Áp dụng $F_1 \\cdot d_1 = F_2 \\cdot d_2 \\Rightarrow F_1 = (600 \\times 0,2) / 1,0 = 120\\,\\text{N}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một chiếc xe rùa chở cát có trọng lượng cát và xe là $800\\,\\text{N}$. Trọng tâm của thùng cát cách trục bánh xe (điểm tựa) $40\\,\\text{cm}$, tay cầm của người đẩy cách trục bánh xe $120\\,\\text{cm}$. Người công nhân cần tác dụng một lực nâng tối thiểu bằng bao nhiêu ở tay cầm?',
      options: ['$266,7\\,\\text{N}$', '$400\\,\\text{N}$', '$200\\,\\text{N}$', '$320\\,\\text{N}$'],
      correct_index: 0,
      explanation: 'Đây là đòn bẩy loại 2: $F_1 \\cdot d_1 = F_2 \\cdot d_2 \\Rightarrow F_1 = (800 \\times 40) / 120 = 266,67\\,\\text{N}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một người gánh hai thúng lúa bằng một đòn gánh dài $1,5\\,\\text{m}$. Thúng lúa thứ nhất nặng $30\\,\\text{kg}$, thúng lúa thứ hai nặng $20\\,\\text{kg}$. Để đòn gánh thăng bằng nằm ngang, vai người đó phải đặt cách thúng lúa thứ nhất một khoảng bằng bao nhiêu? (Bỏ qua khối lượng đòn gánh, lấy $g = 10\\,\\text{m/s}^2$).',
      options: ['$0,6\\,\\text{m}$', '$0,9\\,\\text{m}$', '$0,75\\,\\text{m}$', '$0,5\\,\\text{m}$'],
      correct_index: 0,
      explanation: 'Gọi $d_1$ là khoảng cách từ vai đến thúng 1 $\\Rightarrow d_2 = 1,5 - d_1$. Điều kiện thăng bằng: $P_1 \\cdot d_1 = P_2 \\cdot d_2 \\Leftrightarrow 300 \\cdot d_1 = 200 \\cdot (1,5 - d_1) \\Rightarrow 500 d_1 = 300 \\Rightarrow d_1 = 0,6\\,\\text{m}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Dùng một chiếc kìm cắt thép có chiều dài từ trục quay đến mũi lưỡi bấm là $2\\,\\text{cm}$, từ trục quay đến vị trí tay bóp là $16\\,\\text{cm}$. Nếu người thợ bóp tay một lực $150\\,\\text{N}$ thì lực cắt tác dụng lên sợi dây thép ở lưỡi kìm là bao nhiêu?',
      options: ['$1200\\,\\text{N}$', '$600\\,\\text{N}$', '$1500\\,\\text{N}$', '$1800\\,\\text{N}$'],
      correct_index: 0,
      explanation: 'Áp dụng đòn bẩy: $F_2 = F_1 \\cdot (d_1 / d_2) = 150 \\times (16 / 2) = 150 \\times 8 = 1200\\,\\text{N}$. Lực cắt được nhân lên 8 lần.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Dùng đòn bẩy để nâng một vật nặng $1000\\,\\text{N}$ lên cao $10\\,\\text{cm}$. Biết lực tác dụng vào đầu đòn bẩy là $200\\,\\text{N}$. Bỏ qua ma sát và khối lượng đòn bẩy, đầu đòn bẩy nơi tay tác dụng lực phải hạ xuống một đoạn bằng bao nhiêu?',
      options: ['$50\\,\\text{cm}$', '$20\\,\\text{cm}$', '$100\\,\\text{cm}$', '$40\\,\\text{cm}$'],
      correct_index: 0,
      explanation: 'Theo quy tắc vàng của cơ học, lợi 5 lần về lực ($1000 / 200 = 5$) thì thiệt 5 lần về đường đi: $s_1 = 5 \\times s_2 = 5 \\times 10\\,\\text{cm} = 50\\,\\text{cm}$.',
    },

    // 3 van_dung_cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một thanh đòn đồng chất tiết diện đều dài $L = 1,6\\,\\text{m}$ có khối lượng $M = 4\\,\\text{kg}$. Một đầu thanh treo một vật nặng có khối lượng $m = 10\\,\\text{kg}$. Lấy $g = 10\\,\\text{m/s}^2$. Để thanh cân bằng nằm ngang thì điểm tựa $O$ phải đặt cách đầu treo vật nặng một khoảng là:',
      options: ['$0,229\\,\\text{m}$ (khoảng $23\\,\\text{cm}$)', '$0,4\\,\\text{m}$', '$0,16\\,\\text{m}$', '$0,32\\,\\text{m}$'],
      correct_index: 0,
      explanation: 'Trọng lượng thanh $P_{\\text{thanh}} = 40\\,\\text{N}$ đặt tại trung điểm $G$ cách đầu treo vật một khoảng $0,8\\,\\text{m}$. Trọng lượng vật treo $P_{\\text{vật}} = 100\\,\\text{N}$. Gọi khoảng cách từ điểm tựa $O$ đến đầu treo vật là $x$ ($x < 0,8$). Khoảng cách từ $O$ đến $G$ là $0,8 - x$. Phương trình moment quanh $O$: $P_{\\text{vật}} \\cdot x = P_{\\text{thanh}} \\cdot (0,8 - x) \\Leftrightarrow 100x = 40(0,8 - x) = 32 - 40x \\Rightarrow 140x = 32 \\Rightarrow x = 32 / 140 \\approx 0,2286\\,\\text{m} \\approx 22,9\\,\\text{cm}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Cơ bắp tay trước của một vận động viên bám vào xương cẳng tay tại vị trí cách khớp khuỷu tay $d_1 = 4\\,\\text{cm}$. Vận động viên cầm một quả tạ nặng $15\\,\\text{kg}$ trên lòng bàn tay cách khớp khuỷu tay $d_2 = 32\\,\\text{cm}$. Cẳng tay có trọng lượng $20\\,\\text{N}$ có trọng tâm cách khớp khuỷu tay $14\\,\\text{cm}$. Lấy $g = 10\\,\\text{m/s}^2$. Lực co cơ bắp tay $F_{\\text{cơ}}$ cần thiết để giữ cẳng tay nằm ngang là:',
      options: ['$1270\\,\\text{N}$', '$1200\\,\\text{N}$', '$1500\\,\\text{N}$', '$980\\,\\text{N}$'],
      correct_index: 0,
      explanation: 'Trọng lượng quả tạ $P_{\\text{tạ}} = 150\\,\\text{N}$. Tổng moment cản quanh khớp khuỷu tay: $M_{\\text{cản}} = P_{\\text{tạ}} \\cdot d_2 + P_{\\text{tay}} \\cdot d_{\\text{tay}} = 150 \\times 0,32 + 20 \\times 0,14 = 48 + 2,8 = 50,8\\,\\text{N}\\cdot\\text{m}$. Lực co cơ bắp: $F_{\\text{cơ}} \\cdot d_1 = M_{\\text{cản}} \\Rightarrow F_{\\text{cơ}} = 50,8 / 0,04 = 1270\\,\\text{N}$ (tương đương nâng hơn 127 kg!).',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một hệ đòn bẩy liên hợp gồm hai đòn bẩy loại 1 nối tiếp nhau: đòn thứ nhất có tỉ số cánh tay đòn $d_{1a} / d_{2a} = 4$; đòn thứ hai có tỉ số cánh tay đòn $d_{1b} / d_{2b} = 5$. Hiệu suất cơ học của mỗi đòn bẩy là $90\\%$. Khi tác dụng một lực $F = 100\\,\\text{N}$ vào đầu vào của hệ, tải trọng tối đa có thể nâng được ở đầu ra là:',
      options: ['$1620\\,\\text{N}$', '$2000\\,\\text{N}$', '$1800\\,\\text{N}$', '$1458\\,\\text{N}$'],
      correct_index: 0,
      explanation: 'Tỉ số truyền lý thuyết của hệ liên hợp: $k = k_1 \\times k_2 = 4 \\times 5 = 20$. Do mỗi đòn có hiệu suất $\\eta = 0,9$, hiệu suất toàn hệ là $\\eta_{\\text{tổng}} = 0,9 \\times 0,9 = 0,81$. Lực nâng thực tế: $F_{\\text{ra}} = F \\times k \\times \\eta_{\\text{tổng}} = 100 \\times 20 \\times 0,81 = 1620\\,\\text{N}$.',
    },
  ],

  // =========================================================================
  // G8-CH2-TP3: Ứng dụng của Moment lực và Đòn bẩy trong kỹ thuật (25 questions: 10 nb, 7 th, 5 vd, 3 vdc)
  // =========================================================================
  'G8-CH2-TP3': [
    // 10 nhan_biet
    {
      difficulty: 'nhan_biet',
      question_text: 'Bộ phận đối trọng lắp ở đuôi cần cẩu tháp có vai trò chính là gì?',
      options: [
        'Tạo ra moment lực cân bằng chống lật khi cần cẩu nâng hàng nặng ở phía trước',
        'Làm cho cần cẩu nặng hơn để bám chặt vào đường ray',
        'Tăng chiều cao cho cần cẩu',
        'Để người công nhân trèo lên nghỉ ngơi',
      ],
      correct_index: 0,
      explanation: 'Khối đối trọng tạo ra moment giữ quanh trục tháp ngược chiều với moment lật của tải cẩu, đảm bảo an toàn chống lật.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi xe cẩu nâng hàng ở tầm với càng xa (khoảng cách từ trụ tháp đến móc cẩu càng lớn), tải trọng tối đa cho phép cẩu sẽ:',
      options: ['Càng phải giảm xuống', 'Càng được tăng lên', 'Không thay đổi', 'Gấp đôi'],
      correct_index: 0,
      explanation: 'Vì moment lật $M = P \\cdot d$, khi tầm với $d$ tăng lên thì tải trọng $P$ phải giảm tương ứng để không vượt quá moment giữ an toàn của đối trọng.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Dụng cụ đo lường nào sau đây hoạt động trực tiếp dựa trên nguyên lý cân bằng moment của đòn bẩy?',
      options: ['Cân đòn (cân quả)', 'Đồng hồ bấm giây', 'Nhiệt kế thủy ngân', 'Tốc kế'],
      correct_index: 0,
      explanation: 'Cân đòn hoạt động dựa trên sự cân bằng moment giữa vật cần cân và quả cân di trượt trên thang đòn: $m_{\\text{vật}} \\cdot d_1 = m_{\\text{quả}} \\cdot d_2$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Bàn đạp phanh (thắng) chân của xe ô tô liên kết với xi lanh chính thủy lực bằng cơ cấu nào?',
      options: ['Một đòn bẩy để nhân lực đạp của bàn chân lên nhiều lần', 'Một ròng rọc động', 'Một mặt phẳng nghiêng', 'Một bánh răng côn'],
      correct_index: 0,
      explanation: 'Bàn đạp phanh là một đòn bẩy có trục quay ở đầu, bàn chân đạp ở đầu kia và ti đẩy xi lanh nối ở giữa, giúp tăng lực ép dầu lên 4 - 5 lần.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong các máy nâng công nghiệp (như xe nâng hàng forklift), khối đối trọng bằng gang đặc luôn được bố trí ở đâu?',
      options: ['Ở phía sau đuôi xe', 'Ở ngay trên hai càng nâng', 'Ở bánh trước', 'Ở dưới gầm xe'],
      correct_index: 0,
      explanation: 'Đối trọng đặt ở đuôi xe để tạo moment giữ quanh trục bánh trước, cân bằng với tải trọng nâng trên càng xe phía trước.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Thiết bị an toàn tự động ngắt cẩu hàng khi bị quá tải trên cần cẩu hiện đại hoạt động dựa trên cảm biến gì?',
      options: ['Cảm biến moment tải trọng (Load Moment Indicator - LMI)', 'Cảm biến nhiệt độ', 'Cảm biến ánh sáng', 'Cảm biến nồng độ khí'],
      correct_index: 0,
      explanation: 'Hệ thống LMI liên tục tính toán tích số $P \\times d$ và tự động ngắt động cơ nâng nếu moment vượt ngưỡng nguy hiểm gây lật.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Cầu bập bênh ở công viên dành cho trẻ em là một ứng dụng kỹ thuật của:',
      options: ['Đòn bẩy loại 1 với trục quay ở giữa', 'Đòn bẩy loại 2', 'Đòn bẩy loại 3', 'Mặt phẳng nghiêng'],
      correct_index: 0,
      explanation: 'Bập bênh có trục quay cố định ở chính giữa, hai đầu cho hai người ngồi, là đòn bẩy loại 1.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Để nhổ một chiếc đinh tán bị kẹt sâu trong bản thép, người thợ cơ khí nên dùng loại kìm nào?',
      options: [
        'Kìm cộng lực có cán dài và nhiều khớp đòn bẩy liên hợp',
        'Kìm mũi nhọn cán ngắn',
        'Kìm tuốt dây điện',
        'Nhíp gắp linh kiện',
      ],
      correct_index: 0,
      explanation: 'Kìm cộng lực sử dụng cơ cấu đòn bẩy kép (liên hợp) giúp nhân lực tay của người lên gấp hàng chục lần để cắt đứt hoặc nhổ đinh thép.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Cơ cấu tay gạt của van khóa vòi nước máy trong nhà xưởng là ứng dụng của:',
      options: ['Tác dụng làm quay của lực (Moment lực)', 'Áp suất khí quyển', 'Sự nở vì nhiệt', 'Hiện tượng nhiễm điện'],
      correct_index: 0,
      explanation: 'Tay gạt van nước tạo cánh tay đòn giúp người vận hành tác dụng moment xoay đóng/mở lõi bi van bên trong ống nước.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi một vật rắn chịu tác dụng của nhiều lực song song cùng chiều, hợp lực của chúng có đặc điểm gì?',
      options: [
        'Có phương song song, cùng chiều và độ lớn bằng tổng các lực thành phần',
        'Có độ lớn bằng hiệu các lực thành phần',
        'Luôn có phương vuông góc với các lực thành phần',
        'Bằng 0',
      ],
      correct_index: 0,
      explanation: 'Quy tắc hợp hai lực song song cùng chiều: $\\vec{F} = \\vec{F}_1 + \\vec{F}_2$ với độ lớn $F = F_1 + F_2$ và điểm đặt chia trong theo tỉ số $F_1 d_1 = F_2 d_2$.',
    },

    // 7 thong_hieu
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao các xe tải chở đất cát tự đổ (xe ben) có piston thủy lực nâng thùng hàng đặt gần đuôi thùng lại nâng được nhẹ nhàng hơn khi đặt ở đầu thùng?',
      options: [
        'Vì đặt ở đuôi thùng làm tăng cánh tay đòn của lực đẩy thủy lực đối với trục quay lật của thùng ben',
        'Vì piston ở đuôi thùng không bị bẩn',
        'Vì dầu thủy lực ở đuôi thùng chảy nhanh hơn',
        'Do cấu tạo khung xe bắt buộc',
      ],
      correct_index: 0,
      explanation: 'Khoảng cách từ điểm đẩy của piston đến trục quay bản lề thùng ben quyết định cánh tay đòn; góc đặt tối ưu giúp tạo moment nâng lớn nhất thắng trọng tải cát.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một chiếc xe nâng hàng forklift có khối lượng $3\\,\\text{tấn}$ đang nâng một khối hàng $1,5\\,\\text{tấn}$. Khi xe di chuyển tiến xuống một con dốc nghiêng mà vẫn cẩu hàng ở phía trước, nguy cơ nguy hiểm nhất có thể xảy ra là gì?',
      options: [
        'Xe bị lật chúi đầu về phía trước vì trọng tâm dồn lên trục trước làm tăng moment lật',
        'Xe bị lật ngửa ra phía sau',
        'Xe chạy nhanh quá mức',
        'Hàng bị nung nóng',
      ],
      correct_index: 0,
      explanation: 'Khi xuống dốc, trọng tâm xe và hàng dịch chuyển về phía trước trục bánh trước, cánh tay đòn tải tăng lên có thể làm moment lật vượt quá moment của đuôi xe, gây lật chúi mũi.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Dùng một đòn bẩy để nâng một khối bê tông. Nếu dịch chuyển điểm tựa $O$ lại gần khối bê tông hơn, người công nhân sẽ nhận thấy điều gì?',
      options: [
        'Phải ấn lực nhỏ hơn nhưng tay phải di chuyển quãng đường dài hơn',
        'Phải ấn lực lớn hơn và tay di chuyển ngắn hơn',
        'Cả lực và quãng đường đều giảm đi',
        'Không có sự khác biệt',
      ],
      correct_index: 0,
      explanation: 'Khi $O$ gần vật, cánh tay đòn $d_1$ lớn hơn nên lực $F_1$ nhỏ đi (lợi về lực), nhưng theo quy tắc vàng thì đầu tay ấn phải di chuyển quãng đường dài hơn tỉ lệ thuận.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao trên các công trường xây dựng, khi gặp gió bão lớn cấp 10 trở lên, người ta thường mở phanh quay của cần cẩu tháp để cần cẩu tự do quay theo hướng gió?',
      options: [
        'Để cánh tay cần cẩu xoay xuôi theo chiều gió như chong chóng, giảm diện tích cản gió và triệt tiêu moment lật do áp lực gió bão gây ra',
        'Để cần cẩu quay tạo ra điện',
        'Để công nhân quan sát hướng gió',
        'Để tránh bị sét đánh',
      ],
      correct_index: 0,
      explanation: 'Nếu hãm phanh cứng, diện tích hứng gió lớn của giàn thép sẽ tạo ra moment xoắn và moment uốn khổng lồ làm gãy đổ thân tháp. Mở phanh giúp cần cẩu tự quay xuôi gió như cờ đuôi nheo.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Nguyên lý hoạt động của chiếc kẹp ép tỏi trong nhà bếp là ứng dụng của:',
      options: [
        'Đòn bẩy loại 2, giúp bàn tay bóp tạo ra lực ép cực lớn nghiền nát tép tỏi',
        'Đòn bẩy loại 3',
        'Mặt phẳng nghiêng kết hợp đòn bẩy',
        'Áp suất chất lỏng',
      ],
      correct_index: 0,
      explanation: 'Khớp xoay ở đầu là điểm tựa, tép tỏi nằm trong cối ép ở giữa và hai tay cầm bóp ở phía ngoài, là đòn bẩy loại 2 cho lợi lớn về lực.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi nâng một vật nặng bằng đòn bẩy, người ta thường đặt hướng của lực tác dụng vuông góc với cán đòn bẩy. Mục đích của việc này là gì?',
      options: [
        'Để đạt cánh tay đòn lớn nhất, tạo ra moment lực quay cực đại với cùng một lực tác dụng',
        'Để tránh làm trầy xước sơn của đòn bẩy',
        'Để thanh đòn bẩy không bị cong',
        'Do quy định an toàn lao động',
      ],
      correct_index: 0,
      explanation: 'Khi lực vuông góc với thanh đòn, cánh tay đòn $d$ đạt giá trị lớn nhất bằng khoảng cách từ trục đến điểm đặt lực, tạo moment quay tối đa.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao cần trục bánh xích khi cẩu hàng nặng thường phải hạ các chân chống thủy lực (chân nhện outrigger) mở rộng sang hai bên?',
      options: [
        'Để tăng khoảng cách từ trục lật đến trọng tâm, mở rộng đa giác chân đế làm tăng moment chống lật của toàn bộ xe',
        'Để tránh mòn xích xe',
        'Để xe cẩu đứng cao hơn',
        'Để cẩu hàng nhanh hơn',
      ],
      correct_index: 0,
      explanation: 'Các chân chống mở rộng làm tăng kích thước đa giác chân đế (tăng khoảng cách từ trục quay lật đến khối đối trọng), làm tăng mạnh moment giữ chống lật.',
    },

    // 5 van_dung
    {
      difficulty: 'van_dung',
      question_text: 'Một cần trục tháp có tay đòn đối trọng dài $10\\,\\text{m}$ treo khối bê tông đối trọng nặng $5\\,\\text{tấn}$. Tay cần làm việc vươn dài $25\\,\\text{m}$. Lấy $g = 10\\,\\text{m/s}^2$. Bỏ qua trọng lượng kết cấu giàn cần cẩu. Khối lượng hàng tối đa mà cần cẩu có thể cẩu ở đầu mút $25\\,\\text{m}$ để không bị lật là:',
      options: ['$2,0\\,\\text{tấn}$', '$2,5\\,\\text{tấn}$', '$1,5\\,\\text{tấn}$', '$3,0\\,\\text{tấn}$'],
      correct_index: 0,
      explanation: 'Moment giữ của đối trọng: $M_{\\text{giữ}} = P_{\\text{đt}} \\cdot d_{\\text{đt}} = (5000 \\times 10) \\times 10 = 500\\,000\\,\\text{N}\\cdot\\text{m}$. Ở trạng thái cân bằng giới hạn: $P_{\\text{tải}} \\cdot d_{\\text{tải}} = M_{\\text{giữ}} \\Rightarrow P_{\\text{tải}} = 500000 / 25 = 20\\,000\\,\\text{N} \\Rightarrow m = 2000\\,\\text{kg} = 2,0\\,\\text{tấn}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một xe nâng hàng forklift có khối lượng bản thân là $4000\\,\\text{kg}$, trọng tâm xe cách trục bánh trước $1,2\\,\\text{m}$ về phía sau. Trọng tâm của khối hàng đặt cách trục bánh trước $0,8\\,\\text{m}$ về phía trước. Lấy $g = 10\\,\\text{m/s}^2$. Khối lượng hàng tối đa mà xe có thể nâng mà bánh sau chưa bị nhấc bổng khỏi mặt đất là:',
      options: ['$6000\\,\\text{kg}$', '$5000\\,\\text{kg}$', '$4000\\,\\text{kg}$', '$3000\\,\\text{kg}$'],
      correct_index: 0,
      explanation: 'Lấy trục quay là trục bánh trước: Moment giữ của xe: $M_{\\text{xe}} = P_{\\text{xe}} \\cdot d_{\\text{xe}} = (4000 \\times 10) \\times 1,2 = 48\\,000\\,\\text{N}\\cdot\\text{m}$. Để bánh sau không bị nhấc lên: $P_{\\text{hàng}} \\cdot d_{\\text{hàng}} \\le M_{\\text{xe}} \\Rightarrow P_{\\text{hàng}} \\le 48000 / 0,8 = 60\\,000\\,\\text{N} \\Rightarrow m_{\\text{hàng}} \\le 6000\\,\\text{kg} = 6\\,\\text{tấn}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một chiếc cân Rô-béc-van đòn bẩy có hai cánh tay đòn không hoàn toàn bằng nhau: nhánh trái dài $l_1 = 20,2\\,\\text{cm}$, nhánh phải dài $l_2 = 19,8\\,\\text{cm}$. Khi đặt một gói kẹo vào đĩa cân bên trái thì phải đặt quả cân $200\\,\\text{g}$ vào đĩa cân bên phải để cân thăng bằng. Khối lượng thực của gói kẹo là:',
      options: ['$196\\,\\text{g}$', '$204\\,\\text{g}$', '$200\\,\\text{g}$', '$198\\,\\text{g}$'],
      correct_index: 0,
      explanation: 'Theo điều kiện thăng bằng: $m_{\\text{kẹo}} \\cdot l_1 = m_{\\text{cân}} \\cdot l_2 \\Rightarrow m_{\\text{kẹo}} = 200 \\times (19,8 / 20,2) \\approx 196,04\\,\\text{g}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một tấm bê tông đan đồng chất hình chữ nhật nặng $1200\\,\\text{N}$ dài $2\\,\\text{m}$ đặt nằm ngang trên mặt đất. Người công nhân dùng tay nâng một đầu tấm bê tông lên khỏi mặt đất theo phương thẳng đứng. Lực nâng tối thiểu của công nhân là:',
      options: ['$600\\,\\text{N}$', '$1200\\,\\text{N}$', '$300\\,\\text{N}$', '$400\\,\\text{N}$'],
      correct_index: 0,
      explanation: 'Đầu chạm đất đóng vai trò điểm tựa $O$. Trọng tâm tấm bê tông ở chính giữa cách điểm tựa $1\\,\\text{m}$. Tay nâng ở đầu đối diện cách điểm tựa $2\\,\\text{m}$. Theo quy tắc moment: $F \\cdot 2 = P \\cdot 1 \\Rightarrow F = P / 2 = 1200 / 2 = 600\\,\\text{N}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một chiếc kẹp ê-tô cơ khí sử dụng trục vít me có bước ren $p = 2\\,\\text{mm}$ và tay quay dài $L = 20\\,\\text{cm}$. Khi người thợ tác dụng một lực $50\\,\\text{N}$ vào đầu tay quay, bỏ qua ma sát, lực kẹp tác dụng lên chi tiết gia công xấp xỉ bằng:',
      options: ['$31\\,416\\,\\text{N}$', '$15\\,708\\,\\text{N}$', '$10\\,000\\,\\text{N}$', '$5\\,000\\,\\text{N}$'],
      correct_index: 0,
      explanation: 'Theo định luật bảo toàn công: Khi quay 1 vòng, công vào $A_{\\text{vào}} = F \\cdot (2\\pi L) = 50 \\times (2\\pi \\times 0,2) = 20\\pi\\,\\text{J}$. Công ra ép bước ren: $A_{\\text{ra}} = F_{\\text{kẹp}} \\cdot h = F_{\\text{kẹp}} \\cdot 0,002\\,\\text{m}$. Bỏ qua ma sát: $F_{\\text{kẹp}} = 20\\pi / 0,002 = 10000\\pi \\approx 31\\,416\\,\\text{N}$ (hơn 3,1 tấn lực!).',
    },

    // 3 van_dung_cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một cần cẩu tháp xây dựng có tầm với thay đổi từ $d_{\\text{min}} = 5\\,\\text{m}$ đến $d_{\\text{max}} = 40\\,\\text{m}$. Đối trọng giữ thăng bằng cố định tạo ra moment chống lật danh định là $M_0 = 1\\,200\\,000\\,\\text{N}\\cdot\\text{m}$. Theo quy chuẩn kỹ thuật an toàn xây dựng, hệ số an toàn chống lật tối thiểu phải đạt $k = 1,5$ (tức moment của tải không được vượt quá $M_0 / k$). Tải trọng cẩu an toàn ở tầm với cực đại $40\\,\\text{m}$ là:',
      options: ['$20\\,000\\,\\text{N}$ ($2,0\\,\\text{tấn}$)', '$30\\,000\\,\\text{N}$ ($3,0\\,\\text{tấn}$)', '$15\\,000\\,\\text{N}$ ($1,5\\,\\text{tấn}$)', '$25\\,000\\,\\text{N}$ ($2,5\\,\\text{tấn}$)'],
      correct_index: 0,
      explanation: 'Moment lật cho phép có tính hệ số an toàn: $M_{\\text{cp}} = M_0 / k = 1200000 / 1,5 = 800\\,000\\,\\text{N}\\cdot\\text{m}$. Tải trọng nâng an toàn tại tầm với $40\\,\\text{m}$: $P = M_{\\text{cp}} / 40 = 800000 / 40 = 20\\,000\\,\\text{N} = 2,0\\,\\text{tấn}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một chiếc bàn có 4 chân đối xứng đặt trên sàn nhà, mặt bàn hình chữ nhật kích thước $1,2\\,\\text{m} \\times 0,8\\,\\text{m}$, bàn có khối lượng $20\\,\\text{kg}$. Một người đặt một vật nặng $30\\,\\text{kg}$ lên mặt bàn. Để bàn không bị lật nghiêng khi vật đặt sát mép mép bàn, vị trí đặt vật phải thỏa mãn điều kiện nào?',
      options: [
        'Trọng tâm của hệ (bàn + vật) phải luôn nằm trong đa giác chân đế tạo bởi 4 chân bàn',
        'Vật nặng phải đặt chính giữa bàn',
        'Chân bàn phải chôn xuống sàn',
        'Bàn luôn tự cân bằng không bao giờ lật',
      ],
      correct_index: 0,
      explanation: 'Điều kiện cân bằng chống lật của vật trên mặt phẳng đỡ: Giá của trọng lực tổng hợp tác dụng lên hệ phải đi qua mặt đáy chân đế (đa giác nối các điểm tiếp xúc của chân bàn).',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một cầu bập bênh dài $4\\,\\text{m}$ có điểm tựa ở giữa. Bạn An nặng $45\\,\\text{kg}$ ngồi ở đầu mút $A$ ($d_A = 2\\,\\text{m}$). Hai bạn Bình ($30\\,\\text{kg}$) và Cường ($20\\,\\text{kg}$) ngồi ở phía bên kia. Nếu bạn Bình ngồi cách điểm tựa $1,5\\,\\text{m}$ thì bạn Cường phải ngồi cách điểm tựa bao nhiêu để cầu bập bênh thăng bằng nằm ngang? (Lấy $g = 10\\,\\text{m/s}^2$).',
      options: ['$2,25\\,\\text{m}$', '$2,0\\,\\text{m}$', '$1,8\\,\\text{m}$', '$1,5\\,\\text{m}$'],
      correct_index: 0,
      explanation: 'Moment bên bạn An: $M_A = P_{\\text{An}} \\cdot d_A = 450 \\times 2 = 900\\,\\text{N}\\cdot\\text{m}$. Tổng moment bên đối diện: $M_{\\text{phải}} = P_{\\text{Bình}} \\cdot d_{\\text{Bình}} + P_{\\text{Cường}} \\cdot d_{\\text{Cường}} = 300 \\times 1,5 + 200 \\cdot d_{\\text{Cường}} = 450 + 200 d_{\\text{Cường}}$. Cân bằng: $450 + 200 d_{\\text{Cường}} = 900 \\Rightarrow 200 d_{\\text{Cường}} = 450 \\Rightarrow d_{\\text{Cường}} = 2,25\\,\\text{m}$.',
    },
  ],
};

export { buildGrade8Topic25Questions, buildGrade8Chapter25ExamQuestions } from './grade8-questions-part2';


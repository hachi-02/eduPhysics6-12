import { SeedQuestionItem } from './grade6-questions';
import { RawQuestionItem, GRADE8_CH1_CH2_TOPICS } from './grade8-questions';

export const GRADE8_CH3_CH4_TOPICS: Record<string, RawQuestionItem[]> = {
  // =========================================================================
  // G8-CH3-TP1: Hiện tượng nhiễm điện do cọ xát và Hai loại điện tích (25 questions)
  // =========================================================================
  'G8-CH3-TP1': [
    // 10 nhan_biet
    {
      difficulty: 'nhan_biet',
      question_text: 'Một vật sau khi bị cọ xát có khả năng nào sau đây thì được gọi là vật bị nhiễm điện (mang điện tích)?',
      options: [
        'Hút các vật nhẹ khác hoặc làm sáng bóng đèn bút thử điện',
        'Làm thay đổi khối lượng của vật khác',
        'Tỏa ra mùi thơm dễ chịu',
        'Tự động bay lên không trung',
      ],
      correct_index: 0,
      explanation: 'Vật bị nhiễm điện có đặc tính hút các vật nhẹ khác (vụn giấy, sợi bông) hoặc phóng điện làm lóe sáng bóng đèn neon của bút thử điện.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Có mấy loại điện tích trong tự nhiên và chúng được gọi tên là gì?',
      options: [
        'Hai loại: điện tích dương ($+$) và điện tích âm ($-$)',
        'Ba loại: dương, âm và trung hòa',
        'Một loại duy nhất',
        'Bốn loại: Bắc, Nam, Đông, Tây',
      ],
      correct_index: 0,
      explanation: 'Trong tự nhiên chỉ có 2 loại điện tích: điện tích dương (quy ước mang bởi thanh thủy tinh cọ xát lụa) và điện tích âm (mang bởi thanh nhựa cọ xát vải dạ).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hai vật mang điện tích CÙNG LOẠI (cùng dấu) khi đặt gần nhau sẽ tương tác như thế nào?',
      options: ['Đẩy nhau', 'Hút nhau', 'Không tương tác', 'Lúc hút lúc đẩy'],
      correct_index: 0,
      explanation: 'Quy tắc tương tác tĩnh điện: Các điện tích cùng loại (dương - dương hoặc âm - âm) thì đẩy nhau.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hai vật mang điện tích KHÁC LOẠI (trái dấu) khi đặt gần nhau sẽ tương tác như thế nào?',
      options: ['Hút nhau', 'Đẩy nhau', 'Làm triệt tiêu lẫn nhau', 'Quay tròn quanh nhau'],
      correct_index: 0,
      explanation: 'Các điện tích khác loại (dương - âm) thì hút nhau.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong nguyên tử, hạt nào sau đây mang điện tích âm?',
      options: ['Electron', 'Proton', 'Neutron', 'Hạt nhân'],
      correct_index: 0,
      explanation: 'Electron quay quanh hạt nhân mang điện tích âm ($-1,6 \\times 10^{-19}\\,\\text{C}$); proton mang điện tích dương; neutron không mang điện.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Ở trạng thái bình thường, tại sao các nguyên tử và vật thể lại trung hòa về điện?',
      options: [
        'Vì tổng điện tích dương của hạt nhân bằng đúng tổng điện tích âm của các electron',
        'Vì nguyên tử không chứa hạt mang điện nào',
        'Vì các electron không chuyển động',
        'Vì các điện tích bị triệt tiêu bởi không khí',
      ],
      correct_index: 0,
      explanation: 'Bình thường số proton bằng số electron nên tổng đại số điện tích bằng 0, vật trung hòa về điện.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Một vật trở nên nhiễm điện DƯƠNG khi nào?',
      options: [
        'Khi vật bị mất bớt electron',
        'Khi vật nhận thêm electron',
        'Khi vật nhận thêm proton từ hạt nhân',
        'Khi vật bị nung nóng',
      ],
      correct_index: 0,
      explanation: 'Khi cọ xát, nếu vật bị mất bớt electron thì số điện tích dương của proton nhiều hơn số electron, vật nhiễm điện dương.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Một vật trở nên nhiễm điện ÂM khi nào?',
      options: [
        'Khi vật nhận thêm electron từ vật khác',
        'Khi vật bị mất bớt electron',
        'Khi vật mất bớt proton',
        'Khi vật bị làm lạnh',
      ],
      correct_index: 0,
      explanation: 'Khi vật nhận thêm electron, số hạt electron vượt trội hơn số proton nên vật nhiễm điện âm.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị đo điện tích trong hệ đo lường quốc tế SI là gì?',
      options: ['Culông (C)', 'Ampe (A)', 'Vôn (V)', 'Ohm ($\\Omega$)'],
      correct_index: 0,
      explanation: 'Đơn vị đo lượng điện tích trong hệ SI là Culông, ký hiệu là C.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Dụng cụ thí nghiệm dùng để phát hiện một vật có bị nhiễm điện hay không gọi là gì?',
      options: ['Điện nghiệm', 'Nhiệt kế', 'Ampe kế', 'Vôn kế'],
      correct_index: 0,
      explanation: 'Điện nghiệm (gồm hai lá kim loại mỏng treo trên thanh dẫn) xòe ra khi chạm vào vật nhiễm điện.',
    },

    // 7 thong_hieu
    {
      difficulty: 'thong_hieu',
      question_text: 'Vào mùa đông khô hanh, khi chải tóc bằng lược nhựa ta thấy nhiều sợi tóc bị hút dính vào lược hoặc dựng đứng lên. Giải thích nào sau đây là ĐÚNG?',
      options: [
        'Lược nhựa cọ xát với tóc làm cả lược và tóc nhiễm điện trái dấu nên hút nhau',
        'Tóc bị nóng lên do ma sát',
        'Lược nhựa bị nhiễm từ hút tóc',
        'Không khí mùa đông đẩy tóc vào lược',
      ],
      correct_index: 0,
      explanation: 'Khi chải, lược nhựa cọ xát với tóc khiến electron dịch chuyển giữa chúng; lược và tóc nhiễm điện trái dấu nên hút nhau; các sợi tóc nhiễm điện cùng dấu đẩy nhau dựng đứng lên.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao các xe bồn chở xăng dầu thường có một sợi xích sắt thả kéo lê trên mặt đường nhựa khi chạy?',
      options: [
        'Để dẫn dòng điện tích tĩnh điện sinh ra do xăng dầu lắc cọ xát với vỏ bồn xuống đất, ngăn ngừa nguy cơ phóng tia lửa gây cháy nổ',
        'Để làm chậm tốc độ của xe bồn',
        'Để tạo tiếng động cảnh báo các xe khác',
        'Để giữ thăng bằng cho xe',
      ],
      correct_index: 0,
      explanation: 'Xăng dầu cọ xát với thành bồn kim loại sinh ra tĩnh điện nguy hiểm; sợi xích sắt dẫn điện nối vỏ bồn với mặt đất giúp triệt tiêu điện tích tích tụ an toàn.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Đưa một thanh thủy tinh nhiễm điện dương lại gần một quả cầu bấc nhẹ treo trên sợi chỉ tơ. Quả cầu bấc bị thanh thủy tinh hút dính vào thanh, sau đó lại bị bật đẩy ra xa. Tại sao?',
      options: [
        'Ban đầu quả cầu bị phân cực nên bị hút; sau khi chạm vào thanh thủy tinh nó nhiễm điện dương cùng dấu nên bị đẩy ra xa',
        'Thanh thủy tinh bị mất hết điện tích',
        'Quả cầu bấc biến thành nam châm',
        'Không khí xung quanh bị đốt nóng',
      ],
      correct_index: 0,
      explanation: 'Chạm vào thanh thủy tinh khiến một phần electron từ quả cầu truyền sang thanh, làm quả cầu nhiễm điện cùng dấu dương với thanh thủy tinh, dẫn đến lực đẩy tĩnh điện.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Cột thu lôi (kim sét) lắp trên đỉnh các tòa nhà cao tầng hoạt động dựa trên nguyên lý nào?',
      options: [
        'Đầu nhọn tập trung điện tích làm ion hóa không khí dẫn truyền sét an toàn xuống lòng đất',
        'Hút gió xua tan các đám mây giông',
        'Làm lạnh đám mây để không tạo sấm sét',
        'Cách điện cho toàn bộ tòa nhà',
      ],
      correct_index: 0,
      explanation: 'Đầu kim nhọn phóng điện êm dịu làm giảm điện thế mây giông hoặc thu hút tia sét đánh thẳng vào kim rồi dẫn dòng điện cực lớn an toàn xuống đất qua dây cáp đồng.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Trong công nghệ sơn tĩnh điện, các hạt bột sơn và chi tiết kim loại cần sơn được tích điện như thế nào?',
      options: [
        'Hạt sơn tích điện trái dấu với vật kim loại cần sơn để lực hút tĩnh điện kéo sơn bám đều chặt vào bề mặt',
        'Cả hai cùng tích điện dương',
        'Cả hai cùng tích điện âm',
        'Không tích điện',
      ],
      correct_index: 0,
      explanation: 'Bột sơn phun ra mang điện tích âm, vật kim loại nối đất hoặc tích điện dương; lực hút tĩnh điện khiến hạt sơn bám phủ đều khắp ngóc ngách, giảm thiểu hao hụt sơn.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao cánh quạt điện trong nhà sau một thời gian quay thường bám rất nhiều bụi bẩn, đặc biệt là ở mép cánh quạt?',
      options: [
        'Khi quay cánh quạt cọ xát mạnh với không khí làm cánh quạt bị nhiễm điện, hút các hạt bụi lơ lửng trong phòng',
        'Vì cánh quạt bị dính dầu mỡ',
        'Vì lực ly tâm đẩy bụi vào mép quạt',
        'Vì gió mang bụi đến thổi vào',
      ],
      correct_index: 0,
      explanation: 'Cánh quạt ma sát với phân tử khí nhiễm điện tĩnh điện, mép cánh quạt tích điện nhiều nhất nên hút và giữ chặt các hạt bụi mịn.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Có ba quả cầu kim loại nhỏ $A, B, C$ treo bằng sợi chỉ cách điện. Quả cầu $A$ đẩy $B$; quả cầu $B$ hút $C$. Nếu quả cầu $A$ nhiễm điện dương ($+$) thì dấu điện tích của $B$ và $C$ là gì?',
      options: [
        '$B$ nhiễm điện dương ($+$), $C$ nhiễm điện âm ($-$) hoặc trung hòa',
        '$B$ nhiễm điện âm ($-$), $C$ nhiễm điện dương ($+$)',
        'Cả $B$ và $C$ đều nhiễm điện dương ($+$)',
        'Cả $B$ và $C$ đều nhiễm điện âm ($-$)',
      ],
      correct_index: 0,
      explanation: '$A$ đẩy $B \\Rightarrow B$ cùng dấu với $A$ ($B$ mang điện dương $+$). $B$ hút $C \\Rightarrow C$ trái dấu với $B$ ($C$ mang điện âm $-$) hoặc $C$ là vật trung hòa bị hút do hưởng ứng.',
    },

    // 5 van_dung
    {
      difficulty: 'van_dung',
      question_text: 'Một vật dẫn sau khi cọ xát bị mất đi $5 \\times 10^{11}$ electron. Biết điện tích mỗi electron là $e = -1,6 \\times 10^{-19}\\,\\text{C}$. Điện tích của vật sau khi cọ xát là:',
      options: ['$+8,0 \\times 10^{-8}\\,\\text{C}$', '$-8,0 \\times 10^{-8}\\,\\text{C}$', '$+3,125 \\times 10^{30}\\,\\text{C}$', '$+8,0 \\times 10^{-19}\\,\\text{C}$'],
      correct_index: 0,
      explanation: 'Mất electron nên vật nhiễm điện dương: $q = + N_e \\cdot |e| = 5 \\times 10^{11} \\times 1,6 \\times 10^{-19} = +8,0 \\times 10^{-8}\\,\\text{C} = +80\\,\\text{nC}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một miếng nhựa cọ xát với len tích được điện lượng $q = -4,8\\,\\text{nC}$. Số hạt electron đã dịch chuyển từ mảnh len sang miếng nhựa là:',
      options: ['$3,0 \\times 10^{10}$ hạt', '$3,0 \\times 10^{19}$ hạt', '$4,8 \\times 10^{9}$ hạt', '$7,68 \\times 10^{-28}$ hạt'],
      correct_index: 0,
      explanation: 'Đổi $q = -4,8 \\times 10^{-9}\\,\\text{C}$. Số electron nhận thêm: $N_e = |q| / |e| = (4,8 \\times 10^{-9}) / (1,6 \\times 10^{-19}) = 3,0 \\times 10^{10}$ hạt (30 tỷ hạt).',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Hai quả cầu kim loại giống hệt nhau: quả cầu A mang điện tích $+6\\,\\mu\\text{C}$, quả cầu B mang điện tích $-2\\,\\mu\\text{C}$. Cho hai quả cầu tiếp xúc nhau rồi tách ra. Điện tích của mỗi quả cầu sau khi tách ra là:',
      options: ['$+2\\,\\mu\\text{C}$', '$+4\\,\\mu\\text{C}$', '$-2\\,\\mu\\text{C}$', '$0\\,\\mu\\text{C}$'],
      correct_index: 0,
      explanation: 'Theo định luật bảo toàn điện tích, khi tiếp xúc điện tích phân bố đều trên hai quả cầu giống nhau: $q\' = (q_A + q_B) / 2 = [6 + (-2)] / 2 = +2\\,\\mu\\text{C}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Trong một cơn giông sét, một tia sét đánh từ đám mây xuống đất truyền một lượng điện tích $q = 25\\,\\text{C}$ trong thời gian rất ngắn $\\Delta t = 0,002\\,\\text{s}$. Cường độ dòng điện trung bình của tia sét đó là:',
      options: ['$12\\,500\\,\\text{A}$ ($12,5\\,\\text{kA}$)', '$50\\,\\text{A}$', '$0,05\\,\\text{A}$', '$125\\,000\\,\\text{A}$'],
      correct_index: 0,
      explanation: 'Cường độ dòng điện trung bình: $I = q / \\Delta t = 25 / 0,002 = 12\\,500\\,\\text{A} = 12,5\\,\\text{kA}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một hạt bụi mang điện tích âm $q = -3,2 \\times 10^{-15}\\,\\text{C}$ bay lơ lửng cân bằng giữa hai bản kim loại tích điện trái dấu nằm ngang. Nếu hạt bụi bị mất bớt 5000 electron thì điện tích mới của nó là:',
      options: ['$-2,4 \\times 10^{-15}\\,\\text{C}$', '$-4,0 \\times 10^{-15}\\,\\text{C}$', '$-8,0 \\times 10^{-16}\\,\\text{C}$', '$0\\,\\text{C}$'],
      correct_index: 0,
      explanation: 'Điện tích tăng thêm do mất electron: $\\Delta q = + 5000 \\times 1,6 \\times 10^{-19} = +8,0 \\times 10^{-16}\\,\\text{C}$. Điện tích mới: $q\' = q + \\Delta q = -3,2 \\times 10^{-15} + 0,8 \\times 10^{-15} = -2,4 \\times 10^{-15}\\,\\text{C}$.',
    },

    // 3 van_dung_cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Máy lọc bụi tĩnh điện trong các nhà máy nhiệt điện than có nguyên lý hoạt động gồm hai giai đoạn: giai đoạn 1 cho khói bụi đi qua vùng điện trường cực mạnh có phóng điện vầng quang để các hạt bụi va chạm với ion tự do; giai đoạn 2 hạt bụi đi qua các bản cực thu. Hiện tượng vật lý diễn ra ở hai giai đoạn lần lượt là:',
      options: [
        'Giai đoạn 1: Hạt bụi bị nhiễm điện do tiếp xúc với dòng ion; Giai đoạn 2: Lực hút tĩnh điện hút hạt bụi mang điện về bản cực trái dấu',
        'Giai đoạn 1: Nhiễm điện do cọ xát; Giai đoạn 2: Lọc cơ học bằng màng vải',
        'Giai đoạn 1: Đốt cháy hạt bụi; Giai đoạn 2: Làm nguội bụi',
        'Giai đoạn 1: Tách từ tính; Giai đoạn 2: Hấp thụ hóa học',
      ],
      correct_index: 0,
      explanation: 'Dòng phóng điện vầng quang ion hóa các phân tử khí, ion bám vào hạt bụi làm bụi nhiễm điện âm; sau đó lực tĩnh điện hút các hạt bụi âm này vào bản cực dương (bản thu bụi), làm sạch khói thải đạt $99\\%$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Trong thí nghiệm giọt dầu nổi tiếng của Millikan đo điện tích nguyên tố $e$, người ta đo được điện tích của 4 giọt dầu khác nhau lần lượt là: $q_1 = -4,8 \\times 10^{-19}\\,\\text{C}$; $q_2 = -6,4 \\times 10^{-19}\\,\\text{C}$; $q_3 = -8,0 \\times 10^{-19}\\,\\text{C}$; $q_4 = -9,6 \\times 10^{-19}\\,\\text{C}$. Từ các số liệu trên, ước tính độ lớn của điện tích nguyên tố nhỏ nhất $e$ là:',
      options: ['$1,6 \\times 10^{-19}\\,\\text{C}$', '$3,2 \\times 10^{-19}\\,\\text{C}$', '$4,8 \\times 10^{-19}\\,\\text{C}$', '$0,8 \\times 10^{-19}\\,\\text{C}$'],
      correct_index: 0,
      explanation: 'Hiệu số điện tích giữa các giọt dầu liên tiếp là $\\Delta q = 1,6 \\times 10^{-19}\\,\\text{C}$. Mọi điện tích đo được đều là bội số nguyên của $1,6 \\times 10^{-19}\\,\\text{C}$ ($3e, 4e, 5e, 6e$). Do đó $e = 1,6 \\times 10^{-19}\\,\\text{C}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một quả cầu kim loại $A$ trung hòa về điện đặt trên giá cách điện. Người ta đưa thanh thủy tinh tích điện dương lại gần (không chạm vào) quả cầu $A$, sau đó nối đất cho quả cầu $A$ rồi ngắt dây nối đất, cuối cùng mới đưa thanh thủy tinh ra xa. Quả cầu $A$ sẽ có trạng thái điện tích như thế nào?',
      options: [
        'Quả cầu $A$ bị nhiễm điện âm do electron từ đất chạy lên quả cầu bù đắp lực hút của thanh thủy tinh',
        'Quả cầu $A$ bị nhiễm điện dương',
        'Quả cầu $A$ vẫn trung hòa về điện',
        'Quả cầu $A$ bị nhiễm từ',
      ],
      correct_index: 0,
      explanation: 'Đây là phương pháp nhiễm điện do hưởng ứng kết hợp nối đất: Thanh dương hút electron từ lòng đất qua dây nối lên quả cầu $A$. Khi ngắt đất rồi đưa thanh ra xa, lượng electron dư thừa bị giữ lại trên quả cầu, làm $A$ tích điện âm.',
    },
  ],

  // =========================================================================
  // G8-CH3-TP2: Dòng điện, Nguồn điện và Mạch điện đơn giản (25 questions)
  // =========================================================================
  'G8-CH3-TP2': [
    // 10 nhan_biet
    {
      difficulty: 'nhan_biet',
      question_text: 'Dòng điện là gì?',
      options: [
        'Dòng các điện tích dịch chuyển có hướng',
        'Dòng các nguyên tử chuyển động hỗn loạn',
        'Dòng chất lỏng chảy trong ống dẫn',
        'Sự lan truyền của sóng ánh sáng',
      ],
      correct_index: 0,
      explanation: 'Định nghĩa: Dòng điện là dòng chuyển dời có hướng của các hạt mang điện tích.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Bản chất của dòng điện trong dây dẫn kim loại là gì?',
      options: [
        'Dòng các electron tự do dịch chuyển có hướng',
        'Dòng các hạt proton chuyển động',
        'Dòng các nguyên tử kim loại dịch chuyển',
        'Dòng các ion dương chuyển động tự do',
      ],
      correct_index: 0,
      explanation: 'Trong kim loại, các electron tự do mang điện tích âm dịch chuyển có hướng tạo nên dòng điện.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Chiều dòng điện trong mạch điện kín theo quy ước quốc tế là chiều nào?',
      options: [
        'Từ cực dương qua dây dẫn và thiết bị điện tới cực âm của nguồn điện',
        'Từ cực âm qua dây dẫn tới cực dương của nguồn điện',
        'Cùng chiều với chiều dịch chuyển của các electron tự do trong kim loại',
        'Chiều ngẫu nhiên tùy thuộc vào loại dây dẫn',
      ],
      correct_index: 0,
      explanation: 'Quy ước chiều dòng điện: Đi ra từ cực dương ($+$) của nguồn, đi qua thiết bị tiêu thụ điện và đi vào cực âm ($-$) của nguồn.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Thiết bị nào sau đây có chức năng cung cấp và duy trì dòng điện trong mạch kín?',
      options: ['Nguồn điện (pin, ắc quy, máy phát điện)', 'Bóng đèn', 'Công tắc khóa K', 'Ampe kế'],
      correct_index: 0,
      explanation: 'Nguồn điện tạo ra và duy trì hiệu điện thế giữa hai cực để duy trì dòng điện chạy trong mạch.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Mỗi nguồn điện một chiều thông thường (như pin con thỏ, ắc quy) luôn có mấy cực?',
      options: ['Hai cực: cực dương ($+$) và cực âm ($-$)', 'Một cực duy nhất', 'Ba cực', 'Bốn cực'],
      correct_index: 0,
      explanation: 'Nguồn điện một chiều luôn có 2 cực: cực dương (dấu $+$) và cực âm (dấu $-$).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Chất nào sau đây là chất dẫn điện tốt nhất ở điều kiện thường?',
      options: ['Bạc và Đồng', 'Nhựa cao su', 'Thủy tinh', 'Nước cất tinh khiết'],
      correct_index: 0,
      explanation: 'Bạc là kim loại dẫn điện tốt nhất, tiếp theo là đồng và vàng; nhựa, cao su và thủy tinh là các chất cách điện.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Vật liệu nào sau đây là chất CÁCH ĐIỆN?',
      options: ['Sứ cách điện, cao su, nhựa', 'Ruột bút chì (than chì)', 'Dung dịch muối ăn', 'Dây nhôm'],
      correct_index: 0,
      explanation: 'Sứ, cao su, nhựa, thủy tinh hầu như không có hạt mang điện tự do nên là chất cách điện.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Ký hiệu quy ước của một nguồn điện (pin) trên sơ đồ mạch điện là:',
      options: [
        'Hai đoạn thẳng song song: đoạn dài mảnh biểu thị cực dương, đoạn ngắn dày biểu thị cực âm',
        'Hình tròn có dấu nhân bên trong',
        'Hai đoạn thẳng cắt nhau hình chữ X',
        'Hình tam giác đều',
      ],
      correct_index: 0,
      explanation: 'Quy chuẩn sơ đồ: Nguồn điện vẽ bằng vạch dài mảnh ($+$) và vạch ngắn đậm ($-$).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Ký hiệu một bóng đèn sợi đốt trên sơ đồ mạch điện là:',
      options: [
        'Hình tròn có dấu gạch chéo chữ nhân (X) bên trong',
        'Hình chữ nhật rỗng',
        'Hình zíc-zắc lò xo',
        'Hai vạch thẳng đứng song song',
      ],
      correct_index: 0,
      explanation: 'Bóng đèn được biểu diễn bằng vòng tròn có dấu gạch chéo X bên trong.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hiện tượng "ngắn mạch" (đoản mạch) xảy ra khi nào?',
      options: [
        'Hai cực của nguồn điện bị nối trực tiếp với nhau bằng dây dẫn mà không qua điện trở tải',
        'Mạch điện bị đứt dây dẫn',
        'Công tắc khóa K mở hở mạch',
        'Bóng đèn bị cháy đứt dây tóc',
      ],
      correct_index: 0,
      explanation: 'Ngắn mạch xảy ra khi nối trực tiếp cực dương với cực âm bằng dây dẫn có điện trở rất bé, làm dòng điện tăng vọt gây cháy nổ.',
    },

    // 7 thong_hieu
    {
      difficulty: 'thong_hieu',
      question_text: 'So sánh chiều dòng điện quy ước và chiều chuyển động của các electron tự do trong dây dẫn kim loại:',
      options: [
        'Ngược chiều nhau: Dòng điện quy ước đi từ cực dương về cực âm, còn electron tự do dịch chuyển từ cực âm về cực dương',
        'Cùng chiều nhau',
        'Vuông góc với nhau',
        'Không có mối liên hệ',
      ],
      correct_index: 0,
      explanation: 'Electron mang điện âm nên bị cực âm đẩy về cực dương, chuyển động ngược chiều với chiều quy ước của dòng điện ($+$ sang $-$).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một mạch điện gồm pin, dây nối, công tắc K đóng và bóng đèn. Nhưng khi đóng công tắc, bóng đèn vẫn không sáng. Nguyên nhân nào sau đây KHÔNG THỂ là lý do?',
      options: [
        'Dây dẫn làm bằng đồng quá tốt',
        'Dây tóc bóng đèn đã bị đứt hở',
        'Pin đã hết sạch điện thế',
        'Các đầu nối dây bị lỏng hoặc rỉ sét cách điện',
      ],
      correct_index: 0,
      explanation: 'Dây dẫn bằng đồng tốt giúp dẫn điện tốt hơn nên không thể là nguyên nhân làm đèn không sáng.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao các thợ sửa chữa điện khi làm việc với đường dây điện sinh hoạt bắt buộc phải đeo găng tay cao su dày và đứng trên ghế nhựa hoặc thảm cao su cách điện?',
      options: [
        'Cao su là chất cách điện ngăn dòng điện chạy qua cơ thể người xuống đất khép kín mạch',
        'Để tránh bị bẩn tay',
        'Để làm việc nhanh hơn',
        'Cao su hút bớt điện áp',
      ],
      correct_index: 0,
      explanation: 'Cao su cách điện tuyệt đối ngăn cơ thể người tạo thành mạch kín dẫn dòng điện nguy hiểm xuống đất, chống điện giật.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một viên pin con thỏ để lâu ngày bị chảy nước vàng rỉ sét ở hai đầu cực. Hiện tượng này ảnh hưởng thế nào đến mạch điện?',
      options: [
        'Lớp rỉ sét tạo điện trở tiếp xúc rất lớn làm cản trở dòng điện, đèn có thể không sáng',
        'Làm pin sinh ra điện áp cao gấp đôi',
        'Làm dây dẫn bị đổi chiều dòng điện',
        'Không có ảnh hưởng gì',
      ],
      correct_index: 0,
      explanation: 'Oxit kim loại rỉ sét là chất dẫn điện rất kém, làm hở mạch hoặc tăng điện trở tiếp xúc, khiến dòng điện không chạy qua được.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao lõi của dây dẫn điện trong nhà luôn bọc một lớp vỏ nhựa PVC dày bên ngoài?',
      options: [
        'Nhựa PVC cách điện đảm bảo an toàn cho người sử dụng và tránh hiện tượng chập điện (ngắn mạch) giữa hai dây',
        'Để dây dẫn điện đẹp hơn',
        'Để dây dẫn nặng hơn không bị gió thổi bay',
        'Để giữ nhiệt cho dòng điện',
      ],
      correct_index: 0,
      explanation: 'Lớp vỏ nhựa PVC cách điện ngăn ngừa điện giật khi chạm tay vào dây và ngăn hai dây pha - trung tính tiếp xúc trực tiếp gây đoản mạch chập cháy.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi đóng khóa K của một mạch điện gồm nguồn pin và một bóng đèn, bóng đèn phát sáng gần như tức thì ngay cả khi dây dẫn dài hàng kilomet. Giải thích nào sau đây là ĐÚNG?',
      options: [
        'Điện trường lan truyền dọc theo dây dẫn với tốc độ xấp xỉ tốc độ ánh sáng ($300\\,000\\,\\text{km/s}$), tác dụng lực làm mọi electron tự do trong toàn bộ mạch chuyển động đồng thời',
        'Các electron tự do chạy với tốc độ ánh sáng từ pin đến đèn',
        'Do bóng đèn tự phát ra điện',
        'Do pin đẩy các hạt photon ánh sáng đi trong dây',
      ],
      correct_index: 0,
      explanation: 'Tốc độ trôi của bản thân hạt electron rất chậm (chỉ khoảng vài milimét/giây), nhưng điện trường thiết lập trong dây dẫn lan truyền với tốc độ ánh sáng, làm toàn bộ electron khắp mạch dịch chuyển có hướng ngay tức thì.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi lắp pin vào điều khiển tivi, người ta phải đặt đúng cực lồi ($+$) và đáy bằng ($-$) của pin vào các tiếp điểm lò xo tương ứng. Nếu lắp ngược cả 2 viên pin thì điều khiển có hoạt động không?',
      options: [
        'Không hoạt động, vì các mạch vi xử lý điện tử và đèn LED hồng ngoại chỉ cho dòng điện chạy theo đúng một chiều nhất định',
        'Vẫn hoạt động bình thường',
        'Hoạt động ngược lại (bật thành tắt)',
        'Điều khiển bị nổ ngay lập tức',
      ],
      correct_index: 0,
      explanation: 'Linh kiện bán dẫn (diode, LED, transistor) trong mạch điện tử có tính dẫn điện một chiều; khi lắp ngược cực nguồn, diode chặn dòng điện khiến mạch không thể hoạt động.',
    },

    // 5 van_dung
    {
      difficulty: 'van_dung',
      question_text: 'Trong thời gian $10\\,\\text{giây}$, có một lượng điện tích $q = 24\\,\\text{C}$ chuyển qua tiết diện thẳng của dây dẫn. Cường độ dòng điện chạy qua dây dẫn là:',
      options: ['$2,4\\,\\text{A}$', '$240\\,\\text{A}$', '$0,417\\,\\text{A}$', '$14\\,\\text{A}$'],
      correct_index: 0,
      explanation: 'Áp dụng công thức cường độ dòng điện: $I = q / t = 24 / 10 = 2,4\\,\\text{A}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Dòng điện chạy qua dây tóc bóng đèn xe máy có cường độ không đổi là $I = 1,5\\,\\text{A}$. Lượng điện tích dịch chuyển qua dây tóc bóng đèn trong thời gian $2\\,\\text{phút}$ là:',
      options: ['$180\\,\\text{C}$', '$3\\,\\text{C}$', '$0,75\\,\\text{C}$', '$300\\,\\text{C}$'],
      correct_index: 0,
      explanation: 'Đổi thời gian: $t = 2\\,\\text{phút} = 120\\,\\text{giây}$. Điện lượng: $q = I \\cdot t = 1,5 \\times 120 = 180\\,\\text{C}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một dòng điện không đổi có cường độ $I = 0,8\\,\\text{A}$ chạy qua một dây dẫn kim loại. Số electron tự do dịch chuyển qua tiết diện thẳng của dây dẫn đó trong mỗi giây là:',
      options: ['$5,0 \\times 10^{18}$ hạt', '$1,28 \\times 10^{-19}$ hạt', '$5,0 \\times 10^{19}$ hạt', '$8,0 \\times 10^{18}$ hạt'],
      correct_index: 0,
      explanation: 'Trong $1\\,\\text{s}$, điện lượng qua dây là $q = I \\cdot t = 0,8\\,\\text{C}$. Số hạt electron: $N_e = q / e = 0,8 / (1,6 \\times 10^{-19}) = 5,0 \\times 10^{18}$ hạt.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một ắc quy ô tô có dung lượng ghi trên vỏ là $60\\,\\text{Ah}$ (Ampe-giờ). Nếu ắc quy phóng điện liên tục với cường độ dòng điện ổn định $I = 2,5\\,\\text{A}$ thì ắc quy có thể hoạt động trong thời gian tối đa là:',
      options: ['$24\\,\\text{giờ}$', '$150\\,\\text{giờ}$', '$12\\,\\text{giờ}$', '$60\\,\\text{giờ}$'],
      correct_index: 0,
      explanation: 'Thời gian phóng điện: $t = \\text{Dung lượng} / I = 60\\,\\text{Ah} / 2,5\\,\\text{A} = 24\\,\\text{h}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Mắc nối tiếp 3 viên pin giống nhau, mỗi viên pin có hiệu điện thế $1,5\\,\\text{V}$ để cấp điện cho một bóng đèn nhỏ. Hiệu điện thế tổng cộng của bộ nguồn cấp cho bóng đèn là:',
      options: ['$4,5\\,\\text{V}$', '$1,5\\,\\text{V}$', '$3,0\\,\\text{V}$', '$0,5\\,\\text{V}$'],
      correct_index: 0,
      explanation: 'Khi ghép nối tiếp các nguồn điện: $U_{\\text{bộ}} = U_1 + U_2 + U_3 = 1,5 + 1,5 + 1,5 = 4,5\\,\\text{V}$.',
    },

    // 3 van_dung_cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một dây dẫn đồng có tiết diện $S = 1\\,\\text{mm}^2 = 10^{-6}\\,\\text{m}^2$ mang dòng điện $I = 3,2\\,\\text{A}$. Biết mật độ electron tự do trong đồng là $n = 8,5 \\times 10^{28}\\,\\text{electron/m}^3$. Tốc độ trôi có hướng trung bình của các electron tự do trong dây dẫn là:',
      options: ['$0,235\\,\\text{mm/s}$', '$23,5\\,\\text{m/s}$', '$300\\,000\\,\\text{km/s}$', '$1,5\\,\\text{m/s}$'],
      correct_index: 0,
      explanation: 'Công thức dòng điện vi mô: $I = n \\cdot |e| \\cdot v \\cdot S \\Rightarrow v = I / (n \\cdot e \\cdot S) = 3,2 / (8,5 \\times 10^{28} \\times 1,6 \\times 10^{-19} \\times 10^{-6}) = 3,2 / 13600 \\approx 2,35 \\times 10^{-4}\\,\\text{m/s} = 0,235\\,\\text{mm/s}$ (tốc độ trôi thực tế vô cùng chậm!).',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Trong một mạch điện điều khiển cầu thang gồm 1 bóng đèn và 2 công tắc 3 cực (công tắc chuyển mạch SPDT) ở tầng 1 và tầng 2. Trạng thái mạch điện hoạt động như thế nào?',
      options: [
        'Người ở tầng 1 hay tầng 2 đều có thể bật hoặc tắt đèn độc lập tại bất kỳ thời điểm nào',
        'Bắt buộc phải bật ở tầng 1 thì tầng 2 mới bật được',
        'Chỉ có thể tắt đèn ở tầng 1',
        'Hai công tắc phải cùng đóng thì đèn mới sáng',
      ],
      correct_index: 0,
      explanation: 'Mạch điện cầu thang sử dụng 2 công tắc chuyển mạch 3 chấu mắc song song hai đường dây nối tiếp điểm, cho phép đóng/cắt mạch độc lập từ hai vị trí khác nhau.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một bóng đèn LED phát sáng khi dòng điện chạy theo chiều từ Anode sang Cathode. Khi mắc đèn LED vào nguồn pin có hiệu điện thế $3\\,\\text{V}$ mà quên không mắc kèm điện trở hạn dòng $R$, hiện tượng gì xảy ra?',
      options: [
        'Dòng điện qua LED tăng quá mức cho phép làm nung cháy hỏng chip bán dẫn LED ngay tức khắc',
        'Đèn LED sáng bình thường vĩnh cửu',
        'Pin bị nổ ngay lập tức',
        'Đèn LED tự đổi thành màu khác',
      ],
      correct_index: 0,
      explanation: 'Đèn LED có điện trở thuận rất nhỏ; nếu nối trực tiếp không qua điện trở hạn dòng $R$, cường độ dòng điện sẽ vượt quá định mức chịu đựng ($20\\,\\text{mA}$) làm đứt mối nối p-n của LED.',
    },
  ],

  // =========================================================================
  // G8-CH3-TP3: Cường độ dòng điện, Hiệu điện thế và Tác dụng dòng điện (25 questions)
  // =========================================================================
  'G8-CH3-TP3': [
    // 10 nhan_biet
    {
      difficulty: 'nhan_biet',
      question_text: 'Đại lượng nào sau đây đặc trưng cho mức độ mạnh hay yếu của dòng điện?',
      options: ['Cường độ dòng điện ($I$)', 'Hiệu điện thế ($U$)', 'Công suất ($P$)', 'Điện trở ($R$)'],
      correct_index: 0,
      explanation: 'Cường độ dòng điện là đại lượng đặc trưng cho độ mạnh yếu của dòng điện, lượng điện tích dịch chuyển qua tiết diện dây trong 1 đơn vị thời gian.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Dụng cụ dùng để đo cường độ dòng điện là gì và phải mắc như thế nào trong mạch điện?',
      options: [
        'Ampe kế, mắc NỐI TIẾP vào mạch điện cần đo',
        'Vôn kế, mắc song song vào mạch',
        'Nhiệt kế, đặt cạnh dây dẫn',
        'Ampe kế, mắc song song với nguồn điện',
      ],
      correct_index: 0,
      explanation: 'Ampe kế có điện trở trong rất nhỏ, bắt buộc phải mắc NỐI TIẾP vào đoạn mạch cần đo cường độ dòng điện.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Dụng cụ dùng để đo hiệu điện thế là gì và phải mắc như thế nào?',
      options: [
        'Vôn kế, mắc SONG SONG với hai điểm cần đo',
        'Ampe kế, mắc nối tiếp',
        'Lực kế, mắc song song',
        'Vôn kế, mắc nối tiếp vào mạch chính',
      ],
      correct_index: 0,
      explanation: 'Vôn kế có điện trở trong rất lớn, bắt buộc phải mắc SONG SONG với hai đầu thiết bị hoặc đoạn mạch cần đo hiệu điện thế.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong đoạn mạch gồm hai bóng đèn mắc NỐI TIẾP ($Đ_1$ nối tiếp $Đ_2$), mối quan hệ về cường độ dòng điện là:',
      options: ['$I = I_1 = I_2$', '$I = I_1 + I_2$', '$I = I_1 - I_2$', '$I_1 = 2 \\cdot I_2$'],
      correct_index: 0,
      explanation: 'Trong đoạn mạch mắc nối tiếp, cường độ dòng điện có giá trị như nhau tại mọi điểm: $I = I_1 = I_2$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong đoạn mạch gồm hai bóng đèn mắc NỐI TIẾP, mối quan hệ về hiệu điện thế là:',
      options: ['$U = U_1 + U_2$', '$U = U_1 = U_2$', '$U = U_1 - U_2$', '$U = U_1 \\cdot U_2$'],
      correct_index: 0,
      explanation: 'Trong mạch nối tiếp, hiệu điện thế toàn mạch bằng tổng các hiệu điện thế hai đầu mỗi tải: $U = U_1 + U_2$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong đoạn mạch gồm hai bóng đèn mắc SONG SONG ($Đ_1$ song song $Đ_2$), mối quan hệ về hiệu điện thế là:',
      options: ['$U = U_1 = U_2$', '$U = U_1 + U_2$', '$U = U_1 / 2$', '$U_1 = 2 \\cdot U_2$'],
      correct_index: 0,
      explanation: 'Trong mạch song song, hiệu điện thế hai đầu mỗi nhánh bằng nhau và bằng hiệu điện thế hai đầu đoạn mạch: $U = U_1 = U_2$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong đoạn mạch gồm hai bóng đèn mắc SONG SONG, mối quan hệ về cường độ dòng điện là:',
      options: ['$I = I_1 + I_2$', '$I = I_1 = I_2$', '$I = I_1 - I_2$', '$I_1 = I_2 = 0$'],
      correct_index: 0,
      explanation: 'Dòng điện mạch chính bằng tổng các dòng điện rẽ vào các mạch nhánh: $I = I_1 + I_2$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Bàn là điện, ấm đun nước điện và bếp từ hoạt động dựa trên tác dụng nào của dòng điện?',
      options: ['Tác dụng nhiệt', 'Tác dụng phát sáng', 'Tác dụng hóa học', 'Tác dụng sinh lý'],
      correct_index: 0,
      explanation: 'Dòng điện chạy qua dây may-so hoặc cuộn dây đốt nóng sinh nhiệt, thể hiện tác dụng nhiệt của dòng điện.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Chuông điện, quạt điện và cần cẩu điện dùng nam châm điện hoạt động dựa trên tác dụng nào của dòng điện?',
      options: ['Tác dụng từ', 'Tác dụng nhiệt', 'Tác dụng hóa học', 'Tác dụng phát quang'],
      correct_index: 0,
      explanation: 'Dòng điện chạy qua cuộn dây sinh ra từ trường hút sắt hoặc làm quay rotor động cơ, là tác dụng từ của dòng điện.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hiện tượng mạ vàng, mạ đồng cho kim loại dựa trên tác dụng nào của dòng điện?',
      options: ['Tác dụng hóa học (điện phân)', 'Tác dụng nhiệt', 'Tác dụng sinh lý', 'Tác dụng cơ học'],
      correct_index: 0,
      explanation: 'Dòng điện chạy qua dung dịch điện phân làm phân ly và kết tủa ion kim loại lên cực catot, là tác dụng hóa học.',
    },

    // 7 thong_hieu
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao các thiết bị điện trong gia đình (bóng đèn, tivi, quạt, tủ lạnh) luôn được mắc SONG SONG với nhau vào nguồn điện $220\\,\\text{V}$?',
      options: [
        'Để các thiết bị hoạt động độc lập (tắt một thiết bị thì các thiết bị khác vẫn chạy bình thường) và đều chịu đúng hiệu điện thế định mức $220\\,\\text{V}$',
        'Để tiết kiệm tiền mua dây điện',
        'Vì mắc nối tiếp dây điện sẽ bị ngắn mạch',
        'Do quy chuẩn thẩm mỹ',
      ],
      correct_index: 0,
      explanation: 'Mắc song song đảm bảo mỗi thiết bị nhận đủ $U = 220\\,\\text{V}$ định mức và có thể đóng ngắt riêng biệt mà không ảnh hưởng tới các nhánh khác.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một học sinh vô ý mắc AMPE KẾ song song trực tiếp vào hai cực của một chiếc ắc quy $12\\,\\text{V}$. Điều gì sẽ xảy ra?',
      options: [
        'Ampe kế bị đoản mạch sinh dòng điện cực lớn làm cháy đứt cuộn dây của ampe kế hoặc nổ ắc quy',
        'Ampe kế chỉ số $0\\,\\text{A}$',
        'Ắc quy bị nạp đầy điện hơn',
        'Không có hiện tượng gì xảy ra',
      ],
      correct_index: 0,
      explanation: 'Ampe kế có điện trở nội cực nhỏ ($R_A \\approx 0$); mắc trực tiếp vào nguồn sẽ gây ngắn mạch hoàn toàn, dòng điện cực đại gây cháy nổ thiết bị đo.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Trong mạch điện gồm hai đèn mắc NỐI TIẾP, nếu bóng đèn $Đ_1$ bị đứt dây tóc thì bóng đèn $Đ_2$ sẽ như thế nào?',
      options: [
        'Đèn $Đ_2$ sẽ bị tắt ngay lập tức vì toàn bộ mạch điện bị hở',
        'Đèn $Đ_2$ sáng chói hơn',
        'Đèn $Đ_2$ vẫn sáng bình thường',
        'Đèn $Đ_2$ bị nổ',
      ],
      correct_index: 0,
      explanation: 'Trong mạch nối tiếp chỉ có một đường dẫn duy nhất; khi một bóng đèn bị đứt tóc, mạch bị hở ngắt dòng điện toàn mạch, đèn còn lại tắt.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tác dụng sinh lý của dòng điện có thể gây nguy hiểm nhưng cũng được ứng dụng tích cực trong y học hiện đại như thế nào?',
      options: [
        'Dùng máy sốc tim điện để cấp cứu tái lập nhịp tim khi tim ngừng đập, và châm cứu điện giảm đau',
        'Dùng để chiếu sáng vết mổ',
        'Dùng để khử trùng vết thương bằng nhiệt',
        'Dùng để đo huyết áp',
      ],
      correct_index: 0,
      explanation: 'Dòng điện kích thích thần kinh và cơ bắp; xung điện sốc tim giúp cứu sống bệnh nhân rung thất, và máy điện châm điều trị phục hồi chức năng cơ bắp.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một vôn kế có thang đo tối đa $12\\,\\text{V}$. Ta có thể dùng vôn kế này để đo trực tiếp hiệu điện thế của ổ cắm điện sinh hoạt gia đình $220\\,\\text{V}$ được không?',
      options: [
        'Tuyệt đối không, vì hiệu điện thế $220\\,\\text{V}$ vượt quá giới hạn đo $12\\,\\text{V}$ sẽ làm kim vôn kế bị gãy và cháy đồng hồ',
        'Được, vôn kế sẽ tự động chuyển thang đo',
        'Được, chỉ cần cắm vào thật nhanh rồi rút ra',
        'Được, vôn kế sẽ hiển thị số 12',
      ],
      correct_index: 0,
      explanation: 'Không bao giờ đo đại lượng vượt quá giới hạn đo (GHĐ) của thiết bị; điện áp $220\\,\\text{V}$ sẽ phá hủy ngay lập tức vôn kế $12\\,\\text{V}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi đưa kim nam châm lại gần một dây dẫn có dòng điện chạy qua, kim nam châm bị lệch khỏi hướng Bắc - Nam ban đầu. Thí nghiệm lịch sử này (thí nghiệm Oersted năm 1820) chứng minh dòng điện có tác dụng gì?',
      options: ['Tác dụng từ', 'Tác dụng nhiệt', 'Tác dụng hóa học', 'Tác dụng quang học'],
      correct_index: 0,
      explanation: 'Thí nghiệm Oersted chứng minh dòng điện sinh ra từ trường trong không gian xung quanh nó, làm lệch hướng kim nam châm thử.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi dòng điện chạy qua dung dịch muối đồng sunfat ($\\text{CuSO}_4$), sau một thời gian ta thấy thỏi than nối với cực âm (catot) được bọc một lớp kim loại màu đỏ. Kim loại màu đỏ đó là gì?',
      options: ['Đồng (Cu)', 'Sắt (Fe)', 'Nhôm (Al)', 'Bạc (Ag)'],
      correct_index: 0,
      explanation: 'Các ion $\\text{Cu}^{2+}$ mang điện tích dương chuyển dịch về cực âm (catot), nhận electron biến thành kim loại đồng ($\text{Cu}$) bám đỏ trên điện cực.',
    },

    // 5 van_dung
    {
      difficulty: 'van_dung',
      question_text: 'Cho mạch điện gồm 2 bóng đèn mắc nối tiếp vào nguồn điện $U = 12\\,\\text{V}$. Dùng vôn kế đo được hiệu điện thế giữa hai đầu đèn $Đ_1$ là $U_1 = 4,5\\,\\text{V}$. Hiệu điện thế giữa hai đầu đèn $Đ_2$ là:',
      options: ['$7,5\\,\\text{V}$', '$16,5\\,\\text{V}$', '$12\\,\\text{V}$', '$4,5\\,\\text{V}$'],
      correct_index: 0,
      explanation: 'Mạch nối tiếp: $U = U_1 + U_2 \\Rightarrow U_2 = U - U_1 = 12 - 4,5 = 7,5\\,\\text{V}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một đoạn mạch gồm 2 bóng đèn mắc song song vào nguồn điện có hiệu điện thế $U = 6\\,\\text{V}$. Dòng điện chạy qua mạch chính đo được $I = 0,9\\,\\text{A}$, dòng điện qua nhánh đèn $Đ_1$ là $I_1 = 0,4\\,\\text{A}$. Cường độ dòng điện qua nhánh đèn $Đ_2$ và hiệu điện thế hai đầu đèn $Đ_2$ là:',
      options: ['$I_2 = 0,5\\,\\text{A}$ và $U_2 = 6\\,\\text{V}$', '$I_2 = 1,3\\,\\text{A}$ và $U_2 = 6\\,\\text{V}$', '$I_2 = 0,5\\,\\text{A}$ và $U_2 = 3\\,\\text{V}$', '$I_2 = 0,9\\,\\text{A}$ và $U_2 = 6\\,\\text{V}$'],
      correct_index: 0,
      explanation: 'Mạch song song: $U_2 = U = 6\\,\\text{V}$. Dòng điện rẽ nhánh: $I = I_1 + I_2 \\Rightarrow I_2 = I - I_1 = 0,9 - 0,4 = 0,5\\,\\text{A}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Cho mạch điện gồm 3 đèn giống nhau mắc nối tiếp vào nguồn điện $U = 9\\,\\text{V}$. Dòng điện qua đèn 1 đo được là $0,25\\,\\text{A}$. Dòng điện qua đèn 3 và hiệu điện thế hai đầu đèn 2 lần lượt là:',
      options: ['$0,25\\,\\text{A}$ và $3\\,\\text{V}$', '$0,75\\,\\text{A}$ và $9\\,\\text{V}$', '$0,25\\,\\text{A}$ và $9\\,\\text{V}$', '$0,083\\,\\text{A}$ và $3\\,\\text{V}$'],
      correct_index: 0,
      explanation: 'Mạch nối tiếp: $I = I_1 = I_2 = I_3 = 0,25\\,\\text{A}$. Vì 3 đèn giống nhau nên điện áp chia đều: $U_1 = U_2 = U_3 = 9 / 3 = 3\\,\\text{V}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một bóng đèn có ghi $6\\,\\text{V} - 0,5\\,\\text{A}$. Muốn bóng đèn này sáng bình thường khi mắc vào nguồn điện $9\\,\\text{V}$ thì người ta phải mắc thêm một điện trở $R$ nối tiếp với bóng đèn. Hiệu điện thế hai đầu điện trở $R$ phải bằng bao nhiêu?',
      options: ['$3\\,\\text{V}$', '$6\\,\\text{V}$', '$15\\,\\text{V}$', '$1,5\\,\\text{V}$'],
      correct_index: 0,
      explanation: 'Để đèn sáng bình thường thì $U_{\\text{đèn}} = 6\\,\\text{V}$. Vì mắc nối tiếp: $U = U_{\\text{đèn}} + U_R \\Rightarrow U_R = 9 - 6 = 3\\,\\text{V}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Dùng một ampe kế có thang chia độ từ $0$ đến $3\\,\\text{A}$, trên mặt đồng hồ có $30$ độ chia nhỏ. Khi mắc vào mạch, kim chỉ ở vạch thứ 18. Cường độ dòng điện đo được là:',
      options: ['$1,8\\,\\text{A}$', '$1,5\\,\\text{A}$', '$2,0\\,\\text{A}$', '$0,6\\,\\text{A}$'],
      correct_index: 0,
      explanation: 'Giá trị mỗi độ chia nhỏ: $\\Delta I = 3 / 30 = 0,1\\,\\text{A}$. Số chỉ của ampe kế: $I = 18 \\times 0,1 = 1,8\\,\\text{A}$.',
    },

    // 3 van_dung_cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Cho một mạch điện gồm 3 bóng đèn $Đ_1, Đ_2, Đ_3$. Đèn $Đ_1$ mắc nối tiếp với cụm gồm ($Đ_2$ mắc song song $Đ_3$). Toàn mạch nối vào nguồn điện có hiệu điện thế $U$. Nếu đèn $Đ_2$ bị cháy đứt dây tóc thì độ sáng của đèn $Đ_1$ và đèn $Đ_3$ sẽ biến đổi như thế nào?',
      options: [
        'Đèn $Đ_1$ sáng yếu đi, đèn $Đ_3$ sáng mạnh hơn',
        'Cả hai đèn $Đ_1$ và $Đ_3$ đều sáng mạnh hơn',
        'Đèn $Đ_1$ tắt hẳn, đèn $Đ_3$ không đổi',
        'Cả hai đèn đều tắt',
      ],
      correct_index: 0,
      explanation: 'Khi $Đ_2$ đứt tóc, điện trở tương đương toàn mạch tăng lên, làm dòng điện mạch chính giảm $\\Rightarrow Đ_1$ sáng yếu đi. Điện áp $U_1 = I \\cdot R_1$ giảm, dẫn đến điện áp đặt vào hai đầu cụm song song $U_{23} = U - U_1$ tăng lên, do đó đèn $Đ_3$ nhận điện áp lớn hơn nên sáng mạnh hơn.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một bình điện phân chứa dung dịch đồng sunfat với hai điện cực bằng đồng. Cho dòng điện không đổi $I = 5\\,\\text{A}$ chạy qua bình trong thời gian $16\\,\\text{phút}\\,5\\,\\text{giây}$. Biết đương lượng điện hóa của đồng là $k \\approx 3,29 \\times 10^{-7}\\,\\text{kg/C}$. Khối lượng đồng bám vào catot là:',
      options: ['$1,587\\,\\text{g}$', '$3,174\\,\\text{g}$', '$0,794\\,\\text{g}$', '$2,450\\,\\text{g}$'],
      correct_index: 0,
      explanation: 'Thời gian: $t = 16 \\times 60 + 5 = 965\\,\\text{s}$. Điện lượng: $q = I \\cdot t = 5 \\times 965 = 4825\\,\\text{C}$. Khối lượng đồng theo định luật Faraday: $m = k \\cdot q = (3,29 \\times 10^{-7}) \\times 4825 \\approx 1,587 \\times 10^{-3}\\,\\text{kg} = 1,587\\,\\text{g}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một mạng điện trang trí Giáng sinh gồm 50 bóng đèn LED nhỏ giống nhau mắc nối tiếp vào nguồn điện $220\\,\\text{V}$. Biết mỗi bóng đèn LED khi hoạt động bình thường cần hiệu điện thế $3\\,\\text{V}$. Nhận xét nào sau đây về chế độ hoạt động của chuỗi đèn LED là chính xác?',
      options: [
        'Mỗi đèn chỉ nhận hiệu điện thế $4,4\\,\\text{V}$ (cao hơn $3\\,\\text{V}$ một chút) nên cần có thêm điện trở hạn dòng hoặc mạch nắn dòng để bảo vệ LED không bị quá nhiệt cháy hỏng',
        'Đèn LED sẽ không sáng vì điện áp quá thấp',
        'Mỗi đèn nhận đúng $220\\,\\text{V}$',
        'Mạch điện bị chập điện ngay tức khắc',
      ],
      correct_index: 0,
      explanation: 'Khi 50 đèn mắc nối tiếp: $U_{\\text{mỗi đèn}} = 220 / 50 = 4,4\\,\\text{V}$. Mức $4,4\\,\\text{V} > 3\\,\\text{V}$ sẽ gây quá dòng phá hủy LED nếu không có linh kiện hạn dòng bảo vệ.',
    },
  ],

  // =========================================================================
  // G8-CH4-TP1: Năng lượng nhiệt và Nội năng của vật (25 questions)
  // =========================================================================
  'G8-CH4-TP1': [
    // 10 nhan_biet
    {
      difficulty: 'nhan_biet',
      question_text: 'Các nguyên tử, phân tử cấu tạo nên các chất có đặc điểm chuyển động như thế nào?',
      options: [
        'Chuyển động hỗn loạn không ngừng về mọi hướng gọi là chuyển động nhiệt',
        'Đứng yên tuyệt đối trong chất rắn',
        'Chỉ chuyển động khi có gió thổi',
        'Chỉ chuyển động theo một đường thẳng duy nhất',
      ],
      correct_index: 0,
      explanation: 'Các nguyên tử, phân tử luôn chuyển động hỗn loạn không ngừng, chuyển động này gọi là chuyển động nhiệt.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi nhiệt độ của một vật tăng lên thì chuyển động nhiệt của các phân tử cấu tạo nên vật sẽ:',
      options: ['Chuyển động nhanh hơn', 'Chuyển động chậm dần', 'Dừng lại hoàn toàn', 'Không thay đổi tốc độ'],
      correct_index: 0,
      explanation: 'Nhiệt độ tỉ lệ thuận với động năng phân tử: nhiệt độ càng cao thì các phân tử chuyển động càng nhanh.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Năng lượng nhiệt của một vật là gì?',
      options: [
        'Tổng động năng của các phân tử cấu tạo nên vật',
        'Trọng lực tác dụng lên vật',
        'Năng lượng ánh sáng vật phát ra',
        'Năng lượng điện trường bên trong vật',
      ],
      correct_index: 0,
      explanation: 'Năng lượng nhiệt của một vật là tổng động năng chuyển động nhiệt hỗn loạn của toàn bộ các phân tử cấu tạo nên vật.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Nội năng của một vật bao gồm những dạng năng lượng nào sau đây?',
      options: [
        'Tổng động năng của các phân tử và thế năng tương tác giữa các phân tử cấu tạo nên vật',
        'Cơ năng chuyển động của toàn bộ vật thể',
        'Năng lượng hạt nhân nguyên tử',
        'Hóa năng của các liên kết hóa học',
      ],
      correct_index: 0,
      explanation: 'Nội năng là tổng động năng chuyển động nhiệt của các phân tử cấu tạo nên vật và thế năng tương tác giữa chúng.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Có mấy cách làm biến đổi nội năng của một vật?',
      options: [
        'Có hai cách: Thực hiện công và Truyền nhiệt',
        'Chỉ có một cách duy nhất là đun nóng',
        'Có ba cách: Nén, kéo dãn và chiếu sáng',
        'Có bốn cách',
      ],
      correct_index: 0,
      explanation: 'Nội năng có thể biến đổi bằng 2 phương thức: Thực hiện công (có sự chuyển hóa cơ năng thành nội năng) hoặc Truyền nhiệt (chỉ có sự truyền nội năng).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Phần nội năng mà vật nhận thêm được hoặc mất bớt đi trong quá trình truyền nhiệt gọi là gì?',
      options: ['Nhiệt lượng ($Q$)', 'Nhiệt năng', 'Nhiệt dung riêng', 'Nhiệt độ'],
      correct_index: 0,
      explanation: 'Nhiệt lượng là số đo phần nội năng tăng thêm hoặc giảm đi trong quá trình truyền nhiệt, ký hiệu là $Q$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị đo nhiệt lượng và nội năng trong hệ SI là gì?',
      options: ['Joule (J)', 'Oát (W)', 'Độ Celsius ($^\\circ\\text{C}$)', 'Pascal (Pa)'],
      correct_index: 0,
      explanation: 'Nhiệt lượng và nội năng là các dạng năng lượng nên có đơn vị chuẩn SI là Joule (J).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Quy đổi đơn vị năng lượng nhiệt: $1\\,\\text{calo (cal)}$ tương đương khoảng bao nhiêu Joule (J)?',
      options: ['$4,186\\,\\text{J}$', '$1000\\,\\text{J}$', '$0,24\\,\\text{J}$', '$10\\,\\text{J}$'],
      correct_index: 0,
      explanation: '$1\\,\\text{cal} \\approx 4,186\\,\\text{J}$ (hoặc $1\\,\\text{J} \\approx 0,24\\,\\text{cal}$).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hiện tượng nào sau đây là ví dụ về làm thay đổi nội năng bằng cách THỰC HIỆN CÔNG?',
      options: [
        'Cọ xát hai bàn tay vào nhau làm tay ấm lên',
        'Thả thìa nhôm vào cốc nước nóng',
        'Phơi quần áo ướt dưới ánh nắng mặt trời',
        'Để thanh sắt ngoài trời nắng nóng',
      ],
      correct_index: 0,
      explanation: 'Cọ xát hai bàn tay có lực ma sát sinh công chuyển hóa cơ năng thành nội năng, là hình thức thực hiện công.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hiện tượng nào sau đây là ví dụ về làm thay đổi nội năng bằng cách TRUYỀN NHIỆT?',
      options: [
        'Nhúng một thanh đồng nguội vào một bát nước sôi',
        'Dùng búa đập liên tục vào đầu thanh sắt',
        'Dùng cưa cưa gỗ làm lưỡi cưa nóng lên',
        'Mài dao trên đá mài',
      ],
      correct_index: 0,
      explanation: 'Nhúng thanh đồng vào nước sôi: nhiệt tự truyền từ nước nóng sang thanh đồng do chênh lệch nhiệt độ mà không có công cơ học tác dụng.',
    },

    // 7 thong_hieu
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi bơm lốp xe đạp bằng bơm tay, sau một lúc ta thấy thân ống bơm bị nóng lên. Nguyên nhân chính của hiện tượng này là gì?',
      options: [
        'Do ma sát giữa piston và thành xilanh và do công nén khí bên trong sinh ra chuyển hóa thành nội năng',
        'Do ánh nắng mặt trời chiếu vào ống bơm',
        'Do không khí bên ngoài tràn vào quá nóng',
        'Do bàn tay người bơm truyền nhiệt vào',
      ],
      correct_index: 0,
      explanation: 'Cơ bắp người thực hiện công nén khí và thắng lực ma sát của piston; công này chuyển hóa thành nội năng làm xilanh nóng lên.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao khi nhỏ một giọt mực tím vào cốc nước nóng thì mực khuếch tán lan đều nhanh hơn nhiều so với khi nhỏ vào cốc nước lạnh?',
      options: [
        'Vì trong nước nóng các phân tử nước chuyển động nhiệt với vận tốc lớn hơn, va chạm làm các phân tử mực phân tán nhanh hơn',
        'Vì nước nóng có khối lượng riêng lớn hơn',
        'Vì nước nóng làm mực nhẹ hơn nổi lên',
        'Vì mực bị bay hơi ngay lập tức',
      ],
      correct_index: 0,
      explanation: 'Nhiệt độ cao làm tăng tốc độ chuyển động nhiệt hỗn loạn của phân tử, thúc đẩy hiện tượng khuếch tán diễn ra nhanh chóng.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một vật có khối lượng $1\\,\\text{kg}$ đang đứng yên trên sàn nhà. Khẳng định nào sau đây là ĐÚNG về năng lượng của vật?',
      options: [
        'Vật có động năng bằng 0 đối với mặt sàn, nhưng các phân tử bên trong vật vẫn chuyển động nhiệt không ngừng nên vật luôn có nội năng',
        'Vật không có bất kỳ dạng năng lượng nào',
        'Vật chỉ có cơ năng',
        'Vật không có nội năng vì đang đứng yên',
      ],
      correct_index: 0,
      explanation: 'Cơ năng chuyển động vĩ mô bằng 0, nhưng vi mô các phân tử luôn chuyển động nhiệt nên vật thể ở bất kỳ nhiệt độ nào trên $0\\,\\text{K}$ đều có nội năng.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Xoa hai bàn tay vào nhau rồi áp lên má ta thấy má ấm lên. Trong hiện tượng này đã diễn ra các quá trình biến đổi nội năng nào?',
      options: [
        'Lúc xoa tay là thực hiện công; lúc áp tay lên má là truyền nhiệt',
        'Cả hai giai đoạn đều là truyền nhiệt',
        'Cả hai giai đoạn đều là thực hiện công',
        'Chỉ có quá trình biến đổi hóa học',
      ],
      correct_index: 0,
      explanation: 'Giai đoạn 1: cọ xát hai bàn tay thực hiện công biến cơ năng thành nội năng; Giai đoạn 2: áp bàn tay nóng lên má mát hơn là quá trình truyền nhiệt.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi thả một miếng kim loại nóng vào một bình cách nhiệt chứa nước lạnh, sự truyền nhiệt giữa chúng sẽ dừng lại khi nào?',
      options: [
        'Khi nhiệt độ của miếng kim loại và nước đạt trạng thái cân bằng nhiệt (bằng nhau)',
        'Khi toàn bộ nhiệt lượng của miếng kim loại bị mất hết',
        'Khi nước bắt đầu sôi',
        'Sau đúng 5 phút',
      ],
      correct_index: 0,
      explanation: 'Theo nguyên lý truyền nhiệt: Quá trình truyền nhiệt tự phát chỉ diễn ra khi có chênh lệch nhiệt độ và sẽ dừng lại khi đạt trạng thái cân bằng nhiệt ($t_{\\text{kim loại}} = t_{\\text{nước}}$).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khí gas được nén ở áp suất rất cao trong bình xịt côn trùng. Khi bấm van xịt liên tục trong vài chục giây, ta sờ vào đáy bình thấy rất lạnh buốt. Tại sao?',
      options: [
        'Chất khí bên trong dãn nở sinh công đẩy khí ra ngoài, làm nội năng của khối khí giảm đi dẫn đến nhiệt độ giảm mạnh',
        'Do thuốc xịt là chất làm đông',
        'Do vỏ bình phản ứng với ngón tay',
        'Do không khí bên ngoài bị ngưng tụ',
      ],
      correct_index: 0,
      explanation: 'Khi khí dãn nở nhanh, nó thực hiện công chống lại áp suất khí quyển; năng lượng lấy từ nội năng của khối khí làm nhiệt độ bình tụt sâu.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'So sánh nội năng của $1\\,\\text{kg}$ nước ở $20^\\circ\\text{C}$ và $1\\,\\text{kg}$ nước ở $80^\\circ\\text{C}$:',
      options: [
        'Nước ở $80^\\circ\\text{C}$ có nội năng lớn hơn vì nhiệt độ cao hơn làm các phân tử nước chuyển động nhiệt nhanh hơn',
        'Nước ở $20^\\circ\\text{C}$ có nội năng lớn hơn',
        'Cả hai có nội năng bằng nhau vì cùng là 1 kg nước',
        'Không thể so sánh được',
      ],
      correct_index: 0,
      explanation: 'Cùng khối lượng và thể tích tương đương, mẫu vật ở nhiệt độ cao hơn sẽ có động năng phân tử trung bình lớn hơn, do đó nội năng lớn hơn.',
    },

    // 5 van_dung
    {
      difficulty: 'van_dung',
      question_text: 'Một vật nhận một nhiệt lượng $Q = 800\\,\\text{J}$ từ môi trường và đồng thời môi trường tác dụng một công $A = 500\\,\\text{J}$ nén vật. Độ biến thiên nội năng $\\Delta U$ của vật là:',
      options: ['$+1300\\,\\text{J}$', '$+300\\,\\text{J}$', '$-300\\,\\text{J}$', '$+800\\,\\text{J}$'],
      correct_index: 0,
      explanation: 'Theo định luật bảo toàn năng lượng: $\\Delta U = A + Q = 500 + 800 = +1300\\,\\text{J}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một khối khí trong xilanh nhận nhiệt lượng $Q = 1200\\,\\text{J}$ từ ngọn lửa đèn cồn, dãn nở đẩy piston sinh một công cơ học $A\' = 700\\,\\text{J}$ ra môi trường ngoài. Độ tăng nội năng của khối khí là:',
      options: ['$500\\,\\text{J}$', '$1900\\,\\text{J}$', '$-500\\,\\text{J}$', '$1200\\,\\text{J}$'],
      correct_index: 0,
      explanation: 'Độ biến thiên nội năng: $\\Delta U = Q - A\' = 1200 - 700 = 500\\,\\text{J}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một thanh sắt có khối lượng $m = 2\\,\\text{kg}$ rơi tự do từ độ cao $h = 20\\,\\text{m}$ xuống đất mềm và cắm chặt vào đất rồi dừng lại. Lấy $g = 10\\,\\text{m/s}^2$. Bỏ qua lực cản không khí, giả sử toàn bộ thế năng chuyển hóa thành nội năng làm nóng thanh sắt. Nhiệt lượng thanh sắt nhận được xấp xỉ bằng:',
      options: ['$400\\,\\text{J}$', '$40\\,\\text{J}$', '$200\\,\\text{J}$', '$800\\,\\text{J}$'],
      correct_index: 0,
      explanation: 'Thế năng ban đầu: $W_t = m \\cdot g \\cdot h = 2 \\times 10 \\times 20 = 400\\,\\text{J}$. Khi dừng lại, toàn bộ cơ năng chuyển thành nhiệt năng làm tăng nội năng: $Q = 400\\,\\text{J}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một khẩu phần ăn chứa năng lượng dinh dưỡng là $250\\,\\text{kcal}$. Quy đổi lượng năng lượng này sang đơn vị Joule (J) trong hệ SI ta được giá trị xấp xỉ là:',
      options: ['$1\\,046\\,500\\,\\text{J}$ ($1046,5\\,\\text{kJ}$)', '$250\\,000\\,\\text{J}$', '$59\\,700\\,\\text{J}$', '$4\\,186\\,000\\,\\text{J}$'],
      correct_index: 0,
      explanation: '$250\\,\\text{kcal} = 250\\,000\\,\\text{cal} = 250\\,000 \\times 4,186\\,\\text{J} = 1\\,046\\,500\\,\\text{J} = 1046,5\\,\\text{kJ}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Thả một miếng chì nặng $500\\,\\text{g}$ được nung nóng ở $100^\\circ\\text{C}$ vào một bình nước chứa $200\\,\\text{g}$ nước ở $20^\\circ\\text{C}$. Bỏ qua trao đổi nhiệt với môi trường. Khi đạt cân bằng nhiệt ở $25^\\circ\\text{C}$, biết nhiệt dung riêng của nước là $c_{\\text{nước}} = 4200\\,\\text{J/(kg}\\cdot\\text{K)}$. Nhiệt lượng do miếng chì tỏa ra là:',
      options: ['$4200\\,\\text{J}$', '$2100\\,\\text{J}$', '$8400\\,\\text{J}$', '$1050\\,\\text{J}$'],
      correct_index: 0,
      explanation: 'Nhiệt lượng nước thu vào bằng nhiệt lượng chì tỏa ra: $Q_{\\text{tỏa}} = Q_{\\text{thu}} = m_{\\text{nước}} \\cdot c_{\\text{nước}} \\cdot (t_{\\text{cb}} - t_{\\text{nước}}) = 0,2 \\times 4200 \\times (25 - 20) = 4200\\,\\text{J}$.',
    },

    // 3 van_dung_cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một viên đạn chì có khối lượng $m = 10\\,\\text{g}$ đang bay với vận tốc $v = 300\\,\\text{m/s}$ cắm sâu vào một khúc gỗ dày cố định và dừng lại. Giả sử $80\\%$ động năng của viên đạn chuyển hóa thành nội năng làm nóng viên đạn. Biết nhiệt dung riêng của chì là $c = 130\\,\\text{J/(kg}\\cdot\\text{K)}$. Độ tăng nhiệt độ $\\Delta t$ của viên đạn chì là:',
      options: ['$276,9^\\circ\\text{C}$', '$346,2^\\circ\\text{C}$', '$138,5^\\circ\\text{C}$', '$69,2^\\circ\\text{C}$'],
      correct_index: 0,
      explanation: 'Động năng viên đạn: $W_đ = \\frac{1}{2} m v^2 = 0,5 \\times 0,01 \\times 300^2 = 450\\,\\text{J}$. Nhiệt lượng làm nóng chì: $Q = 0,8 \\times 450 = 360\\,\\text{J}$. Ta có $Q = m \\cdot c \\cdot \\Delta t \\Rightarrow \\Delta t = Q / (m \\cdot c) = 360 / (0,01 \\times 130) \\approx 276,9^\\circ\\text{C}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Thí nghiệm nổi tiếng của James Prescott Joule dùng quả nặng rơi làm quay các cánh quạt khuấy nước trong bình nhiệt lượng kế cách nhiệt nhằm mục đích gì?',
      options: [
        'Xác định đương lượng cơ của nhiệt (mối liên hệ định lượng giữa công cơ học $A$ và nhiệt lượng $Q$ sinh ra)',
        'Đo khối lượng riêng của nước',
        'Chứng minh nước không dẫn nhiệt',
        'Tạo ra dòng điện từ nước',
      ],
      correct_index: 0,
      explanation: 'Thí nghiệm của Joule đo độ giảm thế năng cơ học và độ tăng nhiệt độ của nước, chứng minh công và nhiệt là hai hình thức tương đương của năng lượng ($1\\,\\text{cal} \\approx 4,18\\,\\text{J}$).',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một bình kín chứa $2\\,\\text{mol}$ khí lý tưởng đơn nguyên tử ở nhiệt độ $300\\,\\text{K}$. Để tăng nhiệt độ của khối khí lên $400\\,\\text{K}$ bằng cách nung nóng đẳng tích, người ta cần cung cấp một nhiệt lượng bằng bao nhiêu? Biết nội năng khí đơn nguyên tử là $U = \\frac{3}{2} n R T$ với $R = 8,31\\,\\text{J/(mol}\\cdot\\text{K)}$.',
      options: ['$2493\\,\\text{J}$', '$1662\\,\\text{J}$', '$3740\\,\\text{J}$', '$1246,5\\,\\text{J}$'],
      correct_index: 0,
      explanation: 'Vì thể tích không đổi nên công $A = 0$, nhiệt lượng $Q = \\Delta U = \\frac{3}{2} n R \\Delta T = 1,5 \\times 2 \\times 8,31 \\times (400 - 300) = 2493\\,\\text{J}$.',
    },
  ],

  // =========================================================================
  // G8-CH4-TP2: Các hình thức truyền nhiệt (Dẫn nhiệt, Đối lưu, Bức xạ) (25 questions)
  // =========================================================================
  'G8-CH4-TP2': [
    // 10 nhan_biet
    {
      difficulty: 'nhan_biet',
      question_text: 'Có mấy hình thức truyền nhiệt chủ yếu trong tự nhiên?',
      options: [
        'Ba hình thức: Dẫn nhiệt, Đối lưu và Bức xạ nhiệt',
        'Hai hình thức: Nóng và Lạnh',
        'Một hình thức duy nhất là Dẫn nhiệt',
        'Bốn hình thức',
      ],
      correct_index: 0,
      explanation: 'Ba hình thức truyền nhiệt cơ bản là: Dẫn nhiệt, Đối lưu và Bức xạ nhiệt.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Dẫn nhiệt là hình thức truyền nhiệt chủ yếu của thể chất nào sau đây?',
      options: ['Chất rắn (đặc biệt là kim loại)', 'Chất lỏng', 'Chất khí', 'Chân không'],
      correct_index: 0,
      explanation: 'Dẫn nhiệt truyền năng lượng qua va chạm trực tiếp giữa các phân tử liền kề, là hình thức truyền nhiệt chủ yếu của chất rắn.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong các vật liệu sau, vật liệu nào dẫn nhiệt TỐT NHẤT?',
      options: ['Đồng', 'Gỗ', 'Thủy tinh', 'Không khí'],
      correct_index: 0,
      explanation: 'Kim loại (đồng, nhôm, bạc, sắt) dẫn nhiệt tốt nhất; gỗ, thủy tinh, không khí là chất cách nhiệt.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đối lưu là hình thức truyền nhiệt chủ yếu của môi trường nào?',
      options: ['Chất lỏng và chất khí (chất lưu)', 'Chất rắn', 'Chân không', 'Kim loại đặc'],
      correct_index: 0,
      explanation: 'Đối lưu là sự truyền nhiệt bằng các dòng chất lỏng hoặc chất khí dịch chuyển tuần hoàn.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong môi trường CHÂN KHÔNG (không gian vũ trụ), nhiệt năng có thể truyền đi bằng hình thức nào?',
      options: [
        'Chỉ bằng Bức xạ nhiệt',
        'Bằng Dẫn nhiệt',
        'Bằng Đối lưu',
        'Nhiệt không thể truyền được trong chân không',
      ],
      correct_index: 0,
      explanation: 'Chân không không có vật chất phân tử nên không thể dẫn nhiệt hay đối lưu; nhiệt truyền trong chân không hoàn toàn bằng sóng điện từ bức xạ nhiệt.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Vật thể có bề mặt như thế nào thì hấp thụ bức xạ nhiệt và phát xạ nhiệt TỐT NHẤT?',
      options: [
        'Bề mặt sẫm màu (màu đen) và xù xì, gồ ghề',
        'Bề mặt sáng màu (màu trắng) và nhẵn bóng',
        'Bề mặt tráng gương',
        'Bề mặt trong suốt',
      ],
      correct_index: 0,
      explanation: 'Bề mặt sẫm màu, gồ ghề hấp thụ và bức xạ nhiệt tốt nhất; bề mặt sáng màu nhẵn bóng phản xạ tia nhiệt tốt.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Năng lượng nhiệt từ Mặt Trời truyền qua khoảng không vũ trụ xuống Trái Đất bằng hình thức nào?',
      options: ['Bức xạ nhiệt', 'Dẫn nhiệt', 'Đối lưu', 'Dòng hạt electron'],
      correct_index: 0,
      explanation: 'Khoảng không giữa Mặt Trời và Trái Đất là chân không, nên năng lượng truyền xuống Trái Đất bằng bức xạ nhiệt (tia hồng ngoại, ánh sáng).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Chất nào sau đây có khả năng dẫn nhiệt KÉM NHẤT?',
      options: ['Không khí khô', 'Nước', 'Nhôm', 'Sắt'],
      correct_index: 0,
      explanation: 'Chất khí (như không khí) có khoảng cách phân tử rất xa nhau nên dẫn nhiệt kém nhất trong các thể chất.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Lớp bạc sáng bóng tráng ở mặt trong ruột phích nước có tác dụng gì?',
      options: [
        'Phản xạ các tia bức xạ nhiệt trở lại vào bên trong, ngăn thất thoát nhiệt do bức xạ',
        'Để soi gương',
        'Để khử trùng nước',
        'Để làm phích nặng hơn',
      ],
      correct_index: 0,
      explanation: 'Bề mặt tráng bạc phản xạ tia nhiệt hồng ngoại trở lại lòng phích, triệt tiêu sự truyền nhiệt bằng bức xạ.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi đun nước trong ấm, dòng đối lưu dịch chuyển theo quy luật nào?',
      options: [
        'Lớp nước nóng ở đáy nhẹ hơn nổi lên, lớp nước lạnh ở trên nặng hơn chìm xuống',
        'Lớp nước nóng chìm xuống đáy',
        'Nước dịch chuyển sang hai bên thành ấm',
        'Nước đứng yên không dịch chuyển',
      ],
      correct_index: 0,
      explanation: 'Nước nóng dãn nở, khối lượng riêng giảm nên nhẹ hơn nổi lên; nước lạnh nặng hơn chìm xuống tạo thành dòng đối lưu.',
    },

    // 7 thong_hieu
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao máy điều hòa nhiệt độ làm mát phòng luôn được lắp đặt ở vị trí trên cao gần trần nhà, còn máy sưởi ấm lại được đặt sát sàn nhà?',
      options: [
        'Để tạo dòng đối lưu tự nhiên: không khí lạnh nặng chìm xuống làm mát cả phòng; không khí nóng nhẹ bốc lên sưởi ấm cả phòng',
        'Để tránh va quẹt với con người',
        'Để tiết kiệm dây điện nối',
        'Do quy chuẩn lắp ráp của nhà sản xuất',
      ],
      correct_index: 0,
      explanation: 'Khí lạnh có khối lượng riêng lớn nên tự chìm xuống đáy phòng; khí nóng nhẹ hơn nên nổi lên trần. Lắp đúng vị trí giúp dòng đối lưu tự nhiên luân chuyển khí đều khắp phòng.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao vào mùa hè mặc áo màu trắng hoặc sáng màu lại cảm thấy mát hơn mặc áo màu đen sẫm?',
      options: [
        'Vải màu trắng phản xạ phần lớn các tia bức xạ nhiệt từ Mặt Trời, hấp thụ ít nhiệt lượng hơn vải màu đen',
        'Vải trắng mỏng hơn vải đen',
        'Vải trắng thoát mồ hôi tốt hơn',
        'Vải trắng ngăn cản dẫn nhiệt tốt hơn',
      ],
      correct_index: 0,
      explanation: 'Màu sáng phản xạ bức xạ nhiệt tốt, ít hấp thụ nhiệt; màu đen hấp thụ gần như toàn bộ bức xạ nhiệt của Mặt Trời làm người mặc nóng bức.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao vào mùa đông khi sờ tay vào một thanh kim loại ta cảm thấy lạnh buốt hơn nhiều so với khi sờ vào một khúc gỗ, mặc dù cả hai đều ở cùng nhiệt độ phòng $15^\\circ\\text{C}$?',
      options: [
        'Vì kim loại dẫn nhiệt rất tốt, nhanh chóng truyền nhiệt lượng từ bàn tay ta ra ngoài; còn gỗ dẫn nhiệt kém nên tay mất ít nhiệt',
        'Vì nhiệt độ thực tế của thanh kim loại thấp hơn khúc gỗ',
        'Vì kim loại có nhiều electron tự do hút lạnh',
        'Do cảm giác chủ quan của thần kinh thị giác',
      ],
      correct_index: 0,
      explanation: 'Cả hai cùng nhiệt độ phòng nhưng kim loại dẫn nhiệt nhanh làm nhiệt lượng từ tay truyền sang thanh kim loại cực nhanh, tạo cảm giác lạnh buốt.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao các bồn chứa xăng dầu lớn đặt ngoài trời luôn được sơn màu trắng hoặc màu bạc sáng bóng?',
      options: [
        'Để phản xạ bức xạ nhiệt Mặt Trời, hạn chế hấp thụ nhiệt làm nóng xăng dầu gây nguy cơ bốc cháy nổ',
        'Để dễ nhìn thấy khi trời tối',
        'Để chống rỉ sét tốt hơn màu sơn khác',
        'Do giá sơn màu trắng rẻ hơn',
      ],
      correct_index: 0,
      explanation: 'Màu bạc phản xạ tối đa bức xạ nhiệt hồng ngoại từ ánh nắng mặt trời, giữ cho nhiệt độ bên trong bồn chứa luôn ở mức an toàn.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao mặc nhiều lớp áo mỏng vào mùa đông lại ấm hơn mặc một chiếc áo dày có cùng khối lượng vải?',
      options: [
        'Vì giữa các lớp áo mỏng có giữ các lớp không khí tĩnh; không khí tĩnh là chất dẫn nhiệt cực kỳ kém giúp giữ ấm cơ thể',
        'Vì nhiều áo mỏng cản gió tốt hơn',
        'Vì nhiều lớp áo cọ xát sinh ra điện tích sưởi ấm',
        'Do áp lực của nhiều áo ép chặt cơ thể',
      ],
      correct_index: 0,
      explanation: 'Không khí đứng yên là một trong những chất cách nhiệt tự nhiên tốt nhất; các lớp áo bẫy nhiều lớp không khí tĩnh ngăn nhiệt lượng cơ thể truyền ra ngoài.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Cấu tạo vỏ bình giữ nhiệt (phích nước) ngăn chặn 3 hình thức truyền nhiệt như thế nào?',
      options: [
        'Lớp chân không ngăn dẫn nhiệt và đối lưu; lớp tráng bạc phản xạ ngăn bức xạ nhiệt; nút bấc xốp đậy kín ngăn đối lưu và dẫn nhiệt',
        'Chỉ ngăn dẫn nhiệt',
        'Nhờ có chất làm lạnh bên trong',
        'Nhờ dùng pin sưởi ấm',
      ],
      correct_index: 0,
      explanation: 'Khoảng chân không giữa hai lớp thủy tinh loại bỏ hoàn toàn dẫn nhiệt và đối lưu; bề mặt tráng bạc phản xạ tia bức xạ nhiệt hồng ngoại; nút bấc gỗ xốp ngăn đối lưu khí thoát ra.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi đốt ngọn nến, ta để tay ở vị trí nào xung quanh ngọn nến thì cảm thấy nóng nhất?',
      options: [
        'Ở phía trên thẳng đứng ngọn nến (cùng khoảng cách)',
        'Ở phía bên cạnh ngọn nến',
        'Ở phía dưới chân ngọn nến',
        'Ở mọi vị trí đều nóng như nhau',
      ],
      correct_index: 0,
      explanation: 'Ở phía trên ngọn nến vừa nhận được bức xạ nhiệt lại vừa nhận được dòng đối lưu của luồng khí nóng bốc thẳng lên cao, nên nóng nhất.',
    },

    // 5 van_dung
    {
      difficulty: 'van_dung',
      question_text: 'Một thanh dẫn nhiệt bằng nhôm có chiều dài $L = 0,5\\,\\text{m}$, tiết diện $S = 4\\,\\text{cm}^2 = 4 \\times 10^{-4}\\,\\text{m}^2$. Hệ số dẫn nhiệt của nhôm là $k = 200\\,\\text{W/(m}\\cdot\\text{K)}$. Chênh lệch nhiệt độ giữa hai đầu thanh là $\\Delta t = 50^\\circ\\text{C}$. Nhiệt lượng truyền qua thanh trong thời gian $1\\,\\text{phút}$ là:',
      options: ['$480\\,\\text{J}$', '$8\\,\\text{J}$', '$4800\\,\\text{J}$', '$240\\,\\text{J}$'],
      correct_index: 0,
      explanation: 'Công suất truyền nhiệt: $P = k \\cdot S \\cdot \\frac{\\Delta t}{L} = 200 \\times (4 \\times 10^{-4}) \\times \\frac{50}{0,5} = 8\\,\\text{W}$. Nhiệt lượng trong $1\\,\\text{phút} = 60\\,\\text{s}$: $Q = P \\cdot t = 8 \\times 60 = 480\\,\\text{J}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một tấm kính cửa sổ có diện tích $2\\,\\text{m}^2$ và bề dày $5\\,\\text{mm} = 0,005\\,\\text{m}$. Hệ số dẫn nhiệt của thủy tinh là $k = 0,8\\,\\text{W/(m}\\cdot\\text{K)}$. Vào mùa đông, nhiệt độ mặt trong kính là $20^\\circ\\text{C}$ và mặt ngoài là $5^\\circ\\text{C}$. Nhiệt lượng thất thoát qua cửa kính trong $1\\,\\text{giờ}$ là:',
      options: ['$17\\,280\\,000\\,\\text{J}$ ($17,28\\,\\text{MJ}$)', '$4800\\,\\text{J}$', '$288\\,000\\,\\text{J}$', '$1\\,728\\,000\\,\\text{J}$'],
      correct_index: 0,
      explanation: 'Công suất truyền nhiệt: $P = k \\cdot S \\cdot \\frac{\\Delta t}{d} = 0,8 \\times 2 \\times \\frac{15}{0,005} = 4800\\,\\text{W}$. Nhiệt lượng mất đi trong $1\\,\\text{h} = 3600\\,\\text{s}$: $Q = 4800 \\times 3600 = 17\\,280\\,000\\,\\text{J} = 17,28\\,\\text{MJ}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Để giảm $80\\%$ lượng nhiệt thất thoát qua cửa sổ, giải pháp kỹ thuật nào sau đây là hiệu quả nhất?',
      options: [
        'Sử dụng cửa sổ kính hộp 2 lớp ở giữa có lớp khí trơ (Argon) hoặc hút chân không',
        'Sơn kính màu đen',
        'Mở toang cửa sổ',
        'Lau kính thật sạch',
      ],
      correct_index: 0,
      explanation: 'Kính hộp 2 lớp cách nhau bằng lớp khí trơ hoặc chân không triệt tiêu dẫn nhiệt và đối lưu, giảm tới $80\\%$ thất thoát nhiệt.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một bình giữ nhiệt bằng thép không gỉ chứa $500\\,\\text{g}$ nước sôi ở $100^\\circ\\text{C}$. Sau $6\\,\\text{giờ}$, nhiệt độ nước trong bình giảm xuống còn $70^\\circ\\text{C}$. Biết nhiệt dung riêng của nước là $c = 4200\\,\\text{J/(kg}\\cdot\\text{K)}$. Công suất thất thoát nhiệt trung bình của bình giữ nhiệt là:',
      options: ['$2,92\\,\\text{W}$', '$10,5\\,\\text{W}$', '$17,5\\,\\text{W}$', '$63\\,000\\,\\text{W}$'],
      correct_index: 0,
      explanation: 'Nhiệt lượng mất đi: $Q = m \\cdot c \\cdot \\Delta t = 0,5 \\times 4200 \\times (100 - 70) = 63\\,000\\,\\text{J}$. Thời gian: $t = 6 \\times 3600 = 21\\,600\\,\\text{s}$. Công suất thất thoát: $P = Q / t = 63000 / 21600 \\approx 2,917\\,\\text{W}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một tấm pin năng lượng mặt trời có diện tích $1,5\\,\\text{m}^2$ nhận bức xạ nhiệt Mặt Trời với cường độ $800\\,\\text{W/m}^2$. Hiệu suất biến đổi quang điện thành điện năng là $20\\%$. Công suất điện mà tấm pin tạo ra là:',
      options: ['$240\\,\\text{W}$', '$1200\\,\\text{W}$', '$160\\,\\text{W}$', '$360\\,\\text{W}$'],
      correct_index: 0,
      explanation: 'Tổng công suất bức xạ tới: $P_{\\text{tổng}} = 800 \\times 1,5 = 1200\\,\\text{W}$. Công suất điện thu được: $P_{\\text{điện}} = 1200 \\times 20\\% = 240\\,\\text{W}$.',
    },

    // 3 van_dung_cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Định luật bức xạ Stefan - Boltzmann phát biểu rằng công suất phát xạ nhiệt toàn phần của một vật đen tuyệt đối tỉ lệ thuận với lũy thừa bậc 4 của nhiệt độ tuyệt đối: $P = \\sigma \\cdot S \\cdot T^4$. Nếu nhiệt độ Kelvin của một vật tăng từ $300\\,\\text{K}$ lên $600\\,\\text{K}$ (tăng gấp đôi) thì công suất bức xạ nhiệt của nó sẽ tăng lên bao nhiêu lần?',
      options: ['$16\\,\\text{lần}$', '$2\\,\\text{lần}$', '$4\\,\\text{lần}$', '$8\\,\\text{lần}$'],
      correct_index: 0,
      explanation: 'Tỉ số công suất bức xạ: $P_2 / P_1 = (T_2 / T_1)^4 = (600 / 300)^4 = 2^4 = 16\\,\\text{lần}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Hiện tượng gió biển và gió đất ở các vùng duyên hải ven biển hình thành do cơ chế đối lưu nào sau đây?',
      options: [
        'Ban ngày đất liền nóng nhanh hơn mặt biển nên khí nóng bốc lên tạo gió từ biển thổi vào đất liền (gió biển); ban đêm đất liền nguội nhanh hơn biển nên gió thổi từ đất liền ra biển (gió đất)',
        'Do sóng biển xô vào bờ đẩy gió',
        'Do Trái Đất tự quay làm nghiêng mặt nước',
        'Do áp suất khí quyển ở biển luôn cao hơn đất liền',
      ],
      correct_index: 0,
      explanation: 'Đất có nhiệt dung riêng nhỏ hơn nước biển nhiều lần nên ban ngày nóng nhanh hơn, khí nhẹ nổi lên tạo áp thấp hút gió biển vào; ban đêm đất nguội nhanh hơn biển làm luồng đối lưu đảo chiều thành gió đất.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Hiệu ứng nhà kính khí quyển làm cho Trái Đất ấm lên dựa trên cơ chế bức xạ nào sau đây?',
      options: [
        'Khí quyển trong suốt với bức xạ sóng ngắn từ Mặt Trời chiếu xuống mặt đất, nhưng các khí nhà kính ($\text{CO}_2, \text{CH}_4, \text{H}_2\text{O}$) lại hấp thụ và giữ lại bức xạ nhiệt sóng dài hồng ngoại do mặt đất phát ngược lên vũ trụ',
        'Do ánh sáng Mặt Trời bị giữ lại không phản xạ',
        'Do tầng ozon bị nóng chảy sinh nhiệt',
        'Do các đám mây cọ xát sinh nhiệt',
      ],
      correct_index: 0,
      explanation: 'Bức xạ Mặt Trời là sóng ngắn xuyên qua khí quyển làm nóng bề mặt Trái Đất; mặt đất nóng lên phát ra bức xạ hồng ngoại sóng dài bị các khí nhà kính giữ lại phản xạ trở lại mặt đất, tương tự nhà kính trồng cây.',
    },
  ],

  // =========================================================================
  // G8-CH4-TP3: Sự nở vì nhiệt của các chất và Ứng dụng thực tế (25 questions)
  // =========================================================================
  'G8-CH4-TP3': [
    // 10 nhan_biet
    {
      difficulty: 'nhan_biet',
      question_text: 'Quy luật chung về sự nở vì nhiệt của hầu hết các chất (rắn, lỏng, khí) trong tự nhiên là gì?',
      options: [
        'Nở ra khi nóng lên, co lại khi lạnh đi',
        'Co lại khi nóng lên, nở ra khi lạnh đi',
        'Không thay đổi thể tích khi nhiệt độ biến thiên',
        'Chỉ có chất khí mới nở vì nhiệt',
      ],
      correct_index: 0,
      explanation: 'Quy luật phổ biến: Các chất nở ra khi nóng lên và co lại khi lạnh đi.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'So sánh độ dãn nở vì nhiệt của ba thể chất (rắn, lỏng, khí), khẳng định nào sau đây là ĐÚNG?',
      options: [
        'Chất khí nở vì nhiệt nhiều hơn chất lỏng, chất lỏng nở vì nhiệt nhiều hơn chất rắn',
        'Chất rắn nở nhiều nhất',
        'Chất lỏng nở nhiều hơn chất khí',
        'Cả ba thể nở như nhau',
      ],
      correct_index: 0,
      explanation: 'Trật tự độ nở vì nhiệt: Chất khí > Chất lỏng > Chất rắn.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đặc điểm về sự nở vì nhiệt của các chất khí khác nhau là gì?',
      options: [
        'Các chất khí khác nhau nở vì nhiệt GIỐNG NHAU',
        'Các chất khí khác nhau nở vì nhiệt khác nhau',
        'Khí oxi nở nhiều hơn khí nitơ',
        'Khí hiđro nở ít nhất',
      ],
      correct_index: 0,
      explanation: 'Khác với chất rắn và chất lỏng, mọi chất khí khác nhau đều có hệ số nở vì nhiệt xấp xỉ bằng nhau: $\\beta \\approx 1 / 273\\,\\text{K}^{-1}$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đặc điểm về sự nở vì nhiệt của các chất rắn khác nhau là gì?',
      options: [
        'Các chất rắn khác nhau nở vì nhiệt KHÁC NHAU (ví dụ: nhôm nở nhiều hơn đồng, đồng nở nhiều hơn sắt)',
        'Mọi chất rắn đều nở vì nhiệt giống hệt nhau',
        'Sắt nở nhiều hơn nhôm',
        'Gỗ nở nhiều hơn kim loại',
      ],
      correct_index: 0,
      explanation: 'Các chất rắn khác nhau có cấu trúc mạng tinh thể khác nhau nên hệ số nở dài $\\alpha$ khác nhau (Nhôm > Đồng > Sắt thép).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Nước có hiện tượng "nở dị thường" trong khoảng nhiệt độ nào sau đây?',
      options: [
        'Từ $0^\\circ\\text{C}$ đến $4^\\circ\\text{C}$',
        'Từ $4^\\circ\\text{C}$ đến $10^\\circ\\text{C}$',
        'Từ $50^\\circ\\text{C}$ đến $100^\\circ\\text{C}$',
        'Dưới $0^\\circ\\text{C}$',
      ],
      correct_index: 0,
      explanation: 'Khi tăng nhiệt độ từ $0^\\circ\\text{C}$ lên $4^\\circ\\text{C}$, nước co lại chứ không nở ra; ở $4^\\circ\\text{C}$ nước có thể tích nhỏ nhất và khối lượng riêng đạt cực đại.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Ở nhiệt độ nào thì nước có khối lượng riêng LỚN NHẤT ($D = 1000\\,\\text{kg/m}^3$)?',
      options: ['$4^\\circ\\text{C}$', '$0^\\circ\\text{C}$', '$100^\\circ\\text{C}$', '$20^\\circ\\text{C}$'],
      correct_index: 0,
      explanation: 'Do cấu trúc liên kết hidro dị thường, nước đạt khối lượng riêng cực đại $1000\\,\\text{kg/m}^3$ tại $4^\\circ\\text{C}$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Băng kép được cấu tạo từ những bộ phận nào sau đây?',
      options: [
        'Hai thanh kim loại có bản chất khác nhau được tán chặt dọc theo chiều dài',
        'Hai thanh kim loại giống hệt nhau ghép lại',
        'Một thanh kim loại bọc nhựa',
        'Hai tấm cao su ép chặt',
      ],
      correct_index: 0,
      explanation: 'Băng kép gồm hai thanh kim loại có độ dãn nở vì nhiệt khác nhau (như đồng và thép) tán chặt vào nhau.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi bị nung nóng, băng kép sẽ bị uốn cong về phía thanh kim loại nào?',
      options: [
        'Bị uốn cong về phía thanh kim loại dãn nở ÍT HƠN',
        'Bị uốn cong về phía thanh kim loại dãn nở NHIỀU HƠN',
        'Không bị cong mà dài thẳng ra',
        'Bị xoắn tròn',
      ],
      correct_index: 0,
      explanation: 'Thanh nở nhiều sẽ dài hơn và nằm ở mặt ngoài đường cong, ép thanh nở ít nằm ở phía trong (băng kép cong về phía thanh nở ít).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Băng kép được ứng dụng phổ biến nhất trong thiết bị nào sau đây?',
      options: [
        'Rơ-le nhiệt tự động đóng/ngắt mạch điện (trong bàn là điện, nồi cơm điện, ấm đun nước)',
        'Nhiệt kế thủy ngân',
        'Kính thiên văn',
        'Pin mặt trời',
      ],
      correct_index: 0,
      explanation: 'Băng kép uốn cong khi nóng được dùng làm rơ-le nhiệt tự ngắt dòng điện khi thiết bị đạt nhiệt độ định mức để chống cháy.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Tại sao tại các mối nối giữa hai thanh đường ray xe lửa người ta luôn để lại một khoảng khe hở nhỏ (khe co giãn)?',
      options: [
        'Để khi trời nắng nóng, thanh ray dãn nở tự do mà không bị kẹp ép sinh lực lớn làm cong vênh đường ray',
        'Để tiết kiệm thép',
        'Để cho tàu hỏa phát ra tiếng kêu vui tai',
        'Để nước mưa thoát dễ dàng',
      ],
      correct_index: 0,
      explanation: 'Khi nhiệt độ tăng, thanh ray thép nở dài ra; khe hở cho phép thanh ray nở tự do, tránh sinh lực nén khổng lồ bẻ cong đường ray gây trật bánh tàu.',
    },

    // 7 thong_hieu
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi làm lạnh một băng kép làm bằng đồng và thép (biết đồng dãn nở vì nhiệt nhiều hơn thép), băng kép sẽ bị uốn cong như thế nào?',
      options: [
        'Uốn cong về phía thanh đồng (vì khi lạnh thanh đồng co lại nhiều hơn thanh thép)',
        'Uốn cong về phía thanh thép',
        'Vẫn giữ thẳng không cong',
        'Bị gãy đôi',
      ],
      correct_index: 0,
      explanation: 'Đồng nở nhiều khi nóng thì cũng co lại nhiều khi lạnh. Khi làm lạnh, thanh đồng co ngắn hơn thanh thép nên băng kép cong về phía thanh đồng.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao khi đun nước bằng ấm, ta không nên đổ nước thật đầy tràn đến tận nắp ấm?',
      options: [
        'Vì khi đun nóng nước nở vì nhiệt và sôi sủi bọt, nước sẽ tràn ra ngoài tắt bếp gas hoặc gây chập điện cháy nổ',
        'Vì nước sẽ lâu sôi hơn',
        'Vì ấm sẽ bị nặng quá gãy quai',
        'Vì ấm đun không chịu được nước đầy',
      ],
      correct_index: 0,
      explanation: 'Nước dãn nở vì nhiệt khi đun sôi; nếu đổ quá đầy, thể tích nước tăng sẽ trào ra miệng ấm làm tắt lửa hoặc gây nguy hiểm về điện.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao vào mùa đông ở các nước hàn đới (Bắc Cực, Nga, Canada), mặt hồ bị đóng băng dày nhưng cá và các sinh vật thủy sinh vẫn có thể bơi lội sinh sống bình thường ở tầng đáy hồ?',
      options: [
        'Do nước nở dị thường: ở $4^\\circ\\text{C}$ nước có khối lượng riêng lớn nhất nên chìm xuống đáy hồ giữ nhiệt độ $4^\\circ\\text{C}$ ấm áp; lớp băng $0^\\circ\\text{C}$ nhẹ hơn nổi ở mặt trên cách nhiệt',
        'Vì cá chịu được nhiệt độ âm hàng chục độ',
        'Vì có suối nước nóng ngầm dưới mọi đáy hồ',
        'Vì băng tự sinh ra oxy cho cá',
      ],
      correct_index: 0,
      explanation: 'Nước ở $4^\\circ\\text{C}$ nặng nhất chìm dưới đáy giữ môi trường lỏng ổn định $4^\\circ\\text{C}$; lớp băng trên mặt là chất dẫn nhiệt kém bảo vệ hồ không bị đóng băng từ đáy lên.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi một chiếc cốc thủy tinh dày bị rót nước sôi đột ngột vào thì rất dễ bị nứt vỡ, trong khi cốc thủy tinh mỏng lại ít bị nứt hơn. Tại sao?',
      options: [
        'Thủy tinh dẫn nhiệt kém: lớp trong cốc dày nở vì nhiệt nhanh trong khi lớp ngoài chưa kịp nở, sự dãn nở không đều sinh lực lớn làm vỡ cốc; cốc mỏng dẫn nhiệt qua nhanh nên nở đều',
        'Vì cốc dày nặng hơn',
        'Vì cốc mỏng đàn hồi tốt hơn',
        'Do thủy tinh mỏng chịu nhiệt cao hơn',
      ],
      correct_index: 0,
      explanation: 'Cốc dày có mặt trong tiếp xúc nước nóng nở ra ngay trong khi mặt ngoài còn nguội chưa nở, ứng suất căng bề mặt không đều làm thủy tinh giòn bị nứt vỡ.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Để tháo một chiếc nắp chai bằng kim loại bị vặn quá chặt vào cổ chai thủy tinh, phương pháp nào sau đây là hiệu quả và khoa học nhất?',
      options: [
        'Hơ nóng nhẹ nắp chai kim loại bằng nước ấm hoặc máy sấy (vì kim loại nở vì nhiệt nhiều hơn thủy tinh nên nắp sẽ lỏng ra)',
        'Ngâm cả chai vào nước đá lạnh',
        'Hơ nóng phần đáy chai thủy tinh',
        'Dùng búa đập vỡ nắp chai',
      ],
      correct_index: 0,
      explanation: 'Kim loại có hệ số nở vì nhiệt lớn hơn thủy tinh; khi hơ nóng nắp kim loại dãn nở nhanh hơn cổ chai thủy tinh, giúp mở nắp dễ dàng.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao trên các đường ống dẫn hơi nước hoặc dẫn dầu dài hàng chục kilomet, người ta thường uốn ống thành những đoạn gấp khúc hình chữ U (ống bù giãn nở)?',
      options: [
        'Để khi nhiệt độ thay đổi, ống dãn nở hoặc co lại tự do mà không làm bẻ gãy bu-lông liên kết các mối nối',
        'Để làm chậm tốc độ dòng chảy',
        'Để lọc cặn bẩn trong dầu',
        'Do địa hình bắt buộc',
      ],
      correct_index: 0,
      explanation: 'Đoạn uốn chữ U hoạt động như một lò xo biến dạng đàn hồi hấp thụ độ dãn nở dài của ống thép khi nhiệt độ đường ống thay đổi hàng chục độ C.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Quả bóng bàn bị móp một vết lõm (chưa bị thủng rách). Để quả bóng bàn phồng tròn lại như cũ, ta có thể áp dụng cách nào?',
      options: [
        'Nhúng quả bóng bàn vào một cốc nước nóng (không khí bên trong quả bóng nóng lên, nở ra đẩy vết lõm phồng lên)',
        'Thả quả bóng vào ngăn đá tủ lạnh',
        'Dùng kim châm vào vết móp rồi thổi hơi',
        'Lấy búa gõ nhẹ vào vết móp',
      ],
      correct_index: 0,
      explanation: 'Không khí bên trong quả bóng kín gặp nước nóng sẽ nở vì nhiệt, áp suất khí tăng sinh lực đẩy vỏ nhựa phồng trở lại hình cầu tròn.',
    },

    // 5 van_dung
    {
      difficulty: 'van_dung',
      question_text: 'Một thanh ray xe lửa bằng thép có chiều dài $l_0 = 12\\,\\text{m}$ ở $20^\\circ\\text{C}$. Vào buổi trưa nắng gắt, nhiệt độ thanh ray tăng lên đến $50^\\circ\\text{C}$. Biết hệ số nở dài của thép là $\\alpha = 1,2 \\times 10^{-5}\\,\\text{K}^{-1}$. Độ nở dài của thanh ray là:',
      options: ['$4,32\\,\\text{mm}$', '$0,432\\,\\text{mm}$', '$43,2\\,\\text{mm}$', '$7,2\\,\\text{mm}$'],
      correct_index: 0,
      explanation: 'Độ tăng nhiệt độ: $\\Delta t = 50 - 20 = 30^\\circ\\text{C}$. Độ nở dài: $\\Delta l = l_0 \\cdot \\alpha \\cdot \\Delta t = 12 \\times (1,2 \\times 10^{-5}) \\times 30 = 0,00432\\,\\text{m} = 4,32\\,\\text{mm}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một cây cầu thép dài $L = 500\\,\\text{m}$ khi nhiệt độ là $10^\\circ\\text{C}$. Khi nhiệt độ mùa hè tăng lên $40^\\circ\\text{C}$, biết hệ số nở dài của thép là $\\alpha = 1,2 \\times 10^{-5}\\,\\text{K}^{-1}$, khe co giãn của mố cầu phải được thiết kế có độ co giãn tối thiểu bằng bao nhiêu để cầu dãn nở an toàn?',
      options: ['$18\\,\\text{cm}$', '$1,8\\,\\text{cm}$', '$36\\,\\text{cm}$', '$9\\,\\text{cm}$'],
      correct_index: 0,
      explanation: 'Độ nở dài của nhịp cầu thép: $\\Delta l = 500 \\times (1,2 \\times 10^{-5}) \\times (40 - 10) = 0,18\\,\\text{m} = 18\\,\\text{cm}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một bình thủy tinh chứa đầy $1000\\,\\text{cm}^3$ dầu ăn ở $20^\\circ\\text{C}$. Khi nung nóng lên $70^\\circ\\text{C}$, biết hệ số nở khối của dầu ăn là $\\beta = 10^{-3}\\,\\text{K}^{-1}$ và bỏ qua sự nở của bình thủy tinh, thể tích dầu ăn tràn ra ngoài bình là:',
      options: ['$50\\,\\text{cm}^3$', '$5\\,\\text{cm}^3$', '$100\\,\\text{cm}^3$', '$25\\,\\text{cm}^3$'],
      correct_index: 0,
      explanation: 'Độ tăng nhiệt độ: $\\Delta t = 70 - 20 = 50^\\circ\\text{C}$. Độ nở thể tích của dầu: $\\Delta V = V_0 \\cdot \\beta \\cdot \\Delta t = 1000 \\times 10^{-3} \\times 50 = 50\\,\\text{cm}^3$. Thể tích tràn ra đúng bằng $50\\,\\text{cm}^3$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một thanh đồng và một thanh sắt có cùng chiều dài ban đầu là $1\\,\\text{m}$ ở $0^\\circ\\text{C}$. Khi nung nóng cả hai thanh lên $100^\\circ\\text{C}$, thanh đồng dài hơn thanh sắt một đoạn bằng bao nhiêu? Biết hệ số nở dài của đồng là $\\alpha_{\\text{đồng}} = 1,7 \\times 10^{-5}\\,\\text{K}^{-1}$ và của sắt là $\\alpha_{\\text{sắt}} = 1,2 \\times 10^{-5}\\,\\text{K}^{-1}$.',
      options: ['$0,5\\,\\text{mm}$', '$1,7\\,\\text{mm}$', '$1,2\\,\\text{mm}$', '$0,05\\,\\text{mm}$'],
      correct_index: 0,
      explanation: 'Độ chênh lệch dãn dài: $\\Delta l = l_0 \\cdot (\\alpha_{\\text{đồng}} - \\alpha_{\\text{sắt}}) \\cdot \\Delta t = 1 \\times (1,7 - 1,2) \\times 10^{-5} \\times 100 = 5 \\times 10^{-4}\\,\\text{m} = 0,5\\,\\text{mm}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Băng kép đồng - thép dài $10\\,\\text{cm}$ được dùng trong bàn là điện. Ở nhiệt độ phòng $25^\\circ\\text{C}$ băng kép thẳng. Khi nung nóng đến $175^\\circ\\text{C}$, thanh đồng dãn dài thêm $\\Delta l_1 = 0,255\\,\\text{mm}$ còn thanh thép dãn dài thêm $\\Delta l_2 = 0,180\\,\\text{mm}$. Sự chênh lệch độ dài $\\Delta l = 0,075\\,\\text{mm}$ này làm băng kép cong lên đẩy tiếp điểm rơ-le tách rời bao nhiêu milimét để ngắt mạch?',
      options: [
        'Vài milimét (được khuyếch đại góc uốn cung tròn đủ để tách hở tiếp điểm điện an toàn)',
        'Đúng $0,075\\,\\text{mm}$',
        'Không tách được tiếp điểm',
        '$10\\,\\text{cm}$',
      ],
      correct_index: 0,
      explanation: 'Cơ chế uốn cong hình học cung tròn của băng kép khuyếch đại độ chênh lệch vi mô thành độ dịch chuyển góc vĩ mô vài milimét ở đầu mút tự do, đẩy tiếp điểm ngắt mạch dứt khoát.',
    },

    // 3 van_dung_cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Nếu một thanh thép có tiết diện $S = 10\\,\\text{cm}^2 = 10^{-3}\\,\\text{m}^2$ bị kẹp chặt cứng ở hai đầu (không thể dãn dài) và bị nung nóng tăng thêm $\\Delta t = 30^\\circ\\text{C}$. Biết suất đàn hồi Young của thép là $E = 2 \\times 10^{11}\\,\\text{N/m}^2$ và $\\alpha = 1,2 \\times 10^{-5}\\,\\text{K}^{-1}$. Lực nén nhiệt khổng lồ tác dụng lên hai điểm kẹp giữ có độ lớn là:',
      options: ['$72\\,000\\,\\text{N}$ (tương đương hơn 7,2 tấn lực)', '$720\\,\\text{N}$', '$7\\,200\\,\\text{N}$', '$720\\,000\\,\\text{N}$'],
      correct_index: 0,
      explanation: 'Ứng suất nén nhiệt: $\\sigma = E \\cdot \\alpha \\cdot \\Delta t = (2 \\times 10^{11}) \\times (1,2 \\times 10^{-5}) \\times 30 = 7,2 \\times 10^7\\,\\text{Pa} = 72\\,\\text{MPa}$. Lực nén: $F = \\sigma \\cdot S = (7,2 \\times 10^7) \\times 10^{-3} = 72\\,000\\,\\text{N}$ (chứng minh lực sinh ra khi ngăn cản dãn nở nhiệt là cực kỳ nguy hiểm).',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một nhiệt kế chất lỏng sử dụng ống mao quản có tiết diện trong $S = 0,1\\,\\text{mm}^2$. Bầu nhiệt kế chứa $V_0 = 1\\,\\text{cm}^3 = 1000\\,\\text{mm}^3$ thủy ngân. Hệ số nở khối của thủy ngân là $\\beta = 1,8 \\times 10^{-4}\\,\\text{K}^{-1}$. Bỏ qua sự nở của vỏ thủy tinh. Khi nhiệt độ tăng thêm $10^\\circ\\text{C}$, cột thủy ngân trong ống mao quản dâng cao thêm một đoạn là:',
      options: ['$18\\,\\text{mm}$ ($1,8\\,\\text{cm}$)', '$1,8\\,\\text{mm}$', '$36\\,\\text{mm}$', '$0,9\\,\\text{mm}$'],
      correct_index: 0,
      explanation: 'Thể tích thủy ngân nở thêm: $\\Delta V = V_0 \\cdot \\beta \\cdot \\Delta t = 1000 \\times (1,8 \\times 10^{-4}) \\times 10 = 1,8\\,\\text{mm}^3$. Chiều cao cột dâng: $\\Delta h = \\Delta V / S = 1,8 / 0,1 = 18\\,\\text{mm} = 1,8\\,\\text{cm}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Bánh xe lửa bằng thép có đường kính ngoài $D = 1000\\,\\text{mm}$ ở $20^\\circ\\text{C}$. Để lắp vành đai thép bên ngoài vào bánh xe, vành đai được chế tạo có đường kính trong ở $20^\\circ\\text{C}$ hơi nhỏ hơn một chút: $d = 998,8\\,\\text{mm}$. Biết hệ số nở dài của thép là $\\alpha = 1,2 \\times 10^{-5}\\,\\text{K}^{-1}$. Để vành đai lọt vừa khít qua bánh xe khi lắp ráp thì người ta phải nung nóng vành đai lên nhiệt độ tối thiểu là:',
      options: ['$120^\\circ\\text{C}$', '$100^\\circ\\text{C}$', '$150^\\circ\\text{C}$', '$200^\\circ\\text{C}$'],
      correct_index: 0,
      explanation: 'Độ dãn đường kính cần thiết: $\\Delta d = 1000 - 998,8 = 1,2\\,\\text{mm}$. Áp dụng $\\Delta d = d_0 \\cdot \\alpha \\cdot \\Delta t \\Rightarrow \\Delta t = 1,2 / (998,8 \\times 1,2 \\times 10^{-5}) \\approx 100,1^\\circ\\text{C}$. Nhiệt độ nung nóng: $t = 20 + 100,1 \\approx 120^\\circ\\text{C}$ (tính cả dung sai lắp ráp). Kỹ thuật này gọi là ghép nóng co ngót.',
    },
  ],
};

// =========================================================================
// 4 CHAPTER SYNTHESIS EXAM QUESTION SETS (25 questions each = 100 questions)
// =========================================================================
export const GRADE8_CHAPTER_EXAMS: Record<string, RawQuestionItem[]> = {
  // G8-CH1: Tổng ôn tập thi Chương 1 (Khối lượng riêng & Áp suất) - 25 questions
  'G8-CH1': [
    // 10 nhan_biet
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức nào sau đây dùng để tính khối lượng riêng của một chất?',
      options: ['$D = m / V$', '$D = m \\cdot V$', '$D = V / m$', '$D = P / V$'],
      correct_index: 0,
      explanation: 'Khối lượng riêng là khối lượng của một đơn vị thể tích: $D = m / V$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị đo của áp suất trong hệ đo lường quốc tế SI là:',
      options: ['Pascal (Pa)', 'Niutơn (N)', 'Joule (J)', 'Kilôgam (kg)'],
      correct_index: 0,
      explanation: 'Đơn vị đo áp suất trong hệ SI là Pascal (Pa), với $1\\,\\text{Pa} = 1\\,\\text{N/m}^2$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Áp lực là lực tác dụng có phương như thế nào đối với bề mặt bị ép?',
      options: ['Vuông góc với mặt bị ép', 'Song song với mặt bị ép', 'Hợp một góc nhọn bất kỳ', 'Thẳng đứng hướng lên'],
      correct_index: 0,
      explanation: 'Áp lực là lực ép có phương vuông góc với mặt bị ép.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức tính áp suất chất lỏng tại độ sâu $h$ tính từ mặt thoáng là:',
      options: ['$p = d \\cdot h$', '$p = d / h$', '$p = m \\cdot g \\cdot h$', '$p = F / h$'],
      correct_index: 0,
      explanation: 'Áp suất chất lỏng ở độ sâu $h$ là $p = d \\cdot h = \\rho \\cdot g \\cdot h$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong bình thông nhau chứa cùng một chất lỏng đứng yên, mặt thoáng ở các nhánh luôn ở vị trí nào?',
      options: ['Cùng một độ cao', 'Nhánh lớn cao hơn', 'Nhánh nhỏ cao hơn', 'Thay đổi liên tục'],
      correct_index: 0,
      explanation: 'Theo nguyên lý bình thông nhau, các mặt thoáng luôn ở cùng một độ cao.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Áp suất khí quyển ở điều kiện tiêu chuẩn tại mực nước biển có độ lớn xấp xỉ bằng:',
      options: ['$10^5\\,\\text{Pa}$ ($760\\,\\text{mmHg}$)', '$1000\\,\\text{Pa}$', '$10^7\\,\\text{Pa}$', '$76\\,\\text{Pa}$'],
      correct_index: 0,
      explanation: 'Áp suất khí quyển tiêu chuẩn $p_0 \\approx 10^5\\,\\text{Pa} = 760\\,\\text{mmHg}$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Lực đẩy Archimedes tác dụng lên vật chìm trong chất lỏng có chiều như thế nào?',
      options: ['Thẳng đứng từ dưới lên trên', 'Thẳng đứng từ trên xuống dưới', 'Nằm ngang', 'Xiên góc $45^\\circ$'],
      correct_index: 0,
      explanation: 'Lực đẩy Archimedes luôn có phương thẳng đứng, chiều hướng từ dưới lên trên.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức tính độ lớn lực đẩy Archimedes là:',
      options: ['$F_A = d_{\\text{lỏng}} \\cdot V_{\\text{chìm}}$', '$F_A = d_{\\text{vật}} \\cdot V$', '$F_A = m \\cdot g \\cdot h$', '$F_A = p \\cdot S$'],
      correct_index: 0,
      explanation: '$F_A = d_{\\text{lỏng}} \\cdot V_{\\text{chìm}}$ với $d_{\\text{lỏng}}$ là trọng lượng riêng chất lỏng.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Một vật nổi cân bằng trên mặt nước khi nào?',
      options: [
        '$d_{\\text{vật}} < d_{\\text{nước}}$ (khi cân bằng thì lực đẩy $F_A = P$)',
        '$d_{\\text{vật}} > d_{\\text{nước}}$',
        '$F_A = 0$',
        'Khối lượng vật bằng 0',
      ],
      correct_index: 0,
      explanation: 'Vật nổi khi $d_{\\text{vật}} < d_{\\text{nước}}$, và khi nổi cân bằng thì $F_A = P$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Để giảm áp suất tác dụng lên mặt sàn, ta có thể:',
      options: ['Tăng diện tích tiếp xúc $S$', 'Tăng áp lực $F$', 'Giảm diện tích tiếp xúc $S$', 'Mài nhọn vật'],
      correct_index: 0,
      explanation: 'Áp suất $p = F / S$, muốn giảm $p$ thì tăng mẫu số diện tích $S$.',
    },

    // 7 thong_hieu
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi đưa một thợ lặn xuống sâu dần trong lòng biển, áp suất tác dụng lên người thợ lặn biến thiên thế nào?',
      options: [
        'Tăng tỉ lệ thuận với độ sâu $h$ tính từ mặt nước biển',
        'Giảm dần',
        'Không thay đổi',
        'Chỉ tăng khi bơi nhanh',
      ],
      correct_index: 0,
      explanation: 'Vì $p = d \\cdot h$, độ sâu $h$ càng lớn thì áp suất thủy tĩnh càng tăng mạnh.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao kim tiêm lại có đầu vát rất nhọn?',
      options: [
        'Để diện tích tiếp xúc $S$ cực nhỏ, tạo áp suất lớn giúp kim đâm qua da dễ dàng không tốn sức',
        'Để chứa được nhiều thuốc tiêm',
        'Để tránh gỉ sét',
        'Do quy định thẩm mỹ',
      ],
      correct_index: 0,
      explanation: 'Đầu kim nhọn có $S$ rất bé, sinh ra áp suất $p = F/S$ rất lớn đâm xuyên qua da êm ái.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một khối gỗ thả vào dầu hỏa thì chìm sâu hơn khi thả vào nước tinh khiết. Giải thích nào sau đây là ĐÚNG?',
      options: [
        'Vì dầu hỏa có trọng lượng riêng nhỏ hơn nước ($d_{\\text{dầu}} < d_{\\text{nước}}$) nên cần thể tích chìm lớn hơn để tạo lực đẩy cân bằng trọng lượng gỗ',
        'Vì dầu làm gỗ nặng hơn',
        'Vì nước đẩy gỗ yếu hơn dầu',
        'Vì dầu hỏa hòa tan gỗ',
      ],
      correct_index: 0,
      explanation: 'Cân bằng $P = d \\cdot V_{\\text{chìm}}$. Vì $d_{\\text{dầu}} < d_{\\text{nước}}$ nên $V_{\\text{chìm trong dầu}} > V_{\\text{chìm trong nước}}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Nguyên lý máy nén thủy lực cho phép ta:',
      options: [
        'Được lợi bao nhiêu lần về lực thì thiệt bấy nhiêu lần về đường đi dịch chuyển piston',
        'Được lợi cả về lực và về công',
        'Tạo ra thêm năng lượng',
        'Nâng vật không cần lực tác dụng',
      ],
      correct_index: 0,
      explanation: 'Theo nguyên lý Pascal và định luật về công: $F_2 / F_1 = S_2 / S_1 = s_1 / s_2$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao nắp bình trà (ấm trà) thường có một lỗ kim nhỏ xuyên thủng trên đỉnh nắp?',
      options: [
        'Để không khí thông vào bình, áp suất khí quyển ép mặt nước giúp rót nước ra dễ dàng',
        'Để nhìn thấy nước bên trong',
        'Để cắm nhiệt kế',
        'Để trang trí nắp bình',
      ],
      correct_index: 0,
      explanation: 'Lỗ nhỏ giúp áp suất khí trong bình luôn cân bằng với khí quyển ngoài, tránh tạo áp suất chân không cản nước chảy.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Thả một chiếc kim khâu bằng thép thoa một lớp mỡ nhẹ lên mặt nước tĩnh, kim có thể nằm nổi trên mặt nước. Hiện tượng này chủ yếu do:',
      options: [
        'Lực căng bề mặt của màng nước nâng đỡ kim',
        'Khối lượng riêng của kim nhỏ hơn nước',
        'Lực đẩy Archimedes lớn hơn trọng lượng kim',
        'Lực từ trường Trái Đất nâng kim',
      ],
      correct_index: 0,
      explanation: 'Kim thép không chìm là do màng căng bề mặt của nước chưa bị chọc thủng; nếu dìm ngập qua màng nước thì kim chìm ngay vì $D_{\\text{thép}} > D_{\\text{nước}}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao đáy đập thủy điện luôn được xây dày hơn rất nhiều so với phần đỉnh đập?',
      options: [
        'Vì càng xuống đáy, độ sâu càng lớn làm áp suất nước tác dụng lên thân đập càng cực đại',
        'Để tạo lối đi cho xe tải',
        'Để đập đứng thẳng',
        'Để tiết kiệm bê tông ở trên',
      ],
      correct_index: 0,
      explanation: 'Áp suất chất lỏng $p = d \\cdot h$ lớn nhất ở chân đập, nên chân đập phải xây rất dày để chịu lực đẩy thủy tĩnh khổng lồ.',
    },

    // 5 van_dung
    {
      difficulty: 'van_dung',
      question_text: 'Một khối nhôm đặc có thể tích $V = 200\\,\\text{cm}^3$. Biết khối lượng riêng của nhôm là $2700\\,\\text{kg/m}^3$. Khối lượng của khối nhôm đó là:',
      options: ['$0,54\\,\\text{kg}$', '$5,4\\,\\text{kg}$', '$540\\,\\text{kg}$', '$0,054\\,\\text{kg}$'],
      correct_index: 0,
      explanation: 'Đổi $V = 200\\,\\text{cm}^3 = 2 \\times 10^{-4}\\,\\text{m}^3$. Khối lượng: $m = D \\cdot V = 2700 \\times 2 \\times 10^{-4} = 0,54\\,\\text{kg}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một người nặng $50\\,\\text{kg}$ đứng trên một tấm ván trượt tuyết rộng diện tích $0,25\\,\\text{m}^2$. Lấy $g = 10\\,\\text{m/s}^2$. Áp suất tác dụng lên mặt tuyết là:',
      options: ['$2000\\,\\text{Pa}$', '$200\\,\\text{Pa}$', '$5000\\,\\text{Pa}$', '$125\\,\\text{Pa}$'],
      correct_index: 0,
      explanation: 'Áp lực: $F = P = 500\\,\\text{N}$. Áp suất: $p = F / S = 500 / 0,25 = 2000\\,\\text{Pa}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Ở độ sâu $h = 25\\,\\text{m}$ dưới hồ nước ngọt ($d = 10\\,000\\,\\text{N/m}^3$), áp suất thủy tĩnh của nước là:',
      options: ['$250\\,000\\,\\text{Pa}$ ($2,5\\,\\text{bar}$)', '$25\\,000\\,\\text{Pa}$', '$500\\,000\\,\\text{Pa}$', '$100\\,000\\,\\text{Pa}$'],
      correct_index: 0,
      explanation: 'Áp suất thủy tĩnh: $p = d \\cdot h = 10000 \\times 25 = 250\\,000\\,\\text{Pa}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một vật có thể tích $0,002\\,\\text{m}^3$ chìm hoàn toàn trong nước ($d = 10\\,000\\,\\text{N/m}^3$). Lực đẩy Archimedes tác dụng lên vật là:',
      options: ['$20\\,\\text{N}$', '$200\\,\\text{N}$', '$2\\,\\text{N}$', '$50\\,\\text{N}$'],
      correct_index: 0,
      explanation: '$F_A = d \\cdot V = 10000 \\times 0,002 = 20\\,\\text{N}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Piston nhỏ của một kích thủy lực có diện tích $S_1 = 4\\,\\text{cm}^2$, piston lớn có diện tích $S_2 = 120\\,\\text{cm}^2$. Muốn nâng một ô tô nặng $1500\\,\\text{kg}$ ($P = 15\\,000\\,\\text{N}$) thì lực tác dụng lên piston nhỏ phải là:',
      options: ['$500\\,\\text{N}$', '$300\\,\\text{N}$', '$600\\,\\text{N}$', '$1200\\,\\text{N}$'],
      correct_index: 0,
      explanation: '$F_1 = F_2 \\times (S_1 / S_2) = 15000 \\times (4 / 120) = 15000 / 30 = 500\\,\\text{N}$.',
    },

    // 3 van_dung_cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một khối gỗ hình lập phương cạnh $a = 10\\,\\text{cm}$ có khối lượng riêng $D = 600\\,\\text{kg/m}^3$ được thả vào một chậu nước ($D_0 = 1000\\,\\text{kg/m}^3$). Chiều cao phần khối gỗ nổi trên mặt nước là:',
      options: ['$4\\,\\text{cm}$', '$6\\,\\text{cm}$', '$5\\,\\text{cm}$', '$2\\,\\text{cm}$'],
      correct_index: 0,
      explanation: 'Vật nổi cân bằng: $P = F_A \\Leftrightarrow 10 \\cdot D \\cdot (a^2 \\cdot a) = 10 \\cdot D_0 \\cdot (a^2 \\cdot h_{\\text{chìm}}) \\Rightarrow h_{\\text{chìm}} = a \\cdot (D / D_0) = 10 \\times (600 / 1000) = 6\\,\\text{cm}$. Chiều cao phần nổi: $h_{\\text{nổi}} = a - h_{\\text{chìm}} = 10 - 6 = 4\\,\\text{cm}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một phong vũ biểu Torricelli đặt ở chân núi chỉ $760\\,\\text{mmHg}$. Khi mang lên đỉnh núi, phong vũ biểu chỉ $720\\,\\text{mmHg}$. Biết khối lượng riêng trung bình của không khí là $D_{\\text{kk}} = 1,29\\,\\text{kg/m}^3$ và trọng lượng riêng của thủy ngân là $d_{\\text{Hg}} = 136\\,000\\,\\text{N/m}^3$. Độ cao của đỉnh núi so với chân núi xấp xỉ bằng:',
      options: ['$421,7\\,\\text{m}$', '$400,0\\,\\text{m}$', '$350,5\\,\\text{m}$', '$512,0\\,\\text{m}$'],
      correct_index: 0,
      explanation: 'Độ giảm áp suất khí quyển: $\\Delta p = d_{\\text{Hg}} \\cdot \\Delta h_{\\text{Hg}} = 136000 \\times 0,04 = 5440\\,\\text{Pa}$. Mặt khác $\\Delta p = d_{\\text{kk}} \\cdot H = 10 \\cdot D_{\\text{kk}} \\cdot H = 12,9 \\cdot H \\Rightarrow H = 5440 / 12,9 \\approx 421,7\\,\\text{m}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một quả cầu kim loại rỗng nổi lơ lửng trong nước ($d_1 = 10\\,000\\,\\text{N/m}^3$). Biết thể tích phần rỗng bên trong chiếm $60\\%$ thể tích toàn phần của quả cầu. Trọng lượng riêng của kim loại làm vỏ quả cầu là:',
      options: ['$25\\,000\\,\\text{N/m}^3$', '$20\\,000\\,\\text{N/m}^3$', '$16\\,000\\,\\text{N/m}^3$', '$30\\,000\\,\\text{N/m}^3$'],
      correct_index: 0,
      explanation: 'Thể tích phần kim loại đặc là $V_{\\text{kl}} = 0,4 V$. Quả cầu lơ lửng trong nước nên $P = F_A \\Leftrightarrow d_{\\text{kl}} \\cdot (0,4 V) = d_1 \\cdot V \\Rightarrow d_{\\text{kl}} = d_1 / 0,4 = 10000 / 0,4 = 25\\,000\\,\\text{N/m}^3$.',
    },
  ],

  // G8-CH2: Tổng ôn tập thi Chương 2 (Tác dụng làm quay & Đòn bẩy) - 25 questions
  'G8-CH2': [
    // 10 nhan_biet
    {
      difficulty: 'nhan_biet',
      question_text: 'Đại lượng nào đặc trưng cho tác dụng làm quay của lực quanh một trục cố định?',
      options: ['Moment lực', 'Áp suất', 'Công suất', 'Khối lượng'],
      correct_index: 0,
      explanation: 'Moment lực đặc trưng cho tác dụng làm quay của lực.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức tính Moment lực $M$ là:',
      options: ['$M = F \\cdot d$', '$M = F / d$', '$M = d / F$', '$M = F + d$'],
      correct_index: 0,
      explanation: '$M = F \\cdot d$ với $F$ là lực và $d$ là cánh tay đòn.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị đo của Moment lực trong hệ SI là:',
      options: ['$\\text{N}\\cdot\\text{m}$', '$\\text{N/m}$', 'Joule (J)', 'Oát (W)'],
      correct_index: 0,
      explanation: 'Đơn vị chuẩn của moment lực là $\\text{N}\\cdot\\text{m}$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Cánh tay đòn $d$ của lực là khoảng cách nào sau đây?',
      options: ['Khoảng cách vuông góc từ trục quay đến giá của lực', 'Khoảng cách từ trục quay đến điểm đặt lực', 'Chiều dài của vật', 'Độ dài sợi dây'],
      correct_index: 0,
      explanation: 'Cánh tay đòn là khoảng cách vuông góc từ trục quay đến giá của lực.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đòn bẩy loại 1 có điểm tựa $O$ nằm ở vị trí nào?',
      options: ['Nằm ở giữa lực tác dụng và lực cản', 'Nằm ở một đầu, tải ở giữa', 'Nằm ở một đầu, lực tác dụng ở giữa', 'Không cố định'],
      correct_index: 0,
      explanation: 'Đòn bẩy loại 1 có điểm tựa $O$ ở giữa.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Dụng cụ nào là đòn bẩy loại 2?',
      options: ['Xe cút kít chở cát', 'Bập bênh', 'Cái nhíp', 'Đôi đũa'],
      correct_index: 0,
      explanation: 'Xe cút kít có tải ở giữa là đòn bẩy loại 2.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Dụng cụ nào là đòn bẩy loại 3?',
      options: ['Cái nhíp gắp', 'Kéo cắt kim loại', 'Xe rùa', 'Kìm bấm'],
      correct_index: 0,
      explanation: 'Cái nhíp có lực ép ở giữa là đòn bẩy loại 3.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Điều kiện cân bằng của đòn bẩy có 2 lực tác dụng là:',
      options: ['$F_1 \\cdot d_1 = F_2 \\cdot d_2$', '$F_1 / d_1 = F_2 / d_2$', '$F_1 + d_1 = F_2 + d_2$', '$F_1 \\cdot F_2 = d_1 \\cdot d_2$'],
      correct_index: 0,
      explanation: 'Điều kiện cân bằng đòn bẩy là $F_1 \\cdot d_1 = F_2 \\cdot d_2$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Cần cẩu tháp sử dụng khối bê tông đối trọng để làm gì?',
      options: ['Tạo moment cân bằng chống lật tháp', 'Làm cần cẩu nặng hơn để bám đường', 'Làm cẩu cao hơn', 'Trang trí'],
      correct_index: 0,
      explanation: 'Đối trọng tạo moment giữ chống lại moment lật của tải.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đòn bẩy loại 3 luôn mang lại ưu điểm gì?',
      options: ['Lợi về đường đi và tốc độ thao tác', 'Lợi về lực', 'Lợi về công', 'Lợi về năng lượng'],
      correct_index: 0,
      explanation: 'Đòn bẩy loại 3 thiệt về lực nhưng lợi về quãng đường và tốc độ.',
    },

    // 7 thong_hieu
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi một lực tác dụng có giá đi thẳng qua trục quay của vật thì:',
      options: ['Lực không có tác dụng làm quay vật ($M = 0$)', 'Vật quay rất nhanh', 'Vật bị vỡ', 'Moment đạt cực đại'],
      correct_index: 0,
      explanation: 'Giá đi qua trục quay thì cánh tay đòn $d = 0 \\Rightarrow M = 0$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Muốn dùng cờ lê mở ốc chặt dễ dàng nhất, ta nên:',
      options: ['Tác dụng lực vuông góc vào đầu mút xa nhất của cán cờ lê', 'Cầm sát vào miệng cờ lê', 'Kéo cờ lê dọc theo thân ốc', 'Gõ búa nhẹ'],
      correct_index: 0,
      explanation: 'Cầm ở đầu mút xa nhất giúp tối đa hóa cánh tay đòn $d$, lực vuông góc cho $\\sin 90^\\circ = 1$ tạo moment lớn nhất.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao xe cút kít (đòn bẩy loại 2) luôn cho lợi về lực?',
      options: ['Vì khoảng cách từ tay nâng đến bánh xe luôn lớn hơn khoảng cách từ thùng hàng đến bánh xe ($d_1 > d_2$)', 'Vì xe có bánh xe', 'Vì cát rất nhẹ', 'Do xe làm bằng sắt'],
      correct_index: 0,
      explanation: 'Trong đòn bẩy loại 2, tải ở giữa nên $d_1 > d_2$ luôn đúng, suy ra $F_1 < F_2$ (lợi về lực).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi cần cẩu nâng tải ở tầm với xa gấp đôi, để giữ cần cẩu không bị lật thì tải trọng cẩu an toàn phải:',
      options: ['Giảm đi một nửa', 'Tăng gấp đôi', 'Không đổi', 'Giảm 4 lần'],
      correct_index: 0,
      explanation: 'Vì $M = P \\cdot d = \\text{const}$, khi tầm với $d$ tăng gấp đôi thì tải trọng $P$ phải giảm đi một nửa.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Kéo cắt kim loại có đặc điểm hình học nào?',
      options: ['Tay cầm rất dài, lưỡi cắt rất ngắn ($d_1 \\gg d_2$)', 'Tay cầm ngắn, lưỡi dài', 'Tay cầm bằng lưỡi', 'Lưỡi uốn cong'],
      correct_index: 0,
      explanation: 'Cán dài lưỡi ngắn cho lợi nhiều lần về lực để thắng lực cản của kim loại.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một tấm ván đặt trên hai gối đỡ ở hai đầu. Khi một người đi từ đầu này sang chính giữa tấm ván thì áp lực lên hai gối đỡ thay đổi thế nào?',
      options: ['Ban đầu gối gần người chịu nhiều lực hơn, khi đến giữa thì hai gối chịu lực bằng nhau', 'Hai gối luôn chịu lực như nhau', 'Gối xa người chịu nhiều lực hơn', 'Áp lực giảm dần'],
      correct_index: 0,
      explanation: 'Theo quy tắc moment quanh gối đỡ: khi người ở chính giữa, lực chia đều cho hai gối đỡ ($F_1 = F_2 = P/2$).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Chân chống nghiêng của xe máy hoạt động vững chắc nhờ:',
      options: ['Trọng tâm xe nằm trong đa giác chân đế tạo bởi hai bánh xe và chân chống', 'Lốp xe có gai', 'Khối lượng xe rất nặng', 'Chân chống làm bằng thép'],
      correct_index: 0,
      explanation: 'Điều kiện thăng bằng ổn định là đường thẳng đứng của trọng lực đi qua mặt chân đế tam giác của xe.',
    },

    // 5 van_dung
    {
      difficulty: 'van_dung',
      question_text: 'Dùng một lực $F = 50\\,\\text{N}$ tác dụng vuông góc vào đầu cán cờ lê dài $20\\,\\text{cm}$. Moment lực là:',
      options: ['$10\\,\\text{N}\\cdot\\text{m}$', '$1000\\,\\text{N}\\cdot\\text{m}$', '$2,5\\,\\text{N}\\cdot\\text{m}$', '$5\\,\\text{N}\\cdot\\text{m}$'],
      correct_index: 0,
      explanation: '$d = 0,2\\,\\text{m} \\Rightarrow M = 50 \\times 0,2 = 10\\,\\text{N}\\cdot\\text{m}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Đòn bẩy loại 1 dài $1,5\\,\\text{m}$ có điểm tựa cách vật $30\\,\\text{cm}$. Muốn nâng vật nặng $800\\,\\text{N}$ thì lực tác dụng ở đầu kia là:',
      options: ['$200\\,\\text{N}$', '$160\\,\\text{N}$', '$400\\,\\text{N}$', '$100\\,\\text{N}$'],
      correct_index: 0,
      explanation: '$d_2 = 30\\,\\text{cm} = 0,3\\,\\text{m}$, $d_1 = 1,5 - 0,3 = 1,2\\,\\text{m}$. $F_1 = 800 \\times (0,3 / 1,2) = 200\\,\\text{N}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một người gánh 2 thúng: thúng gạo nặng $35\\,\\text{kg}$, thúng ngô nặng $25\\,\\text{kg}$. Đòn gánh dài $1,2\\,\\text{m}$. Vai người đặt cách thúng gạo một khoảng để thăng bằng là:',
      options: ['$0,5\\,\\text{m}$', '$0,7\\,\\text{m}$', '$0,6\\,\\text{m}$', '$0,4\\,\\text{m}$'],
      correct_index: 0,
      explanation: '$35 \\cdot x = 25 \\cdot (1,2 - x) \\Rightarrow 60x = 30 \\Rightarrow x = 0,5\\,\\text{m}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Cần cẩu tháp có đối trọng $4\\,\\text{tấn}$ ở cự ly $10\\,\\text{m}$. Tải cẩu ở tầm với $20\\,\\text{m}$ có khối lượng tối đa để không lật là:',
      options: ['$2\\,\\text{tấn}$', '$1\\,\\text{tấn}$', '$4\\,\\text{tấn}$', '$8\\,\\text{tấn}$'],
      correct_index: 0,
      explanation: '$P_{\\text{tải}} = (40\\,000 \\times 10) / 20 = 20\\,000\\,\\text{N} \\Rightarrow 2\\,\\text{tấn}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Dùng xà beng nâng tảng đá nặng $1500\\,\\text{N}$ lên cao $5\\,\\text{cm}$ bằng một lực $300\\,\\text{N}$. Bỏ qua ma sát, đầu tay ấn phải dịch chuyển đoạn đường là:',
      options: ['$25\\,\\text{cm}$', '$15\\,\\text{cm}$', '$50\\,\\text{cm}$', '$10\\,\\text{cm}$'],
      correct_index: 0,
      explanation: 'Lợi 5 lần về lực ($1500 / 300 = 5$) thì thiệt 5 lần về đường đi: $s_1 = 5 \\times 5 = 25\\,\\text{cm}$.',
    },

    // 3 van_dung_cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một thanh đồng chất dài $2\\,\\text{m}$, khối lượng $10\\,\\text{kg}$ gắn bản lề ở đầu $A$. Một sợi dây treo vào đầu $B$ kéo thẳng đứng lên giữ thanh nghiêng $30^\\circ$ so với phương ngang. Lực căng dây treo ở $B$ là:',
      options: ['$50\\,\\text{N}$', '$100\\,\\text{N}$', '$25\\,\\text{N}$', '$75\\,\\text{N}$'],
      correct_index: 0,
      explanation: 'Trọng lượng thanh $P = 100\\,\\text{N}$ đặt tại trung điểm. Vì trọng lực và lực căng đều thẳng đứng, góc nghiêng triệt tiêu: $T \\cdot AB = P \\cdot AG \\Rightarrow T = P / 2 = 50\\,\\text{N}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một chiếc xe tải cẩu có khối lượng xe là $10\\,\\text{tấn}$, khoảng cách giữa hai trục bánh xe là $4\\,\\text{m}$. Trọng tâm xe cách trục sau $1,5\\,\\text{m}$. Cần cẩu vươn ra phía sau trục bánh sau một khoảng $2\\,\\text{m}$. Tải trọng tối đa xe có thể cẩu phía sau mà bánh trước chưa bị nhấc bổng là:',
      options: ['$12,5\\,\\text{tấn}$', '$10\\,\\text{tấn}$', '$7,5\\,\\text{tấn}$', '$15\\,\\text{tấn}$'],
      correct_index: 0,
      explanation: 'Lấy moment quanh trục bánh sau: Trọng tâm xe cách trục sau $1,5\\,\\text{m}$ về phía trước sinh moment giữ $M_{\\text{giữ}} = 10 \\times 10^4 \\times 2,5 = 250\\,000\\,\\text{N}\\cdot\\text{m}$ (trục trước cách trục sau 4 m, trọng tâm cách trục trước $4 - 1,5 = 2,5\\,\\text{m}$)... Cụ thể $M_{\\text{giữ}} = P_{\\text{xe}} \\times 2,5\\,\\text{m} = 250\\,000\\,\\text{N}\\cdot\\text{m} \\Rightarrow P_{\\text{tải}} = 250000 / 2 = 125\\,000\\,\\text{N} = 12,5\\,\\text{tấn}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một cái cân đòn có đĩa cân ở đầu $A$ ($OA = 10\\,\\text{cm}$) và quả cân $m_0 = 0,5\\,\\text{kg}$ di trượt trên cánh tay đòn $OB$ dài $80\\,\\text{cm}$. Trên thang $OB$, khoảng cách giữa hai vạch chia liên tiếp ứng với $100\\,\\text{g}$ là:',
      options: ['$2\\,\\text{cm}$', '$1\\,\\text{cm}$', '$4\\,\\text{cm}$', '$0,5\\,\\text{cm}$'],
      correct_index: 0,
      explanation: 'Ta có $m \\cdot OA = m_0 \\cdot x \\Rightarrow x = m \\cdot (OA / m_0) = m \\cdot (10 / 500) = m / 50$. Với $\\Delta m = 100\\,\\text{g} \\Rightarrow \\Delta x = 100 / 50 = 2\\,\\text{cm}$.',
    },
  ],

  // G8-CH3: Tổng ôn tập thi Chương 3 (Điện học) - 25 questions
  'G8-CH3': [
    // 10 nhan_biet
    {
      difficulty: 'nhan_biet',
      question_text: 'Dòng điện trong kim loại là dòng chuyển động có hướng của hạt nào?',
      options: ['Electron tự do', 'Proton', 'Nguyên tử', 'Ion dương'],
      correct_index: 0,
      explanation: 'Trong kim loại, các electron tự do chuyển dời có hướng tạo nên dòng điện.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Chiều quy ước của dòng điện chạy trong mạch kín là chiều:',
      options: ['Từ cực dương qua dây dẫn tới cực âm của nguồn', 'Từ cực âm về cực dương', 'Cùng chiều electron', 'Ngẫu nhiên'],
      correct_index: 0,
      explanation: 'Quy ước chiều dòng điện: từ cực dương qua dây dẫn đến cực âm.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hai điện tích cùng loại (cùng dấu) đặt gần nhau sẽ:',
      options: ['Đẩy nhau', 'Hút nhau', 'Không tác dụng', 'Triệt tiêu'],
      correct_index: 0,
      explanation: 'Cùng dấu đẩy nhau, trái dấu hút nhau.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Vật nhiễm điện dương là do:',
      options: ['Mất bớt electron', 'Nhận thêm electron', 'Nhận thêm proton', 'Bị nung nóng'],
      correct_index: 0,
      explanation: 'Vật thiếu hụt electron thì mang điện tích dương.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Ampe kế là dụng cụ dùng để đo đại lượng nào và được mắc như thế nào?',
      options: ['Cường độ dòng điện, mắc nối tiếp', 'Hiệu điện thế, mắc song song', 'Điện trở, mắc song song', 'Nhiệt độ'],
      correct_index: 0,
      explanation: 'Ampe kế đo cường độ dòng điện ($I$), bắt buộc mắc nối tiếp.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Vôn kế là dụng cụ đo đại lượng nào và được mắc như thế nào?',
      options: ['Hiệu điện thế, mắc song song', 'Cường độ dòng điện, mắc nối tiếp', 'Công suất, mắc nối tiếp', 'Năng lượng'],
      correct_index: 0,
      explanation: 'Vôn kế đo hiệu điện thế ($U$), bắt buộc mắc song song.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đặc điểm dòng điện trong đoạn mạch gồm 2 bóng đèn mắc nối tiếp là:',
      options: ['$I = I_1 = I_2$', '$I = I_1 + I_2$', '$U_1 = U_2$', '$I_1 = 2 I_2$'],
      correct_index: 0,
      explanation: 'Mạch nối tiếp: $I = I_1 = I_2$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đặc điểm hiệu điện thế trong đoạn mạch gồm 2 bóng đèn mắc song song là:',
      options: ['$U = U_1 = U_2$', '$U = U_1 + U_2$', '$I = I_1 = I_2$', '$U_1 = 2 U_2$'],
      correct_index: 0,
      explanation: 'Mạch song song: $U = U_1 = U_2$.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Dòng điện chạy qua bếp điện làm bếp nóng đỏ thể hiện tác dụng gì?',
      options: ['Tác dụng nhiệt', 'Tác dụng từ', 'Tác dụng hóa học', 'Tác dụng sinh lý'],
      correct_index: 0,
      explanation: 'Tỏa nhiệt làm nóng là tác dụng nhiệt của dòng điện.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Nam châm điện hoạt động dựa trên tác dụng nào của dòng điện?',
      options: ['Tác dụng từ', 'Tác dụng nhiệt', 'Tác dụng phát sáng', 'Tác dụng hóa học'],
      correct_index: 0,
      explanation: 'Cuộn dây dẫn có dòng điện hút sắt là tác dụng từ.',
    },

    // 7 thong_hieu
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao khi lắp pin vào đèn pin ta phải lắp các cực tiếp xúc đúng thứ tự cực âm vào lò xo?',
      options: [
        'Để tạo mạch kín có chiều dòng điện đi từ cực dương qua bóng đèn khép kín',
        'Vì lắp ngược lò xo sẽ bị gãy',
        'Vì pin sẽ tự xả hết điện',
        'Để đèn phát ra ánh sáng màu xanh',
      ],
      correct_index: 0,
      explanation: 'Lắp đúng cực giúp mạch kín dẫn dòng điện quy ước chạy qua dây tóc bóng đèn.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Các thiết bị điện trong nhà mắc song song để làm gì?',
      options: [
        'Mỗi thiết bị dùng chung điện áp $220\\,\\text{V}$ và có thể bật tắt độc lập',
        'Để tiết kiệm điện năng gấp đôi',
        'Để dòng điện chạy chậm lại',
        'Để đèn không bị nóng',
      ],
      correct_index: 0,
      explanation: 'Mắc song song cho phép hoạt động độc lập ở cùng điện áp chuẩn $220\\,\\text{V}$.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Trong mạch nối tiếp gồm 2 đèn, nếu một đèn bị cháy đứt bóng thì đèn kia sẽ thế nào?',
      options: ['Tắt ngay lập tức vì mạch bị hở', 'Sáng chói hơn', 'Sáng bình thường', 'Chớp nháy'],
      correct_index: 0,
      explanation: 'Mạch nối tiếp bị đứt 1 điểm sẽ hở toàn mạch khiến đèn còn lại tắt.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao bút thử điện cắm vào ổ điện thì bóng đèn neon trong bút sáng mà người cầm không bị giật?',
      options: [
        'Bên trong bút có một điện trở an toàn cực lớn (hàng triệu ohm) làm giảm dòng điện qua người xuống mức an toàn',
        'Vì bút thử điện dùng pin riêng',
        'Vì điện ổ cắm không giật',
        'Do người mang giày',
      ],
      correct_index: 0,
      explanation: 'Điện trở rất lớn trong thân bút giới hạn dòng điện xuống dưới $0,1\\,\\text{mA}$, đủ thắp sáng đèn neon mà tuyệt đối an toàn cho người.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi cọ xát thanh thủy tinh vào lụa, thanh thủy tinh nhiễm điện dương còn mảnh lụa nhiễm điện âm vì:',
      options: [
        'Electron chuyển dịch từ thanh thủy tinh sang mảnh lụa',
        'Proton chuyển dịch từ lụa sang thủy tinh',
        'Thủy tinh hút điện tích dương từ không khí',
        'Lụa sinh ra electron mới',
      ],
      correct_index: 0,
      explanation: 'Cọ xát làm electron bứt khỏi thanh thủy tinh sang lụa; thủy tinh thiếu electron tích điện dương, lụa thừa electron tích điện âm.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Cầu chì lắp ở đầu nguồn điện có tác dụng gì?',
      options: [
        'Khi xảy ra đoản mạch dòng điện tăng cao làm dây chì nóng chảy tự đứt ngắt mạch bảo vệ',
        'Làm tăng hiệu điện thế',
        'Làm bóng đèn sáng hơn',
        'Đo cường độ dòng điện',
      ],
      correct_index: 0,
      explanation: 'Cầu chì ứng dụng tác dụng nhiệt: dây chì nóng chảy ngắt mạch tức thì khi quá tải hoặc đoản mạch.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một vôn kế mắc vào hai đầu một bóng đèn đang sáng chỉ $6\\,\\text{V}$. Nếu bóng đèn này bị đứt dây tóc thì số chỉ của vôn kế sẽ:',
      options: [
        'Chỉ xấp xỉ bằng hiệu điện thế của nguồn điện',
        'Chỉ $0\\,\\text{V}$ ngay',
        'Tăng lên vô cùng',
        'Bị cháy đồng hồ',
      ],
      correct_index: 0,
      explanation: 'Khi đèn đứt tóc, vôn kế có điện trở cực lớn nối tiếp với mạch hở nên đo trực tiếp hiệu điện thế của nguồn điện.',
    },

    // 5 van_dung
    {
      difficulty: 'van_dung',
      question_text: 'Hai bóng đèn $Đ_1$ và $Đ_2$ mắc nối tiếp vào nguồn $9\\,\\text{V}$. Biết vôn kế đo hai đầu $Đ_1$ chỉ $4\\,\\text{V}$. Hiệu điện thế hai đầu đèn $Đ_2$ là:',
      options: ['$5\\,\\text{V}$', '$13\\,\\text{V}$', '$9\\,\\text{V}$', '$4\\,\\text{V}$'],
      correct_index: 0,
      explanation: '$U_2 = U - U_1 = 9 - 4 = 5\\,\\text{V}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Hai bóng đèn mắc song song vào nguồn $12\\,\\text{V}$. Dòng qua đèn 1 là $0,6\\,\\text{A}$, dòng mạch chính là $1,5\\,\\text{A}$. Dòng qua đèn 2 là:',
      options: ['$0,9\\,\\text{A}$', '$2,1\\,\\text{A}$', '$0,6\\,\\text{A}$', '$1,2\\,\\text{A}$'],
      correct_index: 0,
      explanation: '$I_2 = I - I_1 = 1,5 - 0,6 = 0,9\\,\\text{A}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Trong $30\\,\\text{giây}$, điện lượng chuyển qua tiết diện dây dẫn là $15\\,\\text{C}$. Cường độ dòng điện là:',
      options: ['$0,5\\,\\text{A}$', '$2\\,\\text{A}$', '$450\\,\\text{A}$', '$15\\,\\text{A}$'],
      correct_index: 0,
      explanation: '$I = q / t = 15 / 30 = 0,5\\,\\text{A}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một vật nhiễm điện âm có điện tích $q = -1,6 \\times 10^{-16}\\,\\text{C}$. Số electron vật đã nhận thêm là:',
      options: ['$1000\\,\\text{hạt}$', '$100\\,\\text{hạt}$', '$10\\,000\\,\\text{hạt}$', '$1,6 \\times 10^{19}\\,\\text{hạt}$'],
      correct_index: 0,
      explanation: '$N_e = |q| / e = (1,6 \\times 10^{-16}) / (1,6 \\times 10^{-19}) = 1000\\,\\text{hạt}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Cần mắc bao nhiêu viên pin $1,5\\,\\text{V}$ nối tiếp nhau để thắp sáng bình thường một bóng đèn có ghi $6\\,\\text{V}$?',
      options: ['$4\\,\\text{viên}$', '$3\\,\\text{viên}$', '$2\\,\\text{viên}$', '$6\\,\\text{viên}$'],
      correct_index: 0,
      explanation: 'Số viên pin nối tiếp: $n = 6 / 1,5 = 4\\,\\text{viên}$.',
    },

    // 3 van_dung_cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một mạch điện gồm nguồn điện $U = 12\\,\\text{V}$, một biến trở con chạy $R_b$ và bóng đèn $Đ$ ghi $6\\,\\text{V} - 0,6\\,\\text{A}$ mắc nối tiếp. Để đèn sáng bình thường, biến trở phải được điều chỉnh để có điện trở bằng bao nhiêu?',
      options: ['$10\\,\\Omega$', '$20\\,\\Omega$', '$6\\,\\Omega$', '$12\\,\\Omega$'],
      correct_index: 0,
      explanation: 'Để đèn sáng đúng định mức thì $U_{\\text{đèn}} = 6\\,\\text{V}$ và $I = 0,6\\,\\text{A}$. Điện áp hai đầu biến trở: $U_b = U - U_{\\text{đèn}} = 12 - 6 = 6\\,\\text{V}$. Điện trở của biến trở: $R_b = U_b / I = 6 / 0,6 = 10\\,\\Omega$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một dây dẫn kim loại hình trụ bị kéo dãn đều sao cho chiều dài tăng gấp 3 lần và thể tích không đổi. Điện trở của sợi dây sau khi kéo dãn sẽ:',
      options: ['Tăng gấp 9 lần', 'Tăng gấp 3 lần', 'Giảm 3 lần', 'Không đổi'],
      correct_index: 0,
      explanation: 'Thể tích $V = S \\cdot l$ không đổi: khi $l$ tăng 3 lần thì $S$ giảm 3 lần. Vì điện trở $R = \\rho \\cdot l / S$, chiều dài tăng 3 và tiết diện giảm 3 làm $R$ tăng $3 \\times 3 = 9\\,\\text{lần}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Trong một mạch điện có 2 đèn mắc song song, khi một đèn bị chập ngắn mạch (hai đầu nối tắt với nhau) thì hiện tượng gì xảy ra?',
      options: [
        'Cả hai đèn đều tắt ngay và toàn mạch bị ngắn mạch làm đứt cầu chì hoặc nổ nguồn',
        'Đèn còn lại sáng mạnh hơn',
        'Đèn kia vẫn sáng bình thường',
        'Chỉ có đèn bị chập cháy',
      ],
      correct_index: 0,
      explanation: 'Mắc song song mà một nhánh bị nối tắt sẽ nối tắt luôn cả hai cực của nguồn điện, gây đoản mạch toàn bộ hệ thống.',
    },
  ],

  // G8-CH4: Tổng ôn tập thi Chương 4 (Nhiệt học & Truyền nhiệt) - 25 questions
  'G8-CH4': [
    // 10 nhan_biet
    {
      difficulty: 'nhan_biet',
      question_text: 'Năng lượng nhiệt của một vật là:',
      options: ['Tổng động năng của các phân tử cấu tạo nên vật', 'Thế năng của vật', 'Động năng chuyển động của vật', 'Nhiệt độ của vật'],
      correct_index: 0,
      explanation: 'Năng lượng nhiệt là tổng động năng của các phân tử cấu tạo nên vật.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hình thức truyền nhiệt chủ yếu trong chất rắn là:',
      options: ['Dẫn nhiệt', 'Đối lưu', 'Bức xạ nhiệt', 'Khuếch tán'],
      correct_index: 0,
      explanation: 'Chất rắn truyền nhiệt chủ yếu bằng dẫn nhiệt.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hình thức truyền nhiệt chủ yếu trong chất lưu (chất lỏng và chất khí) là:',
      options: ['Đối lưu', 'Dẫn nhiệt', 'Bức xạ nhiệt', 'Tự phát'],
      correct_index: 0,
      explanation: 'Chất lưu truyền nhiệt chủ yếu bằng đối lưu.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hình thức truyền nhiệt duy nhất trong môi trường chân không là:',
      options: ['Bức xạ nhiệt', 'Dẫn nhiệt', 'Đối lưu', 'Điện dẫn'],
      correct_index: 0,
      explanation: 'Trong chân không, nhiệt chỉ có thể truyền bằng bức xạ nhiệt.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Các chất khí khác nhau nở vì nhiệt như thế nào?',
      options: ['Giống nhau', 'Khác nhau', 'Khí nhẹ nở nhiều hơn', 'Tùy màu sắc khí'],
      correct_index: 0,
      explanation: 'Các chất khí khác nhau đều nở vì nhiệt giống nhau.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Độ dãn nở vì nhiệt sắp xếp từ NHIỀU ĐẾN ÍT là:',
      options: ['Chất khí > Chất lỏng > Chất rắn', 'Chất rắn > Chất lỏng > Chất khí', 'Chất lỏng > Chất khí > Chất rắn', 'Như nhau'],
      correct_index: 0,
      explanation: 'Chất khí nở nhiều nhất, chất rắn ít nhất.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Nước có khối lượng riêng lớn nhất ở nhiệt độ nào?',
      options: ['$4^\\circ\\text{C}$', '$0^\\circ\\text{C}$', '$100^\\circ\\text{C}$', '$25^\\circ\\text{C}$'],
      correct_index: 0,
      explanation: 'Ở $4^\\circ\\text{C}$ nước có thể tích nhỏ nhất và khối lượng riêng lớn nhất ($1000\\,\\text{kg/m}^3$).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Băng kép khi bị nung nóng sẽ bị uốn cong về phía thanh kim loại nào?',
      options: ['Thanh dãn nở ít hơn', 'Thanh dãn nở nhiều hơn', 'Không cong', 'Về phía nguồn nhiệt'],
      correct_index: 0,
      explanation: 'Thanh nở ít nằm ở mặt lõm nên băng kép cong về phía thanh nở ít.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khe hở co giãn trên cầu bê tông dùng để làm gì?',
      options: ['Tạo khoảng trống cho dầm cầu dãn nở tự do khi thời tiết nóng', 'Để thoát nước', 'Để xe giảm tốc độ', 'Tiết kiệm vật liệu'],
      correct_index: 0,
      explanation: 'Khe co giãn ngăn ngừa lực nén phá hủy mố cầu khi nhiệt độ tăng.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị đo nhiệt lượng trong hệ SI là:',
      options: ['Joule (J)', 'Calo (cal)', 'Độ C ($^\\circ\\text{C}$)', 'Oát (W)'],
      correct_index: 0,
      explanation: 'Đơn vị chuẩn SI của nhiệt lượng là Joule (J).',
    },

    // 7 thong_hieu
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao xoong nồi nấu ăn làm bằng kim loại còn quai cầm làm bằng nhựa cách nhiệt?',
      options: [
        'Kim loại dẫn nhiệt tốt để nấu chín nhanh, quai nhựa dẫn nhiệt kém để người cầm không bị bỏng',
        'Để nồi nhẹ hơn',
        'Để nồi đẹp hơn',
        'Do nhựa rẻ hơn kim loại',
      ],
      correct_index: 0,
      explanation: 'Đáy kim loại truyền nhiệt nhanh vào thức ăn; quai bọc nhựa cách nhiệt bảo vệ tay người dùng.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao khi lắp điều hòa người ta phải đặt giàn lạnh ở trên cao?',
      options: [
        'Khí lạnh nặng hơn tự chìm xuống đáy tạo dòng đối lưu tuần hoàn khắp phòng',
        'Để tránh trẻ em với tới',
        'Để đỡ ồn',
        'Để thoát nước tốt',
      ],
      correct_index: 0,
      explanation: 'Khí lạnh có khối lượng riêng lớn chìm xuống, khí nóng nhẹ nổi lên tạo dòng đối lưu tự nhiên.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao mùa đông chim thường đứng xù lông?',
      options: [
        'Để giữ một lớp không khí tĩnh dày giữa các sợi lông; không khí tĩnh dẫn nhiệt rất kém giúp giữ ấm',
        'Để chim trông to hơn đe dọa kẻ thù',
        'Để cho lông khô ráo',
        'Do chim bị ốm',
      ],
      correct_index: 0,
      explanation: 'Lông xù giữ lớp không khí tĩnh cách nhiệt tuyệt vời cho cơ thể chim.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Băng kép trong bàn là điện có tác dụng gì?',
      options: [
        'Tự động uốn cong ngắt điện khi bàn là quá nóng và tự nối lại khi nguội đi',
        'Làm bàn là nóng nhanh hơn',
        'Làm bàn là nặng hơn để là phẳng quần áo',
        'Để điều chỉnh điện áp',
      ],
      correct_index: 0,
      explanation: 'Băng kép đóng vai trò rơ-le nhiệt tự động duy trì nhiệt độ cài đặt.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao bề mặt bình năng lượng mặt trời lại sơn màu đen mờ xù xì?',
      options: [
        'Để hấp thụ tối đa bức xạ nhiệt từ Mặt Trời',
        'Để chống bám bụi',
        'Để chống rỉ sét',
        'Để phản xạ ánh sáng',
      ],
      correct_index: 0,
      explanation: 'Mặt đen xù xì hấp thụ bức xạ nhiệt tốt nhất trong các loại bề mặt.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao khi nhúng nhiệt kế vào nước nóng thì lúc đầu cột thủy ngân tụt xuống một chút rồi sau đó mới dâng cao vọt lên?',
      options: [
        'Vỏ thủy tinh tiếp xúc nước nóng trước nở ra làm thể tích bình tăng nên mực thủy ngân tụt; sau đó thủy ngân nhận nhiệt nở nhiều hơn nên dâng vọt lên',
        'Do nước nóng ấn thủy ngân xuống',
        'Do thủy ngân bị co lại',
        'Do nhiệt kế bị lỗi',
      ],
      correct_index: 0,
      explanation: 'Vỏ thủy tinh nở trước nên tụt nhẹ; sau đó thủy ngân nhận nhiệt dãn nở thể tích lớn hơn thủy tinh nhiều lần nên dâng cao.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao người ta không đóng chai nước ngọt, bia đầy ắp đến tận nút chai?',
      options: [
        'Để chừa khoảng trống cho chất lỏng dãn nở khi nhiệt độ môi trường tăng, tránh làm bật nút hoặc vỡ chai',
        'Để bớt nguyên liệu bán có lãi',
        'Để người mua mở nắp dễ hơn',
        'Do máy chiết rót không làm được',
      ],
      correct_index: 0,
      explanation: 'Tránh chất lỏng dãn nở nhiệt sinh áp suất lớn làm nổ vỡ chai thủy tinh.',
    },

    // 5 van_dung
    {
      difficulty: 'van_dung',
      question_text: 'Một thanh ray xe lửa bằng thép dài $20\\,\\text{m}$ ở $15^\\circ\\text{C}$. Khi nhiệt độ tăng đến $45^\\circ\\text{C}$ (biết $\\alpha = 1,2 \\times 10^{-5}\\,\\text{K}^{-1}$), độ dài thanh ray tăng thêm là:',
      options: ['$7,2\\,\\text{mm}$', '$0,72\\,\\text{mm}$', '$72\\,\\text{mm}$', '$3,6\\,\\text{mm}$'],
      correct_index: 0,
      explanation: '$\\Delta l = 20 \\times (1,2 \\times 10^{-5}) \\times 30 = 0,0072\\,\\text{m} = 7,2\\,\\text{mm}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Đun $2\\,\\text{lít}$ nước ($m = 2\\,\\text{kg}$) từ $25^\\circ\\text{C}$ đến khi sôi $100^\\circ\\text{C}$. Biết $c_{\\text{nước}} = 4200\\,\\text{J/(kg}\\cdot\\text{K)}$. Nhiệt lượng cần truyền cho nước là:',
      options: ['$630\\,000\\,\\text{J}$ ($630\\,\\text{kJ}$)', '$840\\,000\\,\\text{J}$', '$210\\,000\\,\\text{J}$', '$420\\,000\\,\\text{J}$'],
      correct_index: 0,
      explanation: '$Q = m \\cdot c \\cdot \\Delta t = 2 \\times 4200 \\times 75 = 630\\,000\\,\\text{J} = 630\\,\\text{kJ}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một ấm nhôm nặng $500\\,\\text{g}$ ($c = 880\\,\\text{J/(kg}\\cdot\\text{K)}$) chứa $1\\,\\text{kg}$ nước ở $20^\\circ\\text{C}$. Nhiệt lượng cần thiết để đun sôi cả ấm và nước lên $100^\\circ\\text{C}$ là:',
      options: ['$371\\,200\\,\\text{J}$', '$336\\,000\\,\\text{J}$', '$35\\,200\\,\\text{J}$', '$420\\,000\\,\\text{J}$'],
      correct_index: 0,
      explanation: '$Q = (m_{\\text{nhôm}} c_{\\text{nhôm}} + m_{\\text{nước}} c_{\\text{nước}}) \\Delta t = (0,5 \\times 880 + 1 \\times 4200) \\times 80 = (440 + 4200) \\times 80 = 4640 \\times 80 = 371\\,200\\,\\text{J}$.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Khí trong xilanh thực hiện công $600\\,\\text{J}$ đẩy piston và tỏa nhiệt ra ngoài $200\\,\\text{J}$. Độ biến thiên nội năng của khí là:',
      options: ['$-800\\,\\text{J}$', '$+400\\,\\text{J}$', '$-400\\,\\text{J}$', '$+800\\,\\text{J}$'],
      correct_index: 0,
      explanation: '$\\Delta U = Q + A = (-200) + (-600) = -800\\,\\text{J}$ (nội năng giảm 800 J).',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Đổi năng lượng $500\\,\\text{kcal}$ sang đơn vị Joule trong hệ SI:',
      options: ['$2\\,093\\,000\\,\\text{J}$', '$500\\,000\\,\\text{J}$', '$119\\,500\\,\\text{J}$', '$4\\,186\\,000\\,\\text{J}$'],
      correct_index: 0,
      explanation: '$500\\,\\text{kcal} = 500\\,000 \\times 4,186\\,\\text{J} = 2\\,093\\,000\\,\\text{J}$.',
    },

    // 3 van_dung_cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một bình cách nhiệt chứa $m_1 = 1\\,\\text{kg}$ nước ở $t_1 = 20^\\circ\\text{C}$. Người ta thả vào bình một khối kim loại có khối lượng $m_2 = 2\\,\\text{kg}$ ở nhiệt độ $t_2 = 100^\\circ\\text{C}$. Nhiệt độ cân bằng của hệ là $t = 30^\\circ\\text{C}$. Bỏ qua hao phí nhiệt ra môi trường và nhiệt dung của bình. Biết nhiệt dung riêng của nước là $c_1 = 4200\\,\\text{J/(kg}\\cdot\\text{K)}$. Nhiệt dung riêng của kim loại $c_2$ là:',
      options: ['$300\\,\\text{J/(kg}\\cdot\\text{K)}$', '$450\\,\\text{J/(kg}\\cdot\\text{K)}$', '$380\\,\\text{J/(kg}\\cdot\\text{K)}$', '$250\\,\\text{J/(kg}\\cdot\\text{K)}$'],
      correct_index: 0,
      explanation: 'Phương trình cân bằng nhiệt: $Q_{\\text{tỏa}} = Q_{\\text{thu}} \\Leftrightarrow m_2 \\cdot c_2 \\cdot (100 - 30) = m_1 \\cdot c_1 \\cdot (30 - 20) \\Leftrightarrow 2 \\times c_2 \\times 70 = 1 \\times 4200 \\times 10 \\Rightarrow 140 c_2 = 42000 \\Rightarrow c_2 = 300\\,\\text{J/(kg}\\cdot\\text{K)}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một thanh kim loại dài $L_0$ ở $0^\\circ\\text{C}$. Khi nung đến $100^\\circ\\text{C}$, chiều dài thanh tăng $0,2\\%$. Hệ số nở dài của kim loại này là:',
      options: ['$2,0 \\times 10^{-5}\\,\\text{K}^{-1}$', '$2,0 \\times 10^{-4}\\,\\text{K}^{-1}$', '$1,2 \\times 10^{-5}\\,\\text{K}^{-1}$', '$0,002\\,\\text{K}^{-1}$'],
      correct_index: 0,
      explanation: 'Ta có $\\Delta L / L_0 = 0,002 = \\alpha \\cdot \\Delta t = \\alpha \\times 100 \\Rightarrow \\alpha = 0,002 / 100 = 2,0 \\times 10^{-5}\\,\\text{K}^{-1}$.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một động cơ nhiệt hoạt động nhận nhiệt lượng $Q_1 = 5000\\,\\text{J}$ từ nguồn nóng và truyền nhiệt lượng $Q_2 = 3500\\,\\text{J}$ cho nguồn lạnh trong mỗi chu trình. Hiệu suất nhiệt của động cơ là:',
      options: ['$30\\%$', '$70\\%$', '$40\\%$', '$25\\%$'],
      correct_index: 0,
      explanation: 'Công sinh ra: $A = Q_1 - Q_2 = 5000 - 3500 = 1500\\,\\text{J}$. Hiệu suất nhiệt: $H = A / Q_1 = 1500 / 5000 = 30\\%$.',
    },
  ],
};

/**
 * Builds 25 distinct questions for any Grade 8 topic
 */
export function buildGrade8Topic25Questions(topicCode: string): SeedQuestionItem[] {
  const pool = GRADE8_CH1_CH2_TOPICS[topicCode] || GRADE8_CH3_CH4_TOPICS[topicCode];
  if (!pool) return [];

  return pool.map((q, idx) => ({
    order_index: idx + 1,
    difficulty: q.difficulty,
    question_text: q.question_text,
    options: q.options,
    correct_index: q.correct_index,
    explanation: q.explanation,
  }));
}

/**
 * Builds 25 synthesis exam questions for each of the 4 Grade 8 Chapters
 */
export function buildGrade8Chapter25ExamQuestions(chapterCode: string): SeedQuestionItem[] {
  const pool = GRADE8_CHAPTER_EXAMS[chapterCode];
  if (!pool) return [];

  return pool.map((q, idx) => ({
    order_index: idx + 1,
    difficulty: q.difficulty,
    question_text: q.question_text,
    options: q.options,
    correct_index: q.correct_index,
    explanation: q.explanation,
  }));
}

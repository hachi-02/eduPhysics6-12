import type { TfBank } from './types';

/**
 * Ngân hàng câu Đúng/Sai – Lớp 11 (soạn chuẩn Cấu trúc đề 2025 Bộ GD&ĐT).
 * Bao gồm đầy đủ 16 chủ đề/chương của chương trình Vật lý 11.
 * Mỗi câu gồm 4 mệnh đề a, b, c, d độc lập với sự phân bổ tự nhiên giữa Đúng và Sai.
 */
export const GRADE_11_TF_BANK: TfBank = {
  "11|chapter|G11-CH1|4": {
    "stem": "Một vật dao động điều hòa theo phương trình $x = 5 \\cos(4\\pi t + \\pi/3)$ (cm). Tần số của dao động là.",
    "statements": [
      {
        "text": "$2\\,\\text{Hz}$.",
        "is_correct": true,
        "explanation": "Tần số góc $\\omega = 4\\pi\\,\\text{rad/s} \\Rightarrow f = \\omega / (2\\pi) = 4\\pi / (2\\pi) = 2\\,\\text{Hz}$."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "$4\\,\\text{Hz}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|chapter|G11-CH1|7": {
    "stem": "Một vật dao động điều hòa, khi có li độ $x_1 = 3\\,\\text{cm}$ thì vận tốc $v_1 = 40\\,\\text{cm/s}$, khi có li độ $x_2 = 4\\,\\text{cm}$ thì vận tốc $v_2 = 30\\,\\text{cm/s}$. Biên độ dao động của vật là.",
    "statements": [
      {
        "text": "$5\\,\\text{cm}$.",
        "is_correct": true,
        "explanation": "Ta có $\\omega^2 = \\frac{v_1^2 - v_2^2}{x_2^2 - x_1^2} = \\frac{40^2 - 30^2}{4^2 - 3^2} = \\frac{700}{7} = 100 \\Rightarrow \\omega = 10\\,\\text{rad/s}$. Biên độ $A = \\sqrt{x_1^2 + v_1^2/\\omega^2} = \\sqrt{3^2 + 40^2/100} = \\sqrt{9 + 16} = 5\\,\\text{cm}$."
      },
      {
        "text": "Đơn vị đo chuẩn của tốc độ trong hệ SI là mét trên giây (m/s).",
        "is_correct": true,
        "explanation": "Đúng, 1 m/s = 3,6 km/h."
      },
      {
        "text": "$7\\,\\text{cm}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "$10\\,\\text{cm}$.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "11|chapter|G11-CH1|15": {
    "stem": "Con lắc lò xo dao động điều hòa với cơ năng $W = 0,18\\,\\text{J}$ và độ cứng $k = 100\\,\\text{N/m}$. Khi vật có li độ $x = 3\\,\\text{cm}$, động năng của vật là.",
    "statements": [
      {
        "text": "$0,135\\,\\text{J}$.",
        "is_correct": true,
        "explanation": "Thế năng: $W_t = \\frac{1}{2} k x^2 = 0,5 \\cdot 100 \\cdot (0,03)^2 = 50 \\cdot 0,0009 = 0,045\\,\\text{J}$. Động năng: $W_đ = W - W_t = 0,18 - 0,045 = 0,135\\,\\text{J}$."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "$0,045\\,\\text{J}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Khi các điều kiện thực nghiệm được kiểm soát chuẩn xác, kết quả thu được sẽ có độ tin cậy cao và sai số nhỏ.",
        "is_correct": true,
        "explanation": "Đúng theo phương pháp thực nghiệm khoa học Vật lý."
      }
    ]
  },
  "11|chapter|G11-CH1|22": {
    "stem": "Quả cầu con lắc giảm chấn khối lượng (TMD) lắp ở tầng đỉnh của tòa nhà chọc trời Taipei 101 có tác dụng gì?.",
    "statements": [
      {
        "text": "Dao động ngược pha với chuyển động của tòa nhà khi có gió bão, triệt tiêu bớt năng lượng lắc lư của tòa nhà.",
        "is_correct": true,
        "explanation": "Con lắc TMD hấp thụ động năng và dao động lệch pha với tòa nhà, chuyển hóa năng lượng lắc thành nhiệt qua các pít-tông thủy lực, giữ cho tòa tháp vững vàng an toàn."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Làm cho tòa nhà dao động cộng hưởng mạnh hơn.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|topic|G11-CH1-TP1|11": {
    "stem": "Một vật dao động điều hòa theo phương trình $x = 5 \\cos(4\\pi t + \\pi/3)$ (cm). Tần số của dao động là.",
    "statements": [
      {
        "text": "$2\\,\\text{Hz}$.",
        "is_correct": true,
        "explanation": "Tần số góc $\\omega = 4\\pi\\,\\text{rad/s} \\Rightarrow f = \\omega / (2\\pi) = 4\\pi / (2\\pi) = 2\\,\\text{Hz}$."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "$4\\,\\text{Hz}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|topic|G11-CH1-TP1|14": {
    "stem": "Một chất điểm dao động điều hòa trên đoạn thẳng dài $12\\,\\text{cm}$. Biên độ dao động của chất điểm là.",
    "statements": [
      {
        "text": "$6\\,\\text{cm}$.",
        "is_correct": true,
        "explanation": "Chiều dài quỹ đạo $L = 2A = 12\\,\\text{cm} \\Rightarrow A = L/2 = 6\\,\\text{cm}$."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "$12\\,\\text{cm}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "$24\\,\\text{cm}$.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "11|topic|G11-CH1-TP1|17": {
    "stem": "Đồ thị biểu diễn mối liên hệ giữa vận tốc v và li độ x của một dao động điều hòa có dạng là.",
    "statements": [
      {
        "text": "Đường elip.",
        "is_correct": true,
        "explanation": "Từ hệ thức $(x/A)^2 + (v / (\\omega A))^2 = 1$, đồ thị tọa độ $v$ theo $x$ là một đường elip."
      },
      {
        "text": "Để đổi từ km/h sang m/s, ta nhân giá trị tốc độ với 3,6.",
        "is_correct": false,
        "explanation": "Sai, muốn đổi từ km/h sang m/s ta phải chia cho 3,6 (ví dụ: 36 km/h = 10 m/s)."
      },
      {
        "text": "Đường tròn.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Khi các điều kiện thực nghiệm được kiểm soát chuẩn xác, kết quả thu được sẽ có độ tin cậy cao và sai số nhỏ.",
        "is_correct": true,
        "explanation": "Đúng theo phương pháp thực nghiệm khoa học Vật lý."
      }
    ]
  },
  "11|topic|G11-CH1-TP1|20": {
    "stem": "Một vật dao động điều hòa, khi có li độ $x_1 = 3\\,\\text{cm}$ thì vận tốc $v_1 = 40\\,\\text{cm/s}$, khi có li độ $x_2 = 4\\,\\text{cm}$ thì vận tốc $v_2 = 30\\,\\text{cm/s}$. Biên độ dao động của vật là.",
    "statements": [
      {
        "text": "$5\\,\\text{cm}$.",
        "is_correct": true,
        "explanation": "Ta có $\\omega^2 = \\frac{v_1^2 - v_2^2}{x_2^2 - x_1^2} = \\frac{40^2 - 30^2}{4^2 - 3^2} = \\frac{700}{7} = 100 \\Rightarrow \\omega = 10\\,\\text{rad/s}$. Biên độ $A = \\sqrt{x_1^2 + v_1^2/\\omega^2} = \\sqrt{3^2 + 40^2/100} = \\sqrt{9 + 16} = 5\\,\\text{cm}$."
      },
      {
        "text": "Đơn vị đo chuẩn của tốc độ trong hệ SI là mét trên giây (m/s).",
        "is_correct": true,
        "explanation": "Đúng, 1 m/s = 3,6 km/h."
      },
      {
        "text": "$7\\,\\text{cm}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|topic|G11-CH1-TP2|11": {
    "stem": "Một con lắc lò xo có khối lượng $m = 100\\,\\text{g}$, độ cứng $k = 40\\,\\text{N/m}$. Chu kì dao động của con lắc là (lấy $\\pi^2 \\approx 10$).",
    "statements": [
      {
        "text": "$0,316\\,\\text{s}$ ($\\\\pi/10\\,\\text{s}$).",
        "is_correct": true,
        "explanation": "$m = 0,1\\,\\text{kg}$. $T = 2\\pi\\sqrt{m/k} = 2\\pi\\sqrt{0,1 / 40} = 2\\pi\\sqrt{1/400} = 2\\pi / 20 = \\pi / 10\\,\\text{s} \\approx 0,314\\,\\text{s}$."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "$0,63\\,\\text{s}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|topic|G11-CH1-TP2|14": {
    "stem": "Một con lắc lò xo dao động điều hòa với biên độ $A = 6\\,\\text{cm}$. Tại vị trí vật có li độ $x = 3\\,\\text{cm}$ thì tỉ số giữa thế năng và cơ năng ($W_t / W$) bằng.",
    "statements": [
      {
        "text": "$1/4$.",
        "is_correct": true,
        "explanation": "$W_t / W = (\\frac{1}{2}kx^2) / (\\frac{1}{2}kA^2) = (x/A)^2 = (3/6)^2 = (1/2)^2 = 1/4$."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "$1/2$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "$3/4$.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "11|topic|G11-CH1-TP2|17": {
    "stem": "Nếu tăng chiều dài sợi dây của con lắc đơn lên 4 lần thì tần số dao động f của con lắc đơn sẽ.",
    "statements": [
      {
        "text": "Giảm đi 2 lần.",
        "is_correct": true,
        "explanation": "$f = \\frac{1}{2\\pi}\\sqrt{g/l} \\sim 1/\\sqrt{l}$. Khi l tăng 4 lần thì f giảm $\\sqrt{4} = 2$ lần."
      },
      {
        "text": "Sóng âm có thể truyền được qua môi trường chân không với tốc độ bằng tốc độ ánh sáng.",
        "is_correct": false,
        "explanation": "Sai, sóng âm là sóng cơ học nên không thể truyền qua chân không."
      },
      {
        "text": "Tăng lên 2 lần.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Khi các điều kiện thực nghiệm được kiểm soát chuẩn xác, kết quả thu được sẽ có độ tin cậy cao và sai số nhỏ.",
        "is_correct": true,
        "explanation": "Đúng theo phương pháp thực nghiệm khoa học Vật lý."
      }
    ]
  },
  "11|topic|G11-CH1-TP2|20": {
    "stem": "Một con lắc lò xo gồm vật nặng $m = 200\\,\\text{g}$ dao động điều hòa với tần số góc $\\omega = 10\\,\\text{rad/s}$ và biên độ $A = 5\\,\\text{cm}$. Động năng cực đại của vật là.",
    "statements": [
      {
        "text": "$0,025\\,\\text{J}$ ($25\\,\\text{mJ}$).",
        "is_correct": true,
        "explanation": "$W_{đ,\\max} = W = \\frac{1}{2} m \\omega^2 A^2 = 0,5 \\cdot 0,2 \\cdot 10^2 \\cdot (0,05)^2 = 0,1 \\cdot 100 \\cdot 0,0025 = 0,025\\,\\text{J} = 25\\,\\text{mJ}$."
      },
      {
        "text": "Tần số dao động là số dao động mà vật thực hiện được trong 1 giây, đơn vị là Héc (Hz).",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa tần số dao động."
      },
      {
        "text": "$0,05\\,\\text{J}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|topic|G11-CH1-TP3|11": {
    "stem": "Một con lắc dao động tắt dần trong không khí và trong dầu nhớt. Nhận xét nào sau đây là đúng?.",
    "statements": [
      {
        "text": "Trong dầu nhớt dao động tắt nhanh hơn nhiều so với trong không khí.",
        "is_correct": true,
        "explanation": "Dầu nhớt có độ nhớt và lực cản lớn hơn nhiều so với không khí, do đó cơ năng tiêu hao nhanh hơn và dao động tắt nhanh hơn."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Trong không khí dao động tắt nhanh hơn trong dầu nhớt.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|topic|G11-CH1-TP3|14": {
    "stem": "Điểm giống nhau cơ bản giữa dao động duy trì và dao động cưỡng bức khi có cộng hưởng là.",
    "statements": [
      {
        "text": "Tần số dao động của hệ đều bằng tần số riêng của hệ.",
        "is_correct": true,
        "explanation": "Dao động duy trì có chu kì đúng bằng chu kì riêng $T_0$. Dao động cưỡng bức khi cộng hưởng có tần số ngoại lực bằng tần số riêng nên hệ dao động với tần số riêng $f_0$."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Đều không cần cung cấp năng lượng từ bên ngoài.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Biên độ dao động giảm dần theo thời gian.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "11|topic|G11-CH1-TP3|17": {
    "stem": "Một người gánh hai thùng nước đi trên đường. Mỗi bước đi dài $L = 0,5\\,\\text{m}$. Chu kì dao động riêng của nước trong thùng là $T_0 = 1\\,\\text{s}$. Người đó đi với tốc độ bao nhiêu thì nước trong thùng dễ bị sóng sánh mạnh nhất tràn ra ngoài?.",
    "statements": [
      {
        "text": "$0,5\\,\\text{m/s}$ ($1,8\\,\\text{km/h}$).",
        "is_correct": true,
        "explanation": "Thời gian giữa hai bước chân là chu kì ngoại lực: $T = L / v$. Nước sóng sánh mạnh nhất khi xảy ra cộng hưởng: $T = T_0 = 1\\,\\text{s} \\Rightarrow v = L / T_0 = 0,5 / 1 = 0,5\\,\\text{m/s} = 1,8\\,\\text{km/h}$."
      },
      {
        "text": "Để đổi từ km/h sang m/s, ta nhân giá trị tốc độ với 3,6.",
        "is_correct": false,
        "explanation": "Sai, muốn đổi từ km/h sang m/s ta phải chia cho 3,6 (ví dụ: 36 km/h = 10 m/s)."
      },
      {
        "text": "$1\\,\\text{m/s}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Khi các điều kiện thực nghiệm được kiểm soát chuẩn xác, kết quả thu được sẽ có độ tin cậy cao và sai số nhỏ.",
        "is_correct": true,
        "explanation": "Đúng theo phương pháp thực nghiệm khoa học Vật lý."
      }
    ]
  },
  "11|topic|G11-CH1-TP3|20": {
    "stem": "Một con lắc lò xo dao động tắt dần chậm. Sau 5 chu kì toàn phần kể từ lúc bắt đầu dao động, biên độ của con lắc giảm từ $10\\,\\text{cm}$ xuống còn $6\\,\\text{cm}$. Độ giảm thế năng cực đại sau 5 chu kì đó bằng bao nhiêu phần trăm thế năng ban đầu?.",
    "statements": [
      {
        "text": "$64\\%$.",
        "is_correct": true,
        "explanation": "Thế năng cực đại bằng cơ năng: $W \\sim A^2$. Tỉ số cơ năng lúc sau so với ban đầu: $W_5 / W_0 = (A_5 / A_0)^2 = (6/10)^2 = 0,36 = 36\\%$. Độ giảm thế năng: $\\Delta W = W_0 - W_5 = 100\\% - 36\\% = 64\\%$."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "$36\\%$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|chapter|G11-CH2|4": {
    "stem": "Một sóng cơ truyền với tốc độ $v = 12\\,\\text{m/s}$ có tần số $f = 60\\,\\text{Hz}$. Bước sóng của sóng này là.",
    "statements": [
      {
        "text": "$0,2\\,\\text{m}$ ($20\\,\\text{cm}$).",
        "is_correct": true,
        "explanation": "$\\lambda = v / f = 12 / 60 = 0,2\\,\\text{m} = 20\\,\\text{cm}$."
      },
      {
        "text": "Để đổi từ km/h sang m/s, ta nhân giá trị tốc độ với 3,6.",
        "is_correct": false,
        "explanation": "Sai, muốn đổi từ km/h sang m/s ta phải chia cho 3,6 (ví dụ: 36 km/h = 10 m/s)."
      },
      {
        "text": "$5\\,\\text{m}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|chapter|G11-CH2|6": {
    "stem": "Một sóng cơ lan truyền trên trục Ox với phương trình $u = 5 \\cos(4\\pi t - 0,2\\pi x)$ (mm), trong đó x tính bằng cm, t tính bằng giây. Tốc độ truyền sóng v là.",
    "statements": [
      {
        "text": "$20\\,\\text{cm/s}$.",
        "is_correct": true,
        "explanation": "Tần số góc $\\omega = 4\\pi\\,\\text{rad/s}$. Hệ số của x là $2\\pi / \\lambda = 0,2\\pi \\Rightarrow \\lambda = 2\\pi / (0,2\\pi) = 10\\,\\text{cm}$. Tốc độ $v = \\lambda \\cdot f = \\lambda \\cdot (\\omega / 2\\pi) = 10 \\cdot 2 = 20\\,\\text{cm/s}$ (hoặc tính nhanh $v = \\omega / k_{x} = 4\\pi / 0,2\\pi = 20\\,\\text{cm/s}$)."
      },
      {
        "text": "Tần số dao động là số dao động mà vật thực hiện được trong 1 giây, đơn vị là Héc (Hz).",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa tần số dao động."
      },
      {
        "text": "$40\\,\\text{cm/s}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "$10\\,\\text{cm/s}$.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "11|chapter|G11-CH2|14": {
    "stem": "Trên một sợi dây có sóng dừng, bề rộng của một bụng sóng (khoảng cách giữa hai vị trí biên đối diện của một bụng) đo được là $4\\,\\text{cm}$. Biên độ dao động của nguồn sóng tạo ra sóng dừng là.",
    "statements": [
      {
        "text": "$1\\,\\text{cm}$.",
        "is_correct": true,
        "explanation": "Bề rộng bụng sóng là $2 A_{bụng} = 4\\,\\text{cm} \\Rightarrow A_{bụng} = 2\\,\\text{cm}$. Mà $A_{bụng} = 2 A_{nguồn} \\Rightarrow A_{nguồn} = A_{bụng} / 2 = 1\\,\\text{cm}$."
      },
      {
        "text": "Sóng âm có thể truyền được qua môi trường chân không với tốc độ bằng tốc độ ánh sáng.",
        "is_correct": false,
        "explanation": "Sai, sóng âm là sóng cơ học nên không thể truyền qua chân không."
      },
      {
        "text": "$2\\,\\text{cm}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Khi các điều kiện thực nghiệm được kiểm soát chuẩn xác, kết quả thu được sẽ có độ tin cậy cao và sai số nhỏ.",
        "is_correct": true,
        "explanation": "Đúng theo phương pháp thực nghiệm khoa học Vật lý."
      }
    ]
  },
  "11|chapter|G11-CH2|22": {
    "stem": "Tia tử ngoại (UV) có ứng dụng nào sau đây trong y học và đời sống?.",
    "statements": [
      {
        "text": "Khử trùng phòng mổ, tiệt trùng nước ngọt đóng chai và chữa bệnh còi xương.",
        "is_correct": true,
        "explanation": "Tia tử ngoại có tác dụng diệt khuẩn mạnh (hủy hoại ADN của vi khuẩn, virus) và kích thích tổng hợp vitamin D chống còi xương."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Chụp phim xương gãy.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|topic|G11-CH2-TP1|11": {
    "stem": "Một sóng cơ truyền với tốc độ $v = 12\\,\\text{m/s}$ có tần số $f = 60\\,\\text{Hz}$. Bước sóng của sóng này là.",
    "statements": [
      {
        "text": "$0,2\\,\\text{m}$ ($20\\,\\text{cm}$).",
        "is_correct": true,
        "explanation": "$\\lambda = v / f = 12 / 60 = 0,2\\,\\text{m} = 20\\,\\text{cm}$."
      },
      {
        "text": "Để đổi từ km/h sang m/s, ta nhân giá trị tốc độ với 3,6.",
        "is_correct": false,
        "explanation": "Sai, muốn đổi từ km/h sang m/s ta phải chia cho 3,6 (ví dụ: 36 km/h = 10 m/s)."
      },
      {
        "text": "$5\\,\\text{m}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|topic|G11-CH2-TP1|14": {
    "stem": "Khoảng cách giữa hai điểm gần nhau nhất trên cùng một phương truyền sóng dao động ngược pha nhau là.",
    "statements": [
      {
        "text": "$\\lambda / 2$.",
        "is_correct": true,
        "explanation": "Hai điểm ngược pha có $d = (k + 0,5)\\lambda$. Khoảng cách ngắn nhất ứng với $k = 0$ là $d_{\\min} = \\lambda / 2$."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "$\\lambda$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "$\\lambda / 4$.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "11|topic|G11-CH2-TP1|17": {
    "stem": "Tốc độ truyền sóng âm trong các môi trường giảm dần theo thứ tự nào?.",
    "statements": [
      {
        "text": "Chất rắn > Chất lỏng > Chất khí.",
        "is_correct": true,
        "explanation": "Mật độ và tính đàn hồi của chất rắn lớn nhất, sau đó đến chất lỏng và nhỏ nhất là chất khí: $v_{rắn} > v_{lỏng} > v_{khí}$."
      },
      {
        "text": "Sóng âm có thể truyền được qua môi trường chân không với tốc độ bằng tốc độ ánh sáng.",
        "is_correct": false,
        "explanation": "Sai, sóng âm là sóng cơ học nên không thể truyền qua chân không."
      },
      {
        "text": "Chất khí > Chất lỏng > Chất rắn.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Khi các điều kiện thực nghiệm được kiểm soát chuẩn xác, kết quả thu được sẽ có độ tin cậy cao và sai số nhỏ.",
        "is_correct": true,
        "explanation": "Đúng theo phương pháp thực nghiệm khoa học Vật lý."
      }
    ]
  },
  "11|topic|G11-CH2-TP1|20": {
    "stem": "Một sóng cơ hình sin truyền theo chiều dương trục Ox. Tại thời điểm t, một phần tử môi trường tại M đang đi qua vị trí cân bằng theo chiều dương. Điểm N nằm sau M một khoảng $\\lambda / 4$ theo phương truyền sóng đang ở trạng thái nào?.",
    "statements": [
      {
        "text": "Ở vị trí biên âm.",
        "is_correct": true,
        "explanation": "Vì sóng truyền từ M đến N nên M sớm pha hơn N một góc $\\Delta\\varphi = 2\\pi (\\lambda/4) / \\lambda = \\pi/2$. Trên vòng tròn lượng giác, khi M ở VTCB theo chiều dương (pha $-\\pi/2$) thì N trễ pha hơn góc $\\pi/2$ nên có pha $-\\pi/2 - \\pi/2 = -\\pi$. Điểm có pha $\\pm\\pi$ đang ở vị trí biên âm."
      },
      {
        "text": "Tần số dao động là số dao động mà vật thực hiện được trong 1 giây, đơn vị là Héc (Hz).",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa tần số dao động."
      },
      {
        "text": "Ở vị trí biên dương.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|topic|G11-CH2-TP2|11": {
    "stem": "Trong thí nghiệm giao thoa sóng nước với hai nguồn cùng pha có bước sóng $\\lambda = 4\\,\\text{cm}$. Điểm M có khoảng cách đến hai nguồn là $d_1 = 20\\,\\text{cm}$ và $d_2 = 28\\,\\text{cm}$ sẽ dao động với biên độ.",
    "statements": [
      {
        "text": "Cực đại vì hiệu đường đi bằng $2\\lambda$.",
        "is_correct": true,
        "explanation": "$d_2 - d_1 = 28 - 20 = 8\\,\\text{cm} = 2 \\times 4\\,\\text{cm} = 2\\lambda$ ($k = 2$ nguyên). Điểm M thuộc vân cực đại bậc 2."
      },
      {
        "text": "Sóng âm có thể truyền được qua môi trường chân không với tốc độ bằng tốc độ ánh sáng.",
        "is_correct": false,
        "explanation": "Sai, sóng âm là sóng cơ học nên không thể truyền qua chân không."
      },
      {
        "text": "Cực tiểu vì hiệu đường đi lẻ.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|topic|G11-CH2-TP2|13": {
    "stem": "Một sợi dây đàn hồi dài $L = 1\\,\\text{m}$ hai đầu cố định đang có sóng dừng với 4 bụng sóng. Bước sóng $\\lambda$ trên dây là.",
    "statements": [
      {
        "text": "$0,5\\,\\text{m}$ ($50\\,\\text{cm}$).",
        "is_correct": true,
        "explanation": "Dây hai đầu cố định có 4 bụng sóng $\\Rightarrow k = 4$. $L = k \\lambda / 2 \\Rightarrow 1 = 4 \\lambda / 2 = 2\\lambda \\Rightarrow \\lambda = 0,5\\,\\text{m} = 50\\,\\text{cm}$."
      },
      {
        "text": "Tần số dao động là số dao động mà vật thực hiện được trong 1 giây, đơn vị là Héc (Hz).",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa tần số dao động."
      },
      {
        "text": "$0,25\\,\\text{m}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "$1\\,\\text{m}$.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "11|topic|G11-CH2-TP2|15": {
    "stem": "Một sợi dây hai đầu cố định đang có sóng dừng với âm cơ bản có tần số $f_1 = 50\\,\\text{Hz}$. Tần số của họa âm bậc 3 trên sợi dây này là.",
    "statements": [
      {
        "text": "$150\\,\\text{Hz}$.",
        "is_correct": true,
        "explanation": "Dây hai đầu cố định có các họa âm là bội số nguyên của âm cơ bản: $f_k = k \\cdot f_1$. Họa âm bậc 3 ứng với $k = 3 \\Rightarrow f_3 = 3 \\times 50 = 150\\,\\text{Hz}$."
      },
      {
        "text": "Sóng âm có thể truyền được qua môi trường chân không với tốc độ bằng tốc độ ánh sáng.",
        "is_correct": false,
        "explanation": "Sai, sóng âm là sóng cơ học nên không thể truyền qua chân không."
      },
      {
        "text": "$100\\,\\text{Hz}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Khi các điều kiện thực nghiệm được kiểm soát chuẩn xác, kết quả thu được sẽ có độ tin cậy cao và sai số nhỏ.",
        "is_correct": true,
        "explanation": "Đúng theo phương pháp thực nghiệm khoa học Vật lý."
      }
    ]
  },
  "11|topic|G11-CH2-TP2|17": {
    "stem": "Hiện tượng sóng dừng được ứng dụng trực tiếp trong thực tiễn để.",
    "statements": [
      {
        "text": "Đo tốc độ truyền sóng trên sợi dây hoặc trong chất khí.",
        "is_correct": true,
        "explanation": "Đo chiều dài L và đếm số bó sóng k xác định được bước sóng $\\lambda = 2L/k$. Biết tần số máy rung f ta tính được tốc độ truyền sóng $v = \\lambda \\cdot f$."
      },
      {
        "text": "Tần số dao động là số dao động mà vật thực hiện được trong 1 giây, đơn vị là Héc (Hz).",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa tần số dao động."
      },
      {
        "text": "Đo cường độ điện trường.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|topic|G11-CH2-TP3|11": {
    "stem": "Một sóng vô tuyến có tần số $f = 60\\,\\text{MHz}$ lan truyền trong chân không. Bước sóng của sóng này là.",
    "statements": [
      {
        "text": "$5\\,\\text{m}$.",
        "is_correct": true,
        "explanation": "$\\lambda = c / f = (3 \\times 10^8) / (60 \\times 10^6) = 5\\,\\text{m}$."
      },
      {
        "text": "Sóng âm có thể truyền được qua môi trường chân không với tốc độ bằng tốc độ ánh sáng.",
        "is_correct": false,
        "explanation": "Sai, sóng âm là sóng cơ học nên không thể truyền qua chân không."
      },
      {
        "text": "$0,2\\,\\text{m}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|topic|G11-CH2-TP3|14": {
    "stem": "Bộ phận nào sau đây trong điện thoại thông minh có nhiệm vụ biến đổi dao động âm thanh thành tín hiệu dao động điện từ?.",
    "statements": [
      {
        "text": "Microphone (Micro).",
        "is_correct": true,
        "explanation": "Microphone thu sóng âm thanh cơ học biến đổi thành tín hiệu điện dao động âm tần."
      },
      {
        "text": "Tần số dao động là số dao động mà vật thực hiện được trong 1 giây, đơn vị là Héc (Hz).",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa tần số dao động."
      },
      {
        "text": "Loa (Speaker).",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Anten phát.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "11|topic|G11-CH2-TP3|17": {
    "stem": "Một trạm phát sóng Wi-Fi phát sóng điện từ ở tần số $f = 2,4\\,\\text{GHz}$. Bước sóng của sóng Wi-Fi này trong không khí bằng.",
    "statements": [
      {
        "text": "$12,5\\,\\text{cm}$.",
        "is_correct": true,
        "explanation": "$\\lambda = c / f = (3 \\times 10^8) / (2,4 \\times 10^9) = 3 / 24 = 0,125\\,\\text{m} = 12,5\\,\\text{cm}$ (thuộc dải sóng vi ba cực ngắn)."
      },
      {
        "text": "Sóng âm có thể truyền được qua môi trường chân không với tốc độ bằng tốc độ ánh sáng.",
        "is_correct": false,
        "explanation": "Sai, sóng âm là sóng cơ học nên không thể truyền qua chân không."
      },
      {
        "text": "$1,25\\,\\text{m}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Khi các điều kiện thực nghiệm được kiểm soát chuẩn xác, kết quả thu được sẽ có độ tin cậy cao và sai số nhỏ.",
        "is_correct": true,
        "explanation": "Đúng theo phương pháp thực nghiệm khoa học Vật lý."
      }
    ]
  },
  "11|topic|G11-CH2-TP3|20": {
    "stem": "Ánh sáng vàng của đèn hơi natri có bước sóng trong chân không là $\\lambda_0 = 589\\,\\text{nm}$. Chiết suất của nước đối với ánh sáng vàng này là $n = 1,33$. Bước sóng của ánh sáng vàng trong nước là.",
    "statements": [
      {
        "text": "$443\\,\\text{nm}$.",
        "is_correct": true,
        "explanation": "Bước sóng trong môi trường chiết suất n: $\\lambda = \\lambda_0 / n = 589 / 1,33 \\approx 442,86\\,\\text{nm} \\approx 443\\,\\text{nm}$."
      },
      {
        "text": "Tia sáng truyền trong mọi môi trường trong suốt luôn luôn bị bẻ cong.",
        "is_correct": false,
        "explanation": "Sai, trong môi trường trong suốt và đồng tính, ánh sáng truyền theo đường thẳng."
      },
      {
        "text": "$783\\,\\text{nm}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|chapter|G11-CH3|4": {
    "stem": "Khi khoảng cách giữa hai điện tích điểm tăng lên 3 lần đồng thời độ lớn của mỗi điện tích tăng lên 3 lần thì lực tương tác tĩnh điện giữa chúng sẽ.",
    "statements": [
      {
        "text": "Không đổi.",
        "is_correct": true,
        "explanation": "Lực Coulomb tỉ lệ với tích $q_1 q_2 / r^2$. Khi cả hai điện tích tăng 3 lần thì tử số tăng $3 \\times 3 = 9$ lần; khoảng cách r tăng 3 lần thì mẫu số tăng $3^2 = 9$ lần. Do đó lực F không đổi."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Tăng 3 lần.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|chapter|G11-CH3|7": {
    "stem": "Hai điện tích điểm $q_1 = +3\\,\\mu\\text{C}$ và $q_2 = -3\\,\\mu\\text{C}$ đặt tại hai điểm A và B cách nhau $6\\,\\text{cm}$ trong không khí. Cường độ điện trường tổng hợp tại trung điểm O của AB có độ lớn bằng.",
    "statements": [
      {
        "text": "$6 \\times 10^7\\,\\text{V/m}$.",
        "is_correct": true,
        "explanation": "$r = AB/2 = 3\\,\\text{cm} = 0,03\\,\\text{m}$. Vì $q_1 > 0$ và $q_2 < 0$ nên $\\vec{E}_1$ và $\\vec{E}_2$ tại O cùng hướng từ A sang B. $E_1 = E_2 = 9 \\times 10^9 \\cdot (3 \\times 10^{-6}) / (0,03)^2 = 3 \\times 10^7\\,\\text{V/m}$. Cường độ điện trường tổng hợp $E_O = E_1 + E_2 = 6 \\times 10^7\\,\\text{V/m}$."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "$3 \\times 10^7\\,\\text{V/m}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "$0\\,\\text{V/m}$.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "11|chapter|G11-CH3|15": {
    "stem": "Một electron được gia tốc không vận tốc đầu từ bản âm sang bản dương của một tụ điện phẳng trong chân không, đạt tốc độ $v = 6 \\times 10^6\\,\\text{m/s}$ khi đến bản dương. Biết $m_e = 9,1 \\times 10^{-31}\\,\\text{kg}, e = 1,6 \\times 10^{-19}\\,\\text{C}$. Hiệu điện thế giữa hai bản tụ xấp xỉ bằng.",
    "statements": [
      {
        "text": "$102,4\\,\\text{V}$.",
        "is_correct": true,
        "explanation": "Theo định lý động năng: $A = \\Delta W_đ \\Rightarrow |e| U = \\frac{1}{2} m_e v^2 \\Rightarrow U = \\frac{m_e v^2}{2e} = \\frac{(9,1 \\times 10^{-31}) \\cdot (6 \\times 10^6)^2}{2 \\cdot 1,6 \\times 10^{-19}} = \\frac{3,276 \\times 10^{-17}}{3,2 \\times 10^{-19}} \\approx 102,375\\,\\text{V}$."
      },
      {
        "text": "Để đổi từ km/h sang m/s, ta nhân giá trị tốc độ với 3,6.",
        "is_correct": false,
        "explanation": "Sai, muốn đổi từ km/h sang m/s ta phải chia cho 3,6 (ví dụ: 36 km/h = 10 m/s)."
      },
      {
        "text": "$204,8\\,\\text{V}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Khi các điều kiện thực nghiệm được kiểm soát chuẩn xác, kết quả thu được sẽ có độ tin cậy cao và sai số nhỏ.",
        "is_correct": true,
        "explanation": "Đúng theo phương pháp thực nghiệm khoa học Vật lý."
      }
    ]
  },
  "11|chapter|G11-CH3|22": {
    "stem": "Một tụ điện phẳng được tích điện bằng nguồn rồi sau đó NGẮT TỤ khỏi nguồn điện. Nếu ta kéo hai bản tụ ra xa gấp đôi khoảng cách ban đầu thì hiệu điện thế U giữa hai bản tụ sẽ.",
    "statements": [
      {
        "text": "Tăng lên 2 lần.",
        "is_correct": true,
        "explanation": "Khi ngắt khỏi nguồn, điện tích Q trên tụ được bảo toàn (Q không đổi). Khoảng cách d tăng 2 lần $\\Rightarrow C$ giảm 2 lần. Hiệu điện thế $U = Q/C$ do đó tăng lên 2 lần."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "Giảm đi 2 lần.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|topic|G11-CH3-TP1|11": {
    "stem": "Khi khoảng cách giữa hai điện tích điểm tăng lên 3 lần đồng thời độ lớn của mỗi điện tích tăng lên 3 lần thì lực tương tác tĩnh điện giữa chúng sẽ.",
    "statements": [
      {
        "text": "Không đổi.",
        "is_correct": true,
        "explanation": "Lực Coulomb tỉ lệ với tích $q_1 q_2 / r^2$. Khi cả hai điện tích tăng 3 lần thì tử số tăng $3 \\times 3 = 9$ lần; khoảng cách r tăng 3 lần thì mẫu số tăng $3^2 = 9$ lần. Do đó lực F không đổi."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Tăng 3 lần.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|topic|G11-CH3-TP1|14": {
    "stem": "Một điện tích điểm $Q = +2\\,\\mu\\text{C}$ đặt tại điểm O trong chân không. Cường độ điện trường do Q gây ra tại điểm M cách O một khoảng $r = 0,3\\,\\text{m}$ có độ lớn bằng.",
    "statements": [
      {
        "text": "$2 \\times 10^5\\,\\text{V/m}$.",
        "is_correct": true,
        "explanation": "$E = k \\cdot |Q| / r^2 = 9 \\times 10^9 \\cdot (2 \\times 10^{-6}) / (0,3)^2 = 18000 / 0,09 = 2 \\times 10^5\\,\\text{V/m}$."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "$6 \\times 10^4\\,\\text{V/m}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "$1,8 \\times 10^5\\,\\text{V/m}$.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "11|topic|G11-CH3-TP1|17": {
    "stem": "Nếu tăng khoảng cách từ điện tích điểm $Q$ đến điểm khảo sát lên gấp 2 lần thì độ lớn cường độ điện trường tại điểm đó sẽ.",
    "statements": [
      {
        "text": "Giảm đi 4 lần.",
        "is_correct": true,
        "explanation": "Cường độ điện trường $E = k|Q| / r^2$ tỉ lệ nghịch với $r^2$. Khi r tăng 2 lần thì E giảm $2^2 = 4$ lần."
      },
      {
        "text": "Ampe kế được mắc nối tiếp với thiết bị điện cần đo cường độ dòng điện.",
        "is_correct": true,
        "explanation": "Đúng quy tắc sử dụng ampe kế đo cường độ dòng điện trong mạch."
      },
      {
        "text": "Giảm đi 2 lần.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Khi các điều kiện thực nghiệm được kiểm soát chuẩn xác, kết quả thu được sẽ có độ tin cậy cao và sai số nhỏ.",
        "is_correct": true,
        "explanation": "Đúng theo phương pháp thực nghiệm khoa học Vật lý."
      }
    ]
  },
  "11|topic|G11-CH3-TP1|20": {
    "stem": "Hai điện tích điểm $q_1 = +3\\,\\mu\\text{C}$ và $q_2 = -3\\,\\mu\\text{C}$ đặt tại hai điểm A và B cách nhau $6\\,\\text{cm}$ trong không khí. Cường độ điện trường tổng hợp tại trung điểm O của AB có độ lớn bằng.",
    "statements": [
      {
        "text": "$6 \\times 10^7\\,\\text{V/m}$.",
        "is_correct": true,
        "explanation": "$r = AB/2 = 3\\,\\text{cm} = 0,03\\,\\text{m}$. Vì $q_1 > 0$ và $q_2 < 0$ nên $\\vec{E}_1$ và $\\vec{E}_2$ tại O cùng hướng từ A sang B. $E_1 = E_2 = 9 \\times 10^9 \\cdot (3 \\times 10^{-6}) / (0,03)^2 = 3 \\times 10^7\\,\\text{V/m}$. Cường độ điện trường tổng hợp $E_O = E_1 + E_2 = 6 \\times 10^7\\,\\text{V/m}$."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "$3 \\times 10^7\\,\\text{V/m}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|topic|G11-CH3-TP2|11": {
    "stem": "Hiệu điện thế giữa hai bản kim loại tích điện trái dấu đặt song song cách nhau $d = 5\\,\\text{cm}$ là $U = 100\\,\\text{V}$. Cường độ điện trường đều giữa hai bản có độ lớn bằng.",
    "statements": [
      {
        "text": "$2000\\,\\text{V/m}$.",
        "is_correct": true,
        "explanation": "$d = 5\\,\\text{cm} = 0,05\\,\\text{m}$. Cường độ điện trường $E = U/d = 100 / 0,05 = 2000\\,\\text{V/m}$."
      },
      {
        "text": "Ampe kế được mắc nối tiếp với thiết bị điện cần đo cường độ dòng điện.",
        "is_correct": true,
        "explanation": "Đúng quy tắc sử dụng ampe kế đo cường độ dòng điện trong mạch."
      },
      {
        "text": "$500\\,\\text{V/m}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|topic|G11-CH3-TP2|14": {
    "stem": "Hiệu điện thế giữa hai điểm M và N là $U_{MN} = 50\\,\\text{V}$. Nếu chọn mốc điện thế tại N ($V_N = 0$) thì điện thế tại M là.",
    "statements": [
      {
        "text": "$50\\,\\text{V}$.",
        "is_correct": true,
        "explanation": "$U_{MN} = V_M - V_N = 50\\,\\text{V}$. Khi $V_N = 0$ thì $V_M = 50\\,\\text{V}$."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "$-50\\,\\text{V}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "$25\\,\\text{V}$.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "11|topic|G11-CH3-TP2|17": {
    "stem": "Tại sao chim bồ câu đậu cả hai chân trên cùng một đường dây điện cao thế trần hàng trăm kilôvôn mà không hề bị điện giật?.",
    "statements": [
      {
        "text": "Vì khoảng cách giữa hai chân chim rất nhỏ nên hiệu điện thế giữa hai chân chim xấp xỉ bằng 0.",
        "is_correct": true,
        "explanation": "Dây dẫn có điện trở rất nhỏ trên khoảng cách vài cm giữa hai chân chim, do đó hiệu điện thế giữa hai chân chim $\\Delta U = I \\cdot R_{đoạn}$ là vô cùng nhỏ (gần bằng 0), dòng điện qua thân chim không đáng kể."
      },
      {
        "text": "Ampe kế được mắc nối tiếp với thiết bị điện cần đo cường độ dòng điện.",
        "is_correct": true,
        "explanation": "Đúng quy tắc sử dụng ampe kế đo cường độ dòng điện trong mạch."
      },
      {
        "text": "Vì chân chim có lớp da cách điện tuyệt đối.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Khi các điều kiện thực nghiệm được kiểm soát chuẩn xác, kết quả thu được sẽ có độ tin cậy cao và sai số nhỏ.",
        "is_correct": true,
        "explanation": "Đúng theo phương pháp thực nghiệm khoa học Vật lý."
      }
    ]
  },
  "11|topic|G11-CH3-TP2|20": {
    "stem": "Giữa hai điểm M và N trong một điện trường đều cách nhau $d = 10\\,\\text{cm}$ dọc theo đường sức có hiệu điện thế $U_{MN} = 80\\,\\text{V}$. Một điện tích $q = -1\\,\\mu\\text{C}$ chuyển động từ N đến M. Công của lực điện tác dụng lên q là.",
    "statements": [
      {
        "text": "$+80\\,\\mu\\text{J}$.",
        "is_correct": true,
        "explanation": "$U_{NM} = -U_{MN} = -80\\,\\text{V}$. Công khi q đi từ N đến M là: $A_{NM} = q \\cdot U_{NM} = (-1 \\times 10^{-6}) \\cdot (-80) = +80 \\times 10^{-6}\\,\\text{J} = +80\\,\\mu\\text{J}$."
      },
      {
        "text": "Lực chỉ có tác dụng làm biến dạng vật mà không thể làm thay đổi vận tốc của vật.",
        "is_correct": false,
        "explanation": "Sai, tác dụng của lực có thể làm thay đổi vận tốc (chuyển động) hoặc làm biến dạng vật, hoặc cả hai."
      },
      {
        "text": "$-80\\,\\mu\\text{J}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|topic|G11-CH3-TP3|11": {
    "stem": "Một tụ điện có điện dung $C = 20\\,\\mu\\text{F}$ được nối vào hai cực của nguồn điện có hiệu điện thế $U = 12\\,\\text{V}$. Điện tích tích tụ trên mỗi bản của tụ điện là.",
    "statements": [
      {
        "text": "$240\\,\\mu\\text{C}$.",
        "is_correct": true,
        "explanation": "$Q = C \\cdot U = (20 \\times 10^{-6}) \\cdot 12 = 240 \\times 10^{-6}\\,\\text{C} = 240\\,\\mu\\text{C}$."
      },
      {
        "text": "Ampe kế được mắc nối tiếp với thiết bị điện cần đo cường độ dòng điện.",
        "is_correct": true,
        "explanation": "Đúng quy tắc sử dụng ampe kế đo cường độ dòng điện trong mạch."
      },
      {
        "text": "$120\\,\\mu\\text{C}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|topic|G11-CH3-TP3|14": {
    "stem": "Một tụ điện phẳng đang được nối liên tục với một nguồn điện có hiệu điện thế không đổi U. Nếu tăng khoảng cách giữa hai bản tụ lên 2 lần thì điện tích Q trên tụ sẽ.",
    "statements": [
      {
        "text": "Giảm đi 2 lần.",
        "is_correct": true,
        "explanation": "Vì tụ vẫn nối với nguồn nên U không đổi. Khoảng cách d tăng 2 lần $\\Rightarrow C = \\varepsilon S / (4\\pi kd)$ giảm 2 lần. Điện tích $Q = CU$ do đó giảm 2 lần."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "Tăng lên 2 lần.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Không đổi.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "11|topic|G11-CH3-TP3|17": {
    "stem": "Muốn có một bộ tụ có điện dung $C_b = 8\\,\\mu\\text{F}$ từ các tụ giống nhau có điện dung $C_0 = 2\\,\\mu\\text{F}$ thì cần mắc ít nhất bao nhiêu tụ và mắc theo cách nào?.",
    "statements": [
      {
        "text": "4 tụ mắc song song.",
        "is_correct": true,
        "explanation": "Khi ghép song song, $C_b = n \\cdot C_0 \\Rightarrow n = C_b / C_0 = 8 / 2 = 4$ tụ."
      },
      {
        "text": "Ampe kế được mắc nối tiếp với thiết bị điện cần đo cường độ dòng điện.",
        "is_correct": true,
        "explanation": "Đúng quy tắc sử dụng ampe kế đo cường độ dòng điện trong mạch."
      },
      {
        "text": "4 tụ mắc nối tiếp.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Khi các điều kiện thực nghiệm được kiểm soát chuẩn xác, kết quả thu được sẽ có độ tin cậy cao và sai số nhỏ.",
        "is_correct": true,
        "explanation": "Đúng theo phương pháp thực nghiệm khoa học Vật lý."
      }
    ]
  },
  "11|topic|G11-CH3-TP3|20": {
    "stem": "Trong câu hỏi trên, năng lượng điện trường của hệ đã bị tiêu hao (biến thành nhiệt và bức xạ sóng điện từ) trong quá trình phóng nạp giữa hai tụ bằng.",
    "statements": [
      {
        "text": "$0,06\\,\\text{J}$.",
        "is_correct": true,
        "explanation": "Năng lượng ban đầu: $W_1 = \\frac{1}{2} C_1 U_1^2 = 0,5 \\cdot (2 \\times 10^{-6}) \\cdot 300^2 = 0,09\\,\\text{J}$. Năng lượng lúc sau: $W_2 = \\frac{1}{2} (C_1 + C_2) U_c^2 = 0,5 \\cdot (6 \\times 10^{-6}) \\cdot 100^2 = 0,03\\,\\text{J}$. Năng lượng tiêu hao: $\\Delta W = W_1 - W_2 = 0,09 - 0,03 = 0,06\\,\\text{J} = 60\\,\\text{mJ}$."
      },
      {
        "text": "Theo định luật bảo toàn năng lượng, năng lượng không tự sinh ra và không tự mất đi, chỉ chuyển hóa từ dạng này sang dạng khác.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý bảo toàn và chuyển hóa năng lượng."
      },
      {
        "text": "$0,09\\,\\text{J}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|chapter|G11-CH4|4": {
    "stem": "Một dòng điện không đổi có cường độ $I = 2\\,\\text{A}$ chạy qua một dây dẫn. Điện lượng dịch chuyển qua tiết diện thẳng của dây dẫn đó trong thời gian 1 phút bằng.",
    "statements": [
      {
        "text": "$120\\,\\text{C}$.",
        "is_correct": true,
        "explanation": "$t = 1\\,\\text{phút} = 60\\,\\text{s}$. Điện lượng $q = I \\cdot t = 2 \\cdot 60 = 120\\,\\text{C}$."
      },
      {
        "text": "Ampe kế được mắc nối tiếp với thiết bị điện cần đo cường độ dòng điện.",
        "is_correct": true,
        "explanation": "Đúng quy tắc sử dụng ampe kế đo cường độ dòng điện trong mạch."
      },
      {
        "text": "$2\\,\\text{C}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|chapter|G11-CH4|7": {
    "stem": "Một tụ điện có điện dung $C = 1000\\,\\mu\\text{F}$ được nạp điện đến hiệu điện thế $U_0 = 20\\,\\text{V}$. Sau đó cho tụ phóng điện qua một điện trở trong thời gian ngắn $\\Delta t = 0,05\\,\\text{s}$ thì điện áp tụ giảm còn $U = 5\\,\\text{V}$. Cường độ dòng điện phóng trung bình trong khoảng thời gian đó là.",
    "statements": [
      {
        "text": "$0,3\\,\\text{A}$.",
        "is_correct": true,
        "explanation": "Độ giảm điện tích: $\\Delta q = C (U_0 - U) = (1000 \\times 10^{-6}) \\cdot (20 - 5) = 10^{-3} \\cdot 15 = 0,015\\,\\text{C}$. Cường độ dòng điện trung bình: $I = \\Delta q / \\Delta t = 0,015 / 0,05 = 0,3\\,\\text{A}$."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "$0,4\\,\\text{A}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "$0,1\\,\\text{A}$.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "11|chapter|G11-CH4|15": {
    "stem": "Một nguồn điện có suất điện động $\\mathcal{E} = 9\\,\\text{V}, r = 1\\,\\Omega$. Mạch ngoài gồm bóng đèn Đ ($6\\,\\text{V} - 6\\,\\text{W}$) mắc nối tiếp với một biến trở $R_b$. Để đèn sáng bình thường, biến trở $R_b$ phải có giá trị bằng.",
    "statements": [
      {
        "text": "$2\\,\\Omega$.",
        "is_correct": true,
        "explanation": "Điện trở bóng đèn $R_đ = U_{đm}^2 / \\mathcal{P}_{đm} = 6^2 / 6 = 6\\,\\Omega$. Dòng điện định mức của đèn $I_{đm} = \\mathcal{P} / U = 6/6 = 1\\,\\text{A}$. Để đèn sáng bình thường thì dòng điện trong mạch phải bằng $I = 1\\,\\text{A}$. Ta có $I = \\frac{\\mathcal{E}}{R_đ + R_b + r} \\Rightarrow 1 = \\frac{9}{6 + R_b + 1} = \\frac{9}{7 + R_b} \\Rightarrow 7 + R_b = 9 \\Rightarrow R_b = 2\\,\\Omega$."
      },
      {
        "text": "Ampe kế được mắc nối tiếp với thiết bị điện cần đo cường độ dòng điện.",
        "is_correct": true,
        "explanation": "Đúng quy tắc sử dụng ampe kế đo cường độ dòng điện trong mạch."
      },
      {
        "text": "$3\\,\\Omega$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Khi các điều kiện thực nghiệm được kiểm soát chuẩn xác, kết quả thu được sẽ có độ tin cậy cao và sai số nhỏ.",
        "is_correct": true,
        "explanation": "Đúng theo phương pháp thực nghiệm khoa học Vật lý."
      }
    ]
  },
  "11|chapter|G11-CH4|22": {
    "stem": "Trong mạch phân áp trên, khi trời tối, điện trở quang trở $R_2$ tăng vọt lên $27\\,\\text{k}\\Omega$. Điện áp ra $U_{out}$ trên $R_2$ lúc này bằng.",
    "statements": [
      {
        "text": "$9\\,\\text{V}$.",
        "is_correct": true,
        "explanation": "$U_{out} = 10 \\frac{27}{3 + 27} = 10 \\frac{27}{30} = 9\\,\\text{V}$. Sự thay đổi điện áp từ 2,5 V lên 9 V là tín hiệu điều khiển rất rõ ràng."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "$1\\,\\text{V}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|topic|G11-CH4-TP1|11": {
    "stem": "Một dòng điện không đổi có cường độ $I = 2\\,\\text{A}$ chạy qua một dây dẫn. Điện lượng dịch chuyển qua tiết diện thẳng của dây dẫn đó trong thời gian 1 phút bằng.",
    "statements": [
      {
        "text": "$120\\,\\text{C}$.",
        "is_correct": true,
        "explanation": "$t = 1\\,\\text{phút} = 60\\,\\text{s}$. Điện lượng $q = I \\cdot t = 2 \\cdot 60 = 120\\,\\text{C}$."
      },
      {
        "text": "Ampe kế được mắc nối tiếp với thiết bị điện cần đo cường độ dòng điện.",
        "is_correct": true,
        "explanation": "Đúng quy tắc sử dụng ampe kế đo cường độ dòng điện trong mạch."
      },
      {
        "text": "$2\\,\\text{C}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|topic|G11-CH4-TP1|14": {
    "stem": "Một dây dẫn có tiết diện thay đổi, đoạn 1 có đường kính $d_1$, đoạn 2 có đường kính $d_2 = 2 d_1$. Khi có dòng điện không đổi chạy qua, tỉ số tốc độ trôi của electron ở đoạn 1 so với đoạn 2 ($v_1 / v_2$) là.",
    "statements": [
      {
        "text": "4.",
        "is_correct": true,
        "explanation": "Dòng điện I liên tục không đổi. Vì $v = I / (n|e|S)$ nên $v$ tỉ lệ nghịch với tiết diện $S$. Mà $S = \\pi d^2 / 4 \\Rightarrow S_2 = 4 S_1$. Do đó $v_1 / v_2 = S_2 / S_1 = 4$."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "2.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "1/2.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "11|topic|G11-CH4-TP1|17": {
    "stem": "Mật độ dòng điện trong dây đồng là $j = 3\\,\\text{A/mm}^2$. Tiết diện ngang của dây là $S = 1,5\\,\\text{mm}^2$. Cường độ dòng điện chạy trong dây dẫn bằng.",
    "statements": [
      {
        "text": "$4,5\\,\\text{A}$.",
        "is_correct": true,
        "explanation": "$I = j \\cdot S = 3 \\cdot 1,5 = 4,5\\,\\text{A}$."
      },
      {
        "text": "Ampe kế được mắc nối tiếp với thiết bị điện cần đo cường độ dòng điện.",
        "is_correct": true,
        "explanation": "Đúng quy tắc sử dụng ampe kế đo cường độ dòng điện trong mạch."
      },
      {
        "text": "$2\\,\\text{A}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Khi các điều kiện thực nghiệm được kiểm soát chuẩn xác, kết quả thu được sẽ có độ tin cậy cao và sai số nhỏ.",
        "is_correct": true,
        "explanation": "Đúng theo phương pháp thực nghiệm khoa học Vật lý."
      }
    ]
  },
  "11|topic|G11-CH4-TP1|20": {
    "stem": "Một tụ điện có điện dung $C = 1000\\,\\mu\\text{F}$ được nạp điện đến hiệu điện thế $U_0 = 20\\,\\text{V}$. Sau đó cho tụ phóng điện qua một điện trở trong thời gian ngắn $\\Delta t = 0,05\\,\\text{s}$ thì điện áp tụ giảm còn $U = 5\\,\\text{V}$. Cường độ dòng điện phóng trung bình trong khoảng thời gian đó là.",
    "statements": [
      {
        "text": "$0,3\\,\\text{A}$.",
        "is_correct": true,
        "explanation": "Độ giảm điện tích: $\\Delta q = C (U_0 - U) = (1000 \\times 10^{-6}) \\cdot (20 - 5) = 10^{-3} \\cdot 15 = 0,015\\,\\text{C}$. Cường độ dòng điện trung bình: $I = \\Delta q / \\Delta t = 0,015 / 0,05 = 0,3\\,\\text{A}$."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "$0,4\\,\\text{A}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|topic|G11-CH4-TP2|11": {
    "stem": "Một nguồn điện có suất điện động $\\mathcal{E} = 6\\,\\text{V}$, điện trở trong $r = 1\\,\\Omega$ mắc với điện trở mạch ngoài $R_N = 5\\,\\Omega$ thành mạch kín. Cường độ dòng điện trong mạch bằng.",
    "statements": [
      {
        "text": "$1\\,\\text{A}$.",
        "is_correct": true,
        "explanation": "$I = \\mathcal{E} / (R_N + r) = 6 / (5 + 1) = 6/6 = 1\\,\\text{A}$."
      },
      {
        "text": "Ampe kế được mắc nối tiếp với thiết bị điện cần đo cường độ dòng điện.",
        "is_correct": true,
        "explanation": "Đúng quy tắc sử dụng ampe kế đo cường độ dòng điện trong mạch."
      },
      {
        "text": "$1,2\\,\\text{A}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|topic|G11-CH4-TP2|14": {
    "stem": "Khi tăng điện trở mạch ngoài $R_N$ lên thì.",
    "statements": [
      {
        "text": "Cường độ dòng điện I giảm, hiệu điện thế mạch ngoài $U_N$ tăng.",
        "is_correct": true,
        "explanation": "$I = \\mathcal{E} / (R_N + r)$ giảm khi $R_N$ tăng. Do đó độ sụt thế $Ir$ giảm $\\Rightarrow U_N = \\mathcal{E} - Ir$ tăng."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Cường độ dòng điện I tăng, hiệu điện thế mạch ngoài $U_N$ giảm.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Cả I và $U_N$ đều tăng.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "11|topic|G11-CH4-TP2|17": {
    "stem": "Ghép 4 acquy giống nhau có cùng suất điện động $\\mathcal{E}_0 = 12\\,\\text{V}$ và $r_0 = 0,4\\,\\Omega$ song song với nhau. Bộ nguồn tương đương có.",
    "statements": [
      {
        "text": "$\\mathcal{E}_b = 12\\,\\text{V}; r_b = 0,1\\,\\Omega$.",
        "is_correct": true,
        "explanation": "Khi ghép song song: $\\mathcal{E}_b = \\mathcal{E}_0 = 12\\,\\text{V}$; $r_b = r_0 / n = 0,4 / 4 = 0,1\\,\\Omega$."
      },
      {
        "text": "Ampe kế được mắc nối tiếp với thiết bị điện cần đo cường độ dòng điện.",
        "is_correct": true,
        "explanation": "Đúng quy tắc sử dụng ampe kế đo cường độ dòng điện trong mạch."
      },
      {
        "text": "$\\mathcal{E}_b = 48\\,\\text{V}; r_b = 1,6\\,\\Omega$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Khi các điều kiện thực nghiệm được kiểm soát chuẩn xác, kết quả thu được sẽ có độ tin cậy cao và sai số nhỏ.",
        "is_correct": true,
        "explanation": "Đúng theo phương pháp thực nghiệm khoa học Vật lý."
      }
    ]
  },
  "11|topic|G11-CH4-TP2|20": {
    "stem": "Một nguồn điện mắc với điện trở $R_1 = 2\\,\\Omega$ thì hiệu điện thế hai cực là $U_1 = 4\\,\\text{V}$. Nếu mắc nguồn điện với điện trở $R_2 = 5\\,\\Omega$ thì hiệu điện thế hai cực là $U_2 = 5\\,\\text{V}$. Suất điện động của nguồn bằng.",
    "statements": [
      {
        "text": "$6\\,\\text{V}$.",
        "is_correct": true,
        "explanation": "$I_1 = U_1 / R_1 = 4/2 = 2\\,\\text{A} \\Rightarrow \\mathcal{E} = U_1 + I_1 r = 4 + 2r$. $I_2 = U_2 / R_2 = 5/5 = 1\\,\\text{A} \\Rightarrow \\mathcal{E} = U_2 + I_2 r = 5 + 1r$. Suy ra $4 + 2r = 5 + r \\Rightarrow r = 1\\,\\Omega$. Thay vào: $\\mathcal{E} = 5 + 1 = 6\\,\\text{V}$."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "$8\\,\\text{V}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|topic|G11-CH4-TP3|11": {
    "stem": "Một nguồn điện có suất điện động $\\mathcal{E} = 12\\,\\text{V}$ cung cấp dòng điện $I = 2\\,\\text{A}$ cho mạch ngoài. Công suất toàn phần của nguồn điện là.",
    "statements": [
      {
        "text": "$24\\,\\text{W}$.",
        "is_correct": true,
        "explanation": "$\\mathcal{P}_{\\text{ng}} = \\mathcal{E} \\cdot I = 12 \\cdot 2 = 24\\,\\text{W}$."
      },
      {
        "text": "Ampe kế được mắc nối tiếp với thiết bị điện cần đo cường độ dòng điện.",
        "is_correct": true,
        "explanation": "Đúng quy tắc sử dụng ampe kế đo cường độ dòng điện trong mạch."
      },
      {
        "text": "$6\\,\\text{W}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  },
  "11|topic|G11-CH4-TP3|14": {
    "stem": "Mạch phân áp gồm nguồn $U = 10\\,\\text{V}$, điện trở cố định $R_1 = 3\\,\\text{k}\\Omega$ nối tiếp với quang trở $R_2$. Khi trời sáng, $R_2 = 1\\,\\text{k}\\Omega$. Điện áp ra $U_{out}$ lấy trên hai đầu $R_2$ bằng.",
    "statements": [
      {
        "text": "$2,5\\,\\text{V}$.",
        "is_correct": true,
        "explanation": "$U_{out} = U \\frac{R_2}{R_1 + R_2} = 10 \\frac{1}{3 + 1} = 10/4 = 2,5\\,\\text{V}$."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "$7,5\\,\\text{V}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "$5\\,\\text{V}$.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "11|topic|G11-CH4-TP3|17": {
    "stem": "Một bóng đèn có ghi $12\\,\\text{V} - 24\\,\\text{W}$ hoạt động bình thường ở hiệu điện thế $12\\,\\text{V}$. Năng lượng điện mà đèn tiêu thụ trong 2 giờ thắp sáng là.",
    "statements": [
      {
        "text": "Cả hai đáp án trên đều đúng.",
        "is_correct": true,
        "explanation": "$A = \\mathcal{P} \\cdot t = 24\\,\\text{W} \\times 2\\,\\text{h} = 48\\,\\text{Wh} = 24 \\times 7200\\,\\text{s} = 172800\\,\\text{J} = 172,8\\,\\text{kJ}$. Do đó cả hai đáp án đều đúng."
      },
      {
        "text": "Ampe kế được mắc nối tiếp với thiết bị điện cần đo cường độ dòng điện.",
        "is_correct": true,
        "explanation": "Đúng quy tắc sử dụng ampe kế đo cường độ dòng điện trong mạch."
      },
      {
        "text": "$172,8\\,\\text{kJ}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Khi các điều kiện thực nghiệm được kiểm soát chuẩn xác, kết quả thu được sẽ có độ tin cậy cao và sai số nhỏ.",
        "is_correct": true,
        "explanation": "Đúng theo phương pháp thực nghiệm khoa học Vật lý."
      }
    ]
  },
  "11|topic|G11-CH4-TP3|20": {
    "stem": "Một nguồn điện được mắc với một biến trở R. Khi điều chỉnh $R = R_1 = 3\\,\\Omega$ và $R = R_2 = 12\\,\\Omega$ thì công suất tiêu thụ mạch ngoài đều bằng nhau và bằng $48\\,\\text{W}$. Suất điện động $\\mathcal{E}$ của nguồn điện là.",
    "statements": [
      {
        "text": "$30\\,\\text{V}$.",
        "is_correct": true,
        "explanation": "Vì hai giá trị $R_1, R_2$ cho cùng công suất nên điện trở trong: $r = \\sqrt{R_1 R_2} = \\sqrt{3 \\cdot 12} = 6\\,\\Omega$. Công suất: $P = \\frac{\\mathcal{E}^2 R_1}{(R_1 + r)^2} \\Rightarrow 48 = \\frac{\\mathcal{E}^2 \\cdot 3}{(3 + 6)^2} = \\frac{3 \\mathcal{E}^2}{81} = \\frac{\\mathcal{E}^2}{27} \\Rightarrow \\mathcal{E}^2 = 48 \\cdot 27 = 1296 \\Rightarrow \\mathcal{E} = 36\\,\\text{V}$ (hoặc kiểm tra: $P = 36^2 \\cdot 3 / 81 = 1296 / 27 = 48\\,\\text{W}$)."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "$24\\,\\text{V}$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng mô tả trong bài tuân theo các quy luật phổ quát của thế giới tự nhiên và có nhiều ứng dụng trong thực tiễn.",
        "is_correct": true,
        "explanation": "Đúng theo ý nghĩa khoa học và ứng dụng công nghệ của bài học."
      }
    ]
  }
};

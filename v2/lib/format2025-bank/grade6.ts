import type { TfBank } from './types';

/**
 * Ngân hàng câu Đúng/Sai – Lớp 6 (soạn chuẩn Cấu trúc đề 2025 Bộ GD&ĐT).
 * Bao gồm đầy đủ 19 chủ đề/chương của chương trình Vật lý 6.
 * Mỗi câu gồm 4 mệnh đề a, b, c, d độc lập với sự phân bổ tự nhiên giữa Đúng và Sai.
 */
export const GRADE_6_TF_BANK: TfBank = {
  "6|chapter|CH1|11": {
    "stem": "Một thước thẳng có vạch cuối cùng ghi số 30 (đơn vị cm), giữa vạch số 0 và vạch số 1 cm được chia làm 10 khoảng đều nhau. GHĐ và ĐCNN của thước là.",
    "statements": [
      {
        "text": "GHĐ 30 cm, ĐCNN 1 mm (0,1 cm).",
        "is_correct": true,
        "explanation": "Vạch lớn nhất là 30 cm ⇒ GHĐ = 30 cm. ĐCNN = (1 - 0) / 10 = 0,1 cm = 1 mm."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "GHĐ 30 cm, ĐCNN 1 cm.",
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
  "6|chapter|CH1|13": {
    "stem": "Nhiệt độ phòng học đang là 27°C. Hỏi nhiệt độ này tương ứng với bao nhiêu Kelvin (K)?.",
    "statements": [
      {
        "text": "300 K.",
        "is_correct": true,
        "explanation": "Áp dụng công thức: T(K) = t(°C) + 273 = 27 + 273 = 300 K."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "246 K.",
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
  "6|chapter|CH1|16": {
    "stem": "Nhiệt độ bề mặt của một vật đo được là 323 K. Nếu đổi sang độ Celsius (°C) thì giá trị đó là.",
    "statements": [
      {
        "text": "50°C.",
        "is_correct": true,
        "explanation": "Ta có: t(°C) = T(K) - 273 = 323 - 273 = 50°C."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "60°C.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "40°C.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "6|chapter|CH1|19": {
    "stem": "Một em bé đang bị sốt có thân nhiệt là 102,2°F. Hỏi theo thang nhiệt độ Celsius (°C), em bé đó đang sốt bao nhiêu độ?.",
    "statements": [
      {
        "text": "39,0°C.",
        "is_correct": true,
        "explanation": "Ta có: t(°C) = (102,2 - 32) / 1,8 = 70,2 / 1,8 = 39,0°C."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "38,0°C.",
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
  "6|topic|C1-B1|11": {
    "stem": "Một thước thẳng có vạch cuối cùng ghi số 30 (đơn vị cm), giữa vạch số 0 và vạch số 1 cm được chia làm 10 khoảng đều nhau. GHĐ và ĐCNN của thước là.",
    "statements": [
      {
        "text": "GHĐ 30 cm, ĐCNN 1 mm (0,1 cm).",
        "is_correct": true,
        "explanation": "Vạch lớn nhất là 30 cm ⇒ GHĐ = 30 cm. ĐCNN = (1 - 0) / 10 = 0,1 cm = 1 mm."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "GHĐ 30 cm, ĐCNN 1 cm.",
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
  "6|topic|C1-B1|14": {
    "stem": "Đổi đơn vị thể tích: 0,08 m³ bằng bao nhiêu lít (L) và bao nhiêu cm³?.",
    "statements": [
      {
        "text": "80 L và 80.000 cm³.",
        "is_correct": true,
        "explanation": "1 m³ = 1000 L = 1.000.000 cm³ ⇒ 0,08 m³ = 0,08 × 1000 = 80 L = 80.000 cm³."
      },
      {
        "text": "Trong hệ đơn vị quốc tế SI, đơn vị đo chuẩn của thể tích là mét khối (m³).",
        "is_correct": true,
        "explanation": "Đúng theo quy chuẩn hệ đo lường quốc tế SI."
      },
      {
        "text": "8 L và 8000 cm³.",
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
  "6|topic|C1-B1|18": {
    "stem": "Để đo thể tích một hòn đá to không bỏ lọt bình chia độ, ta cần dùng bộ dụng cụ nào?.",
    "statements": [
      {
        "text": "Bình tràn kết hợp với bình chứa và bình chia độ.",
        "is_correct": true,
        "explanation": "Với vật rắn không bỏ lọt bình chia độ, ta thả vật vào bình tràn chứa đầy nước, hứng nước tràn ra vào bình chứa rồi đổ sang bình chia độ để đọc thể tích."
      },
      {
        "text": "1 mét khối (m³) tương ứng với đúng 100 lít (L).",
        "is_correct": false,
        "explanation": "Sai, 1 m³ tương ứng với 1000 lít (hoặc 1.000.000 cm³)."
      },
      {
        "text": "Chỉ cần một cái thước dây.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Một chiếc cân đồng hồ.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "6|topic|C1-B1|19": {
    "stem": "Bốn học sinh đo chiều dài bàn học bằng cùng một thước có ĐCNN là 2 mm và ghi kết quả: An: 120,3 cm; Bình: 120,4 cm; Chi: 120,5 cm; Dũng: 120,1 cm. Ai đã ghi kết quả ĐÚNG quy tắc ĐCNN?.",
    "statements": [
      {
        "text": "Bình.",
        "is_correct": true,
        "explanation": "ĐCNN = 2 mm = 0,2 cm. Vậy phần thập phân khi viết theo đơn vị cm phải là số chẵn (,0; ,2; ,4; ,6; ,8). Chỉ có Bình (120,4 cm) ghi đúng."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "An.",
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
  "6|topic|C1-B2|11": {
    "stem": "Đổi đơn vị khối lượng: 0,35 tấn bằng bao nhiêu kilôgam (kg) và bao nhiêu yến?.",
    "statements": [
      {
        "text": "350 kg và 35 yến.",
        "is_correct": true,
        "explanation": "1 tấn = 1000 kg = 100 yến ⇒ 0,35 tấn = 350 kg = 35 yến."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "35 kg và 3,5 yến.",
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
  "6|topic|C1-B2|13": {
    "stem": "Để cân một bao gạo khoảng 15 kg, ta nên chọn chiếc cân nào dưới đây để đo một lần chính xác nhất?.",
    "statements": [
      {
        "text": "Cân đồng hồ có GHĐ 20 kg, ĐCNN 50 g.",
        "is_correct": true,
        "explanation": "Bao gạo 15 kg cần cân có GHĐ lớn hơn 15 kg một chút (20 kg) và ĐCNN nhỏ (50 g) để đạt độ chính xác cao trong 1 lần cân."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Cân điện tử nhà bếp có GHĐ 2 kg, ĐCNN 1 g.",
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
  "6|topic|C1-B2|16": {
    "stem": "Nút \"TARE\" (Trừ bì) trên cân điện tử có tác dụng gì khi cân chất lỏng đựng trong cốc?.",
    "statements": [
      {
        "text": "Đưa số chỉ của cân về 0 sau khi đã đặt cốc rỗng lên cân, giúp đọc trực tiếp khối lượng chất lỏng đổ vào sau đó.",
        "is_correct": true,
        "explanation": "Nút TARE giúp loại bỏ khối lượng của vỏ cốc (bì) bằng cách đặt lại điểm 0 khi cốc rỗng đang ở trên đĩa cân."
      },
      {
        "text": "Ampe kế được mắc nối tiếp với thiết bị điện cần đo cường độ dòng điện.",
        "is_correct": true,
        "explanation": "Đúng quy tắc sử dụng ampe kế đo cường độ dòng điện trong mạch."
      },
      {
        "text": "Tắt nguồn cân điện tử.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Nhân đôi khối lượng hiển thị trên màn hình.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "6|topic|C1-B2|21": {
    "stem": "Để xác định khối lượng của 1 chiếc đinh ốc rất nhỏ bằng chiếc cân đồng hồ có ĐCNN 10 g, cách làm nào sau đây hợp lý nhất?.",
    "statements": [
      {
        "text": "Đếm 100 chiếc đinh ốc giống hệt nhau đặt lên cân, đọc tổng khối lượng rồi chia cho 100.",
        "is_correct": true,
        "explanation": "Khi cân 100 chiếc đinh ốc cùng lúc (ví dụ được 350 g), ta chia cho 100 sẽ tìm được chính xác khối lượng 1 chiếc là 3,5 g."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Đặt 1 chiếc đinh ốc lên cân rồi ước lượng.",
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
  "6|topic|C1-B3|15": {
    "stem": "Cho biết rượu êtylic sôi ở 78°C và đông đặc ở -117°C; thủy ngân sôi ở 357°C và đông đặc ở -39°C. Để đo nhiệt độ không khí ở vùng Bắc Cực có thể xuống tới -55°C, ta phải dùng nhiệt kế nào?.",
    "statements": [
      {
        "text": "Nhiệt kế rượu.",
        "is_correct": true,
        "explanation": "Ở -55°C, thủy ngân đã bị đông đặc thành chất rắn (vì đông đặc ở -39°C), còn rượu vẫn ở thể lỏng (mãi tới -117°C mới đông đặc) nên phải dùng nhiệt kế rượu."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Nhiệt kế thủy ngân.",
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
  "6|topic|C1-B3|11": {
    "stem": "Nhiệt độ phòng học đang là 27°C. Hỏi nhiệt độ này tương ứng với bao nhiêu Kelvin (K)?.",
    "statements": [
      {
        "text": "300 K.",
        "is_correct": true,
        "explanation": "Áp dụng công thức: T(K) = t(°C) + 273 = 27 + 273 = 300 K."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "246 K.",
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
  "6|topic|C1-B3|14": {
    "stem": "Một du khách ở Mỹ thấy nhiệt kế ngoài trời chỉ 68°F. Nhiệt độ đó bằng bao nhiêu độ Celsius (°C)?.",
    "statements": [
      {
        "text": "20°C.",
        "is_correct": true,
        "explanation": "Áp dụng công thức ngược: t(°C) = (68 - 32) / 1,8 = 36 / 1,8 = 20°C."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "15°C.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "25°C.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "6|topic|C1-B3|18": {
    "stem": "Một em bé đang bị sốt có thân nhiệt là 102,2°F. Hỏi theo thang nhiệt độ Celsius (°C), em bé đó đang sốt bao nhiêu độ?.",
    "statements": [
      {
        "text": "39,0°C.",
        "is_correct": true,
        "explanation": "Ta có: t(°C) = (102,2 - 32) / 1,8 = 70,2 / 1,8 = 39,0°C."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "38,0°C.",
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
  "6|chapter|CH2|11": {
    "stem": "Trường hợp nào dưới đây chứng tỏ lực làm ĐỔI HƯỚNG chuyển động của vật?.",
    "statements": [
      {
        "text": "Quả bóng bàn đang bay tới chạm vào mặt vợt rồi bật ngược sang phía bên kia.",
        "is_correct": true,
        "explanation": "Bóng bàn đang bay theo hướng này bị vợt đánh bật sang hướng khác là sự đổi hướng chuyển động."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "Quả táo rụng từ trên cành rơi thẳng xuống đất.",
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
  "6|chapter|CH2|14": {
    "stem": "Gió thổi làm căng cánh buồm và đẩy thuyền buồm chạy trên mặt biển. Lực của gió tác dụng lên cánh buồm là lực tiếp xúc hay lực không tiếp xúc? Vì sao?.",
    "statements": [
      {
        "text": "Lực tiếp xúc, vì các phân tử không khí chuyển động (gió) va chạm trực tiếp vào bề mặt vải buồm.",
        "is_correct": true,
        "explanation": "Dù không khí trong suốt nhưng gió là dòng không khí chạm trực tiếp vào mặt cánh buồm nên đây là LỰC TIẾP XÚC!"
      },
      {
        "text": "Lực chỉ có tác dụng làm biến dạng vật mà không thể làm thay đổi vận tốc của vật.",
        "is_correct": false,
        "explanation": "Sai, tác dụng của lực có thể làm thay đổi vận tốc (chuyển động) hoặc làm biến dạng vật, hoặc cả hai."
      },
      {
        "text": "Lực không tiếp xúc, vì không nhìn thấy gió.",
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
  "6|chapter|CH2|17": {
    "stem": "Trong trường hợp nào sau đây, lực tác dụng chỉ làm vật bị biến dạng mà KHÔNG làm thay đổi chuyển động của cả vật?.",
    "statements": [
      {
        "text": "Dùng hai tay ép hai đầu một lò xo ngắn lại rồi giữ đứng yên trên bàn.",
        "is_correct": true,
        "explanation": "Khi ép lò xo và giữ đứng yên, lò xo bị ngắn lại (biến dạng) nhưng trạng thái đứng yên không đổi."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Đá quả bóng lăn trên sân.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Thả hòn sỏi rơi xuống giếng.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "6|chapter|CH2|20": {
    "stem": "Một nhà du hành vũ trụ cùng bộ đồ bảo hộ có tổng khối lượng là 90 kg. Hãy tính trọng lượng của nhà du hành này khi ở trên Trái Đất và khi đứng trên bề mặt Mặt Trăng (lực hút Mặt Trăng bằng 1/6 Trái Đất).",
    "statements": [
      {
        "text": "Trên Trái Đất: 900 N; Trên Mặt Trăng: 150 N.",
        "is_correct": true,
        "explanation": "P_Trái_Đất = 10 × 90 = 900 N. Trên Mặt Trăng: P_Mặt_Trăng = 900 / 6 = 150 N."
      },
      {
        "text": "Lực chỉ có tác dụng làm biến dạng vật mà không thể làm thay đổi vận tốc của vật.",
        "is_correct": false,
        "explanation": "Sai, tác dụng của lực có thể làm thay đổi vận tốc (chuyển động) hoặc làm biến dạng vật, hoặc cả hai."
      },
      {
        "text": "Trên Trái Đất: 90 N; Trên Mặt Trăng: 15 N.",
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
  "6|topic|C2-B1|11": {
    "stem": "Trường hợp nào dưới đây chứng tỏ lực làm ĐỔI HƯỚNG chuyển động của vật?.",
    "statements": [
      {
        "text": "Quả bóng bàn đang bay tới chạm vào mặt vợt rồi bật ngược sang phía bên kia.",
        "is_correct": true,
        "explanation": "Bóng bàn đang bay theo hướng này bị vợt đánh bật sang hướng khác là sự đổi hướng chuyển động."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "Quả táo rụng từ trên cành rơi thẳng xuống đất.",
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
  "6|topic|C2-B1|14": {
    "stem": "Khi thả tay khỏi dây cung đã kéo căng, dây cung đẩy mũi tên bay vút đi. Lực đẩy của dây cung lên mũi tên chủ yếu làm mũi tên.",
    "statements": [
      {
        "text": "Đang đứng yên bắt đầu chuyển động rất nhanh.",
        "is_correct": true,
        "explanation": "Mũi tên từ trạng thái đứng yên trên giá cung được dây cung đẩy bay vọt đi (biến đổi chuyển động)."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Đang chuyển động bị dừng lại.",
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
  "6|topic|C2-B1|17": {
    "stem": "Khi một đầu tàu hỏa bắt đầu kéo các toa tàu rời khỏi nhà ga, vật nào là vật tác dụng lực kéo và vật nào chịu lực kéo đó?.",
    "statements": [
      {
        "text": "Đầu tàu tác dụng lực kéo lên các toa tàu phía sau.",
        "is_correct": true,
        "explanation": "Đầu tàu là vật gây ra lực kéo lên móc nối của các toa tàu phía sau."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Đường ray tác dụng lực kéo lên đầu tàu.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hành khách tác dụng lực kéo lên đoàn tàu.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "6|topic|C2-B1|20": {
    "stem": "Một người dùng búa đóng một chiếc đinh sắt ngập sâu vào tấm gỗ. Lực của đầu búa tác dụng lên mũ đinh đã gây ra tác dụng chính nào đối với chiếc đinh (giả sử đinh không bị cong)?.",
    "statements": [
      {
        "text": "Làm chiếc đinh từ đứng yên chuyển động tiến sâu vào trong gỗ (biến đổi chuyển động).",
        "is_correct": true,
        "explanation": "Đối với chiếc đinh cứng không bị cong, lực đập của búa làm đinh chuyển động ngập vào gỗ; còn đối với tấm gỗ thì gỗ bị lún tách ra (biến dạng)."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Làm chiếc đinh tan chảy.",
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
  "6|topic|C2-B2|13": {
    "stem": "Một lực kế có vạch lớn nhất ghi 5 N, giữa vạch 0 N và vạch 1 N được chia thành 5 khoảng đều nhau. GHĐ và ĐCNN của lực kế này là.",
    "statements": [
      {
        "text": "GHĐ 5 N, ĐCNN 0,2 N.",
        "is_correct": true,
        "explanation": "GHĐ = 5 N; ĐCNN = (1 - 0) / 5 = 0,2 N."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "GHĐ 5 N, ĐCNN 0,1 N.",
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
  "6|topic|C2-B2|14": {
    "stem": "Khi kéo một khối gỗ trượt trên mặt bàn nằm ngang từ trái sang phải, mũi tên biểu diễn lực kéo của tay có phương và chiều.",
    "statements": [
      {
        "text": "Phương nằm ngang, chiều từ trái sang phải.",
        "is_correct": true,
        "explanation": "Kéo dọc mặt bàn ngang từ trái sang phải nên lực có phương nằm ngang, chiều từ trái sang phải."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Phương thẳng đứng, chiều từ dưới lên.",
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
  "6|topic|C2-B2|16": {
    "stem": "Trên cùng một hình vẽ với tỉ xích 1 cm ứng với 20 N, lực F1 được vẽ dài 3 cm và lực F2 được vẽ dài 6 cm. Nhận xét nào sau đây đúng?.",
    "statements": [
      {
        "text": "F1 = 60 N và F2 = 120 N (F2 gấp đôi F1).",
        "is_correct": true,
        "explanation": "F1 = 3 × 20 = 60 N; F2 = 6 × 20 = 120 N."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "F1 = 30 N và F2 = 60 N.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "F1 lớn hơn F2.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "6|topic|C2-B2|17": {
    "stem": "Một chiếc cặp sách có trọng lượng 45 N. Trong các lực kế sau, nên chọn lực kế nào để đo trọng lượng chiếc cặp này một cách chính xác và an toàn nhất?.",
    "statements": [
      {
        "text": "Lực kế có GHĐ 50 N, ĐCNN 0,5 N.",
        "is_correct": true,
        "explanation": "Cặp nặng 45 N nên phải chọn lực kế có GHĐ ≥ 45 N (lực kế 50 N là vừa khít và có ĐCNN 0,5 N nhỏ hơn nhiều so với loại 500 N)."
      },
      {
        "text": "Lực chỉ có tác dụng làm biến dạng vật mà không thể làm thay đổi vận tốc của vật.",
        "is_correct": false,
        "explanation": "Sai, tác dụng của lực có thể làm thay đổi vận tốc (chuyển động) hoặc làm biến dạng vật, hoặc cả hai."
      },
      {
        "text": "Lực kế có GHĐ 10 N, ĐCNN 0,1 N.",
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
  "6|topic|C2-B3|16": {
    "stem": "Thợ xây thường dùng một dụng cụ gồm quả nặng bằng kim loại buộc vào đầu sợi dây mềm gọi là \"dây dọi\". Khi quả dọi đứng yên, sợi dây luôn căng theo phương nào?.",
    "statements": [
      {
        "text": "Phương thẳng đứng (nhờ trọng lực tác dụng lên quả dọi).",
        "is_correct": true,
        "explanation": "Trọng lực kéo quả dọi thẳng xuống dưới làm dây dọi căng đúng theo phương thẳng đứng, giúp thợ xây kiểm tra độ thẳng đứng của tường."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Phương nằm ngang.",
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
  "6|topic|C2-B3|17": {
    "stem": "Trong các câu nói hàng ngày sau, câu nào dùng từ \"trọng lượng\" đúng với ý nghĩa Vật lý?.",
    "statements": [
      {
        "text": "Chiếc cầu này chịu được xe có trọng lượng tối đa 100.000 N.",
        "is_correct": true,
        "explanation": "Trọng lượng là lực nên phải có đơn vị là Newton (N). Các câu dùng kg hoặc g thực chất đang nói về khối lượng."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Túi đường này có trọng lượng 2 kg.",
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
  "6|topic|C2-B3|18": {
    "stem": "Một nhà du hành vũ trụ cùng bộ đồ bảo hộ có tổng khối lượng là 90 kg. Hãy tính trọng lượng của nhà du hành này khi ở trên Trái Đất và khi đứng trên bề mặt Mặt Trăng (lực hút Mặt Trăng bằng 1/6 Trái Đất).",
    "statements": [
      {
        "text": "Trên Trái Đất: 900 N; Trên Mặt Trăng: 150 N.",
        "is_correct": true,
        "explanation": "P_Trái_Đất = 10 × 90 = 900 N. Trên Mặt Trăng: P_Mặt_Trăng = 900 / 6 = 150 N."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "Trên Trái Đất: 90 N; Trên Mặt Trăng: 15 N.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Trên Trái Đất: 900 N; Trên Mặt Trăng: 900 N.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "6|topic|C2-B3|20": {
    "stem": "Nếu biểu diễn trọng lực P của một vật có khối lượng 6 kg bằng một mũi tên theo tỉ xích 1 cm ứng với 15 N, thì mũi tên đó phải vẽ.",
    "statements": [
      {
        "text": "Phương thẳng đứng, chiều từ trên xuống, dài 4 cm.",
        "is_correct": true,
        "explanation": "Trọng lượng P = 10 × 6 = 60 N. Độ dài mũi tên: 60 / 15 = 4 cm; phương thẳng đứng, chiều từ trên xuống."
      },
      {
        "text": "Lực chỉ có tác dụng làm biến dạng vật mà không thể làm thay đổi vận tốc của vật.",
        "is_correct": false,
        "explanation": "Sai, tác dụng của lực có thể làm thay đổi vận tốc (chuyển động) hoặc làm biến dạng vật, hoặc cả hai."
      },
      {
        "text": "Phương thẳng đứng, chiều từ dưới lên, dài 4 cm.",
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
  "6|topic|C2-B4|11": {
    "stem": "Gió thổi làm căng cánh buồm và đẩy thuyền buồm chạy trên mặt biển. Lực của gió tác dụng lên cánh buồm là lực tiếp xúc hay lực không tiếp xúc? Vì sao?.",
    "statements": [
      {
        "text": "Lực tiếp xúc, vì các phân tử không khí chuyển động (gió) va chạm trực tiếp vào bề mặt vải buồm.",
        "is_correct": true,
        "explanation": "Dù không khí trong suốt nhưng gió là dòng không khí chạm trực tiếp vào mặt cánh buồm nên đây là LỰC TIẾP XÚC!"
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "Lực không tiếp xúc, vì không nhìn thấy gió.",
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
  "6|topic|C2-B4|13": {
    "stem": "Lực nào giữ cho Mặt Trăng luôn chuyển động quay quanh Trái Đất mà không bay mất vào vũ trụ?.",
    "statements": [
      {
        "text": "Lực hút hấp dẫn (không tiếp xúc) giữa Trái Đất và Mặt Trăng.",
        "is_correct": true,
        "explanation": "Giữa Trái Đất và Mặt Trăng là khoảng chân không ~384.000 km; lực hấp dẫn không tiếp xúc giữ Mặt Trăng trên quỹ đạo."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Lực tiếp xúc của bầu khí quyển.",
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
  "6|topic|C2-B4|16": {
    "stem": "Một quả táo đang treo lơ lửng trên cành cây. Những lực tác dụng lên quả táo lúc đó là.",
    "statements": [
      {
        "text": "Lực kéo của cuống cây (lực tiếp xúc) và Trọng lực của Trái Đất (lực không tiếp xúc).",
        "is_correct": true,
        "explanation": "Cuống cây gắn trực tiếp với quả táo (lực tiếp xúc hướng lên), còn Trái Đất hút từ xa (trọng lực không tiếp xúc hướng xuống)."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "Hai lực không tiếp xúc.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hai lực tiếp xúc.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "6|topic|C2-B4|19": {
    "stem": "Xét 5 lực sau: (1) Lực của gió đẩy cánh quạt điện gió; (2) Lực của nam châm hút ghim sắt cách 3 cm; (3) Trọng lực tác dụng lên giọt mưa đang rơi; (4) Lực cản của không khí lên giọt mưa; (5) Lực của lược nhựa nhiễm điện hút sợi tóc khô từ xa. Những lực nào là LỰC KHÔNG TIẾP XÚC?.",
    "statements": [
      {
        "text": "(2), (3), (5).",
        "is_correct": true,
        "explanation": "(2) Lực từ, (3) Trọng lực, (5) Lực tĩnh điện là lực không tiếp xúc. Còn (1) gió chạm cánh quạt và (4) không khí chạm giọt mưa đều là lực tiếp xúc!"
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "(1), (2), (3).",
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
  "6|topic|C2-B5|17": {
    "stem": "Khi kéo dãn lò xo bằng một lực càng lớn (trong giới hạn đàn hồi) thì độ lớn lực đàn hồi của lò xo sẽ.",
    "statements": [
      {
        "text": "Càng lớn (tỉ lệ thuận với độ biến dạng Δl).",
        "is_correct": true,
        "explanation": "Độ biến dạng càng lớn thì lực đàn hồi sinh ra càng lớn."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Càng nhỏ đi.",
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
  "6|topic|C2-B5|12": {
    "stem": "Một lò xo có chiều dài tự nhiên l₀ = 15 cm. Khi treo một vật nặng vào thì lò xo dãn thêm một đoạn Δl = 3,5 cm. Chiều dài l của lò xo lúc đó là.",
    "statements": [
      {
        "text": "18,5 cm.",
        "is_correct": true,
        "explanation": "l = l₀ + Δl = 15 + 3,5 = 18,5 cm."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "11,5 cm.",
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
  "6|topic|C2-B5|15": {
    "stem": "Một lò xo có chiều dài tự nhiên 20 cm. Khi bị một vật nặng đè lên trên làm lò xo nén ngắn lại một đoạn 4 cm thì chiều dài của lò xo lúc bị nén là.",
    "statements": [
      {
        "text": "16 cm.",
        "is_correct": true,
        "explanation": "Khi bị nén: l = l₀ - Δl = 20 - 4 = 16 cm."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "24 cm.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "5 cm.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "6|topic|C2-B5|19": {
    "stem": "Một lò xo có chiều dài tự nhiên l₀ = 10 cm. Khi treo vật có trọng lượng P₁ = 2 N thì lò xo dài 15 cm. Nếu treo một vật khác làm lò xo có chiều dài l₂ = 22,5 cm thì vật đó có trọng lượng P₂ bằng.",
    "statements": [
      {
        "text": "5 N.",
        "is_correct": true,
        "explanation": "Khi P₁ = 2 N: Δl₁ = 15 - 10 = 5 cm (tức là mỗi 1 N làm dãn 2,5 cm). Khi l₂ = 22,5 cm: Δl₂ = 22,5 - 10 = 12,5 cm ⇒ Trọng lượng P₂ = 12,5 / 2,5 = 5 N."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "3 N.",
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
  "6|topic|C2-B6|11": {
    "stem": "Trong trường hợp nào dưới đây, lực ma sát có tác dụng CÓ LỢI?.",
    "statements": [
      {
        "text": "Ma sát giữa viên phấn và mặt bảng giúp viết được chữ rõ nét trên bảng.",
        "is_correct": true,
        "explanation": "Nhờ ma sát giữa mặt bảng hơi nhám và viên phấn mà các hạt phấn bám lại trên bảng tạo thành nét chữ."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "Ma sát làm mòn đĩa và xích xe đạp.",
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
  "6|topic|C2-B6|13": {
    "stem": "Đặt một viên gạch hình hộp chữ nhật trên mặt bàn gỗ nằm ngang theo hai cách: Cách 1 đặt nằm bẹt (diện tích mặt tiếp xúc lớn); Cách 2 đặt dựng đứng (diện tích mặt tiếp xúc nhỏ). Dùng lực kế kéo viên gạch trượt đều trên mặt bàn. So sánh lực ma sát trượt ở hai cách.",
    "statements": [
      {
        "text": "Lực ma sát trượt ở hai cách là NHƯ NHAU (vì cùng khối lượng và cùng độ nhám bề mặt).",
        "is_correct": true,
        "explanation": "Lực ma sát trượt phụ thuộc vào bản chất/độ nhám bề mặt và áp lực (trọng lượng viên gạch), KHÔNG phụ thuộc vào diện tích mặt tiếp xúc!"
      },
      {
        "text": "Lực chỉ có tác dụng làm biến dạng vật mà không thể làm thay đổi vận tốc của vật.",
        "is_correct": false,
        "explanation": "Sai, tác dụng của lực có thể làm thay đổi vận tốc (chuyển động) hoặc làm biến dạng vật, hoặc cả hai."
      },
      {
        "text": "Cách 1 có lực ma sát lớn hơn nhiều so với Cách 2.",
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
  "6|topic|C2-B6|17": {
    "stem": "Nếu trên mặt sàn nhà bị đổ nước xà phòng trơn trượt, tại sao chúng ta rất dễ bị ngã khi bước đi?.",
    "statements": [
      {
        "text": "Vì lớp nước xà phòng làm giảm mạnh lực ma sát nghỉ giữa bàn chân và sàn nhà.",
        "is_correct": true,
        "explanation": "Nước xà phòng lấp đầy các khe nhám làm lực ma sát nghỉ giảm xuống gần bằng 0 khiến chân bị trượt."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Vì trọng lực tác dụng lên cơ thể tăng lên đột ngột.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Vì lực cản không khí tăng lên.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "6|topic|C2-B6|20": {
    "stem": "Hai tờ giấy A4 giống hệt nhau: Tờ thứ nhất để phẳng nguyên vẹn, tờ thứ hai vo tròn chặt lại thành một viên nhỏ. Thả đồng thời cả hai từ cùng độ cao 2 m trong phòng kín gió. Hiện tượng nào xảy ra và vì sao?.",
    "statements": [
      {
        "text": "Viên giấy vo tròn rơi chạm đất nhanh hơn nhiều vì diện tích mặt cản nhỏ nên chịu lực cản không khí nhỏ hơn tờ giấy phẳng.",
        "is_correct": true,
        "explanation": "Hai tờ giấy có cùng trọng lượng P, nhưng tờ giấy để phẳng có diện tích tiếp xúc không khí lớn nên chịu lực cản không khí rất lớn làm rơi chậm."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Hai tờ giấy chạm đất cùng một lúc vì có cùng khối lượng.",
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
  "6|chapter|CH3|11": {
    "stem": "Động năng của một chiếc ô tô đang chạy trên đường phụ thuộc vào hai yếu tố nào?.",
    "statements": [
      {
        "text": "Khối lượng của xe và tốc độ chuyển động của xe.",
        "is_correct": true,
        "explanation": "Vật có khối lượng càng lớn và chuyển động càng nhanh thì động năng càng lớn."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Màu sơn và hãng sản xuất xe.",
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
  "6|chapter|CH3|13": {
    "stem": "Tại sao năng lượng gió và năng lượng Mặt Trời được gọi là \"Năng lượng sạch\"?.",
    "statements": [
      {
        "text": "Vì quá trình chuyển hóa thành điện năng không phải đốt cháy nhiên liệu nên không phát thải khí độc hại và khí nhà kính.",
        "is_correct": true,
        "explanation": "Điện gió và điện Mặt Trời không đốt nhiên liệu nên không xả khói bụi hay khí CO₂ trong lúc vận hành."
      },
      {
        "text": "Theo định luật bảo toàn năng lượng, năng lượng không tự sinh ra và không tự mất đi, chỉ chuyển hóa từ dạng này sang dạng khác.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý bảo toàn và chuyển hóa năng lượng."
      },
      {
        "text": "Vì các thiết bị thu năng lượng không bao giờ bị bám bụi.",
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
  "6|chapter|CH3|15": {
    "stem": "Khi ném một viên đá thẳng đứng từ mặt đất lên cao, trong quá trình viên đá đang bay lên đến điểm cao nhất, sự chuyển hóa năng lượng nào xảy ra?.",
    "statements": [
      {
        "text": "Động năng giảm dần và chuyển hóa thành Thế năng hấp dẫn tăng dần.",
        "is_correct": true,
        "explanation": "Khi bay lên cao, viên đá chậm dần (động năng giảm) và độ cao tăng (thế năng hấp dẫn tăng)."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Thế năng hấp dẫn chuyển thành Động năng.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hóa năng chuyển thành Điện năng.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "6|chapter|CH3|17": {
    "stem": "Trong các vật sau, vật nào đang tích trữ THẾ NĂNG ĐÀN HỒI?.",
    "statements": [
      {
        "text": "Cánh cung tên đang được cung thủ kéo căng.",
        "is_correct": true,
        "explanation": "Cánh cung và dây cung bị uốn cong, kéo căng (biến dạng đàn hồi) nên tích trữ thế năng đàn hồi."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Quả bưởi treo trên cành cây.",
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
  "6|topic|C3-B1|11": {
    "stem": "Động năng của một chiếc ô tô đang chạy trên đường phụ thuộc vào hai yếu tố nào?.",
    "statements": [
      {
        "text": "Khối lượng của xe và tốc độ chuyển động của xe.",
        "is_correct": true,
        "explanation": "Vật có khối lượng càng lớn và chuyển động càng nhanh thì động năng càng lớn."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Màu sơn và hãng sản xuất xe.",
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
  "6|topic|C3-B1|13": {
    "stem": "Trong các vật sau, vật nào đang tích trữ THẾ NĂNG ĐÀN HỒI?.",
    "statements": [
      {
        "text": "Cánh cung tên đang được cung thủ kéo căng.",
        "is_correct": true,
        "explanation": "Cánh cung và dây cung bị uốn cong, kéo căng (biến dạng đàn hồi) nên tích trữ thế năng đàn hồi."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Quả bưởi treo trên cành cây.",
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
  "6|topic|C3-B1|16": {
    "stem": "Cây xanh sử dụng dạng năng lượng nào từ Mặt Trời để thực hiện quá trình quang hợp tạo ra chất hữu cơ?.",
    "statements": [
      {
        "text": "Quang năng (Năng lượng ánh sáng).",
        "is_correct": true,
        "explanation": "Diệp lục của cây xanh hấp thụ quang năng từ ánh sáng Mặt Trời để chuyển hóa thành hóa năng."
      },
      {
        "text": "Theo định luật bảo toàn năng lượng, năng lượng không tự sinh ra và không tự mất đi, chỉ chuyển hóa từ dạng này sang dạng khác.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý bảo toàn và chuyển hóa năng lượng."
      },
      {
        "text": "Năng lượng âm.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Thế năng đàn hồi.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "6|topic|C3-B1|20": {
    "stem": "Xét một chiếc đồng hồ quả lắc lên dây cót đang hoạt động treo trên tường cao 2 m. Trong chiếc đồng hồ đó đang tồn tại những dạng năng lượng cơ học nào?.",
    "statements": [
      {
        "text": "Gồm cả Thế năng hấp dẫn (do treo ở độ cao 2 m), Thế năng đàn hồi (trong dây cót bị cuộn căng) và Động năng (quả lắc và kim đang chuyển động).",
        "is_correct": true,
        "explanation": "Đồng hồ treo cao 2 m (thế năng hấp dẫn), dây cót thép cuộn căng (thế năng đàn hồi), quả lắc đung đưa (động năng)."
      },
      {
        "text": "Theo định luật bảo toàn năng lượng, năng lượng không tự sinh ra và không tự mất đi, chỉ chuyển hóa từ dạng này sang dạng khác.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý bảo toàn và chuyển hóa năng lượng."
      },
      {
        "text": "Chỉ có thế năng hấp dẫn.",
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
  "6|topic|C3-B2|11": {
    "stem": "Khi thả một quả bóng từ độ cao h rơi xuống mặt đất (bỏ qua sức cản không khí), trong quá trình đang rơi xuống, năng lượng của quả bóng chuyển hóa.",
    "statements": [
      {
        "text": "Thế năng hấp dẫn giảm dần và chuyển hóa thành Động năng tăng dần.",
        "is_correct": true,
        "explanation": "Khi rơi xuống, độ cao giảm (thế năng hấp dẫn giảm) và tốc độ tăng lên (động năng tăng)."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Động năng giảm dần, Thế năng hấp dẫn tăng dần.",
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
  "6|topic|C3-B2|12": {
    "stem": "Khi ném một viên đá thẳng đứng từ mặt đất lên cao, trong quá trình viên đá đang bay lên đến điểm cao nhất, sự chuyển hóa năng lượng nào xảy ra?.",
    "statements": [
      {
        "text": "Động năng giảm dần và chuyển hóa thành Thế năng hấp dẫn tăng dần.",
        "is_correct": true,
        "explanation": "Khi bay lên cao, viên đá chậm dần (động năng giảm) và độ cao tăng (thế năng hấp dẫn tăng)."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Thế năng hấp dẫn chuyển thành Động năng.",
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
  "6|topic|C3-B2|15": {
    "stem": "Trong quá trình sạc pin cho điện thoại di động, sự chuyển hóa năng lượng có ích diễn ra trong viên pin là.",
    "statements": [
      {
        "text": "Điện năng chuyển hóa thành Hóa năng tích trữ trong pin (kèm một phần nhỏ Nhiệt năng hao phí làm ấm máy).",
        "is_correct": true,
        "explanation": "Khi SẠC pin: Điện năng → Hóa năng dự trữ. Khi DÙNG pin: Hóa năng → Điện năng."
      },
      {
        "text": "Theo định luật bảo toàn năng lượng, năng lượng không tự sinh ra và không tự mất đi, chỉ chuyển hóa từ dạng này sang dạng khác.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý bảo toàn và chuyển hóa năng lượng."
      },
      {
        "text": "Hóa năng chuyển thành Điện năng.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Quang năng chuyển thành Cơ năng.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "6|topic|C3-B2|18": {
    "stem": "Một động cơ điện của máy bơm nước được cung cấp 2000 J điện năng mỗi giây. Biết hiệu suất của máy bơm là 75%. Hãy tính năng lượng cơ học có ích để bơm nước và năng lượng hao phí trong mỗi giây.",
    "statements": [
      {
        "text": "Có ích: 1500 J; Hao phí: 500 J.",
        "is_correct": true,
        "explanation": "W_ích = 75% × 2000 = 0,75 × 2000 = 1500 J. Năng lượng hao phí: W_hp = 2000 - 1500 = 500 J."
      },
      {
        "text": "Theo định luật bảo toàn năng lượng, năng lượng không tự sinh ra và không tự mất đi, chỉ chuyển hóa từ dạng này sang dạng khác.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý bảo toàn và chuyển hóa năng lượng."
      },
      {
        "text": "Có ích: 500 J; Hao phí: 1500 J.",
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
  "6|topic|C3-B3|11": {
    "stem": "Tại sao năng lượng gió và năng lượng Mặt Trời được gọi là \"Năng lượng sạch\"?.",
    "statements": [
      {
        "text": "Vì quá trình chuyển hóa thành điện năng không phải đốt cháy nhiên liệu nên không phát thải khí độc hại và khí nhà kính.",
        "is_correct": true,
        "explanation": "Điện gió và điện Mặt Trời không đốt nhiên liệu nên không xả khói bụi hay khí CO₂ trong lúc vận hành."
      },
      {
        "text": "Theo định luật bảo toàn năng lượng, năng lượng không tự sinh ra và không tự mất đi, chỉ chuyển hóa từ dạng này sang dạng khác.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý bảo toàn và chuyển hóa năng lượng."
      },
      {
        "text": "Vì các thiết bị thu năng lượng không bao giờ bị bám bụi.",
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
  "6|topic|C3-B3|13": {
    "stem": "Ở các vùng nông thôn Việt Nam, người dân thường xây hầm Biogas để ủ chất thải chăn nuôi tạo ra khí đốt đun bếp. Đây là ứng dụng của nguồn năng lượng tái tạo nào?.",
    "statements": [
      {
        "text": "Năng lượng sinh khối (Biomass).",
        "is_correct": true,
        "explanation": "Khí Biogas tạo ra từ sự phân hủy chất thải hữu cơ chăn nuôi thuộc nguồn năng lượng sinh khối."
      },
      {
        "text": "Theo định luật bảo toàn năng lượng, năng lượng không tự sinh ra và không tự mất đi, chỉ chuyển hóa từ dạng này sang dạng khác.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý bảo toàn và chuyển hóa năng lượng."
      },
      {
        "text": "Năng lượng địa nhiệt.",
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
  "6|topic|C3-B3|15": {
    "stem": "Xăng sinh học E5 (pha 95% xăng khoáng và 5% cồn sinh học ethanol sản xuất từ sắn, mía, ngô) có ưu điểm gì?.",
    "statements": [
      {
        "text": "Giúp tận dụng nguồn năng lượng sinh khối tái tạo và giảm lượng khí thải độc hại ra môi trường.",
        "is_correct": true,
        "explanation": "Ethanol sinh học từ sắn/mía là nguồn tái tạo, giúp giảm phụ thuộc dầu mỏ và cháy sạch hơn."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Làm xe chạy không cần động cơ.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Là nhiên liệu hoàn toàn không cháy.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "6|topic|C3-B3|17": {
    "stem": "Tại sao không nên để tivi, máy tính, sạc điện thoại ở chế độ chờ (Standby - vẫn cắm điện và sáng đèn báo nhỏ) suốt nhiều ngày không dùng?.",
    "statements": [
      {
        "text": "Vì ở chế độ chờ các thiết bị vẫn âm thầm tiêu thụ một lượng điện năng hao phí liên tục.",
        "is_correct": true,
        "explanation": "Điện năng tiêu thụ ngầm ở chế độ chờ của nhiều thiết bị cộng lại trong cả năm gây lãng phí hàng chục đến hàng trăm kWh điện."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "Vì làm tăng tốc độ mạng internet.",
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
  "6|chapter|CH4|11": {
    "stem": "Giả sử Trái Đất vẫn quay quanh Mặt Trời nhưng NGỪNG tự quay quanh trục của nó thì điều gì sẽ xảy ra với hiện tượng ngày và đêm?.",
    "statements": [
      {
        "text": "Sẽ không còn sự luân phiên ngày đêm 24 giờ; một mặt hướng về Mặt Trời sẽ kéo dài ban ngày cực nóng và mặt bên kia chìm trong đêm lạnh giá rất dài.",
        "is_correct": true,
        "explanation": "Nếu không tự quay quanh trục, sự luân phiên ngày đêm hằng ngày (24h) sẽ biến mất."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Ngày và đêm vẫn dài 12 giờ như cũ.",
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
  "6|chapter|CH4|13": {
    "stem": "Trong dân gian Việt Nam thường gọi \"Sao Mai\" (thấy lúc rạng sáng) và \"Sao Hôm\" (thấy lúc chạng vạng tối). Thực chất trong thiên văn học, Sao Mai và Sao Hôm là cùng một thiên thể nào?.",
    "statements": [
      {
        "text": "Chính là hành tinh Kim tinh (Venus) phản xạ ánh sáng Mặt Trời rất mạnh.",
        "is_correct": true,
        "explanation": "Sao Mai và Sao Hôm thực chất là hành tinh Kim tinh (không phải ngôi sao tự phát sáng!)."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Là một ngôi sao tự phát sáng ngoài Hệ Mặt Trời.",
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
  "6|chapter|CH4|16": {
    "stem": "Tại sao Hỏa tinh (Sao Hỏa) lại được mệnh danh là \"Hành tinh Đỏ\"?.",
    "statements": [
      {
        "text": "Vì bề mặt của nó phủ nhiều bụi oxit sắt (gỉ sắt) có màu đỏ cam.",
        "is_correct": true,
        "explanation": "Đất đá bề mặt Hỏa tinh giàu oxit sắt (Fe₂O₃) nên nhìn từ xa có màu đỏ cam đặc trưng."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Vì nó đang bốc cháy rừng rực.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Vì nó nằm sát Mặt Trời nhất.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "6|chapter|CH4|20": {
    "stem": "Một câu tục ngữ dân gian Việt Nam nói về lịch trăng: \"Mùng tám trăng ná (nửa cái nỏ/bán nguyệt), mười sáu trăng treo\". Câu tục ngữ này mô tả đúng những pha nào của Mặt Trăng?.",
    "statements": [
      {
        "text": "Ngày mùng 8 âm lịch là Trăng bán nguyệt đầu tháng; ngày 16 âm lịch là Trăng tròn.",
        "is_correct": true,
        "explanation": "Mùng 8 âm lịch Mặt Trăng đi được 1/4 chu kỳ nên có hình bán nguyệt (như cánh cung/cái ná); ngày 15-16 là chính Rằm trăng tròn."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Ngày mùng 8 là Không trăng; ngày 16 là Trăng lưỡi liềm.",
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
  "6|topic|C4-B1|11": {
    "stem": "Giả sử Trái Đất vẫn quay quanh Mặt Trời nhưng NGỪNG tự quay quanh trục của nó thì điều gì sẽ xảy ra với hiện tượng ngày và đêm?.",
    "statements": [
      {
        "text": "Sẽ không còn sự luân phiên ngày đêm 24 giờ; một mặt hướng về Mặt Trời sẽ kéo dài ban ngày cực nóng và mặt bên kia chìm trong đêm lạnh giá rất dài.",
        "is_correct": true,
        "explanation": "Nếu không tự quay quanh trục, sự luân phiên ngày đêm hằng ngày (24h) sẽ biến mất."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Ngày và đêm vẫn dài 12 giờ như cũ.",
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
  "6|topic|C4-B1|14": {
    "stem": "Khi ở Việt Nam đang là 12 giờ trưa (ban ngày), thì ở đất nước nằm tại vị trí đối diện xuyên tâm bên kia quả địa cầu (cách 180° kinh tuyến, như vùng Nam Mỹ) đang là khoảng mấy giờ?.",
    "statements": [
      {
        "text": "Đang là 12 giờ đêm (nửa đêm - ban đêm).",
        "is_correct": true,
        "explanation": "Hai điểm đối diện qua tâm Trái Đất lệch nhau 180° / 15° = 12 giờ: một bên là giữa trưa (ban ngày) thì bên kia đang là nửa đêm (ban đêm)."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Cũng là 12 giờ trưa.",
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
  "6|topic|C4-B1|17": {
    "stem": "Đường ranh giới tưởng tượng trên bề mặt Trái Đất ngăn cách giữa bán cầu đang là ban ngày và bán cầu đang là ban đêm tại một thời điểm được gọi là.",
    "statements": [
      {
        "text": "Đường phân chia Sáng - Tối (Vòng cực ngày đêm).",
        "is_correct": true,
        "explanation": "Vòng tròn lớn chia nửa cầu được Mặt Trời chiếu sáng và nửa cầu khuất tối gọi là đường phân chia sáng tối."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Đường xích đạo.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Kinh tuyến gốc.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "6|topic|C4-B1|20": {
    "stem": "Thủ đô London (Anh) nằm ở múi giờ gốc số 0 (GMT+0), còn Hà Nội nằm ở múi giờ GMT+7. Một trận bóng đá diễn ra tại London lúc 14 giờ chiều (giờ London). Hỏi khán giả ở Việt Nam phải bật tivi xem trực tiếp vào lúc mấy giờ (giờ Việt Nam)?.",
    "statements": [
      {
        "text": "21 giờ tối (9 giờ tối) cùng ngày.",
        "is_correct": true,
        "explanation": "Việt Nam ở múi giờ +7 nên nhanh (sớm) hơn London 7 tiếng: 14 + 7 = 21 giờ (9 giờ tối)."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "7 giờ sáng cùng ngày.",
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
  "6|topic|C4-B2|11": {
    "stem": "Khi đường nối từ Trái Đất đến Mặt Trăng vuông góc (góc 90°) với hướng tia sáng từ Mặt Trời chiếu tới, người trên Trái Đất sẽ nhìn thấy Mặt Trăng ở pha nào?.",
    "statements": [
      {
        "text": "Trăng bán nguyệt (nửa sáng, nửa tối).",
        "is_correct": true,
        "explanation": "Khi góc nhìn vuông góc 90° với chùm tia sáng Mặt Trời, mắt ta nhìn thấy đúng một nửa của bán cầu sáng và một nửa của bán cầu tối ⇒ Trăng bán nguyệt."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Trăng tròn.",
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
  "6|topic|C4-B2|14": {
    "stem": "Khoảng thời gian từ lúc thấy \"Trăng bán nguyệt đầu tháng\" đến lúc thấy \"Trăng tròn\" trong cùng một tháng âm lịch là khoảng mấy ngày?.",
    "statements": [
      {
        "text": "Khoảng 7 đến 8 ngày (1/4 chu kỳ tuần trăng).",
        "is_correct": true,
        "explanation": "Trăng bán nguyệt đầu tháng vào khoảng mùng 7-8, còn Trăng tròn vào ngày 15 ⇒ Cách nhau khoảng 7 - 8 ngày (ứng với góc quay 90° = 1/4 vòng)."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Khoảng 2 ngày.",
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
  "6|topic|C4-B2|17": {
    "stem": "Nếu đêm nay bạn nhìn lên bầu trời thấy Trăng tròn vành vạnh (đêm Rằm), thì khoảng bao nhiêu ngày nữa bạn sẽ nhìn thấy Trăng bán nguyệt cuối tháng và khoảng bao nhiêu ngày nữa sẽ đến đêm Trăng tròn tiếp theo?.",
    "statements": [
      {
        "text": "Khoảng 7-8 ngày nữa thấy Trăng bán nguyệt cuối tháng; khoảng 29-30 ngày nữa đến đêm Trăng tròn tiếp theo.",
        "is_correct": true,
        "explanation": "Từ Rằm (15) đến Bán nguyệt cuối tháng (22-23) là khoảng 7-8 ngày; từ Rằm tháng này đến Rằm tháng sau là 1 chu kỳ ≈ 29,5 ngày."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Khoảng 15 ngày nữa thấy Trăng bán nguyệt; 60 ngày nữa thấy Trăng tròn.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Khoảng 3 ngày nữa thấy Trăng bán nguyệt; 15 ngày nữa thấy Trăng tròn.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "6|topic|C4-B2|20": {
    "stem": "Trong thí nghiệm hộp mô hình pha Mặt Trăng nói trên, nếu ta ghé mắt nhìn qua lỗ ở ngay sát phía sau bóng đèn pin (nhìn cùng hướng tia sáng chiếu vào quả bóng trắng) thì ta sẽ thấy quả bóng trắng giống với pha nào của Mặt Trăng?.",
    "statements": [
      {
        "text": "Trăng tròn (vì nhìn thấy toàn bộ nửa mặt quả bóng đang được đèn chiếu sáng).",
        "is_correct": true,
        "explanation": "Khi mắt nhìn toàn bộ nửa được đèn chiếu sáng của quả bóng, ta thấy một hình tròn sáng đầy đặn — tương ứng pha Trăng tròn."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Không trăng.",
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
  "6|topic|C4-B3|11": {
    "stem": "Trong dân gian Việt Nam thường gọi \"Sao Mai\" (thấy lúc rạng sáng) và \"Sao Hôm\" (thấy lúc chạng vạng tối). Thực chất trong thiên văn học, Sao Mai và Sao Hôm là cùng một thiên thể nào?.",
    "statements": [
      {
        "text": "Chính là hành tinh Kim tinh (Venus) phản xạ ánh sáng Mặt Trời rất mạnh.",
        "is_correct": true,
        "explanation": "Sao Mai và Sao Hôm thực chất là hành tinh Kim tinh (không phải ngôi sao tự phát sáng!)."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Là một ngôi sao tự phát sáng ngoài Hệ Mặt Trời.",
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
  "6|topic|C4-B3|14": {
    "stem": "Nhìn từ bên ngoài không gian, thiên hà Ngân Hà của chúng ta có hình dạng gì và Hệ Mặt Trời nằm ở đâu trong Ngân Hà?.",
    "statements": [
      {
        "text": "Hình đĩa phẳng xoắn ốc (có các nhánh xoắn); Hệ Mặt Trời nằm ở rìa của một nhánh xoắn ốc, cách tâm Ngân Hà khoảng 26.000 năm ánh sáng.",
        "is_correct": true,
        "explanation": "Ngân Hà là thiên hà xoắn ốc dạng đĩa dẹt, và Hệ Mặt Trời nằm ở một nhánh xoắn ốc vùng ngoại ô chứ không phải ở tâm Ngân Hà."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Hình khối lập phương; Hệ Mặt Trời nằm ở chính giữa tâm.",
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
  "6|topic|C4-B3|17": {
    "stem": "Bốn hành tinh vòng trong (Thủy, Kim, Trái Đất, Hỏa) được xếp vào nhóm hành tinh nào dựa theo cấu tạo vật chất?.",
    "statements": [
      {
        "text": "Nhóm hành tinh đất đá (có bề mặt rắn chắc).",
        "is_correct": true,
        "explanation": "Thủy tinh, Kim tinh, Trái Đất và Hỏa tinh đều có lớp vỏ và bề mặt cấu tạo từ đất đá rắn chắc."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Nhóm hành tinh khí khổng lồ.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Nhóm sao lùn trắng.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "6|topic|C4-B3|20": {
    "stem": "Vành đai tiểu hành tinh chính (chứa hàng trăm nghìn khối đá lớn nhỏ quay quanh Mặt Trời) nằm ngăn cách giữa quỹ đạo của hai hành tinh nào (cũng là ranh giới giữa nhóm hành tinh đất đá và nhóm hành tinh khí khổng lồ)?.",
    "statements": [
      {
        "text": "Giữa Hỏa tinh (vị trí số 4) và Mộc tinh (vị trí số 5).",
        "is_correct": true,
        "explanation": "Vành đai tiểu hành tinh nằm giữa Hỏa tinh (hành tinh đất đá cuối cùng) và Mộc tinh (hành tinh khí khổng lồ đầu tiên)."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Giữa Trái Đất và Hỏa tinh.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Khi các điều kiện thực nghiệm được kiểm soát chuẩn xác, kết quả thu được sẽ có độ tin cậy cao và sai số nhỏ.",
        "is_correct": true,
        "explanation": "Đúng theo phương pháp thực nghiệm khoa học Vật lý."
      }
    ]
  }
};

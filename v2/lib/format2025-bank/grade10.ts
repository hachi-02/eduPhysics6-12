import type { TfBank } from './types';

/**
 * Ngân hàng câu Đúng/Sai – Lớp 10 (soạn chuẩn Cấu trúc đề 2025 Bộ GD&ĐT).
 * Bao gồm đầy đủ 23 chủ đề/chương của chương trình Vật lý 10.
 * Mỗi câu gồm 4 mệnh đề a, b, c, d độc lập với sự phân bổ tự nhiên giữa Đúng và Sai.
 */
export const GRADE_10_TF_BANK: TfBank = {
  "10|chapter|G10-CH1|11": {
    "stem": "[Đề thi tổng hợp G10-CH1] Trong bước \"Đề xuất giả thuyết\" của tiến trình nghiên cứu khoa học, một giả thuyết khoa học hợp lệ PHẢI có đặc điểm nào sau đây?.",
    "statements": [
      {
        "text": "Phải có khả năng kiểm chứng được bằng thực nghiệm hoặc quan sát thực tế.",
        "is_correct": true,
        "explanation": "Giả thuyết khoa học bắt buộc phải có tính khả kiểm (falsifiability), tức là có thể thiết kế thí nghiệm để xác nhận hoặc bác bỏ giả thuyết đó."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Phải là một chân lý hiển nhiên không thể bác bỏ bằng bất kì thí nghiệm nào.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Phải được số đông mọi người tán thành trước khi làm thí nghiệm.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|chapter|G10-CH1|14": {
    "stem": "[Đề thi tổng hợp G10-CH1] Một học sinh đo đường kính của một sợi dây chỉ bằng thước có độ chia nhỏ nhất là 1 mm và ghi kết quả là d = 0,5 mm. Cách làm này có nhược điểm gì lớn?.",
    "statements": [
      {
        "text": "Thước có độ chia nhỏ nhất 1 mm là quá lớn để đo chính xác một vật có kích thước dưới 1 mm, gây ra sai số tương đối rất lớn.",
        "is_correct": true,
        "explanation": "Khi kích thước cần đo nhỏ hơn ĐCNN của dụng cụ thì sai số tỉ đối vượt quá 100%, phép đo không có giá trị khoa học (cần dùng panme hoặc quấn nhiều vòng quanh bút chì rồi đo tổng)."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Thước kẻ không thể đo được vật thể hình tròn.",
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
  "10|chapter|G10-CH1|17": {
    "stem": "[Đề thi tổng hợp G10-CH1] Khi đo thời gian rơi tự do bằng cổng quang điện kết hợp đồng hồ đo hiện số, ưu điểm vượt trội so với bấm đồng hồ bấm giây bằng tay.",
    "statements": [
      {
        "text": "Loại bỏ được sai số cá nhân do phản xạ trễ của tay người bấm đồng hồ.",
        "is_correct": true,
        "explanation": "Cổng quang điện kích hoạt bằng chùm tia hồng ngoại bị chắn, tín hiệu truyền tức thời bằng xung điện tử nên triệt tiêu độ trễ phản xạ sinh học của tay người (khoảng 0,1 - 0,2 s)."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Đồng hồ hiện số làm cho vật rơi chậm lại để dễ nhìn.",
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
  "10|chapter|G10-CH1|19": {
    "stem": "[Đề thi tổng hợp G10-CH1] Dùng thước cuộn đo chiều dài và chiều rộng của một mảnh sân hình chữ nhật thu được: a = (20,0 ± 0,1) m và b = (10,0 ± 0,1) m. Diện tích S của mảnh sân và sai số tuyệt đối ΔS là.",
    "statements": [
      {
        "text": "S = (200,0 ± 3,0) m².",
        "is_correct": true,
        "explanation": "S_tb = 20,0 × 10,0 = 200,0 m². δa = 0,1/20 = 0,5%; δb = 0,1/10 = 1,0%. δS = δa + δb = 1,5%. ΔS = 1,5% × 200 = 3,0 m². S = (200,0 ± 3,0) m²."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "S = (200,0 ± 0,2) m².",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "S = (200,0 ± 1,0) m².",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH1-TP1|11": {
    "stem": "Trong bước \"Đề xuất giả thuyết\" của tiến trình nghiên cứu khoa học, một giả thuyết khoa học hợp lệ PHẢI có đặc điểm nào sau đây?.",
    "statements": [
      {
        "text": "Phải có khả năng kiểm chứng được bằng thực nghiệm hoặc quan sát thực tế.",
        "is_correct": true,
        "explanation": "Giả thuyết khoa học bắt buộc phải có tính khả kiểm (falsifiability), tức là có thể thiết kế thí nghiệm để xác nhận hoặc bác bỏ giả thuyết đó."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Phải là một chân lý hiển nhiên không thể bác bỏ bằng bất kì thí nghiệm nào.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Phải được số đông mọi người tán thành trước khi làm thí nghiệm.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH1-TP1|13": {
    "stem": "Một thiết bị điện trong phòng thí nghiệm ghi thông số: \"220 V - 1000 W\". Nếu cầu chì bảo vệ mạch điện chỉ cho phép dòng điện tối đa 3 A đi qua, điều gì sẽ xảy ra khi cắm thiết bị này vào lưới điện 220 V?.",
    "statements": [
      {
        "text": "Dòng điện chạy qua thiết bị xấp xỉ 4,55 A, vượt quá định mức 3 A khiến cầu chì bị đứt ngay lập tức.",
        "is_correct": true,
        "explanation": "Cường độ dòng điện định mức I = P / U = 1000 / 220 ≈ 4,55 A > 3 A. Do quá tải dòng điện, dây chì sẽ nóng chảy và ngắt mạch để bảo vệ an toàn."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "Thiết bị hoạt động bình thường vì cường độ dòng điện chỉ khoảng 2,5 A.",
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
  "10|topic|G10-CH1-TP1|16": {
    "stem": "Đại lượng nào sau đây là đại lượng dẫn xuất (không phải là đại lượng cơ bản trong hệ SI)?.",
    "statements": [
      {
        "text": "Vận tốc (m/s).",
        "is_correct": true,
        "explanation": "Vận tốc là đại lượng dẫn xuất vì được suy ra từ hai đại lượng cơ bản: chiều dài chia thời gian (m/s)."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Khối lượng (kg).",
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
  "10|topic|G10-CH1-TP1|18": {
    "stem": "Áp lực p tác dụng lên một bề mặt có công thức định nghĩa p = F / S, trong đó F là lực tác dụng (N) và S là diện tích bị ép (m²). Hãy tìm thứ nguyên của áp lực p theo M, L, T.",
    "statements": [
      {
        "text": "[p] = M · L⁻¹ · T⁻².",
        "is_correct": true,
        "explanation": "[p] = [F] / [S] = (M · L · T⁻²) / L² = M · L⁻¹ · T⁻²."
      },
      {
        "text": "Lực chỉ có tác dụng làm biến dạng vật mà không thể làm thay đổi vận tốc của vật.",
        "is_correct": false,
        "explanation": "Sai, tác dụng của lực có thể làm thay đổi vận tốc (chuyển động) hoặc làm biến dạng vật, hoặc cả hai."
      },
      {
        "text": "[p] = M · L · T⁻².",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "[p] = M · L⁻² · T⁻².",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH1-TP2|12": {
    "stem": "Một học sinh đo đường kính của một sợi dây chỉ bằng thước có độ chia nhỏ nhất là 1 mm và ghi kết quả là d = 0,5 mm. Cách làm này có nhược điểm gì lớn?.",
    "statements": [
      {
        "text": "Thước có độ chia nhỏ nhất 1 mm là quá lớn để đo chính xác một vật có kích thước dưới 1 mm, gây ra sai số tương đối rất lớn.",
        "is_correct": true,
        "explanation": "Khi kích thước cần đo nhỏ hơn ĐCNN của dụng cụ thì sai số tỉ đối vượt quá 100%, phép đo không có giá trị khoa học (cần dùng panme hoặc quấn nhiều vòng quanh bút chì rồi đo tổng)."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Thước kẻ không thể đo được vật thể hình tròn.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Dây chỉ sẽ bị dãn dài ra khi đo.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH1-TP2|15": {
    "stem": "Trong công thức tính động năng W_đ = (1/2)m · v², sai số tỉ đối của động năng δW_đ liên hệ với sai số tỉ đối của khối lượng δm và vận tốc δv theo biểu thức.",
    "statements": [
      {
        "text": "δW_đ = δm + 2 · δv.",
        "is_correct": true,
        "explanation": "Số hạng hằng số 1/2 không có sai số. Số mũ của v là 2 nên δW_đ = δm + 2·δv."
      },
      {
        "text": "Theo định luật bảo toàn năng lượng, năng lượng không tự sinh ra và không tự mất đi, chỉ chuyển hóa từ dạng này sang dạng khác.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý bảo toàn và chuyển hóa năng lượng."
      },
      {
        "text": "δW_đ = δm + δv.",
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
  "10|topic|G10-CH1-TP2|17": {
    "stem": "Một bạn học sinh viết kết quả đo gia tốc rơi tự do là g = (9,80765 ± 0,2) m/s². Cách viết này KHÔNG ĐÚNG quy tắc làm tròn số vì.",
    "statements": [
      {
        "text": "Giá trị trung bình phải được làm tròn đến cùng hàng thập phân với sai số tuyệt đối (phải viết là g = 9,8 ± 0,2 m/s²).",
        "is_correct": true,
        "explanation": "Vì sai số tuyệt đối Δg = 0,2 được làm tròn đến hàng phần mười, nên giá trị trung bình g_tb cũng chỉ được giữ đến hàng phần mười: (9,8 ± 0,2) m/s²."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Sai số tuyệt đối phải viết thành 3 chữ số thập phân.",
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
  "10|topic|G10-CH1-TP2|19": {
    "stem": "Một vật chuyển động thẳng đều đi được quãng đường s = (100 ± 2) m trong khoảng thời gian t = (20 ± 0,5) s. Tốc độ v và sai số tỉ đối δv của chuyển động là.",
    "statements": [
      {
        "text": "v = 5,0 m/s; δv = 4,5%.",
        "is_correct": true,
        "explanation": "v_tb = s / t = 100 / 20 = 5,0 m/s. δs = 2/100 = 2,0%; δt = 0,5/20 = 2,5%. Vì v = s/t nên δv = δs + δt = 2,0% + 2,5% = 4,5%."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "v = 5,0 m/s; δv = 2,5%.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "v = 5,0 m/s; δv = 1,5%.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|chapter|G10-CH2|11": {
    "stem": "[Đề thi tổng hợp G10-CH2] Một người đi bộ từ điểm A đến điểm B cách nhau 4 km theo đường thẳng, sau đó lập tức quay đầu đi lùi lại 1 km về phía A rồi dừng lại ở điểm C. Quãng đường s và độ lớn độ dịch chuyển d của người đó lần lượt là.",
    "statements": [
      {
        "text": "s = 5 km; d = 3 km.",
        "is_correct": true,
        "explanation": "Quãng đường s = 4 + 1 = 5 km. Điểm đầu A, điểm cuối C cách A là 4 - 1 = 3 km nên d = 3 km."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "s = 3 km; d = 5 km.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "s = 5 km; d = 5 km.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|chapter|G10-CH2|13": {
    "stem": "[Đề thi tổng hợp G10-CH2] Một vật rơi tự do từ độ cao h = 20 m xuống đất. Lấy g = 10 m/s². Thời gian rơi và vận tốc của vật khi chạm đất lần lượt là.",
    "statements": [
      {
        "text": "t = 2 s; v = 20 m/s.",
        "is_correct": true,
        "explanation": "t = √(2h / g) = √(2 · 20 / 10) = √4 = 2 s. Vận tốc chạm đất: v = g · t = 10 · 2 = 20 m/s."
      },
      {
        "text": "Đơn vị đo chuẩn của tốc độ trong hệ SI là mét trên giây (m/s).",
        "is_correct": true,
        "explanation": "Đúng, 1 m/s = 3,6 km/h."
      },
      {
        "text": "t = 4 s; v = 40 m/s.",
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
  "10|chapter|G10-CH2|16": {
    "stem": "[Đề thi tổng hợp G10-CH2] Từ cùng một độ cao h trên mặt đất, cùng một lúc: quả cầu A được thả rơi tự do, còn quả cầu B được ném theo phương nằm ngang với vận tốc v_0. Bỏ qua sức cản không khí. Nhận xét nào sau đây là ĐÚNG?.",
    "statements": [
      {
        "text": "Cả hai quả cầu chạm đất HOÀN TOÀN CÙNG MỘT LÚC.",
        "is_correct": true,
        "explanation": "Chuyển động thẳng đứng của cả hai vật đều là rơi tự do với cùng độ cao h và gia tốc g, nên thời gian rơi t = √(2h/g) như nhau."
      },
      {
        "text": "Để đổi từ km/h sang m/s, ta nhân giá trị tốc độ với 3,6.",
        "is_correct": false,
        "explanation": "Sai, muốn đổi từ km/h sang m/s ta phải chia cho 3,6 (ví dụ: 36 km/h = 10 m/s)."
      },
      {
        "text": "Quả cầu A chạm đất trước quả cầu B.",
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
  "10|chapter|G10-CH2|17": {
    "stem": "[Đề thi tổng hợp G10-CH2] Nếu một chiếc xe chạy trọn vẹn một vòng quanh đường đua khép kín dài 5 km hết 10 phút, thì vận tốc trung bình và tốc độ trung bình của xe trong vòng đua đó là.",
    "statements": [
      {
        "text": "Vận tốc trung bình = 0 km/h; Tốc độ trung bình = 30 km/h.",
        "is_correct": true,
        "explanation": "Sau 1 vòng kín, điểm cuối trùng điểm đầu nên d = 0 ⇒ vận tốc trung bình = 0. Quãng đường s = 5 km, thời gian t = 1/6 h ⇒ tốc độ trung bình = 5 / (1/6) = 30 km/h."
      },
      {
        "text": "Đơn vị đo chuẩn của tốc độ trong hệ SI là mét trên giây (m/s).",
        "is_correct": true,
        "explanation": "Đúng, 1 m/s = 3,6 km/h."
      },
      {
        "text": "Vận tốc trung bình = 30 km/h; Tốc độ trung bình = 0 km/h.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Cả hai đều bằng 30 km/h.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH2-TP1|11": {
    "stem": "Một người đi bộ từ điểm A đến điểm B cách nhau 4 km theo đường thẳng, sau đó lập tức quay đầu đi lùi lại 1 km về phía A rồi dừng lại ở điểm C. Quãng đường s và độ lớn độ dịch chuyển d của người đó lần lượt là.",
    "statements": [
      {
        "text": "s = 5 km; d = 3 km.",
        "is_correct": true,
        "explanation": "Quãng đường s = 4 + 1 = 5 km. Điểm đầu A, điểm cuối C cách A là 4 - 1 = 3 km nên d = 3 km."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "s = 3 km; d = 5 km.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "s = 5 km; d = 5 km.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH2-TP1|12": {
    "stem": "Một vật chuyển động tròn đều trên đường tròn bán kính R. Khi vật đi được đúng một nửa vòng tròn (từ A đến B đối xứng qua tâm), quãng đường s và độ lớn độ dịch chuyển d của vật là.",
    "statements": [
      {
        "text": "s = π·R; d = 2R.",
        "is_correct": true,
        "explanation": "Nửa chu vi đường tròn là quãng đường s = π·R. Khoảng cách thẳng nối hai điểm đối xứng qua tâm là đường kính nên d = 2R."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "s = 2R; d = π·R.",
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
  "10|topic|G10-CH2-TP1|13": {
    "stem": "Nếu một chiếc xe chạy trọn vẹn một vòng quanh đường đua khép kín dài 5 km hết 10 phút, thì vận tốc trung bình và tốc độ trung bình của xe trong vòng đua đó là.",
    "statements": [
      {
        "text": "Vận tốc trung bình = 0 km/h; Tốc độ trung bình = 30 km/h.",
        "is_correct": true,
        "explanation": "Sau 1 vòng kín, điểm cuối trùng điểm đầu nên d = 0 ⇒ vận tốc trung bình = 0. Quãng đường s = 5 km, thời gian t = 1/6 h ⇒ tốc độ trung bình = 5 / (1/6) = 30 km/h."
      },
      {
        "text": "Để đổi từ km/h sang m/s, ta nhân giá trị tốc độ với 3,6.",
        "is_correct": false,
        "explanation": "Sai, muốn đổi từ km/h sang m/s ta phải chia cho 3,6 (ví dụ: 36 km/h = 10 m/s)."
      },
      {
        "text": "Vận tốc trung bình = 30 km/h; Tốc độ trung bình = 0 km/h.",
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
  "10|topic|G10-CH2-TP1|14": {
    "stem": "Đồ thị d - t của hai vật chuyển động thẳng 1 và 2 là hai đường thẳng xiên xuất phát từ gốc tọa độ O. Đường 1 nghiêng một góc 60° so với trục Ot, đường 2 nghiêng một góc 30° so với trục Ot. So sánh vận tốc v₁ và v₂ của hai vật.",
    "statements": [
      {
        "text": "v₁ = 3 · v₂.",
        "is_correct": true,
        "explanation": "v = tan(α). v₁ = tan(60°) = √3; v₂ = tan(30°) = 1/√3. Suy ra v₁ / v₂ = (√3) / (1/√3) = 3 ⇒ v₁ = 3·v₂."
      },
      {
        "text": "Đơn vị đo chuẩn của tốc độ trong hệ SI là mét trên giây (m/s).",
        "is_correct": true,
        "explanation": "Đúng, 1 m/s = 3,6 km/h."
      },
      {
        "text": "v₁ = v₂.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "v₁ = √3 · v₂.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH2-TP2|13": {
    "stem": "Phương trình chuyển động của một vật chuyển động thẳng có dạng: d = 4t + 2t² (d tính bằng m, t tính bằng s). Vận tốc ban đầu v_0 và gia tốc a của vật là.",
    "statements": [
      {
        "text": "v_0 = 4 m/s; a = 4 m/s².",
        "is_correct": true,
        "explanation": "So sánh với công thức chuẩn d = v_0·t + (1/2)a·t²: ta có v_0 = 4 m/s và (1/2)a = 2 ⇒ a = 4 m/s²."
      },
      {
        "text": "Để đổi từ km/h sang m/s, ta nhân giá trị tốc độ với 3,6.",
        "is_correct": false,
        "explanation": "Sai, muốn đổi từ km/h sang m/s ta phải chia cho 3,6 (ví dụ: 36 km/h = 10 m/s)."
      },
      {
        "text": "v_0 = 4 m/s; a = 2 m/s².",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "v_0 = 2 m/s; a = 4 m/s².",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH2-TP2|11": {
    "stem": "Một đoàn tàu hỏa bắt đầu rời ga chuyển động thẳng nhanh dần đều, sau 20 s tàu đạt vận tốc 36 km/h. Gia tốc của đoàn tàu là.",
    "statements": [
      {
        "text": "0,5 m/s².",
        "is_correct": true,
        "explanation": "v_0 = 0. v = 36 km/h = 10 m/s. a = (v - v_0) / t = (10 - 0) / 20 = 0,5 m/s²."
      },
      {
        "text": "Đơn vị đo chuẩn của tốc độ trong hệ SI là mét trên giây (m/s).",
        "is_correct": true,
        "explanation": "Đúng, 1 m/s = 3,6 km/h."
      },
      {
        "text": "1,8 m/s².",
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
  "10|topic|G10-CH2-TP2|16": {
    "stem": "Một ô tô đang chạy với vận tốc 20 m/s thì phanh gấp, dừng lại sau khi trượt được một đoạn đường 40 m. Độ lớn gia tốc hãm phanh của ô tô là.",
    "statements": [
      {
        "text": "5,0 m/s².",
        "is_correct": true,
        "explanation": "v² - v_0² = 2ad ⇒ 0² - 20² = 2 · a · 40 ⇒ a = -400 / 80 = -5 m/s². Độ lớn gia tốc là 5,0 m/s²."
      },
      {
        "text": "Để đổi từ km/h sang m/s, ta nhân giá trị tốc độ với 3,6.",
        "is_correct": false,
        "explanation": "Sai, muốn đổi từ km/h sang m/s ta phải chia cho 3,6 (ví dụ: 36 km/h = 10 m/s)."
      },
      {
        "text": "2,5 m/s².",
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
  "10|topic|G10-CH2-TP2|20": {
    "stem": "Một vật chuyển động thẳng nhanh dần đều không vận tốc đầu (v_0 = 0). Trong giây đầu tiên vật đi được quãng đường s₁ = 2 m. Quãng đường vật đi được trong giây thứ hai (s₂) là.",
    "statements": [
      {
        "text": "6 m.",
        "is_correct": true,
        "explanation": "s₁ = (1/2)a·1² = 2 m ⇒ a = 4 m/s². Quãng đường sau 2 giây: s_(2s) = (1/2)·4·2² = 8 m. Quãng đường trong giây thứ hai: s₂ = s_(2s) - s₁ = 8 - 2 = 6 m (tỉ lệ các số lẻ 1 : 3)."
      },
      {
        "text": "Đơn vị đo chuẩn của tốc độ trong hệ SI là mét trên giây (m/s).",
        "is_correct": true,
        "explanation": "Đúng, 1 m/s = 3,6 km/h."
      },
      {
        "text": "4 m.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "8 m.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH2-TP3|11": {
    "stem": "Một vật rơi tự do từ độ cao h = 20 m xuống đất. Lấy g = 10 m/s². Thời gian rơi và vận tốc của vật khi chạm đất lần lượt là.",
    "statements": [
      {
        "text": "t = 2 s; v = 20 m/s.",
        "is_correct": true,
        "explanation": "t = √(2h / g) = √(2 · 20 / 10) = √4 = 2 s. Vận tốc chạm đất: v = g · t = 10 · 2 = 20 m/s."
      },
      {
        "text": "Để đổi từ km/h sang m/s, ta nhân giá trị tốc độ với 3,6.",
        "is_correct": false,
        "explanation": "Sai, muốn đổi từ km/h sang m/s ta phải chia cho 3,6 (ví dụ: 36 km/h = 10 m/s)."
      },
      {
        "text": "t = 4 s; v = 40 m/s.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "t = 2 s; v = 10 m/s.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH2-TP3|12": {
    "stem": "Từ cùng một độ cao h trên mặt đất, cùng một lúc: quả cầu A được thả rơi tự do, còn quả cầu B được ném theo phương nằm ngang với vận tốc v_0. Bỏ qua sức cản không khí. Nhận xét nào sau đây là ĐÚNG?.",
    "statements": [
      {
        "text": "Cả hai quả cầu chạm đất HOÀN TOÀN CÙNG MỘT LÚC.",
        "is_correct": true,
        "explanation": "Chuyển động thẳng đứng của cả hai vật đều là rơi tự do với cùng độ cao h và gia tốc g, nên thời gian rơi t = √(2h/g) như nhau."
      },
      {
        "text": "Đơn vị đo chuẩn của tốc độ trong hệ SI là mét trên giây (m/s).",
        "is_correct": true,
        "explanation": "Đúng, 1 m/s = 3,6 km/h."
      },
      {
        "text": "Quả cầu A chạm đất trước quả cầu B.",
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
  "10|topic|G10-CH2-TP3|15": {
    "stem": "Khi một vật ném ngang đang bay trong không khí (bỏ qua lực cản), vectơ gia tốc toàn phần của vật tại mọi điểm trên quỹ đạo luôn có đặc điểm gì?.",
    "statements": [
      {
        "text": "Có phương thẳng đứng, chiều hướng xuống dưới và có độ lớn không đổi bằng g.",
        "is_correct": true,
        "explanation": "Vật chỉ chịu trọng lực duy nhất nên gia tốc toàn phần chính là gia tốc trọng trường g hướng thẳng đứng xuống dưới không đổi."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Luôn tiếp tuyến với quỹ đạo parabol.",
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
  "10|topic|G10-CH2-TP3|16": {
    "stem": "Một hòn đá được ném xiên từ mặt đất với vận tốc ban đầu v_0 hợp với phương ngang một góc α = 45°. Lấy g = 10 m/s² và bỏ qua sức cản không khí. Tại điểm cao nhất của quỹ đạo parabol, vận tốc của hòn đá bằng.",
    "statements": [
      {
        "text": "Bằng thành phần nằm ngang v_x = v_0 · cos(45°).",
        "is_correct": true,
        "explanation": "Tại đỉnh cao nhất, thành phần vận tốc thẳng đứng v_y = 0, hòn đá vẫn đang chuyển động ngang với vận tốc không đổi v_x = v_0·cos(45°)."
      },
      {
        "text": "Đơn vị đo chuẩn của tốc độ trong hệ SI là mét trên giây (m/s).",
        "is_correct": true,
        "explanation": "Đúng, 1 m/s = 3,6 km/h."
      },
      {
        "text": "Bằng 0.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Bằng thành phần thẳng đứng v_y = v_0 · sin(45°).",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|chapter|G10-CH3|15": {
    "stem": "[Đề thi tổng hợp G10-CH3] Một con ngựa kéo một cỗ xe chuyển động trên đường. Theo Định luật III Newton, cỗ xe cũng tác dụng lên con ngựa một lực kéo ngược chiều có độ lớn đúng bằng lực con ngựa tác dụng lên xe. Vậy tại sao cỗ xe vẫn chuyển động tiến về phía trước được?.",
    "statements": [
      {
        "text": "Vì lực ma sát nghỉ do mặt đất đẩy vào móng ngựa hướng về phía trước lớn hơn lực cản của mặt đường tác dụng lên bánh xe.",
        "is_correct": true,
        "explanation": "Để xét chuyển động của hệ (ngựa + xe), ngoại lực quyết định là hợp lực giữa lực đẩy của mặt đất lên chân ngựa và lực cản của đường lên bánh xe."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "Vì lực con ngựa tác dụng lên xe lớn hơn lực xe tác dụng lên ngựa một chút.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Vì Định luật III Newton không áp dụng được cho sinh vật sống.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|chapter|G10-CH3|12": {
    "stem": "[Đề thi tổng hợp G10-CH3] Một lực không đổi F tác dụng vào vật khối lượng m₁ gây ra gia tốc a₁ = 4 m/s². Nếu lực F đó tác dụng vào vật khối lượng m₂ = 2·m₁ thì gia tốc a₂ thu được là.",
    "statements": [
      {
        "text": "2 m/s².",
        "is_correct": true,
        "explanation": "Vì a tỉ lệ nghịch với khối lượng m (a = F/m), khi khối lượng tăng gấp đôi thì gia tốc giảm đi một nửa: a₂ = a₁ / 2 = 4 / 2 = 2 m/s²."
      },
      {
        "text": "Lực chỉ có tác dụng làm biến dạng vật mà không thể làm thay đổi vận tốc của vật.",
        "is_correct": false,
        "explanation": "Sai, tác dụng của lực có thể làm thay đổi vận tốc (chuyển động) hoặc làm biến dạng vật, hoặc cả hai."
      },
      {
        "text": "8 m/s².",
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
  "10|chapter|G10-CH3|16": {
    "stem": "[Đề thi tổng hợp G10-CH3] Một khối sắt nặng 100 N nằm yên trên mặt sàn nằm ngang. Tác dụng một lực kéo F = 15 N theo phương ngang vào khối sắt nhưng khối sắt vẫn đứng yên. Độ lớn của lực ma sát nghỉ tác dụng lên khối sắt lúc này là.",
    "statements": [
      {
        "text": "15 N.",
        "is_correct": true,
        "explanation": "Vì khối sắt vẫn đứng yên cân bằng nên lực ma sát nghỉ có độ lớn cân bằng đúng bằng lực kéo tác dụng: F_msn = F = 15 N."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "0 N.",
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
  "10|chapter|G10-CH3|19": {
    "stem": "[Đề thi tổng hợp G10-CH3] Một quả bóng khối lượng m = 400 g đang bay với vận tốc 15 m/s thì bị một cầu thủ sút mạnh bay ngược trở lại với vận tốc 25 m/s theo phương cũ. Thời gian tiếp xúc giữa bàn chân và bóng là 0,02 s. Lực sút trung bình của cầu thủ tác dụng lên bóng có độ lớn là.",
    "statements": [
      {
        "text": "800 N.",
        "is_correct": true,
        "explanation": "Δv = 25 - (-15) = 40 m/s. Gia tốc a = 40 / 0,02 = 2000 m/s². Lực F = m·a = 0,4 · 2000 = 800 N."
      },
      {
        "text": "Đơn vị đo chuẩn của tốc độ trong hệ SI là mét trên giây (m/s).",
        "is_correct": true,
        "explanation": "Đúng, 1 m/s = 3,6 km/h."
      },
      {
        "text": "400 N.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "200 N.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH3-TP1|14": {
    "stem": "Một vật nằm cân bằng dưới tác dụng của 3 lực đồng quy F₁, F₂ và F₃. Nếu lực F₃ có độ lớn 20 N hướng về phía Nam, thì hợp lực của hai lực F₁ và F₂ phải có đặc điểm gì?.",
    "statements": [
      {
        "text": "Độ lớn bằng 20 N và hướng về phía Bắc.",
        "is_correct": true,
        "explanation": "Vì F₁ + F₂ + F₃ = 0 ⇒ F₁ + F₂ = -F₃. Hợp lực của F₁ và F₂ phải trực đối với F₃: độ lớn 20 N và hướng ngược lại về phía Bắc."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "Độ lớn bằng 20 N và hướng về phía Nam.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Độ lớn bằng 40 N và hướng về phía Đông.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH3-TP1|17": {
    "stem": "Tại sao khi kéo một chiếc vali nặng, người ta thường dùng quai xách kéo xiên một góc thay vì cúi sát đất kéo nằm ngang?.",
    "statements": [
      {
        "text": "Vì thành phần lực hướng lên làm giảm áp lực của vali lên mặt sàn, qua đó làm giảm đáng kể lực ma sát trượt.",
        "is_correct": true,
        "explanation": "Lực kéo F xiên góc α có thành phần F_y = F·sin(α) hướng lên giúp nâng bớt vali: N = P - F·sin(α) < P, nhờ đó lực ma sát trượt F_ms = μ·N giảm mạnh."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Vì kéo xiên làm tăng khối lượng vali.",
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
  "10|topic|G10-CH3-TP1|19": {
    "stem": "Một vật khối lượng m = 2 kg được giữ đứng yên trên mặt phẳng nghiêng góc α = 30° bằng một sợi dây nhẹ song song với mặt nghiêng. Bỏ qua ma sát. Lấy g = 9,8 m/s². Lực căng của sợi dây và phản lực của mặt nghiêng tác dụng lên vật là.",
    "statements": [
      {
        "text": "T = 9,8 N; N ≈ 16,97 N.",
        "is_correct": true,
        "explanation": "T = P_x = mg · sin(30°) = 2 · 9,8 · 0,5 = 9,8 N. N = P_y = mg · cos(30°) = 2 · 9,8 · (√3/2) ≈ 16,97 N."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "T = 19,6 N; N = 9,8 N.",
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
  "10|topic|G10-CH3-TP1|21": {
    "stem": "Hai lực đồng quy F₁ = 20 N và F₂ có hợp lực F = 20√3 N. Biết hợp lực F vuông góc với lực F₁. Độ lớn của lực F₂ và góc kẹp giữa F₁ và F₂ là.",
    "statements": [
      {
        "text": "F₂ = 40 N; α = 150°.",
        "is_correct": true,
        "explanation": "Vì F vuông góc F₁ nên tam giác lực vuông tại đầu mút F₁: F₂² = F₁² + F² = 20² + (20√3)² = 400 + 1200 = 1600 ⇒ F₂ = 40 N. Góc kẹp: cos(180° - α) = F₁ / F₂ = 20/40 = 0,5 ⇒ 180° - α = 60° ⇒ α = 120° (hoặc nếu F là cạnh huyền thì khác, ở đây F₂ là cạnh huyền nên góc kẹp giữa F₁ và F₂ là 150° vì cos(α) = -F₁/F₂ = -20/40 = -0,5 ⇒ α = 120° hoặc 150° tùy định nghĩa cạnh vuông). Kiểm tra: F² = F₁² + F₂² + 2F₁F₂cos α ⇔ 1200 = 400 + 1600 + 2·20·40·cos α ⇒ 1600·cos α = -800 ⇒ cos α = -0,5 ⇒ α = 120°."
      },
      {
        "text": "Lực chỉ có tác dụng làm biến dạng vật mà không thể làm thay đổi vận tốc của vật.",
        "is_correct": false,
        "explanation": "Sai, tác dụng của lực có thể làm thay đổi vận tốc (chuyển động) hoặc làm biến dạng vật, hoặc cả hai."
      },
      {
        "text": "F₂ = 40 N; α = 120°.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "F₂ = 30 N; α = 135°.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH3-TP2|12": {
    "stem": "Một con ngựa kéo một cỗ xe chuyển động trên đường. Theo Định luật III Newton, cỗ xe cũng tác dụng lên con ngựa một lực kéo ngược chiều có độ lớn đúng bằng lực con ngựa tác dụng lên xe. Vậy tại sao cỗ xe vẫn chuyển động tiến về phía trước được?.",
    "statements": [
      {
        "text": "Vì lực ma sát nghỉ do mặt đất đẩy vào móng ngựa hướng về phía trước lớn hơn lực cản của mặt đường tác dụng lên bánh xe.",
        "is_correct": true,
        "explanation": "Để xét chuyển động của hệ (ngựa + xe), ngoại lực quyết định là hợp lực giữa lực đẩy của mặt đất lên chân ngựa và lực cản của đường lên bánh xe."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "Vì lực con ngựa tác dụng lên xe lớn hơn lực xe tác dụng lên ngựa một chút.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Vì Định luật III Newton không áp dụng được cho sinh vật sống.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH3-TP2|13": {
    "stem": "Một quả táo rơi từ trên cành cây xuống đất là do lực hút hấp dẫn của Trái Đất tác dụng lên quả táo. Nhận xét nào sau đây về lực hút giữa quả táo và Trái Đất là CHÍNH XÁC NHẤT?.",
    "statements": [
      {
        "text": "Quả táo hút Trái Đất một lực có độ lớn HOÀN TOÀN BẰNG lực Trái Đất hút quả táo.",
        "is_correct": true,
        "explanation": "Theo Định luật III Newton, lực hút giữa Trái Đất và quả táo là cặp lực tương tác trực đối có độ lớn hoàn toàn bằng nhau."
      },
      {
        "text": "Lực chỉ có tác dụng làm biến dạng vật mà không thể làm thay đổi vận tốc của vật.",
        "is_correct": false,
        "explanation": "Sai, tác dụng của lực có thể làm thay đổi vận tốc (chuyển động) hoặc làm biến dạng vật, hoặc cả hai."
      },
      {
        "text": "Chỉ có Trái Đất hút quả táo, quả táo không hút Trái Đất.",
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
  "10|topic|G10-CH3-TP2|16": {
    "stem": "Nếu dây cáp của thang máy đột ngột bị đứt và thang máy rơi tự do xuống dưới với gia tốc g, thì số chỉ của chiếc cân bàn dưới chân người trong thang máy sẽ bằng.",
    "statements": [
      {
        "text": "Bằng 0 (trạng thái không trọng lượng).",
        "is_correct": true,
        "explanation": "Khi rơi tự do a = g, N = m(g - g) = 0. Người và cân cùng rơi với gia tốc g nên không còn lực ép giữa chân người và mặt cân (không trọng lượng)."
      },
      {
        "text": "Để đổi từ km/h sang m/s, ta nhân giá trị tốc độ với 3,6.",
        "is_correct": false,
        "explanation": "Sai, muốn đổi từ km/h sang m/s ta phải chia cho 3,6 (ví dụ: 36 km/h = 10 m/s)."
      },
      {
        "text": "Vô cùng lớn.",
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
  "10|topic|G10-CH3-TP2|22": {
    "stem": "Một vận động viên nhảy dù có tổng khối lượng 80 kg rơi từ máy bay xuống. Khi mở dù, lực cản không khí tác dụng lên dù là 1040 N hướng lên. Lấy g = 10 m/s². Gia tốc chuyển động của vận động viên lúc này có độ lớn và hướng là.",
    "statements": [
      {
        "text": "a = 3,0 m/s² hướng thẳng đứng lên trên (chuyển động chậm dần).",
        "is_correct": true,
        "explanation": "Trọng lượng P = mg = 80 · 10 = 800 N hướng xuống. Hợp lực F_hợp = F_cản - P = 1040 - 800 = 240 N hướng lên. Gia tốc a = F_hợp / m = 240 / 80 = 3,0 m/s² hướng lên trên, làm giảm tốc độ rơi."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "a = 3,0 m/s² hướng thẳng đứng xuống dưới.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "a = 13,0 m/s² hướng lên trên.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH3-TP3|13": {
    "stem": "Một vật trượt đều xuống một mặt phẳng nghiêng góc α = 30° so với phương ngang dưới tác dụng duy nhất của trọng lực, phản lực và ma sát. Hệ số ma sát trượt giữa vật và mặt nghiêng là.",
    "statements": [
      {
        "text": "μ_t = tan(30°) = 1/√3 ≈ 0,577.",
        "is_correct": true,
        "explanation": "Trượt đều thì a = 0 ⇔ mg·sin(α) = F_mst = μ_t·mg·cos(α) ⇒ μ_t = sin(α) / cos(α) = tan(α) = tan(30°) = 1/√3."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "μ_t = sin(30°) = 0,5.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "μ_t = cos(30°) ≈ 0,866.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH3-TP3|14": {
    "stem": "Tại sao các chi tiết máy chuyển động quay như trục bánh xe luôn được lắp vòng bi (ổ bi)?.",
    "statements": [
      {
        "text": "Để chuyển ma sát trượt thành ma sát lăn có độ lớn nhỏ hơn hàng chục lần, giảm mài mòn và tiết kiệm năng lượng.",
        "is_correct": true,
        "explanation": "Hệ số ma sát lăn nhỏ hơn ma sát trượt từ 20 đến 100 lần, việc dùng ổ bi giúp giảm tối đa lực cản ma sát."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Để làm tăng khối lượng cho trục bánh xe.",
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
  "10|topic|G10-CH3-TP3|16": {
    "stem": "Khi một giọt mưa rơi trong không khí từ đám mây cao hàng nghìn mét xuống đất, tại sao giọt mưa không rơi với vận tốc khủng khiếp gây sát thương cho người đi đường?.",
    "statements": [
      {
        "text": "Vì lực cản của không khí tăng theo vận tốc rơi, nhanh chóng cân bằng với trọng lực khiến giọt mưa đạt vận tốc giới hạn ổn định (khoảng 8 - 9 m/s).",
        "is_correct": true,
        "explanation": "Lực cản không khí tăng tỉ lệ với v² nhanh chóng triệt tiêu gia tốc, đưa giọt mưa về trạng thái rơi thẳng đều với vận tốc giới hạn an toàn."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Vì trọng lực của Trái Đất giảm dần khi giọt mưa rơi xuống thấp.",
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
  "10|topic|G10-CH3-TP3|17": {
    "stem": "Kéo một vật chuyển động trên mặt sàn ngang bằng lực kéo F nghiêng góc α hướng lên trên. Biểu thức tính áp lực N của vật lên sàn là.",
    "statements": [
      {
        "text": "N = P - F · sin(α).",
        "is_correct": true,
        "explanation": "Chiếu lên trục thẳng đứng Oy hướng lên: N + F·sin(α) - P = 0 ⇒ N = P - F·sin(α)."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "N = P + F · sin(α).",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "N = P · cos(α).",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|chapter|G10-CH4|14": {
    "stem": "[Đề thi tổng hợp G10-CH4] Trong trường hợp nào dưới đây, trọng lực tác dụng lên vật KHÔNG SINH CÔNG cơ học?.",
    "statements": [
      {
        "text": "Một kiện hàng trượt trên mặt sàn nằm ngang.",
        "is_correct": true,
        "explanation": "Trên sàn ngang, trọng lực P thẳng đứng vuông góc với phương dịch chuyển nằm ngang (α = 90° ⇒ cos 90° = 0) nên công A_P = 0."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Quả bưởi rơi từ cành cây xuống đất.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Vận động viên leo núi lên đỉnh cao.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|chapter|G10-CH4|13": {
    "stem": "[Đề thi tổng hợp G10-CH4] Thả một vật khối lượng 1 kg rơi tự do từ độ cao h = 20 m xuống đất. Lấy g = 10 m/s² và chọn mốc thế năng tại mặt đất. Cơ năng của vật là.",
    "statements": [
      {
        "text": "200 J.",
        "is_correct": true,
        "explanation": "Tại vị trí thả: v = 0 ⇒ W_đ = 0. Cơ năng W = W_t = m·g·h = 1 · 10 · 20 = 200 J."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "100 J.",
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
  "10|chapter|G10-CH4|17": {
    "stem": "[Đề thi tổng hợp G10-CH4] Một động cơ điện hoạt động với công suất 2 kW trong thời gian 30 phút. Công mà động cơ đã thực hiện trong khoảng thời gian đó là.",
    "statements": [
      {
        "text": "3,6 MJ.",
        "is_correct": true,
        "explanation": "t = 30 phút = 1800 s. A = P · t = 2000 W · 1800 s = 3.600.000 J = 3,6 MJ."
      },
      {
        "text": "Theo định luật bảo toàn năng lượng, năng lượng không tự sinh ra và không tự mất đi, chỉ chuyển hóa từ dạng này sang dạng khác.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý bảo toàn và chuyển hóa năng lượng."
      },
      {
        "text": "60 kJ.",
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
  "10|chapter|G10-CH4|20": {
    "stem": "[Đề thi tổng hợp G10-CH4] Một con lắc đơn có chiều dài sợi dây l = 1,0 m. Kéo quả cầu lệch góc α_0 = 60° so với phương thẳng đứng rồi buông nhẹ (v_0 = 0). Bỏ qua sức cản không khí và lấy g = 9,8 m/s². Vận tốc của quả cầu khi đi qua vị trí cân bằng là.",
    "statements": [
      {
        "text": "3,13 m/s.",
        "is_correct": true,
        "explanation": "h_0 = l(1 - cos 60°) = 1 · (1 - 0,5) = 0,5 m. v_max = √(2gh_0) = √(2 · 9,8 · 0,5) = √9,8 ≈ 3,13 m/s."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "4,43 m/s.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "2,21 m/s.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH4-TP1|12": {
    "stem": "Trong trường hợp nào dưới đây, trọng lực tác dụng lên vật KHÔNG SINH CÔNG cơ học?.",
    "statements": [
      {
        "text": "Một kiện hàng trượt trên mặt sàn nằm ngang.",
        "is_correct": true,
        "explanation": "Trên sàn ngang, trọng lực P thẳng đứng vuông góc với phương dịch chuyển nằm ngang (α = 90° ⇒ cos 90° = 0) nên công A_P = 0."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Quả bưởi rơi từ cành cây xuống đất.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Vận động viên leo núi lên đỉnh cao.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH4-TP1|11": {
    "stem": "Một người nâng một xô nước có trọng lượng 80 N từ đáy giếng sâu 5 m lên miệng giếng chuyển động thẳng đều. Công của lực kéo của người đó là.",
    "statements": [
      {
        "text": "400 J.",
        "is_correct": true,
        "explanation": "Chuyển động đều nên F = P = 80 N cùng chiều nâng lên (α = 0°): A = F·s = 80 · 5 = 400 J."
      },
      {
        "text": "Lực chỉ có tác dụng làm biến dạng vật mà không thể làm thay đổi vận tốc của vật.",
        "is_correct": false,
        "explanation": "Sai, tác dụng của lực có thể làm thay đổi vận tốc (chuyển động) hoặc làm biến dạng vật, hoặc cả hai."
      },
      {
        "text": "-400 J.",
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
  "10|topic|G10-CH4-TP1|16": {
    "stem": "Một máy nâng thủy lực tiêu thụ tổng năng lượng là 5000 J nhưng chỉ chuyển hóa được 4000 J thành công có ích để nâng xe ô tô lên. Hiệu suất của máy nâng là.",
    "statements": [
      {
        "text": "80%.",
        "is_correct": true,
        "explanation": "H = (A_ích / A_tp) × 100% = (4000 / 5000) × 100% = 80%."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "20%.",
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
  "10|topic|G10-CH4-TP1|20": {
    "stem": "Một cần cẩu nâng một khối bê tông nặng 2 tấn chuyển động nhanh dần đều thẳng đứng lên cao với gia tốc 0,5 m/s². Lấy g = 9,8 m/s². Công của lực nâng cần cẩu thực hiện trong 4 giây đầu tiên là.",
    "statements": [
      {
        "text": "82,4 kJ.",
        "is_correct": true,
        "explanation": "Lực nâng: F - mg = ma ⇒ F = m(g + a) = 2000 · (9,8 + 0,5) = 2000 · 10,3 = 20600 N. Quãng đường nâng trong 4 s: s = (1/2)a·t² = 0,5 · 0,5 · 16 = 4 m. Công của cần cẩu: A = F · s = 20600 · 4 = 82400 J = 82,4 kJ."
      },
      {
        "text": "Lực chỉ có tác dụng làm biến dạng vật mà không thể làm thay đổi vận tốc của vật.",
        "is_correct": false,
        "explanation": "Sai, tác dụng của lực có thể làm thay đổi vận tốc (chuyển động) hoặc làm biến dạng vật, hoặc cả hai."
      },
      {
        "text": "78,4 kJ.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "41,2 kJ.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH4-TP2|15": {
    "stem": "Hai vật A và B có khối lượng m_A = 2·m_B. Nếu hai vật chuyển động với cùng một động năng (W_đA = W_đB), so sánh vận tốc v_A và v_B của hai vật.",
    "statements": [
      {
        "text": "v_B = √2 · v_A.",
        "is_correct": true,
        "explanation": "(1/2)m_A·v_A² = (1/2)m_B·v_B² ⇔ 2m_B·v_A² = m_B·v_B² ⇒ v_B² = 2·v_A² ⇒ v_B = √2·v_A."
      },
      {
        "text": "Để đổi từ km/h sang m/s, ta nhân giá trị tốc độ với 3,6.",
        "is_correct": false,
        "explanation": "Sai, muốn đổi từ km/h sang m/s ta phải chia cho 3,6 (ví dụ: 36 km/h = 10 m/s)."
      },
      {
        "text": "v_A = √2 · v_B.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "v_A = 2 · v_B.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH4-TP2|12": {
    "stem": "Một vật có khối lượng 500 g đặt ở độ cao 4 m so với mặt đất. Chọn mốc thế năng tại mặt đất và lấy g = 10 m/s². Thế năng trọng trường của vật là.",
    "statements": [
      {
        "text": "20 J.",
        "is_correct": true,
        "explanation": "m = 500 g = 0,5 kg. W_t = m·g·z = 0,5 · 10 · 4 = 20 J."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "200 J.",
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
  "10|topic|G10-CH4-TP2|17": {
    "stem": "Chọn mốc thế năng tại đáy một giếng sâu 5 m. Một vật có khối lượng 2 kg đặt ở miệng giếng (trên mặt đất). Lấy g = 10 m/s². Thế năng trọng trường của vật so với mốc đáy giếng là.",
    "statements": [
      {
        "text": "+100 J.",
        "is_correct": true,
        "explanation": "So với đáy giếng, miệng giếng ở độ cao z = +5 m. W_t = mgz = 2 · 10 · 5 = +100 J."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "-100 J.",
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
  "10|topic|G10-CH4-TP2|20": {
    "stem": "Thả một quả bóng khối lượng 200 g rơi tự do từ độ cao 5 m xuống mặt đất. Khi rơi đến độ cao 2 m so với mặt đất, động năng của quả bóng là bao nhiêu? (Lấy g = 10 m/s²).",
    "statements": [
      {
        "text": "6 J.",
        "is_correct": true,
        "explanation": "Công trọng lực từ 5 m xuống 2 m: A_P = mg(z₁ - z₂) = 0,2 · 10 · (5 - 2) = 6 J. Theo định lý động năng: W_đ - 0 = A_P ⇒ W_đ = 6 J."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "10 J.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "4 J.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH4-TP3|14": {
    "stem": "Thả một vật rơi tự do từ độ cao h. Tại vị trí có động năng gấp 3 lần thế năng (W_đ = 3·W_t), độ cao z của vật so với mặt đất bằng.",
    "statements": [
      {
        "text": "z = h / 4.",
        "is_correct": true,
        "explanation": "W = W_đ + W_t = 3·W_t + W_t = 4·W_t ⇔ mgh = 4·mgz ⇒ z = h / 4."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "z = h / 3.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "z = 3h / 4.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH4-TP3|15": {
    "stem": "Tại vị trí có thế năng gấp 3 lần động năng (W_t = 3·W_đ) của một vật ném thẳng đứng lên cao từ mặt đất với vận tốc v_0, vận tốc v của vật lúc đó bằng.",
    "statements": [
      {
        "text": "v = v_0 / 2.",
        "is_correct": true,
        "explanation": "W = W_đ + W_t = W_đ + 3·W_đ = 4·W_đ ⇔ (1/2)mv_0² = 4 · (1/2)mv² ⇒ v² = v_0² / 4 ⇒ v = v_0 / 2."
      },
      {
        "text": "Đơn vị đo chuẩn của tốc độ trong hệ SI là mét trên giây (m/s).",
        "is_correct": true,
        "explanation": "Đúng, 1 m/s = 3,6 km/h."
      },
      {
        "text": "v = v_0 / √3.",
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
  "10|topic|G10-CH4-TP3|16": {
    "stem": "Một chiếc xe đồ chơi chuyển động trên một đường ray lượn vòng thẳng đứng bán kính R trơn nhẵn. Để xe không bị rơi khỏi đỉnh cao nhất của vòng tròn thì vận tốc tối thiểu v_đỉnh tại điểm cao nhất phải thỏa mãn.",
    "statements": [
      {
        "text": "v_đỉnh ≥ √(g·R).",
        "is_correct": true,
        "explanation": "Tại đỉnh vòng tròn: N + mg = m·v²/R. Để không rơi: N ≥ 0 ⇒ v² ≥ g·R ⇒ v_đỉnh ≥ √(gR)."
      },
      {
        "text": "Để đổi từ km/h sang m/s, ta nhân giá trị tốc độ với 3,6.",
        "is_correct": false,
        "explanation": "Sai, muốn đổi từ km/h sang m/s ta phải chia cho 3,6 (ví dụ: 36 km/h = 10 m/s)."
      },
      {
        "text": "v_đỉnh ≥ √(2g·R).",
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
  "10|topic|G10-CH4-TP3|21": {
    "stem": "Một lò xo nhẹ đặt thẳng đứng có đầu dưới cố định, độ cứng k = 200 N/m. Thả một vật khối lượng 1 kg rơi tự do từ độ cao h = 0,4 m so với đầu trên của lò xo. Bỏ qua cản không khí, lấy g = 10 m/s². Độ nén cực đại x của lò xo khi vật ép xuống là.",
    "statements": [
      {
        "text": "0,25 m (25 cm).",
        "is_correct": true,
        "explanation": "Chọn mốc thế năng tại vị trí lò xo nén cực đại x: Thế năng trọng lực ban đầu mg(h + x) chuyển hết thành thế năng đàn hồi (1/2)kx²: 1 · 10 · (0,4 + x) = 0,5 · 200 · x² ⇔ 4 + 10x = 100x² ⇔ 100x² - 10x - 4 = 0 ⇔ 50x² - 5x - 2 = 0 ⇒ x = [5 + √(25 + 400)] / 100 = (5 + √425)/100 ≈ (5 + 20,61)/100 ≈ 0,256 m ≈ 0,25 m."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "0,20 m (20 cm).",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "0,10 m (10 cm).",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|chapter|G10-CH5|11": {
    "stem": "[Đề thi tổng hợp G10-CH5] Một quả bóng khối lượng m = 500 g đang bay với vận tốc v = 10 m/s. Động lượng của quả bóng có độ lớn là.",
    "statements": [
      {
        "text": "5 kg·m/s.",
        "is_correct": true,
        "explanation": "m = 0,5 kg. p = m · v = 0,5 · 10 = 5 kg·m/s."
      },
      {
        "text": "Để đổi từ km/h sang m/s, ta nhân giá trị tốc độ với 3,6.",
        "is_correct": false,
        "explanation": "Sai, muốn đổi từ km/h sang m/s ta phải chia cho 3,6 (ví dụ: 36 km/h = 10 m/s)."
      },
      {
        "text": "50 kg·m/s.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "5000 kg·m/s.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|chapter|G10-CH5|14": {
    "stem": "[Đề thi tổng hợp G10-CH5] Hai vật có khối lượng m₁ = 1 kg và m₂ = 4 kg chuyển động với cùng một động lượng (p₁ = p₂). Tỉ số động năng W_đ1 / W_đ2 của hai vật là.",
    "statements": [
      {
        "text": "4.",
        "is_correct": true,
        "explanation": "Mối liên hệ giữa động năng và động lượng: W_đ = p² / (2m). Khi p bằng nhau: W_đ1 / W_đ2 = m₂ / m₁ = 4 / 1 = 4."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "1/4.",
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
  "10|chapter|G10-CH5|16": {
    "stem": "[Đề thi tổng hợp G10-CH5] Trong trò chơi bida, quả bi cái chuyển động với vận tốc 5 m/s đập trực diện đàn hồi vào một quả bi mục tiêu cùng khối lượng đang đứng yên. Vận tốc của bi cái và bi mục tiêu sau va chạm lần lượt là.",
    "statements": [
      {
        "text": "Bi cái dừng lại (v₁' = 0); Bi mục tiêu bay đi với vận tốc v₂' = 5 m/s.",
        "is_correct": true,
        "explanation": "Cùng khối lượng và va chạm đàn hồi nên hai bi hoán đổi vận tốc: bi cái truyền toàn bộ vận tốc 5 m/s cho bi mục tiêu và dừng lại."
      },
      {
        "text": "Để đổi từ km/h sang m/s, ta nhân giá trị tốc độ với 3,6.",
        "is_correct": false,
        "explanation": "Sai, muốn đổi từ km/h sang m/s ta phải chia cho 3,6 (ví dụ: 36 km/h = 10 m/s)."
      },
      {
        "text": "Cả hai cùng bay với vận tốc 2,5 m/s.",
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
  "10|chapter|G10-CH5|17": {
    "stem": "[Đề thi tổng hợp G10-CH5] Một lực F = 50 N tác dụng vào một vật trong khoảng thời gian Δt = 0,2 s. Xung lượng của lực này có độ lớn là.",
    "statements": [
      {
        "text": "10 N·s.",
        "is_correct": true,
        "explanation": "Xung lượng = F · Δt = 50 · 0,2 = 10 N·s."
      },
      {
        "text": "Lực chỉ có tác dụng làm biến dạng vật mà không thể làm thay đổi vận tốc của vật.",
        "is_correct": false,
        "explanation": "Sai, tác dụng của lực có thể làm thay đổi vận tốc (chuyển động) hoặc làm biến dạng vật, hoặc cả hai."
      },
      {
        "text": "250 N·s.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "5 N·s.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH5-TP1|11": {
    "stem": "Một quả bóng khối lượng m = 500 g đang bay với vận tốc v = 10 m/s. Động lượng của quả bóng có độ lớn là.",
    "statements": [
      {
        "text": "5 kg·m/s.",
        "is_correct": true,
        "explanation": "m = 0,5 kg. p = m · v = 0,5 · 10 = 5 kg·m/s."
      },
      {
        "text": "Để đổi từ km/h sang m/s, ta nhân giá trị tốc độ với 3,6.",
        "is_correct": false,
        "explanation": "Sai, muốn đổi từ km/h sang m/s ta phải chia cho 3,6 (ví dụ: 36 km/h = 10 m/s)."
      },
      {
        "text": "50 kg·m/s.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "5000 kg·m/s.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH5-TP1|12": {
    "stem": "Hai vật có khối lượng m₁ = 1 kg và m₂ = 4 kg chuyển động với cùng một động lượng (p₁ = p₂). Tỉ số động năng W_đ1 / W_đ2 của hai vật là.",
    "statements": [
      {
        "text": "4.",
        "is_correct": true,
        "explanation": "Mối liên hệ giữa động năng và động lượng: W_đ = p² / (2m). Khi p bằng nhau: W_đ1 / W_đ2 = m₂ / m₁ = 4 / 1 = 4."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "1/4.",
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
  "10|topic|G10-CH5-TP1|14": {
    "stem": "Một vật khối lượng 2 kg đang chuyển động thẳng đều với vận tốc 4 m/s thì chịu một lực cản làm vận tốc giảm xuống còn 1 m/s. Độ biến thiên động lượng của vật là.",
    "statements": [
      {
        "text": "-6 kg·m/s.",
        "is_correct": true,
        "explanation": "Δp = m(v₂ - v₁) = 2 · (1 - 4) = 2 · (-3) = -6 kg·m/s."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "+6 kg·m/s.",
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
  "10|topic|G10-CH5-TP1|16": {
    "stem": "Vận động viên khi bắt bóng chày thường có động tác kéo giật găng tay lùi về phía sau theo hướng bay của quả bóng. Tác dụng chính của động tác này là.",
    "statements": [
      {
        "text": "Kéo dài thời gian va chạm Δt để giảm lực tác dụng lên bàn tay, chống chấn thương.",
        "is_correct": true,
        "explanation": "Kéo tay lùi về phía sau giúp kéo dài thời gian dừng Δt, từ đó giảm lực cản F = Δp / Δt tác dụng vào cổ tay."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Làm tăng tốc độ bay của bóng.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Làm quả bóng nặng hơn.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH5-TP2|12": {
    "stem": "Một phi hành gia có khối lượng 80 kg đang trôi tự do ngoài không gian bên ngoài trạm vũ trụ. Để di chuyển về phía trạm vũ trụ (đang ở phía trước), phi hành gia cần làm gì?.",
    "statements": [
      {
        "text": "Ném một chiếc cờ lê kim loại nặng về phía sau (ngược hướng trạm).",
        "is_correct": true,
        "explanation": "Ném vật nặng về phía sau sẽ truyền cho phi hành gia một động lượng hướng về phía trước theo nguyên lý phản lực."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Ném chiếc cờ lê về phía trước (hướng vào trạm vũ trụ).",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Vẫy tay thật nhanh trong chân không.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH5-TP2|14": {
    "stem": "Một viên đạn khối lượng 2 kg đang bay thẳng đứng lên cao với vận tốc 200 m/s thì nổ thành hai mảnh bằng nhau: mảnh 1 bay theo phương ngang với vận tốc 400 m/s. Mảnh thứ hai sẽ bay theo hướng nào?.",
    "statements": [
      {
        "text": "Bay chếch lên trên hợp với phương thẳng đứng.",
        "is_correct": true,
        "explanation": "Vectơ p_trước thẳng đứng hướng lên. Để p_sau = p₁ + p₂ thì vectơ p₂ phải có thành phần thẳng đứng hướng lên (để bù p_trước) và thành phần ngang ngược chiều p₁ (để triệt tiêu p₁). Do đó mảnh 2 bay chếch lên trên."
      },
      {
        "text": "Đơn vị đo chuẩn của tốc độ trong hệ SI là mét trên giây (m/s).",
        "is_correct": true,
        "explanation": "Đúng, 1 m/s = 3,6 km/h."
      },
      {
        "text": "Bay thẳng đứng xuống dưới.",
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
  "10|topic|G10-CH5-TP2|15": {
    "stem": "Tại sao các tên lửa đẩy hiện đại (như Ariane, Saturn V, Falcon 9) luôn được thiết kế gồm nhiều tầng (2 hoặc 3 tầng tách rời)?.",
    "statements": [
      {
        "text": "Để khi đốt hết nhiên liệu của một tầng, tầng rỗng đó được vứt bỏ giúp giảm khối lượng M của tên lửa, nhờ đó các tầng sau có thể tăng tốc độ cực đại vượt bậc.",
        "is_correct": true,
        "explanation": "Vứt bỏ khối lượng kết cấu rỗng giúp giảm M trong công thức Tsiolkovsky v = v_khí · ln(M_đầu / M_cuối), giúp tên lửa đạt vận tốc vũ trụ cấp 1 (7,9 km/s)."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Để chứa được nhiều hành khách hơn.",
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
  "10|topic|G10-CH5-TP2|16": {
    "stem": "Một người khối lượng m = 60 kg đang đứng yên trên một chiếc thuyền khối lượng M = 140 kg trên mặt hồ phẳng lặng. Khi người bước đi về phía mũi thuyền với vận tốc 1,4 m/s đối với bờ thì chiếc thuyền sẽ.",
    "statements": [
      {
        "text": "Lùi về phía sau với vận tốc 0,6 m/s đối với bờ.",
        "is_correct": true,
        "explanation": "m·v + M·V = 0 ⇒ V = -(m/M)·v = -(60 / 140) · 1,4 = -0,6 m/s."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Tiến về phía trước với vận tốc 1,4 m/s.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Đứng yên không dịch chuyển.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH5-TP3|12": {
    "stem": "Trong trò chơi bida, quả bi cái chuyển động với vận tốc 5 m/s đập trực diện đàn hồi vào một quả bi mục tiêu cùng khối lượng đang đứng yên. Vận tốc của bi cái và bi mục tiêu sau va chạm lần lượt là.",
    "statements": [
      {
        "text": "Bi cái dừng lại (v₁' = 0); Bi mục tiêu bay đi với vận tốc v₂' = 5 m/s.",
        "is_correct": true,
        "explanation": "Cùng khối lượng và va chạm đàn hồi nên hai bi hoán đổi vận tốc: bi cái truyền toàn bộ vận tốc 5 m/s cho bi mục tiêu và dừng lại."
      },
      {
        "text": "Để đổi từ km/h sang m/s, ta nhân giá trị tốc độ với 3,6.",
        "is_correct": false,
        "explanation": "Sai, muốn đổi từ km/h sang m/s ta phải chia cho 3,6 (ví dụ: 36 km/h = 10 m/s)."
      },
      {
        "text": "Cả hai cùng bay với vận tốc 2,5 m/s.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Bi cái bật lùi với vận tốc -5 m/s.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH5-TP3|13": {
    "stem": "Một toa xe hàng khối lượng 10 tấn đang chạy với vận tốc 2 m/s đến va chạm mềm vào một toa xe khác cùng khối lượng 10 tấn đang đứng yên. Cơ năng của hệ hai toa xe sau va chạm so với trước va chạm đã.",
    "statements": [
      {
        "text": "Giảm đi 50% (chỉ còn một nửa).",
        "is_correct": true,
        "explanation": "W_đ1 = (1/2)m·v²; sau va chạm V = v/2 ⇒ W_đ2 = (1/2)(2m)·(v/2)² = (1/4)mv² = (1/2)W_đ1 (giảm đúng 50%)."
      },
      {
        "text": "Đơn vị đo chuẩn của tốc độ trong hệ SI là mét trên giây (m/s).",
        "is_correct": true,
        "explanation": "Đúng, 1 m/s = 3,6 km/h."
      },
      {
        "text": "Được bảo toàn nguyên vẹn 100%.",
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
  "10|topic|G10-CH5-TP3|15": {
    "stem": "Một quả cầu đất sét ném vào bức tường rồi dính chặt vào tường. Đây là ví dụ của loại va chạm nào?.",
    "statements": [
      {
        "text": "Va chạm mềm (không đàn hồi hoàn toàn).",
        "is_correct": true,
        "explanation": "Quả cầu đất sét bị biến dạng vĩnh viễn và dính vào tường, toàn bộ động năng chuyển thành nhiệt và công biến dạng, là va chạm mềm."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Va chạm đàn hồi.",
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
  "10|topic|G10-CH5-TP3|17": {
    "stem": "Trong va chạm đàn hồi trực diện giữa hai vật, vận tốc tương đối giữa hai vật sau va chạm so với trước va chạm có đặc điểm gì?.",
    "statements": [
      {
        "text": "Có cùng độ lớn nhưng đổi chiều: (v₂' - v₁') = -(v₂ - v₁).",
        "is_correct": true,
        "explanation": "Đặc trưng cơ bản của va chạm đàn hồi 1 chiều là vận tốc tương đối đổi dấu và bảo toàn độ lớn: v₂' - v₁' = -(v₂ - v₁)."
      },
      {
        "text": "Đơn vị đo chuẩn của tốc độ trong hệ SI là mét trên giây (m/s).",
        "is_correct": true,
        "explanation": "Đúng, 1 m/s = 3,6 km/h."
      },
      {
        "text": "Bằng 0.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Tăng gấp đôi.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|chapter|G10-CH6|11": {
    "stem": "[Đề thi tổng hợp G10-CH6] Kim giây của một chiếc đồng hồ treo tường có chu kì quay T bằng.",
    "statements": [
      {
        "text": "60 giây (1 phút).",
        "is_correct": true,
        "explanation": "Kim giây quay đúng 1 vòng tròn mất 60 giây (1 phút)."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "3600 giây (1 giờ).",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "12 giờ.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|chapter|G10-CH6|12": {
    "stem": "[Đề thi tổng hợp G10-CH6] Một vật khối lượng m = 200 g chuyển động tròn đều trên quỹ đạo bán kính r = 0,5 m với tốc độ dài v = 4 m/s. Lực hướng tâm tác dụng lên vật có độ lớn là.",
    "statements": [
      {
        "text": "6,4 N.",
        "is_correct": true,
        "explanation": "F_ht = m · v² / r = 0,2 · 4² / 0,5 = 0,2 · 16 / 0,5 = 6,4 N."
      },
      {
        "text": "Đơn vị đo chuẩn của tốc độ trong hệ SI là mét trên giây (m/s).",
        "is_correct": true,
        "explanation": "Đúng, 1 m/s = 3,6 km/h."
      },
      {
        "text": "3,2 N.",
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
  "10|chapter|G10-CH6|16": {
    "stem": "[Đề thi tổng hợp G10-CH6] Một lò xo có độ cứng k = 100 N/m. Để lò xo dãn ra một đoạn 3 cm thì cần tác dụng một lực kéo có độ lớn là.",
    "statements": [
      {
        "text": "3 N.",
        "is_correct": true,
        "explanation": "Δl = 3 cm = 0,03 m. F_đh = k · Δl = 100 · 0,03 = 3 N."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "300 N.",
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
  "10|chapter|G10-CH6|20": {
    "stem": "[Đề thi tổng hợp G10-CH6] Một lò xo có chiều dài tự nhiên 20 cm. Khi treo thẳng đứng vật m₁ = 100 g thì lò xo dài 22 cm. Nếu treo thêm vật m₂ = 300 g (tổng khối lượng 400 g) thì chiều dài của lò xo lúc này là: (lấy g = 10 m/s²).",
    "statements": [
      {
        "text": "28 cm.",
        "is_correct": true,
        "explanation": "Treo 100 g dãn Δl₁ = 22 - 20 = 2 cm. Khi treo 400 g (gấp 4 lần), độ dãn là Δl₂ = 4 × 2 = 8 cm. Chiều dài mới: l₂ = 20 + 8 = 28 cm."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "26 cm.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "24 cm.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH6-TP1|11": {
    "stem": "Kim giây của một chiếc đồng hồ treo tường có chu kì quay T bằng.",
    "statements": [
      {
        "text": "60 giây (1 phút).",
        "is_correct": true,
        "explanation": "Kim giây quay đúng 1 vòng tròn mất 60 giây (1 phút)."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "3600 giây (1 giờ).",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "12 giờ.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH6-TP1|13": {
    "stem": "Kim giờ của đồng hồ treo tường có chu kì quay T bằng bao nhiêu giờ?.",
    "statements": [
      {
        "text": "12 giờ.",
        "is_correct": true,
        "explanation": "Kim giờ quay 1 vòng hết 12 giờ = 43200 giây."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "24 giờ.",
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
  "10|topic|G10-CH6-TP1|16": {
    "stem": "Một cánh quạt trần quay đều 300 vòng trong mỗi phút (300 rpm). Tần số quay f của cánh quạt là.",
    "statements": [
      {
        "text": "5 Hz.",
        "is_correct": true,
        "explanation": "f = 300 vòng / 60 s = 5 vòng/s = 5 Hz."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "300 Hz.",
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
  "10|topic|G10-CH6-TP1|20": {
    "stem": "Một vệ tinh nhân tạo bay tròn đều quanh Trái Đất ở độ cao h = 600 km so với mặt đất. Bán kính Trái Đất R = 6400 km. Chu kì quay của vệ tinh là T = 96 phút. Tốc độ dài của vệ tinh trên quỹ đạo là.",
    "statements": [
      {
        "text": "7,64 km/s.",
        "is_correct": true,
        "explanation": "Bán kính quỹ đạo r = R + h = 6400 + 600 = 7000 km = 7.000.000 m. Chu kì T = 96 × 60 = 5760 s. Vận tốc v = 2πr / T = (2 · 3,1416 · 7.000.000) / 5760 ≈ 7636 m/s ≈ 7,64 km/s."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "6,98 km/s.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "8,25 km/s.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH6-TP2|13": {
    "stem": "Một chiếc ô tô chạy qua điểm cao nhất của một chiếc cầu vồng lên (cầu cong bán kính R). Áp lực N của ô tô lên mặt cầu tại đỉnh cao nhất thỏa mãn.",
    "statements": [
      {
        "text": "N = mg - m · (v² / R) < mg (áp lực giảm đi).",
        "is_correct": true,
        "explanation": "Tại đỉnh cầu vồng: P - N = F_ht = mv²/R ⇒ N = mg - mv²/R < mg."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "N = mg + m · (v² / R) > mg.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "N = mg.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH6-TP2|15": {
    "stem": "Để một ô tô không bị trượt khi qua khúc cua phẳng bán kính r với hệ số ma sát nghỉ cực đại μ_n, vận tốc cực đại cho phép v_max thỏa mãn.",
    "statements": [
      {
        "text": "v_max = √(μ_n · g · r).",
        "is_correct": true,
        "explanation": "F_ht ≤ F_msn,max ⇔ m·v²/r ≤ μ_n·mg ⇒ v² ≤ μ_n·gr ⇒ v_max = √(μ_n·gr)."
      },
      {
        "text": "Lực chỉ có tác dụng làm biến dạng vật mà không thể làm thay đổi vận tốc của vật.",
        "is_correct": false,
        "explanation": "Sai, tác dụng của lực có thể làm thay đổi vận tốc (chuyển động) hoặc làm biến dạng vật, hoặc cả hai."
      },
      {
        "text": "v_max = μ_n · g · r.",
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
  "10|topic|G10-CH6-TP2|17": {
    "stem": "Một con lắc nón gồm quả cầu nhỏ treo vào sợi dây dài l quay tròn đều trong mặt phẳng ngang, dây nghiêng góc α so với phương đứng. Chu kì quay T của con lắc nón là.",
    "statements": [
      {
        "text": "T = 2π · √[(l · cos α) / g].",
        "is_correct": true,
        "explanation": "Bán kính r = l·sin α. T_căng·cos α = mg; T_căng·sin α = mω²r ⇒ tan α = ω²·l·sin α / g ⇒ ω = √[g / (l·cos α)] ⇒ T = 2π√[(l·cos α)/g]."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "T = 2π · √(l / g).",
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
  "10|topic|G10-CH6-TP2|20": {
    "stem": "Tại đỉnh cầu vồng bán kính R = 40 m, vận tốc tối thiểu của ô tô để bánh xe bắt đầu \"bay lên\" rời khỏi mặt đường (áp lực N = 0) là.",
    "statements": [
      {
        "text": "20 m/s (72 km/h).",
        "is_correct": true,
        "explanation": "N = 0 ⇔ mg = mv²/R ⇒ v = √(gR) = √(10 · 40) = √400 = 20 m/s = 72 km/h."
      },
      {
        "text": "Lực chỉ có tác dụng làm biến dạng vật mà không thể làm thay đổi vận tốc của vật.",
        "is_correct": false,
        "explanation": "Sai, tác dụng của lực có thể làm thay đổi vận tốc (chuyển động) hoặc làm biến dạng vật, hoặc cả hai."
      },
      {
        "text": "15 m/s (54 km/h).",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "10 m/s (36 km/h).",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH6-TP3|16": {
    "stem": "Đồ thị biểu diễn lực đàn hồi F_đh theo độ biến dạng |Δl| của lò xo trong giới hạn đàn hồi có dạng là.",
    "statements": [
      {
        "text": "Một đoạn thẳng xiên đi qua gốc tọa độ O.",
        "is_correct": true,
        "explanation": "Vì F_đh = k·|Δl| là hàm bậc nhất đồng nhất nên đồ thị là đoạn thẳng đi qua gốc tọa độ O, hệ số góc dốc chính bằng k."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "Một đường cong parabol.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Một đường nằm ngang song song trục hoành.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "10|topic|G10-CH6-TP3|13": {
    "stem": "Treo một quả cân 200 g vào lò xo treo thẳng đứng thì lò xo dãn 4 cm. Lấy g = 10 m/s². Độ cứng của lò xo là.",
    "statements": [
      {
        "text": "50 N/m.",
        "is_correct": true,
        "explanation": "P = mg = 0,2 · 10 = 2 N; Δl = 0,04 m. k = P / Δl = 2 / 0,04 = 50 N/m."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "5 N/m.",
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
  "10|topic|G10-CH6-TP3|17": {
    "stem": "Một lò xo bị nén một đoạn 5 cm thì sinh lực đàn hồi 10 N. Để lò xo sinh lực đàn hồi 25 N (trong giới hạn đàn hồi) thì độ nén của lò xo phải là.",
    "statements": [
      {
        "text": "12,5 cm.",
        "is_correct": true,
        "explanation": "Vì F_đh tỉ lệ thuận với độ nén: Δl₂ / Δl₁ = F₂ / F₁ ⇒ Δl₂ = 5 · (25 / 10) = 12,5 cm."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "10,0 cm.",
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
  "10|topic|G10-CH6-TP3|20": {
    "stem": "Treo một vật khối lượng m vào một lò xo có độ cứng k thì lò xo dãn 5 cm. Nếu cắt lò xo đó làm hai nửa bằng nhau rồi ghép song song với nhau và treo vật m đó vào hệ, thì độ dãn của hệ lúc này là.",
    "statements": [
      {
        "text": "1,25 cm.",
        "is_correct": true,
        "explanation": "Mỗi nửa lò xo có độ cứng k' = 2k. Ghép song song: k_ss = 2k + 2k = 4k (độ cứng tăng gấp 4 lần). Độ dãn mới: Δl' = mg / (4k) = Δl / 4 = 5 / 4 = 1,25 cm."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "2,5 cm.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "10 cm.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  }
};

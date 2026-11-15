import type { TfBank } from './types';

/**
 * Ngân hàng câu Đúng/Sai – Lớp 9 (soạn chuẩn Cấu trúc đề 2025 Bộ GD&ĐT).
 * Bao gồm đầy đủ 16 chủ đề/chương của chương trình Vật lý 9.
 * Mỗi câu gồm 4 mệnh đề a, b, c, d độc lập với sự phân bổ tự nhiên giữa Đúng và Sai.
 */
export const GRADE_9_TF_BANK: TfBank = {
  "9|chapter|G9-CH1|7": {
    "stem": "Một vật trượt đều trên mặt bàn nằm ngang. Công của trọng lực và phản lực của mặt bàn có giá trị bằng.",
    "statements": [
      {
        "text": "Bằng 0 vì cả hai lực đều vuông góc với hướng chuyển dời.",
        "is_correct": true,
        "explanation": "Phương chuyển dời nằm ngang, trọng lực hướng xuống và phản lực hướng lên đều vuông góc 90° nên không sinh công."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "Bằng công của lực kéo.",
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
  "9|chapter|G9-CH1|8": {
    "stem": "Khi vận tốc của một vật tăng gấp đôi thì.",
    "statements": [
      {
        "text": "Động năng tăng gấp 4 lần.",
        "is_correct": true,
        "explanation": "W_đ = ½ m v², v tăng 2 lần thì v² tăng 4 lần."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Thế năng tăng gấp 4.",
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
  "9|chapter|G9-CH1|10": {
    "stem": "Một chiếc ô tô đang chuyển động đều với công suất động cơ $P$. Nếu xe muốn tăng lực kéo lên gấp rưỡi để kéo rơ-moóc thì vận tốc xe phải.",
    "statements": [
      {
        "text": "Giảm xuống còn 2/3 vận tốc cũ (theo hệ thức P = F·v).",
        "is_correct": true,
        "explanation": "P = F · v = const ⇒ khi F tăng 1,5 lần thì v phải giảm xuống v / 1,5 = 2/3 v."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "Tăng lên gấp rưỡi.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Không thay đổi.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "9|chapter|G9-CH1|12": {
    "stem": "Người ta kéo một vật nặng $100\\,\\text{kg}$ lên cao $2\\,\\text{m}$ bằng palăng (hệ ròng rọc) được lợi 4 lần về lực. Bỏ qua ma sát, công thực hiện bằng.",
    "statements": [
      {
        "text": "Công thực hiện không đổi bằng 2000 J (vì thiệt 4 lần về đường đi).",
        "is_correct": true,
        "explanation": "Định luật về công: Không máy cơ đơn giản nào cho lợi về công. A = P · h = 1000 N × 2 m = 2000 J không đổi."
      },
      {
        "text": "Lực chỉ có tác dụng làm biến dạng vật mà không thể làm thay đổi vận tốc của vật.",
        "is_correct": false,
        "explanation": "Sai, tác dụng của lực có thể làm thay đổi vận tốc (chuyển động) hoặc làm biến dạng vật, hoặc cả hai."
      },
      {
        "text": "Được lợi 4 lần về công.",
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
  "9|topic|G9-CH1-TP1|12": {
    "stem": "Một con ngựa kéo một cỗ xe chuyển động thẳng đều trên đường nằm ngang. Nhận xét nào sau đây về công của các lực là ĐÚNG?.",
    "statements": [
      {
        "text": "Công của lực kéo là công phát động (A > 0), công của lực cản/ma sát là công cản (A < 0), công của trọng lực bằng 0.",
        "is_correct": true,
        "explanation": "Lực kéo cùng chiều dịch chuyển (A_kéo > 0); ma sát ngược chiều dịch chuyển (A_ms < 0); trọng lực và phản lực vuông góc phương ngang nên A = 0."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "Tất cả các lực đều sinh công phát động dương.",
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
  "9|topic|G9-CH1-TP1|13": {
    "stem": "Nếu độ lớn của lực tác dụng lên vật tăng gấp 3 lần và quãng đường dịch chuyển của vật theo hướng của lực tăng gấp 2 lần, thì công cơ học thực hiện sẽ thay đổi thế nào?.",
    "statements": [
      {
        "text": "Tăng gấp 6 lần.",
        "is_correct": true,
        "explanation": "Ta có A' = F' · s' = (3F) · (2s) = 6(F · s) = 6A (tăng gấp 6 lần)."
      },
      {
        "text": "Lực chỉ có tác dụng làm biến dạng vật mà không thể làm thay đổi vận tốc của vật.",
        "is_correct": false,
        "explanation": "Sai, tác dụng của lực có thể làm thay đổi vận tốc (chuyển động) hoặc làm biến dạng vật, hoặc cả hai."
      },
      {
        "text": "Tăng gấp 5 lần.",
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
  "9|topic|G9-CH1-TP1|15": {
    "stem": "Một quả bóng được ném thẳng đứng lên cao. Trong giai đoạn quả bóng đang bay lên, công của trọng lực có dấu gì và có tác dụng.",
    "statements": [
      {
        "text": "Âm (A < 0), cản trở chuyển động làm quả bóng bay chậm dần.",
        "is_correct": true,
        "explanation": "Khi bay lên, hướng chuyển dời hướng lên trên nhưng trọng lực hướng thẳng xuống dưới (ngược chiều nhau) nên công của trọng lực là công cản âm: A = -P·h < 0."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "Dương (A > 0), thúc đẩy bóng bay nhanh hơn.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Bằng 0 vì bóng đang ở trên cao.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "9|topic|G9-CH1-TP1|16": {
    "stem": "Người ta dùng mặt phẳng nghiêng nhẵn để kéo một vật nặng lên sàn xe tải. So với kéo trực tiếp theo phương thẳng đứng, dùng mặt phẳng nghiêng mang lại lợi ích gì?.",
    "statements": [
      {
        "text": "Được lợi về lực kéo (lực kéo nhỏ hơn trọng lượng vật) nhưng bị thiệt về đường đi, tổng công không đổi (nếu bỏ qua ma sát).",
        "is_correct": true,
        "explanation": "Định luật về công: Không một máy cơ đơn giản nào cho ta lợi về công; được lợi bao nhiêu lần về lực thì thiệt bấy nhiêu lần về đường đi."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Được lợi về công cơ học (công giảm đi).",
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
  "9|topic|G9-CH1-TP2|11": {
    "stem": "Hai máy kéo nông nghiệp A và B cùng thực hiện cày một thửa ruộng có diện tích như nhau. Máy A hoàn thành trong 2 giờ, máy B hoàn thành trong 3 giờ. So sánh công và công suất của hai máy.",
    "statements": [
      {
        "text": "Hai máy sinh công như nhau; máy A có công suất lớn hơn máy B.",
        "is_correct": true,
        "explanation": "Cùng cày một thửa ruộng nên công A thực hiện là như nhau. Máy A mất ít thời gian hơn (t_A < t_B) nên công suất của máy A lớn hơn máy B (P_A > P_B)."
      },
      {
        "text": "Theo định luật bảo toàn năng lượng, năng lượng không tự sinh ra và không tự mất đi, chỉ chuyển hóa từ dạng này sang dạng khác.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý bảo toàn và chuyển hóa năng lượng."
      },
      {
        "text": "Máy A sinh công lớn hơn máy B; công suất bằng nhau.",
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
  "9|topic|G9-CH1-TP2|12": {
    "stem": "Tại sao khi xe ô tô hoặc xe máy lên dốc cao, người lái xe thường phải chuyển về số thấp (số 1 hoặc số 2)?.",
    "statements": [
      {
        "text": "Để giảm vận tốc của xe, từ đó tăng lực kéo của động cơ lên theo hệ thức P = F · v (vì công suất cực đại của động cơ có hạn).",
        "is_correct": true,
        "explanation": "Khi công suất P không đổi, P = F · v ⇒ F = P / v. Về số thấp làm giảm vận tốc v giúp lực kéo F của xe tăng lên đáng kể để vượt dốc."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Để tăng công suất của động cơ xe lên gấp đôi.",
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
  "9|topic|G9-CH1-TP2|14": {
    "stem": "Nếu giữ nguyên lực kéo $F$ tác dụng vào một chiếc xe nhưng làm vận tốc chuyển động đều của xe tăng lên gấp đôi thì công suất của động cơ sẽ thay đổi.",
    "statements": [
      {
        "text": "Tăng lên gấp đôi.",
        "is_correct": true,
        "explanation": "Từ hệ thức P = F · v, khi F không đổi và v tăng 2 lần thì công suất P tăng lên gấp đôi."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "Giảm đi một nửa.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Tăng lên gấp 4 lần.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "9|topic|G9-CH1-TP2|17": {
    "stem": "Một chiếc tàu hỏa chạy với công suất $P$ không đổi. Khi đi vào đoạn đường có độ dốc cao làm lực cản chuyển động tăng lên gấp rưỡi ($F' = 1,5F$), để động cơ không bị quá tải thì vận tốc tối đa của tàu sẽ thay đổi thế nào?.",
    "statements": [
      {
        "text": "Giảm xuống còn 2/3 vận tốc ban đầu.",
        "is_correct": true,
        "explanation": "Vì P = F · v = hằng số, khi lực cản tăng lên 1,5 lần (F' = 1,5 F = 3/2 F) thì vận tốc tương ứng phải giảm xuống v' = P / F' = P / (1,5 F) = v / 1,5 = (2/3) v."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Tăng lên 1,5 lần.",
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
  "9|topic|G9-CH1-TP3|11": {
    "stem": "Nếu vận tốc của một vật chuyển động tăng lên gấp 3 lần trong khi khối lượng của vật không đổi thì động năng của vật sẽ.",
    "statements": [
      {
        "text": "Tăng lên gấp 9 lần.",
        "is_correct": true,
        "explanation": "Vì W_đ = ½ m v², động năng tỉ lệ với bình phương vận tốc: khi v tăng 3 lần thì v² tăng 3² = 9 lần ⇒ động năng tăng 9 lần."
      },
      {
        "text": "Để đổi từ km/h sang m/s, ta nhân giá trị tốc độ với 3,6.",
        "is_correct": false,
        "explanation": "Sai, muốn đổi từ km/h sang m/s ta phải chia cho 3,6 (ví dụ: 36 km/h = 10 m/s)."
      },
      {
        "text": "Tăng lên gấp 3 lần.",
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
  "9|topic|G9-CH1-TP3|12": {
    "stem": "Một chiếc ô tô tải có khối lượng 4 tấn và một chiếc ô tô con có khối lượng 1 tấn cùng đang chạy trên đường với vận tốc 60 km/h. So sánh động năng của hai xe.",
    "statements": [
      {
        "text": "Động năng của xe tải lớn gấp 4 lần động năng của xe con.",
        "is_correct": true,
        "explanation": "Cùng vận tốc v, động năng tỉ lệ thuận với khối lượng: m_tải / m_con = 4/1 = 4 nên W_đ(tải) = 4 W_đ(con)."
      },
      {
        "text": "Đơn vị đo chuẩn của tốc độ trong hệ SI là mét trên giây (m/s).",
        "is_correct": true,
        "explanation": "Đúng, 1 m/s = 3,6 km/h."
      },
      {
        "text": "Động năng của hai xe bằng nhau vì cùng vận tốc.",
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
  "9|topic|G9-CH1-TP3|14": {
    "stem": "Một vật được thả rơi tự do từ độ cao $h$. Trong quá trình rơi, tại vị trí có động năng bằng thế năng ($W_đ = W_t$) thì độ cao $h'$ của vật lúc đó bằng bao nhiêu so với độ cao ban đầu?.",
    "statements": [
      {
        "text": "h' = h / 2.",
        "is_correct": true,
        "explanation": "Cơ năng bảo toàn: W = W_t(max) = m·g·h. Tại vị trí W_đ = W_t: W = W_đ + W_t = 2 W_t ⇒ m·g·h = 2 m·g·h' ⇒ h' = h / 2."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "h' = h / 4.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "h' = 2h / 3.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "9|topic|G9-CH1-TP3|16": {
    "stem": "Khi đưa một vật có khối lượng $m$ lên độ cao tăng gấp đôi và đồng thời tăng khối lượng của vật lên gấp 3 lần thì thế năng trọng trường của vật sẽ.",
    "statements": [
      {
        "text": "Tăng gấp 6 lần.",
        "is_correct": true,
        "explanation": "W_t = m · g · h. Khi m tăng 3 lần và h tăng 2 lần: W_t' = (3m) · g · (2h) = 6(mgh) = 6 W_t (tăng 6 lần)."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Tăng gấp 5 lần.",
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
  "9|chapter|G9-CH2|7": {
    "stem": "Một tia sáng chiếu từ không khí vào khối thủy tinh ($n = 1,5$) với góc tới $i = 60^\\circ$. Nhận xét nào sau đây về góc khúc xạ $r$ là ĐÚNG?.",
    "statements": [
      {
        "text": "r < 60° (tia khúc xạ lệch lại gần pháp tuyến).",
        "is_correct": true,
        "explanation": "Từ môi trường kém chiết quang vào chiết quang hơn thì r < i."
      },
      {
        "text": "Theo định luật phản xạ ánh sáng, góc phản xạ luôn bằng góc tới (i' = i).",
        "is_correct": true,
        "explanation": "Đúng theo định luật phản xạ ánh sáng."
      },
      {
        "text": "r > 60°.",
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
  "9|chapter|G9-CH2|9": {
    "stem": "Vật thật đặt trước thấu kính phân kỳ luôn cho ảnh có tính chất gì?.",
    "statements": [
      {
        "text": "Ảnh ảo, cùng chiều và luôn nhỏ hơn vật.",
        "is_correct": true,
        "explanation": "TKPK luôn cho ảnh ảo nhỏ hơn vật."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Ảnh thật ngược chiều.",
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
  "9|chapter|G9-CH2|11": {
    "stem": "Người cận thị không nhìn rõ vật ở xa vì nguyên nhân quang học nào?.",
    "statements": [
      {
        "text": "Ảnh của vật ở xa rơi trước màng lưới của mắt.",
        "is_correct": true,
        "explanation": "Độ tụ mắt cận quá lớn, chùm sáng hội tụ ở trước võng mạc."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Ảnh rơi sau màng lưới.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Màng lưới không có tế bào quang học.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "9|chapter|G9-CH2|13": {
    "stem": "Một vật sáng AB đặt trước thấu kính hội tụ tại $d = 2f$. Ảnh thu được có tính chất.",
    "statements": [
      {
        "text": "Ảnh thật ngược chiều và bằng đúng kích thước vật.",
        "is_correct": true,
        "explanation": "Tại d = 2f, d' = 2f, ảnh thật ngược chiều và bằng vật."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Ảnh ảo lớn gấp đôi.",
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
  "9|topic|G9-CH2-TP1|11": {
    "stem": "Khi ta cắm một chiếc đũa thẳng vào cốc nước trong suốt, ta nhìn thấy chiếc đũa như bị gãy khúc tại mặt nước. Hiện tượng này là do.",
    "statements": [
      {
        "text": "Tia sáng từ chiếc đũa truyền qua mặt nước ra không khí tới mắt bị khúc xạ đổi hướng.",
        "is_correct": true,
        "explanation": "Hiện tượng khúc xạ ánh sáng tại mặt nước làm cho ảnh của phần đũa ngập trong nước bị nâng lên, tạo cảm giác đũa bị gãy."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Chiếc đũa bị nước làm mềm uốn cong.",
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
  "9|topic|G9-CH2-TP1|14": {
    "stem": "Kim cương thiên nhiên có chiết suất rất lớn ($n \\approx 2,42$). Đặc điểm quang học này mang lại vẻ đẹp lấp lánh rực rỡ cho kim cương nhờ nguyên lý nào?.",
    "statements": [
      {
        "text": "Vì chiết suất rất lớn nên góc giới hạn phản xạ toàn phần rất nhỏ ($i_{\\text{gh}} \\approx 24,4^\\circ$), hầu hết ánh sáng lọt vào viên kim cương bị phản xạ toàn phần nhiều lần qua các giác cắt trước khi ló ra.",
        "is_correct": true,
        "explanation": "Với n lớn, góc i_gh rất nhỏ (khoảng 24,4°), tia sáng vào trong kim cương dễ dàng thỏa mãn i > i_gh nên bị phản xạ toàn phần nhiều lần qua các mặt giác làm kim cương lấp lánh."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Vì kim cương tự phát ra ánh sáng.",
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
  "9|topic|G9-CH2-TP1|16": {
    "stem": "Trong ống nhòm quân sự lăng kính (Prism binoculars), người ta dùng lăng kính phản xạ toàn phần (thủy tinh $n = 1,5$) thay cho gương phẳng tráng bạc thông thường vì lý do nào?.",
    "statements": [
      {
        "text": "Phản xạ toàn phần có hệ số phản xạ đạt 100% ánh sáng (sáng và nét hơn gương tráng bạc chỉ đạt 90-95%) và mặt phản xạ không bị ố mờ theo thời gian.",
        "is_correct": true,
        "explanation": "Phản xạ toàn phần phản xạ 100% cường độ chùm sáng, không bị suy hao hay bong tróc lớp bạc như gương kim loại."
      },
      {
        "text": "Theo định luật phản xạ ánh sáng, góc phản xạ luôn bằng góc tới (i' = i).",
        "is_correct": true,
        "explanation": "Đúng theo định luật phản xạ ánh sáng."
      },
      {
        "text": "Để ống nhòm nặng hơn cầm đầm tay.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Lăng kính rẻ tiền hơn gương phẳng.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "9|topic|G9-CH2-TP1|21": {
    "stem": "Một tia sáng truyền từ nước ($n = 4/3$) ra không khí với góc tới $i = 60^\\circ$. Hiện tượng gì sẽ xảy ra tại mặt phân cách?.",
    "statements": [
      {
        "text": "Tia sáng bị phản xạ toàn phần trở lại trong nước.",
        "is_correct": true,
        "explanation": "Vì ánh sáng truyền từ môi trường chiết quang hơn sang kém chiết quang (nước ra không khí) và góc tới i = 60° > i_gh (48,6°) nên xảy ra hiện tượng phản xạ toàn phần."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Tia sáng bị khúc xạ ra ngoài không khí với góc r ≈ 40°.",
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
  "9|topic|G9-CH2-TP2|11": {
    "stem": "Đặt một vật sáng AB trước thấu kính hội tụ ở khoảng cách $d > 2f$ (ngoài khoảng 2 lần tiêu cự). Ảnh thu được trên màn chắn có tính chất gì?.",
    "statements": [
      {
        "text": "Ảnh thật, ngược chiều và NHỎ HƠN vật.",
        "is_correct": true,
        "explanation": "Khi d > 2f, thấu kính hội tụ cho ảnh thật, ngược chiều và nhỏ hơn vật (ứng dụng trong máy ảnh)."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Ảnh thật, ngược chiều và LỚN HƠN vật.",
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
  "9|topic|G9-CH2-TP2|13": {
    "stem": "Để thấu kính hội tụ cho một ẢNH ẢO lớn hơn vật và cùng chiều với vật, ta phải đặt vật ở khoảng cách $d$.",
    "statements": [
      {
        "text": "d < f (đặt vật trong khoảng tiêu cự).",
        "is_correct": true,
        "explanation": "Khi d < f, chùm tia ló là chùm phân kỳ có đường kéo dài cắt nhau tạo ảnh ảo cùng chiều và lớn hơn vật (nguyên lý kính lúp)."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "d > 2f.",
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
  "9|topic|G9-CH2-TP2|16": {
    "stem": "Một vật sáng AB đặt vuông góc với trục chính của thấu kính hội tụ cho một ảnh thật A'B' hứng rõ nét trên màn chắn. Nếu ta dùng một miếng bìa đen che khuất nửa trên của thấu kính thì hiện tượng gì xảy ra với hình ảnh trên màn?.",
    "statements": [
      {
        "text": "Hình ảnh A'B' vẫn đầy đủ toàn bộ vật nhưng độ sáng của ảnh bị giảm đi (tối bớt đi).",
        "is_correct": true,
        "explanation": "Mỗi điểm trên vật phát ra vô số tia sáng tới mọi điểm trên thấu kính; khi che nửa thấu kính thì nửa dưới vẫn hứng đủ các tia từ toàn bộ vật để tạo ảnh hoàn chỉnh, chỉ giảm lượng quang năng nên ảnh tối đi."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Ảnh A'B' bị mất đi một nửa phía trên.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Ảnh A'B' bị mất đi một nửa phía dưới.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "9|topic|G9-CH2-TP2|18": {
    "stem": "Một vật sáng AB đặt vuông góc với trục chính của thấu kính hội tụ có tiêu cự $f = 20\\,\\text{cm}$. Vật cách thấu kính một khoảng $d = 30\\,\\text{cm}$. Khoảng cách từ ảnh đến thấu kính $d'$ bằng bao nhiêu và là ảnh thật hay ảnh ảo?.",
    "statements": [
      {
        "text": "d' = 60 cm (ảnh thật).",
        "is_correct": true,
        "explanation": "Áp dụng: d' = (d · f) / (d - f) = (30 × 20) / (30 - 20) = 600 / 10 = 60 cm > 0 ⇒ Ảnh thật cách thấu kính 60 cm."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "d' = -60 cm (ảnh ảo).",
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
  "9|topic|G9-CH2-TP3|11": {
    "stem": "Tại sao mắt cận thị lại không nhìn rõ được các vật ở xa?.",
    "statements": [
      {
        "text": "Vì thể thủy tinh quá phồng (hoặc trục nhãn cầu dài) làm tiêu cự của mắt quá ngắn, chùm sáng từ vật ở xa hội tụ ở TRƯỚC màng lưới.",
        "is_correct": true,
        "explanation": "Mắt cận có độ tụ quá lớn, chùm tia song song từ vật ở xa hội tụ trước võng mạc nên ảnh in trên võng mạc bị nhòe."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Vì thể thủy tinh quá dẹt không hội tụ được ánh sáng.",
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
  "9|topic|G9-CH2-TP3|13": {
    "stem": "Một kính lúp có số bội giác $G = 5X$ và một kính lúp khác có $G = 10X$. So sánh tiêu cự của hai kính lúp này.",
    "statements": [
      {
        "text": "Kính 10X có tiêu cự ngắn hơn một nửa so với kính 5X.",
        "is_correct": true,
        "explanation": "Từ G = 25 / f ⇒ f = 25 / G. Tiêu cự tỉ lệ nghịch với số bội giác: kính 10X có f = 2,5 cm, kính 5X có f = 5 cm (ngắn hơn một nửa)."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Kính 10X có tiêu cự dài gấp đôi kính 5X.",
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
  "9|topic|G9-CH2-TP3|15": {
    "stem": "Sự điều tiết của mắt diễn ra như thế nào khi mắt chuyển từ trạng thái nhìn một vật ở xa sang nhìn một vật ở gần?.",
    "statements": [
      {
        "text": "Cơ vòng co lại làm thể thủy tinh phồng lên, độ cong tăng, tiêu cự của mắt giảm xuống để ảnh vẫn rơi đúng trên màng lưới.",
        "is_correct": true,
        "explanation": "Khi nhìn vật ở gần (d nhỏ), để ảnh rơi trúng võng mạc (d' không đổi) thì thể thủy tinh phải phồng lên làm tiêu cự f giảm."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Cơ vòng giãn ra làm thể thủy tinh dẹt lại.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Màng lưới tự động lùi ra phía sau.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "9|topic|G9-CH2-TP3|17": {
    "stem": "Thói quen nào sau đây là nguyên nhân HÀNG ĐẦU dẫn đến tật cận thị học đường ở lứa tuổi học sinh?.",
    "statements": [
      {
        "text": "Cúi mặt quá sát trang sách/màn hình điện thoại trong thời gian dài và học tập ở nơi thiếu ánh sáng.",
        "is_correct": true,
        "explanation": "Nhìn quá gần liên tục làm cơ thể thủy tinh phải căng phồng điều tiết tối đa lâu ngày dẫn đến mỏi mắt và co quắp điều tiết sinh cận thị."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Đọc sách nơi đủ ánh sáng và ngồi thẳng lưng.",
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
  "9|chapter|G9-CH3|7": {
    "stem": "Khi chiều dài dây dẫn tăng lên 3 lần và tiết diện giảm đi một nửa thì điện trở của dây sẽ.",
    "statements": [
      {
        "text": "Tăng lên gấp 6 lần.",
        "is_correct": true,
        "explanation": "R = ρ · l / S. l tăng 3 và S giảm 2 ⇒ R tăng 3 / (1/2) = 6 lần."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Tăng lên gấp 1,5 lần.",
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
  "9|chapter|G9-CH3|8": {
    "stem": "Mắc nối tiếp hai điện trở $R_1 = 20\\,\\Omega$ và $R_2 = 40\\,\\Omega$ vào nguồn điện. So sánh cường độ dòng điện qua hai điện trở.",
    "statements": [
      {
        "text": "I₁ = I₂ vì mắc nối tiếp.",
        "is_correct": true,
        "explanation": "Trong mạch nối tiếp, cường độ dòng điện bằng nhau tại mọi điểm: I₁ = I₂."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "I₂ = 2 I₁.",
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
  "9|chapter|G9-CH3|10": {
    "stem": "Nếu tăng đồng thời hiệu điện thế và cường độ dòng điện qua một bóng đèn lên gấp đôi thì công suất tiêu thụ của đèn sẽ.",
    "statements": [
      {
        "text": "Tăng lên gấp 4 lần.",
        "is_correct": true,
        "explanation": "P = U · I. U tăng 2 và I tăng 2 ⇒ P tăng 2 × 2 = 4 lần."
      },
      {
        "text": "Theo định luật bảo toàn năng lượng, năng lượng không tự sinh ra và không tự mất đi, chỉ chuyển hóa từ dạng này sang dạng khác.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý bảo toàn và chuyển hóa năng lượng."
      },
      {
        "text": "Tăng lên gấp đôi.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Không thay đổi.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "9|chapter|G9-CH3|12": {
    "stem": "Khi một dây mayso bếp điện bị đứt một đoạn ngắn, người ta nối lại phần còn lại để dùng tiếp. Công suất của bếp điện lúc này sẽ.",
    "statements": [
      {
        "text": "Tăng lên (vì chiều dài dây giảm làm điện trở R giảm, P = U²/R tăng).",
        "is_correct": true,
        "explanation": "Cắt bớt dây ⇒ l giảm ⇒ R giảm ⇒ P = U² / R tăng lên làm bếp nóng hơn."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Giảm đi.",
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
  "9|topic|G9-CH3-TP1|11": {
    "stem": "Khi đặt hiệu điện thế $U$ vào hai đầu một dây dẫn cố định, nếu tăng hiệu điện thế $U$ lên gấp 3 lần thì cường độ dòng điện $I$ chạy qua dây dẫn sẽ.",
    "statements": [
      {
        "text": "Tăng lên gấp 3 lần.",
        "is_correct": true,
        "explanation": "Theo định luật Ohm I = U / R, với R không đổi thì I tỉ lệ thuận với U nên khi U tăng 3 lần thì I tăng 3 lần."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Giảm đi 3 lần.",
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
  "9|topic|G9-CH3-TP1|12": {
    "stem": "Hai dây dẫn bằng đồng có cùng tiết diện, dây thứ nhất dài $l_1 = 10\\,\\text{m}$, dây thứ hai dài $l_2 = 30\\,\\text{m}$. So sánh điện trở của hai dây.",
    "statements": [
      {
        "text": "Điện trở dây thứ hai lớn gấp 3 lần điện trở dây thứ nhất (R₂ = 3R₁).",
        "is_correct": true,
        "explanation": "Cùng vật liệu và tiết diện thì R tỉ lệ thuận với chiều dài l: l₂ = 3 l₁ ⇒ R₂ = 3 R₁."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "Điện trở hai dây bằng nhau.",
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
  "9|topic|G9-CH3-TP1|15": {
    "stem": "Trên một biến trở con chạy có ghi $50\\,\\Omega - 2\\,\\text{A}$. Hai con số đó có ý nghĩa gì?.",
    "statements": [
      {
        "text": "Điện trở lớn nhất của biến trở là 50 Ω và cường độ dòng điện lớn nhất được phép chạy qua biến trở là 2 A mà không làm hỏng biến trở.",
        "is_correct": true,
        "explanation": "50 Ω là điện trở toàn phần (lớn nhất) của cuộn dây biến trở; 2 A là dòng điện định mức tối đa chịu đựng được."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Điện trở nhỏ nhất là 50 Ω và dòng điện nhỏ nhất là 2 A.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Biến trở luôn có điện trở 50 Ω và dòng điện luôn là 2 A.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "9|topic|G9-CH3-TP1|16": {
    "stem": "Khi dịch chuyển con chạy của biến trở sang phía làm TĂNG chiều dài của phần cuộn dây có dòng điện chạy qua, thì cường độ dòng điện trong mạch sẽ thay đổi.",
    "statements": [
      {
        "text": "Giảm đi (vì chiều dài tăng làm điện trở của biến trở tăng, dòng điện giảm).",
        "is_correct": true,
        "explanation": "Chiều dài l tăng ⇒ điện trở R_bt = ρ·l/S tăng ⇒ tổng trở mạch tăng ⇒ dòng điện I = U / R giảm đi."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Tăng lên.",
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
  "9|topic|G9-CH3-TP2|14": {
    "stem": "Tại sao các thiết bị điện trong gia đình (bóng đèn, quạt máy, tủ lạnh, tivi) luôn được mắc SONG SONG vào nguồn điện 220 V?.",
    "statements": [
      {
        "text": "Để mỗi thiết bị đều hoạt động đúng hiệu điện thế định mức 220 V và có thể bật/tắt độc lập mà không ảnh hưởng tới các thiết bị khác.",
        "is_correct": true,
        "explanation": "Mắc song song giúp duy trì điện áp 220 V cho từng thiết bị và bật/tắt riêng rẽ từng thiết bị độc lập."
      },
      {
        "text": "Ampe kế được mắc nối tiếp với thiết bị điện cần đo cường độ dòng điện.",
        "is_correct": true,
        "explanation": "Đúng quy tắc sử dụng ampe kế đo cường độ dòng điện trong mạch."
      },
      {
        "text": "Để tiết kiệm dây dẫn điện.",
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
  "9|topic|G9-CH3-TP2|15": {
    "stem": "Hai điện trở $R_1$ và $R_2$ mắc nối tiếp với $R_1 = 2 R_2$. So sánh hiệu điện thế $U_1$ trên $R_1$ và $U_2$ trên $R_2$.",
    "statements": [
      {
        "text": "U₁ = 2 U₂.",
        "is_correct": true,
        "explanation": "Trong mạch nối tiếp: U₁ / U₂ = R₁ / R₂ = 2 ⇒ U₁ = 2 U₂."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "U₁ = U₂.",
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
  "9|topic|G9-CH3-TP2|17": {
    "stem": "Một đoạn mạch gồm một ampe kế và một vôn kế. Để đo cường độ dòng điện qua bóng đèn và hiệu điện thế hai đầu bóng đèn, cách mắc nào là ĐÚNG?.",
    "statements": [
      {
        "text": "Ampe kế mắc nối tiếp với bóng đèn; Vôn kế mắc song song với bóng đèn.",
        "is_correct": true,
        "explanation": "Ampe kế có điện trở rất nhỏ phải mắc NỐI TIẾP; Vôn kế có điện trở rất lớn phải mắc SONG SONG với bóng đèn."
      },
      {
        "text": "Ampe kế được mắc nối tiếp với thiết bị điện cần đo cường độ dòng điện.",
        "is_correct": true,
        "explanation": "Đúng quy tắc sử dụng ampe kế đo cường độ dòng điện trong mạch."
      },
      {
        "text": "Ampe kế mắc song song với bóng đèn; Vôn kế mắc nối tiếp.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Cả hai dụng cụ đều mắc nối tiếp.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "9|topic|G9-CH3-TP2|18": {
    "stem": "Cho mạch điện gồm $R_1 = 8\\,\\Omega$ mắc nối tiếp với $R_2 = 12\\,\\Omega$ đặt dưới hiệu điện thế $U = 40\\,\\text{V}$. Cường độ dòng điện mạch chính và hiệu điện thế $U_1$ lần lượt là.",
    "statements": [
      {
        "text": "I = 2 A; U₁ = 16 V.",
        "is_correct": true,
        "explanation": "R_tđ = R₁ + R₂ = 8 + 12 = 20 Ω. Dòng điện I = U / R_tđ = 40 / 20 = 2 A. Hiệu điện thế U₁ = I · R₁ = 2 × 8 = 16 V."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "I = 2 A; U₁ = 24 V.",
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
  "9|topic|G9-CH3-TP3|11": {
    "stem": "Trên một bóng đèn dây tóc có ghi $220\\,\\text{V} - 100\\,\\text{W}$. Ý nghĩa của hai thông số này là.",
    "statements": [
      {
        "text": "Khi mắc bóng đèn vào đúng hiệu điện thế định mức 220 V thì đèn hoạt động bình thường và đạt công suất tiêu thụ định mức là 100 W.",
        "is_correct": true,
        "explanation": "220 V là hiệu điện thế định mức, 100 W là công suất định mức khi sử dụng đúng hiệu điện thế đó."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Bóng đèn luôn luôn tiêu thụ công suất 100 W ở bất kỳ hiệu điện thế nào.",
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
  "9|topic|G9-CH3-TP3|13": {
    "stem": "Tại sao dây mayso của bếp điện nóng đỏ rực lên, trong khi dây dẫn nối từ ổ cắm vào bếp điện lại hầu như không bị nóng?.",
    "statements": [
      {
        "text": "Vì dây mayso có điện trở $R$ rất lớn nên tỏa nhiều nhiệt ($Q = I^2Rt$), còn dây nối bằng đồng có điện trở rất nhỏ nên tỏa nhiệt không đáng kể.",
        "is_correct": true,
        "explanation": "Vì mắc nối tiếp nên dòng điện I bằng nhau. Dây mayso bằng hợp kim niken-crôm có R rất lớn nên Q rất lớn; dây nối bằng đồng có R rất nhỏ nên Q không đáng kể."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "Vì dòng điện qua dây mayso lớn hơn dòng điện qua dây nối.",
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
  "9|topic|G9-CH3-TP3|15": {
    "stem": "Mắc hai bóng đèn $Đ_1$ ($220\\,\\text{V} - 40\\,\\text{W}$) và $Đ_2$ ($220\\,\\text{V} - 100\\,\\text{W}$) SONG SONG vào mạng điện 220 V. Đèn nào sẽ sáng hơn?.",
    "statements": [
      {
        "text": "Đèn 2 sáng hơn (vì đạt công suất định mức 100 W lớn hơn 40 W).",
        "is_correct": true,
        "explanation": "Mắc song song vào đúng 220 V, cả hai đèn đều sáng đúng định mức: đèn 2 (100 W) có công suất phát sáng lớn hơn đèn 1 (40 W) nên sáng hơn."
      },
      {
        "text": "Ampe kế được mắc nối tiếp với thiết bị điện cần đo cường độ dòng điện.",
        "is_correct": true,
        "explanation": "Đúng quy tắc sử dụng ampe kế đo cường độ dòng điện trong mạch."
      },
      {
        "text": "Đèn 1 sáng hơn.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hai đèn sáng như nhau.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "9|topic|G9-CH3-TP3|17": {
    "stem": "Biện pháp nào sau đây giúp TIẾT KIỆM điện năng tiêu thụ trong gia đình một cách hiệu quả và an toàn nhất?.",
    "statements": [
      {
        "text": "Thay thế bóng đèn sợi đốt bằng bóng đèn LED tiết kiệm điện và tắt các thiết bị điện khi không sử dụng.",
        "is_correct": true,
        "explanation": "Đèn LED hiệu suất cao và tắt thiết bị khi không dùng là giải pháp tiết kiệm điện năng hàng đầu."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Bật máy điều hòa ở nhiệt độ 16 °C liên tục cả ngày.",
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
  "9|chapter|G9-CH4|7": {
    "stem": "Khi nam châm tiến lại gần cuộn dây dẫn kín, dòng điện cảm ứng sinh ra có chiều sao cho.",
    "statements": [
      {
        "text": "Chống lại chuyển động tiến lại gần của nam châm (tạo cực từ cùng tên để đẩy).",
        "is_correct": true,
        "explanation": "Theo định luật Lenz, dòng cảm ứng chống lại nguyên nhân sinh ra nó."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Hút nam châm tiến lại nhanh hơn.",
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
  "9|chapter|G9-CH4|9": {
    "stem": "Nếu muốn giảm công suất hao phí trên đường dây tải điện đi 16 lần thì hiệu điện thế truyền tải phải.",
    "statements": [
      {
        "text": "Tăng lên gấp 4 lần.",
        "is_correct": true,
        "explanation": "P_hp tỉ lệ nghịch với U². Muốn P_hp giảm 16 lần thì U phải tăng √16 = 4 lần."
      },
      {
        "text": "Theo định luật bảo toàn năng lượng, năng lượng không tự sinh ra và không tự mất đi, chỉ chuyển hóa từ dạng này sang dạng khác.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý bảo toàn và chuyển hóa năng lượng."
      },
      {
        "text": "Tăng lên gấp 16 lần.",
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
  "9|chapter|G9-CH4|11": {
    "stem": "Một máy biến áp có $N_1 = 2000\\,\\text{vòng}$ và $N_2 = 500\\,\\text{vòng}$. Đây là loại máy biến áp nào?.",
    "statements": [
      {
        "text": "Máy hạ áp (vì N₂ < N₁).",
        "is_correct": true,
        "explanation": "N₂ < N₁ nên U₂ < U₁ là máy hạ áp."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Máy tăng áp.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Máy ổn áp.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "9|chapter|G9-CH4|12": {
    "stem": "Khi cho một nam châm quay đều trước một cuộn dây dẫn kín đứng yên thì trong cuộn dây xuất hiện.",
    "statements": [
      {
        "text": "Dòng điện xoay chiều.",
        "is_correct": true,
        "explanation": "Số đường sức từ luân phiên tăng giảm sinh ra dòng điện xoay chiều."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Dòng điện một chiều.",
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
  "9|topic|G9-CH4-TP1|11": {
    "stem": "Khi đưa cực Bắc (N) của một thanh nam châm lại gần đầu A của cuộn dây dẫn kín, theo định luật Lenz, đầu A của cuộn dây sẽ xuất hiện từ cực gì để tương tác với nam châm?.",
    "statements": [
      {
        "text": "Cực Bắc (N) để tác dụng lực từ ĐẨY nam châm ra xa (chống lại sự tiến lại gần).",
        "is_correct": true,
        "explanation": "Khi nam châm tiến lại gần (từ thông tăng), cuộn dây chống lại bằng cách tạo ra cực cùng tên (cực Bắc N) để đẩy nam châm ra xa."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Cực Nam (S) để hút nam châm lại gần nhanh hơn.",
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
  "9|topic|G9-CH4-TP1|12": {
    "stem": "Khi rút cực Bắc (N) của thanh nam châm ra xa đầu A của cuộn dây dẫn kín, đầu A của cuộn dây sẽ trở thành từ cực gì?.",
    "statements": [
      {
        "text": "Cực Nam (S) để tác dụng lực HÚT thanh nam châm lại (chống lại sự rời xa).",
        "is_correct": true,
        "explanation": "Khi nam châm lùi ra xa (từ thông giảm), cuộn dây chống lại sự rời xa bằng cách tạo ra cực khác tên (cực Nam S) để hút nam châm lại."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Cực Bắc (N) để đẩy nam châm.",
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
  "9|topic|G9-CH4-TP1|14": {
    "stem": "Nếu ta di chuyển thanh nam châm lại gần cuộn dây với tốc độ CÀNG NHANH thì kim điện kế sẽ lệch như thế nào so với khi di chuyển chậm?.",
    "statements": [
      {
        "text": "Lệch một góc lớn hơn nhiều (dòng điện cảm ứng có cường độ lớn hơn).",
        "is_correct": true,
        "explanation": "Tốc độ biến thiên từ thông càng nhanh thì suất điện động cảm ứng và dòng điện cảm ứng sinh ra càng lớn."
      },
      {
        "text": "Để đổi từ km/h sang m/s, ta nhân giá trị tốc độ với 3,6.",
        "is_correct": false,
        "explanation": "Sai, muốn đổi từ km/h sang m/s ta phải chia cho 3,6 (ví dụ: 36 km/h = 10 m/s)."
      },
      {
        "text": "Lệch một góc nhỏ hơn.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Góc lệch không thay đổi.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "9|topic|G9-CH4-TP1|16": {
    "stem": "Một ống dây dẫn bằng đồng đặt thẳng đứng. Thả một thanh nam châm rơi tự do xuyên dọc qua lòng ống dây đồng. So sánh gia tốc rơi $a$ của thanh nam châm với gia tốc trọng trường $g$.",
    "statements": [
      {
        "text": "a < g (rơi chậm hơn rơi tự do vì luôn bị lực từ của dòng điện cảm ứng cản trở chuyển động).",
        "is_correct": true,
        "explanation": "Theo định luật Lenz, dòng điện cảm ứng xuất hiện trong thành ống đồng luôn tác dụng lực từ hướng lên chống lại sự rơi của nam châm nên a < g (hiệu ứng hãm điện từ)."
      },
      {
        "text": "Đơn vị đo chuẩn của tốc độ trong hệ SI là mét trên giây (m/s).",
        "is_correct": true,
        "explanation": "Đúng, 1 m/s = 3,6 km/h."
      },
      {
        "text": "a > g (rơi nhanh hơn rơi tự do).",
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
  "9|topic|G9-CH4-TP2|11": {
    "stem": "Khi nói \"Hiệu điện thế của mạng điện sinh hoạt gia đình là 220 V\", con số 220 V này có ý nghĩa là.",
    "statements": [
      {
        "text": "Hiệu điện thế hiệu dụng là 220 V (hiệu điện thế cực đại là U₀ = 220√2 ≈ 311 V).",
        "is_correct": true,
        "explanation": "Con số 220 V ghi trên mạng điện là giá trị hiệu dụng. Điện áp đỉnh cực đại lên tới 220 × 1,414 ≈ 311 V."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Hiệu điện thế cực đại là 220 V.",
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
  "9|topic|G9-CH4-TP2|12": {
    "stem": "Tại sao dòng điện xoay chiều chạy qua dây tóc bóng đèn đổi chiều 100 lần trong 1 giây mà mắt ta vẫn nhìn thấy bóng đèn sáng liên tục không chớp nháy?.",
    "statements": [
      {
        "text": "Do hiện tượng lưu ảnh trên màng lưới của mắt người (khoảng 1/10 giây) và quán tính nhiệt của dây tóc bóng đèn giữ nóng.",
        "is_correct": true,
        "explanation": "Tần số đổi chiều quá nhanh (100 lần/s) vượt xa ngưỡng phân giải thời gian của mắt (khoảng 10-24 hình/s) kết hợp quán tính nhiệt dây tóc."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "Vì dây tóc không bao giờ nguội.",
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
  "9|topic|G9-CH4-TP2|14": {
    "stem": "Công thức tính tần số $f$ của máy phát điện xoay chiều có $p$ cặp cực và roto quay với tốc độ $n$ vòng/phút là.",
    "statements": [
      {
        "text": "f = (n · p) / 60.",
        "is_correct": true,
        "explanation": "Khi n tính theo vòng/phút thì số vòng/giây là n/60 ⇒ f = (n · p) / 60."
      },
      {
        "text": "Để đổi từ km/h sang m/s, ta nhân giá trị tốc độ với 3,6.",
        "is_correct": false,
        "explanation": "Sai, muốn đổi từ km/h sang m/s ta phải chia cho 3,6 (ví dụ: 36 km/h = 10 m/s)."
      },
      {
        "text": "f = n · p.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "f = 60 / (n · p).",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "9|topic|G9-CH4-TP2|16": {
    "stem": "Ưu điểm nổi bật nhất của dòng điện xoay chiều so với dòng điện một chiều trong hệ thống năng lượng quốc gia.",
    "statements": [
      {
        "text": "Có thể dễ dàng tăng áp và hạ áp bằng máy biến áp, giúp truyền tải điện năng đi xa với hiệu suất cao và chi phí thấp.",
        "is_correct": true,
        "explanation": "Dòng điện xoay chiều tương thích tuyệt vời với máy biến áp, cho phép nâng lên điện áp hàng trăm kilôvôn để truyền tải đi xa."
      },
      {
        "text": "Theo định luật bảo toàn năng lượng, năng lượng không tự sinh ra và không tự mất đi, chỉ chuyển hóa từ dạng này sang dạng khác.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý bảo toàn và chuyển hóa năng lượng."
      },
      {
        "text": "Dòng điện xoay chiều không giật.",
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
  "9|topic|G9-CH4-TP3|11": {
    "stem": "Nếu tăng hiệu điện thế ở hai đầu đường dây tải điện lên gấp 10 lần thì công suất hao phí do tỏa nhiệt trên đường dây sẽ.",
    "statements": [
      {
        "text": "Giảm đi 100 lần (10² lần).",
        "is_correct": true,
        "explanation": "P_hp tỉ lệ nghịch với U². Khi U tăng 10 lần thì P_hp giảm đi 10² = 100 lần."
      },
      {
        "text": "Theo định luật bảo toàn năng lượng, năng lượng không tự sinh ra và không tự mất đi, chỉ chuyển hóa từ dạng này sang dạng khác.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý bảo toàn và chuyển hóa năng lượng."
      },
      {
        "text": "Giảm đi 10 lần.",
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
  "9|topic|G9-CH4-TP3|13": {
    "stem": "Trong một máy biến áp lý tưởng, nếu cuộn thứ cấp có số vòng dây gấp 4 lần cuộn sơ cấp ($N_2 = 4N_1$) thì cường độ dòng điện hiệu dụng $I_2$ ở cuộn thứ cấp so với dòng điện $I_1$ ở cuộn sơ cấp sẽ.",
    "statements": [
      {
        "text": "Giảm đi 4 lần (I₂ = I₁ / 4).",
        "is_correct": true,
        "explanation": "Máy biến áp lý tưởng bảo toàn công suất: P₁ = P₂ ⇒ U₁ · I₁ = U₂ · I₂ ⇒ I₂ / I₁ = U₁ / U₂ = N₁ / N₂ = 1/4 ⇒ I₂ = I₁ / 4."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "Tăng lên gấp 4 lần.",
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
  "9|topic|G9-CH4-TP3|15": {
    "stem": "Lõi thép của máy biến áp được cấu tạo bằng nhiều lá thép mỏng ghép cách điện với nhau thay vì một khối thép đặc đúc liền nhằm mục đích gì?.",
    "statements": [
      {
        "text": "Để triệt tiêu dòng điện xoáy Foucault chạy quẩn trong lõi thép, giảm thiểu hao phí do tỏa nhiệt làm nóng máy biến áp.",
        "is_correct": true,
        "explanation": "Ghép các lá thép silic cách điện chia nhỏ đường dẫn của dòng xoáy Foucault, triệt tiêu hao phí nhiệt trong lõi thép."
      },
      {
        "text": "Ampe kế được mắc nối tiếp với thiết bị điện cần đo cường độ dòng điện.",
        "is_correct": true,
        "explanation": "Đúng quy tắc sử dụng ampe kế đo cường độ dòng điện trong mạch."
      },
      {
        "text": "Để máy biến áp nhẹ hơn.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Để dễ uốn cong.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "9|topic|G9-CH4-TP3|18": {
    "stem": "Một máy biến áp có cuộn sơ cấp gồm $N_1 = 400\\,\\text{vòng}$ và cuộn thứ cấp gồm $N_2 = 10\\,000\\,\\text{vòng}$. Đặt vào hai đầu cuộn sơ cấp hiệu điện thế xoay chiều $U_1 = 200\\,\\text{V}$. Hiệu điện thế thu được ở hai đầu cuộn thứ cấp là.",
    "statements": [
      {
        "text": "5000 V.",
        "is_correct": true,
        "explanation": "U₂ = U₁ · (N₂ / N₁) = 200 × (10 000 / 400) = 200 × 25 = 5000 V = 5 kV."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "50 000 V.",
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

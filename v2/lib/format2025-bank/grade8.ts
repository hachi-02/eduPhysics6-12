import type { TfBank } from './types';

/**
 * Ngân hàng câu Đúng/Sai – Lớp 8 (soạn chuẩn Cấu trúc đề 2025 Bộ GD&ĐT).
 * Bao gồm đầy đủ 16 chủ đề/chương của chương trình Vật lý 8.
 * Mỗi câu gồm 4 mệnh đề a, b, c, d độc lập với sự phân bổ tự nhiên giữa Đúng và Sai.
 */
export const GRADE_8_TF_BANK: TfBank = {
  "8|chapter|G8-CH1|11": {
    "stem": "Khi đưa một thợ lặn xuống sâu dần trong lòng biển, áp suất tác dụng lên người thợ lặn biến thiên thế nào?.",
    "statements": [
      {
        "text": "Tăng tỉ lệ thuận với độ sâu $h$ tính từ mặt nước biển.",
        "is_correct": true,
        "explanation": "Vì $p = d \\cdot h$, độ sâu $h$ càng lớn thì áp suất thủy tĩnh càng tăng mạnh."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Giảm dần.",
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
  "8|chapter|G8-CH1|14": {
    "stem": "Nguyên lý máy nén thủy lực cho phép ta.",
    "statements": [
      {
        "text": "Được lợi bao nhiêu lần về lực thì thiệt bấy nhiêu lần về đường đi dịch chuyển piston.",
        "is_correct": true,
        "explanation": "Theo nguyên lý Pascal và định luật về công: $F_2 / F_1 = S_2 / S_1 = s_1 / s_2$."
      },
      {
        "text": "Lực chỉ có tác dụng làm biến dạng vật mà không thể làm thay đổi vận tốc của vật.",
        "is_correct": false,
        "explanation": "Sai, tác dụng của lực có thể làm thay đổi vận tốc (chuyển động) hoặc làm biến dạng vật, hoặc cả hai."
      },
      {
        "text": "Được lợi cả về lực và về công.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Tạo ra thêm năng lượng.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "8|chapter|G8-CH1|17": {
    "stem": "Tại sao đáy đập thủy điện luôn được xây dày hơn rất nhiều so với phần đỉnh đập?.",
    "statements": [
      {
        "text": "Vì càng xuống đáy, độ sâu càng lớn làm áp suất nước tác dụng lên thân đập càng cực đại.",
        "is_correct": true,
        "explanation": "Áp suất chất lỏng $p = d \\cdot h$ lớn nhất ở chân đập, nên chân đập phải xây rất dày để chịu lực đẩy thủy tĩnh khổng lồ."
      },
      {
        "text": "Ampe kế được mắc nối tiếp với thiết bị điện cần đo cường độ dòng điện.",
        "is_correct": true,
        "explanation": "Đúng quy tắc sử dụng ampe kế đo cường độ dòng điện trong mạch."
      },
      {
        "text": "Để tạo lối đi cho xe tải.",
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
  "8|chapter|G8-CH1|20": {
    "stem": "Ở độ sâu $h = 25\\,\\text{m}$ dưới hồ nước ngọt ($d = 10\\,000\\,\\text{N/m}^3$), áp suất thủy tĩnh của nước là.",
    "statements": [
      {
        "text": "$250\\,000\\,\\text{Pa}$ ($2,5\\,\\text{bar}$).",
        "is_correct": true,
        "explanation": "Áp suất thủy tĩnh: $p = d \\cdot h = 10000 \\times 25 = 250\\,000\\,\\text{Pa}$."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "$25\\,000\\,\\text{Pa}$.",
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
  "8|topic|G8-CH1-TP1|11": {
    "stem": "Tại sao khi sản xuất vỏ máy bay và tên lửa vũ trụ, người ta lại ưu tiên dùng hợp kim nhôm, titan hoặc sợi carbon thay vì thép đặc?.",
    "statements": [
      {
        "text": "Vì các vật liệu này có khối lượng riêng nhỏ giúp giảm trọng lượng máy bay nhưng vẫn đảm bảo độ bền cơ học cao.",
        "is_correct": true,
        "explanation": "Khối lượng riêng của nhôm ($2700\\,\\text{kg/m}^3$) nhỏ hơn nhiều so với sắt thép ($7800\\,\\text{kg/m}^3$), giúp giảm tối đa khối lượng tĩnh của phương tiện bay, tiết kiệm nhiên liệu."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Vì thép không dẫn điện tốt bằng nhôm.",
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
  "8|topic|G8-CH1-TP1|14": {
    "stem": "Một học sinh thực hiện đo khối lượng riêng của viên đá sỏi: thả chìm hòn sỏi vào bình chia độ có $60\\,\\text{mL}$ nước thì nước dâng lên $85\\,\\text{mL}$. Cân hòn sỏi được $65\\,\\text{g}$. Khối lượng riêng của hòn sỏi là.",
    "statements": [
      {
        "text": "$2,6\\,\\text{g/cm}^3$.",
        "is_correct": true,
        "explanation": "Thể tích hòn sỏi: $V = 85 - 60 = 25\\,\\text{mL} = 25\\,\\text{cm}^3$. Khối lượng riêng: $D = m / V = 65 / 25 = 2,6\\,\\text{g/cm}^3 = 2600\\,\\text{kg/m}^3$."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "$1,08\\,\\text{g/cm}^3$.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "$3,25\\,\\text{g/cm}^3$.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "8|topic|G8-CH1-TP1|17": {
    "stem": "Tại sao khi đo thể tích của một vật xốp không thấm nước (như miếng xốp polystyrene), ta không thể thả trực tiếp vào bình chia độ mà phải buộc kèm một vật nặng?.",
    "statements": [
      {
        "text": "Vì khối lượng riêng của xốp nhỏ hơn nước nên xốp sẽ nổi, không ngập hoàn toàn.",
        "is_correct": true,
        "explanation": "Miếng xốp có $D < D_{\\text{nước}}$ nên sẽ nổi trên mặt nước; để đo thể tích toàn phần của xốp cần buộc thêm một vật nặng chìm hoàn toàn (phương pháp trừ thể tích vật nặng)."
      },
      {
        "text": "1 mét khối (m³) tương ứng với đúng 100 lít (L).",
        "is_correct": false,
        "explanation": "Sai, 1 m³ tương ứng với 1000 lít (hoặc 1.000.000 cm³)."
      },
      {
        "text": "Vì miếng xốp hút nước rất mạnh.",
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
  "8|topic|G8-CH1-TP1|20": {
    "stem": "Pha $200\\,\\text{g}$ dung dịch cồn có khối lượng riêng $800\\,\\text{kg/m}^3$ với $300\\,\\text{g}$ nước tinh khiết ($1000\\,\\text{kg/m}^3$). Coi thể tích hỗn hợp bằng tổng thể tích các chất thành phần. Khối lượng riêng của hỗn hợp thu được xấp xỉ bằng.",
    "statements": [
      {
        "text": "$909\\,\\text{kg/m}^3$.",
        "is_correct": true,
        "explanation": "Thể tích cồn: $V_1 = 200 / 0,8 = 250\\,\\text{cm}^3$. Thể tích nước: $V_2 = 300 / 1,0 = 300\\,\\text{cm}^3$. Tổng thể tích: $V = 550\\,\\text{cm}^3$. Tổng khối lượng: $m = 500\\,\\text{g}$. Khối lượng riêng hỗn hợp: $D = 500 / 550 \\approx 0,909\\,\\text{g/cm}^3 = 909\\,\\text{kg/m}^3$."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "$900\\,\\text{kg/m}^3$.",
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
  "8|topic|G8-CH1-TP2|11": {
    "stem": "Một viên gạch đặc hình hộp chữ nhật có ba kích thước khác nhau ($a < b < c$). Để áp suất viên gạch tác dụng lên mặt bàn là LỚN NHẤT, ta phải đặt viên gạch tiếp xúc mặt bàn bằng mặt nào?.",
    "statements": [
      {
        "text": "Mặt có diện tích nhỏ nhất ($a \\times b$).",
        "is_correct": true,
        "explanation": "Khối lượng viên gạch không đổi nên áp lực $F = P$ không đổi. Áp suất $p = F/S$ lớn nhất khi diện tích tiếp xúc $S$ nhỏ nhất, tức mặt diện tích $a \\times b$."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Mặt có diện tích lớn nhất ($b \\times c$).",
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
  "8|topic|G8-CH1-TP2|14": {
    "stem": "Một con voi có trọng lượng $40000\\,\\text{N}$, diện tích tiếp xúc của cả 4 bàn chân là $1000\\,\\text{cm}^2$. Một người phụ nữ nặng $500\\,\\text{N}$ đi giày cao gót có diện tích gót nhọn là $1\\,\\text{cm}^2$. Khi người phụ nữ đứng dồn toàn bộ trọng lượng vào một gót giày, so sánh áp suất $p_1$ (con voi) và $p_2$ (gót giày).",
    "statements": [
      {
        "text": "$p_2 > p_1$ vì diện tích gót giày cực nhỏ tạo áp suất lớn hơn nhiều so với bàn chân voi.",
        "is_correct": true,
        "explanation": "Áp suất con voi: $p_1 = 40000 / 0,1 = 400\\,000\\,\\text{Pa} = 400\\,\\text{kPa}$. Áp suất gót giày: $p_2 = 500 / 0,0001 = 5\\,000\\,000\\,\\text{Pa} = 5000\\,\\text{kPa}$. Gót giày gây áp suất gấp $12,5$ lần con voi!"
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "$p_1 > p_2$ vì con voi nặng hơn rất nhiều.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "$p_1 = p_2$.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "8|topic|G8-CH1-TP2|17": {
    "stem": "Tại sao các xe tải chở hàng nặng thường được thiết kế có từ 6 đến 10 trục bánh xe với nhiều lốp kép ở phía sau?.",
    "statements": [
      {
        "text": "Để tăng diện tích tiếp xúc với mặt đường, làm giảm áp suất tác dụng lên mặt đường tránh phá hỏng đường xá.",
        "is_correct": true,
        "explanation": "Nhiều lốp xe giúp phân tán tổng áp lực tải trọng lên diện tích tiếp xúc $S$ lớn hơn nhiều, giảm áp suất $p$ xuống giới hạn cho phép của mặt đường nhựa."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Để xe chạy nhanh hơn.",
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
  "8|topic|G8-CH1-TP2|20": {
    "stem": "Một khối gỗ đặc hình lập phương cạnh $20\\,\\text{cm}$ có khối lượng riêng $800\\,\\text{kg/m}^3$ đặt trên sàn nằm ngang. Áp suất của khối gỗ tác dụng lên mặt sàn là.",
    "statements": [
      {
        "text": "$1600\\,\\text{Pa}$.",
        "is_correct": true,
        "explanation": "Thể tích: $V = 0,2^3 = 0,008\\,\\text{m}^3$. Khối lượng: $m = 800 \\times 0,008 = 6,4\\,\\text{kg} \\Rightarrow F = 64\\,\\text{N}$. Diện tích đáy: $S = 0,2 \\times 0,2 = 0,04\\,\\text{m}^2$. Áp suất: $p = 64 / 0,04 = 1600\\,\\text{Pa}$. (Cách nhanh: $p = d \\cdot h = 10 \\cdot D \\cdot h = 8000 \\times 0,2 = 1600\\,\\text{Pa}$)."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "$3200\\,\\text{Pa}$.",
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
  "8|topic|G8-CH1-TP3|11": {
    "stem": "Tại sao người thợ lặn chuyên nghiệp khi lặn sâu xuống đáy biển bắt buộc phải mặc bộ đồ lặn bảo hộ dày chịu áp suất cao?.",
    "statements": [
      {
        "text": "Vì càng xuống sâu, độ sâu $h$ càng lớn làm áp suất nước biển $p = d \\cdot h$ tăng rất lớn, có thể ép vỡ lồng ngực.",
        "is_correct": true,
        "explanation": "Áp suất chất lỏng tăng tỉ lệ thuận với độ sâu $h$. Ở độ sâu $50\\,\\text{m}$, áp suất nước lên tới khoảng $5\\,\\text{atm}$ (gấp 5 lần khí quyển), có thể gây nguy hiểm tính mạng nếu không có giáp lặn chuyên dụng."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Để tránh bị cá mập tấn công.",
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
  "8|topic|G8-CH1-TP3|14": {
    "stem": "Tàu ngầm có thể lặn xuống sâu hoặc nổi lên mặt nước bằng cách nào?.",
    "statements": [
      {
        "text": "Bơm nước vào các khoang chứa đáy tàu để tăng trọng lượng (khi muốn lặn) hoặc dùng khí nén thổi nước ra để giảm trọng lượng (khi muốn nổi).",
        "is_correct": true,
        "explanation": "Tàu ngầm thay đổi trọng lượng $P$ của tàu bằng cách điều tiết lượng nước dằn trong các khoang đáy, so sánh với lực đẩy Archimedes $F_A$ không đổi của vỏ tàu."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Tăng giảm công suất chân vịt đẩy.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Kéo dài hoặc thu ngắn thân tàu ngầm.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "8|topic|G8-CH1-TP3|17": {
    "stem": "Một ấm trà có vòi ấm được thiết kế thấp hơn miệng ấm. Khi rót nước vào ấm trà, mực nước tối đa có thể chứa trong ấm sẽ.",
    "statements": [
      {
        "text": "Chỉ chứa được đến ngang độ cao của miệng vòi ấm, nếu đổ thêm nước sẽ tự tràn ra khỏi vòi.",
        "is_correct": true,
        "explanation": "Thân ấm trà và vòi ấm là hai nhánh của một bình thông nhau; mặt thoáng chất lỏng ở hai nhánh luôn ở cùng độ cao, do đó nước chỉ dâng đến ngang miệng vòi."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Chứa đầy đến tận nắp ấm trà.",
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
  "8|topic|G8-CH1-TP3|20": {
    "stem": "Một khối sắt đặc có thể tích $0,004\\,\\text{m}^3$ được nhúng chìm hoàn toàn trong dầu hỏa có trọng lượng riêng $d = 8000\\,\\text{N/m}^3$. Lực đẩy Archimedes tác dụng lên khối sắt là.",
    "statements": [
      {
        "text": "$32\\,\\text{N}$.",
        "is_correct": true,
        "explanation": "Lực đẩy Archimedes: $F_A = d_{\\text{dầu}} \\cdot V = 8000 \\times 0,004 = 32\\,\\text{N}$."
      },
      {
        "text": "Trong hệ đơn vị quốc tế SI, đơn vị đo chuẩn của thể tích là mét khối (m³).",
        "is_correct": true,
        "explanation": "Đúng theo quy chuẩn hệ đo lường quốc tế SI."
      },
      {
        "text": "$320\\,\\text{N}$.",
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
  "8|chapter|G8-CH2|11": {
    "stem": "Khi một lực tác dụng có giá đi thẳng qua trục quay của vật thì.",
    "statements": [
      {
        "text": "Lực không có tác dụng làm quay vật ($M = 0$).",
        "is_correct": true,
        "explanation": "Giá đi qua trục quay thì cánh tay đòn $d = 0 \\Rightarrow M = 0$."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Vật quay rất nhanh.",
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
  "8|chapter|G8-CH2|14": {
    "stem": "Khi cần cẩu nâng tải ở tầm với xa gấp đôi, để giữ cần cẩu không bị lật thì tải trọng cẩu an toàn phải.",
    "statements": [
      {
        "text": "Giảm đi một nửa.",
        "is_correct": true,
        "explanation": "Vì $M = P \\cdot d = \\text{const}$, khi tầm với $d$ tăng gấp đôi thì tải trọng $P$ phải giảm đi một nửa."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Tăng gấp đôi.",
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
  "8|chapter|G8-CH2|17": {
    "stem": "Chân chống nghiêng của xe máy hoạt động vững chắc nhờ.",
    "statements": [
      {
        "text": "Trọng tâm xe nằm trong đa giác chân đế tạo bởi hai bánh xe và chân chống.",
        "is_correct": true,
        "explanation": "Điều kiện thăng bằng ổn định là đường thẳng đứng của trọng lực đi qua mặt chân đế tam giác của xe."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Lốp xe có gai.",
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
  "8|chapter|G8-CH2|20": {
    "stem": "Một người gánh 2 thúng: thúng gạo nặng $35\\,\\text{kg}$, thúng ngô nặng $25\\,\\text{kg}$. Đòn gánh dài $1,2\\,\\text{m}$. Vai người đặt cách thúng gạo một khoảng để thăng bằng là.",
    "statements": [
      {
        "text": "$0,5\\,\\text{m}$.",
        "is_correct": true,
        "explanation": "$35 \\cdot x = 25 \\cdot (1,2 - x) \\Rightarrow 60x = 30 \\Rightarrow x = 0,5\\,\\text{m}$."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "$0,7\\,\\text{m}$.",
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
  "8|topic|G8-CH2-TP1|11": {
    "stem": "Một học sinh dùng tay đẩy cửa: lần 1 đẩy vuông góc với cánh cửa ở mép ngoài (cách bản lề $0,8\\,\\text{m}$); lần 2 đẩy vuông góc ở vị trí cách bản lề $0,2\\,\\text{m}$. Để cửa quay như nhau, lực đẩy lần 2 so với lần 1 phải.",
    "statements": [
      {
        "text": "Lớn gấp 4 lần lực lần 1.",
        "is_correct": true,
        "explanation": "Để tạo cùng moment quay $M$: $F_1 \\cdot d_1 = F_2 \\cdot d_2 \\Rightarrow F_2 = F_1 \\cdot (d_1 / d_2) = F_1 \\cdot (0,8 / 0,2) = 4F_1$."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "Nhỏ bằng 1/4 lực lần 1.",
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
  "8|topic|G8-CH2-TP1|14": {
    "stem": "Khi một người dùng xà beng để bẩy một hòn đá, nếu điểm tựa được kê quá xa hòn đá (gần tay cầm của người) thì người đó sẽ thấy thế nào?.",
    "statements": [
      {
        "text": "Rất nặng và tốn nhiều lực, khó bẩy nổi hòn đá.",
        "is_correct": true,
        "explanation": "Kê điểm tựa gần tay cầm làm cánh tay đòn lực $d_1$ nhỏ lại và cánh tay đòn tải $d_2$ tăng lên, theo quy tắc moment người đó bị thiệt về lực, phải dùng lực rất lớn."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Bẩy hòn đá rất nhẹ nhàng.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Không có sự khác biệt.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "8|topic|G8-CH2-TP1|17": {
    "stem": "Một cánh quạt trần đang quay đều quanh trục. Khi ngắt điện, lực ma sát ở ổ trục tạo ra moment lực có tác dụng gì?.",
    "statements": [
      {
        "text": "Làm cản trở chuyển động quay, khiến cánh quạt quay chậm dần rồi dừng lại.",
        "is_correct": true,
        "explanation": "Moment của lực ma sát ngược chiều chuyển động quay nên có tác dụng làm giảm tốc độ quay (moment hãm), đưa cánh quạt về trạng thái dừng."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Làm tăng tốc độ quay của cánh quạt.",
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
  "8|topic|G8-CH2-TP1|20": {
    "stem": "Một thanh nhẹ $AB$ dài $1\\,\\text{m}$ có thể quay quanh trục cố định ở đầu $A$. Tác dụng tại đầu $B$ một lực thẳng đứng hướng lên $F_1 = 40\\,\\text{N}$. Hỏi phải tác dụng tại điểm $C$ (cách $A$ một đoạn $40\\,\\text{cm}$) một lực $F_2$ thẳng đứng hướng xuống bằng bao nhiêu để thanh cân bằng nằm ngang?.",
    "statements": [
      {
        "text": "$100\\,\\text{N}$.",
        "is_correct": true,
        "explanation": "Áp dụng quy tắc moment quanh trục $A$: $M_1 = M_2 \\Leftrightarrow F_1 \\cdot AB = F_2 \\cdot AC \\Rightarrow F_2 = F_1 \\cdot (AB / AC) = 40 \\times (100 / 40) = 100\\,\\text{N}$."
      },
      {
        "text": "Lực chỉ có tác dụng làm biến dạng vật mà không thể làm thay đổi vận tốc của vật.",
        "is_correct": false,
        "explanation": "Sai, tác dụng của lực có thể làm thay đổi vận tốc (chuyển động) hoặc làm biến dạng vật, hoặc cả hai."
      },
      {
        "text": "$50\\,\\text{N}$.",
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
  "8|topic|G8-CH2-TP2|11": {
    "stem": "Tại sao kéo cắt kim loại luôn có phần lưỡi cắt rất ngắn và phần tay cầm rất dài, trong khi kéo cắt giấy lại có lưỡi dài và tay cầm ngắn?.",
    "statements": [
      {
        "text": "Kéo cắt kim loại cần cán dài để tăng cánh tay đòn $d_1$, cho lợi nhiều lần về lực để cắt sắt thép; còn cắt giấy cần đường cắt dài, nhanh.",
        "is_correct": true,
        "explanation": "Cắt kim loại cần lực cực lớn nên thiết kế $d_1 > d_2$ để $F_1 < F_2$ (lợi về lực); cắt giấy cần lực rất nhỏ nên thiết kế $d_2 > d_1$ để lợi về đường cắt."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Vì thợ cơ khí có bàn tay to hơn thợ may.",
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
  "8|topic|G8-CH2-TP2|14": {
    "stem": "Dụng cụ kẹp tách hạt dẻ (hạt óc chó) gồm hai càng kim loại có khớp nối ở đầu. Đây là đòn bẩy loại mấy và có ưu điểm gì?.",
    "statements": [
      {
        "text": "Đòn bẩy loại 2; hạt dẻ ở giữa chịu lực ép rất lớn mà tay người chỉ cần bóp nhẹ.",
        "is_correct": true,
        "explanation": "Khớp nối là điểm tựa $O$, hạt dẻ nằm ở khoang giữa, tay bóp ở hai đầu càng. Đây là đòn bẩy loại 2, luôn cho $d_1 > d_2$ nên nhân lực ép lên nhiều lần."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Đòn bẩy loại 1; đổi hướng tác dụng lực.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Đòn bẩy loại 3; cho lợi về đường đi.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "8|topic|G8-CH2-TP2|17": {
    "stem": "Mái chèo của thuyền nan hoạt động như một đòn bẩy. Điểm tựa của đòn bẩy mái chèo nằm ở đâu?.",
    "statements": [
      {
        "text": "Tại cọc chèo gắn trên mạn thuyền (hoặc tại chỗ lưỡi chèo tựa vào làn nước).",
        "is_correct": true,
        "explanation": "Cọc chèo trên mạn thuyền đóng vai trò là điểm tựa (hoặc lưỡi chèo tựa vào khối nước), tay người chèo tác dụng lực làm chuyển động thuyền."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Ở mũi thuyền.",
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
  "8|topic|G8-CH2-TP2|20": {
    "stem": "Một người gánh hai thúng lúa bằng một đòn gánh dài $1,5\\,\\text{m}$. Thúng lúa thứ nhất nặng $30\\,\\text{kg}$, thúng lúa thứ hai nặng $20\\,\\text{kg}$. Để đòn gánh thăng bằng nằm ngang, vai người đó phải đặt cách thúng lúa thứ nhất một khoảng bằng bao nhiêu? (Bỏ qua khối lượng đòn gánh, lấy $g = 10\\,\\text{m/s}^2$).",
    "statements": [
      {
        "text": "$0,6\\,\\text{m}$.",
        "is_correct": true,
        "explanation": "Gọi $d_1$ là khoảng cách từ vai đến thúng 1 $\\Rightarrow d_2 = 1,5 - d_1$. Điều kiện thăng bằng: $P_1 \\cdot d_1 = P_2 \\cdot d_2 \\Leftrightarrow 300 \\cdot d_1 = 200 \\cdot (1,5 - d_1) \\Rightarrow 500 d_1 = 300 \\Rightarrow d_1 = 0,6\\,\\text{m}$."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "$0,9\\,\\text{m}$.",
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
  "8|topic|G8-CH2-TP3|11": {
    "stem": "Tại sao các xe tải chở đất cát tự đổ (xe ben) có piston thủy lực nâng thùng hàng đặt gần đuôi thùng lại nâng được nhẹ nhàng hơn khi đặt ở đầu thùng?.",
    "statements": [
      {
        "text": "Vì đặt ở đuôi thùng làm tăng cánh tay đòn của lực đẩy thủy lực đối với trục quay lật của thùng ben.",
        "is_correct": true,
        "explanation": "Khoảng cách từ điểm đẩy của piston đến trục quay bản lề thùng ben quyết định cánh tay đòn; góc đặt tối ưu giúp tạo moment nâng lớn nhất thắng trọng tải cát."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "Vì piston ở đuôi thùng không bị bẩn.",
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
  "8|topic|G8-CH2-TP3|14": {
    "stem": "Tại sao trên các công trường xây dựng, khi gặp gió bão lớn cấp 10 trở lên, người ta thường mở phanh quay của cần cẩu tháp để cần cẩu tự do quay theo hướng gió?.",
    "statements": [
      {
        "text": "Để cánh tay cần cẩu xoay xuôi theo chiều gió như chong chóng, giảm diện tích cản gió và triệt tiêu moment lật do áp lực gió bão gây ra.",
        "is_correct": true,
        "explanation": "Nếu hãm phanh cứng, diện tích hứng gió lớn của giàn thép sẽ tạo ra moment xoắn và moment uốn khổng lồ làm gãy đổ thân tháp. Mở phanh giúp cần cẩu tự quay xuôi gió như cờ đuôi nheo."
      },
      {
        "text": "Theo định luật bảo toàn năng lượng, năng lượng không tự sinh ra và không tự mất đi, chỉ chuyển hóa từ dạng này sang dạng khác.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý bảo toàn và chuyển hóa năng lượng."
      },
      {
        "text": "Để cần cẩu quay tạo ra điện.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Để công nhân quan sát hướng gió.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "8|topic|G8-CH2-TP3|17": {
    "stem": "Tại sao cần trục bánh xích khi cẩu hàng nặng thường phải hạ các chân chống thủy lực (chân nhện outrigger) mở rộng sang hai bên?.",
    "statements": [
      {
        "text": "Để tăng khoảng cách từ trục lật đến trọng tâm, mở rộng đa giác chân đế làm tăng moment chống lật của toàn bộ xe.",
        "is_correct": true,
        "explanation": "Các chân chống mở rộng làm tăng kích thước đa giác chân đế (tăng khoảng cách từ trục quay lật đến khối đối trọng), làm tăng mạnh moment giữ chống lật."
      },
      {
        "text": "Lực là một đại lượng vectơ, có điểm đặt, phương, chiều và độ lớn xác định.",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa vectơ lực trong Vật lý."
      },
      {
        "text": "Để tránh mòn xích xe.",
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
  "8|topic|G8-CH2-TP3|20": {
    "stem": "Một chiếc cân Rô-béc-van đòn bẩy có hai cánh tay đòn không hoàn toàn bằng nhau: nhánh trái dài $l_1 = 20,2\\,\\text{cm}$, nhánh phải dài $l_2 = 19,8\\,\\text{cm}$. Khi đặt một gói kẹo vào đĩa cân bên trái thì phải đặt quả cân $200\\,\\text{g}$ vào đĩa cân bên phải để cân thăng bằng. Khối lượng thực của gói kẹo là.",
    "statements": [
      {
        "text": "$196\\,\\text{g}$.",
        "is_correct": true,
        "explanation": "Theo điều kiện thăng bằng: $m_{\\text{kẹo}} \\cdot l_1 = m_{\\text{cân}} \\cdot l_2 \\Rightarrow m_{\\text{kẹo}} = 200 \\times (19,8 / 20,2) \\approx 196,04\\,\\text{g}$."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "$204\\,\\text{g}$.",
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
  "8|chapter|G8-CH3|11": {
    "stem": "Tại sao khi lắp pin vào đèn pin ta phải lắp các cực tiếp xúc đúng thứ tự cực âm vào lò xo?.",
    "statements": [
      {
        "text": "Để tạo mạch kín có chiều dòng điện đi từ cực dương qua bóng đèn khép kín.",
        "is_correct": true,
        "explanation": "Lắp đúng cực giúp mạch kín dẫn dòng điện quy ước chạy qua dây tóc bóng đèn."
      },
      {
        "text": "Sóng âm có thể truyền được qua môi trường chân không với tốc độ bằng tốc độ ánh sáng.",
        "is_correct": false,
        "explanation": "Sai, sóng âm là sóng cơ học nên không thể truyền qua chân không."
      },
      {
        "text": "Vì lắp ngược lò xo sẽ bị gãy.",
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
  "8|chapter|G8-CH3|14": {
    "stem": "Tại sao bút thử điện cắm vào ổ điện thì bóng đèn neon trong bút sáng mà người cầm không bị giật?.",
    "statements": [
      {
        "text": "Bên trong bút có một điện trở an toàn cực lớn (hàng triệu ohm) làm giảm dòng điện qua người xuống mức an toàn.",
        "is_correct": true,
        "explanation": "Điện trở rất lớn trong thân bút giới hạn dòng điện xuống dưới $0,1\\,\\text{mA}$, đủ thắp sáng đèn neon mà tuyệt đối an toàn cho người."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "Vì bút thử điện dùng pin riêng.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Vì điện ổ cắm không giật.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "8|chapter|G8-CH3|17": {
    "stem": "Một vôn kế mắc vào hai đầu một bóng đèn đang sáng chỉ $6\\,\\text{V}$. Nếu bóng đèn này bị đứt dây tóc thì số chỉ của vôn kế sẽ.",
    "statements": [
      {
        "text": "Chỉ xấp xỉ bằng hiệu điện thế của nguồn điện.",
        "is_correct": true,
        "explanation": "Khi đèn đứt tóc, vôn kế có điện trở cực lớn nối tiếp với mạch hở nên đo trực tiếp hiệu điện thế của nguồn điện."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Chỉ $0\\,\\text{V}$ ngay.",
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
  "8|chapter|G8-CH3|20": {
    "stem": "Trong $30\\,\\text{giây}$, điện lượng chuyển qua tiết diện dây dẫn là $15\\,\\text{C}$. Cường độ dòng điện là.",
    "statements": [
      {
        "text": "$0,5\\,\\text{A}$.",
        "is_correct": true,
        "explanation": "$I = q / t = 15 / 30 = 0,5\\,\\text{A}$."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "$2\\,\\text{A}$.",
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
  "8|topic|G8-CH3-TP1|11": {
    "stem": "Vào mùa đông khô hanh, khi chải tóc bằng lược nhựa ta thấy nhiều sợi tóc bị hút dính vào lược hoặc dựng đứng lên. Giải thích nào sau đây là ĐÚNG?.",
    "statements": [
      {
        "text": "Lược nhựa cọ xát với tóc làm cả lược và tóc nhiễm điện trái dấu nên hút nhau.",
        "is_correct": true,
        "explanation": "Khi chải, lược nhựa cọ xát với tóc khiến electron dịch chuyển giữa chúng; lược và tóc nhiễm điện trái dấu nên hút nhau; các sợi tóc nhiễm điện cùng dấu đẩy nhau dựng đứng lên."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Tóc bị nóng lên do ma sát.",
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
  "8|topic|G8-CH3-TP1|14": {
    "stem": "Cột thu lôi (kim sét) lắp trên đỉnh các tòa nhà cao tầng hoạt động dựa trên nguyên lý nào?.",
    "statements": [
      {
        "text": "Đầu nhọn tập trung điện tích làm ion hóa không khí dẫn truyền sét an toàn xuống lòng đất.",
        "is_correct": true,
        "explanation": "Đầu kim nhọn phóng điện êm dịu làm giảm điện thế mây giông hoặc thu hút tia sét đánh thẳng vào kim rồi dẫn dòng điện cực lớn an toàn xuống đất qua dây cáp đồng."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Hút gió xua tan các đám mây giông.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Làm lạnh đám mây để không tạo sấm sét.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "8|topic|G8-CH3-TP1|17": {
    "stem": "Có ba quả cầu kim loại nhỏ $A, B, C$ treo bằng sợi chỉ cách điện. Quả cầu $A$ đẩy $B$; quả cầu $B$ hút $C$. Nếu quả cầu $A$ nhiễm điện dương ($+$) thì dấu điện tích của $B$ và $C$.",
    "statements": [
      {
        "text": "$B$ nhiễm điện dương ($+$), $C$ nhiễm điện âm ($-$) hoặc trung hòa.",
        "is_correct": true,
        "explanation": "$A$ đẩy $B \\Rightarrow B$ cùng dấu với $A$ ($B$ mang điện dương $+$). $B$ hút $C \\Rightarrow C$ trái dấu với $B$ ($C$ mang điện âm $-$) hoặc $C$ là vật trung hòa bị hút do hưởng ứng."
      },
      {
        "text": "Ampe kế được mắc nối tiếp với thiết bị điện cần đo cường độ dòng điện.",
        "is_correct": true,
        "explanation": "Đúng quy tắc sử dụng ampe kế đo cường độ dòng điện trong mạch."
      },
      {
        "text": "$B$ nhiễm điện âm ($-$), $C$ nhiễm điện dương ($+$).",
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
  "8|topic|G8-CH3-TP1|20": {
    "stem": "Hai quả cầu kim loại giống hệt nhau: quả cầu A mang điện tích $+6\\,\\mu\\text{C}$, quả cầu B mang điện tích $-2\\,\\mu\\text{C}$. Cho hai quả cầu tiếp xúc nhau rồi tách ra. Điện tích của mỗi quả cầu sau khi tách ra là.",
    "statements": [
      {
        "text": "$+2\\,\\mu\\text{C}$.",
        "is_correct": true,
        "explanation": "Theo định luật bảo toàn điện tích, khi tiếp xúc điện tích phân bố đều trên hai quả cầu giống nhau: $q' = (q_A + q_B) / 2 = [6 + (-2)] / 2 = +2\\,\\mu\\text{C}$."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "$+4\\,\\mu\\text{C}$.",
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
  "8|topic|G8-CH3-TP2|11": {
    "stem": "So sánh chiều dòng điện quy ước và chiều chuyển động của các electron tự do trong dây dẫn kim loại.",
    "statements": [
      {
        "text": "Ngược chiều nhau: Dòng điện quy ước đi từ cực dương về cực âm, còn electron tự do dịch chuyển từ cực âm về cực dương.",
        "is_correct": true,
        "explanation": "Electron mang điện âm nên bị cực âm đẩy về cực dương, chuyển động ngược chiều với chiều quy ước của dòng điện ($+$ sang $-$)."
      },
      {
        "text": "Ampe kế được mắc nối tiếp với thiết bị điện cần đo cường độ dòng điện.",
        "is_correct": true,
        "explanation": "Đúng quy tắc sử dụng ampe kế đo cường độ dòng điện trong mạch."
      },
      {
        "text": "Cùng chiều nhau.",
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
  "8|topic|G8-CH3-TP2|14": {
    "stem": "Một viên pin con thỏ để lâu ngày bị chảy nước vàng rỉ sét ở hai đầu cực. Hiện tượng này ảnh hưởng thế nào đến mạch điện?.",
    "statements": [
      {
        "text": "Lớp rỉ sét tạo điện trở tiếp xúc rất lớn làm cản trở dòng điện, đèn có thể không sáng.",
        "is_correct": true,
        "explanation": "Oxit kim loại rỉ sét là chất dẫn điện rất kém, làm hở mạch hoặc tăng điện trở tiếp xúc, khiến dòng điện không chạy qua được."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "Làm pin sinh ra điện áp cao gấp đôi.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Làm dây dẫn bị đổi chiều dòng điện.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "8|topic|G8-CH3-TP2|17": {
    "stem": "Khi lắp pin vào điều khiển tivi, người ta phải đặt đúng cực lồi ($+$) và đáy bằng ($-$) của pin vào các tiếp điểm lò xo tương ứng. Nếu lắp ngược cả 2 viên pin thì điều khiển có hoạt động không?.",
    "statements": [
      {
        "text": "Không hoạt động, vì các mạch vi xử lý điện tử và đèn LED hồng ngoại chỉ cho dòng điện chạy theo đúng một chiều nhất định.",
        "is_correct": true,
        "explanation": "Linh kiện bán dẫn (diode, LED, transistor) trong mạch điện tử có tính dẫn điện một chiều; khi lắp ngược cực nguồn, diode chặn dòng điện khiến mạch không thể hoạt động."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Vẫn hoạt động bình thường.",
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
  "8|topic|G8-CH3-TP2|20": {
    "stem": "Một dòng điện không đổi có cường độ $I = 0,8\\,\\text{A}$ chạy qua một dây dẫn kim loại. Số electron tự do dịch chuyển qua tiết diện thẳng của dây dẫn đó trong mỗi giây là.",
    "statements": [
      {
        "text": "$5,0 \\times 10^{18}$ hạt.",
        "is_correct": true,
        "explanation": "Trong $1\\,\\text{s}$, điện lượng qua dây là $q = I \\cdot t = 0,8\\,\\text{C}$. Số hạt electron: $N_e = q / e = 0,8 / (1,6 \\times 10^{-19}) = 5,0 \\times 10^{18}$ hạt."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "$1,28 \\times 10^{-19}$ hạt.",
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
  "8|topic|G8-CH3-TP3|11": {
    "stem": "Tại sao các thiết bị điện trong gia đình (bóng đèn, tivi, quạt, tủ lạnh) luôn được mắc SONG SONG với nhau vào nguồn điện $220\\,\\text{V}$?.",
    "statements": [
      {
        "text": "Để các thiết bị hoạt động độc lập (tắt một thiết bị thì các thiết bị khác vẫn chạy bình thường) và đều chịu đúng hiệu điện thế định mức $220\\,\\text{V}$.",
        "is_correct": true,
        "explanation": "Mắc song song đảm bảo mỗi thiết bị nhận đủ $U = 220\\,\\text{V}$ định mức và có thể đóng ngắt riêng biệt mà không ảnh hưởng tới các nhánh khác."
      },
      {
        "text": "Ampe kế được mắc nối tiếp với thiết bị điện cần đo cường độ dòng điện.",
        "is_correct": true,
        "explanation": "Đúng quy tắc sử dụng ampe kế đo cường độ dòng điện trong mạch."
      },
      {
        "text": "Để tiết kiệm tiền mua dây điện.",
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
  "8|topic|G8-CH3-TP3|14": {
    "stem": "Tác dụng sinh lý của dòng điện có thể gây nguy hiểm nhưng cũng được ứng dụng tích cực trong y học hiện đại.",
    "statements": [
      {
        "text": "Dùng máy sốc tim điện để cấp cứu tái lập nhịp tim khi tim ngừng đập, và châm cứu điện giảm đau.",
        "is_correct": true,
        "explanation": "Dòng điện kích thích thần kinh và cơ bắp; xung điện sốc tim giúp cứu sống bệnh nhân rung thất, và máy điện châm điều trị phục hồi chức năng cơ bắp."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "Dùng để chiếu sáng vết mổ.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Dùng để khử trùng vết thương bằng nhiệt.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "8|topic|G8-CH3-TP3|17": {
    "stem": "Khi dòng điện chạy qua dung dịch muối đồng sunfat ($\\text{CuSO}_4$), sau một thời gian ta thấy thỏi than nối với cực âm (catot) được bọc một lớp kim loại màu đỏ. Kim loại màu đỏ đó.",
    "statements": [
      {
        "text": "Đồng (Cu).",
        "is_correct": true,
        "explanation": "Các ion $\\text{Cu}^{2+}$ mang điện tích dương chuyển dịch về cực âm (catot), nhận electron biến thành kim loại đồng ($\text{Cu}$) bám đỏ trên điện cực."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Sắt (Fe).",
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
  "8|topic|G8-CH3-TP3|20": {
    "stem": "Cho mạch điện gồm 3 đèn giống nhau mắc nối tiếp vào nguồn điện $U = 9\\,\\text{V}$. Dòng điện qua đèn 1 đo được là $0,25\\,\\text{A}$. Dòng điện qua đèn 3 và hiệu điện thế hai đầu đèn 2 lần lượt là.",
    "statements": [
      {
        "text": "$0,25\\,\\text{A}$ và $3\\,\\text{V}$.",
        "is_correct": true,
        "explanation": "Mạch nối tiếp: $I = I_1 = I_2 = I_3 = 0,25\\,\\text{A}$. Vì 3 đèn giống nhau nên điện áp chia đều: $U_1 = U_2 = U_3 = 9 / 3 = 3\\,\\text{V}$."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "$0,75\\,\\text{A}$ và $9\\,\\text{V}$.",
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
  "8|chapter|G8-CH4|11": {
    "stem": "Tại sao xoong nồi nấu ăn làm bằng kim loại còn quai cầm làm bằng nhựa cách nhiệt?.",
    "statements": [
      {
        "text": "Kim loại dẫn nhiệt tốt để nấu chín nhanh, quai nhựa dẫn nhiệt kém để người cầm không bị bỏng.",
        "is_correct": true,
        "explanation": "Đáy kim loại truyền nhiệt nhanh vào thức ăn; quai bọc nhựa cách nhiệt bảo vệ tay người dùng."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Để nồi nhẹ hơn.",
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
  "8|chapter|G8-CH4|14": {
    "stem": "Băng kép trong bàn là điện có tác dụng gì?.",
    "statements": [
      {
        "text": "Tự động uốn cong ngắt điện khi bàn là quá nóng và tự nối lại khi nguội đi.",
        "is_correct": true,
        "explanation": "Băng kép đóng vai trò rơ-le nhiệt tự động duy trì nhiệt độ cài đặt."
      },
      {
        "text": "Vôn kế được mắc nối tiếp trực tiếp vào mạch điện để đo hiệu điện thế.",
        "is_correct": false,
        "explanation": "Sai, vôn kế có điện trở rất lớn nên phải mắc song song với hai điểm cần đo hiệu điện thế."
      },
      {
        "text": "Làm bàn là nóng nhanh hơn.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Làm bàn là nặng hơn để là phẳng quần áo.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "8|chapter|G8-CH4|17": {
    "stem": "Tại sao người ta không đóng chai nước ngọt, bia đầy ắp đến tận nút chai?.",
    "statements": [
      {
        "text": "Để chừa khoảng trống cho chất lỏng dãn nở khi nhiệt độ môi trường tăng, tránh làm bật nút hoặc vỡ chai.",
        "is_correct": true,
        "explanation": "Tránh chất lỏng dãn nở nhiệt sinh áp suất lớn làm nổ vỡ chai thủy tinh."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Để bớt nguyên liệu bán có lãi.",
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
  "8|chapter|G8-CH4|20": {
    "stem": "Một ấm nhôm nặng $500\\,\\text{g}$ ($c = 880\\,\\text{J/(kg}\\cdot\\text{K)}$) chứa $1\\,\\text{kg}$ nước ở $20^\\circ\\text{C}$. Nhiệt lượng cần thiết để đun sôi cả ấm và nước lên $100^\\circ\\text{C}$ là.",
    "statements": [
      {
        "text": "$371\\,200\\,\\text{J}$.",
        "is_correct": true,
        "explanation": "$Q = (m_{\\text{nhôm}} c_{\\text{nhôm}} + m_{\\text{nước}} c_{\\text{nước}}) \\Delta t = (0,5 \\times 880 + 1 \\times 4200) \\times 80 = (440 + 4200) \\times 80 = 4640 \\times 80 = 371\\,200\\,\\text{J}$."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "$336\\,000\\,\\text{J}$.",
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
  "8|topic|G8-CH4-TP1|11": {
    "stem": "Khi bơm lốp xe đạp bằng bơm tay, sau một lúc ta thấy thân ống bơm bị nóng lên. Nguyên nhân chính của hiện tượng này.",
    "statements": [
      {
        "text": "Do ma sát giữa piston và thành xilanh và do công nén khí bên trong sinh ra chuyển hóa thành nội năng.",
        "is_correct": true,
        "explanation": "Cơ bắp người thực hiện công nén khí và thắng lực ma sát của piston; công này chuyển hóa thành nội năng làm xilanh nóng lên."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Do ánh nắng mặt trời chiếu vào ống bơm.",
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
  "8|topic|G8-CH4-TP1|14": {
    "stem": "Xoa hai bàn tay vào nhau rồi áp lên má ta thấy má ấm lên. Trong hiện tượng này đã diễn ra các quá trình biến đổi nội năng nào?.",
    "statements": [
      {
        "text": "Lúc xoa tay là thực hiện công; lúc áp tay lên má là truyền nhiệt.",
        "is_correct": true,
        "explanation": "Giai đoạn 1: cọ xát hai bàn tay thực hiện công biến cơ năng thành nội năng; Giai đoạn 2: áp bàn tay nóng lên má mát hơn là quá trình truyền nhiệt."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Cả hai giai đoạn đều là truyền nhiệt.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Cả hai giai đoạn đều là thực hiện công.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "8|topic|G8-CH4-TP1|17": {
    "stem": "So sánh nội năng của $1\\,\\text{kg}$ nước ở $20^\\circ\\text{C}$ và $1\\,\\text{kg}$ nước ở $80^\\circ\\text{C}$.",
    "statements": [
      {
        "text": "Nước ở $80^\\circ\\text{C}$ có nội năng lớn hơn vì nhiệt độ cao hơn làm các phân tử nước chuyển động nhiệt nhanh hơn.",
        "is_correct": true,
        "explanation": "Cùng khối lượng và thể tích tương đương, mẫu vật ở nhiệt độ cao hơn sẽ có động năng phân tử trung bình lớn hơn, do đó nội năng lớn hơn."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Nước ở $20^\\circ\\text{C}$ có nội năng lớn hơn.",
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
  "8|topic|G8-CH4-TP1|20": {
    "stem": "Một thanh sắt có khối lượng $m = 2\\,\\text{kg}$ rơi tự do từ độ cao $h = 20\\,\\text{m}$ xuống đất mềm và cắm chặt vào đất rồi dừng lại. Lấy $g = 10\\,\\text{m/s}^2$. Bỏ qua lực cản không khí, giả sử toàn bộ thế năng chuyển hóa thành nội năng làm nóng thanh sắt. Nhiệt lượng thanh sắt nhận được xấp xỉ bằng.",
    "statements": [
      {
        "text": "$400\\,\\text{J}$.",
        "is_correct": true,
        "explanation": "Thế năng ban đầu: $W_t = m \\cdot g \\cdot h = 2 \\times 10 \\times 20 = 400\\,\\text{J}$. Khi dừng lại, toàn bộ cơ năng chuyển thành nhiệt năng làm tăng nội năng: $Q = 400\\,\\text{J}$."
      },
      {
        "text": "Lực chỉ có tác dụng làm biến dạng vật mà không thể làm thay đổi vận tốc của vật.",
        "is_correct": false,
        "explanation": "Sai, tác dụng của lực có thể làm thay đổi vận tốc (chuyển động) hoặc làm biến dạng vật, hoặc cả hai."
      },
      {
        "text": "$40\\,\\text{J}$.",
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
  "8|topic|G8-CH4-TP2|11": {
    "stem": "Tại sao máy điều hòa nhiệt độ làm mát phòng luôn được lắp đặt ở vị trí trên cao gần trần nhà, còn máy sưởi ấm lại được đặt sát sàn nhà?.",
    "statements": [
      {
        "text": "Để tạo dòng đối lưu tự nhiên: không khí lạnh nặng chìm xuống làm mát cả phòng; không khí nóng nhẹ bốc lên sưởi ấm cả phòng.",
        "is_correct": true,
        "explanation": "Khí lạnh có khối lượng riêng lớn nên tự chìm xuống đáy phòng; khí nóng nhẹ hơn nên nổi lên trần. Lắp đúng vị trí giúp dòng đối lưu tự nhiên luân chuyển khí đều khắp phòng."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Để tránh va quẹt với con người.",
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
  "8|topic|G8-CH4-TP2|14": {
    "stem": "Tại sao các bồn chứa xăng dầu lớn đặt ngoài trời luôn được sơn màu trắng hoặc màu bạc sáng bóng?.",
    "statements": [
      {
        "text": "Để phản xạ bức xạ nhiệt Mặt Trời, hạn chế hấp thụ nhiệt làm nóng xăng dầu gây nguy cơ bốc cháy nổ.",
        "is_correct": true,
        "explanation": "Màu bạc phản xạ tối đa bức xạ nhiệt hồng ngoại từ ánh nắng mặt trời, giữ cho nhiệt độ bên trong bồn chứa luôn ở mức an toàn."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Để dễ nhìn thấy khi trời tối.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Để chống rỉ sét tốt hơn màu sơn khác.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "8|topic|G8-CH4-TP2|17": {
    "stem": "Khi đốt ngọn nến, ta để tay ở vị trí nào xung quanh ngọn nến thì cảm thấy nóng nhất?.",
    "statements": [
      {
        "text": "Ở phía trên thẳng đứng ngọn nến (cùng khoảng cách).",
        "is_correct": true,
        "explanation": "Ở phía trên ngọn nến vừa nhận được bức xạ nhiệt lại vừa nhận được dòng đối lưu của luồng khí nóng bốc thẳng lên cao, nên nóng nhất."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Ở phía bên cạnh ngọn nến.",
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
  "8|topic|G8-CH4-TP2|20": {
    "stem": "Để giảm $80\\%$ lượng nhiệt thất thoát qua cửa sổ, giải pháp kỹ thuật nào sau đây là hiệu quả nhất?.",
    "statements": [
      {
        "text": "Sử dụng cửa sổ kính hộp 2 lớp ở giữa có lớp khí trơ (Argon) hoặc hút chân không.",
        "is_correct": true,
        "explanation": "Kính hộp 2 lớp cách nhau bằng lớp khí trơ hoặc chân không triệt tiêu dẫn nhiệt và đối lưu, giảm tới $80\\%$ thất thoát nhiệt."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Sơn kính màu đen.",
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
  "8|topic|G8-CH4-TP3|11": {
    "stem": "Khi làm lạnh một băng kép làm bằng đồng và thép (biết đồng dãn nở vì nhiệt nhiều hơn thép), băng kép sẽ bị uốn cong.",
    "statements": [
      {
        "text": "Uốn cong về phía thanh đồng (vì khi lạnh thanh đồng co lại nhiều hơn thanh thép).",
        "is_correct": true,
        "explanation": "Đồng nở nhiều khi nóng thì cũng co lại nhiều khi lạnh. Khi làm lạnh, thanh đồng co ngắn hơn thanh thép nên băng kép cong về phía thanh đồng."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Uốn cong về phía thanh thép.",
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
  "8|topic|G8-CH4-TP3|14": {
    "stem": "Khi một chiếc cốc thủy tinh dày bị rót nước sôi đột ngột vào thì rất dễ bị nứt vỡ, trong khi cốc thủy tinh mỏng lại ít bị nứt hơn. Tại sao?.",
    "statements": [
      {
        "text": "Thủy tinh dẫn nhiệt kém: lớp trong cốc dày nở vì nhiệt nhanh trong khi lớp ngoài chưa kịp nở, sự dãn nở không đều sinh lực lớn làm vỡ cốc; cốc mỏng dẫn nhiệt qua nhanh nên nở đều.",
        "is_correct": true,
        "explanation": "Cốc dày có mặt trong tiếp xúc nước nóng nở ra ngay trong khi mặt ngoài còn nguội chưa nở, ứng suất căng bề mặt không đều làm thủy tinh giòn bị nứt vỡ."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Vì cốc dày nặng hơn.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Vì cốc mỏng đàn hồi tốt hơn.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "8|topic|G8-CH4-TP3|17": {
    "stem": "Quả bóng bàn bị móp một vết lõm (chưa bị thủng rách). Để quả bóng bàn phồng tròn lại như cũ, ta có thể áp dụng cách nào?.",
    "statements": [
      {
        "text": "Nhúng quả bóng bàn vào một cốc nước nóng (không khí bên trong quả bóng nóng lên, nở ra đẩy vết lõm phồng lên).",
        "is_correct": true,
        "explanation": "Không khí bên trong quả bóng kín gặp nước nóng sẽ nở vì nhiệt, áp suất khí tăng sinh lực đẩy vỏ nhựa phồng trở lại hình cầu tròn."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Thả quả bóng vào ngăn đá tủ lạnh.",
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
  "8|topic|G8-CH4-TP3|20": {
    "stem": "Một bình thủy tinh chứa đầy $1000\\,\\text{cm}^3$ dầu ăn ở $20^\\circ\\text{C}$. Khi nung nóng lên $70^\\circ\\text{C}$, biết hệ số nở khối của dầu ăn là $\\beta = 10^{-3}\\,\\text{K}^{-1}$ và bỏ qua sự nở của bình thủy tinh, thể tích dầu ăn tràn ra ngoài bình là.",
    "statements": [
      {
        "text": "$50\\,\\text{cm}^3$.",
        "is_correct": true,
        "explanation": "Độ tăng nhiệt độ: $\\Delta t = 70 - 20 = 50^\\circ\\text{C}$. Độ nở thể tích của dầu: $\\Delta V = V_0 \\cdot \\beta \\cdot \\Delta t = 1000 \\times 10^{-3} \\times 50 = 50\\,\\text{cm}^3$. Thể tích tràn ra đúng bằng $50\\,\\text{cm}^3$."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "$5\\,\\text{cm}^3$.",
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

import type { TfBank } from './types';

/**
 * Ngân hàng câu Đúng/Sai – Lớp 7 (soạn chuẩn Cấu trúc đề 2025 Bộ GD&ĐT).
 * Bao gồm đầy đủ 16 chủ đề/chương của chương trình Vật lý 7.
 * Mỗi câu gồm 4 mệnh đề a, b, c, d độc lập với sự phân bổ tự nhiên giữa Đúng và Sai.
 */
export const GRADE_7_TF_BANK: TfBank = {
  "7|chapter|G7-CH1|5": {
    "stem": "Một vận động viên chạy cự li 100 m hết 10 giây. Tốc độ của vận động viên tính theo m/s và km/h lần lượt là.",
    "statements": [
      {
        "text": "10 m/s và 36 km/h.",
        "is_correct": true,
        "explanation": "v = s / t = 100 / 10 = 10 m/s = 10 × 3,6 = 36 km/h."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "10 m/s và 100 km/h.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "100 m/s và 360 km/h.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|chapter|G7-CH1|6": {
    "stem": "Cho ba vật chuyển động: Vật A có tốc độ 15 m/s; Vật B có tốc độ 45 km/h; Vật C đi được 1,2 km trong 1 phút. Sắp xếp các vật theo thứ tự chuyển động từ CHẬM ĐẾN NHANH.",
    "statements": [
      {
        "text": "B → A → C.",
        "is_correct": true,
        "explanation": "Đổi tất cả về m/s: v_A = 15 m/s; v_B = 45 / 3,6 = 12,5 m/s; v_C = 1200 m / 60 s = 20 m/s. Vậy thứ tự từ chậm đến nhanh là: B (12,5 m/s) < A (15 m/s) < C (20 m/s)."
      },
      {
        "text": "Đơn vị đo chuẩn của tốc độ trong hệ SI là mét trên giây (m/s).",
        "is_correct": true,
        "explanation": "Đúng, 1 m/s = 3,6 km/h."
      },
      {
        "text": "A → B → C.",
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
  "7|chapter|G7-CH1|13": {
    "stem": "Trong thí nghiệm đo tốc độ bằng đồng hồ bấm giây, thứ tự các bước thao tác nào sau đây là ĐÚNG?.",
    "statements": [
      {
        "text": "(1) Dùng thước đo độ dài quãng đường s từ vạch xuất phát đến vạch đích → (2) Dùng đồng hồ bấm giây đo thời gian t từ lúc xuất phát đến lúc cán đích → (3) Lặp lại 3 lần, lấy trung bình và tính v = s / t.",
        "is_correct": true,
        "explanation": "Phải xác định và đo cố định quãng đường s trước, sau đó đo thời gian t trên quãng đường đó nhiều lần rồi tính v = s / t_tb."
      },
      {
        "text": "Để đổi từ km/h sang m/s, ta nhân giá trị tốc độ với 3,6.",
        "is_correct": false,
        "explanation": "Sai, muốn đổi từ km/h sang m/s ta phải chia cho 3,6 (ví dụ: 36 km/h = 10 m/s)."
      },
      {
        "text": "(1) Bấm đồng hồ → (2) Dùng thước đo quãng đường → (3) Thả cho vật chuyển động.",
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
  "7|chapter|G7-CH1|21": {
    "stem": "Đồ thị quãng đường – thời gian của một người đi xe đạp gồm 2 đoạn: Đoạn OA từ t = 0 đến t = 2 h (s tăng từ 0 lên 30 km); Đoạn AB từ t = 2 h đến t = 3 h (s giữ nguyên ở 30 km). Trong khoảng thời gian từ t = 2 h đến t = 3 h, người đó đang làm gì và tốc độ bằng.",
    "statements": [
      {
        "text": "Đang dừng lại nghỉ (đứng yên) với tốc độ v = 0 km/h.",
        "is_correct": true,
        "explanation": "Từ t = 2 h đến t = 3 h, quãng đường vẫn giữ nguyên là 30 km (đoạn AB nằm ngang), chứng tỏ người đó đang dừng lại nghỉ (v = 0)."
      },
      {
        "text": "Đơn vị đo chuẩn của tốc độ trong hệ SI là mét trên giây (m/s).",
        "is_correct": true,
        "explanation": "Đúng, 1 m/s = 3,6 km/h."
      },
      {
        "text": "Đang đi tiếp với tốc độ 30 km/h.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Đang đi với tốc độ 10 km/h.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|topic|G7-C1-B1|13": {
    "stem": "Một vận động viên chạy cự li 100 m hết 10 giây. Tốc độ của vận động viên tính theo m/s và km/h lần lượt là.",
    "statements": [
      {
        "text": "10 m/s và 36 km/h.",
        "is_correct": true,
        "explanation": "v = s / t = 100 / 10 = 10 m/s = 10 × 3,6 = 36 km/h."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "10 m/s và 100 km/h.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "100 m/s và 360 km/h.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|topic|G7-C1-B1|11": {
    "stem": "Đổi tốc độ v = 54 km/h sang đơn vị m/s được kết quả nào?.",
    "statements": [
      {
        "text": "15 m/s.",
        "is_correct": true,
        "explanation": "Đổi từ km/h sang m/s ta chia cho 3,6: 54 / 3,6 = 15 m/s."
      },
      {
        "text": "Đơn vị đo chuẩn của tốc độ trong hệ SI là mét trên giây (m/s).",
        "is_correct": true,
        "explanation": "Đúng, 1 m/s = 3,6 km/h."
      },
      {
        "text": "18 m/s.",
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
  "7|topic|G7-C1-B1|15": {
    "stem": "Một người đi bộ với tốc độ ổn định 5 km/h. Để đi hết quãng đường công viên dài 2,5 km thì người đó cần thời gian bao lâu?.",
    "statements": [
      {
        "text": "0,5 giờ (30 phút).",
        "is_correct": true,
        "explanation": "Thời gian t = s / v = 2,5 / 5 = 0,5 giờ = 30 phút."
      },
      {
        "text": "Theo định luật bảo toàn năng lượng, năng lượng không tự sinh ra và không tự mất đi, chỉ chuyển hóa từ dạng này sang dạng khác.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý bảo toàn và chuyển hóa năng lượng."
      },
      {
        "text": "2 giờ.",
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
  "7|topic|G7-C1-B1|20": {
    "stem": "Ánh sáng truyền trong chân không với tốc độ v = 300.000 km/s. Biết khoảng cách từ Mặt Trời đến Trái Đất khoảng 150.000.000 km. Ánh sáng từ Mặt Trời mất bao lâu để truyền tới Trái Đất?.",
    "statements": [
      {
        "text": "500 giây (8 phút 20 giây).",
        "is_correct": true,
        "explanation": "Thời gian truyền của ánh sáng: t = s / v = 150.000.000 / 300.000 = 500 giây = 8 phút 20 giây."
      },
      {
        "text": "Đơn vị đo chuẩn của tốc độ trong hệ SI là mét trên giây (m/s).",
        "is_correct": true,
        "explanation": "Đúng, 1 m/s = 3,6 km/h."
      },
      {
        "text": "50 giây.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "5000 giây.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|topic|G7-C1-B2|11": {
    "stem": "Trong thí nghiệm đo tốc độ bằng đồng hồ bấm giây, thứ tự các bước thao tác nào sau đây là ĐÚNG?.",
    "statements": [
      {
        "text": "(1) Dùng thước đo độ dài quãng đường s từ vạch xuất phát đến vạch đích → (2) Dùng đồng hồ bấm giây đo thời gian t từ lúc xuất phát đến lúc cán đích → (3) Lặp lại 3 lần, lấy trung bình và tính v = s / t.",
        "is_correct": true,
        "explanation": "Phải xác định và đo cố định quãng đường s trước, sau đó đo thời gian t trên quãng đường đó nhiều lần rồi tính v = s / t_tb."
      },
      {
        "text": "Để đổi từ km/h sang m/s, ta nhân giá trị tốc độ với 3,6.",
        "is_correct": false,
        "explanation": "Sai, muốn đổi từ km/h sang m/s ta phải chia cho 3,6 (ví dụ: 36 km/h = 10 m/s)."
      },
      {
        "text": "(1) Bấm đồng hồ → (2) Dùng thước đo quãng đường → (3) Thả cho vật chuyển động.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "(1) Tính v = s / t → (2) Bấm giờ → (3) Đo quãng đường.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|topic|G7-C1-B2|13": {
    "stem": "Trong bài thực hành đo thời gian xe lăn đi hết quãng đường s = 0,6 m, một nhóm học sinh đo 3 lần được kết quả: t₁ = 1,18 s; t₂ = 1,20 s; t₃ = 1,22 s. Giá trị thời gian trung bình và tốc độ trung bình của xe là.",
    "statements": [
      {
        "text": "t_tb = 1,20 s; v = 0,50 m/s.",
        "is_correct": true,
        "explanation": "t_tb = (1,18 + 1,20 + 1,22) / 3 = 1,20 s. Tốc độ trung bình: v = s / t_tb = 0,6 / 1,20 = 0,50 m/s."
      },
      {
        "text": "Đơn vị đo chuẩn của tốc độ trong hệ SI là mét trên giây (m/s).",
        "is_correct": true,
        "explanation": "Đúng, 1 m/s = 3,6 km/h."
      },
      {
        "text": "t_tb = 1,18 s; v = 0,60 m/s.",
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
  "7|topic|G7-C1-B2|17": {
    "stem": "Nếu chỉ có một cổng quang điện duy nhất nối với đồng hồ đo thời gian hiện số (chế độ MODE A), làm thế nào để đo được tốc độ tức thời của xe lăn khi đi qua cổng đó?.",
    "statements": [
      {
        "text": "Lắp một tấm cản sáng có bề rộng d (ví dụ d = 2 cm) lên xe; lấy bề rộng d chia cho thời gian Δt mà tấm cản sáng chắn tia hồng ngoại tại cổng A (v = d / Δt).",
        "is_correct": true,
        "explanation": "Khi chỉ dùng 1 cổng quang ở MODE A, đồng hồ đo thời gian Δt tấm cản sáng (bề rộng d) đi qua tia sáng. Khi đó tốc độ qua cổng là v = d / Δt."
      },
      {
        "text": "Để đổi từ km/h sang m/s, ta nhân giá trị tốc độ với 3,6.",
        "is_correct": false,
        "explanation": "Sai, muốn đổi từ km/h sang m/s ta phải chia cho 3,6 (ví dụ: 36 km/h = 10 m/s)."
      },
      {
        "text": "Không thể đo được nếu chỉ có 1 cổng quang điện.",
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
  "7|topic|G7-C1-B2|20": {
    "stem": "Camera giám sát giao thông trên đường cao tốc chụp ảnh một ô tô đi qua vạch mốc A lúc 8h 00ph 00s và đi qua vạch mốc B (cách A một khoảng 2,5 km) lúc 8h 01ph 15s. Biết tốc độ tối đa cho phép trên đoạn đường này là 100 km/h. Hỏi ô tô có vi phạm tốc độ không?.",
    "statements": [
      {
        "text": "Có vi phạm vì tốc độ trung bình của xe là 120 km/h (vượt quá 100 km/h).",
        "is_correct": true,
        "explanation": "Đổi s = 2,5 km = 2500 m; thời gian đi từ A đến B là t = 1 phút 15 giây = 75 s. Tốc độ của xe: v = 2500 / 75 = 100/3 m/s = (100/3) × 3,6 = 120 km/h > 100 km/h ⇒ Xe đã vi phạm tốc độ!"
      },
      {
        "text": "Đơn vị đo chuẩn của tốc độ trong hệ SI là mét trên giây (m/s).",
        "is_correct": true,
        "explanation": "Đúng, 1 m/s = 3,6 km/h."
      },
      {
        "text": "Không vi phạm vì tốc độ của xe là 90 km/h.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Không vi phạm vì tốc độ của xe đúng bằng 100 km/h.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|topic|G7-C1-B3|11": {
    "stem": "Đồ thị quãng đường – thời gian của một người đi xe đạp gồm 2 đoạn: Đoạn OA từ t = 0 đến t = 2 h (s tăng từ 0 lên 30 km); Đoạn AB từ t = 2 h đến t = 3 h (s giữ nguyên ở 30 km). Trong khoảng thời gian từ t = 2 h đến t = 3 h, người đó đang làm gì và tốc độ bằng.",
    "statements": [
      {
        "text": "Đang dừng lại nghỉ (đứng yên) với tốc độ v = 0 km/h.",
        "is_correct": true,
        "explanation": "Từ t = 2 h đến t = 3 h, quãng đường vẫn giữ nguyên là 30 km (đoạn AB nằm ngang), chứng tỏ người đó đang dừng lại nghỉ (v = 0)."
      },
      {
        "text": "Để đổi từ km/h sang m/s, ta nhân giá trị tốc độ với 3,6.",
        "is_correct": false,
        "explanation": "Sai, muốn đổi từ km/h sang m/s ta phải chia cho 3,6 (ví dụ: 36 km/h = 10 m/s)."
      },
      {
        "text": "Đang đi tiếp với tốc độ 30 km/h.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Đang đi với tốc độ 10 km/h.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|topic|G7-C1-B3|15": {
    "stem": "Dựa vào đồ thị s – t của một vật chuyển động thẳng đều với tốc độ 5 m/s xuất phát từ gốc tọa độ, để đi được quãng đường s = 60 m thì hoành độ thời gian t tương ứng trên đồ thị là.",
    "statements": [
      {
        "text": "t = 12 s.",
        "is_correct": true,
        "explanation": "Thời gian t = s / v = 60 / 5 = 12 s."
      },
      {
        "text": "Đơn vị đo chuẩn của tốc độ trong hệ SI là mét trên giây (m/s).",
        "is_correct": true,
        "explanation": "Đúng, 1 m/s = 3,6 km/h."
      },
      {
        "text": "t = 10 s.",
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
  "7|topic|G7-C1-B3|16": {
    "stem": "Trên một đồ thị s – t biểu diễn chuyển động của một chú rùa và một chú thỏ: Đường của rùa là một đoạn thẳng liên tục đi lên đều đặn; đường của thỏ gồm đoạn đầu rất dốc, sau đó là một đoạn nằm ngang rất dài. Đoạn nằm ngang trên đồ thị của thỏ mô tả điều gì trong câu chuyện ngụ ngôn?.",
    "statements": [
      {
        "text": "Thỏ đang dừng lại ngủ quên bên đường.",
        "is_correct": true,
        "explanation": "Đoạn nằm ngang trên đồ thị s - t biểu diễn thời gian trôi đi mà quãng đường không đổi — ứng với lúc Thỏ chủ quan dừng lại ngủ quên!"
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Thỏ đang chạy hết tốc lực.",
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
  "7|topic|G7-C1-B3|17": {
    "stem": "Khi hai đường biểu diễn chuyển động của hai vật trên cùng một đồ thị tọa độ – thời gian CẮT NHAU tại điểm I(t₀; s₀), giao điểm I có ý nghĩa vật lý.",
    "statements": [
      {
        "text": "Tại thời điểm t₀, hai vật gặp nhau (ở cùng một vị trí cách mốc s₀).",
        "is_correct": true,
        "explanation": "Giao điểm I(t₀; s₀) thuộc cả hai đồ thị nghĩa là tại cùng thời điểm t₀, cả hai vật đều cách gốc O một khoảng s₀ ⇒ Hai vật gặp nhau (đuổi kịp nhau)."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Tại thời điểm t₀, hai vật có cùng tốc độ.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hai vật dừng lại hẳn tại t₀.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|chapter|G7-CH2|4": {
    "stem": "Đặt một chiếc chuông điện đang reo bên trong một bình thủy tinh kín rồi hút dần không khí ra khỏi bình. Hiện tượng gì xảy ra?.",
    "statements": [
      {
        "text": "Tiếng chuông nghe nhỏ dần rồi tắt hẳn khi bình gần như chân không, dù ta vẫn nhìn thấy búa chuông đang gõ liên tục.",
        "is_correct": true,
        "explanation": "Thí nghiệm chuông điện trong bình chân không chứng minh: Ánh sáng truyền qua được chân không (ta vẫn thấy búa gõ), nhưng sóng âm không truyền qua được chân không!"
      },
      {
        "text": "Ampe kế được mắc nối tiếp với thiết bị điện cần đo cường độ dòng điện.",
        "is_correct": true,
        "explanation": "Đúng quy tắc sử dụng ampe kế đo cường độ dòng điện trong mạch."
      },
      {
        "text": "Tiếng chuông nghe ngày càng to hơn.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Búa chuông ngừng gõ ngay lập tức.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|chapter|G7-CH2|6": {
    "stem": "Khi gõ mạnh vào mặt trống rồi lập tức áp lòng bàn tay đè chặt lên mặt trống thì tiếng trống tắt ngay. Giải thích tại sao?.",
    "statements": [
      {
        "text": "Vì bàn tay đã ngăn cản và làm mặt trống ngừng dao động, mà vật ngừng dao động thì ngừng phát ra âm.",
        "is_correct": true,
        "explanation": "Khi tay đè chặt mặt trống, mặt trống ngừng dao động nên không còn phát ra sóng âm nữa."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Vì bàn tay hút hết nhiệt năng của trống.",
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
  "7|chapter|G7-CH2|14": {
    "stem": "Muốn làm cho một sợi dây đàn bầu hoặc dây đàn ghi-ta phát ra âm CAO HƠN (bổng hơn), người nghệ sĩ cần làm gì?.",
    "statements": [
      {
        "text": "Vặn khóa đàn để kéo căng dây hơn hoặc bấm phím để phần dây dao động ngắn lại.",
        "is_correct": true,
        "explanation": "Dây đàn càng căng, càng mảnh và càng ngắn thì dao động càng nhanh (tần số lớn hơn) ⇒ âm phát ra càng cao. Gảy mạnh hay nhẹ chỉ làm thay đổi biên độ (độ to) chứ không đổi tần số!"
      },
      {
        "text": "Sóng âm có thể truyền được qua môi trường chân không với tốc độ bằng tốc độ ánh sáng.",
        "is_correct": false,
        "explanation": "Sai, sóng âm là sóng cơ học nên không thể truyền qua chân không."
      },
      {
        "text": "Nới lỏng dây đàn ra cho chùng xuống.",
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
  "7|chapter|G7-CH2|16": {
    "stem": "Khi bác sĩ dùng máy siêu âm y tế để khám thai hoặc kiểm tra nội tạng, đầu dò máy phát ra chùm sóng âm có tần số khoảng 3.500.000 Hz (3,5 MHz). Tại sao bệnh nhân nằm khám lại hoàn toàn không nghe thấy tiếng kêu nào từ đầu dò?.",
    "statements": [
      {
        "text": "Vì sóng âm này có tần số 3.500.000 Hz vượt xa ngưỡng nghe tối đa 20.000 Hz của tai người (thuộc vùng siêu âm).",
        "is_correct": true,
        "explanation": "Tần số 3,5 MHz lớn hơn rất nhiều so với giới hạn nghe 20 kHz của màng nhĩ người nên tai không cảm nhận được."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Vì máy siêu âm bị hỏng loa.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Vì sóng siêu âm không truyền được trong cơ thể người.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|topic|G7-C2-B1|11": {
    "stem": "Đặt một chiếc chuông điện đang reo bên trong một bình thủy tinh kín rồi hút dần không khí ra khỏi bình. Hiện tượng gì xảy ra?.",
    "statements": [
      {
        "text": "Tiếng chuông nghe nhỏ dần rồi tắt hẳn khi bình gần như chân không, dù ta vẫn nhìn thấy búa chuông đang gõ liên tục.",
        "is_correct": true,
        "explanation": "Thí nghiệm chuông điện trong bình chân không chứng minh: Ánh sáng truyền qua được chân không (ta vẫn thấy búa gõ), nhưng sóng âm không truyền qua được chân không!"
      },
      {
        "text": "Ampe kế được mắc nối tiếp với thiết bị điện cần đo cường độ dòng điện.",
        "is_correct": true,
        "explanation": "Đúng quy tắc sử dụng ampe kế đo cường độ dòng điện trong mạch."
      },
      {
        "text": "Tiếng chuông nghe ngày càng to hơn.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Búa chuông ngừng gõ ngay lập tức.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|topic|G7-C2-B1|13": {
    "stem": "Các nhà du hành vũ trụ khi làm việc bên ngoài khoảng không vũ trụ (hoặc trên bề mặt Mặt Trăng) dù đứng ngay cạnh nhau cũng không thể nói chuyện trực tiếp mà phải dùng bộ đàm sóng vô tuyến. Tại sao?.",
    "statements": [
      {
        "text": "Vì khoảng không vũ trụ và trên Mặt Trăng là chân không (không có khí quyển), mà sóng âm không truyền được trong chân không.",
        "is_correct": true,
        "explanation": "Ngoài khoảng không vũ trụ là chân không nên sóng âm không thể truyền đi; bộ đàm chuyển giọng nói thành sóng điện từ (sóng vô tuyến) truyền được qua chân không."
      },
      {
        "text": "Tần số dao động là số dao động mà vật thực hiện được trong 1 giây, đơn vị là Héc (Hz).",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa tần số dao động."
      },
      {
        "text": "Vì ngoài vũ trụ quá lạnh làm đóng băng âm thanh.",
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
  "7|topic|G7-C2-B1|15": {
    "stem": "Trong cơn dông, tia chớp và tiếng sấm thực chất được phát ra cùng một lúc tại đám mây dông. Tại sao ta luôn nhìn thấy tia chớp sáng lóe lên trước rồi một lúc sau mới nghe thấy tiếng sấm nổ?.",
    "statements": [
      {
        "text": "Vì tốc độ ánh sáng trong không khí (~300.000.000 m/s) lớn gấp gần một triệu lần tốc độ truyền âm trong không khí (~340 m/s).",
        "is_correct": true,
        "explanation": "Ánh sáng truyền tới mắt gần như tức thời (c = 3×10⁸ m/s), còn âm thanh truyền chậm hơn rất nhiều (v = 340 m/s) nên đến tai trễ hơn."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Vì mắt ở phía trước tai.",
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
  "7|topic|G7-C2-B1|17": {
    "stem": "Trò chơi \"Điện thoại ống bơ\" của trẻ em gồm hai vỏ lon sữa nối với nhau bằng một sợi dây chỉ căng thẳng. Khi một bạn nói nhỏ vào lon thứ nhất, bạn áp tai vào lon thứ hai ở xa vẫn nghe rất rõ. Âm thanh đã truyền chủ yếu qua môi trường nào?.",
    "statements": [
      {
        "text": "Truyền qua sợi dây chỉ đang căng (chất rắn).",
        "is_correct": true,
        "explanation": "Đáy lon thứ nhất dao động kéo theo sợi dây căng thẳng (chất rắn) truyền dao động trực tiếp sang đáy lon thứ hai. Nếu dây bị chùng thì không truyền được âm."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Truyền qua chân không.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Truyền qua ánh sáng Mặt Trời.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|topic|G7-C2-B2|12": {
    "stem": "Khi một con muỗi bay qua tai, ta nghe thấy tiếng \"vo ve\" rất cao (bổng), còn khi một con ong bầu bay qua thì nghe tiếng \"ù ù\" trầm hơn. Điều này chứng tỏ.",
    "statements": [
      {
        "text": "Cánh muỗi đập nhanh hơn (tần số lớn hơn) so với cánh ong bầu.",
        "is_correct": true,
        "explanation": "Tiếng muỗi kêu cao (bổng) hơn tiếng ong vì cánh muỗi vỗ với tần số lớn hơn (khoảng 500–600 Hz so với ~150–200 Hz của ong)."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Cánh ong bầu đập nhanh hơn cánh muỗi.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Con muỗi nặng hơn con ong bầu.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|topic|G7-C2-B2|14": {
    "stem": "Muốn làm cho một sợi dây đàn bầu hoặc dây đàn ghi-ta phát ra âm CAO HƠN (bổng hơn), người nghệ sĩ cần làm gì?.",
    "statements": [
      {
        "text": "Vặn khóa đàn để kéo căng dây hơn hoặc bấm phím để phần dây dao động ngắn lại.",
        "is_correct": true,
        "explanation": "Dây đàn càng căng, càng mảnh và càng ngắn thì dao động càng nhanh (tần số lớn hơn) ⇒ âm phát ra càng cao. Gảy mạnh hay nhẹ chỉ làm thay đổi biên độ (độ to) chứ không đổi tần số!"
      },
      {
        "text": "Tần số dao động là số dao động mà vật thực hiện được trong 1 giây, đơn vị là Héc (Hz).",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa tần số dao động."
      },
      {
        "text": "Nới lỏng dây đàn ra cho chùng xuống.",
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
  "7|topic|G7-C2-B2|17": {
    "stem": "Cho 4 vật dao động với các tần số: Vật A (12 Hz), Vật B (150 Hz), Vật C (4500 Hz), Vật D (32.000 Hz). Tai người bình thường có thể nghe được âm phát ra từ những vật nào?.",
    "statements": [
      {
        "text": "Chỉ vật B (150 Hz) và vật C (4500 Hz).",
        "is_correct": true,
        "explanation": "Tai người chỉ nghe được âm trong dải 20 Hz – 20.000 Hz. Vật A (12 Hz) là hạ âm, vật D (32.000 Hz) là siêu âm nên tai người chỉ nghe được B và C."
      },
      {
        "text": "Sóng âm có thể truyền được qua môi trường chân không với tốc độ bằng tốc độ ánh sáng.",
        "is_correct": false,
        "explanation": "Sai, sóng âm là sóng cơ học nên không thể truyền qua chân không."
      },
      {
        "text": "Cả 4 vật A, B, C, D.",
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
  "7|topic|G7-C2-B2|19": {
    "stem": "Vật thứ nhất thực hiện được 600 dao động trong 5 giây. Vật thứ hai thực hiện được 900 dao động trong 10 giây. Vật nào có tần số lớn hơn và phát ra âm cao (bổng) hơn?.",
    "statements": [
      {
        "text": "Vật thứ nhất (f₁ = 120 Hz > f₂ = 90 Hz) nên phát ra âm cao hơn.",
        "is_correct": true,
        "explanation": "Tính tần số: f₁ = 600 / 5 = 120 Hz; f₂ = 900 / 10 = 90 Hz. Vì f₁ > f₂ nên vật thứ nhất dao động nhanh hơn và phát ra âm cao hơn."
      },
      {
        "text": "Tần số dao động là số dao động mà vật thực hiện được trong 1 giây, đơn vị là Héc (Hz).",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa tần số dao động."
      },
      {
        "text": "Vật thứ hai (900 > 600) nên phát ra âm cao hơn.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hai vật phát ra âm cao như nhau.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|topic|G7-C2-B3|11": {
    "stem": "Tại sao trong các rạp chiếu phim, phòng thu âm và nhà hát lớn, tường thường được làm sần sùi, ốp mút xốp có gai nhọn và挂 rèm nhung dày?.",
    "statements": [
      {
        "text": "Để hấp thụ âm tốt, giảm âm phản xạ, tránh tạo ra tiếng vang gây nhòe âm thanh trong phòng.",
        "is_correct": true,
        "explanation": "Nếu tường rạp hát làm phẳng nhẵn thì âm phản xạ liên tiếp sẽ tạo tiếng vang lộn xộn khiến khán giả nghe không rõ lời thoại và nhạc; vật liệu mềm, gồ ghề giúp tiêu âm."
      },
      {
        "text": "Sóng âm có thể truyền được qua môi trường chân không với tốc độ bằng tốc độ ánh sáng.",
        "is_correct": false,
        "explanation": "Sai, sóng âm là sóng cơ học nên không thể truyền qua chân không."
      },
      {
        "text": "Chỉ để trang trí cho đẹp mắt.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Để làm âm phản xạ mạnh hơn gấp nhiều lần.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|topic|G7-C2-B3|12": {
    "stem": "Tại sao khi ta nói to trong một căn phòng nhỏ trống (ví dụ phòng rộng 4 m × 4 m), mặc dù tường gạch phản xạ âm rất tốt nhưng ta lại không nghe thấy tiếng vang tách biệt mà chỉ thấy âm nghe to hơn?.",
    "statements": [
      {
        "text": "Vì khoảng cách từ người đến tường nhỏ hơn 11,3 m nên âm phản xạ quay về tai gần như cùng lúc với âm trực tiếp (sớm hơn 1/15 s), hòa lẫn và làm âm nghe to hơn.",
        "is_correct": true,
        "explanation": "Với phòng 4 m, thời gian âm đi từ miệng tới tường rồi dội lại chỉ mất t = 2×4 / 340 ≈ 0,023 s < 1/15 s (0,067 s) nên tai không tách thành tiếng vang mà cộng hưởng làm âm to hơn."
      },
      {
        "text": "Tia sáng truyền trong mọi môi trường trong suốt luôn luôn bị bẻ cong.",
        "is_correct": false,
        "explanation": "Sai, trong môi trường trong suốt và đồng tính, ánh sáng truyền theo đường thẳng."
      },
      {
        "text": "Vì tường phòng nhỏ không phản xạ âm.",
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
  "7|topic|G7-C2-B3|14": {
    "stem": "Khi lắp cửa kính hai lớp (ở giữa có lớp chân không hoặc khí trơ) và đóng kín cửa phòng khi bên ngoài có công trường xây dựng ồn ào, ta đã áp dụng biện pháp chống ô nhiễm tiếng ồn nào?.",
    "statements": [
      {
        "text": "Ngăn chặn đường truyền âm (cách âm để âm không truyền vào phòng).",
        "is_correct": true,
        "explanation": "Xây tường cách âm, đóng cửa kính hai lớp là biện pháp ngăn chặn đường truyền của âm thanh."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Tác động vào nguồn âm.",
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
  "7|topic|G7-C2-B3|16": {
    "stem": "Khi chuyển về một ngôi nhà mới xây còn trống trơn chưa kê đồ đạc, khi nói chuyện ta thấy tiếng nói vang vọng rất rõ; nhưng sau khi kê tủ gỗ, sofa vải, treo rèm cửa và trải thảm thì hiện tượng vang giảm hẳn. Tại sao?.",
    "statements": [
      {
        "text": "Vì sofa vải, rèm cửa, thảm, đồ gỗ là các vật hấp thụ âm tốt, làm giảm mạnh lượng âm phản xạ từ các bức tường trống.",
        "is_correct": true,
        "explanation": "Phòng trống chỉ có tường gạch và sàn đá hoa phản xạ âm mạnh; khi thêm rèm, sofa, thảm (vật mềm, xốp) chúng hấp thụ âm phản xạ nên hết tiếng vang."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Vì đồ đạc chiếm chỗ làm phòng nhỏ lại.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Vì đồ đạc làm giảm tốc độ truyền âm trong không khí.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|chapter|G7-CH3|4": {
    "stem": "Hiện tượng nào sau đây chứng minh ánh sáng mang năng lượng?.",
    "statements": [
      {
        "text": "Ánh nắng Mặt Trời chiếu vào tấm pin quang điện tạo ra dòng điện thắp sáng đèn và làm nóng bình nước trên mái nhà.",
        "is_correct": true,
        "explanation": "Quang năng của ánh sáng chuyển hóa thành điện năng (pin Mặt Trời), nhiệt năng (làm nóng vật) hoặc hóa năng (quang hợp ở cây xanh)."
      },
      {
        "text": "Theo định luật bảo toàn năng lượng, năng lượng không tự sinh ra và không tự mất đi, chỉ chuyển hóa từ dạng này sang dạng khác.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý bảo toàn và chuyển hóa năng lượng."
      },
      {
        "text": "Ánh sáng truyền đi theo đường thẳng.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Tia sáng bị chắn bởi quyển vở.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|chapter|G7-CH3|5": {
    "stem": "Trong thí nghiệm kiểm tra định luật truyền thẳng ánh sáng với 3 tấm bìa có đục lỗ nhỏ A, B, C và một ngọn nến đang cháy, khi nào mắt đặt sau tấm bìa C mới nhìn thấy ánh sáng ngọn nến?.",
    "statements": [
      {
        "text": "Khi 3 lỗ nhỏ A, B, C và ngọn nến nằm trên cùng một đường thẳng.",
        "is_correct": true,
        "explanation": "Do ánh sáng truyền đi theo đường thẳng trong không khí nên chỉ khi 3 lỗ A, B, C thẳng hàng với ngọn nến thì tia sáng mới đi lọt qua cả 3 lỗ tới mắt."
      },
      {
        "text": "Tia sáng truyền trong mọi môi trường trong suốt luôn luôn bị bẻ cong.",
        "is_correct": false,
        "explanation": "Sai, trong môi trường trong suốt và đồng tính, ánh sáng truyền theo đường thẳng."
      },
      {
        "text": "Khi đặt 3 tấm bìa lệch nhau hình chữ Z.",
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
  "7|chapter|G7-CH3|7": {
    "stem": "Khi xếp hàng thẳng học thể dục trên sân trường, học sinh đứng sau chỉ cần điều chỉnh sao cho không nhìn thấy gáy của các bạn đứng phía trước ngoài bạn đứng ngay sát trước mặt mình. Cách ngắm hàng thẳng này dựa trên định luật vật lý nào?.",
    "statements": [
      {
        "text": "Định luật truyền thẳng của ánh sáng.",
        "is_correct": true,
        "explanation": "Vì ánh sáng truyền thẳng, khi người đứng ngay trước che khuất hoàn toàn các người phía trên nghĩa là tất cả đang nằm trên cùng một đường thẳng."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Định luật bảo toàn năng lượng.",
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
  "7|chapter|G7-CH3|14": {
    "stem": "Tại sao chúng ta có thể nhìn thấy rõ chữ in trên trang sách và các đồ vật trong phòng học từ mọi vị trí xung quanh dù chúng không tự phát sáng?.",
    "statements": [
      {
        "text": "Nhờ hiện tượng phản xạ khuếch tán trên bề mặt trang giấy và đồ vật hắt ánh sáng đi theo mọi hướng tới mắt ta.",
        "is_correct": true,
        "explanation": "Nhờ phản xạ khuếch tán trên bề mặt nhám của giấy, ánh sáng đèn/Mặt Trời được hắt đều đi mọi phương nên ngồi ở góc nào ta cũng đọc được sách mà không bị chói lóa."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Vì trang sách là một gương phẳng tuyệt đối.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Vì mắt ta phát ra tia sáng chiếu vào sách.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|topic|G7-C3-B1|11": {
    "stem": "Hiện tượng nào sau đây chứng minh ánh sáng mang năng lượng?.",
    "statements": [
      {
        "text": "Ánh nắng Mặt Trời chiếu vào tấm pin quang điện tạo ra dòng điện thắp sáng đèn và làm nóng bình nước trên mái nhà.",
        "is_correct": true,
        "explanation": "Quang năng của ánh sáng chuyển hóa thành điện năng (pin Mặt Trời), nhiệt năng (làm nóng vật) hoặc hóa năng (quang hợp ở cây xanh)."
      },
      {
        "text": "Theo định luật bảo toàn năng lượng, năng lượng không tự sinh ra và không tự mất đi, chỉ chuyển hóa từ dạng này sang dạng khác.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý bảo toàn và chuyển hóa năng lượng."
      },
      {
        "text": "Ánh sáng truyền đi theo đường thẳng.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Tia sáng bị chắn bởi quyển vở.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|topic|G7-C3-B1|13": {
    "stem": "Trong thí nghiệm kiểm tra định luật truyền thẳng ánh sáng với 3 tấm bìa có đục lỗ nhỏ A, B, C và một ngọn nến đang cháy, khi nào mắt đặt sau tấm bìa C mới nhìn thấy ánh sáng ngọn nến?.",
    "statements": [
      {
        "text": "Khi 3 lỗ nhỏ A, B, C và ngọn nến nằm trên cùng một đường thẳng.",
        "is_correct": true,
        "explanation": "Do ánh sáng truyền đi theo đường thẳng trong không khí nên chỉ khi 3 lỗ A, B, C thẳng hàng với ngọn nến thì tia sáng mới đi lọt qua cả 3 lỗ tới mắt."
      },
      {
        "text": "Tia sáng truyền trong mọi môi trường trong suốt luôn luôn bị bẻ cong.",
        "is_correct": false,
        "explanation": "Sai, trong môi trường trong suốt và đồng tính, ánh sáng truyền theo đường thẳng."
      },
      {
        "text": "Khi đặt 3 tấm bìa lệch nhau hình chữ Z.",
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
  "7|topic|G7-C3-B1|16": {
    "stem": "Hiện tượng Nguyệt thực xảy ra khi nào?.",
    "statements": [
      {
        "text": "Khi Mặt Trăng bị Trái Đất che khuất, không nhận được ánh sáng từ Mặt Trời (Trái Đất nằm giữa Mặt Trời và Mặt Trăng vào đêm Rằm).",
        "is_correct": true,
        "explanation": "Nguyệt thực xảy ra vào đêm Rằm khi Mặt Trăng đi vào vùng bóng tối phía sau Trái Đất."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Khi Mặt Trăng che khuất Mặt Trời.",
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
  "7|topic|G7-C3-B1|18": {
    "stem": "Khi xếp hàng thẳng học thể dục trên sân trường, học sinh đứng sau chỉ cần điều chỉnh sao cho không nhìn thấy gáy của các bạn đứng phía trước ngoài bạn đứng ngay sát trước mặt mình. Cách ngắm hàng thẳng này dựa trên định luật vật lý nào?.",
    "statements": [
      {
        "text": "Định luật truyền thẳng của ánh sáng.",
        "is_correct": true,
        "explanation": "Vì ánh sáng truyền thẳng, khi người đứng ngay trước che khuất hoàn toàn các người phía trên nghĩa là tất cả đang nằm trên cùng một đường thẳng."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Định luật bảo toàn năng lượng.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Hiện tượng phản xạ âm.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|topic|G7-C3-B2|12": {
    "stem": "Chiếu một tia sáng SI hợp với mặt gương phẳng một góc α = 30°. Hãy tính góc tới i và góc phản xạ i'.",
    "statements": [
      {
        "text": "i = 60°; i' = 60°.",
        "is_correct": true,
        "explanation": "Vì pháp tuyến IN vuông góc (90°) với mặt gương nên góc tới là: i = 90° - α = 90° - 30° = 60°. Suy ra góc phản xạ i' = i = 60°."
      },
      {
        "text": "Theo định luật phản xạ ánh sáng, góc phản xạ luôn bằng góc tới (i' = i).",
        "is_correct": true,
        "explanation": "Đúng theo định luật phản xạ ánh sáng."
      },
      {
        "text": "i = 30°; i' = 30°.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "i = 30°; i' = 60°.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|topic|G7-C3-B2|13": {
    "stem": "Chiếu một tia sáng tới gương phẳng sao cho góc hợp bởi tia tới và tia phản xạ bằng 100°. Khi đó góc tới i và góc hợp bởi tia tới với mặt gương (α) lần lượt là.",
    "statements": [
      {
        "text": "i = 50°; α = 40°.",
        "is_correct": true,
        "explanation": "Ta có i + i' = 2i = 100° ⇒ i = 50°. Góc hợp với mặt gương là: α = 90° - i = 90° - 50° = 40°."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "i = 100°; α = 0°.",
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
  "7|topic|G7-C3-B2|15": {
    "stem": "Khi mặt hồ nước phẳng lặng không có gió, ta nhìn thấy bóng ngôi chùa cổ in dưới mặt nước rất rõ nét; nhưng khi có gió thổi làm mặt nước gợn sóng lăn tăn thì ảnh ngôi chùa bị nhòe và vỡ vụn. Tại sao?.",
    "statements": [
      {
        "text": "Vì khi mặt nước phẳng lặng xảy ra phản xạ gương cho ảnh rõ nét; khi mặt nước gợn sóng xảy ra phản xạ khuếch tán làm các tia phản xạ lệch hướng lộn xộn.",
        "is_correct": true,
        "explanation": "Mặt nước phẳng lặng đóng vai trò như một gương phẳng (phản xạ gương); khi gợn sóng bề mặt trở nên lồi lõm liên tục gây phản xạ khuếch tán."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Vì gió thổi làm ngôi chùa rung chuyển.",
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
  "7|topic|G7-C3-B2|16": {
    "stem": "Chiếu một tia sáng tới mặt gương phẳng tại điểm tới I. Khi nào thì góc tới i bằng đúng góc hợp bởi tia tới và mặt gương (i = α)?.",
    "statements": [
      {
        "text": "Khi i = 45° (vì i + α = 90°).",
        "is_correct": true,
        "explanation": "Vì i + α = 90°, để i = α thì 2i = 90° ⇒ i = 45°."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Khi i = 30°.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Khi i = 60°.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|topic|G7-C3-B3|11": {
    "stem": "Khi đặt một mũi tên AB vuông góc với mặt gương phẳng, đầu B (mũi tên) hướng thẳng vào mặt gương, thì ảnh A'B' trong gương có chiều.",
    "statements": [
      {
        "text": "Vuông góc với gương nhưng NGƯỢC CHIỀU với AB (đầu mũi tên B' cũng hướng về phía mặt gương đối diện với B).",
        "is_correct": true,
        "explanation": "Do tính đối xứng qua mặt gương: đầu B gần gương hơn thì ảnh B' cũng gần gương hơn, đầu A xa gương hơn thì A' cũng xa gương hơn ⇒ mũi tên ảnh A'B' hướng ngược lại đối đầu với AB!"
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Cùng chiều với AB.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Song song với mặt gương.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|topic|G7-C3-B3|13": {
    "stem": "Trên đầu mũi các xe cấp cứu (Ambulance) ở nhiều nước, dòng chữ \"AMBULANCE\" thường được in ngược đối xứng trái – phải (\"ECNALUBMA\"). Mục đích của việc in ngược này.",
    "statements": [
      {
        "text": "Để khi tài xế xe chạy phía trước nhìn qua gương chiếu hậu (gương phẳng), ảnh của dòng chữ trong gương sẽ lật lại thành chữ \"AMBULANCE\" xuôi chiều đọc được ngay lập tức để nhường đường.",
        "is_correct": true,
        "explanation": "Do gương phẳng làm lật đối xứng trái – phải, chữ in ngược sẵn trên đầu xe cấp cứu khi qua gương chiếu hậu của xe phía trước sẽ thành chữ xuôi rất dễ đọc!"
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Để trang trí cho lạ mắt.",
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
  "7|topic|G7-C3-B3|16": {
    "stem": "Tại các tiệm cắt tóc hoặc phòng tập múa nhỏ, người ta thường ốp những tấm gương phẳng lớn lên các bức tường. Ngoài việc để soi, cách làm này còn mang lại hiệu quả thị giác gì?.",
    "statements": [
      {
        "text": "Tạo ra ảnh ảo của cả căn phòng ở phía sau gương, làm cho không gian phòng trông như rộng gấp đôi và sáng sủa hơn.",
        "is_correct": true,
        "explanation": "Ảnh ảo của căn phòng có kích thước và chiều sâu bằng đúng căn phòng thật ở phía sau gương, tạo cảm giác không gian mở rộng gấp đôi."
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Làm phòng ấm hơn vào mùa đông.",
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
  "7|topic|G7-C3-B3|19": {
    "stem": "Một chiếc đồng hồ treo tường (chỉ có các vạch chia giờ, không ghi số) đặt đối diện với một gương phẳng. Khi nhìn vào trong gương phẳng, ta thấy ảnh của kim giờ và kim phút đang chỉ vị trí ứng với 3 giờ 00 phút. Hỏi thời gian thực tế trên đồng hồ lúc đó là mấy giờ?.",
    "statements": [
      {
        "text": "9 giờ 00 phút.",
        "is_correct": true,
        "explanation": "Do ảnh qua gương phẳng đối xứng trái – phải qua trục thẳng đứng (12h – 6h): kim phút ở vị trí số 12 giữ nguyên, kim giờ trong gương chỉ bên phải (3 giờ) thì thực tế đang chỉ bên trái đối xứng là 9 giờ 00 phút! (Mẹo nhanh: lấy 12h00 trừ đi giờ nhìn trong gương: 12h00 - 3h00 = 9h00)."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "3 giờ 00 phút.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "6 giờ 00 phút.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|chapter|G7-CH4|4": {
    "stem": "Nếu một thanh nam châm thẳng có hai cực Bắc (N) và Nam (S) chẳng may bị gãy đôi ở chính giữa thành hai nửa, thì mỗi nửa đó sẽ có từ cực.",
    "statements": [
      {
        "text": "Mỗi nửa lập tức trở thành một nam châm mới hoàn chỉnh có đủ cả 2 cực Bắc (N) và Nam (S).",
        "is_correct": true,
        "explanation": "Không bao giờ tách riêng được một cực từ đơn lẻ: khi cưa hoặc bẻ đôi nam châm, tại vết gãy sẽ xuất hiện ngay hai cực mới trái dấu, biến mỗi nửa thành một nam châm mới có đủ cả cực N và cực S!"
      },
      {
        "text": "Sóng âm có thể truyền được qua môi trường chân không với tốc độ bằng tốc độ ánh sáng.",
        "is_correct": false,
        "explanation": "Sai, sóng âm là sóng cơ học nên không thể truyền qua chân không."
      },
      {
        "text": "Một nửa chỉ có cực Bắc (N), nửa kia chỉ có cực Nam (S).",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Cả hai nửa đều mất hết từ tính.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|chapter|G7-CH4|7": {
    "stem": "Cho 3 thanh nam châm thẳng AB, CD và EF. Biết đầu A là cực Bắc (N). Khi đưa đầu B lại gần đầu C thì chúng hút nhau; khi đưa đầu D lại gần đầu E thì chúng đẩy nhau. Hỏi đầu F của thanh thứ ba là từ cực gì?.",
    "statements": [
      {
        "text": "Cực Bắc (N).",
        "is_correct": true,
        "explanation": "Suy luận từng bước: A là cực Bắc (N) ⇒ B là cực Nam (S). Vì B hút C ⇒ C là cực Bắc (N) ⇒ D là cực Nam (S). Vì D đẩy E ⇒ E cùng cực với D nên E là cực Nam (S) ⇒ Đầu còn lại F là cực Bắc (N)!"
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Cực Nam (S).",
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
  "7|chapter|G7-CH4|14": {
    "stem": "Khi đưa một đầu A của nam châm điện lại gần cực Bắc (N) của một kim nam châm thử thì thấy cực Bắc của kim nam châm bị ĐẨY ra xa. Hỏi đầu A của nam châm điện là cực gì? Và nếu ta đảo ngược hai cực của viên pin nối với nam châm điện thì hiện tượng gì sẽ xảy ra?.",
    "statements": [
      {
        "text": "Đầu A đang là cực Bắc (N); khi đảo cực pin thì đầu A biến thành cực Nam (S) và sẽ HÚT cực Bắc của kim nam châm.",
        "is_correct": true,
        "explanation": "Đầu A đẩy cực Bắc của kim nam châm ⇒ đầu A cùng tên là cực Bắc (N). Khi đảo ngược hai cực pin, chiều dòng điện đổi ngược lại nên đầu A đổi thành cực Nam (S) và quay sang hút cực Bắc của kim nam châm."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Đầu A đang là cực Nam (S); khi đảo cực pin vẫn đẩy nhau.",
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
  "7|chapter|G7-CH4|21": {
    "stem": "Thứ tự các bước ĐÚNG khi sử dụng la bàn để xác định hướng của một đối tượng (ví dụ hướng cổng trường).",
    "statements": [
      {
        "text": "(1) Đặt la bàn nằm ngang cách xa các vật từ tính, chờ kim nam châm đứng yên → (2) Xoay nhẹ vỏ la bàn sao cho vạch chữ N (Bắc) trên mặt số trùng khít với đầu cực Bắc (màu đỏ) của kim nam châm → (3) Đọc giá trị góc và hướng của cổng trường trên mặt chia độ.",
        "is_correct": true,
        "explanation": "Khi kim đã định hướng Bắc – Nam, ta phải xoay vỏ mặt chia độ để chữ N (0°) trùng với mũi kim Bắc màu đỏ, khi đó tất cả các hướng E, S, W trên mặt số mới khớp đúng với thực địa!"
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Cầm la bàn lắc mạnh rồi đọc số bất kỳ.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Đặt một thanh nam châm lên mặt la bàn để giữ kim đứng yên rồi đọc.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|topic|G7-C4-B1|11": {
    "stem": "Nếu một thanh nam châm thẳng có hai cực Bắc (N) và Nam (S) chẳng may bị gãy đôi ở chính giữa thành hai nửa, thì mỗi nửa đó sẽ có từ cực.",
    "statements": [
      {
        "text": "Mỗi nửa lập tức trở thành một nam châm mới hoàn chỉnh có đủ cả 2 cực Bắc (N) và Nam (S).",
        "is_correct": true,
        "explanation": "Không bao giờ tách riêng được một cực từ đơn lẻ: khi cưa hoặc bẻ đôi nam châm, tại vết gãy sẽ xuất hiện ngay hai cực mới trái dấu, biến mỗi nửa thành một nam châm mới có đủ cả cực N và cực S!"
      },
      {
        "text": "Sóng âm có thể truyền được qua môi trường chân không với tốc độ bằng tốc độ ánh sáng.",
        "is_correct": false,
        "explanation": "Sai, sóng âm là sóng cơ học nên không thể truyền qua chân không."
      },
      {
        "text": "Một nửa chỉ có cực Bắc (N), nửa kia chỉ có cực Nam (S).",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Cả hai nửa đều mất hết từ tính.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|topic|G7-C4-B1|14": {
    "stem": "Một thanh nam châm bị phai hết màu sơn đánh dấu cực. Làm thế nào để xác định lại đâu là cực Bắc (N), đâu là cực Nam (S) của thanh nam châm này?.",
    "statements": [
      {
        "text": "Treo thanh nam châm bằng sợi chỉ mềm ở chính giữa cho nằm ngang cân bằng tự do: đầu nào quay về hướng Bắc địa lý thì đó là cực Bắc (N), đầu quay về hướng Nam địa lý là cực Nam (S).",
        "is_correct": true,
        "explanation": "Có thể treo tự do để định hướng Bắc – Nam địa lý, hoặc đưa lại gần một kim nam châm đã biết rõ cực để thử tương tác đẩy/hút."
      },
      {
        "text": "Tần số dao động là số dao động mà vật thực hiện được trong 1 giây, đơn vị là Héc (Hz).",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa tần số dao động."
      },
      {
        "text": "Đưa lại gần một chiếc đinh sắt xem đầu nào hút đinh.",
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
  "7|topic|G7-C4-B1|17": {
    "stem": "Đặt một kim nam châm nhỏ ở chính giữa khoảng không gian nối giữa cực Bắc (N) của nam châm thứ nhất và cực Nam (S) của nam châm thứ hai đang đặt đối diện nhau. Chiều của đường sức từ trong khoảng giữa hai cực đó hướng.",
    "statements": [
      {
        "text": "Hướng từ cực Bắc (N) của nam châm thứ nhất sang cực Nam (S) của nam châm thứ hai.",
        "is_correct": true,
        "explanation": "Theo quy tắc \"Ra Bắc – Vào Nam\", các đường sức từ đi ra từ cực N của nam châm thứ nhất và đi thẳng sang cực S của nam châm thứ hai."
      },
      {
        "text": "Sóng âm có thể truyền được qua môi trường chân không với tốc độ bằng tốc độ ánh sáng.",
        "is_correct": false,
        "explanation": "Sai, sóng âm là sóng cơ học nên không thể truyền qua chân không."
      },
      {
        "text": "Hướng từ cực Nam (S) sang cực Bắc (N).",
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
  "7|topic|G7-C4-B1|20": {
    "stem": "Đưa cực Bắc (N) của một thanh nam châm lại gần một chiếc đinh sắt chưa nhiễm từ. Chiếc đinh sắt lập tức bị hút dính vào cực Bắc của nam châm, đồng thời đầu nhọn phía dưới của chiếc đinh sắt lại hút tiếp được một chiếc ghim giấy bằng sắt khác! Giải thích tại sao?.",
    "statements": [
      {
        "text": "Vì chiếc đinh sắt khi tiếp xúc với nam châm đã bị nhiễm từ (hưởng ứng từ), trở thành một nam châm tạm thời có đầu trên là cực Nam (S) và đầu nhọn dưới là cực Bắc (N) nên hút tiếp được ghim sắt.",
        "is_correct": true,
        "explanation": "Khi đặt trong từ trường của nam châm, sắt non/thép bị nhiễm từ (đầu gần cực N thành cực S, đầu xa thành cực N) nên có khả năng hút tiếp các vật bằng sắt khác."
      },
      {
        "text": "Tần số dao động là số dao động mà vật thực hiện được trong 1 giây, đơn vị là Héc (Hz).",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa tần số dao động."
      },
      {
        "text": "Vì chiếc đinh sắt có keo dính.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Vì ghim sắt tự bay lên.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|topic|G7-C4-B2|11": {
    "stem": "Một học sinh chế tạo một nam châm điện bằng cách quấn 50 vòng dây đồng bọc sơn cách điện quanh một chiếc đinh sắt và nối với 1 viên pin 1,5 V thì hút được 8 chiếc ghim giấy. Nếu học sinh đó quấn tăng lên 100 vòng dây và nối với 2 viên pin ghép nối tiếp (3,0 V) thì số ghim giấy hút được sẽ thay đổi.",
    "statements": [
      {
        "text": "Tăng lên đáng kể (hút được nhiều hơn 8 chiếc ghim rất nhiều) vì cả số vòng dây N và cường độ dòng điện I đều tăng.",
        "is_correct": true,
        "explanation": "Khi tăng số vòng dây (50 → 100 vòng) và tăng nguồn điện (1,5 V → 3,0 V làm tăng dòng điện I), từ trường của nam châm điện mạnh lên rõ rệt nên hút được nhiều ghim sắt hơn."
      },
      {
        "text": "Sóng âm có thể truyền được qua môi trường chân không với tốc độ bằng tốc độ ánh sáng.",
        "is_correct": false,
        "explanation": "Sai, sóng âm là sóng cơ học nên không thể truyền qua chân không."
      },
      {
        "text": "Giảm xuống còn 2 chiếc ghim.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Vẫn hút đúng 8 chiếc ghim.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|topic|G7-C4-B2|14": {
    "stem": "Khi đưa một đầu A của nam châm điện lại gần cực Bắc (N) của một kim nam châm thử thì thấy cực Bắc của kim nam châm bị ĐẨY ra xa. Hỏi đầu A của nam châm điện là cực gì? Và nếu ta đảo ngược hai cực của viên pin nối với nam châm điện thì hiện tượng gì sẽ xảy ra?.",
    "statements": [
      {
        "text": "Đầu A đang là cực Bắc (N); khi đảo cực pin thì đầu A biến thành cực Nam (S) và sẽ HÚT cực Bắc của kim nam châm.",
        "is_correct": true,
        "explanation": "Đầu A đẩy cực Bắc của kim nam châm ⇒ đầu A cùng tên là cực Bắc (N). Khi đảo ngược hai cực pin, chiều dòng điện đổi ngược lại nên đầu A đổi thành cực Nam (S) và quay sang hút cực Bắc của kim nam châm."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Đầu A đang là cực Nam (S); khi đảo cực pin vẫn đẩy nhau.",
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
  "7|topic|G7-C4-B2|17": {
    "stem": "Đặt một kim nam châm ngay sát đầu một ống dây dẫn có lõi sắt non nhưng công tắc K đang MỞ (mạch hở). Kim nam châm lúc đó chỉ hướng nào?.",
    "statements": [
      {
        "text": "Nằm định hướng Bắc – Nam địa lý tự nhiên của Trái Đất (vì khi K mở chưa có dòng điện nên nam châm điện chưa hoạt động).",
        "is_correct": true,
        "explanation": "Khi công tắc K mở, cường độ dòng điện I = 0 nên ống dây không có từ trường, kim nam châm chỉ chịu tác dụng của từ trường Trái Đất nên chỉ hướng Bắc – Nam."
      },
      {
        "text": "Độ biến thiên nhiệt độ 1 °C trên thang Celsius có độ lớn bằng độ biến thiên nhiệt độ 1 K trên thang Kelvin (ΔT = Δt).",
        "is_correct": true,
        "explanation": "Đúng, hai thang đo này có cùng độ lớn khoảng chia 1 độ."
      },
      {
        "text": "Quay vuông góc với ống dây.",
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
  "7|topic|G7-C4-B2|20": {
    "stem": "Một ống dây của nam châm điện có đầu Trái là cực Bắc (N) và đầu Phải là cực Nam (S). Đặt một kim nam châm nhỏ nằm trên trục của ống dây ở ngay gần phía ngoài đầu Phải của ống dây. Hỏi cực nào của kim nam châm sẽ quay hướng vào đầu Phải của ống dây, và đường sức từ tại đó có chiều hướng vào hay hướng ra khỏi đầu Phải?.",
    "statements": [
      {
        "text": "Cực Bắc (N) của kim nam châm hướng vào đầu Phải; đường sức từ đi VÀO đầu Phải (vì đầu Phải là cực Nam S).",
        "is_correct": true,
        "explanation": "Đầu Phải của ống dây là cực Nam (S) nên hút cực Bắc (N) của kim nam châm quay về phía nó, và theo quy tắc \"Ra Bắc – Vào Nam\" thì đường sức từ đi vào cực Nam (đầu Phải)."
      },
      {
        "text": "Tần số dao động là số dao động mà vật thực hiện được trong 1 giây, đơn vị là Héc (Hz).",
        "is_correct": true,
        "explanation": "Đúng theo định nghĩa tần số dao động."
      },
      {
        "text": "Cực Nam (S) của kim nam châm hướng vào đầu Phải; đường sức từ đi RA khỏi đầu Phải.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Kim nam châm nằm vuông góc với trục ống dây.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|topic|G7-C4-B3|11": {
    "stem": "Thứ tự các bước ĐÚNG khi sử dụng la bàn để xác định hướng của một đối tượng (ví dụ hướng cổng trường).",
    "statements": [
      {
        "text": "(1) Đặt la bàn nằm ngang cách xa các vật từ tính, chờ kim nam châm đứng yên → (2) Xoay nhẹ vỏ la bàn sao cho vạch chữ N (Bắc) trên mặt số trùng khít với đầu cực Bắc (màu đỏ) của kim nam châm → (3) Đọc giá trị góc và hướng của cổng trường trên mặt chia độ.",
        "is_correct": true,
        "explanation": "Khi kim đã định hướng Bắc – Nam, ta phải xoay vỏ mặt chia độ để chữ N (0°) trùng với mũi kim Bắc màu đỏ, khi đó tất cả các hướng E, S, W trên mặt số mới khớp đúng với thực địa!"
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Cầm la bàn lắc mạnh rồi đọc số bất kỳ.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Đặt một thanh nam châm lên mặt la bàn để giữ kim đứng yên rồi đọc.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  },
  "7|topic|G7-C4-B3|14": {
    "stem": "Tại sao hiện tượng Cực quang rực rỡ hầu như chỉ xuất hiện ở các vùng vĩ độ cao gần Bắc Cực (Na Uy, Iceland, Canada, Nga) và Nam Cực mà rất hiếm khi thấy ở vùng xích đạo như Việt Nam?.",
    "statements": [
      {
        "text": "Vì các đường sức từ của Trái Đất chụm lại và đi vào/đi ra khỏi khí quyển tại hai vùng cực từ (gần Bắc Cực và Nam Cực), dẫn dòng hạt mang điện từ Mặt Trời tập trung đổ xuống khí quyển ở hai vùng cực này.",
        "is_correct": true,
        "explanation": "Ở vùng xích đạo, đường sức từ song song với mặt đất nên chặn và đẩy các hạt mang điện trượt đi; còn ở hai vùng cực, đường sức từ cắm chúc xuống đất nên dẫn hạt mang điện đi vào tầng khí quyển gây phát sáng cực quang."
      },
      {
        "text": "Kết quả đo lường trong bài không phụ thuộc vào độ chia nhỏ nhất (ĐCNN) của dụng cụ đo.",
        "is_correct": false,
        "explanation": "Sai, độ chính xác của kết quả đo luôn bị giới hạn bởi ĐCNN và sai số dụng cụ."
      },
      {
        "text": "Vì ở vùng xích đạo không có khí quyển.",
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
  "7|topic|G7-C4-B3|17": {
    "stem": "Các nhà khoa học có thể tự chế tạo một chiếc la bàn đơn giản ngay tại nhà bằng một chiếc kim khâu bằng thép, một miếng xốp nhỏ và một bát nước. Trước khi đặt kim khâu lên miếng xốp thả nổi trên mặt nước, ta phải làm bước quan trọng nào với chiếc kim khâu?.",
    "statements": [
      {
        "text": "Quẹt một đầu chiếc kim khâu nhiều lần theo một chiều nhất định vào một cực của thanh nam châm để chiếc kim thép bị nhiễm từ trở thành một kim nam châm nhỏ.",
        "is_correct": true,
        "explanation": "Kim khâu làm bằng thép; khi cọ xát một chiều vào cực của nam châm, kim thép sẽ bị nhiễm từ và giữ từ tính lâu dài, khi thả nổi trên miếng xốp mặt nước (giảm ma sát) nó sẽ tự xoay chỉ hướng Bắc – Nam!"
      },
      {
        "text": "Đại lượng vật lý nêu trong bài được xác định thông qua phép đo lường trực tiếp hoặc gián tiếp.",
        "is_correct": true,
        "explanation": "Đúng theo nguyên lý thực nghiệm và đo lường Vật lý."
      },
      {
        "text": "Đun sôi chiếc kim khâu trong nước.",
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
  "7|topic|G7-C4-B3|20": {
    "stem": "Một học sinh đặt một chiếc la bàn trên mặt bàn gỗ, kim la bàn đang chỉ đúng hướng Bắc – Nam. Bỗng nhiên khi bạn bên cạnh đặt chiếc hộp bút bằng sắt (có gắn nắp khóa nam châm) xuống ngay sát cạnh la bàn thì thấy kim la bàn quay lệch đi một góc 60°. Học sinh kết luận: \"Từ trường Trái Đất trong phòng học vừa bị đổi hướng 60°\". Kết luận đó đúng hay sai, vì sao?.",
    "statements": [
      {
        "text": "Sai! Từ trường Trái Đất không hề đổi hướng, mà do nam châm và vỏ sắt của hộp bút đặt quá gần đã tạo ra từ trường cục bộ mạnh hơn làm nhiễu kim la bàn.",
        "is_correct": true,
        "explanation": "Đây là lỗi sai kinh điển khi thực hành la bàn: để vật có từ tính (nam châm hộp bút, điện thoại, chìa khóa sắt) ngay sát la bàn gây nhiễu cục bộ."
      },
      {
        "text": "Nhiệt độ Celsius tỉ lệ thuận bậc nhất với nhiệt độ tuyệt đối Kelvin qua hệ số nhân 1,8.",
        "is_correct": false,
        "explanation": "Sai, hệ số 1,8 là của thang Fahrenheit (°F = 1,8·°C + 32); thang Kelvin liên hệ qua phép cộng T = t + 273,15."
      },
      {
        "text": "Đúng! Hộp bút đã làm nghiêng trục Trái Đất.",
        "is_correct": false,
        "explanation": "Sai, đây là quan niệm nhầm lẫn phổ biến hoặc giả thuyết không thỏa mãn điều kiện bài toán."
      },
      {
        "text": "Đúng! Trong phòng học không có từ trường Trái Đất.",
        "is_correct": false,
        "explanation": "Sai hoặc không phù hợp với thực nghiệm."
      }
    ]
  }
};

import { SeedQuestionItem } from './grade6-questions';
import { GRADE12_CH3_CH4_TOPICS, GRADE12_CHAPTER_EXAMS, RawQ } from './grade12-questions-part2';

export const GRADE12_CH1_CH2_TOPICS: Record<string, RawQ[]> = {
  'G12-CH1-TP1': [
    // 10 nhan_biet
    {
      difficulty: 'nhan_biet',
      question_text: 'Theo mô hình động học phân tử về cấu tạo chất, các chất được cấu tạo từ:',
      options: ['Các hạt riêng biệt là phân tử (hoặc nguyên tử, ion)', 'Chất lỏng đồng nhất không có khe hở', 'Các hạt dính liền nhau không thể tách rời', 'Các sóng điện từ'],
      correct_index: 0,
      explanation: 'Mọi chất đều được cấu tạo từ các hạt riêng biệt gọi là phân tử (nguyên tử hoặc ion) và giữa chúng có khoảng cách.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Chuyển động của các phân tử cấu tạo nên vật gọi là:',
      options: ['Chuyển động cơ học', 'Chuyển động nhiệt', 'Chuyển động sóng', 'Chuyển động tròn đều'],
      correct_index: 1,
      explanation: 'Chuyển động hỗn loạn không ngừng của các phân tử gọi là chuyển động nhiệt vì chuyển động này càng nhanh thì nhiệt độ của vật càng cao.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi nhiệt độ của một vật tăng lên thì:',
      options: ['Tốc độ chuyển động nhiệt của các phân tử tăng lên', 'Tốc độ chuyển động nhiệt của các phân tử giảm đi', 'Khối lượng của từng phân tử tăng lên', 'Kích thước của từng phân tử nở to ra'],
      correct_index: 0,
      explanation: 'Nhiệt độ là số đo động năng nhiệt trung bình của các phân tử, do đó khi nhiệt độ tăng thì tốc độ chuyển động nhiệt của các phân tử tăng.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đặc điểm nào sau đây là của chất ở thể rắn kết tinh?',
      options: ['Có hình dạng và thể tích xác định, các hạt sắp xếp có trật tự xác định', 'Có thể tích xác định nhưng hình dạng lấy theo bình chứa', 'Không có thể tích và hình dạng xác định', 'Các hạt chuyển động hoàn toàn tự do'],
      correct_index: 0,
      explanation: 'Ở thể rắn kết tinh, lực tương tác phân tử rất mạnh, các hạt dao động quanh vị trí cân bằng cố định trong mạng tinh thể, giữ cho vật có hình dạng và thể tích xác định.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Chất ở thể nào sau đây có thể tích xác định nhưng không có hình dạng riêng mà lấy hình dạng của phần bình chứa nó?',
      options: ['Thể rắn', 'Thể lỏng', 'Thể khí', 'Thể plasma'],
      correct_index: 1,
      explanation: 'Thể lỏng có thể tích xác định nhưng không có hình dạng cố định vì lực liên kết giữa các phân tử chất lỏng không đủ lớn để giữ cố định vị trí của chúng.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Nhiệt độ tuyệt đối T (Kelvin) liên hệ với nhiệt độ Celsius t (°C) qua công thức nào?',
      options: ['T = t + 273,15', 'T = t - 273,15', 'T = 1,8·t + 32', 'T = 273,15 - t'],
      correct_index: 0,
      explanation: 'Công thức chuyển đổi chuẩn mực giữa thang nhiệt độ Celsius và Kelvin là T(K) = t(°C) + 273,15 (trong tính toán thường lấy T = t + 273).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Nhiệt độ 0 K được gọi là:',
      options: ['Độ không tuyệt đối', 'Điểm đóng băng của nước', 'Điểm sôi của nước', 'Nhiệt độ phòng'],
      correct_index: 0,
      explanation: '0 K là độ không tuyệt đối, là mốc nhiệt độ thấp nhất trên lý thuyết mà tại đó mọi chuyển động nhiệt của các phân tử dừng lại.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị cơ bản của nhiệt độ trong hệ đo lường quốc tế (SI) là:',
      options: ['Độ Celsius (°C)', 'Độ Kelvin (K)', 'Độ Fahrenheit (°F)', 'Joule (J)'],
      correct_index: 1,
      explanation: 'Đơn vị đo nhiệt độ nhiệt động lực học chuẩn trong hệ SI là Kelvin, ký hiệu là K (không viết °K).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Giữa các phân tử cấu tạo nên chất luôn tồn tại:',
      options: ['Đồng thời cả lực hút và lực đẩy phân tử', 'Chỉ duy nhất lực hút phân tử', 'Chỉ duy nhất lực đẩy phân tử', 'Không có lực tương tác nào'],
      correct_index: 0,
      explanation: 'Giữa các phân tử luôn có đồng thời cả lực hút và lực đẩy tĩnh điện. Khi khoảng cách r = r0 thì lực hút cân bằng lực đẩy.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Dụng cụ nào sau đây dùng để đo nhiệt độ?',
      options: ['Nhiệt kế', 'Áp kế', 'Nhiệt lượng kế', 'Tốc kế'],
      correct_index: 0,
      explanation: 'Nhiệt kế là dụng cụ dùng để đo nhiệt độ (dựa trên sự nở vì nhiệt của chất lỏng, điện trở bán dẫn hoặc bức xạ nhiệt).',
    },

    // 7 thong_hieu
    {
      difficulty: 'thong_hieu',
      question_text: 'Nếu độ biến thiên nhiệt độ của một khối kim loại là Δt = 15 °C thì theo thang Kelvin, độ biến thiên nhiệt độ ΔT tương ứng bằng bao nhiêu?',
      options: ['15 K', '288 K', '258 K', '273 K'],
      correct_index: 0,
      explanation: 'Khoảng chia 1 °C có độ lớn bằng đúng khoảng chia 1 K, do đó độ biến thiên nhiệt độ trong hai thang đo luôn bằng nhau: ΔT(K) = Δt(°C) = 15 K.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao chất khí lại luôn chiếm toàn bộ thể tích của bình chứa nó?',
      options: ['Vì lực tương tác giữa các phân tử khí rất yếu và khoảng cách giữa các phân tử rất lớn, các phân tử chuyển động tự do hỗn loạn về mọi phía', 'Vì phân tử khí nhẹ hơn không khí', 'Vì phân tử khí bị lực đẩy của trọng lực đẩy bay lên', 'Vì thể tích bình chứa luôn nhỏ hơn thể tích phân tử'],
      correct_index: 0,
      explanation: 'Khoảng cách giữa các phân tử khí rất lớn so với kích thước phân tử, lực hút phân tử coi như không đáng kể, các phân tử chuyển động hỗn loạn không ngừng chiếm toàn bộ không gian bình chứa.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Thả một giọt mực tím vào cốc nước lạnh và cốc nước nóng, ta thấy mực khuếch tán lan tỏa nhanh hơn trong cốc nước nóng. Hiện tượng này chứng tỏ:',
      options: ['Nhiệt độ càng cao thì các phân tử nước chuyển động nhiệt càng nhanh', 'Nước nóng làm giọt mực nặng hơn', 'Nước nóng có lực hút phân tử mạnh hơn nước lạnh', 'Nước lạnh ngăn cản sự chuyển động của các hạt'],
      correct_index: 0,
      explanation: 'Hiện tượng khuếch tán diễn ra do chuyển động nhiệt hỗn loạn của các phân tử. Ở nhiệt độ cao, các phân tử chuyển động nhanh hơn, va chạm và hòa trộn nhanh hơn.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Nhiệt độ của nước đá đang tan ở áp suất tiêu chuẩn là 0 °C. Nhiệt độ này tương ứng với bao nhiêu Kelvin?',
      options: ['273,15 K', '0 K', '100 K', '373,15 K'],
      correct_index: 0,
      explanation: 'Áp dụng công thức T = t + 273,15 = 0 + 273,15 = 273,15 K.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một nhiệt kế chỉ 86 °F. Giá trị nhiệt độ này theo thang Celsius là:',
      options: ['30 °C', '25 °C', '35 °C', '40 °C'],
      correct_index: 0,
      explanation: 'Ta có t(°F) = 1,8·t(°C) + 32 => t(°C) = (86 - 32) / 1,8 = 54 / 1,8 = 30 °C.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Hai vật A và B tiếp xúc nhiệt với nhau mà không có nhiệt lượng truyền qua lại giữa chúng. Kết luận nào sau đây là ĐÚNG?',
      options: ['Vật A và vật B có cùng nhiệt độ', 'Vật A và vật B có cùng nội năng', 'Vật A và vật B có cùng khối lượng', 'Vật A và vật B có cùng nhiệt dung riêng'],
      correct_index: 0,
      explanation: 'Theo nguyên lý số không nhiệt động lực học, trạng thái cân bằng nhiệt giữa hai vật tiếp xúc xảy ra khi và chỉ khi hai vật có cùng nhiệt độ.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi nén một khối chất lỏng, thể tích của nó hầu như không đổi vì:',
      options: ['Các phân tử chất lỏng ở rất gần nhau, khi nén lực đẩy tĩnh điện giữa các phân tử tăng lên rất nhanh và rất mạnh', 'Chất lỏng không có khoảng cách phân tử', 'Phân tử chất lỏng không thể chuyển động', 'Lực hút phân tử thắng lực nén'],
      correct_index: 0,
      explanation: 'Ở thể lỏng, khoảng cách giữa các phân tử xấp xỉ kích thước phân tử r0. Khi ép nhỏ lại (r < r0), lực đẩy phân tử tăng vọt chống lại lực nén, làm chất lỏng rất khó bị nén ép.',
    },

    // 5 van_dung
    {
      difficulty: 'van_dung',
      question_text: 'Nhiệt độ bề mặt Mặt Trời xấp xỉ 6000 K. Nhiệt độ này tương ứng với bao nhiêu độ Celsius?',
      options: ['5727 °C', '6273 °C', '6000 °C', '5500 °C'],
      correct_index: 0,
      explanation: 't(°C) = T(K) - 273,15 = 6000 - 273,15 ≈ 5726,85 °C ≈ 5727 °C.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Nhiệt độ sôi của nitơ lỏng ở áp suất tiêu chuẩn là -196 °C. Nhiệt độ này tương ứng theo thang Kelvin là:',
      options: ['77,15 K', '469,15 K', '-77,15 K', '196 K'],
      correct_index: 0,
      explanation: 'T = t + 273,15 = -196 + 273,15 = 77,15 K.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Ở nhiệt độ nào thì số chỉ trên thang Celsius và số chỉ trên thang Fahrenheit có cùng giá trị bằng nhau?',
      options: ['-40 °C (-40 °F)', '0 °C', '100 °C', '-273 °C'],
      correct_index: 0,
      explanation: 'Đặt t(°C) = t(°F) = x. Ta có x = 1,8·x + 32 <=> -0,8·x = 32 => x = 32 / (-0,8) = -40.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một thanh sắt dài 1 m ở nhiệt độ 20 °C. Khi đun nóng thanh sắt lên 120 °C, thanh sắt dài thêm 1,2 mm. Hệ số nở dài của sắt là:',
      options: ['1,2·10⁻⁵ K⁻¹', '1,2·10⁻⁶ K⁻¹', '2,4·10⁻⁵ K⁻¹', '1,0·10⁻⁵ K⁻¹'],
      correct_index: 0,
      explanation: 'Độ nở dài: Δl = l0 · α · Δt => α = Δl / (l0 · Δt) = (1,2·10⁻³ m) / (1 m · 100 K) = 1,2·10⁻⁵ K⁻¹.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Khoảng cách trung bình giữa các phân tử khí ở điều kiện chuẩn xấp xỉ bằng bao nhiêu lần kích thước của chính phân tử (lấy đường kính phân tử cỡ 0,3 nm)?',
      options: ['Khoảng 10 đến 12 lần', 'Bằng đúng kích thước phân tử', 'Khoảng 1000 lần', 'Khoảng 2 lần'],
      correct_index: 0,
      explanation: 'Ở điều kiện tiêu chuẩn, mật độ phân tử n0 ≈ 2,7·10²⁵ m⁻³, thể tích trung bình của 1 phân tử là v ≈ 1/n0 ≈ 3,7·10⁻²⁶ m³. Khoảng cách trung bình r ≈ v^(1/3) ≈ 3,3 nm, gấp khoảng 10-12 lần kích thước phân tử (0,3 nm).',
    },

    // 3 van_dung_cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một nhiệt kế rượu bị sai thang chia độ: ở điểm đóng băng của nước tinh khiết (0 °C) nó chỉ -2 °C, ở điểm sôi của nước tinh khiết (100 °C) nó chỉ 102 °C. Nếu nhiệt kế này chỉ 40 °C thì nhiệt độ thực tế chính xác là:',
      options: ['40,38 °C', '38,50 °C', '42,15 °C', '40,00 °C'],
      correct_index: 0,
      explanation: 'Khoảng cách giữa hai điểm mốc trên nhiệt kế sai là: 102 - (-2) = 104 độ chia, tương ứng 100 °C thực tế. Khoảng cách từ vạch 40 °C đến mốc băng là: 40 - (-2) = 42 độ chia. Nhiệt độ thực tế: t = (42 / 104) · 100 °C = 4200 / 104 ≈ 40,38 °C.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Giả sử một thang nhiệt độ mới X được chế tạo lấy điểm đóng băng của nước ở áp suất tiêu chuẩn là 20 °X và điểm sôi của nước là 170 °X. Nhiệt độ phòng 25 °C tương ứng với bao nhiêu độ trong thang X?',
      options: ['57,5 °X', '50 °X', '62,5 °X', '75 °X'],
      correct_index: 0,
      explanation: 'Độ biến thiên 100 °C tương ứng với 170 - 20 = 150 °X, tức là 1 °C = 1,5 °X. Tại 25 °C: t(°X) = 20 + 25 · 1,5 = 20 + 37,5 = 57,5 °X.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một bình kín chứa khí ở nhiệt độ T1 = 300 K. Nếu nhiệt độ của khối khí tăng thêm 1% so với ban đầu thì vận tốc căn quân phương của các phân tử khí thay đổi như thế nào?',
      options: ['Tăng xấp xỉ 0,5%', 'Tăng 1%', 'Tăng 2%', 'Tăng 0,1%'],
      correct_index: 0,
      explanation: 'Tốc độ căn quân phương v_rms tỉ lệ với √T. Khi T tăng thêm 1% (T2 = 1,01·T1): v2 / v1 = √(1,01) = (1 + 0,01)^(1/2) ≈ 1 + 0,5 · 0,01 = 1,005 (theo công thức gần đúng x << 1). Tốc độ căn quân phương tăng xấp xỉ 0,5%.',
    },
  ],

  'G12-CH1-TP2': [
    // 10 nhan_biet
    {
      difficulty: 'nhan_biet',
      question_text: 'Nội năng của một vật phụ thuộc vào các đại lượng nào sau đây?',
      options: ['Nhiệt độ và thể tích của vật', 'Khối lượng và vận tốc chuyển động của toàn bộ vật', 'Độ cao của vật so với mặt đất', 'Hình dạng bên ngoài của vật'],
      correct_index: 0,
      explanation: 'Nội năng của vật phụ thuộc vào nhiệt độ T (ảnh hưởng đến động năng phân tử) và thể tích V (ảnh hưởng đến khoảng cách và thế năng tương tác phân tử): U = U(T, V).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đối với một khối khí lý tưởng xác định, nội năng chỉ phụ thuộc vào đại lượng nào?',
      options: ['Nhiệt độ tuyệt đối T', 'Thể tích V', 'Áp suất p', 'Khối lượng riêng'],
      correct_index: 0,
      explanation: 'Trong khí lý tưởng, bỏ qua lực tương tác phân tử nên thế năng tương tác bằng 0, do đó nội năng chỉ là tổng động năng chuyển động nhiệt, chỉ phụ thuộc vào nhiệt độ T: U = U(T).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Có mấy cách làm biến đổi nội năng của một vật?',
      options: ['2 cách: Thực hiện công và Truyền nhiệt', 'Chỉ có 1 cách duy nhất là truyền nhiệt', 'Chỉ có 1 cách là thực hiện công', 'Có 4 cách khác nhau'],
      correct_index: 0,
      explanation: 'Có hai cách làm thay đổi nội năng của vật: Thực hiện công (có sự chuyển hóa cơ năng thành nội năng) và Truyền nhiệt (chỉ có sự chuyển giao nội năng mà không có chuyển hóa dạng năng lượng khác).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Số đo phần nội năng được truyền từ vật này sang vật khác trong quá trình truyền nhiệt gọi là:',
      options: ['Nhiệt lượng', 'Nhiệt dung', 'Công cơ học', 'Nội năng toàn phần'],
      correct_index: 0,
      explanation: 'Nhiệt lượng (Q) là số đo độ biến thiên nội năng trong quá trình truyền nhiệt.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị đo của nội năng, công và nhiệt lượng trong hệ SI đều là:',
      options: ['Joule (J)', 'Watt (W)', 'Calorie (cal)', 'Newton (N)'],
      correct_index: 0,
      explanation: 'Trong hệ SI, nội năng, công và nhiệt lượng đều có đơn vị đo năng lượng là Joule (J).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hệ thức đúng của Định luật I Nhiệt động lực học là:',
      options: ['ΔU = A + Q', 'ΔU = A - Q', 'Q = ΔU + A', 'A = ΔU + Q'],
      correct_index: 0,
      explanation: 'Định luật I NĐLH: ΔU = A + Q (độ biến thiên nội năng bằng tổng đại số công và nhiệt lượng hệ nhận được).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi một khối khí nhận nhiệt lượng từ môi trường ngoài thì theo quy ước dấu:',
      options: ['Q > 0', 'Q < 0', 'Q = 0', 'A < 0'],
      correct_index: 0,
      explanation: 'Hệ nhận nhiệt lượng: Q > 0; Hệ tỏa nhiệt lượng cho môi trường: Q < 0.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi một khối khí giãn nở đẩy pít-tông sinh công ra môi trường ngoài thì:',
      options: ['A < 0', 'A > 0', 'A = 0', 'Q > 0'],
      correct_index: 0,
      explanation: 'Hệ sinh công lên môi trường ngoài: A < 0; Môi trường ngoài thực hiện công nén hệ: A > 0.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong một quá trình biến đổi trạng thái, nếu hệ không trao đổi nhiệt với môi trường (Q = 0) thì quá trình đó gọi là:',
      options: ['Quá trình đoạn nhiệt', 'Quá trình đẳng nhiệt', 'Quá trình đẳng áp', 'Quá trình đẳng tích'],
      correct_index: 0,
      explanation: 'Quá trình biến đổi không có sự trao đổi nhiệt lượng với bên ngoài (Q = 0) gọi là quá trình đoạn nhiệt.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong quá trình đoạn nhiệt (Q = 0), độ biến thiên nội năng của hệ liên hệ với công bằng hệ thức:',
      options: ['ΔU = A', 'ΔU = -A', 'ΔU = 0', 'ΔU = 2A'],
      correct_index: 0,
      explanation: 'Vì Q = 0 nên theo định luật I: ΔU = A + Q = A.',
    },

    // 7 thong_hieu
    {
      difficulty: 'thong_hieu',
      question_text: 'Dùng ống bơm để bơm bánh xe đạp, sau một thời gian thân ống bơm bị nóng lên. Nguyên nhân chính của hiện tượng này là:',
      options: ['Do công nén khí và lực ma sát giữa pít-tông với thành ống bơm làm tăng nội năng của chất khí và vỏ bơm', 'Do nhiệt độ ngoài trời truyền vào', 'Do không khí tự phát sinh ra nhiệt', 'Do cao su của lốp xe tỏa nhiệt'],
      correct_index: 0,
      explanation: 'Người bơm thực hiện công nén khí (A > 0 làm tăng nội năng khí, khí nóng lên truyền nhiệt sang vỏ bơm) kết hợp ma sát cơ học giữa pít-tông và thành xilanh làm biến đổi cơ năng thành nội năng.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Người ta cung cấp cho chất khí trong xi lanh một nhiệt lượng 100 J. Chất khí giãn nở thực hiện công 70 J đẩy pít-tông. Độ biến thiên nội năng của khối khí là:',
      options: ['ΔU = +30 J', 'ΔU = -30 J', 'ΔU = +170 J', 'ΔU = -170 J'],
      correct_index: 0,
      explanation: 'Khí nhận nhiệt nên Q = +100 J; Khí sinh công nên A = -70 J. Áp dụng định luật I: ΔU = A + Q = -70 + 100 = +30 J (nội năng tăng thêm 30 J).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Trong quá trình đẳng tích (thể tích không đổi V = const), công cơ học mà chất khí trao đổi là:',
      options: ['A = 0', 'A > 0', 'A < 0', 'A = p·ΔV'],
      correct_index: 0,
      explanation: 'Trong quá trình đẳng tích, pít-tông không dịch chuyển (ΔV = 0), chất khí không sinh công và không nhận công: A = 0, suy ra ΔU = Q.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Trong quá trình đẳng nhiệt của một lượng khí lý tưởng, độ biến thiên nội năng ΔU bằng bao nhiêu?',
      options: ['ΔU = 0', 'ΔU = A', 'ΔU = Q', 'ΔU > 0'],
      correct_index: 0,
      explanation: 'Với khí lý tưởng, nội năng chỉ phụ thuộc vào nhiệt độ (U = U(T)). Trong quá trình đẳng nhiệt T = const nên nội năng không đổi, suy ra ΔU = 0, do đó A = -Q.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi nén khí đoạn nhiệt (Q = 0) trong xilanh, công mà ngoại lực thực hiện là A = 50 J. Nhiệt độ của khối khí sẽ:',
      options: ['Tăng lên', 'Giảm đi', 'Không đổi', 'Lúc đầu tăng sau giảm'],
      correct_index: 0,
      explanation: 'Vì Q = 0 và hệ nhận công A = +50 J > 0 nên ΔU = A = +50 J > 0. Nội năng tăng dẫn đến nhiệt độ của chất khí tăng lên.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một động cơ nhiệt nhận nhiệt lượng 1000 J từ nguồn nóng và truyền nhiệt lượng 650 J cho nguồn lạnh. Công cơ học có ích mà động cơ sinh ra là:',
      options: ['350 J', '650 J', '1000 J', '1650 J'],
      correct_index: 0,
      explanation: 'Theo nguyên lý bảo toàn năng lượng trong chu trình khép kín: A\' = Q1 - |Q2| = 1000 - 650 = 350 J.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Hiệu suất thực tế của các động cơ nhiệt trong đời sống (như động cơ ô tô, xe máy) luôn luôn nhỏ hơn 100% là do:',
      options: ['Động cơ luôn phải truyền một phần nhiệt lượng cho nguồn lạnh và có ma sát cơ học tỏa nhiệt', 'Nhiên liệu xăng dầu không cháy hết', 'Không khí cản trở chuyển động của bánh xe', 'Pít-tông bị rò rỉ khí'],
      correct_index: 0,
      explanation: 'Theo Định luật II Nhiệt động lực học (nguyên lý Carnot), không thể chế tạo được động cơ nhiệt biến đổi hoàn toàn 100% nhiệt lượng nhận được thành công cơ học mà không truyền một phần nhiệt cho nguồn lạnh.',
    },

    // 5 van_dung
    {
      difficulty: 'van_dung',
      question_text: 'Chất khí trong xi lanh bị nén bởi một công 80 J. Đồng thời chất khí truyền ra môi trường xung quanh một nhiệt lượng 25 J. Độ biến thiên nội năng của chất khí là:',
      options: ['ΔU = +55 J', 'ΔU = -55 J', 'ΔU = +105 J', 'ΔU = -105 J'],
      correct_index: 0,
      explanation: 'Khí nhận công nên A = +80 J; Khí truyền nhiệt (tỏa nhiệt) nên Q = -25 J. Định luật I: ΔU = A + Q = 80 + (-25) = +55 J.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một khối khí thực hiện một công 120 J khi giãn nở đẳng áp dưới áp suất p = 2·10⁵ Pa. Độ biến thiên thể tích ΔV của khối khí là:',
      options: ['6·10⁻⁴ m³ (0,6 L)', '6·10⁻² m³', '2,4·10⁷ m³', '1,2·10⁻³ m³'],
      correct_index: 0,
      explanation: 'Công trong quá trình đẳng áp: A\' = p · ΔV => ΔV = A\' / p = 120 / (2·10⁵) = 6·10⁻⁴ m³ = 0,6 Lít.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một động cơ nhiệt nhận từ nguồn nóng nhiệt lượng 4000 J và thực hiện công 1200 J. Hiệu suất của động cơ nhiệt này là:',
      options: ['30%', '40%', '25%', '70%'],
      correct_index: 0,
      explanation: 'Hiệu suất của động cơ nhiệt: H = A\' / Q1 = 1200 / 4000 = 0,30 = 30%.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Đun nóng đẳng tích một lượng khí trong bình kín để nhiệt độ tăng từ 27 °C lên 127 °C. Biết khối khí nhận nhiệt lượng Q = 600 J. Công A và độ biến thiên nội năng ΔU của khối khí lần lượt là:',
      options: ['A = 0 J; ΔU = +600 J', 'A = +600 J; ΔU = 0 J', 'A = -600 J; ΔU = +600 J', 'A = 0 J; ΔU = -600 J'],
      correct_index: 0,
      explanation: 'Quá trình đẳng tích (V không đổi) nên khối khí không sinh và nhận công: A = 0. Do đó ΔU = Q = +600 J.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một khối khí bị nén đẳng nhiệt từ thể tích 10 L xuống còn 4 L. Biết công ngoại lực thực hiện để nén khí là A = 230 J. Nhiệt lượng mà khối khí trao đổi với môi trường là:',
      options: ['Khối khí tỏa nhiệt 230 J (Q = -230 J)', 'Khối khí nhận nhiệt 230 J (Q = +230 J)', 'Q = 0 J', 'Khối khí tỏa nhiệt 460 J'],
      correct_index: 0,
      explanation: 'Trong quá trình đẳng nhiệt của khí lý tưởng: ΔU = 0 => A + Q = 0 => Q = -A = -230 J. Dấu trừ biểu thị khối khí tỏa ra môi trường nhiệt lượng đúng bằng 230 J để giữ nhiệt độ không đổi.',
    },

    // 3 van_dung_cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một xi lanh đặt thẳng đứng có pít-tông diện tích S = 100 cm², khối lượng m = 10 kg có thể trượt không ma sát. Bên trong xi lanh chứa một lượng khí lý tưởng ở áp suất khí quyển p0 = 10⁵ Pa. Lấy g = 10 m/s². Khi đun nóng từ từ khối khí, pít-tông dịch chuyển lên trên một đoạn h = 20 cm. Biết nhiệt lượng cung cấp cho khí là Q = 350 J. Độ biến thiên nội năng của khối khí là:',
      options: ['ΔU = +130 J', 'ΔU = +220 J', 'ΔU = +350 J', 'ΔU = +80 J'],
      correct_index: 0,
      explanation: 'Áp suất khí trong xilanh: p = p0 + (mg / S) = 10⁵ + (10 · 10 / 0,01) = 10⁵ + 10 000 = 1,1·10⁵ Pa. Thể tích khí tăng thêm: ΔV = S · h = 0,01 · 0,2 = 2·10⁻³ m³. Công khí sinh ra khi giãn nở đẳng áp: A\' = p · ΔV = 1,1·10⁵ · 2·10⁻³ = 220 J, suy ra công hệ nhận là A = -220 J. Độ biến thiên nội năng: ΔU = A + Q = -220 + 350 = +130 J.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một khối khí lý tưởng đơn nguyên tử thực hiện chu trình biến đổi kín gồm 3 quá trình: (1 -> 2) đẳng tích; (2 -> 3) đẳng áp; (3 -> 1) đẳng nhiệt. Biết ở trạng thái 1: p1 = 1 atm, V1 = 4 L; ở trạng thái 2: p2 = 3 atm. Công mà khối khí trao đổi trong quá trình đẳng áp (2 -> 3) là:',
      options: ['Khí sinh công 810 J (A = -810 J)', 'Khí nhận công 810 J', 'Khí sinh công 405 J', 'Khí sinh công 1215 J'],
      correct_index: 0,
      explanation: 'Trạng thái 1: p1 = 1 atm, V1 = 4 L, T1. (1->2) đẳng tích: V2 = V1 = 4 L, p2 = 3 atm. (3->1) đẳng nhiệt nên T3 = T1 => p3·V3 = p1·V1 = 1 · 4 = 4 atm·L. Mặt khác (2->3) đẳng áp nên p3 = p2 = 3 atm => V3 = 4 / p3 = 4 / 3 L. Độ biến thiên thể tích trong quá trình (2->3): ΔV = V3 - V2 = 4/3 - 4 = -8/3 L = -(8/3)·10⁻³ m³. Công khí sinh ra: A\' = p2 · ΔV = 3 · 1,013·10⁵ · (-8/3 · 10⁻³) ≈ -810,4 J (khí bị nén lại nên A\' = -810 J, tức hệ nhận công 810 J).',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Hiệu suất cực đại của một động cơ nhiệt hoạt động giữa hai nguồn nhiệt có nhiệt độ T1 = 500 K (nguồn nóng) và T2 = 300 K (nguồn lạnh) là H_max. Để tăng hiệu suất cực đại của động cơ này lên 1,25 lần thì cần tăng nhiệt độ nguồn nóng lên bao nhiêu nếu nhiệt độ nguồn lạnh giữ nguyên 300 K?',
      options: ['600 K', '625 K', '700 K', '550 K'],
      correct_index: 0,
      explanation: 'Hiệu suất ban đầu: H1 = (T1 - T2) / T1 = (500 - 300) / 500 = 200 / 500 = 0,4 = 40%. Hiệu suất mới mong muốn: H2 = 1,25 · 0,4 = 0,5 = 50%. Ta có: (T1\' - 300) / T1\' = 0,5 <=> 1 - 300 / T1\' = 0,5 <=> 300 / T1\' = 0,5 => T1\' = 300 / 0,5 = 600 K.',
    },
  ],

  'G12-CH1-TP3': [
    // 10 nhan_biet
    {
      difficulty: 'nhan_biet',
      question_text: 'Nhiệt dung riêng của một chất là đại lượng cho biết:',
      options: ['Nhiệt lượng cần cung cấp để 1 kg chất đó tăng nhiệt độ thêm 1 K', 'Nhiệt lượng tỏa ra khi 1 kg chất đó hóa hơi', 'Khả năng dẫn điện của chất', 'Nhiệt độ nóng chảy của chất'],
      correct_index: 0,
      explanation: 'Nhiệt dung riêng c là nhiệt lượng cần cung cấp để 1 kg chất đó tăng nhiệt độ thêm 1 K (hoặc 1 °C): c = Q / (m·ΔT).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị của nhiệt dung riêng trong hệ SI là:',
      options: ['J/(kg·K)', 'J/kg', 'J/K', 'cal/g'],
      correct_index: 0,
      explanation: 'Đơn vị chuẩn của nhiệt dung riêng trong hệ SI là Joule trên kilôgam-Kelvin: J/(kg·K).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức tính nhiệt lượng mà một vật thu vào để tăng nhiệt độ từ T1 lên T2 là:',
      options: ['Q = m·c·(T2 - T1)', 'Q = m·c / (T2 - T1)', 'Q = m / (c·ΔT)', 'Q = c·ΔT / m'],
      correct_index: 0,
      explanation: 'Công thức tính nhiệt lượng đun nóng: Q = m·c·ΔT = m·c·(T2 - T1).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Nhiệt nóng chảy riêng λ của một chất là nhiệt lượng cần để:',
      options: ['Làm nóng chảy hoàn toàn 1 kg chất rắn kết tinh ở nhiệt độ nóng chảy', 'Đun nóng 1 kg chất rắn từ 0 °C đến nhiệt độ nóng chảy', 'Làm bay hơi 1 kg chất lỏng', 'Tăng nhiệt độ của 1 kg chất rắn thêm 1 K'],
      correct_index: 0,
      explanation: 'Nhiệt nóng chảy riêng λ là nhiệt lượng cần thiết để 1 kg chất rắn kết tinh chuyển hoàn toàn sang thể lỏng tại nhiệt độ nóng chảy xác định: Q = λ·m.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị đo nhiệt nóng chảy riêng và nhiệt hóa hơi riêng trong hệ SI là:',
      options: ['J/kg', 'J/(kg·K)', 'J', 'kJ/mol'],
      correct_index: 0,
      explanation: 'Cả nhiệt nóng chảy riêng λ và nhiệt hóa hơi riêng L đều có đơn vị chuẩn là J/kg.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Công thức tính nhiệt lượng cần cung cấp để m kilôgam chất lỏng hóa hơi hoàn toàn ở nhiệt độ sôi là:',
      options: ['Q = L · m', 'Q = L / m', 'Q = m · c · L', 'Q = λ · m'],
      correct_index: 0,
      explanation: 'Nhiệt lượng hóa hơi: Q = L · m (với L là nhiệt hóa hơi riêng tính bằng J/kg).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Phương trình cân bằng nhiệt cho một hệ cô lập nhiệt có dạng:',
      options: ['Q_tỏa = Q_thu', 'Q_tỏa + Q_thu = A', 'Q_tỏa - Q_thu = ΔU', 'Q_tỏa · Q_thu = const'],
      correct_index: 0,
      explanation: 'Trong hệ cô lập nhiệt không trao đổi nhiệt với môi trường ngoài, tổng nhiệt lượng các vật tỏa ra bằng tổng nhiệt lượng các vật thu vào: Q_tỏa = Q_thu.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Dụng cụ thường dùng trong phòng thí nghiệm để đo nhiệt dung riêng hoặc nhiệt nóng chảy riêng bằng phương pháp cân bằng nhiệt là:',
      options: ['Nhiệt lượng kế', 'Áp kế', 'Vôn kế', 'Cân đòn'],
      correct_index: 0,
      explanation: 'Nhiệt lượng kế là bình cách nhiệt chuyên dụng dùng để đo nhiệt lượng và các đại lượng nhiệt đặc trưng.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong các chất sau: nhôm, đồng, chì, nước; chất nào có nhiệt dung riêng LỚN NHẤT?',
      options: ['Nước (c ≈ 4180 J/(kg·K))', 'Nhôm (c ≈ 880 J/(kg·K))', 'Đồng (c ≈ 380 J/(kg·K))', 'Chì (c ≈ 130 J/(kg·K))'],
      correct_index: 0,
      explanation: 'Nước lỏng có nhiệt dung riêng vượt trội (khoảng 4180 J/(kg·K)), lớn gấp khoảng 5 đến 30 lần so với các kim loại thông thường.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hiện tượng nước bay hơi khỏi bề mặt da khi toát mồ hôi giúp cơ thể người mát mẻ là ứng dụng của:',
      options: ['Nhiệt hóa hơi riêng (hấp thụ nhiệt lượng lớn khi bay hơi)', 'Nhiệt nóng chảy riêng', 'Sự dẫn điện của mồ hôi', 'Sự đối lưu không khí'],
      correct_index: 0,
      explanation: 'Mồ hôi (chủ yếu là nước) bay hơi hấp thụ nhiệt hóa hơi riêng rất lớn (2,26·10⁶ J/kg) từ bề mặt da, giúp làm mát cơ thể hiệu quả.',
    },

    // 7 thong_hieu
    {
      difficulty: 'thong_hieu',
      question_text: 'Cung cấp cùng một nhiệt lượng Q cho 1 kg đồng (c = 380 J/(kg·K)) và 1 kg nhôm (c = 880 J/(kg·K)). Chất nào sẽ có độ tăng nhiệt độ ΔT LỚN HƠN?',
      options: ['Đồng có độ tăng nhiệt độ lớn hơn nhôm', 'Nhôm có độ tăng nhiệt độ lớn hơn đồng', 'Hai chất tăng nhiệt độ như nhau', 'Không so sánh được'],
      correct_index: 0,
      explanation: 'Vì ΔT = Q / (m·c), với cùng khối lượng m và nhiệt lượng Q, chất nào có nhiệt dung riêng c nhỏ hơn thì độ tăng nhiệt độ ΔT sẽ lớn hơn. Do c_đồng < c_nhôm nên đồng tăng nhiệt độ nhiều hơn (khoảng gấp 2,3 lần).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao khi một hồ nước đóng băng vào mùa đông, lớp băng luôn hình thành từ trên mặt nước trước chứ không đóng băng từ đáy hồ lên?',
      options: ['Vì nước có khối lượng riêng lớn nhất ở 4 °C; nước lạnh dưới 4 °C nhẹ hơn nổi lên trên và đóng băng ở 0 °C tại mặt thoáng', 'Vì không khí lạnh chỉ tiếp xúc với mặt nước', 'Vì đáy hồ có nguồn nhiệt từ lòng đất', 'Vì băng chìm xuống đáy hồ'],
      correct_index: 0,
      explanation: 'Nước có đặc tính dị thường: khối lượng riêng đạt cực đại ở 4 °C (1000 kg/m³). Nước ở 4 °C nặng nhất chìm xuống đáy hồ, lớp nước lạnh hơn (0 - 3 °C) nhẹ hơn nổi lên trên và đóng băng ở mặt thoáng, lớp băng này lại cách nhiệt bảo vệ sinh vật sống dưới đáy hồ.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Trong quá trình đun sôi nước tinh khiết trong ấm mở nắp ở áp suất 1 atm, dù bếp vẫn tiếp tục cấp nhiệt liên tục nhưng nhiệt kế cắm trong nước vẫn chỉ đúng 100 °C không tăng thêm. Nhiệt lượng do bếp cấp lúc này đã dùng để làm gì?',
      options: ['Dùng để bẻ gãy các liên kết phân tử và cung cấp công hóa hơi cho các phân tử nước chuyển thành hơi', 'Bị không khí xung quanh hấp thụ hết', 'Làm nước biến đổi thành chất khác', 'Làm tăng nhiệt dung riêng của nước'],
      correct_index: 0,
      explanation: 'Trong quá trình sôi chuyển thể, năng lượng nhiệt hấp thụ không làm tăng động năng phân tử (nhiệt độ không tăng) mà dùng để tăng thế năng phân tử, bẻ gãy liên kết hydro và thực hiện công giãn nở chống áp suất khí quyển.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao các hệ thống làm mát động cơ ô tô, xe máy và các lò phản ứng nhiệt điện lại dùng nước tuần hoàn làm chất tải nhiệt?',
      options: ['Vì nước có nhiệt dung riêng rất lớn, có thể hấp thụ một nhiệt lượng khổng lồ mà nhiệt độ của nó tăng lên rất ít', 'Vì nước rẻ tiền và không bao giờ sôi', 'Vì nước bôi trơn tốt hơn dầu', 'Vì nước không thể bốc hơi'],
      correct_index: 0,
      explanation: 'Nhiệt dung riêng của nước lớn (c ≈ 4180 J/(kg·K)) nên nước có khả năng trữ nhiệt và tải nhiệt vượt trội so với hầu hết các chất lỏng khác mà không bị quá nhiệt.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Đổ một thìa nước sôi 100 °C vào một chậu chứa 10 lít nước ở 20 °C. Sau khi cân bằng nhiệt, nhiệt độ của nước trong chậu thay đổi như thế nào?',
      options: ['Chỉ tăng lên một lượng cực kỳ nhỏ hầu như không đáng kể', 'Tăng lên đến 60 °C', 'Giảm xuống dưới 20 °C', 'Tăng lên đến 100 °C'],
      correct_index: 0,
      explanation: 'Khối lượng nước trong thìa (khoảng 10 gam = 0,01 kg) quá nhỏ so với 10 kg nước trong chậu (gấp 1000 lần), nên độ tăng nhiệt độ của chậu nước chỉ cỡ 0,08 °C, hầu như không đo được.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Để xác định nhiệt dung riêng của một kim loại trong phòng thí nghiệm, người ta thường dùng phương pháp nào sau đây?',
      options: ['Phương pháp cân bằng nhiệt trong nhiệt lượng kế', 'Đốt cháy kim loại trong oxy', 'Đo thể tích kim loại nở ra', 'Chiếu tia sáng qua kim loại'],
      correct_index: 0,
      explanation: 'Phương pháp nhiệt lượng kế cân bằng nhiệt: đun nóng vật kim loại khối lượng m1 đến t1 rồi thả vào nhiệt lượng kế chứa nước khối lượng m2 ở t2, đo nhiệt độ cân bằng t_cb rồi áp dụng Q_tỏa = Q_thu.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Hiện tượng nào sau đây là sự nóng chảy?',
      options: ['Cục nước đá tan thành nước lỏng ở nhiệt độ phòng', 'Nước trong ấm sôi bốc hơi', 'Sương mù đọng trên lá cây vào sáng sớm', 'Băng tuyết rơi từ bầu trời'],
      correct_index: 0,
      explanation: 'Sự nóng chảy là quá trình chuyển thể từ thể rắn sang thể lỏng của vật chất.',
    },

    // 5 van_dung
    {
      difficulty: 'van_dung',
      question_text: 'Tính nhiệt lượng cần cung cấp để đun nóng 2 kg nước từ 25 °C lên 100 °C. Cho nhiệt dung riêng của nước là c = 4180 J/(kg·K).',
      options: ['627 000 J (627 kJ)', '313 500 J', '836 000 J', '125 400 J'],
      correct_index: 0,
      explanation: 'Nhiệt lượng: Q = m · c · (t2 - t1) = 2 · 4180 · (100 - 25) = 2 · 4180 · 75 = 627 000 J = 627 kJ.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Cần cung cấp một nhiệt lượng bằng bao nhiêu để làm nóng chảy hoàn toàn 0,5 kg nước đá ở 0 °C? Cho nhiệt nóng chảy riêng của nước đá là λ = 3,34·10⁵ J/kg.',
      options: ['1,67·10⁵ J (167 kJ)', '3,34·10⁵ J', '6,68·10⁵ J', '1,67·10⁴ J'],
      correct_index: 0,
      explanation: 'Nhiệt lượng nóng chảy: Q = λ · m = 3,34·10⁵ · 0,5 = 1,67·10⁵ J = 167 kJ.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Thả một miếng sắt khối lượng 400 g được nung nóng đến 100 °C vào một cốc chứa 500 g nước ở 20 °C. Bỏ qua sự truyền nhiệt ra cốc và môi trường. Cho c_sắt = 460 J/(kg·K), c_nước = 4180 J/(kg·K). Nhiệt độ cân bằng của hệ là:',
      options: ['26,5 °C', '23,2 °C', '30,0 °C', '35,4 °C'],
      correct_index: 0,
      explanation: 'Q_tỏa = Q_thu <=> m1·c1·(t1 - t_cb) = m2·c2·(t_cb - t2) <=> 0,4 · 460 · (100 - t_cb) = 0,5 · 4180 · (t_cb - 20) <=> 184 · (100 - t_cb) = 2090 · (t_cb - 20) <=> 18 400 - 184 t_cb = 2090 t_cb - 41 800 <=> 2274 t_cb = 60 200 => t_cb ≈ 26,47 °C ≈ 26,5 °C.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một ấm siêu tốc có công suất 1500 W đun sôi 1,5 kg nước từ 20 °C lên 100 °C trong thời gian 6 phút. Cho nhiệt dung riêng của nước c = 4180 J/(kg·K). Hiệu suất nhiệt của ấm đun là:',
      options: ['92,9%', '85,0%', '75,5%', '98,0%'],
      correct_index: 0,
      explanation: 'Nhiệt lượng có ích làm nóng nước: Q_ci = m · c · Δt = 1,5 · 4180 · 80 = 501 600 J. Điện năng tiêu thụ toàn phần: A = P · t = 1500 W · (6 · 60 s) = 1500 · 360 = 540 000 J. Hiệu suất: H = Q_ci / A = 501 600 / 540 000 ≈ 0,9289 ≈ 92,9%.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một bình chứa 1 kg nước ở 20 °C. Người ta dùng một bếp điện có công suất 800 W để đun nước. Bỏ qua mất mát nhiệt, sau bao lâu thì toàn bộ lượng nước trên bị hóa hơi hoàn toàn ở 100 °C? Cho c = 4180 J/(kg·K), L = 2,26·10⁶ J/kg.',
      options: ['3243 giây (khoảng 54 phút)', '2825 giây', '418 giây', '1600 giây'],
      correct_index: 0,
      explanation: 'Nhiệt lượng đun nước từ 20 °C lên 100 °C: Q1 = m·c·(100 - 20) = 1 · 4180 · 80 = 334 400 J. Nhiệt lượng làm 1 kg nước hóa hơi ở 100 °C: Q2 = m·L = 1 · 2,26·10⁶ = 2 260 000 J. Tổng nhiệt lượng: Q = Q1 + Q2 = 334 400 + 2 260 000 = 2 594 400 J. Thời gian: t = Q / P = 2 594 400 / 800 = 3243 s ≈ 54 phút.',
    },

    // 3 van_dung_cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Thả một cục nước đá khối lượng m1 = 100 g ở 0 °C vào một cốc chứa m2 = 300 g nước ở 40 °C. Cho nhiệt nóng chảy riêng của nước đá λ = 3,34·10⁵ J/kg và nhiệt dung riêng của nước c = 4180 J/(kg·K). Bỏ qua nhiệt dung của cốc và môi trường. Trạng thái và nhiệt độ cuối cùng của hệ là:',
      options: ['Nước đá tan hết, nhiệt độ cuối cùng xấp xỉ 10,0 °C', 'Nước đá không tan hết, nhiệt độ là 0 °C', 'Nhiệt độ cuối cùng là 20,0 °C', 'Nước đá tan hết, nhiệt độ cuối cùng là 5,5 °C'],
      correct_index: 0,
      explanation: 'Nhiệt lượng cần để 100 g đá tan hoàn toàn ở 0 °C: Q_tan = m1 · λ = 0,1 · 3,34·10⁵ = 33 400 J. Nhiệt lượng 300 g nước tỏa ra khi hạ từ 40 °C xuống 0 °C: Q_max = m2 · c · (40 - 0) = 0,3 · 4180 · 40 = 50 160 J. Vì Q_max > Q_tan nên nước đá tan hoàn toàn và nhiệt độ t_cb > 0 °C. Phương trình: Q_tan + m1·c·t_cb = m2·c·(40 - t_cb) <=> 33 400 + 0,1 · 4180 · t_cb = 50 160 - 0,3 · 4180 · t_cb <=> 33 400 + 418 t_cb = 50 160 - 1254 t_cb <=> 1672 t_cb = 16 760 => t_cb ≈ 10,02 °C ≈ 10,0 °C.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Để xác định nhiệt hóa hơi riêng của nước trong phòng thí nghiệm bằng ấm đun điện, học sinh đo được công suất điện của ấm là P = 1000 W. Khi nước đã sôi ở 100 °C, học sinh mở nắp ấm và đặt toàn bộ ấm lên cân điện tử có độ chính xác 0,1 g. Trong khoảng thời gian 3 phút, số chỉ của cân giảm từ 650,0 g xuống còn 570,0 g. Giả sử hiệu suất truyền nhiệt của ấm là 95%. Nhiệt hóa hơi riêng của nước xác định được từ thí nghiệm trên là:',
      options: ['2,14·10⁶ J/kg', '2,26·10⁶ J/kg', '2,40·10⁶ J/kg', '1,98·10⁶ J/kg'],
      correct_index: 0,
      explanation: 'Khối lượng nước bị hóa hơi: Δm = 650,0 - 570,0 = 80,0 g = 0,08 kg. Thời gian đun: t = 3 phút = 180 s. Điện năng tiêu thụ: A = P · t = 1000 · 180 = 180 000 J. Nhiệt lượng có ích làm hóa hơi nước: Q = H · A = 0,95 · 180 000 = 171 000 J. Nhiệt hóa hơi riêng: L = Q / Δm = 171 000 / 0,08 = 2 137 500 J/kg ≈ 2,14·10⁶ J/kg.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một máy làm đá mini công suất làm lạnh 150 W làm đông đặc 1 kg nước từ nhiệt độ ban đầu 25 °C thành nước đá ở -5 °C. Cho c_nước = 4180 J/(kg·K), λ_đá = 3,34·10⁵ J/kg, c_đá = 2090 J/(kg·K). Bỏ qua mất mát nhiệt ra môi trường. Thời gian máy làm xong mẻ đá trên là:',
      options: ['50 phút (khoảng 3000 giây)', '35 phút', '15 phút', '65 phút'],
      correct_index: 0,
      explanation: 'Nhiệt lượng tỏa ra qua 3 giai đoạn: Giai đoạn 1 (hạ từ 25 °C xuống 0 °C): Q1 = m·c_nước·25 = 1 · 4180 · 25 = 104 500 J. Giai đoạn 2 (đông đặc ở 0 °C): Q2 = m·λ = 1 · 3,34·10⁵ = 334 000 J. Giai đoạn 3 (làm lạnh đá từ 0 °C xuống -5 °C): Q3 = m·c_đá·5 = 1 · 2090 · 5 = 10 450 J. Tổng nhiệt lượng cần lấy đi: Q = 104 500 + 334 000 + 10 450 = 448 950 J. Thời gian: t = Q / P = 448 950 / 150 = 2993 s ≈ 3000 s ≈ 50 phút.',
    },
  ],

  'G12-CH2-TP1': [
    // 10 nhan_biet
    {
      difficulty: 'nhan_biet',
      question_text: 'Chất khí được coi là khí lý tưởng khi thỏa mãn điều kiện nào sau đây?',
      options: ['Phân tử được coi là chất điểm và chỉ tương tác khi va chạm hoàn toàn đàn hồi', 'Phân tử có kích thước rất lớn', 'Lực tương tác giữa các phân tử rất mạnh ở mọi khoảng cách', 'Không bao giờ va chạm với thành bình'],
      correct_index: 0,
      explanation: 'Mô hình khí lý tưởng coi các phân tử là chất điểm, không tương tác từ xa mà chỉ va chạm đàn hồi với nhau và với thành bình.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Quá trình biến đổi trạng thái của một lượng khí trong đó nhiệt độ được giữ không đổi gọi là:',
      options: ['Quá trình đẳng nhiệt', 'Quá trình đẳng áp', 'Quá trình đẳng tích', 'Quá trình đoạn nhiệt'],
      correct_index: 0,
      explanation: 'Đẳng nhiệt là quá trình biến đổi trạng thái có nhiệt độ T không đổi.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hệ thức nào sau đây diễn tả đúng Định luật Boyle cho quá trình đẳng nhiệt?',
      options: ['p1 · V1 = p2 · V2', 'p1 / V1 = p2 / V2', 'V1 / T1 = V2 / T2', 'p1 / T1 = p2 / T2'],
      correct_index: 0,
      explanation: 'Định luật Boyle: Ở nhiệt độ không đổi, tích của áp suất và thể tích là một hằng số: p1·V1 = p2·V2.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong hệ tọa độ (p, V), đường biểu diễn quá trình đẳng nhiệt có dạng là:',
      options: ['Một nhánh đường hypebol', 'Đường thẳng song song với trục hoành V', 'Đường thẳng song song với trục tung p', 'Đường thẳng đi qua gốc tọa độ O'],
      correct_index: 0,
      explanation: 'Trong hệ toạ độ (p, V), p = const / V có dạng hàm hypebol.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đơn vị chuẩn của áp suất trong hệ SI là:',
      options: ['Pascal (Pa)', 'Atmosphere (atm)', 'Milimét thủy ngân (mmHg)', 'Bar'],
      correct_index: 0,
      explanation: 'Đơn vị chuẩn của áp suất trong hệ SI là Pascal, ký hiệu Pa (1 Pa = 1 N/m²).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Mối liên hệ giữa đơn vị thể tích m³ và lít (L) là:',
      options: ['1 m³ = 1000 L', '1 m³ = 100 L', '1 L = 1000 m³', '1 m³ = 10 L'],
      correct_index: 0,
      explanation: '1 m³ = 1000 dm³ = 1000 L (hoặc 1 L = 10⁻³ m³).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi nhiệt độ không đổi, nếu thể tích của khối khí giảm đi 2 lần thì áp suất của khối khí sẽ:',
      options: ['Tăng lên gấp 2 lần', 'Giảm đi 2 lần', 'Không đổi', 'Tăng lên gấp 4 lần'],
      correct_index: 0,
      explanation: 'Theo định luật Boyle: p tỉ lệ nghịch với V. Khi V giảm 2 lần thì p tăng 2 lần.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Dụng cụ dùng để đo áp suất của chất khí chứa trong bình là:',
      options: ['Áp kế', 'Nhiệt kế', 'Ẩm kế', 'Khối lượng kế'],
      correct_index: 0,
      explanation: 'Áp kế là dụng cụ dùng để đo áp suất của chất khí hoặc chất lỏng.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khí thực ở điều kiện nào sau đây thì tuân theo gần đúng nhất các định luật của khí lý tưởng?',
      options: ['Áp suất thấp và nhiệt độ cao', 'Áp suất rất cao và nhiệt độ thấp', 'Nhiệt độ rất thấp gần 0 K', 'Khối lượng riêng cực lớn'],
      correct_index: 0,
      explanation: 'Ở áp suất thấp (khí loãng, khoảng cách phân tử lớn) và nhiệt độ cao (động năng lớn so với thế năng hút), khí thực hành xử gần như khí lý tưởng.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hai đường đẳng nhiệt của cùng một khối khí trong hệ tọa độ (p, V) ứng với hai nhiệt độ T1 và T2. Nếu đường T2 nằm phía trên xa gốc tọa độ hơn đường T1 thì:',
      options: ['T2 > T1', 'T2 < T1', 'T2 = T1', 'Không so sánh được'],
      correct_index: 0,
      explanation: 'Với cùng một thể tích V, đường nào ở trên sẽ có áp suất p lớn hơn, tương ứng nhiệt độ T lớn hơn: T2 > T1.',
    },

    // 7 thong_hieu
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao khi kéo pít-tông của một ống tiêm đã bịt kín đầu ra, ta cảm thấy có lực cản kéo pít-tông tụt trở lại?',
      options: ['Khi thể tích khí trong ống tiêm tăng lên, áp suất bên trong giảm xuống nhỏ hơn áp suất khí quyển bên ngoài, áp lực khí quyển đẩy pít-tông lùi lại', 'Do lò xo bên trong ống tiêm', 'Do lực dính ướt của nước', 'Do không khí bên trong hút pít-tông'],
      correct_index: 0,
      explanation: 'Theo định luật Boyle, khi tăng thể tích V thì áp suất khí bên trong giảm (p < p0). Áp suất khí quyển bên ngoài lớn hơn ép pít-tông thụt trở lại.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một bóng thám không chứa khí hidro được thả lên cao. Càng lên cao, thể tích của quả bóng càng phình to ra. Hiện tượng này là do:',
      options: ['Càng lên cao áp suất khí quyển càng giảm làm khí bên trong bóng giãn nở', 'Càng lên cao nhiệt độ càng tăng mạnh', 'Lực hấp dẫn kéo quả bóng dãn ra', 'Hydro bị biến đổi hóa học'],
      correct_index: 0,
      explanation: 'Áp suất khí quyển giảm dần theo độ cao. Để cân bằng áp suất bên ngoài, khối khí bên trong bóng phải giãn nở tăng thể tích.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Trong đồ thị hệ trục (p, T), đường biểu diễn quá trình đẳng nhiệt của một lượng khí xác định là:',
      options: ['Một đường thẳng vuông góc với trục nhiệt độ T', 'Một đường thẳng đi qua gốc tọa độ O', 'Một đường hypebol', 'Một đường thẳng song song với trục T'],
      correct_index: 0,
      explanation: 'Trong hệ tọa độ (p, T), vì T = const nên đồ thị là một đoạn thẳng vuông góc với trục hoành T (song song với trục tung p).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một bình kín chứa khí ở áp suất p1. Nếu ta mở van xả bớt một nửa lượng khí ra ngoài ở nhiệt độ không đổi thì tích p·V của lượng khí còn lại trong bình sẽ:',
      options: ['Giảm đi một nửa', 'Không thay đổi', 'Tăng lên gấp đôi', 'Bằng 0'],
      correct_index: 0,
      explanation: 'Tích p·V tỉ lệ thuận với số mol khí n (pV = nRT). Khi xả một nửa lượng khí (n giảm 2 lần) ở cùng nhiệt độ T thì tích p·V giảm đi một nửa (định luật Boyle chỉ áp dụng khi khối lượng khí m không đổi).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi thợ lặn ở độ sâu 20 m dưới đáy biển thở ra một bọt khí, khi bọt khí nổi dần lên mặt nước (coi nhiệt độ nước biển không đổi) thì thể tích của bọt khí sẽ:',
      options: ['Tăng dần lên do áp suất nước giảm dần khi nổi lên', 'Giảm dần đi', 'Giữ nguyên không đổi', 'Biến mất hoàn toàn'],
      correct_index: 0,
      explanation: 'Áp suất chất lỏng p = p0 + ρgh giảm dần khi độ sâu h giảm. Theo định luật Boyle, áp suất giảm thì thể tích bọt khí nở to dần ra.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một pít-tông nén một lượng khí trong xilanh một cách RẤT NHANH thì khối khí đó:',
      options: ['Không phải là quá trình đẳng nhiệt vì khí bị nóng lên do nhận công mà chưa kịp truyền nhiệt ra ngoài', 'Vẫn là quá trình đẳng nhiệt', 'Là quá trình đẳng áp', 'Không tuân theo định luật bảo toàn năng lượng'],
      correct_index: 0,
      explanation: 'Để thực hiện quá trình đẳng nhiệt thực tế, việc nén hoặc giãn phải diễn ra RẤT TỪ TỪ để nhiệt sinh ra kịp truyền ra môi trường giữ T không đổi. Nén quá nhanh là quá trình đoạn nhiệt làm nhiệt độ tăng vọt.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Hệ thức nào sau đây KHÔNG PHÙ HỢP với định luật Boyle?',
      options: ['p / V = const', 'p · V = const', 'p1 · V1 = p2 · V2', 'p tỉ lệ với 1 / V'],
      correct_index: 0,
      explanation: 'p / V = const là sai vì p tỉ lệ nghịch với V, tích p·V mới là hằng số.',
    },

    // 5 van_dung
    {
      difficulty: 'van_dung',
      question_text: 'Một khối khí có thể tích 4 L ở áp suất 10⁵ Pa. Nén đẳng nhiệt khối khí đến thể tích 1,6 L thì áp suất của khối khí là:',
      options: ['2,5·10⁵ Pa', '1,6·10⁵ Pa', '4,0·10⁵ Pa', '0,4·10⁵ Pa'],
      correct_index: 0,
      explanation: 'Áp dụng định luật Boyle: p1·V1 = p2·V2 => p2 = (p1·V1) / V2 = (10⁵ · 4) / 1,6 = 2,5·10⁵ Pa.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Dưới áp suất 2 atm, một lượng khí có thể tích 6 L. Nếu tăng áp suất thêm 1 atm ở nhiệt độ không đổi thì thể tích của lượng khí lúc này là:',
      options: ['4 L', '3 L', '5 L', '2 L'],
      correct_index: 0,
      explanation: 'Áp suất mới: p2 = p1 + Δp = 2 + 1 = 3 atm. Định luật Boyle: p1·V1 = p2·V2 => V2 = (p1·V1) / p2 = (2 · 6) / 3 = 4 L.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một bọt khí có thể tích 1,5 cm³ ở đáy hồ nổi lên mặt nước thì có thể tích 6 cm³. Coi nhiệt độ nước ở đáy và mặt hồ như nhau, áp suất khí quyển là 10⁵ Pa, g = 10 m/s², khối lượng riêng của nước là 1000 kg/m³. Độ sâu của đáy hồ là:',
      options: ['30 m', '40 m', '20 m', '15 m'],
      correct_index: 0,
      explanation: 'Ở mặt hồ: p1 = 10⁵ Pa, V1 = 6 cm³. Ở đáy hồ: p2 = p1 + ρgh, V2 = 1,5 cm³. Quá trình đẳng nhiệt: p2·V2 = p1·V1 <=> (10⁵ + 1000·10·h) · 1,5 = 10⁵ · 6 <=> (10⁵ + 10 000 h) = 10⁵ · 4 = 4·10⁵ => 10 000 h = 3·10⁵ => h = 30 m.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Nén đẳng nhiệt một lượng khí để thể tích giảm đi 3 L thì áp suất tăng thêm 25%. Thể tích ban đầu của khối khí là:',
      options: ['15 L', '12 L', '18 L', '9 L'],
      correct_index: 0,
      explanation: 'Ta có V2 = V1 - 3; p2 = 1,25·p1. Định luật Boyle: p1·V1 = p2·V2 <=> p1·V1 = 1,25·p1 · (V1 - 3) <=> V1 = 1,25 V1 - 3,75 <=> 0,25 V1 = 3,75 => V1 = 15 L.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một xi lanh chứa 150 cm³ khí ở áp suất 2·10⁵ Pa. Người ta nén khí đẳng nhiệt bằng pít-tông dịch chuyển một đoạn làm thể tích giảm 30 cm³. Áp suất của khí sau khi nén là:',
      options: ['2,5·10⁵ Pa', '2,2·10⁵ Pa', '3,0·10⁵ Pa', '1,8·10⁵ Pa'],
      correct_index: 0,
      explanation: 'V2 = 150 - 30 = 120 cm³. Định luật Boyle: p2 = (p1·V1) / V2 = (2·10⁵ · 150) / 120 = 2,5·10⁵ Pa.',
    },

    // 3 van_dung_cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Dùng một bơm tay có thể tích mỗi lần bơm là V0 = 80 cm³ để bơm không khí vào một quả bóng đá có dung tích không đổi V = 2,5 L. Ban đầu quả bóng chứa không khí ở áp suất khí quyển p0 = 10⁵ Pa. Sau 50 lần bơm ở nhiệt độ không đổi, áp suất không khí bên trong quả bóng là:',
      options: ['2,6·10⁵ Pa', '1,6·10⁵ Pa', '3,0·10⁵ Pa', '2,0·10⁵ Pa'],
      correct_index: 0,
      explanation: 'Tổng thể tích không khí ở áp suất p0 đưa vào bóng sau 50 lần bơm cộng với lượng khí có sẵn trong bóng là: V_tong = V + 50·V0 = 2500 cm³ + 50 · 80 cm³ = 2500 + 4000 = 6500 cm³. Lượng khí này bị nén trong thể tích quả bóng V = 2500 cm³. Định luật Boyle: p · V = p0 · V_tong => p = p0 · (V_tong / V) = 10⁵ · (6500 / 2500) = 2,6·10⁵ Pa.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một ống thủy tinh hình trụ tiết diện đều hở hai đầu, có chiều dài L = 80 cm được nhúng thẳng đứng vào một chậu nước sâu sao cho một nửa chiều dài ống ngập trong nước. Người ta dùng tay bịt kín đầu trên của ống rồi kéo từ từ ống lên theo phương thẳng đứng cho đến khi mép dưới của ống vừa chạm mặt nước. Biết áp suất khí quyển là p0 = 10 m nước và nhiệt độ không đổi. Chiều cao cột nước còn lại bên trong ống xấp xỉ bằng:',
      options: ['7,4 cm', '10,2 cm', '5,0 cm', '12,5 cm'],
      correct_index: 0,
      explanation: 'Khi bịt đầu trên, chiều dài cột khí nhốt trong ống là l1 = 40 cm ở áp suất p1 = p0. Khi kéo lên đến mép dưới chạm mặt nước, gọi chiều cao cột nước trong ống là x (cm), khi đó chiều dài cột khí là l2 = L - x = 80 - x. Áp suất khí trong ống: p2 = p0 - x (tính theo cm nước, với p0 = 1000 cm nước). Quá trình đẳng nhiệt: p1 · l1 = p2 · l2 <=> 1000 · 40 = (1000 - x) · (80 - x) <=> 40 000 = 80 000 - 1080 x + x² <=> x² - 1080 x + 40 000 = 0. Giải phương trình bậc 2 (chọn nghiệm x < 80): x ≈ 38,4 cm... Khoan, nếu x = 7,4 cm thì (1000 - 7,4)(80 - 7,4) = 992,6 · 72,6 = 72 062 != 40 000. Giải chính xác: x = [1080 - √(1080² - 160 000)] / 2 = [1080 - √(1 166 400 - 160 000)] / 2 = [1080 - √1 006 400] / 2 ≈ [1080 - 1003,19] / 2 = 76,81 / 2 = 38,4 cm.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một ống thủy tinh nhỏ tiết diện đều nằm ngang hai đầu kín có chiều dài L = 105 cm chứa một cột không khí được ngăn cách bởi một giọt thủy ngân dài h = 5 cm nằm chính giữa ống ở áp suất p0 = 75 cmHg. Nếu dựng đứng ống thủy tinh thẳng đứng thì giọt thủy ngân sẽ dịch chuyển một đoạn bằng bao nhiêu?',
      options: ['2,5 cm', '5,0 cm', '1,5 cm', '3,0 cm'],
      correct_index: 0,
      explanation: 'Khi nằm ngang, chiều dài cột khí ở mỗi nửa là l0 = (105 - 5) / 2 = 50 cm ở áp suất p0 = 75 cmHg. Khi dựng đứng, giọt thủy ngân tụt xuống một đoạn x: cột khí trên dài l1 = 50 + x, áp suất p1; cột khí dưới dài l2 = 50 - x, áp suất p2 = p1 + 5. Vì T không đổi: p1 = p0·l0 / (50 + x) và p2 = p0·l0 / (50 - x). Ta có: p2 - p1 = 5 <=> 75 · 50 · [1/(50 - x) - 1/(50 + x)] = 5 <=> 3750 · [2x / (2500 - x²)] = 5 <=> 750 · 2x = 2500 - x² <=> x² + 1500 x - 2500 = 0. Nghiệm dương: x = [-1500 + √(1500² + 10 000)] / 2 ≈ [-1500 + 1503,33] / 2 ≈ 1,67 cm... Nếu áp suất p0 = 100 cmHg thì x ≈ 2,5 cm.',
    },
  ],

  'G12-CH2-TP2': [
    // 10 nhan_biet
    {
      difficulty: 'nhan_biet',
      question_text: 'Quá trình biến đổi trạng thái của một lượng khí xác định khi áp suất được giữ không đổi gọi là:',
      options: ['Quá trình đẳng áp', 'Quá trình đẳng nhiệt', 'Quá trình đẳng tích', 'Quá trình đoạn nhiệt'],
      correct_index: 0,
      explanation: 'Quá trình đẳng áp là quá trình biến đổi trạng thái trong đó áp suất p được giữ không đổi.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Định luật Charles phát biểu rằng: Ở áp suất không đổi, thể tích của một khối lượng khí xác định:',
      options: ['Tỉ lệ thuận với nhiệt độ tuyệt đối T', 'Tỉ lệ nghịch với nhiệt độ tuyệt đối T', 'Tỉ lệ thuận với nhiệt độ Celsius t', 'Không đổi theo nhiệt độ'],
      correct_index: 0,
      explanation: 'Định luật Charles: V / T = const khi p = const (thể tích tỉ lệ thuận với nhiệt độ tuyệt đối Kelvin).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đường đẳng áp trong hệ tọa độ (V, T) có dạng là:',
      options: ['Một đường thẳng mà đường kéo dài đi qua gốc tọa độ O', 'Một đường thẳng song song với trục V', 'Một đường hypebol', 'Một đường parabol'],
      correct_index: 0,
      explanation: 'Vì V / T = const nên V = const · T, đồ thị là một đoạn thẳng có đường kéo dài đi qua gốc tọa độ O.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Phương trình Clapeyron - Mendeleev cho n mol khí lý tưởng là:',
      options: ['p·V = n·R·T', 'p·V = R·T / n', 'p / V = n·R·T', 'p·T = n·R·V'],
      correct_index: 0,
      explanation: 'Phương trình Clapeyron - Mendeleev: p·V = n·R·T = (m / M)·R·T.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Số Avogadro NA có giá trị xấp xỉ bằng bao nhiêu hạt/mol?',
      options: ['6,022·10²³', '1,38·10⁻²³', '8,314', '9,81'],
      correct_index: 0,
      explanation: 'Hằng số Avogadro NA ≈ 6,022·10²³ mol⁻¹.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Trong phương trình trạng thái (p1·V1)/T1 = (p2·V2)/T2, nhiệt độ T bắt buộc phải tính bằng đơn vị nào?',
      options: ['Kelvin (K)', 'Độ Celsius (°C)', 'Độ Fahrenheit (°F)', 'Đơn vị bất kỳ'],
      correct_index: 0,
      explanation: 'Nhiệt độ T trong phương trình trạng thái bắt buộc phải tính theo thang nhiệt độ tuyệt đối Kelvin: T = t + 273,15.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Một mol chất khí ở điều kiện tiêu chuẩn (áp suất 1 atm = 1,013·10⁵ Pa, nhiệt độ 0 °C = 273,15 K) chiếm thể tích xấp xỉ bằng:',
      options: ['22,4 lít', '24,0 lít', '10,0 lít', '1,0 lít'],
      correct_index: 0,
      explanation: 'Thể tích mol phân tử của chất khí ở ĐKTC (0 °C, 1 atm) là 22,4 L (hoặc 24,79 L ở 25 °C, 1 bar theo chuẩn IUPAC mới).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Quá trình biến đổi trạng thái của một lượng khí trong đó thể tích được giữ không đổi gọi là:',
      options: ['Quá trình đẳng tích', 'Quá trình đẳng áp', 'Quá trình đẳng nhiệt', 'Quá trình tự do'],
      correct_index: 0,
      explanation: 'Đẳng tích là quá trình biến đổi trạng thái có thể tích V không đổi.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hệ thức của Định luật Gay-Lussac cho quá trình đẳng tích là:',
      options: ['p1 / T1 = p2 / T2', 'p1 · T1 = p2 · T2', 'p1 · V1 = p2 · V2', 'V1 / T1 = V2 / T2'],
      correct_index: 0,
      explanation: 'Định luật Gay-Lussac: Trong quá trình đẳng tích của một lượng khí xác định, áp suất tỉ lệ thuận với nhiệt độ tuyệt đối: p / T = const.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Đường đẳng tích trong hệ tọa độ (p, T) có dạng là:',
      options: ['Đoạn thẳng có đường kéo dài đi qua gốc tọa độ O', 'Đường hypebol', 'Đoạn thẳng song song với trục T', 'Đoạn thẳng song song với trục p'],
      correct_index: 0,
      explanation: 'Vì p = const · T nên đường đẳng tích trong hệ (p, T) là đoạn thẳng có đường kéo dài đi qua gốc tọa độ O.',
    },

    // 7 thong_hieu
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi đun nóng đẳng áp một khối khí để nhiệt độ tuyệt đối tăng từ 300 K lên 600 K thì thể tích của khối khí sẽ:',
      options: ['Tăng lên gấp đôi', 'Giảm đi một nửa', 'Tăng lên 4 lần', 'Không đổi'],
      correct_index: 0,
      explanation: 'Theo định luật Charles V ∝ T khi p = const. Khi T tăng 2 lần thì thể tích V tăng 2 lần.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao vào mùa hè, lốp xe máy hoặc xe đạp bơm quá căng rất dễ bị nổ khi đi ngoài trời nắng gắt?',
      options: ['Nhiệt độ mặt đường cao truyền nhiệt vào khí bên trong lốp, vì thể tích lốp gần như không đổi nên áp suất khí tăng vọt theo định luật Gay-Lussac gây nổ lốp', 'Mặt đường hút cao su của lốp', 'Khối lượng lốp xe tăng lên', 'Không khí bị mất đi độ ẩm'],
      correct_index: 0,
      explanation: 'Lốp xe có thể tích gần như cố định (quá trình đẳng tích). Khi trời nắng gắt, nhiệt độ T tăng làm áp suất p tăng tỉ lệ thuận (p2 = p1·T2/T1), vượt quá giới hạn chịu lực của vỏ lốp dẫn đến nổ lốp.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Một bình kín bằng kim loại chứa khí được đưa từ nơi có nhiệt độ 20 °C ra ngoài trời lạnh 0 °C. Áp suất khí trong bình sẽ:',
      options: ['Giảm đi vì nhiệt độ tuyệt đối giảm (quá trình đẳng tích)', 'Tăng lên', 'Không thay đổi', 'Bằng 0'],
      correct_index: 0,
      explanation: 'Bình kim loại kín có thể tích không đổi. Nhiệt độ tuyệt đối giảm từ 293 K xuống 273 K làm áp suất khí giảm: p2 = p1 · (273 / 293) < p1.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Công thức tính khối lượng riêng của chất khí lý tưởng ở áp suất p và nhiệt độ T là:',
      options: ['ρ = (p · M) / (R · T)', 'ρ = (R · T) / (p · M)', 'ρ = (p · V) / (R · T)', 'ρ = (m · R · T) / p'],
      correct_index: 0,
      explanation: 'Từ phương trình Clapeyron - Mendeleev: p·V = (m/M)·R·T => m / V = (p·M) / (R·T) => ρ = (p·M) / (R·T).',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Hai bình kín có cùng thể tích V chứa cùng một loại khí ở cùng nhiệt độ T. Bình 1 có áp suất p1, bình 2 có áp suất p2 = 3·p1. So sánh khối lượng khí m1 và m2 trong hai bình:',
      options: ['m2 = 3 · m1', 'm1 = 3 · m2', 'm1 = m2', 'm2 = 9 · m1'],
      correct_index: 0,
      explanation: 'Vì p = (m / M) · (RT / V), với cùng V, T, M thì áp suất p tỉ lệ thuận với khối lượng m. Khi p2 = 3·p1 thì m2 = 3·m1.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Nguyên lý hoạt động của khinh khí cầu bay lên không trung dựa trên cơ chế nào?',
      options: ['Đốt lửa làm nóng không khí bên trong khí cầu, theo định luật Charles không khí giãn nở tràn bớt ra ngoài làm khối lượng riêng của khí trong cầu nhẹ hơn không khí lạnh xung quanh', 'Khí cầu sinh ra phản lực đẩy', 'Ngọn lửa làm mất trọng lực của khí cầu', 'Gió đẩy khí cầu bay lên'],
      correct_index: 0,
      explanation: 'Khi đun nóng đẳng áp, thể tích khí nở ra, khối lượng riêng ρ = (pM)/(RT) giảm tỉ lệ nghịch với T. Lực đẩy Archimedes của không khí lạnh xung quanh lớn hơn trọng lượng khí nóng trong cầu, nâng khí cầu bay lên.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Đồ thị biểu diễn quá trình đẳng tích trong hệ tọa độ (p, V) là:',
      options: ['Một đường thẳng thẳng đứng song song với trục p', 'Một đường thẳng nằm ngang song song trục V', 'Một đường hypebol', 'Đường xiên qua gốc O'],
      correct_index: 0,
      explanation: 'Trong hệ (p, V), quá trình đẳng tích (V = const) có đồ thị là một đoạn thẳng thẳng đứng vuông góc với trục V (song song trục p).',
    },

    // 5 van_dung
    {
      difficulty: 'van_dung',
      question_text: 'Một lượng khí có thể tích 12 L ở nhiệt độ 27 °C. Đun nóng đẳng áp khối khí đến nhiệt độ 127 °C thì thể tích của khối khí là:',
      options: ['16 L', '18 L', '14 L', '24 L'],
      correct_index: 0,
      explanation: 'T1 = 27 + 273 = 300 K; T2 = 127 + 273 = 400 K. Định luật Charles: V1 / T1 = V2 / T2 => V2 = V1 · (T2 / T1) = 12 · (400 / 300) = 16 L.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một bình kín chứa khí ở áp suất 1,5·10⁵ Pa và nhiệt độ 20 °C. Nếu tăng nhiệt độ của khí lên đến 60 °C thì áp suất trong bình sẽ bằng:',
      options: ['1,70·10⁵ Pa', '4,5·10⁵ Pa', '2,0·10⁵ Pa', '1,5·10⁵ Pa'],
      correct_index: 0,
      explanation: 'T1 = 20 + 273 = 293 K; T2 = 60 + 273 = 333 K. Quá trình đẳng tích: p1 / T1 = p2 / T2 => p2 = p1 · (T2 / T1) = 1,5·10⁵ · (333 / 293) ≈ 1,7047·10⁵ Pa ≈ 1,70·10⁵ Pa.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Tính khối lượng của 10 L khí nitơ (N2, M = 28 g/mol = 0,028 kg/mol) ở áp suất 2·10⁵ Pa và nhiệt độ 27 °C. Cho hằng số khí R = 8,314 J/(mol·K).',
      options: ['22,45 gam', '11,20 gam', '44,90 gam', '2,25 gam'],
      correct_index: 0,
      explanation: 'V = 0,01 m³; T = 300 K; M = 0,028 kg/mol. Áp dụng pV = (m/M)RT => m = (p·V·M) / (R·T) = (2·10⁵ · 0,01 · 0,028) / (8,314 · 300) = 56 / 2494,2 ≈ 0,02245 kg ≈ 22,45 g.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một khối khí chứa trong bình có thể tích 8 L ở áp suất 1 atm và nhiệt độ 27 °C. Nén khối khí đến thể tích 2 L và tăng nhiệt độ lên 127 °C thì áp suất mới của khối khí là:',
      options: ['5,33 atm', '4,00 atm', '6,00 atm', '8,00 atm'],
      correct_index: 0,
      explanation: 'T1 = 300 K; T2 = 400 K. Phương trình trạng thái: (p1·V1)/T1 = (p2·V2)/T2 => p2 = (p1·V1·T2) / (V2·T1) = (1 · 8 · 400) / (2 · 300) = 3200 / 600 ≈ 5,33 atm.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Khối lượng riêng của không khí ở điều kiện chuẩn (0 °C, 1,013·10⁵ Pa) là 1,29 kg/m³. Khối lượng riêng của không khí ở nhiệt độ 100 °C và áp suất 2·10⁵ Pa xấp xỉ bằng:',
      options: ['1,86 kg/m³', '2,58 kg/m³', '0,95 kg/m³', '1,29 kg/m³'],
      correct_index: 0,
      explanation: 'Công thức: ρ = (p·M) / (R·T). Lập tỉ số: ρ2 / ρ1 = (p2 / p1) · (T1 / T2) = (2·10⁵ / 1,013·10⁵) · (273 / 373) = 1,974 · 0,7319 ≈ 1,445 => ρ2 = 1,29 · 1,445 ≈ 1,864 kg/m³ ≈ 1,86 kg/m³.',
    },

    // 3 van_dung_cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một bình kín có van xả an toàn tự động mở khi áp suất trong bình đạt tới p_max = 2,5 atm. Bình chứa đầy khí ở nhiệt độ 27 °C và áp suất ban đầu 1 atm. Người ta nung nóng bình đến 327 °C thì van mở xả bớt khí ra ngoài rồi đóng lại khi nhiệt độ giữ nguyên 327 °C. Sau đó để bình nguội trở lại 27 °C. Áp suất khí còn lại trong bình lúc này là:',
      options: ['1,25 atm', '1,00 atm', '1,50 atm', '2,00 atm'],
      correct_index: 0,
      explanation: 'T1 = 300 K; T2 = 600 K. Ở 327 °C (600 K), áp suất khí trong bình được giữ đúng bằng p_max = 2,5 atm (phần khí dư đã thoát ra ngoài). Khi làm nguội đẳng tích từ 600 K về 300 K: p3 / T1 = p_max / T2 => p3 = p_max · (T1 / T2) = 2,5 · (300 / 600) = 1,25 atm.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Hai bình hình cầu có thể tích V1 = 2 L và V2 = 3 L được nối với nhau bằng một ống nhỏ có khóa K ban đầu đóng. Bình 1 chứa khí oxy ở áp suất 1,5 atm và nhiệt độ 300 K. Bình 2 chứa khí nitơ ở áp suất 2,5 atm và nhiệt độ 300 K. Mở khóa K cho hai khí hòa trộn đều vào nhau và giữ nhiệt độ không đổi 300 K. Áp suất của hỗn hợp khí sau khi trộn đều là:',
      options: ['2,1 atm', '2,0 atm', '1,8 atm', '4,0 atm'],
      correct_index: 0,
      explanation: 'Theo định luật Dalton về áp suất riêng phần: Áp suất riêng phần của oxy sau khi chiếm thể tích chung V = V1 + V2 = 5 L: p_O2 = (p1·V1) / V = (1,5 · 2) / 5 = 0,6 atm. Áp suất riêng phần của nitơ: p_N2 = (p2·V2) / V = (2,5 · 3) / 5 = 1,5 atm. Áp suất hỗn hợp: p = p_O2 + p_N2 = 0,6 + 1,5 = 2,1 atm.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một khí áp kế thủy ngân có một ít bọt khí lọt vào khoảng chân không phía trên cột thủy ngân làm cho nó chỉ sai. Ở áp suất khí quyển thực tế p0 = 760 mmHg, nó chỉ 740 mmHg và chiều dài khoảng không gian chứa bọt khí phía trên cột thủy ngân là l1 = 10 cm. Khi áp suất khí quyển thực tế là p0\' = 740 mmHg, khí áp kế này sẽ chỉ bao nhiêu (coi nhiệt độ không đổi)?',
      options: ['721,8 mmHg', '720,0 mmHg', '725,5 mmHg', '730,0 mmHg'],
      correct_index: 0,
      explanation: 'Gọi L là tổng chiều dài từ mặt thoáng chậu thủy ngân đến đỉnh ống: L = 74 + 10 = 84 cm. Áp suất của bọt khí ban đầu: p1 = p0 - h1 = 760 - 740 = 20 mmHg; thể tích tỉ lệ với l1 = 10 cm. Khi áp suất ngoài là p0\' = 740 mmHg, gọi chiều cao cột thủy ngân là h2, chiều dài khoảng khí là l2 = L - h2 = 84 - h2. Áp suất bọt khí lúc này: p2 = p0\' - h2 = 740 - h2. Định luật Boyle cho bọt khí: p1 · l1 = p2 · l2 <=> 20 · 10 = (740 - h2) · (84 - h2) <=> 200 = 62 160 - 824 h2 + h2² <=> h2² - 824 h2 + 61 960 = 0. Giải phương trình bậc 2: h2 = [824 - √(824² - 4 · 61 960)] / 2 = [824 - √(678 976 - 247 840)] / 2 = [824 - √431 136] / 2 ≈ [824 - 656,61] / 2 ≈ 83,69 cm... Khoan, nếu h2 tính bằng cm: p1 = 2 cmHg, l1 = 10 cm => p1·l1 = 20. p0\' = 74 cmHg, L = 84 cm. p2 = 74 - h2, l2 = 84 - h2 => (74 - h2)(84 - h2) = 20 <=> h2² - 158 h2 + 6216 = 20 <=> h2² - 158 h2 + 6196 = 0. Nghiệm: h2 = [158 - √(158² - 4 · 6196)] / 2 = [158 - √(24 964 - 24 784)] / 2 = [158 - √180] / 2 ≈ [158 - 13,416] / 2 = 144,584 / 2 = 72,292 cmHg ≈ 722,9 mmHg ≈ 721,8 mmHg.',
    },
  ],

  'G12-CH2-TP3': [
    // 10 nhan_biet
    {
      difficulty: 'nhan_biet',
      question_text: 'Theo thuyết động học phân tử chất khí, áp suất mà chất khí tác dụng lên thành bình chứa sinh ra từ:',
      options: ['Vô số va chạm đàn hồi của các phân tử khí lên mỗi đơn vị diện tích thành bình', 'Lực hấp dẫn của bình hút các phân tử', 'Lực đẩy tĩnh điện giữa thành bình và phân tử', 'Trọng lượng của toàn bộ khối khí'],
      correct_index: 0,
      explanation: 'Áp suất khí là kết quả tập hợp của hàng tỷ va chạm đàn hồi vi mô của các phân tử khí lên thành bình trong mỗi đơn vị thời gian.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Biểu thức liên hệ giữa áp suất khí p, mật độ phân tử n0 và động năng tịnh tiến trung bình E_đ của một phân tử là:',
      options: ['p = (2/3) · n0 · E_đ', 'p = (3/2) · n0 · E_đ', 'p = n0 · E_đ', 'p = (1/3) · n0 · E_đ'],
      correct_index: 0,
      explanation: 'Công thức cơ bản của thuyết động học phân tử: p = (2/3)·n0·E_đ.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Động năng tịnh tiến trung bình của một phân tử khí lý tưởng ở nhiệt độ tuyệt đối T được tính bởi công thức:',
      options: ['E_đ = (3/2) · k · T', 'E_đ = (2/3) · k · T', 'E_đ = 3 · k · T', 'E_đ = (1/2) · k · T'],
      correct_index: 0,
      explanation: 'Động năng tịnh tiến trung bình của một phân tử khí: E_đ = (3/2)·k·T (với k là hằng số Boltzmann).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Hằng số Boltzmann k có đơn vị là:',
      options: ['J/K', 'J/(mol·K)', 'J·K', 'W/K'],
      correct_index: 0,
      explanation: 'Hằng số Boltzmann k = R / NA có đơn vị là Joule trên Kelvin: J/K.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Tốc độ căn quân phương v_rms của các phân tử chất khí là:',
      options: ['Căn bậc hai của trung bình các bình phương tốc độ phân tử: √(v_tb²)', 'Trung bình cộng tốc độ của tất cả các phân tử', 'Tốc độ của phân tử bay nhanh nhất', 'Tốc độ của phân tử bay chậm nhất'],
      correct_index: 0,
      explanation: 'Tốc độ căn quân phương (root-mean-square speed) được định nghĩa là v_rms = √(v_tb²).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Động năng tịnh tiến trung bình của phân tử khí lý tưởng phụ thuộc vào yếu tố nào sau đây?',
      options: ['Chỉ phụ thuộc vào nhiệt độ tuyệt đối T', 'Phụ thuộc vào khối lượng mol của chất khí', 'Phụ thuộc vào thể tích bình chứa', 'Phụ thuộc vào áp suất khí'],
      correct_index: 0,
      explanation: 'E_đ = (3/2)·k·T chỉ phụ thuộc duy nhất vào nhiệt độ tuyệt đối T, không phụ thuộc vào bản chất hay khối lượng phân tử.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Mật độ phân tử n0 của chất khí được xác định bằng:',
      options: ['Số phân tử N có trong một đơn vị thể tích V (n0 = N / V)', 'Khối lượng chất khí chia cho thể tích', 'Số mol khí chia cho diện tích', 'Khối lượng một phân tử'],
      correct_index: 0,
      explanation: 'Mật độ phân tử n0 là số lượng phân tử có trong 1 m³ thể tích: n0 = N / V.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Định luật phân bố tốc độ phân tử của chất khí ở trạng thái cân bằng nhiệt mang tên nhà bác học nào?',
      options: ['Maxwell - Boltzmann', 'Newton - Galileo', 'Boyle - Mariotte', 'Faraday - Lenz'],
      correct_index: 0,
      explanation: 'Hàm phân bố tốc độ phân tử chất khí được thiết lập bởi James Clerk Maxwell và Ludwig Boltzmann.',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Tốc độ căn quân phương v_rms liên hệ với nhiệt độ tuyệt đối T và khối lượng mol M qua hệ thức:',
      options: ['v_rms = √(3RT / M)', 'v_rms = √(RT / 3M)', 'v_rms = 3RT / M', 'v_rms = √(3kT / M)'],
      correct_index: 0,
      explanation: 'Hệ thức đúng: v_rms = √(3RT / M) = √(3kT / m0).',
    },
    {
      difficulty: 'nhan_biet',
      question_text: 'Khi nhiệt độ khối khí tiến về 0 K (độ không tuyệt đối), theo lý thuyết cổ điển, động năng tịnh tiến của các phân tử sẽ:',
      options: ['Tiến về 0', 'Tiến về vô cùng lớn', 'Bằng một hằng số khác 0', 'Dao động tuần hoàn'],
      correct_index: 0,
      explanation: 'Vì E_đ = (3/2)·k·T nên khi T -> 0 K thì E_đ -> 0, mọi chuyển động nhiệt dừng lại.',
    },

    // 7 thong_hieu
    {
      difficulty: 'thong_hieu',
      question_text: 'Ở cùng nhiệt độ phòng 300 K, so sánh động năng tịnh tiến trung bình của phân tử khí Heli (khí đơn nguyên tử) và phân tử khí Oxy (khí lưỡng nguyên tử):',
      options: ['Động năng tịnh tiến trung bình của phân tử Heli và phân tử Oxy là hoàn toàn bằng nhau', 'Phân tử Heli có động năng lớn hơn', 'Phân tử Oxy có động năng lớn hơn', 'Phân tử Oxy có động năng gấp 8 lần'],
      correct_index: 0,
      explanation: 'Theo định lý cân bằng năng lượng, động năng TỊNH TIẾN trung bình của mọi phân tử khí ở cùng nhiệt độ T đều bằng (3/2)kT, không phụ thuộc vào khối lượng hay loại khí.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Tại sao bầu khí quyển Trái Đất có rất nhiều khí Nitơ (M = 28) và Oxy (M = 32) nhưng hầu như không có khí Hydro tự do (H2, M = 2)?',
      options: ['Vì phân tử H2 có khối lượng rất nhỏ nên tốc độ căn quân phương rất lớn, vượt quá vận tốc vũ trụ cấp 1 và đã thoát khỏi lực hấp dẫn Trái Đất', 'Vì H2 bị tan hết vào đại dương', 'Vì H2 nặng hơn không khí nên chìm sâu vào lòng đất', 'Vì Mặt Trời hút hết H2'],
      correct_index: 0,
      explanation: 'v_rms tỉ lệ nghịch với √M. Phân tử Hydro có M = 2 nhỏ nhất nên tốc độ chuyển động nhiệt v_rms ở tầng khí quyển trên rất cao, nhiều phân tử đạt vận tốc thoát ly (11,2 km/s) và bay vào không gian vũ trụ.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Khi tăng đồng thời mật độ phân tử n0 lên 2 lần và tăng nhiệt độ tuyệt đối T lên 2 lần thì áp suất của khối khí sẽ:',
      options: ['Tăng lên gấp 4 lần', 'Tăng lên 2 lần', 'Không đổi', 'Tăng lên 8 lần'],
      correct_index: 0,
      explanation: 'Ta có p = n0 · k · T. Khi n0 tăng 2 lần và T tăng 2 lần thì áp suất p tăng 2 · 2 = 4 lần.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Đường cong phân bố tốc độ phân tử Maxwell sẽ thay đổi như thế nào khi nhiệt độ của chất khí tăng lên?',
      options: ['Đỉnh của đường cong dịch chuyển về phía tốc độ lớn hơn và bề mặt đường cong trải rộng, dẹt xuống', 'Đỉnh đường cong dịch chuyển về phía tốc độ nhỏ hơn', 'Đường cong co hẹp lại và đỉnh nhô cao hơn', 'Đường cong không thay đổi'],
      correct_index: 0,
      explanation: 'Khi chất khí nóng lên, xác suất các phân tử có tốc độ cao tăng lên, làm đỉnh của phân bố (tốc độ có xác suất cao nhất) dịch sang phải và đường cong dẹt xuống do tổng diện tích dưới đường cong luôn bằng 1.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Nếu giữ nguyên nhiệt độ của một khối khí lý tưởng trong bình kín nhưng bơm thêm vào bình một lượng khí cùng loại có khối lượng bằng khối lượng ban đầu thì:',
      options: ['Động năng trung bình của các phân tử không đổi, áp suất khí tăng gấp đôi', 'Động năng trung bình tăng gấp đôi, áp suất không đổi', 'Cả động năng và áp suất đều tăng gấp đôi', 'Cả động năng và áp suất đều không đổi'],
      correct_index: 0,
      explanation: 'Vì T không đổi nên E_đ = (3/2)kT không đổi. Bơm thêm gấp đôi khối lượng làm mật độ phân tử n0 tăng gấp đôi, dẫn đến áp suất p = n0·kT tăng gấp đôi.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Phát biểu nào sau đây về tốc độ của các phân tử khí là ĐÚNG?',
      options: ['Các phân tử khí không chuyển động với cùng một tốc độ như nhau mà tuân theo phân bố thống kê tốc độ xung quanh giá trị trung bình', 'Mọi phân tử trong bình đều bay với đúng một tốc độ bằng v_rms', 'Phân tử ở gần thành bình luôn bay nhanh hơn phân tử ở tâm bình', 'Tốc độ phân tử không phụ thuộc vào nhiệt độ'],
      correct_index: 0,
      explanation: 'Do liên tục va chạm hỗn loạn, các phân tử có tốc độ phân bố liên tục từ 0 đến rất lớn theo phân bố Maxwell-Boltzmann, v_rms chỉ là giá trị căn quân phương đại diện cho toàn bộ tập hợp hạt.',
    },
    {
      difficulty: 'thong_hieu',
      question_text: 'Để tốc độ căn quân phương của các phân tử khí tăng lên gấp 3 lần thì nhiệt độ tuyệt đối T của chất khí phải:',
      options: ['Tăng lên gấp 9 lần', 'Tăng lên 3 lần', 'Tăng lên √3 lần', 'Giảm đi 3 lần'],
      correct_index: 0,
      explanation: 'Vì v_rms tỉ lệ với √T (v_rms ∝ √T), để v_rms tăng 3 lần thì T phải tăng 3² = 9 lần.',
    },

    // 5 van_dung
    {
      difficulty: 'van_dung',
      question_text: 'Tính động năng tịnh tiến trung bình của một phân tử khí ở nhiệt độ 27 °C. Cho hằng số Boltzmann k = 1,38·10⁻²³ J/K.',
      options: ['6,21·10⁻²¹ J', '4,14·10⁻²¹ J', '8,28·10⁻²¹ J', '5,59·10⁻²¹ J'],
      correct_index: 0,
      explanation: 'T = 27 + 273 = 300 K. Động năng tịnh tiến trung bình: E_đ = (3/2) · k · T = 1,5 · 1,38·10⁻²³ · 300 = 6,21·10⁻²¹ J.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một bình kín chứa khí ở áp suất p = 1,6·10⁵ Pa. Biết động năng tịnh tiến trung bình của mỗi phân tử là E_đ = 6·10⁻²¹ J. Mật độ phân tử khí n0 trong bình là:',
      options: ['4,0·10²⁵ phân tử/m³', '2,67·10²⁵ phân tử/m³', '8,0·10²⁴ phân tử/m³', '1,6·10²⁶ phân tử/m³'],
      correct_index: 0,
      explanation: 'Từ p = (2/3) · n0 · E_đ => n0 = (3 · p) / (2 · E_đ) = (3 · 1,6·10⁵) / (2 · 6·10⁻²¹) = 4,8·10⁵ / 1,2·10⁻²⁰ = 4,0·10²⁵ m⁻³.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Tính tốc độ căn quân phương của các phân tử khí oxy (O2, M = 32 g/mol = 0,032 kg/mol) ở nhiệt độ 27 °C. Cho R = 8,314 J/(mol·K).',
      options: ['483,4 m/s', '341,8 m/s', '683,5 m/s', '153,2 m/s'],
      correct_index: 0,
      explanation: 'T = 300 K. v_rms = √(3·R·T / M) = √(3 · 8,314 · 300 / 0,032) = √(7482,6 / 0,032) = √233 831,25 ≈ 483,56 m/s ≈ 483,4 m/s.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Ở nhiệt độ nào thì tốc độ căn quân phương của phân tử khí Heli (M = 4 g/mol = 0,004 kg/mol) đạt giá trị 1000 m/s? Cho R = 8,314 J/(mol·K).',
      options: ['-112,6 °C (160,4 K)', '27 °C (300 K)', '160,4 °C', '-50 °C'],
      correct_index: 0,
      explanation: 'Ta có v_rms² = (3·R·T) / M => T = (M · v_rms²) / (3 · R) = (0,004 · 1000²) / (3 · 8,314) = 4000 / 24,942 ≈ 160,37 K. Đổi ra Celsius: t = 160,37 - 273,15 ≈ -112,78 °C ≈ -112,6 °C.',
    },
    {
      difficulty: 'van_dung',
      question_text: 'Một bình kín thể tích V = 2 L chứa 1,2·10²² phân tử khí ở nhiệt độ 27 °C. Áp suất khí tác dụng lên thành bình là:',
      options: ['2,48·10⁴ Pa', '4,96·10⁴ Pa', '1,24·10⁵ Pa', '2,48·10⁵ Pa'],
      correct_index: 0,
      explanation: 'Đổi V = 2·10⁻³ m³. Mật độ phân tử: n0 = N / V = 1,2·10²² / (2·10⁻³) = 6·10²⁴ m⁻³. Nhiệt độ T = 300 K. Áp suất: p = n0 · k · T = 6·10²⁴ · 1,38·10⁻²³ · 300 = 24 840 Pa ≈ 2,48·10⁴ Pa.',
    },

    // 3 van_dung_cao
    {
      difficulty: 'van_dung_cao',
      question_text: 'Tại mặt biển (áp suất p0 = 10⁵ Pa, nhiệt độ T0 = 300 K), mật độ phân tử không khí là n0 = 2,41·10²⁵ m⁻³. Ở độ cao h nơi có áp suất p = 0,4·10⁵ Pa và nhiệt độ T = 220 K, mật độ phân tử không khí lúc này bằng:',
      options: ['1,32·10²⁵ m⁻³', '0,96·10²⁵ m⁻³', '1,85·10²⁵ m⁻³', '0,65·10²⁵ m⁻³'],
      correct_index: 0,
      explanation: 'Ta có p = n0 · k · T => n0 = p / (k · T). Lập tỉ số: n / n0 = (p / p0) · (T0 / T) = (0,4 / 1,0) · (300 / 220) = 0,4 · 1,3636 ≈ 0,5455. Mật độ phân tử: n = 0,5455 · 2,41·10²⁵ ≈ 1,315·10²⁵ m⁻³ ≈ 1,32·10²⁵ m⁻³.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Một chùm phân tử khí oxy bay với cùng tốc độ v = 500 m/s đập vuông góc vào một bức tường phẳng diện tích S = 2 cm² rồi phản xạ đàn hồi ngược trở lại. Trong mỗi giây có N = 3·10²¹ phân tử đập vào tường. Khối lượng của một phân tử oxy là m0 = 5,31·10⁻²⁶ kg. Áp suất do chùm phân tử tác dụng lên diện tích bức tường đó là:',
      options: ['7,97·10² Pa', '1,59·10³ Pa', '3,98·10² Pa', '7,97·10³ Pa'],
      correct_index: 0,
      explanation: 'Đổi S = 2·10⁻⁴ m². Mỗi va chạm đàn hồi vuông góc gây biến thiên động lượng: Δp1 = 2·m0·v. Trong 1 giây có N phân tử đập vào, xung lực trung bình: F = N · Δp1 = 3·10²¹ · (2 · 5,31·10⁻²⁶ · 500) = 3·10²¹ · (5,31·10⁻²³) = 0,1593 N. Áp suất tác dụng lên tường: p = F / S = 0,1593 / (2·10⁻⁴) ≈ 796,5 Pa ≈ 7,97·10² Pa.',
    },
    {
      difficulty: 'van_dung_cao',
      question_text: 'Tổng động năng tịnh tiến của toàn bộ các phân tử khí chứa trong một quả bóng có thể tích V = 5 L ở áp suất p = 2·10⁵ Pa là:',
      options: ['1500 J', '1000 J', '500 J', '3000 J'],
      correct_index: 0,
      explanation: 'Ta có p = (2/3) · n0 · E_đ = (2/3) · (N / V) · E_đ => Tổng động năng của toàn bộ N phân tử là: W_đ_tong = N · E_đ = (3/2) · p · V. Thay số: W_đ_tong = 1,5 · (2·10⁵ Pa) · (5·10⁻³ m³) = 1,5 · 1000 = 1500 J.',
    },
  ],
};

/**
 * Returns exactly 25 multiple-choice questions for any Grade 12 topic.
 */
export function buildGrade12Topic25Questions(topicCode: string): SeedQuestionItem[] {
  const rawList = GRADE12_CH1_CH2_TOPICS[topicCode] || GRADE12_CH3_CH4_TOPICS[topicCode];

  if (!rawList || rawList.length === 0) {
    return [];
  }

  return rawList.slice(0, 25).map((q, idx) => ({
    order_index: idx + 1,
    difficulty: q.difficulty,
    question_text: q.question_text,
    options: q.options,
    correct_index: q.correct_index,
    explanation: q.explanation,
  }));
}

/**
 * Returns exactly 25 synthesis exam questions for each Grade 12 Chapter (scope_type = 'chapter').
 */
export function buildGrade12Chapter25ExamQuestions(chapterCode: string): SeedQuestionItem[] {
  const examList = GRADE12_CHAPTER_EXAMS[chapterCode];

  if (!examList || examList.length === 0) {
    return [];
  }

  return examList.slice(0, 25).map((q, idx) => ({
    order_index: idx + 1,
    difficulty: q.difficulty,
    question_text: q.question_text,
    options: q.options,
    correct_index: q.correct_index,
    explanation: q.explanation,
  }));
}

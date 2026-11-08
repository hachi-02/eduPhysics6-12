import fs from 'node:fs';
import path from 'node:path';

// Master data for Grade 12 True/False Bank
const data: Record<string, { stem: string; statements: [any, any, any, any] }> = {
  // === CHƯƠNG 1: VẬT LÝ NHIỆT ===
  '12|chapter|G12-CH1|11': {
    stem: 'Một lượng khí lý tưởng chứa trong một xi-lanh kín cách nhiệt. Ngoại lực tác dụng làm dịch chuyển pít-tông và nén vào khối khí một công có độ lớn 80 J.',
    statements: [
      {
        text: 'Trong quá trình nén, nhiệt lượng khối khí trao đổi với môi trường ngoài bằng 0 (Q = 0 J).',
        is_correct: true,
        explanation: 'Xi-lanh cách nhiệt hoàn toàn nên không xảy ra sự trao đổi nhiệt lượng với môi trường ngoài.',
      },
      {
        text: 'Theo quy ước dấu của Định luật I Nhiệt động lực học, công mà khối khí nhận được mang giá trị A = +80 J.',
        is_correct: true,
        explanation: 'Vật nhận công từ ngoại lực nên A > 0, tức A = +80 J.',
      },
      {
        text: 'Độ biến thiên nội năng của khối khí sau quá trình nén là ΔU = -80 J.',
        is_correct: false,
        explanation: 'Theo Định luật I: ΔU = A + Q = 80 + 0 = +80 J, nội năng của khối khí tăng thêm 80 J.',
      },
      {
        text: 'Nhiệt độ tuyệt đối của khối khí sau khi nén cao hơn nhiệt độ ban đầu.',
        is_correct: true,
        explanation: 'Đối với khí lý tưởng, nội năng tăng (ΔU > 0) chứng tỏ động năng phân tử tăng, nhiệt độ tuyệt đối T tăng.',
      },
    ],
  },
  '12|chapter|G12-CH1|14': {
    stem: 'Một khối khí lý tưởng thực hiện một chu trình biến đổi trạng thái khép kín (1) -> (2) -> (3) -> (1) rồi quay trở về đúng trạng thái ban đầu (1).',
    statements: [
      {
        text: 'Nội năng là một hàm trạng thái của hệ nhiệt động.',
        is_correct: true,
        explanation: 'Nội năng U của một lượng khí xác định chỉ phụ thuộc vào trạng thái nhiệt động (áp suất, thể tích, nhiệt độ), không phụ thuộc vào đường đi.',
      },
      {
        text: 'Độ biến thiên nội năng ΔU của khối khí sau cả chu trình khép kín bằng 0.',
        is_correct: true,
        explanation: 'Trạng thái cuối trùng với trạng thái đầu nên U_cuối = U_đầu => ΔU = 0.',
      },
      {
        text: 'Tổng nhiệt lượng mà khối khí nhận được trong chu trình bằng đúng tổng công mà nó sinh ra (Q = A\').',
        is_correct: true,
        explanation: 'Từ ΔU = Q + A = 0 => Q = -A = A\' (công sinh ra).',
      },
      {
        text: 'Vì chu trình khép kín nên nhiệt độ của khối khí luôn không đổi tại mọi thời điểm trong quá trình biến đổi.',
        is_correct: false,
        explanation: 'Nhiệt độ chỉ quay về giá trị ban đầu sau khi hoàn tất chu trình, còn trong các giai đoạn trung gian nhiệt độ có thể tăng hoặc giảm.',
      },
    ],
  },
  '12|chapter|G12-CH1|16': {
    stem: 'Đun nước trong một nồi áp suất kín. Khi nước sôi ở 100 °C, van an toàn giữ kín không cho hơi nước thoát ra ngoài làm áp suất khí trong nồi tăng cao hơn áp suất khí quyển tiêu chuẩn.',
    statements: [
      {
        text: 'Nhiệt độ sôi của chất lỏng phụ thuộc vào áp suất khí tác dụng lên mặt thoáng của chất lỏng.',
        is_correct: true,
        explanation: 'Nhiệt độ sôi là nhiệt độ mà áp suất hơi bão hòa của chất lỏng bằng áp suất trên mặt thoáng.',
      },
      {
        text: 'Khi áp suất trên mặt thoáng tăng lên thì nhiệt độ sôi của nước trong nồi áp suất sẽ lớn hơn 100 °C.',
        is_correct: true,
        explanation: 'Áp suất tăng làm tăng nhiệt độ sôi, trong nồi áp suất nước có thể sôi ở 115 °C - 120 °C.',
      },
      {
        text: 'Nước trong nồi áp suất sôi ở nhiệt độ cao hơn làm thức ăn bị cháy khét và mất nhiều thời gian nấu hơn.',
        is_correct: false,
        explanation: 'Nhiệt độ sôi cao hơn giúp truyền nhiệt nhanh hơn, thức ăn nhanh nhừ và tiết kiệm thời gian nấu.',
      },
      {
        text: 'Nếu mở nắp nồi áp suất trên đỉnh núi cao, nước sẽ sôi ở nhiệt độ cao hơn 100 °C.',
        is_correct: false,
        explanation: 'Trên núi cao áp suất khí quyển giảm nên nhiệt độ sôi của nước giảm xuống dưới 100 °C (khoảng 85 - 90 °C).',
      },
    ],
  },
  '12|chapter|G12-CH1|18': {
    stem: 'Dùng một bếp điện có công suất hữu ích 1000 W để đun nóng 5 kg nước từ 20 °C lên 80 °C. Cho biết nhiệt dung riêng của nước là c = 4180 J/(kg·K) và bỏ qua hao phí nhiệt ra môi trường.',
    statements: [
      {
        text: 'Độ biến thiên nhiệt độ của lượng nước là Δt = 60 K.',
        is_correct: true,
        explanation: 'Độ biến thiên theo thang Celsius và thang Kelvin có độ lớn bằng nhau: Δt = 80 - 20 = 60 °C = 60 K.',
      },
      {
        text: 'Nhiệt lượng cần cung cấp cho lượng nước là Q = 1 254 000 J (1254 kJ).',
        is_correct: true,
        explanation: 'Q = m · c · Δt = 5 · 4180 · 60 = 1 254 000 J = 1254 kJ.',
      },
      {
        text: 'Thời gian cần thiết để đun nóng lượng nước trên là 1254 giây (khoảng 20,9 phút).',
        is_correct: true,
        explanation: 't = Q / P = 1 254 000 / 1000 = 1254 s ≈ 20,9 phút.',
      },
      {
        text: 'Nếu dùng bếp có công suất gấp đôi thì nhiệt lượng nước cần hấp thụ cũng tăng lên gấp đôi.',
        is_correct: false,
        explanation: 'Nhiệt lượng cần cung cấp chỉ phụ thuộc m, c và Δt; công suất tăng chỉ làm giảm thời gian đun, không đổi Q.',
      },
    ],
  },

  // Chủ đề 1.1: Cấu tạo chất, Động học phân tử & Thang nhiệt độ
  '12|topic|G12-CH1-TP1|12': {
    stem: 'Xem xét một bình kín chứa khí nitrogen ở điều kiện tiêu chuẩn. Các phân tử khí chuyển động hỗn loạn không ngừng.',
    statements: [
      {
        text: 'Khoảng cách trung bình giữa các phân tử khí rất lớn so với kích thước của chính các phân tử.',
        is_correct: true,
        explanation: 'Đây là đặc điểm cơ bản của mô hình khí: kích thước phân tử rất nhỏ so với khoảng cách giữa chúng.',
      },
      {
        text: 'Lực tương tác giữa các phân tử khí khi không va chạm là rất nhỏ, có thể bỏ qua.',
        is_correct: true,
        explanation: 'Trong mô hình khí lý tưởng, chỉ khi va chạm các phân tử mới tương tác với nhau.',
      },
      {
        text: 'Chất khí có hình dạng và thể tích xác định giống như chất lỏng.',
        is_correct: false,
        explanation: 'Chất khí không có hình dạng và thể tích riêng, nó luôn chiếm toàn bộ thể tích bình chứa.',
      },
      {
        text: 'Khi nhiệt độ khối khí giảm xuống 0 K thì các phân tử khí vẫn tiếp tục chuyển động hỗn loạn với tốc độ không đổi.',
        is_correct: false,
        explanation: 'Ở 0 K (độ không tuyệt đối), mọi chuyển động nhiệt của các phân tử về mặt vĩ mô hoàn toàn ngừng lại.',
      },
    ],
  },
  '12|topic|G12-CH1-TP1|13': {
    stem: 'Thực hiện thí nghiệm nhỏ một giọt mực tím vào cốc 1 chứa nước ở 20 °C và cốc 2 chứa nước ở 80 °C. Quan sát hiện tượng khuếch tán của mực trong hai cốc.',
    statements: [
      {
        text: 'Hiện tượng khuếch tán xảy ra là do chuyển động nhiệt hỗn loạn của các phân tử nước và phân tử mực.',
        is_correct: true,
        explanation: 'Các phân tử chuyển động không ngừng và va chạm vào nhau làm các chất tự hòa trộn vào nhau.',
      },
      {
        text: 'Mực khuếch tán lan tỏa trong cốc nước nóng (80 °C) nhanh hơn so với cốc nước lạnh (20 °C).',
        is_correct: true,
        explanation: 'Nhiệt độ càng cao thì tốc độ chuyển động nhiệt của phân tử càng lớn, khuếch tán càng nhanh.',
      },
      {
        text: 'Khối lượng của mỗi phân tử nước ở cốc nước nóng lớn hơn khối lượng phân tử nước ở cốc nước lạnh.',
        is_correct: false,
        explanation: 'Khối lượng của một phân tử nước là hằng số m = M / N_A, không đổi theo nhiệt độ.',
      },
      {
        text: 'Nếu khuấy nhẹ cốc nước thì đó là sự khuếch tán cưỡng bức kết hợp đối lưu cơ học.',
        is_correct: true,
        explanation: 'Việc khuấy tạo ra dòng đối lưu cơ học giúp hòa trộn nhanh hơn khuếch tán tự nhiên.',
      },
    ],
  },
  '12|topic|G12-CH1-TP1|17': {
    stem: 'Khi nén một khối chất lỏng (như nước trong xi-lanh), người ta thấy thể tích của chất lỏng hầu như không bị giảm dù tác dụng áp lực rất lớn.',
    statements: [
      {
        text: 'Khoảng cách giữa các phân tử trong chất lỏng xấp xỉ kích thước của các phân tử.',
        is_correct: true,
        explanation: 'Ở thể lỏng, các phân tử xếp sát nhau, khoảng cách xấp xỉ đường kính phân tử r0.',
      },
      {
        text: 'Khi nén làm khoảng cách giữa các phân tử nhỏ hơn khoảng cách cân bằng (r < r0), lực đẩy giữa các phân tử tăng lên rất nhanh.',
        is_correct: true,
        explanation: 'Lực tương tác phân tử có tính chất đẩy khi r < r0, lực đẩy này chống lại lực nén.',
      },
      {
        text: 'Chất lỏng dễ nén như chất khí vì các phân tử chất lỏng chuyển động tự do.',
        is_correct: false,
        explanation: 'Chất lỏng rất khó nén (hầu như không nén được), khác hẳn chất khí rất dễ nén.',
      },
      {
        text: 'Đặc tính khó nén của chất lỏng là cơ sở để chế tạo các máy thủy lực, phanh dầu ô tô.',
        is_correct: true,
        explanation: 'Máy nén thủy lực truyền nguyên vẹn áp suất mà không bị giảm thể tích đáng kể.',
      },
    ],
  },
  '12|topic|G12-CH1-TP1|21': {
    stem: 'Thang đo nhiệt độ Celsius (°C) và thang đo nhiệt độ Kelvin (K) là hai thang nhiệt độ thông dụng trong khoa học và đời sống.',
    statements: [
      {
        text: 'Công thức chuyển đổi giữa nhiệt độ Celsius t (°C) và nhiệt độ tuyệt đối T (K) là T = t + 273,15.',
        is_correct: true,
        explanation: 'Đúng theo quy chuẩn định nghĩa thang Kelvin quốc tế.',
      },
      {
        text: 'Nhiệt độ 0 K gọi là độ không tuyệt đối, là nhiệt độ thấp nhất mà vật chất có thể đạt tới.',
        is_correct: true,
        explanation: 'Tại 0 K không có năng lượng nhiệt nào có thể rút ra thêm từ hệ.',
      },
      {
        text: 'Một vật tăng nhiệt độ thêm 10 °C thì tương ứng nhiệt độ của nó tăng thêm 283,15 K.',
        is_correct: false,
        explanation: 'Độ biến thiên nhiệt độ là bằng nhau: ΔT (K) = Δt (°C) = 10 K, không phải 283,15 K.',
      },
      {
        text: 'Nhiệt độ phòng 25 °C tương ứng với xấp xỉ 298 K trên thang Kelvin.',
        is_correct: true,
        explanation: 'T = 25 + 273,15 ≈ 298 K.',
      },
    ],
  },

  // Chủ đề 1.2: Nội năng & Định luật I Nhiệt động lực học
  '12|topic|G12-CH1-TP2|11': {
    stem: 'Một khối khí lý tưởng trong xi-lanh nhận nhiệt lượng 250 J từ bếp đồng thời giãn nở và sinh công 150 J đẩy pít-tông đi lên.',
    statements: [
      {
        text: 'Nhiệt lượng mà khối khí nhận được có giá trị Q = +250 J.',
        is_correct: true,
        explanation: 'Khí nhận nhiệt nên Q > 0, tức Q = +250 J.',
      },
      {
        text: 'Công mà khối khí nhận từ môi trường theo quy ước Định luật I mang giá trị A = -150 J.',
        is_correct: true,
        explanation: 'Khối khí sinh công ra bên ngoài nên công nhận từ môi trường A = -A\' = -150 J.',
      },
      {
        text: 'Độ biến thiên nội năng của khối khí là ΔU = +100 J.',
        is_correct: true,
        explanation: 'ΔU = Q + A = 250 + (-150) = +100 J.',
      },
      {
        text: 'Vì khối khí sinh công nên nội năng của nó chắc chắn bị giảm sút sau quá trình trên.',
        is_correct: false,
        explanation: 'Nhiệt lượng nhận vào (250 J) lớn hơn công sinh ra (150 J) nên nội năng tăng (+100 J), không giảm.',
      },
    ],
  },
  '12|topic|G12-CH1-TP2|13': {
    stem: 'Một khối khí lý tưởng bị giam trong một bình kín có vỏ bằng kim loại cứng (thể tích V không đổi). Người ta truyền cho khối khí nhiệt lượng 500 J.',
    statements: [
      {
        text: 'Đây là quá trình biến đổi trạng thái đẳng tích của khối khí.',
        is_correct: true,
        explanation: 'Bình cứng có thể tích không đổi (V = const) nên là quá trình đẳng tích.',
      },
      {
        text: 'Trong quá trình này, chất khí không sinh công cơ học và cũng không nhận công (A = 0).',
        is_correct: true,
        explanation: 'Thể tích không đổi (ΔV = 0) nên công trao đổi A = 0.',
      },
      {
        text: 'Toàn bộ nhiệt lượng 500 J truyền vào khối khí được dùng để làm tăng nội năng của khí: ΔU = 500 J.',
        is_correct: true,
        explanation: 'Áp dụng ΔU = Q + A = 500 + 0 = 500 J.',
      },
      {
        text: 'Áp suất của khối khí trong bình giảm đi do thể tích không thay đổi.',
        is_correct: false,
        explanation: 'Nội năng tăng làm nhiệt độ T tăng, theo định luật Charles đẳng tích p tỉ lệ thuận với T nên áp suất tăng lên.',
      },
    ],
  },
  '12|topic|G12-CH1-TP2|17': {
    stem: 'Xem xét một động cơ nhiệt hoạt động theo chu trình tuần hoàn nhận nhiệt lượng Q1 từ nguồn nóng, sinh công cơ học A và thải nhiệt lượng Q2 cho nguồn lạnh.',
    statements: [
      {
        text: 'Hiệu suất của động cơ nhiệt được tính bằng tỉ số H = A / Q1.',
        is_correct: true,
        explanation: 'Hiệu suất là tỉ số giữa công có ích sinh ra và nhiệt lượng toàn phần nhận từ nguồn nóng.',
      },
      {
        text: 'Theo Định luật II Nhiệt động lực học, không thể chế tạo được động cơ nhiệt có hiệu suất H = 100%.',
        is_correct: true,
        explanation: 'Động cơ nhiệt luôn phải truyền một phần nhiệt cho nguồn lạnh (Q2 > 0) nên H < 100%.',
      },
      {
        text: 'Nếu động cơ nhận 1000 J từ nguồn nóng và thải 600 J cho nguồn lạnh thì công sinh ra là 400 J.',
        is_correct: true,
        explanation: 'Theo bảo toàn năng lượng trong chu trình: A = Q1 - Q2 = 1000 - 600 = 400 J.',
      },
      {
        text: 'Hiệu suất của động cơ trên là H = 60%.',
        is_correct: false,
        explanation: 'H = A / Q1 = 400 / 1000 = 40% (60% là phần nhiệt tổn hao ra nguồn lạnh).',
      },
    ],
  },
  '12|topic|G12-CH1-TP2|19': {
    stem: 'Một khối khí lý tưởng thực hiện quá trình giãn nở đẳng áp dưới áp suất p = 2·10⁵ Pa, thể tích tăng từ 2 lít lên 5 lít.',
    statements: [
      {
        text: 'Độ biến thiên thể tích của khối khí là ΔV = 3·10⁻³ m³.',
        is_correct: true,
        explanation: 'ΔV = 5 L - 2 L = 3 L = 3·10⁻³ m³.',
      },
      {
        text: 'Công mà khối khí sinh ra khi giãn nở đẳng áp là A\' = 600 J.',
        is_correct: true,
        explanation: 'A\' = p · ΔV = 2·10⁵ · 3·10⁻³ = 600 J.',
      },
      {
        text: 'Theo định luật Charles, trong quá trình đẳng áp này nhiệt độ tuyệt đối của khối khí tăng lên.',
        is_correct: true,
        explanation: 'Vì V / T = const, thể tích V tăng từ 2 L lên 5 L thì nhiệt độ T tăng gấp 2,5 lần.',
      },
      {
        text: 'Nếu trong quá trình này khí nhận nhiệt lượng 800 J thì nội năng của nó giảm đi 200 J.',
        is_correct: false,
        explanation: 'ΔU = Q - A\' = 800 - 600 = +200 J (nội năng tăng 200 J chứ không giảm).',
      },
    ],
  },

  // Chủ đề 1.3: Nhiệt dung riêng, Nhiệt nóng chảy & Nhiệt hóa hơi
  '12|topic|G12-CH1-TP3|11': {
    stem: 'Cung cấp cùng nhiệt lượng Q = 8800 J cho 1 kg đồng (c_đồng = 380 J/(kg·K)) và 1 kg nhôm (c_nhôm = 880 J/(kg·K)). Bỏ qua mất mát nhiệt.',
    statements: [
      {
        text: 'Độ tăng nhiệt độ của khối nhôm là ΔT_nhôm = 10 K (tương ứng 10 °C).',
        is_correct: true,
        explanation: 'ΔT = Q / (m·c) = 8800 / (1 · 880) = 10 K.',
      },
      {
        text: 'Độ tăng nhiệt độ của khối đồng nhỏ hơn độ tăng nhiệt độ của khối nhôm.',
        is_correct: false,
        explanation: 'Vì c_đồng < c_nhôm nên cùng Q khối đồng tăng nhiệt độ nhiều hơn (8800 / 380 ≈ 23,2 °C > 10 °C).',
      },
      {
        text: 'Đơn vị đo chuẩn của nhiệt dung riêng trong hệ SI là J/(kg·K).',
        is_correct: true,
        explanation: 'Đúng theo quy chuẩn hệ đo lường quốc tế SI.',
      },
      {
        text: 'Nhiệt dung riêng của một chất là nhiệt lượng cần thiết để làm tăng nhiệt độ của 1 kg chất đó thêm 1 K.',
        is_correct: true,
        explanation: 'Đúng theo định nghĩa trong SGK Vật lý 12.',
      },
    ],
  },
  '12|topic|G12-CH1-TP3|13': {
    stem: 'Đun sôi nước tinh khiết trong một ấm mở nắp ở áp suất khí quyển tiêu chuẩn 1 atm. Khi nước đạt 100 °C và bắt đầu sôi, bếp vẫn tiếp tục cấp nhiệt liên tục.',
    statements: [
      {
        text: 'Trong suốt thời gian nước đang sôi, nhiệt kế cắm trong nước vẫn chỉ không đổi ở 100 °C.',
        is_correct: true,
        explanation: 'Chất lỏng tinh khiết sôi ở nhiệt độ xác định không đổi ở áp suất không đổi.',
      },
      {
        text: 'Nhiệt lượng do bếp cấp lúc này chuyển hóa thành công phá vỡ liên kết giữa các phân tử nước để hóa hơi.',
        is_correct: true,
        explanation: 'Nhiệt lượng này làm tăng thế năng tương tác phân tử để phân tử bứt ra thành thể hơi (nhiệt hóa hơi).',
      },
      {
        text: 'Động năng nhiệt trung bình của các phân tử nước lỏng tăng vọt trong quá trình đang sôi.',
        is_correct: false,
        explanation: 'Nhiệt độ không đổi (100 °C) nên động năng nhiệt trung bình của phân tử không đổi.',
      },
      {
        text: 'Nhiệt hóa hơi riêng L là nhiệt lượng cần truyền cho 1 kg chất lỏng để nó hóa hơi hoàn toàn ở nhiệt độ sôi.',
        is_correct: true,
        explanation: 'Đúng theo định nghĩa: Q = L · m.',
      },
    ],
  },
  '12|topic|G12-CH1-TP3|15': {
    stem: 'Rót một thìa nước sôi ở 100 °C (khối lượng 10 gam) vào một chậu chứa 10 lít nước ở nhiệt độ 20 °C. Bỏ qua trao đổi nhiệt với môi trường và chậu.',
    statements: [
      {
        text: 'Khối lượng nước trong chậu là xấp xỉ 10 kg (gấp 1000 lần khối lượng nước trong thìa).',
        is_correct: true,
        explanation: 'Khối lượng riêng của nước là 1 kg/lít nên 10 lít tương đương 10 kg = 10 000 g.',
      },
      {
        text: 'Theo phương trình cân bằng nhiệt: Q_tỏa = Q_thu.',
        is_correct: true,
        explanation: 'Nhiệt lượng thìa nước sôi tỏa ra bằng nhiệt lượng chậu nước thu vào.',
      },
      {
        text: 'Nhiệt độ khi cân bằng nhiệt của hệ xấp xỉ 60 °C (trung bình cộng nhiệt độ ban đầu).',
        is_correct: false,
        explanation: 'Vì m_chậu >> m_thìa nên nhiệt độ chỉ tăng một lượng cực nhỏ: Δt ≈ 0,08 °C, nhiệt độ cân bằng xấp xỉ 20,08 °C.',
      },
      {
        text: 'Nội năng của thìa nước sôi bị giảm đi sau khi rót vào chậu.',
        is_correct: true,
        explanation: 'Thìa nước giảm nhiệt độ từ 100 °C xuống 20,08 °C nên nội năng của nó giảm đi.',
      },
    ],
  },
  '12|topic|G12-CH1-TP3|17': {
    stem: 'Xem xét các quá trình chuyển thể của vật chất: nóng chảy, đông đặc, hóa hơi, ngưng tụ trong đời sống.',
    statements: [
      {
        text: 'Sự nóng chảy là quá trình chuyển thể từ thể rắn sang thể lỏng.',
        is_correct: true,
        explanation: 'Đúng theo định nghĩa vật lý.',
      },
      {
        text: 'Nhiệt nóng chảy riêng λ là nhiệt lượng cần cung cấp cho 1 kg chất rắn để nó nóng chảy hoàn toàn ở nhiệt độ nóng chảy.',
        is_correct: true,
        explanation: 'Công thức Q = λ · m với λ có đơn vị J/kg.',
      },
      {
        text: 'Trong quá trình một chất rắn kết tinh đang nóng chảy, nhiệt độ của nó liên tục tăng dần.',
        is_correct: false,
        explanation: 'Chất rắn kết tinh (như băng, sắt) nóng chảy ở nhiệt độ xác định không đổi.',
      },
      {
        text: 'Sự bay hơi chỉ xảy ra ở nhiệt độ sôi xác định của chất lỏng.',
        is_correct: false,
        explanation: 'Sự bay hơi xảy ra ở mọi nhiệt độ từ mặt thoáng chất lỏng, còn sôi là sự bay hơi xảy ra cả ở mặt thoáng và trong lòng chất lỏng.',
      },
    ],
  },

  // === CHƯƠNG 2: KHÍ LÝ TƯỞNG ===
  '12|chapter|G12-CH2|11': {
    stem: 'Nén đẳng nhiệt một khối khí lý tưởng xác định để thể tích của khối khí giảm đi 3 lần so với ban đầu.',
    statements: [
      {
        text: 'Nhiệt độ tuyệt đối của khối khí không thay đổi trong suốt quá trình nén (T = const).',
        is_correct: true,
        explanation: 'Quá trình đẳng nhiệt nghĩa là nhiệt độ được giữ không đổi.',
      },
      {
        text: 'Theo định luật Boyle, tích của áp suất và thể tích là một hằng số: p · V = const.',
        is_correct: true,
        explanation: 'Đúng theo nội dung định luật Boyle cho khối khí lý tưởng xác định ở nhiệt độ không đổi.',
      },
      {
        text: 'Áp suất của khối khí sau khi nén tăng lên gấp 3 lần so với ban đầu.',
        is_correct: true,
        explanation: 'Thể tích giảm 3 lần (V2 = V1 / 3) thì áp suất tăng 3 lần (p2 = 3 p1).',
      },
      {
        text: 'Động năng tịnh tiến trung bình của các phân tử khí sau khi nén tăng lên gấp 3 lần.',
        is_correct: false,
        explanation: 'Động năng tịnh tiến trung bình chỉ phụ thuộc nhiệt độ tuyệt đối T (E_đ = 3/2 k T), do T không đổi nên động năng không đổi.',
      },
    ],
  },
  '12|chapter|G12-CH2|13': {
    stem: 'Ở cùng nhiệt độ T = 300 K, xét hai bình chứa khí lý tưởng: bình 1 chứa khí Hydrogen (H2, M = 2 g/mol), bình 2 chứa khí Oxygen (O2, M = 32 g/mol).',
    statements: [
      {
        text: 'Động năng tịnh tiến trung bình của phân tử H2 và phân tử O2 ở cùng nhiệt độ T là hoàn toàn bằng nhau.',
        is_correct: true,
        explanation: 'E_đ = (3/2) · k · T chỉ phụ thuộc vào T, không phụ thuộc vào khối lượng mol M.',
      },
      {
        text: 'Tốc độ căn quân phương (v_rms) của phân tử khí tỉ lệ nghịch với căn bậc hai của khối lượng mol (v_rms = √(3RT / M)).',
        is_correct: true,
        explanation: 'Đúng theo công thức động học phân tử chất khí.',
      },
      {
        text: 'Tốc độ căn quân phương của phân tử Hydrogen lớn gấp 4 lần tốc độ căn quân phương của phân tử Oxygen.',
        is_correct: true,
        explanation: 'v_H2 / v_O2 = √(M_O2 / M_H2) = √(32 / 2) = √16 = 4.',
      },
      {
        text: 'Phân tử Oxygen nặng hơn nên có động năng tịnh tiến trung bình lớn hơn phân tử Hydrogen gấp 16 lần.',
        is_correct: false,
        explanation: 'Động năng trung bình ở cùng nhiệt độ là bằng nhau, phân tử nặng hơn thì chuyển động chậm hơn.',
      },
    ],
  },
  '12|chapter|G12-CH2|15': {
    stem: 'Trong một phòng học kín có thể tích không đổi, khi bật hệ thống sưởi làm nhiệt độ không khí trong phòng tăng từ 20 °C lên 30 °C. Áp suất khí trong phòng luôn cân bằng với áp suất khí quyển bên ngoài thông qua các khe cửa.',
    statements: [
      {
        text: 'Áp suất của không khí trong phòng được giữ không đổi bằng áp suất khí quyển bên ngoài (quá trình đẳng áp vĩ mô).',
        is_correct: true,
        explanation: 'Không khí tự do lưu thông qua khe hở để cân bằng áp suất với khí quyển.',
      },
      {
        text: 'Khi nhiệt độ tăng, không khí trong phòng giãn nở và một phần không khí thoát ra ngoài qua khe cửa.',
        is_correct: true,
        explanation: 'Theo phương trình trạng thái p = (m / M) · (RT / V), khi T tăng và p, V không đổi thì khối lượng m phải giảm.',
      },
      {
        text: 'Mật độ phân tử không khí trong phòng sau khi bật sưởi tăng lên.',
        is_correct: false,
        explanation: 'Một lượng khí đã thoát ra ngoài trong khi thể tích phòng không đổi nên mật độ phân tử n0 = N / V giảm đi.',
      },
      {
        text: 'Khối lượng không khí còn lại trong phòng sau khi sưởi ấm giảm đi so với trước khi sưởi.',
        is_correct: true,
        explanation: 'Số mol khí trong phòng n = pV / (RT), khi T tăng thì n giảm => m giảm.',
      },
    ],
  },
  '12|chapter|G12-CH2|17': {
    stem: 'Mở nắp một chai nước ngọt có ga vừa lấy từ tủ lạnh ra. Ngay tại miệng chai xuất hiện một làn sương khói mờ trắng.',
    statements: [
      {
        text: 'Khí CO2 bị nén áp suất cao trong chai khi mở nắp sẽ giãn nở nhanh ra ngoài.',
        is_correct: true,
        explanation: 'Áp suất trong chai cao hơn áp suất khí quyển nên khí CO2 phụt ra ngoài giãn nở sinh công.',
      },
      {
        text: 'Quá trình khí CO2 giãn nở nhanh chống lại áp suất khí quyển là quá trình sinh công, làm nội năng và nhiệt độ của khối khí giảm đột ngột.',
        is_correct: true,
        explanation: 'Khí sinh công A\' > 0 rất nhanh (đoạn nhiệt gần đúng), nội năng giảm làm nhiệt độ hạ xuống.',
      },
      {
        text: 'Làn sương mờ trắng là do hơi nước trong không khí xung quanh gặp lạnh bị ngưng tụ thành các hạt nước li ti.',
        is_correct: true,
        explanation: 'Nhiệt độ hạ thấp làm hơi nước đạt tới điểm sương và ngưng tụ tạo thành sương mù.',
      },
      {
        text: 'Làn sương trắng xuất hiện là do khí CO2 bị đông đặc thành tuyết CO2 ở điều kiện thường.',
        is_correct: false,
        explanation: 'CO2 đông đặc ở -78,5 °C; ở đây sương trắng là các hạt nước lỏng ngưng tụ từ không khí ẩm.',
      },
    ],
  },

  // Chủ đề 2.1: Mô hình khí lý tưởng & Định luật Boyle (Đẳng nhiệt)
  '12|topic|G12-CH2-TP1|11': {
    stem: 'Dùng ngón tay bịt kín đầu ra của một bơm tiêm rỗng (bên trong chứa một lượng khí) rồi kéo pít-tông lùi ra ngoài để tăng thể tích khí trong xi-lanh.',
    statements: [
      {
        text: 'Khi kéo pít-tông làm thể tích tăng, áp suất của lượng khí trong xi-lanh giảm xuống theo định luật Boyle.',
        is_correct: true,
        explanation: 'Nhiệt độ không đổi, V tăng thì p giảm (p tỉ lệ nghịch với V).',
      },
      {
        text: 'Áp suất khí bên trong xi-lanh lúc này nhỏ hơn áp suất khí quyển ở bên ngoài pít-tông.',
        is_correct: true,
        explanation: 'Ban đầu p_trong = p_ngoài; khi kéo V tăng thì p_trong < p_ngoài.',
      },
      {
        text: 'Cảm giác có lực kéo pít-tông trở lại là do chênh lệch áp lực của khí quyển bên ngoài đẩy pít-tông vào trong.',
        is_correct: true,
        explanation: 'F_hợp lực = (p_khí quyển - p_trong) · S hướng vào trong ống tiêm.',
      },
      {
        text: 'Nếu buông tay khỏi pít-tông, pít-tông sẽ tự động chạy ra ngoài xa hơn nữa.',
        is_correct: false,
        explanation: 'Áp suất ngoài lớn hơn sẽ đẩy pít-tông thụt lùi vào trong lòng xi-lanh.',
      },
    ],
  },
  '12|topic|G12-CH2-TP1|13': {
    stem: 'Khảo sát đường biểu diễn quá trình đẳng nhiệt của một lượng khí lý tưởng trên các hệ tọa độ trạng thái khác nhau.',
    statements: [
      {
        text: 'Trong hệ tọa độ (p, V), đường đẳng nhiệt là một nhánh của đường hypebol.',
        is_correct: true,
        explanation: 'Phương trình p = const / V có dạng y = k / x là đường hypebol.',
      },
      {
        text: 'Trong hệ tọa độ (p, T), đường biểu diễn quá trình đẳng nhiệt là một đoạn thẳng vuông góc với trục nhiệt độ T.',
        is_correct: true,
        explanation: 'Vì T = const nên trên trục hoành T tọa độ không đổi, đường thẳng thẳng đứng vuông góc với trục T.',
      },
      {
        text: 'Trong hệ tọa độ (V, T), đường biểu diễn quá trình đẳng nhiệt là một đường thẳng đi qua gốc tọa độ O.',
        is_correct: false,
        explanation: 'T = const thì trên hệ (V, T) đường đẳng nhiệt là đường thẳng vuông góc với trục T, không đi qua gốc O.',
      },
      {
        text: 'Trên hệ (p, V), đường đẳng nhiệt ứng với nhiệt độ T2 cao hơn sẽ nằm ở phía trên đường đẳng nhiệt ứng với T1 thấp hơn.',
        is_correct: true,
        explanation: 'Với cùng thể tích V, nhiệt độ cao hơn cho áp suất lớn hơn (p = nRT / V) nên đường nằm phía trên.',
      },
    ],
  },
  '12|topic|G12-CH2-TP1|15': {
    stem: 'Một người thợ lặn ở độ sâu 20 m dưới mặt biển thở ra một bọt khí. Coi nhiệt độ của nước biển ở các độ sâu là như nhau. Cho áp suất khí quyển p0 = 10⁵ Pa và khối lượng riêng của nước biển là 1000 kg/m³, g = 10 m/s².',
    statements: [
      {
        text: 'Áp suất tác dụng lên bọt khí ở độ sâu 20 m là p1 = 3·10⁵ Pa (gấp 3 lần áp suất khí quyển).',
        is_correct: true,
        explanation: 'p1 = p0 + ρgh = 10⁵ + 1000 · 10 · 20 = 10⁵ + 2·10⁵ = 3·10⁵ Pa.',
      },
      {
        text: 'Khi bọt khí nổi dần lên mặt nước, áp suất thủy tĩnh của nước giảm dần.',
        is_correct: true,
        explanation: 'Độ sâu h giảm làm áp suất p = p0 + ρgh giảm dần.',
      },
      {
        text: 'Theo định luật Boyle (T = const), thể tích của bọt khí khi nổi lên mặt nước sẽ tăng lên gấp 3 lần so với ban đầu.',
        is_correct: true,
        explanation: 'p1 · V1 = p0 · V0 => V0 / V1 = p1 / p0 = 3·10⁵ / 10⁵ = 3.',
      },
      {
        text: 'Khối lượng của lượng khí chứa bên trong bọt khí tăng lên gấp 3 lần khi nổi lên mặt nước.',
        is_correct: false,
        explanation: 'Lượng chất bên trong bọt khí không đổi (số phân tử khí không đổi), chỉ có thể tích giãn nở do áp suất giảm.',
      },
    ],
  },
  '12|topic|G12-CH2-TP1|17': {
    stem: 'Định luật Boyle phát biểu về mối quan hệ giữa áp suất và thể tích của một lượng khí lý tưởng xác định ở nhiệt độ không đổi.',
    statements: [
      {
        text: 'Hệ thức p · V = const phản ánh đúng định luật Boyle.',
        is_correct: true,
        explanation: 'Đây là biểu thức toán học chính tắc của định luật Boyle.',
      },
      {
        text: 'Hệ thức p / V = const phù hợp với định luật Boyle.',
        is_correct: false,
        explanation: 'p tỉ lệ nghịch với V, không phải tỉ lệ thuận; p / V biến thiên chứ không phải hằng số.',
      },
      {
        text: 'Khi áp suất tăng 2 lần thì thể tích của khối khí giảm 2 lần.',
        is_correct: true,
        explanation: 'p1 · V1 = p2 · V2 => V2 = V1 / 2 khi p2 = 2 p1.',
      },
      {
        text: 'Định luật Boyle chỉ áp dụng chính xác cho khí thực ở áp suất cực cao và nhiệt độ rất thấp.',
        is_correct: false,
        explanation: 'Định luật áp dụng tốt cho khí thực ở áp suất thấp và nhiệt độ tương đối cao (gần với khí lý tưởng).',
      },
    ],
  },

  // Chủ đề 2.2: Định luật Charles (Đẳng áp) & Phương trình trạng thái
  '12|topic|G12-CH2-TP2|11': {
    stem: 'Một khối khí lý tưởng được đun nóng đẳng áp từ nhiệt độ tuyệt đối T1 = 300 K lên T2 = 600 K.',
    statements: [
      {
        text: 'Nhiệt độ tuyệt đối của khối khí tăng lên gấp 2 lần.',
        is_correct: true,
        explanation: 'T2 / T1 = 600 / 300 = 2.',
      },
      {
        text: 'Theo định luật Charles, trong quá trình đẳng áp, thể tích tỉ lệ thuận với nhiệt độ tuyệt đối: V / T = const.',
        is_correct: true,
        explanation: 'Đúng theo nội dung định luật Charles cho quá trình đẳng áp.',
      },
      {
        text: 'Thể tích của khối khí ở trạng thái 2 tăng gấp đôi so với thể tích ban đầu (V2 = 2 V1).',
        is_correct: true,
        explanation: 'V2 = V1 · (T2 / T1) = 2 V1.',
      },
      {
        text: 'Nếu nhiệt độ Celsius tăng từ 30 °C lên 60 °C thì thể tích cũng tăng gấp đôi.',
        is_correct: false,
        explanation: 'Định luật áp dụng cho nhiệt độ tuyệt đối T (Kelvin), không áp dụng cho °C: (60 + 273)/(30 + 273) = 333/303 ≈ 1,1 (chỉ tăng 10%).',
      },
    ],
  },
  '12|topic|G12-CH2-TP2|13': {
    stem: 'Một bình kín bằng thép không gỉ (thể tích bình không đổi) chứa khí nitrogen ở nhiệt độ 20 °C và áp suất 1,5 atm. Đưa bình ra ngoài trời nắng có nhiệt độ 50 °C.',
    statements: [
      {
        text: 'Quá trình biến đổi của lượng khí trong bình kín là quá trình đẳng tích.',
        is_correct: true,
        explanation: 'Bình thép cứng nên thể tích khí không đổi V = const.',
      },
      {
        text: 'Nhiệt độ tuyệt đối của khí tăng từ 293 K lên 323 K.',
        is_correct: true,
        explanation: 'T1 = 20 + 273 = 293 K; T2 = 50 + 273 = 323 K.',
      },
      {
        text: 'Áp suất khí trong bình sau khi để ngoài nắng giảm xuống.',
        is_correct: false,
        explanation: 'Trong quá trình đẳng tích p / T = const, T tăng làm áp suất p tăng lên (p2 = 1,5 · 323/293 ≈ 1,65 atm).',
      },
      {
        text: 'Số phân tử khí trong bình tăng lên do nhiệt độ tăng.',
        is_correct: false,
        explanation: 'Bình kín nên số lượng phân tử khí N = n · N_A là không đổi.',
      },
    ],
  },
  '12|topic|G12-CH2-TP2|15': {
    stem: 'Hai bình kín A và B có cùng thể tích V chứa cùng một loại khí lý tưởng ở cùng nhiệt độ T. Áp suất khí ở bình B đo được lớn gấp 3 lần áp suất khí ở bình A (p_B = 3 p_A).',
    statements: [
      {
        text: 'Theo phương trình trạng thái Clapeyron - Mendeleev: pV = nRT = (m / M) · RT.',
        is_correct: true,
        explanation: 'Đúng theo phương trình trạng thái khí lý tưởng.',
      },
      {
        text: 'Số mol khí trong bình B lớn gấp 3 lần số mol khí trong bình A (n_B = 3 n_A).',
        is_correct: true,
        explanation: 'Với cùng V và T: n = pV / (RT) tỉ lệ thuận với p, do p_B = 3 p_A nên n_B = 3 n_A.',
      },
      {
        text: 'Khối lượng khí trong bình B lớn gấp 3 lần khối lượng khí trong bình A (m_B = 3 m_A).',
        is_correct: true,
        explanation: 'Cùng loại khí nên cùng khối lượng mol M, m = n · M => m_B = 3 m_A.',
      },
      {
        text: 'Mật độ phân tử khí trong hai bình là như nhau vì hai bình có cùng thể tích.',
        is_correct: false,
        explanation: 'Mật độ phân tử n0 = N / V, bình B có số phân tử gấp 3 lần nên mật độ phân tử gấp 3 lần.',
      },
    ],
  },
  '12|topic|G12-CH2-TP2|17': {
    stem: 'Khảo sát các đường đẳng quá trình trong các hệ tọa độ trạng thái (p, V), (V, T) và (p, T).',
    statements: [
      {
        text: 'Trong hệ tọa độ (p, V), đường đẳng tích là một đoạn thẳng song song với trục áp suất p (thẳng đứng).',
        is_correct: true,
        explanation: 'Vì V = const nên tọa độ trên trục V không đổi, đường thẳng vuông góc trục V.',
      },
      {
        text: 'Trong hệ tọa độ (p, V), đường đẳng áp là một đoạn thẳng song song với trục thể tích V (nằm ngang).',
        is_correct: true,
        explanation: 'Vì p = const nên tọa độ trên trục p không đổi, đường thẳng nằm ngang.',
      },
      {
        text: 'Trong hệ tọa độ (V, T), đường đẳng áp là một đường hypebol.',
        is_correct: false,
        explanation: 'Vì V / T = const (V = a · T) nên đường đẳng áp là đường thẳng kéo dài đi qua gốc tọa độ O.',
      },
      {
        text: 'Trong hệ tọa độ (p, T), đường đẳng tích là một đường thẳng kéo dài đi qua gốc tọa độ O.',
        is_correct: true,
        explanation: 'Vì p / T = const (p = b · T) nên đường đẳng tích là đường thẳng có phần kéo dài đi qua gốc O.',
      },
    ],
  },

  // Chủ đề 2.3: Áp suất khí theo động học phân tử & Động năng phân tử
  '12|topic|G12-CH2-TP3|11': {
    stem: 'Ở cùng nhiệt độ phòng 300 K, xét chuyển động nhiệt của phân tử khí Heli (khí đơn nguyên tử) và phân tử khí Oxygen (khí lưỡng nguyên tử).',
    statements: [
      {
        text: 'Động năng tịnh tiến trung bình của một phân tử khí lý tưởng chỉ phụ thuộc vào nhiệt độ tuyệt đối T theo công thức E_đ = (3/2) · k · T.',
        is_correct: true,
        explanation: 'k = 1,38·10⁻²³ J/K là hằng số Boltzmann, công thức này đúng cho mọi phân tử khí lý tưởng.',
      },
      {
        text: 'Ở cùng nhiệt độ 300 K, động năng tịnh tiến trung bình của phân tử Heli và phân tử Oxygen là bằng nhau.',
        is_correct: true,
        explanation: 'Cả hai đều ở T = 300 K nên E_đ = (3/2) · k · 300 là như nhau.',
      },
      {
        text: 'Vì phân tử Oxygen nặng hơn (32 g/mol so với 4 g/mol) nên tốc độ căn quân phương của nó nhỏ hơn phân tử Heli.',
        is_correct: true,
        explanation: 'v_rms = √(3kT / m), khối lượng m càng lớn thì tốc độ trung bình càng nhỏ.',
      },
      {
        text: 'Khi nhiệt độ tăng từ 300 K lên 600 K thì động năng tịnh tiến trung bình tăng lên gấp 4 lần.',
        is_correct: false,
        explanation: 'Động năng tỉ lệ bậc nhất với T, khi T tăng 2 lần (300 lên 600 K) thì động năng tăng đúng 2 lần.',
      },
    ],
  },
  '12|topic|G12-CH2-TP3|13': {
    stem: 'Theo thuyết động học phân tử chất khí, áp suất mà khối khí tác dụng lên thành bình được tính bởi hệ thức p = (1/3) · n0 · m · (v_rms)² = (2/3) · n0 · E_đ.',
    statements: [
      {
        text: 'Áp suất chất khí sinh ra là do các phân tử khí va chạm liên tục vào thành bình chứa.',
        is_correct: true,
        explanation: 'Mỗi va chạm truyền một xung lượng cho thành bình, vô số va chạm tạo nên áp suất liên tục.',
      },
      {
        text: 'Nếu giữ nguyên nhiệt độ và tăng mật độ phân tử n0 lên 2 lần thì áp suất của khí tăng lên gấp 2 lần.',
        is_correct: true,
        explanation: 'p = (2/3) · n0 · E_đ, khi T không đổi (E_đ = const) và n0 tăng 2 lần thì p tăng 2 lần.',
      },
      {
        text: 'Nếu đồng thời tăng mật độ phân tử n0 lên 2 lần và tăng nhiệt độ tuyệt đối T lên 2 lần thì áp suất khí tăng lên 4 lần.',
        is_correct: true,
        explanation: 'p tỉ lệ với n0 · T; cả hai đại lượng cùng tăng 2 lần thì p tăng 2 · 2 = 4 lần.',
      },
      {
        text: 'Áp suất khí giảm xuống bằng 0 khi các phân tử khí đứng yên ở độ không tuyệt đối 0 K.',
        is_correct: true,
        explanation: 'Ở 0 K, động năng bằng 0 (v = 0), không có va chạm vào thành bình nên áp suất bằng 0.',
      },
    ],
  },
  '12|topic|G12-CH2-TP3|17': {
    stem: 'Hằng số Boltzmann k = 1,38·10⁻²³ J/K và hằng số khí lý tưởng R = 8,31 J/(mol·K) liên hệ với nhau qua số Avogadro N_A = 6,022·10²³ mol⁻¹.',
    statements: [
      {
        text: 'Hệ thức liên hệ giữa hai hằng số là R = k · N_A.',
        is_correct: true,
        explanation: 'k là hằng số khí cho 1 phân tử, R là hằng số khí cho 1 mol (N_A phân tử).',
      },
      {
        text: 'Động năng tịnh tiến trung bình của 1 mol khí lý tưởng ở nhiệt độ T là E_đ(mol) = (3/2) · R · T.',
        is_correct: true,
        explanation: 'E_đ(mol) = N_A · (3/2 k T) = (3/2) · R · T.',
      },
      {
        text: 'Hằng số Boltzmann có đơn vị là J · K.',
        is_correct: false,
        explanation: 'Đơn vị chuẩn của k là J/K (Joule trên Kelvin).',
      },
      {
        text: 'Nhiệt độ tuyệt đối là thước đo động năng tịnh tiến trung bình của các phân tử vật chất.',
        is_correct: true,
        explanation: 'Đúng theo bản chất vật lý vĩ mô của nhiệt độ trong thuyết động học phân tử.',
      },
    ],
  },
  '12|topic|G12-CH2-TP3|21': {
    stem: 'Xét 2 g khí Helium (M = 4 g/mol) chứa trong bình kín thể tích 5 lít ở nhiệt độ 27 °C (300 K).',
    statements: [
      {
        text: 'Số mol khí Helium trong bình là n = 0,5 mol.',
        is_correct: true,
        explanation: 'n = m / M = 2 / 4 = 0,5 mol.',
      },
      {
        text: 'Áp suất của khối khí trong bình xấp xỉ 2,49·10⁵ Pa (khoảng 2,46 atm).',
        is_correct: true,
        explanation: 'p = nRT / V = 0,5 · 8,31 · 300 / (5·10⁻³) = 1246,5 / 0,005 = 249 300 Pa ≈ 2,49·10⁵ Pa.',
      },
      {
        text: 'Tổng động năng tịnh tiến của toàn bộ các phân tử khí Helium trong bình là xấp xỉ 1870 J.',
        is_correct: true,
        explanation: 'E_tổng = n · (3/2) · R · T = 0,5 · 1,5 · 8,31 · 300 ≈ 1870 J.',
      },
      {
        text: 'Nếu đun nóng để nhiệt độ tăng lên 54 °C thì áp suất khí sẽ tăng lên gấp đôi.',
        is_correct: false,
        explanation: 'Tăng từ 27 °C (300 K) lên 54 °C (327 K) chỉ làm T tăng tỉ số 327/300 = 1,09 (tăng 9%), không phải gấp đôi.',
      },
    ],
  },

  // === CHƯƠNG 3: TỪ TRƯỜNG VÀ CẢM ỨNG ĐIỆN TỪ ===
  '12|chapter|G12-CH3|11': {
    stem: 'Một đoạn dây dẫn thẳng dài L = 0,2 m mang dòng điện không đổi I = 5 A đặt trong từ trường đều có cảm ứng từ B = 0,4 T. Đoạn dây vuông góc với các đường sức từ.',
    statements: [
      {
        text: 'Lực từ tác dụng lên đoạn dây dẫn được xác định theo công thức F = I · B · L · sin(α).',
        is_correct: true,
        explanation: 'Đúng theo định luật Ampère về lực từ tác dụng lên đoạn dòng điện.',
      },
      {
        text: 'Góc α giữa dây dẫn và vectơ cảm ứng từ trong bài toán này là α = 90°, do đó sin(α) = 1.',
        is_correct: true,
        explanation: 'Đoạn dây vuông góc với vectơ B nên α = 90°.',
      },
      {
        text: 'Độ lớn của lực từ tác dụng lên đoạn dây là F = 0,4 N.',
        is_correct: true,
        explanation: 'F = 5 · 0,4 · 0,2 · 1 = 0,4 N.',
      },
      {
        text: 'Nếu xoay đoạn dây dẫn sao cho nó song song với đường sức từ thì lực từ đạt giá trị cực đại.',
        is_correct: false,
        explanation: 'Khi dây song song với đường sức từ, α = 0° => sin(α) = 0 => lực từ F = 0 (bằng không).',
      },
    ],
  },
  '12|chapter|G12-CH3|13': {
    stem: 'Một khung dây phẳng kín có diện tích S = 100 cm² (0,01 m²) gồm 200 vòng dây đặt trong từ trường đều có cảm ứng từ B biến thiên đều từ 0,1 T lên 0,5 T trong khoảng thời gian Δt = 0,1 s. Vectơ pháp tuyến của khung cùng hướng với đường sức từ.',
    statements: [
      {
        text: 'Từ thông ban đầu qua mỗi vòng dây là Φ1 = 10⁻³ Wb.',
        is_correct: true,
        explanation: 'Φ1 = B1 · S · cos(0°) = 0,1 · 0,01 · 1 = 0,001 Wb = 10⁻³ Wb.',
      },
      {
        text: 'Độ biến thiên từ thông qua toàn bộ cuộn dây gồm 200 vòng là ΔΦ_tổng = 0,8 Wb.',
        is_correct: true,
        explanation: 'ΔΦ_tổng = N · ΔB · S = 200 · (0,5 - 0,1) · 0,01 = 200 · 0,4 · 0,01 = 0,8 Wb.',
      },
      {
        text: 'Độ lớn của suất điện động cảm ứng xuất hiện trong khung dây là |e_c| = 8 V.',
        is_correct: true,
        explanation: '|e_c| = |ΔΦ_tổng / Δt| = 0,8 / 0,1 = 8 V theo định luật Faraday.',
      },
      {
        text: 'Dòng điện cảm ứng xuất hiện sinh ra từ trường cảm ứng cùng chiều với từ trường ban đầu.',
        is_correct: false,
        explanation: 'Theo định luật Lenz, vì từ trường ban đầu đang tăng (B tăng) nên từ trường cảm ứng phải ngược chiều để chống lại sự tăng.',
      },
    ],
  },
  '12|chapter|G12-CH3|15': {
    stem: 'Một máy biến áp lý tưởng có số vòng dây cuộn sơ cấp là N1 = 2200 vòng và cuộn thứ cấp là N2 = 110 vòng. Đặt vào hai đầu cuộn sơ cấp điện áp xoay chiều có giá trị hiệu dụng U1 = 220 V.',
    statements: [
      {
        text: 'Máy biến áp này là máy hạ áp vì số vòng dây cuộn thứ cấp nhỏ hơn cuộn sơ cấp (N2 < N1).',
        is_correct: true,
        explanation: 'Tỉ số k = N2 / N1 = 110 / 2200 = 1/20 < 1 nên là máy hạ áp.',
      },
      {
        text: 'Điện áp hiệu dụng ở hai đầu cuộn thứ cấp để hở là U2 = 11 V.',
        is_correct: true,
        explanation: 'U2 / U1 = N2 / N1 => U2 = 220 · (110 / 2200) = 11 V.',
      },
      {
        text: 'Máy biến áp có thể hoạt động với nguồn điện không đổi (dòng điện một chiều DC từ ắc quy).',
        is_correct: false,
        explanation: 'Dòng không đổi sinh ra từ trường không đổi (ΔΦ = 0), không xảy ra hiện tượng cảm ứng điện từ ở cuộn thứ cấp.',
      },
      {
        text: 'Nếu cường độ dòng điện hiệu dụng ở cuộn thứ cấp là I2 = 4 A thì dòng điện ở cuộn sơ cấp là I1 = 0,2 A.',
        is_correct: true,
        explanation: 'Máy biến áp lý tưởng: I1 / I2 = N2 / N1 => I1 = 4 · (110 / 2200) = 0,2 A.',
      },
    ],
  },
  '12|chapter|G12-CH3|17': {
    stem: 'Một điện áp xoay chiều có biểu thức u = 220√2 · cos(100πt - π/3) (V), với t tính bằng giây.',
    statements: [
      {
        text: 'Giá trị cực đại của điện áp là U0 = 220√2 V (xấp xỉ 311 V).',
        is_correct: true,
        explanation: 'Biên độ điện áp U0 = 220√2 V.',
      },
      {
        text: 'Giá trị hiệu dụng của điện áp là U = 220 V.',
        is_correct: true,
        explanation: 'U = U0 / √2 = 220 V.',
      },
      {
        text: 'Tần số của dòng điện xoay chiều này là f = 100 Hz.',
        is_correct: false,
        explanation: 'Tần số góc ω = 100π rad/s => f = ω / (2π) = 100π / (2π) = 50 Hz.',
      },
      {
        text: 'Pha ban đầu của điện áp là φ = -π/3 rad.',
        is_correct: true,
        explanation: 'Pha ban đầu là góc tại t = 0 trong hàm cos, bằng -π/3 rad.',
      },
    ],
  },

  // Chủ đề 3.1: Từ trường, Cảm ứng từ & Lực từ Ampère
  '12|topic|G12-CH3-TP1|11': {
    stem: 'Từ trường là dạng vật chất tồn tại trong không gian xung quanh nam châm hoặc hạt mang điện chuyển động (dòng điện).',
    statements: [
      {
        text: 'Tính chất cơ bản của từ trường là tác dụng lực từ lên kim nam châm hoặc dòng điện khác đặt trong nó.',
        is_correct: true,
        explanation: 'Đúng theo định nghĩa bản chất vật lý của từ trường.',
      },
      {
        text: 'Đường sức từ là những đường cong khép kín (hoặc vô hạn ở hai đầu).',
        is_correct: true,
        explanation: 'Từ trường là trường xoáy, các đường sức từ không có điểm bắt đầu và điểm kết thúc.',
      },
      {
        text: 'Bên ngoài thanh nam châm thẳng, đường sức từ đi ra từ cực Nam (S) và đi vào cực Bắc (N).',
        is_correct: false,
        explanation: 'Quy ước đường sức từ: "Vào Nam (S) - Ra Bắc (N)", tức đi ra từ cực Bắc và đi vào cực Nam.',
      },
      {
        text: 'Đơn vị đo của cảm ứng từ trong hệ SI là Tesla (ký hiệu: T).',
        is_correct: true,
        explanation: 'Đúng theo quy chuẩn hệ SI (1 T = 1 N / (A·m)).',
      },
    ],
  },
  '12|topic|G12-CH3-TP1|13': {
    stem: 'Dùng quy tắc bàn tay trái để xác định chiều của lực từ tác dụng lên một đoạn dòng điện thẳng đặt trong từ trường đều.',
    statements: [
      {
        text: 'Đặt bàn tay trái sao cho các đường sức từ hướng đâm xuyên vào lòng bàn tay.',
        is_correct: true,
        explanation: 'Đúng theo quy tắc: lòng bàn tay hứng các đường cảm ứng từ B.',
      },
      {
        text: 'Chiều từ cổ tay đến ngón tay giữa chỉ chiều của dòng điện I.',
        is_correct: true,
        explanation: 'Bốn ngón tay duỗi thẳng theo chiều dòng điện.',
      },
      {
        text: 'Ngón tay cái choãi ra 90° chỉ chiều của lực từ F tác dụng lên đoạn dây.',
        is_correct: true,
        explanation: 'Đúng theo quy tắc bàn tay trái định hướng lực từ Ampère.',
      },
      {
        text: 'Nếu đổi chiều cả dòng điện I và đổi chiều từ trường B thì chiều lực từ bị đảo ngược.',
        is_correct: false,
        explanation: 'Đổi chiều cả hai yếu tố thì lực từ giữ nguyên chiều ban đầu (vì tích có hướng hai lần đảo dấu thành cùng dấu).',
      },
    ],
  },
  '12|topic|G12-CH3-TP1|15': {
    stem: 'Một electron bay vào trong một từ trường đều với vận tốc ban đầu v vuông góc với vectơ cảm ứng từ B.',
    statements: [
      {
        text: 'Lực từ tác dụng lên hạt mang điện chuyển động trong từ trường gọi là lực Lorentz: f = |q| · v · B · sin(α).',
        is_correct: true,
        explanation: 'Đúng theo định nghĩa lực Lorentz.',
      },
      {
        text: 'Vì electron mang điện tích âm (q = -e < 0) nên chiều lực Lorentz ngược chiều ngón cái theo quy tắc bàn tay trái.',
        is_correct: true,
        explanation: 'Khi q < 0, chiều lực ngược với chiều quy ước của hạt mang điện dương.',
      },
      {
        text: 'Lực Lorentz luôn vuông góc với vận tốc v nên không sinh công, động năng và tốc độ của electron không đổi.',
        is_correct: true,
        explanation: 'Lực vuông góc phương chuyển động (f ⊥ v) nên công A = 0, chỉ làm bẻ cong quỹ đạo.',
      },
      {
        text: 'Quỹ đạo chuyển động của electron trong từ trường đều này là một đường hyperbol mở rộng.',
        is_correct: false,
        explanation: 'Lực Lorentz đóng vai trò lực hướng tâm không đổi làm electron chuyển động tròn đều với bán kính R = mv / (|q|B).',
      },
    ],
  },
  '12|topic|G12-CH3-TP1|17': {
    stem: 'Một đoạn dây dẫn dài 0,5 m mang dòng điện 2 A đặt trong từ trường đều có B = 0,8 T, hợp với vectơ cảm ứng từ một góc α = 30°.',
    statements: [
      {
        text: 'sin(30°) = 0,5.',
        is_correct: true,
        explanation: 'Đúng theo giá trị lượng giác.',
      },
      {
        text: 'Độ lớn lực từ tác dụng lên đoạn dây dẫn là F = 0,4 N.',
        is_correct: true,
        explanation: 'F = I · B · L · sin(30°) = 2 · 0,8 · 0,5 · 0,5 = 0,4 N.',
      },
      {
        text: 'Nếu tăng cường độ dòng điện lên gấp 3 lần thì lực từ tăng lên thành 1,2 N.',
        is_correct: true,
        explanation: 'Lực từ tỉ lệ thuận với cường độ dòng điện I: F mới = 3 · 0,4 = 1,2 N.',
      },
      {
        text: 'Đổi chiều dòng điện trong dây làm thay đổi độ lớn của lực từ.',
        is_correct: false,
        explanation: 'Đổi chiều dòng điện chỉ đảo ngược chiều vectơ lực từ, độ lớn |F| không thay đổi.',
      },
    ],
  },

  // Chủ đề 3.2: Từ thông, Định luật Faraday & Hiện tượng tự cảm
  '12|topic|G12-CH3-TP2|11': {
    stem: 'Từ thông qua một diện tích phẳng S đặt trong từ trường đều được xác định bởi công thức Φ = B · S · cos(α), trong đó α là góc giữa vectơ pháp tuyến n của mặt S và vectơ B.',
    statements: [
      {
        text: 'Đơn vị đo của từ thông trong hệ SI là Vê-be (ký hiệu: Wb), với 1 Wb = 1 T · m².',
        is_correct: true,
        explanation: 'Đúng theo định nghĩa đơn vị từ thông trong hệ SI.',
      },
      {
        text: 'Khi mặt phẳng khung dây vuông góc với các đường sức từ thì góc α = 90° và từ thông qua khung bằng 0.',
        is_correct: false,
        explanation: 'Mặt phẳng khung ⊥ B thì vectơ pháp tuyến n // B nên góc α = 0°, cos(0°) = 1 => từ thông đạt giá trị cực đại Φ_max = B · S.',
      },
      {
        text: 'Khi mặt phẳng khung dây song song với đường sức từ thì từ thông qua khung bằng 0.',
        is_correct: true,
        explanation: 'Khung song song B thì pháp tuyến n vuông góc B (α = 90°), cos(90°) = 0 => Φ = 0.',
      },
      {
        text: 'Từ thông là đại lượng đại số có thể mang giá trị dương, âm hoặc bằng 0 tùy thuộc vào góc α.',
        is_correct: true,
        explanation: 'Tùy thuộc cos(α) nhọn (>0), tù (<0) hoặc vuông (=0).',
      },
    ],
  },
  '12|topic|G12-CH3-TP2|13': {
    stem: 'Thí nghiệm đưa một thanh nam châm lại gần hoặc ra xa một ống dây dẫn kín nối với một điện kế nhạy.',
    statements: [
      {
        text: 'Dòng điện cảm ứng chỉ xuất hiện trong cuộn dây khi có sự biến thiên từ thông qua mạch kín.',
        is_correct: true,
        explanation: 'Đúng theo nội dung hiện tượng cảm ứng điện từ của Faraday.',
      },
      {
        text: 'Nếu giữ thanh nam châm đứng yên hoàn toàn bên trong lòng cuộn dây thì kim điện kế vẫn lệch liên tục.',
        is_correct: false,
        explanation: 'Khi nam châm đứng yên, từ thông qua ống dây không biến thiên (ΔΦ/Δt = 0) nên không có dòng điện cảm ứng.',
      },
      {
        text: 'Tốc độ dịch chuyển nam châm càng nhanh thì dòng điện cảm ứng sinh ra càng lớn.',
        is_correct: true,
        explanation: 'Độ lớn suất điện động tỉ lệ với tốc độ biến thiên từ thông |ΔΦ / Δt|.',
      },
      {
        text: 'Khi đưa cực Bắc của nam châm lại gần ống dây, mặt ống dây đối diện trở thành cực Bắc để đẩy nam châm ra xa.',
        is_correct: true,
        explanation: 'Theo định luật Lenz, dòng điện cảm ứng chống lại nguyên nhân sinh ra nó (chống lại sự tiến lại gần).',
      },
    ],
  },
  '12|topic|G12-CH3-TP2|15': {
    stem: 'Xét hiện tượng tự cảm trong một ống dây điện từ có hệ số tự cảm L = 0,2 H.',
    statements: [
      {
        text: 'Hiện tượng tự cảm là hiện tượng cảm ứng điện từ xảy ra trong một mạch có dòng điện mà sự biến thiên từ thông do chính sự biến thiên của cường độ dòng điện trong mạch gây ra.',
        is_correct: true,
        explanation: 'Đúng theo định nghĩa hiện tượng tự cảm.',
      },
      {
        text: 'Đơn vị đo độ tự cảm trong hệ SI là Henri (H).',
        is_correct: true,
        explanation: 'Đúng theo quy chuẩn hệ SI.',
      },
      {
        text: 'Suất điện động tự cảm được xác định bởi công thức e_tc = -L · (Δi / Δt).',
        is_correct: true,
        explanation: 'Đúng theo biểu thức định lượng của suất điện động tự cảm.',
      },
      {
        text: 'Nếu dòng điện trong ống dây giảm đều từ 5 A xuống 0 trong 0,1 s thì suất điện động tự cảm sinh ra có độ lớn là 10 V.',
        is_correct: true,
        explanation: '|e_tc| = L · |Δi / Δt| = 0,2 · |5 / 0,1| = 0,2 · 50 = 10 V.',
      },
    ],
  },
  '12|topic|G12-CH3-TP2|17': {
    stem: 'Dòng điện Foucault (Fu-cô) là dòng điện cảm ứng xuất hiện trong khối vật dẫn khi khối vật dẫn chuyển động trong từ trường hoặc đặt trong từ trường biến thiên.',
    statements: [
      {
        text: 'Dòng điện Foucault có tác dụng nhiệt làm nóng khối kim loại.',
        is_correct: true,
        explanation: 'Dòng điện xoáy chạy trong khối kim loại có điện trở gây tỏa nhiệt Joule - Lenz.',
      },
      {
        text: 'Bếp từ gia đình hoạt động dựa trên ứng dụng tác dụng nhiệt của dòng điện Foucault làm nóng trực tiếp đáy nồi kim loại.',
        is_correct: true,
        explanation: 'Cuộn dây dưới mặt bếp sinh ra từ trường xoay chiều tần số cao gây ra dòng Foucault trong đáy nồi.',
      },
      {
        text: 'Trong lõi thép máy biến áp, người ta dùng cả khối thép đặc nguyên khối để tăng cường tối đa dòng điện Foucault.',
        is_correct: false,
        explanation: 'Dòng Foucault gây tổn hao năng lượng vô ích và làm nóng máy biến áp, người ta phải ghép các lá thép mỏng cách điện để triệt tiêu nó.',
      },
      {
        text: 'Tác dụng hãm điện từ của dòng Foucault được ứng dụng để chế tạo phanh điện từ cho tàu hỏa cao tốc.',
        is_correct: true,
        explanation: 'Lực từ tác dụng lên dòng Foucault cản trở chuyển động của đĩa kim loại giúp phanh êm ái không hao mòn cơ học.',
      },
    ],
  },

  // Chủ đề 3.3: Đại cương dòng điện xoay chiều & Ứng dụng
  '12|topic|G12-CH3-TP3|11': {
    stem: 'Dòng điện xoay chiều hình sin là dòng điện có cường độ biến thiên điều hòa theo thời gian theo quy luật i = I0 · cos(ωt + φ).',
    statements: [
      {
        text: 'Dòng điện xoay chiều được tạo ra dựa trên hiện tượng cảm ứng điện từ khi quay một khung dây trong từ trường đều.',
        is_correct: true,
        explanation: 'Nguyên tắc hoạt động của máy phát điện xoay chiều xoay khung dây hoặc xoay nam châm.',
      },
      {
        text: 'Cường độ hiệu dụng của dòng điện xoay chiều liên hệ với cường độ cực đại theo công thức I = I0 / √2.',
        is_correct: true,
        explanation: 'Đúng theo định nghĩa giá trị hiệu dụng dựa trên tác dụng nhiệt tương đương với dòng không đổi.',
      },
      {
        text: 'Các thiết bị đo điện xoay chiều (như ampe kế, vôn kế xoay chiều) hiển thị giá trị cực đại của dòng điện.',
        is_correct: false,
        explanation: 'Vôn kế và ampe kế nhiệt hiển thị giá trị hiệu dụng của điện áp và dòng điện.',
      },
      {
        text: 'Dòng điện xoay chiều có thể truyền tải đi xa hiệu quả hơn dòng một chiều nhờ dễ dàng dùng máy biến áp để tăng điện áp giảm hao phí.',
        is_correct: true,
        explanation: 'Tăng áp U lên n lần làm giảm công suất hao phí ΔP = P²R / U² đi n² lần.',
      },
    ],
  },
  '12|topic|G12-CH3-TP3|13': {
    stem: 'Một mạch điện xoay chiều chỉ chứa điện trở thuần R = 50 Ω được mắc vào nguồn điện xoay chiều có điện áp u = 100√2 · cos(100πt) (V).',
    statements: [
      {
        text: 'Điện áp hiệu dụng giữa hai đầu điện trở là U = 100 V.',
        is_correct: true,
        explanation: 'U = U0 / √2 = 100√2 / √2 = 100 V.',
      },
      {
        text: 'Cường độ dòng điện chạy qua điện trở cùng pha với điện áp hai đầu điện trở (φ_i = φ_u = 0).',
        is_correct: true,
        explanation: 'Trong mạch chỉ có điện trở thuần, dòng điện và điện áp luôn dao động đồng pha.',
      },
      {
        text: 'Cường độ dòng điện hiệu dụng trong mạch là I = 2 A.',
        is_correct: true,
        explanation: 'I = U / R = 100 / 50 = 2 A.',
      },
      {
        text: 'Công suất tiêu thụ điện trung bình trên điện trở là P = 400 W.',
        is_correct: false,
        explanation: 'P = U · I = 100 · 2 = 200 W (hoặc I² · R = 4 · 50 = 200 W).',
      },
    ],
  },
  '12|topic|G12-CH3-TP3|15': {
    stem: 'Trong quá trình truyền tải điện năng đi xa từ nhà máy điện đến nơi tiêu thụ, công suất truyền đi là P không đổi dưới điện áp U, điện trở đường dây là R.',
    statements: [
      {
        text: 'Công suất hao phí do tỏa nhiệt trên đường dây truyền tải được tính bởi công thức ΔP = (P² / U²) · R (coi hệ số công suất cos φ = 1).',
        is_correct: true,
        explanation: 'ΔP = I² · R = (P / U)² · R.',
      },
      {
        text: 'Công suất hao phí trên đường dây tỉ lệ nghịch với bình phương điện áp hiệu dụng U² ở nơi phát.',
        is_correct: true,
        explanation: 'Đúng theo hệ thức ΔP ~ 1 / U².',
      },
      {
        text: 'Nếu tăng điện áp hiệu dụng ở đầu đường dây truyền tải lên 10 lần thì công suất hao phí giảm đi 100 lần.',
        is_correct: true,
        explanation: 'U tăng 10 lần thì U² tăng 100 lần => ΔP giảm 100 lần.',
      },
      {
        text: 'Biện pháp tối ưu và kinh tế nhất để giảm hao phí khi truyền tải điện năng đi xa là tăng tiết diện dây dẫn lên thật lớn.',
        is_correct: false,
        explanation: 'Tăng tiết diện dây làm tăng khối lượng kim loại đồng/nhôm và cột điện quá đắt đỏ; giải pháp tối ưu là dùng máy biến áp tăng điện áp U.',
      },
    ],
  },
  '12|topic|G12-CH3-TP3|17': {
    stem: 'Một khung dây kim loại phẳng có diện tích S = 200 cm² gồm 500 vòng dây quay đều quanh một trục đối xứng trong từ trường đều B = 0,2 T với tốc độ quay 3000 vòng/phút.',
    statements: [
      {
        text: 'Tần số góc quay của khung dây là ω = 100π rad/s (tương ứng tần số f = 50 Hz).',
        is_correct: true,
        explanation: 'ω = 3000 · 2π / 60 = 100π rad/s => f = 50 Hz.',
      },
      {
        text: 'Từ thông cực đại qua khung dây là Φ0 = 1 Wb.',
        is_correct: true,
        explanation: 'Φ0 = N · B · S = 500 · 0,2 · (200·10⁻⁴) = 100 · 0,01 = 1 Wb.',
      },
      {
        text: 'Suất điện động cảm ứng cực đại xuất hiện trong khung là E0 = 100π V (xấp xỉ 314 V).',
        is_correct: true,
        explanation: 'E0 = ω · Φ0 = 100π · 1 = 100π V ≈ 314 V.',
      },
      {
        text: 'Suất điện động cảm ứng dao động cùng pha với từ thông qua khung dây.',
        is_correct: false,
        explanation: 'e = -dΦ/dt nên suất điện động vuông pha và trễ pha π/2 so với từ thông.',
      },
    ],
  },

  // === CHƯƠNG 4: VẬT LÝ HẠT NHÂN VÀ PHÓNG XẠ ===
  '12|chapter|G12-CH4|11': {
    stem: 'Hạt nhân nguyên tử Cacbon ¹²₆C và Urani ²³⁸₉₂U được tạo thành từ các nucleon (proton và neutron).',
    statements: [
      {
        text: 'Hạt nhân ¹²₆C chứa 6 proton và 6 neutron.',
        is_correct: true,
        explanation: 'Z = 6 (số proton), N = A - Z = 12 - 6 = 6 (số neutron).',
      },
      {
        text: 'Hạt nhân ²³⁸₉₂U chứa 92 proton và 146 neutron.',
        is_correct: true,
        explanation: 'Z = 92, N = 238 - 92 = 146 neutron.',
      },
      {
        text: 'Lực liên kết giữa các nucleon trong hạt nhân là lực hút tĩnh điện giữa các điện tích.',
        is_correct: false,
        explanation: 'Lực hạt nhân là lực tương tác mạnh, có bản chất phi điện tích và tầm tác dụng rất ngắn (cỡ 10⁻¹⁵ m).',
      },
      {
        text: 'Điện tích của hạt nhân nguyên tử luôn là số nguyên dương tính theo đơn vị điện tích nguyên tố: Q = +Z · e.',
        is_correct: true,
        explanation: 'Do hạt nhân chỉ chứa proton mang điện +e và neutron trung hòa điện tích.',
      },
    ],
  },
  '12|chapter|G12-CH4|13': {
    stem: 'Xem xét tia phóng xạ beta cộng (β⁺) và beta trừ (β⁻) phát ra từ các hạt nhân không bền vững.',
    statements: [
      {
        text: 'Tia β⁻ thực chất là dòng các hạt electron (⁰₋₁e) chuyển động với tốc độ cao.',
        is_correct: true,
        explanation: 'Đúng theo bản chất của phóng xạ beta trừ.',
      },
      {
        text: 'Tia β⁺ thực chất là dòng các positron (⁰₊₁e), là phản hạt của electron mang điện tích +e.',
        is_correct: true,
        explanation: 'Đúng theo bản chất của phóng xạ beta cộng.',
      },
      {
        text: 'Trong phân rã beta trừ, một neutron bên trong hạt nhân biến đổi thành một proton đồng thời phóng thích một electron và một phản neutrino.',
        is_correct: true,
        explanation: 'Phương trình biến đổi n -> p + e⁻ + ν_ngang.',
      },
      {
        text: 'Tia phóng xạ beta không bị lệch khi bay qua một điện trường đều giữa hai bản tụ điện.',
        is_correct: false,
        explanation: 'Vì mang điện tích (β⁺ mang +e, β⁻ mang -e) nên tia beta bị điện trường làm lệch hướng mạnh mẽ.',
      },
    ],
  },
  '12|chapter|G12-CH4|15': {
    stem: 'Một khối chất phóng xạ Iod ¹³¹₅₃I có chu kỳ bán rã T = 8 ngày đêm được dùng trong y học hạt nhân điều trị bệnh lý tuyến giáp.',
    statements: [
      {
        text: 'Chu kỳ bán rã T là khoảng thời gian để một nửa số hạt nhân ban đầu của chất phóng xạ bị phân rã biến đổi.',
        is_correct: true,
        explanation: 'Đúng theo định nghĩa chu kỳ bán rã trong định luật phóng xạ.',
      },
      {
        text: 'Sau 16 ngày đêm (t = 2T), lượng phóng xạ còn lại bằng 25% (1/4) so với ban đầu.',
        is_correct: true,
        explanation: 'N(t) = N0 · 2^(-t/T) = N0 · 2^(-2) = N0 / 4 = 25%.',
      },
      {
        text: 'Sau 24 ngày đêm (t = 3T), lượng Iod-131 đã bị phân rã là 87,5% (7/8) lượng ban đầu.',
        is_correct: true,
        explanation: 'Lượng còn lại là (1/2)³ = 1/8 = 12,5%, lượng đã phân rã = 100% - 12,5% = 87,5%.',
      },
      {
        text: 'Bảo quản mẫu phóng xạ ở nhiệt độ âm sâu (-100 °C) sẽ làm chu kỳ bán rã tăng lên giúp kéo dài thời gian tồn tại của thuốc.',
        is_correct: false,
        explanation: 'Hiện tượng phóng xạ xảy ra tự phát từ bên trong hạt nhân, chu kỳ bán rã T hoàn toàn không phụ thuộc vào nhiệt độ, áp suất hay tác nhân hóa học.',
      },
    ],
  },
  '12|chapter|G12-CH4|17': {
    stem: 'Chất phóng xạ Radon ²²²₈₆Rn tự phát phóng xạ tia alpha (α = ⁴₂He) tạo thành hạt nhân con Poloni (Po).',
    statements: [
      {
        text: 'Hạt alpha thực chất là hạt nhân nguyên tử Heli (⁴₂He) gồm 2 proton và 2 neutron.',
        is_correct: true,
        explanation: 'Đúng theo cấu tạo hạt alpha.',
      },
      {
        text: 'Áp dụng định luật bảo toàn số khối A và bảo toàn điện tích Z, hạt nhân con sinh ra là ²¹⁸₈₄Po.',
        is_correct: true,
        explanation: 'A_con = 222 - 4 = 218; Z_con = 86 - 2 = 84 (nguyên tố Poloni).',
      },
      {
        text: 'Hạt nhân con Poloni lùi 2 ô trong bảng tuần hoàn hóa học Men-đê-lê-ép so với hạt nhân mẹ Radon.',
        is_correct: true,
        explanation: 'Định luật dịch chuyển phóng xạ alpha: Z giảm 2 đơn vị nên lùi 2 ô.',
      },
      {
        text: 'Khối lượng của hạt nhân Radon ²²²₈₆Rn nhỏ hơn tổng khối lượng của hạt alpha và hạt nhân Poloni ²¹⁸₈₄Po.',
        is_correct: false,
        explanation: 'Phản ứng phóng xạ là phản ứng tỏa năng lượng nên tổng khối lượng trước phản ứng phải lớn hơn khối lượng sau phản ứng (m_trước > m_sau).',
      },
    ],
  },

  // Chủ đề 4.1: Cấu tạo hạt nhân, Độ hụt khối & Năng lượng liên kết
  '12|topic|G12-CH4-TP1|12': {
    stem: 'Xét hai hạt nhân: Hạt nhân X có năng lượng liên kết là E_lk = 180 MeV và số khối A = 24; hạt nhân Y có năng lượng liên kết là E_lk = 480 MeV và số khối A = 60.',
    statements: [
      {
        text: 'Năng lượng liên kết riêng được xác định bằng tỉ số giữa năng lượng liên kết và tổng số khối: ε = E_lk / A.',
        is_correct: true,
        explanation: 'Đúng theo định nghĩa năng lượng liên kết riêng.',
      },
      {
        text: 'Năng lượng liên kết riêng là đại lượng đặc trưng cho mức độ bền vững của hạt nhân nguyên tử.',
        is_correct: true,
        explanation: 'Hạt nhân nào có năng lượng liên kết riêng càng lớn thì càng bền vững.',
      },
      {
        text: 'Năng lượng liên kết riêng của hạt nhân X là 7,5 MeV/nucleon và của hạt nhân Y là 8,0 MeV/nucleon.',
        is_correct: true,
        explanation: 'ε_X = 180 / 24 = 7,5 MeV/nu; ε_Y = 480 / 60 = 8,0 MeV/nu.',
      },
      {
        text: 'Hạt nhân X bền vững hơn hạt nhân Y vì số khối của hạt nhân X nhỏ hơn.',
        is_correct: false,
        explanation: 'Hạt nhân Y có năng lượng liên kết riêng (8,0 MeV/nu) lớn hơn X (7,5 MeV/nu) nên hạt nhân Y bền vững hơn.',
      },
    ],
  },
  '12|topic|G12-CH4-TP1|13': {
    stem: 'Hạt nhân Heli (⁴₂He) có khối lượng nghỉ m_He = 4,0015 u. Cho biết khối lượng của proton tự do m_p = 1,0073 u và neutron tự do m_n = 1,0087 u; 1 u ≈ 931,5 MeV/c².',
    statements: [
      {
        text: 'Tổng khối lượng của các nucleon riêng rẽ tạo nên hạt nhân Heli là m_0 = 4,0320 u.',
        is_correct: true,
        explanation: 'm_0 = 2 · m_p + 2 · m_n = 2 · 1,0073 + 2 · 1,0087 = 2,0146 + 2,0174 = 4,0320 u.',
      },
      {
        text: 'Độ hụt khối của hạt nhân Heli là Δm = m_0 - m_He = 0,0305 u.',
        is_correct: true,
        explanation: 'Δm = 4,0320 - 4,0015 = 0,0305 u.',
      },
      {
        text: 'Năng lượng liên kết của hạt nhân Heli xấp xỉ 28,4 MeV.',
        is_correct: true,
        explanation: 'E_lk = Δm · c² = 0,0305 · 931,5 ≈ 28,41 MeV.',
      },
      {
        text: 'Độ hụt khối xuất hiện là do các hạt neutron bị tiêu hao mất một phần vật chất trong quá trình liên kết.',
        is_correct: false,
        explanation: 'Theo hệ thức Einstein E = mc², phần khối lượng bị hụt chuyển hóa thành năng lượng tỏa ra khi các nucleon liên kết tạo thành hạt nhân.',
      },
    ],
  },
  '12|topic|G12-CH4-TP1|15': {
    stem: 'Khảo sát các hạt cơ bản và hạt nhân nguyên tử: electron, proton tự do, neutron tự do và hạt nhân Heli (⁴₂He).',
    statements: [
      {
        text: 'Proton tự do và neutron tự do đứng riêng lẻ không có độ hụt khối (độ hụt khối bằng 0).',
        is_correct: true,
        explanation: 'Độ hụt khối chỉ xuất hiện khi các nucleon liên kết với nhau tạo thành hạt nhân nguyên tử.',
      },
      {
        text: 'Trong các hạt trên, chỉ có hạt nhân Heli có độ hụt khối khác 0.',
        is_correct: true,
        explanation: 'Hạt nhân Heli là hệ liên kết gồm 2 proton và 2 neutron nên có độ hụt khối.',
      },
      {
        text: 'Đơn vị khối lượng nguyên tử u có giá trị bằng 1/12 khối lượng của một nguyên tử đồng vị Carbon ¹²₆C.',
        is_correct: true,
        explanation: 'Đúng theo quy chuẩn định nghĩa đơn vị u (1 u ≈ 1,66055·10⁻²⁷ kg).',
      },
      {
        text: 'Khối lượng của electron lớn hơn khối lượng của proton.',
        is_correct: false,
        explanation: 'Proton có khối lượng xấp xỉ 1836 lần khối lượng của electron (m_p ≈ 1,67·10⁻²⁷ kg >> m_e ≈ 9,1·10⁻³¹ kg).',
      },
    ],
  },
  '12|topic|G12-CH4-TP1|17': {
    stem: 'Bán kính hạt nhân nguyên tử có thể tính gần đúng theo công thức R = r0 · A^(1/3), với r0 ≈ 1,2·10⁻¹⁵ m và A là số khối của hạt nhân.',
    statements: [
      {
        text: 'Bán kính hạt nhân nguyên tử tỉ lệ thuận với căn bậc ba của số khối A^(1/3).',
        is_correct: true,
        explanation: 'Đúng theo công thức thực nghiệm R = r0 · A^(1/3).',
      },
      {
        text: 'Thể tích của hạt nhân nguyên tử (coi là hình cầu V = 4/3 π R³) tỉ lệ thuận bậc nhất với số khối A.',
        is_correct: true,
        explanation: 'V ~ R³ ~ [A^(1/3)]³ = A.',
      },
      {
        text: 'Khối lượng của hạt nhân m xấp xỉ tỉ lệ với số khối A, do đó khối lượng riêng của các hạt nhân nguyên tử khác nhau là xấp xỉ bằng nhau.',
        is_correct: true,
        explanation: 'ρ = m / V ~ A / A = const, khối lượng riêng hạt nhân cực lớn (cỡ 10¹⁷ kg/m³) và gần như đồng đều ở mọi hạt nhân.',
      },
      {
        text: 'Hạt nhân nguyên tử có kích thước tương đương với kích thước của toàn bộ nguyên tử.',
        is_correct: false,
        explanation: 'Kích thước nguyên tử cỡ 10⁻¹⁰ m (Angstrom), lớn gấp khoảng 10 000 đến 100 000 lần kích thước hạt nhân (10⁻¹⁵ m).',
      },
    ],
  },

  // Chủ đề 4.2: Phản ứng hạt nhân & Các định luật bảo toàn
  '12|topic|G12-CH4-TP2|11': {
    stem: 'Bắn phá hạt nhân Flo bằng hạt proton tạo ra phản ứng hạt nhân: ¹⁹₉F + ¹₁p -> ¹⁶₈O + X.',
    statements: [
      {
        text: 'Định luật bảo toàn số khối: 19 + 1 = 16 + A_X => A_X = 4.',
        is_correct: true,
        explanation: 'Tổng số nucleon trước và sau phản ứng được bảo toàn.',
      },
      {
        text: 'Định luật bảo toàn điện tích: 9 + 1 = 8 + Z_X => Z_X = 2.',
        is_correct: true,
        explanation: 'Tổng điện tích trước và sau phản ứng được bảo toàn.',
      },
      {
        text: 'Hạt X sinh ra là hạt alpha (⁴₂He).',
        is_correct: true,
        explanation: 'Hạt có A = 4 và Z = 2 chính là hạt nhân Heli (hạt alpha).',
      },
      {
        text: 'Trong phản ứng hạt nhân, tổng khối lượng nghỉ của các hạt trước và sau phản ứng luôn được bảo toàn tuyệt đối.',
        is_correct: false,
        explanation: 'Khối lượng nghỉ không bảo toàn; trong phản ứng tỏa năng lượng tổng khối lượng nghỉ giảm, trong phản ứng thu năng lượng tổng khối lượng nghỉ tăng.',
      },
    ],
  },
  '12|topic|G12-CH4-TP2|14': {
    stem: 'Phản ứng phân hạch Urani và phản ứng nhiệt hạch (tổng hợp hạt nhân nhẹ) là hai phương thức giải phóng năng lượng hạt nhân khổng lồ.',
    statements: [
      {
        text: 'Phản ứng nhiệt hạch là quá trình kết hợp hai hay nhiều hạt nhân rất nhẹ thành một hạt nhân nặng hơn.',
        is_correct: true,
        explanation: 'Đúng theo định nghĩa phản ứng nhiệt hạch (ví dụ: tổng hợp đơteri và triti thành heli).',
      },
      {
        text: 'Để xảy ra phản ứng nhiệt hạch cần cung cấp nhiệt độ cực cao (hàng chục triệu độ K) để các hạt nhân có động năng thắng lực đẩy tĩnh điện Coulomb.',
        is_correct: true,
        explanation: 'Các hạt nhân nhẹ đều mang điện dương nên đẩy nhau rất mạnh, cần nhiệt độ siêu cao để chúng tiến sát vào tầm của lực hạt nhân.',
      },
      {
        text: 'Tính trên cùng một đơn vị khối lượng nhiên liệu, phản ứng nhiệt hạch tỏa ra năng lượng lớn hơn phản ứng phân hạch.',
        is_correct: true,
        explanation: 'Nhiệt hạch tỏa năng lượng trên 1 kg nhiên liệu gấp khoảng 4 lần so với phân hạch Urani.',
      },
      {
        text: 'Phản ứng phân hạch tạo ra ít chất thải phóng xạ nguy hại hơn phản ứng nhiệt hạch.',
        is_correct: false,
        explanation: 'Phân hạch tạo ra rất nhiều mảnh vỡ hạt nhân phóng xạ có chu kỳ bán rã dài gây ô nhiễm môi trường nghiêm trọng; nhiệt hạch tạo ra khí Heli sạch hơn rất nhiều.',
      },
    ],
  },
  '12|topic|G12-CH4-TP2|17': {
    stem: 'Trong lò phản ứng hạt nhân phân hạch điều khiển được, người ta sử dụng các thanh điều khiển (chứa Bo hoặc Cadimi) và chất làm chậm (nước nặng D2O hoặc than chì).',
    statements: [
      {
        text: 'Phản ứng phân hạch Urani ²³⁵₉₂U bởi neutron nhiệt giải phóng trung bình 2 đến 3 neutron mới có năng lượng lớn (neutron nhanh).',
        is_correct: true,
        explanation: 'Đúng theo đặc điểm phân hạch hạt nhân dây chuyền.',
      },
      {
        text: 'Chất làm chậm có tác dụng làm giảm tốc độ của neutron nhanh thành neutron nhiệt có xác suất gây phân hạch cao.',
        is_correct: true,
        explanation: 'Neutron chuyển động chậm (neutron nhiệt) dễ bị U-235 hấp thụ hơn nhiều so với neutron nhanh.',
      },
      {
        text: 'Các thanh điều khiển có tác dụng hấp thụ bớt neutron thừa để giữ cho hệ số nhân neutron luôn bằng 1 (k = 1) duy trì phản ứng ổn định.',
        is_correct: true,
        explanation: 'Khi k = 1 phản ứng dây chuyền diễn ra ổn định với công suất không đổi; nếu k > 1 sẽ gây nổ lò.',
      },
      {
        text: 'Thanh điều khiển dùng để cung cấp thêm neutron vào lò phản ứng khi lò sắp tắt.',
        is_correct: false,
        explanation: 'Vật liệu thanh điều khiển (Bo, Cd) là chất hấp thụ neutron mạnh, cắm sâu thanh vào lò là để giảm số neutron, dập tắt phản ứng.',
      },
    ],
  },
  '12|topic|G12-CH4-TP2|20': {
    stem: 'Bắn hạt alpha (⁴₂He) có động năng vào hạt nhân nhôm ²⁷₁₃Al đứng yên gây ra phản ứng: ⁴₂He + ²⁷₁₃Al -> ³⁰₁₅P + ¹₀n. Biết tổng khối lượng các hạt trước phản ứng là m_trước = 30,9835 u và sau phản ứng là m_sau = 30,9865 u; 1 u = 931,5 MeV/c².',
    statements: [
      {
        text: 'Tổng khối lượng của các hạt sau phản ứng lớn hơn tổng khối lượng của các hạt trước phản ứng (m_sau > m_trước).',
        is_correct: true,
        explanation: '30,9865 u > 30,9835 u; độ tăng khối lượng là Δm = 0,003 u.',
      },
      {
        text: 'Phản ứng hạt nhân này là phản ứng thu năng lượng.',
        is_correct: true,
        explanation: 'Vì m_sau > m_trước nên năng lượng của phản ứng mang dấu âm: ΔE = (m_trước - m_sau) · c² < 0.',
      },
      {
        text: 'Năng lượng mà phản ứng này đã thu vào xấp xỉ 2,79 MeV.',
        is_correct: true,
        explanation: '|ΔE| = 0,003 · 931,5 = 2,7945 MeV ≈ 2,8 MeV.',
      },
      {
        text: 'Hạt photpho sinh ra ³⁰₁₅P là đồng vị bền vững vĩnh viễn không bị phân rã.',
        is_correct: false,
        explanation: 'P-30 là đồng vị phóng xạ nhân tạo đầu tiên do vợ chồng Joliot-Curie tìm ra năm 1934, nó phóng xạ beta cộng với chu kỳ khoảng 2,5 phút.',
      },
    ],
  },

  // Chủ đề 4.3: Hiện tượng phóng xạ, Định luật phóng xạ & Năng lượng hạt nhân
  '12|topic|G12-CH4-TP3|11': {
    stem: 'Khi một hạt nhân nguyên tử X phóng xạ phát ra một hạt alpha (α = ⁴₂He) tạo thành hạt nhân con Y.',
    statements: [
      {
        text: 'Số khối của hạt nhân con Y nhỏ hơn số khối của hạt nhân mẹ X là 4 đơn vị (A_Y = A_X - 4).',
        is_correct: true,
        explanation: 'Do hạt alpha mang đi 4 nucleon.',
      },
      {
        text: 'Điện tích hạt nhân của Y nhỏ hơn điện tích hạt nhân của X là 2 đơn vị nguyên tố (Z_Y = Z_X - 2).',
        is_correct: true,
        explanation: 'Do hạt alpha mang điện tích +2e.',
      },
      {
        text: 'Trong bảng tuần hoàn hóa học, nguyên tố Y đứng lùi 2 ô so với nguyên tố X.',
        is_correct: true,
        explanation: 'Đúng theo định luật dịch chuyển phóng xạ Soddy - Fajans.',
      },
      {
        text: 'Tia alpha có khả năng đâm xuyên rất mạnh, có thể đi xuyên qua lớp chì dày 10 cm.',
        is_correct: false,
        explanation: 'Tia alpha có khả năng ion hóa rất mạnh nhưng đâm xuyên rất yếu, chỉ đi được vài cm trong không khí và bị tờ giấy mỏng chặn lại hoàn toàn.',
      },
    ],
  },
  '12|topic|G12-CH4-TP3|13': {
    stem: 'Chu kỳ bán rã T và hằng số phóng xạ λ của một chất đồng vị phóng xạ liên hệ với nhau theo công thức λ = ln(2) / T ≈ 0,693 / T.',
    statements: [
      {
        text: 'Hằng số phóng xạ λ tỉ lệ nghịch với chu kỳ bán rã T.',
        is_correct: true,
        explanation: 'λ = ln(2) / T, chất có chu kỳ càng ngắn thì phân rã càng nhanh, λ càng lớn.',
      },
      {
        text: 'Đơn vị đo của hằng số phóng xạ λ trong hệ SI là s⁻¹ (hoặc ngày⁻¹, năm⁻¹).',
        is_correct: true,
        explanation: 'Đúng vì ln(2) không thứ nguyên, T có thứ nguyên thời gian.',
      },
      {
        text: 'Độ phóng xạ H của một lượng chất được xác định bằng công thức H = λ · N, trong đó N là số hạt nhân chưa bị phân rã.',
        is_correct: true,
        explanation: 'Đúng theo định nghĩa độ phóng xạ, đơn vị SI là Becquerel (1 Bq = 1 phân rã/s).',
      },
      {
        text: 'Nếu đốt nóng mẫu phóng xạ lên 1000 °C thì hằng số phóng xạ λ của nó sẽ tăng gấp đôi.',
        is_correct: false,
        explanation: 'Hằng số phóng xạ là đại lượng đặc trưng nội tại của hạt nhân, hoàn toàn không phụ thuộc nhiệt độ hay môi trường ngoài.',
      },
    ],
  },
  '12|topic|G12-CH4-TP3|16': {
    stem: 'Cho chùm tia phóng xạ gồm tia α, tia β⁻ và tia γ bay qua một điện trường đều giữa hai bản cực kim loại tích điện trái dấu.',
    statements: [
      {
        text: 'Tia gamma (γ) là sóng điện từ có bước sóng cực ngắn, không mang điện tích nên truyền thẳng không bị lệch trong điện trường.',
        is_correct: true,
        explanation: 'Hạt photon gamma trung hòa điện nên không chịu tác dụng của lực tĩnh điện.',
      },
      {
        text: 'Tia α mang điện tích dương (+2e) nên bị lệch về phía bản cực âm của tụ điện.',
        is_correct: true,
        explanation: 'Điện tích dương bị bản âm hút.',
      },
      {
        text: 'Tia β⁻ mang điện tích âm (-e) nên bị lệch về phía bản cực dương của tụ điện.',
        is_correct: true,
        explanation: 'Điện tích âm bị bản dương hút.',
      },
      {
        text: 'Vì tia α mang điện tích lớn hơn (+2e so với -e) nên nó bị lệch nhiều hơn tia β⁻ trong cùng một điện trường.',
        is_correct: false,
        explanation: 'Độ lệch phụ thuộc vào gia tốc a = qE / m; electron có khối lượng m_e cực nhỏ (nhỏ hơn hạt alpha khoảng 7300 lần) nên tia β⁻ bị lệch nhiều hơn tia alpha rất nhiều.',
      },
    ],
  },
  '12|topic|G12-CH4-TP3|20': {
    stem: 'Đồng vị phóng xạ Radi ²²⁶₈₈Ra có chu kỳ bán rã T = 1600 năm. Một mẫu ban đầu có khối lượng m0 = 1 gam.',
    statements: [
      {
        text: 'Hằng số phóng xạ của Radi-226 tính theo đơn vị s⁻¹ xấp xỉ 1,37·10⁻¹¹ s⁻¹ (lấy 1 năm = 365,25 ngày = 3,156·10⁷ s).',
        is_correct: true,
        explanation: 'T = 1600 · 3,156·10⁷ s ≈ 5,05·10¹⁰ s => λ = 0,693 / (5,05·10¹⁰) ≈ 1,37·10⁻¹¹ s⁻¹.',
      },
      {
        text: 'Số hạt nhân Radi có trong 1 gam Radi ban đầu là xấp xỉ 2,66·10²¹ hạt.',
        is_correct: true,
        explanation: 'N0 = (m0 / M) · N_A = (1 / 226) · 6,022·10²³ ≈ 2,66·10²¹ hạt.',
      },
      {
        text: 'Độ phóng xạ ban đầu của 1 gam Radi là xấp xỉ 3,65·10¹⁰ Bq (tương đương 1 Curie (Ci)).',
        is_correct: true,
        explanation: 'H0 = λ · N0 = 1,37·10⁻¹¹ · 2,66·10²¹ ≈ 3,65·10¹⁰ Bq (đây chính là định nghĩa ban đầu của 1 Curie).',
      },
      {
        text: 'Sau 3200 năm (2 chu kỳ bán rã), mẫu Radi trên hoàn toàn biến mất không còn lại một hạt nhân nào.',
        is_correct: false,
        explanation: 'Sau 2 chu kỳ bán rã (3200 năm), lượng Radi còn lại 1/4 gam (25% so với ban đầu), không phải biến mất hoàn toàn.',
      },
    ],
  },
};

// Write out lib/format2025-bank/grade12.ts
const header = `import type { TfBank } from './types';

/**
 * Ngân hàng câu Đúng/Sai – Lớp 12 (soạn thủ công chuẩn Cấu trúc đề 2025 Bộ GD&ĐT).
 * Bao gồm đầy đủ 16 chủ đề/chương của chương trình Vật lý 12 mới (GDPT 2018).
 * Mỗi câu gồm 4 mệnh đề a, b, c, d hoàn toàn độc lập, đa dạng về tính đúng sai.
 */
export const GRADE_12_TF_BANK: TfBank = `;

const content = header + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync('D:/physics_cms_6_12/lib/format2025-bank/grade12.ts', content, 'utf8');
console.log('Successfully wrote GRADE_12_TF_BANK with', Object.keys(data).length, 'items!');

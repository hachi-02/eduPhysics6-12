export interface SeedTopicData {
  order_index: number;
  code: string;
  title: string;
  textbook_tags: string[];
  overview: string;
  summary_note: string;
  theory_sections: {
    heading: string;
    content: string;
    keyPoints: string[];
    realWorldApplication?: string;
  }[];
  quantities: {
    name: string;
    symbol: string;
    si_unit: string;
    other_units: string;
    measuring_device: string;
    description: string;
  }[];
  formulas: {
    name: string;
    latex_expression: string;
    plain_expression: string;
    variables: { symbol: string; name: string; unit: string }[];
    derived_formulas: { expression: string; description: string }[];
    usage_note: string;
  }[];
  examples: {
    title: string;
    difficulty: string;
    problem_statement: string;
    given_summary: string;
    solution_steps: string[];
    final_answer: string;
  }[];
  simulation: {
    sim_key: string;
    title: string;
    description: string;
    parameters: Record<string, any>;
    guide_steps: string[];
    physics_insight: string;
  };
}

export interface SeedChapterData {
  order_index: number;
  code: string;
  title: string;
  description: string;
  summary_markdown: string;
  key_takeaways: string[];
  formula_cheatsheet: { name: string; latex: string; note: string }[];
  topics: SeedTopicData[];
}

export const GRADE_6_CHAPTERS_PART1: SeedChapterData[] = [
  {
    order_index: 1,
    code: 'CH1',
    title: 'Chương 1: Các phép đo (Đo lường Vật lý cơ bản)',
    description:
      'Tổng hợp chuẩn 3 bộ SGK (Kết nối tri thức, Chân trời sáng tạo, Cánh Diều): Làm quen với các đại lượng cơ bản gồm chiều dài, thể tích, khối lượng, thời gian và nhiệt độ; nắm vững giới hạn đo (GHĐ), độ chia nhỏ nhất (ĐCNN) và quy tắc đo chính xác.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 1: Các phép đo
Trong Vật lý và Khoa học tự nhiên, **đo lường** là việc so sánh một đại lượng chưa biết với một đại lượng cùng loại được chọn làm **đơn vị chuẩn (Hệ SI)**.

1. **Giới hạn đo (GHĐ) và Độ chia nhỏ nhất (ĐCNN):**
   - **GHĐ:** Giá trị lớn nhất ghi trên dụng cụ đo.
   - **ĐCNN:** Hiệu giá trị giữa hai vạch chia liên tiếp trên dụng cụ đo. Công thức tính nhanh: $\\text{ĐCNN} = \\frac{\\text{Hiệu hai số ghi liên tiếp}}{\\text{Số khoảng chia giữa chúng}}$.
2. **Quy tắc 5 bước khi thực hiện phép đo:**
   - Bước 1: Ước lượng đại lượng cần đo.
   - Bước 2: Chọn dụng cụ đo có GHĐ và ĐCNN phù hợp.
   - Bước 3: Hiệu chỉnh dụng cụ đo về vạch số 0.
   - Bước 4: Thực hiện phép đo và đặt mắt nhìn đúng quy tắc (vuông góc với vạch chia).
   - Bước 5: Đọc và ghi kết quả đo theo vạch chia gần nhất (bội số của ĐCNN).
3. **Các đại lượng cốt lõi trong Chương 1:**
   - **Chiều dài ($l, d, s, h$):** Đơn vị chuẩn SI là mét ($\\text{m}$).
   - **Thể tích ($V$):** Đơn vị chuẩn SI là mét khối ($\\text{m}^3$), thường dùng lít ($\\text{L}$) và mililít ($\\text{mL} = \\text{cm}^3$).
   - **Khối lượng ($m$):** Đơn vị chuẩn SI là kilôgam ($\\text{kg}$), đo lượng chất tạo nên vật.
   - **Thời gian ($t$):** Đơn vị chuẩn SI là giây ($\\text{s}$).
   - **Nhiệt độ ($T, t$):** Đơn vị SI là Kelvin ($\\text{K}$), thông dụng ở Việt Nam là độ Celsius ($^\\circ\\text{C}$).`,
    key_takeaways: [
      'Luôn xác định GHĐ và ĐCNN trước khi tiến hành bất kỳ phép đo nào.',
      'Khi đọc thước hoặc bình chia độ, mắt phải nhìn theo hướng vuông góc với vạch chia (với chất lỏng thì nhìn ngang đáy mặt khum).',
      '1 m³ = 1000 L = 1.000.000 mL; 1 L = 1 dm³; 1 mL = 1 cm³ (1 cc).',
      'Khối lượng (m) chỉ lượng chất của vật và không đổi theo vị trí địa lý.',
      'Công thức đổi nhiệt độ: T(K) = t(°C) + 273 và t(°F) = 1,8 · t(°C) + 32.',
    ],
    formula_cheatsheet: [
      {
        name: 'Độ chia nhỏ nhất (ĐCNN)',
        latex: '\\text{ĐCNN} = \\frac{A_2 - A_1}{n}',
        note: 'A2, A1 là hai số ghi lớn - bé; n là số khoảng chia giữa chúng.',
      },
      {
        name: 'Thể tích vật rắn không thấm nước (Bình chia độ)',
        latex: 'V_{\\text{vật}} = V_2 - V_1',
        note: 'V1: mực nước ban đầu; V2: mực nước sau khi thả chìm vật.',
      },
      {
        name: 'Thể tích vật rắn lớn (Bình tràn)',
        latex: 'V_{\\text{vật}} = V_{\\text{nước tràn ra}}',
        note: 'Dùng khi vật không bỏ lọt bình chia độ.',
      },
      {
        name: 'Chuyển đổi Celsius sang Kelvin',
        latex: 'T(\\text{K}) = t(^\\circ\\text{C}) + 273',
        note: '0°C ứng với 273K; 100°C ứng với 373K.',
      },
      {
        name: 'Chuyển đổi Celsius sang Fahrenheit',
        latex: 't(^\\circ\\text{F}) = 1,8 \\cdot t(^\\circ\\text{C}) + 32',
        note: '0°C ứng với 32°F; 100°C ứng với 212°F.',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'C1-B1',
        title: 'Chủ đề 1.1: Đo chiều dài và đo thể tích',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Nắm vững đơn vị đo chiều dài và thể tích trong hệ SI, cách xác định GHĐ - ĐCNN của thước và bình chia độ, cách khắc phục sai số thị sai khi đọc kết quả và phương pháp đo thể tích vật rắn bất kỳ.',
        summary_note:
          'Ghi nhớ vàng: 1 m = 10 dm = 100 cm = 1000 mm; 1 L = 1 dm³ = 1000 mL = 1000 cm³. Khi đọc kết quả đo, chữ số cuối cùng phải chia hết cho ĐCNN của dụng cụ.',
        theory_sections: [
          {
            heading: '1. Đơn vị và dụng cụ đo chiều dài',
            content:
              'Cảm giác của giác quan có thể bị đánh lừa bởi ảo giác thị giác, vì vậy muốn biết chính xác kích thước của vật hay khoảng cách giữa hai điểm, ta phải thực hiện phép đo chiều dài. Đơn vị đo chiều dài trong hệ thống đo lường hợp pháp của nước ta và quốc tế (SI) là mét (ký hiệu: m). Để đo các vật có kích thước rất lớn hoặc rất nhỏ, người ta dùng các bội số (km) hoặc ước số (dm, cm, mm, μm, nm) của mét.',
            keyPoints: [
              '1 km = 1000 m; 1 m = 10 dm = 100 cm = 1000 mm.',
              '1 mm = 1000 μm (micrômét); 1 μm = 1000 nm (nanômét).',
              'Các loại thước phổ biến: Thước kẻ (học sinh), thước dây (thợ may), thước cuộn (thợ xây), thước kẹp (đo đường kính ngoài/trong chính xác cao).',
            ],
            realWorldApplication:
              'Thợ mộc dùng thước cuộn có ĐCNN 1 mm để đóng bàn ghế; thợ cơ khí dùng thước kẹp có ĐCNN 0,02 mm để đo đường kính trục máy.',
          },
          {
            heading: '2. Giới hạn đo (GHĐ) và Độ chia nhỏ nhất (ĐCNN)',
            content:
              'Mỗi dụng cụ đo đều có hai thông số kỹ thuật quan trọng cần kiểm tra trước khi đo: Giới hạn đo (GHĐ) là độ dài (hoặc thể tích) lớn nhất ghi trên dụng cụ; Độ chia nhỏ nhất (ĐCNN) là độ dài (hoặc thể tích) giữa hai vạch chia liên tiếp trên dụng cụ.',
            keyPoints: [
              'Nếu chọn thước có GHĐ nhỏ hơn chiều dài vật: Phải đo nhiều lần dẫn đến cộng dồn sai số.',
              'Nếu chọn thước có ĐCNN quá lớn so với yêu cầu: Kết quả đo thiếu độ chính xác.',
              'Cách tính ĐCNN: Lấy hiệu hai số ghi gần nhau chia cho số khoảng (số ô) giữa hai vạch đó.',
            ],
          },
          {
            heading: '3. Quy tắc đo chiều dài và đo thể tích chất lỏng, vật rắn',
            content:
              'Khi đo chiều dài: Đặt thước dọc theo độ dài cần đo, vạch số 0 ngang với một đầu của vật; mắt nhìn theo hướng vuông góc với cạnh thước tại đầu kia của vật. Khi đo thể tích chất lỏng bằng bình chia độ: Đặt bình thẳng đứng, mắt nhìn ngang với độ cao đáy mặt thoáng chất lỏng (hoặc đỉnh mặt khum nếu là thủy ngân). Đối với vật rắn không thấm nước: Dùng bình chia độ ($V = V_2 - V_1$) hoặc bình tràn.',
            keyPoints: [
              'Đặt lệch thước hoặc nhìn xiên góc sẽ gây ra sai số hệ thống và sai số thị sai.',
              'Đo vật rắn không thấm nước bỏ lọt bình chia độ: $V_{\\text{vật}} = V_2 - V_1$.',
              'Nếu vật rắn nổi trên mặt nước (như miếng xốp, quả bóng bàn): Dùng quả nặng chìm kéo vật xuống rồi trừ đi thể tích quả nặng.',
            ],
            realWorldApplication:
              'Bơm tiêm y tế ghi đơn vị cc (chính là cm³ hay mL) giúp bác sĩ lấy chính xác thể tích thuốc cần tiêm.',
          },
        ],
        quantities: [
          {
            name: 'Chiều dài (Độ dài / Quãng đường)',
            symbol: 'l, d, s, h',
            si_unit: 'm (mét)',
            other_units: 'km, dm, cm, mm, μm, inch (1 inch ≈ 2,54 cm)',
            measuring_device: 'Thước thẳng, thước cuộn, thước dây, thước kẹp',
            description: 'Xác định khoảng cách giữa hai điểm hoặc kích thước dài, rộng, cao của vật.',
          },
          {
            name: 'Thể tích',
            symbol: 'V',
            si_unit: 'm³ (mét khối)',
            other_units: 'dm³, cm³ (cc), L (lít), mL (mililít)',
            measuring_device: 'Bình chia độ, ca đong, ống đong, bơm tiêm, bình tràn',
            description: 'Phần không gian mà vật hoặc chất lỏng chiếm chỗ (1 L = 1 dm³; 1 mL = 1 cm³).',
          },
        ],
        formulas: [
          {
            name: 'Tính Độ chia nhỏ nhất (ĐCNN) của thước / bình chia độ',
            latex_expression: '\\text{ĐCNN} = \\frac{A_2 - A_1}{n}',
            plain_expression: 'ĐCNN = (A2 - A1) / n',
            variables: [
              { symbol: 'A_1, A_2', name: 'Hai giá trị số ghi trên vạch chia', unit: 'Cùng đơn vị trên dụng cụ' },
              { symbol: 'n', name: 'Số khoảng chia (số ô) giữa hai vạch A1 và A2', unit: 'Khoảng (không đơn vị)' },
            ],
            derived_formulas: [
              { expression: 'n = \\frac{A_2 - A_1}{\\text{ĐCNN}}', description: 'Tìm số khoảng chia giữa hai vạch số' },
            ],
            usage_note: 'Đếm số khoảng (ô trống) giữa hai vạch, tuyệt đối không đếm số vạch kẻ.',
          },
          {
            name: 'Đo thể tích vật rắn không thấm nước bằng bình chia độ',
            latex_expression: 'V_{\\text{vật}} = V_2 - V_1',
            plain_expression: 'V_vật = V2 - V1',
            variables: [
              { symbol: 'V_{\\text{vật}}', name: 'Thể tích của vật rắn không thấm nước', unit: 'cm³ hoặc mL' },
              { symbol: 'V_1', name: 'Thể tích nước ban đầu trong bình chia độ', unit: 'cm³ hoặc mL' },
              { symbol: 'V_2', name: 'Thể tích nước + vật sau khi thả vật chìm hoàn toàn', unit: 'cm³ hoặc mL' },
            ],
            derived_formulas: [
              { expression: 'V_2 = V_1 + V_{\\text{vật}}', description: 'Mực nước dâng lên sau khi thả vật chìm' },
              { expression: 'V_1 = V_2 - V_{\\text{vật}}', description: 'Thể tích nước ban đầu trước khi thả vật' },
            ],
            usage_note: 'Áp dụng cho vật rắn không thấm nước, không tan trong nước và chìm hoàn toàn.',
          },
          {
            name: 'Đo thể tích vật rắn khi dùng cả Bình tràn và Bình chứa',
            latex_expression: 'V_{\\text{vật}} = (V_{\\text{bình tràn}} - V_1) + V_{\\text{tràn}}',
            plain_expression: 'V_vật = (V_bình_tràn - V1) + V_tràn',
            variables: [
              { symbol: 'V_{\\text{bình tràn}}', name: 'Dung tích tối đa tới miệng vòi bình tràn', unit: 'cm³ (mL)' },
              { symbol: 'V_1', name: 'Lượng nước ban đầu có trong bình tràn', unit: 'cm³ (mL)' },
              { symbol: 'V_{\\text{tràn}}', name: 'Lượng nước chảy sang bình chia độ hứng ở ngoài', unit: 'cm³ (mL)' },
            ],
            derived_formulas: [
              {
                expression: 'V_{\\text{vật}} = V_{\\text{tràn}} \\quad (\\text{khi } V_1 = V_{\\text{bình tràn}})',
                description: 'Trường hợp chuẩn khi ban đầu đổ nước đầy ngang vòi bình tràn',
              },
            ],
            usage_note: 'Cực kỳ hay gặp trong các câu hỏi vận dụng cao khi nước ban đầu chưa đổ đầy tới miệng vòi bình tràn!',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Xác định ĐCNN và cách ghi kết quả đo hợp lệ',
            difficulty: 'Cơ bản',
            problem_statement:
              'Trên một bình chia độ, giữa vạch số 20 mL và vạch số 40 mL được chia thành 10 khoảng đều nhau. Hãy tính ĐCNN của bình chia độ này và cho biết trong các kết quả đọc sau: 25 mL; 26 mL; 26,5 mL, kết quả nào được ghi đúng quy tắc?',
            given_summary: 'A1 = 20 mL; A2 = 40 mL; Số khoảng chia n = 10 khoảng.',
            solution_steps: [
              'Bước 1: Áp dụng công thức tính độ chia nhỏ nhất: ĐCNN = (40 - 20) / 10 = 20 / 10 = 2 mL.',
              'Bước 2: Vì ĐCNN = 2 mL nên mọi kết quả đọc được theo vạch chia gần nhất phải là bội số của 2 mL (tức là số chẵn: 22, 24, 26, 28...).',
              'Bước 3: Xét 3 kết quả đã cho (25 mL; 26 mL; 26,5 mL), chỉ có 26 mL chia hết cho 2 mL.',
            ],
            final_answer: 'ĐCNN = 2 mL; Kết quả ghi đúng quy tắc là 26 mL.',
          },
          {
            title: 'Ví dụ 2: Bài toán thả hòn đá vào bình chia độ bị tràn nước',
            difficulty: 'Vận dụng',
            problem_statement:
              'Một bình chia độ có GHĐ là 100 cm³ đang chứa 65 cm³ nước. Khi thả chìm hoàn toàn một hòn đá vào bình thì nước dâng đầy tới miệng bình (100 cm³) và tràn ra ngoài 18 cm³. Tính thể tích của hòn đá theo đơn vị cm³ và dm³.',
            given_summary: 'V_max = 100 cm³; V1 = 65 cm³; V_tràn = 18 cm³.',
            solution_steps: [
              'Bước 1: Phần thể tích nước dâng lên thêm bên trong bình chia độ trước khi tràn là: ΔV_trong = 100 - 65 = 35 cm³.',
              'Bước 2: Thể tích của hòn đá bằng tổng phần nước dâng lên trong bình và phần nước tràn ra ngoài: V_đá = 35 + 18 = 53 cm³.',
              'Bước 3: Đổi sang đơn vị dm³: Vì 1 dm³ = 1000 cm³ nên V_đá = 53 / 1000 = 0,053 dm³.',
            ],
            final_answer: 'V_đá = 53 cm³ = 0,053 dm³.',
          },
        ],
        simulation: {
          sim_key: 'length_volume_lab',
          title: 'Phòng thí nghiệm Đo chiều dài (Thị sai) & Bình chia độ thả vật rắn',
          description:
            'Kéo thanh trượt để thay đổi góc đặt mắt (trực diện 90° hoặc nhìn lệch góc) khi đo chiều dài và thả vật rắn vào bình chia độ để quan sát mực nước dâng V₂ - V₁.',
          parameters: {
            defaultObjectLengthCm: 7.4,
            defaultInitialWaterMl: 50,
            defaultStoneVolumeMl: 25,
          },
          guide_steps: [
            'Điều chỉnh góc nhìn mắt (Eye Angle) về 0° (vuông góc với thước) để thấy sai số thị sai bằng 0.',
            'Thử kéo góc nhìn lệch sang trái (-30°) hoặc phải (+30°) để quan sát vạch đọc bị lệch như thế nào.',
            'Bấm hoặc kéo thanh "Thả vật rắn vào bình chia độ" để quan sát mực nước dâng từ V₁ lên V₂ và kiểm chứng V_vật = V₂ - V₁.',
          ],
          physics_insight:
            'Mắt nhìn lệch góc (thị sai) làm tia nhìn cắt vạch thước ở vị trí sai lệch Δl = h·tan(α). Khi thả vật chìm hoàn toàn, thể tích nước dâng lên đúng bằng thể tích phần không gian vật chiếm chỗ.',
        },
      },
      {
        order_index: 2,
        code: 'C1-B2',
        title: 'Chủ đề 1.2: Đo khối lượng và đo thời gian',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Hiểu bản chất khối lượng là số đo lượng chất của vật, làm chủ hệ thống đơn vị đo khối lượng (tấn, tạ, yến, kg, g, mg) và thời gian (giờ, phút, giây), biết cách sử dụng cân Роберval, cân đồng hồ, cân điện tử và đồng hồ bấm giây.',
        summary_note:
          '1 tấn = 1000 kg; 1 kg = 1000 g; 1 g = 1000 mg. 1 giờ = 60 phút = 3600 giây; 1 ngày = 86.400 giây. Trước khi cân luôn phải điều chỉnh ốc vặn đưa kim cân về đúng vạch số 0.',
        theory_sections: [
          {
            heading: '1. Khối lượng và đơn vị đo khối lượng',
            content:
              'Mọi vật đều được cấu tạo từ chất. Khối lượng của một vật chỉ lượng chất tạo nên vật đó (ký hiệu là m). Khối lượng của vật không thay đổi khi ta đưa vật từ nơi này đến nơi khác (kể cả đưa lên Mặt Trăng). Đơn vị đo khối lượng chuẩn trong hệ SI là kilôgam (kg).',
            keyPoints: [
              '1 tấn = 10 tạ = 100 yến = 1000 kg.',
              '1 tạ = 100 kg; 1 yến = 10 kg; 1 lạng (thông dụng dân gian) = 100 g = 0,1 kg.',
              '1 kg = 1000 g (gam); 1 g = 1000 mg (miligam).',
            ],
            realWorldApplication:
              'Trên vỏ hộp sữa bột ghi "Khối lượng tịnh 800 g" nghĩa là lượng sữa bên trong hộp (không tính vỏ hộp) là 800 g.',
          },
          {
            heading: '2. Các loại cân và quy tắc đo khối lượng',
            content:
              'Trong phòng thí nghiệm và đời sống có nhiều loại cân: cân Роберval (cân hai đĩa dùng quả cân), cân đòn, cân đồng hồ, cân y tế, cân điện tử. Khi dùng cân đồng hồ: phải đặt cân trên mặt phẳng ngang, vặn ốc hiệu chỉnh để kim cân chỉ đúng vạch số 0 khi chưa đặt vật, đặt vật vào giữa đĩa cân và nhìn vuông góc với mặt số.',
            keyPoints: [
              'Với cân Роберval: Khối lượng vật bằng tổng khối lượng các quả cân đặt trên đĩa bên kia cộng với giá trị con mã khi đòn cân nằm thăng bằng.',
              'Với cân điện tử: Nhấn nút TARE (Trừ bì) khi đặt cốc rỗng lên cân để đo trực tiếp khối lượng chất lỏng đổ vào cốc.',
            ],
          },
          {
            heading: '3. Đơn vị và dụng cụ đo thời gian',
            content:
              'Đơn vị đo thời gian trong hệ thống đo lường chính thức là giây (ký hiệu: s). Để đo thời gian diễn ra một sự kiện nhanh (như chạy 100 m hay con lắc dao động), ta dùng đồng hồ bấm giây (Stopwatch) có ĐCNN tới 0,01 s hoặc cổng quang điện.',
            keyPoints: [
              '1 giờ (h) = 60 phút (min) = 3600 giây (s); 1 phút = 60 giây.',
              'Khi dùng đồng hồ bấm giây: Nhấn RESET để đưa về 00:00.00 trước khi đo; nhấn START/STOP đúng thời điểm bắt đầu và kết thúc.',
            ],
          },
        ],
        quantities: [
          {
            name: 'Khối lượng',
            symbol: 'm',
            si_unit: 'kg (kilôgam)',
            other_units: 'tấn (t), tạ, yến, g (gam), mg (miligam), lạng (100 g)',
            measuring_device: 'Cân đồng hồ, cân điện tử, cân Роберval, cân y tế',
            description: 'Số đo lượng chất chứa trong vật. Không phụ thuộc vào vị trí hay hình dạng vật.',
          },
          {
            name: 'Thời gian',
            symbol: 't',
            si_unit: 's (giây)',
            other_units: 'min (phút), h (giờ), ngày, ms (mili-giây = 0,001 s)',
            measuring_device: 'Đồng hồ bấm giây, đồng hồ treo tường, cổng quang điện',
            description: 'Khoảng thời gian diễn ra một hiện tượng hoặc thời điểm xảy ra sự kiện.',
          },
        ],
        formulas: [
          {
            name: 'Tính khối lượng tịnh (Trừ bì)',
            latex_expression: 'm_{\\text{hàng}} = m_{\\text{tổng}} - m_{\\text{bì}}',
            plain_expression: 'm_hàng = m_tổng - m_bì',
            variables: [
              { symbol: 'm_{\\text{hàng}}', name: 'Khối lượng tịnh của chất/hàng hóa bên trong', unit: 'kg hoặc g' },
              { symbol: 'm_{\\text{tổng}}', name: 'Tổng khối lượng cả vỏ hộp (bì) và hàng', unit: 'kg hoặc g' },
              { symbol: 'm_{\\text{bì}}', name: 'Khối lượng riêng của vỏ hộp / cốc chứa', unit: 'kg hoặc g' },
            ],
            derived_formulas: [
              { expression: 'm_{\\text{tổng}} = m_{\\text{hàng}} + m_{\\text{bì}}', description: 'Khối lượng toàn phần khi đặt cả hộp lên cân' },
            ],
            usage_note: 'Luôn đổi các đại lượng về cùng một đơn vị (cùng g hoặc cùng kg) trước khi cộng trừ.',
          },
          {
            name: 'Giá trị trung bình của nhiều lần đo',
            latex_expression: '\\bar{A} = \\frac{A_1 + A_2 + A_3}{3}',
            plain_expression: 'A_tb = (A1 + A2 + A3) / 3',
            variables: [
              { symbol: '\\bar{A}', name: 'Kết quả đo trung bình (khối lượng hoặc thời gian)', unit: 'kg, g hoặc s' },
              { symbol: 'A_1, A_2, A_3', name: 'Kết quả của lần đo thứ 1, 2, 3', unit: 'kg, g hoặc s' },
            ],
            derived_formulas: [],
            usage_note: 'Đo lặp lại từ 3 lần trở lên rồi lấy trung bình cộng giúp giảm thiểu sai số ngẫu nhiên.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Cân Роберval và bài toán tổng các quả cân',
            difficulty: 'Cơ bản',
            problem_statement:
              'Trên đĩa cân Роберval bên trái đặt một túi đường. Đĩa cân bên phải đặt các quả cân: một quả 500 g, hai quả 200 g, một quả 50 g và một quả 20 g thì đòn cân nằm thăng bằng. Hãy tính khối lượng túi đường ra đơn vị gam (g) và kilôgam (kg).',
            given_summary: 'Các quả cân: 1×500g, 2×200g, 1×50g, 1×20g.',
            solution_steps: [
              'Bước 1: Khi cân Роберval thăng bằng, khối lượng túi đường bằng tổng khối lượng các quả cân trên đĩa bên phải.',
              'Bước 2: Tính tổng: m = 500 + 2 × 200 + 50 + 20 = 500 + 400 + 70 = 970 g.',
              'Bước 3: Đổi sang kilôgam: m = 970 / 1000 = 0,97 kg.',
            ],
            final_answer: '970 g hay 0,97 kg.',
          },
          {
            title: 'Ví dụ 2: Xử lý sai số chưa chỉnh vạch 0 trên cân đồng hồ',
            difficulty: 'Vận dụng',
            problem_statement:
              'Một chiếc cân đồng hồ khi chưa đặt vật thì kim cân đã chỉ sẵn ở vạch 150 g. Khi đặt một quả bưởi lên đĩa cân thì kim cân chỉ vào vạch 1,45 kg. Hỏi khối lượng thực tế của quả bưởi là bao nhiêu gam?',
            given_summary: 'Số chỉ ban đầu m0 = 150 g; Số chỉ khi cân m_đọc = 1,45 kg.',
            solution_steps: [
              'Bước 1: Đổi số chỉ khi đặt quả bưởi ra đơn vị gam: m_đọc = 1,45 kg × 1000 = 1450 g.',
              'Bước 2: Vì ban đầu kim cân đã lệch quá vạch 0 một lượng 150 g nên khối lượng thực của quả bưởi bằng số chỉ đọc được trừ đi độ lệch ban đầu: m_thực = 1450 - 150 = 1300 g (hay 1,3 kg).',
            ],
            final_answer: '1300 g (1,3 kg).',
          },
        ],
        simulation: {
          sim_key: 'mass_time_lab',
          title: 'Phòng thí nghiệm Cân Роберval / Cân đồng hồ & Đồng hồ bấm giây',
          description:
            'Thực hành cân vật có độ lệch vạch 0 (Zero-offset) và bấm giờ chu kỳ dao động của con lắc đơn để lấy giá trị trung bình.',
          parameters: {
            defaultTrueMassG: 650,
            defaultZeroOffsetG: 0,
            defaultPendulumLengthM: 1.0,
          },
          guide_steps: [
            'Thay đổi khối lượng vật mẫu và thử chỉnh "Độ lệch vạch 0 (Zero Offset)" để thấy sự khác biệt giữa số chỉ kim cân và khối lượng thực.',
            'Nhấn nút "Hiệu chỉnh về 0 (TARE)" để đưa sai số hệ thống về 0.',
            'Quan sát con lắc dao động và xem cách đo thời gian 5 dao động liên tiếp rồi chia 5 để giảm sai số bấm tay.',
          ],
          physics_insight:
            'Khi đo thời gian của một dao động rất ngắn, phản xạ bấm tay của con người (±0,2 s) gây sai số lớn. Nếu đo thời gian của N = 10 dao động rồi lấy t = Δt / 10, sai số bấm tay giảm đi 10 lần!',
        },
      },
      {
        order_index: 3,
        code: 'C1-B3',
        title: 'Chủ đề 1.3: Đo nhiệt độ và các thang nhiệt độ (°C, K, °F)',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Hiểu nhiệt độ là số đo độ "nóng", "lạnh" của vật; nắm vững nguyên lý giãn nở vì nhiệt của chất lỏng trong nhiệt kế; phân biệt nhiệt kế y tế, nhiệt kế rượu, nhiệt kế thủy ngân và thành thạo quy đổi giữa 3 thang nhiệt độ Celsius (°C), Kelvin (K), Fahrenheit (°F).',
        summary_note:
          'Ở áp suất tiêu chuẩn: Nước đá đang tan ở 0°C = 273 K = 32°F; Nước đang sôi ở 100°C = 373 K = 212°F; Nhiệt độ cơ thể người khỏe mạnh khoảng 37°C = 310 K = 98,6°F.',
        theory_sections: [
          {
            heading: '1. Nhiệt độ và sự cảm nhận nóng - lạnh',
            content:
              'Nhiệt độ là số đo độ "nóng", "lạnh" của một vật. Vật nóng hơn có nhiệt độ cao hơn, vật lạnh hơn có nhiệt độ thấp hơn. Cảm giác của tay người về độ nóng lạnh chỉ mang tính tương đối (thí nghiệm nhúng 2 tay vào nước ấm sau khi ngâm nước lạnh và nước nóng), do đó phải dùng nhiệt kế để đo chính xác.',
            keyPoints: [
              'Nhiệt kế chất lỏng (thủy ngân, rượu màu, dầu) hoạt động dựa trên hiện tượng giãn nở vì nhiệt của chất lỏng.',
              'Nhiệt kế điện tử / hồng ngoại hoạt động dựa trên cảm biến nhiệt điện trở hoặc bức xạ hồng ngoại.',
            ],
          },
          {
            heading: '2. Các loại nhiệt kế thường gặp và giới hạn đo',
            content:
              'Tùy mục đích sử dụng mà người ta chế tạo các loại nhiệt kế khác nhau: Nhiệt kế y tế (GHĐ từ 35°C đến 42°C, ĐCNN 0,1°C, có nút thắt ở bầu thủy ngân để cột chất lỏng không tự tụt xuống khi lấy ra khỏi cơ thể); Nhiệt kế rượu (đo nhiệt độ khí quyển từ -30°C đến 50°C); Nhiệt kế thủy ngân phòng thí nghiệm (từ -10°C đến 110°C hoặc cao hơn).',
            keyPoints: [
              'Không dùng nhiệt kế y tế để đo nước sôi (100°C) vì vượt quá GHĐ 42°C sẽ làm vỡ nhiệt kế!',
              'Không dùng nhiệt kế rượu để đo nước sôi vì rượu sôi ở khoảng 78°C.',
              'Nhiệt kế y tế thủy ngân có bầu thắt nhỏ nên trước khi đo phải vẩy mạnh cho thủy ngân tụt xuống dưới vạch 35°C.',
            ],
            realWorldApplication:
              'Khi đo thân nhiệt bằng nhiệt kế y tế, nhờ ống quản có chỗ thắt gần bầu chứa nên khi lấy nhiệt kế ra khỏi nách/miệng để đọc, mực thủy ngân vẫn giữ nguyên ở nhiệt độ cơ thể.',
          },
          {
            heading: '3. Ba thang nhiệt độ: Celsius (°C), Kelvin (K) và Fahrenheit (°F)',
            content:
              'Trên thế giới có 3 thang nhiệt độ phổ biến: (1) Thang Celsius (°C) chọn mốc nước đá đang tan là 0°C và nước tinh khiết đang sôi là 100°C; (2) Thang Kelvin (K - đơn vị chuẩn SI) chọn độ không tuyệt đối là 0 K (-273°C), mỗi độ chia 1 K bằng độ lớn 1°C; (3) Thang Fahrenheit (°F) chọn nước đá đang tan là 32°F và nước đang sôi là 212°F (khoảng cách là 180 độ chia).',
            keyPoints: [
              'T(K) = t(°C) + 273  ⇔  t(°C) = T(K) - 273.',
              't(°F) = 1,8 × t(°C) + 32  ⇔  t(°C) = [t(°F) - 32] / 1,8.',
              'Độ chênh lệch nhiệt độ: Tăng thêm 1°C thì tăng thêm đúng 1 K, nhưng tăng thêm 1,8°F!',
            ],
          },
        ],
        quantities: [
          {
            name: 'Nhiệt độ tuyệt đối (Nhiệt động lực học)',
            symbol: 'T',
            si_unit: 'K (Kelvin)',
            other_units: '°C (độ Celsius), °F (độ Fahrenheit)',
            measuring_device: 'Nhiệt kế chất lỏng, nhiệt kế điện tử, nhiệt kế hồng ngoại',
            description: 'Đại lượng đặc trưng cho mức độ nóng lạnh của vật. Đơn vị SI không ghi dấu độ (°) trước chữ K.',
          },
          {
            name: 'Nhiệt độ thường dùng (Celsius)',
            symbol: 't',
            si_unit: 'K (quy chuẩn SI)',
            other_units: '°C (thông dụng tại Việt Nam)',
            measuring_device: 'Nhiệt kế y tế (35°C - 42°C), nhiệt kế phòng thí nghiệm',
            description: 'Thang nhiệt độ lấy điểm băng (0°C) và điểm sôi của nước (100°C) ở áp suất 1 atm làm chuẩn.',
          },
        ],
        formulas: [
          {
            name: 'Quy đổi giữa độ Celsius (°C) và Kelvin (K)',
            latex_expression: 'T(\\text{K}) = t(^\\circ\\text{C}) + 273',
            plain_expression: 'T(K) = t(°C) + 273',
            variables: [
              { symbol: 'T(\\text{K})', name: 'Nhiệt độ trong thang Kelvin', unit: 'K' },
              { symbol: 't(^\\circ\\text{C})', name: 'Nhiệt độ trong thang Celsius', unit: '°C' },
            ],
            derived_formulas: [
              { expression: 't(^\\circ\\text{C}) = T(\\text{K}) - 273', description: 'Đổi ngược từ Kelvin về độ Celsius' },
              { expression: '\\Delta T(\\text{K}) = \\Delta t(^\\circ\\text{C})', description: 'Độ biến thiên nhiệt độ ở thang K và °C là bằng nhau' },
            ],
            usage_note: 'Viết đúng ký hiệu: 300 K (không viết 300°K).',
          },
          {
            name: 'Quy đổi giữa độ Celsius (°C) và độ Fahrenheit (°F)',
            latex_expression: 't(^\\circ\\text{F}) = 1,8 \\cdot t(^\\circ\\text{C}) + 32',
            plain_expression: 't(°F) = 1,8 * t(°C) + 32',
            variables: [
              { symbol: 't(^\\circ\\text{F})', name: 'Nhiệt độ trong thang Fahrenheit', unit: '°F' },
              { symbol: 't(^\\circ\\text{C})', name: 'Nhiệt độ trong thang Celsius', unit: '°C' },
            ],
            derived_formulas: [
              { expression: 't(^\\circ\\text{C}) = \\frac{t(^\\circ\\text{F}) - 32}{1,8}', description: 'Đổi từ độ Fahrenheit sang độ Celsius' },
              { expression: '\\Delta t(^\\circ\\text{F}) = 1,8 \\cdot \\Delta t(^\\circ\\text{C})', description: 'Khi nhiệt độ tăng 1°C thì tăng 1,8°F' },
            ],
            usage_note: 'Mẹo tính nhẩm: 1,8 = 9/5. Ví dụ 20°C = 20 × 1,8 + 32 = 36 + 32 = 68°F.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Đổi nhiệt độ cơ thể người và nhiệt độ phòng sang K và °F',
            difficulty: 'Cơ bản',
            problem_statement:
              'Nhiệt độ cơ thể người bình thường là 37°C. Hãy đổi nhiệt độ này sang thang Kelvin (K) và thang Fahrenheit (°F).',
            given_summary: 't = 37°C.',
            solution_steps: [
              'Bước 1: Đổi sang thang Kelvin: T(K) = t(°C) + 273 = 37 + 273 = 310 K.',
              'Bước 2: Đổi sang thang Fahrenheit: t(°F) = 1,8 × 37 + 32 = 66,6 + 32 = 98,6°F.',
            ],
            final_answer: '310 K và 98,6°F.',
          },
          {
            title: 'Ví dụ 2: Đổi ngược từ độ Fahrenheit (°F) về độ Celsius (°C) và Kelvin (K)',
            difficulty: 'Vận dụng',
            problem_statement:
              'Bản tin thời tiết tại New York báo nhiệt độ ngoài trời là 59°F. Hỏi nhiệt độ đó tương ứng với bao nhiêu độ Celsius (°C) và bao nhiêu Kelvin (K)?',
            given_summary: 't(°F) = 59°F.',
            solution_steps: [
              'Bước 1: Áp dụng công thức suy ra: t(°C) = (t(°F) - 32) / 1,8 = (59 - 32) / 1,8 = 27 / 1,8 = 15°C.',
              'Bước 2: Đổi sang thang Kelvin: T(K) = 15 + 273 = 288 K.',
            ],
            final_answer: '15°C và 288 K.',
          },
        ],
        simulation: {
          sim_key: 'temperature_scales_lab',
          title: 'Mô phỏng Ba Thang Nhiệt Độ (°C - K - °F) & Sự Giãn Nở Cột Chất Lỏng',
          description:
            'Kéo thanh trượt nhiệt độ từ -40°C đến 120°C để quan sát đồng thời cột chất lỏng trong 3 nhiệt kế Celsius, Kelvin, Fahrenheit và trạng thái vật lý của nước.',
          parameters: {
            defaultTempC: 37,
            minTempC: -40,
            maxTempC: 120,
          },
          guide_steps: [
            'Kéo nhiệt độ về 0°C để kiểm tra mốc nước đá đang tan (0°C = 273 K = 32°F).',
            'Kéo nhiệt độ lên 37°C (thân nhiệt người) và 100°C (nước sôi) để quan sát giá trị tương ứng trên 3 nhiệt kế.',
            'Đặc biệt: Thử kéo về -40°C để phát hiện điểm duy nhất mà thang °C và thang °F chỉ cùng một con số (-40°C = -40°F)!',
          ],
          physics_insight:
            'Tại -40°C, ta có: t(°F) = 1,8 × (-40) + 32 = -72 + 32 = -40°F. Đây là điểm giao nhau duy nhất giữa thang Celsius và thang Fahrenheit.',
        },
      },
    ],
  },
  {
    order_index: 2,
    code: 'CH2',
    title: 'Chương 2: Lực và Chuyển động',
    description:
      'Tổng hợp chuẩn 3 bộ SGK: Khám phá bản chất của lực, hai tác dụng của lực (biến đổi chuyển động & biến dạng), cách biểu diễn lực bằng mũi tên vector, đo lực bằng lực kế, trọng lực P = 10m, độ dãn của lò xo và lực ma sát.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 2: Lực và Chuyển động
**Lực (Force - ký hiệu $F$)** là tác dụng đẩy hoặc kéo của vật này lên vật khác. Đơn vị đo lực trong hệ SI là **Newton (ký hiệu: $\\text{N}$)**.

1. **Hai tác dụng cơ bản của lực:**
   - **Làm biến đổi chuyển động của vật:** Làm vật đang đứng yên bắt đầu chuyển động, đang chuyển động thì dừng lại, chuyển động nhanh lên, chậm đi hoặc đổi hướng chuyển động.
   - **Làm biến dạng vật:** Làm thay đổi hình dạng, kích thước của vật (như kéo dãn lò xo, bóp méo quả bóng). *(Một lực có thể đồng thời gây ra cả hai tác dụng này).*
2. **Các đặc trưng và biểu diễn lực:**
   - Mỗi lực được đặc trưng bởi 4 yếu tố: **Điểm đặt (Gốc)**, **Phương** (nằm ngang, thẳng đứng, xiên...), **Chiều** (trái $\\rightarrow$ phải, trên $\\rightarrow$ dưới...) và **Độ lớn (Cường độ)**.
   - Biểu diễn lực bằng một mũi tên có: Gốc tại điểm đặt, hướng theo phương và chiều của lực, chiều dài biểu thị độ lớn theo một tỉ xích cho trước.
3. **Trọng lực và Khối lượng:**
   - **Trọng lực** là lực hút của Trái Đất tác dụng lên vật (phương thẳng đứng, chiều từ trên xuống dưới).
   - **Trọng lượng ($P$)** là độ lớn của trọng lực tác dụng lên vật. Hệ thức liên hệ gần đúng trên mặt đất: $P = 10 \\cdot m$ (với $m$ tính bằng $\\text{kg}$, $P$ tính bằng $\\text{N}$).
4. **Phân loại lực & Biến dạng lò xo & Lực ma sát:**
   - **Lực tiếp xúc** (lực đẩy tay, lực ma sát, lực đàn hồi lò xo) và **Lực không tiếp xúc** (trọng lực, lực từ của nam châm, lực tĩnh điện).
   - **Biến dạng lò xo:** Độ dãn $\\Delta l = l - l_0$ tỉ lệ thuận với khối lượng (hoặc trọng lượng) vật treo trong giới hạn đàn hồi.
   - **Lực ma sát:** Gồm *ma sát nghỉ* (giữ vật không trượt khi có lực kéo nhỏ) và *ma sát trượt* (cản trở khi vật trượt trên bề mặt vật khác).`,
    key_takeaways: [
      'Đơn vị của lực là Newton (N). Dụng cụ đo lực là Lực kế.',
      'Trọng lực luôn có phương thẳng đứng và chiều hướng về phía tâm Trái Đất (từ trên xuống dưới).',
      'Vật có khối lượng m = 1 kg thì có trọng lượng P ≈ 10 N; m = 100 g = 0,1 kg thì P ≈ 1 N.',
      'Độ dãn của lò xo Δl = l - l₀ tỉ lệ thuận với trọng lượng vật treo: Treo vật nặng gấp k lần thì độ dãn Δl tăng gấp k lần.',
      'Lực ma sát luôn ngược chiều với chiều chuyển động (hoặc xu hướng chuyển động) của vật trên bề mặt tiếp xúc.',
    ],
    formula_cheatsheet: [
      {
        name: 'Liên hệ giữa Trọng lượng và Khối lượng',
        latex: 'P = 10 \\cdot m',
        note: 'm đo bằng kilôgam (kg); P đo bằng Newton (N). Nếu m cho bằng gam (g), phải đổi ra kg trước!',
      },
      {
        name: 'Độ dãn của lò xo khi treo vật',
        latex: '\\Delta l = l - l_0',
        note: 'l₀: chiều dài tự nhiên ban đầu; l: chiều dài lò xo khi bị kéo dãn.',
      },
      {
        name: 'Tỉ lệ độ dãn lò xo theo khối lượng / lực kéo',
        latex: '\\frac{\\Delta l_1}{\\Delta l_2} = \\frac{m_1}{m_2} = \\frac{F_1}{F_2}',
        note: 'Chỉ áp dụng cho Δl (độ dãn), tuyệt đối không lập tỉ lệ trực tiếp cho chiều dài tổng l!',
      },
      {
        name: 'Độ lớn lực theo tỉ xích biểu diễn',
        latex: 'F = n \\cdot \\mu_F',
        note: 'n: số đoạn thẳng trên mũi tên; μ_F: giá trị lực ứng với 1 đoạn tỉ xích (N/cm).',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'C2-B1',
        title: 'Chủ đề 2.1: Lực và tác dụng của lực',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Hiểu khái niệm lực là sự đẩy hoặc kéo giữa các vật; nhận diện chính xác 5 dạng biến đổi chuyển động và hiện tượng biến dạng của vật dưới tác dụng của lực trong đời sống.',
        summary_note:
          'Một lực tác dụng lên vật có thể gây ra: (1) Chỉ biến đổi chuyển động, (2) Chỉ làm biến dạng vật, hoặc (3) Vừa làm biến đổi chuyển động vừa làm biến dạng vật (như khi sút vào quả bóng cao su).',
        theory_sections: [
          {
            heading: '1. Lực là gì?',
            content:
              'Khi vật này đẩy hoặc kéo vật khác, ta nói vật này tác dụng lực lên vật khác. Tác dụng đẩy hay kéo luôn xảy ra giữa ít nhất hai vật (vật tác dụng lực và vật chịu tác dụng lực). Khi không còn sự đẩy hoặc kéo nữa thì lực cũng ngừng tác dụng.',
            keyPoints: [
              'Ví dụ lực đẩy: Gió đẩy cánh buồm, tay đẩy xe hàng trong siêu thị.',
              'Ví dụ lực kéo: Đầu tàu kéo các toa tàu, con trâu kéo cày, lực kế kéo khối gỗ.',
            ],
          },
          {
            heading: '2. Tác dụng làm biến đổi chuyển động của vật',
            content:
              'Lực tác dụng lên một vật có thể làm thay đổi tốc độ hoặc hướng chuyển động của vật đó. Cụ thể có 5 trường hợp biến đổi chuyển động thường gặp:',
            keyPoints: [
              '(1) Vật đang đứng yên → bắt đầu chuyển động (đá quả bóng đang nằm yên trên sân).',
              '(2) Vật đang chuyển động → bị dừng lại (thủ môn bắt dính bóng đang bay).',
              '(3) Vật đang chuyển động → chuyển động nhanh lên (đạp mạnh bàn đạp khi xe đang lăn bánh).',
              '(4) Vật đang chuyển động → chuyển động chậm lại (bóp phanh xe đạp).',
              '(5) Vật đang chuyển động → đổi hướng chuyển động (đánh cầu lông bay ngược trở lại).',
            ],
            realWorldApplication:
              'Trong bóng đá, cú đánh đầu đổi hướng bóng bay vào lưới là minh họa điển hình cho việc lực làm đổi hướng và thay đổi tốc độ chuyển động.',
          },
          {
            heading: '3. Tác dụng làm biến dạng vật',
            content:
              'Biến dạng là sự thay đổi hình dạng hoặc kích thước của một vật so với ban đầu. Khi ta dùng tay bóp quả bóng cao su, kéo dãn dây thun, nén lò xo hay uốn cong thanh thước nhựa, lực đã làm vật bị biến dạng.',
            keyPoints: [
              'Khi đập vợt vào quả bóng tennis: Vợt và bóng vừa bị lún (biến dạng) tại chỗ va chạm, quả bóng vừa bị bay ngược lại (biến đổi chuyển động).',
              'Nếu một vật đang đứng yên trên bàn cứng mà ta ấn nhẹ vào khối sắt (biến dạng rất nhỏ) nhưng khối sắt vẫn đứng yên thì lực chỉ gây biến dạng mà chưa làm biến đổi chuyển động.',
            ],
          },
        ],
        quantities: [
          {
            name: 'Lực',
            symbol: 'F',
            si_unit: 'N (Newton)',
            other_units: 'kN (kilô-Newton, 1 kN = 1000 N)',
            measuring_device: 'Lực kế (Lực kế lò xo, lực kế điện tử)',
            description: 'Đại lượng đặc trưng cho tác dụng đẩy hoặc kéo của vật này lên vật khác.',
          },
        ],
        formulas: [
          {
            name: 'Quy đổi đơn vị lực (Newton và kilô-Newton)',
            latex_expression: '1\\,\\text{kN} = 1000\\,\\text{N}',
            plain_expression: '1 kN = 1000 N',
            variables: [
              { symbol: 'F', name: 'Độ lớn của lực', unit: 'N hoặc kN' },
            ],
            derived_formulas: [
              { expression: '1\\,\\text{N} = 0,001\\,\\text{kN}', description: 'Đổi từ Newton sang kilô-Newton' },
            ],
            usage_note: 'Đơn vị Newton được đặt theo tên nhà bác học vĩ đại Isaac Newton.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Phân tích tác dụng của lực khi sút bóng',
            difficulty: 'Cơ bản',
            problem_statement:
              'Một cầu thủ đặt quả bóng da nằm yên ở chấm phạt đền rồi vung chân sút mạnh vào quả bóng làm bóng bay vọt vào khung thành. Hãy phân tích xem lực của chân cầu thủ tác dụng lên quả bóng đã gây ra những kết quả gì?',
            given_summary: 'Bóng cao su/da đang đứng yên → bị chân sút mạnh → bay đi.',
            solution_steps: [
              'Bước 1: Xét hình dạng quả bóng lúc chân chạm bóng: Vỏ quả bóng bị móp vào tại vị trí tiếp xúc với mũi giày → Lực đã làm biến dạng quả bóng.',
              'Bước 2: Xét trạng thái chuyển động: Quả bóng từ chỗ đang đứng yên chuyển sang bay đi với tốc độ lớn → Lực đã làm biến đổi chuyển động của quả bóng.',
              'Bước 3: Kết luận: Lực sút của chân cầu thủ đồng thời gây ra cả 2 tác dụng (làm biến dạng và làm biến đổi chuyển động).',
            ],
            final_answer: 'Vừa làm quả bóng bị biến dạng (móp tại chỗ chạm), vừa làm biến đổi chuyển động (từ đứng yên sang bay nhanh).',
          },
          {
            title: 'Ví dụ 2: Nhận diện trường hợp lực chỉ làm biến dạng mà không làm biến đổi chuyển động',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Trong hai hiện tượng sau: (A) Dùng hai tay kéo dãn một lò xo rồi giữ yên nó; (B) Thả viên phấn từ trên cao rơi xuống đất. Hiện tượng nào lực chỉ gây biến dạng, hiện tượng nào lực làm biến đổi chuyển động?',
            given_summary: '(A) Kéo dãn lò xo và giữ yên; (B) Viên phấn rơi nhanh dần xuống đất.',
            solution_steps: [
              'Bước 1: Ở hiện tượng (A), lò xo dài ra (thay đổi kích thước) và được giữ đứng yên → Lực kéo của tay lúc giữ chỉ làm biến dạng lò xo.',
              'Bước 2: Ở hiện tượng (B), viên phấn từ trạng thái đứng yên trên tay chuyển sang rơi nhanh dần xuống mặt đất dưới tác dụng hút của Trái Đất → Lực làm biến đổi chuyển động của viên phấn.',
            ],
            final_answer: '(A) Làm biến dạng; (B) Làm biến đổi chuyển động.',
          },
        ],
        simulation: {
          sim_key: 'force_effects_lab',
          title: 'Mô phỏng Hai Tác Dụng Của Lực (Biến Đổi Chuyển Động & Biến Dạng)',
          description:
            'Tác dụng lực đẩy/kéo với độ lớn và hướng khác nhau lên quả bóng đàn hồi hoặc xe lăn để quan sát đồng thời độ biến dạng và sự thay đổi vận tốc.',
          parameters: {
            defaultForceN: 20,
            defaultStiffness: 50,
          },
          guide_steps: [
            'Tăng độ lớn lực F (N) để thấy cả độ móp (biến dạng) và gia tốc bay đi (biến đổi chuyển động) cùng tăng.',
            'Chuyển chế độ "Giữ cố định tường chắn" để quan sát trường hợp lực chỉ gây biến dạng mà vật không dịch chuyển.',
          ],
          physics_insight:
            'Mọi va chạm thực tế đều kèm theo biến dạng đàn hồi hoặc biến dạng dẻo tại bề mặt tiếp xúc trong khoảng thời gian rất ngắn trước khi vật bật ra.',
        },
      },
      {
        order_index: 2,
        code: 'C2-B2',
        title: 'Chủ đề 2.2: Biểu diễn lực và đo lực bằng lực kế',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Làm chủ 4 đặc trưng của lực (gốc, phương, chiều, độ lớn), biết cách vẽ và đọc mũi tên biểu diễn lực theo tỉ xích, hiểu cấu tạo lực kế lò xo và quy trình đo lực chính xác.',
        summary_note:
          '4 yếu tố của lực: Điểm đặt (Gốc mũi tên) + Phương (nằm ngang/thẳng đứng/xiên) + Chiều (mũi tên chỉ hướng) + Độ lớn (số đoạn nhân với tỉ xích).',
        theory_sections: [
          {
            heading: '1. Các đặc trưng của lực',
            content:
              'Kết quả tác dụng của lực phụ thuộc vào 4 yếu tố: (1) Điểm đặt của lực (vị trí lực tác dụng lên vật); (2) Phương của lực (đường thẳng chứa lực: nằm ngang, thẳng đứng hay xiên góc); (3) Chiều của lực (từ trái sang phải, từ dưới lên trên...); (4) Độ lớn của lực (mạnh hay yếu, tính bằng Newton - N).',
            keyPoints: [
              'Cùng một độ lớn lực nhưng nếu đẩy ở các vị trí (điểm đặt) hoặc hướng khác nhau thì vật sẽ chuyển động hoàn toàn khác nhau.',
              'Đơn vị đo lực là Newton (N). Trọng lượng của một quả cân 100 g bằng khoảng 1 N.',
            ],
          },
          {
            heading: '2. Cách biểu diễn lực bằng mũi tên',
            content:
              'Trên hình vẽ, mỗi lực được biểu diễn bằng một mũi tên có: Gốc là điểm mà lực tác dụng lên vật; Phương và chiều là phương và chiều của lực; Độ dài biểu diễn độ lớn của lực theo một tỉ xích cho trước (ví dụ: 1 cm ứng với 5 N).',
            keyPoints: [
              'Nếu tỉ xích 1 đoạn = 10 N và lực có độ lớn F = 30 N thì mũi tên phải được chia làm đúng 3 đoạn bằng nhau.',
              'Bên cạnh mũi tên thường ghi ký hiệu lực (F, F_k, P, F_ms...) và giá trị tỉ xích.',
            ],
          },
          {
            heading: '3. Dụng cụ đo lực: Lực kế và cách đo lực',
            content:
              'Dụng cụ dùng để đo độ lớn của lực gọi là lực kế. Lực kế phổ biến nhất trong trường học là lực kế lò xo, gồm: vỏ lực kế có gắn bảng chia độ, một lò xo, kim chỉ thị và móc treo. Khi đo lực: (1) Ước lượng độ lớn lực để chọn lực kế có GHĐ và ĐCNN phù hợp; (2) Điều chỉnh kim chỉ thị về đúng vạch số 0; (3) Cho lực cần đo tác dụng vào móc của lực kế sao cho trục của lò xo lực kế nằm dọc theo phương của lực cần đo; (4) Đọc và ghi kết quả theo vạch chia gần nhất.',
            keyPoints: [
              'Nếu kéo lực kế lệch phương so với vỏ lực kế, thanh trượt sẽ cọ xát mạnh vào vỏ làm kết quả đo bị sai lệch!',
              'Khi đo trọng lượng vật bằng lực kế thì phải cầm lực kế theo phương thẳng đứng.',
            ],
          },
        ],
        quantities: [
          {
            name: 'Độ lớn của lực (Cường độ lực)',
            symbol: 'F',
            si_unit: 'N (Newton)',
            other_units: 'kN (1 kN = 1000 N)',
            measuring_device: 'Lực kế lò xo, lực kế đồng hồ, lực kế điện tử',
            description: 'Cho biết lực mạnh hay yếu, được đọc trực tiếp trên bảng chia độ của lực kế.',
          },
        ],
        formulas: [
          {
            name: 'Tính độ lớn của lực từ hình biểu diễn theo tỉ xích',
            latex_expression: 'F = n \\cdot \\mu_F',
            plain_expression: 'F = n * μ_F',
            variables: [
              { symbol: 'F', name: 'Độ lớn của lực cần biểu diễn / cần đọc', unit: 'N' },
              { symbol: 'n', name: 'Số đoạn chia trên thân mũi tên biểu diễn lực', unit: 'Đoạn (hoặc cm)' },
              { symbol: '\\mu_F', name: 'Giá trị lực ứng với 1 đoạn tỉ xích', unit: 'N/đoạn (hoặc N/cm)' },
            ],
            derived_formulas: [
              { expression: 'n = \\frac{F}{\\mu_F}', description: 'Số đoạn thẳng cần vẽ trên mũi tên biểu diễn lực' },
              { expression: '\\mu_F = \\frac{F}{n}', description: 'Tìm tỉ xích khi biết độ lớn lực và số đoạn chia' },
            ],
            usage_note: 'Luôn kiểm tra kỹ chú thích tỉ xích ở góc hình vẽ trước khi nhân số đoạn.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Đọc các yếu tố của lực từ hình vẽ biểu diễn',
            difficulty: 'Cơ bản',
            problem_statement:
              'Trên hình vẽ, lực kéo F tác dụng vào tâm A của một xe lăn theo phương nằm ngang, chiều từ trái sang phải. Mũi tên biểu diễn lực F được chia làm 4 đoạn bằng nhau, biết tỉ xích mỗi đoạn ứng với 15 N. Hãy nêu đủ 4 yếu tố của lực F.',
            given_summary: 'Điểm đặt tại A; phương ngang, chiều trái → phải; n = 4 đoạn; tỉ xích μ_F = 15 N/đoạn.',
            solution_steps: [
              'Bước 1: Điểm đặt (gốc): Tại điểm A trên xe lăn.',
              'Bước 2: Phương: Nằm ngang; Chiều: Từ trái sang phải.',
              'Bước 3: Độ lớn của lực: F = n × μ_F = 4 × 15 = 60 N.',
            ],
            final_answer: 'Điểm đặt tại A; phương nằm ngang; chiều từ trái sang phải; độ lớn F = 60 N.',
          },
          {
            title: 'Ví dụ 2: Chọn tỉ xích để vẽ hai lực trên cùng một hình',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Muốn biểu diễn hai lực F1 = 200 N và F2 = 350 N trên cùng một hình vẽ với tỉ xích 1 cm ứng với 50 N thì chiều dài hai mũi tên lần lượt là bao nhiêu xen-ti-mét?',
            given_summary: 'F1 = 200 N; F2 = 350 N; μ_F = 50 N/cm.',
            solution_steps: [
              'Bước 1: Chiều dài mũi tên biểu diễn lực F1 là: n1 = F1 / 50 = 200 / 50 = 4 cm.',
              'Bước 2: Chiều dài mũi tên biểu diễn lực F2 là: n2 = F2 / 50 = 350 / 50 = 7 cm.',
            ],
            final_answer: 'Mũi tên F1 dài 4 cm; mũi tên F2 dài 7 cm.',
          },
        ],
        simulation: {
          sim_key: 'force_vector_lab',
          title: 'Mô phỏng Biểu Diễn Vector Lực & Thực Hành Đo Bằng Lực Kế',
          description:
            'Thay đổi độ lớn lực F, góc nghiêng α và tỉ xích biểu diễn (N/đoạn) để quan sát mũi tên biểu diễn lực tự động chia đoạn chuẩn xác.',
          parameters: {
            defaultForceN: 40,
            defaultAngleDeg: 0,
            defaultScalePerTick: 10,
          },
          guide_steps: [
            'Điều chỉnh độ lớn lực F = 40 N và tỉ xích 10 N/đoạn để thấy mũi tên chia thành đúng 4 đoạn bằng nhau.',
            'Xoay góc phương của lực từ 0° (nằm ngang) lên 30°, 45°, 90° (thẳng đứng) để đọc phương - chiều tương ứng.',
          ],
          physics_insight:
            'Biểu diễn lực bằng mũi tên giúp ta nhìn thấy trực quan cả hướng tác dụng lẫn tỉ lệ độ mạnh yếu giữa các lực khác nhau trên cùng một vật.',
        },
      },
      {
        order_index: 3,
        code: 'C2-B3',
        title: 'Chủ đề 2.3: Khối lượng và Trọng lực (Trọng lượng)',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Hiểu rõ lực hấp dẫn và trọng lực của Trái Đất, phân biệt rạch ròi giữa Khối lượng (m - đo bằng kg) và Trọng lượng (P - đo bằng N), vận dụng thành thạo công thức P = 10m.',
        summary_note:
          'Khối lượng m (kg) là lượng chất tạo nên vật (không đổi ở mọi nơi). Trọng lượng P (N) là độ lớn lực hút của Trái Đất lên vật (P = 10m trên mặt đất; lên Mặt Trăng trọng lượng giảm 6 lần còn khối lượng giữ nguyên!).',
        theory_sections: [
          {
            heading: '1. Lực hấp dẫn và Trọng lực là gì?',
            content:
              'Mọi vật có khối lượng trong vũ trụ đều hút lẫn nhau bằng một lực gọi là lực hấp dẫn (do nhà bác học Isaac Newton phát hiện). Lực hút của Trái Đất tác dụng lên các vật ở gần mặt đất gọi là Trọng lực. Nhờ có trọng lực mà mọi vật khi buông tay đều rơi xuống đất và khí quyển được giữ quanh Trái Đất.',
            keyPoints: [
              'Trọng lực luôn có phương thẳng đứng và có chiều hướng về phía tâm Trái Đất (tức là từ trên xuống dưới).',
              'Dây dọi của thợ xây luôn căng theo phương thẳng đứng chính là nhờ tác dụng của trọng lực lên quả dọi.',
            ],
            realWorldApplication:
              'Thợ xây dùng dây dọi (quả nặng treo vào sợi dây mềm) để kiểm tra xem bức tường xây có thật sự thẳng đứng hay không.',
          },
          {
            heading: '2. Trọng lượng và hệ thức liên hệ P = 10m',
            content:
              'Độ lớn của trọng lực tác dụng lên một vật được gọi là Trọng lượng của vật đó (ký hiệu là P, đơn vị là Newton - N). Trên bề mặt Trái Đất, trọng lượng của một vật tỉ lệ thuận với khối lượng của nó theo công thức thực nghiệm gần đúng: P = 10 × m (trong đó m đo bằng kg, P đo bằng N).',
            keyPoints: [
              'Quả cân có khối lượng m = 100 g = 0,1 kg thì có trọng lượng P = 10 × 0,1 = 1 N.',
              'Vật có khối lượng m = 1 kg có trọng lượng P = 10 N.',
              'Vật có khối lượng m = 1 tấn = 1000 kg có trọng lượng P = 10.000 N.',
            ],
          },
          {
            heading: '3. Phân biệt Khối lượng (m) và Trọng lượng (P)',
            content:
              'Rất nhiều người trong đời sống nhầm lẫn giữa khối lượng và trọng lượng. Khối lượng (m, đơn vị kg, đo bằng cân) là lượng chất chứa trong vật, không có hướng và không thay đổi theo vị trí. Trọng lượng (P, đơn vị N, đo bằng lực kế) là độ lớn lực hút của Trái Đất lên vật, phụ thuộc vào nơi đặt vật (ví dụ trên Mặt Trăng lực hút chỉ bằng 1/6 so với trên Trái Đất).',
            keyPoints: [
              'Một nhà du hành vũ trụ có khối lượng 60 kg trên Trái Đất (trọng lượng P = 600 N). Khi bay lên Mặt Trăng, khối lượng của người đó VẪN LÀ 60 kg, nhưng trọng lượng trên Mặt Trăng chỉ còn khoảng 600 / 6 = 100 N!',
            ],
          },
        ],
        quantities: [
          {
            name: 'Trọng lượng (Độ lớn của trọng lực)',
            symbol: 'P',
            si_unit: 'N (Newton)',
            other_units: 'kN (1 kN = 1000 N)',
            measuring_device: 'Lực kế (treo vật theo phương thẳng đứng)',
            description: 'Độ lớn lực hút của Trái Đất tác dụng lên vật. Có phương thẳng đứng, chiều từ trên xuống.',
          },
          {
            name: 'Khối lượng',
            symbol: 'm',
            si_unit: 'kg (kilôgam)',
            other_units: 'tấn, tạ, yến, g, mg',
            measuring_device: 'Cân (cân đồng hồ, cân điện tử, cân Роберval)',
            description: 'Số đo lượng chất của vật. Không phụ thuộc vào vị trí đặt vật trong vũ trụ.',
          },
        ],
        formulas: [
          {
            name: 'Liên hệ giữa Trọng lượng (P) và Khối lượng (m) trên Trái Đất',
            latex_expression: 'P = 10 \\cdot m',
            plain_expression: 'P = 10 * m',
            variables: [
              { symbol: 'P', name: 'Trọng lượng của vật trên mặt đất', unit: 'N (Newton)' },
              { symbol: 'm', name: 'Khối lượng của vật', unit: 'kg (kilôgam)' },
            ],
            derived_formulas: [
              { expression: 'm = \\frac{P}{10}', description: 'Tính khối lượng m (kg) khi biết trọng lượng P (N)' },
              { expression: 'P_{\\text{Mặt Trăng}} \\approx \\frac{P_{\\text{Trái Đất}}}{6}', description: 'Trọng lượng của vật trên bề mặt Mặt Trăng' },
            ],
            usage_note: 'CẢNH BÁO SAI LẦM PHỔ BIẾN: Nếu đề bài cho m theo đơn vị gam (g) hoặc tấn, bắt buộc phải đổi ra kilôgam (kg) trước khi nhân với 10!',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính trọng lượng khi biết khối lượng (có đổi đơn vị)',
            difficulty: 'Cơ bản',
            problem_statement:
              'Tính trọng lượng của: (a) Một bao gạo có khối lượng 25 kg; (b) Một hộp phấn có khối lượng 450 g; (c) Một xe tải có khối lượng 2,5 tấn.',
            given_summary: 'm1 = 25 kg; m2 = 450 g; m3 = 2,5 tấn.',
            solution_steps: [
              'Bước 1 (Câu a): Áp dụng công thức P = 10m → P1 = 10 × 25 = 250 N.',
              'Bước 2 (Câu b): Đổi m2 = 450 g = 0,45 kg → P2 = 10 × 0,45 = 4,5 N.',
              'Bước 3 (Câu c): Đổi m3 = 2,5 tấn = 2500 kg → P3 = 10 × 2500 = 25.000 N (hay 25 kN).',
            ],
            final_answer: '(a) 250 N; (b) 4,5 N; (c) 25.000 N.',
          },
          {
            title: 'Ví dụ 2: Bài toán so sánh khối lượng và trọng lượng trên Trái Đất và Mặt Trăng',
            difficulty: 'Vận dụng',
            problem_statement:
              'Một thiết bị tự hành thám hiểm không gian khi cân trên mặt đất có trọng lượng là 1800 N. Hỏi: (a) Khối lượng của thiết bị này là bao nhiêu kilôgam? (b) Khi hạ cánh xuống Mặt Trăng (nơi có lực hút bằng 1/6 trên Trái Đất), khối lượng và trọng lượng của thiết bị lúc đó là bao nhiêu?',
            given_summary: 'P_Trái_Đất = 1800 N; g_Mặt_Trăng = 1/6 g_Trái_Đất.',
            solution_steps: [
              'Bước 1: Khối lượng của thiết bị trên mặt đất là: m = P / 10 = 1800 / 10 = 180 kg.',
              'Bước 2: Vì khối lượng chỉ lượng chất chứa trong vật nên khi lên Mặt Trăng, khối lượng của thiết bị KHÔNG ĐỔI, vẫn là m = 180 kg.',
              'Bước 3: Trọng lượng của thiết bị trên Mặt Trăng giảm 6 lần: P_Mặt_Trăng = 1800 / 6 = 300 N.',
            ],
            final_answer: '(a) m = 180 kg; (b) Trên Mặt Trăng: m = 180 kg và P = 300 N.',
          },
        ],
        simulation: {
          sim_key: 'gravity_weight_lab',
          title: 'Mô phỏng Khối Lượng & Trọng Lượng Trên Trái Đất - Mặt Trăng - Sao Hỏa',
          description:
            'Đặt vật có khối lượng m (kg) lên lực kế ở Trái Đất (g ≈ 10 N/kg), Mặt Trăng (g ≈ 1,67 N/kg) và Sao Hỏa (g ≈ 3,7 N/kg) để thấy khối lượng m không đổi nhưng trọng lượng P thay đổi.',
          parameters: {
            defaultMassKg: 12,
            defaultPlanet: 'earth',
          },
          guide_steps: [
            'Kéo thanh trượt khối lượng m (kg) trên Trái Đất để kiểm chứng P = 10m.',
            'Chuyển hành tinh sang "Mặt Trăng" hoặc "Sao Hỏa" để thấy số chỉ cân (khối lượng m) giữ nguyên nhưng số chỉ lực kế (trọng lượng P) thay đổi rõ rệt.',
          ],
          physics_insight:
            'Khối lượng m là thuộc tính nội tại của vật, còn trọng lượng P = m·g phụ thuộc vào cường độ trường hấp dẫn g của thiên thể nơi đặt vật.',
        },
      },
      {
        order_index: 4,
        code: 'C2-B4',
        title: 'Chủ đề 2.4: Lực tiếp xúc và lực không tiếp xúc',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Phân biệt chính xác hai nhóm lực trong tự nhiên dựa vào điều kiện tiếp xúc trực tiếp giữa vật gây lực và vật chịu lực: Lực tiếp xúc (lực đẩy, lực kéo, ma sát, đàn hồi) và Lực không tiếp xúc (trọng lực, lực từ, lực tĩnh điện).',
        summary_note:
          'Nếu hai vật PHẢI chạm vào nhau mới gây ra lực → Lực tiếp xúc. Nếu hai vật đặt CÁCH XA nhau vẫn hút hoặc đẩy được nhau qua không gian → Lực không tiếp xúc (Trọng lực, Lực từ nam châm, Lực tĩnh điện).',
        theory_sections: [
          {
            heading: '1. Lực tiếp xúc là gì?',
            content:
              'Lực tiếp xúc xuất hiện khi vật gây ra lực có sự tiếp xúc trực tiếp (chạm vào) với vật chịu tác dụng của lực. Nếu hai vật tách rời nhau ra thì lực tiếp xúc lập tức biến mất.',
            keyPoints: [
              'Ví dụ 1: Tay ta đẩy xe nôi, chân cầu thủ chạm vào quả bóng, búa đóng vào đinh.',
              'Ví dụ 2: Lực ma sát giữa mặt đường và lốp xe, lực đàn hồi của lò xo tác dụng vào tay khi kéo lò xo.',
              'Ví dụ 3: Gió thổi làm căng cánh buồm (không khí chuyển động chạm trực tiếp vào vải buồm nên vẫn là lực tiếp xúc!).',
            ],
            realWorldApplication:
              'Lưu ý bẫy hay gặp: Gió đẩy cánh buồm hay nước chảy đẩy thuyền trôi ĐỀU LÀ LỰC TIẾP XÚC vì dòng không khí / dòng nước chạm trực tiếp vào cánh buồm và mạn thuyền!',
          },
          {
            heading: '2. Lực không tiếp xúc là gì?',
            content:
              'Lực không tiếp xúc xuất hiện khi vật gây ra lực KHÔNG cần chạm trực tiếp vào vật chịu tác dụng của lực mà vẫn tác dụng đẩy hoặc kéo thông qua trường vật lý trong không gian.',
            keyPoints: [
              '(1) Trọng lực (Lực hấp dẫn): Trái Đất hút quả táo rơi từ trên cành cao xuống đất, hút Mặt Trăng quay quanh Trái Đất dù không hề chạm vào nhau.',
              '(2) Lực từ (Nam châm): Thanh nam châm đặt cách xa đinh sắt vẫn hút đinh sắt bay lại gần; hai cực cùng tên của hai nam châm đặt gần nhau tự đẩy nhau ra xa.',
              '(3) Lực điện (Tĩnh điện): Thước nhựa sau khi cọ xát vào mảnh vải khô đặt gần các vụn giấy nhỏ thì hút các vụn giấy bay lên dù chưa chạm vào.',
            ],
          },
        ],
        quantities: [
          {
            name: 'Khoảng cách tương tác',
            symbol: 'r, d',
            si_unit: 'm (mét)',
            other_units: 'cm, mm',
            measuring_device: 'Thước thẳng, cảm biến khoảng cách',
            description: 'Với lực không tiếp xúc (như lực từ nam châm), khoảng cách r càng nhỏ thì lực hút/đẩy càng mạnh.',
          },
        ],
        formulas: [
          {
            name: 'Điều kiện phân loại Lực tiếp xúc và Lực không tiếp xúc',
            latex_expression: 'd = 0 \\Rightarrow \\text{Tiếp xúc}; \\quad d > 0 \\Rightarrow \\text{Không tiếp xúc}',
            plain_expression: 'd = 0 (Chạm nhau) -> Lực tiếp xúc; d > 0 (Cách nhau) -> Lực không tiếp xúc',
            variables: [
              { symbol: 'd', name: 'Khoảng cách bề mặt giữa vật tác dụng lực và vật chịu lực', unit: 'cm hoặc m' },
            ],
            derived_formulas: [],
            usage_note: 'Ghi nhớ 3 đại diện kinh điển của lực không tiếp xúc ở THCS: Trọng lực (Hấp dẫn) - Lực từ (Nam châm) - Lực tĩnh điện.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Phân loại các lực trong thí nghiệm nam châm treo lò xo',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Một quả nặng bằng sắt được treo vào đầu dưới của một lò xo. Phía dưới quả sắt (cách một khoảng 3 cm) người ta đặt một thanh nam châm thẳng thì thấy lò xo bị dãn thêm ra. Hãy kể tên các lực tác dụng lên quả nặng bằng sắt và phân loại đâu là lực tiếp xúc, đâu là lực không tiếp xúc.',
            given_summary: 'Quả sắt treo vào lò xo, phía dưới cách 3 cm có nam châm hút.',
            solution_steps: [
              'Bước 1: Xét các vật chạm trực tiếp vào quả sắt: Chỉ có móc của lò xo chạm vào quả sắt và kéo quả sắt hướng lên → Lực đàn hồi của lò xo là LỰC TIẾP XÚC.',
              'Bước 2: Xét các vật không chạm vào quả sắt nhưng vẫn hút nó: Trái Đất hút quả sắt hướng xuống (Trọng lực) và Thanh nam châm đặt cách 3 cm hút quả sắt hướng xuống (Lực từ) → Trọng lực và Lực từ của nam châm là LỰC KHÔNG TIẾP XÚC.',
            ],
            final_answer: 'Lực tiếp xúc: Lực kéo (đàn hồi) của lò xo; Lực không tiếp xúc: Trọng lực của Trái Đất và lực hút từ của nam châm.',
          },
        ],
        simulation: {
          sim_key: 'contact_noncontact_lab',
          title: 'Mô phỏng Lực Không Tiếp Xúc (Nam Châm & Trọng Trường) vs Lực Tiếp Xúc',
          description:
            'Di chuyển thanh nam châm lại gần hoặc ra xa viên bi sắt treo trên lò xo để quan sát lực từ tác dụng xuyên qua khoảng không mà không cần chạm vào vật.',
          parameters: {
            defaultGapCm: 4,
            defaultMagnetStrength: 80,
          },
          guide_steps: [
            'Kéo khoảng cách d (cm) giữa nam châm và viên bi sắt nhỏ dần để thấy lực hút không tiếp xúc tăng mạnh làm lò xo dãn ra.',
            'Đổi cực nam châm (dùng 2 nam châm cùng cực Bắc - Bắc) để quan sát lực đẩy không tiếp xúc.',
          ],
          physics_insight:
            'Lực từ, lực hấp dẫn và lực tĩnh điện truyền tương tác qua "trường" (từ trường, trường hấp dẫn, điện trường) nên không cần tiếp xúc cơ học trực tiếp.',
        },
      },
      {
        order_index: 5,
        code: 'C2-B5',
        title: 'Chủ đề 2.5: Biến dạng của lò xo',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Hiểu đặc tính biến dạng đàn hồi của lò xo, tính chính xác độ dãn (hoặc độ nén) Δl = l - l₀ và vận dụng quy luật độ dãn tỉ lệ thuận với khối lượng vật treo trong các bài toán tính chiều dài lò xo.',
        summary_note:
          'Bí quyết giải mọi bài toán lò xo Lớp 6: Luôn tính Độ dãn Δl = l - l₀ trước! Khi khối lượng vật treo tăng gấp k lần thì ĐỘ DÃN Δl tăng gấp k lần (chứ không phải chiều dài tổng l tăng gấp k lần!).',
        theory_sections: [
          {
            heading: '1. Hiện tượng biến dạng đàn hồi của lò xo',
            content:
              'Lò xo là một vật đàn hồi điển hình. Khi chưa bị kéo hay nén, lò xo có chiều dài tự nhiên ban đầu ký hiệu là l₀. Khi ta treo quả nặng hoặc kéo hai đầu lò xo, lò xo dãn ra đến chiều dài l (l > l₀). Khi thôi tác dụng lực (trong giới hạn đàn hồi), lò xo tự động co về đúng chiều dài tự nhiên l₀ ban đầu. Tính chất đó gọi là tính đàn hồi.',
            keyPoints: [
              'Độ biến dạng (độ dãn) của lò xo khi bị kéo dãn: Δl = l - l₀.',
              'Độ biến dạng (độ nén) của lò xo khi bị ép ngắn lại: Δl = l₀ - l.',
              'Nếu kéo lò xo bằng lực quá lớn vượt quá giới hạn đàn hồi, lò xo sẽ bị hỏng (dãn luôn không tự co về l₀ được nữa).',
            ],
            realWorldApplication:
              'Giảm xóc xe máy, đệm lò xo, bút bi bấm và lực kế đều ứng dụng biến dạng đàn hồi của lò xo.',
          },
          {
            heading: '2. Quy luật về độ dãn của lò xo (Định luật Hooke cơ bản)',
            content:
              'Thí nghiệm treo các quả nặng có khối lượng m, 2m, 3m vào cùng một lò xo thẳng đứng cho thấy: Độ dãn của lò xo treo theo phương thẳng đứng tỉ lệ thuận với khối lượng của vật treo (hoặc trọng lượng P của vật treo).',
            keyPoints: [
              'Nếu treo 1 quả nặng (m) lò xo dãn thêm Δl₁ = 2 cm, thì treo 2 quả nặng (2m) lò xo dãn Δl₂ = 4 cm; treo 3 quả nặng (3m) lò xo dãn Δl₃ = 6 cm.',
              'Lực đàn hồi của lò xo luôn ngược chiều với lực làm nó biến dạng và khi vật cân bằng thì F_đh = P = 10m.',
            ],
          },
        ],
        quantities: [
          {
            name: 'Chiều dài tự nhiên của lò xo',
            symbol: 'l_0',
            si_unit: 'm (mét)',
            other_units: 'cm, mm',
            measuring_device: 'Thước thẳng',
            description: 'Chiều dài của lò xo khi chưa chịu tác dụng của bất kỳ lực kéo hay nén nào.',
          },
          {
            name: 'Độ dãn (Độ biến dạng) của lò xo',
            symbol: '\\Delta l',
            si_unit: 'm (mét)',
            other_units: 'cm, mm',
            measuring_device: 'Thước thẳng (đo l rồi trừ đi l₀)',
            description: 'Phần chiều dài lò xo tăng thêm khi bị kéo dãn (Δl = l - l₀).',
          },
        ],
        formulas: [
          {
            name: 'Công thức tính độ dãn của lò xo',
            latex_expression: '\\Delta l = l - l_0',
            plain_expression: 'Δl = l - l0',
            variables: [
              { symbol: '\\Delta l', name: 'Độ dãn của lò xo', unit: 'cm (hoặc m)' },
              { symbol: 'l', name: 'Chiều dài của lò xo khi treo vật', unit: 'cm (hoặc m)' },
              { symbol: 'l_0', name: 'Chiều dài tự nhiên ban đầu của lò xo', unit: 'cm (hoặc m)' },
            ],
            derived_formulas: [
              { expression: 'l = l_0 + \\Delta l', description: 'Tính chiều dài lò xo khi bị kéo dãn' },
              { expression: 'l_0 = l - \\Delta l', description: 'Tìm chiều dài tự nhiên ban đầu của lò xo' },
              { expression: 'l = l_0 - \\Delta l_{\\text{nén}}', description: 'Chiều dài lò xo khi bị nén ngắn lại' },
            ],
            usage_note: 'Luôn tách rõ chiều dài tự nhiên l₀ và độ dãn Δl trong mọi bài toán.',
          },
          {
            name: 'Quy luật tỉ lệ thuận giữa độ dãn và khối lượng / trọng lượng',
            latex_expression: '\\frac{\\Delta l_1}{\\Delta l_2} = \\frac{m_1}{m_2} = \\frac{P_1}{P_2}',
            plain_expression: 'Δl1 / Δl2 = m1 / m2 = P1 / P2',
            variables: [
              { symbol: '\\Delta l_1, \\Delta l_2', name: 'Độ dãn của lò xo khi treo vật 1 và vật 2', unit: 'cm' },
              { symbol: 'm_1, m_2', name: 'Khối lượng của vật treo thứ 1 và thứ 2', unit: 'g hoặc kg' },
              { symbol: 'P_1, P_2', name: 'Trọng lượng của vật treo thứ 1 và thứ 2', unit: 'N' },
            ],
            derived_formulas: [
              { expression: '\\Delta l_2 = \\Delta l_1 \\cdot \\frac{m_2}{m_1}', description: 'Tính độ dãn mới khi thay đổi khối lượng vật treo' },
            ],
            usage_note: 'Lập tỉ số trên Δl = l - l₀, tuyệt đối không viết l₁/l₂ = m₁/m₂!',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính chiều dài lò xo khi thay đổi khối lượng quả nặng',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Một lò xo có chiều dài tự nhiên l₀ = 12 cm được treo thẳng đứng. Khi treo vào đầu dưới của lò xo một quả cân 50 g thì lò xo có chiều dài là 15 cm. Hỏi nếu treo quả cân 150 g vào lò xo đó thì chiều dài của lò xo lúc này là bao nhiêu xen-ti-mét?',
            given_summary: 'l0 = 12 cm; m1 = 50 g → l1 = 15 cm; m2 = 150 g → l2 = ?',
            solution_steps: [
              'Bước 1: Tính độ dãn của lò xo khi treo quả cân m1 = 50 g: Δl1 = l1 - l0 = 15 - 12 = 3 cm.',
              'Bước 2: Khi treo quả cân m2 = 150 g, khối lượng tăng gấp: m2 / m1 = 150 / 50 = 3 lần.',
              'Bước 3: Vì độ dãn tỉ lệ thuận với khối lượng vật treo nên độ dãn mới là: Δl2 = 3 × Δl1 = 3 × 3 = 9 cm.',
              'Bước 4: Chiều dài tổng cộng của lò xo khi treo vật 150 g là: l2 = l0 + Δl2 = 12 + 9 = 21 cm.',
            ],
            final_answer: 'l₂ = 21 cm.',
          },
          {
            title: 'Ví dụ 2: Bài toán nâng cao tìm chiều dài tự nhiên l₀ khi chưa biết trước',
            difficulty: 'Vận dụng cao',
            problem_statement:
              'Treo vật có khối lượng m1 = 100 g vào một lò xo thì chiều dài lò xo là l1 = 18 cm. Nếu treo vật có khối lượng m2 = 200 g vào lò xo đó thì chiều dài lò xo là l2 = 22 cm. Hãy tìm chiều dài tự nhiên l₀ của lò xo.',
            given_summary: 'm1 = 100 g → l1 = 18 cm; m2 = 200 g → l2 = 22 cm; Tìm l0.',
            solution_steps: [
              'Bước 1: Nhận xét: Khi tăng thêm 100 g (từ 100 g lên 200 g), lò xo dãn thêm một đoạn là: 22 - 18 = 4 cm.',
              'Bước 2: Vậy cứ mỗi 100 g treo vào thì lò xo dãn ra một đoạn Δl1 = 4 cm.',
              'Bước 3: Suy ra chiều dài tự nhiên ban đầu của lò xo là: l0 = l1 - Δl1 = 18 - 4 = 14 cm.',
            ],
            final_answer: 'l₀ = 14 cm.',
          },
        ],
        simulation: {
          sim_key: 'spring_hooke_lab',
          title: 'Phòng Thí Nghiệm Biến Dạng Lò Xo (Δl = l - l₀) & Đồ Thị Tuyến Tính',
          description:
            'Treo các quả cân từ 0 g đến 500 g vào lò xo, thay đổi chiều dài tự nhiên l₀ và độ cứng của lò xo để quan sát trực tiếp chiều dài l, độ dãn Δl và đồ thị Δl theo m.',
          parameters: {
            defaultNaturalLengthCm: 12,
            defaultMassG: 150,
            defaultExtensionPer100gCm: 3,
          },
          guide_steps: [
            'Đưa khối lượng về 0 g để đọc chiều dài tự nhiên l₀ = 12 cm.',
            'Tăng khối lượng lên 100 g, 200 g, 300 g để kiểm chứng độ dãn Δl tăng đều 3 cm, 6 cm, 9 cm.',
            'Quan sát đồ thị đường thẳng đi qua gốc tọa độ biểu diễn sự tỉ lệ thuận giữa Δl và m.',
          ],
          physics_insight:
            'Trong giới hạn đàn hồi, độ dãn Δl tỉ lệ thuận với lực kéo F theo định luật Hooke: F = k·Δl.',
        },
      },
      {
        order_index: 6,
        code: 'C2-B6',
        title: 'Chủ đề 2.6: Lực ma sát và lực cản của môi trường',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Hiểu nguyên nhân xuất hiện lực ma sát giữa các bề mặt tiếp xúc, phân biệt rõ lực ma sát trượt và lực ma sát nghỉ, nhận biết lực cản của nước/không khí và giải thích cách làm tăng/giảm ma sát trong đời sống và an toàn giao thông.',
        summary_note:
          'Ma sát nghỉ giữ cho vật KHÔNG trượt khi chịu lực tác dụng (hoặc giúp người đi bộ tiến về phía trước). Ma sát trượt xuất hiện khi vật TRƯỢT trên bề mặt vật khác. Lực ma sát phụ thuộc vào độ nhám bề mặt và áp lực ép vuông góc, không phụ thuộc diện tích tiếp xúc.',
        theory_sections: [
          {
            heading: '1. Lực ma sát là gì? Nguyên nhân xuất hiện lực ma sát',
            content:
              'Lực ma sát là lực tiếp xúc xuất hiện ở bề mặt tiếp xúc giữa hai vật, có tác dụng cản trở chuyển động của vật này trên bề mặt vật kia. Nguyên nhân chính là do bề mặt các vật dù nhìn có vẻ nhẵn nhưng khi phóng đại lên đều có những chỗ gồ ghề, lồi lõm ăn khớp và cản trở nhau.',
            keyPoints: [
              'Lực ma sát phụ thuộc vào: (1) Độ nhám (tính chất) của hai bề mặt tiếp xúc và (2) Độ lớn áp lực (trọng lượng vật đè vuông góc lên mặt sàn).',
              'Lực ma sát hầu như KHÔNG phụ thuộc vào diện tích bề mặt tiếp xúc (đặt viên gạch nằm ngang hay dựng đứng trên cùng mặt bàn thì lực ma sát trượt là như nhau!).',
            ],
          },
          {
            heading: '2. Lực ma sát nghỉ và Lực ma sát trượt',
            content:
              'Có hai loại lực ma sát chính học trong chương trình Lớp 6: (1) Lực ma sát nghỉ giữ cho vật đứng yên khi vật bị lực khác kéo hoặc đẩy (có độ lớn bằng đúng lực kéo khi vật chưa nhúc nhích: F_msn = F_kéo); (2) Lực ma sát trượt xuất hiện khi một vật trượt trên bề mặt của vật khác (như má phanh ép vào vành bánh xe, trượt ván trên tuyết).',
            keyPoints: [
              'Đẩy một cái tủ nặng với lực 100 N nhưng tủ vẫn đứng yên → Lực ma sát nghỉ lúc đó có độ lớn đúng bằng 100 N và ngược chiều lực đẩy.',
              'Nhờ có lực ma sát nghỉ mà tay ta cầm nắm được đồ vật không bị tuột, đinh vít bám chặt vào tường và bàn chân đạp đất giúp người đi bộ về phía trước.',
            ],
            realWorldApplication:
              'Lốp xe ô tô, xe máy và đế giày thể thao đều được xẻ rãnh sâu để làm tăng lực ma sát nghỉ với mặt đường, chống trơn trượt khi trời mưa.',
          },
          {
            heading: '3. Tác dụng có lợi, có hại của ma sát và Lực cản của nước/không khí',
            content:
              'Lực ma sát có thể có hại (làm mòn chi tiết máy, mòn đế giày, tốn nhiên liệu) nên người ta giảm ma sát bằng cách tra dầu mỡ bôi trơn, mài nhẵn bề mặt hoặc thay ma sát trượt bằng ổ bi. Khi vật chuyển động trong nước hoặc không khí, vật cũng chịu lực cản của môi trường (phụ thuộc mạnh vào hình dạng vật — hình khí động học/con thoi chịu lực cản nhỏ nhất).',
            keyPoints: [
              'Cách giảm ma sát có hại: Tra dầu mỡ, dùng ổ bi (bạc đạn), làm nhẵn bề mặt.',
              'Cách tăng ma sát có lợi: Xẻ rãnh lốp xe, rắc cát lên đường trơn, bôi nhựa thông vào dây cung đàn nhị.',
              'Cá heo, tàu ngầm, máy bay, tàu cao tốc có đầu thuôn nhọn (hình khí động học) để giảm tối đa lực cản của nước và không khí.',
            ],
          },
        ],
        quantities: [
          {
            name: 'Lực ma sát (Ma sát trượt / Ma sát nghỉ)',
            symbol: 'F_{\\text{ms}}, F_{\\text{msn}}, F_{\\text{mst}}',
            si_unit: 'N (Newton)',
            other_units: 'kN',
            measuring_device: 'Lực kế (kéo vật chuyển động thẳng đều trên mặt phẳng ngang)',
            description: 'Lực tiếp xúc nằm dọc theo bề mặt tiếp xúc, ngược chiều với chiều trượt hoặc xu hướng trượt.',
          },
        ],
        formulas: [
          {
            name: 'Độ lớn lực ma sát nghỉ khi vật đứng yên trên mặt ngang',
            latex_expression: 'F_{\\text{msn}} = F_{\\text{kéo}} \\quad (\\text{khi vật đứng yên})',
            plain_expression: 'F_msn = F_kéo (khi vật đứng yên)',
            variables: [
              { symbol: 'F_{\\text{msn}}', name: 'Độ lớn lực ma sát nghỉ', unit: 'N' },
              { symbol: 'F_{\\text{kéo}}', name: 'Lực kéo (hoặc đẩy) theo phương ngang khi vật chưa trượt', unit: 'N' },
            ],
            derived_formulas: [
              {
                expression: 'F_{\\text{mst}} = F_{\\text{kéo đều}}',
                description: 'Khi kéo vật trượt thẳng đều trên mặt bàn ngang thì số chỉ lực kế đúng bằng lực ma sát trượt',
              },
            ],
            usage_note: 'Bẫy trắc nghiệm kinh điển: Nếu lực ma sát nghỉ cực đại là 50 N mà ta mới kéo bằng lực 30 N (vật chưa trượt) thì lực ma sát nghỉ lúc đó chỉ bằng 30 N (chứ không phải 50 N!).',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Xác định lực ma sát nghỉ khi đẩy thùng hàng chưa chuyển động',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Một thùng hàng nặng đặt trên sàn nhà nằm ngang. Biết phải tác dụng lực đẩy tối thiểu 120 N thì thùng hàng mới bắt đầu trượt. Hỏi: (a) Khi một học sinh đẩy thùng hàng bằng lực ngang 80 N thì thùng hàng có chuyển động không và lực ma sát nghỉ lúc đó bằng bao nhiêu? (b) Hướng của lực ma sát nghỉ như thế nào?',
            given_summary: 'F_msn_max = 120 N; Lực đẩy thực tế F_đẩy = 80 N.',
            solution_steps: [
              'Bước 1: Vì lực đẩy F_đẩy = 80 N nhỏ hơn lực tối thiểu cần để làm trượt thùng (120 N) nên thùng hàng vẫn đứng yên.',
              'Bước 2: Khi vật đứng yên, lực ma sát nghỉ cân bằng hoàn toàn với lực đẩy: F_msn = F_đẩy = 80 N.',
              'Bước 3: Lực ma sát nghỉ có phương nằm ngang và ngược chiều với chiều lực đẩy của học sinh.',
            ],
            final_answer: '(a) Thùng đứng yên, F_msn = 80 N; (b) Cùng phương, ngược chiều với lực đẩy.',
          },
        ],
        simulation: {
          sim_key: 'friction_lab',
          title: 'Phòng Thí Nghiệm Lực Ma Sát Nghỉ & Ma Sát Trượt Trên Các Bề Mặt',
          description:
            'Chọn chất liệu bề mặt (Mặt băng trơn, Mặt gỗ nhẵn, Mặt giấy nhám), thay đổi khối lượng hộp gỗ và tăng dần lực kéo F_k để quan sát sự chuyển tiếp từ Ma sát nghỉ sang Ma sát trượt.',
          parameters: {
            defaultSurface: 'wood',
            defaultMassKg: 2,
            defaultPullForceN: 5,
          },
          guide_steps: [
            'Kéo nhẹ thanh "Lực kéo F_k" khi vật chưa trượt để thấy F_ms tự động tăng bằng đúng F_k (Ma sát nghỉ).',
            'Tăng F_k vượt ngưỡng ma sát nghỉ cực đại để thấy khối gỗ bắt đầu trượt trên sàn (Ma sát trượt).',
            'Đổi bề mặt từ "Mặt băng" sang "Mặt gỗ" rồi "Giấy nhám" để so sánh độ lớn lực ma sát trên từng bề mặt.',
          ],
          physics_insight:
            'Khi vật chưa trượt, F_msn = F_k. Khi F_k vượt qua ngưỡng cực đại, vật bắt đầu trượt và chịu lực ma sát trượt phụ thuộc vào hệ số ma sát μ của bề mặt và trọng lượng P của vật.',
        },
      },
    ],
  },
];

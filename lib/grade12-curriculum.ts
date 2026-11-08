import { SeedChapterData } from './grade6-curriculum';

export const GRADE_12_CHAPTERS: SeedChapterData[] = [
  {
    order_index: 1,
    code: 'G12-CH1',
    title: 'Chương 1: Vật lý Nhiệt',
    description:
      'Tổng hợp chuẩn 3 bộ SGK GDPT 2018 (Kết nối tri thức, Chân trời sáng tạo, Cánh Diều): Cấu tạo chất theo mô hình động học phân tử, nhiệt độ và các thang đo (Celsius, Kelvin, Fahrenheit), nội năng và hai cách làm biến đổi nội năng, Định luật I Nhiệt động lực học, nhiệt dung riêng, nhiệt nóng chảy riêng, nhiệt hóa hơi riêng và các bài toán cân bằng nhiệt thực tế.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 1: Vật lý Nhiệt
1. **Mô hình động học phân tử và Cấu tạo chất:**
   - Các chất được cấu tạo từ các hạt riêng biệt là phân tử (hoặc nguyên tử, ion).
   - Các phân tử chuyển động hỗn loạn không ngừng, chuyển động này càng nhanh thì nhiệt độ của vật càng cao (chuyển động nhiệt).
   - Giữa các phân tử đồng thời có cả lực hút và lực đẩy phân tử. Độ lớn tương đối của lực liên kết phân tử quyết định trạng thái tồn tại:
     - **Thể rắn:** Các phân tử ở rất gần nhau, liên kết rất mạnh, chỉ dao động quanh vị trí cân bằng cố định. Thể rắn có thể tích và hình dạng xác định.
     - **Thể lỏng:** Lực liên kết yếu hơn thể rắn, các phân tử dao động quanh các vị trí cân bằng tạm thời có thể dịch chuyển được. Thể lỏng có thể tích xác định nhưng không có hình dạng riêng mà lấy hình dạng của bình chứa.
     - **Thể khí:** Các phân tử ở rất xa nhau (khoảng cách gấp hàng chục lần kích thước phân tử), lực liên kết phân tử rất yếu (coi như không đáng kể trừ khi va chạm), chuyển động hoàn toàn hỗn loạn tự do. Thể khí không có hình dạng và thể tích xác định, luôn chiếm toàn bộ thể tích bình chứa.
2. **Nhiệt độ và Thang nhiệt độ tuyệt đối:**
   - Nhiệt độ là số đo động năng tịnh tiến trung bình của các phân tử cấu tạo nên vật.
   - Thang nhiệt độ Celsius ($^\\circ\\text{C}$): Chọn điểm đóng băng của nước tinh khiết ở áp suất tiêu chuẩn là $0^\\circ\\text{C}$ và điểm sôi là $100^\\circ\\text{C}$.
   - Thang nhiệt độ nhiệt động lực học (Kelvin - $\\text{K}$): Thang đo tuyệt đối có điểm gốc $0\\,\\text{K}$ là độ không tuyệt đối (nhiệt độ mà tại đó mọi chuyển động nhiệt của các hạt dừng lại).
   - Công thức chuyển đổi: $T(\\text{K}) = t(^\\circ\\text{C}) + 273,15$ (trong tính toán phổ thông thường lấy $T = t + 273$).
   - Độ biến thiên nhiệt độ: $\\Delta T(\\text{K}) = \\Delta t(^\\circ\\text{C})$.
3. **Nội năng và Định luật I Nhiệt động lực học:**
   - **Nội năng ($U$):** Tổng động năng của các phân tử do chuyển động nhiệt hỗn loạn và thế năng tương tác giữa các phân tử cấu tạo nên hệ.
   - Nội năng của một lượng khí lý tưởng chỉ phụ thuộc vào nhiệt độ ($U = U(T)$). Với khí thực và chất rắn, chất lỏng, nội năng phụ thuộc cả nhiệt độ và thể tích ($U = U(T, V)$).
   - Hai cách làm biến đổi nội năng: **Thực hiện công ($A$)** và **Truyền nhiệt ($Q$)**.
   - **Định luật I Nhiệt động lực học:** Độ biến thiên nội năng của một hệ bằng tổng công và nhiệt lượng mà hệ nhận được:
     $$\\Delta U = A + Q$$
   - **Quy ước dấu:**
     - $Q > 0$: Hệ **nhận** nhiệt lượng; $Q < 0$: Hệ **truyền** (tỏa) nhiệt lượng.
     - $A > 0$: Hệ **nhận** công (ngoại lực nén hệ); $A < 0$: Hệ **thực hiện (sinh)** công lên môi trường ngoài (hệ giãn nở đẩy pít-tông).
4. **Nhiệt lượng và Các nhiệt lượng đặc trưng:**
   - Nhiệt lượng cần thiết để làm thay đổi nhiệt độ vật: $Q = m c \\Delta T$.
   - Nhiệt lượng làm nóng chảy vật rắn ở nhiệt độ nóng chảy: $Q_{nc} = \\lambda m$ (với $\\lambda$ là nhiệt nóng chảy riêng, $\\text{J/kg}$).
   - Nhiệt lượng làm hóa hơi chất lỏng ở nhiệt độ sôi: $Q_{hh} = L m$ (với $L$ là nhiệt hóa hơi riêng, $\\text{J/kg}$).
   - Phương trình cân bằng nhiệt trong hệ cô lập: $\\sum Q_{\\text{thu}} = \\sum Q_{\\text{tỏa}}$ hay $\\sum Q = 0$.`,
    key_takeaways: [
      'Độ biến thiên nhiệt độ trong thang Kelvin bằng đúng độ biến thiên trong thang Celsius: ΔT(K) = Δt(°C).',
      'Định luật I NĐLH: ΔU = A + Q. Luôn tuân thủ quy ước dấu: Nhận là DƯƠNG (> 0), Truyền hoặc Sinh ra là ÂM (< 0).',
      'Trong quá trình chuyển thể (nóng chảy, đông đặc, sôi, ngưng tụ) của chất nguyên chất ở áp suất không đổi, nhiệt độ của chất KHÔNG ĐỔI.',
      'Nhiệt dung riêng c đặc trưng cho khả năng tích trữ nhiệt của chất; nước có nhiệt dung riêng rất lớn (4180 J/(kg·K)) nên đóng vai trò điều hòa khí hậu và làm mát máy móc.',
      'Hiệu suất trao đổi nhiệt thực tế: H = Q_có ích / Q_toàn phần <= 100%.',
    ],
    formula_cheatsheet: [
      {
        name: 'Chuyển đổi thang nhiệt độ Celsius và Kelvin',
        latex: 'T(\\text{K}) = t(^\\circ\\text{C}) + 273,15 \\quad \\Rightarrow \\quad \\Delta T = \\Delta t',
        note: '0 K là độ không tuyệt đối; không có nhiệt độ nào thấp hơn 0 K trong tự nhiên.',
      },
      {
        name: 'Định luật I Nhiệt động lực học',
        latex: '\\Delta U = A + Q',
        note: 'Q > 0 khi nhận nhiệt, Q < 0 khi tỏa nhiệt; A > 0 khi nhận công (bị nén), A < 0 khi sinh công (giãn nở).',
      },
      {
        name: 'Nhiệt lượng đun nóng và làm lạnh',
        latex: 'Q = m c \\Delta T = m c (T_2 - T_1)',
        note: 'm: khối lượng (kg); c: nhiệt dung riêng (J/(kg·K)); ΔT: độ biến thiên nhiệt độ (K hoặc °C).',
      },
      {
        name: 'Nhiệt nóng chảy riêng và Nhiệt hóa hơi riêng',
        latex: 'Q_{nc} = \\lambda \\cdot m; \\quad Q_{hh} = L \\cdot m',
        note: 'λ: nhiệt nóng chảy riêng (J/kg); L: nhiệt hóa hơi riêng (J/kg). Xảy ra tại nhiệt độ chuyển thể không đổi.',
      },
      {
        name: 'Phương trình cân bằng nhiệt',
        latex: '\\sum Q_{\\text{tỏa}} = \\sum Q_{\\text{thu}} \\quad \\Leftrightarrow \\quad \\sum m_i c_i (t_i - t_{cb}) = 0',
        note: 'Áp dụng cho hệ nhiệt cô lập không trao đổi nhiệt với môi trường xung quanh.',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'G12-CH1-TP1',
        title: 'Chủ đề 1.1: Cấu tạo chất, Động học phân tử & Thang nhiệt độ',
        textbook_tags: ['KNTT Bài 1-2', 'CTST Bài 1-2', 'CD Bài 1'],
        overview:
          'Khám phá thế giới vi mô của các trạng thái vật chất (rắn, lỏng, khí), bản chất của chuyển động nhiệt và cơ sở vật lý của các thang đo nhiệt độ hiện đại.',
        summary_note:
          'Cấu tạo chất dựa trên mô hình phân tử giải thích rõ rệt sự khác biệt về tính chất cơ học và nhiệt giữa 3 thể. Nhiệt độ là đại lượng đo động năng nhiệt trung bình của phân tử. Thang đo nhiệt động lực học Kelvin là chuẩn mực quốc tế trong vật lý.',
        theory_sections: [
          {
            heading: '1. Mô hình động học phân tử về cấu tạo chất',
            content:
              'Mọi vật chất đều cấu tạo từ các hạt vi mô (nguyên tử, phân tử) có kích thước cỡ nanômét. Các phân tử chuyển động hỗn loạn không ngừng gọi là chuyển động nhiệt. Nhiệt độ càng cao, tốc độ chuyển động nhiệt càng lớn. Giữa các phân tử luôn tồn tại đồng thời lực hút và lực đẩy tĩnh điện. Khi khoảng cách giữa các phân tử bằng khoảng cách cân bằng r0, lực hút cân bằng lực đẩy; khi r > r0 thì lực hút chiếm ưu thế; khi r < r0 thì lực đẩy chiếm ưu thế mạnh mẽ.',
            keyPoints: [
              'Chuyển động nhiệt là chuyển động hỗn loạn, không có hướng ưu tiên của các phân tử vi mô.',
              'Thể rắn có trật tự tầm xa (rắn kết tinh) hoặc trật tự gần (rắn vô định hình), giữ thể tích và hình dạng.',
              'Thể lỏng có trật tự gần, chảy được, giữ thể tích nhưng không giữ hình dạng.',
              'Thể khí khoảng cách phân tử rất lớn, chuyển động tự do, lấp đầy mọi không gian chứa.',
            ],
            realWorldApplication:
              'Hiện tượng khuếch tán mùi hương trong không khí, sự hòa tan của mực vào nước và hiện tượng nở vì nhiệt của vật liệu xây dựng.',
          },
          {
            heading: '2. Nhiệt độ và các thang nhiệt độ vật lý',
            content:
              'Nhiệt độ biểu thị trạng thái cân bằng nhiệt giữa các vật tiếp xúc. Hai vật tiếp xúc nhiệt với nhau mà không có sự truyền nhiệt lượng thì chúng có cùng nhiệt độ (Định luật số không nhiệt động lực học). Thang nhiệt độ Kelvin (K) định nghĩa độ không tuyệt đối (0 K = -273,15 °C) là mốc năng lượng nhiệt bằng 0 của các nguyên tử theo vật lý cổ điển. Thang Fahrenheit (°F) dùng phổ biến ở Mỹ với điểm đóng băng của nước là 32 °F và điểm sôi là 212 °F.',
            keyPoints: [
              'Độ không tuyệt đối (0 K) là giới hạn dưới của nhiệt độ trong vũ trụ.',
              'Mối liên hệ giữa Celsius và Kelvin: T(K) = t(°C) + 273,15.',
              'Độ biến thiên một độ Kelvin có độ lớn đúng bằng độ biến thiên một độ Celsius: ΔT = Δt.',
              'Công thức thang Fahrenheit: t(°F) = 1,8·t(°C) + 32.',
            ],
            realWorldApplication:
              'Ứng dụng nhiệt kế hồng ngoại đo thân nhiệt không tiếp xúc, nhiệt điện trở bán dẫn trong cảm biến nhiệt ô tô và nghiên cứu vật liệu siêu dẫn ở nhiệt độ cực thấp.',
          },
        ],
        quantities: [
          {
            name: 'Nhiệt độ Celsius',
            symbol: 't',
            si_unit: '°C (đơn vị dẫn xuất)',
            other_units: '°F',
            measuring_device: 'Nhiệt kế thủy ngân, nhiệt kế rượu, nhiệt kế điện tử',
            description: 'Số đo mức độ nóng lạnh dựa trên thang chia độ của Anders Celsius.',
          },
          {
            name: 'Nhiệt độ nhiệt động lực học (Kelvin)',
            symbol: 'T',
            si_unit: 'K (Kelvin)',
            other_units: 'kK, mK',
            measuring_device: 'Nhiệt kế khí áp kế, nhiệt kế bức xạ nhiệt, quang phổ kế',
            description: 'Đại lượng cơ bản trong hệ SI đặc trưng cho động năng chuyển động nhiệt trung bình của các phân tử.',
          },
        ],
        formulas: [
          {
            name: 'Mối liên hệ giữa thang Kelvin và thang Celsius',
            latex_expression: 'T = t + 273,15 \\quad (\\text{K})',
            plain_expression: 'T = t + 273.15',
            variables: [
              { symbol: 'T', name: 'Nhiệt độ tuyệt đối', unit: 'K' },
              { symbol: 't', name: 'Nhiệt độ Celsius', unit: '°C' },
            ],
            derived_formulas: [
              { expression: 't = T - 273,15', description: 'Quy đổi từ nhiệt độ Kelvin sang nhiệt độ Celsius' },
              { expression: '\\Delta T = \\Delta t', description: 'Độ biến thiên nhiệt độ trong hai thang đo là như nhau' },
            ],
            usage_note: 'Trong các công thức định luật khí lý tưởng và nhiệt động lực học, nhiệt độ T bắt buộc phải tính bằng Kelvin.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Quy đổi nhiệt độ giữa thang Celsius, Kelvin và Fahrenheit',
            difficulty: 'thong_hieu',
            problem_statement:
              'Nhiệt độ cơ thể người bình thường là 37 °C. Hãy xác định giá trị nhiệt độ này theo thang nhiệt độ Kelvin (K) và thang Fahrenheit (°F). Nếu một bệnh nhân sốt tăng thêm 1,5 °C thì nhiệt độ cơ thể bệnh nhân tăng thêm bao nhiêu Kelvin?',
            given_summary: 't = 37 °C; Δt = 1,5 °C',
            solution_steps: [
              'Bước 1: Áp dụng công thức chuyển đổi sang thang Kelvin: T = t + 273,15 = 37 + 273,15 = 310,15 K.',
              'Bước 2: Áp dụng công thức chuyển đổi sang thang Fahrenheit: t(°F) = 1,8 · t(°C) + 32 = 1,8 · 37 + 32 = 66,6 + 32 = 98,6 °F.',
              'Bước 3: Vì độ chia 1 °C có độ lớn bằng độ chia 1 K nên độ biến thiên nhiệt độ ΔT = Δt = 1,5 K.',
            ],
            final_answer: 'T = 310,15 K; t = 98,6 °F; nhiệt độ tăng thêm đúng 1,5 K.',
          },
        ],
        simulation: {
          sim_key: 'g12_molecular_states_lab',
          title: 'Phòng thí nghiệm Mô hình Chuyển động Phân tử 3 Thể',
          description:
            'Quan sát trực quan tương tác và quỹ đạo dao động của các phân tử ở thể rắn, lỏng, khí khi thay đổi nhiệt độ từ 0 K đến 600 K.',
          parameters: {
            substance: 'water',
            initialTemperature: 300,
            particleCount: 80,
            volumeBox: 1.0,
          },
          guide_steps: [
            'Bước 1: Chọn thể rắn (nhiệt độ dưới 273 K) để thấy cấu trúc tinh thể mạng lưới với các phân tử dao động quanh vị trí cân bằng cố định.',
            'Bước 2: Kéo thanh trượt nhiệt độ tăng qua điểm nóng chảy để quan sát các phân tử trượt lên nhau và chuyển động linh hoạt ở thể lỏng.',
            'Bước 3: Tiếp tục cấp nhiệt lên trên 373 K để chứng kiến các liên kết bị bẻ gãy hoàn toàn, các phân tử bay hỗn loạn chiếm toàn bộ hộp.',
          ],
          physics_insight:
            'Nhiệt độ vi mô chính là thước đo động năng tịnh tiến trung bình của phân tử. Khi nhiệt độ tiến về 0 K, mọi dao động nhiệt tắt dần.',
        },
      },
      {
        order_index: 2,
        code: 'G12-CH1-TP2',
        title: 'Chủ đề 1.2: Nội năng & Định luật I Nhiệt động lực học',
        textbook_tags: ['KNTT Bài 3-4', 'CTST Bài 3', 'CD Bài 2'],
        overview:
          'Tìm hiểu khái niệm nội năng của hệ vật lý, hai phương thức truyền năng lượng (công và nhiệt lượng) và áp dụng Định luật I Nhiệt động lực học cho các quá trình biến đổi trạng thái.',
        summary_note:
          'Định luật I Nhiệt động lực học là sự biểu hiện của định luật bảo toàn và chuyển hóa năng lượng trong các quá trình nhiệt: ΔU = A + Q. Quy tắc dấu phản ánh vai trò của hệ là chủ thể nhận hay truyền năng lượng.',
        theory_sections: [
          {
            heading: '1. Khái niệm nội năng và các cách làm biến đổi nội năng',
            content:
              'Nội năng (U) của một vật là tổng động năng của các phân tử chuyển động nhiệt hỗn loạn bên trong vật và thế năng tương tác giữa chúng. Khi làm nóng vật, các phân tử chuyển động nhanh hơn làm động năng tăng, hoặc khi làm vật giãn nở, khoảng cách phân tử thay đổi làm thế năng tương tác thay đổi, dẫn đến nội năng thay đổi (ΔU = U2 - U1). Có hai cách làm biến đổi nội năng: (1) Thực hiện công (có sự chuyển hóa cơ năng thành nội năng) ví dụ cọ xát vật; (2) Truyền nhiệt (chỉ có sự truyền nội năng từ vật có nhiệt độ cao sang vật có nhiệt độ thấp mà không có sự chuyển hóa dạng năng lượng khác).',
            keyPoints: [
              'Nội năng không phải là cơ năng tổng cộng của toàn bộ vật thể.',
              'Nhiệt lượng Q là số đo phần nội năng được truyền từ vật này sang vật khác trong quá trình truyền nhiệt.',
              'Đơn vị của nội năng, công và nhiệt lượng đều là Jun (J).',
            ],
            realWorldApplication:
              'Pít-tông động cơ đốt trong nhận nhiệt từ quá trình đốt nhiên liệu rồi giãn nở sinh công đẩy bánh đà quay truyền động xe cơ giới.',
          },
          {
            heading: '2. Định luật I Nhiệt động lực học và quy ước dấu',
            content:
              'Độ biến thiên nội năng ΔU của hệ bằng tổng đại số công A và nhiệt lượng Q mà hệ trao đổi với môi trường ngoài: ΔU = A + Q. Quy ước dấu thống nhất: Đại lượng nào làm NĂNG LƯỢNG HỆ TĂNG thì lấy dấu DƯƠNG (> 0), đại lượng nào làm NĂNG LƯỢNG HỆ GIẢM thì lấy dấu ÂM (< 0). Như vậy: Q > 0 khi hệ nhận nhiệt lượng; Q < 0 khi hệ truyền nhiệt lượng cho môi trường; A > 0 khi môi trường thực hiện công nén hệ; A < 0 khi hệ sinh công tác dụng lên môi trường ngoài.',
            keyPoints: [
              'Công thức: ΔU = A + Q.',
              'Hệ nhận công (bị nén): A > 0. Hệ sinh công (giãn nở): A < 0.',
              'Hệ nhận nhiệt: Q > 0. Hệ tỏa nhiệt: Q < 0.',
              'Nếu chu trình khép kín trở về trạng thái ban đầu thì ΔU = 0, suy ra A = -Q.',
            ],
            realWorldApplication:
              'Nguyên lý hoạt động của máy nén khí, bơm xe đạp nóng lên sau khi bơm và máy điều hòa nhiệt độ.',
          },
        ],
        quantities: [
          {
            name: 'Nội năng',
            symbol: 'U',
            si_unit: 'J (Joule)',
            other_units: 'kJ, cal, kcal',
            measuring_device: 'Nhiệt lượng kế (đo gián tiếp qua công và nhiệt)',
            description: 'Tổng động năng chuyển động nhiệt và thế năng tương tác của các hạt cấu tạo nên hệ.',
          },
          {
            name: 'Công trao đổi',
            symbol: 'A',
            si_unit: 'J (Joule)',
            other_units: 'kJ, N·m',
            measuring_device: 'Cảm biến lực và quãng đường tích hợp (Work meter)',
            description: 'Phần năng lượng chuyển giao giữa hệ và môi trường thông qua tác dụng cơ học làm biến dạng hoặc dịch chuyển.',
          },
          {
            name: 'Nhiệt lượng',
            symbol: 'Q',
            si_unit: 'J (Joule)',
            other_units: 'cal, kcal (1 cal = 4,186 J)',
            measuring_device: 'Nhiệt lượng kế bom, nhiệt lượng kế dung dịch',
            description: 'Số đo phần nội năng được truyền qua ranh giới hệ do sự chênh lệch nhiệt độ.',
          },
        ],
        formulas: [
          {
            name: 'Định luật I Nhiệt động lực học',
            latex_expression: '\\Delta U = A + Q',
            plain_expression: 'deltaU = A + Q',
            variables: [
              { symbol: '\\Delta U', name: 'Độ biến thiên nội năng', unit: 'J' },
              { symbol: 'A', name: 'Công mà hệ nhận được', unit: 'J' },
              { symbol: 'Q', name: 'Nhiệt lượng mà hệ nhận được', unit: 'J' },
            ],
            derived_formulas: [
              { expression: 'Q = \\Delta U - A', description: 'Nhiệt lượng trao đổi tính từ độ biến thiên nội năng và công' },
              { expression: 'A = \\Delta U - Q', description: 'Công nhận được tính từ độ biến thiên nội năng và nhiệt lượng' },
              { expression: 'A = -p \\Delta V', description: 'Công của chất khí trong quá trình đẳng áp (giãn nở sinh công âm)' },
            ],
            usage_note: 'Cần xác định chính xác từ ngữ trong đề bài: "nhận nhiệt" (Q > 0) hay "tỏa nhiệt" (Q < 0); "sinh công" (A < 0) hay "nhận công" (A > 0).',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Áp dụng Định luật I NĐLH cho khối khí trong xi lanh',
            difficulty: 'van_dung',
            problem_statement:
              'Người ta cung cấp cho chất khí trong một xi lanh kín một nhiệt lượng 150 J. Chất khí giãn nở đẩy pít-tông dịch chuyển và thực hiện một công có độ lớn 60 J lên môi trường ngoài. Tính độ biến thiên nội năng của khối khí. Khối khí nóng lên hay lạnh đi?',
            given_summary: 'Cung cấp nhiệt lượng: Q = +150 J; Khí thực hiện công: A = -60 J',
            solution_steps: [
              'Bước 1: Xác định dấu của các đại lượng theo quy ước: Khối khí nhận nhiệt lượng nên Q = +150 J. Khí sinh công đẩy pít-tông ra ngoài nên công hệ nhận là A = -60 J.',
              'Bước 2: Áp dụng công thức Định luật I NĐLH: ΔU = A + Q = -60 + 150 = +90 J.',
              'Bước 3: Nhận xét: Vì ΔU = +90 J > 0 nên nội năng của khối khí tăng lên, chất khí nóng lên.',
            ],
            final_answer: 'Độ biến thiên nội năng ΔU = +90 J (nội năng tăng 90 J, khí nóng lên).',
          },
        ],
        simulation: {
          sim_key: 'g12_thermodynamics_first_law_lab',
          title: 'Phòng thí nghiệm Pít-tông và Định luật I Nhiệt động lực học',
          description:
            'Tác dụng lực nén/giãn pít-tông đồng thời bật/tắt ngọn lửa truyền nhiệt để theo dõi biến thiên nội năng ΔU, đồ thị công A và nhiệt lượng Q.',
          parameters: {
            heatInput: 150,
            workDone: -60,
            gasVolumeInit: 2.0,
            gasPressureInit: 100000,
          },
          guide_steps: [
            'Bước 1: Tăng ngọn đèn cồn để truyền nhiệt lượng Q vào xilanh (đồng hồ Q hiển thị dương).',
            'Bước 2: Kéo pít-tông ra ngoài để khối khí sinh công A (thanh pít-tông dịch chuyển, công sinh ra làm giảm nội năng).',
            'Bước 3: Quan sát thanh đo năng lượng tổng kết ΔU = A + Q hiển thị màu xanh lá cây.',
          ],
          physics_insight:
            'Nếu cung cấp nhiệt mà xilanh bị giữ chặt không di chuyển (A = 0, đẳng tích) thì toàn bộ nhiệt lượng dùng để làm tăng nội năng: ΔU = Q.',
        },
      },
      {
        order_index: 3,
        code: 'G12-CH1-TP3',
        title: 'Chủ đề 1.3: Nhiệt dung riêng, Nhiệt nóng chảy & Nhiệt hóa hơi',
        textbook_tags: ['KNTT Bài 5-7', 'CTST Bài 4-5', 'CD Bài 3'],
        overview:
          'Khảo sát các đại lượng nhiệt đặc trưng của vật chất: nhiệt dung riêng c, nhiệt nóng chảy riêng λ, nhiệt hóa hơi riêng L và phương pháp đo nhiệt lượng kế trong thực nghiệm.',
        summary_note:
          'Mỗi chất nguyên chất có nhiệt dung riêng, nhiệt nóng chảy riêng và nhiệt hóa hơi riêng xác định. Quá trình chuyển thể tại nhiệt độ xác định không làm thay đổi nhiệt độ cho đến khi toàn bộ chất chuyển thể hoàn toàn.',
        theory_sections: [
          {
            heading: '1. Nhiệt dung riêng và Phương trình cân bằng nhiệt',
            content:
              'Nhiệt dung riêng c của một chất là nhiệt lượng cần truyền cho 1 kg chất đó để nhiệt độ tăng thêm 1 K (hoặc 1 °C): c = Q / (m·ΔT). Đơn vị là J/(kg·K). Nước có nhiệt dung riêng rất lớn (c ≈ 4180 J/(kg·K)), gấp gần 10 lần các kim loại như đồng, sắt. Khi cho nhiều vật trao đổi nhiệt trong một nhiệt lượng kế cách nhiệt lý tưởng, nhiệt lượng do các vật tỏa ra bằng nhiệt lượng do các vật thu vào: Q_tỏa = Q_thu.',
            keyPoints: [
              'Công thức: Q = m·c·ΔT.',
              'Nước có nhiệt dung riêng cao giúp biển và đại dương điều hòa nhiệt độ trái đất.',
              'Nhiệt lượng kế dùng để đo nhiệt dung riêng của các kim loại bằng phương pháp cân bằng nhiệt.',
            ],
            realWorldApplication:
              'Sử dụng nước làm chất tải nhiệt trong hệ thống làm mát động cơ ô tô, điều hòa nhiệt độ và lò phản ứng hạt nhân.',
          },
          {
            heading: '2. Nhiệt nóng chảy riêng và Nhiệt hóa hơi riêng',
            content:
              'Khi chất rắn kết tinh nóng chảy ở nhiệt độ nóng chảy xác định, năng lượng nhiệt cung cấp được dùng để phá vỡ mạng tinh thể (tăng thế năng phân tử) mà không làm tăng động năng phân tử, do đó nhiệt độ không đổi. Nhiệt nóng chảy riêng λ (J/kg) là nhiệt lượng cần cung cấp cho 1 kg chất đó nóng chảy hoàn toàn ở nhiệt độ nóng chảy: Q_nc = λ·m. Tương tự, nhiệt hóa hơi riêng L (J/kg) là nhiệt lượng cần để làm 1 kg chất lỏng hóa hơi hoàn toàn ở nhiệt độ sôi: Q_hh = L·m.',
            keyPoints: [
              'Nhiệt nóng chảy riêng λ đặc trưng cho năng lượng liên kết mạng tinh thể của chất rắn kết tinh.',
              'Nhiệt hóa hơi riêng L thường rất lớn vì cần thắng hoàn toàn lực hút phân tử và thực hiện công chống lại áp suất khí quyển.',
              'Với nước: λ_băng ≈ 3,34·10^5 J/kg; L_nước sôi ≈ 2,26·10^6 J/kg.',
            ],
            realWorldApplication:
              'Mồ hôi bay hơi khỏi da hấp thụ nhiệt hóa hơi khổng lồ (2,26 MJ/kg) giúp cơ thể người giữ thân nhiệt ổn định ở 37 °C ngay cả trong ngày nắng gắt.',
          },
        ],
        quantities: [
          {
            name: 'Nhiệt dung riêng',
            symbol: 'c',
            si_unit: 'J/(kg·K)',
            other_units: 'J/(kg·°C), cal/(g·°C)',
            measuring_device: 'Nhiệt lượng kế kết hợp cân điện tử và nhiệt kế số',
            description: 'Nhiệt lượng cần cung cấp để 1 kg chất tăng nhiệt độ thêm 1 Kelvin.',
          },
          {
            name: 'Nhiệt nóng chảy riêng',
            symbol: 'λ',
            si_unit: 'J/kg',
            other_units: 'kJ/kg',
            measuring_device: 'Nhiệt lượng kế điện trở',
            description: 'Nhiệt lượng cần thiết để 1 kg chất rắn kết tinh chuyển hoàn toàn sang thể lỏng ở nhiệt độ nóng chảy.',
          },
          {
            name: 'Nhiệt hóa hơi riêng',
            symbol: 'L',
            si_unit: 'J/kg',
            other_units: 'kJ/kg',
            measuring_device: 'Bình đun hóa hơi kết hợp cân cảm ứng',
            description: 'Nhiệt lượng cần thiết để 1 kg chất lỏng chuyển hoàn toàn sang thể khí ở nhiệt độ sôi.',
          },
        ],
        formulas: [
          {
            name: 'Nhiệt lượng đun nóng, nóng chảy và hóa hơi',
            latex_expression: 'Q = m c \\Delta T; \\quad Q_{nc} = \\lambda m; \\quad Q_{hh} = L m',
            plain_expression: 'Q = m*c*deltaT; Q_nc = lambda*m; Q_hh = L*m',
            variables: [
              { symbol: 'm', name: 'Khối lượng của vật', unit: 'kg' },
              { symbol: 'c', name: 'Nhiệt dung riêng', unit: 'J/(kg·K)' },
              { symbol: '\\lambda', name: 'Nhiệt nóng chảy riêng', unit: 'J/kg' },
              { symbol: 'L', name: 'Nhiệt hóa hơi riêng', unit: 'J/kg' },
            ],
            derived_formulas: [
              { expression: 'c = \\frac{Q}{m \\Delta T}', description: 'Xác định nhiệt dung riêng từ thực nghiệm nhiệt lượng kế' },
              { expression: '\\lambda = \\frac{Q_{nc}}{m}', description: 'Xác định nhiệt nóng chảy riêng' },
              { expression: 'L = \\frac{Q_{hh}}{m}', description: 'Xác định nhiệt hóa hơi riêng' },
            ],
            usage_note: 'Khi giải bài toán đun nóng từ thể rắn qua thể lỏng đến thể khí, cần cộng từng giai đoạn: đun nóng chất rắn + nóng chảy + đun nóng chất lỏng + hóa hơi.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính nhiệt lượng để làm nóng chảy và đun sôi nước đá',
            difficulty: 'van_dung',
            problem_statement:
              'Tính nhiệt lượng cần cung cấp để chuyển hoàn toàn 2 kg nước đá ở 0 °C thành nước sôi ở 100 °C. Cho nhiệt nóng chảy riêng của nước đá là λ = 3,34·10^5 J/kg và nhiệt dung riêng của nước là c = 4180 J/(kg·K). Bỏ qua sự mất mát nhiệt ra môi trường.',
            given_summary: 'm = 2 kg; t1 = 0 °C; t2 = 100 °C; λ = 3,34·10^5 J/kg; c = 4180 J/(kg·K)',
            solution_steps: [
              'Bước 1: Tính nhiệt lượng cần để làm nóng chảy hoàn toàn 2 kg nước đá ở 0 °C thành nước ở 0 °C: Q1 = λ·m = 3,34·10^5 · 2 = 668 000 J = 668 kJ.',
              'Bước 2: Tính nhiệt lượng cần để đun nóng 2 kg nước từ 0 °C lên 100 °C: Q2 = m·c·(t2 - t1) = 2 · 4180 · (100 - 0) = 836 000 J = 836 kJ.',
              'Bước 3: Tổng nhiệt lượng cần cung cấp: Q = Q1 + Q2 = 668 000 + 836 000 = 1 504 000 J = 1504 kJ (≈ 1,504 MJ).',
            ],
            final_answer: 'Tổng nhiệt lượng cần cung cấp là Q = 1 504 kJ (1,504 MJ).',
          },
        ],
        simulation: {
          sim_key: 'g12_calorimetry_phase_change_lab',
          title: 'Phòng thí nghiệm Nhiệt Lượng Kế & Chuyển Thể Trạng Thái',
          description:
            'Đun nóng khối nước đá từ -20 °C đến 120 °C, theo dõi đồ thị nhiệt độ theo thời gian và các đoạn nằm ngang (bình nguyên nhiệt độ) khi chuyển thể.',
          parameters: {
            iceMassKg: 0.5,
            initialTempC: -10,
            heaterPowerWatts: 500,
            specificHeatIce: 2090,
            specificHeatWater: 4180,
            latentHeatFusion: 334000,
            latentHeatVap: 2260000,
          },
          guide_steps: [
            'Bước 1: Bật bếp điện đun nóng đá từ -10 °C lên 0 °C (đường dốc thứ nhất).',
            'Bước 2: Quan sát giai đoạn nóng chảy ở đúng 0 °C: nhiệt độ dừng lại trên đồ thị dù bếp vẫn truyền nhiệt liên tục.',
            'Bước 3: Sau khi tan chảy hết, nhiệt độ nước lỏng tăng dần đến 100 °C, và tiếp tục xuất hiện đoạn nằm ngang thứ hai khi nước sôi hóa hơi.',
          ],
          physics_insight:
            'Nhiệt lượng chuyển thể không làm tăng nhiệt độ mà dùng để phá vỡ các liên kết mạng tinh thể và kéo dãn khoảng cách phân tử.',
        },
      },
    ],
  },
  {
    order_index: 2,
    code: 'G12-CH2',
    title: 'Chương 2: Khí lý tưởng',
    description:
      'Mô hình khí lý tưởng, các thông số trạng thái (áp suất p, thể tích V, nhiệt độ tuyệt đối T), quá trình đẳng nhiệt và Định luật Boyle, quá trình đẳng áp và Định luật Charles, phương trình trạng thái Clapeyron - Mendeleev, thuyết động học phân tử chất khí, công thức tính áp suất khí theo động học phân tử, động năng tịnh tiến trung bình và tốc độ căn quân phương của phân tử.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 2: Khí lý tưởng
1. **Mô hình chất khí lý tưởng:**
   - Chất khí gồm các phân tử có kích thước vô cùng nhỏ so với khoảng cách giữa chúng (coi như chất điểm).
   - Các phân tử chuyển động hỗn loạn không ngừng; chuyển động càng nhanh thì nhiệt độ càng cao.
   - Khi chưa va chạm, lực tương tác giữa các phân tử là không đáng kể.
   - Các phân tử chỉ tương tác khi va chạm với nhau và va chạm với thành bình chứa; các va chạm này là **va chạm hoàn toàn đàn hồi**.
2. **Các định luật thực nghiệm về chất khí:**
   - **Định luật Boyle (Quá trình đẳng nhiệt - $T = \\text{const}$):** Ở nhiệt độ không đổi, áp suất của một lượng khí xác định tỉ lệ nghịch với thể tích:
     $$p_1 V_1 = p_2 V_2 \\quad \\Leftrightarrow \\quad p \\cdot V = \\text{const}$$
     Đường đẳng nhiệt trên hệ toạ độ $(p, V)$ là một nhánh hypebol.
   - **Định luật Charles (Quá trình đẳng áp - $p = \\text{const}$):** Ở áp suất không đổi, thể tích của một lượng khí xác định tỉ lệ thuận với nhiệt độ tuyệt đối:
     $$\\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\quad \\Leftrightarrow \\quad \\frac{V}{T} = \\text{const}$$
     Đường đẳng áp trên hệ tọa độ $(V, T)$ là đường thẳng đi qua gốc tọa độ $O$ (nếu kéo dài).
   - **Định luật Gay-Lussac (Quá trình đẳng tích - $V = \\text{const}$):**
     $$\\frac{p_1}{T_1} = \\frac{p_2}{T_2} \\quad \\Leftrightarrow \\quad \\frac{p}{T} = \\text{const}$$
3. **Phương trình trạng thái khí lý tưởng và Phương trình Clapeyron - Mendeleev:**
   - Đối với một khối lượng khí xác định:
     $$\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2} = \\text{const}$$
   - Đối với lượng khí $n$ mol (khối lượng $m$, khối lượng mol $M$):
     $$p V = n R T = \\frac{m}{M} R T$$
     với $R \\approx 8,314\\,\\text{J/(mol}\\cdot\\text{K)}$ là hằng số khí lý tưởng.
4. **Cơ sở động học phân tử của Áp suất và Động năng phân tử:**
   - Áp suất chất khí tác dụng lên thành bình do vô số phân tử va chạm đàn hồi vào thành bình gây ra:
     $$p = \\frac{1}{3} n_0 m_0 \\overline{v^2} = \\frac{2}{3} n_0 \\overline{E_đ}$$
     trong đó $n_0 = \\frac{N}{V}$ là mật độ phân tử, $m_0$ là khối lượng một phân tử, $\\overline{v^2}$ là trung bình bình phương tốc độ.
   - **Động năng tịnh tiến trung bình của một phân tử:** Chỉ phụ thuộc vào nhiệt độ tuyệt đối $T$:
     $$\\overline{E_đ} = \\frac{1}{2} m_0 \\overline{v^2} = \\frac{3}{2} k T$$
     với $k = \\frac{R}{N_A} \\approx 1,38 \\times 10^{-23}\\,\\text{J/K}$ là hằng số Boltzmann.
   - **Tốc độ căn quân phương:**
     $$v_{rms} = \\sqrt{\\overline{v^2}} = \\sqrt{\\frac{3kT}{m_0}} = \\sqrt{\\frac{3RT}{M}}$$`,
    key_takeaways: [
      'Nhiệt độ T trong mọi công thức chất khí luôn bắt buộc tính bằng Kelvin: T(K) = t(°C) + 273.',
      'Định luật Boyle: p tỉ lệ nghịch với V khi T không đổi. Nén khí làm giảm thể tích thì áp suất tăng tương ứng.',
      'Phương trình Clapeyron - Mendeleev pV = (m/M)RT cho phép tìm mọi thông số trạng thái nếu biết khối lượng khí.',
      'Áp suất chất khí tỷ lệ thuận với mật độ phân tử và động năng tịnh tiến trung bình của các phân tử: p = (2/3)·n0·E_đ.',
      'Động năng tịnh tiến trung bình của phân tử chỉ phụ thuộc vào nhiệt độ T, không phụ thuộc vào loại khí: E_đ = (3/2)·k·T.',
    ],
    formula_cheatsheet: [
      {
        name: 'Định luật Boyle (Đẳng nhiệt)',
        latex: 'p_1 V_1 = p_2 V_2 \\quad (T = \\text{const})',
        note: 'Áp dụng khi nhiệt độ không đổi; đường đẳng nhiệt trong hệ (p, V) là hypebol.',
      },
      {
        name: 'Định luật Charles (Đẳng áp)',
        latex: '\\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\quad (p = \\text{const})',
        note: 'T phải tính bằng Kelvin. Đường đẳng áp trong hệ (V, T) đi qua gốc tọa độ O.',
      },
      {
        name: 'Phương trình trạng thái và Clapeyron - Mendeleev',
        latex: '\\frac{p V}{T} = \\text{const}; \\quad p V = n R T = \\frac{m}{M} R T',
        note: 'R = 8,314 J/(mol·K); p đo bằng Pa (N/m²), V đo bằng m³.',
      },
      {
        name: 'Áp suất khí theo thuyết động học phân tử',
        latex: 'p = \\frac{1}{3} n_0 m_0 \\overline{v^2} = \\frac{2}{3} n_0 \\overline{E_đ}',
        note: 'n0: mật độ phân tử (m⁻³); m0: khối lượng một phân tử (kg); E_đ: động năng trung bình.',
      },
      {
        name: 'Mối liên hệ giữa Động năng phân tử và Nhiệt độ',
        latex: '\\overline{E_đ} = \\frac{3}{2} k T; \\quad v_{rms} = \\sqrt{\\frac{3 k T}{m_0}} = \\sqrt{\\frac{3 R T}{M}}',
        note: 'k = 1,38·10⁻²³ J/K (hằng số Boltzmann); M tính theo kg/mol (ví dụ O2 là 0,032 kg/mol).',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'G12-CH2-TP1',
        title: 'Chủ đề 2.1: Mô hình khí lý tưởng & Định luật Boyle (Đẳng nhiệt)',
        textbook_tags: ['KNTT Bài 8-9', 'CTST Bài 6', 'CD Bài 4'],
        overview:
          'Khám phá mô hình khí lý tưởng và định luật thực nghiệm kinh điển của Robert Boyle chi phối quá trình biến đổi trạng thái ở nhiệt độ không đổi.',
        summary_note:
          'Mô hình khí lý tưởng bỏ qua thể tích bản thân của phân tử và lực tương tác ở khoảng cách xa. Trong quá trình đẳng nhiệt của một lượng khí xác định, tích áp suất và thể tích luôn là một hằng số.',
        theory_sections: [
          {
            heading: '1. Mô hình khí lý tưởng',
            content:
              'Khí thực ở điều kiện nhiệt độ phòng và áp suất thông thường có thể coi gần đúng là khí lý tưởng. Mô hình khí lý tưởng giả định: (1) Phân tử là các chất điểm hình cầu cực nhỏ, thể tích riêng không đáng kể so với thể tích bình chứa; (2) Các phân tử chuyển động nhiệt hỗn loạn không ngừng; (3) Không có lực hút hay đẩy giữa các phân tử khi chúng ở xa nhau; (4) Chỉ tương tác khi va chạm trực tiếp và va chạm là va chạm hoàn toàn đàn hồi với nhau và với thành bình chứa.',
            keyPoints: [
              'Khí lý tưởng là mô hình trừu tượng hóa giúp đơn giản hóa các phương trình nhiệt động.',
              'Khí thực càng loãng (áp suất thấp) và nhiệt độ càng cao thì càng tuân theo đúng mô hình khí lý tưởng.',
            ],
            realWorldApplication:
              'Không khí, khí oxi, nitơ, heli ở nhiệt độ phòng và áp suất khí quyển tuân theo các định luật khí lý tưởng với sai số dưới 1%.',
          },
          {
            heading: '2. Quá trình đẳng nhiệt và Định luật Boyle',
            content:
              'Quá trình biến đổi trạng thái của một lượng khí trong đó nhiệt độ được giữ không đổi gọi là quá trình đẳng nhiệt. Nhà bác học Robert Boyle (Anh) và Edme Mariotte (Pháp) đã độc lập phát hiện định luật: "Ở nhiệt độ không đổi, tích của áp suất p và thể tích V của một khối lượng khí xác định là một hằng số": p1·V1 = p2·V2 = const. Đồ thị biểu diễn mối liên hệ giữa p và V trong hệ tọa độ (p, V) là một đường hypebol. Đường hypebol ở nhiệt độ cao hơn sẽ nằm xa gốc tọa độ hơn đường ở nhiệt độ thấp hơn.',
            keyPoints: [
              'Công thức: p1·V1 = p2·V2 hay p tỉ lệ nghịch với V.',
              'Nếu thể tích giảm 2 lần thì áp suất tăng gấp 2 lần.',
              'Đường đẳng nhiệt trong hệ (p, V) là hypebol; trong hệ (p, T) hoặc (V, T) là đường vuông góc với trục T.',
            ],
            realWorldApplication:
              'Thợ lặn thở khí nén ở độ sâu lớn không được nín thở khi nổi lên mặt nước vì áp suất giảm làm thể tích khí trong phổi giãn nở đột ngột gây vỡ phế nang.',
          },
        ],
        quantities: [
          {
            name: 'Áp suất khí',
            symbol: 'p',
            si_unit: 'Pa (Pascal = N/m²)',
            other_units: 'bar, atm, mmHg, Torr (1 atm = 1,013·10⁵ Pa = 760 mmHg)',
            measuring_device: 'Áp kế màng, áp kế chữ U, cảm biến áp suất điện tử',
            description: 'Lực nén vuông góc của các phân tử khí tác dụng lên một đơn vị diện tích thành bình.',
          },
          {
            name: 'Thể tích khí',
            symbol: 'V',
            si_unit: 'm³',
            other_units: 'Lít (L), mL, dm³, cm³ (1 m³ = 1000 L)',
            measuring_device: 'Xi lanh chia độ, bình định mức khí',
            description: 'Toàn bộ khoảng không gian mà khối khí chiếm giữ bên trong bình chứa.',
          },
        ],
        formulas: [
          {
            name: 'Định luật Boyle',
            latex_expression: 'p_1 V_1 = p_2 V_2 \\quad \\Leftrightarrow \\quad p \\propto \\frac{1}{V} \\quad (T = \\text{const})',
            plain_expression: 'p1 * V1 = p2 * V2',
            variables: [
              { symbol: 'p_1, p_2', name: 'Áp suất khí ở trạng thái 1 và 2', unit: 'Pa hoặc atm' },
              { symbol: 'V_1, V_2', name: 'Thể tích khí ở trạng thái 1 và 2', unit: 'm³ hoặc Lít' },
            ],
            derived_formulas: [
              { expression: 'p_2 = p_1 \\frac{V_1}{V_2}', description: 'Tính áp suất khí sau khi nén hoặc giãn đẳng nhiệt' },
              { expression: 'V_2 = V_1 \\frac{p_1}{p_2}', description: 'Tính thể tích khí khi thay đổi áp suất' },
            ],
            usage_note: 'Đơn vị của p1 và p2 phải đồng nhất; đơn vị của V1 và V2 phải đồng nhất.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Nén đẳng nhiệt một khối khí trong xi lanh',
            difficulty: 'thong_hieu',
            problem_statement:
              'Một khối khí có thể tích 6 L ở áp suất 1,5·10^5 Pa. Nếu nén đẳng nhiệt khối khí này đến thể tích 2 L thì áp suất của khối khí lúc này bằng bao nhiêu?',
            given_summary: 'V1 = 6 L; p1 = 1,5·10^5 Pa; V2 = 2 L; T = const',
            solution_steps: [
              'Bước 1: Nhận diện quá trình biến đổi trạng thái là quá trình đẳng nhiệt (T không đổi).',
              'Bước 2: Áp dụng công thức Định luật Boyle: p1·V1 = p2·V2.',
              'Bước 3: Rút ra p2: p2 = (p1·V1) / V2 = (1,5·10^5 · 6) / 2 = 4,5·10^5 Pa.',
            ],
            final_answer: 'Áp suất của khối khí sau khi nén là p2 = 4,5·10^5 Pa (tăng gấp 3 lần).',
          },
        ],
        simulation: {
          sim_key: 'g12_boyle_isothermal_lab',
          title: 'Phòng thí nghiệm Xi Lanh & Định luật Boyle',
          description:
            'Kéo pít-tông nén khí từ từ ở nhiệt độ không đổi, quan sát đồ thị p - V dạng hypebol và tích p·V luôn giữ giá trị không đổi trên màn hình số.',
          parameters: {
            initialPressurePa: 100000,
            initialVolumeL: 10,
            temperatureK: 300,
            compressionRatio: 0.5,
          },
          guide_steps: [
            'Bước 1: Kéo cần gạt pít-tông nén thể tích từ 10 L xuống 5 L.',
            'Bước 2: Quan sát kim áp kế tăng vọt từ 1,00 atm lên 2,00 atm.',
            'Bước 3: Nhìn vào ô tích số p·V: luôn duy trì đúng 10,0 atm·L.',
          ],
          physics_insight:
            'Khi thể tích giảm một nửa, mật độ phân tử tăng gấp đôi, làm số va chạm vào mỗi mét vuông thành bình trong một giây tăng gấp đôi, sinh ra áp suất tăng gấp đôi.',
        },
      },
      {
        order_index: 2,
        code: 'G12-CH2-TP2',
        title: 'Chủ đề 2.2: Định luật Charles (Đẳng áp) & Phương trình trạng thái',
        textbook_tags: ['KNTT Bài 10-11', 'CTST Bài 7', 'CD Bài 5'],
        overview:
          'Nghiên cứu quá trình đẳng áp, định luật Charles, phương trình trạng thái tổng quát của khí lý tưởng và phương trình Clapeyron - Mendeleev.',
        summary_note:
          'Trong quá trình đẳng áp, thể tích tỉ lệ thuận với nhiệt độ tuyệt đối T. Phương trình trạng thái pV/T = const kết nối đồng thời cả 3 thông số trạng thái trong mọi quá trình biến đổi của một lượng khí xác định.',
        theory_sections: [
          {
            heading: '1. Quá trình đẳng áp và Định luật Charles',
            content:
              'Quá trình đẳng áp là quá trình biến đổi trạng thái khi áp suất p của khối khí được giữ không đổi. Nhà vật lý người Pháp Jacques Charles đã phát hiện: "Khi áp suất của một lượng khí xác định không đổi, thể tích của khí tỉ lệ thuận với nhiệt độ tuyệt đối của nó": V1 / T1 = V2 / T2 = const. Đồ thị biểu diễn mối liên hệ giữa V và T trên hệ trục tọa độ (V, T) là một đường thẳng mà nếu kéo dài sẽ đi qua gốc tọa độ O (tại 0 K thì thể tích khí lý tưởng bằng 0).',
            keyPoints: [
              'Công thức: V1 / T1 = V2 / T2 (bắt buộc đổi nhiệt độ sang Kelvin: T = t + 273).',
              'Đun nóng đẳng áp làm khối khí nở ra tỉ lệ thuận với nhiệt độ tuyệt đối.',
            ],
            realWorldApplication:
              'Khinh khí cầu bay lên không trung nhờ nung nóng không khí bên trong làm thể tích giãn nở, khối lượng riêng giảm nhỏ hơn không khí lạnh xung quanh.',
          },
          {
            heading: '2. Phương trình trạng thái và Phương trình Clapeyron - Mendeleev',
            content:
              'Kết hợp cả hai định luật Boyle và Charles, ta thu được phương trình trạng thái khí lý tưởng: (p1·V1) / T1 = (p2·V2) / T2 = const. Hằng số này tỉ lệ với số mol khí n. Khi xét n mol khí (n = m / M), phương trình được viết dưới dạng Clapeyron - Mendeleev: p·V = n·R·T = (m / M)·R·T, trong đó R ≈ 8,314 J/(mol·K) là hằng số khí lý tưởng chung cho mọi chất khí.',
            keyPoints: [
              'Phương trình tổng quát: (p·V) / T = const (áp dụng cho khối lượng khí xác định m không đổi).',
              'Phương trình Clapeyron - Mendeleev: pV = nRT = (m/M)RT.',
              'Khối lượng riêng của chất khí: ρ = m / V = (p·M) / (R·T).',
            ],
            realWorldApplication:
              'Tính toán thể tích oxy trong bình dưỡng khí y tế, thiết kế túi khí an toàn trên xe ô tô và áp suất khí quyển theo độ cao.',
          },
        ],
        quantities: [
          {
            name: 'Hằng số khí lý tưởng',
            symbol: 'R',
            si_unit: 'J/(mol·K)',
            other_units: 'L·atm/(mol·K) (≈ 0,08206)',
            measuring_device: 'Xác định từ thực nghiệm đo áp suất và thể tích của 1 mol khí ở điều kiện chuẩn',
            description: 'Hằng số vật lý phổ quát liên hệ áp suất, thể tích, nhiệt độ và lượng chất của khí lý tưởng.',
          },
          {
            name: 'Lượng chất',
            symbol: 'n',
            si_unit: 'mol',
            other_units: 'kmol, mmol',
            measuring_device: 'Cân khối lượng m chia cho khối lượng mol M',
            description: 'Số lượng hạt vi mô có trong khối khí (1 mol chứa NA ≈ 6,022·10²³ hạt).',
          },
        ],
        formulas: [
          {
            name: 'Phương trình trạng thái Clapeyron - Mendeleev',
            latex_expression: 'p V = n R T = \\frac{m}{M} R T',
            plain_expression: 'p * V = (m / M) * R * T',
            variables: [
              { symbol: 'p', name: 'Áp suất khí', unit: 'Pa' },
              { symbol: 'V', name: 'Thể tích khí', unit: 'm³' },
              { symbol: 'm', name: 'Khối lượng khối khí', unit: 'kg hoặc g' },
              { symbol: 'M', name: 'Khối lượng mol của chất khí', unit: 'kg/mol hoặc g/mol' },
              { symbol: 'R', name: 'Hằng số khí lý tưởng (8,314)', unit: 'J/(mol·K)' },
              { symbol: 'T', name: 'Nhiệt độ tuyệt đối', unit: 'K' },
            ],
            derived_formulas: [
              { expression: '\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2}', description: 'Phương trình trạng thái cho khối khí không đổi khối lượng' },
              { expression: '\\rho = \\frac{p M}{R T}', description: 'Công thức khối lượng riêng của chất khí' },
            ],
            usage_note: 'Trong hệ SI: p dùng Pa (N/m²), V dùng m³, m dùng kg, M dùng kg/mol (ví dụ O2 là 0,032 kg/mol).',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính khối lượng khí oxy trong bình kín',
            difficulty: 'van_dung',
            problem_statement:
              'Một bình kín có thể tích 20 L chứa khí oxy (O2, khối lượng mol M = 32 g/mol = 0,032 kg/mol) ở nhiệt độ 27 °C và áp suất 1,2·10^6 Pa. Cho hằng số khí lý tưởng R = 8,314 J/(mol·K). Tính khối lượng khí oxy chứa trong bình.',
            given_summary: 'V = 20 L = 0,02 m³; t = 27 °C => T = 300 K; p = 1,2·10^6 Pa; M = 0,032 kg/mol',
            solution_steps: [
              'Bước 1: Chuyển đổi các đơn vị về chuẩn SI: V = 20 L = 20·10^-3 m³ = 0,02 m³; T = 27 + 273 = 300 K; M = 0,032 kg/mol.',
              'Bước 2: Áp dụng phương trình Clapeyron - Mendeleev: p·V = (m / M)·R·T.',
              'Bước 3: Rút ra khối lượng m: m = (p·V·M) / (R·T) = (1,2·10^6 · 0,02 · 0,032) / (8,314 · 300) = 768 / 2494,2 ≈ 0,3079 kg ≈ 308 g.',
            ],
            final_answer: 'Khối lượng khí oxy trong bình là m ≈ 0,308 kg (308 gam).',
          },
        ],
        simulation: {
          sim_key: 'g12_ideal_gas_equation_lab',
          title: 'Phòng thí nghiệm Phương Trình Trạng Thái Khí Lý Tưởng',
          description:
            'Tự do tinh chỉnh cả 3 thông số (p, V, T), theo dõi trạng thái chất khí trên không gian trạng thái 3D hoặc đồ thị chiếu p - V, p - T, V - T.',
          parameters: {
            gasType: 'Oxygen',
            moles: 1.0,
            pressurePa: 101325,
            volumeM3: 0.024,
            temperatureK: 293,
          },
          guide_steps: [
            'Bước 1: Khóa thể tích V để thực hiện quá trình đẳng tích: tăng nhiệt độ T và quan sát áp suất p tăng tuyến tính.',
            'Bước 2: Khóa áp suất p để thực hiện quá trình đẳng áp: tăng nhiệt độ T và theo dõi thể tích xi lanh nở ra theo định luật Charles.',
            'Bước 3: Thả tự do tất cả các biến để quan sát hệ thức pV/T luôn bằng nR.',
          ],
          physics_insight:
            'Trạng thái của một lượng khí lý tưởng được xác định duy nhất bởi hai trong ba thông số p, V, T; thông số thứ ba tự động tuân theo phương trình trạng thái.',
        },
      },
      {
        order_index: 3,
        code: 'G12-CH2-TP3',
        title: 'Chủ đề 2.3: Áp suất khí theo động học phân tử & Động năng phân tử',
        textbook_tags: ['KNTT Bài 12-13', 'CTST Bài 8', 'CD Bài 6'],
        overview:
          'Khám phá cầu nối sâu sắc giữa thế giới vi mô và vĩ mô: áp suất khí theo động học phân tử, phân bố Maxwell - Boltzmann, động năng tịnh tiến trung bình và tốc độ căn quân phương.',
        summary_note:
          'Áp suất vĩ mô sinh ra từ hàng tỷ va chạm đàn hồi của phân tử vi mô lên thành bình: p = (2/3)·n0·E_đ. Động năng tịnh tiến trung bình của phân tử khí tỉ lệ thuận duy nhất với nhiệt độ tuyệt đối T qua hệ thức Boltzmann: E_đ = (3/2)·k·T.',
        theory_sections: [
          {
            heading: '1. Giải thích áp suất chất khí theo thuyết động học phân tử',
            content:
              'Trong mỗi giây, có hàng tỉ tỉ phân tử khí va chạm đàn hồi vào mỗi mét vuông diện tích thành bình chứa. Khi va chạm vuông góc, động lượng của mỗi phân tử biến thiên một lượng Δp = 2·m0·v, gây ra lực đẩy trung bình lên thành bình theo định luật II Newton. Tổng hợp các xung lực của toàn bộ các phân tử tạo nên áp suất khí vĩ mô. Bằng phương pháp thống kê, ta thu được công thức cơ bản: p = (1/3)·n0·m0·v_tb² = (2/3)·n0·E_đ, trong đó n0 = N / V là mật độ phân tử và E_đ là động năng tịnh tiến trung bình của một phân tử.',
            keyPoints: [
              'Áp suất khí vĩ mô là hiệu ứng tập thể từ các va chạm vi mô.',
              'p tỉ lệ thuận với mật độ phân tử n0 và động năng tịnh tiến trung bình E_đ.',
              'Công thức: p = (2/3)·n0·E_đ.',
            ],
            realWorldApplication:
              'Giải thích tại sao bơm thêm khí vào lốp xe (tăng n0) hoặc để xe dưới trời nắng (tăng T làm tăng E_đ) đều làm áp suất lốp xe tăng lên.',
          },
          {
            heading: '2. Động năng phân tử và Tốc độ căn quân phương',
            content:
              'So sánh phương trình p = (2/3)·n0·E_đ với phương trình Clapeyron - Mendeleev p = n0·k·T, ta rút ra định lý trang bị đều năng lượng: Động năng tịnh tiến trung bình của một phân tử khí lý tưởng chỉ phụ thuộc duy nhất vào nhiệt độ tuyệt đối T của khối khí: E_đ = (3/2)·k·T (với k = 1,38·10^-23 J/K là hằng số Boltzmann). Tốc độ căn quân phương (root-mean-square speed) đặc trưng cho tốc độ chuyển động nhiệt của phân tử là v_rms = √(3kT / m0) = √(3RT / M).',
            keyPoints: [
              'E_đ = (3/2)·k·T: Không phụ thuộc vào bản chất khí nặng hay nhẹ, ở cùng nhiệt độ T mọi phân tử khí đều có cùng động năng tịnh tiến trung bình!',
              'v_rms = √(3RT / M): Phân tử khí càng nhẹ (M nhỏ như H2, He) thì bay càng nhanh hơn so với khí nặng (O2, CO2) ở cùng nhiệt độ.',
            ],
            realWorldApplication:
              'Khí Hydro và Heli có v_rms rất lớn, vượt quá vận tốc vũ trụ cấp 1 nên đã thoát khỏi lực hấp dẫn của Trái Đất từ thuở sơ khai, giải thích vì sao khí quyển Trái Đất hầu như không có khí H2 tự do.',
          },
        ],
        quantities: [
          {
            name: 'Hằng số Boltzmann',
            symbol: 'k',
            si_unit: 'J/K',
            other_units: 'eV/K',
            measuring_device: 'Xác định từ tỉ số R / NA',
            description: 'Hằng số liên hệ năng lượng chuyển động nhiệt vi mô của từng hạt với nhiệt độ tuyệt đối vĩ mô (k ≈ 1,38·10⁻²³ J/K).',
          },
          {
            name: 'Mật độ phân tử',
            symbol: 'n0',
            si_unit: 'm⁻³',
            other_units: 'cm⁻³',
            measuring_device: 'Tính từ số mol: n0 = (n·NA) / V = N / V',
            description: 'Số lượng phân tử khí có trong một đơn vị thể tích mét khối.',
          },
          {
            name: 'Tốc độ căn quân phương',
            symbol: 'v_rms',
            si_unit: 'm/s',
            other_units: 'km/s',
            measuring_device: 'Thực nghiệm Stern hoặc máy phổ kế khối lượng',
            description: 'Căn bậc hai của trung bình bình phương tốc độ các phân tử khí.',
          },
        ],
        formulas: [
          {
            name: 'Động năng tịnh tiến trung bình và Tốc độ căn quân phương',
            latex_expression: '\\overline{E_đ} = \\frac{3}{2} k T; \\quad v_{rms} = \\sqrt{\\frac{3 k T}{m_0}} = \\sqrt{\\frac{3 R T}{M}}',
            plain_expression: 'E_d = 1.5 * k * T; v_rms = sqrt(3 * R * T / M)',
            variables: [
              { symbol: '\\overline{E_đ}', name: 'Động năng tịnh tiến trung bình của 1 phân tử', unit: 'J' },
              { symbol: 'k', name: 'Hằng số Boltzmann (1,38·10⁻²³)', unit: 'J/K' },
              { symbol: 'T', name: 'Nhiệt độ tuyệt đối', unit: 'K' },
              { symbol: 'R', name: 'Hằng số khí lý tưởng (8,314)', unit: 'J/(mol·K)' },
              { symbol: 'M', name: 'Khối lượng mol của chất khí', unit: 'kg/mol' },
              { symbol: 'v_{rms}', name: 'Tốc độ căn quân phương', unit: 'm/s' },
            ],
            derived_formulas: [
              { expression: 'p = \\frac{2}{3} n_0 \\overline{E_đ}', description: 'Áp suất khí theo mật độ phân tử và động năng trung bình' },
              { expression: 'T = \\frac{2 \\overline{E_đ}}{3 k}', description: 'Ý nghĩa nhiệt động lực học của nhiệt độ' },
            ],
            usage_note: 'Khối lượng mol M bắt buộc phải đổi sang đơn vị SI chuẩn là kg/mol (ví dụ N2 có M = 28 g/mol = 0,028 kg/mol).',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính động năng trung bình và tốc độ căn quân phương của phân tử khí Heli',
            difficulty: 'van_dung_cao',
            problem_statement:
              'Khí Heli (He, khối lượng mol M = 4 g/mol = 0,004 kg/mol) ở nhiệt độ phòng 27 °C. Cho hằng số Boltzmann k = 1,38·10^-23 J/K và hằng số khí R = 8,314 J/(mol·K). Tính: a) Động năng tịnh tiến trung bình của một phân tử Heli; b) Tốc độ căn quân phương của phân tử Heli.',
            given_summary: 't = 27 °C => T = 300 K; M = 0,004 kg/mol; k = 1,38·10^-23 J/K; R = 8,314 J/(mol·K)',
            solution_steps: [
              'Bước 1: Tính động năng tịnh tiến trung bình: E_đ = (3/2)·k·T = 1,5 · 1,38·10^-23 · 300 = 6,21·10^-21 J.',
              'Bước 2: Tính tốc độ căn quân phương v_rms theo công thức: v_rms = √(3·R·T / M).',
              'Bước 3: Thay số: v_rms = √(3 · 8,314 · 300 / 0,004) = √(7482,6 / 0,004) = √(1 870 650) ≈ 1367,7 m/s.',
            ],
            final_answer: 'a) E_đ = 6,21·10^-21 J; b) v_rms ≈ 1368 m/s.',
          },
        ],
        simulation: {
          sim_key: 'g12_kinetic_gas_maxwell_lab',
          title: 'Phòng thí nghiệm Phân bố Tốc độ Phân tử Maxwell - Boltzmann',
          description:
            'Quan sát đường cong phân bố vận tốc phân tử, thay đổi nhiệt độ để thấy đỉnh đường cong dịch chuyển sang phải và trải rộng khi chất khí nóng lên.',
          parameters: {
            gasMolecularMassG: 28,
            temperatureK: 300,
            histogramBins: 30,
          },
          guide_steps: [
            'Bước 1: Chọn khí Nitơ ở 300 K và quan sát đỉnh phân bố vận tốc (tốc độ có xác suất cao nhất) ở khoảng 420 m/s.',
            'Bước 2: Tăng nhiệt độ lên 800 K: đường cong dẹt xuống và đỉnh dịch dần về bên phải tốc độ cao hơn.',
            'Bước 3: Chuyển đổi sang khí Heli nhẹ hơn (M = 4) để thấy tốc độ phân tử tăng vọt lên trên 1300 m/s.',
          ],
          physics_insight:
            'Nhiệt độ chính là thước đo độ rộng và vị trí trung tâm của hàm phân bố tốc độ phân tử theo định luật thống kê Maxwell - Boltzmann.',
        },
      },
    ],
  },
  {
    order_index: 3,
    code: 'G12-CH3',
    title: 'Chương 3: Từ trường và Cảm ứng điện từ',
    description:
      'Cảm ứng từ B, lực từ Ampère tác dụng lên đoạn dây dẫn mang dòng điện, quy tắc bàn tay trái, cảm ứng từ của dòng điện thẳng và ống dây hình trụ, từ thông, Định luật cảm ứng điện từ Faraday, định luật Lenz, hiện tượng tự cảm, năng lượng từ trường trong cuộn cảm, đại cương dòng điện xoay chiều, các giá trị hiệu dụng và ứng dụng truyền tải điện năng.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 3: Từ trường và Cảm ứng điện từ
1. **Từ trường và Lực từ Ampère:**
   - **Từ trường** là một dạng vật chất tồn tại xung quanh hạt mang điện chuyển động (hoặc dòng điện, nam châm), biểu hiện qua lực từ tác dụng lên dòng điện hoặc nam châm khác đặt trong nó.
   - **Véc-tơ cảm ứng từ $\\vec{B}$:** Đặc trưng cho từ trường về phương diện tác dụng lực. Đơn vị trong hệ SI là **Tesla ($\\text{T}$)**.
   - **Lực từ Ampère tác dụng lên đoạn dây dẫn thẳng:**
     $$F = I L B \\sin\\theta$$
     với $\\theta = (\\vec{B}, \\vec{I})$.
   - **Quy tắc bàn tay trái xác định chiều lực từ:** Đặt bàn tay trái xòe rộng sao cho các đường sức từ $\\vec{B}$ hướng đâm vào lòng bàn tay, chiều từ cổ tay đến ngón tay giữa chỉ chiều dòng điện $I$, khi đó ngón tay cái choãi ra $90^\\circ$ chỉ chiều của lực từ $\\vec{F}$.
   - **Từ trường của một số dòng điện đặc biệt:**
     - Dòng điện thẳng dài vô hạn: $B = 2 \\times 10^{-7} \\frac{I}{r}$.
     - Ống dây hình trụ dài: $B = 4\\pi \\times 10^{-7} n I = 4\\pi \\times 10^{-7} \\frac{N}{l} I$.
2. **Từ thông và Định luật cảm ứng điện từ Faraday:**
   - **Từ thông qua khung dây diện tích $S$ gồm $N$ vòng:**
     $$\\Phi = N B S \\cos\\alpha$$
     với $\\alpha = (\\vec{n}, \\vec{B})$ là góc giữa véc-tơ pháp tuyến $\\vec{n}$ của mặt phẳng khung dây và véc-tơ $\\vec{B}$. Đơn vị là **Vê-be ($\\text{Wb}$)**.
   - **Hiện tượng cảm ứng điện từ:** Mỗi khi từ thông qua mạch kín biến thiên thì trong mạch xuất hiện dòng điện cảm ứng. Hiện tượng chỉ tồn tại trong suốt thời gian từ thông biến thiên.
   - **Định luật Faraday:** Độ lớn suất điện động cảm ứng trong mạch kín tỉ lệ với tốc độ biến thiên của từ thông qua mạch:
     $$e_c = -\\frac{\\Delta \\Phi}{\\Delta t}$$
   - **Định luật Lenz về chiều dòng điện cảm ứng:** Dòng điện cảm ứng xuất hiện có chiều sao cho từ trường do nó sinh ra có tác dụng chống lại sự biến thiên của từ thông đã sinh ra nó.
3. **Hiện tượng tự cảm và Năng lượng từ trường:**
   - **Hiện tượng tự cảm:** Hiện tượng cảm ứng điện từ xảy ra trong chính mạch điện do sự biến thiên của cường độ dòng điện trong mạch đó gây ra.
   - **Độ tự cảm của ống dây:**
     $$L = 4\\pi \\times 10^{-7} \\frac{N^2}{l} S \\quad (\\text{H - Henry})$$
   - **Suất điện động tự cảm:**
     $$e_{tc} = -L \\frac{\\Delta i}{\\Delta t}$$
   - **Năng lượng từ trường tích lũy trong ống dây mang dòng điện:**
     $$W_B = \\frac{1}{2} L i^2 \\quad (\\text{J})$$
4. **Đại cương dòng điện xoay chiều:**
   - Dòng điện xoay chiều hình sin: $i = I_0 \\cos(\\omega t + \\varphi_i)$.
   - Điện áp xoay chiều: $u = U_0 \\cos(\\omega t + \\varphi_u)$.
   - **Giá trị hiệu dụng:** Được xây dựng dựa trên tác dụng nhiệt tương đương với dòng điện không đổi:
     $$I = \\frac{I_0}{\\sqrt{2}}; \\quad U = \\frac{U_0}{\\sqrt{2}}; \\quad E = \\frac{E_0}{\\sqrt{2}}$$
   - Công suất tiêu thụ trung bình của đoạn mạch: $\\mathcal{P} = U I \\cos\\varphi$ (với $\\varphi = \\varphi_u - \\varphi_i$ là độ lệch pha giữa điện áp và dòng điện).`,
    key_takeaways: [
      'Lực từ F = ILB·sinθ đạt giá trị cực đại khi dây dẫn vuông góc với đường cảm ứng từ (θ = 90°), và bằng 0 khi dây dẫn đặt song song với đường sức từ (θ = 0°).',
      'Góc α trong công thức từ thông Φ = NBS·cosα là góc hợp bởi véc-tơ cảm ứng từ B và véc-tơ pháp tuyến n (vuông góc với mặt phẳng khung dây).',
      'Quy tắc nắm tay phải xác định chiều từ trường của dòng điện; quy tắc bàn tay trái xác định chiều của lực từ Ampère.',
      'Suất điện động cảm ứng tỷ lệ thuận với tốc độ biến thiên của từ thông dΦ/dt, không phụ thuộc vào độ lớn tức thời của từ thông.',
      'Các thiết bị đo điện xoay chiều (ampe kế xoay chiều, vôn kế xoay chiều) luôn hiển thị GIÁ TRỊ HIỆU DỤNG, không phải giá trị cực đại.',
    ],
    formula_cheatsheet: [
      {
        name: 'Lực từ Ampère tác dụng lên đoạn dây dẫn',
        latex: 'F = I L B \\sin\\theta \\quad (\\theta = (\\vec{B}, \\vec{I}))',
        note: 'Quy tắc bàn tay trái: lòng bàn tay đón B, ngón giữa theo I, ngón cái chỉ F.',
      },
      {
        name: 'Từ thông và Định luật cảm ứng Faraday',
        latex: '\\Phi = N B S \\cos\\alpha; \\quad e_c = -\\frac{\\Delta \\Phi}{\\Delta t}',
        note: 'α là góc giữa B và pháp tuyến mặt phẳng khung dây n; 1 Wb = 1 T·m².',
      },
      {
        name: 'Độ tự cảm và Suất điện động tự cảm',
        latex: 'L = 4\\pi \\times 10^{-7} \\frac{N^2}{l} S; \\quad e_{tc} = -L \\frac{\\Delta i}{\\Delta t}',
        note: 'L đo bằng Henry (H); N: số vòng dây; l: chiều dài ống (m); S: diện tích tiết diện (m²).',
      },
      {
        name: 'Năng lượng từ trường tích lũy trong cuộn cảm',
        latex: 'W_B = \\frac{1}{2} L i^2',
        note: 'Đặc trưng cho năng lượng lưu trữ trong từ trường bên trong cuộn dây mang dòng điện i.',
      },
      {
        name: 'Giá trị hiệu dụng của dòng điện và điện áp xoay chiều',
        latex: 'I = \\frac{I_0}{\\sqrt{2}}; \\quad U = \\frac{U_0}{\\sqrt{2}}; \\quad \\mathcal{P} = U I \\cos\\varphi',
        note: 'Số chỉ của vôn kế và ampe kế xoay chiều chính là giá trị hiệu dụng U và I.',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'G12-CH3-TP1',
        title: 'Chủ đề 3.1: Từ trường, Cảm ứng từ & Lực từ Ampère',
        textbook_tags: ['KNTT Bài 14-16', 'CTST Bài 9-10', 'CD Bài 7'],
        overview:
          'Tìm hiểu bản chất của từ trường, véc-tơ cảm ứng từ B, quy tắc bàn tay trái và lực từ Ampère tác dụng lên đoạn dây dẫn mang dòng điện.',
        summary_note:
          'Từ trường là trường lực sinh ra bởi các hạt tích điện chuyển động. Lực từ Ampère tác dụng lên dòng điện vuông góc với cả phần tử dòng điện và véc-tơ cảm ứng từ theo quy tắc bàn tay trái.',
        theory_sections: [
          {
            heading: '1. Từ trường và Véc-tơ cảm ứng từ',
            content:
              'Từ trường là dạng vật chất bao quanh nam châm và dòng điện. Đường sức từ là những đường cong kín vẽ trong không gian sao cho tiếp tuyến tại mỗi điểm trùng với hướng của véc-tơ cảm ứng từ B tại điểm đó. Quy ước chiều đường sức từ: Vào cực Nam (S), Ra cực Bắc (N) đối với nam châm. Cảm ứng từ B tại một điểm đặc trưng cho độ mạnh yếu của từ trường tại điểm đó. Với dòng điện thẳng dài: B = 2·10^-7·(I / r). Với ống dây hình trụ dài: B = 4π·10^-7·n·I.',
            keyPoints: [
              'Từ trường là trường xoáy, các đường sức từ là những đường cong khép kín không có điểm đầu và điểm cuối.',
              'Đơn vị của cảm ứng từ là Tesla (T).',
              'Quy tắc nắm tay phải dùng để xác định chiều đường sức từ xung quanh dòng điện.',
            ],
            realWorldApplication:
              'Từ trường Trái Đất che chắn bão từ Mặt Trời bảo vệ sinh quyển, ứng dụng của nam châm điện trong rơ-le ngắt mạch tự động và cần cẩu phế liệu.',
          },
          {
            heading: '2. Lực từ Ampère tác dụng lên đoạn dây dẫn',
            content:
              'Một đoạn dây dẫn thẳng chiều dài L mang dòng điện I đặt trong từ trường đều B chịu tác dụng của lực từ Ampère có điểm đặt tại trung điểm của đoạn dây, phương vuông góc với mặt phẳng chứa đoạn dây và véc-tơ B, chiều tuân theo quy tắc bàn tay trái, và độ lớn tính bằng F = I·L·B·sinθ (θ là góc hợp bởi dây dẫn và đường sức từ). Lực từ đạt giá trị lớn nhất F_max = I·L·B khi dây dẫn vuông góc với B (θ = 90°), và bằng 0 khi dây dẫn đặt song song với B.',
            keyPoints: [
              'Công thức: F = I·L·B·sinθ.',
              'Quy tắc bàn tay trái: Đặt bàn tay trái hứng đường sức từ đâm vào lòng bàn tay, chiều từ cổ tay đến ngón giữa chỉ I, ngón cái choãi 90° chỉ F.',
              'Lực tương tác giữa hai dòng điện thẳng song song: cùng chiều thì hút nhau, ngược chiều thì đẩy nhau.',
            ],
            realWorldApplication:
              'Khung dây quay trong từ trường tạo nên nguyên lý vận hành của động cơ điện một chiều (DC motor) và loa điện động.',
          },
        ],
        quantities: [
          {
            name: 'Cảm ứng từ',
            symbol: 'B',
            si_unit: 'T (Tesla)',
            other_units: 'Gauss (G, 1 T = 10⁴ G)',
            measuring_device: 'Tesla kế (cảm biến hiệu ứng Hall)',
            description: 'Đại lượng véc-tơ đặc trưng cho độ mạnh yếu và hướng của từ trường.',
          },
          {
            name: 'Lực từ Ampère',
            symbol: 'F',
            si_unit: 'N (Newton)',
            other_units: 'mN, kN',
            measuring_device: 'Cân lực từ (Current balance), lực kế điện tử',
            description: 'Lực do từ trường tác dụng lên một đoạn dây dẫn có dòng điện chạy qua.',
          },
        ],
        formulas: [
          {
            name: 'Lực từ Ampère',
            latex_expression: 'F = I L B \\sin\\theta \\quad (\\theta = (\\vec{B}, \\vec{I}))',
            plain_expression: 'F = I * L * B * sin(theta)',
            variables: [
              { symbol: 'F', name: 'Độ lớn lực từ Ampère', unit: 'N' },
              { symbol: 'I', name: 'Cường độ dòng điện', unit: 'A' },
              { symbol: 'L', name: 'Chiều dài đoạn dây dẫn', unit: 'm' },
              { symbol: 'B', name: 'Độ lớn cảm ứng từ', unit: 'T' },
              { symbol: '\\theta', name: 'Góc giữa đoạn dây và véc-tơ cảm ứng từ', unit: 'độ hoặc radian' },
            ],
            derived_formulas: [
              { expression: 'B = \\frac{F}{I L \\sin\\theta}', description: 'Định nghĩa độ lớn cảm ứng từ từ phép đo lực từ' },
              { expression: 'F_{\\text{max}} = I L B', description: 'Lực từ cực đại khi dây dẫn vuông góc với từ trường' },
            ],
            usage_note: 'Đoạn dây dẫn phải thẳng và nằm trọn trong vùng từ trường đều; chú ý chuyển đổi chiều dài L từ cm sang m.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính lực từ Ampère tác dụng lên đoạn dây dẫn',
            difficulty: 'thong_hieu',
            problem_statement:
              'Một đoạn dây dẫn thẳng dài 20 cm mang dòng điện không đổi 5 A được đặt trong từ trường đều có cảm ứng từ B = 0,08 T. Dây dẫn hợp với các đường sức từ một góc 30°. Xác định phương, chiều và độ lớn của lực từ Ampère tác dụng lên đoạn dây.',
            given_summary: 'L = 20 cm = 0,2 m; I = 5 A; B = 0,08 T; θ = 30°',
            solution_steps: [
              'Bước 1: Chuyển đổi chiều dài dây dẫn sang đơn vị chuẩn SI: L = 20 cm = 0,2 m.',
              'Bước 2: Áp dụng công thức lực từ Ampère: F = I·L·B·sinθ.',
              'Bước 3: Thay số vào biểu thức: F = 5 · 0,2 · 0,08 · sin(30°) = 1 · 0,08 · 0,5 = 0,04 N.',
              'Bước 4: Phương vuông góc với mặt phẳng chứa dây dẫn và đường sức từ, chiều xác định theo quy tắc bàn tay trái.',
            ],
            final_answer: 'Độ lớn lực từ F = 0,04 N; chiều tuân theo quy tắc bàn tay trái.',
          },
        ],
        simulation: {
          sim_key: 'g12_ampere_left_hand_lab',
          title: 'Phòng thí nghiệm Lực Từ Ampère & Bàn Tay Trái 3D',
          description:
            'Tương tác xoay 3D hướng từ trường B, đảo chiều dòng điện I để thấy véc-tơ lực từ F nhảy theo đúng quy tắc bàn tay trái.',
          parameters: {
            currentAmps: 5.0,
            wireLengthM: 0.2,
            magneticFieldT: 0.1,
            angleDeg: 90,
          },
          guide_steps: [
            'Bước 1: Kéo thanh trượt đổi góc θ từ 0° lên 90° để quan sát lực từ F tăng từ 0 đến cực đại.',
            'Bước 2: Bấm nút "Đảo chiều dòng điện" để thấy lực từ F lật ngược chiều 180° ngay tức khắc.',
            'Bước 3: Khớp bàn tay trái ảo vào màn hình để ghi nhớ tư thế hứng B và chỉ ngón tay cái theo F.',
          ],
          physics_insight:
            'Lực từ luôn có phương vuông góc với mặt phẳng chứa đoạn dòng điện và đường sức từ, do đó lực từ không bao giờ thực hiện công làm tăng động năng của hạt điện tích điểm cô lập.',
        },
      },
      {
        order_index: 2,
        code: 'G12-CH3-TP2',
        title: 'Chủ đề 3.2: Từ thông, Định luật Faraday & Hiện tượng tự cảm',
        textbook_tags: ['KNTT Bài 17-19', 'CTST Bài 11-12', 'CD Bài 8'],
        overview:
          'Khám phá hiện tượng cảm ứng điện từ - nền móng của cuộc cách mạng điện khí hóa: từ thông, định luật Faraday, định luật Lenz, hiện tượng tự cảm và năng lượng từ trường.',
        summary_note:
          'Sự biến thiên từ thông sinh ra suất điện động cảm ứng ec = -dΦ/dt. Hiện tượng tự cảm là trường hợp riêng sinh ra do dòng điện của chính mạch biến thiên, tạo quán tính điện từ tích lũy năng lượng WB = 0,5·L·i².',
        theory_sections: [
          {
            heading: '1. Từ thông và Định luật cảm ứng điện từ Faraday',
            content:
              'Từ thông Φ gửi qua khung dây diện tích S là đại lượng đo số đường sức từ xuyên qua mặt phẳng khung dây: Φ = N·B·S·cosα, trong đó α là góc giữa véc-tơ pháp tuyến mặt phẳng khung n và véc-tơ cảm ứng từ B. Đơn vị của từ thông là Vê-be (Wb). Khi từ thông biến thiên theo thời gian, trong khung dây xuất hiện suất điện động cảm ứng: ec = -ΔΦ / Δt. Chiều của dòng điện cảm ứng tuân theo Định luật Lenz: chống lại nguyên nhân đã sinh ra nó (nếu từ thông tăng, từ trường cảm ứng sẽ ngược chiều B ngoài để cản lại sự tăng; nếu từ thông giảm, từ trường cảm ứng sẽ cùng chiều B ngoài để bù đắp).',
            keyPoints: [
              'Từ thông đạt cực đại Φ_max = N·B·S khi các đường sức từ vuông góc với mặt phẳng khung (α = 0°).',
              'Dấu trừ trong công thức định luật Faraday thể hiện nội dung của định luật Lenz.',
              'Nếu mạch có điện trở R thì cường độ dòng điện cảm ứng là ic = ec / R.',
            ],
            realWorldApplication:
              'Bếp từ gia đình tạo dòng điện xoay chiều tần số cao làm biến thiên từ trường, sinh dòng điện xoáy Foucault cảm ứng trực tiếp dưới đáy nồi sắt làm sôi nước siêu tốc.',
          },
          {
            heading: '2. Hiện tượng tự cảm và Năng lượng từ trường',
            content:
              'Khi cường độ dòng điện trong cuộn dây biến thiên, từ thông do chính dòng điện đó gửi qua cuộn dây cũng biến thiên (Φ = L·i), dẫn đến xuất hiện suất điện động tự cảm: etc = -L·(Δi / Δt). Độ tự cảm L phụ thuộc vào kích thước, số vòng dây và lõi sắt từ: L = 4π·10^-7·(N² / l)·S. Độ tự cảm L đóng vai trò như "quán tính điện" của mạch, cản trở sự tăng đột ngột hoặc giảm đột ngột của dòng điện. Năng lượng từ trường dự trữ trong cuộn cảm khi có dòng điện i chạy qua là: W_B = (1/2)·L·i².',
            keyPoints: [
              'Độ tự cảm L có đơn vị là Henry (H).',
              'Khi ngắt mạch đột ngột dòng điện qua cuộn dây lớn, hiện tượng tự cảm có thể phóng tia lửa điện nguy hiểm tại công tắc.',
              'Năng lượng từ trường W_B = 0,5·L·i² lưu trữ trực tiếp trong không gian có từ trường của cuộn cảm.',
            ],
            realWorldApplication:
              'Cuộn cảm trong mạch lọc nguồn điện tử, biến áp đánh lửa bugi trong xe máy và xe ô tô.',
          },
        ],
        quantities: [
          {
            name: 'Từ thông',
            symbol: 'Φ',
            si_unit: 'Wb (Weber = T·m²)',
            other_units: 'Maxwell (Mx, 1 Wb = 10⁸ Mx)',
            measuring_device: 'Fluxmeter (từ thông kế tích phân điện áp)',
            description: 'Số lượng đường sức từ xuyên qua một diện tích bề mặt kín.',
          },
          {
            name: 'Độ tự cảm',
            symbol: 'L',
            si_unit: 'H (Henry)',
            other_units: 'mH, µH',
            measuring_device: 'Cầu đo RLC, đồng hồ đo LCR chuyên dụng',
            description: 'Đặc trưng cho khả năng tích trữ năng lượng từ trường và cản trở biến thiên dòng điện của cuộn cảm.',
          },
          {
            name: 'Suất điện động cảm ứng',
            symbol: 'ec',
            si_unit: 'V (Volt)',
            other_units: 'mV, kV',
            measuring_device: 'Dao động ký điện tử (Oscilloscope), vôn kế hiện số',
            description: 'Điện áp cảm ứng sinh ra do tốc độ biến thiên của từ thông qua mạch kín.',
          },
        ],
        formulas: [
          {
            name: 'Định luật cảm ứng Faraday và Suất điện động tự cảm',
            latex_expression: 'e_c = -\\frac{\\Delta \\Phi}{\\Delta t}; \\quad e_{tc} = -L \\frac{\\Delta i}{\\Delta t}; \\quad W_B = \\frac{1}{2} L i^2',
            plain_expression: 'ec = -deltaPhi / deltat; etc = -L * deltai / deltat; WB = 0.5 * L * i^2',
            variables: [
              { symbol: 'e_c', name: 'Suất điện động cảm ứng', unit: 'V' },
              { symbol: '\\Phi', name: 'Từ thông qua mạch', unit: 'Wb' },
              { symbol: 't', name: 'Thời gian', unit: 's' },
              { symbol: 'L', name: 'Độ tự cảm của cuộn dây', unit: 'H' },
              { symbol: 'i', name: 'Cường độ dòng điện qua cuộn dây', unit: 'A' },
              { symbol: 'W_B', name: 'Năng lượng từ trường', unit: 'J' },
            ],
            derived_formulas: [
              { expression: 'i_c = \\frac{|e_c|}{R} = \\frac{1}{R} \\left| \\frac{\\Delta \\Phi}{\\Delta t} \\right|', description: 'Cường độ dòng điện cảm ứng qua mạch kín điện trở R' },
              { expression: 'L = 4\\pi \\times 10^{-7} \\frac{N^2}{l} S', description: 'Công thức tính độ tự cảm của ống dây thẳng dài hình trụ' },
            ],
            usage_note: 'Khi tính độ lớn suất điện động thì lấy trị tuyệt đối |ec| = |ΔΦ/Δt|; lưu ý góc α giữa véc-tơ cảm ứng từ B và pháp tuyến n.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính suất điện động cảm ứng trong khung dây tròn',
            difficulty: 'van_dung',
            problem_statement:
              'Một khung dây dẫn phẳng gồm 200 vòng dây, mỗi vòng có diện tích 25 cm². Khung dây được đặt trong từ trường đều vuông góc với mặt phẳng khung. Trong khoảng thời gian 0,05 s, cảm ứng từ giảm đều đặn từ 0,6 T về 0,1 T. Tính độ lớn suất điện động cảm ứng xuất hiện trong khung dây.',
            given_summary: 'N = 200; S = 25 cm² = 25·10^-4 m²; α = 0°; Δt = 0,05 s; B1 = 0,6 T; B2 = 0,1 T',
            solution_steps: [
              'Bước 1: Vì từ trường vuông góc với mặt phẳng khung nên véc-tơ B song song với pháp tuyến n, suy ra α = 0° và cosα = 1.',
              'Bước 2: Độ biến thiên cảm ứng từ: ΔB = B2 - B1 = 0,1 - 0,6 = -0,5 T.',
              'Bước 3: Độ biến thiên từ thông qua toàn bộ cuộn dây: ΔΦ = N · ΔB · S · cosα = 200 · (-0,5) · (25·10^-4) · 1 = -0,25 Wb.',
              'Bước 4: Áp dụng định luật Faraday: |ec| = |ΔΦ / Δt| = |-0,25| / 0,05 = 5 V.',
            ],
            final_answer: 'Độ lớn suất điện động cảm ứng trong khung dây là |ec| = 5 V.',
          },
        ],
        simulation: {
          sim_key: 'g12_faraday_self_inductance_lab',
          title: 'Phòng thí nghiệm Cảm Ứng Faraday & Cuộn Cảm',
          description:
            'Kéo nam châm xuyên qua cuộn dây nhiều vòng, theo dõi kim điện kế lệch và bóng đèn phát sáng theo định luật Faraday và Lenz.',
          parameters: {
            coilTurns: 200,
            magnetSpeed: 1.5,
            coreType: 'iron',
            resistanceOhms: 10,
          },
          guide_steps: [
            'Bước 1: Đẩy cực Bắc của thanh nam châm lại gần cuộn dây: kim điện kế lệch sang phải chứng tỏ có dòng điện cảm ứng chống lại sự tăng từ thông.',
            'Bước 2: Giữ nam châm đứng yên bên trong cuộn dây: kim điện kế lập tức chỉ về số 0 vì từ thông không biến thiên (ΔΦ/Δt = 0).',
            'Bước 3: Rút nam châm ra xa thật nhanh: kim điện kế lệch sang trái chứng minh dòng điện đảo chiều để chống lại sự suy giảm từ thông.',
          ],
          physics_insight:
            'Chỉ có sự biến thiên từ thông theo thời gian mới sinh ra suất điện động cảm ứng. Tốc độ dịch chuyển càng nhanh, điện áp sinh ra càng lớn.',
        },
      },
      {
        order_index: 3,
        code: 'G12-CH3-TP3',
        title: 'Chủ đề 3.3: Đại cương dòng điện xoay chiều & Ứng dụng',
        textbook_tags: ['KNTT Bài 20-21', 'CTST Bài 13', 'CD Bài 9'],
        overview:
          'Tìm hiểu nguyên tắc tạo ra dòng điện xoay chiều hình sin bằng hiện tượng cảm ứng điện từ, ý nghĩa vật lý của giá trị hiệu dụng, công suất điện xoay chiều và máy biến áp.',
        summary_note:
          'Dòng điện xoay chiều biến thiên tuần hoàn theo hàm sin hoặc cosin theo thời gian. Giá trị hiệu dụng phản ánh tác dụng nhiệt tương đương của dòng xoay chiều so với dòng không đổi: I = I0 / √2; U = U0 / √2.',
        theory_sections: [
          {
            heading: '1. Nguyên tắc tạo dòng điện xoay chiều và Phương trình hình sin',
            content:
              'Cho một khung dây kín quay đều với tốc độ góc ω quanh một trục cố định vuông góc với các đường sức của một từ trường đều B. Từ thông qua khung dây biến thiên điều hòa: Φ = N·B·S·cos(ωt + φ). Theo định luật Faraday, trong khung xuất hiện suất điện động cảm ứng xoay chiều hình sin: e = -dΦ/dt = E0·sin(ωt + φ) = E0·cos(ωt + φ - π/2) với E0 = N·B·S·ω. Khi nối khung dây với mạch ngoài tiêu thụ, trong mạch xuất hiện dòng điện xoay chiều hình sin: i = I0·cos(ωt + φ_i).',
            keyPoints: [
              'Suất điện động cực đại: E0 = ω·N·B·S = ω·Φ0.',
              'Suất điện động cảm ứng e luôn biến thiên chậm pha π/2 so với từ thông Φ.',
              'Tần số lưới điện sinh hoạt tại Việt Nam là f = 50 Hz, tương ứng chu kỳ T = 0,02 s và tốc độ góc ω = 100π rad/s.',
            ],
            realWorldApplication:
              'Tổ máy phát điện tại các nhà máy thủy điện Hòa Bình, Sơn La và các tuabin điện gió ngoài khơi.',
          },
          {
            heading: '2. Giá trị hiệu dụng và Công suất của dòng điện xoay chiều',
            content:
              'Cường độ hiệu dụng của dòng điện xoay chiều là đại lượng có giá trị bằng cường độ của một dòng điện không đổi sao cho khi cả hai cùng chạy qua một điện trở R trong cùng một khoảng thời gian thì nhiệt lượng tỏa ra là hoàn toàn như nhau: Q = I²·R·t = (I0² / 2)·R·t, suy ra I = I0 / √2 ≈ 0,707·I0. Tương tự, điện áp hiệu dụng: U = U0 / √2. Công suất tiêu thụ trung bình của dòng điện xoay chiều trên đoạn mạch có hệ số công suất cosφ là: P = U·I·cosφ.',
            keyPoints: [
              'Giá trị hiệu dụng: I = I0 / √2; U = U0 / √2.',
              'Điện áp hiệu dụng mạng điện gia đình Việt Nam là U = 220 V, tương ứng điện áp cực đại U0 = 220√2 ≈ 311 V.',
              'Hệ số công suất cosφ (0 <= cosφ <= 1) phản ánh hiệu quả sử dụng năng lượng điện của thiết bị tải.',
            ],
            realWorldApplication:
              'Máy biến áp truyền tải điện năng đi xa: nâng điện áp lên 500 kV để giảm hao phí truyền tải theo tỉ lệ bình phương (P_hp tỉ lệ với 1/U²).',
          },
        ],
        quantities: [
          {
            name: 'Điện áp hiệu dụng',
            symbol: 'U',
            si_unit: 'V (Volt)',
            other_units: 'kV, mV',
            measuring_device: 'Vôn kế xoay chiều (AC Voltmeter), đồng hồ vạn năng DMM',
            description: 'Giá trị tương đương tác dụng nhiệt của điện áp xoay chiều (U = U0 / √2).',
          },
          {
            name: 'Cường độ dòng điện hiệu dụng',
            symbol: 'I',
            si_unit: 'A (Ampe)',
            other_units: 'mA, kA',
            measuring_device: 'Ampe kế xoay chiều (AC Ammeter), ampe kìm',
            description: 'Giá trị tương đương tác dụng nhiệt của cường độ dòng điện xoay chiều (I = I0 / √2).',
          },
          {
            name: 'Công suất tiêu thụ trung bình',
            symbol: 'P',
            si_unit: 'W (Watt)',
            other_units: 'kW, MW',
            measuring_device: 'Oát kế xoay chiều (Wattmeter), công tơ điện tử',
            description: 'Tốc độ tiêu thụ năng lượng điện trung bình trong một chu kỳ (P = U·I·cosφ).',
          },
        ],
        formulas: [
          {
            name: 'Giá trị hiệu dụng và Công suất xoay chiều',
            latex_expression: 'I = \\frac{I_0}{\\sqrt{2}}; \\quad U = \\frac{U_0}{\\sqrt{2}}; \\quad \\mathcal{P} = U I \\cos\\varphi; \\quad Q = I^2 R t',
            plain_expression: 'I = I0 / sqrt(2); U = U0 / sqrt(2); P = U * I * cos(phi); Q = I^2 * R * t',
            variables: [
              { symbol: 'I, I_0', name: 'Cường độ hiệu dụng và cực đại', unit: 'A' },
              { symbol: 'U, U_0', name: 'Điện áp hiệu dụng và cực đại', unit: 'V' },
              { symbol: '\\mathcal{P}', name: 'Công suất tiêu thụ trung bình', unit: 'W' },
              { symbol: '\\cos\\varphi', name: 'Hệ số công suất của đoạn mạch', unit: 'không thứ nguyên' },
              { symbol: 'Q', name: 'Nhiệt lượng tỏa ra trên điện trở R', unit: 'J' },
            ],
            derived_formulas: [
              { expression: 'U_0 = U \\sqrt{2}', description: 'Tính điện áp đỉnh (cực đại) từ điện áp hiệu dụng' },
              { expression: '\\mathcal{P}_{hp} = R \\frac{\\mathcal{P}^2}{U^2 \\cos^2\\varphi}', description: 'Công suất hao phí tỏa nhiệt trên đường dây truyền tải điện năng' },
            ],
            usage_note: 'Khi tính nhiệt lượng tỏa ra Q = I²Rt hoặc công suất P, luôn luôn bắt buộc dùng giá trị hiệu dụng I và U, không được dùng giá trị cực đại I0, U0.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính các thông số hiệu dụng và nhiệt lượng của dòng điện xoay chiều',
            difficulty: 'thong_hieu',
            problem_statement:
              'Cho biểu thức cường độ dòng điện xoay chiều chạy qua một bếp điện trở R = 40 Ω là: i = 2,82·cos(100πt) A (lấy 2,82 ≈ 2√2). Hãy xác định: a) Cường độ dòng điện cực đại và cường độ hiệu dụng; b) Tần số của dòng điện; c) Nhiệt lượng bếp điện tỏa ra trong thời gian 10 phút.',
            given_summary: 'i = 2√2·cos(100πt) A; R = 40 Ω; t = 10 phút = 600 s',
            solution_steps: [
              'Bước 1: Từ phương trình, cường độ cực đại I0 = 2√2 A ≈ 2,82 A.',
              'Bước 2: Cường độ dòng điện hiệu dụng: I = I0 / √2 = (2√2) / √2 = 2 A.',
              'Bước 3: Tốc độ góc ω = 100π rad/s, suy ra tần số: f = ω / (2π) = (100π) / (2π) = 50 Hz.',
              'Bước 4: Nhiệt lượng tỏa ra tính theo định luật Joule - Lenz: Q = I² · R · t = 2² · 40 · 600 = 4 · 40 · 600 = 96 000 J = 96 kJ.',
            ],
            final_answer: 'a) I0 = 2,82 A, I = 2 A; b) f = 50 Hz; c) Nhiệt lượng Q = 96 000 J (96 kJ).',
          },
        ],
        simulation: {
          sim_key: 'g12_ac_generator_power_lab',
          title: 'Phòng thí nghiệm Máy Phát Điện & Sóng Xoay Chiều AC',
          description:
            'Quay khung dây trong từ trường, xem dạng sóng điện áp trên màn hình dao động ký, điều chỉnh điện trở và xem đồ thị công suất tức thời p(t).',
          parameters: {
            frequencyHz: 50,
            peakVoltageV: 311,
            loadResistorOhms: 100,
            phaseShiftDeg: 0,
          },
          guide_steps: [
            'Bước 1: Tăng tốc độ quay của tuabin để thấy cả tần số sóng và biên độ điện áp đỉnh U0 tăng tỉ lệ thuận.',
            'Bước 2: Bật hiển thị vạch đo RMS (hiệu dụng) để so sánh đường thẳng 220 V nằm dưới đỉnh sin 311 V.',
            'Bước 3: Tải bóng đèn sợi đốt để kiểm chứng nhiệt lượng tỏa ra bằng đúng tác dụng của dòng DC 2,2 A.',
          ],
          physics_insight:
            'Dòng xoay chiều đổi chiều liên tục 100 lần trong mỗi giây (f = 50 Hz), nhưng nhiệt lượng tỏa ra trên điện trở là liên tục và luôn dương.',
        },
      },
    ],
  },
  {
    order_index: 4,
    code: 'G12-CH4',
    title: 'Chương 4: Vật lý Hạt nhân và Phóng xạ',
    description:
      'Cấu tạo hạt nhân nguyên tử (proton, neutron, nucleon), đồng vị, độ hụt khối Δm, năng lượng liên kết Elk và năng lượng liên kết riêng ε, các định luật bảo toàn trong phản ứng hạt nhân, năng lượng phản ứng hạt nhân tỏa/thu, hiện tượng phóng xạ tự nhiên (alpha, beta, gamma), định luật phóng xạ, chu kỳ bán rã T, độ phóng xạ H, phản ứng phân hạch urani và phản ứng nhiệt hạch.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 4: Vật lý Hạt nhân và Phóng xạ
1. **Cấu tạo hạt nhân, Độ hụt khối và Năng lượng liên kết:**
   - Ký hiệu hạt nhân: $^{A}_{Z}\\text{X}$, gồm $Z$ proton (số điện tích) và $N = A - Z$ neutron. Tổng số hạt $A$ gọi là **số khối** (hoặc số nucleon).
   - Đơn vị khối lượng nguyên tử: $1\\,\\text{u} = \\frac{1}{12} m(^{12}_{6}\\text{C}) \\approx 1,66055 \\times 10^{-27}\\,\\text{kg} \\approx 931,5\\,\\text{MeV}/c^2$.
   - **Độ hụt khối ($\\Delta m$):** Khối lượng của một hạt nhân luôn nhỏ hơn tổng khối lượng của các nucleon riêng rẽ cấu tạo nên hạt nhân đó:
     $$\\Delta m = [Z m_p + (A - Z) m_n] - m_X > 0$$
   - **Năng lượng liên kết ($E_{lk}$):** Năng lượng cần cung cấp để tách hạt nhân thành các nucleon riêng rẽ (theo hệ thức Einstein $E = mc^2$):
     $$E_{lk} = \\Delta m \\cdot c^2 = \\Delta m(\\text{u}) \\times 931,5\\,\\text{MeV}$$
   - **Năng lượng liên kết riêng ($\\varepsilon$):** Năng lượng liên kết tính trên một nucleon:
     $$\\varepsilon = \\frac{E_{lk}}{A} \\quad (\\text{MeV/nucleon})$$
     $\\varepsilon$ đặc trưng cho mức độ **bền vững** của hạt nhân. Các hạt nhân có số khối trung bình $50 < A < 70$ (như sắt $^{56}_{26}\\text{Fe}$) là bền vững nhất ($\\varepsilon \\approx 8,8\\,\\text{MeV/nucleon}$).
2. **Phản ứng hạt nhân và Các định luật bảo toàn:**
   - Phản ứng hạt nhân: Quá trình tương tác làm biến đổi các hạt nhân: $A + B \\rightarrow C + D$.
   - **4 Định luật bảo toàn nghiêm ngặt:**
     1. Bảo toàn **số khối $A$**: $A_A + A_B = A_C + A_D$.
     2. Bảo toàn **điện tích $Z$**: $Z_A + Z_B = Z_C + Z_D$.
     3. Bảo toàn **động lượng**: $\\vec{p}_A + \\vec{p}_B = \\vec{p}_C + \\vec{p}_D$.
     4. Bảo toàn **năng lượng toàn phần**: $K_A + K_B + m_A c^2 + m_B c^2 = K_C + K_D + m_C c^2 + m_D c^2$.
     *(Lưu ý: Không có định luật bảo toàn khối lượng nghỉ và không có định luật bảo toàn số neutron!)*
   - **Năng lượng phản ứng hạt nhân ($Q$):**
     $$Q = (m_{\\text{trước}} - m_{\\text{sau}}) c^2 = \\sum E_{lk,\\text{sau}} - \\sum E_{lk,\\text{trước}} = \\sum K_{\\text{sau}} - \\sum K_{\\text{trước}}$$
     - $Q > 0$: Phản ứng **tỏa năng lượng**.
     - $Q < 0$: Phản ứng **thu năng lượng**.
3. **Hiện tượng phóng xạ và Định luật phóng xạ:**
   - **Phóng xạ:** Quá trình tự phân rã của hạt nhân không bền vững phát ra các tia phóng xạ và biến đổi thành hạt nhân khác.
   - Các loại tia phóng xạ:
     - Tia $\\alpha$ (dòng hạt $^{4}_{2}\\text{He}$): Ion hóa rất mạnh, xuyên kém (tờ giấy mỏng cản được).
     - Tia $\\beta^-$ (dòng electron $^{0}_{-1}\\text{e}$) và $\\beta^+$ (dòng positron $^{0}_{+1}\\text{e}$): Tốc độ xấp xỉ vận tốc ánh sáng, xuyên qua vài mm nhôm.
     - Tia $\\gamma$ (sóng điện từ bước sóng cực ngắn): Khả năng đâm xuyên cực mạnh, cần lớp chì dày hàng chục cm để cản bớt.
   - **Định luật phóng xạ:** Số lượng hạt nhân chưa phân rã giảm theo quy luật hàm số mũ của thời gian:
     $$N(t) = N_0 2^{-\\frac{t}{T}} = N_0 e^{-\\lambda t}; \\quad m(t) = m_0 2^{-\\frac{t}{T}} = m_0 e^{-\\lambda t}$$
     với $\\lambda = \\frac{\\ln 2}{T} \\approx \\frac{0,693}{T}$ là hằng số phóng xạ, $T$ là chu kỳ bán rã.
   - **Độ phóng xạ ($H$):** Số phân rã trong một giây: $H(t) = \\lambda N(t) = H_0 2^{-t/T}$. Đơn vị là **Becquerel ($\\text{Bq}$)** ($1\\,\\text{Ci} = 3,7 \\times 10^{10}\\,\\text{Bq}$).`,
    key_takeaways: [
      'Năng lượng liên kết riêng ε = Elk / A quyết định độ bền vững của hạt nhân, KHÔNG PHẢI năng lượng liên kết toàn phần Elk.',
      'Trong phản ứng hạt nhân, luôn tuân theo 4 định luật bảo toàn: số khối A, điện tích Z, động lượng p và năng lượng toàn phần. Tuyệt đối KHÔNG BẢO TOÀN khối lượng nghỉ!',
      'Chu kỳ bán rã T là đặc trưng riêng cho từng chất phóng xạ, hoàn toàn KHÔNG PHỤ THUỘC vào nhiệt độ, áp suất, trạng thái hóa học hay môi trường xung quanh.',
      'Sau k chu kỳ bán rã (t = k·T), số hạt nhân còn lại giảm đi 2^k lần (ví dụ sau 3T còn lại 1/8 = 12,5%, đã phân rã 87,5%).',
      'Phản ứng phân hạch giải phóng năng lượng lớn (khoảng 200 MeV mỗi phân hạch urani); phản ứng nhiệt hạch giải phóng năng lượng tính trên 1 nucleon lớn gấp nhiều lần phân hạch.',
    ],
    formula_cheatsheet: [
      {
        name: 'Độ hụt khối và Năng lượng liên kết hạt nhân',
        latex: '\\Delta m = [Z m_p + (A - Z) m_n] - m_X; \\quad E_{lk} = \\Delta m \\cdot c^2 = \\Delta m(\\text{u}) \\times 931,5\\,\\text{MeV}',
        note: 'mp ≈ 1,00728 u; mn ≈ 1,00866 u; 1 u·c² ≈ 931,5 MeV.',
      },
      {
        name: 'Năng lượng liên kết riêng',
        latex: '\\varepsilon = \\frac{E_{lk}}{A} \\quad (\\text{MeV/nucleon})',
        note: 'Hạt nhân có ε càng lớn thì càng bền vững; cực đại ở vùng sắt Fe-56 (≈ 8,8 MeV/nucleon).',
      },
      {
        name: 'Năng lượng phản ứng hạt nhân',
        latex: 'Q = (m_{\\text{trước}} - m_{\\text{sau}}) c^2 = \\sum E_{lk,\\text{sau}} - \\sum E_{lk,\\text{trước}}',
        note: 'Q > 0 là phản ứng tỏa năng lượng; Q < 0 là phản ứng thu năng lượng.',
      },
      {
        name: 'Định luật phóng xạ theo số hạt và khối lượng',
        latex: 'N(t) = N_0 2^{-\\frac{t}{T}} = N_0 e^{-\\lambda t}; \\quad m(t) = m_0 2^{-\\frac{t}{T}}; \\quad \\lambda = \\frac{\\ln 2}{T}',
        note: 'T: chu kỳ bán rã; t: thời gian trôi qua (cùng đơn vị với T); λ: hằng số phóng xạ.',
      },
      {
        name: 'Độ phóng xạ',
        latex: 'H(t) = \\lambda N(t) = H_0 2^{-\\frac{t}{T}} \\quad (\\text{Bq})',
        note: '1 Bq = 1 phân rã/giây. Để tính H bằng Bq thì λ phải tính theo đơn vị s⁻¹.',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'G12-CH4-TP1',
        title: 'Chủ đề 4.1: Cấu tạo hạt nhân, Độ hụt khối & Năng lượng liên kết',
        textbook_tags: ['KNTT Bài 22-23', 'CTST Bài 14', 'CD Bài 10'],
        overview:
          'Khám phá cấu tạo nguyên tử ở tầng sâu nhất: hạt nhân, lực hạt nhân mạnh, sự hụt khối lượng kỳ diệu và năng lượng liên kết giữ các proton, neutron gắn kết với nhau.',
        summary_note:
          'Khối lượng hạt nhân luôn nhẹ hơn tổng khối lượng của các nucleon tự do: Δm = [Z·mp + (A-Z)·mn] - mX. Phần khối lượng biến mất chuyển hóa thành năng lượng liên kết theo hệ thức Elk = Δm·c².',
        theory_sections: [
          {
            heading: '1. Cấu tạo hạt nhân và Lực hạt nhân',
            content:
              'Hạt nhân nguyên tử được tạo thành từ các nucleon, gồm hai loại: proton (mang điện tích nguyên tố dương +e, khối lượng mp ≈ 1,00728 u) và neutron (không mang điện, khối lượng mn ≈ 1,00866 u). Ký hiệu hạt nhân là X với số khối A ở góc trên bên trái và số hiệu nguyên tử Z ở góc dưới bên trái: ^A_Z X. Bán kính hạt nhân tỉ lệ với căn bậc ba của số khối: R ≈ 1,2·10^-15 · A^(1/3) m. Lực hạt nhân là lực tương tác mạnh liên kết các nucleon trong hạt nhân, có bản chất phi điện từ, không phụ thuộc vào điện tích của nucleon và chỉ có tác dụng trong phạm vi kích thước hạt nhân (khoảng 10^-15 m = 1 fm).',
            keyPoints: [
              'Số hạt proton bằng số hiệu nguyên tử Z; số neutron là N = A - Z.',
              'Đồng vị là các nguyên tử có cùng số proton Z nhưng khác số neutron N (ví dụ Hydro có 1H, 2H Deuteri, 3H Triti).',
              'Lực hạt nhân là lực hút cực mạnh trong phạm vi 10^-15 m, thắng được lực đẩy tĩnh điện Coulomb giữa các proton.',
            ],
            realWorldApplication:
              'Ứng dụng đồng vị phóng xạ Carbon-14 trong định tuổi cổ vật khảo cổ học và Coban-60 trong xạ trị điều trị ung thư.',
          },
          {
            heading: '2. Độ hụt khối và Năng lượng liên kết riêng',
            content:
              'Khi các nucleon riêng rẽ kết hợp lại để tạo thành hạt nhân, một phần khối lượng bị mất đi gọi là độ hụt khối: Δm = [Z·mp + (A - Z)·mn] - m_X > 0. Năng lượng giải phóng khi tạo thành hạt nhân, cũng chính là năng lượng tối thiểu cần cung cấp để tách hạt nhân thành các nucleon riêng rẽ, gọi là năng lượng liên kết: Elk = Δm·c² = Δm(u) · 931,5 MeV. Để so sánh độ bền vững giữa các hạt nhân có số khối khác nhau, ta dùng năng lượng liên kết riêng: ε = Elk / A (MeV/nucleon). Hạt nhân có ε càng lớn thì càng bền vững; cực đại là các hạt nhân có số khối trong khoảng 50 - 70 như 56Fe (ε ≈ 8,8 MeV/nucleon).',
            keyPoints: [
              'Công thức độ hụt khối: Δm = Z·mp + (A - Z)·mn - mX.',
              'Công thức năng lượng liên kết: Elk = Δm · 931,5 MeV.',
              'Thước đo độ bền vững là năng lượng liên kết riêng: ε = Elk / A.',
              'Các hạt nhân nhẹ (A < 20) và các hạt nhân rất nặng (A > 200) đều kém bền vững hơn các hạt nhân ở vùng giữa.',
            ],
            realWorldApplication:
              'Giải thích nguyên lý giải phóng năng lượng: Hạt nhân nặng phân hạch thành hạt nhân trung bình hoặc hạt nhân nhẹ nhiệt hạch thành hạt nhân trung bình đều chuyển sang trạng thái có ε lớn hơn, giải phóng năng lượng khổng lồ.',
          },
        ],
        quantities: [
          {
            name: 'Độ hụt khối',
            symbol: 'Δm',
            si_unit: 'kg',
            other_units: 'u (đơn vị khối lượng nguyên tử, 1 u ≈ 1,66055·10⁻²⁷ kg)',
            measuring_device: 'Phổ kế khối lượng có độ phân giải cao',
            description: 'Chênh lệch giữa tổng khối lượng các nucleon riêng rẽ và khối lượng nghỉ của hạt nhân.',
          },
          {
            name: 'Năng lượng liên kết',
            symbol: 'Elk',
            si_unit: 'J (Joule)',
            other_units: 'MeV (1 MeV = 1,602·10⁻¹³ J)',
            measuring_device: 'Tính toán từ khối lượng thực nghiệm',
            description: 'Năng lượng cần cung cấp để phá vỡ hạt nhân thành các proton và neutron đứng yên riêng rẽ.',
          },
          {
            name: 'Năng lượng liên kết riêng',
            symbol: 'ε',
            si_unit: 'J/hạt',
            other_units: 'MeV/nucleon',
            measuring_device: 'Tính từ tỉ số Elk / A',
            description: 'Năng lượng liên kết trung bình tính cho mỗi nucleon, thước đo tuyệt đối của độ bền hạt nhân.',
          },
        ],
        formulas: [
          {
            name: 'Độ hụt khối và Năng lượng liên kết riêng',
            latex_expression: '\\Delta m = [Z m_p + (A - Z) m_n] - m_X; \\quad E_{lk} = \\Delta m \\cdot 931,5\\,\\text{MeV}; \\quad \\varepsilon = \\frac{E_{lk}}{A}',
            plain_expression: 'delta_m = Z * mp + (A - Z) * mn - mX; Elk = delta_m * 931.5; epsilon = Elk / A',
            variables: [
              { symbol: 'Z', name: 'Số hiệu nguyên tử (số proton)', unit: 'không thứ nguyên' },
              { symbol: 'A', name: 'Số khối (tổng số nucleon)', unit: 'không thứ nguyên' },
              { symbol: 'm_p', name: 'Khối lượng proton (1,00728 u)', unit: 'u' },
              { symbol: 'm_n', name: 'Khối lượng neutron (1,00866 u)', unit: 'u' },
              { symbol: 'm_X', name: 'Khối lượng hạt nhân X', unit: 'u' },
              { symbol: 'E_{lk}', name: 'Năng lượng liên kết', unit: 'MeV' },
              { symbol: '\\varepsilon', name: 'Năng lượng liên kết riêng', unit: 'MeV/nucleon' },
            ],
            derived_formulas: [
              { expression: 'm_X = [Z m_p + (A - Z) m_n] - \\frac{E_{lk}}{c^2}', description: 'Tính khối lượng hạt nhân khi biết năng lượng liên kết' },
              { expression: 'E_{lk} = A \\cdot \\varepsilon', description: 'Năng lượng liên kết tính từ năng lượng liên kết riêng' },
            ],
            usage_note: 'Khối lượng hạt nhân thường tính với độ chính xác cao đến 4-5 chữ số thập phân sau dấu phẩy (đơn vị u).',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính độ hụt khối và năng lượng liên kết riêng của hạt nhân Heli',
            difficulty: 'thong_hieu',
            problem_statement:
              'Cho khối lượng của hạt nhân Heli (^4_2He) là m_He = 4,0015 u; khối lượng proton mp = 1,00728 u; khối lượng neutron mn = 1,00866 u. Lấy 1 u = 931,5 MeV/c². Hãy tính: a) Độ hụt khối của hạt nhân Heli; b) Năng lượng liên kết của hạt nhân Heli; c) Năng lượng liên kết riêng của hạt nhân Heli.',
            given_summary: 'Hạt nhân ^4_2He: Z = 2, A = 4, N = 2; m_He = 4,0015 u; mp = 1,00728 u; mn = 1,00866 u',
            solution_steps: [
              'Bước 1: Tính tổng khối lượng các nucleon cấu tạo nên Heli: 2·mp + 2·mn = 2 · 1,00728 + 2 · 1,00866 = 2,01456 + 2,01732 = 4,03188 u.',
              'Bước 2: Tính độ hụt khối Δm = (2·mp + 2·mn) - m_He = 4,03188 - 4,0015 = 0,03038 u.',
              'Bước 3: Tính năng lượng liên kết: Elk = Δm · 931,5 = 0,03038 · 931,5 ≈ 28,299 MeV ≈ 28,3 MeV.',
              'Bước 4: Tính năng lượng liên kết riêng: ε = Elk / A = 28,299 / 4 ≈ 7,075 MeV/nucleon.',
            ],
            final_answer: 'a) Δm = 0,03038 u; b) Elk ≈ 28,30 MeV; c) ε ≈ 7,075 MeV/nucleon.',
          },
        ],
        simulation: {
          sim_key: 'g12_nuclear_binding_curve_lab',
          title: 'Phòng thí nghiệm Đường Cong Năng Lượng Liên Kết Riêng',
          description:
            'Tương tác trên biểu đồ Aston biểu diễn năng lượng liên kết riêng ε theo số khối A từ Hydrogen đến Uranium, bấm chọn từng nguyên tố để xem cấu tạo vi mô.',
          parameters: {
            selectedNucleus: 'Fe-56',
            comparisonNucleus: 'U-235',
            showStabilityLine: true,
          },
          guide_steps: [
            'Bước 1: Chọn hạt nhân Sắt (Fe-56) ở đỉnh đường cong để thấy giá trị ε cực đại đạt xấp xỉ 8,79 MeV/nucleon.',
            'Bước 2: Chọn hạt nhân Urani (U-235) ở nhánh bên phải: quan sát ε giảm xuống còn khoảng 7,59 MeV/nucleon.',
            'Bước 3: Nhấp vào nút "Mô phỏng Phân hạch" để thấy khi U-235 vỡ thành hai mảnh trung bình, ε nhảy vọt lên gần đỉnh sắt, giải phóng chênh lệch năng lượng khổng lồ.',
          ],
          physics_insight:
            'Cả hai phản ứng phân hạch hạt nhân nặng và nhiệt hạch hạt nhân nhẹ đều tiến về phía đỉnh đường cong bền vững của sắt Fe-56 để giải phóng năng lượng.',
        },
      },
      {
        order_index: 2,
        code: 'G12-CH4-TP2',
        title: 'Chủ đề 4.2: Phản ứng hạt nhân & Các định luật bảo toàn',
        textbook_tags: ['KNTT Bài 24', 'CTST Bài 15', 'CD Bài 11'],
        overview:
          'Nghiên cứu cơ chế các phản ứng hạt nhân nhân tạo, 4 định luật bảo toàn nền tảng và phương pháp tính năng lượng tỏa ra hay thu vào của phản ứng.',
        summary_note:
          'Phản ứng hạt nhân tuân theo nghiêm ngặt bảo toàn số khối A, bảo toàn điện tích Z, bảo toàn động lượng và bảo toàn năng lượng toàn phần. Năng lượng phản ứng Q = (m_trước - m_sau)·c² quyết định phản ứng tỏa hay thu nhiệt.',
        theory_sections: [
          {
            heading: '1. Phân loại phản ứng hạt nhân và 4 Định luật bảo toàn',
            content:
              'Phản ứng hạt nhân gồm hai loại: Phản ứng tự phân rã (phóng xạ) và Phản ứng kích thích (do hạt bắn phá tương tác với hạt nhân bia). Xét phản ứng tổng quát: ^A1_Z1 A + ^A2_Z2 B -> ^A3_Z3 C + ^A4_Z4 D. Bốn định luật bảo toàn luôn được nghiệm đúng: (1) Bảo toàn số nucleon (số khối): A1 + A2 = A3 + A4; (2) Bảo toàn điện tích: Z1 + Z2 = Z3 + Z4; (3) Bảo toàn véc-tơ động lượng: p_A + p_B = p_C + p_D; (4) Bảo toàn năng lượng toàn phần: K_A + K_B + m_A·c² + m_B·c² = K_C + K_D + m_C·c² + m_D·c².',
            keyPoints: [
              'Không có định luật bảo toàn khối lượng nghỉ trong phản ứng hạt nhân!',
              'Không có định luật bảo toàn số hạt proton hay số hạt neutron riêng rẽ (neutron có thể biến thành proton và ngược lại trong phân rã beta).',
              'Định luật bảo toàn động lượng giúp xác định góc bay và tỉ lệ động năng của các hạt sinh ra.',
            ],
            realWorldApplication:
              'Phản ứng nhiệt hạch trong lòng Mặt Trời (chu trình proton - proton) tổng hợp 4 hạt proton thành 1 hạt nhân Heli cung cấp ánh sáng và sự sống cho Trái Đất.',
          },
          {
            heading: '2. Năng lượng tỏa - thu của phản ứng hạt nhân',
            content:
              'Năng lượng trao đổi trong phản ứng hạt nhân ký hiệu là Q: Q = (m_trước - m_sau)·c² = (m_A + m_B - m_C - m_D)·c². Nếu m_trước > m_sau thì Q > 0: Phản ứng TỎA năng lượng (phần năng lượng tỏa ra này xuất hiện dưới dạng động năng của các hạt sinh ra và năng lượng photon tia gamma: Q = K_sau - K_trước). Nếu m_trước < m_sau thì Q < 0: Phản ứng THU năng lượng (đòi hỏi các hạt đạn phải có động năng ban đầu đủ lớn để bù vào độ tăng khối lượng nghỉ). Ta cũng có thể tính Q qua năng lượng liên kết: Q = ∑Elk,sau - ∑Elk,trước.',
            keyPoints: [
              'Q = (m_trước - m_sau)·c².',
              'Q = ∑Elk,sau - ∑Elk,trước (chú ý: lấy SAU trừ TRƯỚC đối với năng lượng liên kết!).',
              'Q = K_sau - K_trước (năng lượng tỏa ra chuyển thành động năng các hạt sản phẩm).',
            ],
            realWorldApplication:
              'Bom nhiệt hạch (bom H) và các lò phản ứng nhiệt hạch thực nghiệm quốc tế ITER khai thác phản ứng tỏa nhiệt cực mạnh giữa Deuteri và Triti: 2H + 3H -> 4He + n + 17,6 MeV.',
          },
        ],
        quantities: [
          {
            name: 'Năng lượng phản ứng hạt nhân',
            symbol: 'Q',
            si_unit: 'J',
            other_units: 'MeV (1 MeV = 1,6·10⁻¹³ J)',
            measuring_device: 'Máy đo năng lượng hạt và buồng ion hóa',
            description: 'Năng lượng tỏa ra (Q > 0) hoặc thu vào (Q < 0) của một phản ứng hạt nhân.',
          },
          {
            name: 'Động lượng hạt',
            symbol: 'p',
            si_unit: 'kg·m/s',
            other_units: 'MeV/c',
            measuring_device: 'Phổ kế từ quỹ đạo hạt',
            description: 'Đại lượng véc-tơ đặc trưng cho khả năng truyền tương tác cơ học của hạt vi mô.',
          },
        ],
        formulas: [
          {
            name: 'Định luật bảo toàn và Năng lượng phản ứng hạt nhân',
            latex_expression: 'Q = (m_{\\text{trước}} - m_{\\text{sau}}) c^2 = \\sum E_{lk,\\text{sau}} - \\sum E_{lk,\\text{trước}} = K_{\\text{sau}} - K_{\\text{trước}}',
            plain_expression: 'Q = (m_truoc - m_sau) * c^2 = sum(Elk_sau) - sum(Elk_truoc) = K_sau - K_truoc',
            variables: [
              { symbol: 'm_{\\text{trước}}', name: 'Tổng khối lượng nghỉ các hạt trước phản ứng', unit: 'u hoặc kg' },
              { symbol: 'm_{\\text{sau}}', name: 'Tổng khối lượng nghỉ các hạt sau phản ứng', unit: 'u hoặc kg' },
              { symbol: 'Q', name: 'Năng lượng phản ứng hạt nhân', unit: 'MeV' },
              { symbol: 'K_{\\text{trước}}, K_{\\text{sau}}', name: 'Tổng động năng các hạt trước và sau phản ứng', unit: 'MeV' },
            ],
            derived_formulas: [
              { expression: 'A_1 + A_2 = A_3 + A_4', description: 'Định luật bảo toàn số khối' },
              { expression: 'Z_1 + Z_2 = Z_3 + Z_4', description: 'Định luật bảo toàn điện tích' },
              { expression: '\\vec{p}_1 + \\vec{p}_2 = \\vec{p}_3 + \\vec{p}_4', description: 'Định luật bảo toàn véc-tơ động lượng' },
            ],
            usage_note: 'Khi tính bằng khối lượng: lấy TRƯỚC trừ SAU. Khi tính bằng năng lượng liên kết: lấy SAU trừ TRƯỚC.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính năng lượng tỏa ra trong phản ứng nhiệt hạch D - T',
            difficulty: 'van_dung',
            problem_statement:
              'Cho phản ứng nhiệt hạch: ^2_1H + ^3_1H -> ^4_2He + ^1_0n. Cho biết khối lượng của các hạt: m_D = 2,0141 u; m_T = 3,0160 u; m_He = 4,0015 u; m_n = 1,0087 u; 1 u = 931,5 MeV/c². Phản ứng này tỏa hay thu bao nhiêu năng lượng?',
            given_summary: 'm_D = 2,0141 u; m_T = 3,0160 u; m_He = 4,0015 u; m_n = 1,0087 u; 1 u = 931,5 MeV/c²',
            solution_steps: [
              'Bước 1: Tính tổng khối lượng nghỉ trước phản ứng: m_trước = m_D + m_T = 2,0141 + 3,0160 = 5,0301 u.',
              'Bước 2: Tính tổng khối lượng nghỉ sau phản ứng: m_sau = m_He + m_n = 4,0015 + 1,0087 = 5,0102 u.',
              'Bước 3: So sánh khối lượng: m_trước - m_sau = 5,0301 - 5,0102 = 0,0199 u > 0, do đó phản ứng TỎA năng lượng.',
              'Bước 4: Tính năng lượng tỏa ra: Q = (m_trước - m_sau) · 931,5 = 0,0199 · 931,5 ≈ 18,537 MeV ≈ 18,54 MeV.',
            ],
            final_answer: 'Phản ứng tỏa năng lượng với giá trị Q ≈ 18,54 MeV.',
          },
        ],
        simulation: {
          sim_key: 'g12_nuclear_reaction_lab',
          title: 'Phòng thí nghiệm Phản Ứng Hạt Nhân & Bảo Toàn Động Lượng',
          description:
            'Bắn phá hạt alpha vào hạt nhân bia Nitơ-14 để tái hiện thí nghiệm lịch sử của Rutherford năm 1919, đo góc tán xạ và kiểm chứng bảo toàn vector động lượng.',
          parameters: {
            projectileEnergyMeV: 7.7,
            targetNucleus: 'N-14',
            emissionAngleDeg: 60,
          },
          guide_steps: [
            'Bước 1: Điều chỉnh động năng hạt alpha bắn vào bia Nitơ-14.',
            'Bước 2: Quan sát sau va chạm hạt proton bắn vọt ra và hạt nhân giật lùi Oxy-17 tạo thành hình chữ V.',
            'Bước 3: Bật lưới hiển thị tam giác véc-tơ động lượng để kiểm tra p_alpha = p_proton + p_Oxy.',
          ],
          physics_insight:
            'Dù năng lượng toàn phần và động lượng luôn bảo toàn, khối lượng tĩnh bị hụt đi và chuyển hóa thành động năng khổng lồ cho các mảnh đạn vi mô.',
        },
      },
      {
        order_index: 3,
        code: 'G12-CH4-TP3',
        title: 'Chủ đề 4.3: Hiện tượng phóng xạ, Định luật phóng xạ & Năng lượng hạt nhân',
        textbook_tags: ['KNTT Bài 25-26', 'CTST Bài 16', 'CD Bài 12'],
        overview:
          'Nghiên cứu quá trình phân rã phóng xạ tự nhiên, định luật phân rã hàm số mũ, chu kỳ bán rã, độ phóng xạ Becquerel, cơ chế phản ứng phân hạch dây chuyền và ứng dụng năng lượng nguyên tử.',
        summary_note:
          'Hiện tượng phóng xạ diễn ra tự phát theo định luật hàm số mũ: N(t) = N0·2^(-t/T). Phản ứng phân hạch dây chuyền Urani kiểm soát được trong lò phản ứng hạt nhân là nguồn năng lượng khổng lồ không phát thải khí nhà kính.',
        theory_sections: [
          {
            heading: '1. Hiện tượng phóng xạ và Các dạng tia phóng xạ',
            content:
              'Phóng xạ là hiện tượng một hạt nhân không bền vững tự động phân rã, phóng ra các bức xạ ion hóa (gọi là tia phóng xạ) và biến đổi thành hạt nhân khác. Quá trình phóng xạ có tính chất tự phát và hoàn toàn ngẫu nhiên ở cấp độ từng hạt nhân riêng lẻ, không thể ngăn chặn hay kích hoạt bằng các biện pháp hóa học hay nhiệt độ thông thường. Có 3 loại tia phóng xạ chính: (1) Phóng xạ alpha (^4_2He): ^A_Z X -> ^4_2He + ^(A-4)_(Z-2) Y; (2) Phóng xạ beta: beta trừ (^0_-1e): n -> p + e- + anti-nu; beta cộng (^0_+1e): p -> n + e+ + nu; (3) Phóng xạ gamma (photon năng lượng cao): giải tỏa trạng thái kích thích của hạt nhân con sau phóng xạ alpha hoặc beta mà không làm thay đổi A và Z.',
            keyPoints: [
              'Phóng xạ alpha làm hạt nhân dịch lùi 2 ô trong bảng tuần hoàn; số khối giảm 4.',
              'Phóng xạ beta trừ làm hạt nhân dịch tiến 1 ô trong bảng tuần hoàn; số khối giữ nguyên.',
              'Tia gamma có bản chất là sóng điện từ bước sóng cực ngắn (dưới 10^-11 m), nguy hiểm nhất đối với tế bào sống.',
            ],
            realWorldApplication:
              'Máy phát nhiệt đồng vị phóng xạ (RTG) sử dụng Plutoni-238 cung cấp năng lượng liên tục hàng chục năm cho các tàu vũ trụ Voyager thám hiểm không gian sâu.',
          },
          {
            heading: '2. Định luật phóng xạ và Năng lượng phân hạch hạt nhân',
            content:
              'Xét một mẫu phóng xạ ban đầu có N0 hạt nhân. Sau khoảng thời gian t, số hạt nhân chưa bị phân rã tuân theo hàm số mũ: N(t) = N0 · 2^(-t/T) = N0 · e^(-λt). Tương tự cho khối lượng: m(t) = m0 · 2^(-t/T). Chu kỳ bán rã T là khoảng thời gian để một nửa số hạt nhân ban đầu bị phân rã. Hằng số phóng xạ: λ = ln2 / T ≈ 0,693 / T. Độ phóng xạ H(t) = λ·N(t) = H0·2^(-t/T) đo bằng Becquerel (1 Bq = 1 phân rã/s). Phản ứng phân hạch: Một hạt nhân rất nặng (như 235U) hấp thụ một neutron nhiệt rồi vỡ thành 2 hạt nhân mảnh trung bình kèm theo 2 đến 3 neutron mới và giải phóng khoảng 200 MeV năng lượng. Nếu hệ số nhân neutron k >= 1 thì xảy ra phản ứng dây chuyền.',
            keyPoints: [
              'Công thức: N(t) = N0 · 2^(-t/T); m(t) = m0 · 2^(-t/T).',
              'Số hạt đã phân rã: ΔN = N0 - N(t) = N0 · (1 - 2^(-t/T)).',
              'Để duy trì phản ứng dây chuyền kiểm soát được trong lò phản ứng hạt nhân, hệ số nhân neutron phải điều tiết đúng bằng k = 1.',
            ],
            realWorldApplication:
              'Nhà máy điện hạt nhân phát điện sạch, ứng dụng đồng vị Techneti-99m trong chẩn đoán xạ hình y học hạt nhân và kỹ thuật chiếu xạ tiệt trùng thực phẩm.',
          },
        ],
        quantities: [
          {
            name: 'Chu kỳ bán rã',
            symbol: 'T',
            si_unit: 's (giây)',
            other_units: 'phút, giờ, ngày, năm (ví dụ C-14 có T = 5730 năm)',
            measuring_device: 'Đo tốc độ đếm xung phân rã qua thời gian bằng ống đếm Geiger-Müller',
            description: 'Thời gian để một nửa số hạt nhân phóng xạ của mẫu phân rã biến thành chất khác.',
          },
          {
            name: 'Độ phóng xạ',
            symbol: 'H',
            si_unit: 'Bq (Becquerel = 1 phân rã/giây)',
            other_units: 'Curie (Ci, 1 Ci = 3,7·10¹⁰ Bq)',
            measuring_device: 'Máy đếm nhấp nháy, buồng ion hóa khí',
            description: 'Số phân rã phóng xạ xảy ra trong khối chất phóng xạ trong mỗi đơn vị thời gian một giây.',
          },
        ],
        formulas: [
          {
            name: 'Định luật phóng xạ',
            latex_expression: 'N(t) = N_0 2^{-\\frac{t}{T}} = N_0 e^{-\\lambda t}; \\quad m(t) = m_0 2^{-\\frac{t}{T}}; \\quad H(t) = \\lambda N(t)',
            plain_expression: 'N(t) = N0 * 2^(-t/T) = N0 * exp(-lambda * t); m(t) = m0 * 2^(-t/T); H = lambda * N',
            variables: [
              { symbol: 'N(t), N_0', name: 'Số hạt nhân còn lại tại thời điểm t và ban đầu', unit: 'hạt' },
              { symbol: 'm(t), m_0', name: 'Khối lượng chất phóng xạ còn lại và ban đầu', unit: 'g hoặc kg' },
              { symbol: 'T', name: 'Chu kỳ bán rã', unit: 's, ngày, năm' },
              { symbol: 't', name: 'Thời gian phân rã', unit: 'cùng đơn vị với T' },
              { symbol: '\\lambda', name: 'Hằng số phóng xạ (ln2 / T)', unit: 's⁻¹' },
              { symbol: 'H', name: 'Độ phóng xạ', unit: 'Bq' },
            ],
            derived_formulas: [
              { expression: '\\Delta N = N_0 (1 - 2^{-\\frac{t}{T}})', description: 'Số hạt nhân đã bị phân rã biến thành chất khác' },
              { expression: 't = T \\frac{\\ln(N_0 / N)}{\\ln 2} = T \\log_2 \\left(\\frac{N_0}{N}\\right)', description: 'Công thức tính tuổi mẫu vật hoặc thời gian phân rã' },
            ],
            usage_note: 'Đơn vị thời gian t và chu kỳ bán rã T phải đồng nhất; khi tính độ phóng xạ H bằng Bq bắt buộc phải đổi hằng số λ ra đơn vị s⁻¹.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính khối lượng còn lại và đã phân rã của chất phóng xạ',
            difficulty: 'van_dung',
            problem_statement:
              'Đồng vị phóng xạ Iot (^131_53I) dùng trong điều trị bệnh tuyến giáp có chu kỳ bán rã T = 8 ngày. Một bệnh viện nhận được một mẫu chứa ban đầu 160 mg ^131_53I. Hỏi sau 24 ngày: a) Khối lượng Iot-131 còn lại chưa phân rã là bao nhiêu? b) Khối lượng Iot-131 đã bị phân rã là bao nhiêu?',
            given_summary: 'm0 = 160 mg; T = 8 ngày; t = 24 ngày',
            solution_steps: [
              'Bước 1: Tính số chu kỳ bán rã đã trôi qua: k = t / T = 24 / 8 = 3 chu kỳ.',
              'Bước 2: Áp dụng công thức định luật phóng xạ cho khối lượng còn lại: m(t) = m0 · 2^(-t/T) = 160 · 2^(-3) = 160 / 8 = 20 mg.',
              'Bước 3: Khối lượng Iot-131 đã bị phân rã thành chất khác: Δm = m0 - m(t) = 160 - 20 = 140 mg (chiếm 87,5% khối lượng ban đầu).',
            ],
            final_answer: 'a) Khối lượng còn lại là m = 20 mg; b) Khối lượng đã phân rã là Δm = 140 mg.',
          },
        ],
        simulation: {
          sim_key: 'g12_radioactive_decay_fission_lab',
          title: 'Phòng thí nghiệm Phóng Xạ & Phản Ứng Dây Chuyền Hạt Nhân',
          description:
            'Theo dõi 1000 hạt nhân phân rã ngẫu nhiên theo thời gian thực vẽ nên đường cong phân rã lũy thừa, hoặc bắn neutron kích hoạt phản ứng phân hạch dây chuyền Urani.',
          parameters: {
            isotope: 'I-131',
            halfLifeDays: 8.0,
            initialNucleiCount: 1000,
            fissionModeratorRatio: 1.0,
          },
          guide_steps: [
            'Bước 1: Bấm nút "Bắt đầu phân rã" để quan sát các hạt nhân ngẫu nhiên đổi màu khi biến đổi, số hạt giảm một nửa sau đúng 8 giây ảo.',
            'Bước 2: Chuyển sang chế độ "Lò phản ứng phân hạch", bắn 1 neutron vào mạng U-235 và quan sát neutron cấp số nhân bung tỏa.',
            'Bước 3: Hạ thanh điều khiển hấp thụ bớt neutron để đưa hệ số k về 1, giữ lò phản ứng hoạt động ở công suất ổn định an toàn.',
          ],
          physics_insight:
            'Từng hạt nhân phân rã hoàn toàn ngẫu nhiên và lượng tử, nhưng khi xét tập hợp hàng tỉ hạt, quy luật thống kê hàm số mũ trở nên chuẩn xác tuyệt đối.',
        },
      },
    ],
  },
];

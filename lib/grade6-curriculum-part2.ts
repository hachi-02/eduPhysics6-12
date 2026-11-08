import { SeedChapterData } from './grade6-curriculum';

export const GRADE_6_CHAPTERS_PART2: SeedChapterData[] = [
  {
    order_index: 3,
    code: 'CH3',
    title: 'Chương 3: Năng lượng và Cuộc sống',
    description:
      'Tổng hợp chuẩn 3 bộ SGK: Nhận diện các dạng năng lượng (động năng, thế năng, nhiệt năng, điện năng, quang năng, hóa năng), định luật bảo toàn và chuyển hóa năng lượng, hiệu suất năng lượng có ích - hao phí và các nguồn năng lượng tái tạo.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 3: Năng lượng và Cuộc sống
Mọi biến đổi trong tự nhiên đều cần có **năng lượng (Energy - ký hiệu $W$ hoặc $E$, đơn vị chuẩn SI là Joule - $\\text{J}$)**. Ta không nhìn thấy trực tiếp năng lượng nhưng nhận biết được nó qua **tác dụng** mà nó gây ra (như tạo ra lực đẩy, làm vật nóng lên, phát sáng...).

1. **Phân loại các dạng năng lượng cơ bản:**
   - **Theo nguồn gốc cơ học:**
     - **Động năng ($W_\\text{đ}$):** Năng lượng vật có được do đang chuyển động (vật chạy càng nhanh và khối lượng càng lớn thì động năng càng lớn).
     - **Thế năng hấp dẫn ($W_t$):** Năng lượng dự trữ khi vật ở một độ cao so với mặt đất.
     - **Thế năng đàn hồi:** Năng lượng dự trữ khi vật bị biến dạng đàn hồi (như lò xo bị nén/dãn, cánh cung bị kéo căng).
   - **Theo các dạng vật lý - hóa học khác:**
     - **Nhiệt năng:** Gắn với chuyển động nhiệt (vật càng nóng thì nhiệt năng càng lớn).
     - **Điện năng:** Cung cấp bởi dòng điện (pin, ắc quy, nhà máy điện).
     - **Quang năng (Năng lượng ánh sáng):** Từ Mặt Trời, bóng đèn, ngọn lửa.
     - **Hóa năng:** Dự trữ trong lương thực, thực phẩm, nhiên liệu (xăng, dầu, than đá) và pin.
     - **Năng lượng âm:** Lan truyền theo sóng âm thanh.
2. **Định luật bảo toàn và chuyển hóa năng lượng:**
   - *"Năng lượng không tự nhiên sinh ra cũng không tự nhiên mất đi; nó chỉ truyền từ vật này sang vật khác hoặc chuyển hóa từ dạng này sang dạng khác."*
   - Tổng năng lượng toàn phần luôn bằng tổng **năng lượng có ích** và **năng lượng hao phí** (thường tỏa ra dưới dạng nhiệt năng do ma sát): $W_{\\text{toàn phần}} = W_{\\text{có ích}} + W_{\\text{hao phí}}$.`,
    key_takeaways: [
      'Đơn vị đo năng lượng trong hệ SI là Joule (Jun), ký hiệu là J (1 kJ = 1000 J). Ngoài ra trên bao bì thực phẩm còn dùng đơn vị calo (1 cal ≈ 4,18 J).',
      'Vật đang chuyển động luôn có Động năng; vật ở trên cao có Thế năng hấp dẫn; lò xo bị nén/dãn có Thế năng đàn hồi.',
      'Định luật bảo toàn năng lượng: Năng lượng không tự sinh ra và không tự mất đi, chỉ truyền hoặc chuyển hóa.',
      'Trong mọi thiết bị (quạt điện, bóng đèn, động cơ), phần năng lượng hao phí chủ yếu biến thành Nhiệt năng làm nóng máy.',
      'Năng lượng tái tạo (Mặt Trời, gió, nước, địa nhiệt, sinh khối) là nguồn năng lượng sạch, bổ sung liên tục và ít phát thải khí nhà kính.',
    ],
    formula_cheatsheet: [
      {
        name: 'Bảo toàn năng lượng trong thiết bị tiêu thụ',
        latex: 'W_{\\text{tp}} = W_{\\text{ích}} + W_{\\text{hp}}',
        note: 'W_tp: Năng lượng toàn phần cung cấp; W_ích: Năng lượng có ích; W_hp: Năng lượng hao phí.',
      },
      {
        name: 'Hiệu suất sử dụng năng lượng (%)',
        latex: 'H = \\frac{W_{\\text{ích}}}{W_{\\text{tp}}} \\times 100\\%',
        note: 'Hiệu suất H càng cao thì tỉ lệ năng lượng hao phí càng thấp (luôn có H < 100%).',
      },
      {
        name: 'Quy đổi đơn vị năng lượng Joule và kilô-Joule',
        latex: '1\\,\\text{kJ} = 1000\\,\\text{J}; \\quad 1\\,\\text{kcal} = 1000\\,\\text{cal} \\approx 4184\\,\\text{J}',
        note: 'Đơn vị chuẩn SI là Joule (J).',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'C3-B1',
        title: 'Chủ đề 3.1: Năng lượng và các dạng năng lượng',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Hiểu mối liên hệ mật thiết giữa năng lượng và khả năng sinh lực; phân loại chuẩn xác 8 dạng năng lượng thường gặp (động năng, thế năng hấp dẫn, thế năng đàn hồi, nhiệt năng, điện năng, quang năng, hóa năng, năng lượng âm).',
        summary_note:
          'Dấu hiệu nhận biết nhanh: Đang bay/chạy → Động năng; Ở trên cao → Thế năng hấp dẫn; Bị uốn cong/nén/dãn → Thế năng đàn hồi; Pin/Thức ăn/Xăng dầu → Hóa năng!',
        theory_sections: [
          {
            heading: '1. Khái niệm Năng lượng và mối liên hệ với Lực',
            content:
              'Mọi hoạt động của con người, sinh vật và máy móc đều cần năng lượng. Khi năng lượng càng nhiều thì lực có thể tác dụng càng mạnh và thời gian tác dụng lực càng dài. Ví dụ: Gió nhẹ có ít năng lượng chỉ làm lay lá cây, còn bão lớn có năng lượng khổng lồ có thể吹 đổ nhà cửa.',
            keyPoints: [
              'Đơn vị đo năng lượng trong hệ SI là Joule (đọc là Jun, ký hiệu: J). 1 kJ = 1000 J.',
              'Trên nhãn dinh dưỡng thực phẩm thường ghi đơn vị calo (cal) hoặc kilô-calo (kcal): 1 cal ≈ 4,18 J.',
              'Không có năng lượng thì không thể sinh ra lực hay thực hiện bất kỳ biến đổi nào.',
            ],
          },
          {
            heading: '2. Động năng và Thế năng (Năng lượng cơ học)',
            content:
              'Động năng là dạng năng lượng mà một vật có được do nó đang chuyển động (xe đang chạy, dòng nước lũ đang chảy, viên đạn đang bay). Thế năng gồm 2 loại: Thế năng hấp dẫn (năng lượng lưu trữ khi vật ở độ cao h so với mặt đất như nước trên hồ thủy điện, quả dừa trên cây) và Thế năng đàn hồi (năng lượng lưu trữ khi vật bị biến dạng đàn hồi như dây cung giăng căng, lò xo bị nén).',
            keyPoints: [
              'Vật có khối lượng càng lớn và chuyển động càng nhanh thì Động năng càng lớn.',
              'Vật có khối lượng càng lớn và ở vị trí càng cao so với mặt đất thì Thế năng hấp dẫn càng lớn.',
              'Một máy bay đang bay trên bầu trời vừa có Động năng (vì đang bay nhanh), vừa có Thế năng hấp dẫn (vì ở độ cao lớn)!',
            ],
            realWorldApplication:
              'Nhà máy thủy điện xây đập dâng nước lên cao để tích trữ Thế năng hấp dẫn khổng lồ, sau đó xả nước chảy xiết (Động năng) làm quay tuabin phát điện.',
          },
          {
            heading: '3. Các dạng năng lượng khác trong đời sống',
            content:
              'Ngoài cơ năng, trong tự nhiên và kỹ thuật còn có: Hóa năng (dự trữ trong thức ăn, pin, ắc quy, xăng dầu, than củi); Nhiệt năng (do các phân tử chuyển động nhiệt, vật càng nóng nhiệt năng càng lớn); Điện năng (dòng điện chạy qua dây dẫn); Quang năng (ánh sáng Mặt Trời, đèn LED); Năng lượng âm (sóng âm truyền trong không khí) và Năng lượng hạt nhân.',
            keyPoints: [
              'Cơ thể người hoạt động được là nhờ Hóa năng tích trữ trong thức ăn.',
              'Cây xanh quang hợp nhờ Quang năng của ánh sáng Mặt Trời chuyển thành Hóa năng.',
            ],
          },
        ],
        quantities: [
          {
            name: 'Năng lượng',
            symbol: 'W, E',
            si_unit: 'J (Joule / Jun)',
            other_units: 'kJ (1000 J), MJ (10⁶ J), cal, kcal, kWh (số điện)',
            measuring_device: 'Công tơ điện (đo điện năng), nhiệt lượng kế (đo nhiệt năng)',
            description: 'Đại lượng đặc trưng cho khả năng tác dụng lực hoặc gây ra sự biến đổi của hệ.',
          },
        ],
        formulas: [
          {
            name: 'Quy đổi đơn vị Năng lượng (Joule, kilô-Joule và Calo)',
            latex_expression: '1\\,\\text{kJ} = 1000\\,\\text{J}; \\quad 1\\,\\text{cal} \\approx 4,18\\,\\text{J}',
            plain_expression: '1 kJ = 1000 J; 1 cal ≈ 4,18 J',
            variables: [
              { symbol: 'W', name: 'Năng lượng', unit: 'J, kJ hoặc cal' },
            ],
            derived_formulas: [
              { expression: '1\\,\\text{kcal} = 1000\\,\\text{cal} \\approx 4180\\,\\text{J}', description: 'Quy đổi 1 kilô-calo dinh dưỡng ra Joule' },
            ],
            usage_note: 'Khi tính toán vật lý chuẩn luôn đưa về đơn vị Joule (J) hoặc kilô-Joule (kJ).',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Xác định các dạng năng lượng của một vật vừa bay vừa ở trên cao',
            difficulty: 'Cơ bản',
            problem_statement:
              'Một con chim bồ câu đang bay lượn ở độ cao 25 m so với mặt đất. Hỏi con chim bồ câu đang có những dạng năng lượng cơ học nào? Giải thích vì sao.',
            given_summary: 'Chim đang bay (chuyển động) ở độ cao h = 25 m so với mặt đất.',
            solution_steps: [
              'Bước 1: Vì con chim đang bay (đang chuyển động với vận tốc v > 0) nên nó có Động năng.',
              'Bước 2: Vì con chim đang ở độ cao 25 m so với mặt đất nên nó có Thế năng hấp dẫn.',
              'Bước 3: Ngoài ra cơ thể chim ấm và có dự trữ dinh dưỡng nên còn có Nhiệt năng và Hóa năng.',
            ],
            final_answer: 'Chim vừa có Động năng (do đang bay) vừa có Thế năng hấp dẫn (do ở độ cao 25 m so với mặt đất).',
          },
          {
            title: 'Ví dụ 2: Tính năng lượng nạp vào cơ thể từ khẩu phần ăn',
            difficulty: 'Vận dụng',
            problem_statement:
              'Một hộp sữa tươi cung cấp năng lượng dinh dưỡng là 150 kcal. Biết 1 cal ≈ 4,18 J. Hãy tính năng lượng mà hộp sữa này cung cấp theo đơn vị kilô-Joule (kJ).',
            given_summary: 'E = 150 kcal; 1 cal = 4,18 J.',
            solution_steps: [
              'Bước 1: Đổi 150 kcal ra cal: E = 150 × 1000 = 150.000 cal.',
              'Bước 2: Đổi sang đơn vị Joule (J): E = 150.000 × 4,18 = 627.000 J.',
              'Bước 3: Đổi sang kilô-Joule (kJ): E = 627.000 / 1000 = 627 kJ.',
            ],
            final_answer: '627 kJ.',
          },
        ],
        simulation: {
          sim_key: 'energy_forms_skate_lab',
          title: 'Mô phỏng Động Năng - Thế Năng Hấp Dẫn - Nhiệt Năng (Máng Trượt / Con Lắc)',
          description:
            'Thay đổi độ cao thả vật trên máng trượt và hệ số ma sát mặt đường để quan sát biểu đồ cột Động năng (W_đ), Thế năng hấp dẫn (W_t) và Nhiệt năng hao phí (W_nhiệt) biến thiên theo thời gian thực.',
          parameters: {
            defaultHeightM: 8,
            defaultPositionRatio: 0.3,
            defaultFrictionPercent: 10,
          },
          guide_steps: [
            'Kéo vị trí viên bi từ đỉnh dốc xuống chân dốc để thấy Thế năng hấp dẫn giảm dần còn Động năng tăng lên cực đại.',
            'Tăng thanh trượt "Ma sát đường trượt" để thấy một phần cơ năng chuyển hóa dần thành Nhiệt năng (cột màu đỏ), nhưng Tổng năng lượng luôn không đổi!',
          ],
          physics_insight:
            'Tại đỉnh dốc vật có thế năng cực đại; tại đáy dốc vật có tốc độ lớn nhất nên động năng cực đại. Tổng (W_đ + W_t + W_nhiệt) luôn bảo toàn!',
        },
      },
      {
        order_index: 2,
        code: 'C3-B2',
        title: 'Chủ đề 3.2: Sự truyền và chuyển hóa năng lượng - Định luật bảo toàn năng lượng',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Hiểu sâu sắc Định luật bảo toàn và chuyển hóa năng lượng, phân tích sơ đồ chuyển hóa năng lượng trong các thiết bị gia dụng (bóng đèn, quạt điện, bàn là, pin Mặt Trời) và tính toán năng lượng có ích - năng lượng hao phí - hiệu suất.',
        summary_note:
          'W_toàn_phần = W_có_ích + W_hao_phí. Với quạt điện: Điện năng → Động năng (có ích) + Nhiệt năng & Năng lượng âm (hao phí). Với bóng đèn: Điện năng → Quang năng (có ích) + Nhiệt năng (hao phí).',
        theory_sections: [
          {
            heading: '1. Sự truyền năng lượng và Chuyển hóa năng lượng',
            content:
              'Năng lượng có thể truyền từ vật này sang vật khác thông qua tác dụng lực hoặc truyền nhiệt (ví dụ: phơi thóc dưới nắng, nhiệt năng từ ánh nắng Mặt Trời truyền sang hạt thóc; gió truyền động năng cho cánh quạt gió). Đồng thời, năng lượng có thể biến đổi từ dạng này sang dạng khác gọi là sự chuyển hóa năng lượng.',
            keyPoints: [
              'Bật quạt điện: Điện năng chuyển hóa thành Động năng (cánh quạt quay - có ích) và Nhiệt năng + Năng lượng âm (quạt nóng lên và kêu - hao phí).',
              'Đốt nến hoặc củi: Hóa năng chuyển hóa thành Nhiệt năng và Quang năng.',
              'Thả quả bóng rơi từ trên cao xuống: Thế năng hấp dẫn chuyển hóa dần thành Động năng.',
            ],
          },
          {
            heading: '2. Định luật Bảo toàn Năng lượng',
            content:
              'Nội dung định luật: "Năng lượng không tự nhiên sinh ra và cũng không tự nhiên mất đi; nó chỉ truyền từ vật này sang vật khác hoặc chuyển hóa từ dạng này sang dạng khác. Tổng năng lượng trước và sau khi biến đổi luôn không đổi."',
            keyPoints: [
              'Không một cỗ máy nào có thể tự sinh ra năng lượng mà không tiêu thụ năng lượng đầu vào (không thể chế tạo động cơ vĩnh cửu).',
              'Khi viên bi lăn trên sàn rồi dừng lại, động năng của viên bi không biến mất mà đã chuyển hóa hoàn toàn thành Nhiệt năng làm nóng viên bi và mặt sàn do ma sát.',
            ],
          },
          {
            heading: '3. Năng lượng có ích và Năng lượng hao phí',
            content:
              'Khi sử dụng bất kỳ thiết bị nào, phần năng lượng phục vụ đúng mục đích của con người gọi là Năng lượng có ích (W_ích); phần năng lượng biến thành dạng không mong muốn (thường là nhiệt năng tỏa ra môi trường) gọi là Năng lượng hao phí (W_hp).',
            keyPoints: [
              'Bóng đèn sợi đốt: Chỉ khoảng 5% - 10% điện năng biến thành Quang năng (có ích), còn tới 90% - 95% biến thành Nhiệt năng (hao phí).',
              'Bóng đèn LED hiện đại: Tới 80% - 90% điện năng biến thành Quang năng (có ích), rất ít nhiệt năng hao phí → tiết kiệm điện vượt trội!',
            ],
            realWorldApplication:
              'Thay thế bóng đèn sợi đốt bằng đèn LED giúp giảm tới 80% hóa đơn tiền điện chiếu sáng nhờ giảm năng lượng nhiệt hao phí.',
          },
        ],
        quantities: [
          {
            name: 'Năng lượng toàn phần',
            symbol: 'W_{\\text{tp}}',
            si_unit: 'J (Joule)',
            other_units: 'kJ, kWh',
            measuring_device: 'Công tơ điện / đồng hồ đo công suất',
            description: 'Tổng năng lượng ban đầu cung cấp cho thiết bị hoạt động.',
          },
          {
            name: 'Hiệu suất năng lượng',
            symbol: 'H',
            si_unit: '% (Phần trăm)',
            other_units: 'Số thập phân (0 < H < 1)',
            measuring_device: 'Tính từ tỉ số W_ích / W_tp',
            description: 'Tỉ lệ phần trăm giữa năng lượng có ích thu được và tổng năng lượng cung cấp.',
          },
        ],
        formulas: [
          {
            name: 'Phương trình bảo toàn năng lượng (Có ích & Hao phí)',
            latex_expression: 'W_{\\text{tp}} = W_{\\text{ích}} + W_{\\text{hp}}',
            plain_expression: 'W_tp = W_ích + W_hp',
            variables: [
              { symbol: 'W_{\\text{tp}}', name: 'Năng lượng toàn phần cung cấp đầu vào', unit: 'J hoặc kJ' },
              { symbol: 'W_{\\text{ích}}', name: 'Năng lượng có ích đúng mục đích sử dụng', unit: 'J hoặc kJ' },
              { symbol: 'W_{\\text{hp}}', name: 'Năng lượng hao phí tỏa ra môi trường', unit: 'J hoặc kJ' },
            ],
            derived_formulas: [
              { expression: 'W_{\\text{ích}} = W_{\\text{tp}} - W_{\\text{hp}}', description: 'Tính phần năng lượng có ích' },
              { expression: 'W_{\\text{hp}} = W_{\\text{tp}} - W_{\\text{ích}}', description: 'Tính phần năng lượng hao phí' },
            ],
            usage_note: 'Cả 3 đại lượng phải để cùng một đơn vị (cùng J hoặc cùng kJ).',
          },
          {
            name: 'Công thức tính Hiệu suất sử dụng năng lượng',
            latex_expression: 'H = \\frac{W_{\\text{ích}}}{W_{\\text{tp}}} \\times 100\\%',
            plain_expression: 'H = (W_ích / W_tp) * 100%',
            variables: [
              { symbol: 'H', name: 'Hiệu suất của thiết bị', unit: '%' },
              { symbol: 'W_{\\text{ích}}', name: 'Năng lượng có ích', unit: 'J hoặc kJ' },
              { symbol: 'W_{\\text{tp}}', name: 'Năng lượng toàn phần', unit: 'J hoặc kJ' },
            ],
            derived_formulas: [
              { expression: 'W_{\\text{ích}} = \\frac{H}{100\\%} \\cdot W_{\\text{tp}}', description: 'Tìm năng lượng có ích khi biết hiệu suất H' },
              { expression: 'H_{\\text{hp}} = 100\\% - H', description: 'Tỉ lệ phần trăm năng lượng hao phí' },
            ],
            usage_note: 'Trong thực tế luôn có hao phí nên hiệu suất H luôn nhỏ hơn 100%.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: So sánh hiệu suất và năng lượng hao phí của đèn sợi đốt và đèn LED',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Cung cấp 1000 J điện năng cho một bóng đèn sợi đốt thì thu được 80 J quang năng (ánh sáng), phần còn lại tỏa nhiệt. Trong khi đó, cung cấp 1000 J điện năng cho một bóng đèn LED thì chỉ có 150 J tỏa nhiệt hao phí. Hãy tính năng lượng hao phí của đèn sợi đốt và hiệu suất phát sáng của mỗi loại đèn.',
            given_summary: 'Đèn sợi đốt: W_tp = 1000 J, W_ích = 80 J. Đèn LED: W_tp = 1000 J, W_hp = 150 J.',
            solution_steps: [
              'Bước 1 (Đèn sợi đốt): Năng lượng nhiệt hao phí là W_hp1 = 1000 - 80 = 920 J. Hiệu suất đèn sợi đốt: H1 = (80 / 1000) × 100% = 8%.',
              'Bước 2 (Đèn LED): Năng lượng ánh sáng có ích là W_ích2 = 1000 - 150 = 850 J.',
              'Bước 3: Hiệu suất phát sáng của đèn LED là: H2 = (850 / 1000) × 100% = 85%.',
            ],
            final_answer: 'Đèn sợi đốt: hao phí 920 J, hiệu suất 8%; Đèn LED: có ích 850 J, hiệu suất 85%.',
          },
          {
            title: 'Ví dụ 2: Bài toán tính năng lượng có ích của động cơ ô tô',
            difficulty: 'Vận dụng',
            problem_statement:
              'Động cơ của một chiếc ô tô tiêu thụ một lượng xăng cung cấp hóa năng toàn phần là 500 kJ. Biết tới 68% năng lượng này bị hao phí dưới dạng nhiệt năng làm nóng máy và khí thải. Hãy tính phần động năng có ích giúp xe chuyển động.',
            given_summary: 'W_tp = 500 kJ; Tỉ lệ hao phí = 68%.',
            solution_steps: [
              'Bước 1: Hiệu suất sinh cơ năng có ích của động cơ ô tô là: H = 100% - 68% = 32%.',
              'Bước 2: Phần động năng có ích giúp xe chạy là: W_ích = 32% × 500 = 0,32 × 500 = 160 kJ (hay 160.000 J).',
            ],
            final_answer: 'W_ích = 160 kJ (Năng lượng hao phí là 340 kJ).',
          },
        ],
        simulation: {
          sim_key: 'energy_efficiency_sankey_lab',
          title: 'Mô phỏng Sơ Đồ Dòng Chảy Năng Lượng (Sankey) & Hiệu Suất Thiết Bị',
          description:
            'Chọn thiết bị (Đèn sợi đốt, Đèn Compact, Đèn LED, Quạt điện, Động cơ xăng) và điều chỉnh điện năng/hóa năng đầu vào để quan sát dòng phân nhánh Năng lượng có ích vs Năng lượng hao phí.',
          parameters: {
            defaultDevice: 'led_bulb',
            defaultInputJ: 1000,
          },
          guide_steps: [
            'Chuyển đổi qua lại giữa "Bóng đèn sợi đốt (H = 8%)" và "Bóng đèn LED (H = 85%)" để thấy sự chênh lệch rõ rệt giữa nhánh Quang năng có ích và Nhiệt năng hao phí.',
            'Thay đổi năng lượng đầu vào W_tp để kiểm chứng tổng W_ích + W_hp luôn bằng W_tp.',
          ],
          physics_insight:
            'Biểu đồ Sankey thể hiện trực quan Định luật bảo toàn năng lượng: Bề rộng nhánh tổng đầu vào luôn bằng tổng bề rộng nhánh có ích cộng nhánh hao phí.',
        },
      },
      {
        order_index: 3,
        code: 'C3-B3',
        title: 'Chủ đề 3.3: Năng lượng tái tạo và tiết kiệm năng lượng',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Phân biệt rõ hai nhóm nguồn năng lượng: Năng lượng không tái tạo (nhiên liệu hóa thạch: than đá, dầu mỏ, khí đốt) và Năng lượng tái tạo (Mặt Trời, gió, nước, địa nhiệt, sinh khối); nắm vững các biện pháp tiết kiệm năng lượng tại gia đình và trường học.',
        summary_note:
          'Nhiên liệu hóa thạch (Than đá, Dầu mỏ, Khí tự nhiên) mất hàng trăm triệu năm để hình thành → Không tái tạo & gây ô nhiễm. Năng lượng Mặt Trời, Gió, Nước, Sinh khối, Địa nhiệt → Năng lượng tái tạo (Sạch & Bền vững).',
        theory_sections: [
          {
            heading: '1. Nhiên liệu và Nguồn năng lượng không tái tạo',
            content:
              'Nhiên liệu là các chất khi đốt cháy tỏa ra nhiệt năng và quang năng (như than đá, củi, xăng, dầu hỏa, khí gas). Các nguồn năng lượng hóa thạch (than đá, dầu mỏ, khí thiên nhiên) phải mất hàng chục đến hàng trăm triệu năm mới hình thành từ xác sinh vật cổ đại dưới lòng đất. Vì con người khai thác nhanh gấp hàng triệu lần tốc độ tạo thành nên chúng sẽ cạn kiệt → gọi là Nguồn năng lượng không tái tạo.',
            keyPoints: [
              'Đốt nhiên liệu hóa thạch thải ra lượng lớn khí CO₂ và khí độc gây hiệu ứng nhà kính, biến đổi khí hậu và ô nhiễm không khí.',
              'Năng lượng hạt nhân (từ quặng Uranium) tuy ít thải CO₂ nhưng quặng Uranium có hạn nên cũng thuộc nhóm không tái tạo.',
            ],
          },
          {
            heading: '2. Các nguồn năng lượng tái tạo (Năng lượng sạch)',
            content:
              'Nguồn năng lượng tái tạo là nguồn năng lượng có sẵn trong thiên nhiên, liên tục được bổ sung và không bị cạn kiệt trong tương lai gần. Có 5 nguồn năng lượng tái tạo tiêu biểu:',
            keyPoints: [
              '(1) Năng lượng Mặt Trời: Dùng pin quang điện (Solar panel) biến quang năng thành điện năng, hoặc máy nước nóng năng lượng Mặt Trời biến quang năng thành nhiệt năng.',
              '(2) Năng lượng gió: Động năng của gió làm quay cánh quạt tuabin gió phát ra điện năng.',
              '(3) Năng lượng nước (Thủy năng, Sóng biển, Thủy triều): Động năng dòng nước làm quay tuabin máy phát điện.',
              '(4) Năng lượng địa nhiệt: Nhiệt năng từ sâu trong lòng Trái Đất dùng sưởi ấm và phát điện.',
              '(5) Năng lượng sinh khối (Biomass): Từ phụ phẩm nông nghiệp, thực vật, chất thải hữu cơ tạo khí Biogas hoặc xăng sinh học E5.',
            ],
            realWorldApplication:
              'Tại Ninh Thuận, Bình Thuận và Tây Nguyên (Việt Nam), hàng loạt cánh đồng điện gió và điện Mặt Trời áp mái đang cung cấp nguồn điện sạch lớn cho lưới điện quốc gia.',
          },
          {
            heading: '3. Tại sao và làm thế nào để tiết kiệm năng lượng?',
            content:
              'Tiết kiệm năng lượng giúp: Giảm chi phí tiền điện/nhiên liệu cho gia đình, bảo tồn tài nguyên thiên nhiên cho thế hệ mai sau và giảm lượng khí thải gây ô nhiễm môi trường.',
            keyPoints: [
              'Tắt các thiết bị điện khi ra khỏi phòng; rút phích cắm khi không sử dụng để tránh tiêu thụ điện chờ.',
              'Tận dụng ánh sáng và gió tự nhiên; chọn mua thiết bị có dán Nhãn năng lượng nhiều sao (5 sao).',
              'Đặt điều hòa ở mức hợp lý (từ 26°C trở lên vào mùa hè) và dùng bình nước nóng năng lượng Mặt Trời.',
            ],
          },
        ],
        quantities: [
          {
            name: 'Điện năng tiêu thụ (trên công tơ điện)',
            symbol: 'A, W',
            si_unit: 'J (Joule)',
            other_units: 'kWh (kilô-oát giờ, hay gọi là 1 "số điện" = 3.600.000 J)',
            measuring_device: 'Công tơ điện',
            description: 'Lượng điện năng các thiết bị tiêu thụ trong gia đình được tính tiền theo đơn vị kWh (số điện).',
          },
        ],
        formulas: [
          {
            name: 'Tính chi phí tiết kiệm điện năng hàng tháng',
            latex_expression: '\\Delta W = W_{\\text{cũ}} - W_{\\text{mới}}',
            plain_expression: 'ΔW = W_cũ - W_mới',
            variables: [
              { symbol: '\\Delta W', name: 'Lượng năng lượng (số điện) tiết kiệm được', unit: 'kWh hoặc kJ' },
              { symbol: 'W_{\\text{cũ}}', name: 'Lượng năng lượng tiêu thụ khi dùng thiết bị cũ tốn điện', unit: 'kWh hoặc kJ' },
              { symbol: 'W_{\\text{mới}}', name: 'Lượng năng lượng tiêu thụ khi dùng thiết bị tiết kiệm điện', unit: 'kWh hoặc kJ' },
            ],
            derived_formulas: [
              { expression: '\\text{Tiền tiết kiệm} = \\Delta W \\times \\text{Đơn giá 1 kWh}', description: 'Số tiền điện tiết kiệm được cho gia đình' },
            ],
            usage_note: '1 số điện trên công tơ chính là 1 kWh = 3600 kJ = 3.600.000 J.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính tiền điện tiết kiệm khi thay bóng đèn sợi đốt bằng đèn LED',
            difficulty: 'Vận dụng',
            problem_statement:
              'Một gia đình thay 10 bóng đèn sợi đốt bằng 10 bóng đèn LED có cùng độ sáng. Trung bình mỗi tháng 10 bóng đèn sợi đốt tiêu thụ hết 90 kWh (90 số điện), còn 10 bóng đèn LED chỉ tiêu thụ hết 15 kWh. Biết giá điện trung bình là 2.500 đồng/kWh. Hỏi mỗi năm (12 tháng) gia đình đó tiết kiệm được bao nhiêu tiền điện?',
            given_summary: 'W_cũ = 90 kWh/tháng; W_mới = 15 kWh/tháng; Giá = 2.500 đ/kWh; Thời gian = 12 tháng.',
            solution_steps: [
              'Bước 1: Số điện tiết kiệm được trong 1 tháng là: ΔW_tháng = 90 - 15 = 75 kWh.',
              'Bước 2: Số điện tiết kiệm được trong cả năm (12 tháng) là: ΔW_năm = 75 × 12 = 900 kWh.',
              'Bước 3: Số tiền tiết kiệm được trong 1 năm là: 900 × 2.500 = 2.250.000 đồng.',
            ],
            final_answer: 'Tiết kiệm được 900 kWh điện, tương đương 2.250.000 đồng/năm.',
          },
        ],
        simulation: {
          sim_key: 'renewable_energy_lab',
          title: 'Mô phỏng Trạm Năng Lượng Tái Tạo (Điện Mặt Trời & Điện Gió) & Tính Toán Tiết Kiệm',
          description:
            'Điều chỉnh cường độ bức xạ Mặt Trời và tốc độ gió để quan sát công suất phát điện sạch và lượng khí thải CO₂ giảm thiểu so với nhiệt điện than.',
          parameters: {
            defaultSunlightPercent: 80,
            defaultWindSpeedMs: 9,
          },
          guide_steps: [
            'Tăng cường độ nắng và tốc độ gió để quan sát sản lượng điện sạch từ Pin Mặt Trời và Tuabin gió.',
            'Xem bảng quy đổi số kg khí thải CO₂ giảm được mỗi ngày khi thay thế nhiệt điện than bằng năng lượng tái tạo.',
          ],
          physics_insight:
            'Pin quang điện chuyển hóa trực tiếp Quang năng thành Điện năng; Tuabin gió chuyển hóa Động năng của dòng không khí thành Điện năng mà không đốt cháy nhiên liệu.',
        },
      },
    ],
  },
  {
    order_index: 4,
    code: 'CH4',
    title: 'Chương 4: Trái Đất và Bầu trời (Vật lý Thiên văn cơ bản)',
    description:
      'Tổng hợp chuẩn 3 bộ SGK: Giải thích chuyển động nhìn thấy hằng ngày của Mặt Trời, nguyên nhân hiện tượng Ngày và Đêm do Trái Đất tự quay, các pha của Mặt Trăng trong tháng âm lịch và cấu trúc Hệ Mặt Trời - Ngân Hà.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 4: Trái Đất và Bầu trời
Chương này giúp chúng ta phân biệt giữa **chuyển động nhìn thấy (biểu kiến)** từ mặt đất và **chuyển động thực** của các thiên thể trong vũ trụ:

1. **Chuyển động nhìn thấy của Mặt Trời & Hiện tượng Ngày - Đêm:**
   - **Hiện tượng nhìn thấy:** Hằng ngày ta thấy Mặt Trời mọc ở hướng **Đông**, di chuyển trên bầu trời và lặn ở hướng **Tây**.
   - **Bản chất thực tế:** Không phải Mặt Trời quay quanh Trái Đất, mà do **Trái Đất tự quay quanh trục của nó từ Tây sang Đông** (mất khoảng $24\\text{ giờ}$ cho 1 vòng quay).
   - **Hiện tượng Ngày và Đêm:** Vì Trái Đất có dạng hình cầu nên mọi thời điểm Mặt Trời chỉ chiếu sáng được **một nửa (bán cầu ngày)**, nửa còn lại nằm trong bóng tối là **bán cầu đêm**. Nhờ Trái Đất tự quay mà mọi nơi trên Trái Đất đều lần lượt có ngày và đêm luân phiên.
2. **Mặt Trăng và các pha của Mặt Trăng:**
   - Mặt Trăng là **vệ tinh tự nhiên duy nhất** của Trái Đất, **không tự phát sáng** mà chỉ phản xạ ánh sáng Mặt Trời chiếu tới nó.
   - Mặt Trăng quay một vòng quanh Trái Đất mất khoảng $29,5\\text{ ngày}$ (1 tháng âm lịch). Tùy thuộc vào vị trí tương đối giữa Mặt Trời - Trái Đất - Mặt Trăng mà phần bề mặt Mặt Trăng được chiếu sáng hướng về Trái Đất có hình dạng khác nhau: **Không trăng (Mùng 1)** $\\rightarrow$ **Trăng lưỡi liềm đầu tháng** $\\rightarrow$ **Trăng bán nguyệt đầu tháng (Mùng 7-8)** $\\rightarrow$ **Trăng tròn (Rằm 15-16)** $\\rightarrow$ **Trăng bán nguyệt cuối tháng (22-23)**.
3. **Hệ Mặt Trời và Ngân Hà:**
   - **Hệ Mặt Trời (Thái Dương Hệ):** Gồm Mặt Trời ở tâm (là một **ngôi sao** tự phát sáng) và **8 hành tinh** quay xung quanh theo thứ tự từ gần ra xa Mặt Trời: **Thủy tinh $\\rightarrow$ Kim tinh $\\rightarrow$ Trái Đất $\\rightarrow$ Hỏa tinh $\\rightarrow$ Mộc tinh $\\rightarrow$ Thổ tinh $\\rightarrow$ Thiên Vương tinh $\\rightarrow$ Hải Vương tinh**.
   - **Ngân Hà (Milky Way):** Là một thiên hà xoắn ốc khổng lồ chứa hàng trăm tỉ ngôi sao, trong đó Hệ Mặt Trời chỉ là một hệ nhỏ nằm ở rìa một nhánh xoắn ốc.`,
    key_takeaways: [
      'Trái Đất tự quay quanh trục theo chiều từ TÂY sang ĐÔNG (chu kỳ 24 giờ), nên người trên Trái Đất nhìn thấy Mặt Trời và các sao mọc ở hướng ĐÔNG, lặn ở hướng TÂY.',
      'Sao (như Mặt Trời) là thiên thể tự phát sáng; Hành tinh (như Trái Đất, Sao Hỏa) và Vệ tinh (như Mặt Trăng) không tự phát sáng mà phản xạ ánh sáng của sao.',
      'Rằm (15 âm lịch): Trái Đất nằm giữa Mặt Trời và Mặt Trăng → Nhìn thấy Trăng tròn. Mùng 1 âm lịch: Mặt Trăng nằm giữa Mặt Trời và Trái Đất → Không trăng.',
      'Thứ tự 8 hành tinh từ gần Mặt Trời nhất ra xa: Thủy - Kim - Trái Đất - Hỏa (4 hành tinh đất đá) - Mộc - Thổ - Thiên Vương - Hải Vương (4 hành tinh khí khổng lồ).',
    ],
    formula_cheatsheet: [
      {
        name: 'Tốc độ góc tự quay của Trái Đất quanh trục',
        latex: '\\omega = \\frac{360^\\circ}{24\\,\\text{h}} = 15^\\circ / \\text{giờ}',
        note: 'Mỗi giờ Trái Đất quay được một góc 15° (cơ sở chia 24 múi giờ trên thế giới).',
      },
      {
        name: 'Chu kỳ tuần trăng (Tháng giao hội âm lịch)',
        latex: 'T_{\\text{pha Mặt Trăng}} \\approx 29,5\\,\\text{ngày}',
        note: 'Khoảng thời gian giữa hai lần Trăng tròn liên tiếp (từ Rằm tháng này đến Rằm tháng sau).',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'C4-B1',
        title: 'Chủ đề 4.1: Chuyển động nhìn thấy của Mặt Trời - Hiện tượng Ngày và Đêm',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Giải thích tại sao hằng ngày ta thấy Mặt Trời mọc ở hướng Đông và lặn ở hướng Tây dựa trên chuyển động tự quay từ Tây sang Đông của Trái Đất; hiểu nguyên nhân gây ra sự luân phiên Ngày và Đêm.',
        summary_note:
          'Trái Đất tự quay: Tây → Đông (1 vòng = 24 giờ, mỗi giờ quay 15°). Chuyển động nhìn thấy của Mặt Trời: Đông → Tây (ngược chiều tự quay của Trái Đất).',
        theory_sections: [
          {
            heading: '1. Chuyển động nhìn thấy và Chuyển động thực',
            content:
              'Khi ngồi trên một đoàn tàu đang chạy tiến về phía trước, nếu nhìn ra cửa sổ ta thấy hàng cây bên đường như đang chạy lùi về phía sau. Hàng cây đứng yên nhưng có "chuyển động nhìn thấy" ngược chiều với đoàn tàu. Tương tự, Trái Đất của chúng ta tự quay quanh trục từ Tây sang Đông, nên người đứng trên Trái Đất nhìn thấy Mặt Trời mọc ở hướng Đông, đi ngang bầu trời và lặn ở hướng Tây.',
            keyPoints: [
              'Chiều tự quay của Trái Đất quanh trục: Từ Tây sang Đông (nhìn từ cực Bắc xuống là ngược chiều kim đồng hồ).',
              'Chiều chuyển động nhìn thấy của Mặt Trời trên bầu trời: Từ Đông sang Tây.',
              'Thời gian Trái Đất tự quay hết 1 vòng quanh trục (360°) là khoảng 24 giờ (1 ngày đêm).',
            ],
            realWorldApplication:
              'Dựa vào vị trí bóng nắng của chiếc cọc thẳng đứng (Đồng hồ Mặt Trời), người xưa xác định được hướng Đông - Tây - Nam - Bắc và giờ giấc trong ngày: Buổi sáng bóng cọc ngả về hướng Tây, buổi trưa bóng ngắn nhất, buổi chiều bóng cọc ngả về hướng Đông.',
          },
          {
            heading: '2. Nguyên nhân hiện tượng Ngày và Đêm luân phiên',
            content:
              'Trái Đất có dạng hình khối cầu và không tự phát sáng. Tại mỗi thời điểm, ánh sáng Mặt Trời chỉ chiếu sáng được đúng một nửa bề mặt Trái Đất hướng về phía Mặt Trời (gọi là ban ngày), còn nửa bề mặt phía sau bị khuất ánh sáng Mặt Trời nằm trong bóng tối (gọi là ban đêm). Do Trái Đất tự quay không ngừng quanh trục từ Tây sang Đông nên mọi địa điểm trên Trái Đất đều lần lượt đi vào vùng sáng rồi vùng tối, tạo ra ngày và đêm kế tiếp nhau.',
            keyPoints: [
              'Nếu Trái Đất KHÔNG tự quay quanh trục (mà chỉ đứng yên), một nửa Trái Đất sẽ mãi mãi là ban ngày nóng bức và nửa kia mãi mãi là ban đêm băng giá.',
              'Vì Trái Đất quay từ Tây sang Đông nên các địa điểm ở phía Đông (như Nhật Bản, Việt Nam) sẽ đón bình minh sớm hơn các địa điểm ở phía Tây (như châu Âu, châu Mỹ).',
            ],
          },
        ],
        quantities: [
          {
            name: 'Chu kỳ tự quay của Trái Đất',
            symbol: 'T_{\\text{TĐ}}',
            si_unit: 's (86.400 giây)',
            other_units: 'giờ (24 giờ = 1 ngày đêm)',
            measuring_device: 'Đồng hồ thiên văn, quan trắc vị trí sao',
            description: 'Thời gian Trái Đất quay trọn 1 vòng (360°) quanh trục Bắc - Nam của nó.',
          },
        ],
        formulas: [
          {
            name: 'Góc quay của Trái Đất theo thời gian và độ lệch múi giờ',
            latex_expression: '\\alpha = 15^\\circ \\cdot t(\\text{giờ}); \\quad \\Delta t = \\frac{\\Delta \\lambda}{15^\\circ}',
            plain_expression: 'α = 15° * t(giờ); Δt = Δλ / 15°',
            variables: [
              { symbol: '\\alpha', name: 'Góc mà Trái Đất tự quay được sau t giờ', unit: 'độ (°)' },
              { symbol: 't', name: 'Thời gian quay', unit: 'giờ (h)' },
              { symbol: '\\Delta \\lambda', name: 'Độ lệch kinh độ giữa hai địa điểm trên Trái Đất', unit: 'độ (°)' },
            ],
            derived_formulas: [
              { expression: 't = \\frac{\\alpha}{15^\\circ}', description: 'Số giờ để Trái Đất quay được góc α' },
            ],
            usage_note: 'Bề mặt Trái Đất 360° được chia thành 24 múi giờ, mỗi múi giờ rộng 360° / 24 = 15° kinh tuyến.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Giải thích bóng cột cờ buổi sáng và buổi chiều',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Vào lúc 8 giờ sáng và lúc 16 giờ chiều, bóng của cột cờ trên sân trường ngả về hướng nào? Lúc mấy giờ trong ngày thì bóng cột cờ ngắn nhất?',
            given_summary: 'Mặt Trời mọc hướng Đông (sáng), lên cao nhất lúc trưa, lặn hướng Tây (chiều).',
            solution_steps: [
              'Bước 1: Lúc 8 giờ sáng, Mặt Trời ở phía Đông chiếu tia sáng sang phía Tây → Bóng của cột cờ ngả về hướng Tây.',
              'Bước 2: Lúc 12 giờ trưa, Mặt Trời lên vị trí cao nhất trên bầu trời (gần đỉnh đầu) → Bóng cột cờ ngắn nhất.',
              'Bước 3: Lúc 16 giờ chiều, Mặt Trời ở phía Tây chiếu tia sáng sang phía Đông → Bóng của cột cờ ngả về hướng Đông.',
            ],
            final_answer: '8h sáng bóng ngả hướng Tây; 16h chiều bóng ngả hướng Đông; 12h trưa bóng ngắn nhất.',
          },
          {
            title: 'Ví dụ 2: Tính góc quay của Trái Đất và chênh lệch múi giờ',
            difficulty: 'Vận dụng',
            problem_statement:
              'Trong khoảng thời gian 6 giờ (từ 6 giờ sáng đến 12 giờ trưa), Trái Đất đã tự quay quanh trục của mình một góc bao nhiêu độ?',
            given_summary: 't = 6 giờ; Tốc độ góc ω = 360° / 24h = 15°/giờ.',
            solution_steps: [
              'Bước 1: Trong 24 giờ Trái Đất quay được 360°, vậy mỗi giờ Trái Đất quay được: 360° / 24 = 15°.',
              'Bước 2: Trong 6 giờ, góc mà Trái Đất quay được là: α = 15° × 6 = 90° (tức là 1/4 vòng quay).',
            ],
            final_answer: '90°.',
          },
        ],
        simulation: {
          sim_key: 'earth_day_night_lab',
          title: 'Mô phỏng Trái Đất Tự Quay (Tây → Đông), Ngày & Đêm và Bóng Nắng Cột Cờ',
          description:
            'Thay đổi thời gian trong ngày (từ 0h đến 24h) để quan sát đồng thời góc tự quay của Trái Đất dưới chùm sáng Mặt Trời và vị trí Mặt Trời + bóng cột cờ nhìn từ mặt đất.',
          parameters: {
            defaultHour: 9,
          },
          guide_steps: [
            'Kéo thanh "Giờ địa phương" từ 6h sáng → 12h trưa → 18h tối để quan sát đường đi của Mặt Trời trên bầu trời và độ dài/hướng bóng cột cờ.',
            'Quan sát hình chiếu từ cực Bắc xuống để thấy điểm đánh dấu Việt Nam quay từ Tây sang Đông đi qua vùng Sáng (Ngày) và vùng Tối (Đêm).',
          ],
          physics_insight:
            'Bóng của vật thẳng đứng luôn hướng ngược phía với Mặt Trời và có độ dài l_bóng = h / tan(θ) với θ là góc cao của Mặt Trời.',
        },
      },
      {
        order_index: 2,
        code: 'C4-B2',
        title: 'Chủ đề 4.2: Chuyển động nhìn thấy của Mặt Trăng - Các pha Mặt Trăng',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Hiểu bản chất ánh sáng của Mặt Trăng là ánh sáng phản xạ từ Mặt Trời; giải thích tại sao hình dạng nhìn thấy của Mặt Trăng (các pha Mặt Trăng) thay đổi tuần hoàn từ Không trăng → Trăng lưỡi liềm → Trăng bán nguyệt → Trăng tròn trong tháng âm lịch.',
        summary_note:
          'Mặt Trăng KHÔNG tự phát sáng. Chu kỳ các pha Mặt Trăng ≈ 29,5 ngày. Mùng 1 âm lịch: Không trăng (Tân nguyệt); Mùng 7-8: Bán nguyệt đầu tháng (Thượng huyền); Ngày 15-16 (Rằm): Trăng tròn (Vọng); Ngày 22-23: Bán nguyệt cuối tháng (Hạ huyền).',
        theory_sections: [
          {
            heading: '1. Bản chất ánh sáng của Mặt Trăng',
            content:
              'Mặt Trăng là vệ tinh tự nhiên duy nhất của Trái Đất. Bản thân Mặt Trăng là một khối đá lạnh, hoàn toàn KHÔNG tự phát ra ánh sáng. Sở dĩ ban đêm chúng ta nhìn thấy Mặt Trăng sáng là vì bề mặt Mặt Trăng được Mặt Trời chiếu sáng rồi phản xạ (hắt lại) ánh sáng đó về phía mắt người trên Trái Đất.',
            keyPoints: [
              'Dù ở bất kỳ vị trí nào trên quỹ đạo (ngoài lúc nguyệt thực), Mặt Trời cũng luôn chiếu sáng đúng một nửa hình cầu Mặt Trăng hướng về phía Mặt Trời.',
              'Tuy nhiên, phần nửa sáng đó quay về phía Trái Đất nhiều hay ít lại thay đổi theo vị trí của Mặt Trăng trên quỹ đạo quay quanh Trái Đất.',
            ],
          },
          {
            heading: '2. Giải thích các pha của Mặt Trăng trong tháng âm lịch',
            content:
              'Mặt Trăng quay quanh Trái Đất từ Tây sang Đông. Thời gian để lặp lại một chu kỳ các hình dạng nhìn thấy (gọi là tuần trăng hay tháng âm lịch) là khoảng 29,5 ngày:',
            keyPoints: [
              '(1) Không trăng (Mùng 1 âm lịch - Sóc): Mặt Trăng nằm ở khoảng giữa Mặt Trời và Trái Đất. Nửa tối của Mặt Trăng hướng hoàn toàn về phía Trái Đất nên ta không nhìn thấy trăng.',
              '(2) Trăng lưỡi liềm đầu tháng (Mùng 2 - 5): Nhìn thấy một phần nhỏ viền sáng hình lưỡi liềm.',
              '(3) Trăng bán nguyệt đầu tháng (Mùng 7 - 8 - Thượng huyền): Hướng nhìn từ Trái Đất tới Mặt Trăng vuông góc 90° với tia sáng Mặt Trời → Ta nhìn thấy đúng nửa đĩa trăng sáng.',
              '(4) Trăng tròn (Ngày 15 - 16 Rằm - Vọng): Trái Đất nằm ở khoảng giữa Mặt Trời và Mặt Trăng. Toàn bộ nửa được chiếu sáng của Mặt Trăng hướng trọn vẹn về phía Trái Đất.',
              '(5) Trăng bán nguyệt cuối tháng (Ngày 22 - 23 - Hạ huyền) và Trăng lưỡi liềm cuối tháng (25 - 28) trước khi quay lại Không trăng.',
            ],
            realWorldApplication:
              'Lịch âm (Nông lịch) truyền thống của Việt Nam và phương Đông được xây dựng trực tiếp dựa trên chu kỳ 29,5 ngày của các pha Mặt Trăng (do đó tháng âm lịch có tháng thiếu 29 ngày và tháng đủ 30 ngày).',
          },
        ],
        quantities: [
          {
            name: 'Chu kỳ tuần trăng (Tháng giao hội)',
            symbol: 'T_{\\text{pha}}',
            si_unit: 's',
            other_units: 'ngày (≈ 29,5 ngày)',
            measuring_device: 'Quan sát thiên văn / Lịch âm',
            description: 'Khoảng thời gian giữa hai lần liên tiếp Mặt Trăng có cùng một pha (ví dụ hai đêm Rằm liên tiếp).',
          },
        ],
        formulas: [
          {
            name: 'Liên hệ Ngày Âm lịch và Góc vị trí Mặt Trăng - Trái Đất - Mặt Trời',
            latex_expression: '\\theta \\approx \\frac{\\text{Ngày âm lịch} - 1}{29,5} \\times 360^\\circ',
            plain_expression: 'θ ≈ ((Ngày_âm - 1) / 29,5) * 360°',
            variables: [
              { symbol: '\\theta', name: 'Góc lệch của Mặt Trăng so với hướng Mặt Trời nhìn từ Trái Đất', unit: 'độ (°)' },
            ],
            derived_formulas: [
              { expression: '\\theta = 0^\\circ \\Rightarrow \\text{Không trăng (Mùng 1)}', description: 'Mặt Trăng nằm cùng phía Mặt Trời' },
              { expression: '\\theta = 90^\\circ \\Rightarrow \\text{Bán nguyệt đầu tháng (Mùng 8)}', description: 'Góc vuông 90°' },
              { expression: '\\theta = 180^\\circ \\Rightarrow \\text{Trăng tròn (Ngày 15 Rằm)}', description: 'Mặt Trăng đối diện Mặt Trời qua Trái Đất' },
            ],
            usage_note: 'Giúp xác định nhanh hình dạng Mặt Trăng khi biết ngày âm lịch hoặc góc trên hình vẽ quỹ đạo.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Xác định vị trí Mặt Trăng vào đêm Rằm Trung Thu (15/8 âm lịch)',
            difficulty: 'Cơ bản',
            problem_statement:
              'Vào đêm Tết Trung Thu (15 tháng 8 âm lịch), chúng ta nhìn thấy Mặt Trăng có hình dạng gì? Khi đó trong không gian, thiên thể nào nằm ở khoảng giữa hai thiên thể còn lại (trong hệ Mặt Trời - Trái Đất - Mặt Trăng)?',
            given_summary: 'Ngày 15 âm lịch (Rằm).',
            solution_steps: [
              'Bước 1: Ngày 15 âm lịch là giữa tháng âm lịch → Mặt Trăng ở pha Trăng tròn.',
              'Bước 2: Để người đứng ở nửa đêm trên Trái Đất nhìn thấy toàn bộ mặt được chiếu sáng của Mặt Trăng, Trái Đất phải nằm ở khoảng giữa Mặt Trời và Mặt Trăng (góc lệch θ ≈ 180°).',
            ],
            final_answer: 'Nhìn thấy Trăng tròn; Trái Đất nằm ở khoảng giữa Mặt Trời và Mặt Trăng.',
          },
        ],
        simulation: {
          sim_key: 'moon_phases_lab',
          title: 'Mô phỏng Quỹ Đạo Mặt Trăng & 8 Pha Mặt Trăng Theo Ngày Âm Lịch',
          description:
            'Kéo thanh trượt "Ngày âm lịch (1 → 30)" hoặc góc quỹ đạo để quan sát đồng thời vị trí Mặt Trăng quay quanh Trái Đất và hình ảnh Mặt Trăng thực tế nhìn từ mặt đất.',
          parameters: {
            defaultLunarDay: 15,
          },
          guide_steps: [
            'Chọn Ngày 1 âm lịch để thấy nửa tối của Mặt Trăng quay về Trái Đất (Không trăng).',
            'Kéo sang Ngày 8 (Bán nguyệt đầu tháng), Ngày 15 (Trăng tròn Rằm) và Ngày 23 (Bán nguyệt cuối tháng) để quan sát sự biến đổi phần sáng nhìn thấy.',
          ],
          physics_insight:
            'Mặt Trăng luôn có đúng 50% diện tích bề mặt được Mặt Trời chiếu sáng; các pha Mặt Trăng sinh ra do góc nhìn từ Trái Đất tới bán cầu sáng đó thay đổi từ 0° đến 360°.',
        },
      },
      {
        order_index: 3,
        code: 'C4-B3',
        title: 'Chủ đề 4.3: Hệ Mặt Trời và Ngân Hà',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Nắm vững cấu trúc Hệ Mặt Trời gồm Mặt Trời ở trung tâm và 8 hành tinh quay xung quanh theo đúng thứ tự từ trong ra ngoài; phân biệt rõ Sao, Hành tinh, Vệ tinh, Sao chổi và hiểu vị trí của Hệ Mặt Trời trong thiên hà Ngân Hà (Milky Way).',
        summary_note:
          'Mẹo nhớ thứ tự 8 hành tinh từ gần Mặt Trời ra xa: "Thủy - Kim - Trái (Đất) - Hỏa - Mộc - Thổ - Thiên (Vương) - Hải (Vương)". Mặt Trời là NGÔI SAO duy nhất trong Hệ Mặt Trời!',
        theory_sections: [
          {
            heading: '1. Phân biệt Sao, Hành tinh và Vệ tinh',
            content:
              'Trong vũ trụ: (1) Sao (Star, ví dụ Mặt Trời) là thiên thể khí nóng sáng khổng lồ có khả năng TỰ PHÁT RA ÁNH SÁNG; (2) Hành tinh (Planet, ví dụ Trái Đất, Sao Hỏa, Sao Mộc) là thiên thể không tự phát sáng, chuyển động trên quỹ đạo gần tròn xung quanh một ngôi sao và phản xạ ánh sáng của ngôi sao đó; (3) Vệ tinh (Moon/Satellite, ví dụ Mặt Trăng) là thiên thể quay xung quanh một hành tinh.',
            keyPoints: [
              'Trong dân gian Việt Nam hay gọi Kim tinh là "Sao Kim" (sao Mai / sao Hôm), Hỏa tinh là "Sao Hỏa"... nhưng về mặt Vật lý thiên văn, chúng là các HÀNH TINH chứ không phải là ngôi sao!',
              'Mặt Trời là ngôi sao duy nhất trong Hệ Mặt Trời.',
            ],
          },
          {
            heading: '2. Cấu trúc Hệ Mặt Trời và 8 Hành tinh',
            content:
              'Hệ Mặt Trời (Thái Dương Hệ) có Mặt Trời nằm ở trung tâm (chiếm hơn 99,8% tổng khối lượng toàn hệ) và 8 hành tinh cùng các tiểu hành tinh, sao chổi chuyển động xung quanh theo cùng một chiều. Thứ tự 8 hành tinh tính từ gần Mặt Trời nhất ra xa dần:',
            keyPoints: [
              'Nhóm 4 hành tinh vòng trong (bề mặt rắn, đất đá): (1) Thủy tinh → (2) Kim tinh → (3) Trái Đất → (4) Hỏa tinh.',
              'Nhóm 4 hành tinh vòng ngoài (khí và băng khổng lồ): (5) Mộc tinh (lớn nhất Hệ Mặt Trời) → (6) Thổ tinh (có vành đai tuyệt đẹp) → (7) Thiên Vương tinh → (8) Hải Vương tinh (xa nhất).',
              'Hành tinh càng ở xa Mặt Trời thì chu kỳ quay 1 vòng quanh Mặt Trời (1 năm của hành tinh đó) càng dài (Thủy tinh chỉ mất 88 ngày, Trái Đất mất 365,25 ngày, còn Hải Vương tinh mất tới 165 năm Trái Đất!).',
            ],
            realWorldApplication:
              'Kim tinh (Venus) phản xạ ánh sáng Mặt Trời rất mạnh nên thường nhìn thấy rõ bằng mắt thường vào lúc chạng vạng tối (gọi là sao Hôm) hoặc rạng sáng (gọi là sao Mai).',
          },
          {
            heading: '3. Ngân Hà (Milky Way)',
            content:
              'Ngân Hà là một tập hợp khổng lồ gồm hàng trăm tỉ ngôi sao, bụi và khí liên sao gắn kết với nhau bằng lực hấp dẫn. Nhìn từ bên ngoài, Ngân Hà có hình dạng đĩa phẳng xoắn ốc với 4 nhánh xoắn chính. Hệ Mặt Trời của chúng ta chỉ là một hệ sao nhỏ nằm ở rìa một nhánh xoắn ốc của Ngân Hà (cách tâm Ngân Hà khoảng 26.000 năm ánh sáng).',
            keyPoints: [
              'Vào những đêm trời quang không trăng, nhìn lên bầu trời ta thấy một dải sáng mờ vắt ngang như dòng sông bạc — đó chính là hình ảnh đĩa Ngân Hà nhìn từ bên trong (dải Ngân Hà).',
              'Không phải Ngân Hà chuyển động quanh Trái Đất, mà cả Hệ Mặt Trời đang chuyển động quay quanh tâm Ngân Hà.',
            ],
          },
        ],
        quantities: [
          {
            name: 'Đơn vị thiên văn (Khoảng cách Trái Đất - Mặt Trời)',
            symbol: '\\text{AU}',
            si_unit: 'm (≈ 1,5 × 10¹¹ m)',
            other_units: 'km (≈ 150 triệu km), Năm ánh sáng (ly)',
            measuring_device: 'Radar thiên văn, phép đo thị sai thiên văn',
            description: '1 AU (Astronomical Unit) là khoảng cách trung bình từ Trái Đất đến Mặt Trời (khoảng 150 triệu km).',
          },
        ],
        formulas: [
          {
            name: 'Thời gian ánh sáng truyền từ Mặt Trời tới hành tinh',
            latex_expression: 't = \\frac{d}{c}',
            plain_expression: 't = d / c',
            variables: [
              { symbol: 't', name: 'Thời gian ánh sáng đi từ Mặt Trời tới hành tinh', unit: 's (giây)' },
              { symbol: 'd', name: 'Khoảng cách từ Mặt Trời đến hành tinh', unit: 'km' },
              { symbol: 'c', name: 'Tốc độ ánh sáng trong chân không (c ≈ 300.000 km/s)', unit: 'km/s' },
            ],
            derived_formulas: [
              { expression: 'd = c \\cdot t', description: 'Tính khoảng cách thiên văn khi biết thời gian ánh sáng truyền đi' },
            ],
            usage_note: 'Ánh sáng từ Mặt Trời (cách 150.000.000 km) mất t = 150.000.000 / 300.000 = 500 giây ≈ 8 phút 20 giây để truyền tới Trái Đất!',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính thời gian ánh sáng Mặt Trời truyền tới Trái Đất',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Biết khoảng cách trung bình từ Mặt Trời đến Trái Đất là 150 triệu km (150.000.000 km) và ánh sáng truyền trong vũ trụ với tốc độ c = 300.000 km/s. Hỏi ánh sáng từ Mặt Trời phải mất bao nhiêu giây (và đổi ra phút, giây) để đến được Trái Đất?',
            given_summary: 'd = 150.000.000 km; c = 300.000 km/s.',
            solution_steps: [
              'Bước 1: Áp dụng công thức t = d / c = 150.000.000 / 300.000 = 500 giây.',
              'Bước 2: Đổi 500 giây ra phút và giây: 500 = 8 × 60 + 20 → 8 phút 20 giây.',
            ],
            final_answer: '500 giây (tức 8 phút 20 giây).',
          },
        ],
        simulation: {
          sim_key: 'solar_system_lab',
          title: 'Mô phỏng Hệ Mặt Trời (8 Hành Tinh) & Ngân Hà Tương Tác',
          description:
            'Chọn từng hành tinh trong 8 hành tinh của Hệ Mặt Trời để quan sát quỹ đạo quay quanh Mặt Trời, khoảng cách (AU), chu kỳ năm, nhiệt độ bề mặt và phân nhóm Đất đá vs Khí khổng lồ.',
          parameters: {
            defaultPlanetIndex: 2,
            defaultTimeSpeed: 1,
          },
          guide_steps: [
            'Nhấn vào từng hành tinh từ Thủy tinh (1) đến Hải Vương tinh (8) để xem thông số vật lý thiên văn chi tiết.',
            'Quan sát quy luật: Hành tinh càng ở gần Mặt Trời thì chuyển động trên quỹ đạo càng nhanh và chu kỳ 1 năm càng ngắn.',
          ],
          physics_insight:
            'Theo định luật III Kepler, bình phương chu kỳ quay của hành tinh quanh Mặt Trời tỉ lệ thuận với lập phương bán kính quỹ đạo (T² ∝ R³).',
        },
      },
    ],
  },
];

export const OTHER_GRADES_OUTLINE: {
  grade_number: number;
  title: string;
  subtitle: string;
  description: string;
  level_group: 'THCS' | 'THPT';
  chapters: { code: string; title: string; description: string }[];
}[] = [
  {
    grade_number: 7,
    title: 'Vật Lý Lớp 7 (KHTN 7)',
    subtitle: 'Tốc độ • Âm thanh • Ánh sáng • Từ trường',
    description: 'Chương trình Vật lý Lớp 7 tổng hợp 3 bộ SGK: Tốc độ chuyển động (v = s/t), Sóng âm, Phản xạ ánh sáng và Từ trường Trái Đất.',
    level_group: 'THCS',
    chapters: [
      { code: 'G7-CH1', title: 'Chương 1: Tốc độ và Chuyển động', description: 'Tốc độ chuyển động, đồ thị quãng đường - thời gian và đo tốc độ.' },
      { code: 'G7-CH2', title: 'Chương 2: Âm thanh', description: 'Mô tả sóng âm, độ to (dB), độ cao (Hz) và phản xạ âm - tiếng vang.' },
      { code: 'G7-CH3', title: 'Chương 3: Ánh sáng', description: 'Ánh sáng, tia sáng, sự phản xạ ánh sáng và ảnh của vật tạo bởi gương phẳng.' },
      { code: 'G7-CH4', title: 'Chương 4: Từ trường (Nam châm & Điện từ)', description: 'Nam châm, từ trường, từ phổ, từ trường Trái Đất và nam châm điện.' },
    ],
  },
  {
    grade_number: 8,
    title: 'Vật Lý Lớp 8 (KHTN 8)',
    subtitle: 'Khối lượng riêng & Áp suất • Tác dụng làm quay • Điện • Nhiệt',
    description: 'Chương trình Vật lý Lớp 8 tổng hợp 3 bộ SGK: Khối lượng riêng, Áp suất, Lực đẩy Archimedes, Moment lực, Dòng điện và Nhiệt năng.',
    level_group: 'THCS',
    chapters: [
      { code: 'G8-CH1', title: 'Chương 1: Khối lượng riêng và Áp suất', description: 'Khối lượng riêng D = m/V, áp suất p = F/S, áp suất chất lỏng - khí quyển và lực đẩy Archimedes.' },
      { code: 'G8-CH2', title: 'Chương 2: Tác dụng làm quay của lực (Moment lực)', description: 'Moment lực, đòn bẩy và điều kiện cân bằng vật rắn.' },
      { code: 'G8-CH3', title: 'Chương 3: Điện học (Sự nhiễm điện & Mạch điện)', description: 'Sự nhiễm điện do cọ xát, dòng điện, cường độ dòng điện (I) và hiệu điện thế (U).' },
      { code: 'G8-CH4', title: 'Chương 4: Nhiệt học (Năng lượng nhiệt & Truyền nhiệt)', description: 'Nội năng, dẫn nhiệt, đối lưu, bức xạ nhiệt và sự nở vì nhiệt.' },
    ],
  },
  {
    grade_number: 9,
    title: 'Vật Lý Lớp 9 (KHTN 9)',
    subtitle: 'Cơ năng • Quang hình học • Định luật Ohm & Công suất điện • Cảm ứng điện từ',
    description: 'Chương trình Vật lý Lớp 9 tổng hợp 3 bộ SGK: Công và Công suất, Khúc xạ ánh sáng & Thấu kính, Định luật Ohm và Cảm ứng điện từ.',
    level_group: 'THCS',
    chapters: [
      { code: 'G9-CH1', title: 'Chương 1: Năng lượng cơ học (Công & Công suất)', description: 'Động năng Wđ = ½mv², thế năng Wt = Ph, cơ năng, công A = F·s và công suất P = A/t.' },
      { code: 'G9-CH2', title: 'Chương 2: Ánh sáng (Khúc xạ & Thấu kính)', description: 'Khúc xạ ánh sáng, phản xạ toàn phần, lăng kính, thấu kính hội tụ - phân kỳ và kính lúp.' },
      { code: 'G9-CH3', title: 'Chương 3: Điện học (Định luật Ohm & Năng lượng điện)', description: 'Điện trở R, Định luật Ohm I = U/R, đoạn mạch nối tiếp - song song, công suất điện P = U·I.' },
      { code: 'G9-CH4', title: 'Chương 4: Điện từ học (Cảm ứng điện từ & Dòng xoay chiều)', description: 'Cảm ứng điện từ, dòng điện xoay chiều và tác dụng của dòng điện xoay chiều.' },
    ],
  },
  {
    grade_number: 10,
    title: 'Vật Lý Lớp 10 (THPT)',
    subtitle: 'Động học • Động lực học Newton • Năng lượng • Động lượng • Chuyển động tròn • Biến dạng',
    description: 'Chương trình Vật lý Lớp 10 chuyên sâu: Chuyển động biến đổi, Ba định luật Newton, Bảo toàn cơ năng & động lượng, Chuyển động tròn đều.',
    level_group: 'THPT',
    chapters: [
      { code: 'G10-CH1', title: 'Chương 1: Mở đầu & Sai số phép đo Vật lý', description: 'Đối tượng Vật lý, quy tắc an toàn và cách tính sai số tuyệt đối - tỉ đối.' },
      { code: 'G10-CH2', title: 'Chương 2: Động học (Mô tả chuyển động)', description: 'Độ dịch chuyển, vận tốc, gia tốc, chuyển động thẳng biến đổi đều và ném ngang/ném xiên.' },
      { code: 'G10-CH3', title: 'Chương 3: Động lực học (Ba định luật Newton)', description: 'Tổng hợp - phân tích lực, Ba định luật Newton, lực ma sát và lực cản chất lưu.' },
      { code: 'G10-CH4', title: 'Chương 4: Công, Năng lượng và Công suất', description: 'Công A = F·s·cosα, định lý động năng và định luật bảo toàn cơ năng.' },
      { code: 'G10-CH5', title: 'Chương 5: Động lượng và Va chạm', description: 'Động lượng p = m·v, xung lượng của lực và định luật bảo toàn động lượng.' },
      { code: 'G10-CH6', title: 'Chương 6: Chuyển động tròn đều & Biến dạng vật rắn', description: 'Tốc độ góc, gia tốc hướng tâm, lực hướng tâm và định luật Hooke F_đh = k|Δl|.' },
    ],
  },
  {
    grade_number: 11,
    title: 'Vật Lý Lớp 11 (THPT)',
    subtitle: 'Dao động cơ • Sóng cơ & Sóng điện từ • Điện trường • Dòng điện không đổi',
    description: 'Chương trình Vật lý Lớp 11 chuyên sâu: Dao động điều hòa, Giao thoa sóng - Sóng dừng, Định luật Coulomb & Tụ điện, Định luật Ohm toàn mạch.',
    level_group: 'THPT',
    chapters: [
      { code: 'G11-CH1', title: 'Chương 1: Dao động điều hòa', description: 'Phương trình x = A·cos(ωt + φ), con lắc lò xo, con lắc đơn và năng lượng dao động.' },
      { code: 'G11-CH2', title: 'Chương 2: Sóng cơ và Sóng điện từ', description: 'Bước sóng λ = v·T, giao thoa sóng hai nguồn kết hợp, sóng dừng và thang sóng điện từ.' },
      { code: 'G11-CH3', title: 'Chương 3: Điện trường (Định luật Coulomb & Tụ điện)', description: 'Lực tương tác tĩnh điện Coulomb, cường độ điện trường E, điện thế U và điện dung tụ điện C.' },
      { code: 'G11-CH4', title: 'Chương 4: Dòng điện, Mạch điện và Nguồn điện', description: 'Cường độ dòng điện, điện trở nhiệt, suất điện động E và định luật Ohm cho toàn mạch.' },
    ],
  },
  {
    grade_number: 12,
    title: 'Vật Lý Lớp 12 (THPT)',
    subtitle: 'Vật lý Nhiệt • Khí lý tưởng • Từ trường & Cảm ứng điện từ • Vật lý Hạt nhân',
    description: 'Chương trình Vật lý Lớp 12 chuẩn thi Tốt nghiệp THPT mới: Nhiệt học & Định luật I NĐLH, Phương trình trạng thái khí lý tưởng, Từ thông Faraday và Hạt nhân.',
    level_group: 'THPT',
    chapters: [
      { code: 'G12-CH1', title: 'Chương 1: Vật lý Nhiệt (Nội năng & Chuyển thể)', description: 'Định luật I Nhiệt động lực học ΔU = A + Q, nhiệt dung riêng c, nhiệt nóng chảy λ và nhiệt hóa hơi L.' },
      { code: 'G12-CH2', title: 'Chương 2: Khí lý tưởng', description: 'Mô hình động học phân tử khí, định luật Boyle, định luật Charles và phương trình pV/T = const.' },
      { code: 'G12-CH3', title: 'Chương 3: Từ trường và Cảm ứng điện từ', description: 'Lực từ F = BIl·sinθ, từ thông Φ, định luật Faraday - Lenz và đại cương dòng điện xoay chiều.' },
      { code: 'G12-CH4', title: 'Chương 4: Vật lý Hạt nhân và Phóng xạ', description: 'Cấu tạo hạt nhân, độ hụt khối Δm, năng lượng liên kết E = Δm·c², phản ứng phân hạch - nhiệt hạch và định luật phóng xạ.' },
    ],
  },
];

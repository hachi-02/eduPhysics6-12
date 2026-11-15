import { SeedChapterData } from './grade6-curriculum';

export const GRADE_7_CHAPTERS_PART2: SeedChapterData[] = [
  {
    order_index: 3,
    code: 'G7-CH3',
    title: 'Chương 3: Ánh sáng',
    description:
      'Tổng hợp chuẩn 3 bộ SGK Lớp 7: Sự truyền thẳng của ánh sáng, tia sáng và 3 loại chùm sáng, giải thích vùng tối - vùng nửa tối (Nhật thực, Nguyệt thực), Định luật phản xạ ánh sáng (i\' = i), phân biệt phản xạ gương - phản xạ khuếch tán và tính chất ảnh của vật tạo bởi gương phẳng.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 3: Ánh sáng
1. **Sự truyền ánh sáng, Tia sáng và Vùng tối:**
   - **Định luật truyền thẳng của ánh sáng:** Trong môi trường **trong suốt và đồng tính**, ánh sáng truyền đi theo **đường thẳng**.
   - **Tia sáng:** Đường truyền của ánh sáng được biểu diễn bằng một **đường thẳng có mũi tên chỉ hướng**.
   - **Ba loại chùm sáng:** Chùm sáng **song song** (các tia không giao nhau), chùm sáng **hội tụ** (các tia giao nhau tại 1 điểm) và chùm sáng **phân kỳ** (các tia loe rộng ra).
   - **Vùng tối (Bóng tối) và Vùng nửa tối (Bóng nửa tối):**
     - **Vùng tối:** Nằm phía sau vật cản, **không nhận được bất kỳ tia sáng nào** từ nguồn sáng truyền tới.
     - **Vùng nửa tối:** Nằm phía sau vật cản, **chỉ nhận được một phần ánh sáng** từ nguồn sáng rộng truyền tới.
     - Ứng dụng giải thích **Nhật thực** (Mặt Trăng chắn giữa Mặt Trời và Trái Đất) và **Nguyệt thực** (Trái Đất chắn giữa Mặt Trời và Mặt Trăng).
2. **Định luật Phản xạ ánh sáng:**
   - **Tia phản xạ** nằm trong **cùng mặt phẳng** chứa tia tới và đường pháp tuyến tại điểm tới ($IN \\perp$ mặt gương tại $I$).
   - **Góc phản xạ luôn bằng góc tới:** **$i' = i$** *(Trong đó $i$ là góc hợp bởi tia tới $SI$ và pháp tuyến $IN$; $i'$ là góc hợp bởi tia phản xạ $IR$ và pháp tuyến $IN$)*.
   - Nếu tia tới hợp với mặt gương một góc $\\alpha$, thì **góc tới là $i = 90^\\circ - \\alpha$**, và **góc hợp bởi tia tới với tia phản xạ là $i + i' = 2i$**.
   - Phân biệt **Phản xạ gương** (trên bề mặt phẳng, nhẵn bóng $\\rightarrow$ nhìn thấy ảnh rõ nét) và **Phản xạ khuếch tán / Tán xạ** (trên bề mặt gồ ghề $\\rightarrow$ chùm tia tới song song bị hắt lại theo mọi hướng, không nhìn thấy ảnh).
3. **Ảnh của vật tạo bởi Gương phẳng:**
   - **3 Tính chất của ảnh tạo bởi gương phẳng:**
     1. Ảnh là **ảnh ảo** (không hứng được trên màn chắn).
     2. Độ lớn của ảnh **bằng độ lớn của vật** ($A'B' = AB$).
     3. Khoảng cách từ một điểm của vật đến gương phẳng **bằng khoảng cách từ ảnh của điểm đó đến gương** ($d' = d$, tức $A'H = AH$ và $AA' \\perp$ mặt gương).`,
    key_takeaways: [
      'Trong môi trường trong suốt và đồng tính, ánh sáng truyền đi theo đường thẳng.',
      'Góc tới (i) là góc hợp bởi TIA TỚI và ĐƯỜNG PHÁP TUYẾN (vuông góc với gương), tuyệt đối không nhầm với góc hợp bởi tia tới và mặt gương (α)! Ta luôn có: i = 90° - α.',
      'Định luật phản xạ ánh sáng: Góc phản xạ luôn bằng góc tới (i\' = i). Khi chiếu tia sáng vuông góc với mặt gương thì góc tới i = 0° ⇒ góc phản xạ i\' = 0° (tia phản xạ truyền ngược lại đúng đường tia tới).',
      'Ảnh của vật qua gương phẳng luôn là ẢNH ẢO, có kích thước BẰNG VẬT (dù đưa vật lại gần hay ra xa gương thì kích thước ảnh vẫn không đổi!) và đối xứng với vật qua mặt gương (d\' = d).',
      'Khi vật tiến lại gần gương phẳng một đoạn x (cm) thì khoảng cách từ vật đến ảnh của nó giảm đi một đoạn 2x (cm)!',
    ],
    formula_cheatsheet: [
      {
        name: 'Định luật Phản xạ ánh sáng',
        latex: "i' = i",
        note: 'i: góc tới (hợp bởi tia tới SI và pháp tuyến IN); i\': góc phản xạ (hợp bởi tia phản xạ IR và pháp tuyến IN).',
      },
      {
        name: 'Liên hệ giữa Góc tới (i) và Góc hợp bởi tia tới với mặt gương (α)',
        latex: 'i = 90^\\circ - \\alpha \\quad \\Rightarrow \\quad \\widehat{SIR} = i + i\' = 2i',
        note: 'Đề bài rất hay cho góc hợp bởi tia sáng và mặt gương α (ví dụ α = 30° ⇒ góc tới i = 90° - 30° = 60°!).',
      },
      {
        name: 'Khoảng cách từ Vật và Ảnh đến Gương phẳng',
        latex: "d' = d \\quad \\Rightarrow \\quad L_{\\text{vật - ảnh}} = d + d' = 2d",
        note: 'd: khoảng cách từ vật đến gương; d\': khoảng cách từ ảnh đến gương; L = 2d là khoảng cách từ vật đến ảnh của nó.',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'G7-C3-B1',
        title: 'Chủ đề 3.1: Ánh sáng, Tia sáng và Vùng tối (Nhật thực - Nguyệt thực)',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Nắm vững định luật truyền thẳng của ánh sáng, cách biểu diễn tia sáng và 3 loại chùm sáng (song song, hội tụ, phân kỳ), giải thích sự tạo thành vùng tối - vùng nửa tối và hiện tượng Nhật thực - Nguyệt thực.',
        summary_note:
          'Ánh sáng truyền theo đường thẳng trong môi trường trong suốt và đồng tính. Nhật thực xảy ra vào ban ngày (Mùng 1 âm lịch) khi Mặt Trăng chắn giữa Mặt Trời và Trái Đất; Nguyệt thực xảy ra vào đêm Rằm (15 âm lịch) khi Trái Đất chắn giữa Mặt Trời và Mặt Trăng.',
        theory_sections: [
          {
            heading: '1. Năng lượng ánh sáng, Nguồn sáng và Vật sáng',
            content:
              'Ánh sáng là một dạng năng lượng (quang năng) giúp mắt ta nhìn thấy các vật, giúp cây xanh quang hợp và pin Mặt Trời phát điện. Nguồn sáng là vật tự nó phát ra ánh sáng (như Mặt Trời, bóng đèn đang bật, ngọn nến đang cháy, con đom đóm). Vật sáng bao gồm cả nguồn sáng và những vật hắt lại ánh sáng chiếu vào nó (như Mặt Trăng, trang sách dưới ánh đèn).',
            keyPoints: [
              'Ta nhìn thấy một vật khi có ánh sáng từ vật đó truyền vào mắt ta.',
              'Vật màu đen không tự phát sáng và cũng hấp thụ hầu hết ánh sáng chiếu tới nó; ta nhận ra vật màu đen vì nó đặt cạnh các vật sáng khác.',
            ],
          },
          {
            heading: '2. Tia sáng và Ba loại chùm sáng',
            content:
              'Trong môi trường trong suốt và đồng tính (như không khí đồng nhất, nước trong, thủy tinh), ánh sáng truyền đi theo đường thẳng. Đường truyền của ánh sáng được biểu diễn bằng một đường thẳng có mũi tên chỉ hướng gọi là Tia sáng. Trong thực tế ta không nhìn thấy một tia sáng đơn lẻ mà chỉ thấy Chùm sáng gồm rất nhiều tia sáng hợp thành:',
            keyPoints: [
              '(1) Chùm sáng song song: Các tia sáng không giao nhau trên đường truyền của chúng (ví dụ: chùm tia sáng từ Mặt Trời ở rất xa chiếu tới Trái Đất, chùm tia laser).',
              '(2) Chùm sáng hội tụ: Các tia sáng tiến lại gần nhau và cắt nhau (giao nhau) tại một điểm (ví dụ: chùm sáng sau khi đi qua kính lúp).',
              '(3) Chùm sáng phân kỳ: Các tia sáng loe rộng ra xa nhau trên đường truyền (ví dụ: chùm sáng phát ra từ bóng đèn pin, ngọn nến).',
            ],
          },
          {
            heading: '3. Vùng tối, Vùng nửa tối và Hiện tượng Nhật thực – Nguyệt thực',
            content:
              'Khi đặt một vật cản sáng (không trong suốt) trước một nguồn sáng: (1) Nếu nguồn sáng rất nhỏ (nguồn sáng điểm), phía sau vật cản có một vùng hoàn toàn không nhận được ánh sáng gọi là Vùng tối (Bóng tối); (2) Nếu nguồn sáng rộng (như bóng đèn huỳnh quang dài hoặc Mặt Trời), phía sau vật cản ngoài vùng tối hoàn toàn ở giữa còn có vùng viền xung quanh chỉ nhận được một phần ánh sáng truyền tới gọi là Vùng nửa tối (Bóng nửa tối).',
            keyPoints: [
              'Nhật thực: Xảy ra vào ban ngày (ngày Mùng 1 âm lịch) khi Mặt Trăng đi vào giữa Mặt Trời và Trái Đất, chặn ánh sáng Mặt Trời chiếu xuống một vùng trên Trái Đất (nơi nằm trong bóng tối của Mặt Trăng thấy Nhật thực toàn phần; nơi nằm trong bóng nửa tối thấy Nhật thực một phần).',
              'Nguyệt thực: Xảy ra vào ban đêm (đêm Rằm 15 âm lịch) khi Trái Đất nằm giữa Mặt Trời và Mặt Trăng, làm Mặt Trăng đi vào vùng bóng tối của Trái Đất và bị che khuất dần.',
            ],
            realWorldApplication:
              'Trong phòng mổ bệnh viện, các bác sĩ dùng hệ thống đèn mổ gồm nhiều bóng đèn nhỏ ghép rộng trên chao đèn lớn để triệt tiêu bóng tối của bàn tay bác sĩ, giúp vùng phẫu thuật luôn sáng rõ.',
          },
        ],
        quantities: [
          {
            name: 'Tốc độ truyền ánh sáng trong chân không / không khí',
            symbol: 'c',
            si_unit: 'm/s (≈ 300.000.000 m/s = 3 × 10⁸ m/s)',
            other_units: 'km/s (≈ 300.000 km/s)',
            measuring_device: 'Giao thoa kế laser',
            description: 'Tốc độ lớn nhất trong vũ trụ. Trong nước ánh sáng truyền chậm hơn (≈ 225.000 km/s).',
          },
        ],
        formulas: [
          {
            name: 'Tỉ lệ độ dài bóng của vật thẳng đứng theo tam giác đồng dạng (Truyền thẳng ánh sáng)',
            latex_expression: '\\frac{h_{\\text{vật}}}{h_{\\text{cọc}}} = \\frac{l_{\\text{bóng vật}}}{l_{\\text{bóng cọc}}}',
            plain_expression: 'h_vật / h_cọc = l_bóng_vật / l_bóng_cọc',
            variables: [
              { symbol: 'h_{\\text{vật}}, h_{\\text{cọc}}', name: 'Chiều cao của tòa nhà/cây và chiều cao của chiếc cọc mẫu', unit: 'm (hoặc cm)' },
              { symbol: 'l_{\\text{bóng vật}}, l_{\\text{bóng cọc}}', name: 'Độ dài bóng nắng trên sân phẳng tại cùng thời điểm', unit: 'm (hoặc cm)' },
            ],
            derived_formulas: [
              { expression: 'h_{\\text{vật}} = h_{\\text{cọc}} \\cdot \\frac{l_{\\text{bóng vật}}}{l_{\\text{bóng cọc}}}', description: 'Đo chiều cao cột cờ hoặc cây cổ thụ mà không cần trèo lên' },
            ],
            usage_note: 'Áp dụng tính chất truyền thẳng của chùm tia nắng Mặt Trời song song tại cùng một thời điểm.',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Ứng dụng sự truyền thẳng ánh sáng để đo chiều cao cột cờ sân trường',
            difficulty: 'Vận dụng',
            problem_statement:
              'Để đo chiều cao của cột cờ trên sân trường vào một buổi sáng nắng mà không cần trèo lên đỉnh cột, một nhóm học sinh cắm thẳng đứng một chiếc cọc gỗ cao 1,5 m cạnh đó. Cùng lúc đó, các bạn đo được bóng của chiếc cọc gỗ trên sân dài 2 m và bóng của cột cờ dài 12 m. Hãy tính chiều cao của cột cờ.',
            given_summary: 'h_cọc = 1,5 m; l_bóng_cọc = 2 m; l_bóng_cột_cờ = 12 m.',
            solution_steps: [
              'Bước 1: Vì chùm sáng Mặt Trời chiếu xuống sân trường gồm các tia sáng song song và truyền thẳng nên chiều cao vật tỉ lệ thuận với độ dài bóng nắng của nó trên sân.',
              'Bước 2: Tỉ số độ dài bóng cột cờ so với bóng cọc gỗ là: 12 / 2 = 6 lần.',
              'Bước 3: Chiều cao của cột cờ là: h_cột_cờ = 6 × 1,5 = 9 m.',
            ],
            final_answer: 'h_cột_cờ = 9 m.',
          },
        ],
        simulation: {
          sim_key: 'light_reflection_mirror_lab',
          title: 'Mô phỏng Tia Sáng, Định Luật Phản Xạ Ánh Sáng (i\' = i) & Ảnh Qua Gương Phẳng',
          description:
            'Điều chỉnh góc tới i (hoặc góc hợp với mặt gương α) và khoảng cách vật d trước gương phẳng để quan sát trực tiếp tia phản xạ và vị trí ảnh ảo A\'B\'.',
          parameters: {
            defaultIncidentAngleDeg: 40,
            defaultObjectDistanceCm: 15,
          },
          guide_steps: [
            'Thay đổi góc tới i từ 0° đến 80° để kiểm chứng góc phản xạ i\' luôn bằng góc tới i.',
            'Quan sát mối liên hệ giữa góc tới i và góc hợp bởi tia sáng với mặt gương α: i + α = 90°.',
          ],
          physics_insight:
            'Ánh sáng truyền thẳng trong môi trường đồng tính và khi gặp mặt gương phẳng sẽ phản xạ đối xứng qua đường pháp tuyến IN.',
        },
      },
      {
        order_index: 2,
        code: 'G7-C3-B2',
        title: 'Chủ đề 3.2: Sự phản xạ ánh sáng (Định luật phản xạ ánh sáng)',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Hiểu rõ các khái niệm tia tới, tia phản xạ, điểm tới, đường pháp tuyến, góc tới i và góc phản xạ i\'; nắm vững nội dung Định luật phản xạ ánh sáng (i\' = i) và phân biệt phản xạ gương với phản xạ khuếch tán.',
        summary_note:
          'Công thức cốt lõi: Góc phản xạ = Góc tới (i\' = i). Đặc biệt cẩn thận khi đề bài cho góc hợp bởi tia tới và MẶT GƯƠNG là α: Lúc đó góc tới là i = 90° - α (chứ không phải α!), và góc hợp bởi tia tới với tia phản xạ là 2i!',
        theory_sections: [
          {
            heading: '1. Hiện tượng phản xạ ánh sáng và các thuật ngữ quy ước',
            content:
              'Khi ánh sáng truyền từ một môi trường tới gặp bề mặt một vật (như mặt gương, mặt nước tĩnh lặng, tấm kim loại bóng) và bị hắt trở lại môi trường cũ, hiện tượng đó gọi là sự phản xạ ánh sáng. Trên hình vẽ nghiên cứu phản xạ tại gương phẳng G:',
            keyPoints: [
              'SI: Tia tới (tia sáng chiếu tới mặt gương tại điểm tới I).',
              'IN: Đường pháp tuyến tại điểm tới I (là đường thẳng vuông góc 90° với mặt gương tại I).',
              'IR: Tia phản xạ (tia sáng bị mặt gương hắt trở lại).',
              'Góc tới (i = góc SIN): Góc tạo bởi tia tới SI và pháp tuyến IN.',
              'Góc phản xạ (i\' = góc NIR): Góc tạo bởi tia phản xạ IR và pháp tuyến IN.',
            ],
          },
          {
            heading: '2. Nội dung Định luật Phản xạ ánh sáng',
            content:
              'Định luật phản xạ ánh sáng gồm 2 ý không thể tách rời: (1) Tia phản xạ nằm trong mặt phẳng chứa tia tới và đường pháp tuyến của gương ở điểm tới; (2) Góc phản xạ luôn bằng góc tới: i\' = i.',
            keyPoints: [
              'Khi tia tới vuông góc với mặt gương (trùng với pháp tuyến IN): Góc tới i = 0° ⇒ Góc phản xạ i\' = 0° (tia phản xạ truyền ngược trở lại theo đúng đường của tia tới).',
              'Góc hợp bởi tia tới SI và tia phản xạ IR bằng tổng góc tới và góc phản xạ: góc SIR = i + i\' = 2i.',
            ],
          },
          {
            heading: '3. Phân biệt Phản xạ gương (Phản xạ) và Phản xạ khuếch tán (Tán xạ)',
            content:
              '(1) Phản xạ gương (Phản xạ thường): Khi chùm tia tới song song chiếu lên bề mặt phẳng, nhẵn bóng (như mặt gương phẳng, mặt hồ nước phẳng lặng), chùm tia phản xạ cũng là một chùm sáng song song theo một hướng xác định → Mắt nhìn vào thấy ảnh rõ nét của vật. (2) Phản xạ khuếch tán (Tán xạ): Khi chùm tia tới song song chiếu lên bề mặt không nhẵn, gồ ghề (như mặt giấy trắng, mặt tường vôi, mặt nước gợn sóng), tại mỗi điểm nhỏ pháp tuyến có hướng khác nhau nên các tia phản xạ bị hắt đi theo mọi hướng → Không nhìn thấy ảnh của vật, nhưng nhờ đó ta nhìn thấy được tờ giấy hay bức tường từ mọi phía!',
            keyPoints: [
              'Lưu ý: Tại mỗi điểm nhỏ li ti trên bề mặt gồ ghề, từng tia sáng riêng lẻ VẪN tuân theo đúng định luật phản xạ ánh sáng (i\' = i), chỉ có điều các pháp tuyến không song song với nhau!',
            ],
            realWorldApplication:
              'Sách vở học sinh thường in trên giấy trắng hơi nhám (phản xạ khuếch tán) thay vì giấy bóng láng để ánh sáng đèn không phản xạ chói lóa vào mắt gây mỏi mắt.',
          },
        ],
        quantities: [
          {
            name: 'Góc tới và Góc phản xạ',
            symbol: "i, i'",
            si_unit: 'rad (radian)',
            other_units: 'Độ (°) — từ 0° đến 90°',
            measuring_device: 'Thước đo góc (Protractor) trên bảng chia độ quang học',
            description: 'Góc hợp bởi tia tới / tia phản xạ với đường pháp tuyến IN vuông góc mặt gương.',
          },
        ],
        formulas: [
          {
            name: 'Định luật Phản xạ ánh sáng & Quan hệ góc với mặt gương',
            latex_expression: "i' = i = 90^\\circ - \\alpha",
            plain_expression: "i' = i = 90° - α",
            variables: [
              { symbol: 'i', name: 'Góc tới (giữa tia tới SI và pháp tuyến IN)', unit: 'độ (°)' },
              { symbol: "i'", name: 'Góc phản xạ (giữa tia phản xạ IR và pháp tuyến IN)', unit: 'độ (°)' },
              { symbol: '\\alpha', name: 'Góc hợp bởi tia tới SI và mặt gương phẳng', unit: 'độ (°)' },
            ],
            derived_formulas: [
              { expression: "\\widehat{SIR} = i + i' = 2i", description: 'Góc hợp bởi tia tới và tia phản xạ' },
              { expression: 'i = \\frac{\\widehat{SIR}}{2}', description: 'Tìm góc tới khi biết góc hợp bởi tia tới và tia phản xạ' },
            ],
            usage_note: 'Đọc kỹ đề bài xem góc đề cho là góc hợp với PHÁP TUYẾN (i) hay góc hợp với MẶT GƯƠNG (α)!',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính góc tới, góc phản xạ khi biết góc hợp bởi tia sáng và mặt gương',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Chiếu một tia sáng SI tới một gương phẳng sao cho tia sáng hợp với mặt gương một góc α = 35°. Hãy tính: (a) Góc tới i và góc phản xạ i\'; (b) Góc hợp bởi tia tới SI và tia phản xạ IR.',
            given_summary: 'Góc hợp với mặt gương α = 35°.',
            solution_steps: [
              'Bước 1: Vì đường pháp tuyến IN vuông góc với mặt gương (90°) nên góc tới là: i = 90° - α = 90° - 35° = 55°.',
              'Bước 2: Theo định luật phản xạ ánh sáng, góc phản xạ bằng góc tới: i\' = i = 55°.',
              'Bước 3: Góc hợp bởi tia tới SI và tia phản xạ IR là: góc SIR = i + i\' = 55° + 55° = 110°.',
            ],
            final_answer: '(a) i = i\' = 55°; (b) Góc giữa tia tới và tia phản xạ bằng 110°.',
          },
          {
            title: 'Ví dụ 2: Bài toán đặt gương phẳng để đổi hướng tia nắng chiếu thẳng xuống đáy giếng',
            difficulty: 'Vận dụng cao',
            problem_statement:
              'Các tia nắng Mặt Trời chiếu xiên hợp với mặt đất nằm ngang một góc 40°. Muốn dùng một chiếc gương phẳng để hắt (phản xạ) chùm tia nắng này chiếu thẳng đứng từ trên xuống đáy một cái giếng sâu thì phải đặt mặt gương hợp với phương nằm ngang một góc bao nhiêu độ?',
            given_summary: 'Tia tới hợp phương ngang 40°; Tia phản xạ hướng thẳng đứng xuống dưới (90° so với phương ngang).',
            solution_steps: [
              'Bước 1: Góc hợp bởi tia tới SI (xiên 40° so với phương ngang) và tia phản xạ IR (thẳng đứng 90° xuống dưới) là: góc SIR = 40° + 90° = 130°.',
              'Bước 2: Vì pháp tuyến IN là tia phân giác của góc SIR nên: i = i\' = 130° / 2 = 65°.',
              'Bước 3: Suy ra góc hợp bởi tia phản xạ thẳng đứng và mặt gương là: 90° - 65° = 25° ⇒ Góc hợp bởi mặt gương và phương nằm ngang là: 90° - 25° = 65°.',
            ],
            final_answer: 'Đặt mặt gương hợp với phương nằm ngang một góc 65°.',
          },
        ],
        simulation: {
          sim_key: 'light_reflection_mirror_lab',
          title: 'Mô phỏng Bảng Chia Độ Quang Học: Định Luật Phản Xạ Ánh Sáng (i\' = i)',
          description:
            'Thay đổi góc tới i từ 0° đến 80° để quan sát trực tiếp tia tới SI, pháp tuyến IN, tia phản xạ IR, góc hợp với mặt gương α và tổng góc 2i.',
          parameters: {
            defaultIncidentAngleDeg: 55,
            defaultObjectDistanceCm: 12,
          },
          guide_steps: [
            'Kéo thanh trượt Góc tới i = 55° để kiểm tra góc hợp với mặt gương α = 90° - 55° = 35° và góc giữa 2 tia là 110°.',
            'Đưa góc tới về i = 0° để quan sát tia sáng chiếu vuông góc với gương phản xạ ngược trở lại chính nó.',
          ],
          physics_insight:
            'Nếu giữ nguyên tia tới mà xoay gương phẳng đi một góc θ thì pháp tuyến quay góc θ và tia phản xạ sẽ quay đi một góc gấp đôi là 2θ!',
        },
      },
      {
        order_index: 3,
        code: 'G7-C3-B3',
        title: 'Chủ đề 3.3: Ảnh của vật tạo bởi gương phẳng',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Nắm vững 3 tính chất của ảnh tạo bởi gương phẳng (ảnh ảo, bằng vật, đối xứng d\' = d), biết 2 cách dựng ảnh của một điểm sáng hoặc vật sáng qua gương phẳng và giải các bài toán tính khoảng cách vật - ảnh khi dịch chuyển vật hoặc gương.',
        summary_note:
          'Ghi nhớ 3 tính chất vàng của ảnh qua gương phẳng: (1) Ảnh ảo (vẽ bằng nét đứt); (2) Kích thước ảnh LUÔN BẰNG kích thước vật (dù lại gần hay ra xa gương); (3) Khoảng cách từ ảnh đến gương bằng khoảng cách từ vật đến gương (d\' = d ⇒ Khoảng cách từ vật đến ảnh bằng 2d).',
        theory_sections: [
          {
            heading: '1. Ba tính chất của ảnh tạo bởi gương phẳng',
            content:
              'Hình của một vật quan sát được trong gương gọi là ảnh của vật tạo bởi gương. Thí nghiệm với tấm kính trong suốt và hai ngọn nến giống nhau cho thấy ảnh của một vật tạo bởi gương phẳng có 3 tính chất:',
            keyPoints: [
              '(1) Ảnh của vật tạo bởi gương phẳng là ẢNH ẢO (không hứng được trên màn chắn, chỉ nhìn thấy khi nhìn vào gương).',
              '(2) Độ lớn (kích thước) của ảnh BẰNG độ lớn của vật (A\'B\' = AB).',
              '(3) Điểm sáng và ảnh của nó tạo bởi gương phẳng nằm trên cùng một đường thẳng vuông góc với mặt gương và có khoảng cách đến gương bằng nhau (d\' = d, tức là ảnh và vật đối xứng nhau qua mặt gương).',
            ],
          },
          {
            heading: '2. Giải thích sự tạo thành ảnh ảo và Cách vẽ ảnh qua gương phẳng',
            content:
              'Ta nhìn thấy ảnh ảo S\' của điểm sáng S vì các tia phản xạ lọt vào mắt có đường kéo dài (phía sau gương) đi qua điểm S\'. Do đó mắt có cảm giác như các tia sáng xuất phát trực tiếp từ S\' truyền tới mắt. Để vẽ ảnh S\' của điểm sáng S qua gương phẳng, cách nhanh nhất là sử dụng tính chất đối xứng: Từ S kẻ đường thẳng SH vuông góc với mặt gương tại H, trên tia đối của HS lấy điểm S\' sao cho H là trung điểm của SS\' (S\'H = SH).',
            keyPoints: [
              'Trên hình vẽ quang học: Tia sáng thật ở phía trước gương vẽ bằng NÉT LIỀN; ảnh ảo A\'B\' và đường kéo dài của tia sáng ở phía sau gương bắt buộc phải vẽ bằng NÉT ĐỨT!',
              'Vật đặt song song với gương phẳng thì ảnh cũng song song và cùng chiều với vật; vật đặt vuông góc với gương phẳng thì ảnh cũng vuông góc nhưng ngược chiều với vật.',
            ],
            realWorldApplication:
              'Trên đầu xe cứu thương thường viết dòng chữ "AMBULANCE" bị ngược trái - phải để khi tài xế xe chạy phía trước nhìn qua gương chiếu hậu (gương phẳng) sẽ đọc được dòng chữ thuận chiều ngay lập tức và nhường đường.',
          },
        ],
        quantities: [
          {
            name: 'Khoảng cách từ vật đến gương phẳng',
            symbol: 'd',
            si_unit: 'm (mét)',
            other_units: 'cm',
            measuring_device: 'Thước thẳng',
            description: 'Độ dài đoạn vuông góc hạ từ vật đến mặt phẳng gương (luôn bằng khoảng cách từ ảnh đến gương d\' = d).',
          },
        ],
        formulas: [
          {
            name: 'Khoảng cách từ Vật đến Ảnh qua Gương phẳng',
            latex_expression: "d' = d \\quad \\Rightarrow \\quad L = d + d' = 2d",
            plain_expression: "d' = d  =>  L = d + d' = 2d",
            variables: [
              { symbol: 'd', name: 'Khoảng cách từ vật đến gương phẳng', unit: 'm hoặc cm' },
              { symbol: "d'", name: 'Khoảng cách từ ảnh ảo đến gương phẳng', unit: 'm hoặc cm' },
              { symbol: 'L', name: 'Khoảng cách từ vật đến chính ảnh của nó', unit: 'm hoặc cm' },
            ],
            derived_formulas: [
              {
                expression: 'L_{\\text{mới}} = 2 \\cdot (d - x) = 2d - 2x',
                description: 'Khi vật tiến lại gần gương một đoạn x thì khoảng cách từ vật đến ảnh giảm đi 2x!',
              },
            ],
            usage_note: 'Bẫy cực hay gặp: Khi tiến lại gần gương phẳng, ta thấy ảnh có vẻ to hơn chỉ là cảm giác góc nhìn của mắt, còn kích thước thật của ảnh trong gương phẳng KHÔNG BAO GIỜ THAY ĐỔI (luôn bằng vật)!',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Tính chiều cao ảnh và khoảng cách từ người đến ảnh khi dịch chuyển',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Một bạn học sinh cao 1,55 m đứng cách một chiếc gương phẳng treo thẳng đứng trên tường một khoảng 2 m. Hỏi: (a) Ảnh của bạn học sinh trong gương cao bao nhiêu mét và cách bạn đó bao nhiêu mét? (b) Nếu bạn đó bước tiến lại gần gương thêm 0,6 m thì lúc này ảnh cao bao nhiêu và khoảng cách từ bạn đó đến ảnh của mình là bao nhiêu?',
            given_summary: 'h = 1,55 m; d1 = 2 m; Tiến lại gần x = 0,6 m.',
            solution_steps: [
              'Bước 1 (Câu a): Vì độ lớn ảnh tạo bởi gương phẳng luôn bằng độ lớn vật nên ảnh cao h\' = h = 1,55 m. Khoảng cách từ bạn đó đến ảnh là: L1 = 2 × d1 = 2 × 2 = 4 m.',
              'Bước 2 (Câu b): Khi bước lại gần gương 0,6 m, chiều cao ảnh KHÔNG ĐỔI, vẫn là h\' = 1,55 m.',
              'Bước 3: Khoảng cách mới từ bạn đó đến gương là: d2 = 2 - 0,6 = 1,4 m. Suy ra khoảng cách mới từ bạn đó đến ảnh là: L2 = 2 × d2 = 2 × 1,4 = 2,8 m (giảm đi 1,2 m).',
            ],
            final_answer: '(a) Ảnh cao 1,55 m, cách người 4 m; (b) Ảnh vẫn cao 1,55 m, cách người 2,8 m.',
          },
        ],
        simulation: {
          sim_key: 'light_reflection_mirror_lab',
          title: 'Mô phỏng Ảnh Ảo Tạo Bởi Gương Phẳng (d\' = d, L = 2d)',
          description:
            'Kéo thanh trượt khoảng cách từ vật đến gương phẳng d (cm) để quan sát khoảng cách từ ảnh đến gương d\' và tổng khoảng cách giữa vật và ảnh L = 2d.',
          parameters: {
            defaultIncidentAngleDeg: 45,
            defaultObjectDistanceCm: 20,
          },
          guide_steps: [
            'Thay đổi khoảng cách vật - gương d từ 5 cm đến 40 cm để kiểm chứng d\' luôn bằng d và khoảng cách vật - ảnh L = 2d.',
            'Quan sát chiều cao của ảnh A\'B\' luôn giữ nguyên bằng chiều cao của vật AB ở mọi vị trí.',
          ],
          physics_insight:
            'Gương phẳng là dụng cụ quang học duy nhất cho ảnh ảo có kích thước luôn bằng vật với mọi vị trí đặt vật trước gương.',
        },
      },
    ],
  },
  {
    order_index: 4,
    code: 'G7-CH4',
    title: 'Chương 4: Từ trường (Nam châm & Cảm ứng từ)',
    description:
      'Tổng hợp chuẩn 3 bộ SGK Lớp 7: Tính chất từ của nam châm vĩnh cửu, tương tác giữa các cực từ (Bắc N - Nam S), khái niệm từ trường - từ phổ - đường sức từ (chiều ra Bắc vào Nam), cấu tạo la bàn và từ trường Trái Đất, nguyên lý chế tạo nam châm điện.',
    summary_markdown: `### Hệ thống hóa kiến thức Chương 4: Từ trường
1. **Nam châm và Tương tác từ:**
   - **Nam châm** là vật có từ tính (có khả năng hút các vật bằng **vật liệu từ** như **sắt, thép, niken, côban...**, không hút đồng, nhôm, vàng, bạc, nhựa, gỗ).
   - Mọi nam châm đều có **2 cực từ**: **Cực Bắc (North - ký hiệu $\\text{N}$, thường sơn màu đỏ)** và **Cực Nam (South - ký hiệu $\\text{S}$, thường sơn màu xanh hoặc trắng)**. Lực từ mạnh nhất ở hai đầu cực từ và rất yếu ở chính giữa thanh nam châm.
   - Khi để tự do, thanh nam châm luôn định hướng theo phương **Bắc – Nam**.
   - **Quy tắc tương tác giữa hai nam châm:** Hai cực **cùng tên** ($\\text{N}-\\text{N}$ hoặc $\\text{S}-\\text{S}$) thì **ĐẨY nhau**; hai cực **khác tên** ($\\text{N}-\\text{S}$) thì **HÚT nhau**.
2. **Từ trường, Từ phổ và Đường sức từ:**
   - **Từ trường** là không gian bao quanh nam châm và bao quanh **dòng điện**, có khả năng tác dụng lực từ lên kim nam châm đặt trong nó. Dụng cụ dùng để nhận biết từ trường là **kim nam châm thử**.
   - **Từ phổ:** Hình ảnh các đường mạt sắt sắp xếp xung quanh nam châm (nơi mạt sắt dày $\\rightarrow$ từ trường mạnh; nơi mạt sắt thưa $\\rightarrow$ từ trường yếu).
   - **Đường sức từ:** Là những đường cong khép kín biểu diễn phương và chiều của từ trường. **Quy ước chiều đường sức từ:** Ở bên ngoài nam châm, đường sức từ có chiều **đi ra từ cực Bắc ($\\text{N}$) và đi vào cực Nam ($\\text{S}$)**.
3. **Từ trường Trái Đất và La bàn:**
   - Trái Đất là một thanh nam châm khổng lồ. **Cực Bắc địa lý** của Trái Đất nằm gần **cực từ Nam** của nam châm Trái Đất (và ngược lại, cực Nam địa lý nằm gần cực từ Bắc) $\\rightarrow$ Do đó cực Bắc ($\\text{N}$) của kim la bàn luôn bị hút chỉ về phía **hướng Bắc địa lý**!
4. **Nam châm điện:**
   - Cấu tạo gồm một **ống dây dẫn có dòng điện chạy qua**, bên trong có đặt một **lõi sắt non**.
   - **Ưu điểm vượt trội của nam châm điện:** (1) Có thể bật/tắt từ tính dễ dàng bằng cách đóng/ngắt dòng điện; (2) Làm tăng lực từ rất mạnh bằng cách **tăng cường độ dòng điện $I$** hoặc **tăng số vòng dây $N$**; (3) Đổi tên hai cực từ $\\text{N} \\leftrightarrow \\text{S}$ chỉ bằng cách **đổi chiều dòng điện**. *(Không dùng lõi thép vì thép bị nhiễm từ luôn không nhả sắt ra khi ngắt điện!)*.`,
    key_takeaways: [
      'Nam châm chỉ hút các vật liệu từ (Sắt Fe, Thép, Niken Ni, Côban Co); KHÔNG hút Đồng (Cu), Nhôm (Al), Kẽm, Bạc, Nhựa.',
      'Hai cực cùng tên (N-N, S-S) đẩy nhau; hai cực khác tên (N-S) hút nhau. Nếu cắt đôi một thanh nam châm, ta luôn thu được 2 nam châm mới đều có đủ cả cực Bắc (N) và cực Nam (S) (không bao giờ tách riêng được 1 cực từ!).',
      'Chiều đường sức từ bên ngoài nam châm: Đi RA từ cực Bắc (N) và đi VÀO cực Nam (S) ("Ra Bắc - Vào Nam").',
      'Cực Bắc địa lý của Trái Đất thực chất chứa CỰC TỪ NAM của nam châm Trái Đất nên nó mới hút cực Bắc (N) của kim la bàn chỉ về hướng Bắc!',
      'Nam châm điện dùng LÕI SẮT NON (không dùng lõi thép) vì khi ngắt dòng điện, sắt non mất hết từ tính ngay lập tức giúp nhả vật sắt ra.',
    ],
    formula_cheatsheet: [
      {
        name: 'Quy tắc chiều Đường sức từ bên ngoài nam châm',
        latex: '\\text{Cực Bắc (N)} \\longrightarrow \\text{Đường sức từ} \\longrightarrow \\text{Cực Nam (S)}',
        note: 'Ghi nhớ khẩu quyết 4 chữ: "Ra Bắc – Vào Nam".',
      },
      {
        name: 'Các yếu tố làm tăng lực từ của Nam châm điện',
        latex: 'F_{\\text{từ}} \\uparrow \\quad \\Longleftrightarrow \\quad I \\uparrow \\text{ (Tăng dòng điện)} \\;\\text{ hoặc }\\; N \\uparrow \\text{ (Tăng số vòng dây)}',
        note: 'Ống dây nào có cường độ dòng điện I lớn hơn và số vòng dây N nhiều hơn thì nam châm điện đó mạnh hơn.',
      },
    ],
    topics: [
      {
        order_index: 1,
        code: 'G7-C4-B1',
        title: 'Chủ đề 4.1: Nam châm và Tác dụng từ của nam châm',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Hiểu các tính chất cơ bản của nam châm vĩnh cửu, nhận biết các vật liệu có tính chất từ (sắt, thép, niken, côban), quy tắc định hướng Bắc - Nam và tương tác hút/đẩy giữa các cực từ.',
        summary_note:
          'Nam châm hút Sắt, Thép, Niken, Côban (KHÔNG hút Đồng, Nhôm). Hai đầu nam châm (2 cực N và S) hút sắt mạnh nhất, phần chính giữa thanh nam châm từ tính yếu nhất. Cùng cực thì ĐẨY, khác cực thì HÚT.',
        theory_sections: [
          {
            heading: '1. Nam châm vĩnh cửu và Vật liệu từ',
            content:
              'Nam châm là những vật có tính chất từ (vốn được người xưa phát hiện từ loại quặng sắt từ thiên nhiên có khả năng hút vụn sắt). Những nam châm giữ được từ tính lâu dài gọi là nam châm vĩnh cửu (có nhiều hình dạng: thanh thẳng, hình chữ U / móng ngựa, kim nam châm, nam châm tròn). Nam châm chỉ hút các vật làm bằng vật liệu từ (như sắt, thép, niken, côban và hợp kim của chúng), hoàn toàn không hút đồng, nhôm, vàng, bạc, gỗ hay nhựa.',
            keyPoints: [
              'Trên mỗi nam châm luôn có 2 cực từ: Cực Bắc (ký hiệu N - North, thường sơn màu đỏ) và Cực Nam (ký hiệu S - South, thường sơn màu xanh hoặc trắng).',
              'Lực hút từ của thanh nam châm tập trung mạnh nhất ở hai đầu cực từ (N và S); ở vùng chính giữa thanh nam châm (vùng trung hòa), lực từ gần như bằng 0.',
            ],
            realWorldApplication:
              'Người ta dùng nam châm lớn gắn vào cần cẩu để phân loại nhanh phế liệu sắt, thép ra khỏi rác thải đồng, nhôm, nhựa tại các nhà máy tái chế.',
          },
          {
            heading: '2. Tính chất định hướng và Tương tác giữa hai nam châm',
            content:
              'Khi treo một thanh nam châm bằng sợi dây mềm ở chính giữa hoặc đặt kim nam châm trên mũi nhọn để nó có thể quay tự do theo phương ngang, khi đứng yên nam châm luôn chỉ hướng Bắc – Nam (đầu chỉ hướng Bắc là cực Bắc N, đầu chỉ hướng Nam là cực Nam S). Khi đưa cực từ của hai nam châm lại gần nhau:',
            keyPoints: [
              'Hai cực từ CÙNG TÊN (N với N, hoặc S với S) thì ĐẨY nhau.',
              'Hai cực từ KHÁC TÊN (N với S) thì HÚT nhau.',
              'Nếu một thanh nam châm thẳng bị gãy làm đôi, mỗi nửa vẫn là một nam châm hoàn chỉnh có đủ cả 2 cực Bắc (N) và Nam (S)!',
            ],
          },
        ],
        quantities: [
          {
            name: 'Cực từ của nam châm',
            symbol: 'N, S',
            si_unit: 'Cực Bắc (N - North) & Cực Nam (S - South)',
            other_units: 'Màu đỏ (N) - Màu xanh/trắng (S)',
            measuring_device: 'Kim nam châm thử đã biết trước cực',
            description: 'Hai vùng ở hai đầu nam châm có lực từ mạnh nhất.',
          },
        ],
        formulas: [
          {
            name: 'Quy tắc nhận biết một thanh kim loại là Nam châm hay chỉ là Thanh sắt',
            latex_expression: '\\text{Có đẩy nhau} \\Rightarrow \\text{Cả hai đều là Nam châm}',
            plain_expression: 'Đưa 2 đầu lại gần thấy ĐẨY nhau -> Chắc chắn cả 2 đều là nam châm',
            variables: [],
            derived_formulas: [
              {
                expression: '\\text{Đưa đầu thanh A chạm vào CHÍNH GIỮA thanh B}',
                description: 'Nếu hút mạnh → A là nam châm, B là sắt; Nếu không hút → A là sắt, B là nam châm!',
              },
            ],
            usage_note: 'Mẹo giải bài toán thực hành cực hay: Hiện tượng HÚT có thể xảy ra giữa nam châm với sắt, nhưng hiện tượng ĐẨY chỉ xảy ra khi CẢ HAI đều là nam châm (cùng cực)!',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Cách phân biệt thanh nam châm và thanh sắt giống hệt nhau mà không dùng dụng cụ khác',
            difficulty: 'Vận dụng',
            problem_statement:
              'Có hai thanh kim loại A và B bề ngoài giống hệt nhau, trong đó một thanh là nam châm vĩnh cửu và một thanh là sắt thường. Không dùng thêm bất kỳ vật nào khác, làm thế nào để biết chắc chắn thanh nào là nam châm?',
            given_summary: '1 thanh nam châm, 1 thanh sắt giống hệt nhau; chính giữa thanh nam châm hầu như không có từ tính.',
            solution_steps: [
              'Bước 1: Cầm thanh A đưa một đầu của nó chạm vuông góc vào vị trí CHÍNH GIỮA của thanh B (tạo thành hình chữ T).',
              'Bước 2: Vì phần chính giữa của thanh nam châm hầu như không có lực từ, còn hai đầu nam châm có lực từ rất mạnh nên:',
              'Bước 3: Nếu thấy đầu thanh A hút mạnh vào giữa thanh B → Thanh A chính là nam châm (còn B là thanh sắt). Ngược lại, nếu không thấy lực hút → Thanh A là thanh sắt, còn thanh B là nam châm!',
            ],
            final_answer: 'Đưa đầu thanh A chạm vào chính giữa thanh B: nếu hút mạnh thì A là nam châm, nếu không hút thì B là nam châm.',
          },
        ],
        simulation: {
          sim_key: 'magnetism_electromagnet_lab',
          title: 'Mô phỏng Từ Trường Nam Châm, Đường Sức Từ (Ra Bắc - Vào Nam) & Nam Châm Điện',
          description:
            'Quan sát chiều đường sức từ xung quanh thanh nam châm, hướng định vị của kim nam châm thử và điều chỉnh dòng điện I / số vòng dây N của nam châm điện.',
          parameters: {
            defaultCurrentA: 2.5,
            defaultTurnsN: 100,
          },
          guide_steps: [
            'Quan sát chiều các mũi tên đường sức từ luôn đi RA từ cực Bắc (N - màu đỏ) và đi VÀO cực Nam (S - màu xanh).',
            'Tăng cường độ dòng điện I và số vòng dây N của nam châm điện để thấy lực từ hút được nhiều đinh sắt hơn.',
          ],
          physics_insight:
            'Mọi từ trường đều do các điện tích chuyển động (dòng điện hoặc chuyển động của electron trong nguyên tử sắt/nam châm) sinh ra.',
        },
      },
      {
        order_index: 2,
        code: 'G7-C4-B2',
        title: 'Chủ đề 4.2: Từ trường, Từ phổ, Đường sức từ và Từ trường Trái Đất',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Hiểu khái niệm từ trường tồn tại xung quanh nam châm và dòng điện, cách dùng mạt sắt tạo từ phổ, quy ước vẽ chiều đường sức từ ("Ra Bắc - Vào Nam"), sự định hướng của kim nam châm thử và giải thích nguyên lý hoạt động của la bàn trong từ trường Trái Đất.',
        summary_note:
          'Khẩu quyết đường sức từ: "Ra Bắc (N) – Vào Nam (S)". Khi đặt kim nam châm thử nằm cân bằng trên đường sức từ, cực Bắc (N) của kim nam châm luôn chỉ theo chiều của đường sức từ (tức là quay về phía cực Nam S của thanh nam châm lớn). Cực Bắc địa lý của Trái Đất nằm gần CỰC TỪ NAM của Trái Đất!',
        theory_sections: [
          {
            heading: '1. Từ trường và Cách nhận biết từ trường',
            content:
              'Không gian xung quanh nam châm và xung quanh dòng điện có khả năng tác dụng lực từ lên kim nam châm đặt trong nó. Ta nói trong không gian đó có Từ trường (nhà bác học Đan Mạch Oersted là người đầu tiên phát hiện dòng điện gây ra từ trường năm 1820). Mắt thường không nhìn thấy từ trường; để nhận biết tại một nơi có từ trường hay không, người ta đặt vào đó một Kim nam châm thử: nếu kim nam châm bị lệch khỏi hướng Bắc – Nam ban đầu thì nơi đó có từ trường.',
            keyPoints: [
              'Xung quanh Trái Đất, xung quanh nam châm và xung quanh dây dẫn đang có dòng điện chạy qua đều tồn tại từ trường.',
            ],
          },
          {
            heading: '2. Từ phổ và Đường sức từ ("Ra Bắc – Vào Nam")',
            content:
              'Khi rắc đều mạt sắt lên tấm nhựa trong đặt trên thanh nam châm rồi gõ nhẹ, các hạt mạt sắt bị nhiễm từ trở thành những kim nam châm nhỏ li ti và sắp xếp thành những đường cong nối từ cực này sang cực kia của nam châm — hình ảnh đó gọi là Từ phổ. Từ đó người ta vẽ các Đường sức từ để biểu diễn từ trường:',
            keyPoints: [
              'Quy ước chiều của đường sức từ: Ở bên ngoài thanh nam châm, các đường sức từ đều có chiều đi RA từ cực Bắc (N) và đi VÀO cực Nam (S).',
              'Nơi nào từ trường mạnh (ở gần 2 cực nam châm) thì các đường sức từ (và mạt sắt) sắp xếp DÀY; nơi nào từ trường yếu (ở xa nam châm) thì các đường sức từ THƯA.',
              'Tại mỗi điểm trên đường sức từ, kim nam châm thử nằm cân bằng dọc theo đường sức từ: Cực Bắc (N) của kim nam châm hướng theo chiều đường sức từ (hướng về cực S của nam châm lớn).',
            ],
          },
          {
            heading: '3. Từ trường Trái Đất và Cấu tạo La bàn',
            content:
              'Trái Đất của chúng ta giống như một thanh nam châm khổng lồ tạo ra từ trường bao quanh hành tinh (nhờ lớp lõi sắt - niken lỏng chuyển động sâu trong lòng Trái Đất). Điều cực kỳ thú vị là: Cực Bắc địa lý và cực Bắc từ trường KHÔNG trùng nhau! Gần Cực Bắc địa lý thực chất là CỰC TỪ NAM của nam châm Trái Đất; còn gần Cực Nam địa lý là CỰC TỪ BẮC của nam châm Trái Đất.',
            keyPoints: [
              'Vì Cực Bắc địa lý chứa cực từ Nam (S) nên các đường sức từ của Trái Đất đi từ Nam bán cầu (cực từ Bắc) vòng lên đi vào Bắc bán cầu (cực từ Nam).',
              'Nhờ cực từ Nam nằm ở hướng Bắc địa lý nên nó hút cực Bắc (N) của kim la bàn luôn quay về chỉ đúng hướng Bắc địa lý!',
              'Từ trường Trái Đất còn đóng vai trò như một tấm khiên vô hình bảo vệ sự sống trên Trái Đất khỏi các hạt bức xạ năng lượng cao từ gió Mặt Trời (tạo nên hiện tượng Cực quang rực rỡ ở vùng gần hai cực).',
            ],
            realWorldApplication:
              'Khi sử dụng la bàn để xác định phương hướng, phải đặt la bàn trên mặt phẳng ngang và tránh xa các vật bằng sắt, thép, nam châm hoặc dòng điện để kim la bàn không bị nhiễu.',
          },
        ],
        quantities: [
          {
            name: 'Đường sức từ',
            symbol: '\\vec{B}',
            si_unit: 'T (Tesla - đơn vị cảm ứng từ ở THPT)',
            other_units: 'Chiều: Ra Bắc (N) → Vào Nam (S)',
            measuring_device: 'Kim nam châm thử, mạt sắt, la bàn',
            description: 'Đường cong có hướng mô tả hình dạng và độ mạnh yếu của từ trường (dày = mạnh, thưa = yếu).',
          },
        ],
        formulas: [
          {
            name: 'Quy tắc xác định tên cực của nam châm dựa vào chiều Đường sức từ hoặc Kim nam châm thử',
            latex_expression: '\\text{Mũi tên đường sức đi RA} \\Rightarrow \\text{Cực N}; \\quad \\text{Mũi tên đi VÀO} \\Rightarrow \\text{Cực S}',
            plain_expression: 'Đường sức đi ra -> Cực Bắc (N); Đường sức đi vào -> Cực Nam (S)',
            variables: [],
            derived_formulas: [
              {
                expression: '\\text{Cực S của kim nam châm thử quay về đâu} \\Rightarrow \\text{Đó là cực N của thanh nam châm}',
                description: 'Vì hai cực khác tên hút nhau',
              },
            ],
            usage_note: 'Không nhầm lẫn giữa "Cực Bắc địa lý" (phía Bắc bản đồ) và "Cực từ của nam châm Trái Đất" (ở phía Bắc địa lý là cực từ Nam!).',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: Xác định các cực của thanh nam châm từ hình vẽ đường sức từ và kim nam châm thử',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Một thanh nam châm thẳng có hai đầu A và B bị mờ ký hiệu cực. Khi rắc mạt sắt và đặt một kim nam châm thử ở gần đầu A thì thấy cực Nam (S) của kim nam châm thử bị hút quay thẳng về phía đầu A. Hãy xác định đầu A và đầu B của thanh nam châm là cực gì và chiều các đường sức từ bên ngoài thanh nam châm đi như thế nào?',
            given_summary: 'Đầu A hút cực Nam (S) của kim nam châm thử.',
            solution_steps: [
              'Bước 1: Vì hai cực khác tên hút nhau, mà đầu A hút cực Nam (S) của kim nam châm thử nên đầu A chắc chắn là Cực Bắc (N) của thanh nam châm.',
              'Bước 2: Suy ra đầu B còn lại là Cực Nam (S) của thanh nam châm.',
              'Bước 3: Theo quy ước "Ra Bắc - Vào Nam", các đường sức từ ở bên ngoài thanh nam châm có chiều đi ra từ đầu A (cực N) và đi vào đầu B (cực S).',
            ],
            final_answer: 'Đầu A là cực Bắc (N), đầu B là cực Nam (S); đường sức từ đi ra từ A và đi vào B.',
          },
        ],
        simulation: {
          sim_key: 'magnetism_electromagnet_lab',
          title: 'Mô phỏng Đường Sức Từ (Ra Bắc - Vào Nam) & La Bàn Từ Trường Trái Đất',
          description:
            'Quan sát hình ảnh từ phổ, chiều mũi tên đường sức từ quanh nam châm và sự định hướng của kim nam châm thử.',
          parameters: {
            defaultCurrentA: 2.0,
            defaultTurnsN: 150,
          },
          guide_steps: [
            'Quan sát các đường sức từ cong khép kín đi từ cực N (Đỏ) sang cực S (Xanh).',
            'Đảo chiều cực từ để xem kim nam châm thử lập tức quay 180° theo chiều đường sức mới.',
          ],
          physics_insight:
            'Mật độ đường sức từ trên một đơn vị diện tích tỷ lệ thuận với độ mạnh của từ trường tại vị trí đó.',
        },
      },
      {
        order_index: 3,
        code: 'G7-C4-B3',
        title: 'Chủ đề 4.3: Nam châm điện và Ứng dụng',
        textbook_tags: ['Kết nối tri thức', 'Chân trời sáng tạo', 'Cánh Diều'],
        overview:
          'Hiểu cấu tạo và nguyên tắc hoạt động của nam châm điện (ống dây có dòng điện chạy qua và lõi sắt non), giải thích tại sao phải dùng lõi sắt non mà không dùng lõi thép, biết 2 cách làm tăng lực từ của nam châm điện và cách đổi cực của nam châm điện.',
        summary_note:
          'Cấu tạo nam châm điện = Ống dây dẫn có dòng điện + Lõi SẮT NON bên trong. Tăng lực từ bằng 2 cách: (1) Tăng cường độ dòng điện I (tăng số pin/hiệu điện thế); (2) Tăng số vòng dây N của ống dây. Đổi cực từ (N ↔ S) bằng cách đổi chiều dòng điện chạy qua ống dây!',
        theory_sections: [
          {
            heading: '1. Cấu tạo và Nguyên tắc hoạt động của Nam châm điện',
            content:
              'Dựa trên tác dụng từ của dòng điện (xung quanh dây dẫn có dòng điện tồn tại từ trường), người ta chế tạo ra Nam châm điện. Một nam châm điện cơ bản gồm: Một ống dây dẫn (cuộn dây đồng có vỏ bọc cách điện quấn nhiều vòng) có dòng điện một chiều chạy qua, và bên trong lòng ống dây có đặt một lõi sắt non (như một chiếc đinh sắt lớn).',
            keyPoints: [
              'Khi ĐÓNG công tắc điện: Dòng điện chạy qua ống dây sinh ra từ trường làm lõi sắt non bị nhiễm từ mạnh → Cả hệ trở thành một nam châm hút được các vật bằng sắt, thép.',
              'Khi NGẮT công tắc điện (I = 0): Lõi sắt non lập tức mất hết từ tính → Các đinh sắt đang bị hút sẽ tự động rơi ra ngay.',
            ],
          },
          {
            heading: '2. Tại sao lõi của nam châm điện phải làm bằng Sắt non mà KHÔNG làm bằng Thép?',
            content:
              'Sắt non và thép đều bị nhiễm từ mạnh khi đặt trong lòng ống dây có dòng điện. Tuy nhiên, khi ngắt dòng điện: Sắt non mất sạch từ tính ngay lập tức; còn Thép vẫn giữ nguyên từ tính rất lâu (biến thành nam châm vĩnh cửu). Nếu dùng lõi thép cho nam châm điện thì khi ngắt công tắc điện, nam châm vẫn không chịu nhả các vật bằng sắt ra, làm mất đi tính điều khiển linh hoạt của nam châm điện!',
            keyPoints: [
              'Lõi sắt non có 2 vai trò: (1) Làm tăng mạnh từ trường của ống dây khi có dòng điện; (2) Mất từ tính ngay khi ngắt dòng điện.',
            ],
            realWorldApplication:
              'Cần cẩu điện từ ở cảng biển và nhà máy thép dùng nam châm điện khổng lồ: Bật điện để hút hàng tấn thép vụn nhấc lên xe tải, sau đó chỉ cần ngắt điện là toàn bộ khối thép tự động rơi xuống thùng xe.',
          },
          {
            heading: '3. Cách làm tăng lực từ và Cách đổi cực của Nam châm điện',
            content:
              'Khác với nam châm vĩnh cửu có lực từ và cực từ cố định, nam châm điện cho phép ta điều khiển hoàn toàn:',
            keyPoints: [
              'Để làm TĂNG lực từ (độ mạnh) của nam châm điện, ta có thể: (1) Tăng cường độ dòng điện chạy qua ống dây (ví dụ dùng nguồn điện có hiệu điện thế lớn hơn hoặc ghép nối tiếp thêm pin); (2) Tăng số vòng dây quấn trên ống dây; (3) Đặt thêm lõi sắt non lớn hơn vào trong lòng ống dây.',
              'Để ĐỔI CỰC TỪ (đổi cực Bắc N thành cực Nam S và ngược lại) của nam châm điện: Chỉ cần ĐỔI CHIỀU DÒNG ĐIỆN chạy qua ống dây (ví dụ đảo hai đầu dây nối với cực dương (+) và cực âm (-) của pin)!',
            ],
          },
        ],
        quantities: [
          {
            name: 'Số vòng dây của ống dây nam châm điện',
            symbol: 'N',
            si_unit: 'Vòng',
            other_units: 'Vòng/cm',
            measuring_device: 'Đếm số vòng quấn trên ống',
            description: 'Cùng một dòng điện I, ống dây có số vòng N càng nhiều thì lực từ càng mạnh.',
          },
          {
            name: 'Cường độ dòng điện qua ống dây',
            symbol: 'I',
            si_unit: 'A (Ampe)',
            other_units: 'mA (1 A = 1000 mA)',
            measuring_device: 'Ampe kế',
            description: 'Dòng điện I càng lớn (càng nhiều pin mắc nối tiếp) thì nam châm điện hút sắt càng mạnh.',
          },
        ],
        formulas: [
          {
            name: 'So sánh độ mạnh của hai Nam châm điện (Tích số Ampe - Vòng)',
            latex_expression: 'F_{\\text{từ}} \\propto I \\cdot N',
            plain_expression: 'Độ mạnh nam châm điện tỉ lệ thuận với (Cường độ dòng điện I × Số vòng dây N)',
            variables: [
              { symbol: 'I', name: 'Cường độ dòng điện chạy qua ống dây', unit: 'A (Ampe)' },
              { symbol: 'N', name: 'Số vòng dây của ống dây', unit: 'vòng' },
            ],
            derived_formulas: [],
            usage_note: 'Khi so sánh hai nam châm điện cùng lõi sắt non, nam châm nào có tích (I × N) lớn hơn thì có lực từ mạnh hơn (hút được nhiều ghim sắt hơn).',
          },
        ],
        examples: [
          {
            title: 'Ví dụ 1: So sánh độ mạnh của các nam châm điện trong thí nghiệm',
            difficulty: 'Thông hiểu',
            problem_statement:
              'Một học sinh chế tạo 3 nam châm điện có cùng lõi sắt non: Nam châm A quấn 100 vòng dây, cho dòng điện 1 A chạy qua; Nam châm B quấn 100 vòng dây, cho dòng điện 2 A chạy qua; Nam châm C quấn 250 vòng dây, cho dòng điện 2 A chạy qua. Hãy sắp xếp 3 nam châm điện theo thứ tự lực từ từ YẾU đến MẠNH.',
            given_summary: 'A(100 vòng, 1 A); B(100 vòng, 2 A); C(250 vòng, 2 A).',
            solution_steps: [
              'Bước 1: So sánh A và B: Cùng có N = 100 vòng dây nhưng I_B = 2 A > I_A = 1 A nên nam châm B mạnh hơn nam châm A.',
              'Bước 2: So sánh B và C: Cùng có dòng điện I = 2 A nhưng N_C = 250 vòng > N_B = 100 vòng nên nam châm C mạnh hơn nam châm B.',
              'Bước 3: Thứ tự lực từ từ yếu đến mạnh là: Nam châm A < Nam châm B < Nam châm C.',
            ],
            final_answer: 'A < B < C (Nam châm C hút được nhiều ghim sắt nhất).',
          },
        ],
        simulation: {
          sim_key: 'magnetism_electromagnet_lab',
          title: 'Phòng Thí Nghiệm Chế Tạo Nam Châm Điện (Điều Chỉnh I, Số Vòng N & Đảo Cực)',
          description:
            'Bật/tắt công tắc điện, thay đổi cường độ dòng điện I (Ampe), số vòng dây N và đảo cực nguồn pin để quan sát số lượng đinh sắt hút được và sự đảo chiều cực Bắc - Nam.',
          parameters: {
            defaultCurrentA: 3.0,
            defaultTurnsN: 200,
          },
          guide_steps: [
            'Kéo thanh trượt Cường độ dòng điện I (A) và Số vòng dây N tăng lên để thấy số lượng ghim sắt bị hút tăng theo.',
            'Nhấn nút "Ngắt công tắc (I = 0)" để thấy lõi sắt non mất từ tính ngay lập tức hoặc nhấn "Đảo cực nguồn pin" để đổi cực N ↔ S.',
          ],
          physics_insight:
            'Nam châm điện là trái tim của chuông điện, rơ-le điện từ, loa phóng thanh, động cơ điện và tàu đệm từ siêu tốc (Maglev).',
        },
      },
    ],
  },
];

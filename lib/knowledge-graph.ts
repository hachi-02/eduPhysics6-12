/**
 * HỆ THỐNG ĐỒ THỊ TRI THỨC & TRUY VẾT LỖ HỔNG TIỀN ĐỀ (KNOWLEDGE GRAPH & PREREQUISITE GAP DETECTOR)
 * ---------------------------------------------------------------------------------------------------
 * Xây dựng Đồ thị có hướng không chu trình (DAG - Directed Acyclic Graph) kết nối toàn bộ 92 chủ đề
 * Vật lý từ Lớp 6 đến Lớp 12 theo Chương trình GDPT 2018.
 *
 * Hỗ trợ:
 * 1. Phân tích trạng thái nắm vững (Mastery State) từ dữ liệu thực tế (Sổ tay lỗi sai & Lịch sử làm bài).
 * 2. Lan truyền rủi ro tiền đề (Prerequisite Risk Propagation) từ lớp dưới lên lớp trên.
 * 3. Truy vết ngược cây phả hệ (Topological Backtracking) để tìm "Mắt xích đứt gãy gốc rễ" (Root-Cause Gap).
 * 4. Sắp xếp tô-pô (Topological Sort) tạo lộ trình "Vá lỗ hổng từ gốc" ngắn nhất.
 */

export type PhysicsPillarId =
  | 'measurement'
  | 'mechanics'
  | 'energy_thermo'
  | 'waves_optics'
  | 'electromagnetism'
  | 'modern_astro';

export interface PhysicsPillarInfo {
  id: PhysicsPillarId;
  name: string;
  shortName: string;
  description: string;
  color: string;
  bgLight: string;
  borderLight: string;
  textDark: string;
}

export const PHYSICS_PILLARS: Record<PhysicsPillarId, PhysicsPillarInfo> = {
  measurement: {
    id: 'measurement',
    name: 'Đo lường & Phương pháp Thực nghiệm',
    shortName: 'Đo lường & Sai số',
    description: 'Nền tảng về đơn vị SI, dụng cụ đo, giới hạn đo, độ chia nhỏ nhất và xử lý sai số thực nghiệm.',
    color: '#0284c7', // sky-600
    bgLight: 'bg-sky-50',
    borderLight: 'border-sky-200',
    textDark: 'text-sky-800',
  },
  mechanics: {
    id: 'mechanics',
    name: 'Cơ học: Động học, Lực & Động lực học',
    shortName: 'Cơ học & Lực',
    description: 'Chuyển động, vận tốc, gia tốc, 3 định luật Newton, các lực cơ học, áp suất, moment lực và động lượng.',
    color: '#2563eb', // blue-600
    bgLight: 'bg-blue-50',
    borderLight: 'border-blue-200',
    textDark: 'text-blue-800',
  },
  energy_thermo: {
    id: 'energy_thermo',
    name: 'Năng lượng, Nhiệt học & Khí lý tưởng',
    shortName: 'Năng lượng & Nhiệt',
    description: 'Công, công suất, cơ năng, nội năng, định luật nhiệt động lực học, chuyển thể và các định luật chất khí.',
    color: '#ea580c', // orange-600
    bgLight: 'bg-orange-50',
    borderLight: 'border-orange-200',
    textDark: 'text-orange-800',
  },
  waves_optics: {
    id: 'waves_optics',
    name: 'Dao động, Sóng cơ & Quang học',
    shortName: 'Dao động, Sóng & Quang',
    description: 'Dao động điều hòa, sóng cơ, sóng âm, giao thoa, sóng dừng, phản xạ, khúc xạ ánh sáng và thấu kính.',
    color: '#7c3aed', // violet-600
    bgLight: 'bg-violet-50',
    borderLight: 'border-violet-200',
    textDark: 'text-violet-800',
  },
  electromagnetism: {
    id: 'electromagnetism',
    name: 'Điện học, Điện trường & Từ trường',
    shortName: 'Điện & Từ trường',
    description: 'Điện tích, điện trường, mạch điện một chiều, định luật Ohm, từ trường, cảm ứng điện từ và dòng xoay chiều.',
    color: '#059669', // emerald-600
    bgLight: 'bg-emerald-50',
    borderLight: 'border-emerald-200',
    textDark: 'text-emerald-800',
  },
  modern_astro: {
    id: 'modern_astro',
    name: 'Thiên văn học & Vật lý Hạt nhân',
    shortName: 'Thiên văn & Hạt nhân',
    description: 'Chuyển động thiên체, Hệ Mặt Trời, cấu tạo hạt nhân, độ hụt khối, phản ứng phân hạch, nhiệt hạch và phóng xạ.',
    color: '#e11d48', // rose-600
    bgLight: 'bg-rose-50',
    borderLight: 'border-rose-200',
    textDark: 'text-rose-800',
  },
};

export interface KnowledgeNodeStaticSpec {
  code: string;
  pillar: PhysicsPillarId;
  coreConcepts: string[];
  failureSymptom: string;
}

export interface KnowledgeEdgeSpec {
  fromCode: string; // Chủ đề tiền đề (Prerequisite)
  toCode: string; // Chủ đề phụ thuộc (Target)
  weight: number; // Trọng số ảnh hưởng (0.5 -> 1.0)
  bridgeConcept: string; // Khái niệm / công thức cầu nối
  pedagogicalReason: string; // Giải thích sư phạm vì sao hổng fromCode sẽ dẫn tới sai toCode
}

export type NodeHealthStatus = 'broken' | 'warning' | 'mastered' | 'untested';

export interface TopicRuntimeInput {
  id: number;
  code: string;
  title: string;
  grade_number: number;
  chapter_id: number;
  chapter_code: string;
  chapter_title: string;
  order_index: number;
  activeMistakeCount: number;
  masteredMistakeCount: number;
  totalWrongCount: number;
  attemptCount: number;
  bestScorePct: number | null;
  avgScorePct: number | null;
}

export interface KnowledgeGraphNode extends TopicRuntimeInput {
  pillar: PhysicsPillarId;
  coreConcepts: string[];
  failureSymptom: string;
  status: NodeHealthStatus;
  directMasteryScore: number; // 0..100 (dựa trên lịch sử làm bài & lỗi sai tại chính node này)
  upstreamRiskScore: number; // 0..100 (rủi ro lan truyền từ các node tiền đề bị hổng)
  effectiveReadiness: number; // 0..100 (mức độ sẵn sàng thực tế)
  prerequisiteCodes: string[];
  dependentCodes: string[];
}

export interface TracedAncestorItem {
  node: KnowledgeGraphNode;
  depth: number; // Khoảng cách bậc tiền đề (1 = trực tiếp, 2 = tiền đề cấp 2...)
  pathWeight: number; // Trọng số tích lũy dọc đường đi
  connectingEdge: KnowledgeEdgeSpec;
  pathCodes: string[]; // Chuỗi mã chủ đề từ node này tới target
  isRootCause: boolean;
  rootCauseSeverity: 'critical_active_gap' | 'warning_gap' | 'foundational_unverified';
  rootCauseScore: number;
}

export interface TracedDescendantItem {
  node: KnowledgeGraphNode;
  depth: number;
  pathWeight: number;
  connectingEdge: KnowledgeEdgeSpec;
}

export interface RemediationStep {
  stepNumber: number;
  node: KnowledgeGraphNode;
  role: 'root_prerequisite' | 'intermediate_bridge' | 'target_topic';
  reasonToReview: string;
  bridgeConceptToNext: string | null;
  estimatedMinutes: number;
}

export interface PrerequisiteTraceResult {
  targetNode: KnowledgeGraphNode;
  ancestors: TracedAncestorItem[];
  descendants: TracedDescendantItem[];
  rootCauses: TracedAncestorItem[];
  remediationRoadmap: RemediationStep[];
  subgraphEdges: KnowledgeEdgeSpec[];
  diagnosisSummary: string;
}

/**
 * Đặc tả chuyên môn cho toàn bộ 92 chủ đề Vật lý (Lớp 6 -> Lớp 12)
 */
export const KNOWLEDGE_NODE_SPECS: Record<string, KnowledgeNodeStaticSpec> = {
  // ================= LỚP 6 =================
  'C1-B1': {
    code: 'C1-B1',
    pillar: 'measurement',
    coreConcepts: ['Đơn vị SI: m, m³, L, cm³', 'GHĐ và ĐCNN', 'Bình chia độ & Bình tràn'],
    failureSymptom: 'Đổi sai đơn vị thể tích (L ↔ m³, cm³ ↔ m³) hoặc đọc sai vạch chia dụng cụ.',
  },
  'C1-B2': {
    code: 'C1-B2',
    pillar: 'measurement',
    coreConcepts: ['Khối lượng m (kg, g, tấn)', 'Thời gian t (s, phút, giờ)', 'Hiệu chỉnh cân & đồng hồ'],
    failureSymptom: 'Quên đổi gam sang kilôgam hoặc phút/giờ sang giây chuẩn SI trong các bài toán tính toán.',
  },
  'C1-B3': {
    code: 'C1-B3',
    pillar: 'measurement',
    coreConcepts: ['Thang nhiệt độ Celsius (°C)', 'Thang Kelvin: T(K) = t(°C) + 273', 'Sự nở vì nhiệt cơ bản'],
    failureSymptom: 'Nhầm lẫn giữa độ biến thiên Δt (°C) và nhiệt độ tuyệt đối T (K) trong Vật lý Nhiệt & Khí lý tưởng.',
  },
  'C2-B1': {
    code: 'C2-B1',
    pillar: 'mechanics',
    coreConcepts: ['Khái niệm lực đẩy/kéo', 'Biến đổi chuyển động', 'Làm biến dạng vật'],
    failureSymptom: 'Không nhận diện được sự tồn tại của lực khi vật thay đổi tốc độ hoặc hướng chuyển động.',
  },
  'C2-B2': {
    code: 'C2-B2',
    pillar: 'mechanics',
    coreConcepts: ['Đơn vị Newton (N)', 'Biểu diễn vectơ lực (gốc, phương, chiều, độ lớn)', 'Đo lực bằng lực kế'],
    failureSymptom: 'Xác định sai phương, chiều của vectơ lực hoặc nhầm tỉ xích khi biểu diễn lực.',
  },
  'C2-B3': {
    code: 'C2-B3',
    pillar: 'mechanics',
    coreConcepts: ['Trọng lực & Trọng lượng P', 'Phương thẳng đứng, chiều hướng về tâm Trái Đất', 'P = 10·m'],
    failureSymptom: 'Đánh đồng khối lượng m (kg) với trọng lượng P (N) hoặc vẽ trọng lực vuông góc mặt phẳng nghiêng.',
  },
  'C2-B4': {
    code: 'C2-B4',
    pillar: 'mechanics',
    coreConcepts: ['Lực tiếp xúc (đẩy, kéo, ma sát)', 'Lực không tiếp xúc (hấp dẫn, từ, tĩnh điện)'],
    failureSymptom: 'Nhầm điều kiện xuất hiện lực tiếp xúc với lực trường (trọng trường, điện trường, từ trường).',
  },
  'C2-B5': {
    code: 'C2-B5',
    pillar: 'mechanics',
    coreConcepts: ['Độ biến dạng lò xo Δl = l - l₀', 'Giới hạn đàn hồi', 'Quan hệ lực đàn hồi và độ dãn'],
    failureSymptom: 'Lấy chiều dài lò xo l thay vì độ biến dạng Δl = |l - l₀| khi tính lực đàn hồi.',
  },
  'C2-B6': {
    code: 'C2-B6',
    pillar: 'mechanics',
    coreConcepts: ['Lực ma sát trượt & ma sát nghỉ', 'Lực cản của nước và không khí', 'Tác dụng cản trở chuyển động'],
    failureSymptom: 'Bỏ quên lực ma sát/lực cản hoặc xác định sai chiều của lực ma sát ngược chiều chuyển động tương đối.',
  },
  'C3-B1': {
    code: 'C3-B1',
    pillar: 'energy_thermo',
    coreConcepts: ['Các dạng năng lượng: Cơ, Nhiệt, Điện, Quang, Hóa', 'Đơn vị Joule (J)'],
    failureSymptom: 'Không phân biệt được các dạng năng lượng dự trữ (thế năng, hóa năng) và năng lượng gắn với chuyển động.',
  },
  'C3-B2': {
    code: 'C3-B2',
    pillar: 'energy_thermo',
    coreConcepts: ['Định luật bảo toàn & chuyển hóa năng lượng', 'Năng lượng có ích & năng lượng hao phí'],
    failureSymptom: 'Quên mất phần năng lượng hao phí (thường tỏa nhiệt do ma sát) khi lập phương trình bảo toàn.',
  },
  'C3-B3': {
    code: 'C3-B3',
    pillar: 'energy_thermo',
    coreConcepts: ['Năng lượng tái tạo & nhiên liệu hóa thạch', 'Hiệu quả sử dụng năng lượng'],
    failureSymptom: 'Nhầm lẫn nguồn năng lượng hạt nhân với năng lượng tái tạo.',
  },
  'C4-B1': {
    code: 'C4-B1',
    pillar: 'modern_astro',
    coreConcepts: ['Tự quay của Trái Đất quanh trục', 'Chuyển động nhìn thấy của Mặt Trời (Đông → Tây)'],
    failureSymptom: 'Nhầm chuyển động biểu kiến của Mặt Trời với chuyển động thực của Trái Đất.',
  },
  'C4-B2': {
    code: 'C4-B2',
    pillar: 'modern_astro',
    coreConcepts: ['Mặt Trăng phản xạ ánh sáng Mặt Trời', 'Các pha Mặt Trăng (Không trăng, Trăng tròn, Bán nguyệt)'],
    failureSymptom: 'Nghĩ rằng Mặt Trăng tự phát sáng hoặc nhầm nguyên nhân các pha Mặt Trăng với hiện tượng nguyệt thực.',
  },
  'C4-B3': {
    code: 'C4-B3',
    pillar: 'modern_astro',
    coreConcepts: ['Cấu trúc Hệ Mặt Trời (8 hành tinh)', 'Lực hấp dẫn giữ các hành tinh trên quỹ đạo', 'Ngân Hà'],
    failureSymptom: 'Không hiểu vai trò của lực hấp dẫn đóng vai trò lực hướng tâm giữ các thiên thể chuyển động quanh Mặt Trời.',
  },

  // ================= LỚP 7 =================
  'G7-C1-B1': {
    code: 'G7-C1-B1',
    pillar: 'mechanics',
    coreConcepts: ['Tốc độ v = s / t', 'Đơn vị m/s và km/h (1 m/s = 3,6 km/h)', 'Tốc độ trung bình'],
    failureSymptom: 'Nhầm quy tắc đổi 1 m/s = 3,6 km/h hoặc lấy trung bình cộng tốc độ thay vì v_tb = Tổng s / Tổng t.',
  },
  'G7-C1-B2': {
    code: 'G7-C1-B2',
    pillar: 'mechanics',
    coreConcepts: ['Đồ thị quãng đường - thời gian (s - t)', 'Độ dốc đồ thị biểu diễn tốc độ v'],
    failureSymptom: 'Đọc sai đồ thị khi vật đứng yên (đoạn nằm ngang) hoặc không tính được tốc độ từ hệ số góc đồ thị.',
  },
  'G7-C1-B3': {
    code: 'G7-C1-B3',
    pillar: 'mechanics',
    coreConcepts: ['Đo tốc độ bằng cổng quang điện', 'Khoảng cách an toàn giao thông & thời gian phản ứng'],
    failureSymptom: 'Không tách biệt được quãng đường phản ứng và quãng đường phanh dừng xe.',
  },
  'G7-C2-B1': {
    code: 'G7-C2-B1',
    pillar: 'waves_optics',
    coreConcepts: ['Nguồn âm là vật dao động', 'Môi trường truyền âm (v_rắn > v_lỏng > v_khí)', 'Chân không không truyền âm'],
    failureSymptom: 'Nghĩ sóng âm truyền được trong chân không hoặc nhầm tốc độ truyền âm trong các môi trường.',
  },
  'G7-C2-B2': {
    code: 'G7-C2-B2',
    pillar: 'waves_optics',
    coreConcepts: ['Tần số f (Hz) quyết định độ cao', 'Biên độ dao động quyết định độ to (dB)'],
    failureSymptom: 'Đánh đồng tần số (độ cao) với biên độ (độ to) của sóng âm và dao động.',
  },
  'G7-C2-B3': {
    code: 'G7-C2-B3',
    pillar: 'waves_optics',
    coreConcepts: ['Phản xạ âm & Tiếng vang (Δt ≥ 1/15 s)', 'Đo độ sâu đáy biển bằng sóng siêu âm: h = v·t / 2'],
    failureSymptom: 'Quên chia 2 trong công thức tính khoảng cách bằng phản xạ sóng (s = v·t / 2).',
  },
  'G7-C3-B1': {
    code: 'G7-C3-B1',
    pillar: 'waves_optics',
    coreConcepts: ['Định luật truyền thẳng của ánh sáng', 'Chùm sáng song song, hội tụ, phân kỳ', 'Vùng tối & Vùng nửa tối'],
    failureSymptom: 'Không vẽ được đường truyền tia sáng thẳng để xác định vùng bóng tối và bóng nửa tối.',
  },
  'G7-C3-B2': {
    code: 'G7-C3-B2',
    pillar: 'waves_optics',
    coreConcepts: ['Định luật phản xạ ánh sáng: i\' = i', 'Tia tới, tia phản xạ và pháp tuyến', 'Phản xạ gương & khuếch tán'],
    failureSymptom: 'Lấy góc hợp bởi tia sáng và mặt gương thay vì góc hợp với pháp tuyến vuông góc mặt gương.',
  },
  'G7-C3-B3': {
    code: 'G7-C3-B3',
    pillar: 'waves_optics',
    coreConcepts: ['Tính chất ảnh qua gương phẳng (ảnh ảo, bằng vật, đối xứng)', 'Cách dựng ảnh bằng tia sáng'],
    failureSymptom: 'Nhầm khoảng cách từ ảnh đến gương với khoảng cách từ ảnh đến vật (d\' + d = 2d).',
  },
  'G7-C4-B1': {
    code: 'G7-C4-B1',
    pillar: 'electromagnetism',
    coreConcepts: ['Hai cực từ Bắc (N) và Nam (S)', 'Tương tác từ: cùng cực đẩy, khác cực hút', 'Vật liệu từ'],
    failureSymptom: 'Nhầm tương tác giữa hai cực từ với tương tác giữa hai điện tích.',
  },
  'G7-C4-B2': {
    code: 'G7-C4-B2',
    pillar: 'electromagnetism',
    coreConcepts: ['Từ trường & Đường sức từ', 'Quy ước chiều đường sức: Ra Bắc (N) - Vào Nam (S)', 'Từ trường Trái Đất'],
    failureSymptom: 'Xác định ngược chiều đường sức từ bên ngoài nam châm (nhầm Vào Bắc - Ra Nam).',
  },
  'G7-C4-B3': {
    code: 'G7-C4-B3',
    pillar: 'electromagnetism',
    coreConcepts: ['Từ trường của ống dây có dòng điện', 'Cấu tạo nam châm điện (ống dây + lõi sắt non)'],
    failureSymptom: 'Nhầm vai trò của lõi sắt non và lõi thép khi ngắt dòng điện qua nam châm điện.',
  },

  // ================= LỚP 8 =================
  'G8-CH1-TP1': {
    code: 'G8-CH1-TP1',
    pillar: 'mechanics',
    coreConcepts: ['Khối lượng riêng D = m / V (kg/m³, g/cm³)', 'Trọng lượng riêng d = P / V = 10·D'],
    failureSymptom: 'Đổi sai 1 g/cm³ = 1000 kg/m³ hoặc nhầm công thức m = D · V khi giải bài toán cơ - nhiệt - hạt nhân.',
  },
  'G8-CH1-TP2': {
    code: 'G8-CH1-TP2',
    pillar: 'mechanics',
    coreConcepts: ['Áp lực F vuông góc diện tích bị ép S', 'Áp suất p = F / S', 'Đơn vị Pascal: 1 Pa = 1 N/m²'],
    failureSymptom: 'Quên đổi diện tích S từ cm² sang m² (1 cm² = 10⁻⁴ m²) hoặc lấy trọng lượng làm áp lực khi mặt nghiêng.',
  },
  'G8-CH1-TP3': {
    code: 'G8-CH1-TP3',
    pillar: 'mechanics',
    coreConcepts: ['Áp suất chất lỏng p = d·h = ρ·g·h', 'Áp suất khí quyển', 'Lực đẩy Archimedes F_A = d·V_chìm'],
    failureSymptom: 'Lấy toàn bộ thể tích vật thay vì phần thể tích chìm trong chất lỏng, hoặc nhầm độ sâu h với chiều cao từ đáy.',
  },
  'G8-CH2-TP1': {
    code: 'G8-CH2-TP1',
    pillar: 'mechanics',
    coreConcepts: ['Trục quay và cánh tay đòn d (khoảng cách vuông góc)', 'Moment lực M = F · d (N·m)'],
    failureSymptom: 'Lấy chiều dài thanh làm cánh tay đòn thay vì hạ đường vuông góc từ trục quay đến giá của lực.',
  },
  'G8-CH2-TP2': {
    code: 'G8-CH2-TP2',
    pillar: 'mechanics',
    coreConcepts: ['Điều kiện cân bằng đòn bẩy: F₁·d₁ = F₂·d₂', 'Điểm tựa O và lợi về lực'],
    failureSymptom: 'Lập sai tỉ lệ nghịch giữa lực và cánh tay đòn khi giải bài toán cân bằng vật rắn.',
  },
  'G8-CH2-TP3': {
    code: 'G8-CH2-TP3',
    pillar: 'mechanics',
    coreConcepts: ['Ứng dụng moment lực trong cơ khí & sinh học', 'Cân bằng tĩnh học của hệ có trục quay'],
    failureSymptom: 'Không xác định đúng điểm tựa thực tế trong các hệ cơ học phức tạp.',
  },
  'G8-CH3-TP1': {
    code: 'G8-CH3-TP1',
    pillar: 'electromagnetism',
    coreConcepts: ['Hai loại điện tích dương (+) và âm (-)', 'Dịch chuyển electron khi nhiễm điện', 'Cùng dấu đẩy, trái dấu hút'],
    failureSymptom: 'Nghĩ rằng hạt nhân (proton) di chuyển từ vật này sang vật khác khi nhiễm điện.',
  },
  'G8-CH3-TP2': {
    code: 'G8-CH3-TP2',
    pillar: 'electromagnetism',
    coreConcepts: ['Bản chất dòng điện là dòng chuyển dời có hướng của hạt mang điện', 'Chiều dòng điện quy ước (+ → -)'],
    failureSymptom: 'Nhầm chiều dòng điện quy ước với chiều dịch chuyển của các electron tự do trong kim loại.',
  },
  'G8-CH3-TP3': {
    code: 'G8-CH3-TP3',
    pillar: 'electromagnetism',
    coreConcepts: ['Cường độ dòng điện I (A) & Ampe kế mắc nối tiếp', 'Hiệu điện thế U (V) & Vôn kế mắc song song'],
    failureSymptom: 'Mắc nhầm Ampe kế song song hoặc Vôn kế nối tiếp trong sơ đồ mạch điện.',
  },
  'G8-CH4-TP1': {
    code: 'G8-CH4-TP1',
    pillar: 'energy_thermo',
    coreConcepts: ['Động năng chuyển động nhiệt phân tử', 'Nội năng U phụ thuộc nhiệt độ và thể tích', 'Nhiệt lượng Q'],
    failureSymptom: 'Đánh đồng nội năng (hàm trạng thái) với nhiệt lượng (phần năng lượng trao đổi trong quá trình).',
  },
  'G8-CH4-TP2': {
    code: 'G8-CH4-TP2',
    pillar: 'energy_thermo',
    coreConcepts: ['Dẫn nhiệt (chất rắn)', 'Đối lưu (chất lỏng & khí)', 'Bức xạ nhiệt (truyền được trong chân không)'],
    failureSymptom: 'Nhầm cơ chế truyền nhiệt trong chất khí/lỏng và trong khoảng chân không vũ trụ.',
  },
  'G8-CH4-TP3': {
    code: 'G8-CH4-TP3',
    pillar: 'energy_thermo',
    coreConcepts: ['Sự nở vì nhiệt của rắn, lỏng, khí (khí > lỏng > rắn)', 'Lực tương tác lớn khi ngăn cản sự co dãn nhiệt'],
    failureSymptom: 'Không nắm được khi nhiệt độ tăng ở áp suất không đổi thì thể tích tăng và khối lượng riêng giảm.',
  },

  // ================= LỚP 9 =================
  'G9-CH1-TP1': {
    code: 'G9-CH1-TP1',
    pillar: 'energy_thermo',
    coreConcepts: ['Công cơ học A = F · s', 'Điều kiện sinh công (có lực tác dụng và có quãng đường dịch chuyển theo phương lực)'],
    failureSymptom: 'Tính công khác 0 cho các lực vuông góc với phương chuyển động (như trọng lực khi vật đi ngang).',
  },
  'G9-CH1-TP2': {
    code: 'G9-CH1-TP2',
    pillar: 'energy_thermo',
    coreConcepts: ['Công suất P = A / t = F · v', 'Đơn vị Watt (1 W = 1 J/s, 1 kW = 1000 W)'],
    failureSymptom: 'Nhầm lẫn giữa Công (năng lượng tổng cộng, J) và Công suất (tốc độ thực hiện công, W).',
  },
  'G9-CH1-TP3': {
    code: 'G9-CH1-TP3',
    pillar: 'energy_thermo',
    coreConcepts: ['Động năng W_đ = ½mv²', 'Thế năng trọng trường W_t = P·h = mgh', 'Cơ năng W = W_đ + W_t'],
    failureSymptom: 'Quên bình phương vận tốc trong công thức động năng hoặc quên chọn mốc thế năng.',
  },
  'G9-CH2-TP1': {
    code: 'G9-CH2-TP1',
    pillar: 'waves_optics',
    coreConcepts: ['Khúc xạ ánh sáng tại mặt phân cách', 'Chiết suất môi trường & Định luật Snell: n₁·sin i = n₂·sin r', 'Phản xạ toàn phần'],
    failureSymptom: 'Xác định sai chiều lệch của tia khúc xạ (từ không khí vào nước thì r < i) hoặc điều kiện phản xạ toàn phần.',
  },
  'G9-CH2-TP2': {
    code: 'G9-CH2-TP2',
    pillar: 'waves_optics',
    coreConcepts: ['Thấu kính hội tụ & phân kỳ', 'Tiêu cự f, quang tâm O', 'Đường truyền 3 tia sáng đặc biệt'],
    failureSymptom: 'Nhầm tính chất ảnh thật/ảnh ảo của thấu kính hội tụ (khi d < f) và thấu kính phân kỳ.',
  },
  'G9-CH2-TP3': {
    code: 'G9-CH2-TP3',
    pillar: 'waves_optics',
    coreConcepts: ['Thấu kính mắt & Màng lưới (võng mạc)', 'Cận thị (đeo TK phân kỳ) & Viễn thị (đeo TK hội tụ)', 'Kính lúp'],
    failureSymptom: 'Nhầm loại thấu kính khắc phục tật cận thị và tật viễn thị.',
  },
  'G9-CH3-TP1': {
    code: 'G9-CH3-TP1',
    pillar: 'electromagnetism',
    coreConcepts: ['Định luật Ohm: I = U / R', 'Điện trở dây dẫn R = ρ · l / S', 'Đơn vị Ohm (Ω)'],
    failureSymptom: 'Nghĩ rằng điện trở R của dây dẫn phụ thuộc vào U và I (thực tế R chỉ phụ thuộc l, S, ρ và nhiệt độ).',
  },
  'G9-CH3-TP2': {
    code: 'G9-CH3-TP2',
    pillar: 'electromagnetism',
    coreConcepts: ['Mạch nối tiếp: I = I₁ = I₂, R_tđ = R₁ + R₂', 'Mạch song song: U = U₁ = U₂, 1/R_tđ = 1/R₁ + 1/R₂'],
    failureSymptom: 'Áp dụng nhầm công thức cộng điện trở nối tiếp cho mạch mắc song song và ngược lại.',
  },
  'G9-CH3-TP3': {
    code: 'G9-CH3-TP3',
    pillar: 'electromagnetism',
    coreConcepts: ['Công suất điện P = U·I = I²R = U²/R', 'Định luật Joule - Lenz: Q = I²·R·t', 'Số đếm công tơ điện (1 kWh = 3,6·10⁶ J)'],
    failureSymptom: 'Dùng giá trị công suất định mức khi thiết bị hoạt động ở hiệu điện thế khác hiệu điện thế định mức.',
  },
  'G9-CH4-TP1': {
    code: 'G9-CH4-TP1',
    pillar: 'electromagnetism',
    coreConcepts: ['Số đường sức từ xuyên qua tiết diện cuộn dây', 'Điều kiện xuất hiện dòng điện cảm ứng (biến thiên đường sức từ)'],
    failureSymptom: 'Nghĩ rằng từ trường mạnh không đổi cũng sinh ra dòng điện cảm ứng (bỏ quên yếu tố biến thiên).',
  },
  'G9-CH4-TP2': {
    code: 'G9-CH4-TP2',
    pillar: 'electromagnetism',
    coreConcepts: ['Dòng điện xoay chiều đổi chiều luân phiên', 'Nguyên tắc máy phát điện xoay chiều (khung dây quay trong từ trường)'],
    failureSymptom: 'Không nắm được mối liên hệ giữa tốc độ quay của rôto và tần số dòng điện xoay chiều.',
  },
  'G9-CH4-TP3': {
    code: 'G9-CH4-TP3',
    pillar: 'electromagnetism',
    coreConcepts: ['Công thức máy biến áp: U₁/U₂ = N₁/N₂', 'Hao phí truyền tải ΔP = P²·R / U²'],
    failureSymptom: 'Nghĩ máy biến áp hoạt động được với dòng điện một chiều không đổi hoặc nhầm tỉ lệ U² trong hao phí.',
  },

  // ================= LỚP 10 =================
  'G10-CH1-TP1': {
    code: 'G10-CH1-TP1',
    pillar: 'measurement',
    coreConcepts: ['Phương pháp thực nghiệm & mô hình vật lý', 'An toàn trong phòng thí nghiệm'],
    failureSymptom: 'Nhầm thứ tự các bước trong tiến trình nghiên cứu thực nghiệm Vật lý.',
  },
  'G10-CH1-TP2': {
    code: 'G10-CH1-TP2',
    pillar: 'measurement',
    coreConcepts: ['Sai số tuyệt đối ΔA = ΔA_tb + ΔA_dc', 'Sai số tỉ đối δA = (ΔA / A_tb)·100%', 'Chữ số có nghĩa'],
    failureSymptom: 'Cộng sai số gián tiếp sai quy tắc (nhân/chia đại lượng phải cộng sai số tỉ đối, không cộng sai số tuyệt đối).',
  },
  'G10-CH2-TP1': {
    code: 'G10-CH2-TP1',
    pillar: 'mechanics',
    coreConcepts: ['Quãng đường s (vô hướng) vs Độ dịch chuyển d (vectơ)', 'Vận tốc v = Δd / Δt vs Tốc độ', 'Cộng vận tốc'],
    failureSymptom: 'Đồng nhất quãng đường đi được với độ dịch chuyển khi vật đổi chiều chuyển động.',
  },
  'G10-CH2-TP2': {
    code: 'G10-CH2-TP2',
    pillar: 'mechanics',
    coreConcepts: ['Gia tốc a = Δv / Δt', 'Phương trình: v = v₀ + at; d = v₀t + ½at²; v² - v₀² = 2ad', 'Đồ thị v - t'],
    failureSymptom: 'Quên xét dấu âm của gia tốc a khi vật chuyển động chậm dần đều (a ngược dấu v).',
  },
  'G10-CH2-TP3': {
    code: 'G10-CH2-TP3',
    pillar: 'mechanics',
    coreConcepts: ['Rơi tự do: v = gt, h = ½gt²', 'Chuyển động ném ngang & ném xiên (phân tích 2 phương Ox, Oy độc lập)'],
    failureSymptom: 'Không tách chuyển động ném thành hai thành phần độc lập (thẳng đều theo Ox, rơi tự do theo Oy).',
  },
  'G10-CH3-TP1': {
    code: 'G10-CH3-TP1',
    pillar: 'mechanics',
    coreConcepts: ['Quy tắc hình bình hành: F² = F₁² + F₂² + 2F₁F₂cos α', 'Điều kiện cân bằng: ΣF = 0', 'Chiếu vectơ lên hệ trục'],
    failureSymptom: 'Cộng đại số độ lớn các lực F = F₁ + F₂ mà bỏ qua góc hợp bởi hai vectơ lực.',
  },
  'G10-CH3-TP2': {
    code: 'G10-CH3-TP2',
    pillar: 'mechanics',
    coreConcepts: ['Định luật I (Quán tính)', 'Định luật II: a = F_hl / m', 'Định luật III: F_AB = -F_BA (cặp lực - phản lực)'],
    failureSymptom: 'Nghĩ rằng lực và phản lực trong Định luật III Newton tự triệt tiêu nhau (chúng đặt vào 2 vật khác nhau!).',
  },
  'G10-CH3-TP3': {
    code: 'G10-CH3-TP3',
    pillar: 'mechanics',
    coreConcepts: ['Phản lực pháp tuyến N', 'Ma sát trượt F_ms = μ·N', 'Chuyển động trên mặt phẳng nghiêng (N = mg·cos α)'],
    failureSymptom: 'Luôn lấy N = mg ngay cả khi vật nằm trên mặt phẳng nghiêng hoặc có lực kéo xiên góc α.',
  },
  'G10-CH4-TP1': {
    code: 'G10-CH4-TP1',
    pillar: 'energy_thermo',
    coreConcepts: ['Công tổng quát A = F·d·cos α', 'Công phát động (α < 90°) & Công cản (α > 90°)', 'Hiệu suất H = P_ích / P_tp'],
    failureSymptom: 'Thiếu nhân cos α trong biểu thức tính công hoặc quên dấu âm của công cản khi α = 180°.',
  },
  'G10-CH4-TP2': {
    code: 'G10-CH4-TP2',
    pillar: 'energy_thermo',
    coreConcepts: ['Động năng W_đ = ½mv²', 'Thế năng trọng trường W_t = mgh', 'Định lý biến thiên động năng: ΔW_đ = ΣA_ngoại lực'],
    failureSymptom: 'Lập định lý động năng nhưng bỏ sót công của trọng lực hoặc công của lực ma sát.',
  },
  'G10-CH4-TP3': {
    code: 'G10-CH4-TP3',
    pillar: 'energy_thermo',
    coreConcepts: ['Bảo toàn cơ năng trong trường lực thế: W₁ = W₂', 'Biến thiên cơ năng khi có ma sát: W₂ - W₁ = A_ms'],
    failureSymptom: 'Áp dụng bảo toàn cơ năng ngay cả khi hệ chịu tác dụng của lực ma sát trượt sinh công cản.',
  },
  'G10-CH5-TP1': {
    code: 'G10-CH5-TP1',
    pillar: 'mechanics',
    coreConcepts: ['Vectơ động lượng p = m·v (kg·m/s)', 'Xung lượng của lực: Δp = F·Δt'],
    failureSymptom: 'Tính độ biến thiên động lượng Δp = p₂ - p₁ bằng phép trừ đại số mà quên xét chiều vectơ khi vật bật ngược lại.',
  },
  'G10-CH5-TP2': {
    code: 'G10-CH5-TP2',
    pillar: 'mechanics',
    coreConcepts: ['Hệ kín (hệ cô lập)', 'Định luật bảo toàn động lượng: m₁v₁ + m₂v₂ = m₁v₁\' + m₂v₂\'', 'Chuyển động bằng phản lực'],
    failureSymptom: 'Viết phương trình bảo toàn động lượng nhưng không chọn chiều dương để chiếu các vectơ vận tốc.',
  },
  'G10-CH5-TP3': {
    code: 'G10-CH5-TP3',
    pillar: 'mechanics',
    coreConcepts: ['Va chạm đàn hồi (bảo toàn cả động lượng và động năng)', 'Va chạm mềm: v\' = (m₁v₁ + m₂v₂)/(m₁ + m₂)'],
    failureSymptom: 'Áp dụng bảo toàn cơ năng/động năng cho quá trình va chạm mềm (nơi một phần động năng biến thành nhiệt).',
  },
  'G10-CH6-TP1': {
    code: 'G10-CH6-TP1',
    pillar: 'mechanics',
    coreConcepts: ['Góc quét Δφ (rad), Tốc độ góc ω = Δφ/Δt = 2π/T = 2πf', 'Liên hệ v = ω·r'],
    failureSymptom: 'Quên đổi góc từ độ (°) sang radian (rad) hoặc nhầm chu kỳ T với tần số f = 1/T.',
  },
  'G10-CH6-TP2': {
    code: 'G10-CH6-TP2',
    pillar: 'mechanics',
    coreConcepts: ['Gia tốc hướng tâm a_ht = v²/r = ω²·r', 'Lực hướng tâm F_ht = m·a_ht'],
    failureSymptom: 'Coi lực hướng tâm là một lực mới độc lập thêm vào vật (thực chất nó là hợp lực của các lực đã có).',
  },
  'G10-CH6-TP3': {
    code: 'G10-CH6-TP3',
    pillar: 'mechanics',
    coreConcepts: ['Biến dạng kéo và biến dạng nén', 'Định luật Hooke: F_đh = k·|Δl|', 'Độ cứng k (N/m)'],
    failureSymptom: 'Quên đổi độ biến dạng Δl từ cm sang m khi nhân với độ cứng k (N/m).',
  },

  // ================= LỚP 11 =================
  'G11-CH1-TP1': {
    code: 'G11-CH1-TP1',
    pillar: 'waves_optics',
    coreConcepts: ['Phương trình x = A·cos(ωt + φ)', 'Vận tốc v = -ωA·sin(ωt + φ)', 'Gia tốc a = -ω²x', 'Hệ thức độc lập A² = x² + (v/ω)²'],
    failureSymptom: 'Xác định sai pha ban đầu φ (quên xét dấu của vận tốc v tại t = 0) hoặc nhầm vị trí cực đại của v và a.',
  },
  'G11-CH1-TP2': {
    code: 'G11-CH1-TP2',
    pillar: 'waves_optics',
    coreConcepts: ['Con lắc lò xo: T = 2π√(m/k)', 'Con lắc đơn: T = 2π√(l/g)', 'Cơ năng W = ½kA² = ½mω²A² (biến thiên tuần hoàn với 2f)'],
    failureSymptom: 'Nhầm tần số biến thiên của động năng/thế năng (f\' = 2f, T\' = T/2) với tần số dao động của li độ f.',
  },
  'G11-CH1-TP3': {
    code: 'G11-CH1-TP3',
    pillar: 'waves_optics',
    coreConcepts: ['Dao động tắt dần do lực cản/ma sát', 'Dao động cưỡng bức', 'Điều kiện cộng hưởng: f_ngoại lực = f₀'],
    failureSymptom: 'Nghĩ rằng biên độ dao động cưỡng bức chỉ phụ thuộc biên độ ngoại lực mà quên mất độ chênh lệch tần số |f - f₀|.',
  },
  'G11-CH2-TP1': {
    code: 'G11-CH2-TP1',
    pillar: 'waves_optics',
    coreConcepts: ['Bước sóng λ = v·T = v/f', 'Sóng ngang & sóng dọc', 'Độ lệch pha Δφ = 2πd / λ'],
    failureSymptom: 'Nghĩ khi sóng truyền đi thì các phần tử vật chất cũng trôi theo sóng (thực tế phần tử chỉ dao động tại chỗ).',
  },
  'G11-CH2-TP2': {
    code: 'G11-CH2-TP2',
    pillar: 'waves_optics',
    coreConcepts: ['Giao thoa sóng: Cực đại d₂ - d₁ = kλ, Cực tiểu d₂ - d₁ = (k + ½)λ', 'Sóng dừng: l = k·(λ/2), khoảng cách 2 nút = λ/2'],
    failureSymptom: 'Nhầm khoảng cách giữa hai nút sóng liên tiếp là λ thay vì λ/2.',
  },
  'G11-CH2-TP3': {
    code: 'G11-CH2-TP3',
    pillar: 'waves_optics',
    coreConcepts: ['Sóng điện từ là sóng ngang, truyền được trong chân không với c = 3·10⁸ m/s', 'Thang sóng điện từ & Bước sóng λ = c/f'],
    failureSymptom: 'Sắp xếp sai thứ tự bước sóng và tần số các bức xạ trong thang sóng điện từ (Radio → Hồng ngoại → Khả kiến → Tử ngoại → X → Gamma).',
  },
  'G11-CH3-TP1': {
    code: 'G11-CH3-TP1',
    pillar: 'electromagnetism',
    coreConcepts: ['Định luật Coulomb: F = k·|q₁q₂| / (ε·r²)', 'Cường độ điện trường E = F/|q| = k|Q|/(ε·r²)', 'Nguyên lý chồng chất E'],
    failureSymptom: 'Thay cả dấu âm của điện tích vào biểu thức độ lớn lực Coulomb hoặc xác định ngược chiều vectơ E do điện tích âm gây ra.',
  },
  'G11-CH3-TP2': {
    code: 'G11-CH3-TP2',
    pillar: 'electromagnetism',
    coreConcepts: ['Công lực điện A_MN = q·E·d', 'Hiệu điện thế U_MN = V_M - V_N = A_MN / q', 'Liên hệ E = U / d'],
    failureSymptom: 'Lấy quãng đường s thay vì hình chiếu d của đoạn đường lên phương đường sức điện trong công thức A = qEd.',
  },
  'G11-CH3-TP3': {
    code: 'G11-CH3-TP3',
    pillar: 'electromagnetism',
    coreConcepts: ['Điện dung tụ điện C = Q / U (Farad)', 'Ghép tụ nối tiếp & song song', 'Năng lượng tụ điện W = ½CU² = ½QU = Q²/(2C)'],
    failureSymptom: 'Áp dụng nhầm công thức ghép điện trở cho bài toán ghép bộ tụ điện (công thức ghép tụ ngược với ghép điện trở!).',
  },
  'G11-CH4-TP1': {
    code: 'G11-CH4-TP1',
    pillar: 'electromagnetism',
    coreConcepts: ['Cường độ dòng điện I = Δq / Δt = S·n·e·v_trôi', 'Điện trở phụ thuộc nhiệt độ R = R₀[1 + α(t - t₀)]'],
    failureSymptom: 'Nhầm tốc độ truyền tín hiệu điện trường (≈ c) với tốc độ trôi rất nhỏ (cỡ mm/s) của electron tự do.',
  },
  'G11-CH4-TP2': {
    code: 'G11-CH4-TP2',
    pillar: 'electromagnetism',
    coreConcepts: ['Suất điện động E của nguồn', 'Định luật Ohm toàn mạch: I = E / (R_N + r)', 'Hiệu điện thế mạch ngoài U_N = E - I·r'],
    failureSymptom: 'Bỏ quên điện trở trong r của nguồn điện (luôn lấy U = E ngay cả khi có dòng điện I chạy qua nguồn).',
  },
  'G11-CH4-TP3': {
    code: 'G11-CH4-TP3',
    pillar: 'electromagnetism',
    coreConcepts: ['Công suất nguồn P_ng = E·I', 'Hiệu suất nguồn điện H = U_N / E = R_N / (R_N + r)', 'Nhiệt敏/Quang điện trở'],
    failureSymptom: 'Nhầm công suất toàn phần của nguồn (E·I) với công suất tiêu thụ mạch ngoài (U·I).',
  },

  // ================= LỚP 12 (TRỌNG TÂM THI THPT 2025) =================
  'G12-CH1-TP1': {
    code: 'G12-CH1-TP1',
    pillar: 'energy_thermo',
    coreConcepts: ['Mô hình động học phân tử (rắn, lỏng, khí)', 'Lực tương tác phân tử', 'Thang nhiệt độ Kelvin T(K) = t(°C) + 273,15'],
    failureSymptom: 'Đổi sai độ biến thiên nhiệt độ ΔT(K) = Δt(°C) hoặc không hiểu bản chất lực đẩy/hút phân tử theo khoảng cách.',
  },
  'G12-CH1-TP2': {
    code: 'G12-CH1-TP2',
    pillar: 'energy_thermo',
    coreConcepts: ['Định luật I Nhiệt động lực học: ΔU = A + Q', 'Quy ước dấu: A > 0 (nhận công), Q > 0 (nhận nhiệt)', 'Công đẳng áp A\' = p·ΔV'],
    failureSymptom: 'Nhầm dấu quy ước của công A và nhiệt lượng Q khi khối khí giãn nở sinh công (A < 0) hoặc tỏa nhiệt (Q < 0).',
  },
  'G12-CH1-TP3': {
    code: 'G12-CH1-TP3',
    pillar: 'energy_thermo',
    coreConcepts: ['Nhiệt dung riêng Q = mcΔT', 'Nhiệt nóng chảy riêng Q = λm', 'Nhiệt hóa hơi riêng Q = Lm', 'Phương trình cân bằng nhiệt'],
    failureSymptom: 'Quên cộng nhiệt lượng chuyển thể (Q = λm hoặc Lm) khi bài toán có giai đoạn nước đá tan hoặc nước sôi hóa hơi.',
  },
  'G12-CH2-TP1': {
    code: 'G12-CH2-TP1',
    pillar: 'energy_thermo',
    coreConcepts: ['Mô hình khí lý tưởng', 'Định luật Boyle (Đẳng nhiệt T = const): p₁V₁ = p₂V₂', 'Đường đẳng nhiệt hypebol trong hệ (p, V)'],
    failureSymptom: 'Không cộng thêm áp suất khí quyển p₀ khi tính áp suất cột chất lỏng/bọt khí (p = p₀ + ρgh) hoặc đọc sai đồ thị (p, T).',
  },
  'G12-CH2-TP2': {
    code: 'G12-CH2-TP2',
    pillar: 'energy_thermo',
    coreConcepts: ['Định luật Charles (Đẳng áp): V₁/T₁ = V₂/T₂', 'Phương trình trạng thái: pV/T = const', 'Clapeyron - Mendeleev: pV = nRT = (m/M)RT'],
    failureSymptom: 'Thay nhiệt độ t (°C) trực tiếp vào phương trình trạng thái thay vì đổi sang nhiệt độ tuyệt đối T (K) = t + 273!',
  },
  'G12-CH2-TP3': {
    code: 'G12-CH2-TP3',
    pillar: 'energy_thermo',
    coreConcepts: ['Áp suất vi mô: p = (1/3)n₀mv² = (2/3)n₀E_đ', 'Động năng tịnh tiến trung bình: E_đ = (3/2)kT', 'Tốc độ căn quân phương v_rms = √(3RT/M)'],
    failureSymptom: 'Nghĩ rằng động năng trung bình của phân tử phụ thuộc vào loại khí (thực tế E_đ = 3/2 kT chỉ phụ thuộc vào T).',
  },
  'G12-CH3-TP1': {
    code: 'G12-CH3-TP1',
    pillar: 'electromagnetism',
    coreConcepts: ['Cảm ứng từ B (Tesla)', 'Quy tắc bàn tay trái', 'Lực từ Ampère: F = B·I·L·sin α', 'Lực Lorentz tác dụng lên hạt mang điện'],
    failureSymptom: 'Xác định sai góc α giữa đoạn dây dẫn và vectơ cảm ứng từ B hoặc áp dụng sai quy tắc bàn tay trái.',
  },
  'G12-CH3-TP2': {
    code: 'G12-CH3-TP2',
    pillar: 'electromagnetism',
    coreConcepts: ['Từ thông Φ = N·B·S·cos α (Wb)', 'Định luật Lenz', 'Định luật Faraday: e_c = -ΔΦ / Δt', 'Suất điện động tự cảm e_tc = -L·(Δi/Δt)'],
    failureSymptom: 'Lấy góc hợp bởi vectơ B và mặt phẳng khung dây thay vì góc hợp bởi vectơ B và vectơ pháp tuyến n của mặt khung!',
  },
  'G12-CH3-TP3': {
    code: 'G12-CH3-TP3',
    pillar: 'electromagnetism',
    coreConcepts: ['Biểu thức u = U₀cos(ωt + φ)', 'Giá trị hiệu dụng I = I₀/√2, U = U₀/√2', 'Máy biến áp & Truyền tải điện năng xoay chiều'],
    failureSymptom: 'Nhầm lẫn giữa giá trị cực đại U₀ và giá trị hiệu dụng U = U₀/√2 khi tính công suất P = U·I·cos φ.',
  },
  'G12-CH4-TP1': {
    code: 'G12-CH4-TP1',
    pillar: 'modern_astro',
    coreConcepts: ['Ký hiệu hạt nhân ᴬ_Z X (Z proton, A-Z neutron)', 'Độ hụt khối Δm = Z·m_p + (A-Z)m_n - m_X', 'Năng lượng liên kết E_lk = Δm·c² & E_lkr = E_lk/A'],
    failureSymptom: 'Dùng năng lượng liên kết E_lk thay vì năng lượng liên kết riêng E_lk/A để so sánh độ bền vững của các hạt nhân.',
  },
  'G12-CH4-TP2': {
    code: 'G12-CH4-TP2',
    pillar: 'modern_astro',
    coreConcepts: ['Bảo toàn số khối A & điện tích Z', 'Năng lượng phản ứng ΔE = (m_trước - m_sau)c²', 'Phản ứng phân hạch & nhiệt hạch'],
    failureSymptom: 'Lấy (m_sau - m_trước)c² dẫn tới kết luận ngược phản ứng tỏa/thu năng lượng.',
  },
  'G12-CH4-TP3': {
    code: 'G12-CH4-TP3',
    pillar: 'modern_astro',
    coreConcepts: ['Phóng xạ α, β⁻, β⁺, γ', 'Định luật phóng xạ: N(t) = N₀·2^(-t/T) = N₀·e^(-λt)', 'Độ phóng xạ H = λ·N, với λ = ln2 / T'],
    failureSymptom: 'Quên đổi chu kỳ bán rã T ra giây (s) khi tính độ phóng xạ H (Bq), hoặc nhầm số hạt còn lại N với số hạt đã phân rã ΔN = N₀ - N.',
  },
};

/**
 * MẠNG LƯỚI LIÊN KẾT TIỀN ĐỀ XUYÊN LỚP (PREREQUISITE EDGES DAG)
 * Mọi cạnh (fromCode -> toCode) tuân thủ nghiêm ngặt thứ tự tô-pô:
 * Chủ đề tiền đề luôn thuộc lớp thấp hơn hoặc bài trước trong cùng chương trình.
 */
export const KNOWLEDGE_GRAPH_EDGES: KnowledgeEdgeSpec[] = [
  // --- TRỤ CỘT 1: ĐO LƯỜNG & THỰC NGHIỆM ---
  {
    fromCode: 'C1-B1',
    toCode: 'C1-B2',
    weight: 0.7,
    bridgeConcept: 'Khái niệm GHĐ, ĐCNN & Hệ đơn vị SI',
    pedagogicalReason: 'Kỹ năng xác định GHĐ và ĐCNN trên thước đo là tiền đề trực tiếp để đọc đúng vạch chia trên cân và đồng hồ.',
  },
  {
    fromCode: 'C1-B2',
    toCode: 'C1-B3',
    weight: 0.65,
    bridgeConcept: 'Quy tắc đọc vạch chia dụng cụ đo',
    pedagogicalReason: 'Thao tác đọc vạch chia và hiệu chỉnh dụng cụ đo giúp đọc chính xác nhiệt kế và đổi các thang nhiệt độ.',
  },
  {
    fromCode: 'C1-B1',
    toCode: 'G10-CH1-TP1',
    weight: 0.75,
    bridgeConcept: 'Phép đo các đại lượng cơ bản trong hệ SI',
    pedagogicalReason: 'Hiểu các đơn vị cơ bản (m, kg, s) ở THCS là nền tảng để nắm bắt phương pháp thực nghiệm ở Lớp 10.',
  },
  {
    fromCode: 'C1-B2',
    toCode: 'G10-CH1-TP2',
    weight: 0.85,
    bridgeConcept: 'ĐCNN dụng cụ → Sai số dụng cụ ΔA_dc',
    pedagogicalReason: 'Sai số dụng cụ ΔA_dc ở Lớp 10 được lấy bằng nửa hoặc một ĐCNN của dụng cụ đo đã học từ Lớp 6.',
  },
  {
    fromCode: 'G10-CH1-TP1',
    toCode: 'G10-CH1-TP2',
    weight: 0.8,
    bridgeConcept: 'Tiến trình thực nghiệm & Xử lý số liệu',
    pedagogicalReason: 'Nắm vững phương pháp thực nghiệm mới hiểu được bản chất sai số ngẫu nhiên và sai số hệ thống khi xử lý số liệu.',
  },

  // --- TRỤ CỘT 2: CƠ HỌC, ĐỘNG HỌC & ĐỘNG LỰC HỌC ---
  {
    fromCode: 'C2-B1',
    toCode: 'C2-B2',
    weight: 0.9,
    bridgeConcept: 'Tác dụng đẩy/kéo → Biểu diễn vectơ lực',
    pedagogicalReason: 'Phải hiểu lực có hướng và độ mạnh yếu thì mới biểu diễn được bằng mũi tên vectơ và đo bằng lực kế.',
  },
  {
    fromCode: 'C1-B2',
    toCode: 'C2-B3',
    weight: 0.9,
    bridgeConcept: 'Khối lượng m (kg) → Trọng lượng P = 10·m (N)',
    pedagogicalReason: 'Phân biệt rõ khối lượng m (kg) ở Chương 1 với trọng lượng P (N) để không đánh đồng hai đại lượng này.',
  },
  {
    fromCode: 'C2-B2',
    toCode: 'C2-B3',
    weight: 0.85,
    bridgeConcept: 'Phương & chiều của vectơ trọng lực P',
    pedagogicalReason: 'Dùng quy tắc biểu diễn lực để vẽ đúng trọng lực có phương thẳng đứng, chiều hướng xuống.',
  },
  {
    fromCode: 'C2-B1',
    toCode: 'C2-B4',
    weight: 0.8,
    bridgeConcept: 'Phân loại tương tác lực',
    pedagogicalReason: 'Từ khái niệm lực cơ bản để phân biệt lực cần tiếp xúc trực tiếp và lực tác dụng qua trường.',
  },
  {
    fromCode: 'C2-B2',
    toCode: 'C2-B5',
    weight: 0.9,
    bridgeConcept: 'Độ dãn lò xo Δl tỉ lệ với lực kéo → Nguyên lý lực kế',
    pedagogicalReason: 'Sự biến dạng đàn hồi của lò xo chính là nguyên lý cốt lõi cấu tạo nên lực kế đo lực.',
  },
  {
    fromCode: 'C2-B4',
    toCode: 'C2-B6',
    weight: 0.85,
    bridgeConcept: 'Lực tiếp xúc tại bề mặt → Lực ma sát',
    pedagogicalReason: 'Lực ma sát và lực cản môi trường là dạng lực tiếp xúc điển hình xuất hiện khi vật chuyển động.',
  },
  {
    fromCode: 'C1-B1',
    toCode: 'G7-C1-B1',
    weight: 0.85,
    bridgeConcept: 'Quãng đường s (m, km) trong công thức v = s / t',
    pedagogicalReason: 'Đo chiều dài/quãng đường và đổi đơn vị m ↔ km là điều kiện bắt buộc để tính tốc độ chuyển động.',
  },
  {
    fromCode: 'C1-B2',
    toCode: 'G7-C1-B1',
    weight: 0.85,
    bridgeConcept: 'Thời gian t (s, h) trong công thức v = s / t',
    pedagogicalReason: 'Đổi thời gian giữa giây, phút, giờ quyết định việc đổi đúng tốc độ giữa m/s và km/h.',
  },
  {
    fromCode: 'G7-C1-B1',
    toCode: 'G7-C1-B2',
    weight: 0.95,
    bridgeConcept: 'Quan hệ s = v·t → Độ dốc đồ thị quãng đường - thời gian',
    pedagogicalReason: 'Phải nắm vững công thức v = s/t mới đọc được tốc độ từ hệ số góc của đường biểu diễn trên đồ thị s - t.',
  },
  {
    fromCode: 'G7-C1-B1',
    toCode: 'G7-C1-B3',
    weight: 0.85,
    bridgeConcept: 'Tính quãng đường dừng xe an toàn s = v·t',
    pedagogicalReason: 'Vận dụng công thức tốc độ để tính quãng đường phản ứng và khoảng cách an toàn tối thiểu giữa hai xe.',
  },
  {
    fromCode: 'C2-B6',
    toCode: 'G7-C1-B3',
    weight: 0.75,
    bridgeConcept: 'Lực ma sát mặt đường khi phanh xe',
    pedagogicalReason: 'Hiểu lực ma sát trượt giảm khi trời mưa trơn trượt giúp giải thích vì sao cần tăng khoảng cách an toàn.',
  },
  {
    fromCode: 'C1-B1',
    toCode: 'G8-CH1-TP1',
    weight: 0.9,
    bridgeConcept: 'Thể tích V (m³, cm³) trong công thức D = m / V',
    pedagogicalReason: 'Sai lầm phổ biến nhất khi tính Khối lượng riêng ở Lớp 8 là quên cách đổi đơn vị thể tích cm³ ↔ m³ từ Lớp 6.',
  },
  {
    fromCode: 'C2-B3',
    toCode: 'G8-CH1-TP1',
    weight: 0.85,
    bridgeConcept: 'Liên hệ P = 10m → Trọng lượng riêng d = 10D',
    pedagogicalReason: 'Hiểu quan hệ giữa trọng lượng và khối lượng giúp suy ra ngay d = P/V = 10·D.',
  },
  {
    fromCode: 'C2-B3',
    toCode: 'G8-CH1-TP2',
    weight: 0.85,
    bridgeConcept: 'Trọng lực tạo ra áp lực F vuông góc mặt sàn',
    pedagogicalReason: 'Trong đa số bài toán đặt vật trên mặt sàn ngang, áp lực F chính bằng trọng lượng P của vật.',
  },
  {
    fromCode: 'G8-CH1-TP1',
    toCode: 'G8-CH1-TP3',
    weight: 0.95,
    bridgeConcept: 'Trọng lượng riêng d = ρ·g trong p = d·h và F_A = d·V',
    pedagogicalReason: 'Không nắm được khối lượng riêng/trọng lượng riêng thì không thể tính áp suất chất lỏng p = d·h và lực đẩy Archimedes F_A = d·V.',
  },
  {
    fromCode: 'G8-CH1-TP2',
    toCode: 'G8-CH1-TP3',
    weight: 0.95,
    bridgeConcept: 'Bản chất áp suất p = F/S mở rộng sang chất lỏng & khí quyển',
    pedagogicalReason: 'Áp suất chất lỏng và áp suất khí quyển là sự mở rộng trực tiếp của khái niệm áp suất trên một đơn vị diện tích.',
  },
  {
    fromCode: 'C2-B2',
    toCode: 'G8-CH2-TP1',
    weight: 0.85,
    bridgeConcept: 'Giá của vectơ lực & Cánh tay đòn d',
    pedagogicalReason: 'Phải biết vẽ giá của vectơ lực mới xác định được khoảng cách vuông góc (cánh tay đòn d) từ trục quay đến giá của lực.',
  },
  {
    fromCode: 'G8-CH2-TP1',
    toCode: 'G8-CH2-TP2',
    weight: 0.95,
    bridgeConcept: 'Cân bằng Moment lực M₁ = M₂ → Quy tắc đòn bẩy F₁d₁ = F₂d₂',
    pedagogicalReason: 'Điều kiện cân bằng của đòn bẩy thực chất là sự cân bằng giữa hai moment lực làm quay ngược chiều nhau.',
  },
  {
    fromCode: 'G8-CH2-TP2',
    toCode: 'G8-CH2-TP3',
    weight: 0.85,
    bridgeConcept: 'Phân tích điểm tựa và cánh tay đòn trong kỹ thuật',
    pedagogicalReason: 'Vận dụng quy tắc đòn bẩy để tính lợi về lực trong các máy cơ đơn giản và hệ cơ xương.',
  },
  {
    fromCode: 'G7-C1-B1',
    toCode: 'G10-CH2-TP1',
    weight: 0.9,
    bridgeConcept: 'Nâng cấp từ Tốc độ (s/t) lên Vận tốc vectơ (d/t)',
    pedagogicalReason: 'Lớp 7 học tốc độ vô hướng; lên Lớp 10 nâng cấp thành vận tốc vectơ gắn với độ dịch chuyển có hướng.',
  },
  {
    fromCode: 'G7-C1-B2',
    toCode: 'G10-CH2-TP1',
    weight: 0.9,
    bridgeConcept: 'Đồ thị s - t (Lớp 7) → Đồ thị độ dịch chuyển d - t (Lớp 10)',
    pedagogicalReason: 'Kỹ năng tính độ dốc đồ thị ở Lớp 7 được dùng trực tiếp để tìm vận tốc có dấu trên đồ thị d - t Lớp 10.',
  },
  {
    fromCode: 'G10-CH2-TP1',
    toCode: 'G10-CH2-TP2',
    weight: 0.95,
    bridgeConcept: 'Tốc độ biến thiên vận tốc → Gia tốc a = Δv / Δt',
    pedagogicalReason: 'Nếu chưa phân biệt được dấu của vận tốc v và độ dịch chuyển d thì sẽ lập sai dấu phương trình chuyển động biến đổi đều.',
  },
  {
    fromCode: 'G10-CH2-TP2',
    toCode: 'G10-CH2-TP3',
    weight: 0.95,
    bridgeConcept: 'Chuyển động thẳng nhanh dần đều với a = g → Rơi tự do & Ném',
    pedagogicalReason: 'Rơi tự do và chuyển động ném theo phương đứng thực chất là trường hợp riêng của chuyển động biến đổi đều với gia tốc g.',
  },
  {
    fromCode: 'C2-B2',
    toCode: 'G10-CH3-TP1',
    weight: 0.85,
    bridgeConcept: 'Biểu diễn vectơ lực → Tổng hợp & Phân tích lực theo quy tắc hình bình hành',
    pedagogicalReason: 'Nền tảng biểu diễn lực giúp học sinh thực hiện phép cộng vectơ và chiếu lực lên hệ trục tọa độ Oxy.',
  },
  {
    fromCode: 'G8-CH2-TP1',
    toCode: 'G10-CH3-TP1',
    weight: 0.8,
    bridgeConcept: 'Cân bằng lực và cân bằng moment lực của vật rắn',
    pedagogicalReason: 'Kết hợp điều kiện cân bằng lực và cân bằng moment lực từ Lớp 8 để giải bài toán tĩnh học vật rắn Lớp 10.',
  },
  {
    fromCode: 'G10-CH2-TP2',
    toCode: 'G10-CH3-TP2',
    weight: 0.95,
    bridgeConcept: 'Gia tốc a trong Định luật II Newton: a = F_hl / m',
    pedagogicalReason: 'Định luật II Newton là cầu nối giữa Lực và Gia tốc; hổng công thức gia tốc sẽ không giải được bài toán động lực học.',
  },
  {
    fromCode: 'G10-CH3-TP1',
    toCode: 'G10-CH3-TP2',
    weight: 0.95,
    bridgeConcept: 'Hợp lực F_hl = ΣF trong phương trình Định luật II Newton',
    pedagogicalReason: 'Phải biết tổng hợp và chiếu các vectơ lực lên trục tọa độ thì mới viết được phương trình F_hl = m·a.',
  },
  {
    fromCode: 'C2-B6',
    toCode: 'G10-CH3-TP3',
    weight: 0.85,
    bridgeConcept: 'Bản chất lực ma sát → Công thức định lượng F_ms = μ·N',
    pedagogicalReason: 'Từ nhận biết định tính về lực ma sát và lực cản ở Lớp 6 tiến tới tính toán định lượng với hệ số ma sát μ và phản lực N.',
  },
  {
    fromCode: 'G8-CH1-TP3',
    toCode: 'G10-CH3-TP3',
    weight: 0.8,
    bridgeConcept: 'Lực đẩy Archimedes & Lực cản chất lưu',
    pedagogicalReason: 'Kiến thức về lực đẩy Archimedes ở Lớp 8 được tích hợp vào bài toán cân bằng lực của vật trong chất lưu ở Lớp 10.',
  },
  {
    fromCode: 'G10-CH3-TP2',
    toCode: 'G10-CH3-TP3',
    weight: 0.95,
    bridgeConcept: 'Phân tích Trọng lực, Phản lực N và Ma sát trong hệ phương trình Newton',
    pedagogicalReason: 'Áp dụng Định luật II Newton theo phương vuông góc mặt trượt để tìm phản lực N trước khi tính lực ma sát F_ms = μ·N.',
  },
  {
    fromCode: 'G10-CH2-TP1',
    toCode: 'G10-CH5-TP1',
    weight: 0.85,
    bridgeConcept: 'Vectơ vận tốc v → Vectơ động lượng p = m·v',
    pedagogicalReason: 'Động lượng là đại lượng vectơ cùng hướng với vận tốc; sai phép cộng/trừ vectơ vận tốc sẽ tính sai độ biến thiên động lượng.',
  },
  {
    fromCode: 'G10-CH3-TP2',
    toCode: 'G10-CH5-TP1',
    weight: 0.9,
    bridgeConcept: 'Dạng tổng quát Định luật II Newton: F·Δt = Δp',
    pedagogicalReason: 'Phương trình xung lượng của lực F·Δt = m·Δv được suy ra trực tiếp từ Định luật II Newton F = m·(Δv/Δt).',
  },
  {
    fromCode: 'G10-CH5-TP1',
    toCode: 'G10-CH5-TP2',
    weight: 0.95,
    bridgeConcept: 'Tổng động lượng của hệ cô lập không đổi: Σp_trước = Σp_sau',
    pedagogicalReason: 'Khi hệ kín (ngoại lực bằng 0), độ biến thiên động lượng bằng 0 dẫn tới Định luật bảo toàn động lượng.',
  },
  {
    fromCode: 'G10-CH5-TP2',
    toCode: 'G10-CH5-TP3',
    weight: 0.95,
    bridgeConcept: 'Bảo toàn động lượng trong bài toán va chạm đàn hồi & va chạm mềm',
    pedagogicalReason: 'Mọi bài toán va chạm đều bắt đầu bằng phương trình bảo toàn động lượng trước khi xét đến năng lượng.',
  },
  {
    fromCode: 'G10-CH4-TP3',
    toCode: 'G10-CH5-TP3',
    weight: 0.9,
    bridgeConcept: 'Kết hợp Bảo toàn động lượng và Bảo toàn động năng trong va chạm',
    pedagogicalReason: 'Phải nắm vững động năng và cơ năng mới phân biệt được va chạm đàn hồi (bảo toàn W_đ) và va chạm mềm (hao hụt W_đ).',
  },
  {
    fromCode: 'G10-CH2-TP2',
    toCode: 'G10-CH6-TP1',
    weight: 0.8,
    bridgeConcept: 'Mô tả động học chuyển động cong & tốc độ góc ω',
    pedagogicalReason: 'Tư duy động học chuyển động thẳng là cơ sở để chuyển sang các đại lượng góc (φ, ω, T, f) của chuyển động tròn đều.',
  },
  {
    fromCode: 'G10-CH6-TP1',
    toCode: 'G10-CH6-TP2',
    weight: 0.95,
    bridgeConcept: 'Gia tốc hướng tâm a_ht = v²/r = ω²r → Lực hướng tâm F_ht = m·a_ht',
    pedagogicalReason: 'Phải tính được tốc độ dài v và tốc độ góc ω mới xác định được gia tốc hướng tâm và lực hướng tâm.',
  },
  {
    fromCode: 'G10-CH3-TP2',
    toCode: 'G10-CH6-TP2',
    weight: 0.9,
    bridgeConcept: 'Định luật II Newton chiếu lên phương bán kính hướng vào tâm quỹ đạo',
    pedagogicalReason: 'Lực hướng tâm chính là hợp lực F_hl trong Định luật II Newton xét theo phương hướng tâm.',
  },
  {
    fromCode: 'C2-B5',
    toCode: 'G10-CH6-TP3',
    weight: 0.9,
    bridgeConcept: 'Biến dạng lò xo Lớp 6 → Định luật Hooke F_đh = k·|Δl| Lớp 10',
    pedagogicalReason: 'Kiến thức thực nghiệm về độ dãn lò xo ở Lớp 6 được nâng cấp thành công thức định lượng F_đh = k·|Δl| với hệ số độ cứng k.',
  },

  // --- TRỤ CỘT 3: NĂNG LƯỢNG, NHIỆT HỌC & KHÍ LÝ TƯỞNG (LỚP 6 -> 8 -> 9 -> 10 -> 12) ---
  {
    fromCode: 'C2-B1',
    toCode: 'C3-B1',
    weight: 0.75,
    bridgeConcept: 'Mối liên hệ giữa Năng lượng và khả năng tác dụng Lực',
    pedagogicalReason: 'Vật có năng lượng thì có khả năng tác dụng lực lên vật khác; lực và năng lượng gắn kết chặt chẽ.',
  },
  {
    fromCode: 'C3-B1',
    toCode: 'C3-B2',
    weight: 0.9,
    bridgeConcept: 'Nhận diện các dạng năng lượng → Định luật bảo toàn và chuyển hóa',
    pedagogicalReason: 'Phải nhận diện được các dạng năng lượng thành phần mới theo dõi được sự chuyển hóa và bảo toàn giữa chúng.',
  },
  {
    fromCode: 'C3-B2',
    toCode: 'C3-B3',
    weight: 0.75,
    bridgeConcept: 'Năng lượng hao phí → Tiết kiệm năng lượng & Năng lượng sạch',
    pedagogicalReason: 'Hiểu về hiệu quả chuyển hóa năng lượng giúp giải thích các giải pháp tiết kiệm và sử dụng năng lượng tái tạo.',
  },
  {
    fromCode: 'C1-B3',
    toCode: 'G8-CH4-TP1',
    weight: 0.85,
    bridgeConcept: 'Nhiệt độ gắn liền với tốc độ chuyển động nhiệt của phân tử',
    pedagogicalReason: 'Khái niệm nhiệt độ ở Lớp 6 được giải thích từ gốc rễ vi mô bằng chuyển động nhiệt phân tử và nội năng ở Lớp 8.',
  },
  {
    fromCode: 'C3-B2',
    toCode: 'G8-CH4-TP1',
    weight: 0.85,
    bridgeConcept: 'Chuyển hóa cơ năng và nhiệt năng → Nội năng của vật',
    pedagogicalReason: 'Định luật bảo toàn năng lượng giúp hiểu hai cách làm thay đổi nội năng: thực hiện công và truyền nhiệt.',
  },
  {
    fromCode: 'G8-CH4-TP1',
    toCode: 'G8-CH4-TP2',
    weight: 0.9,
    bridgeConcept: 'Sự truyền nội năng từ vật nóng sang vật lạnh (Dẫn nhiệt, Đối lưu, Bức xạ)',
    pedagogicalReason: 'Hiểu bản chất nội năng và chuyển động phân tử mới giải thích được cơ chế dẫn nhiệt, đối lưu và bức xạ nhiệt.',
  },
  {
    fromCode: 'G8-CH4-TP1',
    toCode: 'G8-CH4-TP3',
    weight: 0.85,
    bridgeConcept: 'Khoảng cách phân tử tăng khi nhiệt độ tăng → Sự nở vì nhiệt',
    pedagogicalReason: 'Khi nhiệt độ tăng, các phân tử chuyển động mạnh hơn làm khoảng cách trung bình tăng lên, gây ra sự nở vì nhiệt.',
  },
  {
    fromCode: 'C2-B1',
    toCode: 'G9-CH1-TP1',
    weight: 0.85,
    bridgeConcept: 'Lực tác dụng làm vật dịch chuyển quãng đường s → Công cơ học A = F·s',
    pedagogicalReason: 'Công cơ học chỉ xuất hiện khi có lực tác dụng vào vật và làm vật chuyển dời theo phương không vuông góc với lực.',
  },
  {
    fromCode: 'G9-CH1-TP1',
    toCode: 'G9-CH1-TP2',
    weight: 0.95,
    bridgeConcept: 'Công thực hiện trong một đơn vị thời gian → Công suất P = A / t',
    pedagogicalReason: 'Không tính đúng công cơ học A thì không thể tính đúng công suất P = A / t.',
  },
  {
    fromCode: 'C3-B2',
    toCode: 'G9-CH1-TP3',
    weight: 0.85,
    bridgeConcept: 'Chuyển hóa năng lượng → Chuyển hóa qua lại giữa Động năng và Thế năng',
    pedagogicalReason: 'Bảo toàn cơ năng là trường hợp cụ thể và định lượng của định luật bảo toàn năng lượng đã học ở Lớp 6.',
  },
  {
    fromCode: 'G9-CH1-TP1',
    toCode: 'G9-CH1-TP3',
    weight: 0.9,
    bridgeConcept: 'Liên hệ giữa Công cơ học và khả năng sinh công của Cơ năng',
    pedagogicalReason: 'Động năng và thế năng của vật được đo bằng khả năng thực hiện công cơ học của vật đó.',
  },
  {
    fromCode: 'G9-CH1-TP1',
    toCode: 'G10-CH4-TP1',
    weight: 0.9,
    bridgeConcept: 'Nâng cấp từ A = F·s (Lớp 9) lên A = F·d·cos α (Lớp 10)',
    pedagogicalReason: 'Lớp 9 chỉ xét lực cùng hướng chuyển động; lên Lớp 10 mở rộng cho lực hợp góc α bất kỳ (tạo công phát động hoặc công cản).',
  },
  {
    fromCode: 'G9-CH1-TP2',
    toCode: 'G10-CH4-TP1',
    weight: 0.85,
    bridgeConcept: 'Công suất P = A/t = F·v·cos α & Hiệu suất H',
    pedagogicalReason: 'Kế thừa khái niệm công suất Lớp 9 và kết hợp thêm hiệu suất của hệ cơ học.',
  },
  {
    fromCode: 'G10-CH3-TP2',
    toCode: 'G10-CH4-TP1',
    weight: 0.85,
    bridgeConcept: 'Xác định các lực thành phần từ Định luật Newton để tính công',
    pedagogicalReason: 'Phải phân tích đúng các lực tác dụng lên vật (F_kéo, F_ms, P, N) thì mới tính đúng công của từng lực.',
  },
  {
    fromCode: 'G9-CH1-TP3',
    toCode: 'G10-CH4-TP2',
    weight: 0.9,
    bridgeConcept: 'Công thức W_đ = ½mv², W_t = mgh → Định lý biến thiên động năng ΔW_đ = A',
    pedagogicalReason: 'Kế thừa biểu thức động năng và thế năng ở Lớp 9 để thiết lập định lý động năng giải các bài toán phức tạp ở Lớp 10.',
  },
  {
    fromCode: 'G10-CH4-TP1',
    toCode: 'G10-CH4-TP2',
    weight: 0.95,
    bridgeConcept: 'Độ biến thiên động năng bằng tổng công của ngoại lực: W_đ2 - W_đ1 = ΣA',
    pedagogicalReason: 'Nếu tính sai công của ngoại lực (đặc biệt là dấu của công trọng lực và công ma sát) sẽ áp dụng sai định lý động năng.',
  },
  {
    fromCode: 'G10-CH4-TP2',
    toCode: 'G10-CH4-TP3',
    weight: 0.95,
    bridgeConcept: 'Tổng động năng và thế năng → Định luật bảo toàn cơ năng W = const',
    pedagogicalReason: 'Bảo toàn cơ năng và bài toán biến thiên cơ năng do lực ma sát được suy ra trực tiếp từ định lý động năng.',
  },
  {
    fromCode: 'C1-B3',
    toCode: 'G12-CH1-TP1',
    weight: 0.9,
    bridgeConcept: 'Thang nhiệt độ Celsius & Kelvin: T(K) = t(°C) + 273,15',
    pedagogicalReason: 'Chuyển đổi giữa °C và K học từ Lớp 6 là thao tác bắt buộc trong mọi bài tập Vật lý Nhiệt và Khí lý tưởng Lớp 12.',
  },
  {
    fromCode: 'G8-CH4-TP1',
    toCode: 'G12-CH1-TP1',
    weight: 0.9,
    bridgeConcept: 'Cấu tạo phân tử & Chuyển động nhiệt hỗn loạn',
    pedagogicalReason: 'Mô hình động học phân tử ở Lớp 12 phát triển trực tiếp từ kiến thức cấu tạo chất và chuyển động nhiệt ở Lớp 8.',
  },
  {
    fromCode: 'G8-CH4-TP1',
    toCode: 'G12-CH1-TP2',
    weight: 0.9,
    bridgeConcept: 'Khái niệm Nội năng U & hai cách làm biến đổi nội năng',
    pedagogicalReason: 'Hiểu bản chất nội năng ở Lớp 8 là nền móng để lập biểu thức Định luật I Nhiệt động lực học ΔU = A + Q ở Lớp 12.',
  },
  {
    fromCode: 'G10-CH4-TP1',
    toCode: 'G12-CH1-TP2',
    weight: 0.9,
    bridgeConcept: 'Công cơ học A = F·d → Công của chất khí A\' = p·ΔV trong Định luật I NĐLH',
    pedagogicalReason: 'Công trong nhiệt động lực học (nén/giãn khí pít-tông) được xây dựng từ khái niệm công cơ học ở Lớp 10.',
  },
  {
    fromCode: 'G12-CH1-TP1',
    toCode: 'G12-CH1-TP2',
    weight: 0.9,
    bridgeConcept: 'Nội năng gắn với động năng và thế năng tương tác phân tử',
    pedagogicalReason: 'Hiểu mô hình phân tử giúp giải thích vì sao nội năng phụ thuộc vào cả nhiệt độ T và thể tích V.',
  },
  {
    fromCode: 'G8-CH4-TP2',
    toCode: 'G12-CH1-TP3',
    weight: 0.8,
    bridgeConcept: 'Sự truyền nhiệt giữa các vật → Phương trình cân bằng nhiệt Q_tỏa = Q_thu',
    pedagogicalReason: 'Nguyên lý truyền nhiệt từ vật nóng sang vật lạnh là cơ sở để lập phương trình cân bằng nhiệt ở Lớp 12.',
  },
  {
    fromCode: 'G12-CH1-TP2',
    toCode: 'G12-CH1-TP3',
    weight: 0.9,
    bridgeConcept: 'Nhiệt lượng Q trao đổi trong quá trình làm nóng và chuyển thể (mcΔT, λm, Lm)',
    pedagogicalReason: 'Vận dụng bảo toàn năng lượng nhiệt để giải bài toán đun nóng, nóng chảy và hóa hơi.',
  },
  {
    fromCode: 'G8-CH1-TP2',
    toCode: 'G12-CH2-TP1',
    weight: 0.95,
    bridgeConcept: 'Áp suất p = F/S (Pa) → Áp suất chất khí tác dụng lên thành bình & pít-tông',
    pedagogicalReason: 'Nhiều học sinh Lớp 12 không giải được bài toán pít-tông xi-lanh vì quên công thức áp suất p = F/S từ Lớp 8!',
  },
  {
    fromCode: 'G8-CH1-TP3',
    toCode: 'G12-CH2-TP1',
    weight: 0.9,
    bridgeConcept: 'Áp suất cột chất lỏng p = p₀ + ρgh trong bài toán bọt khí & ống thủy ngân',
    pedagogicalReason: 'Các bài toán Định luật Boyle về bọt khí dưới đáy hồ hoặc cột thủy ngân trong ống nghiệm đòi hỏi công thức p = p₀ + ρgh của Lớp 8.',
  },
  {
    fromCode: 'G12-CH1-TP1',
    toCode: 'G12-CH2-TP1',
    weight: 0.9,
    bridgeConcept: 'Mô hình động học phân tử khí → Mô hình khí lý tưởng & Định luật Boyle',
    pedagogicalReason: 'Từ đặc điểm khoảng cách phân tử khí rất lớn suy ra mô hình khí lý tưởng và quá trình đẳng nhiệt pV = const.',
  },
  {
    fromCode: 'G8-CH4-TP3',
    toCode: 'G12-CH2-TP2',
    weight: 0.8,
    bridgeConcept: 'Sự nở vì nhiệt của chất khí → Định luật Charles đẳng áp V/T = const',
    pedagogicalReason: 'Định luật Charles chính là quy luật định lượng của hiện tượng chất khí dãn nở vì nhiệt khi áp suất không đổi.',
  },
  {
    fromCode: 'G12-CH2-TP1',
    toCode: 'G12-CH2-TP2',
    weight: 0.95,
    bridgeConcept: 'Kết hợp Định luật Boyle & Charles → Phương trình trạng thái pV/T = const',
    pedagogicalReason: 'Nắm vững quá trình đẳng nhiệt và kỹ năng đọc đồ thị trạng thái khí giúp làm chủ phương trình trạng thái tổng quát.',
  },
  {
    fromCode: 'G10-CH4-TP2',
    toCode: 'G12-CH2-TP3',
    weight: 0.9,
    bridgeConcept: 'Động năng W_đ = ½mv² → Động năng tịnh tiến trung bình phân tử E_đ = (3/2)kT',
    pedagogicalReason: 'Biểu thức động năng phân tử và tốc độ căn quân phương v_rms dựa trực tiếp trên công thức động năng ½mv² của Lớp 10.',
  },
  {
    fromCode: 'G10-CH5-TP1',
    toCode: 'G12-CH2-TP3',
    weight: 0.85,
    bridgeConcept: 'Xung lượng lực khi phân tử va chạm thành bình → Công thức áp suất vi mô p = ⅓n₀mv²',
    pedagogicalReason: 'Áp suất khí theo thuyết động học phân tử được chứng minh từ độ biến thiên động lượng Δp = 2mv của phân tử khi va chạm thành bình.',
  },
  {
    fromCode: 'G12-CH2-TP2',
    toCode: 'G12-CH2-TP3',
    weight: 0.95,
    bridgeConcept: 'Liên hệ phương trình vĩ mô pV = nRT và phương trình vi mô E_đ = (3/2)kT',
    pedagogicalReason: 'Kết nối các thông số trạng thái vĩ mô (p, V, T) với các đại lượng vi mô của phân tử (mật độ n₀, động năng E_đ, hằng số Boltzmann k).',
  },

  // --- TRỤ CỘT 4: DAO ĐỘNG, SÓNG & QUANG HỌC (LỚP 7 -> 9 -> 11) ---
  {
    fromCode: 'G7-C1-B1',
    toCode: 'G7-C2-B1',
    weight: 0.8,
    bridgeConcept: 'Tốc độ truyền sóng âm v = s / t trong các môi trường',
    pedagogicalReason: 'Áp dụng công thức tốc độ chuyển động để tính tốc độ truyền âm trong không khí, nước và chất rắn.',
  },
  {
    fromCode: 'G7-C2-B1',
    toCode: 'G7-C2-B2',
    weight: 0.9,
    bridgeConcept: 'Sự dao động của nguồn âm → Biên độ A và Tần số f (Hz)',
    pedagogicalReason: 'Hiểu bản chất nguồn âm là vật dao động mới phân biệt được biên độ (độ to) và tần số (độ cao).',
  },
  {
    fromCode: 'G7-C2-B1',
    toCode: 'G7-C2-B3',
    weight: 0.85,
    bridgeConcept: 'Truyền sóng âm gặp vật cản → Phản xạ âm & Tiếng vang s = v·t / 2',
    pedagogicalReason: 'Kết hợp sự truyền sóng âm và công thức quãng đường để giải bài toán tiếng vang và sonar đo độ sâu biển.',
  },
  {
    fromCode: 'G7-C3-B1',
    toCode: 'G7-C3-B2',
    weight: 0.9,
    bridgeConcept: 'Biểu diễn tia sáng → Tia tới, tia phản xạ và góc phản xạ i\' = i',
    pedagogicalReason: 'Phải biết vẽ tia sáng và pháp tuyến mới áp dụng được định luật phản xạ ánh sáng.',
  },
  {
    fromCode: 'G7-C3-B2',
    toCode: 'G7-C3-B3',
    weight: 0.95,
    bridgeConcept: 'Áp dụng định luật phản xạ ánh sáng để dựng ảnh ảo qua gương phẳng',
    pedagogicalReason: 'Ảnh qua gương phẳng được tạo bởi giao điểm đường kéo dài của các tia phản xạ tuân theo định luật phản xạ.',
  },
  {
    fromCode: 'G7-C3-B2',
    toCode: 'G9-CH2-TP1',
    weight: 0.9,
    bridgeConcept: 'Góc tới i, pháp tuyến & mặt phân cách → Hiện tượng khúc xạ & Phản xạ toàn phần',
    pedagogicalReason: 'Kỹ năng xác định pháp tuyến và góc tới ở Lớp 7 là điều kiện tiên quyết để xét tia khúc xạ và góc giới hạn phản xạ toàn phần ở Lớp 9.',
  },
  {
    fromCode: 'G9-CH2-TP1',
    toCode: 'G9-CH2-TP2',
    weight: 0.95,
    bridgeConcept: 'Sự khúc xạ tia sáng qua hai mặt cầu → Đường truyền tia sáng qua Thấu kính',
    pedagogicalReason: 'Thấu kính hội tụ và phân kỳ hoạt động dựa trên hiện tượng khúc xạ ánh sáng tại mặt phân cách giữa thủy tinh và không khí.',
  },
  {
    fromCode: 'G9-CH2-TP2',
    toCode: 'G9-CH2-TP3',
    weight: 0.95,
    bridgeConcept: 'Thấu kính hội tụ → Thể thủy tinh của mắt & Kính lúp',
    pedagogicalReason: 'Thể thủy tinh của mắt chính là một thấu kính hội tụ có tiêu cự thay đổi được; hiểu thấu kính mới hiểu tật cận/viễn thị và kính lúp.',
  },
  {
    fromCode: 'G7-C2-B2',
    toCode: 'G11-CH1-TP1',
    weight: 0.85,
    bridgeConcept: 'Khái niệm Biên độ A và Tần số f (Hz) → Phương trình dao động điều hòa x = A·cos(ωt + φ)',
    pedagogicalReason: 'Khái niệm biên độ và tần số dao động học từ Lớp 7 là nền tảng trực tiếp để xây dựng phương trình dao động điều hòa Lớp 11.',
  },
  {
    fromCode: 'G10-CH6-TP1',
    toCode: 'G11-CH1-TP1',
    weight: 0.95,
    bridgeConcept: 'Tốc độ góc ω = 2π/T = 2πf & Mối liên hệ giữa Chuyển động tròn đều và Dao động điều hòa',
    pedagogicalReason: 'Hình chiếu của chuyển động tròn đều lên đường kính chính là dao động điều hòa; hổng kiến thức góc rad và ω ở Lớp 10 sẽ không làm được bài toán pha dao động Lớp 11!',
  },
  {
    fromCode: 'G10-CH6-TP3',
    toCode: 'G11-CH1-TP2',
    weight: 0.9,
    bridgeConcept: 'Lực đàn hồi Định luật Hooke F = k·|Δl| → Con lắc lò xo T = 2π√(m/k) & Thế năng ½kx²',
    pedagogicalReason: 'Con lắc lò xo ở Lớp 11 hoạt động dựa trên lực đàn hồi của lò xo tuân theo Định luật Hooke đã học ở Lớp 10.',
  },
  {
    fromCode: 'G10-CH4-TP3',
    toCode: 'G11-CH1-TP2',
    weight: 0.95,
    bridgeConcept: 'Bảo toàn cơ năng W = W_đ + W_t → Năng lượng dao động điều hòa W = ½kA² = ½mv_max²',
    pedagogicalReason: 'Sự chuyển hóa qua lại giữa động năng và thế năng của con lắc là ứng dụng trực tiếp của Định luật bảo toàn cơ năng Lớp 10.',
  },
  {
    fromCode: 'G11-CH1-TP1',
    toCode: 'G11-CH1-TP2',
    weight: 0.95,
    bridgeConcept: 'Từ đại lượng đặc trưng (A, ω, T, v, a) áp dụng vào Con lắc lò xo & Con lắc đơn',
    pedagogicalReason: 'Áp dụng các phương trình x, v, a của dao động điều hòa vào hai hệ vật lý cụ thể là con lắc lò xo và con lắc đơn.',
  },
  {
    fromCode: 'G11-CH1-TP2',
    toCode: 'G11-CH1-TP3',
    weight: 0.9,
    bridgeConcept: 'Tần số riêng f₀ của con lắc → Điều kiện cộng hưởng cơ f = f₀',
    pedagogicalReason: 'Phải tính được tần số dao động riêng f₀ của hệ mới xác định được khi nào xảy ra hiện tượng cộng hưởng cơ học.',
  },
  {
    fromCode: 'G11-CH1-TP1',
    toCode: 'G11-CH2-TP1',
    weight: 0.95,
    bridgeConcept: 'Dao động điều hòa lan truyền trong môi trường → Phương trình sóng u = A·cos(ωt - 2πx/λ)',
    pedagogicalReason: 'Sóng cơ chính là dao động điều hòa lan truyền theo thời gian và không gian; hổng phương trình dao động sẽ không viết được phương trình sóng.',
  },
  {
    fromCode: 'G11-CH2-TP1',
    toCode: 'G11-CH2-TP2',
    weight: 0.95,
    bridgeConcept: 'Bước sóng λ & Độ lệch pha Δφ = 2πΔd/λ → Điều kiện cực đại/cực tiểu giao thoa & Sóng dừng',
    pedagogicalReason: 'Hiểu bước sóng λ và độ lệch pha giữa hai sóng kết hợp mới suy ra được điều kiện vân cực đại (Δd = kλ) và bụng/nút sóng dừng.',
  },
  {
    fromCode: 'G11-CH2-TP1',
    toCode: 'G11-CH2-TP3',
    weight: 0.85,
    bridgeConcept: 'Công thức bước sóng λ = v/f mở rộng cho Sóng điện từ λ = c/f',
    pedagogicalReason: 'Các đặc trưng của sóng cơ (bước sóng, tần số, sóng ngang) là cơ sở để nghiên cứu sóng điện từ lan truyền với tốc độ ánh sáng c.',
  },

  // --- TRỤ CỘT 5: ĐIỆN HỌC, ĐIỆN TRƯỜNG & TỪ TRƯỜNG (LỚP 7 -> 8 -> 9 -> 11 -> 12) ---
  {
    fromCode: 'C2-B4',
    toCode: 'G7-C4-B1',
    weight: 0.75,
    bridgeConcept: 'Lực không tiếp xúc → Lực từ của nam châm',
    pedagogicalReason: 'Lực hút/đẩy của nam châm là ví dụ điển hình nhất của lực không tiếp xúc đã học ở Lớp 6.',
  },
  {
    fromCode: 'G7-C4-B1',
    toCode: 'G7-C4-B2',
    weight: 0.95,
    bridgeConcept: 'Hai cực Bắc (N) - Nam (S) → Đường sức từ (Ra Bắc - Vào Nam)',
    pedagogicalReason: 'Hiểu hai cực của nam châm và sự định hướng kim nam châm thử mới xác định được hình dạng và chiều của đường sức từ.',
  },
  {
    fromCode: 'G7-C4-B2',
    toCode: 'G7-C4-B3',
    weight: 0.9,
    bridgeConcept: 'Từ trường của dòng điện chạy qua ống dây → Nam châm điện',
    pedagogicalReason: 'Từ khái niệm từ trường xung quanh nam châm vĩnh cửu mở rộng sang từ trường sinh ra bởi dòng điện trong ống dây.',
  },
  {
    fromCode: 'C2-B4',
    toCode: 'G8-CH3-TP1',
    weight: 0.75,
    bridgeConcept: 'Lực không tiếp xúc → Lực tương tác tĩnh điện giữa hai điện tích',
    pedagogicalReason: 'Tương tác đẩy/hút giữa các vật nhiễm điện là dạng lực không tiếp xúc quan trọng.',
  },
  {
    fromCode: 'G8-CH3-TP1',
    toCode: 'G8-CH3-TP2',
    weight: 0.9,
    bridgeConcept: 'Điện tích và electron tự do → Bản chất dòng điện là dòng chuyển dời có hướng của điện tích',
    pedagogicalReason: 'Phải hiểu cấu tạo điện tích dương/âm và hạt electron mới hiểu được bản chất dòng điện trong kim loại và chiều dòng điện quy ước.',
  },
  {
    fromCode: 'G8-CH3-TP2',
    toCode: 'G8-CH3-TP3',
    weight: 0.95,
    bridgeConcept: 'Mạch điện kín → Đại lượng đặc trưng: Cường độ dòng điện I (A) và Hiệu điện thế U (V)',
    pedagogicalReason: 'Sau khi nắm được sơ đồ mạch điện đơn giản, học sinh định lượng độ mạnh yếu của dòng điện bằng I và U.',
  },
  {
    fromCode: 'G8-CH3-TP3',
    toCode: 'G9-CH3-TP1',
    weight: 0.95,
    bridgeConcept: 'Quan hệ tỉ lệ giữa I và U → Định luật Ohm I = U / R',
    pedagogicalReason: 'Nếu chưa nắm vững khái niệm và đơn vị của cường độ dòng điện I (A) và hiệu điện thế U (V) từ Lớp 8 thì không thể học được Định luật Ohm ở Lớp 9.',
  },
  {
    fromCode: 'G9-CH3-TP1',
    toCode: 'G9-CH3-TP2',
    weight: 0.95,
    bridgeConcept: 'Áp dụng Định luật Ohm I = U/R để giải mạch điện nối tiếp và song song',
    pedagogicalReason: 'Định luật Ohm cho đoạn mạch là công cụ duy nhất để suy ra công thức điện trở tương đương R_nt và R_ss.',
  },
  {
    fromCode: 'G9-CH3-TP2',
    toCode: 'G9-CH3-TP3',
    weight: 0.9,
    bridgeConcept: 'Tính I, U trên từng nhánh mạch → Tính công suất điện P = UI = I²R và nhiệt lượng Q = I²Rt',
    pedagogicalReason: 'Phải giải được I và U của từng điện trở trong mạch nối tiếp/song song mới tính được công suất tiêu thụ và nhiệt lượng tỏa ra.',
  },
  {
    fromCode: 'G9-CH1-TP2',
    toCode: 'G9-CH3-TP3',
    weight: 0.85,
    bridgeConcept: 'Công suất cơ học P = A/t (W) → Công suất điện P = A_điện / t = U·I',
    pedagogicalReason: 'Khái niệm công suất (tốc độ tiêu thụ năng lượng tính bằng Watt) được chuyển sang mạch điện.',
  },
  {
    fromCode: 'G7-C4-B2',
    toCode: 'G9-CH4-TP1',
    weight: 0.9,
    bridgeConcept: 'Đường sức từ xuyên qua tiết diện cuộn dây → Hiện tượng cảm ứng điện từ',
    pedagogicalReason: 'Phải hình dung được các đường sức từ của nam châm (học ở Lớp 7) mới hiểu được sự biến thiên số đường sức từ xuyên qua cuộn dây ở Lớp 9.',
  },
  {
    fromCode: 'G9-CH4-TP1',
    toCode: 'G9-CH4-TP2',
    weight: 0.95,
    bridgeConcept: 'Cảm ứng điện từ khi khung dây quay → Nguyên lý tạo ra dòng điện xoay chiều',
    pedagogicalReason: 'Dòng điện xoay chiều và máy phát điện xoay chiều là ứng dụng trực tiếp của hiện tượng cảm ứng điện từ.',
  },
  {
    fromCode: 'G9-CH4-TP2',
    toCode: 'G9-CH4-TP3',
    weight: 0.95,
    bridgeConcept: 'Từ trường biến thiên của dòng xoay chiều → Máy biến áp U₁/U₂ = N₁/N₂',
    pedagogicalReason: 'Máy biến áp chỉ hoạt động được với dòng điện xoay chiều nhờ hiện tượng cảm ứng điện từ giữa cuộn sơ cấp và thứ cấp.',
  },
  {
    fromCode: 'G9-CH3-TP3',
    toCode: 'G9-CH4-TP3',
    weight: 0.9,
    bridgeConcept: 'Công suất tỏa nhiệt P_hp = I²R → Công thức hao phí truyền tải ΔP = P²R / U²',
    pedagogicalReason: 'Công thức hao phí trên đường dây truyền tải điện năng được chứng minh trực tiếp từ định luật Joule - Lenz P = I²R và P = U·I.',
  },
  {
    fromCode: 'G8-CH3-TP1',
    toCode: 'G11-CH3-TP1',
    weight: 0.9,
    bridgeConcept: 'Tương tác định tính giữa hai điện tích (Lớp 8) → Định luật Coulomb F = k|q₁q₂|/r² (Lớp 11)',
    pedagogicalReason: 'Kiến thức về hai loại điện tích cùng dấu đẩy, trái dấu hút ở Lớp 8 được định lượng hóa thành Định luật Coulomb và Cường độ điện trường E ở Lớp 11.',
  },
  {
    fromCode: 'G10-CH3-TP1',
    toCode: 'G11-CH3-TP1',
    weight: 0.9,
    bridgeConcept: 'Quy tắc hình bình hành cộng vectơ lực → Nguyên lý chồng chất điện trường E = E₁ + E₂',
    pedagogicalReason: 'Bài toán tìm cường độ điện trường tổng hợp và cân bằng điện tích trong điện trường đòi hỏi kỹ năng cộng vectơ lực của Lớp 10.',
  },
  {
    fromCode: 'G11-CH3-TP1',
    toCode: 'G11-CH3-TP2',
    weight: 0.95,
    bridgeConcept: 'Lực điện F = qE → Công của lực điện A = qEd và Hiệu điện thế U = E·d',
    pedagogicalReason: 'Từ lực điện tác dụng lên điện tích trong điện trường đều suy ra công của lực điện, điện thế và hiệu điện thế.',
  },
  {
    fromCode: 'G10-CH4-TP1',
    toCode: 'G11-CH3-TP2',
    weight: 0.85,
    bridgeConcept: 'Công cơ học A = F·s·cos α → Công của lực tĩnh điện A_MN = q·E·d',
    pedagogicalReason: 'Hình chiếu d = s·cos α trong công thức A = qEd hoàn toàn tương đồng với công của trọng lực đã học ở Lớp 10.',
  },
  {
    fromCode: 'G11-CH3-TP2',
    toCode: 'G11-CH3-TP3',
    weight: 0.95,
    bridgeConcept: 'Hiệu điện thế U giữa hai bản phẳng → Điện dung tụ điện C = Q/U & Năng lượng điện trường',
    pedagogicalReason: 'Hiểu điện trường đều và hiệu điện thế U giữa hai bản kim loại mới nắm được cấu tạo, điện dung và năng lượng của tụ điện.',
  },
  {
    fromCode: 'G9-CH3-TP1',
    toCode: 'G11-CH4-TP1',
    weight: 0.9,
    bridgeConcept: 'Định luật Ohm & Điện trở dây dẫn (Lớp 9) → Bản chất vi mô I = Snve & phụ thuộc nhiệt độ (Lớp 11)',
    pedagogicalReason: 'Kiến thức nền tảng về dòng điện và điện trở ở Lớp 9 được mở rộng sâu vào vận tốc trôi của hạt mang điện và sự phụ thuộc nhiệt độ của điện trở ở Lớp 11.',
  },
  {
    fromCode: 'G9-CH3-TP2',
    toCode: 'G11-CH4-TP2',
    weight: 0.95,
    bridgeConcept: 'Giải mạch ngoài R_N (nối tiếp/song song) → Định luật Ohm cho toàn mạch I = E / (R_N + r)',
    pedagogicalReason: 'Muốn áp dụng Định luật Ohm toàn mạch ở Lớp 11, trước hết phải tính đúng điện trở tương đương mạch ngoài R_N từ kiến thức mạch nối tiếp/song song Lớp 9.',
  },
  {
    fromCode: 'G11-CH4-TP1',
    toCode: 'G11-CH4-TP2',
    weight: 0.9,
    bridgeConcept: 'Dòng điện không đổi & Điện trở → Nguồn điện có suất điện động E và điện trở trong r',
    pedagogicalReason: 'Mở rộng từ đoạn mạch tiêu thụ điện sang toàn mạch kín bao gồm cả nguồn điện.',
  },
  {
    fromCode: 'G11-CH4-TP2',
    toCode: 'G11-CH4-TP3',
    weight: 0.95,
    bridgeConcept: 'Từ I = E/(R_N + r) → Công suất nguồn P = E·I và Hiệu suất nguồn H = U_N / E',
    pedagogicalReason: 'Tính toán năng lượng, công suất nguồn điện và thiết kế mạch cầu phân áp cảm biến dựa trực tiếp trên Định luật Ohm toàn mạch.',
  },
  {
    fromCode: 'G7-C4-B2',
    toCode: 'G12-CH3-TP1',
    weight: 0.85,
    bridgeConcept: 'Đường sức từ & Từ trường (Lớp 7) → Vectơ cảm ứng từ B và Lực từ Ampère F = BIL·sin α (Lớp 12)',
    pedagogicalReason: 'Quy ước chiều đường sức từ (Ra Bắc - Vào Nam) học từ Lớp 7 là điều kiện bắt buộc để đặt đúng bàn tay trái tìm chiều lực từ ở Lớp 12.',
  },
  {
    fromCode: 'G10-CH3-TP1',
    toCode: 'G12-CH3-TP1',
    weight: 0.9,
    bridgeConcept: 'Tổng hợp lực (Trọng lực P, Lực căng dây T, Lực từ F) cho đoạn dây dẫn cân bằng trong từ trường',
    pedagogicalReason: 'Các bài toán đoạn dây dẫn treo nằm ngang cân bằng trong từ trường ở Lớp 12 đòi hỏi kỹ năng tổng hợp lực và chiếu vectơ của Lớp 10.',
  },
  {
    fromCode: 'G11-CH4-TP2',
    toCode: 'G12-CH3-TP1',
    weight: 0.85,
    bridgeConcept: 'Tính cường độ dòng điện I = E/(R + r) chạy qua thanh dẫn đặt trong từ trường',
    pedagogicalReason: 'Trong bài toán thanh dẫn đặt trên hai ray nối với nguồn điện, phải dùng Định luật Ohm toàn mạch Lớp 11 để tìm I trước khi tính lực từ F = BIL.',
  },
  {
    fromCode: 'G9-CH4-TP1',
    toCode: 'G12-CH3-TP2',
    weight: 0.9,
    bridgeConcept: 'Hiện tượng cảm ứng điện từ định tính (Lớp 9) → Định luật Faraday e_c = -ΔΦ/Δt & Định luật Lenz (Lớp 12)',
    pedagogicalReason: 'Khái niệm số đường sức từ xuyên qua cuộn dây ở Lớp 9 được định lượng hóa thành Từ thông Φ = NBS·cos α và suất điện động cảm ứng Faraday ở Lớp 12.',
  },
  {
    fromCode: 'G12-CH3-TP1',
    toCode: 'G12-CH3-TP2',
    weight: 0.95,
    bridgeConcept: 'Vectơ cảm ứng từ B → Từ thông Φ = B·S·cos α và Suất điện động cảm ứng',
    pedagogicalReason: 'Phải nắm vững vectơ cảm ứng từ B và chiều đường sức từ mới xác định được góc α và chiều dòng điện cảm ứng theo Định luật Lenz.',
  },
  {
    fromCode: 'G9-CH4-TP3',
    toCode: 'G12-CH3-TP3',
    weight: 0.85,
    bridgeConcept: 'Nguyên lý máy biến áp và bài toán truyền tải điện năng đi xa',
    pedagogicalReason: 'Kiến thức máy biến áp và hao phí truyền tải từ Lớp 9 được kết hợp với biểu thức tức thời và giá trị hiệu dụng ở Lớp 12.',
  },
  {
    fromCode: 'G11-CH1-TP1',
    toCode: 'G12-CH3-TP3',
    weight: 0.95,
    bridgeConcept: 'Hàm điều hòa x = A·cos(ωt + φ) (Lớp 11) → Điện áp & Dòng xoay chiều u = U₀cos(ωt + φ) (Lớp 12)',
    pedagogicalReason: 'Toàn bộ toán học về biên độ, tần số góc ω = 2πf, chu kỳ T và độ lệch pha Δφ của dòng điện xoay chiều Lớp 12 lấy trực tiếp từ Dao động điều hòa Lớp 11!',
  },
  {
    fromCode: 'G12-CH3-TP2',
    toCode: 'G12-CH3-TP3',
    weight: 0.95,
    bridgeConcept: 'Từ thông biến thiên Φ = Φ₀cos(ωt) → Suất điện động xoay chiều e = -Φ\' = ωΦ₀sin(ωt)',
    pedagogicalReason: 'Biểu thức suất điện động của máy phát điện xoay chiều được suy ra trực tiếp từ Định luật cảm ứng điện từ Faraday khi khung dây quay đều.',
  },

  // --- TRỤ CỘT 6: THIÊN VĂN & VẬT LÝ HẠT NHÂN - HIỆN ĐẠI ---
  {
    fromCode: 'C4-B1',
    toCode: 'C4-B2',
    weight: 0.8,
    bridgeConcept: 'Hệ quy chiếu Trái Đất - Mặt Trời → Quan sát các pha của Mặt Trăng',
    pedagogicalReason: 'Hiểu chuyển động tự quay của Trái Đất và vị trí Mặt Trời giúp giải thích chu kỳ nhìn thấy và các pha của Mặt Trăng.',
  },
  {
    fromCode: 'C4-B2',
    toCode: 'C4-B3',
    weight: 0.8,
    bridgeConcept: 'Từ hệ Trái Đất - Mặt Trăng mở rộng ra toàn bộ Hệ Mặt Trời và Ngân Hà',
    pedagogicalReason: 'Quy luật chuyển động quỹ đạo của Mặt Trăng quanh Trái Đất tương tự quy luật các hành tinh quay quanh Mặt Trời.',
  },
  {
    fromCode: 'C2-B3',
    toCode: 'C4-B3',
    weight: 0.75,
    bridgeConcept: 'Trọng lực & Lực hấp dẫn giữ các hành tinh chuyển động quanh Mặt Trời',
    pedagogicalReason: 'Lực hấp dẫn giữa Mặt Trời và các hành tinh giữ cho Hệ Mặt Trời ổn định.',
  },
  {
    fromCode: 'G8-CH3-TP1',
    toCode: 'G12-CH4-TP1',
    weight: 0.8,
    bridgeConcept: 'Mô hình nguyên tử: Hạt nhân mang điện dương (proton) và vỏ electron',
    pedagogicalReason: 'Cấu tạo nguyên tử cơ bản học từ THCS là điểm khởi đầu để đi sâu vào cấu trúc nucleon (proton, neutron) bên trong hạt nhân ở Lớp 12.',
  },
  {
    fromCode: 'G11-CH3-TP1',
    toCode: 'G12-CH4-TP1',
    weight: 0.85,
    bridgeConcept: 'Lực đẩy tĩnh điện Coulomb giữa các proton vs Lực hạt nhân (tương tác mạnh)',
    pedagogicalReason: 'Hiểu lực đẩy Coulomb rất lớn giữa các proton giúp học sinh hiểu vì sao cần có lực hạt nhân cực mạnh và năng lượng liên kết hạt nhân.',
  },
  {
    fromCode: 'G10-CH4-TP2',
    toCode: 'G12-CH4-TP1',
    weight: 0.85,
    bridgeConcept: 'Khái niệm Năng lượng & Động năng → Hệ thức Einstein E = m·c² và Năng lượng liên kết Δm·c²',
    pedagogicalReason: 'Kỹ năng đổi đơn vị năng lượng (Joule ↔ eV ↔ MeV) và khái niệm năng lượng từ Lớp 10 cần thiết để tính năng lượng liên kết hạt nhân.',
  },
  {
    fromCode: 'G10-CH5-TP2',
    toCode: 'G12-CH4-TP2',
    weight: 0.9,
    bridgeConcept: 'Định luật bảo toàn động lượng p_trước = p_sau trong bài toán phản ứng hạt nhân',
    pedagogicalReason: 'Các bài toán vận dụng phản ứng hạt nhân (tìm động năng và góc bay của hạt sinh ra) sử dụng trực tiếp Định luật bảo toàn động lượng Lớp 10!',
  },
  {
    fromCode: 'G12-CH4-TP1',
    toCode: 'G12-CH4-TP2',
    weight: 0.95,
    bridgeConcept: 'Độ hụt khối Δm và Năng lượng liên kết → Năng lượng tỏa/thu của phản ứng hạt nhân ΔE',
    pedagogicalReason: 'Năng lượng phản ứng hạt nhân ΔE = (m_trước - m_sau)c² = (Δm_sau - Δm_trước)c² dựa hoàn toàn trên kiến thức Bài 4.1.',
  },
  {
    fromCode: 'G12-CH3-TP1',
    toCode: 'G12-CH4-TP3',
    weight: 0.85,
    bridgeConcept: 'Lực từ & Lực điện làm lệch các tia phóng xạ α, β⁺, β⁻ trong điện trường và từ trường',
    pedagogicalReason: 'Để xác định chiều lệch của các tia phóng xạ α, β⁻, β⁺ trong từ trường và điện trường, phải dùng quy tắc bàn tay trái và lực Lorentz của Chương 3!',
  },
  {
    fromCode: 'G12-CH4-TP2',
    toCode: 'G12-CH4-TP3',
    weight: 0.95,
    bridgeConcept: 'Bảo toàn số khối A và điện tích Z → Viết phương trình phân rã phóng xạ α, β⁻, β⁺',
    pedagogicalReason: 'Phóng xạ là một dạng phản ứng hạt nhân tự phát, mọi quy tắc bảo toàn số khối A và điện tích Z đều áp dụng nguyên vẹn.',
  },
];

/**
 * Kiểm tra tính toàn vẹn của Đồ thị Tri thức (DAG Integrity Check):
 * - Không có cạnh nào trỏ tới mã chủ đề không tồn tại.
 * - Không có chu trình (Cycle-free 100%).
 */
export function validateKnowledgeDag(): {
  valid: boolean;
  nodeCount: number;
  edgeCount: number;
  errors: string[];
} {
  const errors: string[] = [];
  const nodeCodeList = Object.keys(KNOWLEDGE_NODE_SPECS);
  const nodeCodes = new Set(nodeCodeList);

  const adj = new Map<string, string[]>();
  for (const code of nodeCodeList) {
    adj.set(code, []);
  }

  for (const edge of KNOWLEDGE_GRAPH_EDGES) {
    if (!nodeCodes.has(edge.fromCode)) {
      errors.push(`Edge fromCode '${edge.fromCode}' does not exist in KNOWLEDGE_NODE_SPECS.`);
    }
    if (!nodeCodes.has(edge.toCode)) {
      errors.push(`Edge toCode '${edge.toCode}' does not exist in KNOWLEDGE_NODE_SPECS.`);
    }
    if (edge.fromCode === edge.toCode) {
      errors.push(`Self-loop detected on '${edge.fromCode}'.`);
    }
    if (nodeCodes.has(edge.fromCode) && nodeCodes.has(edge.toCode)) {
      adj.get(edge.fromCode)!.push(edge.toCode);
    }
  }

  // DFS 3-color cycle detection (0 = unvisited, 1 = visiting, 2 = visited)
  const color = new Map<string, number>();
  for (const code of nodeCodeList) color.set(code, 0);

  function dfs(u: string): boolean {
    color.set(u, 1);
    for (const v of adj.get(u) || []) {
      const c = color.get(v) || 0;
      if (c === 1) {
        errors.push(`Cycle detected involving edge ${u} -> ${v}`);
        return true;
      }
      if (c === 0 && dfs(v)) {
        return true;
      }
    }
    color.set(u, 2);
    return false;
  }

  for (const code of nodeCodeList) {
    if (color.get(code) === 0) {
      dfs(code);
    }
  }

  return {
    valid: errors.length === 0,
    nodeCount: nodeCodes.size,
    edgeCount: KNOWLEDGE_GRAPH_EDGES.length,
    errors,
  };
}

/**
 * Tính toán trạng thái toàn bộ các nút trên Đồ thị Tri thức dựa trên dữ liệu học tập thực tế,
 * đồng thời lan truyền rủi ro tiền đề (Topological Risk Propagation) từ các lớp dưới lên lớp trên.
 */
export function buildKnowledgeGraphState(
  runtimeTopics: TopicRuntimeInput[],
  simulatedBrokenCodes: string[] = []
): {
  nodes: KnowledgeGraphNode[];
  nodeMap: Record<string, KnowledgeGraphNode>;
  edges: KnowledgeEdgeSpec[];
} {
  const simulatedSet = new Set(simulatedBrokenCodes);
  const prereqMap = new Map<string, KnowledgeEdgeSpec[]>();
  const dependentMap = new Map<string, KnowledgeEdgeSpec[]>();

  for (const edge of KNOWLEDGE_GRAPH_EDGES) {
    if (!prereqMap.has(edge.toCode)) prereqMap.set(edge.toCode, []);
    prereqMap.get(edge.toCode)!.push(edge);

    if (!dependentMap.has(edge.fromCode)) dependentMap.set(edge.fromCode, []);
    dependentMap.get(edge.fromCode)!.push(edge);
  }

  // Bước 1: Khởi tạo điểm nắm vững trực tiếp (directMasteryScore) cho từng node
  const nodeMap: Record<string, KnowledgeGraphNode> = {};
  const sortedTopics = [...runtimeTopics].sort(
    (a, b) => a.grade_number - b.grade_number || a.order_index - b.order_index
  );

  for (const t of sortedTopics) {
    const spec = KNOWLEDGE_NODE_SPECS[t.code] || {
      code: t.code,
      pillar: 'mechanics' as PhysicsPillarId,
      coreConcepts: [t.title],
      failureSymptom: 'Chưa nắm vững kiến thức cốt lõi của chủ đề.',
    };

    const isSimulatedBroken = simulatedSet.has(t.code);
    const activeMistakes = isSimulatedBroken ? Math.max(3, t.activeMistakeCount) : t.activeMistakeCount;
    const totalWrongs = isSimulatedBroken ? Math.max(6, t.totalWrongCount) : t.totalWrongCount;

    let status: NodeHealthStatus = 'untested';
    let directMasteryScore = 50; // Mặc định trung lập khi chưa kiểm tra

    const hasActivity =
      activeMistakes > 0 || t.masteredMistakeCount > 0 || t.attemptCount > 0;

    if (hasActivity) {
      // Tính điểm dựa trên kết quả làm bài và số câu đang sai
      const baseQuizPct = t.bestScorePct !== null ? t.bestScorePct : 72;
      const mistakePenalty = activeMistakes * 14 + Math.max(0, totalWrongs - activeMistakes) * 4;
      const masteredBonus = Math.min(18, t.masteredMistakeCount * 5);

      directMasteryScore = Math.max(5, Math.min(100, Math.round(baseQuizPct - mistakePenalty + masteredBonus)));

      if (activeMistakes >= 2 || totalWrongs >= 4 || (t.bestScorePct !== null && t.bestScorePct < 50)) {
        status = 'broken';
        directMasteryScore = Math.min(directMasteryScore, 38);
      } else if (activeMistakes === 1 || (t.bestScorePct !== null && t.bestScorePct < 75)) {
        status = 'warning';
        directMasteryScore = Math.min(Math.max(directMasteryScore, 42), 68);
      } else {
        status = 'mastered';
        directMasteryScore = Math.max(directMasteryScore, 80);
      }
    }

    const prereqEdges = prereqMap.get(t.code) || [];
    const depEdges = dependentMap.get(t.code) || [];

    nodeMap[t.code] = {
      ...t,
      activeMistakeCount: activeMistakes,
      totalWrongCount: totalWrongs,
      pillar: spec.pillar,
      coreConcepts: spec.coreConcepts,
      failureSymptom: spec.failureSymptom,
      status,
      directMasteryScore,
      upstreamRiskScore: 0,
      effectiveReadiness: directMasteryScore,
      prerequisiteCodes: prereqEdges.map((e) => e.fromCode),
      dependentCodes: depEdges.map((e) => e.toCode),
    };
  }

  // Bước 2: Lan truyền rủi ro tiền đề theo thứ tự tô-pô (từ Lớp 6 -> Lớp 12)
  for (const t of sortedTopics) {
    const node = nodeMap[t.code];
    if (!node) continue;

    const incomingEdges = prereqMap.get(t.code) || [];
    if (incomingEdges.length === 0) continue;

    let maxRisk = 0;
    let weightedRiskSum = 0;
    let weightSum = 0;

    for (const edge of incomingEdges) {
      const parent = nodeMap[edge.fromCode];
      if (!parent) continue;

      let parentDeficit = 0;
      if (parent.status === 'broken') {
        parentDeficit = 100 - parent.directMasteryScore; // ~62..95
      } else if (parent.status === 'warning') {
        parentDeficit = (100 - parent.directMasteryScore) * 0.65;
      } else if (parent.upstreamRiskScore > 25) {
        parentDeficit = parent.upstreamRiskScore * 0.6;
      }

      const propagated = parentDeficit * edge.weight;
      if (propagated > maxRisk) maxRisk = propagated;
      weightedRiskSum += propagated * edge.weight;
      weightSum += edge.weight;
    }

    const avgRisk = weightSum > 0 ? weightedRiskSum / weightSum : 0;
    node.upstreamRiskScore = Math.min(100, Math.round(maxRisk * 0.7 + avgRisk * 0.3));
    node.effectiveReadiness = Math.max(
      5,
      Math.min(100, Math.round(node.directMasteryScore - node.upstreamRiskScore * 0.45))
    );
  }

  const nodes = sortedTopics.map((t) => nodeMap[t.code]).filter(Boolean);
  return {
    nodes,
    nodeMap,
    edges: KNOWLEDGE_GRAPH_EDGES,
  };
}

/**
 * THUẬT TOÁN TRUY VẾT LỖ HỔNG TIỀN ĐỀ (TOPOLOGICAL BACKTRACKING & ROOT-CAUSE DETECTOR)
 * ------------------------------------------------------------------------------------
 * Khi học sinh chọn 1 chủ đề (đặc biệt là chủ đề đang bị sai hoặc chủ đề ôn thi Lớp 12):
 * 1. Duyệt ngược (BFS/DFS Backtracking) toàn bộ các nút tiền đề ở các lớp dưới.
 * 2. Tính trọng số ảnh hưởng tích lũy (Path Criticality Weight) từ từng nút tiền đề đến chủ đề đích.
 * 3. Xác định các "Mắt xích đứt gãy gốc rễ" (Root Causes):
 *    - Ưu tiên 1: Nút tiền đề đang bị 'broken' (có lỗi sai thực tế trong Sổ tay sai).
 *    - Ưu tiên 2: Nút tiền đề đang ở mức 'warning'.
 *    - Ưu tiên 3: Nếu chủ đề đích bị sai nhưng các nút tiền đề lớp dưới chưa từng làm bài ('untested'),
 *      thuật toán khoanh vùng các nút nền tảng có trọng số liên kết cao nhất làm "Nghi vấn hổng kiến thức gốc".
 * 4. Sắp xếp tô-pô (Topological Sort) tạo lộ trình "Vá lỗ hổng từ gốc đến ngọn" ngắn nhất.
 */
export function tracePrerequisiteGaps(
  graphState: {
    nodes: KnowledgeGraphNode[];
    nodeMap: Record<string, KnowledgeGraphNode>;
    edges: KnowledgeEdgeSpec[];
  },
  targetCode: string
): PrerequisiteTraceResult | null {
  const { nodeMap, edges } = graphState;
  const targetNode = nodeMap[targetCode];
  if (!targetNode) return null;

  const incomingMap = new Map<string, KnowledgeEdgeSpec[]>();
  const outgoingMap = new Map<string, KnowledgeEdgeSpec[]>();
  for (const e of edges) {
    if (!incomingMap.has(e.toCode)) incomingMap.set(e.toCode, []);
    incomingMap.get(e.toCode)!.push(e);

    if (!outgoingMap.has(e.fromCode)) outgoingMap.set(e.fromCode, []);
    outgoingMap.get(e.fromCode)!.push(e);
  }

  // 1. Duyệt ngược tìm tất cả Ancestors (Nút tiền đề)
  const ancestorMap = new Map<string, TracedAncestorItem>();
  const subgraphEdgeSet = new Set<string>();
  const subgraphEdges: KnowledgeEdgeSpec[] = [];

  interface QueueItem {
    code: string;
    depth: number;
    pathWeight: number;
    pathCodes: string[];
  }

  const queue: QueueItem[] = [
    { code: targetCode, depth: 0, pathWeight: 1.0, pathCodes: [targetCode] },
  ];

  while (queue.length > 0) {
    const curr = queue.shift()!;
    const inEdges = incomingMap.get(curr.code) || [];

    for (const edge of inEdges) {
      const parentNode = nodeMap[edge.fromCode];
      if (!parentNode) continue;

      const edgeKey = `${edge.fromCode}->${edge.toCode}`;
      if (!subgraphEdgeSet.has(edgeKey)) {
        subgraphEdgeSet.add(edgeKey);
        subgraphEdges.push(edge);
      }

      const nextDepth = curr.depth + 1;
      const nextWeight = Number((curr.pathWeight * edge.weight).toFixed(3));
      const nextPath = [edge.fromCode, ...curr.pathCodes];

      const existing = ancestorMap.get(edge.fromCode);
      // Giữ đường đi có trọng số ảnh hưởng lớn nhất
      if (!existing || nextWeight > existing.pathWeight) {
        ancestorMap.set(edge.fromCode, {
          node: parentNode,
          depth: nextDepth,
          pathWeight: nextWeight,
          connectingEdge: edge,
          pathCodes: nextPath,
          isRootCause: false,
          rootCauseSeverity: 'foundational_unverified',
          rootCauseScore: 0,
        });
        queue.push({
          code: edge.fromCode,
          depth: nextDepth,
          pathWeight: nextWeight,
          pathCodes: nextPath,
        });
      }
    }
  }

  // 2. Duyệt xuôi tìm tất cả Descendants (Các chủ đề tương lai phụ thuộc vào targetCode)
  const descendantMap = new Map<string, TracedDescendantItem>();
  const fwdQueue: { code: string; depth: number; pathWeight: number }[] = [
    { code: targetCode, depth: 0, pathWeight: 1.0 },
  ];

  while (fwdQueue.length > 0) {
    const curr = fwdQueue.shift()!;
    const outEdges = outgoingMap.get(curr.code) || [];

    for (const edge of outEdges) {
      const childNode = nodeMap[edge.toCode];
      if (!childNode) continue;

      const edgeKey = `${edge.fromCode}->${edge.toCode}`;
      if (!subgraphEdgeSet.has(edgeKey)) {
        subgraphEdgeSet.add(edgeKey);
        subgraphEdges.push(edge);
      }

      const nextDepth = curr.depth + 1;
      const nextWeight = Number((curr.pathWeight * edge.weight).toFixed(3));
      const existing = descendantMap.get(edge.toCode);

      if (!existing || nextWeight > existing.pathWeight) {
        descendantMap.set(edge.toCode, {
          node: childNode,
          depth: nextDepth,
          pathWeight: nextWeight,
          connectingEdge: edge,
        });
        fwdQueue.push({
          code: edge.toCode,
          depth: nextDepth,
          pathWeight: nextWeight,
        });
      }
    }
  }

  // 3. Đánh giá điểm Root-Cause cho từng nút tiền đề
  const ancestors = Array.from(ancestorMap.values());
  const activeGapAncestors = ancestors.filter(
    (a) => a.node.status === 'broken' || a.node.status === 'warning'
  );

  for (const item of ancestors) {
    const st = item.node.status;
    if (st === 'broken') {
      item.rootCauseSeverity = 'critical_active_gap';
      // Ưu tiên nút bị hổng ở tầng sâu hơn (gốc rễ hơn) và có trọng số liên kết cao
      item.rootCauseScore = Math.round(
        item.pathWeight * (110 - item.node.directMasteryScore) * (1 + item.depth * 0.12)
      );
    } else if (st === 'warning') {
      item.rootCauseSeverity = 'warning_gap';
      item.rootCauseScore = Math.round(
        item.pathWeight * (90 - item.node.directMasteryScore) * (1 + item.depth * 0.08)
      );
    } else if (st === 'untested') {
      item.rootCauseSeverity = 'foundational_unverified';
      // Nếu chưa có nút tiền đề nào bị broken rõ rệt, ưu tiên các tiền đề trực tiếp/trọng số cao
      item.rootCauseScore = Math.round(item.pathWeight * 48);
    } else {
      // Đã mastered
      item.rootCauseScore = Math.round(item.pathWeight * 10);
    }
  }

  let rootCauses: TracedAncestorItem[] = [];
  if (activeGapAncestors.length > 0) {
    rootCauses = [...activeGapAncestors]
      .sort((a, b) => b.rootCauseScore - a.rootCauseScore)
      .slice(0, 3);
  } else {
    // Khi học sinh chưa làm bài ở các lớp dưới, chọn tối đa 3 tiền đề quan trọng nhất chưa được kiểm chứng
    rootCauses = [...ancestors]
      .filter((a) => a.node.status !== 'mastered')
      .sort((a, b) => b.pathWeight - a.pathWeight || a.depth - b.depth)
      .slice(0, 3);
  }

  const rootCauseCodes = new Set(rootCauses.map((r) => r.node.code));
  for (const item of ancestors) {
    if (rootCauseCodes.has(item.node.code)) {
      item.isRootCause = true;
    }
  }

  // 4. Xây dựng Lộ trình Vá lỗ hổng Tối ưu (Topological Remediation Roadmap)
  // Thu thập tất cả các nút trên đường đi từ các rootCauses tới targetNode
  const roadmapCodes = new Set<string>();
  for (const rc of rootCauses) {
    for (const c of rc.pathCodes) {
      roadmapCodes.add(c);
    }
  }
  roadmapCodes.add(targetCode);

  const orderedRoadmapNodes = Array.from(roadmapCodes)
    .map((c) => nodeMap[c])
    .filter(Boolean)
    .sort((a, b) => a.grade_number - b.grade_number || a.order_index - b.order_index);

  const remediationRoadmap: RemediationStep[] = orderedRoadmapNodes.map((n, idx) => {
    const isTarget = n.code === targetCode;
    const isRoot = rootCauseCodes.has(n.code);
    const ancInfo = ancestorMap.get(n.code);

    // Tìm cạnh nối tới bước tiếp theo trong lộ trình
    let bridgeToNext: string | null = null;
    let reason = ancInfo?.connectingEdge.pedagogicalReason || n.failureSymptom;

    for (let j = idx + 1; j < orderedRoadmapNodes.length; j++) {
      const nextNode = orderedRoadmapNodes[j];
      const directEdge = edges.find((e) => e.fromCode === n.code && e.toCode === nextNode.code);
      if (directEdge) {
        bridgeToNext = `${directEdge.bridgeConcept} (Mở khóa Lớp ${nextNode.grade_number} • ${nextNode.code})`;
        reason = directEdge.pedagogicalReason;
        break;
      }
    }

    if (isTarget) {
      reason = `Làm chủ hoàn toàn chủ đề mục tiêu sau khi đã thông suốt các mắt xích tiền đề bên dưới.`;
    }

    return {
      stepNumber: idx + 1,
      node: n,
      role: isTarget ? 'target_topic' : isRoot ? 'root_prerequisite' : 'intermediate_bridge',
      reasonToReview: reason,
      bridgeConceptToNext: bridgeToNext,
      estimatedMinutes: isTarget ? 15 : isRoot ? 10 : 8,
    };
  });

  // 5. Tổng hợp nhận định chẩn đoán sư phạm
  const sortedAncestors = [...ancestors].sort(
    (a, b) => a.depth - b.depth || b.pathWeight - a.pathWeight
  );
  const sortedDescendants = Array.from(descendantMap.values()).sort(
    (a, b) => a.depth - b.depth || b.pathWeight - a.pathWeight
  );

  let diagnosisSummary = '';
  if (activeGapAncestors.length > 0) {
    const topRoot = rootCauses[0];
    diagnosisSummary = `Phát hiện ${activeGapAncestors.length} mắt xích tiền đề đang bị hổng phía trước "${targetNode.title}". Nút thắt gốc rễ nghiêm trọng nhất nằm ở Lớp ${topRoot.node.grade_number} (${topRoot.node.code}: ${topRoot.node.title}) do thiếu vững "${topRoot.connectingEdge.bridgeConcept}". Cần xử lý từ nút gốc này trước khi luyện tiếp Lớp ${targetNode.grade_number}.`;
  } else if (ancestors.length > 0) {
    const topRoot = rootCauses[0] || sortedAncestors[0];
    diagnosisSummary = `Chủ đề "${targetNode.title}" (Lớp ${targetNode.grade_number}) được xây dựng trên ${ancestors.length} mắt xích tiền đề xuyên lớp. Nền tảng cốt lõi nhất là Lớp ${topRoot.node.grade_number} (${topRoot.node.code}: ${topRoot.node.title}) với cầu nối "${topRoot.connectingEdge.bridgeConcept}".`;
  } else {
    diagnosisSummary = `"${targetNode.title}" là bài học nền tảng mở đầu của nhánh kiến thức này và trực tiếp mở khóa ${sortedDescendants.length} bài học ở các lớp tiếp theo.`;
  }

  return {
    targetNode,
    ancestors: sortedAncestors,
    descendants: sortedDescendants,
    rootCauses,
    remediationRoadmap,
    subgraphEdges,
    diagnosisSummary,
  };
}

/**
 * Các Kịch bản Chẩn đoán Mẫu (Diagnostic Presets) giúp học sinh/giáo viên
 * kiểm nghiệm thuật toán truy vết lỗ hổng xuyên lớp 6–12 ngay lập tức.
 */
export interface DiagnosticPresetScenario {
  id: string;
  title: string;
  subtitle: string;
  targetTopicCode: string;
  simulatedBrokenCodes: string[];
  description: string;
}

export const DIAGNOSTIC_PRESET_SCENARIOS: DiagnosticPresetScenario[] = [
  {
    id: 'gas_laws_gap',
    title: 'Kịch bản 1: Học sinh Lớp 12 sai Phương trình trạng thái Khí lý tưởng',
    subtitle: 'Truy vết về Áp suất (Lớp 8) & Thang nhiệt độ Kelvin (Lớp 6)',
    targetTopicCode: 'G12-CH2-TP2',
    simulatedBrokenCodes: ['C1-B3', 'G8-CH1-TP2', 'G12-CH2-TP1', 'G12-CH2-TP2'],
    description:
      'Học sinh liên tục làm sai bài toán pít-tông xi-lanh và định luật Charles/Boyle ở Lớp 12 vì hổng công thức áp suất p = F/S (Lớp 8) và quên đổi nhiệt độ t(°C) sang T(K) = t + 273 (Lớp 6).',
  },
  {
    id: 'faraday_ac_gap',
    title: 'Kịch bản 2: Học sinh Lớp 12 lúng túng Cảm ứng điện từ & Dòng xoay chiều',
    subtitle: 'Truy vết về Đường sức từ (Lớp 7) & Dao động điều hòa (Lớp 11)',
    targetTopicCode: 'G12-CH3-TP3',
    simulatedBrokenCodes: ['G7-C4-B2', 'G11-CH1-TP1', 'G12-CH3-TP2', 'G12-CH3-TP3'],
    description:
      'Học sinh không xác định được chiều dòng điện cảm ứng và viết sai biểu thức u = U₀cos(ωt + φ) do quên quy ước đường sức từ Ra Bắc - Vào Nam (Lớp 7) và hổng hàm điều hòa (Lớp 11).',
  },
  {
    id: 'mechanical_energy_gap',
    title: 'Kịch bản 3: Học sinh Lớp 10 sai Định luật bảo toàn & biến thiên Cơ năng',
    subtitle: 'Truy vết về Lực ma sát (Lớp 6), Công cơ học (Lớp 9) & Định luật Newton',
    targetTopicCode: 'G10-CH4-TP3',
    simulatedBrokenCodes: ['C2-B6', 'G9-CH1-TP1', 'G10-CH3-TP3', 'G10-CH4-TP3'],
    description:
      'Học sinh áp dụng sai định luật bảo toàn cơ năng trên mặt phẳng nghiêng có ma sát vì không tính đúng phản lực N = mg·cos α và công cản của lực ma sát A_ms = -μmg·cos α·s.',
  },
  {
    id: 'nuclear_reaction_gap',
    title: 'Kịch bản 4: Học sinh Lớp 12 sai Phản ứng hạt nhân & Độ lệch tia phóng xạ',
    subtitle: 'Truy vết về Bảo toàn động lượng (Lớp 10) & Lực từ Lorentz (Lớp 12 C3)',
    targetTopicCode: 'G12-CH4-TP3',
    simulatedBrokenCodes: ['G10-CH5-TP2', 'G12-CH3-TP1', 'G12-CH4-TP1', 'G12-CH4-TP3'],
    description:
      'Học sinh không giải được bài toán hạt nhân phân rã bay trong từ trường do hổng Định luật bảo toàn động lượng p₁ + p₂ = 0 (Lớp 10) và quy tắc bàn tay trái tìm lực Lorentz.',
  },
];

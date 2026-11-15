// ============================================================================
// PHYSICS SI UNIT CONVERTER, FORMULA SOLVER & CODATA CONSTANTS ENGINE
// ============================================================================

export interface UnitDefinition {
  id: string;
  symbol: string;
  name: string;
  isSI?: boolean;
  /** Factor to multiply by to get SI value (for linear units: si = val * toSI) */
  toSI: number;
  factorLatex: string;
}

export interface UnitCategory {
  id: string;
  name: string;
  gradesLabel: string;
  siUnitId: string;
  siSymbol: string;
  trapWarning: string;
  units: UnitDefinition[];
}

export interface UnitConversionOutput {
  categoryId: string;
  inputValue: number;
  fromUnit: UnitDefinition;
  siValue: number;
  siSymbol: string;
  formattedSI: string;
  scientificLatex: string;
  stepLatex: string;
  trapWarning: string;
  allConversions: {
    unit: UnitDefinition;
    value: number;
    formatted: string;
  }[];
}

export const UNIT_CATEGORIES: UnitCategory[] = [
  {
    id: 'length',
    name: 'Chiều dài • Quãng đường • Bước sóng (l, s, d, λ)',
    gradesLabel: 'Lớp 6–12',
    siUnitId: 'm',
    siSymbol: 'm',
    trapWarning:
      'Bẫy kinh điển: Độ biến dạng lò xo Δl (cm), khoảng vân giao thoa i (mm) và bước sóng ánh sáng λ (μm, nm) bắt buộc phải đổi về mét (m) trước khi thay vào công thức lực đàn hồi hoặc năng lượng photon!',
    units: [
      { id: 'm', symbol: 'm', name: 'Mét (Đơn vị chuẩn SI)', isSI: true, toSI: 1, factorLatex: '1' },
      { id: 'cm', symbol: 'cm', name: 'Xen-ti-mét', toSI: 1e-2, factorLatex: '10^{-2}' },
      { id: 'mm', symbol: 'mm', name: 'Mi-li-mét', toSI: 1e-3, factorLatex: '10^{-3}' },
      { id: 'dm', symbol: 'dm', name: 'Đề-xi-mét', toSI: 1e-1, factorLatex: '10^{-1}' },
      { id: 'km', symbol: 'km', name: 'Ki-lô-mét', toSI: 1e3, factorLatex: '10^{3}' },
      { id: 'um', symbol: 'μm', name: 'Mi-crô-mét', toSI: 1e-6, factorLatex: '10^{-6}' },
      { id: 'nm', symbol: 'nm', name: 'Na-nô-mét', toSI: 1e-9, factorLatex: '10^{-9}' },
      { id: 'angstrom', symbol: 'Å', name: 'Angstrom', toSI: 1e-10, factorLatex: '10^{-10}' },
    ],
  },
  {
    id: 'area',
    name: 'Diện tích • Tiết diện dây dẫn & Vòng dây (S, A)',
    gradesLabel: 'Lớp 8–12',
    siUnitId: 'm2',
    siSymbol: 'm²',
    trapWarning:
      'Bẫy mất điểm: 1 cm² = 10⁻⁴ m² (chứ KHÔNG phải 10⁻² m²), và 1 mm² = 10⁻⁶ m² (thường gặp trong bài điện trở dây dẫn R = ρ·l/S và từ thông Φ = B·S·cosα).',
    units: [
      { id: 'm2', symbol: 'm²', name: 'Mét vuông (Chuẩn SI)', isSI: true, toSI: 1, factorLatex: '1' },
      { id: 'cm2', symbol: 'cm²', name: 'Xen-ti-mét vuông', toSI: 1e-4, factorLatex: '10^{-4}' },
      { id: 'mm2', symbol: 'mm²', name: 'Mi-li-mét vuông', toSI: 1e-6, factorLatex: '10^{-6}' },
      { id: 'dm2', symbol: 'dm²', name: 'Đề-xi-mét vuông', toSI: 1e-2, factorLatex: '10^{-2}' },
      { id: 'km2', symbol: 'km²', name: 'Ki-lô-mét vuông', toSI: 1e6, factorLatex: '10^{6}' },
    ],
  },
  {
    id: 'volume',
    name: 'Thể tích • Dung tích bình chứa (V)',
    gradesLabel: 'Lớp 6, 8, 12',
    siUnitId: 'm3',
    siSymbol: 'm³',
    trapWarning:
      'Bẫy Lực đẩy Archimedes & Khí lý tưởng: 1 Lít = 1 dm³ = 10⁻³ m³, và 1 cm³ (1 mL / 1 cc) = 10⁻⁶ m³.',
    units: [
      { id: 'm3', symbol: 'm³', name: 'Mét khối (Chuẩn SI)', isSI: true, toSI: 1, factorLatex: '1' },
      { id: 'L', symbol: 'L (dm³)', name: 'Lít / Đề-xi-mét khối', toSI: 1e-3, factorLatex: '10^{-3}' },
      { id: 'cm3', symbol: 'cm³ (mL)', name: 'Xen-ti-mét khối / Mi-li-lít', toSI: 1e-6, factorLatex: '10^{-6}' },
      { id: 'mm3', symbol: 'mm³', name: 'Mi-li-mét khối', toSI: 1e-9, factorLatex: '10^{-9}' },
    ],
  },
  {
    id: 'mass',
    name: 'Khối lượng (m)',
    gradesLabel: 'Lớp 6–12',
    siUnitId: 'kg',
    siSymbol: 'kg',
    trapWarning:
      'Lưu ý: Trong hệ SI, đơn vị cơ bản của khối lượng là ki-lô-gam (kg), KHÔNG phải gam (g)! Khi tính động năng, chu kỳ con lắc lò xo hoặc nhiệt lượng, bắt buộc đổi g → kg (chia 1000).',
    units: [
      { id: 'kg', symbol: 'kg', name: 'Ki-lô-gam (Chuẩn SI)', isSI: true, toSI: 1, factorLatex: '1' },
      { id: 'g', symbol: 'g', name: 'Gam', toSI: 1e-3, factorLatex: '10^{-3}' },
      { id: 'mg', symbol: 'mg', name: 'Mi-li-gam', toSI: 1e-6, factorLatex: '10^{-6}' },
      { id: 'ton', symbol: 'tấn', name: 'Tấn', toSI: 1e3, factorLatex: '10^{3}' },
      { id: 'amu', symbol: 'u (amu)', name: 'Đơn vị khối lượng nguyên tử', toSI: 1.660539e-27, factorLatex: '1{,}6605 \\times 10^{-27}' },
    ],
  },
  {
    id: 'velocity',
    name: 'Vận tốc • Tốc độ chuyển động (v)',
    gradesLabel: 'Lớp 7, 10, 11',
    siUnitId: 'm/s',
    siSymbol: 'm/s',
    trapWarning:
      'Mẹo nhớ siêu tốc: Đổi từ km/h sang m/s thì CHIA cho 3,6 (VD: 36 km/h = 10 m/s; 54 km/h = 15 m/s; 72 km/h = 20 m/s). Ngược lại từ m/s sang km/h thì NHÂN với 3,6.',
    units: [
      { id: 'm/s', symbol: 'm/s', name: 'Mét trên giây (Chuẩn SI)', isSI: true, toSI: 1, factorLatex: '1' },
      { id: 'km/h', symbol: 'km/h', name: 'Ki-lô-mét trên giờ', toSI: 1 / 3.6, factorLatex: '\\frac{1}{3{,}6}' },
      { id: 'cm/s', symbol: 'cm/s', name: 'Xen-ti-mét trên giây', toSI: 1e-2, factorLatex: '10^{-2}' },
      { id: 'km/s', symbol: 'km/s', name: 'Ki-lô-mét trên giây', toSI: 1e3, factorLatex: '10^{3}' },
    ],
  },
  {
    id: 'density',
    name: 'Khối lượng riêng (D, ρ)',
    gradesLabel: 'Lớp 8, 12',
    siUnitId: 'kg/m3',
    siSymbol: 'kg/m³',
    trapWarning:
      'Bẫy ngược trực giác: Đổi từ g/cm³ sang kg/m³ phải NHÂN với 1000 (chứ không phải chia 1000!). Ví dụ: Nước có D = 1 g/cm³ = 1000 kg/m³.',
    units: [
      { id: 'kg/m3', symbol: 'kg/m³', name: 'Ki-lô-gam trên mét khối (Chuẩn SI)', isSI: true, toSI: 1, factorLatex: '1' },
      { id: 'g/cm3', symbol: 'g/cm³', name: 'Gam trên xen-ti-mét khối', toSI: 1000, factorLatex: '10^{3}' },
      { id: 'kg/L', symbol: 'kg/L', name: 'Ki-lô-gam trên lít', toSI: 1000, factorLatex: '10^{3}' },
      { id: 'g/L', symbol: 'g/L', name: 'Gam trên lít', toSI: 1, factorLatex: '1' },
    ],
  },
  {
    id: 'pressure',
    name: 'Áp suất chất lỏng & Khí lý tưởng (p)',
    gradesLabel: 'Lớp 8, 12',
    siUnitId: 'Pa',
    siSymbol: 'Pa',
    trapWarning:
      'Trong phương trình Clapeyron (pV = nRT) với R = 8,31 J/(mol·K), áp suất p phải đổi về Pascal (Pa = N/m²) và thể tích V phải đổi về m³!',
    units: [
      { id: 'Pa', symbol: 'Pa (N/m²)', name: 'Pascal (Chuẩn SI)', isSI: true, toSI: 1, factorLatex: '1' },
      { id: 'kPa', symbol: 'kPa', name: 'Ki-lô-pascal', toSI: 1e3, factorLatex: '10^{3}' },
      { id: 'MPa', symbol: 'MPa', name: 'Mê-ga-pascal', toSI: 1e6, factorLatex: '10^{6}' },
      { id: 'atm', symbol: 'atm', name: 'At-mốt-phe vật lý', toSI: 101325, factorLatex: '101325' },
      { id: 'mmHg', symbol: 'mmHg (Torr)', name: 'Mi-li-mét thủy ngân', toSI: 133.322, factorLatex: '133{,}32' },
      { id: 'bar', symbol: 'bar', name: 'Bar', toSI: 1e5, factorLatex: '10^{5}' },
    ],
  },
  {
    id: 'temperature',
    name: 'Nhiệt độ tuyệt đối Kelvin & Celsius (T, t)',
    gradesLabel: 'Lớp 6, 12',
    siUnitId: 'K',
    siSymbol: 'K',
    trapWarning:
      'Bẫy số 1 Vật lý 12: Với MỐC nhiệt độ thì T(K) = t(°C) + 273,15. Nhưng với ĐỘ BIẾN THIÊN nhiệt độ thì ΔT(K) = Δt(°C) (tuyệt đối KHÔNG cộng 273 vào Δt)!',
    units: [
      { id: 'K', symbol: 'K', name: 'Kelvin — Nhiệt độ tuyệt đối (Chuẩn SI)', isSI: true, toSI: 1, factorLatex: '1' },
      { id: 'C', symbol: '°C', name: 'Độ Celsius (Mốc nhiệt độ: T = t + 273,15)', toSI: 1, factorLatex: '+ 273{,}15' },
      { id: 'F', symbol: '°F', name: 'Độ Fahrenheit', toSI: 1, factorLatex: '\\text{quy đổi nhiệt giai}' },
      { id: 'delta_C', symbol: 'Δt (°C)', name: 'Độ chênh lệch nhiệt độ Δt (ΔT = Δt)', toSI: 1, factorLatex: '1\\text{ (vì }\\Delta T(\\text{K}) = \\Delta t(^\\circ\\text{C})\\text{)}' },
    ],
  },
  {
    id: 'energy',
    name: 'Năng lượng • Công • Nhiệt lượng (W, A, Q)',
    gradesLabel: 'Lớp 8–12',
    siUnitId: 'J',
    siSymbol: 'J',
    trapWarning:
      '1 kWh (1 số điện thương mại) = 3.600.000 J = 3,6 MJ. Trong Vật lý Lượng tử & Hạt nhân: 1 eV = 1,6 × 10⁻¹⁹ J và 1 MeV = 1,6 × 10⁻¹³ J.',
    units: [
      { id: 'J', symbol: 'J', name: 'Jun (Chuẩn SI)', isSI: true, toSI: 1, factorLatex: '1' },
      { id: 'kJ', symbol: 'kJ', name: 'Ki-lô-jun', toSI: 1e3, factorLatex: '10^{3}' },
      { id: 'MJ', symbol: 'MJ', name: 'Mê-ga-jun', toSI: 1e6, factorLatex: '10^{6}' },
      { id: 'kWh', symbol: 'kWh (số điện)', name: 'Ki-lô-oát giờ', toSI: 3.6e6, factorLatex: '3{,}6 \\times 10^{6}' },
      { id: 'cal', symbol: 'cal', name: 'Ca-lo', toSI: 4.184, factorLatex: '4{,}184' },
      { id: 'kcal', symbol: 'kcal', name: 'Ki-lô-ca-lo', toSI: 4184, factorLatex: '4184' },
      { id: 'eV', symbol: 'eV', name: 'Ê-lêc-trôn-vôn', toSI: 1.6e-19, factorLatex: '1{,}6 \\times 10^{-19}' },
      { id: 'MeV', symbol: 'MeV', name: 'Mê-ga ê-lêc-trôn-vôn', toSI: 1.6e-13, factorLatex: '1{,}6 \\times 10^{-13}' },
    ],
  },
  {
    id: 'time',
    name: 'Thời gian • Chu kỳ dao động (t, T)',
    gradesLabel: 'Lớp 6–12',
    siUnitId: 's',
    siSymbol: 's',
    trapWarning:
      'Khi tính công thức điện năng A = P·t hoặc nhiệt lượng Q = I²Rt, thời gian t cho bằng phút hoặc giờ bắt buộc phải đổi ra giây (s)!',
    units: [
      { id: 's', symbol: 's', name: 'Giây (Chuẩn SI)', isSI: true, toSI: 1, factorLatex: '1' },
      { id: 'ms', symbol: 'ms', name: 'Mi-li-giây', toSI: 1e-3, factorLatex: '10^{-3}' },
      { id: 'us', symbol: 'μs', name: 'Mi-crô-giây', toSI: 1e-6, factorLatex: '10^{-6}' },
      { id: 'min', symbol: 'phút', name: 'Phút (60 giây)', toSI: 60, factorLatex: '60' },
      { id: 'h', symbol: 'giờ', name: 'Giờ (3600 giây)', toSI: 3600, factorLatex: '3600' },
    ],
  },
  {
    id: 'current',
    name: 'Cường độ dòng điện (I)',
    gradesLabel: 'Lớp 7, 9, 11, 12',
    siUnitId: 'A',
    siSymbol: 'A',
    trapWarning:
      'Đề bài mạch điện rất hay cho cường độ dòng điện tính bằng mA (10⁻³ A) hoặc μA (10⁻⁶ A). Quên đổi về Ampe (A) sẽ làm kết quả lệch 1000 lần!',
    units: [
      { id: 'A', symbol: 'A', name: 'Am-pe (Chuẩn SI)', isSI: true, toSI: 1, factorLatex: '1' },
      { id: 'mA', symbol: 'mA', name: 'Mi-li-am-pe', toSI: 1e-3, factorLatex: '10^{-3}' },
      { id: 'uA', symbol: 'μA', name: 'Mi-crô-am-pe', toSI: 1e-6, factorLatex: '10^{-6}' },
      { id: 'kA', symbol: 'kA', name: 'Ki-lô-am-pe', toSI: 1e3, factorLatex: '10^{3}' },
    ],
  },
  {
    id: 'capacitance',
    name: 'Điện dung tụ điện (C)',
    gradesLabel: 'Lớp 11',
    siUnitId: 'F',
    siSymbol: 'F',
    trapWarning:
      'Thứ tự tiếp đầu ngữ tụ điện giảm mỗi bậc 10⁻³: mF (10⁻³ F) → μF (10⁻⁶ F) → nF (10⁻⁹ F) → pF (10⁻¹² F).',
    units: [
      { id: 'F', symbol: 'F', name: 'Fa-ra (Chuẩn SI)', isSI: true, toSI: 1, factorLatex: '1' },
      { id: 'mF', symbol: 'mF', name: 'Mi-li-fa-ra', toSI: 1e-3, factorLatex: '10^{-3}' },
      { id: 'uF', symbol: 'μF', name: 'Mi-crô-fa-ra', toSI: 1e-6, factorLatex: '10^{-6}' },
      { id: 'nF', symbol: 'nF', name: 'Na-nô-fa-ra', toSI: 1e-9, factorLatex: '10^{-9}' },
      { id: 'pF', symbol: 'pF', name: 'Pi-cô-fa-ra', toSI: 1e-12, factorLatex: '10^{-12}' },
    ],
  },
];

export function formatPhysicsNumber(val: number): string {
  if (!Number.isFinite(val)) return '0';
  if (val === 0) return '0';
  const abs = Math.abs(val);
  if (abs >= 1e6 || (abs > 0 && abs < 1e-3)) {
    return val.toExponential(4).replace(/\.?0+e/, 'e');
  }
  return Number(val.toPrecision(7)).toString();
}

export function formatScientificLatex(val: number): string {
  if (!Number.isFinite(val) || val === 0) return '0';
  const abs = Math.abs(val);
  if (abs >= 0.01 && abs < 10000) {
    return Number(val.toPrecision(6)).toString().replace('.', '{,}');
  }
  const exp = Math.floor(Math.log10(abs));
  const mantissa = val / Math.pow(10, exp);
  const cleanMantissa = Number(mantissa.toPrecision(4)).toString().replace('.', '{,}');
  if (cleanMantissa === '1') return `10^{${exp}}`;
  if (cleanMantissa === '-1') return `-10^{${exp}}`;
  return `${cleanMantissa} \\times 10^{${exp}}`;
}

export function convertPhysicsUnit(
  categoryId: string,
  value: number,
  fromUnitId: string
): UnitConversionOutput {
  const category =
    UNIT_CATEGORIES.find((c) => c.id === categoryId) || UNIT_CATEGORIES[0];
  const fromUnit =
    category.units.find((u) => u.id === fromUnitId) || category.units[0];

  let siValue = 0;
  let stepLatex = '';

  if (category.id === 'temperature') {
    if (fromUnit.id === 'K' || fromUnit.id === 'delta_C') {
      siValue = value;
      stepLatex =
        fromUnit.id === 'delta_C'
          ? `\\Delta T(\\text{K}) = \\Delta t(^\\circ\\text{C}) = ${value}\\text{ K}`
          : `T = ${value}\\text{ K}`;
    } else if (fromUnit.id === 'C') {
      siValue = Number((value + 273.15).toFixed(4));
      stepLatex = `T(\\text{K}) = t(^\\circ\\text{C}) + 273{,}15 = ${value} + 273{,}15 = ${siValue.toString().replace('.', '{,}')}\\text{ K}`;
    } else if (fromUnit.id === 'F') {
      const cVal = ((value - 32) * 5) / 9;
      siValue = Number((cVal + 273.15).toFixed(4));
      stepLatex = `T(\\text{K}) = \\frac{${value} - 32}{1{,}8} + 273{,}15 = ${siValue.toString().replace('.', '{,}')}\\text{ K}`;
    }
  } else {
    siValue = value * fromUnit.toSI;
    const valStr = String(value).replace('.', '{,}');
    const resLatex = formatScientificLatex(siValue);
    if (fromUnit.isSI) {
      stepLatex = `${valStr}\\text{ ${fromUnit.symbol}} = ${resLatex}\\text{ ${category.siSymbol}}`;
    } else {
      stepLatex = `${valStr}\\text{ ${fromUnit.symbol}} = ${valStr} \\times ${fromUnit.factorLatex} = ${resLatex}\\text{ ${category.siSymbol}}`;
    }
  }

  const allConversions = category.units.map((u) => {
    let converted = 0;
    if (category.id === 'temperature') {
      if (u.id === 'K') converted = siValue;
      else if (u.id === 'C') converted = Number((siValue - 273.15).toFixed(4));
      else if (u.id === 'F')
        converted = Number((((siValue - 273.15) * 9) / 5 + 32).toFixed(4));
      else converted = fromUnit.id === 'delta_C' ? value : Number((siValue - 273.15).toFixed(4));
    } else {
      converted = siValue / u.toSI;
    }
    return {
      unit: u,
      value: converted,
      formatted: formatPhysicsNumber(converted),
    };
  });

  return {
    categoryId: category.id,
    inputValue: value,
    fromUnit,
    siValue,
    siSymbol: category.siSymbol,
    formattedSI: formatPhysicsNumber(siValue),
    scientificLatex: formatScientificLatex(siValue),
    stepLatex,
    trapWarning: category.trapWarning,
    allConversions,
  };
}

// ============================================================================
// MODULE B: INTERACTIVE MULTI-VARIABLE FORMULA SOLVER (GRADES 6–12)
// ============================================================================

export interface SolverVariableSpec {
  key: string;
  symbolLatex: string;
  name: string;
  siUnit: string;
  defaultValue: number;
}

export interface FormulaTargetSolution {
  targetKey: string;
  derivedLatex: string;
  compute: (vals: Record<string, number>) => number;
  substituteLatex: (vals: Record<string, number>) => string;
}

export interface PhysicsFormulaSolverSpec {
  id: string;
  grade: number;
  domain: string;
  title: string;
  baseFormulaLatex: string;
  description: string;
  variables: SolverVariableSpec[];
  targets: Record<string, FormulaTargetSolution>;
}

const fmt = (n: number) => Number(n.toPrecision(5)).toString().replace('.', '{,}');

export const FORMULA_SOLVERS: PhysicsFormulaSolverSpec[] = [
  {
    id: 'velocity_uniform',
    grade: 7,
    domain: 'Cơ học (Lớp 7 & 10)',
    title: 'Tốc độ & Quãng đường chuyển động (v = s / t)',
    baseFormulaLatex: 'v = \\frac{s}{t}',
    description: 'Tính tốc độ trung bình, quãng đường hoặc thời gian chuyển động.',
    variables: [
      { key: 'v', symbolLatex: 'v', name: 'Tốc độ chuyển động', siUnit: 'm/s', defaultValue: 10 },
      { key: 's', symbolLatex: 's', name: 'Quãng đường đi được', siUnit: 'm', defaultValue: 120 },
      { key: 't', symbolLatex: 't', name: 'Thời gian chuyển động', siUnit: 's', defaultValue: 12 },
    ],
    targets: {
      v: {
        targetKey: 'v',
        derivedLatex: 'v = \\frac{s}{t}',
        compute: ({ s, t }) => s / t,
        substituteLatex: ({ s, t }) => `v = \\frac{${fmt(s)}}{${fmt(t)}}`,
      },
      s: {
        targetKey: 's',
        derivedLatex: 's = v \\cdot t',
        compute: ({ v, t }) => v * t,
        substituteLatex: ({ v, t }) => `s = ${fmt(v)} \\cdot ${fmt(t)}`,
      },
      t: {
        targetKey: 't',
        derivedLatex: 't = \\frac{s}{v}',
        compute: ({ s, v }) => s / v,
        substituteLatex: ({ s, v }) => `t = \\frac{${fmt(s)}}{${fmt(v)}}`,
      },
    },
  },
  {
    id: 'density_mass',
    grade: 8,
    domain: 'Khối lượng riêng & Áp suất (Lớp 8)',
    title: 'Khối lượng riêng của một chất (D = m / V)',
    baseFormulaLatex: 'D = \\frac{m}{V}',
    description: 'Xác định khối lượng riêng, khối lượng hoặc thể tích vật đặc.',
    variables: [
      { key: 'D', symbolLatex: 'D', name: 'Khối lượng riêng', siUnit: 'kg/m³', defaultValue: 1000 },
      { key: 'm', symbolLatex: 'm', name: 'Khối lượng vật', siUnit: 'kg', defaultValue: 2.5 },
      { key: 'V', symbolLatex: 'V', name: 'Thể tích vật', siUnit: 'm³', defaultValue: 0.0025 },
    ],
    targets: {
      D: {
        targetKey: 'D',
        derivedLatex: 'D = \\frac{m}{V}',
        compute: ({ m, V }) => m / V,
        substituteLatex: ({ m, V }) => `D = \\frac{${fmt(m)}}{${fmt(V)}}`,
      },
      m: {
        targetKey: 'm',
        derivedLatex: 'm = D \\cdot V',
        compute: ({ D, V }) => D * V,
        substituteLatex: ({ D, V }) => `m = ${fmt(D)} \\cdot ${fmt(V)}`,
      },
      V: {
        targetKey: 'V',
        derivedLatex: 'V = \\frac{m}{D}',
        compute: ({ m, D }) => m / D,
        substituteLatex: ({ m, D }) => `V = \\frac{${fmt(m)}}{${fmt(D)}}`,
      },
    },
  },
  {
    id: 'archimedes_force',
    grade: 8,
    domain: 'Cơ học chất lưu (Lớp 8)',
    title: 'Lực đẩy Archimedes (F_A = d · V)',
    baseFormulaLatex: 'F_A = d \\cdot V',
    description: 'Tính độ lớn lực đẩy Archimedes, trọng lượng riêng chất lỏng hoặc thể tích phần chìm.',
    variables: [
      { key: 'FA', symbolLatex: 'F_A', name: 'Lực đẩy Archimedes', siUnit: 'N', defaultValue: 20 },
      { key: 'd', symbolLatex: 'd', name: 'Trọng lượng riêng chất lỏng', siUnit: 'N/m³', defaultValue: 10000 },
      { key: 'V', symbolLatex: 'V', name: 'Thể tích phần chất lỏng bị chiếm chỗ', siUnit: 'm³', defaultValue: 0.002 },
    ],
    targets: {
      FA: {
        targetKey: 'FA',
        derivedLatex: 'F_A = d \\cdot V',
        compute: ({ d, V }) => d * V,
        substituteLatex: ({ d, V }) => `F_A = ${fmt(d)} \\cdot ${fmt(V)}`,
      },
      d: {
        targetKey: 'd',
        derivedLatex: 'd = \\frac{F_A}{V}',
        compute: ({ FA, V }) => FA / V,
        substituteLatex: ({ FA, V }) => `d = \\frac{${fmt(FA)}}{${fmt(V)}}`,
      },
      V: {
        targetKey: 'V',
        derivedLatex: 'V = \\frac{F_A}{d}',
        compute: ({ FA, d }) => FA / d,
        substituteLatex: ({ FA, d }) => `V = \\frac{${fmt(FA)}}{${fmt(d)}}`,
      },
    },
  },
  {
    id: 'ohm_basic',
    grade: 9,
    domain: 'Điện học (Lớp 9 & 11)',
    title: 'Định luật Ôm cho đoạn mạch (I = U / R)',
    baseFormulaLatex: 'I = \\frac{U}{R}',
    description: 'Tính cường độ dòng điện, hiệu điện thế hoặc điện trở đoạn mạch.',
    variables: [
      { key: 'I', symbolLatex: 'I', name: 'Cường độ dòng điện', siUnit: 'A', defaultValue: 2 },
      { key: 'U', symbolLatex: 'U', name: 'Hiệu điện thế hai đầu đoạn mạch', siUnit: 'V', defaultValue: 12 },
      { key: 'R', symbolLatex: 'R', name: 'Điện trở đoạn mạch', siUnit: 'Ω', defaultValue: 6 },
    ],
    targets: {
      I: {
        targetKey: 'I',
        derivedLatex: 'I = \\frac{U}{R}',
        compute: ({ U, R }) => U / R,
        substituteLatex: ({ U, R }) => `I = \\frac{${fmt(U)}}{${fmt(R)}}`,
      },
      U: {
        targetKey: 'U',
        derivedLatex: 'U = I \\cdot R',
        compute: ({ I, R }) => I * R,
        substituteLatex: ({ I, R }) => `U = ${fmt(I)} \\cdot ${fmt(R)}`,
      },
      R: {
        targetKey: 'R',
        derivedLatex: 'R = \\frac{U}{I}',
        compute: ({ U, I }) => U / I,
        substituteLatex: ({ U, I }) => `R = \\frac{${fmt(U)}}{${fmt(I)}}`,
      },
    },
  },
  {
    id: 'kinetic_energy',
    grade: 9,
    domain: 'Năng lượng (Lớp 9 & 10)',
    title: 'Động năng của vật chuyển động (Wđ = ½ m·v²)',
    baseFormulaLatex: 'W_{\\text{đ}} = \\frac{1}{2} m v^2',
    description: 'Tính động năng, khối lượng hoặc tốc độ chuyển động của vật.',
    variables: [
      { key: 'Wd', symbolLatex: 'W_{\\text{đ}}', name: 'Động năng của vật', siUnit: 'J', defaultValue: 100 },
      { key: 'm', symbolLatex: 'm', name: 'Khối lượng của vật', siUnit: 'kg', defaultValue: 2 },
      { key: 'v', symbolLatex: 'v', name: 'Tốc độ của vật', siUnit: 'm/s', defaultValue: 10 },
    ],
    targets: {
      Wd: {
        targetKey: 'Wd',
        derivedLatex: 'W_{\\text{đ}} = \\frac{1}{2} m v^2',
        compute: ({ m, v }) => 0.5 * m * v * v,
        substituteLatex: ({ m, v }) => `W_{\\text{đ}} = \\frac{1}{2} \\cdot ${fmt(m)} \\cdot ${fmt(v)}^2`,
      },
      m: {
        targetKey: 'm',
        derivedLatex: 'm = \\frac{2 W_{\\text{đ}}}{v^2}',
        compute: ({ Wd, v }) => (2 * Wd) / (v * v),
        substituteLatex: ({ Wd, v }) => `m = \\frac{2 \\cdot ${fmt(Wd)}}{${fmt(v)}^2}`,
      },
      v: {
        targetKey: 'v',
        derivedLatex: 'v = \\sqrt{\\frac{2 W_{\\text{đ}}}{m}}',
        compute: ({ Wd, m }) => Math.sqrt((2 * Wd) / m),
        substituteLatex: ({ Wd, m }) => `v = \\sqrt{\\frac{2 \\cdot ${fmt(Wd)}}{${fmt(m)}}}`,
      },
    },
  },
  {
    id: 'newton_second_law',
    grade: 10,
    domain: 'Động lực học (Lớp 10)',
    title: 'Định luật II Newton (F = m · a)',
    baseFormulaLatex: 'F = m \\cdot a',
    description: 'Tính hợp lực tác dụng, khối lượng hoặc gia tốc của vật.',
    variables: [
      { key: 'F', symbolLatex: 'F', name: 'Độ lớn hợp lực tác dụng', siUnit: 'N', defaultValue: 15 },
      { key: 'm', symbolLatex: 'm', name: 'Khối lượng của vật', siUnit: 'kg', defaultValue: 3 },
      { key: 'a', symbolLatex: 'a', name: 'Gia tốc của vật', siUnit: 'm/s²', defaultValue: 5 },
    ],
    targets: {
      F: {
        targetKey: 'F',
        derivedLatex: 'F = m \\cdot a',
        compute: ({ m, a }) => m * a,
        substituteLatex: ({ m, a }) => `F = ${fmt(m)} \\cdot ${fmt(a)}`,
      },
      m: {
        targetKey: 'm',
        derivedLatex: 'm = \\frac{F}{a}',
        compute: ({ F, a }) => F / a,
        substituteLatex: ({ F, a }) => `m = \\frac{${fmt(F)}}{${fmt(a)}}`,
      },
      a: {
        targetKey: 'a',
        derivedLatex: 'a = \\frac{F}{m}',
        compute: ({ F, m }) => F / m,
        substituteLatex: ({ F, m }) => `a = \\frac{${fmt(F)}}{${fmt(m)}}`,
      },
    },
  },
  {
    id: 'spring_period',
    grade: 11,
    domain: 'Dao động điều hòa (Lớp 11)',
    title: 'Chu kỳ dao động con lắc lò xo (T = 2π√(m/k))',
    baseFormulaLatex: 'T = 2\\pi \\sqrt{\\frac{m}{k}}',
    description: 'Tính chu kỳ T, khối lượng vật nặng m hoặc độ cứng lò xo k.',
    variables: [
      { key: 'T', symbolLatex: 'T', name: 'Chu kỳ dao động', siUnit: 's', defaultValue: 0.6283 },
      { key: 'm', symbolLatex: 'm', name: 'Khối lượng quả nặng', siUnit: 'kg', defaultValue: 0.4 },
      { key: 'k', symbolLatex: 'k', name: 'Độ cứng lò xo', siUnit: 'N/m', defaultValue: 40 },
    ],
    targets: {
      T: {
        targetKey: 'T',
        derivedLatex: 'T = 2\\pi \\sqrt{\\frac{m}{k}}',
        compute: ({ m, k }) => 2 * Math.PI * Math.sqrt(m / k),
        substituteLatex: ({ m, k }) => `T = 2\\pi \\sqrt{\\frac{${fmt(m)}}{${fmt(k)}}}`,
      },
      m: {
        targetKey: 'm',
        derivedLatex: 'm = \\frac{k \\cdot T^2}{4\\pi^2}',
        compute: ({ k, T }) => (k * T * T) / (4 * Math.PI * Math.PI),
        substituteLatex: ({ k, T }) => `m = \\frac{${fmt(k)} \\cdot ${fmt(T)}^2}{4\\pi^2}`,
      },
      k: {
        targetKey: 'k',
        derivedLatex: 'k = \\frac{4\\pi^2 \\cdot m}{T^2}',
        compute: ({ m, T }) => (4 * Math.PI * Math.PI * m) / (T * T),
        substituteLatex: ({ m, T }) => `k = \\frac{4\\pi^2 \\cdot ${fmt(m)}}{${fmt(T)}^2}`,
      },
    },
  },
  {
    id: 'wave_wavelength',
    grade: 11,
    domain: 'Sóng cơ & Sóng điện từ (Lớp 11)',
    title: 'Bước sóng, tốc độ truyền sóng & tần số (λ = v / f)',
    baseFormulaLatex: '\\lambda = \\frac{v}{f}',
    description: 'Tính bước sóng λ, tốc độ truyền sóng v hoặc tần số sóng f.',
    variables: [
      { key: 'lambda', symbolLatex: '\\lambda', name: 'Bước sóng', siUnit: 'm', defaultValue: 0.5 },
      { key: 'v', symbolLatex: 'v', name: 'Tốc độ truyền sóng', siUnit: 'm/s', defaultValue: 20 },
      { key: 'f', symbolLatex: 'f', name: 'Tần số sóng', siUnit: 'Hz', defaultValue: 40 },
    ],
    targets: {
      lambda: {
        targetKey: 'lambda',
        derivedLatex: '\\lambda = \\frac{v}{f}',
        compute: ({ v, f }) => v / f,
        substituteLatex: ({ v, f }) => `\\lambda = \\frac{${fmt(v)}}{${fmt(f)}}`,
      },
      v: {
        targetKey: 'v',
        derivedLatex: 'v = \\lambda \\cdot f',
        compute: ({ lambda, f }) => lambda * f,
        substituteLatex: ({ lambda, f }) => `v = ${fmt(lambda)} \\cdot ${fmt(f)}`,
      },
      f: {
        targetKey: 'f',
        derivedLatex: 'f = \\frac{v}{\\lambda}',
        compute: ({ v, lambda }) => v / lambda,
        substituteLatex: ({ v, lambda }) => `f = \\frac{${fmt(v)}}{${fmt(lambda)}}`,
      },
    },
  },
  {
    id: 'ohm_full_circuit',
    grade: 11,
    domain: 'Dòng điện không đổi (Lớp 11)',
    title: 'Định luật Ôm cho toàn mạch (I = E / (R + r))',
    baseFormulaLatex: 'I = \\frac{\\mathcal{E}}{R + r}',
    description: 'Tính cường độ dòng điện, suất điện động nguồn E hoặc điện trở mạch ngoài R.',
    variables: [
      { key: 'I', symbolLatex: 'I', name: 'Cường độ dòng điện toàn mạch', siUnit: 'A', defaultValue: 2 },
      { key: 'E', symbolLatex: '\\mathcal{E}', name: 'Suất điện động của nguồn', siUnit: 'V', defaultValue: 12 },
      { key: 'R', symbolLatex: 'R', name: 'Điện trở tương đương mạch ngoài', siUnit: 'Ω', defaultValue: 5 },
      { key: 'r', symbolLatex: 'r', name: 'Điện trở trong của nguồn', siUnit: 'Ω', defaultValue: 1 },
    ],
    targets: {
      I: {
        targetKey: 'I',
        derivedLatex: 'I = \\frac{\\mathcal{E}}{R + r}',
        compute: ({ E, R, r }) => E / (R + r),
        substituteLatex: ({ E, R, r }) => `I = \\frac{${fmt(E)}}{${fmt(R)} + ${fmt(r)}}`,
      },
      E: {
        targetKey: 'E',
        derivedLatex: '\\mathcal{E} = I \\cdot (R + r)',
        compute: ({ I, R, r }) => I * (R + r),
        substituteLatex: ({ I, R, r }) => `\\mathcal{E} = ${fmt(I)} \\cdot (${fmt(R)} + ${fmt(r)})`,
      },
      R: {
        targetKey: 'R',
        derivedLatex: 'R = \\frac{\\mathcal{E}}{I} - r',
        compute: ({ E, I, r }) => E / I - r,
        substituteLatex: ({ E, I, r }) => `R = \\frac{${fmt(E)}}{${fmt(I)}} - ${fmt(r)}`,
      },
      r: {
        targetKey: 'r',
        derivedLatex: 'r = \\frac{\\mathcal{E}}{I} - R',
        compute: ({ E, I, R }) => E / I - R,
        substituteLatex: ({ E, I, R }) => `r = \\frac{${fmt(E)}}{${fmt(I)}} - ${fmt(R)}`,
      },
    },
  },
  {
    id: 'calorimetry_heat',
    grade: 12,
    domain: 'Vật lý Nhiệt (Lớp 12)',
    title: 'Nhiệt lượng thu vào / tỏa ra (Q = m · c · Δt)',
    baseFormulaLatex: 'Q = m \\cdot c \\cdot \\Delta t',
    description: 'Tính nhiệt lượng Q, khối lượng m, nhiệt dung riêng c hoặc độ tăng nhiệt độ Δt.',
    variables: [
      { key: 'Q', symbolLatex: 'Q', name: 'Nhiệt lượng trao đổi', siUnit: 'J', defaultValue: 336000 },
      { key: 'm', symbolLatex: 'm', name: 'Khối lượng chất', siUnit: 'kg', defaultValue: 1 },
      { key: 'c', symbolLatex: 'c', name: 'Nhiệt dung riêng', siUnit: 'J/(kg·K)', defaultValue: 4200 },
      { key: 'dt', symbolLatex: '\\Delta t', name: 'Độ biến thiên nhiệt độ', siUnit: 'K (hoặc °C)', defaultValue: 80 },
    ],
    targets: {
      Q: {
        targetKey: 'Q',
        derivedLatex: 'Q = m \\cdot c \\cdot \\Delta t',
        compute: ({ m, c, dt }) => m * c * dt,
        substituteLatex: ({ m, c, dt }) => `Q = ${fmt(m)} \\cdot ${fmt(c)} \\cdot ${fmt(dt)}`,
      },
      m: {
        targetKey: 'm',
        derivedLatex: 'm = \\frac{Q}{c \\cdot \\Delta t}',
        compute: ({ Q, c, dt }) => Q / (c * dt),
        substituteLatex: ({ Q, c, dt }) => `m = \\frac{${fmt(Q)}}{${fmt(c)} \\cdot ${fmt(dt)}}`,
      },
      c: {
        targetKey: 'c',
        derivedLatex: 'c = \\frac{Q}{m \\cdot \\Delta t}',
        compute: ({ Q, m, dt }) => Q / (m * dt),
        substituteLatex: ({ Q, m, dt }) => `c = \\frac{${fmt(Q)}}{${fmt(m)} \\cdot ${fmt(dt)}}`,
      },
      dt: {
        targetKey: 'dt',
        derivedLatex: '\\Delta t = \\frac{Q}{m \\cdot c}',
        compute: ({ Q, m, c }) => Q / (m * c),
        substituteLatex: ({ Q, m, c }) => `\\Delta t = \\frac{${fmt(Q)}}{${fmt(m)} \\cdot ${fmt(c)}}`,
      },
    },
  },
  {
    id: 'ideal_gas_clapeyron',
    grade: 12,
    domain: 'Khí lý tưởng (Lớp 12)',
    title: 'Phương trình Clapeyron (p · V = n · R · T)',
    baseFormulaLatex: 'p \\cdot V = n \\cdot R \\cdot T \\quad (R = 8{,}31\\text{ J/mol}\\cdot\\text{K})',
    description: 'Tính áp suất p (Pa), thể tích V (m³), số mol n hoặc nhiệt độ tuyệt đối T (K).',
    variables: [
      { key: 'p', symbolLatex: 'p', name: 'Áp suất chất khí', siUnit: 'Pa', defaultValue: 100000 },
      { key: 'V', symbolLatex: 'V', name: 'Thể tích bình chứa', siUnit: 'm³', defaultValue: 0.02493 },
      { key: 'n', symbolLatex: 'n', name: 'Số mol khí', siUnit: 'mol', defaultValue: 1 },
      { key: 'T', symbolLatex: 'T', name: 'Nhiệt độ tuyệt đối', siUnit: 'K', defaultValue: 300 },
    ],
    targets: {
      p: {
        targetKey: 'p',
        derivedLatex: 'p = \\frac{n \\cdot R \\cdot T}{V}',
        compute: ({ n, T, V }) => (n * 8.31 * T) / V,
        substituteLatex: ({ n, T, V }) => `p = \\frac{${fmt(n)} \\cdot 8{,}31 \\cdot ${fmt(T)}}{${fmt(V)}}`,
      },
      V: {
        targetKey: 'V',
        derivedLatex: 'V = \\frac{n \\cdot R \\cdot T}{p}',
        compute: ({ n, T, p }) => (n * 8.31 * T) / p,
        substituteLatex: ({ n, T, p }) => `V = \\frac{${fmt(n)} \\cdot 8{,}31 \\cdot ${fmt(T)}}{${fmt(p)}}`,
      },
      n: {
        targetKey: 'n',
        derivedLatex: 'n = \\frac{p \\cdot V}{R \\cdot T}',
        compute: ({ p, V, T }) => (p * V) / (8.31 * T),
        substituteLatex: ({ p, V, T }) => `n = \\frac{${fmt(p)} \\cdot ${fmt(V)}}{8{,}31 \\cdot ${fmt(T)}}`,
      },
      T: {
        targetKey: 'T',
        derivedLatex: 'T = \\frac{p \\cdot V}{n \\cdot R}',
        compute: ({ p, V, n }) => (p * V) / (n * 8.31),
        substituteLatex: ({ p, V, n }) => `T = \\frac{${fmt(p)} \\cdot ${fmt(V)}}{${fmt(n)} \\cdot 8{,}31}`,
      },
    },
  },
  {
    id: 'magnetic_force_bil',
    grade: 12,
    domain: 'Từ trường (Lớp 12)',
    title: 'Lực từ tác dụng lên đoạn dây dẫn (F = B · I · L)',
    baseFormulaLatex: 'F = B \\cdot I \\cdot L \\quad (\\alpha = 90^\\circ)',
    description: 'Tính lực từ F, cảm ứng từ B, cường độ dòng điện I hoặc chiều dài dây L.',
    variables: [
      { key: 'F', symbolLatex: 'F', name: 'Độ lớn lực từ', siUnit: 'N', defaultValue: 0.4 },
      { key: 'B', symbolLatex: 'B', name: 'Cảm ứng từ', siUnit: 'T', defaultValue: 0.5 },
      { key: 'I', symbolLatex: 'I', name: 'Cường độ dòng điện', siUnit: 'A', defaultValue: 4 },
      { key: 'L', symbolLatex: 'L', name: 'Chiều dài đoạn dây trong từ trường', siUnit: 'm', defaultValue: 0.2 },
    ],
    targets: {
      F: {
        targetKey: 'F',
        derivedLatex: 'F = B \\cdot I \\cdot L',
        compute: ({ B, I, L }) => B * I * L,
        substituteLatex: ({ B, I, L }) => `F = ${fmt(B)} \\cdot ${fmt(I)} \\cdot ${fmt(L)}`,
      },
      B: {
        targetKey: 'B',
        derivedLatex: 'B = \\frac{F}{I \\cdot L}',
        compute: ({ F, I, L }) => F / (I * L),
        substituteLatex: ({ F, I, L }) => `B = \\frac{${fmt(F)}}{${fmt(I)} \\cdot ${fmt(L)}}`,
      },
      I: {
        targetKey: 'I',
        derivedLatex: 'I = \\frac{F}{B \\cdot L}',
        compute: ({ F, B, L }) => F / (B * L),
        substituteLatex: ({ F, B, L }) => `I = \\frac{${fmt(F)}}{${fmt(B)} \\cdot ${fmt(L)}}`,
      },
      L: {
        targetKey: 'L',
        derivedLatex: 'L = \\frac{F}{B \\cdot I}',
        compute: ({ F, B, I }) => F / (B * I),
        substituteLatex: ({ F, B, I }) => `L = \\frac{${fmt(F)}}{${fmt(B)} \\cdot ${fmt(I)}}`,
      },
    },
  },
];

// ============================================================================
// MODULE C: CODATA CONSTANTS & SI PREFIXES
// ============================================================================

export interface PhysicsConstantItem {
  symbolLatex: string;
  name: string;
  valueText: string;
  copyValue: string;
  siUnit: string;
  gradeNote: string;
}

export const CODATA_CONSTANTS: PhysicsConstantItem[] = [
  {
    symbolLatex: 'g',
    name: 'Gia tốc rơi tự do tiêu chuẩn',
    valueText: '9,8 m/s² (hoặc 10 m/s²)',
    copyValue: '9.8',
    siUnit: 'm/s²',
    gradeNote: 'Lớp 6–12 • Cơ học',
  },
  {
    symbolLatex: 'c',
    name: 'Tốc độ ánh sáng trong chân không',
    valueText: '3 × 10⁸',
    copyValue: '3e8',
    siUnit: 'm/s',
    gradeNote: 'Lớp 7, 11, 12 • Quang & Hạt nhân',
  },
  {
    symbolLatex: 'R',
    name: 'Hằng số khí lý tưởng',
    valueText: '8,31',
    copyValue: '8.31',
    siUnit: 'J/(mol·K)',
    gradeNote: 'Lớp 12 • Khí lý tưởng',
  },
  {
    symbolLatex: 'N_A',
    name: 'Hằng số Avogadro',
    valueText: '6,022 × 10²³',
    copyValue: '6.022e23',
    siUnit: 'mol⁻¹',
    gradeNote: 'Lớp 8, 12 • Nhiệt & Hạt nhân',
  },
  {
    symbolLatex: 'k_B',
    name: 'Hằng số Boltzmann',
    valueText: '1,38 × 10⁻²³',
    copyValue: '1.38e-23',
    siUnit: 'J/K',
    gradeNote: 'Lớp 12 • Động học phân tử khí',
  },
  {
    symbolLatex: 'k',
    name: 'Hằng số tĩnh điện Coulomb',
    valueText: '9 × 10⁹',
    copyValue: '9e9',
    siUnit: 'N·m²/C²',
    gradeNote: 'Lớp 11 • Điện trường',
  },
  {
    symbolLatex: 'e',
    name: 'Điện tích nguyên tố',
    valueText: '1,6 × 10⁻¹⁹',
    copyValue: '1.6e-19',
    siUnit: 'C',
    gradeNote: 'Lớp 11, 12 • Điện & Hạt nhân',
  },
  {
    symbolLatex: 'h',
    name: 'Hằng số Planck',
    valueText: '6,626 × 10⁻³⁴',
    copyValue: '6.626e-34',
    siUnit: 'J·s',
    gradeNote: 'Lớp 12 • Lượng tử & Hạt nhân',
  },
  {
    symbolLatex: 'G',
    name: 'Hằng số hấp dẫn vũ trụ',
    valueText: '6,67 × 10⁻¹¹',
    copyValue: '6.67e-11',
    siUnit: 'N·m²/kg²',
    gradeNote: 'Lớp 10 • Vạn vật hấp dẫn',
  },
  {
    symbolLatex: 'm_e',
    name: 'Khối lượng hạt electron',
    valueText: '9,1 × 10⁻³¹',
    copyValue: '9.1e-31',
    siUnit: 'kg',
    gradeNote: 'Lớp 11, 12 • Điện & Nguyên tử',
  },
  {
    symbolLatex: 'm_p',
    name: 'Khối lượng hạt proton',
    valueText: '1,6726 × 10⁻²⁷',
    copyValue: '1.6726e-27',
    siUnit: 'kg',
    gradeNote: 'Lớp 12 • Vật lý Hạt nhân',
  },
  {
    symbolLatex: '1\\text{ u}',
    name: 'Đơn vị khối lượng nguyên tử (amu)',
    valueText: '931,5 MeV/c² (1,6605 × 10⁻²⁷ kg)',
    copyValue: '931.5',
    siUnit: 'MeV/c²',
    gradeNote: 'Lớp 12 • Năng lượng liên kết hạt nhân',
  },
];

export const SI_PREFIXES = [
  { prefix: 'Tera', symbol: 'T', powerLatex: '10^{12}', factor: '1.000.000.000.000', example: 'TJ, THz' },
  { prefix: 'Giga', symbol: 'G', powerLatex: '10^{9}', factor: '1.000.000.000', example: 'GHz, GW' },
  { prefix: 'Mega', symbol: 'M', powerLatex: '10^{6}', factor: '1.000.000', example: 'MJ, MPa, MeV, MHz' },
  { prefix: 'Kilo', symbol: 'k', powerLatex: '10^{3}', factor: '1.000', example: 'km, kg, kJ, kPa, kW' },
  { prefix: 'Đề-xi', symbol: 'd', powerLatex: '10^{-1}', factor: '0,1', example: 'dm, dm³ (Lít)' },
  { prefix: 'Xen-ti', symbol: 'c', powerLatex: '10^{-2}', factor: '0,01', example: 'cm, cm², cm³' },
  { prefix: 'Mi-li', symbol: 'm', powerLatex: '10^{-3}', factor: '0,001', example: 'mm, mg, ms, mA, mJ' },
  { prefix: 'Mi-crô', symbol: 'μ', powerLatex: '10^{-6}', factor: '0,000001', example: 'μm, μA, μF, μC' },
  { prefix: 'Na-nô', symbol: 'n', powerLatex: '10^{-9}', factor: '10⁻⁹', example: 'nm, nF, nC' },
  { prefix: 'Pi-cô', symbol: 'p', powerLatex: '10^{-12}', factor: '10⁻¹²', example: 'pF, pm' },
];

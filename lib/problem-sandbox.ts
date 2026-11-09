/**
 * ============================================================================
 * INTERACTIVE PROBLEM-TO-SIM SANDBOX ENGINE (GRADES 6 - 12)
 * ============================================================================
 * Bridges Physics Exam Questions & Worked Examples with Real-Time Interactive
 * Simulations and Dynamic Graphs:
 *   1. Automatic Physics Parameter Extraction from Vietnamese/LaTeX problem text
 *   2. Domain-Specific "What-If" Interactive Sliders
 *   3. Real-Time Formula & Derived Quantity Verification Telemetry
 */

export interface ExtractedPhysicsParam {
  paramKey: string;
  symbol: string;
  label: string;
  value: number;
  unit: string;
  fromQuestionText: boolean;
}

export interface SandboxSliderSpec {
  paramKey: string;
  symbol: string;
  label: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
}

export interface LiveSandboxMetric {
  symbol: string;
  label: string;
  formula: string;
  value: string;
  unit: string;
  highlightColor: string;
}

export interface ProblemSandboxExtractionResult {
  domainName: string;
  extractedList: ExtractedPhysicsParam[];
  simParameters: Record<string, number>;
  sliders: SandboxSliderSpec[];
  liveMetrics: LiveSandboxMetric[];
  verificationInsight: string;
}

function parseVnNumber(raw: string): number | null {
  const cleaned = raw.trim().replace(',', '.');
  const val = Number(cleaned);
  return Number.isFinite(val) ? val : null;
}

function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

/**
 * Determine the physics domain family from simKey
 */
export type SandboxDomainType =
  | 'shm_wave'
  | 'kinematics'
  | 'newton_dynamics'
  | 'work_energy'
  | 'fluid_pressure'
  | 'optics'
  | 'thermal'
  | 'ideal_gas'
  | 'electric_circuit'
  | 'electromagnetic'
  | 'nuclear'
  | 'hooke_spring';

export function classifySimDomain(simKey: string): SandboxDomainType {
  const k = (simKey || '').toLowerCase();
  if (
    k.includes('shm') ||
    k.includes('harmonic') ||
    k.includes('oscillator') ||
    k.includes('pendulum') ||
    k.includes('resonance') ||
    k.includes('mechanical_waves') ||
    k.includes('interference_standing_wave') ||
    k.includes('sound_wave_echo')
  ) {
    return 'shm_wave';
  }
  if (
    k.includes('displacement_velocity') ||
    k.includes('accelerated_motion') ||
    k.includes('projectile_motion') ||
    k.includes('speed_graph') ||
    k.includes('kinematic') ||
    k.includes('gravity_weight') ||
    k.includes('circular_motion') ||
    k.includes('centripetal')
  ) {
    return 'kinematics';
  }
  if (
    k.includes('newton') ||
    k.includes('vector_forces') ||
    k.includes('friction') ||
    k.includes('force_effects') ||
    k.includes('force_vector') ||
    k.includes('impulse_momentum') ||
    k.includes('collision') ||
    k.includes('rocket')
  ) {
    return 'newton_dynamics';
  }
  if (
    k.includes('work') ||
    k.includes('power') ||
    k.includes('energy_forms_skate') ||
    k.includes('energy_efficiency') ||
    k.includes('renewable_energy') ||
    k.includes('kinetic_potential') ||
    k.includes('conservation_energy') ||
    k.includes('rollercoaster')
  ) {
    return 'work_energy';
  }
  if (
    k.includes('pressure') ||
    k.includes('density') ||
    k.includes('buoyancy') ||
    k.includes('archimedes') ||
    k.includes('torque') ||
    k.includes('lever') ||
    k.includes('crane') ||
    k.includes('length_volume') ||
    k.includes('mass_time')
  ) {
    return 'fluid_pressure';
  }
  if (
    k.includes('lens') ||
    k.includes('refraction') ||
    k.includes('tir') ||
    k.includes('magnifier') ||
    k.includes('mirror') ||
    k.includes('reflection') ||
    k.includes('optics') ||
    k.includes('em_spectrum')
  ) {
    return 'optics';
  }
  if (
    k.includes('gas') ||
    k.includes('boyle') ||
    k.includes('ideal_gas') ||
    k.includes('isotherm') ||
    k.includes('kinetic_gas') ||
    k.includes('pv_cycle')
  ) {
    return 'ideal_gas';
  }
  if (
    k.includes('circuit') ||
    k.includes('ohm') ||
    k.includes('resistor') ||
    k.includes('current_voltage') ||
    k.includes('joule_heating') ||
    k.includes('drift_velocity') ||
    k.includes('sensor_power') ||
    k.includes('capacitor') ||
    k.includes('potential_equipotential') ||
    k.includes('coulomb_efield') ||
    k.includes('electrostatics')
  ) {
    return 'electric_circuit';
  }
  if (
    k.includes('induction') ||
    k.includes('faraday') ||
    k.includes('generator') ||
    k.includes('transformer') ||
    k.includes('magnet') ||
    k.includes('ampere')
  ) {
    return 'electromagnetic';
  }
  if (
    k.includes('nuclear') ||
    k.includes('radioactive') ||
    k.includes('decay') ||
    k.includes('halflife')
  ) {
    return 'nuclear';
  }
  if (k.includes('hooke') || k.includes('spring')) {
    return 'hooke_spring';
  }
  return 'thermal';
}

/**
 * Scan Vietnamese & LaTeX physics problem text to extract numerical quantities
 */
export function extractRawQuantitiesFromText(text: string): Record<string, { value: number; matched: boolean }> {
  const found: Record<string, { value: number; matched: boolean }> = {};
  const clean = text.replace(/\\text\{([^}]*)\}/g, '$1').replace(/\\,/g, ' ');

  // 1. Mass m (kg or g)
  const kgMatch = clean.match(/(\d+(?:[.,]\d+)?)\s*kg\b/i);
  const gMatch = clean.match(/(?:m\s*=\s*|khối lượng\s+)(\d+(?:[.,]\d+)?)\s*g\b/i);
  if (kgMatch) {
    const v = parseVnNumber(kgMatch[1]);
    if (v !== null && v > 0) found.mass = { value: clamp(v, 0.05, 50), matched: true };
  } else if (gMatch) {
    const v = parseVnNumber(gMatch[1]);
    if (v !== null && v > 0) found.mass = { value: clamp(Number((v / 1000).toFixed(3)), 0.05, 50), matched: true };
  }

  // 2. Amplitude A or length/distance in cm
  const ampMatch = clean.match(/(?:A\s*=\s*|biên độ\s+|biến dạng\s+|tiêu cự\s+f\s*=\s*)(\d+(?:[.,]\d+)?)\s*cm\b/i);
  const cmGeneric = clean.match(/(\d+(?:[.,]\d+)?)\s*cm\b/i);
  if (ampMatch) {
    const v = parseVnNumber(ampMatch[1]);
    if (v !== null && v > 0) {
      found.amplitude = { value: clamp(v, 1, 20), matched: true };
      found.focalLength = { value: clamp(v, 2, 30), matched: true };
      found.deltaL = { value: clamp(v, 1, 15), matched: true };
    }
  } else if (cmGeneric) {
    const v = parseVnNumber(cmGeneric[1]);
    if (v !== null && v > 0) {
      found.amplitude = { value: clamp(v, 1, 20), matched: true };
      found.focalLength = { value: clamp(v, 2, 30), matched: true };
      found.deltaL = { value: clamp(v, 1, 15), matched: true };
    }
  }

  // 3. Period T (s) or Frequency f (Hz)
  const hzMatch = clean.match(/(\d+(?:[.,]\d+)?)\s*Hz\b/i);
  const secMatch = clean.match(/(?:T\s*=\s*|chu kì\s+|chu kỳ\s+|thời gian\s+t\s*=\s*)(\d+(?:[.,]\d+)?)\s*s\b/i);
  if (secMatch) {
    const v = parseVnNumber(secMatch[1]);
    if (v !== null && v > 0) found.period = { value: clamp(v, 0.4, 6), matched: true };
  } else if (hzMatch) {
    const fVal = parseVnNumber(hzMatch[1]);
    if (fVal !== null && fVal > 0) {
      found.frequency = { value: clamp(fVal, 1, 100), matched: true };
      found.period = { value: clamp(Number((1 / fVal).toFixed(2)), 0.4, 6), matched: true };
    }
  }

  // 4. Speed / Velocity v (m/s or km/h)
  const mpsMatch = clean.match(/(\d+(?:[.,]\d+)?)\s*m\/s\b/i);
  const kmhMatch = clean.match(/(\d+(?:[.,]\d+)?)\s*km\/h\b/i);
  if (mpsMatch) {
    const v = parseVnNumber(mpsMatch[1]);
    if (v !== null && v >= 0) {
      found.v0 = { value: clamp(v, 0, 30), matched: true };
      found.speed = { value: clamp(v, 0.5, 30), matched: true };
    }
  } else if (kmhMatch) {
    const v = parseVnNumber(kmhMatch[1]);
    if (v !== null && v >= 0) {
      const mps = Number((v / 3.6).toFixed(1));
      found.v0 = { value: clamp(mps, 0, 30), matched: true };
      found.speed = { value: clamp(mps, 0.5, 30), matched: true };
    }
  }

  // 5. Acceleration a (m/s^2 or m/s²)
  const accMatch = clean.match(/(\d+(?:[.,]\d+)?)\s*m\/s(?:\^2|²)/i);
  if (accMatch) {
    const v = parseVnNumber(accMatch[1]);
    if (v !== null) found.acceleration = { value: clamp(v, -10, 15), matched: true };
  }

  // 6. Force F (N)
  const forceMatch = clean.match(/(\d+(?:[.,]\d+)?)\s*N\b(?!\/m)/i);
  if (forceMatch) {
    const v = parseVnNumber(forceMatch[1]);
    if (v !== null && v > 0) found.force = { value: clamp(v, 1, 120), matched: true };
  }

  // 7. Spring stiffness k (N/m)
  const kMatch = clean.match(/(\d+(?:[.,]\d+)?)\s*N\/m\b/i);
  if (kMatch) {
    const v = parseVnNumber(kMatch[1]);
    if (v !== null && v > 0) found.k = { value: clamp(v, 10, 200), matched: true };
  }

  // 8. Resistance R (Ohm / Ω)
  const rMatch = clean.match(/(\d+(?:[.,]\d+)?)\s*(?:\\Omega|Ω|ôm|ohm)\b/i);
  if (rMatch) {
    const v = parseVnNumber(rMatch[1]);
    if (v !== null && v > 0) found.resistance = { value: clamp(v, 1, 60), matched: true };
  }

  // 9. Voltage U (V)
  const uMatch = clean.match(/(\d+(?:[.,]\d+)?)\s*V\b/i);
  if (uMatch) {
    const v = parseVnNumber(uMatch[1]);
    if (v !== null && v > 0) found.voltage = { value: clamp(v, 1, 48), matched: true };
  }

  // 10. Power P (W / kW)
  const pMatch = clean.match(/(\d+(?:[.,]\d+)?)\s*W\b/i);
  const kwMatch = clean.match(/(\d+(?:[.,]\d+)?)\s*kW\b/i);
  if (pMatch) {
    const v = parseVnNumber(pMatch[1]);
    if (v !== null && v > 0) found.power = { value: clamp(v, 100, 3000), matched: true };
  } else if (kwMatch) {
    const v = parseVnNumber(kwMatch[1]);
    if (v !== null && v > 0) found.power = { value: clamp(v * 1000, 100, 3000), matched: true };
  }

  // 11. Temperature T (K or °C)
  const kelvinMatch = clean.match(/(\d+(?:[.,]\d+)?)\s*K\b/);
  const celsiusMatch = clean.match(/(\d+(?:[.,]\d+)?)\s*(?:°C|\^\\circ\s*C|độ\s*C)/i);
  if (kelvinMatch) {
    const v = parseVnNumber(kelvinMatch[1]);
    if (v !== null && v >= 100) found.temperature = { value: clamp(v, 200, 800), matched: true };
  } else if (celsiusMatch) {
    const v = parseVnNumber(celsiusMatch[1]);
    if (v !== null) {
      found.temperature = { value: clamp(Math.round(v + 273), 200, 800), matched: true };
      found.celsius = { value: clamp(v, 0, 100), matched: true };
    }
  }

  // 12. Friction coefficient mu
  const muMatch = clean.match(/(?:\\mu|μ|hệ số ma sát)[^0-9]{0,15}(0[.,]\d+)/i);
  if (muMatch) {
    const v = parseVnNumber(muMatch[1]);
    if (v !== null) found.mu = { value: clamp(v, 0.02, 0.8), matched: true };
  }

  return found;
}

/**
 * Build full Sandbox configuration (extracted chips, sliders, live metrics, and simParameters)
 * for any Question + Topic Simulation.
 */
export function buildProblemSandboxState(
  questionText: string,
  simKey: string,
  baseSimParams: Record<string, any> = {},
  overrideParams: Record<string, number> = {}
): ProblemSandboxExtractionResult {
  const domain = classifySimDomain(simKey);
  const rawFound = extractRawQuantitiesFromText(questionText);

  const pickVal = (key: string, fallback: number): { val: number; fromText: boolean } => {
    if (overrideParams[key] !== undefined) {
      return { val: overrideParams[key], fromText: Boolean(rawFound[key]?.matched) };
    }
    if (rawFound[key]?.matched) {
      return { val: rawFound[key].value, fromText: true };
    }
    if (baseSimParams[key] !== undefined && Number.isFinite(Number(baseSimParams[key]))) {
      return { val: Number(baseSimParams[key]), fromText: false };
    }
    return { val: fallback, fromText: false };
  };

  if (domain === 'shm_wave') {
    const A = pickVal('amplitude', 6);
    const T = pickVal('period', 2.0);
    const m = pickVal('mass', 0.25);

    const omega = (2 * Math.PI) / T.val;
    const vMax = omega * A.val;
    const aMax = omega * omega * A.val;
    const kSpring = m.val * omega * omega;
    const energyMj = 0.5 * kSpring * Math.pow(A.val / 100, 2) * 1000;

    return {
      domainName: 'Dao động điều hòa & Sóng cơ học',
      extractedList: [
        { paramKey: 'amplitude', symbol: 'A', label: 'Biên độ dao động', value: A.val, unit: 'cm', fromQuestionText: A.fromText },
        { paramKey: 'period', symbol: 'T', label: 'Chu kỳ dao động', value: T.val, unit: 's', fromQuestionText: T.fromText },
        { paramKey: 'mass', symbol: 'm', label: 'Khối lượng vật nặng', value: m.val, unit: 'kg', fromQuestionText: m.fromText },
      ],
      simParameters: {
        ...baseSimParams,
        amplitude: A.val,
        period: T.val,
        mass: m.val,
      },
      sliders: [
        { paramKey: 'amplitude', symbol: 'A', label: 'Biên độ A', unit: 'cm', min: 1, max: 16, step: 0.5, defaultValue: A.val },
        { paramKey: 'period', symbol: 'T', label: 'Chu kỳ T', unit: 's', min: 0.5, max: 5.0, step: 0.1, defaultValue: T.val },
        { paramKey: 'mass', symbol: 'm', label: 'Khối lượng m', unit: 'kg', min: 0.1, max: 2.0, step: 0.05, defaultValue: m.val },
      ],
      liveMetrics: [
        { symbol: 'ω', label: 'Tần số góc', formula: 'ω = 2π / T', value: omega.toFixed(2), unit: 'rad/s', highlightColor: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
        { symbol: 'v_max', label: 'Tốc độ cực đại', formula: 'v_max = ω·A', value: vMax.toFixed(1), unit: 'cm/s', highlightColor: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
        { symbol: 'a_max', label: 'Gia tốc cực đại', formula: 'a_max = ω²·A', value: aMax.toFixed(1), unit: 'cm/s²', highlightColor: 'text-amber-800 bg-amber-50 border-amber-200' },
        { symbol: 'W', label: 'Cơ năng toàn phần', formula: 'W = ½mω²A²', value: energyMj.toFixed(1), unit: 'mJ', highlightColor: 'text-purple-700 bg-purple-50 border-purple-200' },
      ],
      verificationInsight: `Khi biên độ A = ${A.val} cm và chu kỳ T = ${T.val} s, đồ thị li độ x(t) biến thiên điều hòa trong khoảng [-${A.val}, +${A.val}] cm và tốc độ qua vị trí cân bằng đạt cực đại v_max = ${vMax.toFixed(1)} cm/s.`,
    };
  }

  if (domain === 'kinematics') {
    const v0 = pickVal('v0', 4.0);
    const a = pickVal('acceleration', 2.0);
    const tSample = 3.0;
    const vAt3 = v0.val + a.val * tSample;
    const sAt3 = v0.val * tSample + 0.5 * a.val * tSample * tSample;

    return {
      domainName: 'Động học Chuyển động Biến đổi đều & Rơi tự do',
      extractedList: [
        { paramKey: 'v0', symbol: 'v₀', label: 'Vận tốc ban đầu', value: v0.val, unit: 'm/s', fromQuestionText: v0.fromText },
        { paramKey: 'acceleration', symbol: 'a', label: 'Gia tốc chuyển động', value: a.val, unit: 'm/s²', fromQuestionText: a.fromText },
      ],
      simParameters: {
        ...baseSimParams,
        v0: v0.val,
        initialSpeed: v0.val,
        acceleration: a.val,
        a: a.val,
      },
      sliders: [
        { paramKey: 'v0', symbol: 'v₀', label: 'Vận tốc đầu v₀', unit: 'm/s', min: 0, max: 25, step: 0.5, defaultValue: v0.val },
        { paramKey: 'acceleration', symbol: 'a', label: 'Gia tốc a', unit: 'm/s²', min: -5, max: 12, step: 0.5, defaultValue: a.val },
      ],
      liveMetrics: [
        { symbol: 'v(3s)', label: 'Vận tốc tại t = 3s', formula: 'v = v₀ + a·t', value: vAt3.toFixed(1), unit: 'm/s', highlightColor: 'text-sky-700 bg-sky-50 border-sky-200' },
        { symbol: 'd(3s)', label: 'Độ dịch chuyển (t = 3s)', formula: 'd = v₀t + ½at²', value: sAt3.toFixed(1), unit: 'm', highlightColor: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
        { symbol: 'a', label: 'Độ dốc đường v(t)', formula: 'a = Δv / Δt', value: a.val.toFixed(1), unit: 'm/s²', highlightColor: 'text-amber-800 bg-amber-50 border-amber-200' },
      ],
      verificationInsight: `Đường vận tốc v(t) xuất phát từ v₀ = ${v0.val} m/s với hệ số góc a = ${a.val} m/s²; đường độ dịch chuyển d(t) là nhánh parabol bậc hai theo thời gian.`,
    };
  }

  if (domain === 'newton_dynamics') {
    const m = pickVal('mass', 2.0);
    const mu = pickVal('mu', 0.15);
    const F = pickVal('force', 12.0);
    const fFriction = mu.val * m.val * 9.8;
    const netF = Math.max(0, F.val - fFriction);
    const acc = netF / m.val;

    return {
      domainName: 'Động lực học Newton & Lực ma sát',
      extractedList: [
        { paramKey: 'mass', symbol: 'm', label: 'Khối lượng vật', value: m.val, unit: 'kg', fromQuestionText: m.fromText },
        { paramKey: 'force', symbol: 'F', label: 'Lực kéo tác dụng', value: F.val, unit: 'N', fromQuestionText: F.fromText },
        { paramKey: 'mu', symbol: 'μ', label: 'Hệ số ma sát trượt', value: mu.val, unit: '', fromQuestionText: mu.fromText },
      ],
      simParameters: {
        ...baseSimParams,
        mass: m.val,
        mu: mu.val,
        force: F.val,
      },
      sliders: [
        { paramKey: 'mass', symbol: 'm', label: 'Khối lượng m', unit: 'kg', min: 0.5, max: 10, step: 0.5, defaultValue: m.val },
        { paramKey: 'force', symbol: 'F', label: 'Lực kéo F', unit: 'N', min: 1, max: 40, step: 1, defaultValue: F.val },
        { paramKey: 'mu', symbol: 'μ', label: 'Hệ số ma sát μ', unit: '', min: 0.0, max: 0.6, step: 0.05, defaultValue: mu.val },
      ],
      liveMetrics: [
        { symbol: 'F_ms', label: 'Ngưỡng ma sát trượt', formula: 'F_ms = μ·m·g', value: fFriction.toFixed(2), unit: 'N', highlightColor: 'text-rose-700 bg-rose-50 border-rose-200' },
        { symbol: 'F_hl', label: 'Hợp lực gây gia tốc', formula: 'F_hl = F - F_ms', value: netF.toFixed(2), unit: 'N', highlightColor: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
        { symbol: 'a', label: 'Gia tốc thu được', formula: 'a = F_hl / m', value: acc.toFixed(2), unit: 'm/s²', highlightColor: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
      ],
      verificationInsight: `Với khối lượng m = ${m.val} kg và μ = ${mu.val}, vật chỉ bắt đầu trượt khi lực kéo vượt qua F_ms = ${fFriction.toFixed(2)} N. Tại F = ${F.val} N, gia tốc đạt a = ${acc.toFixed(2)} m/s².`,
    };
  }

  if (domain === 'electric_circuit') {
    const R = pickVal('resistance', 12);
    const U = pickVal('voltage', 12);
    const I = U.val / R.val;
    const P = (U.val * U.val) / R.val;

    return {
      domainName: 'Mạch điện một chiều, Định luật Ohm & Công suất điện',
      extractedList: [
        { paramKey: 'resistance', symbol: 'R', label: 'Điện trở mạch', value: R.val, unit: 'Ω', fromQuestionText: R.fromText },
        { paramKey: 'voltage', symbol: 'U', label: 'Hiệu điện thế đặt vào', value: U.val, unit: 'V', fromQuestionText: U.fromText },
      ],
      simParameters: {
        ...baseSimParams,
        resistance: R.val,
        voltage: U.val,
      },
      sliders: [
        { paramKey: 'resistance', symbol: 'R', label: 'Điện trở R', unit: 'Ω', min: 2, max: 50, step: 1, defaultValue: R.val },
        { paramKey: 'voltage', symbol: 'U', label: 'Hiệu điện thế U', unit: 'V', min: 2, max: 24, step: 1, defaultValue: U.val },
      ],
      liveMetrics: [
        { symbol: 'I', label: 'Cường độ dòng điện', formula: 'I = U / R', value: I.toFixed(2), unit: 'A', highlightColor: 'text-sky-700 bg-sky-50 border-sky-200' },
        { symbol: 'P', label: 'Công suất tiêu thụ', formula: 'P = U² / R', value: P.toFixed(1), unit: 'W', highlightColor: 'text-rose-700 bg-rose-50 border-rose-200' },
        { symbol: 'Q(1p)', label: 'Nhiệt lượng tỏa ra (60s)', formula: 'Q = I²Rt', value: (P * 60).toFixed(0), unit: 'J', highlightColor: 'text-amber-800 bg-amber-50 border-amber-200' },
      ],
      verificationInsight: `Theo Định luật Ohm I = U/R, khi R = ${R.val} Ω và U = ${U.val} V thì cường độ dòng điện là I = ${I.toFixed(2)} A và công suất tỏa nhiệt đạt P = ${P.toFixed(1)} W.`,
    };
  }

  if (domain === 'ideal_gas') {
    const T = pickVal('temperature', 300);
    const n = pickVal('moles', 1.0);
    const R_const = 8.314;
    const pAt2L = (n.val * R_const * T.val) / 0.002 / 1000;
    const pAt6L = (n.val * R_const * T.val) / 0.006 / 1000;

    return {
      domainName: 'Khí lý tưởng & Phương trình trạng thái (p - V - T)',
      extractedList: [
        { paramKey: 'temperature', symbol: 'T', label: 'Nhiệt độ tuyệt đối', value: T.val, unit: 'K', fromQuestionText: T.fromText },
        { paramKey: 'moles', symbol: 'n', label: 'Số mol khí lý tưởng', value: n.val, unit: 'mol', fromQuestionText: false },
      ],
      simParameters: {
        ...baseSimParams,
        temperature: T.val,
        moles: n.val,
      },
      sliders: [
        { paramKey: 'temperature', symbol: 'T', label: 'Nhiệt độ tuyệt đối T', unit: 'K', min: 200, max: 600, step: 10, defaultValue: T.val },
        { paramKey: 'moles', symbol: 'n', label: 'Số mol khí n', unit: 'mol', min: 0.5, max: 3.0, step: 0.25, defaultValue: n.val },
      ],
      liveMetrics: [
        { symbol: 'p(2L)', label: 'Áp suất tại V = 2 Lít', formula: 'p = nRT / V', value: pAt2L.toFixed(1), unit: 'kPa', highlightColor: 'text-rose-700 bg-rose-50 border-rose-200' },
        { symbol: 'p(6L)', label: 'Áp suất tại V = 6 Lít', formula: 'p = nRT / V', value: pAt6L.toFixed(1), unit: 'kPa', highlightColor: 'text-amber-800 bg-amber-50 border-amber-200' },
        { symbol: 'p·V', label: 'Tích đẳng nhiệt p·V', formula: 'pV = nRT = const', value: (n.val * R_const * T.val).toFixed(0), unit: 'J', highlightColor: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
      ],
      verificationInsight: `Ở nhiệt độ tuyệt đối T = ${T.val} K (${(T.val - 273).toFixed(0)}°C), khi thể tích tăng gấp 3 lần (từ 2 Lít lên 6 Lít), áp suất giảm đúng 3 lần từ ${pAt2L.toFixed(1)} kPa xuống ${pAt6L.toFixed(1)} kPa.`,
    };
  }

  if (domain === 'nuclear') {
    const N0 = pickVal('initialCount', 1000);
    const T_half = pickVal('halfLife', 2.0);
    const remainAfter1T = N0.val * 0.5;
    const remainAfter2T = N0.val * 0.25;

    return {
      domainName: 'Vật lý Hạt nhân & Định luật Phân rã Phóng xạ',
      extractedList: [
        { paramKey: 'initialCount', symbol: 'N₀', label: 'Số hạt nhân ban đầu', value: N0.val, unit: 'hạt', fromQuestionText: false },
        { paramKey: 'halfLife', symbol: 'T', label: 'Chu kỳ bán rã T₁/₂', value: T_half.val, unit: 'chu kỳ', fromQuestionText: T_half.fromText },
      ],
      simParameters: {
        ...baseSimParams,
        initialCount: N0.val,
        halfLife: T_half.val,
      },
      sliders: [
        { paramKey: 'initialCount', symbol: 'N₀', label: 'Số hạt ban đầu N₀', unit: 'hạt', min: 200, max: 2000, step: 100, defaultValue: N0.val },
        { paramKey: 'halfLife', symbol: 'T', label: 'Chu kỳ bán rã T₁/₂', unit: 'đơn vị', min: 0.5, max: 5.0, step: 0.5, defaultValue: T_half.val },
      ],
      liveMetrics: [
        { symbol: 'N(T)', label: 'Còn lại sau 1 chu kỳ T', formula: 'N = N₀ / 2', value: remainAfter1T.toFixed(0), unit: 'hạt', highlightColor: 'text-purple-700 bg-purple-50 border-purple-200' },
        { symbol: 'N(2T)', label: 'Còn lại sau 2 chu kỳ 2T', formula: 'N = N₀ / 4', value: remainAfter2T.toFixed(0), unit: 'hạt', highlightColor: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
        { symbol: 'ΔN(2T)', label: 'Số hạt đã phân rã (2T)', formula: 'ΔN = 75% N₀', value: (N0.val - remainAfter2T).toFixed(0), unit: 'hạt', highlightColor: 'text-rose-700 bg-rose-50 border-rose-200' },
      ],
      verificationInsight: `Đường cong phóng xạ giảm theo hàm mũ N(t) = N₀·2^(-t/T): cứ sau mỗi chu kỳ T = ${T_half.val}, một nửa số hạt nhân hiện có bị phân rã biến đổi thành hạt nhân con.`,
    };
  }

  if (domain === 'optics') {
    const f = pickVal('focalLength', 10);
    const dSample = 20;
    const dPrime = (dSample * f.val) / (dSample - f.val || 0.1);
    const kMag = Math.abs(dPrime / dSample);

    return {
      domainName: 'Quang hình học, Khúc xạ & Thấu kính mỏng',
      extractedList: [
        { paramKey: 'focalLength', symbol: 'f', label: 'Tiêu cự thấu kính', value: f.val, unit: 'cm', fromQuestionText: f.fromText },
      ],
      simParameters: {
        ...baseSimParams,
        focalLength: f.val,
      },
      sliders: [
        { paramKey: 'focalLength', symbol: 'f', label: 'Tiêu cự f', unit: 'cm', min: 4, max: 25, step: 1, defaultValue: f.val },
      ],
      liveMetrics: [
        { symbol: 'D', label: 'Độ tụ thấu kính', formula: 'D = 100 / f(cm)', value: (100 / f.val).toFixed(2), unit: 'dp', highlightColor: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
        { symbol: "d'(20)", label: 'Vị trí ảnh (khi d = 20cm)', formula: "d' = d·f / (d - f)", value: dPrime.toFixed(1), unit: 'cm', highlightColor: 'text-purple-700 bg-purple-50 border-purple-200' },
        { symbol: '|k|', label: 'Số phóng đại ảnh', formula: "|k| = |d' / d|", value: kMag.toFixed(2), unit: 'lần', highlightColor: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
      ],
      verificationInsight: `Với tiêu cự f = ${f.val} cm, khi đặt vật ngoài khoảng tiêu cự (d > ${f.val} cm) thấu kính cho ảnh thật (d' > 0); khi d < ${f.val} cm thấu kính cho ảnh ảo cùng chiều và lớn hơn vật.`,
    };
  }

  if (domain === 'hooke_spring') {
    const k = pickVal('k', 50);
    const dl = pickVal('deltaL', 6);
    const fDh = k.val * (dl.val / 100);
    const wtMj = 0.5 * k.val * Math.pow(dl.val / 100, 2) * 1000;

    return {
      domainName: 'Định luật Hooke & Lực đàn hồi Lò xo',
      extractedList: [
        { paramKey: 'k', symbol: 'k', label: 'Độ cứng lò xo', value: k.val, unit: 'N/m', fromQuestionText: k.fromText },
        { paramKey: 'deltaL', symbol: 'Δl', label: 'Độ biến dạng khảo sát', value: dl.val, unit: 'cm', fromQuestionText: dl.fromText },
      ],
      simParameters: {
        ...baseSimParams,
        k: k.val,
      },
      sliders: [
        { paramKey: 'k', symbol: 'k', label: 'Độ cứng lò xo k', unit: 'N/m', min: 10, max: 200, step: 5, defaultValue: k.val },
        { paramKey: 'deltaL', symbol: 'Δl', label: 'Độ giãn Δl', unit: 'cm', min: 1, max: 15, step: 0.5, defaultValue: dl.val },
      ],
      liveMetrics: [
        { symbol: 'F_đh', label: 'Lực đàn hồi', formula: 'F_đh = k · Δl', value: fDh.toFixed(2), unit: 'N', highlightColor: 'text-sky-700 bg-sky-50 border-sky-200' },
        { symbol: 'W_t', label: 'Thế năng đàn hồi', formula: 'W_t = ½k(Δl)²', value: wtMj.toFixed(1), unit: 'mJ', highlightColor: 'text-amber-800 bg-amber-50 border-amber-200' },
      ],
      verificationInsight: `Theo Định luật Hooke, đồ thị lực đàn hồi F_đh phụ thuộc bậc nhất theo độ giãn Δl với hệ số góc k = ${k.val} N/m; tại Δl = ${dl.val} cm, lực đàn hồi đạt ${fDh.toFixed(2)} N.`,
    };
  }

  if (domain === 'work_energy') {
    const F = pickVal('force', 50);
    const v = pickVal('speed', 8);
    const workAt10m = F.val * 10;
    const powerW = F.val * v.val;

    return {
      domainName: 'Công cơ học, Công suất & Định luật Bảo toàn Năng lượng',
      extractedList: [
        { paramKey: 'force', symbol: 'F', label: 'Lực tác dụng', value: F.val, unit: 'N', fromQuestionText: F.fromText },
        { paramKey: 'speed', symbol: 'v', label: 'Tốc độ dịch chuyển', value: v.val, unit: 'm/s', fromQuestionText: v.fromText },
      ],
      simParameters: {
        ...baseSimParams,
        force: F.val,
        speed: v.val,
      },
      sliders: [
        { paramKey: 'force', symbol: 'F', label: 'Lực kéo F', unit: 'N', min: 5, max: 120, step: 5, defaultValue: F.val },
        { paramKey: 'speed', symbol: 'v', label: 'Vận tốc v', unit: 'm/s', min: 1, max: 25, step: 1, defaultValue: v.val },
      ],
      liveMetrics: [
        { symbol: 'A(10m)', label: 'Công trên quãng đường 10m', formula: 'A = F · s', value: workAt10m.toFixed(0), unit: 'J', highlightColor: 'text-cyan-700 bg-cyan-50 border-cyan-200' },
        { symbol: 'P', label: 'Công suất tức thời', formula: 'P = F · v', value: powerW.toFixed(0), unit: 'W', highlightColor: 'text-amber-800 bg-amber-50 border-amber-200' },
      ],
      verificationInsight: `Khi lực F = ${F.val} N duy trì tốc độ v = ${v.val} m/s, công thực hiện tăng tuyến tính theo quãng đường (A = ${workAt10m} J tại s = 10 m) và công suất đạt P = ${powerW} W.`,
    };
  }

  // Default: Thermal & Calorimetry / General Physics
  const m = pickVal('mass', 1.0);
  const P = pickVal('power', 1000);
  const q5MinKj = (P.val * 5 * 60) / 1000;
  const deltaT5Min = (P.val * 5 * 60) / (m.val * 4186);

  return {
    domainName: 'Nhiệt học, Truyền nhiệt & Nội năng',
    extractedList: [
      { paramKey: 'mass', symbol: 'm', label: 'Khối lượng khối chất', value: m.val, unit: 'kg', fromQuestionText: m.fromText },
      { paramKey: 'power', symbol: 'P', label: 'Công suất nguồn nhiệt', value: P.val, unit: 'W', fromQuestionText: P.fromText },
    ],
    simParameters: {
      ...baseSimParams,
      mass: m.val,
      power: P.val,
    },
    sliders: [
      { paramKey: 'mass', symbol: 'm', label: 'Khối lượng m', unit: 'kg', min: 0.2, max: 5.0, step: 0.2, defaultValue: m.val },
      { paramKey: 'power', symbol: 'P', label: 'Công suất đun P', unit: 'W', min: 200, max: 2500, step: 100, defaultValue: P.val },
    ],
    liveMetrics: [
      { symbol: 'Q(5p)', label: 'Nhiệt lượng cấp sau 5 phút', formula: 'Q = P · t', value: q5MinKj.toFixed(0), unit: 'kJ', highlightColor: 'text-orange-700 bg-orange-50 border-orange-200' },
      { symbol: 'ΔT(5p)', label: 'Độ tăng nhiệt độ (5 phút)', formula: 'ΔT = Q / (m·c)', value: deltaT5Min.toFixed(1), unit: '°C', highlightColor: 'text-rose-700 bg-rose-50 border-rose-200' },
    ],
    verificationInsight: `Với khối lượng m = ${m.val} kg và công suất cấp nhiệt P = ${P.val} W, nhiệt lượng hấp thụ sau 5 phút là Q = ${q5MinKj.toFixed(0)} kJ, làm nhiệt độ tăng thêm ΔT = ${deltaT5Min.toFixed(1)} °C.`,
  };
}

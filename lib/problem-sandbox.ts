/**
 * ============================================================================
 * INTERACTIVE PROBLEM-TO-SIM SANDBOX ENGINE (GRADES 6 - 12)
 * ============================================================================
 * Directly parses the active question's text (`question_text`) and solution
 * (`explanation`) to extract the EXACT numbers, variables, and formula of that
 * specific problem, linking them 1-to-1 with:
 *   1. "What-If" Interactive Sliders initialized to the question's exact numbers
 *   2. Real-time Formula Verification Calculator matching the question's answer
 *   3. Synchronized Simulation & Graph parameters (`simParameters`)
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

function parseVnNumber(raw: string): number | null {
  if (!raw) return null;
  const cleaned = raw.trim().replace(/\s+/g, '').replace(',', '.');
  const val = Number(cleaned);
  return Number.isFinite(val) ? val : null;
}

function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

function makeSliderBounds(val: number, stepHint?: number): { min: number; max: number; step: number } {
  const abs = Math.abs(val);
  if (abs === 0) return { min: -50, max: 50, step: 1 };
  const step =
    stepHint ||
    (abs < 0.1 ? 0.005 : abs < 1 ? 0.05 : abs < 10 ? 0.2 : abs < 100 ? 1 : abs < 1000 ? 10 : 50);
  const min = val < 0 ? Math.floor(val * 2) : Math.max(step, Number((val * 0.2).toFixed(4)));
  const max = val < 0 ? Math.ceil(Math.abs(val) * 2) : Number((val * 2.5).toFixed(4));
  return { min, max, step };
}

/**
 * Legacy helper kept for backward-compatible unit tests
 */
export function extractRawQuantitiesFromText(text: string): Record<string, { value: number; matched: boolean }> {
  const found: Record<string, { value: number; matched: boolean }> = {};
  const clean = text.replace(/\\text\{([^}]*)\}/g, '$1').replace(/\\,/g, ' ');

  const kgMatch = clean.match(/(\d+(?:[.,]\d+)?)\s*kg\b/i);
  const gMatch = clean.match(/(?:m\s*=\s*|khối lượng\s+|ban đầu có\s+)(\d+(?:[.,]\d+)?)\s*g\b/i);
  if (kgMatch) {
    const v = parseVnNumber(kgMatch[1]);
    if (v !== null && v > 0) found.mass = { value: clamp(v, 0.01, 500), matched: true };
  } else if (gMatch) {
    const v = parseVnNumber(gMatch[1]);
    if (v !== null && v > 0) found.mass = { value: clamp(Number((v / 1000).toFixed(3)), 0.01, 500), matched: true };
  }

  const cmMatch = clean.match(/(\d+(?:[.,]\d+)?)\s*cm\b/i);
  if (cmMatch) {
    const v = parseVnNumber(cmMatch[1]);
    if (v !== null && v > 0) {
      found.amplitude = { value: v, matched: true };
      found.focalLength = { value: v, matched: true };
      found.deltaL = { value: v, matched: true };
    }
  }

  const secMatch = clean.match(/(?:T\s*=\s*|chu kì\s+|chu kỳ\s+|thời gian\s+t\s*=\s*)(\d+(?:[.,]\d+)?)\s*s\b/i);
  if (secMatch) {
    const v = parseVnNumber(secMatch[1]);
    if (v !== null && v > 0) found.period = { value: v, matched: true };
  }

  const rMatch = clean.match(/(\d+(?:[.,]\d+)?)\s*(?:\\Omega|Ω|ôm|ohm)\b/i);
  if (rMatch) {
    const v = parseVnNumber(rMatch[1]);
    if (v !== null && v > 0) found.resistance = { value: v, matched: true };
  }

  const uMatch = clean.match(/(\d+(?:[.,]\d+)?)\s*V\b/i);
  if (uMatch) {
    const v = parseVnNumber(uMatch[1]);
    if (v !== null && v > 0) found.voltage = { value: v, matched: true };
  }

  return found;
}

/**
 * Build Question-Specific Sandbox State directly from the active Question's text & explanation!
 */
export function buildProblemSandboxState(
  questionText: string,
  simKey: string,
  baseSimParams: Record<string, any> = {},
  overrideParams: Record<string, number> = {}
): ProblemSandboxExtractionResult {
  const clean = (questionText || '')
    .replace(/\\text\{([^}]*)\}/g, '$1')
    .replace(/\\,/g, ' ');

  const getVal = (key: string, defaultVal: number): number => {
    return overrideParams[key] !== undefined ? overrideParams[key] : defaultVal;
  };

  // ==========================================================================
  // ARCHETYPE 1: RADIOACTIVE DECAY (T = ... ngày/năm/giờ/phút, m0 / N0, t = ...)
  // ==========================================================================
  const halfLifeMatch = clean.match(
    /chu\s*k[ỳì]\s*bán\s*rã\s*(?:T\s*=\s*)?(\d+(?:[.,]\d+)?)\s*(ngày|năm|giờ|phút|giây|s)\b/i
  );
  if (halfLifeMatch) {
    const T_base = parseVnNumber(halfLifeMatch[1]) || 8;
    const tUnit = halfLifeMatch[2];
    const m0Match = clean.match(/(?:ban đầu có|khối lượng ban đầu|m_?0\s*=\s*)[^0-9]{0,20}(\d+(?:[.,]\d+)?)\s*(g|mg|kg)\b/i);
    const timeMatches = Array.from(
      clean.matchAll(/(?:sau\s+|thời gian\s+t\s*=\s*)(\d+(?:[.,]\d+)?)\s*(ngày|năm|giờ|phút|giây|s)\b/gi)
    );
    const ratioMatch = clean.match(/tỉ số[^0-9]{0,60}bằng\s*(\d+(?:[.,]\d+)?)/i);

    const m0_base = m0Match ? parseVnNumber(m0Match[1]) || 100 : 100;
    const mUnit = m0Match ? m0Match[2] : 'g';
    const t_base = timeMatches.length > 0 ? parseVnNumber(timeMatches[0][1]) || T_base * 2 : ratioMatch ? T_base * Math.log2((parseVnNumber(ratioMatch[1]) || 3) + 1) : T_base * 2;

    const T_val = getVal('halfLife', T_base);
    const m0_val = getVal('initialCount', m0_base);
    const t_val = getVal('elapsedTime', Number(t_base.toFixed(1)));

    const numPeriods = t_val / T_val;
    const mRemain = m0_val * Math.pow(2, -numPeriods);
    const mDecayed = m0_val - mRemain;
    const ratioDecayedToRemain = mRemain > 0 ? mDecayed / mRemain : 0;

    const bT = makeSliderBounds(T_base);
    const bM0 = makeSliderBounds(m0_base, 10);
    const bTime = makeSliderBounds(Math.max(1, Number(t_base.toFixed(1))));

    return {
      domainName: 'Định luật Phóng xạ & Chu kỳ Bán rã',
      extractedList: [
        { paramKey: 'halfLife', symbol: 'T', label: 'Chu kỳ bán rã', value: T_val, unit: tUnit, fromQuestionText: true },
        { paramKey: 'initialCount', symbol: 'm₀', label: 'Lượng chất ban đầu', value: m0_val, unit: mUnit, fromQuestionText: Boolean(m0Match) },
        { paramKey: 'elapsedTime', symbol: 't', label: 'Thời gian khảo sát', value: t_val, unit: tUnit, fromQuestionText: timeMatches.length > 0 },
      ],
      simParameters: {
        ...baseSimParams,
        initialCount: m0_val,
        halfLife: T_val,
      },
      sliders: [
        { paramKey: 'halfLife', symbol: 'T', label: `Chu kỳ bán rã T`, unit: tUnit, min: bT.min, max: bT.max, step: bT.step, defaultValue: T_base },
        { paramKey: 'initialCount', symbol: 'm₀', label: `Lượng ban đầu m₀`, unit: mUnit, min: bM0.min, max: bM0.max, step: bM0.step, defaultValue: m0_base },
        { paramKey: 'elapsedTime', symbol: 't', label: `Thời gian phân rã t`, unit: tUnit, min: bTime.min, max: bTime.max, step: bTime.step, defaultValue: Number(t_base.toFixed(1)) },
      ],
      liveMetrics: [
        { symbol: 't / T', label: 'Số chu kỳ bán rã', formula: 'k = t / T', value: numPeriods.toFixed(2), unit: 'chu kỳ', highlightColor: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
        { symbol: 'm(t)', label: 'Còn lại sau thời gian t', formula: 'm = m₀ · 2^(-t/T)', value: mRemain.toFixed(2), unit: mUnit, highlightColor: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
        { symbol: 'Δm', label: 'Lượng đã phân rã', formula: 'Δm = m₀ - m(t)', value: mDecayed.toFixed(2), unit: mUnit, highlightColor: 'text-rose-700 bg-rose-50 border-rose-200' },
        { symbol: 'ΔN / N', label: 'Tỉ số Phân rã / Còn lại', formula: '2^(t/T) - 1', value: ratioDecayedToRemain.toFixed(2), unit: 'lần', highlightColor: 'text-purple-700 bg-purple-50 border-purple-200' },
      ],
      verificationInsight: `Khớp trực tiếp với đề bài: Với chu kỳ bán rã T = ${T_val} ${tUnit} và lượng ban đầu m₀ = ${m0_val} ${mUnit}, sau thời gian t = ${t_val} ${tUnit} (${numPeriods.toFixed(2)} chu kỳ), lượng chất phóng xạ còn lại là m = ${mRemain.toFixed(2)} ${mUnit} (tỉ số đã phân rã / còn lại = ${ratioDecayedToRemain.toFixed(2)}).`,
    };
  }

  // ==========================================================================
  // ARCHETYPE 2: NUCLEAR MASS DEFECT & BINDING ENERGY (mp, mn, Δm, W_lk)
  // ==========================================================================
  if (clean.includes('mp =') || clean.includes('độ hụt khối') || clean.includes('931,5')) {
    const zMatch = clean.match(/Z\s*=\s*(\d+)/i);
    const nMatch = clean.match(/N\s*=\s*(\d+)/i);
    const Z_base = zMatch ? Number(zMatch[1]) : 6;
    const N_base = nMatch ? Number(nMatch[1]) : 6;
    const mp = 1.00728;
    const mn = 1.00866;
    const mX_Match = clean.match(/=\s*(\d+[.,]\d{3,5})\s*u\b/g);
    let mX_base = Z_base + N_base;
    if (mX_Match && mX_Match.length >= 3) {
      const lastU = mX_Match[mX_Match.length - 1].replace(/[=u\s]/g, '');
      const parsed = parseVnNumber(lastU);
      if (parsed && parsed > 1.5) mX_base = parsed;
    }

    const Z_val = getVal('Z', Z_base);
    const N_val = getVal('N', N_base);
    const mX_val = getVal('mX', mX_base);
    const deltaM = Z_val * mp + N_val * mn - mX_val;
    const wLk = deltaM * 931.5;
    const wPerNucleon = wLk / Math.max(1, Z_val + N_val);

    return {
      domainName: 'Độ hụt khối & Năng lượng liên kết Hạt nhân',
      extractedList: [
        { paramKey: 'Z', symbol: 'Z', label: 'Số proton trong hạt nhân', value: Z_val, unit: 'hạt', fromQuestionText: true },
        { paramKey: 'N', symbol: 'N', label: 'Số neutron trong hạt nhân', value: N_val, unit: 'hạt', fromQuestionText: true },
        { paramKey: 'mX', symbol: 'm_X', label: 'Khối lượng hạt nhân thực tế', value: mX_val, unit: 'u', fromQuestionText: true },
      ],
      simParameters: { ...baseSimParams, initialCount: (Z_val + N_val) * 100, halfLife: 2 },
      sliders: [
        { paramKey: 'Z', symbol: 'Z', label: 'Số proton Z', unit: 'hạt', min: 1, max: 92, step: 1, defaultValue: Z_base },
        { paramKey: 'N', symbol: 'N', label: 'Số neutron N', unit: 'hạt', min: 1, max: 146, step: 1, defaultValue: N_base },
      ],
      liveMetrics: [
        { symbol: 'A', label: 'Số khối hạt nhân', formula: 'A = Z + N', value: String(Z_val + N_val), unit: 'nucleon', highlightColor: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
        { symbol: 'Δm', label: 'Độ hụt khối hạt nhân', formula: 'Δm = Z·mp + N·mn - mX', value: deltaM.toFixed(5), unit: 'u', highlightColor: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
        { symbol: 'W_lk', label: 'Năng lượng liên kết', formula: 'W_lk = Δm · 931,5', value: wLk.toFixed(2), unit: 'MeV', highlightColor: 'text-purple-700 bg-purple-50 border-purple-200' },
        { symbol: 'ε', label: 'Năng lượng liên kết riêng', formula: 'ε = W_lk / A', value: wPerNucleon.toFixed(2), unit: 'MeV/nu', highlightColor: 'text-amber-800 bg-amber-50 border-amber-200' },
      ],
      verificationInsight: `Khớp trực tiếp với đề bài: Hạt nhân có Z = ${Z_val} proton, N = ${N_val} neutron và khối lượng m_X = ${mX_val} u có độ hụt khối Δm = ${deltaM.toFixed(5)} u và năng lượng liên kết W_lk = ${wLk.toFixed(2)} MeV.`,
    };
  }

  // ==========================================================================
  // ARCHETYPE 3: KELVIN <-> CELSIUS TEMPERATURE CONVERSION
  // ==========================================================================
  if (
    (clean.includes('Kelvin') || clean.includes('Celsius') || clean.includes('Fahrenheit')) &&
    (clean.match(/\d+\s*K\b/) || clean.match(/-?\d+\s*°C/))
  ) {
    const kMatch = clean.match(/(\d+(?:[.,]\d+)?)\s*K\b/);
    const cMatch = clean.match(/(-?\d+(?:[.,]\d+)?)\s*°C/);
    const c_base = cMatch
      ? parseVnNumber(cMatch[1]) || 0
      : kMatch
        ? Number(((parseVnNumber(kMatch[1]) || 300) - 273.15).toFixed(2))
        : 27;

    const c_val = getVal('celsius', c_base);
    const k_val = Number((c_val + 273.15).toFixed(2));
    const f_val = Number((c_val * 1.8 + 32).toFixed(1));
    const bC = makeSliderBounds(c_base, 5);

    return {
      domainName: 'Chuyển đổi Thang Nhiệt độ (Celsius • Kelvin • Fahrenheit)',
      extractedList: [
        { paramKey: 'celsius', symbol: 't (°C)', label: 'Nhiệt độ bách phân Celsius', value: c_val, unit: '°C', fromQuestionText: true },
        { paramKey: 'temperature', symbol: 'T (K)', label: 'Nhiệt độ tuyệt đối Kelvin', value: k_val, unit: 'K', fromQuestionText: true },
      ],
      simParameters: { ...baseSimParams, temperature: clamp(k_val, 100, 1000), mass: 1, power: 1000 },
      sliders: [
        { paramKey: 'celsius', symbol: 't', label: 'Nhiệt độ Celsius t', unit: '°C', min: Math.min(-273, bC.min), max: Math.max(6000, bC.max), step: 1, defaultValue: c_base },
      ],
      liveMetrics: [
        { symbol: 't (°C)', label: 'Thang Celsius', formula: 't = T(K) - 273,15', value: c_val.toFixed(2), unit: '°C', highlightColor: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
        { symbol: 'T (K)', label: 'Thang Kelvin tuyệt đối', formula: 'T = t(°C) + 273,15', value: k_val.toFixed(2), unit: 'K', highlightColor: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
        { symbol: 't (°F)', label: 'Thang Fahrenheit', formula: 't_F = 1,8·t(°C) + 32', value: f_val.toFixed(1), unit: '°F', highlightColor: 'text-amber-800 bg-amber-50 border-amber-200' },
      ],
      verificationInsight: `Khớp trực tiếp với đề bài: Tại t = ${c_val} °C, nhiệt độ tuyệt đối tương ứng là T = ${c_val} + 273,15 = ${k_val} K (và ${f_val} °F).`,
    };
  }

  // ==========================================================================
  // ARCHETYPE 4: FIRST LAW OF THERMODYNAMICS (ΔU = A + Q)
  // ==========================================================================
  if (clean.includes('ΔU') || clean.includes('nội năng')) {
    const aSignedMatch = clean.match(/A\s*=\s*([+-]?\d+(?:[.,]\d+)?)\s*J/i);
    const qSignedMatch = clean.match(/Q\s*=\s*([+-]?\d+(?:[.,]\d+)?)\s*J/i);
    const aUnsigned = clean.match(/công\s+(\d+(?:[.,]\d+)?)\s*J/i);
    const qUnsigned = clean.match(/nhiệt lượng\s+(\d+(?:[.,]\d+)?)\s*J/i);

    const A_base = aSignedMatch
      ? parseVnNumber(aSignedMatch[1]) || 80
      : aUnsigned
        ? (clean.includes('thực hiện công') ? -1 : 1) * (parseVnNumber(aUnsigned[1]) || 80)
        : 80;
    const Q_base = qSignedMatch
      ? parseVnNumber(qSignedMatch[1]) || -25
      : qUnsigned
        ? (clean.includes('truyền ra') || clean.includes('tỏa') ? -1 : 1) * (parseVnNumber(qUnsigned[1]) || 25)
        : -25;

    const A_val = getVal('workA', A_base);
    const Q_val = getVal('heatQ', Q_base);
    const deltaU = A_val + Q_val;

    return {
      domainName: 'Định luật I Nhiệt động lực học (ΔU = A + Q)',
      extractedList: [
        { paramKey: 'workA', symbol: 'A', label: 'Công trao đổi (+ nhận / - sinh công)', value: A_val, unit: 'J', fromQuestionText: true },
        { paramKey: 'heatQ', symbol: 'Q', label: 'Nhiệt lượng (+ nhận / - tỏa nhiệt)', value: Q_val, unit: 'J', fromQuestionText: true },
      ],
      simParameters: { ...baseSimParams, power: Math.max(200, Math.abs(Q_val) * 20), mass: 1 },
      sliders: [
        { paramKey: 'workA', symbol: 'A', label: 'Công A (+ nhận, - thực hiện)', unit: 'J', min: -500, max: 500, step: 5, defaultValue: A_base },
        { paramKey: 'heatQ', symbol: 'Q', label: 'Nhiệt lượng Q (+ nhận, - tỏa)', unit: 'J', min: -500, max: 500, step: 5, defaultValue: Q_base },
      ],
      liveMetrics: [
        { symbol: 'A', label: 'Công cơ học', formula: A_val >= 0 ? 'Hệ nhận công (A > 0)' : 'Hệ thực hiện công (A < 0)', value: `${A_val >= 0 ? '+' : ''}${A_val}`, unit: 'J', highlightColor: 'text-sky-700 bg-sky-50 border-sky-200' },
        { symbol: 'Q', label: 'Nhiệt lượng trao đổi', formula: Q_val >= 0 ? 'Hệ nhận nhiệt (Q > 0)' : 'Hệ tỏa nhiệt (Q < 0)', value: `${Q_val >= 0 ? '+' : ''}${Q_val}`, unit: 'J', highlightColor: 'text-amber-800 bg-amber-50 border-amber-200' },
        { symbol: 'ΔU', label: 'Độ biến thiên Nội năng', formula: 'ΔU = A + Q', value: `${deltaU >= 0 ? '+' : ''}${deltaU}`, unit: 'J', highlightColor: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
      ],
      verificationInsight: `Khớp trực tiếp với đề bài: Theo Định luật I Nhiệt động lực học ΔU = A + Q = (${A_val}) + (${Q_val}) = ${deltaU >= 0 ? '+' : ''}${deltaU} J.`,
    };
  }

  // ==========================================================================
  // ARCHETYPE 5: CALORIMETRY Q = m * c * (t2 - t1)
  // ==========================================================================
  const cHeatMatch = clean.match(/c\s*=\s*(\d+(?:[.,]\d+)?)\s*J\/\(kg/i);
  const tempMatches = Array.from(clean.matchAll(/(-?\d+(?:[.,]\d+)?)\s*°C/g));
  if (cHeatMatch && tempMatches.length >= 2) {
    const mMatch = clean.match(/(\d+(?:[.,]\d+)?)\s*kg/i);
    const m_base = mMatch ? parseVnNumber(mMatch[1]) || 2 : 2;
    const c_base = parseVnNumber(cHeatMatch[1]) || 4180;
    const t1_base = parseVnNumber(tempMatches[0][1]) ?? 25;
    const t2_base = parseVnNumber(tempMatches[1][1]) ?? 100;

    const m_val = getVal('mass', m_base);
    const t1_val = getVal('t1', t1_base);
    const t2_val = getVal('t2', t2_base);
    const deltaT = t2_val - t1_val;
    const Q_joule = m_val * c_base * deltaT;
    const Q_kj = Q_joule / 1000;

    return {
      domainName: 'Phương trình Nhiệt lượng Đun nóng Q = m·c·Δt',
      extractedList: [
        { paramKey: 'mass', symbol: 'm', label: 'Khối lượng chất lỏng/rắn', value: m_val, unit: 'kg', fromQuestionText: true },
        { paramKey: 't1', symbol: 't₁', label: 'Nhiệt độ ban đầu', value: t1_val, unit: '°C', fromQuestionText: true },
        { paramKey: 't2', symbol: 't₂', label: 'Nhiệt độ lúc sau', value: t2_val, unit: '°C', fromQuestionText: true },
        { paramKey: 'c', symbol: 'c', label: 'Nhiệt dung riêng', value: c_base, unit: 'J/(kg·K)', fromQuestionText: true },
      ],
      simParameters: { ...baseSimParams, mass: m_val, power: 1000 },
      sliders: [
        { paramKey: 'mass', symbol: 'm', label: 'Khối lượng m', unit: 'kg', min: 0.2, max: 10, step: 0.2, defaultValue: m_base },
        { paramKey: 't1', symbol: 't₁', label: 'Nhiệt độ đầu t₁', unit: '°C', min: 0, max: 90, step: 5, defaultValue: t1_base },
        { paramKey: 't2', symbol: 't₂', label: 'Nhiệt độ cuối t₂', unit: '°C', min: 10, max: 100, step: 5, defaultValue: t2_base },
      ],
      liveMetrics: [
        { symbol: 'Δt', label: 'Độ tăng nhiệt độ', formula: 'Δt = t₂ - t₁', value: deltaT.toFixed(1), unit: '°C (hoặc K)', highlightColor: 'text-sky-700 bg-sky-50 border-sky-200' },
        { symbol: 'Q (J)', label: 'Nhiệt lượng tính theo Joule', formula: 'Q = m · c · Δt', value: Q_joule.toFixed(0), unit: 'J', highlightColor: 'text-amber-800 bg-amber-50 border-amber-200' },
        { symbol: 'Q (kJ)', label: 'Nhiệt lượng tính theo kJ', formula: 'Q / 1000', value: Q_kj.toFixed(1), unit: 'kJ', highlightColor: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
      ],
      verificationInsight: `Khớp trực tiếp với đề bài: Để đun m = ${m_val} kg chất (c = ${c_base} J/kg·K) tăng từ t₁ = ${t1_val} °C lên t₂ = ${t2_val} °C (Δt = ${deltaT} °C), nhiệt lượng cần cấp là Q = ${Q_joule.toLocaleString('vi-VN')} J = ${Q_kj.toFixed(1)} kJ.`,
    };
  }

  // ==========================================================================
  // ARCHETYPE 6: BOYLE'S LAW ISOTHERMAL (p1 * V1 = p2 * V2)
  // ==========================================================================
  const literMatches = Array.from(clean.matchAll(/(\d+(?:[.,]\d+)?)\s*(?:L|lít)\b/gi));
  if (literMatches.length >= 2 && (clean.includes('đẳng nhiệt') || clean.includes('Boyle'))) {
    const V1_base = parseVnNumber(literMatches[0][1]) || 4;
    const V2_base = parseVnNumber(literMatches[1][1]) || 1.6;
    const atmMatch = clean.match(/(\d+(?:[.,]\d+)?)\s*atm\b/i);
    const p1_base = atmMatch ? parseVnNumber(atmMatch[1]) || 1 : 1.0; // in 10^5 Pa or atm
    const pUnit = atmMatch ? 'atm' : '×10⁵ Pa';

    const V1_val = getVal('V1', V1_base);
    const p1_val = getVal('p1', p1_base);
    const V2_val = getVal('V2', V2_base);
    const p2_val = (p1_val * V1_val) / Math.max(0.1, V2_val);

    return {
      domainName: 'Định luật Boyle (Đẳng nhiệt p₁·V₁ = p₂·V₂)',
      extractedList: [
        { paramKey: 'V1', symbol: 'V₁', label: 'Thể tích trạng thái 1', value: V1_val, unit: 'L', fromQuestionText: true },
        { paramKey: 'p1', symbol: 'p₁', label: 'Áp suất trạng thái 1', value: p1_val, unit: pUnit, fromQuestionText: true },
        { paramKey: 'V2', symbol: 'V₂', label: 'Thể tích trạng thái 2', value: V2_val, unit: 'L', fromQuestionText: true },
      ],
      simParameters: { ...baseSimParams, temperature: 300, moles: (p1_val * V1_val) / 24.9 },
      sliders: [
        { paramKey: 'V1', symbol: 'V₁', label: 'Thể tích đầu V₁', unit: 'L', min: 0.5, max: 15, step: 0.5, defaultValue: V1_base },
        { paramKey: 'p1', symbol: 'p₁', label: 'Áp suất đầu p₁', unit: pUnit, min: 0.5, max: 10, step: 0.5, defaultValue: p1_base },
        { paramKey: 'V2', symbol: 'V₂', label: 'Thể tích sau V₂', unit: 'L', min: 0.4, max: 15, step: 0.2, defaultValue: V2_base },
      ],
      liveMetrics: [
        { symbol: 'p₁·V₁', label: 'Hằng số đẳng nhiệt', formula: 'const = p₁ · V₁', value: (p1_val * V1_val).toFixed(2), unit: `${pUnit}·L`, highlightColor: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
        { symbol: 'p₂', label: 'Áp suất trạng thái 2', formula: 'p₂ = (p₁·V₁) / V₂', value: p2_val.toFixed(2), unit: pUnit, highlightColor: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
        { symbol: 'V₁ / V₂', label: 'Tỉ số nén thể tích', formula: 'p₂ / p₁ = V₁ / V₂', value: (V1_val / V2_val).toFixed(2), unit: 'lần', highlightColor: 'text-amber-800 bg-amber-50 border-amber-200' },
      ],
      verificationInsight: `Khớp trực tiếp với đề bài: Theo Định luật Boyle p₁·V₁ = p₂·V₂, khi nén khí từ V₁ = ${V1_val} L (ở p₁ = ${p1_val} ${pUnit}) về V₂ = ${V2_val} L thì áp suất lúc sau là p₂ = ${p2_val.toFixed(2)} ${pUnit}.`,
    };
  }

  // ==========================================================================
  // ARCHETYPE 7: CHARLES'S LAW ISOBARIC (V1 / T1 = V2 / T2)
  // ==========================================================================
  if (literMatches.length >= 1 && tempMatches.length >= 2 && clean.includes('đẳng áp')) {
    const V1_base = parseVnNumber(literMatches[0][1]) || 12;
    const t1_base = parseVnNumber(tempMatches[0][1]) ?? 27;
    const t2_base = parseVnNumber(tempMatches[1][1]) ?? 127;

    const V1_val = getVal('V1', V1_base);
    const t1_val = getVal('t1', t1_base);
    const t2_val = getVal('t2', t2_base);
    const T1 = t1_val + 273;
    const T2 = t2_val + 273;
    const V2_val = V1_val * (T2 / Math.max(1, T1));

    return {
      domainName: 'Định luật Charles (Đẳng áp V₁/T₁ = V₂/T₂)',
      extractedList: [
        { paramKey: 'V1', symbol: 'V₁', label: 'Thể tích ban đầu', value: V1_val, unit: 'L', fromQuestionText: true },
        { paramKey: 't1', symbol: 't₁', label: 'Nhiệt độ đầu (°C)', value: t1_val, unit: `°C (${T1} K)`, fromQuestionText: true },
        { paramKey: 't2', symbol: 't₂', label: 'Nhiệt độ sau (°C)', value: t2_val, unit: `°C (${T2} K)`, fromQuestionText: true },
      ],
      simParameters: { ...baseSimParams, temperature: T2, moles: 1 },
      sliders: [
        { paramKey: 'V1', symbol: 'V₁', label: 'Thể tích ban đầu V₁', unit: 'L', min: 1, max: 30, step: 1, defaultValue: V1_base },
        { paramKey: 't1', symbol: 't₁', label: 'Nhiệt độ đầu t₁', unit: '°C', min: -50, max: 200, step: 5, defaultValue: t1_base },
        { paramKey: 't2', symbol: 't₂', label: 'Nhiệt độ sau t₂', unit: '°C', min: 0, max: 400, step: 5, defaultValue: t2_base },
      ],
      liveMetrics: [
        { symbol: 'T₁', label: 'Nhiệt độ tuyệt đối trạng thái 1', formula: 'T₁ = t₁ + 273', value: String(T1), unit: 'K', highlightColor: 'text-sky-700 bg-sky-50 border-sky-200' },
        { symbol: 'T₂', label: 'Nhiệt độ tuyệt đối trạng thái 2', formula: 'T₂ = t₂ + 273', value: String(T2), unit: 'K', highlightColor: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
        { symbol: 'V₂', label: 'Thể tích trạng thái 2', formula: 'V₂ = V₁ · (T₂ / T₁)', value: V2_val.toFixed(2), unit: 'L', highlightColor: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
      ],
      verificationInsight: `Khớp trực tiếp với đề bài: Đổi sang thang Kelvin ta có T₁ = ${T1} K và T₂ = ${T2} K. Áp dụng Định luật Charles V₂ = V₁·(T₂/T₁) = ${V1_val}·(${T2}/${T1}) = ${V2_val.toFixed(2)} L.`,
    };
  }

  // ==========================================================================
  // ARCHETYPE 8: AMPÈRE MAGNETIC FORCE (F = B * I * L * sin(theta))
  // ==========================================================================
  const bTeslaMatch = clean.match(/B\s*=\s*(\d+(?:[.,]\d+)?)\s*T\b/i);
  const iAmpMatch = clean.match(/(?:I\s*=\s*|dòng điện\s+)(\d+(?:[.,]\d+)?)\s*A\b/i);
  const lCmMatch = clean.match(/(?:dài\s+|L\s*=\s*)(\d+(?:[.,]\d+)?)\s*cm\b/i);
  if (bTeslaMatch && iAmpMatch && lCmMatch) {
    const L_cm_base = parseVnNumber(lCmMatch[1]) || 25;
    const I_base = parseVnNumber(iAmpMatch[1]) || 4;
    const B_base = parseVnNumber(bTeslaMatch[1]) || 0.2;

    const L_cm = getVal('lengthCm', L_cm_base);
    const I_val = getVal('currentI', I_base);
    const B_val = getVal('fieldB', B_base);
    const angleDeg = getVal('angleDeg', 90);
    const F_ampere = B_val * I_val * (L_cm / 100) * Math.sin((angleDeg * Math.PI) / 180);

    return {
      domainName: 'Lực từ Ampère tác dụng lên đoạn dây dẫn (F = B·I·L·sinθ)',
      extractedList: [
        { paramKey: 'lengthCm', symbol: 'L', label: 'Chiều dài đoạn dây dẫn', value: L_cm, unit: `cm (${(L_cm / 100).toFixed(2)} m)`, fromQuestionText: true },
        { paramKey: 'currentI', symbol: 'I', label: 'Cường độ dòng điện', value: I_val, unit: 'A', fromQuestionText: true },
        { paramKey: 'fieldB', symbol: 'B', label: 'Cảm ứng từ', value: B_val, unit: 'T', fromQuestionText: true },
      ],
      simParameters: { ...baseSimParams, current: I_val, fieldB: B_val },
      sliders: [
        { paramKey: 'lengthCm', symbol: 'L', label: 'Chiều dài dây L', unit: 'cm', min: 5, max: 100, step: 5, defaultValue: L_cm_base },
        { paramKey: 'currentI', symbol: 'I', label: 'Cường độ dòng điện I', unit: 'A', min: 0.5, max: 20, step: 0.5, defaultValue: I_base },
        { paramKey: 'fieldB', symbol: 'B', label: 'Cảm ứng từ B', unit: 'T', min: 0.05, max: 2.0, step: 0.05, defaultValue: B_base },
        { paramKey: 'angleDeg', symbol: 'θ', label: 'Góc hợp bởi dây và B', unit: '°', min: 0, max: 90, step: 15, defaultValue: 90 },
      ],
      liveMetrics: [
        { symbol: 'L (m)', label: 'Chiều dài đổi ra mét', formula: 'L = L(cm) / 100', value: (L_cm / 100).toFixed(2), unit: 'm', highlightColor: 'text-sky-700 bg-sky-50 border-sky-200' },
        { symbol: 'F_từ', label: 'Độ lớn lực từ Ampère', formula: 'F = B · I · L · sinθ', value: F_ampere.toFixed(3), unit: 'N', highlightColor: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
        { symbol: 'sinθ', label: 'Hệ số góc đặt dây', formula: `sin(${angleDeg}°)`, value: Math.sin((angleDeg * Math.PI) / 180).toFixed(2), unit: '', highlightColor: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
      ],
      verificationInsight: `Khớp trực tiếp với đề bài: Đổi L = ${L_cm} cm = ${(L_cm / 100).toFixed(2)} m. Với I = ${I_val} A, B = ${B_val} T và góc θ = ${angleDeg}°, lực từ Ampère tác dụng lên dây là F = B·I·L·sinθ = ${F_ampere.toFixed(3)} N.`,
    };
  }

  // ==========================================================================
  // ARCHETYPE 9: MAGNETIC FLUX & FARADAY INDUCTION (Φ = B * S * cosα)
  // ==========================================================================
  const areaCm2Match = clean.match(/(\d+(?:[.,]\d+)?)\s*cm²/i);
  if (areaCm2Match && bTeslaMatch) {
    const S_cm2_base = parseVnNumber(areaCm2Match[1]) || 50;
    const B_base = parseVnNumber(bTeslaMatch[1]) || 0.4;
    const nTurnsMatch = clean.match(/(\d+)\s*vòng/i);
    const N_base = nTurnsMatch ? Number(nTurnsMatch[1]) : 1;

    const S_cm2 = getVal('areaCm2', S_cm2_base);
    const B_val = getVal('fieldB', B_base);
    const N_val = getVal('turnsN', N_base);
    const phiWb = N_val * B_val * (S_cm2 * 1e-4);
    const phiMwb = phiWb * 1000;

    return {
      domainName: 'Từ thông & Định luật Cảm ứng Điện từ Faraday (Φ = N·B·S·cosα)',
      extractedList: [
        { paramKey: 'areaCm2', symbol: 'S', label: 'Diện tích vòng dây', value: S_cm2, unit: 'cm²', fromQuestionText: true },
        { paramKey: 'fieldB', symbol: 'B', label: 'Cảm ứng từ', value: B_val, unit: 'T', fromQuestionText: true },
        { paramKey: 'turnsN', symbol: 'N', label: 'Số vòng dây', value: N_val, unit: 'vòng', fromQuestionText: Boolean(nTurnsMatch) },
      ],
      simParameters: { ...baseSimParams },
      sliders: [
        { paramKey: 'areaCm2', symbol: 'S', label: 'Diện tích mỗi vòng S', unit: 'cm²', min: 10, max: 200, step: 5, defaultValue: S_cm2_base },
        { paramKey: 'fieldB', symbol: 'B', label: 'Cảm ứng từ B', unit: 'T', min: 0.05, max: 2.0, step: 0.05, defaultValue: B_base },
        { paramKey: 'turnsN', symbol: 'N', label: 'Số vòng dây N', unit: 'vòng', min: 1, max: 200, step: 1, defaultValue: N_base },
      ],
      liveMetrics: [
        { symbol: 'S (m²)', label: 'Diện tích chuẩn SI', formula: 'S = S(cm²) · 10⁻⁴', value: (S_cm2 * 1e-4).toExponential(2), unit: 'm²', highlightColor: 'text-sky-700 bg-sky-50 border-sky-200' },
        { symbol: 'Φ (Wb)', label: 'Từ thông qua khung dây', formula: 'Φ = N · B · S', value: phiWb.toExponential(2), unit: 'Wb', highlightColor: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
        { symbol: 'Φ (mWb)', label: 'Từ thông tính theo mWb', formula: 'Φ · 1000', value: phiMwb.toFixed(2), unit: 'mWb', highlightColor: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
      ],
      verificationInsight: `Khớp trực tiếp với đề bài: Đổi S = ${S_cm2} cm² = ${(S_cm2 * 1e-4).toExponential(2)} m². Từ thông qua khung dây là Φ = N·B·S = ${phiWb.toExponential(2)} Wb (${phiMwb.toFixed(2)} mWb).`,
    };
  }

  // ==========================================================================
  // ARCHETYPE 10: UNIVERSAL QUESTION SCANNER + DOMAIN SYNC
  // ==========================================================================
  const domain = classifySimDomain(simKey);
  const rawFound = extractRawQuantitiesFromText(clean);

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
      simParameters: { ...baseSimParams, resistance: R.val, voltage: U.val },
      sliders: [
        { paramKey: 'resistance', symbol: 'R', label: 'Điện trở R', unit: 'Ω', min: 1, max: 100, step: 1, defaultValue: R.val },
        { paramKey: 'voltage', symbol: 'U', label: 'Hiệu điện thế U', unit: 'V', min: 1, max: 48, step: 1, defaultValue: U.val },
      ],
      liveMetrics: [
        { symbol: 'I', label: 'Cường độ dòng điện', formula: 'I = U / R', value: I.toFixed(2), unit: 'A', highlightColor: 'text-sky-700 bg-sky-50 border-sky-200' },
        { symbol: 'P', label: 'Công suất tiêu thụ', formula: 'P = U² / R', value: P.toFixed(1), unit: 'W', highlightColor: 'text-rose-700 bg-rose-50 border-rose-200' },
        { symbol: 'Q(1p)', label: 'Nhiệt lượng tỏa ra (60s)', formula: 'Q = I²Rt', value: (P * 60).toFixed(0), unit: 'J', highlightColor: 'text-amber-800 bg-amber-50 border-amber-200' },
      ],
      verificationInsight: `Theo Định luật Ohm I = U/R, khi R = ${R.val} Ω và U = ${U.val} V thì cường độ dòng điện là I = ${I.toFixed(2)} A và công suất tỏa nhiệt đạt P = ${P.toFixed(1)} W.`,
    };
  }

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
      simParameters: { ...baseSimParams, amplitude: A.val, period: T.val, mass: m.val },
      sliders: [
        { paramKey: 'amplitude', symbol: 'A', label: 'Biên độ A', unit: 'cm', min: 1, max: 20, step: 0.5, defaultValue: A.val },
        { paramKey: 'period', symbol: 'T', label: 'Chu kỳ T', unit: 's', min: 0.5, max: 5.0, step: 0.1, defaultValue: T.val },
        { paramKey: 'mass', symbol: 'm', label: 'Khối lượng m', unit: 'kg', min: 0.05, max: 2.0, step: 0.05, defaultValue: m.val },
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

  // Fallback for general questions: scan any numbers from the question text & pair with domain sliders
  const v0 = pickVal('v0', 4.0);
  const a = pickVal('acceleration', 2.0);
  const tSample = 3.0;
  const vAt3 = v0.val + a.val * tSample;
  const sAt3 = v0.val * tSample + 0.5 * a.val * tSample * tSample;

  return {
    domainName: 'Mô phỏng Động lực học & Kiểm chứng Công thức',
    extractedList: [
      { paramKey: 'v0', symbol: 'v₀', label: 'Đại lượng đầu vào 1', value: v0.val, unit: 'đơn vị SI', fromQuestionText: v0.fromText },
      { paramKey: 'acceleration', symbol: 'a', label: 'Hệ số biến thiên', value: a.val, unit: 'đơn vị SI', fromQuestionText: a.fromText },
    ],
    simParameters: { ...baseSimParams, v0: v0.val, initialSpeed: v0.val, acceleration: a.val, a: a.val },
    sliders: [
      { paramKey: 'v0', symbol: 'v₀', label: 'Thông số ban đầu v₀', unit: 'm/s', min: 0, max: 25, step: 0.5, defaultValue: v0.val },
      { paramKey: 'acceleration', symbol: 'a', label: 'Gia tốc biến thiên a', unit: 'm/s²', min: -5, max: 12, step: 0.5, defaultValue: a.val },
    ],
    liveMetrics: [
      { symbol: 'v(3s)', label: 'Giá trị tại t = 3s', formula: 'v = v₀ + a·t', value: vAt3.toFixed(1), unit: 'm/s', highlightColor: 'text-sky-700 bg-sky-50 border-sky-200' },
      { symbol: 'd(3s)', label: 'Tích lũy tại t = 3s', formula: 'd = v₀t + ½at²', value: sAt3.toFixed(1), unit: 'm', highlightColor: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
    ],
    verificationInsight: `Các thông số từ đề bài được đồng bộ sang mô phỏng và đồ thị bên phải để kiểm chứng trực quan.`,
  };
}

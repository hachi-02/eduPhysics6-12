/**
 * ============================================================================
 * INTERACTIVE PROBLEM-TO-SIM SANDBOX ENGINE (GRADES 6 - 12)
 * ============================================================================
 * Directly parses the active question's text (`question_text`) and solution
 * (`explanation`) to extract the EXACT numbers, variables, and formula of that
 * specific problem, linking them 1-to-1 with:
 *   1. Dynamic rewriting of the Question Text (`modifiedQuestionText`) when What-If sliders move
 *   2. Real-time Recalculated Answer (`originalAnswerSummary` vs `newAnswerSummary`)
 *   3. Live Comparative Problem Curve (`problemGraph`) showing Original Curve (dashed)
 *      vs Modified What-If Curve (solid) + Moving Answer Crosshair Point!
 */

export interface ExtractedPhysicsParam {
  paramKey: string;
  symbol: string;
  label: string;
  value: number;
  defaultValue: number;
  unit: string;
  fromQuestionText: boolean;
  rawMatchText?: string;
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

export interface ProblemGraphPoint {
  x: number;
  yOrig: number;
  yNew: number;
}

export interface ProblemSandboxGraphSpec {
  title: string;
  xLabel: string;
  xUnit: string;
  yLabel: string;
  yUnit: string;
  points: ProblemGraphPoint[];
  markerOrig: { x: number; y: number; label: string };
  markerNew: { x: number; y: number; label: string };
}

export interface ProblemSandboxExtractionResult {
  domainName: string;
  modifiedQuestionText: string;
  originalAnswerLabel: string;
  newAnswerLabel: string;
  extractedList: ExtractedPhysicsParam[];
  simParameters: Record<string, number>;
  sliders: SandboxSliderSpec[];
  liveMetrics: LiveSandboxMetric[];
  verificationInsight: string;
  problemGraph: ProblemSandboxGraphSpec;
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

function formatVnNum(val: number): string {
  return String(Number(val.toFixed(4))).replace('.', ',');
}

function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

function makeSliderBounds(val: number, stepHint?: number): { min: number; max: number; step: number } {
  const abs = Math.abs(val);
  if (abs === 0) return { min: -50, max: 50, step: 1 };
  const step =
    stepHint ||
    (abs < 0.1 ? 0.005 : abs < 1 ? 0.05 : abs < 10 ? 0.5 : abs < 100 ? 1 : abs < 1000 ? 10 : 50);
  const min = val < 0 ? Math.floor(val * 2) : Math.max(step, Number((val * 0.25).toFixed(4)));
  const max = val < 0 ? Math.ceil(Math.abs(val) * 2) : Number((val * 2.5).toFixed(4));
  return { min, max, step };
}

/**
 * Replace numbers in the original question stem when a user moves a What-If slider
 */
function rewriteQuestionStem(
  rawStem: string,
  replacements: Array<{ rawToken?: string; oldVal: number; newVal: number; unit: string }>
): string {
  let out = rawStem;
  for (const r of replacements) {
    if (Math.abs(r.newVal - r.oldVal) < 1e-6) continue;
    const newFormatted = `[${formatVnNum(r.newVal)} ${r.unit} (Đề gốc: ${formatVnNum(r.oldVal)} ${r.unit})]`;
    if (r.rawToken && out.includes(r.rawToken)) {
      out = out.replace(r.rawToken, newFormatted);
    }
  }
  return out;
}

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
 * Note: questionText can be passed as just question_text or question_text + " ||| " + explanation
 */
export function buildProblemSandboxState(
  questionText: string,
  simKey: string,
  baseSimParams: Record<string, any> = {},
  overrideParams: Record<string, number> = {}
): ProblemSandboxExtractionResult {
  const parts = (questionText || '').split('|||');
  const stemOnly = parts[0] || '';
  const fullClean = (questionText || '')
    .replace(/\\text\{([^}]*)\}/g, '$1')
    .replace(/\\,/g, ' ');

  const getVal = (key: string, defaultVal: number): number => {
    return overrideParams[key] !== undefined ? overrideParams[key] : defaultVal;
  };

  // ==========================================================================
  // ARCHETYPE 1: RADIOACTIVE DECAY (T = ... ngày/năm/giờ/phút, m0 / N0, t = ...)
  // ==========================================================================
  const halfLifeMatch = stemOnly.match(
    /chu\s*k[ỳì]\s*bán\s*rã\s*(?:T\s*=\s*)?((\d+(?:[.,]\d+)?)\s*(ngày|năm|giờ|phút|giây|s))\b/i
  );
  if (halfLifeMatch) {
    const rawTToken = halfLifeMatch[1];
    const T_base = parseVnNumber(halfLifeMatch[2]) || 8;
    const tUnit = halfLifeMatch[3];
    const m0Match = stemOnly.match(/(?:ban đầu có|khối lượng ban đầu|m_?0\s*=\s*)[^0-9]{0,20}((\d+(?:[.,]\d+)?)\s*(g|mg|kg))\b/i);
    const timeMatches = Array.from(
      stemOnly.matchAll(/(?:sau\s+|thời gian\s+t\s*=\s*)((\d+(?:[.,]\d+)?)\s*(ngày|năm|giờ|phút|giây|s))\b/gi)
    );

    const m0_base = m0Match ? parseVnNumber(m0Match[2]) || 100 : 100;
    const mUnit = m0Match ? m0Match[3] : 'g';
    const t_base = timeMatches.length > 0 ? parseVnNumber(timeMatches[0][2]) || T_base * 2 : T_base * 2;

    const T_val = getVal('halfLife', T_base);
    const m0_val = getVal('initialCount', m0_base);
    const t_val = getVal('elapsedTime', Number(t_base.toFixed(1)));

    const origRemain = m0_base * Math.pow(2, -t_base / T_base);
    const numPeriods = t_val / T_val;
    const mRemain = m0_val * Math.pow(2, -numPeriods);
    const mDecayed = m0_val - mRemain;

    const bT = makeSliderBounds(T_base);
    const bM0 = makeSliderBounds(m0_base, 10);
    const bTime = makeSliderBounds(Math.max(1, Number(t_base.toFixed(1))));

    const modifiedQuestionText = rewriteQuestionStem(stemOnly, [
      { rawToken: rawTToken, oldVal: T_base, newVal: T_val, unit: tUnit },
      { rawToken: m0Match?.[1], oldVal: m0_base, newVal: m0_val, unit: mUnit },
      { rawToken: timeMatches[0]?.[1], oldVal: t_base, newVal: t_val, unit: tUnit },
    ]);

    const tMaxGraph = Math.max(t_base * 1.5, t_val * 1.3, T_base * 4);
    const graphPoints: ProblemGraphPoint[] = [];
    for (let i = 0; i <= 40; i++) {
      const tx = Number(((tMaxGraph * i) / 40).toFixed(2));
      graphPoints.push({
        x: tx,
        yOrig: m0_base * Math.pow(2, -tx / T_base),
        yNew: m0_val * Math.pow(2, -tx / T_val),
      });
    }

    return {
      domainName: 'Định luật Phóng xạ & Chu kỳ Bán rã',
      modifiedQuestionText,
      originalAnswerLabel: `m_còn_lại = ${formatVnNum(origRemain)} ${mUnit} (sau ${formatVnNum(t_base / T_base)} chu kỳ)`,
      newAnswerLabel: `m_còn_lại = ${formatVnNum(mRemain)} ${mUnit} (sau ${formatVnNum(numPeriods)} chu kỳ)`,
      extractedList: [
        { paramKey: 'halfLife', symbol: 'T', label: 'Chu kỳ bán rã', value: T_val, defaultValue: T_base, unit: tUnit, fromQuestionText: true },
        { paramKey: 'initialCount', symbol: 'm₀', label: 'Khối lượng ban đầu', value: m0_val, defaultValue: m0_base, unit: mUnit, fromQuestionText: Boolean(m0Match) },
        { paramKey: 'elapsedTime', symbol: 't', label: 'Thời gian phân rã', value: t_val, defaultValue: t_base, unit: tUnit, fromQuestionText: timeMatches.length > 0 },
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
      ],
      verificationInsight: `Với T = ${T_val} ${tUnit}, m₀ = ${m0_val} ${mUnit} và t = ${t_val} ${tUnit}, lượng chất còn lại trên đường cong phân rã là m(t) = ${mRemain.toFixed(2)} ${mUnit}.`,
      problemGraph: {
        title: `Đồ thị Phân rã Phóng xạ m(t) theo Đề bài (${mUnit})`,
        xLabel: 'Thời gian t',
        xUnit: tUnit,
        yLabel: 'Khối lượng còn lại m',
        yUnit: mUnit,
        points: graphPoints,
        markerOrig: { x: t_base, y: origRemain, label: `Đề gốc: (${t_base} ${tUnit}, ${origRemain.toFixed(1)} ${mUnit})` },
        markerNew: { x: t_val, y: mRemain, label: `Đề mới: (${t_val} ${tUnit}, ${mRemain.toFixed(1)} ${mUnit})` },
      },
    };
  }

  // ==========================================================================
  // ARCHETYPE 2: KELVIN <-> CELSIUS TEMPERATURE CONVERSION
  // ==========================================================================
  if (
    (fullClean.includes('Kelvin') || fullClean.includes('Celsius') || fullClean.includes('Fahrenheit')) &&
    (stemOnly.match(/\d+\s*K\b/) || stemOnly.match(/-?\d+\s*°C/))
  ) {
    const kMatch = stemOnly.match(/((\d+(?:[.,]\d+)?)\s*K)\b/);
    const cMatch = stemOnly.match(/((-?\d+(?:[.,]\d+)?)\s*°C)/);
    const isInputKelvin = Boolean(kMatch && !cMatch);

    const k_base = kMatch ? parseVnNumber(kMatch[2]) || 6000 : (parseVnNumber(cMatch?.[2] || '27') || 27) + 273.15;
    const c_base = Number((k_base - 273.15).toFixed(2));

    const c_val = getVal('celsius', c_base);
    const k_val = Number((c_val + 273.15).toFixed(2));
    const f_val = Number((c_val * 1.8 + 32).toFixed(1));

    const modifiedQuestionText = isInputKelvin
      ? rewriteQuestionStem(stemOnly, [{ rawToken: kMatch?.[1], oldVal: k_base, newVal: k_val, unit: 'K' }])
      : rewriteQuestionStem(stemOnly, [{ rawToken: cMatch?.[1], oldVal: c_base, newVal: c_val, unit: '°C' }]);

    const graphPoints: ProblemGraphPoint[] = [];
    const span = Math.max(500, Math.abs(c_base) * 1.5, Math.abs(c_val) * 1.3);
    for (let i = 0; i <= 30; i++) {
      const cx = Number(((-273.15 + ((span + 273.15) * i) / 30)).toFixed(1));
      graphPoints.push({
        x: cx,
        yOrig: cx + 273.15,
        yNew: cx + 273.15,
      });
    }

    return {
      domainName: 'Chuyển đổi Thang Nhiệt độ (Celsius • Kelvin • Fahrenheit)',
      modifiedQuestionText,
      originalAnswerLabel: isInputKelvin ? `t = ${formatVnNum(c_base)} °C` : `T = ${formatVnNum(k_base)} K`,
      newAnswerLabel: isInputKelvin ? `t = ${formatVnNum(c_val)} °C` : `T = ${formatVnNum(k_val)} K`,
      extractedList: [
        { paramKey: 'celsius', symbol: 't (°C)', label: 'Nhiệt độ Celsius', value: c_val, defaultValue: c_base, unit: '°C', fromQuestionText: true },
        { paramKey: 'temperature', symbol: 'T (K)', label: 'Nhiệt độ Kelvin', value: k_val, defaultValue: k_base, unit: 'K', fromQuestionText: true },
      ],
      simParameters: { ...baseSimParams, temperature: clamp(k_val, 100, 1000), mass: 1, power: 1000 },
      sliders: [
        { paramKey: 'celsius', symbol: 't', label: 'Thay đổi Nhiệt độ trong đề (t)', unit: '°C', min: -273, max: Math.max(1000, Math.round(c_base * 1.5)), step: 10, defaultValue: c_base },
      ],
      liveMetrics: [
        { symbol: 't (°C)', label: 'Thang Celsius', formula: 't = T(K) - 273,15', value: c_val.toFixed(2), unit: '°C', highlightColor: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
        { symbol: 'T (K)', label: 'Thang Kelvin tuyệt đối', formula: 'T = t(°C) + 273,15', value: k_val.toFixed(2), unit: 'K', highlightColor: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
        { symbol: 't (°F)', label: 'Thang Fahrenheit', formula: 't_F = 1,8·t(°C) + 32', value: f_val.toFixed(1), unit: '°F', highlightColor: 'text-amber-800 bg-amber-50 border-amber-200' },
      ],
      verificationInsight: `Khi nhiệt độ trong đề bài là t = ${c_val} °C (tương ứng T = ${k_val} K), điểm trạng thái dịch chuyển dọc theo đường thẳng T(K) = t(°C) + 273,15.`,
      problemGraph: {
        title: 'Đồ thị Quy đổi Tuyến tính T(K) theo t(°C)',
        xLabel: 'Nhiệt độ t',
        xUnit: '°C',
        yLabel: 'Nhiệt độ tuyệt đối T',
        yUnit: 'K',
        points: graphPoints,
        markerOrig: { x: c_base, y: k_base, label: `Đề gốc: (${c_base} °C, ${k_base} K)` },
        markerNew: { x: c_val, y: k_val, label: `Đề mới: (${c_val} °C, ${k_val} K)` },
      },
    };
  }

  // ==========================================================================
  // ARCHETYPE 3: FIRST LAW OF THERMODYNAMICS (ΔU = A + Q)
  // ==========================================================================
  if (fullClean.includes('ΔU') || fullClean.includes('nội năng')) {
    const aUnsigned = stemOnly.match(/công\s+((\d+(?:[.,]\d+)?)\s*J)/i);
    const qUnsigned = stemOnly.match(/nhiệt lượng\s+((\d+(?:[.,]\d+)?)\s*J)/i);

    const aSign = stemOnly.includes('thực hiện một công') || stemOnly.includes('sinh công') ? -1 : 1;
    const qSign = stemOnly.includes('truyền ra') || stemOnly.includes('tỏa') ? -1 : 1;

    const A_mag_base = aUnsigned ? parseVnNumber(aUnsigned[2]) || 80 : 80;
    const Q_mag_base = qUnsigned ? parseVnNumber(qUnsigned[2]) || 25 : 25;

    const A_mag = getVal('workMag', A_mag_base);
    const Q_mag = getVal('heatMag', Q_mag_base);

    const A_orig = aSign * A_mag_base;
    const Q_orig = qSign * Q_mag_base;
    const deltaU_orig = A_orig + Q_orig;

    const A_val = aSign * A_mag;
    const Q_val = qSign * Q_mag;
    const deltaU = A_val + Q_val;

    const modifiedQuestionText = rewriteQuestionStem(stemOnly, [
      { rawToken: aUnsigned?.[1], oldVal: A_mag_base, newVal: A_mag, unit: 'J' },
      { rawToken: qUnsigned?.[1], oldVal: Q_mag_base, newVal: Q_mag, unit: 'J' },
    ]);

    const graphPoints: ProblemGraphPoint[] = [];
    for (let i = 0; i <= 30; i++) {
      const qx = -200 + (400 * i) / 30;
      graphPoints.push({
        x: Number(qx.toFixed(0)),
        yOrig: A_orig + qx,
        yNew: A_val + qx,
      });
    }

    return {
      domainName: 'Định luật I Nhiệt động lực học (ΔU = A + Q)',
      modifiedQuestionText,
      originalAnswerLabel: `ΔU = ${deltaU_orig >= 0 ? '+' : ''}${formatVnNum(deltaU_orig)} J`,
      newAnswerLabel: `ΔU = ${deltaU >= 0 ? '+' : ''}${formatVnNum(deltaU)} J`,
      extractedList: [
        { paramKey: 'workMag', symbol: '|A|', label: 'Độ lớn công trao đổi', value: A_mag, defaultValue: A_mag_base, unit: 'J', fromQuestionText: true },
        { paramKey: 'heatMag', symbol: '|Q|', label: 'Độ lớn nhiệt lượng', value: Q_mag, defaultValue: Q_mag_base, unit: 'J', fromQuestionText: true },
      ],
      simParameters: { ...baseSimParams, power: Math.max(200, Math.abs(Q_val) * 20), mass: 1 },
      sliders: [
        { paramKey: 'workMag', symbol: '|A|', label: 'Độ lớn công trong đề', unit: 'J', min: 10, max: 500, step: 5, defaultValue: A_mag_base },
        { paramKey: 'heatMag', symbol: '|Q|', label: 'Độ lớn nhiệt lượng trong đề', unit: 'J', min: 5, max: 500, step: 5, defaultValue: Q_mag_base },
      ],
      liveMetrics: [
        { symbol: 'A', label: 'Công cơ học (kèm dấu)', formula: A_val >= 0 ? 'Nhận công (A > 0)' : 'Sinh công (A < 0)', value: `${A_val >= 0 ? '+' : ''}${A_val}`, unit: 'J', highlightColor: 'text-sky-700 bg-sky-50 border-sky-200' },
        { symbol: 'Q', label: 'Nhiệt lượng (kèm dấu)', formula: Q_val >= 0 ? 'Nhận nhiệt (Q > 0)' : 'Tỏa nhiệt (Q < 0)', value: `${Q_val >= 0 ? '+' : ''}${Q_val}`, unit: 'J', highlightColor: 'text-amber-800 bg-amber-50 border-amber-200' },
        { symbol: 'ΔU', label: 'Độ biến thiên Nội năng', formula: 'ΔU = A + Q', value: `${deltaU >= 0 ? '+' : ''}${deltaU}`, unit: 'J', highlightColor: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
      ],
      verificationInsight: `Khi thay số trên đề bài thành |A| = ${A_mag} J (${A_val >= 0 ? '+' : ''}${A_val} J) và |Q| = ${Q_mag} J (${Q_val >= 0 ? '+' : ''}${Q_val} J), độ biến thiên nội năng là ΔU = A + Q = ${deltaU >= 0 ? '+' : ''}${deltaU} J.`,
      problemGraph: {
        title: 'Đồ thị Độ biến thiên Nội năng ΔU theo Nhiệt lượng Q',
        xLabel: 'Nhiệt lượng Q',
        xUnit: 'J',
        yLabel: 'Biến thiên nội năng ΔU',
        yUnit: 'J',
        points: graphPoints,
        markerOrig: { x: Q_orig, y: deltaU_orig, label: `Đề gốc: ΔU = ${deltaU_orig} J` },
        markerNew: { x: Q_val, y: deltaU, label: `Đề mới: ΔU = ${deltaU} J` },
      },
    };
  }

  // ==========================================================================
  // ARCHETYPE 4: CALORIMETRY Q = m * c * (t2 - t1)
  // ==========================================================================
  const cHeatMatch = stemOnly.match(/c\s*=\s*(\d+(?:[.,]\d+)?)\s*J\/\(kg/i);
  const tempMatches = Array.from(stemOnly.matchAll(/((-?\d+(?:[.,]\d+)?)\s*°C)/g));
  if (cHeatMatch && tempMatches.length >= 2) {
    const mMatch = stemOnly.match(/((\d+(?:[.,]\d+)?)\s*kg)/i);
    const m_base = mMatch ? parseVnNumber(mMatch[2]) || 2 : 2;
    const c_base = parseVnNumber(cHeatMatch[1]) || 4180;
    const t1_base = parseVnNumber(tempMatches[0][2]) ?? 25;
    const t2_base = parseVnNumber(tempMatches[1][2]) ?? 100;

    const m_val = getVal('mass', m_base);
    const t1_val = getVal('t1', t1_base);
    const t2_val = getVal('t2', t2_base);
    const deltaT_orig = t2_base - t1_base;
    const Q_orig_kj = (m_base * c_base * deltaT_orig) / 1000;

    const deltaT = t2_val - t1_val;
    const Q_joule = m_val * c_base * deltaT;
    const Q_kj = Q_joule / 1000;

    const modifiedQuestionText = rewriteQuestionStem(stemOnly, [
      { rawToken: mMatch?.[1], oldVal: m_base, newVal: m_val, unit: 'kg' },
      { rawToken: tempMatches[0]?.[1], oldVal: t1_base, newVal: t1_val, unit: '°C' },
      { rawToken: tempMatches[1]?.[1], oldVal: t2_base, newVal: t2_val, unit: '°C' },
    ]);

    const graphPoints: ProblemGraphPoint[] = [];
    for (let i = 0; i <= 30; i++) {
      const tx = (100 * i) / 30;
      graphPoints.push({
        x: Number(tx.toFixed(1)),
        yOrig: (m_base * c_base * Math.max(0, tx - t1_base)) / 1000,
        yNew: (m_val * c_base * Math.max(0, tx - t1_val)) / 1000,
      });
    }

    return {
      domainName: 'Phương trình Nhiệt lượng Đun nóng Q = m·c·(t₂ - t₁)',
      modifiedQuestionText,
      originalAnswerLabel: `Q = ${formatVnNum(Q_orig_kj)} kJ (${(Q_orig_kj * 1000).toLocaleString('vi-VN')} J)`,
      newAnswerLabel: `Q = ${formatVnNum(Q_kj)} kJ (${Q_joule.toLocaleString('vi-VN')} J)`,
      extractedList: [
        { paramKey: 'mass', symbol: 'm', label: 'Khối lượng nước', value: m_val, defaultValue: m_base, unit: 'kg', fromQuestionText: true },
        { paramKey: 't1', symbol: 't₁', label: 'Nhiệt độ ban đầu', value: t1_val, defaultValue: t1_base, unit: '°C', fromQuestionText: true },
        { paramKey: 't2', symbol: 't₂', label: 'Nhiệt độ lúc sau', value: t2_val, defaultValue: t2_base, unit: '°C', fromQuestionText: true },
      ],
      simParameters: { ...baseSimParams, mass: m_val, power: 1000 },
      sliders: [
        { paramKey: 'mass', symbol: 'm', label: 'Khối lượng m trong đề', unit: 'kg', min: 0.5, max: 10, step: 0.5, defaultValue: m_base },
        { paramKey: 't1', symbol: 't₁', label: 'Nhiệt độ đầu t₁ trong đề', unit: '°C', min: 0, max: 80, step: 5, defaultValue: t1_base },
        { paramKey: 't2', symbol: 't₂', label: 'Nhiệt độ cuối t₂ trong đề', unit: '°C', min: 20, max: 100, step: 5, defaultValue: t2_base },
      ],
      liveMetrics: [
        { symbol: 'Δt', label: 'Độ tăng nhiệt độ', formula: 'Δt = t₂ - t₁', value: deltaT.toFixed(1), unit: '°C', highlightColor: 'text-sky-700 bg-sky-50 border-sky-200' },
        { symbol: 'Q (J)', label: 'Nhiệt lượng (Joule)', formula: 'Q = m · c · Δt', value: Q_joule.toFixed(0), unit: 'J', highlightColor: 'text-amber-800 bg-amber-50 border-amber-200' },
        { symbol: 'Q (kJ)', label: 'Nhiệt lượng (kJ)', formula: 'Q / 1000', value: Q_kj.toFixed(1), unit: 'kJ', highlightColor: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
      ],
      verificationInsight: `Khi đổi đề bài thành m = ${m_val} kg, đun từ t₁ = ${t1_val} °C lên t₂ = ${t2_val} °C, nhiệt lượng cần cung cấp là Q = ${Q_kj.toFixed(1)} kJ.`,
      problemGraph: {
        title: 'Đồ thị Nhiệt lượng Q (kJ) theo Nhiệt độ đun tới t₂ (°C)',
        xLabel: 'Nhiệt độ t₂',
        xUnit: '°C',
        yLabel: 'Nhiệt lượng Q',
        yUnit: 'kJ',
        points: graphPoints,
        markerOrig: { x: t2_base, y: Q_orig_kj, label: `Đề gốc: (${t2_base} °C, ${Q_orig_kj.toFixed(0)} kJ)` },
        markerNew: { x: t2_val, y: Q_kj, label: `Đề mới: (${t2_val} °C, ${Q_kj.toFixed(0)} kJ)` },
      },
    };
  }

  // ==========================================================================
  // ARCHETYPE 5: BOYLE'S LAW ISOTHERMAL (p1 * V1 = p2 * V2)
  // ==========================================================================
  const literMatches = Array.from(stemOnly.matchAll(/((\d+(?:[.,]\d+)?)\s*(?:L|lít))\b/gi));
  if (literMatches.length >= 2 && (fullClean.includes('đẳng nhiệt') || fullClean.includes('Boyle'))) {
    const V1_base = parseVnNumber(literMatches[0][2]) || 4;
    const V2_base = parseVnNumber(literMatches[1][2]) || 1.6;
    const atmMatch = stemOnly.match(/((\d+(?:[.,]\d+)?)\s*atm)\b/i);
    const p1_base = atmMatch ? parseVnNumber(atmMatch[2]) || 1 : 1.0;
    const pUnit = atmMatch ? 'atm' : '×10⁵ Pa';

    const V1_val = getVal('V1', V1_base);
    const p1_val = getVal('p1', p1_base);
    const V2_val = getVal('V2', V2_base);
    const p2_orig = (p1_base * V1_base) / Math.max(0.1, V2_base);
    const p2_val = (p1_val * V1_val) / Math.max(0.1, V2_val);

    const modifiedQuestionText = rewriteQuestionStem(stemOnly, [
      { rawToken: literMatches[0]?.[1], oldVal: V1_base, newVal: V1_val, unit: 'L' },
      { rawToken: literMatches[1]?.[1], oldVal: V2_base, newVal: V2_val, unit: 'L' },
      ...(atmMatch ? [{ rawToken: atmMatch[1], oldVal: p1_base, newVal: p1_val, unit: 'atm' }] : []),
    ]);

    const graphPoints: ProblemGraphPoint[] = [];
    const vMax = Math.max(V1_base * 1.5, V1_val * 1.5, V2_val * 1.5, 8);
    for (let i = 1; i <= 35; i++) {
      const vx = Number(((vMax * i) / 35).toFixed(2));
      graphPoints.push({
        x: vx,
        yOrig: (p1_base * V1_base) / vx,
        yNew: (p1_val * V1_val) / vx,
      });
    }

    return {
      domainName: 'Định luật Boyle (Đẳng nhiệt p₁·V₁ = p₂·V₂)',
      modifiedQuestionText,
      originalAnswerLabel: `p₂ = ${formatVnNum(p2_orig)} ${pUnit}`,
      newAnswerLabel: `p₂ = ${formatVnNum(p2_val)} ${pUnit}`,
      extractedList: [
        { paramKey: 'V1', symbol: 'V₁', label: 'Thể tích ban đầu', value: V1_val, defaultValue: V1_base, unit: 'L', fromQuestionText: true },
        { paramKey: 'p1', symbol: 'p₁', label: 'Áp suất ban đầu', value: p1_val, defaultValue: p1_base, unit: pUnit, fromQuestionText: true },
        { paramKey: 'V2', symbol: 'V₂', label: 'Thể tích lúc sau', value: V2_val, defaultValue: V2_base, unit: 'L', fromQuestionText: true },
      ],
      simParameters: { ...baseSimParams, temperature: 300, moles: (p1_val * V1_val) / 24.9 },
      sliders: [
        { paramKey: 'V1', symbol: 'V₁', label: 'Thể tích đầu V₁ trong đề', unit: 'L', min: 1, max: 15, step: 0.5, defaultValue: V1_base },
        { paramKey: 'p1', symbol: 'p₁', label: 'Áp suất đầu p₁ trong đề', unit: pUnit, min: 0.5, max: 10, step: 0.5, defaultValue: p1_base },
        { paramKey: 'V2', symbol: 'V₂', label: 'Thể tích sau V₂ trong đề', unit: 'L', min: 0.5, max: 15, step: 0.2, defaultValue: V2_base },
      ],
      liveMetrics: [
        { symbol: 'p₁·V₁', label: 'Tích số đẳng nhiệt', formula: 'const = p₁ · V₁', value: (p1_val * V1_val).toFixed(2), unit: `${pUnit}·L`, highlightColor: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
        { symbol: 'p₂', label: 'Áp suất trạng thái 2', formula: 'p₂ = (p₁·V₁) / V₂', value: p2_val.toFixed(2), unit: pUnit, highlightColor: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
      ],
      verificationInsight: `Trên đường hyperbol đẳng nhiệt p(V) = p₁V₁/V, tại thể tích V₂ = ${V2_val} L thì áp suất đạt p₂ = ${p2_val.toFixed(2)} ${pUnit}.`,
      problemGraph: {
        title: `Đường Đẳng nhiệt Boyle p(V) của Bài toán (${pUnit})`,
        xLabel: 'Thể tích V',
        xUnit: 'L',
        yLabel: 'Áp suất p',
        yUnit: pUnit,
        points: graphPoints,
        markerOrig: { x: V2_base, y: p2_orig, label: `Đề gốc: (${V2_base} L, ${p2_orig.toFixed(2)} ${pUnit})` },
        markerNew: { x: V2_val, y: p2_val, label: `Đề mới: (${V2_val} L, ${p2_val.toFixed(2)} ${pUnit})` },
      },
    };
  }

  // ==========================================================================
  // ARCHETYPE 6: AMPÈRE MAGNETIC FORCE (F = B * I * L * sin(theta))
  // ==========================================================================
  const bTeslaMatch = stemOnly.match(/B\s*=\s*((\d+(?:[.,]\d+)?)\s*T)\b/i);
  const iAmpMatch = stemOnly.match(/(?:I\s*=\s*|dòng điện\s+)((\d+(?:[.,]\d+)?)\s*A)\b/i);
  const lCmMatch = stemOnly.match(/(?:dài\s+|L\s*=\s*)((\d+(?:[.,]\d+)?)\s*cm)\b/i);
  if (bTeslaMatch && iAmpMatch && lCmMatch) {
    const L_cm_base = parseVnNumber(lCmMatch[2]) || 25;
    const I_base = parseVnNumber(iAmpMatch[2]) || 4;
    const B_base = parseVnNumber(bTeslaMatch[2]) || 0.2;

    const L_cm = getVal('lengthCm', L_cm_base);
    const I_val = getVal('currentI', I_base);
    const B_val = getVal('fieldB', B_base);
    const F_orig = B_base * I_base * (L_cm_base / 100);
    const F_ampere = B_val * I_val * (L_cm / 100);

    const modifiedQuestionText = rewriteQuestionStem(stemOnly, [
      { rawToken: lCmMatch[1], oldVal: L_cm_base, newVal: L_cm, unit: 'cm' },
      { rawToken: iAmpMatch[1], oldVal: I_base, newVal: I_val, unit: 'A' },
      { rawToken: bTeslaMatch[1], oldVal: B_base, newVal: B_val, unit: 'T' },
    ]);

    const graphPoints: ProblemGraphPoint[] = [];
    for (let i = 0; i <= 30; i++) {
      const ix = Number(((12 * i) / 30).toFixed(2));
      graphPoints.push({
        x: ix,
        yOrig: B_base * ix * (L_cm_base / 100),
        yNew: B_val * ix * (L_cm / 100),
      });
    }

    return {
      domainName: 'Lực từ Ampère tác dụng lên đoạn dây dẫn (F = B·I·L)',
      modifiedQuestionText,
      originalAnswerLabel: `F = ${formatVnNum(F_orig)} N`,
      newAnswerLabel: `F = ${formatVnNum(F_ampere)} N`,
      extractedList: [
        { paramKey: 'lengthCm', symbol: 'L', label: 'Chiều dài dây dẫn', value: L_cm, defaultValue: L_cm_base, unit: 'cm', fromQuestionText: true },
        { paramKey: 'currentI', symbol: 'I', label: 'Cường độ dòng điện', value: I_val, defaultValue: I_base, unit: 'A', fromQuestionText: true },
        { paramKey: 'fieldB', symbol: 'B', label: 'Cảm ứng từ', value: B_val, defaultValue: B_base, unit: 'T', fromQuestionText: true },
      ],
      simParameters: { ...baseSimParams, current: I_val, fieldB: B_val },
      sliders: [
        { paramKey: 'lengthCm', symbol: 'L', label: 'Chiều dài dây L trong đề', unit: 'cm', min: 5, max: 100, step: 5, defaultValue: L_cm_base },
        { paramKey: 'currentI', symbol: 'I', label: 'Dòng điện I trong đề', unit: 'A', min: 0.5, max: 12, step: 0.5, defaultValue: I_base },
        { paramKey: 'fieldB', symbol: 'B', label: 'Cảm ứng từ B trong đề', unit: 'T', min: 0.05, max: 1.5, step: 0.05, defaultValue: B_base },
      ],
      liveMetrics: [
        { symbol: 'L (m)', label: 'Chiều dài đổi ra mét', formula: 'L = L(cm) / 100', value: (L_cm / 100).toFixed(2), unit: 'm', highlightColor: 'text-sky-700 bg-sky-50 border-sky-200' },
        { symbol: 'F_từ', label: 'Độ lớn lực từ Ampère', formula: 'F = B · I · L', value: F_ampere.toFixed(3), unit: 'N', highlightColor: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
      ],
      verificationInsight: `Khi thay đổi thông số đề bài thành L = ${L_cm} cm, I = ${I_val} A, B = ${B_val} T, độ lớn lực từ Ampère mới là F = ${F_ampere.toFixed(3)} N.`,
      problemGraph: {
        title: 'Đồ thị Lực từ Ampère F (N) theo Cường độ dòng điện I (A)',
        xLabel: 'Cường độ dòng điện I',
        xUnit: 'A',
        yLabel: 'Lực từ F',
        yUnit: 'N',
        points: graphPoints,
        markerOrig: { x: I_base, y: F_orig, label: `Đề gốc: (${I_base} A, ${F_orig.toFixed(2)} N)` },
        markerNew: { x: I_val, y: F_ampere, label: `Đề mới: (${I_val} A, ${F_ampere.toFixed(2)} N)` },
      },
    };
  }

  // ==========================================================================
  // ARCHETYPE 7: OHM'S LAW & ELECTRIC POWER (U, R, I, P = U^2/R)
  // ==========================================================================
  const rMatch = stemOnly.match(/((\d+(?:[.,]\d+)?)\s*(?:\\Omega|Ω|ôm|ohm))\b/i);
  const uMatch = stemOnly.match(/((\d+(?:[.,]\d+)?)\s*V)\b/i);
  if (rMatch && (uMatch || classifySimDomain(simKey) === 'electric_circuit')) {
    const R_base = parseVnNumber(rMatch[2]) || 12;
    const U_base = uMatch ? parseVnNumber(uMatch[2]) || 12 : 12;

    const R_val = getVal('resistance', R_base);
    const U_val = getVal('voltage', U_base);
    const I_orig = U_base / Math.max(0.1, R_base);
    const I_val = U_val / Math.max(0.1, R_val);
    const P_val = (U_val * U_val) / Math.max(0.1, R_val);

    const modifiedQuestionText = rewriteQuestionStem(stemOnly, [
      { rawToken: rMatch[1], oldVal: R_base, newVal: R_val, unit: 'Ω' },
      ...(uMatch ? [{ rawToken: uMatch[1], oldVal: U_base, newVal: U_val, unit: 'V' }] : []),
    ]);

    const graphPoints: ProblemGraphPoint[] = [];
    const uMax = Math.max(U_base * 1.5, U_val * 1.5, 24);
    for (let i = 0; i <= 30; i++) {
      const ux = Number(((uMax * i) / 30).toFixed(1));
      graphPoints.push({
        x: ux,
        yOrig: ux / Math.max(0.1, R_base),
        yNew: ux / Math.max(0.1, R_val),
      });
    }

    return {
      domainName: 'Định luật Ohm & Công suất Mạch điện (I = U / R)',
      modifiedQuestionText,
      originalAnswerLabel: `I = ${formatVnNum(I_orig)} A (P = ${formatVnNum(U_base * I_orig)} W)`,
      newAnswerLabel: `I = ${formatVnNum(I_val)} A (P = ${formatVnNum(P_val)} W)`,
      extractedList: [
        { paramKey: 'resistance', symbol: 'R', label: 'Điện trở mạch', value: R_val, defaultValue: R_base, unit: 'Ω', fromQuestionText: true },
        { paramKey: 'voltage', symbol: 'U', label: 'Hiệu điện thế', value: U_val, defaultValue: U_base, unit: 'V', fromQuestionText: Boolean(uMatch) },
      ],
      simParameters: { ...baseSimParams, resistance: R_val, voltage: U_val },
      sliders: [
        { paramKey: 'resistance', symbol: 'R', label: 'Điện trở R trong đề', unit: 'Ω', min: 1, max: Math.max(50, R_base * 2), step: 1, defaultValue: R_base },
        { paramKey: 'voltage', symbol: 'U', label: 'Hiệu điện thế U trong đề', unit: 'V', min: 1, max: Math.max(48, U_base * 2), step: 1, defaultValue: U_base },
      ],
      liveMetrics: [
        { symbol: 'I', label: 'Cường độ dòng điện', formula: 'I = U / R', value: I_val.toFixed(2), unit: 'A', highlightColor: 'text-sky-700 bg-sky-50 border-sky-200' },
        { symbol: 'P', label: 'Công suất tỏa nhiệt', formula: 'P = U² / R', value: P_val.toFixed(1), unit: 'W', highlightColor: 'text-rose-700 bg-rose-50 border-rose-200' },
        { symbol: 'Q(1p)', label: 'Nhiệt lượng tỏa ra (60s)', formula: 'Q = I²Rt', value: (P_val * 60).toFixed(0), unit: 'J', highlightColor: 'text-amber-800 bg-amber-50 border-amber-200' },
      ],
      verificationInsight: `Khi thay số trong đề thành R = ${R_val} Ω và U = ${U_val} V, cường độ dòng điện là I = ${I_val.toFixed(2)} A và công suất tỏa nhiệt là P = ${P_val.toFixed(1)} W.`,
      problemGraph: {
        title: 'Đặc tuyến Vôn - Ampe I(U) của Bài toán',
        xLabel: 'Hiệu điện thế U',
        xUnit: 'V',
        yLabel: 'Cường độ I',
        yUnit: 'A',
        points: graphPoints,
        markerOrig: { x: U_base, y: I_orig, label: `Đề gốc: (${U_base} V, ${I_orig.toFixed(2)} A)` },
        markerNew: { x: U_val, y: I_val, label: `Đề mới: (${U_val} V, ${I_val.toFixed(2)} A)` },
      },
    };
  }

  // ==========================================================================
  // ARCHETYPE 8: GENERIC NUMBER TOKEN EXTRACTOR FROM QUESTION STEM
  // ==========================================================================
  // Extract all "<number> <unit>" tokens directly from the question stem!
  const tokenRegex = /((\d+(?:[.,]\d+)?)\s*(kg|g|cm|m\/s²|m\/s\^2|m\/s|km\/h|m|N\/m|N|Hz|s|V|A|\\Omega|Ω|W|kW|J|kJ|°C|K|L|atm|Pa|T|H|u|MeV))\b/g;
  const stemTokens = Array.from(stemOnly.matchAll(tokenRegex));

  if (stemTokens.length > 0) {
    const primary = stemTokens[0];
    const secondary = stemTokens[1];

    const p1_base = parseVnNumber(primary[2]) || 10;
    const p1_unit = primary[3].replace('\\Omega', 'Ω');
    const p2_base = secondary ? parseVnNumber(secondary[2]) || 2 : 2;
    const p2_unit = secondary ? secondary[3].replace('\\Omega', 'Ω') : 'đơn vị';

    const p1_val = getVal('param1', p1_base);
    const p2_val = getVal('param2', p2_base);

    const b1 = makeSliderBounds(p1_base);
    const b2 = makeSliderBounds(p2_base);

    const modifiedQuestionText = rewriteQuestionStem(stemOnly, [
      { rawToken: primary[1], oldVal: p1_base, newVal: p1_val, unit: p1_unit },
      ...(secondary
        ? [{ rawToken: secondary[1], oldVal: p2_base, newVal: p2_val, unit: p2_unit }]
        : []),
    ]);

    const ratioScale = (p1_val / (p1_base || 1)) * (secondary ? p2_val / (p2_base || 1) : 1);
    const graphPoints: ProblemGraphPoint[] = [];
    const xMax = Math.max(p1_base * 2, p1_val * 1.5, 10);
    for (let i = 0; i <= 30; i++) {
      const xx = Number(((xMax * i) / 30).toFixed(2));
      graphPoints.push({
        x: xx,
        yOrig: xx * p2_base,
        yNew: xx * p2_val,
      });
    }

    return {
      domainName: 'Mô phỏng Thực nghiệm theo Số liệu Đề bài',
      modifiedQuestionText,
      originalAnswerLabel: `Hệ số đề gốc = 1,00× (với ${formatVnNum(p1_base)} ${p1_unit})`,
      newAnswerLabel: `Tỉ lệ biến thiên đáp án = ${formatVnNum(ratioScale)}× (với ${formatVnNum(p1_val)} ${p1_unit})`,
      extractedList: [
        { paramKey: 'param1', symbol: 'X₁', label: `Đại lượng đề bài (${p1_unit})`, value: p1_val, defaultValue: p1_base, unit: p1_unit, fromQuestionText: true },
        ...(secondary
          ? [{ paramKey: 'param2', symbol: 'X₂', label: `Đại lượng đề bài (${p2_unit})`, value: p2_val, defaultValue: p2_base, unit: p2_unit, fromQuestionText: true }]
          : []),
      ],
      simParameters: {
        ...baseSimParams,
        mass: p1_val,
        amplitude: p1_val,
        voltage: p1_val,
        resistance: p2_val,
        force: p1_val,
        speed: p2_val,
        v0: p1_val,
        acceleration: p2_val,
      },
      sliders: [
        { paramKey: 'param1', symbol: 'X₁', label: `Số liệu thứ 1 trong đề (${p1_unit})`, unit: p1_unit, min: b1.min, max: b1.max, step: b1.step, defaultValue: p1_base },
        ...(secondary
          ? [{ paramKey: 'param2', symbol: 'X₂', label: `Số liệu thứ 2 trong đề (${p2_unit})`, unit: p2_unit, min: b2.min, max: b2.max, step: b2.step, defaultValue: p2_base }]
          : []),
      ],
      liveMetrics: [
        { symbol: 'X₁', label: 'Số liệu 1 đang nạp', formula: `Gốc: ${p1_base} ${p1_unit}`, value: String(p1_val), unit: p1_unit, highlightColor: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
        ...(secondary
          ? [{ symbol: 'X₂', label: 'Số liệu 2 đang nạp', formula: `Gốc: ${p2_base} ${p2_unit}`, value: String(p2_val), unit: p2_unit, highlightColor: 'text-emerald-700 bg-emerald-50 border-emerald-200' }]
          : []),
        { symbol: 'k_tỉ_lệ', label: 'Hệ số tỉ lệ so với đề gốc', formula: '(X₁·X₂) / (X₁_gốc·X₂_gốc)', value: ratioScale.toFixed(2), unit: 'lần', highlightColor: 'text-amber-800 bg-amber-50 border-amber-200' },
      ],
      verificationInsight: `Khi kéo thanh trượt thay đổi trực tiếp con số trong đề bài (${p1_base} ${p1_unit} → ${p1_val} ${p1_unit}), đường đồ thị thực nghiệm bên phải tách khỏi đường nét đứt (đề gốc) theo đúng tỉ lệ ${ratioScale.toFixed(2)} lần.`,
      problemGraph: {
        title: `Đồ thị Tương quan Đại lượng của Đề bài (${p1_unit})`,
        xLabel: `Biến số (${p1_unit})`,
        xUnit: p1_unit,
        yLabel: 'Đại lượng phụ thuộc Y',
        yUnit: 'đơn vị',
        points: graphPoints,
        markerOrig: { x: p1_base, y: p1_base * p2_base, label: `Đề gốc: X₁ = ${p1_base} ${p1_unit}` },
        markerNew: { x: p1_val, y: p1_val * p2_val, label: `Đề mới: X₁ = ${p1_val} ${p1_unit}` },
      },
    };
  }

  // Fallback for pure conceptual questions (no numbers in question stem)
  const v0_base = 5;
  const a_base = 2;
  const v0_val = getVal('v0', v0_base);
  const a_val = getVal('acceleration', a_base);
  const graphPoints: ProblemGraphPoint[] = [];
  for (let i = 0; i <= 30; i++) {
    const tx = Number(((6 * i) / 30).toFixed(2));
    graphPoints.push({
      x: tx,
      yOrig: v0_base + a_base * tx,
      yNew: v0_val + a_val * tx,
    });
  }

  return {
    domainName: 'Mô phỏng Minh họa Hiện tượng Lý thuyết',
    modifiedQuestionText: stemOnly,
    originalAnswerLabel: 'Câu hỏi lý thuyết định tính',
    newAnswerLabel: `Mô phỏng với v₀ = ${v0_val}, a = ${a_val}`,
    extractedList: [
      { paramKey: 'v0', symbol: 'v₀', label: 'Thông số minh họa 1', value: v0_val, defaultValue: v0_base, unit: 'đơn vị', fromQuestionText: false },
      { paramKey: 'acceleration', symbol: 'a', label: 'Thông số minh họa 2', value: a_val, defaultValue: a_base, unit: 'đơn vị', fromQuestionText: false },
    ],
    simParameters: { ...baseSimParams, v0: v0_val, acceleration: a_val },
    sliders: [
      { paramKey: 'v0', symbol: 'v₀', label: 'Thông số minh họa 1', unit: 'đơn vị', min: 1, max: 20, step: 1, defaultValue: v0_base },
      { paramKey: 'acceleration', symbol: 'a', label: 'Thông số minh họa 2', unit: 'đơn vị', min: 0.5, max: 10, step: 0.5, defaultValue: a_base },
    ],
    liveMetrics: [
      { symbol: 'Y(3s)', label: 'Giá trị tại t = 3s', formula: 'Y = v₀ + a·t', value: (v0_val + a_val * 3).toFixed(1), unit: 'đơn vị', highlightColor: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
    ],
    verificationInsight: 'Câu hỏi định tính: Bạn có thể kéo thanh trượt để quan sát sự biến đổi của đường đồ thị bên phải.',
    problemGraph: {
      title: 'Đồ thị Minh họa Quy luật Vật lý',
      xLabel: 'Thời gian t',
      xUnit: 's',
      yLabel: 'Đại lượng Y',
      yUnit: 'đơn vị',
      points: graphPoints,
      markerOrig: { x: 3, y: v0_base + a_base * 3, label: 'Chuẩn gốc' },
      markerNew: { x: 3, y: v0_val + a_val * 3, label: 'Giá trị mới' },
    },
  };
}

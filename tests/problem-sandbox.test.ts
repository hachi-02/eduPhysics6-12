import assert from 'node:assert';
import {
  classifySimDomain,
  extractRawQuantitiesFromText,
  buildProblemSandboxState,
  verifyStudentNumericAnswer,
} from '../lib/problem-sandbox';

console.log('Running Problem-to-Sim Sandbox unit tests...');

// 1. Test domain classification
assert.strictEqual(classifySimDomain('shm_oscillator_lab'), 'shm_wave');
assert.strictEqual(classifySimDomain('newton_second_law_lab'), 'newton_dynamics');
assert.strictEqual(classifySimDomain('ohm_circuit_lab'), 'electric_circuit');
assert.strictEqual(classifySimDomain('boyle_isotherm_lab'), 'ideal_gas');
assert.strictEqual(classifySimDomain('radioactive_decay_lab'), 'nuclear');

// 2. Test Vietnamese & LaTeX parameter extraction
const sampleShmText =
  'Một con lắc lò xo gồm vật nhỏ khối lượng m = 200 g dao động điều hòa với biên độ A = 8 cm và chu kì T = 1,5 s.';
const rawShm = extractRawQuantitiesFromText(sampleShmText);
assert.strictEqual(rawShm.mass?.value, 0.2);
assert.strictEqual(rawShm.amplitude?.value, 8);
assert.strictEqual(rawShm.period?.value, 1.5);

// 3. Test buildProblemSandboxState for Electric Circuit
const sampleCircuitText =
  'Đặt hiệu điện thế U = 18 V vào hai đầu điện trở R = 6 \\Omega. Tính cường độ dòng điện.';
const circuitState = buildProblemSandboxState(sampleCircuitText, 'ohm_circuit_lab');
assert.strictEqual(circuitState.simParameters.voltage, 18);
assert.strictEqual(circuitState.simParameters.resistance, 6);
assert.strictEqual(circuitState.liveMetrics[0].value, '3.00'); // I = 18 / 6 = 3.00 A

// 4. Test What-If slider override
const overriddenState = buildProblemSandboxState(
  sampleCircuitText,
  'ohm_circuit_lab',
  {},
  { resistance: 9 }
);
assert.strictEqual(overriddenState.simParameters.resistance, 9);
assert.strictEqual(overriddenState.liveMetrics[0].value, '2.00'); // I = 18 / 9 = 2.00 A
assert.strictEqual(overriddenState.targetNumericAnswer, 2);
assert.strictEqual(
  verifyStudentNumericAnswer('2', overriddenState.targetNumericAnswer, overriddenState.acceptableAnswers),
  true
);
assert.strictEqual(
  verifyStudentNumericAnswer('2,0 A', overriddenState.targetNumericAnswer, overriddenState.acceptableAnswers),
  true
);
assert.ok(overriddenState.dynamicExplanation.includes('I = U / R = 18 / 9 = 2 A'));

// 5. Test Thermal Calorimetry Original vs Modified Answer & Solution
const sampleHeat =
  'Đun nóng 2 kg nước từ 25 °C lên đến 100 °C. Cho nhiệt dung riêng c = 4180 J/(kg.K).|||Q = m.c.Δt = 627 000 J|||627 000 J (627 kJ)';
const heatOrig = buildProblemSandboxState(sampleHeat, 'thermal_lab');
assert.strictEqual(
  verifyStudentNumericAnswer('627', heatOrig.targetNumericAnswer, heatOrig.acceptableAnswers),
  true
);
assert.strictEqual(
  verifyStudentNumericAnswer('627 000', heatOrig.targetNumericAnswer, heatOrig.acceptableAnswers),
  true
);
const heatMod = buildProblemSandboxState(sampleHeat, 'thermal_lab', {}, { mass: 3 });
assert.strictEqual(
  verifyStudentNumericAnswer('940,5', heatMod.targetNumericAnswer, heatMod.acceptableAnswers),
  true
);
assert.ok(heatMod.dynamicExplanation.includes('940,5 kJ'));

// 6. Test General Archetype 8 exact unit-to-simulation slider sync & LaTeX cleaning
const sampleNewton =
  'Một lực $F = 35\\,\\text{N}$ tác dụng lên vật có khối lượng $m = 7\\,\\text{kg}$. Tính gia tốc của vật.|||a = F / m = 35 / 7 = 5 m/s²|||5 m/s²';
const newtonOrig = buildProblemSandboxState(sampleNewton, 'newton_second_law_lab');
assert.strictEqual(newtonOrig.simParameters.force, 35);
assert.strictEqual(newtonOrig.simParameters.pull, 35);
assert.strictEqual(newtonOrig.simParameters.m2, 7);
const newtonMod = buildProblemSandboxState(sampleNewton, 'newton_second_law_lab', {}, { param1: 70, param2: 10 });
assert.strictEqual(newtonMod.simParameters.force, 70);
assert.strictEqual(newtonMod.simParameters.pull, 70);
assert.strictEqual(newtonMod.simParameters.m2, 10);
assert.strictEqual(newtonMod.targetNumericAnswer, 7);

console.log('✅ All Problem-to-Sim Sandbox tests passed!');

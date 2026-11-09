import { describe, it, expect } from 'vitest';
import {
  classifySimDomain,
  extractRawQuantitiesFromText,
  buildProblemSandboxState,
  verifyStudentNumericAnswer,
} from '../lib/problem-sandbox';

describe('Problem-to-Sim Sandbox unit tests', () => {
  it('classifies simulation domains correctly', () => {
    expect(classifySimDomain('shm_oscillator_lab')).toBe('shm_wave');
    expect(classifySimDomain('newton_second_law_lab')).toBe('newton_dynamics');
    expect(classifySimDomain('ohm_circuit_lab')).toBe('electric_circuit');
    expect(classifySimDomain('boyle_isotherm_lab')).toBe('ideal_gas');
    expect(classifySimDomain('radioactive_decay_lab')).toBe('nuclear');
  });

  it('extracts Vietnamese & LaTeX parameters accurately', () => {
    const sampleShmText =
      'Một con lắc lò xo gồm vật nhỏ khối lượng m = 200 g dao động điều hòa với biên độ A = 8 cm và chu kì T = 1,5 s.';
    const rawShm = extractRawQuantitiesFromText(sampleShmText);
    expect(rawShm.mass?.value).toBe(0.2);
    expect(rawShm.amplitude?.value).toBe(8);
    expect(rawShm.period?.value).toBe(1.5);
  });

  it('builds state for Electric Circuit archetype', () => {
    const sampleCircuitText =
      'Đặt hiệu điện thế U = 18 V vào hai đầu điện trở R = 6 \\Omega. Tính cường độ dòng điện.';
    const circuitState = buildProblemSandboxState(sampleCircuitText, 'ohm_circuit_lab');
    expect(circuitState.simParameters.voltage).toBe(18);
    expect(circuitState.simParameters.resistance).toBe(6);
    expect(circuitState.liveMetrics[0].value).toBe('3.00'); // I = 18 / 6 = 3.00 A
  });

  it('handles What-If slider overrides cleanly', () => {
    const sampleCircuitText =
      'Đặt hiệu điện thế U = 18 V vào hai đầu điện trở R = 6 \\Omega. Tính cường độ dòng điện.';
    const overriddenState = buildProblemSandboxState(
      sampleCircuitText,
      'ohm_circuit_lab',
      {},
      { resistance: 9 }
    );
    expect(overriddenState.simParameters.resistance).toBe(9);
    expect(overriddenState.liveMetrics[0].value).toBe('2.00'); // I = 18 / 9 = 2.00 A
    expect(overriddenState.targetNumericAnswer).toBe(2);
    expect(
      verifyStudentNumericAnswer('2', overriddenState.targetNumericAnswer, overriddenState.acceptableAnswers)
    ).toBe(true);
    expect(
      verifyStudentNumericAnswer('2,0 A', overriddenState.targetNumericAnswer, overriddenState.acceptableAnswers)
    ).toBe(true);
    expect(overriddenState.dynamicExplanation).toContain('I = U / R = 18 / 9 = 2 A');
  });

  it('calculates Calorimetry Heat Equation Q = m*c*dt correctly', () => {
    const sampleHeat =
      'Đun nóng 2 kg nước từ 25 °C lên đến 100 °C. Cho nhiệt dung riêng c = 4180 J/(kg.K).|||Q = m.c.Δt = 627 000 J|||627 000 J (627 kJ)';
    const heatOrig = buildProblemSandboxState(sampleHeat, 'thermal_lab');
    expect(
      verifyStudentNumericAnswer('627', heatOrig.targetNumericAnswer, heatOrig.acceptableAnswers)
    ).toBe(true);
    expect(
      verifyStudentNumericAnswer('627 000', heatOrig.targetNumericAnswer, heatOrig.acceptableAnswers)
    ).toBe(true);

    const heatMod = buildProblemSandboxState(sampleHeat, 'thermal_lab', {}, { mass: 3 });
    expect(
      verifyStudentNumericAnswer('940,5', heatMod.targetNumericAnswer, heatMod.acceptableAnswers)
    ).toBe(true);
    expect(heatMod.dynamicExplanation).toContain('940,5 kJ');
  });

  it('scales General Archetype 8 with exact unit-to-simulation sync and _bounds', () => {
    const sampleNewton =
      'Một lực $F = 35\\,\\text{N}$ tác dụng lên vật có khối lượng $m = 7\\,\\text{kg}$. Tính gia tốc của vật.|||a = F / m = 35 / 7 = 5 m/s²|||5 m/s²';
    const newtonOrig = buildProblemSandboxState(sampleNewton, 'newton_second_law_lab');
    expect(newtonOrig.simParameters.force).toBe(35);
    expect(newtonOrig.simParameters.pull).toBe(35);
    expect(newtonOrig.simParameters.m2).toBe(7);

    const newtonMod = buildProblemSandboxState(sampleNewton, 'newton_second_law_lab', {}, { param1: 70, param2: 10 });
    expect(newtonMod.simParameters.force).toBe(70);
    expect(newtonMod.simParameters.pull).toBe(70);
    expect(newtonMod.simParameters.m2).toBe(10);
    expect(newtonMod.targetNumericAnswer).toBe(7);
    expect(newtonMod.isConceptual).toBe(false);

    expect(newtonMod.simParameters._bounds).toBeDefined();
    expect(newtonMod.simParameters._bounds.force).toBeDefined();
    expect(newtonMod.simParameters._bounds.mass).toBeDefined();
    expect(typeof newtonMod.simParameters._bounds.force.min).toBe('number');
    expect(typeof newtonMod.simParameters._bounds.force.max).toBe('number');
  });

  it('detects pure conceptual / theory questions without sliders', () => {
    const sampleTheory =
      'Phát biểu nào sau đây là đúng khi nói về hiện tượng quang điện trong?|||Hiện tượng giải phóng electron liên kết thành electron dẫn.|||Hiện tượng giải phóng electron liên kết thành electron dẫn';
    const theoryState = buildProblemSandboxState(sampleTheory, 'photoelectric_lab');
    expect(theoryState.isConceptual).toBe(true);
    expect(theoryState.sliders.length).toBe(0);
  });

  it('converts Kelvin to Celsius bounds without negative Kelvin or pinned sliders', () => {
    const sampleKelvinSun =
      'Nhiệt độ bề mặt của Mặt Trời là khoảng 6000 K. Tính nhiệt độ này theo thang Celsius.|||t = T - 273,15 = 6000 - 273,15 = 5726,85 °C|||5727 °C';
    const kelvinState = buildProblemSandboxState(sampleKelvinSun, 'g12_molecular_states_lab');
    expect(kelvinState.simParameters.temperature).toBe(6000);
    expect(kelvinState.simParameters.tempC).toBe(5726.85);
    expect(kelvinState.simParameters.mode).not.toBe('bimetallic');
    expect(kelvinState.simParameters._bounds.kelvinInput.min).toBeGreaterThanOrEqual(100);
    expect(kelvinState.simParameters._bounds.stripTemp.min).toBeLessThan(0);
    expect(kelvinState.simParameters._bounds.tempC.min).toBeLessThan(0);

    // Scenario: User slides to 150 K
    const kelvin150State = buildProblemSandboxState(sampleKelvinSun, 'g12_molecular_states_lab', {}, { kelvinInput: 150 });
    expect(kelvin150State.simParameters.temperature).toBe(150);
    expect(kelvin150State.simParameters.tempC).toBe(-123.15);
    expect(kelvin150State.simParameters._bounds.tempC.min).toBeLessThanOrEqual(-123.15);
  });

  it('supports First Law of Thermodynamics signed bounds for work and heat', () => {
    const sampleFirstLaw =
      'Người ta thực hiện một công 600 J để nén khí trong xi lanh, khí truyền ra môi trường nhiệt lượng 670 J. Tính độ biến thiên nội năng.|||ΔU = A + Q = 600 - 670 = -70 J|||-70 J';
    const firstLawState = buildProblemSandboxState(sampleFirstLaw, 'g12_thermodynamics_first_law_lab');
    expect(firstLawState.simParameters.workA).toBe(600);
    expect(firstLawState.simParameters.heatQ).toBe(-670);
    expect(firstLawState.simParameters._bounds.workA.min).toBeLessThan(0);
    expect(firstLawState.simParameters._bounds.heatQ.min).toBeLessThan(0);
  });
});

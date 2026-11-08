import { describe, it, expect } from 'vitest';
import { getGraphSpecForSimKey } from '../components/PhysicsGraphEngine';

describe('PhysicsGraphEngine & Domain Graph Specs', () => {
  it('generates correct SHM & wave curves for Grade 11 oscillations', () => {
    const spec = getGraphSpecForSimKey('harmonic_shm_oscillator_lab', { amplitude: 6, period: 2 });
    expect(spec.domainTitle).toContain('Dao động Điều hòa');
    expect(spec.series.some((s) => s.id === 'x')).toBe(true);
    expect(spec.series.some((s) => s.id === 'v')).toBe(true);
    expect(spec.series.some((s) => s.id === 'Wd')).toBe(true);

    // At t = 0: x = A = 6, v = 0
    const xSeries = spec.series.find((s) => s.id === 'x')!;
    const vSeries = spec.series.find((s) => s.id === 'v')!;
    expect(xSeries.calculate(0, {})).toBeCloseTo(6, 4);
    expect(vSeries.calculate(0, {})).toBeCloseTo(0, 4);
  });

  it('generates kinematics motion graphs for Grade 10 motion', () => {
    const spec = getGraphSpecForSimKey('kinematics_motion_lab', { v0: 3, a: 2 });
    expect(spec.domainTitle).toContain('Chuyển động');
    const vSeries = spec.series.find((s) => s.id === 'v')!;
    const sSeries = spec.series.find((s) => s.id === 's')!;

    // v = v0 + a*t -> v(2) = 3 + 2*2 = 7
    expect(vSeries.calculate(2, {})).toBe(7);
    // s = v0*t + 0.5*a*t^2 -> s(2) = 3*2 + 0.5*2*4 = 10
    expect(sSeries.calculate(2, {})).toBe(10);
  });

  it('generates ideal gas isotherm curve for Grade 12 gas laws', () => {
    const spec = getGraphSpecForSimKey('ideal_gas_laws_lab', { temperature: 300, moles: 1 });
    expect(spec.domainTitle).toContain('Khí lý tưởng');
    expect(spec.series.length).toBeGreaterThanOrEqual(2);
    expect(spec.xUnit).toBe('Lít');
  });

  it('generates Ohm law I-U curve for electricity labs', () => {
    const spec = getGraphSpecForSimKey('ohm_resistor_lab', { resistance: 10 });
    expect(spec.domainTitle).toContain('Vôn - Ampe');
    const iSeries = spec.series.find((s) => s.id === 'I')!;
    // I = U / R -> I(10) = 10 / 10 = 1A
    expect(iSeries.calculate(10, {})).toBe(1);
  });

  it('generates radioactive decay curve for nuclear physics', () => {
    const spec = getGraphSpecForSimKey('radioactive_halflife_lab', { initialCount: 1000, halfLife: 2 });
    expect(spec.domainTitle).toContain('Phóng xạ');
    const nSeries = spec.series.find((s) => s.id === 'N')!;
    // After 1 half-life (t = 2): N should be 500
    expect(nSeries.calculate(2, {})).toBeCloseTo(500, 1);
  });

  it('provides a safe fallback graph for unmapped keys', () => {
    const spec = getGraphSpecForSimKey('random_unknown_sim_key');
    expect(spec.domainTitle).toBeDefined();
    expect(spec.series.length).toBeGreaterThan(0);
  });
});

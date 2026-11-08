import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { InteractivePhysicsLab } from '../components/InteractivePhysicsLab';
import getDb from '../lib/db';
import { EXPECTED_SIM_KEYS_GRADES_8_12 } from './curriculum-spec';

interface SimTestFailure {
  simKey: string;
  testName: string;
  error?: string;
  foundIssue?: string;
}

const failures: SimTestFailure[] = [];

console.log('=== STARTING SIMULATION STRESS TESTING HARNESS ===\n');

// Baseline: Render a guaranteed non-existent key to capture the fallback HTML
const fallbackHtml = renderToStaticMarkup(
  React.createElement(InteractivePhysicsLab, {
    simulation: {
      id: 1,
      topic_id: 1,
      sim_key: '__strictly_invalid_test_key_xyz__',
      title: 'Fallback Test',
      description: 'Testing fallback',
      guide_steps: [],
      physics_insight: '',
      parameters: {},
    },
  })
);

console.log(`Captured fallback HTML baseline (length: ${fallbackHtml.length} bytes).`);
const fallbackMarker = 'Chiều dài tự nhiên l₀';

// Helper to check for NaN, undefined, Infinity
function checkOutputArtifacts(simKey: string, testName: string, html: string): void {
  // Check for NaN
  // Note: avoid matching legitimate substrings like "Nano" or similar, but in SVG/HTML we look for NaN as a value
  const nanMatch = html.match(/(?:>|\s|="|=')NaN(?:<|\s|"|'|[a-zA-Z0-9_\-°ΩPaNJVWb])/);
  if (nanMatch) {
    failures.push({
      simKey,
      testName,
      foundIssue: `Found NaN in output: "${nanMatch[0]}"`,
    });
  }

  // Check for Infinity
  const infMatch = html.match(/(?:>|\s|="|=')-?Infinity(?:<|\s|"|'|[a-zA-Z0-9_\-°ΩPaNJVWb])/);
  if (infMatch) {
    failures.push({
      simKey,
      testName,
      foundIssue: `Found Infinity in output: "${infMatch[0]}"`,
    });
  }

  // Check for undefined in output text or attributes
  const undefMatch = html.match(/(?:>|\s|="|=')undefined(?:<|\s|"|'|[a-zA-Z0-9_\-°ΩPaNJVWb])/);
  if (undefMatch) {
    failures.push({
      simKey,
      testName,
      foundIssue: `Found undefined in output: "${undefMatch[0]}"`,
    });
  }

  // Check for [object Object]
  if (html.includes('[object Object]')) {
    failures.push({
      simKey,
      testName,
      foundIssue: 'Found [object Object] in output',
    });
  }
}

// -------------------------------------------------------------
// Test Suite 1: Scan Every sim_key present in physics_cms.db
// -------------------------------------------------------------
console.log('\n--- TEST SUITE 1: DB SIMULATION WIRING & RENDERING (92 topics) ---');
const db = getDb();
const dbSims = db.query<any>(`
  SELECT s.id, s.sim_key, s.title, s.description, s.parameters_json, t.code as topic_code, g.grade_number
  FROM simulations s
  JOIN topics t ON t.id = s.topic_id
  JOIN chapters c ON c.id = t.chapter_id
  JOIN grades g ON g.id = c.grade_id
  ORDER BY g.grade_number, t.order_index
`);

console.log(`Found ${dbSims.length} simulations in physics_cms.db.`);

let dbPassed = 0;
for (const sim of dbSims) {
  const params = JSON.parse(sim.parameters_json || '{}');
  try {
    const html = renderToStaticMarkup(
      React.createElement(InteractivePhysicsLab, {
        simulation: {
          id: sim.id || 1,
          topic_id: sim.id || 1,
          sim_key: sim.sim_key,
          title: sim.title,
          description: sim.description,
          guide_steps: [],
          physics_insight: '',
          parameters: params,
        },
      })
    );

    // Verify it didn't hit fallback (unless legitimately spring_hooke_lab)
    if (sim.sim_key !== 'spring_hooke_lab' && html.includes(fallbackMarker)) {
      failures.push({
        simKey: sim.sim_key,
        testName: `DB Sim [${sim.topic_code}] Fallback check`,
        foundIssue: `Hit fallback <SpringHookeSim /> for sim_key: ${sim.sim_key}`,
      });
    }

    checkOutputArtifacts(sim.sim_key, `DB Sim [${sim.topic_code}] Artifact check`, html);
    dbPassed++;
  } catch (err: any) {
    failures.push({
      simKey: sim.sim_key,
      testName: `DB Sim [${sim.topic_code}] Execution`,
      error: err?.message || String(err),
    });
  }
}
console.log(`DB Simulations tested: ${dbSims.length}, Rendered without uncaught exception: ${dbPassed}`);

// -------------------------------------------------------------
// Test Suite 2: Verify All 65 Expected Keys from PROJECT.md
// -------------------------------------------------------------
console.log('\n--- TEST SUITE 2: 65 EXPECTED KEYS COVERAGE ---');
console.log(`Verifying all ${EXPECTED_SIM_KEYS_GRADES_8_12.length} keys from EXPECTED_SIM_KEYS_GRADES_8_12...`);

let expectedKeysPassed = 0;
for (const key of EXPECTED_SIM_KEYS_GRADES_8_12) {
  try {
    const html = renderToStaticMarkup(
      React.createElement(InteractivePhysicsLab, {
        simulation: {
          id: 1,
          topic_id: 1,
          sim_key: key,
          title: `Test ${key}`,
          description: 'Testing expected key',
          guide_steps: [],
          physics_insight: '',
          parameters: {},
        },
      })
    );

    if (html.includes(fallbackMarker)) {
      failures.push({
        simKey: key,
        testName: 'Expected Sim Key fallback check',
        foundIssue: `Key ${key} fell back to <SpringHookeSim />!`,
      });
    }

    checkOutputArtifacts(key, 'Expected Sim Key default params artifact check', html);
    expectedKeysPassed++;
  } catch (err: any) {
    failures.push({
      simKey: key,
      testName: 'Expected Sim Key render',
      error: err?.message || String(err),
    });
  }
}
console.log(`Expected keys tested: ${EXPECTED_SIM_KEYS_GRADES_8_12.length}, Passed initial render: ${expectedKeysPassed}`);

// -------------------------------------------------------------
// Test Suite 3: Adversarial Edge Cases and Parameter Stress
// -------------------------------------------------------------
console.log('\n--- TEST SUITE 3: ADVERSARIAL EDGE CASE PARAMETER TESTING ---');

const edgeCaseScenarios: Array<{
  name: string;
  simKeys: string[];
  paramSets: Record<string, any>[];
}> = [
  {
    name: 'Zero Focal Length & Geometric Optics Edge Cases',
    simKeys: ['g9_thin_lens_lab', 'g9_refraction_tir_lab', 'g9_eye_magnifier_lab', 'optics_ray_lens_lab'],
    paramSets: [
      { f: 0 },
      { f: 0, d: 0, h: 0 },
      { f: 0, mode: 'eye_magnifier' },
      { n1: 0, n2: 0, angle: 0 },
      { n1: 1.0, n2: 1.5, angle: 90 },
      { n1: 2.5, n2: 1.0, angle: 89.9 }, // High TIR
      { lensType: 'concave', f: -15, d: 5 },
      { mode: 'invalid_mode', f: -100 },
    ],
  },
  {
    name: 'Zero Lever Distance & Torque Mechanics Edge Cases',
    simKeys: ['g8_torque_rotation_lab', 'g8_lever_balance_lab', 'g8_crane_mechanisms_lab', 'rotational_lever_lab'],
    paramSets: [
      { d1: 0, d2: 0 },
      { d1: 0, d2: 0, f1: 0, f2: 0 },
      { type: 'class1', d1: 0, f1: 100 },
      { type: 'class2', d2: 0, f2: 100 },
      { type: 'class3', d1: -5, d2: -10 },
      { type: 'crane', d1: 1000, f1: 1e6 },
    ],
  },
  {
    name: 'Zero Kelvin & Ideal Gas Edge Cases',
    simKeys: ['g12_boyle_isothermal_lab', 'g12_ideal_gas_equation_lab', 'g12_kinetic_gas_maxwell_lab', 'ideal_gas_laws_lab'],
    paramSets: [
      { T: 0 },
      { T: 0, V: 0, n: 0 },
      { T: -273.15, V: 0.001 },
      { T: 10000, V: 100, n: 10 },
      { gas: 'unknown_gas', T: 300, V: 5 },
      { mode: 'isothermal', T: 0 },
      { mode: 'isobaric', V: 0 },
      { mode: 'kinetic_theory', T: 0, gas: 'He' },
    ],
  },
  {
    name: 'Zero Resistance & DC Circuit Edge Cases',
    simKeys: [
      'g8_circuit_builder_lab',
      'g8_current_voltage_measure_lab',
      'g9_ohms_resistor_lab',
      'g9_circuit_series_parallel_lab',
      'g9_joule_heating_lab',
      'g9_transformer_grid_lab',
      'g11_circuit_emf_resistor_lab',
      'circuits_ohm_lab',
    ],
    paramSets: [
      { r1: 0, r2: 0 },
      { r1: 0, r2: 0, voltage: 0 },
      { connection: 'parallel', r1: 0, r2: 0 },
      { connection: 'series', r1: 0, r2: 0, voltage: 220 },
      { mode: 'emf_internal', r1: 0, internalR: 0, voltage: 12 },
      { mode: 'transformer', n1: 0, n2: 0, voltage: 220 },
      { mode: 'transformer', n1: 100, n2: 0, voltage: 0 },
      { mode: 'joule_power', r1: 0, r2: 0, voltage: 100 },
    ],
  },
  {
    name: 'Fluid Mechanics & Buoyancy Edge Cases',
    simKeys: ['g8_density_lab', 'g8_pressure_surface_lab', 'g8_buoyancy_archimedes_lab', 'fluid_pressure_archimedes_lab'],
    paramSets: [
      { volume: 0, depth: 0, force: 0, area: 0 },
      { area: 0, force: 1000 },
      { fluid: 'invalid_fluid', material: 'invalid_mat' },
      { mode: 'surface_pressure', area: 0, force: 0 },
      { depth: 10000, volume: 50000 },
    ],
  },
  {
    name: 'Thermal Energy & Calorimetry Edge Cases',
    simKeys: ['g8_thermal_motion_lab', 'g8_heat_transfer_modes_lab', 'g8_bimetallic_expansion_lab', 'g12_calorimetry_phase_change_lab', 'thermal_calorimetry_lab'],
    paramSets: [
      { m1: 0, m2: 0, t1: 0, t2: 0 },
      { metal: 'invalid_metal', m1: 0, m2: 0 },
      { workA: 0, heatQ: 0 },
      { stripTemp: -273.15 },
      { stripTemp: 1000 },
    ],
  },
  {
    name: 'Kinematics & Dynamics Edge Cases',
    simKeys: ['g10_projectile_motion_lab', 'g10_accelerated_motion_lab', 'g10_collision_types_lab', 'g10_centripetal_banked_lab', 'newton_dynamics_lab'],
    paramSets: [
      { v0: 0, angle: 0, h0: 0, t: 0 },
      { v0_1d: 0, accel: 0 },
      { mass: 0, mu: 0, pull: 0 },
      { m1: 0, m2: 0, v1: 0, v2: 0 },
      { radius: 0, speed: 0 },
      { isElastic: false, m1: 0, m2: 0 },
    ],
  },
  {
    name: 'Oscillations & Waves Edge Cases',
    simKeys: ['g11_shm_kinematics_lab', 'g11_interference_standing_wave_lab', 'oscillations_waves_lab'],
    paramSets: [
      { A: 0, f: 0, phi: 0 },
      { v: 0, f: 0, k: 0 },
      { f: -5, A: -10 },
      { mode: 'standing_wave', k: 0 },
    ],
  },
  {
    name: 'Electromagnetism & Induction Edge Cases',
    simKeys: ['g11_coulomb_efield_lab', 'g12_ampere_left_hand_lab', 'g12_faraday_self_inductance_lab', 'electromagnetism_induction_lab'],
    paramSets: [
      { I: 0, B: 0, L: 0, theta: 0 },
      { q1: 0, q2: 0, r: 0 },
      { N: 0, S: 0, f: 0 },
      { B: 0 },
    ],
  },
  {
    name: 'Nuclear Physics Edge Cases',
    simKeys: ['g12_nuclear_binding_curve_lab', 'g12_nuclear_reaction_lab', 'g12_radioactive_decay_fission_lab', 'nuclear_decay_lab'],
    paramSets: [
      { t: 0 },
      { t: 1000 },
      { isotope: 'invalid_isotope', t: 0 },
      { mode: 'binding_curve' },
      { mode: 'nuclear_reaction' },
    ],
  },
];

let edgeCasesTested = 0;
for (const scenario of edgeCaseScenarios) {
  for (const simKey of scenario.simKeys) {
    for (let pIdx = 0; pIdx < scenario.paramSets.length; pIdx++) {
      const p = scenario.paramSets[pIdx];
      edgeCasesTested++;
      try {
        const html = renderToStaticMarkup(
          React.createElement(InteractivePhysicsLab, {
            simulation: {
              id: 1,
              topic_id: 1,
              sim_key: simKey,
              title: `Edge Case ${scenario.name}`,
              description: 'Adversarial testing',
              guide_steps: [],
              physics_insight: '',
              parameters: p,
            },
          })
        );

        checkOutputArtifacts(simKey, `${scenario.name} [param set ${pIdx}]`, html);
      } catch (err: any) {
        failures.push({
          simKey,
          testName: `${scenario.name} [param set ${pIdx}] Execution`,
          error: err?.message || String(err),
        });
      }
    }
  }
}

console.log(`Adversarial edge case test cases executed: ${edgeCasesTested}`);

// -------------------------------------------------------------
// Report Summary
// -------------------------------------------------------------
console.log('\n=== SIMULATION STRESS TESTING SUMMARY ===');
console.log(`Total checks performed: ${dbSims.length + EXPECTED_SIM_KEYS_GRADES_8_12.length + edgeCasesTested}`);
console.log(`Total failures found: ${failures.length}`);

if (failures.length > 0) {
  console.error('\nFAILURES DETECTED:');
  for (const f of failures) {
    console.error(`- [${f.simKey}] ${f.testName}: ${f.error || f.foundIssue}`);
  }
  process.exit(1);
} else {
  console.log('ALL SIMULATION STRESS TESTS PASSED CLEANLY (Zero exceptions, Zero NaN, Zero undefined, Zero fallback routing errors)!');
  process.exit(0);
}

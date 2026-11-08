'use client';

import React, { useState } from 'react';
import { SimulationItem } from '@/types/cms';
import { Sliders, Sparkles, Compass, RotateCcw, CheckCircle2, Play, Pause, Zap, Flame, Eye, Activity, Gauge, Atom } from 'lucide-react';

export function InteractivePhysicsLab({ simulation }: { simulation: SimulationItem }) {
  const { sim_key, title, description, guide_steps, physics_insight, parameters } = simulation;

  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden">
      {/* Calm Light Header */}
      <div className="px-6 py-4 bg-slate-50/80 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Sliders className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">{title}</h3>
            <p className="text-xs text-slate-500 mt-0.5">{description}</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-5">
        {/* Interactive Canvas Area by sim_key */}
        <div className="rounded-xl bg-slate-900 text-white p-5">
          {renderSimByKey(sim_key, parameters)}
        </div>

        {/* Guide Steps & Physics Insight */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {guide_steps && guide_steps.length > 0 && (
            <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                <Compass className="w-4 h-4 text-indigo-600" />
                Gợi ý thao tác
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {guide_steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {physics_insight && (
            <div className="rounded-xl bg-indigo-50/60 border border-indigo-100 p-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-800 mb-1.5">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                Bản chất Vật lý
              </div>
              <p className="text-xs text-indigo-950 leading-relaxed">{physics_insight}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function renderSimByKey(simKey: string, params: Record<string, any> = {}) {
  switch (simKey) {
    // Existing Grade 6 & 7 simulations (backward-compatible)
    case 'length_volume_lab':
      return <LengthVolumeSim />;
    case 'mass_time_lab':
      return <MassTimeSim />;
    case 'temperature_scales_lab':
      return <TemperatureScalesSim />;
    case 'force_effects_lab':
    case 'force_vector_lab':
      return <ForceVectorAndEffectsSim />;
    case 'gravity_weight_lab':
      return <GravityWeightSim />;
    case 'contact_noncontact_lab':
      return <MagnetNonContactSim />;
    case 'spring_hooke_lab':
      return <SpringHookeSim />;
    case 'friction_lab':
      return <FrictionSim />;
    case 'energy_forms_skate_lab':
      return <EnergySkateSim />;
    case 'energy_efficiency_sankey_lab':
    case 'renewable_energy_lab':
      return <EnergyEfficiencyAndRenewableSim simKey={simKey} />;
    case 'earth_day_night_lab':
      return <EarthDayNightSim />;
    case 'moon_phases_lab':
      return <MoonPhasesSim />;
    case 'solar_system_lab':
      return <SolarSystemSim />;
    case 'speed_graph_lab':
      return <SpeedGraphSim />;
    case 'sound_wave_echo_lab':
      return <SoundWaveEchoSim />;
    case 'light_reflection_mirror_lab':
      return <LightReflectionMirrorSim />;
    case 'magnetism_electromagnet_lab':
      return <MagnetismElectromagnetSim />;

    // --- Domain Engine 1: Fluid Pressure & Archimedes (Grade 8) ---
    case 'fluid_pressure_archimedes_lab':
    case 'density_pressure_lab':
    case 'archimedes_buoyancy_lab':
    case 'atmospheric_pressure_lab':
    case 'g8_density_lab':
    case 'g8_pressure_surface_lab':
    case 'g8_buoyancy_archimedes_lab':
      return <FluidPressureArchimedesSim simKey={simKey} params={params} />;

    // --- Domain Engine 2: Rotational Mechanics & Levers (Grades 8, 10) ---
    case 'rotational_lever_lab':
    case 'moment_torque_balance_lab':
    case 'g8_torque_rotation_lab':
    case 'g8_lever_balance_lab':
    case 'g8_crane_mechanisms_lab':
      return <RotationalLeverSim simKey={simKey} params={params} />;

    // --- Domain Engine 3: DC Circuits & Electromagnetism (Grades 8, 9, 11, 12) ---
    case 'circuits_ohm_lab':
    case 'electric_power_joule_lab':
    case 'whole_circuit_emf_lab':
    case 'g8_electrostatics_lab':
    case 'g8_circuit_builder_lab':
    case 'g8_current_voltage_measure_lab':
    case 'g9_ohms_resistor_lab':
    case 'g9_circuit_series_parallel_lab':
    case 'g9_joule_heating_lab':
    case 'g9_induction_faraday_lab':
    case 'g9_ac_generator_lab':
    case 'g9_transformer_grid_lab':
    case 'g11_drift_velocity_lab':
    case 'g11_circuit_emf_resistor_lab':
    case 'g11_sensor_power_transfer_lab':
    case 'g12_ac_generator_power_lab':
      return <CircuitLabSim simKey={simKey} params={params} />;

    // --- Domain Engine 4: Thermal Energy & Calorimetry (Grades 8, 12) ---
    case 'thermal_calorimetry_lab':
    case 'first_law_thermodynamics_lab':
    case 'latent_heat_phase_lab':
    case 'g8_thermal_motion_lab':
    case 'g8_heat_transfer_modes_lab':
    case 'g8_bimetallic_expansion_lab':
    case 'g12_molecular_states_lab':
    case 'g12_thermodynamics_first_law_lab':
    case 'g12_calorimetry_phase_change_lab':
      return <ThermalCalorimetrySim simKey={simKey} params={params} />;

    // --- Domain Engine 5: Geometric Optics & Lenses (Grade 9) ---
    case 'optics_ray_lens_lab':
    case 'refraction_snell_lab':
    case 'total_internal_reflection_lab':
    case 'convex_concave_lens_lab':
    case 'g9_refraction_tir_lab':
    case 'g9_thin_lens_lab':
    case 'g9_eye_magnifier_lab':
      return <OpticsRayLensSim simKey={simKey} params={params} />;

    // --- Domain Engine 6: Kinematics & Motion (Grade 10) ---
    case 'kinematics_motion_lab':
    case 'accelerated_motion_graph_lab':
    case 'projectile_motion_2d_lab':
    case 'measurement_vernier_lab':
    case 'g10_safety_units_lab':
    case 'g10_measurement_error_lab':
    case 'g10_displacement_velocity_lab':
    case 'g10_accelerated_motion_lab':
    case 'g10_projectile_motion_lab':
      return <KinematicsMotionSim simKey={simKey} params={params} />;

    // --- Domain Engine 7: Newton Dynamics, Energy & Collisions (Grades 9, 10) ---
    case 'newton_dynamics_lab':
    case 'inclined_plane_friction_lab':
    case 'momentum_collision_lab':
    case 'centripetal_circular_lab':
    case 'g10_vector_forces_lab':
    case 'g10_newtons_laws_lab':
    case 'g10_friction_inclined_lab':
    case 'g10_work_power_efficiency_lab':
    case 'g10_kinetic_potential_theorem_lab':
    case 'g10_conservation_energy_lab':
    case 'g10_impulse_momentum_lab':
    case 'g10_rocket_propulsion_lab':
    case 'g10_collision_types_lab':
    case 'g10_circular_motion_lab':
    case 'g10_centripetal_banked_lab':
    case 'g10_hookes_law_lab':
    case 'g9_work_force_displacement_lab':
    case 'g9_power_speed_lab':
    case 'g9_rollercoaster_energy_lab':
      return <NewtonDynamicsSim simKey={simKey} params={params} />;

    // --- Domain Engine 8: Oscillations & Waves (Grade 11) ---
    case 'oscillations_waves_lab':
    case 'harmonic_shm_oscillator_lab':
    case 'wave_interference_lab':
    case 'standing_waves_lab':
    case 'g11_shm_kinematics_lab':
    case 'g11_pendulum_spring_energy_lab':
    case 'g11_resonance_damping_lab':
    case 'g11_mechanical_waves_lab':
    case 'g11_interference_standing_wave_lab':
    case 'g11_em_spectrum_lab':
      return <OscillationsWavesSim simKey={simKey} params={params} />;

    // --- Domain Engine 9: Electromagnetism & Fields (Grades 11, 12) ---
    case 'electromagnetism_induction_lab':
    case 'coulomb_electric_field_lab':
    case 'faraday_flux_induction_lab':
    case 'lorentz_magnetic_force_lab':
    case 'g11_coulomb_efield_lab':
    case 'g11_potential_equipotential_lab':
    case 'g11_capacitor_dielectric_lab':
    case 'g12_ampere_left_hand_lab':
    case 'g12_faraday_self_inductance_lab':
      return <ElectromagnetismInductionSim simKey={simKey} params={params} />;

    // --- Domain Engine 10: Ideal Gas Laws & Kinetic Theory (Grade 12) ---
    case 'ideal_gas_laws_lab':
    case 'boyle_charles_isotherm_lab':
    case 'thermodynamic_pv_cycle_lab':
    case 'g12_boyle_isothermal_lab':
    case 'g12_ideal_gas_equation_lab':
    case 'g12_kinetic_gas_maxwell_lab':
      return <IdealGasLawsSim simKey={simKey} params={params} />;

    // --- Domain Engine 11: Nuclear Physics & Radioactivity (Grade 12) ---
    case 'nuclear_decay_lab':
    case 'mass_defect_binding_lab':
    case 'radioactive_halflife_lab':
    case 'g12_nuclear_binding_curve_lab':
    case 'g12_nuclear_reaction_lab':
    case 'g12_radioactive_decay_fission_lab':
      return <NuclearDecaySim simKey={simKey} params={params} />;

    default:
      return <SpringHookeSim />;
  }
}

/* --- 1. Length & Volume Lab --- */
function LengthVolumeSim() {
  const [eyeAngle, setEyeAngle] = useState(0);
  const [waterV1, setWaterV1] = useState(50);
  const [stoneV, setStoneV] = useState(28);
  const [submerged, setSubmerged] = useState(true);

  const trueLength = 7.5;
  const readLength = Number((trueLength + eyeAngle * 0.015).toFixed(2));
  const currentV2 = submerged ? waterV1 + stoneV : waterV1;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Ruler Parallax */}
      <div className="space-y-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
        <div className="text-sm font-semibold text-cyan-300">
          1. Thí nghiệm đọc thước & Sai số góc nhìn (Thị sai)
        </div>
        <div>
          <label className="text-xs text-slate-300 flex justify-between">
            <span>Góc đặt mắt so với phương vuông góc:</span>
            <span className={eyeAngle === 0 ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
              {eyeAngle}° {eyeAngle === 0 ? '(Chuẩn vuông góc!)' : '(Nhìn xiên!)'}
            </span>
          </label>
          <input
            type="range"
            min={-30}
            max={30}
            step={5}
            value={eyeAngle}
            onChange={(e) => setEyeAngle(Number(e.target.value))}
            className="w-full accent-cyan-400 mt-1"
          />
        </div>
        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
          <div className="h-6 bg-amber-500/80 rounded-r-full flex items-center px-3 text-xs font-bold text-slate-950" style={{ width: '75%' }}>
            Bút chì mẫu (Chiều dài thật = 7,50 cm)
          </div>
          <div className="h-8 bg-slate-200 text-slate-900 rounded px-2 flex items-center justify-between text-[10px] font-mono">
            <span>0cm</span><span>2cm</span><span>4cm</span><span>6cm</span><span>8cm</span><span>10cm</span>
          </div>
          <div className="flex justify-between text-xs pt-1">
            <span>Kết quả mắt đọc được: <strong className="text-cyan-300">{readLength} cm</strong></span>
            <span>Sai số: <strong className={eyeAngle === 0 ? 'text-emerald-400' : 'text-rose-400'}>{Math.abs(readLength - trueLength).toFixed(2)} cm</strong></span>
          </div>
        </div>
      </div>

      {/* Graduated Cylinder */}
      <div className="space-y-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
        <div className="text-sm font-semibold text-indigo-300">
          2. Đo thể tích vật rắn bằng Bình chia độ (V = V₂ - V₁)
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-slate-300 block">Mực nước ban đầu V₁: {waterV1} mL</label>
            <input type="range" min={30} max={60} value={waterV1} onChange={(e) => setWaterV1(Number(e.target.value))} className="w-full accent-indigo-400" />
          </div>
          <div>
            <label className="text-xs text-slate-300 block">Thể tích hòn đá: {stoneV} cm³</label>
            <input type="range" min={10} max={35} value={stoneV} onChange={(e) => setStoneV(Number(e.target.value))} className="w-full accent-emerald-400" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-20 h-32 border-2 border-slate-400 rounded-b-xl relative overflow-hidden bg-slate-950 flex flex-col justify-end">
            <div
              className="w-full bg-cyan-500/50 border-t-2 border-cyan-300 transition-all duration-300 flex items-end justify-center pb-1"
              style={{ height: `${currentV2}%` }}
            >
              {submerged && (
                <div className="w-8 h-6 rounded-full bg-amber-600 border border-amber-300 text-[9px] flex items-center justify-center font-bold">
                  Đá
                </div>
              )}
            </div>
          </div>
          <div className="space-y-2 text-xs flex-1">
            <div>Mực nước ban đầu (V₁): <strong className="text-slate-200">{waterV1} mL</strong></div>
            <div>Mực nước hiện tại (V₂): <strong className="text-cyan-300">{currentV2} mL</strong></div>
            <div className="text-emerald-300 font-bold">
              V_đá = V₂ - V₁ = {currentV2} - {waterV1} = {currentV2 - waterV1} cm³
            </div>
            <button
              type="button"
              onClick={() => setSubmerged(!submerged)}
              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition"
            >
              {submerged ? 'Nhấc hòn đá ra' : 'Thả hòn đá vào bình'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- 2. Mass & Time Lab --- */
function MassTimeSim() {
  const [trueMass, setTrueMass] = useState(650);
  const [zeroOffset, setZeroOffset] = useState(100);
  const [oscCount, setOscCount] = useState(10);

  const displayedMass = trueMass + zeroOffset;
  const singlePeriod = 1.6;
  const totalTime = Number((oscCount * singlePeriod).toFixed(2));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
        <div className="text-sm font-semibold text-amber-300">1. Cân đồng hồ & Hiệu chỉnh vạch số 0</div>
        <div>
          <label className="text-xs text-slate-300 flex justify-between">
            <span>Khối lượng thật của vật (m_thật):</span>
            <strong className="text-white">{trueMass} g ({(trueMass / 1000).toFixed(2)} kg)</strong>
          </label>
          <input type="range" min={100} max={1500} step={50} value={trueMass} onChange={(e) => setTrueMass(Number(e.target.value))} className="w-full accent-amber-400" />
        </div>
        <div>
          <label className="text-xs text-slate-300 flex justify-between">
            <span>Độ lệch kim ban đầu khi chưa đặt vật:</span>
            <strong className={zeroOffset === 0 ? 'text-emerald-400' : 'text-rose-400'}>{zeroOffset > 0 ? `+${zeroOffset}` : zeroOffset} g</strong>
          </label>
          <input type="range" min={-200} max={200} step={50} value={zeroOffset} onChange={(e) => setZeroOffset(Number(e.target.value))} className="w-full accent-rose-400" />
        </div>
        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
          <div>
            <div>Số chỉ kim cân: <strong className="text-amber-300 text-sm">{displayedMass} g</strong></div>
            <div className="text-slate-400">m_thật = Số chỉ - Độ lệch = {displayedMass} - ({zeroOffset}) = <strong className="text-emerald-400">{trueMass} g</strong></div>
          </div>
          <button
            type="button"
            onClick={() => setZeroOffset(0)}
            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Chỉnh về 0
          </button>
        </div>
      </div>

      <div className="space-y-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
        <div className="text-sm font-semibold text-cyan-300">2. Đo thời gian N dao động bằng Đồng hồ bấm giây</div>
        <div>
          <label className="text-xs text-slate-300 flex justify-between">
            <span>Số dao động liên tiếp dùng để bấm giờ (N):</span>
            <strong className="text-cyan-300">{oscCount} dao động</strong>
          </label>
          <input type="range" min={1} max={25} value={oscCount} onChange={(e) => setOscCount(Number(e.target.value))} className="w-full accent-cyan-400" />
        </div>
        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5 text-xs">
          <div>Tổng thời gian đồng hồ bấm giây đo được: <strong className="text-white">{totalTime} s</strong></div>
          <div>Chu kỳ 1 dao động: <strong className="text-emerald-300">T = {totalTime} / {oscCount} = {singlePeriod.toFixed(2)} s</strong></div>
          <div className="text-slate-400">
            Sai số phản xạ bấm tay (±0,20 s) chia đều cho {oscCount} lần chỉ còn: <strong className="text-amber-300">±{(0.2 / oscCount).toFixed(3)} s</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- 3. Temperature Scales (°C - K - °F) --- */
function TemperatureScalesSim() {
  const [tempC, setTempC] = useState(37);
  const tempK = Number((tempC + 273).toFixed(1));
  const tempF = Number((1.8 * tempC + 32).toFixed(1));

  const presets = [
    { label: 'Điểm giao -40°', val: -40 },
    { label: 'Nước đá tan (0°C)', val: 0 },
    { label: 'Nhiệt độ phòng (25°C)', val: 25 },
    { label: 'Thân nhiệt (37°C)', val: 37 },
    { label: 'Nước sôi (100°C)', val: 100 },
  ];

  const fillPct = Math.min(100, Math.max(5, ((tempC + 40) / 160) * 100));

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-sm font-semibold text-amber-300">
          Kéo thanh trượt nhiệt độ hoặc chọn mốc chuẩn:
        </div>
        <div className="flex flex-wrap gap-1.5">
          {presets.map((p) => (
            <button
              key={p.val}
              type="button"
              onClick={() => setTempC(p.val)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
                tempC === p.val ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <input
        type="range"
        min={-40}
        max={120}
        step={1}
        value={tempC}
        onChange={(e) => setTempC(Number(e.target.value))}
        className="w-full accent-amber-400"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-slate-900 border border-cyan-500/30">
          <div className="text-xs text-slate-400">Thang Celsius (°C)</div>
          <div className="text-2xl font-extrabold text-cyan-300 mt-1">{tempC} °C</div>
          <div className="w-full h-2.5 bg-slate-800 rounded-full mt-3 overflow-hidden">
            <div className="h-full bg-cyan-400 transition-all" style={{ width: `${fillPct}%` }} />
          </div>
          <div className="text-[11px] text-slate-400 mt-2">Mốc chuẩn Việt Nam (0°C băng tan, 100°C nước sôi)</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30">
          <div className="text-xs text-slate-400">Thang Kelvin - Chuẩn SI (K)</div>
          <div className="text-2xl font-extrabold text-emerald-300 mt-1">{tempK} K</div>
          <div className="w-full h-2.5 bg-slate-800 rounded-full mt-3 overflow-hidden">
            <div className="h-full bg-emerald-400 transition-all" style={{ width: `${fillPct}%` }} />
          </div>
          <div className="text-[11px] text-slate-400 mt-2">Công thức: T(K) = {tempC} + 273 = {tempK} K</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/30">
          <div className="text-xs text-slate-400">Thang Fahrenheit (°F)</div>
          <div className="text-2xl font-extrabold text-amber-300 mt-1">{tempF} °F</div>
          <div className="w-full h-2.5 bg-slate-800 rounded-full mt-3 overflow-hidden">
            <div className="h-full bg-amber-400 transition-all" style={{ width: `${fillPct}%` }} />
          </div>
          <div className="text-[11px] text-slate-400 mt-2">Công thức: 1,8 × ({tempC}) + 32 = {tempF}°F</div>
        </div>
      </div>
    </div>
  );
}

/* --- 4. Force Vector & Effects --- */
function ForceVectorAndEffectsSim() {
  const [forceN, setForceN] = useState(40);
  const [scalePerSegment, setScalePerSegment] = useState(10);
  const [direction, setDirection] = useState<'right' | 'left'>('right');

  const segments = Math.max(1, Math.round(forceN / scalePerSegment));

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="text-xs text-slate-300 block">Độ lớn lực F: <strong className="text-cyan-300">{forceN} N</strong></label>
          <input type="range" min={10} max={100} step={10} value={forceN} onChange={(e) => setForceN(Number(e.target.value))} className="w-full accent-cyan-400 mt-1" />
        </div>
        <div>
          <label className="text-xs text-slate-300 block">Tỉ xích 1 đoạn: <strong className="text-amber-300">{scalePerSegment} N/đoạn</strong></label>
          <select
            value={scalePerSegment}
            onChange={(e) => setScalePerSegment(Number(e.target.value))}
            className="w-full mt-1 bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white"
          >
            <option value={5}>1 đoạn = 5 N</option>
            <option value={10}>1 đoạn = 10 N</option>
            <option value={20}>1 đoạn = 20 N</option>
          </select>
        </div>
        <div>
          <label className="text-xs text-slate-300 block">Chiều của lực:</label>
          <div className="flex gap-2 mt-1">
            <button
              type="button"
              onClick={() => setDirection('right')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-semibold ${direction === 'right' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'}`}
            >
              Trái → Phải
            </button>
            <button
              type="button"
              onClick={() => setDirection('left')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-semibold ${direction === 'left' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'}`}
            >
              Phải → Trái
            </button>
          </div>
        </div>
      </div>

      <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center">
        <div className="flex items-center gap-1">
          {direction === 'left' && (
            <div className="flex items-center">
              <span className="text-amber-400 font-bold text-lg mr-0.5">◀</span>
              {Array.from({ length: segments }).map((_, idx) => (
                <div key={idx} className="w-7 h-2 bg-amber-400 border-r border-slate-950" />
              ))}
            </div>
          )}
          <div className="w-20 h-14 rounded-xl bg-indigo-500 border-2 border-indigo-300 flex flex-col items-center justify-center text-xs font-bold shadow-lg">
            <span>Vật A</span>
            <span className="text-[10px] text-indigo-100">Gốc đặt lực</span>
          </div>
          {direction === 'right' && (
            <div className="flex items-center">
              {Array.from({ length: segments }).map((_, idx) => (
                <div key={idx} className="w-7 h-2 bg-emerald-400 border-r border-slate-950" />
              ))}
              <span className="text-emerald-400 font-bold text-lg ml-0.5">▶</span>
            </div>
          )}
        </div>
        <div className="mt-3 text-xs text-slate-300">
          Mũi tên gồm <strong className="text-emerald-300">{segments} đoạn</strong> × <strong className="text-amber-300">{scalePerSegment} N/đoạn</strong> = <strong className="text-white">{segments * scalePerSegment} N</strong> (Phương nằm ngang, chiều {direction === 'right' ? 'Trái sang Phải' : 'Phải sang Trái'})
        </div>
      </div>
    </div>
  );
}

/* --- 5. Gravity & Weight (Earth / Moon / Mars) --- */
function GravityWeightSim() {
  const [massKg, setMassKg] = useState(15);
  const [planet, setPlanet] = useState<'earth' | 'moon' | 'mars'>('earth');

  const planetData = {
    earth: { name: 'Trái Đất', g: 10, color: 'text-emerald-300' },
    moon: { name: 'Mặt Trăng (g ≈ 1/6 Trái Đất)', g: 1.67, color: 'text-amber-300' },
    mars: { name: 'Sao Hỏa (Hỏa tinh)', g: 3.7, color: 'text-rose-300' },
  }[planet];

  const weightN = Number((massKg * planetData.g).toFixed(1));

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-slate-300 flex justify-between">
            <span>Khối lượng của vật (m):</span>
            <strong className="text-cyan-300">{massKg} kg ({massKg * 1000} g)</strong>
          </label>
          <input type="range" min={1} max={60} value={massKg} onChange={(e) => setMassKg(Number(e.target.value))} className="w-full accent-cyan-400 mt-1" />
        </div>
        <div className="flex gap-2 items-end">
          {(['earth', 'moon', 'mars'] as const).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setPlanet(key)}
              className={`flex-1 py-2 rounded-lg text-xs font-semibold transition ${
                planet === key ? 'bg-indigo-600 text-white border border-indigo-400' : 'bg-slate-800 text-slate-300'
              }`}
            >
              {key === 'earth' ? '🌍 Trái Đất' : key === 'moon' ? '🌙 Mặt Trăng' : '🔴 Sao Hỏa'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <div className="text-xs text-slate-400">Số chỉ Cân Роберval (Khối lượng m)</div>
          <div className="text-2xl font-extrabold text-white mt-1">{massKg} kg</div>
          <div className="text-xs text-emerald-400 mt-1">✔ Không thay đổi dù mang lên bất kỳ hành tinh nào!</div>
        </div>
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <div className="text-xs text-slate-400">Số chỉ Lực kế tại {planetData.name} (Trọng lượng P)</div>
          <div className={`text-2xl font-extrabold mt-1 ${planetData.color}`}>{weightN} N</div>
          <div className="text-xs text-slate-300 mt-1">
            P = {massKg} kg × {planetData.g} N/kg = {weightN} N (Phương thẳng đứng, chiều từ trên xuống)
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- 6. Non-Contact Magnet Force --- */
function MagnetNonContactSim() {
  const [distanceCm, setDistanceCm] = useState(3);
  const [samePole, setSamePole] = useState(false);

  const magneticForceN = Number((18 / (distanceCm * distanceCm)).toFixed(2));

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-slate-300 flex justify-between">
            <span>Khoảng cách không tiếp xúc d (cm):</span>
            <strong className="text-cyan-300">{distanceCm} cm (Chưa chạm nhau!)</strong>
          </label>
          <input type="range" min={1.5} max={8} step={0.5} value={distanceCm} onChange={(e) => setDistanceCm(Number(e.target.value))} className="w-full accent-cyan-400 mt-1" />
        </div>
        <div className="flex items-end gap-2">
          <button
            type="button"
            onClick={() => setSamePole(false)}
            className={`flex-1 py-2 rounded-lg text-xs font-semibold ${!samePole ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'}`}
          >
            Khác cực (Bắc - Nam) → HÚT
          </button>
          <button
            type="button"
            onClick={() => setSamePole(true)}
            className={`flex-1 py-2 rounded-lg text-xs font-semibold ${samePole ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-300'}`}
          >
            Cùng cực (Bắc - Bắc) → ĐẨY
          </button>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
        <div>
          <div>Loại tương tác: <strong className="text-amber-300">Lực từ (Lực KHÔNG tiếp xúc)</strong></div>
          <div className="mt-1">
            Độ lớn lực từ qua khoảng không {distanceCm} cm: <strong className="text-emerald-300">F_từ ≈ {magneticForceN} N ({samePole ? 'Lực đẩy' : 'Lực hút'})</strong>
          </div>
        </div>
        <div className="px-4 py-2 rounded-lg bg-slate-950 border border-white/10 font-mono text-xs">
          [ N — S ] ⟷ ({distanceCm} cm) ⟷ [{samePole ? ' S — N ' : ' N — S '}]
        </div>
      </div>
    </div>
  );
}

/* --- 7. Hooke's Law Spring Lab --- */
function SpringHookeSim() {
  const [l0, setL0] = useState(12);
  const [massG, setMassG] = useState(150);
  const [ratePer100g, setRatePer100g] = useState(3);

  const deltaL = Number(((massG / 100) * ratePer100g).toFixed(2));
  const totalL = Number((l0 + deltaL).toFixed(2));
  const weightP = Number(((massG / 1000) * 10).toFixed(2));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div className="space-y-3">
        <div>
          <label className="text-xs text-slate-300 flex justify-between">
            <span>Chiều dài tự nhiên l₀:</span>
            <strong className="text-slate-200">{l0} cm</strong>
          </label>
          <input type="range" min={8} max={18} value={l0} onChange={(e) => setL0(Number(e.target.value))} className="w-full accent-slate-400" />
        </div>
        <div>
          <label className="text-xs text-slate-300 flex justify-between">
            <span>Khối lượng quả nặng treo vào (m):</span>
            <strong className="text-cyan-300">{massG} g (Trọng lượng P = {weightP} N)</strong>
          </label>
          <input type="range" min={0} max={400} step={25} value={massG} onChange={(e) => setMassG(Number(e.target.value))} className="w-full accent-cyan-400" />
        </div>
        <div>
          <label className="text-xs text-slate-300 flex justify-between">
            <span>Độ dãn ứng với mỗi 100 g (1 N):</span>
            <strong className="text-amber-300">{ratePer100g} cm / 100g</strong>
          </label>
          <input type="range" min={1} max={5} step={0.5} value={ratePer100g} onChange={(e) => setRatePer100g(Number(e.target.value))} className="w-full accent-amber-400" />
        </div>
      </div>

      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
        <div className="text-sm font-bold text-emerald-300">Bảng kết quả đo biến dạng lò xo:</div>
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="p-2.5 rounded-lg bg-slate-950">
            <div className="text-slate-400">Chiều dài tự nhiên (l₀)</div>
            <div className="text-base font-bold text-white">{l0} cm</div>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950">
            <div className="text-slate-400">Độ dãn thêm (Δl = l - l₀)</div>
            <div className="text-base font-bold text-amber-300">+{deltaL} cm</div>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-indigo-500/15 border border-indigo-400/30 flex justify-between items-center">
          <span>Chiều dài lò xo khi treo vật (l = l₀ + Δl):</span>
          <strong className="text-lg text-emerald-300">{totalL} cm</strong>
        </div>
      </div>
    </div>
  );
}

/* --- 8. Friction Lab --- */
function FrictionSim() {
  const [surface, setSurface] = useState<'ice' | 'wood' | 'sandpaper'>('wood');
  const [massKg, setMassKg] = useState(2);
  const [pullForce, setPullForce] = useState(6);

  const coeff = { ice: 0.1, wood: 0.4, sandpaper: 0.75 }[surface];
  const weightP = massKg * 10;
  const maxStaticFriction = Number((weightP * coeff).toFixed(1));
  const isSliding = pullForce > maxStaticFriction;
  const currentFriction = isSliding ? maxStaticFriction : pullForce;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="text-xs text-slate-300 block mb-1">Chọn bề mặt tiếp xúc:</label>
          <select
            value={surface}
            onChange={(e) => setSurface(e.target.value as any)}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
          >
            <option value="ice">🧊 Mặt băng trơn (μ = 0,10)</option>
            <option value="wood">🪵 Mặt bàn gỗ (μ = 0,40)</option>
            <option value="sandpaper">🧱 Mặt giấy nhám (μ = 0,75)</option>
          </select>
        </div>
        <div>
          <label className="text-xs text-slate-300 flex justify-between">
            <span>Khối lượng hộp gỗ (m):</span>
            <strong className="text-cyan-300">{massKg} kg (P = {weightP} N)</strong>
          </label>
          <input type="range" min={1} max={5} step={0.5} value={massKg} onChange={(e) => setMassKg(Number(e.target.value))} className="w-full accent-cyan-400 mt-1" />
        </div>
        <div>
          <label className="text-xs text-slate-300 flex justify-between">
            <span>Lực kéo nằm ngang (F_kéo):</span>
            <strong className="text-emerald-300">{pullForce} N</strong>
          </label>
          <input type="range" min={0} max={35} step={1} value={pullForce} onChange={(e) => setPullForce(Number(e.target.value))} className="w-full accent-emerald-400 mt-1" />
        </div>
      </div>

      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="space-y-1">
          <div>Ngưỡng trượt (Ma sát nghỉ cực đại): <strong className="text-amber-300">{maxStaticFriction} N</strong></div>
          <div>
            Lực ma sát hiện tại (ngược chiều kéo):{' '}
            <strong className="text-rose-300 text-sm">
              F_ms = {currentFriction} N ({isSliding ? 'Ma sát TRƯỢT' : 'Ma sát NGHỈ'})
            </strong>
          </div>
        </div>
        <div className={`px-4 py-2 rounded-xl font-bold text-xs ${isSliding ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30' : 'bg-amber-500/20 text-amber-300 border border-amber-400/30'}`}>
          {isSliding
            ? `🚀 Vật ĐANG TRƯỢT! (F_kéo = ${pullForce} N > ${maxStaticFriction} N)`
            : `🛑 Vật ĐỨNG YÊN (F_msn = F_kéo = ${pullForce} N)`}
        </div>
      </div>
    </div>
  );
}

/* --- 9. Energy Skate / Pendulum Bar Chart --- */
function EnergySkateSim() {
  const [heightRatio, setHeightRatio] = useState(0.75);
  const [thermalLossPct, setThermalLossPct] = useState(10);

  const totalEnergyJ = 1000;
  const thermalJ = Math.round((thermalLossPct / 100) * totalEnergyJ);
  const remainingMech = totalEnergyJ - thermalJ;
  const potentialJ = Math.round(heightRatio * remainingMech);
  const kineticJ = remainingMech - potentialJ;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-slate-300 flex justify-between">
            <span>Độ cao hiện tại của vật trên dốc trượt:</span>
            <strong className="text-cyan-300">{Math.round(heightRatio * 10)} m / 10 m</strong>
          </label>
          <input type="range" min={0} max={1} step={0.05} value={heightRatio} onChange={(e) => setHeightRatio(Number(e.target.value))} className="w-full accent-cyan-400 mt-1" />
        </div>
        <div>
          <label className="text-xs text-slate-300 flex justify-between">
            <span>Tỉ lệ ma sát chuyển thành Nhiệt năng hao phí:</span>
            <strong className="text-rose-300">{thermalLossPct}%</strong>
          </label>
          <input type="range" min={0} max={50} step={5} value={thermalLossPct} onChange={(e) => setThermalLossPct(Number(e.target.value))} className="w-full accent-rose-400 mt-1" />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 text-center text-xs bg-slate-900 p-4 rounded-xl border border-slate-800">
        <div>
          <div className="text-cyan-300 font-bold">{potentialJ} J</div>
          <div className="text-[11px] text-slate-400">Thế năng hấp dẫn</div>
        </div>
        <div>
          <div className="text-emerald-300 font-bold">{kineticJ} J</div>
          <div className="text-[11px] text-slate-400">Động năng</div>
        </div>
        <div>
          <div className="text-rose-300 font-bold">{thermalJ} J</div>
          <div className="text-[11px] text-slate-400">Nhiệt năng (Hao phí)</div>
        </div>
        <div>
          <div className="text-amber-300 font-extrabold">{totalEnergyJ} J</div>
          <div className="text-[11px] text-slate-400">Tổng năng lượng (Bảo toàn)</div>
        </div>
      </div>
    </div>
  );
}

/* --- 10. Energy Efficiency & Renewable --- */
function EnergyEfficiencyAndRenewableSim({ simKey }: { simKey: string }) {
  const [device, setDevice] = useState<'led' | 'incandescent' | 'fan'>('led');
  const [inputJ, setInputJ] = useState(1000);

  const specs = {
    led: { name: 'Bóng đèn LED tiết kiệm điện', eff: 85, usefulType: 'Quang năng (Ánh sáng)', wasteType: 'Nhiệt năng' },
    incandescent: { name: 'Bóng đèn sợi đốt dây tóc', eff: 8, usefulType: 'Quang năng (Ánh sáng)', wasteType: 'Nhiệt năng tỏa nóng' },
    fan: { name: 'Quạt điện gia đình', eff: 80, usefulType: 'Động năng (Quay cánh quạt)', wasteType: 'Nhiệt năng + Âm thanh' },
  }[device];

  const usefulJ = Math.round((specs.eff / 100) * inputJ);
  const wasteJ = inputJ - usefulJ;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-slate-300 block mb-1">
            {simKey === 'renewable_energy_lab' ? 'Chọn thiết bị tiêu thụ nguồn điện sạch:' : 'Chọn thiết bị khảo sát hiệu suất:'}
          </label>
          <select
            value={device}
            onChange={(e) => setDevice(e.target.value as any)}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
          >
            <option value="led">💡 Bóng đèn LED (Hiệu suất 85%)</option>
            <option value="incandescent">🔥 Bóng đèn sợi đốt cũ (Hiệu suất 8%)</option>
            <option value="fan">🌀 Quạt điện (Hiệu suất 80%)</option>
          </select>
        </div>
        <div>
          <label className="text-xs text-slate-300 flex justify-between">
            <span>Năng lượng toàn phần đầu vào (W_tp):</span>
            <strong className="text-cyan-300">{inputJ} J</strong>
          </label>
          <input type="range" min={200} max={2000} step={100} value={inputJ} onChange={(e) => setInputJ(Number(e.target.value))} className="w-full accent-cyan-400 mt-1" />
        </div>
      </div>

      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-emerald-300 font-semibold">✔ Năng lượng có ích ({specs.usefulType}): {usefulJ} J ({specs.eff}%)</span>
          <span className="text-rose-300 font-semibold">✖ Năng lượng hao phí ({specs.wasteType}): {wasteJ} J ({100 - specs.eff}%)</span>
        </div>
        <div className="w-full h-4 rounded-full bg-rose-500/40 overflow-hidden flex">
          <div className="h-full bg-emerald-400 transition-all" style={{ width: `${specs.eff}%` }} />
        </div>
        <div className="text-slate-400 pt-1">
          Định luật bảo toàn năng lượng: W_tp = W_ích + W_hp = {usefulJ} J + {wasteJ} J = <strong className="text-white">{inputJ} J</strong>
        </div>
      </div>
    </div>
  );
}

/* --- 11. Earth Day/Night & Flagpole Shadow --- */
function EarthDayNightSim() {
  const [hour, setHour] = useState(9);

  const isDay = hour >= 6 && hour <= 18;
  const sunPositionDesc =
    hour < 6
      ? 'Ban đêm (Chưa mọc)'
      : hour < 11
      ? 'Buổi sáng - Mặt Trời ở hướng ĐÔNG'
      : hour <= 13
      ? 'Giữa trưa - Mặt Trời lên cao nhất (Thiên đỉnh)'
      : hour <= 18
      ? 'Buổi chiều - Mặt Trời ở hướng TÂY'
      : 'Ban đêm (Đã lặn)';

  const shadowDesc =
    !isDay
      ? 'Không có bóng nắng (Ban đêm)'
      : hour < 12
      ? 'Bóng cột cờ ngả về hướng TÂY'
      : hour === 12
      ? 'Bóng cột cờ NGẮN NHẤT ngay dưới chân cột'
      : 'Bóng cột cờ ngả về hướng ĐÔNG';

  return (
    <div className="space-y-4">
      <div>
        <label className="text-xs text-slate-300 flex justify-between">
          <span>Thời gian trong ngày (Giờ địa phương):</span>
          <strong className="text-amber-300 text-sm">{hour}:00 ({isDay ? '☀️ Ban ngày' : '🌙 Ban đêm'})</strong>
        </label>
        <input type="range" min={0} max={24} step={1} value={hour} onChange={(e) => setHour(Number(e.target.value))} className="w-full accent-amber-400 mt-1" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
          <div className="text-slate-400">Góc tự quay của Trái Đất (Tây → Đông)</div>
          <div className="text-lg font-bold text-cyan-300 mt-1">{hour * 15}° (sau {hour} giờ)</div>
        </div>
        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
          <div className="text-slate-400">Vị trí nhìn thấy của Mặt Trời</div>
          <div className="text-sm font-bold text-amber-300 mt-1">{sunPositionDesc}</div>
        </div>
        <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
          <div className="text-slate-400">Hướng bóng nắng cột cờ</div>
          <div className="text-sm font-bold text-emerald-300 mt-1">{shadowDesc}</div>
        </div>
      </div>
    </div>
  );
}

/* --- 12. Moon Phases (1 -> 30 Lunar Day) --- */
function MoonPhasesSim() {
  const [lunarDay, setLunarDay] = useState(15);

  const getPhaseInfo = (d: number) => {
    if (d === 1 || d === 30) return { name: 'Không trăng (Tân nguyệt / Sóc)', icon: '🌑', pos: 'Mặt Trăng nằm giữa Mặt Trời và Trái Đất' };
    if (d >= 2 && d <= 6) return { name: 'Trăng lưỡi liềm đầu tháng', icon: '🌒', pos: 'Góc lệch nhọn đầu tháng' };
    if (d >= 7 && d <= 9) return { name: 'Trăng bán nguyệt đầu tháng (Thượng huyền)', icon: '🌓', pos: 'Vuông góc 90° so với tia sáng Mặt Trời' };
    if (d >= 10 && d <= 14) return { name: 'Trăng khuyết (trăng gù) đầu tháng', icon: '🌔', pos: 'Gần đối diện Mặt Trời' };
    if (d === 15 || d === 16) return { name: 'Trăng tròn (Đêm Rằm / Vọng)', icon: '🌕', pos: 'Trái Đất nằm giữa Mặt Trời và Mặt Trăng' };
    if (d >= 17 && d <= 21) return { name: 'Trăng khuyết cuối tháng', icon: '🌖', pos: 'Sau ngày Rằm' };
    if (d >= 22 && d <= 24) return { name: 'Trăng bán nguyệt cuối tháng (Hạ huyền)', icon: '🌗', pos: 'Vuông góc 90° nửa cuối tháng' };
    return { name: 'Trăng lưỡi liềm cuối tháng', icon: '🌘', pos: 'Sắp quay về vị trí Không trăng' };
  };

  const info = getPhaseInfo(lunarDay);

  return (
    <div className="space-y-4">
      <div>
        <label className="text-xs text-slate-300 flex justify-between">
          <span>Chọn Ngày Âm Lịch trong tháng (Chu kỳ 29,5 ngày):</span>
          <strong className="text-amber-300 text-sm">Ngày {lunarDay} Âm lịch</strong>
        </label>
        <input type="range" min={1} max={30} step={1} value={lunarDay} onChange={(e) => setLunarDay(Number(e.target.value))} className="w-full accent-amber-400 mt-1" />
      </div>

      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-5">
        <div className="text-5xl select-none">{info.icon}</div>
        <div className="space-y-1 text-xs">
          <div className="text-base font-bold text-amber-300">{info.name}</div>
          <div className="text-slate-300">Vị trí không gian: <strong>{info.pos}</strong></div>
          <div className="text-slate-400">Góc quỹ đạo quanh Trái Đất: <strong>{Math.round(((lunarDay - 1) / 29.5) * 360)}°</strong></div>
        </div>
      </div>
    </div>
  );
}

/* --- 13. Solar System 8 Planets --- */
function SolarSystemSim() {
  const planets = [
    { order: 1, name: 'Thủy tinh (Mercury)', group: 'Hành tinh đất đá', distAU: 0.39, period: '88 ngày', temp: '167°C', note: 'Gần Mặt Trời nhất & nhỏ nhất' },
    { order: 2, name: 'Kim tinh (Venus / Sao Mai - Sao Hôm)', group: 'Hành tinh đất đá', distAU: 0.72, period: '225 ngày', temp: '465°C', note: 'Nóng nhất Hệ Mặt Trời do hiệu ứng nhà kính CO₂' },
    { order: 3, name: 'Trái Đất (Earth)', group: 'Hành tinh đất đá', distAU: 1.0, period: '365,25 ngày', temp: '15°C', note: 'Hành tinh duy nhất có nước lỏng bề mặt & sự sống' },
    { order: 4, name: 'Hỏa tinh (Mars)', group: 'Hành tinh đất đá', distAU: 1.52, period: '687 ngày', temp: '-65°C', note: 'Hành tinh Đỏ (bề mặt giàu oxit sắt)' },
    { order: 5, name: 'Mộc tinh (Jupiter)', group: 'Hành tinh khí khổng lồ', distAU: 5.2, period: '11,9 năm', temp: '-110°C', note: 'Hành tinh LỚN NHẤT trong Hệ Mặt Trời' },
    { order: 6, name: 'Thổ tinh (Saturn)', group: 'Hành tinh khí khổng lồ', distAU: 9.5, period: '29,5 năm', temp: '-140°C', note: 'Nổi tiếng với hệ thống vành đai băng đá rực rỡ' },
    { order: 7, name: 'Thiên Vương tinh (Uranus)', group: 'Hành tinh băng khổng lồ', distAU: 19.2, period: '84 năm', temp: '-195°C', note: 'Trục tự quay nằm ngang độc đáo' },
    { order: 8, name: 'Hải Vương tinh (Neptune)', group: 'Hành tinh băng khổng lồ', distAU: 30.1, period: '165 năm', temp: '-200°C', note: 'Xa Mặt Trời nhất, có những cơn bão gió siêu thanh' },
  ];

  const [selectedIdx, setSelectedIdx] = useState(2);
  const p = planets[selectedIdx];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-1.5">
        {planets.map((pl, idx) => (
          <button
            key={pl.order}
            type="button"
            onClick={() => setSelectedIdx(idx)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              selectedIdx === idx ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {pl.order}. {pl.name.split(' (')[0]}
          </button>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="space-y-1.5">
          <div className="text-base font-bold text-amber-300">
            Vị trí số {p.order}: {p.name}
          </div>
          <div>Phân nhóm: <strong className="text-cyan-300">{p.group}</strong></div>
          <div>Đặc điểm nổi bật: <strong className="text-emerald-300">{p.note}</strong></div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2.5 rounded-lg bg-slate-950">
            <div className="text-slate-400">Khoảng cách</div>
            <div className="font-bold text-white mt-0.5">{p.distAU} AU</div>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950">
            <div className="text-slate-400">Chu kỳ 1 năm</div>
            <div className="font-bold text-cyan-300 mt-0.5">{p.period}</div>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-950">
            <div className="text-slate-400">Nhiệt độ TB</div>
            <div className="font-bold text-amber-300 mt-0.5">{p.temp}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- 14. Grade 7: Speed, Safe Distance & s-t Graph Lab --- */
function SpeedGraphSim() {
  const [speedKmh, setSpeedKmh] = useState(72);
  const [timeSec, setTimeSec] = useState(10);
  const [wetRoad, setWetRoad] = useState(false);

  const speedMs = Number((speedKmh / 3.6).toFixed(2));
  const distanceM = Number((speedMs * timeSec).toFixed(1));
  const safeDist3s = Number((speedMs * (wetRoad ? 5 : 3)).toFixed(1));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
        <div className="text-sm font-semibold text-cyan-300">
          1. Tốc độ v = s / t & Quy đổi km/h ↔ m/s
        </div>
        <div>
          <label className="text-xs text-slate-300 flex justify-between">
            <span>Tốc độ xe (v):</span>
            <strong className="text-amber-300">{speedKmh} km/h = {speedMs} m/s</strong>
          </label>
          <input
            type="range"
            min={18}
            max={126}
            step={9}
            value={speedKmh}
            onChange={(e) => setSpeedKmh(Number(e.target.value))}
            className="w-full accent-amber-400 mt-1"
          />
        </div>
        <div>
          <label className="text-xs text-slate-300 flex justify-between">
            <span>Thời gian chuyển động (t):</span>
            <strong className="text-cyan-300">{timeSec} giây</strong>
          </label>
          <input
            type="range"
            min={1}
            max={30}
            step={1}
            value={timeSec}
            onChange={(e) => setTimeSec(Number(e.target.value))}
            className="w-full accent-cyan-400 mt-1"
          />
        </div>
        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1 text-xs">
          <div>Quãng đường đi được: <strong className="text-emerald-300 text-sm">s = v · t = {speedMs} × {timeSec} = {distanceM} m</strong></div>
          <div className="text-slate-400">Độ dốc đồ thị s–t: tan(α) = {speedMs} m/s</div>
        </div>
      </div>

      <div className="space-y-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
        <div className="text-sm font-semibold text-emerald-300">
          2. Quy tắc "3 giây" & Khoảng cách an toàn
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-300">Điều kiện mặt đường:</span>
          <button
            type="button"
            onClick={() => setWetRoad(!wetRoad)}
            className={`px-3 py-1 rounded-lg font-semibold transition ${
              wetRoad ? 'bg-blue-600 text-white' : 'bg-emerald-600 text-white'
            }`}
          >
            {wetRoad ? '🌧️ Trời mưa / Đường trơn (5 giây)' : '☀️ Đường khô ráo (3 giây)'}
          </button>
        </div>
        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span>🚗 Xe của bạn ({speedKmh} km/h)</span>
            <span className="text-amber-300 font-mono">◄──── {safeDist3s} m ────►</span>
            <span>🚙 Xe phía trước</span>
          </div>
          <div className="text-slate-300">
            Khoảng cách an toàn tối thiểu: <strong className="text-emerald-400 text-sm">{safeDist3s} m</strong>
          </div>
          <div className="text-slate-400">
            Trong 1 giây phản xạ chưa kịp đạp phanh, xe đã trôi đi <strong className="text-rose-400">{speedMs} m</strong>!
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- 15. Grade 7: Sound Wave Frequency, Amplitude & Sonar Echo Lab --- */
function SoundWaveEchoSim() {
  const [freqHz, setFreqHz] = useState(440);
  const [ampDb, setAmpDb] = useState(60);
  const [echoTime, setEchoTime] = useState(0.8);
  const [medium, setMedium] = useState<'air' | 'water'>('water');

  const waveSpeed = medium === 'water' ? 1500 : 340;
  const obstacleDist = Number(((waveSpeed * echoTime) / 2).toFixed(1));
  const pitchDesc = freqHz < 200 ? 'Âm trầm (Thấp)' : freqHz <= 600 ? 'Âm trung (Vừa)' : 'Âm bổng (Cao)';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
        <div className="text-sm font-semibold text-indigo-300">
          1. Tần số f (Độ cao) & Biên độ A (Độ to)
        </div>
        <div>
          <label className="text-xs text-slate-300 flex justify-between">
            <span>Tần số sóng âm (f):</span>
            <strong className="text-indigo-300">{freqHz} Hz ({pitchDesc})</strong>
          </label>
          <input type="range" min={100} max={1000} step={20} value={freqHz} onChange={(e) => setFreqHz(Number(e.target.value))} className="w-full accent-indigo-400 mt-1" />
        </div>
        <div>
          <label className="text-xs text-slate-300 flex justify-between">
            <span>Biên độ / Độ to của âm (L):</span>
            <strong className="text-amber-300">{ampDb} dB</strong>
          </label>
          <input type="range" min={20} max={100} step={5} value={ampDb} onChange={(e) => setAmpDb(Number(e.target.value))} className="w-full accent-amber-400 mt-1" />
        </div>
        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs space-y-1">
          <div>Số dao động trong 1 giây: <strong className="text-white">{freqHz} dao động/s</strong></div>
          <div>Trạng thái âm: <strong className={ampDb >= 85 ? 'text-rose-400' : 'text-emerald-400'}>{ampDb >= 85 ? '⚠️ Tiếng ồn lớn (Ảnh hưởng thính giác)' : '✅ Mức âm an toàn'}</strong></div>
        </div>
      </div>

      <div className="space-y-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
        <div className="text-sm font-semibold text-cyan-300">
          2. Phản xạ âm & Định vị Sonar: d = (v · t) / 2
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setMedium('water')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold ${medium === 'water' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
          >
            🌊 Nước biển (v = 1500 m/s)
          </button>
          <button
            type="button"
            onClick={() => setMedium('air')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold ${medium === 'air' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
          >
            🌬️ Không khí (v = 340 m/s)
          </button>
        </div>
        <div>
          <label className="text-xs text-slate-300 flex justify-between">
            <span>Thời gian thu âm phản xạ (t):</span>
            <strong className="text-cyan-300">{echoTime} s</strong>
          </label>
          <input type="range" min={0.1} max={3.0} step={0.1} value={echoTime} onChange={(e) => setEchoTime(Number(e.target.value))} className="w-full accent-cyan-400 mt-1" />
        </div>
        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs space-y-1">
          <div>Tổng quãng đường âm đi và về (2d): <strong>{(obstacleDist * 2).toFixed(1)} m</strong></div>
          <div className="text-emerald-300 font-bold text-sm">
            Khoảng cách tới mặt chắn: d = ({waveSpeed} × {echoTime}) / 2 = {obstacleDist} m
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- 16. Grade 7: Light Reflection & Plane Mirror Lab --- */
function LightReflectionMirrorSim() {
  const [incidentAngle, setIncidentAngle] = useState(40);
  const [objectDist, setObjectDist] = useState(25);

  const reflectedAngle = incidentAngle;
  const mirrorAngleAlpha = 90 - incidentAngle;
  const totalAngleBetweenRays = incidentAngle * 2;
  const imageDist = objectDist;
  const objectToImageDist = objectDist * 2;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
        <div className="text-sm font-semibold text-amber-300">
          1. Định luật phản xạ ánh sáng (i' = i)
        </div>
        <div>
          <label className="text-xs text-slate-300 flex justify-between">
            <span>Góc tới (i = ∠SIN so với pháp tuyến):</span>
            <strong className="text-amber-300">{incidentAngle}°</strong>
          </label>
          <input type="range" min={0} max={85} step={5} value={incidentAngle} onChange={(e) => setIncidentAngle(Number(e.target.value))} className="w-full accent-amber-400 mt-1" />
        </div>
        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5 text-xs">
          <div>Góc phản xạ (i' = ∠NIR): <strong className="text-emerald-300">{reflectedAngle}° (Luôn bằng góc tới i)</strong></div>
          <div>Góc hợp bởi tia tới và mặt gương (α = 90° - i): <strong className="text-cyan-300">{mirrorAngleAlpha}°</strong></div>
          <div>Góc hợp bởi tia tới và tia phản xạ (∠SIR = 2i): <strong className="text-white">{totalAngleBetweenRays}°</strong></div>
        </div>
      </div>

      <div className="space-y-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
        <div className="text-sm font-semibold text-indigo-300">
          2. Ảnh ảo tạo bởi Gương phẳng (d' = d)
        </div>
        <div>
          <label className="text-xs text-slate-300 flex justify-between">
            <span>Khoảng cách từ vật AB đến gương (d):</span>
            <strong className="text-indigo-300">{objectDist} cm</strong>
          </label>
          <input type="range" min={5} max={60} step={5} value={objectDist} onChange={(e) => setObjectDist(Number(e.target.value))} className="w-full accent-indigo-400 mt-1" />
        </div>
        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5 text-xs">
          <div>Tính chất ảnh A'B': <strong className="text-amber-300">Ảnh ảo, cùng chiều, lớn bằng vật (h' = h)</strong></div>
          <div>Khoảng cách từ ảnh A'B' đến gương (d'): <strong className="text-cyan-300">{imageDist} cm</strong></div>
          <div className="text-emerald-300 font-bold">
            Khoảng cách từ vật đến ảnh (L = 2d): {objectToImageDist} cm
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- 17. Grade 7: Magnetism, Electromagnet & Earth Compass Lab --- */
function MagnetismElectromagnetSim() {
  const [turnsN, setTurnsN] = useState(200);
  const [currentI, setCurrentI] = useState(1.5);
  const [reversedPolarity, setReversedPolarity] = useState(false);
  const [hasIronCore, setHasIronCore] = useState(true);

  const ampTurns = Math.round(turnsN * currentI * (hasIronCore ? 1 : 0.2));
  const clipsAttr = Math.round(ampTurns / 15);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
        <div className="text-sm font-semibold text-rose-300">
          1. Nam châm điện (Điều chỉnh N, I & Đảo cực)
        </div>
        <div>
          <label className="text-xs text-slate-300 flex justify-between">
            <span>Số vòng dây (N):</span>
            <strong className="text-amber-300">{turnsN} vòng</strong>
          </label>
          <input type="range" min={50} max={400} step={50} value={turnsN} onChange={(e) => setTurnsN(Number(e.target.value))} className="w-full accent-amber-400 mt-1" />
        </div>
        <div>
          <label className="text-xs text-slate-300 flex justify-between">
            <span>Cường độ dòng điện (I):</span>
            <strong className="text-cyan-300">{currentI} A</strong>
          </label>
          <input type="range" min={0} max={3.0} step={0.5} value={currentI} onChange={(e) => setCurrentI(Number(e.target.value))} className="w-full accent-cyan-400 mt-1" />
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          <button
            type="button"
            onClick={() => setReversedPolarity(!reversedPolarity)}
            className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
          >
            🔄 Đổi chiều dòng điện
          </button>
          <button
            type="button"
            onClick={() => setHasIronCore(!hasIronCore)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${hasIronCore ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'}`}
          >
            {hasIronCore ? '✅ Có lõi sắt non' : '❌ Đã rút lõi sắt non'}
          </button>
        </div>
      </div>

      <div className="space-y-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
        <div className="text-sm font-semibold text-emerald-300">
          2. Trạng thái Từ cực & Đường sức từ ("Ra Bắc – Vào Nam")
        </div>
        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-2 text-xs">
          {currentI === 0 ? (
            <div className="text-rose-400 font-bold">
              ⚡ Dòng điện I = 0 A: Lõi sắt non mất hoàn toàn từ tính (Hút 0 đinh sắt)!
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between font-bold text-sm">
                <span className={reversedPolarity ? 'text-blue-400' : 'text-rose-400'}>
                  Đầu Trái: {reversedPolarity ? 'Cực Nam (S)' : 'Cực Bắc (N)'}
                </span>
                <span className="text-slate-400">═══[Ống dây]═══</span>
                <span className={reversedPolarity ? 'text-rose-400' : 'text-blue-400'}>
                  Đầu Phải: {reversedPolarity ? 'Cực Bắc (N)' : 'Cực Nam (S)'}
                </span>
              </div>
              <div>
                Số ghim sắt hút được: <strong className="text-emerald-400 text-sm">{clipsAttr} chiếc ghim</strong>
              </div>
              <div className="text-slate-400">
                Chiều đường sức từ ngoài ống dây: Đi ra từ cực Bắc (N) và đi vào cực Nam (S).
              </div>
            </>
          )}
        </div>
        <div className="p-2.5 rounded-lg bg-indigo-950/50 border border-indigo-800/60 text-[11px] text-indigo-200">
          🧭 <strong>Từ trường Trái Đất:</strong> Vùng Bắc Cực địa lý thực chất là <strong>Cực Nam từ (S)</strong> nên hút cực Bắc (N) của kim la bàn chỉ về hướng Bắc!
        </div>
      </div>
    </div>
  );
}



/* =========================================================================
   MODULAR ENGINE 1: FLUID PRESSURE & ARCHIMEDES BUOYANCY
   Supports: fluid_pressure_archimedes_lab, density_pressure_lab, 
             archimedes_buoyancy_lab, atmospheric_pressure_lab,
             g8_density_lab, g8_pressure_surface_lab, g8_buoyancy_archimedes_lab
   ========================================================================= */
function FluidPressureArchimedesSim({ simKey, params = {} }: { simKey: string; params?: Record<string, any> }) {
  const initialMode = params.mode || (
    simKey.includes('pressure_surface') ? 'surface_pressure' :
    simKey.includes('density') || simKey.includes('buoyancy') || simKey.includes('archimedes') ? 'buoyancy' :
    'depth_pressure'
  );
  const [mode, setMode] = useState<'buoyancy' | 'depth_pressure' | 'surface_pressure'>(initialMode);

  // Fluid selector
  const [fluidType, setFluidType] = useState<string>(params.fluid || 'water');
  const fluids: Record<string, { name: string; density: number; color: string }> = {
    water: { name: 'Nước ngọt (1000 kg/m³)', density: 1000, color: 'rgba(56, 189, 248, 0.4)' },
    oil: { name: 'Dầu hỏa (800 kg/m³)', density: 800, color: 'rgba(251, 191, 36, 0.4)' },
    seawater: { name: 'Nước biển (1030 kg/m³)', density: 1030, color: 'rgba(14, 165, 233, 0.5)' },
    mercury: { name: 'Thủy ngân (13600 kg/m³)', density: 13600, color: 'rgba(148, 163, 184, 0.65)' },
  };
  const currentFluid = fluids[fluidType] || fluids.water;
  const rhoFluid = currentFluid.density;

  // Object material
  const [objMaterial, setObjMaterial] = useState<string>(params.material || 'wood');
  const materials: Record<string, { name: string; density: number; color: string }> = {
    foam: { name: 'Xốp nhẹ (120 kg/m³)', density: 120, color: '#fef08a' },
    wood: { name: 'Gỗ thông (650 kg/m³)', density: 650, color: '#b45309' },
    plastic: { name: 'Nhựa kỹ thuật (950 kg/m³)', density: 950, color: '#0284c7' },
    aluminum: { name: 'Nhôm (2700 kg/m³)', density: 2700, color: '#cbd5e1' },
    iron: { name: 'Sắt thép (7800 kg/m³)', density: 7800, color: '#64748b' },
  };
  const currentMaterial = materials[objMaterial] || materials.wood;
  const rhoObj = currentMaterial.density;

  // Controls
  const [volumeCm3, setVolumeCm3] = useState<number>(params.volume || 600); // cm³
  const [depthCm, setDepthCm] = useState<number>(params.depth || 18); // cm
  const [forceN, setForceN] = useState<number>(params.force || 120); // N
  const [areaCm2, setAreaCm2] = useState<number>(params.area || 30); // cm²

  // Physics calculations
  const g = 9.8;
  const volM3 = volumeCm3 * 1e-6;
  const massKg = rhoObj * volM3;
  const gravityP = massKg * g;

  // Buoyancy state
  const isFloating = rhoObj < rhoFluid;
  const floatSubFraction = Math.min(1, rhoObj / rhoFluid);
  const immersionSubFraction = Math.min(1, Math.max(0.1, depthCm / 25));
  
  const subFraction = mode === 'buoyancy' 
    ? (isFloating ? floatSubFraction : 1.0)
    : immersionSubFraction;

  const submergedVolM3 = volM3 * subFraction;
  const archimedesForce = rhoFluid * g * submergedVolM3;

  // Hydrostatic pressure at depth (Pa)
  const depthM = depthCm / 100;
  const hydroPressurePa = rhoFluid * g * depthM;

  // Surface pressure: p = F / S
  const areaM2 = Math.max(1e-4, areaCm2 * 1e-4);
  const surfacePressurePa = forceN / areaM2;

  // SVG coordinates
  const beakerX = 40;
  const beakerY = 40;
  const beakerW = 210;
  const beakerH = 200;
  const waterSurfaceY = beakerY + 50;
  const waterHeight = beakerH - 50;

  const blockSize = Math.round(36 + Math.cbrt(volumeCm3) * 2.8);
  let blockVisualY = waterSurfaceY;
  if (mode === 'buoyancy') {
    if (isFloating) {
      blockVisualY = waterSurfaceY - blockSize * (1 - floatSubFraction);
    } else {
      blockVisualY = beakerY + beakerH - blockSize - 4; // Resting on bottom
    }
  } else {
    blockVisualY = waterSurfaceY + Math.min(waterHeight - blockSize - 4, (depthCm / 35) * (waterHeight - blockSize));
  }
  const blockVisualX = beakerX + beakerW / 2 - blockSize / 2;

  const pArrowLen = Math.min(65, Math.max(18, gravityP * 7));
  const faArrowLen = Math.min(65, Math.max(18, archimedesForce * 7));
  const manometerDeltaH = Math.min(80, Math.max(5, (hydroPressurePa / 1000) * 18));

  return (
    <div className="space-y-4">
      {/* Mode Selector */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setMode('buoyancy')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'buoyancy' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Lực đẩy Archimedes & Sự nổi
        </button>
        <button
          onClick={() => setMode('depth_pressure')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'depth_pressure' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Áp suất chất lỏng & Áp kế ($p = \rho gh$)
        </button>
        <button
          onClick={() => setMode('surface_pressure')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'surface_pressure' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Áp lực & Áp suất bề mặt ($p = F/S$)
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-3.5 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
          {mode !== 'surface_pressure' ? (
            <>
              <div>
                <label className="text-[11px] font-medium text-slate-400 block mb-1">Chất lỏng trong bình:</label>
                <select
                  value={fluidType}
                  onChange={(e) => setFluidType(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                >
                  {Object.entries(fluids).map(([key, f]) => (
                    <option key={key} value={key}>{f.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[11px] font-medium text-slate-400 block mb-1">Vật liệu khối vật:</label>
                <select
                  value={objMaterial}
                  onChange={(e) => setObjMaterial(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                >
                  {Object.entries(materials).map(([key, m]) => (
                    <option key={key} value={key}>{m.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Thể tích vật ($V$):</span>
                  <span className="font-semibold text-cyan-400">{volumeCm3} cm³ ({massKg.toFixed(2)} kg)</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="1200"
                  step="50"
                  value={volumeCm3}
                  onChange={(e) => setVolumeCm3(Number(e.target.value))}
                  className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              {mode === 'depth_pressure' && (
                <div>
                  <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                    <span>Độ sâu ngập ($h$):</span>
                    <span className="font-semibold text-amber-400">{depthCm} cm</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="35"
                    step="1"
                    value={depthCm}
                    onChange={(e) => setDepthCm(Number(e.target.value))}
                    className="w-full accent-amber-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                  />
                </div>
              )}
            </>
          ) : (
            <>
              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Áp lực tác dụng ($F$):</span>
                  <span className="font-semibold text-rose-400">{forceN} N</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={forceN}
                  onChange={(e) => setForceN(Number(e.target.value))}
                  className="w-full accent-rose-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Diện tích bị ép ($S$):</span>
                  <span className="font-semibold text-indigo-400">{areaCm2} cm²</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={areaCm2}
                  onChange={(e) => setAreaCm2(Number(e.target.value))}
                  className="w-full accent-indigo-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>
            </>
          )}

          {/* Quick Real-Time Metrics */}
          <div className="pt-2 border-t border-slate-800 space-y-2 text-xs">
            {mode !== 'surface_pressure' ? (
              <>
                <div className="flex justify-between">
                  <span className="text-slate-400">Lực đẩy Archimedes ($F_A$):</span>
                  <span className="font-bold text-emerald-400">{archimedesForce.toFixed(2)} N</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Trọng lượng vật ($P$):</span>
                  <span className="font-bold text-rose-400">{gravityP.toFixed(2)} N</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Áp suất thủy tĩnh ($p = \rho gh$):</span>
                  <span className="font-bold text-cyan-400">{hydroPressurePa.toFixed(0)} Pa ({(hydroPressurePa / 1000).toFixed(2)} kPa)</span>
                </div>
                <div className="p-2 rounded bg-slate-900 text-[11px] text-slate-300 border border-slate-800">
                  {rhoObj < rhoFluid ? (
                    <span className="text-emerald-300 font-medium">✓ Vật nổi trên mặt thoáng: D_vật &lt; D_lỏng, F_A = P ({Math.round(floatSubFraction * 100)}% thể tích chìm).</span>
                  ) : rhoObj === rhoFluid ? (
                    <span className="text-blue-300 font-medium">✓ Vật lơ lửng trong lòng chất lỏng: D_vật = D_lỏng, F_A = P.</span>
                  ) : (
                    <span className="text-amber-300 font-medium">⚠ Vật chìm xuống đáy: D_vật &gt; D_lỏng, P &gt; F_A (áp lực lên đáy: {(gravityP - archimedesForce).toFixed(2)} N).</span>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between">
                  <span className="text-slate-400">Áp lực $F$:</span>
                  <span className="font-bold text-rose-400">{forceN} N</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Diện tích bị ép $S$:</span>
                  <span className="font-bold text-indigo-400">{areaCm2} cm² ({(areaM2).toFixed(4)} m²)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Áp suất bề mặt ($p = F/S$):</span>
                  <span className="font-bold text-emerald-400">{surfacePressurePa.toFixed(0)} Pa ({(surfacePressurePa / 1000).toFixed(2)} kPa)</span>
                </div>
                <div className="p-2 rounded bg-slate-900 text-[11px] text-slate-300 border border-slate-800">
                  💡 Áp suất tỉ lệ thuận với áp lực $F$ và tỉ lệ nghịch với diện tích bị ép $S$. Để tăng áp suất (mũi kim, lưỡi dao), cần giảm tối đa diện tích tiếp xúc $S$.
                </div>
              </>
            )}
          </div>
        </div>

        {/* Visual SVG Column */}
        <div className="lg:col-span-7 bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-center items-center">
          <svg viewBox="0 0 460 260" className="w-full h-auto max-h-[300px]" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="beakerFluidGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={currentFluid.color} stopOpacity="0.8" />
                <stop offset="100%" stopColor={currentFluid.color} stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="metalBlockGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={currentMaterial.color} />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
              <marker id="arrowUpGreen" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,6 L3,0 L6,6 Z" fill="#10b981" />
              </marker>
              <marker id="arrowDownRed" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L3,6 L6,0 Z" fill="#ef4444" />
              </marker>
            </defs>

            {mode !== 'surface_pressure' ? (
              <>
                {/* Beaker Container */}
                <rect x={beakerX} y={beakerY} width={beakerW} height={beakerH} rx="6" fill="#0f172a" stroke="#64748b" strokeWidth="2.5" />
                
                {/* Fluid Fill */}
                <rect x={beakerX + 2} y={waterSurfaceY} width={beakerW - 4} height={waterHeight - 2} rx="4" fill="url(#beakerFluidGrad)" />
                <line x1={beakerX + 2} y1={waterSurfaceY} x2={beakerX + beakerW - 2} y2={waterSurfaceY} stroke="#38bdf8" strokeWidth="2" strokeDasharray="3,2" />
                
                {/* Beaker Scale Marks */}
                {[0, 1, 2, 3, 4].map((i) => {
                  const y = beakerY + 60 + i * 30;
                  return (
                    <g key={i}>
                      <line x1={beakerX + 4} y1={y} x2={beakerX + 16} y2={y} stroke="#94a3b8" strokeWidth="1.5" />
                      <text x={beakerX + 20} y={y + 3.5} fill="#64748b" fontSize="8" fontFamily="monospace">
                        {(4 - i) * 250} ml
                      </text>
                    </g>
                  );
                })}

                {/* Submerged/Floating Block */}
                <rect
                  x={blockVisualX}
                  y={blockVisualY}
                  width={blockSize}
                  height={blockSize}
                  rx="4"
                  fill="url(#metalBlockGrad)"
                  stroke="#f8fafc"
                  strokeWidth="1.5"
                  className="transition-all duration-300"
                />
                <text
                  x={blockVisualX + blockSize / 2}
                  y={blockVisualY + blockSize / 2 + 3}
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="9"
                  fontWeight="bold"
                >
                  {currentMaterial.name.split(' ')[0]}
                </text>

                {/* Force Vector: Archimedes Upward */}
                <line
                  x1={blockVisualX + blockSize / 2}
                  y1={blockVisualY + blockSize / 2}
                  x2={blockVisualX + blockSize / 2}
                  y2={blockVisualY + blockSize / 2 - faArrowLen}
                  stroke="#10b981"
                  strokeWidth="2.5"
                  markerEnd="url(#arrowUpGreen)"
                />
                <text
                  x={blockVisualX + blockSize / 2 + 8}
                  y={blockVisualY + blockSize / 2 - faArrowLen + 6}
                  fill="#10b981"
                  fontSize="10"
                  fontWeight="bold"
                >
                  F_A
                </text>

                {/* Force Vector: Gravity Downward */}
                <line
                  x1={blockVisualX + blockSize / 2}
                  y1={blockVisualY + blockSize / 2}
                  x2={blockVisualX + blockSize / 2}
                  y2={blockVisualY + blockSize / 2 + pArrowLen}
                  stroke="#ef4444"
                  strokeWidth="2.5"
                  markerEnd="url(#arrowDownRed)"
                />
                <text
                  x={blockVisualX + blockSize / 2 + 8}
                  y={blockVisualY + blockSize / 2 + pArrowLen - 2}
                  fill="#ef4444"
                  fontSize="10"
                  fontWeight="bold"
                >
                  P
                </text>

                {/* U-Tube Manometer on Right Side */}
                <g transform="translate(290, 50)">
                  <text x="50" y="0" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">
                    Áp kế chữ U (Manometer)
                  </text>
                  {/* U Tube Outline */}
                  <path
                    d="M 25,20 L 25,160 Q 25,180 50,180 Q 75,180 75,160 L 75,20"
                    fill="none"
                    stroke="#475569"
                    strokeWidth="12"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 25,20 L 25,160 Q 25,180 50,180 Q 75,180 75,160 L 75,20"
                    fill="none"
                    stroke="#0f172a"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  {/* Manometer Liquid Fill */}
                  <path
                    d={`M 25,${100 + manometerDeltaH / 2} L 25,160 Q 25,180 50,180 Q 75,180 75,160 L 75,${100 - manometerDeltaH / 2}`}
                    fill="none"
                    stroke="#f43f5e"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  {/* Delta h indicator */}
                  <line x1="88" y1={100 - manometerDeltaH / 2} x2="88" y2={100 + manometerDeltaH / 2} stroke="#38bdf8" strokeWidth="1.5" />
                  <text x="96" y={105} fill="#38bdf8" fontSize="9" fontWeight="bold">Δh ∝ p</text>

                  {/* Probe connection tube from beaker to manometer */}
                  <path
                    d={`M ${-40},${blockVisualY - 20} Q 0,${blockVisualY - 40} 25,20`}
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    strokeDasharray="4,3"
                  />
                </g>
              </>
            ) : (
              /* Surface Pressure Diagram: Piston Pressing Surface */
              <g transform="translate(80, 20)">
                <text x="150" y="20" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">
                  Mô hình Áp lực & Áp suất trên bề mặt ($p = F / S$)
                </text>
                
                {/* Surface Bed */}
                <rect x="20" y="190" width="260" height="30" fill="#334155" rx="4" />
                <line x1="20" y1="190" x2="280" y2="190" stroke="#64748b" strokeWidth="3" />

                {/* Contact Area Plate */}
                {(() => {
                  const plateW = Math.max(30, (areaCm2 / 100) * 180);
                  const plateX = 150 - plateW / 2;
                  const pressDepth = Math.min(25, (forceN / 500) * (200 / plateW) * 8);
                  return (
                    <g>
                      {/* Depression in surface */}
                      <path
                        d={`M 20,190 L ${plateX},190 Q ${plateX + plateW / 2},${190 + pressDepth} ${plateX + plateW},190 L 280,190`}
                        fill="#1e293b"
                        stroke="#0ea5e9"
                        strokeWidth="2"
                      />
                      {/* Block Pressing */}
                      <rect x={plateX} y={110 + pressDepth} width={plateW} height="80" rx="4" fill="url(#metalBlockGrad)" stroke="#f8fafc" strokeWidth="2" />
                      {/* Force Arrow */}
                      <line x1="150" y1="40" x2="150" y2={100 + pressDepth} stroke="#ef4444" strokeWidth="4" markerEnd="url(#arrowDownRed)" />
                      <text x="160" y="60" fill="#ef4444" fontSize="13" fontWeight="bold">F = {forceN} N</text>
                      <text x="150" y={150 + pressDepth} textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">
                        S = {areaCm2} cm²
                      </text>
                      <text x="150" y={235} textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">
                        p = {surfacePressurePa.toFixed(0)} Pa (Độ lún: {pressDepth.toFixed(1)} mm)
                      </text>
                    </g>
                  );
                })()}
              </g>
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   MODULAR ENGINE 2: ROTATIONAL MECHANICS & LEVERS
   Supports: rotational_lever_lab, moment_torque_balance_lab,
             g8_torque_rotation_lab, g8_lever_balance_lab, g8_crane_mechanisms_lab
   ========================================================================= */
function RotationalLeverSim({ simKey, params = {} }: { simKey: string; params?: Record<string, any> }) {
  const [leverType, setLeverType] = useState<'class1' | 'class2' | 'class3' | 'crane'>(
    params.type || (simKey.includes('crane') ? 'crane' : 'class1')
  );

  const [f1, setF1] = useState<number>(params.f1 || 40); // Force 1 (N)
  const [d1, setD1] = useState<number>(params.d1 || 1.2); // Distance 1 (m)
  const [f2, setF2] = useState<number>(params.f2 || 60); // Force 2 (N)
  const [d2, setD2] = useState<number>(params.d2 || 0.8); // Distance 2 (m)

  // Torque physics
  const m1 = f1 * d1; // N.m (counter-clockwise)
  const m2 = f2 * d2; // N.m (clockwise)
  const deltaM = m1 - m2;
  const isBalanced = Math.abs(deltaM) < 0.1;
  const tiltAngle = Math.max(-16, Math.min(16, deltaM * 0.9)); // degrees

  const autoBalance = () => {
    if (d2 > 0) {
      setF2(Number(((f1 * d1) / d2).toFixed(1)));
    }
  };

  // Fulcrum positioning based on lever class
  const fulcrumX = leverType === 'class1' ? 230 : leverType === 'class2' || leverType === 'class3' ? 100 : 200;
  const fulcrumY = 160;

  return (
    <div className="space-y-4">
      {/* Lever Class Selector */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setLeverType('class1')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            leverType === 'class1' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Đòn bẩy Loại 1 (Điểm tựa ở giữa: Bập bênh, Kéo)
        </button>
        <button
          onClick={() => setLeverType('class2')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            leverType === 'class2' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Đòn bẩy Loại 2 (Tải ở giữa: Xe rùa - Lợi lực)
        </button>
        <button
          onClick={() => setLeverType('class3')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            leverType === 'class3' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Đòn bẩy Loại 3 (Lực ở giữa: Nhíp, Cần câu)
        </button>
        <button
          onClick={() => setLeverType('crane')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            leverType === 'crane' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Cơ cấu Cần cẩu kỹ thuật
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-3.5 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
          <div>
            <div className="flex justify-between text-[11px] text-slate-300 mb-1">
              <span>Lực tác dụng 1 ($F_1$):</span>
              <span className="font-semibold text-cyan-400">{f1} N</span>
            </div>
            <input
              type="range"
              min="10"
              max="120"
              step="5"
              value={f1}
              onChange={(e) => setF1(Number(e.target.value))}
              className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-[11px] text-slate-300 mb-1">
              <span>Cánh tay đòn 1 ($d_1$):</span>
              <span className="font-semibold text-cyan-400">{d1} m</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="2.0"
              step="0.1"
              value={d1}
              onChange={(e) => setD1(Number(e.target.value))}
              className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-[11px] text-slate-300 mb-1">
              <span>Lực tải / Lực 2 ($F_2$):</span>
              <span className="font-semibold text-rose-400">{f2} N</span>
            </div>
            <input
              type="range"
              min="10"
              max="150"
              step="5"
              value={f2}
              onChange={(e) => setF2(Number(e.target.value))}
              className="w-full accent-rose-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-[11px] text-slate-300 mb-1">
              <span>Cánh tay đòn 2 ($d_2$):</span>
              <span className="font-semibold text-rose-400">{d2} m</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="2.0"
              step="0.1"
              value={d2}
              onChange={(e) => setD2(Number(e.target.value))}
              className="w-full accent-rose-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
            />
          </div>

          <button
            onClick={autoBalance}
            className="w-full py-2 bg-indigo-600/80 hover:bg-indigo-600 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Tự động tìm điểm cân bằng ($F_2 = M_1 / d_2$)
          </button>

          {/* Torque Calculation Metrics */}
          <div className="pt-2 border-t border-slate-800 space-y-1.5 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-400">Moment lực 1 ($M_1 = F_1 \cdot d_1$):</span>
              <span className="font-bold text-cyan-400">{m1.toFixed(1)} N·m</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Moment lực 2 ($M_2 = F_2 \cdot d_2$):</span>
              <span className="font-bold text-rose-400">{m2.toFixed(1)} N·m</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Độ lệch Moment ($\Delta M$):</span>
              <span className={`font-bold ${isBalanced ? 'text-emerald-400' : 'text-amber-400'}`}>
                {deltaM.toFixed(1)} N·m ({isBalanced ? 'Cân bằng' : tiltAngle > 0 ? 'Nghiêng trái' : 'Nghiêng phải'})
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Tỉ số lợi về lực ($F_2 / F_1$):</span>
              <span className="font-bold text-indigo-400">{(f2 / f1).toFixed(2)} lần (đường đi thiệt {(d1 / d2).toFixed(2)} lần)</span>
            </div>
          </div>
        </div>

        {/* Visual SVG Column */}
        <div className="lg:col-span-7 bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-center items-center">
          <svg viewBox="0 0 460 260" className="w-full h-auto max-h-[300px]" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="arrowF1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L3,6 L6,0 Z" fill="#06b6d4" />
              </marker>
              <marker id="arrowF2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L3,6 L6,0 Z" fill="#f43f5e" />
              </marker>
            </defs>

            {/* Base Stand */}
            <rect x="50" y="220" width="360" height="10" fill="#334155" rx="3" />

            {/* Fulcrum (Điểm tựa O) */}
            <polygon
              points={`${fulcrumX - 20},220 ${fulcrumX + 20},220 ${fulcrumX},${fulcrumY}`}
              fill="#475569"
              stroke="#94a3b8"
              strokeWidth="2"
            />
            <circle cx={fulcrumX} cy={fulcrumY} r="5" fill="#38bdf8" />
            <text x={fulcrumX} y={fulcrumY + 25} textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">
              Điểm tựa (O)
            </text>

            {/* Rotating Lever Arm */}
            <g transform={`rotate(${-tiltAngle}, ${fulcrumX}, ${fulcrumY})`} className="transition-transform duration-200">
              {/* Beam */}
              <rect x={fulcrumX - 170} y={fulcrumY - 6} width="340" height="12" rx="3" fill="#64748b" stroke="#cbd5e1" strokeWidth="1.5" />

              {/* Position Left Force F1 */}
              {(() => {
                const px1 = fulcrumX - (d1 / 2.0) * 150;
                const weightH = Math.min(35, Math.max(15, (f1 / 120) * 35));
                return (
                  <g>
                    <line x1={px1} y1={fulcrumY + 6} x2={px1} y2={fulcrumY + 30} stroke="#94a3b8" strokeWidth="1.5" />
                    <rect x={px1 - 14} y={fulcrumY + 30} width="28" height={weightH} rx="3" fill="#0891b2" stroke="#67e8f9" strokeWidth="1.5" />
                    <text x={px1} y={fulcrumY + 30 + weightH / 2 + 3} textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">
                      {f1}N
                    </text>
                    <line x1={px1} y1={fulcrumY + 30 + weightH} x2={px1} y2={fulcrumY + 65 + weightH} stroke="#06b6d4" strokeWidth="2.5" markerEnd="url(#arrowF1)" />
                    <text x={px1 - 22} y={fulcrumY + 55 + weightH} fill="#06b6d4" fontSize="10" fontWeight="bold">F_1</text>
                    {/* d1 dimension line */}
                    <line x1={fulcrumX} y1={fulcrumY - 14} x2={px1} y2={fulcrumY - 14} stroke="#06b6d4" strokeWidth="1" strokeDasharray="3,2" />
                    <text x={(fulcrumX + px1) / 2} y={fulcrumY - 18} textAnchor="middle" fill="#06b6d4" fontSize="9" fontWeight="bold">
                      d₁ = {d1}m
                    </text>
                  </g>
                );
              })()}

              {/* Position Right Force F2 */}
              {(() => {
                const px2 = fulcrumX + (d2 / 2.0) * 150;
                const weightH = Math.min(35, Math.max(15, (f2 / 150) * 35));
                return (
                  <g>
                    <line x1={px2} y1={fulcrumY + 6} x2={px2} y2={fulcrumY + 30} stroke="#94a3b8" strokeWidth="1.5" />
                    <rect x={px2 - 14} y={fulcrumY + 30} width="28" height={weightH} rx="3" fill="#e11d48" stroke="#fda4af" strokeWidth="1.5" />
                    <text x={px2} y={fulcrumY + 30 + weightH / 2 + 3} textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">
                      {f2}N
                    </text>
                    <line x1={px2} y1={fulcrumY + 30 + weightH} x2={px2} y2={fulcrumY + 65 + weightH} stroke="#f43f5e" strokeWidth="2.5" markerEnd="url(#arrowF2)" />
                    <text x={px2 + 12} y={fulcrumY + 55 + weightH} fill="#f43f5e" fontSize="10" fontWeight="bold">F_2</text>
                    {/* d2 dimension line */}
                    <line x1={fulcrumX} y1={fulcrumY - 14} x2={px2} y2={fulcrumY - 14} stroke="#f43f5e" strokeWidth="1" strokeDasharray="3,2" />
                    <text x={(fulcrumX + px2) / 2} y={fulcrumY - 18} textAnchor="middle" fill="#f43f5e" fontSize="9" fontWeight="bold">
                      d₂ = {d2}m
                    </text>
                  </g>
                );
              })()}
            </g>

            {/* Equilibrium / Rotation Banner */}
            <g transform="translate(230, 30)">
              <rect x="-110" y="0" width="220" height="26" rx="6" fill={isBalanced ? '#064e3b' : '#451a03'} stroke={isBalanced ? '#10b981' : '#f59e0b'} strokeWidth="1.5" />
              <text x="0" y="17" textAnchor="middle" fill={isBalanced ? '#6ee7b7' : '#fcd34d'} fontSize="11" fontWeight="bold">
                {isBalanced ? '✓ Trạng thái cân bằng tĩnh: M₁ = M₂' : tiltAngle > 0 ? '↺ Moment trái lớn hơn (M₁ > M₂)' : '↻ Moment phải lớn hơn (M₂ > M₁)'}
              </text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   MODULAR ENGINE 3: DC CIRCUITS & ELECTROMAGNETISM
   Supports: circuits_ohm_lab, electric_power_joule_lab, whole_circuit_emf_lab,
             g8_electrostatics_lab, g8_circuit_builder_lab, g8_current_voltage_measure_lab,
             g9_ohms_resistor_lab, g9_circuit_series_parallel_lab, g9_joule_heating_lab,
             g9_induction_faraday_lab, g9_ac_generator_lab, g9_transformer_grid_lab,
             g11_drift_velocity_lab, g11_circuit_emf_resistor_lab, g11_sensor_power_transfer_lab,
             g12_ac_generator_power_lab
   ========================================================================= */
function CircuitLabSim({ simKey, params = {} }: { simKey: string; params?: Record<string, any> }) {
  const initialMode = params.mode || (
    simKey.includes('transformer') ? 'transformer' :
    simKey.includes('joule') || simKey.includes('heating') ? 'joule_power' :
    simKey.includes('emf') || simKey.includes('whole_circuit') ? 'emf_internal' :
    'series_parallel'
  );
  const [mode, setMode] = useState<'series_parallel' | 'emf_internal' | 'joule_power' | 'transformer'>(initialMode);
  const [connection, setConnection] = useState<'series' | 'parallel'>(params.connection || 'series');
  const [switchClosed, setSwitchClosed] = useState<boolean>(true);

  // Electrical parameters
  const [voltage, setVoltage] = useState<number>(params.voltage || 12); // V or EMF
  const [internalR, setInternalR] = useState<number>(params.internalR || 1.5); // ohm
  const [r1, setR1] = useState<number>(params.r1 || 10); // ohm
  const [r2, setR2] = useState<number>(params.r2 || 15); // ohm
  const [n1, setN1] = useState<number>(params.n1 || 200); // primary turns
  const [n2, setN2] = useState<number>(params.n2 || 800); // secondary turns

  // Physics calculations
  let req = 0;
  let currentTotal = 0;
  let u1 = 0;
  let u2 = 0;
  let powerTotal = 0;
  let un = 0;
  let efficiency = 0;
  let uSecondary = 0;
  let powerLoss = 0;

  if (switchClosed) {
    if (mode === 'series_parallel' || mode === 'joule_power') {
      if (connection === 'series') {
        req = r1 + r2;
        currentTotal = req > 0 ? voltage / req : 0;
        u1 = currentTotal * r1;
        u2 = currentTotal * r2;
      } else {
        req = (r1 * r2) / (r1 + r2);
        currentTotal = req > 0 ? voltage / req : 0;
        u1 = voltage;
        u2 = voltage;
      }
      powerTotal = voltage * currentTotal;
    } else if (mode === 'emf_internal') {
      req = r1; // load resistor
      currentTotal = (r1 + internalR > 0) ? voltage / (r1 + internalR) : 0;
      un = currentTotal * r1;
      powerTotal = currentTotal * un;
      efficiency = voltage > 0 ? (un / voltage) * 100 : 0;
    } else if (mode === 'transformer') {
      uSecondary = n1 > 0 ? voltage * (n2 / n1) : 0;
      const transPower = 1000; // 1 kW reference power
      const lineR = 5; // 5 ohm grid resistance
      powerLoss = uSecondary > 0 ? lineR * Math.pow(transPower / uSecondary, 2) : 0;
    }
  }

  return (
    <div className="space-y-4">
      {/* Circuit Mode Selector */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setMode('series_parallel')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'series_parallel' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Định luật Ohm (Nối tiếp / Song song)
        </button>
        <button
          onClick={() => setMode('emf_internal')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'emf_internal' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Định luật Ohm toàn mạch (ℰ, r)
        </button>
        <button
          onClick={() => setMode('joule_power')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'joule_power' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Công suất điện & Định luật Joule - Lenz
        </button>
        <button
          onClick={() => setMode('transformer')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'transformer' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Máy biến áp & Truyền tải điện
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
          {/* Switch Toggle */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-medium text-slate-300">Khóa K (Công tắc):</span>
            <button
              onClick={() => setSwitchClosed(!switchClosed)}
              className={`px-3 py-1 rounded text-xs font-bold transition ${
                switchClosed ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
              }`}
            >
              {switchClosed ? 'ĐÓNG (Mạch kín)' : 'MỞ (Mạch hở)'}
            </button>
          </div>

          {mode === 'series_parallel' && (
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400">Cách ghép:</span>
              <button
                onClick={() => setConnection('series')}
                className={`px-2.5 py-1 rounded text-xs font-medium ${connection === 'series' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}
              >
                Nối tiếp
              </button>
              <button
                onClick={() => setConnection('parallel')}
                className={`px-2.5 py-1 rounded text-xs font-medium ${connection === 'parallel' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}
              >
                Song song
              </button>
            </div>
          )}

          <div>
            <div className="flex justify-between text-[11px] text-slate-300 mb-1">
              <span>{mode === 'emf_internal' ? 'Suất điện động (ℰ):' : 'Hiệu điện thế nguồn (U):'}</span>
              <span className="font-semibold text-cyan-400">{voltage} V</span>
            </div>
            <input
              type="range"
              min="2"
              max="36"
              step="1"
              value={voltage}
              onChange={(e) => setVoltage(Number(e.target.value))}
              className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
            />
          </div>

          {mode === 'emf_internal' && (
            <div>
              <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                <span>Điện trở trong nguồn (r):</span>
                <span className="font-semibold text-rose-400">{internalR} Ω</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="5.0"
                step="0.2"
                value={internalR}
                onChange={(e) => setInternalR(Number(e.target.value))}
                className="w-full accent-rose-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>
          )}

          <div>
            <div className="flex justify-between text-[11px] text-slate-300 mb-1">
              <span>{mode === 'emf_internal' ? 'Điện trở tải ngoài (R_N):' : 'Điện trở R₁:'}</span>
              <span className="font-semibold text-amber-400">{r1} Ω</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={r1}
              onChange={(e) => setR1(Number(e.target.value))}
              className="w-full accent-amber-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
            />
          </div>

          {mode !== 'emf_internal' && mode !== 'transformer' && (
            <div>
              <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                <span>Điện trở R₂:</span>
                <span className="font-semibold text-amber-400">{r2} Ω</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                step="1"
                value={r2}
                onChange={(e) => setR2(Number(e.target.value))}
                className="w-full accent-amber-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>
          )}

          {mode === 'transformer' && (
            <>
              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Số vòng cuộn sơ cấp (N₁):</span>
                  <span className="font-semibold text-cyan-400">{n1} vòng</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="600"
                  step="25"
                  value={n1}
                  onChange={(e) => setN1(Number(e.target.value))}
                  className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>
              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Số vòng cuộn thứ cấp (N₂):</span>
                  <span className="font-semibold text-indigo-400">{n2} vòng</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1200"
                  step="25"
                  value={n2}
                  onChange={(e) => setN2(Number(e.target.value))}
                  className="w-full accent-indigo-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>
            </>
          )}

          {/* Real-time Readouts */}
          <div className="pt-2 border-t border-slate-800 space-y-1 text-xs">
            {mode !== 'transformer' ? (
              <>
                <div className="flex justify-between">
                  <span className="text-slate-400">Dòng điện mạch chính (I):</span>
                  <span className="font-bold text-emerald-400">{currentTotal.toFixed(2)} A</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Điện trở tương đương (R_tđ):</span>
                  <span className="font-bold text-amber-400">{req.toFixed(2)} Ω</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Công suất tiêu thụ (P = UI):</span>
                  <span className="font-bold text-cyan-400">{powerTotal.toFixed(1)} W</span>
                </div>
                {mode === 'emf_internal' && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Hiệu suất nguồn (H = U_N / ℰ):</span>
                    <span className="font-bold text-indigo-400">{efficiency.toFixed(1)}%</span>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="flex justify-between">
                  <span className="text-slate-400">Điện áp thứ cấp (U₂):</span>
                  <span className="font-bold text-emerald-400">{uSecondary.toFixed(1)} V ({uSecondary > voltage ? 'Tăng áp' : 'Hạ áp'})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Hao phí truyền tải (P_hp ∝ 1/U₂²):</span>
                  <span className="font-bold text-rose-400">{powerLoss.toFixed(2)} W</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Visual SVG Column */}
        <div className="lg:col-span-7 bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-center items-center">
          <svg viewBox="0 0 460 260" className="w-full h-auto max-h-[300px]" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="glowLamp" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
              </filter>
            </defs>

            {mode !== 'transformer' ? (
              <>
                {/* Circuit Wires Loop */}
                <rect x="50" y="40" width="360" height="180" rx="8" fill="none" stroke="#475569" strokeWidth="3" />

                {/* Animated Electron Flow (if switch closed) */}
                {switchClosed && currentTotal > 0 && (
                  <rect
                    x="50"
                    y="40"
                    width="360"
                    height="180"
                    rx="8"
                    fill="none"
                    stroke="#facc15"
                    strokeWidth="2"
                    strokeDasharray="6,12"
                    strokeDashoffset={-Date.now() / 50}
                    className="opacity-75"
                  />
                )}

                {/* DC Battery Symbol on Left */}
                <g transform="translate(50, 130)">
                  <line x1="0" y1="-30" x2="0" y2="-6" stroke="#475569" strokeWidth="3" />
                  <line x1="-16" y1="-6" x2="16" y2="-6" stroke="#ef4444" strokeWidth="4" />
                  <line x1="-8" y1="6" x2="8" y2="6" stroke="#38bdf8" strokeWidth="3" />
                  <line x1="0" y1="6" x2="0" y2="30" stroke="#475569" strokeWidth="3" />
                  <text x="-24" y="-2" fill="#ef4444" fontSize="12" fontWeight="bold">+</text>
                  <text x="-24" y="14" fill="#38bdf8" fontSize="12" fontWeight="bold">-</text>
                  <text x="-30" y="35" fill="#f8fafc" fontSize="9" fontWeight="bold">
                    {voltage}V {mode === 'emf_internal' ? `(r=${internalR}Ω)` : ''}
                  </text>
                </g>

                {/* Switch K on Top Wire */}
                <g transform="translate(150, 40)">
                  <circle cx="-20" cy="0" r="3" fill="#cbd5e1" />
                  <circle cx="20" cy="0" r="3" fill="#cbd5e1" />
                  <line
                    x1="-20"
                    y1="0"
                    x2="20"
                    y2={switchClosed ? 0 : -16}
                    stroke="#f59e0b"
                    strokeWidth="3"
                    className="transition-all duration-300"
                  />
                  <text x="0" y="-18" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">
                    Khóa K ({switchClosed ? 'Đóng' : 'Mở'})
                  </text>
                </g>

                {/* Ammeter on Top Wire Right */}
                <g transform="translate(320, 40)">
                  <circle cx="0" cy="0" r="14" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
                  <text x="0" y="4" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">A</text>
                  <text x="0" y="24" textAnchor="middle" fill="#10b981" fontSize="9">
                    {currentTotal.toFixed(2)}A
                  </text>
                </g>

                {/* Load (Resistors or Bulb) on Right Wire */}
                {connection === 'series' || mode === 'emf_internal' ? (
                  <g transform="translate(410, 130)">
                    {/* Resistor R1 */}
                    <rect x="-10" y="-45" width="20" height="40" rx="3" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
                    <text x="-16" y="-22" textAnchor="end" fill="#f59e0b" fontSize="10" fontWeight="bold">R₁={r1}Ω</text>

                    {/* Resistor R2 (if applicable) */}
                    {mode !== 'emf_internal' && (
                      <>
                        <rect x="-10" y="5" width="20" height="40" rx="3" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
                        <text x="-16" y="28" textAnchor="end" fill="#f59e0b" fontSize="10" fontWeight="bold">R₂={r2}Ω</text>
                      </>
                    )}
                  </g>
                ) : (
                  /* Parallel Connection on Right */
                  <g transform="translate(390, 130)">
                    {/* Branch 1 */}
                    <line x1="-30" y1="0" x2="-30" y2="-40" stroke="#475569" strokeWidth="2" />
                    <line x1="-30" y1="-40" x2="30" y2="-40" stroke="#475569" strokeWidth="2" />
                    <rect x="-12" y="-50" width="24" height="20" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
                    <text x="0" y="-36" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">R₁={r1}Ω</text>
                    <line x1="30" y1="-40" x2="30" y2="0" stroke="#475569" strokeWidth="2" />

                    {/* Branch 2 */}
                    <line x1="-30" y1="0" x2="-30" y2="40" stroke="#475569" strokeWidth="2" />
                    <line x1="-30" y1="40" x2="30" y2="40" stroke="#475569" strokeWidth="2" />
                    <rect x="-12" y="30" width="24" height="20" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
                    <text x="0" y="44" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">R₂={r2}Ω</text>
                    <line x1="30" y1="40" x2="30" y2="0" stroke="#475569" strokeWidth="2" />
                  </g>
                )}

                {/* Light Bulb / Joule Glow on Bottom Wire */}
                <g transform="translate(230, 220)">
                  {switchClosed && powerTotal > 0 && (
                    <circle cx="0" cy="0" r={Math.min(30, Math.max(10, powerTotal * 0.8))} fill="#fef08a" opacity="0.3" filter="url(#glowLamp)" />
                  )}
                  <circle cx="0" cy="0" r="14" fill="#0f172a" stroke="#facc15" strokeWidth="2" />
                  {/* Filament X */}
                  <line x1="-8" y1="-8" x2="8" y2="8" stroke="#facc15" strokeWidth="1.5" />
                  <line x1="-8" y1="8" x2="8" y2="-8" stroke="#facc15" strokeWidth="1.5" />
                  <text x="0" y="24" textAnchor="middle" fill="#facc15" fontSize="9" fontWeight="bold">
                    Bóng đèn (P = {powerTotal.toFixed(1)}W)
                  </text>
                </g>
              </>
            ) : (
              /* Transformer Schematic */
              <g transform="translate(90, 40)">
                <text x="140" y="0" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">
                  Mô hình Máy biến áp (U₁/U₂ = N₁/N₂)
                </text>
                {/* Iron Core */}
                <rect x="80" y="30" width="120" height="140" rx="6" fill="#1e293b" stroke="#64748b" strokeWidth="3" />
                <rect x="110" y="60" width="60" height="80" rx="3" fill="#020617" stroke="#475569" strokeWidth="2" />

                {/* Primary Coil (Left) */}
                <g>
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <rect key={i} x="68" y={50 + i * 16} width="16" height="8" rx="2" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />
                  ))}
                  <text x="40" y="90" textAnchor="end" fill="#38bdf8" fontSize="10" fontWeight="bold">Cuộn sơ cấp</text>
                  <text x="40" y="105" textAnchor="end" fill="#38bdf8" fontSize="9">N₁ = {n1} vòng</text>
                  <text x="40" y="120" textAnchor="end" fill="#38bdf8" fontSize="9">U₁ = {voltage} V</text>
                </g>

                {/* Secondary Coil (Right) */}
                <g>
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <rect key={i} x="196" y={45 + i * 13} width="16" height="7" rx="2" fill="#10b981" stroke="#34d399" strokeWidth="1" />
                  ))}
                  <text x="240" y="90" fill="#34d399" fontSize="10" fontWeight="bold">Cuộn thứ cấp</text>
                  <text x="240" y="105" fill="#34d399" fontSize="9">N₂ = {n2} vòng</text>
                  <text x="240" y="120" fill="#34d399" fontSize="9">U₂ = {uSecondary.toFixed(1)} V</text>
                </g>

                <text x="140" y="200" textAnchor="middle" fill="#facc15" fontSize="11" fontWeight="bold">
                  Tỉ số điện áp: U₂/U₁ = N₂/N₁ = {(n2 / n1).toFixed(2)}
                </text>
              </g>
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   MODULAR ENGINE 4: THERMAL ENERGY & CALORIMETRY
   Supports: thermal_calorimetry_lab, first_law_thermodynamics_lab, latent_heat_phase_lab,
             g8_thermal_motion_lab, g8_heat_transfer_modes_lab, g8_bimetallic_expansion_lab,
             g12_molecular_states_lab, g12_thermodynamics_first_law_lab, g12_calorimetry_phase_change_lab
   ========================================================================= */
function ThermalCalorimetrySim({ simKey, params = {} }: { simKey: string; params?: Record<string, any> }) {
  const initialMode = params.mode || (
    simKey.includes('bimetallic') ? 'bimetallic' :
    simKey.includes('first_law') || simKey.includes('thermodynamics') ? 'first_law' :
    simKey.includes('phase') || simKey.includes('latent') ? 'phase_change' :
    'calorimetry'
  );
  const [mode, setMode] = useState<'calorimetry' | 'phase_change' | 'first_law' | 'bimetallic'>(initialMode);

  // Calorimetry
  const [metalKey, setMetalKey] = useState<string>(params.metal || 'copper');
  const metals: Record<string, { name: string; c: number; color: string }> = {
    copper: { name: 'Đồng đỏ (c = 380 J/kg·K)', c: 380, color: '#f59e0b' },
    aluminum: { name: 'Nhôm (c = 880 J/kg·K)', c: 880, color: '#cbd5e1' },
    iron: { name: 'Sắt (c = 460 J/kg·K)', c: 460, color: '#94a3b8' },
    lead: { name: 'Chì (c = 130 J/kg·K)', c: 130, color: '#64748b' },
  };
  const metal = metals[metalKey] || metals.copper;
  const [m1, setM1] = useState<number>(params.m1 || 0.3); // kg metal
  const [t1, setT1] = useState<number>(params.t1 || 90); // deg C
  const [m2, setM2] = useState<number>(params.m2 || 0.5); // kg water
  const [t2, setT2] = useState<number>(params.t2 || 20); // deg C
  const cWater = 4200;

  // 1st Law: Delta U = A + Q
  const [workA, setWorkA] = useState<number>(params.workA || 100); // J
  const [heatQ, setHeatQ] = useState<number>(params.heatQ || 250); // J

  // Bimetallic strip
  const [stripTemp, setStripTemp] = useState<number>(params.stripTemp || 75); // deg C

  // Physics calculations
  // Equilibrium temperature: T_cb = (m1*c1*t1 + m2*c2*t2) / (m1*c1 + m2*c2)
  const tCb = (m1 * metal.c * t1 + m2 * cWater * t2) / (m1 * metal.c + m2 * cWater);
  const qLoss = m1 * metal.c * (t1 - tCb); // Heat given out by metal
  const qGain = m2 * cWater * (tCb - t2); // Heat absorbed by water
  const deltaU = workA + heatQ; // 1st Law

  // Bimetallic strip curvature calculation: Brass (alpha = 19e-6) vs Steel (alpha = 12e-6)
  const stripDeltaT = stripTemp - 20; // departure from room temp
  const stripCurvature = Math.max(-25, Math.min(25, stripDeltaT * 0.35));

  return (
    <div className="space-y-4">
      {/* Mode Selector */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setMode('calorimetry')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'calorimetry' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Nhiệt lượng kế & Cân bằng nhiệt (Q_tỏa = Q_thu)
        </button>
        <button
          onClick={() => setMode('phase_change')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'phase_change' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Đường biểu diễn chuyển thể (Nóng chảy & Sôi)
        </button>
        <button
          onClick={() => setMode('first_law')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'first_law' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Định luật I Nhiệt động lực học ($\Delta U = A + Q$)
        </button>
        <button
          onClick={() => setMode('bimetallic')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'bimetallic' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Sự nở vì nhiệt & Băng kép (Bimetallic)
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
          {mode === 'calorimetry' && (
            <>
              <div>
                <label className="text-[11px] font-medium text-slate-400 block mb-1">Mẫu kim loại thả vào:</label>
                <select
                  value={metalKey}
                  onChange={(e) => setMetalKey(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                >
                  {Object.entries(metals).map(([key, m]) => (
                    <option key={key} value={key}>{m.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Khối lượng kim loại (m₁):</span>
                  <span className="font-semibold text-amber-400">{m1.toFixed(2)} kg</span>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max="1.0"
                  step="0.05"
                  value={m1}
                  onChange={(e) => setM1(Number(e.target.value))}
                  className="w-full accent-amber-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Nhiệt độ kim loại ban đầu (t₁):</span>
                  <span className="font-semibold text-rose-400">{t1} °C</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="100"
                  step="5"
                  value={t1}
                  onChange={(e) => setT1(Number(e.target.value))}
                  className="w-full accent-rose-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Khối lượng nước trong bình (m₂):</span>
                  <span className="font-semibold text-cyan-400">{m2.toFixed(2)} kg</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1.5"
                  step="0.1"
                  value={m2}
                  onChange={(e) => setM2(Number(e.target.value))}
                  className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Nhiệt độ nước ban đầu (t₂):</span>
                  <span className="font-semibold text-cyan-400">{t2} °C</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="35"
                  step="1"
                  value={t2}
                  onChange={(e) => setT2(Number(e.target.value))}
                  className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>
            </>
          )}

          {mode === 'first_law' && (
            <>
              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Công thực hiện lên hệ (A):</span>
                  <span className="font-semibold text-cyan-400">{workA} J</span>
                </div>
                <input
                  type="range"
                  min="-300"
                  max="300"
                  step="10"
                  value={workA}
                  onChange={(e) => setWorkA(Number(e.target.value))}
                  className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Nhiệt lượng truyền cho hệ (Q):</span>
                  <span className="font-semibold text-rose-400">{heatQ} J</span>
                </div>
                <input
                  type="range"
                  min="-300"
                  max="400"
                  step="10"
                  value={heatQ}
                  onChange={(e) => setHeatQ(Number(e.target.value))}
                  className="w-full accent-rose-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>
            </>
          )}

          {mode === 'bimetallic' && (
            <div>
              <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                <span>Nhiệt độ môi trường băng kép (t):</span>
                <span className="font-semibold text-amber-400">{stripTemp} °C</span>
              </div>
              <input
                type="range"
                min="-20"
                max="140"
                step="5"
                value={stripTemp}
                onChange={(e) => setStripTemp(Number(e.target.value))}
                className="w-full accent-amber-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>
          )}

          {/* Real-time Thermal Metrics */}
          <div className="pt-2 border-t border-slate-800 space-y-1.5 text-xs">
            {mode === 'calorimetry' && (
              <>
                <div className="flex justify-between">
                  <span className="text-slate-400">Nhiệt độ cân bằng (t_cb):</span>
                  <span className="font-bold text-emerald-400">{tCb.toFixed(2)} °C ({(tCb + 273.15).toFixed(2)} K)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Nhiệt lượng kim loại tỏa:</span>
                  <span className="font-bold text-rose-400">{qLoss.toFixed(1)} J</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Nhiệt lượng nước thu vào:</span>
                  <span className="font-bold text-cyan-400">{qGain.toFixed(1)} J</span>
                </div>
              </>
            )}

            {mode === 'first_law' && (
              <>
                <div className="flex justify-between">
                  <span className="text-slate-400">Biến thiên nội năng ($\Delta U = A + Q$):</span>
                  <span className="font-bold text-emerald-400">{deltaU} J</span>
                </div>
                <div className="p-2 rounded bg-slate-900 text-[11px] text-slate-300 border border-slate-800">
                  {deltaU > 0 ? '✓ Nội năng của khối khí tăng (ΔU > 0).' : deltaU < 0 ? '⚠ Nội năng của khối khí giảm (ΔU < 0).' : 'Nội năng của hệ không đổi (ΔU = 0).'}
                </div>
              </>
            )}

            {mode === 'bimetallic' && (
              <>
                <div className="flex justify-between">
                  <span className="text-slate-400">Độ uốn cong băng kép:</span>
                  <span className="font-bold text-amber-400">{stripCurvature.toFixed(1)}° ({stripDeltaT > 0 ? 'Cong về phía thép' : stripDeltaT < 0 ? 'Cong về phía đồng' : 'Thẳng'})</span>
                </div>
                <div className="p-2 rounded bg-slate-900 text-[11px] text-slate-300 border border-slate-800">
                  💡 Hệ số nở dài của Đồng (19·10⁻⁶ K⁻¹) lớn hơn Thép (12·10⁻⁶ K⁻¹). Khi nung nóng, đồng nở dài hơn nên băng kép cong về phía thép, dùng làm rơ-le nhiệt tự ngắt mạch.
                </div>
              </>
            )}
          </div>
        </div>

        {/* Visual SVG Column */}
        <div className="lg:col-span-7 bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-center items-center">
          <svg viewBox="0 0 460 260" className="w-full h-auto max-h-[300px]" preserveAspectRatio="xMidYMid meet">
            {mode === 'calorimetry' && (
              <g transform="translate(60, 20)">
                <text x="170" y="15" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">
                  Thí nghiệm Nhiệt lượng kế (Calorimeter)
                </text>
                
                {/* Calorimeter Outer Vessel */}
                <rect x="80" y="45" width="180" height="170" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="2.5" />
                {/* Insulation layer */}
                <rect x="90" y="55" width="160" height="150" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                {/* Water Liquid */}
                <rect x="95" y="90" width="150" height="110" rx="4" fill="rgba(56, 189, 248, 0.35)" />
                <line x1="95" y1="90" x2="245" y2="90" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3,2" />

                {/* Submerged Hot Metal Ingot */}
                <rect x="145" y="145" width="50" height="40" rx="4" fill={metal.color} stroke="#f8fafc" strokeWidth="1.5" />
                <text x="170" y="168" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold">
                  {metal.name.split(' ')[0]}
                </text>
                <text x="170" y="198" textAnchor="middle" fill="#cbd5e1" fontSize="9">
                  m₁ = {m1}kg
                </text>

                {/* Thermometer */}
                <rect x="220" y="30" width="8" height="150" rx="4" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1.5" />
                {(() => {
                  const mercuryH = (tCb / 100) * 120;
                  return (
                    <rect x="222" y={175 - mercuryH} width="4" height={mercuryH} rx="2" fill="#ef4444" />
                  );
                })()}
                <circle cx="224" cy="177" r="7" fill="#ef4444" />
                <text x="235" y="70" fill="#ef4444" fontSize="10" fontWeight="bold">
                  t_cb = {tCb.toFixed(1)}°C
                </text>

                {/* Convergence Note */}
                <text x="170" y="240" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">
                  Q_tỏa ({qLoss.toFixed(0)} J) = Q_thu ({qGain.toFixed(0)} J)
                </text>
              </g>
            )}

            {mode === 'phase_change' && (
              <g transform="translate(60, 20)">
                <text x="170" y="15" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">
                  Đường đặc trưng nhiệt độ chuyển thể của Nước
                </text>
                {/* Axes */}
                <line x1="40" y1="210" x2="310" y2="210" stroke="#64748b" strokeWidth="2" />
                <line x1="40" y1="210" x2="40" y2="40" stroke="#64748b" strokeWidth="2" />
                <text x="315" y="214" fill="#94a3b8" fontSize="10">Nhiệt lượng Q</text>
                <text x="40" y="30" textAnchor="middle" fill="#94a3b8" fontSize="10">Nhiệt độ T (°C)</text>

                {/* Grid Lines */}
                <line x1="40" y1="160" x2="300" y2="160" stroke="#334155" strokeWidth="1" strokeDasharray="3,3" />
                <text x="32" y="163" textAnchor="end" fill="#38bdf8" fontSize="9">0°C</text>
                <line x1="40" y1="70" x2="300" y2="70" stroke="#334155" strokeWidth="1" strokeDasharray="3,3" />
                <text x="32" y="73" textAnchor="end" fill="#f43f5e" fontSize="9">100°C</text>

                {/* Phase Change Curve */}
                <path
                  d="M 40,195 L 75,160 L 135,160 L 195,70 L 270,70 L 295,45"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="3"
                />

                {/* Labels */}
                <text x="50" y="185" fill="#94a3b8" fontSize="8">Băng</text>
                <text x="105" y="152" fill="#38bdf8" fontSize="8" fontWeight="bold">Nóng chảy (Q=λm)</text>
                <text x="155" y="120" fill="#94a3b8" fontSize="8">Nước lỏng</text>
                <text x="230" y="62" fill="#f43f5e" fontSize="8" fontWeight="bold">Sôi (Q=Lm)</text>
                <text x="280" y="40" fill="#f59e0b" fontSize="8">Hơi nước</text>
              </g>
            )}

            {mode === 'first_law' && (
              <g transform="translate(80, 30)">
                <text x="150" y="15" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">
                  Mô hình Xy-lanh Piston: ΔU = A + Q
                </text>
                {/* Cylinder */}
                <rect x="70" y="50" width="160" height="130" rx="4" fill="#0f172a" stroke="#64748b" strokeWidth="3" />
                
                {/* Gas volume inside cylinder */}
                {(() => {
                  const pistonH = Math.min(110, Math.max(30, 75 - (workA / 300) * 35));
                  return (
                    <g>
                      <rect x="73" y={177 - pistonH} width="154" height={pistonH} fill="rgba(244, 63, 94, 0.25)" />
                      {/* Piston head */}
                      <rect x="72" y={177 - pistonH - 12} width="156" height="12" rx="2" fill="#475569" stroke="#cbd5e1" strokeWidth="1.5" />
                      {/* Piston rod */}
                      <rect x="144" y="30" width="12" height={177 - pistonH - 42} fill="#64748b" stroke="#cbd5e1" strokeWidth="1" />
                    </g>
                  );
                })()}

                {/* Work Arrow (Piston Compression) */}
                <line x1="150" y1="10" x2="150" y2="40" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrowDownRed)" />
                <text x="165" y="25" fill="#38bdf8" fontSize="10" fontWeight="bold">A = {workA} J</text>

                {/* Heat Source (Burner) */}
                {heatQ > 0 && (
                  <g transform="translate(130, 185)">
                    <Flame className="w-8 h-8 text-amber-500 animate-pulse" />
                    <text x="35" y="20" fill="#f59e0b" fontSize="10" fontWeight="bold">Q = {heatQ} J</text>
                  </g>
                )}

                <text x="150" y="225" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold">
                  ΔU = A + Q = {deltaU} J
                </text>
              </g>
            )}

            {mode === 'bimetallic' && (
              <g transform="translate(60, 40)">
                <text x="170" y="15" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">
                  Mô hình Băng kép (Bimetallic Strip)
                </text>
                {/* Fixed Wall Support */}
                <rect x="30" y="60" width="20" height="110" fill="#334155" stroke="#64748b" strokeWidth="2" />

                {/* Bimetallic Strip Layers with Curvature */}
                {(() => {
                  const curveY = stripCurvature * 2.2;
                  return (
                    <g transform="translate(50, 100)">
                      {/* Brass Layer (Upper - Yellow) */}
                      <path
                        d={`M 0,-6 Q 120,${-6 + curveY} 240,${-6 + curveY * 1.8} L 240,${curveY * 1.8} Q 120,${curveY} 0,0 Z`}
                        fill="#f59e0b"
                        stroke="#d97706"
                        strokeWidth="1.5"
                      />
                      {/* Steel Layer (Lower - Gray) */}
                      <path
                        d={`M 0,0 Q 120,${curveY} 240,${curveY * 1.8} L 240,${6 + curveY * 1.8} Q 120,${6 + curveY} 0,6 Z`}
                        fill="#94a3b8"
                        stroke="#64748b"
                        strokeWidth="1.5"
                      />
                      {/* Contact Terminal on Right */}
                      <circle cx="255" cy="0" r="6" fill={Math.abs(curveY) < 10 ? '#10b981' : '#ef4444'} />
                    </g>
                  );
                })()}

                <text x="170" y="160" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">
                  Lớp trên: Đồng đỏ (α₁ = 19·10⁻⁶ K⁻¹)
                </text>
                <text x="170" y="178" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">
                  Lớp dưới: Thép (α₂ = 12·10⁻⁶ K⁻¹)
                </text>
                <text x="170" y="205" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">
                  Nhiệt độ hiện tại: {stripTemp}°C ({stripDeltaT > 0 ? 'Nung nóng -> Cong về phía thép' : stripDeltaT < 0 ? 'Làm lạnh -> Cong về phía đồng' : 'Băng kép nằm thẳng'})
                </text>
              </g>
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}


/* =========================================================================
   MODULAR ENGINE 5: GEOMETRIC OPTICS & LENSES
   Supports: optics_ray_lens_lab, refraction_snell_lab, total_internal_reflection_lab,
             convex_concave_lens_lab, g9_refraction_tir_lab, g9_thin_lens_lab, g9_eye_magnifier_lab
   ========================================================================= */
function OpticsRayLensSim({ simKey, params = {} }: { simKey: string; params?: Record<string, any> }) {
  const initialMode = params.mode || (
    simKey.includes('refraction') || simKey.includes('tir') ? 'refraction_tir' :
    simKey.includes('eye') || simKey.includes('magnifier') ? 'eye_magnifier' :
    'lens'
  );
  const [mode, setMode] = useState<'lens' | 'refraction_tir' | 'eye_magnifier'>(initialMode);
  const [lensType, setLensType] = useState<'convex' | 'concave'>(params.lensType || 'convex');

  // Lens parameters (in cm)
  const [focalLength, setFocalLength] = useState<number>(params.f || 15);
  const [objectDist, setObjectDist] = useState<number>(params.d || 30);
  const [objectHeight, setObjectHeight] = useState<number>(params.h || 4);

  // Snell / TIR parameters
  const [n1, setN1] = useState<number>(params.n1 || 1.5); // medium 1
  const [n2, setN2] = useState<number>(params.n2 || 1.0); // medium 2
  const [incidentAngleDeg, setIncidentAngleDeg] = useState<number>(params.angle || 35);

  // Physics calculations for Thin Lens
  const signedF = lensType === 'convex' ? focalLength : -focalLength;
  const isAtFocalPoint = Math.abs(objectDist - focalLength) < 0.5 && lensType === 'convex';
  
  let imageDist = 0;
  let magnification = 0;
  let imageHeight = 0;
  let isRealImage = true;

  if (!isAtFocalPoint) {
    imageDist = (objectDist * signedF) / (objectDist - signedF);
    magnification = -imageDist / objectDist;
    imageHeight = Math.abs(magnification * objectHeight);
    isRealImage = imageDist > 0;
  }

  // Refraction / TIR calculations
  const iRad = (incidentAngleDeg * Math.PI) / 180;
  const sinR = (n1 / n2) * Math.sin(iRad);
  const isTir = sinR > 1.0;
  const rDeg = isTir ? incidentAngleDeg : Math.asin(sinR) * (180 / Math.PI);
  const criticalAngleDeg = n1 > n2 ? Math.asin(n2 / n1) * (180 / Math.PI) : null;

  // Magnifier power
  const magnifierG = 25 / focalLength;

  // SVG dimensions for Lens
  const optCenterX = 230;
  const optCenterY = 130;
  const pxPerCm = 4.2;

  const fPx = signedF * pxPerCm;
  const objPx = objectDist * pxPerCm;
  const imgPx = imageDist * pxPerCm;
  const hPx = objectHeight * 7;
  const hImgPx = imageHeight * 7;

  return (
    <div className="space-y-4">
      {/* Mode Selector */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setMode('lens')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'lens' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Thấu kính mỏng & Vẽ 3 tia sáng đặc biệt
        </button>
        <button
          onClick={() => setMode('refraction_tir')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'refraction_tir' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Định luật khúc xạ ánh sáng & Phản xạ toàn phần
        </button>
        <button
          onClick={() => setMode('eye_magnifier')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'eye_magnifier' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Kính lúp & Khắc phục tật của Mắt
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
          {mode !== 'refraction_tir' ? (
            <>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-400">Loại thấu kính:</span>
                <button
                  onClick={() => setLensType('convex')}
                  className={`px-2.5 py-1 rounded text-xs font-medium ${lensType === 'convex' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                >
                  Hội tụ (f &gt; 0)
                </button>
                <button
                  onClick={() => setLensType('concave')}
                  className={`px-2.5 py-1 rounded text-xs font-medium ${lensType === 'concave' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                >
                  Phân kỳ (f &lt; 0)
                </button>
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Tiêu cự thấu kính (|f|):</span>
                  <span className="font-semibold text-cyan-400">{focalLength} cm</span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="24"
                  step="1"
                  value={focalLength}
                  onChange={(e) => setFocalLength(Number(e.target.value))}
                  className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Khoảng cách vật đến thấu kính (d):</span>
                  <span className="font-semibold text-amber-400">{objectDist} cm</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="45"
                  step="1"
                  value={objectDist}
                  onChange={(e) => setObjectDist(Number(e.target.value))}
                  className="w-full accent-amber-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Chiều cao vật (h = AB):</span>
                  <span className="font-semibold text-emerald-400">{objectHeight} cm</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  step="0.5"
                  value={objectHeight}
                  onChange={(e) => setObjectHeight(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Chiết suất môi trường 1 (n₁ - Tới):</span>
                  <span className="font-semibold text-cyan-400">{n1.toFixed(2)} (Thủy tinh/Nước)</span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="2.2"
                  step="0.05"
                  value={n1}
                  onChange={(e) => setN1(Number(e.target.value))}
                  className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Chiết suất môi trường 2 (n₂ - Khúc xạ):</span>
                  <span className="font-semibold text-amber-400">{n2.toFixed(2)} (Không khí)</span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="2.0"
                  step="0.05"
                  value={n2}
                  onChange={(e) => setN2(Number(e.target.value))}
                  className="w-full accent-amber-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Góc tới (i):</span>
                  <span className="font-semibold text-rose-400">{incidentAngleDeg}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="85"
                  step="1"
                  value={incidentAngleDeg}
                  onChange={(e) => setIncidentAngleDeg(Number(e.target.value))}
                  className="w-full accent-rose-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>
            </>
          )}

          {/* Quick Metrics */}
          <div className="pt-2 border-t border-slate-800 space-y-1.5 text-xs">
            {mode !== 'refraction_tir' ? (
              <>
                <div className="flex justify-between">
                  <span className="text-slate-400">Vị trí ảnh (d'):</span>
                  <span className="font-bold text-amber-400">
                    {isAtFocalPoint ? '∞ (Ở vô cực)' : `${imageDist.toFixed(1)} cm`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Độ phóng đại (k = -d'/d):</span>
                  <span className="font-bold text-cyan-400">
                    {isAtFocalPoint ? 'Không xác định' : `${magnification.toFixed(2)} lần`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Chiều cao ảnh (A'B'):</span>
                  <span className="font-bold text-emerald-400">
                    {isAtFocalPoint ? '∞' : `${imageHeight.toFixed(1)} cm`}
                  </span>
                </div>
                <div className="p-2 rounded bg-slate-900 text-[11px] text-slate-300 border border-slate-800">
                  {isAtFocalPoint ? (
                    <span className="text-amber-300 font-medium">⚡ Vật đặt đúng tiêu điểm (d = f): Chùm tia ló song song, ảnh ở vô cực.</span>
                  ) : isRealImage ? (
                    <span className="text-emerald-300 font-medium">✓ Ảnh thật, ngược chiều với vật (hứng được trên màn).</span>
                  ) : (
                    <span className="text-cyan-300 font-medium">✓ Ảnh ảo, cùng chiều và {imageHeight > objectHeight ? 'lớn hơn' : 'nhỏ hơn'} vật (nhìn qua kính).</span>
                  )}
                  {mode === 'eye_magnifier' && (
                    <div className="mt-1 pt-1 border-t border-slate-800 text-indigo-300">
                      🔍 Độ bội giác của kính lúp ngắm chừng ở vô cực: G = 25/f = {magnifierG.toFixed(1)}X.
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between">
                  <span className="text-slate-400">Góc khúc xạ (r):</span>
                  <span className="font-bold text-emerald-400">
                    {isTir ? 'Không có (Phản xạ toàn phần)' : `${rDeg.toFixed(1)}°`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Góc giới hạn phản xạ TP (i_gh):</span>
                  <span className="font-bold text-amber-400">
                    {criticalAngleDeg ? `${criticalAngleDeg.toFixed(1)}°` : 'Không xảy ra (n₁ < n₂)'}
                  </span>
                </div>
                <div className="p-2 rounded bg-slate-900 text-[11px] text-slate-300 border border-slate-800">
                  {isTir ? (
                    <span className="text-rose-400 font-bold">⚠ PHẢN XẠ TOÀN PHẦN XẢY RA: Góc tới i ({incidentAngleDeg}°) &gt; i_gh ({criticalAngleDeg?.toFixed(1)}°). Toàn bộ ánh sáng bị phản xạ trở lại môi trường 1. Ứng dụng trong cáp quang Internet!</span>
                  ) : (
                    <span className="text-emerald-300 font-medium">✓ Khúc xạ ánh sáng tuân theo định luật Snell: n₁·sin(i) = n₂·sin(r).</span>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Visual SVG Column */}
        <div className="lg:col-span-7 bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-center items-center">
          <svg viewBox="0 0 460 260" className="w-full h-auto max-h-[300px]" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="rayArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L4,3 L0,6 Z" fill="#38bdf8" />
              </marker>
              <marker id="rayGreenArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L4,3 L0,6 Z" fill="#10b981" />
              </marker>
              <marker id="rayAmberArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L4,3 L0,6 Z" fill="#f59e0b" />
              </marker>
            </defs>

            {mode !== 'refraction_tir' ? (
              <>
                {/* Principal Optical Axis */}
                <line x1="20" y1={optCenterY} x2="440" y2={optCenterY} stroke="#475569" strokeWidth="1.5" />
                <text x="435" y={optCenterY - 6} fill="#64748b" fontSize="9">Δ</text>

                {/* Thin Lens Vertical Symbol */}
                <line x1={optCenterX} y1="30" x2={optCenterX} y2="230" stroke="#38bdf8" strokeWidth="2.5" />
                {lensType === 'convex' ? (
                  <>
                    <path d={`M ${optCenterX - 5},40 L ${optCenterX},30 L ${optCenterX + 5},40`} stroke="#38bdf8" strokeWidth="2.5" fill="none" />
                    <path d={`M ${optCenterX - 5},220 L ${optCenterX},230 L ${optCenterX + 5},220`} stroke="#38bdf8" strokeWidth="2.5" fill="none" />
                  </>
                ) : (
                  <>
                    <path d={`M ${optCenterX - 5},30 L ${optCenterX},40 L ${optCenterX + 5},30`} stroke="#38bdf8" strokeWidth="2.5" fill="none" />
                    <path d={`M ${optCenterX - 5},230 L ${optCenterX},220 L ${optCenterX + 5},230`} stroke="#38bdf8" strokeWidth="2.5" fill="none" />
                  </>
                )}
                {/* Optical Center O */}
                <circle cx={optCenterX} cy={optCenterY} r="3" fill="#ffffff" />
                <text x={optCenterX + 4} y={optCenterY + 14} fill="#ffffff" fontSize="10" fontWeight="bold">O</text>

                {/* Focal Points F and F' */}
                {/* F on left */}
                <circle cx={optCenterX - Math.abs(fPx)} cy={optCenterY} r="2.5" fill="#facc15" />
                <text x={optCenterX - Math.abs(fPx)} y={optCenterY + 13} textAnchor="middle" fill="#facc15" fontSize="9" fontWeight="bold">
                  {lensType === 'convex' ? 'F' : "F'"}
                </text>
                {/* F' on right */}
                <circle cx={optCenterX + Math.abs(fPx)} cy={optCenterY} r="2.5" fill="#facc15" />
                <text x={optCenterX + Math.abs(fPx)} y={optCenterY + 13} textAnchor="middle" fill="#facc15" fontSize="9" fontWeight="bold">
                  {lensType === 'convex' ? "F'" : 'F'}
                </text>

                {/* Object Arrow AB */}
                {(() => {
                  const ax = optCenterX - objPx;
                  const ay = optCenterY;
                  const by = optCenterY - hPx;
                  return (
                    <g>
                      <line x1={ax} y1={ay} x2={ax} y2={by} stroke="#06b6d4" strokeWidth="2.5" />
                      <polygon points={`${ax - 3},${by + 5} ${ax + 3},${by + 5} ${ax},${by}`} fill="#06b6d4" />
                      <text x={ax - 5} y={ay + 12} fill="#06b6d4" fontSize="9" fontWeight="bold">A</text>
                      <text x={ax - 5} y={by - 3} fill="#06b6d4" fontSize="9" fontWeight="bold">B</text>
                    </g>
                  );
                })()}

                {/* 3 Principal Rays */}
                {(() => {
                  const ax = optCenterX - objPx;
                  const by = optCenterY - hPx;

                  // Ray 1: Parallel to axis, refracts through F'
                  const r1Y = by;
                  // Ray 2: Through optical center O
                  // Ray 3: Through F, refracts parallel

                  const imgX = isRealImage ? optCenterX + imgPx : optCenterX - Math.abs(imgPx);
                  const imgY = isRealImage ? optCenterY + hImgPx : optCenterY - hImgPx;

                  return (
                    <g>
                      {/* Ray 1: Parallel -> F' */}
                      <line x1={ax} y1={by} x2={optCenterX} y2={r1Y} stroke="#38bdf8" strokeWidth="1.5" />
                      {!isAtFocalPoint && (
                        <>
                          <line x1={optCenterX} y1={r1Y} x2={isRealImage ? 430 : optCenterX + 120} y2={isRealImage ? r1Y + (430 - optCenterX) * ((imgY - r1Y) / (imgX - optCenterX)) : r1Y + (120) * ((r1Y - imgY) / (optCenterX - imgX))} stroke="#38bdf8" strokeWidth="1.5" />
                          {!isRealImage && (
                            /* Virtual extension back to image */
                            <line x1={optCenterX} y1={r1Y} x2={imgX} y2={imgY} stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3,3" />
                          )}
                        </>
                      )}

                      {/* Ray 2: Through Center O */}
                      <line x1={ax} y1={by} x2={optCenterX} y2={optCenterY} stroke="#10b981" strokeWidth="1.5" />
                      {!isAtFocalPoint && (
                        <>
                          <line x1={optCenterX} y1={optCenterY} x2={430} y2={optCenterY + (430 - optCenterX) * ((optCenterY - by) / (optCenterX - ax))} stroke="#10b981" strokeWidth="1.5" />
                          {!isRealImage && (
                            <line x1={optCenterX} y1={optCenterY} x2={imgX} y2={imgY} stroke="#10b981" strokeWidth="1.5" strokeDasharray="3,3" />
                          )}
                        </>
                      )}

                      {/* Image Arrow A'B' */}
                      {!isAtFocalPoint && imgX > 20 && imgX < 440 && (
                        <g>
                          <line x1={imgX} y1={optCenterY} x2={imgX} y2={imgY} stroke="#f59e0b" strokeWidth="2.5" strokeDasharray={isRealImage ? undefined : '4,3'} />
                          <polygon
                            points={
                              isRealImage
                                ? `${imgX - 3},${imgY - 5} ${imgX + 3},${imgY - 5} ${imgX},${imgY}`
                                : `${imgX - 3},${imgY + 5} ${imgX + 3},${imgY + 5} ${imgX},${imgY}`
                            }
                            fill="#f59e0b"
                          />
                          <text x={imgX + 4} y={optCenterY + 12} fill="#f59e0b" fontSize="9" fontWeight="bold">A'</text>
                          <text x={imgX + 4} y={imgY + (isRealImage ? 10 : -4)} fill="#f59e0b" fontSize="9" fontWeight="bold">B'</text>
                        </g>
                      )}
                    </g>
                  );
                })()}
              </>
            ) : (
              /* Snell Refraction & Total Internal Reflection */
              <g transform="translate(100, 30)">
                <text x="130" y="0" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">
                  Khúc xạ và Phản xạ toàn phần tại mặt phân cách
                </text>

                {/* Medium 1 (Top) Fill */}
                <rect x="0" y="20" width="260" height="90" fill="rgba(56, 189, 248, 0.2)" />
                <text x="10" y="40" fill="#38bdf8" fontSize="10" fontWeight="bold">Môi trường 1 (n₁ = {n1.toFixed(2)})</text>

                {/* Medium 2 (Bottom) Fill */}
                <rect x="0" y="110" width="260" height="90" fill="rgba(15, 23, 42, 0.8)" />
                <text x="10" y="130" fill="#94a3b8" fontSize="10" fontWeight="bold">Môi trường 2 (n₂ = {n2.toFixed(2)})</text>

                {/* Interface Boundary */}
                <line x1="0" y1="110" x2="260" y2="110" stroke="#cbd5e1" strokeWidth="2.5" />

                {/* Normal Line (Pháp tuyến NN') */}
                <line x1="130" y1="30" x2="130" y2="190" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4,3" />
                <text x="134" y="40" fill="#94a3b8" fontSize="9">N</text>
                <text x="134" y="185" fill="#94a3b8" fontSize="9">N'</text>

                {/* Incident Ray (Tia tới SI) */}
                {(() => {
                  const rayLen = 80;
                  const sx = 130 - rayLen * Math.sin(iRad);
                  const sy = 110 - rayLen * Math.cos(iRad);
                  return (
                    <g>
                      <line x1={sx} y1={sy} x2="130" y2="110" stroke="#f43f5e" strokeWidth="2.5" />
                      <circle cx="130" cy="110" r="3" fill="#ffffff" />
                      <text x={sx - 10} y={sy} fill="#f43f5e" fontSize="9" fontWeight="bold">S (Tia tới)</text>
                      {/* Incident angle arc */}
                      <text x="110" y="90" fill="#f43f5e" fontSize="9">i={incidentAngleDeg}°</text>
                    </g>
                  );
                })()}

                {/* Refracted Ray (Tia khúc xạ IR) or Total Internal Reflection */}
                {isTir ? (
                  /* 100% Reflected Ray */
                  (() => {
                    const rayLen = 80;
                    const rx = 130 + rayLen * Math.sin(iRad);
                    const ry = 110 - rayLen * Math.cos(iRad);
                    return (
                      <g>
                        <line x1="130" y1="110" x2={rx} y2={ry} stroke="#f59e0b" strokeWidth="3" />
                        <text x={rx + 4} y={ry} fill="#f59e0b" fontSize="9" fontWeight="bold">Phản xạ toàn phần 100%</text>
                      </g>
                    );
                  })()
                ) : (
                  /* Refracted Ray + Weak Reflection */
                  (() => {
                    const rRad = (rDeg * Math.PI) / 180;
                    const rayLen = 80;
                    const rx = 130 + rayLen * Math.sin(rRad);
                    const ry = 110 + rayLen * Math.cos(rRad);
                    return (
                      <g>
                        <line x1="130" y1="110" x2={rx} y2={ry} stroke="#10b981" strokeWidth="2.5" />
                        <text x={rx + 4} y={ry} fill="#10b981" fontSize="9" fontWeight="bold">Tia khúc xạ (r={rDeg.toFixed(1)}°)</text>
                      </g>
                    );
                  })()
                )}
              </g>
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   MODULAR ENGINE 6: KINEMATICS & MOTION
   Supports: kinematics_motion_lab, accelerated_motion_graph_lab,
             projectile_motion_2d_lab, measurement_vernier_lab,
             g10_safety_units_lab, g10_measurement_error_lab,
             g10_displacement_velocity_lab, g10_accelerated_motion_lab,
             g10_projectile_motion_lab
   ========================================================================= */
function KinematicsMotionSim({ simKey, params = {} }: { simKey: string; params?: Record<string, any> }) {
  const initialMode = params.mode || (
    simKey.includes('projectile') ? 'projectile' :
    simKey.includes('measurement') || simKey.includes('vernier') || simKey.includes('error') ? 'measurement' :
    'accelerated_1d'
  );
  const [mode, setMode] = useState<'projectile' | 'accelerated_1d' | 'measurement'>(initialMode);

  // Projectile Motion Parameters
  const [v0, setV0] = useState<number>(params.v0 || 22); // m/s
  const [angleDeg, setAngleDeg] = useState<number>(params.angle || 45); // deg
  const [h0, setH0] = useState<number>(params.h0 || 4); // m
  const [simTime, setSimTime] = useState<number>(params.t || 1.4); // s

  // 1D Motion Parameters
  const [v0_1d, setV0_1d] = useState<number>(params.v0_1d || 4); // m/s
  const [accel1d, setAccel1d] = useState<number>(params.accel || 2.5); // m/s^2
  const [time1d, setTime1d] = useState<number>(3.0); // s

  // Vernier measurement
  const [vernierMm, setVernierMm] = useState<number>(14.65);

  // Projectile Physics
  const g = 9.8;
  const alphaRad = (angleDeg * Math.PI) / 180;
  const v0x = v0 * Math.cos(alphaRad);
  const v0y = v0 * Math.sin(alphaRad);

  const tFlight = (v0y + Math.sqrt(v0y * v0y + 2 * g * h0)) / g;
  const hMax = h0 + (v0y * v0y) / (2 * g);
  const rangeL = v0x * tFlight;

  // Current state at simTime
  const clampedT = Math.min(simTime, tFlight);
  const posX = v0x * clampedT;
  const posY = Math.max(0, h0 + v0y * clampedT - 0.5 * g * clampedT * clampedT);
  const vx = v0x;
  const vy = v0y - g * clampedT;
  const vInstant = Math.sqrt(vx * vx + vy * vy);

  // 1D Motion calculations
  const vEnd1d = v0_1d + accel1d * time1d;
  const disp1d = v0_1d * time1d + 0.5 * accel1d * time1d * time1d;

  return (
    <div className="space-y-4">
      {/* Mode Selector */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setMode('projectile')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'projectile' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Chuyển động ném xiên & ném ngang (2D)
        </button>
        <button
          onClick={() => setMode('accelerated_1d')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'accelerated_1d' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Động học thẳng biến đổi đều (Đồ thị v-t & d-t)
        </button>
        <button
          onClick={() => setMode('measurement')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'measurement' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Đo lường Vật lý & Thước kẹp (Vernier)
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
          {mode === 'projectile' && (
            <>
              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Vận tốc ban đầu (v₀):</span>
                  <span className="font-semibold text-cyan-400">{v0} m/s</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="35"
                  step="1"
                  value={v0}
                  onChange={(e) => setV0(Number(e.target.value))}
                  className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Góc ném (α):</span>
                  <span className="font-semibold text-amber-400">{angleDeg}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="85"
                  step="1"
                  value={angleDeg}
                  onChange={(e) => setAngleDeg(Number(e.target.value))}
                  className="w-full accent-amber-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Độ cao ban đầu (h₀):</span>
                  <span className="font-semibold text-indigo-400">{h0} m</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="25"
                  step="1"
                  value={h0}
                  onChange={(e) => setH0(Number(e.target.value))}
                  className="w-full accent-indigo-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Thời gian chuyển động (t):</span>
                  <span className="font-semibold text-emerald-400">{simTime.toFixed(2)} s / {tFlight.toFixed(2)} s</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={Number(tFlight.toFixed(2))}
                  step="0.05"
                  value={simTime}
                  onChange={(e) => setSimTime(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>
            </>
          )}

          {mode === 'accelerated_1d' && (
            <>
              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Vận tốc đầu (v₀):</span>
                  <span className="font-semibold text-cyan-400">{v0_1d} m/s</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="1"
                  value={v0_1d}
                  onChange={(e) => setV0_1d(Number(e.target.value))}
                  className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Gia tốc (a):</span>
                  <span className="font-semibold text-amber-400">{accel1d} m/s²</span>
                </div>
                <input
                  type="range"
                  min="-4"
                  max="6"
                  step="0.5"
                  value={accel1d}
                  onChange={(e) => setAccel1d(Number(e.target.value))}
                  className="w-full accent-amber-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Thời gian (t):</span>
                  <span className="font-semibold text-emerald-400">{time1d} s</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="8"
                  step="0.5"
                  value={time1d}
                  onChange={(e) => setTime1d(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>
            </>
          )}

          {mode === 'measurement' && (
            <div>
              <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                <span>Vị trí ngàm kẹp:</span>
                <span className="font-semibold text-amber-400">{vernierMm.toFixed(2)} mm</span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                step="0.05"
                value={vernierMm}
                onChange={(e) => setVernierMm(Number(e.target.value))}
                className="w-full accent-amber-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>
          )}

          {/* Real-time Kinematic Readouts */}
          <div className="pt-2 border-t border-slate-800 space-y-1.5 text-xs">
            {mode === 'projectile' && (
              <>
                <div className="flex justify-between">
                  <span className="text-slate-400">Tầm xa cực đại (L):</span>
                  <span className="font-bold text-cyan-400">{rangeL.toFixed(1)} m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Độ cao cực đại (H_max):</span>
                  <span className="font-bold text-amber-400">{hMax.toFixed(1)} m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Vận tốc tức thời v(t):</span>
                  <span className="font-bold text-emerald-400">{vInstant.toFixed(1)} m/s (v_x={vx.toFixed(1)}, v_y={vy.toFixed(1)})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Tọa độ tức thời:</span>
                  <span className="font-bold text-indigo-400">(x = {posX.toFixed(1)} m, y = {posY.toFixed(1)} m)</span>
                </div>
              </>
            )}

            {mode === 'accelerated_1d' && (
              <>
                <div className="flex justify-between">
                  <span className="text-slate-400">Vận tốc cuối (v = v₀ + at):</span>
                  <span className="font-bold text-emerald-400">{vEnd1d.toFixed(1)} m/s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Độ dịch chuyển (d = v₀t + ½at²):</span>
                  <span className="font-bold text-cyan-400">{disp1d.toFixed(1)} m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Hệ thức độc lập (v² - v₀²):</span>
                  <span className="font-bold text-amber-400">{(vEnd1d * vEnd1d - v0_1d * v0_1d).toFixed(1)} = 2ad ({ (2 * accel1d * disp1d).toFixed(1) })</span>
                </div>
              </>
            )}

            {mode === 'measurement' && (
              <>
                <div className="flex justify-between">
                  <span className="text-slate-400">Phần nguyên (Thước chính):</span>
                  <span className="font-bold text-cyan-400">{Math.floor(vernierMm)} mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Phần thập phân (Du xích):</span>
                  <span className="font-bold text-amber-400">{(vernierMm - Math.floor(vernierMm)).toFixed(2)} mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Kết quả đo chuẩn:</span>
                  <span className="font-bold text-emerald-400">d = {vernierMm.toFixed(2)} ± 0.05 mm</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Visual SVG Column */}
        <div className="lg:col-span-7 bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-center items-center">
          <svg viewBox="0 0 460 260" className="w-full h-auto max-h-[300px]" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="velVectorArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L4,3 L0,6 Z" fill="#10b981" />
              </marker>
            </defs>

            {mode === 'projectile' && (
              <>
                {/* Axes and Ground */}
                <line x1="40" y1="220" x2="430" y2="220" stroke="#64748b" strokeWidth="2" />
                <line x1="40" y1="220" x2="40" y2="30" stroke="#64748b" strokeWidth="2" />
                <text x="430" y="235" fill="#94a3b8" fontSize="9">x (m)</text>
                <text x="30" y="25" fill="#94a3b8" fontSize="9">y (m)</text>

                {/* Parabolic Trajectory Path */}
                {(() => {
                  const scaleX = 360 / Math.max(20, rangeL);
                  const scaleY = 160 / Math.max(10, hMax);
                  const pts: string[] = [];
                  const steps = 40;
                  for (let i = 0; i <= steps; i++) {
                    const tCur = (i / steps) * tFlight;
                    const curX = 40 + v0x * tCur * scaleX;
                    const curY = 220 - (h0 + v0y * tCur - 0.5 * g * tCur * tCur) * scaleY;
                    pts.push(`${i === 0 ? 'M' : 'L'} ${curX.toFixed(1)},${curY.toFixed(1)}`);
                  }
                  const pathStr = pts.join(' ');
                  const ballX = 40 + posX * scaleX;
                  const ballY = 220 - posY * scaleY;

                  return (
                    <g>
                      <path d={pathStr} fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4,2" />
                      {/* Cannon / Launcher at (0, h0) */}
                      <circle cx="40" cy={220 - h0 * scaleY} r="5" fill="#f43f5e" />
                      
                      {/* Projectile Ball */}
                      <circle cx={ballX} cy={ballY} r="6" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
                      
                      {/* Velocity Vector Arrow */}
                      <line
                        x1={ballX}
                        y1={ballY}
                        x2={ballX + vx * 1.5}
                        y2={ballY - vy * 1.5}
                        stroke="#10b981"
                        strokeWidth="2"
                        markerEnd="url(#velVectorArrow)"
                      />
                      <text x={ballX + vx * 1.5 + 4} y={ballY - vy * 1.5} fill="#10b981" fontSize="9" fontWeight="bold">v</text>

                      {/* Apex Marker */}
                      <circle cx={40 + (rangeL / 2) * scaleX} cy={220 - hMax * scaleY} r="3" fill="#facc15" />
                      <text x={40 + (rangeL / 2) * scaleX} y={220 - hMax * scaleY - 6} textAnchor="middle" fill="#facc15" fontSize="8">
                        H_max = {hMax.toFixed(1)}m
                      </text>

                      {/* Range Marker */}
                      <circle cx={40 + rangeL * scaleX} cy="220" r="3" fill="#38bdf8" />
                      <text x={40 + rangeL * scaleX} y="235" textAnchor="middle" fill="#38bdf8" fontSize="8">
                        L = {rangeL.toFixed(1)}m
                      </text>
                    </g>
                  );
                })()}
              </>
            )}

            {mode === 'accelerated_1d' && (
              <g transform="translate(40, 20)">
                <text x="180" y="10" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">
                  Đồ thị Vận tốc - Thời gian (v - t): Độ dốc = Gia tốc (a)
                </text>
                {/* Axes */}
                <line x1="30" y1="180" x2="350" y2="180" stroke="#64748b" strokeWidth="2" />
                <line x1="30" y1="180" x2="30" y2="30" stroke="#64748b" strokeWidth="2" />
                <text x="350" y="195" fill="#94a3b8" fontSize="9">t (s)</text>
                <text x="15" y="30" fill="#94a3b8" fontSize="9">v (m/s)</text>

                {(() => {
                  const maxT = 10;
                  const maxV = 40;
                  const scaleX = 300 / maxT;
                  const scaleY = 140 / maxV;
                  const y0 = 180 - v0_1d * scaleY;
                  const yEnd = 180 - vEnd1d * scaleY;
                  const xEnd = 30 + time1d * scaleX;

                  return (
                    <g>
                      {/* Shaded Area under Curve (Displacement) */}
                      <polygon
                        points={`30,180 30,${y0} ${xEnd},${yEnd} ${xEnd},180`}
                        fill="rgba(56, 189, 248, 0.2)"
                      />
                      {/* v-t Line */}
                      <line x1="30" y1={y0} x2={xEnd} y2={yEnd} stroke="#0ea5e9" strokeWidth="3" />
                      <circle cx="30" cy={y0} r="4" fill="#38bdf8" />
                      <circle cx={xEnd} cy={yEnd} r="4" fill="#10b981" />

                      <text x="22" y={y0 + 4} textAnchor="end" fill="#38bdf8" fontSize="9">v₀={v0_1d}</text>
                      <text x={xEnd + 6} y={yEnd + 4} fill="#10b981" fontSize="9">v={vEnd1d.toFixed(1)}</text>
                      <text x={xEnd} y="195" textAnchor="middle" fill="#94a3b8" fontSize="9">t={time1d}s</text>

                      {/* Area label */}
                      <text x={(30 + xEnd) / 2} y="150" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">
                        Diện tích hình thang = Độ dịch chuyển d = {disp1d.toFixed(1)}m
                      </text>
                    </g>
                  );
                })()}
              </g>
            )}

            {mode === 'measurement' && (
              <g transform="translate(40, 40)">
                <text x="180" y="10" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">
                  Mô phỏng Thước kẹp Vernier (Độ chia nhỏ nhất 0.05 mm)
                </text>
                {/* Main Scale Beam */}
                <rect x="20" y="50" width="340" height="40" fill="#334155" stroke="#64748b" strokeWidth="2" />
                {/* Main scale tick marks */}
                {[0, 5, 10, 15, 20, 25, 30].map((mm) => (
                  <g key={mm}>
                    <line x1={30 + mm * 10} y1="70" x2={30 + mm * 10} y2="90" stroke="#f8fafc" strokeWidth="1.5" />
                    <text x={30 + mm * 10} y="65" textAnchor="middle" fill="#cbd5e1" fontSize="9">{mm}</text>
                  </g>
                ))}

                {/* Sliding Vernier Jaw */}
                {(() => {
                  const vernierOffset = vernierMm * 10;
                  return (
                    <g transform={`translate(${vernierOffset}, 0)`}>
                      <rect x="30" y="90" width="100" height="40" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" rx="2" />
                      {/* Vernier scale tick marks */}
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((vi) => (
                        <line key={vi} x1={30 + vi * 9} y1="90" x2={30 + vi * 9} y2="105" stroke="#facc15" strokeWidth="1" />
                      ))}
                      <text x="30" y="120" fill="#facc15" fontSize="8">0</text>
                      <text x="120" y="120" fill="#facc15" fontSize="8">10</text>
                    </g>
                  );
                })()}
                <text x="190" y="180" textAnchor="middle" fill="#10b981" fontSize="13" fontWeight="bold">
                  Giá trị đọc được: {vernierMm.toFixed(2)} mm
                </text>
              </g>
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   MODULAR ENGINE 7: NEWTON DYNAMICS, ENERGY & COLLISIONS
   Supports: newton_dynamics_lab, inclined_plane_friction_lab, momentum_collision_lab,
             centripetal_circular_lab, g10_vector_forces_lab, g10_newtons_laws_lab,
             g10_friction_inclined_lab, g10_work_power_efficiency_lab,
             g10_kinetic_potential_theorem_lab, g10_conservation_energy_lab,
             g10_impulse_momentum_lab, g10_rocket_propulsion_lab,
             g10_collision_types_lab, g10_circular_motion_lab,
             g10_centripetal_banked_lab, g10_hookes_law_lab,
             g9_work_force_displacement_lab, g9_power_speed_lab, g9_rollercoaster_energy_lab
   ========================================================================= */
function NewtonDynamicsSim({ simKey, params = {} }: { simKey: string; params?: Record<string, any> }) {
  const initialMode = params.mode || (
    simKey.includes('collision') || simKey.includes('momentum') || simKey.includes('impulse') || simKey.includes('rocket') ? 'collision' :
    simKey.includes('circular') || simKey.includes('centripetal') ? 'circular' :
    simKey.includes('energy') || simKey.includes('rollercoaster') || simKey.includes('work') ? 'energy' :
    'incline'
  );
  const [mode, setMode] = useState<'incline' | 'collision' | 'energy' | 'circular'>(initialMode);

  // Incline parameters
  const [angleDeg, setAngleDeg] = useState<number>(params.angle || 30);
  const [mass, setMass] = useState<number>(params.mass || 4); // kg
  const [mu, setMu] = useState<number>(params.mu || 0.2); // friction
  const [pullForce, setPullForce] = useState<number>(params.pull || 35); // N

  // Collision parameters
  const [m1, setM1] = useState<number>(params.m1 || 3);
  const [v1, setV1] = useState<number>(params.v1 || 4);
  const [m2, setM2] = useState<number>(params.m2 || 2);
  const [v2, setV2] = useState<number>(params.v2 || -2);
  const [isElastic, setIsElastic] = useState<boolean>(true);

  // Circular motion parameters
  const [radiusR, setRadiusR] = useState<number>(params.radius || 50); // m
  const [carSpeedKmh, setCarSpeedKmh] = useState<number>(params.speed || 60); // km/h

  // Physics Calculations
  const g = 9.8;
  const angleRad = (angleDeg * Math.PI) / 180;
  const weightP = mass * g;
  const pParallel = weightP * Math.sin(angleRad);
  const normalN = weightP * Math.cos(angleRad);
  const maxFriction = mu * normalN;

  // Net force & acceleration along slope
  const netForceAlong = pullForce - pParallel - maxFriction;
  const accel = netForceAlong / mass;

  // Collision Post velocities
  let v1Prime = 0;
  let v2Prime = 0;
  if (isElastic) {
    v1Prime = ((m1 - m2) * v1 + 2 * m2 * v2) / (m1 + m2);
    v2Prime = ((m2 - m1) * v2 + 2 * m1 * v1) / (m1 + m2);
  } else {
    const vShared = (m1 * v1 + m2 * v2) / (m1 + m2);
    v1Prime = vShared;
    v2Prime = vShared;
  }

  // Circular centripetal
  const vMs = carSpeedKmh / 3.6;
  const aCentripetal = (vMs * vMs) / radiusR;
  const idealBankAngleDeg = Math.atan((vMs * vMs) / (g * radiusR)) * (180 / Math.PI);

  return (
    <div className="space-y-4">
      {/* Mode Selector */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setMode('incline')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'incline' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Mặt phẳng nghiêng & Ma sát (Định luật II Newton)
        </button>
        <button
          onClick={() => setMode('collision')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'collision' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Động lượng & Va chạm (Đàn hồi / Mềm)
        </button>
        <button
          onClick={() => setMode('energy')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'energy' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Bảo toàn cơ năng & Công suất (W = W_đ + W_t)
        </button>
        <button
          onClick={() => setMode('circular')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'circular' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Chuyển động tròn & Góc nghiêng đường cong
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
          {mode === 'incline' && (
            <>
              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Góc nghiêng (θ):</span>
                  <span className="font-semibold text-cyan-400">{angleDeg}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="60"
                  step="1"
                  value={angleDeg}
                  onChange={(e) => setAngleDeg(Number(e.target.value))}
                  className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Khối lượng vật (m):</span>
                  <span className="font-semibold text-amber-400">{mass} kg</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.5"
                  value={mass}
                  onChange={(e) => setMass(Number(e.target.value))}
                  className="w-full accent-amber-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Hệ số ma sát trượt (μ):</span>
                  <span className="font-semibold text-rose-400">{mu}</span>
                </div>
                <input
                  type="range"
                  min="0.0"
                  max="0.8"
                  step="0.05"
                  value={mu}
                  onChange={(e) => setMu(Number(e.target.value))}
                  className="w-full accent-rose-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Lực kéo song song mặt dốc (F_kéo):</span>
                  <span className="font-semibold text-emerald-400">{pullForce} N</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="120"
                  step="5"
                  value={pullForce}
                  onChange={(e) => setPullForce(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>
            </>
          )}

          {mode === 'collision' && (
            <>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-400">Kiểu va chạm:</span>
                <button
                  onClick={() => setIsElastic(true)}
                  className={`px-2.5 py-1 rounded text-xs font-medium ${isElastic ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                >
                  Va chạm đàn hồi
                </button>
                <button
                  onClick={() => setIsElastic(false)}
                  className={`px-2.5 py-1 rounded text-xs font-medium ${!isElastic ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                >
                  Va chạm mềm
                </button>
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Khối lượng vật 1 (m₁):</span>
                  <span className="font-semibold text-cyan-400">{m1} kg (v₁ = {v1} m/s)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="0.5"
                  value={m1}
                  onChange={(e) => setM1(Number(e.target.value))}
                  className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Khối lượng vật 2 (m₂):</span>
                  <span className="font-semibold text-rose-400">{m2} kg (v₂ = {v2} m/s)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="0.5"
                  value={m2}
                  onChange={(e) => setM2(Number(e.target.value))}
                  className="w-full accent-rose-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>
            </>
          )}

          {mode === 'circular' && (
            <>
              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Bán kính khúc cua (R):</span>
                  <span className="font-semibold text-cyan-400">{radiusR} m</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="120"
                  step="5"
                  value={radiusR}
                  onChange={(e) => setRadiusR(Number(e.target.value))}
                  className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Tốc độ ô tô (v):</span>
                  <span className="font-semibold text-rose-400">{carSpeedKmh} km/h ({(vMs).toFixed(1)} m/s)</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="120"
                  step="5"
                  value={carSpeedKmh}
                  onChange={(e) => setCarSpeedKmh(Number(e.target.value))}
                  className="w-full accent-rose-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>
            </>
          )}

          {/* Real-time Dynamic Metrics */}
          <div className="pt-2 border-t border-slate-800 space-y-1.5 text-xs">
            {mode === 'incline' && (
              <>
                <div className="flex justify-between">
                  <span className="text-slate-400">Gia tốc trượt (a):</span>
                  <span className={`font-bold ${accel >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {accel.toFixed(2)} m/s² ({accel > 0 ? 'Lên dốc' : accel < 0 ? 'Xuống dốc' : 'Đứng yên'})
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Lực ma sát trượt (F_ms):</span>
                  <span className="font-bold text-amber-400">{maxFriction.toFixed(1)} N</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Phản lực pháp tuyến (N):</span>
                  <span className="font-bold text-cyan-400">{normalN.toFixed(1)} N</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Thành phần trọng lực (P_//):</span>
                  <span className="font-bold text-rose-400">{pParallel.toFixed(1)} N</span>
                </div>
              </>
            )}

            {mode === 'collision' && (
              <>
                <div className="flex justify-between">
                  <span className="text-slate-400">Vận tốc sau va chạm (v₁'):</span>
                  <span className="font-bold text-cyan-400">{v1Prime.toFixed(2)} m/s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Vận tốc sau va chạm (v₂'):</span>
                  <span className="font-bold text-rose-400">{v2Prime.toFixed(2)} m/s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Tổng động lượng hệ (p):</span>
                  <span className="font-bold text-emerald-400">{(m1 * v1 + m2 * v2).toFixed(1)} kg·m/s (Bảo toàn)</span>
                </div>
              </>
            )}

            {mode === 'circular' && (
              <>
                <div className="flex justify-between">
                  <span className="text-slate-400">Gia tốc hướng tâm (a_ht):</span>
                  <span className="font-bold text-cyan-400">{aCentripetal.toFixed(2)} m/s²</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Góc nghiêng đường lý tưởng (θ):</span>
                  <span className="font-bold text-emerald-400">{idealBankAngleDeg.toFixed(1)}° (để xe không bị trượt lật)</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Visual SVG Column */}
        <div className="lg:col-span-7 bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-center items-center">
          <svg viewBox="0 0 460 260" className="w-full h-auto max-h-[300px]" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="forceRed" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L4,3 L0,6 Z" fill="#ef4444" />
              </marker>
              <marker id="forceCyan" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L4,3 L0,6 Z" fill="#06b6d4" />
              </marker>
              <marker id="forceGreen" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L4,3 L0,6 Z" fill="#10b981" />
              </marker>
              <marker id="forceAmber" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L4,3 L0,6 Z" fill="#f59e0b" />
              </marker>
            </defs>

            {mode === 'incline' && (
              <g transform="translate(60, 30)">
                <text x="170" y="0" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">
                  Phân tích 4 Lực trên Mặt phẳng nghiêng: P, N, F_kéo, F_ms
                </text>

                {/* Incline Wedge */}
                {(() => {
                  const wedgeL = 300;
                  const wedgeH = wedgeL * Math.tan(angleRad);
                  const clampedH = Math.min(150, wedgeH);
                  return (
                    <g>
                      <polygon points={`0,180 300,180 300,${180 - clampedH}`} fill="#1e293b" stroke="#64748b" strokeWidth="2" />
                      {/* Angle theta arc */}
                      <path d="M 60,180 A 60,60 0 0,0 55,160" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
                      <text x="70" y="174" fill="#38bdf8" fontSize="10">θ={angleDeg}°</text>

                      {/* Sliding Block */}
                      {(() => {
                        const blockCenterX = 180;
                        const blockCenterY = 180 - (clampedH * (180 / 300));
                        return (
                          <g transform={`translate(${blockCenterX}, ${blockCenterY}) rotate(${-angleDeg})`}>
                            {/* Block Body */}
                            <rect x="-24" y="-30" width="48" height="30" rx="3" fill="#334155" stroke="#f8fafc" strokeWidth="1.5" />
                            <text x="0" y="-12" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">{mass}kg</text>

                            {/* Normal Force N (Perpendicular Up) */}
                            <line x1="0" y1="-15" x2="0" y2="-65" stroke="#06b6d4" strokeWidth="2.5" markerEnd="url(#forceCyan)" />
                            <text x="6" y="-55" fill="#06b6d4" fontSize="9" fontWeight="bold">N</text>

                            {/* Pull Force F_kéo (Up Slope) */}
                            <line x1="24" y1="-15" x2="65" y2="-15" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#forceGreen)" />
                            <text x="68" y="-12" fill="#10b981" fontSize="9" fontWeight="bold">F_kéo</text>

                            {/* Friction Force F_ms (Down Slope) */}
                            <line x1="-24" y1="0" x2="-60" y2="0" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#forceAmber)" />
                            <text x="-65" y="-4" textAnchor="end" fill="#f59e0b" fontSize="8" fontWeight="bold">F_ms</text>
                          </g>
                        );
                      })()}
                    </g>
                  );
                })()}
              </g>
            )}

            {mode === 'collision' && (
              <g transform="translate(40, 40)">
                <text x="190" y="0" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">
                  Mô phỏng Va chạm trên Đường ray Không ma sát
                </text>
                {/* Track */}
                <line x1="20" y1="160" x2="360" y2="160" stroke="#64748b" strokeWidth="3" />

                {/* Cart 1 */}
                <rect x="70" y="110" width="55" height="40" rx="4" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
                <circle cx="85" cy="155" r="5" fill="#94a3b8" />
                <circle cx="110" cy="155" r="5" fill="#94a3b8" />
                <text x="97" y="135" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">{m1}kg</text>
                {/* Cart 1 Velocity Vector */}
                <line x1="125" y1="130" x2="160" y2="130" stroke="#06b6d4" strokeWidth="2.5" markerEnd="url(#forceCyan)" />
                <text x="140" y="122" fill="#06b6d4" fontSize="9" fontWeight="bold">v₁ = {v1}m/s</text>

                {/* Cart 2 */}
                <rect x="230" y="110" width="55" height="40" rx="4" fill="#e11d48" stroke="#fda4af" strokeWidth="2" />
                <circle cx="245" cy="155" r="5" fill="#94a3b8" />
                <circle cx="270" cy="155" r="5" fill="#94a3b8" />
                <text x="257" y="135" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">{m2}kg</text>
                {/* Cart 2 Velocity Vector */}
                <line x1="230" y1="130" x2="195" y2="130" stroke="#f43f5e" strokeWidth="2.5" markerEnd="url(#forceRed)" />
                <text x="200" y="122" fill="#f43f5e" fontSize="9" fontWeight="bold">v₂ = {v2}m/s</text>

                <text x="190" y="195" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">
                  Sau va chạm: v₁' = {v1Prime.toFixed(2)} m/s, v₂' = {v2Prime.toFixed(2)} m/s
                </text>
              </g>
            )}

            {mode === 'circular' && (
              <g transform="translate(60, 40)">
                <text x="170" y="0" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">
                  Lực hướng tâm & Góc nghiêng mặt đường cua (Banked Curve)
                </text>

                {/* Banked Road Section */}
                {(() => {
                  const bAngle = idealBankAngleDeg;
                  return (
                    <g transform={`translate(150, 150) rotate(${-bAngle})`}>
                      {/* Road surface */}
                      <rect x="-80" y="0" width="160" height="10" rx="2" fill="#475569" stroke="#cbd5e1" strokeWidth="1.5" />
                      {/* Car Body */}
                      <rect x="-25" y="-30" width="50" height="30" rx="4" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />
                      <circle cx="-14" cy="0" r="5" fill="#0f172a" />
                      <circle cx="14" cy="0" r="5" fill="#0f172a" />

                      {/* Resultant Centripetal Force Vector (Pointing to curve center Left) */}
                      <line x1="0" y1="-15" x2="-60" y2="-15" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#forceRed)" />
                      <text x="-65" y="-18" textAnchor="end" fill="#ef4444" fontSize="9" fontWeight="bold">F_ht</text>
                    </g>
                  );
                })()}

                <text x="170" y="200" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">
                  a_ht = v²/R = {aCentripetal.toFixed(2)} m/s² | tan(θ) = v²/(gR)
                </text>
              </g>
            )}

            {mode === 'energy' && (
              <g transform="translate(40, 30)">
                <text x="190" y="10" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">
                  Bảo toàn Cơ năng trên Tàu lượn siêu tốc: W = W_đ + W_t = const
                </text>
                {/* Curved Rollercoaster Track */}
                <path
                  d="M 20,50 Q 80,180 160,180 Q 220,180 260,80 Q 300,0 340,140 Q 360,180 380,180"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="3"
                />
                {/* Rollercoaster Cart at Peak */}
                <circle cx="20" cy="50" r="8" fill="#facc15" stroke="#ffffff" strokeWidth="1.5" />
                <text x="35" y="45" fill="#facc15" fontSize="9">Thế năng W_t max</text>

                {/* Cart at Valley */}
                <circle cx="160" cy="180" r="8" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
                <text x="160" y="205" textAnchor="middle" fill="#10b981" fontSize="9">Động năng W_đ max</text>
              </g>
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   MODULAR ENGINE 8: OSCILLATIONS & WAVES
   Supports: oscillations_waves_lab, harmonic_shm_oscillator_lab,
             wave_interference_lab, standing_waves_lab,
             g11_shm_kinematics_lab, g11_pendulum_spring_energy_lab,
             g11_resonance_damping_lab, g11_mechanical_waves_lab,
             g11_interference_standing_wave_lab, g11_em_spectrum_lab
   ========================================================================= */
function OscillationsWavesSim({ simKey, params = {} }: { simKey: string; params?: Record<string, any> }) {
  const initialMode = params.mode || (
    simKey.includes('interference') ? 'wave_interference' :
    simKey.includes('standing_wave') ? 'standing_wave' :
    simKey.includes('em_spectrum') ? 'em_spectrum' :
    'shm'
  );
  const [mode, setMode] = useState<'shm' | 'wave_interference' | 'standing_wave' | 'em_spectrum'>(initialMode);

  // SHM Parameters
  const [amplitudeCm, setAmplitudeCm] = useState<number>(params.A || 5); // cm
  const [frequencyHz, setFrequencyHz] = useState<number>(params.f || 1.5); // Hz
  const [phaseDeg, setPhaseDeg] = useState<number>(params.phi || 0); // deg
  const [timeT, setTimeT] = useState<number>(0);

  // Standing Wave / Interference
  const [waveSpeed, setWaveSpeed] = useState<number>(params.v || 8); // m/s
  const [harmonicsK, setHarmonicsK] = useState<number>(params.k || 3); // loops

  // Physics calculations
  const omega = 2 * Math.PI * frequencyHz;
  const periodT = 1 / frequencyHz;
  const wavelengthM = waveSpeed / frequencyHz;
  const phiRad = (phaseDeg * Math.PI) / 180;

  // Instantaneous SHM values at timeT
  const xInst = amplitudeCm * Math.cos(omega * timeT + phiRad);
  const vInst = -omega * amplitudeCm * Math.sin(omega * timeT + phiRad);
  const aInst = -omega * omega * xInst;

  const vMax = omega * amplitudeCm;
  const aMax = omega * omega * amplitudeCm;

  return (
    <div className="space-y-4">
      {/* Mode Selector */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setMode('shm')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'shm' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Dao động điều hòa (SHM & Vòng tròn lượng giác)
        </button>
        <button
          onClick={() => setMode('wave_interference')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'wave_interference' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Giao thoa sóng cơ 2 nguồn kết hợp
        </button>
        <button
          onClick={() => setMode('standing_wave')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'standing_wave' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Sóng dừng trên sợi dây (Nút & Bụng)
        </button>
        <button
          onClick={() => setMode('em_spectrum')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'em_spectrum' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Thang sóng điện từ (EM Spectrum)
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
          <div>
            <div className="flex justify-between text-[11px] text-slate-300 mb-1">
              <span>Biên độ dao động (A):</span>
              <span className="font-semibold text-cyan-400">{amplitudeCm} cm</span>
            </div>
            <input
              type="range"
              min="2"
              max="8"
              step="0.5"
              value={amplitudeCm}
              onChange={(e) => setAmplitudeCm(Number(e.target.value))}
              className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-[11px] text-slate-300 mb-1">
              <span>Tần số dao động (f):</span>
              <span className="font-semibold text-amber-400">{frequencyHz.toFixed(1)} Hz</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="4.0"
              step="0.1"
              value={frequencyHz}
              onChange={(e) => setFrequencyHz(Number(e.target.value))}
              className="w-full accent-amber-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
            />
          </div>

          {mode === 'shm' && (
            <div>
              <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                <span>Pha ban đầu (φ):</span>
                <span className="font-semibold text-indigo-400">{phaseDeg}° ({(phiRad).toFixed(2)} rad)</span>
              </div>
              <input
                type="range"
                min="-180"
                max="180"
                step="15"
                value={phaseDeg}
                onChange={(e) => setPhaseDeg(Number(e.target.value))}
                className="w-full accent-indigo-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>
          )}

          {mode === 'standing_wave' && (
            <div>
              <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                <span>Số bó sóng (k):</span>
                <span className="font-semibold text-rose-400">{harmonicsK} bó (k+1 = {harmonicsK + 1} nút)</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={harmonicsK}
                onChange={(e) => setHarmonicsK(Number(e.target.value))}
                className="w-full accent-rose-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>
          )}

          <div>
            <div className="flex justify-between text-[11px] text-slate-300 mb-1">
              <span>Thời điểm quan sát (t):</span>
              <span className="font-semibold text-emerald-400">{timeT.toFixed(2)} s</span>
            </div>
            <input
              type="range"
              min="0"
              max="3"
              step="0.02"
              value={timeT}
              onChange={(e) => setTimeT(Number(e.target.value))}
              className="w-full accent-emerald-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
            />
          </div>

          {/* Real-time Oscillatory Metrics */}
          <div className="pt-2 border-t border-slate-800 space-y-1.5 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-400">Chu kỳ dao động (T = 1/f):</span>
              <span className="font-bold text-cyan-400">{periodT.toFixed(2)} s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Tần số góc (ω = 2πf):</span>
              <span className="font-bold text-amber-400">{omega.toFixed(2)} rad/s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Bước sóng (λ = v/f):</span>
              <span className="font-bold text-indigo-400">{wavelengthM.toFixed(2)} m</span>
            </div>
            {mode === 'shm' && (
              <>
                <div className="flex justify-between">
                  <span className="text-slate-400">Li độ tức thời (x):</span>
                  <span className="font-bold text-emerald-400">{xInst.toFixed(2)} cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Vận tốc tức thời (v):</span>
                  <span className="font-bold text-rose-400">{vInst.toFixed(2)} cm/s (v_max = {vMax.toFixed(1)})</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Visual SVG Column */}
        <div className="lg:col-span-7 bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-center items-center">
          <svg viewBox="0 0 460 260" className="w-full h-auto max-h-[300px]" preserveAspectRatio="xMidYMid meet">
            {mode === 'shm' && (
              <>
                {/* Oscilloscope Waveform Display */}
                <g transform="translate(140, 20)">
                  <text x="140" y="10" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">
                    Đồ thị Li độ: x = A·cos(ωt + φ)
                  </text>
                  {/* Grid Lines */}
                  <line x1="0" y1="70" x2="280" y2="70" stroke="#475569" strokeWidth="1.5" />
                  <line x1="0" y1="20" x2="0" y2="120" stroke="#475569" strokeWidth="1.5" />
                  <text x="280" y="85" fill="#64748b" fontSize="8">t (s)</text>

                  {/* Sinusoidal Waveform Path */}
                  {(() => {
                    const pts: string[] = [];
                    const pxAmp = amplitudeCm * 6;
                    for (let px = 0; px <= 270; px += 2) {
                      const curT = (px / 270) * (2 * periodT);
                      const curX = pxAmp * Math.cos(omega * curT + phiRad);
                      pts.push(`${px === 0 ? 'M' : 'L'} ${px},${70 - curX}`);
                    }
                    const nowPx = ((timeT % (2 * periodT)) / (2 * periodT)) * 270;
                    return (
                      <g>
                        <path d={pts.join(' ')} fill="none" stroke="#38bdf8" strokeWidth="2" />
                        {/* Current Time Dot on Wave */}
                        <circle cx={nowPx} cy={70 - xInst * 6} r="4" fill="#10b981" />
                        <line x1={nowPx} y1="20" x2={nowPx} y2="120" stroke="#10b981" strokeWidth="1" strokeDasharray="3,2" />
                      </g>
                    );
                  })()}
                </g>

                {/* Fresnel Phasor Circle (Vòng tròn lượng giác) on Left */}
                <g transform="translate(65, 90)">
                  <circle cx="0" cy="0" r="48" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
                  {/* Axes */}
                  <line x1="-55" y1="0" x2="55" y2="0" stroke="#64748b" strokeWidth="1" />
                  <line x1="0" y1="-55" x2="0" y2="55" stroke="#64748b" strokeWidth="1" />
                  <text x="50" y="-4" fill="#64748b" fontSize="8">+A</text>
                  <text x="-52" y="-4" fill="#64748b" fontSize="8">-A</text>

                  {/* Rotating Phasor Vector */}
                  {(() => {
                    const currentAngleRad = omega * timeT + phiRad;
                    const pxX = 48 * Math.cos(currentAngleRad);
                    const pxY = -48 * Math.sin(currentAngleRad);
                    return (
                      <g>
                        <line x1="0" y1="0" x2={pxX} y2={pxY} stroke="#10b981" strokeWidth="2.5" />
                        <circle cx={pxX} cy={pxY} r="3.5" fill="#10b981" />
                        {/* Projection to X axis */}
                        <line x1={pxX} y1={pxY} x2={pxX} y2="0" stroke="#facc15" strokeWidth="1.5" strokeDasharray="3,2" />
                        <circle cx={pxX} cy="0" r="4" fill="#facc15" />
                      </g>
                    );
                  })()}
                  <text x="0" y="65" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold">
                    Vòng tròn lượng giác
                  </text>
                </g>
              </>
            )}

            {mode === 'standing_wave' && (
              <g transform="translate(50, 40)">
                <text x="180" y="10" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">
                  Sóng dừng trên sợi dây 2 đầu cố định: L = k·λ/2
                </text>
                {/* String Length L */}
                {(() => {
                  const stringL = 360;
                  const loopW = stringL / harmonicsK;
                  const envelopeAmp = amplitudeCm * 5;

                  return (
                    <g transform="translate(0, 90)">
                      {/* Fixed Supports */}
                      <rect x="-8" y="-30" width="8" height="60" fill="#475569" />
                      <rect x={stringL} y="-30" width="8" height="60" fill="#475569" />

                      {/* Loops Envelope */}
                      {[...Array(harmonicsK)].map((_, i) => {
                        const startX = i * loopW;
                        const midX = startX + loopW / 2;
                        const endX = startX + loopW;
                        return (
                          <g key={i}>
                            {/* Upper Envelope */}
                            <path
                              d={`M ${startX},0 Q ${midX},${-envelopeAmp} ${endX},0`}
                              fill="none"
                              stroke="#38bdf8"
                              strokeWidth="2"
                            />
                            {/* Lower Envelope */}
                            <path
                              d={`M ${startX},0 Q ${midX},${envelopeAmp} ${endX},0`}
                              fill="none"
                              stroke="#38bdf8"
                              strokeWidth="2"
                            />
                            {/* Node Markers */}
                            <circle cx={startX} cy="0" r="4" fill="#f43f5e" />
                            {/* Antinode Label */}
                            <circle cx={midX} cy="0" r="3" fill="#facc15" />
                            <text x={midX} y="-25" textAnchor="middle" fill="#38bdf8" fontSize="8">Bụng {i + 1}</text>
                          </g>
                        );
                      })}
                      {/* Last node */}
                      <circle cx={stringL} cy="0" r="4" fill="#f43f5e" />

                      <text x={stringL / 2} y="55" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">
                        Số nút = {harmonicsK + 1} | Số bụng = {harmonicsK}
                      </text>
                    </g>
                  );
                })()}
              </g>
            )}

            {mode === 'wave_interference' && (
              <g transform="translate(50, 30)">
                <text x="180" y="10" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">
                  Giao thoa 2 Nguồn kết hợp: d₂ - d₁ = k·λ (Cực đại)
                </text>
                {/* Sources S1 and S2 */}
                <circle cx="90" cy="110" r="6" fill="#38bdf8" />
                <text x="90" y="130" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">S₁</text>
                <circle cx="270" cy="110" r="6" fill="#38bdf8" />
                <text x="270" y="130" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">S₂</text>

                {/* Central Maximum Fringe (k = 0) */}
                <line x1="180" y1="30" x2="180" y2="190" stroke="#facc15" strokeWidth="2.5" />
                <text x="180" y="205" textAnchor="middle" fill="#facc15" fontSize="9" fontWeight="bold">k = 0 (Cực đại trung tâm)</text>

                {/* Hyperbolic Fringes Left and Right */}
                <path d="M 120,40 Q 150,110 120,180" fill="none" stroke="#10b981" strokeWidth="2" />
                <text x="110" y="40" fill="#10b981" fontSize="8">k = -1</text>
                <path d="M 240,40 Q 210,110 240,180" fill="none" stroke="#10b981" strokeWidth="2" />
                <text x="245" y="40" fill="#10b981" fontSize="8">k = +1</text>
              </g>
            )}

            {mode === 'em_spectrum' && (
              <g transform="translate(40, 40)">
                <text x="190" y="10" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">
                  Thang sóng điện từ (Tần số tăng dần / Bước sóng giảm dần)
                </text>
                {/* Rainbow Spectrum Bar */}
                <g transform="translate(0, 50)">
                  {[
                    { name: 'Vô tuyến', lambda: '> 0.1m', color: '#3b82f6' },
                    { name: 'Vi sóng', lambda: '1mm - 0.1m', color: '#06b6d4' },
                    { name: 'Hồng ngoại', lambda: '760nm - 1mm', color: '#ef4444' },
                    { name: 'Ánh sáng nhìn thấy', lambda: '380 - 760nm', color: '#eab308' },
                    { name: 'Tử ngoại', lambda: '10 - 380nm', color: '#8b5cf6' },
                    { name: 'Tia X', lambda: '0.01 - 10nm', color: '#ec4899' },
                    { name: 'Tia Gamma', lambda: '< 0.01nm', color: '#a855f7' },
                  ].map((band, i) => (
                    <g key={i} transform={`translate(${i * 54}, 0)`}>
                      <rect x="0" y="0" width="52" height="40" rx="3" fill={band.color} opacity="0.85" />
                      <text x="26" y="24" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold">
                        {band.name}
                      </text>
                      <text x="26" y="52" textAnchor="middle" fill="#94a3b8" fontSize="7">
                        {band.lambda}
                      </text>
                    </g>
                  ))}
                </g>
                <text x="190" y="170" textAnchor="middle" fill="#facc15" fontSize="11" fontWeight="bold">
                  c = 3·10⁸ m/s | λ = c/f | Năng lượng photon: ε = hf
                </text>
              </g>
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}


/* =========================================================================
   MODULAR ENGINE 9: ELECTROMAGNETISM & INDUCTION
   Supports: electromagnetism_induction_lab, coulomb_electric_field_lab,
             faraday_flux_induction_lab, lorentz_magnetic_force_lab,
             g11_coulomb_efield_lab, g11_potential_equipotential_lab,
             g11_capacitor_dielectric_lab, g12_ampere_left_hand_lab,
             g12_faraday_self_inductance_lab
   ========================================================================= */
function ElectromagnetismInductionSim({ simKey, params = {} }: { simKey: string; params?: Record<string, any> }) {
  const initialMode = params.mode || (
    simKey.includes('coulomb') || simKey.includes('equipotential') || simKey.includes('capacitor') ? 'coulomb_field' :
    simKey.includes('faraday') || simKey.includes('induction') || simKey.includes('self_inductance') ? 'faraday_induction' :
    simKey.includes('lorentz') ? 'lorentz_deflection' :
    'ampere_force'
  );
  const [mode, setMode] = useState<'ampere_force' | 'coulomb_field' | 'faraday_induction' | 'lorentz_deflection'>(initialMode);

  // Ampere Force parameters
  const [currentI, setCurrentI] = useState<number>(params.I || 6); // A
  const [magFieldB, setMagFieldB] = useState<number>(params.B || 0.8); // T
  const [wireLengthL, setWireLengthL] = useState<number>(params.L || 0.4); // m
  const [angleTheta, setAngleTheta] = useState<number>(params.theta || 90); // deg

  // Coulomb / Capacitor parameters
  const [q1MicroC, setQ1MicroC] = useState<number>(params.q1 || 4);
  const [q2MicroC, setQ2MicroC] = useState<number>(params.q2 || -4);
  const [distR, setDistR] = useState<number>(params.r || 0.2); // m

  // Faraday / Generator parameters
  const [turnsN, setTurnsN] = useState<number>(params.N || 300);
  const [areaCm2, setAreaCm2] = useState<number>(params.S || 50);
  const [rotFreqHz, setRotFreqHz] = useState<number>(params.f || 2);

  // Physics Calculations
  const thetaRad = (angleTheta * Math.PI) / 180;
  const ampereForce = currentI * wireLengthL * magFieldB * Math.sin(thetaRad); // F = ILB sin(theta)

  // Coulomb Force: F = k * |q1 * q2| / r^2
  const kCoulomb = 9e9;
  const q1C = q1MicroC * 1e-6;
  const q2C = q2MicroC * 1e-6;
  const coulombForce = (kCoulomb * Math.abs(q1C * q2C)) / Math.max(1e-4, distR * distR);
  const isAttractive = q1MicroC * q2MicroC < 0;

  // Faraday Induced EMF: E_0 = N * B * S * omega
  const omegaRot = 2 * Math.PI * rotFreqHz;
  const areaM2 = areaCm2 * 1e-4;
  const maxFluxWb = turnsN * magFieldB * areaM2;
  const maxEmfV = maxFluxWb * omegaRot;

  // Lorentz Deflection Radius: R = mv / (qB)
  const particleV = 4e6; // m/s
  const lorentzRadiusCm = Math.min(30, Math.max(5, (1.67e-27 * particleV) / (1.6e-19 * Math.max(0.1, magFieldB)) * 100));

  return (
    <div className="space-y-4">
      {/* Mode Selector */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setMode('ampere_force')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'ampere_force' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Lực từ Ampère & Quy tắc Bàn tay trái
        </button>
        <button
          onClick={() => setMode('coulomb_field')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'coulomb_field' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Định luật Coulomb & Đường sức Điện trường
        </button>
        <button
          onClick={() => setMode('faraday_induction')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'faraday_induction' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Hiện tượng Cảm ứng điện từ & Từ thông (Faraday)
        </button>
        <button
          onClick={() => setMode('lorentz_deflection')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'lorentz_deflection' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Lực Lorentz & Quỹ đạo hạt mang điện
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
          {mode === 'ampere_force' && (
            <>
              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Cường độ dòng điện (I):</span>
                  <span className="font-semibold text-cyan-400">{currentI} A</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.5"
                  value={currentI}
                  onChange={(e) => setCurrentI(Number(e.target.value))}
                  className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Cảm ứng từ (B):</span>
                  <span className="font-semibold text-amber-400">{magFieldB} T</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="2.0"
                  step="0.1"
                  value={magFieldB}
                  onChange={(e) => setMagFieldB(Number(e.target.value))}
                  className="w-full accent-amber-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Chiều dài đoạn dây (L):</span>
                  <span className="font-semibold text-emerald-400">{wireLengthL} m</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1.0"
                  step="0.05"
                  value={wireLengthL}
                  onChange={(e) => setWireLengthL(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Góc hợp bởi dây và từ trường (θ):</span>
                  <span className="font-semibold text-rose-400">{angleTheta}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="180"
                  step="5"
                  value={angleTheta}
                  onChange={(e) => setAngleTheta(Number(e.target.value))}
                  className="w-full accent-rose-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>
            </>
          )}

          {mode === 'coulomb_field' && (
            <>
              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Điện tích q₁:</span>
                  <span className="font-semibold text-rose-400">{q1MicroC} μC</span>
                </div>
                <input
                  type="range"
                  min="-8"
                  max="8"
                  step="1"
                  value={q1MicroC}
                  onChange={(e) => setQ1MicroC(Number(e.target.value))}
                  className="w-full accent-rose-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Điện tích q₂:</span>
                  <span className="font-semibold text-cyan-400">{q2MicroC} μC</span>
                </div>
                <input
                  type="range"
                  min="-8"
                  max="8"
                  step="1"
                  value={q2MicroC}
                  onChange={(e) => setQ2MicroC(Number(e.target.value))}
                  className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Khoảng cách (r):</span>
                  <span className="font-semibold text-amber-400">{distR} m</span>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max="0.5"
                  step="0.02"
                  value={distR}
                  onChange={(e) => setDistR(Number(e.target.value))}
                  className="w-full accent-amber-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>
            </>
          )}

          {mode === 'faraday_induction' && (
            <>
              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Số vòng dây của cuộn (N):</span>
                  <span className="font-semibold text-cyan-400">{turnsN} vòng</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="800"
                  step="25"
                  value={turnsN}
                  onChange={(e) => setTurnsN(Number(e.target.value))}
                  className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Tần số quay của khung (f):</span>
                  <span className="font-semibold text-emerald-400">{rotFreqHz} Hz ({rotFreqHz * 60} rpm)</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="5.0"
                  step="0.5"
                  value={rotFreqHz}
                  onChange={(e) => setRotFreqHz(Number(e.target.value))}
                  className="w-full accent-emerald-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>
            </>
          )}

          {/* Real-time EM Metrics */}
          <div className="pt-2 border-t border-slate-800 space-y-1.5 text-xs">
            {mode === 'ampere_force' && (
              <>
                <div className="flex justify-between">
                  <span className="text-slate-400">Lực từ Ampère (F = ILB·sinθ):</span>
                  <span className="font-bold text-emerald-400">{ampereForce.toFixed(3)} N</span>
                </div>
                <div className="p-2 rounded bg-slate-900 text-[11px] text-slate-300 border border-slate-800">
                  ✋ <strong>Quy tắc bàn tay trái:</strong> Đặt bàn tay trái sao cho các đường sức từ B đâm xuyên vào lòng bàn tay, chiều từ cổ tay đến các ngón tay hướng theo chiều dòng điện I, khi đó ngón tay cái choãi ra 90° chỉ chiều của lực từ F.
                </div>
              </>
            )}

            {mode === 'coulomb_field' && (
              <>
                <div className="flex justify-between">
                  <span className="text-slate-400">Lực tương tác Coulomb:</span>
                  <span className="font-bold text-cyan-400">{coulombForce.toFixed(2)} N ({isAttractive ? 'Hút nhau (Trái dấu)' : 'Đẩy nhau (Cùng dấu)'})</span>
                </div>
              </>
            )}

            {mode === 'faraday_induction' && (
              <>
                <div className="flex justify-between">
                  <span className="text-slate-400">Từ thông cực đại (Φ₀ = NBS):</span>
                  <span className="font-bold text-amber-400">{(maxFluxWb * 1000).toFixed(1)} mWb</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Suất điện động cực đại (E₀ = ωΦ₀):</span>
                  <span className="font-bold text-emerald-400">{maxEmfV.toFixed(2)} V</span>
                </div>
              </>
            )}

            {mode === 'lorentz_deflection' && (
              <div className="flex justify-between">
                <span className="text-slate-400">Bán kính quỹ đạo tròn (R = mv/qB):</span>
                <span className="font-bold text-emerald-400">{lorentzRadiusCm.toFixed(1)} cm</span>
              </div>
            )}
          </div>
        </div>

        {/* Visual SVG Column */}
        <div className="lg:col-span-7 bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-center items-center">
          <svg viewBox="0 0 460 260" className="w-full h-auto max-h-[300px]" preserveAspectRatio="xMidYMid meet">
            <defs>
              <marker id="forceUpGreen" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L4,3 L0,6 Z" fill="#10b981" />
              </marker>
            </defs>

            {mode === 'ampere_force' && (
              <g transform="translate(60, 30)">
                <text x="170" y="0" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">
                  Thí nghiệm Đo Lực từ Ampère tác dụng lên Đoạn dây dẫn
                </text>

                {/* North Magnet Pole (Red) */}
                <rect x="30" y="40" width="80" height="130" rx="4" fill="#991b1b" stroke="#ef4444" strokeWidth="2" />
                <text x="70" y="110" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="bold">N</text>

                {/* South Magnet Pole (Blue) */}
                <rect x="230" y="40" width="80" height="130" rx="4" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
                <text x="270" y="110" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="bold">S</text>

                {/* Magnetic Field Lines B (N -> S) */}
                {[0, 1, 2, 3].map((i) => (
                  <line
                    key={i}
                    x1="110"
                    y1={65 + i * 25}
                    x2="230"
                    y2={65 + i * 25}
                    stroke="#38bdf8"
                    strokeWidth="1.5"
                    strokeDasharray="4,3"
                  />
                ))}
                <text x="170" y="55" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">Từ trường B ({magFieldB}T)</text>

                {/* Conductor Wire Segment carrying Current */}
                <line x1="170" y1="50" x2="170" y2="160" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" />
                <text x="170" y="175" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">Dây dẫn (I = {currentI}A)</text>

                {/* Ampere Force Vector F (Upward by Left Hand Rule) */}
                <line x1="170" y1="100" x2="170" y2={100 - Math.min(60, Math.max(15, ampereForce * 15))} stroke="#10b981" strokeWidth="3" markerEnd="url(#forceUpGreen)" />
                <text x="180" y="75" fill="#10b981" fontSize="11" fontWeight="bold">F_Ampère = {ampereForce.toFixed(3)}N</text>
              </g>
            )}

            {mode === 'coulomb_field' && (
              <g transform="translate(60, 40)">
                <text x="170" y="0" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">
                  Đường sức Điện trường giữa 2 Điện tích điểm
                </text>

                {/* Charge 1 */}
                <circle cx="100" cy="110" r="18" fill={q1MicroC > 0 ? '#ef4444' : '#38bdf8'} stroke="#ffffff" strokeWidth="2" />
                <text x="100" y="116" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="bold">
                  {q1MicroC > 0 ? '+' : '-'}
                </text>
                <text x="100" y="145" textAnchor="middle" fill="#94a3b8" fontSize="9">q₁ = {q1MicroC}μC</text>

                {/* Charge 2 */}
                <circle cx="240" cy="110" r="18" fill={q2MicroC > 0 ? '#ef4444' : '#38bdf8'} stroke="#ffffff" strokeWidth="2" />
                <text x="240" y="116" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="bold">
                  {q2MicroC > 0 ? '+' : '-'}
                </text>
                <text x="240" y="145" textAnchor="middle" fill="#94a3b8" fontSize="9">q₂ = {q2MicroC}μC</text>

                {/* Coulomb Interaction Force Line */}
                <line x1="100" y1="110" x2="240" y2="110" stroke="#facc15" strokeWidth="2" strokeDasharray="4,2" />
                <text x="170" y="100" textAnchor="middle" fill="#facc15" fontSize="11" fontWeight="bold">
                  F = {coulombForce.toFixed(1)} N
                </text>
              </g>
            )}

            {mode === 'faraday_induction' && (
              <g transform="translate(60, 30)">
                <text x="170" y="0" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">
                  Máy phát điện xoay chiều: e = E₀·sin(ωt)
                </text>
                {/* Rotating loop in B-field */}
                <rect x="90" y="50" width="160" height="90" rx="4" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
                <circle cx="170" cy="95" r="4" fill="#38bdf8" />
                
                {/* AC Output Sinusoid */}
                <path
                  d="M 50,200 Q 110,160 170,200 Q 230,240 290,200"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                />
                <text x="170" y="225" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">
                  Suất điện động cực đại: E₀ = {maxEmfV.toFixed(2)} V (f = {rotFreqHz} Hz)
                </text>
              </g>
            )}

            {mode === 'lorentz_deflection' && (
              <g transform="translate(60, 30)">
                <text x="170" y="10" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">
                  Quỹ đạo hạt mang điện chuyển động tròn trong Từ trường đều
                </text>
                {/* Circular Track */}
                <circle cx="170" cy="120" r={lorentzRadiusCm * 2.8} fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4,3" />
                <circle cx="170" cy={120 - lorentzRadiusCm * 2.8} r="6" fill="#f43f5e" stroke="#ffffff" strokeWidth="1.5" />
                <text x="170" y="125" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">
                  Bán kính R = mv/(qB) = {lorentzRadiusCm.toFixed(1)} cm
                </text>
              </g>
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   MODULAR ENGINE 10: IDEAL GAS LAWS & KINETIC THEORY
   Supports: ideal_gas_laws_lab, boyle_charles_isotherm_lab,
             thermodynamic_pv_cycle_lab, g12_boyle_isothermal_lab,
             g12_ideal_gas_equation_lab, g12_kinetic_gas_maxwell_lab
   ========================================================================= */
function IdealGasLawsSim({ simKey, params = {} }: { simKey: string; params?: Record<string, any> }) {
  const initialMode = params.mode || (
    simKey.includes('boyle') || simKey.includes('isothermal') ? 'isothermal' :
    simKey.includes('charles') || simKey.includes('isobaric') ? 'isobaric' :
    simKey.includes('kinetic') || simKey.includes('maxwell') ? 'kinetic_theory' :
    simKey.includes('cycle') ? 'pv_cycle' :
    'isothermal'
  );
  const [mode, setMode] = useState<'isothermal' | 'isobaric' | 'isochoric' | 'pv_cycle' | 'kinetic_theory'>(initialMode);

  const [tempK, setTempK] = useState<number>(params.T || 300); // K (27 C)
  const [volumeL, setVolumeL] = useState<number>(params.V || 4.0); // Liters
  const [molesN, setMolesN] = useState<number>(params.n || 0.16); // moles
  const [gasType, setGasType] = useState<string>(params.gas || 'N2');

  const gasMolarMass: Record<string, { name: string; M: number }> = {
    He: { name: 'Khí Heli (He - 4 g/mol)', M: 0.004 },
    Ne: { name: 'Khí Neon (Ne - 20 g/mol)', M: 0.020 },
    N2: { name: 'Khí Nitơ (N₂ - 28 g/mol)', M: 0.028 },
    O2: { name: 'Khí Oxy (O₂ - 32 g/mol)', M: 0.032 },
  };
  const M = gasMolarMass[gasType]?.M || 0.028;

  // Physics calculations: p * V = n * R * T
  const R = 8.314; // J/(mol.K)
  const volM3 = volumeL * 1e-3;
  const pressurePa = (molesN * R * tempK) / volM3;
  const pressureKPa = pressurePa / 1000;
  const pressureAtm = pressurePa / 101325;

  // Molecular speeds & kinetic energy
  const kBoltzmann = 1.38e-23;
  const avgKineticJ = 1.5 * kBoltzmann * tempK;
  const vRms = Math.sqrt((3 * R * tempK) / M);

  return (
    <div className="space-y-4">
      {/* Mode Selector */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setMode('isothermal')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'isothermal' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Đẳng nhiệt (Định luật Boyle: p₁V₁ = p₂V₂)
        </button>
        <button
          onClick={() => setMode('isobaric')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'isobaric' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Đẳng áp (Định luật Charles: V/T = const)
        </button>
        <button
          onClick={() => setMode('isochoric')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'isochoric' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Đẳng tích (p/T = const)
        </button>
        <button
          onClick={() => setMode('kinetic_theory')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'kinetic_theory' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Thuyết động học phân tử & Tốc độ căn quân phương
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
          <div>
            <label className="text-[11px] font-medium text-slate-400 block mb-1">Loại khí lý tưởng:</label>
            <select
              value={gasType}
              onChange={(e) => setGasType(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
            >
              {Object.entries(gasMolarMass).map(([key, g]) => (
                <option key={key} value={key}>{g.name}</option>
              ))}
            </select>
          </div>

          <div>
            <div className="flex justify-between text-[11px] text-slate-300 mb-1">
              <span>Nhiệt độ tuyệt đối (T):</span>
              <span className="font-semibold text-rose-400">{tempK} K ({(tempK - 273.15).toFixed(1)} °C)</span>
            </div>
            <input
              type="range"
              min="150"
              max="550"
              step="10"
              value={tempK}
              onChange={(e) => setTempK(Number(e.target.value))}
              disabled={mode === 'isothermal'}
              className="w-full accent-rose-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer disabled:opacity-40"
            />
          </div>

          <div>
            <div className="flex justify-between text-[11px] text-slate-300 mb-1">
              <span>Thể tích buồng khí (V):</span>
              <span className="font-semibold text-cyan-400">{volumeL.toFixed(1)} L</span>
            </div>
            <input
              type="range"
              min="1.0"
              max="8.0"
              step="0.2"
              value={volumeL}
              onChange={(e) => setVolumeL(Number(e.target.value))}
              disabled={mode === 'isochoric'}
              className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer disabled:opacity-40"
            />
          </div>

          <div>
            <div className="flex justify-between text-[11px] text-slate-300 mb-1">
              <span>Lượng chất (n):</span>
              <span className="font-semibold text-amber-400">{molesN} mol</span>
            </div>
            <input
              type="range"
              min="0.05"
              max="0.5"
              step="0.01"
              value={molesN}
              onChange={(e) => setMolesN(Number(e.target.value))}
              className="w-full accent-amber-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
            />
          </div>

          {/* Real-time State Metrics */}
          <div className="pt-2 border-t border-slate-800 space-y-1.5 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-400">Áp suất khí (p = nRT/V):</span>
              <span className="font-bold text-emerald-400">{pressureKPa.toFixed(1)} kPa ({pressureAtm.toFixed(2)} atm)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Tốc độ căn quân phương (v_rms):</span>
              <span className="font-bold text-cyan-400">{vRms.toFixed(0)} m/s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Động năng tịnh tiến trung bình:</span>
              <span className="font-bold text-amber-400">{(avgKineticJ * 1e21).toFixed(2)} × 10⁻²¹ J</span>
            </div>
          </div>
        </div>

        {/* Visual SVG Column */}
        <div className="lg:col-span-7 bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-center items-center">
          <svg viewBox="0 0 460 260" className="w-full h-auto max-h-[300px]" preserveAspectRatio="xMidYMid meet">
            {/* Piston Chamber (Left) */}
            <g transform="translate(30, 30)">
              <text x="75" y="0" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">
                Xy-lanh khí Piston (V = {volumeL}L)
              </text>
              {/* Cylinder Outline */}
              <rect x="15" y="20" width="120" height="170" rx="4" fill="#0f172a" stroke="#64748b" strokeWidth="2.5" />
              
              {/* Piston Head Position depending on Volume */}
              {(() => {
                const pistonY = 190 - (volumeL / 8.0) * 140;
                return (
                  <g>
                    {/* Gas Chamber Volume Fill */}
                    <rect x="18" y={pistonY} width="114" height={188 - pistonY} fill="rgba(244, 63, 94, 0.25)" />
                    {/* Gas Particle Dots */}
                    {[...Array(14)].map((_, i) => (
                      <circle
                        key={i}
                        cx={25 + ((i * 19) % 100)}
                        cy={pistonY + 15 + ((i * 23) % Math.max(10, 160 - pistonY))}
                        r="3"
                        fill="#38bdf8"
                      />
                    ))}
                    {/* Piston Head */}
                    <rect x="16" y={pistonY - 14} width="118" height="14" rx="2" fill="#475569" stroke="#cbd5e1" strokeWidth="1.5" />
                    {/* Piston Handle */}
                    <rect x="70" y="5" width="10" height={pistonY - 5} fill="#64748b" stroke="#cbd5e1" strokeWidth="1" />
                  </g>
                );
              })()}
              <text x="75" y="210" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="bold">
                p = {pressureKPa.toFixed(1)} kPa
              </text>
            </g>

            {/* (p - V) State Diagram (Right) */}
            <g transform="translate(200, 30)">
              <text x="120" y="0" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">
                Đồ thị Trạng thái (p - V): Đường Đẳng nhiệt Hyperbol
              </text>
              {/* Axes */}
              <line x1="30" y1="180" x2="230" y2="180" stroke="#64748b" strokeWidth="2" />
              <line x1="30" y1="180" x2="30" y2="20" stroke="#64748b" strokeWidth="2" />
              <text x="230" y="195" fill="#94a3b8" fontSize="8">V (L)</text>
              <text x="15" y="20" fill="#94a3b8" fontSize="8">p (kPa)</text>

              {/* Isothermal Hyperbola Curve: p = nRT / V */}
              {(() => {
                const pts: string[] = [];
                for (let v = 1.0; v <= 8.0; v += 0.2) {
                  const p = (molesN * R * tempK) / (v * 1e-3 * 1000); // kPa
                  const px = 30 + (v / 8.0) * 180;
                  const py = 180 - Math.min(160, (p / 400) * 160);
                  pts.push(`${v === 1.0 ? 'M' : 'L'} ${px.toFixed(1)},${py.toFixed(1)}`);
                }
                const curPX = 30 + (volumeL / 8.0) * 180;
                const curPY = 180 - Math.min(160, (pressureKPa / 400) * 160);

                return (
                  <g>
                    <path d={pts.join(' ')} fill="none" stroke="#38bdf8" strokeWidth="2" />
                    {/* Current State Point Dot */}
                    <circle cx={curPX} cy={curPY} r="5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
                    <line x1="30" y1={curPY} x2={curPX} y2={curPY} stroke="#10b981" strokeWidth="1" strokeDasharray="3,2" />
                    <line x1={curPX} y1={curPY} x2={curPX} y2="180" stroke="#10b981" strokeWidth="1" strokeDasharray="3,2" />
                    <text x={curPX} y="195" textAnchor="middle" fill="#10b981" fontSize="8">{volumeL}L</text>
                  </g>
                );
              })()}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   MODULAR ENGINE 11: NUCLEAR PHYSICS & RADIOACTIVITY
   Supports: nuclear_decay_lab, mass_defect_binding_lab, radioactive_halflife_lab,
             g12_nuclear_binding_curve_lab, g12_nuclear_reaction_lab,
             g12_radioactive_decay_fission_lab
   ========================================================================= */
function NuclearDecaySim({ simKey, params = {} }: { simKey: string; params?: Record<string, any> }) {
  const initialMode = params.mode || (
    simKey.includes('binding_curve') ? 'binding_curve' :
    simKey.includes('reaction') || simKey.includes('fission') ? 'nuclear_reaction' :
    'decay_law'
  );
  const [mode, setMode] = useState<'decay_law' | 'binding_curve' | 'nuclear_reaction'>(initialMode);

  // Radioactive Isotopes
  const [isotopeKey, setIsotopeKey] = useState<string>(params.isotope || 'I131');
  const isotopes: Record<string, { name: string; symbol: string; halfLifeStr: string }> = {
    Rn222: { name: 'Radon-222', symbol: '²²²Rn', halfLifeStr: '3.82 ngày' },
    I131: { name: 'I-ốt-131', symbol: '¹³¹I', halfLifeStr: '8.02 ngày' },
    Co60: { name: 'Coban-60', symbol: '⁶⁰Co', halfLifeStr: '5.27 năm' },
    C14: { name: 'Cacbon-14', symbol: '¹⁴C', halfLifeStr: '5,730 năm' },
    U238: { name: 'Urani-238', symbol: '²³⁸U', halfLifeStr: '4.47 tỉ năm' },
  };
  const isotope = isotopes[isotopeKey] || isotopes.I131;

  // Time in units of half-lives: t / T
  const [timeT, setTimeT] = useState<number>(params.t || 1.0); // 0.0 to 5.0
  const [n0, setN0] = useState<number>(1000);

  // Physics calculations
  // Radioactive decay law: N(t) = N0 * 2^(-t/T)
  const fractionRemaining = Math.pow(0.5, timeT);
  const nRemaining = Math.round(n0 * fractionRemaining);
  const nDecayed = n0 - nRemaining;
  const pctRemaining = fractionRemaining * 100;
  const pctDecayed = (1 - fractionRemaining) * 100;

  return (
    <div className="space-y-4">
      {/* Mode Selector */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setMode('decay_law')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'decay_law' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Định luật Phóng xạ & Chu kỳ bán rã: N(t) = N₀·2^(-t/T)
        </button>
        <button
          onClick={() => setMode('binding_curve')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'binding_curve' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Đường cong Năng lượng liên kết riêng (E_lk / A)
        </button>
        <button
          onClick={() => setMode('nuclear_reaction')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            mode === 'nuclear_reaction' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Phản ứng Phân hạch Urani (²³⁵U) & Nhiệt hạch
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
          <div>
            <label className="text-[11px] font-medium text-slate-400 block mb-1">Đồng vị phóng xạ:</label>
            <select
              value={isotopeKey}
              onChange={(e) => setIsotopeKey(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
            >
              {Object.entries(isotopes).map(([key, iso]) => (
                <option key={key} value={key}>{iso.name} (T = {iso.halfLifeStr})</option>
              ))}
            </select>
          </div>

          <div>
            <div className="flex justify-between text-[11px] text-slate-300 mb-1">
              <span>Thời gian trôi qua theo chu kỳ bán rã (t / T):</span>
              <span className="font-semibold text-cyan-400">{timeT.toFixed(2)} chu kỳ T</span>
            </div>
            <input
              type="range"
              min="0.0"
              max="5.0"
              step="0.1"
              value={timeT}
              onChange={(e) => setTimeT(Number(e.target.value))}
              className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
            />
          </div>

          {/* Real-time Nuclear Metrics */}
          <div className="pt-2 border-t border-slate-800 space-y-1.5 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-400">Tỉ lệ hạt nhân chưa phân rã:</span>
              <span className="font-bold text-emerald-400">{pctRemaining.toFixed(1)}% ({nRemaining} hạt)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Tỉ lệ hạt nhân đã phân rã (ΔN):</span>
              <span className="font-bold text-rose-400">{pctDecayed.toFixed(1)}% ({nDecayed} hạt)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Độ phóng xạ tương đối (H / H₀):</span>
              <span className="font-bold text-amber-400">{pctRemaining.toFixed(1)}%</span>
            </div>
            <div className="p-2 rounded bg-slate-900 text-[11px] text-slate-300 border border-slate-800">
              💡 Cứ sau mỗi chu kỳ bán rã T, 50% số hạt nhân phóng xạ bị phân rã biến đổi thành hạt nhân khác bền vững hơn. Sau 5T, chỉ còn lại ~3.1% hạt nhân mẹ ban đầu.
            </div>
          </div>
        </div>

        {/* Visual SVG Column */}
        <div className="lg:col-span-7 bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 flex flex-col justify-center items-center">
          <svg viewBox="0 0 460 260" className="w-full h-auto max-h-[300px]" preserveAspectRatio="xMidYMid meet">
            {mode === 'decay_law' && (
              <>
                {/* Exponential Decay Graph (Left) */}
                <g transform="translate(30, 20)">
                  <text x="95" y="10" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">
                    Đồ thị Hàm Phóng xạ: N = N₀·2^(-t/T)
                  </text>
                  <line x1="20" y1="180" x2="190" y2="180" stroke="#64748b" strokeWidth="2" />
                  <line x1="20" y1="180" x2="20" y2="30" stroke="#64748b" strokeWidth="2" />
                  <text x="190" y="195" fill="#94a3b8" fontSize="8">t/T</text>
                  <text x="10" y="30" fill="#94a3b8" fontSize="8">N/N₀</text>

                  {/* Half life tick marks */}
                  {[1, 2, 3, 4].map((t) => (
                    <g key={t}>
                      <line x1={20 + t * 35} y1="178" x2={20 + t * 35} y2="182" stroke="#64748b" strokeWidth="1.5" />
                      <text x={20 + t * 35} y="193" textAnchor="middle" fill="#64748b" fontSize="8">{t}T</text>
                    </g>
                  ))}

                  {/* Exponential Curve */}
                  {(() => {
                    const pts: string[] = [];
                    for (let t = 0; t <= 4.5; t += 0.1) {
                      const yVal = Math.pow(0.5, t);
                      const px = 20 + t * 35;
                      const py = 180 - yVal * 140;
                      pts.push(`${t === 0 ? 'M' : 'L'} ${px.toFixed(1)},${py.toFixed(1)}`);
                    }
                    const curX = 20 + timeT * 35;
                    const curY = 180 - fractionRemaining * 140;
                    return (
                      <g>
                        <path d={pts.join(' ')} fill="none" stroke="#f43f5e" strokeWidth="2.5" />
                        <circle cx={curX} cy={curY} r="4.5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
                        <line x1="20" y1={curY} x2={curX} y2={curY} stroke="#10b981" strokeWidth="1" strokeDasharray="3,2" />
                        <line x1={curX} y1={curY} x2={curX} y2="180" stroke="#10b981" strokeWidth="1" strokeDasharray="3,2" />
                      </g>
                    );
                  })()}
                </g>

                {/* 10x10 Nuclei Particle Grid (Right) */}
                <g transform="translate(245, 30)">
                  <text x="95" y="0" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">
                    Lưới 100 Hạt nhân Mẹ & Con
                  </text>
                  <rect x="0" y="15" width="190" height="170" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
                  {[...Array(100)].map((_, i) => {
                    const row = Math.floor(i / 10);
                    const col = i % 10;
                    const isDecayed = i < Math.round(pctDecayed);
                    return (
                      <circle
                        key={i}
                        cx={14 + col * 18}
                        cy={28 + row * 15}
                        r="4.5"
                        fill={isDecayed ? '#3b82f6' : '#ef4444'}
                        className="transition-colors duration-200"
                      />
                    );
                  })}
                  <text x="95" y="202" textAnchor="middle" fill="#94a3b8" fontSize="9">
                    🔴 Chưa phân rã: {Math.round(pctRemaining)}% | 🔵 Đã phân rã: {Math.round(pctDecayed)}%
                  </text>
                </g>
              </>
            )}

            {mode === 'binding_curve' && (
              <g transform="translate(50, 20)">
                <text x="180" y="10" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">
                  Đường cong Năng lượng liên kết riêng theo Số khối A: E_lk / A (MeV/nucleon)
                </text>
                {/* Axes */}
                <line x1="30" y1="190" x2="350" y2="190" stroke="#64748b" strokeWidth="2" />
                <line x1="30" y1="190" x2="30" y2="30" stroke="#64748b" strokeWidth="2" />
                <text x="350" y="205" fill="#94a3b8" fontSize="8">Số khối A</text>
                <text x="15" y="25" fill="#94a3b8" fontSize="8">MeV</text>

                {/* Binding Energy Curve Path */}
                <path
                  d="M 35,170 Q 50,75 80,60 Q 150,55 200,65 Q 280,80 340,95"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="3"
                />

                {/* Peak Point: Fe-56 */}
                <circle cx="150" cy="55" r="5" fill="#facc15" />
                <text x="150" y="42" textAnchor="middle" fill="#facc15" fontSize="9" fontWeight="bold">
                  ⁵⁶Fe (~8.8 MeV) Bền vững nhất
                </text>

                {/* Fusion Region (Left) */}
                <text x="70" y="130" fill="#10b981" fontSize="9" fontWeight="bold">← Vùng Nhiệt hạch</text>

                {/* Fission Region (Right) */}
                <circle cx="330" cy="93" r="4" fill="#f43f5e" />
                <text x="330" y="115" textAnchor="middle" fill="#f43f5e" fontSize="9" fontWeight="bold">
                  ²³⁸U (~7.6 MeV) → Phân hạch
                </text>
              </g>
            )}

            {mode === 'nuclear_reaction' && (
              <g transform="translate(60, 40)">
                <text x="170" y="0" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">
                  Sơ đồ Phân hạch hạt nhân Urani: ¹₀n + ²³⁵₉₂U → ¹⁴⁴₅₆Ba + ⁸⁹₃₆Kr + 3 ¹₀n + 200 MeV
                </text>

                {/* Incoming Neutron */}
                <circle cx="40" cy="110" r="5" fill="#94a3b8" />
                <text x="40" y="95" textAnchor="middle" fill="#94a3b8" fontSize="9">¹₀n (chậm)</text>
                <line x1="50" y1="110" x2="90" y2="110" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3,2" />

                {/* Uranium-235 Nucleus */}
                <circle cx="120" cy="110" r="24" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
                <text x="120" y="115" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">²³⁵U</text>

                {/* Fission Fragments */}
                <line x1="145" y1="100" x2="220" y2="60" stroke="#f43f5e" strokeWidth="2" />
                <circle cx="235" cy="55" r="16" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />
                <text x="235" y="60" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">¹⁴⁴Ba</text>

                <line x1="145" y1="120" x2="220" y2="160" stroke="#f43f5e" strokeWidth="2" />
                <circle cx="235" cy="165" r="14" fill="#059669" stroke="#ffffff" strokeWidth="1.5" />
                <text x="235" y="170" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">⁸⁹Kr</text>

                {/* 3 Prompt Neutrons */}
                {[0, 1, 2].map((i) => (
                  <g key={i}>
                    <line x1="145" y1="110" x2="280" y2={95 + i * 15} stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2,2" />
                    <circle cx="285" cy={95 + i * 15} r="4" fill="#94a3b8" />
                  </g>
                ))}
                <text x="320" y="115" fill="#cbd5e1" fontSize="9" fontWeight="bold">3 ¹₀n (nhanh)</text>

                <text x="170" y="215" textAnchor="middle" fill="#facc15" fontSize="12" fontWeight="bold">
                  Năng lượng tỏa ra: Q ≈ 200 MeV (tương đương 3.2·10⁻¹¹ J / phân hạch)
                </text>
              </g>
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}

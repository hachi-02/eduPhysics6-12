/**
 * GDPT 2018 Vietnamese Physics Curriculum Specification Reference
 * Authoritative ground truth derived from MOET Circular 32/2018/TT-BGDĐT
 * and synthesis of 3 textbook series (Kết nối tri thức, Chân trời sáng tạo, Cánh Diều).
 */

export interface ExpectedTopicSpec {
  code: string;
  titleSnippet: string;
  simKey: string;
}

export interface ExpectedChapterSpec {
  code: string;
  orderIndex: number;
  titleSnippet: string;
  topicCount: number;
  topics: ExpectedTopicSpec[];
}

export interface ExpectedGradeSpec {
  gradeNumber: number;
  title: string;
  levelGroup: 'THCS' | 'THPT';
  chapterCount: number;
  topicCount: number;
  minQuestions: number;
  chapters: ExpectedChapterSpec[];
}

export const EXPECTED_GRADES: number[] = [6, 7, 8, 9, 10, 11, 12];

export const EXPECTED_COGNITIVE_LEVELS = [
  'nhan_biet',
  'thong_hieu',
  'van_dung',
  'van_dung_cao',
] as const;

export const EXPECTED_CURRICULUM_SPEC: Record<number, ExpectedGradeSpec> = {
  8: {
    gradeNumber: 8,
    title: 'Vật Lý Lớp 8 (KHTN 8)',
    levelGroup: 'THCS',
    chapterCount: 4,
    topicCount: 12,
    minQuestions: 400, // 12 topics * 25 + 4 chapters * 25 = 400
    chapters: [
      {
        code: 'G8-CH1',
        orderIndex: 1,
        titleSnippet: 'Khối lượng riêng và Áp suất',
        topicCount: 3,
        topics: [
          { code: 'G8-CH1-TP1', titleSnippet: 'Khối lượng riêng', simKey: 'g8_density_lab' },
          { code: 'G8-CH1-TP2', titleSnippet: 'Áp lực và Áp suất', simKey: 'g8_pressure_surface_lab' },
          { code: 'G8-CH1-TP3', titleSnippet: 'Áp suất chất lỏng', simKey: 'g8_buoyancy_archimedes_lab' },
        ],
      },
      {
        code: 'G8-CH2',
        orderIndex: 2,
        titleSnippet: 'Tác dụng làm quay',
        topicCount: 3,
        topics: [
          { code: 'G8-CH2-TP1', titleSnippet: 'Moment lực', simKey: 'g8_torque_rotation_lab' },
          { code: 'G8-CH2-TP2', titleSnippet: 'Đòn bẩy', simKey: 'g8_lever_balance_lab' },
          { code: 'G8-CH2-TP3', titleSnippet: 'Ứng dụng của Moment', simKey: 'g8_crane_mechanisms_lab' },
        ],
      },
      {
        code: 'G8-CH3',
        orderIndex: 3,
        titleSnippet: 'Điện học',
        topicCount: 3,
        topics: [
          { code: 'G8-CH3-TP1', titleSnippet: 'nhiễm điện', simKey: 'g8_electrostatics_lab' },
          { code: 'G8-CH3-TP2', titleSnippet: 'Mạch điện đơn giản', simKey: 'g8_circuit_builder_lab' },
          { code: 'G8-CH3-TP3', titleSnippet: 'Cường độ dòng điện', simKey: 'g8_current_voltage_measure_lab' },
        ],
      },
      {
        code: 'G8-CH4',
        orderIndex: 4,
        titleSnippet: 'Nhiệt học',
        topicCount: 3,
        topics: [
          { code: 'G8-CH4-TP1', titleSnippet: 'Năng lượng nhiệt', simKey: 'g8_thermal_motion_lab' },
          { code: 'G8-CH4-TP2', titleSnippet: 'truyền nhiệt', simKey: 'g8_heat_transfer_modes_lab' },
          { code: 'G8-CH4-TP3', titleSnippet: 'nở vì nhiệt', simKey: 'g8_bimetallic_expansion_lab' },
        ],
      },
    ],
  },
  9: {
    gradeNumber: 9,
    title: 'Vật Lý Lớp 9 (KHTN 9)',
    levelGroup: 'THCS',
    chapterCount: 4,
    topicCount: 12,
    minQuestions: 400,
    chapters: [
      {
        code: 'G9-CH1',
        orderIndex: 1,
        titleSnippet: 'Năng lượng cơ học',
        topicCount: 3,
        topics: [
          { code: 'G9-CH1-TP1', titleSnippet: 'Công cơ học', simKey: 'g9_work_force_displacement_lab' },
          { code: 'G9-CH1-TP2', titleSnippet: 'Công suất', simKey: 'g9_power_speed_lab' },
          { code: 'G9-CH1-TP3', titleSnippet: 'Động năng', simKey: 'g9_rollercoaster_energy_lab' },
        ],
      },
      {
        code: 'G9-CH2',
        orderIndex: 2,
        titleSnippet: 'Ánh sáng',
        topicCount: 3,
        topics: [
          { code: 'G9-CH2-TP1', titleSnippet: 'khúc xạ', simKey: 'g9_refraction_tir_lab' },
          { code: 'G9-CH2-TP2', titleSnippet: 'Thấu kính', simKey: 'g9_thin_lens_lab' },
          { code: 'G9-CH2-TP3', titleSnippet: 'Kính lúp', simKey: 'g9_eye_magnifier_lab' },
        ],
      },
      {
        code: 'G9-CH3',
        orderIndex: 3,
        titleSnippet: 'Điện học',
        topicCount: 3,
        topics: [
          { code: 'G9-CH3-TP1', titleSnippet: 'Định luật Ohm', simKey: 'g9_ohms_resistor_lab' },
          { code: 'G9-CH3-TP2', titleSnippet: 'nối tiếp', simKey: 'g9_circuit_series_parallel_lab' },
          { code: 'G9-CH3-TP3', titleSnippet: 'Công suất điện', simKey: 'g9_joule_heating_lab' },
        ],
      },
      {
        code: 'G9-CH4',
        orderIndex: 4,
        titleSnippet: 'Điện từ học',
        topicCount: 3,
        topics: [
          { code: 'G9-CH4-TP1', titleSnippet: 'cảm ứng điện từ', simKey: 'g9_induction_faraday_lab' },
          { code: 'G9-CH4-TP2', titleSnippet: 'Dòng điện xoay chiều', simKey: 'g9_ac_generator_lab' },
          { code: 'G9-CH4-TP3', titleSnippet: 'Máy biến áp', simKey: 'g9_transformer_grid_lab' },
        ],
      },
    ],
  },
  10: {
    gradeNumber: 10,
    title: 'Vật Lý Lớp 10 (THPT)',
    levelGroup: 'THPT',
    chapterCount: 6,
    topicCount: 17,
    minQuestions: 575, // 17 topics * 25 + 6 chapters * 25 = 575
    chapters: [
      {
        code: 'G10-CH1',
        orderIndex: 1,
        titleSnippet: 'Mở đầu & Sai số phép đo',
        topicCount: 2,
        topics: [
          { code: 'G10-CH1-TP1', titleSnippet: 'an toàn', simKey: 'g10_safety_units_lab' },
          { code: 'G10-CH1-TP2', titleSnippet: 'sai số', simKey: 'g10_measurement_error_lab' },
        ],
      },
      {
        code: 'G10-CH2',
        orderIndex: 2,
        titleSnippet: 'Động học',
        topicCount: 3,
        topics: [
          { code: 'G10-CH2-TP1', titleSnippet: 'Độ dịch chuyển', simKey: 'g10_displacement_velocity_lab' },
          { code: 'G10-CH2-TP2', titleSnippet: 'Gia tốc', simKey: 'g10_accelerated_motion_lab' },
          { code: 'G10-CH2-TP3', titleSnippet: 'rơi tự do', simKey: 'g10_projectile_motion_lab' },
        ],
      },
      {
        code: 'G10-CH3',
        orderIndex: 3,
        titleSnippet: 'Động lực học',
        topicCount: 3,
        topics: [
          { code: 'G10-CH3-TP1', titleSnippet: 'Tổng hợp', simKey: 'g10_vector_forces_lab' },
          { code: 'G10-CH3-TP2', titleSnippet: 'định luật Newton', simKey: 'g10_newtons_laws_lab' },
          { code: 'G10-CH3-TP3', titleSnippet: 'Các lực', simKey: 'g10_friction_inclined_lab' },
        ],
      },
      {
        code: 'G10-CH4',
        orderIndex: 4,
        titleSnippet: 'Công, Năng lượng',
        topicCount: 3,
        topics: [
          { code: 'G10-CH4-TP1', titleSnippet: 'Công cơ học', simKey: 'g10_work_power_efficiency_lab' },
          { code: 'G10-CH4-TP2', titleSnippet: 'Động năng', simKey: 'g10_kinetic_potential_theorem_lab' },
          { code: 'G10-CH4-TP3', titleSnippet: 'bảo toàn cơ năng', simKey: 'g10_conservation_energy_lab' },
        ],
      },
      {
        code: 'G10-CH5',
        orderIndex: 5,
        titleSnippet: 'Động lượng',
        topicCount: 3,
        topics: [
          { code: 'G10-CH5-TP1', titleSnippet: 'Động lượng', simKey: 'g10_impulse_momentum_lab' },
          { code: 'G10-CH5-TP2', titleSnippet: 'phản lực', simKey: 'g10_rocket_propulsion_lab' },
          { code: 'G10-CH5-TP3', titleSnippet: 'va chạm', simKey: 'g10_collision_types_lab' },
        ],
      },
      {
        code: 'G10-CH6',
        orderIndex: 6,
        titleSnippet: 'Chuyển động tròn đều',
        topicCount: 3,
        topics: [
          { code: 'G10-CH6-TP1', titleSnippet: 'Động học chuyển động tròn', simKey: 'g10_circular_motion_lab' },
          { code: 'G10-CH6-TP2', titleSnippet: 'Lực hướng tâm', simKey: 'g10_centripetal_banked_lab' },
          { code: 'G10-CH6-TP3', titleSnippet: 'Định luật Hooke', simKey: 'g10_hookes_law_lab' },
        ],
      },
    ],
  },
  11: {
    gradeNumber: 11,
    title: 'Vật Lý Lớp 11 (THPT)',
    levelGroup: 'THPT',
    chapterCount: 4,
    topicCount: 12,
    minQuestions: 400,
    chapters: [
      {
        code: 'G11-CH1',
        orderIndex: 1,
        titleSnippet: 'Dao động điều hòa',
        topicCount: 3,
        topics: [
          { code: 'G11-CH1-TP1', titleSnippet: 'Dao động điều hòa', simKey: 'g11_shm_kinematics_lab' },
          { code: 'G11-CH1-TP2', titleSnippet: 'Con lắc lò xo', simKey: 'g11_pendulum_spring_energy_lab' },
          { code: 'G11-CH1-TP3', titleSnippet: 'cộng hưởng', simKey: 'g11_resonance_damping_lab' },
        ],
      },
      {
        code: 'G11-CH2',
        orderIndex: 2,
        titleSnippet: 'Sóng cơ',
        topicCount: 3,
        topics: [
          { code: 'G11-CH2-TP1', titleSnippet: 'Sóng cơ', simKey: 'g11_mechanical_waves_lab' },
          { code: 'G11-CH2-TP2', titleSnippet: 'Giao thoa', simKey: 'g11_interference_standing_wave_lab' },
          { code: 'G11-CH2-TP3', titleSnippet: 'Sóng điện từ', simKey: 'g11_em_spectrum_lab' },
        ],
      },
      {
        code: 'G11-CH3',
        orderIndex: 3,
        titleSnippet: 'Điện trường',
        topicCount: 3,
        topics: [
          { code: 'G11-CH3-TP1', titleSnippet: 'Coulomb', simKey: 'g11_coulomb_efield_lab' },
          { code: 'G11-CH3-TP2', titleSnippet: 'Điện thế', simKey: 'g11_potential_equipotential_lab' },
          { code: 'G11-CH3-TP3', titleSnippet: 'Tụ điện', simKey: 'g11_capacitor_dielectric_lab' },
        ],
      },
      {
        code: 'G11-CH4',
        orderIndex: 4,
        titleSnippet: 'Dòng điện, Mạch điện',
        topicCount: 3,
        topics: [
          { code: 'G11-CH4-TP1', titleSnippet: 'Tốc độ trôi', simKey: 'g11_drift_velocity_lab' },
          { code: 'G11-CH4-TP2', titleSnippet: 'Định luật Ohm toàn mạch', simKey: 'g11_circuit_emf_resistor_lab' },
          { code: 'G11-CH4-TP3', titleSnippet: 'cảm biến', simKey: 'g11_sensor_power_transfer_lab' },
        ],
      },
    ],
  },
  12: {
    gradeNumber: 12,
    title: 'Vật Lý Lớp 12 (THPT)',
    levelGroup: 'THPT',
    chapterCount: 4,
    topicCount: 12,
    minQuestions: 400,
    chapters: [
      {
        code: 'G12-CH1',
        orderIndex: 1,
        titleSnippet: 'Vật lý Nhiệt',
        topicCount: 3,
        topics: [
          { code: 'G12-CH1-TP1', titleSnippet: 'Cấu tạo chất', simKey: 'g12_molecular_states_lab' },
          { code: 'G12-CH1-TP2', titleSnippet: 'Định luật I', simKey: 'g12_thermodynamics_first_law_lab' },
          { code: 'G12-CH1-TP3', titleSnippet: 'Nhiệt dung riêng', simKey: 'g12_calorimetry_phase_change_lab' },
        ],
      },
      {
        code: 'G12-CH2',
        orderIndex: 2,
        titleSnippet: 'Khí lý tưởng',
        topicCount: 3,
        topics: [
          { code: 'G12-CH2-TP1', titleSnippet: 'Boyle', simKey: 'g12_boyle_isothermal_lab' },
          { code: 'G12-CH2-TP2', titleSnippet: 'Charles', simKey: 'g12_ideal_gas_equation_lab' },
          { code: 'G12-CH2-TP3', titleSnippet: 'Áp suất khí', simKey: 'g12_kinetic_gas_maxwell_lab' },
        ],
      },
      {
        code: 'G12-CH3',
        orderIndex: 3,
        titleSnippet: 'Từ trường',
        topicCount: 3,
        topics: [
          { code: 'G12-CH3-TP1', titleSnippet: 'Lực từ Ampère', simKey: 'g12_ampere_left_hand_lab' },
          { code: 'G12-CH3-TP2', titleSnippet: 'Từ thông', simKey: 'g12_faraday_self_inductance_lab' },
          { code: 'G12-CH3-TP3', titleSnippet: 'dòng điện xoay chiều', simKey: 'g12_ac_generator_power_lab' },
        ],
      },
      {
        code: 'G12-CH4',
        orderIndex: 4,
        titleSnippet: 'Vật lý Hạt nhân',
        topicCount: 3,
        topics: [
          { code: 'G12-CH4-TP1', titleSnippet: 'Cấu tạo hạt nhân', simKey: 'g12_nuclear_binding_curve_lab' },
          { code: 'G12-CH4-TP2', titleSnippet: 'Phản ứng hạt nhân', simKey: 'g12_nuclear_reaction_lab' },
          { code: 'G12-CH4-TP3', titleSnippet: 'phóng xạ', simKey: 'g12_radioactive_decay_fission_lab' },
        ],
      },
    ],
  },
  6: {
    gradeNumber: 6,
    title: 'Vật Lý Lớp 6 (KHTN 6)',
    levelGroup: 'THCS',
    chapterCount: 4,
    topicCount: 15,
    minQuestions: 475,
    chapters: [],
  },
  7: {
    gradeNumber: 7,
    title: 'Vật Lý Lớp 7 (KHTN 7)',
    levelGroup: 'THCS',
    chapterCount: 4,
    topicCount: 12,
    minQuestions: 400,
    chapters: [],
  },
};

/** All 65 simulation keys expected across Grades 8-12 */
export const EXPECTED_SIM_KEYS_GRADES_8_12: string[] = [
  // Grade 8 (12 keys)
  'g8_density_lab',
  'g8_pressure_surface_lab',
  'g8_buoyancy_archimedes_lab',
  'g8_torque_rotation_lab',
  'g8_lever_balance_lab',
  'g8_crane_mechanisms_lab',
  'g8_electrostatics_lab',
  'g8_circuit_builder_lab',
  'g8_current_voltage_measure_lab',
  'g8_thermal_motion_lab',
  'g8_heat_transfer_modes_lab',
  'g8_bimetallic_expansion_lab',

  // Grade 9 (12 keys)
  'g9_work_force_displacement_lab',
  'g9_power_speed_lab',
  'g9_rollercoaster_energy_lab',
  'g9_refraction_tir_lab',
  'g9_thin_lens_lab',
  'g9_eye_magnifier_lab',
  'g9_ohms_resistor_lab',
  'g9_circuit_series_parallel_lab',
  'g9_joule_heating_lab',
  'g9_induction_faraday_lab',
  'g9_ac_generator_lab',
  'g9_transformer_grid_lab',

  // Grade 10 (17 keys)
  'g10_safety_units_lab',
  'g10_measurement_error_lab',
  'g10_displacement_velocity_lab',
  'g10_accelerated_motion_lab',
  'g10_projectile_motion_lab',
  'g10_vector_forces_lab',
  'g10_newtons_laws_lab',
  'g10_friction_inclined_lab',
  'g10_work_power_efficiency_lab',
  'g10_kinetic_potential_theorem_lab',
  'g10_conservation_energy_lab',
  'g10_impulse_momentum_lab',
  'g10_rocket_propulsion_lab',
  'g10_collision_types_lab',
  'g10_circular_motion_lab',
  'g10_centripetal_banked_lab',
  'g10_hookes_law_lab',

  // Grade 11 (12 keys)
  'g11_shm_kinematics_lab',
  'g11_pendulum_spring_energy_lab',
  'g11_resonance_damping_lab',
  'g11_mechanical_waves_lab',
  'g11_interference_standing_wave_lab',
  'g11_em_spectrum_lab',
  'g11_coulomb_efield_lab',
  'g11_potential_equipotential_lab',
  'g11_capacitor_dielectric_lab',
  'g11_drift_velocity_lab',
  'g11_circuit_emf_resistor_lab',
  'g11_sensor_power_transfer_lab',

  // Grade 12 (12 keys)
  'g12_molecular_states_lab',
  'g12_thermodynamics_first_law_lab',
  'g12_calorimetry_phase_change_lab',
  'g12_boyle_isothermal_lab',
  'g12_ideal_gas_equation_lab',
  'g12_kinetic_gas_maxwell_lab',
  'g12_ampere_left_hand_lab',
  'g12_faraday_self_inductance_lab',
  'g12_ac_generator_power_lab',
  'g12_nuclear_binding_curve_lab',
  'g12_nuclear_reaction_lab',
  'g12_radioactive_decay_fission_lab',
];

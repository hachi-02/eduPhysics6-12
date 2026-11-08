'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  SkipForward,
  Download,
  Copy,
  Check,
  TrendingUp,
  Table,
  Sliders,
  Maximize2,
  Info,
} from 'lucide-react';

export interface GraphSeriesConfig {
  id: string;
  name: string;
  unit: string;
  color: string;
  formulaLabel: string;
  calculate: (t: number, params: Record<string, any>) => number;
}

export interface PhysicsDomainGraphSpec {
  domainTitle: string;
  description: string;
  xLabel: string;
  xUnit: string;
  tMax: number;
  dt: number;
  series: GraphSeriesConfig[];
  defaultActiveSeries: string[];
}

/**
 * Suy ra đặc tả đồ thị (Graph Specification) dựa trên sim_key
 */
export function getGraphSpecForSimKey(simKey: string, params: Record<string, any> = {}): PhysicsDomainGraphSpec {
  const key = simKey.toLowerCase();

  // 1. Dao động điều hòa & Sóng (Grades 11, 12)
  if (
    key.includes('shm') ||
    key.includes('harmonic') ||
    key.includes('oscillator') ||
    key.includes('wave') ||
    key.includes('pendulum') ||
    key.includes('resonance')
  ) {
    const A = Number(params.amplitude || 5); // biên độ (cm)
    const T = Number(params.period || 2); // chu kỳ (s)
    const omega = (2 * Math.PI) / T;
    const m = Number(params.mass || 0.2); // kg
    const k = m * omega * omega;

    return {
      domainTitle: 'Đồ thị Dao động Điều hòa & Năng lượng',
      description: 'Khảo sát biến thiên li độ x(t), vận tốc v(t), gia tốc a(t) và chuyển hóa Động năng - Thế năng theo thời gian.',
      xLabel: 'Thời gian t',
      xUnit: 's',
      tMax: Number(params.tMax || 6),
      dt: 0.04,
      series: [
        {
          id: 'x',
          name: 'Li độ x',
          unit: 'cm',
          color: '#2563eb', // Blue
          formulaLabel: 'x = A cos(ωt)',
          calculate: (t) => A * Math.cos(omega * t),
        },
        {
          id: 'v',
          name: 'Vận tốc v',
          unit: 'cm/s',
          color: '#10b981', // Emerald
          formulaLabel: 'v = -ωA sin(ωt)',
          calculate: (t) => -omega * A * Math.sin(omega * t),
        },
        {
          id: 'a',
          name: 'Gia tốc a',
          unit: 'cm/s²',
          color: '#f59e0b', // Amber
          formulaLabel: 'a = -ω²x',
          calculate: (t) => -omega * omega * A * Math.cos(omega * t),
        },
        {
          id: 'Wd',
          name: 'Động năng Wđ',
          unit: 'mJ',
          color: '#8b5cf6', // Purple
          formulaLabel: 'Wđ = ½mv²',
          calculate: (t) => {
            const v = (-omega * A * Math.sin(omega * t)) / 100; // m/s
            return 0.5 * m * v * v * 1000;
          },
        },
        {
          id: 'Wt',
          name: 'Thế năng Wt',
          unit: 'mJ',
          color: '#ec4899', // Pink
          formulaLabel: 'Wt = ½kx²',
          calculate: (t) => {
            const x = (A * Math.cos(omega * t)) / 100; // m
            return 0.5 * k * x * x * 1000;
          },
        },
      ],
      defaultActiveSeries: ['x', 'v'],
    };
  }

  // 2. Chuyển động biến đổi đều, Rơi tự do, Động lực học (Grades 7, 10)
  if (
    key.includes('kinematic') ||
    key.includes('accelerat') ||
    key.includes('speed') ||
    key.includes('motion') ||
    key.includes('gravity') ||
    key.includes('projectile') ||
    key.includes('newton') ||
    key.includes('friction')
  ) {
    const v0 = Number(params.v0 ?? params.initialSpeed ?? 2); // m/s
    const a = Number(params.acceleration ?? params.a ?? 1.5); // m/s²

    return {
      domainTitle: 'Đồ thị Chuyển động & Động học',
      description: 'Quan sát đồ thị vận tốc v(t), độ dịch chuyển d(t) và gia tốc a(t) trong chuyển động thẳng biến đổi đều.',
      xLabel: 'Thời gian t',
      xUnit: 's',
      tMax: 8,
      dt: 0.05,
      series: [
        {
          id: 'v',
          name: 'Vận tốc v',
          unit: 'm/s',
          color: '#0ea5e9', // Sky blue
          formulaLabel: 'v = v₀ + at',
          calculate: (t) => v0 + a * t,
        },
        {
          id: 's',
          name: 'Độ dịch chuyển d',
          unit: 'm',
          color: '#10b981', // Emerald
          formulaLabel: 'd = v₀t + ½at²',
          calculate: (t) => v0 * t + 0.5 * a * t * t,
        },
        {
          id: 'a',
          name: 'Gia tốc a',
          unit: 'm/s²',
          color: '#f97316', // Orange
          formulaLabel: 'a = const',
          calculate: () => a,
        },
      ],
      defaultActiveSeries: ['v', 's'],
    };
  }

  // 3. Khí lý tưởng & Nhiệt động lực học (Grade 12)
  if (
    key.includes('gas') ||
    key.includes('boyle') ||
    key.includes('isotherm') ||
    key.includes('thermodynamic') ||
    key.includes('pv_cycle')
  ) {
    const T = Number(params.temperature || 300); // K
    const n = Number(params.moles || 1); // mol
    const R = 8.314;

    return {
      domainTitle: 'Đồ thị Đẳng nhiệt Khí lý tưởng p - V',
      description: 'Đường đẳng nhiệt p theo V theo định luật Boyle - Mariotte (p = nRT / V).',
      xLabel: 'Thể tích V',
      xUnit: 'Lít',
      tMax: 10,
      dt: 0.1,
      series: [
        {
          id: 'p_T1',
          name: `Áp suất p (T = ${T} K)`,
          unit: 'kPa',
          color: '#ef4444', // Red
          formulaLabel: 'p = nRT / V',
          calculate: (V) => {
            const vM3 = Math.max(0.5, V) * 0.001;
            return (n * R * T) / vM3 / 1000;
          },
        },
        {
          id: 'p_T2',
          name: `Áp suất p (T = ${T + 150} K)`,
          unit: 'kPa',
          color: '#f59e0b', // Amber
          formulaLabel: 'p₂ = nR(T+150) / V',
          calculate: (V) => {
            const vM3 = Math.max(0.5, V) * 0.001;
            return (n * R * (T + 150)) / vM3 / 1000;
          },
        },
      ],
      defaultActiveSeries: ['p_T1', 'p_T2'],
    };
  }

  // 4. Điện học & Định luật Ôm (Grades 9, 11)
  if (
    key.includes('circuit') ||
    key.includes('ohm') ||
    key.includes('resistor') ||
    key.includes('capacitor') ||
    key.includes('electric')
  ) {
    const R = Number(params.resistance || 10); // Ohm

    return {
      domainTitle: 'Đặc tuyến Vôn - Ampe (I - U) & Công suất',
      description: 'Khảo sát sự phụ thuộc của cường độ dòng điện I và công suất tỏa nhiệt P theo hiệu điện thế U.',
      xLabel: 'Hiệu điện thế U',
      xUnit: 'V',
      tMax: 12,
      dt: 0.1,
      series: [
        {
          id: 'I',
          name: 'Cường độ I',
          unit: 'A',
          color: '#2563eb', // Blue
          formulaLabel: 'I = U / R',
          calculate: (U) => U / R,
        },
        {
          id: 'P',
          name: 'Công suất P',
          unit: 'W',
          color: '#dc2626', // Red
          formulaLabel: 'P = U² / R',
          calculate: (U) => (U * U) / R,
        },
      ],
      defaultActiveSeries: ['I', 'P'],
    };
  }

  // 5. Chu kỳ Bán rã & Vật lý Hạt nhân (Grade 12)
  if (
    key.includes('nuclear') ||
    key.includes('decay') ||
    key.includes('halflife') ||
    key.includes('radioactive')
  ) {
    const N0 = Number(params.initialCount || 1000);
    const T_half = Number(params.halfLife || 2.5); // s or years

    return {
      domainTitle: 'Đường cong Phóng xạ & Số hạt nhân còn lại',
      description: 'Quy luật phân rã phóng xạ theo thời gian N(t) = N₀ · 2^(-t / T).',
      xLabel: 'Thời gian t',
      xUnit: 'chu kỳ T',
      tMax: 6,
      dt: 0.05,
      series: [
        {
          id: 'N',
          name: 'Số hạt chưa phân rã N(t)',
          unit: 'hạt',
          color: '#8b5cf6',
          formulaLabel: 'N(t) = N₀ · 2^(-t/T)',
          calculate: (t) => N0 * Math.pow(2, -t / T_half),
        },
        {
          id: 'DeltaN',
          name: 'Số hạt đã phân rã ΔN(t)',
          unit: 'hạt',
          color: '#ef4444',
          formulaLabel: 'ΔN(t) = N₀(1 - 2^(-t/T))',
          calculate: (t) => N0 * (1 - Math.pow(2, -t / T_half)),
        },
      ],
      defaultActiveSeries: ['N', 'DeltaN'],
    };
  }

  // 6. Áp suất chất lỏng & Lực đàn hồi (Grades 6, 8, 10)
  if (key.includes('fluid') || key.includes('pressure') || key.includes('archimedes') || key.includes('hooke')) {
    const k_spring = Number(params.k || 50); // N/m

    return {
      domainTitle: 'Đồ thị Định luật Hooke: Lực đàn hồi Fđh - Độ giãn Δl',
      description: 'Mối quan hệ tuyến tính giữa lực đàn hồi và độ biến dạng của lò xo.',
      xLabel: 'Độ biến dạng Δl',
      xUnit: 'cm',
      tMax: 10,
      dt: 0.1,
      series: [
        {
          id: 'F_dh',
          name: 'Lực đàn hồi Fđh',
          unit: 'N',
          color: '#0ea5e9',
          formulaLabel: 'Fđh = k · |Δl|',
          calculate: (dl) => k_spring * (dl / 100),
        },
        {
          id: 'Wt_dh',
          name: 'Thế năng đàn hồi Wt',
          unit: 'mJ',
          color: '#f59e0b',
          formulaLabel: 'Wt = ½k · (Δl)²',
          calculate: (dl) => 0.5 * k_spring * Math.pow(dl / 100, 2) * 1000,
        },
      ],
      defaultActiveSeries: ['F_dh', 'Wt_dh'],
    };
  }

  // Default Universal Fallback
  return {
    domainTitle: 'Đồ thị Vật lý & Quan hệ Đại lượng Thời gian thực',
    description: 'Trực quan hóa sự biến đổi liên tục của các thông số vật lý theo thời gian.',
    xLabel: 'Thời gian t',
    xUnit: 's',
    tMax: 6,
    dt: 0.05,
    series: [
      {
        id: 'y1',
        name: 'Đại lượng chính Y₁(t)',
        unit: 'đơn vị',
        color: '#2563eb',
        formulaLabel: 'Y₁(t) = A · sin(ωt)',
        calculate: (t) => 5 * Math.sin((2 * Math.PI * t) / 2),
      },
      {
        id: 'y2',
        name: 'Đại lượng dẫn xuất Y₂(t)',
        unit: 'đơn vị',
        color: '#10b981',
        formulaLabel: 'Y₂(t) = A · cos(ωt)',
        calculate: (t) => 5 * Math.cos((2 * Math.PI * t) / 2),
      },
    ],
    defaultActiveSeries: ['y1', 'y2'],
  };
}

interface PhysicsGraphEngineProps {
  simKey: string;
  parameters?: Record<string, any>;
}

export function PhysicsGraphEngine({ simKey, parameters = {} }: PhysicsGraphEngineProps) {
  const spec = useMemo(() => getGraphSpecForSimKey(simKey, parameters), [simKey, parameters]);
  const [activeSeriesIds, setActiveSeriesIds] = useState<string[]>(spec.defaultActiveSeries);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'graph' | 'table'>('graph');
  const [copied, setCopied] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Sync active series when spec changes
  useEffect(() => {
    setActiveSeriesIds(spec.defaultActiveSeries);
    setCurrentTime(0);
  }, [spec]);

  // Animation Loop
  useEffect(() => {
    if (!isPlaying) return;

    let animationFrameId: number;
    let lastStamp = performance.now();

    const loop = (now: number) => {
      const deltaSec = (now - lastStamp) / 1000;
      lastStamp = now;

      setCurrentTime((prev) => {
        const next = prev + deltaSec * speedMultiplier;
        return next > spec.tMax ? 0 : next;
      });

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying, speedMultiplier, spec.tMax]);

  // Compute sampling points for graph
  const sampledData = useMemo(() => {
    const points: Array<{ x: number; values: Record<string, number> }> = [];
    const count = Math.round(spec.tMax / spec.dt);

    for (let i = 0; i <= count; i++) {
      const x = Math.min(spec.tMax, i * spec.dt);
      const values: Record<string, number> = {};
      for (const s of spec.series) {
        values[s.id] = s.calculate(x, parameters);
      }
      points.push({ x, values });
    }
    return points;
  }, [spec, parameters]);

  // Compute Min and Max for scaling
  const { yMin, yMax } = useMemo(() => {
    let min = Infinity;
    let max = -Infinity;

    for (const p of sampledData) {
      for (const sId of activeSeriesIds) {
        const val = p.values[sId];
        if (val !== undefined && !isNaN(val)) {
          if (val < min) min = val;
          if (val > max) max = val;
        }
      }
    }

    if (!isFinite(min) || !isFinite(max) || min === max) {
      min = -10;
      max = 10;
    }

    // Add 15% padding
    const range = max - min;
    const pad = range * 0.15;
    return { yMin: min - pad, yMax: max + pad };
  }, [sampledData, activeSeriesIds]);

  // Canvas Rendering
  useEffect(() => {
    if (activeTab !== 'graph') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Margins
    const mLeft = 55;
    const mRight = 20;
    const mTop = 25;
    const mBottom = 40;
    const plotW = width - mLeft - mRight;
    const plotH = height - mTop - mBottom;

    const toX = (val: number) => mLeft + (val / spec.tMax) * plotW;
    const toY = (val: number) => mTop + plotH - ((val - yMin) / (yMax - yMin)) * plotH;

    // Clear background
    ctx.fillStyle = '#0f172a'; // slate-900
    ctx.fillRect(0, 0, width, height);

    // Draw Gridlines
    ctx.strokeStyle = '#1e293b'; // slate-800
    ctx.lineWidth = 1;

    // Vertical gridlines
    const vSteps = 6;
    for (let i = 0; i <= vSteps; i++) {
      const xVal = (spec.tMax / vSteps) * i;
      const px = toX(xVal);
      ctx.beginPath();
      ctx.moveTo(px, mTop);
      ctx.lineTo(px, mTop + plotH);
      ctx.stroke();

      // Label
      ctx.fillStyle = '#64748b'; // slate-500
      ctx.font = '10px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`${xVal.toFixed(1)}${spec.xUnit}`, px, mTop + plotH + 18);
    }

    // Horizontal gridlines
    const hSteps = 5;
    for (let i = 0; i <= hSteps; i++) {
      const yVal = yMin + ((yMax - yMin) / hSteps) * i;
      const py = toY(yVal);
      ctx.beginPath();
      ctx.moveTo(mLeft, py);
      ctx.lineTo(mLeft + plotW, py);
      ctx.stroke();

      // Label
      ctx.fillStyle = '#64748b';
      ctx.font = '10px Inter, sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(yVal.toFixed(1), mLeft - 8, py + 3);
    }

    // Zero axis if visible
    if (yMin <= 0 && yMax >= 0) {
      const pyZero = toY(0);
      ctx.strokeStyle = '#334155'; // slate-700
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(mLeft, pyZero);
      ctx.lineTo(mLeft + plotW, pyZero);
      ctx.stroke();
    }

    // Draw Series Lines
    for (const s of spec.series) {
      if (!activeSeriesIds.includes(s.id)) continue;

      ctx.strokeStyle = s.color;
      ctx.lineWidth = 2.5;
      ctx.beginPath();

      let started = false;
      for (const p of sampledData) {
        const val = p.values[s.id];
        if (val === undefined || isNaN(val)) continue;
        const px = toX(p.x);
        const py = toY(val);

        if (!started) {
          ctx.moveTo(px, py);
          started = true;
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();
    }

    // Draw Live Current Time Vertical Line & Indicator
    const curPx = toX(currentTime);
    ctx.strokeStyle = '#f43f5e'; // rose-500
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(curPx, mTop);
    ctx.lineTo(curPx, mTop + plotH);
    ctx.stroke();
    ctx.setLineDash([]);

    // Live Data Points on the line
    for (const s of spec.series) {
      if (!activeSeriesIds.includes(s.id)) continue;
      const curVal = s.calculate(currentTime, parameters);
      const py = toY(curVal);

      // Dot
      ctx.fillStyle = s.color;
      ctx.beginPath();
      ctx.arc(curPx, py, 5, 0, Math.PI * 2);
      ctx.fill();

      // White outline
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  }, [activeTab, sampledData, activeSeriesIds, currentTime, yMin, yMax, spec, parameters]);

  // Export Table to CSV
  const handleExportCSV = () => {
    const headers = [spec.xLabel + ` (${spec.xUnit})`, ...spec.series.map((s) => `${s.name} (${s.unit})`)];
    const rows = sampledData.map((p) => [
      p.x.toFixed(2),
      ...spec.series.map((s) => (p.values[s.id] !== undefined ? p.values[s.id].toFixed(3) : '')),
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,\uFEFF' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `physics_data_${simKey}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Copy data to clipboard
  const handleCopyClipboard = () => {
    const headers = [spec.xLabel, ...spec.series.map((s) => s.name)];
    const rows = sampledData.slice(0, 30).map((p) => [
      p.x.toFixed(2),
      ...spec.series.map((s) => (p.values[s.id] !== undefined ? p.values[s.id].toFixed(2) : '')),
    ]);

    const text = [headers.join('\t'), ...rows.map((e) => e.join('\t'))].join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div ref={containerRef} className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-white sm:p-5">
      {/* Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/20 text-brand-400">
            <TrendingUp className="h-4 w-4" />
          </div>
          <div>
            <h4 className="text-sm font-extrabold tracking-tight text-white">{spec.domainTitle}</h4>
            <p className="text-[11px] text-slate-400">{spec.description}</p>
          </div>
        </div>

        {/* View Mode Toggle: Graph vs Table */}
        <div className="inline-flex rounded-xl border border-slate-800 bg-slate-900 p-1 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('graph')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1 font-semibold transition ${
              activeTab === 'graph' ? 'bg-brand-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <TrendingUp className="h-3.5 w-3.5" />
            <span>Đồ thị Live</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('table')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1 font-semibold transition ${
              activeTab === 'table' ? 'bg-brand-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Table className="h-3.5 w-3.5" />
            <span>Bảng số liệu ({sampledData.length})</span>
          </button>
        </div>
      </div>

      {/* Series Toggles & Formula Badges */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Đường cong:</span>
        {spec.series.map((s) => {
          const isActive = activeSeriesIds.includes(s.id);
          const curVal = s.calculate(currentTime, parameters);

          return (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                setActiveSeriesIds((prev) =>
                  isActive ? (prev.length > 1 ? prev.filter((id) => id !== s.id) : prev) : [...prev, s.id]
                );
              }}
              style={{
                borderColor: isActive ? s.color : '#334155',
                backgroundColor: isActive ? `${s.color}25` : '#1e293b',
              }}
              className="flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-bold transition hover:opacity-90"
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: s.color }} />
              <span style={{ color: isActive ? '#ffffff' : '#94a3b8' }}>{s.name}</span>
              <span className="font-mono text-[11px] font-bold" style={{ color: s.color }}>
                {curVal.toFixed(2)} {s.unit}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main View Area: Graph Canvas */}
      {activeTab === 'graph' && (
        <div className="space-y-3">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-inner sm:h-72">
            <canvas ref={canvasRef} className="h-full w-full" />
          </div>

          {/* Playback Controls & Speed */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-2 text-xs">
            {/* Play/Pause/Reset */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white shadow transition hover:bg-brand-500"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current" />}
              </button>

              <button
                type="button"
                onClick={() => setCurrentTime(0)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-slate-300 transition hover:bg-slate-700 hover:text-white"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>

              <span className="font-mono text-xs font-bold text-slate-300">
                {spec.xLabel}: <strong className="text-white">{currentTime.toFixed(2)}</strong> {spec.xUnit}
              </span>
            </div>

            {/* Time Slider */}
            <div className="flex flex-1 items-center gap-2 sm:max-w-xs">
              <input
                type="range"
                min="0"
                max={spec.tMax}
                step="0.05"
                value={currentTime}
                onChange={(e) => {
                  setIsPlaying(false);
                  setCurrentTime(parseFloat(e.target.value));
                }}
                className="h-1.5 w-full cursor-pointer rounded-lg bg-slate-700 accent-brand-500"
              />
            </div>

            {/* Speed Multipliers */}
            <div className="flex items-center gap-1">
              <span className="text-[11px] text-slate-400">Tốc độ:</span>
              {[0.5, 1, 2].map((spd) => (
                <button
                  key={spd}
                  type="button"
                  onClick={() => setSpeedMultiplier(spd)}
                  className={`rounded-md px-2 py-0.5 text-[11px] font-bold transition ${
                    speedMultiplier === spd ? 'bg-brand-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {spd}x
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Experimental Data Table View */}
      {activeTab === 'table' && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="text-slate-400">
              Hiển thị bảng số liệu thực nghiệm được lấy mẫu liên tục theo chu kỳ:
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyClipboard}
                className="flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-slate-200 transition hover:bg-slate-700"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? 'Đã sao chép' : 'Sao chép bảng'}</span>
              </button>

              <button
                type="button"
                onClick={handleExportCSV}
                className="flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 font-bold text-white transition hover:bg-emerald-500"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Xuất file CSV</span>
              </button>
            </div>
          </div>

          <div className="max-h-72 overflow-x-auto overflow-y-auto rounded-xl border border-slate-800 bg-slate-900">
            <table className="w-full text-left font-mono text-xs text-slate-300">
              <thead className="sticky top-0 border-b border-slate-800 bg-slate-950 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="px-4 py-2.5">STT</th>
                  <th className="px-4 py-2.5">
                    {spec.xLabel} ({spec.xUnit})
                  </th>
                  {spec.series.map((s) => (
                    <th key={s.id} className="px-4 py-2.5" style={{ color: s.color }}>
                      {s.name} ({s.unit})
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {sampledData.map((pt, idx) => (
                  <tr key={idx} className="transition hover:bg-slate-800/40">
                    <td className="px-4 py-1.5 text-slate-500">{idx + 1}</td>
                    <td className="px-4 py-1.5 font-bold text-white">{pt.x.toFixed(2)}</td>
                    {spec.series.map((s) => (
                      <td key={s.id} className="px-4 py-1.5">
                        {pt.values[s.id] !== undefined ? pt.values[s.id].toFixed(3) : '-'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

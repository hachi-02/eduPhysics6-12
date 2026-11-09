'use client';

import React, { useState } from 'react';
import { COGNITIVE_TRAP_REGISTRY } from '@/lib/cognitive-traps';
import { CognitiveTrapType } from '@/types/cms';

interface CognitiveTrapRadarProps {
  radarValues: { axis: string; trapType: CognitiveTrapType; value: number }[];
  selectedTrap: CognitiveTrapType | 'all';
  onSelectTrap: (trap: CognitiveTrapType | 'all') => void;
  trapCounts: Record<CognitiveTrapType, number>;
}

export function CognitiveTrapRadar({
  radarValues,
  selectedTrap,
  onSelectTrap,
  trapCounts,
}: CognitiveTrapRadarProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const size = 360;
  const center = size / 2;
  const radius = 120;
  const numAxes = radarValues.length; // 6
  const angleStep = (Math.PI * 2) / numAxes;

  // Grid levels (25%, 50%, 75%, 100%)
  const levels = [0.25, 0.5, 0.75, 1.0];

  // Calculate polygon points for each grid level
  const gridPolygons = levels.map((lvl) => {
    const pts = [];
    for (let i = 0; i < numAxes; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = center + radius * lvl * Math.cos(angle);
      const y = center + radius * lvl * Math.sin(angle);
      pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return pts.join(' ');
  });

  // Calculate data polygon points
  const dataPoints = radarValues.map((item, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const rVal = (item.value / 100) * radius;
    const x = center + rVal * Math.cos(angle);
    const y = center + rVal * Math.sin(angle);
    return { x, y, ...item };
  });

  const dataPolyline = dataPoints.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');

  return (
    <div className="relative flex flex-col items-center">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="h-72 w-72 sm:h-84 sm:w-84 overflow-visible drop-shadow-md select-none"
      >
        <defs>
          <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#4f46e5" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#312e81" stopOpacity="0.05" />
          </radialGradient>
          <linearGradient id="polygonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.65" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.65" />
          </linearGradient>
        </defs>

        {/* Ambient glow circle */}
        <circle cx={center} cy={center} r={radius + 15} fill="url(#radarGlow)" />

        {/* Concentric grid polygons */}
        {gridPolygons.map((pts, idx) => (
          <polygon
            key={idx}
            points={pts}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth={1}
            strokeDasharray={idx === levels.length - 1 ? 'none' : '3 3'}
            className="opacity-70 dark:opacity-30"
          />
        ))}

        {/* Radial axes lines */}
        {radarValues.map((_, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const x2 = center + radius * Math.cos(angle);
          const y2 = center + radius * Math.sin(angle);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x2}
              y2={y2}
              stroke="#94a3b8"
              strokeWidth={1}
              strokeDasharray="2 2"
              className="opacity-50"
            />
          );
        })}

        {/* Data polygon area */}
        <polygon
          points={dataPolyline}
          fill="url(#polygonGrad)"
          stroke="#4f46e5"
          strokeWidth={2.5}
          className="transition-all duration-300 ease-out"
        />

        {/* Interactive vertex dots */}
        {dataPoints.map((pt, i) => {
          const isSelected = selectedTrap === pt.trapType;
          const isHovered = hoveredIdx === i;
          const count = trapCounts[pt.trapType] || 0;
          return (
            <g
              key={i}
              className="cursor-pointer"
              onClick={() => onSelectTrap(isSelected ? 'all' : pt.trapType)}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Outer pulsing ring for selected / hovered node */}
              {(isSelected || isHovered) && (
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={12}
                  fill={COGNITIVE_TRAP_REGISTRY[pt.trapType].color}
                  opacity={0.3}
                  className="animate-ping"
                />
              )}
              <circle
                cx={pt.x}
                cy={pt.y}
                r={isSelected || isHovered ? 7 : 5}
                fill={COGNITIVE_TRAP_REGISTRY[pt.trapType].color}
                stroke="#ffffff"
                strokeWidth={2}
                className="transition-transform duration-200"
              />
            </g>
          );
        })}

        {/* Outer text labels around the polygon */}
        {radarValues.map((item, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const labelDist = radius + 28;
          const x = center + labelDist * Math.cos(angle);
          const y = center + labelDist * Math.sin(angle);
          const meta = COGNITIVE_TRAP_REGISTRY[item.trapType];
          const isSelected = selectedTrap === item.trapType;
          const count = trapCounts[item.trapType] || 0;

          return (
            <g
              key={i}
              className="cursor-pointer"
              onClick={() => onSelectTrap(isSelected ? 'all' : item.trapType)}
            >
              <text
                x={x}
                y={y - 6}
                textAnchor="middle"
                className={`text-[11px] font-extrabold transition-colors ${
                  isSelected
                    ? 'fill-indigo-600 font-black scale-105'
                    : 'fill-slate-700 hover:fill-indigo-600'
                }`}
              >
                {meta.icon} {meta.name.replace('Bẫy ', '')}
              </text>
              <text
                x={x}
                y={y + 8}
                textAnchor="middle"
                className={`text-[9.5px] font-bold ${
                  count > 0 ? 'fill-rose-600' : 'fill-slate-400'
                }`}
              >
                {count > 0 ? `${count} lỗi` : '0 lỗi'}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
        <span className="inline-block h-2 w-2 rounded-full bg-rose-500" />
        <span>Vùng đa giác càng phình to ở trục nào: Mức độ mắc bẫy ở dạng đó càng cao.</span>
      </div>
    </div>
  );
}

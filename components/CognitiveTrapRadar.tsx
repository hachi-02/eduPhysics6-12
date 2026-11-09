'use client';

import React, { useState } from 'react';
import { COGNITIVE_TRAP_REGISTRY } from '@/lib/cognitive-traps';
import { CognitiveTrapType } from '@/types/cms';

interface CognitiveTrapRadarProps {
  radarValues: { axis: string; trapType: CognitiveTrapType; value: number }[];
  selectedTrap: CognitiveTrapType | 'all';
  onSelectTrap: (trap: CognitiveTrapType) => void;
  trapCounts: Record<CognitiveTrapType, number>;
}

export function CognitiveTrapRadar({
  radarValues,
  selectedTrap,
  onSelectTrap,
  trapCounts,
}: CognitiveTrapRadarProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const viewBoxWidth = 520;
  const viewBoxHeight = 420;
  const centerX = viewBoxWidth / 2; // 260
  const centerY = viewBoxHeight / 2; // 210
  const radius = 110;
  const numAxes = radarValues.length; // 6
  const angleStep = (Math.PI * 2) / numAxes;

  // Grid levels (25%, 50%, 75%, 100%)
  const levels = [0.25, 0.5, 0.75, 1.0];

  // Calculate polygon points for each grid level
  const gridPolygons = levels.map((lvl) => {
    const pts = [];
    for (let i = 0; i < numAxes; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + radius * lvl * Math.cos(angle);
      const y = centerY + radius * lvl * Math.sin(angle);
      pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return pts.join(' ');
  });

  // Calculate data polygon points
  const dataPoints = radarValues.map((item, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const rVal = (item.value / 100) * radius;
    const x = centerX + rVal * Math.cos(angle);
    const y = centerY + rVal * Math.sin(angle);
    return { x, y, ...item };
  });

  const dataPolyline = dataPoints.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');

  return (
    <div className="relative flex flex-col items-center w-full">
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        className="w-full max-w-[480px] h-auto overflow-visible drop-shadow-md select-none"
      >
        <defs>
          <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#4f46e5" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#312e81" stopOpacity="0.02" />
          </radialGradient>
          <linearGradient id="polygonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Ambient glow circle */}
        <circle cx={centerX} cy={centerY} r={radius + 15} fill="url(#radarGlow)" />

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
          const x2 = centerX + radius * Math.cos(angle);
          const y2 = centerY + radius * Math.sin(angle);
          return (
            <line
              key={i}
              x1={centerX}
              y1={centerY}
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
          const color = COGNITIVE_TRAP_REGISTRY[pt.trapType].color;

          return (
            <g
              key={i}
              className="cursor-pointer"
              onClick={() => onSelectTrap(pt.trapType)}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Outer static ring for selected / hovered node (NO animate-ping!) */}
              {(isSelected || isHovered) && (
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={10}
                  fill="none"
                  stroke={color}
                  strokeWidth={2.5}
                  opacity={0.85}
                />
              )}
              <circle
                cx={pt.x}
                cy={pt.y}
                r={isSelected || isHovered ? 6.5 : 4.5}
                fill={color}
                stroke="#ffffff"
                strokeWidth={2}
                className="transition-all duration-150"
              />
            </g>
          );
        })}

        {/* Outer text labels positioned safely around each axis */}
        {radarValues.map((item, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const sin = Math.sin(angle);
          const cos = Math.cos(angle);
          const meta = COGNITIVE_TRAP_REGISTRY[item.trapType];
          const isSelected = selectedTrap === item.trapType;
          const count = trapCounts[item.trapType] || 0;

          // Safe positioning logic to guarantee ZERO overlap
          let labelX = centerX;
          let labelY = centerY;
          let textAnchor: 'start' | 'middle' | 'end' = 'middle';
          let countOffsetY = 16;

          if (Math.abs(cos) < 0.25) {
            // Pure Top or Pure Bottom
            if (sin < 0) {
              // Top axis (i = 0)
              labelX = centerX;
              labelY = centerY - radius - 30;
              textAnchor = 'middle';
              countOffsetY = 16;
            } else {
              // Bottom axis (i = 3)
              labelX = centerX;
              labelY = centerY + radius + 28;
              textAnchor = 'middle';
              countOffsetY = 16;
            }
          } else if (cos > 0) {
            // Right quadrant (i = 1 or 2)
            labelX = centerX + (radius + 22) * cos;
            labelY = centerY + (radius + 12) * sin;
            textAnchor = 'start';
            countOffsetY = 16;
          } else {
            // Left quadrant (i = 4 or 5)
            labelX = centerX + (radius + 22) * cos;
            labelY = centerY + (radius + 12) * sin;
            textAnchor = 'end';
            countOffsetY = 16;
          }

          return (
            <g
              key={i}
              className="cursor-pointer group"
              onClick={() => onSelectTrap(item.trapType)}
            >
              <text
                x={labelX}
                y={labelY}
                textAnchor={textAnchor}
                className={`text-[11px] font-extrabold transition-colors ${
                  isSelected
                    ? 'fill-indigo-600 font-black'
                    : 'fill-slate-700 hover:fill-indigo-600'
                }`}
              >
                {meta.icon} {meta.name.replace('Bẫy ', '')}
              </text>
              <text
                x={labelX}
                y={labelY + countOffsetY}
                textAnchor={textAnchor}
                className={`text-[10px] font-bold ${
                  count > 0 ? 'fill-rose-600' : 'fill-slate-400'
                }`}
              >
                {count > 0 ? `${count} lỗi` : '0 lỗi'}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
        <span className="inline-block h-2 w-2 rounded-full bg-rose-500" />
        <span>Vùng đa giác phình to ở đỉnh nào: Mức độ mắc bẫy ở dạng đó càng cao.</span>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import katex from 'katex';

interface KatexBlockProps {
  latex: string;
  displayMode?: boolean;
  className?: string;
}

export function KatexFormula({ latex, displayMode = false, className = '' }: KatexBlockProps) {
  let html = '';
  try {
    html = katex.renderToString(latex, {
      displayMode,
      throwOnError: false,
      strict: false,
    });
  } catch {
    html = `<code>${latex}</code>`;
  }

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

/**
 * Renders text that may contain inline $...$ LaTeX segments and **bold** markdown
 */
export function RichPhysicsText({ text, className = '' }: { text: string; className?: string }) {
  if (!text) return null;

  const segments = text.split(/(\$[^$]+\$)/g);

  return (
    <span className={className}>
      {segments.map((seg, idx) => {
        if (seg.startsWith('$') && seg.endsWith('$') && seg.length > 2) {
          const innerLatex = seg.slice(1, -1);
          return <KatexFormula key={idx} latex={innerLatex} displayMode={false} className="mx-0.5" />;
        }

        // Parse **bold** segments
        const boldParts = seg.split(/(\*\*[^*]+\*\*)/g);
        return (
          <React.Fragment key={idx}>
            {boldParts.map((bp, bIdx) => {
              if (bp.startsWith('**') && bp.endsWith('**') && bp.length > 4) {
                return (
                  <strong key={bIdx} className="font-semibold text-slate-900">
                    {bp.slice(2, -2)}
                  </strong>
                );
              }
              return <React.Fragment key={bIdx}>{bp}</React.Fragment>;
            })}
          </React.Fragment>
        );
      })}
    </span>
  );
}

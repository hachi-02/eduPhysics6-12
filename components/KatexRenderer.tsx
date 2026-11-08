'use client';

import React from 'react';
import katex from 'katex';

interface KatexBlockProps {
  latex: string;
  displayMode?: boolean;
  className?: string;
}

const VIETNAMESE_WORDS_REGEX =
  /[àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵ]/i;

type LatexSegment =
  | { type: 'katex'; latex: string }
  | { type: 'vn_frac'; num: string; den: string };

function splitByVnFractions(latex: string): LatexSegment[] {
  if (!VIETNAMESE_WORDS_REGEX.test(latex) || !latex.includes('\\frac')) {
    return [{ type: 'katex', latex }];
  }

  const parts: LatexSegment[] = [];
  let rest = latex;

  while (rest.length > 0) {
    const fracIdx = rest.indexOf('\\frac');
    if (fracIdx === -1) {
      if (rest.trim()) {
        const prev =
          parts.length > 0 && parts[parts.length - 1].type === 'katex' ? parts.pop()! : null;
        if (prev && prev.type === 'katex') {
          parts.push({ type: 'katex', latex: prev.latex + rest });
        } else {
          parts.push({ type: 'katex', latex: rest });
        }
      }
      break;
    }

    const before = rest.slice(0, fracIdx);
    const afterFrac = rest.slice(fracIdx + 5).trim();

    if (!afterFrac.startsWith('{')) {
      const prev =
        parts.length > 0 && parts[parts.length - 1].type === 'katex' ? parts.pop()! : null;
      const combined = (prev && prev.type === 'katex' ? prev.latex : '') + before + '\\frac';
      parts.push({ type: 'katex', latex: combined });
      rest = rest.slice(fracIdx + 5);
      continue;
    }

    // Parse numerator
    let depth = 0;
    let numEnd = -1;
    for (let i = 0; i < afterFrac.length; i++) {
      if (afterFrac[i] === '{') depth++;
      else if (afterFrac[i] === '}') {
        depth--;
        if (depth === 0) {
          numEnd = i;
          break;
        }
      }
    }
    if (numEnd === -1) {
      parts.push({ type: 'katex', latex: rest });
      break;
    }

    const num = afterFrac.slice(1, numEnd);
    const afterNum = afterFrac.slice(numEnd + 1).trim();
    if (!afterNum.startsWith('{')) {
      parts.push({ type: 'katex', latex: rest });
      break;
    }

    // Parse denominator
    depth = 0;
    let denEnd = -1;
    for (let i = 0; i < afterNum.length; i++) {
      if (afterNum[i] === '{') depth++;
      else if (afterNum[i] === '}') {
        depth--;
        if (depth === 0) {
          denEnd = i;
          break;
        }
      }
    }
    if (denEnd === -1) {
      parts.push({ type: 'katex', latex: rest });
      break;
    }

    const den = afterNum.slice(1, denEnd);
    const afterDen = afterNum.slice(denEnd + 1);

    if (VIETNAMESE_WORDS_REGEX.test(num) || VIETNAMESE_WORDS_REGEX.test(den)) {
      if (before) {
        const prev =
          parts.length > 0 && parts[parts.length - 1].type === 'katex' ? parts.pop()! : null;
        const combined = (prev && prev.type === 'katex' ? prev.latex : '') + before;
        if (combined.trim()) {
          parts.push({ type: 'katex', latex: combined });
        }
      }
      parts.push({
        type: 'vn_frac',
        num: num.replace(/^\\text\{/, '').replace(/\}$/, '').replace(/[\$\\]/g, '').trim(),
        den: den.replace(/^\\text\{/, '').replace(/\}$/, '').replace(/[\$\\]/g, '').trim(),
      });
      rest = afterDen;
    } else {
      // Math fraction: keep it together with before
      const fullFrac = '\\frac{' + num + '}{' + den + '}';
      const prev =
        parts.length > 0 && parts[parts.length - 1].type === 'katex' ? parts.pop()! : null;
      const combined = (prev && prev.type === 'katex' ? prev.latex : '') + before + fullFrac;
      parts.push({ type: 'katex', latex: combined });
      rest = afterDen;
    }
  }

  return parts;
}

export function KatexFormula({ latex, displayMode = false, className = '' }: KatexBlockProps) {
  const segments = splitByVnFractions(latex);

  if (segments.length === 1 && segments[0].type === 'katex') {
    let html = '';
    try {
      html = katex.renderToString(segments[0].latex, {
        displayMode,
        throwOnError: false,
        strict: false,
        output: 'html',
      });
    } catch {
      html = `<code>${segments[0].latex}</code>`;
    }
    return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return (
    <span
      className={`inline-flex items-center align-middle flex-wrap gap-1 text-current ${className}`}
    >
      {segments.map((seg, sIdx) => {
        if (seg.type === 'vn_frac') {
          return (
            <span
              key={sIdx}
              className="inline-flex flex-col items-center align-middle px-1 font-sans"
            >
              <span className="border-b-2 border-current pb-0.5 px-2 text-xs sm:text-sm font-bold text-center">
                {seg.num}
              </span>
              <span className="pt-0.5 px-2 text-xs sm:text-sm font-semibold opacity-90 text-center">
                {seg.den}
              </span>
            </span>
          );
        }

        let html = '';
        try {
          html = katex.renderToString(seg.latex, {
            displayMode: false,
            throwOnError: false,
            strict: false,
            output: 'html',
          });
        } catch {
          html = `<code>${seg.latex}</code>`;
        }

        return <span key={sIdx} dangerouslySetInnerHTML={{ __html: html }} />;
      })}
    </span>
  );
}

/**
 * Renders text that may contain inline $...$ LaTeX segments and **bold** markdown.
 * Parses bold blocks first to properly preserve math expressions embedded inside bold tags.
 */
export function RichPhysicsText({ text, className = '' }: { text: string; className?: string }) {
  if (!text) return null;

  // Split by bold (**...**) first so that math inside bold like **Chiều dài ($l, d, s, h$):** is preserved!
  const boldParts = text.split(/(\*\*[\s\S]+?\*\*)/g);

  return (
    <span className={className}>
      {boldParts.map((bp, bIdx) => {
        const isBold = bp.startsWith('**') && bp.endsWith('**') && bp.length >= 4;
        const innerContent = isBold ? bp.slice(2, -2) : bp;
        if (!innerContent) return null;

        // Inside each bold or normal part, parse $...$ math
        const mathSegments = innerContent.split(/(\$[^$]+\$)/g);

        const renderedSegments = mathSegments.map((seg, sIdx) => {
          if (seg.startsWith('$') && seg.endsWith('$') && seg.length > 2) {
            const innerLatex = seg.slice(1, -1);
            return (
              <KatexFormula
                key={sIdx}
                latex={innerLatex}
                displayMode={false}
                className="mx-0.5"
              />
            );
          }
          return <React.Fragment key={sIdx}>{seg}</React.Fragment>;
        });

        if (isBold) {
          return (
            <strong key={bIdx} className="font-bold text-slate-900">
              {renderedSegments}
            </strong>
          );
        }

        return <React.Fragment key={bIdx}>{renderedSegments}</React.Fragment>;
      })}
    </span>
  );
}

/**
 * Modern structured renderer for physics chapter summaries and theory notes.
 * Converts markdown headings, intro callouts, numbered sections, step-by-step flows,
 * quantity badges, and mathematical formulas into stunning Bento-style cards.
 */
export function PhysicsMarkdown({ text, className = '' }: { text: string; className?: string }) {
  if (!text) return null;

  const lines = text.split(/\r?\n/);
  const blocks: React.ReactNode[] = [];

  // Group lines into sections
  interface SectionData {
    number?: string;
    title?: string;
    items: string[];
  }

  let currentSection: SectionData | null = null;
  let currentIntro: string[] = [];
  let headerTitle: string | null = null;

  const flushSection = () => {
    if (!currentSection) return;
    const { number, title, items } = currentSection;

    // Check if items are Step-by-step (e.g. Bước 1, Bước 2...)
    const isStepList = items.some((it) => /bước\s*\d+/i.test(it));
    // Check if items are Quantities list (e.g. Chiều dài, Thể tích...)
    const isQuantityList = items.some(
      (it) => it.includes('Đơn vị chuẩn SI') || it.includes('Đơn vị SI')
    );

    blocks.push(
      <div
        key={blocks.length}
        className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-2xs space-y-4"
      >
        {/* Section Header with Number Pill */}
        <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
          {number && (
            <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-xs">
              {number}
            </span>
          )}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
            <RichPhysicsText text={title || ''} />
          </h3>
        </div>

        {/* Section Body */}
        {isStepList ? (
          /* Step-by-Step Flow List */
          <div className="grid grid-cols-1 gap-2.5">
            {items.map((it, idx) => {
              const stepMatch = it.match(/^(?:[-*]\s*)?(?:\*\*)?(Bước\s*\d+):?(?:\*\*)?\s*(.*)$/i);
              if (stepMatch) {
                const stepNum = stepMatch[1];
                const stepDesc = stepMatch[2];
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70 hover:bg-indigo-50/40 transition-colors"
                  >
                    <span className="px-2.5 py-1 rounded-lg bg-indigo-100 text-indigo-800 font-extrabold text-xs shrink-0 tracking-wide">
                      {stepNum}
                    </span>
                    <span className="text-sm text-slate-800 pt-0.5 leading-relaxed">
                      <RichPhysicsText text={stepDesc} />
                    </span>
                  </div>
                );
              }
              return (
                <div key={idx} className="text-sm text-slate-700 leading-relaxed">
                  <RichPhysicsText text={it} />
                </div>
              );
            })}
          </div>
        ) : isQuantityList ? (
          /* Core Quantities Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {items.map((it, idx) => {
              const cleaned = it.replace(/^[-*]\s*/, '');
              return (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/80 hover:border-indigo-200 transition-colors space-y-1.5"
                >
                  <div className="text-sm text-slate-800 leading-relaxed">
                    <RichPhysicsText text={cleaned} />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Standard Definition & Formula Items */
          <div className="space-y-3">
            {items.map((it, idx) => {
              const cleaned = it.replace(/^[-*]\s*/, '');

              return (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <div className="leading-relaxed">
                    <RichPhysicsText text={cleaned} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );

    currentSection = null;
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();
    if (!trimmed) continue;

    // Check Chapter Heading (### or ##)
    const hMatch = trimmed.match(/^#{1,3}\s+(.*)$/);
    if (hMatch) {
      headerTitle = hMatch[1];
      continue;
    }

    // Check Numbered Section (e.g. 1. **...**)
    const numMatch = trimmed.match(/^(\d+)\.\s*(?:\*\*)?(.*?)(?:\*\*)?:?$/);
    if (numMatch) {
      flushSection();
      currentSection = {
        number: numMatch[1],
        title: numMatch[2].replace(/\*\*$/, '').replace(/:$/, ''),
        items: [],
      };
      continue;
    }

    // Inside a section
    if (currentSection) {
      currentSection.items.push(trimmed);
      continue;
    }

    // Outside sections (Intro paragraphs)
    currentIntro.push(trimmed);
  }

  flushSection();

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Intro Concept Callout */}
      {currentIntro.length > 0 && (
        <div className="rounded-2xl border-l-4 border-indigo-600 bg-indigo-50/50 p-4 sm:p-5 text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
          {currentIntro.map((p, idx) => (
            <p key={idx} className="last:mb-0 mb-2">
              <RichPhysicsText text={p} />
            </p>
          ))}
        </div>
      )}

      {/* Structured Section Cards */}
      <div className="space-y-4">{blocks}</div>
    </div>
  );
}

'use client';

import React from 'react';
import katex from 'katex';

interface KatexBlockProps {
  latex: string;
  displayMode?: boolean;
  className?: string;
}

const VIETNAMESE_CHARS =
  /[àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ]/;

function extractVietnameseFraction(latex: string): {
  left: string;
  num: string;
  den: string;
  right: string;
} | null {
  const fracIdx = latex.indexOf('\\frac');
  if (fracIdx === -1) return null;
  const left = latex.slice(0, fracIdx);
  let rest = latex.slice(fracIdx + 5).trim();
  if (!rest.startsWith('{')) return null;

  let depth = 0;
  let numEnd = -1;
  for (let i = 0; i < rest.length; i++) {
    if (rest[i] === '{') depth++;
    else if (rest[i] === '}') {
      depth--;
      if (depth === 0) {
        numEnd = i;
        break;
      }
    }
  }
  if (numEnd === -1) return null;
  const num = rest.slice(1, numEnd);
  rest = rest.slice(numEnd + 1).trim();
  if (!rest.startsWith('{')) return null;

  depth = 0;
  let denEnd = -1;
  for (let i = 0; i < rest.length; i++) {
    if (rest[i] === '{') depth++;
    else if (rest[i] === '}') {
      depth--;
      if (depth === 0) {
        denEnd = i;
        break;
      }
    }
  }
  if (denEnd === -1) return null;
  const den = rest.slice(1, denEnd);
  const right = rest.slice(denEnd + 1).trim();

  const strip = (s: string) =>
    s
      .replace(/\\text\{([^}]*)\}/g, '$1')
      .replace(/[\$\\]/g, '')
      .trim();

  return {
    left: strip(left),
    num: strip(num),
    den: strip(den),
    right: strip(right),
  };
}

export function KatexFormula({ latex, displayMode = false, className = '' }: KatexBlockProps) {
  // If the LaTeX string has Vietnamese text in a fraction, KaTeX breaks characters into accents (e.g. s o ^ ').
  // Render cleanly as HTML fraction instead:
  if (VIETNAMESE_CHARS.test(latex)) {
    const vf = extractVietnameseFraction(latex);
    if (vf) {
      return (
        <span
          className={`inline-flex items-center align-middle mx-1.5 my-1 text-slate-900 font-sans ${className}`}
        >
          {vf.left && (
            <span className="font-bold mr-2 text-sm sm:text-base text-slate-900">{vf.left}</span>
          )}
          <span className="inline-flex flex-col items-center align-middle px-1">
            <span className="border-b-2 border-indigo-900 pb-0.5 px-2.5 text-xs sm:text-sm font-bold text-indigo-900 text-center">
              {vf.num}
            </span>
            <span className="pt-0.5 px-2.5 text-xs sm:text-sm font-semibold text-slate-700 text-center">
              {vf.den}
            </span>
          </span>
          {vf.right && <span className="ml-2 text-sm text-slate-800">{vf.right}</span>}
        </span>
      );
    }
  }

  let html = '';
  try {
    html = katex.renderToString(latex, {
      displayMode,
      throwOnError: false,
      strict: false,
      output: 'html',
    });
  } catch {
    html = `<code>${latex}</code>`;
  }

  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
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
          return (
            <KatexFormula key={idx} latex={innerLatex} displayMode={false} className="mx-0.5" />
          );
        }

        // Parse **bold** segments
        const boldParts = seg.split(/(\*\*[^*]+\*\*)/g);
        return (
          <React.Fragment key={idx}>
            {boldParts.map((bp, bIdx) => {
              if (bp.startsWith('**') && bp.endsWith('**') && bp.length > 4) {
                return (
                  <strong key={bIdx} className="font-bold text-slate-900">
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

              // Check if item contains a fraction formula
              if (it.includes('\\frac')) {
                const vf = extractVietnameseFraction(it);
                if (vf) {
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-200/90 text-center space-y-2 my-2 shadow-2xs"
                    >
                      <div className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
                        Công thức tính nhanh
                      </div>
                      <div className="inline-flex items-center justify-center gap-2">
                        {vf.left && (
                          <span className="font-extrabold text-base text-slate-900">{vf.left}</span>
                        )}
                        <span className="inline-flex flex-col items-center">
                          <span className="border-b-2 border-indigo-900 pb-1 px-3 text-sm font-bold text-indigo-950">
                            {vf.num}
                          </span>
                          <span className="pt-1 px-3 text-xs sm:text-sm font-semibold text-slate-700">
                            {vf.den}
                          </span>
                        </span>
                        {vf.right && <span className="text-sm text-slate-800">{vf.right}</span>}
                      </div>
                    </div>
                  );
                }
              }

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
      {/* Chapter Overview Banner */}
      {headerTitle && (
        <div className="rounded-2xl bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-7 shadow-xs space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-white/10 text-indigo-200 text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
            📖 HỆ THỐNG HÓA KIẾN THỨC CHƯƠNG
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
            <RichPhysicsText text={headerTitle.replace(/^Hệ thống hóa kiến thức\s*/i, '')} />
          </h2>
        </div>
      )}

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

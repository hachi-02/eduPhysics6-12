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

/**
 * Lightweight markdown renderer for physics content: headings, lists, bold, inline $...$ math.
 */
export function PhysicsMarkdown({ text, className = '' }: { text: string; className?: string }) {
  if (!text) return null;

  const lines = text.split('\n');
  const blocks: React.ReactNode[] = [];
  let paraLines: string[] = [];
  let listItems: string[] = [];
  let listType: 'ul' | 'ol' | null = null;

  const flushPara = () => {
    if (paraLines.length === 0) return;
    const content = paraLines.join(' ').trim();
    if (content) {
      blocks.push(
        <p key={blocks.length} className="mb-3 leading-7 last:mb-0">
          <RichPhysicsText text={content} />
        </p>
      );
    }
    paraLines = [];
  };
  const flushList = () => {
    if (listItems.length === 0) return;
    if (listType === 'ol') {
      blocks.push(
        <ol key={blocks.length} className="mb-3 list-decimal space-y-1.5 pl-6 marker:font-bold marker:text-brand-600">
          {listItems.map((it, idx) => (
            <li key={idx} className="pl-1 leading-7">
              <RichPhysicsText text={it} />
            </li>
          ))}
        </ol>
      );
    } else {
      blocks.push(
        <ul key={blocks.length} className="mb-3 list-disc space-y-1.5 pl-6 marker:text-brand-500">
          {listItems.map((it, idx) => (
            <li key={idx} className="pl-1 leading-7">
              <RichPhysicsText text={it} />
            </li>
          ))}
        </ul>
      );
    }
    listItems = [];
    listType = null;
  };

  for (const rawLine of lines) {
    const trimmed = rawLine.trim();
    if (trimmed === '') {
      flushPara();
      flushList();
      continue;
    }

    const h3 = trimmed.match(/^###\s+(.*)$/);
    const h2 = trimmed.match(/^##\s+(.*)$/);
    const h1 = trimmed.match(/^#\s+(.*)$/);
    if (h3 || h2 || h1) {
      flushPara();
      flushList();
      const content = (h3 || h2 || h1)![1];
      const cls =
        h1
          ? 'mt-5 mb-2 text-xl font-extrabold tracking-tight text-slate-900'
          : h2
            ? 'mt-4 mb-2 text-lg font-extrabold tracking-tight text-slate-900'
            : 'mt-4 mb-1.5 text-base font-extrabold text-brand-700';
      const Tag = h1 ? 'h1' : h2 ? 'h2' : 'h3';
      blocks.push(
        <Tag key={blocks.length} className={cls}>
          <RichPhysicsText text={content} />
        </Tag>
      );
      continue;
    }

    const bullet = trimmed.match(/^[-*]\s+(.*)$/);
    if (bullet) {
      flushPara();
      if (listType && listType !== 'ul') flushList();
      listType = 'ul';
      listItems.push(bullet[1]);
      continue;
    }

    const num = trimmed.match(/^\d+\.\s+(.*)$/);
    if (num) {
      flushPara();
      if (listType && listType !== 'ol') flushList();
      listType = 'ol';
      listItems.push(num[1]);
      continue;
    }

    flushList();
    paraLines.push(trimmed);
  }
  flushPara();
  flushList();

  return <div className={className}>{blocks}</div>;
}

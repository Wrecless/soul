'use client';

import { useState } from 'react';

/**
 * Collapsible benefits panel.
 * Prefer the `benefits` prop (array of { title, desc }) for structured display.
 * Falls back to `children` for backward compatibility.
 */
export default function BenefitsPanel({
  title,
  benefits = [],
  accentClass = 'text-teal',
  children,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-4 md:mx-8 mb-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-center gap-3 px-6 py-4"
        aria-expanded={open}
      >
        <span className={`font-display text-xl md:text-2xl font-medium ${accentClass}`}>
          {title}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 opacity-60 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="px-4 md:px-8 pb-8 pt-1">
          {benefits.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="text-center px-4 py-5 rounded-xl bg-white/10 border border-white/15"
                >
                  <p className="font-body font-semibold text-white text-sm mb-1.5 tracking-wide">
                    {b.title}
                  </p>
                  <p className="font-body text-white/65 text-xs leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            // Legacy children fallback — centred for consistency
            <div className="text-sm md:text-base space-y-3 leading-relaxed text-white/80 text-center max-w-2xl mx-auto">
              {children}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

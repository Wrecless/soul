'use client';

import { useState } from 'react';

export default function BenefitsPanel({ title, children, accentClass = 'text-teal' }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-4 md:mx-8 mb-2 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left"
        aria-expanded={open}
      >
        <span className={`font-display text-xl md:text-2xl font-medium ${accentClass}`}>
          {title}
        </span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="px-6 pb-6 text-sm md:text-base space-y-3 leading-relaxed text-white/80">
          {children}
        </div>
      )}
    </div>
  );
}

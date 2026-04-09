'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const bands = [
  {
    min: 0,
    max: 2,
    label: 'Minimal',
    colour: 'text-sage',
    barColour: 'bg-sage',
    message:
      "Your responses suggest you're coping well right now. That's great to hear. You might still enjoy exploring our resources as a way to maintain your wellbeing.",
    recs: [
      { emoji: '🧘', label: 'Guided Meditation', href: '/support/meditation', note: 'Great for maintaining calm and focus' },
      { emoji: '🎵', label: 'Sound Therapy',     href: '/support/sound-therapy', note: 'Soothing frequencies to unwind with' },
    ],
  },
  {
    min: 3,
    max: 5,
    label: 'Mild',
    colour: 'text-amber',
    barColour: 'bg-amber',
    message:
      "It sounds like you may be experiencing some mild anxiety or low mood. This is very common — and there are simple, effective tools that can help you feel more settled.",
    recs: [
      { emoji: '🌬️', label: 'Breathing Exercises', href: '/support/breathing',  note: 'Calms the nervous system quickly' },
      { emoji: '🧘', label: 'Guided Meditation',   href: '/support/meditation', note: 'Helps gently lift low mood' },
      { emoji: '💪', label: 'Movement & Exercise', href: '/support/exercises',  note: 'Physical movement boosts mood naturally' },
    ],
  },
  {
    min: 6,
    max: 8,
    label: 'Moderate',
    colour: 'text-rose',
    barColour: 'bg-rose',
    message:
      "Your responses suggest you may be experiencing moderate levels of anxiety or depression. You don't have to manage this alone — please consider reaching out to a professional or calling a helpline.",
    recs: [
      { emoji: '🌬️', label: 'Breathing Exercises', href: '/support/breathing', note: 'Immediate calm for anxious moments' },
      { emoji: '💪', label: 'Gentle Exercise',      href: '/support/exercises', note: 'Proven to ease moderate depression' },
      { emoji: '💬', label: 'Talk to Someone',      href: '/help',             note: 'Free UK helplines available now', highlight: true },
    ],
  },
  {
    min: 9,
    max: 12,
    label: 'Severe',
    colour: 'text-[#B03A2E]',
    barColour: 'bg-[#C0392B]',
    message:
      "Your responses suggest you may be experiencing significant distress right now. Please know that support is available and you deserve to feel better. We strongly encourage you to speak with someone today.",
    recs: [
      { emoji: '💬', label: 'Get immediate support', href: '/help', note: 'Free helplines including Samaritans (116 123)', highlight: true },
    ],
    urgent: true,
  },
];

function ResultsContent() {
  const params = useSearchParams();
  const score  = Math.min(12, Math.max(0, Number(params.get('score') ?? 0)));
  const band   = bands.find((b) => score >= b.min && score <= b.max) ?? bands[0];

  const pct = Math.round((score / 12) * 100);

  return (
    <div className="w-full max-w-lg anim-float-up">

      {/* Score display */}
      <div className="text-center mb-10">
        <div className="text-5xl mb-4">
          {band.label === 'Minimal' ? '🌿' : band.label === 'Mild' ? '🌤️' : band.label === 'Moderate' ? '☁️' : '🌧️'}
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-light text-ink mb-2">
          Your score: <span className={band.colour}>{score} / 12</span>
        </h1>
        <p className={`text-lg font-semibold ${band.colour} mb-4`}>{band.label}</p>

        {/* Score bar */}
        <div className="h-2 rounded-full bg-ink/10 overflow-hidden mx-auto max-w-xs mb-6">
          <div
            className={`h-full rounded-full progress-fill ${band.barColour}`}
            style={{ width: `${pct}%` }}
          />
        </div>

        <p className="text-ink-soft leading-relaxed text-base">{band.message}</p>
      </div>

      {/* Urgent crisis box */}
      {band.urgent && (
        <div className="mb-8 p-5 rounded-2xl border-2 border-[#C0392B]/40 bg-[#C0392B]/5 text-center">
          <p className="font-body font-bold text-ink mb-1">If you are in immediate danger</p>
          <p className="text-ink-soft text-sm mb-3">Please call 999 or go to your nearest A&E.</p>
          <a
            href="tel:116123"
            className="inline-block px-6 py-2.5 rounded-full bg-[#C0392B] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Call Samaritans free: 116 123
          </a>
        </div>
      )}

      {/* Recommendations */}
      <div className="mb-10">
        <h2 className="font-display text-2xl font-medium text-ink mb-4">
          Resources for you
        </h2>
        <div className="space-y-3">
          {band.recs.map((rec) => (
            <Link
              key={rec.href}
              href={rec.href}
              className={`
                flex items-center gap-4 px-5 py-4 rounded-xl border
                transition-all duration-200 hover:-translate-y-0.5
                ${rec.highlight
                  ? 'border-teal/50 bg-teal/8 hover:bg-teal/15'
                  : 'border-ink/10 bg-white/60 hover:border-sage/40 hover:bg-sage/5'
                }
              `}
            >
              <span className="text-2xl">{rec.emoji}</span>
              <div>
                <p className="font-body font-semibold text-ink text-sm">{rec.label}</p>
                <p className="text-ink-soft text-xs">{rec.note}</p>
              </div>
              <span className="ml-auto text-ink-soft text-sm">→</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-ink-soft/60 italic text-center mb-8 leading-relaxed">
        This check‑in uses the PHQ‑4, a validated screening tool. It is <strong>not a diagnosis</strong> and does not replace professional advice. If you are concerned about your mental health, please speak to your GP or a qualified health professional.
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/questionnaire"
          className="flex-1 text-center px-6 py-3 rounded-full border border-ink/20 text-ink text-sm font-semibold hover:border-sage hover:text-sage transition-colors duration-200"
        >
          Retake check‑in
        </Link>
        <Link
          href="/"
          className="flex-1 text-center px-6 py-3 rounded-full bg-ink text-cream text-sm font-semibold hover:bg-sage hover:text-ink transition-colors duration-300 shadow-md"
        >
          Explore all resources
        </Link>
      </div>

    </div>
  );
}

export default function ResultsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream font-body">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-14">
        <Suspense fallback={<div className="text-ink-soft">Loading results…</div>}>
          <ResultsContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

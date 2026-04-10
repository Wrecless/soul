'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

const triageCards = [
  {
    emoji: '🌬️',
    label: "I'm feeling anxious",
    sublabel: 'Calm your nervous system',
    route: '/support/breathing',
    color: '#5B9AA0',
    hoverBg: 'hover:bg-teal/10',
  },
  {
    emoji: '😴',
    label: "I'm struggling to sleep",
    sublabel: 'Wind down and rest deeply',
    route: '/support/sleep',
    color: '#5A8FAD',
    hoverBg: 'hover:bg-sanctuary-sleep/10',
  },
  {
    emoji: '💬',
    label: 'I need someone to talk to',
    sublabel: 'UK helplines, always available',
    route: '/help',
    color: '#7BA694',
    hoverBg: 'hover:bg-sage/10',
  },
  {
    emoji: '🧘',
    label: 'I want to meditate',
    sublabel: 'Guided sessions for every level',
    route: '/support/meditation',
    color: '#C4936D',
    hoverBg: 'hover:bg-amber/10',
  },
  {
    emoji: '💪',
    label: 'I want to move my body',
    sublabel: 'Gentle movement and exercise',
    route: '/support/exercises',
    color: '#8AAD6E',
    hoverBg: 'hover:bg-sanctuary-exercises/10',
  },
  {
    emoji: '🎵',
    label: 'I want to try sound therapy',
    sublabel: 'Frequencies that soothe the mind',
    route: '/support/sound-therapy',
    color: '#9B82C8',
    hoverBg: 'hover:bg-sanctuary-sound/10',
  },
];

export default function Home() {
  const router = useRouter();

  function handleCardClick(route) {
    try {
      sessionStorage.setItem('ss_triage_route', route);
    } catch (_) {}
    router.push(route);
  }

  return (
    <div className="flex flex-col min-h-screen bg-cream font-body">
      <Header />

      <main id="main-content">

        {/* ── HERO ────────────────────────────────────────── */}
        <section className="relative overflow-hidden flex flex-col items-center justify-center text-center px-6 py-20 md:py-32 bg-cream">

          {/* Breathing orbs */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
            <div className="w-[560px] h-[560px] rounded-full bg-sage animate-breathe" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
            <div className="w-[380px] h-[380px] rounded-full bg-teal animate-breathe-slow" />
          </div>

          {/* Text */}
          <div className="relative z-10 max-w-2xl">
            <p className="anim-float-up delay-100 font-body text-xs tracking-[0.25em] uppercase text-ink-soft mb-3">
              A calm space for your mind
            </p>
            <h1 className="anim-float-up delay-200 font-display text-5xl md:text-7xl font-light text-ink leading-tight mb-5">
              You don&apos;t have to<br />
              <em className="text-sage not-italic">feel this way alone.</em>
            </h1>
            <p className="anim-float-up delay-300 text-ink-soft text-base md:text-lg leading-relaxed mb-3 max-w-lg mx-auto italic font-display">
              Whatever you&apos;re carrying right now — this is a safe place to set it down.
            </p>
            <p className="anim-float-up delay-400 text-ink-soft text-sm md:text-base leading-relaxed mb-10 max-w-lg mx-auto">
              Breathing exercises, guided meditation, movement, sound therapy, and direct helplines — free, always here.
            </p>
            <div className="anim-float-up delay-500 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#triage"
                className="inline-block px-9 py-4 rounded-full bg-ink text-cream font-semibold text-base hover:bg-sage hover:text-ink transition-colors duration-300 shadow-lg shadow-ink/20"
              >
                Find support now
              </a>
              <Link
                href="/questionnaire"
                className="inline-block px-8 py-4 rounded-full border border-ink/20 text-ink-soft font-medium text-base hover:border-sage hover:text-sage transition-colors duration-300"
              >
                Take the wellbeing check‑in
              </Link>
            </div>
          </div>
        </section>

        {/* ── TRIAGE SECTION ──────────────────────────────── */}
        <section id="triage" className="px-6 py-16 max-w-5xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-light text-ink mb-3">
              What brings you here today?
            </h2>
            <p className="text-ink-soft text-sm md:text-base max-w-md mx-auto">
              Choose what feels most relevant right now — you can always explore everything else too.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {triageCards.map((card, i) => (
              <button
                key={card.route}
                onClick={() => handleCardClick(card.route)}
                className={`
                  triage-card text-left
                  rounded-2xl border border-ink/8 bg-white/50
                  ${card.hoverBg} hover:border-transparent
                  cursor-pointer p-6
                  anim-float-up
                `}
                style={{ animationDelay: `${0.05 * i + 0.1}s` }}
              >
                {/* Coloured emoji container */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ backgroundColor: card.color + '22' }}
                >
                  {card.emoji}
                </div>
                {/* Left accent bar */}
                <div
                  className="w-6 h-0.5 rounded-full mb-3"
                  style={{ backgroundColor: card.color }}
                />
                <p className="font-body font-semibold text-ink text-base mb-1">{card.label}</p>
                <p className="font-body text-ink-soft text-sm">{card.sublabel}</p>
              </button>
            ))}
          </div>

          {/* Crisis card */}
          <button
            onClick={() => handleCardClick('/help')}
            className="
              triage-card w-full text-left
              rounded-2xl border-2 border-rose/40 bg-rose/5 hover:bg-rose/10 p-6
              cursor-pointer transition-colors duration-200
              anim-float-up delay-400
            "
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-rose/15 flex items-center justify-center text-2xl flex-shrink-0">
                🆘
              </div>
              <div>
                <p className="font-body font-bold text-ink text-base">I&apos;m in crisis — I need help right now</p>
                <p className="font-body text-ink-soft text-sm">Immediate UK helplines including Samaritans, NHS, and CALM</p>
              </div>
            </div>
          </button>

          {/* Check-in nudge */}
          <div className="mt-10 text-center">
            <p className="text-ink-soft text-sm">
              Not sure where to start?{' '}
              <Link href="/questionnaire" className="text-teal font-semibold hover:underline underline-offset-2">
                Take our free 4-question wellbeing check‑in →
              </Link>
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

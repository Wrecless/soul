// Support options grid
import Link from 'next/link';

const options = [
  {
    name: 'Breathing Exercises',
    id: 'breathing',
    path: '/support/breathing',
    emoji: '🌬️',
    note: 'Slow your breath, calm your nervous system. Quick techniques for when anxiety spikes.',
    color: '#5B9AA0',
    hoverBg: 'hover:bg-teal/8',
  },
  {
    name: 'Meditation',
    id: 'meditation',
    path: '/support/meditation',
    emoji: '🧘',
    note: 'Guided stillness for every level. Find quiet inside a busy mind.',
    color: '#C4936D',
    hoverBg: 'hover:bg-amber/8',
  },
  {
    name: 'Sound Therapy',
    id: 'sound-therapy',
    path: '/support/sound-therapy',
    emoji: '🎵',
    note: 'Frequencies and soundscapes that ease tension and restore focus.',
    color: '#9B82C8',
    hoverBg: 'hover:bg-sanctuary-sound/8',
  },
  {
    name: 'Movement & Exercise',
    id: 'exercises',
    path: '/support/exercises',
    emoji: '💪',
    note: 'Gentle movement to lift your mood naturally and release held tension.',
    color: '#8AAD6E',
    hoverBg: 'hover:bg-sanctuary-exercises/8',
  },
  {
    name: 'Sleep Hypnotherapy',
    id: 'sleep',
    path: '/support/sleep',
    emoji: '😴',
    note: 'Wind-down sessions and sleep hypnosis to help you rest deeply.',
    color: '#5A8FAD',
    hoverBg: 'hover:bg-sanctuary-sleep/8',
  },
];

export default function SupportOptions() {
  return (
    <main id="main-content" className="flex-1 bg-cream px-6 py-14">
      <div className="max-w-5xl mx-auto">

        {/* Intro */}
        <div className="text-center mb-12">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-ink-soft mb-3">
            Your toolkit
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-ink mb-4">
            Support Resources
          </h1>
          <p className="text-ink-soft font-body text-base max-w-md mx-auto leading-relaxed">
            Each section is a different path to feeling better. Pick whatever resonates — there&apos;s no wrong choice.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {options.map((option, i) => (
            <Link key={option.id} href={option.path}>
              <div
                className={`
                  group h-full flex flex-col
                  rounded-2xl border border-ink/8 bg-white/50
                  ${option.hoverBg} hover:border-transparent hover:shadow-md
                  transition-all duration-200 cursor-pointer p-6
                  anim-float-up
                `}
                style={{
                  animationDelay: `${i * 0.07 + 0.1}s`,
                  borderTopWidth: '3px',
                  borderTopColor: option.color,
                }}
              >
                {/* Emoji in coloured circle */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 flex-shrink-0"
                  style={{ backgroundColor: option.color + '22' }}
                >
                  {option.emoji}
                </div>

                <p className="font-body font-semibold text-ink text-base mb-2">{option.name}</p>
                <p className="font-body text-ink-soft text-sm leading-relaxed flex-1">{option.note}</p>

                <div className="mt-4 flex items-center gap-1 text-xs font-semibold" style={{ color: option.color }}>
                  Explore
                  <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Divider nudge */}
        <div className="text-center border-t border-ink/8 pt-8">
          <p className="text-ink-soft text-sm mb-1">Not sure where to begin?</p>
          <Link
            href="/questionnaire"
            className="text-teal font-semibold text-sm hover:underline underline-offset-2"
          >
            Take our free 4-question wellbeing check‑in →
          </Link>
        </div>

      </div>
    </main>
  );
}

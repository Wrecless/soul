// Support options grid
import Link from 'next/link';

const options = [
  { name: 'Breathing Exercises', id: 'breathing',    path: '/support/breathing',    emoji: '🌬️', note: 'Calm anxiety fast' },
  { name: 'Meditation',          id: 'meditation',   path: '/support/meditation',   emoji: '🧘', note: 'Guided stillness' },
  { name: 'Sound Therapy',       id: 'sound-therapy',path: '/support/sound-therapy',emoji: '🎵', note: 'Frequencies that soothe' },
  { name: 'Movement & Exercise', id: 'exercises',    path: '/support/exercises',    emoji: '💪', note: 'Lift your mood naturally' },
  { name: 'Sleep Hypnotherapy',  id: 'sleep',        path: '/support/sleep',        emoji: '😴', note: 'Wind down and rest deeply' },
];

export default function SupportOptions() {
  return (
    <div className="flex-1 bg-cream px-6 py-14">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-display text-5xl md:text-6xl font-light text-ink mb-3">
            Support Resources
          </h1>
          <p className="text-ink-soft font-body">
            Choose a category and find curated video resources to help you feel better.
          </p>
        </div>

        <div className="space-y-3">
          {options.map((option, i) => (
            <Link key={option.id} href={option.path}>
              <div
                className="
                  flex items-center gap-4 px-6 py-5 rounded-2xl border border-ink/8
                  bg-white/60 hover:bg-sage/8 hover:border-sage/30
                  transition-all duration-200 cursor-pointer
                  anim-float-up
                "
                style={{ animationDelay: `${i * 0.07 + 0.1}s` }}
              >
                <span className="text-3xl">{option.emoji}</span>
                <div>
                  <p className="font-body font-semibold text-ink text-base">{option.name}</p>
                  <p className="font-body text-ink-soft text-sm">{option.note}</p>
                </div>
                <span className="ml-auto text-ink-soft">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

const questions = [
  {
    id: 'q1',
    text: 'Over the last two weeks, how often have you been feeling nervous, anxious, or on edge?',
    domain: 'anxiety',
  },
  {
    id: 'q2',
    text: 'Over the last two weeks, how often have you found yourself unable to stop or control worrying?',
    domain: 'anxiety',
  },
  {
    id: 'q3',
    text: 'Over the last two weeks, how often have you had little interest or pleasure in doing things you usually enjoy?',
    domain: 'depression',
  },
  {
    id: 'q4',
    text: 'Over the last two weeks, how often have you been feeling down, depressed, or hopeless?',
    domain: 'depression',
  },
];

const options = [
  { label: 'Not at all',                 value: 0 },
  { label: 'Several days',               value: 1 },
  { label: 'More than half the days',    value: 2 },
  { label: 'Nearly every day',           value: 3 },
];

export default function QuestionnairePage() {
  const router = useRouter();
  const [step, setStep]       = useState(0);  // 0 = intro, 1‑4 = questions, 5 = done
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState(null);

  const currentQ = questions[step - 1];
  const totalQs  = questions.length;
  const progress = step === 0 ? 0 : Math.round((step / totalQs) * 100);

  function handleStart() {
    setStep(1);
    setSelected(null);
  }

  function handleNext() {
    if (selected === null) return;
    const updated = { ...answers, [currentQ.id]: selected };
    setAnswers(updated);
    setSelected(null);

    if (step < totalQs) {
      setStep(step + 1);
    } else {
      const score = Object.values(updated).reduce((a, b) => a + b, 0);
      router.push(`/questionnaire/results?score=${score}`);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-cream font-body">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-14">
        <div className="w-full max-w-lg">

          {/* ── Intro screen ─────────────────────────────── */}
          {step === 0 && (
            <div className="text-center anim-float-up">
              <div className="text-5xl mb-6">🌿</div>
              <h1 className="font-display text-4xl md:text-5xl font-light text-ink mb-4">
                Wellbeing Check‑in
              </h1>
              <p className="text-ink-soft leading-relaxed mb-4">
                This is a short, free check‑in using the <strong>PHQ‑4</strong> — a validated 4‑question tool used in clinical settings to gently assess anxiety and low mood.
              </p>
              <p className="text-ink-soft leading-relaxed mb-8 text-sm">
                It takes under 60 seconds. There are no right or wrong answers — only honest ones. Your results stay on your device and are never stored or shared.
              </p>
              <p className="text-xs text-ink-soft/60 mb-8 italic">
                This is not a diagnosis. If you are in crisis, please visit our{' '}
                <a href="/help" className="underline">Help page</a>.
              </p>
              <button
                onClick={handleStart}
                className="px-10 py-3.5 rounded-full bg-ink text-cream font-semibold text-base hover:bg-sage hover:text-ink transition-colors duration-300 shadow-md"
              >
                Begin the check‑in
              </button>
            </div>
          )}

          {/* ── Question screen ───────────────────────────── */}
          {step >= 1 && step <= totalQs && (
            <div key={step} className="anim-float-up">

              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between text-xs text-ink-soft mb-2">
                  <span>Question {step} of {totalQs}</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-ink/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-sage progress-fill"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <h2 className="font-display text-2xl md:text-3xl font-light text-ink mb-8 leading-snug">
                {currentQ.text}
              </h2>

              {/* Options */}
              <div className="space-y-3 mb-10">
                {options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setSelected(opt.value)}
                    className={`
                      w-full text-left px-5 py-4 rounded-xl border
                      font-body text-base transition-all duration-200
                      ${selected === opt.value
                        ? 'bg-sage/20 border-sage text-ink font-semibold shadow-sm'
                        : 'bg-white/60 border-ink/10 text-ink-soft hover:border-sage/50 hover:bg-sage/5'
                      }
                    `}
                  >
                    <span className="inline-block w-5 text-center mr-3 text-ink-soft text-sm">
                      {opt.value}
                    </span>
                    {opt.label}
                  </button>
                ))}
              </div>

              {/* Next button */}
              <button
                onClick={handleNext}
                disabled={selected === null}
                className={`
                  w-full py-3.5 rounded-full font-semibold text-base transition-all duration-300
                  ${selected !== null
                    ? 'bg-ink text-cream hover:bg-sage hover:text-ink shadow-md cursor-pointer'
                    : 'bg-ink/20 text-ink/30 cursor-not-allowed'
                  }
                `}
              >
                {step < totalQs ? 'Next question →' : 'See my results →'}
              </button>

            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}

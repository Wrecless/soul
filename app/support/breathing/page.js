'use client';

import Tab from '../components/Tab';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import BenefitsPanel from '../components/BenefitsPanel';

const benefits = [
  { title: 'Stress Reduction',     desc: 'Deep breathing activates the parasympathetic nervous system, reducing anxiety and stress hormones.' },
  { title: 'Respiratory Function', desc: 'Regular practice strengthens the diaphragm and increases lung capacity over time.' },
  { title: 'Mental Clarity',       desc: 'Breathing exercises clear the mind, improving focus and reducing symptoms of depression.' },
  { title: 'Better Sleep',         desc: 'Calming the nervous system before bed makes it easier to fall and stay asleep.' },
  { title: 'Increased Energy',     desc: 'Deeper breathing improves oxygen flow to the brain and body, raising alertness naturally.' },
  { title: 'Panic Relief',         desc: 'Controlled breathing is one of the fastest techniques to interrupt a panic response.' },
];

export default function BreathingExercises() {
  const videosAnxiety = [
    { id: '8vkYJf8DOsc', name: 'To Stop A Panic Attack' },
    { id: 'Dx112W4i5I0', name: 'Quick 60 Seconds' },
  ];
  const videosClassic = [
    { id: '4qACPNA2cKY', name: '4‑7‑8 Technique' },
    { id: 'bF_1ZiFta-E', name: 'Box Breathing' },
  ];
  const videosWimHof = [
    { id: '0BNejY1e9ik', name: 'For Beginners' },
    { id: 'tybOi4hjZFQ', name: 'Intermediate' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main id="main-content" className="flex-1" style={{ background: 'linear-gradient(135deg, #C8E6E2 0%, #7BB8B0 50%, #4A9990 100%)' }}>

        <div className="text-center pt-10 pb-4 px-6">
          <p className="font-body text-xs tracking-widest uppercase text-teal-900/50 mb-2">Support</p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-teal-950/80 mb-2">
            Breathing Exercises
          </h1>
          <p className="text-teal-900/60 font-body text-base max-w-md mx-auto">
            Your breath is always with you. Use it to calm your nervous system, slow your heart rate, and find your centre.
          </p>
        </div>

        <BenefitsPanel title="Benefits of Breathing Exercises" benefits={benefits} accentClass="text-teal-950/70" />

        <Tab videos={videosAnxiety} title="For Anxiety & Panic"  titleClass="text-teal-950/60" />
        <Tab videos={videosClassic} title="Classic Techniques"   titleClass="text-teal-950/60" />
        <Tab videos={videosWimHof}  title="Wim Hof Method"       titleClass="text-teal-950/60" />
      </main>

      <Footer />
    </div>
  );
}

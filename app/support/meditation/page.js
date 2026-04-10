'use client';

import Tab from '../components/Tab';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import BenefitsPanel from '../components/BenefitsPanel';

const benefits = [
  { title: 'Mindfulness & Awareness', desc: 'Cultivates presence and enhances your awareness of the current moment.' },
  { title: 'Stress Reduction',        desc: 'Significantly reduces stress levels, promoting relaxation and overall wellbeing.' },
  { title: 'Improved Sleep',          desc: 'Regular practice improves sleep patterns, helping you fall asleep faster and stay asleep.' },
  { title: 'Emotional Health',        desc: 'Reduces symptoms of anxiety and depression with consistent practice over time.' },
  { title: 'Concentration',           desc: 'Enhances focus and concentration in both personal and professional life.' },
  { title: 'Self-Compassion',         desc: 'Builds a kinder, more forgiving relationship with yourself and your thoughts.' },
];

export default function GuidedMeditation() {
  const videosForBeginners = [
    { id: 'U9YKY7fdwyg', name: "Meditation 101: A Beginner's Guide" },
    { id: '_hb-jMzGPdw', name: 'Finding Your Centre' },
  ];
  const videosEmotional = [
    { id: 'KjH_HEadO7o', name: '10‑Minute for Self‑Love and Acceptance' },
    { id: 'z0GtmPnqAd8', name: '15‑Minute for Strength & Grounding' },
  ];
  const videosStress = [
    { id: 'gqy8mmwDZk8', name: 'Feeling Overwhelmed' },
    { id: 'syx3a1_LeFo', name: 'Letting Go' },
    { id: 'HMOfD3VSbQ4', name: 'Body Scan for Sleep' },
  ];
  const videosBodyScan = [
    { id: 'AeOXCgF4S0s', name: 'Full Body Scan Relaxation' },
    { id: '_1h-zizAGsc', name: 'Progressive Muscle Relaxation' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main id="main-content" className="flex-1" style={{ background: 'linear-gradient(135deg, #F5E8CC 0%, #D4B57A 50%, #B8904A 100%)' }}>

        <div className="text-center pt-10 pb-4 px-6">
          <p className="font-body text-xs tracking-widest uppercase text-amber-950/40 mb-2">Support</p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-amber-950/80 mb-2">
            Guided Meditation
          </h1>
          <p className="text-amber-900/60 font-body text-base max-w-md mx-auto">
            Sit quietly with yourself. Guided meditation helps you cultivate presence, ease anxiety, and develop a kinder relationship with your thoughts.
          </p>
        </div>

        <BenefitsPanel title="Benefits of Guided Meditation" benefits={benefits} accentClass="text-amber-950/70" />

        <Tab videos={videosForBeginners} title="For Beginners"        titleClass="text-amber-950/60" />
        <Tab videos={videosEmotional}    title="Emotional Wellbeing"  titleClass="text-amber-950/60" />
        <Tab videos={videosStress}       title="Meditation for Stress" titleClass="text-amber-950/60" />
        <Tab videos={videosBodyScan}     title="Body Scan"           titleClass="text-amber-950/60" />
      </main>

      <Footer />
    </div>
  );
}

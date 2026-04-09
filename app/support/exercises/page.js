'use client';

import Tab from '../components/Tab';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import BenefitsPanel from '../components/BenefitsPanel';

export default function AnxietyDepressionExercises() {
  const videosForAnxiety = [
    { id: 'RFuYcIy6Vxc', name: 'Yoga for Anxiety' },
    { id: '30VMIEmA114',  name: 'The 5‑4‑3‑2‑1 Method' },
    { id: 'AwbRERIzt6c', name: 'Mindful Walking' },
  ];
  const videosForDepression = [
    { id: 'e9B3QWESkLI', name: 'Strength Training for Mental Health' },
    { id: '3ZBXldCxZEA', name: 'Cardio Exercises to Boost Mood' },
    { id: 'sFtP0HWvu0k', name: 'Exercises to Shake off Depression' },
  ];
  const videosForStressRelief = [
    { id: '3YOYyQ8cb5c', name: 'Full Body Yin Yoga for Beginners' },
    { id: 'sTANio_2E0Q', name: 'Stress & Anxiety Relief' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1" style={{ background: 'linear-gradient(135deg, #C8DAB8 0%, #8AAD6E 50%, #628A46 100%)' }}>

        <div className="text-center pt-10 pb-4 px-6">
          <p className="font-body text-xs tracking-widest uppercase text-green-950/40 mb-2">Support</p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-green-950/80 mb-2">
            Movement & Exercise
          </h1>
          <p className="text-green-900/60 font-body text-base max-w-md mx-auto">
            Moving your body is one of the most evidence‑based ways to ease anxiety and depression. Even a short walk counts.
          </p>
        </div>

        <BenefitsPanel title="Benefits of Exercise for Mental Health" accentClass="text-green-950/70">
          <p><strong>Enhances mood:</strong> Physical activity increases endorphin production, generating positive feelings and reducing pain perception.</p>
          <p><strong>Reduces stress:</strong> Exercise decreases levels of adrenaline and cortisol, the body&apos;s primary stress hormones.</p>
          <p><strong>Improves sleep:</strong> Regular movement helps you fall asleep faster and sleep more deeply.</p>
          <p><strong>Boosts brain health:</strong> Physical activity improves cognitive function and has been shown to reduce symptoms of depression.</p>
          <p><strong>Increases self‑esteem:</strong> Regular exercise builds a sense of accomplishment and body confidence over time.</p>
        </BenefitsPanel>

        <Tab videos={videosForAnxiety}      title="For Anxiety"    titleClass="text-green-950/60" />
        <Tab videos={videosForDepression}   title="For Low Mood"   titleClass="text-green-950/60" />
        <Tab videos={videosForStressRelief} title="Yoga & Stretch" titleClass="text-green-950/60" />
      </div>

      <Footer />
    </div>
  );
}

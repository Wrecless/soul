'use client';

import Tab from '../components/Tab';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import BenefitsPanel from '../components/BenefitsPanel';

const benefits = [
  { title: 'Relaxation & Stress Relief', desc: 'Soothing sounds promote relaxation and reduce the physiological stress response.' },
  { title: 'Enhanced Sleep Quality',     desc: 'Certain frequencies synchronise brain waves to support deeper, more restorative sleep.' },
  { title: 'Improved Focus',             desc: 'Ambient sound has been shown to enhance cognitive performance and reduce distraction.' },
  { title: 'Emotional Balance',          desc: 'Sound therapy gently regulates mood and reduces emotional volatility over time.' },
  { title: 'Pain Relief',                desc: 'Some research suggests sound therapy supports pain management and physical recovery.' },
  { title: 'Nervous System Regulation',  desc: 'Specific frequencies help shift the nervous system from fight-or-flight to rest-and-digest.' },
];

export default function SoundTherapy() {
  const videosAmbience = [
    { id: 'buqt6_CjtuI', name: 'Relaxing Nature Sounds' },
    { id: 'WPni755-Krg', name: 'Study Music Alpha Waves' },
    { id: 'prfZFyp4XZk', name: 'Sounds of the Sea — Deep Underwater' },
  ];
  const videosStressRelief = [
    { id: 'YB-nFu50R1M', name: 'Reduces Stress, Anxiety & Calms the Mind' },
    { id: 'WCuZRbHER0g', name: 'Release Anxiety & Tension' },
  ];
  const videosFocus = [
    { id: 'xsfyb1pStdw', name: 'Binaural Beats for Concentration' },
    { id: 'Z8ANihFXlgU', name: 'Ambient Study Music' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main id="main-content" className="flex-1" style={{ background: 'linear-gradient(135deg, #DDD4F0 0%, #9B82C8 55%, #7355A8 100%)' }}>

        <div className="text-center pt-10 pb-4 px-6">
          <p className="font-body text-xs tracking-widest uppercase text-purple-950/40 mb-2">Support</p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-purple-950/80 mb-2">
            Sound Therapy
          </h1>
          <p className="text-purple-900/60 font-body text-base max-w-md mx-auto">
            Sound has a profound effect on the nervous system. These curated tracks and frequencies help you relax, focus, and sleep.
          </p>
        </div>

        <BenefitsPanel title="Benefits of Sound Therapy" benefits={benefits} accentClass="text-purple-950/70" />

        <Tab videos={videosAmbience}     title="Nature & Ambience" titleClass="text-purple-950/60" />
        <Tab videos={videosStressRelief} title="Stress Relief"     titleClass="text-purple-950/60" />
        <Tab videos={videosFocus}        title="Binaural Beats"    titleClass="text-purple-950/60" />
      </main>

      <Footer />
    </div>
  );
}

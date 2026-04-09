'use client';

import Tab from '../components/Tab';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import BenefitsPanel from '../components/BenefitsPanel';

export default function SoundTherapy() {
  const videosForRelaxation = [
    { id: 'buqt6_CjtuI', name: 'Relaxing Nature Sounds' },
    { id: 'WPni755-Krg', name: 'Study Music Alpha Waves' },
    { id: 'prfZFyp4XZk', name: 'Sounds of the Sea — Deep Underwater' },
  ];
  const videosForSleep = [
    { id: 'YB-nFu50R1M', name: 'Reduces Stress, Anxiety & Calms the Mind' },
    { id: 'WCuZRbHER0g', name: 'Release Anxiety & Tension' },
  ];
  const videosForFocus = [
    { id: 'xsfyb1pStdw', name: 'Binaural Beats for Concentration' },
    { id: 'Z8ANihFXlgU', name: 'Ambient Study Music' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1" style={{ background: 'linear-gradient(135deg, #DDD4F0 0%, #9B82C8 55%, #7355A8 100%)' }}>

        <div className="text-center pt-10 pb-4 px-6">
          <p className="font-body text-xs tracking-widest uppercase text-purple-950/40 mb-2">Support</p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-purple-950/80 mb-2">
            Sound Therapy
          </h1>
          <p className="text-purple-900/60 font-body text-base max-w-md mx-auto">
            Sound has a profound effect on the nervous system. These curated tracks and frequencies help you relax, focus, and sleep.
          </p>
        </div>

        <BenefitsPanel title="Benefits of Sound Therapy" accentClass="text-purple-950/70">
          <p><strong>Relaxation and stress relief:</strong> Soothing sounds promote relaxation and reduce the physiological stress response.</p>
          <p><strong>Enhanced sleep quality:</strong> Certain frequencies synchronise brain waves to support deeper, more restorative sleep.</p>
          <p><strong>Improved focus and concentration:</strong> Ambient sound has been shown to enhance cognitive performance and reduce distraction.</p>
          <p><strong>Emotional balance:</strong> Sound therapy can gently regulate mood and reduce emotional volatility.</p>
          <p><strong>Physical healing:</strong> Some studies suggest sound therapy supports pain relief and recovery.</p>
        </BenefitsPanel>

        <Tab videos={videosForRelaxation} title="Nature & Ambience" titleClass="text-purple-950/60" />
        <Tab videos={videosForSleep}      title="Stress Relief"      titleClass="text-purple-950/60" />
        <Tab videos={videosForFocus}      title="Binaural Beats"     titleClass="text-purple-950/60" />
      </div>

      <Footer />
    </div>
  );
}

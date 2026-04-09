'use client';

import Tab from '../components/Tab';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import BenefitsPanel from '../components/BenefitsPanel';

export default function SleepHypnotherapy() {
  const videosForRelaxation = [
    { id: 'r_5N_vVl4JY', name: 'Declutter Your Mind Before Deep Sleep' },
    { id: 'vWlf_rh7xFY', name: 'Hypnosis for Instant Deep Sleep' },
  ];
  const videosForDeepSleep = [
    { id: 'Cp9abS-7m_A', name: "Guided Hypnosis for a Full Night's Sleep" },
    { id: 'MsQzakXQ9oQ', name: 'Stop Panic & Anxiety' },
  ];
  const videosForInsomnia = [
    { id: 'odvdQvJ4GYk', name: 'Sleep Talk Down Guided Sleep Meditation' },
    { id: 'SCcfnwS9sec', name: 'Release Destructive Energy' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1" style={{ background: 'linear-gradient(160deg, #1C2E42 0%, #22385A 50%, #1A2C44 100%)' }}>

        <div className="text-center pt-10 pb-4 px-6">
          <p className="font-body text-xs tracking-widest uppercase text-blue-200/30 mb-2">Support</p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-blue-100/80 mb-2">
            Sleep Hypnotherapy
          </h1>
          <p className="text-blue-200/50 font-body text-base max-w-md mx-auto">
            Let your body surrender to rest. Sleep hypnotherapy uses gentle guidance and relaxation to help your mind release the day.
          </p>
        </div>

        <BenefitsPanel title="Benefits of Sleep Hypnotherapy" accentClass="text-blue-200/70">
          <p><strong>Enhanced sleep quality:</strong> Deeply relaxes you, making it easier to fall asleep and remain asleep through the night.</p>
          <p><strong>Stress and anxiety reduction:</strong> Addresses subconscious sources of stress, promoting more restful sleep.</p>
          <p><strong>Improved sleep patterns:</strong> Regular sessions help reset your sleep cycles and address insomnia.</p>
          <p><strong>Deep relaxation:</strong> Provides profound physical and mental relaxation before bedtime.</p>
          <p><strong>Positive sleep associations:</strong> Creates a calm, welcoming relationship with bedtime.</p>
        </BenefitsPanel>

        <Tab videos={videosForRelaxation} title="Michael Sealey"      titleClass="text-blue-200/50" />
        <Tab videos={videosForDeepSleep}  title="Minds in Unison"      titleClass="text-blue-200/50" />
        <Tab videos={videosForInsomnia}   title="Jason Stephenson"     titleClass="text-blue-200/50" />
      </div>

      <Footer />
    </div>
  );
}

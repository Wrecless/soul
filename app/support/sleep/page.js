'use client';

import Tab from '../components/Tab';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import BenefitsPanel from '../components/BenefitsPanel';

const benefits = [
  { title: 'Enhanced Sleep Quality',    desc: 'Deeply relaxes you, making it easier to fall asleep and remain asleep through the night.' },
  { title: 'Anxiety Reduction',         desc: 'Addresses subconscious sources of stress, quieting the mind that keeps you awake.' },
  { title: 'Improved Sleep Patterns',   desc: 'Regular sessions help reset your sleep cycles and address chronic insomnia.' },
  { title: 'Deep Relaxation',           desc: 'Provides profound physical and mental relaxation before bedtime, releasing tension.' },
  { title: 'Positive Sleep Associations', desc: 'Creates a calm, welcoming relationship with bedtime rather than dread or anxiety.' },
  { title: 'No Side Effects',           desc: 'A completely natural approach to improving sleep — no medication or dependency involved.' },
];

export default function SleepHypnotherapy() {
  const videosRelaxation = [
    { id: 'r_5N_vVl4JY', name: 'Declutter Your Mind Before Deep Sleep' },
    { id: 'vWlf_rh7xFY', name: 'Hypnosis for Instant Deep Sleep' },
    { id: '_xzjWPSPTq8', name: 'Deep Sleep for Mind Body Spirit Cleansing' },
  ];
  const videosDeepSleep = [
    { id: 'Cp9abS-7m_A', name: "Guided Hypnosis for a Full Night's Sleep" },
    { id: 'MsQzakXQ9oQ', name: 'Stop Panic & Anxiety' },
  ];
  const videosInsomnia = [
    { id: 'odvdQvJ4GYk', name: 'Sleep Talk Down Guided Sleep Meditation' },
    { id: 'SCcfnwS9sec', name: 'Release Destructive Energy' },
    { id: 's_SMIouQGps', name: 'Pain Management with Binaural Music' },
  ];
  const videosSleepMeditation = [
    { id: 'HoKYdHLDuc8', name: 'Ascension from Earth to Stars' },
    { id: 'hJbRpHZr_d0', name: 'Yoga Nidra for Deep Sleep' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main id="main-content" className="flex-1" style={{ background: 'linear-gradient(160deg, #1C2E42 0%, #22385A 50%, #1A2C44 100%)' }}>

        <div className="text-center pt-10 pb-4 px-6">
          <p className="font-body text-xs tracking-widest uppercase text-blue-200/30 mb-2">Support</p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-blue-100/80 mb-2">
            Sleep Hypnotherapy
          </h1>
          <p className="text-blue-200/50 font-body text-base max-w-md mx-auto">
            Let your body surrender to rest. Sleep hypnotherapy uses gentle guidance and relaxation to help your mind release the day.
          </p>
        </div>

        <BenefitsPanel title="Benefits of Sleep Hypnotherapy" benefits={benefits} accentClass="text-blue-200/70" />

        <Tab videos={videosRelaxation}      title="Michael Sealey"     titleClass="text-blue-200/50" />
        <Tab videos={videosDeepSleep}       title="Minds in Unison"    titleClass="text-blue-200/50" />
        <Tab videos={videosInsomnia}         title="Jason Stephenson"   titleClass="text-blue-200/50" />
        <Tab videos={videosSleepMeditation}  title="Sleep Meditation"   titleClass="text-blue-200/50" />
      </main>

      <Footer />
    </div>
  );
}

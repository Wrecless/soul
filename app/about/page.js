import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'About — SoulSupport',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream font-body">
      <Header />

      <main id="main-content" className="flex-1 max-w-2xl mx-auto w-full px-6 py-14">

        {/* Heading */}
        <h1 className="font-display text-5xl md:text-6xl font-light text-ink mb-3 anim-float-up">
          About SoulSupport
        </h1>
        <p className="text-ink-soft text-lg mb-12 anim-float-up delay-100">
          A calm, accessible space for mental wellbeing.
        </p>

        {/* What it is */}
        <section className="mb-10 anim-float-up delay-200">
          <h2 className="font-display text-3xl font-medium text-ink mb-3">What is SoulSupport?</h2>
          <p className="text-ink-soft leading-relaxed">
            SoulSupport is a free mental health resource hub built to help people find calm, clarity, and support — quickly and without judgement. It brings together guided breathing exercises, meditation videos, movement prompts, sound therapy, and direct links to UK helplines in one quiet, easy‑to‑navigate place.
          </p>
        </section>

        {/* Who it's for */}
        <section className="mb-10 anim-float-up delay-300">
          <h2 className="font-display text-3xl font-medium text-ink mb-3">Who is it for?</h2>
          <p className="text-ink-soft leading-relaxed">
            Anyone who is feeling anxious, low, overwhelmed, or simply in need of a moment to breathe. SoulSupport is designed for everyday use — whether you need a 60‑second breathing technique before a stressful moment or a full guided meditation session to help you wind down at the end of the day.
          </p>
        </section>

        {/* Resources */}
        <section className="mb-10 anim-float-up delay-400">
          <h2 className="font-display text-3xl font-medium text-ink mb-3">Where do the resources come from?</h2>
          <p className="text-ink-soft leading-relaxed">
            All video content is curated from established creators on YouTube who specialise in evidence‑informed mental health practices. The{' '}
            <Link href="/questionnaire" className="text-teal hover:underline underline-offset-2">
              wellbeing check‑in
            </Link>{' '}
            uses the PHQ‑4, a validated 4‑question screening instrument for anxiety and depression, published in clinical literature. Helpline contacts are sourced directly from the organisations listed and are verified.
          </p>
        </section>

        {/* Not a substitute */}
        <section className="mb-10 p-6 rounded-2xl bg-sage/10 border border-sage/20 anim-float-up delay-500">
          <h2 className="font-display text-2xl font-medium text-ink mb-2">Important</h2>
          <p className="text-ink-soft leading-relaxed text-sm">
            SoulSupport provides self‑help resources for informational purposes only. It is <strong>not a substitute for professional medical advice, diagnosis, or treatment.</strong> If you are in crisis or in immediate danger, please call 999 or visit your nearest A&E. For non‑emergency support, our{' '}
            <Link href="/help" className="text-teal hover:underline underline-offset-2">
              Help page
            </Link>{' '}
            lists free UK helplines available around the clock.
          </p>
        </section>

        {/* Tech stack */}
        <section className="mb-10 anim-float-up delay-600">
          <h2 className="font-display text-3xl font-medium text-ink mb-3">Built with</h2>
          <ul className="text-ink-soft space-y-1 text-sm list-disc list-inside">
            <li>Next.js 14 (App Router)</li>
            <li>Tailwind CSS</li>
            <li>React — functional components throughout</li>
            <li>Google Fonts — Cormorant Garamond &amp; Nunito</li>
            <li>Font Awesome (social icons)</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="mt-12 anim-float-up delay-700">
          <Link
            href="/"
            className="inline-block px-8 py-3.5 rounded-full bg-ink text-cream font-semibold hover:bg-sage hover:text-ink transition-colors duration-300 shadow-md text-base"
          >
            ← Back to home
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}

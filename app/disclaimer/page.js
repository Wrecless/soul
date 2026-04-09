import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'About This Project — SoulSupport',
};

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream font-body">
      <Header />

      <main id="main-content" className="flex-1">

        {/* ── Hero ─────────────────────────────────────────── */}
        <div className="relative overflow-hidden bg-ink text-cream px-6 py-16 md:py-24">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sage/10 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-teal/8 blur-3xl pointer-events-none" aria-hidden="true" />

          <div className="relative max-w-2xl mx-auto text-center">
            <p className="text-xs tracking-widest uppercase text-cream/35 mb-4">
              BSc Computer Science · University of Derby · 2025–2026
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-light mb-5 leading-tight">
              About This Project
            </h1>
            <p className="text-cream/65 text-lg leading-relaxed max-w-xl mx-auto">
              SoulSupport was built as a final year dissertation project — grounded in academic research, shaped with professional guidance, and designed with genuine care for student wellbeing.
            </p>
          </div>
        </div>

        {/* ── Context cards ────────────────────────────────── */}
        <div className="max-w-2xl mx-auto px-6 py-14">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
            <div className="text-center px-5 py-7 rounded-2xl bg-sage/12 border border-sage/20">
              <div className="text-3xl mb-3">🔬</div>
              <p className="font-display text-lg font-medium text-ink mb-2">Evidence‑Based</p>
              <p className="text-ink-soft text-sm leading-relaxed">
                Grounded in validated clinical tools, peer-reviewed research, and established UK mental health frameworks.
              </p>
            </div>

            <div className="text-center px-5 py-7 rounded-2xl bg-teal/10 border border-teal/20">
              <div className="text-3xl mb-3">🩺</div>
              <p className="font-display text-lg font-medium text-ink mb-2">Professionally Informed</p>
              <p className="text-ink-soft text-sm leading-relaxed">
                Content and resource selection was shaped with input from qualified mental health practitioners.
              </p>
            </div>

            <div className="text-center px-5 py-7 rounded-2xl bg-amber/10 border border-amber/20">
              <div className="text-3xl mb-3">💛</div>
              <p className="font-display text-lg font-medium text-ink mb-2">Supplementary Only</p>
              <p className="text-ink-soft text-sm leading-relaxed">
                A complementary wellbeing resource — not a clinical service or a replacement for professional care.
              </p>
            </div>
          </div>

          {/* ── Important notice ─────────────────────────── */}
          <div className="rounded-2xl border-2 border-amber/35 bg-amber/8 p-7 mb-14 text-center">
            <p className="font-display text-xl font-medium text-ink mb-3">Please Note</p>
            <p className="text-ink-soft leading-relaxed text-sm max-w-lg mx-auto">
              Everything on SoulSupport is offered as <strong className="text-ink">additional support only</strong>. It is not clinical advice, a diagnosis, or a treatment plan. If you are experiencing mental health difficulties, please speak to your GP, a qualified counsellor, or contact one of the helplines on our{' '}
              <Link href="/help" className="text-teal font-semibold hover:underline underline-offset-2">
                Help page
              </Link>
              . Your health and safety always come first.
            </p>
          </div>

          {/* ── Project background ────────────────────────── */}
          <div className="space-y-10 text-ink leading-relaxed mb-14">

            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-3">The Project</h2>
              <p className="text-ink-soft">
                SoulSupport was developed as a final year dissertation project for a BSc Computer Science degree at the University of Derby. The project set out to explore how digital technology can meaningfully support student mental wellbeing — combining software engineering with user-centred design, accessibility research, and applied psychology.
              </p>
              <p className="text-ink-soft mt-3">
                The result is a free, open wellbeing platform featuring guided breathing, meditation, movement, sound therapy, and sleep resources — alongside a validated mental health screening tool and direct links to UK crisis helplines.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-3">Research Foundation</h2>
              <p className="text-ink-soft">
                The development process involved extensive research into the UK mental health digital landscape, including analysis of leading charity websites (Mind, Samaritans, YoungMinds, CALM, Kooth), NHS digital health standards, WCAG accessibility guidelines, and academic literature on evidence-based digital mental health interventions.
              </p>
              <p className="text-ink-soft mt-3">
                The PHQ-4 screening tool used in the Wellbeing Check-in is a clinically validated instrument (Kroenke et al., 2009, <em>Archives of Internal Medicine</em>) widely used in primary care settings. All content follows safe messaging standards set by the Samaritans Media Guidelines and the Papyrus framework.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-3">Professional Involvement</h2>
              <p className="text-ink-soft">
                The content, resources, and clinical approach were informed by consultation with qualified mental health professionals. Their input shaped the resource selection, safe messaging practices, crisis escalation design, and the overall appropriateness of content presented across the platform.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-medium text-ink mb-3">How to Use This Platform</h2>
              <p className="text-ink-soft">
                SoulSupport is designed to be a starting point — not an endpoint. Use the breathing exercises when you feel anxious. Browse the meditation videos when you want stillness. Check the helplines page if you need to talk to someone right now. Take the Wellbeing Check-in for a gentle snapshot of how you&apos;re doing.
              </p>
              <p className="text-ink-soft mt-3">
                Whatever brings you here, you are always encouraged to also speak to a health professional. These resources complement professional care; they do not replace it.
              </p>
            </section>

          </div>

          {/* ── Legal disclaimer ──────────────────────────── */}
          <hr className="border-ink/10 mb-12" />
          <p className="text-xs text-ink-soft/50 uppercase tracking-widest mb-2">Legal Disclaimer</p>
          <p className="text-ink-soft text-sm mb-10">Last updated 08/04/2026</p>

          <div className="space-y-8 text-ink leading-relaxed">

            <section>
              <h2 className="font-display text-xl font-medium text-ink mb-2">1. Acceptance of Terms</h2>
              <p className="text-ink-soft text-sm">
                By accessing and using SoulSupport you accept and agree to be bound by the terms and provisions of this disclaimer. If you do not agree to abide by these terms, please do not use the app.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-medium text-ink mb-2">2. Not a Substitute for Professional Advice</h2>
              <p className="text-ink-soft text-sm">
                The content provided through SoulSupport is for informational and supplementary purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or another qualified health provider with any questions about a medical condition.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-medium text-ink mb-2">3. No Doctor–Patient Relationship</h2>
              <p className="text-ink-soft text-sm">
                Use of SoulSupport does not establish a doctor–patient relationship. The app is not a tool for the diagnosis or treatment of any health condition and should not be considered as such.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-medium text-ink mb-2">4. Liability</h2>
              <p className="text-ink-soft text-sm">
                The app and its content are provided on an &ldquo;as is&rdquo; basis. The creator of SoulSupport hereby disclaims all warranties of any kind, express or implied, including the warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-medium text-ink mb-2">5. External Links</h2>
              <p className="text-ink-soft text-sm">
                SoulSupport may contain links to third-party websites or services. The creator has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-medium text-ink mb-2">6. Emergency Contacts</h2>
              <p className="text-ink-soft text-sm">
                For any emergencies, please visit the{' '}
                <Link href="/help" className="text-teal hover:underline underline-offset-2">
                  Help page
                </Link>{' '}
                for emergency contacts, or dial 999 in the UK. The Samaritans are free on 116 123, available 24 hours a day, every day.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-medium text-ink mb-2">7. Changes to This Disclaimer</h2>
              <p className="text-ink-soft text-sm">
                The creator reserves the right to modify or replace this disclaimer at any time.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-medium text-ink mb-2">Contact</h2>
              <p className="text-ink-soft text-sm">
                If you have any questions about this project or disclaimer, please contact{' '}
                <a href="mailto:nintah85@gmail.com" className="text-teal hover:underline underline-offset-2">
                  nintah85@gmail.com
                </a>.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

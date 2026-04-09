import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Disclaimer — SoulSupport',
};

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream font-body">
      <Header />

      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-14">
        <h1 className="font-display text-5xl font-light text-ink mb-2">Disclaimer</h1>
        <p className="text-ink-soft text-sm mb-10">Last updated 08/04/2026</p>

        <div className="space-y-8 text-ink leading-relaxed">

          <section>
            <h2 className="font-display text-2xl font-medium text-ink mb-2">1. Acceptance of Terms</h2>
            <p className="text-ink-soft">
              By accessing and using SoulSupport (the App), you accept and agree to be bound by the terms and provision of this disclaimer. If you do not agree to abide by these terms, please do not use the App.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-ink mb-2">2. Not a Substitute for Professional Advice</h2>
            <p className="text-ink-soft">
              The content provided through the App, including all text, graphics, images, and information available on or through the App, is for informational purposes only. The content is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or another qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-ink mb-2">3. No Doctor‑Patient Relationship</h2>
            <p className="text-ink-soft">
              Use of the App does not establish a doctor‑patient relationship between you and the creator of SoulSupport or any of the professionals providing information via the App. The App is not a tool for the diagnosis or treatment of any health condition and should not be considered as such.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-ink mb-2">4. Liability</h2>
            <p className="text-ink-soft">
              The App and its content are provided on an &ldquo;as is&rdquo; basis. The creator of SoulSupport hereby disclaims all warranties of any kind, express or implied, including, without limitation, the warranties of merchantability, fitness for a particular purpose, and non‑infringement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-ink mb-2">5. External Links</h2>
            <p className="text-ink-soft">
              The App may contain links to third‑party websites or services that are not owned or controlled by the creator of SoulSupport. The creator has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party websites or services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-ink mb-2">6. Emergency Contacts</h2>
            <p className="text-ink-soft">
              For any emergencies, users are advised to visit the{' '}
              <a href="/help" className="text-teal hover:underline underline-offset-2">Help page</a>{' '}
              within the App for emergency contacts. Users are also encouraged to be familiar with local emergency services (dial 999 in the UK).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-ink mb-2">7. Changes to Disclaimer</h2>
            <p className="text-ink-soft">
              The creator reserves the right, at their sole discretion, to modify or replace this disclaimer at any time.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium text-ink mb-2">Contact</h2>
            <p className="text-ink-soft">
              If you have any questions about this disclaimer, please contact us at{' '}
              <a href="mailto:100560015@unimail.derby.ac.uk" className="text-teal hover:underline underline-offset-2">
                100560015@unimail.derby.ac.uk
              </a>.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

// Persistent crisis banner — shown above the main nav on every page
export default function CrisisBanner() {
  return (
    <aside
      aria-label="Crisis support contacts"
      className="w-full bg-teal text-cream text-xs text-center py-2 px-4 leading-relaxed"
    >
      Need urgent help?{' '}
      <a
        href="tel:116123"
        className="font-semibold underline underline-offset-2 hover:text-cream/80 transition-colors"
      >
        Call 116 123
      </a>{' '}
      (Samaritans, free 24/7) or{' '}
      <a
        href="sms:85258?body=SHOUT"
        className="font-semibold underline underline-offset-2 hover:text-cream/80 transition-colors"
      >
        text SHOUT to 85258
      </a>
    </aside>
  );
}

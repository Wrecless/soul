/* layout.js */
import { Cormorant_Garamond, Nunito } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata = {
  title: 'SoulSupport',
  description: 'A calm space for mental wellbeing — breathing, meditation, helplines, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${nunito.variable}`}>
      <head>
        <link rel="icon" href="/brain.png" />
      </head>
      <body>
        {/* Skip link — first DOM element so keyboard users reach it before any landmark */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cream focus:text-ink focus:rounded-full focus:font-semibold focus:text-sm"
        >
          Skip to main content
        </a>
        {/* Grain texture — decorative overlay, non-interactive */}
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

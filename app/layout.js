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
      <body>{children}</body>
    </html>
  );
}

/* layout.js */

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SoulSupport",
  description: "A support community for the soul",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="/Logo.gif"/>
    </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

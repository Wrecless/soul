'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CrisisBanner from './CrisisBanner';

const navLinks = [
  { label: 'Home',       href: '/'           },
  { label: 'Support',    href: '/support'    },
  { label: 'Help',       href: '/help'       },
  { label: 'About',      href: '/about'      },
  { label: 'Project',    href: '/disclaimer' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu whenever the route changes
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <div className="sticky top-0 z-40">
      <CrisisBanner />

      <header className="flex flex-wrap items-center justify-between bg-ink text-cream px-5 py-3 shadow-md">

        {/* Logo + brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/Logo.gif"
            alt="SoulSupport logo"
            width={52}
            height={52}
            className="rounded-full"
          />
          <span className="font-display font-semibold text-2xl md:text-3xl text-cream group-hover:text-sage transition-colors duration-300">
            SoulSupport
          </span>
        </Link>

        {/* Hamburger toggle — mobile only */}
        <button
          className="md:hidden p-2 rounded-lg text-cream/80 hover:text-cream hover:bg-white/10 transition-colors duration-200"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <>
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </>
            ) : (
              <>
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>

        {/* Nav links */}
        <nav
          id="main-nav"
          aria-label="Main navigation"
          className={`${menuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row items-stretch md:items-center gap-1 md:gap-2 list-none m-0 p-0 pt-2 md:pt-0 pb-1 md:pb-0">
            {navLinks.map(({ label, href }) => {
              const isActive = href === '/'
                ? pathname === '/'
                : pathname.startsWith(href);

              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`
                      block px-4 py-2 rounded-full
                      text-sm md:text-base font-body font-medium
                      transition-all duration-200
                      ${isActive
                        ? 'bg-sage text-ink'
                        : 'text-cream/80 hover:text-cream hover:bg-white/10'
                      }
                    `}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
}

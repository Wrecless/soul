'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home',    href: '/'        },
  { label: 'Support', href: '/support' },
  { label: 'Help',    href: '/help'    },
  { label: 'About',   href: '/about'   },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="
      flex flex-wrap items-center justify-between
      bg-ink text-cream
      px-5 py-3
      shadow-md
    ">
      {/* Logo + brand */}
      <Link href="/" className="flex items-center gap-3 group">
        <Image
          src="/Logo.gif"
          alt="SoulSupport logo"
          width={52}
          height={52}
          className="rounded-full"
        />
        <span className="
          font-display font-semibold
          text-2xl md:text-3xl
          text-cream
          group-hover:text-sage transition-colors duration-300
        ">
          SoulSupport
        </span>
      </Link>

      {/* Nav */}
      <nav>
        <ul className="flex items-center gap-1 md:gap-2 list-none m-0 p-0">
          {navLinks.map(({ label, href }) => {
            const isActive = href === '/'
              ? pathname === '/'
              : pathname.startsWith(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`
                    px-3 py-1.5 rounded-full
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
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, PhoneCall, X } from 'lucide-react';
import { clinicInfo } from '@/data/siteData';

const links = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#doctors', label: 'Doctors' },
  { href: '/#appointment', label: 'Appointment' },
  { href: '/#testimonials', label: 'Testimonials' },
  { href: '/#contact', label: 'Contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/90 backdrop-blur-lg">
      <div className="main-container flex h-16 sm:h-20 items-center justify-between">
        <Link href="/#home" className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">
          Rana <span className="gradient-text">Clinic</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700 transition hover:text-teal-600">
              {link.label}
            </Link>
          ))}
        </nav>

        <a href={clinicInfo.phoneLink} className="hidden items-center gap-2 rounded-full bg-slate-900 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white transition hover:bg-slate-700 md:inline-flex">
          <PhoneCall className="h-4 w-4" />
          Call Now
        </a>

        <button
          aria-label="Open menu"
          className="inline-flex rounded-lg border border-sky-100 p-1.5 sm:p-2 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-sky-100 bg-white lg:hidden">
          <nav className="main-container grid gap-0.5 sm:gap-1 py-3 sm:py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:bg-sky-50"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a href={clinicInfo.phoneLink} className="mt-1 sm:mt-2 rounded-lg bg-slate-900 px-3 py-2 text-center text-xs sm:text-sm font-semibold text-white">
              Call {clinicInfo.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

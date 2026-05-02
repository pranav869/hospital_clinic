import Link from 'next/link';
import { clinicInfo } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-slate-950 text-slate-200">
      <div className="main-container grid gap-8 sm:gap-10 py-10 sm:py-12 lg:py-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-base sm:text-lg font-semibold text-white">{clinicInfo.name}</p>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-300">Premium multi-speciality care in Chennai focused on precision diagnosis and compassionate outcomes.</p>
        </div>
        <div>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-sky-300">Quick Links</p>
          <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
            <li><Link className="transition hover:text-sky-300" href="/about">About</Link></li>
            <li><Link className="transition hover:text-sky-300" href="/services">Services</Link></li>
            <li><Link className="transition hover:text-sky-300" href="/doctors">Doctors</Link></li>
            <li><Link className="transition hover:text-sky-300" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-sky-300">Contact</p>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-slate-300">{clinicInfo.address}</p>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm">{clinicInfo.phone}</p>
          <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm">{clinicInfo.email}</p>
          <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm">{clinicInfo.timings}</p>
        </div>
      </div>
      <div className="border-t border-slate-800 py-3 sm:py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {clinicInfo.name}. All rights reserved.
      </div>
    </footer>
  );
}

import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="main-container py-28 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">404</p>
      <h1 className="mt-3 text-4xl font-semibold text-slate-900">Page not found</h1>
      <p className="mt-3 text-slate-600">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">
        Return Home
      </Link>
    </section>
  );
}

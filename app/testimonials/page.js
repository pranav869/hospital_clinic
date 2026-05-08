import FadeIn from '@/components/FadeIn';
import SectionHeading from '@/components/SectionHeading';
import Stars from '@/components/Stars';
import { testimonials } from '@/data/siteData';

export const metadata = {
  title: 'Patient Testimonials',
  description: 'Read patient reviews and experiences about Rana Clinic & Pharmacy, Kolathur Chennai.'
};

export default function TestimonialsPage() {
  return (
    <section className="main-container py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow="Testimonials"
        title="What our patients say"
        description="Our credibility is built through outcomes, ethical consultation, and trusted long-term care."
      />
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <FadeIn key={item.name} delay={index * 0.08} className="glass-card p-4 sm:p-6">
            <Stars count={item.rating} />
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-slate-600">&ldquo;{item.review}&rdquo;</p>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-semibold text-slate-900">{item.name}</p>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.14em] text-slate-500">Verified Patient</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

import Link from 'next/link';
import { ArrowRight, BadgeCheck, ShieldCheck, Users } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import SectionHeading from '@/components/SectionHeading';
import ServiceIcon from '@/components/ServiceIcon';
import AppointmentForm from '@/components/AppointmentForm';
import DoctorCard from '@/components/DoctorCard';
import Stars from '@/components/Stars';
import { clinicInfo, doctors, specialities, testimonials, blogPosts } from '@/data/siteData';

export default function HomePage() {
  return (
    <>
      <section className="bg-hero-glow border-b border-sky-100">
        <div className="main-container grid items-center gap-6 py-12 sm:gap-8 sm:py-16 lg:grid-cols-2 lg:gap-10 lg:py-24">
          <FadeIn>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
              <BadgeCheck className="h-4 w-4" /> NABH-inspired Care Standards
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Advanced Healthcare You Can Trust
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Experience premium multi-speciality care in Chennai with expert doctors, advanced diagnostics, and patient-first treatment plans.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/appointment" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                Book Appointment
              </Link>
              <a href={clinicInfo.phoneLink} className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-teal-500 hover:text-teal-700">
                Call Now
              </a>
            </div>
            <div className="mt-8 grid max-w-lg grid-cols-1 gap-3 sm:mt-10 sm:gap-4 sm:grid-cols-3">
              <TrustStat label="Experience" value={clinicInfo.yearsExperience} />
              <TrustStat label="Patients" value={clinicInfo.patientsServed} />
              <TrustStat label="Specialists" value={clinicInfo.specialistDoctors} />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <AppointmentForm compact />
          </FadeIn>
        </div>
      </section>

      <section className="main-container py-12 sm:py-16 lg:py-20">
        <SectionHeading
          eyebrow="Specialities"
          title="Complete care under one trusted roof"
          description="From preventive consultations to specialist treatment, we deliver precise care with modern infrastructure and compassionate teams."
        />
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {specialities.map((service, index) => (
            <FadeIn key={service.name} delay={index * 0.07} className="glass-card p-4 sm:p-6">
              <div className="mb-3 sm:mb-4 inline-flex rounded-lg sm:rounded-xl bg-teal-50 p-2.5 sm:p-3 text-teal-700">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900">{service.name}</h3>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">{service.description}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-sky-50/60 py-12 sm:py-16 lg:py-20">
        <div className="main-container">
          <SectionHeading
            eyebrow="Expert Team"
            title="Meet our experienced specialists"
            description="Our consultants combine clinical expertise with transparent communication to ensure confident treatment decisions."
          />
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {doctors.map((doctor, index) => (
              <FadeIn key={doctor.name} delay={index * 0.08}>
                <DoctorCard doctor={doctor} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="main-container py-12 sm:py-16 lg:py-20">
        <SectionHeading
          eyebrow="Patient Stories"
          title="Trusted by families across Chennai"
          description="People choose us for ethical care, clear communication, and dependable outcomes."
        />
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeIn key={item.name} delay={index * 0.08} className="glass-card p-6">
              <Stars count={item.rating} />
              <p className="mt-4 text-sm leading-relaxed text-slate-600">&ldquo;{item.review}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-slate-900">{item.name}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-y border-sky-100 bg-gradient-to-r from-teal-600 to-sky-500 py-10 sm:py-12 lg:py-14 text-white">
        <div className="main-container grid items-center gap-6 grid-cols-1 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Prioritize your health with specialist-led care today</h2>
            <p className="mt-2 text-sm text-white/90">Same-day slots available for select departments. Call now for immediate assistance.</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href="/appointment" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-teal-700 transition hover:bg-slate-100">
              Book Appointment
            </Link>
            <a href={clinicInfo.phoneLink} className="rounded-full border border-white/80 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Call {clinicInfo.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="main-container py-12 sm:py-16 lg:py-20">
        <SectionHeading
          eyebrow="Health Blog"
          title="Evidence-backed wellness insights"
          description="Read practical medical guidance from our experts for preventive and long-term health management."
        />
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.05} className="glass-card p-6">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-sky-600">{post.date}</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{post.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
              <Link href="/blog" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700">
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}

function TrustStat({ label, value }) {
  return (
    <div className="glass-card p-4">
      <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}

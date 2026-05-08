import SectionHeading from '@/components/SectionHeading';
import DoctorCard from '@/components/DoctorCard';
import FadeIn from '@/components/FadeIn';
import { doctors } from '@/data/siteData';

export const metadata = {
  title: 'About Us',
  description: 'Learn about Rana Clinic & Pharmacy, our mission, values, and trusted healthcare support in Kolathur, Chennai.'
};

export default function AboutPage() {
  return (
    <>
      <section className="main-container py-12 sm:py-16 lg:py-20">
        <SectionHeading
          eyebrow="About Rana"
          title="Your trusted neighborhood clinic and pharmacy"
          description="Rana Clinic & Pharmacy was built to offer families in Kolathur reliable healthcare access, quality medicines, and patient-first guidance in one place."
        />
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Our Mission',
              body: 'Deliver accessible specialist care with ethical treatment decisions and measurable outcomes.'
            },
            {
              title: 'Our Vision',
              body: 'To be Chennai\'s most trusted destination for integrated preventive and speciality healthcare.'
            },
            {
              title: 'Our Values',
              body: 'Integrity, empathy, medical precision, and proactive communication at every touchpoint.'
            }
          ].map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08} className="glass-card p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">{item.body}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-sky-50/60 py-12 sm:py-16 lg:py-20">
        <div className="main-container">
          <SectionHeading
            eyebrow="Leadership Team"
            title="Doctors who combine empathy and expertise"
            description="Every consultant is handpicked for strong credentials, patient-first communication, and proven clinical outcomes."
          />
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {doctors.map((doctor, index) => (
              <FadeIn key={doctor.name} delay={index * 0.08}>
                <DoctorCard doctor={doctor} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

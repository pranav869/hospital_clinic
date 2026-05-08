import SectionHeading from '@/components/SectionHeading';
import DoctorCard from '@/components/DoctorCard';
import FadeIn from '@/components/FadeIn';
import { doctors } from '@/data/siteData';

export const metadata = {
  title: 'Doctors',
  description: 'Meet expert doctors at Rana Clinic & Pharmacy, Kolathur Chennai with detailed profiles and consultation timings.'
};

export default function DoctorsPage() {
  return (
    <section className="main-container py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow="Our Doctors"
        title="Specialists trusted by Chennai families"
        description="Explore doctor profiles, expertise, and consultation schedules to choose the right specialist for your needs."
      />
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {doctors.map((doctor, index) => (
          <FadeIn key={doctor.name} delay={index * 0.08}>
            <DoctorCard doctor={doctor} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

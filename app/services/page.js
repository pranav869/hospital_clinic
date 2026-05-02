import FadeIn from '@/components/FadeIn';
import SectionHeading from '@/components/SectionHeading';
import ServiceIcon from '@/components/ServiceIcon';
import { specialities } from '@/data/siteData';

export const metadata = {
  title: 'Services',
  description: 'Explore cardiology, dermatology, general medicine, orthopaedics, paediatrics and ENT services at Astera Clinic Chennai.'
};

export default function ServicesPage() {
  return (
    <section className="main-container py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow="Our Services"
        title="Speciality departments for every stage of care"
        description="We provide diagnostics, treatment, and follow-up support through coordinated specialist teams and modern protocols."
      />
      <div className="space-y-4 sm:space-y-5">
        {specialities.map((service, index) => (
          <FadeIn key={service.name} delay={index * 0.06} className="glass-card p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 sm:flex-row sm:items-start">
              <div className="inline-flex rounded-2xl bg-teal-50 p-3 sm:p-4 text-teal-700">
                <ServiceIcon name={service.icon} className="h-7 sm:h-8 w-7 sm:w-8" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">{service.name}</h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base leading-relaxed text-slate-600">{service.description}</p>
                <ul className="mt-3 sm:mt-4 grid gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-700 grid-cols-1 sm:grid-cols-2">
                  <li>• Personalized consultation and risk assessment</li>
                  <li>• Advanced diagnostics and specialist review</li>
                  <li>• Transparent treatment pathway</li>
                  <li>• Follow-up and preventive care planning</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

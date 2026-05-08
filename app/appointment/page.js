import { PhoneCall } from 'lucide-react';
import AppointmentForm from '@/components/AppointmentForm';
import SectionHeading from '@/components/SectionHeading';
import { clinicInfo } from '@/data/siteData';

export const metadata = {
  title: 'Book Appointment',
  description: 'Book an appointment online at Rana Clinic & Pharmacy, Kolathur Chennai through secure form, WhatsApp, or direct call support.'
};

export default function AppointmentPage() {
  return (
    <section className="main-container py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow="Appointment"
        title="Book your specialist consultation in under 60 seconds"
        description="Choose your department, preferred slot, and our care team will confirm availability immediately."
      />
      <div className="mx-auto grid max-w-5xl gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-[1.3fr_1fr]">
        <AppointmentForm />
        <aside className="glass-card space-y-3 sm:space-y-4 p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-slate-900">Need urgent support?</h3>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-600">For emergency symptoms, call our care desk immediately and we will connect you with the right specialist.</p>
          <a href={clinicInfo.phoneLink} className="inline-flex items-center gap-2 rounded-lg sm:rounded-full bg-slate-900 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white">
            <PhoneCall className="h-4 w-4" />
            Call {clinicInfo.phone}
          </a>
          <a
            href={clinicInfo.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="block rounded-lg sm:rounded-full border border-teal-200 px-4 sm:px-5 py-2.5 sm:py-3 text-center text-xs sm:text-sm font-semibold text-teal-700"
          >
            Book via WhatsApp
          </a>
        </aside>
      </div>
    </section>
  );
}

import { Clock3, Mail, MapPinned, PhoneCall } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { clinicInfo } from '@/data/siteData';

export const metadata = {
  title: 'Contact Us',
  description: 'Get clinic address, timings, map, phone, and email details for Astera Clinic Chennai.'
};

export default function ContactPage() {
  return (
    <section className="main-container py-12 sm:py-16 lg:py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Visit our Chennai clinic"
        description="Conveniently located in Nungambakkam with easy appointment support on call and WhatsApp."
      />

      <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-[1fr_1.4fr]">
        <div className="glass-card space-y-4 sm:space-y-5 p-4 sm:p-6">
          <InfoRow icon={MapPinned} text={clinicInfo.address} />
          <InfoRow icon={PhoneCall} text={clinicInfo.phone} link={clinicInfo.phoneLink} />
          <InfoRow icon={Mail} text={clinicInfo.email} link={`mailto:${clinicInfo.email}`} />
          <InfoRow icon={Clock3} text={clinicInfo.timings} />
        </div>

        <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-sky-100 shadow-soft">
          <iframe
            title="Astera Clinic Chennai Location"
            src="https://maps.google.com/maps?q=nungambakkam%20chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="h-64 sm:h-80 lg:h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, text, link }) {
  const content = link ? (
    <a href={link} className="text-xs sm:text-sm leading-relaxed text-slate-700 transition hover:text-teal-700">{text}</a>
  ) : (
    <p className="text-xs sm:text-sm leading-relaxed text-slate-700">{text}</p>
  );

  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 rounded-lg bg-sky-50 p-2 text-sky-700">
        <Icon className="h-4 w-4" />
      </span>
      {content}
    </div>
  );
}

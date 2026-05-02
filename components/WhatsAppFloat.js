import { MessageCircle } from 'lucide-react';
import { clinicInfo } from '@/data/siteData';

export default function WhatsAppFloat() {
  return (
    <a
      href={clinicInfo.whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 inline-flex items-center gap-2 rounded-full bg-teal-500 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-teal-500/35 transition hover:-translate-y-1 hover:bg-teal-600 active:scale-95"
    >
      <MessageCircle className="h-4 w-4" />
      WhatsApp
    </a>
  );
}

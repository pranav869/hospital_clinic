import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { clinicInfo } from '@/data/siteData';

export const metadata = {
  metadataBase: new URL('https://www.asteraclinic.in'),
  title: {
    default: 'Astera Multi-Speciality Clinic | Premium Healthcare in Chennai',
    template: '%s | Astera Clinic Chennai'
  },
  description: 'Astera Multi-Speciality Clinic offers trusted, advanced healthcare in Chennai with expert doctors, fast appointments, and compassionate care.',
  keywords: ['multi-speciality clinic Chennai', 'best doctors in Chennai', 'clinic appointment Chennai', 'cardiology Chennai', 'dermatology Chennai'],
  openGraph: {
    title: 'Astera Multi-Speciality Clinic Chennai',
    description: 'Advanced healthcare you can trust. Book appointments with expert specialists in Chennai.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.asteraclinic.in'
  },
  alternates: {
    canonical: '/'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: clinicInfo.name,
  url: 'https://www.asteraclinic.in',
  image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1400&q=80',
  telephone: clinicInfo.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No. 128, Khader Nawaz Khan Road, Nungambakkam',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600034',
    addressCountry: 'IN'
  },
  openingHours: 'Mo-Sa 07:00-21:00',
  areaServed: 'Chennai',
  medicalSpecialty: ['Cardiology', 'Dermatology', 'General Medicine', 'Orthopaedics', 'Paediatrics', 'ENT']
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const BASE_URL = 'https://hospital-clinic-bice.vercel.app';

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Rana Clinic & Pharmacy Kolathur Chennai | Book Appointment Online',
    template: '%s | Rana Clinic & Pharmacy'
  },
  description: 'Book appointments with trusted doctors at Rana Clinic & Pharmacy in Kolathur, Chennai. Quality medications, expert consultations, and WhatsApp booking available.',
  keywords: [
    'Rana Clinic & Pharmacy',
    'pharmacy in Kolathur Chennai',
    'clinic in Kolathur Chennai',
    'book doctor appointment Kolathur',
    'healthcare services Kolathur',
    'trusted clinic Chennai',
    'cardiology Chennai',
    'dermatology clinic Chennai',
    'orthopaedic doctor Chennai',
    'paediatrics Chennai',
    'ENT specialist Chennai',
    'general physician Chennai'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
  alternates: {
    canonical: BASE_URL
  },
  openGraph: {
    title: 'Rana Clinic & Pharmacy Kolathur Chennai | Book Appointment Online',
    description: 'Trusted healthcare destination in Kolathur, Chennai offering quality medications, doctor consultations, and WhatsApp booking support.',
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    siteName: 'Rana Clinic & Pharmacy',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Rana Clinic & Pharmacy Kolathur Chennai'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rana Clinic & Pharmacy Kolathur Chennai',
    description: 'Trusted healthcare destination in Kolathur, Chennai for consultations, medicines, and appointment booking.',
    images: ['https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80']
  },
  verification: {
    google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN'
  }
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['MedicalClinic', 'LocalBusiness'],
  '@id': `${BASE_URL}/#clinic`,
  name: 'Rana Clinic & Pharmacy',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1400&q=80',
  telephone: '+919500004361',
  email: 'contact@ranaclinic.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '11 A Sri Venkateshya Nagar, 2nd Extension, 40-feet Road, Vinayakapuram, Kolathur',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600099',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.125,
    longitude: 80.212
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '21:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '09:00',
      closes: '13:00'
    }
  ],
  areaServed: [
    { '@type': 'City', name: 'Chennai' },
    { '@type': 'AdministrativeArea', name: 'Kolathur' },
    { '@type': 'AdministrativeArea', name: 'Vinayakapuram' },
    { '@type': 'AdministrativeArea', name: 'Perambur' },
    { '@type': 'AdministrativeArea', name: 'Retteri' }
  ],
  medicalSpecialty: ['Cardiology', 'Dermatology', 'General Medicine', 'Orthopaedics', 'Paediatrics', 'ENT'],
  priceRange: '₹₹',
  hasMap: 'https://maps.google.com/maps?q=vinayakapuram+kolathur+chennai',
  sameAs: [BASE_URL]
};

const doctorsSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Dr. Arjun Raman',
    jobTitle: 'Consultant Cardiologist',
    description: 'MD, DM (Cardiology), Fellowship - Interventional Cardiology. 16 years of experience.',
    worksFor: { '@id': `${BASE_URL}/#clinic` },
    medicalSpecialty: 'Cardiology',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80'
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Dr. Nivetha S',
    jobTitle: 'Dermatologist',
    description: 'MD (Dermatology), Fellowship - Aesthetic Medicine. 11 years of experience.',
    worksFor: { '@id': `${BASE_URL}/#clinic` },
    medicalSpecialty: 'Dermatology',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80'
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Dr. Karthik M',
    jobTitle: 'General Physician',
    description: 'MD (Internal Medicine), Diabetology Certified. 14 years of experience.',
    worksFor: { '@id': `${BASE_URL}/#clinic` },
    medicalSpecialty: 'GeneralPractice',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80'
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Dr. Priya Narayanan',
    jobTitle: 'Orthopaedic Surgeon',
    description: 'MS (Ortho), Fellowship - Sports Medicine. 13 years of experience.',
    worksFor: { '@id': `${BASE_URL}/#clinic` },
    medicalSpecialty: 'Orthopedic',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80'
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I book an appointment at Rana Clinic & Pharmacy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can book an appointment at Rana Clinic & Pharmacy by filling the online form on our website, calling us at +91 9500004361, or sending a WhatsApp message. Same-day slots are available for select departments.'
      }
    },
    {
      '@type': 'Question',
      name: 'What services are available at Rana Clinic & Pharmacy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rana Clinic & Pharmacy offers specialist support in Cardiology, Dermatology, General Medicine, Orthopaedics, Paediatrics, and ENT along with pharmacy guidance and follow-up care.'
      }
    },
    {
      '@type': 'Question',
      name: 'Where is Rana Clinic & Pharmacy located in Chennai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rana Clinic & Pharmacy is located at 11 A Sri Venkateshya Nagar, 2nd Extension, 40-feet Road, Vinayakapuram, Kolathur, Chennai, Tamil Nadu 600099.'
      }
    },
    {
      '@type': 'Question',
      name: 'What are the clinic timings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rana Clinic & Pharmacy is open Monday to Saturday from 8:00 AM to 9:00 PM, and on Sundays from 9:00 AM to 1:00 PM.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is WhatsApp booking available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can book appointments via WhatsApp by messaging us directly. Our care team will confirm your slot and specialist availability promptly.'
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#0d9488" />
        <link rel="canonical" href={BASE_URL} />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorsSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

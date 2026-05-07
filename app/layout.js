import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const BASE_URL = 'https://www.asteraclinic.in';

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Astera Multi-Speciality Clinic Chennai | Book Appointment Online',
    template: '%s | Astera Clinic Chennai'
  },
  description: 'Book appointments with expert doctors at Astera Multi-Speciality Clinic in Chennai. Specialists in cardiology, dermatology, orthopaedics and more. WhatsApp booking available.',
  keywords: [
    'multi-speciality clinic Chennai',
    'best doctors in Chennai',
    'clinic in Nungambakkam Chennai',
    'doctor in Chennai',
    'book doctor appointment Chennai',
    'specialist hospital North Chennai',
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
    title: 'Astera Multi-Speciality Clinic Chennai | Book Appointment Online',
    description: 'Book appointments with expert doctors at Astera Multi-Speciality Clinic in Chennai. Cardiology, dermatology, orthopaedics and more. WhatsApp booking available.',
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    siteName: 'Astera Multi-Speciality Clinic',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Astera Multi-Speciality Clinic Chennai'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astera Multi-Speciality Clinic Chennai',
    description: 'Book appointments with expert doctors at Astera Clinic Chennai. Specialists in cardiology, dermatology, orthopaedics and more.',
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
  name: 'Astera Multi-Speciality Clinic',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1400&q=80',
  telephone: '+914440128899',
  email: 'care@asteraclinic.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No. 128, Khader Nawaz Khan Road, Nungambakkam',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600034',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.0569,
    longitude: 80.2425
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '21:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '08:00',
      closes: '14:00'
    }
  ],
  areaServed: [
    { '@type': 'City', name: 'Chennai' },
    { '@type': 'AdministrativeArea', name: 'Nungambakkam' },
    { '@type': 'AdministrativeArea', name: 'Egmore' },
    { '@type': 'AdministrativeArea', name: 'Anna Nagar' },
    { '@type': 'AdministrativeArea', name: 'Kilpauk' }
  ],
  medicalSpecialty: ['Cardiology', 'Dermatology', 'General Medicine', 'Orthopaedics', 'Paediatrics', 'ENT'],
  priceRange: '₹₹',
  hasMap: 'https://maps.google.com/maps?q=nungambakkam+chennai',
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
      name: 'How do I book an appointment at Astera Clinic Chennai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can book an appointment at Astera Multi-Speciality Clinic Chennai by filling the online form on our website, calling us at +91 44 4012 8899, or sending a WhatsApp message. Same-day slots are available for select departments.'
      }
    },
    {
      '@type': 'Question',
      name: 'What specialist doctors are available at Astera Clinic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Astera Clinic has specialist doctors in Cardiology, Dermatology, General Medicine, Orthopaedics, Paediatrics, and ENT. All consultants have 10+ years of experience.'
      }
    },
    {
      '@type': 'Question',
      name: 'Where is Astera Multi-Speciality Clinic located in Chennai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Astera Clinic is located at No. 128, Khader Nawaz Khan Road, Nungambakkam, Chennai, Tamil Nadu 600034. We are easily accessible from Anna Nagar, Egmore, Kilpauk and central Chennai.'
      }
    },
    {
      '@type': 'Question',
      name: 'What are the clinic timings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Astera Clinic is open Monday to Saturday from 7:00 AM to 9:00 PM, and on Sundays from 8:00 AM to 2:00 PM.'
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

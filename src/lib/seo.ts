import { Metadata } from 'next'

export const siteConfig = {
  name: 'Olaris Consulting Limited',
  description:
    'Enterprise fleet intelligence platform with AI/ML predictive analytics. Serving 6+ major UK organizations with 293+ vehicles, 1.9M+ records processed, delivering >£250K annual value. 100% GDPR compliant with bank-level security.',
  url: 'https://olaris.co.uk',
  ogImage: 'https://olaris.co.uk/og-image.jpg',
  links: {
    linkedin: 'https://linkedin.com/company/olaris-consulting-limited',
    twitter: 'https://twitter.com/olarisconsult',
  },
  contact: {
    email: 'alan@olaris.co.uk',
    phone: '+44-7919-35-40-68',
    address: {
      street: '10 Bull Street, Aston',
      city: 'Nr Bampton',
      postcode: 'OX18 2DN',
      country: 'United Kingdom',
    },
  },
}

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      'fleet management UK',
      'AI predictive maintenance UK',
      'enterprise fleet intelligence platform',
      'GDPR compliant fleet management',
      'zero-emission fleet transition',
      'multi-tenant fleet SaaS',
      'AI driver safety scoring',
      'SECR compliance automation',
      'EV TCO calculator',
      'fleet carbon emissions tracking',
      'XGBoost predictive maintenance',
      'bank-level security fleet',
      'Aston consulting',
      'Oxfordshire consulting',
      'zero-emission vehicles',
      'ESG solutions',
      'blockchain fleet management',
      'vehicle leasing',
      'fleet optimization',
      'sustainable mobility',
      'growth strategy',
      'M&A advisory',
    ],
    authors: [{ name: 'Alan Carreras', url: siteConfig.url }],
    creator: 'Olaris Consulting Limited',
    openGraph: {
      type: 'website',
      locale: 'en_GB',
      url: siteConfig.url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@olarisconsult',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}

// JSON-LD structured data schemas
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.contact.phone,
    contactType: 'customer service',
    email: siteConfig.contact.email,
    areaServed: 'GB',
    availableLanguage: ['English'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.contact.address.street,
    addressLocality: siteConfig.contact.address.city,
    postalCode: siteConfig.contact.address.postcode,
    addressCountry: 'GB',
  },
  sameAs: [siteConfig.links.linkedin, siteConfig.links.twitter],
  founder: {
    '@type': 'Person',
    name: 'Alan Carreras',
    jobTitle: 'Founder & CEO',
  },
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteConfig.name,
  image: `${siteConfig.url}/logo.png`,
  '@id': siteConfig.url,
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  priceRange: '££',
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.contact.address.street,
    addressLocality: siteConfig.contact.address.city,
    postalCode: siteConfig.contact.address.postcode,
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.7134, // Aston (Nr Bampton) coordinates
    longitude: -1.5498,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
}

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Fleet Management Consulting',
  provider: {
    '@type': 'Organization',
    name: siteConfig.name,
  },
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Fleet Management Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Fleet Intelligence',
          description:
            'Machine learning-powered predictive maintenance and driver safety scoring delivering measurable ROI. XGBoost ML models analyzing 1.9M+ telemetry records.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Zero-Emission Transformation',
          description:
            '5-year TCO analysis, 3-phase transition roadmaps, and charging infrastructure planning for EV fleets with proven >£50K engagement value.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'ESG & Carbon Intelligence',
          description:
            'Full Scope 1/2/3 emissions tracking, SECR compliance automation, and carbon offset marketplace integration delivering >£4K annual compliance time savings.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Enterprise Integration & Security',
          description:
            'Multi-tenant SaaS architecture, 100% GDPR compliance, webhook infrastructure, and bank-level security with JWT + Row-Level Security.',
        },
      },
    ],
  },
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is fleet management in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fleet management in the UK involves optimising vehicle leasing, tracking, and operations to reduce costs and ensure compliance. Olaris Consulting Limited offers tailored fleet management solutions that help businesses reduce costs by up to 10% while improving sustainability.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can blockchain help with ESG compliance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Blockchain ensures transparency and traceability for ESG compliance by securely tracking environmental, social, and governance metrics. Olaris Consulting's blockchain-based ESG solution provides 100% transparency and immutable record-keeping.",
      },
    },
    {
      '@type': 'Question',
      name: 'What services does Olaris Consulting offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Olaris Consulting offers fleet management consulting, expansion strategy, M&A advisory, and digital integration services including blockchain ESG solutions. We specialize in helping UK businesses optimize their fleet operations and achieve sustainable growth.',
      },
    },
  ],
}

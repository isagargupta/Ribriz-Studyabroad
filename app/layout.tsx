import './globals.css'
import { Inter } from 'next/font/google'
import BrowserGuard from './_client/BrowserGuard'
import PerformanceMonitor from './components/PerformanceMonitor'
import FacebookPixel from './components/FacebookPixel'
import GoogleAnalytics from './components/GoogleAnalytics'

// Optimize font loading
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

export const metadata = {
  title: {
    default: 'Study Abroad & Jobs in Europe for Indians | Ribriz Overseas',
    template: '%s | Ribriz Overseas - Study Abroad & Jobs in Europe for Indians'
  },
  description: 'Top study abroad opportunities in UK, USA, Australia, Canada, Germany, Poland for Indian students. Jobs in Europe for Indians - Poland, Lithuania, Slovakia. Scholarships & work permits.',
  keywords: [
    'study abroad for Indian students', 'jobs in Europe for Indians', 'study abroad in UK for Indians',
    'study abroad in USA for Indians', 'study abroad in Australia for Indians', 'study abroad in Canada for Indians',
    'study abroad in Germany for Indians', 'study abroad in Poland for Indians', 'jobs in Poland for Indians',
    'jobs in Lithuania for Indians', 'jobs in Slovakia for Indians', 'jobs in Germany for Indians',
    'scholarships for Indian students', 'work permits for Indians in Europe', 'affordable study abroad for Indians',
    'English taught programs abroad', 'top universities abroad for Indians', 'warehouse jobs in Europe',
    'construction jobs abroad', 'truck driver jobs abroad', 'welder jobs abroad', 'factory jobs abroad',
    'skilled jobs abroad', 'unskilled jobs abroad', 'study abroad cost for Indians', 'student visa for Indians'
  ],
  authors: [{ name: 'Ribriz Overseas' }],
  creator: 'Ribriz Overseas',
  publisher: 'Ribriz Overseas',
  metadataBase: new URL('https://ribriz.com'),
  alternates: {
    canonical: 'https://ribriz.com',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ribriz.com',
    title: 'Study Abroad & Jobs in Europe for Indians | Ribriz Overseas',
    description: 'Top study abroad opportunities in UK, USA, Australia, Canada, Germany, Poland for Indian students. Jobs in Europe for Indians - Poland, Lithuania, Slovakia.',
    siteName: 'Ribriz Overseas',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Ribriz Overseas - Study Abroad & Jobs in Europe for Indians',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study Abroad & Jobs in Europe for Indians | Ribriz Overseas',
    description: 'Top study abroad opportunities in UK, USA, Australia, Canada, Germany, Poland for Indian students. Jobs in Europe for Indians.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ribriz Overseas",
    "url": "https://ribriz.com",
    "logo": "https://ribriz.com/logo.png",
    "description": "Premium international career placement services for study abroad and global job opportunities for Indian students",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8076823071",
      "contactType": "customer service",
      "email": "hello@ribriz.com"
    },
    "sameAs": [
      "https://ribriz.pl"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Study Abroad and Job Placement Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Study Abroad Consulting",
            "description": "Expert guidance for international education with university partnerships and scholarship opportunities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "International Job Placement",
            "description": "Connect with verified employers across Poland, Germany, Lithuania, Czechia, and UAE for permanent positions"
          }
        }
      ]
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
      </head>
      <body className={inter.className}>
        <BrowserGuard>
          {children}
          <PerformanceMonitor />
          <FacebookPixel pixelId="3285111401638253" />
          <GoogleAnalytics measurementId="AW-17410013108" />
        </BrowserGuard>
      </body>
    </html>
  )
}
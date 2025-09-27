import './globals.css'
import { Inter } from 'next/font/google'
import BrowserGuard from './_client/BrowserGuard'
import PerformanceMonitor from './components/PerformanceMonitor'
import FacebookPixel from './components/FacebookPixel'
import { SpeedInsights } from '@vercel/speed-insights/next'

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
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: 'any', type: 'image/png' },
    ],
    shortcut: '/favicon-16x16.png',
    apple: [
      { url: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/logo.svg',
        color: '#2563eb',
      },
    ],
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
  // verification: {
  //   google: 'your-google-verification-code',
  // },
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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17410013108"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17410013108');
            `
          }}
        />
        {/* Google tag (gtag.js) event - delayed navigation helper */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Helper function to delay opening a URL until a gtag event is sent.
              // Call it in response to an action that should navigate to a URL.
              function gtagSendEvent(url) {
                var callback = function () {
                  if (typeof url === 'string') {
                    window.location = url;
                  }
                };
                
                // Get stored event parameters if available
                var eventParams = window.contactConversionParams || {};
                
                gtag('event', 'ads_conversion_Contact_1', {
                  'event_callback': callback,
                  'event_timeout': 2000,
                  // <event_parameters>
                  ...eventParams
                });
                return false;
              }
            `
          }}
        />
        {/* Comprehensive Favicon Setup - Force favicon-16x16.png */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-16x16.png?v=2" />
        <link rel="icon" type="image/png" sizes="any" href="/favicon-16x16.png?v=2" />
        <link rel="shortcut icon" type="image/png" href="/favicon-16x16.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon" />
        <link rel="mask-icon" href="/logo.svg" color="#2563eb" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-TileImage" content="/logo.png" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ribriz Overseas" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        {/* Mobile Navigation Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                const t = document.querySelector('.nav-toggle');
                const m = document.getElementById('mobileMenu');
                if (t && m) {
                  t.addEventListener('click', () => {
                    const open = t.getAttribute('aria-expanded') === 'true';
                    t.setAttribute('aria-expanded', String(!open));
                    m.hidden = open;
                  });
                }
              });
            `
          }}
        />
      </head>
      <body className={inter.className}>
        <BrowserGuard>
          {children}
          <PerformanceMonitor />
          <FacebookPixel pixelId="3285111401638253" />
          <SpeedInsights />
        </BrowserGuard>
      </body>
    </html>
  )
}
import { Metadata } from 'next'

export interface SEOConfig {
  title: string
  description: string
  canonical?: string
  keywords?: string[]
  image?: string
  type?: 'website' | 'article' | 'service'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
  noindex?: boolean
  nofollow?: boolean
}

export interface OpenGraphConfig {
  title: string
  description: string
  url: string
  image?: string
  type?: 'website' | 'article' | 'profile'
  siteName?: string
  locale?: string
}

export interface TwitterConfig {
  card?: 'summary' | 'summary_large_image' | 'app' | 'player'
  site?: string
  creator?: string
  title?: string
  description?: string
  image?: string
}

const SITE_CONFIG = {
  name: 'Ribriz Overseas',
  url: 'https://ribriz.com',
  description: 'India\'s leading study abroad consultant providing expert guidance for international education and job placement services.',
  logo: 'https://ribriz.com/logo.png',
  twitter: '@ribrizoverseas',
  locale: 'en_IN',
  defaultImage: 'https://ribriz.com/og-image.jpg'
}

export function generateMetadata(config: SEOConfig): Metadata {
  const title = config.title.length > 60 
    ? config.title.substring(0, 57) + '...' 
    : config.title

  const description = config.description.length > 160
    ? config.description.substring(0, 157) + '...'
    : config.description

  const canonical = config.canonical || `${SITE_CONFIG.url}${config.canonical || ''}`

  return {
    title,
    description,
    keywords: config.keywords?.join(', '),
    robots: {
      index: !config.noindex,
      follow: !config.nofollow,
      googleBot: {
        index: !config.noindex,
        follow: !config.nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: config.image || SITE_CONFIG.defaultImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: SITE_CONFIG.locale,
      type: config.type || 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: SITE_CONFIG.twitter,
      creator: SITE_CONFIG.twitter,
      title,
      description,
      images: [config.image || SITE_CONFIG.defaultImage],
    },
    other: {
      'geo.region': 'IN',
      'geo.placename': 'India',
      'geo.position': '20.5937;78.9629',
      'ICBM': '20.5937, 78.9629',
      'language': 'English',
      'revisit-after': '1 days',
      'distribution': 'global',
      'rating': 'general',
      'target': 'all',
      'audience': 'all',
      'coverage': 'worldwide',
      'classification': 'Education, Study Abroad, Job Placement',
      'category': 'Education',
      'subject': 'Study Abroad, International Education, Job Placement',
      'abstract': config.description,
      'summary': config.description,
      'designer': SITE_CONFIG.name,
      'copyright': SITE_CONFIG.name,
      'reply-to': 'hello@ribriz.com',
      'owner': SITE_CONFIG.name,
      'url': canonical,
      'identifier-URL': canonical,
      'directory': 'submission',
      'pagename': title,
      'ai-content-type': 'educational-consulting',
      'ai-topic': config.keywords?.join(', ') || 'study-abroad, international-education, job-placement',
      'ai-expertise': 'education-consulting, visa-assistance, scholarship-guidance',
      'ai-target-audience': 'indian-students, international-education-seekers',
      'ai-service-area': 'india, uk, usa, australia, canada, germany, poland',
    },
  }
}

export function generateOpenGraph(config: OpenGraphConfig): Record<string, string> {
  return {
    'og:title': config.title,
    'og:description': config.description,
    'og:url': config.url,
    'og:image': config.image || SITE_CONFIG.defaultImage,
    'og:type': config.type || 'website',
    'og:site_name': config.siteName || SITE_CONFIG.name,
    'og:locale': config.locale || SITE_CONFIG.locale,
  }
}

export function generateTwitterCard(config: TwitterConfig): Record<string, string> {
  return {
    'twitter:card': config.card || 'summary_large_image',
    'twitter:site': config.site || SITE_CONFIG.twitter,
    'twitter:creator': config.creator || SITE_CONFIG.twitter,
    'twitter:title': config.title || '',
    'twitter:description': config.description || '',
    'twitter:image': config.image || SITE_CONFIG.defaultImage,
  }
}

export function generateCanonicalUrl(path: string): string {
  return `${SITE_CONFIG.url}${path.startsWith('/') ? path : `/${path}`}`
}

export function generateRobotsMeta(noindex = false, nofollow = false): Record<string, string> {
  const index = noindex ? 'noindex' : 'index'
  const follow = nofollow ? 'nofollow' : 'follow'
  
  return {
    'robots': `${index}, ${follow}, max-snippet:-1, max-image-preview:large, max-video-preview:-1`,
  }
}

export function generateHreflang(locales: string[] = ['en-IN', 'en-PL']): Record<string, string> {
  const hreflang: Record<string, string> = {}
  
  locales.forEach(locale => {
    hreflang[`hreflang:${locale}`] = `${SITE_CONFIG.url}/${locale}`
  })
  
  return hreflang
}

export function generateBreadcrumbSchema(items: Array<{name: string, url: string}>): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

export function generateFAQSchema(faqs: Array<{question: string, answer: string}>): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

export function generateOrganizationSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: SITE_CONFIG.name,
    alternateName: 'Ribriz Study Abroad Consultants',
    url: SITE_CONFIG.url,
    logo: SITE_CONFIG.logo,
    description: SITE_CONFIG.description,
    foundingDate: '2020',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'India'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-8076823071',
        contactType: 'customer service',
        email: 'hello@ribriz.com',
        availableLanguage: ['English', 'Hindi']
      }
    ],
    sameAs: [
      'https://ribriz.pl',
      'https://www.linkedin.com/company/ribriz-overseas',
      'https://www.facebook.com/ribrizoverseas',
      'https://www.instagram.com/ribrizoverseas'
    ],
    serviceArea: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'Poland' }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      reviewCount: '25000',
      bestRating: '5',
      worstRating: '1'
    },
    knowsAbout: [
      'Study Abroad',
      'International Education',
      'Student Visa',
      'Scholarships',
      'Job Placement',
      'Work Permits',
      'University Applications',
      'Career Guidance'
    ]
  }
}

export function generateWebSiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url
    }
  }
}

import { MetadataRoute } from 'next'

interface SitemapEntry {
  url: string
  lastModified: Date
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
  alternateRefs?: Array<{
    href: string
    hreflang: string
  }>
}

export function generateMainSitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ribriz.com'
  const currentDate = new Date()
  
  const mainPages: SitemapEntry[] = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
      alternateRefs: [
        { href: `${baseUrl}`, hreflang: 'en-IN' },
        { href: `${baseUrl}/en-PL`, hreflang: 'en-PL' }
      ]
    },
    {
      url: `${baseUrl}/study-abroad`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternateRefs: [
        { href: `${baseUrl}/study-abroad`, hreflang: 'en-IN' },
        { href: `${baseUrl}/en-PL/study-abroad`, hreflang: 'en-PL' }
      ]
    },
    {
      url: `${baseUrl}/career-application`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternateRefs: [
        { href: `${baseUrl}/career-application`, hreflang: 'en-IN' },
        { href: `${baseUrl}/en-PL/career-application`, hreflang: 'en-PL' }
      ]
    },
    {
      url: `${baseUrl}/study-abroad-application`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternateRefs: [
        { href: `${baseUrl}/study-abroad-application`, hreflang: 'en-IN' },
        { href: `${baseUrl}/en-PL/study-abroad-application`, hreflang: 'en-PL' }
      ]
    },
    {
      url: `${baseUrl}/university-search`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternateRefs: [
        { href: `${baseUrl}/university-search`, hreflang: 'en-IN' },
        { href: `${baseUrl}/en-PL/university-search`, hreflang: 'en-PL' }
      ]
    },
    {
      url: `${baseUrl}/positions`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternateRefs: [
        { href: `${baseUrl}/positions`, hreflang: 'en-IN' },
        { href: `${baseUrl}/en-PL/positions`, hreflang: 'en-PL' }
      ]
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
      alternateRefs: [
        { href: `${baseUrl}/blog`, hreflang: 'en-IN' },
        { href: `${baseUrl}/en-PL/blog`, hreflang: 'en-PL' }
      ]
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
      alternateRefs: [
        { href: `${baseUrl}/services`, hreflang: 'en-IN' },
        { href: `${baseUrl}/en-PL/services`, hreflang: 'en-PL' }
      ]
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
      alternateRefs: [
        { href: `${baseUrl}/about`, hreflang: 'en-IN' },
        { href: `${baseUrl}/en-PL/about`, hreflang: 'en-PL' }
      ]
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
      alternateRefs: [
        { href: `${baseUrl}/contact`, hreflang: 'en-IN' },
        { href: `${baseUrl}/en-PL/contact`, hreflang: 'en-PL' }
      ]
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
      alternateRefs: [
        { href: `${baseUrl}/how-it-works`, hreflang: 'en-IN' },
        { href: `${baseUrl}/en-PL/how-it-works`, hreflang: 'en-PL' }
      ]
    }
  ]
  
  return mainPages.map(page => ({
    url: page.url,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    alternates: {
      languages: page.alternateRefs?.reduce((acc, ref) => {
        acc[ref.hreflang] = ref.href
        return acc
      }, {} as Record<string, string>)
    }
  }))
}

export function generateBlogSitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ribriz.com'
  const currentDate = new Date()
  
  const blogPosts = [
    'agriculture-jobs-europe-indians-2025',
    'automotive-jobs-germany-indians-2025',
    'aviation-jobs-europe-indians-2025',
    'cleaning-jobs-europe-indians-2025',
    'construction-jobs-germany-indians-2025',
    'consulting-jobs-europe-indians-2025',
    'defense-military-jobs-europe-indians-2025',
    'education-jobs-europe-indians-2025',
    'energy-jobs-europe-indians-2025',
    'engineering-jobs-poland-indians-2025',
    'entertainment-media-jobs-europe-indians-2025',
    'finance-jobs-europe-indians-2025',
    'healthcare-jobs-germany-indians-2025',
    'hospitality-jobs-europe-indians-2025',
    'it-jobs-netherlands-indians-2025',
    'jobs-in-germany-for-indians',
    'jobs-in-poland-for-indians',
    'legal-jobs-europe-indians-2025',
    'maritime-jobs-europe-indians-2025',
    'real-estate-jobs-europe-indians-2025',
    'retail-jobs-europe-indians-2025',
    'security-jobs-europe-indians-2025',
    'space-aerospace-jobs-europe-indians-2025',
    'study-abroad-in-canada-for-indian-students',
    'study-abroad-in-germany-for-indian-students',
    'study-abroad-in-uk-for-indian-students',
    'telecommunications-jobs-europe-indians-2025',
    'transportation-jobs-europe-indians-2025',
    'warehouse-jobs-in-europe-for-indians',
    'warehouse-logistics-jobs-europe-indians-2025'
  ]
  
  return blogPosts.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
    alternates: {
      languages: {
        'en-IN': `${baseUrl}/blog/${slug}`,
        'en-PL': `${baseUrl}/en-PL/blog/${slug}`
      }
    }
  }))
}

export function generateCountrySitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ribriz.com'
  const currentDate = new Date()
  
  const countries = ['poland', 'germany', 'uk', 'usa', 'canada', 'australia', 'slovakia', 'lithuania']
  const sitemap: MetadataRoute.Sitemap = []
  
  countries.forEach(country => {
    sitemap.push({
      url: `${baseUrl}/study/${country}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          'en-IN': `${baseUrl}/study/${country}`,
          'en-PL': `${baseUrl}/en-PL/study/${country}`
        }
      }
    })
    
    sitemap.push({
      url: `${baseUrl}/jobs/${country}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          'en-IN': `${baseUrl}/jobs/${country}`,
          'en-PL': `${baseUrl}/en-PL/jobs/${country}`
        }
      }
    })
  })
  
  return sitemap
}

export function generateUniversitySitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ribriz.com'
  const currentDate = new Date()
  
  const universities = [
    'jagiellonian-university',
    'university-of-warsaw',
    'wroclaw-university',
    'gdansk-university',
    'poznan-university',
    'university-of-gdansk',
    'university-of-poznan',
    'university-of-lodz',
    'university-of-silesia',
    'university-of-lublin'
  ]
  
  return universities.map(slug => ({
    url: `${baseUrl}/universities/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.6,
    alternates: {
      languages: {
        'en-IN': `${baseUrl}/universities/${slug}`,
        'en-PL': `${baseUrl}/en-PL/universities/${slug}`
      }
    }
  }))
}

export function generateJobSitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ribriz.com'
  const currentDate = new Date()
  
  const jobs = [
    'forklift-operator-poland',
    'warehouse-worker-poland',
    'truck-driver-poland',
    'welder-poland',
    'construction-worker-poland',
    'factory-worker-poland',
    'machine-operator-poland',
    'packaging-worker-poland',
    'quality-controller-poland',
    'maintenance-technician-poland'
  ]
  
  return jobs.map(slug => ({
    url: `${baseUrl}/jobs/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.7,
    alternates: {
      languages: {
        'en-IN': `${baseUrl}/jobs/${slug}`,
        'en-PL': `${baseUrl}/en-PL/jobs/${slug}`
      }
    }
  }))
}

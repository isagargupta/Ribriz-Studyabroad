/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ribriz.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/api/*',
    '/private/*',
    '/admin/*',
    '/_next/*',
    '/static/*',
    '/404',
    '/500'
  ],
  additionalPaths: async (config) => {
    const paths = []
    
    // Add dynamic blog posts
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
    
    blogPosts.forEach(slug => {
      paths.push({
        loc: `/blog/${slug}`,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString()
      })
    })
    
    // Add country pages
    const countries = ['poland', 'germany', 'uk', 'usa', 'canada', 'australia', 'slovakia', 'lithuania']
    
    countries.forEach(country => {
      paths.push({
        loc: `/study/${country}`,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString()
      })
      
      paths.push({
        loc: `/jobs/${country}`,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString()
      })
    })
    
    // Add university pages (example)
    const universities = [
      'jagiellonian-university',
      'university-of-warsaw',
      'wroclaw-university',
      'gdansk-university',
      'poznan-university'
    ]
    
    universities.forEach(university => {
      paths.push({
        loc: `/universities/${university}`,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString()
      })
    })
    
    // Add job pages (example)
    const jobs = [
      'forklift-operator-poland',
      'warehouse-worker-poland',
      'truck-driver-poland',
      'welder-poland',
      'construction-worker-poland'
    ]
    
    jobs.forEach(job => {
      paths.push({
        loc: `/jobs/${job}`,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date().toISOString()
      })
    })
    
    return paths
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/private/*', '/admin/*', '/_next/*', '/static/*']
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/*', '/private/*', '/admin/*']
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/*', '/private/*', '/admin/*']
      }
    ],
    additionalSitemaps: [
      'https://ribriz.com/sitemaps/pages-0.xml',
      'https://ribriz.com/sitemaps/blog-0.xml',
      'https://ribriz.com/sitemaps/jobs-0.xml',
      'https://ribriz.com/sitemaps/universities-0.xml'
    ]
  },
  transform: async (config, path) => {
    // Custom transform for different page types
    const priority = getPriority(path)
    const changefreq = getChangeFreq(path)
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `https://ribriz.com${path}`,
          hreflang: 'en-IN'
        },
        {
          href: `https://ribriz.com/en-PL${path}`,
          hreflang: 'en-PL'
        }
      ]
    }
  }
}

function getPriority(path) {
  if (path === '/') return 1.0
  if (path.startsWith('/study-abroad') || path.startsWith('/career-application')) return 0.9
  if (path.startsWith('/study/') || path.startsWith('/jobs/')) return 0.8
  if (path.startsWith('/blog/')) return 0.7
  if (path.startsWith('/universities/')) return 0.6
  if (path.startsWith('/about') || path.startsWith('/contact')) return 0.5
  return 0.3
}

function getChangeFreq(path) {
  if (path === '/') return 'daily'
  if (path.startsWith('/blog/')) return 'monthly'
  if (path.startsWith('/study/') || path.startsWith('/jobs/')) return 'weekly'
  if (path.startsWith('/universities/')) return 'monthly'
  return 'monthly'
}

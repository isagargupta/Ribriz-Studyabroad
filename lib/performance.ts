import { Metadata } from 'next'

export function generatePerformanceMeta(): Partial<Metadata> {
  return {
    other: {
      'dns-prefetch': 'https://fonts.googleapis.com',
      'preconnect': [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com'
      ].join(', ')
    }
  }
}

export function generatePreloadLinks(): string[] {
  return [
    '<link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>',
    '<link rel="preload" href="/fonts/playfair-display-var.woff2" as="font" type="font/woff2" crossorigin>',
    '<link rel="preload" href="/logo.svg" as="image" type="image/svg+xml">',
  ]
}

export function generateResourceHints(): string[] {
  return [
    '<link rel="dns-prefetch" href="//fonts.googleapis.com">',
    '<link rel="dns-prefetch" href="//fonts.gstatic.com">',
    '<link rel="dns-prefetch" href="//www.google-analytics.com">',
    '<link rel="dns-prefetch" href="//www.googletagmanager.com">',
    '<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
  ]
}

export function generateCriticalCSS(): string {
  return `
    /* Critical CSS for above-the-fold content */
    .hero {
      font-display: swap;
      font-family: 'Inter', system-ui, sans-serif;
    }
    
    .text-fluid-5xl {
      font-size: clamp(2.5rem, 3.5vw + 1.75rem, 3.75rem);
      font-weight: 800;
      letter-spacing: -0.04em;
    }
    
    .bg-gradient-to-br {
      background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
    }
    
    /* Prevent layout shift */
    .aspect-video {
      aspect-ratio: 16 / 9;
    }
    
    .aspect-square {
      aspect-ratio: 1 / 1;
    }
  `
}

export function generateImageOptimizationConfig() {
  return {
    formats: ['image/webp', 'image/avif'],
    quality: 85,
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    priority: true,
    placeholder: 'blur',
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='
  }
}

export function generateLazyLoadingConfig() {
  return {
    loading: 'lazy' as const,
    decoding: 'async' as const,
    fetchPriority: 'auto' as const
  }
}

export function generateWebVitalsConfig() {
  return {
    // Core Web Vitals targets
    LCP: 2.5, // Largest Contentful Paint (seconds)
    FID: 100, // First Input Delay (milliseconds)
    CLS: 0.1, // Cumulative Layout Shift
    FCP: 1.8, // First Contentful Paint (seconds)
    TTFB: 0.6, // Time to First Byte (seconds)
    TBT: 200, // Total Blocking Time (milliseconds)
    SI: 3.4, // Speed Index (seconds)
  }
}

export function generateBundleAnalysisConfig() {
  return {
    analyze: process.env.NODE_ENV === 'development',
    enabled: true,
    analyzerMode: 'static',
    openAnalyzer: false,
    generateStatsFile: true,
    statsFilename: 'bundle-stats.json',
    reportFilename: 'bundle-report.html',
    defaultSizes: 'gzip',
  }
}

export function generateCompressionConfig() {
  return {
    gzip: true,
    brotli: true,
    threshold: 1024,
    minRatio: 0.8,
    filter: (contentType: string) => {
      return /text|javascript|css|svg|json|xml/.test(contentType)
    }
  }
}

export function generateCachingConfig() {
  return {
    static: {
      maxAge: 31536000, // 1 year
      immutable: true
    },
    dynamic: {
      maxAge: 3600, // 1 hour
      staleWhileRevalidate: 86400 // 24 hours
    },
    api: {
      maxAge: 300, // 5 minutes
      staleWhileRevalidate: 3600 // 1 hour
    }
  }
}

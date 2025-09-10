'use client'

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log performance metrics
        const value = 'value' in entry ? (entry.value as number) : 0
        console.log(`${entry.name}: ${value}`)
        
        // Send to analytics (replace with your analytics service)
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', entry.name, {
            value: Math.round(value),
            event_category: 'Web Vitals',
            event_label: entry.name,
            non_interaction: true,
          })
        }
      }
    })

    // Observe Core Web Vitals
    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })

    // Monitor page load performance
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      
      if (navigation) {
        const metrics = {
          'DNS Lookup': navigation.domainLookupEnd - navigation.domainLookupStart,
          'TCP Connection': navigation.connectEnd - navigation.connectStart,
          'TLS Negotiation': navigation.secureConnectionStart > 0 ? navigation.connectEnd - navigation.secureConnectionStart : 0,
          'TTFB': navigation.responseStart - navigation.requestStart,
          'DOM Processing': navigation.domContentLoadedEventEnd - navigation.responseEnd,
          'Page Load': navigation.loadEventEnd - navigation.fetchStart,
        }

        console.log('Performance Metrics:', metrics)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}

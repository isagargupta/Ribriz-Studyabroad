'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

interface GoogleAnalyticsProps {
  measurementId: string
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  useEffect(() => {
    // Load Google Analytics script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script1)

    // Initialize gtag
    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    `
    document.head.appendChild(script2)

    // Initialize gtag function
    window.gtag = window.gtag || function(...args: any[]) {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push(args)
    }

    return () => {
      // Cleanup
      const scripts = document.querySelectorAll(`script[src*="gtag/js?id=${measurementId}"]`)
      scripts.forEach(script => script.remove())
    }
  }, [measurementId])

  return null
}

// Helper functions for tracking events
export const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

export const trackConversion = (conversionId: string, conversionLabel?: string, value?: number, currency?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${conversionId}${conversionLabel ? `/${conversionLabel}` : ''}`,
      value: value,
      currency: currency || 'INR'
    })
  }
}

export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'AW-17410013108', {
      page_path: pagePath,
      page_title: pageTitle
    })
  }
}

'use client'

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
    gtagSendEvent: (url: string) => boolean
    contactConversionParams?: any
  }
}

// Google Analytics is now loaded manually in layout.tsx
// This component is kept for backward compatibility and helper functions
export default function GoogleAnalytics() {
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

// Track contact conversion event
export const trackContactConversion = (eventParameters?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'ads_conversion_Contact_1', {
      // <event_parameters>
      ...eventParameters
    })
  }
}

// Helper function to track contact conversion with delayed navigation
export const trackContactConversionWithNavigation = (url: string, eventParameters?: any) => {
  if (typeof window !== 'undefined' && window.gtagSendEvent) {
    // Store event parameters globally for the gtagSendEvent function
    if (eventParameters) {
      window.contactConversionParams = eventParameters
    }
    return window.gtagSendEvent(url)
  }
  return false
}

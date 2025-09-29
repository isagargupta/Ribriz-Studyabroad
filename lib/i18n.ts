export const LOCALES = {
  'en-IN': {
    code: 'en-IN',
    name: 'English (India)',
    flag: '🇮🇳',
    hreflang: 'en-IN',
    isDefault: true
  },
  'en-PL': {
    code: 'en-PL',
    name: 'English (Poland)',
    flag: '🇵🇱',
    hreflang: 'en-PL',
    isDefault: false
  },
  'hi-IN': {
    code: 'hi-IN',
    name: 'Hindi (India)',
    flag: '🇮🇳',
    hreflang: 'hi-IN',
    isDefault: false
  }
} as const

export type Locale = keyof typeof LOCALES

export const DEFAULT_LOCALE: Locale = 'en-IN'

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]
  
  if (firstSegment && firstSegment in LOCALES) {
    return firstSegment as Locale
  }
  
  return DEFAULT_LOCALE
}

export function getLocalizedPath(pathname: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) {
    return pathname
  }
  
  const segments = pathname.split('/').filter(Boolean)
  const hasLocale = segments[0] && segments[0] in LOCALES
  
  if (hasLocale) {
    segments[0] = locale
  } else {
    segments.unshift(locale)
  }
  
  return '/' + segments.join('/')
}

export function removeLocaleFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]
  
  if (firstSegment && firstSegment in LOCALES) {
    segments.shift()
  }
  
  return '/' + segments.join('/')
}

export function generateHreflangLinks(pathname: string): Array<{hreflang: string, href: string}> {
  const cleanPath = removeLocaleFromPath(pathname)
  
  return Object.values(LOCALES).map(locale => ({
    hreflang: locale.hreflang,
    href: getLocalizedPath(cleanPath, locale.code as Locale)
  }))
}

export function getAlternateLocales(currentLocale: Locale): Locale[] {
  return Object.keys(LOCALES).filter(locale => locale !== currentLocale) as Locale[]
}

export function getLocaleDirection(locale: Locale): 'ltr' | 'rtl' {
  // For now, all supported locales are LTR
  return 'ltr'
}

export function getLocaleCurrency(locale: Locale): string {
  switch (locale) {
    case 'en-IN':
      return 'INR'
    case 'en-PL':
      return 'EUR'
    case 'hi-IN':
      return 'INR'
    default:
      return 'INR'
  }
}

export function getLocaleDateFormat(locale: Locale): string {
  switch (locale) {
    case 'en-IN':
      return 'DD/MM/YYYY'
    case 'en-PL':
      return 'DD.MM.YYYY'
    case 'hi-IN':
      return 'DD/MM/YYYY'
    default:
      return 'DD/MM/YYYY'
  }
}

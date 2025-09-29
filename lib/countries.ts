export interface Country {
  code: string
  name: string
  demonym: string
  currency: string
  currencyCode: string
  visaTypes: string[]
  popularCities: string[]
  studyCost: {
    min: number
    max: number
    currency: string
  }
  jobSalary: {
    min: number
    max: number
    currency: string
  }
  language: string[]
  timezone: string
}

export const COUNTRIES: Record<string, Country> = {
  'poland': {
    code: 'PL',
    name: 'Poland',
    demonym: 'Polish',
    currency: 'Polish Złoty',
    currencyCode: 'PLN',
    visaTypes: ['Student Visa', 'Work Permit', 'TRC', 'Schengen Visa'],
    popularCities: ['Warsaw', 'Krakow', 'Gdansk', 'Wroclaw', 'Poznan'],
    studyCost: {
      min: 2000,
      max: 8000,
      currency: 'EUR'
    },
    jobSalary: {
      min: 800,
      max: 2500,
      currency: 'EUR'
    },
    language: ['Polish', 'English'],
    timezone: 'Europe/Warsaw'
  },
  'germany': {
    code: 'DE',
    name: 'Germany',
    demonym: 'German',
    currency: 'Euro',
    currencyCode: 'EUR',
    visaTypes: ['Student Visa', 'Work Permit', 'Blue Card', 'Schengen Visa'],
    popularCities: ['Berlin', 'Munich', 'Hamburg', 'Frankfurt', 'Cologne'],
    studyCost: {
      min: 0,
      max: 500,
      currency: 'EUR'
    },
    jobSalary: {
      min: 2000,
      max: 5000,
      currency: 'EUR'
    },
    language: ['German', 'English'],
    timezone: 'Europe/Berlin'
  },
  'uk': {
    code: 'GB',
    name: 'United Kingdom',
    demonym: 'British',
    currency: 'British Pound',
    currencyCode: 'GBP',
    visaTypes: ['Student Visa', 'Work Visa', 'Skilled Worker Visa', 'Graduate Visa'],
    popularCities: ['London', 'Manchester', 'Birmingham', 'Edinburgh', 'Glasgow'],
    studyCost: {
      min: 15000,
      max: 35000,
      currency: 'GBP'
    },
    jobSalary: {
      min: 20000,
      max: 50000,
      currency: 'GBP'
    },
    language: ['English'],
    timezone: 'Europe/London'
  },
  'usa': {
    code: 'US',
    name: 'United States',
    demonym: 'American',
    currency: 'US Dollar',
    currencyCode: 'USD',
    visaTypes: ['F-1 Student Visa', 'H-1B Work Visa', 'J-1 Exchange Visa', 'OPT'],
    popularCities: ['New York', 'Los Angeles', 'Chicago', 'Boston', 'San Francisco'],
    studyCost: {
      min: 20000,
      max: 60000,
      currency: 'USD'
    },
    jobSalary: {
      min: 40000,
      max: 100000,
      currency: 'USD'
    },
    language: ['English'],
    timezone: 'America/New_York'
  },
  'canada': {
    code: 'CA',
    name: 'Canada',
    demonym: 'Canadian',
    currency: 'Canadian Dollar',
    currencyCode: 'CAD',
    visaTypes: ['Study Permit', 'Work Permit', 'Express Entry', 'PNP'],
    popularCities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'],
    studyCost: {
      min: 15000,
      max: 35000,
      currency: 'CAD'
    },
    jobSalary: {
      min: 30000,
      max: 80000,
      currency: 'CAD'
    },
    language: ['English', 'French'],
    timezone: 'America/Toronto'
  },
  'australia': {
    code: 'AU',
    name: 'Australia',
    demonym: 'Australian',
    currency: 'Australian Dollar',
    currencyCode: 'AUD',
    visaTypes: ['Student Visa', 'Work Visa', 'Skilled Migration', 'Working Holiday'],
    popularCities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
    studyCost: {
      min: 20000,
      max: 45000,
      currency: 'AUD'
    },
    jobSalary: {
      min: 45000,
      max: 90000,
      currency: 'AUD'
    },
    language: ['English'],
    timezone: 'Australia/Sydney'
  },
  'slovakia': {
    code: 'SK',
    name: 'Slovakia',
    demonym: 'Slovak',
    currency: 'Euro',
    currencyCode: 'EUR',
    visaTypes: ['Student Visa', 'Work Permit', 'TRC', 'Schengen Visa'],
    popularCities: ['Bratislava', 'Kosice', 'Nitra', 'Zilina', 'Trnava'],
    studyCost: {
      min: 1000,
      max: 5000,
      currency: 'EUR'
    },
    jobSalary: {
      min: 600,
      max: 2000,
      currency: 'EUR'
    },
    language: ['Slovak', 'English'],
    timezone: 'Europe/Bratislava'
  },
  'lithuania': {
    code: 'LT',
    name: 'Lithuania',
    demonym: 'Lithuanian',
    currency: 'Euro',
    currencyCode: 'EUR',
    visaTypes: ['Student Visa', 'Work Permit', 'TRC', 'Schengen Visa'],
    popularCities: ['Vilnius', 'Kaunas', 'Klaipeda', 'Siauliai', 'Panevezys'],
    studyCost: {
      min: 1500,
      max: 6000,
      currency: 'EUR'
    },
    jobSalary: {
      min: 500,
      max: 1800,
      currency: 'EUR'
    },
    language: ['Lithuanian', 'English'],
    timezone: 'Europe/Vilnius'
  }
}

export function getCountryByCode(code: string): Country | undefined {
  return Object.values(COUNTRIES).find(country => country.code === code)
}

export function getCountryBySlug(slug: string): Country | undefined {
  return COUNTRIES[slug.toLowerCase()]
}

export function getAllCountries(): Country[] {
  return Object.values(COUNTRIES)
}

export function getCountryNames(): string[] {
  return Object.values(COUNTRIES).map(country => country.name)
}

export function getPopularCountries(): Country[] {
  const popularSlugs = ['poland', 'germany', 'uk', 'usa', 'canada', 'australia']
  return popularSlugs.map(slug => COUNTRIES[slug]).filter(Boolean)
}

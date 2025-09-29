interface University {
  name: string
  description: string
  url: string
  logo?: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    addressCountry: string
    postalCode: string
  }
  telephone?: string
  email?: string
  website: string
  foundingDate?: string
  numberOfStudents?: number
  programs?: string[]
  tuitionFees?: {
    currency: string
    amount: number
    period: string
  }
}

interface UniversitySchemaProps {
  university: University
}

export function UniversitySchema({ university }: UniversitySchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollegeOrUniversity',
    name: university.name,
    description: university.description,
    url: university.url,
    ...(university.logo && {
      logo: university.logo
    }),
    address: {
      '@type': 'PostalAddress',
      streetAddress: university.address.streetAddress,
      addressLocality: university.address.addressLocality,
      addressRegion: university.address.addressRegion,
      addressCountry: university.address.addressCountry,
      postalCode: university.address.postalCode
    },
    ...(university.telephone && {
      telephone: university.telephone
    }),
    ...(university.email && {
      email: university.email
    }),
    sameAs: university.website,
    ...(university.foundingDate && {
      foundingDate: university.foundingDate
    }),
    ...(university.numberOfStudents && {
      numberOfStudents: university.numberOfStudents
    }),
    ...(university.programs && {
      hasProgram: university.programs.map(program => ({
        '@type': 'EducationalOccupationalProgram',
        name: program
      }))
    }),
    ...(university.tuitionFees && {
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Tuition Fees',
        itemListElement: {
          '@type': 'Offer',
          price: university.tuitionFees.amount,
          priceCurrency: university.tuitionFees.currency,
          description: `Tuition fees per ${university.tuitionFees.period}`
        }
      }
    })
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  )
}

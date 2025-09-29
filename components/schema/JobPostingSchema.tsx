interface JobPosting {
  title: string
  description: string
  company: string
  location: string
  employmentType: string
  salaryMin?: number
  salaryMax?: number
  currency: string
  datePosted: string
  validThrough: string
  url: string
  requirements?: string[]
  responsibilities?: string[]
}

interface JobPostingSchemaProps {
  job: JobPosting
}

export function JobPostingSchema({ job }: JobPostingSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    hiringOrganization: {
      '@type': 'Organization',
      name: job.company,
      sameAs: 'https://ribriz.com'
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
        addressCountry: job.location.includes('Poland') ? 'PL' : 'EU'
      }
    },
    employmentType: job.employmentType,
    datePosted: job.datePosted,
    validThrough: job.validThrough,
    url: job.url,
    ...(job.salaryMin && job.salaryMax && {
      baseSalary: {
        '@type': 'MonetaryAmount',
        currency: job.currency,
        value: {
          '@type': 'QuantitativeValue',
          minValue: job.salaryMin,
          maxValue: job.salaryMax,
          unitText: 'MONTH'
        }
      }
    }),
    ...(job.requirements && {
      qualifications: job.requirements.join(', ')
    }),
    ...(job.responsibilities && {
      responsibilities: job.responsibilities.join(', ')
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

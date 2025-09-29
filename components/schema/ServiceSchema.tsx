interface Service {
  name: string
  description: string
  provider: string
  areaServed: string[]
  serviceType: string
  url: string
}

interface ServiceSchemaProps {
  service: Service
}

export function ServiceSchema({ service }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: service.provider
    },
    areaServed: service.areaServed.map(area => ({
      '@type': 'Country',
      name: area
    })),
    serviceType: service.serviceType,
    url: service.url,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      description: 'Free consultation and guidance'
    }
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

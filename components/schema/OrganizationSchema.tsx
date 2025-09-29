import { generateOrganizationSchema } from '@/lib/seo'

export function OrganizationSchema() {
  const schema = generateOrganizationSchema()
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  )
}

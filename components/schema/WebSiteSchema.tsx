import { generateWebSiteSchema } from '@/lib/seo'

export function WebSiteSchema() {
  const schema = generateWebSiteSchema()
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  )
}

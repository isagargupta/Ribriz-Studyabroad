import { generateCanonicalUrl } from '@/lib/seo'

interface CanonicalUrlProps {
  path: string
}

export function CanonicalUrl({ path }: CanonicalUrlProps) {
  const canonicalUrl = generateCanonicalUrl(path)
  
  return (
    <link rel="canonical" href={canonicalUrl} />
  )
}

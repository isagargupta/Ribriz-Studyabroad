import { generateHreflangLinks } from '@/lib/i18n'

interface HreflangLinksProps {
  pathname: string
}

export function HreflangLinks({ pathname }: HreflangLinksProps) {
  const hreflangLinks = generateHreflangLinks(pathname)
  
  return (
    <>
      {hreflangLinks.map(({ hreflang, href }) => (
        <link
          key={hreflang}
          rel="alternate"
          hrefLang={hreflang}
          href={href}
        />
      ))}
    </>
  )
}

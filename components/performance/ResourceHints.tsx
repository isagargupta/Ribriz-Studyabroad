import { generateResourceHints, generatePreloadLinks } from '@/lib/performance'

export function ResourceHints() {
  const hints = generateResourceHints()
  const preloads = generatePreloadLinks()
  
  return (
    <>
      {hints.map((hint, index) => (
        <div
          key={index}
          dangerouslySetInnerHTML={{
            __html: hint
          }}
        />
      ))}
      {preloads.map((preload, index) => (
        <div
          key={index}
          dangerouslySetInnerHTML={{
            __html: preload
          }}
        />
      ))}
    </>
  )
}

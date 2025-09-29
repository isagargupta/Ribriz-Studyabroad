import { generateCriticalCSS } from '@/lib/performance'

export function CriticalCSS() {
  const criticalCSS = generateCriticalCSS()
  
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: criticalCSS
      }}
    />
  )
}

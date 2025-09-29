import Image from 'next/image'
import { generateImageOptimizationConfig, generateLazyLoadingConfig } from '@/lib/performance'

interface ImageOptimizerProps {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  className?: string
  sizes?: string
  quality?: number
}

export function ImageOptimizer({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  sizes,
  quality = 85
}: ImageOptimizerProps) {
  const config = generateImageOptimizationConfig()
  const lazyConfig = generateLazyLoadingConfig()
  
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      sizes={sizes || config.sizes}
      quality={quality}
      placeholder={priority ? undefined : config.placeholder}
      blurDataURL={priority ? undefined : config.blurDataURL}
      loading={priority ? 'eager' : lazyConfig.loading}
      decoding={lazyConfig.decoding}
      fetchPriority={priority ? 'high' : lazyConfig.fetchPriority}
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
  )
}

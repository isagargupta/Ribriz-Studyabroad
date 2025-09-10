/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
    domains: ['images.pexels.com', 'lh3.googleusercontent.com', 'media.licdn.com'],
  },
}

module.exports = nextConfig
import './globals.css'
import { Inter } from 'next/font/google'
import BrowserGuard from './_client/BrowserGuard'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ribriz Overseas - Premium Global Career Solutions',
  description: 'Where Ambition Meets Opportunity - Premium international career placement services',
  metadataBase: new URL('https://ribriz.com'),
  alternates: {
    canonical: 'https://ribriz.com',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <BrowserGuard>
          {children}
        </BrowserGuard>
      </body>
    </html>
  )
}
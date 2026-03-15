import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Next.js Portfolio - Learning Hub',
    template: '%s | Next.js Portfolio', // %s will be replaced by page-specific titles
  },
  description: 'A comprehensive Next.js portfolio showcasing all major concepts including SSR, SSG, ISR, API routes, and more.',
  keywords: ['Next.js', 'React', 'TypeScript', 'Portfolio', 'Web Development'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    title: 'Next.js Portfolio - Learning Hub',
    description: 'A comprehensive Next.js portfolio showcasing all major concepts',
    siteName: 'Next.js Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Portfolio - Learning Hub',
    description: 'A comprehensive Next.js portfolio showcasing all major concepts',
    creator: '@yourusername',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // lang attribute is important for accessibility and SEO
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}

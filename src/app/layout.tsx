import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Diego Valenzuela — AI & Software Engineer',
  description:
    'Personal portfolio of Diego Pablo Valenzuela Palacios — AI Engineer specializing in LLMs, RAG pipelines, and production-grade backend systems.',
  keywords: [
    'AI Engineer',
    'Software Engineer',
    'LLM',
    'Machine Learning',
    'Python',
    'Backend',
    'Guatemala',
    'Diego Valenzuela',
  ],
  authors: [{ name: 'Diego Pablo Valenzuela Palacios' }],
  openGraph: {
    title: 'Diego Valenzuela — AI & Software Engineer',
    description:
      'AI Engineer specializing in LLMs, RAG pipelines, fine-tuning, and production-grade software.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diego Valenzuela — AI & Software Engineer',
    description: 'AI Engineer specializing in LLMs, RAG pipelines, and production-grade software.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased bg-bg-base text-text-primary">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}

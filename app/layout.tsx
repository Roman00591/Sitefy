import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Sitefy | Создание сайтов различной сложности',
  description: 'Веб-агентство Sitefy специализируется на создании современных веб-сайтов для любого размера бизнеса. Профессиональный подход, инновационные решения, гарантированный результат.',
  keywords: 'создание сайтов, веб-дизайн, веб-разработка, создание онлайн магазина, SEO оптимизация',
  authors: [{ name: 'Sitefy' }],
  openGraph: {
    title: 'Sitefy | Создание сайтов различной сложности',
    description: 'Профессиональное создание веб-сайтов и интернет-магазинов',
    type: 'website',
    locale: 'ru_RU',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0064FF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}

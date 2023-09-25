import './globals.css'
import Footer from '@/components/layout/footer'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Gibify Link',
  description: 'Simplificando a maneira de como você compartilha seus links na internet.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}


import './globals.css'
import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header';
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
  verification: {
    google: 'NZ-zRsj3eU2EdmeG8llgzrBIHSozkP7W9illfOmVr0M'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main className="flex flex-col min-h-screen w-full items-center justify-start overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

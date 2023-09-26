
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main className="flex flex-col min-h-screen w-full max-w-5xl items-center justify-start p-6 md:p-8 mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

import './globals.css'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackgroundAnimation from '@/components/BackgroundAnimation'

// Define fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta'
})

// Define metadata for the page
export const metadata = {
  title: 'Mohammad Nassar | Strategic ERP Architect',
  description: 'Strategic ERP architect specializing in implementations, system analysis, and UI/UX design. Expert in Odoo, Python, React.js, and cloud technologies.',
  keywords: ['ERP Architect', 'System Analyst', 'Odoo', 'Python', 'React.js', 'Cloud Solutions', 'Mohammad Nassar'],
  authors: [{ name: 'Mohammad Nassar' }],
  openGraph: {
    title: 'Mohammad Nassar | Strategic ERP Architect & System Analyst',
    description: 'Strategic ERP architect specializing in implementations, system analysis, and UI/UX design.',
    type: 'website',
    locale: 'en_US',
  },
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans bg-dark-900 text-text-primary antialiased">
        {/* Global gradient background */}
        <BackgroundAnimation />

        {/* Content wrapper */}
        <div className="relative z-10">
          {/* Main navigation */}
          <Navbar />

          {/* Page content */}
          <main className="pt-20">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  )
}
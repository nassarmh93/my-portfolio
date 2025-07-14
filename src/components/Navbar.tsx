'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Update active section based on scroll position
      const sections = ['experience', 'skills', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-900/90 backdrop-blur-lg shadow-md py-3 border-b border-dark-600' 
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold transition-colors"
          >
            <span className="gradient-text">MN</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`nav-link ${
                  activeSection === link.href.replace('#', '') ? 'nav-link-active' : ''
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Mohammad_Nassar_Resume.pdf"
              download
              className="btn btn-primary py-2 px-5 text-sm"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-accent-400 hover:bg-dark-700 transition-colors"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-text-secondary" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-text-secondary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: mobileMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  activeSection === link.href.replace('#', '')
                    ? 'bg-accent-400/10 text-accent-400'
                    : 'text-text-secondary hover:bg-dark-700 hover:text-text-primary'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Mohammad_Nassar_Resume.pdf"
              download
              className="block w-full btn btn-primary text-center mt-4"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}
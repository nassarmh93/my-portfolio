'use client'

import React from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-dark-800 to-dark-900 text-text-secondary py-12 border-t border-dark-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-4">Mohammad Nassar</h3>
            <p className="text-text-secondary mb-4">
              Strategic ERP Architect & System Analyst specializing in enterprise solutions
              and digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#experience" className="hover:text-accent-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-accent-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-accent-400 transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <EnvelopeIcon className="w-5 h-5 text-accent-400" />
                <a href="mailto:Nassarmh93@gmail.com" className="hover:text-accent-400 transition-colors">
                  Nassarmh93@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5 text-accent-400" />
                <a href="tel:+97466890935" className="hover:text-accent-400 transition-colors">
                  +974 6689 0935
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5 text-accent-400" />
                <span>Doha, Qatar</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-700 text-center">
          <p className="text-text-muted">
            © {currentYear} Mohammad Nassar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
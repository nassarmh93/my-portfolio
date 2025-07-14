'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'

const ContactSection = () => {
  return (
    <section id="contact" className="section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16 px-4 sm:px-0"
        >
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Let&apos;s discuss how I can help transform your business with strategic ERP solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4 sm:mb-6">Contact Information</h3>
            
            <div className="space-y-3 sm:space-y-4">
              <motion.a
                href="mailto:Nassarmh93@gmail.com"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-dark-800/50 hover:bg-dark-700/50 transition-all duration-300 group border border-dark-600 hover:border-accent-400 hover:shadow-md glass"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-400/10 rounded-lg flex items-center justify-center group-hover:bg-accent-400/20 transition-colors flex-shrink-0">
                  <EnvelopeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-400" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-text-secondary">Email</p>
                  <p className="text-text-primary font-medium text-sm sm:text-base break-all">Nassarmh93@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+97466890935"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-dark-800/50 hover:bg-dark-700/50 transition-all duration-300 group border border-dark-600 hover:border-accent-400 hover:shadow-md glass"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-400/10 rounded-lg flex items-center justify-center group-hover:bg-accent-400/20 transition-colors flex-shrink-0">
                  <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-400" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-text-secondary">Phone</p>
                  <p className="text-text-primary font-medium text-sm sm:text-base">+974 6689 0935</p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-dark-800/50 border border-dark-600 glass"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-400" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-text-secondary">Location</p>
                  <p className="text-text-primary font-medium text-sm sm:text-base">Doha, Qatar</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-dark-800/50 to-dark-700/50 rounded-2xl p-6 sm:p-8 shadow-lg border border-accent-400/20 glass"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 sm:mb-4">Let&apos;s Work Together</h3>
            <p className="text-text-secondary mb-4 sm:mb-6 text-sm sm:text-base">
              I&apos;m available for ERP consulting, system implementations, and strategic technology partnerships. 
              Whether you need to optimize existing systems or implement new solutions, I&apos;m here to help.
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              <a
                href="mailto:Nassarmh93@gmail.com"
                className="btn btn-primary w-full justify-center"
              >
                Send Me an Email
              </a>
              
              <a
                href="https://www.linkedin.com/in/nassarmh93"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary w-full justify-center group"
              >
                Connect on LinkedIn
                <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-dark-600">
              <p className="text-sm text-text-secondary text-center">
                Response time: Usually within 24-48 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
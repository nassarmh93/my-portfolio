'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDownIcon, MapPinIcon, PhoneIcon, EnvelopeIcon, SparklesIcon } from '@heroicons/react/24/outline'

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Animated intro text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-400/10 text-accent-400 text-sm font-medium border border-accent-400/20">
              <SparklesIcon className="w-4 h-4 text-accent-400" />
              Available for Enterprise Projects
            </span>
          </motion.div>

          {/* Name with gradient animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6">
              Mohammad Nassar
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-text-secondary font-light mb-8">
              Strategic ERP Architect & System Analyst
            </h2>
          </motion.div>

          {/* Contact Information with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            <a href="#" className="group flex items-center gap-2 text-text-secondary hover:text-accent-400 transition-colors">
              <MapPinIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Doha, Qatar</span>
            </a>
            <a href="tel:+97466890935" className="group flex items-center gap-2 text-text-secondary hover:text-accent-400 transition-colors">
              <PhoneIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>+974 6689 0935</span>
            </a>
            <a href="mailto:Nassarmh93@gmail.com" className="group flex items-center gap-2 text-text-secondary hover:text-accent-400 transition-colors">
              <EnvelopeIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Nassarmh93@gmail.com</span>
            </a>
          </motion.div>

          {/* Professional Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="glass p-8 rounded-2xl border border-dark-600/50 hover:border-accent-400/50 transition-all duration-300">
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                Specializing in <span className="text-accent-400 font-semibold">implementations</span>, 
                <span className="text-accent-400 font-semibold"> system analysis</span>, and 
                <span className="text-accent-400 font-semibold"> UI/UX design</span>. 
                Proficient in fit-gap analysis, UML modeling, front-end prototyping, and backend development. 
                Adept at crafting BRDs/SRSs, overseeing UAT, and training stakeholders to deliver 
                user-centric, scalable solutions on time.
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons with gradient effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <button
              onClick={() => scrollToSection('experience')}
              className="btn btn-primary group"
            >
              <span className="relative z-10">View Experience</span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="btn btn-secondary"
            >
              Technical Skills
            </button>
            <a
              href="/Mohammad_Nassar_Resume.pdf"
              download
              className="btn btn-secondary group"
            >
              <span className="flex items-center gap-2">
                Download Resume
                <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </span>
            </a>
          </motion.div>

          {/* Scroll Indicator with glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-accent-400 cursor-pointer animate-glow"
              onClick={() => scrollToSection('experience')}
            >
              <ArrowDownIcon className="w-6 h-6" />
            </motion.div>
          </motion.div>

          {/* Floating tech badges */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 opacity-20"
              animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <span className="text-4xl font-bold text-purple-400">React</span>
            </motion.div>
            <motion.div
              className="absolute top-40 right-20 opacity-20"
              animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <span className="text-4xl font-bold text-accent-400">Python</span>
            </motion.div>
            <motion.div
              className="absolute bottom-40 left-20 opacity-20"
              animate={{ y: [-5, 15, -5], rotate: [0, 3, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
            >
              <span className="text-4xl font-bold text-purple-400">Cloud</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
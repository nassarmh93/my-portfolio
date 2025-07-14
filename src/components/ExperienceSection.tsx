'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BriefcaseIcon, CalendarIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'

interface Experience {
  company: string
  location: string
  position: string
  duration: string
  responsibilities: string[]
}

const experiences: Experience[] = [
  {
    company: "Cloud Resources LLC",
    location: "Doha, Qatar",
    position: "Software Practice Lead",
    duration: "November 2024 – Present",
    responsibilities: [
      "Led requirements workshops and translated business processes into concise system design specs.",
      "Architected scalable data models, UML diagrams, and process flows for system modules.",
      "Defined and validated integration patterns (Zoho, Salesforce, Oracle, Shopify) with clear API and error-handling specs.",
      "Directed POCs and design reviews to ensure performance, security, and scalability before handoff.",
      "Produced SRS documents, API guides, and configuration manuals; partnered with dev and QA teams to ensure seamless delivery."
    ]
  },
  {
    company: "Intalio-Everteam",
    location: "Naqqache, Beirut, Lebanon",
    position: "Software Engineer",
    duration: "December 2022 – August 2024",
    responsibilities: [
      "Translated business needs into system designs and technical specs for custom modules and reports.",
      "Developed scalable solutions using Python, JS (React.js, Astro.js, Next.js…etc), PostgreSQL, HTML/XML, and CSS, SCSS.",
      "Authored ER diagrams and interface documentation to guide implementation and ensure stakeholder alignment.",
      "Led design/code reviews and mentored developers on analysis-driven engineering best practices."
    ]
  },
  {
    company: "Azkatech S.A.L",
    location: "Hazmiyeh, Beirut, Lebanon",
    position: "ERP Implementer",
    duration: "September 2021 – October 2022",
    responsibilities: [
      "Performed Fit-Gap analysis and requirements gathering to shape system design.",
      "Designed system module architectures and integration workflows.",
      "Produced BRD, SRS, change-request forms, UAT scripts, and training materials.",
      "Delivered technical and functional training; documented new modules and integrations.",
      "Reported directly to the Team Lead."
    ]
  }
]

const ExperienceSection = () => {
  return (
    <section id="experience" className="section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Building scalable enterprise solutions through strategic system architecture
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-dark-600 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex items-start gap-8">
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-lg z-10 flex-shrink-0">
                  <BriefcaseIcon className="w-8 h-8 text-accent-400" />
                </div>

                {/* Content card */}
                <div className="flex-1 card card-hover p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary mb-2">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-accent-400 font-semibold mb-2">
                        <BuildingOfficeIcon className="w-5 h-5 text-accent-400" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-4 text-text-secondary text-sm">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4 text-text-secondary" />
                          <span>{exp.duration}</span>
                        </div>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-6">
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <span className="flex-shrink-0 w-2 h-2 bg-accent-500 rounded-full mt-2"></span>
                        <span className="text-text-secondary leading-relaxed">{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
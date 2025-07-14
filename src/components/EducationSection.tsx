'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  AcademicCapIcon, 
  CalendarIcon, 
  BuildingLibraryIcon,
  CheckBadgeIcon,
  DocumentCheckIcon,
  LinkIcon
} from '@heroicons/react/24/outline'

interface Education {
  degree: string
  field: string
  institution: string
  location: string
  date: string
}

interface Certification {
  name: string
  issuer: string
  credentialId: string
  dateIssued: string
  link?: string
}

const education: Education[] = [
  {
    degree: "Master of Business Administration (MBA)",
    field: "Management Information Systems",
    institution: "Lebanese International University",
    location: "Saida, Lebanon",
    date: "June 2018"
  },
  {
    degree: "Bachelor of Business Administration (BBA)",
    field: "Information Technology Management",
    institution: "Rafik Hariri University",
    location: "Mechref, Lebanon",
    date: "July 2016"
  }
]

const certifications: Certification[] = [
  {
    name: "Odoo v17 Functional Consultant",
    issuer: "Odoo",
    credentialId: "0000409637",
    dateIssued: "May 2024",
    link: "#" // Replace with actual verification link
  },
  {
    name: "Professional Data Analytics",
    issuer: "Google",
    credentialId: "J6DDJMS3LJNQ",
    dateIssued: "July 2023",
    link: "#" // Replace with actual verification link
  }
]

const EducationSection = () => {
  return (
    <section id="education" className="section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3"
            >
              <AcademicCapIcon className="w-8 h-8 text-accent-400" />
              Education
            </motion.h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent-400/10 rounded-lg flex items-center justify-center">
                      <BuildingLibraryIcon className="w-6 h-6 text-accent-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-text-primary mb-1">{edu.degree}</h4>
                      <p className="text-accent-400 font-semibold mb-2">{edu.field}</p>
                      <p className="text-text-secondary mb-2">{edu.institution}</p>
                      <div className="flex items-center gap-4 text-sm text-text-secondary">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4 text-text-secondary" />
                          <span>{edu.date}</span>
                        </div>
                        <span>•</span>
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3"
            >
              <CheckBadgeIcon className="w-8 h-8 text-purple-400" />
              Certifications
            </motion.h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center">
                      <DocumentCheckIcon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-text-primary mb-1">{cert.name}</h4>
                      <p className="text-purple-400 font-semibold mb-2">{cert.issuer}</p>
                      <div className="flex items-center gap-4 text-sm text-text-secondary mb-3">
                        <span>Credential ID: <span className="font-mono font-semibold">{cert.credentialId}</span></span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-text-secondary">
                          <CalendarIcon className="w-4 h-4 text-text-secondary" />
                          <span>Issued {cert.dateIssued}</span>
                        </div>
                        {cert.link && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-accent-400 hover:text-accent-500 font-medium transition-colors"
                          >
                            <LinkIcon className="w-4 h-4 text-accent-400" />
                            <span>Verify</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection
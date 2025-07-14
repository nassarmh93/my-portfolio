'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  CodeBracketIcon, 
  ServerStackIcon, 
  CloudIcon, 
  CubeIcon,
  CommandLineIcon,
  DocumentTextIcon,
  PresentationChartLineIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

interface SkillCategory {
  title: string
  icon: React.ComponentType<{ className?: string }>
  skills: string[]
  color: string
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: CodeBracketIcon,
    color: "primary",
    skills: ["React.js", "Vue.js", "Astro.js", "Next.js", "Backbone.js", "jQuery", "Angular"]
  },
  {
    title: "Backend Development",
    icon: ServerStackIcon,
    color: "secondary",
    skills: ["Django (Python)", "RESTful APIs", "SOAP", "JSON/XML mappings", "Webhooks"]
  },
  {
    title: "Databases",
    icon: CubeIcon,
    color: "accent",
    skills: ["PostgreSQL", "MySQL", "SQLite"]
  },
  {
    title: "Cloud & DevOps",
    icon: CloudIcon,
    color: "primary",
    skills: ["AWS", "Azure", "Google Cloud Platform", "DigitalOcean", "Docker", "Docker Compose", "Kubernetes", "Linux"]
  },
  {
    title: "Development Tools",
    icon: CommandLineIcon,
    color: "secondary",
    skills: ["Git", "GitLab CI", "GitHub Actions", "JIRA", "PyTest"]
  },
  {
    title: "System Design & Documentation",
    icon: DocumentTextIcon,
    color: "accent",
    skills: ["UML (Visio, draw.io)", "Figma", "Business Process Modeling", "Data & Information Architecture", "Prototyping & UI/UX"]
  },
  {
    title: "Business Analysis",
    icon: PresentationChartLineIcon,
    color: "primary",
    skills: ["Technical Specifications", "Documentation", "BRD/SRS", "Fit-Gap Analysis", "UAT Scripts"]
  },
  {
    title: "Soft Skills",
    icon: UserGroupIcon,
    color: "secondary",
    skills: ["Stakeholder Communication", "End-user Training", "Team Leadership", "Project Management"]
  }
]

const SkillsSection = () => {
  return (
    <section id="skills" className="section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Technology Stack & Competencies</h2>
          <p className="section-subtitle">
            Comprehensive expertise across the full software development lifecycle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            const colorClasses = {
              primary: 'bg-accent-400/10 border-accent-400/20',
              secondary: 'bg-purple-400/10 border-purple-400/20',
              accent: 'bg-accent-400/10 border-accent-400/20'
            }
            const iconColorClasses = {
              primary: 'text-accent-400',
              secondary: 'text-purple-400',
              accent: 'text-accent-400'
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="skill-category hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${colorClasses[category.color as keyof typeof colorClasses]}`}>
                    <Icon className={`w-6 h-6 ${iconColorClasses[category.color as keyof typeof iconColorClasses]}`} />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 + skillIndex * 0.02 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="skill-badge cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Skills Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-text-secondary bg-dark-800/50 px-6 py-3 rounded-full border border-dark-600 glass">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>Currently expanding expertise in cloud-native architectures and microservices</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
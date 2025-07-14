'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const BackgroundAnimation = () => {
  const bgRef = useRef<HTMLDivElement>(null)

  // Interactive gradient that follows mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      bgRef.current.style.setProperty('--mouse-x', `${x}%`)
      bgRef.current.style.setProperty('--mouse-y', `${y}%`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={bgRef} className="fixed inset-0 gradient-bg">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-48 -left-48 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/30 rounded-full filter blur-[64px] sm:blur-[128px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute -bottom-48 -right-48 w-64 sm:w-96 h-64 sm:h-96 bg-accent-400/30 rounded-full filter blur-[64px] sm:blur-[128px]"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-r from-purple-500/20 to-accent-400/20 rounded-full filter blur-[64px] sm:blur-[128px]"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        {/* Additional orbs for more depth */}
        <motion.div
          className="hidden sm:block absolute top-1/4 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full filter blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [-20, 20, -20],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="hidden sm:block absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent-500/20 rounded-full filter blur-[100px]"
          animate={{
            scale: [1.1, 0.9, 1.1],
            x: [20, -20, 20],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22grid%22%20width%3D%2260%22%20height%3D%2260%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22M%2060%200%20L%200%200%200%2060%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.03)%22%20stroke-width%3D%221%22%2F%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22url(%23grid)%22%2F%3E%3C%2Fsvg%3E')] opacity-50"></div>
    </div>
  )
}

export default BackgroundAnimation
// / components/Hero.js
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`
          }}
        />
      </div>
      
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
            className={`absolute w-72 h-72 rounded-full blur-3xl opacity-20 ${
              i === 0 ? 'bg-[#007AFF] top-1/4 left-1/4' :
              i === 1 ? 'bg-[#0066CC] top-3/4 right-1/4' :
              'bg-pink-500 top-1/2 left-3/4'
            }`}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent"
        >
          Evan Thoms
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-zinc-400 mb-4"
        >
          Technical Intern at Leidos
        </motion.p>
        
        <motion.p
          variants={itemVariants}
          className="text-lg text-zinc-500 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Self-driven learner crafting intelligent solutions in AI and Cybersecurity
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {[
            { label: 'GitHub', href: 'https://github.com/evan-thoms' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/evan-thoms' },
            { label: 'Resume', href: '/resume.pdf' }
          ].map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : '_self'}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3 bg-gradient-to-r from-[#007AFF] to-[#0066CC] rounded-full text-white font-medium overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">{link.label}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#007AFF] to-[#0066CC] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
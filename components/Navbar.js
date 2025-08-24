// components/Navbar.js
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const languages = {
  en: 'EN',
  es: 'ES', 
  ru: 'RU',
  zh: 'ZH',
  ar: 'AR'
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showLangDropdown, setShowLangDropdown] = useState(false)
  const { currentLanguage, changeLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-zinc-800/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-to-r from-[#007AFF] to-[#0066CC] bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Evan Thoms
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {['about', 'tech', 'experience', 'projects', 'skills'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={() => scrollToSection(item)}
                className="text-zinc-300 hover:text-white transition-colors duration-300 capitalize relative group"
              >
                {t(`navbar.${item}`)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#007AFF] to-[#0066CC] group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
            
            <div 
              className="relative language-dropdown"
              onMouseEnter={() => setShowLangDropdown(true)}
              onMouseLeave={() => setShowLangDropdown(false)}
            >
                <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 border border-zinc-700 rounded-lg text-zinc-300 hover:border-[#007AFF] transition-colors duration-300 relative"
              >
                {languages[currentLanguage]}
                
                {/* Small language indicator */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-[#007AFF] to-[#0066CC] rounded-full"
                />
              </motion.button>
              
              {showLangDropdown && (
                <>
                  {/* Invisible bridge to prevent gap */}
                  <div className="absolute top-full right-0 w-full h-2 bg-transparent" />
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-0 bg-zinc-900/95 backdrop-blur-xl border border-zinc-700 rounded-lg overflow-hidden z-50 min-w-[80px]"
                  >
                    {Object.entries(languages).map(([code, label]) => (
                      <button
                        key={code}
                        onClick={() => changeLanguage(code)}
                        className="block w-full px-4 py-2 text-left text-zinc-300 hover:bg-[#007AFF]/20 hover:text-white transition-colors duration-200"
                      >
                        {label}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
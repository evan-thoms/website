import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState('en')
  const [translations, setTranslations] = useState({})

  useEffect(() => {
    // Load translations for the current language
    const loadTranslations = async () => {
      try {
        const translationModule = await import(`../translations/${currentLanguage}.json`)
        setTranslations(translationModule.default || translationModule)
      } catch (error) {
        console.error(`Failed to load translations for ${currentLanguage}:`, error)
        // Fallback to English if translation fails
        const fallbackModule = await import('../translations/en.json')
        setTranslations(fallbackModule.default || fallbackModule)
      }
    }

    loadTranslations()
  }, [currentLanguage])

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang)
    // Optionally save to localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', lang)
    }
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key // Return the key if translation not found
      }
    }
    
    return value || key
  }

  useEffect(() => {
    // Load saved language preference on mount
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('preferredLanguage')
      if (savedLang) {
        setCurrentLanguage(savedLang)
      }
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

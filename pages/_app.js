import '../styles/globals.css'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LanguageProvider } from '../contexts/LanguageContext'

function MyApp({ Component, pageProps, router }) {
  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        <motion.div key={router.route}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </LanguageProvider>
  )
}

export default MyApp


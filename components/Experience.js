// components/Experience.js
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

// Helper function to translate dates
const translateDate = (dateString, t) => {
  if (!dateString) return dateString
  
  const monthMap = {
    'January': 'january', 'February': 'february', 'March': 'march',
    'April': 'april', 'May': 'may', 'June': 'june',
    'July': 'july', 'August': 'august', 'September': 'september',
    'October': 'october', 'November': 'november', 'December': 'december'
  }
  
  let translatedDate = dateString
  
  // Replace month names
  Object.keys(monthMap).forEach(month => {
    if (translatedDate.includes(month)) {
      translatedDate = translatedDate.replace(month, t(`dates.${monthMap[month]}`))
    }
  })
  
  // Replace "Present"
  if (translatedDate.includes('Present')) {
    translatedDate = translatedDate.replace('Present', t('dates.present'))
  }
  
  return translatedDate
}

const experiences = [
  {
    titleKey: 'experience.intern',
    companyKey: 'experience.leidos',
    date: 'May 2025 – Present',
    descriptionKey: 'experience.internDesc'
  },
  {
    titleKey: 'experience.fellow',
    companyKey: 'experience.headstarter',
    date: 'July 2024 – Sept 2024',
    descriptionKey: 'experience.fellowDesc'
  },
  {
    titleKey: 'experience.developer',
    companyKey: 'experience.dimensionEd',
    date: 'March 2022 – June 2022',
    descriptionKey: 'experience.developerDesc'
  }
]

export default function Experience() {
  const { t } = useLanguage()
  return (
    <section id="experience" className="py-20 bg-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#007AFF] to-[#0066CC] bg-clip-text text-transparent"
        >
          {t('experience.title')}
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ x: 10 }}
              className="group p-8 bg-gradient-to-r from-zinc-800/50 to-zinc-900/30 rounded-2xl border border-zinc-700/50 hover:border-[#007AFF]/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#007AFF] transition-colors duration-300">
                    {t(exp.titleKey)}
                  </h3>
                  <p className="text-[#007AFF] font-medium mt-1">{t(exp.companyKey)}</p>
                </div>
                <span className="text-zinc-400 text-sm mt-2 md:mt-0 whitespace-nowrap">
                  {translateDate(exp.date, t)}
                </span>
              </div>
              <p className="text-zinc-300 leading-relaxed">{t(exp.descriptionKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

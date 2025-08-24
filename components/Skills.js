// components/Skills.js
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const skillsData = {
  languages: [
    { nameKey: 'languageNames.english', level: 'Native' },
    { nameKey: 'languageNames.spanish', level: 'B1' },
    { nameKey: 'languageNames.russian', level: 'B1' },
    { nameKey: 'languageNames.chinese', level: 'A2' },
    { nameKey: 'languageNames.egyptianArabic', level: 'A1' }
  ],
  certificationsAndAwards: [
    { nameKey: 'certifications.securityPlus', issuerKey: 'certifications.comptia', date: '2022', type: 'certification' },
    { nameKey: 'certifications.eagleScout', issuerKey: 'certifications.boyScouts', date: '2023', type: 'award' },
    { nameKey: 'certifications.nationalMeritScholar', issuerKey: 'certifications.nationalMeritCorp', date: '2023', type: 'award' }
  ]
}

const getLevelColor = (level) => {
  switch (level) {
    case 'Native':
      return 'from-green-500 to-emerald-600'
    case 'B1':
      return 'from-yellow-500 to-orange-500'
    case 'A2':
      return 'from-blue-500 to-cyan-500'
    case 'A1':
        return 'from-blue-500 to-cyan-500'
    case 'proficient':
      return 'from-green-500 to-emerald-600'
    case 'intermediate':
      return 'from-yellow-500 to-orange-500'
    case 'beginner':
      return 'from-blue-500 to-cyan-500'
    default:
      return 'from-gray-500 to-gray-600'
  }
}

export default function Skills() {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#007AFF] to-[#0066CC] bg-clip-text text-transparent"
        >
          {t('skills.title')}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Certifications & Awards */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">
              {t('skills.certificationsAndAwards')}
            </h3>
            <div className="space-y-4">
              {skillsData.certificationsAndAwards.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700/50 hover:border-[#007AFF]/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-zinc-200 font-semibold">{t(item.nameKey)}</h4>
                    <span className="text-zinc-400 text-sm">{item.date}</span>
                  </div>
                  <p className="text-zinc-400 text-sm">{t(item.issuerKey)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">
              {t('skills.languages')}
            </h3>
            <div className="space-y-4">
              {skillsData.languages.map((language, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-lg border border-zinc-700/50 hover:border-[#007AFF]/30 transition-all duration-300"
                >
                  <span className="text-zinc-300 font-medium">{t(language.nameKey)}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getLevelColor(language.level)} text-white`}>
                    {t(`skills.${language.level}`)}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// components/Technologies.js
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const techCategories = [
  {
    titleKey: 'technologies.frontend',
    techs: ['JavaScript', 'React.js', 'Next.js', 'Tailwind CSS']
  },
  {
    titleKey: 'technologies.backendAI',
    techs: ['Python', 'OpenAI GPT-4', 'LangChain', 'Pinecone']
  },
  {
    titleKey: 'technologies.toolsOther',
    techs: ['Git/GitHub', 'Firebase', 'Numpy', 'Pandas']
  }
]

export default function Technologies() {
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
    <section id="tech" className="py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#007AFF] to-[#0066CC] bg-clip-text text-transparent"
        >
          {t('technologies.title')}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group p-8 bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 rounded-2xl border border-zinc-700/50 backdrop-blur-sm hover:border-[#007AFF]/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-[#007AFF] group-hover:text-[#007AFF] transition-colors duration-300">
                {t(category.titleKey)}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-gradient-to-r from-[#007AFF]/20 to-[#0066CC]/20 border border-[#007AFF]/30 rounded-full text-sm text-zinc-300 hover:text-white hover:border-[#007AFF]/50 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
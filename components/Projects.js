// components/Projects.js
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const projects = [
  {
    titleKey: 'projects.sentinel.title',
    descriptionKey: 'projects.sentinel.description',
    techs: ['Next.js', 'LangChain', 'PostgreSQL'],
    github: 'https://github.com/evan-thoms/vuln_feed',
    demo: '#'
  },
  {
    titleKey: 'projects.lumiFlash.title',
    descriptionKey: 'projects.lumiFlash.description',
    techs: ['Next.js', 'Llama 3.1', 'LangChain', 'Pinecone', 'Stripe'],
    github: 'https://github.com/HalaBench/AI-Flashcards-Stripe',
    demo: '#'
  },
  {
    titleKey: 'projects.profAI.title',
    descriptionKey: 'projects.profAI.description',
    techs: ['Next.js', 'Puppeteer', 'Pinecone', 'Material UI'],
    github: '#',
    demo: '#'
  }
]

export default function Projects() {
  const { t } = useLanguage()
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#007AFF] to-[#0066CC] bg-clip-text text-transparent"
        >
          {t('projects.title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group p-6 bg-gradient-to-br from-zinc-800/40 to-zinc-900/60 rounded-2xl border border-zinc-700/50 hover:border-[#007AFF]/30 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#007AFF] transition-colors duration-300">
                {t(project.titleKey)}
              </h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                {t(project.descriptionKey)}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techs.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-[#007AFF]/20 border border-[#007AFF]/30 rounded-full text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 text-center py-2 px-4 bg-gradient-to-r from-[#007AFF] to-[#0066CC] rounded-lg text-white font-medium hover:from-[#007AFF] hover:to-[#0066CC] transition-all duration-300"
                >
                  {t('projects.github')}
                </motion.a>
                <motion.a
                  href={project.demo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 text-center py-2 px-4 border border-[#007AFF] rounded-lg text-[#007AFF] hover:bg-[#007AFF]/20 hover:text-[#007AFF] transition-all duration-300"
                >
                  {t('projects.demo')}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
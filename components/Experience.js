// components/Experience.js
import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Technical Intern',
    company: 'Leidos',
    date: 'May 2025 – Present',
    description: 'Automation and end-user testing for Navy-Marine Corps Intranet'
  },
  {
    title: 'Software Engineering Fellow',
    company: 'HeadstarterAI Fellowship',
    date: 'July 2024 – Sept 2024',
    description: 'Built and deployed 5 AI projects in 7 weeks using React JS, Next.js, Firebase, Clerk, and Vercel. Developed interactive customer support agents and AI-powered applications.'
  },
  {
    title: 'Full Stack Web Developer',
    company: 'dimensionEd',
    date: 'March 2022 – June 2022',
    description: 'Frontend development using Vue.js and React.js, configured Stripe payment system, and managed user authentication with OAuth and Firebase.'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#007AFF] to-[#0066CC] bg-clip-text text-transparent"
        >
          Experience
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
                    {exp.title}
                  </h3>
                  <p className="text-[#007AFF] font-medium mt-1">{exp.company}</p>
                </div>
                <span className="text-zinc-400 text-sm mt-2 md:mt-0 whitespace-nowrap">
                  {exp.date}
                </span>
              </div>
              <p className="text-zinc-300 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

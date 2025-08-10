// // pages/index.js
// import { useState } from 'react'
// import Head from 'next/head'
// import { motion } from 'framer-motion'
// import emailjs from '@emailjs/browser'

// export default function Home() {
//   const [currentLanguage, setCurrentLanguage] = useState('en')
//   const [contactForm, setContactForm] = useState({
//     name: '',
//     email: '',
//     message: ''
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitStatus, setSubmitStatus] = useState('')

//   const translations = {
//     en: {
//         'hero.name': 'Evan Thoms',
//         'hero.role': 'Technical Intern at Leidos',
//         'hero.tagline': 'Building intelligent solutions with modern web technologies',
//         'hero.resume': 'Resume',
//         'tech.title': 'Technologies',
//         'tech.frontend': 'Frontend',
//         'tech.backend': 'Backend & AI',
//         'tech.tools': 'Tools & Other',
//         'experience.title': 'Experience',
//         'experience.leidos.title': 'Technical Intern',
//         'experience.leidos.date': 'May 2025 – Present',
//         'experience.leidos.desc': 'Automation and end-user testing for Navy-Marine Corps Intranet',
//         'experience.headstarter.title': 'Software Engineering Fellow',
//         'experience.headstarter.date': 'July 2024 – Sept 2024',
//         'experience.headstarter.desc': 'Built and deployed 5 AI projects in 7 weeks using React JS, Next.js, Firebase, Clerk, and Vercel. Developed interactive customer support agents and AI-powered applications.',
//         'experience.dimensioned.title': 'Full Stack Web Developer',
//         'experience.dimensioned.date': 'March 2022 – June 2022',
//         'experience.dimensioned.desc': 'Frontend development using Vue.js and React.js, configured Stripe payment system, and managed user authentication with OAuth and Firebase.',
//         'projects.title': 'Projects'
//     },
//     es: {
//         'hero.name': 'Evan Thoms',
//         'hero.role': 'Interno Técnico en Leidos',
//         'hero.tagline': 'Construyendo soluciones inteligentes con tecnologías web modernas',
//         'hero.resume': 'Currículum',
//         'tech.title': 'Tecnologías',
//         'tech.frontend': 'Frontend',
//         'tech.backend': 'Backend e IA',
//         'tech.tools': 'Herramientas y Otros',
//         'experience.title': 'Experiencia',
//         'experience.leidos.title': 'Interno Técnico',
//         'experience.leidos.date': 'Mayo 2025 – Presente',
//         'experience.leidos.desc': 'Automatización y pruebas de usuario final para Navy-Marine Corps Intranet',
//         'projects.title': 'Proyectos'
//     },
//     ru: {
//         'hero.name': 'Иван Томс',
//         'hero.role': 'Технический стажёр в Leidos',
//         'hero.tagline': 'Создание интеллектуальных решений с современными веб-технологиями',
//         'hero.resume': 'Резюме',
//         'tech.title': 'Технологии',
//         'tech.frontend': 'Фронтенд',
//         'tech.backend': 'Бэкенд и ИИ',
//         'tech.tools': 'Инструменты и Прочее',
//         'experience.title': 'Опыт',
//         'experience.leidos.title': 'Технический стажёр',
//         'experience.leidos.date': 'Май 2025 – Настоящее время',
//         'experience.leidos.desc': 'Автоматизация и тестирование конечных пользователей для Navy-Marine Corps Intranet',
//         'projects.title': 'Проекты'
//     },
//     zh: {
//         'hero.name': '陈浩天',
//         'hero.role': 'Leidos 技术实习生',
//         'hero.tagline': '用现代网络技术构建智能解决方案',
//         'hero.resume': '简历',
//         'tech.title': '技术',
//         'tech.frontend': '前端',
//         'tech.backend': '后端与人工智能',
//         'tech.tools': '工具与其他',
//         'experience.title': '经验',
//         'experience.leidos.title': '技术实习生',
//         'experience.leidos.date': '2025年5月 – 至今',
//         'experience.leidos.desc': 'Navy-Marine Corps Intranet的自动化和最终用户测试',
//         'projects.title': '项目'
//     },
//     ar: {
//         'hero.name': 'إيفان توماس',
//         'hero.role': 'متدرب تقني في Leidos',
//         'hero.tagline': 'بناء حلول ذكية بتقنيات الويب الحديثة',
//         'hero.resume': 'السيرة الذاتية',
//         'tech.title': 'التقنيات',
//         'tech.frontend': 'الواجهة الأمامية',
//         'tech.backend': 'الواجهة الخلفية والذكاء الاصطناعي',
//         'tech.tools': 'الأدوات وأخرى',
//         'experience.title': 'الخبرة',
//         'experience.leidos.title': 'متدرب تقني',
//         'experience.leidos.date': 'مايو 2025 – الحاضر',
//         'experience.leidos.desc': 'الأتمتة واختبار المستخدم النهائي لشبكة Navy-Marine Corps الداخلية',
//         'projects.title': 'المشاريع'
//     }
// };

//   const t = (key) => translations[currentLanguage]?.[key] || translations.en[key] || key

//   const handleContactSubmit = async (e) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     try {
//       // Replace with your EmailJS service details
//       await emailjs.send(
//         'service_jta78lb',
//         'template_d1inmfe',
//         {
//           from_name: contactForm.name,
//           from_email: contactForm.email,
//           message: contactForm.message,
//           to_name: 'Evan Thoms'
//         },
//         'zj8_IAkIV_2q-wbFo'
//       )
      
//       setSubmitStatus('success')
//       setContactForm({ name: '', email: '', message: '' })
//     } catch (error) {
//       setSubmitStatus('error')
//     }
    
//     setIsSubmitting(false)
//     setTimeout(() => setSubmitStatus(''), 3000)
//   }

//   const fadeInUp = {
//     initial: { opacity: 0, y: 60 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 }
//   }

//   return (
//     <>
//       <Head>
//         <title>Evan Thoms - Developer Portfolio</title>
//         <meta name="description" content="Technical Intern at Leidos building intelligent solutions with modern web technologies" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl z-50 border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <motion.a 
//               href="#home" 
//               className="text-xl font-semibold text-white hover:text-blue-400 transition-colors"
//               whileHover={{ scale: 1.05 }}
//             >
//               Evan Thoms
//             </motion.a>
            
//             <div className="flex items-center space-x-8">
//               <a href="#about" className="text-white/80 hover:text-blue-400 transition-colors">{t('nav.about')}</a>
//               <a href="#technologies" className="text-white/80 hover:text-blue-400 transition-colors">{t('nav.tech')}</a>
//               <a href="#experience" className="text-white/80 hover:text-blue-400 transition-colors">{t('nav.experience')}</a>
//               <a href="#projects" className="text-white/80 hover:text-blue-400 transition-colors">{t('nav.projects')}</a>
//               <a href="#contact" className="text-white/80 hover:text-blue-400 transition-colors">{t('nav.contact')}</a>
              
//               <select 
//                 value={currentLanguage} 
//                 onChange={(e) => setCurrentLanguage(e.target.value)}
//                 className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white text-sm"
//               >
//                 <option value="en">EN</option>
//                 <option value="es">ES</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
//         <div className="absolute inset-0 bg-blue-500/5 blur-3xl"></div>
        
//         <motion.div 
//           className="text-center z-10"
//           initial="initial"
//           animate="animate"
//           variants={fadeInUp}
//         >
//           <motion.h1 
//             className="text-5xl md:text-7xl font-light text-white mb-4 tracking-tight"
//             variants={fadeInUp}
//           >
//             {t('hero.name')}
//           </motion.h1>
//           <motion.p 
//             className="text-xl text-gray-400 mb-2"
//             variants={fadeInUp}
//           >
//             {t('hero.role')}
//           </motion.p>
//           <motion.p 
//             className="text-lg text-blue-400 mb-8 max-w-2xl mx-auto"
//             variants={fadeInUp}
//           >
//             {t('hero.tagline')}
//           </motion.p>
          
//           <motion.div 
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//             variants={fadeInUp}
//           >
//             <motion.a 
//               href="https://github.com/evan-thoms"
//               className="px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               GitHub
//             </motion.a>
//             <motion.a 
//               href="https://linkedin.com/in/evan-thoms"
//               className="px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               LinkedIn
//             </motion.a>
//             <motion.a 
//               href="#contact"
//               className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-all duration-300"
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {t('hero.resume')}
//             </motion.a>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Technologies Section */}
//       <section id="technologies" className="py-20 bg-gray-900/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.h2 
//             className="text-4xl font-light text-white text-center mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             {t('tech.title')}
//           </motion.h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: t('tech.frontend'),
//                 skills: ['JavaScript', 'React.js', 'Next.js', 'Tailwind CSS']
//               },
//               {
//                 title: t('tech.backend'),
//                 skills: ['Python', 'OpenAI GPT-4', 'LangChain', 'Pinecone']
//               },
//               {
//                 title: t('tech.tools'),
//                 skills: ['Git/GitHub', 'Firebase', 'Numpy', 'Pandas']
//               }
//             ].map((category, index) => (
//               <motion.div 
//                 key={index}
//                 className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//               >
//                 <h3 className="text-xl font-medium text-blue-400 mb-4">{category.title}</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {category.skills.map((skill, skillIndex) => (
//                     <span 
//                       key={skillIndex}
//                       className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section id="experience" className="py-20 bg-black">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.h2 
//             className="text-4xl font-light text-white text-center mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             {t('experience.title')}
//           </motion.h2>
          
//           <div className="space-y-8">
//             {[
//               {
//                 title: 'Technical Intern',
//                 company: 'Leidos',
//                 date: 'May 2025 – Present',
//                 description: 'Automation and end-user testing for Navy-Marine Corps Intranet'
//               },
//               {
//                 title: 'Software Engineering Fellow',
//                 company: 'HeadstarterAI Fellowship',
//                 date: 'July 2024 – Sept 2024',
//                 description: 'Built and deployed 5 AI projects in 7 weeks using React JS, Next.js, Firebase, Clerk, and Vercel. Developed interactive customer support agents and AI-powered applications.'
//               },
//               {
//                 title: 'Full Stack Web Developer',
//                 company: 'dimensionEd',
//                 date: 'March 2022 – June 2022',
//                 description: 'Frontend development using Vue.js and React.js, configured Stripe payment system, and managed user authentication with OAuth and Firebase.'
//               }
//             ].map((exp, index) => (
//               <motion.div 
//                 key={index}
//                 className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ x: 10 }}
//               >
//                 <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
//                   <div>
//                     <h3 className="text-xl font-medium text-white">{exp.title}</h3>
//                     <p className="text-blue-400">{exp.company}</p>
//                   </div>
//                   <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.date}</span>
//                 </div>
//                 <p className="text-gray-300 leading-relaxed">{exp.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-20 bg-gray-900/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.h2 
//             className="text-4xl font-light text-white text-center mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             {t('projects.title')}
//           </motion.h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: 'LumiFlash',
//                 description: 'AI-powered flashcard generator using Llama 3.1 LLM with RAG pipeline integration for PDF-based learning.',
//                 tech: ['Next.js', 'Llama 3.1', 'LangChain', 'Pinecone', 'Stripe'],
//                 github: '#',
//                 demo: '#'
//               },
//               {
//                 title: 'ProfAI',
//                 description: 'Interactive chatbot that scrapes Rate My Professor data to help students make informed course decisions.',
//                 tech: ['Next.js', 'Puppeteer', 'Pinecone', 'Material UI'],
//                 github: '#',
//                 demo: '#'
//               },
//               {
//                 title: 'Portfolio Website',
//                 description: 'Modern portfolio website built with Next.js, featuring multilingual support and contact form.',
//                 tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
//                 github: '#',
//                 demo: '#'
//               }
//             ].map((project, index) => (
//               <motion.div 
//                 key={index}
//                 className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ y: -10 }}
//               >
//                 <h3 className="text-xl font-medium text-white mb-4">{project.title}</h3>
//                 <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.tech.map((tech, techIndex) => (
//                     <span 
//                       key={techIndex}
//                       className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-xs border border-blue-500/30"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
                
//                 <div className="flex gap-4">
//                   <motion.a 
//                     href={project.github}
//                     className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     GitHub
//                   </motion.a>
//                   <motion.a 
//                     href={project.demo}
//                     className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     Live Demo
//                   </motion.a>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 bg-black">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.h2 
//             className="text-4xl font-light text-white text-center mb-16"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             {t('contact.title')}
//           </motion.h2>
          
//           <motion.div 
//             className="max-w-2xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <form onSubmit={handleContactSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="name" className="block text-white mb-2">{t('contact.name')}</label>
//                   <input
//                     type="text"
//                     id="name"
//                     required
//                     value={contactForm.name}
//                     onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
//                     className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-white mb-2">{t('contact.email')}</label>
//                   <input
//                     type="email"
//                     id="email"
//                     required
//                     value={contactForm.email}
//                     onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
//                     className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
//               </div>
              
//               <div>
//                 <label htmlFor="message" className="block text-white mb-2">{t('contact.message')}</label>
//                 <textarea
//                   id="message"
//                   rows={5}
//                   required
//                   value={contactForm.message}
//                   onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
//                   className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//                 ></textarea>
//               </div>
              
//               <div className="text-center">
//                 <motion.button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-300"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {isSubmitting ? 'Sending...' : t('contact.send')}
//                 </motion.button>
//               </div>
              
//               {submitStatus && (
//                 <motion.div 
//                   className={`text-center p-4 rounded-lg ${submitStatus === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                 >
//                   {submitStatus === 'success' ? t('contact.success') : t('contact.error')}
//                 </motion.div>
//               )}
//             </form>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 bg-black border-t border-white/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center text-gray-400">
//             <p>&copy; 2025 Evan Thoms. Built with Next.js and Tailwind CSS.</p>
//           </div>
//         </div>
//       </footer>
//     </>
//   )
// }
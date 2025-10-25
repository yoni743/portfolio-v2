import { useState } from 'react'
import { motion } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

export default function App() {
  const [active, setActive] = useState('home')

  return (
    <div className="min-h-screen flex flex-col">
      <Nav active={active} onChange={setActive} />
      <main className="flex-1">
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} id="home">
          <Hero />
        </motion.section>
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} id="about" className="py-16">
          <About />
        </motion.section>
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} id="projects" className="py-16 bg-white dark:bg-slate-900">
          <Projects />
        </motion.section>
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} id="skills" className="py-16">
          <Skills />
        </motion.section>
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} id="contact" className="py-16 bg-white dark:bg-slate-900">
          <Contact />
        </motion.section>
      </main>
      <footer className="py-8 text-center text-sm text-gray-500 dark:text-slate-400">© {new Date().getFullYear()} Yonatan Kibrom Mezgebe</footer>
    </div>
  )
}

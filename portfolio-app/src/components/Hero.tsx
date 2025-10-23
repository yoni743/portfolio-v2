import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="text-primary-600">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Full Stack Developer passionate about creating beautiful, functional, and user-centered digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300">
              View My Work
            </button>
            <button className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-300">
              Download CV
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <a
              href="https://github.com"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={32} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-300"
            >
              <Mail size={32} />
            </a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={scrollToNext}
            className="text-gray-600 hover:text-primary-600 transition-colors duration-300"
          >
            <ChevronDown size={32} className="animate-bounce" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default Hero

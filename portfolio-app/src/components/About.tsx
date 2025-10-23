import React from 'react'
import { motion } from 'framer-motion'
import { User, Award, Coffee } from 'lucide-react'

const About = () => {
  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '20+', label: 'Happy Clients' },
  ]

  const features = [
    {
      icon: <User className="w-8 h-8 text-primary-600" />,
      title: 'User-Focused',
      description: 'I prioritize user experience and accessibility in every project I work on.'
    },
    {
      icon: <Award className="w-8 h-8 text-primary-600" />,
      title: 'Quality Code',
      description: 'I write clean, maintainable, and well-documented code following best practices.'
    },
    {
      icon: <Coffee className="w-8 h-8 text-primary-600" />,
      title: 'Passionate',
      description: 'I love what I do and constantly learn new technologies to stay up-to-date.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer with a love for creating digital experiences that make a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              A Little About Myself
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a full-stack developer with over 3 years of experience building web applications. 
              I specialize in React, Node.js, and modern web technologies. I love creating 
              user-friendly interfaces and solving complex problems with elegant solutions.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or enjoying a good cup of coffee while reading about the 
              latest trends in web development.
            </p>
            <div className="flex flex-wrap gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-600">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-32 h-32 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-center text-gray-900">Your Name</h4>
                <p className="text-center text-gray-600">Full Stack Developer</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About

import React from 'react'
import { motion } from 'framer-motion'
import {
  Code,
  Database,
  Smartphone,
  Cloud,
  GitBranch,
  Shield,
  FileCode,
  FileText,
  Server,
  Terminal,
  Github
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-8 h-8 text-primary-600" />,
      skills: [
        { name: 'React', icon: <Code className="w-6 h-6" />, level: 90 },
        { name: 'TypeScript', icon: <Code className="w-6 h-6" />, level: 85 },
        { name: 'JavaScript', icon: <Code className="w-6 h-6" />, level: 95 },
        { name: 'HTML', icon: <FileCode className="w-6 h-6" />, level: 95 },
        { name: 'CSS', icon: <FileText className="w-6 h-6" />, level: 90 },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Database className="w-8 h-8 text-primary-600" />,
      skills: [
        { name: 'Node.js', icon: <Server className="w-6 h-6" />, level: 85 },
        { name: 'Python', icon: <Terminal className="w-6 h-6" />, level: 80 },
        { name: 'Express.js', icon: <Code className="w-6 h-6" />, level: 85 },
        { name: 'MongoDB', icon: <Database className="w-6 h-6" />, level: 75 },
        { name: 'PostgreSQL', icon: <Database className="w-6 h-6" />, level: 80 },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <GitBranch className="w-8 h-8 text-primary-600" />,
      skills: [
        { name: 'Git', icon: <Github className="w-6 h-6" />, level: 90 },
        { name: 'Docker', icon: <Server className="w-6 h-6" />, level: 70 },
        { name: 'AWS', icon: <Cloud className="w-6 h-6" />, level: 65 },
        { name: 'Figma', icon: <Smartphone className="w-6 h-6" />, level: 75 },
        { name: 'VS Code', icon: <Code className="w-6 h-6" />, level: 95 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900 ml-3">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {skill.icon}
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-primary-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Always Learning
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm constantly learning new technologies and improving my skills. 
            Currently exploring Next.js, GraphQL, and advanced React patterns.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

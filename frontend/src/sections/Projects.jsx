import { motion } from 'framer-motion'
import projects from '../data/projects'

export default function Projects() {
  return (
    <div className="container">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.4 }}
            className="rounded-lg border bg-white overflow-hidden dark:bg-slate-800 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
          >
            <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-1 dark:text-slate-300">{p.description}</p>
              <div className="flex gap-4 mt-4 text-sm">
                {p.demo && (
                  <a className="text-primary inline-flex items-center gap-1" href={p.demo} target="_blank" rel="noreferrer" aria-label={`Open demo for ${p.title}`}>
                    <span>🔗</span> Demo
                  </a>
                )}
                {p.github && (
                  <a className="text-primary inline-flex items-center gap-1" href={p.github} target="_blank" rel="noreferrer" aria-label={`Open GitHub for ${p.title}`}>
                    <span>🐙</span> GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

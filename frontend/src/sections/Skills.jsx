import { motion } from 'framer-motion'

export default function Skills() {
  const groups = [
    {
      title: 'Programming Languages',
      items: ['Python', 'JavaScript', 'C++', 'C'],
    },
    {
      title: 'Frameworks & Libraries',
      items: ['React', 'Node.js', 'Express', 'Flask', 'Tailwind CSS'],
    },
    {
      title: 'Databases',
      items: ['MongoDB', 'MySQL'],
    },
    {
      title: 'Tools & Platforms',
      items: ['Git', 'GitHub', 'Netlify', 'Render', 'VS Code', 'Docker'],
    },
    {
      title: 'Other',
      items: ['REST APIs', 'Algorithms', 'Data Structures', 'UI/UX basics'],
    },
  ]

  return (
    <div className="container">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="rounded-lg border p-4 bg-white dark:bg-slate-800 dark:border-slate-700"
          >
            <h3 className="font-semibold mb-3">{g.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li
                  key={s}
                  className="px-3 py-1 rounded-full border text-sm bg-white text-gray-800 border-slate-200 dark:bg-slate-900 dark:text-gray-100 dark:border-slate-700 transition-colors duration-300"
                >
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

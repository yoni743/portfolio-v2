import { motion } from 'framer-motion'

export default function Education() {
  return (
    <div className="container">
      <h2 className="text-3xl font-bold">Education</h2>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-6 rounded-lg border p-5 bg-white dark:bg-slate-800 dark:border-slate-700 shadow-sm"
      >
        <h3 className="text-xl font-semibold">B.Sc. in Computer Science and Engineering</h3>
        <p className="text-gray-600 dark:text-slate-300 mt-1">Adama Science and Technology University, Ethiopia</p>
        <p className="mt-2 text-sm text-gray-500 dark:text-slate-400">
          <span className="font-medium">Expected Graduation:</span> July 2026
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-slate-300">
          <span className="font-medium">Focus:</span> Software Development, AI, Algorithms, and Full-Stack Engineering
        </p>
      </motion.div>
    </div>
  )
}

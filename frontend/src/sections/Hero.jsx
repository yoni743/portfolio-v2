import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="container py-20 md:py-28">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm Yonatan Kibrom Mezgebe
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-gray-600 dark:text-slate-300 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
      >
        Full-Stack Developer based in Mekelle, Tigray, Ethiopia. I build fast, user‑friendly web apps with React, Node.js, and modern tooling.
      </motion.p>
      <motion.p
        className="mt-2 text-sm text-gray-500 dark:text-slate-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
      >
        Connect: <a className="text-primary underline" href="https://www.linkedin.com/in/yonatan-kibrom-827a2028b" target="_blank" rel="noreferrer">LinkedIn</a> · <a className="text-primary underline" href="https://github.com/yoni743" target="_blank" rel="noreferrer">GitHub</a>
      </motion.p>
      <motion.div className="mt-8 flex gap-4 flex-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <a href="#projects" className="px-5 py-2.5 rounded bg-primary text-white">View Projects</a>
        <a href="#contact" className="px-5 py-2.5 rounded border">Contact Me</a>
        <a href="/Yonatan Kibrom_RESUME.pdf" className="px-5 py-2.5 rounded border" target="_blank" rel="noreferrer" aria-label="Download Resume PDF">Download Resume</a>
      </motion.div>
    </div>
  )
}

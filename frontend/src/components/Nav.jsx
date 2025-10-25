import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Nav({ active, onChange }) {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved === 'dark') return true
      if (saved === 'light') return false
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    } catch {
      return false
    }
  })

  useEffect(() => {
    // Close mobile menu on scroll
    const handler = () => setOpen(false)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    // Sync DOM class and persist preference whenever 'dark' changes
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      try { localStorage.setItem('theme', 'dark') } catch {}
    } else {
      root.classList.remove('dark')
      try { localStorage.setItem('theme', 'light') } catch {}
    }
  }, [dark])

  const toggleTheme = () => {
    setDark((v) => !v)
  }

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    onChange?.(id)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur border-b dark:border-slate-800">
      <div className="container flex items-center justify-between py-3">
        <div className="font-bold text-lg">Yonatan Kibrom Mezgebe</div>
        <div className="flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ rotate: 0 }}
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-2 rounded border border-transparent hover:border-slate-300 dark:hover:border-slate-700"
          >
            {dark ? (
              // Dark mode active: show sun to indicate switching back to light
              <motion.span initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} className="inline-block">
                ☀
              </motion.span>
            ) : (
              // Light mode active: show moon to indicate switching to dark
              <motion.span initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} className="inline-block">
                ☾
              </motion.span>
            )}
          </motion.button>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            ☰
          </button>
        </div>
        <nav className={`${open ? 'block' : 'hidden'} md:block`}>
          <ul className="md:flex gap-6">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  className={`py-2 hover:text-primary ${active === l.id ? 'text-primary' : ''}`}
                  onClick={() => scrollTo(l.id)}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

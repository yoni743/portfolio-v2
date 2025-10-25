import { useEffect, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [state, handleSubmit] = useForm('mgvpwnpa')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  useEffect(() => {
    if (state.succeeded) {
      setForm({ name: '', email: '', message: '' })
    }
  }, [state.succeeded])

  return (
    <div className="container">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="text-gray-600 dark:text-slate-300 mt-2">
        Have a question or want to work together? Send a message or reach me at
        {' '}<a className="text-primary underline" href="mailto:yonatankibrom4@gmail.com">yonatankibrom4@gmail.com</a>
        {' '}or on{' '}
        <a className="text-primary underline" href="https://www.linkedin.com/in/yonatan-kibrom-827a2028b" target="_blank" rel="noreferrer">LinkedIn</a>.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4 max-w-xl">
        <input
          className="border rounded px-3 py-2 bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/40"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={onChange}
          required
        />
        <input
          className="border rounded px-3 py-2 bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/40"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={onChange}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          className="border rounded px-3 py-2 h-32 bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/40"
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={onChange}
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button
          className="px-5 py-2.5 rounded bg-primary text-white disabled:opacity-60 shadow hover:shadow-md transition-shadow"
          disabled={state.submitting}
          aria-label="Send contact message"
        >
          {state.submitting ? 'Sending…' : 'Send Message'}
        </button>
        {state.succeeded && <p className="text-green-600">Thanks! I'll get back to you soon.</p>}
      </form>
    </div>
  )
}

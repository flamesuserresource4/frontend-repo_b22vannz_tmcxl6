import { useState } from 'react'

export default function Contact() {
  const [note, setNote] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const message = form.get('message')
    if (!name || !email || !message) return
    setNote('Message sent (demo). We\'ll get back to you soon!')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-8 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/70">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">Contact sales</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Tell us about your product and we\'ll craft a tailored demo.
          </p>
          <form onSubmit={onSubmit} className="mt-6 space-y-3">
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-slate-300/70 bg-white/80 px-3 py-2 text-slate-900 placeholder-slate-400 outline-none ring-pink-300 focus:ring-2 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-100"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-300/70 bg-white/80 px-3 py-2 text-slate-900 placeholder-slate-400 outline-none ring-indigo-300 focus:ring-2 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-100"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="What are you building?"
              className="w-full rounded-lg border border-slate-300/70 bg-white/80 px-3 py-2 text-slate-900 placeholder-slate-400 outline-none ring-emerald-300 focus:ring-2 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-100"
              required
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-pink-300 to-indigo-300 px-4 py-2 font-semibold text-slate-900 shadow hover:brightness-105 dark:from-pink-400/30 dark:to-indigo-400/30 dark:text-slate-100"
            >
              Send message
            </button>
          </form>
          {note && <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{note}</p>}
        </div>

        <div className="flex flex-col justify-center rounded-2xl border border-slate-200/70 bg-white/70 p-8 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/70">
          <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Why teams choose us</h4>
          <ul className="mt-4 space-y-3 text-slate-700 dark:text-slate-300">
            <li>• Elegant APIs for cards, payments, and accounts</li>
            <li>• Clear docs and examples to ship quickly</li>
            <li>• Privacy-first, secure by design</li>
            <li>• Human support when you need it</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

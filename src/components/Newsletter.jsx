import { useState } from 'react'

export default function Newsletter() {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    if (!email) return
    setStatus('Thanks for subscribing! We\'ll be in touch soon.')
    e.currentTarget.reset()
  }

  return (
    <section className="relative z-10 mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-8 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/70">
        <h3 className="text-center text-2xl font-semibold text-slate-900 dark:text-slate-50">
          Stay in the loop
        </h3>
        <p className="mt-2 text-center text-slate-600 dark:text-slate-300">
          Product updates, best practices, and resources—straight to your inbox.
        </p>
        <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full flex-1 rounded-lg border border-slate-300/70 bg-white/80 px-3 py-3 text-slate-900 placeholder-slate-400 outline-none ring-pink-300 focus:ring-2 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-100"
            required
          />
          <button
            type="submit"
            className="rounded-lg bg-gradient-to-r from-pink-300 to-indigo-300 px-6 py-3 font-semibold text-slate-900 shadow hover:brightness-105 dark:from-pink-400/30 dark:to-indigo-400/30 dark:text-slate-100"
          >
            Subscribe
          </button>
        </form>
        {status && (
          <p className="mt-3 text-center text-sm text-slate-700 dark:text-slate-300">{status}</p>
        )}
      </div>
    </section>
  )
}

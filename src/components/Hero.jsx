import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Rocket, Shield, Zap } from 'lucide-react'

export default function Hero() {
  const [mode, setMode] = useState('signup')
  const [message, setMessage] = useState('')

  const onAuthSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    if (!email || !password) {
      setMessage('Please fill in all fields.')
      return
    }
    setMessage(
      mode === 'signup'
        ? 'Account created (demo). Connect your backend to enable real auth.'
        : 'Signed in (demo). Connect your backend to enable real auth.'
    )
    e.currentTarget.reset()
  }

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil to improve contrast (does not block pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 dark:from-slate-900/70 dark:via-slate-900/40 dark:to-slate-900/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-8 pb-24 sm:pt-12 lg:pb-32">
        {/* Top badge */}
        <div className="mb-6 flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-sm text-slate-700 shadow-sm backdrop-blur dark:bg-slate-900/60 dark:text-slate-200">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-pink-200 text-pink-700 dark:bg-pink-500/20 dark:text-pink-300">
            <Rocket size={16} />
          </span>
          Launch your fintech SaaS faster
        </div>

        <h1 className="text-center text-4xl font-semibold leading-tight text-slate-900 drop-shadow-sm sm:text-5xl md:text-6xl dark:text-slate-50">
          Pastel-simple banking APIs for modern SaaS
        </h1>
        <p className="mt-4 max-w-2xl text-center text-lg text-slate-600 sm:text-xl dark:text-slate-300">
          A minimalist toolkit for cards, payments, and balances — built with a
          soft pastel aesthetic and thoughtful defaults.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#pricing"
            className="rounded-full bg-gradient-to-r from-pink-300 to-indigo-300 px-6 py-3 font-medium text-slate-900 shadow-sm transition hover:brightness-105 dark:from-pink-400/30 dark:to-indigo-400/30 dark:text-slate-100"
          >
            Get Started
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-300/70 bg-white/70 px-6 py-3 font-medium text-slate-800 backdrop-blur transition hover:bg-white/90 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-100"
          >
            Talk to sales
          </a>
        </div>

        {/* Quick value props */}
        <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          <Feature icon={<Shield className="h-4 w-4" />} title="Bank-grade" subtitle="Secure by default" color="from-emerald-200 to-teal-200" />
          <Feature icon={<Zap className="h-4 w-4" />} title="Fast setup" subtitle="Go live in days" color="from-yellow-200 to-orange-200" />
          <Feature icon={<Rocket className="h-4 w-4" />} title="Scalable" subtitle="Built for growth" color="from-indigo-200 to-violet-200" />
        </div>

        {/* Auth card */}
        <div className="mt-10 w-full max-w-md rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/70">
          <div className="mb-4 grid grid-cols-2 rounded-lg bg-slate-100 p-1 text-sm dark:bg-slate-800">
            <button
              type="button"
              onClick={() => {
                setMode('signup');
                setMessage('')
              }}
              className={`rounded-md px-3 py-2 font-medium transition ${
                mode === 'signup'
                  ? 'bg-white text-slate-900 shadow dark:bg-slate-900 dark:text-slate-100'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
              }`}
            >
              Create account
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('signin');
                setMessage('')
              }}
              className={`rounded-md px-3 py-2 font-medium transition ${
                mode === 'signin'
                  ? 'bg-white text-slate-900 shadow dark:bg-slate-900 dark:text-slate-100'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
              }`}
            >
              Sign in
            </button>
          </div>

          <form onSubmit={onAuthSubmit} className="space-y-3">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border border-slate-300/70 bg-white/80 px-3 py-2 text-slate-900 placeholder-slate-400 outline-none ring-pink-300 focus:ring-2 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-100"
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full rounded-lg border border-slate-300/70 bg-white/80 px-3 py-2 text-slate-900 placeholder-slate-400 outline-none ring-indigo-300 focus:ring-2 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-100"
              required
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-pink-300 to-indigo-300 px-4 py-2 font-semibold text-slate-900 shadow hover:brightness-105 dark:from-pink-400/30 dark:to-indigo-400/30 dark:text-slate-100"
            >
              {mode === 'signup' ? 'Create account' : 'Sign in'}
            </button>
          </form>
          {message && (
            <p className="mt-3 text-center text-sm text-slate-700 dark:text-slate-300">{message}</p>
          )}
        </div>
      </div>
    </section>
  )
}

function Feature({ icon, title, subtitle, color }) {
  return (
    <div className="rounded-xl border border-slate-200/70 bg-white/70 p-4 shadow backdrop-blur dark:border-slate-700 dark:bg-slate-900/70">
      <div className={`mb-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${color} px-3 py-1 text-sm text-slate-900 dark:text-slate-100`}>
        {icon}
        <span className="font-medium">{title}</span>
      </div>
      <p className="text-slate-600 dark:text-slate-300">{subtitle}</p>
    </div>
  )
}

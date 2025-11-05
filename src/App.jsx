import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'

function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    // Initialize from system preference on first load
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(prefersDark)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      root.style.setProperty('color-scheme', 'dark')
    } else {
      root.classList.remove('dark')
      root.style.setProperty('color-scheme', 'light')
    }
  }, [dark])

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-indigo-50 to-white text-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 dark:text-slate-100">
      {/* Header */}
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-xl bg-gradient-to-tr from-pink-300 to-indigo-300 shadow"></span>
          <span className="text-lg font-semibold">PastelPay</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex dark:text-slate-300">
          <a href="#pricing" className="hover:text-slate-900 dark:hover:text-white">Pricing</a>
          <a href="#contact" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
          <a href="#newsletter" className="hover:text-slate-900 dark:hover:text-white">Newsletter</a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
            className="rounded-full border border-slate-300/70 bg-white/70 px-3 py-2 text-sm shadow backdrop-blur transition hover:bg-white/90 dark:border-slate-700 dark:bg-slate-800/70"
          >
            {dark ? 'Light' : 'Dark'}
          </button>
          <a
            href="#pricing"
            className="hidden rounded-full bg-gradient-to-r from-pink-300 to-indigo-300 px-4 py-2 text-sm font-medium text-slate-900 shadow-sm hover:brightness-105 md:inline-block dark:from-pink-400/30 dark:to-indigo-400/30 dark:text-slate-100"
          >
            Get Started
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Pricing />
        <div id="newsletter">
          <Newsletter />
        </div>
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200/70 bg-white/60 px-6 py-8 text-sm text-slate-600 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p>© {new Date().getFullYear()} PastelPay. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Privacy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Terms</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

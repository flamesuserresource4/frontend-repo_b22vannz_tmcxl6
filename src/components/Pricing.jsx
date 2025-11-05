import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    cadence: 'Forever',
    features: ['Up to 1,000 API calls/mo', 'Basic analytics', 'Community support'],
    color: 'from-emerald-200 to-teal-200',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$49',
    cadence: 'per month',
    features: ['100k API calls/mo', 'Webhooks & events', 'Priority support'],
    color: 'from-pink-300 to-indigo-300',
    highlight: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    cadence: 'Enterprise',
    features: ['Unlimited usage', 'Dedicated SLA', 'White-glove onboarding'],
    color: 'from-indigo-200 to-violet-200',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-slate-50">Simple, transparent pricing</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Start free. Upgrade when you grow. No hidden fees.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 ${
              t.highlight ? 'ring-2 ring-pink-300/70 dark:ring-pink-400/30' : ''
            }`}
          >
            <div className={`inline-flex rounded-full bg-gradient-to-r ${t.color} px-3 py-1 text-sm text-slate-900 dark:text-slate-100`}>
              {t.name}
            </div>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-4xl font-semibold text-slate-900 dark:text-slate-50">{t.price}</span>
              <span className="text-slate-500 dark:text-slate-400">{t.cadence}</span>
            </div>
            <ul className="mt-6 space-y-2">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-200 text-green-800 dark:bg-green-500/20 dark:text-green-300">
                    <Check size={14} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full rounded-lg bg-gradient-to-r from-pink-300 to-indigo-300 px-4 py-2 font-semibold text-slate-900 shadow hover:brightness-105 dark:from-pink-400/30 dark:to-indigo-400/30 dark:text-slate-100">
              {t.name === 'Scale' ? 'Contact us' : 'Choose plan'}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

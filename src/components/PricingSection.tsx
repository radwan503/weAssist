"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Flame, ShieldCheck, ArrowUpRight, Sparkles } from "lucide-react";

const services = [
  "24/7 Priority Support",
  "Live Chat & Ticketing",
  "Weekly Plugin Updates",
  "WordPress Core Updates",
  "Theme & Security Patches",
];

const plans = [
  {
    name: "Starter",
    price: 99, // monthly
    oldPrice: 199,
    accent: "orange" as const,
    popular: false,
    features: [
      "Slack Support",
      "Monthly Plugin Update",
      "Monthly WP Updates",
      "Monthly Theme Update",
      "Automated Backups",
      "Website Page Caching",
    ],
  },
  {
    name: "Growth",
    price: 249,
    oldPrice: 499,
    accent: "purple" as const,
    popular: true,
    features: [
      "Everything in Starter",
      "Staging Site Management",
      "Priority Bug Fixes",
      "Image Optimization",
      "Checkout Testing",
      "Payment Workflow Testing",
    ],
  },
  {
    name: "Enterprise",
    price: 399,
    oldPrice: 799,
    accent: "green" as const,
    popular: false,
    features: [
      "Everything in Growth",
      "Live/Ticket Support",
      "Daily Uptime Monitoring",
      "WooCommerce Fixes",
      "Advanced Security Scans",
    ],
  },
];

const ACCENT = {
  orange: {
    text: "text-orange-600",
    bg: "bg-orange-600",
    hover: "hover:bg-orange-700",
    ring: "ring-orange-500",
    gradient: "from-orange-500 to-amber-600",
  },
  purple: {
    text: "text-purple-600",
    bg: "bg-purple-600",
    hover: "hover:bg-purple-700",
    ring: "ring-purple-500",
    gradient: "from-purple-600 to-blue-600",
  },
  green: {
    text: "text-emerald-600",
    bg: "bg-emerald-600",
    hover: "hover:bg-emerald-700",
    ring: "ring-emerald-500",
    gradient: "from-emerald-600 to-teal-600",
  },
};

type Cycle = "monthly" | "yearly"; // yearly = 2 months free

export default function PricingSectionModern() {
  const [cycle, setCycle] = useState<Cycle>("monthly");
  const slotsLeft = 10;
  const slotsTotal = 20;
  const progress = Math.min(100, Math.round((1 - slotsLeft / slotsTotal) * 100));

  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      {/* Top accent line */}
      {/* <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500" /> */}

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:px-12 md:grid-cols-4">
        {/* LEFT SIDE */}
        <div className="md:col-span-1 space-y-8">
          {/* Limited offer */}
          <div className="rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 text-white p-6 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider opacity-90">
              <Flame className="h-4 w-4" /> Limited Offer
            </div>
            <div className="mt-2 text-3xl font-extrabold">{slotsLeft} Slots Left</div>
            <p className="text-sm opacity-90">out of {slotsTotal} available</p>

            {/* progress bar */}
            <div className="mt-4 h-2 w-full rounded-full bg-white/20">
              <div className="h-full rounded-full bg-white" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-2 text-xs opacity-90">{progress}% claimed</p>

            <p className="mt-3 text-sm font-medium">
              Secure your marketplace support plan today.
            </p>
            <button className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white/20">
              Get Early Access <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          {/* What's included */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">What’s Included?</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  {s}
                </li>
              ))}
            </ul>
            <button className="mt-6 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700">
              View All Services →
            </button>

            {/* Guarantee */}
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 text-sm shadow-sm">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
              30‑day money‑back guarantee. Cancel anytime.
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-3">
          <div className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
            <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900">
              Flexible Plans for Every Business 
              <span className="inline-block align-middle">🚀</span>
              <p className="ml-1  bg-emerald-100 px-1 text-[10px] font-semibold text-emerald-700 py-2 rounded-full mt-3">2 months free</p>
            </h2>

            {/* Billing toggle */}
            <div className="rounded-full border border-slate-200 bg-white p-1 shadow-sm">
              <div className="grid grid-cols-2 overflow-hidden rounded-full text-sm">
                <button
                  onClick={() => setCycle("monthly")}
                  className={`px-3 py-1.5 ${cycle === "monthly" ? "bg-slate-900 text-white" : "text-slate-700"}`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setCycle("yearly")}
                  className={`px-3 py-1.5 ${cycle === "yearly" ? "bg-slate-900 text-white" : "text-slate-700"}`}
                >
                  Yearly 
                  
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} cycle={cycle} />
            ))}
          </div>

          {/* Comparison strip */}
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Sparkles className="h-4 w-4 text-amber-500" /> Key inclusions across plans
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
              {[
                "Staging",
                "Backups",
                "Security Scans",
                "Uptime",
                "Woo Fixes",
                "Checkout Tests",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" /> {item}
                </div>
              ))}
            </div>
          </div>

          {/* Mini FAQ */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { q: "Can I cancel anytime?", a: "Yes. Plans are month‑to‑month with no lock‑ins." },
              { q: "Do you support WooCommerce?", a: "Absolutely. Growth & Enterprise include checkout testing & fixes." },
              { q: "What’s your response time?", a: "Under 30 minutes for priority incidents (24/7)." },
            ].map((f) => (
              <details key={f.q} className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-medium text-slate-900">{f.q}</span>
                  <span className="text-slate-400 transition group-open:rotate-90">›</span>
                </summary>
                <p className="mt-2 text-sm text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——— Components ——— */
function PlanCard({ plan, cycle }: { plan: typeof plans[number]; cycle: Cycle }) {
  const accent = ACCENT[plan.accent];
  const { pricePerMonth, billedText, strike } = useMemo(() => computePrices(plan, cycle), [plan, cycle]);

  return (
    <div
      className={`relative rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition hover:shadow-xl ${
        plan.popular ? `scale-[1.02] ring-2 ${accent.ring}` : ""
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-3 py-1 text-xs font-semibold text-white shadow">
          Most Popular
        </span>
      )}

      {/* header */}
      <div className="flex items-center justify-between">
        <h3 className={`text-xl font-semibold ${accent.text}`}>{plan.name}</h3>
        <span className="rounded-md border border-slate-200 px-2 py-0.5 text-xs">No setup fee</span>
      </div>

      {/* price */}
      <div className="mt-4">
        <div className="flex items-end gap-2">
          <span className={`text-4xl font-extrabold ${accent.text}`}>${pricePerMonth}</span>
          <span className="text-slate-500">/mo</span>
        </div>
        <p className="text-xs text-slate-500">
          {billedText}
          {strike && <span className="ml-2 line-through">${strike}</span>}
        </p>
      </div>

      {/* features */}
      <ul className="mt-5 space-y-3">
        {plan.features.map((f: string) => (
          <li key={f} className="flex items-center gap-2 text-slate-700">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" /> {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button className={`mt-6 w-full rounded-lg ${accent.bg} ${accent.hover} px-4 py-3 font-semibold text-white transition`}>
        Get Started
      </button>

      {/* small perk */}
      <div className="mt-3 text-center text-xs text-slate-500">
        Includes onboarding call & migration assistance
      </div>

      {/* subtle gradient ring */}
      <div aria-hidden className={`pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 hover:opacity-100 bg-gradient-to-r ${accent.gradient}`} style={{ mixBlendMode: "overlay" }} />
    </div>
  );
}

function computePrices(plan: typeof plans[number], cycle: Cycle) {
  // Monthly shown as is; Yearly = pay for 10 months (2 free)
  const m = plan.price;
  if (cycle === "monthly") {
    return { priceMonthly: m, pricePerMonth: m, billedText: "Billed monthly", strike: plan.oldPrice };
  }
  const yearlyTotal = m * 10; // 2 months free
  const effective = Math.round((yearlyTotal / 12) * 100) / 100; // per-month effective
  const strike = m * 12; // regular 12 month
  return {
    priceMonthly: m,
    pricePerMonth: effective,
    billedText: `Billed yearly at $${yearlyTotal} (2 months free)`,
    strike,
  };
}

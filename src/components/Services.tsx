"use client";
import React from "react";
import { motion } from "framer-motion";

/*
  Upgrades:
  - Stronger section header with eyebrow + subtitle
  - Glassy image cards with gradient rings and subtle parallax hover
  - Richer copy (clear benefits + outcomes)
  - Mini metrics strip per card
  - Secondary inline CTA per service + primary CTA at end
  - Better responsive spacing & consistent typography scale
  - A11y: alt text, aria-labels, focus states
*/

const services = [
  {
    title: "Smart Marketplace Owner!",
    eyebrow: "Done‑for‑you Ops",
    desc:
      "Running a marketplace is complex. We handle uptime, fixes, and updates so you can focus on growth and revenue.",
    outcomes: [
      "Fewer support tickets",
      "Faster page loads",
      "Happier sellers & buyers",
    ],
    points: [
      "Image compression & WebP",
      "Database optimization",
      "Performance tuning & caching",
      "Live chat support",
      "Theme issue triage & updates",
      "Bulk product upload & edits",
    ],
    metrics: [
      { kpi: "<1h", label: "Avg. fix time" },
      { kpi: "+32%", label: "Faster LCP" },
      { kpi: "98%", label: "CSAT" },
    ],
    img:
      "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    title: "Secure Update & Backup",
    eyebrow: "Safety first",
    desc:
      "Automatic, tested backups with point‑in‑time restores. We stage updates safely and roll back if anything breaks.",
    outcomes: ["No risky updates", "Auditable backup logs", "Rapid restores"],
    points: [
      "Automated daily/weekly/monthly",
      "Immutable backup snapshots",
      "One‑click restore workflows",
      "On‑site plugin for self‑checks",
      "Secure core & plugin updates",
    ],
    metrics: [
      { kpi: "AES‑256", label: "Encryption" },
      { kpi: "30d", label: "Retention" },
      { kpi: "Staged", label: "Zero‑downtime" },
    ],
    img:
      "https://images.pexels.com/photos/18471533/pexels-photo-18471533.jpeg",
  },
  {
    title: "Shape Your Imagination",
    eyebrow: "Custom builds",
    desc:
      "Bring us your concept—plugins, themes, or full builds. We’ll design, develop, and ship production‑ready features.",
    outcomes: ["Faster launches", "On‑brand UX", "Clean, maintainable code"],
    points: [
      "Custom plugin development",
      "Company & personal websites",
      "Theme troubleshooting & fixes",
      "E‑commerce implementations",
    ],
    metrics: [
      { kpi: "2‑6w", label: "Typical build" },
      { kpi: "WC/EDD", label: "E‑com ready" },
      { kpi: "QA", label: "Auto tests" },
    ],
    img:
      "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function ServicesSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <BackdropDecor />

      {/* header */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-14 max-w-3xl text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold text-blue-700 ring-1 ring-blue-600/20">
          <Sparkle className="h-4 w-4" /> Services that scale with you
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          Maintenance, Backups, and Custom Builds — handled.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          From day‑to‑day ops to complex launches, our team keeps your marketplace fast, safe, and evolving.
        </p>
      </motion.div>

      {/* list */}
      <div className="space-y-20">
        {services.map((s, idx) => (
          <motion.div
            key={s.title}
            {...fadeUp}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            className="grid items-center gap-10 md:grid-cols-2"
          >
            {/* image */}
            <div className={`${idx % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
              <div className="group relative mx-auto max-w-2xl">
                <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-blue-200 via-fuchsia-200 to-purple-200 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70" />
                <div className="relative rounded-[24px] border border-white/60 bg-white/70 p-2 shadow-lg backdrop-blur">
                  <motion.img
                    src={s.img}
                    alt={`${s.title} – illustrative visual`}
                    className="h-64 w-full rounded-2xl object-cover md:h-80"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 120, damping: 12 }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* content */}
            <div className={`${idx % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-sm font-semibold text-slate-700 ring-1 ring-slate-300/60">
                <Dot className="h-3 w-3" /> {s.eyebrow}
              </div>
              <h3 className="mt-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-extrabold leading-tight text-transparent md:text-4xl">
                {s.title}
              </h3>
              <p className="mt-3 max-w-xl text-lg leading-relaxed text-slate-600">{s.desc}</p>

              {/* outcomes */}
              <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-600">
                {s.outcomes.map((o) => (
                  <li key={o} className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 ring-1 ring-slate-200">
                    <Check className="h-4 w-4 text-emerald-600" /> {o}
                  </li>
                ))}
              </ul>

              {/* points */}
              <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {s.points.map((p) => (
                  <li key={p} className="group flex items-start gap-3 text-base">
                    <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 transition-transform group-hover:scale-110">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-slate-700 transition-colors group-hover:text-slate-900">{p}</span>
                  </li>
                ))}
              </ul>

              {/* metrics strip */}
              <div className="mt-6 grid max-w-md grid-cols-3 gap-3">
                {s.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-center shadow-sm">
                    <div className="text-lg font-bold text-slate-900">{m.kpi}</div>
                    <div className="text-xs text-slate-500">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* inline CTA */}
              <div className="mt-6 inline-flex items-center gap-4">
                <a
                  href="#quote"
                  className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Talk to an expert →
                </a>
                <a
                  href="#more"
                  className="text-sm font-semibold text-slate-700 underline-offset-4 hover:underline"
                  aria-label={`See details for ${s.title}`}
                >
                  See details
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* closing CTA */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto mt-16 max-w-3xl rounded-2xl bg-white p-6 text-center shadow-xl ring-1 ring-slate-200"
      >
        <h4 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          Ready to hand off the busywork?
        </h4>
        <p className="mx-auto mt-2 max-w-xl text-slate-600">
          Get a quick audit and a custom plan for your marketplace in under 48 hours.
        </p>
        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-base font-semibold text-white shadow hover:-translate-y-0.5 transition"
          >
            Get your quote
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-xl bg-slate-100 px-5 py-3 text-base font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-white"
          >
            Watch 2‑min demo
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* ——— Decorations ——— */
function BackdropDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}`}</style>
      <div className="absolute left-[8%] top-[12%] h-28 w-28 animate-[float_7s_ease-in-out_infinite] rounded-full bg-blue-200/50 blur-2xl" />
      <div className="absolute right-[6%] top-[20%] h-24 w-24 animate-[float_6s_ease-in-out_infinite] rounded-full bg-fuchsia-200/50 blur-2xl" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:22px_22px]" />
    </div>
  );
}

/* ——— Inline icons (no deps) ——— */
function Check({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden>
      <path strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function Sparkle({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 3l2.3 4.7L19 10l-4.7 2.3L12 17l-2.3-4.7L5 10l4.7-2.3L12 3z" />
    </svg>
  );
}
function Dot({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}

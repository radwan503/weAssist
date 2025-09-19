"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform, Variants } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Server,
  Lock,
  Activity,
  Cloud,
  Gauge,
  Cpu,
  Database,
  Wrench,
  CheckCircle2,
  ArrowRight,
  FolderSymlink,
  BellRing,
  Sparkles,
  BarChart4,
  Target,
  TimerReset,
} from "lucide-react";

/* ---------------------------- Animations ---------------------------- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

/* ---------------------------- Data models --------------------------- */
const PLATFORMS = ["WordPress", "WooCommerce", "Shopify", "Custom"] as const;
const IMPACT = ["All", "Performance", "Security", "Reliability"] as const;

type Service = {
  title: string;
  desc: string;
  icon: React.ElementType;
  platforms: (typeof PLATFORMS)[number][];
  bullets: string[];
  impact: (typeof IMPACT)[number][];
};

const S: Service[] = [
  {
    title: "Core, Theme & Plugin Updates",
    desc: "Safe updates with visual regression checks and instant rollbacks.",
    icon: Wrench,
    platforms: ["WordPress", "WooCommerce"],
    bullets: ["Staging first", "1‑click rollback", "Change log notes"],
    impact: ["Reliability"],
  },
  {
    title: "Performance & Caching",
    desc: "Core Web Vitals tuned for speed and conversions.",
    icon: Gauge,
    platforms: ["WordPress", "WooCommerce", "Shopify", "Custom"],
    bullets: ["Edge caching", "Image optimization", "INP < 200ms"],
    impact: ["Performance"],
  },
  {
    title: "Security Hardening",
    desc: "WAF, malware scans, least‑privilege access, and audits.",
    icon: Lock,
    platforms: ["WordPress", "WooCommerce", "Shopify", "Custom"],
    bullets: ["WAF rules", "2FA/SSO", "Audit trail"],
    impact: ["Security"],
  },
  {
    title: "Backups & DR",
    desc: "Versioned, encrypted backups with tested restores.",
    icon: Cloud,
    platforms: ["WordPress", "WooCommerce", "Shopify", "Custom"],
    bullets: ["Daily + on‑demand", "Geo‑redundant", "Restore drills"],
    impact: ["Reliability", "Security"],
  },
  {
    title: "Database Health",
    desc: "Indexing, cleanup, and query optimization.",
    icon: Database,
    platforms: ["WordPress", "WooCommerce", "Custom"],
    bullets: ["Slow query logs", "Index review", "Autovacuum tuning"],
    impact: ["Performance"],
  },
  {
    title: "Uptime & Incident Response",
    desc: "24/7 monitoring with escalation and post‑mortems.",
    icon: Activity,
    platforms: ["WordPress", "WooCommerce", "Shopify", "Custom"],
    bullets: ["Multi‑region checks", "Runbooks", "Root cause"],
    impact: ["Reliability"],
  },
  {
    title: "Payments & Checkout QA",
    desc: "Automated flows to validate purchase paths.",
    icon: FolderSymlink,
    platforms: ["WooCommerce", "Shopify"],
    bullets: ["Test cards", "Chargebacks review", "Webhook health"],
    impact: ["Reliability", "Performance"],
  },
  {
    title: "DevOps & Hosting",
    desc: "Server hardening, scaling, and cost optimization.",
    icon: Server,
    platforms: ["Custom", "WordPress", "WooCommerce"],
    bullets: ["Autoscaling", "TLS & HSTS", "Observability"],
    impact: ["Performance", "Security"],
  },
  {
    title: "Proactive Alerts",
    desc: "Noise‑free alerts that catch issues earlier.",
    icon: BellRing,
    platforms: ["WordPress", "WooCommerce", "Shopify", "Custom"],
    bullets: ["SLO burn", "Anomaly detection", "On‑call rota"],
    impact: ["Reliability"],
  },
];

/* =================================================================== */
export default function MaintenancePageNeon() {
  const [platform, setPlatform] = useState<(typeof PLATFORMS)[number]>("WordPress");
  const [impact, setImpact] = useState<(typeof IMPACT)[number]>("All");

  // Parallax glow follow
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const glowX = useTransform(mx, [0, 1], ["-10%", "110%"]);
  const glowY = useTransform(my, [0, 1], ["-10%", "110%"]);

  return (
    <main
      className="relative min-h-screen text-slate-900 selection:bg-fuchsia-200/60 selection:text-slate-900"
      onMouseMove={(e) => {
        const { innerWidth: w, innerHeight: h } = window;
        mx.set(e.clientX / w);
        my.set(e.clientY / h);
      }}
    >
      {/* Neon glass background + moving glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_50%_-20%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(900px_600px_at_100%_20%,rgba(236,72,153,0.20),transparent_60%),radial-gradient(900px_600px_at_0%_80%,rgba(59,130,246,0.18),transparent_60%)]" />
        <motion.div style={{ left: glowX, top: glowY }} className="absolute h-64 w-64 rounded-full bg-fuchsia-400/15 blur-3xl" />
      </div>

      {/* Header */}
      <header className="mx-auto max-w-7xl px-4 lg:px-6 py-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-fuchsia-600" />
            <span className="text-sm font-semibold tracking-wide text-slate-700">Managed Care</span>
          </div>
          <nav className="flex items-center gap-2 text-xs">
            <a href="#services" className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 hover:bg-white">Services</a>
            <a href="#matrix" className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 hover:bg-white">Matrix</a>
            <a href="#process" className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 hover:bg-white">Process</a>
            <a href="#audit" className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 hover:bg-white">Audit</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-10 md:grid-cols-12 items-center">
            <div className="md:col-span-7">
              <motion.h1 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-4xl md:text-5xl font-extrabold leading-tight">
                Maintenance that feels <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">invisible</span>
              </motion.h1>
              <p className="mt-3 max-w-2xl text-slate-600">
                We ship safe updates, watch your vitals, and jump on incidents before
                customers ever notice.
              </p>

              {/* KPI chips */}
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                {[
                  { label: "Uptime", value: "99.99%" },
                  { label: "First reply", value: "<30m" },
                  { label: "Deploys", value: "3k+/mo" },
                ].map((s) => (
                  <span key={s.label} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 backdrop-blur">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span className="font-semibold text-slate-900">{s.value}</span>
                    <span className="text-slate-500">{s.label}</span>
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#audit" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-2 text-white shadow hover:opacity-95">
                  Get a free audit <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#matrix" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-800 hover:bg-slate-50">
                  See coverage matrix
                </a>
              </div>
            </div>

            {/* Glass stats card */}
            <div className="md:col-span-5">
              <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-xl backdrop-blur">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "INP", value: "<200ms" },
                    { label: "LCP", value: "<2.0s" },
                    { label: "Errors", value: "-63%" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl border border-slate-200 bg-white/70 p-3 text-center">
                      <div className="text-base font-bold text-slate-900">{s.value}</div>
                      <div className="text-[10px] text-slate-500">{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-xs text-slate-500 flex items-center gap-2">
                  <BarChart4 className="h-4 w-4" /> Based on last 30 days across managed sites
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section id="services" className="mx-auto max-w-7xl px-4 lg:px-6 pt-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl md:text-3xl font-bold">What we maintain</h2>

          <div className="flex flex-wrap items-center gap-2">
            {/* Platform switcher */}
            <div className="rounded-full border border-slate-200 bg-white p-1 text-sm shadow-sm">
              <div className="grid grid-cols-4 overflow-hidden rounded-full">
                {PLATFORMS.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPlatform(p)}
                    className={`px-3 py-1.5 whitespace-nowrap transition ${platform === p ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-50"}`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
            {/* Impact filter */}
            <div className="rounded-full border border-slate-200 bg-white p-1 text-xs shadow-sm">
              <div className="grid grid-cols-4 overflow-hidden rounded-full">
                {IMPACT.map((i) => (
                  <button
                    key={i}
                    onClick={() => setImpact(i)}
                    className={`px-3 py-1.5 whitespace-nowrap transition ${impact === i ? "bg-fuchsia-600 text-white" : "text-slate-700 hover:bg-slate-50"}`}
                  >
                    {i}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cards with neon edge on hover */}
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {S.filter((s) => s.platforms.includes(platform) && (impact === "All" || s.impact.includes(impact))).map((s) => (
            <motion.article key={s.title} variants={fadeUp} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition">
              <div aria-hidden className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition group-hover:opacity-100" style={{ background: "conic-gradient(from 90deg at 50% 50%, rgba(99,102,241,0.15), rgba(236,72,153,0.15), rgba(99,102,241,0.15))" }} />
              <div className="relative">
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white shadow">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                  </div>
                </div>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Coverage Matrix (unique UI) */}
      <section id="matrix" className="mx-auto max-w-7xl px-4 lg:px-6 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h3 className="text-xl md:text-2xl font-bold">Coverage matrix</h3>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600"><Target className="h-4 w-4"/> Map services to what you use</span>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="text-left text-slate-500">
                  <th className="py-2 pr-3">Service</th>
                  {PLATFORMS.map((p) => (
                    <th key={p} className="py-2 px-3">{p}</th>
                  ))}
                  <th className="py-2 px-3">Impact</th>
                </tr>
              </thead>
              <tbody>
                {S.map((s) => (
                  <tr key={s.title} className="border-t border-slate-200/80">
                    <td className="py-2 pr-3 font-medium text-slate-900">{s.title}</td>
                    {PLATFORMS.map((p) => (
                      <td key={p} className="py-2 px-3">
                        {s.platforms.includes(p) ? (
                          <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500/90" />
                        ) : (
                          <span className="inline-block h-2.5 w-2.5 rounded-full bg-slate-200" />
                        )}
                      </td>
                    ))}
                    <td className="py-2 px-3 text-slate-600">{s.impact.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section id="process" className="mx-auto max-w-7xl px-4 lg:px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold">How it works</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
          {[
            { t: "Audit", d: "Review stack, hosting, security and performance.", icon: ShieldCheck },
            { t: "Plan", d: "Define cadence, alerts and success metrics.", icon: Cpu },
            { t: "Implement", d: "Ship via staging with rollbacks & change logs.", icon: Zap },
            { t: "Monitor", d: "24/7 checks, incidents and monthly reports.", icon: Activity },
          ].map((s, i) => (
            <div key={s.t} className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-2 grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="font-semibold text-slate-900">{i + 1}. {s.t}</div>
              <p className="mt-1 text-sm text-slate-600">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Audit CTA (contentful + form) */}
      <section id="audit" className="mx-auto mt-12 max-w-7xl px-4 lg:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-600 to-fuchsia-600 p-[1px] shadow-sm">
          <div className="rounded-[calc(theme(borderRadius.3xl)-1px)] bg-white p-6 md:p-8">
            <div className="grid items-center gap-6 md:grid-cols-12">
              <div className="md:col-span-7">
                <h3 className="text-2xl md:text-3xl font-bold">Start with a free site audit</h3>
                <p className="mt-1 text-slate-600">We’ll score Core Web Vitals, security and backups, then deliver a plan within 48 hours.</p>
                <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-slate-700 sm:grid-cols-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600"/> No credit card required</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600"/> Tailored recommendations</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600"/> Fixes prioritized by impact</li>
                  <li className="flex items-center gap-2"><TimerReset className="h-4 w-4 text-indigo-600"/> 48‑hour turnaround</li>
                </ul>
              </div>
              <div className="md:col-span-5">
                <form className="grid gap-3" onSubmit={(e) => e.preventDefault()} aria-label="Free audit form">
                  <input className="rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Your name" />
                  <input className="rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Work email" type="email" />
                  <input className="rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Website URL" type="url" />
                  <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-2 text-white shadow hover:opacity-95" type="submit">
                    Get free audit <ArrowRight className="h-4 w-4"/>
                  </button>
                  <p className="text-xs text-slate-500">We’ll email your report within 48 hours.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-12 max-w-4xl px-6 lg:px-12 pb-20">
        <h2 className="text-center text-2xl md:text-3xl font-bold">FAQs</h2>
        <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
          {[
            { q: "WooCommerce & Shopify?", a: "Yes — Woo, Shopify, Dokan and custom stacks via API." },
            { q: "How do updates ship?", a: "Staging first, automated checks, then production with rollback plan." },
            { q: "Work with my host?", a: "We work with AWS, Cloudflare, DigitalOcean and most managed hosts." },
            { q: "Security incidents?", a: "24/7 on‑call, malware cleanup, root‑cause with post‑mortems." },
          ].map((f, i) => (
            <details key={i} className="group px-5 py-4" open={i===0}>
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="font-medium text-slate-900">{f.q}</span>
                <span className="text-slate-400 transition group-open:rotate-90">›</span>
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}

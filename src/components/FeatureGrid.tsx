"use client";
import { motion } from "framer-motion";
import {
  Plug,
  Sparkles,
  Shield,
  Zap,
  Layers,
  FileText,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

/**
 * A modern, content‑rich feature grid with:
 * - Gradient headline and kicker
 * - Denser cards (badges, bullets, mini-CTA)
 * - Subtle 3D hover + gradient ring
 * - Integration strip
 * Tailwind + Framer Motion only.
 */

const FEATURES = [
  {
    icon: Plug,
    title: "Seamless Integrations",
    desc: "Connect Stripe, PayPal, Slack and 100+ apps — unify your workflows in seconds.",
    badge: "New",
    bullets: ["1‑click OAuth", "Zapier / Make.com", "Webhooks & API"],
  },
  {
    icon: Sparkles,
    title: "Visual Page Builder",
    desc: "Drag, drop, and publish stunning layouts with zero code. Build once, scale anywhere.",
    badge: "No‑code",
    bullets: ["Responsive blocks", "Theme tokens", "A/B variants"],
  },
  {
    icon: Shield,
    title: "Advanced Role Control",
    desc: "Define roles with precision — from admins to collaborators. Your data, fully secured.",
    badge: "Security",
    bullets: ["RBAC / ABAC", "SSO / SAML / OIDC", "Audit trail"],
  },
  {
    icon: Zap,
    title: "Lightning‑Fast & SEO‑Ready",
    desc: "Blazing load times and Core Web Vitals excellence baked‑in for better rankings.",
    badge: "Performance",
    bullets: ["INP < 200ms", "LCP optimized", "Accessible by default"],
  },
  {
    icon: Layers,
    title: "Pre‑built Blocks & Templates",
    desc: "A growing library of composable UI blocks — customize freely without starting from scratch.",
    badge: "Library",
    bullets: ["150+ blocks", "Flows & forms", "Email templates"],
  },
  {
    icon: FileText,
    title: "Developer‑First Docs",
    desc: "Clear, type‑safe, example‑rich docs so you ship faster with confidence.",
    badge: "Docs",
    bullets: ["SDKs & snippets", "Cookbook guides", "Live sandboxes"],
  },
] as const;

export default function FeatureGridModern() {
  return (
    <section id="features" className="relative bg-gradient-to-b from-blue-50 via-white to-purple-50 py-20 md:py-28">
      {/* Decorative top accent */}
      {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500" /> */}

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500"
          >
            Build • Secure • Monetize
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-3xl font-extrabold text-transparent md:text-5xl"
          >
            Supercharge Your Workflow
          </motion.h2>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to design experiences, control access, and optimize revenue — fast.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} feature={f} delay={i * 0.06} />)
          )}
        </div>

        {/* Integration strip */}
        {/* <div className="mx-auto mt-12 max-w-7xl">
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-center shadow-sm backdrop-blur">
            <p className="text-sm text-slate-600 flex justify-center items-center gap-10">
              Works with <Logo label="Stripe" /> <Logo label="PayPal" /> <Logo label="Slack" /> <Logo label="Shopify" /> <Logo label="Cloudflare" /> <Logo label="Zapier" /> and more…
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

/* ——— Components ——— */
function FeatureCard({ feature, delay = 0 }: { feature: typeof FEATURES[number]; delay?: number }) {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl"
    >
      {/* gradient ring on hover */}
      <div aria-hidden className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 opacity-0 transition group-hover:opacity-100 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-pink-600/10" />

      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-md">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
            <span className="mt-0.5 inline-flex items-center rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
              {feature.badge}
            </span>
          </div>
        </div>
        <a href="#" className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-700">
          Learn more <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-600">{feature.desc}</p>

      {/* Bullets */}
      {feature.bullets?.length ? (
        <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {feature.bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm text-slate-700">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" /> {b}
            </li>
          ))}
        </ul>
      ) : null}

      {/* Mini CTA */}
      <div className="mt-5">
        <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1.5 text-xs font-medium text-white shadow hover:opacity-95">
          Try it now
        </button>
      </div>
    </motion.div>
  );
}


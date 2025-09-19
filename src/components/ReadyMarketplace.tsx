"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Clock3,
  Headphones,
  Activity,
  Lock,
} from "lucide-react";

/**
 * Props allow drop-in replacement with richer content.
 * Keep your old props; add optional services/stats/badges/ctas/faqs.
 */
export type ReadyMarketplaceProps = {
  title?: string;
  kicker?: string;
  subtitle?: string;
  bulletsLeft?: string[];
  bulletsRight?: string[];
  illustration?: string; // image url
  services?: { title: string; desc: string }[];
  stats?: { label: string; value: string }[];
  badges?: string[]; // e.g., ["SSL Secured", "PCI‑DSS Ready", "24/7 Support"]
  ctas?: { primary: string; secondary?: string; tertiary?: string };
  faqs?: { q: string; a: string }[];
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerCol: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export default function ReadyMarketplaceModern({
  title = "Ready Marketplace!",
  kicker = "Where Marketplaces Thrive with Our Care",
  subtitle = `Do you have a marketplace or e-commerce website?\nDo you need a professional to maintain your website?\nWe are here to provide extra care to your website`,
  bulletsLeft = ["Plugin update", "Server management", "Security management"],
  bulletsRight = ["Bug Fixing", "Content Building", "Cache management"],
  illustration = "heroI.svg",
  services = [
    { title: "Maintenance", desc: "Core, theme & plugin updates with rollback safety." },
    { title: "Performance", desc: "Caching, CDN, image optimization & Core Web Vitals." },
    { title: "Security", desc: "Firewall, malware scans, backups & incident response." },
    { title: "Growth", desc: "SEO fixes, product data sanity & content support." },
  ],
  stats = [
    { label: "Avg. response time", value: "< 30m" },
    { label: "Uptime", value: "99.99%" },
    { label: "Tickets resolved", value: "25k+" },
  ],
  badges = ["SSL Secured", "PCI‑DSS Ready", "24/7 Support"],
  ctas = { primary: "Get a Free Audit", secondary: "Talk to an Expert", tertiary: "See Plans" },
}: ReadyMarketplaceProps) {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-purple-50">
      {/* Decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-purple-200/50 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        {/* LEFT */}
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mb-3 text-center text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-500 md:text-left"
          >
            {kicker}
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent md:text-left"
          >
            {title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mx-auto mt-5 max-w-xl text-center text-lg leading-8 text-slate-600 md:mx-0 md:text-left"
          >
            {subtitle}
          </motion.p>

          {/* Quick trust badges */}
          <motion.div
            variants={staggerCol}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-5 flex flex-wrap items-center gap-2"
          >
            {badges.map((b) => (
              <motion.span
                key={b}
                variants={fadeUp}
                className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-700 backdrop-blur"
              >
                <ShieldCheck className="h-4 w-4 text-emerald-500" /> {b}
              </motion.span>
            ))}
          </motion.div>

          {/* Bullets */}
          <motion.div
            variants={staggerCol}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            <ul className="space-y-3">
              {bulletsLeft.map((b) => (
                <motion.li key={b} variants={fadeUp} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span className="font-medium text-slate-800">{b}</span>
                </motion.li>
              ))}
            </ul>
            <ul className="space-y-3">
              {bulletsRight.map((b) => (
                <motion.li key={b} variants={fadeUp} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span className="font-medium text-slate-800">{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services grid */}
          <motion.div
            variants={staggerCol}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <Lock className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{s.title}</div>
                    <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerCol}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mt-8 grid max-w-xl grid-cols-3 gap-3"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm"
              >
                <div className="text-xl font-bold text-slate-900">{s.value}</div>
                <div className="text-xs text-slate-500">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {ctas?.primary && (
              <a href="#audit" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-white shadow hover:opacity-95">
                {ctas.primary} <ArrowRight className="h-4 w-4" />
              </a>
            )}
            {ctas?.secondary && (
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-800 hover:bg-slate-50">
                {ctas.secondary}
              </a>
            )}
            {ctas?.tertiary && (
              <a href="#plans" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-800 hover:bg-slate-50">
                {ctas.tertiary}
              </a>
            )}
          </motion.div>

          {/* Support row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600"
          >
            <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4"/> SLA: 30‑min first response</span>
            <span className="inline-flex items-center gap-2"><Headphones className="h-4 w-4"/> Chat, Email & On‑call</span>
            <span className="inline-flex items-center gap-2"><Activity className="h-4 w-4"/> Monitoring & Incident Reports</span>
          </motion.div>
        </div>

        {/* RIGHT — Illustration card with animated float & accents */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl bg-white/80 p-6 shadow-xl ring-1 ring-black/5 backdrop-blur"
        >
          {/* subtle floating animation */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <Image src={illustration} alt="Marketplace illustration" width={900} height={560} className="h-auto w-full" />
          </motion.div>

          {/* gradient ring */}
          <div aria-hidden className="pointer-events-none absolute -inset-2 rounded-[28px] bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10" />

          {/* floating accents */}
          <FloatingPill className="left-6 top-8" text="Zero‑downtime updates" delay={0} />
          <FloatingPill className="left-16 top-28" text="1‑click rollback" delay={0.4} />
          <FloatingPill className="right-10 top-12" text="Real‑time alerts" delay={0.9} />
          <FloatingPill className="right-10 bottom-10" text="Daily backups" delay={0.2} />
          <FloatingPill className="left-10 bottom-8" text="CDN + WAF" delay={0.7} />
        </motion.div>
      </div>

 

    </section>
  );
}

/* ——— Tiny helpers ——— */
function FloatingPill({ className = "", text, delay = 0 }: { className?: string; text: string; delay?: number }) {
  return (
    <motion.div
      className={`pointer-events-none absolute inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs text-slate-700 shadow-sm ${className}`}
      initial={{ y: 0, rotate: 0, opacity: 0.95 }}
      animate={{ y: [0, -8, 0], rotate: [0, -3, 0] }}
      transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" /> {text}
    </motion.div>
  );
}


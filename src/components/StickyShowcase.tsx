"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Design Without Limits",
    desc: "Visually craft forms, surveys, and workflows with drag-and-drop simplicity. Zero coding, full flexibility.",
    img: "/gif1.gif",
    tags: ["Drag & Drop", "Reusable Blocks", "Theme-aware"],
    features: [
      "Component library with inputs, logic blocks, and validations",
      "Reusable templates for forms, funnels, and onboarding",
      "Conditional logic (show/hide, route, branch, score)",
      "Autosave drafts and version history for every change",
    ],
    stats: [
      { label: "Build time ↓", value: "65%" },
      { label: "Modules", value: "120+" },
      { label: "Teams using", value: "3.4k" },
    ],
    cta: { primary: "Start Designing", secondary: "See Templates" },
  },
  {
    title: "Control Access Intelligently",
    desc: "Securely manage user roles, gated content, and tiered memberships — all in a few clicks.",
    img: "/gif2.gif",
    tags: ["RBAC", "SSO/SAML", "Audit Logs"],
    features: [
      "Role-based policies with per-field visibility",
      "Rules engine for quotas, rate limits, and approvals",
      "One-click SSO: Google, Microsoft, Okta (SAML/OIDC)",
      "Exportable audit logs & webhooks for SIEM",
    ],
    stats: [
      { label: "Access rules", value: "∞" },
      { label: "SLA uptime", value: "99.99%" },
      { label: "Breach reports", value: "0" },
    ],
    cta: { primary: "Configure Access", secondary: "View Policies" },
  },
  {
    title: "Monetize with Ease",
    desc: "Integrate Stripe, PayPal, or crypto. Charge per submission, subscription, or premium feature effortlessly.",
    img: "/gif3.gif",
    tags: ["Stripe", "PayPal", "Crypto"],
    features: [
      "Plans, coupons, add-ons, usage metering, and proration",
      "Paywalls for steps, blocks, or entire flows",
      "Invoices, tax/VAT, dunning & smart retries",
      "Revenue analytics with cohort and churn views",
    ],
    stats: [
      { label: "Integrations", value: "20+" },
      { label: "Churn ↓", value: "18%" },
      { label: "ARPU ↑", value: "25%" },
    ],
    cta: { primary: "Enable Payments", secondary: "Pricing Examples" },
  },
];

// Small helpers
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
  transition: { duration: 0.5 },
};

function Dot() {
  return (
    <span className="relative inline-block h-2.5 w-2.5">
      <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-30 animate-ping" />
      <span className="absolute inset-0 rounded-full bg-emerald-500" />
    </span>
  );
}

export default function StickyShowcase() {
  const [active, setActive] = useState(0);
  const sentryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.index);
          if (entry.isIntersecting) setActive(idx);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    sentryRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="showcase"
      className="relative py-20 md:py-28 bg-gradient-to-b from-blue-50 via-white to-purple-50"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Sticky visual */}
          <div className="relative lg:sticky lg:top-28 self-start">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={steps[active].img}
                alt={steps[active].title}
                className="w-full h-[400px] object-cover md:h-[500px]"
              />
            </motion.div>

            {/* Modern progress dots */}
            <div className="flex justify-center mt-6 gap-2">
              {steps.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActive(i)}
                  animate={{
                    scale: active === i ? 1.15 : 1,
                    opacity: active === i ? 1 : 0.4,
                  }}
                  className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                    active === i ? "bg-blue-600" : "bg-slate-400"
                  }`}
                  aria-label={`Go to ${steps[i].title}`}
                />
              ))}
            </div>
          </div>

          {/* Scrollable steps with richer content */}
          <div className="space-y-24 md:space-y-36">
            {steps.map((s, i) => (
              <div key={i} className="min-h-[60vh] flex flex-col justify-center">
                <div
                  ref={(el) => {
                    sentryRefs.current[i] = el;
                  }}
                  data-index={i}
                />

                {/* Title + Description */}
                <motion.h3
                  {...fadeUp}
                  className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                  {s.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.05 }}
                  className="mt-3 text-lg text-slate-600 leading-relaxed max-w-xl"
                >
                  {s.desc}
                </motion.p>

                {/* Tags / badges */}
                {s.tags?.length ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="mt-4 flex flex-wrap gap-2"
                  >
                    {s.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </motion.div>
                ) : null}

                {/* Features list */}
                {s.features?.length ? (
                  <motion.ul
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                      hidden: { opacity: 1 },
                      show: {
                        opacity: 1,
                        transition: { staggerChildren: 0.06 },
                      },
                    }}
                    className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl"
                  >
                    {s.features.map((f, idx) => (
                      <motion.li
                        key={idx}
                        variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                        className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
                      >
                        <svg
                          className="mt-1 h-5 w-5 flex-none"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            className="text-emerald-500"
                            d="M5 13l4 4L19 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-slate-700">{f}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                ) : null}

                {/* Quick stats */}
                {s.stats?.length ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="mt-6 grid grid-cols-3 gap-3 max-w-md"
                  >
                    {s.stats.map((st, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg border border-slate-200 bg-white px-3 py-4 text-center"
                      >
                        <div className="text-xl font-bold text-slate-900">{st.value}</div>
                        <div className="text-xs text-slate-500">{st.label}</div>
                      </div>
                    ))}
                  </motion.div>
                ) : null}

                {/* CTA row */}
                {s.cta ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.12 }}
                    className="mt-8 flex items-center gap-3"
                  >
                    <button className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-white shadow hover:shadow-md transition">
                      <Dot />
                      {s.cta.primary}
                    </button>
                    <button className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-700 hover:bg-slate-50">
                      {s.cta.secondary}
                    </button>
                  </motion.div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

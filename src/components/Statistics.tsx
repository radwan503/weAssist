"use client";

import { useMemo, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Users, ShieldCheck, Clock3, Activity, ArrowUpRight, TrendingUp, Headphones } from "lucide-react";

/**
 * Modern, content‑rich statistics section with animated counters,
 * trend chips, mini sparklines, and decorative gradients.
 * Tailwind + Framer Motion only. Drop in and tweak the data below.
 */
export type Stat = {
  kpi: number; // base numeric value for animation
  suffix?: string; // e.g. "+", "%"
  prefix?: string; // e.g. "$"
  label: string; // short title
  desc: string; // supporting copy
  icon?: React.ReactNode;
  color?: string; // Tailwind text color, e.g. "text-emerald-500"
  trend?: { delta: string; direction: "up" | "down"; tone?: "good" | "warn" | "bad" };
  spark?: number[]; // sparkline points (0..100)
};

const DEFAULT_STATS: Stat[] = [
  {
    kpi: 70000,
    suffix: "+",
    label: "Active Marketplaces",
    desc: "Businesses we actively maintain & optimize.",
    icon: <Users className="h-5 w-5" />,
    color: "text-emerald-600",
    trend: { delta: "+3.1%", direction: "up", tone: "good" },
    spark: [22, 32, 28, 40, 44, 58, 61, 70, 73, 80],
  },
  {
    kpi: 40,
    suffix: "+",
    label: "Experts On Your Team",
    desc: "Engineers, analysts, and success managers.",
    icon: <Headphones className="h-5 w-5" />,
    color: "text-orange-600",
    trend: { delta: "+5 hires", direction: "up", tone: "good" },
    spark: [10, 12, 14, 16, 18, 22, 26, 30, 36, 40],
  },
  {
    kpi: 3,
    suffix: " shifts",
    label: "24/7 Coverage",
    desc: "Follow‑the‑sun support — no gaps.",
    icon: <Clock3 className="h-5 w-5" />,
    color: "text-sky-600",
    trend: { delta: "+24/7", direction: "up", tone: "good" },
    spark: [55, 52, 58, 60, 63, 62, 64, 66, 68, 70],
  },
  {
    kpi: 99.99,
    suffix: "%",
    label: "Uptime SLA",
    desc: "Proactive monitoring & instant incident response.",
    icon: <ShieldCheck className="h-5 w-5" />,
    color: "text-rose-600",
    trend: { delta: "+0.02%", direction: "up", tone: "good" },
    spark: [96, 97, 98, 98.3, 98.6, 99, 99.2, 99.5, 99.8, 99.99],
  },
];

export default function Statistics({ stats = DEFAULT_STATS }: { stats?: Stat[] }) {
  return (
    <section className="relative z-10 -mt-36 mx-auto max-w-7xl px-6 pb-24">
 
      {/* Soft blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-purple-200/50 blur-3xl" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: i % 2 === 0 ? 16 : -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group relative h-60 rounded-2xl bg-white/90 p-5 text-center text-slate-900 shadow-xl shadow-black/5 ring-1 ring-black/5 backdrop-blur-md"
          >
            {/* Glow ring on hover */}
            <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
              background:
                "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(99,102,241,0.18), transparent 45%)",
            }} />

            <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow">
              {s.icon ?? <Activity className="h-5 w-5" />}
            </div>

            {/* KPI */}
            <div className={`mt-3 text-2xl font-extrabold ${s.color ?? "text-slate-900"}`}>
              <AnimatedNumber value={s.kpi} suffix={s.suffix} prefix={s.prefix} />
            </div>

            {/* Label */}
            <div className="mt-1 font-semibold">{s.label}</div>

            {/* Desc */}
            <p className="mt-1 line-clamp-2 text-sm text-slate-600">{s.desc}</p>

            {/* Trend + sparkline */}
            <div className="mt-3 flex items-center justify-center gap-2">
              {s.trend && (
                <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs ${trendTone(s.trend.tone)} bg-white`}>
                  <TrendingUp className="h-3.5 w-3.5" /> {s.trend.delta}
                </span>
              )}
              {s.spark && <Sparkline points={s.spark} className="h-8 w-24" />}
            </div>

            {/* Subtle CTA */}
            <a href="#details" className="absolute bottom-3 left-0 right-0 mx-auto inline-flex items-center justify-center gap-1 text-xs text-slate-500 opacity-0 transition group-hover:opacity-100">
              View details <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ——— Helpers ——— */
function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  // Use a ref to store the current displayed value
  const current = useRef(0);

  if (ref.current) {
    // Track mouse position for hover glow
    ref.current.parentElement?.parentElement?.addEventListener("mousemove", (e) => {
      const card = (e.currentTarget as HTMLElement);
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${((e as MouseEvent).clientX - r.left) / r.width * 100}%`);
      card.style.setProperty("--my", `${((e as MouseEvent).clientY - r.top) / r.height * 100}%`);
    }, { passive: true });
  }

  if (inView && ref.current) {
    animate(current.current, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => {
        current.current = v;
        ref.current!.textContent = `${prefix}${formatNumber(v)}${suffix}`;
      },
    });
  }

  return <span ref={ref} />;
}

function formatNumber(v: number) {
  const abs = Math.abs(v);
  const isInt = Number.isInteger(v);
  const val = isInt ? Math.round(v) : v;
  const formatted = abs >= 1000 ? new Intl.NumberFormat(undefined).format(val) : val.toFixed(isInt ? 0 : 2);
  return formatted;
}

function trendTone(tone: "good" | "warn" | "bad" | undefined) {
  switch (tone) {
    case "bad":
      return "border-rose-200 text-rose-600";
    case "warn":
      return "border-amber-200 text-amber-600";
    default:
      return "border-emerald-200 text-emerald-600";
  }
}

function Sparkline({ points = [], className = "" }: { points?: number[]; className?: string }) {
  const d = useMemo(() => {
    if (!points.length) return "";
    const max = Math.max(...points);
    const min = Math.min(...points);
    const norm = points.map((p) => (p - min) / (max - min || 1));
    const w = 96; // 24 * 4 px
    const h = 32; // 8 * 4 px
    const step = w / (points.length - 1);
    let path = `M 0 ${h - norm[0] * h}`;
    norm.forEach((n, i) => {
      if (i === 0) return;
      path += ` L ${i * step} ${h - n * h}`;
    });
    return { path, w, h };
  }, [points]);

  if (!d) return null;

  return (
    <svg viewBox={`0 0 ${d.w} ${d.h}`} className={className} aria-hidden>
      <defs>
        <linearGradient id="spark" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#9333ea" />
        </linearGradient>
      </defs>
      <path d={d.path} fill="none" stroke="url(#spark)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

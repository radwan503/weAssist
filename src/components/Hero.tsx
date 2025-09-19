'use client'

export default function SupportLanding() {
  return (
    <div className="relative min-h-[880px] sm:min-h-[780px] w-full overflow-hidden bg-gradient-to-br from-[#7c3aed] via-[#7c4dff] to-[#8b5cf6] text-white">
      <DecorGrid />
      <WindBackdrop />

      {/* HERO */}
      <section className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-24 pt-8 md:grid-cols-2 md:pb-28 md:pt-10">
        {/* LEFT: Copy + CTA */}
        <div className="order-2 md:order-1">
          {/* badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20 backdrop-blur">
            <SparkleIcon className="h-4 w-4" />
            <span className="text-sm font-medium tracking-wide">Elite Marketplace Care</span>
          </div>

          <h1 className="mt-4 max-w-xl text-4xl font-extrabold leading-[1.08] md:text-5xl">
            Smart Maintenance Solutions for Marketplace Owners
          </h1>

          <p className="mt-4 max-w-xl text-lg/relaxed text-white/90">
            Reduce downtime, ship updates faster, and sleep better. We monitor, patch, and optimize your
            marketplace stack 24/7 — so you can focus on growth, not break-fixes.
          </p>

          {/* Value bullets */}
          <ul className="mt-6 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
            <FeatureItem text="24/7 proactive monitoring" />
            <FeatureItem text="Same-day security patches" />
            <FeatureItem text="Performance tuning &amp; caching" />
            <FeatureItem text="Weekly health reports" />
          </ul>

          {/* CTA row */}
          <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-xl bg-[#f472b6] px-5 py-3 text-base font-semibold text-white shadow-lg shadow-black/10 transition hover:translate-y-[-1px] hover:bg-[#ec5fa9] focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              Get Started Now
            </a>
            <a
              href="#chat"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-base font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <PlayIcon className="h-5 w-5" /> See how it works
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-8 grid w-full grid-cols-3 gap-4 max-w-xl">
            <StatCard kpi="70,000+" title="Marketplaces" desc="We keep running" accent="from-emerald-400 to-teal-300" />
            <StatCard kpi="40+" title="Specialists" desc="On your team" accent="from-amber-300 to-orange-300" />
            <StatCard kpi="3 shifts" title="24/7" desc="Follow-the-sun" accent="from-sky-300 to-indigo-300" />
          </div>

          {/* Trust bar */}
          <TrustBar />
        </div>

        {/* RIGHT: Illustration + floating bits */}
        <div className="order-1 md:order-2">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-6 -z-10 rounded-[28px] bg-white/10 blur-2xl" />
            <img
              src="heroI.svg"
              alt="Team collaboration illustration"
              className="relative z-10 w-full drop-shadow-2xl"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <Bubble style={{ top: "-18px", left: "18%" }} />
            <Bubble style={{ top: "-30px", right: "24%" }} dots={3} />
            <Bubble style={{ bottom: "-22px", left: "-10px" }} dots={1} />
            <Bubble style={{ bottom: "-18px", right: "-8px" }} dots={2} />

            {/* glass card */}
            <div className="absolute -bottom-8 left-1/2 z-20 w-[92%] max-w-lg -translate-x-1/2 rounded-2xl bg-white/10 p-4 ring-1 ring-white/20 backdrop-blur">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <span className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm font-medium ring-1 ring-white/20">
                  <ShieldIcon className="h-4 w-4" />
                  Managed Updates
                </span>
                <p className="text-sm text-white/90">
                  We apply security releases asap and roll back safely if needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ——— Subcomponents ——— */
function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-base text-white/95">
      <CheckIcon className="h-5 w-5" />
      <span>{text}</span>
    </li>
  );
}

function StatCard({ kpi, title, desc, accent }: { kpi: string; title: string; desc: string; accent: string }) {
  return (
    <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur transition hover:bg-white/15">
      <div className={`inline-block rounded-md bg-gradient-to-r ${accent} px-2 py-0.5 text-xs font-semibold text-black/80`}>{title}</div>
      <div className="mt-2 text-2xl font-extrabold tracking-tight">{kpi}</div>
      <div className="text-sm text-white/80">{desc}</div>
    </div>
  );
}

function TrustBar() {
  return (
    <div className="mt-8 max-w-xl">
      <div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-white/90">
            <ShieldIcon className="h-4 w-4" /> SLA-backed
          </div>
          <Dot />
          <div className="flex items-center gap-2 text-sm text-white/90">
            <TimeIcon className="h-4 w-4" /> 15‑min response
          </div>
          <Dot />
          <div className="flex items-center gap-2 text-sm text-white/90">
            <HeartIcon className="h-4 w-4" /> 98% CSAT
          </div>
          <Dot />
          <div className="flex items-center gap-2 text-sm text-white/90">
            <LockIcon className="h-4 w-4" /> ISO‑27001 ready
          </div>
        </div>
      </div>
    </div>
  );
}

function Dot() {
  return <span className="mx-1 hidden h-1.5 w-1.5 rounded-full bg-white/40 sm:inline-block" />;
}

function Bubble({ style, dots = 3 }: any) {
  return (
    <div style={style} className="absolute z-20 inline-flex items-center gap-1 rounded-xl bg-white/20 px-3 py-2 backdrop-blur transition hover:bg-white/30">
      {Array.from({ length: dots }).map((_, i) => (
        <span key={i} className="inline-block h-2 w-2 animate-bounce rounded-full bg-white/80" style={{ animationDelay: `${i * 120}ms` }} />
      ))}
    </div>
  );
}

function WindBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <svg className="absolute left-0 top-6 w-[140%] max-w-none opacity-30" viewBox="0 0 1200 400" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="Support-grad1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <path d="M0,220 C220,120 420,260 640,180 C860,100 1040,180 1200,120 L1200,400 L0,400 Z" fill="url(#Support-grad1)" />
      </svg>

      <svg className="absolute left-0 top-20 w-[140%] max-w-none opacity-25" viewBox="0 0 1200 400" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,240 C240,160 440,300 680,210 C880,140 1040,200 1200,150 L1200,400 L0,400 Z" fill="#ffffff22" />
      </svg>

      <svg className="absolute left-0 top-28 w-[140%] max-w-none opacity-20" viewBox="0 0 1200 400" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,260 C240,200 420,320 700,230 C900,170 1060,230 1200,190 L1200,400 L0,400 Z" fill="#0000000f" />
      </svg>
    </div>
  );
}

function DecorGrid() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      <style>{`@keyframes float {0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}`}</style>
      {/* radial glow */}
      <div className="absolute left-1/2 top-[20%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/20 blur-[120px]" />
      {/* subtle grid */}
      <div className="absolute inset-x-0 bottom-0 top-32 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:22px_22px] opacity-30" />
      {/* floating orbs */}
      <div className="absolute left-[6%] top-[24%] h-24 w-24 animate-[float_6s_ease-in-out_infinite] rounded-full bg-white/10 blur-md" />
      <div className="absolute right-[8%] top-[18%] h-16 w-16 animate-[float_7s_ease-in-out_infinite] rounded-full bg-white/10 blur-md" />
    </div>
  );
}

/* ——— Inline icons (no external deps) ——— */
function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden>
      <path strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5" />
    </svg>
  );
}
function SparkleIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 3l2.3 4.7L19 10l-4.7 2.3L12 17l-2.3-4.7L5 10l4.7-2.3L12 3z" />
    </svg>
  );
}
function ShieldIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden>
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z" />
    </svg>
  );
}
function LockIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden>
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M7 10V7a5 5 0 0110 0v3M6 10h12v10H6z" />
    </svg>
  );
}
function HeartIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden>
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12.1 20.8S4 15 4 9.9C4 7.2 6.2 5 8.9 5c1.6 0 3 .8 3.9 2.1C13.7 5.8 15.1 5 16.7 5 19.4 5 21.6 7.2 21.6 9.9c0 5.1-8.1 10.9-9.5 10.9z" />
    </svg>
  );
}
function TimeIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className} aria-hidden>
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M12 22a10 10 0 110-20 10 10 0 010 20z" />
    </svg>
  );
}
function PlayIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M8 5v14l11-7-11-7z" />
    </svg>
  );
}

"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Mail,
  Phone,
  BellRing,
  LifeBuoy,
  ShieldCheck,
  Clock3,
  Globe,
  BookOpen,
  AlertTriangle,
  ArrowRight,
  Paperclip,
  CheckCircle2,
} from "lucide-react";


export default function Support247Page() {
  return (
    <main className="relative bg-gradient-to-b from-blue-50 via-white to-purple-50 text-slate-800">
      {/* Accent line */}
      {/* <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500" /> */}

      <Hero />
      <section className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-1">
            <StatusCard />
            <Channels />
            <KnowledgeSearch />
          </div>
          <div className="space-y-8 lg:col-span-2">
            <PriorityForm />
            <IncidentTimeline />
          </div>
        </div>
      </section>

      <Coverage />
      <Guarantees />
      <FAQ />
    </main>
  );
}

/* ——— Hero ——— */
function Hero() {
  return (
    <section className="relative overflow-hidden py-6 md:py-9">
      {/* Blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-purple-200/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="text-xs font-semibold uppercase tracking-wider text-slate-500">Priority Support</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">24/7 Support that never sleeps</motion.h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">We respond in minutes, not hours. Chat with an engineer, open a ticket, or call our on‑call line — any time.</p>

            {/* Trust chips */}
            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-slate-600">
              <Chip icon={<ShieldCheck className="h-4 w-4 text-emerald-600"/>} label="SLA 99.99%" />
              <Chip icon={<Clock3 className="h-4 w-4 text-sky-600"/>} label="First reply < 30m" />
              <Chip icon={<Globe className="h-4 w-4 text-indigo-600"/>} label="Follow‑the‑sun" />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#live-chat" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-white shadow hover:opacity-95"><MessageSquare className="h-4 w-4"/> Start live chat</a>
              <a href="#ticket" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-800 hover:bg-slate-50">Open a ticket</a>
            </div>
          </div>
          <div className="md:col-span-5 grid grid-cols-3 gap-3">
            {[
              { label: "CSAT", value: "4.9/5" },
              { label: "Avg. reply", value: "<30m" },
              { label: "Incidents/mo", value: "1.2k+" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-slate-200 bg-white/80 p-4 text-center shadow-sm backdrop-blur">
                <div className="text-xl font-bold text-slate-900">{s.value}</div>
                <div className="text-xs text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-2 py-1 backdrop-blur">
      {icon} {label}
    </span>
  );
}

/* ——— Status + SLA ——— */
function StatusCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 text-white">✓</div>
        <h4 className="text-sm font-semibold text-slate-900">Live status & SLA</h4>
      </div>
      <p className="mt-1 text-xs text-slate-600">All systems operational. Priority incidents receive first response under 30 minutes.</p>
      <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
        {[
          { k: "Uptime", v: "99.99%" },
          { k: "P1 reply", v: "<30m" },
          { k: "Coverage", v: "24/7" },
        ].map((s) => (
          <div key={s.k} className="rounded-lg border border-slate-200 bg-white p-3">
            <div className="font-semibold text-slate-900">{s.v}</div>
            <div className="text-xs text-slate-500">{s.k}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-2 text-sm">
        <a href="#status" className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-slate-700 hover:bg-slate-50">View status page</a>
        <a href="#sla" className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-slate-700 hover:bg-slate-50">SLA details</a>
      </div>
    </div>
  );
}

/* ——— Channels ——— */
function Channels() {
  const items = [
    { title: "Live chat", desc: "Instant help from engineers.", icon: MessageSquare, href: "#live-chat", badge: "Recommended" },
    { title: "Email support", desc: "Tickets with attachments.", icon: Mail, href: "#ticket", badge: "Tracked" },
    { title: "Emergency line", desc: "P1 outages only.", icon: Phone, href: "tel:+15555550123", badge: "On‑call" },
    { title: "Incident updates", desc: "Subscribe for alerts.", icon: BellRing, href: "#status", badge: "Status" },
    { title: "Help Center", desc: "Guides & tutorials.", icon: BookOpen, href: "#help", badge: "Docs" },
    { title: "Community", desc: "Best practices.", icon: LifeBuoy, href: "#community", badge: "Peers" },
  ];
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
      {items.map((it) => (
        <a key={it.title} href={it.href} className="group relative flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white"><it.icon className="h-5 w-5"/></div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-slate-900">{it.title}</h3>
              <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600">{it.badge}</span>
            </div>
            <p className="text-sm text-slate-600">{it.desc}</p>
          </div>
          <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-0.5"/>
        </a>
      ))}
    </div>
  );
}

/* ——— Knowledge base (mock search) ——— */
function KnowledgeSearch() {
  const [q, setQ] = useState("");
  const suggestions = [
    "Fix common checkout errors",
    "Optimize images for speed",
    "Set up staging environment",
    "Configure webhooks",
  ];
  const filtered = suggestions.filter((s) => s.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h4 className="text-sm font-semibold text-slate-900">Knowledge Base</h4>
      <p className="mt-1 text-xs text-slate-600">Search guides and troubleshooting.</p>
      <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search articles…" className="mt-3 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2" />
      <ul className="mt-3 space-y-2 text-sm">
        {(q ? filtered : suggestions).map((s) => (
          <li key={s}>
            <a href="#help" className="group inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400"/> {s}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ——— Priority Incident Form ——— */
function PriorityForm() {
  const [form, setForm] = useState({
    subject: "",
    email: "",
    severity: "P3 – Normal",
    url: "",
    environment: "Production",
    message: "",
    consent: false,
  });
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState<string | null>(null);

  const eta = useMemo(() => {
    switch (form.severity) {
      case "P1 – Critical":
        return "~ 30 minutes";
      case "P2 – High":
        return "~ 1 hour";
      case "P3 – Normal":
        return "~ 4 hours";
      case "P4 – Low":
        return "< 12 hours";
      default:
        return "~ 4 hours";
    }
  }, [form.severity]);

  function update<K extends keyof typeof form>(key: K, val: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const list = Array.from(e.target.files || []);
    const limited = list.slice(0, 5);
    const tooBig = limited.find((f) => f.size > 10 * 1024 * 1024);
    if (tooBig) {
      setErrors((er) => ({ ...er, files: "Each file must be under 10MB." }));
      return;
    }
    setErrors((er) => ({ ...er, files: "" }));
    setFiles(limited);
  }

  function validate() {
    const er: Record<string, string> = {};
    if (!form.subject.trim()) er.subject = "Add a short, clear subject.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = "Enter a valid email.";
    if (!form.message.trim()) er.message = "Describe the issue and steps to reproduce.";
    return er;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) return;

    const ref = `SUP-${Math.floor(100000 + Math.random() * 899999)}`;
    setTimeout(() => {
      setSuccess(ref);
      setForm((f) => ({ ...f, subject: "", message: "" }));
      setFiles([]);
    }, 500);
  }

  if (success) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-600 text-white"><CheckCircle2 className="h-5 w-5"/></div>
          <div>
            <h3 className="text-lg font-semibold text-emerald-900">Thanks! Your incident is logged.</h3>
            <p className="mt-1 text-sm text-emerald-800">Reference <span className="font-mono font-semibold">{success}</span>. First response ETA {eta}.</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a href="#" className="rounded-lg border border-emerald-300 bg-white px-3 py-2 text-emerald-700">View incidents</a>
              <a href="#" className="rounded-lg border border-emerald-300 bg-white px-3 py-2 text-emerald-700">Add logs</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form id="ticket" onSubmit={onSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-3 grid grid-cols-2 gap-3 text-sm">
        <div>
          <label className="mb-1 block font-medium text-slate-700">Severity</label>
          <select value={form.severity} onChange={(e) => update("severity", e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none ring-blue-500 focus:ring-2">
            {["P1 – Critical","P2 – High","P3 – Normal","P4 – Low"].map((p)=> <option key={p}>{p}</option>)}
          </select>
          <p className="mt-1 text-xs text-slate-500">First response ETA <span className="font-medium text-slate-700">{eta}</span></p>
        </div>
        <div>
          <label className="mb-1 block font-medium text-slate-700">Environment</label>
          <select value={form.environment} onChange={(e) => update("environment", e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none ring-blue-500 focus:ring-2">
            {["Production","Staging","Development"].map((p)=> <option key={p}>{p}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Field label="Subject" error={errors.subject}>
          <input value={form.subject} onChange={(e)=>update('subject', e.target.value)} placeholder="Checkout page error on submit" className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none ring-blue-500 focus:ring-2" />
        </Field>
        <Field label="Email" error={errors.email}>
          <input type="email" value={form.email} onChange={(e)=>update('email', e.target.value)} placeholder="ops@company.com" className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none ring-blue-500 focus:ring-2" />
        </Field>
        <Field label="Affected URL (optional)">
          <input value={form.url} onChange={(e)=>update('url', e.target.value)} placeholder="https://example.com/checkout" className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none ring-blue-500 focus:ring-2" />
        </Field>
        <Field label="Environment details (optional)">
          <input value={form.environment} onChange={(e)=>update('environment', e.target.value)} placeholder="Browser/OS/Version" className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none ring-blue-500 focus:ring-2" />
        </Field>
        <Field label="Describe the issue" error={errors.message} className="md:col-span-2">
          <textarea value={form.message} onChange={(e)=>update('message', e.target.value)} rows={5} placeholder="What happened? Expected vs. actual, steps to reproduce, recent changes…" className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none ring-blue-500 focus:ring-2" />
        </Field>

        {/* Attachments */}
        <div className="md:col-span-2">
          <label className="mb-1 block text-sm font-medium text-slate-700">Attachments <span className="text-slate-400">(optional)</span></label>
          <label className="group flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-dashed border-slate-300 bg-white px-4 py-3 text-sm text-slate-600 hover:bg-slate-50">
            <div className="flex items-center gap-2"><Paperclip className="h-4 w-4"/> Drag & drop or <span className="underline">choose files</span> (max 5, 10MB each)</div>
            <input type="file" multiple className="hidden" onChange={onFileChange} />
          </label>
          {files.length > 0 && (
            <ul className="mt-2 list-inside list-disc text-xs text-slate-600">
              {files.map((f)=> <li key={f.name}>{f.name} — {(f.size/1024/1024).toFixed(2)}MB</li>)}
            </ul>
          )}
          {errors.files && <p className="mt-1 text-xs text-rose-600">{errors.files}</p>}
        </div>

        {/* Consent */}
        <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-3">
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" className="h-4 w-4 rounded border-slate-300" />
            Subscribe to incident updates.
          </label>
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" checked={form.consent} onChange={(e)=>update('consent', e.target.checked)} className="h-4 w-4 rounded border-slate-300" />
            I agree to the <a className="underline" href="#">Privacy Policy</a>.
          </label>
        </div>

        {/* Submit */}
        <div className="md:col-span-2 mt-2 flex items-center justify-between">
          <div className="text-xs text-slate-500">Tickets are triaged 24/7. We’ll reply to <span className="font-medium text-slate-700">{form.email || 'your email'}</span>.</div>
          <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 font-semibold text-white shadow hover:opacity-95">
            Submit incident <ArrowRight className="h-4 w-4"/>
          </button>
        </div>

        {Object.keys(errors).length > 0 && (
          <div className="md:col-span-2 mt-3 rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
            <div className="flex items-start gap-2"><AlertTriangle className="mt-0.5 h-4 w-4"/> Please fix the highlighted fields.</div>
          </div>
        )}
      </div>
    </form>
  );
}

function Field({ label, error, children, className = "" }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label className="mb-1 block text-sm font-medium text-slate-700">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-rose-600">{error}</p>}
    </div>
  );
}

/* ——— Incident timeline ——— */
function IncidentTimeline() {
  const items = [
    { t: "10:04", title: "Auto‑scaling event", desc: "Traffic spike handled by autoscaler.", badge: "Info" },
    { t: "08:27", title: "P2 – Elevated errors", desc: "Checkout retries increased. Rollback deployed.", badge: "Resolved" },
    { t: "Yesterday", title: "Planned maintenance", desc: "DB minor upgrade completed without downtime.", badge: "Completed" },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h4 className="text-sm font-semibold text-slate-900">Recent updates</h4>
      <ul className="mt-4 space-y-4">
        {items.map((i) => (
          <li key={i.title} className="flex items-start gap-3">
            <span className="mt-1 w-16 shrink-0 text-xs text-slate-500">{i.t}</span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium text-slate-900">{i.title}</span>
                <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600">{i.badge}</span>
              </div>
              <p className="text-sm text-slate-600">{i.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ——— Coverage ——— */
function Coverage() {
  return (
    <section className="mx-auto mt-14 max-w-7xl px-4 lg:px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-bold text-slate-900">Global coverage</h2>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs"><Globe className="h-4 w-4 text-indigo-600"/> Follow‑the‑sun</div>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { region: "Americas", tz: "PT / CT / ET", langs: "EN, ES" },
            { region: "EMEA", tz: "GMT / CET", langs: "EN, FR, DE" },
            { region: "APAC", tz: "SGT / JST / AEST", langs: "EN, BN" },
          ].map((r) => (
            <div key={r.region} className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="font-semibold text-slate-900">{r.region}</div>
              <div className="mt-1 text-sm text-slate-600">Timezones: {r.tz}</div>
              <div className="text-sm text-slate-600">Languages: {r.langs}</div>
              <div aria-hidden className="mt-3 h-24 w-full rounded-xl bg-gradient-to-br from-blue-200 to-purple-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ——— Guarantees ——— */
function Guarantees() {
  const items = [
    { title: "Fast triage", desc: "Engineers on the first line, not bots." },
    { title: "Clear comms", desc: "Status page, email and chat updates at every step." },
    { title: "Post‑mortems", desc: "We share root causes and prevention steps for P1/P2." },
  ];
  return (
    <section id="sla" className="mx-auto mt-14 max-w-7xl px-4 lg:px-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((i) => (
          <div key={i.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-2 grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white"><ShieldCheck className="h-5 w-5"/></div>
            <div className="font-semibold text-slate-900">{i.title}</div>
            <p className="text-sm text-slate-600">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ——— FAQ ——— */
function FAQ() {
  const faqs = [
    { q: "What counts as P1 vs P2?", a: "P1: full outage or severe revenue impact. P2: major function impaired with workaround. P3/P4: minor issues or questions." },
    { q: "How do I escalate?", a: "Mark the ticket P1/P2, include pager number if needed, and use the emergency line for critical incidents." },
    { q: "Do you support WooCommerce / Shopify?", a: "Yes — WooCommerce, Shopify, Dokan multivendor and custom stacks via API." },
    { q: "Do you provide post‑incident reports?", a: "Yes. P1/P2 incidents include a written RCA with remediation actions." },
  ];
  return (
    <section className="mx-auto mt-14 max-w-4xl px-4 lg:px-6 pb-20">
      <h2 className="text-center text-2xl font-bold text-slate-900">Support FAQ</h2>
      <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
        {faqs.map((f, i) => (
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
  );
}


"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Clock3,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Globe,
  Paperclip,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="relative bg-gradient-to-b from-blue-50 via-white to-purple-50 text-slate-800">
      {/* Top accent */}
      {/* <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500" /> */}

      <Hero />

      <section className="mx-auto max-w-7xl px4 lg:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-1">
            <ContactMethods />
            <SLAStatusCard />
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>

      <Offices />
      <FAQ />
    </main>
  );
}

/* ——— Hero ——— */
function Hero() {
  return (
    <section className="relative py-6 md:py-9 overflow-hidden">
      {/* Blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-purple-200/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="text-xs font-semibold uppercase tracking-wider text-slate-500">We&apos;re here to help</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">Contact weAssist</motion.h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">Talk to sales, reach support, or get help with billing. Average first response under <span className="font-semibold text-slate-800">30 minutes</span>, 24/7.</p>

            {/* Trust chips */}
            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-slate-600">
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-2 py-1 backdrop-blur"><ShieldCheck className="h-4 w-4 text-emerald-600"/> SSL Secured</span>
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-2 py-1 backdrop-blur"><Clock3 className="h-4 w-4 text-sky-600"/> 24/7 Monitoring</span>
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-2 py-1 backdrop-blur"><Globe className="h-4 w-4 text-indigo-600"/> Global coverage</span>
            </div>
          </div>

          {/* Quick stats */}
          <div className="md:col-span-5 grid grid-cols-3 gap-3">
            {[{label:"Avg. first reply", value:"<30m"},{label:"Satisfaction", value:"4.9/5"},{label:"Countries", value:"35+"}].map((s)=> (
              <div key={s.label} className="rounded-xl border border-slate-200 bg-white/80 p-4 text-center shadow-sm backdrop-blur">
                <div className="text-xl font-bold">{s.value}</div>
                <div className="text-xs text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——— Contact methods ——— */
function ContactMethods() {
  const items = [
    { title: "Sales", desc: "Product demos, pricing & pilots.", icon: MessageSquare, href: "#sales", badge: "Fast" },
    { title: "Support", desc: "Technical help & incidents.", icon: Mail, href: "#support", badge: "24/7" },
    { title: "Billing", desc: "Invoices, quotes & renewals.", icon: Phone, href: "#billing", badge: "Mon–Fri" },
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

/* ——— SLA / Status ——— */
function SLAStatusCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 text-white">✓</div>
        <h4 className="text-sm font-semibold text-slate-900">Service status</h4>
      </div>
      <p className="mt-1 text-xs text-slate-600">All systems operational. We reply within 30 minutes for priority incidents.</p>
      <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
        {[
          { k: "SLA", v: "99.99%" },
          { k: "First reply", v: "<30m" },
          { k: "Coverage", v: "24/7" },
        ].map((s) => (
          <div key={s.k} className="rounded-lg border border-slate-200 bg-white p-3">
            <div className="text-slate-900 font-semibold">{s.v}</div>
            <div className="text-xs text-slate-500">{s.k}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ——— Contact form ——— */
function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    topic: "Support",
    priority: "Normal",
    message: "",
    consent: false,
    subscribe: true,
  });
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState<string | null>(null);

  const responseETA = useMemo(() => {
    switch (form.priority) {
      case "Urgent":
        return "~ 30 minutes";
      case "High":
        return "~ 1 hour";
      case "Normal":
        return "~ 4 hours";
      default:
        return "< 12 hours";
    }
  }, [form.priority]);

  function update<K extends keyof typeof form>(key: K, val: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const list = Array.from(e.target.files || []);
    const limited = list.slice(0, 5); // max 5 files
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
    if (!form.name.trim()) er.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = "Enter a valid email.";
    if (!form.message.trim()) er.message = "Tell us a bit about your request.";
    return er;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) return;

    // Simulate API
    const ref = `WC-${Math.floor(100000 + Math.random() * 899999)}`;
    setTimeout(() => {
      setSuccess(ref);
      // reset minimal fields, keep email for convenience
      setForm((f) => ({ ...f, name: "", phone: "", company: "", website: "", message: "" }));
      setFiles([]);
    }, 500);
  }

  if (success) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-600 text-white"><CheckCircle2 className="h-5 w-5"/></div>
          <div>
            <h3 className="text-lg font-semibold text-emerald-900">Thanks! Your request is in.</h3>
            <p className="mt-1 text-sm text-emerald-800">Ticket reference <span className="font-mono font-semibold">{success}</span>. We estimate a first response {responseETA}.</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a href="#" className="rounded-lg border border-emerald-300 bg-white px-3 py-2 text-emerald-700">View requests</a>
              <a href="#" className="rounded-lg border border-emerald-300 bg-white px-3 py-2 text-emerald-700">Add more details</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Topic & priority banner */}
      <div className="mb-4 grid grid-cols-2 gap-3 text-sm">
        <div>
          <label className="mb-1 block font-medium text-slate-700">Topic</label>
          <select value={form.topic} onChange={(e) => update("topic", e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none ring-blue-500 focus:ring-2">
            {['Sales','Support','Billing','Partnership','Other'].map((t)=> <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className="mb-1 block font-medium text-slate-700">Priority</label>
          <select value={form.priority} onChange={(e) => update("priority", e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none ring-blue-500 focus:ring-2">
            {['Low','Normal','High','Urgent'].map((p)=> <option key={p}>{p}</option>)}
          </select>
          <p className="mt-1 text-xs text-slate-500">ETA: <span className="font-medium text-slate-700">{responseETA}</span></p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input value={form.name} onChange={(e)=>update('name', e.target.value)} placeholder="Jane Doe" className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none ring-blue-500 focus:ring-2" />
        </Field>
        <Field label="Email" error={errors.email}>
          <input type="email" value={form.email} onChange={(e)=>update('email', e.target.value)} placeholder="jane@company.com" className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none ring-blue-500 focus:ring-2" />
        </Field>
        <Field label="Phone (optional)">
          <input value={form.phone} onChange={(e)=>update('phone', e.target.value)} placeholder="+1 555 0102" className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none ring-blue-500 focus:ring-2" />
        </Field>
        <Field label="Company (optional)">
          <input value={form.company} onChange={(e)=>update('company', e.target.value)} placeholder="Your company" className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none ring-blue-500 focus:ring-2" />
        </Field>
        <Field label="Website (optional)">
          <input value={form.website} onChange={(e)=>update('website', e.target.value)} placeholder="https://example.com" className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none ring-blue-500 focus:ring-2" />
        </Field>
        <div />
        <Field label="How can we help?" error={errors.message} className="md:col-span-2">
          <textarea value={form.message} onChange={(e)=>update('message', e.target.value)} rows={5} placeholder="Share context, URLs, and steps to reproduce if applicable." className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none ring-blue-500 focus:ring-2" />
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
            <input type="checkbox" checked={form.subscribe} onChange={(e)=>update('subscribe', e.target.checked)} className="h-4 w-4 rounded border-slate-300" />
            Send me product updates and offers.
          </label>
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" checked={form.consent} onChange={(e)=>update('consent', e.target.checked)} className="h-4 w-4 rounded border-slate-300" />
            I agree to the <a className="underline" href="#">Privacy Policy</a>.
          </label>
        </div>

        {/* Submit */}
        <div className="md:col-span-2 mt-2 flex items-center justify-between">
          <div className="text-xs text-slate-500">By submitting, you’ll create a support ticket. We’ll reply to <span className="font-medium text-slate-700">{form.email || 'your email'}</span>.</div>
          <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 font-semibold text-white shadow hover:opacity-95">
            Submit request <ArrowRight className="h-4 w-4"/>
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

/* ——— Offices ——— */
function Offices() {
  const offices = [
    { city: "Singapore (HQ)", address: "22 Sin Ming Ln, Singapore", hours: "Mon–Fri, 9:00–18:00 SGT" },
    { city: "Dhaka", address: "Banani, Dhaka", hours: "Sun–Thu, 10:00–19:00 BST" },
    { city: "Remote", address: "Global distributed team", hours: "24/7" },
  ];
  return (
    <section className="mx-auto mt-14 max-w-7xl px-4 lg:px-6">
      <h2 className="text-center text-2xl font-bold text-slate-900">Our offices</h2>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {offices.map((o) => (
          <div key={o.city} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2"><Building2 className="h-5 w-5 text-slate-500"/> <span className="font-semibold text-slate-900">{o.city}</span></div>
            <div className="mt-1 flex items-center gap-2 text-sm text-slate-600"><MapPin className="h-4 w-4"/> {o.address}</div>
            <div className="mt-1 flex items-center gap-2 text-sm text-slate-600"><Clock3 className="h-4 w-4"/> {o.hours}</div>
            {/* Map placeholder */}
            <div aria-hidden className="mt-4 h-32 w-full rounded-xl bg-gradient-to-br from-blue-200 to-purple-200" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ——— FAQ ——— */
function FAQ() {
  const faqs = [
    { q: "What topics should go to Support vs. Sales?", a: "Sales handles pricing, demos and pilots. Support covers incidents, bugs, and how‑to questions." },
    { q: "How fast do you respond?", a: "We reply within 30 minutes for priority incidents and within 4 hours for normal tickets, 24/7." },
    { q: "Do you support WooCommerce / Shopify?", a: "Yes — WooCommerce, Shopify, Dokan multivendor and custom stacks via API." },
    { q: "Can you sign a DPA or NDA?", a: "Absolutely. Our enterprise plan includes standard DPA/NDA and security reviews." },
  ];
  return (
    <section className="mx-auto mt-14 max-w-4xl px-4 lg:px-6 pb-20">
      <h2 className="text-center text-2xl font-bold text-slate-900">Frequently asked questions</h2>
      <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
        {faqs.map((f, i) => (
          <details key={i} className="group px-5 py-4" open={i===0}>
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-medium text-slate-900">{f.q}</span>
              <span className="text-slate-400 transition group-open:rotate-90">&apos;</span>
            </summary>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}



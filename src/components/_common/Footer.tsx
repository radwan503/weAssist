"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
  ArrowUp,
  Globe,
  Mail,
  ChevronRight,
  Apple,
  Phone,
  MapPin,
  Clock3,
  Moon,
  Sun,
  Play,
} from "lucide-react";
import Paypal from "../Icons/Paypal";
import Visa from "../Icons/Visa";
import MasterCard from "../Icons/MasterCard";
import Discover from "../Icons/Dsicover";
import Amex from "../Icons/Amex";
import Alipay from "../Icons/Alipay";


export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [email, setEmail] = useState("");
  const [newsletterMsg, setNewsletterMsg] = useState<string | null>(null);
  const [isDark, setIsDark] = useState<boolean>(() => typeof document !== "undefined" ? document.documentElement.classList.contains("dark") : false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = h > 0 ? Math.min(100, Math.round((y / h) * 100)) : 0;
      setScrollPct(pct);
      setShowScroll(y > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const year = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function onSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setNewsletterMsg("Please enter a valid email address.");
      return;
    }
    // Demo only: replace with your API call
    setTimeout(() => {
      setNewsletterMsg("Thanks! Please check your inbox to confirm.");
      setEmail("");
    }, 350);
  }

  function toggleTheme() {
    const el = document.documentElement;
    const next = !el.classList.contains("dark");
    el.classList.toggle("dark", next);
    setIsDark(next);
  }

  const progressStyle = useMemo(() => ({
    background: `conic-gradient(#6d28d9 ${scrollPct * 3.6}deg, rgba(99,102,241,.25) ${scrollPct * 3.6}deg)`,
  }), [scrollPct]);

  return (
    <footer className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 text-slate-700 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 dark:text-slate-300">
      {/* Decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/10" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-purple-200/50 blur-3xl dark:bg-purple-500/10" />
      </div>

      {/* Accent top border */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Mini CTA band */}
        <div className="relative -mt-12 mb-10 rounded-2xl border border-slate-200/70 bg-white/80 p-6 backdrop-blur shadow-xl dark:border-slate-800 dark:bg-slate-900/60">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">Ready to streamline?</p>
              <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">Build, secure, and monetize your flows in minutes.</h3>
            </div>
            <div className="flex items-center gap-3">
              <a href="#get-started" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-white shadow hover:opacity-95">Get started</a>
              <a href="#contact" className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">Talk to sales</a>
              <button onClick={toggleTheme} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {isDark ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>} Theme
              </button>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand + newsletter */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-2xl text-white shadow">❤</div>
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white"><span className="text-sky-600">we</span>Assist</div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">We build tools that help teams design, control access, and monetize digital experiences — fast, secure, and user‑friendly.</p>

            {/* Social proof / logos */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="rounded-full border border-slate-300 bg-white/70 px-2 py-1 dark:border-slate-700 dark:bg-slate-800/70">Trusted by 3.4k+ teams</span>
              <span className="rounded-full border border-slate-300 bg-white/70 px-2 py-1 dark:border-slate-700 dark:bg-slate-800/70">All systems operational</span>
            </div>

            {/* Newsletter */}
            <form onSubmit={onSubscribe} className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <label htmlFor="newsletter" className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300"><Mail className="h-4 w-4"/> Stay in the loop</label>
              <p className="mt-1 text-xs text-slate-500">Product updates, launch notes, and occasional offers. No spam.</p>
              <div className="mt-3 flex gap-2">
                <input id="newsletter" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2 dark:border-slate-700 dark:bg-slate-800" />
                <button type="submit" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-95">Subscribe</button>
              </div>
              {newsletterMsg && <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400">{newsletterMsg}</p>}
              <p className="mt-2 text-[11px] text-slate-500">By subscribing, you agree to our <a className="underline" href="#">Privacy Policy</a>.</p>
            </form>

            {/* App badges */}
            <div className="mt-4 flex gap-3">
              <a href="#app-store" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800"><Apple className="h-4 w-4"/> App Store</a>
              <a href="#google-play" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800"><Play className="h-4 w-4"/> Google Play</a>
            </div>

            {/* Socials */}
            <div className="mt-6 flex gap-3">
              <Social icon={<Facebook size={18}/>} label="Facebook"/>
              <Social icon={<Linkedin size={18}/>} label="LinkedIn"/>
              <Social icon={<Youtube size={18}/>} label="YouTube"/>
              <Social icon={<Twitter size={18}/>} label="Twitter / X"/>
            </div>

            {/* Locale */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-800">
                <Globe className="h-4 w-4"/>
                <select className="bg-transparent outline-none">
                  <option>English (UK)</option>
                  <option>English (US)</option>
                  <option>বাংলা (BN)</option>
                </select>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-800">
                <span className="text-xs">Currency</span>
                <select className="bg-transparent outline-none">
                  <option>USD $</option>
                  <option>GBP £</option>
                  <option>BDT ৳</option>
                </select>
              </div>
            </div>
          </div>

          {/* Link columns + cards */}
          <div className="md:col-span-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            <LinkCol title="Product" links={[{ label: "Builder", href: "#" },{ label: "Access Control", href: "#" },{ label: "Payments", href: "#" },{ label: "Automation", href: "#" },{ label: "Analytics", href: "#" }]} />
            <LinkCol title="Solutions" links={[{ label: "SaaS", href: "#" },{ label: "Marketplaces", href: "#" },{ label: "Communities", href: "#" },{ label: "Education", href: "#" },{ label: "Enterprise", href: "#" }]} />
            <LinkCol title="Resources" links={[{ label: "Docs", href: "#" },{ label: "Guides", href: "#" },{ label: "API Reference", href: "#" },{ label: "Status", href: "#" },{ label: "Changelog", href: "#" }]} />
            <LinkCol title="Company" links={[{ label: "About", href: "#" },{ label: "Careers", href: "#" },{ label: "Press", href: "#" },{ label: "Contact", href: "#" },{ label: "Partners", href: "#" }]} />

            {/* Payments + security card */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-2 mt-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 text-white">✓</div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Secure payments</h4>
              </div>
              <p className="mt-1 text-xs text-slate-500">We support major payment methods with advanced fraud protection.</p>
              <div className="mt-3 grid grid-cols-6 gap-3">
                <IconWrap label="PayPal"><Paypal/></IconWrap>
                <IconWrap label="Visa"><Visa/></IconWrap>
                <IconWrap label="MasterCard"><MasterCard/></IconWrap>
                <IconWrap label="Discover"><Discover/></IconWrap>
                <IconWrap label="Amex"><Amex/></IconWrap>
                <IconWrap label="Alipay"><Alipay/></IconWrap>
              </div>
            </div>

            {/* Contact card */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Contact us</h4>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300"><Phone className="h-4 w-4"/> +1 (555) 555‑0123</div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300"><Mail className="h-4 w-4"/> support@Support.example</div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300"><MapPin className="h-4 w-4"/> 22 Sin Ming Ln, Singapore</div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300"><Clock3 className="h-4 w-4"/> 24/7 priority support</div>
              </div>
            </div>

            
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-slate-200 py-6 text-sm dark:border-slate-800">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-slate-500">© 2024–{year} SlassUI . All rights reserved. </p>
            <nav className="flex flex-wrap items-center gap-4 text-slate-600">
              <a className="hover:text-slate-900 dark:hover:text-slate-100" href="#">Privacy</a>
              <a className="hover:text-slate-900 dark:hover:text-slate-100" href="#">Terms</a>
              <a className="hover:text-slate-900 dark:hover:text-slate-100" href="#">Cookies</a>
              <a className="hover:text-slate-900 dark:hover:text-slate-100" href="#">Sitemap</a>
              <a className="hover:text-slate-900 dark:hover:text-slate-100" href="#">Cookie preferences</a>
            </nav>
          </div>
        </div>
      </div>

      {/* Scroll to top with progress ring */}
      {showScroll && (
        <button onClick={scrollToTop} aria-label="Scroll to top" className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-white text-slate-900 shadow-xl ring-4 ring-white/50 transition hover:scale-110 dark:bg-slate-800 dark:text-white dark:ring-slate-900/60" style={progressStyle}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white"><ArrowUp size={18} /></span>
        </button>
      )}
    </footer>
  );
}

/* ——— Helpers ——— */
function Social({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <a href="#" aria-label={label} className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white shadow hover:scale-110 active:scale-95 dark:bg-slate-700">{icon}</a>
  );
}

function LinkCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">{title}</h4>
      <ul className="mt-3 space-y-2">
        {links.map((l, i) => (
          <li key={i}>
            <a href={l.href} className="group inline-flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
              <ChevronRight className="h-3.5 w-3.5 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function IconWrap({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-700 dark:bg-slate-800" aria-label={label} title={label}>
      {children}
    </div>
  );
}

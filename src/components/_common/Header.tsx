'use client'

import Link from 'next/link'
import React, { useState } from 'react'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-br from-[#7c3aed] via-[#7c4dff] to-[#8b5cf6] text-white">
      {/* Glass background */}
      <div className="pointer-events-none absolute inset-0 z-[-1]" aria-hidden>
        <div className="h-16 w-full bg-gradient-to-b from-black/10 to-transparent" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:py-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-2xl text-white shadow">❤</div>
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white"><span className="text-sky-600">we</span>Assist</div>
            </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-2 md:flex">
          <NavLink href="/">Home</NavLink>

          {/* Services dropdown */}
          <div className="group relative">
            <button className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-white/90 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
              <span>Services</span>
              <Chevron className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            {/* Hover / Focus dropdown */}
            <div className="pointer-events-none absolute left-0 top-full pt-3 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
              <div className="min-w-[16rem] rounded-xl bg-white p-1 text-slate-800 shadow-2xl ring-1 ring-black/5">
                <DropdownItem href="/weAssist/maintenance" title="Maintenance" desc="Patch, monitor, optimize" />
                <DropdownItem href="/weAssist/support" title="24/7 Support" desc="Chat + on-call" />
                <DropdownItem href="/weAssist/incident" title="Incident Response" desc="Triage to recovery" />
              </div>
            </div>
          </div>

          <NavLink href="/weAssist/contact">Contact</NavLink>
          <CTA href="#get-started">Get started</CTA>
        </nav>

        {/* Mobile Hamburger */}
        <button
          aria-label="Open menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur ring-1 ring-white/20 md:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
            <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mx-auto w-full max-w-7xl px-4 pb-4 md:hidden">
          <div className="overflow-hidden rounded-2xl bg-white text-slate-900 shadow-2xl ring-1 ring-slate-200">
            <Link href="/" className="block px-6 py-3 hover:bg-slate-50">
              Home
            </Link>

            {/* Mobile accordion for Services */}
            <div className="border-t border-slate-200">
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex w-full items-center justify-between px-6 py-3 hover:bg-slate-50"
                aria-expanded={mobileServicesOpen}
              >
                <span>Services</span>
                <Chevron className={`h-4 w-4 text-slate-600 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`${mobileServicesOpen ? 'block' : 'hidden'} pb-2 pl-2`}>                
                <a href="/weAssist/maintenance" className="block rounded-lg px-6 py-2 text-sm hover:bg-slate-50">Maintenance</a>
                <a href="/weAssist/support" className="block rounded-lg px-6 py-2 text-sm hover:bg-slate-50">24/7 Support</a>
                <a href="/weAssist/incident" className="block rounded-lg px-6 py-2 text-sm hover:bg-slate-50">Incident Response</a>
              </div>
            </div>

            <a href="/weAssist/contact" className="block border-t px-6 py-3 hover:bg-slate-50">
              Contact
            </a>
            <div className="border-t px-6 py-4">
              <a
                href="#get-started"
                className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow hover:-translate-y-0.5 transition"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

/* ——— Subcomponents ——— */
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="rounded-lg px-3 py-2 text-white/90 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
    >
      {children}
    </a>
  )
}

function CTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="ml-2 inline-flex items-center justify-center rounded-xl bg-white/15 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-white/20 backdrop-blur transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
    >
      {children}
    </a>
  )
}

function DropdownItem({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <a href={href} className="flex items-start gap-3 rounded-lg p-3 hover:bg-slate-100">
      <div className="mt-0.5 h-2.5 w-2.5 rounded-full bg-slate-900" />
      <div>
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <div className="text-xs text-slate-600">{desc}</div>
      </div>
    </a>
  )
}

function Chevron({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden>
      <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.355a.75.75 0 111.02 1.1l-4.22 3.815a.75.75 0 01-1.02 0L5.25 8.33a.75.75 0 01-.02-1.12z" />
    </svg>
  )
}

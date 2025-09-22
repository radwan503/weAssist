'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Headphones, Wrench, LifeBuoy, Zap } from 'lucide-react'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  // Detect scroll and progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentScroll = window.scrollY
      const scrollProgress = (currentScroll / totalScroll) * 100
      setProgress(scrollProgress)
      setScrolled(currentScroll > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-indigo-100 to-slate-100 backdrop-blur-md shadow'
          : 'bg-gradient-to-r from-white via-slate-50 to-white'
      }`}
    >
      {/* Progress bar */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:py-5">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-2xl text-white shadow">❤</div>
            <div className="text-2xl font-extrabold  text-slate-700 "><span className="text-sky-600">we</span>Assist</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink href="/weAssist">Home</NavLink>
          {/* Services dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-slate-700 transition hover:text-slate-900 focus:outline-none">
              Services
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-full mt-2 w-56 translate-y-1 rounded-xl border border-slate-200 bg-white shadow-lg opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <DropdownItem icon={<Wrench />} href="/weAssist/maintenance" title="Maintenance" desc="Patch & optimize" />
              <DropdownItem icon={<Headphones />} href="/weAssist/support" title="24/7 Support" desc="Always available" />
              <DropdownItem icon={<LifeBuoy />} href="/weAssist/incident" title="Incident Response" desc="Triage to recovery" />
            </div>
          </div>

          <NavLink href="/weAssist/contact">Contact</NavLink>
          <CTA href="#get-started">Get Started</CTA>
        </nav>

        {/* Mobile Toggle */}
        <button
          aria-label="Open menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden rounded-lg p-2 text-slate-700 hover:bg-slate-100"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white/80 backdrop-blur-md md:hidden">
          <div className="px-4 py-4 space-y-2">
            <Link href="/" className="block rounded-lg px-3 py-2 hover:bg-slate-100">Home</Link>
            {/* Mobile accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 hover:bg-slate-100"
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="mt-1 space-y-1 pl-4">
                  <Link href="/maintenance" className="block rounded px-3 py-2 text-sm hover:bg-slate-100">Maintenance</Link>
                  <Link href="/support" className="block rounded px-3 py-2 text-sm hover:bg-slate-100">24/7 Support</Link>
                  <Link href="/incident" className="block rounded px-3 py-2 text-sm hover:bg-slate-100">Incident Response</Link>
                </div>
              )}
            </div>

            <Link href="/contact" className="block rounded-lg px-3 py-2 hover:bg-slate-100">Contact</Link>
            <CTA href="#get-started" className="w-full">Get Started</CTA>
          </div>
        </div>
      )}
    </header>
  )
}

/* ——— Subcomponents ——— */
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-slate-700 transition hover:text-slate-900">
      {children}
    </a>
  )
}

function CTA({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow transition hover:scale-105 hover:bg-slate-800 ${className}`}
    >
      <Zap className="mr-2 h-4 w-4" />
      {children}
    </a>
  )
}

function DropdownItem({ icon, href, title, desc }: { icon?: React.ReactNode; href: string; title: string; desc: string }) {
  return (
    <a href={href} className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition">
      <div className="mt-0.5 text-slate-600">{icon}</div>
      <div>
        <div className="text-sm font-semibold text-slate-800">{title}</div>
        <div className="text-xs text-slate-500">{desc}</div>
      </div>
    </a>
  )
}

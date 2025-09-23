// app/components/Navbar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { Menu, X, ChevronDown, Headphones, Wrench, LifeBuoy, Zap } from 'lucide-react'

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const mobileRef = useRef<HTMLDivElement | null>(null)

  // Scroll progress + glass on scroll
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0
      setProgress(pct)
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!mobileRef.current) return
      if (mobileOpen && !mobileRef.current.contains(e.target as Node)) {
        setMobileOpen(false)
        setServicesOpen(false)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [mobileOpen])

  // Reduce motion: shorten transitions
  const motion = 'motion-reduce:transition-none motion-reduce:transform-none'

  return (
    <header
      className={[
        'sticky top-0 z-50',
        'transition-all duration-300',
        scrolled
          ? 'bg-white/70 backdrop-blur-xl  shadow-sm'
          : 'bg-gradient-to-r from-white via-slate-50 to-white',
        motion,
      ].join(' ')}
      role="banner"
    >
      {/* Scroll progress */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-500"
        style={{ width: `${progress}%` }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="group inline-flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white shadow-md ring-1 ring-black/5">
              ❤
            </span>
            <span className="text-xl font-extrabold tracking-tight text-slate-800">
              <span className="text-sky-600">we</span>Assist
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-2 md:flex" aria-label="Main">
            <NavLink href="/" active={pathname === '/'}>
              Home
            </NavLink>

            {/* Services */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 rounded-full px-3 py-2 text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                aria-haspopup="menu"
                aria-expanded="false"
              >
                Services
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>

              <div
                className={[
                  'invisible absolute left-0 top-[calc(100%+8px)] w-[22rem]',
                  'translate-y-2 opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100',
                  'rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl shadow-lg',
                  'p-2 transition-all duration-200',
                  motion,
                ].join(' ')}
                role="menu"
              >
                <DropdownItem
                  href="/maintenance"
                  icon={<Wrench className="h-4 w-4" />}
                  title="Maintenance"
                  desc="Patch, tune, and ship fast."
                />
                <DropdownItem
                  href="/support"
                  icon={<Headphones className="h-4 w-4" />}
                  title="24/7 Support"
                  desc="Always-on help desk."
                />
                <DropdownItem
                  href="/incident"
                  icon={<LifeBuoy className="h-4 w-4" />}
                  title="Incident Response"
                  desc="From triage to recovery."
                />
              </div>
            </div>

            <NavLink href="/contact" active={pathname === '/contact'}>
              Contact
            </NavLink>

            <CTA href="#get-started">Get Started</CTA>
          </nav>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden rounded-xl p-2 text-slate-700 hover:bg-slate-100"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {mobileOpen && (
        <div
          ref={mobileRef}
          className={[
            'md:hidden border-t border-slate-200 bg-white/90 backdrop-blur-xl',
            'animate-in fade-in slide-in-from-top-2 duration-200',
            motion,
          ].join(' ')}
        >
          <div className="mx-auto max-w-7xl px-4 py-3">
            <MobileItem href="/" onClick={() => setMobileOpen(false)} active={pathname === '/'}>
              Home
            </MobileItem>

            {/* Mobile accordion */}
            <div className="mt-1">
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left hover:bg-slate-100"
                aria-expanded={servicesOpen}
              >
                <span className="font-medium text-slate-800">Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div
                className={[
                  'grid overflow-hidden transition-all duration-200',
                  servicesOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  motion,
                ].join(' ')}
              >
                <div className="min-h-0">
                  <MobileItem href="/maintenance" onClick={() => setMobileOpen(false)}>
                    Maintenance
                  </MobileItem>
                  <MobileItem href="/support" onClick={() => setMobileOpen(false)}>
                    24/7 Support
                  </MobileItem>
                  <MobileItem href="/incident" onClick={() => setMobileOpen(false)}>
                    Incident Response
                  </MobileItem>
                </div>
              </div>
            </div>

            <MobileItem href="/contact" onClick={() => setMobileOpen(false)} active={pathname === '/contact'}>
              Contact
            </MobileItem>

            <div className="pt-2">
              <CTA href="#get-started" className="w-full justify-center" />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

/* ---------------- Subcomponents ---------------- */

function NavLink({
  href,
  active,
  children,
}: {
  href: string
  active?: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={[
        'relative rounded-full px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500',
        'transition-colors',
      ].join(' ')}
    >
      <span className="relative">
        {children}
        <span
          className={[
            'absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-500',
            'scale-x-0 origin-left transition-transform duration-200',
            active ? 'scale-x-100' : 'group-hover/nav:scale-x-100',
          ].join(' ')}
        />
      </span>
    </Link>
  )
}

function CTA({
  href,
  children = 'Get Started',
  className = '',
}: {
  href: string
  children?: React.ReactNode
  className?: string
}) {
  return (
    <Link
      href={href}
      className={[
        'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold',
        'bg-slate-900 text-white shadow-sm ring-1 ring-black/5',
        'hover:scale-[1.02] active:scale-[0.99] transition-transform',
        'relative overflow-hidden',
        className,
      ].join(' ')}
    >
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 [mask-image:linear-gradient(90deg,transparent,black,transparent)] animate-[shine_2s_ease-in-out_infinite]" />
      <Zap className="h-4 w-4" />
      {children}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-120%); }
          60% { transform: translateX(120%); }
          100% { transform: translateX(120%); }
        }
      `}</style>
    </Link>
  )
}

function DropdownItem({
  icon,
  href,
  title,
  desc,
}: {
  icon?: React.ReactNode
  href: string
  title: string
  desc: string
}) {
  return (
    <Link
      href={href}
      className="flex items-start gap-3 rounded-xl p-3 text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
      role="menuitem"
    >
      <div className="mt-0.5 text-slate-600">{icon}</div>
      <div>
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <div className="text-xs text-slate-500">{desc}</div>
      </div>
    </Link>
  )
}

function MobileItem({
  href,
  children,
  onClick,
  active,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
  active?: boolean
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={[
        'block rounded-xl px-3 py-2',
        active ? 'bg-slate-100/80 text-slate-900' : 'hover:bg-slate-100 text-slate-700',
      ].join(' ')}
    >
      {children}
    </Link>
  )
}

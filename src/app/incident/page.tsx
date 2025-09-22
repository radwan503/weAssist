'use client';

import React, { useMemo, useState } from 'react';

export default function IncidentResponsePage() {
  const [severityFilter, setSeverityFilter] = useState<'all' | 'SEV-1' | 'SEV-2' | 'SEV-3'>('all');
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'runbook' | 'timeline' | 'postmortem'>('overview');
  const [openStep, setOpenStep] = useState<number>(0);

  const incidents = useMemo(
    () => [
      {
        id: 'INC-7321',
        title: 'Checkout errors for EU region',
        sev: 'SEV-1',
        status: 'Active',
        startedAt: '2025-09-15T12:20:00Z',
        owner: 'Priya K.',
        impact: '~18% conversion drop; ~1.3k users affected/hour',
        tags: ['payments', 'edge', 'eu'],
      },
      {
        id: 'INC-7312',
        title: 'Delayed email notifications',
        sev: 'SEV-3',
        status: 'Monitoring',
        startedAt: '2025-09-12T08:05:00Z',
        owner: 'Ahmed R.',
        impact: 'Email latency up to 12min',
        tags: ['email', 'queue'],
      },
      {
        id: 'INC-7309',
        title: 'Intermittent 5xx on API /v2',
        sev: 'SEV-2',
        status: 'Mitigated',
        startedAt: '2025-09-10T03:44:00Z',
        owner: 'Mina L.',
        impact: 'p95 error rate 2.4%',
        tags: ['api', 'gateway'],
      },
    ],
    []
  );

  const filtered = incidents.filter((i) => {
    const sevOk = severityFilter === 'all' || i.sev === severityFilter;
    const q = search.trim().toLowerCase();
    const qOk =
      !q || [i.id, i.title, i.owner, i.impact, ...(i.tags || [])].join(' ').toLowerCase().includes(q);
    return sevOk && qOk;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-indigo-50 text-slate-900">
      {/* Topbar */}
      <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white font-black">
              IR
            </div>
            <span className="text-lg font-semibold tracking-tight">Incident Response</span>
          </div>

          <nav className="hidden gap-1 sm:flex">
            {[
              { key: 'overview', label: 'Overview' },
              { key: 'runbook', label: 'Runbook' },
              { key: 'timeline', label: 'Timeline' },
              { key: 'postmortem', label: 'Post-mortem' },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key as any)}
                className={tw(
                  'rounded-lg px-3 py-2 text-sm font-medium',
                  activeTab === (t.key as any)
                    ? 'bg-slate-900/5 text-slate-900 ring-1 ring-slate-300'
                    : 'text-slate-600 hover:bg-slate-100'
                )}
                aria-current={activeTab === (t.key as any) ? 'page' : undefined}
              >
                {t.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button className="group inline-flex items-center gap-2 rounded-lg bg-rose-500/10 px-3 py-2 text-sm font-semibold text-rose-700 ring-1 ring-rose-300/40 hover:bg-rose-500/15">
              <DotPulse /> Declare incident
            </button>
            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white ring-1 ring-slate-200 hover:bg-slate-50"
              aria-label="Command palette"
              title="Command"
            >
              <KbdIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Status banner */}
      <section className="border-b border-slate-200 bg-gradient-to-r from-indigo-100 via-fuchsia-50 to-emerald-100">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-3 px-4 lg:px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <PulseIcon />
            <p className="text-sm text-slate-700">
              <span className="font-semibold text-slate-900">SEV-1 active:</span> Checkout errors in EU · Owner:{' '}
              <span className="font-medium">Priya K.</span>
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href="#details"
              className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold ring-1 ring-slate-200 hover:bg-slate-50"
            >
              View details
            </a>
            <a
              href="#comm"
              className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold ring-1 ring-slate-200 hover:bg-slate-50"
            >
              Open comms
            </a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 lg:px-6 pt-8 pb-20 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left column */}
        <section>
          {/* Filters */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex w-full items-center gap-2 sm:w-auto">
                <SearchIcon />
                <input
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 sm:w-72"
                  placeholder="Search incidents (id, title, owner, tags)"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {(['all', 'SEV-1', 'SEV-2', 'SEV-3'] as const).map((sev) => (
                  <button
                    key={sev}
                    onClick={() => setSeverityFilter(sev)}
                    className={tw(
                      'rounded-full px-3 py-1 text-xs font-semibold ring-1 transition',
                      severityFilter === sev
                        ? 'bg-slate-900 text-white ring-slate-900'
                        : 'bg-white text-slate-700 ring-slate-300 hover:bg-slate-100'
                    )}
                  >
                    {sev}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Incident list */}
          <div className="mt-4 grid gap-4">
            {filtered.map((i) => (
              <IncidentCard key={i.id} {...i} />
            ))}
            {filtered.length === 0 && <EmptyState />}
          </div>

          {/* Tabbed content */}
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex gap-1 border-b border-slate-200 p-2">
              {[
                { key: 'overview', label: 'Overview' },
                { key: 'runbook', label: 'Runbook' },
                { key: 'timeline', label: 'Timeline' },
                { key: 'postmortem', label: 'Post-mortem' },
              ].map((t) => (
                <button
                  key={t.key}
                  onClick={() => setActiveTab(t.key as any)}
                  className={tw(
                    'rounded-lg px-3 py-2 text-sm',
                    activeTab === (t.key as any)
                      ? 'bg-slate-900/5 text-slate-900'
                      : 'text-slate-600 hover:bg-slate-100'
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="p-4">
              {activeTab === 'overview' && <OverviewPanel />}
              {activeTab === 'runbook' && <RunbookAccordion openStep={openStep} setOpenStep={setOpenStep} />}
              {activeTab === 'timeline' && <TimelinePanel />}
              {activeTab === 'postmortem' && <PostmortemPanel />}
            </div>
          </div>
        </section>

        {/* Right column */}
        <aside className="flex flex-col gap-6">
          <OnCallPanel />
          <SlaPanel />
        </aside>
      </main>
    </div>
  );
}

/* ---------------------------- Subcomponents ---------------------------- */

function IncidentCard({
  title,
  sev,
  status,
  startedAt,
  owner,
  impact,
  tags,
}: any) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <SeverityPill sev={sev} />
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
        </div>

        <span
          className={tw(
            'rounded-full px-2.5 py-1 text-xs font-semibold ring-1',
            status === 'Active'
              ? 'bg-rose-50 text-rose-700 ring-rose-200'
              : status === 'Mitigated'
              ? 'bg-emerald-50 text-emerald-700 ring-emerald-200'
              : 'bg-amber-50 text-amber-700 ring-amber-200'
          )}
        >
          {status}
        </span>
      </div>

      <div className="mt-2 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
        <div className="flex items-center gap-2">
          <ClockIcon /> Started <TimeAgo iso={startedAt} />
        </div>
        <div className="flex items-center gap-2">
          <UserIcon /> Owner <span className="font-medium text-slate-900">{owner}</span>
        </div>
        <div className="flex items-center gap-2 md:col-span-2">
          <ImpactIcon /> {impact}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {tags?.map((t: any) => (
          <span
            key={t}
            className="rounded-md bg-slate-100 px-2 py-1 text-[11px] text-slate-700 ring-1 ring-slate-200"
          >
            {t}
          </span>
        ))}
        <a
          href="#details"
          className="ml-auto inline-flex items-center gap-1 text-[12px] font-semibold text-indigo-700 hover:underline"
        >
          View details <ArrowIcon />
        </a>
      </div>

      <div className="mt-3 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <a href="#mitigate" className="action-chip-light">
          <ShieldIcon /> Mitigation
        </a>
        <a href="#notes" className="action-chip-light">
          <NoteIcon /> Add note
        </a>
        <a href="#bridge" className="action-chip-light">
          <PhoneIcon /> Bridge
        </a>
      </div>
    </article>
  );
}

function EmptyState() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
      <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-lg bg-slate-100">
        <SearchIcon />
      </div>
      <p className="text-sm text-slate-600">No incidents match your filters.</p>
    </div>
  );
}

function SeverityPill({ sev }: any) {
  const map: any = {
    'SEV-1': 'bg-rose-50 text-rose-700 ring-rose-200',
    'SEV-2': 'bg-amber-50 text-amber-700 ring-amber-200',
    'SEV-3': 'bg-sky-50 text-sky-700 ring-sky-200',
  };
  return (
    <span className={tw('rounded-full px-2.5 py-1 text-xs font-semibold ring-1', map[sev] || 'bg-slate-100 text-slate-700 ring-slate-200')}>
      {sev}
    </span>
  );
}

function OverviewPanel() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <h4 className="mb-2 text-sm font-semibold text-slate-900">What good looks like</h4>
        <ul className="grid gap-2 text-sm text-slate-600">
          <li className="flex items-start gap-2">
            <CheckIcon /> Acknowledged in &lt; 5 minutes
          </li>
          <li className="flex items-start gap-2">
            <CheckIcon /> Mitigation in &lt; 30 minutes
          </li>
          <li className="flex items-start gap-2">
            <CheckIcon /> Root cause within 24 hours
          </li>
        </ul>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <h4 className="mb-2 text-sm font-semibold text-slate-900">Change freeze windows</h4>
        <p className="text-sm text-slate-600">Friday 16:00–Monday 02:00 UTC · Major launches paused.</p>
      </div>
    </div>
  );
}

function RunbookAccordion({ openStep, setOpenStep }: any) {
  const steps = [
    { t: 'Triage', d: 'Confirm scope, traffic segments, and error class. Tag severity and page on-call.' },
    { t: 'Mitigate', d: 'Roll back risky deploy, scale affected service, or toggle feature flag. Document change.' },
    { t: 'Verify', d: 'Watch p95/p99 latency, error rate, and business KPIs for 15 minutes.' },
    { t: 'Comms', d: 'Post updates to #incident, status page, and bridge every 15 minutes.' },
  ];
  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
      {steps.map((s, i) => (
        <details
          key={i}
          open={openStep === i}
          onClick={(e) => {
            e.preventDefault();
            setOpenStep(openStep === i ? -1 : i);
          }}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4">
            <div className="flex items-center gap-2">
              <StepIcon /> <span className="font-semibold text-slate-900">{i + 1}. {s.t}</span>
            </div>
            <ChevronIcon open={openStep === i} />
          </summary>
          <div className="px-4 pb-4 text-sm text-slate-600">{s.d}</div>
        </details>
      ))}
    </div>
  );
}

function TimelinePanel() {
  const items = [
    { t: '12:20', l: 'Spike in 5xx for EU edge POPs', k: 'alert' },
    { t: '12:23', l: 'On-call acknowledged', k: 'ack' },
    { t: '12:31', l: 'Rolled back checkout-web v2.14.3', k: 'change' },
    { t: '12:48', l: 'Error rate back to baseline; monitoring', k: 'stable' },
  ];
  return (
    <ol className="relative ml-3 space-y-4">
      <div className="absolute left-0 top-0 h-full w-px bg-slate-200" />
      {items.map((it, idx) => (
        <li key={idx} className="relative pl-6">
          <span className="absolute -left-[7px] top-0 grid h-3.5 w-3.5 place-items-center rounded-full bg-white ring-2 ring-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
          </span>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-mono">{it.t}</span> <Badge kind={it.k} />
          </div>
          <p className="mt-1 text-sm text-slate-800">{it.l}</p>
        </li>
      ))}
    </ol>
  );
}

function PostmortemPanel() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <h4 className="mb-2 text-sm font-semibold text-slate-900">Template</h4>
        <ul className="grid list-disc gap-1 pl-5 text-sm text-slate-600">
          <li>Summary & impact</li>
          <li>Detection & timeline</li>
          <li>Root cause analysis (5 whys)</li>
          <li>What went well / improvements</li>
        </ul>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <h4 className="mb-2 text-sm font-semibold text-slate-900">Create a post-mortem</h4>
        <p className="text-sm text-slate-600">Spin up a doc prefilled with incident metadata, owners, and key charts.</p>
        <div className="mt-3 flex gap-2">
          <a
            href="#new-pm"
            className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white ring-1 ring-slate-900/10 hover:-translate-y-0.5"
          >
            New doc
          </a>
          <a
            href="#export"
            className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-300 hover:bg-slate-50"
          >
            Export
          </a>
        </div>
      </div>
    </div>
  );
}

function OnCallPanel() {
  const people = [
    { n: 'Priya K.', r: 'Incident Commander', h: '+880 1700-000001' },
    { n: 'Ahmed R.', r: 'Comms', h: '+880 1700-000002' },
    { n: 'Mina L.', r: 'Ops', h: '+880 1700-000003' },
  ];
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <h4 className="mb-3 text-sm font-semibold text-slate-900">On-call roster</h4>
      <ul className="grid gap-2 text-sm text-slate-800">
        {people.map((p) => (
          <li
            key={p.n}
            className="flex items-center justify-between gap-2 rounded-lg bg-slate-50 px-3 py-2 ring-1 ring-slate-200"
          >
            <div>
              <div className="font-medium">{p.n}</div>
              <div className="text-xs text-slate-500">{p.r}</div>
            </div>
            <a
              href={`tel:${p.h.replace(/\s/g, '')}`}
              className="rounded-md bg-white px-2 py-1 text-xs font-semibold ring-1 ring-slate-300 hover:bg-slate-50"
            >
              Call
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SlaPanel() {
  const items = [
    { t: 'Ack', v: '5m', d: 'Mean time to ack' },
    { t: 'Mitigate', v: '30m', d: 'Mean time to mitigate' },
    { t: 'Resolve', v: '2h', d: 'Mean time to resolve' },
  ];
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <h4 className="mb-3 text-sm font-semibold text-slate-900">SLAs</h4>
      <div className="grid grid-cols-3 gap-2">
        {items.map((it) => (
          <div key={it.t} className="rounded-lg bg-slate-50 p-3 text-center ring-1 ring-slate-200">
            <div className="text-lg font-bold text-slate-900">{it.v}</div>
            <div className="text-[11px] text-slate-500">{it.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}


/* ---------------------------- Tiny helpers ---------------------------- */
function tw(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
function TimeAgo({ iso }:any) {
  try {
    const d = new Date(iso);
    const mins = Math.max(1, Math.round((Date.now() - d.getTime()) / 60000));
    if (mins < 60) return <span className="tabular-nums">{mins}m ago</span>;
    const hours = Math.round(mins / 60);
    return <span className="tabular-nums">{hours}h ago</span>;
  } catch {
    return <span className="tabular-nums">—</span>;
  }
}
function Badge({ kind }:any) {
  const map:any = {
    alert: "bg-rose-500/15 text-rose-200 ring-rose-300/30",
    ack: "bg-amber-500/15 text-amber-200 ring-amber-300/30",
    change: "bg-sky-500/15 text-sky-200 ring-sky-300/30",
    stable: "bg-emerald-500/15 text-emerald-200 ring-emerald-300/30",
  };
  const label = (map as Partial<Record<string, string>>)[kind] || "Event";

  return <span className={tw("rounded-md px-2 py-0.5 text-[10px] ring-1", map[kind])}>{label}</span>;
}

/* ---------------------------- Inline Icons ---------------------------- */
function PulseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-rose-300" aria-hidden>
      <path fill="currentColor" d="M3 12h3l2-5 4 10 2-5h5" stroke="currentColor" strokeWidth="2"  strokeLinecap="round"/>
    </svg>
  );
}
function KbdIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-200" aria-hidden>
      <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" fill="none" />
      <path d="M8 12h8" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function DotPulse() {
  return (
    <span className="relative inline-flex items-center">
      <span className="h-2 w-2 rounded-full bg-rose-400"></span>
      <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-rose-400/70"></span>
    </span>
  );
}
function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-300" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" fill="none" />
      <path d="M20 20l-3-3" stroke="currentColor" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-slate-300" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" fill="none" />
      <path d="M12 7v6l4 2" stroke="currentColor" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-slate-300" aria-hidden>
      <circle cx="12" cy="8" r="4" stroke="currentColor" fill="none" />
      <path d="M4 20c2-4 14-4 16 0" stroke="currentColor" />
    </svg>
  );
}
function ImpactIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-slate-300" aria-hidden>
      <path d="M4 12h6l2-4 2 8 2-4h4" stroke="currentColor" fill="none" />
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-indigo-300" aria-hidden>
      <path d="M8 5l8 7-8 7" fill="none" stroke="currentColor" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-emerald-300" aria-hidden>
      <path d="M12 3l8 4v5c0 5-4 9-8 9s-8-4-8-9V7l8-4z" fill="none" stroke="currentColor" />
    </svg>
  );
}
function NoteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-sky-300" aria-hidden>
      <path d="M5 4h10l4 4v12H5z" fill="none" stroke="currentColor" />
      <path d="M9 13h6M9 9h6" stroke="currentColor" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-amber-300" aria-hidden>
      <path d="M6 3h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4c0 1-1 2-2 2C9 21 3 15 3 6c0-1 1-2 3-3z" fill="none" stroke="currentColor" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-emerald-300" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function StepIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-slate-300" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" />
      <path d="M8 12h8" stroke="currentColor" />
    </svg>
  );
}
function ChevronIcon({ open }:any) {
  return (
    <svg viewBox="0 0 24 24" className={tw("h-4 w-4 text-slate-300 transition-transform", open ? "rotate-180" : "")} aria-hidden>
      <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" />
    </svg>
  );
}

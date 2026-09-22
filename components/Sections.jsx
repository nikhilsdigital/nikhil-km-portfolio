'use client';

import Link from './L';
import { motion } from 'framer-motion';
import { faqs, industries, process, projects, services, stats, testimonials } from '../data/site';
import { Counter, GlowField, SectionHeading } from './Bits';
import Reveal from './Reveal';
import Icon from './Icon';
import { useState } from 'react';

/* ---------------- Stats ---------------- */
export function StatsBand() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface2/40">
      <div className="shell grid grid-cols-2 gap-x-6 gap-y-10 py-14 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <p className="font-display text-[2.1rem] font-semibold leading-none text-ink">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="meta mt-2.5">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
export function ServicesGrid({ limit }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {list.map((s, i) => (
        <Reveal key={s.slug} delay={(i % 3) * 0.08}>
          <article className="card card-hover group h-full p-7">
            <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl border border-line bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
              <Icon name={s.icon} size={22} />
            </div>
            <h3 className="h3 font-semibold">{s.title}</h3>
            <p className="mt-3 text-[0.95rem] text-muted">{s.body}</p>
            <ul className="mt-5 space-y-2">
              {s.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[0.9rem] text-muted">
                  <Icon name="check" size={15} className="mt-1 shrink-0 text-primary" strokeWidth={2.2} />
                  {p}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- Process ---------------- */
export function ProcessTimeline() {
  return (
    <div className="mt-14 grid gap-px overflow-hidden rounded-xl2 border border-line bg-line md:grid-cols-5">
      {process.map((p, i) => (
        <Reveal key={p.step} delay={i * 0.07} className="bg-surface">
          <div className="group h-full p-7 transition-colors hover:bg-primary/5">
            <span className="font-display text-[0.95rem] font-semibold tracking-[0.2em] text-primary">
              {p.step}
            </span>
            <h3 className="mt-4 font-display text-[1.1rem] font-semibold">{p.title}</h3>
            <p className="mt-2.5 text-[0.9rem] text-muted">{p.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- Work ---------------- */
export function WorkGrid({ limit, featured = false }) {
  const list = limit ? projects.slice(0, limit) : projects;
  return (
    <div className={`mt-14 grid gap-6 ${featured ? 'md:grid-cols-2' : 'md:grid-cols-2'}`}>
      {list.map((p, i) => (
        <Reveal
          key={p.slug}
          delay={(i % 2) * 0.1}
          className={featured && i === 0 ? 'md:col-span-2' : ''}
        >
          <article className="card card-hover group h-full">
            <div className="relative overflow-hidden">
              <img
                src={p.image}
                alt={`${p.title} — ${p.category} project preview`}
                loading={i < 2 ? 'eager' : 'lazy'}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${
                  featured && i === 0 ? 'h-[320px] md:h-[440px]' : 'h-[240px]'
                }`}
              />
              <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.12em] text-white backdrop-blur">
                {p.category}
              </span>
            </div>
            <div className="p-7">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="h3 font-semibold">{p.title}</h3>
                <span className="meta">{p.year}</span>
              </div>
              <p className="mt-3 text-[0.95rem] text-muted">{p.summary}</p>

              <dl className="mt-6 grid grid-cols-3 gap-3 rounded-2xl border border-line bg-surface2/70 p-4">
                {p.results.map((r) => (
                  <div key={r.v}>
                    <dt className="font-display text-[1.15rem] font-semibold text-primary">{r.k}</dt>
                    <dd className="mt-1 text-[0.75rem] leading-snug text-muted">{r.v}</dd>
                  </div>
                ))}
              </dl>

              <ul className="mt-5 flex flex-wrap gap-2">
                {p.scope.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-line px-3 py-1 text-[0.78rem] text-muted"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- Pricing ---------------- */
export function Pricing({ plans }) {
  const [monthly, setMonthly] = useState(false);

  return (
    <div className="mt-12">
      <div className="flex justify-center">
        <div
          role="tablist"
          aria-label="Billing type"
          className="relative flex items-center gap-1 rounded-full border border-line bg-surface p-1.5"
        >
          {[
            { label: 'One-time project', value: false },
            { label: 'Monthly retainer', value: true },
          ].map((opt) => (
            <button
              key={opt.label}
              role="tab"
              aria-selected={monthly === opt.value}
              onClick={() => setMonthly(opt.value)}
              className={`relative rounded-full px-5 py-2 text-[0.85rem] font-medium transition-colors ${
                monthly === opt.value ? 'text-white' : 'text-muted hover:text-ink'
              }`}
            >
              {monthly === opt.value && (
                <motion.span
                  layoutId="billing-pill"
                  className="absolute inset-0 rounded-full bg-brand"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 0.1}>
            <article
              className={`card relative h-full p-8 transition-all duration-300 ${
                plan.highlight
                  ? 'border-primary/50 lg:-mt-6 lg:pb-12'
                  : 'card-hover'
              }`}
            >
              {plan.highlight && (
                <>
                  <div
                    className="glow -right-10 -top-10 h-44 w-44 bg-[rgb(var(--glow-1))]/25"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 mb-5 inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white">
                    <Icon name="sparkle" size={12} /> {plan.badge}
                  </span>
                </>
              )}
              <div className="relative z-10">
                <h3 className="h3 font-semibold">{plan.name}</h3>
                <p className="mt-2 min-h-[3rem] text-[0.9rem] text-muted">{plan.for}</p>

                <div className="mt-6 flex items-end gap-1.5">
                  <motion.span
                    key={monthly ? 'm' : 'o'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-display text-[2.3rem] font-semibold leading-none"
                  >
                    {monthly ? plan.monthly : plan.oneTime}
                  </motion.span>
                  <span className="pb-1 text-[0.85rem] text-muted">
                    {monthly ? '/ month' : 'one-time'}
                  </span>
                </div>
                <p className="mt-2 text-[0.78rem] text-faint">
                  {monthly
                    ? 'Rolling monthly. Cancel with 2 weeks notice.'
                    : 'GST extra. 50% advance, 50% on launch.'}
                </p>

                <Link
                  href="/contact"
                  className={`mt-7 w-full ${plan.highlight ? 'btn-primary' : 'btn-ghost'}`}
                >
                  Choose {plan.name} <Icon name="arrow" size={15} />
                </Link>

                <ul className="mt-8 space-y-3 border-t border-line pt-7">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[0.9rem]">
                      <Icon name="check" size={15} className="mt-1 shrink-0 text-primary" strokeWidth={2.3} />
                      {f}
                    </li>
                  ))}
                  {plan.excluded.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[0.9rem] text-faint">
                      <Icon name="plus" size={15} className="mt-1 shrink-0 rotate-45" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Testimonials ---------------- */
export function Testimonials() {
  return (
    <div className="mt-14 grid gap-5 md:grid-cols-2">
      {testimonials.map((t, i) => (
        <Reveal key={t.author} delay={(i % 2) * 0.1}>
          <figure className="card h-full p-8">
            <div className="mb-5 flex gap-1 text-primary" aria-label="5 out of 5 stars">
              {[0, 1, 2, 3, 4].map((s) => (
                <svg key={s} width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="m12 2.6 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.5 6.1 20.6l1.2-6.5L2.5 9.5l6.6-.9z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-[1.02rem] leading-relaxed">“{t.quote}”</blockquote>
            <figcaption className="mt-6 border-t border-line pt-5">
              <span className="font-display text-[0.98rem] font-semibold">{t.author}</span>
              <span className="mt-1 block text-[0.82rem] text-muted">{t.role}</span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- FAQ ---------------- */
export function FAQ({ limit }) {
  const list = limit ? faqs.slice(0, limit) : faqs;
  const [open, setOpen] = useState(0);
  return (
    <div className="mt-12 divide-y divide-line overflow-hidden rounded-xl2 border border-line bg-surface">
      {list.map((f, i) => (
        <div key={f.q}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
          >
            <span className="font-display text-[1.05rem] font-semibold">{f.q}</span>
            <motion.span
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.25 }}
              className="shrink-0 text-primary"
            >
              <Icon name="plus" size={20} />
            </motion.span>
          </button>
          <motion.div
            initial={false}
            animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-7 pb-7 text-[0.95rem] text-muted">{f.a}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- Industries ---------------- */
export function Industries() {
  return (
    <div className="mt-12 flex flex-wrap gap-3">
      {industries.map((ind, i) => (
        <Reveal key={ind} delay={i * 0.04} direction="none">
          <span className="flex items-center gap-2.5 rounded-full border border-line bg-surface px-5 py-2.5 text-[0.9rem] transition-colors hover:border-primary/40 hover:text-primary">
            <Icon name="check" size={14} className="text-primary" strokeWidth={2.4} />
            {ind}
          </span>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- CTA ---------------- */
export function CTA({ title, body }) {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface p-10 text-center md:p-16">
            <GlowField />
            <div className="grid-bg absolute inset-0 opacity-60" aria-hidden="true" />
            <div className="relative z-10">
              <h2 className="h1 mx-auto max-w-[24ch] font-semibold">{title}</h2>
              <p className="mx-auto mt-5 max-w-xl text-muted">{body}</p>
              <p className="mal mx-auto mt-3 text-[0.9rem] text-faint">
                Let’s talk in Malayalam — just one call is all it takes.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link href="/contact" className="btn-primary">
                  Book a free consultation <Icon name="arrow" size={16} />
                </Link>
                <Link href="/pricing" className="btn-ghost">
                  View pricing
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export { SectionHeading };

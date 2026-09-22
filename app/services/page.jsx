import Link from '../../components/L';
import PageHeader from '../../components/PageHeader';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import { SectionHeading, GlowField, Marquee } from '../../components/Bits';
import { CTA, FAQ, Industries, ProcessTimeline } from '../../components/Sections';
import { services } from '../../data/site';

export const metadata = {
  title: 'Services — Web Design, SEO, Social Media & Paid Ads',
  description:
    'Website design and development, technical and local SEO, social media marketing, and paid promotion on Meta and Google — freelance services from Thrissur, Kerala.',
};

const deliverables = [
  { k: 'Website build', v: '7–30 working days depending on scope' },
  { k: 'SEO results', v: 'First movement in 6–8 weeks, compounding after' },
  { k: 'Social content', v: 'Calendar approved 7 days before the month starts' },
  { k: 'Paid campaigns', v: 'Live in 5 days, optimised weekly' },
];

const addons = [
  'Content writing (English & Malayalam)',
  'Product & interior photography direction',
  'Reel shooting and editing',
  'Logo & brand identity',
  'WhatsApp Business API setup',
  'Google Business Profile management',
  'Email & newsletter automation',
  'Speed audit for an existing site',
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        crumb="Services"
        kicker="Services"
        title="One partner for the website and the traffic that reaches it"
        body="Take a single service or the whole stack. Either way you get the same thing: clear scope, fixed pricing and reporting you can read without a marketing degree."
        malayalam="Website, SEO, social media, paid promotions — everything under one roof."
      />

      {/* Detailed services */}
      <section className="section">
        <div className="shell space-y-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={0.05}>
              <article
                className="card card-hover grid gap-8 p-8 md:grid-cols-[auto_1fr_1fr] md:p-10"
                id={s.slug}
              >
                <div className="flex items-start gap-5 md:flex-col">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-line bg-primary/10 text-primary">
                    <Icon name={s.icon} size={24} />
                  </span>
                  <span className="font-display text-[0.85rem] font-semibold tracking-[0.2em] text-faint">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div>
                  <h2 className="h2 font-semibold">{s.title}</h2>
                  <p className="mt-3 font-medium text-primary">{s.short}</p>
                  <p className="mt-4 text-[0.95rem] text-muted">{s.body}</p>
                </div>

                <ul className="space-y-3 rounded-2xl border border-line bg-surface2/60 p-6">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[0.92rem]">
                      <Icon name="check" size={15} className="mt-1 shrink-0 text-primary" strokeWidth={2.3} />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Marquee />

      {/* Timelines */}
      <section className="section relative overflow-hidden border-b border-line bg-surface2/40">
        <GlowField />
        <div className="shell relative z-10 grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            kicker="Turnaround"
            title="Honest timelines, written down before we start"
            body="No open-ended projects. Every engagement gets a milestone sheet with dates, and you see staging links throughout."
          />
          <div className="divide-y divide-line overflow-hidden rounded-xl2 border border-line bg-surface">
            {deliverables.map((d) => (
              <div key={d.k} className="flex flex-col gap-1 p-6 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-display text-[1.02rem] font-semibold">{d.k}</span>
                <span className="text-[0.92rem] text-muted">{d.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Method"
            title="The same five steps, every project"
            body="It keeps quality predictable and stops the guesswork that makes marketing feel expensive."
          />
          <ProcessTimeline />
        </div>
      </section>

      {/* Add-ons */}
      <section className="section border-y border-line bg-surface2/40">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            kicker="Add-ons"
            title="Extras you can bolt on to any plan"
            body="Quoted separately so you only pay for what you actually need."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {addons.map((a, i) => (
              <Reveal key={a} delay={i * 0.04}>
                <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 text-[0.92rem]">
                  <Icon name="plus" size={16} className="shrink-0 text-primary" />
                  {a}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Sectors"
            title="Industries I know the playbook for"
            body="Familiar ground means less discovery time and faster results — I already know what your customers search for."
          />
          <Industries />
          <Reveal className="mt-12">
            <Link href="/pricing" className="btn-ghost">
              See plans and pricing <Icon name="arrow" size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section border-t border-line bg-surface2/40">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading kicker="FAQ" title="Before you send the first message" />
          <FAQ />
        </div>
      </section>

      <CTA
        title="Not sure which service you need first?"
        body="Send me your website link or your current ad results. I will tell you the one change that would make the biggest difference — free."
      />
    </>
  );
}

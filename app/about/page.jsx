import Link from '../../components/L';
import PageHeader from '../../components/PageHeader';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import { SectionHeading, GlowField, Counter } from '../../components/Bits';
import { CTA, ProcessTimeline, Testimonials } from '../../components/Sections';
import { site } from '../../data/site';

export const metadata = {
  title: 'About — Freelance Web Developer in Thrissur',
  description:
    'Meet NIKHIL K M, a freelance web developer and digital marketer from Thrissur, Kerala with six years of experience building fast websites and running SEO, social and paid campaigns.',
};

const toolkit = [
  { group: 'Build', items: ['Next.js', 'React', 'Tailwind CSS', 'WordPress', 'Shopify', 'Node.js'] },
  { group: 'Search', items: ['Ahrefs', 'Semrush', 'Search Console', 'Screaming Frog', 'Schema markup'] },
  { group: 'Ads & analytics', items: ['Meta Ads Manager', 'Google Ads', 'GA4', 'Looker Studio', 'Tag Manager'] },
  { group: 'Design & content', items: ['Figma', 'Photoshop', 'Premiere Pro', 'CapCut', 'Canva Pro'] },
];

const timeline = [
  {
    year: '2020',
    title: 'First client, first lesson',
    body: 'Built a textile showroom site while studying. It looked good and got zero enquiries — that is when I started learning SEO and ads instead of only design.',
  },
  {
    year: '2022',
    title: 'Full-stack freelancer',
    body: 'Moved to coded builds over page builders, added Google and Meta ads to the offer, and started reporting on leads rather than likes.',
  },
  {
    year: '2024',
    title: 'Retainers and referrals',
    body: 'Most new work now comes from client referrals across Thrissur, Ernakulam and the Gulf. Long-term retainers replaced one-off projects.',
  },
  {
    year: '2026',
    title: 'Performance-first builds',
    body: 'Every new site ships on Next.js with 90+ PageSpeed scores, schema markup and conversion tracking wired in from day one.',
  },
];

const values = [
  {
    icon: 'check',
    title: 'Say the real timeline',
    body: 'I quote dates I can hit, and if something slips you hear it from me first — not after the deadline.',
  },
  {
    icon: 'search',
    title: 'No vanity metrics',
    body: 'Impressions are not results. Reports show enquiries, calls, cost per lead and what I am changing next.',
  },
  {
    icon: 'shield',
    title: 'You own everything',
    body: 'Domain, hosting, ad accounts, analytics and code stay in your name. No lock-in, no hostage situations.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumb="About"
        kicker="About me"
        title="I build the website, then make sure people find it"
        body={`I'm ${site.name}, a freelance web developer and digital marketer working from ${site.city}. Six years, 60+ projects, and a strong preference for work that can be measured.`}
        malayalam="വെബ്‌സൈറ്റ് മുതൽ മാർക്കറ്റിംഗ് വരെ — എല്ലാം ഒരാൾ തന്നെ."
      />

      {/* Story */}
      <section className="section">
        <div className="shell grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading kicker="My story" title="Design that pays for itself" />
            <div className="mt-8 space-y-5 text-muted">
              <p>
                I started as a designer who liked making things look expensive. The problem showed up
                quickly: beautiful sites that nobody visited. So I learned the other half of the job —
                technical SEO, local search, content, ad funnels and analytics.
              </p>
              <p>
                Today I work with a small number of clients at a time, mostly local businesses in
                Thrissur and across Kerala, plus a few Malayali-run businesses in the Gulf. The
                websites are hand-coded for speed, the marketing is tracked end to end, and the
                reporting is in plain language.
              </p>
              <p>
                Because I am a freelancer and not an agency, you get direct access, faster turnaround
                and prices that make sense for a growing business. And you can call me at{' '}
                <a href={`tel:+${site.phoneRaw}`} className="font-medium text-primary hover:underline">
                  {site.phone}
                </a>{' '}
                without going through three departments.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { v: 60, s: '+', l: 'Projects' },
                { v: 38, s: '+', l: 'Clients' },
                { v: 6, s: ' yrs', l: 'Experience' },
                { v: 12, s: '', l: 'Industries' },
              ].map((m) => (
                <Reveal key={m.l}>
                  <dt className="font-display text-[1.9rem] font-semibold leading-none">
                    <Counter to={m.v} suffix={m.s} />
                  </dt>
                  <dd className="meta mt-2">{m.l}</dd>
                </Reveal>
              ))}
            </dl>
          </div>

          <Reveal direction="left">
            <div className="overflow-hidden rounded-xl2 border border-line">
              <img
                src="/about-desk.webp"
                alt="Late-night freelance workspace in Kerala with a laptop showing design work"
                className="h-[420px] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="card mt-6 p-7">
              <p className="mal text-[0.95rem] leading-loose text-muted">
               “GOOD DESIGN ALONE ISN’T ENOUGH — PEOPLE NEED TO FIND YOU, TRUST YOU, AND CONTACT YOU. THAT’S MY JOB.”
              </p>
              <p className="mt-4 font-display text-[0.95rem] font-semibold">{site.name}</p>
              <p className="meta mt-1">{site.city}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section border-y border-line bg-surface2/40">
        <div className="shell">
          <SectionHeading kicker="Journey" title="How the practice grew" />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.08}>
                <div className="card h-full p-7">
                  <span className="font-display text-[0.9rem] font-semibold tracking-[0.2em] text-primary">
                    {t.year}
                  </span>
                  <h3 className="mt-4 font-display text-[1.08rem] font-semibold">{t.title}</h3>
                  <p className="mt-2.5 text-[0.92rem] text-muted">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit */}
      <section className="section relative overflow-hidden">
        <GlowField />
        <div className="shell relative z-10">
          <SectionHeading
            kicker="Toolkit"
            title="The stack behind the work"
            body="Tools are not the point, but using the right ones keeps sites fast and campaigns measurable."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl2 border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {toolkit.map((t, i) => (
              <Reveal key={t.group} delay={i * 0.07} className="bg-surface">
                <div className="h-full p-7">
                  <h3 className="meta">{t.group}</h3>
                  <ul className="mt-5 space-y-2.5">
                    {t.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-[0.92rem] text-muted">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section border-y border-line bg-surface2/40">
        <div className="shell">
          <SectionHeading kicker="How I work" title="Three rules I do not break" />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="card card-hover h-full p-8">
                  <span className="mb-6 grid h-12 w-12 place-items-center rounded-2xl border border-line bg-primary/10 text-primary">
                    <Icon name={v.icon} size={22} />
                  </span>
                  <h3 className="h3 font-semibold">{v.title}</h3>
                  <p className="mt-3 text-[0.95rem] text-muted">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading kicker="Process" title="What working together looks like" />
          <ProcessTimeline />
        </div>
      </section>

      <section className="section border-t border-line bg-surface2/40">
        <div className="shell">
          <SectionHeading kicker="References" title="Clients I have worked with" />
          <Testimonials />
          <Reveal className="mt-12">
            <Link href="/portfolio" className="btn-ghost">
              See the projects behind these words <Icon name="arrow" size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Let's talk about your business, not my portfolio"
        body="A 30-minute call is enough to tell you whether a new website, better SEO or paid ads will move the needle first."
      />
    </>
  );
}

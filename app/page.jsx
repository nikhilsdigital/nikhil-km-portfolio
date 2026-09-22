import Link from '../components/L';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { Marquee, SectionHeading, GlowField } from '../components/Bits';
import {
  CTA,
  FAQ,
  Industries,
  Pricing,
  ProcessTimeline,
  ServicesGrid,
  StatsBand,
  Testimonials,
  WorkGrid,
} from '../components/Sections';
import { plans, site } from '../data/site';

export const metadata = {
  description:
    'NIKHIL K M — freelance web developer and digital marketing specialist in Thrissur, Kerala. Premium websites, SEO, social media and paid promotion with clear pricing.',
};

const differences = [
  {
    icon: 'code',
    title: 'Hand-coded, not template-stuffed',
    body: 'Next.js and clean CSS instead of a pile of page-builder plugins. That is why these sites open in under a second on 4G.',
  },
  {
    icon: 'target',
    title: 'One person, whole funnel',
    body: 'Design, code, SEO, content and ads sit with one person — so the message on your ad matches the page it lands on.',
  },
  {
    icon: 'pin',
    title: 'Local context, real language',
    body: 'I know how Thrissur customers search and what they respond to. Copy and creatives in Malayalam or English, whichever converts.',
  },
  {
    icon: 'shield',
    title: 'Numbers, not adjectives',
    body: 'Every month you get rankings, traffic, leads and cost per lead. If something is not working, I say so and change it.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <StatsBand />

      {/* Services */}
      <section className="section relative overflow-hidden" id="services">
        <div className="shell relative z-10">
          <SectionHeading
            kicker="What I do"
            title="Everything your business needs to be found online"
            body="Six services that work as one system — a fast website at the centre, with search, social and paid promotion feeding it."
          />
          <ServicesGrid limit={6} />
          <Reveal className="mt-12" delay={0.1}>
            <Link href="/services" className="btn-ghost">
              Explore services in detail <Icon name="arrow" size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Why me */}
      <section className="relative overflow-hidden border-y border-line bg-surface2/40 py-24">
        <GlowField />
        <div className="shell relative z-10 grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              kicker="Why work with me"
              title="A freelancer who answers the phone"
              body="No account manager, no ticket queue. You talk to the person building and running your marketing — in Malayalam or English."
            />
            <div className="mt-10 overflow-hidden rounded-xl2 border border-line">
              <img
                src="/about-desk.webp"
                alt="Freelance web design workspace in Kerala at night with laptop, notebook and filter coffee"
                loading="lazy"
                className="h-[280px] w-full object-cover"
              />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {differences.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.08}>
                <div className="card h-full p-7">
                  <span className="mb-5 grid h-11 w-11 place-items-center rounded-2xl border border-line bg-primary/10 text-primary">
                    <Icon name={d.icon} size={20} />
                  </span>
                  <h3 className="font-display text-[1.08rem] font-semibold">{d.title}</h3>
                  <p className="mt-2.5 text-[0.92rem] text-muted">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Selected work"
            title="Projects that moved a real number"
            body="A website is only finished when it starts producing enquiries. Here is what that looked like for six Kerala businesses."
          />
          <WorkGrid limit={3} featured />
          <Reveal className="mt-12" delay={0.1}>
            <Link href="/portfolio" className="btn-ghost">
              View the full portfolio <Icon name="arrow" size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="section border-y border-line bg-surface2/40">
        <div className="shell">
          <SectionHeading
            kicker="How it works"
            title="Five steps from first call to steady leads"
            body="A process built to remove surprises — you always know what is happening this week and what it costs."
          />
          <ProcessTimeline />
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Who I work with"
            title="Local businesses that need customers, not awards"
            body="Most of my clients are in and around Thrissur — showrooms, clinics, restaurants and builders who sell to people within 30 kilometres."
          />
          <Industries />
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="section border-y border-line bg-surface2/40" id="pricing">
        <div className="shell">
          <SectionHeading
            align="center"
            kicker="Pricing"
            title="Three plans. No hidden add-ons."
            body="Pick a one-time project build or a monthly retainer where I keep running the marketing for you."
          />
          <Pricing plans={plans} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Client words"
            title="What people say after launch"
            body="Short version: fast sites, clear reports, replies on the same day."
          />
          <Testimonials />
        </div>
      </section>

      {/* FAQ */}
      <section className="section border-t border-line bg-surface2/40">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            kicker="Questions"
            title="The things everyone asks first"
            body={`Still unsure? Call ${site.phone} and ask directly — no sales script.`}
          />
          <FAQ limit={4} />
        </div>
      </section>

      <CTA
        title="Ready to make your website your best salesperson?"
        body="Tell me about your business and I will come back with a plan, a timeline and a fixed price — usually within 24 hours."
      />
    </>
  );
}

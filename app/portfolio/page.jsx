import PageHeader from '../../components/PageHeader';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import { SectionHeading, Counter, GlowField } from '../../components/Bits';
import { CTA, Testimonials, WorkGrid } from '../../components/Sections';

export const metadata = {
  title: 'Portfolio — Websites, SEO & Campaign Case Studies',
  description:
    'Selected freelance projects from Thrissur and across Kerala: e-commerce and business websites, local SEO wins, social media systems and paid lead generation campaigns.',
};

const outcomes = [
  { v: 240, s: '%', l: 'Average organic traffic lift across SEO retainers' },
  { v: 62, s: '%', l: 'Average drop in cost per lead after funnel rebuilds' },
  { v: 1, s: '.1s', l: 'Median mobile load time on new builds' },
];

const highlights = [
  {
    title: 'Speed as a strategy',
    body: 'Every build targets sub-1.5s LCP on 4G. Faster pages mean lower ad costs, better rankings and fewer abandoned enquiries.',
  },
  {
    title: 'Designed for the enquiry',
    body: 'Call, WhatsApp and form actions are placed where the customer is already convinced — not buried in a contact page.',
  },
  {
    title: 'Content in two languages',
    body: 'Malayalam for reach and trust, English for search volume and premium positioning. Most projects use both deliberately.',
  },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        crumb="Work"
        kicker="Portfolio"
        title="Work you can measure, not just scroll through"
        body="Six representative projects across e-commerce, hospitality, healthcare, real estate and retail — with the numbers that came after launch."
        malayalam="ഫലങ്ങൾ സംസാരിക്കട്ടെ — ഓരോ പ്രോജക്ടിനും അളക്കാവുന്ന ഫലങ്ങൾ."
      />

      <section className="relative overflow-hidden border-b border-line bg-surface2/40">
        <GlowField />
        <div className="shell relative z-10 grid gap-10 py-14 md:grid-cols-3">
          {outcomes.map((o, i) => (
            <Reveal key={o.l} delay={i * 0.08}>
              <p className="font-display text-[2.4rem] font-semibold leading-none text-primary">
                <Counter to={o.v} suffix={o.s} />
              </p>
              <p className="mt-3 max-w-[26ch] text-[0.9rem] text-muted">{o.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Case studies"
            title="Six projects, six different problems"
            body="Client names have been changed where the work is under an NDA, but every number below is real."
          />
          <WorkGrid />
        </div>
      </section>

      <section className="section border-y border-line bg-surface2/40">
        <div className="shell">
          <SectionHeading kicker="Common thread" title="What every project has in common" />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.08}>
                <div className="card card-hover h-full p-8">
                  <Icon name="sparkle" size={22} className="text-primary" />
                  <h3 className="h3 mt-6 font-semibold">{h.title}</h3>
                  <p className="mt-3 text-[0.95rem] text-muted">{h.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            kicker="Feedback"
            title="The part clients say out loud"
            body="Most of my work now comes from referrals, which is the review I care about most."
          />
          <Testimonials />
        </div>
      </section>

      <CTA
        title="Your project could be the next case study"
        body="Share your goal and budget range. I will tell you honestly whether I am the right fit and what results are realistic."
      />
    </>
  );
}

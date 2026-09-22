import PageHeader from '../../components/PageHeader';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import { SectionHeading, GlowField } from '../../components/Bits';
import { CTA, FAQ, Pricing, Testimonials } from '../../components/Sections';
import { plans, site } from '../../data/site';

export const metadata = {
  title: 'Pricing — Website & Digital Marketing Plans',
  description:
    'Transparent freelance pricing from Thrissur: three plans covering website design and development, SEO, social media marketing and paid promotion. One-time or monthly.',
};

const comparison = [
  { feature: 'Custom premium design', starter: true, growth: true, elite: true },
  { feature: 'Pages included', starter: 'Up to 5', growth: 'Up to 10 / store', elite: 'Unlimited' },
  { feature: 'Hand-coded Next.js build', starter: false, growth: true, elite: true },
  { feature: 'Mobile & speed optimisation', starter: true, growth: true, elite: true },
  { feature: 'On-page SEO', starter: 'Basic', growth: 'Full', elite: 'Advanced' },
  { feature: 'Local SEO & Google Business Profile', starter: 'Setup', growth: true, elite: true },
  { feature: 'Social creatives per month', starter: '—', growth: '12 + 4 reels', elite: '20 + 8 reels' },
  { feature: 'Meta & Google Ads management', starter: false, growth: false, elite: true },
  { feature: 'Conversion tracking & CRO', starter: false, growth: 'Basic', elite: 'Advanced' },
  { feature: 'Monthly performance report', starter: false, growth: true, elite: true },
  { feature: 'Support window', starter: '1 month', growth: '3 months', elite: 'Ongoing, same-day' },
];

const guarantees = [
  {
    icon: 'shield',
    title: 'Fixed price, written scope',
    body: 'The quote you approve is the amount you pay. Anything outside scope gets quoted before work starts.',
  },
  {
    icon: 'check',
    title: '90+ PageSpeed or I fix it free',
    body: 'If a new build does not hit a 90+ mobile performance score at launch, optimisation is on me.',
  },
  {
    icon: 'target',
    title: 'Monthly plans stay flexible',
    body: 'Retainers run month to month. Pause or stop with two weeks notice — no annual lock-in.',
  },
];

function Cell({ value }) {
  if (value === true)
    return <Icon name="check" size={17} className="mx-auto text-primary" strokeWidth={2.4} />;
  if (value === false || value === '—')
    return <span className="text-faint">—</span>;
  return <span className="text-[0.88rem]">{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      <PageHeader
        crumb="Pricing"
        kicker="Pricing"
        title="Clear plans, no surprise invoices"
        body="Three ways to work together. Start with a one-time build, or keep me on a monthly retainer to run the marketing continuously."
        malayalam="വില സുതാര്യമാണ് — ഒളിഞ്ഞ ചാർജുകൾ ഇല്ല."
      />

      <section className="section">
        <div className="shell">
          <Pricing plans={plans} />
          <p className="mt-10 text-center text-[0.85rem] text-faint">
            All prices in INR, GST extra. Ad spend on Google and Meta is paid directly by you to the
            platform. Custom scope? Call {site.phone}.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section border-y border-line bg-surface2/40">
        <div className="shell">
          <SectionHeading
            align="center"
            kicker="Compare"
            title="What sits inside each plan"
            body="Scroll sideways on mobile — every line is a deliverable, not a feeling."
          />
          <Reveal className="mt-14">
            <div className="overflow-x-auto rounded-xl2 border border-line bg-surface">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <caption className="sr-only">Feature comparison between Starter, Growth and Elite plans</caption>
                <thead>
                  <tr className="border-b border-line">
                    <th scope="col" className="p-5 text-[0.8rem] uppercase tracking-[0.14em] text-faint">
                      Feature
                    </th>
                    {['Starter', 'Growth', 'Elite'].map((h) => (
                      <th
                        key={h}
                        scope="col"
                        className={`p-5 text-center font-display text-[1rem] font-semibold ${
                          h === 'Growth' ? 'text-primary' : ''
                        }`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-line last:border-0 ${
                        i % 2 ? 'bg-surface2/40' : ''
                      }`}
                    >
                      <th scope="row" className="p-5 text-[0.92rem] font-medium">
                        {row.feature}
                      </th>
                      <td className="p-5 text-center text-muted">
                        <Cell value={row.starter} />
                      </td>
                      <td className="bg-primary/[0.04] p-5 text-center text-muted">
                        <Cell value={row.growth} />
                      </td>
                      <td className="p-5 text-center text-muted">
                        <Cell value={row.elite} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Guarantees */}
      <section className="section relative overflow-hidden">
        <GlowField />
        <div className="shell relative z-10">
          <SectionHeading kicker="Guarantees" title="Three promises attached to every plan" />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {guarantees.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.08}>
                <div className="card card-hover h-full p-8">
                  <span className="mb-6 grid h-12 w-12 place-items-center rounded-2xl border border-line bg-primary/10 text-primary">
                    <Icon name={g.icon} size={22} />
                  </span>
                  <h3 className="h3 font-semibold">{g.title}</h3>
                  <p className="mt-3 text-[0.95rem] text-muted">{g.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-surface2/40">
        <div className="shell">
          <SectionHeading kicker="Trust" title="Clients on value for money" />
          <Testimonials />
        </div>
      </section>

      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading kicker="FAQ" title="Pricing questions, answered" />
          <FAQ />
        </div>
      </section>

      <CTA
        title="Still deciding between two plans?"
        body="Tell me your goal for the next six months and I will recommend the smaller plan if that is genuinely enough."
      />
    </>
  );
}

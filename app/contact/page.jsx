import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import Reveal from '../../components/Reveal';
import Icon from '../../components/Icon';
import { SectionHeading } from '../../components/Bits';
import { FAQ } from '../../components/Sections';
import { site } from '../../data/site';

export const metadata = {
  title: 'Contact — Hire a Web Developer in Thrissur',
  description:
    'Call +91 9446446648 or send a WhatsApp enquiry to discuss your website, SEO, social media or paid promotion project in Thrissur and across Kerala.',
};

const channels = [
  {
    icon: 'whatsapp',
    label: 'WhatsApp',
    value: site.phone,
    hint: 'Fastest reply — usually within a few hours',
    href: `https://wa.me/${site.phoneRaw}`,
  },
  {
    icon: 'phone',
    label: 'Phone',
    value: site.phone,
    hint: 'Mon–Sat, 9:30 AM – 8:00 PM IST',
    href: `tel:+${site.phoneRaw}`,
  },
  {
    icon: 'mail',
    label: 'Email',
    value: site.email,
    hint: 'Best for briefs, files and quotations',
    href: `mailto:${site.email}`,
  },
  {
    icon: 'pin',
    label: 'Based in',
    value: site.city,
    hint: 'Serving all of Kerala + remote clients in the Gulf',
    href: 'https://www.google.com/maps/place/Thrissur,+Kerala',
  },
];

const expect = [
  'A reply within one working day, often the same day.',
  'A short discovery call in Malayalam or English — no sales script.',
  'A written proposal with scope, timeline and a fixed price.',
  'Work starts after 50% advance; you get staging links throughout.',
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumb="Contact"
        kicker="Contact"
        title="Tell me what you want to grow"
        body="Fill the form and it opens a pre-filled WhatsApp chat, or just call. Either way you reach me directly — not a call centre."
        malayalam="വിളിക്കാം, മെസ്സേജ് ചെയ്യാം — മലയാളത്തിൽ സംസാരിക്കാം."
      />

      <section className="section">
        <div className="shell grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0">
            <SectionHeading kicker="Enquiry form" title="Start a project in two minutes" />
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          <div className="min-w-0 space-y-5">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.07}>
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="card card-hover flex items-start gap-5 p-6"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-line bg-primary/10 text-primary">
                    <Icon name={c.icon} size={21} />
                  </span>
                  <span className="min-w-0">
                    <span className="meta block">{c.label}</span>
                    <span className="mt-1.5 block truncate font-display text-[1.05rem] font-semibold">
                      {c.value}
                    </span>
                    <span className="mt-1 block text-[0.85rem] text-muted">{c.hint}</span>
                  </span>
                  <Icon name="arrow" size={17} className="ml-auto mt-3 shrink-0 text-faint" />
                </a>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="card p-7">
                <h2 className="h3 font-semibold">What happens next</h2>
                <ol className="mt-5 space-y-3">
                  {expect.map((e, i) => (
                    <li key={e} className="flex items-start gap-3 text-[0.92rem] text-muted">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-[0.7rem] font-semibold text-primary">
                        {i + 1}
                      </span>
                      {e}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section border-t border-line bg-surface2/40">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            kicker="FAQ"
            title="Quick answers before you write"
            body="If your question is not here, ask it on WhatsApp — I answer personally."
          />
          <FAQ />
        </div>
      </section>
    </>
  );
}

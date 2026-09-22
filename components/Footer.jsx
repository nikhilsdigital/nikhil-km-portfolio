import Link from './L';
import { nav, services, site } from '../data/site';
import Logo from './Logo';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface2">
      <div className="glow -left-40 top-0 h-80 w-80 bg-[rgb(var(--glow-1))]/20" aria-hidden="true" />
      <div className="shell relative z-10 grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div>
          <Link href="/" className="text-ink">
            <Logo />
          </Link>
          <p className="mt-5 max-w-sm text-[0.95rem] text-muted">
            Freelance web developer and digital marketer based in {site.city}. I build fast websites
            and run the SEO, social and paid campaigns that keep them busy.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <a href={`https://wa.me/${site.phoneRaw}`} className="btn-ghost" target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={16} /> WhatsApp
            </a>
            <a href={`tel:+${site.phoneRaw}`} className="btn-ghost">
              <Icon name="phone" size={16} /> Call
            </a>
          </div>
        </div>

        <div>
          <h2 className="meta mb-5">Navigate</h2>
          <ul className="space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[0.95rem] text-muted hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="meta mb-5">Services</h2>
          <ul className="space-y-2.5">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link href="/services" className="text-[0.95rem] text-muted hover:text-primary">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-2 text-[0.9rem] text-muted">
            <p className="flex items-center gap-2">
              <Icon name="pin" size={15} className="text-primary" /> {site.city}
            </p>
            <a className="flex items-center gap-2 hover:text-primary" href={`tel:+${site.phoneRaw}`}>
              <Icon name="phone" size={15} className="text-primary" /> {site.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="shell relative z-10 flex flex-col items-start justify-between gap-3 border-t border-line py-6 text-[0.85rem] text-faint sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p className="mal">തൃശ്ശൂരിൽ നിന്ന് സ്നേഹത്തോടെ ഉണ്ടാക്കിയത്</p>
      </div>
    </footer>
  );
}

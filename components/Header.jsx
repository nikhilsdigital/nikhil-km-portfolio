'use client';

import { useEffect, useState } from 'react';
import Link from './L';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { nav, site } from '../data/site';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import Icon from './Icon';

// Resolves the current route relative to the site root (works when the static
// export is hosted under a sub-path, where location.pathname carries a prefix).
function normalizeRoute(p) {
  if (!p) return '/';
  const trimmed = p.replace(/index\.html$/, '');
  return trimmed.length > 1 ? trimmed.replace(/\/+$/, '') : '/';
}

function routeFromLocation() {
  if (typeof document === 'undefined') return '/';
  try {
    const file = window.location.pathname.split('/').pop() || '';
    if (!file || file === 'index.html') return '/';
    return normalizeRoute(`/${file.replace(/\.html$/, '')}`);
  } catch (e) {
    return '/';
  }
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // Prerendered HTML uses the build-time route (React keeps server-rendered
  // attributes), then the client refines it for sub-path hosting.
  const [route, setRoute] = useState(() => normalizeRoute(pathname));
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Static export can prerender without a pathname, so re-resolve the route
  // once on the client (this also forces React to repaint header styles).
  useEffect(() => {
    setHydrated(true);
    setRoute(routeFromLocation());
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isHome = hydrated ? route === '/' : normalizeRoute(pathname) === '/';
  const overHero = isHome && !scrolled && !open;

  const isActive = (href) =>
    href === '/' ? isHome : route === href || route.startsWith(`${href}/`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-line bg-bg/90 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <div className="shell flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className={overHero ? 'text-white' : 'text-ink'} aria-label="NIKHIL K M — home">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative rounded-full px-4 py-2 text-[0.9rem] font-medium transition-colors ${
                isActive(item.href)
                  ? overHero
                    ? 'text-white'
                    : 'text-primary'
                  : overHero
                    ? 'text-white/65 hover:text-white'
                    : 'text-muted hover:text-ink'
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <motion.span
                  layoutId="nav-pill"
                  className={`absolute inset-0 -z-10 rounded-full ${overHero ? 'bg-white/12' : 'bg-primary/10'}`}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle onDark={overHero} />
          <a
            href={`tel:+${site.phoneRaw}`}
            className="btn-primary hidden sm:inline-flex"
            aria-label={`Call ${site.phone}`}
          >
            <Icon name="phone" size={16} />
            Let&apos;s talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className={`grid h-10 w-10 place-items-center rounded-full border lg:hidden ${
              overHero ? 'border-white/25 bg-white/10 text-white' : 'border-line bg-surface/70 text-ink'
            }`}
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 h-[1.6px] w-4 bg-current transition-all duration-300 ${
                  open ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-[1.6px] w-4 bg-current transition-all duration-200 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 h-[1.6px] w-4 bg-current transition-all duration-300 ${
                  open ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <div className="shell flex flex-col gap-1 py-5">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-[1.05rem] font-medium ${
                      isActive(item.href) ? 'bg-primary/10 text-primary' : 'text-ink'
                    }`}
                  >
                    {item.label}
                    <Icon name="arrow" size={17} className="opacity-40" />
                  </Link>
                </motion.div>
              ))}
              <a href={`tel:+${site.phoneRaw}`} className="btn-primary mt-3">
                <Icon name="phone" size={16} />
                {site.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

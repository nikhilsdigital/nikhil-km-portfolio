'use client';

import Link from './L';
import { motion } from 'framer-motion';
import { site } from '../data/site';
import Icon from './Icon';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const proof = [
  { k: '60+', v: 'Projects delivered' },
  { k: '98', v: 'Avg. PageSpeed' },
  { k: '6 yrs', v: 'In the field' },
];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden bg-[#070810] pt-[72px]">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/video/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/video/hero.webm" type="video/webm" />
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_28%_35%,rgba(7,8,16,0.35),rgba(7,8,16,0.88)_70%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#070810] via-[#070810]/55 to-[#070810]/70"
        aria-hidden="true"
      />
      <div className="grid-bg absolute inset-0 opacity-[0.35]" aria-hidden="true" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="shell relative z-10 py-20 text-white"
      >
        <motion.p variants={item} className="mal text-[0.95rem] tracking-wide text-[#a9b6ff]">
          From Thrissur — Website Development & Digital Marketing
        </motion.p>

        <motion.h1 variants={item} className="h-display mt-5 max-w-[21ch] font-semibold">
          Websites that <span className="text-[#8b9dff]">load fast</span> and clients that keep
          <span className="text-[#8b9dff]"> coming back</span>.
        </motion.h1>

        <motion.p variants={item} className="mt-7 max-w-[54ch] text-[1.05rem] leading-relaxed text-white/72">
          I&apos;m {site.name} — a freelance web developer and digital marketer in {site.city}. I design
          and code premium websites, then run the SEO, social media and paid promotion that turn them
          into a steady source of enquiries.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
          <Link href="/contact" className="btn-primary">
            Start a project <Icon name="arrow" size={16} />
          </Link>
          <Link
            href="/portfolio"
            className="btn rounded-full border border-white/20 bg-white/5 text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white/40"
          >
            See my work
          </Link>
          <a
            href={`tel:+${site.phoneRaw}`}
            className="btn text-white/70 transition hover:text-white"
          >
            <Icon name="phone" size={16} /> {site.phone}
          </a>
        </motion.div>

        <motion.dl variants={item} className="mt-14 flex flex-wrap gap-x-12 gap-y-6">
          {proof.map((p) => (
            <div key={p.v}>
              <dt className="font-display text-[1.75rem] font-semibold leading-none text-white">{p.k}</dt>
              <dd className="mt-1.5 text-[0.82rem] uppercase tracking-[0.14em] text-white/45">{p.v}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-9 right-8 z-10 hidden flex-col items-center gap-2 md:flex"
        aria-hidden="true"
      >
        <span className="text-[0.7rem] uppercase tracking-[0.3em] text-white/40">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-px bg-gradient-to-b from-white/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}

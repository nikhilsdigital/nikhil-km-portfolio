'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillsMarquee } from '../data/site';
import Icon from './Icon';

export function SectionHeading({ kicker, title, body, align = 'left', className = '' }) {
  return (
    <div
      className={`${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      {kicker && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="kicker"
        >
          <Icon name="sparkle" size={13} className="text-primary" />
          {kicker}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="h1 mt-5 font-semibold"
      >
        {title}
      </motion.h2>
      {body && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className={`mt-5 text-muted ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {body}
        </motion.p>
      )}
    </div>
  );
}

export function Counter({ to, suffix = '', duration = 1600 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export function Marquee() {
  const row = [...skillsMarquee, ...skillsMarquee];
  return (
    <div className="relative flex overflow-hidden border-y border-line bg-surface2/60 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-3 hover:[animation-play-state:paused]">
        {row.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="flex shrink-0 items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2 text-[0.85rem] font-medium text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export function GlowField() {
  return (
    <>
      <div
        className="glow -left-24 top-10 h-[22rem] w-[22rem] animate-float bg-[rgb(var(--glow-1))]/25"
        aria-hidden="true"
      />
      <div
        className="glow -right-24 bottom-0 h-[20rem] w-[20rem] animate-float bg-[rgb(var(--glow-2))]/20 [animation-delay:-4s]"
        aria-hidden="true"
      />
    </>
  );
}

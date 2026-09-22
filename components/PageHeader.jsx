'use client';

import Link from './L';
import { motion } from 'framer-motion';
import Icon from './Icon';
import { GlowField } from './Bits';

export default function PageHeader({ kicker, title, body, malayalam, crumb }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-surface2/50 pb-16 pt-[136px] md:pb-24 md:pt-[168px]">
      <GlowField />
      <div className="grid-bg absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="shell relative z-10">
        <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-2 text-[0.8rem] text-faint">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Icon name="arrow" size={13} />
          <span className="text-muted">{crumb}</span>
        </nav>

        {kicker && (
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="kicker">
            <Icon name="sparkle" size={13} className="text-primary" />
            {kicker}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="h1 mt-6 max-w-[22ch] font-semibold"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="lead mt-6 max-w-[58ch]"
        >
          {body}
        </motion.p>

        {malayalam && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mal mt-4 text-[0.95rem] text-faint"
          >
            {malayalam}
          </motion.p>
        )}
      </div>
    </section>
  );
}

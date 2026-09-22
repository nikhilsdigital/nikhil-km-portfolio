'use client';

import { motion } from 'framer-motion';

const dirs = {
  up: { y: 26, x: 0 },
  down: { y: -26, x: 0 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  none: { x: 0, y: 0 },
};

export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  as = 'div',
  amount = 0.25,
}) {
  const M = motion[as] || motion.div;
  const offset = dirs[direction] || dirs.up;
  return (
    <M
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </M>
  );
}

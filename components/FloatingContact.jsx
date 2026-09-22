'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from '../data/site';
import Icon from './Icon';

export default function FloatingContact() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={`https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(
            'Hi Nikhil, I saw your portfolio and I would like to discuss a project.'
          )}`}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.06 }}
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-brand px-5 py-3.5 text-[0.9rem] font-medium text-white shadow-[0_12px_30px_rgba(67,97,238,0.45)]"
          aria-label="Chat on WhatsApp"
        >
          <Icon name="whatsapp" size={18} />
          <span className="hidden sm:inline">Chat on WhatsApp</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

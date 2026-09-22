'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from '../data/site';
import Icon from './Icon';

const serviceOptions = [
  'Website design & development',
  'SEO / local search',
  'Social media marketing',
  'Paid promotion (Meta / Google)',
  'Everything — full package',
];

const budgetOptions = ['Under ₹15,000', '₹15,000 – ₹30,000', '₹30,000 – ₹60,000', '₹60,000+', 'Monthly retainer'];

const inputClass =
  'w-full min-w-0 max-w-full rounded-2xl border border-line bg-surface px-4 py-3 text-[0.95rem] outline-none transition-colors placeholder:text-faint focus:border-primary';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    business: '',
    phone: '',
    service: serviceOptions[0],
    budget: budgetOptions[1],
    message: '',
  });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (form.name.trim().length < 2) next.name = 'Please enter your name.';
    if (!/^[0-9+\s-]{8,15}$/.test(form.phone.trim())) next.phone = 'Enter a valid phone number.';
    if (form.message.trim().length < 10) next.message = 'A line or two about your project helps.';
    setErrors(next);
    if (Object.keys(next).length) return;

    const text = [
      `Hi Nikhil, I'd like to discuss a project.`,
      ``,
      `Name: ${form.name}`,
      form.business ? `Business: ${form.business}` : null,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Budget: ${form.budget}`,
      ``,
      `Details: ${form.message}`,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(`https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    setSent(true);
  };

  return (
    <div className="card relative w-full min-w-0 overflow-hidden p-8 md:p-10">
      <div className="glow -right-16 -top-16 h-52 w-52 bg-[rgb(var(--glow-1))]/20" aria-hidden="true" />
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 py-10 text-center"
          >
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/15 text-primary">
              <Icon name="check" size={26} strokeWidth={2.4} />
            </span>
            <h2 className="h3 mt-6 font-semibold">WhatsApp is open with your details</h2>
            <p className="mx-auto mt-3 max-w-sm text-[0.95rem] text-muted">
              Just press send in the chat window. If it did not open, call {site.phone} directly — I
              usually reply within a few hours.
            </p>
            <button type="button" onClick={() => setSent(false)} className="btn-ghost mt-7">
              Edit my enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={submit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 grid min-w-0 gap-5"
            noValidate
          >
            <div className="grid min-w-0 gap-5 sm:grid-cols-2">
              <label className="block min-w-0">
                <span className="meta mb-2 block">Your name *</span>
                <input
                  className={inputClass}
                  value={form.name}
                  onChange={set('name')}
                  placeholder="Anjali Menon"
                  autoComplete="name"
                />
                {errors.name && <span className="mt-1.5 block text-[0.8rem] text-primary">{errors.name}</span>}
              </label>
              <label className="block min-w-0">
                <span className="meta mb-2 block">Business name</span>
                <input
                  className={inputClass}
                  value={form.business}
                  onChange={set('business')}
                  placeholder="Optional"
                  autoComplete="organization"
                />
              </label>
            </div>

            <label className="block min-w-0">
              <span className="meta mb-2 block">Phone / WhatsApp *</span>
              <input
                className={inputClass}
                value={form.phone}
                onChange={set('phone')}
                placeholder="+91 98XXXXXXXX"
                inputMode="tel"
                autoComplete="tel"
              />
              {errors.phone && <span className="mt-1.5 block text-[0.8rem] text-primary">{errors.phone}</span>}
            </label>

            <div className="grid min-w-0 gap-5 sm:grid-cols-2">
              <label className="block min-w-0">
                <span className="meta mb-2 block">What do you need?</span>
                <select className={inputClass} value={form.service} onChange={set('service')}>
                  {serviceOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </label>
              <label className="block min-w-0">
                <span className="meta mb-2 block">Budget range</span>
                <select className={inputClass} value={form.budget} onChange={set('budget')}>
                  {budgetOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block min-w-0">
              <span className="meta mb-2 block">Tell me about the project *</span>
              <textarea
                className={`${inputClass} min-h-[130px] resize-y`}
                value={form.message}
                onChange={set('message')}
                placeholder="What your business does, what you want to achieve, and any deadline."
              />
              {errors.message && (
                <span className="mt-1.5 block text-[0.8rem] text-primary">{errors.message}</span>
              )}
            </label>

            <button type="submit" className="btn-primary mt-1 w-full sm:w-auto">
              <Icon name="whatsapp" size={17} /> Send via WhatsApp
            </button>
            <p className="text-[0.8rem] text-faint">
              Your details open in a pre-filled WhatsApp chat — nothing is stored on this site.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

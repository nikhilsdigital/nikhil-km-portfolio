export const site = {
  name: 'NIKHIL K M',
  role: 'Web Developer & Digital Marketing Freelancer',
  city: 'Thrissur, Kerala',
  phone: '+91 9446446648',
  phoneRaw: '919446446648',
  email: 'nikhils.digital.business@gmail.com',
  tagline: 'Websites that load fast, rank high and actually bring in customers.',
  url: 'https://nikhilkm.example.com',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export const stats = [
  { value: 60, suffix: '+', label: 'Projects delivered' },
  { value: 38, suffix: '+', label: 'Happy clients' },
  { value: 6, suffix: ' yrs', label: 'Hands-on experience' },
  { value: 98, suffix: '', label: 'Avg. PageSpeed score' },
];

export const services = [
  {
    slug: 'web-development',
    title: 'Website Design & Development',
    short: 'Fast, premium Next.js and WordPress websites built to convert.',
    body: 'Custom design, no bloated templates. Every build ships with clean semantic markup, Core Web Vitals tuning, on-page SEO structure and a CMS or edit flow you can actually use.',
    points: [
      'Next.js / React and WordPress builds',
      'Business, e-commerce and landing pages',
      'Mobile-first responsive layouts',
      'Speed-optimised (90+ PageSpeed target)',
    ],
    icon: 'code',
  },
  {
    slug: 'seo',
    title: 'SEO & Local Search',
    short: 'Rank for the searches your Thrissur customers are actually typing.',
    body: 'Technical audit, keyword mapping, on-page fixes, schema markup, Google Business Profile optimisation and monthly reporting — built for local intent, not vanity keywords.',
    points: [
      'Technical + on-page SEO audit',
      'Keyword research & content mapping',
      'Google Business Profile & local citations',
      'Rank, traffic and lead reporting',
    ],
    icon: 'search',
  },
  {
    slug: 'social-media',
    title: 'Social Media Marketing',
    short: 'Content calendars and creatives that keep your brand visible.',
    body: 'Instagram, Facebook and YouTube handled end to end — strategy, design, reels, captions in Malayalam or English, scheduling and community replies.',
    points: [
      'Monthly content calendar',
      'Reels, posters and story creatives',
      'Malayalam + English copywriting',
      'Page growth & engagement reports',
    ],
    icon: 'share',
  },
  {
    slug: 'paid-ads',
    title: 'Paid Promotion (Meta & Google Ads)',
    short: 'Ad spend that returns leads, not just impressions.',
    body: 'Campaign structure, audience research, creative testing, pixel and conversion tracking, plus weekly optimisation so the cost per lead keeps falling.',
    points: [
      'Meta (Instagram/Facebook) lead campaigns',
      'Google Search & Performance Max',
      'Pixel, GA4 and conversion tracking',
      'Weekly optimisation + CPL reporting',
    ],
    icon: 'target',
  },
  {
    slug: 'branding',
    title: 'Branding & Creative',
    short: 'Logo, colour, type and templates that look expensive.',
    body: 'A tight visual identity kit so every poster, ad and page looks like it came from the same brand — not five different freelancers.',
    points: ['Logo & identity design', 'Brand guideline sheet', 'Social templates', 'Print & packaging basics'],
    icon: 'brush',
  },
  {
    slug: 'maintenance',
    title: 'Care, Hosting & Analytics',
    short: 'Someone to call when something breaks. Same-day.',
    body: 'Hosting setup, SSL, backups, plugin and core updates, uptime monitoring and a monthly dashboard of what actually moved.',
    points: ['Hosting & domain setup', 'Weekly backups + security', 'Uptime monitoring', 'GA4 / Search Console dashboards'],
    icon: 'shield',
  },
];

export const projects = [
  {
    slug: 'jewellery-ecommerce',
    title: 'Aureya Jewels',
    category: 'E-commerce Website',
    year: '2025',
    image: '/work/work-jewellery.webp',
    summary: 'A minimal jewellery store with fast catalogue browsing, WhatsApp enquiry flow and Instagram shop sync.',
    scope: ['Next.js storefront', 'Product photography direction', 'On-page SEO', 'Meta catalogue ads'],
    results: [
      { k: '3.1x', v: 'online enquiries' },
      { k: '0.9s', v: 'LCP on mobile' },
      { k: '#2', v: 'for "jewellery Thrissur"' },
    ],
  },
  {
    slug: 'restaurant-brand',
    title: 'Kaliyal Kitchen',
    category: 'Restaurant Website + Social',
    year: '2025',
    image: '/work/work-restaurant.webp',
    summary: 'A moody dining site with live menu updates, table booking and a Malayalam-first reels calendar.',
    scope: ['Website design & build', 'Menu CMS', 'Reels content calendar', 'Google Business Profile'],
    results: [
      { k: '+142%', v: 'direction requests' },
      { k: '24k', v: 'monthly reel views' },
      { k: '4.7★', v: 'Google rating' },
    ],
  },
  {
    slug: 'textile-social',
    title: 'Vasthra Textiles',
    category: 'Social Media Marketing',
    year: '2024',
    image: '/work/work-social.webp',
    summary: 'Festive-season social system: 60 creatives, 18 reels and a paid retargeting layer around Onam and wedding season.',
    scope: ['Content strategy', 'Creative design', 'Reel editing', 'Retargeting ads'],
    results: [
      { k: '+38k', v: 'followers gained' },
      { k: '₹19', v: 'cost per lead' },
      { k: '6.2x', v: 'return on ad spend' },
    ],
  },
  {
    slug: 'ayurveda-clinic',
    title: 'Sanjeevani Ayurveda',
    category: 'Website + Local SEO',
    year: '2024',
    image: '/work/work-ayurveda.webp',
    summary: 'Calm, trust-first clinic site with treatment pages, doctor profiles and appointment enquiries built for local search.',
    scope: ['Website build', 'Local SEO', 'Schema markup', 'Review generation'],
    results: [
      { k: '#1', v: 'for 14 local keywords' },
      { k: '+210%', v: 'organic sessions' },
      { k: '56', v: 'enquiries / month' },
    ],
  },
  {
    slug: 'builders-leadgen',
    title: 'Meridian Builders',
    category: 'Paid Promotion',
    year: '2025',
    image: '/work/work-realestate.webp',
    summary: 'Villa project launch campaign — landing page, lead scoring and a Meta plus Google Search funnel for site visits.',
    scope: ['Landing page', 'Meta + Google Ads', 'CRM lead routing', 'Call tracking'],
    results: [
      { k: '312', v: 'qualified leads' },
      { k: '₹128', v: 'cost per lead' },
      { k: '11', v: 'bookings closed' },
    ],
  },
  {
    slug: 'fitness-growth',
    title: 'Ironhouse Fitness',
    category: 'Growth Retainer',
    year: '2024',
    image: '/work/work-ads.webp',
    summary: 'A full growth stack for a two-branch gym: website, SEO, membership funnel and always-on local ads.',
    scope: ['Website revamp', 'SEO', 'Meta ads', 'Monthly analytics'],
    results: [
      { k: '+186', v: 'new memberships' },
      { k: '4.3x', v: 'return on ad spend' },
      { k: '92%', v: 'renewal rate' },
    ],
  },
];

export const plans = [
  {
    name: 'Starter',
    for: 'New businesses that need a serious online presence.',
    oneTime: '₹14,999',
    monthly: '₹6,999',
    highlight: false,
    features: [
      'Up to 5-page responsive website',
      'Premium custom design (no templates)',
      'Mobile + speed optimised (90+ score)',
      'Basic on-page SEO setup',
      'WhatsApp & enquiry form integration',
      'Google Business Profile setup',
      '1 month free support',
    ],
    excluded: ['Paid ad management', 'Monthly content calendar'],
  },
  {
    name: 'Growth',
    for: 'Businesses ready to be found and followed every month.',
    oneTime: '₹29,999',
    monthly: '₹14,999',
    highlight: true,
    badge: 'Most chosen',
    features: [
      'Up to 10-page website or e-commerce',
      'Full technical + on-page SEO',
      'Local SEO for Thrissur & nearby towns',
      '12 social creatives + 4 reels / month',
      'Blog / landing page setup',
      'GA4 + Search Console dashboards',
      'Monthly performance report',
      '3 months priority support',
    ],
    excluded: ['Ad budget (paid separately)'],
  },
  {
    name: 'Elite',
    for: 'Brands that want one partner running everything.',
    oneTime: '₹54,999',
    monthly: '₹24,999',
    highlight: false,
    features: [
      'Unlimited-page custom Next.js build',
      'Advanced SEO + content strategy',
      '20 creatives + 8 reels / month',
      'Meta & Google Ads management',
      'Conversion tracking + CRO testing',
      'Branding kit & templates',
      'Hosting, backups & monitoring',
      'Dedicated WhatsApp line, same-day replies',
    ],
    excluded: [],
  },
];

export const process = [
  {
    step: '01',
    title: 'Discovery call',
    body: 'A 30-minute call in Malayalam or English. We map your customer, your competitors and what a lead is worth to you.',
  },
  {
    step: '02',
    title: 'Strategy & wireframe',
    body: 'Sitemap, keyword map and a clickable layout plan before a single pixel is designed. You approve the direction.',
  },
  {
    step: '03',
    title: 'Design & build',
    body: 'Premium UI design, then a hand-coded fast build. You see staging links at every milestone, not at the end.',
  },
  {
    step: '04',
    title: 'Launch & promote',
    body: 'Go live with analytics, schema and tracking wired in — then SEO, social and paid layers switch on.',
  },
  {
    step: '05',
    title: 'Measure & scale',
    body: 'Monthly reports on rankings, leads and cost per lead. We cut what fails and double what works.',
  },
];

export const testimonials = [
  {
    quote:
      'Our old site took eight seconds to open. Nikhil rebuilt it in three weeks and enquiries tripled. He explains everything in plain Malayalam.',
    author: 'Renjith P.',
    role: 'Owner, Aureya Jewels — Thrissur',
  },
  {
    quote:
      'The reels calendar changed our weekends. We now get table bookings from Instagram every single day, and Google Maps traffic doubled.',
    author: 'Shalini Menon',
    role: 'Partner, Kaliyal Kitchen',
  },
  {
    quote:
      'We had spent a lot on ads with no tracking. He fixed the funnel first, then scaled. Cost per lead dropped from ₹640 to ₹128.',
    author: 'Anoop Krishnan',
    role: 'Director, Meridian Builders',
  },
  {
    quote:
      'Responsive, honest about timelines, and no jargon. Our clinic now ranks first for most treatment searches in Thrissur.',
    author: 'Dr. Lakshmi R.',
    role: 'Sanjeevani Ayurveda',
  },
];

export const faqs = [
  {
    q: 'How long does a website take?',
    a: 'A Starter site is usually live in 7–10 working days. Growth projects take 2–4 weeks, and Elite builds with e-commerce or custom features take 4–6 weeks. You get a written timeline before we start.',
  },
  {
    q: 'Do you work with clients outside Thrissur?',
    a: 'Yes. Thrissur and Kerala are my main base, and I work with clients across India and the Gulf remotely. Meetings happen on WhatsApp, Zoom or Google Meet — in Malayalam or English.',
  },
  {
    q: 'Is the ad budget included in the price?',
    a: 'No. Plan prices cover strategy, creatives, setup and management. Google and Meta ad spend is paid directly to the platform from your card, so you keep full control and visibility.',
  },
  {
    q: 'What do you need from me to start?',
    a: 'Your logo (or I design one), business details, photos if you have them, and access to your domain and social accounts. If anything is missing, I arrange it — including content writing and photography direction.',
  },
  {
    q: 'Who owns the website and accounts?',
    a: 'You do. Domain, hosting, ad accounts, analytics and source code are registered in your name and handed over with documentation at the end of the project.',
  },
  {
    q: 'Do you offer payment in instalments?',
    a: 'Yes — typically 50% to start, 50% at launch. Monthly retainers are billed at the start of each month and can be paused with two weeks notice.',
  },
];

export const skillsMarquee = [
  'Next.js',
  'React',
  'WordPress',
  'Shopify',
  'Technical SEO',
  'Local SEO',
  'Google Ads',
  'Meta Ads',
  'GA4',
  'Search Console',
  'Figma',
  'Tailwind CSS',
  'Reels Editing',
  'Copywriting',
  'Schema Markup',
  'CRO',
];

export const industries = [
  'Jewellery',
  'Restaurants & cafés',
  'Textiles & fashion',
  'Clinics & ayurveda',
  'Builders & real estate',
  'Gyms & fitness',
  'Schools & tuition',
  'Tours & homestays',
];

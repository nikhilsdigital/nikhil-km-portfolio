import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import { site } from '../data/site';

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'NIKHIL K M — Web Developer & Digital Marketing Freelancer in Thrissur',
    template: '%s | NIKHIL K M',
  },
  description:
    'Freelance web developer and digital marketer in Thrissur, Kerala. Premium Next.js websites, SEO, social media marketing and paid promotion that bring real leads.',
  keywords: [
    'web developer Thrissur',
    'freelance website designer Kerala',
    'SEO services Thrissur',
    'social media marketing Kerala',
    'Google Ads freelancer Thrissur',
    'Nikhil K M',
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: 'NIKHIL K M — Websites, SEO & Digital Marketing in Thrissur',
    description:
      'Premium, fast-loading websites plus SEO, social media and paid promotion for businesses in Thrissur and across Kerala.',
    type: 'website',
    locale: 'en_IN',
    images: ['/video/hero-poster.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NIKHIL K M — Websites, SEO & Digital Marketing in Thrissur',
    description: 'Fast websites, honest SEO and paid campaigns that pay for themselves.',
    images: ['/video/hero-poster.jpg'],
  },
};

const themeScript = `(function(){try{var m=document.cookie.match(/(?:^|; )nkm-theme=([^;]+)/);var s=m?decodeURIComponent(m[1]):null;var light=window.matchMedia('(prefers-color-scheme: light)').matches;document.documentElement.setAttribute('data-theme', s || (light?'light':'dark'));}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'NIKHIL K M — Web & Digital Marketing',
  description:
    'Freelance web development, SEO, social media marketing and paid promotion services based in Thrissur, Kerala.',
  areaServed: ['Thrissur', 'Kerala', 'India'],
  telephone: '+919446446648',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Thrissur',
    addressRegion: 'Kerala',
    addressCountry: 'IN',
  },
  founder: { '@type': 'Person', name: 'Nikhil K M', jobTitle: 'Web Developer & Digital Marketer' },
  priceRange: '₹₹',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@600,500,700&f[]=satoshi@400,500,700&display=swap"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Malayalam:wght@400;500&display=swap"
        />
        <meta name="theme-color" content="#4361ee" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}

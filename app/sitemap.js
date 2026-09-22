export const dynamic = 'force-static';

import { site } from '../data/site';

export default function sitemap() {
  const routes = ['', '/about', '/services', '/portfolio', '/pricing', '/contact'];
  const now = new Date();
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: r === '' ? 1 : 0.8,
  }));
}

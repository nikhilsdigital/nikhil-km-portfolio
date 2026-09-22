// Prefix-agnostic link. The export is flat (every page is a top-level .html),
// so plain relative hrefs work no matter which path the site is hosted under.
export function rel(href) {
  if (typeof href !== 'string' || !href.startsWith('/')) return href;
  if (href === '/') return 'index.html';
  if (href.startsWith('/#')) return href.slice(1);
  const clean = href.replace(/^\/+/, '').replace(/\/+$/, '');
  return `${clean}.html`;
}

export default function L({ href, children, ...rest }) {
  return (
    <a href={rel(href)} {...rest}>
      {children}
    </a>
  );
}

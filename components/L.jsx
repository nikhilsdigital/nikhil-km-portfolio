import Link from 'next/link';

export function rel(href) {
  return href;
}

export default function L({ href, children, ...rest }) {
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
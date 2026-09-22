import Link from '../components/L';
import Icon from '../components/Icon';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="grid min-h-[80svh] place-items-center px-5 pt-[72px]">
      <div className="text-center">
        <p className="font-display text-[5rem] font-semibold leading-none text-primary">404</p>
        <h1 className="h1 mt-4 font-semibold">This page moved or never existed</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Let&apos;s get you back to something useful — the work, the plans, or a direct conversation.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            Back home <Icon name="arrow" size={16} />
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
}

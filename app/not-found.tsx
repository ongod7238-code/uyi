import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SiteShell } from '@/components/site-shell';

export default function NotFound() {
  return (
    <SiteShell>
      <main className="grid min-h-[70vh] place-items-center bg-[var(--sand)] px-5 py-32 sm:px-8 md:px-10 lg:px-14">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-[var(--red)]">404 / Page not found</p>
          <h1 className="mt-8 font-editorial text-6xl leading-[.95] sm:text-7xl md:text-9xl">Lost the thread.</h1>
          <p className="mx-auto mt-8 max-w-md text-base leading-7 text-[var(--muted)]">
            The page you are looking for may have moved, been renamed, or no longer exists. Let's get you back to the work.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link href="/" className="inline-flex items-center gap-3 bg-[var(--red)] px-6 py-4 text-[10px] font-bold uppercase tracking-[.14em] text-white transition-colors hover:bg-[var(--red-deep)]">
              Return home <ArrowUpRight size={14} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-3 border-b border-[var(--ink)] pb-2 text-[11px] font-bold uppercase tracking-[.14em] text-[var(--ink)] transition-colors hover:border-[var(--red)] hover:text-[var(--red)]">
              Contact <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}

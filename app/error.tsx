'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { ArrowUpRight, RotateCcw } from 'lucide-react';
import { SiteShell } from '@/components/site-shell';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <SiteShell>
      <main className="grid min-h-[70vh] place-items-center bg-[var(--sand)] px-5 py-32 sm:px-8 md:px-10 lg:px-14">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-[var(--red)]">Something went wrong</p>
          <h1 className="mt-8 font-editorial text-5xl leading-[.95] sm:text-6xl md:text-8xl">A break in the page.</h1>
          <p className="mx-auto mt-8 max-w-md text-base leading-7 text-[var(--muted)]">
            An unexpected error occurred while loading this page. You can try again, or return to safer ground.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <button onClick={reset} className="inline-flex items-center gap-3 bg-[var(--red)] px-6 py-4 text-[10px] font-bold uppercase tracking-[.14em] text-white transition-colors hover:bg-[var(--red-deep)]">
              Try again <RotateCcw size={14} />
            </button>
            <Link href="/" className="inline-flex items-center gap-3 border-b border-[var(--ink)] pb-2 text-[11px] font-bold uppercase tracking-[.14em] text-[var(--ink)] transition-colors hover:border-[var(--red)] hover:text-[var(--red)]">
              Return home <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}

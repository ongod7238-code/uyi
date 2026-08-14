import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SiteShell, PageIntro } from '@/components/site-shell';
import { LogoRow, PageSection } from '@/components/ui-primitives';

export const metadata = { title: 'Portfolio — Uyi-Osa Degarson', description: 'Selected brand identity, strategy and creative direction work.' };

export default function Portfolio() {
  return (
    <SiteShell>
      <main>
        <PageIntro eyebrow="03 / Portfolio" title="Work with a point of view." description="Selected collaborations in identity, strategy and creative direction — built for organisations with something meaningful to say." />

        <PageSection label="An overview" title="Three ways to explore the work." className="bg-[var(--paper)]">
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            <Link href="/portfolio/client-portfolio" className="group border border-[var(--card-border)] bg-[var(--card)] p-7 transition-all duration-300 hover:border-[var(--red)] hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,.18)]">
              <span className="font-editorial text-2xl text-[var(--red)]">01</span>
              <h3 className="mt-6 font-editorial text-3xl sm:text-4xl">Client Portfolio</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">The organisations and brands I have had the privilege of working with.</p>
              <span className="mt-6 inline-flex items-center gap-2 border-b border-[var(--ink)] pb-1 text-[10px] font-bold uppercase tracking-[.14em] transition-colors group-hover:border-[var(--red)] group-hover:text-[var(--red)]">View clients <ArrowUpRight size={12} /></span>
            </Link>
            <Link href="/portfolio/case-studies" className="group border border-[var(--card-border)] bg-[var(--card)] p-7 transition-all duration-300 hover:border-[var(--red)] hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,.18)]">
              <span className="font-editorial text-2xl text-[var(--red)]">02</span>
              <h3 className="mt-6 font-editorial text-3xl sm:text-4xl">Case Studies</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">Detailed studies tracing the challenge, thinking, and outcome behind each project.</p>
              <span className="mt-6 inline-flex items-center gap-2 border-b border-[var(--ink)] pb-1 text-[10px] font-bold uppercase tracking-[.14em] transition-colors group-hover:border-[var(--red)] group-hover:text-[var(--red)]">Read studies <ArrowUpRight size={12} /></span>
            </Link>
            <Link href="/portfolio/selected-projects" className="group border border-[var(--card-border)] bg-[var(--card)] p-7 transition-all duration-300 hover:border-[var(--red)] hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,.18)]">
              <span className="font-editorial text-2xl text-[var(--red)]">03</span>
              <h3 className="mt-6 font-editorial text-3xl sm:text-4xl">Selected Projects</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">A curated selection of projects across identity, strategy and creative direction.</p>
              <span className="mt-6 inline-flex items-center gap-2 border-b border-[var(--ink)] pb-1 text-[10px] font-bold uppercase tracking-[.14em] transition-colors group-hover:border-[var(--red)] group-hover:text-[var(--red)]">View projects <ArrowUpRight size={12} /></span>
            </Link>
          </div>
        </PageSection>

        <PageSection label="In good company" title="Trusted by teams building what matters." className="bg-[var(--sand)]">
          <div className="mt-12 lg:mt-16">
            <LogoRow names={['MainOne', 'Airtel', 'Insight', 'Peak', 'Peak 456', 'Berger']} />
          </div>
          <div className="mt-10 flex justify-end">
            <Link href="/portfolio/client-portfolio" className="inline-flex items-center gap-3 border-b border-[var(--ink)] pb-2 text-[11px] font-bold uppercase tracking-[.14em] text-[var(--ink)] transition-colors hover:border-[var(--red)] hover:text-[var(--red)]">View all clients <ArrowUpRight size={14} /></Link>
          </div>
        </PageSection>
      </main>
    </SiteShell>
  );
}

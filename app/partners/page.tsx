import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SiteShell, PageIntro, SectionLabel } from '@/components/site-shell';
import { LogoRow, PageSection } from '@/components/ui-primitives';

export const metadata = { title: 'Partners — Uyi-Osa Degarson', description: 'Strategic alliances and corporate partnerships.' };

export default function Partners() {
  return (
    <SiteShell>
      <main>
        <PageIntro eyebrow="04 / Partners" title="Better together." description="The most meaningful work is rarely made alone. These are the relationships, alliances and shared ambitions behind the work." />

        <PageSection label="Two ways to explore" title="Shared values. Shared momentum." className="bg-[var(--paper)]">
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:mt-14">
            <Link href="/partners/strategic-alliances" className="group border border-[var(--card-border)] bg-[var(--card)] p-7 transition-all duration-300 hover:border-[var(--red)] hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,.18)]">
              <span className="eyebrow text-[var(--red)]">01 / Strategic alliance</span>
              <h3 className="mt-5 font-editorial text-4xl sm:text-5xl">Strategic Alliances</h3>
              <p className="mt-5 max-w-md text-sm leading-8 text-[var(--muted)]">A relationship built around shared conviction, creative exchange, and the belief that purposeful work deserves room to grow.</p>
              <span className="mt-6 inline-flex items-center gap-2 border-b border-[var(--ink)] pb-1 text-[10px] font-bold uppercase tracking-[.14em] transition-colors group-hover:border-[var(--red)] group-hover:text-[var(--red)]">Explore <ArrowUpRight size={12} /></span>
            </Link>
            <Link href="/partners/corporate-partners" className="group border border-[var(--card-border)] bg-[var(--card)] p-7 transition-all duration-300 hover:border-[var(--red)] hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,.18)]">
              <span className="eyebrow text-[var(--red)]">02 / Corporate partners</span>
              <h3 className="mt-5 font-editorial text-4xl sm:text-5xl">Corporate Partners</h3>
              <p className="mt-5 max-w-md text-sm leading-8 text-[var(--muted)]">From technology to consumer brands, the best partnerships make strong ideas more useful, more visible, and more enduring.</p>
              <span className="mt-6 inline-flex items-center gap-2 border-b border-[var(--ink)] pb-1 text-[10px] font-bold uppercase tracking-[.14em] transition-colors group-hover:border-[var(--red)] group-hover:text-[var(--red)]">Explore <ArrowUpRight size={12} /></span>
            </Link>
          </div>
          <div className="mt-16 lg:mt-20">
            <LogoRow names={['Kewe Degarson', 'Great Company', 'PubComm', 'Let’s-Eat-And-Drink', 'MainOne', 'Airtel']} />
          </div>
        </PageSection>

        <section className="border-t border-[var(--line)] bg-[var(--sand)] px-5 py-20 sm:px-8 md:px-10 md:py-24 lg:px-14">
          <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <div>
              <SectionLabel number="Make space">For future partners</SectionLabel>
              <h2 className="mt-6 max-w-2xl text-4xl sm:text-5xl md:text-7xl">Bring a good question.</h2>
            </div>
            <div>
              <p className="text-sm leading-8 text-[var(--muted)]">If you are building something with purpose and looking for a thoughtful partner in the room, I would like to hear what you are working on.</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-3 border-b border-[var(--ink)] pb-2 text-[11px] font-bold uppercase tracking-[.14em] text-[var(--ink)] transition-colors hover:border-[var(--red)] hover:text-[var(--red)]">Start a conversation <ArrowUpRight size={14} /></Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

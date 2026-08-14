import Link from 'next/link';
import { ArrowUpRight, type LucideIcon } from 'lucide-react';
import { SiteShell, PageIntro, SectionLabel } from '@/components/site-shell';
import { PageSection } from '@/components/ui-primitives';

type Detail = { label: string; text: string };

export function ProductCategoryPage({
  eyebrow,
  title,
  tagline,
  description,
  icon: Icon,
  details,
  comingSoon = true,
}: {
  eyebrow: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  details: Detail[];
  comingSoon?: boolean;
}) {
  return (
    <SiteShell>
      <main>
        <PageIntro eyebrow={eyebrow} title={title} description={tagline} />

        <PageSection label="Overview" title={title} className="bg-[var(--paper)]">
          <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[.3fr_.7fr] lg:gap-16">
            <div className="flex items-center gap-4">
              <span className="font-editorial text-3xl text-[var(--red)]">02</span>
              <Icon size={28} strokeWidth={1.3} className="text-[var(--red)]" />
            </div>
            <div>
              <p className="max-w-xl text-base leading-8 text-[var(--muted)]">{description}</p>
              <div className="mt-10 space-y-6">
                {details.map((detail) => (
                  <div key={detail.label} className="border-t border-[var(--line)] pt-5">
                    <SectionLabel number="—">{detail.label}</SectionLabel>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)]">{detail.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageSection>

        {comingSoon && (
          <section className="bg-[var(--red)] px-5 py-20 text-white sm:px-8 md:px-10 md:py-24 lg:px-14">
            <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end">
              <div>
                <SectionLabel number="Coming soon">The first release</SectionLabel>
                <p className="mt-6 font-editorial text-4xl sm:text-5xl md:text-7xl">Built to last.</p>
                <p className="mt-6 max-w-md text-sm leading-8 text-white/70">The first {title.toLowerCase()} will appear here. To be the first to know, follow along on social media or reach me directly on WhatsApp.</p>
              </div>
              <div className="border border-white/25 p-7">
                <Icon size={26} strokeWidth={1.2} />
                <p className="mt-10 text-[10px] font-bold uppercase tracking-[.15em] text-white/60">The collection is taking shape</p>
                <p className="mt-3 font-editorial text-3xl">Stay close to the work.</p>
              </div>
            </div>
          </section>
        )}

        <PageSection label="Direct access" title="Looking for something specific?" className="bg-[var(--sand)]">
          <div className="mt-8 flex flex-col gap-8 lg:mt-10 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-lg text-sm leading-8 text-[var(--muted)]">For speaking, mentorship, discipleship, or collaboration enquiries, begin a conversation and let&apos;s find the right next step.</p>
            <Link href="/contact" className="inline-flex w-fit items-center gap-3 border-b border-[var(--ink)] pb-2 text-[11px] font-bold uppercase tracking-[.14em] text-[var(--ink)] transition-colors hover:border-[var(--red)] hover:text-[var(--red)]">Make an enquiry <ArrowUpRight size={14} /></Link>
          </div>
        </PageSection>
      </main>
    </SiteShell>
  );
}

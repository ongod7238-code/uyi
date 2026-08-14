import { SiteShell, PageIntro, SectionLabel } from '@/components/site-shell';
import { EditorialLink, PageSection } from '@/components/ui-primitives';

export const metadata = { title: 'Strategic Alliances — Uyi-Osa Degarson', description: 'Relationships built around shared conviction, creative exchange, and purposeful work.' };

export default function StrategicAlliancesPage() {
  return (
    <SiteShell>
      <main>
        <PageIntro eyebrow="04 / Partners / Strategic Alliances" title="Shared values. Shared momentum." description="The relationships that make the work richer, wider, and more enduring." />

        <PageSection label="Strategic alliances" title="Built on conviction." className="bg-[var(--paper)]">
          <div className="mt-12 max-w-2xl space-y-6 text-sm leading-8 text-[var(--muted)] lg:mt-16">
            <p>The most meaningful work is rarely made alone. Strategic alliances are the relationships that bring shared conviction, complementary strengths, and a common ambition to the table — making the work richer, wider, and more enduring than it could be alone.</p>
            <p>These are partnerships built on trust and mutual purpose, where each party brings something the other needs, and the result is greater than the sum of its parts.</p>
          </div>
        </PageSection>

        <PageSection label="Featured alliance" title="Kewe Degarson" className="bg-[var(--sand)]">
          <div className="mt-12 border border-[var(--card-border)] bg-[var(--card)] p-8 lg:mt-16">
            <span className="eyebrow text-[var(--red)]">01 / Strategic alliance</span>
            <h3 className="mt-5 font-editorial text-4xl sm:text-5xl md:text-6xl">Kewe Degarson</h3>
            <p className="mt-6 max-w-xl text-sm leading-8 text-[var(--muted)]">A relationship built around shared conviction, creative exchange, and the belief that purposeful work deserves room to grow. Together, the focus is on building platforms, projects, and opportunities that reflect a shared commitment to excellence and intention.</p>
          </div>
          <div className="mt-12">
            <EditorialLink href="/contact">Explore a partnership</EditorialLink>
          </div>
        </PageSection>
      </main>
    </SiteShell>
  );
}

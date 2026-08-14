import { SiteShell, PageIntro, SectionLabel } from '@/components/site-shell';
import { LogoRow, PageSection } from '@/components/ui-primitives';
import { EditorialLink } from '@/components/ui-primitives';

export const metadata = { title: 'Client Portfolio — Uyi-Osa Degarson', description: 'The organisations and brands I have had the privilege of working with.' };

export default function ClientPortfolioPage() {
  return (
    <SiteShell>
      <main>
        <PageIntro eyebrow="03 / Portfolio / Client Portfolio" title="In good company." description="The organisations and brands I have had the privilege of working with over the years." />

        <PageSection label="Client portfolio" title="Trusted by teams building what matters." className="bg-[var(--paper)]">
          <div className="mt-12 lg:mt-16">
            <LogoRow names={['MainOne', 'Airtel', 'Insight', 'Peak', 'Peak 456', 'Berger']} />
          </div>
          <div className="mt-12 max-w-2xl space-y-6 text-sm leading-8 text-[var(--muted)]">
            <p>From telecommunications to consumer brands, creative agencies to the built environment, the throughline in every collaboration has been the same: helping organisations express what they stand for with clarity, confidence, and craft.</p>
            <p>Each relationship represents a shared commitment to work that matters — work built to endure beyond a campaign, a quarter, or a season.</p>
          </div>
          <div className="mt-12">
            <EditorialLink href="/portfolio/case-studies">Read the case studies</EditorialLink>
          </div>
        </PageSection>
      </main>
    </SiteShell>
  );
}

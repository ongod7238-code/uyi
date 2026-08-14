import { SiteShell, PageIntro } from '@/components/site-shell';
import { LogoRow, PageSection } from '@/components/ui-primitives';
import { EditorialLink } from '@/components/ui-primitives';

export const metadata = { title: 'Corporate Partners — Uyi-Osa Degarson', description: 'Corporate partnerships that make strong ideas more useful, visible, and enduring.' };

export default function CorporatePartnersPage() {
  return (
    <SiteShell>
      <main>
        <PageIntro eyebrow="04 / Partners / Corporate Partners" title="Built for impact." description="From technology to consumer brands, the best partnerships make strong ideas more useful, more visible, and more enduring." />

        <PageSection label="Corporate partners" title="Trusted by teams building what matters." className="bg-[var(--paper)]">
          <div className="mt-12 lg:mt-16">
            <LogoRow names={['Kewe Degarson', 'Great Company', 'PubComm', 'Let’s-Eat-And-Drink', 'MainOne', 'Airtel']} />
          </div>
          <div className="mt-12 max-w-2xl space-y-6 text-sm leading-8 text-[var(--muted)]">
            <p>Corporate partnerships are where strategy meets scale. From technology to consumer brands, these collaborations share a common goal: making strong ideas more useful, more visible, and more enduring.</p>
            <p>Each partnership is an opportunity to bring clarity, craft, and conviction to organisations operating at scale — helping them communicate what they stand for with precision and purpose.</p>
          </div>
          <div className="mt-12">
            <EditorialLink href="/contact">Bring me into the room</EditorialLink>
          </div>
        </PageSection>
      </main>
    </SiteShell>
  );
}

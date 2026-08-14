import { SiteShell, PageIntro, SectionLabel } from '@/components/site-shell';
import { EditorialLink, NumberedCard, PageSection } from '@/components/ui-primitives';

export const metadata = { title: 'Business Consulting — Uyi-Osa Degarson', description: 'Building identities and strategies that stand for something.' };

export default function ConsultingPage() {
  return (
    <SiteShell>
      <main>
        <PageIntro eyebrow="01 / Profile / Business Consulting" title="Building identities that stand for something." description="Strategy, brand identity, and creative direction for organisations with an ambition to matter." />

        <PageSection label="The practice" title="Where conviction meets craft." className="bg-[var(--paper)]">
          <div className="mt-12 max-w-2xl space-y-6 text-sm leading-8 text-[var(--muted)] lg:mt-16">
            <p>Great brands are not built on aesthetics alone. They are built on clarity — a deep understanding of who you are, who you serve, and why it matters. My consulting practice exists to help organisations find that clarity and turn it into work that endures.</p>
            <p>Whether you are shaping a new identity, refining an existing one, or building a strategy for what comes next, the goal is always the same: to make the right things visible.</p>
          </div>
          <div className="mt-14">
            <EditorialLink href="/contact">Bring me into the room</EditorialLink>
          </div>
        </PageSection>

        <PageSection label="What I do" title="Six ways I help." className="bg-[var(--sand)]">
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            <NumberedCard number="01" title="TRAIT Designs" text="A creative practice shaping distinct brand identities for organisations with an ambition to matter." />
            <NumberedCard number="02" title="Brand identity" text="Clear, considered systems that make a business recognisable, trusted, and ready for its next chapter." />
            <NumberedCard number="03" title="Business strategy" text="Finding the throughline between an organisation's purpose, audience, offer, and opportunity." />
            <NumberedCard number="04" title="Creative direction" text="Turning an idea into an experience with a singular voice across every meaningful touchpoint." />
            <NumberedCard number="05" title="Leadership consulting" text="Helping leaders think clearly, communicate courageously, and build cultures that endure." />
            <NumberedCard number="06" title="Speaking & mentorship" text="Conversations and guidance for people building a life, team, or business on purpose." />
          </div>
        </PageSection>
      </main>
    </SiteShell>
  );
}

import { SiteShell, PageIntro, SectionLabel } from '@/components/site-shell';
import { NumberedCard, PageSection, Quote } from '@/components/ui-primitives';
import { EditorialLink } from '@/components/ui-primitives';

export const metadata = { title: 'Ministry — Uyi-Osa Degarson', description: 'Raising believers, equipping leaders, and transforming generations through the knowledge of Christ.' };

export default function MinistryPage() {
  return (
    <SiteShell>
      <main>
        <PageIntro eyebrow="01 / Profile / Ministry" title="Raising believers. Equipping leaders." description="Transforming generations through the knowledge of Jesus Christ." />

        <PageSection label="Vision & Mission" title="A clear calling." className="bg-[var(--paper)]">
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow text-[var(--red)]">Vision</p>
              <p className="mt-4 max-w-lg font-editorial text-2xl leading-tight sm:text-3xl">To see nations, families, and generations transformed through the knowledge of Jesus Christ.</p>
            </div>
            <div>
              <p className="eyebrow text-[var(--red)]">Mission</p>
              <p className="mt-4 max-w-lg text-sm leading-8 text-[var(--muted)]">To disciple nations, families, and the next generation by leveraging social media and every available platform to teach Christ and His finished work, cultivate a lifestyle of faith, and advance the oneness agenda of the Body of Christ.</p>
            </div>
          </div>
        </PageSection>

        <section className="bg-[var(--ink)] px-5 py-20 text-white sm:px-8 md:px-10 md:py-28 lg:px-14">
          <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
            <SectionLabel number="02">Statement of faith</SectionLabel>
            <div className="max-w-3xl">
              <Quote author="A shared confession">We believe in one God, eternally existing as Father, Son, and Holy Spirit. We believe that salvation is by grace alone through faith in Jesus Christ, and that every believer is called to grow in Christlikeness through discipleship and absolute obedience to God's Word.</Quote>
              <p className="mt-12 text-sm leading-8 text-white/60">We believe in the Great Commission and are committed to making disciples of all nations until Christ returns.</p>
            </div>
          </div>
        </section>

        <PageSection label="Core values" title="What we are built on." className="bg-[var(--sand)]">
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            <NumberedCard number="01" title="Christ-centred" text="Jesus Christ is the foundation, focus, and final authority of everything we teach and do." />
            <NumberedCard number="02" title="Faith" text="We equip believers to trust God's Word, walk in His promises, and demonstrate Kingdom realities." />
            <NumberedCard number="03" title="Applicable doctrine" text="We are devoted to rightly dividing the Word of God, teaching Scripture with integrity and simplicity." />
            <NumberedCard number="04" title="Discipleship" text="Our calling is not merely to gather audiences but to raise mature disciples who know Christ." />
          </div>
        </PageSection>

        <PageSection label="The framework" title="A path from knowing Christ to serving others." className="bg-[var(--paper)]">
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5">
            <NumberedCard number="01" title="Know Christ" text="Establishing believers in the Gospel and their identity in Christ." />
            <NumberedCard number="02" title="Grow faith" text="Developing biblical convictions, spiritual disciplines, and a lifestyle of faith." />
            <NumberedCard number="03" title="Obey God" text="Applying Kingdom principles to everyday life, family, work, leadership, and culture." />
            <NumberedCard number="04" title="Serve others" text="Discovering spiritual gifts and serving the Body of Christ with excellence and love." />
            <NumberedCard number="05" title="Multiply disciples" text="Equipping believers to teach, mentor, lead, and make disciples who make disciples." />
          </div>
          <div className="mt-14">
            <EditorialLink href="/contact">Get in touch</EditorialLink>
          </div>
        </PageSection>
      </main>
    </SiteShell>
  );
}

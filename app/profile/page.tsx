import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SiteShell, PageIntro, SectionLabel } from '@/components/site-shell';
import { EditorialLink, NumberedCard, PageSection, Quote } from '@/components/ui-primitives';

const portrait = '/images/ChatGPT_Image_Aug_6,_2026,_07_34_04_PM.png';

export const metadata = { title: 'Profile — Uyi-Osa Degarson', description: 'The story, ministry and consulting practice of Uyi-Osa Degarson.' };

export default function Profile() {
  return (
    <SiteShell>
      <main>
        <PageIntro eyebrow="01 / Profile" title="The work is personal." description="A life shaped by worship, sharpened by strategy, and offered in service of people and purpose." />

        <section className="grid gap-12 bg-[var(--paper)] px-5 py-20 sm:px-8 md:px-10 md:py-28 lg:grid-cols-[.8fr_1.2fr] lg:px-14">
          <div className="relative min-h-[460px] bg-[#201d1b] sm:min-h-[520px]">
            <Image src={portrait} alt="Uyi-Osa Degarson in a suit" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-contain object-bottom" />
          </div>
          <div className="flex flex-col justify-end lg:pb-5">
            <SectionLabel number="01">About me</SectionLabel>
            <h2 className="mt-6 max-w-2xl text-4xl leading-[.95] sm:text-5xl md:mt-7 md:text-7xl">A heart anchored in Christ. A mind wired for strategy.</h2>
            <div className="mt-8 max-w-xl space-y-5 text-sm leading-8 text-[var(--muted)] sm:mt-10">
              <p>For as long as I can remember, my life has revolved around two great passions: <strong className="text-[var(--ink)]">Jesus Christ and creativity.</strong> Long before I understood branding, strategy, or business systems, I was given to worship.</p>
              <p>My journey has taken me through ministry leadership, conference and crusade coordination, mentoring emerging leaders, and founding S.M.ART Conference — a platform dedicated to equipping entrepreneurs, creatives, and purpose-driven innovators.</p>
              <p>Today, I am stepping fully into a new season where <strong className="text-[var(--ink)]">faith, creativity, and strategy intersect.</strong></p>
            </div>
            <div className="mt-10 flex flex-wrap gap-5">
              <Link href="/profile/about" className="inline-flex items-center gap-2 border-b border-[var(--ink)] pb-2 text-[11px] font-bold uppercase tracking-[.14em] text-[var(--ink)] transition-colors hover:border-[var(--red)] hover:text-[var(--red)]">Read the full story <ArrowUpRight size={14} /></Link>
              <Link href="/profile/ministry" className="inline-flex items-center gap-2 border-b border-[var(--ink)] pb-2 text-[11px] font-bold uppercase tracking-[.14em] text-[var(--ink)] transition-colors hover:border-[var(--red)] hover:text-[var(--red)]">Explore ministry <ArrowUpRight size={14} /></Link>
              <Link href="/profile/consulting" className="inline-flex items-center gap-2 border-b border-[var(--ink)] pb-2 text-[11px] font-bold uppercase tracking-[.14em] text-[var(--ink)] transition-colors hover:border-[var(--red)] hover:text-[var(--red)]">Business consulting <ArrowUpRight size={14} /></Link>
            </div>
          </div>
        </section>

        <PageSection label="02 / Ministry" title="Raising believers. Equipping leaders. Transforming generations." className="bg-[var(--sand)]">
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
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            <NumberedCard number="01" title="Christ-centred" text="Jesus Christ is the foundation, focus, and final authority of everything we teach and do." />
            <NumberedCard number="02" title="Faith" text="We equip believers to trust God's Word, walk in His promises, and demonstrate Kingdom realities." />
            <NumberedCard number="03" title="Applicable doctrine" text="We are devoted to rightly dividing the Word of God, teaching Scripture with integrity and simplicity." />
            <NumberedCard number="04" title="Discipleship" text="Our calling is not merely to gather audiences but to raise mature disciples who know Christ." />
          </div>
        </PageSection>

        <section className="bg-[var(--ink)] px-5 py-20 text-white sm:px-8 md:px-10 md:py-28 lg:px-14">
          <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
            <SectionLabel number="03">Statement of faith</SectionLabel>
            <div className="max-w-3xl">
              <Quote author="A shared confession">We believe in one God, eternally existing as Father, Son, and Holy Spirit. We believe that salvation is by grace alone through faith in Jesus Christ, and that every believer is called to grow in Christlikeness through discipleship and absolute obedience to God’s Word.</Quote>
              <p className="mt-12 text-sm leading-8 text-white/60">We believe in the Great Commission and are committed to making disciples of all nations until Christ returns.</p>
            </div>
          </div>
        </section>

        <PageSection label="04 / The framework" title="A path from knowing Christ to serving others." className="bg-[var(--paper)]">
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5">
            <NumberedCard number="01" title="Know Christ" text="Establishing believers in the Gospel and their identity in Christ." />
            <NumberedCard number="02" title="Grow faith" text="Developing biblical convictions, spiritual disciplines, and a lifestyle of faith." />
            <NumberedCard number="03" title="Obey God" text="Applying Kingdom principles to everyday life, family, work, leadership, and culture." />
            <NumberedCard number="04" title="Serve others" text="Discovering spiritual gifts and serving the Body of Christ with excellence and love." />
            <NumberedCard number="05" title="Multiply disciples" text="Equipping believers to teach, mentor, lead, and make disciples who make disciples." />
          </div>
        </PageSection>

        <section className="border-t border-[var(--line)] bg-[var(--sand)] px-5 py-20 sm:px-8 md:px-10 md:py-28 lg:px-14">
          <div className="mx-auto max-w-[1600px]">
            <SectionLabel number="05">Business consulting</SectionLabel>
            <div className="mt-6 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <h2 className="max-w-3xl text-4xl leading-[.95] sm:text-5xl md:text-7xl">Building identities that stand for something.</h2>
              <EditorialLink href="/contact">Bring me into the room</EditorialLink>
            </div>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
              <NumberedCard number="01" title="TRAIT Designs" text="A creative practice shaping distinct brand identities for organisations with an ambition to matter." />
              <NumberedCard number="02" title="Brand identity" text="Clear, considered systems that make a business recognisable, trusted, and ready for its next chapter." />
              <NumberedCard number="03" title="Business strategy" text="Finding the throughline between an organisation's purpose, audience, offer, and opportunity." />
              <NumberedCard number="04" title="Creative direction" text="Turning an idea into an experience with a singular voice across every meaningful touchpoint." />
              <NumberedCard number="05" title="Leadership consulting" text="Helping leaders think clearly, communicate courageously, and build cultures that endure." />
              <NumberedCard number="06" title="Speaking & mentorship" text="Conversations and guidance for people building a life, team, or business on purpose." />
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

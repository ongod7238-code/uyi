import Image from 'next/image';
import { SiteShell, PageIntro, SectionLabel } from '@/components/site-shell';
import { EditorialLink, PageSection } from '@/components/ui-primitives';

const portrait = '/images/ChatGPT_Image_Aug_6,_2026,_07_34_04_PM.png';

export const metadata = { title: 'About Me — Uyi-Osa Degarson', description: 'The story behind a life shaped by worship and sharpened by strategy.' };

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        <PageIntro eyebrow="01 / Profile / About Me" title="A heart anchored in Christ." description="A mind wired for strategy. A life offered in service of people and purpose." />

        <section className="bg-[var(--paper)] px-5 py-20 sm:px-8 md:px-10 md:py-28 lg:px-14">
          <div className="mx-auto flex max-w-[1600px] flex-row gap-4 sm:gap-8 lg:gap-14">
            <div className="relative w-[35%] bg-[#201d1b] sm:w-[38%] lg:w-[33%]">
              <Image src={portrait} alt="Uyi-Osa Degarson in a suit" fill sizes="(max-width: 1024px) 35vw, 33vw" className="object-cover object-[center_15%]" />
            </div>
            <div className="flex w-[65%] flex-col justify-center sm:w-[62%] lg:w-[67%] lg:pb-5">
              <SectionLabel number="01">About me</SectionLabel>
              <h2 className="mt-4 max-w-2xl text-2xl leading-[.96] sm:mt-6 sm:text-4xl md:mt-7 md:text-7xl">A heart anchored in Christ. A mind wired for strategy.</h2>
              <div className="mt-5 max-w-xl space-y-4 text-[.78rem] leading-6 text-[var(--muted)] sm:mt-8 sm:space-y-5 sm:text-sm sm:leading-8 md:mt-10">
                <p>For as long as I can remember, my life has revolved around two great passions: <strong className="text-[var(--ink)]">Jesus Christ and creativity.</strong> Long before I understood branding, strategy, or business systems, I was given to worship.</p>
                <p>My journey has taken me through ministry leadership, conference and crusade coordination, mentoring emerging leaders, and founding S.M.ART Conference — a platform dedicated to equipping entrepreneurs, creatives, and purpose-driven innovators.</p>
                <p>Today, I am stepping fully into a new season where <strong className="text-[var(--ink)]">faith, creativity, and strategy intersect.</strong></p>
              </div>
            </div>
          </div>
        </section>

        <PageSection label="The journey" title="From worship to strategy." className="bg-[var(--sand)]">
          <div className="mt-12 max-w-2xl space-y-6 text-sm leading-8 text-[var(--muted)] lg:mt-16">
            <p>Every chapter of my life has pointed toward the same conviction: that purpose is not discovered by accident, but cultivated with intention. From the early days of leading worship to building brands and mentoring leaders, the throughline has always been clarity — helping people and organisations see what they were made for.</p>
            <p>I believe the most meaningful work happens at the intersection of conviction and craft. Where what you believe shapes how you build, and how you build carries what you believe into the world.</p>
            <p>This is the lens I bring to every assignment — a heart for people, a mind for systems, and an unwavering commitment to work that endures.</p>
          </div>
          <div className="mt-12">
            <EditorialLink href="/contact">Begin a conversation</EditorialLink>
          </div>
        </PageSection>
      </main>
    </SiteShell>
  );
}

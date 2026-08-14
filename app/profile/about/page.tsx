import Image from 'next/image';
import { SiteShell, PageIntro, SectionLabel } from '@/components/site-shell';
import { EditorialLink, PageSection } from '@/components/ui-primitives';

const portrait = '/images/longuyi.png';

export const metadata = {
  title: 'About Me — Uyi-Osa Degarson',
  description:
    'The story behind a life shaped by worship and sharpened by strategy.',
};

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        <PageIntro
          eyebrow="01 / Profile / About Me"
          title="A heart anchored in Christ."
          description="A mind wired for strategy. A life offered in service of people and purpose."
        />

        <section className="bg-[var(--paper)] px-5 py-20 sm:px-8 md:px-10 md:py-28 lg:px-14">
          <div className="mx-auto flex max-w-[1500px] flex-col gap-12 sm:gap-16 lg:flex-row lg:items-start lg:gap-16 xl:gap-24">
            
            <div className="relative h-[520px] w-full bg-transparent sm:h-[650px] lg:h-[760px] lg:w-[42%] xl:h-[820px]">
              <Image
                src={portrait}
                alt="Uyi-Osa Degarson in a suit"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-[center_15%]"
              />
            </div>

            <div className="flex w-full flex-col lg:w-[58%] lg:pt-8">
              <SectionLabel number="01">About me</SectionLabel>

              <h2 className="mt-4 max-w-3xl text-2xl leading-[.96] sm:mt-6 sm:text-4xl md:mt-7 md:text-7xl">
                A heart anchored in Christ. A mind wired for strategy.
              </h2>

              <div className="mt-5 max-w-2xl space-y-4 text-[.78rem] leading-6 text-[var(--muted)] sm:mt-8 sm:space-y-5 sm:text-sm sm:leading-8 md:mt-10">

                <p>
                  For as long as I can remember, my life has revolved around two
                  great passions:{' '}
                  <strong className="text-[var(--ink)]">
                    Jesus Christ and creativity.
                  </strong>{' '}
                  Long before I understood branding, strategy, or business
                  systems, I was given to worship.
                </p>

                <p>
                  My childhood was shaped in church, where singing wasn&apos;t just
                  another activity; it was my first ministry. From our church
                  children&apos;s choir to youth choir, and eventually serving as
                  Assistant Choir Director in my university campus fellowship,
                  music became one of God&apos;s earliest classrooms for teaching me
                  leadership, excellence, discipline, and the power of His
                  presence.
                </p>

                <p>
                  Those years ignited a lifelong love for worship, vocal
                  coaching, mentoring singers, and helping people encounter God
                  through music. Whether leading worship, training vocal teams,
                  or simply lifting my voice in praise, I&apos;ve always believed
                  worship is more than a song; it&apos;s a lifestyle that points
                  hearts back to Jesus.
                </p>

                <p>
                  Today, I&apos;m excited to be stepping fully into a new season
                  where{' '}
                  <strong className="text-[var(--ink)]">
                    faith, creativity, and strategy intersect.
                  </strong>
                </p>

                <p>
                  I&apos;m Uyi-Osa Degarson, a Worship Lead with business acumen as a
                  Brand Identity Design Consultant, Business Strategist,
                  Creative Thinker, Opportunity Broker, Conference Speaker, and
                  Kingdom Builder.
                </p>

                <p>
                  For nearly two decades, I&apos;ve helped startups, SMEs, ministries,
                  and high-net-worth visionary leaders build brands with clarity,
                  strengthen organizational systems, optimize operations, and
                  execute purpose-driven projects and events that create lasting
                  impact.
                </p>

                <p>
                  As a double alumnus of Orange Academy, trained in Integrated
                  Brand Experience (IBX) and Business Strategy, I&apos;m passionate
                  about designing brands that do more than look good; they
                  communicate purpose, inspire trust, and create meaningful
                  experiences.
                </p>

                <p>
                  Beyond logos and visuals, I help organizations discover who
                  they are and express that identity with confidence, excellence,
                  and consistency.
                </p>

                <p>
                  My journey has also taken me through ministry leadership,
                  conference and crusade coordination, mentoring emerging
                  leaders, and founding S.M.ART Conference, a platform dedicated
                  to equipping entrepreneurs, creatives, and purpose-driven
                  innovators with practical wisdom and transformational
                  leadership.
                </p>

                <p>
                  Whether I&apos;m consulting for a business, coaching a worship
                  team, designing a brand identity, or speaking on a conference
                  platform, my mission remains the same: to glorify Jesus Christ
                  by helping people and organizations discover their God-given
                  identity, communicate it with excellence, and maximize their
                  influence.
                </p>

                <p>
                  I bring to every assignment a heart anchored in Christ, a mind
                  wired for strategy, and an unwavering passion for building
                  brands, strengthening ministries, and raising leaders who will
                  make lasting impact.
                </p>

              </div>
            </div>
          </div>
        </section>

        <PageSection
          label="The philosophy"
          title="Faith is the foundation. Strategy is the expression."
          className="bg-[var(--sand)]"
        >
          <div className="mt-12 max-w-3xl space-y-6 text-sm leading-8 text-[var(--muted)] lg:mt-16">

            <p>
              I believe excellence begins with identity. Before a brand can
              communicate with clarity, an organization must understand who it
              is, what it stands for, and the value it is called to create.
            </p>

            <p>
              My work sits at the intersection of faith, creativity, strategy,
              and people. Whether I am shaping a brand identity, strengthening
              an organization, coaching a worship team, or helping bring a
              purpose-driven project to life, I approach every assignment with
              the same commitment: clarity of thought, excellence in execution,
              and meaningful impact.
            </p>

            <p>
              I do not believe creativity exists simply to make things
              beautiful. Creativity should communicate. Strategy should create
              direction. Leadership should multiply impact. And whatever we
              build should carry something meaningful into the world.
            </p>

          </div>

          <div className="mt-12">
            <EditorialLink href="/contact">
              Begin a conversation
            </EditorialLink>
          </div>
        </PageSection>
      </main>
    </SiteShell>
  );
}
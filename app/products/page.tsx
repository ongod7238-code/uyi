import Link from 'next/link';
import { ArrowUpRight, Headphones, Mic2, Music2, Play, Video, BookOpen, Users, Compass } from 'lucide-react';
import { SiteShell, PageIntro, SectionLabel } from '@/components/site-shell';
import { PageSection } from '@/components/ui-primitives';

export const metadata = { title: 'Products — Uyi-Osa Degarson', description: 'Books, audio, music, podcasts, mentorship and discipleship resources by Uyi-Osa Degarson.' };

const categories = [
  { slug: 'books', number: '01', title: 'Books', text: 'Ideas for the long road — writing on identity, faith, leadership, and the work of becoming.', icon: BookOpen },
  { slug: 'audio-messages', number: '02', title: 'Audio Messages', text: 'Teachings, reflections and practical wisdom for the moments you need a little more clarity.', icon: Headphones },
  { slug: 'songs', number: '03', title: 'Songs', text: 'Worship that creates room for the presence of God and reminds us what is true.', icon: Music2 },
  { slug: 'podcasts', number: '04', title: 'Podcasts', text: 'Unhurried conversations about purpose, creativity, business and building a life that lasts.', icon: Mic2 },
  { slug: 'mentorship', number: '05', title: 'Mentorship', text: 'A considered space for leaders, creatives and entrepreneurs who are ready to grow with intention.', icon: Users },
  { slug: 'discipleship', number: '06', title: 'Discipleship', text: 'Resources and frameworks to help believers know Christ, grow in faith, and serve others.', icon: Compass },
  { slug: 'videos', number: '07', title: 'Videos', text: 'Teachings, conversations, and visual stories made to meet you wherever you are.', icon: Video },
];

export default function Products() {
  return (
    <SiteShell>
      <main>
        <PageIntro eyebrow="02 / Products" title="Things worth returning to." description="A growing library of words, sounds, conversations, and tools for the journey." />

        <PageSection label="The library" title="Resources for the life you are building." className="bg-[var(--paper)]">
          <div className="mt-12 grid gap-0 border border-[var(--card-border)] bg-[var(--card)] md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {categories.map(({ slug, number, title, text, icon: Icon }) => (
              <Link href={`/products/${slug}`} key={slug} className="group min-h-64 border-b border-r border-[var(--card-border)] p-7 transition-colors hover:bg-[var(--sand)]">
                <div className="flex items-start justify-between">
                  <span className="font-editorial text-2xl text-[var(--red)]">{number}</span>
                  <Icon size={22} strokeWidth={1.3} className="text-[var(--red)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <h3 className="mt-14 font-editorial text-4xl">{title}</h3>
                <p className="mt-4 max-w-xs text-sm leading-7 text-[var(--muted)]">{text}</p>
              </Link>
            ))}
          </div>
        </PageSection>

        <section className="bg-[var(--red)] px-5 py-20 text-white sm:px-8 md:px-10 md:py-24 lg:px-14">
          <div className="mx-auto max-w-[1600px]">
            <SectionLabel number="Coming soon">The first edition</SectionLabel>
            <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_.7fr] lg:items-end">
              <div>
                <p className="font-editorial text-5xl sm:text-6xl md:text-8xl">Built to last.</p>
                <p className="mt-8 max-w-md text-sm leading-8 text-white/70">Future releases will appear here — books, songs, conversations, and resources made to move from the screen into real life. Follow along or reach me on WhatsApp to stay close.</p>
              </div>
              <div className="border border-white/25 p-7">
                <Play size={28} strokeWidth={1.2} />
                <p className="mt-12 text-[10px] font-bold uppercase tracking-[.15em] text-white/60">The collection is taking shape</p>
                <p className="mt-3 font-editorial text-3xl">Stay close to the work.</p>
              </div>
            </div>
          </div>
        </section>

        <PageSection label="Direct access" title="Looking for something specific?" className="bg-[var(--sand)]">
          <div className="mt-8 flex flex-col gap-8 lg:mt-10 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-lg text-sm leading-8 text-[var(--muted)]">For speaking, mentorship, discipleship, or collaboration enquiries, begin a conversation and let’s find the right next step.</p>
            <Link href="/contact" className="inline-flex w-fit items-center gap-3 border-b border-[var(--ink)] pb-2 text-[11px] font-bold uppercase tracking-[.14em] text-[var(--ink)] transition-colors hover:border-[var(--red)] hover:text-[var(--red)]">Make an enquiry <ArrowUpRight size={14} /></Link>
          </div>
        </PageSection>
      </main>
    </SiteShell>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Play, MessageCircle, Instagram, Facebook, Youtube, Mail } from 'lucide-react';
import { SiteShell, SectionLabel } from '@/components/site-shell';
import { EditorialLink, LogoRow, NumberedCard, PageSection, Quote } from '@/components/ui-primitives';

const WHATSAPP_URL = 'https://wa.me/2348132968170';
const socials = [
  { label: 'Instagram', handle: '@uyidegarson', href: 'https://instagram.com/uyidegarson', icon: Instagram },
  { label: 'Facebook', handle: '@uyidegarson', href: 'https://facebook.com/uyidegarson', icon: Facebook },
  { label: 'YouTube', handle: '@uyidegarsonTV', href: 'https://youtube.com/@uyidegarsonTV', icon: Youtube },
];

const portrait = '/images/ChatGPT_Image_Aug_6,_2026,_07_34_04_PM.png';

export default function Home() {
  return <SiteShell>
    <main>
      <section className="relative overflow-hidden bg-[#1e1c1a] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_38%,rgba(127,29,45,.4),transparent_42%)]" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-[1600px] flex-row px-5 pt-20 sm:px-8 md:px-10 md:pt-28 lg:px-14 lg:pt-32">
          <div className="relative z-10 flex w-[62%] max-w-3xl flex-col justify-center pb-8 sm:pb-12 lg:w-[58%] lg:pb-20">
            <p className="eyebrow text-white/70 reveal-up">Faith · Creativity · Strategy</p>
            <h1 className="mt-4 max-w-4xl font-editorial text-[1.9rem] leading-[.96] sm:mt-5 sm:text-6xl md:mt-7 md:text-8xl lg:text-[8.5rem] reveal-up" style={{ animationDelay: '.1s' }}>
              A life of <em className="text-[#d9a5ab]">intention.</em>
            </h1>
            <p className="mt-5 max-w-md text-[.8rem] leading-6 text-white/75 sm:mt-8 sm:text-base sm:leading-7 reveal-up" style={{ animationDelay: '.2s' }}>
              Uyi-Osa Degarson is a worship leader, brand identity consultant and strategist helping people and organisations express their God-given identity with clarity.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-7 reveal-up" style={{ animationDelay: '.3s' }}>
              <Link href="/profile" className="inline-flex w-fit items-center gap-2 border border-white bg-white px-4 py-2.5 text-[9px] font-bold uppercase tracking-[.14em] text-[var(--ink)] transition-colors hover:bg-transparent hover:text-white sm:gap-3 sm:px-5 sm:py-3 sm:text-[10px]">
                Explore my journey <ArrowUpRight size={12} />
              </Link>
              <Link href="/contact" className="inline-flex w-fit items-center gap-2 border-b border-white/55 py-2.5 text-[9px] font-bold uppercase tracking-[.14em] text-white transition-colors hover:border-white sm:gap-3 sm:py-3 sm:text-[10px]">
                Work with me <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>

          <div className="relative z-0 w-[38%] lg:w-[42%]">
            <Image src={portrait} alt="Uyi-Osa Degarson" fill priority sizes="(max-width: 1024px) 38vw, 42vw" className="object-cover object-[center_18%] sm:object-[center_16%] lg:object-[center_20%]" />
          </div>

          <div className="absolute bottom-6 right-5 hidden items-center gap-3 text-[10px] uppercase tracking-[.15em] text-white/50 md:flex lg:bottom-8 lg:right-10">
            <ArrowDown size={14} /> Scroll to explore
          </div>
        </div>
      </section>

      <PageSection label="The throughline" title="Where conviction meets craft." className="bg-[var(--paper)]"><div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><p className="max-w-2xl font-editorial text-2xl leading-tight sm:text-3xl md:text-5xl">“I bring every assignment a heart anchored in Christ, a mind wired for strategy, and an unwavering passion for building brands, strengthening ministries, and raising leaders who will make lasting impact.”</p><div><p className="text-sm leading-7 text-[var(--muted)]">From the worship stage to the strategy room, Uyi-Osa works at the intersection of faith, creativity, and transformation.</p><div className="mt-8"><EditorialLink href="/profile">Read the full story</EditorialLink></div></div></div></PageSection>

      <PageSection label="A considered practice" title="Many expressions. One purpose." className="bg-[var(--sand)]"><div className="mt-12 grid gap-x-6 gap-y-8 sm:gap-x-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-y-14"><NumberedCard number="01" title="Ministry" text="Discipling nations, families and the next generation through worship, teaching and a life of faith." /><NumberedCard number="02" title="Business consulting" text="Building meaningful brands and purpose-driven businesses with strategy, clarity and creative direction." /><NumberedCard number="03" title="Creative expression" text="Giving ideas a distinct voice through identity, storytelling, sound and thoughtful experiences." /></div></PageSection>

      <section className="bg-[var(--red)] px-5 py-20 text-white sm:px-8 md:px-10 md:py-28 lg:px-14"><div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-16"><SectionLabel number="03">A word to carry</SectionLabel><Quote author="Uyi-Osa Degarson">Whether I’m consulting for a business, coaching a worship team, designing a brand identity, or speaking on a conference platform, my mission remains the same: to glorify Jesus Christ by helping people and organisations discover their God-given identity.</Quote></div></section>

      <PageSection label="In good company" title="Trusted by teams building what matters." className="bg-[var(--paper)]"><div className="mt-12"><LogoRow names={['MainOne', 'Airtel', 'Insight', 'Peak', 'Peak 456', 'Berger']} /></div><div className="mt-8 flex justify-end sm:mt-10"><EditorialLink href="/portfolio">View selected work</EditorialLink></div></PageSection>

      <PageSection label="A quieter invitation" title="Connect directly." className="bg-[var(--sand)]"><div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-[1fr_1fr] lg:items-start"><div className="max-w-lg"><p className="text-base leading-8 text-[var(--muted)]">The best conversations happen directly. If you have a question, a brief, or simply want to say hello — reach out and let's begin.</p><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 border-b border-[var(--ink)] pb-3 text-[11px] font-bold uppercase tracking-[.14em] text-[var(--ink)] transition-colors hover:border-[var(--red)] hover:text-[var(--red)]">Chat on WhatsApp <MessageCircle size={15} /></a></div><div className="flex flex-col gap-6 sm:flex-row sm:gap-10 lg:flex-col lg:gap-7">{socials.map(({ label, handle, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-4"><Icon size={18} strokeWidth={1.4} className="text-[var(--muted)] transition-colors group-hover:text-[var(--red)]" /><span><span className="block text-[10px] font-bold uppercase tracking-[.14em] text-[var(--muted)]">{label}</span><span className="mt-1 block font-editorial text-xl text-[var(--ink)] transition-colors group-hover:text-[var(--red)]">{handle}</span></span></a>)}</div></div></PageSection>
    </main>
  </SiteShell>;
}

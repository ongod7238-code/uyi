import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SiteShell, PageIntro } from '@/components/site-shell';
import { PageSection } from '@/components/ui-primitives';

export const metadata = { title: 'Case Studies — Uyi-Osa Degarson', description: 'Detailed case studies of selected brand identity and strategy work.' };

const work = [
  { name: 'MainOne', type: 'Telecommunications', overview: 'Making infrastructure feel human.', challenge: 'Translate technical leadership into a distinct, confident brand.', solution: 'A clear identity system and considered touchpoints built around connection.', outcome: 'A more recognisable presence for a category-defining organisation.' },
  { name: 'Airtel Nigeria', type: 'Telecommunications', overview: 'Energy with a point of view.', challenge: 'Create communication that could carry both scale and cultural relevance.', solution: 'Strategic creative direction grounded in a bold, people-first story.', outcome: 'Work that moved with clarity across a complex, high-volume ecosystem.' },
  { name: 'Insight Communications', type: 'Creative agency', overview: 'A sharper signal in a crowded room.', challenge: 'Express a confident point of view without losing approachability.', solution: 'A purposeful brand expression built around ideas, clarity and momentum.', outcome: 'An identity ready to lead conversations, not just join them.' },
  { name: 'Peak / Peak 456', type: 'Consumer brand', overview: 'Familiarity, made fresh.', challenge: 'Balance an established legacy with the need to stay relevant to new families.', solution: 'Creative systems that respect memory while making space for the next generation.', outcome: 'A warmer, more contemporary expression of a trusted name.' },
  { name: 'Berger Paints', type: 'Built environment', overview: 'Colour with conviction.', challenge: 'Bring a broad product world together under one confident promise.', solution: 'A structured brand story that connects product, people and possibility.', outcome: 'A more coherent foundation for a brand designed to transform spaces.' },
];

export default function CaseStudiesPage() {
  return (
    <SiteShell>
      <main>
        <PageIntro eyebrow="03 / Portfolio / Case Studies" title="The details are the difference." description="Each case study traces the challenge, the thinking, and the outcome behind the work." />

        <PageSection label="Case studies" title="How the work was made." className="bg-[var(--paper)]">
          <div className="mt-12 space-y-16 lg:mt-16 lg:space-y-20">
            {work.map((item, index) => (
              <article key={item.name} className="grid gap-8 border-t border-[var(--line)] pt-7 lg:grid-cols-[.8fr_1.2fr]">
                <div className="flex justify-between">
                  <div>
                    <span className="eyebrow text-[var(--red)]">0{index + 1} / {item.type}</span>
                    <h2 className="mt-4 text-4xl sm:text-5xl md:mt-5 md:text-7xl">{item.name}</h2>
                  </div>
                  <ArrowUpRight className="text-[var(--red)]" />
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <p className="font-editorial text-2xl leading-tight sm:text-3xl">{item.overview}</p>
                    <Link href="/contact" className="mt-8 inline-flex items-center gap-2 border-b border-[var(--ink)] pb-2 text-[10px] font-bold uppercase tracking-[.14em] md:mt-10">Discuss a project <ArrowUpRight size={14} /></Link>
                  </div>
                  <dl className="space-y-6 text-sm leading-7">
                    <div><dt className="eyebrow text-[var(--red)]">Challenge</dt><dd className="mt-2 text-[var(--muted)]">{item.challenge}</dd></div>
                    <div><dt className="eyebrow text-[var(--red)]">Solution</dt><dd className="mt-2 text-[var(--muted)]">{item.solution}</dd></div>
                    <div><dt className="eyebrow text-[var(--red)]">Outcome</dt><dd className="mt-2 text-[var(--muted)]">{item.outcome}</dd></div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </PageSection>
      </main>
    </SiteShell>
  );
}

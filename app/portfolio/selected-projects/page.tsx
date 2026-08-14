import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SiteShell, PageIntro } from '@/components/site-shell';
import { PageSection } from '@/components/ui-primitives';

export const metadata = { title: 'Selected Projects — Uyi-Osa Degarson', description: 'A curated selection of projects across identity, strategy and creative direction.' };

const projects = [
  { name: 'MainOne', type: 'Brand identity', summary: 'A clear identity system for a category-defining telecommunications organisation.', tag: 'Identity system' },
  { name: 'Airtel Nigeria', type: 'Creative direction', summary: 'Strategic creative direction grounded in a bold, people-first story.', tag: 'Creative direction' },
  { name: 'Insight Communications', type: 'Brand expression', summary: 'A purposeful brand expression built around ideas, clarity and momentum.', tag: 'Brand strategy' },
  { name: 'Peak / Peak 456', type: 'Brand refresh', summary: 'Creative systems that respect memory while making space for the next generation.', tag: 'Consumer brand' },
  { name: 'Berger Paints', type: 'Brand story', summary: 'A structured brand story that connects product, people and possibility.', tag: 'Built environment' },
  { name: 'S.M.ART Conference', type: 'Platform', summary: 'A platform dedicated to equipping entrepreneurs, creatives, and purpose-driven innovators.', tag: 'Event & platform' },
];

export default function SelectedProjectsPage() {
  return (
    <SiteShell>
      <main>
        <PageIntro eyebrow="03 / Portfolio / Selected Projects" title="Work with a point of view." description="A curated selection of projects across identity, strategy and creative direction." />

        <PageSection label="Selected projects" title="Built for organisations with something meaningful to say." className="bg-[var(--paper)]">
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.name} className="border border-[var(--card-border)] bg-[var(--card)] p-7 transition-all duration-300 hover:border-[var(--red)] hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,.18)]">
                <div className="flex items-center justify-between">
                  <span className="font-editorial text-xl text-[var(--red)] sm:text-2xl">0{index + 1}</span>
                  <span className="text-[9px] font-bold uppercase tracking-[.15em] text-[var(--muted)]">{project.tag}</span>
                </div>
                <h3 className="mt-6 font-editorial text-3xl sm:text-4xl">{project.name}</h3>
                <p className="mt-3 text-[10px] font-bold uppercase tracking-[.14em] text-[var(--red)]">{project.type}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{project.summary}</p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 border-b border-[var(--ink)] pb-1 text-[10px] font-bold uppercase tracking-[.14em] transition-colors hover:border-[var(--red)] hover:text-[var(--red)]">Discuss <ArrowUpRight size={12} /></Link>
              </article>
            ))}
          </div>
        </PageSection>
      </main>
    </SiteShell>
  );
}

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from './site-shell';

export function EditorialLink({ href, children, inverse = false }: { href: string; children: React.ReactNode; inverse?: boolean }) {
  return <Link href={href} className={`group inline-flex items-center gap-3 border-b pb-2 text-[11px] font-bold uppercase tracking-[.14em] transition-colors ${inverse ? 'border-white/50 text-white hover:border-white' : 'border-[var(--ink)] text-[var(--ink)] hover:border-[var(--red)] hover:text-[var(--red)]'}`}>{children}<ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>;
}

export function Quote({ children, author }: { children: React.ReactNode; author: string }) {
  return <figure className="border-l-2 border-[var(--red)] pl-5 sm:pl-6"><blockquote className="font-editorial text-2xl leading-tight text-white sm:text-3xl md:text-4xl">“{children}”</blockquote><figcaption className="mt-5 text-[10px] font-bold uppercase tracking-[.15em] text-white/55">— {author}</figcaption></figure>;
}

export function NumberedCard({ number, title, text }: { number: string; title: string; text: string }) {
  return <article className="border border-[var(--card-border)] bg-[var(--card)] p-6 transition-all duration-300 hover:border-[var(--red)] hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,.18)]"><div className="flex items-center justify-between"><span className="font-editorial text-xl text-[var(--red)] sm:text-2xl">{number}</span><span className="h-px flex-1 mx-3 bg-[var(--line)]" /></div><h3 className="mt-4 font-editorial text-2xl sm:text-3xl">{title}</h3><p className="mt-4 text-sm leading-7 text-[var(--muted)]">{text}</p></article>;
}

export function LogoRow({ names }: { names: string[] }) {
  const doubled = [...names, ...names];
  return (
    <>
      {/* Mobile: fast horizontal marquee */}
      <div className="overflow-hidden border border-[var(--card-border)] bg-[var(--card)] md:hidden">
        <div className="marquee-track flex w-max items-center">
          {doubled.map((name, i) => (
            <div key={`${name}-${i}`} className="flex shrink-0 items-center px-6 py-5 font-editorial text-xl text-[var(--muted)] whitespace-nowrap">
              {name}
              <span className="mx-6 h-1 w-1 rounded-full bg-[var(--line)]" />
            </div>
          ))}
        </div>
      </div>
      {/* Desktop: static grid */}
      <div className="hidden grid-cols-2 border border-[var(--card-border)] bg-[var(--card)] md:grid md:grid-cols-3 lg:grid-cols-6">
        {names.map(name => <div key={name} className="flex min-h-24 items-center justify-center border-b border-r border-[var(--card-border)] px-3 text-center font-editorial text-xl text-[var(--muted)] grayscale transition-all hover:bg-[var(--sand)] hover:text-[var(--ink)]">{name}</div>)}
      </div>
    </>
  );
}

export function PageSection({ label, title, children, className = '', id }: { label: string; title: string; children: React.ReactNode; className?: string; id?: string }) {
  return <section id={id} className={`border-t border-[var(--line)] px-5 py-20 sm:px-8 md:px-10 md:py-28 lg:px-14 ${className}`}><div className="mx-auto max-w-[1600px]"><SectionLabel number="—">{label}</SectionLabel><h2 className="mt-5 max-w-3xl text-4xl leading-[.95] sm:text-5xl md:mt-6 md:text-7xl">{title}</h2>{children}</div></section>;
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Menu, X, Plus, Minus, Instagram, Facebook, Youtube, MessageCircle, Mail } from 'lucide-react';

type Child = { label: string; href: string };
type NavItem = { label: string; href: string; children?: Child[] };

const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Profile',
    href: '/profile',
    children: [
      { label: 'About Me', href: '/profile/about' },
      { label: 'Ministry', href: '/profile/ministry' },
      { label: 'Business Consulting', href: '/profile/consulting' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Books', href: '/products/books' },
      { label: 'Audio Messages', href: '/products/audio-messages' },
      { label: 'Songs', href: '/products/songs' },
      { label: 'Podcasts', href: '/products/podcasts' },
      { label: 'Mentorship', href: '/products/mentorship' },
      { label: 'Discipleship', href: '/products/discipleship' },
      { label: 'Videos', href: '/products/videos' },
    ],
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
    children: [
      { label: 'Client Portfolio', href: '/portfolio/client-portfolio' },
      { label: 'Case Studies', href: '/portfolio/case-studies' },
      { label: 'Selected Projects', href: '/portfolio/selected-projects' },
    ],
  },
  {
    label: 'Partners',
    href: '/partners',
    children: [
      { label: 'Strategic Alliances', href: '/partners/strategic-alliances' },
      { label: 'Corporate Partners', href: '/partners/corporate-partners' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  const isHome = pathname === '/';
  const solid = scrolled || open || !isHome;
  const isParentActive = (item: NavItem) => pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${solid ? 'border-b border-[var(--line)] bg-[var(--paper)]/95 shadow-sm backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 sm:px-8 md:px-10 md:py-5 lg:px-14">
          <Link href="/" className="group flex items-center" aria-label="Uyi-Osa Degarson — Home">
            <Image
              src="/images/logo1.png"
              alt="Uyi-Osa Degarson"
              width={220}
              height={120}
              priority
              className={`h-10 w-[118px] object-contain object-left transition-all duration-500 sm:h-12 sm:w-[170px] ${solid ? '' : 'brightness-0 invert'}`}
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex lg:gap-10">
            {nav.map((item) => (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[.15em] transition-colors duration-300 ${
                    solid ? (isParentActive(item) ? 'text-[var(--red)]' : 'text-[#1a1a1a] hover:text-[var(--red)]') : (isParentActive(item) ? 'text-white' : 'text-white/80 hover:text-white')
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <svg width="8" height="8" viewBox="0 0 8 8" className={`mt-px transition-transform duration-300 group-hover:rotate-180 ${solid ? 'fill-current' : 'fill-white'}`} aria-hidden="true">
                      <path d="M4 6L0 1.5h8z" />
                    </svg>
                  )}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-1/2 top-full z-50 min-w-[200px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-lg border border-[var(--card-border)] bg-[var(--card)] shadow-[0_20px_50px_-12px_rgba(0,0,0,.22)]">
                      <div className="px-5 py-3 text-[9px] font-bold uppercase tracking-[.18em] text-[var(--red)]">{item.label}</div>
                      <div className="border-t border-[var(--card-border)]">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block border-b border-[var(--card-border)] px-5 py-3 text-[12px] font-medium text-[#1a1a1a] transition-colors duration-200 last:border-b-0 hover:bg-[var(--sand)] hover:text-[var(--red)]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={`hidden items-center gap-2 border px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[.14em] transition-all duration-300 lg:flex ${
                solid ? 'border-[var(--ink)] text-[#1a1a1a] hover:bg-[var(--red)] hover:text-white hover:border-[var(--red)]' : 'border-white/70 text-white hover:bg-white hover:text-[var(--ink)]'
              }`}
            >
              Work with me <ArrowUpRight size={13} />
            </Link>
            <button
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen(!open)}
              className={`p-1.5 transition-colors md:hidden ${solid ? 'text-[#1a1a1a]' : 'text-white'}`}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="max-h-[calc(100vh-64px)] overflow-y-auto border-t border-[var(--line)] bg-[var(--paper)] px-5 py-6 md:hidden">
            <div className="flex flex-col gap-1">
              {nav.map((item) => {
                const active = isParentActive(item);
                if (!item.children) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center justify-between py-3 font-editorial text-2xl transition-colors ${active ? 'text-[var(--red)]' : 'text-[#1a1a1a]'}`}
                    >
                      {item.label}
                      <ArrowUpRight size={18} className={active ? 'text-[var(--red)]' : 'text-[var(--muted)]'} />
                    </Link>
                  );
                }
                const isOpen = expanded === item.label;
                return (
                  <div key={item.href} className="border-b border-[var(--line)]">
                    <button
                      onClick={() => setExpanded(isOpen ? null : item.label)}
                      className={`flex w-full items-center justify-between py-3 text-left font-editorial text-2xl transition-colors ${active ? 'text-[var(--red)]' : 'text-[#1a1a1a]'}`}
                      aria-expanded={isOpen}
                    >
                      {item.label}
                      <span className="text-[var(--muted)]">{isOpen ? <Minus size={18} /> : <Plus size={18} />}</span>
                    </button>
                    <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <Link href={item.href} className="flex items-center gap-2 py-2.5 pl-1 text-[11px] font-semibold uppercase tracking-[.14em] text-[var(--red)]">
                          View all <ArrowUpRight size={12} />
                        </Link>
                        <div className="flex flex-col gap-0.5 pb-2">
                          {item.children.map((child) => (
                            <Link key={child.href} href={child.href} className="py-2 pl-1 text-base text-[var(--muted)] transition-colors hover:text-[var(--red)]">
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <Link href="/contact" className="mt-4 inline-flex w-fit items-center gap-2 bg-[var(--red)] px-5 py-3 text-[10px] font-semibold uppercase tracking-[.14em] text-white">
                Work with me <ArrowUpRight size={13} />
              </Link>
            </div>
          </nav>
        )}
      </header>

      {children}

      <footer className="bg-[var(--ink)] px-5 py-14 text-white sm:px-8 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <Image
                src="/images/logo1.png"
                alt="Uyi-Osa Degarson"
                width={220}
                height={120}
                className="h-14 w-[170px] object-contain object-left brightness-0 invert sm:h-16 sm:w-[210px]"
              />
              <p className="eyebrow mt-7 text-white/50">A life of intention</p>
              <h2 className="mt-5 max-w-md font-editorial text-5xl leading-[.95] md:text-7xl">Make room for what matters.</h2>
            </div>
            <div>
              <p className="eyebrow text-white/50">Explore</p>
              <div className="mt-5 flex flex-col gap-3 text-sm text-white/70">
                {nav.filter((n) => n.label !== 'Home').map((item) => (
                  <Link className="transition-colors hover:text-white" key={item.href} href={item.href}>{item.label}</Link>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow text-white/50">Get in touch</p>
              <div className="mt-5 flex flex-col gap-3 text-sm text-white/70">
                <a href="https://wa.me/2348132968170" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white"><MessageCircle size={14} /> WhatsApp</a>
                <a href="mailto:uyi.degarson@gmail.com" className="inline-flex items-center gap-2 transition-colors hover:text-white"><Mail size={14} /> uyi.degarson@gmail.com</a>
                <span>Worldwide</span>
                <div className="mt-4 flex gap-5">
                  <a href="https://instagram.com/uyidegarson" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/70 transition-colors hover:text-white"><Instagram size={16} strokeWidth={1.4} /></a>
                  <a href="https://facebook.com/uyidegarson" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/70 transition-colors hover:text-white"><Facebook size={16} strokeWidth={1.4} /></a>
                  <a href="https://youtube.com/@uyidegarsonTV" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white/70 transition-colors hover:text-white"><Youtube size={16} strokeWidth={1.4} /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 pt-6 text-[10px] uppercase tracking-[.14em] text-white/40 sm:flex-row">
            <span>© {new Date().getFullYear()} Uyi-Osa Degarson</span>
            <span>Faith · Creativity · Strategy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="border-b border-[var(--line)] bg-[var(--sand)] px-5 pb-20 pt-32 sm:px-8 md:px-10 md:pb-28 md:pt-44 lg:px-14 lg:pt-48">
      <div className="mx-auto max-w-[1600px]">
        <p className="eyebrow text-[var(--red)]">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-5xl leading-[.92] sm:text-6xl md:mt-7 md:text-8xl lg:text-[9rem]">{title}</h1>
        <p className="mt-8 max-w-xl text-base leading-7 text-[var(--muted)] md:mt-10 md:ml-[25%] md:text-lg">{description}</p>
      </div>
    </section>
  );
}

export function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.15em] text-[var(--muted)]">
      <span className="text-[var(--red)]">{number}</span>
      <span className="h-px w-8 bg-[var(--line)]" />
      {children}
    </div>
  );
}

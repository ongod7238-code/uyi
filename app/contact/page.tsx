'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight, Check, MapPin, Mail, MessageCircle, Instagram, Facebook, Youtube } from 'lucide-react';
import { SiteShell, PageIntro, SectionLabel } from '@/components/site-shell';

const WHATSAPP_URL = 'https://wa.me/2348132968170';

const socials = [
  { label: 'Instagram', handle: '@uyidegarson', href: 'https://instagram.com/uyidegarson', icon: Instagram },
  { label: 'Facebook', handle: '@uyidegarson', href: 'https://facebook.com/uyidegarson', icon: Facebook },
  { label: 'YouTube', handle: '@uyidegarsonTV', href: 'https://youtube.com/@uyidegarsonTV', icon: Youtube },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <SiteShell>
      <main>
        <PageIntro eyebrow="05 / Contact" title="Let's make room for the right conversation." description="Whether you have a clear brief or an early question, this is a good place to begin." />

        <section className="grid gap-16 border-t border-[var(--line)] bg-[var(--paper)] px-5 py-20 sm:px-8 md:px-10 md:py-28 lg:grid-cols-[.7fr_1.3fr] lg:px-14">
          <div>
            <SectionLabel number="Say hello">Contact</SectionLabel>
            <div className="mt-10 space-y-7 text-sm">
              <a className="flex items-start gap-4 group" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mt-1 text-[var(--red)]" size={18} />
                <span>
                  <strong className="block font-editorial text-2xl font-normal transition-colors group-hover:text-[var(--red)]">WhatsApp</strong>
                  <span className="mt-1 block text-[var(--muted)]">Chat directly</span>
                </span>
              </a>
              <a className="flex items-start gap-4" href="mailto:uyi.degarson@gmail.com">
                <Mail className="mt-1 text-[var(--red)]" size={18} />
                <span>
                  <strong className="block font-editorial text-2xl font-normal">Email</strong>
                  <span className="mt-1 block text-[var(--muted)]">uyi.degarson@gmail.com</span>
                </span>
              </a>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-[var(--red)]" size={18} />
                <span>
                  <strong className="block font-editorial text-2xl font-normal">Location</strong>
                  <span className="mt-1 block text-[var(--muted)]">WorldWide</span>
                </span>
              </div>
            </div>

            <div className="mt-10">
              <p className="eyebrow text-[var(--muted)]">Follow along</p>
              <div className="mt-5 flex flex-col gap-3.5">
                {socials.map(({ label, handle, href, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-sm">
                    <Icon size={16} strokeWidth={1.4} className="text-[var(--muted)] transition-colors group-hover:text-[var(--red)]" />
                    <span className="text-[var(--ink)] transition-colors group-hover:text-[var(--red)]">{handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="max-w-xl text-4xl sm:text-5xl md:text-7xl">What are you building?</h2>
            {sent ? (
              <div className="mt-12 border-l-2 border-[var(--red)] bg-[var(--sand)] p-7">
                <Check className="text-[var(--red)]" />
                <h3 className="mt-5 font-editorial text-3xl">Message received.</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">Thank you for reaching out. Your note is in the right place.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-12 space-y-8">
                <label className="block border-b border-[var(--line)] pb-3">
                  <span className="eyebrow text-[var(--muted)]">Your name</span>
                  <input required name="name" className="mt-3 block w-full bg-transparent text-base outline-none placeholder:text-[var(--muted)]" placeholder="How should I address you?" />
                </label>
                <label className="block border-b border-[var(--line)] pb-3">
                  <span className="eyebrow text-[var(--muted)]">Email address</span>
                  <input required type="email" name="email" className="mt-3 block w-full bg-transparent text-base outline-none placeholder:text-[var(--muted)]" placeholder="Where can I reach you?" />
                </label>
                <label className="block border-b border-[var(--line)] pb-3">
                  <span className="eyebrow text-[var(--muted)]">How can I help?</span>
                  <textarea required name="message" rows={3} className="mt-3 block w-full resize-none bg-transparent text-base outline-none placeholder:text-[var(--muted)]" placeholder="Tell me a little about the work." />
                </label>
                <button type="submit" className="inline-flex items-center gap-3 bg-[var(--red)] px-6 py-4 text-[10px] font-bold uppercase tracking-[.14em] text-white transition-colors hover:bg-[var(--red-deep)]">
                  Send enquiry <ArrowUpRight size={15} />
                </button>
              </form>
            )}
          </div>
        </section>

        <section className="bg-[var(--ink)] px-5 py-20 text-white sm:px-8 md:px-10 md:py-28 lg:px-14">
          <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <div>
              <SectionLabel number="Direct line">WhatsApp</SectionLabel>
              <h2 className="mt-6 max-w-2xl text-4xl sm:text-5xl md:text-7xl">Let&apos;s talk.</h2>
              <p className="mt-6 max-w-md text-sm leading-8 text-white/70">For the fastest response, reach me directly on WhatsApp. I personally read and respond to every message.</p>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-3 bg-[#25D366] px-6 py-4 text-[10px] font-bold uppercase tracking-[.14em] text-white transition-colors hover:bg-[#1da851]">
              Chat on WhatsApp <MessageCircle size={16} />
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

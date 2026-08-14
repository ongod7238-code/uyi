'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const closeTimer = setTimeout(() => {
      setClosing(true);
    }, 1000);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 1500);

    return () => {
      clearTimeout(closeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--sand)] transition-opacity duration-500 ${
        closing ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center">

        <div
          className={`relative h-28 w-28 sm:h-32 sm:w-32 transition-all duration-1000 ${
            closing
              ? 'scale-95 opacity-0'
              : 'scale-100 opacity-100'
          }`}
        >
          <Image
            src="/images/logo1.png"
            alt="UYI-OSA DEGARSON"
            fill
            priority
            sizes="128px"
            className="object-contain"
          />
        </div>

        <div
          className={`mt-7 flex items-center gap-2 transition-opacity duration-500 ${
            closing ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--red)] animate-pulse" />

          <span
            className="h-1.5 w-1.5 rounded-full bg-[var(--red)] animate-pulse"
            style={{ animationDelay: '200ms' }}
          />

          <span
            className="h-1.5 w-1.5 rounded-full bg-[var(--red)] animate-pulse"
            style={{ animationDelay: '400ms' }}
          />
        </div>

      </div>
    </div>
  );
}
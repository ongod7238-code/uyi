import './globals.css';
import IntroLoader from '@/components/intro-loader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uyi-Osa Degarson — Faith, Creativity & Strategy',
  description:
    'The personal brand of Uyi-Osa Degarson: worship leader, brand identity consultant, strategist and purpose-driven creative.',
  metadataBase: new URL('https://uyidegarson.com'),
  openGraph: {
    title: 'Uyi-Osa Degarson — Faith, Creativity & Strategy',
    description:
      'Faith, creativity and strategy in service of lasting impact.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <IntroLoader />
        {children}
      </body>
    </html>
  );
}
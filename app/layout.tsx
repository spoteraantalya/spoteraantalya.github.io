import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

import { siteConfig } from '@/lib/site-config';

import './globals.css';

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Antalya İkinci El Eşya Alanlar | SpotEra',
  description:
    'Antalya’da ikinci el mobilya ve beyaz eşyalarınızı SpotEra’ya güvenle satın. Fotoğraf gönderin, anında fiyat bilgisi alın; ücretsiz ekspertizden yararlanın.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: '/',
    siteName: 'SpotEra',
    title: 'Antalya İkinci El Eşya Alanlar | SpotEra',
    description:
      'Mobilya ve beyaz eşyalarınızın fotoğraflarını gönderin; anında fiyat bilgisi ve ücretsiz ekspertiz alın.',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'SpotEra — İkinci elin yeni dönemi' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antalya İkinci El Eşya Alanlar | SpotEra',
    description: 'Fotoğraf gönderin, anında fiyat bilgisi ve ücretsiz ekspertiz alın.',
    images: ['/og.png'],
  },
  icons: { icon: '/favicon.svg' },
  formatDetection: { telephone: false, address: false, email: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

import { GoogleAnalytics } from '@/components/google-analytics';
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
    images: [{ url: '/og.jpg', width: 1732, height: 908, alt: 'SpotEra — İkinci elin yeni dönemi' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antalya İkinci El Eşya Alanlar | SpotEra',
    description: 'Fotoğraf gönderin, anında fiyat bilgisi ve ücretsiz ekspertiz alın.',
    images: ['/og.jpg'],
  },
  icons: { icon: '/favicon.svg' },
  applicationName: 'SpotEra',
  category: 'İkinci el eşya alım satım',
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, address: false, email: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const analyticsId = process.env.NEXT_PUBLIC_GA_ID || '';

  return (
    <html lang="tr">
      <body className={`${geist.variable} antialiased`}>
        {children}
        <GoogleAnalytics measurementId={analyticsId} />
      </body>
    </html>
  );
}

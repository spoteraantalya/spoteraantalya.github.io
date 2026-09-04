import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f5f3ec] text-[#11150f]">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-5 py-28 text-center sm:py-36">
        <p className="section-kicker">404 · Sayfa bulunamadı</p>
        <h1 className="mt-5 text-5xl font-bold tracking-[-.06em] sm:text-7xl">Aradığın sayfa burada değil.</h1>
        <p className="mx-auto mt-6 max-w-xl leading-7 text-black/58">
          İkinci el eşyan için fiyat almak veya SpotEra hizmetlerini görmek üzere ana sayfaya dönebilirsin.
        </p>
        <Link href="/" prefetch={false} className="mt-8 inline-flex h-13 items-center gap-2 rounded-full bg-[#11150f] px-6 text-sm font-bold text-white">
          <ArrowLeft className="size-4" /> Ana sayfaya dön
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}

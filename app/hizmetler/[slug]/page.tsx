import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight, Camera, Check, MapPin, MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { MobileContactBar } from '@/components/mobile-contact-bar';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { buttonVariants } from '@/components/ui/button';
import { getServicePage, servicePages } from '@/lib/service-pages';
import { siteConfig, whatsappUrl } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/hizmetler/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `/hizmetler/${page.slug}`,
      images: [],
    },
    twitter: {
      title: page.metaTitle,
      description: page.metaDescription,
      images: [],
    },
  };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getServicePage(slug);

  if (!page) notFound();

  const pageWhatsappUrl = whatsappUrl(
    `Merhaba SpotEra, “${page.title}” hizmetiniz için fiyat almak istiyorum. İlçem: … Fotoğrafları gönderiyorum.`,
  );

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana sayfa', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: page.shortTitle, item: `${siteConfig.url}/hizmetler/${page.slug}` },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f5f3ec] text-[#11150f]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SiteHeader />

      <section className="px-3 pt-3 sm:px-5 sm:pt-5">
        <div className="mx-auto grid max-w-[1400px] overflow-hidden rounded-[28px] bg-[#11150f] text-white lg:grid-cols-[1.05fr_.95fr] lg:rounded-[40px]">
          <div className="flex min-h-[600px] flex-col justify-between p-7 sm:p-12 lg:p-16">
            <div>
              <Link href="/" prefetch={false} className="inline-flex items-center gap-2 text-sm font-semibold text-white/58 hover:text-[#C9FF55]"><ArrowLeft className="size-4" /> Ana sayfa</Link>
              <p className="mt-14 text-xs font-bold uppercase tracking-[.14em] text-[#C9FF55]">SpotEra · Ücretsiz ekspertiz</p>
              <h1 className="mt-5 max-w-3xl text-[clamp(3rem,6vw,6.5rem)] font-bold leading-[.9] tracking-[-.07em]">{page.title}</h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">{page.lead}</p>
            </div>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <a href={pageWhatsappUrl} target="_blank" rel="noreferrer" className={cn(buttonVariants({ size: 'lg' }), 'h-14 rounded-full bg-[#C9FF55] px-6 font-bold text-[#11150f] hover:bg-white')}>
                <Camera className="size-5" /> Fotoğraf gönder, fiyat al <ArrowUpRight className="size-4" />
              </a>
              <a href={siteConfig.phoneHref} className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-14 rounded-full border-white/22 bg-white/8 px-6 text-white hover:bg-white hover:text-[#11150f]')}>
                <Phone className="size-4" /> {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="grid content-center bg-[#2452FF] p-7 sm:p-12 lg:p-16">
            <div className="rounded-[28px] bg-white p-6 text-[#11150f] sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[.13em] text-[#2452FF]">Değerlendirebildiğimiz ürünler</p>
              <ul className="mt-5 space-y-4">
                {page.examples.map((item) => <li key={item} className="flex items-center gap-3 border-b border-black/8 pb-4 last:border-0 last:pb-0"><Check className="size-5 text-[#2452FF]" /> <span className="font-semibold">{item}</span></li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="section-kicker">Daha doğru ön fiyat</p>
            <h2 className="section-title mt-4">Fotoğraflarda bunlar görünsün.</h2>
            <p className="mt-6 max-w-md leading-7 text-black/58">{page.detail}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {page.evaluation.map((item, index) => (
              <div key={item} className="rounded-[24px] border border-black/9 bg-white p-6">
                <span className="text-xs font-black text-[#2452FF]">0{index + 1}</span>
                <p className="mt-8 text-lg font-bold tracking-[-.025em]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto grid max-w-[1180px] gap-5 rounded-[30px] bg-[#C9FF55] p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold"><MapPin className="size-4" /> Antalya merkez</div>
            <h2 className="mt-3 text-3xl font-bold tracking-[-.045em]">Muratpaşa, Konyaaltı ve Kepez’den alım yapıyoruz.</h2>
          </div>
          <a href={pageWhatsappUrl} target="_blank" rel="noreferrer" className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#11150f] px-6 text-sm font-bold text-white">
            <MessageCircle className="size-5" /> Ücretsiz fiyat al
          </a>
        </div>
      </section>

      <SiteFooter />
      <MobileContactBar whatsappUrl={pageWhatsappUrl} />
    </main>
  );
}

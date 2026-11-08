import { Menu, MessageCircle, PhoneCall } from 'lucide-react';
import Link from 'next/link';

import { Brand } from '@/components/brand';
import { buttonVariants } from '@/components/ui/button';
import { sellWhatsappUrl, siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-black/8 bg-[#f5f3ec]/92 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" prefetch={false} aria-label="SpotEra ana sayfa" className="rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2452FF]">
          <Brand />
        </Link>

        <nav aria-label="Ana menü" className="hidden items-center gap-8 text-sm font-semibold lg:flex">
          <Link prefetch={false} className="transition-colors hover:text-[#2452FF]" href="/#nasil-calisir">Nasıl çalışır?</Link>
          <Link prefetch={false} className="transition-colors hover:text-[#2452FF]" href="/#neleri-aliyoruz">Neleri alıyoruz?</Link>
          <Link prefetch={false} className="transition-colors hover:text-[#2452FF]" href="/#neden-spotera">Neden SpotEra?</Link>
          <Link prefetch={false} className="transition-colors hover:text-[#2452FF]" href="/#iletisim">İletişim</Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={siteConfig.phoneHref}
            aria-label={`SpotEra’yı ara: ${siteConfig.phoneDisplay}`}
            className="group flex h-12 items-center gap-2 rounded-full bg-[#C9FF55] px-3 text-[#11150f] shadow-[0_8px_22px_rgba(17,21,15,.12)] transition-transform hover:-translate-y-0.5 sm:gap-3 sm:px-4"
          >
            <span className="hidden size-8 shrink-0 place-items-center rounded-full bg-[#11150f] text-white sm:grid">
              <PhoneCall className="size-4" />
            </span>
            <span className="text-left leading-none">
              <span className="hidden text-[10px] font-bold uppercase tracking-[.13em] text-black/52 sm:block">Hemen ara</span>
              <span className="block whitespace-nowrap text-[13px] font-extrabold tracking-[-.02em] sm:mt-1 sm:text-base">
                {siteConfig.phoneDisplay}
              </span>
            </span>
          </a>

          <a
            href={sellWhatsappUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'hidden h-12 rounded-full bg-[#11150f] px-5 text-sm text-white shadow-none hover:bg-[#2452FF] xl:inline-flex',
            )}
          >
            <MessageCircle className="size-4" />
            WhatsApp’tan fiyat al
          </a>
        </div>

        <Menu className="hidden" aria-hidden="true" />
      </div>
    </header>
  );
}

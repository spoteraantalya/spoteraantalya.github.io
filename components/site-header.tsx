import { Menu, MessageCircle } from 'lucide-react';
import Link from 'next/link';

import { Brand } from '@/components/brand';
import { buttonVariants } from '@/components/ui/button';
import { sellWhatsappUrl } from '@/lib/site-config';
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

        <a
          href={sellWhatsappUrl}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ size: 'lg' }),
            'h-11 rounded-full bg-[#11150f] px-5 text-sm text-white shadow-none hover:bg-[#2452FF]',
          )}
        >
          <MessageCircle className="size-4" />
          <span className="hidden sm:inline">Ücretsiz fiyat al</span>
          <span className="sm:hidden">Fiyat al</span>
        </a>

        <Menu className="hidden" aria-hidden="true" />
      </div>
    </header>
  );
}

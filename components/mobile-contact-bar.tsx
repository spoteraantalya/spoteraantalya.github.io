import { MessageCircle, Phone } from 'lucide-react';

import { sellWhatsappUrl, siteConfig } from '@/lib/site-config';

export function MobileContactBar({ whatsappUrl = sellWhatsappUrl }: { whatsappUrl?: string }) {
  return (
    <div className="fixed inset-x-3 bottom-[max(.75rem,env(safe-area-inset-bottom))] z-50 flex gap-2 rounded-full border border-black/10 bg-[#f5f3ec]/94 p-2 shadow-[0_15px_45px_rgba(17,21,15,.18)] backdrop-blur-xl sm:hidden">
      <a
        href={siteConfig.phoneHref}
        className="grid size-12 shrink-0 place-items-center rounded-full bg-white"
        aria-label={`SpotEra’yı ara: ${siteConfig.phoneDisplay}`}
      >
        <Phone className="size-5" />
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#C9FF55] text-sm font-bold text-[#11150f]"
      >
        <MessageCircle className="size-5" /> WhatsApp’tan fiyat al
      </a>
    </div>
  );
}

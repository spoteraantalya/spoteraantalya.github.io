import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from 'lucide-react';

import { Brand } from '@/components/brand';
import { sellWhatsappUrl, siteConfig } from '@/lib/site-config';

export function SiteFooter() {
  return (
    <footer id="iletisim" className="bg-[#10130f] px-5 py-8 text-white sm:px-8 sm:py-12">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid gap-10 rounded-[28px] border border-white/12 bg-white/[.04] p-6 sm:p-10 lg:grid-cols-[1.25fr_.75fr] lg:gap-16">
          <div>
            <Brand inverted />
            <h2 className="mt-10 max-w-[700px] text-4xl font-bold leading-[.98] tracking-[-.055em] sm:text-6xl">
              Eşyalarını birlikte değerlendirelim.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/64">
              Fotoğrafları WhatsApp’tan gönder; ücretsiz ön değerlendirme ve anında fiyat bilgisi için sana dönüş yapalım.
            </p>
            <p className="mt-4 text-xs font-semibold text-white/42">SpotEra, Gül Ticaret kuruluşudur.</p>
            <a
              href={sellWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex h-14 items-center gap-3 rounded-full bg-[#C9FF55] px-7 text-sm font-bold text-[#10130f] transition-transform hover:-translate-y-0.5"
            >
              WhatsApp’tan fiyat al <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="grid content-end gap-5 text-sm">
            <a href={siteConfig.phoneHref} className="group flex items-start gap-4 border-b border-white/12 pb-5">
              <Phone className="mt-0.5 size-5 text-[#C9FF55]" />
              <span>
                <span className="block text-xs font-bold uppercase tracking-[.13em] text-white/42">Telefon</span>
                <span className="mt-1 block text-lg font-semibold group-hover:text-[#C9FF55]">{siteConfig.phoneDisplay}</span>
              </span>
            </a>
            <a href={siteConfig.emailHref} className="group flex items-start gap-4 border-b border-white/12 pb-5">
              <Mail className="mt-0.5 size-5 text-[#C9FF55]" />
              <span>
                <span className="block text-xs font-bold uppercase tracking-[.13em] text-white/42">E-posta</span>
                <span className="mt-1 block font-semibold group-hover:text-[#C9FF55]">{siteConfig.email}</span>
              </span>
            </a>
            <div className="flex items-start gap-4 border-b border-white/12 pb-5">
              <MapPin className="mt-0.5 size-5 text-[#C9FF55]" />
              <span>
                <span className="block text-xs font-bold uppercase tracking-[.13em] text-white/42">Hizmet bölgesi</span>
                <span className="mt-1 block max-w-sm leading-6">{siteConfig.publicLocation}</span>
              </span>
            </div>
            <div className="flex items-start gap-4">
              <Clock3 className="mt-0.5 size-5 text-[#C9FF55]" />
              <span>
                <span className="block text-xs font-bold uppercase tracking-[.13em] text-white/42">Çalışma saatleri</span>
                <span className="mt-1 block text-lg font-semibold">{siteConfig.hours}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 px-2 pt-7 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SpotEra · Gül Ticaret kuruluşudur.</p>
          <p>Antalya · Muratpaşa · Konyaaltı · Kepez</p>
        </div>
      </div>
    </footer>
  );
}

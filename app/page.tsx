import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  Camera,
  Check,
  Clock3,
  CookingPot,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  Refrigerator,
  ShieldCheck,
  Sofa,
  Sparkles,
  Tv,
  WashingMachine,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { MobileContactBar } from '@/components/mobile-contact-bar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { buttonVariants } from '@/components/ui/button';
import { buyWhatsappUrl, sellWhatsappUrl, siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

const categories = [
  { title: 'Koltuk & oturma grubu', note: 'Koltuk takımı, köşe koltuk, berjer', icon: Sofa, color: 'bg-[#e8ddff]', slug: 'ikinci-el-koltuk-alanlar-antalya' },
  { title: 'Beyaz eşya', note: 'Buzdolabı, çamaşır ve bulaşık makinesi', icon: WashingMachine, color: 'bg-[#dce6ff]', slug: 'ikinci-el-beyaz-esya-alanlar-antalya' },
  { title: 'Yatak odası', note: 'Gardırop, yatak, baza, komodin', icon: BedDouble, color: 'bg-[#ffe1d2]', slug: 'ikinci-el-mobilya-alanlar-antalya' },
  { title: 'Yemek odası', note: 'Masa, sandalye, konsol, vitrin', icon: CookingPot, color: 'bg-[#e4f7ce]', slug: 'ikinci-el-mobilya-alanlar-antalya' },
  { title: 'TV & elektronik', note: 'Televizyon ve değerlendirilebilir elektronikler', icon: Tv, color: 'bg-[#f7e4a7]', slug: 'ikinci-el-beyaz-esya-alanlar-antalya' },
  { title: 'Komple ev eşyası', note: 'Taşınma ve ev yenilemede toplu değerlendirme', icon: Refrigerator, color: 'bg-[#d4f4ee]', slug: 'komple-ev-esyasi-alanlar-antalya' },
];

const faqs = [
  {
    q: 'İkinci el eşyam için nasıl fiyat alabilirim?',
    a: 'WhatsApp üzerinden eşyanın genel görünümünü, marka-model etiketini ve varsa kusurlarını gösteren fotoğrafları gönder. Ekibimiz fotoğrafları inceleyerek anında ön fiyat bilgisi verir.',
  },
  {
    q: 'Ekspertiz ücretli mi?',
    a: 'Hayır. SpotEra’nın eşya değerlendirmesi ve ekspertiz hizmeti ücretsizdir.',
  },
  {
    q: 'Hangi bölgelere hizmet veriyorsunuz?',
    a: 'Antalya merkezde Muratpaşa, Konyaaltı ve Kepez ilçelerinden ikinci el eşya alıyoruz.',
  },
  {
    q: 'Her gönderilen eşya satın alınıyor mu?',
    a: 'Her eşya; durumu, kullanılabilirliği ve yeniden satışa uygunluğu açısından değerlendirilir. Fotoğraf göndermek satış zorunluluğu oluşturmaz; satın alma kararı değerlendirme sonucunda netleşir.',
  },
  {
    q: 'Eşyayı siz mi alıyorsunuz?',
    a: 'Teklifte anlaşılması halinde alım planını ve adres bilgilerini sizinle netleştiriyor, eşyayı adresinizden teslim alıyoruz.',
  },
  {
    q: 'SpotEra bir spotçu mu?',
    a: 'Evet. SpotEra, Gül Ticaret bünyesinde Antalya merkezde hizmet veren modern bir ikinci el eşya ve spot alım satım markasıdır. Süreci telefon ve WhatsApp üzerinden hızlı, açık ve kolay şekilde yürütür.',
  },
  {
    q: 'İkinci el eşyamı Antalya’da nereye satabilirim?',
    a: 'Muratpaşa, Konyaaltı veya Kepez’deyseniz mobilya ve beyaz eşyanızın fotoğraflarını SpotEra’ya WhatsApp’tan gönderebilirsiniz. Ücretsiz ön değerlendirme sonrası uygun bulunursa fiyat ve teslim alma planı paylaşılır.',
  },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: 'Gül Ticaret',
  alternateName: 'SpotEra',
  description: 'Antalya Muratpaşa, Konyaaltı ve Kepez bölgelerinde ikinci el ev eşyası alım satımı.',
  telephone: siteConfig.phoneE164,
  email: siteConfig.email,
  url: siteConfig.url,
  openingHours: 'Mo-Su 09:00-20:00',
  areaServed: siteConfig.serviceAreas.map((name) => ({ '@type': 'AdministrativeArea', name })),
  image: `${siteConfig.url}/spotera-profile.png`,
  logo: `${siteConfig.url}/spotera-profile.png`,
  slogan: siteConfig.slogan,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.phoneE164,
    contactType: 'sales',
    availableLanguage: 'Turkish',
    areaServed: 'TR-07',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '09:00',
    closes: '20:00',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-x-hidden bg-[#f5f3ec] text-[#11150f]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteHeader />

      <section className="relative mx-auto max-w-[1440px] px-3 pt-3 sm:px-5 sm:pt-5 lg:px-7">
        <div className="relative min-h-[calc(100svh-108px)] overflow-hidden rounded-[26px] bg-[#161b15] sm:min-h-[720px] sm:rounded-[36px]">
          <Image
            src="/spotera-hero.jpg"
            alt="Antalya’da evindeki koltuk takımını SpotEra uzmanıyla değerlendiren müşteri"
            className="absolute inset-0 h-full w-full object-cover object-[64%_center] sm:object-center"
            width="1586"
            height="992"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,15,11,.91)_0%,rgba(12,15,11,.74)_35%,rgba(12,15,11,.16)_68%,rgba(12,15,11,.08)_100%)] max-sm:bg-[linear-gradient(180deg,rgba(12,15,11,.82)_0%,rgba(12,15,11,.55)_52%,rgba(12,15,11,.92)_100%)]" />

          <div className="relative z-10 flex min-h-[calc(100svh-108px)] flex-col justify-between px-6 py-7 sm:min-h-[720px] sm:px-10 sm:py-10 lg:px-16 lg:py-14">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#C9FF55]">
              <span className="size-2 rounded-full bg-[#C9FF55] shadow-[0_0_0_6px_rgba(201,255,85,.12)]" />
              Antalya’nın modern spotçusu
            </div>

            <div className="max-w-[720px] py-12 sm:py-16">
              <h1 className="max-w-[700px] text-[clamp(3.2rem,7vw,7.2rem)] font-bold leading-[0.88] tracking-[-0.075em] text-white">
                Eşyanı bekletme.
                <span className="block text-[#C9FF55]">Değerinde sat.</span>
              </h1>
              <p className="mt-7 max-w-[590px] text-base leading-7 text-white/78 sm:mt-9 sm:text-lg sm:leading-8">
                Mobilya ve beyaz eşyalarının fotoğraflarını gönder. Anında fiyat bilgisi al; anlaşınca adresinden biz alalım.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
                <a
                  href={sellWhatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'h-14 rounded-full bg-[#C9FF55] px-6 text-[15px] font-bold text-[#11150f] hover:bg-white sm:px-7',
                  )}
                >
                  <Camera className="size-5" />
                  Fotoğraf gönder, fiyat al
                  <ArrowUpRight className="ml-1 size-4" />
                </a>
                <a
                  href={siteConfig.phoneHref}
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'h-14 rounded-full border-white/25 bg-white/8 px-6 text-[15px] font-semibold text-white backdrop-blur hover:bg-white hover:text-[#11150f]',
                  )}
                >
                  <Phone className="size-4" /> Hemen ara
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-white/18 pt-5 text-sm font-medium text-white/86 sm:gap-x-9">
              <span className="flex items-center gap-2"><Check className="size-4 text-[#C9FF55]" /> Ücretsiz ekspertiz</span>
              <span className="flex items-center gap-2"><Clock3 className="size-4 text-[#C9FF55]" /> Anında fiyat bilgisi</span>
              <span className="flex items-center gap-2"><PackageCheck className="size-4 text-[#C9FF55]" /> Adresinden alım</span>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Hizmet bölgeleri" className="border-b border-black/10 py-5">
        <div className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-center gap-x-4 gap-y-2 px-5 text-sm font-bold uppercase tracking-[.11em] sm:gap-x-8">
          <span className="text-black/42">Antalya merkez</span>
          {siteConfig.serviceAreas.map((area) => (
            <span key={area} className="flex items-center gap-4 sm:gap-8">
              <span className="size-1.5 rounded-full bg-[#2452FF]" /> {area}
            </span>
          ))}
        </div>
      </section>

      <section id="nasil-calisir" className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div>
              <p className="section-kicker">Kolay satış</p>
              <h2 className="section-title mt-4">Üç adımda eşyanı değerlendir.</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-black/60 lg:justify-self-end lg:text-lg">
              Uzun formlar ve belirsiz bekleyişler yok. Doğru fotoğrafları gönder; teklif sürecini WhatsApp üzerinden hızlıca tamamla.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {[
              { n: '01', icon: Camera, title: 'Fotoğrafları gönder', text: 'Eşyanın genel görünümünü, marka-model bilgisini ve varsa kusurlarını göster.' },
              { n: '02', icon: MessageCircle, title: 'Fiyatını öğren', text: 'Fotoğrafları inceleyelim, ücretsiz değerlendirme ile anında fiyat bilgisi verelim.' },
              { n: '03', icon: PackageCheck, title: 'Adresinden alalım', text: 'Teklifte anlaşırsak teslim alma planını birlikte netleştirelim.' },
            ].map((step) => (
              <article key={step.n} className="group rounded-[28px] border border-black/9 bg-white p-6 transition-transform hover:-translate-y-1 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-[#11150f] text-white"><step.icon className="size-5" /></span>
                  <span className="text-sm font-bold text-black/28">{step.n}</span>
                </div>
                <h3 className="mt-12 text-2xl font-bold tracking-[-.035em]">{step.title}</h3>
                <p className="mt-3 leading-7 text-black/56">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="neleri-aliyoruz" className="rounded-[32px] bg-[#11150f] px-5 py-20 text-white sm:rounded-[48px] sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-7 lg:grid-cols-[1fr_.75fr] lg:items-end">
            <div>
              <p className="section-kicker text-[#C9FF55]">Neleri değerlendiriyoruz?</p>
              <h2 className="section-title mt-4 max-w-3xl text-white">Evindeki iyi eşyaya yeni bir yer buluyoruz.</h2>
            </div>
            <p className="max-w-xl leading-7 text-white/58 lg:justify-self-end">
              Aşağıdaki gruplar başta olmak üzere yeniden kullanıma ve satışa uygun ev eşyalarını inceliyoruz. Satın alma kararı eşyanın durumuna göre verilir.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link prefetch={false} aria-label={`${category.title} hakkında bilgi al`} href={`/hizmetler/${category.slug}`} key={category.title} className="group flex min-h-[230px] flex-col justify-between rounded-[24px] bg-white p-6 text-[#11150f] outline-none transition-transform hover:-translate-y-1 focus-visible:ring-3 focus-visible:ring-[#C9FF55] sm:p-7">
                <div className={cn('grid size-13 place-items-center rounded-2xl', category.color)}>
                  <category.icon className="size-6" strokeWidth={1.8} />
                </div>
                <div className="mt-10">
                  <div className="flex items-end justify-between gap-4">
                    <h3 className="text-xl font-bold tracking-[-.035em]">{category.title}</h3>
                    <ArrowUpRight className="size-5 shrink-0 text-black/30 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                  <p className="mt-2 text-sm leading-6 text-black/52">{category.note}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-[1360px] overflow-hidden rounded-[32px] bg-[#2452FF] text-white lg:grid-cols-2 lg:rounded-[44px]">
          <div className="p-7 sm:p-12 lg:p-16">
            <p className="section-kicker text-[#C9FF55]">Daha doğru teklif için</p>
            <h2 className="mt-4 max-w-xl text-4xl font-bold leading-[.98] tracking-[-.055em] sm:text-6xl">İyi fotoğraf, hızlı değerlendirme.</h2>
            <p className="mt-6 max-w-lg leading-7 text-white/70">
              Eşyanın durumunu net gösteren birkaç kare, ilk değerlendirmeyi hızlandırır. Fotoğrafları gün ışığında ve filtresiz çekmen yeterli.
            </p>
            <a href={sellWhatsappUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex h-13 items-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-[#11150f] transition-transform hover:-translate-y-0.5">
              WhatsApp’ı aç <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="bg-[#dce6ff] p-5 text-[#11150f] sm:p-8 lg:p-12">
            <div className="mx-auto max-w-[500px] rounded-[30px] bg-[#f7f8ff] p-5 shadow-[0_25px_70px_rgba(8,25,90,.18)] sm:p-7">
              <div className="flex items-center justify-between border-b border-black/8 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.12em] text-[#2452FF]">Fotoğraf listesi</p>
                  <p className="mt-1 font-bold">Göndermeden önce</p>
                </div>
                <Camera className="size-6 text-[#2452FF]" />
              </div>
              <ol className="mt-2">
                {[
                  ['Eşyanın tamamı', 'Önden ve yandan genel görünüm'],
                  ['Marka ve model', 'Etiket veya model numarası'],
                  ['Detaylar', 'Yakın plan yüzey ve mekanizma'],
                  ['Varsa kusurlar', 'Çizik, leke veya hasarı açıkça göster'],
                ].map(([title, text], index) => (
                  <li key={title} className="flex gap-4 border-b border-black/8 py-4 last:border-0">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#C9FF55] text-xs font-black">{index + 1}</span>
                    <span><strong className="block text-sm">{title}</strong><span className="mt-1 block text-xs leading-5 text-black/48">{text}</span></span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="neden-spotera" className="border-y border-black/9 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="section-kicker">Neden SpotEra?</p>
              <h2 className="section-title mt-4">Eski usul karmaşa yok. Net bir süreç var.</h2>
              <p className="mt-6 max-w-lg leading-7 text-black/58">
                Antalya’da spotçuya eşya satmayı daha anlaşılır, hızlı ve güven veren bir deneyime dönüştürüyoruz.
              </p>
            </div>

            <div className="grid gap-x-10 sm:grid-cols-2">
              {[
                { icon: Sparkles, title: 'Anında fiyat bilgisi', text: 'Fotoğrafları inceleyip bekletmeden ilk değerlendirmeyi paylaşıyoruz.' },
                { icon: ShieldCheck, title: 'Ücretsiz ekspertiz', text: 'Eşyanı değerlendirmek için ekspertiz ücreti istemiyoruz.' },
                { icon: MapPin, title: 'Yerel ve ulaşılabilir', text: 'Muratpaşa’daki mağazamızdan Antalya merkeze hizmet veriyoruz.' },
                { icon: PackageCheck, title: 'Adresten teslim alma', text: 'Anlaşma sonrası alım planını adresine göre birlikte oluşturuyoruz.' },
              ].map((item) => (
                <article key={item.title} className="border-t border-black/12 py-7">
                  <item.icon className="size-6 text-[#2452FF]" />
                  <h3 className="mt-5 text-lg font-bold tracking-[-.025em]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/54">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-[1360px] gap-4 lg:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-[30px] bg-[#e8ddff] p-7 sm:p-12">
            <p className="section-kicker text-[#6045a6]">Eşya mı arıyorsun?</p>
            <h2 className="mt-4 max-w-xl text-4xl font-bold leading-[1] tracking-[-.055em] sm:text-6xl">İyi eşyayı daha iyi fiyata bul.</h2>
            <p className="mt-5 max-w-xl leading-7 text-black/58">
              Güncel ikinci el mobilya ve beyaz eşya seçeneklerini öğrenmek için WhatsApp’tan bize yaz.
            </p>
            <a href={buyWhatsappUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex h-13 items-center gap-2 rounded-full bg-[#11150f] px-6 text-sm font-bold text-white transition-colors hover:bg-[#2452FF]">
              Güncel ürünleri sor <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="rounded-[30px] bg-[#C9FF55] p-7 sm:p-12">
            <MapPin className="size-7" />
            <p className="mt-10 text-sm font-bold uppercase tracking-[.12em]">Hizmet bölgesi</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-.045em]">Antalya merkezden adresine geliyoruz.</h2>
            <p className="mt-4 max-w-md leading-7 text-black/62">{siteConfig.publicLocation}</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-black/54">{siteConfig.locationNote}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                ['Muratpaşa', 'muratpasa-ikinci-el-esya-alanlar'],
                ['Konyaaltı', 'konyaalti-ikinci-el-esya-alanlar'],
                ['Kepez', 'kepez-ikinci-el-esya-alanlar'],
              ].map(([area, slug]) => (
                <Link
                  key={area}
                  href={`/hizmetler/${slug}`}
                  prefetch={false}
                  className="rounded-full border border-black/14 bg-white/48 px-4 py-2 text-xs font-bold transition-colors hover:bg-white"
                >
                  {area} ikinci el eşya
                </Link>
              ))}
            </div>
            <a href={siteConfig.phoneHref} className="mt-7 inline-flex items-center gap-2 text-sm font-bold underline decoration-2 underline-offset-4">
              Konum bilgisi için ara <Phone className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto grid max-w-[1120px] gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="section-kicker">Merak edilenler</p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-.055em] sm:text-5xl">Kısa ve net cevaplar.</h2>
          </div>
          <Accordion defaultValue={['item-0']} multiple>
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={`item-${index}`} className="border-black/12 py-2">
                <AccordionTrigger className="py-5 text-base font-bold hover:no-underline sm:text-lg">{faq.q}</AccordionTrigger>
                <AccordionContent className="max-w-2xl pb-6 text-sm leading-7 text-black/58 sm:text-base">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <SiteFooter />
      <MobileContactBar />

      <a href="#top" aria-label="Sayfanın başına dön" className="fixed bottom-7 right-7 z-40 hidden size-11 place-items-center rounded-full border border-black/10 bg-white shadow-lg lg:grid">
        <ArrowDown className="size-4 rotate-180" />
      </a>
    </main>
  );
}

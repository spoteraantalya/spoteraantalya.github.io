import type { Metadata } from 'next';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Gizlilik ve KVKK Bilgilendirmesi | SpotEra',
  description: 'SpotEra ve Gül Ticaret kişisel verilerin işlenmesine ilişkin gizlilik ve KVKK bilgilendirmesi.',
  alternates: { canonical: '/gizlilik-ve-kvkk' },
};

const sections = [
  {
    title: 'Veri sorumlusu',
    text: 'Bu internet sitesi ve SpotEra markası kapsamında veri sorumlusu Gül Ticaret’tir. Bizimle Antalya’daki hizmetlerimiz hakkında telefon veya e-posta üzerinden iletişime geçebilirsiniz.',
  },
  {
    title: 'Hangi bilgiler işlenebilir?',
    text: 'WhatsApp, telefon veya e-posta üzerinden bize ulaştığınızda ad-soyad, telefon numarası, mesaj içeriği, gönderdiğiniz eşya fotoğrafları, marka-model bilgisi ve teklif kabul edilirse teslim alma için gerekli adres, kat ve asansör bilgileri işlenebilir.',
  },
  {
    title: 'İşleme amaçları ve yöntemi',
    text: 'Bilgileriniz; eşyanızı değerlendirmek, ön fiyat veya teklif sunmak, sizinle iletişim kurmak, anlaşma halinde teslim alma planını yapmak, müşteri talebini sonuçlandırmak ve yasal yükümlülükleri yerine getirmek amacıyla; sizin tarafınızdan elektronik veya sözlü olarak iletilmesi yoluyla işlenir.',
  },
  {
    title: 'Hukuki sebepler ve aktarım',
    text: 'Kişisel veriler, bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması, hukuki yükümlülüklerin yerine getirilmesi ve temel haklarınıza zarar vermemek kaydıyla meşru menfaatler kapsamında işlenebilir. Gerektiğinde yetkili kamu kurumlarıyla ve yalnızca hizmetin yürütülmesi için destek alınan taraflarla paylaşılabilir. WhatsApp kullanıldığında veriler WhatsApp/Meta altyapısı üzerinden de işlenebilir.',
  },
  {
    title: 'Haklarınız',
    text: '6698 sayılı Kişisel Verilerin Korunması Kanunu’nun 11. maddesi kapsamındaki taleplerinizi kimliğinizi ve talebinizi açıkça belirterek e-posta yoluyla Gül Ticaret’e iletebilirsiniz. Başvurular, mevzuatta öngörülen süre ve usule göre değerlendirilir.',
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ec] text-[#11150f]">
      <SiteHeader />
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[980px]">
          <p className="section-kicker">Gül Ticaret · SpotEra</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[.95] tracking-[-.06em] sm:text-7xl">Gizlilik ve KVKK bilgilendirmesi</h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-black/60 sm:text-lg">
            Eşyanız için fiyat alırken paylaştığınız bilgilerin hangi amaçlarla işlendiğini açık ve anlaşılır biçimde bilmenizi önemsiyoruz.
          </p>

          <div className="mt-14 grid gap-4">
            {sections.map((section) => (
              <section key={section.title} className="rounded-[26px] border border-black/9 bg-white p-6 sm:p-8">
                <h2 className="text-xl font-bold tracking-[-.035em]">{section.title}</h2>
                <p className="mt-3 leading-7 text-black/60">{section.text}</p>
              </section>
            ))}
          </div>

          <div className="mt-5 rounded-[26px] bg-[#C9FF55] p-6 sm:p-8">
            <h2 className="text-xl font-bold tracking-[-.035em]">İletişim</h2>
            <p className="mt-3 leading-7 text-black/64">Gül Ticaret / SpotEra · Antalya</p>
            <p className="mt-1 font-semibold">{siteConfig.email} · {siteConfig.phoneDisplay}</p>
            <p className="mt-4 text-sm leading-6 text-black/56">Son güncelleme: 4 Eylül 2026</p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

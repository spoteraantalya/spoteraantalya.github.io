export const siteConfig = {
  name: 'SpotEra',
  slogan: 'İkinci elin yeni dönemi.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://spoteraantalya.com',
  analyticsId: 'G-MHLCB62YX1',
  phoneDisplay: '0541 541 32 89',
  phoneE164: '+905415413289',
  phoneHref: 'tel:+905415413289',
  email: 'spoteraantalya@gmail.com',
  emailHref: 'mailto:spoteraantalya@gmail.com',
  whatsappBase: 'https://wa.me/905415413289',
  publicLocation: 'Antalya merkez · Muratpaşa, Konyaaltı ve Kepez',
  locationNote: 'Konum bilgisi için bizi arayın veya WhatsApp’tan yazın.',
  hours: 'Her gün 09:00–20:00',
  serviceAreas: ['Muratpaşa', 'Konyaaltı', 'Kepez'],
} as const;

export function whatsappUrl(message: string) {
  return `${siteConfig.whatsappBase}?text=${encodeURIComponent(message)}`;
}

export const sellWhatsappUrl = whatsappUrl(
  'Merhaba SpotEra, ikinci el eşyam için fiyat almak istiyorum. İlçem: … Fotoğrafları gönderiyorum.',
);

export const buyWhatsappUrl = whatsappUrl(
  'Merhaba SpotEra, güncel satılık ikinci el eşyalarınızı görmek istiyorum.',
);

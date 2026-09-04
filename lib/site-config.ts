export const siteConfig = {
  name: 'SpotEra',
  slogan: 'İkinci elin yeni dönemi.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://spoteraantalya.com',
  analyticsId: 'G-MHLCB62YX1',
  phoneDisplay: '0532 277 54 00',
  phoneE164: '+905322775400',
  phoneHref: 'tel:+905322775400',
  email: 'spoteraantalya@gmail.com',
  emailHref: 'mailto:spoteraantalya@gmail.com',
  whatsappBase: 'https://wa.me/905322775400',
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

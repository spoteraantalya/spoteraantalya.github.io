export type ServicePage = {
  slug: string;
  shortTitle: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  examples: string[];
  evaluation: string[];
  detail: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: 'ikinci-el-mobilya-alanlar-antalya',
    shortTitle: 'Mobilya',
    title: 'Antalya’da ikinci el mobilya alanlar',
    metaTitle: 'Antalya İkinci El Mobilya Alanlar | SpotEra',
    metaDescription: 'Antalya’da ikinci el mobilyalarınızı SpotEra’ya satın. Fotoğraf gönderin, ücretsiz ekspertiz ve anında fiyat bilgisi alın.',
    lead: 'Muratpaşa, Konyaaltı ve Kepez’de yeniden kullanıma uygun mobilyalarınızı fotoğraflarla değerlendiriyor, anlaşma halinde adresinizden teslim alıyoruz.',
    examples: ['Koltuk ve oturma grupları', 'Yemek masası ve sandalyeler', 'Gardırop ve yatak odası mobilyaları', 'Konsol, vitrin ve sehpalar'],
    evaluation: ['Genel görünüm ve ölçüler', 'Kullanım durumu', 'Marka ve model bilgisi', 'Kumaş, yüzey ve mekanizma durumu'],
    detail: 'Mobilyanın tamamını, kumaş veya yüzey detaylarını ve varsa kusurlarını gösteren aydınlık fotoğraflar ilk değerlendirmeyi hızlandırır.',
  },
  {
    slug: 'ikinci-el-beyaz-esya-alanlar-antalya',
    shortTitle: 'Beyaz eşya',
    title: 'Antalya’da ikinci el beyaz eşya alanlar',
    metaTitle: 'Antalya İkinci El Beyaz Eşya Alanlar | SpotEra',
    metaDescription: 'Antalya’da buzdolabı, çamaşır ve bulaşık makineniz için hızlı fiyat alın. SpotEra ücretsiz ekspertizle değerlendirir.',
    lead: 'Kullanılabilir durumdaki beyaz eşyalarınızı marka-model ve durum bilgisiyle inceliyor, Muratpaşa, Konyaaltı ve Kepez’den alım yapıyoruz.',
    examples: ['Buzdolabı ve derin dondurucu', 'Çamaşır makinesi', 'Bulaşık makinesi', 'Fırın ve ocak grubu'],
    evaluation: ['Marka ve model etiketi', 'Ürünün çalışma durumu', 'Dış yüzey ve iç bölüm fotoğrafları', 'Varsa bilinen arıza veya eksikler'],
    detail: 'Beyaz eşyanın ön, iç ve etiket fotoğraflarını gönderin. Çalışma durumunu açıkça belirtmeniz daha doğru bir ön değerlendirme yapılmasını sağlar.',
  },
  {
    slug: 'ikinci-el-koltuk-alanlar-antalya',
    shortTitle: 'Koltuk takımı',
    title: 'Antalya’da ikinci el koltuk alanlar',
    metaTitle: 'Antalya İkinci El Koltuk Alanlar | SpotEra',
    metaDescription: 'Koltuk takımı, köşe koltuk ve berjerlerinizi Antalya’da SpotEra’ya satın. Fotoğraf gönderin, anında fiyat bilgisi alın.',
    lead: 'Koltuk takımı, köşe koltuk ve berjerleri fotoğraftan ön değerlendiriyor; teklif kabul edildiğinde alım planını sizinle netleştiriyoruz.',
    examples: ['Koltuk takımları', 'Köşe koltuklar', 'Çekyat ve kanepeler', 'Berjer ve tekli koltuklar'],
    evaluation: ['Takımın bütün parçaları', 'Kumaş ve minder durumu', 'İskelet ve açılır mekanizma', 'Ölçü ve kullanım bilgisi'],
    detail: 'Takımın tüm parçalarını aynı karede ve ayrı ayrı çekin. Kumaşın yakın planı ile açılır-kapanır mekanizma varsa bu bölümü de gösterin.',
  },
  {
    slug: 'komple-ev-esyasi-alanlar-antalya',
    shortTitle: 'Komple ev eşyası',
    title: 'Antalya’da komple ev eşyası alanlar',
    metaTitle: 'Antalya Komple Ev Eşyası Alanlar | SpotEra',
    metaDescription: 'Taşınırken veya evinizi yenilerken komple ev eşyalarınızı SpotEra’ya satın. Antalya merkezde ücretsiz ekspertiz alın.',
    lead: 'Taşınma, ev yenileme veya eşya değişimi sırasında birden fazla ürünü tek tek uğraşmadan toplu olarak değerlendirebilirsiniz.',
    examples: ['Salon ve oturma odası', 'Yatak odası takımları', 'Yemek odası mobilyaları', 'Beyaz eşya grupları'],
    evaluation: ['Oda oda genel fotoğraflar', 'Ürünlerin ayrı yakın planları', 'Marka-model bilgileri', 'Teslim alma koşulları'],
    detail: 'Önce her odanın genel görüntüsünü, ardından ürünleri ayrı ayrı gönderin. Böylece toplu alım için daha hızlı ve düzenli bir değerlendirme yapılabilir.',
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

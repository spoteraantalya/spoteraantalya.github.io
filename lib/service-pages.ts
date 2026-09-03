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
  {
    slug: 'muratpasa-ikinci-el-esya-alanlar',
    shortTitle: 'Muratpaşa',
    title: 'Muratpaşa’da ikinci el eşya alanlar',
    metaTitle: 'Muratpaşa İkinci El Eşya Alanlar | SpotEra',
    metaDescription: 'Muratpaşa’da ikinci el eşyanızı SpotEra’ya satın. Fotoğrafları WhatsApp’tan gönderin; ücretsiz ekspertiz ve anında fiyat bilgisi alın.',
    lead: 'Muratpaşa’da taşınırken, evinizi yenilerken veya kullanmadığınız eşyaları değerlendirirken fotoğrafları WhatsApp’tan gönderin; anlaşma halinde adresinizden teslim alalım.',
    examples: ['Koltuk ve oturma grupları', 'Buzdolabı ve beyaz eşya', 'Yatak ve yemek odası mobilyaları', 'Komple ev eşyası'],
    evaluation: ['Genel görünüm fotoğrafları', 'Marka, model ve ölçüler', 'Kullanım durumu ve kusurlar', 'Kat ve asansör bilgisi'],
    detail: 'Şehir merkezindeki apartman ve sitelerde alım planını doğru yapabilmemiz için eşyanın fotoğraflarına ek olarak kat, asansör ve söküm gereksinimi bilgisini paylaşın.',
  },
  {
    slug: 'konyaalti-ikinci-el-esya-alanlar',
    shortTitle: 'Konyaaltı',
    title: 'Konyaaltı’nda ikinci el eşya alanlar',
    metaTitle: 'Konyaaltı İkinci El Eşya Alanlar | SpotEra',
    metaDescription: 'Konyaaltı’nda ikinci el mobilya ve beyaz eşyanız için hızlı fiyat alın. SpotEra ücretsiz ekspertizle değerlendirir, anlaşınca adresinizden alır.',
    lead: 'Konyaaltı’nda ev değişikliği, taşınma veya eşya yenileme sırasında satmak istediğiniz mobilya ve beyaz eşyaları hızlı ve anlaşılır bir süreçle değerlendiriyoruz.',
    examples: ['Koltuk, köşe takımı ve berjer', 'Beyaz eşya grupları', 'Yatak ve yemek odası takımları', 'Toplu ev eşyası'],
    evaluation: ['Oda oda genel fotoğraflar', 'Ürünlerin yakın planları', 'Marka-model bilgileri', 'Teslim alma koşulları'],
    detail: 'Tek ürün veya komple ev eşyası için önce genel görüntüleri, sonra her ürünün yakın planını gönderin. Taşınma tarihinizi belirtmeniz planlamayı hızlandırır.',
  },
  {
    slug: 'kepez-ikinci-el-esya-alanlar',
    shortTitle: 'Kepez',
    title: 'Kepez’de ikinci el eşya alanlar',
    metaTitle: 'Kepez İkinci El Eşya Alanlar | SpotEra',
    metaDescription: 'Kepez’de ikinci el ev eşyanızı kolayca satın. WhatsApp’tan fotoğraf gönderin; SpotEra’dan ücretsiz ekspertiz ve anında fiyat bilgisi alın.',
    lead: 'Kepez’de kullanmadığınız mobilya, beyaz eşya ve komple ev eşyalarını fotoğraftan ön değerlendiriyor; teklif kabul edildiğinde teslim alma planını birlikte netleştiriyoruz.',
    examples: ['Mobilya ve koltuk takımları', 'Buzdolabı ve çamaşır makinesi', 'Masa, sandalye ve gardırop', 'Komple ev eşyası'],
    evaluation: ['Eşyanın tamamını gösteren kare', 'Marka ve model etiketi', 'Çalışma ve kullanım durumu', 'Varsa hasar ve eksikler'],
    detail: 'Eşyanın tamamını, etiketini ve varsa kusurlarını aydınlık fotoğraflarla gösterin. Adres, kat ve asansör bilgisini teklif kabulünden sonra planlama için paylaşabilirsiniz.',
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

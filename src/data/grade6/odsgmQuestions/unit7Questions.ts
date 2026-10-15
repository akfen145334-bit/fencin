import { LgsQuestion } from '../../../types/curriculum';

// ============================================================================
// 6. SINIF 7. ÜNİTE: BİYOÇEŞİTLİLİK VE ÇEVRE ETKİLEŞİMİ (TEST 14, 15)
// ============================================================================

export const odsgmGrade6Unit7Questions: LgsQuestion[] = [
  // --- TEST 14: BİYOÇEŞİTLİLİK ---
  {
    id: 67101,
    subTopicId: 'g6-u7-sub1',
    contextTitle: 'Yaşam Alanlarında Biyoçeşitlilik Zenginliği',
    scenario: 'Bir bölgedeki tüm canlı türlerinin sayı ve çeşitçe zenginliğine biyoçeşitlilik denir.',
    questionPrompt: 'Aşağıda verilen yaşam alanlarından hangisinde biyoçeşitlilik en zengindir?',
    options: [
      { key: 'A', text: 'Ağaç (30 çeşit), Böcek (50 çeşit), Kuş (70 çeşit), Çalı (20 çeşit)' },
      { key: 'B', text: 'Ağaç (10 çeşit), Böcek (30 çeşit), Kuş (80 çeşit), Çalı (5 çeşit)' },
      { key: 'C', text: 'Ağaç (50 çeşit), Böcek (50 çeşit), Kuş (70 çeşit), Çalı (90 çeşit)' },
      { key: 'D', text: 'Ağaç (5 çeşit), Böcek (30 çeşit), Kuş (10 çeşit), Çalı (7 çeşit)' }
    ],
    correctAnswer: 'A',
    explanation: 'Farklı canlı sınıflarından dengeli ve yüksek sayıda tür barındıran yaşam alanları yüksek biyoçeşitliliğe sahiptir.',
    skillTag: 'Tablo Yorumlama',
    cognitiveLevel: 'Tür Çeşitliliği Karşılaştırması',
    theme: 'Biyoçeşitlilik Kavramı'
  },
  {
    id: 67102,
    subTopicId: 'g6-u7-sub1',
    contextTitle: 'Biyoçeşitliliğin Sağlık ve Ekonomi Üzerindeki Rolü',
    scenario: 'Bitkiler ve hayvanlar insan yaşamında ilaç, giyim, mobilya ve gıda üretiminde doğrudan ekonomik değer taşır.',
    questionPrompt: 'Aşağıdakilerden hangisi bitkilerin doğrudan sağlık ve ekonomi anlamında sağladığı yararlardan biri değildir?',
    options: [
      { key: 'A', text: 'Ormanların yabani hayvanlara doğal barınak sağlaması' },
      { key: 'B', text: 'Söğüt ağacı kabuğundan aspirin ham maddesi ilaç üretimi' },
      { key: 'C', text: 'Meşe ağacından mobilya ve inşaat kerestesi üretimi' },
      { key: 'D', text: 'Pamuk bitkisinden tekstil ipliği ve kumaş üretimi' }
    ],
    correctAnswer: 'A',
    explanation: 'Ormanların hayvanlara barınak olması ekolojik bir dengedir. B (ilaç), C (mobilya) ve D (iplik) ise doğrudan insan sağlığı ve ülke ekonomisi için ekonomik yararlardır.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Ekonomik Yarar vs Ekolojik Yarar',
    theme: 'Biyoçeşitliliğin Önemi'
  },
  {
    id: 67103,
    subTopicId: 'g6-u7-sub1',
    contextTitle: 'Nesli Tükenen ve Koruma Altındaki Canlılar',
    scenario: 'Canlılar: Dinozor, Mamut, Anadolu kaplanı, Van kedisi.',
    questionPrompt: 'Aşağıda verilen canlılardan hangisinin nesli tamamen tükenmemiştir?',
    options: [
      { key: 'A', text: 'Dinozor' },
      { key: 'B', text: 'Mamut' },
      { key: 'C', text: 'Anadolu kaplanı' },
      { key: 'D', text: 'Van kedisi' }
    ],
    correctAnswer: 'D',
    explanation: 'Dinozor ve mamut dünyada, Anadolu kaplanı ise ülkemizde nesli tükenmiş canlılardır. Van kedisi koruma altında olup nesli tükenmemiştir.',
    skillTag: 'Temel Bilgi & Mantık',
    cognitiveLevel: 'Nesli Tükenen Canlılar',
    theme: 'Nesli Tükenen ve Tehlikedeki Türler'
  },
  {
    id: 67104,
    subTopicId: 'g6-u7-sub1',
    contextTitle: 'Canlıların Yok Olmasına Yol Açan İnsan Faaliyetleri',
    scenario: 'I. Sanayi atıkları ve çevre kirliliği\nII. Aşırı ve kaçak avlanma\nIII. Doğal ortamda canlı türleri arasındaki besin rekabeti\nIV. Ormanlık alanların yakılarak imara açılması',
    questionPrompt: 'Yukarıda verilenlerden hangileri doğrudan insan faaliyetleri sonucunda ortaya çıkan tehditlerdir?',
    options: [
      { key: 'A', text: 'I, II ve III.' },
      { key: 'B', text: 'I, II ve IV.' },
      { key: 'C', text: 'II ve III.' },
      { key: 'D', text: 'III ve IV.' }
    ],
    correctAnswer: 'B',
    explanation: 'Çevre kirliliği (I), aşırı avlanma (II) ve ormanların imara açılması (IV) insan kaynaklıdır. Tür içi rekabet (III) ise doğanın kendi biyolojik dengesidir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'İnsan Etkisi vs Doğal Süreçler',
    theme: 'Biyoçeşitliliği Tehdit Eden Faktörler'
  },
  {
    id: 67105,
    subTopicId: 'g6-u7-sub1',
    contextTitle: 'Biyolojik Çeşitliliği Korumaya Yönelik Çevre Dostu Yöntem',
    scenario: 'İnsan uygulamaları ve çevre faktörleri biyolojik çeşitliliği etkiler.',
    questionPrompt: 'Aşağıdakilerden hangisi biyolojik çeşitliliği tehdit eden zararlı bir etmen DEĞİLDİR?',
    options: [
      { key: 'A', text: 'Toprak erozyonu' },
      { key: 'B', text: 'Organik tarım uygulamaları' },
      { key: 'C', text: 'Aşırı ve yasaklı avlanma' },
      { key: 'D', text: 'Küresel ısınma ve iklim krizi' }
    ],
    correctAnswer: 'B',
    explanation: 'Organik tarım kimyasal gübre ve ilaç kullanmadan toprağı ve yer altı sularını koruyan çevre dostu bir üretimdir; biyoçeşitliliği tehdit etmez, aksine korur.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Çevre Dostu Uygulamalar',
    theme: 'Biyoçeşitliliğin Korunması'
  },
  {
    id: 67106,
    subTopicId: 'g6-u7-sub1',
    contextTitle: 'Uydu Fotoğraflarında Yeşil Alan Kaybının Sebepleri',
    scenario: 'Uydu fotoğraflarında büyük şehirlerde son 20 yılda yeşil alan miktarının hızla azalarak yerini betonlaşmaya bıraktığı görülmektedir.',
    questionPrompt: 'Aşağıdakilerden hangisi bu yeşil alan kaybına neden olan etkenlerden biri değildir?',
    options: [
      { key: 'A', text: 'Hızlı nüfus artışı' },
      { key: 'B', text: 'Çarpık ve plansız şehirleşme' },
      { key: 'C', text: 'Hızlı sanayileşme ve fabrika alanları' },
      { key: 'D', text: 'Biyolojik çeşitliliğin artması' }
    ],
    correctAnswer: 'D',
    explanation: 'Yeşil alan kaybı nüfus artışı, betonlaşma ve sanayileşmeden kaynaklanır. Biyolojik çeşitlilik artışı yeşil alan kaybının nedeni değil, yeşil alanlar yok oldukça azalan bir sonuçtur.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Neden-Sonuç İlişkisi',
    theme: 'Habitat Kaybı ve Şehirleşme'
  },
  {
    id: 67107,
    subTopicId: 'g6-u7-sub1',
    contextTitle: 'Anadolu Kaplanının Neslinin Tükenmesi Sebepleri',
    scenario: 'Ülkemizde geçmişte yaşamış ancak bilinçsiz avlanma ve yaşam alanı tahribatı nedeniyle nesli tükenmiş yırtıcı memeli Anadolu kaplanıdır.',
    questionPrompt: 'Bu canlının neslinin tükenmesi ile ilgili yapılan aşağıdaki yorumlardan hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Kürk ve postu için aşırı avlanması sonucu yok olmuş olabilir.' },
      { key: 'B', text: 'Yaşadığı ormanlık alandaki su kaynaklarının kirlenmesi etkili olmuştur.' },
      { key: 'C', text: 'Aşırı otlatma sonucu canlının doğrudan besin kaynağı tükenmiştir.' },
      { key: 'D', text: 'Doğal yaşam alanı insanlar tarafından parçalanıp tahrip edilmiştir.' }
    ],
    correctAnswer: 'C',
    explanation: 'Anadolu kaplanı etçil (karnivor) bir yırtıcıdır. Ot ile beslenmez; otlakların azalması kaplanın doğrudan besini olamaz (avladığı otçul hayvanları dolaylı etkileyebilir ama kaplan ot yemez).',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Besin Ağı ve Nesil Tükenme Mantığı',
    theme: 'Nesli Tükenen Türler'
  },
  {
    id: 67108,
    subTopicId: 'g6-u7-sub1',
    contextTitle: 'Çevre Kirliliğini Önleme Önerileri',
    scenario: 'Öğrenciler çevre kirliliğini ve atık miktarını azaltmak için çeşitli öneriler sunmaktadır.',
    questionPrompt: 'Öğrencilerin sunduğu aşağıdaki önerilerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Enerjisi yüksek olan kömür gibi fosil yakıtlar daha çok kullanılmalıdır.' },
      { key: 'B', text: 'Geri dönüşümlü ve tekrar kullanılabilir ürünler tercih edilmelidir.' },
      { key: 'C', text: 'Kullanılmış kızartma yağları lavaboya dökülerek uzaklaştırılmalıdır.' },
      { key: 'D', text: 'Bireysel özel araç kullanımı teşvik edilmelidir.' }
    ],
    correctAnswer: 'B',
    explanation: 'Geri dönüştürülebilir ürünlerin kullanılması hammadde tüketimini azaltır, çöp dağlarını önler ve çevre kirliliğini engeller. Yağlar lavaboya dökülürse 1 litre yağ 1 milyon litre suyu zehirler.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Geri Dönüşüm Bilinci',
    theme: 'Çevre Koruma Uygulamaları'
  },
  {
    id: 67109,
    subTopicId: 'g6-u7-sub1',
    contextTitle: 'Biyoçeşitlilik Tehditleri Doğruluk Analizi',
    scenario: '(...) Doğal afetler canlıların yaşam alanlarını tahrip edebilir.\n(...) Küresel ısınma biyoçeşitliliği olumsuz etkiler.\n(...) Erozyon ve orman yangınları biyoçeşitliliği tehdit eder.',
    questionPrompt: 'Yukarıdaki cümlelerin başına sırasıyla D/Y yazıldığında hangi seçenek elde edilir?',
    options: [
      { key: 'A', text: 'D - D - Y' },
      { key: 'B', text: 'Y - Y - D' },
      { key: 'C', text: 'D - D - D' },
      { key: 'D', text: 'Y - Y - Y' }
    ],
    correctAnswer: 'C',
    explanation: 'Doğal afetler habitatı bozar (D), küresel ısınma iklim kuşaklarını değiştirerek türleri tehdit eder (D), erozyon ve yangınlar toprak ve orman örtüsünü yok eder (D). Üç ifade de doğrudur: D - D - D.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Çevre Sorunları Doğruluk Değerlendirmesi',
    theme: 'Biyoçeşitlilik Tehditleri'
  },
  {
    id: 67110,
    subTopicId: 'g6-u7-sub1',
    contextTitle: 'Nesli Tehlikedeki Canlıları Koruma Tedbirleri',
    scenario: 'I. Milli parklar ve tabiat koruma alanları oluşturulmalıdır.\nII. Risk altındaki yaban hayvanlarının avlanması tamamen yasaklanmalıdır.\nIII. İnsanların bu vahşi hayvanları evlerine alıp beslemelerine izin verilmelidir.',
    questionPrompt: 'Nesli tükenme tehlikesi altındaki canlıları korumak için hangi uygulamalar yapılabilir?',
    options: [
      { key: 'A', text: 'I ve II.' },
      { key: 'B', text: 'I ve III.' },
      { key: 'C', text: 'II ve III.' },
      { key: 'D', text: 'I, II ve III.' }
    ],
    correctAnswer: 'A',
    explanation: 'Doğal tabiat parkları ve av yasakları koruma sağlar (I ve II). Yaban hayvanlarının evde beslenmesi ekolojik dengeden koparır ve hayvanın ölümüne yol açar (III yanlıştır).',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Koruma Biyolojisi İlkeleri',
    theme: 'Türlerin Korunması'
  },
  {
    id: 67111,
    subTopicId: 'g6-u7-sub1',
    contextTitle: 'Çevre Kirliliği Posterinde Hatalı Bilgi',
    scenario: 'Afişteki maddeler:\nI. Kâğıt, plastik, cam ve pil geri dönüşüme atılmalıdır.\nII. Doğal bitki örtüsü korunmalı ve yeşil alanlar artırılmalıdır.\nIII. Araçların egzoz emisyon ölçümleri zamanında yaptırılmalıdır.\nIV. Tarımda ürün miktarını artırmak için kimyasal aşırı gübreleme teşvik edilmelidir.',
    questionPrompt: 'Buna göre posterde verilen hangi bilgi hatalıdır?',
    options: [
      { key: 'A', text: 'I.' },
      { key: 'B', text: 'II.' },
      { key: 'C', text: 'III.' },
      { key: 'D', text: 'IV.' }
    ],
    correctAnswer: 'D',
    explanation: 'Aşırı kimyasal gübreleme toprak yapısını bozar, yağmur sularıyla yer altı sularına ve göllere karışarak su kirliliğine (ötrofikasyona) yol açar. Aşırı gübreleme asla teşvik edilmemelidir.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Çevre Posteri Hata Bulma',
    theme: 'Toprak ve Su Kirliliği'
  },
  {
    id: 67112,
    subTopicId: 'g6-u7-sub1',
    contextTitle: 'Bölgedeki Biyoçeşitliliği Doğrudan Belirleyen Faktörler',
    scenario: 'Bir bölgeye ait özellikler: 1-İklim koşulları, 2-Yeryüzü şekilleri, 3-Toprak yapısı, 4-Yer altındaki madenler.',
    questionPrompt: 'Yukarıdaki özelliklerden hangisi bölgedeki biyoçeşitliliği doğrudan etkilemez?',
    options: [
      { key: 'A', text: '1' },
      { key: 'B', text: '2' },
      { key: 'C', text: '3' },
      { key: 'D', text: '4' }
    ],
    correctAnswer: 'D',
    explanation: 'İklim (sıcaklık/yağış), yeryüzü şekilleri (dağlık/ova) ve toprak türü bitki ve hayvan yaşamını doğrudan belirler. Yer altındaki metalik maden yatakları ise yeryüzündeki canlı çeşitliliğini doğrudan etkilemez.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Ekolojik Faktörler Ayrımı',
    theme: 'Biyoçeşitliliği Etkileyen Faktörler'
  },

  // --- TEST 15: İNSAN VE ÇEVRE ETKİLEŞİMİ ---
  {
    id: 67201,
    subTopicId: 'g6-u7-sub2',
    contextTitle: 'Ham Petrolün İşlenmesiyle Elde Edilen Yakıtlar',
    scenario: 'Yakıtlar:\nI. Gaz yağı\nII. Odun\nIII. Taş kömürü',
    questionPrompt: 'Yukarıda verilen yakıtlardan hangileri ham petrolün rafineride işlenmesiyle elde edilir?',
    options: [
      { key: 'A', text: 'Yalnız I.' },
      { key: 'B', text: 'I ve II.' },
      { key: 'C', text: 'II ve III.' },
      { key: 'D', text: 'I, II ve III.' }
    ],
    correctAnswer: 'A',
    explanation: 'Gaz yağı, benzin, mazot ve fuel-oil ham petrolün ayrımsal damıtılmasıyla elde edilen sıvı petrol türevleridir. Odun bitkiseldir; taş kömürü ise yer altından çıkarılan katı madendir.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Fosil Yakıt Türevleri',
    theme: 'Petrol ve Türevleri'
  },
  {
    id: 67202,
    subTopicId: 'g6-u7-sub2',
    contextTitle: 'Yakıtların Sınıflandırılması ve Enerji Kaynağı',
    scenario: 'I. Fiziksel hallerine göre katı, sıvı ve gaz yakıtlar olarak üçe ayrılırlar.\nII. Petrol, kömür ve doğal gaz fosil yakıtlardır.\nIII. Fosil yakıtların içerisindeki enerjinin temel kaynağı milyonlarca yıl önce fotosentezle depolanan Güneş enerjisidir.',
    questionPrompt: 'Yakıtlar ile ilgili yukarıdaki yargılardan hangileri doğrudur?',
    options: [
      { key: 'A', text: 'Yalnız I.' },
      { key: 'B', text: 'I ve II.' },
      { key: 'C', text: 'II ve III.' },
      { key: 'D', text: 'I, II ve III.' }
    ],
    correctAnswer: 'D',
    explanation: 'Tüm fosil yakıtlar bitki ve hayvan kalıntılarından oluştuğu için kimyasal bağlarındaki enerjinin kökeni Güneş’tir. Katı, sıvı, gaz olarak üçe ayrılırlar. Tümü doğrudur.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Yakıtların Doğası ve Kökeni',
    theme: 'Yakıt Türleri'
  },
  {
    id: 67203,
    subTopicId: 'g6-u7-sub2',
    contextTitle: 'Fiziksel Hallerine Göre Yakıt Gruplandırması',
    scenario: 'Yakıt çeşitleri: Benzin, Mazot, Gaz yağı, Odun kömürü.',
    questionPrompt: 'Aşağıdaki yakıt çeşitlerinden hangisi fiziksel hali bakımından diğerlerinden farklı bir gruptadır?',
    options: [
      { key: 'A', text: 'Benzin' },
      { key: 'B', text: 'Mazot' },
      { key: 'C', text: 'Gaz yağı' },
      { key: 'D', text: 'Odun Kömürü' }
    ],
    correctAnswer: 'D',
    explanation: 'Benzin, mazot ve gaz yağı sıvı yakıtlardır; odun kömürü ise katı bir yakıttır.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Fiziksel Hal Sınıflandırması',
    theme: 'Katı ve Sıvı Yakıtlar'
  },
  {
    id: 67204,
    subTopicId: 'g6-u7-sub2',
    contextTitle: 'Fosil Yakıt Türleri',
    scenario: 'Enerji kaynakları: I. Doğal gaz, II. Petrol, III. Rüzgâr.',
    questionPrompt: 'Yukarıdakilerden hangileri fosil yakıtlardandır?',
    options: [
      { key: 'A', text: 'Yalnız I.' },
      { key: 'B', text: 'I ve II.' },
      { key: 'C', text: 'I ve III.' },
      { key: 'D', text: 'I, II ve III.' }
    ],
    correctAnswer: 'B',
    explanation: 'Doğal gaz ve petrol yer altında milyonlarca yılda oluşan fosil yakıtlardır. Rüzgâr ise tükenmeyen yenilenebilir enerji kaynağıdır.',
    skillTag: 'Temel Bilgi & Mantık',
    cognitiveLevel: 'Fosil vs Yenilenebilir Enerji',
    theme: 'Fosil Yakıtlar'
  },
  {
    id: 67205,
    subTopicId: 'g6-u7-sub2',
    contextTitle: 'Sıvı Yakıtlara Örnek',
    scenario: 'Yakıt türleri fiziksel hallerine göre katı, sıvı ve gaz olarak ayrılır.',
    questionPrompt: 'Aşağıdakilerden hangisi sıvı yakıtlara örnek olarak gösterilebilir?',
    options: [
      { key: 'A', text: 'Fuel-oil' },
      { key: 'B', text: 'Linyit' },
      { key: 'C', text: 'Taş kömürü' },
      { key: 'D', text: 'Odun' }
    ],
    correctAnswer: 'A',
    explanation: 'Linyit, taş kömürü ve odun katı yakıtlardır; kaloriferlerde ve sanayide kullanılan fuel-oil ise sıvı petrol yakıtıdır.',
    skillTag: 'Temel Bilgi & Mantık',
    cognitiveLevel: 'Sıvı Yakıt Örnekleri',
    theme: 'Sıvı Yakıtlar'
  },
  {
    id: 67206,
    subTopicId: 'g6-u7-sub2',
    contextTitle: 'Fosil Yakıtların Tahmini Tükenme Süresi Tablosu',
    scenario: 'Milyonlarca yılda oluşan fosil yakıtların bugünkü tüketim hızıyla kalan kullanım süreleri:\n• Kömür: 114 yıl\n• Doğal Gaz: 53 yıl\n• Petrol: 51 yıl',
    questionPrompt: 'Tablodaki verilerden hareketle aşağıdaki yorumlardan hangisine ulaşılamaz?',
    options: [
      { key: 'A', text: 'Fosil yakıtların kullanım sürelerinin azalması tasarruflu olmamız gerektiğini gösterir.' },
      { key: 'B', text: 'Geniş çapta tüketilen bu yakıtların tükenmesi geleceğimizi tehdit etmektedir.' },
      { key: 'C', text: 'Kömürün kalan kullanım süresinin uzun olması, petrolden daha az kullanıldığını kanıtlar.' },
      { key: 'D', text: 'Fosil yakıtların tükenme tehlikesi yenilenebilir alternatif enerjilere yönelmemizi gerektirir.' }
    ],
    correctAnswer: 'C',
    explanation: 'Kömürün tükenme süresinin daha uzun olması sadece Dünya\'daki yeraltı kömür rezervlerinin petrol ve gaza göre çok daha fazla olmasından kaynaklanır; daha az tüketildiğini göstermez.',
    skillTag: 'Tablo Yorumlama',
    cognitiveLevel: 'Tablo Verilerinden Hatalı Çıkarım Tespiti',
    theme: 'Fosil Yakıt Rezervleri ve Gelecek'
  },
  {
    id: 67207,
    subTopicId: 'g6-u7-sub2',
    contextTitle: 'Katı Yakıt Olmayan Madde',
    scenario: 'Yakıtlar: LPG, Odun, Kok kömürü, Antrasit.',
    questionPrompt: 'Aşağıdakilerden hangisi katı yakıtlardan değildir?',
    options: [
      { key: 'A', text: 'LPG (Sıvılaştırılmış Petrol Gazı)' },
      { key: 'B', text: 'Odun' },
      { key: 'C', text: 'Kok kömürü' },
      { key: 'D', text: 'Antrasit' }
    ],
    correctAnswer: 'A',
    explanation: 'Odun, kok kömürü ve antrasit katı yakıtlardır. LPG (Likid Petrol Gazı) tüplerde ve araçlarda kullanılan gaz yakıttır.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Gaz Yakıt Tanıma',
    theme: 'Gaz Yakıtlar ve LPG'
  },
  {
    id: 67208,
    subTopicId: 'g6-u7-sub2',
    contextTitle: 'Hava Kirliliğini Azaltan Faaliyetler',
    scenario: 'Hava kirliliğine neden olan ve hava kalitesini koruyan etkenler incelenmektedir.',
    questionPrompt: 'Aşağıda verilenlerden hangisi hava kirliliğinin sebeplerinden biri DEĞİLDİR?',
    options: [
      { key: 'A', text: 'Araçların egzozlarından çıkan zehirli gazlar' },
      { key: 'B', text: 'Sanayi tesisleri ve fabrikaların filtre takılmamış bacaları' },
      { key: 'C', text: 'Kükürt oranı yüksek kalitesiz kömür kullanımı' },
      { key: 'D', text: 'Yanan ormanların yerine ağaçlandırma kampanyalarıyla yeni fidanlar dikilmesi' }
    ],
    correctAnswer: 'D',
    explanation: 'Ağaçlandırma kampanyaları havayı temizleyen, oksijen üreten ve karbonu tutan faydalı çalışmalardır; kirlilik sebebi değildir.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Çevre Koruma vs Kirlilik',
    theme: 'Hava Kirliliği Nedenleri'
  },
  {
    id: 67209,
    subTopicId: 'g6-u7-sub2',
    contextTitle: 'İnsan Kaynaklı Hava Kirliliği Dinamikleri',
    scenario: 'İnsanların yaşamak için çevre kaynaklarını bilinçsiz tüketmesi, sanayileşme ve aşırı nüfus artışı hava kirliliğini tetiklemektedir.',
    questionPrompt: 'İnsan kaynaklı çevre kirliliği ile ilgili hangi ifade söylenemez?',
    options: [
      { key: 'A', text: 'Hızlı nüfus artışı enerji talebini artırarak kirliliği tetikler.' },
      { key: 'B', text: 'Sanayileşme bacalardan salınan gazlarla havayı kirletir.' },
      { key: 'C', text: 'İhtiyaçları karşılamak için çevreyi tahrip etmek sadece hayvanların sorunudur.' },
      { key: 'D', text: 'Bilinçsiz tüketim doğal bitki örtüsünün bozulmasına neden olur.' }
    ],
    correctAnswer: 'C',
    explanation: 'Çevre kirliliği insan dahil tüm canlıların yaşamını, sağlığını ve geleceğini tehdit eden küresel bir sorundur.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Çevre Bilinci Çıkarımı',
    theme: 'İnsan ve Çevre'
  },
  {
    id: 67210,
    subTopicId: 'g6-u7-sub2',
    contextTitle: 'Fosil Yakıtların İnsan Sağlığına Zararları',
    scenario: 'Kömür ve petrol türevi yakıtların yanması sonucu atmosfere SO2, NO2, CO ve kurum parçacıkları yayılır.',
    questionPrompt: 'Fosil yakıtların insan sağlığına zararları konusunda sunum hazırlayan bir öğrenci;\nI. Astım, bronşit gibi solunum yolu rahatsızlıkları\nII. Asitli hava nedeniyle deri ve göz tahrişleri\nIII. Karbonmonoksit kaynaklı soba ve şofben zehirlenmeleri\nörneklerinden hangilerini kullanabilir?',
    options: [
      { key: 'A', text: 'I ve II.' },
      { key: 'B', text: 'I ve III.' },
      { key: 'C', text: 'II ve III.' },
      { key: 'D', text: 'I, II ve III.' }
    ],
    correctAnswer: 'D',
    explanation: 'Fosil yakıt dumanı solunum yollarını tahrip eder, cilt hastalıklarına yol açar ve eksik yanma sonucu oluşan karbonmonoksit soba zehirlenmelerine sebep olur. Tümü geçerlidir.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Hava Kirliliğinin Sağlık Etkileri',
    theme: 'Hava Kirliliği ve Sağlık'
  },
  {
    id: 67211,
    subTopicId: 'g6-u7-sub2',
    contextTitle: 'Hava Kirliliğini Önleme Çalışmaları',
    scenario: 'I. Sanayi kuruluşlarının bacalarına elektrostatik filtre takılması\nII. Şehir içi ulaşımda toplu taşıma araçlarının tercih edilmesi\nIII. Kalitesiz ve kaçak kömür kullanımının teşvik edilmesi\nIV. Aerosol sprey ve deodorant kullanımının artırılması',
    questionPrompt: 'Verilenlerden hangileri hava kirliliğini önlemeye yönelik doğru çalışmalardır?',
    options: [
      { key: 'A', text: 'I ve II' },
      { key: 'B', text: 'II ve III' },
      { key: 'C', text: 'I ve III' },
      { key: 'D', text: 'II ve IV' }
    ],
    correctAnswer: 'A',
    explanation: 'Baca filtreleri ve toplu taşıma kirliliği önler (I ve II). Kalitesiz kömür ve kimyasal spreyler ise kirliliği artırır.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Önleme Tedbirleri Tespiti',
    theme: 'Kirlilikle Mücadele'
  },
  {
    id: 67212,
    subTopicId: 'g6-u7-sub2',
    contextTitle: 'Soba Zehirlenmelerine Yol Açan "Sessiz Katil" Gaz',
    scenario: 'Gazete haberi: "Lodoslu havalarda soba bacasının iyi çekmemesi sonucu içeri sızan renksiz ve kokusuz gaz ailenin zehirlenmesine neden oldu."',
    questionPrompt: 'Sobadan sızarak kana oksijen taşınmasını engelleyen ve zehirlenmeye yol açan bu gaz aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Doğal gaz' },
      { key: 'B', text: 'Karbonmonoksit (CO)' },
      { key: 'C', text: 'Oksijen' },
      { key: 'D', text: 'Azot' }
    ],
    correctAnswer: 'B',
    explanation: 'Kömürün tam yanmaması sonucu oluşan Karbonmonoksit (CO) gazı renksiz ve kokusuzdur; kandaki hemoglobine bağlanarak oksijen taşınmasını engeller ve soba zehirlenmelerine yol açar.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Soba Zehirlenmesi Kimyasal Nedeni',
    theme: 'Karbonmonoksit Zehirlenmesi'
  }
];

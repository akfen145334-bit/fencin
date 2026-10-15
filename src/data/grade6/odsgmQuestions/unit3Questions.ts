import { LgsQuestion } from '../../../types/curriculum';

// ============================================================================
// 6. SINIF 3. ÜNİTE: CANLILARDA SİSTEMLER (TEST 4, 5, 6) - MEB KAZANIM & BECERİ TESTLERİ
// ============================================================================

export const odsgmGrade6Unit3Questions: LgsQuestion[] = [
  // --- TEST 4: BİTKİ VE HAYVANLARDA ÜREME, BÜYÜME VE GELİŞME ---
  {
    id: 63101,
    subTopicId: 'g6-u3-sub1',
    contextTitle: 'Tek Hücreli Canlılarda Bölünerek Üreme',
    scenario: 'Şekilde bir amipin ortadan ikiye bölünerek çoğalmasına ait kesit verilmiştir.',
    questionPrompt: 'Bu üreme olayıyla ilgili aşağıdaki ifadelerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Eşeysiz üreme çeşididir.' },
      { key: 'B', text: 'Bu canlı üreme için başka bir canlıya ihtiyaç duymaz.' },
      { key: 'C', text: 'Ana canlı ile aynı kalıtsal özellikte yeni yavrular meydana gelir.' },
      { key: 'D', text: 'Planaryada ve deniz süngerinde de aynı bölünerek üreme şekli gözlenir.' }
    ],
    correctAnswer: 'D',
    explanation: 'Amip, öglena ve paramesyum gibi tek hücreli canlılar bölünerek ürer. Planarya rejenerasyonla (yenilenmeyle), deniz süngeri ise tomurcuklanarak ürer.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Eşeysiz Üreme Türleri Ayrımı',
    theme: 'Eşeysiz Üreme Çeşitleri'
  },
  {
    id: 63102,
    subTopicId: 'g6-u3-sub1',
    contextTitle: 'Canlıların Büyüme ve Gelişmesini Etkileyen Faktörler',
    scenario: 'Canlıların sağlıklı büyüme ve gelişme süreçleri incelenmektedir:\nI. Yeterli ve dengeli beslenme canlıların gelişimini doğrudan etkiler.\nII. Kalıtsal (genetik) faktörler canlıların büyüme potansiyelinde belirleyicidir.\nIII. Barınma, avcılardan korunma ve çevreye uyum sağlama hayvanlarda hayatta kalma ve büyümeyi etkiler.',
    questionPrompt: 'Canlıların büyümesini ve gelişmesini etkileyen faktörlerle ilgili yukarıda verilen bilgilerden hangileri doğrudur?',
    options: [
      { key: 'A', text: 'I ve II.' },
      { key: 'B', text: 'II ve III.' },
      { key: 'C', text: 'I ve III.' },
      { key: 'D', text: 'I, II ve III.' }
    ],
    correctAnswer: 'D',
    explanation: 'Beslenme, genetik faktörler ve çevresel şartlar (barınma, iklim, korunma) canlıların büyüme ve gelişmesinde birlikte rol oynar.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Gelişimi Etkileyen Çevresel ve Kalıtsal Faktörler',
    theme: 'Büyüme ve Gelişme Faktörleri'
  },
  {
    id: 63103,
    subTopicId: 'g6-u3-sub1',
    contextTitle: 'Rejenerasyonla (Yenilenerek) Üreme Modeli',
    scenario: 'Bir posterde şu açıklama yer almaktadır: "Bu üreme şeklinde canlının kopan her bir parçası kendisini tamamlayarak ana canlıyla aynı kalıtsal özelliklere sahip yeni canlılar oluşturur."',
    questionPrompt: 'Bu posteri hazırlamak isteyen bir öğrenci soru işareti yerine aşağıdaki canlılardan hangisini koymalıdır?',
    options: [
      { key: 'A', text: 'Amip' },
      { key: 'B', text: 'Deniz yıldızı' },
      { key: 'C', text: 'Hidra' },
      { key: 'D', text: 'Patates' }
    ],
    correctAnswer: 'B',
    explanation: 'Kopan kolundan yeni bir birey oluşturabilen deniz yıldızı ve planarya rejenerasyonla (yenilenme ile) üremeye en tipik örnektir.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Rejenerasyon Kavramı Eşleştirme',
    theme: 'Rejenerasyon ile Üreme'
  },
  {
    id: 63104,
    subTopicId: 'g6-u3-sub1',
    contextTitle: 'Çiçeğin Temel Kısımları',
    scenario: 'Tam bir çiçeğin kısımları harflerle gösterilmiştir: K (Renkli Taç yaprak), L (Yeşil Çanak yaprak), M (Çiçek sapı), N (Erkek organın başçığı).',
    questionPrompt: 'K, L, M ve N ile gösterilmiş kısımların isimleri hangi seçenekte doğru verilmiştir?',
    options: [
      { key: 'A', text: 'K: Taç yaprak — L: Çanak yaprak — M: Çiçek sapı — N: Başçık' },
      { key: 'B', text: 'K: Sapçık — L: Çanak yaprak — M: Taç yaprak — N: Çiçek sapı' },
      { key: 'C', text: 'K: Çanak yaprak — L: Başçık — M: Çiçek sapı — N: Taç yaprak' },
      { key: 'D', text: 'K: Taç yaprak — L: Çiçek sapı — M: Çanak yaprak — N: Sapçık' }
    ],
    correctAnswer: 'A',
    explanation: 'Çiçeğin en dışındaki yeşil yaprak çanak yaprak (L), renkli kokulu yapraklar taç yaprak (K), çiçeği dala bağlayan kısım çiçek sapı (M), polenlerin üretildiği erkek organ kısmı başçıktır (N).',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Bitki Anatomisi İsimlendirme',
    theme: 'Çiçeğin Kısımları'
  },
  {
    id: 63105,
    subTopicId: 'g6-u3-sub1',
    contextTitle: 'Canlılar ve Eşeysiz Üreme Şekilleri Eşleştirmesi',
    scenario: 'Çeşitli canlıların eşeysiz üreme yöntemleri eşleştirilmiştir:\nA) Bakteri - Bölünerek\nB) Kavak bitkisi - Vejetatif (dalından çelikle)\nC) Terliksi hayvan - Tomurcuklanarak\nD) Toprak solucanı - Rejenerasyonla',
    questionPrompt: 'Aşağıda verilen bazı canlılar ve üreme şekillerinin eşleştirilmesinde hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Bakteri - Bölünerek' },
      { key: 'B', text: 'Kavak bitkisi - Vejetatif' },
      { key: 'C', text: 'Terliksi hayvan - Tomurcuklanarak' },
      { key: 'D', text: 'Toprak solucanı - Rejenerasyonla' }
    ],
    correctAnswer: 'C',
    explanation: 'Terliksi hayvan (paramesyum) tek hücreli bir canlı olup tomurcuklanarak değil, enine bölünerek çoğalır. Tomurcuklanma hidra, maya mantarı ve mercanlarda görülür.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Eşeysiz Üreme Hatalı Eşleştirme',
    theme: 'Eşeysiz Üreme Şekilleri'
  },
  {
    id: 63106,
    subTopicId: 'g6-u3-sub1',
    contextTitle: 'Bitkilerde Yapraktan Vejetatif Üreme Deneyi',
    scenario: 'I. Bitkiden koparılan bir menekşe yaprağı su içinde bir süre bekletilip köklendirildikten sonra saksıya ekilmiş ve II. bitki elde edilmiştir.',
    questionPrompt: 'Yukarıda verilen durum ile ilgili;\n1. Vejetatif üremedir.\n2. Bitkilerde görülen eşeysiz üremedir.\n3. I. bitkinin çiçek rengi II. bitkininkinden farklıdır.\nbilgilerinden hangileri doğrudur?',
    options: [
      { key: 'A', text: '1 ve 2.' },
      { key: 'B', text: '2 ve 3.' },
      { key: 'C', text: '1 ve 3.' },
      { key: 'D', text: '1, 2 ve 3.' }
    ],
    correctAnswer: 'A',
    explanation: 'Yaprak, dal veya kökten yeni bitki üretimi vejetatif (eşeysiz) üremedir (1 ve 2 doğru). Eşeysiz üremede genetik çeşitlilik oluşmadığından oluşan yeni bitkinin çiçek rengi ana bitkiyle tamamen aynıdır (3 yanlıştır).',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Vejetatif Üreme İlkeleri',
    theme: 'Bitkilerde Vejetatif Üreme'
  },
  {
    id: 63107,
    subTopicId: 'g6-u3-sub1',
    contextTitle: 'Çiçekte Dişi Organ Yapısı',
    scenario: 'Çiçek modelinde dişi organın alt kısmında yer alan şişkin kısım (Yumurtalık / Tohum Taslağı) gösterilmiştir.',
    questionPrompt: 'Bu organ ile ilgili;\n1. Erkek organdır.\n2. Çiçek tozlarının üretildiği kısımdır.\n3. Tohum taslağının ve yumurta hücresinin bulunduğu kısımdır.\nbilgilerinden hangileri doğrudur?',
    options: [
      { key: 'A', text: 'Yalnız 3.' },
      { key: 'B', text: '1 ve 3.' },
      { key: 'C', text: '2 ve 3.' },
      { key: 'D', text: '1, 2 ve 3.' }
    ],
    correctAnswer: 'A',
    explanation: 'İşaretli şişkin kısım dişi organın yumurtalık (ovaryum) bölümüdür. Burada tohum taslağı yer alır ve döllenme sonrasında tohuma dönüşür.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Çiçekte Döllenme Organı',
    theme: 'Çiçekte Üreme Organları'
  },
  {
    id: 63108,
    subTopicId: 'g6-u3-sub1',
    contextTitle: 'Eşeysiz Üreme Çeşitleri Karşılaştırması',
    scenario: '1. Deniz yıldızı (kopan koldan yeni canlı)\n2. Amip (bölünerek çoğalma)\n3. Gül (daldan çelikle üretim)',
    questionPrompt: 'Yukarıdaki üreme çeşitleri incelendiğinde hangi eşeysiz üreme çeşidi verilmemiştir?',
    options: [
      { key: 'A', text: 'Rejenerasyon' },
      { key: 'B', text: 'Tomurcuklanma' },
      { key: 'C', text: 'Vejetatif' },
      { key: 'D', text: 'Bölünerek' }
    ],
    correctAnswer: 'B',
    explanation: 'Deniz yıldızı = Rejenerasyon; Amip = Bölünerek; Gül = Vejetatif. Tomurcuklanarak üremeye (hidra veya bira mayası) ait bir örnek verilmemiştir.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Üreme Çeşitleri Eşleştirme',
    theme: 'Eşeysiz Üreme Sınıflandırması'
  },
  {
    id: 63109,
    subTopicId: 'g6-u3-sub1',
    contextTitle: 'Tohumun Çimlenmesi İçin Gereken Şartlar Deneyi',
    scenario: 'Gonca, 30 °C sıcaklıktaki iki cam kaba ıslak pamuk koyup fasulye tohumları yerleştirmiştir. Bir kabı aydınlık ortama, diğer kabı karanlık ortama bırakmıştır. Her iki durumda da tohumların sorunsuz çimlendiğini gözlemlemiştir.',
    questionPrompt: 'Bu durum incelendiğinde, çimlenme sırasında gerçekleşen olaylarla ilgili aşağıdaki yorumlardan hangisi yapılabilir?',
    options: [
      { key: 'A', text: 'Çimlenme için mutlaka ışık gereklidir.' },
      { key: 'B', text: 'Çimlenme sırasında yaprak olmadığı için fotosentez gerçekleşir.' },
      { key: 'C', text: 'Aydınlık ortamda tohumlar daha yavaş çimlenir.' },
      { key: 'D', text: 'Tohumun çimlenebilmesi için ışığa ihtiyaç yoktur (Su, Oksijen ve Sıcaklık yeterlidir).' }
    ],
    correctAnswer: 'D',
    explanation: 'Tohum çimlenirken fotosentez yapmaz, depoladığı besini oksijenli solunumla tüketir (SOS: Su, Oksijen, Sıcaklık şarttır). Klorofilli yapraklar çıkana kadar ışığa ihtiyaç duyulmaz.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Kontrollü Deney ve Çimlenme Koşulları',
    theme: 'Çimlenme ve Çevre Faktörleri'
  },
  {
    id: 63110,
    subTopicId: 'g6-u3-sub1',
    contextTitle: 'Başkalaşım (Metamorfoz) Yaşam Döngüsü',
    scenario: 'Kelebeğin yaşam döngüsü: Yumurta ➔ Tırtıl (Larva) ➔ Pupa (Koza) ➔ Ergin kelebek şeklindedir.',
    questionPrompt: 'Bu döngünün bir benzerini kurbağa için çizmek isteyen bir öğrenci aşamaları sırasıyla nasıl yazmalıdır?',
    options: [
      { key: 'A', text: 'Yumurta ➔ Tırtıl ➔ Embriyo ➔ Kurbağa' },
      { key: 'B', text: 'Yumurta ➔ İribaş ➔ Pupa ➔ Embriyo' },
      { key: 'C', text: 'Yumurta ➔ Embriyo ➔ İribaş ➔ Ergin kurbağa' },
      { key: 'D', text: 'Pupa ➔ Larva ➔ Ergin kurbağa ➔ İribaş' }
    ],
    correctAnswer: 'C',
    explanation: 'Kurbağada başkalaşım sırası: Yumurtadan çıkan embriyo suda solungaç solunumu yapan "iribaş" evresine geçer, zamanla bacakları çıkıp kuyruğu eriyerek akciğer solunumu yapan ergin kurbağaya dönüşür.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Başkalaşım Evreleri Sıralaması',
    theme: 'Hayvanlarda Başkalaşım'
  },
  {
    id: 63111,
    subTopicId: 'g6-u3-sub1',
    contextTitle: 'Kurbağalarda Üreme ve Gelişme Kesiti',
    scenario: 'Kurbağaların gölet kenarına bıraktığı yumurtalardan balığa benzeyen kuyruklu iribaşların çıktığı ve zamanla başkalaşım geçirerek yetişkin kurbağa olduğu gözlemlenmiştir.',
    questionPrompt: 'Bu döngü incelendiğinde;\n1. Kurbağalarda yumurtadan çıkan yavru canlı ana canlıya başlangıçta benzemez.\n2. Kurbağalar dış döllenmeyle yumurta bırakarak çoğalır.\n3. Kurbağalar gelişimlerini ana canlının vücudunda tamamlar.\nyorumlarından hangileri yapılabilir?',
    options: [
      { key: 'A', text: '1 ve 2.' },
      { key: 'B', text: '2 ve 3.' },
      { key: 'C', text: '1 ve 3.' },
      { key: 'D', text: '1, 2 ve 3.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kurbağalar başkalaşım geçirdikleri için yavruları ana canlıya benzemez (1 doğru) ve suya yumurta bırakarak dış ortamda gelişirler (2 doğru). Gelişim ana canlının vücudunda değil, suda tamamlanır (3 yanlış).',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Amfibi Canlılarda Üreme Özellikleri',
    theme: 'Kurbağaların Yaşam Döngüsü'
  },

  // --- TEST 5: İNSANDA ÜREME, BÜYÜME VE GELİŞME ---
  {
    id: 63201,
    subTopicId: 'g6-u3-sub1',
    contextTitle: 'Dişi Üreme Sistemi Organları ve Görevleri',
    scenario: 'Dişi üreme sistemini oluşturan yapılar: Yumurtalık (L), Yumurta kanalı (K), Döl yatağı / Rahim (M).',
    questionPrompt: 'Bu organ ve yapıların görevleriyle ilgili verilen bilgilerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Embriyo gelişerek zigotu oluşturur.' },
      { key: 'B', text: 'Döllenme olayı döl yatağında gerçekleşir.' },
      { key: 'C', text: 'Embriyonun tutunup doğuma kadar gelişimini tamamladığı yer döl yatağıdır (rahim).' },
      { key: 'D', text: 'Dişilerde yumurtalık yalnızca bir adettir.' }
    ],
    correctAnswer: 'C',
    explanation: 'Embriyo döl yatağına (rahme) tutunarak plasenta aracılığıyla beslenir ve 9 ay boyunca gelişimini burada tamamlar. (Döllenme döl yatağında değil, yumurta kanalında gerçekleşir).',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Dişi Üreme Sistemi Anatomisi',
    theme: 'İnsanda Üreme Sistemi'
  },
  {
    id: 63202,
    subTopicId: 'g6-u3-sub1',
    contextTitle: 'Döllenme, Yumurta Üretimi ve Zigotun Geliştiği Organlar',
    scenario: 'Dişi üreme organları K, L ve M ile gösterilmiştir.',
    questionPrompt: 'Döllenmenin gerçekleştiği yer, dişi üreme hücresinin oluştuğu yer ve zigotun geliştiği yer sırasıyla hangi seçenekte verilmiştir?',
    options: [
      { key: 'A', text: 'K — L — M' },
      { key: 'B', text: 'M — K — L' },
      { key: 'C', text: 'L — M — K' },
      { key: 'D', text: 'M — L — K' }
    ],
    correctAnswer: 'D',
    explanation: 'Döllenme yumurta kanalında (K veya şemadaki tüp), yumurta hücresi yumurtalıkta (L), embriyonun/zigotun geliştiği yer ise döl yatağındadır (M). Doğru eşleştirme D seçeneğidir.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Organ ve Fonksiyon Eşleştirme',
    theme: 'Üreme Organlarının Fonksiyonları'
  },
  {
    id: 63203,
    subTopicId: 'g6-u3-sub1',
    contextTitle: 'Dişi Üreme Sisteminde Boşluk Doldurma',
    scenario: 'Zigot, I.... ilerleyerek döl yatağına ulaşır. Sağlıklı bir dişide iki adet II.... bulunur. III.... kaslı yapısı sayesinde döllenmiş yumurtanın gelişmesine olanak sağlar.',
    questionPrompt: 'Numaralandırılmış boşluklara sırasıyla hangisi yazılmalıdır?',
    options: [
      { key: 'A', text: 'Döl yolunda — Döl yatağı — Yumurtalık kanalı' },
      { key: 'B', text: 'Yumurta kanalında — Döl yatağı — Döl yolu' },
      { key: 'C', text: 'Yumurta kanalında — Yumurtalık — Döl yatağı' },
      { key: 'D', text: 'Döl yolunda — Yumurtalık — Yumurtalık kanalı' }
    ],
    correctAnswer: 'C',
    explanation: 'Zigot yumurta kanalında ilerler (I). Sağlıklı dişide sağ ve solda 2 yumurtalık bulunur (II). Kaslı yapısıyla bebeği koruyan ve taşıyan organ döl yatağıdır (rahim) (III).',
    skillTag: 'Temel Bilgi & Mantık',
    cognitiveLevel: 'Metin Tamamlama ve Terminoloji',
    theme: 'Dişi Üreme Anatomisi'
  },
  {
    id: 63204,
    subTopicId: 'g6-u3-sub1',
    contextTitle: 'Bebeğin Anne Karnındaki Gelişim Evreleri',
    scenario: 'Sperm ve yumurtanın birleşmesiyle başlayan süreç: Döllenme ➔ Zigot ➔ Embriyo ➔ Fetüs ➔ Bebek.',
    questionPrompt: 'Numaralanmış gelişim yapıları ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Sperm erkek testislerinde, yumurta ise dişi yumurtalığında üretilir.' },
      { key: 'B', text: 'IV numaralı yapı zigot olarak adlandırılır (Hatalı: 2. aydan sonra fetüs adını alır).' },
      { key: 'C', text: 'Döllenme yumurta kanalında gerçekleşir.' },
      { key: 'D', text: 'Embriyo döl yatağı duvarına tutunarak gelişimini sürdürür.' }
    ],
    correctAnswer: 'B',
    explanation: 'Zigot döllenmiş tek hücreli yumurtadır. Bölünerek çoğalan ilk 2 aylık yapıya embriyo, 2. aydan doğuma kadar olan insansı görünümlü yapıya ise fetüs denir. IV numaralı ileri evreye zigot denmesi yanlıştır.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Zigot, Embriyo ve Fetüs Ayrımı',
    theme: 'Gelişim Basamakları'
  },
  {
    id: 63205,
    subTopicId: 'g6-u3-sub1',
    contextTitle: 'Üreme Sistemi Sağlığı ve Hijyen Kuralları',
    scenario: 'Üreme sistemi sağlığını korumaya yönelik önlemler incelenmektedir:\nI. Üreme sistemi dış ortama açılan açıklıklara sahip olduğu için enfeksiyonlara açıktır.\nII. Bakteri, virüs ve mantar gibi mikroorganizmalara karşı hassastır.\nIII. Düzenli banyo yapmak ve pamuklu iç çamaşırı giymek sistemi enfeksiyonlardan korur.\nIV. Naylon ve yapay kumaşları tercih etmek üreme sağlığı için doğrudur.',
    questionPrompt: 'Üreme sistemi ve sağlığı ile ilgili yukarıda verilen bilgilerden hangileri doğrudur?',
    options: [
      { key: 'A', text: 'I, II ve III.' },
      { key: 'B', text: 'II, III ve IV.' },
      { key: 'C', text: 'I, III ve IV.' },
      { key: 'D', text: 'I, II, III ve IV.' }
    ],
    correctAnswer: 'A',
    explanation: 'Yapay ve sentetik kumaşlar hava almayı engelleyip nemli ortam yaratarak mantar ve bakteri üremesine yol açar (IV yanlıştır). Pamuklu çamaşırlar tercih edilmeli, kişisel hijyene dikkat edilmelidir (I, II, III doğrudur).',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Sağlık ve Hijyen Bilinci',
    theme: 'Üreme Sistemi Sağlığı'
  },
  {
    id: 63206,
    subTopicId: 'g6-u3-sub1',
    contextTitle: 'Döllenme Olayının Yaşam Döngüsündeki Yeri',
    scenario: 'Dişi ve erkek bireylerden gelen gametlerin birleşerek zigotu oluşturması şemada gösterilmiştir.',
    questionPrompt: 'Canlıların nesillerini devam ettirebilmek için kendilerine benzer yeni canlılar oluşturmasını sağlayan olayın temelini hangi aşamalar oluşturur?',
    options: [
      { key: 'A', text: 'Yalnız 1.' },
      { key: 'B', text: '1 ve 3.' },
      { key: 'C', text: '1 ve 2.' },
      { key: 'D', text: '1, 2 ve 3.' }
    ],
    correctAnswer: 'B',
    explanation: 'Gametlerin üretilmesi ve bu iki hücrenin çekirdeklerinin kaynaşması (döllenme) eşeyli üremenin temel basamaklarıdır.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Üreme Döngüsü Mantığı',
    theme: 'Döllenme ve Yaşam Döngüsü'
  },
  {
    id: 63207,
    subTopicId: 'g6-u3-sub1',
    contextTitle: 'Erkek Üreme Sistemi Yapıları',
    scenario: 'Erkek üreme sistemi anatomisinde testisler, salgı bezleri, sperm kanalı ve penis gösterilmektedir.',
    questionPrompt: 'Şekilde gösterilen yapı ve organlarla ilgili aşağıda verilen bilgilerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Erkek üreme hücresini oluşturan penis vücudun dışındadır.' },
      { key: 'B', text: 'Testis vücudun içindedir.' },
      { key: 'C', text: 'Salgı bezleri spermi testise taşır.' },
      { key: 'D', text: 'Sağlıklı bir erkekte iki adet testis bulunur ve spermler burada üretilir.' }
    ],
    correctAnswer: 'D',
    explanation: 'Erkek üreme hücresi olan spermler vücut dışındaki testis torbasında yer alan iki adet testiste üretilir. (Penis spermi dışarı aktarır, üretim yapmaz).',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Erkek Üreme Sistemi Anatomisi',
    theme: 'Erkek Üreme Organları'
  },
  {
    id: 63208,
    subTopicId: 'g6-u3-sub1',
    contextTitle: 'Erkek Üreme Sistemi Organlarının Harflendirilmesi',
    scenario: 'Şemada R: Testis, V/T: Penis, S/P: İdrar ve sperm kanalı harflerle kodlanmıştır.',
    questionPrompt: 'Buna göre Testis, Penis ve İdrar Kanalı hangi harflerle eşleşmektedir?',
    options: [
      { key: 'A', text: 'Testis: R — Penis: V — İdrar kanalı: S' },
      { key: 'B', text: 'Testis: T — Penis: R — İdrar kanalı: P' },
      { key: 'C', text: 'Testis: R — Penis: T — İdrar kanalı: P' },
      { key: 'D', text: 'Testis: R — Penis: T — İdrar kanalı: S' }
    ],
    correctAnswer: 'A',
    explanation: 'Şemada testis R harfi ile, penis V harfi ile, kanal ise S harfi ile temsil edilmektedir.',
    skillTag: 'Tablo Yorumlama',
    cognitiveLevel: 'Anatomik Yapı Tespiti',
    theme: 'Erkek Üreme Sistemi Şeması'
  },
  {
    id: 63209,
    subTopicId: 'g6-u3-sub1',
    contextTitle: 'Yumurta Hücresinin Takip Ettiği Yol',
    scenario: 'Yumurta hücresi olgunlaşma dönemini tamamladıktan sonra yumurtalıktan atılarak döllenmenin gerçekleşeceği kanala geçer.',
    questionPrompt: 'Metindeki boş bırakılan yere aşağıdakilerden hangisinin yazılması uygun olur?',
    options: [
      { key: 'A', text: 'Döl Yatağından' },
      { key: 'B', text: 'Yumurtalıktan' },
      { key: 'C', text: 'Döl Yolundan' },
      { key: 'D', text: 'Rahimden' }
    ],
    correctAnswer: 'B',
    explanation: 'Dişi gamet olan yumurta yumurtalıklarda üretilir ve her ay olgunlaşan yumurta yumurtalıktan yumurta kanalına (Fallop tüpüne) geçer.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Hücre Geçiş Yolları',
    theme: 'Yumurtlama Süreci'
  },
  {
    id: 63210,
    subTopicId: 'g6-u3-sub1',
    contextTitle: 'Döllenme ve Zigot İfadeleri Doğruluk Tablosu',
    scenario: 'Öğrencinin işaretlediği tablo:\n1. Zigot, döl yolunda ilerleyerek döl yatağına ulaşır. (Doğru işaretlenmiş - Yanlış, yumurta kanalında ilerler)\n2. Döl yolu, döl yatağı ile dış ortam arasındaki esnek yapıdır. (Doğru işaretlenmiş - Doğru)\n3. Zigot döl yatağı yüzeyine tutunur. (Yanlış işaretlenmiş - Aslında Doğrudur)\n4. Zigotun gelişimi sonucu embriyo oluşur. (Doğru işaretlenmiş - Doğru)',
    questionPrompt: 'Yukarıdaki tabloda yapılan işaretlemelerden hangileri doğrudur?',
    options: [
      { key: 'A', text: '2 ve 4' },
      { key: 'B', text: '1 ve 4' },
      { key: 'C', text: '2 ve 5' },
      { key: 'D', text: '1, 2, 3 ve 4' }
    ],
    correctAnswer: 'A',
    explanation: '2. ifade kesinlikle doğrudur ve doğru işaretlenmiştir. 4. ifade (zigottan embriyo oluşumu) doğrudur ve doğru işaretlenmiştir. Dolayısıyla öğrencinin 2 ve 4 işaretlemeleri isabetlidir.',
    skillTag: 'Tablo Yorumlama',
    cognitiveLevel: 'Tablo Doğruluk Denetimi',
    theme: 'Döllenme ve Tutunma'
  },
  {
    id: 63211,
    subTopicId: 'g6-u3-sub1',
    contextTitle: 'Bebek Oluşum Aşamaları Kavram Haritası',
    scenario: 'Dişi (Yumurta) + Erkek (Sperm) ➔ [ I ] ➔ Zigot ➔ [ II ] ➔ [ III ] ➔ Bebek.',
    questionPrompt: 'Soru işaretli boşluklara sırasıyla hangi kavramlar yazılmalıdır?',
    options: [
      { key: 'A', text: 'I: Yumurtalık — II: Embriyo — III: Fetüs' },
      { key: 'B', text: 'I: Döllenme — II: Fetüs — III: Embriyo' },
      { key: 'C', text: 'I: Embriyo — II: Zigot — III: Fetüs' },
      { key: 'D', text: 'I: Döllenme — II: Embriyo — III: Fetüs' }
    ],
    correctAnswer: 'B',
    explanation: 'Sperm ve yumurtanın birleşmesine döllenme (I) denir. Zigotun büyümesiyle embriyo, ardından fetüs (III) ve bebek oluşur. Cevap anahtarına göre döllenme ve fetüs sıralaması B seçeneğindedir.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Kavram Haritası Çözümleme',
    theme: 'Gelişim Basamakları'
  },
  {
    id: 63212,
    subTopicId: 'g6-u3-sub1',
    contextTitle: 'İnsanda Büyüme ve Gelişme Yargıları',
    scenario: 'İnsanda üreme hücrelerinin oluşumu, döllenme ve embriyonik gelişim ele alınmaktadır.',
    questionPrompt: 'İnsanda üreme, büyüme ve gelişme konusu ile ilgili aşağıda verilen yargılardan hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Zigot gelişimine anne vücudu içinde devam eder.' },
      { key: 'B', text: 'Embriyo ana rahminde büyüme ve gelişmeye devam eder.' },
      { key: 'C', text: 'Üreme organları neslin devamı için üreme hücrelerini oluştururlar.' },
      { key: 'D', text: 'Zigot, embriyonun gelişerek oluşturduğu bir yapıdır.' }
    ],
    correctAnswer: 'D',
    explanation: 'Tam tersi olmalıdır: Zigot döllenmiş ilk tek hücredir; zigot mitoz bölünmelerle gelişerek embriyoyu meydana getirir. Embriyo zigotu değil, zigot embriyoyu oluşturur!',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Gelişim Sıralaması Mantık Hatası',
    theme: 'Zigot ve Embriyo İlişkisi'
  },

  // --- TEST 6: DENETLEYİCİ VE DÜZENLEYİCİ SİSTEMLER ---
  {
    id: 63301,
    subTopicId: 'g6-u3-sub2',
    contextTitle: 'Sinir Sisteminin Bölümleri Şeması',
    scenario: 'Sinir sistemi iki ana kola ayrılır: I ve II. I kolu Beyin, III, IV ve Omurilik şeklinde alt kısımlara ayrılmaktadır.',
    questionPrompt: 'Numaralandırılmış yerlere gelecek ifadeler hangi seçenekte doğru olarak verilmiştir?',
    options: [
      { key: 'A', text: 'I: Merkezi sinir sistemi — II: Çevresel sinir sistemi — III: Beyincik — IV: Omurilik soğanı' },
      { key: 'B', text: 'I: Çevresel sinir sistemi — II: Merkezi sinir sistemi — III: Omurilik soğanı — IV: Beyincik' },
      { key: 'C', text: 'I: Beyincik — II: Merkezi sinir sistemi — III: Omurilik soğanı — IV: Çevresel sinir sistemi' },
      { key: 'D', text: 'I: Omurilik soğanı — II: Beyin — III: Merkezi sinir sistemi — IV: Çevresel sinir sistemi' }
    ],
    correctAnswer: 'A',
    explanation: 'Sinir sistemi: Merkezi Sinir Sistemi (Beyin, Beyincik, Omurilik Soğanı, Omurilik) ve Çevresel Sinir Sistemi (Vücuda yayılan sinirler) olarak ikiye ayrılır.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Sinir Sistemi Şeması Çözümleme',
    theme: 'Sinir Sisteminin Yapısı'
  },
  {
    id: 63302,
    subTopicId: 'g6-u3-sub2',
    contextTitle: 'Refleks Davranışlarının Tespiti',
    scenario: 'Omurilik tarafından yönetilen refleksler vücudun istem dışı ve ani tepkileridir:\nI. Diz kapağına vurulduğunda bacağın öne fırlaması (Doğuştan refleks)\nII. Sıcak cisme dokunulduğunda elin aniden geri çekilmesi (Doğuştan refleks)\nIII. Limon görünce ağzın sulanması (Sonradan kazanılan şartlı refleks)',
    questionPrompt: 'Verilen davranışlardan hangileri reflekstir?',
    options: [
      { key: 'A', text: 'Yalnız I.' },
      { key: 'B', text: 'I ve II.' },
      { key: 'C', text: 'II ve III.' },
      { key: 'D', text: 'I, II ve III.' }
    ],
    correctAnswer: 'D',
    explanation: 'I ve II doğuştan gelen kalıtsal reflekslerdir; III ise deneyimle öğrenilmiş şartlı (sonradan kazanılan) reflekstir. Her üçü de refleks davranışıdır.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Doğuştan ve Şartlı Refleksler',
    theme: 'Refleks Mekanizması'
  },
  {
    id: 63303,
    subTopicId: 'g6-u3-sub2',
    contextTitle: 'Cinsiyet Hormonları ve Eşeysel Bezler',
    scenario: 'Erkeklerde testisler testosteron hormonu salgılayarak sakal bıyık çıkmasını ve ses kalınlaşmasını; dişilerde yumurtalıklar östrojen hormonu salgılayarak dişi vücut hatlarının oluşmasını sağlar.',
    questionPrompt: 'Üreme hücrelerini oluşturarak erkeklik ve dişilik hormonlarının salgılanmasını sağlayan iç salgı bezi aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Pankreas' },
      { key: 'B', text: 'Eşeysel bezler' },
      { key: 'C', text: 'Böbrek üstü bezleri' },
      { key: 'D', text: 'Hipofiz bezi' }
    ],
    correctAnswer: 'B',
    explanation: 'Üreme hücrelerini (sperm ve yumurta) üretip eşey hormonlarını salgılayan bezler eşeysel bezlerdir (testis ve yumurtalık).',
    skillTag: 'Temel Bilgi & Mantık',
    cognitiveLevel: 'İç Salgı Bezleri Eşleştirme',
    theme: 'İç Salgı Bezleri'
  },
  {
    id: 63304,
    subTopicId: 'g6-u3-sub2',
    contextTitle: 'Merkezi Sinir Sistemi Organlarının Görevleri',
    scenario: 'Görevler:\na. Vücut sıcaklığını, uyku ve susama gibi olayları kontrol eder.\nb. Solunum, dolaşım ve boşaltım gibi hayati iç organ faaliyetlerini düzenler.\nc. Refleks davranışlarını kontrol eder.\nd. Kas hareketlerini koordine ederek vücut dengesini sağlar.',
    questionPrompt: 'Merkezi sinir sisteminin bölüm ve görevlerinin (I-Beyin, II-Beyincik, III-Omurilik Soğanı, IV-Omurilik) doğru eşleştirilmesi hangisidir?',
    options: [
      { key: 'A', text: 'I – a, II – b, III – c, IV – d' },
      { key: 'B', text: 'I – a, II – d, III – b, IV – c' },
      { key: 'C', text: 'I – d, II – c, III – b, IV – a' },
      { key: 'D', text: 'I – d, II – a, III – b, IV – c' }
    ],
    correctAnswer: 'B',
    explanation: 'Beyin (I) vücut sıcaklığı ve istemli hareketleri (a); Beyincik (II) kas dengesini (d); Omurilik soğanı (III) yaşamsal iç organları (b); Omurilik (IV) refleksleri (c) yönetir.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Sinir Sistemi Görev Eşleme',
    theme: 'Beyin, Beyincik, Omurilik Görevleri'
  },
  {
    id: 63305,
    subTopicId: 'g6-u3-sub2',
    contextTitle: 'Beynin Yönetim Görevleri',
    scenario: 'Posterde beynin görevleri listelenmiştir:\n• Duyu organlarının çalışmasını değerlendirir.\n• Öğrenme, hafıza ve düşünme eylemlerini yönetir.\n• Acıkma, susama ve uyku düzenini ayarlar.',
    questionPrompt: 'Buna göre “?” yerine aşağıdakilerden hangisi yazılırsa poster doğru tamamlanır?',
    options: [
      { key: 'A', text: 'Refleks davranışlarının yönetilmesi' },
      { key: 'B', text: 'Hapşırma ve kusma gibi istemsiz eylemlerin kontrolü' },
      { key: 'C', text: 'Vücudun hareket ve dengesinin sağlanması' },
      { key: 'D', text: 'Kan basıncının ve vücut sıcaklığının ayarlanması' }
    ],
    correctAnswer: 'D',
    explanation: 'Kan basıncı ve vücut sıcaklığı beyin tarafından ayarlanır. Refleks omuriliğin; hapşırma omurilik soğanının; denge ise beyinciğin görevidir.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Beynin Bütüncül Görevleri',
    theme: 'Beynin Çalışma İlkeleri'
  },
  {
    id: 63306,
    subTopicId: 'g6-u3-sub2',
    contextTitle: 'Çevresel Sinir Sisteminin Görevi',
    scenario: 'Bir organ merkezi sinir sistemi ile vücudun organları arasındaki bilgi iletişimini kablo ağı gibi sağlar. Uyarıları merkezi sisteme taşır, cevabı organlara iletir.',
    questionPrompt: 'Açıklamada belirtilen görev kime aittir?',
    options: [
      { key: 'A', text: 'Beyin' },
      { key: 'B', text: 'Beyincik' },
      { key: 'C', text: 'Omurilik soğanı' },
      { key: 'D', text: 'Çevresel sinir sistemi' }
    ],
    correctAnswer: 'D',
    explanation: 'Merkezi sinir sistemi dışındaki tüm vücuda yayılan ve beyin-omurilik ile organlar arasında iletim sağlayan ağ Çevresel Sinir Sistemi’dir.',
    skillTag: 'Temel Bilgi & Mantık',
    cognitiveLevel: 'Çevresel Sinir Sistemi Tanımı',
    theme: 'Sinir İletimi'
  },
  {
    id: 63307,
    subTopicId: 'g6-u3-sub2',
    contextTitle: 'İç Salgı Bezlerinin Yöneticisi: Hipofiz Bezi',
    scenario: 'Meryem’in hazırladığı afişte:\n• Tüm iç salgı bezlerinin çalışmasını denetler ve düzenler.\n• Büyüme hormonunu salgılar.\n• Beynin alt kısmında nohut büyüklüğündedir.',
    questionPrompt: 'Afişteki soru işareti yerine hangi iç salgı bezinin görseli yapıştırılmalıdır?',
    options: [
      { key: 'A', text: 'Pankreas bezi' },
      { key: 'B', text: 'Hipofiz bezi' },
      { key: 'C', text: 'Tiroit bezi' },
      { key: 'D', text: 'Böbrek üstü bezi' }
    ],
    correctAnswer: 'B',
    explanation: 'Beynin alt kısmında nohut tanesi büyüklüğünde olan, büyüme hormonu salgılayan ve diğer bezleri yöneten ana bez Hipofiz bezidir.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Hipofiz Bezi Özellikleri',
    theme: 'İç Salgı Bezleri'
  },
  {
    id: 63308,
    subTopicId: 'g6-u3-sub2',
    contextTitle: 'Heyecan, Korku ve Adrenalin Hormonu',
    scenario: 'Hızla akan nehirde yapılan rafting sırasında sporcular büyük heyecan, coşku ve kalp çarpıntısı yaşamaktadır.',
    questionPrompt: 'Rafting sporu yaparken hangi bezden hangi hormon salgılanır?',
    options: [
      { key: 'A', text: 'tiroit — insülin' },
      { key: 'B', text: 'pankreas — adrenalin' },
      { key: 'C', text: 'adrenalin — böbrek üstü' },
      { key: 'D', text: 'böbrek üstü — adrenalin' }
    ],
    correctAnswer: 'D',
    explanation: 'Korku, heyecan, öfke ve tehlike anlarında böbrek üstü bezlerinden adrenalin hormonu salgılanır; kalp atışı, soluk alıp verme ve kan basıncı hızlanır.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Hormonal Tepkiler',
    theme: 'Böbrek Üstü Bezleri ve Adrenalin'
  },
  {
    id: 63309,
    subTopicId: 'g6-u3-sub2',
    contextTitle: 'Ergenlik Döneminde Bireysel Farklılıklar',
    scenario: 'Bir araştırmacı aynı yaş ve cinsiyetteki ergenlerle yaptığı çalışmada bazılarının sesinin kalınlaştığını, bazılarında sivilce çıktığını, bazılarında ise bu değişimlerin henüz başlamadığını gözlemlemiştir.',
    questionPrompt: 'Bu araştırma sonucu ile ilgili aşağıdaki ifadelerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Bütün bireyler aynı yaşta ve aynı anda ergenliğe girer.' },
      { key: 'B', text: 'Ruhsal değişimler yalnızca ergenlik dönemine özgüdür.' },
      { key: 'C', text: 'Ergenlik döneminde bedensel ve ruhsal değişimler bireyler arasında farklılık gösterir.' },
      { key: 'D', text: 'Ergenlik dönemindeki tüm bireylerde kesinlikle aynı belirtiler aynı anda görülür.' }
    ],
    correctAnswer: 'C',
    explanation: 'Ergenliğe giriş yaşı ve bu dönemde görülen bedensel/ruhsal değişimlerin şiddeti genetik ve çevresel faktörlere bağlı olarak bireyden bireye farklılık gösterir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Ergenlik Dönemi Çeşitliliği',
    theme: 'Ergenlik ve Gelişim'
  },
  {
    id: 63310,
    subTopicId: 'g6-u3-sub2',
    contextTitle: 'Ergenlik Döneminde Akran Baskısı ve Bağımlılıklar',
    scenario: 'İstatistiklere göre sigara ve zararlı maddelere başlama yaşı büyük oranda ergenlik yıllarına (13-15 yaş) denk gelmektedir.',
    questionPrompt: 'Ergenlik döneminde bu durumun oluşmasının temel nedeni olarak hangisi gösterilebilir?',
    options: [
      { key: 'A', text: 'Ergenlik döneminde arkadaş çevresinin ve gruba kabul edilme arzusunun çok etkili olması' },
      { key: 'B', text: 'Ergenlik döneminde kas kütlesinin artması' },
      { key: 'C', text: 'Kızların ergenliğe erkeklerden önce girmesi' },
      { key: 'D', text: 'Ergenlerin spora meraklı olması' }
    ],
    correctAnswer: 'A',
    explanation: 'Ergenlikte birey aileden ziyade arkadaş grubuna yönelir. Akran baskısı ve "gruba ait olma" isteği yanlış arkadaş çevrelerinde bağımlılık yapıcı maddelere yönelme riskini artırır.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Ergenlik Psikolojisi ve Korunma',
    theme: 'Sağlıklı Ergenlik'
  },
  {
    id: 63311,
    subTopicId: 'g6-u3-sub2',
    contextTitle: 'Ergenlik Dönemini Sağlıklı Geçirme Yolları',
    scenario: 'Ergenlik dönemindeki bir gencin hayat kalitesini artırıcı davranışlar listelenmiştir:\nI. Sağlıklı ve dengeli beslenme\nII. Ailesi ve öğretmenleriyle açık iletişim hâlinde olma\nIII. Spor ve sanat gibi sosyal etkinliklere katılma',
    questionPrompt: 'Birey ergenlik dönemini sağlıklı ve huzurlu geçirebilmek için bu davranışlardan hangilerini yapmalıdır?',
    options: [
      { key: 'A', text: 'Yalnız II.' },
      { key: 'B', text: 'I ve III.' },
      { key: 'C', text: 'II ve III.' },
      { key: 'D', text: 'I, II ve III.' }
    ],
    correctAnswer: 'D',
    explanation: 'Dengeli beslenme hormonal gelişimi destekler; aile ve öğretmenle iletişim duygusal çatışmaları çözer; spor ve sosyal hobiler ise enerjiyi olumlu yönlendirir. Tümü sağlıklı gelişim için esastır.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Kişisel Gelişim ve Sağlık',
    theme: 'Ergenlik Dönemi Rehberliği'
  }
];

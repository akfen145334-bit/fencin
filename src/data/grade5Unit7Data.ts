import { Unit } from '../types/curriculum';

export const grade5Unit7Data: Unit = {
  id: 'unit-7',
  unitNumber: 7,
  bookNumber: 2,
  grade: 5,
  subject: 'Fen Bilimleri',
  title: 'Sürdürülebilir Yaşam ve Geri Dönüşüm',
  unitEndPageRange: 's. 154-161',
  colorTheme: {
    primary: 'emerald-500',
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-500/10',
    accent: 'emerald-400',
    text: 'text-emerald-300'
  },
  subTopics: [
    {
      id: 'unit7-sub1',
      title: '1. Evsel Atıklar ve Geri Dönüşüm (Kaynağında Ayrıştırma)',
      shortTitle: 'Evsel Atıklar ve Geri Dönüşüm',
      badge: 'Sayfa 136-146',
      pageRange: '136 - 146',
      concepts: ['Evsel Atık', 'Çöp', 'Katı Atık', 'Sıvı Atık', 'Geri Dönüşüm', 'Atık Pil Toplama', 'Bitkisel Atık Yağlar', 'Tıbbi Atıklar', 'Ayrıştırma Kutuları'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Evsel Atık Nedir? Çöp ile Geri Dönüştürülebilir Atık Farkı',
          paragraphs: [
            'Ev, okul, iş yeri ve restoran gibi yaşam alanlarında tüketim faaliyetleri sonucunda geriye kalan ve ihtiyaç duyulmayan maddelere evsel atık denir.',
            'Evsel atıkların büyük çoğunluğu geri dönüştürülebilir değerli ham maddelerdir. Ancak bu atıkların içinden hiçbir şekilde yeniden kullanılamayan, geri dönüştürülme imkânı bulunmayan kısmına çöp adı verilir.',
            'Atıkların türlerine göre kaynağında (evde, okulda) sınıflandırılması geri dönüşüm tesislerinde harcanacak iş gücü ve enerjiyi büyük oranda azaltır, atıkların birbirini kirletmesini engeller.'
          ],
          table: {
            headers: ['Geri Dönüşümü MÜMKÜN Olan Atıklar', 'Geri Dönüşümü MÜMKÜN OLMAYAN (Çöp) Atıklar'],
            rows: [
              ['Plastik şişeler, kapaklar, bidonlar, naylon ambalajlar', 'Yağlanmış/kirli kâğıtlar, karbon kâğıdı, duvar kâğıdı'],
              ['Kullanılmış defterler, kitaplar, gazete, karton kutular', 'Kâğıt havlu, ıslak mendil, tuvalet kâğıdı, çocuk bezi'],
              ['Cam şişeler, kavanozlar, cam tabaklar, bardaklar', 'Kömür külü, çürümüş sebze ve yemek artıkları'],
              ['Alüminyum içecek kutuları, metal konserveler, folyolar', 'Boya, tiner, deodorant ve motor yağı kutuları'],
              ['Kullanılmış piller ve araç aküleri (Özel kutularda)', 'Tıbbi atıklar (Özel kırmızı tıbbi atık kutularında toplanır)']
            ]
          }
        },
        {
          heading: 'Geri Dönüşüm Kutularının Renk Kodları ve Özel Atıklar',
          paragraphs: [
            'Toplumda geri dönüşüm bilincini yerleştirmek amacıyla standart renk kodları kullanılır:',
            '• MAVİ KUTU: Kâğıt ve Karton Atıkları (Defter, gazete, kitap, karton koli)',
            '• SARI KUTU: Plastik Atıkları (Pet şişe, plastik kap, poşet)',
            '• YEŞİL KUTU: Cam Atıkları (Şişe, kavanoz, cam bardak)',
            '• GRİ KUTU: Metal Atıkları (Alüminyum teneke kutu, konserve kutusu)',
            '• KIRMIZI KUTU: Atık Pil Kutuları (Pillerdeki cıva, kadmiyum, kurşun gibi ağır metallerin toprağa ve yeraltı sularına karışmasını önlemek için ayrı toplanmalıdır).',
            '• BİTKİSEL ATIK YAĞLAR: Kızartma yağları kesinlikle lavaboya dökülmemelidir! 1 litre atık yağ 1 milyon litre içme suyunu kirletir ve kanalizasyon borularını tıkar. Sızdırmaz kaplarda biriktirilerek atık yağ toplama noktalarına teslim edilmelidir.'
          ]
        },
        {
          heading: 'Kültür ve Çevre Ahlakı',
          paragraphs: [
            'Bizim köklü medeniyetimizde çevre temizliği ve israftan kaçınmak en yüce ahlaki ilkelerdendir. Ecdadımız Osmanlı döneminde şehirlerin, mahallelerin ve suların temizliğine azami özen göstermiş, "Temiz avlu evin süsüdür" ve "Aslan yattığı yerden belli olur" atasözleriyle temizliği bir hayat tarzı kılmıştır. Ekmeğin ve suyun bir damlasının dahi israf edilmemesi kültürümüzün en kutsal emanetidir.'
          ]
        }
      ],
      trueFalseQuestions: [
        {
          id: 1,
          text: 'Kullanılmış kızartma yağları lavaboya dökülerek kolayca uzaklaştırılmalıdır.',
          isCorrect: false,
          explanation: 'Kesinlikle yanlıştır! 1 litre atık yağ 1 milyon litre temiz suyu kirletir; sızdırmaz kaplarda toplanarak lisanslı atık yağ kumbaralarına verilmelidir.'
        },
        {
          id: 2,
          text: 'Yağlı pizza kutuları, tuvalet kâğıtları ve kömür külü geri dönüştürülebilir kâğıt atığı sayılır.',
          isCorrect: false,
          explanation: 'Yanlıştır. Yağlanmış kâğıtlar ve tuvalet kâğıtları kirlendiği için geri dönüştürülemez çöptür.'
        },
        {
          id: 3,
          text: 'Atık pillerin toprağa ve suya karışması içerdikleri ağır metaller nedeniyle canlı sağlığına büyük zarar verir.',
          isCorrect: true,
          explanation: 'Doğrudur. Piller zehirli kimyasallar içerdiğinden mutlaka kırmızı atık pil kutularında toplanmalıdır.'
        },
        {
          id: 4,
          text: 'Atıkların evde kaynağında ayrıştırılması, geri dönüşüm tesislerindeki iş gücünü ve enerji sarfiyatını azaltır.',
          isCorrect: true,
          explanation: 'Doğrudur. Ayrıştırılan atıklar birbirini kirletmez ve kolayca işleme alınır.'
        }
      ],
      lgsQuestions: [
        {
          id: 1,
          questionPrompt: 'Aşağıda verilen atık maddelerden hangisi geri dönüşüm kutusuna atılmaya UYGUN BİR MALZEMEDİR?',
          options: [
            { key: 'A', text: 'Kullanılmış alüminyum içecek kutusu' },
            { key: 'B', text: 'Kömür külü' },
            { key: 'C', text: 'Yağlanmış börek kâğıdı' },
            { key: 'D', text: 'Bozulmuş yoğurt ve yemek artığı' }
          ],
          correctAnswer: 'A',
          explanation: 'Alüminyum içecek kutuları metaller grubunda %100 geri dönüştürülebilir; kül, yağlı kâğıt ve organik bozulmuş gıdalar geri dönüştürülemez.'
        },
        {
          id: 2,
          questionPrompt: 'Bir okulda toplanan atık maddeler ve kazanımlarla ilgili hazırlanan tabloda 1 ton kâğıdın geri dönüştürülmesiyle 17 ağacın kesilmekten kurtarıldığı, 1 ton plastiğin geri dönüşümüyle 16.300 varil petrol tasarrufu sağlandığı belirtilmiştir.\n\nBuna göre tablodan çıkarılacak EN KAPSAMLI sonuç hangisidir?',
          options: [
            { key: 'A', text: 'Geri dönüşüm doğal kaynakların korunmasına ve enerji tasarrufuna muazzam katkı sağlar.' },
            { key: 'B', text: 'Sadece plastik malzemelerin geri dönüşümü yapılmalıdır.' },
            { key: 'C', text: 'Kâğıt geri dönüştürüldüğünde petrol tasarrufu sağlanır.' },
            { key: 'D', text: 'Cam maddeler doğada hiç yer kaplamaz.' }
          ],
          correctAnswer: 'A',
          explanation: 'Veriler geri dönüşümün hem ağaçlar hem petrol hem de su ve enerji gibi tükenen doğal kaynakları doğrudan koruduğunu gösterir.'
        }
      ],
      glossary: [
        { term: 'Evsel Atık', definition: 'Ev ve yaşam alanlarında kullanıldıktan sonra kullanım dışı kalan katı ve sıvı atıklar.' },
        { term: 'Çöp', definition: 'Atıklar içerisinden hiçbir şekilde yeniden kullanılamayan ve geri dönüştürülemeyen atık kısmı.' },
        { term: 'Tıbbi Atık', definition: 'Hastanelerde kullanılan ilaç, enjektör, sargı bezi gibi insan sağlığına zararlı özel atıklar.' }
      ]
    },
    {
      id: 'unit7-sub2',
      title: '2. Sıfır Atık Hiyerarşisi, Atık Yönetimi & İleri Dönüşüm',
      shortTitle: 'Sıfır Atık & İleri Dönüşüm',
      badge: 'Sayfa 147-153',
      pageRange: '147 - 153',
      concepts: ['Sıfır Atık Projesi', 'Sıfır Atık Hiyerarşisi', 'Önleme', 'Yeniden Kullanım (Reuse)', 'İleri Dönüşüm (Upcycling)', 'Geri Kazanım', 'TABS', 'MoTAT', 'KDS', 'Depozito Sistemi'],
      simulationId: 'moon-phases',
      summarySections: [
        {
          heading: 'Sıfır Atık Hiyerarşisi (En Öncelikliden En Sona)',
          paragraphs: [
            'Sıfır Atık; israfın önlenmesini, kaynakların verimli kullanılmasını, atık oluşumunun en aza indirilmesini ve atıkların etkili şekilde toplanmasını hedefleyen milli bir çevre hareketidir.',
            'Sıfır Atık Hiyerarşisi basamakları en öncelikli tercihten en son seçeneğe doğru şu şekildedir:'
          ],
          table: {
            headers: ['Basamak Sırası', 'Aşama Adı', 'Tanımı ve Günlük Hayat Örneği'],
            rows: [
              ['1. En Öncelikli Seçenek', 'ÖNLEME', 'Atık oluşumunu baştan engellemek (Alışverişte bez torba veya file kullanmak, tek kullanımlık plastikleri reddetmek)'],
              ['2. İkinci Seçenek', 'AZALTMA', 'Tüketimi ihtiyaç kadar yapmak, israftan kaçınmak (Yiyecekleri yetecek kadar pişirmek)'],
              ['3. Üçüncü Seçenek', 'TEKRAR KULLANIM (REUSE)', 'Maddeleri işlemden geçirmeden kendi veya benzer amacıyla tekrar kullanmak (Kavanozları baharatlık yapmak, küçülen giysileri bağışlamak)'],
              ['4. Dördüncü Seçenek', 'İLERİ DÖNÜŞÜM (UPCYCLING)', 'Atık malzemeleri daha yüksek değere sahip estetik, sanatsal veya işlevsel yeni ürünlere dönüştürmek (Eski kottan fırın eldiveni veya şık çanta yapmak, şişe kapaklarından mozaik tablo)'],
              ['5. Beşinci Seçenek', 'GERİ DÖNÜŞÜM', 'Atıkları fiziksel/kimyasal işlemlerle ham maddeye dönüştürüp üretime sokmak (Kâğıdı hamur yapıp koli üretmek)'],
              ['6. Altıncı Seçenek', 'ENERJİ GERİ KAZANIMI', 'Organik atıklardan biyogaz veya elektrik üretimi'],
              ['7. En Son Seçenek', 'BERTARAF', 'Hiçbir şekilde değerlendirilemeyen kalıntıların çevreye zarar vermeden düzenli depolanması']
            ]
          }
        },
        {
          heading: 'Atık Yönetim Sistemi: TABS, MoTAT, KDS ve Depozito',
          paragraphs: [
            'Çevre, Şehircilik ve İklim Değişikliği Bakanlığı atık yönetimini modern dijital sistemlerle takip eder:',
            '• TABS (Atık Beyan Sistemi): İşletmelerin yıllık atık miktarlarını bildirdiği sistem.',
            '• MoTAT (Mobil Atık Takip): Tehlikeli atık taşıyan lisanslı araçların uydu üzerinden anbean denetimi.',
            '• KDS (Kütle Denge Sistemi): Geri dönüşüm tesislerine giren ve çıkan ham madde miktarının dengesini izler.',
            '• Depozito Sistemi: İçecek ambalajlarına küçük bir depozito bedeli eklenerek tüketicilerin bu ambalajları doğaya atmak yerine iade makinelerine getirmesini teşvik eder.'
          ]
        },
        {
          heading: 'Çağını Aşanlar: Çevre ve Geri Dönüşüm Bilginleri',
          paragraphs: [
            '• Mevlânâ Celâleddîn-i Rûmî: Tabiat kaynaklarının sınırsız olmadığını, açgözlülükle aşırı tüketimin insanlığı felakete sürükleyeceğini asırlar öncesinden öğütlemiştir.',
            '• İbni Haldun: Mukaddime eserinde insan ve çevre arasındaki etkileşimi anlatmış, medeniyetlerin gelişmesi için çevre bilincinin şart olduğunu savunmuştur.',
            '• Benjamin Law: Eski kumaş ve giysi kırpıntılarını liflerine ayırarak saf pamuk elde eden mekanik geri dönüşüm makinesini geliştirmiştir.',
            '• August Ferdinand Möbius: İnce bir kâğıt şeridin bir ucunu 180 derece büküp yapıştırarak sonsuz tek yüzeyli "Möbius Şeridi"ni keşfetmiştir. Bu sonsuz döngü, bugünkü 3 oklu evrensel geri dönüşüm logosunun ilham kaynağı olmuştur.'
          ]
        }
      ],
      trueFalseQuestions: [
        {
          id: 5,
          text: 'Sıfır Atık hiyerarşisinde en öncelikli basamak geri dönüşüm değil, atık oluşumunu ÖNLEMEKTİR.',
          isCorrect: true,
          explanation: 'Doğrudur. En etkili yöntem atığın hiç oluşmamasını sağlamaktır (bez çanta kullanmak gibi).'
        },
        {
          id: 6,
          text: 'Eski kot pantolondan şık bir çanta ve fırın eldiveni yapmak ileri dönüşüm (upcycling) örneğidir.',
          isCorrect: true,
          explanation: 'Doğrudur. Atık bir eşyadan daha değerli ve yeni işlevli bir ürün üretmek ileri dönüşümdür.'
        },
        {
          id: 7,
          text: 'Möbius şeridi bugünkü üç oklu geri dönüşüm sembolünün ilham kaynağı olmuştur.',
          isCorrect: true,
          explanation: 'Doğrudur. August Ferdinand Möbius’un sonsuz şerit tasarımı geri dönüşüm logosunun esin kaynağıdır.'
        },
        {
          id: 8,
          text: 'Yoğurt kabını yıkadıktan sonra içine çiçek dikerek saksı yapmak geri dönüşüm değil, yeniden kullanım örneğidir.',
          isCorrect: true,
          explanation: 'Doğrudur. Kimyasal işlemden geçmeden doğrudan kullanıldığı için yeniden kullanımdır (reuse).'
        }
      ],
      lgsQuestions: [
        {
          id: 3,
          questionPrompt: 'Bir aile;\nI. Markete giderken bez torba ve file götürerek plastik poşet almamıştır.\nII. Evdeki cam kavanozları temizleyip kışlık salça koymuştur.\nIII. Boş plastik şişeleri ve gazeteleri ayrıştırıp geri dönüşüm kutusuna atmıştır.\n\nBu ailenin yaptığı eylemlerin Sıfır Atık Hiyerarşisindeki karşılıkları hangisinde doğru sıralanmıştır?',
          options: [
            { key: 'A', text: 'I: Önleme - II: Tekrar Kullanım - III: Geri Dönüşüm' },
            { key: 'B', text: 'I: Geri Dönüşüm - II: Bertaraf - III: Önleme' },
            { key: 'C', text: 'I: Tekrar Kullanım - II: Önleme - III: İleri Dönüşüm' },
            { key: 'D', text: 'I: Azaltma - II: Enerji Kazanımı - III: Bertaraf' }
          ],
          correctAnswer: 'A',
          explanation: 'Poşet almamak önleme (I), kavanozu salçalık yapmak tekrar kullanım (II), şişe ve gazeteyi kutuya atmak geri dönüşümdür (III).'
        },
        {
          id: 4,
          questionPrompt: 'Depozito Saha Yönetim Sistemi ile içecek ambalajlarına küçük bir bedel konularak geri iadesi karşılığında bu ücretin tüketiciye geri verilmesi amaçlanmaktadır.\n\nBu sistemin temel çevre hedefi aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'İçecek satış fiyatlarını artırmak' },
            { key: 'B', text: 'Tüketicilerin ambalajları çevreye atmak yerine geri dönüşüm noktalarına getirmesini teşvik etmek' },
            { key: 'C', text: 'Cam fabrikalarını kapatmak' },
            { key: 'D', text: 'Ambalajların ağırlığını artırmak' }
          ],
          correctAnswer: 'B',
          explanation: 'Depozito sistemi maddi teşvikle atıkların kaynağında toplanarak çevre kirliliğinin önlenmesini sağlar.'
        }
      ],
      glossary: [
        { term: 'Sıfır Atık', definition: 'Atık oluşumunun önlenmesi, kaynağında ayrıştırılması ve geri kazandırılması hedefi.' },
        { term: 'İleri Dönüşüm (Upcycling)', definition: 'Kullanılmış atıklardan sanatsal, estetik veya daha yüksek işlevli yeni ürünler üretme süreci.' },
        { term: 'Yeniden Kullanım (Reuse)', definition: 'Bir eşyanın fabrikada işlenmeden kendi amacıyla veya benzer bir ihtiyaç için tekrar kullanılması.' }
      ]
    }
  ],
  unitEndQuestions: [
    {
      id: 1,
      pageNumber: '154',
      type: 'multiple_choice',
      title: 'Geri Dönüşüm Kutusu Ayrıştırma',
      questionPrompt: 'Aşağıdaki atıklardan hangisi geri dönüştürülemeyen atık (çöp) grubunda yer alır?',
      options: [
        { key: 'A', text: 'Kullanılmış alüminyum kutu' },
        { key: 'B', text: 'Kömür külü ve yağlı kâğıt' },
        { key: 'C', text: 'Cam turşu kavanozu' },
        { key: 'D', text: 'Plastik şampuan kutusu' }
      ],
      correctAnswer: 'B',
      detailedExplanation: 'Kömür külü ve yağlı kâğıtlar geri dönüştürülemez; diğerleri ise metal, cam ve plastik geri dönüşüm kutularına atılır.'
    },
    {
      id: 2,
      pageNumber: '156',
      type: 'multiple_choice',
      title: 'Geri Dönüşüm ve Enerji Tasarrufu',
      questionPrompt: '1 ton plastik atığın geri dönüştürülmesiyle yaklaşık 16.300 varil petrol tasarrufu sağlanmaktadır. Bu veri geri dönüşümün hangi faydasını doğrudan açıklar?',
      options: [
        { key: 'A', text: 'Tükenen doğal kaynakların korunması ve ham madde tasarrufu' },
        { key: 'B', text: 'Güneş tutulmasının gözlenmesi' },
        { key: 'C', text: 'Suyun kaynama sıcaklığının artması' },
        { key: 'D', text: 'Hücre bölünmesinin hızlanması' }
      ],
      correctAnswer: 'A',
      detailedExplanation: 'Plastik petrolden üretilir; plastiğin geri dönüştürülmesi doğrudan petrol kaynaklarının korunmasını sağlar.'
    }
  ],
  unitEnd20Questions: [
    {
      id: 1,
      questionPrompt: 'Sıfır atık hiyerarşisinde en öncelikli seçenek aşağıdakilerden hangisidir?',
      options: [
        { key: 'A', text: 'Önleme' },
        { key: 'B', text: 'Geri Dönüşüm' },
        { key: 'C', text: 'Enerji Geri Kazanımı' },
        { key: 'D', text: 'Bertaraf' }
      ],
      correctAnswer: 'A',
      explanation: 'Sıfır atık hiyerarşisinde en öncelikli adım atık oluşumunu baştan engellemek yani "Önleme"dir.'
    },
    {
      id: 2,
      questionPrompt: 'Evlerde kullanılan kızartma yağları lavaboya döküldüğünde ne gibi zararlar ortaya çıkar?',
      options: [
        { key: 'A', text: 'Suların ve boruların temizlenmesini sağlar.' },
        { key: 'B', text: 'Temiz su kaynaklarını zehirler ve kanalizasyon borularını tıkar.' },
        { key: 'C', text: 'Balıkların büyümesini hızlandırır.' },
        { key: 'D', text: 'Elektrik tasarrufu sağlar.' }
      ],
      correctAnswer: 'B',
      explanation: '1 litre atık yağ 1 milyon litre suyu kirletir ve lavabo borularını tıkar.'
    }
  ]
};

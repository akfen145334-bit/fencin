import { LgsQuestion } from '../../../types/curriculum';

// ============================================================================
// 5. ÜNİTE: BASİT MAKİNELER - MEBİ LGS DENEME VE SORU HAVUZU
// (Bilecik, Elazığ, Gaziantep, Karabük ÖDM Beceri Temelli Soruları Dahil)
// ============================================================================

export const sebahattinBasitMakinelerQuestions: LgsQuestion[] = [
  // Subtopic 1: Makaralar ve Palangalar
  {
    id: 5101,
    subTopicId: 'g8-u5-sub1',
    contextTitle: 'Salıncaklı Makara Sistemleri Dengesi',
    scenario: 'Makara ve salıncak ağırlıkları ile sürtünmelerin önemsiz olduğu üç sistem dengededir:\n• Birinci sistem: Murat ipi çekmekte, Ezgi salıncakta oturmaktadır (1 hareketli, 2 sabit makara).\n• İkinci sistem: Ezgi ve Didem salıncaklarda birbirini dengelemektedir.\n• Üçüncü sistem: Çağan ipi çekmekte, Didem salıncakta dengededir.',
    questionPrompt: 'Buna göre kurulan bu makara sistemleri ile ilgili aşağıdaki yorumlardan hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Birinci sistemde Murat’ın yerinde Çağan bulunsaydı sistem dengede kalırdı.' },
      { key: 'B', text: 'İkinci sistemde Didem’in yerinde Çağan olsaydı Ezgi yukarı doğru hareket ederdi.' },
      { key: 'C', text: 'Üçüncü sistemde Didem’in yerinde Murat olsaydı Çağan yukarı yönde hareket ederdi.' },
      { key: 'D', text: 'Üçüncü sistemde Didem’in yerinde Ezgi olsaydı sistem yine dengede kalırdı.' }
    ],
    correctAnswer: 'A',
    explanation: 'Sistemlerdeki hareketli ve sabit makara kombinasyonları farklı kuvvet kazançlarına sahiptir. Birinci sistemde Murat ile Çağan\'ın ağırlıkları ve uyguladıkları kuvvetler farklı makara düzenekleriyle dengelendiğinden Murat\'ın yerine Çağan konulduğunda denge kesinlikle bozulur.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Makara Sistemleri Denge Analizi',
    theme: 'Makaralarda Denge ve Kuvvet'
  },

  {
    id: 5102,
    subTopicId: 'g8-u5-sub1',
    contextTitle: 'İnşaatta Palanga Sistemleri ile Yük Kaldırma',
    scenario: 'Bir inşaatta çalışan iki işçi özdeş P yüklerini aynı yüksekliğe çıkarmak için farklı palanga sistemleri kurmuştur:\n• Birinci işçi: İpi aşağı doğru çekerek yükü yükseltmektedir (1 sabit, 1 hareketli makara).\n• İkinci işçi: İpi yukarı doğru çekerek yükü yükseltmektedir (yükü taşıyan ip sayısı daha fazla).',
    questionPrompt: 'Kurulan palanga sistemleri ile ilgili aşağıdaki yorumlardan hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Birinci işçinin yaptığı iş, ikinci işçinin yaptığı işe eşittir.' },
      { key: 'B', text: 'Birinci işçinin ipi çekme miktarı, ikinci işçinin ipi çekme miktarından fazladır.' },
      { key: 'C', text: 'İkinci işçinin uyguladığı kuvvet, birinci işçinin uyguladığı kuvvetten azdır.' },
      { key: 'D', text: 'Her iki sistemde de kuvvetin yönü değişmiştir.' }
    ],
    correctAnswer: 'B',
    explanation: 'İkinci işçinin palangasındaki kuvvet kazancı daha büyüktür. Basit makinelerde kuvvetten kazanç ne kadar çoksa yoldan kayıp o kadar fazladır; dolayısıyla ipi daha çok çekmesi gereken işçi ikinci işçidir (Birinci işçinin ip çekme miktarı daha azdır).',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'İş ve Enerji Korunumu',
    theme: 'Palangalarda Kuvvet ve Yol İlişkisi'
  },

  {
    id: 5103,
    subTopicId: 'g8-u5-sub1',
    contextTitle: 'Sabit ve Hareketli Makara Ekleme Deneyi',
    scenario: 'Bir öğretmen 1. düzeneğe 30 N, 2. düzeneğe 120 N yük bağlayarak başlangıçta birer sabit makara ile sistemleri dengeliyor. Ardından sistemlere sırayla birer makara ekleyerek yükleri dengeleyen kuvvetleri ölçüyor:\n• 1. düzenekte kuvvet her eklenen makarada 30 N olarak sabit kalıyor.\n• 2. düzenekte kuvvet 120 N\'dan sırasıyla 60 N ve 30 N\'a düşüyor.',
    questionPrompt: 'Oluşturulan kuvvet grafiklerine göre aşağıdaki yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'İkinci düzeneğe eklenen 2. makara ile 3. makara aynı tip makaralardır.' },
      { key: 'B', text: 'Birinci düzenekte kullanılan makaralardan en az bir tanesi hareketli makaradır.' },
      { key: 'C', text: 'İki düzeneğe de ikişer makara eklendiğinde oluşan kuvvet kazançları eşittir.' },
      { key: 'D', text: 'İkinci düzenekte son durumda iki sabit, iki hareketli makara birlikte kullanılmıştır.' }
    ],
    correctAnswer: 'D',
    explanation: '1. düzenekte kuvvet 30 N sabit kaldığı için tüm eklenen makaralar sabit makaradır (kuvvet kazancı sağlamaz). 2. düzenekte kuvvet her seferinde yarıya indiği için (120 -> 60 -> 30 N) eklenen makaralar hareketli makaradır. Son durumda sistemde 2 hareketli ve 2 sabit makara bulunur.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Makara Türü Tespiti',
    theme: 'Sabit vs Hareketli Makara Grafikleri'
  },

  {
    id: 5104,
    subTopicId: 'g8-u5-sub1',
    contextTitle: 'Ağaç Dalından İp Geçirerek Yük Kaldırma',
    scenario: 'İsmail, ağır bir yükün bağlı olduğu ipi ağacın kalın bir dalı üzerinden geçirip ipi aşağı doğru çekerek yükü yukarıya doğru kaldırmaktadır.',
    questionPrompt: 'İsmail\'in kurduğu bu düzenek sağladığı avantajlar açısından aşağıdaki basit makinelerden hangisiyle birebir benzerdir?',
    options: [
      { key: 'A', text: 'Kuvvetten kazanç sağlayan eğik düzlem' },
      { key: 'B', text: 'Yalnızca kuvvetin yönünü değiştiren sabit makara' },
      { key: 'C', text: 'Kuvvetten iki kat kazanç sağlayan hareketli makara' },
      { key: 'D', text: 'Yoldan kazanç sağlayan cımbız ve maşa' }
    ],
    correctAnswer: 'B',
    explanation: 'Ağaç dalı üzerinden ip geçirmek sabit makara görevi görür: Yükün ağırlığı kadar kuvvet uygulanır (kuvvetten kazanç veya kayıp yoktur), sadece kuvvetin yönü aşağı çekilerek yükün yukarı çıkması sağlanır (iş kolaylığı sağlar).',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Basit Makine Özdeşleştirme',
    theme: 'Sabit Makara ve İş Kolaylığı'
  },

  {
    id: 5105,
    subTopicId: 'g8-u5-sub1',
    contextTitle: 'Hareketli Makara ve Yoldan Kayıp Prensibi',
    scenario: 'Bir işçi 1 hareketli ve 1 sabit makaradan oluşan sistemde 400 N ağırlığındaki çimento torbasını 3 metre yüksekliğindeki çatıya çıkarmak istemektedir.',
    questionPrompt: 'İşçinin uyguladığı kuvvet ve ipi çekmesi gereken mesafe hangisinde doğru verilmiştir? (Sürtünme ve makara ağırlıkları önemsizdir.)',
    options: [
      { key: 'A', text: 'Kuvvet: 200 N, İpi çekme miktarı: 6 metre' },
      { key: 'B', text: 'Kuvvet: 400 N, İpi çekme miktarı: 3 metre' },
      { key: 'C', text: 'Kuvvet: 200 N, İpi çekme miktarı: 3 metre' },
      { key: 'D', text: 'Kuvvet: 800 N, İpi çekme miktarı: 1,5 metre' }
    ],
    correctAnswer: 'A',
    explanation: 'Hareketli makarada 2 kat kuvvet kazancı vardır: F = P / 2 = 400 / 2 = 200 N. Ancak basit makinelerde enerjiden kazanç olmadığı için kuvvetten 2 kat kazanç varsa yoldan 2 kat kayıp vardır: İp çekme mesafesi h_ip = 2 x 3 = 6 metre olmalıdır.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Kuvvet ve Yol Hesabı',
    theme: 'Hareketli Makara Kuralları'
  },

  {
    id: 5106,
    subTopicId: 'g8-u5-sub1',
    contextTitle: 'Murat’ın 60 N Yükü Kaldırma Palanga Düzeneği',
    scenario: 'Murat 60 N ağırlığındaki P yükünü 2 metre yukarı çıkarmak için 1 sabit ve 1 hareketli makaradan oluşan ve ipin serbest ucunun aşağı doğru çekildiği bir palanga düzeneği kurmuştur.',
    questionPrompt: 'Murat’ın yükü istenilen yüksekliğe (2 m) çıkarabilmesi için uygulayacağı kuvvetin büyüklüğü ve ipi çekme miktarı hangisinde doğru verilmiştir? (Makara ağırlıkları ve sürtünmeler önemsizdir.)',
    options: [
      { key: 'A', text: 'Kuvvet: 20 N, Çekilen ip: 6 m' },
      { key: 'B', text: 'Kuvvet: 30 N, Çekilen ip: 2 m' },
      { key: 'C', text: 'Kuvvet: 15 N, Çekilen ip: 8 m' },
      { key: 'D', text: 'Kuvvet: 30 N, Çekilen ip: 4 m' }
    ],
    correctAnswer: 'D',
    explanation: 'Sistemde hareketli makarayı taşıyan ip sayısı 2’dir (kuvvet aşağı yönlü uygulandığı için son ip hareketli makaradan tavana gitmektedir). Dolayısıyla F = P / 2 = 60 / 2 = 30 N olur. Yoldan kayıp 2 kat olduğundan, yükü 2 m yükseltmek için ip 2 x 2 = 4 m çekilmelidir.',
    skillTag: 'Hesaplama & Mantık',
    cognitiveLevel: 'Palanga Kuvvet ve Yol İlişkisi',
    theme: 'Palangalarda İş ve Enerji'
  },

  {
    id: 5107,
    subTopicId: 'g8-u5-sub1',
    contextTitle: 'Palangada İp Gerilmeleri ve Dinamometre Değerleri',
    scenario: 'Makara ağırlıkları ve sürtünmelerin önemsenmediği bir makara sisteminde ipin serbest ucuna 20 N büyüklüğünde F kuvveti uygulanarak sistem dengede tutulmaktadır. Sistemde tavana bağlı D1 ve D2 dinamometreleri ile yükün altındaki D3 dinamometresi bulunmaktadır.',
    questionPrompt: 'Buna göre D1, D2 ve D3 dinamometrelerinde okunan değerler hangi seçenekte doğru verilmiştir?',
    options: [
      { key: 'A', text: 'D1: 10 N, D2: 20 N, D3: 40 N' },
      { key: 'B', text: 'D1: 10 N, D2: 40 N, D3: 40 N' },
      { key: 'C', text: 'D1: 40 N, D2: 20 N, D3: 80 N' },
      { key: 'D', text: 'D1: 20 N, D2: 20 N, D3: 40 N' }
    ],
    correctAnswer: 'C',
    explanation: 'Aynı ip üzerindeki gerilme her noktada eşit ve F = 20 N\'dur. D2 dinamometresi tek bir ipi taşıdığı için 20 N gösterir. Hareketli makarayı yukarı çeken iki ip gerilmesi (20 N + 20 N = 40 N) D1 hattına binerken, alt kısımdaki toplam yük D3 üzerinde 80 N değerini dengeler.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'İp Gerilmesi ve Dinamometre Analizi',
    theme: 'Makaralarda İp Gerilmeleri'
  },

  {
    id: 5108,
    subTopicId: 'g8-u5-sub1',
    contextTitle: 'Özdeş Yüklerin Farklı Makara Sistemlerinde Dengelenmesi',
    scenario: 'Özdeş P yükleri; K sisteminde bir hareketli ve bir sabit makara ile, L sisteminde ise sadece iki sabit makara ile dengelenmiştir. Sürtünmeler ve makara ağırlıkları ihmal edilmektedir.',
    questionPrompt: 'Bu sistemlerle ilgili yapılan aşağıdaki yorumlardan hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'K sisteminde kuvvet kazancı 2 iken, L sisteminde kuvvet kazancı yoktur (1\'dir).' },
      { key: 'B', text: 'Yükler aynı yüksekliğe çıkarıldığında yerçekimine karşı yapılan işler eşittir.' },
      { key: 'C', text: 'K sisteminde uygulanan kuvvet, L sisteminde uygulanan kuvvetten büyüktür.' },
      { key: 'D', text: 'Yükleri aynı yüksekliğe çıkarmak için K sistemindeki ip daha fazla çekilmelidir.' }
    ],
    correctAnswer: 'C',
    explanation: 'K sisteminde hareketli makara olduğu için F_K = P / 2 = 0,5 P\'dir (kuvvet kazancı vardır). L sisteminde ise sabit makaralar olduğundan F_L = P\'dir. Dolayısıyla K sistemindeki kuvvet L sistemindekinden küçüktür (F_K < F_L). C seçeneğindeki "büyüktür" ifadesi yanlıştır.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Kuvvet Kazancı Karşılaştırması',
    theme: 'Sabit ve Hareketli Makaraların Karşılaştırılması'
  },

  {
    id: 5109,
    subTopicId: "g8-u5-sub1",
    contextTitle: "Sabit ve Hareketli Makarada İp Çekilme Mesafesi ile Yükün Yükselmesi (Bilecik ÖDM)",
    scenario: "Bir öğrenci laboratuvarda ağırlığı önemsiz sabit makara ve hareketli makaradan oluşan iki düzenek kuruyor. 1. düzenekte P yükü tek bir sabit makarayla, 2. düzenekte ise aynı P yükü tek bir hareketli makarayla dengeleniyor. Öğrenci her iki düzenekte de yükleri yerden tam 2 metre yüksekliğe çıkarmak istiyor.",
    questionPrompt: "Buna göre öğrencinin düzeneklerde uyguladığı kuvvetler ve ipleri çekme miktarları ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
    options: [
      { key: "A", text: "1. düzenekte ip 2 metre çekilirken uygulanan kuvvet P kadardır; 2. düzenekte ip 4 metre çekilirken uygulanan kuvvet P/2 kadardır." },
      { key: "B", text: "2. düzenekte kuvvetten kazanç olduğu için yapılan iş 1. düzeneğe göre yarıya iner." },
      { key: "C", text: "1. düzenekte kuvvet kazancı 2 kat iken, 2. düzenekte kuvvet kazancı yoktur." },
      { key: "D", text: "2. düzenekte yükü 2 metre yukarı çıkarmak için ip 1 metre çekilmelidir." }
    ],
    correctAnswer: "A",
    explanation: "Sabit makarada kuvvet kazancı yoktur (F = P). Yükü 2 m yükseltmek için ip 2 m çekilir. Hareketli makarada 2 kat kuvvet kazancı vardır (F = P/2). Kuvvetten 2 kat kazanç olduğu için yoldan 2 kat kayıp vardır; yani yükün 2 m yükselmesi için ip 4 m çekilmelidir. Her iki sistemde de yapılan iş eşittir (İşten kazanç olmaz).",
    skillTag: "Deney Analizi ve Hipotez Testi",
    cognitiveLevel: "Makaralarda Yol ve Kuvvet Bağıntısı",
    theme: "Sabit ve Hareketli Makara Prensipleri"
  },

  {
    id: 5110,
    subTopicId: "g8-u5-sub1",
    contextTitle: "Palangada İpin Çekilme Yönü ve Dinamometre Değerleri (Elazığ ÖDM)",
    scenario: "Özdeş makara ve 120 N ağırlığındaki özdeş yüklerle kurulan iki farklı palanga sisteminde:\n• Sistem I: 1 sabit, 1 hareketli makara bulunmakta, ip yukarı yönde çekilmektedir (yükü taşıyan ip sayısı 3'tür).\n• Sistem II: 1 sabit, 1 hareketli makara bulunmakta, son ip sabit makaradan geçirilerek aşağı yönde çekilmektedir (yükü taşıyan ip sayısı 2'dir).\nSürtünmeler ve makara ağırlıkları ihmal edilmektedir.",
    questionPrompt: "Bu sistemlerle ilgili olarak yapılan aşağıdaki yorumlardan hangisi yanlıştır?",
    options: [
      { key: "A", text: "Sistem I'deki dinamometrede okunan değer 40 N, Sistem II'deki dinamometrede okunan değer 60 N'dır." },
      { key: "B", text: "Sistem I'de kuvvetin yönü değişmemişken, Sistem II'de kuvvetin yönü değiştirilmiştir." },
      { key: "C", text: "Aynı yükü eşit yüksekliğe çıkarmak için Sistem I'de Sistem II'ye göre yerçekimine karşı daha az iş yapılır." },
      { key: "D", text: "Yükleri 1 metre yükseltmek için Sistem I'de ip 3 metre, Sistem II'de ise ip 2 metre çekilmelidir." }
    ],
    correctAnswer: "C",
    explanation: "Basit makinelerde İŞTEN KAZANÇ OLMAZ. Aynı yük aynı yüksekliğe çıkarıldığında yerçekimine karşı yapılan iş (W = F·x = G·h) her iki sistemde de tamamen aynıdır (120 N · 1 m = 120 J). Bu nedenle Sistem I'de daha az iş yapılır ifadesi kesinlikle yanlıştır.",
    skillTag: "Grafik ve Şema Değerlendirme",
    cognitiveLevel: "İş Prensibi ve Palanga Analizi",
    theme: "Palanga Sistemlerinde Kuvvet Kazancı"
  },

  {
    id: 5111,
    subTopicId: "g8-u5-sub1",
    contextTitle: "Makara Ağırlığının Kuvvet Kazancına Etkisi Deneyi (Gaziantep ÖDM)",
    scenario: "Bir araştırmacı, ağırlıkları 10 N olan hareketli makaralar ile ağırlıksız hareketli makaraları karşılaştırmak üzere bir deney tasarlıyor. 60 N'lık yükü önce ağırlıksız hareketli makara ile, ardından ağırlığı 10 N olan hareketli makara ile dengeliyor.",
    questionPrompt: "Bu deney sonucunda elde edilen veriler ışığında yapılan aşağıdaki değerlendirmelerden hangisi doğrudur?",
    options: [
      { key: "A", text: "Makara ağırlığının olması, yükü taşımak için uygulanan giriş kuvvetini azaltarak kuvvet kazancını artırır." },
      { key: "B", text: "Ağırlıksız makarada uygulanan kuvvet 30 N iken, 10 N makara ağırlığı olduğunda kuvvet (60 + 10)/2 = 35 N olur." },
      { key: "C", text: "Makara ağırlığı arttığında yükü 1 metre kaldırmak için çekilmesi gereken ip miktarı da artar." },
      { key: "D", text: "Sabit makaralarda makara ağırlığı uygulanan çekme kuvvetini doğrudan artırır." }
    ],
    correctAnswer: "B",
    explanation: "Hareketli makarada makara da yükle birlikte yükseldiği için toplam taşınan ağırlık (G + G_makara) olur. İki ip paylaştığı için F = (60 + 10)/2 = 35 N olur. Makaranın ağırlığı uygulanması gereken kuvveti artırır, dolayısıyla kuvvet kazancını azaltır.",
    skillTag: "Değişken Analizi",
    cognitiveLevel: "Verim ve Gerçek Sistemler",
    theme: "Makara Ağırlığı ve Verim"
  },

  {
    id: 5112,
    subTopicId: "g8-u5-sub1",
    contextTitle: "Farklı Makara Sistemlerinde Yapılan İşlerin Karşılaştırılması (Karabük ÖDM)",
    scenario: "Görselde verilen üç farklı sistemde 100 N ağırlığındaki özdeş koliler yerden h kadar yüksekliğe çıkarılacaktır:\n• K Düzeneği: Tek bir sabit makara\n• L Düzeneği: Bir sabit, bir hareketli makara\n• M Düzeneği: İki hareketli, bir sabit makaradan oluşan palanga\nTüm düzeneklerde sürtünmeler ve makara ağırlıkları önemsizdir.",
    questionPrompt: "Kolilerin h yüksekliğine çıkarılması sırasında harcanan enerjiler ve uygulanan kuvvetler hakkında aşağıdakilerden hangisi söylenebilir?",
    options: [
      { key: "A", text: "M düzeneğinde kuvvetten en çok kazanç sağlandığı için en az enerji harcanır." },
      { key: "B", text: "Uygulanan kuvvetler arasındaki ilişki K > L > M iken, yapılan işler K = L = M'dir." },
      { key: "C", text: "L düzeneğinde yapılan iş K düzeneğinde yapılan işin yarısı kadardır." },
      { key: "D", text: "K düzeneğinde yoldan kazanç sağlandığı için en fazla kuvvet harcanır." }
    ],
    correctAnswer: "B",
    explanation: "Makaralarda kuvvet kazancı arttıkça uygulanan kuvvet küçülür (K: 100 N, L: 50 N, M: 25 N -> K > L > M). Ancak yerçekimine karşı yapılan iş W = G·h formülü gereği her üç sistemde de aynıdır (K = L = M). Basit makineler hiçbir zaman enerjiden veya işten kazanç sağlamaz.",
    skillTag: "Kavramsal Çıkarım",
    cognitiveLevel: "LGS Mantık Muhakeme",
    theme: "İş ve Enerjinin Korunumu"
  },

  {
    id: 5113,
    subTopicId: "g8-u5-sub1",
    contextTitle: "İnşaat Vincinde Palanga Halatı Uzunluğu ve Güvenlik (Bilecik ÖDM)",
    scenario: "Bir inşaat mühendisi, 6000 N ağırlığındaki beton bloğu kaldırmak için vincin ucuna 4 hareketli ve 4 sabit makaradan oluşan bir palanga sistemi entegre etmiştir. Yükü taşıyan ip sayısı 8 olarak tasarlanmıştır. Sistemde sürtünmeler ihmal edilmektedir.",
    questionPrompt: "Bu sistemin çalışma prensibiyle ilgili ifadelerden hangisi YANLIŞTIR?",
    options: [
      { key: "A", text: "Vinç motorunun uygulayacağı çekme kuvveti 750 N'a düşmüştür." },
      { key: "B", text: "Beton bloğun 5 metre yukarı taşınabilmesi için vinç halatının 40 metre sarılması gerekir." },
      { key: "C", text: "Halatın sarılma boyunun uzaması, motorun harcadığı elektrik enerjisini 8 kat azaltır." },
      { key: "D", text: "Palanga sistemi sayesinde kuvvetten 8 kat kazanç, yoldan 8 kat kayıp elde edilmiştir." }
    ],
    correctAnswer: "C",
    explanation: "Sistemde yükü taşıyan 8 ip olduğundan kuvvet kazancı 8 kattır. F = 6000 / 8 = 750 N olur (A doğru). Yoldan 8 kat kayıp olacağından yük 5 m çıkarken ip 5 x 8 = 40 m çekilmelidir (B doğru). Ancak basit makineler hiçbir zaman enerjiden kazanç sağlamaz, motorun harcadığı enerji azalmaz (C yanlıştır).",
    skillTag: "Mühendislik ve LGS Muhakeme",
    cognitiveLevel: "Palanga ve Enerji Korunumu",
    theme: "İş ve Enerji Değişmezliği"
  },

  {
    id: 5114,
    subTopicId: "g8-u5-sub1",
    contextTitle: "Dinamometre Göstergeleri ile Bağımsız Değişken Deneyi (Elazığ ÖDM)",
    scenario: "Zeynep, Fen Bilimleri proje ödevinde \"Makara sistemlerinde hareketli makara sayısı arttıkça uygulanan giriş kuvveti azalır.\" hipotezini test etmek istemektedir.",
    questionPrompt: "Zeynep'in bu hipotezi bilimsel olarak kanıtlayabilmesi için kurması gereken deney düzeneklerinde bağımsız, bağımlı ve kontrol edilen değişkenler aşağıdakilerin hangisinde doğru eşleştirilmiştir?",
    options: [
      { key: "A", text: "Bağımsız Değişken: Hareketli Makara Sayısı | Bağımlı Değişken: Dinamometredeki Kuvvet | Kontrol Edilen: Yükün Ağırlığı ve Çekilme Yüksekliği" },
      { key: "B", text: "Bağımsız Değişken: Yükün Ağırlığı | Bağımlı Değişken: Hareketli Makara Sayısı | Kontrol Edilen: Dinamometredeki Kuvvet" },
      { key: "C", text: "Bağımsız Değişken: İpin Çekilme Hızı | Bağımlı Değişken: Yükün Yüksekliği | Kontrol Edilen: Sabit Makara Sayısı" },
      { key: "D", text: "Bağımsız Değişken: Dinamometredeki Kuvvet | Bağımlı Değişken: Makara Ağırlığı | Kontrol Edilen: Hareketli Makara Sayısı" }
    ],
    correctAnswer: "A",
    explanation: "Deneyde araştırmacının bizzat değiştirdiği etken bağımsız değişkendir (hareketli makara sayısı). Buna bağlı olarak değişen sonuç bağımlı değişkendir (dinamometrede okunan kuvvet). Sabit tutulan faktörler ise kontrol edilen değişkendir (yükün ağırlığı, yükseklik, ip cinsi).",
    skillTag: "Bilimsel Süreç Becerileri",
    cognitiveLevel: "Deney Tasarımı ve Değişken Tespiti",
    theme: "Makaralarda Bilimsel Yöntem"
  },

  // Subtopic 2: Kaldıraçlar
  {
    id: 5201,
    subTopicId: 'g8-u5-sub2',
    contextTitle: 'Gazoz Açacağının İki Farklı Kullanım Şekli',
    scenario: 'Gazoz açacağı iki farklı şekilde kullanılmaktadır:\n• Görsel 1: Açacağın ucu kapağın ortasına bastırılıp alt tırnağı ile kapak kenarı yukarı kaldırılıyor (Desteğin ortada olduğu çift taraflı kaldıraç).\n• Görsel 2: Açacağın uç kısmı kapağın kenarına dayanıp tutma kolu yukarı çekiliyor (Yükün ortada olduğu tek taraflı kaldıraç).',
    questionPrompt: 'Görsellerle ilgili yapılan aşağıdaki değerlendirmelerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Görsel 2’deki kullanım tipi çift taraflı kaldıraç örneğidir.' },
      { key: 'B', text: 'İki kaldıraç tipinde de yoldan kayıp olabilir.' },
      { key: 'C', text: 'Görsel 1’deki kaldıraç tipinde kesinlikle yoldan kazanç vardır.' },
      { key: 'D', text: 'Her iki durumda da işten kazanç sağlanır.' }
    ],
    correctAnswer: 'B',
    explanation: 'Her iki kaldıraç düzeninde de kuvvet kolu yük kolundan büyük tutulabildiği için kuvvetten kazanç ve dolayısıyla yoldan kayıp sağlanabilir. Hiçbir basit makinede işten kazanç olamaz.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Kaldıraç Tipleri Analizi',
    theme: 'Kaldıraç Tipleri ve Kullanım'
  },

  {
    id: 5202,
    subTopicId: 'g8-u5-sub2',
    contextTitle: 'Günlük Yaşamda Kaldıraç Çeşitleri Eşleştirmesi',
    scenario: 'Farklı kaldıraç tipleri ve örnekleri incelenmektedir:\n• Desteğin ortada olduğu: Pense, makas, tahterevalli\n• Yükün ortada olduğu: El arabası, ceviz kıracağı, gazoz açacağı\n• Kuvvetin ortada olduğu: Cımbız, maşa, tenis raketi',
    questionPrompt: 'Aşağıdaki araçlardan hangisinde kuvvet kolu yük kolundan küçük olduğu için daima kuvvetten kayıp (yoldan kazanç) vardır?',
    options: [
      { key: 'A', text: 'El arabası' },
      { key: 'B', text: 'Ceviz kıracağı' },
      { key: 'C', text: 'Cımbız ve Maşa' },
      { key: 'D', text: 'Pense' }
    ],
    correctAnswer: 'C',
    explanation: 'Cımbız ve maşada kuvvet desteğin ile yükün ortasındadır. Kuvvet kolu yük kolundan kısa olduğu için daima kuvvetten kayıp vardır, ancak yoldan kazanç ve hassas tutma kolaylığı sağlar.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Kaldıraç Sınıflandırması',
    theme: 'Kuvvet Kolu vs Yük Kolu'
  },

  {
    id: 5203,
    subTopicId: 'g8-u5-sub2',
    contextTitle: 'Ceviz Kıracağında Destek, Yük ve Kuvvet Noktaları',
    scenario: 'Bir ceviz kıracağında üç nokta belirlenmiştir:\n• K noktası: İki metal kolun birbirine menteşeyle bağlandığı uç\n• L noktası: Cevizin sıkıştırıldığı orta hazne\n• M noktası: Elimizle kuvvet uyguladığımız sapın uç kısmı',
    questionPrompt: 'K, L ve M noktaları ile ilgili aşağıdaki yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'K noktası yükün bulunduğu yeri temsil eder.' },
      { key: 'B', text: 'L ile M noktaları arasındaki mesafe yük koludur.' },
      { key: 'C', text: 'K ile L noktaları arasındaki mesafe yük koludur; K ile M arasındaki mesafe kuvvet koludur.' },
      { key: 'D', text: 'El, L noktasına yaklaştırılırsa cevizi kırmak için daha az kuvvet uygulanır.' }
    ],
    correctAnswer: 'C',
    explanation: 'K noktası destektir (menteşe), L noktası yüktür (ceviz), M noktası kuvvettir. Destek ile yük arası (K-L) yük kolu, destek ile kuvvet arası (K-M) kuvvet koludur. Kuvvet kolu yük kolundan büyük olduğu için ceviz kıracağı kuvvet kazancı sağlar.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Kaldıraç Anatomisi',
    theme: 'Ceviz Kıracağı ve Kaldıraç İlkeleri'
  },

  {
    id: 5204,
    subTopicId: 'g8-u5-sub2',
    contextTitle: 'Yatay Dengede Olmayan Kaldıracın Dengelenmesi',
    scenario: 'Eşit bölmeli bir kaldıraçta destek ortada olmayıp yüke daha yakındır ve kaldıraç şu an yatay dengede değildir (Yük tarafı aşağıda, kuvvet tarafı yukarıda kalmıştır).',
    questionPrompt: 'Kaldıracın yatay düzlemde dengeye gelebilmesi için;\nI. Kuvveti destekten uzaklaştırarak 2 yönünde hareket ettirmek\nII. Yükü desteğe yaklaştırarak 2 yönünde hareket ettirmek\nIII. Desteği yüke doğru yaklaştırarak 1 yönünde hareket ettirmek\nişlemlerinden hangileri tek başına yapılabilir?',
    options: [
      { key: 'A', text: 'Yalnız I' },
      { key: 'B', text: 'I ve II' },
      { key: 'C', text: 'II ve III' },
      { key: 'D', text: 'I, II ve III' }
    ],
    correctAnswer: 'D',
    explanation: 'Denge şartı: Yük x Yük Kolu = Kuvvet x Kuvvet Kolu. Kuvvet kolunu uzatmak (I), yük kolunu kısaltmak (II) veya desteği yüke yaklaştırarak yük kolunu küçültüp kuvvet kolunu büyütmek (III) kuvvetin torkunu artırarak kaldıracı yatay dengeye getirir.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Kaldıraçta Denge Şartı',
    theme: 'Kaldıraçta Tork ve Denge'
  },

  {
    id: 5205,
    subTopicId: 'g8-u5-sub2',
    contextTitle: 'İnşaat Platformunda Desteğin ve Ağırlığın Kumandayla Hareketi',
    scenario: 'Bir inşaatta dengede olan platformda Batı tarafında hareketli ağırlık, ortada hareketli destek, Doğu tarafında ise tuğlaların yüklendiği platform bulunmaktadır. İşçi platformu önce aşağı indirip tuğlaları yükleyecek, sonra yukarı kaldıracaktır.',
    questionPrompt: 'Platformun önce aşağı inip tuğla yüklendikten sonra yukarı kalkması için sırasıyla hangi iki işlem yapılmalıdır?',
    options: [
      { key: 'A', text: 'Önce ağırlık doğuya kaydırılmalı (platform aşağı iner), sonra destek batıya kaydırılmalı (platform yukarı kalkar).' },
      { key: 'B', text: 'Önce ağırlık batıya kaydırılmalı, sonra destek doğuya kaydırılmalıdır.' },
      { key: 'C', text: 'Önce destek doğuya kaydırılmalı, sonra ağırlık doğuya kaydırılmalıdır.' },
      { key: 'D', text: 'Her iki durumda da destek sabit tutulmalıdır.' }
    ],
    correctAnswer: 'A',
    explanation: 'Ağırlık doğuya (desteğe) yaklaştırıldığında sol tarafın dengesi hafifler ve Doğu tarafındaki platform aşağı iner. Tuğla yüklendikten sonra desteği batıya kaydırmak veya ağırlığı batıya çekmek sol tarafın kuvvet kolunu uzatarak platformu yukarı kaldırır.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Mühendislik Denge Problemi',
    theme: 'Hareketli Destekli Kaldıraçlar'
  },

  {
    id: 5206,
    subTopicId: 'g8-u5-sub2',
    contextTitle: 'Farklı Kaldıraç Tiplerinde Kuvvet Büyüklükleri Karşılaştırması',
    scenario: 'Ağırlığı ve sürtünmesi önemsiz, eşit bölmeli üç kaldıraçta özdeş P yükleri dengelenmiştir:\n• 1. Kaldıraç: Desteğe 1 birim uzaklıkta P yükü, desteğin diğer tarafında 2 birim uzakta yukarı yönlü F1 kuvveti uygulanıyor.\n• 2. Kaldıraç: Desteğe 2 birim uzaklıkta P yükü, desteğin diğer tarafında 3 birim uzakta F2 kuvveti uygulanıyor.\n• 3. Kaldıraç: Destek uçta, P yükü desteğe 2 birim uzakta, en uçtaki F3 kuvveti ise desteğe 4 birim uzakta yukarı uygulanıyor.',
    questionPrompt: 'Buna göre sistemleri dengede tutan F1, F2 ve F3 kuvvetlerinin büyüklükleri arasındaki ilişki hangi seçenekte doğru verilmiştir?',
    options: [
      { key: 'A', text: 'F2 > F1 > F3' },
      { key: 'B', text: 'F1 > F2 > F3' },
      { key: 'C', text: 'F3 > F2 > F1' },
      { key: 'D', text: 'F1 = F2 = F3' }
    ],
    correctAnswer: 'B',
    explanation: 'Tork eşitliği (Kuvvet x Kuvvet Kolu = Yük x Yük Kolu):\n1. Kaldıraç: F1 x 2 = P x 1 => F1 = 0,5 P.\n2. Kaldıraç: F2 x 3 = P x 2 => F2 = 0,67 P.\n3. Kaldıraç: F3 x 4 = P x 2 => F3 = 0,5 P.\nBurada yük ve kuvvet kolları incelendiğinde kuvvet kolu en küçük olan kaldıraçta gereken kuvvet en büyüktür: F1 > F2 > F3 sıralaması ortaya çıkar.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Kaldıraç Dengesi ve Tork',
    theme: 'Kaldıraç Çeşitleri ve Kuvvet Hesabı'
  },

  {
    id: 5207,
    subTopicId: 'g8-u5-sub2',
    contextTitle: 'Tahtırevalli Üzerinde Denge ve Konum Değişimi',
    scenario: 'Ağırlığı önemsiz eşit bölmeli tahtırevallide Ezgi, Derin ve Defne adlı üç arkadaş denge deneyi yapmaktadır:\n• Şekil 1’de Ezgi (desteğe 2 birim uzakta) ile Derin (desteğe 3 birim uzakta) dengededir.\n• Şekil 2’de Ezgi (desteğe 2 birim uzakta) ile Defne (desteğe 1 birim uzakta) dengededir.\n• Şekil 3’te Derin desteğe 2 birim mesafedeki K noktasına oturtulmuştur.',
    questionPrompt: 'Buna göre bu durumla ilgili aşağıdaki ifadelerden hangileri doğrudur?\nI. Derin’in ağırlığı Ezgi’nin ağırlığından azdır.\nII. Ezgi’nin ağırlığı Defne’nin ağırlığından azdır (Defne daha ağırdır).\nIII. Şekil 3’te sistemin dengelenmesi için Defne desteğe 1 birim mesafedeki Z noktasına oturmalıdır.',
    options: [
      { key: 'A', text: 'Yalnız I' },
      { key: 'B', text: 'I ve II' },
      { key: 'C', text: 'II ve III' },
      { key: 'D', text: 'I, II ve III' }
    ],
    correctAnswer: 'B',
    explanation: 'Şekil 1: G_Ezgi x 2 = G_Derin x 3 => G_Ezgi > G_Derin (I doğru). Şekil 2: G_Ezgi x 2 = G_Defne x 1 => G_Defne = 2 x G_Ezgi (Defne Ezgi\'den ağırdır, dolayısıyla Ezgi Defne\'den hafiftir, II doğru). Defne çok ağır olduğu için Şekil 3\'te Derin\'i dengelemek adına desteğe daha yakın noktada yer almalıdır.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Kaldıraçta Çoklu Değişken',
    theme: 'Tahtırevallide Denge Koşulları'
  },

  {
    id: 5208,
    subTopicId: 'g8-u5-sub2',
    contextTitle: 'Farklı Amaçlar İçin Tasarlanan Makas Tipleri ve Kuvvet Kazancı',
    scenario: 'Dört farklı makas modeli (K: Kâğıt makası, L: Kumaş makası, M: Budama makası, N: Terzi makası) incelenmektedir. Makasların yük kolu (bıçak boyu) ve kuvvet kolu (sap boyu) uzunlukları ölçülmüştür:\n• K makası: Yük kolu 6 cm, kuvvet kolu 4 cm\n• L makası: Yük kolu 7 cm, kuvvet kolu 3 cm\n• M makası: Yük kolu 8 cm, kuvvet kolu 12 cm\n• N makası: Yük kolu 10 cm, kuvvet kolu 10 cm',
    questionPrompt: 'Bu makaslarla ilgili aşağıdaki ifadelerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'L makasındaki kuvvet kazancı, M makasındaki kuvvet kazancından daha büyüktür.' },
      { key: 'B', text: 'M makasında kuvvet kolu yük kolundan uzun olduğu için kuvvet kazancı sağlanır.' },
      { key: 'C', text: 'N makasında giriş ve çıkış kuvvetleri birbirine eşittir (kuvvet kazancı 1’dir).' },
      { key: 'D', text: 'K makasının yük kolu, L makasının yük kolundan daha kısadır.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kaldıraçlarda kuvvet kazancı = Kuvvet Kolu / Yük Kolu\'dur. L makasında kazanç 3/7 < 1 iken, M makasında kazanç 12/8 = 1,5 > 1\'dir. Dolayısıyla M makasının kuvvet kazancı L makasından çok daha büyüktür. A seçeneğindeki ifade kesinlikle yanlıştır.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Araç-Gereçlerde Kaldıraç Oranları',
    theme: 'Makaslarda Kuvvet Kazancı'
  },

  {
    id: 5209,
    subTopicId: "g8-u5-sub2",
    contextTitle: "Desteğin Yüke ve Kuvvete Mesafesi Deneyi (Bilecik ÖDM)",
    scenario: "Eşit bölmelendirilmiş homojen bir çubuk üzerinde P yükü sabit bir noktada asılı tutulurken, destek noktası adım adım yüke yaklaştırılmakta ve çubuk diğer uçtan uygulanan düşey F kuvveti ile dengede tutulmaktadır.",
    questionPrompt: "Destek noktası yüke doğru yaklaştırıldıkça sistemde gerçekleşen değişimler ile ilgili aşağıdakilerden hangisi doğrudur?",
    options: [
      { key: "A", text: "Yük kolu kısaldığı ve kuvvet kolu uzadığı için sistemi dengede tutan F kuvveti azalır, kuvvet kazancı artar." },
      { key: "B", text: "Kuvvet kolu kısaldığı için sistemi dengede tutmak için gereken F kuvveti artar." },
      { key: "C", text: "Yük kolu uzadığı için yoldan kazanç sağlanmaya başlar." },
      { key: "D", text: "Kuvvet kazancı arttığı için yükü aynı yüksekliğe kaldırmak için yapılan iş azalır." }
    ],
    correctAnswer: "A",
    explanation: "Kaldıraç bağıntısı: Kuvvet x Kuvvet Kolu = Yük x Yük Kolu. Destek yüke yaklaştırıldığında yük kolu kısalır, destekten kuvvete olan mesafe (kuvvet kolu) uzar. Kuvvet kazancı (Kuvvet Kolu / Yük Kolu) artar ve uygulanması gereken kuvvet azalır. İş ise değişmez.",
    skillTag: "Deney Analizi",
    cognitiveLevel: "Kaldıraç Dengesi ve Tork",
    theme: "Kuvvet Kolu - Yük Kolu Bağıntısı"
  },

  {
    id: 5210,
    subTopicId: "g8-u5-sub2",
    contextTitle: "Tek Taraflı Kaldıraçlarda Yükün Konumu ve Kuvvet Kazancı (Elazığ ÖDM)",
    scenario: "Desteğin uçta olduğu tek taraflı kaldıraç türlerinden biri olan el arabasında yük, tekerlek (destek) ile kollar (kuvvet) arasında taşınmaktadır.",
    questionPrompt: "El arabası modeli ve kuvvet kazancı prensipleri dikkate alındığında aşağıdaki çıkarımlardan hangisine ulaşılamaz?",
    options: [
      { key: "A", text: "Kuvvet kolu daima yük kolundan daha uzun olduğu için kesinlikle kuvvetten kazanç sağlar." },
      { key: "B", text: "Taşınan yük tekerleğe (desteğe) ne kadar yakın yerleştirilirse, kaldırmak için uygulanması gereken kuvvet o kadar azalır." },
      { key: "C", text: "El arabası yoldan kayba neden olurken, aynı zamanda yapılan iş miktarını da yarı yarıya azaltır." },
      { key: "D", text: "Kuvvetin yönü ile yükün hareket yönü aynıdır (her ikisi de yukarı yönlüdür)." }
    ],
    correctAnswer: "C",
    explanation: "El arabasında destek uçta, yük ortada, kuvvet diğer uçtadır. Kuvvet kolu yük kolundan büyük olduğundan daima kuvvetten kazanç ve yoldan kayıp vardır. Kuvvet ile yük aynı yönlü hareket eder. Ancak hiçbir basit makine işten kazanç sağlamaz, işi yarıya indirmez.",
    skillTag: "Kavram Yanılgısı Analizi",
    cognitiveLevel: "Kaldıraç Tipleri ve İş Mantığı",
    theme: "El Arabası ve Tek Taraflı Kaldıraçlar"
  },

  {
    id: 5211,
    subTopicId: "g8-u5-sub2",
    contextTitle: "Kuvvetin Ortada Olduğu Kaldıraçlar ve Hassasiyet (Gaziantep ÖDM)",
    scenario: "Laboratuvarda küçük parçaları tutmak için cımbız, mangalda kömür tutmak için maşa, tenis oynamak için raket kullanılır. Bu aletlerde destek bir uçta, kuvvet ortada, yük ise diğer uçtadır.",
    questionPrompt: "Bu araçların kullanım amacı ve fiziksel özellikleri ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
    options: [
      { key: "A", text: "Bu araçlar kuvvetten kazanç sağlayarak ağır cisimleri az bir kuvvetle kaldırmak için üretilmiştir." },
      { key: "B", text: "Kuvvet kolu yük kolundan kısa olduğu için kuvvetten kayıp, yoldan kazanç vardır; iş yapma kolaylığı ve hareket hassasiyeti sağlarlar." },
      { key: "C", text: "Desteğin ortada olduğu çift taraflı kaldıraç grubuna örnektirler." },
      { key: "D", text: "Bu araçlarda uygulanan giriş kuvveti daima ortaya çıkan çıkış kuvvetinden (yükten) daha küçüktür." }
    ],
    correctAnswer: "B",
    explanation: "Cımbız, maşa, kürek ve tenis raketinde kuvvet ortada, yük uçtadır. Kuvvet kolu < Yük kolu olduğundan kuvvetten kayıp, yoldan kazanç vardır. Amaç kuvvetten kazanmak değil, iş yapma kolaylığı, hız, menzil ve tutma hassasiyeti sağlamaktır.",
    skillTag: "Sınıflandırma ve Çıkarım",
    cognitiveLevel: "Kuvvetten Kayıp Sağlayan Kaldıraçlar",
    theme: "Cımbız ve Maşa Mekanizması"
  },

  {
    id: 5212,
    subTopicId: "g8-u5-sub2",
    contextTitle: "Eşit Bölmeli Çubukta Denge ve Ağırlık Dağılımı (Karabük ÖDM)",
    scenario: "Ağırlığı önemsiz, 6 eşit bölmeli bir çubuğun tam ortasında (3. çizgi) destek bulunmaktadır. Çubuğun sol ucuna (destekten 3 birim uzaklığa) 40 N ağırlığında X cismi asılmıştır.",
    questionPrompt: "Çubuğun yatay dengede kalabilmesi için sağ tarafa asılacak Y cismi ve asılacağı nokta aşağıdakilerden hangisi gibi olamaz?",
    options: [
      { key: "A", text: "Destekten 2 birim uzaklığa 60 N ağırlığında bir cisim asmak" },
      { key: "B", text: "Destekten 3 birim uzaklığa 40 N ağırlığında bir cisim asmak" },
      { key: "C", text: "Destekten 1 birim uzaklığa 120 N ağırlığında bir cisim asmak" },
      { key: "D", text: "Destekten 2 birim uzaklığa 80 N ağırlığında bir cisim asmak" }
    ],
    correctAnswer: "D",
    explanation: "Sol tarafın torku: 40 N x 3 birim = 120 N·birim. Yatay denge için sağ tarafın da torku 120 olmalıdır. A şıkkı: 60 x 2 = 120 (Dengede). B şıkkı: 40 x 3 = 120 (Dengede). C şıkkı: 120 x 1 = 120 (Dengede). D şıkkı: 80 x 2 = 160 N·birim olur ve sağ taraf aşağı çöker, denge bozulur.",
    skillTag: "Sayısal Mantık ve Matematiksel Modelleme",
    cognitiveLevel: "Tork ve Denge Koşulları",
    theme: "Kaldıraç Dengesi Hesaplamaları"
  },

  {
    id: 5213,
    subTopicId: "g8-u5-sub2",
    contextTitle: "Makas ve Pense Modellerinde Kuvvet Kazancı Karşılaştırması (Bilecik ÖDM)",
    scenario: "Bir öğrenci kumaş kesme makası ile kalın tel kesme pensesini incelemektedir:\n• Kumaş makasında: Tutma kolu (kuvvet kolu) kısa, bıçak kısmı (yük kolu) uzundur.\n• Tel kesme pensesinde: Tutma sapı (kuvvet kolu) çok uzun, kesici çene kısmı (yük kolu) ise çok kısadır.",
    questionPrompt: "Bu iki aletin tasarım amaçları ile ilgili aşağıdaki çıkarımlardan hangisi doğrudur?",
    options: [
      { key: "A", text: "Tel pensesinde kuvvet kolu uzun tutularak büyük bir kuvvet kazancı sağlanmış ve sert telleri kolayca kesmek hedeflenmiştir." },
      { key: "B", text: "Kumaş makasında kuvvet kolu kısa tutulduğu için kuvvetten kazanç sağlanmıştır." },
      { key: "C", text: "Tel pensesi yoldan kazanç sağlarken, kumaş makası kuvvetten kazanç sağlar." },
      { key: "D", text: "Her iki alette de yükün desteğe olan mesafesi kuvvetin desteğe olan mesafesinden daima büyüktür." }
    ],
    correctAnswer: "A",
    explanation: "Tel kesme pensesinde kuvvet kolu çok uzun, yük kolu çok kısa yapılarak kuvvet kazancı maksimize edilir; böylece uygulanan küçük bir el kuvvetiyle çok sert teller kesilebilir. Kumaş makasında ise kumaşı tek seferde uzun kesebilmek için bıçak uzun tutulmuştur (yoldan kazanç, kuvvetten kayıp).",
    skillTag: "Tasarım ve Fonksiyon Değerlendirme",
    cognitiveLevel: "Günlük Yaşam Araçlarında Optimizasyon",
    theme: "Makas ve Pense Karşılaştırması"
  },

  {
    id: 5214,
    subTopicId: "g8-u5-sub2",
    contextTitle: "Günlük Yaşam Aletleri ve Kaldıraç Türleri Eşleştirmesi (Elazığ ÖDM)",
    scenario: "Fen bilimleri dersinde öğrenciler günlük yaşam aletlerini kaldıraç tiplerine göre gruplandırmıştır:\n1. Grup: Destek ortada (Tahterevalli, Pense, Eşit Kollu Terazi)\n2. Grup: Yük ortada (El Arabası, Fındık Kıracağı, Menteşeli Kapı)\n3. Grup: Kuvvet ortada (Cımbız, Maşa, Olta)",
    questionPrompt: "Bu grupların kuvvet kazancı özellikleri hakkında aşağıdakilerden hangisi kesinlikle doğrudur?",
    options: [
      { key: "A", text: "2. gruptaki tüm araçlarda kuvvet kazancı 1'den büyüktür (kuvvetten kesinlikle kazanç vardır)." },
      { key: "B", text: "1. gruptaki tüm araçlar daima kuvvetten kazanç sağlar." },
      { key: "C", text: "3. gruptaki araçlarda yoldan kayıp vardır." },
      { key: "D", text: "2. gruptaki araçlarda kuvvetin yönü değişirken, 1. gruptaki araçlarda kuvvetin yönü değişmez." }
    ],
    correctAnswer: "A",
    explanation: "Yükün ortada olduğu kaldıraçlarda (2. grup: el arabası, fındık kıracağı), destek bir uçta olduğu için kuvvet kolu (destekten kuvvete olan tüm çubuk boyu) daima yük kolundan büyüktür. Bu nedenle 2. grupta istisnasız daima kuvvet kazancı > 1 olur. 1. grupta desteğin yerine göre kuvvetten kazanç, kayıp veya eşitlik olabilir. 3. grupta ise kuvvetten kayıp, yoldan kazanç vardır.",
    skillTag: "Kavramsal Haritalama",
    cognitiveLevel: "Kaldıraç Gruplarının Karşılaştırılması",
    theme: "Kaldıraç Çeşitleri ve Mekanizmaları"
  },

  // Subtopic 3: Eğik Düzlem, Çıkrık, Vida ve Bileşik Makineler
  {
    id: 5301,
    subTopicId: 'g8-u5-sub3',
    contextTitle: 'Farklı Eğimlerdeki Eğik Düzlemlerde Kuvvet Kazancı',
    scenario: 'Sürtünmelerin önemsiz olduğu üç eğik düzlemde özdeş P yükleri aynı 2 metre yüksekliğe çıkarılmaktadır:\n• I. Düzenek: Uzunluk L = 8 m, Yükseklik h = 2 m (Kuvvet F1)\n• II. Düzenek: Uzunluk L = 6 m, Yükseklik h = 2 m (Kuvvet F2)\n• III. Düzenek: Uzunluk L = 4 m, Yükseklik h = 2 m (Kuvvet F3)',
    questionPrompt: 'Buna göre bu düzeneklerle ilgili aşağıdaki yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Düzeneklerin üçünde de kuvvetten kayıp vardır.' },
      { key: 'B', text: 'Yapılan işler arasındaki ilişki I > II > III şeklindedir.' },
      { key: 'C', text: 'Kuvvet kazançları arasındaki ilişki III > II > I şeklindedir.' },
      { key: 'D', text: 'Uygulanan kuvvetler arasındaki ilişki F3 > F2 > F1 şeklindedir.' }
    ],
    correctAnswer: 'D',
    explanation: 'Eğik düzlemde kuvvet kazancı = L / h\'dir. Yükseklikler eşitken eğik düzlem uzunluğu arttıkça eğim azalır, kuvvet kazancı artar ve gereken kuvvet küçülür (F1 en küçük, F3 en büyük: F3 > F2 > F1). Tüm düzeneklerde özdeş yük aynı yüksekliğe çıktığından yapılan işler eşittir (işten kazanç olmaz).',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Eğik Düzlem Bağıntısı F.L=P.h',
    theme: 'Eğik Düzlemde Kuvvet Kazancı'
  },

  {
    id: 5302,
    subTopicId: 'g8-u5-sub3',
    contextTitle: 'İşçinin Merdivenle Farklı Katlara Kutu Taşıması',
    scenario: 'Bir işçi aynı merdiveni kullanarak özdeş kutuları binanın 1., 2. ve 3. katlarına çıkarmıştır. 1. kata çıkarırken F1, 2. kata çıkarırken F2, 3. kata çıkarırken F3 kuvveti uygulamıştır.',
    questionPrompt: 'Yapılan bu taşıma işlemi ile ilgili aşağıdaki yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Kutular 1. ve 2. kata taşınırken yapılan işler eşittir.' },
      { key: 'B', text: '1. kata yapılan taşıma işleminde eğik düzlemin uzunluğu en fazladır.' },
      { key: 'C', text: '3. kata yapılan taşıma işleminde eğik düzlemin yüksekliği en fazladır.' },
      { key: 'D', text: 'Taşıma işlemi sırasında uygulanan kuvvetler arasındaki ilişki F1 > F2 > F3 şeklindedir.' }
    ],
    correctAnswer: 'C',
    explanation: '3. katın yerden yüksekliği (h) 1. ve 2. kattan daha fazladır. Aynı merdiven daha dik konumlanacağı için yükseklik artmış, kuvvet kazancı azalmıştır. Ayrıca daha yüksek kata çıkıldığı için yapılan yer çekimine karşı iş de 3. katta en fazladır.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Merdiven Eğik Düzlem Analizi',
    theme: 'Eğik Düzlemde Yükseklik ve İş'
  },

  {
    id: 5303,
    subTopicId: 'g8-u5-sub3',
    contextTitle: 'Eğik Düzlem ve Çıkrık Bileşik Makinesi',
    scenario: 'Sürtünmelerin ihmal edildiği sistemde eğik düzlem üzerindeki M yükü, çıkrığın küçük silindirine sarılı iple dengelenmiş; çıkrık koluna F kuvveti uygulanmaktadır.',
    questionPrompt: 'Sistem dengede olduğuna göre aşağıdaki yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Eğik düzlemde L uzunluğu ve h yüksekliği aynı oranda azaltılırsa sistemin dengesi bozulmaz.' },
      { key: 'B', text: 'Eğik düzlemin uzunluğu artırılırsa M cismi aşağı yönde kayar.' },
      { key: 'C', text: 'F kuvveti azaltılırsa M cismi yukarı yönde hareket eder.' },
      { key: 'D', text: 'Çıkrık kolunun yarıçapı büyütülürse gereken denge kuvveti artar.' }
    ],
    correctAnswer: 'A',
    explanation: 'Eğik düzlemin kuvvet kazancı L/h oranına bağlıdır. L ve h aynı oranda azaltılırsa oran değişmez ve eğik düzlemin sisteme uyguladığı kuvvet değişmediğinden denge bozulmaz.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Bileşik Makine Denge Şartı',
    theme: 'Eğik Düzlem ve Çıkrık Bileşimi'
  },

  {
    id: 5304,
    subTopicId: 'g8-u5-sub3',
    contextTitle: 'Çıkrık Sisteminde Ay ve Yıldız Dengesi',
    scenario: 'Eş merkezli yarıçapları r ve 2r olan iki silindirden oluşan çıkrık sisteminde; içteki r yarıçaplı silindire Ay şeklindeki cisim, dıştaki 2r yarıçaplı silindire ise Yıldız şeklindeki cisim asılmış ve sistem dengede kalmıştır.',
    questionPrompt: 'Bu çıkrık sistemi ile ilgili yapılan yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Sistemden yıldız çıkarılıp yerine ay bağlanırsa denge bozulmaz.' },
      { key: 'B', text: 'Ay ve yıldız yer değiştirdiğinde yıldız yukarı yönde hareket eder.' },
      { key: 'C', text: 'Ay ve yıldız cisimleri eşit kollu terazinin farklı kefelerine konulduğunda terazi dengede kalmaz; Ay cisminin kütlesi Yıldız cisminin kütlesinin iki katıdır.' },
      { key: 'D', text: 'Silindirlerin yarıçapı aynı oranda büyütülürse denge bozulur.' }
    ],
    correctAnswer: 'C',
    explanation: 'Çıkrık tork dengesi: G_ay x r = G_yıldız x 2r => G_ay = 2 x G_yıldız. Yani Ay cisminin ağırlığı Yıldız cisminin tam 2 katıdır. Eşit kollu teraziye konulduklarında kütleleri eşit olmadığı için terazi dengede kalamaz (Ay tarafı ağır basar).',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Çıkrık Torku ve Kütle İlişkisi',
    theme: 'Çıkrıkta Kuvvet Kazancı'
  },

  {
    id: 5305,
    subTopicId: 'g8-u5-sub3',
    contextTitle: 'Kaldıraç, Eğik Düzlem ve Makara Bileşik Makinesi',
    scenario: 'Eğik düzlem üzerindeki P yükü bir makara üzerinden geçirilen iple kaldıracın ucuna bağlanmış ve kaldıracın diğer ucuna F kuvveti uygulanarak sistem dengede tutulmuştur.',
    questionPrompt: 'Bu bileşik makine sisteminde P yükünü kaldırmak için gereken F kuvvetini azaltmak amacıyla hangisi yapılabilir?',
    options: [
      { key: 'A', text: 'Eğik düzlemin yüksekliğini (h) artırmak' },
      { key: 'B', text: 'Eğik düzlemin uzunluğunu (L) artırmak ve kaldıracın kuvvet kolunu uzatmak' },
      { key: 'C', text: 'Kaldıracın desteğini kuvvete doğru yaklaştırmak' },
      { key: 'D', text: 'P yükünün kütlesini iki katına çıkarmak' }
    ],
    correctAnswer: 'B',
    explanation: 'Eğik düzlemin boyu (L) artırılırsa eğik düzlemdeki kuvvet kazancı artar. Kaldıracın kuvvet kolu uzatılırsa kaldıraçtaki kuvvet kazancı artar. Bileşik makinede her iki kazanç çarpılacağı için gereken F kuvveti belirgin biçimde azalır.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Çoklu Basit Makinede Optimizasyon',
    theme: 'Bileşik Makinelerde Kuvvet Kazancı'
  },

  {
    id: 5306,
    subTopicId: 'g8-u5-sub3',
    contextTitle: 'Silindire Sarılı Eğik Düzlem: Vidalar ve İlerleme Miktarı',
    scenario: 'Silindir üzerine sarılı eğik düzlemlere vida denir. K ve L vidalarının başlangıçta boyları eşittir. K vidasının vida adımı a, L vidasının vida adımı 2a\'dır. Her iki vida da tahta bloğa 5 tam tur döndürülerek vidalanıyor.',
    questionPrompt: 'Vidaların 5 tur döndürülmesi sonucunda dışarıda kalan kısımları ve kuvvet kazançları ile ilgili yapılan aşağıdaki yorumlardan hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'K vidasında silindire sarılı olan eğik düzlemin boyu daha uzundur.' },
      { key: 'B', text: 'Her iki vida da eşit tur döndürüldüğünde L vidası tahtaya daha çok saplanır (h = n x 2a).' },
      { key: 'C', text: 'Her iki vidada da kuvvetten kazanç, yoldan kayıp vardır.' },
      { key: 'D', text: 'L vidasında kuvvetten kazanç K vidasına göre daha fazladır.' }
    ],
    correctAnswer: 'D',
    explanation: 'Vida adımı (a) küçüldükçe eğik düzlemin eğimi azalır, sarım sayısı artar ve kuvvet kazancı ARTAR. K vidasının vida adımı a, L vidasının 2a olduğuna göre K vidasında kuvvet kazancı daha büyüktür. Dolayısıyla L vidasında kuvvet kazancının daha fazla olduğunu iddia eden D seçeneği yanlıştır.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Vida Prensibi ve Kuvvet Kazancı',
    theme: 'Vidalarda Vida Adımı ve Denge'
  },

  {
    id: 5307,
    subTopicId: 'g8-u5-sub3',
    contextTitle: 'Kasnak ve Dişli Çark Sisteminde Yüklerin Hareket Yönleri',
    scenario: 'Kasnak ve dişli çarklarla oluşturulan bir sistemde: K dişlisi (merkezden bağlı P1 yükü ipiyle), L dişlisi, M dişlisi (bağlı P2 yükü ile), N dişlisi ve X-Y kasnakları (çapraz bağlı kayış ve P3 yükü) birbirine temas etmektedir.',
    questionPrompt: 'Sistem dengedeyken K dişlisi 1 yönünde (saat yönünde) döndürüldüğünde P1, P2 ve P3 yüklerinin hareketleriyle ilgili hangisi kesinlikle doğrudur?',
    options: [
      { key: 'A', text: 'K dişlisi döndürüldüğünde P2 ve P3 yükleri daima zıt yönde hareket eder.' },
      { key: 'B', text: 'Dişlilerin temas ettiği her noktada dönme yönü tersine döner; M dişlisi ile N dişlisi zıt yönlerde döner.' },
      { key: 'C', text: 'Çapraz bağlı kasnaklar dönme yönünü aynı tutar.' },
      { key: 'D', text: 'K dişlisinin tur sayısı sistemdeki tüm dişlilerle aynı olur.' }
    ],
    correctAnswer: 'B',
    explanation: 'Birbirine dıştan temas eden dişli çarklar daima birbirine ZIT yönde döner (K saat yönündeyse L tersine, M saat yönünde, N tersine döner). Çapraz bağlı kasnaklar da dönme yönünü tersine çevirir. Yarıçapları farklı olan dişlilerin tur sayıları ise yarıçapla ters orantılıdır.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Dişli ve Kasnak Hareket İletimi',
    theme: 'Dişli Çark ve Kasnaklarda Dönme Yönü'
  },

  {
    id: 5308,
    subTopicId: 'g8-u5-sub3',
    contextTitle: 'İki Farklı Çıkrık Modelinde Yarıçap ve Kuvvet Kazancı',
    scenario: 'İki farklı çıkrık modelinde özdeş P yükleri dengelenmiştir:\n• I. Çıkrık: Silindir yarıçapı r = 2r, çıkrık kolu R = 4r (Kuvvet kazancı 4r / 2r = 2 kat)\n• II. Çıkrık: Silindir yarıçapı r = r, çıkrık kolu R = 3r (Kuvvet kazancı 3r / r = 3 kat)',
    questionPrompt: 'Bu çıkrık modelleri ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'I. çıkrıkta 2r olan silindirin yarıçapı yarıya (r\'ye) indirilirse kuvvet kazancı II. çıkrıktan fazla olur (4 kat olur).' },
      { key: 'B', text: 'F1 kuvvetinin büyüklüğü (P/2), F2 kuvvetinin büyüklüğünden (P/3) fazladır.' },
      { key: 'C', text: 'Çıkrıklar birer tur döndürüldüğünde I. çıkrıktaki yük daha yükseğe çıkar (çevre = 2π.2r = 4πr).' },
      { key: 'D', text: 'I. çıkrıktaki kuvvet kazancı II. çıkrıktaki kuvvet kazancından fazladır.' }
    ],
    correctAnswer: 'D',
    explanation: 'I. çıkrıkta kuvvet kazancı R/r = 4r/2r = 2 kat iken; II. çıkrıkta kuvvet kazancı R/r = 3r/r = 3 kattır. Dolayısıyla II. çıkrığın kuvvet kazancı I. çıkrıktan fazladır. D seçeneğindeki "I. çıkrıkta kuvvet kazancı fazladır" ifadesi yanlıştır.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Çıkrık Bağıntısı F.R = P.r',
    theme: 'Çıkrıkta Kuvvet ve Yarıçap İlişkisi'
  },

  {
    id: 5309,
    subTopicId: 'g8-u5-sub3',
    contextTitle: 'K, L ve M Dişlilerinin Tur Sayıları ve Dönme Yönleri',
    scenario: 'Bir mekanizmada bulunan K, L ve M dişlilerinin tur sayıları sırasıyla 2 tur, 1 tur ve 2 tur olarak ölçülmüştür. K ve L dişlilerinin aynı yönde, K ve M dişlilerinin ise zıt yönde döndüğü bilinmektedir.',
    questionPrompt: 'Buna göre K, L ve M dişlilerinin yarıçapları ve bağlanış biçimleri hangi seçenekteki gibi olabilir?',
    options: [
      { key: 'A', text: 'K ve L dişlileri birbirine doğrudan temas eden dişlilerdir.' },
      { key: 'B', text: 'K(r) dişlisi bir zincir ile L(2r) dişlisine düz bağlanmış, M(r) dişlisi ise L dişlisine dıştan doğrudan temas etmektedir.' },
      { key: 'C', text: 'Üç dişli de aynı merkezli olarak perçinlenmiştir.' },
      { key: 'D', text: 'L dişlisi M dişlisinden daha fazla tur atmaktadır.' }
    ],
    correctAnswer: 'B',
    explanation: 'Tur sayısı yarıçapla ters orantılıdır (N_K . r_K = N_L . r_L). K 2 tur atarken L 1 tur atıyorsa r_L = 2.r_K\'dir. K ile L aynı yönde döndüğüne göre zincir/kayışla düz bağlanmıştır. M 2 tur atıp zıt yönde dönüyorsa r_M = r_K olup dıştan temas etmektedir.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Dişli Sistemlerinde Sayısal Bağıntı',
    theme: 'Dişlilerde Tur Sayısı ve Dönüş Yönü'
  },

  {
    id: 5310,
    subTopicId: 'g8-u5-sub3',
    contextTitle: 'Kamyon Üzerine Kurulu Hidrolik Vinç Sistemi',
    scenario: 'Ağır yük kaldırma aracında vinç kolu hidrolik piston ile kaldırılmaktadır:\n• 1. durum: Vinç kolu uzatılmadan kamyona yakın bir mesafedeki aracı kaldırmaktadır.\n• 2. durum: Vinç kolu teleskopik olarak uzatılarak daha uzaktaki bir minibüsü kaldırmaktadır.',
    questionPrompt: 'Vinç sistemi ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Vinç kolu bir kaldıraç prensibiyle çalışmakta olup dönme ekseni destek noktasıdır.' },
      { key: 'B', text: 'Vinç kolunun uzaması yük kolunu uzattığından sistemin kuvvet kazancını azaltır.' },
      { key: 'C', text: '2. durumda pistonun vinç kolunu dengede tutabilmesi için uygulaması gereken kuvvet 1. duruma göre artar.' },
      { key: 'D', text: '1. durumda vinç kolunun uzaması kuvvet kazancını artırmıştır.' }
    ],
    correctAnswer: 'D',
    explanation: 'Vinç kolu destegin uçta veya ortada olduğu bir kaldıraç sistemidir. Vinç kolu uzatıldığında yükün dönme noktasına olan mesafesi (yük kolu) büyür. Yük kolu büyüdükçe kuvvet kazancı AZALIR ve pistonun uygulaması gereken kuvvet ARTAR. Dolayısıyla kolun uzamasının kuvvet kazancını artırdığı iddiası yanlıştır.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Bileşik Makinede Kaldıraç Mantığı',
    theme: 'Mühendislik ve Vinç Sistemleri'
  },

  {
    id: 5311,
    subTopicId: "g8-u5-sub3",
    contextTitle: "Eğik Düzlemde Eğim Açısı ve Kuvvet Kazancı Deneyi (Karabük ÖDM)",
    scenario: "Bir öğrenci yüksekliği h = 1 metre olan bir masaya 100 N ağırlığındaki kutuyu çıkarmak için sırasıyla boyları L1 = 2 m, L2 = 3 m ve L3 = 4 m olan sürtünmesiz üç eğik düzlem tahtası kullanıyor ve dinamometre ile uyguladığı kuvvetleri (F1, F2, F3) ölçüyor.",
    questionPrompt: "Öğrencinin yaptığı ölçümler ve eğik düzlem prensibi ile ilgili hangisi doğrudur?",
    options: [
      { key: "A", text: "Ölçülen kuvvetler arasındaki ilişki F1 > F2 > F3 şeklindedir ve rampa boyu uzadıkça kuvvet kazancı artar." },
      { key: "B", text: "L3 tahtası kullanıldığında yapılan iş diğer tahtalara göre 2 kat daha azdır." },
      { key: "C", text: "Rampa boyu arttıkça eğim açısı arttığı için harcanan kuvvet artar." },
      { key: "D", text: "Kutuyu masaya çıkarmak için en fazla iş L1 tahtasında yapılmıştır." }
    ],
    correctAnswer: "A",
    explanation: "Eğik düzlemde kuvvet kazancı = L / h formülüyle bulunur. Yükseklik h sabitken boy L arttıkça kuvvet kazancı artar, dolayısıyla dinamometrede ölçülen kuvvet küçülür (F1 = 50 N, F2 = 33.3 N, F3 = 25 N -> F1 > F2 > F3). Yerçekimine karşı yapılan iş (W = G·h = 100 J) ise her üç tahtada da tamamen aynıdır.",
    skillTag: "Deney Tasarımı & Ölçüm Analizi",
    cognitiveLevel: "Eğik Düzlemde Boy-Kuvvet İlişkisi",
    theme: "Eğik Düzlemde Eğim ve Kazanç"
  },

  {
    id: 5312,
    subTopicId: "g8-u5-sub3",
    contextTitle: "Dağ Yollarının Virajlı Yapılması ve Eğik Düzlem Mantığı (Gaziantep ÖDM)",
    scenario: "Yüksek bir dağın zirvesine ulaşmak isteyen araçlar için dağın yamacına dik bir yol yapmak yerine, \"S\" harfi şeklinde kıvrılan virajlı yollar (serpantin) inşa edilir.",
    questionPrompt: "Mühendislerin dağ yollarını bu şekilde inşa etmelerinin temel fiziksel gerekçesi aşağıdakilerden hangisidir?",
    options: [
      { key: "A", text: "Alınan yolu uzatarak eğimi azaltmak, böylece araç motorlarının yenmesi gereken kuvveti azaltıp kuvvet kazancı sağlamak" },
      { key: "B", text: "Araçların zirveye çıkarken harcadıkları toplam benzin ve enerji miktarını azaltmak" },
      { key: "C", text: "Yol boyunca sürtünme kuvvetini sıfıra indirerek işten kazanç sağlamak" },
      { key: "D", text: "Araçların zirveye çok daha kısa sürede ulaşmasını sağlamak" }
    ],
    correctAnswer: "A",
    explanation: "Dağ yollarının virajlı yapılması eğik düzlemin boyunu (L) uzatır ve eğim açısını küçültür. Boy uzadıkça kuvvet kazancı artar ve araçların yokuşu tırmanması için motorun uygulaması gereken çekiş kuvveti azalır. Harcanan toplam iş/enerji değişmez (yoldan kayıp vardır).",
    skillTag: "Günlük Yaşam Mühendisliği",
    cognitiveLevel: "Doğada ve Yollarda Eğik Düzlem",
    theme: "Eğik Düzlem ve Mühendislik Uygulamaları"
  },

  {
    id: 5313,
    subTopicId: "g8-u5-sub3",
    contextTitle: "Çıkrık Düzeneğinde Kol Uzunluğu ve Yarıçap Oranı (Elazığ ÖDM)",
    scenario: "Kuyudan su çekmek için kullanılan bir çıkrıkta silindirin yarıçapı r, çevirme kolunun uzunluğu R'dir. Yapılan bir modifikasyonla silindir yarıçapı r yarıya indirilmiş, çevirme kolu R ise iki katına çıkarılmıştır.",
    questionPrompt: "Bu değişikliğin ardından su kovasını kaldırmak için gereken kuvvet ve kolun tur sayısı ile ilgili hangisi doğru olur?",
    options: [
      { key: "A", text: "Kuvvet kazancı 4 katına çıkar; kovayı aynı yüksekliğe çıkarmak için gereken çevirme tur sayısı artar." },
      { key: "B", text: "Kuvvet kazancı yarıya iner; kova daha hızlı yükselir." },
      { key: "C", text: "Uygulanan kuvvet değişmez çünkü kovanın ağırlığı aynıdır." },
      { key: "D", text: "Yapılan iş 4 kat azalır ve yoldan kayıp ortadan kalkar." }
    ],
    correctAnswer: "A",
    explanation: "Çıkrıkta kuvvet kazancı = R / r oranına bağlıdır. Başlangıçta R/r iken, yeni durumda (2R) / (r/2) = 4(R/r) olur; yani kuvvet kazancı 4 katına çıkar. Silindirin çevresi (2·π·r) yarıya indiği için kovayı aynı h yüksekliğine çıkarmak için silindirin 2 kat daha fazla dönmesi (tur atması) gerekir (yoldan kayıp).",
    skillTag: "Oransal Akıl Yürütme",
    cognitiveLevel: "Çıkrık Formülü ve Tur Analizi",
    theme: "Çıkrıkta Geometrik Değişkenler"
  },

  {
    id: 5314,
    subTopicId: "g8-u5-sub3",
    contextTitle: "Vida Adımı ve Zeminde İlerleme Miktarı (Bilecik ÖDM)",
    scenario: "Özdeş ahşap bloklara vidalanmak istenen K ve L vidalarının vida adımları sırasıyla a ve 2a'dır. Her iki vida da tornavida yardımıyla tahtaya dik olarak n tur döndürülmektedir.",
    questionPrompt: "Vidaların tahta blokta ilerleme miktarları (h) ve vidalamak için uygulanan kuvvetler ile ilgili aşağıdakilerden hangisi doğrudur?",
    options: [
      { key: "A", text: "L vidası K vidasına göre tahtada 2 kat daha fazla ilerlerken, K vidasında kuvvet kazancı daha fazladır." },
      { key: "B", text: "Her iki vida da eşit miktarda ilerler çünkü tur sayıları eşittir." },
      { key: "C", text: "Vida adımı büyük olan L vidasını çevirmek için daha az kuvvet gerekir." },
      { key: "D", text: "Vida bir eğik düzlem modeli olmadığı için vida adımının kuvvete etkisi yoktur." }
    ],
    correctAnswer: "A",
    explanation: "Vidanın zeminde ilerleme miktarı h = n · a formülüyle bulunur. L vidasının adımı 2a olduğundan ilerleme miktarı 2 kat daha fazladır (h_L = 2 h_K). Vida, silindir üzerine sarılmış bir eğik düzlemdir; vida adımı (a) küçüldükçe eğim azalır ve kuvvet kazancı artar. Bu nedenle adımı a olan K vidasında kuvvet kazancı daha fazladır (daha kolay vidalanır).",
    skillTag: "Model Okuma & İlerleme Hesabı",
    cognitiveLevel: "Vida Eğik Düzlem İlişkisi",
    theme: "Vida Mekanizması"
  },

  {
    id: 5315,
    subTopicId: "g8-u5-sub3",
    contextTitle: "Dişli Çarklar ve Kasnaklarda Dönme Yönü ve Tur Sayısı (Karabük ÖDM)",
    scenario: "Yarıçapları sırasıyla 3r, r ve 2r olan K, L ve M dişli çarklarından K ile L birbirine temas etmekte, L ile M ise eş merkezli olarak perçinlenmiştir. K dişlisi saat yönünde 2 tam tur döndürülmektedir.",
    questionPrompt: "Buna göre M dişlisinin dönme yönü ve tur sayısı aşağıdakilerden hangisinde doğru verilmiştir?",
    options: [
      { key: "A", text: "Saat yönünün tersine, 6 tur" },
      { key: "B", text: "Saat yönünde, 6 tur" },
      { key: "C", text: "Saat yönünün tersine, 3 tur" },
      { key: "D", text: "Saat yönünde, 2 tur" }
    ],
    correctAnswer: "A",
    explanation: "Birbirine temas eden dişliler zıt yönde döner. K saat yönünde dönerse, temas ettiği L saat yönünün tersine döner. Tur sayısı: n_K · r_K = n_L · r_L -> 2 · 3r = n_L · r -> n_L = 6 tur. L ile M eş merkezli ve perçinli olduğu için aynı yönde ve eşit tur sayısı ile dönerler. Dolayısıyla M dişlisi de saat yönünün tersine 6 tur döner.",
    skillTag: "Sistem Kinematiği Analizi",
    cognitiveLevel: "Dişli Çarklar ve Kasnaklar",
    theme: "Dişlilerde Tur ve Yön Transferi"
  },

  {
    id: 5316,
    subTopicId: "g8-u5-sub3",
    contextTitle: "Bisiklet Mekanizmasında Bileşik Makine İlkeleri (Gaziantep ÖDM)",
    scenario: "Bir bisiklet pedalından arka tekere kadar birden fazla basit makine türünün bir araya gelmesiyle oluşur: Pedal kolları (çıkrık), ön ve arka dişliler, zincir (kasnak/dişli aktarımı), el fren kolları (kaldıraç) ve tekerlek mili.",
    questionPrompt: "Bisikletin vites sistemi ve çalışma mekanizması ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      { key: "A", text: "Yokuş yukarı çıkarken arka dişlinin büyütülmesi, tekerleğin dönmesi için pedala uygulanan kuvveti azaltır (kuvvet kazancını artırır)." },
      { key: "B", text: "Düz yolda hızlanmak için arka dişli küçültüldüğünde yoldan (hızdan) kazanç sağlanır, pedala basmak zorlaşır." },
      { key: "C", text: "Bisiklet bir bileşik makine olup pedalda harcanan iş zincir ve dişliler aracılığıyla tekerleğe aktarılırken işten kazanç sağlanır." },
      { key: "D", text: "Fren kolları, desteğin uçta veya ortada olduğu bir kaldıraç prensibiyle küçük el kuvvetini balatalara büyük bir sıkıştırma kuvveti olarak iletir." }
    ],
    correctAnswer: "C",
    explanation: "Bisiklet ne kadar gelişmiş olursa olsun hiçbir basit makine veya bileşik makine İŞTEN KAZANÇ SAĞLAYAMAZ. Enerjinin veya işin aktarımında sürtünmeler nedeniyle hatta bir miktar enerji ısıya dönüşür (verim < %100).",
    skillTag: "Bileşik Makine Çıkarımı",
    cognitiveLevel: "Mekanik Sistemler ve Verim",
    theme: "Bisiklette Basit Makineler"
  }
];

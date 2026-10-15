import { Unit } from '../../types/curriculum';

export const grade7Unit7Data: Unit = {
  id: 'g7-unit-7',
  unitNumber: 7,
  bookNumber: 2,
  grade: 7,
  subject: 'Fen Bilimleri',
  title: 'Sürdürülebilir Yaşam ve Enerji',
  unitEndPageRange: 's. 158-161',
  colorTheme: {
    primary: 'from-emerald-600 to-green-700',
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-950/40',
    accent: 'text-emerald-400',
    text: 'text-emerald-200'
  },
  subTopics: [
    {
      id: 'g7-u7-sub1',
      title: '1. Besin Zinciri, Besin Ağı ve Enerji Akışı',
      shortTitle: 'Besin Zinciri & Enerji Piramidi',
      badge: '1. Bölüm',
      pageRange: '132-143',
      concepts: ['Besin Zinciri', 'Besin Ağı', 'Üretici', 'Tüketici (1., 2., 3.)', 'Ayrıştırıcı', 'Ekoloji Piramidi', 'Enerji Aktarımı', 'Biyolojik Birikim'],
      simulationId: 'skeleton',
      summarySections: [
        {
          heading: 'Canlılarda Beslenme İlişkileri ve Besin Zinciri',
          paragraphs: [
            'Canlıların yaşamlarını sürdürebilmeleri için enerjiye ihtiyaçları vardır. Madde ve enerjinin organizmadan organizmaya beslenme yoluyla aktarılma şekline besin zinciri denir. Ekosistemdeki tüm canlılar birbiriyle uyumlu ve kusursuz bir dengeyle yaratılmıştır.',
            'Besin zincirinde okların yönü daima besini sağlayan canlıdan o canlıyla beslenen tüketiciye doğrudur (Örn: Ot → Çekirge → Kuş → Tilki).'
          ],
          keyPoints: [
            'Üreticiler (Ototroflar): Güneş ışığını kullanarak fotosentez yoluyla kendi besinini kendisi üreten canlılardır (Yeşil bitkiler, su yosunları/algler, siyanobakteriler). Besin zincirinin daima İLK BASAMAĞINI oluştururlar.',
            'Birincil Tüketiciler (Otçullar): Doğrudan üreticilerle beslenen canlılardır (İnek, koyun, tavşan, geyik, çekirge, tırtıl).',
            'İkincil ve Üçüncül Tüketiciler (Etçil ve Hepçiller): Birincil tüketicilerle veya diğer tüketicilerle beslenen canlılardır (Kuş, kurbağa, yılan, tilki, aslan, kartal). İnsan besin içeriğine göre hem birincil hem ikincil tüketicidir.',
            'Ayrıştırıcılar (Çürükçüller): Canlı kalıntılarını ve organik atıkları çürüterek inorganik maddelere dönüştüren bakteri ve mantarlardır. Besin zincirinin HER BASAMAĞINDA bulunurlar ve madde döngüsünü tamamlarlar.'
          ]
        },
        {
          heading: 'Besin Ağı ve Ekoloji Piramidi',
          paragraphs: [
            'Doğada canlılar tek bir besin zincirine bağlı kalmaz; birden fazla besin zincirinin iç içe geçmesiyle oluşan karmaşık yapıya besin ağı denir.',
            'Ekoloji piramidi, bir ekosistemdeki canlı sayısını, biyokütleyi ve enerji akışını gösteren basamaklı modeldir. Piramidin en geniş tabanında üreticiler, en tepesinde ise son tüketiciler bulunur. Ayrıştırıcılar ise her basamakla etkileşimde olduğu için yan yüzeyde gösterilir.'
          ],
          table: {
            headers: ['Özellik (Aşağıdan Yukarıya Çıkıldıkça)', 'Değişim Yönü', 'Açıklama'],
            rows: [
              ['Birey Sayısı', 'Azalır', 'Üretici sayısı tüketicilerden daima çok daha fazladır.'],
              ['Biyokütle (Toplam Canlı Kütlesi)', 'Azalır', 'Dünyadaki bitkilerin toplam kütlesi tüketicilerden çok büyüktür.'],
              ['Aktarılan Enerji Miktarı', 'Azalır (%10 Kuralı)', 'Her basamak enerjinin %90’ını yaşamsal faaliyetlerde harcar, sadece %10’unu üst basamağa aktarır.'],
              ['Biyolojik Birikim (Zehirli Madde)', 'Artar', 'Vücuttan atılamayan zehirli kimyasallar (DDT, cıva, kurşun) üst basamakta en yüksek seviyeye ulaşır.'],
              ['Bireyin Vücut Büyüklüğü', 'Genellikle Artar', 'Genellikle üst basamaktaki avcı canlılar daha iridir.']
            ]
          },
          examNote: 'LGS Şifresi: Ekoloji piramidinde yukarı çıkıldıkça SADECE "Biyolojik Birikim" (zehir) artar; enerji, birey sayısı ve biyokütle azalır!'
        },
        {
          heading: 'Biyolojik Birikim ve Gökdoğan Kuşu Örneği',
          paragraphs: [
            'Tarımda kullanılan kimyasal ilaçlar ve ağır metaller besin zinciri yoluyla canlıların yapısında birikir. Ekoloji piramidinin en üstündeki yırtıcı kuş olan Gökdoğan, biyolojik birikimden en çok etkilenen türdür. Bu durum ekosistem sağlığının izlenmesinde gökdoğanları kritik bir gösterge tür hâline getirmiştir.'
          ]
        }
      ],
      trueFalseQuestions: [
        {
          id: 1,
          text: 'Ayrıştırıcı canlılar (mantarlar ve bakteriler) ekoloji piramidinin yalnızca en üst basamağında bulunurlar.',
          isCorrect: false,
          explanation: 'Yanlıştır. Ayrıştırıcılar her basamaktaki canlı atıklarını ayrıştırdıkları için piramidin her basamağında yer alırlar.'
        },
        {
          id: 2,
          text: 'Ekoloji piramidinde üreticilerden tüketicilere doğru çıkıldıkça aktarılan enerji miktarı azalır.',
          isCorrect: true,
          explanation: 'Doğrudur. %10 kuralı gereğince enerjinin büyük kısmı yaşamsal faaliyetlerde ısı olarak harcanır, üst basamağa sadece %10’u aktarılır.'
        },
        {
          id: 3,
          text: 'Besin zincirinde biyolojik birikim en az üreticilerde, en fazla ise son tüketicide görülür.',
          isCorrect: true,
          explanation: 'Doğrudur. Zehirli maddeler üst basamaklara çıkıldıkça canlıların dokularında katlanarak birikir.'
        }
      ],
      lgsQuestions: [
        {
          id: 1,
          questionPrompt: 'Bir tarım arazisinde çekirge istilasına karşı kimyasal ilaçlama yapılmış ve çekirge sayısı hızla azalmıştır.\n\nBesin zinciri: Çimen → Çekirge → Kurbağa → Yılan → Şahin şeklinde olduğuna göre bu ekosistemde ilk etapta hangi canlıların sayısında ARTIŞ beklenir?',
          options: [
            { key: 'A', text: 'Yalnız Çimen' },
            { key: 'B', text: 'Kurbağa ve Yılan' },
            { key: 'C', text: 'Çimen ve Şahin' },
            { key: 'D', text: 'Yalnız Yılan' }
          ],
          correctAnswer: 'A',
          explanation: 'Çekirge sayısı azaldığında çimenleri yiyen canlı azaldığı için çimen sayısı artar. Çekirge ile beslenen kurbağalar aç kalacağı için kurbağa, yılan ve şahin sayıları azalır.'
        }
      ]
    },
    {
      id: 'g7-u7-sub2',
      title: '2. Sürdürülebilir Yaşam, Su Kaynakları ve Su Ayak İzi',
      shortTitle: 'Su Kaynakları & Su Ayak İzi',
      badge: '2. Bölüm',
      pageRange: '144-157',
      concepts: ['Sürdürülebilir Yaşam', 'Tatlı Su Kaynakları', 'Atık Su', 'Su Arıtma Tesisi', 'Su Ayak İzi', 'Mavi-Yeşil-Gri Su Ayak İzi', 'Mimar Sinan'],
      simulationId: 'moon-phases',
      summarySections: [
        {
          heading: 'Dünya’daki Su Kaynakları ve Tatlı Su Oranları',
          paragraphs: [
            'Dünya yüzeyinin yaklaşık %71’i sularla kaplıdır. Ancak bu suların muazzam bir kısmı tuzlu sudur ve içme/kullanma için elverişli değildir.',
            'Dünya’daki tüm suların %97,5’i okyanus ve denizlerdeki tuzlu su, yalnızca %2,5’i tatlı sudur.',
            'Tatlı suların ise %69’u kutuplardaki buzullarda donmuş hâldedir, %30’u yer altı sularıdır ve sadece %1’i göller ve nehirler gibi yüzey sularıdır. Yani dünyadaki toplam suyun 333 bardağı temsil ettiği düşünülürse, canlıların erişebileceği kullanılabilir su sadece 1 bardaktan azdır!'
          ],
          table: {
            headers: ['Su Kaynağı', 'Genel Dağılım Oranı', 'Erişilebilirlik Durumu'],
            rows: [
              ['Tuzlu Su (Okyanus ve Denizler)', '%97,5', 'Tuzlu olduğu için doğrudan kullanılamaz'],
              ['Buzullar ve Buz Dağları', '%69 (Tatlı suyun)', 'Kutuplarda donmuş hâlde, erişimi zor'],
              ['Yer Altı Suları', '%30 (Tatlı suyun)', 'Kuyular ve sondajla kısmen kullanılabilir'],
              ['Yüzey Suları (Göller, Nehirler)', '%1 (Tatlı suyun)', 'İçme, sulama ve sanayide en çok kullanılan su']
            ]
          }
        },
        {
          heading: 'Tarihe Not Düşenler: Mimar Sinan (1490-1588)',
          paragraphs: [
            'Osmanlı başmimarı Mimar Sinan, sadece camileriyle değil İstanbul’un su sorununu kökten çözen muhteşem mühendislik projeleriyle de tarihe geçmiştir. 55 km mesafeden suyu İstanbul’a taşıyan "Kırk Çeşme Su Tesisi", vadileri aşan Mağlova Kemeri ve su dağıtım sarnıçları üstün mimari ve sürdürülebilir su yönetiminin şaheserleridir.'
          ]
        },
        {
          heading: 'Atık Su, Su Kirliliği ve Arıtma Tesisleri',
          paragraphs: [
            'Evsel, endüstriyel ve tarımsal faaliyetler sonucunda özellikleri bozulan sulara atık su denir. Evlerde özellikle kullanılmış kızartma yağlarının lavaboya dökülmesi büyük bir çevre felaketine yol açar; çünkü 1 litre atık yağ yaklaşık 1 milyon litre temiz suyu kirletir!',
            'Arıtma tesisleri sayesinde atık sulardaki kimyasal ve biyolojik kirleticiler temizlenir, su doğaya güvenle geri kazandırılır ve arıtma çamurundan biyogaz/elektrik enerjisi üretilebilir.'
          ]
        },
        {
          heading: 'Su Ayak İzi Nedir? (Doğrudan ve Dolaylı Su Tüketimi)',
          paragraphs: [
            'Bir bireyin veya ürünün üretiminden tüketimine kadar harcanan toplam doğrudan ve dolaylı su miktarına su ayak izi denir. Bir insanın sadece musluktan tükettiği su günlük ~150-200 litredir; ancak giydiği kıyafetler, yediği gıdalar ve kullandığı eşyaların üretimi hesaba katıldığında bir kişinin günlük su ayak izi 7.000 litreyi bulmaktadır!',
            'Ürünlerin üretimindeki su ayak izleri: 1 adet pamuklu tişört için yaklaşık 2.720 litre, 1 adet kot pantolon için yaklaşık 10.000 litre, 1 adet akıllı telefon üretimi için yaklaşık 12.760 litre su harcanmaktadır.'
          ],
          keyPoints: [
            'Yeşil Su Ayak İzi: Üretimde kullanılan yağmur suyu miktarıdır.',
            'Mavi Su Ayak İzi: Yüzey ve yer altı tatlı su kaynaklarından çekilen su miktarıdır (baraj, nehir, kuyu).',
            'Gri Su Ayak İzi: Üretim sonucu oluşan kirliliği gidermek ve su kalitesini sağlamak için gereken tatlı su miktarıdır.',
            'Su Ayak İzini Azaltma Yolları: Damla sulama sistemleri kullanmak, gıda israfını önlemek, gereksiz tekstil ve elektronik eşya alımından kaçınmak, atık yağları toplama kutularına vermek.'
          ]
        },
        {
          heading: 'Çevre ve Ekolojide İz Bırakanlar',
          paragraphs: [
            'Ekoloji ve çevre koruma alanında çığır açan bilim insanları:'
          ],
          keyPoints: [
            'Kerecî (953-1029): İslam dünyasının matematik ve hidrolik mühendisidir. Yer altı su kanalları, su kaldırma aygıtları ve suyun sertlik dereceleri üzerine ilk teknik eserleri yazmıştır.',
            'Charles Elton (1900-1991): Modern hayvan ekolojisinin kurucusu olup besin zinciri, besin ağı ve ekoloji piramidi kavramlarını bilim dünyasına kazandırmıştır.',
            'Rachel Carson (1907-1964): "Sessiz Bahar" adlı kitabıyla tarım ilaçlarının (DDT) ve biyolojik birikimin çevreye verdiği zararları dünyaya duyurmuş, Çevre Koruma Ajansı\'nın (EPA) kurulmasını sağlamıştır.',
            'Arjen Ysbert Hoekstra (1967-2019): "Su Ayak İzi" kavramını geliştirerek küresel su tüketiminin görünür kılınmasını ve sürdürülebilir su politikalarının geliştirilmesini sağlamıştır.'
          ]
        }
      ],
      trueFalseQuestions: [
        {
          id: 4,
          text: 'Dünya’daki tatlı suların en büyük kısmı nehirler ve göllerden oluşmaktadır.',
          isCorrect: false,
          explanation: 'Yanlıştır. Tatlı suların yaklaşık %69\'u kutuplardaki buzullarda, %30\'u yer altındadır; göl ve nehirler tatlı suyun sadece %1\'inden azını oluşturur.'
        },
        {
          id: 5,
          text: 'Lavaboya dökülen 1 litre kızartma yağı yaklaşık 1 milyon litre temiz içme suyunu kirletebilir.',
          isCorrect: true,
          explanation: 'Doğrudur. Atık bitkisel yağlar su yüzeyini film gibi kaplayarak oksijen transferini engeller ve devasa miktarda suyu zehirler.'
        },
        {
          id: 6,
          text: 'Pamuklu bir tişörtün su ayak izi hesaplanırken sadece kumaşın boyanmasında kullanılan su dikkate alınır.',
          isCorrect: false,
          explanation: 'Yanlıştır. Su ayak izi pamuğun tarlada sulanmasından fabrikada işlenmesine ve taşınmasına kadar tüm aşamalardaki su tüketimini kapsar.'
        }
      ],
      lgsQuestions: [
        {
          id: 2,
          questionPrompt: 'Fatih okuduğu bir bilim dergisinde bir kot pantolonun üretiminde yaklaşık 10.000 litre su harcandığını öğrenmiştir.\n\nBuna göre Fatih’in bireysel su ayak izini azaltmak için;\nI. Sökülen veya eskiyen kıyafetlerini terzide tamir ettirerek uzun süre kullanması\nII. İhtiyacı olmadığı hâlde indirimden yeni kıyafetler satın alması\nIII. Küçülen giysilerini ihtiyacı olanlara bağışlaması\n\ndavranışlarından hangilerini uygulaması sürdürülebilir yaşama UYGUNDUR?',
          options: [
            { key: 'A', text: 'Yalnız I' },
            { key: 'B', text: 'I ve II' },
            { key: 'C', text: 'I ve III' },
            { key: 'D', text: 'I, II ve III' }
          ],
          correctAnswer: 'C',
          explanation: 'Kıyafetleri tamir ederek uzun süre kullanmak (I) ve başkalarına vermek (III) yeni ürün üretimini ve dolayısıyla dolaylı su tüketimini azaltır. İhtiyaç fazlası ürün almak (II) ise su ayak izini gereksiz yere büyütür.'
        }
      ]
    }
  ],
  unitEndQuestions: [
    {
      id: 1,
      pageNumber: '158',
      type: 'multiple_choice',
      title: 'Üreticiler',
      questionPrompt: 'Besin zincirinde güneş ışığını kullanarak fotosentez yoluyla inorganik maddelerden organik besin üreten canlı grubu hangisidir?',
      options: [
        { key: 'A', text: 'Üreticiler' },
        { key: 'B', text: 'Birincil tüketiciler' },
        { key: 'C', text: 'İkincil tüketiciler' },
        { key: 'D', text: 'Ayrıştırıcılar' }
      ],
      correctAnswer: 'A',
      detailedExplanation: 'Üretici canlılar (yeşil bitkiler, algler, siyanobakteriler) güneş enerjisiyle fotosentez yaparak besin üretir.'
    },
    {
      id: 2,
      pageNumber: '158',
      type: 'multiple_choice',
      title: 'Su Ayak İzi',
      questionPrompt: 'Bir mal veya hizmetin üretiminde kullanılan toplam doğrudan ve dolaylı su miktarını gösteren ölçüte ne ad verilir?',
      options: [
        { key: 'A', text: 'Karbon ayak izi' },
        { key: 'B', text: 'Su ayak izi' },
        { key: 'C', text: 'Biyolojik birikim' },
        { key: 'D', text: 'Ekoloji piramidi' }
      ],
      correctAnswer: 'B',
      detailedExplanation: 'Üretimden tüketime kadar harcanan tüm doğrudan ve dolaylı su miktarı "su ayak izi" olarak adlandırılır.'
    },
    {
      id: 3,
      pageNumber: '159',
      type: 'multiple_choice',
      title: 'Dünya Su Günü',
      questionPrompt: 'Dünya Su Günü Birleşmiş Milletler öncülüğünde her yıl hangi tarihte kutlanmaktadır?',
      options: [
        { key: 'A', text: '23 Nisan' },
        { key: 'B', text: '22 Mart' },
        { key: 'C', text: '5 Haziran' },
        { key: 'D', text: '29 Ekim' }
      ],
      correctAnswer: 'B',
      detailedExplanation: 'Her yıl 22 Mart günü dünya genelinde farkındalık oluşturmak amacıyla Dünya Su Günü olarak kutlanır.'
    }
  ],
  unitEnd20Questions: [
    {
      id: 1,
      questionPrompt: 'Ekoloji piramidinde aşağıdan yukarıya doğru çıkıldıkça;\nI. Birey sayısı\nII. Toplam biyokütle\nIII. Biyolojik birikim (zehirli madde)\n\nniceliklerinden hangileri AZALIR?',
      options: [
        { key: 'A', text: 'Yalnız I' },
        { key: 'B', text: 'I ve II' },
        { key: 'C', text: 'II ve III' },
        { key: 'D', text: 'I, II ve III' }
      ],
      correctAnswer: 'B',
      explanation: 'Piramitte yukarı çıkıldıkça birey sayısı ve toplam biyokütle azalırken, biyolojik birikim artar.'
    },
    {
      id: 2,
      questionPrompt: 'İstanbul\'a su ulaştırmak için Kırk Çeşme Su Tesislerini ve Mağlova Kemeri\'ni inşa eden ünlü Osmanlı başmimarı kimdir?',
      options: [
        { key: 'A', text: 'Mimar Hayreddin' },
        { key: 'B', text: 'Mimar Sinan' },
        { key: 'C', text: 'Sedefkâr Mehmed Ağa' },
        { key: 'D', text: 'Ali Kuşçu' }
      ],
      correctAnswer: 'B',
      explanation: 'Mimar Sinan 16. yüzyılda su kemerleri, bentler ve havuzlar inşa ederek İstanbul\'un su sorununu çözmüştür.'
    },
    {
      id: 3,
      questionPrompt: '"Sessiz Bahar" eseriyle DDT gibi kimyasal tarım ilaçlarının biyolojik birikim yoluyla kuşlara ve ekosisteme verdiği zararları anlatan bilim insanı kimdir?',
      options: [
        { key: 'A', text: 'Rachel Carson' },
        { key: 'B', text: 'Charles Elton' },
        { key: 'C', text: 'Arjen Hoekstra' },
        { key: 'D', text: 'Kerecî' }
      ],
      correctAnswer: 'A',
      explanation: 'Rachel Carson Silent Spring (Sessiz Bahar) kitabıyla çevre hareketine öncülük etmiştir.'
    }
  ]
};

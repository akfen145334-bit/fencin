import { Unit } from '../../types/curriculum';

export const grade6Unit7Data: Unit = {
  id: 'g6-unit-7',
  unitNumber: 7,
  bookNumber: 2,
  grade: 6,
  subject: 'Fen Bilimleri',
  title: 'Sürdürülebilir Yaşam ve Etkileşim',
  unitEndPageRange: 's. 123-126',
  colorTheme: {
    primary: 'from-emerald-600 to-teal-600',
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-950/40',
    accent: 'text-emerald-400',
    text: 'text-emerald-200'
  },
  subTopics: [
    {
      id: 'g6-u7-sub1',
      title: '1. Biyoçeşitlilik (Ekosistem, Endemik Türler ve Doğal Yaşam)',
      shortTitle: 'Biyoçeşitlilik & Endemik Türler',
      badge: 'Sayfa 99-113',
      pageRange: '99 - 113',
      concepts: ['Tür', 'Habitat', 'Ekosistem', 'Biyoçeşitlilik', 'Endemik Canlılar', 'Nesli Tükenen Canlılar', 'Nesli Tehlikedekiler', '22 Mayıs Biyolojik Çeşitlilik Günü', 'Kanuni Çevre Kanunu'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Biyoçeşitlilik, Habitat ve Ekosistem',
          paragraphs: [
            'Kendi aralarında eşleştiğinde üreme yeteneğine sahip verimli yavrular meydana getirebilen canlı topluluğuna tür denir. Bir canlının doğada yaşayıp üreyebildiği doğal yaşam alanına habitat denir (örneğin hamsinin habitatı Karadeniz’dir).',
            'Belirli bir alandaki canlı ve cansız varlıkların birbirleriyle sürekli madde ve enerji alışverişi içinde olduğu sisteme ekosistem denir. Bir bölgedeki tüm canlı türlerinin sayı ve çeşitlilik zenginliğine ise biyoçeşitlilik adı verilir.',
            'Biyoçeşitlilik doğal dengenin korunması, tarım, hayvancılık, tıp ve eczacılık (kullandığımız ilaçların büyük kısmı bitkilerden elde edilir) ve ekonomik kalkınma için hayati önem taşır.'
          ]
        },
        {
          heading: 'Türkiye’nin Endemik Canlı Zenginliği',
          paragraphs: [
            'Yeryüzünün yalnızca belirli bir coğrafi bölgesinde doğal olarak yaşayan canlılara endemik canlı denir. Ülkemiz coğrafi konumu ve iklim çeşitliliği sayesinde Avrupa kıtasının tamamından daha fazla bitki türüne ve zengin endemik türlere ev sahipliği yapar:',
            '• Endemik Hayvanlarımız: Van kedisi, Ankara keçisi, Kangal köpeği, Denizli horozu, Türk tazısı, çizgili sırtlan, inci kefali (Van Gölü’nün sodalı suyunda yaşar), turna.',
            '• Endemik Bitkilerimiz: Ters lale (ağlayan gelin), kardelen, sığla ağacı, Datça hurması, Kazdağı göknarı, eber sarısı (Akşehir Gölü çevresi), acı çiğdem (İstanbul), yanar döner çiçeği / sevgi çiçeği (Ankara Gölbaşı), İstanbul nazendesi.'
          ]
        },
        {
          heading: 'Nesli Tükenen ve Tükenme Tehlikesi Altındaki Canlılar',
          paragraphs: [
            '• Dünyada Nesli Tamamen Tükenenler: Dinozor, mamut, dodo kuşu, moa kuşu, kılıç dişli kaplan.',
            '• Ülkemizde Nesli Tükenenler: Asya fili, Anadolu parsı, Kafkas bizonu, Asya kaplanı, çita, kunduz, yılanboyun kuşu.',
            '• Ülkemizde Nesli Tehlikede Olanlar: Kelaynak kuşları (Birecik), Akdeniz foku, deniz kaplumbağası (Caretta caretta), flamingo, alageyik, sülün, mersin balığı, boz ayı, dev kertenkele.',
            '• Tarihimizden Çevre Bilinci: Kanuni Sultan Süleyman 1539 yılında Edirne’de dünyanın ilk kapsamlı Çevre Koruma ve Düzenleme Kanunu’nu yayımlamıştır.'
          ]
        }
      ],
      interactiveBookFlow: [
        {
          id: 'g6-u7-s1-endemik-eslesme',
          pageNumber: 'Sayfa 106',
          type: 'pekistirme_istasyonu',
          title: 'Pekiştirme İstasyonu 1: Endemik Türler ve Kavramlar',
          prompt: 'Ters lale, çizgili sırtlan, ekosistem ve habitat kavramlarını uygun açıklamalarla eşleştiriniz.',
          resultInfoBox: 'Ters lale ülkemizin endemik bitkisi, çizgili sırtlan endemik hayvanı; habitat canlıların doğal adresi, ekosistem ise canlı-cansız etkileşim sistemidir.'
        }
      ],
      glossary: [
        { term: 'Biyoçeşitlilik', definition: 'Bir ekosistemde yaşayan canlı türlerinin sayıca ve genetikçe zenginliği.' },
        { term: 'Habitat', definition: 'Canlının beslendiği, korunduğu ve ürediği doğal yaşam alanı.' },
        { term: 'Endemik Tür', definition: 'Dünyada sadece belirli bir coğrafi bölgede yayılış gösteren özel canlı türü.' }
      ],
      trueFalseQuestions: [
        { id: 1, text: 'Van kedisi, Ankara keçisi ve ters lale ülkemizin endemik türlerindendir.', isCorrect: true, explanation: 'Doğrudur. Ülkemize özgü zengin canlı çeşitleridir.' },
        { id: 2, text: 'Dinozor ve mamut dünyada nesli tükenme tehlikesinde olan canlılardır.', isCorrect: false, explanation: 'Yanlıştır. Dinozor ve mamutun nesli tükenme tehlikesinde değil, tamamen tükenmiştir.' },
        { id: 3, text: 'Caretta caretta deniz kaplumbağaları ülkemizde koruma altına alınmış türlerdendir.', isCorrect: true, explanation: 'Doğrudur. Üreme kumsalları koruma altındadır.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          questionPrompt: 'Ankara Gölbaşı ilçesinde yetişen ve halk arasında "gelin düğmesi" veya "sevgi çiçeği" olarak bilinen yanar döner çiçeğinin dünyada başka hiçbir yerde doğal olarak yetişmediği bilinmektedir.\n\nBuna göre yanar döner çiçeği biyoloji literatüründe nasıl adlandırılır?',
          options: [
            { key: 'A', text: 'İstilacı tür' },
            { key: 'B', text: 'Endemik tür' },
            { key: 'C', text: 'Fosil tür' },
            { key: 'D', text: 'Karasal hayvan' }
          ],
          correctAnswer: 'B',
          explanation: 'Yalnızca belirli bir coğrafyada doğal yetişen canlılara endemik tür denir.'
        }
      ]
    },
    {
      id: 'g6-u7-sub2',
      title: '2. İnsan ve Çevre Etkileşimi (Yakıtlar, Zehirlenmeler ve Kirlilik)',
      shortTitle: 'İnsan & Çevre Etkileşimi',
      badge: 'Sayfa 114-123',
      pageRange: '114 - 123',
      concepts: ['Katı Yakıtlar', 'Sıvı Yakıtlar', 'Gaz Yakıtlar', 'Karbon Monoksit Zehirlenmesi', 'Soba Güvenliği', 'Su Kirliliği', 'Toprak Kirliliği', 'Hava Kirliliği', 'Ormansızlaşma', 'Dünya Çevre Günü'],
      simulationId: 'density-tower',
      summarySections: [
        {
          heading: 'Isınma Amaçlı Yakıtlar ve Karbon Monoksit Zehirlenmesi',
          paragraphs: [
            'Yakıldığında çevreye ısı enerjisi veren maddelere yakıt denir:',
            '• Katı Yakıtlar: Kömür (taş kömürü, linyit), odun.',
            '• Sıvı Yakıtlar: Benzin, motorin (mazot), gaz yağı, fuel-oil.',
            '• Gaz Yakıtlar: Doğal gaz (metan), LPG (sıvılaştırılmış petrol gazı), biyogaz.',
            '• Karbon Monoksit (CO) Zehirlenmesi ve Korunma: Kömür ve gazın yetersiz oksijende eksik yanması sonucu ortaya çıkan karbon monoksit renksiz, kokusuz ve tatsız olduğundan fark edilmesi çok zordur (sessiz katil). Soba aşırı doldurulmamalı, üstten tutuşturulmalı, lodoslu havalarda yatarken söndürülmeli ve bacalara rüzgâr şapkası takılmalıdır. Zehirlenmede 112 Acil Çağrı veya 187 Doğal Gaz Acil aranmalıdır.'
          ]
        },
        {
          heading: 'Çevre Kirliliği Çeşitleri ve Sürdürülebilirlik',
          paragraphs: [
            '• Su Kirliliği: Sanayi ve evsel atıkların, plastiklerin su kaynaklarına karışmasıdır. Kolera, tifo ve sarılık hastalıklarına yol açar.',
            '• Toprak Kirliliği: Bilinçsiz kimyasal gübre, tarım ilaçları ve toprağa atılan atık pillerin ağır metalleriyle oluşur.',
            '• Hava Kirliliği: Fosil yakıt dumanları ve egzoz gazları astım, bronşit ve asit yağmurlarına yol açar.',
            '• 5 Haziran Dünya Çevre Günü: 1972 Stockholm Çevre Konferansı’ndan beri tüm dünyada çevre bilincini artırmak amacıyla kutlanmaktadır.'
          ]
        },
        {
          heading: 'Çağını Aşanlar: Çevre ve Coğrafya Öncüleri',
          paragraphs: [
            '• Kâtip Çelebi (1608-1658): Cihannüma eseriyle Osmanlı coğrafyacılığına, nehir ve deniz araştırmalarına öncülük etmiştir.',
            '• Evliya Çelebi (1611-1685): 51 yıllık seyahatlerinde kaleme aldığı Seyahatname ile gezdiği yerlerin bitki örtüsü ve biyoçeşitliliğini kayıt altına almıştır.',
            '• Rachel Louise Carson (1907-1964): "Sessiz Bahar" (Silent Spring) eseriyle tarım ilacı DDT’nin besin zincirine karışarak kuşları ve insanları zehirlediğini kanıtlamış ve küresel çevre hareketini başlatmıştır.',
            '• Edward Osborne Wilson (1929-2021): Modern biyoçeşitlilik hareketinin kurucularındandır.'
          ]
        }
      ],
      interactiveBookFlow: [
        {
          id: 'g6-u7-s2-soba-onlem',
          pageNumber: 'Sayfa 117',
          type: 'bilgi_istasyonu',
          title: 'Bilgi İstasyonu: Karbon Monoksit Zehirlenmelerine Karşı 10 Altın Kural',
          prompt: 'Sobanın üstten yakılması, lodoslu havada söndürülmesi ve baca şapkası kullanımının önemini inceleyiniz.',
          resultInfoBox: 'Üstten yakılan soba tam yanma sağlar ve zehirli dumanı engeller. Baca şapkası rüzgârın dumanı içeri basmasını önler.'
        }
      ],
      glossary: [
        { term: 'Karbon Monoksit (CO)', definition: 'Eksik yanma sonucu oluşan, renksiz, kokusuz, kana bağlanarak zehirleyen gaz.' },
        { term: 'LPG', definition: 'Sıvılaştırılmış petrol gazı (tüp gaz).' },
        { term: 'Ormansızlaşma', definition: 'Aşırı kesim, yangın ve yapılaşma nedeniyle orman örtüsünün yok olması.' }
      ],
      trueFalseQuestions: [
        { id: 4, text: 'Karbon monoksit gazı keskin kokusu sayesinde ortamda hemen kolayca fark edilir.', isCorrect: false, explanation: 'Yanlıştır. Karbon monoksit tamamen renksiz ve kokusuzdur, bu yüzden çok tehlikelidir.' },
        { id: 5, text: 'Soba lodoslu havalarda uyumadan önce mutlaka söndürülmelidir.', isCorrect: true, explanation: 'Doğrudur. Rüzgâr dumanı bacadan içeri basabilir.' }
      ],
      lgsQuestions: [
        {
          id: 2,
          questionPrompt: 'Kış aylarında meydana gelen soba zehirlenmelerini önlemek için;\nI. Soba içerisine üstten kömür tutuşturulması\nII. Bacalara rüzgâr yönlendirici baca şapkası takılması\nIII. Uyumadan önce sobaya bol miktarda kömür ilave edilmesi\n\nuygulamalarından hangileri YAPILMAMALIDIR?',
          options: [
            { key: 'A', text: 'Yalnız I' },
            { key: 'B', text: 'Yalnız III' },
            { key: 'C', text: 'I ve II' },
            { key: 'D', text: 'II ve III' }
          ],
          correctAnswer: 'B',
          explanation: 'Uyumadan önce sobaya kömür ilave etmek eksik yanmaya ve zehirlenmeye sebep olur, kesinlikle yapılmamalıdır.'
        }
      ]
    }
  ],
  unitEndQuestions: [
    {
      id: 1,
      pageNumber: '124',
      type: 'multiple_choice',
      title: 'Doğal Yaşam ve Endemik Canlılar',
      questionPrompt: 'Aşağıdakilerden hangisi ülkemizde nesli tükenme tehlikesi altında olup koruma altına alınan bir hayvandır?',
      options: [
        { key: 'A', text: 'Dinozor' },
        { key: 'B', text: 'Mamut' },
        { key: 'C', text: 'Kelaynak' },
        { key: 'D', text: 'Moa kuşu' }
      ],
      correctAnswer: 'C',
      detailedExplanation: 'Kelaynaklar Şanlıurfa Birecik’te koruma altında tutulan nesli tehlikedeki kuşlarımızdandır. Dinozor ve mamutun nesli tamamen tükenmiştir.'
    }
  ],
  unitEnd20Questions: [
    {
      id: 1,
      questionPrompt: 'Doğal gaz zehirlenmesi şüphesinde aranması gereken acil yardım hattı hangisidir?',
      options: [
        { key: 'A', text: '187' },
        { key: 'B', text: '155' },
        { key: 'C', text: '177' },
        { key: 'D', text: '182' }
      ],
      correctAnswer: 'A',
      explanation: 'Doğal Gaz Acil hattı 187’dir (genel acil çağrı ise 112’dir).'
    }
  ]
};

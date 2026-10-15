import { Unit } from '../../types/curriculum';

export const grade6Unit5Data: Unit = {
  id: 'g6-unit-5',
  unitNumber: 5,
  bookNumber: 2,
  grade: 6,
  subject: 'Fen Bilimleri',
  title: 'Maddenin Ayırt Edici Özellikleri',
  unitEndPageRange: 's. 60-63',
  colorTheme: {
    primary: 'from-cyan-600 to-teal-600',
    border: 'border-cyan-500/40',
    bg: 'bg-cyan-950/40',
    accent: 'text-cyan-400',
    text: 'text-cyan-200'
  },
  subTopics: [
    {
      id: 'g6-u5-sub1',
      title: '1. Genleşme ve Büzülme (Katı, Sıvı ve Gazlarda Isı Etkisi)',
      shortTitle: 'Genleşme ve Büzülme',
      badge: 'Sayfa 15-25',
      pageRange: '15 - 25',
      concepts: ['Genleşme', 'Büzülme', 'Tanecikli Yapı', 'Termostat', 'Gravzant Halkası', 'Metal Çifti', 'Esneme Payı', 'Eyfel Kulesi'],
      simulationId: 'density-tower',
      summarySections: [
        {
          heading: 'Genleşme ve Büzülme Nedir?',
          paragraphs: [
            'Maddelerin ısı alarak hacimlerinin artmasına genleşme, ısı vererek hacimlerinin azalmasına ise büzülme denir. Genleşme ve büzülme birbirinin tersi olan fiziksel olaylardır.',
            '• Tanecik Boyutunda Açıklama: Isı alan maddenin taneciklerinin hareket enerjisi artar ve tanecikler daha hızlı titreşir. Bu durum tanecikler arasındaki mesafeyi artırarak maddenin genleşmesine yol açar. Madde ısı verdiğinde ise tanecikler yavaşlar, aralarındaki mesafe azalır ve madde büzülür.',
            '• Ayırt Edici Özellik: Eşit büyüklükteki farklı saf katı ve sıvı maddeler eşit ısıtıldığında farklı miktarlarda genleşirler. Bu nedenle genleşme katı ve sıvılar için ayırt edici bir özelliktir. (Gazların genleşme katsayıları aynı olduğundan gazlar için ayırt edici değildir).'
          ]
        },
        {
          heading: 'Deneyler ve Günlük Hayat Örnekleri',
          paragraphs: [
            '• Gravzant Halkası: Soğukken halkadan rahatça geçen metal küre, ispirto ocağında ısıtıldığında genleşerek halkadan geçemez. Soğuk suya batırıldığında büzülür ve tekrar geçer.',
            '• Metal Çifti: Genleşme katsayıları farklı iki metalin perçinlenmesiyle oluşur. Isıtıldığında çok genleşen metal diğerinin üzerine bükülür. Termostatların çalışma prensibidir.',
            '• Termostat: Ütü, fırın, elektrikli ısıtıcı, buzdolabı ve araç radyatörlerinde sıcaklığı sabit tutmak için kullanılır.',
            '• Günlük Hayat Örnekleri: Elektrik tellerinin yazın sarkıp kışın gerilmesi, tren raylarında bozulmayı önlemek için genleşme payı boşluğu bırakılması, sıkışan kavanoz kapağının sıcak suda genleşerek kolay açılması, Eyfel Kulesi’nin yaz sıcaklarında 15 cm uzaması.'
          ],
          table: {
            headers: ['Olay', 'Maddenin Durumu', 'Değişim Türü'],
            rows: [
              ['Sıcak çay konulan ince cam bardağın çatlaması', 'İç yüzey aniden genleşir, dış yüzey yetişemez', 'Düzensiz Genleşme'],
              ['Kışın soğukta bekletilen futbol topunun inmesi', 'Hava soğuyup büzülür, hacmi azalır', 'Büzülme'],
              ['Sıcak hava balonunun yükselmesi için ateşlenmesi', 'Hava ısınıp genleşir, yoğunluğu düşer', 'Genleşme'],
              ['Metal köprü eklem yerlerindeki taraklı boşluklar', 'Yazın uzayan metallerin birbirini ezmesini önler', 'Genleşme Payı']
            ]
          }
        }
      ],
      interactiveBookFlow: [
        {
          id: 'g6-u5-s1-gravzant',
          pageNumber: 'Sayfa 22',
          type: 'etkinlik_istasyonu',
          title: 'Etkinlik İstasyonu 5: Gravzant Halkası Deneyi',
          prompt: 'Isıtılan metal kürenin gravzant halkasından geçme durumunu gözlemleyiniz.',
          resultInfoBox: 'Isıtılan metal kürenin tanecikleri arasındaki boşluk arttığı için hacmi büyür (genleşir) ve halkadan geçemez. Soğuyunca büzülür ve tekrar geçer.'
        }
      ],
      glossary: [
        { term: 'Genleşme', definition: 'Maddenin ısı alarak hacminin artması olayı.' },
        { term: 'Büzülme', definition: 'Maddenin ısı vererek soğuması sonucu hacminin küçülmesi olayı.' },
        { term: 'Termostat', definition: 'Metal çiftlerinin farklı genleşme özelliğinden faydalanarak sıcaklığı ayarlayan düzenek.' }
      ],
      trueFalseQuestions: [
        { id: 1, text: 'Isı alan bir maddenin tanecikleri arasındaki boşluk artar ve madde genleşir.', isCorrect: true, explanation: 'Doğrudur. Isı tanecik hareketini ve mesafesini artırır.' },
        { id: 2, text: 'Genleşme katı ve sıvılar için ayırt edici bir özelliktir.', isCorrect: true, explanation: 'Doğrudur. Farklı katı ve sıvıların genleşme oranları farklıdır.' },
        { id: 3, text: 'Kışın elektrik tellerinin sarkması genleşme olayına örnektir.', isCorrect: false, explanation: 'Yanlıştır. Kışın teller büzülür ve gerilir; yazın ise genleşip sarkar.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          questionPrompt: 'Demir ve alüminyum şeritlerin birbirine perçinlenmesiyle oluşturulan bir metal çifti ısıtıldığında alüminyumun daha fazla uzaması nedeniyle şerit demirin üzerine doğru bükülmektedir.\n\nBu deneyden yola çıkarak aşağıdaki çıkarımlardan hangisine ulaşılabilir?',
          options: [
            { key: 'A', text: 'Tüm metaller eşit süre ısıtıldığında aynı miktarda genleşir.' },
            { key: 'B', text: 'Farklı cins katı maddelerin genleşme miktarları farklıdır; genleşme ayırt edici bir özelliktir.' },
            { key: 'C', text: 'Katılar ısıtıldığında büzülür.' },
            { key: 'D', text: 'Metal çiftleri sadece soğutulduğunda çalışır.' }
          ],
          correctAnswer: 'B',
          explanation: 'Aynı ısı karşısında alüminyumun demirden çok uzaması genleşmenin katılar için ayırt edici olduğunu kanıtlar.'
        }
      ]
    },
    {
      id: 'g6-u5-sub2',
      title: '2. Maddenin Hâl Değişim Noktaları (Erime, Donma ve Kaynama)',
      shortTitle: 'Hâl Değişim Noktaları',
      badge: 'Sayfa 26-36',
      pageRange: '26 - 36',
      concepts: ['Saf Madde', 'Saf Olmayan Madde', 'Erime Noktası', 'Donma Noktası', 'Kaynama Noktası', 'Sabit Sıcaklık'],
      simulationId: 'density-tower',
      summarySections: [
        {
          heading: 'Saf Madde ve Hâl Değişim Sıcaklıkları',
          paragraphs: [
            'Yapısında tek cins tanecik içeren maddelere saf madde denir (saf su, demir, bakır, altın, cıva, oksijen, tuz, şeker). İki veya daha fazla farklı maddenin bir araya gelmesiyle oluşan maddelere ise saf olmayan madde (karışım) denir (şekerli su, tuzlu su, limonata, hava, toprak).',
            '• Erime ve Donma Noktası: Saf bir katının sıvıya dönüşmeye başladığı sıcaklığa erime noktası, saf bir sıvının donmaya başladığı sıcaklığa donma noktası denir. Saf maddelerde Erime Noktası = Donma Noktasıdır (Saf su $0^\\circ$C, Stearik asit $70^\\circ$C, Demir $1538^\\circ$C, Cıva $-39^\\circ$C).',
            '• Kaynama Noktası: Saf bir sıvının buhar basıncının dış basınca eşitlenip fokurdayarak kaynamaya başladığı sıcaklıktır (Su $100^\\circ$C, Etil alkol $78^\\circ$C, Aseton $56^\\circ$C).',
            '• EN ÖNEMLİ KURAL: Saf maddeler hâl değiştirirken (erirken, donarken, kaynarken) ısı almaya veya vermeye devam etseler bile SICAKLIKLARI KESİNLİKLE SABİT KALIR!'
          ],
          table: {
            headers: ['Saf Madde', 'Erime / Donma Noktası (°C)', 'Kaynama Noktası (°C)'],
            rows: [
              ['Su', '0 °C', '100 °C'],
              ['Etil Alkol', '-114 °C', '78 °C'],
              ['Cıva', '-39 °C', '357 °C'],
              ['Demir', '1538 °C', '2862 °C'],
              ['Stearik Asit', '70 °C', '361 °C']
            ]
          }
        }
      ],
      interactiveBookFlow: [
        {
          id: 'g6-u5-s2-buz-deney',
          pageNumber: 'Sayfa 29',
          type: 'etkinlik_istasyonu',
          title: 'Etkinlik İstasyonu 9: Buzun Erime Noktası Grafiği',
          prompt: 'İçinde buz bulunan beheri ısıtarak her dakikada bir sıcaklığı kaydediniz.',
          resultInfoBox: 'Buz erimeye başladığı andan tamamen eriyip su olana kadar termometredeki sıcaklık 0 °C değerinde sabit kalmıştır.'
        }
      ],
      glossary: [
        { term: 'Saf Madde', definition: 'Tek cins atom veya molekülden oluşan, kendine has erime ve kaynama noktası olan madde.' },
        { term: 'Erime Noktası', definition: 'Saf bir katı maddenin sıvı hâle geçtiği sabit sıcaklık değeri.' },
        { term: 'Kaynama Noktası', definition: 'Saf bir sıvının kaynayarak gaz hâle geçtiği sabit sıcaklık değeri.' }
      ],
      trueFalseQuestions: [
        { id: 4, text: 'Saf bir maddenin erime noktası donma noktasına eşittir.', isCorrect: true, explanation: 'Doğrudur. Örneğin saf su 0 °C’de erir ve 0 °C’de donar.' },
        { id: 5, text: 'Kaynamakta olan saf suyun içine ısı verilmeye devam edilirse sıcaklığı 105 °C’ye çıkar.', isCorrect: false, explanation: 'Yanlıştır. Saf maddeler kaynama süresince sabit sıcaklıkta (100 °C) kalır.' }
      ],
      lgsQuestions: [
        {
          id: 2,
          questionPrompt: 'Isıtılmakta olan saf bir K sıvısının 4. dakikada 78 °C’ye ulaştığı, 4 ile 8. dakikalar arasında sıcaklığının hiç değişmeden 78 °C’de kaldığı ve kapta yoğun buhar çıkışı olduğu gözlenmiştir.\n\nBu gözleme göre K sıvısı ile ilgili hangisi KESİNLİKLE söylenebilir?',
          options: [
            { key: 'A', text: 'K sıvısının kaynama noktası 78 °C’dir.' },
            { key: 'B', text: 'K maddesi sudur.' },
            { key: 'C', text: 'K sıvısı 8. dakikada donmuştur.' },
            { key: 'D', text: 'K maddesi saf olmayan bir karışımdır.' }
          ],
          correctAnswer: 'A',
          explanation: 'Saf sıvılar kaynarken sıcaklıkları sabit kalır. 78 °C’de sıcaklığın sabit kalması kaynama noktasının 78 °C (etil alkol) olduğunu gösterir.'
        }
      ]
    },
    {
      id: 'g6-u5-sub3',
      title: '3. Yoğunluk (Hesaplanması, Karşılaştırılması ve Canlılar İçin Önemi)',
      shortTitle: 'Yoğunluk & Suyun Mucizesi',
      badge: 'Sayfa 37-59',
      pageRange: '37 - 59',
      concepts: ['Kütle (m)', 'Hacim (V)', 'Yoğunluk (d)', 'd = m / V', 'Suda Yüzen Buz', 'Taşırma Kabı', 'Taka & Gemi', 'Mavi Vatan', 'Arşimet', 'Biruni', 'Marie Curie', 'Oktay Sinanoğlu'],
      simulationId: 'density-tower',
      summarySections: [
        {
          heading: 'Yoğunluk Nedir? Formülü ve Hesaplanması',
          paragraphs: [
            'Bir maddenin birim hacmindeki kütlesine yoğunluk (özkütle) denir ve "d" harfi ile gösterilir. Saf maddeler için ayırt edici bir özelliktir.',
            '• Formül: Yoğunluk = Kütle / Hacim ($d = \\frac{m}{V}$). Kütle gram (g), hacim santimetreküp ($cm^3$) alındığında birimi $g/cm^3$ olur.',
            '• Bir sürahi su ile bir damla suyun yoğunluğu tamamen AYNIDIR ($1 g/cm^3$). Kütlesi arttıkça hacmi de aynı oranda artar; kütle/hacim oranı sabit kalır.'
          ]
        },
        {
          heading: 'Sıvıların ve Katıların Yoğunluk Sıralaması',
          paragraphs: [
            'Birbiri içinde çözünmeyen sıvılar bir kaba konulduğunda yoğunluğu en büyük olan sıvı kabın EN DİBİNE çöker, yoğunluğu en küçük olan sıvı ise EN ÜSTTE kalır (Örn: Cıva > Su > Sıvı Yağ > İspirto).',
            'Bir katı cisim suya bırakıldığında: Cismin yoğunluğu suyunkinden büyükse DİBE BATAR (demir, taş, cam bilye); eşitse ASKIDA KALIR; küçükse SUDA YÜZER (tahta, buz, zeytinyağı).'
          ]
        },
        {
          heading: 'Suyun Eşsiz Özelliği ve Canlı Yaşamı İçin Önemi',
          paragraphs: [
            'Genellikle maddeler katı hâle geçerken büzülür ve yoğunlukları artar. ANCAK SUDA HARİKA BİR İSTİSNA VARDIR: Su donarken hacmi genişler ve yoğunluğu $1 g/cm^3$’ten $0,9 g/cm^3$’e DÜŞER!',
            'Buzun yoğunluğu sudan küçük olduğu için buz dağları ve buz tabakaları su yüzeyinde yüzer. Göller ve denizler ÜSTTEN DONAR. Üstteki buz tabakası mükemmel bir yalıtım örtüsü oluşturarak dipteki suyun $+4^\\circ$C sıcaklıkta kalmasını sağlar. Böylece su altındaki balıklar, bitkiler ve mikroorganizmalar kışın donmaktan kurtularak yaşamlarını sürdürürler. Eğer su dipten donmaya başlasaydı dünyadaki deniz ve göl canlılığı tamamen yok olurdu!'
          ],
          table: {
            headers: ['Madde', 'Kütle (m)', 'Hacim (V)', 'Yoğunluk (d = m/V)', 'Sudaki Durumu (d_su = 1)'],
            rows: [
              ['Demir', '78 g', '10 cm³', '7,8 g/cm³', 'Dibe Batar'],
              ['Cam Bilye', '25 g', '10 cm³', '2,5 g/cm³', 'Dibe Batar'],
              ['Su', '100 g', '100 cm³', '1,0 g/cm³', 'Referans'],
              ['Buz', '90 g', '100 cm³', '0,9 g/cm³', 'YÜZER (Hacmi genişler)'],
              ['Zeytinyağı', '90 g', '100 cm³', '0,9 g/cm³', 'YÜZER (Üstte kalır)'],
              ['Etil Alkol', '80 g', '100 cm³', '0,8 g/cm³', 'Üstte kalır']
            ]
          }
        },
        {
          heading: 'Taka ve Gemi Yapımı & Mavi Vatan Dehası',
          paragraphs: [
            'Demir bir çivi suda batarken binlerce ton ağırlığındaki çelik gemilerin suda yüzebilmesinin sebebi, geminin tekne gövdesinde bırakılan devasa hava boşluklarıdır. Bu sayede geminin toplam kütlesinin toplam hacmine oranı (ortalama yoğunluğu) suyun yoğunluğundan çok daha küçük olur.',
            'Üç tarafı denizlerle çevrili cennet vatanımızda Çaka Bey’den Barbaros Hayrettin Paşa’ya, Piri Reis’ten günümüze 462.000 $km^2$’lik "Mavi Vatan" denizlerimizin hakimiyeti milli ülkümüzdür.'
          ]
        },
        {
          heading: 'Çağını Aşanlar: Yoğunluk ve Kimya Öncüleri',
          paragraphs: [
            '• Arşimet (MÖ 287-211): Suyun kaldırma kuvvetini ve maddelerin yoğunluk prensiplerini banyo küvetinde keşfetmiş, gemi inşasına öncülük etmiştir.',
            '• Biruni (973-1048): Özgül ağırlık ölçen piknometre benzeri alet geliştirerek 18 farklı değerli taş ve madenin yoğunluğunu günümüz modern değerleriyle neredeyse birebir aynı doğrulukla hesaplamıştır.',
            '• Marie Curie (1867-1934): Polonyum ve radyumu keşfederek 2 Nobel ödülü alan ilk bilim insanı.',
            '• Oktay Sinanoğlu (1935-2015): 28 yaşında Yale profesörü seçilen Türk kimya dehası; mikrotermodinamik alanında çığır açmıştır.'
          ]
        }
      ],
      interactiveBookFlow: [
        {
          id: 'g6-u5-s3-su-yag',
          pageNumber: 'Sayfa 49',
          type: 'etkinlik_istasyonu',
          title: 'Etkinlik İstasyonu 18: Su ve Sıvı Yağın Yoğunluğu',
          prompt: '100 cm³ su ile 100 cm³ sıvı yağı tartıp yoğunluklarını hesaplayınız ve aynı kaba dökünüz.',
          resultInfoBox: 'Suyun yoğunluğu 1 g/cm³, yağın yoğunluğu 0,9 g/cm³ bulunmuştur. Yağ yoğunluğu küçük olduğu için suyun üstüne çıkarak konumlanır.'
        }
      ],
      glossary: [
        { term: 'Yoğunluk (Özkütle)', definition: 'Bir maddenin birim hacminin kütlesi (d = m / V).' },
        { term: 'Kütle', definition: 'Değişmeyen madde miktarı, eşit kollu terazi ile gram veya kilogram olarak ölçülür.' },
        { term: 'Hacim', definition: 'Maddenin uzayda kapladığı yer, dereceli silindirle cm³ veya mL olarak ölçülür.' },
        { term: 'Mavi Vatan', definition: 'Türkiye’nin Karadeniz, Marmara, Ege ve Akdeniz’deki 462.000 km²’lik deniz yetki alanı.' }
      ],
      trueFalseQuestions: [
        { id: 6, text: 'Bir bardak su ile bir sürahi suyun yoğunlukları birbirine eşittir.', isCorrect: true, explanation: 'Doğrudur. Miktar artsa da kütle/hacim oranı (yoğunluk) değişmez.' },
        { id: 7, text: 'Su donup buza dönüştüğünde hacmi küçülür ve dibe batar.', isCorrect: false, explanation: 'Yanlıştır! Su donarken hacmi genişler, yoğunluğu 0,9 g/cm³’e düşer ve suda yüzer.' },
        { id: 8, text: 'Birbiri içinde çözünmeyen sıvılardan yoğunluğu büyük olan sıvı altta kalır.', isCorrect: true, explanation: 'Doğrudur. Yoğun olan dipte konumlanır.' },
        { id: 9, text: 'Çelik bir geminin yüzebilmesinin sebebi yapısındaki hava boşluklarıyla toplam yoğunluğunun sudan küçük yapılmasıdır.', isCorrect: true, explanation: 'Doğrudur. Ortalama yoğunluk sudan küçük hâle getirilir.' },
        { id: 10, text: 'Biruni geliştirdiği hassas aletlerle madenlerin özgül ağırlıklarını hesaplamıştır.', isCorrect: true, explanation: 'Doğrudur. Biruni yoğunluk ölçümünde dünya çapında öncüdür.' }
      ],
      lgsQuestions: [
        {
          id: 3,
          questionPrompt: 'Kütlesi 300 g olan bir taş parçası, taşma seviyesine kadar su dolu olan taşırma kabına atıldığında dereceli silindire 100 cm³ su taştığı gözlemleniyor.\n\nBuna göre bu taş parçasının YOĞUNLUĞU kaç g/cm³’tür?',
          options: [
            { key: 'A', text: '1 g/cm³' },
            { key: 'B', text: '2 g/cm³' },
            { key: 'C', text: '3 g/cm³' },
            { key: 'D', text: '300 g/cm³' }
          ],
          correctAnswer: 'C',
          explanation: 'Taşın kütlesi m = 300 g, taşırdığı su hacmi taşın hacmine eşittir: V = 100 cm³. Yoğunluk d = m / V = 300 / 100 = 3 g/cm³ bulunur.'
        },
        {
          id: 4,
          questionPrompt: 'Kış aylarında hava sıcaklığı -20 °C’ye kadar düşmesine rağmen donmuş göllerin altında balıkların ve su bitkilerinin yaşamaya devam edebilmesini sağlayan temel bilimsel gerçek hangisidir?',
          options: [
            { key: 'A', text: 'Balıkların kış uykusuna yatması' },
            { key: 'B', text: 'Buzun yoğunluğunun sudan küçük olması sebebiyle göllerin üstten donması ve alt tabakadaki suyu yalıtarak koruması' },
            { key: 'C', text: 'Göl suyunun tuz oranının havanınkinden yüksek olması' },
            { key: 'D', text: 'Göl tabanındaki taşların ısı üretmesi' }
          ],
          correctAnswer: 'B',
          explanation: 'Buzun yoğunluğu (0,9) sudan (1,0) küçük olduğu için göl üstten donar, buz tabakası yalıtım yapar ve dipteki su +4 °C kalarak canlıları korur.'
        }
      ]
    }
  ],
  unitEndQuestions: [
    {
      id: 1,
      pageNumber: '61',
      type: 'multiple_choice',
      title: 'Yoğunluk Tanımı ve Ayırt Edicilik',
      questionPrompt: 'Birim hacimdeki madde miktarına ne ad verilir ve birimi nedir?',
      options: [
        { key: 'A', text: 'Ağırlık — Newton' },
        { key: 'B', text: 'Yoğunluk — g/cm³' },
        { key: 'C', text: 'Kütle — Kilogram' },
        { key: 'D', text: 'Hacim — Santimetreküp' }
      ],
      correctAnswer: 'B',
      detailedExplanation: 'Birim hacimdeki madde miktarına yoğunluk denir. Kütle (g) / Hacim (cm³) olduğundan birimi g/cm³’tür.'
    },
    {
      id: 2,
      pageNumber: '62',
      type: 'multiple_choice',
      title: 'Donan Suyun Hacmi',
      questionPrompt: 'Buzluğa konulan ağzına kadar su dolu cam şişenin donduğunda çatlayıp patlamasının sebebi aşağıdakilerden hangisidir?',
      options: [
        { key: 'A', text: 'Suyun donarken hacminin genişlemesi' },
        { key: 'B', text: 'Suyun kütlesinin artması' },
        { key: 'C', text: 'Camın ısı alarak genleşmesi' },
        { key: 'D', text: 'Suyun yoğunluğunun 2 katına çıkması' }
      ],
      correctAnswer: 'A',
      detailedExplanation: 'Su donarken diğer maddelerin aksine hacmi artar (genleşir). Kapalı cam kap bu hacim artışına dayanamayarak çatlar.'
    }
  ],
  unitEnd20Questions: [
    {
      id: 1,
      questionPrompt: 'Birbiri içinde çözünmeyen X (d = 0,8 g/cm³), Y (d = 1 g/cm³) ve Z (d = 13,6 g/cm³) sıvıları bir kaba döküldüğünde en altta ve en üstte hangi sıvılar yer alır?',
      options: [
        { key: 'A', text: 'En altta Z, en üstte X' },
        { key: 'B', text: 'En altta X, en üstte Z' },
        { key: 'C', text: 'En altta Y, en üstte Z' },
        { key: 'D', text: 'En altta Z, en üstte Y' }
      ],
      correctAnswer: 'A',
      explanation: 'Yoğunluğu en büyük olan Z (13,6) en altta, en küçük olan X (0,8) en üstte konumlanır.'
    }
  ]
};

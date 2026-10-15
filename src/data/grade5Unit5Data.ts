import { Unit } from '../types/curriculum';

export const grade5Unit5Data: Unit = {
  id: 'unit-5',
  unitNumber: 5,
  bookNumber: 2,
  grade: 5,
  subject: 'Fen Bilimleri',
  title: 'Maddenin Doğası',
  unitEndPageRange: 's. 96-103',
  colorTheme: {
    primary: 'cyan-500',
    border: 'border-cyan-500/40',
    bg: 'bg-cyan-500/10',
    accent: 'cyan-400',
    text: 'text-cyan-300'
  },
  subTopics: [
    {
      id: 'unit5-sub1',
      title: '1. Maddelerin Tanecikli, Boşluklu ve Hareketli Yapısı',
      shortTitle: 'Tanecikli ve Boşluklu Yapı',
      badge: 'Sayfa 53-63',
      pageRange: '53 - 63',
      concepts: ['Madde', 'Kütle', 'Hacim', 'Tanecikli Yapı', 'Boşluklu Yapı', 'Titreşim Hareketi', 'Öteleme Hareketi', 'Dönme Hareketi', 'Sıkıştırılabilme', 'Democritus'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Maddenin Tanımı ve Tanecikli Yapı Gerçeği',
          paragraphs: [
            'Kütlesi olan ve uzayda/boşlukta yer kaplayan (hacmi olan) her varlığa madde denir. Taş, su, hava, demir, tahta, elma, masa gibi varlıkların hepsi birer maddedir. Maddelerin ortak özellikleri kütle ve hacimlerinin bulunmasıdır.',
            'Uzaktan bakıldığında pürüzsüz ve tek bir bütün gibi görünen kumsal, yanına yaklaşıldığında milyonlarca minik kum taneciğinden oluşur. Tıpkı kumsal gibi, evrendeki tüm katı, sıvı ve gaz maddeler de gözle görülemeyecek kadar küçük, sürekli hareket hâlinde olan mikroskobik taneciklerden meydana gelir.'
          ],
          keyPoints: [
            'Bütün maddeler tanecikli, boşluklu ve hareketli yapıdadır.',
            'MÖ 400’lü yıllarda filozof Democritus, bir elmayı sürekli bölme örneğiyle maddenin bölünemeyen en küçük yapı taşlarından (atomos) oluştuğunu ilk öne süren düşünürdür.'
          ]
        },
        {
          heading: 'Katı, Sıvı ve Gaz Maddelerin Tanecik Özellikleri ve Hareket Türleri',
          paragraphs: [
            'Madde tanecikleri üç temel hareket türü yapabilir: Titreşim hareketi (olduğu yerde sallanma), Dönme hareketi (kendi etrafında dönme) ve Öteleme hareketi (taneciklerin birbiri üzerinden kayarak yer değiştirmesi).',
            'Sıvı ve gazların akıcı olmasını sağlayan temel etken öteleme hareketidir.'
          ],
          table: {
            headers: ['Özellik', 'Katı Madde', 'Sıvı Madde', 'Gaz Madde'],
            rows: [
              ['Tanecikler Arası Boşluk', 'Çok azdır (birbirine çok yakındır)', 'Katılara göre fazla, gazlara göre azdır', 'En fazladır (birbirinden bağımsız)'],
              ['Tanecik Hareketleri', 'Sadece TİTREŞİM hareketi', 'Titreşim, Dönme ve ÖTELEME', 'Titreşim, Dönme ve ÖTELEME'],
              ['Sıkıştırılabilme', 'Sıkıştırılamaz', 'Sıkıştırılamaz (yok kabul edilir)', 'Kolaylıkla SIKIŞTIRILABİLİR'],
              ['Şekil ve Hacim', 'Belirli şekli ve hacmi vardır', 'Belirli hacmi var, kabın şeklini alır', 'Belirli hacmi ve şekli yoktur'],
              ['Düzenlilik', 'En düzenli hâldir', 'Katıdan daha düzensizdir', 'En düzensiz hâldir']
            ]
          }
        },
        {
          heading: 'Şırınga Deneyi ve Sıkıştırılabilme Özelliği',
          paragraphs: [
            'Üç özdeş şırıngadan birine taş parçası (katı), ikincisine su (sıvı), üçüncüsüne ise hava (gaz) doldurulup uçları kapatılarak piston itildiğinde:',
            '• Taş bulunan şırınganın pistonu milimetre dahi ilerlemez (katılar sıkıştırılamaz).',
            '• Su bulunan şırınganın pistonu hareket etmez (sıvılar sıkıştırılamaz).',
            '• Hava bulunan şırınganın pistonu kolaylıkla ileriye doğru itilebilir (gazların tanecikleri arasındaki boşluk çok fazla olduğu için gazlar yüksek oranda sıkıştırılabilir).'
          ]
        }
      ],
      trueFalseQuestions: [
        {
          id: 1,
          text: 'Katı maddelerin tanecikleri sadece titreşim hareketi yapar, öteleme hareketi yapamaz.',
          isCorrect: true,
          explanation: 'Doğrudur. Katı tanecikleri çok sıkı dizildiği için sadece bulundukları yerde titreşirler.'
        },
        {
          id: 2,
          text: 'Sıvı ve gaz maddelerin akışkan olmasını sağlayan hareket türü öteleme hareketidir.',
          isCorrect: true,
          explanation: 'Doğrudur. Taneciklerin birbiri üzerinden kayarak yer değiştirmesi (öteleme) akışkanlığı sağlar.'
        },
        {
          id: 3,
          text: 'Maddenin en boşluklu ve en düzensiz hâli katı hâldir.',
          isCorrect: false,
          explanation: 'Yanlıştır. En düzenli ve en az boşluklu hâl katı hâldir; en düzensiz ve en boşluklu hâl gaz hâlidir.'
        },
        {
          id: 4,
          text: 'Gaz tanecikleri arasındaki boşluk çok fazla olduğu için gazlar pistonla kolayca sıkıştırılabilir.',
          isCorrect: true,
          explanation: 'Doğrudur. Şırınga deneyinde hava dolu şırınganın pistonu sıkıştırılabilmektedir.'
        }
      ],
      lgsQuestions: [
        {
          id: 1,
          questionPrompt: 'İçi hava dolu bir balon parmaklarla bastırıldığında kolayca büzüşüp küçülürken, içi su dolu bir balon veya tahta bir blok aynı kuvvetle sıkıştırıldığında hacminde bir küçülme gerçekleşmemektedir.\n\nBu durumu açıklayan en temel bilimsel gerekçe aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Gaz maddelerin tanecikleri arasındaki boşluğun katı ve sıvılara göre çok daha fazla olması' },
            { key: 'B', text: 'Sıvı taneciklerinin sadece titreşim hareketi yapması' },
            { key: 'C', text: 'Katı maddelerin kütlesinin olmaması' },
            { key: 'D', text: 'Havanın kütlesinin sudan fazla olması' }
          ],
          correctAnswer: 'A',
          explanation: 'Gazların sıkıştırılabilmesi, tanecikleri arasındaki devasa boşlukların basınç etkisiyle birbirine yaklaşabilmesinden kaynaklanır.'
        },
        {
          id: 2,
          questionPrompt: 'Democritus’un elmayı ikiye, dörde bölerek sürdürdüğü ve en sonunda artık bölünemeyecek bir zerrecik kalacağını belirttiği düşünce deneyi hangi kavramın temelini oluşturur?',
          options: [
            { key: 'A', text: 'Maddenin akışkanlığı' },
            { key: 'B', text: 'Maddenin tanecikli yapısı' },
            { key: 'C', text: 'Suyun buharlaşma sıcaklığı' },
            { key: 'D', text: 'Işığın yansıması' }
          ],
          correctAnswer: 'B',
          explanation: 'Democritus bölünemeyen en küçük parçacık düşüncesiyle maddenin tanecikli yapısını ileri sürmüştür.'
        }
      ],
      glossary: [
        { term: 'Titreşim', definition: 'Taneciklerin bulundukları sabit konum etrafında ileri-geri salınım hareketi yapması.' },
        { term: 'Öteleme', definition: 'Taneciklerin birbiri üzerinden kayarak bir noktadan başka bir noktaya yer değiştirmesi (akışkanlık kaynağı).' },
        { term: 'Sıkıştırılabilme', definition: 'Dıştan uygulanan basınçla tanecikler arasındaki boşlukların azaltılarak hacmin küçültülebilmesi.' }
      ]
    },
    {
      id: 'unit5-sub2',
      title: '2. Isı ve Sıcaklığın Karşılaştırılması & Isı Alışverişi',
      shortTitle: 'Isı ve Sıcaklık & Isı Alışverişi',
      badge: 'Sayfa 64-73',
      pageRange: '64 - 73',
      concepts: ['Isı', 'Sıcaklık', 'Termometre', 'Kalorimetre Kabı', 'Derece Celsius (°C)', 'Joule (J)', 'Kalori (cal)', 'Isı Alışverişi', 'Denge Sıcaklığı', 'HADAR Teknolojisi'],
      simulationId: 'dynamometer',
      summarySections: [
        {
          heading: 'Isı ve Sıcaklık Kavramlarının Farkları',
          paragraphs: [
            'Günlük konuşma dilinde "hava ısısı 25 °C" veya "vücut ısısı 38 °C" gibi kullanımlar tamamen yanlıştır. Fen bilimlerinde ısı ile sıcaklık kesinlikle aynı şey değildir.',
            'Isı bir enerji çeşididir. Sıcaklıkları farklı olan maddeler arasında alınıp verilen bu enerjidir. Kalorimetre kabı ile hesaplanır, birimi Joule (J) veya kaloridir (cal).',
            'Sıcaklık ise bir enerji değildir; maddenin taneciklerinin ortalama hareket (kinetik) enerjisinin bir göstergesi ve ölçümüdür. Termometre ile ölçülür ve birimi derece Celsius’tur (°C).'
          ],
          table: {
            headers: ['Karşılaştırma Ölçütü', 'Isı', 'Sıcaklık'],
            rows: [
              ['Tanımı', 'Sıcaklık farkından dolayı aktarılan enerji', 'Taneciklerin ortalama kinetik enerjisinin ölçüsü'],
              ['Enerji Türü mü?', 'EVET, bir enerji türüdür.', 'HAYIR, enerji değildir, bir göstergedir.'],
              ['Ölçüm Aracı', 'Kalorimetre kabı ile hesaplanır.', 'Termometre ile ölçülür.'],
              ['Birimi', 'Joule (J) veya kalori (cal)', 'Derece Celsius (°C)'],
              ['Madde Miktarına Bağlılık', 'Madde miktarına (kütleye) bağlıdır.', 'Madde miktarından bağımsızdır.']
            ]
          }
        },
        {
          heading: 'Isı Alışverişi ve Denge Sıcaklığı Prensipleri',
          paragraphs: [
            'Farklı sıcaklıktaki iki madde birbirine temas ettirildiğinde veya karıştırıldığında aralarında ısı akışı başlar:',
            '• Isı akışının yönü DAİMA sıcaklığı yüksek olan maddeden sıcaklığı düşük olan maddeye doğrudur.',
            '• Sıcak madde ısı VERİR, bu nedenle sıcaklığı düşer. Soğuk madde ısı ALIR, bu nedenle sıcaklığı yükselir.',
            '• Isı alışverişi her iki maddenin sıcaklığı birbirine eşit oluncaya (Denge Sıcaklığına ulaşılıncaya) kadar devam eder. Denge sıcaklığına ulaşıldığında ısı akışı durur.',
            '• Denge sıcaklığı (T_denge) daima karıştırılan iki sıvının ilk sıcaklıkları arasında bir değer alır. Örneğin 90 °C’deki sıcak çay ile 10 °C’deki soğuk su karıştırılırsa son sıcaklık mutlaka 10 °C ile 90 °C arasında olur (asla 10 °C’den soğuk veya 90 °C’den sıcak olamaz).',
            '• Sıcaklıkları baştan eşit olan (örneğin ikisi de 40 °C olan) maddeler arasında kesinlikle ısı alışverişi gerçekleşmez.'
          ]
        },
        {
          heading: 'Teknoloji Köşesi: HADAR (Isı Destekli Tespit ve Menzil)',
          paragraphs: [
            'Otomotiv ve savunma sanayiinde gece karanlığında veya yoğun sisli havalarda nesnelerin görünürlüğünü sağlamak için HADAR sistemi geliştirilmiştir. Nesnelerin çevrelerine yaydığı ısı sinyalleri kameralarca toplanıp yapay zekâ kütüphanesiyle analiz edilerek yayaların ve araçların sıcaklık ve mesafeleri net bir şekilde ekrana yansıtılır.'
          ]
        }
      ],
      trueFalseQuestions: [
        {
          id: 5,
          text: '"Bugün havanın ısısı 28 °C olarak ölçüldü." ifadesi bilimsel olarak doğru bir ifadedir.',
          isCorrect: false,
          explanation: 'Yanlıştır. Termometre ile ölçülen ve birimi °C olan değer sıcaklıktır; doğru ifade "hava sıcaklığı 28 °C" olmalıdır.'
        },
        {
          id: 6,
          text: 'Sıcaklıkları farklı iki sıvı karıştırıldığında ısı akışı soğuk olan sıvıdan sıcak olana doğru gerçekleşir.',
          isCorrect: false,
          explanation: 'Yanlıştır. Isı akışı daima sıcaktan soğuğa doğrudur.'
        },
        {
          id: 7,
          text: '70 °C’deki su ile 30 °C’deki su karıştırıldığında karışımın denge sıcaklığı 30 °C ile 70 °C arasında bir değer alır.',
          isCorrect: true,
          explanation: 'Doğrudur. Denge sıcaklığı daima sıcaklığı azalandan küçük, sıcaklığı artandan büyük olmak zorundadır.'
        },
        {
          id: 8,
          text: 'Isı bir enerji çeşididir ve birimi joule veya kaloridir.',
          isCorrect: true,
          explanation: 'Doğrudur. Isı enerji iken sıcaklık sadece bir ölçümdür.'
        }
      ],
      lgsQuestions: [
        {
          id: 3,
          questionPrompt: 'Özdeş K, L ve M kaplarında sırasıyla 20 °C, 40 °C ve 70 °C sıcaklığında aynı cins sıvılar bulunmaktadır.\n\nBuna göre;\nI. K ve L kaplarındaki sıvılar karıştırılırsa K sıvısı ısı alır.\nII. L ve M kaplarındaki sıvılar karıştırılırsa M sıvısının sıcaklığı azalır.\nIII. L kabına 40 °C sıcaklığında sıvı eklenirse ısı alışverişi gerçekleşmez.\n\nyargılarından hangileri doğrudur?',
          options: [
            { key: 'A', text: 'I ve II' },
            { key: 'B', text: 'I ve III' },
            { key: 'C', text: 'II ve III' },
            { key: 'D', text: 'I, II ve III' }
          ],
          correctAnswer: 'D',
          explanation: '20°C (K) ve 40°C (L) karışımında L ısı verir, K ısı alır (I doğru). 40°C (L) ve 70°C (M) karışımında 70°C olan M ısı vererek sıcaklığı düşer (II doğru). Sıcaklıkları eşit (40°C ve 40°C) maddeler arasında ısı alışverişi olmaz (III doğru).'
        },
        {
          id: 4,
          questionPrompt: 'Ayşe Hanım 95 °C sıcaklığındaki çayın çok sıcak olduğunu görüp içine bir miktar 10 °C sıcaklığında su ilave ediyor.\n\nBuna göre;\nI. Su, çaydan ısı almıştır.\nII. Çayın son sıcaklığı 5 °C olmuştur.\nIII. Isı akışı çaydan suya doğru olmuştur.\n\nifadelerinden hangileri doğrudur?',
          options: [
            { key: 'A', text: 'I ve II' },
            { key: 'B', text: 'I ve III' },
            { key: 'C', text: 'II ve III' },
            { key: 'D', text: 'Yalnız I' }
          ],
          correctAnswer: 'B',
          explanation: '95°C olan çay 10°C olan suya ısı verir (I ve III doğru). Denge sıcaklığı 10°C ile 95°C arasında olmak zorundadır, asla 5°C olamaz (II yanlıştır).'
        }
      ],
      glossary: [
        { term: 'Isı', definition: 'Sıcaklıkları farklı maddeler arasında aktarılan termal enerji. Birimi Joule (J) veya kalori (cal).' },
        { term: 'Sıcaklık', definition: 'Maddenin taneciklerinin sahip olduğu ortalama hareket enerjisinin göstergesi. Termometreyle ölçülür, birimi °C.' },
        { term: 'Denge Sıcaklığı', definition: 'Isı alışverişi yapan maddelerin ısı akışı durduğunda ulaştıkları ortak son sıcaklık.' }
      ]
    },
    {
      id: 'unit5-sub3',
      title: '3. Maddenin Hâl Değişimi ve Isı Alışverişi',
      shortTitle: 'Maddenin Hâl Değişimi',
      badge: 'Sayfa 74-85',
      pageRange: '74 - 85',
      concepts: ['Hâl Değişimi', 'Erime', 'Donma', 'Buharlaşma', 'Kaynama', 'Yoğuşma', 'Süblimleşme', 'Kırağılaşma', 'Sabit Sıcaklık', 'Buharlaşma vs Kaynama'],
      simulationId: 'moon-phases',
      summarySections: [
        {
          heading: 'Maddenin Hâl Değişimleri ve Isı İlişkisi',
          paragraphs: [
            'Maddelerin ısı alarak ya da ısı vererek bir fiziksel hâlden (katı, sıvı, gaz) başka bir hâle geçmesine hâl değişimi denir. Hâl değişimi sırasında maddenin kimyasal yapısı değişmez; taneciklerin hareket hızı ve aralarındaki boşluk değişir.',
            'Saf maddelerin hâl değiştirirken (erime, donma, kaynama süresince) sıcaklıkları kesinlikle SABİT kalır. Alınan ya da verilen ısı tanecikler arası bağları düzenlemede kullanılır.'
          ],
          table: {
            headers: ['Hâl Değişimi Türü', 'Başlangıç ve Bitiş Hâli', 'Isı Durumu', 'Taneciklerin Durumu', 'Günlük Hayattan Örnek'],
            rows: [
              ['Erime', 'Katı → Sıvı', 'Isı ALIR', 'Tanecikler hızlanır, boşluk artar', 'Buzun erimesi, dondurmanın sıvılaşması, tereyağının tavada erimesi'],
              ['Donma', 'Sıvı → Katı', 'Isı VERİR', 'Tanecikler yavaşlar, boşluk azalır', 'Göl yüzeyinin buz tutması, buzluktaki suyun buza dönüşmesi'],
              ['Buharlaşma', 'Sıvı → Gaz', 'Isı ALIR', 'Tanecikler serbestleşir, hızlanır', 'Islak çamaşırların kuruması, ele dökülen kolonyanın uçması'],
              ['Yoğuşma', 'Gaz → Sıvı', 'Isı VERİR', 'Tanecikler yavaşlar, birbirine yaklaşır', 'Buzdolabından çıkan soğuk şişede su damlacıkları, tencere kapağında damlalar'],
              ['Süblimleşme', 'Katı → Gaz (sıvılaşmadan)', 'Isı ALIR', 'Doğrudan gaz hâle geçer, boşluk hızla artar', 'Dolaplara konan naftalinin yok olması, kuru buz, katı iyot'],
              ['Kırağılaşma', 'Gaz → Katı (sıvılaşmadan)', 'Isı VERİR', 'Havadaki su buharı aniden donar', 'Soğuk kış sabahlarında araba camlarında ve yapraklarda oluşan buz kristalleri']
            ]
          }
        },
        {
          heading: 'Buharlaşma ile Kaynama Arasındaki Temel Farklar',
          paragraphs: [
            'Öğrencilerin sıklıkla karıştırdığı buharlaşma ve kaynama kavramları arasında belirgin farklar vardır:'
          ],
          table: {
            headers: ['Özellik', 'Buharlaşma', 'Kaynama'],
            rows: [
              ['Gerçekleştiği Sıcaklık', 'HER sıcaklıkta gerçekleşir (0°C, 20°C, 50°C vb.)', 'Sadece BELİRLİ ve SABİT kaynama sıcaklığında (Su için 100°C)'],
              ['Gerçekleştiği Bölge', 'Yalnızca sıvının YÜZEYİNDE gerçekleşir.', 'Sıvının HER YERİNDE (derinlerde ve yüzeyde) fokurdar.'],
              ['Kabarcık Oluşumu', 'Kabarcık oluşmaz, sessizce gerçekleşir.', 'Hızlı kabarcıklar ve fokurdama oluşur.'],
              ['Hızı', 'Genellikle yavaş gerçekleşir.', 'Hızlı ve coşkulu gerçekleşir.']
            ]
          }
        }
      ],
      trueFalseQuestions: [
        {
          id: 9,
          text: 'Saf su kaynarken veya buz erirken sıcaklık sürekli artmaya devam eder.',
          isCorrect: false,
          explanation: 'Yanlıştır. Saf maddelerin hâl değişimi süresince sıcaklıkları tamamen sabit kalır.'
        },
        {
          id: 10,
          text: 'Ele dökülen kolonyanın buharlaşırken eli serinletmesi, buharlaşmanın ısı alan bir olay olduğunu gösterir.',
          isCorrect: true,
          explanation: 'Doğrudur. Kolonya sıvıdan gaza geçerken elimizden ısı alır; elimiz ısı kaybettiği için serinlik hissederiz.'
        },
        {
          id: 11,
          text: 'Buharlaşma sadece kaynama sıcaklığında gerçekleşir.',
          isCorrect: false,
          explanation: 'Yanlıştır. Kaynama belirli sıcaklıkta olur, buharlaşma ise her sıcaklıkta gerçekleşir.'
        },
        {
          id: 12,
          text: 'Kıyafetlerin arasına konulan naftalinin erimeden doğrudan gaz hâle geçmesi süblimleşmedir.',
          isCorrect: true,
          explanation: 'Doğrudur. Katının sıvılaşmadan gaza dönüşmesi süblimleşmedir ve ısı alarak gerçekleşir.'
        }
      ],
      lgsQuestions: [
        {
          id: 5,
          questionPrompt: 'İçerisinde buz parçaları bulunan bir beherglas ısıtıcı üzerine konuluyor ve her 2 dakikada bir sıcaklığı ölçülüyor. 2. ve 4. dakikalar arasında sıcaklığın 0 °C’de sabit kaldığı, 14, 16 ve 18. dakikalarda ise 100 °C’de sabit kaldığı kaydediliyor.\n\nBuna göre deneyle ilgili;\nI. 2. ve 4. dakikalar arasında erime gerçekleşmiştir.\nII. Sıcaklığın sabit kaldığı aralıklarda madde ısı almamıştır.\nIII. Suyun kaynama sıcaklığı 100 °C’dir.\n\nyargılarından hangileri doğrudur?',
          options: [
            { key: 'A', text: 'I ve II' },
            { key: 'B', text: 'I ve III' },
            { key: 'C', text: 'II ve III' },
            { key: 'D', text: 'I, II ve III' }
          ],
          correctAnswer: 'B',
          explanation: '0°C’de erime olmuştur (I). Isıtıcı devrede olduğu için ısı alınmaya devam edilmiştir ancak sıcaklık bağları kırmak için sabit kalmıştır (II yanlış). 100°C kaynama noktasıdır (III doğru).'
        },
        {
          id: 6,
          questionPrompt: 'Soğuk bir kış sabahında araba camlarında görülen kırağılaşma olayı ile ilgili;\nI. Isı vererek gerçekleşir.\nII. Gaz hâlden doğrudan katı hâle geçiştir.\nIII. Tanecikler arasındaki boşluk artar.\n\nyargılarından hangileri doğrudur?',
          options: [
            { key: 'A', text: 'I ve II' },
            { key: 'B', text: 'I ve III' },
            { key: 'C', text: 'II ve III' },
            { key: 'D', text: 'I, II ve III' }
          ],
          correctAnswer: 'A',
          explanation: 'Kırağılaşma havadaki su buharının ısı vererek sıvılaşmadan buza (katıya) dönüşmesidir (I ve II). Gaza göre katıda tanecikler arası boşluk azalır (III yanlıştır).'
        }
      ],
      glossary: [
        { term: 'Süblimleşme', definition: 'Katı maddenin ısı alarak sıvı hâle geçmeden doğrudan gaz hâle geçmesi (naftalin, kuru buz).' },
        { term: 'Kırağılaşma', definition: 'Gaz hâldeki maddenin ısı vererek doğrudan katı hâle geçmesi (kış sabahları camlardaki buz kristalleri).' },
        { term: 'Kaynama', definition: 'Sıvının her noktasında buharlaşmanın başladığı, kabarcıkların oluştuğu sabit sıcaklıktaki hızlı hâl değişimi.' }
      ]
    },
    {
      id: 'unit5-sub4',
      title: '4. Madde ve Isı (Isı İletkenliği, Isı Yalıtımı ve Enerji Dostu Evler)',
      shortTitle: 'Isı İletimi ve Yalıtım',
      badge: 'Sayfa 86-95',
      pageRange: '86 - 95',
      concepts: ['Isı İletkeni', 'Isı Yalıtkanı', 'Isı Yalıtımı', 'Bakalit', 'Strafor Köpük', 'Termos', 'Harran Kümbet Evleri', 'Enerji Tasarrufu', 'İbni Sînâ', 'Câbir bin Hayyân', 'Celsius', 'Fahrenheit'],
      simulationId: 'dynamometer',
      summarySections: [
        {
          heading: 'Isı İletkeni ve Isı Yalıtkanı Maddeler',
          paragraphs: [
            'Isıyı kolay ve hızlı bir şekilde aktarabilen maddelere ısı iletkeni denir. Metaller (demir, bakır, alüminyum, çelik, gümüş, altın) çok iyi birer ısı iletkenidir. Çorba pişirilen tencerenin gövdesi, ocaktan gelen ısının hızla yemeğe geçmesi için çelik veya alüminyumdan üretilir.',
            'Isıyı iyi iletmeyen, ısı akışını zorlaştıran maddelere ise ısı yalıtkanı denir. Tahta, plastik, bakalit, strafor köpük, saman, cam yünü, taş yünü, yün ve pamuk ısı yalıtkanıdır. Tencere ve çaydanlık kulpları elimizin yanmaması için bakalit veya plastikten yapılır.'
          ],
          table: {
            headers: ['Madde', 'Sınıflandırma', 'Kullanım Amacı'],
            rows: [
              ['Çelik tencere gövdesi / Bakır tava', 'Isı İletkeni', 'Isıyı yemeğe hızlıca iletip çabuk pişmesini sağlamak'],
              ['Tencere bakalit kulpu / Tahta kaşık', 'Isı Yalıtkanı', 'Isı aktarımını engelleyip elimizin yanmasını önlemek'],
              ['Binalarda strafor köpük / Taş yünü', 'Isı Yalıtkanı', 'Kışın evin ısısını korumak, yazın dış sıcağı içeri almamak'],
              ['Fırın eldiveni / Yünlü kazak', 'Isı Yalıtkanı', 'Vücut ısısını korumak, aşırı sıcaktan elleri korumak']
            ]
          }
        },
        {
          heading: 'Isı Yalıtımının Önemi ve Termos Teknolojisi',
          paragraphs: [
            'Isı yalıtımı, ortamlar arasındaki ısı geçişini engelleyerek veya yavaşlatarak var olan sıcaklığı koruma işlemidir. Binalarda yapılan ısı yalıtımı yakıt ve elektrik faturalarını düşürür, aile ve ülke ekonomisine büyük katkı sağlar; fosil yakıt tüketimini azaltarak hava kirliliğini önler.',
            'Termoslar iç içe geçmiş iki duvardan oluşur. Bu iki duvar arasındaki hava tamamen vakumlanır (boşaltılır). Havasız boşlukta tanecik olmadığı için ısı iletim yoluyla geçemez; iç yüzeyin ayna gibi parlak olması da ışıma ile ısı kaybını önler.'
          ]
        },
        {
          heading: 'Kültürel Miras ve Bilim: Şanlıurfa Harran Evleri',
          paragraphs: [
            'Şanlıurfa Harran’daki konik kubbeli kümbet evler ecdadımızın mimari ve yalıtım dehasıdır. Dışları balçık, iç kısımları ise toprak, saman, yumurta akı ve gül yağı sıvasıyla kaplanmıştır. Bu özel yalıtımlı malzeme ve yüksek kubbe yapısı sayesinde evler yazın kavurucu çöl sıcağında serin, kışın ise tek bir sobayla sıcacık kalır.'
          ]
        },
        {
          heading: 'Çağını Aşanlar: Termal ve Kimya Öncüleri',
          paragraphs: [
            '• İbni Sînâ: Tıp, fizik ve kimyada maddelerin erime, süblimleşme ve damıtma özelliklerini incelemiştir.',
            '• Câbir bin Hayyân: Kimyanın babası sayılır; saflaştırma, buharlaşma ve yoğuşma deneyleri ile imbik aygıtını geliştirmiştir.',
            '• Anders Celsius: Suyun donma noktasını 0 °C, kaynama noktasını 100 °C kabul eden santigrat ölçeğini icat etmiştir.',
            '• Daniel Gabriel Fahrenheit: Sıvıların ısınmayla genleşmesi ilkesinden faydalanarak modern cıvalı termometreyi geliştirmiştir.'
          ]
        }
      ],
      trueFalseQuestions: [
        {
          id: 13,
          text: 'Tencerelerin gövdesinde çelik kullanılmasının sebebi çeliğin iyi bir ısı yalıtkanı olmasıdır.',
          isCorrect: false,
          explanation: 'Yanlıştır. Çelik ısı iletkenidir; yemeğin çabuk pişmesi için gövdede iletken metal tercih edilir.'
        },
        {
          id: 14,
          text: 'Binalara yapılan ısı yalıtımı hem kışın ısınma hem de yazın soğutma giderlerini azaltarak enerji tasarrufu sağlar.',
          isCorrect: true,
          explanation: 'Doğrudur. Yalıtım her mevsimde ortam sıcaklığının korunmasını sağlayarak enerji tasarrufu yaptırır.'
        },
        {
          id: 15,
          text: 'Strafor köpük, bakalit, taş yünü ve cam yünü ısı iletkeni maddelerdir.',
          isCorrect: false,
          explanation: 'Yanlıştır. Bu maddelerin tamamı ısı yalıtkanıdır.'
        }
      ],
      lgsQuestions: [
        {
          id: 7,
          questionPrompt: 'Kahramanmaraş’tan Ankara’ya 10 saatlik otobüs yolculuğunda dondurmanın erimeden ulaştırılabilmesi için strafor köpük kutu içine konulmuş ve içine bir miktar kuru buz yerleştirilmiştir.\n\nBuna göre dondurmanın erimemesini sağlayan temel faktörler aşağıdakilerden hangisinde doğru verilmiştir?',
          options: [
            { key: 'A', text: 'Strafor köpüğün iyi bir ısı yalıtkanı olması ve kuru buzun ortamı dondurucu soğuklukta tutması' },
            { key: 'B', text: 'Dondurmanın ısı iletkeni olması' },
            { key: 'C', text: 'Kutunun içine güneş ışığının doğrudan girmesi' },
            { key: 'D', text: 'Otobüsün hızlı hareket etmesi' }
          ],
          correctAnswer: 'A',
          explanation: 'Strafor köpük ısı yalıtkanı olduğu için dışarıdaki ısının içeri girmesini engeller; süblimleşen kuru buz ise ortamı soğuk tutar.'
        },
        {
          id: 8,
          questionPrompt: 'Termosların iç ve dış çeperleri arasındaki havanın boşaltılarak (vakumlanarak) tasarlanmasının temel amacı nedir?',
          options: [
            { key: 'A', text: 'Termosun ağırlığını artırmak' },
            { key: 'B', text: 'Maddesel ortamı yok ederek tanecikler arası ısı iletimini engellemek' },
            { key: 'C', text: 'Termosun içine daha fazla sıvı doldurabilmek' },
            { key: 'D', text: 'İçeceğin kaynama noktasını yükseltmek' }
          ],
          correctAnswer: 'B',
          explanation: 'Boşlukta (vakumda) tanecik bulunmadığı için tanecikten taneciğe ısı iletimi gerçekleşemez; bu da mükemmel yalıtım sağlar.'
        }
      ],
      glossary: [
        { term: 'Isı İletkeni', definition: 'Isıyı tanecikleri arasında hızlıca aktarabilen maddeler (demir, bakır, alüminyum).' },
        { term: 'Isı Yalıtkanı', definition: 'Isı geçişini yavaşlatan ve engelleyen maddeler (strafor köpük, bakalit, tahta, cam yünü).' },
        { term: 'Vakum', definition: 'Havası tamamen çekilmiş boşluk ortamı; tanecik olmadığı için iletimle ısı yayılmaz.' }
      ]
    }
  ],
  unitEndQuestions: [
    {
      id: 1,
      pageNumber: '96',
      type: 'multiple_choice',
      title: 'Maddenin Tanecikli Yapısı',
      questionPrompt: 'Aşağıdaki maddelerden hangisinin tanecikleri arasındaki boşluk en fazladır ve sıkıştırılabilir?',
      options: [
        { key: 'A', text: 'Demir çivi' },
        { key: 'B', text: 'Su' },
        { key: 'C', text: 'Su buharı' },
        { key: 'D', text: 'Zeytinyağı' }
      ],
      correctAnswer: 'C',
      detailedExplanation: 'Su buharı gaz hâldedir; gaz tanecikleri arasındaki boşluk en fazla olup sıkıştırılabilir.'
    },
    {
      id: 2,
      pageNumber: '98',
      type: 'multiple_choice',
      title: 'Isı ve Sıcaklık Karşılaştırması',
      questionPrompt: 'Ayşe Hanım’ın odasında uzun süredir bekleyen 25 °C’deki ahşap masa ile metal vazonun sıcaklıkları için hangisi doğrudur?',
      options: [
        { key: 'A', text: 'Masa 25 °C, vazo 25 °C' },
        { key: 'B', text: 'Masa 25 °C, vazo 10 °C' },
        { key: 'C', text: 'Masa 35 °C, vazo 15 °C' },
        { key: 'D', text: 'Masa 10 °C, vazo 50 °C' }
      ],
      correctAnswer: 'A',
      detailedExplanation: 'Aynı odada uzun süre bekleyen tüm nesneler oda ile ısıl dengeye ulaşır ve sıcaklıkları birbirine eşit (25 °C - 25 °C) olur. Metale dokunduğumuzda soğuk hissetmemizin nedeni sıcaklığının düşük olması değil, ısı iletkenliğinin tahtadan yüksek olmasıdır.'
    }
  ],
  unitEnd20Questions: [
    {
      id: 1,
      questionPrompt: 'Tanecikleri sadece titreşim hareketi yapabilen, belirli bir hacmi ve şekli olan madde hâli hangisidir?',
      options: [
        { key: 'A', text: 'Katı' },
        { key: 'B', text: 'Sıvı' },
        { key: 'C', text: 'Gaz' },
        { key: 'D', text: 'Plazma' }
      ],
      correctAnswer: 'A',
      explanation: 'Katı maddelerin tanecikleri sadece titreşim hareketi yapabilir ve belirli şekil ile hacme sahiptir.'
    },
    {
      id: 2,
      questionPrompt: 'Aşağıdakilerden hangisi ısı enerjisinin birimidir?',
      options: [
        { key: 'A', text: 'Derece Celsius' },
        { key: 'B', text: 'Joule veya kalori' },
        { key: 'C', text: 'Metre' },
        { key: 'D', text: 'Newton' }
      ],
      correctAnswer: 'B',
      explanation: 'Isı bir enerjidir ve birimi Joule veya kaloridir. Derece Celsius ise sıcaklık birimidir.'
    }
  ]
};

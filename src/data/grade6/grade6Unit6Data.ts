import { Unit } from '../../types/curriculum';

export const grade6Unit6Data: Unit = {
  id: 'g6-unit-6',
  unitNumber: 6,
  bookNumber: 2,
  grade: 6,
  subject: 'Fen Bilimleri',
  title: 'Elektriğin İletimi ve Direnç',
  unitEndPageRange: 's. 92-95',
  colorTheme: {
    primary: 'from-yellow-600 to-amber-600',
    border: 'border-yellow-500/40',
    bg: 'bg-yellow-950/40',
    accent: 'text-yellow-400',
    text: 'text-yellow-200'
  },
  subTopics: [
    {
      id: 'g6-u6-sub1',
      title: '1. Maddelerin Elektriği İletme Durumları (İletken ve Yalıtkanlar)',
      shortTitle: 'Elektriğin İletimi',
      badge: 'Sayfa 68-73',
      pageRange: '68 - 73',
      concepts: ['İletken Maddeler', 'Yalıtkan Maddeler', 'Katı İletkenler', 'Sıvı İletkenler', 'Katı Yalıtkanlar', 'Sıvı Yalıtkanlar', 'Yıldırım & Şimşek', 'Elektrik Güvenliği'],
      simulationId: 'circuit',
      summarySections: [
        {
          heading: 'İletken ve Yalıtkan Maddeler',
          paragraphs: [
            'Elektrik enerjisinin üzerinden akıp geçmesine izin veren maddelere iletken maddeler denir. Elektrik akımının geçişine izin vermeyen veya engelleyen maddelere ise yalıtkan maddeler denir.',
            '• Katı İletkenler: Bakır, gümüş, altın, alüminyum, demir, çinko, kurşun, çivi, metal kaşık, kurşun kalem ucu (grafit).',
            '• Sıvı İletkenler: Tuzlu su, sirkeli su, limonlu su, çeşme suyu, asitli ve bazlı çözeltiler.',
            '• Katı Yalıtkanlar: Plastik, kauçuk, cam, porselen, tahta, kâğıt, seramik, ebonit, pamuk, yün.',
            '• Sıvı Yalıtkanlar: Saf su, şekerli su, alkollü su, zeytinyağı, gaz yağı.',
            '• Gazların İletkenliği: Hava normal koşullarda mükemmel bir yalıtkandır. Ancak fırtınalı yağışlı havalarda aşırı yüksek elektrik yükü altında (yıldırım ve şimşek olaylarında) hava anlık olarak iletken hâle gelebilir.'
          ],
          table: {
            headers: ['Madde Grubu', 'İletken Maddeler', 'Yalıtkan Maddeler'],
            rows: [
              ['Katılar', 'Bakır tel, demir çivi, alüminyum folyo, altın, grafit', 'Plastik, cam, tahta, porselen, kauçuk'],
              ['Sıvılar', 'Tuzlu su, sirkeli su, limon suyu, maden suyu', 'Saf su, şekerli su, alkol, zeytinyağı']
            ]
          },
          examNote: 'Sınav Püf Noktası: Saf su yalıtkandır; ancak içine sofra tuzu atılıp çözündüğünde tuzlu su mükemmel bir iletken hâline gelir!'
        }
      ],
      interactiveBookFlow: [
        {
          id: 'g6-u6-s1-test-devresi',
          pageNumber: 'Sayfa 70',
          type: 'etkinlik_istasyonu',
          title: 'Etkinlik İstasyonu 2: İletkenlik Test Devresi',
          prompt: 'Açık test uçlarına bakır tel, tahta çubuk, tuzlu su ve şekerli su bağlayarak ampulün yanma durumunu test ediniz.',
          resultInfoBox: 'Bakır tel ve tuzlu su devreyi tamamlayarak ampulün ışık vermesini sağlarken tahta çubuk ve şekerli su yalıtkan olduğu için ampul yanmamıştır.'
        }
      ],
      glossary: [
        { term: 'İletken Madde', definition: 'Elektrik enerjisini kolaylıkla ileten madde.' },
        { term: 'Yalıtkan Madde', definition: 'Elektrik enerjisinin iletilmesine izin vermeyen, koruyucu olarak kullanılan madde.' }
      ],
      trueFalseQuestions: [
        { id: 1, text: 'Saf su elektriği çok iyi ileten bir sıvıdır.', isCorrect: false, explanation: 'Yanlıştır. Saf su yalıtkandır; tuzlu su iletkendir.' },
        { id: 2, text: 'Hava normal şartlarda yalıtkan olmasına rağmen şimşek olayında iletken hâle gelebilir.', isCorrect: true, explanation: 'Doğrudur. Yüksek gerilim altında hava iyonlaşarak iletkenleşir.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          questionPrompt: 'Bir test devresinde açıkta kalan test uçları aşağıdaki sıvılara batırıldığında hangisinde ampulün IŞIK VERMESİ beklenir?',
          options: [
            { key: 'A', text: 'Saf su' },
            { key: 'B', text: 'Şekerli su' },
            { key: 'C', text: 'Tuzlu su' },
            { key: 'D', text: 'Zeytinyağı' }
          ],
          correctAnswer: 'C',
          explanation: 'Tuzlu su iyon içerdiği için elektrik akımını iletir ve ampul ışık verir.'
        }
      ]
    },
    {
      id: 'g6-u6-sub2',
      title: '2. Elektriksel Direnç ve Bağlı Olduğu Faktörler (Reosta)',
      shortTitle: 'Elektriksel Direnç & Reosta',
      badge: 'Sayfa 74-91',
      pageRange: '74 - 91',
      concepts: ['Elektriksel Direnç', 'Ohm (Ω)', 'İletkenin Uzunluğu (L)', 'Dik Kesit Alanı (S)', 'İletkenin Cinsi', 'Filaman', 'Reosta', 'George Simon Ohm', 'Edison', 'Tesla'],
      simulationId: 'circuit',
      summarySections: [
        {
          heading: 'Elektriksel Direnç Nedir?',
          paragraphs: [
            'Maddelerin elektrik enerjisinin iletimine karşı gösterdiği zorluğa elektriksel direnç denir. Direnç "R" harfi ile gösterilir, birimi Ohm’dur ve "$\\Omega$" sembolü ile ifade edilir. Alman fizikçi George Simon Ohm’un anısına verilmiştir.',
            'Bir iletkenin direnci üç temel faktöre bağlıdır:',
            '1. İletkenin Uzunluğu (L): İletkenin boyu uzadıkça elektriksel direnci artar. Kısa telin direnci az olduğundan bağlı olduğu devredeki ampul DAHA PARLAK yanar.',
            '2. İletkenin Dik Kesit Alanı / Kalınlığı (S): İletken kalınlaştıkça direnci azalır. Kalın telin direnci azdır, ampul DAHA PARLAK yanar; ince telin direnci fazladır, ampul DAHA SÖNÜK yanar.',
            '3. İletkenin Cinsi: Farklı metallerin dirençleri farklıdır. Örneğin aynı boy ve kalınlıktaki bakır telin direnci demir telden daha azdır; bakır tel kullanılan ampul daha parlak yanar.'
          ],
          table: {
            headers: ['Değişken', 'Uygulama', 'Dirençteki Değişim', 'Ampul Parlaklığı'],
            rows: [
              ['İletken Uzunluğu (L)', 'Telin boyu uzatılırsa (L ➔ 2L)', 'Direnç ARTAR', 'Ampul parlaklığı AZALIR'],
              ['İletken Uzunluğu (L)', 'Telin boyu kısaltılırsa (2L ➔ L)', 'Direnç AZALIR', 'Ampul parlaklığı ARTAR'],
              ['Dik Kesit Alanı (S)', 'Tel kalınlaştırılırsa (S ➔ 2S)', 'Direnç AZALIR', 'Ampul parlaklığı ARTAR'],
              ['Dik Kesit Alanı (S)', 'Tel inceltilirse (2S ➔ S)', 'Direnç ARTAR', 'Ampul parlaklığı AZALIR'],
              ['İletkenin Cinsi', 'Demir yerine Bakır bağlanırsa', 'Direnç AZALIR', 'Ampul parlaklığı ARTAR']
            ]
          },
          examNote: 'Hafıza Şifresi: Aşık Veysel’in "Uzun ince bir yoldayım" şiirini hatırlayınız! Bir tel ne kadar UZUN ve İNCE ise direnci o kadar ÇOKTUR!'
        },
        {
          heading: 'Ampulün İçindeki Filaman ve Reosta (Ayarlanabilir Direnç)',
          paragraphs: [
            '• Akkor Ampul Filamanı: Ampulün içinde ışık veren tel tungsten (volfram) metalinden yapılır. Çok ince ve metrelerce uzunlukta sarmal sarılmıştır. Yüksek direnci sayesinde akkor hâle gelerek ışık saçar.',
            '• Reosta (Ayarlanabilir Direnç): Devredeki direnç miktarını sürgüsü yardımıyla elle değiştirmeye yarayan alettir. Sürgü telin boyunu kısaltacak yöne çekilirse direnç azalır ve ampul parlar; boyunu uzatacak yöne çekilirse direnç artar ve ampul söner. Ütü, dimmer anahtarlar ve radyo ses düğmelerinde kullanılır.'
          ]
        },
        {
          heading: 'Çağını Aşanlar: Elektrik Öncüleri',
          paragraphs: [
            '• Thomas Edison (1847-1931): Yüksek dirençli karbonize bambu filaman kullanarak 1200 saat yanan ilk ticari ampulü üretmiştir.',
            '• Nikola Tesla (1856-1943): Alternatif akım (AC) motorunu ve kablosuz elektrik iletim sistemlerini geliştirmiştir.',
            '• Emin Kalmuk (1869-1954): İstanbul Telefon Tesislerini yönetmiş, telgraf ve kablo haberleşmesinin öncüsü olmuştur.',
            '• Fuat Külünk (1911-1951): İTÜ Yüksek Gerilim Laboratuvarı’nı kurarak ülkemizin elektrik mühendisliğine öncülük etmiştir.'
          ]
        }
      ],
      interactiveBookFlow: [
        {
          id: 'g6-u6-s2-reosta-deney',
          pageNumber: 'Sayfa 86',
          type: 'etkinlik_istasyonu',
          title: 'Etkinlik İstasyonu 9: Reosta ile Ampul Parlaklığı Ayarı',
          prompt: 'Reostanın sürgüsünü 1 ve 2 yönünde hareket ettirerek devredeki direnç ve ampul parlaklığındaki değişimi gözlemleyiniz.',
          resultInfoBox: 'Reosta sürgüsü akımın geçtiği tel uzunluğunu artırdığında direnç artar ve ampul söner; tel uzunluğunu kısalttığında direnç azalır ve ampul daha parlak yanar.'
        }
      ],
      glossary: [
        { term: 'Elektriksel Direnç', definition: 'Maddelerin elektrik akımına karşı koyma derecesi (R, birimi Ohm: Ω).' },
        { term: 'Reosta', definition: 'Devredeki elektrik akımını ve ampul parlaklığını ayarlamak için kullanılan sürgülü değişken direnç.' },
        { term: 'Filaman', definition: 'Ampulün içinde yüksek direnciyle ısınıp ışık saçan ince sarmal tel.' }
      ],
      trueFalseQuestions: [
        { id: 3, text: 'Bir iletken telin uzunluğu arttıkça elektriksel direnci de artar.', isCorrect: true, explanation: 'Doğrudur. Uzunluk ile direnç doğru orantılıdır.' },
        { id: 4, text: 'Bir iletken tel kalınlaştıkça direnci artar ve ampul daha sönük yanar.', isCorrect: false, explanation: 'Yanlıştır. Kalın telin direnci azdır, ampul daha parlak yanar.' },
        { id: 5, text: 'Reosta devredeki direnci değiştirerek ampul parlaklığını ayarlayan bir araçtır.', isCorrect: true, explanation: 'Doğrudur. Değişken dirençtir.' }
      ],
      lgsQuestions: [
        {
          id: 2,
          questionPrompt: 'Özdeş pillerle kurulan iki devrede;\n1. Devre: 20 cm uzunluğunda, S kesitli bakır tel\n2. Devre: 40 cm uzunluğunda, S kesitli bakır tel\n\nkullanılmıştır. Buna göre ampullerin parlaklıkları arasındaki ilişki hangisidir?',
          options: [
            { key: 'A', text: '1. devredeki ampul daha parlak yanar.' },
            { key: 'B', text: '2. devredeki ampul daha parlak yanar.' },
            { key: 'C', text: 'Her iki ampul eşit parlaklıkta yanar.' },
            { key: 'D', text: '2. devredeki ampul hiç ışık vermez.' }
          ],
          correctAnswer: 'A',
          explanation: '1. devredeki tel daha kısa (20 cm) olduğu için elektriksel direnci daha azdır ve ampul daha parlak yanar.'
        }
      ]
    }
  ],
  unitEndQuestions: [
    {
      id: 1,
      pageNumber: '93',
      type: 'multiple_choice',
      title: 'Elektriksel Direnç Birimi',
      questionPrompt: 'Maddelerin elektrik enerjisinin geçişine gösterdiği zorluğa ne ad verilir ve birimi nedir?',
      options: [
        { key: 'A', text: 'Kuvvet — Newton' },
        { key: 'B', text: 'Elektriksel Direnç — Ohm (Ω)' },
        { key: 'C', text: 'Gerilim — Volt' },
        { key: 'D', text: 'Yoğunluk — g/cm³' }
      ],
      correctAnswer: 'B',
      detailedExplanation: 'Maddelerin akıma gösterdiği zorluk elektriksel dirençtir, birimi Ohm’dur (Ω).'
    }
  ],
  unitEnd20Questions: [
    {
      id: 1,
      questionPrompt: 'Aşağıdaki iletken tellerden hangisinin elektriksel direnci EN KÜÇÜKTÜR?',
      options: [
        { key: 'A', text: 'Uzun ve ince bakır tel' },
        { key: 'B', text: 'Kısa ve kalın bakır tel' },
        { key: 'C', text: 'Uzun ve kalın bakır tel' },
        { key: 'D', text: 'Kısa ve ince demir tel' }
      ],
      correctAnswer: 'B',
      explanation: 'Direncin en küçük olması için telin KISA ve KALIN olması gerekir.'
    }
  ]
};

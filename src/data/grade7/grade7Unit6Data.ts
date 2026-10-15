import { Unit } from '../../types/curriculum';

export const grade7Unit6Data: Unit = {
  id: 'g7-unit-6',
  unitNumber: 6,
  bookNumber: 2,
  grade: 7,
  subject: 'Fen Bilimleri',
  title: 'Elektriklenme',
  unitEndPageRange: 's. 123-127',
  colorTheme: {
    primary: 'from-amber-500 to-yellow-600',
    border: 'border-amber-500/40',
    bg: 'bg-amber-950/40',
    accent: 'text-amber-400',
    text: 'text-amber-200'
  },
  subTopics: [
    {
      id: 'g7-u6-sub1',
      title: '1. Elektrik Yükleri ve Elektriklenmenin Teknolojideki Kullanımı',
      shortTitle: 'Elektrik Yükleri & Teknoloji',
      badge: '1. Bölüm',
      pageRange: '105-115',
      concepts: ['Elektriklenme', 'Negatif (-) Yük / Elektron', 'Pozitif (+) Yük / Proton', 'Şimşek ve Yıldırım', 'Sanayide Boyama', 'Elektrostatik Filtre', 'Lazer Yazıcı', 'Benjamin Franklin'],
      simulationId: 'moon-phases',
      summarySections: [
        {
          heading: 'Elektriklenme Olayı ve Yüklerin Hareketi',
          paragraphs: [
            'Günlük yaşantımızda yün kazağımızı çıkarırken duyduğumuz çıtırtılar, plastik kaydıraktan kayarken saçlarımızın havalanması ya da araba kapısına dokunduğumuzda hissettiğimiz elektrik çarpması elektriklenme olayının günlük yaşamdaki örnekleridir.',
            'Elektriklenme, cisimlerin sahip olduğu negatif (-) yüklü parçacıkların yani elektronların yer değiştirmesi ile gerçekleşir. Çekirdekteki protonlar (+) hareket etmez; yalnızca elektronlar (-) bir cisimden diğerine geçebilir.',
            'Hava akımının etkisiyle gökyüzünde hareket eden bulutlar sürtünme yoluyla elektriklenir. Yüklü bulutlar arasında gerçekleşen elektrik boşalmasına şimşek, bulut ile yeryüzü arasındaki elektrik aktarımına ise yıldırım denir.'
          ],
          keyPoints: [
            'Protonlar (+): Çekirdekte sabittir, elektriklenmede aktarılmaz.',
            'Elektronlar (-): Katmanlarda hareketlidir, sürtünme veya dokunma ile bir cisimden diğerine geçerek elektriklenmeyi sağlar.',
            'Şimşek: Bulut ile bulut arasındaki yük akışıdır.',
            'Yıldırım: Bulut ile yeryüzü arasındaki güçlü yük boşalmasıdır.'
          ]
        },
        {
          heading: 'Elektriklenmenin Teknolojideki ve Sanayideki Kullanım Alanları',
          paragraphs: [
            'Elektrik yüklerinin birbirine uyguladığı itme ve çekme kuvvetinden yararlanılarak hayatımızı kolaylaştıran pek çok modern teknoloji geliştirilmiştir:'
          ],
          table: {
            headers: ['Teknolojik Uygulama', 'Kullanılan Prensip', 'Sağlanan Yarar'],
            rows: [
              ['Sanayide Otomobil ve Beyaz Eşya Boyama', 'Boya damlacıkları (+) ile, boyanacak yüzey (-) ile yüklenir.', 'Boya zerrecikleri yüzeye eşit dağılır, hiç boşluk kalmaz ve boya israfı önlenir.'],
              ['Elektrostatik Baca Filtreleri', 'Filtreler elektrik yüküyle yüklenir.', 'Fabrika bacalarından çıkan duman, kül, yağ ve is partikülleri filtreye çekilerek hava temiz kalır.'],
              ['Fotokopi ve Lazer Yazıcılar', 'Yazıcı tamburu lazerle elektriksel olarak yüklenir.', 'Zıt yüklü toner tozu kağıda kusursuzca yapışır ve ısı ile sabitlenir.'],
              ['Klimalar ve Hava Temizleyiciler', 'Havadaki toz ve polenler elektriklenerek filtrelere çekilir.', 'Ortam havası sigara dumanı ve alerjenlerden arındırılır.'],
              ['Parmak İzi Çıkarma', 'Olay yeri incelemede kriminal tozlar kullanılır.', 'Toz tanecikleri parmak izindeki yağ tabakasına elektrostatik çekimle tutunur.'],
              ['Toz Torbalı Süpürgeler', 'Süpürge torbası sürtünmeyle yüklenir.', 'Çekilen ince tozların torbada sıkıca tutunması sağlanır.']
            ]
          }
        },
        {
          heading: 'Tarihe Not Düşenler: Benjamin Franklin (1706-1790)',
          paragraphs: [
            'Elektrik alanında devrim niteliğinde deneyler yapan Franklin, meşhur uçurtma deneyi ile yıldırımın bir elektrik olayı olduğunu ispatlamıştır. Pozitif ve negatif elektrik yükü terimlerini bilim dünyasına kazandırmış ve binaları yıldırımdan koruyan paratoneri (yıldırımsavar) icat etmiştir.'
          ]
        }
      ],
      trueFalseQuestions: [
        {
          id: 1,
          text: 'Elektriklenme olayında cisimler arasında protonlar serbestçe yer değiştirir.',
          isCorrect: false,
          explanation: 'Yanlıştır. Protonlar çekirdekte bağlıdır; elektriklenmede sadece negatif yüklü elektronlar yer değiştirir.'
        },
        {
          id: 2,
          text: 'Fabrika bacalarında kullanılan elektrostatik filtreler duman ve is partiküllerini çekerek çevre kirliliğini önler.',
          isCorrect: true,
          explanation: 'Doğrudur. Filtreler elektrostatik çekim kuvveti ile partikülleri tutarak havayı temizler.'
        },
        {
          id: 3,
          text: 'Otomobil boyamada araba ve sprey boya aynı elektrik yüküyle yüklenerek boyanır.',
          isCorrect: false,
          explanation: 'Yanlıştır. Boya ve araba zıt yüklerle yüklenir ki birbirlerini güçlüce çeksinler ve boya yüzeye pürüzsüz yapışsın.'
        }
      ],
      lgsQuestions: [
        {
          id: 1,
          questionPrompt: 'Beyaz eşya fabrikasında çalışan Gökalp Bey, buzdolabını negatif (-) yükle yüklerken sprey boyayı pozitif (+) yükle yükleyerek boyama yapmış ve boyanın yüzeye pürüzsüz dağıldığını görmüştür. Başka bir usta ise arabayı da boyayı da pozitif (+) yükle yüklediğinde boyanın tutunamadığını fark etmiştir.\n\nBu deneyden çıkarılabilecek EN DOĞRU sonuç aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Aynı elektrik yükleri birbirini ittiği için boya yüzeye tutunamaz; zıt yükler birbirini çekerek boyanın kusursuz tutunmasını sağlar.' },
            { key: 'B', text: 'Cisimler sadece nötr olduğunda boya tutunabilir.' },
            { key: 'C', text: 'Negatif yükler pozitif yüklerden daha güçlü çekim uygular.' },
            { key: 'D', text: 'Elektriklenme boya kalitesini olumsuz etkiler.' }
          ],
          correctAnswer: 'A',
          explanation: 'Zıt yükler birbirini çeker; bu sayede buzdolabı (-) ve boya (+) birbirini çekerek eşit dağılır. Aynı yükler (+) ve (+) birbirini ittiği için boya araba yüzeyine tutunamaz.'
        }
      ]
    },
    {
      id: 'g7-u6-sub2',
      title: '2. Elektriklenme Çeşitleri ve Elektroskop',
      shortTitle: 'Elektriklenme Çeşitleri & Elektroskop',
      badge: '2. Bölüm',
      pageRange: '116-122',
      concepts: ['Pozitif Yüklü Cisim', 'Negatif Yüklü Cisim', 'Nötr Cisim', 'Sürtünme ile Elektriklenme', 'Dokunma ile Elektriklenme', 'Etki ile Elektriklenme', 'Elektroskop'],
      simulationId: 'moon-phases',
      summarySections: [
        {
          heading: 'Cisimlerin Yük Durumları',
          paragraphs: [
            'Cisimler içerdikleri proton ve elektron sayısına göre üç grupta incelenir:'
          ],
          keyPoints: [
            'Pozitif Yüklü Cisim: Pozitif yük (proton) sayısı negatif yük (elektron) sayısından fazla olan cisimdir (+ > -).',
            'Negatif Yüklü Cisim: Negatif yük (elektron) sayısı pozitif yük sayısından fazla olan cisimdir (- > +).',
            'Nötr Cisim: Pozitif yük sayısı negatif yük sayısına eşit olan cisimdir (+ = -). Nötr cisim kesinlikle "yüksüz" demek değildir; eşit sayıda pozitif ve negatif yüke sahiptir.'
          ]
        },
        {
          heading: 'Elektriklenme Çeşitleri: Temaslı ve Temassız',
          paragraphs: [
            '1. Sürtünme ile Elektriklenme (Temaslı): İki nötr yalıtkan birbirine sürtüldüğünde biri elektron kaybeder, diğeri kazanır. Sürtünen cisimler eşit miktarda ve ZIT CİNS elektrik yüküyle yüklenir.',
            '• Plastik (Ebonit) Çubuk + Yün Kumaş: Yün kumaştan plastik çubuğa elektron geçer. Plastik çubuk (-) yüklenir, yün kumaş (+) yüklenir.',
            '• Cam Çubuk + İpek Kumaş: Cam çubuktan ipek kumaşa elektron geçer. Cam çubuk (+) yüklenir, ipek kumaş (-) yüklenir.',
            '2. Dokunma ile Elektriklenme (Temaslı): Yüklü bir cisim nötr veya yüklü bir cisme dokundurulduğunda elektron alışverişi olur. Toplam yük cisimlerin boyutlarına göre paylaşılır. Son durumda iki cisim de KESİNLİKLE AYNI CİNS yükle yüklenir (ikisi de +, ikisi de - veya ikisi de nötr).',
            '3. Etki (Tesir) ile Elektriklenme (Temassız): Yüklü bir cisim nötr iletken bir cisme dokundurulmadan yaklaştırıldığında temas olmadan yükler kutuplanır. Yakın uca zıt yükler çekilir, uzak uca aynı yükler itilir.'
          ],
          table: {
            headers: ['Elektriklenme Türü', 'Temas Durumu', 'Son Yük Durumu', 'Örnek'],
            rows: [
              ['Sürtünme ile', 'Temas gerektirir', 'Cisimler ZIT yükle yüklenir', 'Ebonit çubuk (-) / Yün kumaş (+)'],
              ['Dokunma ile', 'Temas gerektirir', 'Cisimler AYNI cins yükle yüklenir', 'Pozitif küreye dokunan iletken çubuk (+) olur'],
              ['Etki (Tesir) ile', 'Temas gerektirmez', 'Yükler geçici olarak kutuplanır', 'Negatif çubuğun yaklaştırıldığı nötr kürede uçların kutuplanması']
            ]
          }
        },
        {
          heading: 'Elektroskop Nedir?',
          paragraphs: [
            'Bir cismin elektrik yükü ile yüklü olup olmadığını, yüklü ise yükünün cinsini tespit etmeye yarayan hassas alete elektroskop denir. Metal topuz, iletken gövde, açılıp kapanabilen hafif metal yapraklar ve yalıtkan cam fanustan oluşur.',
            'Elektroskop nötr iken yaprakları tamamen kapalıdır. Yüklendiğinde yapraklar aynı cins yükle dolduğu için birbirini iter ve yapraklar açılır. Yaprakların açılma miktarı cismin yük miktarıyla doğru orantılıdır.'
          ]
        },
        {
          heading: 'İz Bırakanlar: Gilbert, Faraday ve Tesla',
          paragraphs: [
            'Elektrik alanındaki temel prensipleri keşfeden tarihin büyük bilim insanları:'
          ],
          keyPoints: [
            'William Gilbert (1540-1603): "Versorium" cihazını geliştirmiş, kükürt ve camın da elektrik alabildiğini keşfetmiştir.',
            'Michael Faraday (1791-1867): Faraday Kafesi’ni tasarlamıştır. Metal kafes içindeki canlıları dışarıdaki yüksek elektrik boşalmalarından (yıldırım gibi) korur. Uçakların ve otomobillerin metal gövdesi Faraday kafesi görevi görür.',
            'Nikola Tesla (1856-1943): Alternatif akım ve kablosuz elektrik iletiminin öncüsüdür. Tesla bobini ile yüksek voltajlı elektriğin kablosuz taşınabileceğini göstermiştir.'
          ]
        }
      ],
      trueFalseQuestions: [
        {
          id: 4,
          text: 'Nötr bir cisim içerisinde hiçbir elektrik yükü bulunmayan cisim demektir.',
          isCorrect: false,
          explanation: 'Yanlıştır. Nötr cisim pozitif ve negatif yük sayıları birbirine eşit olan cisimdir.'
        },
        {
          id: 5,
          text: 'Dokunma ile elektriklenen iki iletken cisim işlem sonucunda daima aynı cins elektrik yükü ile yüklenir.',
          isCorrect: true,
          explanation: 'Doğrudur. Dokunma ile elektriklenmede toplam yük paylaşılır ve her iki cisim de aynı cins yükle yüklenir.'
        },
        {
          id: 6,
          text: 'Uçaklara yıldırım çarptığında içerideki yolcuların zarar görmemesi metal gövdenin Faraday Kafesi görevi görmesindendir.',
          isCorrect: true,
          explanation: 'Doğrudur. Metal gövde elektrik yükünü dış yüzeyde tutarak kabin içine geçmesini engeller (Faraday Kafesi prensibi).'
        }
      ],
      lgsQuestions: [
        {
          id: 2,
          questionPrompt: 'Nötr ve birbirine temas eden iletken X, Y ve Z kürelerine, sol taraftan negatif (-) yüklü bir plastik çubuk dokundurulmadan yaklaştırılıyor. Çubuk uzaklaştırılmadan küreler yalıtkan ayaklarından tutularak birbirinden ayrılıyor.\n\nBuna göre X, Y ve Z kürelerinin son yük işaretleri sırasıyla hangi seçenekte doğru verilmiştir?',
          options: [
            { key: 'A', text: 'X: (+), Y: (Nötr), Z: (-)' },
            { key: 'B', text: 'X: (-), Y: (Nötr), Z: (+)' },
            { key: 'C', text: 'X: (+), Y: (+), Z: (-)' },
            { key: 'D', text: 'X: (-), Y: (-), Z: (-)' }
          ],
          correctAnswer: 'A',
          explanation: 'Negatif (-) çubuk kürelerdeki elektronları en uzak noktaya (Z küresine) iter. Çubuğa en yakın olan X küresinde pozitif (+) yük fazlalığı kalır. Ortadaki Y küresi nötr kalır. Küreler ayrıldığında X (+), Y (nötr), Z (-) olur.'
        }
      ]
    }
  ],
  unitEndQuestions: [
    {
      id: 1,
      pageNumber: '123',
      type: 'multiple_choice',
      title: 'Elektroskop',
      questionPrompt: 'Cisimlerin elektrik yüklü olup olmadığını ve yükünün cinsini anlamaya yarayan alet hangisidir?',
      options: [
        { key: 'A', text: 'Dinamometre' },
        { key: 'B', text: 'Termometre' },
        { key: 'C', text: 'Elektroskop' },
        { key: 'D', text: 'Barometre' }
      ],
      correctAnswer: 'C',
      detailedExplanation: 'Elektroskop, cisimlerin elektriksel yük durumunu ve cinsini belirlemeye yarayan alettir.'
    },
    {
      id: 2,
      pageNumber: '124',
      type: 'multiple_choice',
      title: 'Sürtünme ile Elektriklenme',
      questionPrompt: 'Plastik (ebonit) çubuk yün kumaşa sürtüldüğünde çubuğun ve kumaşın yük durumları ne olur?',
      options: [
        { key: 'A', text: 'Çubuk: (-), Kumaş: (+)' },
        { key: 'B', text: 'Çubuk: (+), Kumaş: (-)' },
        { key: 'C', text: 'Her ikisi de (+)' },
        { key: 'D', text: 'Her ikisi de (-)' }
      ],
      correctAnswer: 'A',
      detailedExplanation: 'Yün kumaştan plastik çubuğa elektron geçer; çubuk (-) negatif, yün kumaş (+) pozitif yüklenir.'
    }
  ],
  unitEnd20Questions: [
    {
      id: 1,
      questionPrompt: 'Elektriklenmeyle ilgili;\nI. Sürtünme ile elektriklenmede cisimler zıt yükle yüklenir.\nII. Dokunma ile elektriklenmede toplam yük korunur.\nIII. Etki ile elektriklenmede cisimler arasında temas gerçekleşmez.\n\nifadelerinden hangileri doğrudur?',
      options: [
        { key: 'A', text: 'Yalnız I' },
        { key: 'B', text: 'I ve II' },
        { key: 'C', text: 'II ve III' },
        { key: 'D', text: 'I, II ve III' }
      ],
      correctAnswer: 'D',
      explanation: 'Verilen üç ifade de elektriklenme kanunlarına göre tamamen doğrudur.'
    },
    {
      id: 2,
      questionPrompt: 'Yıldırımın binalara ve insanlara zarar vermesini önlemek amacıyla yüksek binaların tepesine yerleştirilen aygıt hangisidir?',
      options: [
        { key: 'A', text: 'Elektroskop' },
        { key: 'B', text: 'Paratoner' },
        { key: 'C', text: 'Dinamometre' },
        { key: 'D', text: 'Sigorta' }
      ],
      correctAnswer: 'B',
      explanation: 'Benjamin Franklin tarafından geliştirilen paratoner yıldırımın elektriğini güvenle toprağa iletir.'
    }
  ]
};

import { Unit } from '../../types/curriculum';
import { odsgmGrade6Unit1Questions } from './odsgmQuestions';

export const grade6Unit1Data: Unit = {
  id: 'g6-unit-1',
  unitNumber: 1,
  bookNumber: 1,
  grade: 6,
  subject: 'Fen Bilimleri',
  title: 'Güneş Sistemi ve Tutulmalar',
  unitEndPageRange: 's. 38-43',
  colorTheme: {
    primary: 'from-amber-600 to-yellow-600',
    border: 'border-amber-500/40',
    bg: 'bg-amber-950/40',
    accent: 'text-amber-400',
    text: 'text-amber-200'
  },
  subTopics: [
    {
      id: 'g6-u1-sub1',
      title: '1. Güneş Sistemi (Gezegenler, Asteroit Kuşağı ve Meteorlar)',
      shortTitle: 'Güneş Sistemi & Gezegenler',
      badge: 'Sayfa 18-28',
      pageRange: '18 - 28',
      concepts: ['Güneş Sistemi', 'İç (Karasal) Gezegenler', 'Dış (Gazsal) Gezegenler', 'Asteroit Kuşağı', 'Gök Taşı', 'Meteor', 'Meteorit', 'Meteor Çukuru', 'Biruni'],
      simulationId: 'moon-phases',
      summarySections: [
        {
          heading: 'Güneş Sistemi ve Gezegenlerin Düzeni',
          paragraphs: [
            'Güneş ve onun çekim etkisi altında yörüngelerinde dolanan sekiz gezegen, cüce gezegenler, uydular, asteroitler, meteorlar ve kuyruklu yıldızların oluşturduğu muazzam nizamlı sisteme Güneş Sistemi denir.',
            'Gezegenler Güneş’e olan uzaklıklarına göre yakından uzağa doğru şu şekilde sıralanır: 1. Merkür, 2. Venüs, 3. Dünya, 4. Mars, 5. Jüpiter, 6. Satürn, 7. Uranüs, 8. Neptün.',
            'Hacimsel (büyüklük) sıralamasına göre ise büyükten küçüğe: Jüpiter > Satürn > Uranüs > Neptün > Dünya > Venüs > Mars > Merkür şeklindedir.'
          ],
          keyPoints: [
            'İç (Karasal) Gezegenler: Merkür, Venüs, Dünya ve Mars. Yoğunlukları fazla, yüzeyleri kayalık ve katıdır. Hiçbirinin halkası yoktur.',
            'Dış (Gazsal) Gezegenler: Jüpiter, Satürn, Uranüs ve Neptün. Dev gaz ve buz küreleridir. Tamamının halkası ve çok sayıda uydusu vardır.',
            'En büyük gezegen Jüpiter, en küçük gezegen Merkür’dür.',
            'Venüs kalın karbondioksit atmosferinin oluşturduğu sera etkisi nedeniyle Güneş Sistemi’nin en sıcak gezegenidir (~460 °C).',
            'Mars, yüzeyindeki demir oksit (pas) nedeniyle Kızıl Gezegen olarak adlandırılır.'
          ],
          table: {
            headers: ['Özellik', 'İç (Karasal) Gezegenler', 'Dış (Gazsal) Gezegenler'],
            rows: [
              ['Gezegenler', 'Merkür, Venüs, Dünya, Mars', 'Jüpiter, Satürn, Uranüs, Neptün'],
              ['Yapı', 'Kayaç ve metal, katı yüzey', 'Aşırı yoğun gaz ve buz tabakaları'],
              ['Halka', 'Kesinlikle halkaları yoktur', 'Hepsinde halka bulunur (en belirgini Satürn’dür)'],
              ['Uydu Sayısı', 'Merkür ve Venüs’te yok; Dünya’da 1, Mars’ta 2', 'Çok sayıdadır (onlarca uydu)'],
              ['Güneş’e Uzaklık', 'Güneş’e yakın konumdadır', 'Güneş’e daha uzaktadır']
            ]
          },
          examNote: 'Sınav Püf Noktası: Güneş’e en yakın gezegen Merkür olmasına rağmen en sıcak gezegen Venüs’tür! Merkür ve Venüs’ün doğal uydusu ve halkası kesinlikle yoktur.'
        },
        {
          heading: 'Asteroit Kuşağı, Meteor ve Meteorit',
          paragraphs: [
            'Mars ile Jüpiter gezegenlerinin yörüngeleri arasında milyonlarca irili ufaklı kaya ve metal parçalarından oluşan Asteroit Kuşağı yer alır. Bu kuşak karasal gezegenler ile gazsal gezegenler arasında doğal bir sınır oluşturur.',
            'Gök Taşı: Asteroitlerden koparak uzayda serbestçe dolaşan kaya parçalarıdır.',
            'Meteor: Dünya atmosferine girerek sürtünme nedeniyle ısınıp akkor hâle gelen ve gökyüzünde parlak bir çizgi oluşturan gök taşlarıdır (halk arasında yıldız kayması denir).',
            'Meteorit: Atmosferden geçerken tamamen yanmayıp yeryüzüne ulaşabilen gök taşı parçasıdır. Yere çarptığında açtığı çukura meteor çukuru denir (Örn: 30 Ekim 1989 Sivas Yıldızeli meteoriti).'
          ]
        },
        {
          heading: 'Bilgi İstasyonu: Biruni’nin Astronomi Dehası',
          paragraphs: [
            'Büyük Türk-İslam bilgini Biruni (973-1048), Güneş merkezli bir sistemin matematiksel olarak olanaklı olabileceğini Batı’dan asırlar önce öngörmüştür. Hindistan’da geniş bir ovaya hâkim yüksek bir dağa çıkarak ufuk alçalma açısıyla Dünya’nın çevresini hesaplamıştır.'
          ],
          scientistBox: {
            name: 'Biruni (973 - 1048)',
            role: 'Büyük Astronom ve Matematikçi',
            contribution: 'Yer kürenin çevresini trigonometrik yöntemle yüksek doğrulukla hesaplamış ve Güneş merkezli sistem teorisine öncülük etmiştir.'
          }
        }
      ],
      interactiveBookFlow: [
        {
          id: 'g6-u1-s1-ondeg',
          pageNumber: 'Sayfa 16-17',
          type: 'on_degerlendirme',
          title: 'Ön Değerlendirme İstasyonu: Güneş, Dünya ve Ay',
          badge: 'Ön Değerlendirme',
          evaluationQuestions: [
            {
              question: 'Güneş, Dünya ve Ay arasında hacimce en büyük ve en küçük gök cisimleri hangileridir?',
              answer: 'Hacimce en büyük olan Güneş, en küçük olan ise Ay’dır. Dünya orta büyüklüktedir.'
            },
            {
              question: 'Güneş ve Dünya hangi yönde döner?',
              answer: 'Güneş de Dünya da kendi ekseni etrafında batıdan doğuya (saat yönünün tersine) döner.'
            }
          ]
        },
        {
          id: 'g6-u1-s1-hazirlik',
          pageNumber: 'Sayfa 18',
          type: 'hazirlik_istasyonu',
          title: 'Hazırlık İstasyonu: Gezegenleri Sınıflandıralım',
          prompt: 'Güneş sisteminde bulunan 8 gezegeni Güneş’e olan yakınlıklarına ve yapısal özelliklerine göre nasıl gruplandırabilirsiniz?',
          interactiveAnswer: 'Gezegenler Güneş’e yakınlıklarına göre 4 iç (karasal) gezegen (Merkür, Venüs, Dünya, Mars) ve 4 dış (gazsal) gezegen (Jüpiter, Satürn, Uranüs, Neptün) olarak ikiye ayrılır.'
        },
        {
          id: 'g6-u1-s1-etkinlik',
          pageNumber: 'Sayfa 21',
          type: 'etkinlik_istasyonu',
          title: 'Etkinlik İstasyonu 1: Gezegenlerin Nitelikleri',
          prompt: 'Güneş sistemi posterini inceleyerek gezegenlerin büyüklük, halka ve yapısal özelliklerini belirleyiniz.',
          resultInfoBox: 'İç gezegenlerin yüzeyi katı kayaçlardan oluşurken, dış gezegenler devasa gaz tabakalarından oluşur. Dış gezegenlerin hepsinde halka ve çok sayıda uydu bulunur.'
        },
        {
          id: 'g6-u1-s1-kopru',
          pageNumber: 'Sayfa 25',
          type: 'kopru_istasyonu',
          title: 'Köprü İstasyonu: Sivas Yıldızeli Meteoriti',
          prompt: '30 Ekim 1989’da Sivas Yıldızeli’ne düşen gök taşı 80 cm genişliğinde çukur açmış ve 15 km mesafeden top patlaması gibi duyulmuştur.',
          interactiveAnswer: 'Atmosferde sürtünmeyle yanarak tükenmeyen gök taşları yeryüzüne ulaştığında meteorit adını alır ve yüzeyde krater/meteor çukurları oluşturur.'
        }
      ],
      glossary: [
        { term: 'Asteroit Kuşağı', definition: 'Mars ile Jüpiter yörüngeleri arasında dolanan devasa kaya ve metal kalıntılarından oluşan kuşak.' },
        { term: 'Meteor', definition: 'Dünya atmosferine girerek sürtünmeyle akkor hâle gelen ve ışıklı iz bırakan gök taşı (yıldız kayması).' },
        { term: 'Meteorit', definition: 'Atmosferde tamamen erimeyip yeryüzüne düşen gök taşı parçası.' },
        { term: 'Karasal (İç) Gezegenler', definition: 'Merkür, Venüs, Dünya ve Mars’tan oluşan, katı kayaç kabuklu, halkasız gezegenler.' },
        { term: 'Gazsal (Dış) Gezegenler', definition: 'Jüpiter, Satürn, Uranüs ve Neptün’den oluşan dev gaz küresi gezegenler.' }
      ],
      trueFalseQuestions: [
        { id: 1, text: 'Güneş sistemindeki iç gezegenlerin hiçbirinin etrafında halka bulunmaz.', isCorrect: true, explanation: 'Doğrudur. Karasal iç gezegenlerin (Merkür, Venüs, Dünya, Mars) halkası yoktur.' },
        { id: 2, text: 'Güneş’e en yakın gezegen Merkür olduğu için Güneş sisteminin en sıcak gezegenidir.', isCorrect: false, explanation: 'Yanlıştır. En sıcak gezegen sera etkisinden dolayı Venüs’tür (~460 °C).' },
        { id: 3, text: 'Asteroit Kuşağı, Mars ile Jüpiter gezegenleri arasında bulunur.', isCorrect: true, explanation: 'Doğrudur. Mars ile Jüpiter arasında asteroit kuşağı yer alır.' },
        { id: 4, text: 'Jüpiter Güneş sisteminin en büyük gezegenidir.', isCorrect: true, explanation: 'Doğrudur. Jüpiter hacimsel olarak en büyük gezegendir.' },
        { id: 5, text: 'Yeryüzüne ulaşmayı başaran gök taşı parçalarına meteorit adı verilir.', isCorrect: true, explanation: 'Doğrudur. Yere ulaşan gök taşı meteorittir.' },
        { id: 6, text: 'Dış gezegenlerin tamamı katı ve taşlık bir yüzeye sahiptir.', isCorrect: false, explanation: 'Yanlıştır. Dış gezegenler gazsal yapıdadır.' },
        { id: 7, text: 'Merkür ve Venüs’ün doğal uyduları bulunmaz.', isCorrect: true, explanation: 'Doğrudur. Güneş sisteminde uydusu olmayan gezegenler Merkür ve Venüs’tür.' },
        { id: 8, text: 'Kızıl Gezegen olarak adlandırılan gezegen Mars’tır.', isCorrect: true, explanation: 'Doğrudur. Yüzeyindeki demir oksit kızıla boyar.' },
        { id: 9, text: 'Halkaları en belirgin olan gaz devi gezegen Satürn’dür.', isCorrect: true, explanation: 'Doğrudur. Satürn muhteşem buz ve toz halkalarıyla bilinir.' },
        { id: 10, text: 'Neptün Güneş sisteminde Güneş’e en yakın gezegendir.', isCorrect: false, explanation: 'Yanlıştır. Neptün Güneş’e en uzak 8. gezegendir.' }
      ],
      lgsQuestions: [
        ...odsgmGrade6Unit1Questions.filter(q => q.subTopicId === 'g6-u1-sub1'),
        {
          id: 1,
          questionPrompt: 'Fen bilimleri öğretmeni sınıfa getirdiği toplarla gezegenleri modellemek istiyor. Pinpon topu, tenis topu, futbol topu ve basketbol topunu karasal gezegenlerin hacimsel büyüklüklerine göre eşleştirmek isteyen öğrenci hangi sıralamayı yapmalıdır?',
          options: [
            { key: 'A', text: 'Merkür - Mars - Venüs - Dünya' },
            { key: 'B', text: 'Venüs - Mars - Merkür - Dünya' },
            { key: 'C', text: 'Merkür - Venüs - Mars - Dünya' },
            { key: 'D', text: 'Dünya - Venüs - Mars - Merkür' }
          ],
          correctAnswer: 'A',
          explanation: 'Karasal gezegenlerin küçükten büyüğe sıralaması Merkür (en küçük) < Mars < Venüs < Dünya (en büyük) şeklindedir.'
        },
        {
          id: 2,
          questionPrompt: 'Asteroit Kuşağı ile ilgili olarak;\nI. Mars ile Jüpiter gezegenlerinin yörüngeleri arasındadır.\nII. İç gezegenler ile dış gezegenleri birbirinden ayırır.\nIII. Kuşaktaki gök taşlarının tamamı Dünya’ya düşerek meteor çukuru açar.\n\nyargılarından hangileri doğrudur?',
          options: [
            { key: 'A', text: 'I ve II' },
            { key: 'B', text: 'I ve III' },
            { key: 'C', text: 'II ve III' },
            { key: 'D', text: 'I, II ve III' }
          ],
          correctAnswer: 'A',
          explanation: 'Asteroit kuşağı Mars ve Jüpiter arasındadır (I ve II). Kuşaktaki taşların çok az bir kısmı yörüngeden çıkar ve çoğu atmosferde erir (III yanlıştır).'
        }
      ]
    },
    {
      id: 'g6-u1-sub2',
      title: '2. Güneş ve Ay Tutulmaları (Gözlem, Özellikler ve Modeller)',
      shortTitle: 'Güneş ve Ay Tutulmaları',
      badge: 'Sayfa 29-37',
      pageRange: '29 - 37',
      concepts: ['Güneş Tutulması', 'Ay Tutulması', 'Yeniay Evresi', 'Dolunay Evresi', 'Tam Gölge', 'Yörünge Eğikliği (5°)', 'Filtreli Gözlük', 'Bettânî', 'Zerkâle', 'Takıyyüddin', 'Dilhan Eryurt'],
      simulationId: 'moon-phases',
      summarySections: [
        {
          heading: 'Güneş Tutulması Nedir ve Nasıl Gerçekleşir?',
          paragraphs: [
            'Ay, Dünya etrafında dolanırken Güneş ile Dünya arasına girdiğinde Güneş ışınlarının Dünya’nın belirli bir bölgesine ulaşmasını engeller. Bu doğa olayına Güneş Tutulması denir.',
            'Sıralama: GÜNEŞ — AY — DÜNYA şeklindedir. Ay bu sırada YENİAY evresindedir.',
            'Güneş tutulması gündüz vaktinde, Dünya üzerinde Ay’ın tam gölgesinin düştüğü dar bir şerit üzerinde birkaç dakika süreyle gözlemlenir. Doğrudan çıplak gözle bakmak retinanıza ciddi zarar verir; mutlaka özel koruyucu filtreli gözlük kullanılmalıdır.'
          ]
        },
        {
          heading: 'Ay Tutulması Nedir ve Nasıl Gerçekleşir?',
          paragraphs: [
            'Dünya, Güneş ile Ay arasına girdiğinde Dünya’nın devasa gölgesi Ay’ın üzerine düşer ve Ay karanlıkta kalır. Bu olaya Ay Tutulması denir.',
            'Sıralama: GÜNEŞ — DÜNYA — AY şeklindedir. Ay bu sırada DOLUNAY evresindedir.',
            'Ay tutulması gece vaktinde, Dünya’nın geceyi yaşayan tüm yarım küresinde çıplak gözle saatlerce güvenle izlenebilir.'
          ],
          table: {
            headers: ['Karşılaştırma Ölçütü', 'Güneş Tutulması', 'Ay Tutulması'],
            rows: [
              ['Gök Cisimleri Dizilişi', 'Güneş — AY — Dünya', 'Güneş — DÜNYA — Ay'],
              ['Ay’ın Evresi', 'YENİAY evresinde gerçekleşir', 'DOLUNAY evresinde gerçekleşir'],
              ['Ortadaki Gök Cismi', 'AY (Dünya’ya gölge düşürür)', 'DÜNYA (Ay’a gölge düşürür)'],
              ['Gözlemlendiği Zaman', 'Gündüz', 'Gece'],
              ['Görüldüğü Alan', 'Dünya’da çok DAR bir şerit', 'Dünya’nın geceyi yaşayan GENİŞ yarım küresi'],
              ['Süresi', 'Çok kısa (birkaç dakika)', 'Uzun (birkaç saat sürebilir)'],
              ['Gözlem Güvenliği', 'Özel filtreli gözlük ZORUNLUDUR', 'Çıplak gözle doğrudan izlenebilir']
            ]
          },
          examNote: 'Sınav Püf Noktası: Neden her ay tutulma olmaz? Çünkü Ay’ın dolanma yörüngesi ile Dünya’nın dolanma yörüngesi arasında yaklaşık 5 derecelik bir açı farkı vardır!'
        },
        {
          heading: 'Çağını Aşanlar: Astronomi Öncüleri',
          paragraphs: [
            '• Bettânî (855-929): Güneş tutulmasının halkalı olabileceğini hesaplamış; bir Güneş yılını 365 gün 5 saat 46 dakika 24 saniye olarak olağanüstü dakiklikle bulmuştur.',
            '• Zerkâle (1029-1100): Endülüs’te gezegenlerin eliptik yörüngeleri üzerine çalışmalar yapmış, Toledo tablolarını oluşturmuştur.',
            '• Takıyyüddin (1521-1585): İstanbul Rasathanesi’ni kurmuş, hassas mekanik saatleri astronomik gözlem aracı olarak ilk kez kullanmıştır.',
            '• Dilhan Eryurt (1926-2012): NASA’da çalışan ilk Türk kadın astrofizikçi olup Güneş’in evrimi üzerine çığır açıcı modeller geliştirmiş ve Apollo Başarı Ödülü almıştır.'
          ]
        }
      ],
      interactiveBookFlow: [
        {
          id: 'g6-u1-s2-hazirlik',
          pageNumber: 'Sayfa 30',
          type: 'hazirlik_istasyonu',
          title: 'Hazırlık İstasyonu: Güneş ve Ay Tutulması',
          prompt: 'Güneş tutulması ile Ay tutulması arasındaki temel farklar nelerdir?',
          interactiveAnswer: 'Güneş tutulmasında Ay ortadadır ve gündüz dar bir alanda gözlenir. Ay tutulmasında Dünya ortadadır ve gece geniş bir alanda gözlenir.'
        },
        {
          id: 'g6-u1-s2-cenk-ayperi',
          pageNumber: 'Sayfa 37',
          type: 'pekistirme_istasyonu',
          title: 'Pekiştirme İstasyonu 7: Cenk ve Ayperi’nin Modelleri',
          prompt: 'Cenk: Lamba — Tenis Topu — Plaj Topu düzeni kurmuştur. Ayperi: Lamba — Plaj Topu — Tenis Topu düzeni kurmuştur. Modelleri yorumlayınız.',
          interactiveAnswer: 'Cenk Güneş tutulmasını (Lamba: Güneş, Tenis topu: Ay, Plaj topu: Dünya) modellemiştir. Ayperi ise Ay tutulmasını (Plaj topu: Dünya ortada) modellemiştir.'
        }
      ],
      glossary: [
        { term: 'Güneş Tutulması', definition: 'Ay’ın Güneş ile Dünya arasına girerek Güneş’in ışığını kesmesi olayı (Güneş - Ay - Dünya).' },
        { term: 'Ay Tutulması', definition: 'Dünya’nın Güneş ile Ay arasına girerek Ay üzerine tam gölge düşürmesi olayı (Güneş - Dünya - Ay).' },
        { term: 'Yörünge Eğikliği', definition: 'Dünya ve Ay yörünge düzlemleri arasındaki 5 derecelik açı; her ay tutulma olmasını engeller.' }
      ],
      trueFalseQuestions: [
        { id: 11, text: 'Güneş tutulması sırasında Ay, Dünya ile Güneş arasındadır.', isCorrect: true, explanation: 'Doğrudur. Güneş - Ay - Dünya sıralaması vardır.' },
        { id: 12, text: 'Ay tutulması Ay’ın yeniay evresinde meydana gelir.', isCorrect: false, explanation: 'Yanlıştır. Ay tutulması dolunay evresinde gerçekleşir.' },
        { id: 13, text: 'Ay’ın yörünge düzlemi ile Dünya’nın yörünge düzlemi arasındaki 5° açı farkı her ay tutulma olmasını engeller.', isCorrect: true, explanation: 'Doğrudur. Yörünge eğikliği nedeniyle her ay aynı doğrultuya gelemezler.' },
        { id: 14, text: 'Güneş tutulması gece yaşanan bölgelerde izlenir.', isCorrect: false, explanation: 'Yanlıştır. Güneş tutulması gündüz vaktinde izlenir.' },
        { id: 15, text: 'Ay tutulması Dünya’nın gölgesinin büyük olması sebebiyle saatlerce sürebilir.', isCorrect: true, explanation: 'Doğrudur. Ay tutulması geniş alanda ve uzun sürer.' }
      ],
      lgsQuestions: [
        ...odsgmGrade6Unit1Questions.filter(q => q.subTopicId === 'g6-u1-sub2'),
        {
          id: 3,
          questionPrompt: 'Bir araştırmacı Güneş, Dünya ve Ay’ı temsil eden toplarla deney yapıyor. Fenerin önüne önce küçük tenis topunu, arkasına büyük voleybol topunu koyduğunda voleybol topunun üzerinde küçük karanlık bir gölge lekesi oluştuğunu gözlemliyor.\n\nBu durumla ilgili;\nI. Güneş tutulması modellenmiştir.\nII. Tenis topu Ay’ı, voleybol topu Dünya’yı temsil eder.\nIII. Bu olay Ay dolunay evresindeyken gerçekleşir.\n\nyargılarından hangileri doğrudur?',
          options: [
            { key: 'A', text: 'Yalnız I' },
            { key: 'B', text: 'I ve II' },
            { key: 'C', text: 'II ve III' },
            { key: 'D', text: 'I, II ve III' }
          ],
          correctAnswer: 'B',
          explanation: 'Güneş - Ay - Dünya sıralaması Güneş tutulmasıdır (I ve II). Güneş tutulması yeniay evresinde olur (III yanlıştır).'
        },
        {
          id: 4,
          questionPrompt: 'Bettânî ve Takıyyüddin’in astronomi tarihindeki ortak katkısı aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Ay ve Güneş tutulmalarının zamanlarını matematiksel ve gözlemsel hassasiyetle hesaplamaları' },
            { key: 'B', text: 'İlk buharlı treni icat etmeleri' },
            { key: 'C', text: 'Hücreyi mikroskop altında incelemeleri' },
            { key: 'D', text: 'Yer çekimi kanununu formülleştirmeleri' }
          ],
          correctAnswer: 'A',
          explanation: 'Bettânî ve Takıyyüddin gökyüzü gözlemleri ve tutulma hesaplamalarında dünya bilimine öncülük etmiş Türk-İslam bilginleridir.'
        }
      ]
    }
  ],
  unitEndQuestions: [
    {
      id: 1,
      pageNumber: '39',
      type: 'multiple_choice',
      title: 'Gezegenlerin Hacimsel Büyüklüğü',
      questionPrompt: 'Güneş sistemindeki gazsal gezegenlerin hacimsel olarak en küçüğü aşağıdakilerden hangisidir?',
      options: [
        { key: 'A', text: 'Jüpiter' },
        { key: 'B', text: 'Satürn' },
        { key: 'C', text: 'Uranüs' },
        { key: 'D', text: 'Neptün' }
      ],
      correctAnswer: 'D',
      detailedExplanation: 'Gazsal gezegenlerin büyüklük sıralaması Jüpiter > Satürn > Uranüs > Neptün şeklindedir. Dolayısıyla gazsal gezegenlerin en küçüğü Neptün’dür.'
    },
    {
      id: 2,
      pageNumber: '41',
      type: 'multiple_choice',
      title: 'Güneş ve Ay Tutulması Farkı',
      questionPrompt: 'Ay tutulması ile ilgili aşağıdaki ifadelerden hangisi DOĞRUDUR?',
      options: [
        { key: 'A', text: 'Ay yeniay evresindedir.' },
        { key: 'B', text: 'Dünya, Güneş ile Ay arasına girer.' },
        { key: 'C', text: 'Yalnızca gündüz gözlemlenebilir.' },
        { key: 'D', text: 'Gözlem yaparken koruyucu filtreli gözlük zorunludur.' }
      ],
      correctAnswer: 'B',
      detailedExplanation: 'Ay tutulmasında Dünya, Güneş ile Ay arasına girer ve gölgesini Ay üzerine düşürür. Gece gözlenir, Ay dolunay evresindedir.'
    }
  ],
  unitEnd20Questions: [
    {
      id: 1,
      questionPrompt: 'Güneş’e en yakın karasal gezegen ile en uzak gazsal gezegen hangi seçenekte doğru verilmiştir?',
      options: [
        { key: 'A', text: 'Merkür — Neptün' },
        { key: 'B', text: 'Venüs — Uranüs' },
        { key: 'C', text: 'Dünya — Jüpiter' },
        { key: 'D', text: 'Mars — Satürn' }
      ],
      correctAnswer: 'A',
      explanation: 'Güneş’e en yakın gezegen Merkür, en uzak olan 8. gezegen ise Neptün’dür.'
    },
    {
      id: 2,
      questionPrompt: 'Asteroit Kuşağı hangi iki gezegen arasında yer almaktadır?',
      options: [
        { key: 'A', text: 'Dünya — Mars' },
        { key: 'B', text: 'Mars — Jüpiter' },
        { key: 'C', text: 'Jüpiter — Satürn' },
        { key: 'D', text: 'Venüs — Dünya' }
      ],
      correctAnswer: 'B',
      explanation: 'Asteroit kuşağı karasal gezegen Mars ile gazsal gezegen Jüpiter arasındadır.'
    }
  ]
};

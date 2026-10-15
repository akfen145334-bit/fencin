import { Unit } from '../types/curriculum';

export const grade5Unit6Data: Unit = {
  id: 'unit-6',
  unitNumber: 6,
  bookNumber: 2,
  grade: 5,
  subject: 'Fen Bilimleri',
  title: 'Yaşamımızdaki Elektrik',
  unitEndPageRange: 's. 128-135',
  colorTheme: {
    primary: 'yellow-500',
    border: 'border-yellow-500/40',
    bg: 'bg-yellow-500/10',
    accent: 'yellow-400',
    text: 'text-yellow-300'
  },
  subTopics: [
    {
      id: 'unit6-sub1',
      title: '1. Devre Elemanlarının Sembolleri ve Devre Şeması',
      shortTitle: 'Semboller ve Devre Şeması',
      badge: 'Sayfa 106-119',
      pageRange: '106 - 119',
      concepts: ['Devre Elemanı', 'Sembol', 'Ortak Bilimsel Dil', 'Pil', 'Ampul', 'Bağlantı Kablosu', 'Açık Anahtar', 'Kapalı Anahtar', 'Pil Yatağı', 'Duy', 'Devre Şeması'],
      simulationId: 'dynamometer',
      summarySections: [
        {
          heading: 'Elektrik Devrelerinde Sembol Kullanımının Önemi',
          paragraphs: [
            'Trafik levhaları nasıl ki tüm dünyada farklı dilleri konuşan insanların aynı trafik kurallarını bir bakışta anlamasını sağlıyorsa, elektrik devre elemanlarının sembollerle gösterilmesi de tüm dünyada ortak bir bilimsel dil oluşturur.',
            'Türkiye’de çizilen bir devre şeması Japonya’daki, Almanya’daki veya Brezilya’daki bir mühendis ya da teknisyen tarafından eksiksiz anlaşılabilir. Bu sayede cihazların montajı, üretimi ve onarımı kolaylaşır; zamandan ve maliyetten tasarruf sağlanır.'
          ],
          table: {
            headers: ['Devre Elemanı', 'Görsel Tanımı', 'Sembolü', 'Görevi / İşlevi'],
            rows: [
              ['Pil', 'Silindirik kimyasal enerji kaynağı (+ ve - kutup)', '—|ı— (Uzun çizgi +, kısa kalın çizgi -)', 'Devreye elektrik enerjisi sağlar.'],
              ['Ampul', 'Cam fanuslu aydınlatma aracı', '—( ⊗ )— (Daire içinde çarpı)', 'Elektrik enerjisini ışık (ve ısı) enerjisine dönüştürür.'],
              ['Bağlantı Kablosu', 'İçi bakır telli iletken hat', '————— (Düz çizgi)', 'Elektrik akımını devre elemanları arasında iletir.'],
              ['Açık Anahtar', 'Ayrık duran iletken kol', '—• / •— (Kontak açık)', 'Devreden akım geçişini keser, ampul IŞIK VERMEZ.'],
              ['Kapalı Anahtar', 'Birbirine temas eden iletken kol', '—•—•— (Kontak kapalı)', 'Devreyi tamamlar, akım geçer, ampul IŞIK VERİR.'],
              ['Pil Yatağı', 'Pillerin yerleştirildiği plastik yuva', 'SEMBOLÜ YOKTUR', 'Pillerin sabit durmasını sağlar.'],
              ['Duy', 'Ampulün vidalandığı porselen/plastik yuva', 'SEMBOLÜ YOKTUR', 'Ampulün devreye temasını ve sabitliğini sağlar.']
            ]
          },
          keyPoints: [
            'Pil, ampul, bağlantı kablosu ve anahtarın uluslararası kabul görmüş sembolleri vardır.',
            'Pil yatağı ve duyun sembolü YOKTUR; çünkü kablolar doğrudan pil ve ampule bağlanarak da devre çalıştırılabilir.',
            'Devre elemanlarının sembolleri kullanılarak yapılan çizimlere Devre Şeması denir.'
          ]
        },
        {
          heading: 'Bir Devrenin Işık Verme Şartları',
          paragraphs: [
            'Basit bir elektrik devresinde ampulün ışık verebilmesi için:',
            '1. Devrede enerji sağlayan dolu bir pil bulunmalıdır.',
            '2. Devre kapalı olmalıdır (anahtar kapalı olmalı, iletken kabloda kopukluk bulunmamalıdır).',
            '3. Devre elemanları kutuplarına uygun ve doğru şekilde bağlanmış olmalıdır.',
            '4. Ampulün sağlam olması (içindeki filaman telinin kopmamış olması) gerekir.'
          ]
        }
      ],
      trueFalseQuestions: [
        {
          id: 1,
          text: 'Elektrik devre elemanlarının sembollerle gösterilmesi uluslararası ortak bir bilimsel dil oluşturur.',
          isCorrect: true,
          explanation: 'Doğrudur. Tıpkı trafik işaretleri gibi tüm dünya aynı sembollerle devreyi anlar.'
        },
        {
          id: 2,
          text: 'Devredeki pil yatağı ve duyun da devre şemalarında özel birer sembolü vardır.',
          isCorrect: false,
          explanation: 'Yanlıştır. Pil yatağı ve duyun bilimsel bir sembolü yoktur.'
        },
        {
          id: 3,
          text: 'Anahtar açık konumda olduğunda devreden akım geçer ve ampul ışık verir.',
          isCorrect: false,
          explanation: 'Yanlıştır. Anahtar açıkken devre kesintiye uğrar ve ampul yanmaz; kapalı anahtarda ampul ışık verir.'
        },
        {
          id: 4,
          text: 'Pil sembolünde uzun çizgi (+) pozitif kutbu, kısa ve kalın çizgi (-) negatif kutbu gösterir.',
          isCorrect: true,
          explanation: 'Doğrudur. Pil sembolündeki uzun çizgi pozitif (+), kısa çizgi negatif (-) kutuptur.'
        }
      ],
      lgsQuestions: [
        {
          id: 1,
          questionPrompt: 'Aşağıda bir el fenerinin iç yapısında 2 adet pil, 1 adet ampul, 1 adet anahtar ve bağlantı kabloları yer almaktadır.\n\nBuna göre bu el fenerine ait devre şeması çizildiğinde sembol sayısı ve türleri ile ilgili hangisi doğru olur?',
          options: [
            { key: 'A', text: '2 pil sembolü, 1 ampul sembolü, 1 anahtar sembolü' },
            { key: 'B', text: '1 pil sembolü, 2 ampul sembolü, 1 duy sembolü' },
            { key: 'C', text: '2 pil yatağı sembolü, 1 ampul sembolü' },
            { key: 'D', text: '2 pil sembolü, 1 ampul sembolü, 1 pil yatağı sembolü' }
          ],
          correctAnswer: 'A',
          explanation: 'Devre şemasında 2 pil, 1 ampul ve 1 anahtar sembolü çizilir. Pil yatağının sembolü olmadığı için şemada yer almaz.'
        },
        {
          id: 2,
          questionPrompt: 'Bir fen laboratuvarında öğrencinin kurduğu devrede anahtar kapalı olmasına ve ampulün sağlam olmasına rağmen ampul ışık vermemektedir.\n\nBu sorunun sebebi aşağıdakilerden hangisi olabilir?',
          options: [
            { key: 'A', text: 'Pil yatağı yerine pilin doğrudan kabloya bağlanması' },
            { key: 'B', text: 'Pilin bitmiş (tükenmiş) olması veya kabloda kopukluk bulunması' },
            { key: 'C', text: 'Devrede sembol kullanılmamış olması' },
            { key: 'D', text: 'Bağlantı kablosunun bakırdan yapılmış olması' }
          ],
          correctAnswer: 'B',
          explanation: 'Ampul sağlam ve anahtar kapalıyken ışık vermiyorsa devrede enerji sağlayan pil bitmiştir ya da kablo temas etmemektedir.'
        }
      ],
      glossary: [
        { term: 'Devre Şeması', definition: 'Devre elemanlarının gerçek resimleri yerine standart bilimsel sembolleri kullanılarak çizilen devre planı.' },
        { term: 'Anahtar', definition: 'Devreden geçen elektrik akımını kontrol eden, devreyi açıp kapatmaya yarayan eleman.' },
        { term: 'Duy', definition: 'Ampulün takıldığı ve vidalandığı yuva (sembolü yoktur).' }
      ]
    },
    {
      id: 'unit6-sub2',
      title: '2. Basit Bir Elektrik Devresinde Ampul Parlaklığını Etkileyen Değişkenler',
      shortTitle: 'Ampul Parlaklığı ve Değişkenler',
      badge: 'Sayfa 120-127',
      pageRange: '120 - 127',
      concepts: ['Bağımsız Değişken', 'Bağımlı Değişken', 'Kontrol Edilen Değişken', 'Hipotez', 'Pil Sayısı', 'Ampul Sayısı', 'Ampul Parlaklığı', 'Centennial Bulb (Yüzyıllık Ampul)'],
      simulationId: 'dynamometer',
      summarySections: [
        {
          heading: 'Bilimsel Deneylerde Değişken Türleri',
          paragraphs: [
            'Bilimsel çalışmalarda araştırmacılar kurdukları bir hipotezi (tahmini) test etmek için kontrollü deneyler yaparlar. Bir deneyde üç farklı değişken grubu bulunur:',
            '1. Bağımsız Değişken: Deneyi yapan araştırmacının kendi isteğiyle değiştirdiği, etkisini incelemek istediği değişkendir (Örneğin: Pil sayısını değiştirmek).',
            '2. Bağımlı Değişken: Bağımsız değişkendeki değişikliğe bağlı olarak değişen, gözlenen veya ölçülen sonuçtur (Örneğin: Ampul parlaklığı).',
            '3. Kontrol Edilen (Sabit Tutulan) Değişken: Deneyin sonucunu etkilememesi için sabit tutulan, hiç değiştirilmeyen tüm etkenlerdir (Örneğin: Ampul sayısı, kablo cinsi ve boyu).'
          ]
        },
        {
          heading: 'Ampul Parlaklığını Etkileyen İki Temel Durum',
          paragraphs: [
            'Basit bir elektrik devresinde ampullerin ne kadar parlak yanacağını belirleyen iki ana faktör vardır: Devredeki pil sayısı ve devredeki ampul sayısı.'
          ],
          table: {
            headers: ['Deney Durumu', 'Bağımsız Değişken', 'Bağımlı Değişken', 'Sabit Değişken', 'Ampul Parlaklığı Sonucu'],
            rows: [
              [
                '1. Durum: Ampul sayısı sabit, PİL SAYISI artırılırsa',
                'Pil Sayısı',
                'Ampul Parlaklığı',
                'Ampul sayısı, kablo',
                'Ampul parlaklığı ARTAR (Daha parlak yanar).'
              ],
              [
                '2. Durum: Pil sayısı sabit, AMPUL SAYISI artırılırsa',
                'Ampul Sayısı',
                'Ampul Parlaklığı',
                'Pil sayısı, kablo',
                'Ampul parlaklığı AZALIR (Daha sönük yanar).'
              ]
            ]
          },
          keyPoints: [
            'Pil sayısı arttıkça devreye sağlanan elektrik enerjisi artar; bu nedenle ampuller daha parlak yanar.',
            'Ampul sayısı arttıkça pilden gelen enerji ampuller arasında paylaşıldığı için her bir ampulün parlaklığı azalır.',
            'En parlak devre: Pil sayısının en çok, ampul sayısının en az olduğu devredir.',
            'En sönük devre: Pil sayısının en az, ampul sayısının en çok olduğu devredir.'
          ]
        },
        {
          heading: 'Bilgi İstasyonu: 120 Yıldır Yanan Ampul (Centennial Bulb)',
          paragraphs: [
            'Amerika Birleşik Devletleri’nin Livermore İtfaiye İstasyonu’ndaki el yapımı karbon filamanlı bir akkor ampul, 1901 yılından bu yana (bir asırdan uzun süredir) neredeyse hiç sönmeden yanmaya devam etmekte olup Guinness Rekorlar Kitabı’na girmiştir.'
          ]
        },
        {
          heading: 'Çağını Aşanlar: Elektrik Öncüleri',
          paragraphs: [
            '• Ord. Prof. Burhanettin Sezerar: Türkiye’de elektrik mühendisliğinin kurucusu kabul edilir. Anadolu ve Trakya şehirlerine elektriğin ulaştırılmasında büyük hizmetler vermiştir.',
            '• Nikola Tesla: Alternatif akım (AC), elektrik motorları ve kablosuz enerji aktarımı alanında çığır açan dahi bir mucittir.',
            '• Alessandro Volta: Farklı metaller ve asitli sıvıyla tarihteki ilk kimyasal elektrik pilini (Volta Pili) icat etmiştir.',
            '• Thomas Alva Edison: Yüksek dirençli karbon filamanlı akkor ampulü ve elektrik dağıtım şebekesini geliştirerek evlerin aydınlatılmasını sağlamıştır.'
          ]
        }
      ],
      trueFalseQuestions: [
        {
          id: 5,
          text: 'Bir devrede ampul sayısı sabit tutulup pil sayısı artırılırsa ampullerin parlaklığı artar.',
          isCorrect: true,
          explanation: 'Doğrudur. Pil sayısı arttıkça devreye verilen enerji artar ve ampul daha parlak yanar.'
        },
        {
          id: 6,
          text: 'Pil sayısı sabit olan bir devrede ampul sayısı artırıldığında ampuller daha parlak yanar.',
          isCorrect: false,
          explanation: 'Yanlıştır. Enerji daha çok ampule bölüştürüldüğü için ampullerin parlaklığı azalır.'
        },
        {
          id: 7,
          text: 'Bir araştırmacının kendi isteğiyle deneyde değiştirdiği değişkene bağımlı değişken denir.',
          isCorrect: false,
          explanation: 'Yanlıştır. Araştırmacının değiştirdiği bağımsız değişkendir; bundan etkilenen sonuç ise bağımlı değişkendir.'
        },
        {
          id: 8,
          text: 'Alessandro Volta kendi adıyla anılan ilk kimyasal pili icat etmiştir.',
          isCorrect: true,
          explanation: 'Doğrudur. Volta pili ilk kimyasal elektrik kaynağıdır.'
        }
      ],
      lgsQuestions: [
        {
          id: 3,
          questionPrompt: 'Bir öğrenci "Pil sayısını artırırsam ampulün parlaklığı artar." hipotezini test etmek istemektedir.\n\nBuna göre öğrencinin kurması gereken deney düzeneğinde;\nI. Bağımsız değişken: Pil sayısı\nII. Bağımlı değişken: Ampul parlaklığı\nIII. Kontrol edilen değişken: Ampul sayısı\n\neşleştirmelerinden hangileri doğrudur?',
          options: [
            { key: 'A', text: 'I ve II' },
            { key: 'B', text: 'I ve III' },
            { key: 'C', text: 'II ve III' },
            { key: 'D', text: 'I, II ve III' }
          ],
          correctAnswer: 'D',
          explanation: 'Pil sayısının etkisi test edildiği için pil sayısı bağımsız değişken (I), ölçülen parlaklık bağımlı değişken (II) ve sabit tutulan ampul sayısı kontrol değişkenidir (III).'
        },
        {
          id: 4,
          questionPrompt: 'Özdeş pil ve ampullerle kurulan dört devre verilmiştir:\n• K devresi: 1 pil, 3 ampul\n• L devresi: 1 pil, 1 ampul\n• M devresi: 3 pil, 1 ampul\n• N devresi: 1 pil, 2 ampul\n\nBuna göre ampul parlaklığı EN FAZLA ve EN AZ olan devreler hangisinde doğru verilmiştir?',
          options: [
            { key: 'A', text: 'En fazla: M - En az: K' },
            { key: 'B', text: 'En fazla: L - En az: K' },
            { key: 'C', text: 'En fazla: M - En az: N' },
            { key: 'D', text: 'En fazla: K - En az: M' }
          ],
          correctAnswer: 'A',
          explanation: 'M devresinde 3 pil tek bir ampulü beslediği için parlaklık en fazladır. K devresinde ise tek bir pil 3 ampule paylaştırıldığı için parlaklık en azdır.'
        }
      ],
      glossary: [
        { term: 'Bağımsız Değişken', definition: 'Deneyde etkisi araştırılan ve deneyci tarafından kasıtlı olarak değiştirilen faktör.' },
        { term: 'Bağımlı Değişken', definition: 'Bağımsız değişkene bağlı olarak değişen, merak edilen deney sonucu.' },
        { term: 'Kontrol Edilen Değişken', definition: 'Deney boyunca sabit tutulan, değiştirilmeyen değişkenler.' }
      ]
    }
  ],
  unitEndQuestions: [
    {
      id: 1,
      pageNumber: '128',
      type: 'multiple_choice',
      title: 'Devre Elemanlarının Sembolleri',
      questionPrompt: 'Aşağıdaki devre elemanlarından hangisinin devre şemalarında kullanılan özel bir sembolü YOKTUR?',
      options: [
        { key: 'A', text: 'Pil' },
        { key: 'B', text: 'Ampul' },
        { key: 'C', text: 'Pil yatağı' },
        { key: 'D', text: 'Anahtar' }
      ],
      correctAnswer: 'C',
      detailedExplanation: 'Pil yatağı ve duyun devre şemalarında sembolü bulunmaz. Pil, ampul, kablo ve anahtarın sembolleri vardır.'
    },
    {
      id: 2,
      pageNumber: '130',
      type: 'multiple_choice',
      title: 'Ampul Parlaklığı Değişkenleri',
      questionPrompt: 'Bir kampta çadır aydınlatmasında kullanılan devrede ampul parlaklığını artırmak isteyen bir öğrenci hangi işlemi yapmalıdır?',
      options: [
        { key: 'A', text: 'Ampul sayısını artırmalıdır.' },
        { key: 'B', text: 'Pil sayısını artırmalıdır.' },
        { key: 'C', text: 'Anahtarı açmalıdır.' },
        { key: 'D', text: 'Pillerden birini devreden çıkarmalıdır.' }
      ],
      correctAnswer: 'B',
      detailedExplanation: 'Pil sayısının artırılması devreye daha çok elektrik enerjisi aktarılmasını sağlayarak ampulün daha parlak yanmasını sağlar.'
    }
  ],
  unitEnd20Questions: [
    {
      id: 1,
      questionPrompt: 'Devre elemanlarının sembollerle gösterilmesinin en önemli bilimsel faydası nedir?',
      options: [
        { key: 'A', text: 'Ampullerin daha az enerji harcamasını sağlamak' },
        { key: 'B', text: 'Tüm dünyada herkesin anlayabileceği ortak bir bilimsel dil oluşturmak' },
        { key: 'C', text: 'Pillerin ömrünü uzatmak' },
        { key: 'D', text: 'Kablo kullanımını sıfırlamak' }
      ],
      correctAnswer: 'B',
      explanation: 'Semboller uluslararası ortak bir bilimsel dil oluşturur.'
    },
    {
      id: 2,
      questionPrompt: 'Özdeş pillerle çalışan bir devrede ampul sayısı 1 iken 3’e çıkarılırsa ampul parlaklığı nasıl değişir?',
      options: [
        { key: 'A', text: 'Artar' },
        { key: 'B', text: 'Azalır' },
        { key: 'C', text: 'Değişmez' },
        { key: 'D', text: 'Önce söner sonra yanar' }
      ],
      correctAnswer: 'B',
      explanation: 'Pil sayısı sabitken ampul sayısı artırılırsa enerji bölüneceği için parlaklık azalır.'
    }
  ]
};

import { Unit } from '../../types/curriculum';
import { odsgmGrade6Unit2Questions } from './odsgmQuestions';

export const grade6Unit2Data: Unit = {
  id: 'g6-unit-2',
  unitNumber: 2,
  bookNumber: 1,
  grade: 6,
  subject: 'Fen Bilimleri',
  title: 'Kuvvetin Etkisinde Hareket',
  unitEndPageRange: 's. 74-79',
  colorTheme: {
    primary: 'from-orange-600 to-amber-600',
    border: 'border-orange-500/40',
    bg: 'bg-orange-950/40',
    accent: 'text-orange-400',
    text: 'text-orange-200'
  },
  subTopics: [
    {
      id: 'g6-u2-sub1',
      title: '1. Bileşke Kuvvet (Dengelenmiş ve Dengelenmemiş Kuvvetler)',
      shortTitle: 'Bileşke Kuvvet & Denge',
      badge: 'Sayfa 45-61',
      pageRange: '45 - 61',
      concepts: ['Kuvvet', 'Bileşke Kuvvet (Net Kuvvet - R)', 'Yön', 'Doğrultu', 'Büyüklük (Newton - N)', 'Uygulama Noktası', 'Dengelenmiş Kuvvetler', 'Dengelenmemiş Kuvvetler', 'Dengeleyici Kuvvet'],
      simulationId: 'dynamometer',
      summarySections: [
        {
          heading: 'Kuvvetin Özellikleri ve Gösterimi',
          paragraphs: [
            'Duran bir cismi harekete geçiren, hareket eden cismi hızlandıran, yavaşlatan veya durduran, cisimlerin yönünü ve şeklini değiştirebilen etkiye kuvvet denir. Kuvvet "F" harfi ile gösterilir, dinamometre ile ölçülür ve birimi Newton’dır (N).',
            'Bir kuvveti tam olarak tanımlayabilmek için dört temel özelliğinin bilinmesi gerekir: 1) Uygulama noktası, 2) Doğrultusu, 3) Yönü, 4) Büyüklüğü.',
            'Doğrultu ile yön birbirinden farklıdır. Doğrultu birbirine zıt iki yönü kapsayan düz çizgidir (Örneğin: Doğu-Batı doğrultusu hem doğu hem de batı yönünü içerir).'
          ]
        },
        {
          heading: 'Bileşke Kuvvet (Net Kuvvet - R) Nasıl Hesaplanır?',
          paragraphs: [
            'Bir cisme etki eden birden fazla kuvvetin yaptığı etkiyi tek başına yapabilen kuvvete bileşke kuvvet (net kuvvet) denir ve "R" harfi ile gösterilir.',
            '1. Aynı Doğrultu ve Aynı Yönlü Kuvvetler: Kuvvetlerin büyüklükleri toplanır ($R = F_1 + F_2$). Bileşke kuvvetin yönü uygulanan kuvvetlerle aynıdır.',
            '2. Aynı Doğrultu ve Zıt Yönlü Kuvvetler: Büyük olan kuvvetten küçük olan kuvvet çıkarılır ($R = F_{büyük} - F_{küçük}$). Bileşke kuvvetin yönü büyük kuvvetin yönündedir.'
          ],
          table: {
            headers: ['Kuvvet Durumu', 'Bileşke Kuvvet Formülü', 'Bileşke Kuvvetin Yönü', 'Örnek Hesaplama'],
            rows: [
              ['Aynı Yönlü Kuvvetler (Doğuya 3 N ve Doğuya 4 N)', 'R = F1 + F2', 'Kuvvetlerle aynı yön (Doğu)', 'R = 3 + 4 = 7 N Doğu'],
              ['Zıt Yönlü Kuvvetler (Doğuya 5 N ve Batıya 2 N)', 'R = F1 - F2', 'Büyük kuvvetin yönü (Doğu)', 'R = 5 - 2 = 3 N Doğu'],
              ['Eşit Büyüklükte Zıt Kuvvetler (Doğuya 4 N, Batıya 4 N)', 'R = F1 - F2 = 0', 'Yönü yoktur (Bileşke sıfır)', 'R = 4 - 4 = 0 N (Dengelenmiş)']
            ]
          }
        },
        {
          heading: 'Dengelenmiş ve Dengelenmemiş Kuvvetler & Dengeleyici Kuvvet',
          paragraphs: [
            '• Dengelenmiş Kuvvetler ($R = 0$): Cisme etki eden kuvvetlerin bileşkesi sıfır ise cisim dengelenmiş kuvvetler etkisindedir. Cisim başlangıçta duruyorsa durmaya devam eder (masada duran kitap, duvardaki tablo); başlangıçta hareket ediyorsa sabit süratle yoluna devam eder.',
            '• Dengelenmemiş Kuvvetler ($R \\neq 0$): Cisme etki eden bileşke kuvvet sıfırdan farklıysa cisim hızlanabilir, yavaşlayabilir veya yön değiştirebilir (daldan düşen elma, hızlanan araba, yukarı atılan top).',
            '• Dengeleyici Kuvvet: Bir cisme etki eden bileşke kuvveti sıfır yapan kuvvettir. Dengeleyici kuvvet, bileşke kuvvetle AYNI BÜYÜKLÜKTE, AYNI DOĞRULTUDA fakat ZIT YÖNDEDİR.'
          ],
          examNote: 'Sınav Püf Noktası: Bir cisim duruyorsa VEYA sabit süratle hareket ediyorsa üzerindeki net kuvvet kesinlikle SIFIRDIR (Dengelenmiş kuvvetler etkisindedir)!'
        }
      ],
      interactiveBookFlow: [
        {
          id: 'g6-u2-s1-ondeg',
          pageNumber: 'Sayfa 44',
          type: 'on_degerlendirme',
          title: 'Ön Değerlendirme İstasyonu: Kuvvetin Etkileri',
          badge: 'Ön Değerlendirme',
          evaluationQuestions: [
            {
              question: 'Kuvvet ne ile ölçülür ve birimi nedir?',
              answer: 'Kuvvet dinamometre ile ölçülür ve birimi Newton’dır (N).'
            },
            {
              question: 'Duran topa vurulduğunda veya frene basıldığında kuvvetin hangi etkileri görülür?',
              answer: 'Topa vurulduğunda hızlandırma ve hareket ettirme etkisi, frene basıldığında ise yavaşlatma ve durdurma etkisi görülür.'
            }
          ]
        },
        {
          id: 'g6-u2-s1-kopru-araba',
          pageNumber: 'Sayfa 52',
          type: 'kopru_istasyonu',
          title: 'Köprü İstasyonu: Yolda Kalan Araba ve Takım Ruhu',
          prompt: 'Yolda arızalanan bir arabayı tek kişi itemezken birkaç kişinin bir araya gelip aynı yönde itmesiyle arabanın harekete geçmesini nasıl açıklarsınız?',
          interactiveAnswer: 'Farklı kişilerin aynı yönde uyguladıkları kuvvetler toplanarak büyük bir bileşke kuvvet (net kuvvet) oluşturur ve arabanın sürtünmesini yenerek hareket etmesini sağlar.'
        }
      ],
      glossary: [
        { term: 'Bileşke Kuvvet (Net Kuvvet)', definition: 'Bir cisme etki eden birden fazla kuvvetin yaptığı etkiyi tek başına gösteren toplam kuvvet (R).' },
        { term: 'Dengelenmiş Kuvvetler', definition: 'Bileşkesi sıfır olan (R = 0) kuvvetler sistemi; cisim durur veya sabit süratle gider.' },
        { term: 'Dengelenmemiş Kuvvetler', definition: 'Bileşkesi sıfırdan farklı olan (R ≠ 0) kuvvetler sistemi; cismin hızını veya yönünü değiştirir.' },
        { term: 'Dengeleyici Kuvvet', definition: 'Bileşke kuvveti sıfırlayan, bileşke ile aynı büyüklükte fakat zıt yöndeki kuvvet.' }
      ],
      trueFalseQuestions: [
        { id: 1, text: 'Bir cisme etki eden bileşke kuvvet sıfır ise cisim kesinlikle hızlanan hareket yapar.', isCorrect: false, explanation: 'Yanlıştır. Bileşke sıfır ise cisim durur veya sabit süratle hareket eder.' },
        { id: 2, text: 'Doğu yönündeki 5 N ile batı yönündeki 3 N kuvvetlerin bileşkesi doğu yönünde 2 N’dır.', isCorrect: true, explanation: 'Doğrudur. Zıt kuvvetler çıkarılır (5 - 3 = 2 N) ve yönü büyük olanın (doğu) yönündedir.' },
        { id: 3, text: 'Duvarda asılı duran bir tablo dengelenmiş kuvvetlerin etkisindedir.', isCorrect: true, explanation: 'Doğrudur. Hareketsiz duran tüm cisimler dengelenmiş kuvvetler etkisindedir.' },
        { id: 4, text: 'Dengeleyici kuvvetin büyüklüğü bileşke kuvvetten daima daha küçüktür.', isCorrect: false, explanation: 'Yanlıştır. Dengeleyici kuvvet bileşke kuvvetle tam olarak eşit büyüklüktedir.' },
        { id: 5, text: 'Doğrultu birbirine zıt iki yönü kapsayan bir çizgidir.', isCorrect: true, explanation: 'Doğrudur. Örneğin Kuzey-Güney doğrultusu hem kuzey hem güney yönünü içerir.' }
      ],
      lgsQuestions: [
        ...odsgmGrade6Unit2Questions.filter(q => q.subTopicId === 'g6-u2-sub1'),
        {
          id: 1,
          questionPrompt: 'Sürtünmesiz yatay bir zeminde durmakta olan bir kutuya doğu yönünde 10 N, batı yönünde 6 N büyüklüğünde iki kuvvet uygulanıyor.\n\nBu kutunun dengelenmiş kuvvetler etkisinde kalabilmesi için uygulanması gereken DENGELEYİCİ KUVVET hangisidir?',
          options: [
            { key: 'A', text: 'Batı yönünde 4 N' },
            { key: 'B', text: 'Doğu yönünde 4 N' },
            { key: 'C', text: 'Batı yönünde 16 N' },
            { key: 'D', text: 'Doğu yönünde 16 N' }
          ],
          correctAnswer: 'A',
          explanation: 'Bileşke kuvvet R = 10 - 6 = 4 N Doğu yönündedir. Dengeleyici kuvvet ise bileşkeye zıt olacağından Batı yönünde 4 N olmalıdır.'
        },
        {
          id: 2,
          questionPrompt: 'Aşağıdaki durumlardan hangisinde cisim DENGELENMEMİŞ KUVVETLERİN etkisindedir?',
          options: [
            { key: 'A', text: 'Masanın üzerinde duran kitap' },
            { key: 'B', text: 'Daldan yere düşen elma' },
            { key: 'C', text: 'Sabit süratle düz yolda ilerleyen otomobil' },
            { key: 'D', text: 'Duvarda asılı duran saat' }
          ],
          correctAnswer: 'B',
          explanation: 'Daldan düşen elma yer çekimi etkisiyle hızlanan hareket yapar; dolayısıyla dengelenmemiş kuvvetler etkisindedir.'
        }
      ]
    },
    {
      id: 'g6-u2-sub2',
      title: '2. Sabit Süratli ve Sabit Hızlı Hareket (Alınan Yol ve Yer Değiştirme)',
      shortTitle: 'Sürat ve Hız Karşılaştırması',
      badge: 'Sayfa 62-73',
      pageRange: '62 - 73',
      concepts: ['Alınan Yol', 'Yer Değiştirme', 'Sürat', 'Hız', 'Sabit Süratli Hareket', 'Sabit Hızlı Hareket', 'İbni Bâcce', 'Mimar Sinan', 'Galileo', 'Vecihi Hürkuş'],
      simulationId: 'dynamometer',
      summarySections: [
        {
          heading: 'Alınan Yol ile Yer Değiştirme Arasındaki Fark',
          paragraphs: [
            '• Alınan Yol: Bir hareketlinin izlediği yörüngenin toplam uzunluğudur. Yönü yoktur (skalerdir). Birimi metre (m) veya kilometredir (km).',
            '• Yer Değiştirme: Bir hareketlinin başlangıç noktası ile bitiş noktası arasındaki en kısa yönlü doğrusal uzaklıktır. Yönü vardır (vektöreldir).',
            'Çok Önemli Örnek: Evden çıkıp 300 metre uzaklıktaki parka giden ve tekrar eve geri dönen bir kişi toplam 600 metre YOL ALMIŞTIR; fakat başladığı noktaya döndüğü için YER DEĞİŞTİRMESİ 0 METREDİR!'
          ]
        },
        {
          heading: 'Sürat ile Hız Arasındaki Farklar',
          paragraphs: [
            'Günlük konuşmada sürat ile hız eş anlamlı gibi kullanılsa da fizikte tamamen farklıdır:',
            '• Sürat = Alınan Yol / Zaman. Yönsüzdür. Örneğin: "Araç 80 km/h süratle gidiyor."',
            '• Hız = Yer Değiştirme / Zaman. Yönlüdür. Örneğin: "Araç doğu yönünde 80 km/h hızla gidiyor."',
            'Virajlı bir yolda sabit 40 km/h süratle dönen bir aracın sürati sabittir; ancak aracın yönü sürekli değiştiği için hızı sabit değildir!'
          ],
          table: {
            headers: ['Özellik', 'Sürat', 'Hız'],
            rows: [
              ['Tanım', 'Birim zamanda alınan toplam yol', 'Birim zamandaki yer değiştirme'],
              ['Yön Durumu', 'YÖNSÜZ bir büyüklüktür', 'YÖNLÜ bir büyüklüktür'],
              ['Formül', 'Sürat = Yol / Zaman', 'Hız = Yer Değiştirme / Zaman'],
              ['Birimi', 'm/s veya km/h', 'm/s veya km/h']
            ]
          }
        },
        {
          heading: 'Çağını Aşanlar: Hareket ve Statik Mimarları',
          paragraphs: [
            '• İbni Bâcce (1095-1138): Endülüslü filozof ve fizikçi. Aristoteles’in hareket teorilerini eleştirmiş, serbest düşme ve hız kavramlarında Galileo ve Newton’a ilham vermiştir.',
            '• Mimar Sinan (1490-1588): Statik ve mekanik dehası. Selimiye Camisi’nin dev kubbesini 8 dayanak üzerine kusursuz dengelenmiş kuvvetlerle oturtarak asırlarca dimdik ayakta kalmasını sağlamıştır.',
            '• Galileo Galilei (1564-1642): Kilise avizesinin salınım süresini kendi nabız atışlarıyla ölçerek sarkacın periyodunu keşfetmiştir.',
            '• Vecihi Hürkuş (1896-1969): İlk Türk yerli uçağı Vecihi K-VI ile havacılık tarihimize geçen milli kahramanımızdır.'
          ]
        }
      ],
      interactiveBookFlow: [
        {
          id: 'g6-u2-s2-etkinlik',
          pageNumber: 'Sayfa 66',
          type: 'etkinlik_istasyonu',
          title: 'Etkinlik İstasyonu 7: Okul Bahçesinde Yol ve Yer Değiştirme Parkuru',
          prompt: 'Okul bahçesinde çizilen zikzaklı parkurda yürüyen öğrencilerin aldıkları yol ve başlangıç-bitiş arasındaki doğrusal yer değiştirmelerini ölçünüz.',
          resultInfoBox: 'Zikzaklı parkurda adımlarla katledilen mesafe alınan yoldur; cetvelle ölçülen başlangıçtan bitişe en kısa düz çizgi ise yer değiştirmedir.'
        }
      ],
      glossary: [
        { term: 'Alınan Yol', definition: 'Cismin hareketi boyunca katettiği toplam yörünge mesafesi (yönsüz).' },
        { term: 'Yer Değiştirme', definition: 'Başlangıç ve bitiş noktaları arasındaki en kısa yönlü doğrusal uzaklık.' },
        { term: 'Sürat', definition: 'Birim zamanda alınan yol (Yol / Zaman).' },
        { term: 'Hız', definition: 'Birim zamandaki yönlü yer değiştirme (Yer Değiştirme / Zaman).' }
      ],
      trueFalseQuestions: [
        { id: 6, text: 'Bir koşucu 400 metrelik çember pistte bir tur atıp başladığı yere dönerse yer değiştirmesi sıfır olur.', isCorrect: true, explanation: 'Doğrudur. Başlangıç ve bitiş noktası aynı ise yer değiştirme sıfırdır.' },
        { id: 7, text: 'Sürat ile hız tamamen aynı kavramlar olup ikisinin de yönü vardır.', isCorrect: false, explanation: 'Yanlıştır. Sürat yönsüzdür, hız ise yönlüdür.' },
        { id: 8, text: 'Virajı dönen bir aracın göstergesi sabit 60 km/h gösterse bile aracın hızı değişmektedir.', isCorrect: true, explanation: 'Doğrudur. Yön değiştiği için hız vektörü değişir.' }
      ],
      lgsQuestions: [
        ...odsgmGrade6Unit2Questions.filter(q => q.subTopicId === 'g6-u2-sub2'),
        {
          id: 3,
          questionPrompt: 'Doğuya doğru 400 metre yol alan K aracı bu yolu 5 saatte, doğuya doğru 400 metre yer değiştiren L aracı ise 8 saatte tamamlıyor.\n\nBuna göre K ve L araçlarının süratleri karşılaştırıldığında hangisi doğrudur?',
          options: [
            { key: 'A', text: 'K aracının sürati L aracından büyüktür.' },
            { key: 'B', text: 'L aracının sürati K aracından büyüktür.' },
            { key: 'C', text: 'Her iki aracın sürati eşittir.' },
            { key: 'D', text: 'Araçların aldıkları yollar farklıdır.' }
          ],
          correctAnswer: 'A',
          explanation: 'K sürati = 400 / 5 = 80 km/h; L sürati = 400 / 8 = 50 km/h. K’nin sürati daha büyüktür.'
        }
      ]
    }
  ],
  unitEndQuestions: [
    {
      id: 1,
      pageNumber: '75',
      type: 'multiple_choice',
      title: 'Kuvvetlerin Bileşkesi',
      questionPrompt: 'Bir cisme aynı yönde 3 N ve 5 N büyüklüğünde iki kuvvet uygulandığında bileşke kuvvet kaç N olur?',
      options: [
        { key: 'A', text: '2 N' },
        { key: 'B', text: '8 N' },
        { key: 'C', text: '15 N' },
        { key: 'D', text: '0 N' }
      ],
      correctAnswer: 'B',
      detailedExplanation: 'Aynı yönlü kuvvetler toplanır: 3 + 5 = 8 N.'
    },
    {
      id: 2,
      pageNumber: '76',
      type: 'multiple_choice',
      title: 'Bileşke Kuvvet Karşılaştırması',
      questionPrompt: 'Sağa doğru 5 N, sola doğru 2 N kuvvet etki eden bir cismin bileşke kuvveti nedir?',
      options: [
        { key: 'A', text: 'Sağa doğru 3 N' },
        { key: 'B', text: 'Sola doğru 3 N' },
        { key: 'C', text: 'Sağa doğru 7 N' },
        { key: 'D', text: 'Sıfır' }
      ],
      correctAnswer: 'A',
      detailedExplanation: 'Zıt yönlü kuvvetler çıkarılır: 5 - 2 = 3 N ve büyük olanın (sağa) yönündedir.'
    }
  ],
  unitEnd20Questions: [
    {
      id: 1,
      questionPrompt: 'Dengelenmiş kuvvetlerin etkisinde olan bir cisim için hangisi doğrudur?',
      options: [
        { key: 'A', text: 'Sürekli hızlanır.' },
        { key: 'B', text: 'Duruyorsa durmaya devam eder veya sabit süratle gider.' },
        { key: 'C', text: 'Daireler çizerek savrulur.' },
        { key: 'D', text: 'Ağırlığı sıfır olur.' }
      ],
      correctAnswer: 'B',
      explanation: 'Net kuvvet sıfır olduğunda cisim eylemsizlik gereği durumunu korur: duruyorsa durur, gidiyorsa sabit süratle gider.'
    }
  ]
};

import { Unit } from '../../types/curriculum';
import { odsgmGrade6Unit4Questions } from './odsgmQuestions';

export const grade6Unit4Data: Unit = {
  id: 'g6-unit-4',
  unitNumber: 4,
  bookNumber: 1,
  grade: 6,
  subject: 'Fen Bilimleri',
  title: 'Işığın Yansıması ve Renkler',
  unitEndPageRange: 's. 178-183',
  colorTheme: {
    primary: 'from-blue-600 to-indigo-600',
    border: 'border-blue-500/40',
    bg: 'bg-blue-950/40',
    accent: 'text-blue-400',
    text: 'text-blue-200'
  },
  subTopics: [
    {
      id: 'g6-u4-sub1',
      title: '1. Işığın Yansıması ve Yansıma Kanunları',
      shortTitle: 'Işığın Yansıması',
      badge: 'Sayfa 135-151',
      pageRange: '135 - 151',
      concepts: ['Yansıma', 'Düzgün Yansıma', 'Dağınık Yansıma', 'Gelen Işın', 'Yansıyan Işın', 'Yüzey Normali (N)', 'Gelme Açısı', 'Yansıma Açısı', 'Yansıma Kanunları'],
      simulationId: 'periscope',
      summarySections: [
        {
          heading: 'Işığın Yansıması ve Yansıma Türleri',
          paragraphs: [
            'Işık ışınlarının bir yüzeye çarparak geldiği ortama geri dönmesine yansıma denir. Çevremizdeki kendiliğinden ışık yaymayan nesneleri görebilmemiz, üzerlerine düşen ışığı yansıtmaları sayesindedir.',
            '• Düzgün Yansıma: Düzgün, pürüzsüz ve cilalı parlak yüzeylerde (düzlem ayna, durgun su, buruşturulmamış alüminyum folyo) gerçekleşir. Paralel gelen ışınlar birbirine paralel olarak yansır. Net ve berrak bir görüntü oluşur.',
            '• Dağınık Yansıma: Pürüzlü yüzeylerde (dalgalı su, buruşturulmuş folyo, tahta, halı, duvar) gerçekleşir. Paralel gelen ışınlar farklı açılarda ve doğrultularda dağılarak yansır. Net bir görüntü oluşmaz ancak cisimlerin her yönden görülebilmesini sağlar.'
          ]
        },
        {
          heading: 'Yansıma Kanunları',
          paragraphs: [
            'Işık ister düzgün ister dağınık yüzeyden yansısın, evrendeki şaşmaz fizik kanunlarına uyar:',
            '1. Gelen ışın, yansıyan ışın ve yüzey normali aynı düzlemdedir.',
            '2. Gelme açısı her zaman yansıma açısına eşittir ($i = r$). (NOT: Gelme açısı ışın ile ayna arasındaki açı DEĞİL, ışın ile yüzey normali arasındaki açıdır!).',
            '3. Yansıtıcı yüzeye dik ($90^\\circ$) gelen ışın kendi üzerinden geri yansır (Gelme açısı = $0^\\circ$, Yansıma açısı = $0^\\circ$).'
          ],
          table: {
            headers: ['Açı Adı', 'Tanımı', 'Kural'],
            rows: [
              ['Gelme Açısı', 'Gelen ışın ile yüzey normali (N) arasındaki açı', 'Yansıma açısına DAİMA eşittir.'],
              ['Yansıma Açısı', 'Yansıyan ışın ile yüzey normali (N) arasındaki açı', 'Gelme açısına DAİMA eşittir.'],
              ['Yüzey Normali (N)', 'Işının yüzeye değdiği noktadan yüzeye dik çizilen hayalî çizgi', 'Yüzeyle 90° açı yapar.']
            ]
          },
          examNote: 'Sınav Püf Noktası: Yansıma kanunları hem düzgün hem de dağınık yansımada her bir ışın için BİREBİR GEÇERLİDİR!'
        }
      ],
      interactiveBookFlow: [
        {
          id: 'g6-u4-s1-etkinlik',
          pageNumber: 'Sayfa 145',
          type: 'etkinlik_istasyonu',
          title: 'Etkinlik İstasyonu 6: Lazer Işığı ile Yansıma Kanunu',
          prompt: 'Kareli kâğıt üzerine dik yerleştirilen düzlem aynaya lazer ışığı göndererek açıölçer ile gelme ve yansıma açılarını ölçünüz.',
          resultInfoBox: 'Ölçülen her açıda gelen ışının normalle yaptığı açı, yansıyan ışının normalle yaptığı açıya tam olarak eşit çıkmaktadır.'
        }
      ],
      glossary: [
        { term: 'Yansıma', definition: 'Işığın bir yüzeye çarpıp geldiği ortama geri dönmesi.' },
        { term: 'Yüzey Normali', definition: 'Yansıtıcı yüzeye dik (90°) olarak çizilen hayali çizgi (N).' },
        { term: 'Gelme Açısı', definition: 'Gelen ışın ile yüzey normali arasındaki açı.' },
        { term: 'Yansıma Açısı', definition: 'Yansıyan ışın ile yüzey normali arasındaki açı.' }
      ],
      trueFalseQuestions: [
        { id: 1, text: 'Yüzeye dik olarak (90° ile) gelen bir ışın kendi üzerinden geri döner.', isCorrect: true, explanation: 'Doğrudur. Normal doğrultusunda gelen ışın kendi üzerinden yansır.' },
        { id: 2, text: 'Dağınık yansımada yansıma kanunları geçerli değildir.', isCorrect: false, explanation: 'Yanlıştır. Yansıma kanunları dağınık yansımada da her bir tekil ışın için tam olarak geçerlidir.' },
        { id: 3, text: 'Gelme açısı gelen ışın ile ayna yüzeyi arasındaki açıdır.', isCorrect: false, explanation: 'Yanlıştır. Gelme açısı gelen ışın ile yüzey normali arasındaki açıdır.' }
      ],
      lgsQuestions: [
        ...odsgmGrade6Unit4Questions.filter(q => q.subTopicId === 'g6-u4-sub1'),
        {
          id: 1,
          questionPrompt: 'Düzlem aynaya gelen bir ışının ayna yüzeyi ile yaptığı açı 40° olduğuna göre bu ışının YANSIMA AÇISI kaç derecedir?',
          options: [
            { key: 'A', text: '40°' },
            { key: 'B', text: '50°' },
            { key: 'C', text: '80°' },
            { key: 'D', text: '90°' }
          ],
          correctAnswer: 'B',
          explanation: 'Yüzey normali 90° diktir. Ayna ile 40° yapıyorsa, normal ile yaptığı açı (gelme açısı) 90 - 40 = 50° olur. Gelme açısı = Yansıma açısı olduğundan yansıma açısı da 50° dir.'
        }
      ]
    },
    {
      id: 'g6-u4-sub2',
      title: '2. Aynalar (Düzlem, Çukur ve Tümsek Aynalar)',
      shortTitle: 'Ayna Çeşitleri ve Kullanımı',
      badge: 'Sayfa 152-161',
      pageRange: '152 - 161',
      concepts: ['Düzlem Ayna', 'Simetri', 'Çukur Ayna (İçbükey)', 'Tümsek Ayna (Dışbükey)', 'Odak Noktası', 'Geniş Görüş Alanı'],
      simulationId: 'periscope',
      summarySections: [
        {
          heading: 'Ayna Çeşitleri ve Görüntü Özellikleri',
          paragraphs: [
            'Üzerine düşen ışığın neredeyse tamamını (%95’ten fazlasını) düzenli yansıtan parlak yüzeylere ayna denir. Aynalar düzlem ve küresel aynalar olmak üzere gruplandırılır:',
            '1. Düzlem (Düz) Ayna: Görüntü düz, simetrik (sağ-sol ters), cisimle aynı boyda ve cismin aynaya uzaklığı görüntünün aynaya uzaklığına eşittir. Kullanım: Evdeki boy aynaları, mağaza aynaları, periskop.',
            '2. Çukur Ayna (İçbükey): Işığı bir noktada (odak) toplar. Cismin yerine göre görüntü: Cisimden BÜYÜK ve DÜZ olabilir ya da TERS ve büyük/küçük/aynı boyda olabilir. Kullanım: Dişçi aynası, makyaj aynası, teleskop, el feneri, araba farı, güneş fırını.',
            '3. Tümsek Ayna (Dışbükey): Işığı dağıtır. Görüntü DAİMA DÜZ VE CİSİMDEN KÜÇÜKTÜR. Çok geniş bir alanı görmeyi sağlar. Kullanım: Araba yan aynaları, kavşak/viraj aynaları, mağaza ve güvenlik aynaları, araç altı arama aynaları.'
          ],
          table: {
            headers: ['Ayna Türü', 'Görüntü Özelliği', 'Işık Davranışı', 'Günlük Hayat Örnekleri'],
            rows: [
              ['Düzlem Ayna', 'Düz, cisimle aynı boyda, simetrik', 'Paralel yansıtır', 'Boy aynası, lavabo aynası, periskop'],
              ['Çukur Ayna', 'Büyük ve düz (yakında) veya ters', 'Işığı odakta toplar', 'Dişçi aynası, makyaj aynası, teleskop, güneş fırını'],
              ['Tümsek Ayna', 'Daima düz ve KÜÇÜK, geniş alan', 'Işığı dağıtır', 'Araba yan aynası, viraj aynası, otopark güvenlik aynası']
            ]
          },
          examNote: 'Sınav Püf Noktası: Metal yemek kaşığının iç çukur kısmı ÇUKUR AYNA, arkasındaki tümsek kısmı TÜMSEK AYNA gibi davranır!'
        }
      ],
      interactiveBookFlow: [
        {
          id: 'g6-u4-s2-kasik',
          pageNumber: 'Sayfa 154',
          type: 'etkinlik_istasyonu',
          title: 'Etkinlik İstasyonu 10: Metal Kaşık Deneyi',
          prompt: 'Metal kaşığın iç ve dış yüzeyine bakarak görüntünüzü inceleyiniz.',
          resultInfoBox: 'Kaşığın iç yüzeyinde görüntü ters veya dev boyutta görünür (çukur ayna); dış yüzeyinde ise daima düz ve küçük görünür (tümsek ayna).'
        }
      ],
      glossary: [
        { term: 'Çukur Ayna', definition: 'Işığı tek bir odak noktasında toplayan, devasa ve ayrıntılı görüntü verebilen içbükey ayna.' },
        { term: 'Tümsek Ayna', definition: 'Işığı dağıtarak geniş bir görüş alanı sağlayan, görüntüsü daima düz ve küçük olan dışbükey ayna.' },
        { term: 'Simetri', definition: 'Düzlem aynada sağ elin sol el gibi görünmesi (sağ-sol tersliği; ambulans yazısının ters yazılması).' }
      ],
      trueFalseQuestions: [
        { id: 4, text: 'Tümsek aynalarda oluşan görüntü her zaman düz ve cisimden küçüktür.', isCorrect: true, explanation: 'Doğrudur. Tümsek aynada görüntü daima düz ve küçük oluşur.' },
        { id: 5, text: 'Diş hekimleri dişleri daha büyük ve ayrıntılı görebilmek için tümsek ayna kullanırlar.', isCorrect: false, explanation: 'Yanlıştır. Büyütücü özelliğinden dolayı çukur ayna kullanırlar.' }
      ],
      lgsQuestions: [
        {
          id: 2,
          questionPrompt: 'Otomobil üreticileri sürücülerin arkadan gelen araçları ve kör noktaları daha geniş bir açıyla görebilmeleri için yan aynalarda hangi ayna türünü tercih ederler?',
          options: [
            { key: 'A', text: 'Çukur ayna' },
            { key: 'B', text: 'Tümsek ayna' },
            { key: 'C', text: 'Düzlem ayna' },
            { key: 'D', text: 'Renkli cam' }
          ],
          correctAnswer: 'B',
          explanation: 'Tümsek aynalar ışığı dağıtarak daha geniş bir alanı küçük ve düz gösterdiği için araç yan aynalarında kullanılır.'
        }
      ]
    },
    {
      id: 'g6-u4-sub3',
      title: '3. Işığın Soğurulması, Renkler ve Güneş Enerjisi',
      shortTitle: 'Işığın Soğurulması & Renkler',
      badge: 'Sayfa 162-177',
      pageRange: '162 - 177',
      concepts: ['Işığın Soğurulması', 'Radyometre', 'Beyaz Işık', 'Newton Çarkı', 'Işık Ana Renkleri', 'Cisimlerin Renkli Görünmesi', 'Güneş Paneli', 'İbnülheysem', 'Kemaleddin el-Fârisî', 'Newton'],
      simulationId: 'periscope',
      summarySections: [
        {
          heading: 'Işığın Soğurulması ve Cisimlerin Renkleri',
          paragraphs: [
            'Işığın maddeler tarafından tutulup yutulmasına ışığın soğurulması denir. Soğurulan ışık enerjisi ısı enerjisine dönüşür ve cismin sıcaklığı artar. Koyu ve siyah cisimler ışığı çok soğurur ve çabuk ısınır; açık ve beyaz cisimler ışığı yansıtır ve serin kalır.',
            '• Radyometre (Işık Değirmeni): Havası alınmış fanus içindeki siyah ve beyaz kanatçıklardan oluşur. Siyah kanat ışığı daha çok soğurup ısınarak havayı iter ve pervaneyi döndürür. Işık enerjisinin hareket enerjisine dönüştüğünü kanıtlar.',
            '• Beyaz Işık ve Renkler: Güneş ışığı beyazdır ve tüm renkleri içerir (Kırmızı, Turuncu, Sarı, Yeşil, Mavi, Lacivert, Mor). Işığın ana renkleri KIRMIZI, YEŞİL ve MAVİ’dir.',
            '• Cisimler Neden Renkli Görünür? Cisimler üzerlerine düşen ışıktan yansıttıkları renkte görünürler. Beyaz cisim tüm renkleri yansıtır (beyaz görünür). Siyah cisim tüm renkleri yutar (siyah görünür). Kırmızı bir elma beyaz ışıktan sadece kırmızıyı yansıttığı için kırmızı görünür. Mavi bir kitaba kırmızı ışık tutulursa ışık soğurulur ve kitap SİYAH görünür!'
          ]
        },
        {
          heading: 'Çağını Aşanlar: Optik ve Renk Âlimleri',
          paragraphs: [
            '• İbnülheysem (965-1040): Modern optiğin babası. Görmenin gözden çıkan ışınlarla değil, nesnelerden göze gelen ışınlarla olduğunu deneysel kanıtlayan ilk bilgindir. Camera Obscura’yı (karanlık oda) kurmuştur.',
            '• İbni Sînâ (980-1037): Işık kaynağı ile aydınlatılmış nesne ışığını ayırt etmiştir.',
            '• Kemaleddin el-Fârisî (1267-1319): Küresel cam küre deneyiyle gökkuşağının su damlalarında ışığın kırılması ve tam yansımasıyla oluştuğunu ilk kez matematiksel modelle kanıtlamıştır.',
            '• Isaac Newton (1643-1727): Beyaz ışığın prizmadan geçerek renklere ayrıldığını ve Newton çarkıyla tekrar birleşip beyaz olduğunu kanıtlamıştır.'
          ]
        }
      ],
      interactiveBookFlow: [
        {
          id: 'g6-u4-s3-termometre',
          pageNumber: 'Sayfa 167',
          type: 'etkinlik_istasyonu',
          title: 'Etkinlik İstasyonu 14: Siyah, Beyaz ve Mavi Kâğıtlı Termometreler',
          prompt: 'Siyah, mavi ve beyaz kâğıtla sarılı termometreleri güneşte 25 dakika bekletiniz.',
          resultInfoBox: 'Siyah kâğıtla kaplı termometre ışığı en çok soğurduğu için sıcaklığı en çok artmıştır. Beyaz kâğıt ışığı yansıttığı için sıcaklık artışı en az olmuştur.'
        }
      ],
      glossary: [
        { term: 'Soğurulma', definition: 'Işık ışınlarının madde tarafından emilerek ısı enerjisine dönüştürülmesi.' },
        { term: 'Radyometre', definition: 'Işık enerjisini hareket enerjisine dönüştüren cam fanuslu düzenek.' },
        { term: 'Işık Ana Renkleri', definition: 'Kırmızı, Yeşil ve Mavi; birleşimi beyaz ışığı oluşturur.' }
      ],
      trueFalseQuestions: [
        { id: 6, text: 'Radyometre ışık enerjisini hareket enerjisine dönüştürür.', isCorrect: true, explanation: 'Doğrudur. Kanatlar ışık şiddetine göre döner.' },
        { id: 7, text: 'Kırmızı bir cisme mavi ışık tutulursa cisim mavi görünür.', isCorrect: false, explanation: 'Yanlıştır. Kırmızı cisim mavi ışığı soğurur ve siyah görünür.' }
      ],
      lgsQuestions: [
        {
          id: 3,
          questionPrompt: 'Karanlık bir odada bulunan mavi renkli bir şapkaya sırasıyla kırmızı, mavi ve yeşil renkli el fenerleri ile bakılıyor.\n\nŞapka bu ışıklar altında sırasıyla hangi renklerde görünür?',
          options: [
            { key: 'A', text: 'Kırmızı — Mavi — Yeşil' },
            { key: 'B', text: 'Siyah — Mavi — Siyah' },
            { key: 'C', text: 'Mavi — Mavi — Mavi' },
            { key: 'D', text: 'Siyah — Siyah — Mavi' }
          ],
          correctAnswer: 'B',
          explanation: 'Mavi şapka kırmızı ışığı soğurur siyah görünür; mavi ışığı yansıtır mavi görünür; yeşil ışığı soğurur siyah görünür.'
        }
      ]
    }
  ],
  unitEndQuestions: [
    {
      id: 1,
      pageNumber: '179',
      type: 'multiple_choice',
      title: 'Yansıma Kanunu Açı Hesabı',
      questionPrompt: 'Yansıtıcı bir yüzeye gelen ışın ile normal arasındaki açı 35° olduğuna göre yansıma açısı kaç derecedir?',
      options: [
        { key: 'A', text: '35°' },
        { key: 'B', text: '55°' },
        { key: 'C', text: '70°' },
        { key: 'D', text: '90°' }
      ],
      correctAnswer: 'A',
      detailedExplanation: 'Yansıma kanununa göre Gelme Açısı = Yansıma Açısıdır. Normalle yapılan açı 35° ise yansıma açısı da 35° dir.'
    }
  ],
  unitEnd20Questions: [
    {
      id: 1,
      questionPrompt: 'Güneş fırınlarında ve dişçi aynalarında kullanılan ayna türü hangisidir?',
      options: [
        { key: 'A', text: 'Çukur ayna' },
        { key: 'B', text: 'Tümsek ayna' },
        { key: 'C', text: 'Düzlem ayna' },
        { key: 'D', text: 'Kırık ayna' }
      ],
      correctAnswer: 'A',
      explanation: 'Çukur ayna ışığı odak noktasında toplayarak yüksek ısı oluşturur ve yakındaki nesneleri büyütür.'
    }
  ]
};

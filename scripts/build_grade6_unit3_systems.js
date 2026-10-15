import fs from 'fs';

const fileContent = `import { Unit } from '../../types/curriculum';

export const grade6Unit3Data: Unit = {
  id: 'g6-unit-3',
  unitNumber: 3,
  bookNumber: 1,
  grade: 6,
  subject: 'Fen Bilimleri',
  title: 'Canlılarda Sistemler',
  colorTheme: {
    primary: 'from-emerald-600 to-teal-600',
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-950/40',
    accent: 'text-emerald-400',
    text: 'text-emerald-200'
  },
  subTopics: [
    {
      id: 'g6-u3-sub1',
      title: '1. Bitki ve Hayvanlarda Üreme, Büyüme ve Gelişme',
      shortTitle: 'Canlılarda Üreme & Gelişme',
      badge: 'Bölüm 1',
      concepts: [
        'Eşeysiz Üreme',
        'Vejetatif Üreme',
        'Bölünme ile Üreme',
        'Tomurcuklanma ile Üreme',
        'Rejenerasyon ile Üreme',
        'Eşeyli Üreme',
        'Çiçeğin Yapısı',
        'Tozlaşma',
        'Döllenme',
        'Çimlenme ve Etki Eden Faktörler',
        'Başkalaşım (Metamorfoz)',
        'Hayvanlarda Üreme ve Yavru Bakımı',
        'İnsanda Üreme Organları ve Gelişme'
      ],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Eşeyli ve Eşeysiz Üreme Çeşitleri',
          paragraphs: [
            'Canlıların nesillerini devam ettirebilmek için kendilerine benzer yeni bireyler meydana getirmesine üreme denir. Üreme olayı canlının bireysel yaşamını sürdürmesi için değil, türün devamlılığı ve neslin tükenmemesi için gereklidir.',
            '• Eşeysiz Üreme: Tek bir ata canlıdan, dişi ve erkek üreme hücreleri (sperm ve yumurta) ile döllenme olmaksızın yeni bireylerin oluşmasıdır. Oluşan yeni canlıların kalıtsal yapısı ana canlı ile tamamen aynıdır. Çeşitleri:',
            '  1) Bölünme ile Üreme: Bakteri, amip, öglena ve paramesyum gibi tek hücreli canlılarda ana hücrenin enine veya boyuna bölünerek iki yeni canlı oluşturmasıdır.',
            '  2) Tomurcuklanma ile Üreme: Ana canlının vücudunda oluşan tomurcuk şeklindeki çıkıntıların gelişerek yeni birey meydana getirmesidir (Hidra, bira mayası mantarı, mercan).',
            '  3) Vejetatif Üreme: Çiçekli bitkilerin kök, gövde, dal veya yaprak parçalarından yeni bitkilerin gelişmesidir (Patates yumrusu, çileğin sürünücü gövdesi, gül ve söğüt çelikleri, menekşe yaprağı).',
            '  4) Rejenerasyon (Yenilenme) ile Üreme: Ana canlıdan kopan parçaların gelişerek eksik kısımlarını tamamlaması ve yeni bireyler oluşturmasıdır (Planarya/yassı solucan, denizyıldızı, toprak solucanı).',
            '• Eşeyli Üreme: İki ata canlının (dişi ve erkek) üreme hücrelerinin (yumurta ve sperm) çekirdeklerinin birleşmesi (döllenme) ile yeni bireylerin oluşmasıdır. Kalıtsal çeşitlilik sağlanır; yavrular ana ve babadan farklı genetik özellikler taşır.'
          ]
        },
        {
          heading: 'Çiçekli Bitkilerde Üreme, Tozlaşma, Döllenme ve Çimlenme',
          paragraphs: [
            'Çiçeğin Temel Kısımları ve Görevleri:',
            '• Çanak Yaprak: Çiçeğin en dışındaki yeşil renkli yapraklardır; çiçek tomurcuk halindeyken içteki üreme organlarını dış etkilerden korur.',
            '• Taç Yaprak: Çiçeğin renkli ve hoş kokulu yapraklarıdır; arı, kelebek ve kuş gibi canlıları kendine çekerek tozlaşmaya yardımcı olur.',
            '• Çiçek Sapı: Çiçeği bitkinin dalına veya gövdesine bağlayan kısımdır.',
            '• Erkek Organ: Başçık ve sapçık kısımlarından oluşur. Başçıkta erkek üreme hücresi içeren polenler üretilir.',
            '• Dişi Organ: Dişicik tepesi, dişicik borusu ve yumurtalık kısımlarından oluşur. Dişicik tepesi yapışkan yapısıyla polenleri tutar. Yumurtalıkta dişi üreme hücresi (yumurta) üretilir ve döllenme burada gerçekleşir.',
            'Tozlaşma ve Döllenme: Erkek organdaki polenlerin rüzgâr, su veya böcekler aracılığıyla dişi organın dişicik tepesine taşınmasına tozlaşma denir. Polen hücresi çekirdeği ile yumurta hücresi çekirdeğinin yumurtalıkta birleşmesine döllenme denir. Döllenmeden sonra tohum ve meyve oluşur.',
            'Tohumun Çimlenmesi ve Etki Eden Faktörler: Tohum uyku halindeki genç bitki taslağıdır. Çimlenme için üç temel faktör şarttır: 1) Su (Nem), 2) Oksijen (Hava), 3) Uygun Sıcaklık (S-O-S kuralı).',
            'Önemli Kural: Tohum çimlenme sürecinde henüz yeşil yaprakları olmadığı için fotosentez yapamaz. Bu nedenle tohumun çimlenmesi için IŞIK ve KARBONDİOKSİT GEREKMEZ! Tohum karanlık ortamda da çimlenir.'
          ]
        },
        {
          heading: 'Hayvanlarda Üreme, Başkalaşım ve İnsanda Üreme Süreci',
          paragraphs: [
            'Hayvanlarda Üreme ve Yavru Bakımı:',
            '• Balıklar: Yumurta ile çoğalır. Döllenme ve gelişme suda gerçekleşir. Çok sayıda yumurta ve sperm bırakılarak döllenme şansı artırılır. Yavru bakımı ve başkalaşım yoktur.',
            '• Kurbağalar: Yumurta ile çoğalır, döllenme suda gerçekleşir. Yumurtada yeterli besin bulunmadığından yavru gelişimini tamamlamadan çıkar; balığa benzer iribaş larva evresi geçirip BAŞKALAŞIM (metamorfoz) ile ergin kurbağa olur. Yavru bakımı yoktur.',
            '• Sürüngenler: Yumurta ile çoğalır. Döllenme içte, gelişme korunaklı kabuklu yumurtada dışta olur. Yavru bakımı ve başkalaşım yoktur.',
            '• Kuşlar: Yumurta ile çoğalır. Kabuklu yumurta üzerine kuluçkaya yatarak sıcaklık sağlarlar. YAVRU BAKIMI VARDIR; yavrularını besler, korur ve uçmayı öğretirler. Başkalaşım yoktur.',
            '• Memeliler: Doğurarak çoğalır. Anne vücudunda döl yatağında gelişim tamamlanır. YAVRU BAKIMI VARDIR; yavrularını sütle beslerler (Kedi, köpek, koyun, inek, yarasa, yunus, balina, insan).',
            '• Böcekler (Kelebek vb.): Yumurta ile çoğalır; Yumurta ➔ Larva (Tırtıl) ➔ Pupa (Koza) ➔ Ergin kelebek evrelerinden oluşan BAŞKALAŞIM geçirirler. Yavru bakımı yoktur.',
            'İnsanda Üreme ve Gelişme:',
            '• Dişi Üreme Organları: Yumurtalık (yumurta üretir, 2 adet), Yumurta kanalı (döllenmenin gerçekleştiği yer), Döl yatağı/Rahim (embriyo ve fetüsün doğuma kadar tutunup geliştiği yer), Vajina (doğum kanalı).',
            '• Erkek Üreme Organları: Testis (sperm üretir, 2 adet), Sperm kanalı (spermleri penise taşır), Salgı bezleri (spermlerin hareketini kolaylaştıran salgıyı üretir), Penis (sperm ve idrarın vücut dışına atılmasını sağlar).',
            '• Gelişim Evreleri: Sperm + Yumurta ➔ Döllenme ➔ Zigot ➔ Embriyo ➔ Fetüs (2. aydan itibaren) ➔ Bebek (doğum).'
          ]
        }
      ],
      glossary: [
        { term: 'Vejetatif Üreme', definition: 'Bitkilerin dal, yaprak veya kök gibi kısımlarından yeni bitki üretilmesini sağlayan eşeysiz üreme çeşidi.' },
        { term: 'Tozlaşma', definition: 'Erkek organ başçığında üretilen polenlerin rüzgâr, su veya böceklerle dişi organın dişicik tepesine taşınması.' },
        { term: 'Döllenme', definition: 'Erkek üreme hücresinin çekirdeği ile dişi üreme hücresinin çekirdeğinin kaynaşarak birleşmesi olayı.' },
        { term: 'Çimlenme', definition: 'Uygun su, oksijen ve sıcaklık koşullarında tohumdaki embriyonun uyku halinden çıkıp genç fidan oluşturması.' },
        { term: 'Başkalaşım (Metamorfoz)', definition: 'Kurbağa ve kelebek gibi canlılarda yumurtadan çıkan larvanın yapısal değişimler geçirerek ana canlıya benzemesi.' },
        { term: 'Zigot', definition: 'Sperm ve yumurta hücrelerinin döllenmesi sonucu oluşan ilk tek hücreli canlı taslağı.' }
      ],
      trueFalseQuestions: [
        {
          id: 1,
          statement: 'Üreme olayı canlı türlerinin nesillerinin devam etmesinde rol oynar ve türün yok olmasını önler.',
          isCorrect: true,
          explanation: 'Doğrudur. Canlılar nesillerini devam ettirebilmek için kendilerine benzer yeni bireyler meydana getirirler.'
        },
        {
          id: 2,
          statement: 'Eşeyli üreyen canlılarda yeni bireylerin oluşması için iki ata canlı ve üreme hücreleri görev yapar.',
          isCorrect: true,
          explanation: 'Doğrudur. Eşeyli üremede dişi ve erkek ata bireyler ile yumurta ve sperm hücreleri görev alır.'
        },
        {
          id: 3,
          statement: 'Doğadaki tüm canlı türleri hem eşeysiz hem de eşeyli üreme yöntemlerini birlikte kullanarak çoğalır.',
          isCorrect: false,
          explanation: 'Yanlıştır. Bazı canlılar yalnızca eşeysiz, memeliler ve kuşlar gibi gelişmiş canlılar ise yalnızca eşeyli çoğalır.'
        },
        {
          id: 4,
          statement: 'Canlıların bireysel yaşamlarını sürdürebilmeleri için kendilerine benzer yeni canlılar oluşturmaları zorunludur.',
          isCorrect: false,
          explanation: 'Yanlıştır. Üreme bireyin kendi yaşamını sürdürmesi için değil, türün neslinin devamı için zorunludur.'
        },
        {
          id: 5,
          statement: 'Patates yumrusunun nemli toprağa dikilmesiyle yeni patates bitkilerinin elde edilmesi vejetatif üremeye örnektir.',
          isCorrect: true,
          explanation: 'Doğrudur. Patatesin gözlerinden yeni bitkilerin gelişmesi vejetatif (eşeysiz) üremedir.'
        },
        {
          id: 6,
          statement: 'Vejetatif üreme sonucunda elde edilen yeni bitkilerin kalıtsal yapısı ana bitki ile tamamen aynıdır.',
          isCorrect: true,
          explanation: 'Doğrudur. Eşeysiz üremede döllenme ve genetik çeşitlilik olmadığından yavrular ana canlıyla aynı kalıtsal yapıdadır.'
        },
        {
          id: 7,
          statement: 'Planarya ve denizyıldızının kopan parçalarından yeni canlıların gelişmesi rejenerasyon ile üremeye örnektir.',
          isCorrect: true,
          explanation: 'Doğrudur. Kopan vücut parçalarının kendini tamamlayarak yeni bireyler oluşturması rejenerasyonla üremedir.'
        },
        {
          id: 8,
          statement: 'Amip, bakteri ve öglena gibi tek hücreli canlıların ortadan ikiye ayrılarak çoğalması bölünme ile üremedir.',
          isCorrect: true,
          explanation: 'Doğrudur. Tek hücreli canlılarda mitoz benzeri ikiye bölünme en yaygın eşeysiz üreme şeklidir.'
        },
        {
          id: 9,
          statement: 'Hidra ve maya mantarında vücutta oluşan çıkıntıların gelişip yeni canlı oluşturması tomurcuklanma ile üremedir.',
          isCorrect: true,
          explanation: 'Doğrudur. Ana canlı üzerinde oluşan tomurcuk şeklindeki çıkıntılar bağımsız yeni bireylere dönüşür.'
        },
        {
          id: 10,
          statement: 'Çiçekli bitkilerde tohum oluşumu eşeysiz üremenin doğrudan bir sonucudur.',
          isCorrect: false,
          explanation: 'Yanlıştır. Tohum oluşumu tozlaşma ve döllenme sonrasında gerçekleştiği için eşeyli üreme ürünüdür.'
        },
        {
          id: 11,
          statement: 'Çiçeğin renkli ve güzel kokulu taç yaprakları böcekleri çiçeğe çekerek tozlaşmaya yardımcı olur.',
          isCorrect: true,
          explanation: 'Doğrudur. Taç yaprakların göz alıcı renkleri ve nektar kokusu böcekleri çekerek polen transferini sağlar.'
        },
        {
          id: 12,
          statement: 'Çanak yapraklar tomurcuk açmadan önce çiçeğin iç kısımlarını ve üreme organlarını dış etkilerden korur.',
          isCorrect: true,
          explanation: 'Doğrudur. Yeşil renkli çanak yapraklar tomurcuk halindeki çiçeği sararak koruyucu kalkan görevi görür.'
        },
        {
          id: 13,
          statement: 'Çiçekte polenlerin üretildiği kısım dişi organın yumurtalık bölümüdür.',
          isCorrect: false,
          explanation: 'Yanlıştır. Polenler erkek organın başçık kısmında üretilir; yumurtalıkta dişi üreme hücresi üretilir.'
        },
        {
          id: 14,
          statement: 'Erkek organda üretilen polenlerin rüzgâr, su veya böceklerle dişi organın dişicik tepesine taşınmasına tozlaşma denir.',
          isCorrect: true,
          explanation: 'Doğrudur. Tozlaşma, erkek üreme hücrelerinin dişi organa ulaştırılma sürecidir.'
        },
        {
          id: 15,
          statement: 'Polendeki erkek üreme hücresi ile yumurtalıktaki dişi üreme hücresi çekirdeklerinin birleşmesine döllenme denir.',
          isCorrect: true,
          explanation: 'Doğrudur. Döllenme ile zigot oluşur ve ardından tohum taslağı gelişir.'
        },
        {
          id: 16,
          statement: 'Tohumun çimlenebilmesi için güneş ışığı ve karbondioksit mutlaka bulunmalıdır.',
          isCorrect: false,
          explanation: 'Yanlıştır. Çimlenme sürecinde tohum fotosentez yapmadığı için ışığa ve karbondioksite ihtiyaç duymaz; karanlıkta da çimlenir.'
        },
        {
          id: 17,
          statement: 'Tohumun çimlenmesi için ortamda su (nem), oksijen (hava) ve uygun sıcaklık bulunması yeterlidir.',
          isCorrect: true,
          explanation: 'Doğrudur. Çimlenme için temel üç koşul su, oksijen ve uygun sıcaklıktır (S-O-S kuralı).'
        },
        {
          id: 18,
          statement: 'Bütün yumurtlayan hayvanlarda yavru bakımı ve kuluçkaya yatma davranışı görülür.',
          isCorrect: false,
          explanation: 'Yanlıştır. Balık, kurbağa ve sürüngenlerde yavru bakımı yoktur. Kuşlarda kuluçka ve yavru bakımı görülür.'
        },
        {
          id: 19,
          statement: 'Kurbağa ve kelebek yumurtasından çıkan yavrular ana canlıya benzemez ve başkalaşım geçirir.',
          isCorrect: true,
          explanation: 'Doğrudur. Kurbağa larvaları (iribaş) ve kelebek larvaları (tırtıl) başkalaşımla ergin canlıya dönüşür.'
        },
        {
          id: 20,
          statement: 'Memeli hayvanlar doğurarak çoğalır, yavrularını süt ile besler ve yavru bakımı gösterir.',
          isCorrect: true,
          explanation: 'Doğrudur. Kedi, köpek, inek, yarasa, yunus ve balina memelidir; doğurur ve sütle besler.'
        },
        {
          id: 21,
          statement: 'İnsanda döllenme olayı döl yatağında değil, yumurta kanalında gerçekleşir.',
          isCorrect: true,
          explanation: 'Doğrudur. Sperm ve yumurta yumurta kanalında karşılaşarak döllenir; oluşan zigot döl yatağına ilerler.'
        },
        {
          id: 22,
          statement: 'Döllenmiş yumurta hücresine ilk andan itibaren fetüs adı verilir.',
          isCorrect: false,
          explanation: 'Yanlıştır. Döllenmiş yumurtaya zigot denir. Zigot geliştikçe embriyo, ikinci aydan sonra fetüs adını alır.'
        },
        {
          id: 23,
          statement: 'Dişi üreme sisteminde yumurta kanalı döllenmenin gerçekleştiği ve yumurtanın döl yatağına taşındığı bölümdür.',
          isCorrect: true,
          explanation: 'Doğrudur. Yumurta kanalı döllenmeye ev sahipliği yapar ve zigotun döl yatağına iletilmesini sağlar.'
        },
        {
          id: 24,
          statement: 'Kuşların yumurtaları üzerinde kuluçkaya yatmalarının temel amacı yumurtaya gerekli sıcaklığı sağlamaktır.',
          isCorrect: true,
          explanation: 'Doğrudur. Kuluçka, yavrunun yumurta içinde gelişmesi için gereken uygun vücut sıcaklığını temin eder.'
        },
        {
          id: 25,
          statement: 'Balıkların suya binlerce üreme hücresi bırakmasının temel nedeni suda döllenme şansını artırmaktır.',
          isCorrect: true,
          explanation: 'Doğrudur. Suda akıntı ve avcılar nedeniyle döllenme ihtimali düşük olduğundan çok sayıda sperm ve yumurta bırakılır.'
        }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Vejetatif Üreme ve Genetik Özellikler',
          cognitiveLevel: 'Kavrama ve Çıkarım',
          skillTag: 'Bilimsel Muhakeme',
          contextTitle: 'Patates Yumrusunun Eşeysiz Çoğalması',
          scenario: 'Bir çiftçi patates yumrusunu bıçakla dört parçaya bölüyor. Her parçanın üzerinde en az bir çimlenme gözü bulunuyor. Nemli toprağa dikilen ve düzenli sulanan dört parçadan birkaç hafta sonra dört adet yeni patates bitkisi gelişiyor.',
          questionPrompt: 'Bu üreme faaliyeti ve elde edilen yeni patates bitkileriyle ilgili aşağıdaki değerlendirmelerden hangisi yanlıştır?',
          options: [
            { key: 'A', text: 'Patates bitkisi eşeyli üreme ile çoğaltılmıştır.' },
            { key: 'B', text: 'Oluşan yeni bitkilerin kalıtsal yapısı ana bitki ile tamamen aynıdır.' },
            { key: 'C', text: 'Patatesin vejetatif üreme yöntemiyle çoğalması sağlanmıştır.' },
            { key: 'D', text: 'Bu çoğalma sürecinde dişi ve erkek üreme hücreleri görev yapmamıştır.' }
          ],
          correctAnswer: 'A',
          explanation: 'Patates yumrusunun bölünerek ekilmesi vejetatif (eşeysiz) üremedir. Eşeysiz üremede üreme hücreleri görev almaz ve yavrular ana bitkiyle aynı genetik yapıdadır. Dolayısıyla eşeyli üreme ifadesi yanlıştır.'
        },
        {
          id: 2,
          theme: 'Çiçekli Bitkilerde Tozlaşma Faktörleri',
          cognitiveLevel: 'Analiz ve İlişkilendirme',
          skillTag: 'Deney ve Gözlem Yorumlama',
          contextTitle: 'Bitkiler Arası Polen Transferi',
          scenario: 'Bir elma bahçesinde birinci elma ağacının çiçeklerindeki erkek organ başçıklarında üretilen polenlerin, yakındaki ikinci elma ağacının çiçeklerindeki dişi organın dişicik tepesine ulaştığı gözlemleniyor.',
          questionPrompt: 'Bu tozlaşma sürecinin gerçekleşmesinde;\\nI. Rüzgâr,\\nII. Bal arıları ve diğer böcekler,\\nIII. Yağmur damlaları ve su akıntısı\\netkenlerinden hangileri doğrudan yardımcı olabilir?',
          options: [
            { key: 'A', text: 'Yalnız II' },
            { key: 'B', text: 'I ve II' },
            { key: 'C', text: 'I ve III' },
            { key: 'D', text: 'I, II ve III' }
          ],
          correctAnswer: 'D',
          explanation: 'Çiçekli bitkilerde polenlerin dişi organa taşınmasında (tozlaşma) rüzgâr, böcekler (özellikle arılar) ve su faktörlerinin tümü görev yapabilir.'
        },
        {
          id: 3,
          theme: 'Tohumun Çimlenmesine Etki Eden Değişkenler',
          cognitiveLevel: 'Değişken Belirleme',
          skillTag: 'Bilimsel Deney Tasarımı',
          contextTitle: 'Fasulye Tohumlarında Çimlenme Deneyi',
          scenario: 'Bir öğrenci özdeş fasulye tohumları ile iki düzenek kuruyor:\\n1. Düzenek: Nemli toprak, 25 °C oda sıcaklığında bekletiliyor.\\n2. Düzenek: Nemli toprak, 0 °C buzdolabında bekletiliyor.\\nHer iki düzenek de hava almaktadır. Bir süre sonra 1. düzenekteki tohumların çimlendiği, 2. düzenekteki tohumların çimlenmediği gözleniyor.',
          questionPrompt: 'Bu deneydeki bağımsız değişken, bağımlı değişken ve kontrol edilen değişken eşleştirmesi hangisinde doğru verilmiştir?',
          options: [
            { key: 'A', text: 'Bağımsız: Oksijen / Bağımlı: Çimlenme / Kontrol Edilen: Sıcaklık' },
            { key: 'B', text: 'Bağımsız: Sıcaklık / Bağımlı: Çimlenme durumu / Kontrol Edilen: Nem ve tohum türü' },
            { key: 'C', text: 'Bağımsız: Su miktarı / Bağımlı: Işık / Kontrol Edilen: Sıcaklık' },
            { key: 'D', text: 'Bağımsız: Sıcaklık / Bağımlı: Su miktarı / Kontrol Edilen: Hava' }
          ],
          correctAnswer: 'B',
          explanation: 'Deneyde araştırmacının bilerek değiştirdiği faktör ortam sıcaklığıdır (bağımsız değişken). Buna bağlı olarak gözlenen sonuç çimlenme durumudur (bağımlı değişken). Sabit tutulan faktörler ise nem ve tohum türüdür.'
        },
        {
          id: 4,
          theme: 'Hayvanlarda Üreme ve Gelişme Sınıflandırması',
          cognitiveLevel: 'Karşılaştırma ve Analiz',
          skillTag: 'Tablo Yorumlama',
          contextTitle: 'Farklı Hayvan Türlerinde Yaşam Döngüsü',
          scenario: 'Dört farklı hayvan incelenmiştir: K (Kurbağa), L (Koyun), M (Tavuk), P (Alabalık). Bu canlıların üreme şekilleri, yavru bakımları ve başkalaşım durumları kaydedilmiştir.',
          questionPrompt: 'Bu canlılarla ilgili aşağıdaki ifadelerden hangisi yanlıştır?',
          options: [
            { key: 'A', text: 'K canlısının yaşam döngüsünde başkalaşım olayı görülür.' },
            { key: 'B', text: 'L canlısı doğurarak çoğalır ve yavrusunu süt ile besler.' },
            { key: 'C', text: 'M canlısı yumurtanın üzerine kuluçkaya yatar ve yavru bakımı gösterir.' },
            { key: 'D', text: 'P canlısının yumurtadan çıkan yavruları ana canlıya benzemez ve başkalaşım geçirir.' }
          ],
          correctAnswer: 'D',
          explanation: 'Alabalık (balıklar) yumurta ile çoğalır ancak yavruları doğrudan küçük balık şeklinde çıkar, başkalaşım geçirmez. Başkalaşım kurbağalarda ve böceklerde görülür.'
        },
        {
          id: 5,
          theme: 'Dişi Üreme Sistemi Yapı ve Organları',
          cognitiveLevel: 'Bilgi ve Görsel Analiz',
          skillTag: 'Şema Yorumlama',
          contextTitle: 'İnsanda Dişi Üreme Anatomisi',
          scenario: 'Dişi üreme sistemi modelinde dört temel bölüm harflerle gösterilmiştir: K (Yumurta kanalı), L (Döl yatağı / Rahim), M (Yumurtalık), P (Vajina).',
          questionPrompt: 'Bu yapı ve organların adları ile görevleri eşleştirildiğinde hangisi doğrudur?',
          options: [
            { key: 'A', text: 'K: Yumurta kanalı – Döllenmenin gerçekleştiği yerdir.' },
            { key: 'B', text: 'L: Yumurtalık – Döllenmemiş yumurtayı üretir.' },
            { key: 'C', text: 'M: Döl yatağı – Bebeğin doğuma kadar geliştiği yerdir.' },
            { key: 'D', text: 'P: Yumurta kanalı – Spermlerin depolandığı yerdir.' }
          ],
          correctAnswer: 'A',
          explanation: 'K bölümü yumurta kanalıdır ve döllenmenin (sperm ile yumurtanın kaynaşmasının) gerçekleştiği yerdir. L döl yatağı, M yumurtalık, P ise vajinadır.'
        },
        {
          id: 6,
          theme: 'İnsanda Büyüme ve Gelişme Basamakları',
          cognitiveLevel: 'Sıralama ve Süreç Takibi',
          skillTag: 'Biyolojik Süreç Analizi',
          contextTitle: 'Döllenmeden Bebeğe Gelişim Zinciri',
          scenario: 'İnsanda üreme sürecinde gerçekleşen basamaklar ve oluşan canlı yapıları şematize edilmiştir: Yumurta ve spermin çekirdekleri birleşir (1), oluşan tek hücre bölünerek çoğalır (2), organ taslakları belirir (3), doğuma hazır hâle gelir (4).',
          questionPrompt: 'Bu süreçte sırasıyla oluşan yapılar aşağıdakilerden hangisinde doğru verilmiştir?',
          options: [
            { key: 'A', text: 'Zigot – Embriyo – Fetüs – Bebek' },
            { key: 'B', text: 'Zigot – Bebek – Fetüs – Embriyo' },
            { key: 'C', text: 'Embriyo – Zigot – Fetüs – Bebek' },
            { key: 'D', text: 'Fetüs – Zigot – Embriyo – Bebek' }
          ],
          correctAnswer: 'A',
          explanation: 'Döllenme sonucu oluşan ilk hücre zigottur. Zigotun hücre bölünmeleriyle embriyo oluşur. 2. aydan sonra canlıya fetüs denir ve gelişim tamamlanınca bebek olarak doğar.'
        },
        {
          id: 7,
          theme: 'Mikroskopta Tek Hücreli Canlıda Bölünme',
          cognitiveLevel: 'Muhakeme ve Yorumlama',
          skillTag: 'Bilimsel Metin Analizi',
          contextTitle: 'Öglenanın Üreme Davranışı',
          scenario: 'Bir biyoloji öğrencisi mikroskopta öglena hücresini incelerken canlının boyuna doğru boğumlanarak iki ayrı öglenaya ayrıldığını ve her iki yeni bireyin de bağımsız hareket ettiğini gözlemliyor.',
          questionPrompt: 'Öğrencinin gözlemlediği bu olayla ilgili aşağıdaki çıkarımlardan hangisi sadece tek hücreli canlılara özgü bir durumdur?',
          options: [
            { key: 'A', text: 'Bölünme olayının doğrudan canlının çoğalması (birey sayısının artması) anlamına gelmesi' },
            { key: 'B', text: 'Kalıtsal özelliklerin yeni nesle aktarılması' },
            { key: 'C', text: 'Oluşan yavruların çevreye uyum sağlaması' },
            { key: 'D', text: 'Hücre çekirdeğindeki genetik bilginin kopyalanması' },
            { key: 'D', text: 'Metabolik faaliyetlerin sürdürülmesi' }
          ],
          correctAnswer: 'A',
          explanation: 'Çok hücreli canlılarda hücre bölünmesi büyüme, gelişme ve onarımı sağlarken, tek hücreli canlılarda bölünme doğrudan üreme (çoğalma) anlamına gelir.'
        },
        {
          id: 8,
          theme: 'Çiçeğin Kısımları ve Fonksiyon Kaybı',
          cognitiveLevel: 'Çıkarım ve Hipotez',
          skillTag: 'Sistem Analizi',
          contextTitle: 'Çiçek Modeli Üzerinde Deney',
          scenario: 'Bir öğrenci bahçedeki çiçekli bir bitkinin çiçeklerinden dişi organın yumurtalık kısmını (M) keserek çıkartıyor, taç yapraklar ve erkek organlara ise dokunmuyor.',
          questionPrompt: 'Bu işlem sonucunda çiçeğin hangi işlevi kesinlikle gerçekleşemez?',
          options: [
            { key: 'A', text: 'Tohum ve meyve oluşumu' },
            { key: 'B', text: 'Çiçeğin dal üzerinde tutunması' },
            { key: 'C', text: 'Erkek organda polenlerin üretilmesi' },
            { key: 'D', text: 'Taç yaprakların koku ve renk yayması' }
          ],
          correctAnswer: 'A',
          explanation: 'Yumurtalık kesilip çıkartıldığında döllenme ve tohum taslağının gelişimi gerçekleşemez; dolayısıyla tohum ve meyve oluşumu imkânsız hale gelir.'
        },
        {
          id: 9,
          theme: 'Hayvanlarda Üreme Özellikleri Tablosu',
          cognitiveLevel: 'Tablo Yorumlama',
          skillTag: 'Karşılaştırmalı Analiz',
          contextTitle: 'Canlıların Üreme Stratejileri',
          scenario: 'Tabloda dört canlı türü özetlenmiştir:\\n• K: Yumurta ile çoğalır, başkalaşım yok, yavru bakımı var.\\n• L: Doğurarak çoğalır, başkalaşım yok, yavru bakımı var.\\n• M: Yumurta ile çoğalır, başkalaşım yok, yavru bakımı yok.\\n• P: Yumurta ile çoğalır, başkalaşım var, yavru bakımı yok.',
          questionPrompt: 'Tavuk, balina, kaplumbağa ve kurbağa canlılarının K, L, M, P ile doğru eşleştirmesi hangisidir?',
          options: [
            { key: 'A', text: 'K: Tavuk, L: Balina, M: Kaplumbağa, P: Kurbağa' },
            { key: 'B', text: 'K: Balina, L: Tavuk, M: Kurbağa, P: Kaplumbağa' },
            { key: 'C', text: 'K: Tavuk, L: Kaplumbağa, M: Balina, P: Kurbağa' },
            { key: 'D', text: 'K: Kurbağa, L: Balina, M: Tavuk, P: Kaplumbağa' }
          ],
          correctAnswer: 'A',
          explanation: 'Tavuk yumurtlar ve yavrusuna bakar (K). Balina memelidir, doğurur ve bakar (L). Kaplumbağa sürüngendir, yumurtlar ama bakmaz (M). Kurbağa yumurtlar ve başkalaşım geçirir (P).'
        },
        {
          id: 10,
          theme: 'İnsanda Üreme Hücrelerinin Karşılaşması',
          cognitiveLevel: 'Mantıksal Muhakeme',
          skillTag: 'Fizyolojik Süreç Takibi',
          contextTitle: 'Üreme Sisteminde Yapı-Görev Analizi',
          scenario: 'Bir araştırmacı insandaki üreme sistemini incelerken sperm hücresinin testiste üretildikten sonra sperm kanalıyla penise taşındığını; dişi bireyde yumurtanın yumurtalıkta üretilip yumurta kanalına geçtiğini inceliyor.',
          questionPrompt: 'Üreme hücrelerinin üretimi ve döllenmenin gerçekleştiği yerler sırasıyla hangisinde doğru verilmiştir?',
          options: [
            { key: 'A', text: 'Üretim: Testis ve Yumurtalık / Döllenme: Yumurta kanalı' },
            { key: 'B', text: 'Üretim: Penis ve Vajina / Döllenme: Döl yatağı' },
            { key: 'C', text: 'Üretim: Testis ve Yumurtalık / Döllenme: Döl yatağı' },
            { key: 'D', text: 'Üretim: Sperm kanalı ve Yumurtalık / Döllenme: Vajina' }
          ],
          correctAnswer: 'A',
          explanation: 'Sperm testiste, yumurta yumurtalıkta üretilir. İki hücrenin çekirdeklerinin birleştiği döllenme olayı ise yumurta kanalında gerçekleşir.'
        },
        {
          id: 11,
          theme: 'Maya Mantarında Tomurcuklanma',
          cognitiveLevel: 'Deney ve Gözlem',
          skillTag: 'Günlük Yaşam Bağlantısı',
          contextTitle: 'Hamurun Kabarma Süreci',
          scenario: 'Bir öğrenci ılık su, un, şeker ve bira mayasını karıştırarak hamur yoğuruyor. Bir süre ılık ortamda bekletildiğinde hamurun gözle görülür şekilde kabardığı ve hacminin arttığı belirleniyor.',
          questionPrompt: 'Hamurun kabarmasını sağlayan maya mantarlarının çoğalmasıyla ilgili hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Vücudunda oluşan çıkıntıların gelişmesiyle tomurcuklanarak çoğalmıştır.' },
            { key: 'B', text: 'Eşeyli üreme ile yumurta oluşturarak çoğalmıştır.' },
            { key: 'C', text: 'Döllenme gerçekleşerek kalıtsal çeşitlilik oluşmuştur.' },
            { key: 'D', text: 'Kopan parçalarının yenilenmesiyle rejenerasyon geçirmiştir.' }
          ],
          correctAnswer: 'A',
          explanation: 'Bira mayası mantarları tomurcuklanma ile eşeysiz çoğalır. Çoğalma sırasında şeker tüketip gaz çıkararak hamurun kabarmasını sağlarlar.'
        },
        {
          id: 12,
          theme: 'Tohumun Çimlenmesinde Işık Faktörü',
          cognitiveLevel: 'Eleştirel Düşünme',
          skillTag: 'Hipotez Sınama',
          contextTitle: 'Işık Çimlenmeyi Etkiler mi?',
          scenario: 'Bir öğrenci "Tohumların çimlenebilmesi için güneş ışığına kesinlikle ihtiyaç vardır" hipotezini test etmek istiyor. İki özdeş saksıya nemli toprak koyup 25 °C sıcaklıkta; birini güneş gören pencere kenarına, diğerini ışık almayan kapalı dolaba koyuyor.',
          questionPrompt: 'Bir hafta sonra her iki saksıdaki tohumların da eşit şekilde çimlendiğini gören öğrenci hangi sonuca ulaşmalıdır?',
          options: [
            { key: 'A', text: 'Hipotezi yanlıştır; çimlenme için ışık zorunlu bir faktör değildir.' },
            { key: 'B', text: 'Hipotezi doğrudur; tohumlar sadece ışıkta çimlenir.' },
            { key: 'C', text: 'Deney hatalıdır çünkü nemli toprak kullanılmıştır.' },
            { key: 'D', text: 'Tohumların çimlenmesi için toprak şarttır.' }
          ],
          correctAnswer: 'A',
          explanation: 'Tohumun çimlenmesi için su, oksijen ve uygun sıcaklık yeterlidir. Klorofili ve yaprağı olmayan tohum ışığa ihtiyaç duymaz; karanlıkta da başarıyla çimlenir.'
        },
        {
          id: 13,
          theme: 'Kurbağada Başkalaşım Aşamaları',
          cognitiveLevel: 'Görsel Sıralama',
          skillTag: 'Döngü Analizi',
          contextTitle: 'Kurbağanın Yaşam Döngüsü',
          scenario: 'Kurbağanın suda başlayan yaşam döngüsünde sırasıyla şu değişimler gözlenir: 1. Suya bırakılan yumurtaların döllenmesi, 2. Yumurtadan çıkan balık benzeri larva, 3. Kuyruklu iribaş evresi, 4. Bacakları çıkan yavru kurbağa, 5. Kuyruğunu kaybeden ergin kurbağa.',
          questionPrompt: 'Kurbağaların bu şekilde başkalaşım geçirmesinin temel nedeni nedir?',
          options: [
            { key: 'A', text: 'Yumurtada embriyonun gelişimini tamamlamasına yetecek kadar besin bulunmaması' },
            { key: 'B', text: 'Suda çözünmüş oksijen miktarının havadan fazla olması' },
            { key: 'C', text: 'Kurbağaların eşeysiz üreme yöntemiyle çoğalması' },
            { key: 'D', text: 'Kurbağa yavrularının yavru bakımıyla büyümesi' }
          ],
          correctAnswer: 'A',
          explanation: 'Kurbağa yumurtalarında besin maddesi (vitellus) az olduğu için yavru gelişimini tamamlayamadan dışarı çıkar ve başkalaşım geçirerek ergin hale gelir.'
        },
        {
          id: 14,
          theme: 'Eşeysiz Üremede Kalıtsal Karakterler',
          cognitiveLevel: 'Genetik Mantık',
          skillTag: 'Bilimsel İlke',
          contextTitle: 'Kırmızı Gül Çeliğinden Üretim',
          scenario: 'Bir çiçekçi, çok güzel kokulu ve kırmızı çiçekli bir gül bitkisinin gövdesinden bir dal keserek nemli toprağa ekiyor. Dal köklenip büyüyerek yeni bir gül bitkisi meydana getiriyor.',
          questionPrompt: 'Oluşan yeni gül bitkisinin çiçek rengi, kokusu ve genetik yapısı ile ilgili hangisi söylenebilir?',
          options: [
            { key: 'A', text: 'Vejetatif üreme olduğu için ana bitkiyle tamamen aynı genetik yapı ve çiçek rengine sahip olur.' },
            { key: 'B', text: 'Eşeyli üreme olduğu için ana bitkiden farklı renkte çiçek açar.' },
            { key: 'C', text: 'Döllenme gerçekleştiği için yeni gen kombinasyonları oluşur.' },
            { key: 'D', text: 'Yalnızca tohumla çoğaltıldığında ana bitkinin özelliklerini koruyabilir.' }
          ],
          correctAnswer: 'A',
          explanation: 'Gövde dalından köklendirme vejetatif eşeysiz üremedir. Eşeysiz üremede genetik çeşitlilik oluşmaz, oluşan yeni bitki ana bitkinin genetik bir kopyasıdır.'
        },
        {
          id: 15,
          theme: 'Kuşlarda Üreme ve Yavru Bakımı Stratejisi',
          cognitiveLevel: 'Ekolojik Muhakeme',
          skillTag: 'Canlı Davranışı',
          contextTitle: 'Kaya Kartalının Yuva Hayatı',
          scenario: 'Kaya kartalları yüksek kayalıklara korunaklı yuva yapar. Yumurtalarını sert kabukla örter ve üzerlerinde kuluçkaya yatarlar. Yavrular yumurtadan çıktığında anne ve baba kartal avladıkları besinleri yuvaya taşıyarak yavruyu besler ve uçma eğitimi verir.',
          questionPrompt: 'Bu durumla ilgili olarak aşağıdaki çıkarımlardan hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Kaya kartallarında yumurta ile çoğalma ve belirgin bir yavru bakımı davranışı görülür.' },
            { key: 'B', text: 'Kaya kartalları başkalaşım geçirerek yetişkin hale gelir.' },
            { key: 'C', text: 'Yavruların beslenmesi ve korunması memeli hayvanlara özgüdür, kuşlarda bulunmaz.' },
            { key: 'D', text: 'Döllenme olayı anne vücudu dışında, açık havada gerçekleşir.' }
          ],
          correctAnswer: 'A',
          explanation: 'Kuşlar yumurtlar, kuluçkaya yatar ve yavrularını besleyip koruyarak yavru bakımı sergiler. Başkalaşım geçirmezler.'
        },
        {
          id: 16,
          theme: 'Tarım Alanlarında Aşırı İlaçlama ve Tozlaşma Dengesi',
          cognitiveLevel: 'Sebep-Sonuç Analizi',
          skillTag: 'Ekolojik Muhakeme',
          contextTitle: 'Meyve Bahçesinde Verim Kaybı',
          scenario: 'Bir elma üreticisi, zararlı böcekleri yok etmek için ağaçlar çiçek açmadan önce aşırı dozda tarım ilacı kullanıyor. Bahçedeki zararlı böceklerin yanında bal arıları da yok oluyor. Ağaçlar bol çiçek açmasına rağmen hasat zamanı neredeyse hiç elma oluşmadığı görülüyor.',
          questionPrompt: 'Bol çiçek açmasına rağmen meyve veriminin bu denli düşmesinin bilimsel gerekçesi nedir?',
          options: [
            { key: 'A', text: 'Arıların ölmesiyle çiçekler arasında tozlaşma gerçekleşememiş ve döllenme olmamıştır.' },
            { key: 'B', text: 'Tarım ilacı ağaçların köklerinden su almasını tamamen engellemiştir.' },
            { key: 'C', text: 'Ağaçların çiçek sapları kuruduğu için çiçekler dökülmüştür.' },
            { key: 'D', text: 'Elma ağaçları eşeyli üreme yerine vejetatif üremeye geçmiştir.' }
          ],
          correctAnswer: 'A',
          explanation: 'Çiçekli bitkilerde meyve oluşumu için tozlaşma ve ardından döllenme şarttır. Arılar polenleri taşıyan en önemli tozlaştırıcıdır; arılar yok olunca tozlaşma ve döllenme durur.'
        },
        {
          id: 17,
          theme: 'Denizyıldızında Rejenerasyon ile Üreme',
          cognitiveLevel: 'Tanı ve Kavrama',
          skillTag: 'Biyolojik Süreç',
          contextTitle: 'Denizyıldızının Parçalanması',
          scenario: 'Merkezî diskinden bir parça alacak şekilde ikiye kesilen bir denizyıldızı akvaryuma bırakılıyor. Birkaç ay sonra her iki parçanın da eksik kollarını tamamlayarak iki ayrı sağlıklı denizyıldızına dönüştüğü gözlemleniyor.',
          questionPrompt: 'Bu olayla ilgili aşağıdaki ifadelerden hangisi yanlıştır?',
          options: [
            { key: 'A', text: 'Bu çoğalma sırasında dişi ve erkek üreme hücreleri döllenmiştir.' },
            { key: 'B', text: 'Oluşan iki denizyıldızının kalıtsal yapısı birbiriyle aynıdır.' },
            { key: 'C', text: 'Gerçekleşen olay rejenerasyon (yenilenme) ile üremedir.' },
            { key: 'D', text: 'Ortamdaki denizyıldızı sayısı artmıştır.' }
          ],
          correctAnswer: 'A',
          explanation: 'Rejenerasyon ile üreme bir eşeysiz üreme çeşididir. Eşeysiz üremede üreme hücreleri ve döllenme olayı kesinlikle gerçekleşmez.'
        },
        {
          id: 18,
          theme: 'Çimlenme Şartlarının Test Edilmesi',
          cognitiveLevel: 'Deney Karşılaştırma',
          skillTag: 'Bilimsel Veri Yorumu',
          contextTitle: 'Dört Farklı Çimlenme Kabı',
          scenario: 'Özdeş nohut tohumları kullanılarak dört düzenek hazırlanmıştır:\\nI: Islak pamuk, 20 °C, karanlık kutu\\nII: Islak pamuk, 20 °C, aydınlık oda\\nIII: Kuru pamuk, 20 °C, aydınlık oda\\nIV: Islak pamuk, -5 °C dondurucu',
          questionPrompt: 'Hangi düzeneklerdeki tohumlar çimlenir ve bu sonuç neyi kanıtlar?',
          options: [
            { key: 'A', text: 'I ve II çimlenir; çimlenme için su ve sıcaklık şart iken ışık aranmaz.' },
            { key: 'B', text: 'Yalnız II çimlenir; çimlenme için güneş ışığı zorunludur.' },
            { key: 'C', text: 'Yalnız I çimlenir; tohumlar sadece karanlıkta çimlenebilir.' },
            { key: 'D', text: 'I, II ve III çimlenir; tohum kuru toprakta da çimlenir.' }
          ],
          correctAnswer: 'A',
          explanation: 'I ve II numaralı kaplarda nem, hava ve uygun sıcaklık vardır. Işık çimlenmeyi etkilemediği için hem aydınlıkta hem karanlıkta çimlenme gerçekleşir.'
        },
        {
          id: 19,
          theme: 'İnsanda Döl Yatağı ve Embriyo Gelişimi',
          cognitiveLevel: 'Yapı-Görev Analizi',
          skillTag: 'İnsan Anatomisi',
          contextTitle: 'Embriyonun Anne Vücudundaki Yuvası',
          scenario: 'Yumurta kanalında gerçekleşen döllenme sonrası oluşan zigot bölünerek embriyo haline gelir ve döl yatağına (rahim) ulaşarak buradaki dokuya tutunur. Dokuz ay boyunca büyümesini burada sürdürür.',
          questionPrompt: 'Döl yatağının (rahmin) göreviyle ilgili aşağıdakilerden hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Bebeğin doğumdan önce büyüyüp geliştiği ve korunduğu yerdir.' },
            { key: 'B', text: 'Yumurta hücresinin üretildiği temel organdır.' },
            { key: 'C', text: 'Sperm ve yumurtanın ilk birleştiği döllenme kanalıdır.' },
            { key: 'D', text: 'İdrar ile spermin dışarı atılmasını sağlayan kanaldır.' }
          ],
          correctAnswer: 'A',
          explanation: 'Döl yatağı (rahim), embriyo ve fetüsün doğuma kadar beslenip büyüdüğü, korunaklı kaslı organdır.'
        },
        {
          id: 20,
          theme: 'Kelebeğin Yaşam Döngüsü ve Pupa Evresi',
          cognitiveLevel: 'Metamorfoz Analizi',
          skillTag: 'Biyolojik Döngü',
          contextTitle: 'Tırtıldan Kelebeğe Dönüşüm',
          scenario: 'Kelebek dişi yaprak üzerine yumurtalarını bırakır. Yumurtadan çıkan tırtıl oburca yaprak yer. Yeterince büyüyünce etrafına koza örerek pupa evresine geçer. Pupa içinde yapısal organlar baştan aşağı değişir ve kanatlı kelebek çıkar.',
          questionPrompt: 'Kelebeğin bu döngüsü ile ilgili hangisi söylenemez?',
          options: [
            { key: 'A', text: 'Yavru kelebekler çıktığında ana canlı tarafından sütle beslenerek korunur.' },
            { key: 'B', text: 'Tırtıl evresi canlının larva dönemidir.' },
            { key: 'C', text: 'Pupa evresinde canlı yapısal başkalaşım geçirir.' },
            { key: 'D', text: 'Kelebekler eşeyli üreme ile çoğalan omurgasız hayvanlardır.' }
          ],
          correctAnswer: 'A',
          explanation: 'Kelebekler omurgasızdır, yavru bakımı veya sütle besleme memelilere özgüdür. Kelebeklerde yavru bakımı kesinlikle görülmez.'
        }
      ]
    },
    {
      id: 'g6-u3-sub2',
      title: '2. Denetleyici ve Düzenleyici Sistemler (Sinir Sistemi ve İç Salgı Bezleri)',
      shortTitle: 'Denetleyici & Düzenleyici Sistemler',
      badge: 'Bölüm 2',
      concepts: [
        'Merkezî Sinir Sistemi',
        'Beyin ve Görevleri',
        'Beyincik (Denge Merkezi)',
        'Omurilik Soğanı (Yaşam Düğümü)',
        'Omurilik (Refleks Merkezi)',
        'Çevresel Sinir Sistemi (Nöronlar)',
        'Doğuştan Gelen Refleksler',
        'Sonradan Kazanılan Refleksler',
        'İç Salgı Bezleri',
        'Hipofiz Bezi ve Büyüme Hormonu',
        'Tiroit Bezi ve Tiroksin',
        'Böbrek Üstü Bezi ve Adrenalin',
        'Pankreas, İnsülin ve Glukagon',
        'Eşeysel Bezler ve Hormonlar',
        'Çocukluktan Ergenliğe Geçiş',
        'Ergenlikte Bedensel ve Ruhsal Değişimler',
        'Sistemlerin Sağlığı'
      ],
      simulationId: 'skeleton',
      summarySections: [
        {
          heading: 'Merkezî ve Çevresel Sinir Sisteminin Yapısı ve Görevleri',
          paragraphs: [
            'İnsan vücudunda sindirim, dolaşım, solunum, boşaltım ve duyu organları gibi birçok sistem bulunur. Bu sistemlerin birbirleriyle kusursuz bir uyum ve ahenk içinde çalışmasını denetleyici ve düzenleyici sistemler sağlar. Denetleyici ve düzenleyici sistemler; sinir sistemi ve iç salgı bezlerinden oluşur.',
            'Sinir Sistemi iki ana bölümden oluşur:',
            '1. Merkezî Sinir Sistemi: Vücudun yönetim ve kontrol merkezidir. Beyin ve omurilikten meydana gelir. Beynin bölümleri arasında beyincik ve omurilik soğanı da yer alır.',
            '  • Beyin: Kafatası içindedir. Öğrenme, hafıza, zekâ ve düşünme merkezidir. Beş duyu organından gelen bilgileri değerlendirir. İstemli kas hareketlerini (yürüme, koşma, konuşma, eşya taşıma) yönetir. Vücut sıcaklığını, kan basıncını, acıkma, susama, uyku ve uyanıklık durumlarını kontrol eder.',
            '  • Beyincik: Kafatasının arka alt kısmında yer alır. Kol ve bacak kaslarının birbiriyle uyumlu çalışmasını sağlayarak vücudun dengesini ve hareket koordinasyonunu düzenler.',
            '  • Omurilik Soğanı: Boyun kökünde, beyin ile omurilik arasındadır. Solunum, dolaşım, sindirim ve boşaltım gibi yaşamsal iç sistemlerin çalışmasını düzenler. Yutma, çiğneme, öksürme, hapşırma ve kusma gibi istemsiz iç refleksleri kontrol eder. Yaşamsal önemi nedeniyle "hayat düğümü" olarak da bilinir.',
            '  • Omurilik: Omurga kemiklerinin oluşturduğu kanal içinde uzanır. Dış uyaranlara karşı ani tepkiler olan refleks davranışlarını yönetir. Beyin ile diğer vücut organları arasındaki sinirsel bilgi iletim köprüsüdür.',
            '2. Çevresel Sinir Sistemi: Merkezî sinir sistemini vücudun tüm doku ve organlarına bağlayan sinir hücrelerinden (nöronlardan) oluşur. Duyu organlarından gelen uyarıları merkezî sisteme, merkezden çıkan emirleri kas ve bezlere iletir.'
          ]
        },
        {
          heading: 'Refleksler: Doğuştan Gelen ve Sonradan Kazanılan Refleksler',
          paragraphs: [
            'Vücudun dışarıdan gelen ışık, ses, sıcaklık ve mekanik uyaranlara karşı gösterdiği ani, hızlı ve istemsiz tepkilere refleks denir. Refleksleri omurilik yönetir.',
            '• Doğuştan Gelen (Kalıtsal) Refleksler: Doğumla birlikte var olan, öğrenilmemiş ve tüm insanlarda ortak olarak görülen reflekslerdir.',
            '  Örnekler: Diz kapağına vurulduğunda bacağın fırlaması, yeni doğan bebeğin emme refleksi, eline batan iğne veya sıcak nesneden elin hızla geri çekilmesi, göze cisim yaklaşınca veya parlak ışıkta göz kapaklarının kırpılması ve göz bebeğinin küçülmesi.',
            '• Sonradan Kazanılan (Şartlı) Refleksler: Doğuştan bulunmayan, deneyim ve öğrenme yoluyla kazanılan tepkilerdir. Başlangıçta beyin tarafından öğrenilir, alışkanlık haline geldikten sonra denetimi omuriliğe geçer.',
            '  Örnekler: Limon görünce ağzın sulanması, bisiklet sürmek, araba kullanmak, örgü örmek, yüzmek, müzik aleti çalmak, dans etmek. (Kişi bu hareketleri yaparken hata yaparsa kontrol tekrar beyine geçer).'
          ]
        },
        {
          heading: 'İç Salgı Bezleri, Salgıladıkları Hormonlar ve Görevleri',
          paragraphs: [
            'İç salgı bezleri kimyasal düzenleyicilerdir. Ürettikleri özel salgılara hormon denir. Hormonlar kan yoluyla taşınır ve hedef organlara ulaşarak etkilerini gösterir. Sinir sistemi çok hızlı ve kısa süreli tepki verirken, hormonlar daha yavaş ve uzun süreli düzenleme yapar.',
            'Sinir sistemi ile iç salgı bezleri arasındaki uyum ve koordinasyonu hipofiz bezi sağlar.',
            'Temel İç Salgı Bezleri:',
            '• Hipofiz Bezi: Beynin alt kısmındadır. Büyüme hormonu salgılar; kemik ve kasların büyümesini yönetir. Az salgılanırsa cücelik, fazla salgılanırsa devlik oluşur. Diğer tüm iç salgı bezlerinin çalışmasını denetler.',
            '• Tiroit Bezi: Gırtlağın altında yer alır. Tiroksin hormonu salgılar; vücuttaki kimyasal metabolizma hızını, hücrelerin enerji tüketimini ve büyümeyi düzenler.',
            '• Böbrek Üstü Bezi: Böbreklerin üzerinde yer alır (böbrekle doğrudan görev bağlantısı yoktur). Adrenalin hormonu salgılar; korku, öfke, sevinç, heyecan ve tehlike anlarında kalp atışını hızlandırır, kan basıncını yükseltir ve solunumu hızlandırır.',
            '• Pankreas: Hem sindirim enzimi hem hormon salgılayan karma bezdir. İki önemli hormon üretir:',
            '  1) İnsülin: Yemeklerden sonra kanda aşırı yükselen şeker oranını hücrelere ve karaciğere geçirerek normal seviyeye DÜŞÜRÜR.',
            '  2) Glukagon: Açlık anında kanda düşen şeker oranını karaciğerdeki glikojeni şekere çevirerek normal seviyeye YÜKSELTİR.',
            '• Eşeysel Bezler: Erkeklerde testisler (testosteron hormonu), dişilerde yumurtalıklar (östrojen hormonu). Ergenlik döneminde cinsiyete özgü bedensel özelliklerin gelişmesini sağlar.'
          ]
        },
        {
          heading: 'Çocukluktan Ergenliğe Geçiş ve Sağlıklı Yaşam',
          paragraphs: [
            'Bireyin çocukluk döneminden yetişkinlik dönemine geçiş evresine ergenlik adı verilir (genellikle 10-19 yaş arası). Kızlar genellikle 10-12, erkekler 12-14 yaşlarında girer. Giriş yaşı genetik, beslenme, iklim ve çevre koşullarından etkilenir.',
            '• Bedensel Değişimler:',
            '  - Sadece Erkeklerde: Sesin kalınlaşması, yüzde sakal ve bıyık çıkması.',
            '  - Sadece Kızlarda: Kalça kemiklerinin genişlemesi, göğüslerin belirginleşmesi, âdet döngüsünün (regl) başlaması.',
            '  - Ortak Bedensel Değişimler: Boy uzaması ve kilo artışı, kasların gelişip güçlenmesi, koltuk altı ve kasık bölgesinde kıllanma, ter bezlerinin çalışmasının artması, yüzde ergenlik sivilcelerinin çıkması, üreme organlarının gelişimi.',
            '• Ruhsal ve Duygusal Değişimler: Bağımsızlık ve özerklik isteği, yalnız kalma eğilimi, hızlı duygu değişimleri (neşe, öfke, alınganlık), gelecekle ilgili kaygılar ve meslek hayalleri kurma, arkadaş grubuna dahil olma ihtiyacı.',
            '• Sistemlerin Sağlığı: Düzenli uyku, dengeli beslenme, kişisel hijyen (düzenli banyo), spor yapma, teknoloji bağımlılığından ve sigara-alkol gibi zararlı maddelerden uzak durma.'
          ]
        }
      ],
      glossary: [
        { term: 'Nöron', definition: 'Sinir sisteminde bilgileri elektriksel ve kimyasal sinyallerle ileten sinir hücresi.' },
        { term: 'Refleks', definition: 'Vücudun dıştan gelen ani uyaranlara karşı omurilik denetiminde istemsizce gösterdiği hızlı koruyucu tepki.' },
        { term: 'Hormon', definition: 'İç salgı bezleri tarafından kana salgılanıp hedef organların çalışmasını düzenleyen kimyasal madde.' },
        { term: 'Hipofiz Bezi', definition: 'Beynin altında bulunan, büyüme hormonu üreten ve diğer tüm iç salgı bezlerini yöneten ana bez.' },
        { term: 'İnsülin & Glukagon', definition: 'Pankreastan salgılanarak kan şekerini dengede tutan hormon çifti (insülin düşürür, glukagon yükseltir).' },
        { term: 'Adrenalin', definition: 'Böbrek üstü bezlerinden ani korku ve heyecan anında salgılanarak vücudu alarma geçiren hormon.' }
      ],
      trueFalseQuestions: [
        {
          id: 1,
          statement: 'İnsanda sinir sistemi ve iç salgı bezleri denetleyici ve düzenleyici sistemleri oluşturur.',
          isCorrect: true,
          explanation: 'Doğrudur. Vücuttaki tüm sistemlerin uyumlu çalışmasını sinir sistemi ve iç salgı bezleri birlikte koordine eder.'
        },
        {
          id: 2,
          statement: 'Sinir hücreleri (nöronlar) yalnızca çevresel sinir sisteminde yer alır, merkezî sinir sisteminde bulunmaz.',
          isCorrect: false,
          explanation: 'Yanlıştır. Beyin, beyincik, omurilik soğanı ve omurilik dâhil tüm sinir sistemi milyarlarca nörondan oluşur.'
        },
        {
          id: 3,
          statement: 'Merkezî sinir sistemi beyin ve omurilikten meydana gelir.',
          isCorrect: true,
          explanation: 'Doğrudur. Beyincik ve omurilik soğanı da beynin bölümleri olarak merkezî sinir sistemine dahildir.'
        },
        {
          id: 4,
          statement: 'Kol ve bacak kaslarının koordinasyonunu sağlayarak vücudun hareket dengesini koruyan merkez beyinciktir.',
          isCorrect: true,
          explanation: 'Doğrudur. Beyincik kulaktaki yarım daire kanallarıyla birlikte vücudun dengesini sağlar.'
        },
        {
          id: 5,
          statement: 'Yutma, çiğneme, öksürme, hapşırma ve kusma gibi istemsiz olayları beyin yönetir.',
          isCorrect: false,
          explanation: 'Yanlıştır. Bu iç refleksleri ve hayati sistemlerin çalışmasını omurilik soğanı kontrol eder.'
        },
        {
          id: 6,
          statement: 'Dolaşım, solunum, sindirim ve boşaltım gibi yaşamsal sistemlerin düzenlenmesi omurilik soğanının kontrolündedir.',
          isCorrect: true,
          explanation: 'Doğrudur. Omurilik soğanı yaşamsal organları denetlediği için hayat düğümü olarak bilinir.'
        },
        {
          id: 7,
          statement: 'Öğrenme, hafıza, düşünme, konuşma ve duyu organlarından gelen verilerin değerlendirilmesi beyin tarafından gerçekleştirilir.',
          isCorrect: true,
          explanation: 'Doğrudur. Bilinçli faaliyetlerin, öğrenmenin ve duyuların yönetim merkezi beyindir.'
        },
        {
          id: 8,
          statement: 'Omurilik, beyin ile vücut organları arasındaki sinirsel bilgi iletimini sağlar ve refleks davranışlarını yönetir.',
          isCorrect: true,
          explanation: 'Doğrudur. Omurga kanalı içinde uzanan omurilik reflekslerin yönetim merkezidir.'
        },
        {
          id: 9,
          statement: 'Sert bir cisimle diz kapağına vurulduğunda ayağın ileri fırlaması sonradan kazanılan bir reflekstir.',
          isCorrect: false,
          explanation: 'Yanlıştır. Diz kapağı refleksi doğuştan gelen, öğrenilmemiş kalıtsal bir reflekstir.'
        },
        {
          id: 10,
          statement: 'Limon görünce ağzın sulanması ve bisiklet sürmek sonradan kazanılan refleks davranışlarına örnektir.',
          isCorrect: true,
          explanation: 'Doğrudur. Tadı önceden öğrenilen ve pratikle alışkanlığa dönüşen davranışlar sonradan kazanılan reflekstir.'
        },
        {
          id: 11,
          statement: 'İç salgı bezlerinin salgıladığı kimyasal maddelere hormon denir ve hormonlar kan yoluyla taşınır.',
          isCorrect: true,
          explanation: 'Doğrudur. Hormonlar doğrudan kana verilir ve kan dolaşımıyla hedef organlara ulaşır.'
        },
        {
          id: 12,
          statement: 'Sinir sistemi ile iç salgı bezleri arasındaki uyumu sağlayan ve diğer bezleri yöneten ana bez hipofiz bezidir.',
          isCorrect: true,
          explanation: 'Doğrudur. Hipofiz bezi salgıladığı hormonlarla diğer iç salgı bezlerinin çalışmasını denetler.'
        },
        {
          id: 13,
          statement: 'Hipofiz bezinin salgıladığı büyüme hormonu vücudun büyüme ve gelişmesini sağlar.',
          isCorrect: true,
          explanation: 'Doğrudur. Büyüme hormonu kemik ve kas gelişimini yönetir; eksikliğinde cücelik, fazlalığında devlik oluşur.'
        },
        {
          id: 14,
          statement: 'Tiroit bezi tarafından salgılanan tiroksin hormonu vücuttaki metabolizma hızını ve kimyasal olayları düzenler.',
          isCorrect: true,
          explanation: 'Doğrudur. Tiroksin hormonu vücudun enerji kullanım hızını ayarlar.'
        },
        {
          id: 15,
          statement: 'Korku, öfke, stres ve heyecan anında böbrek üstü bezlerinden salgılanan adrenalin hormonu kalp atışını hızlandırır.',
          isCorrect: true,
          explanation: 'Doğrudur. Adrenalin hormonu acil durumlarda vücudu harekete geçirir ve solunumu hızlandırır.'
        },
        {
          id: 16,
          statement: 'İnsülin hormonu kandaki şeker oranını artırırken, glukagon hormonu kan şekerini düşürür.',
          isCorrect: false,
          explanation: 'Yanlıştır. İnsülin kan şekerini düşürür (indirir), glukagon ise açlıkta düşen kan şekerini yükseltir.'
        },
        {
          id: 17,
          statement: 'Pankreas bezi hem sindirim enzimi hem de insülin ve glukagon hormonlarını salgılayan karma bir bezdir.',
          isCorrect: true,
          explanation: 'Doğrudur. Pankreas hem sindirim sistemine hem de dolaşım sistemine salgı yapar.'
        },
        {
          id: 18,
          statement: 'Ergenlik döneminde erkeklerde testosteron, kızlarda östrojen hormonu cinsiyete özgü bedensel değişimleri sağlar.',
          isCorrect: true,
          explanation: 'Doğrudur. Eşeysel bezler cinsiyet hormonları salgılayarak ergenlik özelliklerini oluşturur.'
        },
        {
          id: 19,
          statement: 'Ergenliğe başlama ve bitiş yaşı tüm bireylerde tamamen aynıdır.',
          isCorrect: false,
          explanation: 'Yanlıştır. Ergenlik yaşı genetik özellikler, beslenme, iklim ve çevresel faktörlere göre kişiden kişiye değişir.'
        },
        {
          id: 20,
          statement: 'Sesin kalınlaşması sadece erkeklerde, kalça kemiklerinin genişlemesi sadece kızlarda görülen bedensel değişimdir.',
          isCorrect: true,
          explanation: 'Doğrudur. Ses kalınlaşması erkeklere, kalça genişlemesi kızlara özgü bedensel değişimlerdir.'
        },
        {
          id: 21,
          statement: 'Ergenlik sivilcelerinin çıkması, boyun uzaması ve kasların güçlenmesi hem kız hem erkeklerde ortak görülen değişimlerdir.',
          isCorrect: true,
          explanation: 'Doğrudur. Bu değişimler ergenlik çağındaki tüm gençlerde ortak olarak meydana gelir.'
        },
        {
          id: 22,
          statement: 'Ergenlik döneminde bağımsızlık arayışı, hızlı duygu dalgalanmaları ve gelecek kaygısı yaşanması doğaldır.',
          isCorrect: true,
          explanation: 'Doğrudur. Ergenlik dönemi hem bedensel hem de ruhsal ve duygusal değişimlerin yoğun olduğu bir evredir.'
        },
        {
          id: 23,
          statement: 'Ergenlik döneminde ter salgısı arttığı için banyo yapma sıklığı azaltılmalıdır.',
          isCorrect: false,
          explanation: 'Yanlıştır. Ter bezleri fazla çalıştığı için kişisel temizliğe daha çok özen gösterilmeli ve düzenli banyo yapılmalıdır.'
        },
        {
          id: 24,
          statement: 'Ateşe veya sıcak tencereye dokunulduğunda elin hızla geri çekilmesi beyin tarafından değerlendirildikten sonra gerçekleşir.',
          isCorrect: false,
          explanation: 'Yanlıştır. Refleksler omurilik tarafından istemsizce ve çok hızlı yönetilir; acı hissi sonradan beyne ulaşır.'
        },
        {
          id: 25,
          statement: 'Düzenli uyku, dengeli beslenme ve spor yapmak denetleyici ve düzenleyici sistemlerin sağlıklı çalışmasını destekler.',
          isCorrect: true,
          explanation: 'Doğrudur. Sağlıklı yaşam alışkanlıkları hem sinir sistemini hem de hormonal dengeyi korur.'
        }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Merkezî Sinir Sistemi Organları ve Görevleri',
          cognitiveLevel: 'Görsel Eşleştirme',
          skillTag: 'Anatomi ve Fonksiyon',
          contextTitle: 'Merkezî Sinir Sistemi Şeması',
          scenario: 'Kafatasında ve omurga kanalında bulunan merkezî sinir sistemi kısımları harflerle gösterilmiştir: K (Beyin), L (Omurilik soğanı), M (Beyincik), P (Omurilik).',
          questionPrompt: 'Bu bölümlerin isimleri ve insan yaşamındaki temel görevleri hangisinde doğru eşleştirilmiştir?',
          options: [
            { key: 'A', text: 'K: Beyin – Hafıza ve öğrenme / M: Beyincik – Denge ve hareket / L: Omurilik Soğanı – Yaşamsal refleksler' },
            { key: 'B', text: 'K: Beyincik – Duyu değerlendirme / L: Omurilik – Hafıza / M: Beyin – Refleks yönetimi' },
            { key: 'C', text: 'K: Beyin – Refleks / M: Omurilik Soğanı – Denge / P: Beyincik – Yutma' },
            { key: 'D', text: 'K: Omurilik Soğanı – Denge / L: Beyin – Solunum / M: Omurilik – Düşünme' }
          ],
          correctAnswer: 'A',
          explanation: 'K beyindir (hafıza, öğrenme), M beyinciktir (denge ve kas uyumu), L omurilik soğanıdır (solunum, yutma, dolaşım), P ise omuriliktir (refleksler).'
        },
        {
          id: 2,
          theme: 'Refleks Davranışı ve Sinir Yolu',
          cognitiveLevel: 'Mekanizma Analizi',
          skillTag: 'Biyolojik Süreç',
          contextTitle: 'Diz Kapağı Refleksi Deneyi',
          scenario: 'Bir hekim muayene sırasında hastanın diz kapağının altındaki tendona özel plastik çekiçle hafifçe vuruyor. Duyu nöronları bilgiyi omuriliğe taşıyor, omurilikteki değerlendirme sonrası motor nöronlarla bacak kaslarına uyarı gidiyor ve bacak aniden öne fırlıyor.',
          questionPrompt: 'Gerçekleşen bu olayla ilgili aşağıdaki değerlendirmelerden hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Olay istemsizce ve omurilik denetiminde çok hızlı gerçekleşmiştir.' },
            { key: 'B', text: 'Değerlendirmeyi yapan sinir merkezi beyindir ve hareket bilinçli yapılmıştır.' },
            { key: 'C', text: 'Nöronlar sadece kaslara bilgi iletir, duyu bilgisini taşımaz.' },
            { key: 'D', text: 'Bu davranış sonradan kazanılan reflekslere örnektir.' }
          ],
          correctAnswer: 'A',
          explanation: 'Diz kapağı refleksi omurilik tarafından yönetilen doğuştan gelen, istemsiz ve ani bir reflekstir.'
        },
        {
          id: 3,
          theme: 'Ani Tehlike Anında Hormonal Tepki',
          cognitiveLevel: 'Uygulama ve Çıkarım',
          skillTag: 'Fizyolojik Mantık',
          contextTitle: 'Sokakta Köpekle Karşılaşan Öğrenci',
          scenario: 'Okuldan eve dönen bir öğrencinin karşısına aniden havlayan bir köpek çıkıyor. Öğrenci büyük bir korku ve heyecan yaşıyor. Bu sırada kalp atışlarının hızlandığı, soluk alıp vermesinin sıklaştığı ve kan basıncının arttığı gözleniyor.',
          questionPrompt: 'Bu durumda öğrencinin vücudunda salgılanan hormon ve bu hormonu salgılayan iç salgı bezi hangisidir?',
          options: [
            { key: 'A', text: 'Adrenalin hormonu – Böbrek üstü bezi' },
            { key: 'B', text: 'Tiroksin hormonu – Tiroit bezi' },
            { key: 'C', text: 'İnsülin hormonu – Pankreas' },
            { key: 'D', text: 'Büyüme hormonu – Hipofiz bezi' }
          ],
          correctAnswer: 'A',
          explanation: 'Korku, öfke, heyecan ve stres durumlarında böbrek üstü bezlerinden salgılanan adrenalin hormonu kalp atışını ve solunumu hızlandırarak vücudu kaçmaya veya savunmaya hazırlar.'
        },
        {
          id: 4,
          theme: 'Ergenlik Döneminde Bedensel Değişimler',
          cognitiveLevel: 'Sorgulama ve Karşılaştırma',
          skillTag: 'Biyolojik Bilgi',
          contextTitle: 'Ergenlik Gelişim Soruları',
          scenario: 'Fen bilimleri öğretmeninin ergenlik konusuyla ilgili tahtaya yazdığı sorular:\\n1. Ergenlik döneminde bireylerde cinsiyete özgü özellikler gelişir mi?\\n2. Ergenlik dönemine genel olarak kızlar mı yoksa erkekler mi daha önce başlar?\\n3. Ergenliğe giriş yaşını beslenme, iklim ve çevresel koşullar etkiler mi?',
          questionPrompt: 'Bu soruların doğru cevapları sırasıyla hangisinde verilmiştir?',
          options: [
            { key: 'A', text: '1: Evet / 2: Kızlar / 3: Evet' },
            { key: 'B', text: '1: Evet / 2: Erkekler / 3: Evet' },
            { key: 'C', text: '1: Hayır / 2: Kızlar / 3: Hayır' },
            { key: 'D', text: '1: Evet / 2: Erkekler / 3: Hayır' }
          ],
          correctAnswer: 'A',
          explanation: 'Ergenlikte cinsiyete özgü özellikler gelişir (Evet). Kız çocukları genellikle 10-12 yaşlarında girerek erkeklerden önce başlar (Kızlar). Çevre, beslenme ve iklim ergenlik yaşını etkiler (Evet).'
        },
        {
          id: 5,
          theme: 'Merkezî Sinir Sisteminin Hayati Görevleri',
          cognitiveLevel: 'İlişkilendirme',
          skillTag: 'Sistem Entegrasyonu',
          contextTitle: 'Dört Farklı Yaşamsal Olay',
          scenario: 'İnsan vücudunda gerçekleşen şu olaylar inceleniyor:\\nI. Görme, işitme ve koklama duyularının değerlendirilmesi\\nII. Dolaşım sistemindeki kalbin ritmik çalışmasının ve soluk alıp vermenin düzenlenmesi\\nIII. İp üzerinde yürüyen cambazın vücut dengesinin sağlanması',
          questionPrompt: 'Bu olaylarda birincil derecede görev yapan merkezî sinir sistemi bölümleri hangisinde doğru verilmiştir?',
          options: [
            { key: 'A', text: 'I: Beyin, II: Omurilik Soğanı, III: Beyincik' },
            { key: 'B', text: 'I: Beyincik, II: Beyin, III: Omurilik' },
            { key: 'C', text: 'I: Omurilik, II: Beyincik, III: Beyin' },
            { key: 'D', text: 'I: Beyin, II: Omurilik, III: Omurilik Soğanı' }
          ],
          correctAnswer: 'A',
          explanation: 'Duyuların değerlendirilmesi beyin, iç organların ve yaşamsal sistemlerin çalışması omurilik soğanı, denge ve kas koordinasyonu ise beyincik tarafından kontrol edilir.'
        },
        {
          id: 6,
          theme: 'Bebeklerde Emme Refleksi ve Sinir Sistemi',
          cognitiveLevel: 'Muhakeme',
          skillTag: 'Davranış Analizi',
          contextTitle: 'Yeni Doğan Bebeğin Beslenmesi',
          scenario: 'Yeni doğan bir bebek doğduktan kısa bir süre sonra hiçbir eğitim almadan annesini emmeye başlamıştır. Bu durum bebeklerde beslenme ihtiyacının karşılanması için hayati önem taşır.',
          questionPrompt: 'Bebeklerin doğar doğmaz bu davranışı sergilemesi aşağıdakilerden hangisine kanıttır?',
          options: [
            { key: 'A', text: 'Doğuştan gelen, kalıtsal bir refleks davranışı olduğuna' },
            { key: 'B', text: 'Sonradan tecrübeyle öğrenilmiş bir alışkanlık olduğuna' },
            { key: 'C', text: 'Yalnızca beyin kabuğu tarafından bilinçli yönetildiğine' },
            { key: 'D', text: 'İç salgı bezlerinin büyüme hormonu salgılamasına bağlı olduğuna' }
          ],
          correctAnswer: 'A',
          explanation: 'Emme refleksi doğuştan gelen ve tüm sağlıklı bebeklerde ortak olarak görülen, omurilik tarafından yönetilen kalıtsal bir reflekstir.'
        },
        {
          id: 7,
          theme: 'Büyüme Hormonu ve Hipofiz Bezi',
          cognitiveLevel: 'Hormonal Bozukluklar',
          skillTag: 'Bilimsel Çıkarım',
          contextTitle: 'Ahmet ve Mehmet’in Boy Farkı',
          scenario: 'Aynı yaşta olan iki arkadaştan Ahmet 2,4 metre boyunda iken Mehmet 1,1 metre boyundadır. Hekimler Ahmet’te devlik, Mehmet’te ise cücelik durumu tespit etmiştir.',
          questionPrompt: 'Bu durumun ortaya çıkmasında rol oynayan büyüme hormonu ve salgılanma durumuyla ilgili hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Ahmet’te hipofiz bezinden normalden fazla, Mehmet’te normalden az büyüme hormonu salgılanmıştır.' },
            { key: 'B', text: 'Ahmet’te tiroit bezinden az, Mehmet’te fazla tiroksin salgılanmıştır.' },
            { key: 'C', text: 'Mehmet’te pankreastan aşırı insülin salgılanması boy uzamasını durdurmuştur.' },
            { key: 'D', text: 'Her iki bireyde de büyüme hormonu normal salgılanmış ancak beslenme etkili olmuştur.' }
          ],
          correctAnswer: 'A',
          explanation: 'Hipofiz bezinden salgılanan büyüme hormonu çocukluk döneminde fazla salgılanırsa devlik (gigantizm), yetersiz salgılanırsa cücelik (nanizm) tablosu oluşur.'
        },
        {
          id: 8,
          theme: 'Ergenlik Belirtilerinden Cinsiyet Tahmini',
          cognitiveLevel: 'Veri Analizi',
          skillTag: 'Mantıksal Muhakeme',
          contextTitle: 'Öğrencinin Günlüğündeki Notlar',
          scenario: 'Ergenlik çağına giren bir öğrenci günlüğüne şunları yazıyor:\\n• Yüzümde sivilceler çıkmaya başladı.\\n• Koltuk altı ve kasık bölgemde kıllanma oldu.\\n• Sesim kalınlaşmaya başladı, kendi sesimi tanıyamaz oldum.\\n• Kaslarımın büyüdüğünü ve güçlendiğimi hissediyorum.',
          questionPrompt: 'Bu öğrencinin cinsiyeti hakkında kesin bir sonuca ulaşılabilir mi?',
          options: [
            { key: 'A', text: 'Evet, erkektir; çünkü sesin kalınlaşması sadece erkek ergenlerde görülen bir değişimdir.' },
            { key: 'B', text: 'Evet, kızdır; çünkü kasların güçlenmesi kızlarda görülür.' },
            { key: 'C', text: 'Hayır, ulaşılamaz; çünkü verilen tüm özellikler her iki cinsiyette de ortaktır.' },
            { key: 'D', text: 'Hayır, ulaşılamaz; çünkü ergenlik belirtileri cinsiyet belirlemede kullanılamaz.' }
          ],
          correctAnswer: 'A',
          explanation: 'Sivilce, kıllanma ve kas güçlenmesi her iki cinsiyette de görülebilirken sesin belirgin şekilde kalınlaşması yalnızca erkek bireylere özgü bir bedensel değişimdir.'
        },
        {
          id: 9,
          theme: 'Sinir İletimi ve Omurilik Zedelenmesi',
          cognitiveLevel: 'Patofizyolojik Muhakeme',
          skillTag: 'Sağlık ve Bilim',
          contextTitle: 'Trafik Kazası Sonrası Felç Durumu',
          scenario: 'Trafik kazası geçiren bir bireyin omurgasındaki omurilik dokusunun hasar gördüğü ve bu nedenle bacaklarını hareket ettiremediği (felç kaldığı) belirlenmiştir.',
          questionPrompt: 'Bu durum omuriliğin hangi temel işlevini yerine getirememesinden kaynaklanır?',
          options: [
            { key: 'A', text: 'Beyin ile bacak kasları arasındaki sinirsel bilgi iletim köprüsünü sağlayamaması' },
            { key: 'B', text: 'Vücudun öğrenme ve hafıza kayıtlarını kaybetmesi' },
            { key: 'C', text: 'Bacaklara gerekli büyüme hormonunu salgılayamaması' },
            { key: 'D', text: 'Göz kapaklarının refleksle kapanmasını yönetememesi' }
          ],
          correctAnswer: 'A',
          explanation: 'Omurilik, beyin ile vücut organları arasında sinir iletim yoludur. Omurilik hasar gördüğünde beyinden bacak kaslarına giden emirler iletilemez ve felç oluşur.'
        },
        {
          id: 10,
          theme: 'Denge Tahtasında Yürüme ve Beyincik',
          cognitiveLevel: 'Uygulama ve Çıkarım',
          skillTag: 'Organ Fonksiyonu',
          contextTitle: 'Jimnastikçinin Denge Sorunu',
          scenario: 'Bir jimnastik sporcusu denge tahtası üzerinde yürürken merkezî sinir sisteminin bir bölümünde geçici kan dolaşımı azalması nedeniyle aniden dengesini kaybedip düşüyor.',
          questionPrompt: 'Sporcunun dengesini kaybetmesine neden olan merkezî sinir sistemi yapısı hangisidir?',
          options: [
            { key: 'A', text: 'Beyincik' },
            { key: 'B', text: 'Omurilik Soğanı' },
            { key: 'C', text: 'Yumurtalık' },
            { key: 'D', text: 'Hipofiz Bezi' }
          ],
          correctAnswer: 'A',
          explanation: 'Beyincik, kulaktaki denge kanalları ile birlikte vücudun dengesini ve kasların uyumlu çalışmasını denetleyen organdır.'
        },
        {
          id: 11,
          theme: 'Bisiklet Sürmeyi Öğrenme ve Alışkanlık Refleksi',
          cognitiveLevel: 'Süreç Analizi',
          skillTag: 'Sinirsel Adaptasyon',
          contextTitle: 'Beyinden Omuriliğe Devir',
          scenario: 'Bir çocuk yaz tatilinde bisiklet sürmeyi öğrenmeye başlıyor. İlk günlerde pedallara, gidona ve yola dikkatle bakarak düşünerek sürüyor. Bir ay sonra ise hiç düşünmeden, arkadaşlarıyla sohbet ederken bile rahatça bisiklet kullanabiliyor.',
          questionPrompt: 'Öğrenme ve alışkanlık sürecinde sırasıyla görev alan yapılar hangisidir?',
          options: [
            { key: 'A', text: 'Öğrenme aşamasında Beyin ➔ Alışkanlık kazandıktan sonra Omurilik' },
            { key: 'B', text: 'Öğrenme aşamasında Omurilik ➔ Alışkanlık kazandıktan sonra Beyin' },
            { key: 'C', text: 'Öğrenme aşamasında Beyincik ➔ Alışkanlık kazandıktan sonra Omurilik Soğanı' },
            { key: 'D', text: 'Öğrenme aşamasında Omurilik Soğanı ➔ Alışkanlık kazandıktan sonra Beyincik' }
          ],
          correctAnswer: 'A',
          explanation: 'Bisiklet sürme, yüzme veya araba kullanma gibi beceriler önce beynin kontrolünde öğrenilir. Hareket tam alışkanlık kazanınca sonradan kazanılan refleks olarak omuriliğe devredilir.'
        },
        {
          id: 12,
          theme: 'Kan Şekerinin Düzenlenmesi ve Şeker Hastalığı',
          cognitiveLevel: 'Grafik ve Hormon Analizi',
          skillTag: 'İç Salgı Mekanizması',
          contextTitle: 'Dedesinin İnsülin İğnesi',
          scenario: 'Bir öğrencinin dedesi şeker hastasıdır. Yemek yedikten sonra kanındaki şeker seviyesi yükseldiğinde vücudu yeterli insülin üretemediği için dışarıdan insülin hormonu enjekte etmektedir.',
          questionPrompt: 'Dedede yetersiz çalışan iç salgı bezi ve insülin hormonunun vücuttaki etkisi hangisinde doğru verilmiştir?',
          options: [
            { key: 'A', text: 'İç Salgı Bezi: Pankreas / Etkisi: Kandaki şeker oranını normale düşürmek' },
            { key: 'B', text: 'İç Salgı Bezi: Karaciğer / Etkisi: Kan şekerini yükseltmek' },
            { key: 'C', text: 'İç Salgı Bezi: Böbrek Üstü Bezi / Etkisi: Kalp atışını hızlandırmak' },
            { key: 'D', text: 'İç Salgı Bezi: Tiroit Bezi / Etkisi: İyot depolamak' }
          ],
          correctAnswer: 'A',
          explanation: 'Pankreas bezi insülin salgılar. İnsülin kanda yükselen glikozun hücrelere ve karaciğere geçmesini sağlayarak kan şekerini düşürür.'
        },
        {
          id: 13,
          theme: 'Sıcak Cisme Temas ve Refleks Hızı',
          cognitiveLevel: 'Etki-Tepki Mekanizması',
          skillTag: 'Fizyolojik Hiyerarşi',
          contextTitle: 'Sıcak Çay Bardağına Dokunma',
          scenario: 'Bir öğrenci masadaki çok sıcak çay bardağına dokunur dokunmaz anında istemsizce elini geri çekiyor. Elini çektikten yaklaşık yarım saniye sonra elinin yandığını ve acı hissettiğini fark ediyor.',
          questionPrompt: 'Öğrencinin önce elini çekip sonra acıyı hissetmesinin bilimsel açıklaması nedir?',
          options: [
            { key: 'A', text: 'Elin geri çekilmesi omurilik refleksiyle anında yapılmış, acı sinyali ise daha sonra beyne ulaşarak değerlendirilmiştir.' },
            { key: 'B', text: 'Elin geri çekilmesini beyin, acı hissini ise beyincik kontrol etmiştir.' },
            { key: 'C', text: 'Öğrenci sıcaklığı önceden bildiği için istemli olarak elini çekmiştir.' },
            { key: 'D', text: 'Omurilik soğanı acı hissini engelleyerek kasları doğrudan çalıştırmıştır.' }
          ],
          correctAnswer: 'A',
          explanation: 'Savunma refleksi omurilik tarafından hemen oluşturulur; uyarı aynı zamanda beyne doğru da iletilir. Beyin uyarıyı değerlendirdiğinde acı ve yanma hissi algılanır.'
        },
        {
          id: 14,
          theme: 'Ergenlik Döneminde Duygusal Değişimler',
          cognitiveLevel: 'Davranışsal Analiz',
          skillTag: 'Gelişim Psikolojisi',
          contextTitle: 'Ergenlikte Bağımsızlık ve Kimlik Arayışı',
          scenario: 'Ergenlik çağındaki gençlerde bağımsızlık arayışı, kendi başına karar verme isteği, arkadaş çevresine önem verme ve mesleki hayaller kurma davranışları yoğunlaşır.',
          questionPrompt: 'Aşağıdaki öğrenci davranışlarından hangisi bu döneme özgü duygusal değişimlere doğrudan örnektir?',
          options: [
            { key: 'A', text: 'Hafta sonu aile gezisi yerine odasında arkadaşlarıyla gelecekte seçeceği mesleği tartışmayı tercih etmesi' },
            { key: 'B', text: 'Grip olduğunda yatağında dinlenmesi' },
            { key: 'C', text: 'Acıktığında mutfağa gidip yemek yemesi' },
            { key: 'D', text: 'Karanlıkta göz bebeklerinin büyümesi' }
          ],
          correctAnswer: 'A',
          explanation: 'Bireyselleşme, bağımsızlık isteği ve gelecek hayalleri ergenlik döneminin karakteristik duygusal ve sosyal değişimleridir.'
        },
        {
          id: 15,
          theme: 'İç Salgı Bezlerinin Cinsiyet Dağılımı',
          cognitiveLevel: 'Karşılaştırma',
          skillTag: 'Endokrin Sistem',
          contextTitle: 'İç Salgı Bezleri Tablosu',
          scenario: 'Vücudumuzdaki dört iç salgı bezi inceleniyor: 1. Hipofiz bezi, 2. Tiroit bezi, 3. Pankreas bezi, 4. Eşeysel bezler (Testis / Yumurtalık).',
          questionPrompt: 'Bu iç salgı bezlerinin erkek ve dişi bireylerde bulunma durumu hangisinde doğru verilmiştir?',
          options: [
            { key: 'A', text: '1, 2 ve 3 ortaktır; 4 (eşeysel bezler) cinsiyete göre farklılık gösterir.' },
            { key: 'B', text: 'Dört iç salgı bezi de her iki cinsiyette tamamen aynı yapıdadır.' },
            { key: 'C', text: 'Hipofiz sadece erkeklerde, tiroit sadece kızlarda bulunur.' },
            { key: 'D', text: 'Pankreas sadece kızlarda, böbrek üstü bezi sadece erkeklerde bulunur.' }
          ],
          correctAnswer: 'A',
          explanation: 'Hipofiz, tiroit, böbrek üstü ve pankreas bezleri her iki cinsiyette de ortaktır. Eşeysel bezler ise erkeklerde testis, kızlarda yumurtalıktır.'
        },
        {
          id: 16,
          theme: 'Refleks Çeşitlerinin Ayırt Edilmesi',
          cognitiveLevel: 'Sınıflandırma',
          skillTag: 'Kavramsal Netlik',
          contextTitle: 'On Farklı Davranışın Analizi',
          scenario: 'Verilen davranışlar inceleniyor: 1) Diz kapağına vurulunca bacağın fırlaması, 2) Limon görünce ağzın sulanması, 3) Göze toz kaçınca göz kırpma, 4) Örgü örme veya enstrüman çalma.',
          questionPrompt: 'Bu davranışların doğuştan gelen ve sonradan kazanılan refleks olarak doğru eşleştirmesi hangisidir?',
          options: [
            { key: 'A', text: 'Doğuştan: 1 ve 3 / Sonradan Kazanılan: 2 ve 4' },
            { key: 'B', text: 'Doğuştan: 2 ve 4 / Sonradan Kazanılan: 1 ve 3' },
            { key: 'C', text: 'Doğuştan: Yalnız 1 / Sonradan Kazanılan: 2, 3 ve 4' },
            { key: 'D', text: 'Tümü doğuştan gelen reflekslerdir.' }
          ],
          correctAnswer: 'A',
          explanation: 'Diz kapağı ve göz kırpma doğuştan gelen kalıtsal reflekslerdir. Limon görünce ağzın sulanması ve örgü örme ise tecrübe ile sonradan kazanılan reflekslerdir.'
        },
        {
          id: 17,
          theme: 'İç Salgı Bezlerinin Hormon Salgılama Analizi',
          cognitiveLevel: 'Eşleştirme ve Sentez',
          skillTag: 'Biyokimyasal Düzenleme',
          contextTitle: 'Hormon - Görev Eşleşmesi',
          scenario: 'Dört hormonun temel fonksiyonları listelenmiştir:\\nI. Büyüme ve gelişmeyi sağlama\\nII. Metabolizma hızını ve kimyasal olayları düzenleme\\nIII. Kan şekerini düşürme\\nIV. Ani korku ve heyecan anında kalbi hızlandırma',
          questionPrompt: 'Bu hormonlar sırasıyla hangileridir?',
          options: [
            { key: 'A', text: 'I: Büyüme hormonu, II: Tiroksin, III: İnsülin, IV: Adrenalin' },
            { key: 'B', text: 'I: Tiroksin, II: Büyüme hormonu, III: Glukagon, IV: İnsülin' },
            { key: 'C', text: 'I: Adrenalin, II: İnsülin, III: Tiroksin, IV: Büyüme hormonu' },
            { key: 'D', text: 'I: Büyüme hormonu, II: Adrenalin, III: Glukagon, IV: Tiroksin' }
          ],
          correctAnswer: 'A',
          explanation: 'Büyümeyi büyüme hormonu, metabolizmayı tiroksin, şeker düşürülmesini insülin, alarm durumunu adrenalin yönetir.'
        },
        {
          id: 18,
          theme: 'Tiroit Bezi ve İyot Eksikliği',
          cognitiveLevel: 'Sağlık Bilgisi',
          skillTag: 'Beslenme ve Endokrin',
          contextTitle: 'Gırtlak Bölgesindeki Şişlik',
          scenario: 'Yeterli iyot minerali alamayan bir bireyin tiroit bezinin daha fazla tiroksin üretebilmek için aşırı büyüdüğü (guatr hastalığı) gözlenmiştir.',
          questionPrompt: 'Bu durum tiroit bezinin sağlıklı çalışabilmesi için hangi maddenin şart olduğunu gösterir?',
          options: [
            { key: 'A', text: 'İyot minerali' },
            { key: 'B', text: 'Kalsiyum vitamini' },
            { key: 'C', text: 'Glikoz şekeri' },
            { key: 'D', text: 'Karbonhidrat lifi' }
          ],
          correctAnswer: 'A',
          explanation: 'Tiroit bezinin tiroksin hormonu üretebilmesi için iyot mineraline ihtiyacı vardır. İyot eksikliğinde tiroit bezi büyüyerek guatr hastalığına yol açar.'
        },
        {
          id: 19,
          theme: 'Omurilik Soğanı Zedelenmesi ve Yaşamsal Tehlike',
          cognitiveLevel: 'Fizyolojik Değerlendirme',
          skillTag: 'Merkezî Sinir Sistemi',
          contextTitle: 'Hayat Düğümü Zedelenmesi',
          scenario: 'Bir kaza anında başın arka alt kısmına (ense köküne) darbe alan bir kişide solunum ve kalp atışının aniden durduğu belirlenmiştir.',
          questionPrompt: 'Darbe alan bu bölgedeki hangi yapının zedelenmesi solunum ve dolaşımın durmasına yol açmıştır?',
          options: [
            { key: 'A', text: 'Omurilik Soğanı' },
            { key: 'B', text: 'Beyincik' },
            { key: 'C', text: 'Göz kapağı kasları' },
            { key: 'D', text: 'İç kulak kanalları' }
          ],
          correctAnswer: 'A',
          explanation: 'Omurilik soğanı solunum, dolaşım ve kalp atışı gibi temel yaşamsal refleksleri denetler; hasar görmesi doğrudan hayati tehlike oluşturur.'
        },
        {
          id: 20,
          theme: 'Ergenlik Döneminde Hijyen ve Sağlık Kuralları',
          cognitiveLevel: 'Uygulama ve Sağlık',
          skillTag: 'Kişisel Sağlık Yönetimi',
          contextTitle: 'Ergenlikte Sağlıklı Yaşam Rehberi',
          scenario: 'Ergenlik döneminde ter ve yağ bezlerinin çalışması hızlanır. Bu durum vücut kokularına ve ciltte sivilce oluşumuna zemin hazırlayabilir.',
          questionPrompt: 'Bu dönemi sağlıklı geçirmek isteyen bir genç için en doğru davranış hangisidir?',
          options: [
            { key: 'A', text: 'Kişisel temizliğe özen göstermek, düzenli banyo yapmak ve dengeli beslenmek' },
            { key: 'B', text: 'Terlememek için hiçbir sportif aktiviteye katılmamak' },
            { key: 'C', text: 'Sivilceleri tırnakla sıkarak yok etmeye çalışmak' },
            { key: 'D', text: 'İnternet ve telefon başında uykusuz kalarak vakit geçirmek' }
          ],
          correctAnswer: 'A',
          explanation: 'Ergenlikte artan hormon faaliyeti nedeniyle kişisel hijyen, düzenli duş, spor ve dengeli beslenme en temel sağlık kurallarıdır.'
        }
      ]
    }
  ],
  unitEnd20Questions: [
    {
      id: 1,
      theme: 'Vejetatif Üreme ve Genetik Klonlama',
      cognitiveLevel: 'Uygulama',
      skillTag: 'Üreme Biyolojisi',
      contextTitle: 'Menekşe Yaprağından Üretim',
      questionPrompt: 'Bir menekşe bitkisinden koparılan yaprak nemli toprağa dikildiğinde bir süre sonra yeni bir menekşe bitkisi elde ediliyor.\\n\\nBuna göre,\\nI. Bitki vejetatif (eşeysiz) üreme ile çoğaltılmıştır.\\nII. Yeni menekşenin yaprak ve çiçek rengi ana bitkiyle tamamen aynıdır.\\nIII. Bu çoğalmada dişi ve erkek üreme hücreleri döllenmiştir.\\n\\nyargılarından hangileri doğrudur?',
      options: [
        { key: 'A', text: 'Yalnız I' },
        { key: 'B', text: 'I ve II' },
        { key: 'C', text: 'I ve III' },
        { key: 'D', text: 'I, II ve III' }
      ],
      correctAnswer: 'B',
      explanation: 'Menekşe yaprağından yeni bitki gelişmesi vejetatif eşeysiz üremedir. Kalıtsal yapı ana bitkiyle aynıdır (I ve II doğru). Döllenme gerçekleşmez (III yanlış).'
    },
    {
      id: 2,
      theme: 'Tohumun Çimlenme Koşulları',
      cognitiveLevel: 'Deney Tasarımı',
      skillTag: 'Bilimsel Yöntem',
      contextTitle: 'Dört Farklı Şartta Tohum Deneyi',
      questionPrompt: 'Bir öğrenci özdeş tohumlarla dört düzenek hazırlamıştır:\\n• 1. Düzenek: Nemli toprak, 25 °C, aydınlık ortam (Çimlendi)\\n• 2. Düzenek: Kuru toprak, 25 °C, aydınlık ortam (Çimlenmedi)\\n• 3. Düzenek: Nemli toprak, 0 °C, aydınlık ortam (Çimlenmedi)\\n• 4. Düzenek: Nemli toprak, 25 °C, karanlık ortam (Çimlendi)\\n\\nBu deney sonuçlarından hareketle hangisine ULAŞILAMAZ?',
      options: [
        { key: 'A', text: 'Suyun çimlenme için zorunlu bir faktör olduğuna' },
        { key: 'B', text: 'Uygun sıcaklığın çimlenmeyi doğrudan etkilediğine' },
        { key: 'C', text: 'Işığın tohumun çimlenmesi için şart olmadığına' },
        { key: 'D', text: 'Tohumların sadece aydınlık ortamlarda çimlenebildiğine' }
      ],
      correctAnswer: 'D',
      explanation: '4. düzenekte karanlık ortamda da çimlenme gerçekleştiği görülmektedir. Dolayısıyla tohumların sadece aydınlıkta çimlendiği ifadesi ulaşılamaz ve yanlıştır.'
    },
    {
      id: 3,
      theme: 'Hayvanlarda Başkalaşım Süreci',
      cognitiveLevel: 'Kavrama',
      skillTag: 'Yaşam Döngüsü',
      contextTitle: 'Kelebeğin Evreleri',
      questionPrompt: 'Kelebeğin yaşam döngüsünde görülen evreler:\\n1. Yumurta ➔ 2. Tırtıl (Larva) ➔ 3. Pupa (Koza) ➔ 4. Yetişkin Kelebek\\n\\nBuna göre kelebeğin üremesi ve gelişmesiyle ilgili hangisi yanlıştır?',
      options: [
        { key: 'A', text: 'Kelebekler yumurta ile çoğalır ve başkalaşım geçirir.' },
        { key: 'B', text: 'Yumurtadan çıkan larva ana canlıya benzerlik göstermez.' },
        { key: 'C', text: 'Tırtıl evresinde yavrular anne kelebek tarafından beslenir ve yavru bakımı görülür.' },
        { key: 'D', text: 'Pupa evresinde canlı yapısal değişimler geçirerek kanatlı hale gelir.' }
      ],
      correctAnswer: 'C',
      explanation: 'Kelebeklerde yavru bakımı kesinlikle görülmez. Tırtıl kendi besinini kendisi bularak tüketir.'
    },
    {
      id: 4,
      theme: 'Çiçekli Bitkilerde Tozlaşma ve Döllenme',
      cognitiveLevel: 'Süreç Analizi',
      skillTag: 'Bitki Anatomisi',
      contextTitle: 'Arıların Çiçek Ziyareti',
      questionPrompt: 'Çiçekli bitkilerde üreme sürecinde gerçekleşen şu olayların doğru kronolojik sıralaması hangisidir?\\n1. Döllenme\\n2. Polen oluşumu\\n3. Tohum oluşumu\\n4. Tozlaşma',
      options: [
        { key: 'A', text: '2 – 4 – 1 – 3' },
        { key: 'B', text: '4 – 2 – 1 – 3' },
        { key: 'C', text: '2 – 1 – 4 – 3' },
        { key: 'D', text: '1 – 2 – 4 – 3' }
      ],
      correctAnswer: 'A',
      explanation: 'Önce erkek organ başçığında polen oluşur (2), sonra polenler dişicik tepesine taşınır (tozlaşma - 4), ardından çekirdekler birleşir (döllenme - 1) ve en son tohum meydana gelir (3).'
    },
    {
      id: 5,
      theme: 'Merkezî Sinir Sistemi Organları',
      cognitiveLevel: 'Tanı ve İşlev',
      skillTag: 'Sistem Bilgisi',
      contextTitle: 'Beyincik ve Omurilik Soğanı',
      questionPrompt: 'Bir bireyde:\\nI. Gözleri kapalıyken tek ayak üstünde durabilme ve dengesini koruma,\\nII. Yemek yerken lokmayı çiğneme ve yutma,\\nIII. Bir şiiri ezberleyip hafızasında tutma\\n\\nolaylarını denetleyen merkezler sırasıyla hangisinde doğru verilmiştir?',
      options: [
        { key: 'A', text: 'I: Beyincik, II: Omurilik Soğanı, III: Beyin' },
        { key: 'B', text: 'I: Beyin, II: Omurilik, III: Beyincik' },
        { key: 'C', text: 'I: Omurilik, II: Beyincik, III: Beyin' },
        { key: 'D', text: 'I: Omurilik Soğanı, II: Beyin, III: Omurilik' }
      ],
      correctAnswer: 'A',
      explanation: 'Denge beyincik, çiğneme-yutma omurilik soğanı, hafıza ve ezberleme ise beyin tarafından yönetilir.'
    },
    {
      id: 6,
      theme: 'İnsanda Üreme Anatomisi ve Döllenme',
      cognitiveLevel: 'Uygulama',
      skillTag: 'Üreme Sistemi',
      contextTitle: 'Döllenme ve Embriyo Gelişim Bölgesi',
      questionPrompt: 'İnsanda üreme sürecinde;\\n• Sperm ve yumurta hücrelerinin döllenerek zigotu oluşturduğu yer,\\n• Zigotun yerleşip dokuz ay boyunca embriyo ve fetüs olarak geliştiği yer\\n\\nsırasıyla aşağıdaki yapıların hangisinde doğru verilmiştir?',
      options: [
        { key: 'A', text: 'Yumurta kanalı – Döl yatağı (Rahim)' },
        { key: 'B', text: 'Yumurtalık – Yumurta kanalı' },
        { key: 'C', text: 'Döl yatağı – Vajina' },
        { key: 'D', text: 'Yumurtalık – Döl yatağı' }
      ],
      correctAnswer: 'A',
      explanation: 'Döllenme yumurta kanalında gerçekleşir; oluşan zigot döl yatağına (rahme) inerek burada büyür ve gelişir.'
    },
    {
      id: 7,
      theme: 'İç Salgı Bezleri ve Hormon Eşleştirmesi',
      cognitiveLevel: 'Eşleştirme',
      skillTag: 'Endokrin Sistem',
      contextTitle: 'Dört Temel İç Salgı Bezi',
      questionPrompt: 'Aşağıdaki iç salgı bezi ve salgıladığı hormon eşleştirmelerinden hangisi YANLIŞTIR?',
      options: [
        { key: 'A', text: 'Hipofiz bezi – Büyüme hormonu' },
        { key: 'B', text: 'Tiroit bezi – Tiroksin hormonu' },
        { key: 'C', text: 'Böbrek üstü bezi – İnsülin hormonu' },
        { key: 'D', text: 'Pankreas – Glukagon hormonu' }
      ],
      correctAnswer: 'C',
      explanation: 'İnsülin hormonu böbrek üstü bezinden değil, pankreastan salgılanır. Böbrek üstü bezi adrenalin hormonu salgılar.'
    },
    {
      id: 8,
      theme: 'Kan Şekerinin Karşılıklı Dengelenmesi',
      cognitiveLevel: 'Geri Bildirim Mekanizması',
      skillTag: 'Fizyolojik Denge',
      contextTitle: 'Yemek Sonrası ve Açlık Durumu',
      questionPrompt: 'Sağlıklı bir insanda yemek yedikten sonra kanda artan glikoz oranını normale düşüren hormon (X) ile uzun süre aç kalındığında düşen kan şekerini normale yükselten hormon (Y) hangisidir?',
      options: [
        { key: 'A', text: 'X: İnsülin / Y: Glukagon' },
        { key: 'B', text: 'X: Glukagon / Y: İnsülin' },
        { key: 'C', text: 'X: Adrenalin / Y: Tiroksin' },
        { key: 'D', text: 'X: Tiroksin / Y: Büyüme hormonu' }
      ],
      correctAnswer: 'A',
      explanation: 'İnsülin yükselen şekeri düşürür (indirir); glukagon ise düşen şekeri karaciğerden kana geçirerek yükseltir.'
    },
    {
      id: 9,
      theme: 'Refleks Davranışlarının Özellikleri',
      cognitiveLevel: 'Muhakeme',
      skillTag: 'Nöroloji',
      contextTitle: 'Reflekslerin Ortak Nitelikleri',
      scenario: 'Doğuştan gelen refleksler ile sonradan kazanılan refleksler karşılaştırılmıştır.',
      questionPrompt: 'Aşağıdakilerden hangisi hem doğuştan gelen hem de sonradan kazanılan reflekslerin ORTAK özelliğidir?',
      options: [
        { key: 'A', text: 'İstemsiz ve ani tepkiler olarak omurilik tarafından yönetilmeleri' },
        { key: 'B', text: 'Doğum anından itibaren tüm insanlarda hazır bulunmaları' },
        { key: 'C', text: 'Yalnızca öğrenme ve pratik sonucunda kazanılmaları' },
        { key: 'D', text: 'Sadece kasların değil, iç salgı bezlerinin de yok sayılması' }
      ],
      correctAnswer: 'A',
      explanation: 'Tüm refleksler omurilik denetiminde istemsiz, hızlı ve ani olarak gerçekleşir. B doğuştana, C sonradan kazanılana aittir.'
    },
    {
      id: 10,
      theme: 'Ergenlik Döneminde Cinsiyete Özgü Değişimler',
      cognitiveLevel: 'Sınıflandırma',
      skillTag: 'Gelişim Biyolojisi',
      contextTitle: 'Kız ve Erkeklerdeki Değişim Tablosu',
      questionPrompt: 'Ergenlik döneminde görülen;\\nI. Sesin kalınlaşması,\\nII. Âdet döngüsünün başlaması,\\nIII. Boy ve kilonun artması,\\nIV. Yüzde sivilce çıkması\\n\\ndeğişimlerinden hangileri kız ve erkeklerde ORTAK olarak görülür?',
      options: [
        { key: 'A', text: 'I ve II' },
        { key: 'B', text: 'III ve IV' },
        { key: 'C', text: 'I, III ve IV' },
        { key: 'D', text: 'II, III ve IV' }
      ],
      correctAnswer: 'B',
      explanation: 'Boy-kilo artışı ve ergenlik sivilceleri her iki cinsiyette de ortaktır (III ve IV). Ses kalınlaşması sadece erkeklerde, âdet döngüsü sadece kızlarda görülür.'
    },
    {
      id: 11,
      theme: 'Eşeysiz Üreme Çeşitleri Eşleştirmesi',
      cognitiveLevel: 'Bilgi ve Eşleştirme',
      skillTag: 'Üreme Çeşitleri',
      contextTitle: 'Dört Canlı Dört Üreme Şekli',
      questionPrompt: 'Aşağıdaki canlı ve eşeysiz üreme çeşidi eşleştirmelerinden hangisi DOĞRUDUR?',
      options: [
        { key: 'A', text: 'Bakteri ➔ Bölünme ile üreme' },
        { key: 'B', text: 'Hidra ➔ Vejetatif üreme' },
        { key: 'C', text: 'Çilek ➔ Tomurcuklanma ile üreme' },
        { key: 'D', text: 'Denizyıldızı ➔ Bölünme ile üreme' }
      ],
      correctAnswer: 'A',
      explanation: 'Bakteri bölünerek çoğalır (Doğru). Hidra tomurcuklanarak, çilek sürünücü gövdeyle vejetatif, denizyıldızı rejenerasyonla çoğalır.'
    },
    {
      id: 12,
      theme: 'Çiçeğin Kısımları ve Tozlaşma İlişkisi',
      cognitiveLevel: 'Yapı-Fonksiyon',
      skillTag: 'Morfoloji',
      contextTitle: 'Çiçek Parçalarının Rolü',
      questionPrompt: 'Çiçekte taç yaprakların renkli ve kokulu olmasının, çanak yaprakların ise yeşil ve sert olmasının temel biyolojik faydaları hangisinde doğru açıklanmıştır?',
      options: [
        { key: 'A', text: 'Taç yaprak böcekleri çekerek tozlaşmayı sağlar; çanak yaprak tomurcuğu korur.' },
        { key: 'B', text: 'Taç yaprak tohum oluşturur; çanak yaprak polen üretir.' },
        { key: 'C', text: 'Taç yaprak fotosentez yapar; çanak yaprak döllenmeyi sağlar.' },
        { key: 'D', text: 'Taç yaprak çiçeği dala bağlar; çanak yaprak nektar salgılar.' }
      ],
      correctAnswer: 'A',
      explanation: 'Taç yaprakların rengi ve kokusu tozlaştırıcı hayvanları çeker. Çanak yaprak ise tomurcuk evresinde içteki üreme organlarını korur.'
    },
    {
      id: 13,
      theme: 'Yumurtadan Çıkan Yavrunun Besin Durumu',
      cognitiveLevel: 'Analitik Çıkarım',
      skillTag: 'Embriyoloji',
      contextTitle: 'Neden Bazı Canlılar Başkalaşım Geçirir?',
      questionPrompt: 'Kuş ve sürüngen yavruları yumurtadan ana canlıya benzer çıkarken, kurbağa ve kelebek yavruları ana canlıya benzemez ve başkalaşım geçirir.\\n\\nBu farklılığın temel sebebi nedir?',
      options: [
        { key: 'A', text: 'Kurbağa ve kelebek yumurtalarında embriyonun tam gelişimini sağlayacak besinin yetersiz olması' },
        { key: 'B', text: 'Kuşların yumurtalarında kabuk bulunmaması' },
        { key: 'C', text: 'Kurbağaların sadece karada yaşayabilmesi' },
        { key: 'D', text: 'Kelebeklerin omurgalı canlılar sınıfında yer alması' }
      ],
      correctAnswer: 'A',
      explanation: 'Yumurtada yeterli besin (vitellus) depolanmadığında yavru erken çıkarak çevreden beslenir ve başkalaşım geçirerek ergin forma ulaşır.'
    },
    {
      id: 14,
      theme: 'Hayvanlar Âleminde Yavru Bakımı',
      cognitiveLevel: 'Ekoloji ve Davranış',
      skillTag: 'Tür Karşılaştırması',
      contextTitle: 'Yavru Bakımı Görülen Canlı Grupları',
      questionPrompt: 'Aşağıdaki hayvan gruplarından hangilerinde yavruların korunması, beslenmesi ve bakılması davranışı ORTAK olarak görülür?',
      options: [
        { key: 'A', text: 'Kuşlar ve Memeliler' },
        { key: 'B', text: 'Balıklar ve Sürüngenler' },
        { key: 'C', text: 'Kurbağalar ve Kuşlar' },
        { key: 'D', text: 'Balıklar ve Kurbağalar' }
      ],
      correctAnswer: 'A',
      explanation: 'Omurgalılar içinde yavru bakımı sadece kuşlar (kuluçka, besleme) ve memelilerde (doğurma, sütle besleme) görülür.'
    },
    {
      id: 15,
      theme: 'Erkek Üreme Sistemi Yapıları',
      cognitiveLevel: 'Anatomik Fonksiyon',
      skillTag: 'Sistem Organları',
      contextTitle: 'Testis ve Salgı Bezleri',
      questionPrompt: 'Erkek üreme sisteminde yer alan;\\n• Testis,\\n• Salgı bezleri\\n\\nyapılarının temel görevleri sırasıyla aşağıdakilerden hangisidir?',
      options: [
        { key: 'A', text: 'Sperm hücrelerini üretmek – Spermlerin hareketini kolaylaştıran sıvı üretmek' },
        { key: 'B', text: 'İdrar depolamak – Spermleri yok etmek' },
        { key: 'C', text: 'Döllenmeyi sağlamak – Yumurta hücresi üretmek' },
        { key: 'D', text: 'Büyüme hormonu salgılamak – Testosteronu kana vermek' }
      ],
      correctAnswer: 'A',
      explanation: 'Testisler sperm hücrelerini ve testosteronu üretir. Salgı bezleri ise spermlerin kaygan bir ortamda rahat hareket etmesini sağlayan sıvıyı üretir.'
    },
    {
      id: 16,
      theme: 'Tiroksin Hormonunun Önemi',
      cognitiveLevel: 'Endokrin Sağlık',
      skillTag: 'Metabolizma',
      contextTitle: 'Metabolizma Hızı ve Tiroit Bezi',
      questionPrompt: 'Boynun ön alt kısmında yer alan tiroit bezinin salgıladığı tiroksin hormonu vücutta yetersiz salgılandığında;',
      options: [
        { key: 'A', text: 'Metabolizma hızı yavaşlar, halsizlik ve gelişim geriliği görülebilir.' },
        { key: 'B', text: 'Kan şekeri aşırı derecede yükselir.' },
        { key: 'C', text: 'Kalp atışları sürekli kontrolsüzce hızlanır.' },
        { key: 'D', text: 'Kemiklerde devlik durumu ortaya çıkar.' }
      ],
      correctAnswer: 'A',
      explanation: 'Tiroksin hormonu vücudun hücresel enerji ve kimyasal metabolizma hızını belirler; yetersizliğinde halsizlik ve yavaşlama görülür.'
    },
    {
      id: 17,
      theme: 'Omurilik Soğanının Hayati Önemi',
      cognitiveLevel: 'Kritik Düşünme',
      skillTag: 'Yaşamsal Merkezler',
      contextTitle: 'Neden Hayat Düğümü Denir?',
      questionPrompt: 'Omurilik soğanına tıp ve biyoloji dünyasında "hayat düğümü" denilmesinin temel sebebi nedir?',
      options: [
        { key: 'A', text: 'Solunum, kalp atışı ve dolaşım gibi hayatî iç organ sistemlerinin çalışmasını yönetmesi' },
        { key: 'B', text: 'Düşünme ve problem çözme merkezi olması' },
        { key: 'C', text: 'Vücudun tüm kemik ve kas dengesini kurması' },
        { key: 'D', text: 'Yeni doğan bebeklerde emme refleksini başlatması' }
      ],
      correctAnswer: 'A',
      explanation: 'Omurilik soğanı solunum, dolaşım, yutma ve kalp gibi doğrudan hayatın devamını sağlayan istemsiz sistemleri yönetir.'
    },
    {
      id: 18,
      theme: 'Toprak Solucanında Rejenerasyon',
      cognitiveLevel: 'Biyolojik Doğrulama',
      skillTag: 'Hayvan Fizyolojisi',
      contextTitle: 'Solucanın Yenilenmesi',
      questionPrompt: 'Bir toprak solucanı bahçe çapalama sırasında ortadan kesildiğinde uygun nem ve toprakta her iki parçanın eksilen uçlarını onararak iki canlı oluşturduğu görülmüştür.\\n\\nBu olayla ilgili hangisi yanlıştır?',
      options: [
        { key: 'A', text: 'Yeni solucanlar ana canlıdan farklı kalıtsal özelliklere sahip olur.' },
        { key: 'B', text: 'Gerçekleşen olay rejenerasyon ile eşeysiz üremedir.' },
        { key: 'C', text: 'Ortamdaki solucan birey sayısında artış sağlanmıştır.' },
        { key: 'D', text: 'Üreme hücreleri görev almamıştır.' }
      ],
      correctAnswer: 'A',
      explanation: 'Rejenerasyonla üremede döllenme ve genetik çeşitlilik olmaz; oluşan bireyler ana canlıyla aynı genetik yapıdadır.'
    },
    {
      id: 19,
      theme: 'Ergenlik Döneminde Sağlıklı İletişim ve Destek',
      cognitiveLevel: 'Sosyal ve Ruhsal Sağlık',
      skillTag: 'Yaşam Becerileri',
      contextTitle: 'Duygusal Dalgalanmalarla Başa Çıkma',
      scenario: 'Ergenlik dönemine giren bir genç yoğun duygusal iniş çıkışlar, yalnız kalma isteği ve gelecek kaygısı yaşamaktadır.',
      questionPrompt: 'Bu süreci en sağlıklı ve verimli şekilde atlatmak için gence verilebilecek en uygun tavsiye nedir?',
      options: [
        { key: 'A', text: 'Duygularını aile, öğretmen ve uzmanlarla paylaşmak; spor, sanat ve kitap okuma gibi faydalı aktivitelere yönelmek' },
        { key: 'B', text: 'Tüm sosyal ilişkilerini kesip odasına kapanmak' },
        { key: 'C', text: 'Sanal dünyada gece geç saatlere kadar bilgisayar oynamak' },
        { key: 'D', text: 'Zararlı alışkanlıklara yönelerek sorunlardan kaçmaya çalışmak' }
      ],
      correctAnswer: 'A',
      explanation: 'Ergenlikte açık iletişim, sportif ve sanatsal faaliyetler ile aile-okul desteği dönemin sağlıklı tamamlanmasını sağlar.'
    },
    {
      id: 20,
      theme: 'Sistemlerin Birlikte Çalışması (Homeostazi)',
      cognitiveLevel: 'Bütüncül Değerlendirme',
      skillTag: 'Sistemler Arası Etkileşim',
      contextTitle: 'Koşan Bir Sporcunun Vücut Tepkisi',
      scenario: 'Bir atlet koşuya başladığında; beyin koşma kararını verir, beyincik bacak kaslarının dengesini sağlar, böbrek üstü bezinden adrenalin salgılanır, omurilik soğanı kalp atışını ve soluk alışverişini hızlandırır, pankreas enerji için glukagon salgılar.',
      questionPrompt: 'Bu örnek olay vücudumuz hakkında aşağıdaki genel yargılardan hangisini en iyi kanıtlar?',
      options: [
        { key: 'A', text: 'Sinir sistemi ve iç salgı bezleri diğer tüm vücut sistemleriyle tam bir iş birliği ve uyum içinde çalışır.' },
        { key: 'B', text: 'Vücuttaki her sistem birbirinden tamamen bağımsız ve habersiz hareket eder.' },
        { key: 'C', text: 'Spor yaparken sinir sistemi devre dışı kalır, sadece hormonlar çalışır.' },
        { key: 'D', text: 'İç salgı bezleri sadece tehlike anında devreye girer, normalde çalışmaz.' }
      ],
      correctAnswer: 'A',
      explanation: 'Denetleyici ve düzenleyici sistemler vücuttaki tüm sistemlerin kusursuz bir ahenk, uyum ve denge (homeostazi) içinde çalışmasını sağlar.'
    }
  ]
};
`;

fs.writeFileSync('src/data/grade6/grade6Unit3Data.ts', fileContent, 'utf8');
console.log('Successfully generated src/data/grade6/grade6Unit3Data.ts');

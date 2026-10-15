import { Unit } from '../../types/curriculum';
import { grade8Unit2End20Questions } from './grade8UnitEndExams';
import { sebahattinDnaQuestions } from './sebahattinQuestions';

export const grade8Unit2Data: Unit = {
  id: 'g8-unit-2',
  unitNumber: 2,
  bookNumber: 1,
  grade: 8,
  subject: 'Fen Bilimleri',
  title: 'DNA ve Genetik Kod',
  unitEndPageRange: 'Ünite Sonu',
  colorTheme: {
    primary: 'from-amber-600 to-orange-700',
    border: 'border-amber-500/40',
    bg: 'bg-amber-950/40',
    accent: 'text-amber-400',
    text: 'text-amber-200'
  },
  unitEnd20Questions: grade8Unit2End20Questions,
  subTopics: [
    {
      id: 'g8-u2-sub1',
      title: '1. Bölüm: DNA ve Genetik Kod',
      shortTitle: 'DNA ve Genetik Kod',
      badge: 'Kavramlar & LGS',
      pageRange: '',
      concepts: [
        'Kromozom',
        'DNA (Deoksiribo Nükleik Asit)',
        'Gen',
        'Nükleotid',
        'Organik Bazlar (Adenin, Timin, Guanin, Sitozin)',
        'Deoksiriboz Şekeri',
        'Fosfat',
        'İkili Sarmal Yapı',
        'DNA Eşlenmesi',
        'DNA Onarımı'
      ],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Hücrenin Yönetim Merkezi ve Kalıtsal Materyaller',
          paragraphs: [
            'Canlıların vücudunu oluşturan milyarlarca hücrenin her birinin çekirdeğinde kalıtsal bilgilerin depolandığı yönetici bir molekül bulunur.',
            'DNA (Deoksiribonükleik Asit): Hücre içindeki solunum, beslenme, üreme ve protein sentezi gibi tüm yaşamsal faaliyetleri yöneten, kalıtsal özellikleri taşıyan çift zincirli ve sarmal yapıdaki moleküldür (LGS ÇIKTI).',
            'Kromozom: DNA molekülünün özel protein kılıflarla sarılarak kısalıp kalınlaşmasıyla oluşan yapıdır. Hücre bölünmesi sırasında belirginleşir. Farklı tür canlılar aynı kromozom sayısına sahip olabilir; kromozom sayısı canlının gelişmişliği veya vücut büyüklüğü hakkında kesinlikle bilgi vermez (ÖS ÇIKTI).',
            'Gen: DNA molekülü üzerinde yer alan ve saç rengi, göz rengi, kan grubu gibi belirli bir kalıtsal özelliği (karakteri) şifreleyen anlamlı görev birimleridir. Bir DNA molekülü üzerinde çok sayıda gen bulunabilir (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Nükleotid: DNA\'nın en küçük yapı taşıdır (yapı birimidir) (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Kalıtsal materyallerin karmaşıktan basite (veya büyükten küçüğe) doğru sıralanışı: Kromozom > DNA > Gen > Nükleotid şeklindedir (LGS ÇIKTI) (ÖS ÇIKTI).'
          ],
          keyPoints: [
            'Karmaşıktan Basite Hiyerarşi: Kromozom > DNA > Gen > Nükleotid (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Gelişmişlik Kuralı: Kromozom sayısının fazlalığı canlının gelişmiş olduğunu göstermez (Örn: Eğrelti otu 500, İnsan 46) (ÖS ÇIKTI).',
            'Birim Ayrımı: DNA\'nın yapı birimi nükleotid, görev birimi gendir (LGS ÇIKTI).'
          ]
        },
        {
          heading: 'Nükleotidlerin Yapısı, Eşleşme ve DNA Onarımı',
          paragraphs: [
            'Bir nükleotidin yapısında üç temel bölüm bulunur: Fosfat, Deoksiriboz şekeri ve Azotlu organik baz. Tüm nükleotidlerde fosfat ve şeker tamamen aynıdır, ancak organik bazlar farklılık gösterir. DNA\'da 4 çeşit organik baz vardır: Adenin (A), Timin (T), Guanin (G) ve Sitozin (C).',
            'Nükleotidler, yapılarında bulundurdukları organik baza göre isimlendirilirler (Örneğin; yapısında Adenin bazı bulunduran nükleotide "Adenin Nükleotidi" denir) (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Eşleşme Kuralı: Kusursuz bir DNA molekülünün karşılıklı zincirlerinde her zaman Adenin nükleotidinin karşısına Timin, Guanin nükleotidinin karşısına ise Sitozin nükleotidi gelir (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Canlılardaki Genetik Çeşitlilik: Yeryüzündeki tüm canlıların DNA\'larında bulunan nükleotid çeşitleri (A, T, G, C) tamamen aynıdır. Ancak canlıların birbirinden farklı özelliklere sahip olmasının temel sebebi, DNA\'larındaki bu dört çeşit nükleotidin sayısının ve diziliş sırasının her canlıda birbirinden farklı olmasıdır (LGS ÇIKTI) (ÖS ÇIKTI).',
            'DNA\'nın Kendini Eşlemesi: DNA\'nın çift zinciri bir fermuar gibi birbirinden ayrılır. Sitoplazmada serbest hâlde bulunan nükleotidler çekirdek içerisine girerek açılan zincirlerdeki uygun organik bazların karşısına yerleşir (A ile T, G ile C) (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Eşlenme tamamlandığında, başlangıçtaki DNA molekülüyle nükleotid dizilimi tamamen aynı olan iki yeni DNA molekülü oluşur (LGS ÇIKTI) (ÖS ÇIKTI). Oluşan iki yeni DNA molekülünün her birinde biri eski (kalıp), diğeri sitoplazmadan gelen nükleotidlerle yeni sentezlenmiş zincir olmak üzere iki iplik bulunur (Yarı korunumlu eşlenme) (LGS ÇIKTI) (ÖS ÇIKTI).',
            'DNA Onarımı: Tek bir zincirdeki nükleotid eksikse veya yanlış eşleşmişse DNA karşısındaki sağlam zincire bakarak bu hatayı onarabilir. Ancak karşılıklı iki zincirin aynı bölgesinde nükleotid eksikliği varsa (karşılıklı kopma), DNA bu hatayı onaramaz ve mutasyonlar ortaya çıkar (ÖS ÇIKTI).'
          ],
          table: {
            headers: ['Kavram / Soru Alanı', 'Öğrencinin Düşündüğü (Yanlış Mantık)', 'Kavram Yanılgısının Düzeltilmesi (Doğru Yaklaşım)'],
            rows: [
              ['Kalıtsal Çeşitlilik (Varyasyon)', 'Farklı canlı türlerinin farklı görünmesinin sebebi bünyelerinde A, T, G, C dışında farklı nükleotidler bulundurmasıdır.', 'Tüm canlılarda aynı 4 çeşit nükleotid bulunur. Farklı kılan, nükleotidlerin dizilim sırası ve sayısıdır (LGS ÇIKTI).'],
              ['Nükleotid İsimlendirmesi', 'Nükleotidler adlarını yapılarındaki deoksiriboz şekerinden veya fosfattan alırlar.', 'Fosfat ve şeker tüm nükleotidlerde aynıdır. Nükleotide adını veren içindeki Azotlu Organik Bazdır (ÖS ÇIKTI).'],
              ['DNA Eşlenmesi (Yeni Zincirler)', 'Oluşan iki yeni DNA\'nın biri tamamen eski zincirlerden, diğeri tamamen yeni zincirlerden oluşur.', 'DNA eşlenmesi yarı korunumlu gerçekleşir; her yeni DNA\'da bir eski kalıp zincir ve bir yeni sentezlenmiş zincir bulunur (LGS ÇIKTI).'],
              ['Görev ve Yapı Birimi', 'DNA\'nın en küçük yapı birimi gendir, görev birimi ise nükleotiddir.', 'Fiziksel tuğlalar gibi en küçük yapı birimi Nükleotiddir; anlamlı kalıtsal özellikleri şifreleyen görev birimi ise Gendir (LGS ÇIKTI).'],
              ['Kromozom Sayısı ve Gelişmişlik', 'Bir canlının kromozom sayısı ne kadar fazlaysa o kadar gelişmiş veya zekidir.', 'Kromozom sayısının gelişmişlikle hiçbir ilişkisi yoktur (Eğrelti otu 500, insan 46 kromozomludur) (ÖS ÇIKTI).']
            ]
          },
          examNote: '📌 LGS & ÖS ÇIKMIŞ SORU KRİTİK KALIPLARI: 1) DNA eşlenmesi sırasında sitoplazmada serbest nükleotid miktarı zamanla azalırken, çekirdek içindeki nükleotid sayısı zamanla artar (ÖS ÇIKTI). 2) Dört farklı renkte pullar veya ataçlarla model oluşturulurken, toplam nükleotid sayısı her zaman eldeki en az miktardaki organik baz veya şeker/fosfat sınırına göre belirlenir ve bazı malzemeler artmak zorundadır (ÖS ÇIKTI).'
        }
      ],
      glossary: [
        { term: 'Kromozom', definition: 'DNA ve özel proteinlerin birleşmesiyle oluşan, hücre bölünmesinde belirginleşen gen taşıyıcı yapı.' },
        { term: 'Nükleotid', definition: 'Fosfat, deoksiriboz şekeri ve bir organik bazdan oluşan DNA’nın temel yapı birimi.' },
        { term: 'DNA Eşlenmesi', definition: 'Hücre bölünmesi öncesinde ana DNA’nın kendini kopyalayarak iki özdeş DNA oluşturması.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Kromozom sayısı fazla olan canlılar diğer canlılara göre daha gelişmiştir.', isCorrect: false, explanation: 'Kromozom sayısı ile canlının gelişmişliği arasında hiçbir bağ yoktur.' },
        { id: 2, statement: 'Bir DNA molekülündeki toplam fosfat sayısı deoksiriboz şekeri sayısına eşittir.', isCorrect: true, explanation: 'Her nükleotidde bir fosfat ve bir şeker bulunur.' },
        { id: 3, statement: 'DNA’da karşılıklı iki zincirde aynı bölgede nükleotid bulunmaması durumunda oluşan hata onarılamaz.', isCorrect: true, explanation: 'Karşılıklı çift zincir boşlukları tamir edilemez.' },
        {"id":4,"statement":"DNA molekülünde Adenin bazı ile Timin bazı arasında ikili zayıf hidrojen bağı bulunur.","isCorrect":true,"explanation":"DNA sarmalında A ile T arasında 2, G ile C arasında 3 zayıf hidrojen bağı kurulur."},
        {"id":5,"statement":"Farklı türe ait sağlıklı iki canlının vücut hücrelerindeki kromozom sayıları kesinlikle birbirinden farklı olmak zorundadır.","isCorrect":false,"explanation":"Örneğin insan ve moli balığının her ikisinde de 46 kromozom bulunur; kromozom sayısı canlı türünü veya gelişmişliğini tek başına belirlemez."}
      ],
      lgsQuestions: [
        ...sebahattinDnaQuestions.filter(q => q.subTopicId === 'g8-u2-sub1'),
        {
          id: 1,
          theme: 'DNA Eşlenmesi ve Nükleotid Değişimi',
          cognitiveLevel: 'Grafik ve Hesaplama',
          contextTitle: 'Sitoplazmadaki Serbest Nükleotidlerin Değişimi',
          scenario: 'Bölünmekte olan bir hücrede DNA eşlenmesi sürecinde çekirdekteki ve sitoplazmadaki nükleotid değişimleri takip edilmiştir.',
          questionPrompt: 'DNA’nın kendini eşlemesi sürecinde gerçekleşen değişimlerle ilgili hangisi kesinlikle doğrudur?',
          options: [
            { key: 'A', text: 'Sitoplazmadaki serbest deoksiriboz şekeri ve fosfat miktarı zamanla azalır.' },
            { key: 'B', text: 'Çekirdekteki toplam nükleotid sayısı işlem bittiğinde yarıya iner.' },
            { key: 'C', text: 'Eşlenme bittiğinde oluşan iki yeni DNA molekülünün dizilimi birbirinden farklıdır.' },
            { key: 'D', text: 'Sitoplazmadaki nükleotid miktarı hücre bölünmesi boyunca sürekli artar.' }
          ],
          correctAnswer: 'A',
          explanation: 'Eşlenme sırasında yeni zincirlerin yapımı için sitoplazmadaki serbest nükleotidler çekirdeğe girer ve sitoplazmadaki miktarları azalır.'
        },
        {
          id: 2,
          theme: 'DNA Bileşenleri ve Sayısal Eşitlikler',
          cognitiveLevel: 'Veri Analizi ve Muhakeme',
          contextTitle: 'Sağlıklı Bir DNA Molekülündeki Yapısal Oranlar',
          scenario: 'Bir laboratuvarda izole edilen 1200 nükleotidlik çift zincirli bir DNA molekülünde 200 adet adenin nükleotidi bulunduğu saptanmıştır.',
          questionPrompt: 'Bu DNA molekülündeki diğer yapıların sayıları ile ilgili aşağıdaki yargılardan hangisi doğrudur?',
          options: [
            { key: 'A', text: 'DNA molekülünde bulunan toplam deoksiriboz şekeri sayısı 600 adettir.' },
            { key: 'B', text: 'Moleküldeki timin sayısı 200, guanin ve sitozin nükleotidlerinin toplamı ise 800 adettir.' },
            { key: 'C', text: 'Moleküldeki toplam fosfat sayısı nükleotid sayısının iki katına eşittir.' },
            { key: 'D', text: 'Guanin nükleotidi sayısı timin nükleotidi sayısına kesinlikle eşittir.' }
          ],
          correctAnswer: 'B',
          explanation: 'Adenin 200 ise Timin de 200 adettir. Toplam 1200 nükleotidden 400 A-T çıkınca 800 adet Guanin ve Sitozin kalır.'
        },
        {
          id: 3,
          theme: 'DNA Hasarları ve Onarım Mekanizması',
          cognitiveLevel: 'Şema ve Görsel Değerlendirme',
          contextTitle: 'Radyasyona Maruz Kalan Dört Farklı DNA Bölgesi',
          scenario: 'Laboratuvarda ultraviyole ışınlarına maruz bırakılan dört farklı DNA bölgesinde şu hasarlar tespit edilmiştir: 1. bölgede karşılıklı iki zincirde adenin karşısındaki nükleotid kopmuştur, 2. bölgede guanin karşısına yanlışlıkla adenin gelmiştir, 3. bölgede karşılıklı her iki zincirdeki nükleotidler aynı anda koparak boşluk oluşmuştur, 4. bölgede ise tek bir sitozin nükleotidi eksilmiştir.',
          questionPrompt: 'DNA onarım enzimlerinin bu hasarları tamir etme yeteneği dikkate alındığında hangi bölgedeki hasar kesinlikle onarılamaz?',
          options: [
            { key: 'A', text: '1. bölgedeki tek taraflı boşluk DNA enzimleri tarafından onarılamaz.' },
            { key: 'B', text: '2. bölgedeki yanlış eşleşme tespit edilerek hücre tarafından düzeltilemez.' },
            { key: 'C', text: '3. bölgede karşılıklı her iki zincirde aynı anda oluşan boşluk onarılamaz.' },
            { key: 'D', text: '4. bölgedeki tek zincir eksikliği kalıcı mutasyon olarak nesillere aktarılır.' }
          ],
          correctAnswer: 'C',
          explanation: 'DNA karşılıklı çift zincirindeki eş zamanlı boşlukları şifre eksikliği nedeniyle tamir edemez ve kalıcı mutasyon oluşur.'
        },
        {
          id: 4,
          theme: 'Canlı Çeşitliliği ve Nükleotid Dizilimi',
          cognitiveLevel: 'Kavramsal Derinlik',
          contextTitle: 'Farklı Canlı Türlerinin Genetik Materyal Analizi',
          scenario: 'Bir araştırmacı insan, meşe ağacı ve bir bakteri türünden aldığı DNA örneklerini incelemiş; her üç canlı türünde de sadece Adenin, Timin, Guanin ve Sitozin nükleotidlerinin bulunduğunu görmüştür.',
          questionPrompt: 'Bu canlıların dış görünüş, organ yapısı ve yaşamsal özelliklerinin birbirinden tamamen farklı olmasının temel sebebi nedir?',
          options: [
            { key: 'A', text: 'Her canlı türünde kullanılan fosfat ve şeker moleküllerinin atomik yapılarının farklı olması.' },
            { key: 'B', text: 'Bitkilerdeki nükleotidlerin hayvanlardakine göre daha büyük kütleye sahip olması.' },
            { key: 'C', text: 'Canlıların hücre çekirdeğindeki DNA sarmalının dönüş yönünün birbirinden zıt olması.' },
            { key: 'D', text: 'DNA molekülünü oluşturan nükleotidlerin sayı ve diziliş sırasının canlıdan canlıya farklılık göstermesi.' }
          ],
          correctAnswer: 'D',
          explanation: 'Tüm canlılarda nükleotid çeşitleri aynıdır; canlıların farklı olmasını sağlayan temel etken bu nükleotidlerin diziliş sırası ve toplam sayılarıdır.'
        }
      ]
    },
    {
      id: 'g8-u2-sub2',
      title: '2. Bölüm: Kalıtım',
      shortTitle: 'Kalıtım ve Çaprazlamalar',
      badge: 'Kavramlar & LGS',
      pageRange: '',
      concepts: ['Gregor Mendel', 'Genotip', 'Fenotip', 'Saf Döl (Homozigot)', 'Melez Döl (Heterozigot)', 'Baskın (Dominant) Alel', 'Çekinik (Resesif) Alel', 'Tek Karakter Çaprazlaması', 'İnsanda Cinsiyet Kalıtımı (XX-XY)', 'Akraba Evliliği'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Kalıtımla İlgili Temel Kavramlar',
          paragraphs: [
            'Canlıların sahip olduğu saç rengi, göz rengi, kan grubu, tohum şekli gibi özelliklerin her birine "karakter" denir. Bu karakterlerin nesilden nesile aktarılmasını inceleyen bilim dalına Kalıtım (Genetik) adı verilir.',
            'Alel Gen: Bir karakterin oluşumunda etkili olan özelliklerin her biridir. Alel genlerin biri anneden, diğeri babadan gelir ve yavru bireyde karakteri oluşturmak için çiftler halinde bulunurlar.',
            'Baskın (Dominant) Gen: Bulunduğu gen çiftinde her zaman kendi özelliğini fenotipe (dış görünüşe) yansıtan gendir. Büyük harfle (A, B, U) gösterilir.',
            'Çekinik (Resesif) Gen: Sadece kendisi gibi çekinik bir genle yan yana geldiğinde özelliğini gösterebilen, baskın genin yanında gizli kalan gendir. Küçük harfle (a, b, u) gösterilir.',
            'Genotip ve Fenotip: Canlının sahip olduğu genetik kodların tamamına (iç yapısına) genotip denir. Genotipin ve çevresel faktörlerin etkisiyle ortaya çıkan dış görünüşe ise fenotip denir.',
            'Saf Döl (Homozigot): Karakteri oluşturan alel genlerin ikisinin de aynı olması durumudur (AA: Saf döl baskın, aa: Saf döl çekinik).',
            'Melez Döl (Heterozigot): Karakteri oluşturan alel genlerin birbirinden farklı olması durumudur (Aa: Melez döl baskın). Melez döl, dış görünüşte her zaman baskın karakterin özelliğini gösterir ancak çekinik geni genotipinde "taşıyıcı" olarak gizler.'
          ],
          keyPoints: [
            'Genotip: Genlerin harflerle ifadesidir (AA, Aa, aa).',
            'Fenotip: Canlının dışarıdan gözlemlenen fiziksel özelliğidir (Sarı tohum, yeşil tohum).',
            'Taşıyıcı Birey: Melez (Aa) genotipe sahip olup fenotipinde çekinik özelliği göstermeyen ancak çocuklarına aktarabilen bireydir.'
          ]
        },
        {
          heading: 'Çaprazlamalar, Bağımsız Olasılık ve Akraba Evlilikleri',
          paragraphs: [
            'Anne ve babadan gelen alel genlerin yavruda yan yana gelme olasılıklarının hesaplanmasına çaprazlama denir. İki melez döl (Aa x Aa) bezelyenin çaprazlanmasında: %25 AA (Saf baskın), %50 Aa (Melez baskın), %25 aa (Saf çekinik) genotip oranları elde edilir.',
            'Bağımsız Olasılık Kuralı: Çaprazlama sonucunda bulunan oranlar kesin olarak oluşacak yavru sayısını veya sırasını göstermez, sadece her bir yavru için var olan matematiksel ihtimali (olasılığı) gösterir. Örneğin yeşil tohumlu olma ihtimali %25 ise, oluşan 100 bezelyenin 100\'ü de yeşil olabilir ya da hiçbiri yeşil olmayabilir.',
            'Çekinik fenotipli (dış görünüşlü) bir yavrunun oluşabilmesi için çekinik genin kesinlikle hem anneden hem de babadan gelmesi zorunludur. Eğer anne veya babadan sadece biri baskın saf (AA) özelliğe sahipse, hiçbir yavru çekinik (aa) dış görünüşlü olamaz.',
            'Cinsiyete Bağlı Kalıtım: İnsanlarda 46 kromozom bulunur (44 vücut, 2 cinsiyet kromozomu). Dişilerde XX, erkeklerde XY\'dir. Yavruların kız (XX) olma ihtimali %50, erkek (XY) olma ihtimali her zaman %50\'dir. Doğacak çocuğun cinsiyetini babadan gelen spermdeki X veya Y kromozomu belirler.',
            'Akraba Evlilikleri ve Kalıtsal Hastalıklar: Kalıtsal hastalıkların çoğu çekinik genlerle (a) taşınır. Akraba evliliği genetik hastalığa kesinlikle neden olmaz; sadece aynı soydan geldikleri için eşlerde ortak bozuk genlerin bulunma ve yavruda (aa) şeklinde yan yana gelme riskini (ihtimalini) artırır.'
          ],
          table: {
            headers: ['Kavram / Soru Alanı', 'Öğrencinin Düşündüğü (Yanlış Mantık)', 'Kavram Yanılgısının Düzeltilmesi (Doğru Yaklaşım)'],
            rows: [
              ['Çaprazlama Sonuçları ve Kesinlik', 'Çaprazlamada %25 sarı tohum çıkmışsa 4 tohumdan tam 1 tanesi kesinlikle sarı olmak zorundadır.', 'Çaprazlama oranları doğacak her bir yavru için geçerli matematiksel ihtimaldir. Yüzlerce yavrunun tamamı da %25\'lik ihtimale denk gelebilir.'],
              ['Cinsiyetin Belirlenmesi', 'Doğacak çocuğun cinsiyetini anne belirler ya da önceki çocukların cinsiyetine bağlıdır.', 'Anneden sadece X gelebilir. Cinsiyeti babadan gelen sperm (X veya Y) belirler. Her doğumda ihtimal geçmişten bağımsız olarak %50\'dir.'],
              ['Çekinik Özelliğin Aktarımı', 'Kısa boylu çocuğun olması için anne veya babadan birinin kesinlikle kısa boylu olması gerekir.', 'Anne ve baba fenotipte uzun boylu melez (Aa) taşıyıcı olup çekinik genleri birleştirerek (aa) kısa boylu çocuk sahibi olabilirler.'],
              ['Akraba Evliliği', 'Akraba evliliği yapanların çocukları kesinlikle hasta doğar; akraba olmayanların çocukları asla hasta olmaz.', 'Akraba evliliği hastalık yaratmaz, gizli çekinik genlerin karşılaşma riskini artırır. Çok sağlıklı çocukları da olabilir.'],
              ['Taşıyıcılık ve Hastalık', 'Genotipinde kalıtsal hastalık geni bulunduran herkes (Aa) aynı zamanda hastadır.', 'Hastalık geni taşımak ile hasta olmak farklıdır. Çekinik taşınan hastalıklarda melez (Aa) bireyler taşıyıcıdır ancak fenotipte tamamen sağlıklıdır.']
            ]
          },
          examNote: '📌 LGS & ÖS ÇIKMIŞ SORU KRİTİK KALIPLARI: 1) Baskın fenotipli iki bireyin çaprazlanması sonucu oluşan yavruların yalnızca fenotipine bakarak ebeveynlerin genotipleri kesin olarak belirlenemez; çünkü iki melezden de tesadüfen sadece baskın yavrular doğabilir. 2) Art arda üç kız çocuğu doğmuş bir ailenin dördüncü çocuğunun erkek olma ihtimali yine %50\'dir; her doğumda olasılık bağımsız olarak sıfırdan başlar.'
        }
      ],
      glossary: [
        { term: 'Alel', definition: 'Bir karakterin kalıtımından sorumlu gen çeşitlerinden her biri.' },
        { term: 'Genotip', definition: 'Canlının genetik kodlarının ve alel çiftlerinin tamamı.' },
        { term: 'Fenotip', definition: 'Genotip ve çevre etkileşimiyle canlının dış görünüşünde beliren özellik.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Doğacak çocuğun cinsiyetini anneden gelen yumurta hücresi belirler.', isCorrect: false, explanation: 'Yumurta daima X taşır; cinsiyeti babadan gelen X veya Y spermi belirler.' },
        { id: 2, statement: 'Akraba evliliği kalıtsal hastalıkların ortaya çıkma olasılığını artırır.', isCorrect: true, explanation: 'Ortak atadan gelen çekinik genlerin yan yana gelme şansı yükselir.' },
        { id: 3, statement: 'Melez iki dölün çaprazlanmasında çekinik fenotip görülme olasılığı %25’tir.', isCorrect: true, explanation: "Aa x Aa çaprazlamasında aa oranı 1/4 yani %25'tir." },
        {"id":4,"statement":"İnsanda yeni doğacak bir bebeğin cinsiyetini anneden gelen yumurta hücresi belirler.","isCorrect":false,"explanation":"Anneden sadece X kromozomu gelir; babanın sperminden X gelirse kız (XX), Y gelirse erkek (XY) olur, cinsiyeti babadan gelen sperm hücresi belirler."},
        {"id":5,"statement":"Saf döl çekinik iki bezelye çaprazlandığında (aa x aa), oluşacak yavruların tamamı kesinlikle çekinik fenotipli olur.","isCorrect":true,"explanation":"Her iki ebeveynden sadece çekinik alel (a) geleceğinden tüm yavrular aa genotipli ve çekinik fenotipli olur."}
      ],
      lgsQuestions: [
        ...sebahattinDnaQuestions.filter(q => q.subTopicId === 'g8-u2-sub2'),
        {
          id: 1,
          theme: 'Mendel Çaprazlamaları ve İhtimal Hesapları',
          cognitiveLevel: 'Uygulama ve Genetik Çıkarım',
          contextTitle: 'Melez Sarı Tohumlu Bezelyelerin Çaprazlanması',
          scenario: 'Bezelyelerde sarı tohum aleli yeşil tohum aleline baskındır. Heterozigot sarı tohumlu iki bezelye bitkisi kendi arasında çaprazlanmış ve 400 adet yeni bezelye tohumu elde edilmiştir.',
          questionPrompt: 'Genetik kurallara göre elde edilen bu tohumların beklenen fenotip dağılımı hangisinde doğru verilmiştir?',
          options: [
            { key: 'A', text: 'Yaklaşık 300 tanesi sarı tohumlu, yaklaşık 100 tanesi ise yeşil tohumlu olur.' },
            { key: 'B', text: 'Tohumların 400 tanesi de istisnasız melez genotipli sarı tohumlu olur.' },
            { key: 'C', text: 'Yaklaşık 200 tanesi yeşil tohumlu, yaklaşık 200 tanesi sarı tohumlu olur.' },
            { key: 'D', text: 'Tohumların tamamı çekinik karakterli saf döl yeşil tohumlu olarak gelişir.' }
          ],
          correctAnswer: 'A',
          explanation: "Melez iki döl çaprazlandığında (Ss x Ss) fenotip oranı %75 sarı, %25 yeşildir. 400 tohumun 300'ü sarı, 100'ü yeşil beklenir."
        },
        {
          id: 2,
          theme: 'Fenotipten Genotip Belirleme',
          cognitiveLevel: 'Tersine Akıl Yürütme',
          contextTitle: 'Mor Çiçekli Bezelyelerin Beyaz Çiçekli Yavrusu',
          scenario: 'Mor çiçekli iki bezelye bitkisinin çaprazlanması sonucunda beyaz çiçekli bezelyeler elde edilmiştir. Bezelyelerde mor çiçek aleli beyaz çiçek aleline baskındır.',
          questionPrompt: 'Bu çaprazlama ve oluşan yavrular hakkında yapılan aşağıdaki çıkarımlardan hangisi kesinlikle doğrudur?',
          options: [
            { key: 'A', text: 'Çaprazlanan mor çiçekli bezelyelerin her ikisi de homozigot baskın genotiptedir.' },
            { key: 'B', text: 'Çaprazlanan ata bezelyelerin her ikisinde de çekinik beyaz çiçek geni mevcuttur.' },
            { key: 'C', text: 'Oluşan mor çiçekli yavruların tamamı saf döl genotipe sahiptir.' },
            { key: 'D', text: 'Beyaz çiçekli bezelyenin oluşması ortam sıcaklığının değişmesinden kaynaklanan bir modifikasyondur.' }
          ],
          correctAnswer: 'B',
          explanation: 'Çekinik fenotipli (beyaz) yavrunun oluşabilmesi için her iki ebeveynden de küçük alel gelmelidir; bu da ata bezelyelerin heterozigot (melez) olduğunu kanıtlar.'
        },
        {
          id: 3,
          theme: 'İnsanda Cinsiyet Kalıtımı',
          cognitiveLevel: 'Kavramsal Muhakeme',
          contextTitle: 'Üç Erkek Çocuğu Olan Bir Ailenin Dördüncü Çocuğu',
          scenario: 'Bir ailenin art arda doğan ilk üç çocuğu da erkek olmuştur. Anne ve baba dördüncü çocuklarının cinsiyetinin ne olacağını merak etmektedir.',
          questionPrompt: 'İnsanda cinsiyetin kalıtım kuralları dikkate alındığında dördüncü çocuk ile ilgili hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Önceki çocuklar erkek olduğu için dördüncü çocuğun kız olma olasılığı yüzde yüze yakındır.' },
            { key: 'B', text: 'Babanın sperm hücresi sadece Y kromozomu ürettiği için yeni çocuk kesinlikle erkek olur.' },
            { key: 'C', text: "Her gebelik bağımsız bir olaydır ve dördüncü çocuğun kız ya da erkek olma olasılığı daima yüzde 50'dir." },
            { key: 'D', text: 'Anneden gelen yumurta hücresinin türü bebeğin cinsiyetini tek başına belirler.' }
          ],
          correctAnswer: 'C',
          explanation: "Her doğum birbirinden bağımsız bir genetik olaydır. Her seferinde kız veya erkek olma olasılığı %50'dir."
        },
        {
          id: 4,
          theme: 'Akraba Evliliği ve Genetik Riskler',
          cognitiveLevel: 'Toplumsal Sağlık ve Mantık Muhakeme',
          contextTitle: 'Akraba Evliliklerinde Kalıtsal Hastalık Sıklığı',
          scenario: 'Kalıtsal hastalık genleri toplumda genellikle çekinik alellerle taşınır. Bir bireyin hasta olabilmesi için hem anneden hem de babadan bu çekinik hastalık genini alması gerekir.',
          questionPrompt: 'Akraba evliliklerinde kalıtsal hastalıkların daha sık görülmesinin temel bilimsel açıklaması hangisidir?',
          options: [
            { key: 'A', text: 'Akraba evliliği yapan bireylerin DNA sarmalında yeni ve ölümcül nükleotid çeşitlerinin ortaya çıkması.' },
            { key: 'B', text: 'Akraba olan kişilerin kan gruplarının farklı olması sebebiyle embriyonun anne karnında zehirlenmesi.' },
            { key: 'C', text: 'Akrabaların vücut kromozomu sayısının 46 yerine 48 olması.' },
            { key: 'D', text: 'Aynı soydan gelen bireylerin genetik yapılarının benzer olması sebebiyle çekinik hastalık genlerinin bir araya gelme olasılığının artması.' }
          ],
          correctAnswer: 'D',
          explanation: 'Akrabalar ortak atadan benzer genler taşır. Bu durum çekinik hastalık genlerinin (aa) bir araya gelerek fenotipte hastalık oluşturma riskini ciddi biçimde artırır.'
        }
      ]
    },
    {
      id: 'g8-u2-sub3',
      title: '3. Bölüm: Mutasyon ve Modifikasyon',
      shortTitle: 'Mutasyon ve Modifikasyon',
      badge: 'Kavramlar & LGS',
      pageRange: '',
      concepts: ['Mutasyon', 'Modifikasyon', 'Kalıtsallık Durumu', 'Genin Yapısı vs Genin İşleyişi', 'Çuha Çiçeği', 'Himalaya Tavşanı', 'Radyasyon ve Kimyasallar', 'Orak Hücre Anemisi ve Albinoluk'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Mutasyon: Nedenleri, Etkileri ve Kalıtsallığı',
          paragraphs: [
            'DNA\'nın kendini eşlemesi sırasında veya çeşitli çevresel faktörlerin etkisiyle DNA\'nın diziliminde, yapısında veya kromozom sayısında meydana gelen kalıcı değişikliklere mutasyon denir.',
            'Mutasyona Neden Olan Faktörler (Mutajenler): Radyasyon, X ışınları, ultraviyole (UV) ışınlar, bazı kimyasal maddeler, aşırı sıcaklık ve zararlı ilaçlar DNA\'nın yapısını bozabilir.',
            'Bir DNA diziliminde nükleotidlerin yanlış eşleşmesi veya karşılıklı zincirlerde nükleotid eksikliği olması mutasyona örnektir ve bu durum o genin şifrelediği proteinin hatalı üretilmesine veya hiç üretilememesine yol açar (LGS ÇIKTI).',
            'Bir canlının genlerinde meydana gelen mutasyon, o canlının fenotipinde (dış görünüşünde) eksik organ oluşumu (örneğin taç yaprağı olmayan çiçek) gibi belirgin değişikliklere ve anormalliklere neden olabilir (ÖS ÇIKTI).',
            'Kalıtsallık Durumu: Mutasyonlar canlının üreme hücrelerinde (sperm, yumurta, polen) meydana gelirse dölden döle aktarılır, yani kalıtsaldır. Ancak sadece vücut hücrelerinde (deri, karaciğer, yaprak) meydana gelirse sadece o canlıyı etkiler, yavrulara kesinlikle aktarılmaz (kalıtsal değildir) (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Mutasyonun Etkileri: Çoğu mutasyon zararlıdır (Kanser, Albinoluk, Down Sendromu, Altı parmaklılık, Hemofili gibi). Ancak nadiren de olsa canlıya yaşama ve üreme avantajı sağlayan, kalıtsal çeşitliliğe (varyasyona) yol açan yararlı mutasyonlar da vardır (Çekirdeksiz üzüm, bakterilerin antibiyotiğe direnç kazanması gibi).'
          ],
          keyPoints: [
            'Gen Yapısı Değişimi: Mutasyonda DNA nükleotid dizilimi veya kimyasal yapısı doğrudan bozulur (LGS ÇIKTI).',
            'Üreme vs Vücut Hücresi: Sadece üreme hücresindeki mutasyon dölden döle aktarılır (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Yararlı Mutasyonlar: Çekirdeksiz üzüm ve bakteri direnci kalıtsal çeşitliliği artıran yararlı mutasyon örnekleridir.'
          ]
        },
        {
          heading: 'Modifikasyon: Çevrenin Gen İşleyişine Etkisi',
          paragraphs: [
            'Çevre şartlarının (sıcaklık, ışık, nem, besin vb.) etkisiyle canlının dış görünüşünde (fenotipinde) meydana gelen kalıtsal olmayan geçici değişikliklere modifikasyon denir.',
            'Modifikasyonda genlerin veya DNA\'nın yapısı (dizilimi) kesinlikle değişmez; sadece çevrenin etkisiyle genlerin işleyişi (çalışma şekli) değişir (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Çevresel etken ortadan kalktığında canlı genellikle eski hâline geri dönebilir ve bu özellikler yavrulara asla aktarılmaz.',
            'Sıkça Karşılaşılan Modifikasyon Örnekleri: 1. Sıcaklık Etkisi: Çuha çiçeği tohumları 15-20°C\'de kırmızı, 30-35°C\'de beyaz çiçek açar (ÖS ÇIKTI). 2. Sıcaklık Etkisi: Himalaya tavşanlarının sırtındaki beyaz kıllar kazınıp buz bağlandığında siyah kıl çıkması; sıcak ortama alınınca tekrar beyaz çıkması (ÖS ÇIKTI). 3. Sıcaklık Etkisi: Bazı arı/böcek türlerinin yumurtalarının yetiştirildiği sıcaklık değiştikçe vücut renginin koyudan açığa değişmesi (LGS ÇIKTI). 4. Beslenme Etkisi: Arı sütüyle beslenen larvaların kraliçe arı, polenle beslenenlerin işçi arı olması (ÖS ÇIKTI). 5. Işık Etkisi: Karanlıkta çimlenen tohumların sarı, ışıkta yeşil olması; yazın tenin bronzlaşması.'
          ],
          table: {
            headers: ['Kavram / Soru Alanı', 'Öğrencinin Düşündüğü (Yanlış Mantık)', 'Kavram Yanılgısının Düzeltilmesi (Doğru Yaklaşım)'],
            rows: [
              ['Mutasyonların Aktarımı', 'Bir canlıda mutasyon olmuşsa doğacak çocuklarında da bu durum kesinlikle görülür.', 'Mutasyonun kalıtsal olabilmesi için sadece üreme hücrelerinde (sperm, yumurta) olması şarttır. Vücut hücrelerindeki mutasyon yavruya geçmez (LGS ÇIKTI).'],
              ['Modifikasyonda Genetik Yapı', 'Himalaya tavşanına buz konunca siyah kıl çıkması soğuk havanın yeni bir gen yarattığını gösterir.', 'Modifikasyonda genlerin yapısı (nükleotid dizilimi) kesinlikle DEĞİŞMEZ. Sadece genin işleyişi (çalışması) değişir (ÖS ÇIKTI).'],
              ['Çevresel Etkenler', 'Çevrenin (ısı, ışık, radyasyon, besin) sebep olduğu tüm değişimler modifikasyondur.', 'Sıcaklık ve besin modifikasyon yapar. Ancak radyasyon ve zararlı kimyasallar DNA zincirini kopararak mutasyona neden olur (ÖS ÇIKTI).'],
              ['Mutasyonun Zararı', 'Mutasyon her zaman hastalık ve ölüm demektir; canlılara asla bir faydası olamaz.', 'Çoğu zararlı olsa da, çekirdeksiz üzüm ve bakteri antibiyotik direnci gibi kalıtsal çeşitlilik sağlayan yararlı mutasyonlar da vardır.']
            ]
          },
          examNote: '📌 LGS & ÖS ÇIKMIŞ SORU KRİTİK KALIPLARI: Genotipleri tamamen aynı iki bitkiden birinin UV ışınına (radyasyona), diğerinin ise sadece farklı bir sıcaklığa maruz bırakıldığı deneyde; radyasyon genin yapısını bozarak kalıcı mutasyona, sıcaklık ise sadece genin işleyişini değiştirerek geçici modifikasyona neden olur (ÖS ÇIKTI).'
        }
      ],
      glossary: [
        { term: 'Mutasyon', definition: 'Canlının genetik diziliminde çevresel veya kopyalama hataları sonucu oluşan kalıcı değişim.' },
        { term: 'Modifikasyon', definition: 'Çevresel faktörlerle genin işleyişinin değişmesi sonucu ortaya çıkan kalıtsal olmayan değişim.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Vücut geliştirme yapan bir sporcunun çocukları da kaslı doğar.', isCorrect: false, explanation: 'Kas gelişimi modifikasyondur, gen yapısını değiştirmez.' },
        { id: 2, statement: 'Üreme hücrelerinde meydana gelen mutasyonlar sonraki nesillere aktarılır.', isCorrect: true, explanation: 'Üreme hücresi mutasyonları kalıtsaldır.' },
        { id: 3, statement: 'Çuha çiçeğinin sıcaklığa göre farklı renk çiçek açması mutasyondur.', isCorrect: false, explanation: 'Genin işleyişi değiştiği için modifikasyondur.' },
        {"id":4,"statement":"Radyasyon etkisiyle van kedisinin gözlerinin farklı renkte olması kalıtsal bir mutasyondur.","isCorrect":true,"explanation":"Göz renklerinin farklılığı genetik materyalde meydana gelen mutasyon sonucu ortaya çıkmış ve sonraki nesillere aktarılabilen bir özelliktir."},
        {"id":5,"statement":"Çuha çiçeğinin 15-25 °C sıcaklıkta kırmızı, 30-35 °C sıcaklıkta beyaz çiçek açması DNA yapısının değiştiğini kanıtlar.","isCorrect":false,"explanation":"Bu durum modifikasyondur; DNA yapısı (nükleotid dizilimi) değişmez, yalnızca genin işleyişi sıcaklık etkisiyle değişir."}
      ],
      lgsQuestions: [
        ...sebahattinDnaQuestions.filter(q => q.subTopicId === 'g8-u2-sub3'),
        {
          id: 1,
          theme: 'Çevre Faktörleri ve Gen İşleyişi',
          cognitiveLevel: 'Deney Analizi ve Yorumlama',
          contextTitle: 'Çuha Çiçeğinde Sıcaklığa Bağlı Renk Değişimi',
          scenario: 'Kırmızı çiçekli bir çuha bitkisi 30 derece sıcaklıktaki seraya alındığında açan yeni çiçeklerinin beyaz renkli olduğu gözlemlenmiştir. Bu beyaz çiçekli bitkiden alınan tohumlar 18 derecede çimlendirildiğinde yeniden kırmızı çiçekler açmıştır.',
          questionPrompt: 'Çuha bitkisinde gerçekleşen bu durum ile ilgili aşağıdaki çıkarımlardan hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Çevre sıcaklığı çiçek rengini belirleyen genin işleyişini değiştirmiştir ve bu durum modifikasyondur.' },
            { key: 'B', text: 'Yüksek sıcaklık bitkinin DNA yapısında kalıcı bir mutasyona sebep olmuştur.' },
            { key: 'C', text: 'Bitkinin kromozom sayısı sıcaklık değişimine bağlı olarak yarıya inmiştir.' },
            { key: 'D', text: 'Beyaz renkli çiçek özelliği sonraki tüm nesillere değişmeden kalıtsal olarak aktarılır.' }
          ],
          correctAnswer: 'A',
          explanation: 'Sıcaklık etkisiyle genin yapısı değil işleyişi değişmiştir. Ortam şartları eski haline dönünce bitki tekrar kırmızı açmıştır; bu klasik bir modifikasyondur.'
        },
        {
          id: 2,
          theme: 'Himalaya Tavşanı ve Modifikasyon',
          cognitiveLevel: 'Kontrollü Deney Değerlendirmesi',
          contextTitle: 'Himalaya Tavşanında Kürk Rengi Deneyi',
          scenario: 'Himalaya tavşanının sırtındaki beyaz tüyler tıraşlanıp üzerine buz torbası bağlandığında çıkan yeni tüylerin siyah olduğu görülmüştür. Daha sonra bu siyah tüyler tıraşlanıp tavşan sıcak ortamda tutulduğunda yeniden beyaz tüyler çıkmıştır.',
          questionPrompt: 'Bu kontrollü deneyden çıkarılacak en temel bilimsel sonuç hangisidir?',
          options: [
            { key: 'A', text: 'Buz torbası tavşanın DNA diziliminde nesilden nesile aktarılan kalıcı bir hasar bırakmıştır.' },
            { key: 'B', text: 'Çevre sıcaklığı tavşanın tüy rengini belirleyen genlerin işleyişini değiştirerek modifikasyon oluşturmuştur.' },
            { key: 'C', text: 'Tavşanın sırtında oluşan siyah tüyler sonraki tüm yavrularına doğrudan aktarılır.' },
            { key: 'D', text: 'Tavşan soğuk ortamda vücut sıcaklığını korumak için yeni bir canlı türüne dönüşmüştür.' }
          ],
          correctAnswer: 'B',
          explanation: 'Soğuk etkisiyle gen işleyişi değişip siyah tüy çıkmış, sıcakta tekrar beyaz çıkmıştır. Bu kalıtsal olmayan bir modifikasyondur.'
        },
        {
          id: 3,
          theme: 'Mutasyonların Kalıtsallık Şartı',
          cognitiveLevel: 'Hücresel Düzeyde Muhakeme',
          contextTitle: 'Röntgen Işınlarına Maruz Kalan İki Birey',
          scenario: 'Hamileliğin ilk haftalarında kontrolsüzce röntgen ışınlarına maruz kalan bir anne adayının üreme hücrelerindeki DNA diziliminde kırılmalar meydana gelmiş ve doğan bebeğinde altı parmaklılık görülmüştür.',
          questionPrompt: 'Bu olay ve mutasyonların kalıtımı ile ilgili aşağıdaki ifadelerden hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Röntgen ışınları sadece canlının dış görünüşünü geçici olarak etkileyen bir modifikasyon etkenidir.' },
            { key: 'B', text: 'Vücut hücrelerinde meydana gelen tüm mutasyonlar istisnasız çocuklara doğrudan aktarılır.' },
            { key: 'C', text: 'Üreme hücrelerinde gerçekleşen genetik bozulmalar kalıtsaldır ve sonraki kuşaklara aktarılır.' },
            { key: 'D', text: 'Altı parmaklılık durumu bebek büyüdüğünde çevresel etkenlerle kendiliğinden düzelir.' }
          ],
          correctAnswer: 'C',
          explanation: 'Eşey yani üreme hücrelerinde meydana gelen mutasyonlar kalıtsaldır ve döllere aktarılır. Vücut hücresi mutasyonları ise sadece bireyi bağlar.'
        },
        {
          id: 4,
          theme: 'Besin Farklılığı ve Kraliçe Arı Oluşumu',
          cognitiveLevel: 'Kavramsal Sınıflandırma',
          contextTitle: 'Arı Larvalarının Beslenme Farklılığı',
          scenario: 'Genetik olarak tamamen özdeş olan dişi arı larvalarından arı sütü ile beslenenler iri yapılı ve doğurgan kraliçe arıya, çiçek tozu ile beslenenler ise kısır işçi arılara dönüşmektedir.',
          questionPrompt: 'Aynı genetik yapıya sahip arı larvalarının farklı özellikler kazanması aşağıdaki kavramlardan hangisi ile açıklanır?',
          options: [
            { key: 'A', text: 'Kraliçe arının kromozom sayısının işçi arılardan iki kat fazla olması.' },
            { key: 'B', text: 'Arı sütünün larvaların genetik kodunda kalıcı mutasyonlara yol açması.' },
            { key: 'C', text: 'Arıların kurak çevre koşullarına uyum sağlamak için adaptasyon geliştirmesi.' },
            { key: 'D', text: 'Besin türünün genlerin işleyişini değiştirmesi sonucunda ortaya çıkan modifikasyon.' }
          ],
          correctAnswer: 'D',
          explanation: 'Aynı genotipe sahip larvaların besin farkıyla farklı fenotipler oluşturması kalıtsal olmayan bir modifikasyon örneğidir.'
        }
      ]
    },
    {
      id: 'g8-u2-sub4',
      title: '4. Bölüm: Adaptasyon (Çevreye Uyum)',
      shortTitle: 'Adaptasyon ve Doğal Seçilim',
      badge: 'Kavramlar & LGS',
      pageRange: '',
      concepts: ['Adaptasyon', 'Doğal Seçilim', 'Varyasyon (Tür İçi Çeşitlilik)', 'Kamuflaj', 'Kutup Ayısı ve Kaktüs Uyumları', 'Yaşama ve Üreme Şansı'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Adaptasyon (Çevreye Uyum) ve Hayatta Kalma Stratejileri',
          paragraphs: [
            'Canlıların bulundukları ortamda (ekosistemde) hayatta kalma, beslenme, barınma, avlanma ve üreme şansını artıran kalıtsal özellikler kazanmasına adaptasyon denir.',
            'Kalıtsallık Durumu: Adaptasyonlar doğrudan canlının genetik yapısında (DNA\'sında) şifrelenmiş olan özelliklerdir. Bu nedenle kazanılan tüm adaptasyonlar nesilden nesile kesinlikle aktarılır (kalıtsaldır) (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Süreç: Adaptasyonlar, canlının bilerek ve isteyerek aniden yaptığı değişiklikler değildir. Uzun yıllar (milyonlarca yıl) süren doğal seçilim süreçlerinin bir sonucudur.',
            'Farklı Ortam / Aynı Tür: Farklı ekosistemlerde yaşayan aynı tür canlılar, bulundukları ortama uyum sağlamak için birbirinden farklı adaptasyonlar geliştirirler. Örneğin; çöl tilkisi ısı kaybını artırmak için ince, uzun kulaklara ve kum rengi posta sahipken, kutup tilkisi ısı kaybını engellemek için küçük/kısa kulaklara ve karda gizlenebilmek için beyaz posta sahiptir (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Aynı Ortam / Farklı Tür: Aynı ekosistemde yaşayan farklı tür canlılar, hayatta kalmak için birbirine benzer adaptasyonlar geliştirebilir. Örneğin; çölde yaşayan çöl faresi ve çöl tilkisinin her ikisinin de uzun kulaklı ve kum renkli olması veya suda yaşayan balık ve balinaların vücutlarının yüzmeye uygun hidrodinamik (mekik) yapıda olması (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Önemli Adaptasyon Çeşitleri: 1. Kamuflaj (Saklanma): Canlıların bulundukları ortamın zeminine, rengine veya desenine uyum sağlayarak avcılarından saklanması veya avlarına hissettirmeden yaklaşmasıdır (ör. yaprak böceğinin kurumuş yaprağa benzemesi) (ÖS ÇIKTI). 2. Mimikri (Taklit Etme): Zararsız canlıların korunmak için tehlikeli veya zehirli canlıların desen ve renklerine sahip olmasıdır (zararsız sineklerin sarı-siyah arı desenleri taşıması, zehirli ok kurbağasının parlak renklerle uyarması) (LGS ÇIKTI) (ÖS ÇIKTI). 3. Kaktüslerin yapraklarının iğne şeklinde ve gövdelerinin su depo edici olması bitkisel adaptasyondur (ÖS ÇIKTI).'
          ],
          keyPoints: [
            'Kalıtsallık: Adaptasyonlar DNA\'da yazılıdır ve nesilden nesile kesinlikle aktarılır (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Farklı Ortam - Aynı Tür: Farklı adaptasyonlar geliştirir (Çöl tilkisi vs Kutup tilkisi) (LGS ÇIKTI).',
            'Aynı Ortam - Farklı Tür: Benzer adaptasyonlar geliştirir (Çöl faresi ve Çöl tilkisi) (LGS ÇIKTI).'
          ]
        },
        {
          heading: 'Doğal Seçilim ve Varyasyon İlişkisi',
          paragraphs: [
            'Varyasyon (Tür İçi Çeşitlilik): Aynı türe ait bireyler arasında, genetik yapıdan (mutasyonlardan veya eşeyli üremeden) kaynaklanan farklılıklardır. İnsanlardaki ten renkleri, köpeklerdeki kürk çeşitliliği birer varyasyondur. Varyasyonlar doğal seçilime malzeme sağlar (ÖS ÇIKTI).',
            'Doğal Seçilim: Çevre şartlarına (iklim, hastalık, besin kıtlığı, avcı) en uygun özellikleri taşıyan canlıların hayatta kalması, uyum sağlayamayan zayıf canlıların ise zamanla elenerek yok olmasıdır.',
            'Model Kurgusu: Renkli kumaşlar üzerine rastgele dağıtılmış farklı renklerdeki boncuklardan (böcekler), kumaşla zıt renkte olanların avcılar tarafından kolayca görülüp toplanması (elenmesi), kumaşla aynı renkte olanların ise kamufle olup hayatta kalarak çoğalması doğal seçilimin bir sonucudur (LGS ÇIKTI) (ÖS ÇIKTI).'
          ],
          table: {
            headers: ['Kavram / Soru Alanı', 'Öğrencinin Düşündüğü (Yanlış Mantık)', 'Kavram Yanılgısının Düzeltilmesi (Doğru Yaklaşım)'],
            rows: [
              ['Adaptasyonun Gelişimi', 'Kaktüsler susuz kaldıkları için yapraklarını bilerek ve isteyerek iğneye dönüştürmüşlerdir.', 'Adaptasyonlar canlının isteğiyle sonradan kazanılmaz (Lamarckizm yanılgısı). Mutasyon ve varyasyonlarla çıkan özelliklerden ortama uygun olanların hayatta kalmasıyla nesillere aktarılır.'],
              ['Anlık Renk Değişimi', 'Bukalemunun zemine göre renk değiştirmesi geçici olduğu için kesinlikle modifikasyondur.', 'Bukalemunun renk değiştirme yeteneği, yaşama şansını artıran, doğuştan gelen ve yavrularına aktardığı kalıtsal bir adaptasyondur (Kamuflaj).'],
              ['Aynı Ekosistem - Genotip', 'Çölde yaşayan fare ile tilkinin ikisinin de kulakları uzundur, çünkü DNA\'ları zamanla birbirinin aynısı olur.', 'Farklı türler aynı ortamda benzer dış görünüş (fenotip) geliştirebilir; ancak genotipleri veya nükleotid dizilimleri aynı demek değildir.'],
              ['Çevre Değişimi ve Adaptasyon', 'Kutup ayısını hayvanat bahçesine veya Ekvator\'a götürürsek sıcaktan tüyleri incelir ve boz renge döner (yeni adaptasyon geliştirir).', 'Adaptasyonlar genetiktir ve kalıcıdır. Bir canlı farklı ortama götürüldüğünde genleri anında değişmez; eski adaptasyonları işe yaramazsa doğal seçilime uğrar ve ölür.']
            ]
          },
          examNote: '📌 LGS & ÖS ÇIKMIŞ SORU KRİTİK KALIPLARI: 1) Canlılar doğal ortamlarından alınıp tamamen farklı çevre şartlarına götürüldüklerinde hemen yeni ortama uygun adaptasyon geliştiremezler; eski özellikleri dezavantaja dönüşerek doğal seçilimle elenirler (LGS ÇIKTI). 2) Tarlalara tarım ilacı sıkıldığında bazı böceklerin hayatta kalması ilacın böcek genetiğini değiştirmesi değil; popülasyonda baştan beri var olan dirençli varyasyonların doğal seçilimle hayatta kalıp çoğalmasıdır (LGS ÇIKTI).'
        }
      ],
      glossary: [
        { term: 'Adaptasyon', definition: 'Canlının bulunduğu ortamda hayatta kalma ve neslini devam ettirme şansını artıran kalıtsal uyum.' },
        { term: 'Doğal Seçilim', definition: 'Ortama uyum sağlayan canlıların yaşaması, uyum sağlayamayanların elenmesi süreci.' },
        { term: 'Varyasyon', definition: 'Bir türün kendi bireyleri arasında gözlemlenen genetik çeşitlilik.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Adaptasyonlar çevre etkisiyle kazanılır ve sonraki nesillere aktarılmaz.', isCorrect: false, explanation: 'Adaptasyonlar kalıtsaldır ve yavrulara aktarılır.' },
        { id: 2, statement: 'Kutup ayılarının ayak tabanlarının geniş olması karda batmasını engeller.', isCorrect: true, explanation: 'Geniş yüzey alanı basıncı azaltan kalıtsal bir adaptasyondur.' },
        { id: 3, statement: 'Doğal seçilim sonucunda ortama en iyi uyum sağlayan canlılar hayatta kalır.', isCorrect: true, explanation: 'Uyum sağlayanlar yaşar ve ürer.' },
        {"id":4,"statement":"Kutup tilkilerinin kulak ve burunlarının çöl tilkilerine göre küçük olması vücuttan ısı kaybını azaltmaya yönelik bir adaptasyondur.","isCorrect":true,"explanation":"Soğuk iklimde yaşayan canlıların uç organlarının küçük olması yüzey alanını küçülterek ısı kaybını minimize eder."},
        {"id":5,"statement":"Kamuflaj yeteneği sayesinde çevreye uyum sağlayan bukalemunun bu özelliği kalıtsal olmayıp sonradan öğrenilen bir davranıştır.","isCorrect":false,"explanation":"Kamuflaj nesilden nesile aktarılan kalıtsal bir adaptasyondur."}
      ],
      lgsQuestions: [
        ...sebahattinDnaQuestions.filter(q => q.subTopicId === 'g8-u2-sub4'),
        {
          id: 1,
          theme: 'Doğal Seçilim Mekanizması',
          cognitiveLevel: 'Model ve Popülasyon Muhakemesi',
          contextTitle: 'Kahverengi Toprak Adasındaki Tavşanlar',
          scenario: 'Toprak örtüsü tamamen kahverengi olan bir adaya eşit sayıda beyaz ve kahverengi tüylü tavşanlar bırakılmıştır. Adaya gelen yırtıcı kartal ve tilkilerin avlanma davranışları 5 yıl boyunca izlenmiştir.',
          questionPrompt: 'Beş yıllık süre sonunda bu adadaki tavşan popülasyonunda gerçekleşen değişim hangisinde doğru açıklanmıştır?',
          options: [
            { key: 'A', text: 'Beyaz tavşanlar avcılar tarafından kolay fark edilip avlandığı için elenmiş, kahverengi tavşanlar kamufle olarak hayatta kalmıştır.' },
            { key: 'B', text: 'Beyaz tavşanlar soğuktan korunmak için kürk rengini kendi istekleriyle kahverengiye çevirmiştir.' },
            { key: 'C', text: 'Avcılar sadece kahverengi tavşanları tercih ettiği için adada yalnızca beyaz tavşanlar çoğalmıştır.' },
            { key: 'D', text: 'Tavşanların tamamı adadan göç etmiş ve doğal seçilim gerçekleşmemiştir.' }
          ],
          correctAnswer: 'A',
          explanation: 'Kahverengi zeminde kamufle olan kahverengi tavşanlar hayatta kalıp üremiş, belirgin olan beyaz tavşanlar elenmiştir; bu durum doğal seçilimdir.'
        },
        {
          id: 2,
          theme: 'İklim Şartlarına Göre Vücut Çıkıntıları',
          cognitiveLevel: 'Karşılaştırmalı Anatomi Analizi',
          contextTitle: 'Kutup Tilkisi ile Çöl Tilkisinin Fiziksel Özellikleri',
          scenario: 'Kutup tilkilerinin kulak ve burun gibi vücut çıkıntıları oldukça küçük ve basık iken, çöl tilkilerinin kulakları geniş ve uzundur.',
          questionPrompt: 'Aynı canlı grubuna ait bu iki tür arasındaki vücut yapısı farklılığının temel adaptasyon sebebi nedir?',
          options: [
            { key: 'A', text: 'Çöl tilkilerinin daha hızlı koşarak avlarını yakalamak istemesi.' },
            { key: 'B', text: 'Kutup tilkisinin küçük çıkıntılarla ısı kaybını azaltması, çöl tilkisinin ise geniş kulaklarla fazla ısıyı vücuttan atması.' },
            { key: 'C', text: 'Kutuplardaki karların tilkilerin kulaklarını dondurarak zamanla küçültmesi.' },
            { key: 'D', text: 'Çöl tilkilerinin kürk renginin modifikasyon sonucu kalıtsal hale gelmesi.' }
          ],
          correctAnswer: 'B',
          explanation: 'Soğukta yaşayan canlılarda küçük çıkıntılar ısı tasarrufu sağlar; sıcakta yaşayan canlılarda geniş çıkıntılar fazla vücut ısısının atılmasını sağlar.'
        },
        {
          id: 3,
          theme: 'Bitkilerde Su Tasarrufu Adaptasyonları',
          cognitiveLevel: 'Ekolojik Morfoloji Değerlendirmesi',
          contextTitle: 'Kaktüs ve Nilüfer Bitkilerinin Yaprak Yapıları',
          scenario: 'Çölde yaşayan kaktüs bitkisi yapraklarını dikene dönüştürüp gövdesinde su depolarken, sulak alanlarda yaşayan nilüfer bitkisi geniş yapraklara ve bol gözeneklere sahiptir.',
          questionPrompt: 'Bu iki bitkinin yaprak morfolojileri ile ilgili aşağıdaki yargılardan hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Kaktüsün diken yaprakları bol miktarda terleme yaparak ortamı nemlendirir.' },
            { key: 'B', text: 'Nilüfer bitkisi yapraklarını geniş tutarak su kaybetmekten tamamen kaçınır.' },
            { key: 'C', text: 'Kaktüs kurak iklimde su kaybını en aza indirmek, nilüfer ise bol sulu ortamda fazla suyu uzaklaştırmak için uyum sağlamıştır.' },
            { key: 'D', text: 'Bir kaktüs göle dikilirse birkaç gün içinde yaprakları nilüfer gibi genişler.' }
          ],
          correctAnswer: 'C',
          explanation: 'Diken yaprak kurak ortamda su kaybını önler; geniş yaprak ise sulak ortamda fazla suyun terlemeyle atılmasını sağlar.'
        },
        {
          id: 4,
          theme: 'Sanayi Melanızmi ve Güve Kelebekleri',
          cognitiveLevel: 'Tarihsel Biyoloji ve Çıkarım',
          contextTitle: 'Sanayi Devrimi Öncesi ve Sonrası Güve Kelebekleri',
          scenario: 'İngiltere’de sanayi devrimi öncesinde ağaç gövdeleri açık renkli likenlerle kaplıyken açık renkli güve kelebeklerinin sayısı fazlaydı. Fabrika bacalarından çıkan kurumlar ağaçları kararttığında açık renkli kelebekler kuşlar tarafından kolayca avlanmış ve siyah güve kelebeklerinin popülasyonu hızla artmıştır.',
          questionPrompt: 'Yaşanan bu süreç ile ilgili aşağıdaki değerlendirmelerden hangisi yanlıştır?',
          options: [
            { key: 'A', text: 'Kelebek popülasyonundaki açık ve koyu renk çeşitliliği varyasyona örnektir.' },
            { key: 'B', text: 'Koyu renkli ağaç gövdelerinde siyah kelebeklerin hayatta kalması doğal seçilimdir.' },
            { key: 'C', text: 'Koyu renkli kelebekler ortama kamufle olarak yaşama ve üreme şanslarını artırmıştır.' },
            { key: 'D', text: 'Açık renkli kelebekler fabrika dumanının sıcaklığından etkilenerek siyah renge dönüşmüş birer modifikasyondur.' }
          ],
          correctAnswer: 'D',
          explanation: 'Kelebeklerin rengi sonradan dumanla boyanmamıştır; zaten popülasyonda var olan koyu renk varyantları kamufle olarak hayatta kalmış ve doğal seçilim gerçekleşmiştir.'
        }
      ]
    },
    {
      id: 'g8-u2-sub5',
      title: '5. Bölüm: Biyoteknoloji',
      shortTitle: 'Biyoteknoloji ve Genetik Mühendisliği',
      badge: 'Kavramlar & LGS',
      pageRange: '',
      concepts: ['Biyoteknoloji', 'Genetik Mühendisliği', 'Gen Aktarımı', 'Gen Tedavisi', 'Klonlama (Dolly)', 'Aşı ve İnsülin Üretimi', 'GDO (Genetiği Değiştirilmiş Organizmalar)', 'Yapay Seçilim ve Islah'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Biyoteknoloji ve Genetik Mühendisliği Arasındaki İlişki',
          paragraphs: [
            'Genetik Mühendisliği: Canlıların kalıtsal özelliklerini değiştirerek onlara yeni işlevler kazandırılmasına yönelik mikroskobik boyutta araştırmalar yapan bilim dalıdır. DNA üzerinde gen aktarımı, gen tedavisi ve klonlama gibi teknikleri geliştirir.',
            'Biyoteknoloji: Genetik mühendisliğinin geliştirdiği bu yöntemleri birer "araç" olarak kullanarak insanlık için faydalı veya ticari ürünler (ilaç, aşı, dirençli tohum, hormon) üretilmesini sağlayan daha geniş kapsamlı bir alandır.',
            'Gen Aktarımı: Bir canlının hücresindeki DNA\'nın belirli bir bölümünün (ilgili genin) alınarak başka bir canlıya aktarılmasıdır. Böylece geni alan canlı, daha önce sahip olmadığı yeni bir özelliği kazanmış olur. Örneğin; ateş böceğinin ışık saçmasını sağlayan genin tütün bitkisine aktarılması sonucu tütün bitkisinin ışık saçabilmesi gen aktarımıdır (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Bakteride İnsülin Üretimi (Görsel Model): Memeli hücresinden insülin geni kesilip alınır. Bakterinin halkasal plazmit DNA\'sına eklenir. Bu bakteriler hızla çoğalarak insülin proteini sentezlemeye başlar (ÖS ÇIKTI).',
            'Gen Tedavisi: Hücrelerdeki eksik, hatalı veya zararlı genlerin etkisini ortadan kaldırmak amacıyla, hastalara sağlıklı genlerin (çoğunlukla özel virüsler aracılığıyla) aktarılıp hastalığın hücresel boyutta tedavi edilmesidir (ÖS ÇIKTI).',
            'Klonlama: Seçilen bir canlının birebir genetik kopyasının (aynı DNA dizilimine sahip yeni bir bireyin) üretilmesidir. Klonlama Süreci: A koyununun vücut hücresi çekirdeği alınır. B koyununun çekirdeksiz yumurtasına yerleştirilir. Embriyo taşıyıcı C koyununun rahmine konur. Doğan kuzu (D), sadece çekirdeği alınan A koyununun kopyasıdır. Sperm kullanılmadığı için klonlama eşeyli üreme değildir (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Geleneksel Islah: İstenilen özelliklere (bol süt/et veren hayvanlar, iri buğday) sahip canlıların seçilip eşleştirilmesidir; ancak uzun sürer ve istenmeyen özellikler de yavrulara geçebilir (ÖS ÇIKTI).'
          ],
          keyPoints: [
            'Gen Aktarımı: Canlıya doğasında olmayan yepyeni bir özellik kazandırma (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Gen Tedavisi: Var olan bozuk/hatalı geni düzeltme veya tedavi etme (ÖS ÇIKTI).',
            'Klonlama: Döllenme ve sperm olmaksızın vücut hücresi çekirdeğiyle kopyalama yapılması (LGS ÇIKTI).'
          ]
        },
        {
          heading: 'Biyoteknolojinin Uygulama Alanları ve Etkileri',
          paragraphs: [
            'Olumlu (Faydalı) Etkileri: Hastalıkların tedavisi için aşı ve ilaç (antibiyotik, insülin) üretilmesi, tarımda böceklere ve soğuğa dirençli GDO\'lu bitkilerin üretilmesi, petrolü yiyip temizleyen genetiği değiştirilmiş özel bakterilerin çevre temizliğinde kullanılması (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Olumsuz (Zararlı) Etkileri: GDO\'lu ürünlerin ekosisteme yayılmasıyla doğal türlerin (biyoçeşitliliğin) bozulması, alerjik reaksiyonlar ve yeni hastalık riski, süper zararlı böcek/otların ortaya çıkması ve ekolojik dengenin bozulmasıdır (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Biyoteknolojik faaliyetlerin hepsi yapay laboratuvar yöntemi değildir; bazen GDO\'lu organizmalar kendi aralarında çaprazlanarak da yeni faydalı biyolojik süreçlere dahil edilebilirler (ÖS ÇIKTI).'
          ],
          table: {
            headers: ['Kavram / Soru Alanı', 'Öğrencinin Düşündüğü (Yanlış Mantık)', 'Kavram Yanılgısının Düzeltilmesi (Doğru Yaklaşım)'],
            rows: [
              ['Klonlamanın Genetiği', 'Klonlanan kuzu, onu karnında taşıyan taşıyıcı anneye veya yumurtayı veren canlıya benzer.', 'Taşıyıcı annenin veya yumurtayı veren canlının genetik hiçbir katkısı yoktur. Yavrunun genetik yapısı (DNA\'sı) %100 çekirdeği alınan canlı ile tamamen aynıdır.'],
              ['Klonlamada Üreme Şekli', 'Klonlama sonucunda anne karnından yavru doğduğu için bu olay eşeyli üreme ile gerçekleşmiştir.', 'Klonlamada sperm hücresi kullanılmaz, döllenme yoktur. Bir vücut hücresinin çekirdeğiyle laboratuvarda çoğaltım yapıldığı için genetik kopyalamadır, eşeyli üreme değildir.'],
              ['Gen Tedavisi vs Gen Aktarımı', 'Ateş böceğinin ışık saçma geninin bitkiye aktarılıp parlatılması Gen Tedavisidir.', 'Gen tedavisi sadece var olan hatalı/bozuk geni düzeltmek için yapılır. Sağlıklı bir bitkiye yepyeni bir özellik kazandırılması Gen Aktarımıdır.'],
              ['Biyoteknolojinin Doğallığı', 'Biyoteknolojik faaliyetlerin hepsi laboratuvarda yapılan yapay ve kimyasal işlemlerdir.', 'Geleneksel ıslah, sütten yoğurt/peynir yapılması, mayalanma işlemleri veya petrol yiyen bakteriler gibi biyolojik süreçler de biyoteknolojidir.'],
              ['Biyoteknolojinin Zararları', 'Biyoteknoloji sadece hastalıkları çözer ve açlığı önler; çevreye hiçbir zararı olamaz.', 'GDO ekosisteme karıştığında yerel türlerin (biyoçeşitliliğin) yok olmasına, alerjilere ve süper dirençli zararlıların çıkmasına neden olabilir (LGS ÇIKTI).']
            ]
          },
          examNote: '📌 LGS & ÖS ÇIKMIŞ SORU KRİTİK KALIPLARI: Bir tarım alanına böcek ilacına ihtiyaç duyulmaması için "kendi zehrini üreten" GDO\'lu bitki ekildiğinde, polenlerin rüzgârla çevreye dağılarak faydalı böceklerin (arıların) ve diğer yerel bitkilerin ölümüne yol açması, biyoteknolojinin biyoçeşitlilik ve besin zinciri üzerindeki yıkıcı etkisini gösterir (LGS ÇIKTI).'
        }
      ],
      glossary: [
        { term: 'Gen Aktarımı', definition: 'Bir canlının belirli bir özelliğini kodlayan genin başka bir organizmaya nakledilmesi.' },
        { term: 'Klonlama', definition: 'Bir canlının genetik kopyasının eşeysiz yöntemlerle üretilmesi.' },
        { term: 'GDO', definition: 'Modern biyoteknolojik yöntemlerle gen dizilimine müdahale edilmiş organizma.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Bakterilere gen aktarılarak insan insülin hormonu üretilebilmektedir.', isCorrect: true, explanation: 'Biyoteknolojik yöntemle bakteriler insülin sentezler.' },
        { id: 2, statement: 'Klonlanan kuzu taşıyıcı annenin genetik özelliklerini taşır.', isCorrect: false, explanation: 'Klonlanan kuzu çekirdeği alınan canlıyla aynı genotiptedir.' },
        { id: 3, statement: 'Geleneksel ıslah çalışmaları genetik mühendisliğine göre çok daha kısa sürede sonuç verir.', isCorrect: false, explanation: 'Geleneksel ıslah nesiller boyu uzun yıllar alır.' },
        {"id":4,"statement":"Ateş böceğinin ışık saçma geninin tütün bitkisine aktarılması sonucunda bitkinin ışık saçması gen aktarımı (gen transferi) yöntemine örnektir.","isCorrect":true,"explanation":"Bir canlı türünden başka bir canlı türüne gen transfer edilerek yeni bir özellik kazandırılmıştır."},
        {"id":5,"statement":"Biyoteknolojik yöntemlerle elde edilen GDO’lu ürünlerin doğaya kontrolsüz salınması ekolojik dengede ve biyoçeşitlilikte bozulmalara yol açabilir.","isCorrect":true,"explanation":"GDO’lu organizmalar doğal türlerle rekabete girerek yerel gen kaynaklarını ve biyoçeşitliliği tehdit edebilir."}
      ],
      lgsQuestions: [
        ...sebahattinDnaQuestions.filter(q => q.subTopicId === 'g8-u2-sub5'),
        {
          id: 1,
          theme: 'Bakteri ile İnsülin Hormonu Üretimi',
          cognitiveLevel: 'Biyoteknolojik Süreç Analizi',
          contextTitle: 'Bakterilere İnsan İnsülin Geni Aktarımı',
          scenario: 'Sağlıklı insan hücrelerinden insülin üretiminden sorumlu gen kesilip çıkarılmış, bakterilerin DNA halkasına eklenmiş ve bu bakterilerin çoğalarak şeker hastaları için saf insülin üretmesi sağlanmıştır.',
          questionPrompt: 'Bu biyoteknolojik çalışma ile ilgili aşağıdaki ifadelerden hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Farklı canlı türleri arasında gen aktarımı yapılarak canlıya yeni bir biyolojik özellik kazandırılmıştır.' },
            { key: 'B', text: "Bakterinin tüm DNA yapısı insan DNA'sı ile tamamen yer değiştirmiştir." },
            { key: 'C', text: 'Üretilen insülin hormonu bakterinin kendi hücrelerini yok ederek ölmesine neden olur.' },
            { key: 'D', text: 'Bu işlem geleneksel yöntemlerle yapılan yapay seçilime bir örnektir.' }
          ],
          correctAnswer: 'A',
          explanation: 'İnsandan bakteriye gen aktarılarak bakteriye insülin sentezleme yeteneği kazandırılmıştır.'
        },
        {
          id: 2,
          theme: 'Klonlama Basamakları ve Genetik Benzerlik',
          cognitiveLevel: 'Görsel Şema ve Genetik Eşleştirme',
          contextTitle: "Dolly'nin Klonlanma Aşamaları",
          scenario: 'A koyununun vücut hücresinden çekirdek alınmış, B koyununun çekirdeği çıkartılmış yumurta hücresine yerleştirilmiştir. Gelişen embriyo C koyununun rahmine nakledilmiş ve sağlıklı bir kuzu dünyaya gelmiştir.',
          questionPrompt: 'Dünyaya gelen klon kuzu genetik özellikleri bakımından hangi koyunun birebir kopyasıdır?',
          options: [
            { key: 'A', text: 'Yumurta hücresini sağlayan B koyununun kopyasıdır.' },
            { key: 'B', text: 'Vücut hücresinin çekirdeği alınan A koyununun kopyasıdır.' },
            { key: 'C', text: 'Embriyoyu karnında taşıyan C koyununun kopyasıdır.' },
            { key: 'D', text: 'A, B ve C koyunlarının genetik özelliklerinin eşit orandaki birleşimidir.' }
          ],
          correctAnswer: 'B',
          explanation: "Kalıtsal bilgiler çekirdekteki DNA'da bulunur. Çekirdek A koyunundan alındığı için doğan kuzu A koyununun genetik kopyasıdır."
        },
        {
          id: 3,
          theme: 'Tarımsal Biyoteknoloji ve Besin Zenginleştirme',
          cognitiveLevel: 'Kazanım ve Çıkarım',
          contextTitle: 'A Vitamini Öncülü İçeren Altın Pirinç',
          scenario: 'Genetik mühendisleri nergis çiçeğinden aldıkları beta-karoten üretiminden sorumlu geni pirinç bitkisine aktararak taneleri sarı renkli ve yüksek A vitamini içeren altın pirinç üretmişlerdir.',
          questionPrompt: 'Altın pirinç üretimi ile ilgili aşağıdaki değerlendirmelerden hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Pirinç bitkisinin genetik yapısı değiştirilmeden sadece gübreleme ile renk değişimi sağlanmıştır.' },
            { key: 'B', text: 'Pirinç bitkisinde meydana gelen bu değişim kalıtsal olmayıp gelecek yıla aktarılmaz.' },
            { key: 'C', text: 'Biyoteknolojik yöntemlerle bitkilerin besin içeriği zenginleştirilerek insan sağlığına yarar sağlanmıştır.' },
            { key: 'D', text: 'Bu işlem sonucunda pirinç bitkisi tamamen farklı bir meyve türüne dönüşmüştür.' }
          ],
          correctAnswer: 'C',
          explanation: 'Gen aktarımıyla pirincin vitamin değeri artırılmış ve yetersiz beslenmeyle mücadelede faydalı bir biyoteknolojik ürün elde edilmiştir.'
        },
        {
          id: 4,
          theme: 'Biyoteknolojinin Olası Ekolojik Riskleri',
          cognitiveLevel: 'Eleştirel Düşünme ve Risk Analizi',
          contextTitle: "GDO'lu Tarım Ürünleri ve Çevre Etkileşimi",
          scenario: 'Böcek ilaçlarına karşı dirençli gen aktarılmış mısır tarlalarından rüzgâr ve böceklerle taşınan polenlerin, tarlanın çevresindeki yabani bitkilerle tozlaştığı ve bu yabani otların da tarım ilaçlarına karşı süper dirençli hale geldiği tespit edilmiştir.',
          questionPrompt: 'Bu durum biyoteknolojik uygulamaların hangi olumsuz yönüne kanıt oluşturur?',
          options: [
            { key: 'A', text: 'Tarımsal üretimde verimin sınırsız şekilde artmasına.' },
            { key: 'B', text: 'İlaç üretiminde kullanılan bitki çeşitliliğinin hızla tükenmesine.' },
            { key: 'C', text: 'Genetiği değiştirilmiş bitkilerin fotosentez yapmayı bırakmasına.' },
            { key: 'D', text: 'Genetik kirlilik oluşarak doğal ekosistemdeki yabani türlerin dengesinin bozulmasına ve kontrolsüz direnç yayılmasına.' }
          ],
          correctAnswer: 'D',
          explanation: "GDO'lu bitkilerden çevreye yayılan genler yabani otlara geçerek süper dirençli otlar oluşturabilir; bu durum genetik kirlilik ve ekolojik risk olarak tanımlanır."
        }
      ]
    }
  ]
};

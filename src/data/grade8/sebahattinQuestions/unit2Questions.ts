import { LgsQuestion } from '../../../types/curriculum';

// ============================================================================
// 2. ÜNİTE: DNA VE GENETİK KOD - SEBAHATTİN LGS SORU HAVUZU
// ============================================================================

export const sebahattinDnaQuestions: LgsQuestion[] = [
  // Subtopic 1: DNA ve Genetik Kod
  {
    id: 2101,
    subTopicId: 'g8-u2-sub1',
    contextTitle: 'DNA\'da Meydana Gelen Bozulmalar ve Onarım',
    scenario: 'Bir canlıya ait DNA parçası şöyledir:\n1. Zincir: A - T - 1 - G - S - A - 3 - 4 - A - S - S\n2. Zincir: T - A - A - S - 2 - T - T - A - T - 5 - G\nBilge bu DNA ile ilgili;\nI. Bu sorun DNA\'nın yapısının tamamen bozulmasına neden olur ve düzeltilemez.\nII. Meydana gelen olaya radyasyon neden olmuş olabilir.\nIII. DNA\'nın bu sorunu düzeltmesi için 2 timin, 2 guanin, 1 adenin nükleotidine ihtiyacı vardır.\nIV. Sadece tek zincirdeki boşluklar onarılabilirken karşılıklı boşluklar onarılamaz.\nnotlarını almıştır.',
    questionPrompt: 'Öğretmeni Bilge\'nin notlarını kontrol ettiğinde hangilerinin doğru olduğunu onaylar?',
    options: [
      { key: 'A', text: 'I ve III' },
      { key: 'B', text: 'II, III ve IV' },
      { key: 'C', text: 'I ve V' },
      { key: 'D', text: 'Yalnız I' }
    ],
    correctAnswer: 'B',
    explanation: 'DNA\'da tek zincirde meydana gelen eksiklikler karşı zincirdeki baza göre onarılabilir (1=T, 2=G, 3=A, 4=T, 5=G). Toplamda 2 timin, 2 guanin, 1 adenin gerekir. Radyasyon buna sebep olabilir. Karşılıklı zincirde boşluk olmadığı için bu DNA tamamen onarılabilir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'DNA Onarım Mekanizması',
    theme: 'DNA Yapısı ve Eşlenmesi'
  },
  {
    id: 2102,
    subTopicId: 'g8-u2-sub1',
    contextTitle: 'Hücre Çekirdeğindeki Kalıtsal Yapıların Hiyerarşisi',
    scenario: 'Hücre çekirdeğinde yer alan yapılar incelendiğinde:\n• Kromozom: DNA ve özel protein kılıfın oluşturduğu en büyük yapıdır.\n• DNA: Yönetici molekül olup çift zincirlidir.\n• Gen: DNA üzerindeki görev birimidir.\n• Nükleotid: DNA\'nın en küçük yapı birimidir.',
    questionPrompt: 'Buna göre bu yapılarla ilgili aşağıdaki ifadelerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'DNA bölümleri birleşerek genleri oluşturur.' },
      { key: 'B', text: 'Genler DNA üzerindeki görev birimleridir.' },
      { key: 'C', text: 'Tüm canlıların sahip olduğu genler tamamen aynıdır.' },
      { key: 'D', text: 'Genler doğrudan kromozomlardan oluşur.' }
    ],
    correctAnswer: 'B',
    explanation: 'DNA üzerinde belirli kalıtsal özellikleri şifreleyen anlamlı bölgelere gen denir ve genler DNA\'nın görev birimidir.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Kalıtsal Yapılar Hiyerarşisi',
    theme: 'Genetik Yapılar'
  },
  {
    id: 2103,
    subTopicId: 'g8-u2-sub1',
    contextTitle: 'İç İçe Oyuncak Kutular Modeli',
    scenario: 'Elif Öğretmen fen bilimleri dersinde iç içe geçirilebilen 4 farklı renkteki kutuyu tahtaya yansıtmıştır. 1 (en küçük) < 2 < 3 < 4 (en büyük).\nÖğrencilerden DNA, gen, kromozom ve nükleotid kavramlarını bu kutularla eşleştirmelerini istemiştir.',
    questionPrompt: 'Buna göre öğrencilerin söylediği ifadelerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: '1 nolu kutu nükleotidi temsil eder; sırası ve sayısı canlıların akrabalık durumları hakkında bilgi verir.' },
      { key: 'B', text: '2 nolu kutu geni temsil eder; yönetici molekülün anlamlı görev birimidir.' },
      { key: 'C', text: '3 nolu kutu DNA\'yı temsil eder; tüm canlılarda 4 farklı çeşidi olup dizilimi canlıdan canlıya değişir.' },
      { key: 'D', text: '4 nolu kutu nükleotidi temsil eder; DNA\'nın en küçük parçasıdır.' }
    ],
    correctAnswer: 'D',
    explanation: 'En büyük olan 4 nolu kutu kromozomu temsil eder (protein kılıf + DNA). Nükleotid en küçük olan 1 nolu kutudur.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Görsel Model Eşleştirme',
    theme: 'Kromozom, DNA, Gen, Nükleotid'
  },
  {
    id: 2104,
    subTopicId: 'g8-u2-sub1',
    contextTitle: 'Düğmelerle DNA Modeli Tasarımı',
    scenario: 'Emre fen bilimleri proje ödevi için DNA modeli hazırlayacaktır:\n• Deoksiriboz şekeri için ayrı bir düğme\n• Fosfat grubu için ayrı bir düğme\n• 4 çeşit organik baz için farklı renkte düğmeler seçecektir.',
    questionPrompt: 'Buna göre Emre yapacağı modelde en az kaç farklı düğme şekli ve rengi kullanmalıdır?',
    options: [
      { key: 'A', text: '3 şekil, 3 renk' },
      { key: 'B', text: '3 şekil, 6 renk (Fosfat, Şeker, A, T, G, C)' },
      { key: 'C', text: '4 şekil, 4 renk' },
      { key: 'D', text: '2 şekil, 4 renk' }
    ],
    correctAnswer: 'B',
    explanation: 'Fosfat, Deoksiriboz şekeri ve Organik baz olmak üzere 3 temel bileşen (3 şekil); fosfat, şeker ve 4 çeşit organik baz için ise toplam 6 farklı renk kullanılmalıdır.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Model Tasarımı',
    theme: 'DNA Nükleotid Yapısı'
  },
  {
    id: 2105,
    subTopicId: 'g8-u2-sub1',
    contextTitle: 'DNA Eşlenmesi Basamakları Sıralaması',
    scenario: 'DNA\'nın kendini eşleme basamakları şunlardır:\n1. Sitoplazmada serbest halde bulunan nükleotidler çekirdeğe girer.\n2. DNA\'nın çift zincirli yapısı enzimler yardımıyla bir fermuar gibi ikiye ayrılır.\n3. Ayrılan zincirlerin karşısına serbest nükleotidler uygun şekilde (A-T, G-C) yerleşir.\n4. Eşler tamamlandıktan sonra başlangıçtaki ile tıpatıp aynı iki yeni DNA molekülü oluşur.',
    questionPrompt: 'DNA eşlenmesinin gerçekleşme sırası aşağıdakilerden hangisinde doğru verilmiştir?',
    options: [
      { key: 'A', text: '2 - 1 - 3 - 4' },
      { key: 'B', text: '1 - 2 - 4 - 3' },
      { key: 'C', text: '2 - 3 - 1 - 4' },
      { key: 'D', text: '4 - 1 - 2 - 3' }
    ],
    correctAnswer: 'A',
    explanation: 'Önce DNA fermuar gibi açılır (2), ardından sitoplazmadan çekirdeğe serbest nükleotidler girer (1), açılan zincirlerin karşısına yerleşir (3) ve son olarak başlangıçtaki ile aynı iki yeni DNA oluşur (4). Sıralama 2 - 1 - 3 - 4\'tür.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Süreç Basamaklandırma',
    theme: 'DNA Replikasyonu'
  },
  {
    id: 2106,
    subTopicId: 'g8-u2-sub1',
    contextTitle: 'DNA Kendini Eşlerken Sitoplazma ve Çekirdek Madde Değişimi Grafiği',
    scenario: 'Hücre bölünmesi öncesinde çekirdekteki DNA molekülü kendini hatasız olarak eşlemektedir. Bu süreçte sitoplazmada serbest dolaşan maddeler ile çekirdekteki madde miktarları ölçülmüştür.',
    questionPrompt: 'DNA eşlenmesi sırasında sitoplazmadaki serbest nükleotid, deoksiriboz şekeri ve fosfat miktarlarının zamana bağlı değişim grafiği nasıldır?',
    options: [
      { key: 'A', text: 'Sitoplazmadaki serbest nükleotid, şeker ve fosfat miktarları sürekli azalırken çekirdekteki miktarlar artar.' },
      { key: 'B', text: 'Sitoplazmadaki organik baz miktarı artarken fosfat miktarı sabit kalır.' },
      { key: 'C', text: 'Hem sitoplazmada hem çekirdekteki nükleotid miktarı aynı anda artış gösterir.' },
      { key: 'D', text: 'Sitoplazmadaki serbest nükleotid miktarı değişmez çünkü yeni nükleotidler doğrudan çekirdekte sentezlenir.' }
    ],
    correctAnswer: 'A',
    explanation: 'DNA eşlenirken çekirdekteki yeni zincirlerin yapımında kullanılmak üzere sitoplazmadaki serbest nükleotidler, fosfat ve deoksiriboz şekerleri çekirdek zarından içeri alınır. Dolayısıyla sitoplazmadaki miktarları azalır, çekirdekteki toplam nükleotid miktarı 2 katına çıkar.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Hücresel Madde Trafiği ve Eşlenme',
    theme: 'DNA Eşlenmesinde Madde Değişimleri'
  },
  {
    id: 2107,
    subTopicId: 'g8-u2-sub1',
    contextTitle: 'Tüm Canlılarda Aynı 4 Baz Varken Tür Çeşitliliğinin Sebebi',
    scenario: 'Tüm canlıların (insan, bakteri, meşe ağacı, mantar) DNA\'sında sadece 4 çeşit organik baz (Adenin, Timin, Guanin, Sitozin) bulunmasına rağmen yeryüzünde milyonlarca farklı canlı türü ve aynı türe ait bireyler arasında genetik farklılıklar mevcuttur.',
    questionPrompt: 'Canlıların birbirinden farklı genetik özelliklere sahip olmasının temel sebebi hangisinde doğru ifade edilmiştir?',
    options: [
      { key: 'A', text: 'Her canlı türünün farklı bir çeşit organik baza sahip olması.' },
      { key: 'B', text: 'DNA üzerindeki nükleotidlerin sayı, sıra ve diziliminin canlıdan canlıya farklılık göstermesi.' },
      { key: 'C', text: 'Fosfat ve şeker moleküllerinin canlı türüne göre farklı kimyasal bağ yapması.' },
      { key: 'D', text: 'Farklı canlıların hücre çekirdeğindeki kromozomların tamamen farklı moleküllerden yapılmış olması.' }
    ],
    correctAnswer: 'B',
    explanation: 'Tüm canlılarda nükleotid çeşitleri tamamen aynıdır (A, T, G, C). Canlıların birbirine benzememesinin ve biyolojik çeşitliliğin tek kaynağı, bu nükleotidlerin DNA zinciri üzerindeki sayısı, sırası ve diziliminin farklı olmasıdır.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Genetik Kod ve Çeşitlilik',
    theme: 'Nükleotid Dizilimi ve Çeşitlilik'
  },
  {
    id: 2108,
    subTopicId: 'g8-u2-sub1',
    contextTitle: 'OK Testi: DNA Eşlenmesinde Sitoplazma ve Çekirdek Madde Grafiği',
    scenario: 'Hücre bölünmesi öncesinde DNA kendini eşlerken çekirdeğin nükleer zarı açılarak sitoplazmada serbest halde bulunan deoksiriboz şekeri, fosfat ve organik bazlar çekirdeğin içine girer ve yeni zincirlerin yapısına katılır.',
    questionPrompt: 'DNA’nın hatasız bir şekilde kendini eşlemesi sürecinde hücrenin sitoplazmasındaki ve çekirdeğindeki serbest nükleotid miktarı değişimi hangi grafikte doğru verilmiştir?',
    options: [
      { key: 'A', text: 'Sitoplazmadaki serbest nükleotid miktarı azalırken çekirdekteki serbest nükleotidler kullanılarak yeni DNA zincirleri oluşturulur.' },
      { key: 'B', text: 'Hem sitoplazmada hem çekirdekte serbest nükleotid miktarı eş zamanlı olarak artış gösterir.' },
      { key: 'C', text: 'Çekirdekteki nükleotidler parçalanarak sitoplazmaya fırlatılır.' },
      { key: 'D', text: 'Sitoplazmadaki deoksiriboz şekeri miktarı artarken fosfat miktarı sıfıra düşer.' }
    ],
    correctAnswer: 'A',
    explanation: 'DNA eşlenirken sitoplazmada hazır bekleyen serbest deoksiriboz, fosfat ve organik bazlar çekirdek içine girer. Dolayısıyla sitoplazmadaki serbest madde miktarı azalır; çekirdeğe giren maddeler açılan zincirlerin karşısına eşleşerek yeni DNA moleküllerini oluşturur. Doğru cevap A seçeneğidir.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Biyokimyasal Değişim Grafikleri',
    theme: 'OK Testi: DNA Eşlenmesi ve Madde Tüketimi'
  },
  {
    id: 2109,
    subTopicId: 'g8-u2-sub1',
    contextTitle: 'OK Testi: DNA Hasarlarının Onarımı ve Kalıcı Mutasyon Durumları',
    scenario: 'Hücre çekirdeğindeki DNA molekülünde meydana gelen üç farklı hasar durumu incelenmiştir:\n• 1. Durum: Birinci zincirdeki Adenin bazının karşısındaki baz kopmuş ve boş kalmıştır.\n• 2. Durum: Birinci zincirdeki Guanin bazının karşısına yanlışlıkla Timin bazı bağlanmıştır.\n• 3. Durum: Karşılıklı her iki zincirdeki nükleotidler aynı anda kopmuş ve çift taraflı boşluk oluşmuştur.',
    questionPrompt: 'Bu durumların onarılabilme durumları ile ilgili aşağıdaki değerlendirmelerden hangisi doğrudur?',
    options: [
      { key: 'A', text: '1. ve 2. durumdaki hasarlar enzimler tarafından onarılabilirken, 3. durumdaki hasar onarılamaz ve kalıcı mutasyona neden olur.' },
      { key: 'B', text: 'Her üç hasar durumu da hücre tarafından kusursuz olarak hemen onarılır.' },
      { key: 'C', text: 'Yalnızca 2. durum onarılamaz; 1. ve 3. durumlar tamir edilir.' },
      { key: 'D', text: 'DNA kendini eşlerken hiçbir hasarı onaramaz, her hata hücrenin anında ölümüne yol açar.' }
    ],
    correctAnswer: 'A',
    explanation: 'Tek zincirdeki boşluklar (1. Durum) karşı zincirdeki baza bakılarak doldurulabilir. Yanlış eşleşmeler de (2. Durum) kesilip doğru baz getirilerek tamir edilir. Ancak her iki zincirin karşılıklı boş kaldığı durumlarda (3. Durum) kalıp bilgi olmadığından DNA bu hasarı onaramaz ve mutasyon oluşur. Doğru cevap A seçeneğidir.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Hücresel Onarım Mekanizmaları',
    theme: 'OK Testi: DNA Hasarları ve Onarım Şartları'
  },
  {
    id: 2110,
    subTopicId: 'g8-u2-sub1',
    contextTitle: 'OK Testi: Malzemelerle DNA Modeli Tasarımı ve Sınırlayıcı Bileşen',
    scenario: 'Bir öğrencinin elinde bir DNA modeli yapmak için şu malzemeler bulunmaktadır:\n• 60 adet kırmızı raptiye (Fosfat molekülü)\n• 50 adet sarı düğme (Deoksiriboz şekeri)\n• 15 adet mavi kart (Adenin bazı)\n• 12 adet yeşil kart (Timin bazı)\n• 20 adet beyaz kart (Guanin bazı)\n• 18 adet turuncu kart (Sitozin bazı)',
    questionPrompt: 'Öğrenci elindeki malzemeleri kurallara uygun olarak eksiksiz kullandığında en fazla kaç nükleotidden oluşan bir çift zincirli DNA modeli inşa edebilir?',
    options: [
      { key: 'A', text: '50 nükleotid (Sarı düğmeler - Deoksiriboz şekeri sınırlayıcıdır ve en fazla 50 nükleotid oluşturulabilir)' },
      { key: 'B', text: '60 nükleotid (Fosfat sayısı kadar)' },
      { key: 'C', text: '65 nükleotid (Tüm organik bazların toplamı kadar)' },
      { key: 'D', text: '24 nükleotid (Sadece Timin bazları kadar)' }
    ],
    correctAnswer: 'A',
    explanation: 'Her nükleotidde 1 fosfat, 1 şeker ve 1 organik baz bulunmalıdır. Fosfat 60 adet, şeker 50 adettir. A-T çiftlerinden: 12 Timin ve 12 Adenin = 24 baz kullanılır. G-C çiftlerinden: 18 Sitozin ve 18 Guanin = 36 baz kullanılır; toplam baz potansiyeli 24 + 36 = 60\'tır. Fakat deoksiriboz şekeri (sarı düğme) sadece 50 adet olduğundan, kurulabilecek maksimum nükleotid sayısı şekerin miktarı olan 50 ile sınırlıdır (50 nükleotid = 25 baz çifti). Doğru cevap A seçeneğidir.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Sayısal Muhakeme ve Model Tasarımı',
    theme: 'OK Testi: DNA Modeli ve Nükleotid Eşleşmesi'
  },
  {
    id: 2111,
    subTopicId: 'g8-u2-sub1',
    contextTitle: 'OK Testi: Genom Hiyerarşisi ve Kromozom Sayısı - Gelişmişlik İlişkisizliği',
    scenario: 'Öğretmen tahtaya bazı canlıların kromozom sayılarını yazmıştır:\n• İnsan: 46 kromozom\n• Moli balığı: 46 kromozom\n• Eğrelti otu: 500 kromozom\n• Güvercin: 16 kromozom\nÖğrenciler bu tabloya bakarak çıkarımlar yapmışlardır.',
    questionPrompt: 'Tablodaki verilere göre yapılan aşağıdaki çıkarımlardan hangisi kesinlikle doğrudur?',
    options: [
      { key: 'A', text: 'Farklı türe ait canlıların (İnsan ve Moli balığı) kromozom sayıları eşit olabilir.' },
      { key: 'B', text: 'Eğrelti otunun kromozom sayısı en fazla olduğu için Dünya’nın en gelişmiş canlısıdır.' },
      { key: 'C', text: 'Güvercinin kromozom sayısı az olduğundan vücut büyüklüğü de en küçüktür.' },
      { key: 'D', text: 'Kromozom sayısı arttıkça canlının zekâ ve organ gelişmişliği de katlanarak artar.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kromozom sayısının canlının gelişmişliği, büyüklüğü veya zekâsı ile hiçbir ilişkisi yoktur (Eğrelti otu 500 kromozomlu olmasına rağmen insandan ilkeldir). İnsan ve moli balığında görüldüğü gibi farklı türlerin kromozom sayıları aynı (46) olabilir. Doğru cevap A seçeneğidir.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Biyolojik Çıkarım ve Veri Yorumlama',
    theme: 'OK Testi: Kromozom Sayısı ve Gelişmişlik'
  },

  // Subtopic 2: Kalıtım
  {
    id: 2201,
    subTopicId: 'g8-u2-sub2',
    contextTitle: 'Bezelyelerde Tohum Rengi Çaprazlama Deneyi',
    scenario: 'Bir araştırmacı sarı tohum rengindeki iki bezelyeyi kendi aralarında çaprazlamış ve oluşan birinci kuşakta hem sarı tohumlu hem de yeşil tohumlu bezelyeler elde etmiştir (Sarı tohum aleli yeşil tohum aleline baskındır).',
    questionPrompt: 'Araştırmacının yaptığı bu çalışma ile ilgili,\nI. Çaprazlanan sarı tohumlu ata bezelyeler heterozigot (melez) genotiplidir.\nII. Yeşil tohumlu bezelyeler kendi aralarında çaprazlandığında sarı tohumlu bezelye elde edilemez.\nIII. Sarı tohumlu bezelyeler homozigot ya da heterozigot genotipe sahip olabilir.\nyargılarından hangileri doğrudur?',
    options: [
      { key: 'A', text: 'Yalnız I' },
      { key: 'B', text: 'I ve II' },
      { key: 'C', text: 'II ve III' },
      { key: 'D', text: 'I, II ve III' }
    ],
    correctAnswer: 'D',
    explanation: 'Sarı tohumlu iki bezelyeden çekinik yeşil tohum (ss) çıkması için her iki atanın da melez (Ss x Ss) olması şarttır (I doğru). Yeşil tohum çekinik olduğundan (ss x ss) çaprazlamasında sadece yeşil oluşur (II doğru). Sarı renk ise SS veya Ss olabilir (III doğru).',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Mendel Çaprazlama Analizi',
    theme: 'Genotip ve Fenotip Olasılıkları'
  },
  {
    id: 2202,
    subTopicId: 'g8-u2-sub2',
    contextTitle: 'Mendel F1 ve F2 Kuşakları Çaprazlama Şeması',
    scenario: 'Saf döl mor çiçekli bezelye (MM) ile saf döl beyaz çiçekli bezelye (mm) çaprazlanarak birinci kuşakta (F1) tamamı melez mor çiçekli (Mm) bezelyeler elde edilmiştir. Ardından F1 dölünden iki bezelye kendi arasında çaprazlanarak F2 kuşağı (1 MM, 2 Mm, 1 mm) oluşturulmuştur.',
    questionPrompt: 'Mendel\'in bu çalışması incelendiğinde yapılan yorumlardan hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'F1 dölündeki bezelyelerin fenotipinde çekinik alel etkisini gösterememiştir.' },
      { key: 'B', text: 'F2 dölünde fenotip oranı %75 mor, %25 beyazdır.' },
      { key: 'C', text: 'F2 dölündeki beyaz çiçekli bezelyelerin genotipi heterozigottur.' },
      { key: 'D', text: 'F2 dölünde genotip oranı 1:2:1 (Saf Baskın : Melez : Saf Çekinik) şeklindedir.' }
    ],
    correctAnswer: 'C',
    explanation: 'Beyaz çiçek rengi çekinik özelliktir ve fenotipte ortaya çıkabilmesi için genotipinin kesinlikle saf döl homozigot (mm) olması gerekir; heterozigot olamaz.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Genetik Olasılık',
    theme: 'Kalıtım İlkeleri'
  },
  {
    id: 2203,
    subTopicId: 'g8-u2-sub2',
    contextTitle: 'Akraba Evliliği ve Kalıtsal Hastalıklar',
    scenario: 'Talasemi (Akdeniz anemisi) vücut kromozomlarında taşınan çekinik bir genle aktarılır. Anne ve babanın hasta olmadığı ancak ikisinin de taşıyıcı (heterozigot) olduğu bir ailede doğacak çocuğun talasemi hastası olma olasılığı %25\'tir. Gazete haberinde akraba evliliği yapan topluluklarda bu hastalığın görülme oranının çok daha yüksek olduğu belirtilmiştir.',
    questionPrompt: 'Akraba evliliğinin sakıncalı olmasının temel gerekçesi hangisinde doğru açıklanmıştır?',
    options: [
      { key: 'A', text: 'Akraba evliliği doğrudan yeni mutasyonların oluşmasına neden olur.' },
      { key: 'B', text: 'Aynı soydan gelen bireylerde benzer çekinik hastalık genlerinin bir araya gelme olasılığı çok daha yüksektir.' },
      { key: 'C', text: 'Akraba evliliklerinde doğan çocukların tamamı kesinlikle hasta olarak doğar.' },
      { key: 'D', text: 'Hastalık genleri sadece erkek bireyler aracılığıyla aktarılır.' }
    ],
    correctAnswer: 'B',
    explanation: 'Akraba olan bireylerin genetik benzerlikleri yüksektir. Bu nedenle çekinik olarak taşınan kusurlu hastalık alellerinin bir araya gelme (homozigot çekinik olma) ihtimali akraba evliliklerinde belirgin biçimde artar.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Sağlık ve Kalıtım Muhakemesi',
    theme: 'Akraba Evliliği Riskleri'
  },
  {
    id: 2204,
    subTopicId: 'g8-u2-sub2',
    contextTitle: 'Soy Ağacı ve Çekinik Karakter Takibi',
    scenario: 'Bir bezelye soy ağacında taralı bireyler yeşil tohumlu (çekinik) olup taralı olmayan bireyler sarı tohumludur. Sarı tohumlu 1 ve 2 nolu ebeveynlerin çocuklarından biri yeşil tohumlu olarak doğmuştur.',
    questionPrompt: 'Buna göre 1 ve 2 numaralı bireylerin genotipleri ile ilgili hangisi kesinlikle doğrudur?',
    options: [
      { key: 'A', text: 'Her iki birey de homozigot sarı tohumludur (SS).' },
      { key: 'B', text: 'Her iki birey de heterozigot melez genotiplidir (Ss).' },
      { key: 'C', text: 'Bireylerden biri homozigot sarı (SS), diğeri homozigot yeşildir (ss).' },
      { key: 'D', text: 'Bireylerin genotipleri hakkında kesin bir yorum yapılamaz.' }
    ],
    correctAnswer: 'B',
    explanation: 'Çocuğun yeşil tohumlu (ss) olabilmesi için alellerden birini anneden, diğerini babadan alması gerekir. Anne ve baba sarı tohumlu olduğuna göre her ikisinde de çekinik s geni bulunmalı, yani her ikisi de melez (Ss) olmalıdır.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Soy Ağacı Çıkarımı',
    theme: 'Soy Ağacı Analizi'
  },
  {
    id: 2205,
    subTopicId: 'g8-u2-sub2',
    contextTitle: 'Bezelyelerde Düzgün ve Buruşuk Tohum Çaprazlaması',
    scenario: 'Düzgün tohumlu iki bezelye çaprazlandığında 300 adet düzgün tohumlu, 100 adet buruşuk tohumlu bezelye elde edilmiştir (Düzgün tohum aleli D, buruşuk tohum aleli d\'ye baskındır).',
    questionPrompt: 'Oluşan bu bezelyeler ve ata bireylerle ilgili hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Çaprazlanan ata bezelyelerin ikisi de heterozigottur (Dd x Dd).' },
      { key: 'B', text: 'Oluşan bezelyelerdeki fenotip oranı 3 : 1 (Düzgün : Buruşuk) şeklindedir.' },
      { key: 'C', text: 'Oluşan düzgün tohumlu bezelyelerin tamamı kesinlikle saf döldür (DD).' },
      { key: 'D', text: 'Oluşan buruşuk tohumlu bezelyelerin genotipi homozigot çekiniktir (dd).' }
    ],
    correctAnswer: 'C',
    explanation: 'Dd x Dd çaprazlamasında oluşan 300 düzgün bezelyenin yaklaşık 100 tanesi saf döl (DD), 200 tanesi ise melez döldür (Dd). Yani düzgün tohumlu bezelyelerin hepsi saf döl değil, 2/3\'ü melezdir.',
    skillTag: 'Matematiksel Muhakeme',
    cognitiveLevel: 'Fenotip ve Genotip Oranları',
    theme: 'Mendel Oranları ve Tohum Şekli'
  },
  {
    id: 2206,
    subTopicId: 'g8-u2-sub2',
    contextTitle: 'İnsanda Cinsiyetin Belirlenmesi ve Kız/Erkek Olasılığı',
    scenario: 'Dört kız çocuğu bulunan bir ailenin beşinci çocuklarının dünyaya gelmesi beklenmektedir.',
    questionPrompt: 'Bu ailenin beşinci çocuklarının erkek olma olasılığı yüzde kaçtır?',
    options: [
      { key: 'A', text: '%100' },
      { key: 'B', text: '%50' },
      { key: 'C', text: '%25' },
      { key: 'D', text: '%10' }
    ],
    correctAnswer: 'B',
    explanation: 'Her doğum birbirinden bağımsız bir genetik olaydır. Anne daima X kromozomu verir, babadan ise %50 ihtimalle X, %50 ihtimalle Y kromozomu gelir. Önceki çocukların cinsiyeti ne olursa olsun, her yeni doğumda kız veya erkek olma olasılığı daima %50\'dir (1/2).',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Bağımsız Olasılık',
    theme: 'İnsanda Cinsiyet Kalıtımı'
  },
  {
    id: 2207,
    subTopicId: 'g8-u2-sub2',
    contextTitle: 'Melez ve Saf Çekinik Bireylerin Çaprazlanması',
    scenario: 'Melez döl mor çiçekli bezelye (Mm) ile beyaz çiçekli bezelye (mm) çaprazlanmaktadır.',
    questionPrompt: 'Bu çaprazlama sonucunda oluşacak yeni kuşakla ilgili aşağıdaki olasılıklardan hangisi doğrudur?',
    options: [
      { key: 'A', text: '%100 melez döl mor çiçekli bezelye' },
      { key: 'B', text: '%50 melez mor çiçekli (Mm), %50 saf beyaz çiçekli (mm)' },
      { key: 'C', text: '%75 mor çiçekli, %25 beyaz çiçekli' },
      { key: 'D', text: '%50 saf mor çiçekli (MM), %50 saf beyaz çiçekli (mm)' }
    ],
    correctAnswer: 'B',
    explanation: 'Mm x mm çaprazlamasında genotipler: Mm, Mm, mm, mm şeklinde oluşur. Yani genotip ve fenotip olarak %50 melez mor (Mm), %50 saf çekinik beyaz (mm) bezelye elde edilir.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Kontrol Çaprazlaması',
    theme: 'Çaprazlama Olasılıkları'
  },
  {
    id: 2208,
    subTopicId: 'g8-u2-sub2',
    contextTitle: 'OK Testi: İki Melez Dölün Çaprazlanması ve Genotip/Fenotip Dağılımı',
    scenario: 'Heterozigot (melez) düzgün tohumlu iki bezelye bitkisi (Dd x Dd) çaprazlanmıştır. Düzgün tohum aleli (D), buruşuk tohum aleline (d) baskındır.',
    questionPrompt: 'Bu çaprazlama sonucunda oluşabilecek döllerle ilgili aşağıdaki oranlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Fenotip: %75 Düzgün Tohumlu, %25 Buruşuk Tohumlu | Genotip: %25 DD, %50 Dd, %25 dd' },
      { key: 'B', text: 'Fenotip: %50 Düzgün Tohumlu, %50 Buruşuk Tohumlu | Genotip: %50 DD, %50 dd' },
      { key: 'C', text: 'Fenotip: %100 Düzgün Tohumlu | Genotip: %100 Dd' },
      { key: 'D', text: 'Fenotip: %25 Düzgün Tohumlu, %75 Buruşuk Tohumlu | Genotip: %75 Dd, %25 dd' }
    ],
    correctAnswer: 'A',
    explanation: 'Dd x Dd çaprazlamasında genotipler: 1/4 DD (%25 saf baskın), 2/4 Dd (%50 melez baskın), 1/4 dd (%25 saf çekinik) oluşur. Düzgün tohumlu fenotip DD ve Dd olup toplamı %75 (3/4); buruşuk tohumlu fenotip ise dd olup %25 (1/4) oranındadır. Doğru cevap A seçeneğidir.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Genetik Olasılık Hesaplama',
    theme: 'OK Testi: Monohibrit Çaprazlama Oranları'
  },
  {
    id: 2209,
    subTopicId: 'g8-u2-sub2',
    contextTitle: 'OK Testi: Akraba Evliliği ve Çekinik Genetik Hastalık Riskleri',
    scenario: 'Kistik fibrozis, fenilketonüri ve orak hücreli anemi gibi ölümcül veya ağır seyreden kalıtsal hastalıklar çekinik alellerle taşınır. Akraba evliliği yapmış sağlıklı bir çiftin ilk çocuklarında orak hücreli anemi hastalığı teşhis edilmiştir.',
    questionPrompt: 'Bu durumla ilgili yapılan bilimsel değerlendirmelerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Anne ve babanın her ikisi de hastalık geni taşımakta olup melez (taşıyıcı) genotipe sahiptir.' },
      { key: 'B', text: 'Akraba evliliklerinde ortak atadan gelen zararlı çekinik genlerin yan yana gelme olasılığı toplum geneline göre belirgin şekilde yüksektir.' },
      { key: 'C', text: 'İlk çocuk hasta doğduğu için bu ailenin sonraki tüm çocukları kesinlikle %100 sağlıklı doğacaktır.' },
      { key: 'D', text: 'Bu çiftin doğacak her bir yeni çocuğunun hasta olma ihtimali bağımsız olarak %25\'tir.' }
    ],
    correctAnswer: 'C',
    explanation: 'Her doğum birbirinden bağımsız bir olasılıktır. Taşıyıcı anne (Aa) ve taşıyıcı babanın (Aa) her doğumunda çocuğun hasta (aa) olma olasılığı bağımsız olarak %25\'tir. "Sonraki çocuklar kesinlikle sağlıklı doğar" ifadesi tamamen yanlıştır. Doğru cevap C seçeneğidir.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Tıbbi Genetik ve Soyağacı Analizi',
    theme: 'OK Testi: Akraba Evliliği ve Riskleri'
  },
  {
    id: 2210,
    subTopicId: 'g8-u2-sub2',
    contextTitle: 'OK Testi: Çiçek Durumu Çaprazlaması ile Ata Genotiplerin Tespiti',
    scenario: 'Bezelyelerde çiçeğin yanda olması (Y), uçta olmasına (y) baskındır. Fenotipi yanda çiçekli olan iki bezelye çaprazlandığında oluşan 100 bezelyeden 24 tanesinin çiçeğinin uçta olduğu kaydedilmiştir.',
    questionPrompt: 'Elde edilen bu sonuç dikkate alındığında çaprazlanan ata bezelyelerin genotipleri hangisinde doğru verilmiştir?',
    options: [
      { key: 'A', text: 'Yy x Yy (Her iki ata da heterozigot melez döl)' },
      { key: 'B', text: 'YY x yy (Biri saf baskın, diğeri saf çekinik)' },
      { key: 'C', text: 'YY x Yy (Biri saf baskın, diğeri melez)' },
      { key: 'D', text: 'yy x yy (Her iki ata da saf çekinik)' }
    ],
    correctAnswer: 'A',
    explanation: 'Çekinik özellik olan "uçta çiçek" (yy) genotipinin yavruda ortaya çıkabilmesi için her iki ata bezelyede de mutlaka çekinik (y) aleli bulunmalıdır. Atalar yanda çiçekli (baskın fenotip) olduğuna göre her ikisinin genotipi de heterozigot (Yy) olmalıdır (Yy x Yy çaprazlamasında ~%25 yy oluşur). Doğru cevap A seçeneğidir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Geriye Dönük Genotip Çıkarımı',
    theme: 'OK Testi: Ata Bireylerin Genotip Tespiti'
  },
  {
    id: 2211,
    subTopicId: 'g8-u2-sub2',
    contextTitle: 'OK Testi: İnsanda Cinsiyet Belirlenmesi ve Eşey Kromozomları',
    scenario: 'İnsan vücut hücrelerinde 44 otozom ve 2 gonozom (eşey kromozomu) olmak üzere toplam 46 kromozom bulunur (Dişi: 44+XX, Erkek: 44+XY). Bir ailenin dünyaya gelen ilk üç çocuğu da erkektir.',
    questionPrompt: 'Bu ailenin dördüncü çocuklarının kız olma olasılığı ve çocuğun cinsiyetinin belirlenmesinde hangi ebeveynin rol oynadığı hangisinde doğru açıklanmıştır?',
    options: [
      { key: 'A', text: 'Olasılık %50’dir; cinsiyeti babadan gelen sperm hücresinin (X veya Y) taşıdığı kromozom belirler.' },
      { key: 'B', text: 'İlk üç çocuk erkek olduğu için dördüncü çocuğun kız olma olasılığı %90’a yükselmiştir.' },
      { key: 'C', text: 'Olasılık %25’tir; cinsiyeti anneden gelen yumurta hücresi belirler.' },
      { key: 'D', text: 'Olasılık %50’dir; cinsiyet anne ve babanın kan gruplarının birleşimiyle belirlenir.' }
    ],
    correctAnswer: 'A',
    explanation: 'Her doğum bağımsız bir olaydır ve kız/erkek olma olasılığı daima %50\'dir (1/2). Anne yumurtasında daima X kromozomu bulunur. Babadan gelen sperm hücresi X taşırsa çocuk kız (XX), Y taşırsa erkek (XY) olur; dolayısıyla cinsiyeti belirleyen babadan gelen spermdir. Doğru cevap A seçeneğidir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Kalıtım Mekanizması',
    theme: 'OK Testi: İnsanda Cinsiyet Oluşumu'
  },
  {
    id: 2212,
    subTopicId: 'g8-u2-sub2',
    contextTitle: 'OK Testi: Saf Sarı ve Saf Yeşil Tohumlu Bezelyeler F1 ve F2 Kuşakları',
    scenario: 'Mendel, saf döl sarı tohumlu bezelye (SS) ile saf döl yeşil tohumlu bezelyeyi (ss) çaprazlayarak 1. Kuşağı (F1) elde etmiştir. Daha sonra F1 kuşağından elde edilen bezelyeleri kendi aralarında çaprazlayarak 2. Kuşağı (F2) oluşturmuştur.',
    questionPrompt: 'F1 ve F2 kuşakları ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'F1 kuşağındaki tüm bezelyelerin fenotipi sarı, genotipi ise %100 melezdir (Ss).' },
      { key: 'B', text: 'F2 kuşağında yeşil tohumlu bezelyelerin ortaya çıkma olasılığı %25’tir.' },
      { key: 'C', text: 'F2 kuşağındaki sarı tohumlu bezelyelerin tamamı homozigot (saf döl) genotipe sahiptir.' },
      { key: 'D', text: 'Yeşil tohum karakteri çekinik olduğu için F1 kuşağında fenotipte etkisini gösterememiştir.' }
    ],
    correctAnswer: 'C',
    explanation: 'F2 kuşağında sarı tohumlu bezelyeler hem homozigot (SS, %25) hem de heterozigot (Ss, %50) genotipte olabilir. Dolayısıyla F2 sarı bezelyelerinin "tamamı homozigottur" demek yanlıştır. Doğru cevap C seçeneğidir.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Mendel Kuşak Analizi',
    theme: 'OK Testi: F1 ve F2 Kuşakları Karşılaştırması'
  },

  // Subtopic 3: Mutasyon ve Modifikasyon
  {
    id: 2301,
    subTopicId: 'g8-u2-sub3',
    contextTitle: 'Mutasyon ve Modifikasyon Seksek Oyunu',
    scenario: 'Öğrenciler mutasyon ve modifikasyon örneklerini içeren bir seksek oyunu tasarlamışlardır:\n1. Keçilerin dört boynuzlu olması (Mutasyon)\n2. Karanlıkta çimlenen bitkilerin sararması (Modifikasyon)\n3. Van kedisinin gözlerinin farklı renkte olması (Mutasyon)\n4. İstiridyelerin suyun akışına göre kabuk şekli alması (Modifikasyon)\n5. Altı parmaklılık (Mutasyon)\n6. Down sendromu (Mutasyon)\n7. Albinoluk (Mutasyon)\n8. Spor yapan kişinin kaslarının gelişmesi (Modifikasyon)\n9. İnsanların güneşte bronzlaşması (Modifikasyon)\nFatma mutasyonlara, Gonca modifikasyonlara basarak ilerleyecektir.',
    questionPrompt: 'Buna göre Fatma ve Gonca\'nın bastığı kutucuklar hangisinde doğru verilmiştir?',
    options: [
      { key: 'A', text: 'Fatma: 1, 3, 5, 6, 7 — Gonca: 2, 4, 8, 9' },
      { key: 'B', text: 'Fatma: 1, 3, 5, 8 — Gonca: 2, 4, 6, 7, 9' },
      { key: 'C', text: 'Fatma: 2, 4, 8, 9 — Gonca: 1, 3, 5, 6, 7' },
      { key: 'D', text: 'Fatma: 1, 2, 3, 5 — Gonca: 4, 6, 7, 8' }
    ],
    correctAnswer: 'A',
    explanation: 'Gen yapısındaki bozulmalar mutasyondur: Dört boynuzlu keçi (1), Van kedisi (3), Altı parmaklılık (5), Down sendromu (6), Albinoluk (7). Çevre etkisiyle gen işleyişindeki değişimler modifikasyondur: Işıksız ortamda sararma (2), istiridye kabuğu (4), kas gelişimi (8), bronzlaşma (9).',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Kavram Sınıflandırması',
    theme: 'Mutasyon vs Modifikasyon'
  },
  {
    id: 2302,
    subTopicId: 'g8-u2-sub3',
    contextTitle: 'Himalaya Tavşanı ve Çuha Çiçeği Deneyleri',
    scenario: 'I. Beyaz kıllara sahip Himalaya tavşanının sırtındaki kıllar kazınıp buz torbası bağlandığında çıkan yeni kılların siyah olduğu görülmüştür. Bu siyah kıllı tavşanın yavruları doğduğunda yine beyaz kıllı olmuştur.\nII. Çuha çiçeği 15-25°C sıcaklıkta kırmızı çiçek açarken, 25-35°C sıcaklıkta yetiştirildiğinde beyaz çiçek açmaktadır.',
    questionPrompt: 'Bu iki gözlem birlikte değerlendirildiğinde aşağıdaki ortak çıkarımlardan hangisine ulaşılır?',
    options: [
      { key: 'A', text: 'Çevresel faktörler genlerin nükleotid dizilimini kalıcı olarak değiştirmiştir.' },
      { key: 'B', text: 'Çevre şartları genlerin yapısını değil, sadece işleyişini değiştirmiştir ve bu değişimler kalıtsal değildir.' },
      { key: 'C', text: 'Oluşan değişimler canlının üreme hücrelerinde mutasyona sebep olmuştur.' },
      { key: 'D', text: 'Canlılar çevreye uyum sağlayabilmek için yeni genler üretmiştir.' }
    ],
    correctAnswer: 'B',
    explanation: 'Her iki örnek de modifikasyondur. Modifikasyonda genin nükleotid yapısı değişmez, sadece çevrenin etkisiyle genin çalışma şekli (işleyişi) değişir ve sonraki nesle aktarılmaz.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Ortak Prensip Bulma',
    theme: 'Gen İşleyişi Değişimi'
  },
  {
    id: 2303,
    subTopicId: 'g8-u2-sub3',
    contextTitle: 'Üreme Hücresi ve Vücut Hücresi Mutasyonu Kalıtsallığı',
    scenario: 'Radyasyona maruz kalan iki bireyden Ahmet Bey\'in deri hücrelerinde DNA hasarı oluşarak deri kanseri gelişmiştir. Mehmet Bey\'in ise sperm ana hücresinde DNA eşlenmesi sırasında bir baz dizilimi mutasyona uğramıştır.',
    questionPrompt: 'Bu iki bireyin çocuklarında bu mutasyonların görülme olasılığı hakkında hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Her iki bireyin de çocuklarında bu mutasyonlar kesinlikle ortaya çıkar.' },
      { key: 'B', text: 'Ahmet Bey\'in mutasyonu vücut hücresinde olduğu için kalıtsal değildir, yavruya aktarılmaz; Mehmet Bey\'in mutasyonu üreme hücresinde olduğu için çocuğuna aktarılabilir.' },
      { key: 'C', text: 'Sadece deri kanseri genetik olarak çocuklara geçer.' },
      { key: 'D', text: 'Hiçbir mutasyon yeni nesillere aktarılamaz.' }
    ],
    correctAnswer: 'B',
    explanation: 'Vücut hücrelerinde (deri, karaciğer, kemik vb.) meydana gelen mutasyonlar sadece o bireyi bağlar ve kalıtsal değildir. Üreme hücrelerinde (sperm, yumurta veya bunların ana hücreleri) oluşan mutasyonlar ise döllenmeyle yavru döllere aktarılarak kalıtsal hale gelir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Mutasyon Kalıtsallık Kuralı',
    theme: 'Vücut vs Üreme Hücresi Mutasyonları'
  },
  {
    id: 2304,
    subTopicId: 'g8-u2-sub3',
    contextTitle: 'Karahindiba Bitkisi Ovalık ve Dağlık Bölge Deneyi',
    scenario: 'Aynı kalıtsal yapıya (özdeş genotipe) sahip karahindiba bitkisinden alınan iki tohumdan biri verimli ovada, diğeri ise yüksek dağlık alanda ekilmiştir. Ovada yetişen bitki uzun boylu ve geniş yapraklı olurken, dağda yetişen bitki soğuk ve rüzgâr etkisiyle kısa boylu ve küçük yapraklı kalmıştır. Dağdaki bitkinin tohumları tekrar ovaya ekildiğinde ise yeni bitkiler uzun boylu olarak gelişmiştir.',
    questionPrompt: 'Bu deneyin sonuçları aşağıdakilerden hangisini doğrudan kanıtlar?',
    options: [
      { key: 'A', text: 'Çevre koşulları karahindiba bitkisinde kalıcı mutasyonlara neden olmuştur.' },
      { key: 'B', text: 'Boy uzunluğundaki değişim çevrenin etkisiyle ortaya çıkan ve kalıtsal olmayan bir modifikasyondur.' },
      { key: 'C', text: 'Karahindiba bitkisi dağ ortamında yeni bir türe dönüşmüştür.' },
      { key: 'D', text: 'Bitkinin DNA nükleotid dizilimi dağda tamamen değişmiştir.' }
    ],
    correctAnswer: 'B',
    explanation: 'Dağda yetişen bitkinin tohumu ovaya ekildiğinde tekrar uzun boylu olması, genlerin yapısının değil sadece çevre etkisiyle işleyişinin değiştiğini (modifikasyon) ve kalıtsal olmadığını kesin olarak kanıtlar.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Kontrollü Deney ve Modifikasyon',
    theme: 'Karahindiba Modifikasyon Deneyi'
  },
  {
    id: 2305,
    subTopicId: 'g8-u2-sub3',
    contextTitle: 'OK Testi: Himalaya Tavşanı ve Sıcaklık Etkisiyle Kürk Rengi Deneyi',
    scenario: 'Bir araştırmacı beyaz renkli bir Himalaya tavşanının sırtındaki beyaz tüyleri tıraş etmiş ve bu bölgeye buz torbası bağlamıştır. Bir süre sonra buz bağlanan bölgeden çıkan yeni tüylerin siyah renkte olduğu gözlenmiştir. Daha sonra bu siyah tüyler tekrar tıraş edilmiş ve tavşan oda sıcaklığında (25°C) bırakılmıştır. Bu kez çıkan tüylerin yeniden beyaz renkte olduğu saptanmıştır.',
    questionPrompt: 'Bu deneyin sonuçlarıyla ilgili olarak aşağıdaki değerlendirmelerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Kürk rengini belirleyen genin nükleotid yapısı kalıcı olarak mutasyona uğramıştır.' },
      { key: 'B', text: 'Sıcaklık değişimi genin yapısını değil, sadece fenotipe yansıyan gen işleyişini değiştirmiştir (Modifikasyon).' },
      { key: 'C', text: 'Tavşanın doğacak yavrularının sırtındaki tüyler de kesinlikle siyah renkli olacaktır.' },
      { key: 'D', text: 'Soğuk ortam tavşanda yeni bir tür oluşumunu başlatan kalıtsal adaptasyondur.' }
    ],
    correctAnswer: 'B',
    explanation: 'Himalaya tavşanında buz etkisiyle siyah tüy çıkması, sıcaklık kalktığında tekrar beyaz tüy çıkması çevre etkisiyle gen işleyişinin değiştiğini gösteren klasik bir modifikasyondur; genin kimyasal yapısı değişmez ve yavruya aktarılmaz. Doğru cevap B seçeneğidir.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Kontrollü Deney Çıkarımı',
    theme: 'OK Testi: Himalaya Tavşanı Modifikasyonu'
  },
  {
    id: 2306,
    subTopicId: 'g8-u2-sub3',
    contextTitle: 'OK Testi: Üreme Hücresi ve Vücut Hücresi Mutasyonlarının Kalıtsallığı',
    scenario: 'Radyasyon sızıntısının yaşandığı bir bölgede iki birey incelenmiştir:\n• 1. Birey: Deri hücreleri yoğun radyasyona maruz kalarak cilt kanseri (tümör) geliştirmiştir.\n• 2. Birey: Üreme ana hücrelerindeki (sperm/yumurta) DNA yapısı radyasyon nedeniyle bozulmuştur.',
    questionPrompt: 'Bu iki bireyde meydana gelen mutasyonların sonraki nesillere aktarılma durumuyla ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: '1. bireydeki mutasyon vücut hücresinde gerçekleştiği için kalıtsal değildir; 2. bireydeki mutasyon üreme hücresinde olduğu için yavrularına aktarılabilir.' },
      { key: 'B', text: 'Her iki bireydeki mutasyon da sadece bireyin kendisini ilgilendirir, hiçbir mutasyon kalıtsal olamaz.' },
      { key: 'C', text: '1. bireyin tüm çocukları kesinlikle cilt kanseri olarak doğar.' },
      { key: 'D', text: '2. bireydeki mutasyon çevre şartı olduğu için modifikasyona dönüşerek kaybolur.' }
    ],
    correctAnswer: 'A',
    explanation: 'Vücut hücrelerinde (karaciğer, deri, kas vb.) meydana gelen mutasyonlar sadece o bireyi bağlar ve kalıtsal değildir. Eşey (üreme) hücrelerinde veya üreme ana hücrelerinde meydana gelen mutasyonlar ise döllenmeyle yavru döllere aktarılarak kalıtsal hale gelir. Doğru cevap A seçeneğidir.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Mutasyon Mekanizması ve Kalıtım',
    theme: 'OK Testi: Mutasyonların Kalıtsallık Kriteri'
  },
  {
    id: 2307,
    subTopicId: 'g8-u2-sub3',
    contextTitle: 'OK Testi: Bal Arılarında Besin Türüne Bağlı Kraliçe ve İşçi Arı Gelişimi',
    scenario: 'Aynı kovan içinde özdeş genetik yapıya sahip dişi arı larvalarından arı sütü ile beslenenler iri yapılı ve doğurgan kraliçe arıya, çiçek tozu (polen) ile beslenenler ise kısır ve küçük yapılı işçi arılara dönüşmektedir.',
    questionPrompt: 'Bal arılarında gözlenen bu gelişim farklılığı ile ilgili aşağıdaki yargılardan hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Besin türü farklılığı larvaların gen işleyişinde değişikliğe yol açan bir modifikasyon örneğidir.' },
      { key: 'B', text: 'Larvaların DNA’sındaki nükleotid dizilimi beslenme türüne göre kalıcı mutasyonla değişmiştir.' },
      { key: 'C', text: 'Kraliçe arının yumurtalarından çıkan larvalar polenle beslenirse işçi arı olurlar.' },
      { key: 'D', text: 'Çevre şartlarının fenotip üzerindeki etkisini gösteren deneysel bir kanıttır.' }
    ],
    correctAnswer: 'B',
    explanation: 'Arı sütü veya polenle beslenme, genin kimyasal yapısını (nükleotid dizilimini) değil, sadece genin çalışma hızını ve işleyişini (epigenetik/modifikasyon) değiştirir. Dolayısıyla nükleotid diziliminin değiştiği (mutasyon olduğu) iddiası yanlıştır. Doğru cevap B seçeneğidir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Beslenme ve Gen İşleyişi',
    theme: 'OK Testi: Arılarda Modifikasyon'
  },

  // Subtopic 4: Adaptasyon
  {
    id: 2401,
    subTopicId: 'g8-u2-sub4',
    contextTitle: 'Yaprak Kuyruklu Geko ve Kamuflaj',
    scenario: 'Madagaskar yağmur ormanlarında yaşayan yaprak kuyruklu geko kertenkelesi, kurumuş yaprakların renk ve şekil yönünden birebir taklidini yaparak hem yırtıcılardan saklanır hem de böcekleri avlar. Bu canlı türünün yavruları da doğduklarında aynı yaprak desenli kuyruğa sahip olurlar.',
    questionPrompt: 'Yaprak kuyruklu gekonun bu özelliği ile ilgili aşağıdaki öğrencilerden hangilerinin ifadesi doğrudur?\n• Ahmet: "Bulundukları ortama adaptasyon sağladıklarını gösterir."\n• Mehmet: "Düşmanları tarafından fark edilmeleri zor olduğu için yaşama ve üreme şansları artar."\n• Ayşe: "Bu özellik kalıtsaldır ve gelecek nesillere aktarılır."',
    options: [
      { key: 'A', text: 'Ahmet ve Ayşe' },
      { key: 'B', text: 'Mehmet ve Ayşe' },
      { key: 'C', text: 'Ahmet ve Mehmet' },
      { key: 'D', text: 'Ahmet, Mehmet ve Ayşe' }
    ],
    correctAnswer: 'D',
    explanation: 'Gekonun kamuflajı bir adaptasyondur (Ahmet doğru), yaşama ve üreme şansını artırır (Mehmet doğru) ve genlerle yavru döllere aktarılan kalıtsal bir özelliktir (Ayşe doğru).',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Adaptasyon Nitelikleri',
    theme: 'Kamuflaj ve Doğal Seçilim'
  },
  {
    id: 2402,
    subTopicId: 'g8-u2-sub4',
    contextTitle: 'Kutup Tilkisi ve Çöl Tilkisi Karşılaştırması',
    scenario: 'Soğuk kutup bölgesinde yaşayan kutup tilkisinin kulak, burun ve kuyruk gibi vücut çıkıntıları oldukça küçüktür ve kürkü beyazdır. Sıcak çöl bölgesinde yaşayan çöl tilkisinin ise kulakları ve kuyruğu vücuduna göre çok uzun ve geniştir, kürkü ise kum rengindedir.',
    questionPrompt: 'Bu iki tilki türünün vücut yapılarındaki farklılıkların temel sebebi hangisinde doğru açıklanmıştır?',
    options: [
      { key: 'A', text: 'Farklı ekosistemlerde yaşayan aynı türe ait canlıların ısı dengesini sağlamak ve kamufle olmak için farklı adaptasyonlar geliştirmesi.' },
      { key: 'B', text: 'Çöl tilkilerinin beslenme tarzının mutasyona uğramış olması.' },
      { key: 'C', text: 'Kutup tilkilerinin soğuk nedeniyle modifikasyon geçirerek kulaklarının küçülmesi.' },
      { key: 'D', text: 'Çöl tilkilerinin daha hızlı koşma ihtiyacından dolayı kulaklarını uzatması.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kutup tilkisinde küçük kulaklar ısı kaybını önler; çöl tilkisinde büyük kulaklar geniş yüzey alanı sayesinde vücuttan fazla ısının atılmasını sağlar. Bu durum farklı ortamlardaki benzer canlıların geliştirdiği kalıtsal adaptasyonlardır.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Karşılaştırmalı Analiz',
    theme: 'Çevreye Uyum ve Isı Dengesi'
  },
  {
    id: 2403,
    subTopicId: 'g8-u2-sub4',
    contextTitle: 'Kaktüslerin Çöl Koşullarına Adaptasyonu',
    scenario: 'Kurak ve sıcak çöl ekosisteminde yaşayan kaktüs bitkilerinin yaprakları su kaybını en aza indirmek için diken şekline dönüşmüş, gövdeleri ise su depo edebilen etli bir yapı kazanmıştır. Kökleri ise yer altı sularına ulaşabilmek için toprakta onlarca metre derinlere ve yanlara doğru yayılır.',
    questionPrompt: 'Kaktüs bitkisinin bu özellikleri ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Bu özellikler kaktüsün çölde yaşama ve üreme şansını artıran kalıtsal adaptasyonlardır.' },
      { key: 'B', text: 'Kaktüs sulak bir bölgeye dikilirse yaprakları bir hafta içinde geniş yapraklara dönüşür.' },
      { key: 'C', text: 'Diken yapraklar fotosentez hızını 10 kat artırmak için geliştirilmiştir.' },
      { key: 'D', text: 'Kaktüsün köklerinin derinlere gitmesi kalıtsal olmayan bir modifikasyondur.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kaktüslerin gövdede su depolaması, yapraklarının diken olması ve derin kök sistemine sahip olması çölde hayatta kalmayı sağlayan kalıtsal adaptasyonlardır. Sulak alana ekilseler dahi bu özelliklerini nesiller boyu korurlar.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Bitkilerde Kurakçıl Adaptasyonlar',
    theme: 'Kaktüs Adaptasyonları'
  },
  {
    id: 2404,
    subTopicId: 'g8-u2-sub4',
    contextTitle: 'Sanayi Devrimi Sonrası Güve Kelebeklerinde Doğal Seçilim',
    scenario: 'İngiltere\'de Sanayi Devrimi öncesinde ağaç gövdeleri açık renkli likenlerle kaplıydı ve açık renkli güve kelebekleri kuşlar tarafından fark edilmeyerek hayatta kalıyordu (Koyu renkliler avlanıyordu). Sanayi Devrimi sonrası fabrikalardan çıkan kömür kurumu ağaç gövdelerini siyaha boyadı ve likenler yok oldu. Kısa süre içinde açık renkli güve kelebekleri kuşlar tarafından kolayca avlanarak sayıları azaldı; koyu renkli kelebekler kamufle olarak popülasyonda hakim hale geldi.',
    questionPrompt: 'Bu tarihi süreç aşağıdakilerden hangisinin en somut örneğidir?',
    options: [
      { key: 'A', text: 'Doğal Seçilim ve Varyasyon' },
      { key: 'B', text: 'Klonlama' },
      { key: 'C', text: 'Yapay Döllenme' },
      { key: 'D', text: 'Modifikasyon' }
    ],
    correctAnswer: 'A',
    explanation: 'Çevre koşullarına uyum sağlayan (kamufle olan koyu renkli) bireylerin yaşayıp üremesi, uyum sağlayamayanların (açık renklilerin) ise elenmesi sürecine Doğal Seçilim denir. Kelebeklerin renk çeşitliliği ise popülasyondaki varyasyondur.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Tarihi Olay ve Doğal Seçilim',
    theme: 'Güve Kelebekleri ve Doğal Seçilim'
  },
  {
    id: 2405,
    subTopicId: 'g8-u2-sub4',
    contextTitle: 'OK Testi: Farklı Türlerin Aynı Ekosistemde Kazandığı Benzer Adaptasyonlar',
    scenario: 'Kutup bölgesinde yaşayan kutup ayısı, kutup tilkisi ve kutup tavşanı incelendiğinde; her üç türün de kürk renklerinin beyaz olduğu, deri altlarında kalın bir yağ tabakası depoladıkları, kulak ve burun gibi vücut çıkıntılarının ısı kaybını azaltmak için küçük olduğu tespit edilmiştir.',
    questionPrompt: 'Farklı canlı türlerinde görülen bu benzer yapısal özelliklerle ilgili aşağıdaki çıkarımlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Aynı ekosistemde yaşayan farklı canlı türleri benzer çevre baskılarına karşı benzer adaptasyonlar geliştirirler.' },
      { key: 'B', text: 'Bu canlılar aynı anne-babadan türedikleri için genetik olarak tamamen özdeştirler.' },
      { key: 'C', text: 'Kutup tavşanı sıcak çöle götürülürse birkaç gün içinde kulakları büyüyerek çöl tavşanına dönüşür.' },
      { key: 'D', text: 'Kürk renginin beyaz olması çevre etkisiyle ortaya çıkan geçici bir modifikasyondur.' }
    ],
    correctAnswer: 'A',
    explanation: 'Aynı çevrede ve ekosistemde yaşayan farklı canlı türleri (ayı, tilki, tavşan), yaşama ve üreme şanslarını artırmak için soğuğa karşı benzer kalıtsal adaptasyonlar (kalın yağ tabakası, beyaz kürk, küçük çıkıntılar) geliştirirler. Doğru cevap A seçeneğidir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Ekolojik Adaptasyon Karşılaştırması',
    theme: 'OK Testi: Benzer Çevrede Benzer Uyumlar'
  },
  {
    id: 2406,
    subTopicId: 'g8-u2-sub4',
    contextTitle: 'OK Testi: Kaktüs ve Nemli Bölge Bitkisi Yaprak Adaptasyonları',
    scenario: 'Özdeş saksılara dikilmiş iki bitki türü inceleniyor:\n• K Bitkisi (Kaktüs): Gövdesi etli ve su depolar, yaprakları terlemeyle su kaybını önlemek için diken şeklini almıştır, kökleri derine ve geniş alana yayılır.\n• L Bitkisi (Nilüfer / Geniş Yapraklı Su Bitkisi): Yaprakları oldukça geniştir, stomaları yaprağın üst yüzeyinde bulunur ve terlemeyi maksimize eder.',
    questionPrompt: 'Bu iki bitki türünün sahip olduğu morfolojik özelliklerle ilgili aşağıdaki değerlendirmelerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'K bitkisinin diken yapraklı olması kurak çöl ortamında terlemeyi ve su kaybını en aza indiren kalıtsal bir adaptasyondur.' },
      { key: 'B', text: 'L bitkisinin geniş yaprakları bol sulu ortamda fazla suyun terleme yoluyla dışarı atılmasını sağlar.' },
      { key: 'C', text: 'K bitkisi sulak bir bölgeye taşınırsa yaprakları derhal genişleyerek nilüfer yaprağı haline gelir.' },
      { key: 'D', text: 'Her iki bitki de bulundukları habitatın su miktarına uygun adaptasyonlar sayesinde nesillerini sürdürmektedir.' }
    ],
    correctAnswer: 'C',
    explanation: 'Adaptasyonlar canlının DNA\'sına işlenmiş kalıtsal özelliklerdir. Bir kaktüs sulak ortama taşınsa dahi genetik yapısı nedeniyle yaprakları genişlemez, diken olarak kalır; "hemen geniş yaprak haline gelir" ifadesi yanlıştır. Doğru cevap C seçeneğidir.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Bitkisel Adaptasyon Mekanizmaları',
    theme: 'OK Testi: Bitkilerde Su ve Terleme Adaptasyonları'
  },
  {
    id: 2407,
    subTopicId: 'g8-u2-sub4',
    contextTitle: 'OK Testi: Renkli Kartonlarla Doğal Seçilim ve Kamufle Olma Simülasyonu',
    scenario: 'Fen bilimleri dersinde öğrenciler sarı bir zemin üzerine 50 adet sarı ve 50 adet mavi düğme serpmişlerdir. Bir öğrenciye "avcı kuş" rolü verilmiş ve 10 saniye içinde gözüne ilk çarpan düğmeleri toplaması istenmiştir. Süre sonunda öğrencinin 38 adet mavi düğme, yalnızca 4 adet sarı düğme topladığı belirlenmiştir.',
    questionPrompt: 'Bu deneysel simülasyondan hareketle varılabilecek en doğru bilimsel genelleme hangisidir?',
    options: [
      { key: 'A', text: 'Zeminle aynı renkte olup kamufle olan bireyler avcılardan korunarak yaşama şansını artırır (Doğal Seçilim).' },
      { key: 'B', text: 'Mavi düğmeler çevre koşullarına daha iyi uyum sağladığı için sayıları zamanla artış gösterecektir.' },
      { key: 'C', text: 'Bu çalışma varyasyonun canlılar için daima zararlı olduğunu kanıtlar.' },
      { key: 'D', text: 'Düğmelerin rengi deney sırasında çevre etkisiyle değişerek modifikasyon göstermiştir.' }
    ],
    correctAnswer: 'A',
    explanation: 'Sarı zemin üzerinde sarı düğmeler kamufle olduğu için avcı tarafından fark edilmemiştir. Zıt renkli mavi düğmeler ise kolayca avlanmıştır. Bu deney, çevreye uyum sağlayan bireylerin hayatta kaldığı Doğal Seçilim mekanizmasını somutlaştırmaktadır. Doğru cevap A seçeneğidir.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Simülasyon Deneyi ve Muhakeme',
    theme: 'OK Testi: Doğal Seçilim ve Kamuflaj Deneyi'
  },

  // Subtopic 5: Biyoteknoloji
  {
    id: 2501,
    subTopicId: 'g8-u2-sub5',
    contextTitle: 'Bakterilerde Rekombinant DNA ile İnsülin Üretimi',
    scenario: 'Genetik mühendisleri, sağlıklı bir insanın hücresinden insülin hormonu üretimini sağlayan geni izole etmiş ve bu geni bakteri DNA\'sına (plazmit) aktarmışlardır. Gen aktarımı yapılan bu bakteriler çoğaltılarak laboratuvar ortamında bol miktarda saf insülin hormonu üretilmiş ve şeker hastalarının kullanımına sunulmuştur.',
    questionPrompt: 'Yapılan bu çalışma ile ilgili aşağıdaki ifadelerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'İnsülin geni aktarılan bakterilerin genetik yapısı değiştirilmiştir (Gen aktarımı).' },
      { key: 'B', text: 'Bu işlem gen tedavisi olmayıp genetik mühendisliği ve biyoteknolojinin ortak ürünüdür.' },
      { key: 'C', text: 'Bakteriler insan genini alsa bile kendi orijinal proteinlerinden başka madde üretemez.' },
      { key: 'D', text: 'A ve B seçeneklerindeki değerlendirmeler doğrudur.' }
    ],
    correctAnswer: 'D',
    explanation: 'Bakteriye insan insülin geninin aktarılması gen aktarımıdır; bakterinin genetiği değişir ve biyoteknolojik yöntemle endüstriyel boyutta ilaç üretilmiş olur.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Biyoteknoloji Uygulamaları',
    theme: 'Gen Aktarımı ve İlaç Üretimi'
  },
  {
    id: 2502,
    subTopicId: 'g8-u2-sub5',
    contextTitle: 'Klon Koyun Dolly Aşamaları ve Genetik Benzerlik',
    scenario: 'Koyun klonlama adımları:\n1. A koyununun vücut hücresi (meme hücresi) alınarak çekirdeği çıkarılıyor.\n2. B koyununun yumurta hücresi alınarak çekirdeği atılıyor.\n3. A koyununun çekirdeği, B koyununun çekirdeksiz yumurtasına aktarılıyor ve laboratuvarda çoğaltılarak embriyo elde ediliyor.\n4. Embriyo taşıyıcı C koyununun rahmine yerleştiriliyor ve doğum sonucunda klon kuzu (Dolly) dünyaya geliyor.',
    questionPrompt: 'Buna göre dünyaya gelen klon kuzu Dolly, genetik olarak hangi koyun ile birebir aynı kalıtsal bilgiye sahiptir?',
    options: [
      { key: 'A', text: 'Yumurta hücresi kullanılan B koyunu' },
      { key: 'B', text: 'Çekirdeği (DNA\'sı) kullanılan A koyunu' },
      { key: 'C', text: 'Taşıyıcı anne olan C koyunu' },
      { key: 'D', text: 'A ve B koyununun melez genetik karışımı' }
    ],
    correctAnswer: 'B',
    explanation: 'Hücrenin genetik bilgisini taşıyan DNA çekirdekte yer alır. Klon kuzu, çekirdeği alınan A koyununun genetik kopyasıdır (ikizidir).',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Klonlama Prensipleri',
    theme: 'Klonlama ve Genetik Mühendisliği'
  },
  {
    id: 2503,
    subTopicId: 'g8-u2-sub5',
    contextTitle: 'Gen Tedavisi ile Kalıtsal Hastalıkların İyileştirilmesi',
    scenario: 'Kalıtsal veya sonradan edinilmiş hastalıklarda hücredeki bozuk, kusurlu ya da çalışmayan genlerin tespiti yapılarak bu genlerin yerine sağlıklı ve fonksiyonel genlerin hücreye aktarılması yöntemine gen tedavisi denir.',
    questionPrompt: 'Gen tedavisi yöntemi ile ilgili yapılan aşağıdaki değerlendirmelerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Sadece bitkilerde ürün verimini artırmak için kullanılır.' },
      { key: 'B', text: 'Hastalığa neden olan kusurlu genlerin etkisiz hale getirilmesi veya onarılması hedeflenir.' },
      { key: 'C', text: 'Klonlama ile birebir aynı anlama gelen bir uygulamadır.' },
      { key: 'D', text: 'İnsanların DNA yapısını tamamen yok edip yapay DNA koymayı amaçlar.' }
    ],
    correctAnswer: 'B',
    explanation: 'Gen tedavisi, kusurlu genlerin tespit edilip onarılmasını veya sağlıklı genlerin hücreye aktarılarak hastalığın tedavi edilmesini amaçlayan ileri bir biyoteknolojik yöntemdir.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Genetik Mühendisliği Yöntemleri',
    theme: 'Gen Tedavisi ve Tıp'
  },
  {
    id: 2504,
    subTopicId: 'g8-u2-sub5',
    contextTitle: 'Genetiği Değiştirilmiş Organizmalar (GDO) ve Tartışmalar',
    scenario: 'Tarımda mısır, pamuk ve soya bitkilerine zararlı böceklere karşı direnç sağlayan ya da kuraklığa dayanıklılığı artıran yabancı genler aktarılarak GDO\'lu ürünler elde edilmiştir.',
    questionPrompt: 'GDO\'lu ürünlerin hem faydaları hem de potansiyel riskleri birlikte değerlendirildiğinde hangisi bu risklerden biri olabilir?',
    options: [
      { key: 'A', text: 'Birim alandan alınan tarımsal ürün veriminin artması' },
      { key: 'B', text: 'Tarım zararlılarına karşı daha az kimyasal ilaç kullanılması' },
      { key: 'C', text: 'Gen kaçışı ile yabani otların kontrol edilemez hale gelmesi ve insanlarda beklenmeyen alerjik reaksiyonlara yol açabilmesi' },
      { key: 'D', text: 'Ürünlerin raf ömrünün uzatılması' }
    ],
    correctAnswer: 'C',
    explanation: 'A, B ve D seçenekleri GDO\'nun faydaları arasındadır. Ancak doğaya gen kaçışı riski, biyolojik çeşitliliğin azalması ve tüketildiğinde insanlarda yeni alerjilerin ortaya çıkabilmesi GDO\'nun en büyük riskleri ve etik tartışma konularıdır.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Etik ve Sosyal Boyut Analizi',
    theme: 'GDO Fayda ve Risk Değerlendirmesi'
  },
  {
    id: 2505,
    subTopicId: 'g8-u2-sub5',
    contextTitle: 'OK Testi: Ateş Böceği Geninin Tütün Bitkisine Aktarılması',
    scenario: 'Genetik mühendisleri, ateş böceğinin ışık saçmasını sağlayan lusiferaz enzimini üreten geni izole etmiş ve bu geni tütün bitkisinin embriyo hücrelerine aktarmışlardır. Büyüyen tütün bitkisinin karanlıkta yeşilimsi bir ışık yaydığı gözlenmiştir.',
    questionPrompt: 'Bu çalışma ve sonuçları ile ilgili aşağıdaki yargılardan hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Tütün bitkisine yeni ve yabancı bir genetik özellik kazandırılmıştır (Gen aktarımı).' },
      { key: 'B', text: 'Tütün bitkisinin ürettiği tohumlardan yetişen yeni bitkiler de ışık saçma yeteneğine sahip olur.' },
      { key: 'C', text: 'Bu işlem bir klonlama çalışması olup ateş böceğinin genetik kopyası üretilmiştir.' },
      { key: 'D', text: 'Farklı canlı türleri arasında genetik bilgi transferinin mümkün olduğunu kanıtlar.' }
    ],
    correctAnswer: 'C',
    explanation: 'Bu çalışma tipik bir "gen aktarımı" (rekombinant DNA) uygulamasıdır. Klonlama ise bir canlının vücut hücresi çekirdeği kullanılarak genetik kopyasının oluşturulmasıdır; ateş böceğinin kopyası çıkarılmamıştır. C seçeneğindeki ifade yanlıştır. Doğru cevap C seçeneğidir.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Genetik Mühendisliği Yöntemleri',
    theme: 'OK Testi: Gen Aktarımı ve Biyoteknoloji'
  },
  {
    id: 2506,
    subTopicId: 'g8-u2-sub5',
    contextTitle: 'OK Testi: Klonlama Sürecinde Genetik Benzerlik ve Rol Alan Bireyler',
    scenario: 'Bir klonlama çalışmasında:\n• X koyunundan meme hücresi alınarak çekirdeği (genetik materyali) çıkarılmıştır.\n• Y koyunundan yumurta hücresi alınmış ve çekirdeği atılarak içi boşaltılmıştır.\n• X’in çekirdeği Y’nin boş yumurtasına aktarılmış, elektrik şoku ile kaynaştırılıp çoğaltılmıştır.\n• Oluşan embriyo Z koyununun (taşıyıcı anne) rahmine yerleştirilmiş ve klon yavru dünyaya gelmiştir.',
    questionPrompt: 'Dünyaya gelen klon yavru ile ilgili aşağıdaki ifadelerden hangisi bilimsel olarak kesinlikle doğrudur?',
    options: [
      { key: 'A', text: 'Yavru kuzu, çekirdeği (DNA’sı) kullanılan X koyununun genetik kopyasıdır ve kalıtsal bilgisi X ile birebir aynıdır.' },
      { key: 'B', text: 'Yavru kuzu, taşıyıcı anne olan Z koyununun genetik özelliklerini taşır.' },
      { key: 'C', text: 'Yavru kuzu, yumurta hücresi alınan Y koyununun fiziksel ve genetik bir kopyasıdır.' },
      { key: 'D', text: 'Klon yavru hem X hem Y hem de Z koyunundan eşit oranda genetik miras almıştır.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kalıtsal bilgi (DNA) hücre çekirdeğinde bulunur. Klonlama işleminde çekirdek X koyunundan alındığı için, doğan klon kuzu sadece X koyunu ile genetik olarak birebir aynıdır; Y koyunu sadece sitoplazma sağlamış, Z koyunu ise sadece ortam (taşıyıcı anne) olmuştur. Doğru cevap A seçeneğidir.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Biyoteknolojik Süreç Analizi',
    theme: 'OK Testi: Klonlama ve Kalıtsal Özdeşlik'
  },
  {
    id: 2507,
    subTopicId: 'g8-u2-sub5',
    contextTitle: 'OK Testi: Geleneksel Islah ile Biyoteknolojik Yöntemlerin Karşılaştırılması',
    scenario: 'Tarımda ve hayvancılıkta verimi artırmak için iki yöntem kullanılmaktadır:\n• 1. Yöntem (Geleneksel Islah): İstenilen özelliklere (örneğin iri taneli veya tatlı meyve) sahip iki yerli bitkinin yıllarca tozlaştırılarak çaprazlanması (uzun yıllar sürer ve istenmeyen genler de yavruya geçebilir).\n• 2. Yöntem (Modern Biyoteknoloji / Genetik Mühendisliği): İstenen hedef genin laboratuvarda tespit edilip doğrudan organizmaya aktarılması (hızlı ve hedefe yöneliktir).',
    questionPrompt: 'Bu iki yöntemin karşılaştırılması ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Modern biyoteknoloji hedefe yönelik olup geleneksel ıslaha göre çok daha kısa sürede sonuç verir.' },
      { key: 'B', text: 'Geleneksel ıslah sadece laboratuvar ortamında DNA mühendisliği ile yapılabilir.' },
      { key: 'C', text: 'Modern biyoteknolojide hiçbir zaman genetik aktarım yapılamaz.' },
      { key: 'D', text: 'Geleneksel ıslah ile türler arasında doğrudan gen aktarımı sağlanır.' }
    ],
    correctAnswer: 'A',
    explanation: 'Geleneksel ıslah nesiller boyu süren uzun bir süreçtir ve istenmeyen genler de birlikte aktarılabilir. Modern biyoteknoloji ise hedeflenen spesifik geni doğrudan aktararak çok daha hızlı ve kontrollü sonuç verir. Doğru cevap A seçeneğidir.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Geleneksel vs Modern Biyoteknoloji',
    theme: 'OK Testi: Islah Yöntemleri ve Biyoteknoloji'
  }
];

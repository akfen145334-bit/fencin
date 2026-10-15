import { LgsQuestion } from '../../../types/curriculum';

// ============================================================================
// 6. SINIF 1. ÜNİTE: GÜNEŞ SİSTEMİ VE TUTULMALAR - MEB KAZANIM & BECERİ TESTLERİ
// ============================================================================

export const odsgmGrade6Unit1Questions: LgsQuestion[] = [
  // --- ALT KONU 1: GÜNEŞ SİSTEMİ (TEST 1) ---
  {
    id: 61101,
    subTopicId: 'g6-u1-sub1',
    contextTitle: 'Güneş Sisteminde Yer Alan Gök Cisimleri Modeli',
    scenario: 'Bir öğrenci hazırladığı çiçek modelinin yapraklarına bazı gök cisimlerinin adını yazmıştır: Asteroit, Gezegen, Galaksi, Uydu.',
    questionPrompt: 'Bu öğrencinin modelinden Güneş sisteminde yer almayan gök cisimleri çıkarılırsa hangi şekil elde edilir?',
    options: [
      { key: 'A', text: 'Sadece Asteroit ve Gezegen yaprağının kaldığı model' },
      { key: 'B', text: 'Sadece Uydu ve Gezegen yaprağının kaldığı model' },
      { key: 'C', text: 'Sadece Galaksi ve Asteroit yaprağının kaldığı model' },
      { key: 'D', text: 'Galaksi yaprağının çıkarıldığı, Asteroit, Gezegen ve Uydu yapraklarının kaldığı model' }
    ],
    correctAnswer: 'D',
    explanation: 'Güneş sisteminde gezegenler, uydular ve asteroitler yer alır. Galaksi (Samanyolu) ise Güneş sistemini de içinde barındıran milyarlarca yıldızdan oluşan dev sistemdir; Güneş sisteminin bir parçası değil, Güneş sistemi galaksinin içindedir.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Gök Cisimleri Sınıflandırma',
    theme: 'Güneş Sistemi Bileşenleri'
  },
  {
    id: 61102,
    subTopicId: 'g6-u1-sub1',
    contextTitle: 'Dünya Gezegeni Bilgi Kartları',
    scenario: 'Elif "Dünya" ile ilgili ödevi için 4 bilgi kartı hazırlamıştır:\nI. Üzerinde canlı yaşamı olan tek gezegendir.\nII. İç gezegenlerin en büyüğüdür.\nIII. Venüs ile Merkür gezegenleri arasında bulunur.\nIV. Etrafında dolanan Ay adında tek uydusu vardır.',
    questionPrompt: 'Elif’in kartlarına bakıldığında, hangi karttaki bilginin hatalı olduğu söylenebilir?',
    options: [
      { key: 'A', text: 'I.' },
      { key: 'B', text: 'II.' },
      { key: 'C', text: 'III.' },
      { key: 'D', text: 'IV.' }
    ],
    correctAnswer: 'C',
    explanation: 'Güneş’e yakınlık sıralaması: Merkür - Venüs - Dünya - Mars şeklindedir. Dünya, Venüs ile Mars arasında yer alır; Venüs ile Merkür arasında değildir.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Gezegenlerin Yörünge Sıralaması',
    theme: 'Dünya ve Komşu Gezegenler'
  },
  {
    id: 61103,
    subTopicId: 'g6-u1-sub1',
    contextTitle: 'Dünya’mıza En Yakın Yıldız: Güneş',
    scenario: 'Bir gök cisminin özellikleri verilmiştir:\n• Dünya’mıza en yakın yıldız olup çıplak gözle görülebilir.\n• Yüzey sıcaklığı yaklaşık olarak 6000 °C’tur.\n• Çap olarak büyüklüğü Dünya’mızın büyüklüğünün yaklaşık olarak 110 katıdır.',
    questionPrompt: 'Verilen bilgiler aşağıdaki gök cisimlerinden hangisine aittir?',
    options: [
      { key: 'A', text: 'Venüs' },
      { key: 'B', text: 'Güneş' },
      { key: 'C', text: 'Titan' },
      { key: 'D', text: 'Asteroit' }
    ],
    correctAnswer: 'B',
    explanation: 'Dünya’ya en yakın yıldız Güneş’tir. Yüzey sıcaklığı yaklaşık 6000 °C, çapı Dünya’nın yaklaşık 110 katıdır.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Güneş’in Fiziksel Özellikleri',
    theme: 'Güneş’in Yapısı'
  },
  {
    id: 61104,
    subTopicId: 'g6-u1-sub1',
    contextTitle: 'Güneş Sisteminde Doğal Uydusu Olmayan Gezegenler',
    scenario: 'Gezegenler numaralandırılmıştır: 1-Mars, 2-Jüpiter, 3-Satürn, 4-Merkür, 5-Dünya, 6-Venüs, 7-Uranüs, 8-Neptün.',
    questionPrompt: 'Buna göre hiç uydusu olmayan gezegenlerin numaraları hangi seçenekte doğru verilmiştir?',
    options: [
      { key: 'A', text: '1 - 3' },
      { key: 'B', text: '4 - 6' },
      { key: 'C', text: '2 - 5 - 7' },
      { key: 'D', text: '3 - 6 - 8' }
    ],
    correctAnswer: 'B',
    explanation: 'Güneş sistemindeki sekiz gezegenden yalnızca Merkür (4) ve Venüs’ün (6) doğal uydusu ve halkası yoktur.',
    skillTag: 'Tablo Yorumlama',
    cognitiveLevel: 'Gezegen Uyduları Bilgisi',
    theme: 'Doğal Uydular'
  },
  {
    id: 61105,
    subTopicId: 'g6-u1-sub1',
    contextTitle: 'Gezegenlerin Ayırt Edici Özellikleri',
    scenario: 'Güneş etrafında dolanan bazı gezegenlere ait özellikler:\n• Halk arasında Çoban Yıldızı olarak bilinir, en sıcak gezegendir.\n• Kızıl Gezegen olarak adlandırılır. Güneş’e uzaklık bakımından 4. sıradadır.\n• Güneş etrafında yan yatmış varil gibi yuvarlanarak dolanır, büyüklük bakımından 3. sıradadır.',
    questionPrompt: 'Buna göre özelliği verilmeyen gezegen aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Venüs' },
      { key: 'B', text: 'Mars' },
      { key: 'C', text: 'Satürn' },
      { key: 'D', text: 'Uranüs' }
    ],
    correctAnswer: 'C',
    explanation: 'Çoban yıldızı = Venüs; Kızıl Gezegen = Mars; Yan yatmış varil = Uranüs. Satürn’ün (halkaları en belirgin gezegen) özelliği verilmemiştir.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Gezegen Nitelikleri Analizi',
    theme: 'Gezegen Özellikleri'
  },
  {
    id: 61106,
    subTopicId: 'g6-u1-sub1',
    contextTitle: 'İç ve Dış Gezegenler Sınıflandırması',
    scenario: 'Gezegenler iç (karasal) ve dış (gazsal) gezegenler olarak gruplandırılmıştır: Dünya, Venüs, Neptün, Mars.',
    questionPrompt: 'Buna göre tablodaki hangi gezegen için yanlış gruplandırma işareti yapılmıştır?',
    options: [
      { key: 'A', text: 'Dünya - İç gezegen' },
      { key: 'B', text: 'Venüs - Dış gezegen' },
      { key: 'C', text: 'Neptün - Dış gezegen' },
      { key: 'D', text: 'Mars - İç gezegen' }
    ],
    correctAnswer: 'B',
    explanation: 'İç gezegenler Merkür, Venüs, Dünya ve Mars’tır. Tabloda Venüs dış gezegen sütununa işaretlendiği için hata yapılmıştır.',
    skillTag: 'Tablo Yorumlama',
    cognitiveLevel: 'İç ve Dış Gezegen Ayrımı',
    theme: 'Karasal ve Gazsal Gezegenler'
  },
  {
    id: 61107,
    subTopicId: 'g6-u1-sub1',
    contextTitle: 'Gök Taşı, Meteor ve Meteorit Kavramları',
    scenario: 'Uzayda boyutları yıldızlardan ve gezegenlerden küçük olan taş ve metal parçalarına 1.... denir. Dünya atmosferine girenler sürtünmeyle akkorlaşıp ışık yayar, buna 2.... denir. Yeryüzüne ulaşan parçalarına 3.... adı verilir. Yeryüzünde oluşturduğu çukura 4.... denir.',
    questionPrompt: 'Numaralanmış boşluklara sırasıyla hangi kavramlar gelmelidir?',
    options: [
      { key: 'A', text: '1. gök taşı — 2. meteorit — 3. meteor — 4. meteor çukuru' },
      { key: 'B', text: '1. gök taşı — 2. meteor — 3. meteorit — 4. meteor çukuru' },
      { key: 'C', text: '1. asteroit — 2. meteor — 3. gök taşı — 4. gök taşı çukuru' },
      { key: 'D', text: '1. meteor — 2. asteroit — 3. meteorit — 4. gök taşı çukuru' }
    ],
    correctAnswer: 'B',
    explanation: 'Uzaydaki parça: gök taşı (meteoroid); atmosferde akkorlaşan ışıklı iz: meteor; yere ulaşabilen kayaç: meteorit; açtığı çukur: meteorit / meteor çukurudur.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Astronomik Terimler Ayrımı',
    theme: 'Meteorlar ve Gök Taşları'
  },
  {
    id: 61108,
    subTopicId: 'g6-u1-sub1',
    contextTitle: 'Gezegenlerin Dolanma ve Dönme Yönleri',
    scenario: 'Güneş sistemindeki sekiz gezegenin hareketleri ve yapısal özellikleri incelenmektedir.',
    questionPrompt: 'Güneş sisteminde bulunan gezegenler ile ilgili aşağıda verilen bilgilerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Büyüklükleri ve Güneş’e olan uzaklıkları birbirinden farklıdır.' },
      { key: 'B', text: 'Güneş etrafında bulunan yörüngelerinde, hepsi aynı yönde (saatin tersi yönünde) dolanır.' },
      { key: 'C', text: 'Bazıları iç gezegen, bazıları da dış gezegen olarak gruplandırılır.' },
      { key: 'D', text: 'Hepsinin kendi ekseni etrafında dönüşü saatin dönme yönüne terstir.' }
    ],
    correctAnswer: 'D',
    explanation: 'Gezegenlerin tamamı kendi ekseni etrafında aynı yönde dönmez. Örneğin Venüs saat yönünde tersine dönerken, Uranüs yuvarlanan bir varil gibi yatay eksende döner.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Gezegenlerin Hareket Dinamikleri',
    theme: 'Gezegenlerin Dolanma ve Dönme Özellikleri'
  },
  {
    id: 61109,
    subTopicId: 'g6-u1-sub1',
    contextTitle: 'Gezegenlerin Dolanma Merkezi',
    scenario: 'Gök cisimleri kütle çekim kuvveti etkisi altında daha büyük kütleli gök cisimlerinin etrafında dolanma hareketi yaparlar.',
    questionPrompt: 'Gezegenler hangi gök cisminin etrafında dolanma hareketi yaparlar?',
    options: [
      { key: 'A', text: 'Yıldız (Güneş)' },
      { key: 'B', text: 'Uydu' },
      { key: 'C', text: 'Dünya' },
      { key: 'D', text: 'Asteroit' }
    ],
    correctAnswer: 'A',
    explanation: 'Gezegenler bir yıldızın (Güneş sisteminde Güneş’in) etrafında eliptik yörüngelerde dolanma hareketi yaparlar.',
    skillTag: 'Temel Bilgi & Mantık',
    cognitiveLevel: 'Gök Mekaniği Temelleri',
    theme: 'Güneş ve Gezegenler'
  },
  {
    id: 61110,
    subTopicId: 'g6-u1-sub1',
    contextTitle: 'Yatay Dönen Gezegen ve Güneş’e Uzaklık Sırası',
    scenario: 'Güneş sistemindeki gezegenlerden biri, dönme ekseni yaklaşık 98 derece eğik olduğu için kendi ekseni etrafında yatay bir varil gibi döner.',
    questionPrompt: 'Gezegenler, Güneş’e yakınlık derecelerine göre sıralandığında bu gezegen kaçıncı sırada yer alır?',
    options: [
      { key: 'A', text: '1.' },
      { key: 'B', text: '4.' },
      { key: 'C', text: '5.' },
      { key: 'D', text: '7.' }
    ],
    correctAnswer: 'D',
    explanation: 'Yatay eksende dönen gezegen Uranüs’tür. Merkür(1), Venüs(2), Dünya(3), Mars(4), Jüpiter(5), Satürn(6), Uranüs(7), Neptün(8) sıralamasında Uranüs 7. sıradadır.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Uranüs ve Sıralama Bilgisi',
    theme: 'Gezegen Sıralaması'
  },
  {
    id: 61111,
    subTopicId: 'g6-u1-sub1',
    contextTitle: 'Asteroit Kuşağının Gezegenler Arasındaki Konumu',
    scenario: 'Küçük gök cisimleri olarak da bilinen asteroitlerin iki gezegenin yörüngeleri arasında yoğun olarak bulundukları bölgeye "Asteroit Kuşağı" denir.',
    questionPrompt: 'Buna göre bu gezegen çifti aşağıdakilerin hangisinde verilmiştir?',
    options: [
      { key: 'A', text: 'Mars - Jüpiter' },
      { key: 'B', text: 'Merkür - Venüs' },
      { key: 'C', text: 'Jüpiter - Satürn' },
      { key: 'D', text: 'Uranüs - Neptün' }
    ],
    correctAnswer: 'A',
    explanation: 'Asteroit Kuşağı, en son karasal gezegen olan Mars ile ilk gazsal gezegen olan Jüpiter yörüngeleri arasında yer alır.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Güneş Sistemi Sınır Bölgeleri',
    theme: 'Asteroit Kuşağı'
  },
  {
    id: 61112,
    subTopicId: 'g6-u1-sub1',
    contextTitle: 'Sembollerle Belirtilen Gezegen Eşleştirmesi',
    scenario: 'Üç gezegene ait ayırt edici nitelikler verilmiştir:\n▼ : Güneş sisteminin en küçük gezegeni\n● : Güneş’e en uzak gezegen\n■ : Halkası en belirgin ve görkemli olan gezegen',
    questionPrompt: 'Semboller ile ifade edilen gezegenlerin isimleri hangi seçenekte doğru verilmiştir?',
    options: [
      { key: 'A', text: '▼: Merkür — ●: Neptün — ■: Satürn' },
      { key: 'B', text: '▼: Venüs — ●: Uranüs — ■: Dünya' },
      { key: 'C', text: '▼: Mars — ●: Satürn — ■: Neptün' },
      { key: 'D', text: '▼: Neptün — ●: Uranüs — ■: Venüs' }
    ],
    correctAnswer: 'A',
    explanation: 'En küçük gezegen Merkür, Güneş’e en uzak 8. gezegen Neptün, halkaları en belirgin gezegen Satürn’dür.',
    skillTag: 'Tablo Yorumlama',
    cognitiveLevel: 'Gezegen Sembol Eşleştirme',
    theme: 'Gezegen Özellikleri'
  },

  // --- ALT KONU 2: GÜNEŞ VE AY TUTULMALARI (TEST 2) ---
  {
    id: 61201,
    subTopicId: 'g6-u1-sub2',
    contextTitle: 'Güneş Tutulması Gözlem Şartları',
    scenario: 'Fen Bilimleri öğretmeni tahtaya gündüz gökyüzünün karararak Güneş’in önünün Ay tarafından örtüldüğü bir Güneş tutulması fotoğrafı yansıtmıştır.',
    questionPrompt: 'Öğrencilerin bu olayla ilgili verdiği aşağıdaki cevaplardan hangisinin yanlış olduğu söylenebilir?',
    options: [
      { key: 'A', text: 'Teleskoba ihtiyaç duymadan çıplak gözle doğrudan izlenebilir.' },
      { key: 'B', text: 'Dünyamızdaki bazı bölgelerin üzerine Ay’ın gölgesi düşmüştür.' },
      { key: 'C', text: 'Bu olay Güneş tutulmasıdır ve her ay gerçekleşmez.' },
      { key: 'D', text: 'Gece meydana gelir ve Dünya’nın her yerinden gözlenebilir.' }
    ],
    correctAnswer: 'D',
    explanation: 'Güneş tutulması gece değil, gündüz vakti gerçekleşir ve Dünya’nın her yerinden değil, Ay’ın gölgesinin düştüğü dar bir şerit üzerinden izlenebilir. (Ayrıca doğrudan çıplak gözle bakmak gözü kör edebilir, filtreli gözlük gerektirir).',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Tutulma Gözlem Koşulları',
    theme: 'Güneş Tutulması'
  },
  {
    id: 61202,
    subTopicId: 'g6-u1-sub2',
    contextTitle: 'Ay Tutulmasında Doğrultu ve Işık Kaynağı',
    scenario: 'Görselde Güneş — Dünya — Ay doğrultusu verilmiş ve Dünya’nın gölgesinin Ay’ı tamamen kapladığı Ay tutulması olayı şematize edilmiştir.',
    questionPrompt: 'Görselde verilen olay ile ilgili;\nI. Işık kaynağı Ay’dır.\nII. Güneş, Ay ve Dünya aynı doğrultuda bulunur.\nIII. Ay, Dünya’nın oluşturduğu tam gölgede kalır.\nifadelerinden hangileri doğrudur?',
    options: [
      { key: 'A', text: 'Yalnız I.' },
      { key: 'B', text: 'Yalnız II.' },
      { key: 'C', text: 'I ve III.' },
      { key: 'D', text: 'II ve III.' }
    ],
    correctAnswer: 'B',
    explanation: 'Işık kaynağı Ay değil Güneş’tir (I yanlış). Güneş, Dünya ve Ay aynı doğrultudadır (II doğru). Ay tutulması sırasında Ay, Dünya’nın tam gölgesinde kalır.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Ay Tutulması Mekanizması',
    theme: 'Ay Tutulması Prensipleri'
  },
  {
    id: 61203,
    subTopicId: 'g6-u1-sub2',
    contextTitle: 'Toplarla Güneş Tutulması Modelleme',
    scenario: 'Öğretmen sınıfa getirdiği basketbol topunu Güneş, futbol topunu Dünya, pinpon topunu ise Ay modeli olarak kullanarak Güneş tutulmasının nasıl gerçekleştiğini öğrencilerden modellemelerini istemiştir.',
    questionPrompt: 'Buna göre hangi öğrenci Güneş tutulmasını doğru modellemiştir?',
    options: [
      { key: 'A', text: 'Basketbol topu (Güneş) — Futbol topu (Dünya) — Pinpon topu (Ay)' },
      { key: 'B', text: 'Futbol topu (Dünya) — Basketbol topu (Güneş) — Pinpon topu (Ay)' },
      { key: 'C', text: 'Basketbol topu (Güneş) — Pinpon topu (Ay) — Futbol topu (Dünya)' },
      { key: 'D', text: 'Pinpon topu (Ay) — Futbol topu (Dünya) — Basketbol topu (Güneş)' }
    ],
    correctAnswer: 'C',
    explanation: 'Güneş tutulmasında Ay, Güneş ile Dünya arasına girer. Dolayısıyla sıralama: Güneş (büyük basketbol topu) — Ay (küçük pinpon topu ortada) — Dünya (futbol topu) şeklinde olmalıdır (Uğur’un C seçeneğindeki modeli).',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Tutulma Modeli Tasarımı',
    theme: 'Güneş Tutulması Dizilişi'
  },
  {
    id: 61204,
    subTopicId: 'g6-u1-sub2',
    contextTitle: 'Ay Tutulmasının Gerçekleştiği Ay Evresi',
    scenario: 'Ay’ın evreleri: Yeniay, İlk Dördün, Dolunay, Son Dördün.',
    questionPrompt: 'Ay tutulması olayı, Ay’ın verilen evrelerinden hangisinde gerçekleşir?',
    options: [
      { key: 'A', text: 'İlk dördün' },
      { key: 'B', text: 'Dolunay' },
      { key: 'C', text: 'Hilal' },
      { key: 'D', text: 'Son dördün' }
    ],
    correctAnswer: 'B',
    explanation: 'Ay tutulmasında Dünya, Güneş ile Ay arasındadır; bu konum Ay’ın Dolunay evresine denk gelir.',
    skillTag: 'Temel Bilgi & Mantık',
    cognitiveLevel: 'Ay Evreleri ve Tutulma İlişkisi',
    theme: 'Ay’ın Evreleri ve Tutulmalar'
  },
  {
    id: 61205,
    subTopicId: 'g6-u1-sub2',
    contextTitle: 'Güneş ve Ay Tutulmaları Karşılaştırma Tablosu',
    scenario: 'Tabloda tutulma özellikleri işaretlenmiştir:\nA) Dünya’nın karanlık bölgesinde bulunanlar gözleyebilir ➔ Güneş tutulmasına işaret konulmuştur.\nB) Ay’ın dolunay evresinde gerçekleşir ➔ Ay tutulması işaretlenmiştir.\nC) Işık kaynağı Güneş’tir ➔ Her ikisine de işaret konulmuştur.\nD) Filtreli gözlük takılarak izlenmelidir ➔ Güneş tutulması işaretlenmiştir.',
    questionPrompt: 'Güneş ve Ay tutulmalarına ait özelliklerin işaretlendiği tabloda hangi satırda hata yapılmıştır?',
    options: [
      { key: 'A', text: 'A satırı' },
      { key: 'B', text: 'B satırı' },
      { key: 'C', text: 'C satırı' },
      { key: 'D', text: 'D satırı' }
    ],
    correctAnswer: 'A',
    explanation: 'Dünya’nın karanlık (gece) bölgesinde bulunanların gözlemleyebildiği tutulma Ay tutulmasıdır. Tabloda ise bu özellik Güneş tutulmasına işaretlenerek hata yapılmıştır.',
    skillTag: 'Tablo Yorumlama',
    cognitiveLevel: 'Tutulma Nitelikleri Karşılaştırması',
    theme: 'Güneş vs Ay Tutulması Tablosu'
  },
  {
    id: 61206,
    subTopicId: 'g6-u1-sub2',
    contextTitle: 'Ay Tutulması Dizilim Sırası',
    scenario: 'Gök cisimleri: I-Ay, II-Dünya, III-Güneş.',
    questionPrompt: 'Ay tutulmasını modellemek isteyen bir öğrenci, bu gök cisimlerini hangi sıraya göre aynı doğrultuda dizmelidir?',
    options: [
      { key: 'A', text: 'I - III - II' },
      { key: 'B', text: 'II - III - I' },
      { key: 'C', text: 'II - I - III' },
      { key: 'D', text: 'III - II - I' }
    ],
    correctAnswer: 'D',
    explanation: 'Ay tutulmasında Dünya ortadadır. Diziliş Güneş (III) — Dünya (II) — Ay (I) veya Ay (I) — Dünya (II) — Güneş (III) şeklindedir. Seçeneklerde III - II - I doğru sıradır.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Gök Cisimleri Konumlandırma',
    theme: 'Ay Tutulması Dizilimi'
  },
  {
    id: 61207,
    subTopicId: 'g6-u1-sub2',
    contextTitle: 'Güneş ve Ay Tutulmalarının Ortak Özelliği',
    scenario: 'Venn şemasında Güneş tutulması ile Ay tutulmasının kesişim kümesi (★) gösterilmiştir.',
    questionPrompt: 'Buna göre “★” ile belirtilen ortak durum için aşağıdakilerden hangisi söylenebilir?',
    options: [
      { key: 'A', text: 'Dünya üzerinde dar bir alanda gözlenir.' },
      { key: 'B', text: 'Dünya, Güneş ve Ay aynı doğrultuya geldiklerinde gerçekleşir.' },
      { key: 'C', text: 'Uzun süre gözlenir ve çıplak gözle izlenebilir.' },
      { key: 'D', text: 'Ay, Dünya’nın gölgesinde kalır.' },
    ],
    correctAnswer: 'B',
    explanation: 'Her iki tutulmanın da ortak şartı, Güneş, Dünya ve Ay’ın uzayda aynı doğrultuda dizilmesidir (çakışmasıdır).',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Tutulmaların Ortak Koşulu',
    theme: 'Tutulmaların Geometrisi'
  },
  {
    id: 61208,
    subTopicId: 'g6-u1-sub2',
    contextTitle: 'Tutulma Dallanmış Ağaç Diyagramı',
    scenario: 'Görselde Güneş — Dünya — Ay tutulması verilmiştir. Başlangıç ifadesi: "Ay tutulmasıdır" (D/Y) ➔ "Dünya\'nın gölgesi Ay\'ın üzerine düşer" (D/Y) ➔ Çıkışlar.',
    questionPrompt: 'İfadelerin doğru “D” ya da yanlış “Y” olduğu takip edilerek ilerlenirse hangi çıkışa ulaşılır?',
    options: [
      { key: 'A', text: '1. çıkış' },
      { key: 'B', text: '2. çıkış' },
      { key: 'C', text: '3. çıkış' },
      { key: 'D', text: '4. çıkış' }
    ],
    correctAnswer: 'A',
    explanation: 'Görsel Ay tutulmasıdır (Doğru) ➔ Dünya\'nın gölgesi Ay\'ın üzerine düşer (Doğru) ➔ 1. çıkışa ulaşılır.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Dallanmış Ağaç Çözümleme',
    theme: 'Ay Tutulması Aşamaları'
  },
  {
    id: 61209,
    subTopicId: 'g6-u1-sub2',
    contextTitle: 'Güneş Tutulmasında Ay’ın Konumu',
    scenario: 'Güneş ve Dünya arasında 1, 2, 3, 4 numaralı noktalar gösterilmiştir. 1 noktası Güneş ile Dünya tam arasındadır.',
    questionPrompt: 'Güneş tutulmasının gerçekleşebilmesi için Ay, numaralanmış konumların hangisinde bulunmalıdır?',
    options: [
      { key: 'A', text: '1' },
      { key: 'B', text: '2' },
      { key: 'C', text: '3' },
      { key: 'D', text: '4' }
    ],
    correctAnswer: 'A',
    explanation: 'Güneş tutulmasında Ay tam olarak Güneş ile Dünya arasına girmelidir; bu da 1 numaralı konumdur.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Uzay Geometrisi ve Konumlandırma',
    theme: 'Güneş Tutulması Konumu'
  },
  {
    id: 61210,
    subTopicId: 'g6-u1-sub2',
    contextTitle: 'Ay Tutulmasının Özellikleri ve Değerlendirilmesi',
    scenario: 'Ay tutulması olayı Dünya’nın gölgesinin Ay üzerine düşmesiyle gerçekleşir.',
    questionPrompt: 'Ay tutulması ile ilgili aşağıda verilen ifadelerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Ay’ın “Yeni Ay” evresinde gerçekleşir.' },
      { key: 'B', text: 'Dünya’nın sadece birkaç kilometrelik dar alanından gözlenir.' },
      { key: 'C', text: 'Ay, Dünya’nın gölge konisine girdiği için Dünya üzerinden karanlıkta kalarak gözlenir / doğrudan Güneş ışığını alamaz.' },
      { key: 'D', text: 'Ay, konum olarak Güneş ile Dünya’nın arasında bulunur.' }
    ],
    correctAnswer: 'C',
    explanation: 'Ay tutulmasında Dünya Güneş ile Ay arasındadır. Ay Dünya’nın gölgesinde kalır ve gece boyunca net bir şekilde izlenebilir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Tutulma Doğruluğu Analizi',
    theme: 'Ay Tutulması Özellikleri'
  }
];

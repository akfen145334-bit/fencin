import fs from 'fs';

// Read existing grade5Unit4Data.ts to preserve unit metadata, theme, and summarySections
const currentFile = fs.readFileSync('src/data/grade5Unit4Data.ts', 'utf8');

// We extract subtopics summaries so we don't alter them
// Let's create subtopic 1, 2, 3 with rich trueFalseQuestions and lgsQuestions

const sub1_TF = [
  { id: 1, statement: 'Işık bir kaynaktan çıkarak her yöne ve doğrusal bir hat boyunca yayılır.', isCorrect: true, explanation: 'Doğrudur. Işık saydam ortamlarda ve boşlukta dosdoğru çizgiler (ışınlar) hâlinde her yöne yayılır.' },
  { id: 2, statement: 'Eğik veya kıvrılmış bir hortumun bir ucundan bakıldığında diğer ucundaki mum alevi görülebilir.', isCorrect: false, explanation: 'Yanlıştır. Işık doğrusal yayıldığı için borunun kıvrımlarını aşamaz, alev ancak düz borudan görülebilir.' },
  { id: 3, statement: 'Ay, geceleri ışık saçtığı için kendiliğinden ışık yayan doğal bir ışık kaynağıdır.', isCorrect: false, explanation: 'Yanlıştır. Ay ışık kaynağı değildir; Güneş’ten aldığı ışığı yansıtan aydınlatılmış bir cisimdir.' },
  { id: 4, statement: 'Işık ışını çizilirken ışığın yayılma yönünü göstermek için cetvel ve ok kullanılır.', isCorrect: true, explanation: 'Doğrudur. Işın, başlangıç noktası kaynak olan ve ucu okla gösterilen düz bir çizgidir.' },
  { id: 5, statement: 'Fener balığı, ateş böceği ve denizanası kendiliğinden ışık üreten doğal ışık kaynaklarıdır.', isCorrect: true, explanation: 'Doğrudur. Bu canlılar biyolüminesans yoluyla doğada kendiliğinden ışık üretir.' },
  { id: 6, statement: 'Karanlık oda (Camera Obscura) düzeneğinde delikten geçen ışık karşı duvarda düz görüntü oluşturur.', isCorrect: false, explanation: 'Yanlıştır. Işığın doğrusal yayılması nedeniyle delikten geçen ışınlar çapraz geçerek ters (baş aşağı) görüntü oluşturur.' },
  { id: 7, statement: 'Işık uzay boşluğunda yayılamaz, yayılabilmesi için mutlaka hava maddesi gereklidir.', isCorrect: false, explanation: 'Yanlıştır. Işık maddesel ortama ihtiyaç duymaz; Güneş ışığı uzay boşluğunu aşarak Dünya’ya ulaşır.' },
  { id: 8, statement: 'Üzerinde aynı hizada delikler bulunan üç kartondan biri yana kaydırılırsa ışık engellenir.', isCorrect: true, explanation: 'Doğrudur. Işık eğrilip bükülemediği için kaydırılan opak kartona çarpar ve arkaya geçemez.' },
  { id: 9, statement: 'Araba farları, el feneri ve mum yapay ışık kaynaklarına örnektir.', isCorrect: true, explanation: 'Doğrudur. İnsanlar tarafından üretilen ışık kaynakları yapay ışık kaynağıdır.' },
  { id: 10, statement: 'Bir noktadan çıkarak aynı doğrultuda ilerleyen çok sayıda ışık ışınına ışık demeti denir.', isCorrect: true, explanation: 'Doğrudur. Işınların bir arada ilerlemesi ışık demetini oluşturur.' }
];

const sub1_LGS = [
  {
    id: 1,
    theme: 'Işığın Yayılması',
    cognitiveLevel: 'Deney ve Gözlem Analizi',
    contextTitle: 'Kıvrık ve Düz Boru Deneyi',
    scenario: 'Erdem, bahçede oynarken bulduğu siyah plastik hortumun bir ucuna yanan bir el feneri yerleştirmiştir. Hortum kıvrık haldeyken diğer ucundan baktığında fenerin ışığını görememiştir. Daha sonra hortumu düz hale getirdiğinde fenerin ışığını net bir şekilde görmüştür.',
    questionPrompt: 'Erdem’in yaptığı bu gözlemden yola çıkarak ışık ile ilgili aşağıdaki yargılardan hangisine kesinlikle ulaşılır?',
    options: [
      { key: 'A', text: 'Işık ışınları doğrusal yollar boyunca yayılır.' },
      { key: 'B', text: 'Işık sadece gündüz saatlerinde yayılabilir.' },
      { key: 'C', text: 'Siyah renkli maddeler ışığı her zaman yansıtır.' },
      { key: 'D', text: 'Işık yalnızca yapay kaynaklardan çıktığında kıvrılabilir.' }
    ],
    correctAnswer: 'A',
    explanation: 'Işık ışınları eğrilip bükülemez, daima düz çizgiler (doğrusal) boyunca yayılır. Hortum kıvrıkken ışık ilerleyememiş, düzleştirilince göze ulaşmıştır.'
  },
  {
    id: 2,
    theme: 'Işık Kaynaklarının Sınıflandırılması',
    cognitiveLevel: 'Kavramsal Eşleştirme',
    contextTitle: 'Fen Sınıfında Işık Kaynağı Kartları',
    scenario: 'Fen bilimleri öğretmeni sınıfa şu varlıkların yazılı olduğu kartları getirmiştir:\n1. Güneş, şimşek, ateş böceği, denizanası\n2. Mum, gaz lambası, el feneri, araba farı\n3. Ay, ayna, alüminyum folyo, trafik levhası',
    questionPrompt: 'Bu kartlardaki varlıkların bilimsel sınıflandırması hangi seçenekte doğru verilmiştir?',
    options: [
      { key: 'A', text: '1: Doğal Işık Kaynağı , 2: Yapay Işık Kaynağı , 3: Aydınlatılmış Cisim' },
      { key: 'B', text: '1: Yapay Işık Kaynağı , 2: Doğal Işık Kaynağı , 3: Saydam Cisim' },
      { key: 'C', text: '1: Doğal Işık Kaynağı , 2: Aydınlatılmış Cisim , 3: Yapay Işık Kaynağı' },
      { key: 'D', text: '1: Işık Demeti , 2: Doğal Işık Kaynağı , 3: Opak Cisim' }
    ],
    correctAnswer: 'A',
    explanation: '1. gruptakiler kendiliğinden ışık yayan doğal kaynaklar, 2. gruptakiler insan üretimi yapay kaynaklar, 3. gruptakiler ise ışık kaynağı olmayıp üzerine düşen ışığı yansıtan aydınlatılmış cisimlerdir.'
  },
  {
    id: 3,
    theme: 'Işığın Yayılması',
    cognitiveLevel: 'Model Analizi ve Tasarım',
    contextTitle: 'Işığı Takip Eden Robot Labirenti',
    scenario: 'Öğrenciler robotik kulübünde ışık sensörlü bir robot tasarlamıştır. Robot yalnızca doğrusal olarak ilerleyen ışık ışınlarını algılayabilmekte ve ışığı takip etmektedir. Dört farklı koridor tasarlanmıştır: A koridoru düz, B koridoru Z şeklinde kıvrımlı, C koridoru U şeklinde, D koridoru dalgalı kıvrımlıdır.',
    questionPrompt: 'Işık kaynağı koridorun girişine konulduğunda robot hangi koridorun çıkışına sorunsuz ulaşabilir?',
    options: [
      { key: 'A', text: 'A koridoru' },
      { key: 'B', text: 'B koridoru' },
      { key: 'C', text: 'C koridoru' },
      { key: 'D', text: 'D koridoru' }
    ],
    correctAnswer: 'A',
    explanation: 'Işık doğrusal yayıldığı için yalnızca düz olan A koridoru boyunca ilerleyebilir; kıvrımlı ve bükük koridorlarda duvara çarparak durur.'
  },
  {
    id: 4,
    theme: 'Tarihsel Gelişim',
    cognitiveLevel: 'Bilimsel Tarih ve Mantık Muhakeme',
    contextTitle: 'Karanlık Oda (Camera Obscura) Deneyi',
    scenario: 'İslam bilgini İbnülheysem, tamamen karanlık bir odanın dışarıya bakan duvarına iğne ucu büyüklüğünde bir delik açmış ve güneşli bir günde dışarıdaki ağacın görüntüsünün karşı duvarda ters (baş aşağı) oluştuğunu gözlemlemiştir.',
    questionPrompt: 'İbnülheysem’in bu deneyiyle ispatladığı en temel fizik kuralı hangisidir?',
    options: [
      { key: 'A', text: 'Işığın küçük bir delikten geçerken doğrusal hatlar boyunca ilerleyip karşı duvarda çapraz kesişmesi.' },
      { key: 'B', text: 'Ağaçların geceleri ışık yayarak ters durması.' },
      { key: 'C', text: 'Işığın havadaki nem oranına göre renk değiştirmesi.' },
      { key: 'D', text: 'Görüntünün oluşması için odanın tamamen aydınlık olması gerekliliği.' }
    ],
    correctAnswer: 'A',
    explanation: 'Camera Obscura ilkesi ışığın doğrusal yayılmasına dayanır. Ağacın tepesinden gelen ışın delikten düz geçip aşağıya, kökünden gelen ışın yukarıya düşerek ters görüntü oluşturur.'
  },
  {
    id: 5,
    theme: 'Işık Işınları ve Engeller',
    cognitiveLevel: 'Çok Boyutlu Sistem Analizi',
    contextTitle: 'Delikli Levhalar ve Noktasal Işık',
    scenario: 'Aynı hizada delikleri bulunan üç özdeş opak metal levha aralıklı olarak dizilmiştir. Birinci levhanın önündeki el feneri yakıldığında ışık üçüncü levhanın arkasındaki ekranda aydınlık bir nokta oluşturmaktadır.',
    questionPrompt: 'Ortadaki ikinci levha 2 cm yukarı kaydırılırsa ekrandaki ışık noktasıyla ilgili ne söylenebilir?',
    options: [
      { key: 'A', text: 'Işık noktası kaybolur çünkü ışık doğrusal yayıldığından opak engele çarparak durur.' },
      { key: 'B', text: 'Işık noktası iki kat daha parlak hale gelir.' },
      { key: 'C', text: 'Işık eğrilerek deliğin yeni yerini bulur ve ekrana ulaşır.' },
      { key: 'D', text: 'Işık noktası ekranda yukarı doğru hareket eder.' }
    ],
    correctAnswer: 'A',
    explanation: 'Deliklerin hizası bozulduğunda, ışık doğrusal yayıldığı için kıvrılamaz ve ikinci levhanın opak gövdesine çarparak durur; ekrandaki ışık lekesi kaybolur.'
  }
];

// Subtopic 2: Madde ve Işık (Geçirgenlik: Saydam, Yarı Saydam, Opak)
const sub2_TF = [
  { id: 1, statement: 'Üzerine düşen ışığın tamamını veya büyük kısmını geçiren maddelere saydam madde denir.', isCorrect: true, explanation: 'Doğrudur. Saydam maddelerin arkasındaki cisimler net bir şekilde görünür.' },
  { id: 2, statement: 'Buzlu cam ve yağlı kâğıt ışığı hiç geçirmeyen opak maddelerdir.', isCorrect: false, explanation: 'Yanlıştır. Buzlu cam ve yağlı kâğıt ışığı kısmen geçiren yarı saydam maddelerdir.' },
  { id: 3, statement: 'Saydam bir maddenin kalınlığı artırıldıkça ışık geçirgenliği azalabilir.', isCorrect: true, explanation: 'Doğrudur. Örneğin derin denizlerde su katmanı kalınlaştıkça taban görünmez hâle gelir.' },
  { id: 4, statement: 'Tahta, demir levha ve taş ışığı geçirmeyen saydam olmayan (opak) maddelerdir.', isCorrect: true, explanation: 'Doğrudur. Opak maddeler ışığı geçirmez ve arkasındaki cisimler görülmez.' },
  { id: 5, statement: 'Bir odanın dışarıdan görünmesini engellemek için pencerelerde daima şeffaf cam kullanılır.', isCorrect: false, explanation: 'Yanlıştır. Şeffaf cam saydamdır ve içeriyi gösterir; mahremiyet için tül veya buzlu cam gibi yarı saydam maddeler kullanılır.' },
  { id: 6, statement: 'Işığı geçirme miktarları arasında Saydam > Yarı Saydam > Opak ilişkisi vardır.', isCorrect: true, explanation: 'Doğrudur. Saydam en çok, yarı saydam kısmen, opak ise sıfır ışık geçirir.' },
  { id: 7, statement: 'Sisli havada araç farlarının yolu tam aydınlatamaması, sisin yarı saydam özellik göstermesindendir.', isCorrect: true, explanation: 'Doğrudur. Su damlacıklarından oluşan sis ışığı dağıtır ve geçirgenliği düşürür.' },
  { id: 8, statement: 'Radyometrenin önüne kalın bir tahta levha konulursa radyometrenin yaprakları daha hızlı döner.', isCorrect: false, explanation: 'Yanlıştır. Tahta opak olduğundan ışığı tamamen keser ve radyometre yaprakları durur.' },
  { id: 9, statement: 'Ayna ışığı geçirmeyip yansıttığı için opak madde olarak kabul edilir.', isCorrect: true, explanation: 'Doğrudur. Aynanın arkasındaki sırlı metal tabaka ışığı geçirmez.' },
  { id: 10, statement: 'Çok ince ahşap kaplama veya tek kat peçete kısmen yarı saydam özellik gösterebilir.', isCorrect: true, explanation: 'Doğrudur. Opak maddeler aşırı inceltildiğinde kısmen ışık geçirebilir.' }
];

const sub2_LGS = [
  {
    id: 1,
    theme: 'Maddelerin Işık Geçirgenliği',
    cognitiveLevel: 'Deney Karşılaştırma',
    contextTitle: 'Fil Tablosunun Üç Farklı Maddeyle Kapatılması',
    scenario: 'Bir resim sergisindeki fil tablosunun üzeri üç eşit parçaya bölünerek K, L ve M maddeleriyle kaplanmıştır:\n• K maddesinin arkasından filin gövdesi çok net görünmektedir.\n• L maddesinin arkasından filin bacakları bulanık ve belirsiz görünmektedir.\n• M maddesinin arkasından filin kuyruk kısmı kesinlikle görünmemektedir.',
    questionPrompt: 'Buna göre K, L ve M maddelerinin ışık geçirgenlik türleri hangisinde doğru eşleştirilmiştir?',
    options: [
      { key: 'A', text: 'K: Saydam , L: Yarı Saydam , M: Opak' },
      { key: 'B', text: 'K: Opak , L: Saydam , M: Yarı Saydam' },
      { key: 'C', text: 'K: Yarı Saydam , L: Opak , M: Saydam' },
      { key: 'D', text: 'K: Saydam , L: Opak , M: Yarı Saydam' }
    ],
    correctAnswer: 'A',
    explanation: 'Arkasını net gösteren K saydamdır. Bulanık gösteren L yarı saydamdır. Hiç göstermeyen M ise opaktır.'
  },
  {
    id: 2,
    theme: 'Işık Şiddeti ve Radyometre',
    cognitiveLevel: 'Laboratuvar Cihazı ve Hipotez',
    contextTitle: 'Radyometre Önüne Konulan Levhalar',
    scenario: 'Işık enerjisiyle dönen bir radyometrenin önüne sırasıyla cam, yağlı kâğıt ve kalın mukavva levhalar yerleştirilmiştir.\n1. durumda (cam): Radyometre yaprakları çok hızlı dönmektedir.\n2. durumda (yağlı kâğıt): Radyometre yaprakları yavaş dönmektedir.\n3. durumda (mukavva): Radyometre yaprakları tamamen durmuştur.',
    questionPrompt: 'Bu deney sonuçlarına göre aşağıdaki yargılardan hangisine ulaşılamaz?',
    options: [
      { key: 'A', text: 'Cam ışığı geçirmediği için radyometre dönmüştür.' },
      { key: 'B', text: 'Mukavva opak bir madde olduğu için ışık enerjisini tamamen engellemiştir.' },
      { key: 'C', text: 'Yağlı kâğıt yarı saydam olduğundan ışığın sadece bir kısmını geçirmiştir.' },
      { key: 'D', text: 'Radyometreye ulaşan ışık miktarı azaldıkça dönüş hızı azalır.' }
    ],
    correctAnswer: 'A',
    explanation: 'A seçeneği yanlıştır; cam saydam olduğu için ışığın tamamını geçirmiş ve bu sayede radyometre en hızlı şekilde dönmüştür.'
  },
  {
    id: 3,
    theme: 'Maddenin Kalınlığı ve Geçirgenlik',
    cognitiveLevel: 'Değişken Analizi',
    contextTitle: 'Deniz Suyunda Derinlik ve Görüş Mesafesi',
    scenario: 'Dalgıç Mert, berrak bir denizde dalış yaparken kıyıda yüzerken deniz tabanındaki kumları ve balıkları net olarak görebilmiştir. Ancak 30 metre derinliğe indiğinde deniz suyu aynı temizlikte olmasına rağmen fener kullanmadan çevresini göremediğini fark etmiştir.',
    questionPrompt: 'Bu durumun bilimsel açıklaması aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Saydam maddelerin kalınlığı arttıkça ışık geçirgenliği azalır ve madde opak gibi davranabilir.' },
      { key: 'B', text: 'Deniz suyu derinlerde katılaşarak taşa dönüşür.' },
      { key: 'C', text: 'Derinlerde ışığın yayılma hızı sıfıra düşer.' },
      { key: 'D', text: 'Temiz su sadece yüzeyde saydamdır, derinlerde gaz hâline geçer.' }
    ],
    correctAnswer: 'A',
    explanation: 'Maddenin ışık geçirgenliği kalınlığına bağlıdır. Saydam olan su tabakası kalınlaştıkça ışığı soğurur ve derinlere ışık ulaşamaz.'
  },
  {
    id: 4,
    theme: 'Günlük Yaşam Malzemeleri',
    cognitiveLevel: 'Problem Çözme',
    contextTitle: 'Ev İnşaatında Malzeme Seçimi',
    scenario: 'Bir mimar tasarladığı evin bölümleri için malzeme seçecektir:\n1. Banyo duşakabininde mahremiyet sağlamak için içeriyi net göstermeyen bir cam.\n2. Oturma odasının manzaralı penceresi için dışarıyı en net gösteren cam.\n3. Yatak odasının gündüz karanlık olması için ışığı hiç geçirmeyen panjur.',
    questionPrompt: 'Mimarın kullanması gereken malzeme türleri sırasıyla hangileridir?',
    options: [
      { key: 'A', text: '1: Buzlu cam (Yarı saydam) , 2: Pencere camı (Saydam) , 3: Ahşap panjur (Opak)' },
      { key: 'B', text: '1: Şeffaf cam (Saydam) , 2: Mukavva (Opak) , 3: Tül (Yarı saydam)' },
      { key: 'C', text: '1: Ahşap (Opak) , 2: Buzlu cam (Yarı saydam) , 3: Şeffaf cam (Saydam)' },
      { key: 'D', text: '1: Ayna (Opak) , 2: Yağlı kâğıt (Yarı saydam) , 3: Cam (Saydam)' }
    ],
    correctAnswer: 'A',
    explanation: 'Duşakabinde yarı saydam buzlu cam, oturma odasında saydam pencere camı, ışık geçirmeyen panjurda ise opak ahşap kullanılır.'
  },
  {
    id: 5,
    theme: 'Geçirgenlik ve Işık İletimi',
    cognitiveLevel: 'Tablo Yorumlama',
    contextTitle: 'Dört Maddenin Işık Geçirme Testi',
    scenario: 'Özdeş fenerlerin önüne X, Y, Z ve T maddeleri konularak arkalarındaki ekranda oluşan aydınlanma incelenmiştir:\n• X maddesinde ekranda tam parlak ışık oluşmuştur.\n• Y maddesinde ekranda loş ve dağınık ışık oluşmuştur.\n• Z maddesinde ekranda hiçbir ışık oluşmamıştır.\n• T maddesinde ekranda loş ışık oluşmuştur.',
    questionPrompt: 'Bu maddelerden hangileri yarı saydam gruba aittir?',
    options: [
      { key: 'A', text: 'Y ve T' },
      { key: 'B', text: 'Yalnız X' },
      { key: 'C', text: 'X ve Z' },
      { key: 'D', text: 'Yalnız Z' }
    ],
    correctAnswer: 'A',
    explanation: 'Işığı kısmen geçirip arkasında loş ışık oluşturan Y ve T maddeleri yarı saydamdır. X saydam, Z ise opaktır.'
  }
];

// Subtopic 3: Tam Gölgenin Oluşumu
const sub3_TF = [
  { id: 1, statement: 'Tam gölge oluşabilmesi için ışık kaynağının önüne saydam olmayan (opak) bir engel konulmalıdır.', isCorrect: true, explanation: 'Doğrudur. Opak madde ışığı geçirmediği için arkasında karanlık tam gölge bölgesi oluşur.' },
  { id: 2, statement: 'Opak cisim ışık kaynağına yaklaştırıldığında perdedeki tam gölgenin boyu büyür.', isCorrect: true, explanation: 'Doğrudur. Cisim ışığa yaklaştıkça daha geniş bir ışın açısını keser ve gölge büyür.' },
  { id: 3, statement: 'Perde opak cisimden uzaklaştırılırsa gölgenin boyu küçülür.', isCorrect: false, explanation: 'Yanlıştır. Perde cisimden uzaklaştıkça yayılan ışınların kapsadığı gölge alanı büyür.' },
  { id: 4, statement: 'Güneşli bir günde öğle saatinde (saat 12.00) gölge boyu günün en kısa seviyesindedir.', isCorrect: true, explanation: 'Doğrudur. Güneş ışınları en dik açıyla geldiğinde gölge boyu en kısa olur.' },
  { id: 5, statement: 'Sabah ve akşam saatlerinde Güneş ışınları eğik açıyla geldiği için gölge boyu uzundur.', isCorrect: true, explanation: 'Doğrudur. Işığın geliş açısı eğikleştikçe gölge boyu uzar.' },
  { id: 6, statement: 'Tam gölgenin şekli, opak cismin ışığa bakan yüzeyinin geometrik şekline benzer.', isCorrect: true, explanation: 'Doğrudur. Daire biçimli topun gölgesi daire, küpün gölgesi kare şeklinde olur.' },
  { id: 7, statement: 'Işık kaynağının rengi (kırmızı veya mavi olması) perdedeki tam gölgenin boyutunu değiştirir.', isCorrect: false, explanation: 'Yanlıştır. Gölge boyu ışığın rengine bağlı değildir; yalnızca mesafelere ve cismin boyutuna bağlıdır.' },
  { id: 8, statement: 'Güneş tutulması olayı, Ay’ın opak olması ve ışığın doğrusal yayılması sonucu oluşan dev bir gölge olayıdır.', isCorrect: true, explanation: 'Doğrudur. Ay Güneş ışığını keser ve gölgesi Dünya üzerine düşer.' },
  { id: 9, statement: 'Hacivat ve Karagöz gölge oyununda kukla ışık kaynağına yaklaştırılırsa perdedeki görüntüsü küçülür.', isCorrect: false, explanation: 'Yanlıştır. Kukla ışık kaynağına yaklaştırıldığında perdedeki gölgesi daha büyük görünür.' },
  { id: 10, statement: 'Sokak lambasının tam altına gelen bir kişinin gölgesi en uzun seviyededir.', isCorrect: false, explanation: 'Yanlıştır. Lambanın tam altındayken gölge en kısa, lambadan uzaklaştıkça gölge daha uzundur.' }
];

const sub3_LGS = [
  {
    id: 1,
    theme: 'Tam Gölge Boyunu Etkileyen Değişkenler',
    cognitiveLevel: 'Kontrollü Deney ve Hipotez',
    contextTitle: 'Mum, Engel ve Perde Deneyi',
    scenario: 'Fen bilimleri öğretmeni sınıfta tam gölge deneyi kurmuştur:\n1. Durum: Mum ile tenis topu arası 30 cm, top ile perde arası 30 cm iken gölge boyu 10 cm ölçülmüştür.\n2. Durum: Mum topa 15 cm yaklaştırıldığında gölge boyunun 18 cm’ye çıktığı görülmüştür.',
    questionPrompt: 'Bu deneydeki bağımsız değişken ve deneyin ulaştığı bilimsel sonuç hangisinde doğru verilmiştir?',
    options: [
      { key: 'A', text: 'Bağımsız değişken: Işık kaynağının engele uzaklığı ; Sonuç: Işık kaynağı engele yaklaştıkça gölge boyu büyür.' },
      { key: 'B', text: 'Bağımsız değişken: Perdenin rengi ; Sonuç: Perde değiştikçe ışık hızı artar.' },
      { key: 'C', text: 'Bağımsız değişken: Gölge boyu ; Sonuç: Top büyüdükçe perde küçülür.' },
      { key: 'D', text: 'Bağımsız değişken: Mum alevinin rengi ; Sonuç: Işık dalgalar halinde yayılır.' }
    ],
    correctAnswer: 'A',
    explanation: 'Araştırmacının bizzat değiştirdiği değişken (ışık kaynağı ile engel arasındaki mesafe) bağımsız değişkendir. Işık kaynağı yaklaştıkça perdedeki tam gölge boyu büyür.'
  },
  {
    id: 2,
    theme: 'Günün Saatlerine Göre Gölge Boyu',
    cognitiveLevel: 'Grafik ve Zaman Analizi',
    contextTitle: 'Okul Bahçesindeki Çubuğun Gölgesi',
    scenario: 'Ahmet okul bahçesine diktiği 1 metre uzunluğundaki düz bir çubuğun gölge boyunu güneşli bir günde saat 08.00, 12.00 ve 17.00’de ölçmüştür:\n• Saat 08.00’de gölge boyu 140 cm (batı yönünde)\n• Saat 12.00’de gölge boyu 35 cm (kuzey yönünde)\n• Saat 17.00’de gölge boyu 145 cm (doğu yönünde)',
    questionPrompt: 'Ölçüm sonuçlarına göre yapılan aşağıdaki yorumlardan hangisi kesinlikle doğrudur?',
    options: [
      { key: 'A', text: 'Güneş ışınlarının geliş açısı dikleştikçe gölge boyu kısalır, eğikleştikçe gölge boyu uzar.' },
      { key: 'B', text: 'Çubuğun boyu öğle saatinde sıcağın etkisiyle küçülmüştür.' },
      { key: 'C', text: 'Gölge her zaman Güneş ile aynı yöne doğru düşer.' },
      { key: 'D', text: 'Öğle saatinde Güneş ışık yaymayı durdurduğu için gölge oluşmamıştır.' }
    ],
    correctAnswer: 'A',
    explanation: 'Saat 12.00’de Güneş gökyüzünde en yüksekte ve ışınlar en dik açıyla geldiğinden gölge en kısadır. Sabah ve akşam eğik açıyla geldiğinden gölge boyu en uzundur.'
  },
  {
    id: 3,
    theme: 'Gölge Oyunu ve Perde Mesafesi',
    cognitiveLevel: 'Uygulamalı Sanat ve Fizik Muhakemesi',
    contextTitle: 'Karagöz ve Hacivat Sahnesi',
    scenario: 'Geleneksel gölge oyununda oynatıcı, Hacivat kuklasını Karagöz kuklasından daha devasa ve büyük göstermek istemektedir. Sahne arkasında sabit bir ışık kaynağı ve beyaz perde bulunmaktadır.',
    questionPrompt: 'Oynatıcı bu hedefine ulaşmak için aşağıdaki işlemlerden hangisini yapmalıdır?',
    options: [
      { key: 'A', text: 'Hacivat kuklasını ışık kaynağına yaklaştırmalı, Karagöz’ü ise perdeye yakın tutmalıdır.' },
      { key: 'B', text: 'Her iki kuklayı da perdeye yapıştırmalıdır.' },
      { key: 'C', text: 'Işık kaynağını Hacivat’tan olabildiğince uzaklaştırmalıdır.' },
      { key: 'D', text: 'Hacivat kuklasını tamamen saydam camdan yapmalıdır.' }
    ],
    correctAnswer: 'A',
    explanation: 'Işık kaynağına yaklaşan opak engelin perdedeki gölgesi büyür; perdeye yaklaşan engelin gölgesi küçülür. Hacivat ışığa yaklaştırılırsa devasa görünür.'
  },
  {
    id: 4,
    theme: 'Sokak Lambası ve Gölge Değişimi',
    cognitiveLevel: 'Harekete Bağlı Değişim Muhakemesi',
    contextTitle: 'Gece Sokak Lambası Altında Yürüyen Çocuk',
    scenario: 'Geceleri sabit bir sokak lambasının altından geçen Can, lambaya doğru yürürken (1. aşama), lambanın tam altındayken (2. aşama) ve lambadan uzaklaşırken (3. aşama) gölgesini gözlemlemiştir.',
    questionPrompt: 'Can’ın yürüyüşü boyunca gölge boyundaki değişim sırasıyla nasıldır?',
    options: [
      { key: 'A', text: 'Önce kısalır, tam altındayken en kısa olur, uzaklaştıkça tekrar uzar.' },
      { key: 'B', text: 'Sürekli olarak uzar ve hiç kısalmaz.' },
      { key: 'C', text: 'Lambanın altındayken en uzun olur, uzaklaşınca yok olur.' },
      { key: 'D', text: 'Gölge boyu Can’ın hareketinden hiç etkilenmez, sabit kalır.' }
    ],
    correctAnswer: 'A',
    explanation: 'Işık kaynağına yaklaştıkça ışınlar daha dik geleceğinden gölge boyu kısalır; tam altında en kısa olur; kaynaktan uzaklaştıkça ışınlar eğikleşir ve gölge tekrar uzar.'
  },
  {
    id: 5,
    theme: 'Gölge Şekli ve Geometrik Uyumluluk',
    cognitiveLevel: 'Geometri ve Işık Etkileşimi',
    contextTitle: 'Farklı Geometrik Cisimlerin Gölgeleri',
    scenario: 'Karanlık bir odada noktasal ışık kaynağının önüne bir futbol topu, bir zekâ küpü ve tabanı kare olan bir piramit sırasıyla konulmuştur.',
    questionPrompt: 'Bu cisimlerin perdede oluşturduğu tam gölgelerin şekilleri hakkında hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Futbol topunun gölgesi daire, küpün gölgesi kare, piramidin gölgesi ise ışığa tutuluş açısına göre üçgen veya kare olabilir.' },
      { key: 'B', text: 'Tüm cisimlerin gölgesi istisnasız daire şeklinde oluşur.' },
      { key: 'C', text: 'Zekâ küpünün gölgesi silindir şeklinde oluşur.' },
      { key: 'D', text: 'Piramidin gölgesi perdede hiçbir zaman oluşmaz.' }
    ],
    correctAnswer: 'A',
    explanation: 'Tam gölgenin şekli, opak cismin ışığa bakan kesit yüzeyinin şeklidir. Top daire, küp kare, piramit ise yönüne göre üçgen veya kare gölge verir.'
  }
];

console.log('Unit 4 Question counts:');
console.log('Sub1 TF:', sub1_TF.length, 'LGS:', sub1_LGS.length);
console.log('Sub2 TF:', sub2_TF.length, 'LGS:', sub2_LGS.length);
console.log('Sub3 TF:', sub3_TF.length, 'LGS:', sub3_LGS.length);

import { Unit } from '../../types/curriculum';

export const grade7Unit1Data: Unit = {
  id: 'g7-unit-1',
  unitNumber: 1,
  bookNumber: 1,
  grade: 7,
  subject: 'Fen Bilimleri',
  title: 'Uzay Çağı',
  unitEndPageRange: 's. 51-55',
  colorTheme: {
    primary: 'from-indigo-600 to-purple-700',
    border: 'border-indigo-500/40',
    bg: 'bg-indigo-950/40',
    accent: 'text-indigo-400',
    text: 'text-indigo-200'
  },
  subTopics: [
    {
      id: 'g7-u1-sub1',
      title: '1. Türkiye ve Uzay Araştırmaları',
      shortTitle: 'Türkiye ve Uzay',
      badge: '1. Bölüm',
      pageRange: '15-33',
      concepts: ['Uzay Teknolojileri', 'Yapay Uydular', 'Teleskoplar', 'TUA', 'Alper Gezeravcı', 'Uzay Kirliliği'],
      simulationId: 'moon-phases',
      summarySections: [
        {
          heading: 'Uzay Kavramı ve Uzay Teknolojileri',
          paragraphs: [
            'Uzay; Dünya atmosferi dışında yer alan, Güneş, Ay, yıldızlar, gezegenler ve tüm gök cisimlerinin içinde yer aldığı, sonsuz bir nizam ve intizamla yaratılmış muazzam bir ortamdır. Uzayda çok az miktarda gaz, toz ve parçacıklar yer alır.',
            'İnsanoğlu asırlardır gökyüzünü ve uzayın derinliklerindeki bu kusursuz dengeyi anlamak için çeşitli uzay teknolojileri geliştirmiştir. Türkiye, son yıllarda geliştirdiği Kaan, Akıncı, Bayraktar TB3 gibi millî savunma araçlarında uzay teknolojilerinden, uydu haberleşme ve millî seyrüsefer (yer-yön bulma) sistemlerinden faydalanmaktadır.'
          ],
          keyPoints: [
            'Uzay Sondası: Bir gök cismini veya uzay olaylarını incelemek için gönderilen, Dünya’dan uzaktan kumanda edilen robotik araştırma araçlarıdır (Güneş panelleriyle beslenir).',
            'Uzay Roketi: Uzay araçlarını, uyduları ve modülleri Dünya atmosferinden yörüngeye fırlatmak için kullanılan sivri burunlu güçlü itki araçlarıdır.',
            'Uzay Mekiği: Astronotları, uyduları ve malzemeleri uzaya taşıyan ve tekrar Dünya’ya dönebilen yeniden kullanılabilir hava-uzay araçlarıdır.',
            'Uzay İstasyonu: Belirli bir yörüngede dolanan, astronotların yer çekimsiz/düşük yer çekimli ortamda aylarca yaşayıp bilimsel deneyler yapabildiği dev uzay laboratuvarlarıdır.',
            'Uzay Teleskobu: Atmosferin engelleyici ve ışık kırıcı etkilerinden uzakta, uzayın derinliklerini eşsiz bir netlikte fotoğraflamak için uzay yörüngesine yerleştirilen dev teleskoplardır.'
          ],
          table: {
            headers: ['Uzay Aracı', 'Kullanım Amacı', 'İnsanlı / İnsansız', 'Yeniden Kullanım'],
            rows: [
              ['Uzay Sondası', 'Gök cisimlerini yakından inceleme, fotoğraf ve veri toplama', 'İnsansız', 'Hayır (Tek görev)'],
              ['Uzay Roketi', 'Araç ve uyduları uzaya fırlatma / taşıma', 'İnsansız (Genelde)', 'Yeni nesil roketler evet'],
              ['Uzay Mekiği', 'Astronot ve yükleri uzay istasyonuna götürüp getirme', 'İnsanlı (Astronotlar)', 'Evet (Yeniden kullanılır)'],
              ['Uzay İstasyonu', 'Uzayda uzun süreli bilimsel araştırma ve deneyler yapma', 'İnsanlı (Mürettebatlı)', 'Sürekli yörüngede kalır'],
              ['Yapay Uydular', 'Haberleşme, meteoroloji, haritacılık ve askerî keşif', 'İnsansız', 'Hayır (Ömrünü tamamlar)'],
              ['Uzay Teleskobu', 'Atmosfer dışından evrenin derinliklerini berrak gözlemleme', 'İnsansız', 'Bakım ve onarım yapılabilir']
            ]
          },
          examNote: 'LGS Püf Noktası: Uzay mekiği tekrar kullanılabilirken, uzay sondaları tek yönlü keşif için gönderilir ve geri dönmez. Teleskoplar yer tabanlı veya uzay tabanlı olabilir; uzay teleskopları atmosfer kirliliği ve ışık kirliliğinden etkilenmez.'
        },
        {
          heading: 'Türkiye’nin Yapay Uyduları ve Millî Uzay Hamlesi',
          paragraphs: [
            'Türkiye’nin uzay serüveni 1994 yılında TÜRKSAT 1B ile başlamıştır. Günümüzde ülkemizin uzayda aktif olarak çalışan 6 haberleşme ve 3 yer gözlem uydusu olmak üzere toplam 9 aktif uydusu bulunmaktadır.',
            '9 Temmuz 2024 tarihinde Falcon 9 roketiyle uzaya gönderilen TÜRKSAT 6A, Türkiye’nin ilk yerli ve millî haberleşme uydusu olarak tarihe geçmiştir.'
          ],
          keyPoints: [
            'Haberleşme Uydularımız: Türksat 3A, Türksat 4A, Türksat 4B, Türksat 5A, Türksat 5B ve ilk yerli millî uydumuz Türksat 6A.',
            'Gözlem ve Keşif Uydularımız: Göktürk 1 (yüksek çözünürlüklü), Göktürk 2 (TÜBİTAK UZAY & TUSAŞ ortaklığıyla üretilen ilk millî keşif uydumuz), İMECE (15 Nisan 2023’te fırlatılan metre altı çözünürlüklü yerli gözlem uydusu).',
            'Ömrünü Tamamlamış Emekli Uydular: Türksat 1B, Türksat 1C, Türksat 2A (haberleşme); Bilsat ve Rasat (yer gözlem).'
          ],
          table: {
            headers: ['Uydu Grubu', 'Aktif Uydularımız', 'Ömrü Biten (Emekli) Uydular'],
            rows: [
              ['Haberleşme', 'Türksat 3A, Türksat 4A, Türksat 4B, Türksat 5A, Türksat 5B, Türksat 6A', 'Türksat 1B, Türksat 1C, Türksat 2A'],
              ['Gözlem ve Keşif', 'Göktürk-1, Göktürk-2, İMECE', 'Bilsat, Rasat']
            ]
          }
        },
        {
          heading: 'Teleskop Çeşitleri ve Rasathanelerin (Gözlemevlerinin) Kuruluş Yeri',
          paragraphs: [
            'Gök cisimlerinden gelen ışıkları toplayıp büyüten optik ve radyo araçlarına teleskop denir. Teleskoplar yer tabanlı ve uzay teleskopları olarak ikiye ayrılır.',
            'Uzay teleskopları atmosferin ışığı kırma, soğurma ve yansıtma etkilerinden arınmış olduğu için Hubble ve James Webb teleskopları inanılmaz netlikte görüntüler elde eder. James Webb Teleskobu tenis kortu büyüklüğünde olup rokete sığması için origami (kâğıt katlama sanatı) mantığıyla katlanarak uzayda açılmıştır.'
          ],
          keyPoints: [
            'Gözlemevi (Rasathane) Seçim Şartları: 1) Şehir ışıklarından uzak (ışık kirliliği olmamalı), 2) Yüksek rakımlı dağ zirveleri (atmosfer tabakası ince ve berrak olmalı), 3) Yıl boyunca açık ve bulutsuz gece sayısı fazla olmalı, 4) Deprem fay hatlarından uzak olmalı, 5) TV ve radyo istasyonlarının elektromanyetik sinyallerinden uzak olmalı.',
            'TÜBİTAK Ulusal Gözlemevi (TUG): Antalya Bakırlıtepe’de 2500 m rakımda kurulmuş Türkiye’nin en büyük aktif gözlemevidir (1997).',
            'Doğu Anadolu Gözlemevi (DAG): Erzurum Karakaya Tepeleri’nde (3170 m) kurulan, 4 metre ayna çapıyla Avrupa’nın ve dünyanın en yüksek rakımlı modern gözlemevlerinden biridir.'
          ]
        },
        {
          heading: 'Uzay Araştırmalarının Günlük Yaşamımıza Katkıları ve Uzay Kirliliği',
          paragraphs: [
            'Uzay çalışmaları için geliştirilen birçok yenilikçi teknoloji, bugün günlük yaşamımızda hayatı kolaylaştıran vazgeçilmez ürünlere dönüşmüştür:',
            'Sağlıkta: MR (Manyetik Rezonans), bilgisayarlı tomografi (BT), dijital termometre, yapay kalp pompası, hafızalı yatak (visco), çizilmez gözlük camı, şeffaf diş teli.',
            'Ulaşım ve İletişimde: GPS (Küresel Konumlama Sistemi / Navigasyon), cep telefonu kameraları, uydu iletişimi.',
            'Endüstri ve Evde: Güneş panelleri, termal battaniye, teflon kaplama, alüminyum folyo, duman dedektörü, su filtreleri, bebek maması ve toz gıdalar.'
          ],
          keyPoints: [
            'Uzay Kirliliği: Görevini tamamlamış uydular, roket kademeleri, patlayan yakıt tankları ve uzay araçlarından kopan yüz binlerce metal parça Dünya yörüngesinde saatte on binlerce km hızla dolanmaktadır.',
            'Tehlike: Minik bir boya zerresi veya cıvata bile yüksek hız sebebiyle faal uzay istasyonlarına ve uydulara çarparak ölümcül hasarlar verebilir.',
            'Çözüm Yolları: Ömrü dolan uyduların kontrollü şekilde atmosferde yakılarak imha edilmesi veya robot kollar ve manyetik ağlarla toplanarak temizlenmesi.'
          ],
          scientistBox: {
            name: 'Alper Gezeravcı & Nüzhet Toydemir Gökdoğan',
            role: 'İlk Türk Astronot & İlk Kadın Türk Astronom',
            contribution: 'Alper Gezeravcı, 19 Ocak 2024’te Türk Astronot ve Bilim Misyonu ile Uluslararası Uzay İstasyonu’na giderek biyoloji, tıp ve malzeme biliminde 13 önemli bilimsel deney gerçekleştirmiştir. Nüzhet Gökdoğan ise cumhuriyetimizin ilk kadın gök bilimcisi olup Türk Astronomi Derneğini kurmuştur.'
          }
        }
      ],
      glossary: [
        { term: 'Uzay', definition: 'Dünya’nın atmosferi dışında kalan, gök cisimlerinin kusursuz bir ahenkle yer aldığı sonsuz boşluk.' },
        { term: 'Uzay Sondası', definition: 'Gök cisimlerini ve uzay ortamını incelemek için gönderilen, Dünya’dan radyo sinyalleriyle yönetilen insansız robotik araç.' },
        { term: 'Uzay Mekiği', definition: 'Astronotları ve ekipmanları uzaya taşıyan, tekrar tekrar kullanılabilen kanatlı uzay aracı.' },
        { term: 'Uzay İstasyonu', definition: 'Astronotların Dünya yörüngesinde uzun süre barınıp bilimsel araştırmalar ve deneyler yürüttüğü dev yaşam alanı ve laboratuvar.' },
        { term: 'Yapay Uydu', definition: 'Dünya veya başka bir gezegen etrafında dolanarak iletişim, hava tahmini veya gözlem yapan insan yapımı araç.' },
        { term: 'Türksat 6A', definition: 'Türkiye’nin 9 Temmuz 2024’te fırlatılan ilk yerli ve millî yüksek teknoloji haberleşme uydusu.' },
        { term: 'Işık Kirliliği', definition: 'Işığın yanlış yerde, yanlış zamanda, yanlış yönde ve gereğinden fazla kullanılarak gökyüzü gözlemlerini engellemesi durumu.' },
        { term: 'Gözlemevi (Rasathane)', definition: 'İçinde büyük teleskopların bulunduğu, gök cisimlerini incelemek üzere kurulmuş özel kubbeli araştırma merkezi.' },
        { term: 'Uzay Kirliliği', definition: 'İşlevini yitirmiş uyduların, roket parçalarının ve uzay çöplerinin Dünya yörüngesinde oluşturduğu tehlikeli atık yığını.' }
      ],
      trueFalseQuestions: [
        { id: 1, text: 'Uzay teleskopları atmosferin olumsuz etkilerinden ve ışık kirliliğinden etkilenmediği için yer teleskoplarına göre çok daha net görüntü sağlar.', isCorrect: true, explanation: 'Doğrudur. Atmosferdeki gazlar, toz ve ışık kirliliği uzay teleskoplarını etkilemez.' },
        { id: 2, text: 'Türksat 6A, ülkemizin ilk yerli ve millî gözlem uydusudur.', isCorrect: false, explanation: 'Yanlıştır. Türksat 6A ilk yerli ve millî haberleşme uydumuzdur; ilk millî gözlem uydumuz Rasat ve Göktürk-2’dir.' },
        { id: 3, text: 'Gözlemevleri (rasathaneler) şehir merkezlerine ve deniz kenarlarına kurulmalıdır.', isCorrect: false, explanation: 'Yanlıştır. Gözlemevleri ışık kirliliğinden uzak, yüksek rakımlı, nemsiz ve bulutsuz dağ tepelerine kurulur.' },
        { id: 4, text: 'Uzay sondaları insanlı uzay araçlarıdır ve astronotlar tarafından kontrol edilir.', isCorrect: false, explanation: 'Yanlıştır. Uzay sondaları tamamen insansız robotik araçlardır ve Dünya’dan yönetilir.' },
        { id: 5, text: 'Teflon tava kaplaması, dijital termometre ve MR cihazı uzay araştırmaları sayesinde geliştirilen teknolojilerdendir.', isCorrect: true, explanation: 'Doğrudur. Bu araçlar uzay programlarındaki ihtiyaçlardan doğup günlük yaşama uyarlanmıştır.' },
        { id: 6, text: 'James Webb Uzay Teleskobu origami tekniği ile roket içerisine katlanarak uzaya gönderilmiştir.', isCorrect: true, explanation: 'Doğrudur. Tenis kortu büyüklüğündeki dev aynaları origami tekniğiyle katlanmış ve uzayda açılmıştır.' },
        { id: 7, text: 'Uzay kirliliğine neden olan parçacıklar Dünya yörüngesinde sabit durur ve uzay araçları için herhangi bir tehlike oluşturmaz.', isCorrect: false, explanation: 'Yanlıştır. Çok yüksek hızlarda dolandıkları için milimetrik çöpler bile uzay araçlarına kurşun etkisiyle zarar verir.' },
        { id: 8, text: 'Alper Gezeravcı, Uluslararası Uzay İstasyonu’nda 13 farklı bilimsel deney gerçekleştirmiştir.', isCorrect: true, explanation: 'Doğrudur. TUA ve TÜBİTAK öncülüğünde 13 bilimsel deney başarıyla yapılmıştır.' },
        { id: 9, text: 'Bilsat ve Rasat uydularımız günümüzde aktif olarak haberleşme hizmeti vermektedir.', isCorrect: false, explanation: 'Yanlıştır. Bilsat ve Rasat gözlem uydusu olup görev sürelerini tamamlamış emekli uydulardır.' },
        { id: 10, text: 'Türkiye Uzay Ajansı (TUA), 2018 yılında millî uzay programını yürütmek üzere kurulmuştur.', isCorrect: true, explanation: 'Doğrudur. TUA 2018 yılında devlet kuruluşu olarak faaliyete geçmiştir.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Uzay Teknolojileri ve Görev Analizi',
          cognitiveLevel: 'Analiz ve Çıkarım',
          scenario: 'Bir uzay ajansı Mars gezegeninin yüzey kayaçlarını incelemek, atmosferindeki gaz yoğunluğunu ölçmek ve Dünya’ya yüksek çözünürlüklü fotoğraflar aktarmak amacıyla bir proje başlatıyor.',
          questionPrompt: 'Bu araştırma görevi için tasarlanacak uzay aracının özellikleri hakkında hangisi kesinlikle doğrudur?',
          options: [
            { key: 'A', text: 'İçinde astronotların yaşayabileceği basınçlı oksijen odaları barındırmalıdır.' },
            { key: 'B', text: 'Gerekli enerjiyi sağlamak için güneş panelleri veya nükleer bataryalar taşıyan insansız bir uzay sondası olmalıdır.' },
            { key: 'C', text: 'Görev bittikten sonra Dünya atmosferine süzülerek tekrar kullanılmak üzere iniş yapmalıdır.' },
            { key: 'D', text: 'Dünya yörüngesinde kalarak yalnızca optik aynalarıyla gözlem yapmalıdır.' }
          ],
          correctAnswer: 'B',
          explanation: 'Mars yüzeyine inip inceleme yapan robotik araçlar insansız uzay sondalarıdır ve enerjilerini güneş panellerinden karşılarlar.'
        },
        {
          id: 2,
          theme: 'Teleskoplar ve Gözlemevi Yer Seçimi',
          cognitiveLevel: 'Bilimsel Muhakeme',
          scenario: 'Bir grup astronom yeni bir yer tabanlı optik gözlemevi inşa etmek için dört farklı bölgeyi inceleyerek aşağıdaki tabloyu hazırlamıştır:\n\n1. Bölge: Rakım 2800 m, Yıllık bulutlu gün: 40 gün, Şehre uzaklık: 85 km, Nem: Çok düşük\n2. Bölge: Rakım 300 m, Yıllık bulutlu gün: 180 gün, Şehre uzaklık: 10 km, Nem: Yüksek\n3. Bölge: Rakım 1200 m, Yıllık bulutlu gün: 120 gün, Şehre uzaklık: 25 km, Nem: Orta\n4. Bölge: Rakım 450 m, Yıllık bulutlu gün: 150 gün, Şehre uzaklık: 5 km, Nem: Yüksek',
          questionPrompt: 'Buna göre araştırmacıların gözlemevi kurmak için 1. Bölgeyi tercih etmelerinin temel bilimsel gerekçesi aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Şehir merkezine yakın olup ulaşım maliyetlerini en aza indirmesi' },
            { key: 'B', text: 'Yüksek rakım sayesinde atmosferin incelmesi, nemin ve ışık kirliliğinin minimum düzeyde kalarak net görüntüyü sağlaması' },
            { key: 'C', text: 'Deniz seviyesinde yer alarak rüzgâr hızını kesmesi' },
            { key: 'D', text: 'Radyo ve televizyon vericilerine yakın konumda bulunması' }
          ],
          correctAnswer: 'B',
          explanation: 'Gözlemevleri yüksek rakımlı, nemsiz, bulutsuz ve şehir ışıklarından uzak yerlere kurulur; 1. Bölge tüm bu kriterleri kusursuz sağlar.'
        },
        {
          id: 3,
          theme: 'Türkiye’nin Uyduları',
          cognitiveLevel: 'Sınıflandırma ve Bilgi',
          scenario: 'Fen bilimleri öğretmeni tahtaya Türkiye’nin uzaydaki uydularına ait bir sınıflandırma tablosu çizmiş ve bazı kısımları boş bırakmıştır.\n\nAktif Haberleşme Uyduları: [Türksat 3A, Türksat 4A, Türksat 5A, Türksat 5B, Türksat 6A, X]\nAktif Yer Gözlem Uyduları: [Göktürk-1, Göktürk-2, Y]\nGörevini Tamamlamış Uydular: [Rasat, Bilsat, Z]',
          questionPrompt: 'Buna göre tabloda X, Y ve Z yerine sırasıyla hangi uydular yazılmalıdır?',
          options: [
            { key: 'A', text: 'X: Türksat 4B, Y: İMECE, Z: Türksat 1C' },
            { key: 'B', text: 'X: İMECE, Y: Türksat 4B, Z: Göktürk-1' },
            { key: 'C', text: 'X: Türksat 1B, Y: İMECE, Z: Türksat 4B' },
            { key: 'D', text: 'X: Göktürk-2, Y: Türksat 6A, Z: Rasat' }
          ],
          correctAnswer: 'A',
          explanation: 'Türksat 4B aktif haberleşme uydumuz, İMECE aktif gözlem uydumuz, Türksat 1C ise görev süresini tamamlamış uydumuzdur.'
        },
        {
          id: 4,
          theme: 'Uzay Araştırmalarının Günlük Yaşama Yansıması',
          cognitiveLevel: 'Günlük Yaşam Bağı',
          scenario: 'Uzay yolculuklarında astronotların sağlığını korumak ve uzay koşullarına dayanıklılık sağlamak amacıyla üretilen birçok icat günümüzde sivil hayatta kullanılmaktadır.',
          questionPrompt: 'Aşağıdakilerden hangisi doğrudan uzay araştırmaları sonucunda geliştirilerek insanlığın hizmetine sunulan ürünlerden biri DEĞİLDİR?',
          options: [
            { key: 'A', text: 'İtfaiyecilerin kullandığı ısıya dayanıklı kıyafetler ve yangın battaniyesi' },
            { key: 'B', text: 'Astronotların vücut basıncını korumak için tasarlanan hafızalı sünger (visco) yataklar' },
            { key: 'C', text: 'Kömürlü sobalarda kullanılan döküm ızgara ve odun maşası' },
            { key: 'D', text: 'Tıp alanında dokuların kesitlerini görüntüleyen MR ve ultrason sistemleri' }
          ],
          correctAnswer: 'C',
          explanation: 'Kömürlü soba ve odun maşası geleneksel araçlardır; uzay teknolojisi ürünü değildir.'
        },
        {
          id: 5,
          theme: 'Uzay Kirliliği ve Çözüm Stratejileri',
          cognitiveLevel: 'Eleştirel Düşünme',
          scenario: 'Space Surveillance Network (SSN) verilerine göre Dünya yörüngesinde milimetrik boyuttan metrelerce çapa kadar 130 milyondan fazla başıboş uzay çöpü dolanmaktadır. Bu parçacıklar saatte yaklaşık 28.000 km hızla hareket etmektedir.',
          questionPrompt: 'Uzay kirliliğinin gelecekte yaratabileceği riskler ve çözüm yolları ile ilgili yapılan çıkarımlardan hangisi YANLIŞTIR?',
          options: [
            { key: 'A', text: 'Küçük bir vida parçası dahi yüksek kinetik enerjisi nedeniyle Uluslararası Uzay İstasyonu’nun gövdesini delebilir.' },
            { key: 'B', text: 'Yeni fırlatılan uyduların yörüngeye oturması zorlaşabilir ve uydu çarpışmaları artabilir.' },
            { key: 'C', text: 'Uzay çöpleri bir süre sonra kendiliğinden uzayın dışına uçup yok olacağından herhangi bir önlem almaya gerek yoktur.' },
            { key: 'D', text: 'Görev süresi dolan uyduların atmosfere sokularak kontrollü biçimde yanması sağlanmalıdır.' }
          ],
          correctAnswer: 'C',
          explanation: 'Uzay çöpleri kendiliğinden yok olmaz; aksine çarpıştıkça katlanarak artar (Kessler sendromu).'
        },
        {
          id: 6,
          theme: 'Uzay Teleskopları vs Yer Teleskopları',
          cognitiveLevel: 'Bilimsel Yorumlama',
          scenario: 'James Webb Uzay Teleskobu ile yeryüzünde bulunan güçlü bir optik teleskop, aynı uzaklıktaki bir bulutsunun fotoğrafını çekmiştir. James Webb’den gelen görselin çok daha ayrıntılı, net ve berrak olduğu tespit edilmiştir.',
          questionPrompt: 'Bu durumun temel sebebi aşağıdakilerden hangisi ile açıklanır?',
          options: [
            { key: 'A', text: 'Yer teleskoplarının yalnızca gündüzleri gözlem yapabilmesi' },
            { key: 'B', text: 'Dünya atmosferinin ışığı soğurması, kırması ve hava olaylarının görüşü bozması' },
            { key: 'C', text: 'Uzay teleskoplarının boyut olarak yer teleskoplarından her zaman daha büyük olması' },
            { key: 'D', text: 'Yer teleskoplarının sadece Güneş ışığını toplayabilmesi' }
          ],
          correctAnswer: 'B',
          explanation: 'Atmosferdeki gaz ve toz dalgalanmaları ile ışık kirliliği yeryüzünden yapılan gözlemleri bozar; uzay teleskopları atmosferin dışındadır.'
        },
        {
          id: 7,
          theme: 'Alper Gezeravcı Bilim Misyonu',
          cognitiveLevel: 'Kavrama ve Uygulama',
          scenario: 'Türkiye’nin ilk astronotu Alper Gezeravcı, 2024 yılı Ocak ayında Axiom-3 göreviyle Uluslararası Uzay İstasyonu’nda mikro yer çekimi ortamında Türk bilim insanları tarafından hazırlanan deneyleri yürütmüştür.',
          questionPrompt: 'Uzay istasyonundaki deney ortamının Dünya laboratuvarlarından temel farkı aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Yer çekimi etkisinin neredeyse sıfıra yakın (mikro yer çekimi) olması' },
            { key: 'B', text: 'Ortamda hiç hava ve oksijen bulunmaması' },
            { key: 'C', text: 'Zamanın Dünya’ya göre 10 kat daha hızlı akması' },
            { key: 'D', text: 'Deneylerde kimyasal maddelerin kullanılamaması' }
          ],
          correctAnswer: 'A',
          explanation: 'Uzay istasyonu Dünya etrafında serbest düşme halinde dolandığı için içeride mikro yer çekimi (ağırlıksızlık) ortamı oluşur.'
        },
        {
          id: 8,
          theme: 'Teleskop Tarihi ve Gelişimi',
          cognitiveLevel: 'Tarihsel Bilimsel Süreç',
          scenario: 'Hollanda’da icat edilen ilkel dürbünü gök bilimine uyarlayarak gökyüzünü ilk defa teleskopla gözlemleyen ve Jüpiter’in 4 uydusunu keşfeden bilim insanı Galileo Galilei’dir.',
          questionPrompt: 'Teleskobun icadının gök bilimine sağladığı en büyük katkı nedir?',
          options: [
            { key: 'A', text: 'Gök cisimlerinin Dünya’ya çekilmesini sağlamıştır.' },
            { key: 'B', text: 'İnsan gözünün algılayamadığı sönük ve uzak gök cisimlerinin detaylı incelenmesine ve evren modelinin aydınlatılmasına imkân vermiştir.' },
            { key: 'C', text: 'Uzay kirliliğini tamamen ortadan kaldırmıştır.' },
            { key: 'D', text: 'Yıldızların ömrünü uzatmıştır.' }
          ],
          correctAnswer: 'B',
          explanation: 'Teleskoplar ışık toplama güçleriyle çıplak gözle görülemeyen derin uzay cisimlerini görünür kılmıştır.'
        },
        {
          id: 9,
          theme: 'Uzay İstasyonu Donanımı',
          cognitiveLevel: 'Akıl Yürütme',
          scenario: 'Uluslararası Uzay İstasyonu (ISS) üzerinde devasa kanatlar şeklinde uzanan onlarca panel bulunmaktadır.',
          questionPrompt: 'Bu panellerin temel işlevi aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'İstasyonun uzay rüzgârlarına karşı yelken açmasını sağlamak' },
            { key: 'B', text: 'Güneş ışığını soğurarak istasyonun tüm elektronik sistemleri ve yaşam destek üniteleri için elektrik enerjisi üretmek' },
            { key: 'C', text: 'Gök taşlarını istasyondan uzaklaştırmak' },
            { key: 'D', text: 'İstasyonun Dünya atmosferine geri düşmesini sağlamak' }
          ],
          correctAnswer: 'B',
          explanation: 'İstasyonun üzerindeki dev yapılar fotovoltaik güneş panelleridir ve kesintisiz elektrik üretir.'
        },
        {
          id: 10,
          theme: 'Türkiye’nin İlk Yerli Uydusu Türksat 6A',
          cognitiveLevel: 'Güncel Bilimsel Gelişmeler',
          scenario: 'Türksat 6A projesinde yerli mühendislerimiz uçuş bilgisayarı, güç düzenleme birimleri ve haberleşme antenlerini yüzde seksenin üzerinde yerlilik oranıyla üretmiştir.',
          questionPrompt: 'Ülkemizin kendi haberleşme uydusunu üretebilmesinin en önemli stratejik kazanımı hangisidir?',
          options: [
            { key: 'A', text: 'Yalnızca hava durumu tahminlerini öğrenmek' },
            { key: 'B', text: 'Uzay ve haberleşme teknolojilerinde dışa bağımlılığı azaltarak veri güvenliğini ve egemenliğini millî olarak korumak' },
            { key: 'C', text: 'Güneş’e insanlı yolculuk düzenlemek' },
            { key: 'D', text: 'Atmosferdeki ozon tabakasını onarmak' }
          ],
          correctAnswer: 'B',
          explanation: 'Millî uydular bağımsız iletişim, şifreli savunma haberleşmesi ve teknolojik bağımsızlık sağlar.'
        },
        {
          id: 11,
          theme: 'Uzay Araçları Karşılaştırması',
          cognitiveLevel: 'Tablo Analizi',
          scenario: 'Bir öğrenci roket, mekik ve sonda arasındaki farkları özetlemek istiyor.',
          questionPrompt: 'Aşağıdaki ifadelerden hangisi uzay sondaları için doğru, uzay mekikleri için YANLIŞTIR?',
          options: [
            { key: 'A', text: 'İçinde astronot barındırmaz ve robotik yazılımlarla çalışır.' },
            { key: 'B', text: 'Dünya’ya geri dönüp tekrar kullanılabilir.' },
            { key: 'C', text: 'Yalnızca Dünya atmosferi içinde uçuş yapar.' },
            { key: 'D', text: 'Uzay istasyonuna kargo ve insan taşır.' }
          ],
          correctAnswer: 'A',
          explanation: 'Uzay sondaları tamamen insansızdır; uzay mekiği ise astronot taşır.'
        },
        {
          id: 12,
          theme: 'Işık Kirliliği ve Astronomi',
          cognitiveLevel: 'Problem Çözme',
          scenario: 'Büyük şehirlerde yaşayan çocuklar gece gökyüzüne baktıklarında sadece birkaç parlak yıldız görebilirken, dağ köylerinde binlerce yıldız ve Samanyolu kuşağı çıplak gözle görülebilmektedir.',
          questionPrompt: 'Şehirlerde yıldızların görünmemesinin ana sebebi nedir?',
          options: [
            { key: 'A', text: 'Şehirlerde yıldızların sönmesi' },
            { key: 'B', text: 'Aşırı ve kontrolsüz yapay aydınlatmanın gökyüzü fonunu aydınlatarak gök cisimlerinin sönük ışığını bastırması (Işık kirliliği)' },
            { key: 'C', text: 'Şehirlerin deniz seviyesinde olması' },
            { key: 'D', text: 'Şehirlerde yer çekiminin daha fazla olması' }
          ],
          correctAnswer: 'B',
          explanation: 'Işık kirliliği gökyüzünün karanlığını yok ederek sönük yıldızların kontrastını sıfırlar.'
        },
        {
          id: 13,
          theme: 'Doğu Anadolu Gözlemevi (DAG)',
          cognitiveLevel: 'Yerel ve Millî Bilim',
          scenario: 'Erzurum Karakaya Tepeleri’nde 3170 metre yükseklikte kurulan DAG teleskobu, kızılötesi dalga boyunda da gözlem yapabilen 4 metre çapında aynaya sahiptir.',
          questionPrompt: 'DAG’ın kızılötesi gözlem yeteneği astronomlara nasıl bir avantaj sağlar?',
          options: [
            { key: 'A', text: 'Uzaydaki toz ve gaz bulutlarının arkasına gizlenmiş yeni doğan yıldızları ve uzak galaksileri tespit edebilme' },
            { key: 'B', text: 'Dünya’daki binaların içini görüntüleme' },
            { key: 'C', text: 'Hava sıcaklığını anlık olarak düşürme' },
            { key: 'D', text: 'Ay’ın evrelerini durdurabilme' }
          ],
          correctAnswer: 'A',
          explanation: 'Kızılötesi ışınlar kozmik toz bulutlarının içinden geçebildiği için gizli yıldız oluşum bölgelerini görünür kılar.'
        },
        {
          id: 14,
          theme: 'Uzay Araştırmalarının Sağlık Alanındaki Katkısı',
          cognitiveLevel: 'İlişkilendirme',
          scenario: 'Hastanelerde kullanılan dijital kulaktan ateş ölçerler, aslında NASA’nın yıldızların ve gezegenlerin sıcaklığını uzaktan ölçmek için geliştirdiği kızılötesi sensör teknolojisine dayanmaktadır.',
          questionPrompt: 'Bu durum aşağıdakilerden hangisini en iyi kanıtlar?',
          options: [
            { key: 'A', text: 'Uzay araştırmalarının sadece uzay meraklılarına fayda sağladığını' },
            { key: 'B', text: 'Temel bilim ve uzay teknolojilerinin beklenmedik şekilde tıp ve sağlık sektöründe devrimler yarattığını' },
            { key: 'C', text: 'Astronotların hastanelerde doktorluk yaptığını' },
            { key: 'D', text: 'Tüm tıbbi cihazların uzayda üretildiğini' }
          ],
          correctAnswer: 'B',
          explanation: 'Uzay yatırımları yan ürün (spin-off) teknolojilerle sağlık alanında büyük kolaylıklar üretmiştir.'
        },
        {
          id: 15,
          theme: 'Uzay Görev Arması Sembolizmi',
          cognitiveLevel: 'Kültürel ve Bilimsel Çıkarım',
          scenario: 'Alper Gezeravcı’nın uzay üniformasında taşıdığı armanın sekiz köşeli Selçuklu yıldızı formunda olduğu, üzerinde 16 Türk devletini simgeleyen 16 yıldız ve Cumhuriyetimizin 100. yıl logosunun bulunduğu görülmektedir.',
          questionPrompt: 'Bu tasarımın fen ve toplum açısından verilmek istenen mesajı nedir?',
          options: [
            { key: 'A', text: 'Uzay araştırmalarının köklü medeniyet mirasımız ve Cumhuriyet hedeflerimizle geleceğe taşındığı' },
            { key: 'B', text: 'Armanın sadece bir süs eşyası olduğu' },
            { key: 'C', text: 'Uzayda sadece sekiz köşeli yıldızların bulunduğu' },
            { key: 'D', text: 'Türk astronotların başka ülkelerle çalışmadığı' }
          ],
          correctAnswer: 'A',
          explanation: 'Arma, tarihten gelen bilim ve medeniyet köklerimizi Türkiye Yüzyılı vizyonuyla uzaya taşımayı simgeler.'
        },
        {
          id: 16,
          theme: 'Tarihe Not Düşenler: Nüzhet Toydemir Gökdoğan',
          cognitiveLevel: 'Tarihsel Bilinç',
          scenario: '1910-2003 yılları arasında yaşayan Prof. Dr. Nüzhet Toydemir Gökdoğan, Lyon Üniversitesi’nde matematik ve Paris Gözlemevi’nde astronomi eğitimi almış, Türkiye’ye dönerek ilk Türk kadın dekanı ve Türk Astronomi Derneği başkanı olmuştur.',
          questionPrompt: 'Nüzhet Gökdoğan’ın Türk bilimine yaptığı en büyük katkı aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Türkiye’de modern astronomi eğitiminin temellerini atmış, gözlemevleri kurmuş ve gençlerin bilim insanı olmasını teşvik etmiştir.' },
            { key: 'B', text: 'Ay’a ilk insanlı inişi gerçekleştirmiştir.' },
            { key: 'C', text: 'Hubble Teleskobu’nu tek başına uzaya fırlatmıştır.' },
            { key: 'D', text: 'Uzay roketlerini inşa etmiştir.' }
          ],
          correctAnswer: 'A',
          explanation: 'Gökdoğan, modern Türk astronomisinin kurucularından olup gözlemevleri ve derneklerle bilimi kurumsallaştırmıştır.'
        },
        {
          id: 17,
          theme: 'Uzay Mekiği Teknolojisi',
          cognitiveLevel: 'Mühendislik Tasarımı',
          scenario: 'Geleneksel roketler tek bir uçuşta kademe kademe parçalanıp okyanusa düşerken, uzay mekikleri Dünya atmosferine bir uçak gibi süzülerek iniş pistine tekerlek koyabilir.',
          questionPrompt: 'Uzay mekiklerinin bu tasarım özelliği hangi avantajı sağlar?',
          options: [
            { key: 'A', text: 'Yeniden kullanılabilirlik sayesinde uzay uçuş maliyetlerini azaltması ve kargoları sağlam geri getirebilmesi' },
            { key: 'B', text: 'Uzayda sınırsız hız yapabilmesi' },
            { key: 'C', text: 'Yakıtsız çalışabilmesi' },
            { key: 'D', text: 'Güneş’in merkezine inebilmesi' }
          ],
          correctAnswer: 'A',
          explanation: 'Yeniden kullanılabilir olması ekonomik verimlilik sağlar.'
        },
        {
          id: 18,
          theme: 'Uzay Kirliliği Önleme Yöntemleri',
          cognitiveLevel: 'Yaratıcı Problem Çözme',
          scenario: 'Bir mühendislik ekibi uzay kirliliğini temizlemek için üç farklı yöntem önermektedir: 1) Manyetik ağlarla küçük çöpleri yakalayıp atmosfere doğru çekmek, 2) Lazer ışınlarıyla çöpün yörüngesini saptırarak yanmasını sağlamak, 3) Görevi biten uydulara son yakıtıyla atmosfer frenleme manevrası yaptırmak.',
          questionPrompt: 'Bu önerilerin ortak nihai amacı aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Çöpleri Ay yüzeyine gömmek' },
            { key: 'B', text: 'Atıkları Dünya atmosferine sokarak sürtünme ısısıyla yanıp buharlaşmalarını sağlamak' },
            { key: 'C', text: 'Çöpleri başka galaksilere fırlatmak' },
            { key: 'D', text: 'Tüm uzay araştırmalarını durdurmak' }
          ],
          correctAnswer: 'B',
          explanation: 'Dünya atmosferi yüksek sürtünme sayesinde kontrolsüz yörünge atıklarını yakarak imha eden doğal bir kalkan görevi görür.'
        },
        {
          id: 19,
          theme: 'TUA ve TEKNOFEST Etkisi',
          cognitiveLevel: 'Sosyal ve Bilimsel Çıkarım',
          scenario: 'Her yıl Türkiye’nin farklı şehirlerinde düzenlenen TEKNOFEST Havacılık, Uzay ve Teknoloji Festivali’nde yüz binlerce genç roket yarışmalarına, insansız hava aracı ve uydu tasarım projelerine katılmaktadır.',
          questionPrompt: 'Bu festivallerin ülkemizin uzay çalışmalarına uzun vadeli en büyük katkısı nedir?',
          options: [
            { key: 'A', text: 'Yalnızca eğlenceli vakit geçirmek' },
            { key: 'B', text: 'Geleceğin uzay mühendislerini, yazılımcılarını ve bilim insanlarını yetiştirerek nitelikli insan kaynağı oluşturmak' },
            { key: 'C', text: 'Yurt dışından daha fazla hazır teknoloji satın almak' },
            { key: 'D', text: 'Uzay turizmini başlatmak' }
          ],
          correctAnswer: 'B',
          explanation: 'TEKNOFEST’in temel gayesi millî teknoloji hamlesi vizyonuyla yetişmiş genç insan kaynağı kazandırmaktır.'
        },
        {
          id: 20,
          theme: 'Uzay Teknolojilerinde İletişim',
          cognitiveLevel: 'Mantık ve Muhakeme',
          scenario: 'Dünya’dan yüz milyonlarca kilometre uzakta bulunan bir uzay sondasının gönderdiği radyo sinyali Dünya’ya ancak 15-20 dakika sonra ulaşmaktadır.',
          questionPrompt: 'Bu durum uzay sondalarının tasarımı açısından hangi zorunluluğu doğurur?',
          options: [
            { key: 'A', text: 'Sondaların Dünya’dan anlık olarak bir oyun kolu gibi gerçek zamanlı yönetilemeyeceğini, yapay zekâ ve otonom karar mekanizmalarına sahip olması gerektiğini' },
            { key: 'B', text: 'Sondalara elektrik kablosu çekilmesi gerektiğini' },
            { key: 'C', text: 'Sondaların yalnızca ses dalgası kullanabileceğini' },
            { key: 'D', text: 'Sondalara insan bindirilmesi gerektiğini' }
          ],
          correctAnswer: 'A',
          explanation: 'Işık hızıyla yayılan sinyallerin gecikmesi nedeniyle derin uzay araçları engeller karşısında otonom karar alabilmelidir.'
        }
      ]
    },
    {
      id: 'g7-u1-sub2',
      title: '2. Uzayda Neler Var?',
      shortTitle: 'Uzayda Neler Var?',
      badge: '2. Bölüm',
      pageRange: '34-50',
      concepts: ['Yıldız Oluşumu', 'Bulutsu (Nebula)', 'Kara Delik', 'Işık Yılı', 'Takımyıldızlar', 'Galaksi', 'Evren'],
      simulationId: 'moon-phases',
      summarySections: [
        {
          heading: 'Yıldızların Doğuşu: Bulutsular (Nebulalar)',
          paragraphs: [
            'Yıldızlar; uzayda bulunan devasa gaz (özellikle hidrojen ve helyum) ve toz bulutlarının kütle çekim kuvvetiyle bir araya gelip sıkışmasıyla doğar. Yıldızların doğum yeri olan bu görkemli gaz ve toz bulutlarına bulutsu (nebula) denir.',
            'Bulutsu içindeki gaz ve toz kütlesi kendi ağırlığı altında çöker ve merkezdeki sıcaklık ile basınç trilyonlarca derecelik seviyelere ulaşır. Merkezde başlayan çekirdek kaynaşması (füzyon) ile donuk önyıldız gerçek bir ışık saçan yıldıza dönüşür.'
          ],
          keyPoints: [
            'Atbaşı Bulutsusu: Avcı (Orion) takımyıldızında yer alan, şekli zarif bir denizatı başına benzeyen ünlü karanlık bulutsudur.',
            'Tarantula Bulutsusu: Samanyolu’nun yakınındaki Büyük Macellan Bulutu’nda bulunan, bilinen en büyük kütleli ve en parlak yıldızlara ev sahipliği yapan devasa bulutsudur.',
            'Orion (Avcı) Bulutsusu: Gökyüzünde çıplak gözle dahi fark edilebilen, Dünya’ya en yakın ve en aktif yıldız doğumevlerinden biridir.'
          ]
        },
        {
          heading: 'Yıldızların Yaşam Döngüsü: Kütlenin Belirleyiciliği',
          paragraphs: [
            'Yıldızlar da tıpkı canlılar gibi doğar, yaşar ve enerjilerini tüketerek ölürler. Ancak yıldızların nasıl öleceğini ve ömrünün uzunluğunu başlangıç kütlesi belirler. Kural şudur: Yıldızın kütlesi ne kadar büyükse, merkezindeki yakıtı o kadar hızlı yakar ve ömrü o kadar KISA olur!',
            'Küçük Kütleli Yıldızlar (Güneş kütlesinin 8 katından az olanlar):\nBulutsu ➔ Küçük Kütleli Yıldız ➔ Kırmızı Dev ➔ Gezegenimsi Bulutsu ➔ Beyaz Cüce (Geriye demir ve karbon yığını kalır). Güneş’imiz de bu gruptadır.',
            'Büyük Kütleli Yıldızlar (Güneş kütlesinin 8 katından büyük olanlar):\nBulutsu ➔ Büyük Kütleli Yıldız ➔ Kırmızı Süperdev ➔ Süpernova Patlaması ➔ Nötron Yıldızı (Pulsar) VEYA Kara Delik.'
          ],
          table: {
            headers: ['Aşama', 'Küçük Kütleli Yıldız (Örn: Güneş)', 'Büyük Kütleli Yıldız (Örn: Rigel, Betelgeuse)'],
            rows: [
              ['Doğum Yeri', 'Bulutsu (Gaz ve Toz)', 'Bulutsu (Gaz ve Toz)'],
              ['İlk Evre', 'Küçük Kütleli Sarı Cüce / Anakol', 'Büyük Kütleli Mavi Dev'],
              ['Genişleme', 'Kırmızı Dev', 'Kırmızı Süperdev'],
              ['Ölüm Şekli', 'Gezegenimsi Bulutsu olarak dış katmanları salma', 'Korkunç şiddette Süpernova Patlaması'],
              ['Kalan Kalıntı', 'Beyaz Cüce (Sönmüş karbon/demir çekirdek)', 'Nötron Yıldızı veya Işığı bile yutan Kara Delik']
            ]
          },
          examNote: 'Sınav Notu: Kara delik ve süpernova patlaması SADECE büyük kütleli yıldızların yaşam döngüsünde görülür! Güneş küçük kütleli olduğu için süpernova patlaması geçirmez, beyaz cüceye dönüşür.'
        },
        {
          heading: 'Yıldızların Özellikleri, Sıcaklıkları, Renkleri ve Işık Yılı',
          paragraphs: [
            'Yıldızlar küresel şekle sahip, etrafına kendi ürettikleri ısı ve ışığı yayan plazma hâlindeki sıcak gök cisimleridir. Yıldızların renkleri onların yüzey sıcaklıklarının doğrudan bir göstergesidir:',
            'En Sıcak Yıldızlar: Mavi ve Beyaz renklidir (Yüzey sıcaklıkları 10.000 °C - 30.000 °C üzerindedir).',
            'Orta Sıcaklıktaki Yıldızlar: Sarı renklidir (Yaklaşık 5.500 °C - 6.000 °C; örneğin Güneş’imiz).',
            'En Soğuk Yıldızlar: Kırmızı ve Turuncu renklidir (Yaklaşık 3.000 °C civarındadır; kırmızı devler).',
            'Işık Yılı: Uzaydaki mesafeler o kadar akıl almaz büyüklüktedir ki kilometre cinsinden ifade edilemez. Işığın boşlukta 1 yılda katettiği mesafeye (yaklaşık 9.46 trilyon km) "ışık yılı" denir. Işık yılı bir ZAMAN birimi değil, UZAKLIK (mesafe) birimidir! Güneş Sistemimize en yakın yıldız olan Proxima Centauri yaklaşık 4.24 ışık yılı uzaklıktadır.'
          ]
        },
        {
          heading: 'Takımyıldızlar, Galaksiler ve Evren',
          paragraphs: [
            'Takımyıldızlar: Dünya’dan bakıldığında gökyüzünde bir aradaymış gibi görünen, insanların hayal güçleriyle mitolojik kahramanlara veya hayvanlara benzettiği yıldız topluluklarıdır (Büyükayı, Küçükayı, Avcı/Orion, Kraliçe, Çoban, Ejderha, Başak). Gerçekte bu yıldızlar birbirine çok uzaktır.',
            'Kutup Yıldızı (Polaris): Küçükayı takımyıldızının kuyruğunun ucunda bulunur ve daima Kuzey kutup noktasını gösterir. Büyükayı’nın kepçe/cezve şeklindeki iki ucunun arasındaki mesafenin 5 katı uzağında yer alır.',
            'Galaksiler (Gök Adalar): Milyarlarca yıldız, gaz ve toz bulutunun kütle çekimiyle bir arada tutulduğu dev ada sistemleridir. Dünya’mız sarmal yapıdaki Samanyolu Galaksisi’nin Avcı (Orion) kolunda yer alır. Bize en yakın komşu büyük galaksi Andromeda Galaksisi’dir.',
            'Evren: Dünya da dâhil olmak üzere tüm gök cisimlerini, galaksileri, enerjiyi ve sonsuz uzay boşluğunu içine alan bütündür.'
          ],
          table: {
            headers: ['Büyüklük Sıralaması (Büyükten Küçüğe)', 'Açıklama', 'Örnek'],
            rows: [
              ['1. Evren', 'Her şeyi içine alan sonsuz yapı', 'Tüm varlık alemi'],
              ['2. Uzay', 'Dünya atmosferi dışındaki kozmik alan', 'Atmosfer dışı'],
              ['3. Galaksi (Gök Ada)', 'Milyarlarca yıldızdan oluşan sistem', 'Samanyolu, Andromeda'],
              ['4. Yıldız Sistemi', 'Bir yıldız ve çevresinde dolanan gezegenler', 'Güneş Sistemi'],
              ['5. Gezegen', 'Yıldız etrafında dolanan gök cismi', 'Dünya, Jüpiter'],
              ['6. Doğal Uydu', 'Gezegen etrafında dolanan gök cismi', 'Ay']
            ]
          },
          scientistBox: {
            name: 'Edwin Hubble & Ord. Prof. Dr. Ali Yar',
            role: 'Büyük Astronomlar',
            contribution: 'Edwin Hubble, Samanyolu dışında da sayısız galaksi olduğunu ve evrenin sürekli genişlediğini kanıtlamıştır. Ülkemizin ilk uçak mühendisi Ord. Prof. Dr. Ali Yar ise Atatürk’ün isteğiyle liselerde okutulan ilk modern "Kozmografya" astronomi kitabını kaleme almıştır.'
          }
        }
      ],
      glossary: [
        { term: 'Bulutsu (Nebula)', definition: 'Uzayda hidrojen, helyum ve kozmik tozlardan oluşan, yeni yıldızların doğduğu devasa gaz bulutları.' },
        { term: 'Kırmızı Dev', definition: 'Küçük kütleli yıldızların yaşamlarının sonuna doğru hidrojen yakıtı azaldıkça genişleyip soğuyarak aldıkları kırmızı renkli devasa evre.' },
        { term: 'Beyaz Cüce', definition: 'Küçük kütleli yıldızların dış katmanlarını uzaya fırlattıktan sonra merkezde kalan çok yoğun, sıcak karbon ve demir çekirdeği.' },
        { term: 'Süpernova', definition: 'Büyük kütleli yıldızların hayatlarının sonunda geçirdikleri, tüm galaksiyi aydınlatacak güçteki devasa kozmik patlama.' },
        { term: 'Kara Delik', definition: 'Büyük kütleli dev yıldızların süpernova patlaması sonrası çöken çekirdeğinin, ışığın bile kaçamayacağı kadar güçlü bir kütle çekimine sahip olması durumu.' },
        { term: 'Işık Yılı', definition: 'Işığın boşlukta 1 yılda aldığı yaklaşık 9.46 trilyon kilometrelik astronomik mesafe birimi.' },
        { term: 'Takımyıldız', definition: 'Dünya’dan bakıldığında bir arada görünen ve şekilleri insan, hayvan ya da nesnelere benzetilen yıldız grupları.' },
        { term: 'Kutup Yıldızı (Polaris)', definition: 'Küçükayı takımyıldızında bulunan ve kuzey yönünü gösteren sabit konumlu yıldız.' },
        { term: 'Galaksi (Gök Ada)', definition: 'Milyarlarca yıldız, gezegen sistemi, bulutsu ve kara delikten oluşan devasa uzay adası.' },
        { term: 'Evren', definition: 'Dünya ve tüm uzayı, maddeyi ve zamanı içine alan kusursuz varlık sahası.' }
      ],
      trueFalseQuestions: [
        { id: 1, text: 'Yıldızlar da tıpkı canlılar gibi doğar, belirli bir süre enerji yayarak yaşar ve enerjileri tükenince ölürler.', isCorrect: true, explanation: 'Doğrudur. Yıldızlar bulutsularda doğar ve yakıtlarını tüketerek son bulurlar.' },
        { id: 2, text: 'Işık yılı, gök cisimlerinin yaşını ölçmek için kullanılan bir zaman birimidir.', isCorrect: false, explanation: 'Yanlıştır. Işık yılı zaman değil, uzaydaki muazzam uzaklıkları ölçen bir mesafe (uzunluk) birimidir.' },
        { id: 3, text: 'Yüzey sıcaklığı en yüksek olan yıldızlar kırmızı renkte, en soğuk olanlar mavi renkte görünür.', isCorrect: false, explanation: 'Yanlıştır. En sıcak yıldızlar mavi/beyaz, en soğuk yıldızlar ise kırmızı renklidir.' },
        { id: 4, text: 'Güneş, büyük kütleli bir yıldız olup yaşamının sonunda süpernova patlaması ile kara deliğe dönüşecektir.', isCorrect: false, explanation: 'Yanlıştır. Güneş orta büyüklükte (küçük kütleli) bir yıldızdır; ömrünü beyaz cüce olarak tamamlar.' },
        { id: 5, text: 'Kutup Yıldızı daima kuzey yönünü gösterir ve Küçükayı takımyıldızının en ucunda yer alır.', isCorrect: true, explanation: 'Doğrudur. Kuzey Kutup ekseniyle neredeyse çakışık olduğundan daima kuzeyi işaret eder.' },
        { id: 6, text: 'Dünya’mızın yer aldığı Güneş sistemi Samanyolu galaksisinin Avcı (Orion) kolunda bulunmaktadır.', isCorrect: true, explanation: 'Doğrudur. Samanyolu sarmal bir galaksidir ve biz Avcı kolundayız.' },
        { id: 7, text: 'Evren, sadece Dünya dışındaki gök cisimlerini kapsar, Dünya evrenin içinde yer almaz.', isCorrect: false, explanation: 'Yanlıştır. Evren Dünya da dahil olmak üzere bilinen tüm gök cisimlerini ve uzayı içine alır.' },
        { id: 8, text: 'Bulutsular hidrojen, toz ve gazdan oluşan yıldız oluşum bölgeleridir.', isCorrect: true, explanation: 'Doğrudur. Yıldızlar bulutsuların kütle çekimle çökmesi sonucu doğarlar.' },
        { id: 9, text: 'Yıldız kayması olayı, gerçekte uzaktaki dev bir yıldızın yörüngesinden fırlayıp düşmesidir.', isCorrect: false, explanation: 'Yanlıştır. Yıldız kayması, Dünya atmosferine giren meteor parçalarının sürtünmeyle ısınıp yanmasıdır.' },
        { id: 10, text: 'Büyük kütleli yıldızların yaşamı süpernova patlamasıyla son bulup nötron yıldızı veya kara delik haline gelebilir.', isCorrect: true, explanation: 'Doğrudur. Kütlesi Güneş’in 8 katından büyük yıldızlar süpernova geçirir.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Yıldızların Yaşam Süreci Şeması',
          cognitiveLevel: 'Şema ve Döngü Analizi',
          scenario: 'Aşağıda bir yıldızın yaşam sürecine ait basamaklar karışık olarak verilmiştir:\nI. Gaz ve toz bulutunun çökmesiyle önyıldızın oluşması\nII. Kırmızı süperdev aşamasına geçilmesi\nIII. Şiddetli süpernova patlaması gerçekleşmesi\nIV. Çekirdeğin aşırı yoğunlaşarak kara deliğe dönüşmesi',
          questionPrompt: 'Buna göre bu yaşam döngüsü hangi tür yıldızlara aittir ve sürecin doğru kronolojik sıralaması nasıldır?',
          options: [
            { key: 'A', text: 'Küçük kütleli yıldızlar; I - II - III - IV' },
            { key: 'B', text: 'Büyük kütleli yıldızlar; I - II - III - IV' },
            { key: 'C', text: 'Küçük kütleli yıldızlar; II - I - IV - III' },
            { key: 'D', text: 'Büyük kütleli yıldızlar; I - III - II - IV' }
          ],
          correctAnswer: 'B',
          explanation: 'Süpernova ve kara delik sadece büyük kütleli yıldızlarda görülür. Sıralama: Önyıldız ➔ Kırmızı Süperdev ➔ Süpernova ➔ Kara Delik şeklindedir.'
        },
        {
          id: 2,
          theme: 'Yıldızların Kütlesi ve Ömrü İlişkisi',
          cognitiveLevel: 'Bilimsel Çıkarım',
          scenario: 'Fen bilimleri öğretmeni sınıfta şu hipotezi kurmuştur: "Bir yıldızın başlangıç kütlesi ne kadar büyükse, çekirdeğindeki kütle çekim basıncı ve sıcaklık o kadar yüksek olur; yakıtını çok daha vahşi bir hızla tüketir ve ömrü küçük kütleli yıldızlara göre katbekat kısa olur."',
          questionPrompt: 'Bu hipotezi doğrulamak isteyen bir öğrenci hangi iki yıldızı karşılaştırmalıdır?',
          options: [
            { key: 'A', text: '10 milyar yıl yaşayan Güneş (küçük kütleli) ile yalnızca birkaç milyon yıl yaşayan devasa Rigel yıldızı' },
            { key: 'B', text: 'İki adet özdeş kütleli kırmızı cüce yıldız' },
            { key: 'C', text: 'Dünya ile Ay arasındaki yaş farkı' },
            { key: 'D', text: 'Mars gezegeni ile Jüpiter gezegeni' }
          ],
          correctAnswer: 'A',
          explanation: 'Büyük kütleli yıldızlar devasa enerjilerini hızla tüketip birkaç milyon yılda ölürken, Güneş gibi küçük kütleli yıldızlar 10 milyar yıl yaşar.'
        },
        {
          id: 3,
          theme: 'Yıldız Sıcaklıkları ve Renk Analizi',
          cognitiveLevel: 'Tablo Yorumlama',
          scenario: 'Bir gök bilimci dört farklı yıldızın tayf analizini yaparak yüzey renklerini kaydetmiştir:\nK Yıldızı: Mavi\nL Yıldızı: Sarı\nM Yıldızı: Kırmızı\nN Yıldızı: Beyaz',
          questionPrompt: 'Bu yıldızların yüzey sıcaklıklarının en yüksek olandan en düşük olana doğru sıralanışı hangisidir?',
          options: [
            { key: 'A', text: 'M > L > N > K' },
            { key: 'B', text: 'K > N > L > M' },
            { key: 'C', text: 'L > M > K > N' },
            { key: 'D', text: 'M > K > N > L' }
          ],
          correctAnswer: 'B',
          explanation: 'Yıldızlarda yüzey sıcaklığı: Mavi > Beyaz > Sarı > Turuncu > Kırmızı şeklindedir.'
        },
        {
          id: 4,
          theme: 'Işık Yılı Kavramı',
          cognitiveLevel: 'Kavram Yanılgısı Tespiti',
          scenario: 'Dört öğrenci "ışık yılı" kavramı hakkında aşağıdaki yorumları yapmıştır:\nAli: "Işık yılı, ışığın 1 yılda aldığı mesafedir, dolayısıyla bir uzaklık ölçüsüdür."\nAyşe: "Işık yılı, çok uzun takvim sürelerini hesaplamak için kullanılan bir zaman birimidir."\nCan: "Proxima Centauri 4.24 ışık yılı uzaktaysa, oradan çıkan ışık Dünya’mıza 4.24 yılda ulaşır."\nElif: "Işık yılı ile kilometre arasında bir dönüşüm yapılamaz çünkü biri zaman biri yoldur."',
          questionPrompt: 'Hangi öğrencilerin yaptığı yorumlar bilimsel olarak DOĞRUDUR?',
          options: [
            { key: 'A', text: 'Yalnız Ali' },
            { key: 'B', text: 'Ali ve Can' },
            { key: 'C', text: 'Ayşe ve Elif' },
            { key: 'D', text: 'Can ve Elif' }
          ],
          correctAnswer: 'B',
          explanation: 'Işık yılı mesafe birimidir (1 ışık yılı ~ 9.46 trilyon km). Dolayısıyla 4.24 ışık yılı uzaktaki yıldızın ışığı 4.24 yılda gelir. Ali ve Can haklıdır.'
        },
        {
          id: 5,
          theme: 'Evren, Uzay, Galaksi ve Sistem Hiyerarşisi',
          cognitiveLevel: 'Modelleme ve Kapsam İlişkisi',
          scenario: 'Bir öğrenci evrendeki yapıları iç içe geçmiş küreler (matruşka bebekleri) şeklinde modellemek istiyor.\nEn dıştaki en büyük küre 1, onun içindeki 2, 2’nin içindeki 3 ve en içteki en küçük küre 4 olarak numaralandırılmıştır.',
          questionPrompt: 'Kavramların kapsam büyüklüklerine göre bu eşleştirme hangisinde doğru yapılmıştır?',
          options: [
            { key: 'A', text: '1: Evren, 2: Samanyolu Galaksisi, 3: Güneş Sistemi, 4: Dünya' },
            { key: 'B', text: '1: Dünya, 2: Güneş Sistemi, 3: Samanyolu Galaksisi, 4: Evren' },
            { key: 'C', text: '1: Uzay, 2: Dünya, 3: Güneş Sistemi, 4: Samanyolu' },
            { key: 'D', text: '1: Samanyolu, 2: Evren, 3: Güneş Sistemi, 4: Dünya' }
          ],
          correctAnswer: 'A',
          explanation: 'Kapsam hiyerarşisi en genelden özele: Evren > Galaksi (Samanyolu) > Yıldız Sistemi (Güneş Sistemi) > Gezegen (Dünya).'
        },
        {
          id: 6,
          theme: 'Kutup Yıldızı Bulma Yöntemi',
          cognitiveLevel: 'Uygulama ve Yön Bulma',
          scenario: 'Gece ormanda yönünü kaybeden bir izci gökyüzünde Büyükayı takımyıldızını cezve şeklinde net olarak görmüştür.',
          questionPrompt: 'İzcinin kuzey yönünü kesin olarak tespit edebilmesi için Büyükayı üzerinde hangi adımı uygulaması gerekir?',
          options: [
            { key: 'A', text: 'Cezvenin sap kısmındaki yıldızları güneye doğru uzatmalıdır.' },
            { key: 'B', text: 'Cezvenin ağız tarafındaki iki parlak işaretçi yıldız arasındaki mesafeyi hayali olarak 5 kat doğrultusunda uzatarak ulaştığı parlak Kutup Yıldızı’na (Polaris) bakmalıdır.' },
            { key: 'C', text: 'Tüm yıldızların aynı yönde battığını varsaymalıdır.' },
            { key: 'D', text: 'Ay’ın hilal ucunu takip etmelidir.' }
          ],
          correctAnswer: 'B',
          explanation: 'Ders kitabında açıkça belirtildiği üzere Büyükayı cezvesinin dış iki yıldızının 5 kat uzağında Kutup Yıldızı yer alır ve daima kuzeyi gösterir.'
        },
        {
          id: 7,
          theme: 'Bulutsu Çeşitleri',
          cognitiveLevel: 'Görsel ve Kavram Eşleme',
          scenario: 'Astronomlar gökyüzündeki bulutsuları parlaklık, şekil ve ışık yayma biçimlerine göre inceler. Atbaşı, Tarantula ve Orion bulutsuları kitapta tanıtılmıştır.',
          questionPrompt: 'Bu bulutsularla ilgili aşağıdaki eşleştirmelerden hangisi DOĞRUDUR?',
          options: [
            { key: 'A', text: 'Atbaşı: Avcı takımyıldızında bulunan ve şekli denizatı başına benzeyen bulutsu' },
            { key: 'B', text: 'Tarantula: Yalnızca Kuzey kutbundan görülen en sönük bulutsu' },
            { key: 'C', text: 'Orion: Çıplak gözle asla fark edilemeyen karanlık bir kara delik' },
            { key: 'D', text: 'Atbaşı: Samanyolu’nun merkezindeki süper kütleli kara delik' }
          ],
          correctAnswer: 'A',
          explanation: 'Atbaşı bulutsusu Avcı takımyıldızında yer alır ve şekli bir denizatı başına benzediği için bu ismi almıştır.'
        },
        {
          id: 8,
          theme: 'Yıldızların Yaş Tahmini Yöntemleri',
          cognitiveLevel: 'Bilimsel Yöntem Analizi',
          scenario: 'Ders kitabının 37. sayfasındaki Bilgi Bankası’na göre günümüzde yıldızların yaşını tahmin etmek için üç temel bilimsel yöntem kullanılır.',
          questionPrompt: 'Aşağıdakilerden hangisi bu yöntemlerden biri DEĞİLDİR?',
          options: [
            { key: 'A', text: 'Yıldızların parlaklık ve sıcaklık grafiğindeki konumuna bakılması (Gençler üstte, yaşlılar altta)' },
            { key: 'B', text: 'Yıldızların kendi ekseni etrafında dönme hızına bakılması (Genç yıldızlar hızlı, yaşlılar yavaş döner)' },
            { key: 'C', text: 'Yıldızın iç titreşimlerinden kaynaklanan parlaklık değişimlerinin gözlemlenmesi' },
            { key: 'D', text: 'Yıldızın üzerine gidilerek taş numunesi toplanması' }
          ],
          correctAnswer: 'D',
          explanation: 'Yıldızlar gaz plazmasıdır ve trilyonlarca kilometre uzaktadır, taş numunesi toplanamaz. İlk 3 yöntem kitaptaki bilimsel yöntemlerdir.'
        },
        {
          id: 9,
          theme: 'Kara Deliklerin Özellikleri',
          cognitiveLevel: 'Kavramsal Derinlik',
          scenario: 'Kara delikler uzayda kütle çekim kuvveti akıl almaz derecede yoğun olan kozmik yapılardır.',
          questionPrompt: 'Kara deliklerin optik teleskoplarla doğrudan ışık yayarak fotoğraflanamamasının temel sebebi nedir?',
          options: [
            { key: 'A', text: 'İçerisinde hiç madde bulunmaması' },
            { key: 'B', text: 'Kütle çekim alanının o kadar güçlü olması ki saniyede 300.000 km hızla giden ışığın bile bu çekimden kaçamaması' },
            { key: 'C', text: 'Yalnızca Dünya’nın gündüz vaktinde ortaya çıkmaları' },
            { key: 'D', text: 'Güneş Sistemi’nin içinde bulunmaları' }
          ],
          correctAnswer: 'B',
          explanation: 'Kara deliğin çekiminden ışık bile kaçamadığı için doğrudan ışıma yapmaz, etrafındaki maddeleri yutarken yaydığı ışımadan tespit edilir.'
        },
        {
          id: 10,
          theme: 'Galaksi Çeşitleri ve Samanyolu',
          cognitiveLevel: 'Bilgi ve Analiz',
          scenario: 'Gök bilimciler galaksileri şekillerine göre sarmal, eliptik ve düzensiz olarak sınıflandırırlar.',
          questionPrompt: 'Samanyolu ve en yakın komşumuz Andromeda galaksisi hangi biçimsel yapıya sahiptir?',
          options: [
            { key: 'A', text: 'Her ikisi de sarmal kollara sahip sarmal galaksidir.' },
            { key: 'B', text: 'Samanyolu düzensiz, Andromeda eliptiktir.' },
            { key: 'C', text: 'Her ikisi de tamamen küresel eliptik galaksidir.' },
            { key: 'D', text: 'Samanyolu tek kollu, Andromeda kolsuzdur.' }
          ],
          correctAnswer: 'A',
          explanation: 'Ders kitabında Samanyolu ve Andromeda’nın her ikisinin de sarmal yapıda olduğu ve Andromeda’nın Samanyolu’nun yaklaşık iki katı büyüklükte olduğu vurgulanır.'
        },
        {
          id: 11,
          theme: 'Yıldız Boyutları Kıyaslaması',
          cognitiveLevel: 'Ölçek ve Orantı',
          scenario: 'Güneş, Dünya’mızdan devasa görünse de evrendeki diğer yıldızlarla karşılaştırıldığında orta/küçük ölçekli bir yıldızdır.',
          questionPrompt: 'Kitapta verilen Arcturus, Betelgeuse, Rigel ve Güneş yıldızları hacimce büyükten küçüğe nasıl sıralanır?',
          options: [
            { key: 'A', text: 'Güneş > Arcturus > Rigel > Betelgeuse' },
            { key: 'B', text: 'Betelgeuse > Antares > Aldebaran > Güneş' },
            { key: 'C', text: 'Güneş hepsinden büyüktür.' },
            { key: 'D', text: 'Ay > Güneş > Betelgeuse' }
          ],
          correctAnswer: 'B',
          explanation: 'Kırmızı süperdev olan Betelgeuse ve Antares, Güneş’ten yüzlerce kat daha büyük hacme sahiptir.'
        },
        {
          id: 12,
          theme: 'Meteor Yağmuru ve Yıldız Kayması Ayrımı',
          cognitiveLevel: 'Bilimsel Muhakeme',
          scenario: 'Yaz geceleri gökyüzünde aniden parlak bir çizgi çekerek kaybolan ışık izine halk arasında "yıldız kaydı" denilerek dilek tutulur.',
          questionPrompt: 'Bu olayın fen bilimlerindeki gerçek bilimsel açıklaması hangisidir?',
          options: [
            { key: 'A', text: 'Bir yıldızın enerjisi bitip uzay boşluğuna düşmesidir.' },
            { key: 'B', text: 'Dünya’nın atmosferine yüksek hızla giren meteor (gök taşı) parçacıklarının hava sürtünmesiyle ısınıp akkor hale gelerek arkasında parlak ışık izi bırakmasıdır.' },
            { key: 'C', text: 'Kutup Yıldızı’nın yer değiştirmesidir.' },
            { key: 'D', text: 'Güneş patlamalarının yansımasıdır.' }
          ],
          correctAnswer: 'B',
          explanation: 'Yıldız kayması gerçek yıldızlarla ilgili değildir, atmosferde yanan küçük gök taşı parçacıklarıdır.'
        },
        {
          id: 13,
          theme: 'Güneş’in Geleceği ve Yaşam Döngüsü',
          cognitiveLevel: 'Çıkarım Yapma',
          scenario: 'Yaklaşık 4.6 milyar yaşında olan Güneş, çekirdeğindeki hidrojeni helyuma dönüştürerek ışıma yapmaktadır.',
          questionPrompt: 'Güneş yaklaşık 5 milyar yıl sonra merkezindeki hidrojen tükenince sırasıyla hangi evrelerden geçecektir?',
          options: [
            { key: 'A', text: 'Doğrudan kara deliğe dönüşecektir.' },
            { key: 'B', text: 'Genişleyerek Kırmızı Dev olacak, ardından dış katmanlarını salıp Gezegenimsi Bulutsu ve merkezde Beyaz Cüce olarak kalacaktır.' },
            { key: 'C', text: 'Süpernova patlaması geçirip nötron yıldızı olacaktır.' },
            { key: 'D', text: 'Yeni bir bulutsuya dönüşüp başka bir galaksiye taşınacaktır.' }
          ],
          correctAnswer: 'B',
          explanation: 'Güneş küçük kütleli bir yıldız olduğundan Kırmızı Dev ➔ Gezegenimsi Bulutsu ➔ Beyaz Cüce basamaklarını izler.'
        },
        {
          id: 14,
          theme: 'Takımyıldızların Tarihsel İşlevi',
          cognitiveLevel: 'Tarih ve Fen İlişkisi',
          scenario: 'Antik çağlarda haritalar ve GPS yokken denizciler ve kervanlar geceleri yönlerini gökyüzüne bakarak bulurlardı.',
          questionPrompt: 'Takımyıldızların insanlığa sağladığı temel faydalar arasında hangisi yer alır?',
          options: [
            { key: 'A', text: 'Yön tayini yapmak, mevsimleri ve tarım takvimini (ekim-hasat zamanını) belirlemek' },
            { key: 'B', text: 'Uzay mekiği fırlatmak' },
            { key: 'C', text: 'Gezegenlerin çekim kuvvetini durdurmak' },
            { key: 'D', text: 'Işık kirliliğini engellemek' }
          ],
          correctAnswer: 'A',
          explanation: 'Takımyıldızlar gökyüzünü parsellere bölerek yön bulma ve tarımsal takvim belirlemede asırlarca kullanılmıştır.'
        },
        {
          id: 15,
          theme: 'Gezegenimsi Bulutsu Kavramı',
          cognitiveLevel: 'Kavram Netliği',
          scenario: '"Gezegenimsi bulutsu" terimini duyan bir öğrenci bu yapının gezegenlerden oluştuğunu düşünmüştür.',
          questionPrompt: 'Öğretmenin bu yanılgıyı düzeltmek için yapacağı en doğru açıklama hangisidir?',
          options: [
            { key: 'A', text: '"Haklısın, gezegenimsi bulutsu gezegenlerin patlamasıyla oluşur."' },
            { key: 'B', text: '"Gezegenimsi bulutsular gezegen değildir; küçük kütleli yıldızların ömrünün sonunda uzaya fırlattığı parlak gaz kabuklarıdır, ilk teleskoplarda gezegen gibi yuvarlak göründükleri için bu tarihî ismi almışlardır."' },
            { key: 'C', text: '"Gezegenimsi bulutsu Güneş’in uydusudur."' },
            { key: 'D', text: '"Gezegenimsi bulutsu kara deliğin diğer adıdır."' }
          ],
          correctAnswer: 'B',
          explanation: 'Gezegenimsi bulutsular küçük kütleli yıldızların kalıntısıdır; ilkel teleskoplarda gezegen diskine benzediği için yanıltıcı şekilde bu ad verilmiştir.'
        },
        {
          id: 16,
          theme: 'Büyük Kütleli Yıldızların Sonu',
          cognitiveLevel: 'Sentez',
          scenario: 'Kütlesi Güneş’in 25 katı olan dev bir mavi yıldız yakıtını tüketmiştir.',
          questionPrompt: 'Bu yıldızın yaşamının son anında meydana gelen şiddetli patlama ve geride bıraktığı oluşum hangisidir?',
          options: [
            { key: 'A', text: 'Süpernova patlaması ve ardından oluşacak Kara Delik' },
            { key: 'B', text: 'Gezegenimsi bulutsu ve Beyaz Cüce' },
            { key: 'C', text: 'Yalnızca bir meteor yağmuru' },
            { key: 'D', text: 'Küçük bir kuyruklu yıldız' }
          ],
          correctAnswer: 'A',
          explanation: 'Çok büyük kütleli yıldızlar süpernova patlaması sonrası muazzam kütle çekimli kara deliğe dönüşürler.'
        },
        {
          id: 17,
          theme: 'Tarihe Not Düşenler: Ord. Prof. Dr. Ali Yar',
          cognitiveLevel: 'Tarihsel Çıkarım',
          scenario: '1908 yılında Paris’ten mezun olarak ülkemizin ilk uçak mühendisi unvanını alan Ali Yar, Galatasaray Lisesi ve Darülfünun’da dersler vermiş, Atatürk’ün ricasıyla "Kozmografya" adlı ders kitabını yazmıştır.',
          questionPrompt: 'Kozmografya kitabının liselerde okutulmasının Türk gençliğine sağladığı temel katkı nedir?',
          options: [
            { key: 'A', text: 'Gençlerde bilimsel astronomi, gök bilimi ve havacılık bilincinin yaygınlaşmasını sağlamıştır.' },
            { key: 'B', text: 'Sadece yabancı dillerin öğrenilmesini sağlamıştır.' },
            { key: 'C', text: 'Uzay kirliliğini durdurmuştur.' },
            { key: 'D', text: 'İlk yapay uyduyu inşa ettirmiştir.' }
          ],
          correctAnswer: 'A',
          explanation: 'Ali Yar’ın Kozmografya kitabı Türk gençlerine modern gök bilimi sevgisi ve disiplinini aşılamıştır.'
        },
        {
          id: 18,
          theme: 'Edwin Hubble ve Genişleyen Evren',
          cognitiveLevel: 'Bilimsel Keşifler',
          scenario: '1920’li yıllarda Edwin Hubble, gökyüzündeki sarmal bulutsuların aslında Samanyolu’nun çok ötesinde bağımsız başka galaksiler olduğunu ve bu galaksilerin birbirinden uzaklaştığını keşfetmiştir.',
          questionPrompt: 'Hubble’ın bu keşfi evren anlayışımızda hangi devrimsel sonuca yol açmıştır?',
          options: [
            { key: 'A', text: 'Evrenin durağan ve sabit değil, aksine sürekli genişleyen dinamik bir yapıda olduğunun anlaşılması' },
            { key: 'B', text: 'Güneş’in evrenin tam merkezinde olduğunun ispatlanması' },
            { key: 'C', text: 'Yıldızların hiç ölmeyeceğinin anlaşılması' },
            { key: 'D', text: 'Samanyolu’nun evrendeki tek galaksi olduğunun kanıtlanması' }
          ],
          correctAnswer: 'A',
          explanation: 'Galaksilerin birbirinden uzaklaşması evrenin genişlediğini ve geçmişte tek bir başlangıç noktasına sahip olduğunu gösterdi.'
        },
        {
          id: 19,
          theme: 'Takımyıldız İsimlendirmeleri',
          cognitiveLevel: 'Gözlem ve Kültürel Analiz',
          scenario: 'Büyükayı, Küçükayı, Kraliçe, Avcı, Başak, Ejderha ve Çoban en bilinen takımyıldızlardandır.',
          questionPrompt: 'Bu takımyıldızları oluşturan yıldızlar hakkında aşağıdaki ifadelerden hangisi BİLİMSEL OLARAK DOĞRUDUR?',
          options: [
            { key: 'A', text: 'Aynı takımyıldızdaki yıldızlar birbirine fiziksel olarak bağlıdır ve aralarındaki mesafe çok küçüktür.' },
            { key: 'B', text: 'Yıldızlar aslında uzayın derinliklerinde birbirlerinden trilyonlarca kilometre uzaktadır; sadece Dünya’dan bakış doğrultumuz aynı olduğu için bir aradaymış gibi görünürler.' },
            { key: 'C', text: 'Takımyıldızlar yalnızca teleskopla görülebilir.' },
            { key: 'D', text: 'Tüm takımyıldızlar aynı renkteki yıldızlardan oluşur.' }
          ],
          correctAnswer: 'B',
          explanation: 'Takımyıldızlar derinlik farkı olan yıldızların 2 boyutlu gökyüzü kubbesindeki optik izdüşümleridir.'
        },
        {
          id: 20,
          theme: 'Evrenin Sınırları ve Bütünlüğü',
          cognitiveLevel: 'Üst Düzey Muhakeme',
          scenario: 'Ders kitabının 48. sayfasında "Dünya, yıldızlar, gezegenler, galaksiler, sistemler, asteroitler gibi tüm gök cisimlerini içine alan boşluğa evren denir." ifadesi yer almaktadır.',
          questionPrompt: 'Bu tanımdan hareketle aşağıdaki çıkarımlardan hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Uzay ile evren tamamen aynı anlama gelir ve hiçbir farkları yoktur.' },
            { key: 'B', text: 'Uzay, Dünya’nın atmosferi dışındaki kozmik alanı; Evren ise Dünya ve atmosfer de dâhil olmak üzere var olan her şeyi kapsar.' },
            { key: 'C', text: 'Güneş sistemi evrenin sınırlarını belirler.' },
            { key: 'D', text: 'Evren yalnızca gözle görülebilen parlak yıldızlardan ibarettir.' }
          ],
          correctAnswer: 'B',
          explanation: 'Evren = Dünya + Uzay. Uzay, Dünya atmosferi dışında kalan bölümdür; evren ise hepsini kapsayan sonsuz bütündür.'
        }
      ]
    }
  ]
};

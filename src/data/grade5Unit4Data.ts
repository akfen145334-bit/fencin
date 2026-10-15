import { Unit } from '../types/curriculum';

export const grade5Unit4Data: Unit = {
  id: 'unit-4',
  unitNumber: 4,
  bookNumber: 2,
  grade: 5,
  subject: 'Fen Bilimleri',
  title: 'Işığın Dünyası',
  unitEndPageRange: 's. 44-51',
  colorTheme: {
    primary: 'amber-500',
    border: 'border-amber-500/40',
    bg: 'bg-amber-500/10',
    accent: 'amber-400',
    text: 'text-amber-300'
  },
  subTopics: [
    {
      id: 'unit4-sub1',
      title: '1. Işığın Yayılması (Işığın İzlediği Yol)',
      shortTitle: 'Işığın Yayılması',
      badge: 'Sayfa 15-23',
      pageRange: '15 - 23',
      concepts: ['Işık', 'Doğrusal Yayılma', 'Işın (Işık Işını)', 'Işık Demeti', 'Doğal Işık Kaynağı', 'Yapay Işık Kaynağı', 'Karanlık Oda (Camera Obscura)', 'İbnülheysem', 'Mozi'],
      simulationId: 'moon-phases',
      summarySections: [
        {
          heading: 'Işığın Yayılma Şekli ve Doğrusal Yol',
          paragraphs: [
            'Çevremizdeki varlıkları görebilmemiz için o varlıklardan gözümüze ışık ulaşması gerekir. Bir ışık kaynağından çıkan ışık, saydam ortamlarda ve boşlukta her yöne doğru ve daima doğrusal bir hat boyunca yayılır.',
            'Bulutların arasından süzülen güneş ışınları, ağaç dallarının arasından süzülen güneş huzmeleri, stadyumların çatısındaki dev projektörler, deniz feneri, araba farları, el feneri ve lazer ışığı ışığın doğrusal yayıldığını günlük yaşamda gözler önüne seren harika örneklerdir.'
          ],
          keyPoints: [
            'Işık, bir kaynaktan çıkarak her yönde ve doğrusal (düz bir çizgi boyunca) yayılır.',
            'Düz bir borudan bakıldığında yanan mumun alevi net olarak görülürken, kıvrık veya eğik bir borudan bakıldığında mum alevi kesinlikle görülemez. Bu durum ışığın kıvrılmadığını, doğrusal yayıldığını ispatlar.',
            'Üzerinde aynı hizada delikler bulunan mukavvalardan bakıldığında ışık görülür; deliklerden biri kaydırıldığında ışığın önü kesilir ve alev görülemez.'
          ],
          table: {
            headers: ['Işık Kaynağı Türü', 'Özellik', 'Örnekler'],
            rows: [
              ['Doğal Işık Kaynağı', 'Doğada kendiliğinden ışık yayan, insan müdahalesi olmadan var olan kaynaklar', 'Güneş, yıldızlar, şimşek/yıldırım, ateş böceği'],
              ['Yapay Işık Kaynağı', 'İnsanlar tarafından üretilen ve yakıldığında ışık veren kaynaklar', 'Mum, el feneri, ampul, gaz lambası, meşale, trafik lambaları']
            ]
          }
        },
        {
          heading: 'Işığın Çizimle Gösterimi: Işık Işını (Işın)',
          paragraphs: [
            'Işığın izlediği yolu ve ilerleme yönünü göstermek için çizilen yönlü düz çizgilere ışın (ışık ışını) denir.',
            'Işın çiziminde cetvel kullanılır çünkü ışık doğrusal yayılır. Işının ok çizilmeyen başlangıç noktası ışığın çıktığı kaynağı, ucundaki ok ise ışığın yayılma ve ilerleme yönünü gösterir. Bir noktadan çıkan birden fazla ışının oluşturduğu demete ışık demeti denir.'
          ],
          examNote: 'Cetvel Kullanımı: Işık ışınları çizilirken mutlaka cetvel kullanılır; çünkü ışık dalgalı veya eğri değil, dosdoğru çizgiler hâlinde yayılır!'
        },
        {
          heading: 'Bilgi İstasyonu: Fotoğraf Makinesinin Atası: Karanlık Oda (Camera Obscura)',
          paragraphs: [
            'Karanlık oda tekniği fotoğraf makinesinin bilinen en eski ve en ilkel hâlidir. Işık sızdırmaz bir kutunun bir yüzeyine küçük bir delik açıldığında, dışarıdaki nesneden gelen ışık ışınları delikten geçerek karşı duvarda ters (baş aşağı) bir görüntü oluşturur.',
            'Bu ilkenin ilk tarifini MÖ 4. yüzyılda Çinli filozof Mozi yapmış, ancak bunu deneysel yöntemlerle ispatlayıp lenssiz karanlık odayı ilk icat eden kişi İslam bilgini İbnülheysem (965-1041) olmuştur. İbnülheysem, ışığın düz çizgiler hâlinde dağılmadan yayıldığını ve delik küçüldükçe görüntünün daha net olduğunu kanıtlamıştır.'
          ],
          scientistBox: {
            name: 'İbnülheysem (965 - 1041)',
            role: 'Optik Biliminin Öncüsü',
            contribution: 'Kitâbü’l-Menâzır eseriyle ışığın doğrusal yayıldığını deneylerle kanıtlamış, karanlık odayı (lenssiz kamera) icat ederek modern fotoğrafçılığın ve optiğin temellerini atmıştır.'
          }
        }
      ],
      trueFalseQuestions: [
        {
          id: 1,
          text: 'Bir ışık kaynağından çıkan ışık ışınları dalgalı ve eğriler çizerek her yöne yayılır.',
          isCorrect: false,
          explanation: 'Yanlıştır. Işık ışınları dalgalı veya eğri değil, her yöne dosdoğru (doğrusal) olarak yayılır.'
        },
        {
          id: 2,
          text: 'Eğik bir borudan bakıldığında yanan bir mum alevinin görülememesi, ışığın doğrusal yayıldığını kanıtlar.',
          isCorrect: true,
          explanation: 'Doğrudur. Işık eğrilip bükülemediği için borunun kıvrımını geçemez ve göze ulaşamaz.'
        },
        {
          id: 3,
          text: 'Işık ışını gösteriminde ok işareti ışığın kaynaktan çıktığı yeri değil, ilerleme yönünü belirtir.',
          isCorrect: true,
          explanation: 'Doğrudur. Oksuz uç kaynağı, oklu uç ise ışığın yayılma doğrultusunu ve yönünü gösterir.'
        },
        {
          id: 4,
          text: 'İbnülheysem karanlık oda deneyi ile ışığın doğrusal yayıldığını ve ters görüntü oluşturduğunu ispatlamıştır.',
          isCorrect: true,
          explanation: 'Doğrudur. İbnülheysem küçük delikten geçen ışınların dağılmadan karşı duvarda ters görüntü oluşturduğunu göstermiştir.'
        },
        {
          id: 5,
          text: 'Güneş yapay ışık kaynağına, el feneri ise doğal ışık kaynağına örnektir.',
          isCorrect: false,
          explanation: 'Yanlıştır. Güneş kendiliğinden ışık yayan doğal ışık kaynağıdır; el feneri insan yapımı yapay kaynaktır.'
        }
      ],
      lgsQuestions: [
        {
          id: 1,
          questionPrompt: 'Umut, karanlık bir odada yanan bir muma önce düz bir plastik boruyla, ardından aynı boruyu ortasından bükerek eğik hâlde bakmıştır. Düz boruyla bakarken mum alevini net bir şekilde görebilmiş ancak boruyu büktüğünde alevi görememiştir.\n\nUmut’un yaptığı bu deneyden çıkarılacak EN KESİN bilimsel sonuç aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Işık ışınları her yönde ve doğrusal bir hat boyunca yayılır.' },
            { key: 'B', text: 'Işık sadece yapay ışık kaynaklarından yayılır.' },
            { key: 'C', text: 'Mum alevi borunun içindeki havayı yok etmiştir.' },
            { key: 'D', text: 'Işık sadece cam ve şeffaf borulardan geçebilir.' }
          ],
          correctAnswer: 'A',
          explanation: 'Eğik borudan alevin görülememesi, ışığın kıvrılarak ilerleyemediğini, yalnızca düz çizgiler (doğrusal) boyunca yayıldığını açıkça kanıtlar.'
        },
        {
          id: 2,
          questionPrompt: 'Özdeş mukavvaların ortasına delikler açan bir araştırmacı, delikleri aynı hizaya getirdiğinde fenerin ışığını arkadaki ekranda gözlemleyebilmektedir. Ancak ortadaki kartonu 5 cm yana kaydırdığında ekrandaki ışık lekesi kaybolmaktadır.\n\nBuna göre araştırmacının bu gözlemiyle ilgili;\nI. Işığın doğrusal yayıldığı ispatlanmıştır.\nII. Işık opak maddelerin arkasına geçememiştir.\nIII. Fenerin ışığı sadece tek bir yöne yayılmaktadır.\n\nyargılarından hangileri doğrudur?',
          options: [
            { key: 'A', text: 'Yalnız I' },
            { key: 'B', text: 'I ve II' },
            { key: 'C', text: 'II ve III' },
            { key: 'D', text: 'I, II ve III' }
          ],
          correctAnswer: 'B',
          explanation: 'Delikler aynı hizada iken ışığın geçmesi ve kaydırılınca opak kartona çarparak durması, ışığın doğrusal yayıldığını (I) ve opak maddeden geçemediğini (II) gösterir. Fener ışığı tek yöne değil, aydınlattığı koni içerisinde her yöne doğrusal yayılır (III yanlıştır).'
        }
      ],
      glossary: [
        { term: 'Işın (Işık Işını)', definition: 'Işığın izlediği doğrusal yolu ve yönünü modellemek için kullanılan, bir ucu oklu doğru parçası.' },
        { term: 'Doğrusal Yayılma', definition: 'Işığın herhangi bir engele çarpmadıkça dosdoğru bir hat üzerinde ilerlemesi.' },
        { term: 'Karanlık Oda (Camera Obscura)', definition: 'Işık almayan kapalı kutunun küçük bir deliğinden geçen ışınların karşı yüzeyde ters görüntü oluşturduğu ilk kamera düzeneği.' },
        { term: 'Işık Demeti', definition: 'Aynı kaynaktan çıkarak bir arada ilerleyen çok sayıda ışık ışınının oluşturduğu topluluk.' }
      ]
    },
    {
      id: 'unit4-sub2',
      title: '2. Maddenin Işık Geçirgenliği (Saydam, Yarı Saydam, Opak)',
      shortTitle: 'Maddenin Işık Geçirgenliği',
      badge: 'Sayfa 24-33',
      pageRange: '24 - 33',
      concepts: ['Saydam Madde', 'Yarı Saydam Madde', 'Saydam Olmayan (Opak) Madde', 'Işık Geçirgenliği', 'Madde Kalınlığı', 'Buzlu Cam', 'Yağlı Kâğıt', 'Alüminyum Folyo'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Maddelerin Işığı Geçirme Durumlarına Göre Sınıflandırılması',
          paragraphs: [
            'Işık bir maddeyle karşılaştığında maddenin türüne ve fiziksel yapısına bağlı olarak farklı durumlar gerçekleşir. Maddeler ışığı geçirme özelliklerine göre üç ana grupta sınıflandırılır: Saydam maddeler, Yarı saydam maddeler ve Saydam olmayan (opak) maddeler.',
            'Evlerimizde gün ışığından yararlanmak için pencerelerde saydam cam, mahremiyet sağlamak için yarı saydam tül perde veya ışığı tamamen kesmek için opak kalın perdeler ve panjurlar tercih edilir.'
          ],
          table: {
            headers: ['Madde Türü', 'Işık Geçirgenliği', 'Görüntü Durumu', 'Günlük Yaşamdan Örnekler'],
            rows: [
              ['Saydam Madde', 'Üzerine düşen ışığı tamamen ya da büyük kısmını geçirir.', 'Arkasındaki cisimler net bir şekilde görülür.', 'Pencere camı, hava, temiz su, gözlük camı, şeffaf dosya, lam'],
              ['Yarı Saydam Madde', 'Üzerine düşen ışığın bir kısmını geçirir, bir kısmını engeller/dağıtır.', 'Arkasındaki cisimler bulanık ve seçilemez görülür.', 'Buzlu cam, yağlı kâğıt, ince tül perde, sisli hava, şeffaf renkli plastik şişe'],
              ['Saydam Olmayan (Opak)', 'Üzerine düşen ışığı hiç geçirmez.', 'Arkasındaki cisimler kesinlikle görülmez.', 'Tahta kapı, kitap, duvar, alüminyum folyo, taş, tuğla, metal kaşık, mukavva']
            ]
          }
        },
        {
          heading: 'Maddenin Kalınlığının Işık Geçirgenliğine Etkisi',
          paragraphs: [
            'Bir maddenin ışık geçirgenliği sadece cinsine değil, aynı zamanda o maddenin kalınlığına da doğrudan bağlıdır.',
            'Saydam ve yarı saydam maddelerin kalınlığı artırıldıkça ışık geçirgenliği azalır, kalınlık azaldıkça geçirgenlik artar:',
            '• Deniz veya göl suyu saydam bir sıvıdır; ancak kıyıda deniz tabanı ve balıklar net görünürken derin kısımlarda su tabakası kalınlaştığı için deniz tabanı hiç görülemez.',
            '• İnce bir sis tabakasında yakınımızdaki ağaçları görebilirken, sis tabakası kalınlaştıkça uzaklardaki araç ve binalar tamamen görünmez hâle gelir.',
            '• Kat kat üst üste konulan saydam camlar veya yağlı kâğıtlar bir süre sonra ışığı neredeyse hiç geçirmeyen bir yapıya bürünür.'
          ],
          keyPoints: [
            'Saydam madde kalınlaştıkça yarı saydam veya opak gibi davranabilir.',
            'Opak bir madde inceltilirse (örneğin tahta levha talaş veya çok ince kâğıt hâline getirilirse) kısmen ışık geçirebilir.',
            'Sis tabakasının kalınlığı arttıkça görüş mesafesinin sıfıra inmesi kalınlık-geçirgenlik ilişkisidir.'
          ]
        },
        {
          heading: 'Kültür ve Bilgi İstasyonu: Camın Tarihi',
          paragraphs: [
            'Cam yapımının antik dönemde Kuzey Mezopotamya ve Mısır’da keşfedildiği bilinmektedir. İlk üretilen camlar genelde renkli ve mat objelerken, zamanla arıtma tekniklerinin gelişmesiyle günümüzde pencerelerde, gözlüklerde ve akvaryumlarda kullanılan kusursuz saydam camlar üretilmiştir.'
          ]
        }
      ],
      trueFalseQuestions: [
        {
          id: 6,
          text: 'Akvaryumdaki balıkların dışarıdan net bir şekilde görülebilmesi, camın ve suyun saydam madde olmasındandır.',
          isCorrect: true,
          explanation: 'Doğrudur. Cam ve su saydam maddelerdir ve ışığı geçirdikleri için arkalarındaki balıklar net görülür.'
        },
        {
          id: 7,
          text: 'Buzlu camın arkasındaki eşyaların net görülememesi, buzlu camın opak bir madde olmasından kaynaklanır.',
          isCorrect: false,
          explanation: 'Yanlıştır. Buzlu cam opak değil, yarı saydam bir maddedir; ışığın bir kısmını geçirdiği için görüntü bulanıktır.'
        },
        {
          id: 8,
          text: 'Saydam bir maddenin kalınlığı artırıldığında ışık geçirgenliği de artar.',
          isCorrect: false,
          explanation: 'Yanlıştır. Maddenin kalınlığı arttıkça ışık geçirgenliği azalır (Örn: Derin denizlerde ışığın dibe ulaşamaması).'
        },
        {
          id: 9,
          text: 'Alüminyum folyo ve kalın karton ışığı hiç geçirmeyen opak maddelerdir.',
          isCorrect: true,
          explanation: 'Doğrudur. Alüminyum folyo ve mukavva opak olduğu için üzerlerine düşen ışığı tamamen engeller.'
        }
      ],
      lgsQuestions: [
        {
          id: 3,
          questionPrompt: 'Bir çadır üreticisi, üreteceği kamp çadırının büyük pencerelerinde dışarının net görünmesini, ön gölgeliğinde ise güneş ışınlarının içeri hiç girmeyerek tam bir gölgelik sağlamasını istemektedir.\n\nBuna göre çadır üreticisinin pencerelerde ve gölgelikte kullanması gereken malzemeler hangi seçenekte doğru eşleştirilmiştir?',
          options: [
            { key: 'A', text: 'Pencere: Saydam malzeme - Gölgelik: Opak malzeme' },
            { key: 'B', text: 'Pencere: Yarı saydam malzeme - Gölgelik: Saydam malzeme' },
            { key: 'C', text: 'Pencere: Opak malzeme - Gölgelik: Yarı saydam malzeme' },
            { key: 'D', text: 'Pencere: Saydam malzeme - Gölgelik: Yarı saydam malzeme' }
          ],
          correctAnswer: 'A',
          explanation: 'Dışarının net görünmesi için pencere saydam malzemeden, güneş ışığının hiç geçmeyip serin bir gölge oluşturması için gölgelik opak (saydam olmayan) malzemeden üretilmelidir.'
        },
        {
          id: 4,
          questionPrompt: 'Aynı cins camdan yapılmış üç farklı bölmenin arkasındaki el feneri gözlemleniyor:\n• 1. bölmeden bakıldığında fener çok net ve parlak görünüyor.\n• 2. bölmeden bakıldığında fener bulanık ve soluk görünüyor.\n• 3. bölmeden bakıldığında fenerin ışığı hiç seçilemiyor.\n\nBuna göre bölmelerdeki camların kalınlıkları arasındaki ilişki hangisinde doğru verilmiştir?',
          options: [
            { key: 'A', text: '1 > 2 > 3' },
            { key: 'B', text: '3 > 2 > 1' },
            { key: 'C', text: '2 > 1 > 3' },
            { key: 'D', text: '3 > 1 > 2' }
          ],
          correctAnswer: 'B',
          explanation: 'Maddenin kalınlığı arttıkça ışık geçirgenliği azalır. Işığın hiç görünmediği 3. bölme en kalın, bulanık görünen 2. bölme orta, en net görünen 1. bölme ise en incedir (3 > 2 > 1).'
        }
      ],
      glossary: [
        { term: 'Saydam Madde', definition: 'Üzerine düşen ışığı büyük oranda geçiren ve arkasındaki cisimleri net gösteren maddeler (cam, su, hava).' },
        { term: 'Yarı Saydam Madde', definition: 'Işığın yalnızca bir kısmını geçiren ve arkasındaki cisimleri bulanık gösteren maddeler (buzlu cam, yağlı kâğıt, sis).' },
        { term: 'Opak (Saydam Olmayan) Madde', definition: 'Işık ışınlarını hiç geçirmeyen ve arkasındaki cisimleri göstermeyen maddeler (tahta, demir, taş, karton).' }
      ]
    },
    {
      id: 'unit4-sub3',
      title: '3. Tam Gölgenin Oluşumu ve Gölge Büyüklüğünü Etkileyen Faktörler',
      shortTitle: 'Tam Gölge Oluşumu',
      badge: 'Sayfa 34-43',
      pageRange: '34 - 43',
      concepts: ['Tam Gölge', 'Işık Kaynağı', 'Opak Cisim', 'Ekran (Perde)', 'Gölge Büyüklüğü', 'Uzaklık Değişkenleri', 'Divriği Ulu Camii İnsan Silüeti', 'Karagöz ve Hacivat'],
      simulationId: 'moon-phases',
      summarySections: [
        {
          heading: 'Tam Gölge Nedir ve Nasıl Oluşur?',
          paragraphs: [
            'Işık ışınları doğrusal olarak yayıldığı için opak bir cisimle karşılaştığında bu cismin arkasına geçemez. Bu nedenle opak cismin arkasındaki aydınlanamayan karanlık bölgeye tam gölge adı verilir.',
            'Gölgenin şekli, ışığın çarptığı opak cismin geometrik şekline benzer. Örneğin yuvarlak bir topun gölgesi dairesel, dikdörtgen bir kitabın gölgesi dikdörtgen şeklinde olur.',
            'Gölge olayının varlığı ve sınırlarının belirgin oluşu, ışığın doğrusal yayıldığının en açık ve tartışmasız ispatıdır.'
          ],
          keyPoints: [
            'Tam gölge oluşumu için: 1) Işık kaynağı, 2) Opak cisim, 3) Ekran (perde veya zemin) gereklidir.',
            'Saydam maddeler ışığı geçirdiği için arkalarında belirgin tam gölge oluşturmazlar.',
            'Gölge şekli, cismin ışık alan profiliyle birebir aynıdır.'
          ]
        },
        {
          heading: 'Gölgenin Büyüklüğünü Değiştiren Faktörler',
          paragraphs: [
            'Bir cismin ekranda oluşan gölgesinin büyüklüğü cismin boyutuna ve aralarındaki mesafelere bağlı olarak değişir:',
            '1. Kural (Cisim Işık Kaynağına Yaklaşırsa): Cisim ışık kaynağına yaklaştırıldığında ışınların yayılma açısı genişler; ekrandaki gölgenin boyu BÜYÜR.',
            '2. Kural (Cisim Ekrana Yaklaşırsa / Kaynaktan Uzaklaşırsa): Cisim ışık kaynağından uzaklaştırılıp ekrana yaklaştırıldığında gölgenin boyu KÜÇÜLÜR.',
            '3. Kural (Işık Kaynağı Cisme Yaklaşırsa): Işık kaynağı sabit cisme doğru yaklaştırılırsa gölgenin boyu BÜYÜR.',
            '4. Kural (Ekran Cisimden Uzaklaştırılırsa): Perde cisimden uzaklaştırılırsa ışınlar daha geniş bir alana yayıldığı için gölge BÜYÜR.',
            '5. Kural (Cismin Ebadı): Kaynağa eşit mesafede tutulan cisimlerden boyutu büyük olanın (ör. futbol topu) gölgesi, küçük olanınkinden (ör. tenis topu) büyüktür.'
          ],
          table: {
            headers: ['Yapılan Değişiklik', 'Ekrandaki Gölge Boyunun Değişimi', 'Açıklama'],
            rows: [
              ['Cisim ışık kaynağına yaklaştırılırsa', 'BÜYÜR', 'Işınların önü daha geniş açıyla kesilir.'],
              ['Cisim ekrana yaklaştırılırsa', 'KÜÇÜLÜR', 'Cisim kaynaktan uzaklaştığı için gölge küçülür.'],
              ['Işık kaynağı cisme yaklaştırılırsa', 'BÜYÜR', 'Kaynaktan çıkan ışın konisi daha genişler.'],
              ['Ekran cisimden uzaklaştırılırsa', 'BÜYÜR', 'Işınların ekrana ulaştığı alan genişler.']
            ]
          }
        },
        {
          heading: 'Bilgi İstasyonu: Divriği Ulu Camii ve Darüşşifası Silüet Mucizesi',
          paragraphs: [
            'Sivas’ın Divriği ilçesinde 1228 yılında Mengücekliler döneminde inşa edilen Divriği Ulu Camii ve Darüşşifası, UNESCO Dünya Mirası Listesi’nde yer alan bir mimarlık şaheseridir. Caminin batı kapısında mayıs ve eylül ayları arasında ikindi vaktinde taş kabartmaların gölgesiyle namaz kılan bir insan silüeti belirmektedir.',
            'Bu durum bir tesadüf eseri olmayıp ecdadımızın çok ileri düzeyde fizik, optik, gölge hesaplamaları ve astronomi bilgisine sahip olduğunu kanıtlar.'
          ]
        },
        {
          heading: 'Çağını Aşanlar: Optik ve Gölge Bilginleri',
          paragraphs: [
            'Tarih boyunca ışık, optik ve gölge hesaplamaları ile insanlık ufkunu açan büyük ilim insanları:'
          ],
          keyPoints: [
            'Miletli Thales (MÖ 640): Bir cismin boyu ile gölge boyunun eşit olduğu anı hesaplayarak Mısır piramitlerinin yüksekliğini ölçmüştür.',
            'Eratosthenes (MÖ 276-194): Aynı boylamdaki iki şehirde öğle vakti anıtın gölge açısını ve mesafeyi ölçerek Dünya’nın çevresini bugünkü gerçeğe çok yakın (46.225 km) hesaplamıştır.',
            'Christiaan Huygens (1629-1695): Işığın dalga yayılımını ve optik prensiplerini matematiksel olarak modellemiştir.',
            'Kindî (801-873): İslam felsefesinin ve optiğin öncülerindendir; ışığın doğrusal yayılımı, aynalarda yansıma ve görme fiziği üzerine çığır açıcı risaleler yazmıştır.'
          ]
        }
      ],
      trueFalseQuestions: [
        {
          id: 10,
          text: 'Opak bir cisim ışık kaynağına yaklaştırıldığında ekrandaki gölgesinin boyu büyür.',
          isCorrect: true,
          explanation: 'Doğrudur. Cisim ışık kaynağına yaklaştıkça daha fazla ışık demetini bloke eder ve ekranda daha büyük bir gölge oluşturur.'
        },
        {
          id: 11,
          text: 'Saydam pencere camının arkasında tıpkı tahta kapı gibi kapkaranlık bir tam gölge oluşur.',
          isCorrect: false,
          explanation: 'Yanlıştır. Saydam maddeler ışığı geçirdiği için arkalarında tam gölge oluşmaz.'
        },
        {
          id: 12,
          text: 'Ekran opak cisimden uzaklaştırılırsa cismin gölgesi küçülür.',
          isCorrect: false,
          explanation: 'Yanlıştır. Ekran cisimden uzaklaştırıldığında koni biçiminde açılan ışınların sınırları genişler ve gölge büyür.'
        },
        {
          id: 13,
          text: 'Gölgenin oluşması, ışığın her yöne doğrusal yayıldığının en açık kanıtıdır.',
          isCorrect: true,
          explanation: 'Doğrudur. Işık eğilip cismin arkasına dolanamadığı için cismin arkasında karanlık tam gölge alanı kalır.'
        }
      ],
      lgsQuestions: [
        {
          id: 5,
          questionPrompt: 'Duvarda el feneri ve eliyle tavşan figürü oluşturan Ali, kardeşine tavşanın duvardaki gölgesini büyütmek istediğini söyler.\n\nBuna göre Ali amacına ulaşmak için;\nI. Elini fenere doğru yaklaştırmalıdır.\nII. El fenerini elinden uzaklaştırmalıdır.\nIII. Elini duvara doğru yaklaştırmalıdır.\n\nişlemlerinden hangilerini tek başına yapmalıdır?',
          options: [
            { key: 'A', text: 'Yalnız I' },
            { key: 'B', text: 'I ve II' },
            { key: 'C', text: 'II ve III' },
            { key: 'D', text: 'I, II ve III' }
          ],
          correctAnswer: 'A',
          explanation: 'Gölgeyi büyütmek için cisim (el) ışık kaynağına (fenere) yaklaştırılmalıdır (I doğru). Feneri elden uzaklaştırmak veya eli duvara yaklaştırmak gölgeyi küçültür (II ve III yanlış).'
        },
        {
          id: 6,
          questionPrompt: 'Noktasal bir ışık kaynağı ile ekran arasına eşit mesafede konulan futbol topu ve tenis topunun gölgeleri ekranda gözlemleniyor.\n\nBuna göre;\nI. Futbol topunun gölge alanı tenis topunun gölge alanından büyüktür.\nII. Tenis topu ışık kaynağına yaklaştırılırsa gölgesi futbol topunun gölgesinden daha büyük olabilir.\nIII. Her iki cismin gölgesi de daireseldir.\n\nyargılarından hangileri doğrudur?',
          options: [
            { key: 'A', text: 'I ve II' },
            { key: 'B', text: 'I ve III' },
            { key: 'C', text: 'II ve III' },
            { key: 'D', text: 'I, II ve III' }
          ],
          correctAnswer: 'D',
          explanation: 'Aynı mesafede büyük cismin gölgesi büyüktür (I). Tenis topu kaynağa çok yaklaştırılırsa gölgesi büyüyerek futbol topunu geçebilir (II). Her iki küresel cismin gölgesi dairedir (III). Üç öncül de doğrudur.'
        }
      ],
      glossary: [
        { term: 'Tam Gölge', definition: 'Işık ışınlarının opak madde tarafından engellenmesiyle cismin arkasındaki ekranda oluşan zifiri karanlık alan.' },
        { term: 'Ekran (Perde)', definition: 'Gölgenin üzerine düştüğü düz yüzey veya duvar.' },
        { term: 'Silüet', definition: 'Işığın arkadan gelmesiyle bir cismin sadece dış hatlarıyla beliren karanlık gölge görüntüsü.' }
      ]
    }
  ],
  unitEndQuestions: [
    {
      id: 1,
      pageNumber: '44',
      type: 'multiple_choice',
      title: 'Işığın Yayılması',
      questionPrompt: 'Bir odadaki lambadan veya el fenerinden çıkan ışık nasıl bir yol izleyerek yayılır?',
      options: [
        { key: 'A', text: 'Her yöne ve dalgalı olarak' },
        { key: 'B', text: 'Tek bir yöne ve dairesel olarak' },
        { key: 'C', text: 'Her yöne ve doğrusal olarak' },
        { key: 'D', text: 'Sadece aşağıya doğru kıvrılarak' }
      ],
      correctAnswer: 'C',
      detailedExplanation: 'Işık, kaynağından çıktıktan sonra saydam ortamlarda her yöne ve doğrusal (düz çizgiler hâlinde) yayılır.'
    },
    {
      id: 2,
      pageNumber: '44',
      type: 'multiple_choice',
      title: 'Maddenin Işık Geçirgenliği',
      questionPrompt: 'Aşağıdaki maddelerden hangisi ışığın bir kısmını geçirip arkasındaki cisimleri bulanık gösteren yarı saydam bir maddedir?',
      options: [
        { key: 'A', text: 'Pencere camı' },
        { key: 'B', text: 'Yağlı kâğıt' },
        { key: 'C', text: 'Tahta kapı' },
        { key: 'D', text: 'Alüminyum folyo' }
      ],
      correctAnswer: 'B',
      detailedExplanation: 'Yağlı kâğıt ve buzlu cam yarı saydam maddelerdir; ışığın bir kısmını geçirdiği için görüntü net değil, bulanıktır.'
    },
    {
      id: 3,
      pageNumber: '46',
      type: 'multiple_choice',
      title: 'Çadır Pencereleri ve Gölgelik',
      questionPrompt: 'Bir çadır firması dışarıyı net gösteren pencereler ve güneş ışığını hiç geçirmeyen gölgelikler tasarlamak istiyor. Buna göre sırasıyla hangi malzeme türleri seçilmelidir?',
      options: [
        { key: 'A', text: 'Saydam - Opak' },
        { key: 'B', text: 'Yarı saydam - Saydam' },
        { key: 'C', text: 'Opak - Yarı saydam' },
        { key: 'D', text: 'Saydam - Yarı saydam' }
      ],
      correctAnswer: 'A',
      detailedExplanation: 'Dışarının net görünmesi saydam malzeme ile, güneşin tamamen engellenip koyu gölge yapması opak malzeme ile sağlanır.'
    }
  ],
  unitEnd20Questions: [
    {
      id: 1,
      questionPrompt: 'Işığın doğrusal yayıldığını ispatlamak isteyen bir öğrenci;\nI. Kıvrık bir hortumun ucundaki muma bakmak\nII. Düz bir borunun ucundaki muma bakmak\nIII. Karanlık odada el feneri önüne opak levha koyup arkasında gölge oluşturmak\n\ndeneylerinden hangilerini kullanabilir?',
      options: [
        { key: 'A', text: 'Yalnız I' },
        { key: 'B', text: 'I ve II' },
        { key: 'C', text: 'II ve III' },
        { key: 'D', text: 'I, II ve III' }
      ],
      correctAnswer: 'D',
      explanation: 'Düz boruda alevin görünüp kıvrık boruda görünmemesi ve opak cismin arkasında gölge oluşması ışığın doğrusal yayıldığının kesin kanıtlarıdır.'
    },
    {
      id: 2,
      questionPrompt: 'Aşağıdakilerden hangisi saydam olmayan (opak) bir maddedir?',
      options: [
        { key: 'A', text: 'Su' },
        { key: 'B', text: 'Hava' },
        { key: 'C', text: 'Beton duvar' },
        { key: 'D', text: 'Gözlük camı' }
      ],
      correctAnswer: 'C',
      explanation: 'Beton duvar ışığı hiç geçirmediği için opak maddedir; su, hava ve gözlük camı ise saydamdır.'
    },
    {
      id: 3,
      questionPrompt: 'Gölge boyunu büyütmek isteyen Selin, aşağıdaki işlemlerden hangisini yapmalıdır?',
      options: [
        { key: 'A', text: 'Cismi ekrana yaklaştırmalıdır.' },
        { key: 'B', text: 'Işık kaynağını cisimden uzaklaştırmalıdır.' },
        { key: 'C', text: 'Cismi ışık kaynağına yaklaştırmalıdır.' },
        { key: 'D', text: 'Ekranı cisme yaklaştırmalıdır.' }
      ],
      correctAnswer: 'C',
      explanation: 'Cisim ışık kaynağına yaklaştırıldığında ışınların yayılma konisi genişler ve ekrandaki gölge büyür.'
    },
    {
      id: 4,
      questionPrompt: 'Fotoğraf makinesinin atası kabul edilen karanlık odayı (camera obscura) deneylerle ispatlayarak ilk kez icat eden İslam bilgini kimdir?',
      options: [
        { key: 'A', text: 'Ali Kuşçu' },
        { key: 'B', text: 'İbnülheysem' },
        { key: 'C', text: 'Harezmi' },
        { key: 'D', text: 'Biruni' }
      ],
      correctAnswer: 'B',
      explanation: 'İbnülheysem karanlık oda tekniğini ve ışığın küçük delikten geçerek ters görüntü oluşturduğunu deneysel olarak ilk ispatlayan optik bilginidir.'
    },
    {
      id: 5,
      questionPrompt: 'Saydam ve yarı saydam maddelerin kalınlığı artırıldığında ışık geçirgenliği nasıl değişir?',
      options: [
        { key: 'A', text: 'Artar' },
        { key: 'B', text: 'Azalır' },
        { key: 'C', text: 'Değişmez' },
        { key: 'D', text: 'Önce artar sonra azalır' }
      ],
      correctAnswer: 'B',
      explanation: 'Kalınlık arttıkça ışığın geçişi zorlaşır ve ışık geçirgenliği azalır (derin denizlerde tabanın görünmemesi gibi).'
    }
  ]
};

import { Unit } from '../../types/curriculum';

export const grade7Unit4Data: Unit = {
  id: 'g7-unit-4',
  unitNumber: 4,
  bookNumber: 2,
  grade: 7,
  subject: 'Fen Bilimleri',
  title: 'Işığın Kırılması ve Mercekler',
  unitEndPageRange: 's. 35-41',
  colorTheme: {
    primary: 'from-sky-500 to-indigo-600',
    border: 'border-sky-500/40',
    bg: 'bg-sky-950/40',
    accent: 'text-sky-400',
    text: 'text-sky-200'
  },
  subTopics: [
    {
      id: 'g7-u4-sub1',
      title: '1. Işığın Kırılması ve Kırılma Kanunları',
      shortTitle: 'Işığın Kırılması',
      badge: '1. Bölüm',
      pageRange: '15-22',
      concepts: ['Işığın Kırılması', 'Normal (N)', 'Gelen Işın', 'Kırılan Işın', 'Gelme Açısı', 'Kırılma Açısı', 'Ortam Yoğunluğu', 'Işık Prizması', 'Gökkuşağı'],
      simulationId: 'moon-phases',
      summarySections: [
        {
          heading: 'Işığın Kırılması Nedir ve Nasıl Gerçekleşir?',
          paragraphs: [
            'Saydam bir ortamdan diğer saydam ortama dik açıdan farklı bir açıyla gelen ışık ışınları kırılır. Işık ışınlarının saydam bir ortamdan yoğunluğu farklı başka bir saydam ortama geçerken doğrultu ve hız değiştirerek ilerlemesine ışığın kırılması denir.',
            'İçi su dolu bardağa bırakılan bir kaleme dışarıdan bakıldığında kalemin kırılmış gibi görünmesi veya Şanlıurfa Balıklıgöl’deki balıkların yüzeye gerçekte olduğundan daha yakın algılanması ışığın kırılmasıyla açıklanır. Bu durum, suyun havadan daha yoğun bir ortam olmasından kaynaklanır ve ışık ışınları göze ulaşırken doğrultu değiştirir.'
          ],
          keyPoints: [
            'Normal (N): Işının saydam yüzeye temas ettiği noktadan yüzeye dik (90°) olarak çizildiği varsayılan kesikli çizgidir.',
            'Gelen Işın: Birinci saydam ortamdan sınır yüzeyine doğru gelen ışıktır.',
            'Kırılan Işın: Yoğunluğu farklı ikinci saydam ortama geçerken hız ve doğrultu değiştiren ışıktır.',
            'Gelme Açısı: Gelen ışın ile yüzeyin normali (N) arasındaki açıdır.',
            'Kırılma Açısı: Kırılan ışın ile yüzeyin normali (N) arasındaki açıdır.'
          ],
          examNote: 'LGS Dikkat: Gelme açısı ve kırılma açısı her zaman yüzeyle değil, YÜZEY NORMALİ ile yapılan açıdır!'
        },
        {
          heading: 'Kırılma Kanunları',
          paragraphs: [
            'Işık ışınlarının farklı ortamlardan geçerken izlediği yollar evrendeki kusursuz fizik kanunlarına göre düzenlenmiştir:',
            '1. Kural: Gelen ışın, yüzeyin normali ve kırılan ışın aynı düzlemdedir.',
            '2. Kural: Işık ışınları az yoğun saydam ortamdan çok yoğun saydam ortama geçerken (örneğin havadan suya veya cama) normale yaklaşarak kırılır. Bu durumda kırılma açısı gelme açısından daha küçüktür (Gelme Açısı > Kırılma Açısı). Çok yoğun ortamda ışığın yayılma sürati azalır.',
            '3. Kural: Işık ışınları çok yoğun saydam ortamdan az yoğun saydam ortama geçerken (örneğin sudan veya camdan havaya) normalden uzaklaşarak kırılır. Bu durumda kırılma açısı gelme açısından daha büyüktür (Kırılma Açısı > Gelme Açısı). Az yoğun ortamda ışığın yayılma sürati artar.',
            '4. Kural: Bir ortamdan diğerine dik olarak (90° - normal doğrultusunda) gelen ışık ışınları doğrultu değiştirmeden, kırılmadan geçer. Ancak ortam değiştirdiği için sadece hızı değişir. Işığın hızı saydam ortamın yoğunluğu arttıkça azalır.'
          ],
          table: {
            headers: ['Geçiş Durumu', 'Işığın Hızı', 'Kırılma Yönü', 'Açı İlişkisi'],
            rows: [
              ['Az Yoğun → Çok Yoğun (Hava → Su)', 'Azalır (Yavaşlar)', 'Normale yaklaşır', 'Gelme Açısı > Kırılma Açısı'],
              ['Çok Yoğun → Az Yoğun (Su → Hava)', 'Artar (Hızlanır)', 'Normalden uzaklaşır', 'Kırılma Açısı > Gelme Açısı'],
              ['Yüzeye Dik Gelen (90°)', 'Ortam yoğunluğuna göre değişir', 'Kırılmaz (Doğrultu değişmez)', 'Gelme açısı = 0°, Kırılma açısı = 0°']
            ]
          },
          examNote: 'LGS Kuralı: Dalgıç havaya baktığında balıkçıyı olduğundan daha uzakta görür. Balıkçı ise suyun içindeki balığı olduğundan daha yakında görür!'
        },
        {
          heading: 'Beyaz Işığın Prizmada Kırılması ve Renklerine Ayrılması',
          paragraphs: [
            'Beyaz ışık olarak adlandırılan güneş ışığı, bünyesinde tüm renkleri barındıran harika bir nizamla var edilmiştir. Üçgen cam prizmaya gönderilen beyaz ışık, prizmaya girerken ve çıkarken iki defa kırılarak sırasıyla kırmızı, turuncu, sarı, yeşil, mavi, lacivert ve mor renklere ayrılır.',
            'Yağmurdan sonra gökyüzünde beliren gökkuşağı, havadaki su damlacıklarının minik prizmalar gibi davranarak güneş ışığını kırması ve yansıtmasıyla ortaya çıkan büyüleyici bir doğa olayıdır. Sabun köpüklerindeki parıltılı renkler de ışığın kırılması ve yansıması sonucu oluşur.'
          ],
          keyPoints: [
            'En az kırılan renk: Kırmızı (dalga boyu en büyük, kırılma az).',
            'En çok kırılan renk: Mor (dalga boyu en küçük, en fazla sapan renk).',
            'Renk sıralaması (KUTUSAYAMAM): Kırmızı - Turuncu - Sarı - Yeşil - Mavi - Lacivert - Mor.'
          ]
        },
        {
          heading: 'Tarihe Not Düşenler: Mîrim Çelebi (?-1525)',
          paragraphs: [
            'Osmanlı bilim dünyasının büyük dehalarından olan Mîrim Çelebi (Mahmud), Ali Kuşçu ve Kadızâde-i Rûmî’nin torunudur. Matematik ve astronomi yanında optik alanında yazdığı eserle görme olayını, ışığın yayılmasını, kırılmasını, renkleri, gökkuşağı ve halenin oluşumunu bilimsel olarak incelemiştir.'
          ]
        }
      ],
      trueFalseQuestions: [
        {
          id: 1,
          text: 'Işık ışınları az yoğun saydam ortamdan çok yoğun saydam ortama geçerken yüzey normaline yaklaşarak kırılır.',
          isCorrect: true,
          explanation: 'Doğrudur. Az yoğun ortamdan çok yoğun ortama geçen ışık hızı azaldığı için normale yaklaşarak kırılır ve kırılma açısı küçülür.'
        },
        {
          id: 2,
          text: 'Saydam bir ortamdan başka bir saydam ortama dik (90°) olarak gönderilen ışık ışını kırılarak doğrultu değiştirir.',
          isCorrect: false,
          explanation: 'Yanlıştır. Yüzeye dik gelen ışık doğrultu değiştirmeden kırılmadan geçer; yalnızca ortamın yoğunluğuna bağlı olarak hızı değişir.'
        },
        {
          id: 3,
          text: 'Işığın ortamdaki yayılma hızı, saydam ortamın yoğunluğu arttıkça artar.',
          isCorrect: false,
          explanation: 'Yanlıştır. Saydam ortamın yoğunluğu arttıkça ışığın yayılma hızı azalır (Işık en hızlı boşlukta ve havada yayılır).'
        },
        {
          id: 4,
          text: 'Cam prizmaya gönderilen beyaz ışıkta en çok kırılan renk kırmızı, en az kırılan renk ise mordur.',
          isCorrect: false,
          explanation: 'Yanlıştır. Prizmada en az kırılan kırmızı, en çok kırılan ise mor renktir.'
        },
        {
          id: 5,
          text: 'Su dolu havuzun kenarından bakan bir gözlemci, havuzun tabanındaki madeni parayı gerçekte olduğundan daha yakında görür.',
          isCorrect: true,
          explanation: 'Doğrudur. Az yoğun ortamdan (hava) çok yoğun ortama (su) bakıldığında cisimler göze gelen ışınların kırılması sebebiyle daha yakında algılanır.'
        }
      ],
      lgsQuestions: [
        {
          id: 1,
          questionPrompt: 'Sudaki bir balığı gözlemleyen bir öğrenci, gerçekte K noktasında bulunan balığı yüzeye daha yakın olan L noktasında görmektedir.\n\nBuna göre öğrencinin bu gözlemiyle ilgili;\nI. Işık ışınları çok yoğun ortamdan az yoğun ortama geçerken kırılmıştır.\nII. Sudan havaya geçen ışınlar yüzey normalinden uzaklaşarak kırılır.\nIII. Balıktan gelen ışınların kırılma açısı, sudaki gelme açısından büyüktür.\n\nyargılarından hangileri doğrudur?',
          options: [
            { key: 'A', text: 'Yalnız I' },
            { key: 'B', text: 'I ve II' },
            { key: 'C', text: 'II ve III' },
            { key: 'D', text: 'I, II ve III' }
          ],
          correctAnswer: 'D',
          explanation: 'Balıktan çıkan ışık ışınları sudan (çok yoğun) havaya (az yoğun) geçerken normalden uzaklaşarak kırılır. Bu nedenle kırılma açısı gelme açısından büyüktür ve göz kırılan ışınların uzantısında balığı L noktasında (daha yakında) görür. Her üç ifade de doğrudur.'
        },
        {
          id: 2,
          questionPrompt: 'Işık ışınının K, L ve M saydam ortamlarındaki geçişinde izlediği yol incelendiğinde; K ortamından L ortamına geçerken normale yaklaştığı, L ortamından M ortamına geçerken ise normale daha da yaklaştığı görülmektedir.\n\nBuna göre K, L ve M ortamlarının yoğunlukları ile ışığın bu ortamlardaki süratleri arasındaki ilişki hangi seçenekte doğru verilmiştir?',
          options: [
            { key: 'A', text: 'Yoğunluk: M > L > K ; Sürat: K > L > M' },
            { key: 'B', text: 'Yoğunluk: K > L > M ; Sürat: M > L > K' },
            { key: 'C', text: 'Yoğunluk: M > K > L ; Sürat: L > K > M' },
            { key: 'D', text: 'Yoğunluk: L > M > K ; Sürat: K > M > L' }
          ],
          correctAnswer: 'A',
          explanation: 'Işık bir ortamdan diğerine geçerken normale yaklaşıyorsa az yoğundan çok yoğuna geçiyordur. K\'den L\'ye geçerken normale yaklaştığı için dL > dK\'dir. L\'den M\'ye geçerken de normale yaklaştığı için dM > dL\'dir. Dolayısıyla yoğunluk sıralaması M > L > K olur. Işığın sürati ise yoğunlukla ters orantılı olduğundan K > L > M\'dir.'
        }
      ]
    },
    {
      id: 'g7-u4-sub2',
      title: '2. Mercekler ve Kullanım Alanları',
      shortTitle: 'Mercekler ve Optik',
      badge: '2. Bölüm',
      pageRange: '23-34',
      concepts: ['Mercek', 'İnce Kenarlı (Yakınsak) Mercek', 'Kalın Kenarlı (Iraksak) Mercek', 'Asal Eksen', 'Optik Merkez (O)', 'Odak Noktası (F)', 'Odak Uzaklığı', 'OPMER'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Mercek Nedir? Mercek Çeşitleri ve Özellikleri',
          paragraphs: [
            'En az bir yüzeyi küresel olan, cam veya sert plastikten yapılan saydam cisimlere mercek denir. Işınları kırarak toplama ya da dağıtma ilkesiyle üretilen mercekler cisimlerin görüntülerini büyütmek ya da küçültmek amacıyla kullanılır.',
            'Merceğin yatay doğrultuda merkezinden geçtiği kabul edilen çizgiye asal eksen adı verilir. Asal eksen üzerinde ve merceğin tam ortasında bulunduğu varsayılan nokta optik merkez (O) olarak adlandırılır. Optik merkeze gelen ışınlar kırılmadan dosdoğru geçer.'
          ],
          keyPoints: [
            'İnce Kenarlı (Yakınsak) Mercek: Ortası kalın, kenarları ince olan mercektir. Işık ışınlarını bir noktada toplayıcı özelliği vardır. Çift taraflı ok (⟷) ile gösterilir.',
            'Odak Noktası (F): İnce kenarlı mercekte asal eksene paralel gelen ışınların kırılarak toplandığı noktadır.',
            'Kalın Kenarlı (Iraksak) Mercek: Kenarları kalın, ortası ince olan mercektir. Işık ışınlarını dağıtıcı özelliği vardır. Uçları içe dönük ok (>-<) ile gösterilir.',
            'Kalın kenarlı mercekte paralel gelen ışınlar dağılır; kırılan ışınların uzantıları asal eksendeki odak noktasında (F) kesişir.'
          ]
        },
        {
          heading: 'Merceklerin Görüntü Özellikleri ve Günlük Hayattaki Kullanımı',
          paragraphs: [
            'İnce kenarlı merceklerde cisim odak ile mercek arasındaysa düz ve devasa büyük görüntü oluşur. Bu nedenle büyüteçlerde, mikroskoplarda ve yakını göremeyen hipermetrop göz kusurunun düzeltilmesinde ince kenarlı mercek kullanılır.',
            'Kalın kenarlı mercekler ise cisimleri daima düz ve olduğundan daha küçük gösterir; daha geniş bir görüş alanı sağlar. Bu sebeple dış kapı dürbünlerinde ve uzağı göremeyen miyop göz kusurunun tedavisinde kalın kenarlı mercek kullanılır.'
          ],
          table: {
            headers: ['Özellik', 'İnce Kenarlı (Yakınsak) Mercek', 'Kalın Kenarlı (Iraksak) Mercek'],
            rows: [
              ['Şekil Yapısı', 'Ortası şişkin, kenarları ince', 'Kenarları kalın, ortası çukur/ince'],
              ['Işığa Etkisi', 'Işığı bir noktada toplar', 'Işığı etrafa dağıtır'],
              ['Görüntü', 'Düz-büyük veya ters görüntü', 'Daima düz ve cisimden küçük'],
              ['Göz Kusuru', 'Hipermetropluk (Yakını görememe)', 'Miyopluk (Uzağı görememe)'],
              ['Araçlar', 'Büyüteç, mikroskop, teleskop, fotoğraf makinesi', 'Kapı dürbünü, el feneri, geniş açılı mercekler']
            ]
          },
          examNote: 'Orman Yangınları Uyarısı: Doğaya gelişigüzel atılan cam kırıkları, şişe dipleri ve su dolu pet şişeler ince kenarlı mercek gibi davranarak güneş ışığını kuru otlar üzerinde odaklar ve orman yangınlarına yol açar!'
        },
        {
          heading: 'Millî Teknoloji: TÜBİTAK UZAY OPMER',
          paragraphs: [
            'TÜBİTAK UZAY bünyesinde kurulan Optik Sistemler Araştırma Laboratuvarı (OPMER); başta keşif ve yer gözlem uyduları olmak üzere savunma sanayimizin ihtiyaç duyduğu yüksek hassasiyetli büyük çaplı optik mercek ve aynaları yerli ve millî imkânlarla üretmektedir.'
          ]
        },
        {
          heading: 'Optik Tarihinde İz Bırakan Bilim İnsanları',
          paragraphs: [
            'Optik biliminin gelişmesinde Doğu ve Batı medeniyetlerinden önemli bilim insanları çığır açan keşiflerde bulunmuştur:'
          ],
          keyPoints: [
            'İbn Sehl (X. Yüzyıl): Mercekler ve ışığın kırılması üzerine çalışmalar yapmış, mercek çizimleriyle kırılmanın ortam yoğunluğuna bağlı olduğunu ilk keşfedenlerdendir.',
            'İbnü’l-Heysem (965-1039): Modern optiğin babasıdır. Kitâbü’l-Menâzır eseriyle ışığın gözden değil nesnelerden göze geldiğini deneysel yöntemlerle ispatlamıştır.',
            'Kemâleddîn el-Fârisî (1267-1319): Gökkuşağı ve halenin küre su damlacıklarında ışığın çift kırılması ve yansımasıyla oluştuğunu açıklamıştır.',
            'Thomas Young (1773-1829): Işığın dalga boyu ve dalga teorisini ortaya koymuş, gözdeki kırılma kusurlarını incelemiştir.'
          ]
        }
      ],
      trueFalseQuestions: [
        {
          id: 6,
          text: 'Kalın kenarlı merceğin asal eksenine paralel gelen ışık ışınları kırılarak bir noktada toplanır.',
          isCorrect: false,
          explanation: 'Yanlıştır. Kalın kenarlı mercek ışığı dağıtır; ışınların kendisi değil uzantıları odak noktasında kesişir.'
        },
        {
          id: 7,
          text: 'Ormanlara atılan içi su dolu pet şişeler ince kenarlı mercek etkisi göstererek yangınlara neden olabilir.',
          isCorrect: true,
          explanation: 'Doğrudur. Su dolu pet şişeler ve cam tabanları güneş ışığını bir noktada odaklayarak kuru otları tutuşturabilir.'
        },
        {
          id: 8,
          text: 'Dış kapı dürbünlerinde daha geniş bir alanı gösterebilmek için kalın kenarlı mercekler kullanılır.',
          isCorrect: true,
          explanation: 'Doğrudur. Kalın kenarlı mercekler cisimleri küçülterek daha geniş görüş alanı sağlar.'
        },
        {
          id: 9,
          text: 'Merceğin optik merkezine (O) gelen ışık ışını kırılarak asal eksene paralel gider.',
          isCorrect: false,
          explanation: 'Yanlıştır. Merceğin tam ortasındaki optik merkezden (O) geçen ışınlar hiç kırılmadan dosdoğru yoluna devam eder.'
        }
      ],
      lgsQuestions: [
        {
          id: 3,
          questionPrompt: 'Erkan ve Mert doğa yürüyüşünde ağaçtaki sincabı gözlemlemektedir. Erkan uzaktaki sincabı net görürken kitap okurken zorlandığını ve yakını büyüten M1 gözlüğünü kullandığını söyler. Mert ise uzağı net göremediğini belirterek doktorun verdiği M2 gözlüğünü takınca çevreyi netleştirdiğini ifade eder.\n\nBuna göre M1 ve M2 gözlüklerinde kullanılan merceklerle ilgili hangisi DOĞRUDUR?',
          options: [
            { key: 'A', text: 'M1 ince kenarlı mercektir ve ışığı bir noktada toplar.' },
            { key: 'B', text: 'M2 kalın kenarlı mercektir ve cisimleri büyütmek için kullanılır.' },
            { key: 'C', text: 'M1 kalın kenarlı mercektir ve orman yangını riski oluşturmaz.' },
            { key: 'D', text: 'M2 ince kenarlı mercektir ve asal eksene paralel ışığı odakta toplar.' }
          ],
          correctAnswer: 'A',
          explanation: 'Erkan yakını göremediği (hipermetrop) için ince kenarlı mercek (M1) kullanır; bu mercek ışığı toplar ve görüntüyü büyütür. Mert ise uzağı göremediği (miyop) için kalın kenarlı mercek (M2) kullanır.'
        },
        {
          id: 4,
          questionPrompt: 'Kapalı bir optik kutuya gönderilen paralel iki ışık demetinin kutudan çıktıktan sonra birbirine yaklaşıp tek bir F noktasında kesiştiği gözleniyor.\n\nBuna göre kutu içerisindeki düzenekle ilgili;\nI. Kutu içerisinde ince kenarlı mercek bulunmaktadır.\nII. F noktası merceğin odak noktasıdır.\nIII. Bu optik eleman büyüteç ve mikroskoplarda da kullanılır.\n\nyargılarından hangileri doğrudur?',
          options: [
            { key: 'A', text: 'Yalnız I' },
            { key: 'B', text: 'I ve II' },
            { key: 'C', text: 'II ve III' },
            { key: 'D', text: 'I, II ve III' }
          ],
          correctAnswer: 'D',
          explanation: 'Paralel gelen ışığı kırarak bir noktada (odak noktası F) toplayan mercek ince kenarlı (yakınsak) mercektir. Büyüteç ve mikroskop gibi araçlarda da kullanılır. Tüm öncüller doğrudur.'
        }
      ]
    }
  ],
  unitEndQuestions: [
    {
      id: 1,
      pageNumber: '35',
      type: 'multiple_choice',
      title: 'Işığın Kırılması Tanımı',
      questionPrompt: 'Işık ışınlarının havadan suya geçerken doğrultu ve hız değiştirerek ilerlemesi ne olarak adlandırılır?',
      options: [
        { key: 'A', text: 'Işığın soğurulması' },
        { key: 'B', text: 'Işığın yansıması' },
        { key: 'C', text: 'Işığın kırılması' },
        { key: 'D', text: 'Işığın yayılması' }
      ],
      correctAnswer: 'C',
      detailedExplanation: 'Işığın bir saydam ortamdan yoğunluğu farklı başka bir saydam ortama geçerken hız ve doğrultu değiştirmesine ışığın kırılması denir.'
    },
    {
      id: 2,
      pageNumber: '35',
      type: 'multiple_choice',
      title: 'Gelme Açısı',
      questionPrompt: 'Gelen ışın ile yüzey normali arasındaki açıya ne ad verilir?',
      options: [
        { key: 'A', text: 'Yansıma açısı' },
        { key: 'B', text: 'Kırılma açısı' },
        { key: 'C', text: 'Gelme açısı' },
        { key: 'D', text: 'Sapma açısı' }
      ],
      correctAnswer: 'C',
      detailedExplanation: 'Gelen ışının yüzey normali ile yaptığı açı gelme açısıdır.'
    },
    {
      id: 3,
      pageNumber: '36',
      type: 'multiple_choice',
      title: 'Mercek Kullanım Alanı',
      questionPrompt: 'Aşağıdaki araçlardan hangisinde kalın kenarlı mercek kullanılarak geniş alan görüşü sağlanır?',
      options: [
        { key: 'A', text: 'Büyüteç' },
        { key: 'B', text: 'Dış kapı dürbünü' },
        { key: 'C', text: 'Mikroskop' },
        { key: 'D', text: 'Projeksiyon cihazı' }
      ],
      correctAnswer: 'B',
      detailedExplanation: 'Dış kapı dürbünlerinde cisimleri küçülterek geniş açılı görüş sağlayan kalın kenarlı mercekler kullanılır.'
    }
  ],
  unitEnd20Questions: [
    {
      id: 1,
      questionPrompt: 'Bir ışık ışını az yoğun ortamdan çok yoğun ortama geçerken;\nI. Hızı azalır.\nII. Yüzey normaline yaklaşarak kırılır.\nIII. Kırılma açısı gelme açısından küçük olur.\n\nİfadelerinden hangileri gerçekleşir?',
      options: [
        { key: 'A', text: 'Yalnız I' },
        { key: 'B', text: 'I ve II' },
        { key: 'C', text: 'II ve III' },
        { key: 'D', text: 'I, II ve III' }
      ],
      correctAnswer: 'D',
      explanation: 'Az yoğundan çok yoğuna geçen ışın yavaşlar, normale yaklaşır ve kırılma açısı gelme açısından küçük olur.'
    },
    {
      id: 2,
      questionPrompt: 'Orman yangınlarına neden olabilecek kırık cam parçaları güneş ışınlarına karşı hangi optik eleman gibi davranır?',
      options: [
        { key: 'A', text: 'Kalın kenarlı mercek' },
        { key: 'B', text: 'İnce kenarlı mercek' },
        { key: 'C', text: 'Düzlem ayna' },
        { key: 'D', text: 'Tümsek ayna' }
      ],
      correctAnswer: 'B',
      explanation: 'Cam kırıkları ve içi su dolu pet şişeler ince kenarlı mercek görevi görerek ışığı odaklar ve yangına sebep olur.'
    },
    {
      id: 3,
      questionPrompt: 'Modern optiğin kurucusu sayılan ve Kitâbü’l-Menâzır adlı eseriyle bilinen İslam bilgini kimdir?',
      options: [
        { key: 'A', text: 'Ali Kuşçu' },
        { key: 'B', text: 'İbnü’l-Heysem' },
        { key: 'C', text: 'Birûni' },
        { key: 'D', text: 'Harezmi' }
      ],
      correctAnswer: 'B',
      explanation: 'İbnü’l-Heysem optik tarihinin en önemli şahsiyetidir ve görme mekanizmasını deneysel yöntemle açıklamıştır.'
    },
    {
      id: 4,
      questionPrompt: 'Güneş ışığı cam prizmadan geçirildiğinde aşağıdaki renklerden hangisi en az kırılmaya uğrar?',
      options: [
        { key: 'A', text: 'Mor' },
        { key: 'B', text: 'Mavi' },
        { key: 'C', text: 'Yeşil' },
        { key: 'D', text: 'Kırmızı' }
      ],
      correctAnswer: 'D',
      explanation: 'Beyaz ışık prizmada kırıldığında en az kırılan kırmızı, en çok kırılan ise mor ışıktır.'
    },
    {
      id: 5,
      questionPrompt: 'Yüzeyin normali ile ilgili aşağıdakilerden hangisi yanlıştır?',
      options: [
        { key: 'A', text: 'Yüzeye 90 derece dik olarak çizildiği varsayılır.' },
        { key: 'B', text: 'N harfi ile gösterilir.' },
        { key: 'C', text: 'Dik gelen ışın normal üzerinden gelir ve kırılmadan geçer.' },
        { key: 'D', text: 'Yüzeyle 45 derecelik açı yapan sabit bir çizgidir.' }
      ],
      correctAnswer: 'D',
      explanation: 'Yüzey normali her zaman yüzeye dik (90°) varsayılan çizgidir.'
    }
  ]
};

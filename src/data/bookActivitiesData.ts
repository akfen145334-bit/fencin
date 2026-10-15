import { BookActivity, UnitEndQuestion } from '../types/curriculum';

export const unit1Activities: Record<string, BookActivity[]> = {
  'unit1-sub1': [
    {
      id: 'act-1-1-1',
      type: 'ogrenelim_arastiralim',
      typeLabel: 'Öğrenelim, Araştıralım',
      pageNumber: 'Sayfa 14',
      title: 'Güneş’in Boyutu ve Gökyüzündeki Görünümü',
      prompt: 'Güneş, Dünya’mızdan yaklaşık 1 milyon 300 bin kat daha büyük bir hacme sahip olmasına rağmen gökyüzüne baktığımızda neden küçük bir sarı top veya tabak büyüklüğünde görünür?',
      interactiveAnswer: 'Bilimsel İlke (Perspektif / Uzaklık Algısı): Cisimler gözlemciden uzaklaştıkça olduklarından daha küçük görünürler. Güneş devasa bir yıldız olmasına rağmen Dünya’mıza olan mesafesi yaklaşık 150 milyon kilometredir. Bu devasa mesafe nedeniyle gökyüzünde küçük bir daire şeklinde görünür.',
      examNote: '📌 LGS BİLGİ NOTU: Güneş ile Ay gökyüzünde yaklaşık aynı boyutta görünür. Bunun sebebi Ay’ın çok küçük ama Dünya’ya çok yakın (384.000 km), Güneş’in ise devasa ama çok uzak (150.000.000 km) olmasıdır.'
    },
    {
      id: 'act-1-1-2',
      type: 'dusunelim_tartisalim',
      typeLabel: 'Düşünelim, Cevaplayalım',
      pageNumber: 'Sayfa 15',
      title: 'Güneş’e Çıplak Gözle veya Dürbünle Bakmanın Tehlikeleri',
      prompt: 'Güneş gözlemi yaparken neden asla çıplak gözle, sıradan güneş gözlüğüyle, dürbün veya teleskopla doğrudan Güneş’e bakılmamalıdır? Güvenli gözlem nasıl yapılır?',
      interactiveAnswer: 'Güneş’ten yayılan yoğun morötesi (UV), kızılötesi ışınlar ve yüksek ışık enerjisi gözümüzdeki retina tabakasına odaklanarak kalıcı körlüğe yol açabilir. Dürbün veya teleskop ışığı büyüterek bir mercek gibi yakıcı hale getirir. Güvenli gözlem yalnızca onaylı özel Güneş filtreleri veya projeksiyon (görüntüyü beyaz kâğıda düşürme) yöntemiyle yapılabilir.',
      examNote: '📌 UYARI: Sıradan güneş gözlükleri veya röntgen filmleri Güneş’in zararlı ışınlarını tam olarak engellemez; gözlem için yetersizdir.'
    },
    {
      id: 'act-1-1-3',
      type: 'etkinlik',
      typeLabel: 'Etkinlik 1.1: Güneş Lekelerini Gözlemleyelim',
      pageNumber: 'Sayfa 16',
      title: 'Güneş Lekelerinin Hareketi ve Güneş’in Dönüşü',
      materials: ['Dürbün veya küçük teleskop', 'Beyaz fon kartonu / kâğıt', 'Üçayak (tripod)', 'Güneşli bir gün'],
      steps: [
        '1. Dürbünü üçayak üzerine sabitleyip Güneş’e doğru yöneltin (kesinlikle dürbünün içine bakmayın!).',
        '2. Dürbünün arkasına 30-40 cm mesafede beyaz kartonu tutun ve Güneş görüntüsünü kâğıda odaklayın.',
        '3. Kâğıt üzerinde beliren koyu renkli noktaları (Güneş lekelerini) kurşun kalemle işaretleyin.',
        '4. Aynı deneyi birkaç gün sonra tekrarlayarak lekelerin yer değiştirip değiştirmediğini kaydedin.'
      ],
      prompt: 'Kâğıt üzerine düşürülen Güneş görüntüsündeki koyu lekelerin birkaç gün arayla hep aynı yöne doğru (soldan sağa / batıdan doğuya) kaydığı gözlenmiştir. Bu durum Güneş hakkında neyi ispatlar?',
      interactiveAnswer: 'Bu gözlem, Güneş’in kendi ekseni etrafında batıdan doğuya (saat yönünün tersine) döndüğünü kesin olarak ispatlar. Lekeler Güneş yüzeyinde sabit noktalardır; Güneş döndükçe lekeler de onunla birlikte hareket eder. Bu keşfi tarihte ilk kez 1610’lu yıllarda Galileo Galilei yapmıştır.',
      examNote: '📌 LGS HAP NOT: Güneş katı değildir, gaz halindedir. Bu nedenle ekvatoru kutuplarından daha hızlı döner (Ekvator ~25 günde, kutuplar ~35 günde bir tam tur atar).'
    },
    {
      id: 'act-1-1-4',
      type: 'bilgi_istasyonu',
      typeLabel: 'Bilgi İstasyonu',
      pageNumber: 'Sayfa 17',
      title: 'Güneş Lekeleri Neden Koyu Renklidir?',
      prompt: 'Güneş lekeleri gerçekten siyah mıdır? Yüzeydeki diğer alanlara göre sıcaklık farkı nedir?',
      interactiveAnswer: 'Güneş lekeleri aslında siyah değildir; onlar da çok sıcaktır ve ışık yayar. Ancak etraflarındaki yaklaşık 6.000 °C’lik akkor yüzeye göre daha soğuk (yaklaşık 4.000 °C - 4.500 °C) oldukları için görsel kontrast nedeniyle koyu renkli görünürler.',
      examNote: '📌 MAARİF KAZANIMI: Güneş lekeleri Güneş yüzeyindeki manyetik alan yoğunlaşması sonucu sıcaklığın nispeten düşük olduğu bölgelerdir.'
    },
    {
      id: 'act-1-1-5',
      type: 'sira_sizde',
      typeLabel: 'Sıra Sizde İstasyonu',
      pageNumber: 'Sayfa 19',
      title: 'Güneş’in Katmanları ve Sıcaklık Hiyerarşisi',
      prompt: 'Güneş’in içten dışa doğru katmanlarını sıralayınız ve çekirdek sıcaklığı ile yüzey sıcaklığını karşılaştırınız.',
      interactiveAnswer: 'Güneş’in içten dışa katmanları:\n1. Çekirdek (En iç katman, enerji üretim merkezi)\n2. Işık Küre (Fotosfer - Gözümüzle gördüğümüz parlak yüzey)\n3. Renk Küre (Kromosfer)\n4. Taç Küre (Korona - En dıştaki ince plazma atmosfer)\nSıcaklık Kıyası: Çekirdek sıcaklığı yaklaşık 15.000.000 °C iken, yüzeydeki ışık küre sıcaklığı yaklaşık 6.000 °C’dir.',
      examNote: '📌 LGS KODLAMA: Katmanlar sırasıyla Ç-I-R-T (Çekirdek - Işık küre - Renk küre - Taç küre).'
    }
  ],
  'unit1-sub2': [
    {
      id: 'act-1-2-1',
      type: 'ogrenelim_arastiralim',
      typeLabel: 'Öğrenelim, Araştıralım',
      pageNumber: 'Sayfa 22',
      title: 'Ay’ın Yüzeyindeki Çukurlar (Kraterler) Nasıl Oluşmuştur?',
      prompt: 'Ay’ın yüzeyinde binlerce devasa çukur (krater) bulunurken, Ay’ın hemen yanı başındaki Dünya’mızda neden çok az krater vardır?',
      interactiveAnswer: '1. Atmosfer Farkı: Dünya kalın bir atmosfere sahiptir. Uzaydan gelen gök taşları (meteorlar) atmosfere girdiğinde sürtünme nedeniyle ısınıp alev alır ve yanarak yok olur. Ay’ın ise atmosferi yok denecek kadar incedir; gök taşları hiçbir engelle karşılaşmadan doğrudan yüzeye çarpar.\n2. Hava Olayları Farkı: Dünya’da rüzgâr, yağmur, erozyon ve volkanik hareketler eski kraterleri zamanla silip kapatır. Ay’da hava olayları ve rüzgâr olmadığı için milyarlarca yıl önceki kraterler bile ilk günkü gibi korunur.',
      examNote: '📌 LGS SORU KALIBI: "Astronot Neil Armstrong’un 1969’da Ay’a bıraktığı ayak izi neden hiç bozulmadan durmaktadır?" Cevap: Ay’da rüzgâr, yağmur ve hava olayı olmamasıdır.'
    },
    {
      id: 'act-1-2-2',
      type: 'etkinlik',
      typeLabel: 'Etkinlik 1.2: Krater Oluşumu Deneyi',
      pageNumber: 'Sayfa 24',
      title: 'Tepside Krater Modeli Oluşturalım',
      materials: ['Derin tepsi', 'Un (zemini kaplamak için)', 'Kakao tozu (üst katman)', 'Farklı büyüklükte taşlar / misketler', 'Cetvel'],
      steps: [
        '1. Tepsinin tabanına 4-5 cm un dökün ve yüzeyini düzleştirin.',
        '2. Unun üzerine ince bir tabaka kakao tozu serpin.',
        '3. Aynı büyüklükteki iki taştan birini 20 cm’den, diğerini 80 cm yüksekten serbest bırakın.',
        '4. Ardından farklı ağırlıktaki taşları aynı yükseklikten bırakarak oluşan çukurların çapını ve derinliğini ölçün.'
      ],
      prompt: 'Yapılan deneyde taşın bırakıldığı yükseklik ve taşın büyüklüğü arttıkça oluşan çukurun (kraterin) derinliği ve genişliği nasıl değişmiştir?',
      interactiveAnswer: 'Yükseklik ve kütle arttıkça taşın sahip olduğu kinetik enerji artar. Bu nedenle daha yüksekten veya daha ağır taşlar bırakıldığında daha geniş ve daha derin kraterler oluşur. Kakao tabakasının altındaki beyaz unun çevreye ışınsal olarak saçılması, Ay kraterlerinin etrafındaki açık renkli çizgileri (krater ışınlarını) modeller.',
      examNote: '📌 BAĞIMSIZ DEĞİŞKEN ANALİZİ: Bırakılan yükseklik = Bağımsız değişken, Krater derinliği = Bağımlı değişken, Taşın cinsi/un miktarı = Kontrol edilen değişken.'
    },
    {
      id: 'act-1-2-3',
      type: 'bilgi_istasyonu',
      typeLabel: 'Bilgi İstasyonu',
      pageNumber: 'Sayfa 25',
      title: 'Ay’da Yaşam Neden Mümkün Değildir?',
      prompt: 'Gelecekte Ay’da kurulacak bir uzay üssünde insanların yaşaması için hangi zorlukların yapay olarak çözülmesi gerekir?',
      interactiveAnswer: 'Ay’da:\n1. Solunacak oksijen ve atmosfer yoktur (özel oksijen tüplü uzay kıyafetleri gerekir).\n2. Sıvı halde su ve göller bulunmaz.\n3. Aşırı sıcaklık farkı vardır (Gündüz +120 °C, gece -170 °C).\n4. Güneş’in zararlı kozmik radyasyonunu filtreleyecek ozon/manyetosfer tabakası yoktur.\n5. Basınç neredeyse sıfırdır.',
      examNote: '📌 LGS BİLGİ NOTU: Ay’da yer çekimi Dünya’dakinin yaklaşık 1/6’sıdır. Ağırlık 6 kat azalır ancak astronotun kütlesi değişmez.'
    },
    {
      id: 'act-1-2-4',
      type: 'cagini_asanlar',
      typeLabel: 'Çağını Aşanlar',
      pageNumber: 'Sayfa 27',
      title: 'Ali Kuşçu (1403 - 1474)',
      prompt: 'Ali Kuşçu kimdir ve Ay araştırmalarına katkısı neden NASA tarafından tescillenmiştir?',
      interactiveAnswer: 'Ali Kuşçu, Semerkant ve İstanbul’da (Fatih Sultan Mehmet döneminde) yaşamış büyük Türk-İslam matematikçi ve gök bilimcidir. Ay’ın hareketlerini incelemiş, Dünya’ya olan mesafesini yüksek doğrulukla hesaplamış ve Ay’ın ilk ayrıntılı haritasını çizmiştir. NASA, bu bilimsel dehası onuruna Ay’daki belirgin kraterlerden birine "Ali Kuşçu" adını vermiştir.',
      examNote: '📌 KÜLTÜR VE MAARİF: Uluğ Bey ve Ali Kuşçu Osmanlı ve Türk astronomisinin en önemli zirveleridir.'
    }
  ],
  'unit1-sub3': [
    {
      id: 'act-1-3-1',
      type: 'ogrenelim_arastiralim',
      typeLabel: 'Öğrenelim, Araştıralım',
      pageNumber: 'Sayfa 30',
      title: 'Ay’ın Dünya’dan Hep Aynı Yüzünün Görülme Sebebi',
      prompt: 'Dünya’dan Ay’a teleskopla bakan bir gözlemci, yılın hangi gününde bakarsa baksın Ay’ın hep aynı yüzey şekillerini görür. Ay’ın karanlık/arka yüzünü neden Dünya’dan göremeyiz?',
      interactiveAnswer: 'Çünkü Ay’ın kendi ekseni etrafında bir tam tur dönme süresi ile Dünya etrafında bir tam tur dolanma süresi birbirine eşittir (yaklaşık 27 gün 8 saat). Ay, Dünya etrafında dönerken aynı hızla kendi etrafında da döndüğü için Dünya’ya bakan yüzü hiç değişmez.',
      examNote: '📌 LGS HAP NOT: Ay’ın 3 hareketi vardır:\n1. Kendi ekseni etrafında dönme (27,3 gün)\n2. Dünya etrafında dolanma (27,3 gün)\n3. Dünya ile birlikte Güneş etrafında dolanma (365 gün 6 saat).'
    },
    {
      id: 'act-1-3-2',
      type: 'etkinlik',
      typeLabel: 'Etkinlik 1.3: Ay’ın Evrelerini Canlandıralım',
      pageNumber: 'Sayfa 33',
      title: 'Karanlık Odada Işık Kaynağı ve Top Deneyi',
      materials: ['Kuvvetli el feneri (Güneş)', 'Bir çubuğa takılmış beyaz pinpon topu (Ay)', 'Gözlemci öğrenci (Dünya)'],
      steps: [
        '1. El fenerini odanın bir köşesine sabitleyin ve odayı tamamen karartın.',
        '2. Gözlemci öğrenci ortada dursun ve elindeki pinpon topunu baş hizasında ileri doğru tutsun.',
        '3. Öğrenci kendi etrafında saat yönünün tersine 90 derecelik açılarla dönerken topun aydınlanan kısmını gözlemlesin.'
      ],
      prompt: 'Öğrenci Güneş ile pinpon topu arasına girdiğinde (top Güneş’in tam karşısındayken) topun Dünya’dan görünen yüzü nasıldır? Hangi evredir?',
      interactiveAnswer: 'Bu konumda topun Dünya’ya bakan tüm yüzeyi Güneş ışığıyla tamamen aydınlanmış olarak görülür. Bu evre DOLUNAY ana evresidir. Top fener ile öğrencinin arasına geldiğinde ise Dünya’ya bakan yüzü karanlıkta kalır, bu da YENİ AY evresidir.',
      examNote: '📌 EVRE SIRALAMASI: Yeni Ay ➔ Hilal ➔ İlk Dördün ➔ Şişkin Ay ➔ Dolunay ➔ Şişkin Ay ➔ Son Dördün ➔ Hilal.'
    },
    {
      id: 'act-1-3-3',
      type: 'sira_sizde',
      typeLabel: 'Sıra Sizde İstasyonu',
      pageNumber: 'Sayfa 39',
      title: 'Ana ve Ara Evrelerin Özellikleri',
      prompt: 'İlk Dördün ile Son Dördün evrelerinin Dünya’dan görünüm şekillerini ve harf benzerliklerini yazınız.',
      interactiveAnswer: '• İlk Dördün: Yeni Ay’dan 1 hafta sonra görülür. Ay’ın Dünya’ya bakan yüzünün SAĞ YARISI aydınlıktır. Düz "D" harfine benzer.\n• Son Dördün: Dolunay’dan 1 hafta sonra görülür. Ay’ın Dünya’ya bakan yüzünün SOL YARISI aydınlıktır. Ters "D" harfine benzer.',
      examNote: '📌 İKİ ANA EVRE ARASI: İki ana evre arasındaki süre yaklaşık 1 HAFTA (7 gün)’dır. Evrelerin tamamlanma döngüsü ise yaklaşık 29,5 gündür (1 Ay).'
    }
  ],
  'unit1-sub4': [
    {
      id: 'act-1-4-1',
      type: 'ogrenelim_arastiralim',
      typeLabel: 'Öğrenelim, Araştıralım',
      pageNumber: 'Sayfa 42',
      title: 'Güneş ve Ay Tutulmaları Neden Her Ay Gerçekleşmez?',
      prompt: 'Ay her ay Dünya’nın etrafında dönmektedir. Buna rağmen neden her Yeni Ay evresinde Güneş tutulması, her Dolunay evresinde Ay tutulması gerçekleşmez?',
      interactiveAnswer: 'Çünkü Ay’ın Dünya etrafındaki yörünge düzlemi ile Dünya’nın Güneş etrafındaki yörünge düzlemi tam çakışmaz; aralarında yaklaşık 5 derecelik bir yörünge eğikliği (açı) vardır. Bu açı nedeniyle Ay genellikle Dünya’nın gölgesinin biraz altından veya üstünden geçer. Tutulma olabilmesi için Güneş, Dünya ve Ay’ın aynı doğrultuda (kusursuz bir çizgi üzerinde) hizalanması gerekir.',
      examNote: '📌 LGS SINAV NOTU: Tutulmalar "Işığın Doğrusal Yayılması" ve "Tam Gölge Oluşumu"nun kanıtıdır.'
    },
    {
      id: 'act-1-4-2',
      type: 'etkinlik',
      typeLabel: 'Etkinlik 1.4: Tutulma Modeli Yapalım',
      pageNumber: 'Sayfa 45',
      title: 'Güneş ve Ay Tutulması Hizalama Modeli',
      materials: ['Büyük fener (Güneş)', 'Büyük küre (Dünya)', 'Küçük küre (Ay)', 'Cetvel ve zemin'],
      steps: [
        '1. Güneş - Ay - Dünya sıralamasıyla nesneleri aynı çizgi üzerine koyun.',
        '2. Feneri yakın ve Ay’ın gölgesinin Dünya üzerine düşmesini gözlemleyin (Güneş Tutulması).',
        '3. Ardından Güneş - Dünya - Ay sıralamasına getirin ve Dünya’nın gölgesinin Ay’ı tamamen örtmesini izleyin (Ay Tutulması).'
      ],
      prompt: 'Güneş tutulması ile Ay tutulmasının gözlem zamanı, gözlem alanı büyüklüğü ve göz sağlığı açısından farkları nelerdir?',
      interactiveAnswer: '• Güneş Tutulması: Gündüz gözlenir. Dünya üzerinde çok dar bir gölge şeridinde izlenebilir. Güneş filtreli gözlük olmadan asla çıplak gözle bakılmamalıdır. Yeni Ay evresinde olur.\n• Ay Tutulması: Gece gözlenir. Dünya’nın karanlık tarafındaki herkes tarafından geniş alanda izlenebilir. Çıplak gözle izlenmesinde hiçbir tehlike yoktur. Dolunay evresinde olur.',
      examNote: '📌 KARŞILAŞTIRMA TABLOSU:\n• Güneş Tutulması = GÜN - AY - DÜN (Ortada Ay var)\n• Ay Tutulması = GÜN - DÜN - AY (Ortada Dünya var).'
    }
  ]
};

export const unit1EndQuestions: UnitEndQuestion[] = [
  {
    id: 1,
    pageNumber: 'Sayfa 49',
    type: 'multiple_choice',
    title: 'Güneş’in Fiziksel Yapısı ve Enerjisi',
    questionPrompt: 'Güneş ile ilgili olarak verilen aşağıdaki ifadelerden hangisi BİLİMSEL OLARAK DOĞRUDUR?',
    options: [
      { key: 'A', text: 'Güneş katı taş ve kayalardan oluşan devasa bir gezegendir.' },
      { key: 'B', text: 'Güneş’in çekirdek sıcaklığı, yüzeyindeki ışık küre sıcaklığından çok daha fazladır.' },
      { key: 'C', text: 'Güneş kendi ekseni etrafında saat yönünde (doğudan batıya) döner.' },
      { key: 'D', text: 'Güneş Samanyolu galaksisindeki en büyük yıldızdır.' }
    ],
    correctAnswer: 'B',
    detailedExplanation: 'Güneş çekirdeğinde sıcaklık yaklaşık 15 milyon °C iken, yüzeyinde yaklaşık 6.000 °C’dir. Güneş katı değil gaz yapılıdır ve kendi ekseni etrafında batıdan doğuya (saat yönünün tersi) döner. En büyük yıldız değil, orta büyüklükte bir yıldızdır.',
    skillTag: 'Kavram Bilgisi'
  },
  {
    id: 2,
    pageNumber: 'Sayfa 50',
    type: 'multiple_choice',
    title: 'Ay’da Yaşam ve Atmosfer Koşulları',
    questionPrompt: 'Ay’a ayak basan astronotların ayak izlerinin on binlerce yıl boyunca hiç bozulmadan kalabilecek olmasının temel gerekçesi nedir?',
    options: [
      { key: 'A', text: 'Ay toprağının taşlaşmış çimentodan oluşması' },
      { key: 'B', text: 'Ay’da atmosferin yok denecek kadar ince olması sebebiyle rüzgâr, yağmur gibi hava olaylarının gerçekleşmemesi' },
      { key: 'C', text: 'Ay’daki yer çekiminin Dünya’dan 6 kat fazla olması' },
      { key: 'D', text: 'Ay’ın Güneş ışığını hiç almaması' }
    ],
    correctAnswer: 'B',
    detailedExplanation: 'Ay’da atmosfer bulunmadığından hava hareketleri (rüzgâr, yağış, erozyon) yoktur. Yüzeydeki toz tabakasını uçuracak bir hava akımı olmadığı için izler bozulmaz.',
    skillTag: 'Bilimsel Çıkarım'
  },
  {
    id: 3,
    pageNumber: 'Sayfa 51',
    type: 'multiple_choice',
    title: 'Ay’ın Evreleri ve Zamanlama Hesabı',
    questionPrompt: 'Gökyüzünde Ay’ı "İlk Dördün" ana evresinde gözlemleyen bir öğrenci, yaklaşık 2 hafta (14 gün) sonra Ay’ı hangi ana evrede gözlemleyecektir?',
    options: [
      { key: 'A', text: 'Yeni Ay' },
      { key: 'B', text: 'Dolunay' },
      { key: 'C', text: 'Son Dördün' },
      { key: 'D', text: 'Hilal' }
    ],
    correctAnswer: 'C',
    detailedExplanation: 'Ana evreler arasındaki süre 1 haftadır (7 gün). İlk Dördün’den 1 hafta sonra Dolunay, 2 hafta (14 gün) sonra ise SON DÖRDÜN evresi gözlemlenir.',
    skillTag: 'Mantık Muhakeme'
  },
  {
    id: 4,
    pageNumber: 'Sayfa 52',
    type: 'multiple_choice',
    title: 'Tutulmalar ve Işık Doğrusallığı',
    questionPrompt: 'Güneş tutulması olayı ile ilgili olarak aşağıda verilen bilgilerden hangisi YANLIŞTIR?',
    options: [
      { key: 'A', text: 'Güneş, Ay ve Dünya aynı doğrultuda dizildiğinde gerçekleşir.' },
      { key: 'B', text: 'Ay, Dünya ile Güneş’in arasına girer ve Yeni Ay evresindedir.' },
      { key: 'C', text: 'Dünya’nın geceyi yaşayan tüm bölgelerinden saatlerce çıplak gözle rahatça izlenebilir.' },
      { key: 'D', text: 'Işığın doğrusal yayıldığının ve tam gölge oluşumunun somut bir kanıtıdır.' }
    ],
    correctAnswer: 'C',
    detailedExplanation: 'Güneş tutulması gece değil GÜNDÜZ gerçekleşir ve Dünya üzerinde sadece dar bir gölge şeridinden birkaç dakika izlenebilir. Güneş filtreli koruyucu gözlük şarttır.',
    skillTag: 'Kavram Analizi'
  },
  {
    id: 5,
    pageNumber: 'Sayfa 54',
    type: 'open_ended',
    title: 'Açık Uçlu Soru: Krater Sayıları Karşılaştırması',
    questionPrompt: 'Dünya ile Ay uzayda yan yana hareket eden iki gök cismi olmasına rağmen, Ay yüzeyinde sayısız krater varken Dünya yüzeyinde krater sayısı neden son derece azdır? İki temel nedeni açıklayınız.',
    correctAnswer: '1. Neden: Dünya’nın kalın ve koruyucu bir atmosferi vardır. Gök taşları atmosfere girdiğinde sürtünmeyle yanarak parçalanır ve yüzeye ulaşamaz. Ay’ın ise atmosferi yoktur.\n2. Neden: Dünya’da yağmur, rüzgâr, akarsu ve bitki örtüsü gibi aşındırıcı ve yapıcı doğa olayları milyonlarca yılda oluşan eski kraterleri siler veya doldurur. Ay’da hava olayları olmadığı için kraterler aynen kalır.',
    detailedExplanation: 'MEB Maarif Modeli ders kitabının 22-26 sayfalarındaki kazanım metninde açıklandığı gibi atmosferin gök taşlarını eritme ve hava olaylarının yüzeyi yenileme etkisidir.',
    skillTag: 'Bilimsel Açıklama'
  }
];

export const unit2Activities: Record<string, BookActivity[]> = {
  'unit2-sub1': [
    {
      id: 'act-2-1-1',
      type: 'ogrenelim_arastiralim',
      typeLabel: 'Öğrenelim, Araştıralım',
      pageNumber: 'Sayfa 60',
      title: 'Kuvvet Cisimler Üzerinde Hangi Değişiklikleri Yapar?',
      prompt: 'Günlük hayatımızda kuvvet uyguladığımız nesneleri düşünelim. Bir futbol topuna vurmak, fren yapmak, oyun hamurunu sıkmak veya yayı çekmek kuvvetin hangi farklı etkilerine örnektir?',
      interactiveAnswer: 'Kuvvet cisimler üzerinde:\n1. Hızlandırıcı etki (Duran topa vurmak)\n2. Yavaşlatıcı / Durdurucu etki (Frebe basmak, kalecinin topu tutması)\n3. Yön değiştirici etki (Rakete çarpan tenis topu)\n4. Şekil değiştirici etki (Oyun hamurunu sıkmak, yayı germek) yapar.',
      examNote: '📌 LGS NOTU: Kuvvet gözle doğrudan görülemez, cisimler üzerinde meydana getirdiği etkilerle anlaşılır ve dinamometre ile ölçülür (Birimi Newton / N).'
    },
    {
      id: 'act-2-1-2',
      type: 'etkinlik',
      typeLabel: 'Etkinlik 2.1: Kendi Dinamometremizi Yapalım',
      pageNumber: 'Sayfa 63',
      title: 'Pet Şişe ve Paket Lastiği ile Dinamometre',
      materials: ['Şeffaf pet şişe', 'Paket lastiği', 'Ataş (kanca yapmak için)', 'Karton şerit ve cetvel', 'Farklı ağırlıklar'],
      steps: [
        '1. Paket lastiğinin bir ucunu şişenin kapağına sabitleyin.',
        '2. Diğer ucuna ataştan yaptığınız kancayı takın.',
        '3. Şişenin kenarına milimetrik karton cetvel yapıştırın.',
        '4. Kancaya 1 N, 2 N, 3 N ağırlıklar asarak lastiğin uzama miktarlarını cetvele çizgiyle işaretleyin.'
      ],
      prompt: 'Yay veya lastiğe asılan ağırlık 2 katına çıktığında uzama miktarı nasıl değişmiştir? Ölçüm sınırının üzerine çıkılırsa ne olur?',
      interactiveAnswer: 'Asılan kuvvet arttıkça esnek cismin uzama miktarı doğru orantılı olarak artar (Kuvvet 2 katına çıkınca uzama da 2 katına çıkar). Eğer dinamometrenin taşıyabileceğinden fazla bir kuvvet uygulanırsa yayın esneklik özelliği bozulur ve cisim eski haline dönemez.',
      examNote: '📌 HASSAS ÖLÇÜM KURALI: Küçük kuvvetleri hassas ölçmek için İNCE YAY; büyük kuvvetleri güvenle ölçmek için KALIN YAY kullanılır.'
    },
    {
      id: 'act-2-1-3',
      type: 'bilgi_istasyonu',
      typeLabel: 'Bilgi İstasyonu',
      pageNumber: 'Sayfa 65',
      title: 'Isaac Newton ve Dinamometrede Bölme Hesabı',
      prompt: 'En fazla 60 N ölçebilen 10 eşit bölmeli bir dinamometrede her 1 bölme kaç Newton’a karşılık gelir? Bu dinamometreye asılan cisim yayı 4 bölme uzatıyorsa cismin ağırlığı nedir?',
      interactiveAnswer: '1 Bölmenin Değeri = Maksimum Kapasite / Toplam Bölme Sayısı = 60 N / 10 = 6 N/bölme.\n4 bölme uzadığına göre:\nÖlçülen Değer = 4 bölme × 6 N = 24 Newton.',
      examNote: '📌 HESAPLAMA FORMÜLÜ: Kuvvet = Uzayan Bölme Sayısı × 1 Bölmenin Değeri.'
    }
  ],
  'unit2-sub2': [
    {
      id: 'act-2-2-1',
      type: 'ogrenelim_arastiralim',
      typeLabel: 'Öğrenelim, Araştıralım',
      pageNumber: 'Sayfa 70',
      title: 'Kütle ile Ağırlık Arasındaki Farkı Keşfedelim',
      prompt: 'Günlük konuşmada sıkça "Kilom 50 kg" veya "Ağırlığım 50 kg" deriz. Fen bilimleri açısından bu iki ifade neden farklıdır? Ay’a giden astronotun kütlesi mi değişir, ağırlığı mı?',
      interactiveAnswer: '• Kütle: Değişmeyen madde miktarıdır. Birimi gram veya kilogramdır, eşit kollu terazi ile ölçülür. Evrenin hiçbir yerinde değişmez.\n• Ağırlık: Kütleye etki eden yer çekimi KUVVETİDİR. Birimi Newton’dır, dinamometre ile ölçülür. Gezegene ve yüksekliğe göre DEĞİŞİR.\nAy’a giden astronotun kütlesi (örneğin 60 kg) tamamen aynı kalır; ancak Ay’ın yer çekimi Dünya’nın 1/6’sı olduğu için ağırlığı 600 N’dan 100 N’a düşer.',
      examNote: '📌 LGS KLASİĞİ: "Ay’da astronotun kütlesi azalır" ifadesi KESİNLİKLE YANLIŞTIR. Kütle asla değişmez!'
    },
    {
      id: 'act-2-2-2',
      type: 'bilgi_istasyonu',
      typeLabel: 'Bilgi İstasyonu',
      pageNumber: 'Sayfa 72',
      title: 'Dünya’nın Geoit Şekli ve Kutuplarda Ağırlık',
      prompt: 'Aynı bir cismin ağırlığı kutup noktalarında neden Ekvator’a göre daha fazla ölçülür?',
      interactiveAnswer: 'Dünya kutuplardan basık, ekvatordan şişkindir (Geoit). Bu sebeple kutup noktaları Dünya’nın merkezine (çekirdeğine) Ekvator’dan yaklaşık 21 km daha yakındır. Merkeze yakın olundukça yer çekimi kuvveti artar; bu yüzden cisim kutupta daha ağır gelir.',
      examNote: '📌 SIRALAMA: Kutuptaki Ağırlık > Ekvatordaki Ağırlık. Deniz seviyesindeki ağırlık > Dağın zirvesindeki ağırlık.'
    }
  ],
  'unit2-sub3': [
    {
      id: 'act-2-3-1',
      type: 'ogrenelim_arastiralim',
      typeLabel: 'Öğrenelim, Araştıralım',
      pageNumber: 'Sayfa 78',
      title: 'Sürtünme Kuvveti Hareketi Nasıl Etkiler?',
      prompt: 'Aynı oyuncak arabayı aynı hızla fayans zeminde ve halı zeminde ittiğimizde halıda araba neden çok daha kısa mesafede durur?',
      interactiveAnswer: 'Halı zemin girintili çıkıntılı (pürüzlü) bir yapıya sahiptir. Pürüzlü yüzeylerde temas eden yüzeyler arasındaki sürtünme kuvveti çok büyüktür. Sürtünme kuvveti hareket yönüne zıt yönde etki ettiği için arabayı hızla yavaşlatıp kısa sürede durdurur. Fayans ise az pürüzlü ve kaygandır; sürtünme az olduğu için araba uzun mesafe kayar.',
      examNote: '📌 LGS NOTU: Pürüzlülük arttıkça sürtünme kuvveti artar, durma mesafesi kısalır.'
    },
    {
      id: 'act-2-3-2',
      type: 'bilgi_istasyonu',
      typeLabel: 'Bilgi İstasyonu',
      pageNumber: 'Sayfa 82',
      title: 'Fatih Sultan Mehmet’in Kütük Yağlama Dehası',
      prompt: '1453 İstanbul’un Fethi’nde Fatih Sultan Mehmet gemileri karadan yürütürken ağaç kütüklerini neden hayvansal ve zeytinyağları ile iyice yağlatmıştır?',
      interactiveAnswer: 'İki katı yüzey birbirine sürtündüğünde büyük bir sürtünme direnci oluşur. Kütüklerin yuvarlak yapısı kayma sürtünmesini yuvarlanma sürtünmesine dönüştürmüş, yağlama işlemi ise kütükler arasındaki mikroskobik pürüzleri doldurarak sürtünme kuvvetini en aza indirmiştir. Böylece tonlarca ağırlıktaki gemiler karada kolayca kaydırılmıştır.',
      examNote: '📌 MAARİF MİLLÎ DEĞERLER: Sürtünmeyi azaltmak için: Yağlama, tekerlek takma, yüzeyi pürüzsüzleştirme yapılır.'
    },
    {
      id: 'act-2-3-3',
      type: 'sira_sizde',
      typeLabel: 'Sıra Sizde İstasyonu',
      pageNumber: 'Sayfa 88',
      title: 'Hava ve Su Direnci (Akışkan Sürtünmesi)',
      prompt: 'Millî Muharip Uçağımız KAAN’ın burun kısmının sivri olması ile paraşütçülerin devasa paraşüt açması hava direnci açısından hangi zıt amaçlara hizmet eder?',
      interactiveAnswer: '• KAAN’ın sivri burunlu aerodinamik tasarımı: Hava ile temas eden yüzeyi azaltarak HAVA DİRENCİNİ EN AZA İNDİRİR, böylece uçak yüksek hızlara daha az yakıtla ulaşır.\n• Paraşütün açılması: Geniş yüzey oluşturarak HAVA DİRENCİNİ ARTIRIR, böylece sporcu yere yumuşak ve güvenli bir hızda iner.',
      examNote: '📌 LGS İPUCU: Hızlı trenler, yarış arabaları ve balıkların vücut hatları direnci AZALTMAK içindir. Paraşüt ve uçak iniş flapları direnci ARTIRMAK içindir.'
    }
  ]
};

export const unit2EndQuestions: UnitEndQuestion[] = [
  {
    id: 1,
    pageNumber: 'Sayfa 94',
    type: 'multiple_choice',
    title: 'Dinamometre Ölçüm Hassasiyeti',
    questionPrompt: 'Ağırlığı yaklaşık 3 Newton olan küçük bir anahtarlığın ağırlığını en hassas ve hatasız ölçmek isteyen bir öğrenci aşağıdaki dinamometrelerden hangisini seçmelidir?',
    options: [
      { key: 'A', text: '10 bölmeli, en fazla 10 N ölçen ince yaylı dinamometre' },
      { key: 'B', text: '10 bölmeli, en fazla 50 N ölçen dinamometre' },
      { key: 'C', text: '10 bölmeli, en fazla 100 N ölçen kalın yaylı dinamometre' },
      { key: 'D', text: '5 bölmeli, en fazla 50 N ölçen dinamometre' }
    ],
    correctAnswer: 'A',
    detailedExplanation: '10 N kapasiteli dinamometrede her bölme 1 N değerindedir. 3 N’lık cisim asıldığında ibre 3 tam bölme uzar ve çok hassas okunur. 100 N’lık dinamometrede 1 bölme 10 N olduğundan 3 N fark bile edilemez.',
    skillTag: 'Deney & Araç Seçimi'
  },
  {
    id: 2,
    pageNumber: 'Sayfa 95',
    type: 'multiple_choice',
    title: 'Kütle ve Ağırlık Değişimi',
    questionPrompt: 'Dünya’da kütlesi 42 kg ve dinamometre ile ölçülen ağırlığı 420 N olan bir keşif robotu Ay yüzeyine indirildiğinde kütlesi ve ağırlığı ne olur?',
    options: [
      { key: 'A', text: 'Kütlesi: 42 kg, Ağırlığı: 70 N' },
      { key: 'B', text: 'Kütlesi: 7 kg, Ağırlığı: 70 N' },
      { key: 'C', text: 'Kütlesi: 42 kg, Ağırlığı: 420 N' },
      { key: 'D', text: 'Kütlesi: 7 kg, Ağırlığı: 420 N' }
    ],
    correctAnswer: 'A',
    detailedExplanation: 'Kütle değişmeyen madde miktarıdır; Ay’da da 42 kg kalır. Ay’daki yer çekimi Dünya’nın 1/6’sı olduğu için ağırlık 420 / 6 = 70 N olur.',
    skillTag: 'Mantık Muhakeme'
  },
  {
    id: 3,
    pageNumber: 'Sayfa 96',
    type: 'multiple_choice',
    title: 'Sürtünmeyi Artırma ve Azaltma Örnekleri',
    questionPrompt: 'Aşağıdaki uygulamalardan hangisinin amacı diğerlerinden FARKLI bir hedefe (sürtünmeyi artırmaya veya azaltmaya) yöneliktir?',
    options: [
      { key: 'A', text: 'Kış aylarında karlı yollarda araç tekerleklerine zincir takılması' },
      { key: 'B', text: 'Haltercilerin ellerine magnezyum tozu (beyaz pudra) sürmesi' },
      { key: 'C', text: 'Bisiklet zincirlerinin ve kapı menteşelerinin düzenli yağlanması' },
      { key: 'D', text: 'Futbolcuların krampon tabanlarında çiviler bulunması' }
    ],
    correctAnswer: 'C',
    detailedExplanation: 'A, B ve D şıklarındaki uygulamalar kaymayı önlemek için sürtünmeyi ARTIRMAYA yöneliktir. C şıkkındaki yağlama ise sürtünmeyi AZALTMAYA yöneliktir.',
    skillTag: 'Kavram Sınıflandırma'
  }
];

export const unit3Activities: Record<string, BookActivity[]> = {
  'unit3-sub1': [
    {
      id: 'act-3-1-1',
      type: 'ogrenelim_arastiralim',
      typeLabel: 'Öğrenelim, Araştıralım',
      pageNumber: 'Sayfa 100',
      title: 'Mikroskobun Keşfi ve Hücre Dünyası',
      prompt: 'Gözümüzle göremediğimiz mikro alemi keşfetmemizi sağlayan mikroskobu kimler icat etmiştir? "Hücre" adını tarihte ilk kez kim vermiştir?',
      interactiveAnswer: '• 1590’lı yıllarda Hollandalı gözlük üreticileri Hans ve Zacharias Janssen ilk mikroskobu icat etmiştir.\n• 1665 yılında Robert Hooke, şişe mantarı kesitinde gördüğü boş odacıklara "küçük oda" anlamına gelen "HÜCRE (Cellula)" adını vermiştir.\n• 1670’lerde Leeuwenhoek canlı bakterileri ve tek hücrelileri mikroskop altında ilk kez gözlemlemiştir.',
      examNote: '📌 BİLİM TARİHİ: Robert Hooke ölü mantar dokusundaki boş hücre duvarlarını görmüş ve hücre adını vermiştir.'
    },
    {
      id: 'act-3-1-2',
      type: 'etkinlik',
      typeLabel: 'Etkinlik 3.1: Soğan Zarı Preparatı Hazırlama',
      pageNumber: 'Sayfa 102',
      title: 'Lam, Lamel ve Soğan Zarı Gözlemi',
      materials: ['Işık mikroskobu', 'Lam ve lamel', 'Kuru soğan zarı', 'Damlalık ve su', 'İyot çözeltisi (lügol)'],
      steps: [
        '1. Lamın ortasına bir damla su damlatın.',
        '2. Soğan katmanından pens ile incecik saydam zarı ayırıp su damlası üzerine koyun.',
        '3. Lameli 45 derecelik açıyla tutup hava kabarcığı kalmayacak şekilde yavaşça kapatın.',
        '4. Küçük büyütmeli objektiften başlayarak kaba ve ince ayar vidalarıyla görüntüyü netleştirin.'
      ],
      prompt: 'Soğan zarı hücreleri mikroskopta nasıl bir şekle sahiptir? Aralarındaki muntazam dizilim neye benzer?',
      interactiveAnswer: 'Soğan zarı hücreleri köşeli, tuğla duvar gibi birbirine bitişik ve muntazam geometrik bir yapıya sahiptir. Bunun temel sebebi bitki hücrelerinin dışında bulunan sert ve dayanıklı HÜCRE DUVARI (çeperi)’dır.',
      examNote: '📌 HAVA KABARCIĞI UYARISI: Lamel dik bırakılırsa araya hava kabarcığı kaçar ve siyah halkalı lekeler oluşturarak gözlemi bozar.'
    },
    {
      id: 'act-3-1-3',
      type: 'bilgi_istasyonu',
      typeLabel: 'Bilgi İstasyonu',
      pageNumber: 'Sayfa 105',
      title: 'Organeller: Hücre İçi Fabrika Bölümleri',
      prompt: 'Hücre içindeki organelleri bir fabrikadaki birimlerle eşleştiriniz: Enerji santrali, Besin fabrikası, Depo, Taşıma otoyolu, Paketleme.',
      interactiveAnswer: '• Mitokondri = Enerji Santrali (Besinleri yakıp ATP üretir)\n• Kloroplast = Besin & Oksijen Fabrikası (Fotosentez - sadece bitkide)\n• Koful = Depo (Su, besin ve atıkları depolar; bitkide büyük-az, hayvanda küçük-çok)\n• Endoplazmik Retikulum = Taşıma Kanalı (Hücre içi otoyol)\n• Golgi Cisimciği = Paketleme & Salgı (Ter, tükürük, süt salgılar)\n• Ribozom = Protein Üretim Bandı (Tüm hücrelerde ortak)\n• Çekirdek = Yönetim Merkezi / Genel Müdürlük',
      examNote: '📌 LGS KLASİK SORUSU: Bitki hücresinde hücre duvarı ve kloroplast vardır; sentrozom yoktur. Hayvan hücresinde hücre duvarı ve kloroplast yoktur; sentrozom vardır.'
    },
    {
      id: 'act-3-1-4',
      type: 'sira_sizde',
      typeLabel: 'Sıra Sizde İstasyonu',
      pageNumber: 'Sayfa 115',
      title: 'Hücreden Organizmaya Teşkilatlanma Sıralaması',
      prompt: 'Çok hücreli canlılardaki organizasyon basamaklarını basitten karmaşığa doğru sıralayınız ve insan vücudundan örnek veriniz.',
      interactiveAnswer: 'Sıralama: HÜCRE ➔ DOKU ➔ ORGAN ➔ SİSTEM ➔ ORGANİZMA\nİnsan Örneği:\nKas Hücresi ➔ Kas Dokusu ➔ Mide (Organ) ➔ Sindirim Sistemi ➔ İnsan (Organizma)\nBenzetme: Tuğla ➔ Duvar ➔ Oda ➔ Ev ➔ Mahalle/Şehir.',
      examNote: '📌 HİYERARŞİ KODLAMASI: H-D-O-S-O (Hücre -> Doku -> Organ -> Sistem -> Organizma).'
    }
  ],
  'unit3-sub2': [
    {
      id: 'act-3-2-1',
      type: 'ogrenelim_arastiralim',
      typeLabel: 'Öğrenelim, Araştıralım',
      pageNumber: 'Sayfa 120',
      title: 'İskeletimizin Görevleri ve Kemik Çeşitleri',
      prompt: 'İskeletimiz sadece vücudu dik tutmaya mı yarar? Kemikler şekillerine göre kaça ayrılır ve örnekleri nelerdir?',
      interactiveAnswer: 'İskeletin Görevleri: 1) Dik durmayı sağlar. 2) İç organları korur. 3) Kalsiyum depolar. 4) Kırmızı kemik iliğinde kan hücreleri üretir.\nKemik Çeşitleri:\n1. Uzun Kemikler: Boyu eninden fazladır (Uyluk, baldır, pazu, kaval, parmaklar).\n2. Kısa Kemikler: Eni ve boyu birbirine yakındır (El bilek, ayak bilek).\n3. Yassı Kemikler: Geniş levha şeklindedir (Kafatası, kaburga, leğen, kürek).',
      examNote: '📌 EN UZUN KEMİK: Vücudumuzdaki en uzun kemik bacakta bulunan uyluk kemiğidir.'
    },
    {
      id: 'act-3-2-2',
      type: 'etkinlik',
      typeLabel: 'Etkinlik 3.2: Eklem ve Kas Modeli',
      pageNumber: 'Sayfa 125',
      title: 'Kapı Menteşesi ile Eklemleri Anlayalım',
      prompt: 'Oynar, yarı oynar ve oynamaz eklemler vücudumuzun hangi bölgelerinde bulunur?',
      interactiveAnswer: '• Oynar Eklem: Kol ve bacaklarda bulunur (omuz, dirsek, kalça, diz) - Her yöne geniş hareket kabiliyeti vardır.\n• Yarı Oynar Eklem: Omurga kemikleri arasında bulunur - Hareketi sınırlıdır, kıkırdak diskler içerir.\n• Oynamaz Eklem: Kafatası kemikleri arasında bulunur - Dişli çark gibi kenetlenmiştir, hiç hareket etmez.',
      examNote: '📌 KAS ÇEŞİTLERİ:\n• Çizgili Kas = İstemli, hızlı kasılır, çabuk yorulur (Kol, bacak).\n• Düz Kas = İstemsiz, yavaş ve ritmik çalışır, yorulmaz (Mide, bağırsak).\n• Kalp Kası = Çizgili görünür ama istemsiz ve ömür boyu yorulmadan çalışır (Yalnızca kalp).'
    },
    {
      id: 'act-3-2-3',
      type: 'cagini_asanlar',
      typeLabel: 'Çağını Aşanlar',
      pageNumber: 'Sayfa 128',
      title: 'İbni Sina ve Wilhelm Röntgen',
      prompt: 'İbni Sina’nın El-Kanun Fi’t-Tıbb eserindeki kırık tedavisi ile Wilhelm Röntgen’in X ışınları keşfi ortopediye nasıl katkı sağlamıştır?',
      interactiveAnswer: 'İbni Sina, kırık kemiklerin hareketsiz sabitlenerek (atel/alçı mantığıyla) kaynaması gerektiğini açıklamıştır. Wilhelm Röntgen ise 1895’te X ışınlarını bularak kırık kemiklerin ameliyatsız filmde görüntülenmesini sağlamıştır.',
      examNote: '📌 SAĞLIK NOTU: Omurga sağlığı için yerden eşya alırken dizler bükülerek çömelmeli, tek omuzda ağır çanta taşınmamalı ve ekran başında dik oturulmalıdır.'
    }
  ]
};

export const unit3EndQuestions: UnitEndQuestion[] = [
  {
    id: 1,
    pageNumber: 'Sayfa 136',
    type: 'multiple_choice',
    title: 'Hücre Organelleri ve Enerji İhtiyacı',
    questionPrompt: 'Yoğun tempoda antrenman yapan bir maraton koşucusunun bacak iskelet kası hücrelerinde diğer hücrelere kıyasla hangi organelin sayısının çok daha fazla olması beklenir?',
    options: [
      { key: 'A', text: 'Kloroplast' },
      { key: 'B', text: 'Mitokondri' },
      { key: 'C', text: 'Sentrozom' },
      { key: 'D', text: 'Koful' }
    ],
    correctAnswer: 'B',
    detailedExplanation: 'Mitokondri hücrenin enerji santralidir. Kas hücrelerinde yoğun enerji ihtiyacı olduğundan mitokondri sayısı son derece yüksektir.',
    skillTag: 'Bilimsel Çıkarım'
  },
  {
    id: 2,
    pageNumber: 'Sayfa 137',
    type: 'multiple_choice',
    title: 'Kemik ve Eklem Çeşitleri',
    questionPrompt: 'Aşağıdaki kemik ve bulunduğu eklem çeşidi eşleştirmelerinden hangisi DOĞRUDUR?',
    options: [
      { key: 'A', text: 'Kafatası kemikleri — Oynar eklem' },
      { key: 'B', text: 'Omurga kemikleri — Yarı oynar eklem' },
      { key: 'C', text: 'Uyluk kemiği — Oynamaz eklem' },
      { key: 'D', text: 'El bilek kemikleri — Oynamaz eklem' }
    ],
    correctAnswer: 'B',
    detailedExplanation: 'Omurga kemikleri arasında kıkırdak diskli yarı oynar eklemler bulunur. Kafatası oynamaz eklem, uyluk ve el bilek ise oynar eklemdir.',
    skillTag: 'Kavram Bilgisi'
  },
  {
    id: 3,
    pageNumber: 'Sayfa 138',
    type: 'multiple_choice',
    title: 'Kas Türleri ve Çalışma Karakteristiği',
    questionPrompt: 'Mide duvarında yer alan kaslar ile bacağımızdaki iskelet kasları karşılaştırıldığında aşağıdaki ifadelerden hangisi DOĞRUDUR?',
    options: [
      { key: 'A', text: 'Mide kası istemli, bacak kası istemsiz çalışır.' },
      { key: 'B', text: 'Bacak kası çizgili kastır, hızlı kasılır ve çabuk yorulur; mide kası düz kastır, istemsiz ve yorulmadan çalışır.' },
      { key: 'C', text: 'Her iki kas da mikroskopta aynı görünüme sahiptir.' },
      { key: 'D', text: 'Mide kası kalp kası ile aynı özelliktedir.' }
    ],
    correctAnswer: 'B',
    detailedExplanation: 'İskelet kasları (bacak) istemli, hızlı ve yorulan çizgili kastır. Mide kası ise iç organda bulunan, istemsiz ve yorulmadan çalışan düz kastır.',
    skillTag: 'Mantık Muhakeme'
  }
];

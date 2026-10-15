import { LgsQuestion } from '../../../types/curriculum';

// ============================================================================
// 6. SINIF 4. ÜNİTE: IŞIĞIN YANSIMASI, AYNALAR VE RENKLER (TEST 7, 8, 9)
// ============================================================================

export const odsgmGrade6Unit4Questions: LgsQuestion[] = [
  // --- TEST 7: IŞIĞIN YANSIMASI ---
  {
    id: 64101,
    subTopicId: 'g6-u4-sub1',
    contextTitle: 'Bahçe Hortumu ile Işığın Yayılma Şekli Deneyi',
    scenario: 'Burak, plastik bahçe hortumunu büküp kıvırdığında Ceren ve Efşan’ı göremezken; hortumu tamamen düz tuttuğunda karşısındaki Selin’i net olarak görebilmektedir.',
    questionPrompt: 'Buna göre Burak’ın yaşadığı bu durumu aşağıdakilerden hangisi en iyi açıklar?',
    options: [
      { key: 'A', text: 'Işığın boşlukta yayılması' },
      { key: 'B', text: 'Işığın her yöne yayılması' },
      { key: 'C', text: 'Işığın doğrusal yolla yayılması' },
      { key: 'D', text: 'Işığın pürüzlü yüzeylerde dağınık yansıması' }
    ],
    correctAnswer: 'C',
    explanation: 'Işık homojen ortamlarda doğrusal çizgiler (ışınlar) boyunca yayılır. Hortum büküldüğünde ışık eğrileri takip edemez ve gözümüze ulaşamaz; hortum düz olduğunda ise doğrusal olarak göze ulaşır.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Işığın Yayılma Prensibi',
    theme: 'Işığın Doğrusal Yayılması'
  },
  {
    id: 64102,
    subTopicId: 'g6-u4-sub1',
    contextTitle: 'Işığın Yayılması ve Yansıması Dallanmış Ağaç',
    scenario: '"Bir kaynaktan çıkan ışığın izlediği yolu gösteren doğrulara ışın denir." (D/Y) ➔ "Bir yüzeye çarpan ışığın geldiği ortama geri dönmesine ışığın yayılması denir." (D/Y) diyagramı.',
    questionPrompt: 'İfadeler doğruysa D, yanlışsa Y yönünde ilerlenirse kaç numaralı çıkışa ulaşılır?',
    options: [
      { key: 'A', text: '1. çıkış' },
      { key: 'B', text: '2. çıkış' },
      { key: 'C', text: '3. çıkış' },
      { key: 'D', text: '4. çıkış' }
    ],
    correctAnswer: 'B',
    explanation: 'Işığın izlediği yolu gösteren doğrulara ışın denir (Doğru). Işığın yüzeye çarpıp ortama geri dönmesine "yayılma" değil "yansıma" denir (Yanlış). Dolayısıyla D ➔ Y rotası takip edilerek 2. çıkışa ulaşılır.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Dallanmış Ağaç Çözümleme',
    theme: 'Işık ve Yansıma Tanımları'
  },
  {
    id: 64103,
    subTopicId: 'g6-u4-sub1',
    contextTitle: 'Düzlem Aynada Yansıma Açısı ve Yüzey Açısı',
    scenario: 'Bir ışık ışını düzlem aynaya 40° lik gelme açısı (gelen ışın ile yüzeyin normali arasındaki açı) ile gönderilmektedir.',
    questionPrompt: 'Buna göre yansıyan ışın ile ayna yüzeyi arasındaki açı kaç derecedir?',
    options: [
      { key: 'A', text: '40°' },
      { key: 'B', text: '50°' },
      { key: 'C', text: '60°' },
      { key: 'D', text: '80°' }
    ],
    correctAnswer: 'B',
    explanation: 'Yansıma kanununa göre gelme açısı = yansıma açısıdır. Gelme açısı 40° ise yansıma açısı da 40°\'dir. Normal ayna yüzeyine 90° dik olduğundan; yansıyan ışın ile ayna arasındaki açı 90° - 40° = 50° bulunur.',
    skillTag: 'Hesaplama & Mantık',
    cognitiveLevel: 'Yansıma Kanunu Açı Bağıntıları',
    theme: 'Gelme ve Yansıma Açıları'
  },
  {
    id: 64104,
    subTopicId: 'g6-u4-sub1',
    contextTitle: 'Aydınlatma Araçlarında Işığın Yayılma Yönleri',
    scenario: 'I-Ampul (küresel her yöne), II-El feneri (ileri yönlü huni), III-Mum (her yöne), IV-Abajur (üst ve alt açıklıklardan).',
    questionPrompt: 'Verilen aydınlatma araçlarından hangilerinde ışığın yayılması doğru gösterilmiştir?',
    options: [
      { key: 'A', text: 'Yalnız I.' },
      { key: 'B', text: 'I ve IV.' },
      { key: 'C', text: 'II ve III.' },
      { key: 'D', text: 'II ve IV.' }
    ],
    correctAnswer: 'B',
    explanation: 'Ampul gibi noktasal kaynaklar ışığı her doğrultuda ve yönde yayar. Abajur ise ışığı siperlik doğrultusunda yayar. Doğru modeller I ve IV’tür.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Işık Işınlarının Yayılışı',
    theme: 'Işık Kaynakları'
  },
  {
    id: 64105,
    subTopicId: 'g6-u4-sub1',
    contextTitle: 'Işık Kavramları Bulmaca Eşleştirmesi',
    scenario: 'I. Işık yayan cisimlere ne denir? (IŞIK KAYNAĞI)\nII. Işığın izlediği yolu gösteren düz çizgilere ne denir? (IŞIN)\nIII. Işığın bir engelle karşılaşana kadar yol almasına ne denir? (YAYILMA)\nIV. Işık nasıl yayılır? (DOĞRUSAL)',
    questionPrompt: 'Yukarıdaki sorulardan hangisinin cevabına bulmacanın içinde yer verilmemiştir?',
    options: [
      { key: 'A', text: 'I.' },
      { key: 'B', text: 'II.' },
      { key: 'C', text: 'III.' },
      { key: 'D', text: 'IV.' }
    ],
    correctAnswer: 'C',
    explanation: 'Bulmacada "IŞIK KAYNAĞI", "IŞIN" ve "DOĞRUSAL" kelimeleri yer almaktadır; ancak "YAYILMA" (III. soru) cevabı bulmacada bulunmamaktadır.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Terim Bilgisi ve Bulmaca Analizi',
    theme: 'Işık Terminolojisi'
  },
  {
    id: 64106,
    subTopicId: 'g6-u4-sub1',
    contextTitle: 'Birbirine Dik Aynalarda Işığın Yansıması',
    scenario: '1 ve 2 numaralı düz aynalar birbirine 90° dik konumdadır. 1. ayna yüzeyi ile 40° açı yapacak şekilde gelen ışık ışını, yansıdıktan sonra 2. aynaya çarpmaktadır.',
    questionPrompt: 'Işın 2. ayna yüzeyinden kaç derecelik açı ile yansır?',
    options: [
      { key: 'A', text: '50°' },
      { key: 'B', text: '40°' },
      { key: 'C', text: '30°' },
      { key: 'D', text: '15°' }
    ],
    correctAnswer: 'B',
    explanation: '1. ayna ile 40° yapan ışın, yansırken de ayna yüzeyiyle 40° yapar. Aynalar dik (90°) olduğundan üçgenin iç açıları toplamından ışının 2. ayna yüzeyi ile yaptığı açı 90° - 40° = 50° olur; gelme ve yansıma açısı ise 40° olarak çıkar.',
    skillTag: 'Hesaplama & Mantık',
    cognitiveLevel: 'Geometrik Optik ve Dik Aynalar',
    theme: 'Çoklu Aynada Yansıma'
  },
  {
    id: 64107,
    subTopicId: 'g6-u4-sub1',
    contextTitle: 'Delikli Şapkadan Geçen Işığın İlerlemesi',
    scenario: 'Yanan bir ampulün üzerine üç delik açılmış metal bir şapka kapatılıyor.',
    questionPrompt: 'Buna göre ampulden çıkan ışınların deliklerden geçerek izlediği yol hangisinde doğru gösterilmiştir?',
    options: [
      { key: 'A', text: 'Deliklerden çıkan doğrusal ışın demetleri' },
      { key: 'B', text: 'Eğilip bükülen dalgalar' },
      { key: 'C', text: 'Şapka içine geri dönen ışınlar' },
      { key: 'D', text: 'Aşağıya doğru kırılan ışıklar' }
    ],
    correctAnswer: 'A',
    explanation: 'Işık deliklerden dışarıya doğrusal çizgiler (ışınlar) halinde yayılır.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Doğrusal Işın Yayılımı',
    theme: 'Işığın Yayılması'
  },
  {
    id: 64108,
    subTopicId: 'g6-u4-sub1',
    contextTitle: 'Dağınık Yansıma ve Görüntü Netliği',
    scenario: 'Pürüzlü bir yüzeye gelen paralel ışık ışınlarının farklı yönlere saçıldığı görülmektedir.',
    questionPrompt: 'Bu olayla ilgili;\nI. Dağınık yansıma olarak adlandırılır.\nII. Yüzey, buruşuk alüminyum folyo olabilir.\nIII. Bu yüzeyde net bir görüntü oluşmaz.\nifadelerinden hangileri doğrudur?',
    options: [
      { key: 'A', text: 'Yalnız I.' },
      { key: 'B', text: 'Yalnız II.' },
      { key: 'C', text: 'I ve III.' },
      { key: 'D', text: 'I, II ve III.' }
    ],
    correctAnswer: 'D',
    explanation: 'Pürüzlü yüzeylerde paralel ışınlar farklı açılarla yansır; buna dağınık yansıma denir. Buruşuk folyo, kumaş ve tahta gibi yüzeylerde dağınık yansıma olduğu için ayna gibi net görüntü oluşmaz.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Düzgün ve Dağınık Yansıma',
    theme: 'Dağınık Yansıma Özellikleri'
  },
  {
    id: 64109,
    subTopicId: 'g6-u4-sub1',
    contextTitle: '60° Yansıma Açısı Yapan Işığın Geliş Çizimi',
    scenario: 'Bir düzlem aynaya gelen ışın 60° lik yansıma açısı yaparak geri yansımıştır.',
    questionPrompt: 'Buna göre gelen ışın aşağıdakilerin hangisinde doğru verilmiştir?',
    options: [
      { key: 'A', text: 'Gelen ışının yüzeyin normali (N) ile 60° açı yaptığı çizim' },
      { key: 'B', text: 'Gelen ışının ayna ile 30° açı yaptığı ve normalle 30° gösterildiği çizim' },
      { key: 'C', text: 'Normal üzerinden dik gelen çizim' },
      { key: 'D', text: 'Normalle 45° açı yapan çizim' }
    ],
    correctAnswer: 'A',
    explanation: 'Gelme açısı gelen ışının ayna normali (N) ile yaptığı açıdır. Yansıma açısı 60° olduğuna göre gelme açısı da normalle 60° olmalıdır.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Gelme Açısı Belirleme',
    theme: 'Yansıma Kanunları'
  },
  {
    id: 64110,
    subTopicId: 'g6-u4-sub1',
    contextTitle: 'Ayna Yüzeyi ile Yapılan Açı ve Normal',
    scenario: 'Ayna yüzeyine gelen ışın ile ayna arasındaki açı 30° olarak verilmiştir. Normal ile yapılan açı "a" harfiyle gösterilmiştir.',
    questionPrompt: 'Buna göre;\nI. a açısı (gelme açısı) 60° dir.\nII. Yansıma açısı da 60° dir.\nIII. 30° lik açı gelme açısıdır.\nifadelerinden hangileri doğrudur?',
    options: [
      { key: 'A', text: 'Yalnız I.' },
      { key: 'B', text: 'Yalnız III.' },
      { key: 'C', text: 'I ve II.' },
      { key: 'D', text: 'I, II ve III.' }
    ],
    correctAnswer: 'C',
    explanation: 'Gelme açısı ayna ile değil, NORMAL ile yapılan açıdır. Ayna ile 30° yapıyorsa normal ile 90° - 30° = 60° yapar (I doğru). Gelme açısı = yansıma açısı olduğundan yansıma açısı da 60°\'dir (II doğru). 30° gelme açısı değildir (III yanlış).',
    skillTag: 'Hesaplama & Mantık',
    cognitiveLevel: 'Açı Tanımları ve Normal',
    theme: 'Optik Açı Hesapları'
  },
  {
    id: 64111,
    subTopicId: 'g6-u4-sub1',
    contextTitle: 'Yansıma Geometrisi ve Eşit Açılar',
    scenario: 'Işının yansımasında: R (gelme açısı), T (yansıma açısı), P (gelen ışın ile ayna açısı), Z (yansıyan ışın ile ayna açısı).',
    questionPrompt: 'Buna göre;\nI. R ve T açıları birbirine eşittir.\nII. P ve Z açıları birbirine eşittir.\nIII. T ve Z açılarının toplamı 90° dir.\nyargılarından hangileri doğrudur?',
    options: [
      { key: 'A', text: 'Yalnız I.' },
      { key: 'B', text: 'I ve II.' },
      { key: 'C', text: 'II ve III.' },
      { key: 'D', text: 'I, II ve III.' }
    ],
    correctAnswer: 'D',
    explanation: 'Yansıma kanununa göre gelme açısı yansıma açısına eşittir (R = T). Yüzeyle yapılan açılar da eşittir (P = Z). Normal yüzeye dik olduğundan T + Z = 90°\'dir. Tümü doğrudur.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Yansıma Geometrisi İlkeleri',
    theme: 'Yansıma Eşitlikleri'
  },
  {
    id: 64112,
    subTopicId: 'g6-u4-sub1',
    contextTitle: 'Yansıma Kanunları Doğru/Yanlış Tablosu',
    scenario: 'İfadeler:\n1. Gelen ışın, yansıyan ışın ve normal aynı düzlemdedir. (D)\n2. Düzgün yansımada gelme açısı her zaman yansıma açısına eşittir. (D)\n3. Yansıtıcı yüzeye dik gelen bir ışın yansımaya uğramadan diğer tarafa geçer. (Y - Kendi üzerinden geri yansır)\n4. Gelme açısı, gelen ışının ayna ile yaptığı açıya denir. (Y - Normalle yaptığı açıdır)',
    questionPrompt: 'Tablo doğru tamamlandığında hangi sıralama elde edilir?',
    options: [
      { key: 'A', text: 'D - D - Y - Y' },
      { key: 'B', text: 'Y - Y - D - D' },
      { key: 'C', text: 'D - Y - D - Y' },
      { key: 'D', text: 'Y - D - Y - D' }
    ],
    correctAnswer: 'A',
    explanation: '1. ve 2. ifadeler yansıma kanunlarının temel ilkeleridir (D). Yüzeye dik (normal üzerinden) gelen ışın kırılmadan değil, kendi üzerinden geri yansır (Y). Gelme açısı normalle yapılan açıdır (Y). Sıralama: D, D, Y, Y.',
    skillTag: 'Tablo Yorumlama',
    cognitiveLevel: 'Yansıma Kanunları Değerlendirmesi',
    theme: 'Yansıma Kuralları'
  },

  // --- TEST 8: AYNALAR ---
  {
    id: 64201,
    subTopicId: 'g6-u4-sub2',
    contextTitle: 'Işığı Bir Odakta Toplayan Küresel Ayna',
    scenario: 'El fenerlerinden çıkan birbirine paralel ışınlar kutu içerisindeki aynaya çarptığında bir odak noktasında toplanarak yansımıştır.',
    questionPrompt: 'Buna göre kutu içerisindeki ayna türü aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Düzlem ayna' },
      { key: 'B', text: 'Tümsek ayna' },
      { key: 'C', text: 'Çukur ayna' },
      { key: 'D', text: 'Cam levha' }
    ],
    correctAnswer: 'C',
    explanation: 'Paralel gelen ışık demetini bir noktada (odak noktasında) toplayan ayna ÇUKUR aynadır. Tümsek aynalar ışığı dağıtır, düz aynalar ise paralel geri yansıtır.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Aynaların Işığı Yansıtma Biçimleri',
    theme: 'Çukur Ayna Odaklama'
  },
  {
    id: 64202,
    subTopicId: 'g6-u4-sub2',
    contextTitle: 'Çukur Aynanın Kullanım Alanları',
    scenario: 'Şemada içe doğru kavisli bir çukur ayna gösterilmiş ve kullanım alanları listelenmiştir: 1-Araba farlarında, 2-Makyaj aynalarında, 3-Mağazaların güvenlik aynalarında, 4-Dişçi aynalarında.',
    questionPrompt: 'Buna göre çukur aynanın kullanım alanlarından hangileri doğrudur?',
    options: [
      { key: 'A', text: 'Yalnız 3.' },
      { key: 'B', text: '1 ve 3.' },
      { key: 'C', text: '1, 2 ve 4.' },
      { key: 'D', text: '1, 2, 3 ve 4.' }
    ],
    correctAnswer: 'C',
    explanation: 'Çukur ayna büyük ve düz görüntü elde etmek veya ışığı odaklamak için dişçi aynasında, makyaj aynasında ve araba farlarında kullanılır (1, 2, 4). Mağazalardaki geniş açılı güvenlik aynalarında ise tümsek ayna kullanılır.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Ayna Türü ve Kullanım Alanı Eşleştirme',
    theme: 'Çukur Aynanın Kullanım Alanları'
  },
  {
    id: 64203,
    subTopicId: 'g6-u4-sub2',
    contextTitle: 'Üç Farklı Aynada Emre’nin Görüntüleri',
    scenario: 'Emre aynaların önüne geçtiğinde:\n• I. Aynada: Kendisinden daha küçük ve düz görüntü (Tümsek ayna)\n• II. Aynada: Kendisiyle aynı boyda ve düz görüntü (Düz ayna)\n• III. Aynada: Kendisinden devasa büyük ve düz görüntü (Çukur ayna)',
    questionPrompt: 'Emre’nin kullandığı I, II ve III numaralı aynalar hangileri olabilir?',
    options: [
      { key: 'A', text: 'I: Tümsek ayna — II: Düz ayna — III: Çukur ayna' },
      { key: 'B', text: 'I: Düz ayna — II: Tümsek ayna — III: Çukur ayna' },
      { key: 'C', text: 'I: Tümsek ayna — II: Çukur ayna — III: Düz ayna' },
      { key: 'D', text: 'I: Çukur ayna — II: Düz ayna — III: Tümsek ayna' }
    ],
    correctAnswer: 'A',
    explanation: 'Tümsek ayna daima cisimden küçük ve düz görüntü verir (I). Düz ayna cisimle aynı boyda görüntü verir (II). Çukur ayna odak ile ayna arasındayken devasa büyük ve düz görüntü oluşturur (III).',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Aynalarda Görüntü Özellikleri',
    theme: 'Düz, Çukur ve Tümsek Ayna Karşılaştırması'
  },
  {
    id: 64204,
    subTopicId: 'g6-u4-sub2',
    contextTitle: 'Düz Aynada Saç Tarayan Hakan’ın Görüntüsü',
    scenario: 'Ayna karşısında saçlarını tarayan Hakan’ın görüntüsünün özellikleri incelenmektedir:\nI. Hakan’la aynı boydadır.\nII. Hakan’ın simetriğidir (sağ el sol el görünür).\nIII. Aynaya olan uzaklığı, Hakan’ın aynaya olan uzaklığına eşittir.',
    questionPrompt: 'Bu ifadelerden hangileri doğrudur?',
    options: [
      { key: 'A', text: 'Yalnız I.' },
      { key: 'B', text: 'I ve II.' },
      { key: 'C', text: 'II ve III.' },
      { key: 'D', text: 'I, II ve III.' }
    ],
    correctAnswer: 'D',
    explanation: 'Düz aynada görüntü düz, cisimle aynı boyda, simetrik ve aynaya uzaklığı cismin aynaya uzaklığına eşittir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Düz Ayna Kuralları',
    theme: 'Düz Aynada Görüntü'
  },
  {
    id: 64205,
    subTopicId: 'g6-u4-sub2',
    contextTitle: 'Ayna Çeşitleri ve Günlük Yaşam Kullanımı',
    scenario: 'Şekilde K (düzlem ayna), L (içbükey çukur ayna), M (dışbükey tümsek ayna) verilmiştir.',
    questionPrompt: 'Bu aynalar ile ilgili verilen ifadelerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'K, L ve M küresel aynalardır.' },
      { key: 'B', text: 'K, düz ayna olup spor salonlarında ve evlerde kullanılır.' },
      { key: 'C', text: 'L, tümsek aynadır ve metal kaşığın dış yüzeyine benzer.' },
      { key: 'D', text: 'M, makyaj aynalarında kullanılan çukur aynadır.' }
    ],
    correctAnswer: 'B',
    explanation: 'K düz aynadır; spor salonlarında ve boy aynalarında vücut hareketlerini net ve aynı boyda görmek için kullanılır.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Ayna Tipleri Özellikleri',
    theme: 'Ayna Türleri'
  },
  {
    id: 64206,
    subTopicId: 'g6-u4-sub2',
    contextTitle: 'Optik Araçlarda Ayna Kullanımı',
    scenario: 'Araçlar: Dürbün, Dişçi aynası, Tepegöz, Periskop.',
    questionPrompt: 'Aşağıda verilen araçlardan hangisinde ayna kullanılmamıştır?',
    options: [
      { key: 'A', text: 'Dürbün' },
      { key: 'B', text: 'Dişçi aynası' },
      { key: 'C', text: 'Tepegöz' },
      { key: 'D', text: 'Periskop' }
    ],
    correctAnswer: 'A',
    explanation: 'Dişçi aynasında çukur ayna; periskopta ve tepegözde düzlem aynalar kullanılır. Standart dürbünlerde ise ayna yerine prizmalar ve mercekler kullanılır.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Optik Araçların İç Yapısı',
    theme: 'Teknolojide Aynalar'
  },
  {
    id: 64207,
    subTopicId: 'g6-u4-sub2',
    contextTitle: 'Düz Aynada Saatin Simetrik Görüntüsü',
    scenario: 'Düz aynadaki görüntüsü 05.00\'i gösteren bir duvar saati incelenmektedir.',
    questionPrompt: 'Bu saat gerçekte kaçı göstermektedir?',
    options: [
      { key: 'A', text: '05.00' },
      { key: 'B', text: '12.25' },
      { key: 'C', text: '07.00' },
      { key: 'D', text: '12.35' }
    ],
    correctAnswer: 'C',
    explanation: 'Düz ayna dikey eksene göre simetri alır. Saat kadranında 12 ve 6 simetri eksenidir. Aynada akrebin 5 üzerinde görünmesi, gerçekte 7 üzerinde olduğunu gösterir. Dolayısıyla gerçek saat 07.00’dir.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Simetri ve Düz Ayna Geometrisi',
    theme: 'Düz Aynada Simetri'
  },
  {
    id: 64208,
    subTopicId: 'g6-u4-sub2',
    contextTitle: 'Metal Kaşığın İç ve Dış Yüzeyi Optik Özellikleri',
    scenario: 'Metal kaşığın iç yüzeyi çukur ayna, dış yüzeyi ise tümsek ayna gibi davranır.',
    questionPrompt: 'Metal kaşık ile ilgili verilen ifadelerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'İç yüzeyinde belirli mesafeden görüntü ters ve büyük oluşabilir.' },
      { key: 'B', text: 'Dış yüzeyinde görüntü daima düz ve cisimden küçüktür.' },
      { key: 'C', text: 'Dış yüzeyi, diş hekimi aynasıyla benzer özelliktedir.' },
      { key: 'D', text: 'İç yüzeyi çukur, dış yüzeyi tümsek ayna özelliğindedir.' }
    ],
    correctAnswer: 'C',
    explanation: 'Diş hekimi aynası ağız içindeki dişleri büyüterek incelemek için ÇUKUR ayna kullanır. Kaşığın dış yüzeyi ise görüntüyü küçülten TÜMSEK aynadır; dişçi aynasıyla benzer olamaz.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Küresel Ayna Modelleri',
    theme: 'Kaşık Modeli ile Aynalar'
  },
  {
    id: 64209,
    subTopicId: 'g6-u4-sub2',
    contextTitle: 'Düz Aynada Ömer’in Mesafesi ve Simetrisi',
    scenario: 'Düz aynaya olan uzaklığı 2 metre olan Ömer’in görüntüsü incelenmektedir.',
    questionPrompt: 'Buna göre;\nI. Görüntünün aynaya uzaklığı da 2 metredir.\nII. Ömer aynaya 1 metre yaklaşırsa kendisi ile görüntüsü arasındaki mesafe 2 metre olur.\nIII. Ömer’in sağ elindeki saat, görüntüsünde sol kolunda görünür.\nyorumlarından hangileri doğrudur?',
    options: [
      { key: 'A', text: 'Yalnız I.' },
      { key: 'B', text: 'I ve II.' },
      { key: 'C', text: 'II ve III.' },
      { key: 'D', text: 'I, II ve III.' }
    ],
    correctAnswer: 'D',
    explanation: 'Cismin aynaya uzaklığı görüntünün aynaya uzaklığına eşittir (2 m). 1 m yaklaşırsa aynaya 1 m, görüntü de 1 m uzakta olur; aralarındaki toplam mesafe 1 + 1 = 2 metre olur. Düz aynada sağ-sol simetrisi olduğu için sağdaki saat solda görünür. Tümü doğrudur.',
    skillTag: 'Hesaplama & Mantık',
    cognitiveLevel: 'Düz Aynada Mesafe ve Simetri',
    theme: 'Görüntü Uzaklığı ve Özellikleri'
  },
  {
    id: 64210,
    subTopicId: 'g6-u4-sub2',
    contextTitle: 'Labirentte Aynalar ile Peynir Gözlemi',
    scenario: 'Labirentin köşelerine 45° açıyla düz aynalar yerleştirilmiştir. Labirentin ortasındaki peynirden yansıyan ışınlar takip edilmektedir.',
    questionPrompt: 'Labirentin orta kısmında bulunan peyniri hangi numaralı fare görebilir?',
    options: [
      { key: 'A', text: 'Yalnız I.' },
      { key: 'B', text: 'I ve II.' },
      { key: 'C', text: 'I ve III.' },
      { key: 'D', text: 'III ve IV.' }
    ],
    correctAnswer: 'A',
    explanation: 'Periskop mantığında yerleştirilen aynalarda ışık peynirden çıkıp köşelerdeki aynalardan iki kez 90° saparak I numaralı çıkışa ulaşır; bu çıkıştaki fare peyniri görebilir.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Işık Yolu ve Periskop İlkesi',
    theme: 'Aynalarla Işığın Yönlendirilmesi'
  },
  {
    id: 64211,
    subTopicId: 'g6-u4-sub2',
    contextTitle: 'Rakamların Düz Aynadaki Simetriği',
    scenario: 'Zeynep "2025" sayısını bir kâğıda yazarak düz ayna önüne yerleştirmiştir.',
    questionPrompt: 'Bu sayının düz aynadaki görüntüsü nasıldır?',
    options: [
      { key: 'A', text: 'Rakamların aynen kaldığı görüntü' },
      { key: 'B', text: 'Sadece 2’lerin ters döndüğü görüntü' },
      { key: 'C', text: '5 rakamının başa geldiği ve rakamların tek tek simetrik ters döndüğü görüntü' },
      { key: 'D', text: 'Tamamen ters dönmüş görüntü' }
    ],
    correctAnswer: 'C',
    explanation: 'Düz aynada en yakındaki karakter (5) görüntüde en öne geçer ve her rakam sağ-sol simetriğiyle ters döner.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Simetrik Dönüşüm',
    theme: 'Yazı ve Rakamların Aynadaki Görüntüsü'
  },
  {
    id: 64212,
    subTopicId: 'g6-u4-sub2',
    contextTitle: 'Kalemin Farklı Aynalardaki Düz Görüntü Boyları Grafiği',
    scenario: 'Uzunluğu 10 cm olan bir kalemin K, L ve M aynalarında oluşan düz görüntüsünün boyları ölçülmüştür:\n• K aynasında: 10 cm\n• L aynasında: 5 cm\n• M aynasında: 15 cm',
    questionPrompt: 'Grafiğe göre;\nI. K, düz aynadır.\nII. M, tümsek aynadır.\nIII. L, geniş görüş alanı sağlayan bir arabanın yan aynası olabilir.\nifadelerinden hangileri doğrudur?',
    options: [
      { key: 'A', text: 'Yalnız I.' },
      { key: 'B', text: 'I ve III.' },
      { key: 'C', text: 'II ve III.' },
      { key: 'D', text: 'I, II ve III.' }
    ],
    correctAnswer: 'B',
    explanation: 'K aynasında görüntü boyu cisimle eşit (10 cm) olduğundan düz aynadır (I doğru). L aynasında görüntü küçülmüş (5 cm) olduğundan tümsek aynadır ve araba yan aynası olarak kullanılır (III doğru). M aynasında görüntü büyümüştür (15 cm); düz ve büyük görüntü tümsek değil ÇUKUR aynada oluşur (II yanlıştır).',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Aynalarda Görüntü Boyu Analizi',
    theme: 'Görüntü Boyu Karşılaştırması'
  },

  // --- TEST 9: IŞIĞIN SOĞURULMASI ---
  {
    id: 64301,
    subTopicId: 'g6-u4-sub3',
    contextTitle: 'Işığın Soğurulması Olayının Tespiti',
    scenario: 'Günlük yaşamda ışık maddelerle etkileşime girer.',
    questionPrompt: 'Aşağıdaki örneklerden hangisi ışığın soğurulması (emilmesi) ile ilgili değildir?',
    options: [
      { key: 'A', text: 'Güneş ocağı kullanarak yemek pişirmek' },
      { key: 'B', text: 'Yazın açık renkli elbiseler giymeyi tercih etmek' },
      { key: 'C', text: 'Yağmur sonrası gökkuşağında farklı renkler gözlemlemek' },
      { key: 'D', text: 'Sıcak Akdeniz bölgelerinde evlerin dış cephesini beyaza boyamak' }
    ],
    correctAnswer: 'C',
    explanation: 'Gökkuşağı ışığın su damlacıklarında kırılması, yansıması ve renklerine ayrılması olayıdır; soğurulma değildir. Güneş ocağı ve kıyafet rengi tercihleri ise ışığın soğurularak ısıya dönüşmesiyle doğrudan ilgilidir.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Soğurma vs Kırılma Ayrımı',
    theme: 'Işığın Soğurulması ve Günlük Yaşam'
  },
  {
    id: 64302,
    subTopicId: 'g6-u4-sub3',
    contextTitle: 'Beyaz Işığın Prizmada Kırılması ve Spektrum',
    scenario: 'Bir prizmaya beyaz ışık gönderildiğinde en az kırılan kırmızı ışık, en çok kırılan ise mor ışıktır. Prizmadan çıkan ışınlar K (en az kırılan), L (orta) ve M (en çok kırılan) olarak harflendirilmiştir.',
    questionPrompt: 'Buna göre oluşan ışık ışınları ile ilgili verilen ifadelerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'L ışını sarı ise M ışını mor olabilir.' },
      { key: 'B', text: 'K ışını yeşil ise, M ışını kırmızı olabilir.' },
      { key: 'C', text: 'En fazla M ışını kırılmaya uğramıştır.' },
      { key: 'D', text: 'K ışını turuncu ise L ışını yeşil olabilir.' }
    ],
    correctAnswer: 'B',
    explanation: 'Renklerin kırılma sırası KutuSuMaM (Kırmızı < Turuncu < Sarı < Yeşil < Mavi < Mor) şeklindedir. Kırmızı en az kırılan renktir; dolayısıyla en çok kırılan M ışınının kırmızı olması imkânsızdır!',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Işık Spektrumu ve Kırılma Derecesi',
    theme: 'Beyaz Işığın Renklerine Ayrılması'
  },
  {
    id: 64303,
    subTopicId: 'g6-u4-sub3',
    contextTitle: 'Farklı Renklerdeki Plastik Topların Güneşte Isınması',
    scenario: 'İlk sıcaklıkları ve boyutları eşit; beyaz (K), kırmızı (L) ve siyah (M) renkli plastik toplar Güneş altında eşit süre bekletilmiştir.',
    questionPrompt: 'Buna göre;\nI. En az sıcaklık artışı beyaz renkli K topunda olmuştur.\nII. Kırmızı L topundaki sıcaklık artışı, beyaz K topundan fazladır.\nIII. Topların sıcaklık artışı sıralaması K > L > M şeklindedir.\nyargılarından hangileri doğrudur?',
    options: [
      { key: 'A', text: 'Yalnız III.' },
      { key: 'B', text: 'I ve II.' },
      { key: 'C', text: 'II ve III.' },
      { key: 'D', text: 'I, II ve III.' }
    ],
    correctAnswer: 'B',
    explanation: 'Koyu renkler ışığı çok soğurur ve çok ısınır; açık renkler ise yansıtır ve az ısınır. Sıcaklık artışı M (siyah) > L (kırmızı) > K (beyaz) şeklindedir. I ve II doğrudur.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Renk ve Soğurma İlişkisi',
    theme: 'Renklerin Işığı Soğurması'
  },
  {
    id: 64304,
    subTopicId: 'g6-u4-sub3',
    contextTitle: 'Renk Değişkeni ile Işık Soğurma Deneyi Kurulumu',
    scenario: 'Bir öğrenci "Işık ışınları farklı renkteki yüzeyler tarafından farklı miktarlarda soğrulur mu?" sorusunu araştırmak için siyah bir kartona el feneri ile 10 dakika ışık tutarak sıcaklık artışını ölçmüştür.',
    questionPrompt: 'Öğrenci kontrollü deney yapabilmek için ilave olarak hangi düzeneği hazırlamalıdır?',
    options: [
      { key: 'A', text: 'İki el feneri ile kırmızı kartona 15 dk ışık tutmak' },
      { key: 'B', text: 'Tek el feneri ile koyu mavi kartona 20 dk ışık tutmak' },
      { key: 'C', text: 'Tek el feneri ile beyaz kartona 10 dk ışık tutmak' },
      { key: 'D', text: 'İki el feneri ile gri kartona 20 dk ışık tutmak' }
    ],
    correctAnswer: 'C',
    explanation: 'Kontrollü deneyde bağımsız değişken kartonun rengi olmalıdır. Işık süresi (10 dk) ve ışık kaynağı sayısı (tek fener) sabit tutulmalı, sadece renk (örneğin beyaz karton) değiştirilmelidir.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Kontrollü Deney Değişkenleri',
    theme: 'Bilimsel Deney Tasarımı'
  },
  {
    id: 64305,
    subTopicId: 'g6-u4-sub3',
    contextTitle: 'Giysilerin Güneşte Sıcaklık Artış Grafiği',
    scenario: 'Güneşte bekletilen aynı kumaştan yapılmış siyah çorap, kırmızı atkı ve beyaz eldivenin sıcaklık artışları grafikte verilmiştir: K: 10 °C, L: 20 °C, M: 30 °C.',
    questionPrompt: 'K, L ve M giysileri hangi seçenekte doğru eşleştirilmiştir?',
    options: [
      { key: 'A', text: 'K: Siyah çorap — L: Beyaz eldiven — M: Kırmızı atkı' },
      { key: 'B', text: 'K: Kırmızı atkı — L: Siyah çorap — M: Beyaz eldiven' },
      { key: 'C', text: 'K: Beyaz eldiven — L: Siyah çorap — M: Kırmızı atkı' },
      { key: 'D', text: 'K: Beyaz eldiven — L: Kırmızı atkı — M: Siyah çorap' }
    ],
    correctAnswer: 'D',
    explanation: 'Işığı en çok yansıtan beyaz giysi en az ısınır (K = Beyaz eldiven). Işığı en çok soğuran siyah giysi en çok ısınır (M = Siyah çorap). Orta derecede soğuran ise kırmızı atkıdır (L).',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Sıcaklık Grafiğinden Renk Tespiti',
    theme: 'Renkler ve Isınma Miktarı'
  },
  {
    id: 64306,
    subTopicId: 'g6-u4-sub3',
    contextTitle: 'Cisimlerin Işık Altında Renk Algısı',
    scenario: 'I. Beyaz ışık altında her cisim kendi renginde görünür.\nII. Beyaz bir cisim üzerine hangi renk ışık düşerse cisim o renkte görünür.\nIII. Mavi, yeşil ve kırmızı ışıklar üst üste çakıştırılırsa siyah renk elde edilir.',
    questionPrompt: 'Yukarıda verilen bilgilerden hangileri doğrudur?',
    options: [
      { key: 'A', text: 'Yalnız I.' },
      { key: 'B', text: 'I ve II.' },
      { key: 'C', text: 'II ve III.' },
      { key: 'D', text: 'I, II ve III.' }
    ],
    correctAnswer: 'B',
    explanation: 'Beyaz cisimler tüm ışığı yansıttığı için üzerine düşen ışığın rengini yansıtır ve o renkte görünür (II doğru). Beyaz ışık tüm renkleri barındırdığı için cisim kendi rengini yansıtır (I doğru). Işıkta üç ana renk (kırmızı, yeşil, mavi) çakışırsa siyah değil, BEYAZ ışık elde edilir (III yanlış).',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Işık Renkleri ve Cisim Rengi',
    theme: 'Renklerin Algılanması'
  },
  {
    id: 64307,
    subTopicId: 'g6-u4-sub3',
    contextTitle: 'Kırmızı, Yeşil ve Mavi Işık Demetlerinin Kesişimi',
    scenario: 'Karanlık bir odada beyaz bir perdeye aynı anda kırmızı, yeşil ve mavi ışık projektörleri odaklanıyor.',
    questionPrompt: 'Üç ışık demetinin üst üste geldiği ortak taralı bölge hangi renkte görünür?',
    options: [
      { key: 'A', text: 'Beyaz' },
      { key: 'B', text: 'Yeşil' },
      { key: 'C', text: 'Siyah' },
      { key: 'D', text: 'Sarı' }
    ],
    correctAnswer: 'A',
    explanation: 'Işıkta kırmızı + yeşil + mavi ışıkların karışımı beyaz ışığı oluşturur (Boya karışımıyla karıştırılmamalıdır; boyada siyah, ışıkta beyaz olur).',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Işık Renklerinin Birleşimi',
    theme: 'Işıkta Renk Karışımları'
  },
  {
    id: 64308,
    subTopicId: 'g6-u4-sub3',
    contextTitle: 'Renkli Işıklar Altında Bayrağın Görünümü',
    scenario: 'Karanlık odada üç şeritli bir bayrağa kırmızı ışık tutulduğunda siyah - siyah - kırmızı; mavi ışık tutulduğunda ise mavi - siyah - siyah görünüyor.',
    questionPrompt: 'Buna göre bu bayrağın gerçek renkleri yukarıdan aşağıya hangisi olabilir?',
    options: [
      { key: 'A', text: 'Mavi — Yeşil — Kırmızı' },
      { key: 'B', text: 'Mavi — Beyaz — Siyah' },
      { key: 'C', text: 'Mavi — Beyaz — Kırmızı' },
      { key: 'D', text: 'Beyaz — Beyaz — Beyaz' }
    ],
    correctAnswer: 'A',
    explanation: 'Mavi şerit kırmızı ışıkta siyah, mavi ışıkta mavi görünür (üst şerit mavi). Yeşil şerit hem kırmızıda hem mavide siyah görünür (orta şerit yeşil). Kırmızı şerit kırmızı ışıkta kırmızı, mavi ışıkta siyah görünür (alt şerit kırmızı). Sıralama: Mavi — Yeşil — Kırmızı.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Filtre ve Işık Yansıtma Matrisi',
    theme: 'Renkli Işıkta Cisim Renkleri'
  },
  {
    id: 64309,
    subTopicId: 'g6-u4-sub3',
    contextTitle: 'Renkli Işıklar Altında Siyah Görünen Giysiler',
    scenario: 'Karanlık bir odada:\n• Sarı tişörte ➔ Yeşil ışık\n• Mavi pantolona ➔ Kırmızı ışık\n• Kırmızı ayakkabıya ➔ Mavi ışık\n• Siyah monta ➔ Beyaz ışık tutulmaktadır.',
    questionPrompt: 'Buna göre hangi giysiler siyah renkte görünür?',
    options: [
      { key: 'A', text: 'Tişört ve pantolon' },
      { key: 'B', text: 'Pantolon ve ayakkabı' },
      { key: 'C', text: 'Tişört, ayakkabı ve mont' },
      { key: 'D', text: 'Pantolon, ayakkabı ve mont' }
    ],
    correctAnswer: 'D',
    explanation: 'Sarı tişört kırmızı+yeşilden oluştuğu için yeşil ışığı yansıtır ve yeşil görünür. Mavi pantolon kırmızı ışığı yansıtmaz (siyah). Kırmızı ayakkabı mavi ışığı yansıtmaz (siyah). Siyah mont gelen ışığı soğurur ve siyah görünür. Siyah görünenler: Pantolon, ayakkabı ve mont.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Işık Yansıtma Kuralları',
    theme: 'Cisimlerin Renkli Işıktaki Görünümü'
  },
  {
    id: 64310,
    subTopicId: 'g6-u4-sub3',
    contextTitle: 'Güneş Enerjisinin Teknolojik Kullanım Alanları',
    scenario: 'I. Trafik lambalarının güneş panelleriyle çalıştırılması\nII. Seraların kışın ısıtılması\nIII. Deniz suyundan buharlaştırma yöntemiyle tuz üretimi',
    questionPrompt: 'Yukarıdaki amaçlardan hangileri için güneş enerjisinden yararlanılabilir?',
    options: [
      { key: 'A', text: 'Yalnız I.' },
      { key: 'B', text: 'I ve II.' },
      { key: 'C', text: 'II ve III.' },
      { key: 'D', text: 'I, II ve III.' }
    ],
    correctAnswer: 'D',
    explanation: 'Güneş enerjisi elektrik üretiminde (trafik ışıkları), doğrudan ısıtmada (seracılık ve sıcak su) ve buharlaştırma işlemlerinde (tuzlalar) yaygın olarak kullanılır.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Güneş Enerjisi Uygulamaları',
    theme: 'Güneş Enerjisi ve Teknoloji'
  },
  {
    id: 64311,
    subTopicId: 'g6-u4-sub3',
    contextTitle: 'Güneş Panellerinin Yapısı ve Çalışması',
    scenario: 'Evlerin ve tesislerin çatılarına yerleştirilen fotovoltaik güneş panelleri incelenmektedir.',
    questionPrompt: 'Güneş panelleri ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Yüzeylerinin koyu renkli olması güneş ışığının daha fazla soğurulmasını sağlar.' },
      { key: 'B', text: 'Güneş panelleri sayesinde güneş enerjisi elektrik enerjisine dönüştürülür.' },
      { key: 'C', text: 'Güneş panellerinin çevreye verdiği zarar fosil yakıtlara göre daha fazladır.' },
      { key: 'D', text: 'Güneş ışığının panellere dik açıyla gelmesi elde edilen enerji verimini artırır.' }
    ],
    correctAnswer: 'C',
    explanation: 'Güneş panelleri temiz, yenilenebilir ve çevre dostudur; sera gazı salmazlar. Fosil yakıtlara göre çevreye daha çok zarar verdiği iddiası tamamen yanlıştır.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Yenilenebilir Enerji Analizi',
    theme: 'Güneş Panelleri'
  }
];

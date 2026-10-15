import { LgsQuestion } from '../../../types/curriculum';

// ============================================================================
// 6. SINIF 5. ÜNİTE: MADDENİN AYIRT EDİCİ ÖZELLİKLERİ (TEST 10, 11, 12)
// ============================================================================

export const odsgmGrade6Unit5Questions: LgsQuestion[] = [
  // --- TEST 10: GENLEŞME VE BÜZÜLME ---
  {
    id: 65101,
    subTopicId: 'g6-u5-sub1',
    contextTitle: 'Bakır Halka ve Madeni Para Genleşme Deneyi',
    scenario: 'Burak bakır telden bir halka yaparak elindeki 1 TL’yi bu halkadan geçirmeye çalışıyor; ancak madeni paranın halkadan geçemediğini gözlemliyor.',
    questionPrompt: 'Burak parayı halkadan geçirebilmek için;\nI. Parayı ısıtabilir.\nII. Halkayı ısıtabilir.\nIII. Parayı buz dolu kapta bekletebilir.\neylemlerinden hangilerini yapabilir?',
    options: [
      { key: 'A', text: 'Yalnız II.' },
      { key: 'B', text: 'I ve II.' },
      { key: 'C', text: 'I ve III.' },
      { key: 'D', text: 'II ve III.' }
    ],
    correctAnswer: 'D',
    explanation: 'Halkayı ısıtırsa halka genleşip genişler (II). Parayı soğutursa (buzlu kaba koyarsa) para büzülüp küçülür (III) ve her iki durumda da para halkadan geçer. Parayı ısıtmak ise parayı genleştirip daha da büyüteceğinden geçmesini engeller.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Isı Etkisiyle Boyut Değişimi',
    theme: 'Katılarda Genleşme ve Büzülme'
  },
  {
    id: 65102,
    subTopicId: 'g6-u5-sub1',
    contextTitle: 'Sıkışan Konserve Kapağının Sıcak Suyla Açılması',
    scenario: 'Zekiye Hanım, konserve kavanozunun sıkışan metal kapağını açamayınca kavanozu ters çevirip metal kapağını sıcak su içerisinde bir süre bekletmiş ve kapak kolayca açılmıştır.',
    questionPrompt: 'Bu olay ile ilgili;\nI. Sıcak suda bekletildiğinde metal kapak cam kavanoza göre daha çok genleşmiştir.\nII. Sıcak suda cam kavanoz büzülmüş, metal kapak genleşmiştir.\nIII. Sıcak su yerine soğuk su kullanılsaydı aynı durum gözlenirdi.\nyargılarından hangileri doğrudur?',
    options: [
      { key: 'A', text: 'Yalnız I.' },
      { key: 'B', text: 'I ve II.' },
      { key: 'C', text: 'I ve III.' },
      { key: 'D', text: 'II ve III.' }
    ],
    correctAnswer: 'A',
    explanation: 'Metallerin genleşme katsayısı camdan daha büyüktür. Sıcak suya daldırıldığında metal kapak camdan daha fazla genleşerek gevşer ve rahatça açılır.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Farklı Maddelerde Genleşme Farkı',
    theme: 'Metal ve Cam Genleşmesi'
  },
  {
    id: 65103,
    subTopicId: 'g6-u5-sub1',
    contextTitle: 'Balonun Buzlu ve Sıcak Sudaki Hacim Değişimi',
    scenario: 'Defne, şişirdiği esnek balonu önce buzlu suya batırıp bekletmiş, ardından çıkarıp sıcak suya daldırmıştır.',
    questionPrompt: 'Bu durumda balonun hacmi ile ilgili;\nI. Buzlu suya batırıldığında artar.\nII. Sıcak suya batırıldığında artar.\nIII. Buzlu su büzülme, sıcak su genleşme sağlar.\nyorumlarından hangileri yapılabilir?',
    options: [
      { key: 'A', text: 'Yalnız II.' },
      { key: 'B', text: 'I ve II.' },
      { key: 'C', text: 'I ve III.' },
      { key: 'D', text: 'II ve III.' }
    ],
    correctAnswer: 'D',
    explanation: 'Gazlar ısı aldıkça genleşir (sıcak suda balonun hacmi artar - II). Gazlar soğudukça büzülür (buzlu suda hacmi küçülür - III). II ve III doğrudur.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Gazlarda Hacim Değişimi',
    theme: 'Gazlarda Genleşme ve Büzülme'
  },
  {
    id: 65104,
    subTopicId: 'g6-u5-sub1',
    contextTitle: 'Genleşme Olayına Örnek Durumlar',
    scenario: 'Olaylar:\nI. Beton zeminde bekletilen bisiklet lastiğinin zamanla yumuşaması\nII. Sıcak ortamda bekletilen balonun hacminin artması\nIII. Gözlükçülerin gözlük camlarını yerleştirmeden önce çerçeveyi ısıtarak genişletmesi\nIV. Kışın elektrik tellerinin büzülerek gergin hâle gelmesi',
    questionPrompt: 'Yukarıda verilen durumlardan hangilerinin doğrudan nedeni genleşme olayıdır?',
    options: [
      { key: 'A', text: 'I ve II.' },
      { key: 'B', text: 'I ve IV.' },
      { key: 'C', text: 'II ve III.' },
      { key: 'D', text: 'III ve IV.' }
    ],
    correctAnswer: 'C',
    explanation: 'II (sıcakta balonun hacminin artması) ve III (ısıtılan gözlük çerçevesinin genleşerek camın takılması) genleşme örnekleridir. IV büzülme, I ise gaz sızması/basınç kaybıdır.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Genleşme Örnekleri Ayrımı',
    theme: 'Günlük Yaşamda Genleşme'
  },
  {
    id: 65105,
    subTopicId: 'g6-u5-sub1',
    contextTitle: 'Genleşme ve Büzülme Örneklerinde Farklı Olanı Bulma',
    scenario: 'Örnekler:\nA) Yazın sıcakta araba lastiklerinin hava basıncının artıp şişmesi (Genleşme)\nB) Soğuk betonda bekleyen topun havasının inmesi (Büzülme)\nC) Buzluğa konan plastik şişenin içe doğru büzüşmesi (Büzülme)\nD) Soğuk havada dışarıda kalan balonun küçülmesi (Büzülme)',
    questionPrompt: 'Aşağıda genleşme ve büzülme ile ilgili verilen örneklerden hangisi diğerlerinden farklı bir durumdur?',
    options: [
      { key: 'A', text: 'Yazın araba lastiklerinin şişmesi' },
      { key: 'B', text: 'Betonda ve gölgede kalan topun inmesi' },
      { key: 'C', text: 'Buzluğa konan pet şişenin küçülmesi' },
      { key: 'D', text: 'Soğukta kalan balonun büzülmesi' }
    ],
    correctAnswer: 'A',
    explanation: 'B, C ve D seçenekleri soğuma sonucu hacim küçülmesi (büzülme) iken; A seçeneği ısınma sonucu hacim büyümesi (genleşme) olayıdır.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Sınıflandırma ve Ayırt Etme',
    theme: 'Genleşme vs Büzülme'
  },
  {
    id: 65106,
    subTopicId: 'g6-u5-sub1',
    contextTitle: 'Metal Çiftinde (Termostat) Bükülme Yönü',
    scenario: 'İlk boyları eşit K ve L metalleri üst üste perçinlenmiştir. K metalinin genleşme katsayısı L’den büyüktür. Bu metal çifti ısıtılmaktadır.',
    questionPrompt: 'Yapıştırılan metaller ısıtıldıklarında son görünümleri nasıl olur?',
    options: [
      { key: 'A', text: 'K daha çok uzayarak L’nin üzerine doğru bükülür (yay şeklinde aşağı kavis)' },
      { key: 'B', text: 'L daha çok uzayarak yukarı doğru bükülür' },
      { key: 'C', text: 'İkisi de düz uzar' },
      { key: 'D', text: 'Metaller birbirinden ayrılır' }
    ],
    correctAnswer: 'A',
    explanation: 'Genleşme özelliği daha büyük olan K metali aynı sıcaklık artışında daha fazla uzamak ister. Birbirine yapışık oldukları için K dışta kalacak şekilde L’nin üzerine doğru bükülür.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Metal Çifti ve Termostat Çalışma İlkesi',
    theme: 'Metal Çiftleri'
  },
  {
    id: 65107,
    subTopicId: 'g6-u5-sub1',
    contextTitle: 'Termometrede Sıvı Seviyesi Değişim Aşamaları',
    scenario: 'Termometrede ilk ölçüm 30 °C iken I. işlemde sıvı seviyesi 10 °C\'ye düşmüş; II. işlemde ise 10 °C\'den 40 °C\'ye yükselmiştir.',
    questionPrompt: 'Termometre ile yapılan bu deney ile ilgili aşağıdakilerden hangisi doğrudur?',
    options: [
      { key: 'A', text: 'I. işlem sonunda taneciklerin hareket hızı artmıştır.' },
      { key: 'B', text: 'Termometre önce ısı almış, sonra ısı vermiştir.' },
      { key: 'C', text: 'Termometredeki sıvı önce büzülmüş, sonra genleşmiştir.' },
      { key: 'D', text: 'Termometredeki sıvının sıcaklığı sürekli sabit kalmıştır.' }
    ],
    correctAnswer: 'C',
    explanation: 'Sıcaklık 30\'dan 10 °C\'ye düşünce termometre sıvısı ısı vererek büzülmüştür; ardından 10\'dan 40 °C\'ye çıkınca ısı alarak genleşmiştir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Termometre Çalışma Mekanizması',
    theme: 'Sıvılarda Genleşme'
  },
  {
    id: 65108,
    subTopicId: 'g6-u5-sub1',
    contextTitle: 'Tren Raylarında Boşluk Bırakılması Sebebi',
    scenario: 'Demir yolu rayları döşenirken raylar arasında belirli genleşme boşlukları bırakılır.',
    questionPrompt: 'Tren rayları yerleştirilirken metallerin hangi özellikleri dikkate alınmalıdır?\nI. Büzülme\nII. Cins\nIII. Genleşme',
    options: [
      { key: 'A', text: 'Yalnız I' },
      { key: 'B', text: 'I ve III.' },
      { key: 'C', text: 'II ve III.' },
      { key: 'D', text: 'I, II ve III.' }
    ],
    correctAnswer: 'D',
    explanation: 'Yazın genleşerek rayların bükülmemesi, kışın büzülerek kopmaması için rayların cinsi, genleşme ve büzülme miktarları hesaplanmalıdır.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Mühendislikte Genleşme Önlemleri',
    theme: 'Genleşmenin Olumsuz Etkileri'
  },
  {
    id: 65109,
    subTopicId: 'g6-u5-sub1',
    contextTitle: 'Altın ve Demir Kaşıkların Boy Uzaması Deneyi',
    scenario: 'Kütleleri eşit (10 cm ilk boy, 25 °C ilk sıcaklık) altın ve demir kaşıklar özdeş ısıtıcılarla eşit süre ısıtılmıştır. Altın kaşığın son boyu 12,5 cm, demir kaşığın son boyu 11 cm olarak ölçülmüştür.',
    questionPrompt: 'Buna göre bu kontrollü deneyin araştırma sorusu aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Sıcaklığın genleşme üzerine etkisi nedir?' },
      { key: 'B', text: 'Madde cinsinin genleşme üzerine etkisi nedir?' },
      { key: 'C', text: 'Kütlenin genleşme üzerine etkisi nedir?' },
      { key: 'D', text: 'İlk uzunluğun genleşme üzerine etkisi nedir?' }
    ],
    correctAnswer: 'B',
    explanation: 'Deneyde kütle, ilk boy ve verilen ısı sabit tutulmuş; sadece kaşıkların cinsi (altın vs demir) değiştirilmiştir. Dolayısıyla bağımsız değişken madde cinsidir.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Kontrollü Deney Araştırma Sorusu',
    theme: 'Genleşmede Madde Cinsinin Etkisi'
  },
  {
    id: 65110,
    subTopicId: 'g6-u5-sub1',
    contextTitle: 'Halka ve Küre Deneyinde Soğutmanın Etkisi',
    scenario: 'Bir metal küre başlangıçta halkadan geçememektedir. Küre soğuk suya tutulup tekrar denendiğinde halkadan rahatlıkla geçebilmektedir.',
    questionPrompt: 'Bu deneyle ilgili aşağıdaki çıkarımlardan hangisi yapılabilir?',
    options: [
      { key: 'A', text: 'Isı alan halka genleşmiştir.' },
      { key: 'B', text: 'Isı veren metal küre büzülerek hacmi küçülmüştür.' },
      { key: 'C', text: 'Soğuk sudan sıcak küreye ısı akışı olmuştur.' },
      { key: 'D', text: 'Başlangıçta halkanın çapı kürenin çapından büyüktür.' }
    ],
    correctAnswer: 'B',
    explanation: 'Sıcak küre soğuk suya tutulduğunda suya ısı verir; sıcaklığı azalan küre büzülür ve çapı küçüldüğü için halkadan geçer.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Gravesande Halkası Deneyi',
    theme: 'Soğuma ve Büzülme'
  },
  {
    id: 65111,
    subTopicId: 'g6-u5-sub1',
    contextTitle: 'Sıvılı Termometrelerin Üretim Prensibi',
    scenario: 'Maddelerin ısı aldıklarında hacimlerinin büyümesi (genleşmesi), ısı verdiklerinde hacimlerinin küçülmesi (büzülmesi) prensibi teknolojide araç yapımında kullanılır.',
    questionPrompt: 'Aşağıdaki araçlardan hangisi maddelerin ısı ile genleşme özelliğinden yararlanılarak üretilmiştir?',
    options: [
      { key: 'A', text: 'Televizyon' },
      { key: 'B', text: 'Dinamometre' },
      { key: 'C', text: 'Termometre' },
      { key: 'D', text: 'Su ısıtıcısı' }
    ],
    correctAnswer: 'C',
    explanation: 'Termometreler kılcal borudaki sıvının (cıva veya alkol) sıcaklık arttıkça genleşip yükselmesi, sıcaklık düştükçe büzülüp alçalması esasına göre sıcaklık ölçer.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Teknolojik Araç İlkesi',
    theme: 'Termometre Prensibi'
  },
  {
    id: 65112,
    subTopicId: 'g6-u5-sub1',
    contextTitle: 'Termometre Cihazı ve Ayırt Edici Özellik',
    scenario: 'Sıcaklık değişimini sıvıların düzenli genleşip büzülmesi sayesinde hassas çizgilerle gösteren cihazdır.',
    questionPrompt: 'Verilen araçlardan hangisi maddenin genleşme-büzülme özelliğinden yararlanılarak yapılmıştır?',
    options: [
      { key: 'A', text: 'Oyuncak Araba' },
      { key: 'B', text: 'Cezve' },
      { key: 'C', text: 'Çaydanlık' },
      { key: 'D', text: 'Termometre' }
    ],
    correctAnswer: 'D',
    explanation: 'Sıvılı termometreler doğrudan sıvıların genleşme-büzülme özelliğine dayalı olarak geliştirilmiş temel laboratuvar ve ölçüm aletidir.',
    skillTag: 'Temel Bilgi & Mantık',
    cognitiveLevel: 'Araç Tanıma',
    theme: 'Genleşme ve Ölçüm'
  },

  // --- TEST 11: MADDENİN HAL DEĞİŞİM NOKTALARI ---
  {
    id: 65201,
    subTopicId: 'g6-u5-sub2',
    contextTitle: 'Buzun Erime Sıcaklığı Tablosu Analizi',
    scenario: 'Beherdeki buz sürekli ısıtılarak sıcaklık ölçümleri yapılmıştır:\n• 2. dk: -10 °C, 4. dk: -5 °C, 6. dk: 0 °C, 8. dk: 0 °C, 10. dk: 0 °C, 12. dk: 10 °C.',
    questionPrompt: 'Tabloya göre aşağıda verilen bilgilerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Buzun erime sıcaklığı 0 °C’dir.' },
      { key: 'B', text: '6. dakikada erimeye başlamıştır.' },
      { key: 'C', text: '6-10. dk aralığında buza ısı verilmemiştir.' },
      { key: 'D', text: 'Erime süresince saf maddelerin sıcaklığı değişmez.' }
    ],
    correctAnswer: 'C',
    explanation: '6-10. dakikalar arasında buz erimektedir. Saf maddeler hal değiştirirken aldıkları ısı enerjisini sıcaklığı artırmak için değil, tanecikler arası bağları zayıflatmak için kullanırlar. Buza ısı verilmeye devam edilmektedir; C seçeneğindeki "ısı verilmemiştir" ifadesi yanlıştır.',
    skillTag: 'Tablo Yorumlama',
    cognitiveLevel: 'Hal Değişimi ve Isı-Sıcaklık Ayrımı',
    theme: 'Erime Süreci ve Sıcaklık Sabitliği'
  },
  {
    id: 65202,
    subTopicId: 'g6-u5-sub2',
    contextTitle: 'Hal Değişimi Kavram Eşleştirmesi',
    scenario: 'Tanımlar:\na. Isı alan sıvının yüzeyinde gerçekleşen olay ➔ 1. Buharlaşma\nb. Sıvı haldeki saf maddenin kaynamaya başladığı sıcaklık ➔ 2. Erime Noktası\nc. Katı maddelerin ısı alarak sıvı hale geçtiği sıcaklık ➔ 3. Kaynama Noktası',
    questionPrompt: 'Bu eşleştirmelerin tamamının doğru olabilmesi için hangisi yapılmalıdır?',
    options: [
      { key: 'A', text: 'b ile c yer değiştirmeli' },
      { key: 'B', text: '1 ve 2 yer değiştirmeli' },
      { key: 'C', text: '1 ve 3 yer değiştirmeli' },
      { key: 'D', text: 'a ile b yer değiştirmeli' }
    ],
    correctAnswer: 'A',
    explanation: 'b maddesi kaynama noktası (3), c maddesi ise erime noktasıdır (2). b ile c tanımları yer değiştirirse eşleştirme kusursuz olur.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Terim ve Tanım Eşleme',
    theme: 'Hal Değişim Noktaları'
  },
  {
    id: 65203,
    subTopicId: 'g6-u5-sub2',
    contextTitle: 'Saf Maddelerin Erime ve Donma Noktaları',
    scenario: 'Erime noktaları: Etil alkol (-117 °C), Naftalin (80 °C), Buz (0 °C).',
    questionPrompt: 'Tabloda verilenlere göre aşağıdaki yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Suyun donma noktası diğerlerinden yüksektir.' },
      { key: 'B', text: 'Oda sıcaklığında (25 °C) etil alkol katı haldedir.' },
      { key: 'C', text: 'En kısa sürede eriyen madde buzdur.' },
      { key: 'D', text: 'Etil alkolün donma noktası (-117 °C) diğer maddelerden çok daha düşüktür.' }
    ],
    correctAnswer: 'D',
    explanation: 'Saf maddelerde erime noktası donma noktasına eşittir. Etil alkolün donma noktası -117 °C olup buz (0 °C) ve naftalinden (80 °C) belirgin şekilde daha düşüktür.',
    skillTag: 'Tablo Yorumlama',
    cognitiveLevel: 'Sayısal Karşılaştırma',
    theme: 'Erime ve Donma Sıcaklığı'
  },
  {
    id: 65204,
    subTopicId: 'g6-u5-sub2',
    contextTitle: 'Kaynama Noktasının Ayırt Edici Özellik Olduğunu Kanıtlama',
    scenario: 'Düzenekler: I (50 mL su), II (100 mL su), III (100 mL yağ), IV (50 mL yağ). Özdeş ısıtıcılar kullanılacaktır.',
    questionPrompt: 'Öğrenci kaynama noktasının maddeler için ayırt edici olduğunu göstermek için hangi iki düzeneği seçmelidir?',
    options: [
      { key: 'A', text: 'I ve II' },
      { key: 'B', text: 'I ve IV' },
      { key: 'C', text: 'II ve II' },
      { key: 'D', text: 'III ve IV' }
    ],
    correctAnswer: 'B',
    explanation: 'Ayırt edici özellik olduğunu göstermek için madde cinsi farklı (su ve yağ), fakat madde miktarları aynı (50 mL su ve 50 mL yağ) seçilmelidir (I ve IV).',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Ayırt Edici Özellik Deney Düzeneği',
    theme: 'Kaynama Noktası Deneyi'
  },
  {
    id: 65205,
    subTopicId: 'g6-u5-sub2',
    contextTitle: 'Soğutulan Sıvılardan İlk Donmaya Başlayan Madde',
    scenario: 'Donma sıcaklıkları: I (-45 °C), II (-114 °C), III (0 °C), IV (-117 °C). Oda sıcaklığındaki (25 °C) bu sıvılardan eşit miktarda alınıp aynı anda soğutuluyor.',
    questionPrompt: 'Buna göre sıcaklık düşerken ilk olarak hangi sıvı donmaya başlar?',
    options: [
      { key: 'A', text: 'I.' },
      { key: 'B', text: 'II.' },
      { key: 'C', text: 'III.' },
      { key: 'D', text: 'IV.' }
    ],
    correctAnswer: 'C',
    explanation: '25 °C’den geriye doğru soğutulurken termometre ilk olarak en yüksek donma noktasına sahip olan III sıvısının donma derecesine (0 °C) ulaşır ve III sıvısı ilk donan madde olur.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Soğuma Sürecinde Donma Sırası',
    theme: 'Donma Noktası Karşılaştırması'
  },
  {
    id: 65206,
    subTopicId: 'g6-u5-sub2',
    contextTitle: 'Hal Değişimi İlkeleri Dallanmış Ağaç',
    scenario: '"Saf katı maddeler için erime sıcaklığı ayırt edici bir özelliktir." (D/Y) ➔ "Saf katı maddeler erime sırasında dışarıya ısı verir." (D/Y) diyagramı.',
    questionPrompt: 'İfadeler doğruysa D, yanlışsa Y yönünde ilerlenirse hangi sembole ulaşılır?',
    options: [
      { key: 'A', text: '▲' },
      { key: 'B', text: '●' },
      { key: 'C', text: '■' },
      { key: 'D', text: '★' }
    ],
    correctAnswer: 'B',
    explanation: 'Erime sıcaklığı ayırt edicidir (Doğru). Saf katı maddeler erirken dışarıdan ısı ALIR, dışarıya ısı vermez (Yanlış). Bu nedenle D ➔ Y yolu izlenerek ● sembolüne ulaşılır.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Dallanmış Ağaç Mantığı',
    theme: 'Erime Olayı İlkeleri'
  },
  {
    id: 65207,
    subTopicId: 'g6-u5-sub2',
    contextTitle: 'K ve L Sıvılarının Sıcaklık-Zaman Grafiği',
    scenario: 'Özdeş ısıtıcılarla ısıtılan saf K ve L sıvılarından:\n• K sıvısı 8. dakikada 60 °C sıcaklığa ulaşıp kaynamaya başlamıştır.\n• L sıvısı 6. dakikada 120 °C sıcaklığa ulaşıp kaynamaya başlamıştır.',
    questionPrompt: 'Bu grafiklere göre yapılan aşağıdaki yorumlardan hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'K sıvısı L sıvısından önce kaynamaya başlamıştır.' },
      { key: 'B', text: 'K sıvısının kaynama noktası 60 °C’dir.' },
      { key: 'C', text: 'L sıvısı 6. dakikada kaynamaya başlamıştır.' },
      { key: 'D', text: 'K ve L farklı cins sıvılardır.' }
    ],
    correctAnswer: 'A',
    explanation: 'Grafiğe göre L sıvısı 6. dakikada kaynamaya başlarken, K sıvısı 8. dakikada kaynamaya başlamıştır. Dolayısıyla L sıvısı K\'den daha önce kaynamıştır (A seçeneğindeki ifade yanlıştır).',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'İki Ayrı Grafiğin Karşılaştırılması',
    theme: 'Kaynama Grafikleri'
  },
  {
    id: 65208,
    subTopicId: 'g6-u5-sub2',
    contextTitle: 'Maddeler İçin Ayırt Edici Özellikler',
    scenario: 'I. Renk ve koku (Ortak veya yanıltıcı olabilir)\nII. Donma ve kaynama noktaları (Sabit ve ayırt edici)\nIII. Kütle (Ortak özellik)',
    questionPrompt: 'Yukarıda verilen ifadelerden hangileri saf maddeler için kesin ayırt edici bir özelliktir?',
    options: [
      { key: 'A', text: 'Yalnız I.' },
      { key: 'B', text: 'Yalnız II.' },
      { key: 'C', text: 'II ve III.' },
      { key: 'D', text: 'I ve III.' }
    ],
    correctAnswer: 'B',
    explanation: 'Kütle ve hacim ortak özelliklerdir. Donma noktası, kaynama noktası ve yoğunluk ise saf maddeler için karakteristik ayırt edici özelliklerdir (Yalnız II).',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Ayırt Edici vs Ortak Özellikler',
    theme: 'Maddenin Kimliği'
  },
  {
    id: 65209,
    subTopicId: 'g6-u5-sub2',
    contextTitle: '2400 °C Fırında Metal Karışımı Buharlaşma Deneyi',
    scenario: 'Kaynama noktaları: Alüminyum (2470 °C), Gümüş (2162 °C), Demir (2868 °C), Bakır (2567 °C). Bu metallerden 50’şer gram alınarak 200 gramlık karışım hazırlanmış ve 2400 °C\'deki hava çıkışlı fırında bekletilmiştir.',
    questionPrompt: 'Fırından çıkarılan katı kütlesi tartıldığında kaç gram gelir?',
    options: [
      { key: 'A', text: '50 g' },
      { key: 'B', text: '100 g' },
      { key: 'C', text: '150 g' },
      { key: 'D', text: '175 g' }
    ],
    correctAnswer: 'C',
    explanation: 'Fırın sıcaklığı 2400 °C’dir. Gümüşün kaynama noktası 2162 °C olduğundan 2400 °C\'de tamamen kaynayıp buharlaşarak fırından uçar (-50 g). Alüminyum (2470), Bakır (2567) ve Demir (2868) ise henüz kaynama sıcaklığına ulaşamadığı için fırında kalır. Kalan kütle: 50 + 50 + 50 = 150 gramdır.',
    skillTag: 'Hesaplama & Mantık',
    cognitiveLevel: 'Kaynama Sıcaklığı ve Faz Değişimi',
    theme: 'Metallerin Kaynama Noktaları'
  },
  {
    id: 65210,
    subTopicId: 'g6-u5-sub2',
    contextTitle: 'Sıcaklık-Zaman Tablosundan Faz Tespiti',
    scenario: 'K maddesi 12 ve 14. dakikada 78 °C\'de sabit kalmıştır (Kaynama noktası 78 °C). L maddesi 8, 10, 12 ve 14. dakikada 56 °C\'de sabit kalmıştır (Kaynama noktası 56 °C).',
    questionPrompt: 'Tabloya göre;\nI. K maddesinin kaynama sıcaklığı 78 °C\'dir.\nII. K maddesinin miktarı daha fazladır.\nIII. 55 °C sıcaklıkta her ikisi de sıvı haldedir.\nyargılarından hangileri doğrudur?',
    options: [
      { key: 'A', text: 'I ve II' },
      { key: 'B', text: 'I ve III' },
      { key: 'C', text: 'II ve III' },
      { key: 'D', text: 'I, II ve III' }
    ],
    correctAnswer: 'B',
    explanation: 'K\'nin sıcaklığının sabit kaldığı 78 °C kaynama sıcaklığıdır (I doğru). 55 °C sıcaklık her iki maddenin de kaynama noktasının altında olduğu için her iki madde de bu sıcaklıkta sıvı haldedir (III doğru). I ve III doğrudur.',
    skillTag: 'Tablo Yorumlama',
    cognitiveLevel: 'Tablodan Hal Değişim Noktası Çıkarımı',
    theme: 'Faz Değişimi Sıcaklıkları'
  },
  {
    id: 65211,
    subTopicId: 'g6-u5-sub2',
    contextTitle: 'Oda Sıcaklığında (25 °C) Maddelerin Fiziksel Hali',
    scenario: 'Tabloda erime ve kaynama noktaları verilmiştir:\n• X: Erime -20 °C, Kaynama 45 °C\n• Y: Erime -45 °C, Kaynama 20 °C\n• Z: Erime 55 °C, Kaynama 110 °C',
    questionPrompt: 'Buna göre oda sıcaklığında (25 °C) X, Y ve Z maddeleri hangi fiziksel hâlde bulunurlar?',
    options: [
      { key: 'A', text: 'X: katı — Y: katı — Z: gaz' },
      { key: 'B', text: 'X: sıvı — Y: katı — Z: gaz' },
      { key: 'C', text: 'X: gaz — Y: sıvı — Z: katı' },
      { key: 'D', text: 'X: sıvı — Y: gaz — Z: katı' }
    ],
    correctAnswer: 'D',
    explanation: '25 °C sıcaklık değeri incelendiğinde:\nX için: -20 < 25 < 45 aralığında olduğundan SIVI haldedir.\nY için: 25 > 20 (kaynama noktasından büyük) olduğundan GAZ haldedir.\nZ için: 25 < 55 (erime noktasından küçük) olduğundan KATI haldedir.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Sıcaklık Aralığı ve Maddenin Hali',
    theme: 'Maddenin Fiziksel Halleri'
  },

  // --- TEST 12: YOĞUNLUK ---
  {
    id: 65301,
    subTopicId: 'g6-u5-sub3',
    contextTitle: 'Aynı Malzemeden Küp ve Prizmanın Kütlesi',
    scenario: 'Bir kenarı 4 cm olan küp şeklindeki tahta bloğun kütlesi 32 g ölçülmüştür (Hacim = 4 x 4 x 4 = 64 cm³, Yoğunluk d = 32 / 64 = 0,5 g/cm³). Aynı malzemeden yapılmış prizmanın boyutları 8 cm, 4 cm ve 6 cm’dir.',
    questionPrompt: 'Dikdörtgenler prizması şeklindeki tahtanın kütlesinin kaç gram olması beklenir?',
    options: [
      { key: 'A', text: '48 g' },
      { key: 'B', text: '64 g' },
      { key: 'C', text: '96 g' },
      { key: 'D', text: '128 g' }
    ],
    correctAnswer: 'C',
    explanation: 'Prizmanın hacmi V = 8 x 4 x 6 = 192 cm³’tür. Malzeme aynı olduğundan yoğunluğu d = 0,5 g/cm³’tür. Kütle m = d x V = 0,5 x 192 = 96 gram bulunur.',
    skillTag: 'Hesaplama & Mantık',
    cognitiveLevel: 'Hacim ve Yoğunluk Bağıntısı m = d.V',
    theme: 'Yoğunluk ve Kütle Hesabı'
  },
  {
    id: 65302,
    subTopicId: 'g6-u5-sub3',
    contextTitle: 'Kütle, Hacim ve Yoğunluk Tablosu Değerlendirmesi',
    scenario: 'A maddesi: Kütle 33,9 g, Yoğunluk 11,3 g/cm³ (Hacim V = 33,9 / 11,3 = 3 cm³).\nB maddesi: Kütle 62,88 g, Hacim 8 cm³ (Yoğunluk d = 62,88 / 8 = 7,86 g/cm³).',
    questionPrompt: 'Buna göre bu maddeler ile ilgili;\nI. Farklı maddelerdir.\nII. Eşit hacimde alındıklarında B maddesinin kütlesi daha fazla olur.\nIII. Kütlesi büyük olduğundan B maddesinin yoğunluğu daha fazladır.\nyorumlarından hangileri doğrudur?',
    options: [
      { key: 'A', text: 'Yalnız I.' },
      { key: 'B', text: 'I ve II' },
      { key: 'C', text: 'II ve III.' },
      { key: 'D', text: 'I, II ve III.' }
    ],
    correctAnswer: 'A',
    explanation: 'A\'nın yoğunluğu 11,3 g/cm³, B\'nin yoğunluğu 7,86 g/cm³\'tür. Yoğunlukları farklı olduğu için kesinlikle farklı maddelerdir (I doğru). Eşit hacimde alındığında yoğunluğu büyük olan A\'nın kütlesi daha fazla olur (II yanlış). Yoğunluk sadece kütleye bağlı değildir, kütlenin hacme oranıdır (III yanlış). Yalnız I doğrudur.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Yoğunluk Tanımı ve Ayırt Edicilik',
    theme: 'Saf Maddelerde Yoğunluk'
  },
  {
    id: 65303,
    subTopicId: 'g6-u5-sub3',
    contextTitle: 'Yoğunluk Özellikleri Hakkında Yanlış Bilgi',
    scenario: 'Yoğunluğun fiziksel özellikleri ve ayırt ediciliği incelenmektedir.',
    questionPrompt: 'Yoğunluk ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Yoğunluk saf maddeler için ayırt edici bir özelliktir.' },
      { key: 'B', text: 'Demir katı bir madde olduğundan yoğunluğu benzin ve cıvadan yüksektir.' },
      { key: 'C', text: 'Aynı hacme sahip farklı saf maddelerin kütleleri ve yoğunlukları farklıdır.' },
      { key: 'D', text: 'Hâl değişimi ile maddelerin yoğunlukları değişebilir.' }
    ],
    correctAnswer: 'B',
    explanation: 'Cıva bir sıvı olmasına rağmen yoğunluğu yaklaşık 13,6 g/cm³\'tür; katı demirin yoğunluğu ise yaklaşık 7,8 g/cm³\'tür. Dolayısıyla demir cıvada batmaz, yüzer! B seçeneğindeki "demirin yoğunluğu cıvadan yüksektir" ifadesi yanlıştır.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Katı-Sıvı Yoğunluk İstisnaları',
    theme: 'Maddelerin Yoğunlukları'
  },
  {
    id: 65304,
    subTopicId: 'g6-u5-sub3',
    contextTitle: 'Dereceli Silindir ve Terazi ile Taşın Yoğunluğu',
    scenario: 'İçerisinde 80 cm³ su bulunan dereceli silindirin kütlesi 140 g olarak ölçülmüştür. İçine taş atıldığında su seviyesi 100 cm³\'e yükselmiş, toplam kütle ise 220 g olmuştur.',
    questionPrompt: 'Buna göre cam tüp içine atılan taşın yoğunluğu kaç g/cm³’tür?',
    options: [
      { key: 'A', text: '2,00' },
      { key: 'B', text: '3,00' },
      { key: 'C', text: '4,00' },
      { key: 'D', text: '5,00' }
    ],
    correctAnswer: 'C',
    explanation: 'Taşın hacmi V = 100 - 80 = 20 cm³.\nTaşın kütlesi m = 220 - 140 = 80 g.\nYoğunluk d = m / V = 80 / 20 = 4,00 g/cm³ bulunur.',
    skillTag: 'Hesaplama & Mantık',
    cognitiveLevel: 'Taşırma Yöntemiyle Katı Yoğunluğu',
    theme: 'Yoğunluk Deneyi'
  },
  {
    id: 65305,
    subTopicId: 'g6-u5-sub3',
    contextTitle: 'Cismin Parçalara Bölünmesinin Yoğunluğa Etkisi',
    scenario: 'Özdeş küplerden oluşan K cismi tam ortasından ikiye kesilerek L ve M cisimlerine ayrılıyor.',
    questionPrompt: 'Oluşan L ve M parçalarının yoğunlukları K cismine göre nasıl değişmiştir?',
    options: [
      { key: 'A', text: 'Değişmemiştir.' },
      { key: 'B', text: 'Yarıya inmiştir.' },
      { key: 'C', text: 'İki katına çıkmıştır.' },
      { key: 'D', text: 'Dört katına çıkmıştır.' }
    ],
    correctAnswer: 'A',
    explanation: 'Yoğunluk (d = m/V) madde miktarına bağlı olmayan ayırt edici bir özelliktir. Cisim ikiye bölündüğünde kütlesi yarıya inerken hacmi de yarıya iner; kütle/hacim oranı yani yoğunluğu kesinlikle DEĞİŞMEZ.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Yoğunluğun Madde Miktarından Bağımsızlığı',
    theme: 'Yoğunluk Değişmezliği'
  },
  {
    id: 65306,
    subTopicId: 'g6-u5-sub3',
    contextTitle: 'Sıvı Yardımıyla Katı Yoğunluğu Ölçme Şartları',
    scenario: 'Düzgün geometrik şekli olmayan bir katının yoğunluğu taşırma kabı veya dereceli silindirle ölçülecektir.',
    questionPrompt: 'Ölçümün doğru yapılabilmesi için;\nI. Katının sıvı içerisinde çözünmemesi\nII. Katının sıvıya tamamen batması\nIII. Sıvı yoğunluğunun katıdan büyük olması\ndurumlarından hangileri mutlaka gereklidir?',
    options: [
      { key: 'A', text: 'Yalnız I.' },
      { key: 'B', text: 'I ve II.' },
      { key: 'C', text: 'II ve III.' },
      { key: 'D', text: 'I, II ve III.' }
    ],
    correctAnswer: 'B',
    explanation: 'Katı sıvıda çözünürse hacmi kaybolur (I şarttır). Katı yüzmemeli, kendi hacmi kadar sıvı taşırabilmesi için tamamen batmalıdır (II şarttır). Sıvının yoğunluğu katıdan büyük olursa katı yüzer ve tam batamaz (III yanlıştır). I ve II gereklidir.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Deney Şartları Belirleme',
    theme: 'Katı Yoğunluğu Ölçme Yöntemi'
  },
  {
    id: 65307,
    subTopicId: 'g6-u5-sub3',
    contextTitle: 'Mantar Tıpa ve Madeni Paranın Sudaki Davranışı',
    scenario: 'Su dolu bir kaba atılan mantar tıpanın yüzdüğü, madeni paranın ise dibe battığı gözlemleniyor.',
    questionPrompt: 'Bu durumun temel sebebi aşağıdakilerden hangisidir?',
    options: [
      { key: 'A', text: 'Mantar tıpanın kütlesinin madeni paradan büyük olması' },
      { key: 'B', text: 'Mantar tıpanın yoğunluğunun madeni paradan büyük olması' },
      { key: 'C', text: 'Madeni paranın hacminin mantar tıpadan küçük olması' },
      { key: 'D', text: 'Suyun yoğunluğunun mantar tıpanın yoğunluğundan büyük, madeni paranın yoğunluğundan küçük olması' }
    ],
    correctAnswer: 'D',
    explanation: 'Sıvıdan küçük yoğunluklu cisimler yüzer (d_mantar < d_su), sıvıdan büyük yoğunluklu cisimler batar (d_para > d_su). Sıralama: d_para > d_su > d_mantar.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Yüzme ve Batma Şartları',
    theme: 'Sıvıda Yüzme ve Batma'
  },
  {
    id: 65308,
    subTopicId: 'g6-u5-sub3',
    contextTitle: 'Kütle-Hacim Grafiğinden Sıvı Katmanları Sıralaması',
    scenario: 'Birbiri içinde çözünmeyen K, L ve M sıvılarına ait kütle-hacim grafiğinde doğruların eğimi K > L > M şeklindedir (Yoğunluklar d_K > d_L > d_M).',
    questionPrompt: 'Bu sıvılardan eşit hacimde alınıp aynı kaba konulduğunda kaptaki katman dizilimi aşağıdan yukarıya nasıl olur?',
    options: [
      { key: 'A', text: 'M — L — K' },
      { key: 'B', text: 'K — M — L' },
      { key: 'C', text: 'L — K — M' },
      { key: 'D', text: 'En altta K, ortada L, en üstte M' }
    ],
    correctAnswer: 'D',
    explanation: 'Kütle/hacim oranı en büyük olan K en yoğundur ve dibe çöker. Yoğunluğu en küçük olan M en üste çıkar. L ise aralarında kalır.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Grafikten Sıvı Kulesi Çıkarımı',
    theme: 'Sıvı Kulesi ve Yoğunluk'
  },
  {
    id: 65309,
    subTopicId: 'g6-u5-sub3',
    contextTitle: 'Dört Sıvılı Kulede En Yoğun Sıvı',
    scenario: 'Birbiri içinde çözünmeyen dört sıvı aynı kaba konulduğunda yukarıdan aşağıya N, M, L ve K şeklinde sıralanmıştır.',
    questionPrompt: 'Buna göre hangi sıvının yoğunluğu en fazladır?',
    options: [
      { key: 'A', text: 'K' },
      { key: 'B', text: 'L' },
      { key: 'C', text: 'M' },
      { key: 'D', text: 'N' }
    ],
    correctAnswer: 'A',
    explanation: 'Yoğunluğu en büyük olan sıvı en altta yer alır (K sıvısı). Yoğunluğu en küçük olan ise en üstteki N sıvısıdır.',
    skillTag: 'Temel Bilgi & Mantık',
    cognitiveLevel: 'Sıvı Katmanları Analizi',
    theme: 'Karışmayan Sıvılar'
  },
  {
    id: 65310,
    subTopicId: 'g6-u5-sub3',
    contextTitle: 'K ve L Maddelerinin Kütle-Hacim Grafiği İncelemesi',
    scenario: 'Saf K ve L maddelerine ait kütle-hacim grafiğinde: K için 120 g kütle 30 cm³ hacme (d_K = 4 g/cm³); L için 60 g kütle 40 cm³ hacme (d_L = 1,5 g/cm³) karşılık gelmektedir.',
    questionPrompt: 'Buna göre aşağıdaki yargılardan hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'K ve L farklı maddelerdir.' },
      { key: 'B', text: 'K maddesinin yoğunluğu 4 g/cm³’tür.' },
      { key: 'C', text: 'K maddesinin yoğunluğu L maddesinden büyüktür.' },
      { key: 'D', text: 'Eşit kütledeki K ve L maddelerinden K’nın hacmi daha büyüktür.' }
    ],
    correctAnswer: 'D',
    explanation: 'V = m / d formülüne göre eşit kütlede yoğunluğu küçük olanın hacmi daha büyüktür. d_L < d_K olduğuna göre L\'nin hacmi K\'den büyük olmalıdır. D seçeneğindeki "K\'nın hacmi daha büyüktür" iddiası yanlıştır.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Kütle-Hacim-Yoğunluk İlişkisi',
    theme: 'Grafik Değerlendirme'
  },
  {
    id: 65311,
    subTopicId: 'g6-u5-sub3',
    contextTitle: 'Suyun ve Buzun Yoğunluğu Canlılar İçin Önemi',
    scenario: 'Bir miktar buz su dolu kapta yüzmektedir (Buzun yoğunluğu 0,9 g/cm³, suyun yoğunluğu 1 g/cm³).',
    questionPrompt: 'Buna göre buz ve su ile ilgili verilen aşağıdaki ifadelerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Buz, suyun katı hâlidir.' },
      { key: 'B', text: 'Su buza dönüşürken kimliği değişmez (fiziksel değişimdir).' },
      { key: 'C', text: 'Suyun yoğunluğu buzun yoğunluğundan küçüktür.' },
      { key: 'D', text: 'Eşit kütledeki su ve buzdan, buzun hacmi daha büyüktür.' }
    ],
    correctAnswer: 'C',
    explanation: 'Buz su üzerinde yüzdüğüne göre buzun yoğunluğu suyun yoğunluğundan küçüktür (d_buz < d_su). C seçeneğinde "suyun yoğunluğu küçüktür" denilerek ters ifade kullanılmıştır.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Suyun Özel Genleşme Nitelikleri',
    theme: 'Suyun ve Buzun Yoğunluğu'
  }
];

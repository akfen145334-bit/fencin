import { LgsQuestion } from '../../../types/curriculum';

// ============================================================================
// 6. ÜNİTE: ENERJİ DÖNÜŞÜMLERİ VE ÇEVRE BİLİMİ - MEBİ LGS SORU HAVUZU
// (Bursa, Kahramanmaraş, Sivas, Yalova ÖDM Beceri Temelli Soruları Dahil)
// ============================================================================

export const sebahattinEnerjiCevreQuestions: LgsQuestion[] = [
  // Subtopic 1: Besin Zinciri ve Enerji Akışı
  {
    id: 6101,
    subTopicId: 'g8-u6-sub1',
    contextTitle: 'Ekoloji Besin Piramidinde Canlı Basamakları',
    scenario: 'Bir ekoloji piramidinde bulunan canlılar K, L, M, N ve O harfleriyle gösterilmiştir:\n• K: En alt basamaktaki canlı (Üreticiler)\n• L: Birinci dereceden tüketiciler (Otçullar)\n• M: İkinci dereceden tüketiciler (Etçiller)\n• N: Tepe yırtıcı (Üçüncü dereceden tüketici)\n• O: Tüm basamakların yanında yer alan ayrıştırıcılar (Saprofitler)',
    questionPrompt: 'Ekoloji piramidi ile ilgili aşağıda yapılan yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'K canlısı birinci dereceden tüketicidir.' },
      { key: 'B', text: 'O canlısı hem üreticilerin hem tüketicilerin organik atıklarıyla beslenen ayrıştırıcıdır.' },
      { key: 'C', text: 'L canlısı ikinci dereceden tüketicidir.' },
      { key: 'D', text: 'N canlısı kendi besinini kendisi üreten üreticidir.' }
    ],
    correctAnswer: 'B',
    explanation: 'Piramidin tabanında üreticiler (K), üzerinde otçullar (L), etçiller (M) ve tepe avcılar (N) yer alır. Her basamaktan madde alan O canlısı ise organik atıkları ve leşleri parçalayan ayrıştırıcı (saprofit) canlılardır.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Besin Piramidi Basamakları',
    theme: 'Ekoloji Piramidi ve Enerji Akışı'
  },

  {
    id: 6102,
    subTopicId: 'g8-u6-sub1',
    contextTitle: 'Tarım İlacının Besin Zincirine Etkisi ve Kurbağalar',
    scenario: 'Mısır ➔ Tırtıl ➔ Kurbağa ➔ Yılan ➔ Şahin besin zincirinin bulunduğu bir tarım alanında kullanılan bir böcek ilacının erkek kurbağaların üreme hormonunu baskıladığı ve kurbağaların neslinin tükenmesine neden olduğu belirlenmiştir.',
    questionPrompt: 'Kurbağaların ortamdan yok olması durumunda besin zincirindeki diğer canlıların sayısal değişimi hakkında hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Tırtıllarla beslenen kurbağa kalmadığı için tırtıl sayısı aşırı artar ve mısır bitkileri büyük zarar görür.' },
      { key: 'B', text: 'Yılanların besin bulması kolaylaşır ve yılan sayısı artar.' },
      { key: 'C', text: 'Mısır bitkisi üretimi rekor seviyede artış gösterir.' },
      { key: 'D', text: 'Şahin sayısı kurbağaların yok olmasından hiçbir şekilde etkilenmez.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kurbağa popülasyonu çökerse avcısı olan tırtıllar hızla çoğalır. Tırtıl sayısının artması mısır bitkilerinin tüketilmesine yol açar. Aynı zamanda kurbağa ile beslenen yılanların besini azalacağı için yılanlar ve dolaylı olarak şahinler olumsuz etkilenir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Besin Zincirinde Denge Bozulması',
    theme: 'Besin Ağı Dinamikleri'
  },

  {
    id: 6103,
    subTopicId: 'g8-u6-sub1',
    contextTitle: 'Besin Piramidinde Biyolojik Birikim (Zehirli Madde)',
    scenario: 'Bir besin piramidinin basamaklarında yer alan P, R, S ve T canlılarının dokularında biriken toplam zehirli madde miktarları grafikte verilmiştir: P canlısında zehir miktarı en fazla, S canlısında ise en azdır.',
    questionPrompt: 'Bu canlıların besin piramidindeki konumları ve özellikleri ile ilgili hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'S basamağındaki canlılar kloroplast taşıyan üreticilerdir.' },
      { key: 'B', text: 'T basamağındaki canlılar doğrudan üreticilerle beslenen otçullardır.' },
      { key: 'C', text: 'P basamağındaki canlıların biyokütlesi ve birey sayısı ekosistemde en fazladır.' },
      { key: 'D', text: 'Zehirli madde birikimi üreticiden son tüketiciye doğru gidildikçe katlanarak artar.' }
    ],
    correctAnswer: 'C',
    explanation: 'Biyolojik birikim (zehir) besin piramidinde aşağıdan yukarıya doğru artar. Dolayısıyla dokusunda en çok zehir bulunan P canlısı piramidin en tepesindedir (tepe tüketici). Tepe tüketicilerin birey sayısı ve toplam biyokütlesi en azdır, en fazla olan tabandaki üreticilerdir (C yanlıştır).',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Biyolojik Birikim Analizi',
    theme: 'Besin Piramidinde Biyolojik Birikim'
  },

  {
    id: 6104,
    subTopicId: 'g8-u6-sub1',
    contextTitle: 'Dut Yaprağı, Tırtıl, Keklik, Tilki, Şahin Besin Zinciri',
    scenario: 'Dut yaprağı ➔ Tırtıl ➔ Keklik ➔ Tilki ➔ Şahin besin zincirinde ekosistemdeki dengeler gözlemlenmektedir.',
    questionPrompt: 'Aşağıdaki durumlardan hangisi besin zincirindeki üretici canlı (Dut yaprağı) sayısının zamanla azalmasına doğrudan yol açabilir?',
    options: [
      { key: 'A', text: 'Tilkilerin aşırı avlanması veya göç etmesi (Keklik artar, tırtıl azalır, yaprak artar).' },
      { key: 'B', text: 'Kekliklerin avcılar tarafından aşırı avlanması sonucu tırtıl sayısının kontrolsüzce artması.' },
      { key: 'C', text: 'Tırtılların tarım zararlısı olarak ilaçlanıp öldürülmesi.' },
      { key: 'D', text: 'Şahinlerin tilkileri daha çok avlaması.' }
    ],
    correctAnswer: 'B',
    explanation: 'Keklik sayısı azalırsa tırtılları avlayan canlı sayısı azalır ve tırtıl popülasyonu patlama yapar. Çoğalan tırtıllar daha çok dut yaprağı tüketeceğinden üretici canlı sayısı hızla azalır.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Ekolojik Neden-Sonuç Döngüsü',
    theme: 'Besin Zincirinde Popülasyon Değişimi'
  },

  {
    id: 6105,
    subTopicId: 'g8-u6-sub1',
    contextTitle: 'Su Ekosisteminde Besin Ağı ve Enerji İletimi',
    scenario: 'Görselde bir deniz ekosistemindeki besin ağı modellenmiştir:\n• Üreticiler: Fitoplankton ve deniz yosunları\n• Birincil Tüketiciler: Zooplankton, deniz salyangozu, midye\n• İkincil Tüketiciler: Balık, ahtapot, deniz yıldızı\n• Tepe Tüketiciler: Martı, köpek balığı, insan',
    questionPrompt: 'Bu besin ağı ile ilgili olarak aşağıdaki bilgilerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Fitoplankton ve yosun besin ağında bulunan üretici canlılardır.' },
      { key: 'B', text: 'Deniz salyangozu ve zooplanktonlar birinci dereceden tüketici canlılardır.' },
      { key: 'C', text: 'Biyolojik birikimin (zehirli kimyasal) en fazla olduğu canlı piramidin tepesindeki insandır.' },
      { key: 'D', text: 'Yosundan deniz salyangozuna aktarılan enerji, denizyıldızından köpekbalığına aktarılan enerjiden azdır.' }
    ],
    correctAnswer: 'D',
    explanation: 'Besin zincirinde enerjinin yalnızca yaklaşık %10\'u bir üst basamağa aktarılır, %90\'ı yaşam faaliyetlerinde ısı olarak kaybolur. Bu nedenle alt basamaklardaki enerji aktarımı (üreticiden birincil tüketiciye), üst basamaklardaki enerji aktarımından (ikincilden üçüncüle) ÇOK DAHA FAZLADIR. D seçeneğindeki "daha azdır" ifadesi yanlıştır.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Besin Ağında Enerji Kaybı Prensibi',
    theme: 'Ekosistemde Enerji Akışı'
  },

  {
    id: 6106,
    subTopicId: 'g8-u6-sub1',
    contextTitle: 'Ovacık Ekosisteminde Kulaklı Orman Baykuşu Popülasyonu',
    scenario: 'Tunceli Ovacık ilçesindeki bir ekosistemde şu besin zinciri bulunmaktadır:\nLahana (Üretici) ➔ Tavşan (1. Tüketici) ➔ Baykuş (2. Tüketici) ➔ Kurt (3. Tüketici)\nKış şartlarının aşırı sert geçmesi nedeniyle ilçede baykuş popülasyonunda hızlı bir azalma gözlemlenmiştir.',
    questionPrompt: 'Ovacık ilçesinde yaşanan bu duruma bağlı olarak;\nI. Lahana sayısı zamanla azalır.\nII. Tavşan sayısı avcısı azaldığı için zamanla artar.\nIII. Kurt sayısı doğrudan besin bulamadığı için hemen anında artar.\nyargılarından hangileri doğrudur?',
    options: [
      { key: 'A', text: 'Yalnız II' },
      { key: 'B', text: 'I ve II' },
      { key: 'C', text: 'I ve III' },
      { key: 'D', text: 'I, II ve III' }
    ],
    correctAnswer: 'B',
    explanation: 'Baykuş sayısı azaldığında, baykuşların avladığı tavşanlar üzerindeki av baskısı kalkar ve tavşan popülasyonu artar (II doğru). Artan tavşanlar daha fazla lahana tüketeceği için lahana sayısı zamanla azalır (I doğru). Kurtların besini tavşan da olabildiğinden kurt popülasyonu doğrudan "anında" artışa geçmez.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Popülasyon Dalgalanmaları',
    theme: 'Besin Zincirinde Denge Bozulması'
  },

  {
    id: 6107,
    subTopicId: 'g8-u6-sub1',
    contextTitle: 'Sebze Bahçesinde Biyolojik Mücadele ve Besin Zinciri',
    scenario: 'Mehmet, bahçesinde yetiştirdiği domates ve maydanoz yapraklarının tırtıllar tarafından yendiğini görünce bahçeye tavuk salmıştır. Bir süre sonra tırtıllar bitmiş ancak tavuklar domatesleri yemeye başlamıştır. Bir gün bahçeye tilki gelerek tavukları avlamıştır.',
    questionPrompt: 'Bu olayla ilgili oluşturulan ekolojik değerlendirmelerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Bahçedeki besin zinciri "Maydanoz ➔ Tırtıl ➔ Tavuk ➔ Tilki" şeklinde kurulabilir.' },
      { key: 'B', text: 'Tavuklar hem bitkisel hem hayvansal beslenen hepçil tüketicilerdir.' },
      { key: 'C', text: 'Mehmet tavuk ve sebze yetiştirdiği için ekolojik anlamda bir üretici canlıdır.' },
      { key: 'D', text: 'Tırtıllar üretici bitkiyle beslenen otçul (birincil tüketici) canlılardır.' }
    ],
    correctAnswer: 'C',
    explanation: 'Ekolojide "üretici canlı" kavramı, fotosentez veya kemosentez yaparak inorganik maddelerden organik besin üreten canlıları (bitkiler, algler, siyanobakteriler) ifade eder. İnsanlar (Mehmet) tarım yapsalar dahi biyolojik olarak tüketici (heterotrof) canlı sınıfındadır.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Ekolojik Rol ve Kavram Ayrımı',
    theme: 'Besin Zincirinde Canlı Rolleri'
  },

  {
    id: 6108,
    subTopicId: "g8-u6-sub1",
    contextTitle: "Besin Piramidinde Biyokütle ve %10 Enerji Yasası (Bursa ÖDM)",
    scenario: "Bir ekosistemde yer alan üretici bitki, çekirge, kurbağa ve yılan canlılarından oluşan besin piramidi inceleniyor. Üreticilerin fotosentezle depoladığı toplam kullanılabilir kimyasal enerji 50.000 kJ olarak ölçülmüştür.",
    questionPrompt: "Besin piramidinde üreticiden son tüketici yılana doğru gidildikçe meydana gelen değişimlerle ilgili hangisi yanlıştır?",
    options: [
      { key: "A", text: "Kurbağa basamağına aktarılan enerji miktarı 500 kJ, yılan basamağına aktarılan enerji miktarı ise 50 kJ'dir." },
      { key: "B", text: "Tabandan tavana doğru toplam biyokütle (canlı kütlesi) ve birey sayısı genellikle azalır." },
      { key: "C", text: "Yılanın dokularında biriken biyolojik birikim (tarım ilacı, cıva vb. zehir konsantrasyonu) üretici bitkidekinden çok daha fazladır." },
      { key: "D", text: "Enerjinin her basamakta %90'ı bir üst basamağa aktarılırken sadece %10'u yaşamsal faaliyetlerde ısı olarak kaybolur." }
    ],
    correctAnswer: "D",
    explanation: "Enerji akışında %10 kuralı geçerlidir: Enerjinin yaklaşık %90'ı o canlının solunumu, boşaltımı, metabolizması ve çevreye ısı olarak yayılmasıyla kaybolur; yalnızca yaklaşık %10'luk kısmı bir üst trofik düzeye aktarılır. Bu nedenle D şıkkındaki ifade tam tersi söylenerek kurgulanmış büyük bir hatadır.",
    skillTag: "Enerji Piramidi Analizi",
    cognitiveLevel: "%10 Enerji Kuralı ve Biyokütle",
    theme: "Besin Piramidinde Enerji Akışı"
  },

  {
    id: 6109,
    subTopicId: "g8-u6-sub1",
    contextTitle: "Besin Ağında Bir Türün Azalmasının Dalga Etkisi (Kahramanmaraş ÖDM)",
    scenario: "Bir göl ekosistemindeki besin zinciri: Fitoplankton -> Zooplankton -> Küçük Balık -> Turna Balığı (Büyük Balık) -> Balıkçıl Kuş şeklindedir. Göle kaçak avcılar tarafından uygulanan aşırı avcılık nedeniyle turna balığı popülasyonu aniden çok büyük oranda yok edilmiştir.",
    questionPrompt: "Turna balıklarının azalmasından hemen sonra göl ekosistemindeki diğer canlı popülasyonlarında gerçekleşmesi beklenen ilk değişimler aşağıdakilerden hangisinde doğru verilmiştir?",
    options: [
      { key: "A", text: "Küçük balık sayısı artarken, balıkçıl kuş sayısı azalır ve zooplankton sayısı hızla düşer." },
      { key: "B", text: "Küçük balık sayısı azalır, fitoplankton sayısı artar." },
      { key: "C", text: "Balıkçıl kuş sayısı artarken göldeki tüm canlıların biyokütlesi çoğalır." },
      { key: "D", text: "Turna balığının azalması sadece balıkçıl kuşları etkiler, su altındaki canlıları etkilemez." }
    ],
    correctAnswer: "A",
    explanation: "Turna balığı küçük balıklarla beslenir ve balıkçıl kuşların avıdır. Turna balığı azalınca üzerindeki av baskısı kalkan küçük balık popülasyonu hızla çoğalır. Küçük balıklar çoğalınca onların besini olan zooplanktonları aşırı tüketirler ve zooplanktonlar hızla düşer. Turna balığı bulamayan balıkçıl kuşlar ise besinsiz kalıp azalır.",
    skillTag: "Ekosistem Popülasyon Dengesi",
    cognitiveLevel: "Trofik Kaskad ve Besin Ağı",
    theme: "Besin Zincirinde Canlı Popülasyonları"
  },

  {
    id: 6110,
    subTopicId: "g8-u6-sub1",
    contextTitle: "Kara ve Su Ekosisteminde Biyolojik Birikim Analizi (Sivas ÖDM)",
    scenario: "Tarım alanlarında zararlılara karşı kullanılan ve suda çözünmeyen DDT böcek ilacı yağmur sularıyla akarsuya ve oradan göle karışmıştır. Bilim insanları göldeki canlıların dokularındaki DDT derişimini ölçmüş ve K, L, M, N canlılarında sırasıyla 0,04 ppm, 25 ppm, 0,5 ppm ve 2 ppm olarak tespit etmiştir.",
    questionPrompt: "Bu verilere göre canlıların üreticiden son tüketiciye doğru besin piramidindeki dizilimi aşağıdakilerden hangisidir?",
    options: [
      { key: "A", text: "K -> M -> N -> L" },
      { key: "B", text: "L -> N -> M -> K" },
      { key: "C", text: "K -> L -> M -> N" },
      { key: "D", text: "M -> N -> K -> L" }
    ],
    correctAnswer: "A",
    explanation: "Biyolojik birikim (zehirli madde derişimi) besin zincirinin en alt basamağındaki üreticilerde en az, besin piramidinin en tepesindeki son tüketicide en fazladır. Ölçülen değerler küçükten büyüğe: K (0,04 ppm) < M (0,5 ppm) < N (2 ppm) < L (25 ppm) olduğundan besin piramidi sırası K -> M -> N -> L şeklindedir.",
    skillTag: "Veri Analizi ve Tablo Yorumlama",
    cognitiveLevel: "Biyolojik Birikim (Biyoakümülasyon)",
    theme: "Zehirli Madde Birikimi"
  },

  {
    id: 6111,
    subTopicId: "g8-u6-sub1",
    contextTitle: "Ayrıştırıcıların (Saprofitler) Ekolojik Rolü (Yalova ÖDM)",
    scenario: "Bir fen öğretmeni tahtaya şu soruyu yazar: \"Eğer Dünya üzerindeki tüm ayrıştırıcı (çürükçül) canlılar (bazı bakteri ve mantarlar) bir anda yok olsaydı ekosistemde ilk olarak ne gerçekleşirdi?\"",
    questionPrompt: "Öğretmenin sorusuna öğrencilerin verdiği aşağıdaki yanıtlardan hangisi en kapsamlı ve bilimsel açıklamadır?",
    options: [
      { key: "A", text: "Organik atıklar ve ölü organizmalar ayrıştırılamaz, inorganik madde döngüsü (karbon, azot vb.) durur ve üreticiler mineral yetersizliğinden fotosentez yapamaz hale gelerek tüm besin zinciri çökerdi." },
      { key: "B", text: "Sadece etçil hayvanlar besin bulamaz, üretici bitkiler fotosentez yapmaya kesintisiz devam ederdi." },
      { key: "C", text: "Havadaki karbondioksit oranı hızla artar ve fotosentez hız rekoru kırardı." },
      { key: "D", text: "Yalnızca topraktaki su miktarı azalarak kuraklık başlardı." }
    ],
    correctAnswer: "A",
    explanation: "Ayrıştırıcılar besin zincirinin her basamağında yer alır. Ölü bitki ve hayvan kalıntılarını parçalayarak organik maddeleri inorganik minerallere dönüştürür ve toprağa kazandırır. Ayrıştırıcılar olmasa mineraller toprağa dönemez, üreticiler beslenemez ve tüm besin piramidi yok olur.",
    skillTag: "Ekolojik Muhakeme",
    cognitiveLevel: "Ayrıştırıcıların İşlevi",
    theme: "Madde Döngüsü ve Ayrıştırıcılar"
  },

  {
    id: 6112,
    subTopicId: "g8-u6-sub1",
    contextTitle: "Ototrof ve Heterotrof Canlıların Güneş Enerjisi İlişkisi (Bursa ÖDM)",
    scenario: "Ekosistemde gerçekleşen enerji dönüşümlerinde ana enerji kaynağı Güneş'tir. Kloroplast organeline ve klorofil pigmentine sahip ototrof canlılar bu ışık enerjisini kimyasal bağ enerjisine çevirir. Heterotrof canlılar ise bu enerjiyi besin yoluyla doğrudan veya dolaylı olarak alır.",
    questionPrompt: "Buna göre aşağıdaki eşleştirmelerden hangisinde verilen canlının beslenme tipi ve enerjiyi elde etme yolu yanlış belirtilmiştir?",
    options: [
      { key: "A", text: "Şapkalı Mantar - Üretici: Kökleriyle topraktan aldığı su ve minerallerle güneş ışığını kullanarak fotosentez yapar." },
      { key: "B", text: "Mavi-Yeşil Alg (Siyanobakteri) - Üretici: Sitoplazmasındaki klorofille güneş enerjisini kimyasal enerjiye çevirir." },
      { key: "C", text: "Çekirge - Birincil Tüketici (Otçul): Bitkisel dokuları tüketerek üreticilerin depoladığı besinden enerji sağlar." },
      { key: "D", text: "Baykuş - İkincil/Üçüncül Tüketici (Etçil): Otçul ve diğer küçük hayvanları avlayarak kimyasal enerjiyi bünyesine katar." }
    ],
    correctAnswer: "A",
    explanation: "Şapkalı mantarlar kesinlikle bitki veya üretici DEĞİLDİR! Klorofilleri ve kloroplastları yoktur, fotosentez yapamazlar. Mantarlar tüketici (heterotrof) ve ayrıştırıcı canlılardır; organik maddeleri dış ortamdan hazır olarak alırlar.",
    skillTag: "Canlıların Sınıflandırılması",
    cognitiveLevel: "Ototrof Heterotrof Ayrımı",
    theme: "Besin Zincirinde Canlı Tipleri"
  },

  // Subtopic 2: Enerji Dönüşümleri (Fotosentez ve Solunum)
  {
    id: 6201,
    subTopicId: 'g8-u6-sub2',
    contextTitle: 'Şeffaf ve Işık Geçirmeyen Poşetle Bitki Fotosentez Deneyi',
    scenario: 'Özdeş K, L ve M saksı bitkilerinden K tamamen açık bırakılmış, L\'nin iki yaprağı şeffaf poşetle, M\'nin ise yaprakları ışık geçirmeyen siyah poşetle kapatılmıştır. Eşit sulanıp ışıkta 2 hafta bekletildiklerinde kütle artışı K > M > L şeklinde kaydedilmiştir.',
    questionPrompt: 'Yapılan deneyle ilgili aşağıdaki yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'L ve M bitkileri kullanılarak ışık miktarının fotosenteze etkisi belirlenemez.' },
      { key: 'B', text: 'M bitkisindeki poşet şeffaf olsaydı fotosentez yapabilen yaprak sayısı artacağı için kütle artışı daha fazla olurdu.' },
      { key: 'C', text: 'K bitkisinin kütle artışının sebebi sadece yapraklarının su kaybetmesidir.' },
      { key: 'D', text: 'Siyah poşet yapraklarda solunumu tamamen durdurmuştur.' }
    ],
    correctAnswer: 'B',
    explanation: 'M bitkisinde ışık almayan yaprak fotosentez yapamamış ve besin üretememiştir. Eğer poşet şeffaf olsaydı o yaprak da ışık alıp fotosentez yapacak ve bitkinin kuru kütle artışı daha yüksek olacaktı.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Kontrollü Deney ve Kütle Artışı',
    theme: 'Fotosentezde Işık Gereksinimi'
  },

  {
    id: 6202,
    subTopicId: 'g8-u6-sub2',
    contextTitle: 'Etil Alkol ve Laktik Asit Fermantasyonu Balon Deneyi',
    scenario: 'İçinde şekerli su bulunan iki kapalı erlene fermantasyon yapan K ve L canlıları konulmuş ve ağızlarına esnek balon bağlanmıştır:\n• 1. kapta (K canlısı) balon hiç şişmemiştir (Laktik asit fermantasyonu: Besin -> Laktik asit + ATP).\n• 2. kapta (L canlısı) balon gaz birikimiyle şişmiştir (Etil alkol fermantasyonu: Besin -> Etil alkol + CO2 + ATP).',
    questionPrompt: 'Deney sonuçlarına göre aşağıdaki yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'K canlısı etil alkol fermantasyonu yapmıştır.' },
      { key: 'B', text: 'K canlısının kabında besin miktarı zamanla artar.' },
      { key: 'C', text: '2. deneyde balonun şişmesinin nedeni fermantasyon sonucu açığa çıkan karbondioksit (CO2) gazıdır.' },
      { key: 'D', text: 'L canlısı solunumunda oksijen gazı tüketmiştir.' }
    ],
    correctAnswer: 'C',
    explanation: 'Etil alkol fermantasyonunda yan ürün olarak karbondioksit (CO2) gazı açığa çıkar ve bu gaz balonu şişirir. Laktik asit fermantasyonunda ise gaz çıkışı olmaz, bu yüzden balon şişmez.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Fermantasyon Ürünleri Ayrımı',
    theme: 'Fermantasyon Türleri ve Gaz Çıkışı'
  },

  {
    id: 6203,
    subTopicId: 'g8-u6-sub2',
    contextTitle: 'Fotosentez Hızı ve Sıcaklık Değişkeni Grafiği',
    scenario: 'Bir araştırmacının fotosentez hızını etkileyen bir değişkene bağlı olarak çizdiği grafik başlangıçta sıfırdan yükselerek yaklaşık 25-35 °C arasında tepe noktasına (optimum) ulaşmakta, ardından yüksek değerlerde enzimlerin yapısının bozulması nedeniyle sıfıra düşmektedir (çan eğrisi).',
    questionPrompt: 'Bu grafikte soru işareti yerine yazılması gereken değişken hangisidir?',
    options: [
      { key: 'A', text: 'Sıcaklık' },
      { key: 'B', text: 'Su miktarı' },
      { key: 'C', text: 'Işık şiddeti' },
      { key: 'D', text: 'Karbondioksit miktarı' }
    ],
    correctAnswer: 'A',
    explanation: 'Su, CO2 ve ışık şiddeti arttıkça fotosentez hızı belirli bir doygunluk noktasına kadar artar ve sonra sabit kalır. Ancak sıcaklık arttıkça önce artıp 35 °C civarında maksimuma ulaştıktan sonra enzimlerin denatüre olmasıyla hızla sıfıra düşen tek faktör sıcaklıktır.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Enzim ve Sıcaklık Eğrisi',
    theme: 'Fotosentez Hızını Etkileyen Faktörler'
  },

  {
    id: 6204,
    subTopicId: 'g8-u6-sub2',
    contextTitle: 'Ağaçlarda Fotosentez ve Solunum Hız Grafikleri (Yaz vs Kış)',
    scenario: 'I numaralı grafikte gün doğumundan batımına kadar fotosentez hızı solunum hızından çok yüksektir (24 saat solunum devam eder). II numaralı grafikte kış mevsiminde yaprak dökmeyen bir iğne yapraklıda fotosentez çok düşüktür. III numaralı grafikte ise fotosentez sıfırdır, sadece solunum devam etmektedir.',
    questionPrompt: 'Buna göre fotosentez ve solunum hızları ile ilgili hangisi doğrudur?',
    options: [
      { key: 'A', text: 'I numaralı grafik, ladin ağacının yaz mevsimindeki fotosentez ve solunum hızını gösteriyor olabilir.' },
      { key: 'B', text: 'Bitkiler sadece gündüzleri solunum yapar.' },
      { key: 'C', text: 'Fotosentez hızı daima solunum hızından küçük olmalıdır.' },
      { key: 'D', text: 'III numaralı grafikte fotosentezin sıfır olması bitkinin öldüğünü kanıtlar.' }
    ],
    correctAnswer: 'A',
    explanation: 'Yaz mevsiminde fotosentez hızı gündüz saatlerinde solunum hızının katlarca üzerine çıkar (I). Solunum ise canlılığın devamı için 24 saat boyunca kesintisiz sürer.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Günlük Biyolojik Ritim',
    theme: 'Fotosentez vs Solunum Dengesi'
  },

  {
    id: 6205,
    subTopicId: 'g8-u6-sub2',
    contextTitle: 'Farklı Renklerde Işık ve Fotosentez Hızı İlişkisi',
    scenario: 'Bir bitkinin klorofil moleküllerinin farklı ışıktaki yansıtma oranları şöyledir:\n• Mor ışık: %15 yansıtır (%85 soğurur)\n• Kırmızı ışık: %18 yansıtır (%82 soğurur)\n• Turuncu ışık: %58 yansıtır (%42 soğurur)\n• Yeşil ışık: %92 yansıtır (%8 soğurur)',
    questionPrompt: 'Klorofilin ışığı soğurma oranları dikkate alındığında fotosentez hızı hakkında hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Klorofil en çok yeşil ışığı soğurduğu için fotosentez en hızlı yeşil ışıkta gerçekleşir.' },
      { key: 'B', text: 'Mor ve kırmızı ışıkta soğurma oranı çok yüksek olduğu için fotosentez hızı en yüksektir; yeşil ışık büyük oranda yansıtıldığı için fotosentez hızı en düşüktür.' },
      { key: 'C', text: 'Işığın rengi fotosentez hızını hiçbir şekilde etkilemez.' },
      { key: 'D', text: 'Turuncu ışıkta fotosentez hızı mor ışıktan fazladır.' }
    ],
    correctAnswer: 'B',
    explanation: 'Klorofil yeşil rengi yansıttığı için yeşil görünür ve yeşil ışıkta soğurma minimumdur (%8), bu nedenle fotosentez en yavaştır. Kırmızı ve mor ışık ise klorofil tarafından en fazla soğurulan ışıklardır (%80+) ve fotosentez hızı buralarda maksimumdur.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Işık Dalga Boyu ve Soğurma',
    theme: 'Işığın Rengi ve Fotosentez'
  },

  {
    id: 6206,
    subTopicId: 'g8-u6-sub2',
    contextTitle: 'Elodea Su Bitkisinde Sıcaklık ve Oksijen Üretimi',
    scenario: 'Işıklı bir ortamda su dolu behere konulan Elodea bitkisi deney tüpünün altına yerleştirilmiş ve başlangıçta 0 °C\'de tutulmuştur. Ortam sıcaklığı yavaş yavaş 60 °C\'ye kadar çıkarılmış ve su içindeki gaz kabarcıklarının (oksijen) çıkış hızı gözlemlenmiştir.',
    questionPrompt: 'Deney düzeneğinin sıcaklığı 0 °C\'den 60 °C\'ye çıkarıldığında oksijen üretim hızının sıcaklıkla değişim grafiği hangisidir?',
    options: [
      { key: 'A', text: 'Sıcaklık arttıkça oksijen üretim hızı sürekli doğrusal olarak artar.' },
      { key: 'B', text: '0 °C\'den yaklaşık 25-30 °C\'ye kadar artarak tepe noktasına ulaşır; 35 °C\'den sonra enzimlerin yapısı bozulduğu için hızla azalarak durur (çan eğrisi).' },
      { key: 'C', text: 'Sıcaklık 0 °C iken oksijen üretimi en fazladır, ısıtıldıkça azalır.' },
      { key: 'D', text: 'Sıcaklık değişimi fotosentez ve oksijen çıkış hızını hiç etkilemez.' }
    ],
    correctAnswer: 'B',
    explanation: 'Fotosentez enzimatik bir kimyasal reaksiyondur. 0 °C civarında enzimler inaktif olduğundan fotosentez yavaştır. Optimum sıcaklık olan 25-30 °C\'ye kadar hız artar. Ancak 35-40 °C\'nin üzerinde enzimlerin protein yapısı denatüre olduğu (bozulduğu) için fotosentez hızı aniden düşer ve 50-60 °C\'de tamamen durur.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Enzim ve Sıcaklık Değişkeni',
    theme: 'Fotosentez Hızını Etkileyen Faktörler'
  },

  {
    id: 6207,
    subTopicId: 'g8-u6-sub2',
    contextTitle: 'Yaprakta Işık ve Nişasta Oluşumu İyot Deneyi',
    scenario: 'Merve, yeterince ışık alan saksı bitkisinin bir yaprağının bir kısmını ışık geçirmeyen siyah bantla kapatıp 3 gün bekletmiştir. Ardından yaprağı koparıp etil alkolde kaynatarak klorofillerini çıkarmış ve üzerine iyot çözeltisi damlatmıştır. Bantla kapatılan alanın sarı/açık renk kaldığı, ışık alan yerlerin ise koyu mavi-mor renk aldığı görülmüştür.',
    questionPrompt: 'Merve’nin yaptığı bu deneyle ilgili olarak;\nI. Fotosentezin gerçekleşmesi için ışığa ihtiyaç vardır.\nII. Bitki fotosentez sonucu nişasta (besin) üretmiştir.\nIII. Bantla kapatılan bölgede fotosentez gerçekleşmemiştir.\nyorumlarından hangileri doğrudur? (İyot, nişasta varlığında mavi-mor renk verir.)',
    options: [
      { key: 'A', text: 'Yalnız I' },
      { key: 'B', text: 'I ve II' },
      { key: 'C', text: 'II ve III' },
      { key: 'D', text: 'I, II ve III' }
    ],
    correctAnswer: 'D',
    explanation: 'Siyah bant yaprağın o bölgesinin ışık almasını engellemiştir. Işık almayan bölgede fotosentez gerçekleşmediğinden nişasta üretilememiş ve iyot rengi mavi-mora dönüşmemiştir. Işık alan bölgelerde ise fotosentezle üretilen glikoz nişastaya çevrilmiş ve iyotla mor renk vermiştir. Her 3 öncül de deneyin kanıtladığı kesin doğrulardır.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Fotosentez Ürünü Belirteç Deneyi',
    theme: 'Fotosentez ve Nişasta Testi'
  },

  {
    id: 6208,
    subTopicId: 'g8-u6-sub2',
    contextTitle: 'Renkli Işık Filtreleri ile Bitki Gelişimi Deneyi',
    scenario: 'Güneş ışığı altında bulunan özdeş üç saksı bitkisinin üzerine sırasıyla Mor Filtre, Kırmızı Filtre ve Yeşil Filtre yerleştirilmiştir. Filtreler yalnızca kendi rengindeki ışığın geçmesine izin verir. Bitkiler eşit sulanarak bir ay boyunca gözlemlenmiştir.',
    questionPrompt: 'Belirli bir süre sonunda bitkilerle ilgili yapılan değerlendirmelerden hangisi yanlıştır?',
    options: [
      { key: 'A', text: 'Yeşil filtre altındaki bitki fotosentez yapamamış veya çok az yaparak en zayıf gelişimi göstermiştir.' },
      { key: 'B', text: 'Kırmızı ve mor filtre altındaki bitkilerin fotosentez hızları yeşil filtredekinden çok daha fazladır.' },
      { key: 'C', text: 'Yeşil filtre klorofilin en çok sevdiği ışık olduğu için bu bitki diğerlerinden daha hızlı büyür.' },
      { key: 'D', text: 'Bitkilerdeki gelişim farklılıklarının nedeni klorofilin soğurduğu ışık renklerinin fotosentez hızını değiştirmesidir.' }
    ],
    correctAnswer: 'C',
    explanation: 'Klorofil yeşil ışığı soğurmaz, neredeyse tamamını (%90+) yansıtır veya geçirir. Bu yüzden yeşil ışık altında fotosentez minimum seviyededir. Yeşil filtre altındaki bitki yeterli besin üretemez ve yavaş gelişir. C seçeneğindeki "daha hızlı büyür" iddiası yanlıştır.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Işık Rengi ve Bitki Gelişimi',
    theme: 'Işık Filtreleri ve Fotosentez'
  },

  {
    id: 6209,
    subTopicId: "g8-u6-sub2",
    contextTitle: "Farklı Renkteki Işıkların Fotosentez Hızına Etkisi Deneyi (Bursa ÖDM)",
    scenario: "Özdeş Elodea su bitkileri aynı sıcaklıktaki (25°C) özdeş cam kaplara su ve eşit miktarda maden suyu (CO2 kaynağı) konularak yerleştirilmiştir. Kaplar sırasıyla Kırmızı, Yeşil, Mavi ve Mor renkli özdeş ışık kaynakları ile eşit mesafeden aydınlatılmış ve bitkilerden çıkan oksijen gaz kabarcığı sayıları dakikada bir sayılmıştır.",
    questionPrompt: "Bu deneyde tüplerdeki kabarcık sayılarının karşılaştırılması ile ilgili aşağıdakilerden hangisi doğrudur?",
    options: [
      { key: "A", text: "Klorofil yeşil ışığı büyük oranda yansıttığı için en az kabarcık yeşil ışık altında, en fazla kabarcık ise mor ve kırmızı/mavi ışık altında oluşur." },
      { key: "B", text: "Yeşil bitkiler yeşil rengi sevdikleri için en hızlı fotosentez yeşil ışık altında gerçekleşir." },
      { key: "C", text: "Kabarcık sayısı bağımsız değişken, ışığın rengi ise kontrol edilen değişkendir." },
      { key: "D", text: "Işık rengi fotosentez hızını etkilemez, yalnızca sıcaklık fotosentez hızını belirler." }
    ],
    correctAnswer: "A",
    explanation: "Klorofil pigmenti kırmızı, mor ve mavi ışığı yüksek oranda soğurur (absorbe eder) ve fotosentez hızı en yüksek olur. Yeşil ışığı ise büyük oranda yansıttığı için yeşil ışıkta fotosentez en yavaş gerçekleşir ve en az gaz kabarcığı (oksijen) üretilir.",
    skillTag: "Deney Tasarımı ve Işık Spektrumu",
    cognitiveLevel: "Fotosentez Hızı ve Işık Dalga Boyu",
    theme: "Işık Rengi ve Fotosentez"
  },

  {
    id: 6210,
    subTopicId: "g8-u6-sub2",
    contextTitle: "Kireç Suyu (KOH) ve Kapalı Fanus Deneyi (Kahramanmaraş ÖDM)",
    scenario: "Hava geçirmeyen şeffaf cam bir fanusun içine saksı bitkisi, yanan bir mum ve bir kap kireç suyu konulup aydınlık bir ortama bırakılıyor. (Kireç suyu ortamdaki karbondioksiti tutarak bulanır; karbondioksit tutulunca ortamda serbest CO2 kalmaz).",
    questionPrompt: "Bir süre sonra düzenekte gerçekleşen olaylar ile ilgili aşağıdakilerden hangisi söylenebilir?",
    options: [
      { key: "A", text: "Kireç suyu ortamdaki karbondioksiti tuttuğu için bitki fotosentez yapamaz hale gelir ve mum oksijensizlikten söner." },
      { key: "B", text: "Kireç suyu fotosentezi hızlandırarak mumun sonsuza kadar yanmasını sağlar." },
      { key: "C", text: "Bitki ışıktan bağımsız olarak kireç suyundan besin üreterek ortama bolca oksijen salar." },
      { key: "D", text: "Ortamda karbondioksit olmasa bile bitkiler sadece su ile fotosentezi en yüksek hızda sürdürür." }
    ],
    correctAnswer: "A",
    explanation: "Fotosentez denklemi: CO2 + H2O + Işık -> Glikoz + O2. Kireç suyu (veya KOH) güçlü bir CO2 tutucudur. Ortamdaki karbondioksit tükendiğinde bitki fotosentez yapamaz ve ortama oksijen veremez. Yanan mum ortamdaki sınırlı oksijeni tüketince söner.",
    skillTag: "Kimyasal Belirteç & Hipotez Analizi",
    cognitiveLevel: "Fotosentez Hammaddeleri ve CO2 Tutucular",
    theme: "CO2 ve Fotosentez"
  },

  {
    id: 6211,
    subTopicId: "g8-u6-sub2",
    contextTitle: "Maya Mantarları ile Fermantasyon ve Gaz Çıkışı (Bursa ÖDM)",
    scenario: "Bir erlenmayer içine ılık su, toz şeker ve ekmek mayası (maya mantarı) konularak ağzına bir balon geçiriliyor. Düzenek 30°C sıcaklıktaki odada bekletildiğinde balonun şiştiği ve erlenmayerdeki sıvının hafif alkol koktuğu gözlemleniyor.",
    questionPrompt: "Bu deney ve gerçekleşen biyokimyasal olay ile ilgili hangisi yanlıştır?",
    options: [
      { key: "A", text: "Balonu şişiren gaz, maya mantarlarının etil alkol fermantasyonu sonucu ürettiği karbondioksit (CO2) gazıdır." },
      { key: "B", text: "Erlenmayer içine şeker yerine sadece saf su konulsaydı balon yine aynı hızda şişerdi." },
      { key: "C", text: "Bu süreçte oksijen kullanılmadan glikoz parçalanarak ATP enerjisi elde edilmiştir." },
      { key: "D", text: "Deney 70°C gibi çok yüksek bir sıcaklıkta yapılsaydı enzimler bozulacağı için fermantasyon gerçekleşmezdi." }
    ],
    correctAnswer: "B",
    explanation: "Fermantasyonda enerji hammaddesi şekerdir (glikoz). Erlenmayere şeker konulmazsa mayalar besin bulamaz, solunum yapamaz ve CO2 gazı üretemez; dolayısıyla balon şişmez. B seçeneğindeki ifade yanlıştır.",
    skillTag: "Fermantasyon Deney Yorumlama",
    cognitiveLevel: "Oksijensiz Solunum ve Maya Faaliyeti",
    theme: "Etil Alkol Fermantasyonu"
  },

  {
    id: 6212,
    subTopicId: "g8-u6-sub2",
    contextTitle: "Gece ve Gündüz Bitkilerde Gaz Alışverişi Grafiği (Kahramanmaraş ÖDM)",
    scenario: "Bir araştırmacı yeşil yapraklı bir bitkinin 24 saat boyunca bulunduğu ortamla yaptığı CO2 ve O2 gaz alışverişini kaydediyor:\n• Öğle vakti (12:00): Ortama yüksek miktarda O2 verilip CO2 alınıyor.\n• Gece yarısı (00:00): Ortamdan O2 alınıp ortama CO2 veriliyor.\n• Sabahın erken saatleri (alacakaranlık): Alınan ve verilen gaz miktarı eşitleniyor.",
    questionPrompt: "Bu gözlemlere dayanarak aşağıdaki genellemelerden hangisine ulaşılır?",
    options: [
      { key: "A", text: "Bitkiler solunumu gece gündüz 24 saat kesintisiz yapar; fotosentez ise sadece ışık varlığında gerçekleşir. Gündüz fotosentez hızı solunum hızından büyük olduğu için ortama net O2 verilir." },
      { key: "B", text: "Bitkiler gündüzleri sadece fotosentez yapar, hiç solunum yapmaz." },
      { key: "C", text: "Bitkiler geceleri solunum yapmayı bırakarak uyku moduna geçer." },
      { key: "D", text: "Bitkilerin ürettiği oksijen miktarı her zaman tükettiği karbondioksit miktarından azdır." }
    ],
    correctAnswer: "A",
    explanation: "Solunum tüm canlılar için yaşam boyu (gece ve gündüz 7/24) kesintisiz devam eder. Fotosentez ise yalnızca ışık varlığında (gündüzleri) gerçekleşir. Öğle saatlerinde fotosentez hızı solunumu kat kat aştığından bitki dışarıdan bolca CO2 alır ve atmosfere bolca O2 verir.",
    skillTag: "Grafik Yorumlama ve Günlük Ritim",
    cognitiveLevel: "Fotosentez - Solunum Karşılaştırması",
    theme: "Bitkilerde 24 Saatlik Metabolizma"
  },

  {
    id: 6213,
    subTopicId: "g8-u6-sub2",
    contextTitle: "Fotosentez Hızına Karbondioksit ve Sıcaklığın Birlikte Etkisi (Sivas ÖDM)",
    scenario: "Grafikte ortamdaki CO2 yoğunluğunun fotosentez hızına etkisi iki farklı sıcaklıkta (15°C ve 30°C) incelenmiştir. CO2 yoğunluğu belirli bir değere kadar arttığında fotosentez hızı artmış, ardından sabit kalmıştır (plato çizmiştir). Ayrıca aynı CO2 derişiminde 30°C'deki fotosentez hızı 15°C'dekinden belirgin şekilde yüksek çıkmıştır.",
    questionPrompt: "Grafikten elde edilen bu verilerle ilgili hangi yargıya varılamaz?",
    options: [
      { key: "A", text: "CO2 derişiminin sürekli artırılması fotosentez hızını sonsuza kadar artırmaz; klorofil ve enzim miktarı sınırlayıcı olur." },
      { key: "B", text: "Enzimlerin çalıştığı optimum sıcaklık aralığında sıcaklığın artması fotosentez hızını olumlu etkiler." },
      { key: "C", text: "Fotosentez hızını ortamda en az bulunan (sınırlayıcı) faktör belirler." },
      { key: "D", text: "Sıcaklık 80°C'ye çıkarıldığında fotosentez hızı 30°C'ye göre 3 katına çıkar." }
    ],
    correctAnswer: "D",
    explanation: "Fotosentez reaksiyonları enzimler kontrolünde gerçekleşir. Sıcaklık optimum seviyenin (yaklaşık 30-35°C) üzerine çıktığında, özellikle 50-60°C ve üstünde enzimlerin protein yapısı kalıcı olarak bozulur (denatüre olur) ve fotosentez tamamen durur. 80°C'de fotosentez hızlanmaz, sıfırlanır.",
    skillTag: "Çoklu Değişkenli Grafik Analizi",
    cognitiveLevel: "Optimum Sıcaklık ve Enzim Aktivitesi",
    theme: "Fotosentezi Etkileyen Çevresel Faktörler"
  },

  {
    id: 6214,
    subTopicId: "g8-u6-sub2",
    contextTitle: "Çimlenen Tohumun Oksijen Tüketimi Deneyi (Yalova ÖDM)",
    scenario: "Karanlık bir cam kaba ıslak pamuk arasına konulmuş fasulye tohumları yerleştiriliyor. Kaba cıvalı U borusu ve kireç suyu konuluyor. Birkaç gün sonra tohumların çimlendiği, kireç suyunun bulandığı ve U borusundaki renkli sıvının kaba doğru yükseldiği tespit ediliyor.",
    questionPrompt: "Bu deney düzeneği ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
    options: [
      { key: "A", text: "Çimlenmekte olan tohumlar henüz yeşil yaprakları olmadığı için fotosentez yapamaz, sadece oksijenli solunum yaparlar." },
      { key: "B", text: "U borusundaki sıvının yükselmesi tohumların ortama bol miktarda oksijen gazı salmasından kaynaklanır." },
      { key: "C", text: "Tohumlar karanlık ortamda oldukları için klorofilleriyle karanlık evre fotosentezi yapmıştır." },
      { key: "D", text: "Kireç suyunun bulanması tohumların oksijensiz fermantasyon yaptığının tek kanıtıdır." }
    ],
    correctAnswer: "A",
    explanation: "Çimlenme aşamasındaki tohumlarda henüz klorofil ve yeşil yapraklar oluşmamıştır; bu nedenle tohum çimlenirken fotosentez YAPAMAZ. Tohumun içindeki depo besin oksijenli solunum ile parçalanır. Ortamdaki O2 tüketildiği için iç basınç düşer ve U borusundaki sıvı kaba doğru emilir; üretilen CO2 ise kireç suyunu bulandırır.",
    skillTag: "Deney Düzenekleri Muhakemesi",
    cognitiveLevel: "Tohumda Çimlenme ve Solunum",
    theme: "Çimlenme Sürecinde Gaz Değişimi"
  },

  // Subtopic 3: Madde Döngüleri ve Çevre Sorunları
  {
    id: 6301,
    subTopicId: 'g8-u6-sub3',
    contextTitle: 'Azot Döngüsü Şeması ve Yıldırım Olayı',
    scenario: 'Azot döngüsünde havadaki serbest azot gazı (%78) doğrudan solunumla alınamaz. Yıldırım ve şimşek olayları ile havadaki azot yağışla toprağa bağlanır; ayrıca baklagillerin köklerindeki azot bağlayıcı bakteriler azotu toprağa katar. Ayrıştırıcılar ise ölü organizmalardan toprağa azotlu bileşik kazandırır.',
    questionPrompt: 'Görselde verilen azot döngüsü ile ilgili aşağıdaki yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'Üretici bitkiler havadaki serbest azotu doğrudan stomalarıyla alır.' },
      { key: 'B', text: 'Tüm bakteriler topraktaki azotu azaltıp havaya verir.' },
      { key: 'C', text: 'Yıldırım ve şimşek olayları ile topraktaki azotlu bileşik miktarı artar.' },
      { key: 'D', text: 'Tüketiciler azot ihtiyaçlarını doğrudan havayı soluyarak karşılar.' }
    ],
    correctAnswer: 'C',
    explanation: 'Havadaki serbest azot gazının toprağa bağlanması yıldırım/şimşek olaylarıyla ve kökteki azot bağlayıcı bakterilerle gerçekleşir. Canlılar azotu doğrudan havadan soluyamaz; bitkiler kökleriyle nitrat tuzu olarak, tüketiciler ise besin zinciriyle bitkilerden alır.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Azot Fiksasyonu Mekanizması',
    theme: 'Azot Döngüsü'
  },

  {
    id: 6302,
    subTopicId: 'g8-u6-sub3',
    contextTitle: 'Oksijen ve Karbon Döngülerinin Birlikte Şematize Edilmesi',
    scenario: 'Kloroplast organelinde fotosentez ile su ve karbondioksit kullanılarak K (besin ve oksijen) üretilir. Mitokondri organelinde ise L (oksijenli solunum) olayı ile besin ve oksijen parçalanarak M (karbondioksit ve su) ile enerji (ATP) açığa çıkar.',
    questionPrompt: 'Şemada K, L ve M harfleri ile gösterilen kısımlar hangi seçenekte doğru verilmiştir?',
    options: [
      { key: 'A', text: 'K: Oksijen — L: Solunum — M: Karbon dioksit' },
      { key: 'B', text: 'K: Karbon dioksit — L: Fermantasyon — M: Oksijen' },
      { key: 'C', text: 'K: Oksijen — L: Solunum — M: Işık' },
      { key: 'D', text: 'K: Enerji — L: Solunum — M: Karbon dioksit' }
    ],
    correctAnswer: 'A',
    explanation: 'Fotosentez ürünü olup solunuma giren gaz K = Oksijen; mitokondride gerçekleşen olay L = Solunum; solunum sonucu açığa çıkıp fotosenteze giren inorganik madde ise M = Karbon dioksittir.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Madde Döngüleri Bütünlüğü',
    theme: 'Karbon ve Oksijen Döngüsü'
  },

  {
    id: 6303,
    subTopicId: 'g8-u6-sub3',
    contextTitle: 'Küresel Isınma Neden-Sonuç İlişkisi Sıralaması',
    scenario: 'Küresel ısınma sürecindeki aşamalar şunlardır:\nI. Sera gazlarının atmosferde birikmesi\nII. Fosil yakıtların kullanımının artması\nIII. Güneş ışınlarının atmosferde daha fazla tutulması\nIV. Dünya’nın ortalama sıcaklığının artması\nV. Buzulların erimesi ve deniz seviyelerinin yükselmesi',
    questionPrompt: 'Bu olayların neden-sonuç ilişkisine göre kronolojik sıralanışı hangisidir?',
    options: [
      { key: 'A', text: 'II - I - III - V - IV' },
      { key: 'B', text: 'I - II - III - V - IV' },
      { key: 'C', text: 'IV - V - II - I - III' },
      { key: 'D', text: 'II - I - III - IV - V' }
    ],
    correctAnswer: 'D',
    explanation: 'Önce fosil yakıtlar yakılır (II) ➔ atmosfere sera gazı salınır ve birikir (I) ➔ yansıyan ışınlar sera gazlarınca tutulur (III) ➔ ortalama küresel sıcaklık yükselir (IV) ➔ kutup buzulları erir ve denizler yükselir (V). Doğru sıra: II - I - III - IV - V.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Süreç ve Neden-Sonuç Sıralaması',
    theme: 'Küresel Isınma Mekanizması'
  },

  {
    id: 6304,
    subTopicId: 'g8-u6-sub3',
    contextTitle: 'Akvaryum Deneyinde Karbon ve Oksijen Döngüsü',
    scenario: 'Umut, aynı türdeki balıklar için 3 farklı kapalı akvaryum hazırlamıştır:\n• I. Akvaryum: Sadece su ve balık (Işık var, hava motoru veya bitki yok)\n• II. Akvaryum: Su, balık ve canlı su bitkisi (Elodea) (Işık var)\n• III. Akvaryum: Su, balık ve hava motoru (Bitki yok)\nBir süre sonra I. akvaryumdaki balığın öldüğü, II ve III. akvaryumdakilerin yaşadığı görülmüştür.',
    questionPrompt: 'Umut’un hazırladığı düzeneklerle ilgili aşağıdaki yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'II. düzenekte karbon-oksijen döngüsü sağlandığı için balık yaşamaya devam etmiştir; bitki balığın ürettiği CO2\'yi alıp O2 üretmiştir.' },
      { key: 'B', text: 'I. ve III. düzenekler kullanılarak üretici canlıların önemi anlaşılabilir.' },
      { key: 'C', text: 'I. düzenekte balığın ölme nedeni sudaki karbondioksitin tükenmesidir.' },
      { key: 'D', text: 'III. düzenekte fotosentez gerçekleştiği için balık hayatta kalmıştır.' }
    ],
    correctAnswer: 'A',
    explanation: 'I. akvaryumda fotosentez yapan üretici veya dışarıdan hava veren motor olmadığı için sudaki çözünmüş oksijen hızla tükenmiş ve balık boğulmuştur. II. akvaryumda su bitkisi balığın solunumuyla oluşan CO2\'yi fotosentezde kullanarak oksijen üretmiş, böylece kendi kendine yeten bir karbon-oksijen döngüsü kurmuştur.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Döngü ve Canlı Yaşamı İlişkisi',
    theme: 'Kapalı Ekosistemde Oksijen Döngüsü'
  },

  {
    id: 6305,
    subTopicId: 'g8-u6-sub3',
    contextTitle: 'Ozon Tabakası İncelmesi ve Kloroflorokarbon (CFC) Gazları',
    scenario: 'Soğutucu sistemlerde ve deodorantlarda kullanılan kloroflorokarbon (CFC) gazları stratosfere ulaştığında ozon (O3) moleküllerini parçalayarak ozon tabakasında incelmeye neden olur. Ozon tabakasının incelmesi sonucu Güneş’ten gelen yüksek enerjili ultraviyole (UV-B ve UV-C) ışınları yeryüzüne daha yoğun ulaşır.',
    questionPrompt: 'Aşağıdaki durumlardan hangisi ozon tabakasının incelmesi nedeniyle yeryüzünde ortaya çıkan bir sonuçtur?',
    options: [
      { key: 'A', text: 'İnsanlarda cilt kanseri, katarakt ve bağışıklık sistemi zayıflaması vakalarının artması' },
      { key: 'B', text: 'Havadaki sera etkisinin ortadan kalkıp havanın aşırı soğuması' },
      { key: 'C', text: 'Depremlerin ve volkanik patlamaların sayısının artması' },
      { key: 'D', text: 'Bitkilerin fotosentez hızının rekor düzeyde artması ve tarım veriminin yükselmesi' }
    ],
    correctAnswer: 'A',
    explanation: 'Ozon tabakası Dünya’nın UV kalkanıdır. Bu kalkan inceldiğinde yüksek enerjili UV ışınları DNA hasarlarına, cilt kanserine, göz kataraktına ve fitoplanktonların ölümüne yol açar. A seçeneği doğrudan bu etkinin tıbbi ve biyolojik sonucudur.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Atmosfer Kirliliği ve Sağlık',
    theme: 'Ozon Tabakası ve UV Radyasyonu'
  },

  {
    id: 6306,
    subTopicId: 'g8-u6-sub3',
    contextTitle: 'Karbondioksit Oranı ve Sera Etkisi Model Deneyi',
    scenario: 'Işık alan bir ortamda iki özdeş cam fanusun içine eşit kütlede buz kalıpları konulmuştur:\n• I. Fanus: Normal hava (CO2 oranı %0,03)\n• II. Fanus: Karbondioksitçe zenginleştirilmiş hava (CO2 oranı %0,05)\nGüneş ışığı altında belirli süre bekletildiğinde II. fanustaki buzun çok daha hızlı eridiği tespit edilmiştir.',
    questionPrompt: 'Hazırlanan düzenekler ve elde edilen sonuçla ilgili yapılan aşağıdaki yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: 'I. ve II. düzenekler kullanılarak sera etkisinde karbondioksit miktarının rolü araştırılabilir.' },
      { key: 'B', text: 'I. düzenekteki CO2 gazı Güneş ışınlarının buza ulaşmasını tamamen engellemiştir.' },
      { key: 'C', text: 'II. düzenekteki buzun daha hızlı erimesi ortamın daha soğuk olduğunu gösterir.' },
      { key: 'D', text: 'Deneyde bağımsız değişken fanuslara konulan buzların ilk kütlesidir.' }
    ],
    correctAnswer: 'A',
    explanation: 'CO2 bir sera gazıdır ve kızılötesi (ısı) ışınlarını soğurarak tutar. CO2 oranı daha yüksek olan II. fanus ısıyı daha fazla hapsedip ortam sıcaklığını yükseltmiş ve buzun daha hızlı erimesine sebep olmuştur. Bu deney sera gazlarının küresel ısınmadaki rolünü somut olarak ispatlar.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Kontrollü Deney ve Sera Etkisi',
    theme: 'Sera Gazları ve Küresel Isınma'
  },

  {
    id: 6307,
    subTopicId: "g8-u6-sub3",
    contextTitle: "Azot Döngüsünde Baklagiller ve Bakterilerin Rolü (Sivas ÖDM)",
    scenario: "Atmosfer havasının yaklaşık %78'i azot gazından (N2) oluşmasına rağmen bitkiler ve hayvanlar bu serbest azotu doğrudan solunum veya yaprak yoluyla alıp kullanamazlar. Azotun canlıların kullanabileceği nitrat tuzlarına dönüşmesinde baklagil (fasulye, nohut, yonca) köklerinde yaşayan nodül bakterileri, şimşek/yıldırım olayları rol oynar.",
    questionPrompt: "Azot döngüsü şeması dikkate alındığında aşağıdaki ifadelerden hangisi yanlıştır?",
    options: [
      { key: "A", text: "Baklagil köklerindeki azot bağlayıcı bakteriler havadaki serbest azotu toprağa bağlayarak bitkilerin protein sentezlemesini sağlar." },
      { key: "B", text: "Topraktaki fazla azot, denitrifikasyon bakterileri tarafından tekrar serbest gaz olarak atmosfere salınır." },
      { key: "C", text: "Otçul hayvanlar vücutları için gerekli azotu doğrudan havayı teneffüs ederek akciğerleriyle karşılarlar." },
      { key: "D", text: "Ayrıştırıcı canlılar ölü atıklardaki azotlu bileşikleri amonyağa dönüştürerek döngüye katkı sağlar." }
    ],
    correctAnswer: "C",
    explanation: "Hiçbir hayvan havadaki serbest gaz halindeki azotu solunumla vücuduna bağlayamaz. Hayvanlar azotu yalnızca besin zincirinde bitkisel veya hayvansal proteinleri tüketerek organik yoldan alabilirler.",
    skillTag: "Döngü Şeması Analizi",
    cognitiveLevel: "Azot Fiksasyonu ve Canlılar",
    theme: "Azot Döngüsü"
  },

  {
    id: 6308,
    subTopicId: "g8-u6-sub3",
    contextTitle: "Fosil Yakıt Tüketimi ve Karbon Döngüsü Dengesi (Bursa ÖDM)",
    scenario: "Doğada fotosentez olayı atmosferdeki karbondioksiti azaltırken; hücresel solunum, yanma olayları ve ayrışma faaliyetleri atmosfere karbondioksit verir. Sanayi devriminden bu yana kömür, petrol ve doğal gaz gibi milyonlarca yılda oluşmuş fosil yakıtların aşırı kullanımı bu dengeyi bozmuştur.",
    questionPrompt: "Karbon döngüsündeki bu bozulmanın doğrudan bir sonucu olarak aşağıdakilerden hangisi gösterilemez?",
    options: [
      { key: "A", text: "Atmosferdeki sera gazı oranının artması ve küresel ortalama sıcaklıkların yükselmesi" },
      { key: "B", text: "Okyanus sularının daha fazla CO2 emerek asitlenmesi ve mercan resiflerinin zarar görmesi" },
      { key: "C", text: "Kutuplardaki buzulların erimesi ve deniz seviyelerinin yükselmesi" },
      { key: "D", text: "Güneş'ten gelen morötesi (UV) ışınların uzaya geri yansımasının tamamen engellenerek Dünya'nın hava basıncının yok olması" }
    ],
    correctAnswer: "D",
    explanation: "Fosil yakıt artışı sera etkisi, küresel ısınma, okyanus asitlenmesi ve iklim krizine yol açar. Hava basıncının yok olması veya UV ışınlarının tamamen hapsolması gibi bir durum söz konusu değildir (UV ışınları ozon tabakası ile ilgilidir).",
    skillTag: "Neden-Sonuç İlişkisi",
    cognitiveLevel: "Karbon Ayak İzi ve İklim Değişimi",
    theme: "Karbon Döngüsü ve Fosil Yakıtlar"
  },

  {
    id: 6309,
    subTopicId: "g8-u6-sub3",
    contextTitle: "Sera Etkisi ve Küresel İklim Değişikliği Mekanizması (Kahramanmaraş ÖDM)",
    scenario: "Güneş ışınları yeryüzüne çarptıktan sonra bir kısmı uzaya geri yansır. Atmosferde bulunan CO2, CH4 (metan) ve su buharı gibi sera gazları bu yansıyan kızılötesi ışınları tutarak Dünya'nın yaşanabilir bir sıcaklıkta kalmasını sağlar. Ancak insan faaliyetleriyle bu gazların aşırı artması \"küresel ısınma\" felaketine yol açmaktadır.",
    questionPrompt: "Aşağıdakilerden hangisi küresel iklim değişikliğini yavaşlatmak için uluslararası düzeyde alınabilecek en etkili önlemdir?",
    options: [
      { key: "A", text: "Fosil yakıtla çalışan termik santrallerin yerine rüzgâr, güneş ve jeotermal gibi yenilenebilir enerji santrallerinin yaygınlaştırılması ve orman alanlarının korunması" },
      { key: "B", text: "Ormanlık alanların tarım arazisine dönüştürülerek daha çok ürün elde edilmesi" },
      { key: "C", text: "Şehirlerarası ulaşımda demiryolu yerine bireysel dizel araç kullanımının teşvik edilmesi" },
      { key: "D", text: "Atmosferdeki karbondioksiti azaltmak için okyanuslara kimyasal asit dökülmesi" }
    ],
    correctAnswer: "A",
    explanation: "Küresel ısınmayı durdurmanın ve sera gazlarını azaltmanın temel yolu fosil yakıt tüketimini bırakıp yenilenebilir temiz enerjilere geçmek ve yutak alan olan ormanları koruyup ağaçlandırma yapmaktır.",
    skillTag: "Çevre Politikaları Değerlendirmesi",
    cognitiveLevel: "Sera Gazları ve Çözüm Yolları",
    theme: "Sera Etkisi ve İklim Krizi"
  },

  {
    id: 6310,
    subTopicId: "g8-u6-sub3",
    contextTitle: "Ozon Tabakasının İncelmesi ve Kloroflorokarbonlar (Sivas ÖDM)",
    scenario: "Ozon tabakası (O3), stratosferde bulunarak Güneş'ten gelen ölümcül ultraviyole (UV-B ve UV-C) ışınlarını süzerek yeryüzündeki canlıları korur. Soğutucularda (buzdolabı, klima), aerosol sprey gazlarında ve yalıtım köpüklerinde kullanılan kloroflorokarbon (CFC) ve halon gazları ozon moleküllerini parçalayarak ozon tabakasında seyrelmeye yol açmıştır.",
    questionPrompt: "Ozon tabakasının incelmesi sonucunda Dünya'da ortaya çıkabilecek tehlikeler arasında hangisi yer almaz?",
    options: [
      { key: "A", text: "İnsanlarda cilt kanseri ve katarakt gibi göz hastalıklarının artması" },
      { key: "B", text: "Okyanuslardaki fitoplanktonların zarar görerek fotosentezin ve denizel besin zincirinin çökmesi" },
      { key: "C", text: "Yeryüzündeki yerçekimi kuvvetinin zayıflayarak canlıların uzaya savrulması" },
      { key: "D", text: "Tarımsal ürünlerin genetik yapısının bozularak verim kaybı yaşanması" }
    ],
    correctAnswer: "C",
    explanation: "Ozon tabakasının incelmesi UV radyasyonunun zararlı etkilerini (kanser, katarakt, plankton ölümleri, mutasyon) artırır. Ancak ozon tabakasının yerçekimi kuvvetiyle hiçbir ilgisi yoktur; yerçekimi Dünya'nın kütlesinden kaynaklanır.",
    skillTag: "Kritik Düşünme & Bilimsel Okuryazarlık",
    cognitiveLevel: "Ozon Tabakası ve UV Radyasyonu",
    theme: "Ozon Tabakası ve CFC Gazları"
  },

  {
    id: 6311,
    subTopicId: "g8-u6-sub3",
    contextTitle: "Su Döngüsü ve İklim Dengesindeki Yeri (Yalova ÖDM)",
    scenario: "Su döngüsü; yeryüzündeki suyun Güneş enerjisi sayesinde buharlaşması, bitkilerin terleme yapması, atmosferde yükselen su buharının soğuk hava tabakasıyla karşılaşıp yoğuşarak yağmur, kar, dolu şeklinde yeryüzüne geri dönmesi ve yeraltı/yerüstü sularını beslemesi sürecidir.",
    questionPrompt: "Bir bölgede aşırı betonlaşma ve ormansızlaşma gerçekleştiğinde su döngüsünde meydana gelebilecek olumsuzluk hangisidir?",
    options: [
      { key: "A", text: "Suyun toprağa sızması (infiltrasyon) engellenir; yüzeysel akış artarak sellere yol açar ve yeraltı su tablası hızla düşer." },
      { key: "B", text: "Havadaki tüm su buharı anında uzaya kaçar." },
      { key: "C", text: "Buharlaşma hızı sıfırlanarak gökyüzünde bir daha hiç bulut oluşmaz." },
      { key: "D", text: "Beton yüzeyler suyu emer ve su döngüsü tamamen durur." }
    ],
    correctAnswer: "A",
    explanation: "Şehirleşme ve betonlaşma toprağın geçirgenliğini yok eder. Yağan yağmur toprağa sızıp yeraltı sularını besleyemez; yüzeyden hızla akarak sele sebep olur, barajlar ve yeraltı su kaynakları kurur.",
    skillTag: "Ekolojik Sistem Etkileşimi",
    cognitiveLevel: "Su Döngüsü ve Kentleşme",
    theme: "Su Döngüsü Dengesi"
  },

  // Subtopic 4: Sürdürülebilir Kalkınma
  {
    id: 6401,
    subTopicId: 'g8-u6-sub4',
    contextTitle: 'Ekolojik Ayak İzi ve Kaynak Tüketimi',
    scenario: 'Ekolojik ayak izi, bir insanın veya toplumun tükettiği doğal kaynakları üretmek ve oluşturduğu atıkları yok etmek için gereken verimli toprak ve su alanıdır.',
    questionPrompt: 'Aşağıda verilen davranışlardan hangisi ekolojik ayak izimizin büyümesine (çevreye daha çok zarar vermesine) neden olur?',
    options: [
      { key: 'A', text: 'Enerji verimliliği düşük (eski teknoloji) beyaz eşyalar kullanmak' },
      { key: 'B', text: 'Binalarda dış cephe ısı yalıtımı uygulamaları yaptırmak' },
      { key: 'C', text: 'Yer altı ve yer üstü su kaynaklarını tasarruflu kullanmak' },
      { key: 'D', text: 'Geri dönüşümlü ürünleri tercih ederek sıfır atık projesine katılmak' }
    ],
    correctAnswer: 'A',
    explanation: 'Enerji verimliliği düşük araçlar daha fazla elektrik tüketir; bu elektriği üretmek için daha fazla fosil yakıt yakılır ve karbon ayak izi ile ekolojik ayak izi büyür. Diğer seçenekler ise ayak izini küçülten çevre dostu uygulamalardır.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Sürdürülebilirlik İlkeleri',
    theme: 'Ekolojik Ayak İzi ve Tasarruf'
  },

  {
    id: 6402,
    subTopicId: 'g8-u6-sub4',
    contextTitle: 'Kyoto Protokolü ve Sera Gazı Salınımları',
    scenario: 'Kyoto Protokolü, küresel ısınma ve iklim değişikliği ile mücadele amacıyla imzalanan uluslararası bir anlaşmadır. Protokole taraf ülkeler, sanayi tesislerinden atmosfere salınan karbondioksit (CO2) ve diğer sera gazlarını azaltmayı taahhüt etmişlerdir.',
    questionPrompt: 'Buna göre aşağıdakilerden hangisi küresel iklim değişikliğini önlemek için Kyoto Protokolü kapsamında alınması gereken tedbirlerden biri değildir?',
    options: [
      { key: 'A', text: 'Fosil yakıtlar (kömür, petrol) yerine güneş ve rüzgâr gibi yenilenebilir enerji kaynaklarının tercih edilmesi' },
      { key: 'B', text: 'Sanayi tesislerinin bacalarına etkili filtreleme ve arıtma sistemlerinin takılması' },
      { key: 'C', text: 'Bireysel motorlu araç kullanımının teşvik edilip toplu taşımanın sınırlandırılması' },
      { key: 'D', text: 'Enerji tasarrufu sağlayan A+++ sınıfı enerji verimli teknolojilere geçilmesi' }
    ],
    correctAnswer: 'C',
    explanation: 'Bireysel motorlu araç kullanımı arttığında kişi başına düşen fosil yakıt tüketimi ve egzoz gazı salınımı katlanarak artar. İklim krizini önlemek için tam aksine toplu taşıma, raylı sistemler ve bisiklet kullanımı yaygınlaştırılmalıdır.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Uluslararası Çevre Sözleşmeleri',
    theme: 'İklim Eylemi ve Karbon Salınımı'
  },

  {
    id: 6403,
    subTopicId: 'g8-u6-sub4',
    contextTitle: 'Dünya Ekolojik Ayak İzi Değişimi ve Gelecek Projeksiyonu',
    scenario: '1960’tan 2018 yılına kadar yapılan ölçümlerde insanlığın doğal kaynak tüketiminin gezegenin biyolojik kapasitesini aştığı görülmüştür. 2018 yılında dünya genelinde sanki "1,7 adet Dünya" varmış gibi kaynak tüketilmektedir. Grafik projeksiyonuna göre mevcut tüketim alışkanlığı sürerse 2050’de 2,5 Dünya gerekecektir.',
    questionPrompt: 'Bu grafiğe göre aşağıdaki yorumlardan hangisi doğrudur?',
    options: [
      { key: 'A', text: '1960-1970 yılları arasında Dünya kaynakları insan nüfusu ile dengede değildi.' },
      { key: 'B', text: 'Ekolojik ayak izi sürdürülebilir yöntemlerle küçültülürse Dünya kaynakları yeniden insanlara yetecek seviyeye gelebilir.' },
      { key: 'C', text: 'Mevcut aşırı tüketim devam ederse 2030 yılında kaynaklar insanlığa sonsuza kadar yetecektir.' },
      { key: 'D', text: '1960-2018 yılları arasında ekolojik ayak izi sürekli azalmıştır.' }
    ],
    correctAnswer: 'B',
    explanation: 'Grafik açıkça göstermektedir ki ekolojik ayak izimizi küçültecek adımlar (tasarruf, yenilenebilir enerji, döngüsel ekonomi) atılırsa tüketim Dünya\'nın biyolojik taşıma kapasitesinin altına indirilebilir ve kaynaklar gelecek nesillere yetecek hale gelir.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Biyokapasite ve Tüketim Analizi',
    theme: 'Gezegensel Sınırlar ve Ekolojik Ayak İzi'
  },

  {
    id: 6404,
    subTopicId: 'g8-u6-sub4',
    contextTitle: 'Sıfır Atık ve Organik Kompost Gübre Üretimi',
    scenario: 'Kompostlaştırma; organik atıkların oksijenli ortamda mikroorganizmalar tarafından parçalanıp mineralce zengin doğal bir gübreye dönüştürülmesi sürecidir. Bu yöntemle evsel atıkların çöp sahalarına gitmesi önlenir.',
    questionPrompt: 'Buna göre aşağıdakilerden hangisi kompost yapımında kesinlikle kullanılamaz?',
    options: [
      { key: 'A', text: 'Sebze ve meyve kabukları' },
      { key: 'B', text: 'Yumurta kabukları ve kuru yapraklar' },
      { key: 'C', text: 'Tek kullanımlık plastik tabak ve poşetler' },
      { key: 'D', text: 'Çay posası ve kahve telvesi' }
    ],
    correctAnswer: 'C',
    explanation: 'Kompostlaştırma yalnızca biyolojik olarak parçalanabilen organik maddeler (sebze kabukları, yaprak, talaş vb.) için geçerlidir. Plastik malzemeler petrol türevi sentetik polimerler olup kompost mikroorganizmaları tarafından parçalanamaz ve toprağı zehirler.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Geri Dönüşüm ve Kompostlama',
    theme: 'Sıfır Atık Projesi'
  },

  {
    id: 6405,
    subTopicId: "g8-u6-sub4",
    contextTitle: "Ekolojik Ayak İzi ve Gezegen Kapasitesi (Yalova ÖDM)",
    scenario: "Ekolojik ayak izi; bir insanın veya toplumun tükettiği doğal kaynakları üretmek ve oluşturduğu atıkları etkisiz hale getirmek için ihtiyaç duyulan biyolojik olarak verimli toprak ve su alanıdır. Günümüzde insanlığın tüketimi Dünya'nın kendini yenileme kapasitesinin (biyokapasite) yaklaşık 1,7 katına ulaşmıştır.",
    questionPrompt: "Buna göre bireysel ekolojik ayak izini küçültmek isteyen bir öğrencinin aşağıdaki davranışlardan hangisini yapması beklenmez?",
    options: [
      { key: "A", text: "Mevsim dışı ithal sera ürünleri ve aşırı paketlenmiş işlenmiş gıdalar yerine yerel ve mevsimlik ürünleri tercih etmek" },
      { key: "B", text: "Kısa mesafelerde yürümek veya bisiklete binmek; toplu taşıma araçlarını kullanmak" },
      { key: "C", text: "Kullan-at tek kullanımlık plastik bardak ve poşetleri günlük yaşamda sınırsızca kullanmak" },
      { key: "D", text: "Evde su ve elektrik israfını önlemek, elektronik cihazları bekleme (stand-by) modunda bırakmayıp tamamen kapatmak" }
    ],
    correctAnswer: "C",
    explanation: "Tek kullanımlık plastiklerin kullanılması petrol tüketimini ve çevre atığını katlar; bu da ekolojik ayak izini büyütür. Küçültmek için geri dönüştürülebilir, yeniden kullanılabilir mataralar ve bez çantalar tercih edilmelidir.",
    skillTag: "Sürdürülebilirlik Bilinci",
    cognitiveLevel: "Ekolojik ve Karbon Ayak İzi",
    theme: "Ekolojik Ayak İzi Azaltma"
  },

  {
    id: 6406,
    subTopicId: "g8-u6-sub4",
    contextTitle: "Geri Dönüşüm ve Hammadde Tasarrufu Oranları (Bursa ÖDM)",
    scenario: "Bir ton kullanılmış kâğıdın geri dönüştürülmesi ile yaklaşık 17 ağacın kesilmesi önlenir, 4100 kWh elektrik enerjisi ve 26.000 litre su tasarrufu sağlanır. Benzer şekilde alüminyum kutuların geri dönüşümü ile boksit cevherinden alüminyum üretimine kıyasla %95 oranında enerji tasarrufu elde edilir.",
    questionPrompt: "Geri dönüşüm faaliyetlerinin ülke ekonomisine ve çevreye olan katkıları ile ilgili aşağıdakilerden hangisi söylenemez?",
    options: [
      { key: "A", text: "Doğal hammadde kaynaklarının hızlı tükenmesini geciktirir." },
      { key: "B", text: "Üretim süreçlerinde kullanılan enerji miktarını ve sera gazı salınımını belirgin biçimde düşürür." },
      { key: "C", text: "Düzenli çöp depolama alanlarına giden katı atık miktarını ve toprak kirliliğini azaltır." },
      { key: "D", text: "Geri dönüşüm süreçleri fabrikaların enerji tüketimini sıfırladığı için tüm ürünler maliyetsiz üretilir." }
    ],
    correctAnswer: "D",
    explanation: "Geri dönüşüm ciddi enerji tasarrufu ve kaynak koruması sağlar ancak fabrikaların enerji harcamasını sıfıra indirip ürünleri maliyetsiz yapmaz. Geri dönüşüm toplama, ayıklama ve yeniden işleme adımlarında da planlı enerji kullanımı gerektirir.",
    skillTag: "Kaynak Verimliliği Analizi",
    cognitiveLevel: "Geri Dönüşümün Çevresel ve Ekonomik Getirisi",
    theme: "Geri Dönüşüm ve Tasarruf"
  },

  {
    id: 6407,
    subTopicId: "g8-u6-sub4",
    contextTitle: "Sıfır Atık Hiyerarşisi ve Atık Yönetimi (Sivas ÖDM)",
    scenario: "Sıfır Atık projesinde temel amaç atık oluşumunu kaynağında en aza indirmektir. Atık yönetim hiyerarşisi sırasıyla: 1. Önleme/Azaltma -> 2. Yeniden Kullanma -> 3. Geri Dönüşüm -> 4. Geri Kazanım (Enerji) -> 5. Bertaraf (Depolama) adımlarını izler.",
    questionPrompt: "Bu hiyerarşiye göre aşağıdaki uygulamalardan hangisi en öncelikli ve çevreci basamak olan \"Önleme/Azaltma\" kategorisine girer?",
    options: [
      { key: "A", text: "Alışveriş yaparken bez çanta ve file kullanarak evde naylon poşet birikmesini baştan engellemek" },
      { key: "B", text: "Kullanılmış cam kavanozları temizleyip reçel kavanozu olarak tekrar kullanmak" },
      { key: "C", text: "Evdeki atık pet şişeleri mavi geri dönüşüm kutusuna atmak" },
      { key: "D", text: "Belediyenin çöpleri toplayıp biyogaz tesisinde yakarak elektrik üretmesi" }
    ],
    correctAnswer: "A",
    explanation: "Hiyerarşinin en tepesinde \"Önleme ve Azaltma\" yer alır. Alışverişte file/bez çanta kullanarak poşet almamak, atığın hiç ortaya çıkmamasını sağlar (Önleme). Kavanozu tekrar kullanmak \"Yeniden Kullanma\" (2. basamak), pet şişeyi kutuya atmak \"Geri Dönüşüm\" (3. basamak), biyogaz üretimi ise \"Geri Kazanım\" (4. basamak) örneğidir.",
    skillTag: "Atık Yönetim Prensipleri",
    cognitiveLevel: "Sıfır Atık Hiyerarşisi",
    theme: "Sıfır Atık ve Kaynak Yönetimi"
  },

  {
    id: 6408,
    subTopicId: "g8-u6-sub4",
    contextTitle: "Yenilenebilir Enerji Kaynakları ve Sürdürülebilirlik (Kahramanmaraş ÖDM)",
    scenario: "Bir ülkenin enerji üretim portföyünde; kömürlü termik santraller, rüzgâr türbinleri, hidroelektrik barajlar ve güneş enerjisi panelleri yer almaktadır. Ülke yönetimi 2030 yılı sürdürülebilir kalkınma hedefleri doğrultusunda fosil yakıt payını %10'un altına çekme kararı almıştır.",
    questionPrompt: "Bu dönüşümün hayata geçirilmesiyle birlikte ülkenin çevre göstergelerinde aşağıdakilerden hangisinin gerçekleşmesi beklenir?",
    options: [
      { key: "A", text: "Kişi başına düşen karbon ayak izinin azalması ve asit yağmurlarına yol açan kükürt/azot oksit gazı salınımlarının belirgin şekilde düşmesi" },
      { key: "B", text: "Atmosferdeki sera gazı oranının aniden tehlikeli derecede yükselmesi" },
      { key: "C", text: "Ülkenin su kaynaklarının hızla tükenerek kuraklığın başlaması" },
      { key: "D", text: "Doğal biyolojik çeşitliliğin kömür santrallerinin kapanması yüzünden azalması" }
    ],
    correctAnswer: "A",
    explanation: "Kömürlü termik santrallerin yerini güneş ve rüzgâr gibi temiz yenilenebilir kaynakların alması; CO2 (karbon ayak izi) ve asit yağmurlarına neden olan SO2/NOx gaz salınımlarını büyük ölçüde düşürür, hava ve su kalitesini iyileştirir.",
    skillTag: "Gelecek Vizyonu ve Ekolojik Planlama",
    cognitiveLevel: "Temiz Enerjiye Geçişin Faydaları",
    theme: "Sürdürülebilir Enerji Politikaları"
  }
];

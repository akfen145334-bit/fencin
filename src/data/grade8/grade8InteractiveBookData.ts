import { InteractiveBookItem } from '../../types/curriculum';

export const grade8InteractiveBookFlow: Record<string, InteractiveBookItem[]> = {
  // ==========================================
  // ÜNİTE 1: MEVSİMLER VE İKLİM
  // ==========================================
  'g8-u1-sub1': [
    {
      id: 'g8-u1-s1-item1',
      pageNumber: '1. İstasyon',
      title: 'Mevsimler ve Başlangıç Sorusu',
      badge: 'Gözlem & Merak İstasyonu',
      type: 'merak_istasyonu',
      prompt: 'Mevsim ne demektir? Bir bölgede mevsimlerin oluşmasını ve yıl içinde değişmesini etkileyen faktörler hakkındaki görüşlerinizi söyleyiniz.',
      content: 'Görsel 1.1’deki aynı doğal alanın ilkbahar, yaz, sonbahar ve kış mevsimlerindeki farklı görüntüleri incelenir.',
      evaluationQuestions: [
        {
          question: 'Aynı yerin yılın farklı aylarında farklı hava koşullarına ve bitki örtüsü görüntülerine sahip olmasının sebebi nedir?',
          answer: 'Dünya’nın Güneş etrafında dolanırken ekseninin eğik olması sebebiyle Güneş ışınlarının yeryüzüne düşme açısının yıl boyunca sürekli değişmesidir.'
        }
      ],
      resultInfoBox: 'Mevsimlerin oluşumu Dünya’nın Güneş’e olan uzaklığı ile değil; 23° 27\'lik eksen eğikliği ve Güneş etrafında dolanmasıyla doğrudan ilişkilidir.'
    },
    {
      id: 'g8-u1-s1-item2',
      pageNumber: '2. İstasyon',
      title: 'Eksen Eğikliği, Dolanma Düzlemi ve Ekvator Düzlemi',
      badge: 'Bilgi İstasyonu',
      type: 'bilgi_istasyonu',
      content: [
        'Kuzey ve Güney Kutup noktaları ile Dünya’nın merkezinden geçtiği varsayılan hayalî hatta Dünya’nın dönme ekseni denir.',
        'Dünya’nın dönme ekseni dolanma düzlemine göre 23° 27\' (23 derece 27 dakika) eğiktir.',
        'Dünya’nın Güneş etrafındaki hareketi sırasında oluşan düzleme dolanma (yörünge) düzlemi, Ekvator’dan geçen düzleme ise Ekvator düzlemi denir.',
        'Eksen eğikliği sebebiyle dolanma düzlemi ile Ekvator düzlemi birbiriyle çakışmaz; aralarında 23° 27\'lik açı vardır.',
        'Dünya kendi ekseni etrafında batıdan doğuya (saat yönünün tersine) 24 saatte bir tam tur döner (1 gün). Güneş etrafında ise 365 gün 6 saatte dolanır (1 yıl).'
      ],
      resultInfoBox: 'Dünya’nın eğik bir eksenle dolanması Güneş ışınlarının yıl içinde bir noktaya farklı açılarla düşmesine sebep olur; dik gelen bölgelerde yaz, eğik gelen bölgelerde kış yaşanır.'
    },
    {
      id: 'g8-u1-s1-item3',
      pageNumber: '3. İstasyon',
      title: '1. Etkinlik: Dünya’nın Güneş Etrafındaki Dolanımını Modelliyorum',
      badge: '1. Etkinlik İstasyonu',
      type: 'etkinlik_istasyonu',
      prompt: 'Karanlık ortamda ışık kaynağı ve Dünya modeli kullanılarak Türkiye ve Brezilya üzerindeki sıcaklık değişimleri test edilir.',
      materials: ['Dünya modeli', 'Işık kaynağı / El feneri', '2 adet termometre', 'Bant ve kronometre'],
      steps: [
        'Loş veya karanlık bir ortamda Dünya modelini masanın üzerine yerleştiriniz.',
        'Işık kaynağını modele yaklaşık 60-70 cm uzaklıkta tutup yakınız.',
        'Termometrelerden birini Türkiye üzerine (Kuzey Yarım Küre), diğerini Brezilya üzerine (Güney Yarım Küre) bantlayınız.',
        'Dünya modelini hem kendi ekseninde döndürüp hem de ışık kaynağı etrafında dolandırınız.',
        'Işık kaynağını açık tutup 10 dakika bekledikten sonra termometrelerdeki sıcaklık değerlerini okuyunuz.'
      ],
      evaluationQuestions: [
        {
          question: '1. Dünya modelinin her tarafı eşit derecede ışık aldı mı?',
          answer: 'Hayır, eksen eğikliğinden dolayı ışık kaynağına dönük olan yarım küre ışığı dik ve yoğun alırken, diğer yarım küre eğik açıyla daha az ışık almıştır.'
        },
        {
          question: '2. Termometrelerin farklı sıcaklık değerleri göstermesinin nedeni nedir?',
          answer: 'Güneş ışınlarının gelme açısının farklı olmasıdır. Işınları dik ve dike yakın alan bölge daha çok ısınmış ve termometre daha yüksek sıcaklık göstermiştir.'
        }
      ],
      resultInfoBox: 'Dünya kendi ekseninde dönerken Güneş’i gören kısımlar gündüzü, görmeyen kısımlar geceyi yaşar. Dolanma sırasında eksen eğikliği yarım kürelerde farklı aydınlanma ve ısınma oluşturur.'
    },
    {
      id: 'g8-u1-s1-item4',
      pageNumber: '4. İstasyon',
      title: 'Güneş Işınlarının Geliş Açısı, Aydınlanan Alan ve Gölge Boyu',
      badge: 'Bilgi İstasyonu',
      type: 'bilgi_istasyonu',
      content: [
        'Güneş ışınları dik veya dike yakın açılarla (80°-90°) düştüğünde temas ettiği yüzey alanı dardır. Işık enerjisi dar alanda toplandığı için birim alandaki sıcaklık artışı fazla olur. Gölge boyu ise cismin boyundan kısa veya sıfırdır.',
        '45°lik geliş açısında gölge boyu cismin gerçek boyuna tam olarak eşit olur.',
        'Güneş ışınları eğik açılarla (20°-40°) düştüğünde temas ettiği yüzey alanı geniştir. Birim yüzeye düşen ışık enerjisi azaldığı için sıcaklık artışı düşük kalır. Gölge boyu ise cismin boyundan belirgin şekilde uzun olur.'
      ],
      resultInfoBox: 'LGS Şifresi: Açı Büyürse (Dikleştikçe) ➔ Alan daralır, birim yüzeydeki enerji artar, sıcaklık yükselir, gölge boyu kısalır!'
    },
    {
      id: 'g8-u1-s1-item5',
      pageNumber: '5. İstasyon',
      title: 'Mevsimlerin Başlangıç Tarihleri (21 Haziran, 21 Aralık, 21 Mart, 23 Eylül)',
      badge: 'Bilgi İstasyonu',
      type: 'bilgi_istasyonu',
      content: [
        '21 Haziran: Güneş ışınları öğle vakti Kuzey Yarım Küre’deki Yengeç Dönencesi’ne 90° dik açıyla düşer. KYK’de Yaz, GYK’de Kış başlangıcıdır. KYK’de yılın en uzun gündüzü, GYK’de en uzun gecesi yaşanır. Kuzey Kutup Dairesi’nde 24 saat gündüz olur.',
        '21 Aralık: Güneş ışınları öğle vakti Güney Yarım Küre’deki Oğlak Dönencesi’ne 90° dik açıyla düşer. GYK’de Yaz, KYK’de Kış başlangıcıdır. KYK’de en uzun gece, GYK’de en uzun gündüz yaşanır.',
        '21 Mart ve 23 Eylül (Ekinoks): Güneş ışınları öğle vakti Ekvator’a dik açıyla düşer. Eksen eğikliği etkisi sıfırlanır, tüm Dünya’da gece ve gündüz süreleri eşit (12 saat) olur.',
        'Ekvator üzerinde gece-gündüz süresi yıl boyunca hiçbir zaman değişmez, daima 12 saat gece 12 saat gündüzdür.'
      ],
      resultInfoBox: 'Dönence: Güneş ışınlarının yeryüzünde dik açıyla düşebildiği en kuzey (Yengeç) ve en güney (Oğlak) sınırlardır. Kutuplara doğru gidildikçe gece-gündüz süre farkı açılır.'
    },
    {
      id: 'g8-u1-s1-item6',
      pageNumber: '6. İstasyon',
      title: '1. Bölüm Sonu Değerlendirmesi: Dolanım Modeli ve Ülkelerde Mevsimler',
      badge: 'Bölüm Sonu Değerlendirmesi',
      type: 'pekistirme_istasyonu',
      prompt: 'Dünya’nın eksen eğikliğiyle Güneş etrafındaki dolanım modeli çizimi ve farklı ülkelerde aynı tarihte yaşanan mevsimlerin karşılaştırılması.',
      evaluationQuestions: [
        {
          question: 'Aynı zaman diliminde Türkiye’de kış mevsimi yaşanırken Avustralya’da neden yaz mevsimi yaşanmaktadır?',
          answer: 'Türkiye Kuzey Yarım Küre’de, Avustralya ise Güney Yarım Küre’dedir. Dünya’nın 23° 27\'lik eksen eğikliği sebebiyle bu tarihte Güneş ışınları Güney Yarım Küre’ye dik ve dike yakın, Kuzey Yarım Küre’ye ise eğik açıyla gelmektedir.'
        }
      ],
      resultInfoBox: 'Bölüm tamamlandı! Birinci bölümün değerlendirme çalışmalarını başarıyla kavradınız.'
    }
  ],

  'g8-u1-sub2': [
    {
      id: 'g8-u1-s2-item1',
      pageNumber: '1. İstasyon',
      title: 'İklim ve Hava Olayları Farkı & Yağış Türleri',
      badge: 'Bilgi İstasyonu',
      type: 'bilgi_istasyonu',
      content: [
        'Hava Olayı: Belirli bir yerde ve kısa bir süre (günlük, saatlik) içinde etkili olan atmosfer şartlarıdır. Meteoroloji bilimi inceler, uzmanına meteorolog denir.',
        'Havanın Nemi: Havadaki su buharı miktarıdır; higrometre ile ölçülür. Soğuk havanın nem tutma kapasitesi sıcaktan azdır.',
        'Yağmur: Yükselen su buharının soğuk hava tabakasıyla karşılaşıp yoğuşarak su damlacıkları halinde yeryüzüne inmesi.',
        'Kar: Atmosferdeki su buharının 0 °C altındaki soğuk havada aniden buz kristallerine dönüşerek inmesi.',
        'Dolu: Su damlacıklarının fırtınalı havalarda aniden donarak buz topları şeklinde düşmesi.',
        'Kırağı: Yeryüzüne yakın su buharının soğuk gecelerde toprak ve yapraklar üzerinde donarak buz kristalleri oluşturması.',
        'Sis: Yeryüzüne yakın yerlerde su buharının yoğuşarak havada asılı minik su damlacıkları oluşturması.'
      ],
      resultInfoBox: 'Gökyüzüne yakın oluşanlar: Yağmur, Kar, Dolu. Yeryüzüne yakın oluşanlar: Sis, Kırağı, Çiy.'
    },
    {
      id: 'g8-u1-s2-item2',
      pageNumber: '2. İstasyon',
      title: 'Alçak ve Yüksek Basınç Alanları & Rüzgârın Oluşumu',
      badge: 'Keşif İstasyonu',
      type: 'bilgi_istasyonu',
      content: [
        'Alçak Basınç (AB) Alanı: Sıcak olan bölgedir. Isınan hava moleküllerinin kinetik enerjisi artar, birbirinden uzaklaşır ve yoğunluğu azalır. Yükselici hava hareketi yapar. Hava bulutludur, yağış ihtimali yüksektir.',
        'Yüksek Basınç (YB) Alanı: Soğuk olan bölgedir. Soğuyan havanın yoğunluğu artar, ağırlaşır ve alçalıcı hava hareketi yapar. Yüzeye uygulanan basınç artar. Hava açık ve güneşlidir, yağış görülmez.',
        'Rüzgâr: Yüksek basınç alanından alçak basınç alanına doğru yatay yönde gerçekleşen hava akımıdır (Soğuktan Sıcağa doğru eser).',
        'İki bölge arasındaki basınç farkı ne kadar fazlaysa rüzgâr o kadar şiddetli ve hızlı eser.'
      ],
      resultInfoBox: 'Rüzgâr DAİMA Yüksek Basınçtan (Soğuk) Alçak Basınca (Sıcak) doğru eser!'
    },
    {
      id: 'g8-u1-s2-item3',
      pageNumber: '3. İstasyon',
      title: 'İklim Nedir? Klimatoloji ve Tablo 1.1 Karşılaştırma Matrisi',
      badge: 'Bilgi İstasyonu',
      type: 'bilgi_istasyonu',
      content: [
        'İklim: Oldukça geniş bir bölgede uzun yıllar (en az 35-40 yıl) değişmeyen ortalama hava koşullarıdır.',
        'İklimi inceleyen bilim dalı Klimatoloji (İklim bilimi), çalışan uzmanlara Klimatolog (İklim bilimci) denir.',
        'Ülkemizde Karasal iklim, Karadeniz iklimi ve Akdeniz iklimi görülür.',
        'Hava olaylarında değişkenlik çok fazla ve tahminîdir; iklimde değişkenlik çok az ve kesindir.'
      ],
      resultInfoBox: 'Hava Durumu: "Bugün Ankara’da sağanak yağış bekleniyor." / İklim: "Ankara’da yazlar sıcak ve kurak geçer."'
    },
    {
      id: 'g8-u1-s2-item4',
      pageNumber: '4. İstasyon',
      title: 'Küresel Isınma, Doğal Sera Etkisi ve Alınacak Tedbirler',
      badge: 'Çevre & Mühendislik İstasyonu',
      type: 'cagini_asanlar',
      content: [
        'Doğal Sera Etkisi: Atmosferdeki su buharı, karbondioksit ve metan gazlarının Güneş’ten gelen ışınları tutarak Dünya’nın yaşanabilir sıcaklıkta kalmasını sağlamasıdır.',
        'Küresel Isınma: Fosil yakıtların aşırı kullanımı ve orman tahribatı sonucu sera gazlarının aşırı birikerek Dünya’nın gereğinden fazla ısınmasıdır.',
        'IPCC Değerlendirme Raporu: İklim krizinin buzulların erimesine, deniz seviyelerinin yükselmesine ve ekstrem hava olaylarına yol açtığını vurgulamaktadır.',
        'Bireysel Tedbirler: Enerji tasarruflu lambalar kullanmak, toplu taşımayı tercih etmek, su israfını önlemek, ağaç dikmek.'
      ],
      resultInfoBox: 'Çarpıcı Çevre Verisi: Motorlu taşıt sahiplerinin yalnızca %1’i araç bakımını düzenli yaptırsa yılda 450 bin tondan fazla CO2 salımı önlenebilir.'
    },
    {
      id: 'g8-u1-s2-item5',
      pageNumber: '5. İstasyon',
      title: '2. Bölüm Sonu Değerlendirmesi: Hava Olayı mı İklim mi? & Test',
      badge: 'Bölüm Sonu Değerlendirmesi',
      type: 'pekistirme_istasyonu',
      prompt: 'Verilen ifadelerin hava olayı ve iklim olarak sınıflandırılması ve çoktan seçmeli sorular.',
      evaluationQuestions: [
        {
          question: '1. "Bugün İstanbul’da sağanak yağmur bekleniyor." ifadesi hava olayı mıdır, iklim midir?',
          answer: 'Hava olayıdır (kısa süreli ve anlık tahmindir).'
        },
        {
          question: '2. "Karadeniz yıl boyunca yağışlıdır." ifadesi hava olayı mıdır, iklim midir?',
          answer: 'İklimdir (uzun yılların ortalama özelliğidir).'
        }
      ],
      resultInfoBox: '1. Ünitenin tüm konu ve bölüm sonu çalışmaları başarıyla tamamlandı.'
    }
  ],

  // ==========================================
  // ÜNİTE 2: DNA VE GENETİK KOD
  // ==========================================
  'g8-u2-sub1': [
    {
      id: 'g8-u2-s1-item1',
      pageNumber: '1. İstasyon',
      title: 'Kalıtsal Yapıların Hiyerarşisi: Kromozom > DNA > Gen > Nükleotid',
      badge: 'Keşif İstasyonu',
      type: 'bilgi_istasyonu',
      content: [
        'Kromozom: DNA molekülünün özel proteinlerle sarılarak kısalıp kalınlaşmasıyla oluşan en karmaşık kalıtsal yapıdır.',
        'DNA (Deoksiribo Nükleik Asit): Canlının kalıtım maddesi ve hücrenin yönetici molekülüdür; ikili sarmal yapıdadır.',
        'Gen: DNA üzerindeki kalıtsal görev birimleridir. Belirli bir protein veya karakterin kodunu taşır (Vilhelm Johannsen 1909).',
        'Nükleotid: DNA’nın en küçük yapı birimidir. Milyonlarca nükleotidin dizilmesiyle genler ve DNA oluşur.',
        'Hiyerarşik Sıralama: Kromozom > DNA > Gen > Nükleotid (KediGenİ formülü).'
      ],
      resultInfoBox: 'Tek yumurta ikizlerinin kan grubu, göz rengi gibi tüm özellikleri aynıdır çünkü DNA nükleotid dizilimleri tıpatıp aynıdır.'
    },
    {
      id: 'g8-u2-s1-item2',
      pageNumber: '2. İstasyon',
      title: 'Nükleotidin Yapısı ve İkili Sarmal Eşleşme Kuralları',
      badge: 'Bilgi İstasyonu',
      type: 'bilgi_istasyonu',
      content: [
        'Bir nükleotid: 1 Fosfat grubu (P) + 1 Deoksiriboz şekeri (5 karbonlu D) + 1 Organik bazdan oluşur.',
        '4 Çeşit Organik Baz: Adenin (A), Timin (T), Guanin (G) ve Sitozin (C).',
        'Nükleotidler içerdikleri organik baza göre adlandırılır (Adenin organik bazı varsa Adenin Nükleotidi).',
        'Eşleşme Kuralı: Adenin karşısına daima Timin (A=T ikili zayıf bağ), Guanin karşısına daima Sitozin (G≡C üçlü zayıf bağ) gelir.',
        'Toplam Eşitlik: Toplam Fosfat = Toplam Şeker = Toplam Nükleotid = Toplam Organik Baz Sayısı.'
      ],
      resultInfoBox: 'DNA’da merdivenin basamaklarını nükleotid bazları oluştururken, kenar korkuluklarını şeker ve fosfat omurgası oluşturur.'
    },
    {
      id: 'g8-u2-s1-item3',
      pageNumber: '3. İstasyon',
      title: 'Kromozom Sayısı ve Canlıların Gelişmişlik İlişkisizliği',
      badge: 'Bilgi İstasyonu',
      type: 'bilgi_istasyonu',
      content: [
        'Sağlıklı insan vücut hücrelerinde 2n = 46 kromozom bulunur (23 anneden, 23 babadan).',
        'Farklı canlı türlerinin kromozom sayıları AYNI OLABİLİR: İnsan (46), Moli balığı (46), Tayvan munçağı (46), Kurtbağrı bitkisi (46).',
        'Kromozom sayısının büyüklüğü canlının gelişmişliğini veya vücut cüssesini GÖSTERMEZ: Eğrelti otu 500 kromozomludur ancak insandan gelişmiş değildir; köpek 78 kromozomludur ancak insandan büyük ve gelişmiş değildir.'
      ],
      resultInfoBox: 'Canlıların gelişmişliğini belirleyen kromozom sayısı değil, genlerin sayısı ve taşıdığı bilginin niteliğidir.'
    },
    {
      id: 'g8-u2-s1-item4',
      pageNumber: '4. İstasyon',
      title: '1. Etkinlik: DNA Modeli ve DNA Onarım Kuralları',
      badge: '1. Etkinlik İstasyonu',
      type: 'etkinlik_istasyonu',
      prompt: 'Renkli boncuklar ve kırmızı kurdelelerle çift sarmal DNA modeli tasarımı ve hata onarım analizi.',
      materials: ['Kırmızı kurdele (2 adet)', 'Mor, pembe, mavi, turuncu renkli boncuklar', 'Dikiş iğnesi ve iplik'],
      steps: [
        'Kırmızı kurdele üzerine mor (adenin), pembe (timin), mavi (guanin) ve turuncu (sitozin) boncukları 3-4 cm aralıklarla diziniz.',
        'İkinci kurdeleye mor karşısına pembe, mavi karşısına turuncu gelecek şekilde tamamlayıcı zinciri diziniz.',
        'İki kurdeleyi masada yan yana getirip boncukları iple birbirine tutturunuz.',
        'Kurdeleleri uçlarından tutarak kendi üzerine sarmal döner merdiven gibi kıvırınız.'
      ],
      evaluationQuestions: [
        {
          question: 'DNA modelinde kurdeleler ve aradaki iplikler neyi temsil etmektedir?',
          answer: 'Kurdeleler şeker-fosfat omurgasını, boncuklar organik bazları, aradaki iplikler ise zayıf hidrojen bağlarını temsil eder.'
        },
        {
          question: 'DNA molekülünde tek zincirdeki boşluklar onarılabilirken, karşılıklı iki zincirdeki boşluklar neden onarılamaz?',
          answer: 'Tek zincirde karşıdaki baz bilindiğinden uygun nükleotid getirilerek tamir edilir. Ancak karşılıklı iki zincirde baz yoksa hangi nükleotidin geleceği bilinemediği için hasar onarılamaz ve mutasyon oluşur.'
        }
      ],
      resultInfoBox: 'DNA hasarlarında: Tek zincir hatası ➔ ONARILIR. Karşılıklı çift zincir kırığı/boşluğu ➔ ONARILAMAZ.'
    },
    {
      id: 'g8-u2-s1-item5',
      pageNumber: '5. İstasyon',
      title: 'DNA’nın Kendini Eşlemesi ve 2. Etkinlik',
      badge: 'Deney & Eşlenme İstasyonu',
      type: 'etkinlik_istasyonu',
      materials: ['DNA modeli', 'Beyaz kurdele', 'Ek boncuklar'],
      steps: [
        'Hazırlanan DNA modelinin zincirleri fermuar gibi açılarak ayrılır.',
        'Serbest kalan kırmızı zincirlerin karşısına beyaz renkli yeni kurdeleler konulur.',
        'Ortamdaki serbest nükleotidlerden adenin karşısına timin, guanin karşısına sitozin eklenir.',
        'Sonuçta biri eski (kırmızı) biri yeni (beyaz) zincirden oluşan birbirinin tıpatıp aynısı 2 yeni DNA elde edilir.'
      ],
      resultInfoBox: 'DNA eşlenmesi yarı korunumlu (biri eski, biri yeni zincir) gerçekleşir; kalıtsal bilgi yeni hücrelere hatasız aktarılır.'
    },
    {
      id: 'g8-u2-s1-item6',
      pageNumber: '6. İstasyon',
      title: 'Okuma Metni: Parmak İzi & 1. Bölüm Sonu Değerlendirmesi',
      badge: 'Okuma & Değerlendirme İstasyonu',
      type: 'pekistirme_istasyonu',
      prompt: 'Tek yumurta ikizlerinde bile farklı olan parmak izinin adli tıptaki önemi ve bölüm sonu değerlendirme soruları.',
      evaluationQuestions: [
        {
          question: 'Tek yumurta ikizlerinin DNA dizilimleri aynı olmasına rağmen parmak izleri neden birbirinden farklıdır?',
          answer: 'Parmak izleri sadece genetik yapıya değil; anne karnındaki amniyotik sıvının hareketine, büyüme hızına ve mekanik temaslara (çevresel faktörlere) bağlı olarak şekillenir.'
        }
      ],
      resultInfoBox: 'Bölüm tamamlandı. İlgili DNA eşleme çizimi ve çoktan seçmeli sorular çözüme hazırdır.'
    }
  ],

  'g8-u2-sub2': [
    {
      id: 'g8-u2-s2-item1',
      pageNumber: '1. İstasyon',
      title: 'Mendel’in Bezelyeleri ve Kalıtım Kavramları',
      badge: 'Bilgi İstasyonu',
      type: 'bilgi_istasyonu',
      content: [
        'Gregor Mendel (1822-1884): Manastır bahçesinde bezelyelerle çalışarak genetik biliminin esaslarını ortaya koymuştur.',
        'Mendel’in Neden Bezelye Seçtiği: Kolay yetiştirilmesi, yılda birden çok ürün vermesi, dış tozlaşmaya kapalı olması ve zıt karakterlerinin (mor/beyaz, sarı/yeşil tohum) net ayırt edilebilmesi.',
        'Alel Gen: Biri anneden diğeri babadan gelen aynı karakteri denetleyen gen çifti (A ve a).',
        'Genotip: Canlının sahip olduğu genlerin tümüdür (AA, Aa, aa).',
        'Fenotip: Genotip ve çevrenin etkisiyle ortaya çıkan dış görünüş (Mor çiçekli, sarı tohumlu).',
        'Saf Döl (Homozigot): Bir karakter için aynı alellerin bulunması (AA veya aa).',
        'Melez Döl (Heterozigot): Bir karakter için farklı alellerin bir arada bulunması (Aa).'
      ],
      resultInfoBox: 'Baskın (Dominant) gen büyük harfle (A), çekinik (Resesif) gen küçük harfle (a) gösterilir.'
    },
    {
      id: 'g8-u2-s2-item2',
      pageNumber: '2. İstasyon',
      title: 'Tek Karakter Çaprazlamaları (F1 ve F2 Kuşakları)',
      badge: 'Uygulama İstasyonu',
      type: 'bilgi_istasyonu',
      content: [
        'Saf Döl Yuvarlak (AA) x Saf Döl Buruşuk (aa) Çaprazlaması: F1 Kuşağı bireylerinin %100’ü Melez Yuvarlak (Aa) olur.',
        'F1 Kuşağının Kendi Arasında Çaprazlanması (Aa x Aa): F2 Kuşağında Genotip: %25 AA, %50 Aa, %25 aa; Fenotip: %75 Yuvarlak tohum, %25 Buruşuk tohum oluşur.',
        'Melez Sarı (Ss) x Melez Sarı (Ss) Tohum Çaprazlaması: %75 Sarı tohum, %25 Yeşil tohum (ss) elde edilir.'
      ],
      resultInfoBox: 'Mendel Kanunu: İki melez bireyin çaprazlanmasında çekinik fenotipin ortaya çıkma ihtimali daima %25 (1/4)’tir.'
    },
    {
      id: 'g8-u2-s2-item3',
      pageNumber: '3. İstasyon',
      title: '3. Etkinlik: Çaprazlama Yapıyorum',
      badge: '3. Etkinlik İstasyonu',
      type: 'etkinlik_istasyonu',
      materials: ['50 adet sarı karton parçası', '50 adet yeşil karton parçası', '2 adet torba'],
      steps: [
        '50 adet sarı (A aleli) ve 50 adet yeşil (a aleli) kare karton hazırlayınız.',
        'Dişi ve erkek torbalarının her birine 25 sarı ve 25 yeşil karton koyunuz (Aa genotipli melez ebeveynler).',
        'Her iki torbadan aynı anda rastgele birer kâğıt çekip harfleri yan yana getirerek tabloya kaydediniz.',
        'Kâğıtlar bitene kadar işlemi tekrarlayıp AA, Aa ve aa frekanslarını hesaplayınız.'
      ],
      evaluationQuestions: [
        {
          question: 'Deney sonunda elde ettiğiniz genotip ve fenotip oranları Mendel’in teorik oranlarıyla uyuştu mu?',
          answer: 'Evet; çekilen kâğıtlar yaklaşık %25 AA (saf baskın), %50 Aa (melez baskın) ve %25 aa (saf çekinik) oranını vermiştir.'
        }
      ],
      resultInfoBox: 'Rastgele döllenmede melez bireyler çaprazlandığında 3 çeşit genotip (AA, Aa, aa) ve 2 çeşit fenotip (baskın ve çekinik) oluşur.'
    },
    {
      id: 'g8-u2-s2-item4',
      pageNumber: '4. İstasyon',
      title: 'İnsanda Cinsiyetin Kalıtımı ve Akraba Evliliklerinin Genetik Sonuçları',
      badge: 'Yaşam & Sağlık İstasyonu',
      type: 'bilgi_istasyonu',
      content: [
        'İnsanda 44 vücut (otozom) + 2 cinsiyet (gonozom) kromozomu bulunur. Dişi: 44 + XX, Erkek: 44 + XY.',
        'Annenin yumurtası daima X kromozomu taşır. Babanın spermleri ise %50 X, %50 Y kromozomu taşır.',
        'Çocuğun cinsiyetini BABAdan gelen sperm belirler: Babadan X gelirse kız (XX), Y gelirse erkek (XY) olur.',
        'Her doğumda çocuğun kız veya erkek olma olasılığı KESİNLİKLE %50’dir (Önceki çocukların cinsiyeti bu olasılığı etkilemez).',
        'Akraba Evlilikleri: Aralarında kan bağı olan kişilerin ortak genleri çoktur. Çekinik genlerle taşınan hastalıkların (hemofili, talasemi, orak hücre) iki taşıyıcı ebeveynde (Aa x Aa) yan yana gelerek hasta çocuk (aa) oluşturma riski (%25) kat kat artar.'
      ],
      resultInfoBox: 'Sağlıklı nesiller için akraba evliliklerinden kaçınılmalı, evlilik öncesi genetik tarama testleri yaptırılmalıdır.'
    },
    {
      id: 'g8-u2-s2-item5',
      pageNumber: '5. İstasyon',
      title: '2. Bölüm Sonu Değerlendirmesi: Çaprazlama & Cinsiyet Soruları',
      badge: 'Bölüm Sonu Değerlendirmesi',
      type: 'pekistirme_istasyonu',
      prompt: 'İlgili genotip boşlukları, 3. çocuğun erkek olma ihtimali ve çoktan seçmeli kalıtım soruları.',
      evaluationQuestions: [
        {
          question: 'Bir ailenin 2 tane kız çocuğu vardır. 3. çocuklarının erkek olma ihtimali kaçtır?',
          answer: 'Yüzde 50’dir (%50). Her gebelikte kız veya erkek olma olasılığı birbirinden bağımsız olup daima 1/2’dir.'
        }
      ],
      resultInfoBox: '2. Bölüm tamamlandı! Mendel çaprazlamalarını ve cinsiyet kalıtımını eksiksiz öğrendiniz.'
    }
  ],

  'g8-u2-sub3': [
    {
      id: 'g8-u2-s3-item1',
      pageNumber: '1. İstasyon',
      title: 'Mutasyon: Nedenleri, Özellikleri ve Örnekleri',
      badge: 'Bilgi İstasyonu',
      type: 'bilgi_istasyonu',
      content: [
        'Mutasyon: Radyasyon, X ışını, ultraviyole (UV) ışınları, zehirli kimyasallar ve yüksek sıcaklık etkisiyle DNA’nın nükleotid diziliminde veya kromozomlarında meydana gelen KALICI bozulmalardır.',
        'Genin ve DNA’nın YAPISI değişir.',
        'Kalıtsallık Durumu: Mutasyon ÜREME hücresinde (sperm, yumurta) oluşursa dölden döle aktarılır (kalıtsaldır). VÜCUT hücresinde oluşursa sadece o kişiyi etkiler, yavrulara geçmez.',
        'Örnekler: Orak hücre anemisi, Albinoluk, Down sendromu (47 kromozom), Altı parmaklılık, Van kedisinin göz rengi farklılığı, dört boynuzlu keçi, kanser.'
      ],
      resultInfoBox: 'Bazı mutasyonlar yararlıdır: Örneğin bakterilerin antibiyotiğe direnç kazanması veya tohumsuz meyve oluşumu.'
    },
    {
      id: 'g8-u2-s3-item2',
      pageNumber: '2. İstasyon',
      title: 'Modifikasyon: Çevre Etkisiyle Ortaya Çıkan Kalıtsal Olmayan Değişimler',
      badge: 'Bilgi İstasyonu',
      type: 'bilgi_istasyonu',
      content: [
        'Modifikasyon: Sıcaklık, ışık, nem ve besin gibi çevre faktörleriyle canlının fenotipinde ortaya çıkan ve KALITSAL OLMAYAN geçici değişikliklerdir.',
        'Genin yapısı DEĞİŞMEZ, sadece genin İŞLEYİŞİ (çalışma tarzı) değişir.',
        'Ortam şartları normale dönünce canlı da eski haline döner.',
        'Örnekler: Çuha çiçeği (15-25 °C kırmızı, 25-35 °C beyaz çiçek açar), Arı larvaları arı sütüyle beslenirse kraliçe arı, çiçek tozuyla beslenirse işçi arı olur, Himalaya tavşanının sırtına buz bağlanınca siyah kürk çıkması, Sporcuların kas yapması, Güneşte bronzlaşma, Karahindiba ovada uzun boylu/dağda kısa boylu olması, Ortanca çiçeği asidik toprakta mavi-mor/bazik toprakta pembe açması.'
      ],
      resultInfoBox: 'Modifikasyonlar kalıtsal değildir; kas geliştiren bir sporcunun çocuğu kaslı doğmaz!'
    },
    {
      id: 'g8-u2-s3-item3',
      pageNumber: '3. İstasyon',
      title: 'Mutasyon ile Modifikasyonun Farkı & Bölüm Sonu Değerlendirmesi',
      badge: 'Karşılaştırma & Değerlendirme',
      type: 'pekistirme_istasyonu',
      prompt: 'Defter yaprağı analojisi, Örnek 4 tablosu ve bölüm sonu değerlendirme soruları.',
      evaluationQuestions: [
        {
          question: 'Fen bilimlerinde "deftere yazı yazıp silmek" ile "defterin yaprağını yırtmak" benzetmesi neyi açıklar?',
          answer: 'Deftere yazı yazıp silmek geçici olduğu için MODİFİKASYON’dur; defterin yaprağını yırtıp parçalamak yapıyı kalıcı olarak bozduğu için MUTASYON’dur.'
        }
      ],
      resultInfoBox: 'Gen yapısı değişiyorsa ➔ Mutasyon. Genin sadece işleyişi değişiyorsa ➔ Modifikasyon.'
    }
  ],

  'g8-u2-sub4': [
    {
      id: 'g8-u2-s4-item1',
      pageNumber: '1. İstasyon',
      title: 'Adaptasyon (Çevreye Uyum) ve Kamuflaj',
      badge: 'Doğa İstasyonu',
      type: 'bilgi_istasyonu',
      content: [
        'Adaptasyon: Bir canlının bulunduğu ortamda yaşama ve üreme şansını artıran KALITSAL özellikler kazanmasıdır.',
        'Kutup Ayısı ve Kutup Tilkisi: Beyaz kürk (karda kamuflaj), deri altında kalın yağ tabakası (ısı yalıtımı), ısı kaybını azaltmak için küçük kulak ve burun.',
        'Çöl Tilkisi ve Devesi: Isı yaymak için geniş kulaklar, hörgüçte yağ depolama (su ve enerji kaynağı), kum fırtınasından korunmak için çift sıra kirpik ve kulak içi kılları, batmamak için geniş tabanlar.',
        'Kaktüs: Su kaybını önlemek için yaprakları diken şeklindedir, gövdesinde su depolar, kökleri derine iner.',
        'Nilüfer: Suda yaşadığı için terlemeyi artırmak amacıyla yaprakları geniştir ve hava boşlukları vardır.'
      ],
      resultInfoBox: 'Adaptasyonlar kalıtsaldır ve nesilden nesile aktarılır; kutup ayısının yavrusu da beyaz kürklü doğar.'
    },
    {
      id: 'g8-u2-s4-item2',
      pageNumber: '2. İstasyon',
      title: 'Doğal Seçilim, Varyasyon & Bölüm Sonu Değerlendirmesi',
      badge: 'Evrimsel Biyoloji & Değerlendirme',
      type: 'pekistirme_istasyonu',
      content: [
        'Doğal Seçilim: Çevre koşullarına uyum sağlayabilen canlıların hayatta kalıp üremesi, uyum sağlayamayanların ise avcılar veya doğa şartlarınca elenip yok olmasıdır.',
        'Kahverengi Toprak Adası Örneği ve Doğal Seçilim: Kahverengi toprakta beyaz tavşanlar avcılarca (kartal, tilki) kolayca fark edilip avlanır; kahverengi tavşanlar kamufle olup ürer ve beyaz tavşan geni adadan elenir.',
        'Sanayi Devrimi Güve Kelebekleri: Ağaç kabukları isle kaplanınca açık renkliler avlanmış, koyu renkliler doğal seçilimle çoğalmıştır.',
        'Varyasyon: Aynı türün bireyleri arasındaki kalıtsal çeşitliliktir (İnsanların farklı saç ve göz renkleri).'
      ],
      evaluationQuestions: [
        {
          question: 'Devenin hörgücünde yağ depolaması, kurbağanın ayaklarının perdeli olması ve bukalemunun renk değiştirmesi hangi kavrama örnektir?',
          answer: 'Canlının yaşama ve üreme şansını artıran kalıtsal birer ADAPTASYON örneğidir.'
        }
      ],
      resultInfoBox: 'Bölüm tamamlandı! Bölümdeki adaptasyon bilgi kartları çözüldü.'
    }
  ],

  'g8-u2-sub5': [
    {
      id: 'g8-u2-s5-item1',
      pageNumber: '1. İstasyon',
      title: 'Genetik Mühendisliği, Biyoteknoloji, Gen Aktarımı ve Klonlama',
      badge: 'Biyoteknoloji İstasyonu',
      type: 'bilgi_istasyonu',
      content: [
        'Biyoteknoloji: Canlı hücreleri veya biyolojik süreçleri kullanarak insanlığa yararlı ürünler (aşı, ilaç, tohum) üretme teknolojisidir.',
        'Genetik Mühendisliği: Genlerin ayrıştırılması, çoğaltılması ve bir canlıdan diğerine aktarılması çalışmalarını yürüten bilim dalıdır.',
        'Gen Aktarımı: İstenen geni taşıyan DNA parçasının başka bir canlıya aktarılmasıdır (İnsandaki insülin geni E. coli bakterisine aktarılarak şeker hastalarına bol ve ucuz insülin hormonu üretilmiştir).',
        'Klonlama (Dolly 1997): A koyununun vücut hücresi çekirdeği + B koyununun çekirdeksiz yumurtası ➔ laboratuvarda çoğaltılıp C koyununun döl yatağına yerleştirilir. Doğan klon kuzu tamamen A KOYUNUNUN KOPYASIDIR.'
      ],
      resultInfoBox: 'Klon yavru çekirdeği (genetik şifresi) alınan canlının ikizidir; yumurtası alınan veya taşıyıcı koyunla genetik bağı yoktur!'
    },
    {
      id: 'g8-u2-s5-item2',
      pageNumber: '2. İstasyon',
      title: 'Gen Tedavisi, GDO, Biyoteknolojinin Yararları ve Riskleri',
      badge: 'Etik & Değerlendirme İstasyonu',
      type: 'pekistirme_istasyonu',
      content: [
        'Gen Tedavisi: Hatalı veya eksik genlerin işlevinin virüsler ve taşıyıcılarla engellenmesi veya yerine sağlıklı gen verilmesidir (kanser ve genetik hastalıklarda).',
        'GDO (Genetiği Değiştirilmiş Organizma): Kendi türü dışındaki bir türden gen aktarılarak yeni özellikler kazandırılan canlılardır (Örn: A vitamini öncülü gen aktarılmış Altın Pirinç).',
        'Yararları: Hastalıkların erken teşhis kitleri, aşı ve ilaç üretimi, kuraklığa dayanıklı bitkiler, yapay organ ve kök hücre tedavisi.',
        'Olası Zararları ve Riskler: Besinlerde beklenmedik alerjik reaksiyonlar, tarım ilaçlarına dirençli süper yabani otların türemesi, geleneksel tohumların kısırlaşması ve genetik kirlilik.'
      ],
      evaluationQuestions: [
        {
          question: 'Dil balığındaki donmayı önleyen genin alabalığa aktarılması hangi biyoteknolojik yönteme örnektir?',
          answer: 'Farklı türler arasında gen transferi yapıldığı için GEN AKTARIMI yöntemine örnektir.'
        }
      ],
      resultInfoBox: '2. Ünitenin tüm alt bölümleri ve kazanım akışı %100 eksiksiz tamamlanmıştır!'
    }
  ],

  // ==========================================
  // ÜNİTE 3: BASINÇ
  // ==========================================
  'g8-u3-sub1': [
    {
      id: 'g8-u3-s1-item1',
      pageNumber: '1. İstasyon',
      title: 'Katı Basıncı Tanımı ve Günlük Hayat Örnekleri',
      badge: 'Gözlem İstasyonu',
      type: 'bilgi_istasyonu',
      content: [
        'Yeryüzündeki tüm katı cisimler ağırlıklarından dolayı temas ettikleri yüzeye dik bir kuvvet uygular. Birim yüzeye dik etki eden bu kuvvete basınç (P) denir; birimi Pascal’dır (Pa).',
        'Tavuk ve Ördek Örneği: Ağırlıkları eşit tavuk ve ördekten tavuğun ayakları çamura daha çok batar. Çünkü ördeğin ayakları perdeli olup temas yüzey alanı geniştir ve basıncı küçüktür.',
        'Kar Ayakkabısı: Karda yürürken geniş tabanlı ayakkabı giyilmesi yüzey alanını artırıp basıncı düşürür ve kara batmayı önler.',
        'Bıçağın Bilenmesi: Körelen bıçak bilenerek ağız yüzey alanı küçültülür, basınç artırılır ve aynı kuvvetle kesme işlemi kolaylaşır.'
      ],
      resultInfoBox: 'Katı Basıncı Formülü: P = Kuvvet (Ağırlık) / Yüzey Alanı ➔ P = G / S.'
    },
    {
      id: 'g8-u3-s1-item2',
      pageNumber: '2. İstasyon',
      title: '1. Etkinlik: Kumda Oluşan İzler',
      badge: '1. Etkinlik İstasyonu',
      type: 'etkinlik_istasyonu',
      materials: ['Kum havuzu / Derin kutu', '2 adet özdeş tuğla', 'Cetvel'],
      steps: [
        'Kutuya doldurulan kumun yüzeyini düzleştiriniz.',
        'Kum üzerine bir tuğlayı dikey (küçük yüzey), diğerini yatay (geniş yüzey) koyup iz derinliğini cetvelle ölçünüz.',
        'Ardından tek yatay tuğla ile üst üste konulmuş iki yatay tuğlanın kumdaki iz derinliğini ölçünüz.'
      ],
      evaluationQuestions: [
        {
          question: 'Kum üzerinde hangi konumdaki tuğlanın bıraktığı izin derinliği en fazladır? Neden?',
          answer: 'Dikey konulan tuğlanın temas yüzey alanı küçük olduğu için kuma daha derin batmıştır (Yüzey alanı azaldıkça basınç artar).'
        },
        {
          question: 'Üst üste iki tuğla konulduğunda izin derinliği neden artmıştır?',
          answer: 'Yüzey alanı sabitken tuğla ağırlığı (kuvvet) iki katına çıktığı için basınç da iki katına çıkmış ve kumda daha derin iz oluşturmuştur.'
        }
      ],
      resultInfoBox: 'Katı basıncı kuvvet (ağırlık) ile DOĞRU ORANTILI, temas yüzey alanı ile TERS ORANTILIDIR.'
    },
    {
      id: 'g8-u3-s1-item3',
      pageNumber: '3. İstasyon',
      title: 'Katıların Kuvveti İletmesi Prensibi (Çivi ve Raptiye)',
      badge: 'Bilgi İstasyonu',
      type: 'bilgi_istasyonu',
      content: [
        'Çekiçle çivinin geniş başına vurulduğunda uygulanan F kuvveti, çivinin sivri ucuna büyüklüğü ve doğrultusu değişmeden AYNEN iletilir.',
        'Ancak sivri ucun yüzey alanı çok küçük olduğundan sivri uçta devasa bir BASINÇ oluşur ve çivi tahtaya kolayca saplanır.',
        'Katılar kuvveti aynen iletir; basınç ise yüzey alanı küçüldükçe büyür.'
      ],
      resultInfoBox: 'Basınç Artıranlar: İğne, çivi, raptiye, buz pateni, krampon, dişler / Basınç Azaltanlar: Kar ayakkabısı, tank paleti, tır tekerlekleri, fil ayağı.'
    }
  ],

  'g8-u3-sub2': [
    {
      id: 'g8-u3-s2-item1',
      pageNumber: '1. İstasyon',
      title: 'Sıvı Basıncı, 2. ve 3. Etkinlik (Derinlik ve Yoğunluk İlişkisi)',
      badge: 'Deney İstasyonu',
      type: 'etkinlik_istasyonu',
      materials: ['2 adet pet şişe', 'Biz / Çivi (delmek için)', 'Su', 'Ayçiçeği yağı', 'Leğen'],
      steps: [
        'Pet şişenin yan yüzeyine yukarıdan aşağıya eşit aralıklarla 3 delik açıp suyla doldurunuz.',
        'Delikleri açtığınızda en alttaki delikten fışkıran suyun en uzağa gittiğini gözlemleyiniz.',
        'Aynı derinlikteki su ve ayçiçeği yağı şişelerine delik açıp suyun daha uzağa fışkırdığını tespit ediniz.'
      ],
      evaluationQuestions: [
        {
          question: 'En alttaki delikten fışkıran suyun en uzağa gitmesinin sebebi nedir?',
          answer: 'Sıvı yüzeyinden derinlere inildikçe sıvı derinliği (h) arttığı için sıvı basıncı en yüksek değerine ulaşır ve suyu daha uzağa fışkırtır.'
        },
        {
          question: 'Su toplama barajlarının duvarları neden tabana doğru kalınlaşacak şekilde inşa edilir?',
          answer: 'Derinlik arttıkça suyun tabana uyguladığı sıvı basıncı çok büyük değerlere ulaştığından duvarın basınca dayanabilmesi için tabanı kalın yapılır.'
        }
      ],
      resultInfoBox: 'Sıvı Basıncı Formülü: P = h (derinlik) × d (yoğunluk). Kabın şekline ve sıvı miktarına bağlı DEĞİLDİR!'
    },
    {
      id: 'g8-u3-s2-item2',
      pageNumber: '2. İstasyon',
      title: 'Pascal Prensibi ve Hidrolik Fren Sistemleri',
      badge: 'Teknoloji İstasyonu',
      type: 'bilgi_istasyonu',
      content: [
        'Pascal Prensibi: Kapalı bir kapta bulunan sıvıya dışarıdan uygulanan basınç, sıvı tarafından sıvının temas ettiği kabın her noktasına dik ve AYNEN iletilir.',
        'Sıvılar sıkıştırılamaz kabul edildiği için hidrolik sistemlerin temelini oluşturur.',
        'Su Cenderesi: Kesitleri farklı iki silindirden oluşur. Küçük pistona uygulanan kuvvetle oluşan sıvı basıncı büyük pistona aynen iletilir ve yüzey geniş olduğu için devasa ağırlıklar kaldırılır.',
        'Araba Hidrolik Freni: Fren pedalına basıldığında fren hidrolik sıvısındaki basınç tekerleklerdeki fren pabuçlarına ve disklere iletilerek aracı durdurur.',
        'Kullanım Alanları: İtfaiye merdiveni, vinç, damperli kamyon, oto lifti, berber koltuğu, hidrolik presler.'
      ],
      resultInfoBox: 'Pascal Prensibinde: Sıvılar KUVVETİ değil, üzerlerine uygulanan BASINCI aynen iletir!'
    }
  ],

  'g8-u3-sub3': [
    {
      id: 'g8-u3-s3-item1',
      pageNumber: '1. İstasyon',
      title: 'Gaz Basıncı, Torricelli Deneyi ve 4. Etkinlik (Su Neden Dökülmüyor?)',
      badge: 'Tarih & Deney İstasyonu',
      type: 'etkinlik_istasyonu',
      materials: ['Cam su bardağı', 'Su', 'Kuşe kâğıt / Sert kâğıt'],
      steps: [
        'Bardağı ağzına kadar su ile doldurup üzerine kâğıt kapatınız.',
        'Elinizle destekleyerek bardağı ters çevirip elinizi çekiniz.',
        'Açık hava basıncının alttan uyguladığı kuvvet sayesinde suyun dökülmediğini gözlemleyiniz.'
      ],
      content: [
        'Açık Hava Basıncı (P0): Atmosferi oluşturan gazların ağırlığı ve hareketiyle yeryüzündeki tüm cisimlere uyguladığı basınçtır.',
        'Torricelli Deneyi (1643): Deniz seviyesinde ve 0 °C sıcaklıkta cıva dolu 1 metrelik cam boruda cıva yüksekliği 76 cm olarak ölçülmüştür (P0 = 76 cm-Hg).',
        'Yükseklik Kuralı: Deniz seviyesinden yükseklere çıkıldıkça atmosfer gazlarının yoğunluğu azaldığı için açık hava basıncı AZALIR.',
        'Havası boşaltılan pet şişenin içe doğru büzüşmesi açık hava basıncının her yönden etki ettiğini kanıtlar.'
      ],
      resultInfoBox: 'Gazlar yüksek basınç altında sıkıştırılarak sıvılaştırılabilir (mutfak tüpü, oksijen tüpü, deodorantlar).'
    },
    {
      id: 'g8-u3-s3-item2',
      pageNumber: '2. İstasyon',
      title: '3. Bölüm Sonu Değerlendirmesi: Basınç Artırma/Azaltma & Meslekler',
      badge: 'Bölüm Sonu Değerlendirmesi',
      type: 'pekistirme_istasyonu',
      prompt: 'Günlük hayatta basıncı artıran/azaltan araçlar, küplerle katı basıncı karşılaştırması ve basınca maruz kalan meslekler.',
      evaluationQuestions: [
        {
          question: 'Dalgıçlar, dağcılar, pilotlar ve denizaltı mürettebatı neden basınç seviyelerini sürekli göz önünde bulundurmalıdır?',
          answer: 'Dalgıçlar ve denizaltı personeli derinlerde yüksek sıvı basıncına (vurgun tehlikesi) maruz kalırken; dağcılar ve pilotlar yüksek rakımlarda düşük açık hava basıncına (kulak tıkanması, burun kanaması, oksijen azlığı) maruz kaldıkları için basınç dengesini korumak zorundadırlar.'
        }
      ],
      resultInfoBox: '3. Ünite Basınç konusu tüm kazanım, deney ve görsel analizleriyle eksiksiz tamamlanmıştır.'
    }
  ],

  // ==========================================
  // ÜNİTE 4: MADDE VE ENDÜSTRİ
  // ==========================================
  'g8-u4-sub1': [
    {
      id: 'g8-u4-s1-item1',
      pageNumber: '1. İstasyon',
      title: 'Periyodik Sistemin Tarihçesi: Döbereiner, Newlands, Mendeleyev ve Moseley',
      badge: 'Bilim Tarihi İstasyonu',
      type: 'bilgi_istasyonu',
      content: [
        'Hennig Brand (1669): Fosforu bularak element keşif çağını başlattı.',
        'Johann Döbereiner (1829): Benzer özellik gösteren elementleri üçlü gruplar (triadlar: Li, Na, K) halinde düzenledi.',
        'John Newlands (1864): 62 elementi artan atom ağırlıklarına göre dizdi; özelliklerin 8. elementte bir tekrarlandığını fark ederek müzik notalarına benzetti (Oktavlar Kuralı).',
        'Alexandre de Chancourtois: Benzer elementleri dikey sarmal silindir üzerine dizdi.',
        'Dmitri Mendeleyev & Lothar Meyer (1869): Birbirinden habersiz atom ağırlıklarına göre periyodik tablo oluşturdu. Mendeleyev henüz keşfedilmemiş elementler için boşluklar bıraktı.',
        'Henry Moseley (1913): Modern periyodik tablonun temelini attı; elementleri atom ağırlığına göre değil, ARTAN ATOM NUMARASINA (PROTON SAYISINA) göre dizdi.',
        'Glenn Seaborg: Tablonun en altına iki yatay sıra (Lantanit ve Aktinit) ekleyerek bugünkü son şeklini verdi.'
      ],
      resultInfoBox: 'Modern periyodik sistem PROTON SAYISINA (atom numarasına) göre dizilmiştir.'
    },
    {
      id: 'g8-u4-s1-item2',
      pageNumber: '2. İstasyon',
      title: 'Periyotlar, Gruplar ve Periyodik Özelliklerin Değişimi',
      badge: 'Bilgi İstasyonu',
      type: 'bilgi_istasyonu',
      content: [
        'Yatay sıralara PERİYOT denir (7 tane periyot vardır). Katman sayısını verir.',
        'Düşey sütunlara GRUP denir (18 grup: 8 tane A, 10 tane B grubu). Son katmandaki elektron sayısını verir.',
        'Aynı gruptaki elementlerin kimyasal özellikleri GENELLİKLE BENZERDİR.',
        'Soldan Sağa Doğru: Atom numarası artar, grup numarası artar, metalik özellik azalır, ametalik özellik artar.',
        'Yukarıdan Aşağıya Doğru: Atom numarası artar, periyot (katman) sayısı artar, metalik özellik artar.'
      ],
      resultInfoBox: '1A grubunda sadece Hidrojen (H) ametaldir, diğerleri alkali metaldir. 8A grubundaki Helyum’un son katmanında 2 elektron vardır.'
    },
    {
      id: 'g8-u4-s1-item3',
      pageNumber: '3. İstasyon',
      title: 'Elementlerin Sınıflandırılması: Metal, Ametal, Yarı Metal, Soygaz',
      badge: 'Sınıflandırma & Değerlendirme',
      type: 'pekistirme_istasyonu',
      content: [
        'Metaller: Parlaktır, ısı ve elektriği iyi iletir, tel ve levha haline gelir, cıva (Hg) hariç oda sıcaklığında katıdır.',
        'Ametaller: Mattır, ısı ve elektriği iletmez (grafit hariç), kırılgandır, katı-sıvı-gaz halde olabilirler.',
        'Yarı Metaller: Bor (B) ve Silisyum (Si). Fiziksel özellikleri metallere, kimyasal özellikleri ametallere benzer; yarı iletkendir.',
        'Soygazlar: 8A grubu (He, Ne, Ar, Kr, Xe, Rn). Kararlı yapıdadırlar, tek atomlu gaz halindedirler, bileşik yapmazlar.'
      ],
      resultInfoBox: 'Bölüm 1 tamamlandı. Bölümdeki yön analizi ve doğru/yanlış soruları kavrandı.'
    }
  ],

  'g8-u4-sub2': [
    {
      id: 'g8-u4-s2-item1',
      pageNumber: '1. İstasyon',
      title: 'Fiziksel Değişim ve 1. Etkinlik (Maddelerde Değişim)',
      badge: '1. Etkinlik İstasyonu',
      type: 'etkinlik_istasyonu',
      materials: ['2 adet küp şeker', '2 adet deney tüpü', 'Su', 'İspirto ocağı', 'Saat camı'],
      steps: [
        'Deney tüplerinden birine küp şeker ve su koyup karıştırarak çözünüz.',
        'İkinci deney tüpündeki küp şekeri ispirto ocağı ile ısıtıp rengini ve kokusunu gözlemleyiniz.',
        'Şekerli suyu saat camında buharlaştırıp dipteki beyaz şeker tortusunu inceleyiniz.'
      ],
      evaluationQuestions: [
        {
          question: 'Isıtılan şekerde ve suda çözünen şekerde ne tür değişimler gerçekleşmiştir?',
          answer: 'Suda çözünen şekerin iç yapısı değişmemiştir; su buharlaşınca şeker geri kazanılır (Fiziksel değişim). Isıtılan şeker ise yanıp kararmış, kömürleşerek yeni bir maddeye dönüşmüştür (Kimyasal değişim).'
        }
      ],
      resultInfoBox: 'Maddenin kimliği değişmeden sadece dış görünüşü değişiyorsa Fiziksel Değişimdir.'
    },
    {
      id: 'g8-u4-s2-item2',
      pageNumber: '2. İstasyon',
      title: 'Kimyasal Değişim & 2. Bölüm Sonu Değerlendirmesi',
      badge: 'Bölüm Sonu Değerlendirmesi',
      type: 'pekistirme_istasyonu',
      content: [
        'Kimyasal Değişim: Maddenin atomları arasındaki bağların kopup yeni bağlar oluşmasıyla iç yapısının değişmesidir.',
        'İpuçları: Gaz çıkışı, renk değişimi, koku oluşumu, ısı ve ışık yayılması.',
        'Fiziksel Örnekler: Cam kırılması, suyun buharlaşması, buz erimesi, patates dilimlenmesi, kâğıt yırtılması, tuzun çözünmesi.',
        'Kimyasal Örnekler: Demirin paslanması, odunun yanması, ekmeğin küflenmesi, sütün mayalanması, yumurtanın pişmesi.'
      ],
      resultInfoBox: 'Tüm hâl değişimleri ve çözünme olayları FİZİKSEL; yanma, paslanma ve mayalanma KİMYASALDIR.'
    }
  ],

  'g8-u4-sub3': [
    {
      id: 'g8-u4-s3-item1',
      pageNumber: '1. İstasyon',
      title: 'Kimyasal Tepkimeler ve Kütlenin Korunumu Kanunu',
      badge: 'Bilgi İstasyonu',
      type: 'bilgi_istasyonu',
      content: [
        'Kimyasal Tepkime: Maddelerin bağlarının kopup yeni bağlar oluşturarak yeni maddelere dönüşmesidir: Girenler ➔ Ürünler.',
        'Kütlenin Korunumu Kanunu: Kapalı bir kapta giren maddelerin kütleleri toplamı ürünlerin kütleleri toplamına DAİMA EŞİTTİR.',
        'Örnek: 32 g Kükürt (S) + 32 g Oksijen (O2) ➔ 64 g Kükürt dioksit (SO2).',
        'Tepkimede Kesinlikle Korunanlar: Toplam kütle, atom sayısı ve atom çeşidi, toplam proton, nötron ve elektron sayısı.'
      ],
      resultInfoBox: 'Kimyasal tepkimede atom cinsi değişmez; sadece atomlar arasındaki bağlar değişir.'
    },
    {
      id: 'g8-u4-s3-item2',
      pageNumber: '2. İstasyon',
      title: '3. Bölüm Sonu Değerlendirmesi: Kütle Hesabı ve Gümüş Kolye Olayı',
      badge: 'Problem Çözme İstasyonu',
      type: 'pekistirme_istasyonu',
      prompt: 'Verilen 15 g A + B ➔ 70 g bileşik problemi ve havadaki gümüşün kararması yorumu.',
      evaluationQuestions: [
        {
          question: 'A maddesinden 15 g alındığında 70 g bileşik oluştuğuna göre kullanılan B maddesi kaç gramdır?',
          answer: 'Kütlenin korunumu kanununa göre: mA + mB = mBileşik ➔ 15 g + mB = 70 g ➔ mB = 55 gramdır.'
        },
        {
          question: 'Kutuda saklanan gümüş kolyenin yüzeyinin hafifçe kararmasının bilimsel sebebi nedir?',
          answer: 'Gümüşün yüzeyi havadaki kükürt ve oksijen gibi gazlarla kimyasal tepkimeye girerek yüzeyinde yeni bir bileşik tabakası (gümüş sülfür/oksit) oluşturmuştur.'
        }
      ],
      resultInfoBox: '3. Bölüm kütle korunumu ve tepkime modelleriyle tam olarak öğrenildi.'
    }
  ],

  'g8-u4-sub4': [
    {
      id: 'g8-u4-s4-item1',
      pageNumber: '1. İstasyon',
      title: 'Asitler, Bazlar ve 2. Etkinlik (Lahana Suyu Doğal Ayıracı)',
      badge: '2. Etkinlik İstasyonu',
      type: 'etkinlik_istasyonu',
      materials: ['Kırmızı lahana', 'Sıcak su', 'Limon suyu, sirke, sabun, çamaşır suyu, karbonat', 'Şeffaf bardaklar'],
      steps: [
        'Kırmızı lahanayı sıcak suda bekletip mor renkli lahana suyunu süzünüz.',
        'Bardaklara sırayla limon suyu, sirke, sabun, çamaşır suyu, karbonat koyup lahana suyu ekleyiniz.',
        'Asitlerde lahana suyunun kırmızı-pembe renge, bazlarda ise yeşil-mavi renge dönüştüğünü gözlemleyiniz.'
      ],
      content: [
        'Asitler: Suda H+ iyonu verir, tatları ekşidir, mavi turnusolu kırmızı yapar (HCl Tuz ruhu, HNO3 Kezzap, H2SO4 Zaç yağı).',
        'Bazlar: Suda OH- iyonu verir, tatları acıdır ve kaygandır, kırmızı turnusolu mavi yapar (NaOH Sud-kostik, KOH Potas-kostik, Ca(OH)2 Sönmüş kireç, NH3 Amonyak).'
      ],
      resultInfoBox: 'Doğal ayıraç kırmızı lahana suyu: Asitte KIRMIZI, Bazda YEŞİL renk verir.'
    },
    {
      id: 'g8-u4-s4-item2',
      pageNumber: '2. İstasyon',
      title: 'pH Çizelgesi, 3, 4 ve 5. Etkinlikler (Maddelere Etkisi)',
      badge: 'Deney & Tehlike İstasyonu',
      type: 'etkinlik_istasyonu',
      content: [
        'pH Skalası: 0 - 7 arası ASİT (0’a yaklaştıkça kuvvetlenir), 7 NÖTR (saf su), 7 - 14 arası BAZ (14’e yaklaştıkça kuvvetlenir).',
        'Asitlerin Etkisi: Metallerle tepkimeye girip H2 gazı çıkarır ve aşındırır; mermer tezgâhları aşındırır.',
        'Bazların Etkisi: Cam ve porselen eşyaları zamanla matlaştırır ve aşındırır.',
        'Ev Kazası Uyarısı: Tuz ruhu (asit) ile çamaşır suyu (baz) ASLA karıştırılmamalıdır (Zehirli klor gazı çıkar).'
      ],
      resultInfoBox: 'Asitler mermer ve metale; bazlar cam ve porselene zarar verir.'
    },
    {
      id: 'g8-u4-s4-item3',
      pageNumber: '3. İstasyon',
      title: 'Asit Yağmurları & 4. Bölüm Sonu Değerlendirmesi',
      badge: 'Çevre & Değerlendirme İstasyonu',
      type: 'pekistirme_istasyonu',
      content: [
        'Asit Yağmurları: Fabrika ve araçlardan çıkan SO2, NO2 ve CO2 gazları su buharıyla birleşip sülfürik ve nitrik asite dönüşür.',
        'Etkileri: Ormanları kurutur, göllerdeki canlıları öldürür, tarihi mermer ve metal heykelleri eritir.',
        'Önlemler: Yenilenebilir enerjiye geçiş, filtre takılması, toplu taşıma kullanımı.'
      ],
      resultInfoBox: 'Bölüm 4 tamamlandı! Turnusol kâğıdı ve asit yağmuru soruları çözüldü.'
    }
  ],

  'g8-u4-sub5': [
    {
      id: 'g8-u4-s5-item1',
      pageNumber: '1. İstasyon',
      title: 'Isı, Sıcaklık ve Öz Isı (6, 7 ve 8. Etkinlikler)',
      badge: 'Deney & Değişken İstasyonu',
      type: 'etkinlik_istasyonu',
      content: [
        'Öz Isı (c): 1 gram saf maddenin sıcaklığını 1 °C artırmak için gereken ısı enerjisidir (J/g °C). Ayırt edicidir.',
        'Öz ısısı büyük olan maddeler GEÇ ISINIR, GEÇ SOĞUR (Su c=4,18). Öz ısısı küçük olanlar ÇABUK ISINIR, ÇABUK SOĞUR (Demir c=0,46).',
        'Kütle İlişkisi: Kütlesi az olan maddeye aynı ısı verilince sıcaklık artışı daha fazla olur.',
        'Isı Miktarı İlişkisi: Fazla ısı verilen maddenin sıcaklık artışı daha fazla olur.'
      ],
      resultInfoBox: 'Eşit kütleli maddelerden öz ısısı KÜÇÜK olanın sıcaklığı daha ÇOK artar.'
    },
    {
      id: 'g8-u4-s5-item2',
      pageNumber: '2. İstasyon',
      title: 'Hâl Değişim Grafikleri, Platolar ve Günlük Yaşam Olayları',
      badge: 'Grafik & Değerlendirme İstasyonu',
      type: 'pekistirme_istasyonu',
      content: [
        'Hâl Değişimi Sabit Sıcaklık: Saf maddeler erirken ve kaynarken sıcaklıkları SABİT KALIR (grafikteki yatay düz çizgiler).',
        'Buharlaşma Isı Alır: Ele dökülen kolonyanın serinletmesi, kesilen karpuzun güneşte soğuması, testideki suyun soğuk kalması.',
        'Öz Isı Sıralaması: Sıcaklığı en az artan P sıvısının öz ısısı en büyüktür (cP > cR > cS).'
      ],
      resultInfoBox: 'Bölüm 5 tamamlandı! Sıcaklık-zaman grafikleri ve öz ısı hesaplamaları pekiştirildi.'
    }
  ],

  'g8-u4-sub6': [
    {
      id: 'g8-u4-s6-item1',
      pageNumber: '1. İstasyon',
      title: 'Türkiye’de Kimya Endüstrisi, Kuruluşlar ve Meslek Dalları',
      badge: 'Sanayi & Meslek İstasyonu',
      type: 'pekistirme_istasyonu',
      content: [
        'Tarihsel Gelişim: 1937 Karabük Demir Çelik, MKE (savunma sanayisi), PETKİM (1965 petrokimya), TÜBİTAK (1963), ETİ Maden (dünya bor rezervlerinin %73’ü).',
        'Dış Ticaret: Türkiye kimya ham maddesinde (özellikle ham petrol) %70 oranında dışa bağımlıdır.',
        'Meslekler: Kimya Mühendisi (tesis tasarımı ve ekonomik üretim), Kimyager (laboratuvarda madde analizi ve sentez), Kimya Teknisyeni, Metalurji Mühendisi, Eczacı.'
      ],
      resultInfoBox: '4. Ünitenin tüm 6 alt bölümü ve kazanımları birebir uygun olarak tamamlandı!'
    }
  ],

  // ==========================================
  // ÜNİTE 5: BASİT MAKİNELER
  // ==========================================
  'g8-u5-sub1': [
    {
      id: 'g8-u5-s1-item1',
      pageNumber: '1. İstasyon',
      title: 'Basit Makinelerin Sağladığı Avantajlar ve Genel Kurallar',
      badge: 'Temel Prensip İstasyonu',
      type: 'bilgi_istasyonu',
      content: [
        'Basit makineler günlük hayatı kolaylaştıran az parçalı araçlardır.',
        'ALTIN KURAL: Basit makinelerde İŞTEN veya ENERJİDEN KAZANÇ KESİNLİKLE YOKTUR! İş kolaylığı sağlanır.',
        'Kuvvet Kazancı: Giriş kuvveti < Yük ise kuvvet kazancı vardır. Kuvvetten kazanç varsa aynı oranda yoldan kayıp vardır.',
        'Aynı anda hem kuvvetten hem yoldan kazanç ASLA sağlanamaz.'
      ],
      resultInfoBox: 'Kuvvet Kazancı = Yük / Kuvvet (P / F > 1 ise kuvvet kazancı vardır).'
    },
    {
      id: 'g8-u5-s1-item2',
      pageNumber: '2. İstasyon',
      title: 'Sabit Makara, Hareketli Makara ve Palangalar (1, 2 ve 3. Etkinlikler)',
      badge: 'Deney & Makara İstasyonu',
      type: 'etkinlik_istasyonu',
      materials: ['Sabit makara', 'Hareketli makara', 'Dinamometre', 'İp', 'Yarıklı kütleler (10 N)'],
      steps: [
        'Sabit makarada 4 yarıklı kütleyi kaldırıp dinamometredeki değeri okuyunuz (F = P, kazanç yok, yön değişir).',
        'Hareketli makarada kütleyi kaldırıp dinamometredeki değeri okuyunuz (F = P / 2, kuvvetten 2 kat kazanç, yoldan 2 kat kayıp).',
        'Sabit ve hareketli makaraları birleştirerek palanga kurunuz.'
      ],
      evaluationQuestions: [
        {
          question: 'Hareketli makarada 10 N ağırlığındaki yükü 2 metre yukarı çıkarmak için ip kaç metre çekilmelidir?',
          answer: 'Kuvvetten 2 kat kazanç olduğu için yoldan 2 kat kayıp vardır; ip 4 metre çekilmelidir.'
        }
      ],
      resultInfoBox: 'Sabit makara: F = P (Sadece yön değiştirir). Hareketli makara: F = P / 2 (Kuvvet kazancı 2 kat).'
    }
  ],

  'g8-u5-sub2': [
    {
      id: 'g8-u5-s2-item1',
      pageNumber: '1. İstasyon',
      title: 'Kaldıraçlar ve 4. Etkinlik (Kuvvet ve Kuvvet Kolu)',
      badge: 'Archimedes & Kaldıraç İstasyonu',
      type: 'etkinlik_istasyonu',
      content: [
        'Kaldıraç Bağıntısı: Kuvvet × Kuvvet Kolu = Yük × Yük Kolu (F · a = P · b).',
        'Desteğin Arada Olduğu: Tahterevalli, pense, makas, keser (kazanç, kayıp veya eşit olabilir).',
        'Yükün Arada Olduğu: El arabası, ceviz kıracağı, gazoz açacağı, menteşeli kapı (DAİMA KUVVET KAZANCI vardır).',
        'Kuvvetin Arada Olduğu: Cımbız, maşa, kürek, olta, tenis raketi (Kuvvetten kayıp, yoldan kazanç vardır).'
      ],
      resultInfoBox: 'Kuvvet kolu uzadıkça uygulanacak kuvvet küçülür ve kuvvet kazancı artar.'
    }
  ],

  'g8-u5-sub3': [
    {
      id: 'g8-u5-s3-item1',
      pageNumber: '1. İstasyon',
      title: 'Eğik Düzlem, Çıkrık ve 5. Etkinlik (Kuvvetten Kazanç)',
      badge: 'Rampa & Çıkrık İstasyonu',
      type: 'etkinlik_istasyonu',
      materials: ['Eğik düzlem tahtası', 'Eğik düzlem arabası', 'Takozlar', 'Dinamometre'],
      steps: [
        'Eğik düzlem tahtası ve takozlarla rampa oluşturup arabayı dinamometre ile çekiniz.',
        'Takoz sayısını artırarak rampa yüksekliğini artırdığınızda dinamometrede okunan kuvvetin arttığını görünüz.'
      ],
      content: [
        'Eğik Düzlem: Kuvvet Kazancı = Boy (L) / Yükseklik (h). DAİMA KUVVETTEN KAZANÇ, YOLDAN KAYIP vardır.',
        'Çıkrık: Eş merkezli silindirler. Büyük yarıçap kuvvet kolu (R), küçük yarıçap yük koludur (r). R > r olduğu için DAİMA KUVVET KAZANCI vardır (kuyu çıkrığı, direksiyon, tornavida, musluk).'
      ],
      resultInfoBox: 'Eğik düzlemde boy uzadıkça veya eğim azaldıkça kuvvet kazancı artar.'
    },
    {
      id: 'g8-u5-s3-item2',
      pageNumber: '2. İstasyon',
      title: 'Vida, Dişli Çarklar, Bisiklet ve Bölüm Sonu Değerlendirmesi',
      badge: 'Bileşik Makine & Değerlendirme',
      type: 'pekistirme_istasyonu',
      content: [
        'Vida: Silindir üzerine sarılmış eğik düzlemdir; vida adımı küçüldükçe kuvvet kazancı artar.',
        'Dişli Çarklar: Farklı merkezli dişliler birbirine zıt döner; küçük dişli daha fazla tur atar.',
        'Bisiklet (Bileşik Makine): Pedal (çıkrık), zincir ve dişliler, cıvatalar (vida), fren kolları (kaldıraç).'
      ],
      resultInfoBox: '5. Ünite basit makineler konusu tüm mekanizmalarıyla eksiksiz tamamlanmıştır.'
    }
  ],

  // ==========================================
  // ÜNİTE 6: ENERJİ DÖNÜŞÜMLERİ VE ÇEVRE
  // ==========================================
  'g8-u6-sub1': [
    {
      id: 'g8-u6-s1-item1',
      pageNumber: '1. İstasyon',
      title: 'Besin Zinciri, Ekoloji Piramidi ve Paraşütlü Kediler',
      badge: 'Ekoloji İstasyonu',
      type: 'pekistirme_istasyonu',
      content: [
        'Besin Zinciri: Üretici (ototrof) ➔ 1. Tüketici (otçul) ➔ 2. Tüketici (etçil) ➔ 3. Tüketici (etçil/yırtıcı). Ayrıştırıcılar her basamaktadır.',
        'Ekoloji Piramidinde Yukarı Çıkıldıkça: Aktarılan enerji azalır (%10 kuralı), birey sayısı azalır, biyokütle azalır, BİYOLOJİK BİRİKİM (zehir) ARTAR.',
        'Biyolojik Birikim Analizi: Midye (2) ➔ Hamsi (10) ➔ İstavrit (50) ➔ Levrek (250) ➔ Ördek (1250 birim cıva).',
        'Tarihsel Ekoloji Olayı (Paraşütlü Kediler): Sıtma için sıkılan DDT böcek ilacı besin zincirini çökertmiş, kediler ölünce fare salgını çıkmış ve İngiliz ordusu paraşütle kedi indirmiştir.'
      ],
      resultInfoBox: 'Biyolojik birikim piramidin tepesindeki son tüketicide EN FAZLADIR.'
    }
  ],

  'g8-u6-sub2': [
    {
      id: 'g8-u6-s2-item1',
      pageNumber: '1. İstasyon',
      title: 'Fotosentez, 1. Etkinlik (Işık ve Lügol) & Hız Faktörleri',
      badge: '1. Etkinlik İstasyonu',
      type: 'etkinlik_istasyonu',
      materials: ['Saksı bitkisi', 'Alüminyum folyo', 'Etil alkol', 'Su banyosu / Isıtıcı', 'Lügol çözeltisi'],
      steps: [
        'Saksı bitkisinin bir yaprağını alüminyum folyo ile sarıp 1 hafta bekletiniz.',
        'Yaprağı alkolde kaynatıp üzerine lügol çözeltisi damlatınız.',
        'Işık alan kısmın mavi-mor (nişasta var), folyolu kısmın kahverengi (nişasta yok) kaldığını görünüz.'
      ],
      content: [
        'Fotosentez Denklemi: Karbondioksit + Su --(Işık/Klorofil)--> Glikoz + Oksijen.',
        'Işık Rengi (Engelmann): En hızlı Mor ve Kırmızıda, en yavaş Yeşil ışıktadır.',
        'Sıcaklık: En uygun 25-35 °C arasıdır; 50 °C üzerinde enzimler bozulur.'
      ],
      resultInfoBox: 'Fotosentez sadece ışıklı ortamda gerçekleşir; organik besin ve oksijen üretir.'
    },
    {
      id: 'g8-u6-s2-item2',
      pageNumber: '2. İstasyon',
      title: 'Solunum Çeşitleri (Oksijenli, Oksijensiz, Fermantasyon) & Bölüm Sonu',
      badge: 'Hücresel Enerji & Değerlendirme',
      type: 'pekistirme_istasyonu',
      content: [
        'Oksijenli Solunum: Mitokondride glikozun O2 ile yakılıp bol ATP (30-32 ATP), CO2 ve H2O üretilmesidir.',
        'Etil Alkol Fermantasyonu: Maya mantarlarınca yapılır; CO2 gazı ve alkol çıkar (hamur kabarır).',
        'Laktik Asit Fermantasyonu: Yoğurt bakterileri ve çizgili kaslarda gerçekleşir; CO2 çıkmaz, yorgunluk asidi üretilir.'
      ],
      resultInfoBox: 'Bitkiler gündüz hem fotosentez hem solunum, gece ise sadece solunum yapar.'
    }
  ],

  'g8-u6-sub3': [
    {
      id: 'g8-u6-s3-item1',
      pageNumber: '1. İstasyon',
      title: 'Madde Döngüleri, Sera Etkisi ve Ekolojik Ayak İzi',
      badge: 'Döngüler & Ekoloji İstasyonu',
      type: 'pekistirme_istasyonu',
      content: [
        'Azot Döngüsü: Baklagil köklerindeki azot bağlayıcı bakteriler ve şimşek havadaki %78 azotu toprağa bağlar.',
        'Sera Etkisi: Fosil yakıtların çıkardığı CO2 ve CH4 gezegenin aşırı ısınmasına yol açar.',
        'Ekolojik Ayak İzi Bileşenleri: Karbon (%46), Tarım arazisi (%35), Orman (%11), Otlak (%3), Yapılaşmış alan (%3), Balıkçılık (%2).'
      ],
      resultInfoBox: 'Dünya Limit Aşım Günü her yıl daha erkene kaymaktadır; doğal kaynaklar hızla tükenmektedir.'
    }
  ],

  'g8-u6-sub4': [
    {
      id: 'g8-u6-s4-item1',
      pageNumber: '1. İstasyon',
      title: 'Sürdürülebilir Kalkınma, Su Tasarrufu ve Geri Dönüşüm',
      badge: 'Sürdürülebilirlik İstasyonu',
      type: 'pekistirme_istasyonu',
      content: [
        'Sürdürülebilir Kalkınma: Gelecek nesillerin haklarını gasp etmeden bugünün ihtiyaçlarını karşılama modelidir.',
        'Yok Olma Süreleri: Kâğıt: 3 ay, Metal: 100 yıl, Plastik: 1000 yıl, Cam: 4000 yıl.',
        'Enerji Tasarrufu: Alüminyum kutunun geri dönüşümü %90 enerji tasarrufu sağlar.'
      ],
      resultInfoBox: '6. Ünitenin tüm alt başlıkları ve etkinlikleri eksiksiz tamamlanmıştır.'
    }
  ],

  // ==========================================
  // ÜNİTE 7: ELEKTRİK YÜKLERİ VE ENERJİ
  // ==========================================
  'g8-u7-sub1': [
    {
      id: 'g8-u7-s1-item1',
      pageNumber: '1. İstasyon',
      title: 'Elektrik Yükleri, Şimşek, Yıldırım ve 1. Etkinlik (Çubuklar)',
      badge: 'Elektrostatik İstasyonu',
      type: 'etkinlik_istasyonu',
      materials: ['Ebonit (plastik) çubuk (2 adet)', 'Cam çubuk', 'Yün kumaş', 'İpek kumaş', 'İp ve destek'],
      steps: [
        'Ebonit çubuğu yün kumaşa sürtüp asınız. İkinci ebonit çubuğu yaklaştırıp birbirini ittiğini gözlemleyiniz.',
        'Cam çubuğu ipek kumaşa sürtüp ebonit çubuğa yaklaştırınız; zıt yüklerin birbirini çektiğini gözlemleyiniz.'
      ],
      content: [
        'Aynı yükler birbirini İTER, zıt yükler ÇEKER. Yüklü cisim nötr cismi ÇEKER.',
        'Şimşek iki bulut arasında, Yıldırım bulut ile yer arasında elektrik boşalmasıdır.',
        'Fotokopi makineleri ve fabrika bacası filtreleri statik elektrikle çalışır.'
      ],
      resultInfoBox: 'Pozitif yükler çekirdekte sabittir; elektriklenmede sadece ELEKTRONLAR hareket eder.'
    },
    {
      id: 'g8-u7-s1-item2',
      pageNumber: '2. İstasyon',
      title: 'Sürtünme, Dokunma ve Etki ile Elektriklenme (2, 3 ve 4. Etkinlikler)',
      badge: 'Deney & Değerlendirme İstasyonu',
      type: 'pekistirme_istasyonu',
      content: [
        'Sürtünme: Ebonit çubuk (-) negatif, Yün kumaş (+) pozitif; Cam çubuk (+) pozitif, İpek kumaş (-) negatif yüklenir.',
        'Dokunma: Dokundurulan cisimler kesinlikle AYNI CİNS yükle yüklenir.',
        'Etki (Tesir): Yaklaştırılan yüklü cisim nötr cisimdeki yükleri kutuplar; yakın uç zıt, uzak uç aynı yük olur.'
      ],
      resultInfoBox: '1. Bölüm tüm deney ve kazanımlarıyla tamamlandı.'
    }
  ],

  'g8-u7-sub2': [
    {
      id: 'g8-u7-s2-item1',
      pageNumber: '1. İstasyon',
      title: 'Elektroskop ve Topraklama Güvenliği',
      badge: 'Elektroskop & Güvenlik İstasyonu',
      type: 'pekistirme_istasyonu',
      content: [
        'Elektroskop: Yüklü olup olmadığını ve yük cinsini belirler. Nötrken yapraklar kapalı, yüklüyken yapraklar açıktır.',
        'Topraklama: Yüklü cismin iletken telle toprağa bağlanıp NÖTR HÂLE getirilmesidir.',
        '(-) Yüklü Cisim Topraklanınca: Fazla elektronlar toprağa akar ve nötrlenir.',
        '(+) Yüklü Cisim Topraklanınca: Topraktan cisme elektron gelir ve cisim nötrlenir.',
        'Güvenlik: Akaryakıt tankeri zincirleri, uçak iniş lastikleri, ameliyathane iletken zeminleri, topraklı prizler ve paratoner.'
      ],
      resultInfoBox: 'Topraklanan cisim daima NÖTR olur; yük alışverişinde daima elektronlar hareket eder.'
    }
  ],

  'g8-u7-sub3': [
    {
      id: 'g8-u7-s3-item1',
      pageNumber: '1. İstasyon',
      title: 'Elektrik Enerjisinin Isı, Işık ve Harekete Dönüşümü (3. Etkinlik)',
      badge: 'Dönüşüm İstasyonu',
      type: 'etkinlik_istasyonu',
      materials: ['Pil yatağı ve piller', 'Bağlantı kabloları', 'Direnç teli / Tungsten tel', 'Küçük ampul', 'Elektrik motoru', 'Anahtar'],
      steps: [
        'Basit elektrik devresi kurup tungsten tele dokunarak ısındığını gözlemleyiniz.',
        'Devreye ampul bağlayıp ışık yaydığını görünüz.',
        'Devreye küçük DC elektrik motoru bağlayıp pervaneyi döndürerek elektrik enerjisinin hareket enerjisine dönüştüğünü test ediniz.'
      ],
      content: [
        'Isıya Dönüşüm: Ütü, elektrikli soba, su ısıtıcısı, fırın, saç kurutma makinesi.',
        'Sigorta: Aşırı akımda eriyerek devreyi kesen ve yangını önleyen güvenlik elemanıdır.',
        'Işığa Dönüşüm: Tungsten tel akkorlaşır; LED lambalar %80 daha tasarrufludur.',
        'Elektrik Motoru: Elektrik enerjisini HAREKET ENERJİSİNE çevirir (vantilatör, matkap, çamaşır makinesi, robotlar).'
      ],
      resultInfoBox: 'Elektrik Motoru = Elektrik ➔ Hareket / Jeneratör = Hareket ➔ Elektrik.'
    },
    {
      id: 'g8-u7-s3-item2',
      pageNumber: '2. İstasyon',
      title: 'Güç Santralleri, Enerji Tasarrufu ve Bölüm Sonu Değerlendirmesi',
      badge: 'Santraller & Tasarruf İstasyonu',
      type: 'pekistirme_istasyonu',
      content: [
        'Hidroelektrik Santral (HES): Su potansiyel enerjisi ➔ Kinetik enerji ➔ Türbin ➔ Jeneratör ➔ Elektrik (Atatürk Barajı).',
        'Termik Santral: Kömür/gaz ➔ Isı ➔ Buhar türbini ➔ Jeneratör ➔ Elektrik (Sera gazı ve asit yağmuru yayar).',
        'Jeotermal Santral: Yerin altındaki sıcak su buharı ile elektrik üretimi (Kızıldere, Germencik).',
        'Rüzgâr Santrali (RES): Rüzgâr kinetik enerjisi ➔ Türbin ➔ Elektrik.',
        'Nükleer Santral: Uranyum atomunun parçalanmasıyla buhar türbini çalıştırılması (Akkuyu).',
        'Enerji Tasarrufu: A sınıfı cihazlar, yalıtım, buzdolabında %30 elektrik payı ve kaçak elektrik önlemleri.'
      ],
      resultInfoBox: 'Tebrikler! 8. Sınıf LGS Fen Bilimleri tüm ünite ve etkileşimli istasyon bölümleri eksiksiz tamamlandı!'
    }
  ]
};

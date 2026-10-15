import { InteractiveBookItem } from '../types/curriculum';

/**
 * 5. SINIF FEN BİLİMLERİ 2. KİTAP - TEKRAR DİZAYN SİSTEMİ
 * 4. ÜNİTE: IŞIĞIN DÜNYASI (Sayfa 14 - 51)
 */

const unit4EndItems: InteractiveBookItem[] = [
  {
    id: 'ib-4-end-p46-bosluk-doldurma',
    pageNumber: 'Sayfa 46',
    type: 'on_degerlendirme',
    title: 'Ünite Sonu İstasyonu - A: Boşluk Doldurma (1-15 Cümleleri)',
    badge: 'Ünite Sonu A',
    prompt: 'Kutudaki kelimeleri kullanarak cümleleri tamamlayınız (her, yarı saydam, ışık geçirgenliği, büyümesi, uzaklaşırsa, doğrusal, düz, geçiren, beton duvar, yaklaşırsa, geçirmeyen, tam gölge, tek, saydam, bulanık, net).',
    interactiveAnswer: '1. Araba farından çıkan ışık [HER] yöne yayılır.\n2. Bir odadaki lambadan çıkan ışık [DOĞRUSAL] yolla yayılır.\n3. Pencere camı, ışığı [GEÇİREN] bir maddedir.\n4. Camın kalınlığı artırılarak [IŞIK GEÇİRGENLİĞİ] azaltılabilir.\n5. Yağlı kâğıt, [YARI SAYDAM] bir maddedir.\n6. Saydam olmayan maddelere ışık gönderilerek [TAM GÖLGE] oluşturulabilir.\n7. Saydam maddelerin arkasında bulunan cisimler [NET] görülür.\n8. Yarı saydam ve [SAYDAM] maddelerin ışık geçirme durumları birbirinden farklıdır.\n9. Kitap ve [BETON DUVAR] saydam olmayan maddelerdendir.\n10. Duvarda gölgesi bulunan bir çocuk, duvara [YAKLAŞIRSA] gölgesi küçülür.\n11. Bir cismin gölgesinin [BÜYÜMESİ] için ışık kaynağı cisme yaklaştırılmalıdır.\n12. Bir cisim, ışık kaynağından [UZAKLAŞIRSA] cismin gölgesi küçülür.\n13. Yanan bir lambaya doğru [DÜZ] bir borudan bakıldığında lambanın ışığı görülür.\n14. Buzlu cama bakıldığında buzlu camın arkasındaki cisim [BULANIK] görülür.\n15. Demir levha, ışığı [GEÇİRMEYEN] bir maddedir.'
  },
  {
    id: 'ib-4-end-p47-acik-uclu',
    pageNumber: 'Sayfa 47',
    type: 'on_degerlendirme',
    title: 'Ünite Sonu İstasyonu - B: Açık Uçlu Değerlendirme Soruları (1-10)',
    badge: 'Ünite Sonu B',
    prompt: '1. Işık nasıl yayılır?\n2. Boş odadaki lambanın her yeri aydınlatması hangi özelliği iledir?\n3. Maddeleri ışık geçirme durumuna göre sınıflandırınız.\n4. Saydam maddelere 3 örnek veriniz.\n5. Işığı hiç geçirmeyen madde hangi sınıftadır?\n6. Buzlu cam, yağlı kâğıt hangi sınıftadır?\n7. Saydam cismin saydamlığını azaltmak için ne yapılabilir?\n8. Gölge nedir?\n9. Gölge büyüklüğüne etki eden faktörler nelerdir?\n10. Işık kaynağı ile cisim arasındaki mesafe azaltılırsa gölge boyu nasıl değişir?',
    interactiveAnswer: '1. Işık saydam ortamlarda ve boşlukta her yönde ve doğrusal (düz çizgilerle) yayılır.\n2. Işığın her yöne yayılabilmesi özelliği ile ilgilidir.\n3. Saydam, yarı saydam ve saydam olmayan (opak) maddeler olarak 3’e ayrılır.\n4. Cam, temiz su, hava.\n5. Saydam olmayan (opak) madde sınıfında yer alır.\n6. Yarı saydam madde sınıfında yer alır.\n7. Maddenin kalınlığı artırılabilir ya da yüzeyi zımparalanıp pürüzlü/mat hale getirilebilir.\n8. Işığın opak maddelerden geçememesi sonucu arkasında oluşan karanlık bölgedir.\n9. Cismin boyutu, ışık kaynağının cisme uzaklığı ve cismin ekrana/duvara olan uzaklığıdır.\n10. Mesafe azaltılırsa (cisim kaynağa yaklaşırsa) gölge boyu BÜYÜR (UZAR).',
    qrInfo: {
      title: 'EBA: 4. Ünite Ölçme ve Değerlendirme Karekodu (s. 47)',
      description: 'Ders kitabının 47. sayfasındaki MEB EBA Ünite Sonu Ölçme Değerlendirme testleri.',
      type: 'evaluation'
    }
  },
  {
    id: 'ib-4-end-p48-metin-cadir',
    pageNumber: 'Sayfa 48',
    type: 'on_degerlendirme',
    title: 'Ünite Sonu İstasyonu - C: Beceri Temelli Çadır Soruları (1 ve 2)',
    badge: 'Beceri Temelli',
    prompt: 'Grafikte çadır firmasının K, L, M, N malzemelerine gönderilen ışık ve geçen ışık miktarı verilmiştir:\n• K: Gönderilen ışığın tamamına yakını geçmiş (Saydam).\n• L: Gönderilen ışığın büyük kısmı geçmiş (Yarı saydam/saydama yakın).\n• M: Gönderilen ışığın az bir kısmı geçmiş (Yarı saydam).\n• N: Gönderilen ışıktan hiç geçmemiş (Opak).\n\n1. Büyük pencerelerden dışarıyı net görmek için pencerelerde L yerine hangi malzeme tercih edilmelidir?\n2. Çadır gölgeliğinde güneşten tam korunmak için M yerine hangi malzeme tercih edilmelidir?',
    interactiveAnswer: '1. Soru Çözümü: Büyük pencerelerden dışarıyı net ve aydınlık görebilmek için ışığı en fazla geçiren saydam [K] malzemesi seçilmelidir. (Doğru Cevap: C)\n2. Soru Çözümü: Çadır gölgeliğinin amacı güneş ışığını tamamen kesip gölge sağlamaktır. Bu nedenle ışığı hiç geçirmeyen opak [N] malzemesi seçilmelidir. (Doğru Cevap: C)'
  },
  {
    id: 'ib-4-end-p49-cagini-asanlar',
    pageNumber: 'Sayfa 49',
    type: 'cagini_asanlar',
    title: 'Çağını Aşanlar: Optik ve Astronominin Öncüleri (s. 49)',
    badge: 'Çağını Aşanlar',
    content: '• MİLETLİ THALES (MÖ 640): Uzunluğu bilinen bir cismin gölge boyu ile piramidin gölge boyunu oranlayarak Mısır piramitlerinin yüksekliğini ilk hesaplayan bilgedir.\n• ERATOSTHENES: Öğle vakti güneş ışınlarının dik ve gölgeli düştüğü iki farklı şehir arasındaki anıtların gölge açısından yararlanarak Dünya’nın çevresini (46.225 km) gerçeğe çok yakın hesaplamıştır.\n• CHRISTIAAN HUYGENS (1665-1695): Işığın dalga teorisini ve yayılma kanunlarını açıklayan Hollandalı matematikçi ve optikçidir.\n• KİNDİ: İslam dünyasında optik alanında ilk bağımsız eserleri veren, ışığın doğrusal yayılımı, yansıması ve kırılması konularını deneylerle inceleyen büyük filozoftur.'
  },
  {
    id: 'ib-4-end-p50-51-bilim-guncesi',
    pageNumber: 'Sayfa 50-51',
    type: 'bilgi_istasyonu',
    title: 'Bilim Güncesi: Işığın Doğrusal Yolculuğu ve Gölge Tiyatrosu (s. 50-51)',
    badge: 'Bilim Güncesi',
    content: 'ÖĞRENCİ GÖZÜYLE KONU ÖZETİ:\n• Pencereden giren sabah güneşinde havadaki toz zerrelerinin düz bir çizgi üzerinde parlaması ışığın doğrusal yayıldığını gösterir.\n• Mutfak kapısının buzlu camından geçen abinin sadece silüeti bulanık görünürken (yarı saydam), masadaki cam bardaktan karşıdaki kardeş net olarak görünür (saydam).\n• Evdeki pencere pervazları ve panjurlar ise opaktır, ışığı tamamen engeller.\n• Gece telefon ışığı önünde ellerle yapılan tavşan ve köpek figürleri duvarda tam gölge oluşturur. Eller telefona yaklaştığında gölgenin aniden dev gibi büyümesi, uzaklaştığında ise küçülüvermesi gölge prensibini kanıtlar.'
  }
];

export const unit4TekrarDizaynFlow: Record<string, InteractiveBookItem[]> = {
  'unit4-sub1': [
    {
      id: 'ib-4-1-p14-kapak',
      pageNumber: 'Sayfa 14',
      type: 'karekod',
      title: '4. Ünite Girişi: IŞIĞIN DÜNYASI',
      badge: 'Ünite Giriş',
      qrInfo: {
        title: '4. Ünite Tanıtım ve Giriş Karekodu (EBA)',
        description: 'Ders kitabının 15. sayfasında yer alan 4. Ünite "Işığın Dünyası" ve "Özet E-İçerik" EBA karekodları.',
        type: 'video'
      },
      content: '4. ÜNİTE İÇERİK ÇERÇEVESİ: 1. Işığın Yayılması, 2. Maddenin Işık Geçirgenliği, 3. Tam Gölgenin Oluşumu.\nANAHTAR KAVRAMLAR: Işığın doğrusal olarak yayılması, saydam madde, yarı saydam madde, saydam olmayan (opak) madde, tam gölge.\nHATIRLAYALIM: Daha önce ışık kaynaklarını ve aydınlatma teknolojilerini öğrenmiştiniz.'
    },
    {
      id: 'ib-4-1-p16-on-deg1',
      pageNumber: 'Sayfa 16',
      type: 'on_degerlendirme',
      title: 'Ön Değerlendirme İstasyonu - 1 (Işık Kaynakları)',
      badge: 'Ön Değerlendirme 1',
      prompt: 'Aşağıda bazı ışık kaynaklarına ait örnekler verilmiştir (Güneş, Mum). Açık uçlu soruları cevaplayınız:\na. Işık kaynaklarının çeşitlerini yazınız (Güneş ve Mum için).\nb. Güneş’in yer aldığı ışık kaynağı çeşidi ile aynı grupta yer alan ışık kaynaklarına 3 farklı örnek veriniz.\nc. Mumun yer aldığı ışık kaynağı çeşidi ile aynı grupta yer alan ışık kaynaklarına 3 farklı örnek veriniz.',
      interactiveAnswer: 'a. Güneş: Doğal ışık kaynağıdır. Mum: Yapay ışık kaynağıdır.\nb. Doğal ışık kaynaklarına örnekler: Yıldızlar, şimşek/yıldırım, ateş böceği, fener balığı.\nc. Yapay ışık kaynaklarına örnekler: El feneri, ampul, gaz lambası, meşale, araba farı.'
    },
    {
      id: 'ib-4-1-p16-on-deg2',
      pageNumber: 'Sayfa 16',
      type: 'on_degerlendirme',
      title: 'Ön Değerlendirme İstasyonu - 2 (Aydınlatma Araçları)',
      badge: 'Ön Değerlendirme 2',
      prompt: 'Aşağıdaki numaralandırılmış aydınlatma araçlarının (a: sokak lambası/fener, b: sokak lambaları, c: floresan lamba, ç: trafik lambası, d: masa lambası, e: projektör/araba farı) kullanım amaçlarını ve özelliklerini yazınız.',
      interactiveAnswer: 'a & b (Sokak lambaları/fener): Gece caddeleri, yolları ve sokakları aydınlatarak güvenli ulaşım sağlar.\nc (Floresan/Tüp Lamba): Ev, okul ve iş yerlerinde iç mekan aydınlatmasında enerji tasarruflu ışık sağlar.\nç (Trafik Işıkları): Trafik akışını ve yayaların güvenliğini düzenlemek için kırmızı, sarı ve yeşil renklerle ikaz verir.\nd (Masa Lambası): Ders çalışma ve okuma esnasında ışığı istenen çalışma alanına odaklar.\ne (Otomobil/Araç Farı): Gece sürüşlerinde sürücünün yolu görmesini ve diğer sürücüler tarafından fark edilmesini sağlar.'
    },
    {
      id: 'ib-4-1-p17-baslik-hazirlik',
      pageNumber: 'Sayfa 17',
      type: 'hazirlik_istasyonu',
      title: 'IŞIĞIN YAYILMASI: Hazırlık İstasyonu',
      badge: 'Hazırlık İstasyonu',
      prompt: 'Kamyonun gün batımında yolda ilerlediği görselde hangi ışık kaynakları vardır? Türlerini yazınız.',
      interactiveAnswer: 'Görselde iki tür ışık kaynağı vardır:\n1. Doğal Işık Kaynağı: Ufukta batan Güneş.\n2. Yapay Işık Kaynağı: Kamyonun yanan farları.'
    },
    {
      id: 'ib-4-1-p17-merak',
      pageNumber: 'Sayfa 17',
      type: 'merak_istasyonu',
      title: 'IŞIĞIN YAYILMASI: Merak İstasyonu',
      badge: 'Merak İstasyonu',
      prompt: 'Işığın yayılması ile ilgili merak ettiklerinizi yazınız: Bir kaynaktan çıkan ışık çevreye nasıl ve hangi yolla yayılır?',
      interactiveAnswer: 'Merak edilen temel soru: Işık kaynaktan çıktığında su dalgaları gibi kıvrılarak mı, yoksa dümdüz bir hat boyunca mı yayılır? Işık her yönde ve doğrusal (düz bir hat) olarak yayılır.'
    },
    {
      id: 'ib-4-1-p18-etkinlik1',
      pageNumber: 'Sayfa 18',
      type: 'etkinlik_istasyonu',
      title: 'IŞIĞIN İZLEDİĞİ YOL - Etkinlik İstasyonu: Işık Kaynakları Denince İlk Akla Gelenler',
      badge: 'Etkinlik İstasyonu',
      prompt: 'Doğal ve yapay ışık kaynaklarının özellikleri ile ilgili aklınıza ilk gelenleri yazınız.',
      interactiveAnswer: 'Doğal Işık Kaynakları: İnsan etkisi olmadan doğada kendiliğinden ışık verir (Güneş, yıldızlar, ateş böceği). Tüketimle bitmez, doğal döngüdedir.\nYapay Işık Kaynakları: İnsanlar tarafından aydınlatma amacıyla yapılmıştır (Ampul, mum, meşale, el feneri, araba farı). Enerji sağlandığı sürece ışık yayar.'
    },
    {
      id: 'ib-4-1-p18-etkinlik2',
      pageNumber: 'Sayfa 18',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu: Işığın İlerleyişi (Örnek Olay)',
      badge: 'Örnek Olay',
      prompt: 'Umut doğa yürüyüşünde ağaçların arasından süzülen güneş ışınlarını görünce heyecanlandı. Işığın yayılması ile ilgili metindekine benzer deneyimleriniz nelerdir? (El feneri, araba farı, bulutlu günde güneş ışığı vb.)',
      interactiveAnswer: 'Deneyimler: Sisli veya tozlu bir odada pencereden giren güneş ışığının düz bir sütun (ışık huzmesi) şeklinde ilerlediğini görürüz. Gece araba farlarının ya da deniz fenerinin ışığı da karanlıkta dümdüz bir çizgi halinde yayılır. Bu durum ışığın her yöne doğrusal yayıldığının en açık kanıtıdır.'
    },
    {
      id: 'ib-4-1-p19-etkinlik-boru',
      pageNumber: 'Sayfa 19',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu: Işığın Yayılması (İki Boru Deneyi)',
      badge: 'Deneysel Etkinlik',
      materials: ['İki boru (biri düz, diğeri eğik/kıvrık)'],
      steps: [
        'İki kişilik gruplar oluşturunuz.',
        'Borulardan biri düz halde kalırken diğerini eğik/kıvrık hale getiriniz.',
        'Arkadaşınızla yüz yüze gelecek şekilde karşılıklı oturunuz.',
        'Düz haldeki boruyu kullanarak birbirinizi gözlemleyiniz.',
        'Eğik haldeki boruyu kullanarak birbirinizi gözlemleyiniz.'
      ],
      evaluationQuestions: [
        {
          question: '1. Arkadaşınızı hangi boruyla görebildiniz? Yazınız.',
          answer: 'Arkadaşımızı sadece DÜZ boruyla görebildik. Eğik/kıvrık borudan baktığımızda arkadaşımızı göremedik.'
        },
        {
          question: '2. Gözlem sonuçlarından hareketle ışığın yayılması ile ilgili nitelikleri tanımlayarak yazınız.',
          answer: 'Işık doğrusal (düz bir hat boyunca) yayılır. Işık bükülüp kıvrılamadığı için eğik borunun içinden dönemez ve göze ulaşamaz. Işığın yayılması doğrusal ve her yöne doğrudur.'
        }
      ]
    },
    {
      id: 'ib-4-1-p20-bilgi-ibnulheysem',
      pageNumber: 'Sayfa 20',
      type: 'bilgi_istasyonu',
      title: 'Bilgi İstasyonu: Fotoğraf Makinesinin Atası: Karanlık Oda (Camera Obscura)',
      badge: 'Bilgi İstasyonu',
      content: 'Karanlık oda (karanlık kutu), fotoğraf makinesinin bilinen en ilkel halidir. Işık sızdırmaz kutunun bir yüzüne açılan küçük delikten geçen ışık demetleri, dağılmadan düz bir çizgi halinde ilerleyerek karşı yüzeyde objenin ters (baş aşağı) görüntüsünü oluşturur.\n• İlk tarifi MÖ 4. yüzyılda Çinli filozof Mozi yapmıştır.\n• Bunu deneylerle kanıtlayıp ilk lenssiz karanlık odayı icat eden bilim insanı İbnülheysem’dir (965-1041).\n• İbnülheysem, ışığın düz bir çizgi şeklinde hareket ettiğini, delik ne kadar küçük olursa görüntünün o kadar netleşeceğini ispatlamıştır.'
    },
    {
      id: 'ib-4-1-p21-etkinlik-lazer',
      pageNumber: 'Sayfa 21',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu: Işığın Gözlemlenmesi-1 (Lazer ve Kabartma Tozu)',
      badge: 'Gösteri Deneyi',
      materials: ['Işık kaynağı (lazer)', 'Kabartma tozu veya karbonat'],
      steps: [
        'Sınıfın karanlık olmasını sağlayınız.',
        'Işık kaynağını (lazeri) açınız.',
        'Işığın izlediği yola az bir miktar kabartma tozu serpiniz.',
        'Işık kaynağından çıkan ışık demetlerini gözlemleyiniz.'
      ],
      evaluationQuestions: [
        {
          question: '1. Işığın ilerleme yolunu günlük yaşamdan nelere benzetebilirsiniz?',
          answer: 'Gergin bir ipe, düz bir cetvele, doğrusal bir otoyola veya lazer ışını çizgisine benzetebiliriz.'
        },
        {
          question: '2. Kaynaktan çıkan ışığın izlediği yol nasıl çizilir?',
          answer: 'Bir noktadan başlayan ve ucunda ok işareti bulunan dosdoğru bir çizgi (ışın: ───►) şeklinde çizilir.'
        }
      ]
    },
    {
      id: 'ib-4-1-p22-etkinlik-delikli-kutu',
      pageNumber: 'Sayfa 22',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu: Işığın Gözlemlenmesi-2 (Delikli Kutu ve El Feneri)',
      badge: 'Etkinlik İstasyonu',
      materials: ['Kapaklı kutu', 'El feneri', 'Kurşun kalem'],
      steps: [
        'Kutunun farklı yüzeylerine kurşun kalemin geçebileceği büyüklükte çok sayıda delik açınız.',
        'El fenerini açarak kutunun içine yerleştirip kapağı kapatınız.',
        'Karanlık sınıfta kutunun dışını gözlemleyiniz.'
      ],
      evaluationQuestions: [
        {
          question: 'Işık, kutudaki tek bir noktadan mı yoksa çok sayıda noktadan mı çıktı? Her yöne mi yayıldı?',
          answer: 'Açılan tüm deliklerden aynı anda ışık çıktığı gözlemlendi. Bu durum ışık kaynağından çıkan ışığın tek bir yöne değil, HER YÖNDE ve doğrusal olarak yayıldığını kanıtlar.'
        }
      ],
      qrInfo: {
        title: 'EBA: "Işığın Yayılması" Etkileşimli İçeriği',
        description: 'Ders kitabının 22. sayfasındaki (Kitap içi s. 20) "Işığın Yayılması" simülasyonu ve etkileşimli deneyi.',
        type: 'interactive'
      }
    },
    {
      id: 'ib-4-1-p23-bilgikutusu-kopru',
      pageNumber: 'Sayfa 23',
      type: 'bilgi_kutusu',
      title: 'Bilgi Kutusu & Köprü İstasyonu: Işık Işını ve Yayılma Örnekleri',
      badge: 'Bilgi Kutusu & Köprü',
      content: 'IŞIĞIN YAYILMASI:\n• Işık saydam ortamlarda ve boşlukta her yöne ve doğrusal yayılır.\n• Işığın izlediği yolun gösteriminde "IŞIN" (ışık ışını) adı verilen yönlü doğrular kullanılır. Oksuz uç ışığın çıktığı kaynağı, oklu uç ise ışığın ilerlediği yönü gösterir (──►).\n\nKÖPRÜ İSTASYONU (s. 23):\nBir anahtar deliğinden sızan ışık, bulutların arasından süzülen güneş ışığı ve stadyum çatısındaki projektörlerden yayılan ışık ışınları günlük hayatta doğrusal yayılmanın en belirgin kanıtlarıdır.'
    },
    {
      id: 'ib-4-1-p24-pekistirme1',
      pageNumber: 'Sayfa 24',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu-1 (Işın Çizimleri & Cetvel Kullanımı)',
      badge: 'Pekiştirme 1',
      prompt: '1. Mum, kibrit, meşale ve gaz lambasından çıkan ışık ışınlarının çizimlerinden hatasız olanları belirleyiniz.\n2. a. Işık kaynaklarından çıkan ışınları cetvelle çiziniz.\nb. Cetvelle çizim yapmanızın sebebi ışığın hangi özelliği ile ilgilidir?',
      interactiveAnswer: '1. Çizimlerden doğru olanlar: Işınların dalgalı veya eğri değil; kaynaktan dışarıya doğru dümdüz oklar halinde her yöne çizildiği görseller doğrudur.\n2. b. Cetvelle çizim yapmamızın sebebi: Işığın DAİMA DOĞRUSAL (düz bir hat boyunca) yayılmasıdır. Işık kıvrılmadığı için gösteriminde cetvel kullanılır.',
      qrInfo: {
        title: 'EBA: "Işığın Doğrusal Yayılması" Etkileşimli İçeriği',
        description: 'Ders kitabının 24. sayfasındaki "Işığın Doğrusal Yayılması" animasyon ve simülasyonu.',
        type: 'interactive'
      }
    },
    {
      id: 'ib-4-1-p25-pekistirme2',
      pageNumber: 'Sayfa 25',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu-2 (Delikli Karton Düzenekleri)',
      badge: 'Pekiştirme 2',
      prompt: '12 özdeş delikli mukavva kartonla kurulan 4 düzenekten (I: A-B-C, II: Ç-D-E, III: F-G-Ğ, IV: H-I-İ):\n1. Öğrenci hangi düzeneklerde mum alevini görmüştür?\n2. Bazı düzeneklerde göremediğinin sebebi nedir?\n3. Göremediği düzeneklerde alevi görebilmek için ne yapabilir?',
      interactiveAnswer: '1. Öğrenci yalnızca deliklerin AYNI DOĞRULTUDA (aynı hizada) olduğu I. Düzenek (A-B-C) ve IV. Düzenek’te mum alevini görebilmiştir.\n2. II ve III. düzeneklerde deliklerden biri farklı hizada (kaymış) olduğu için ışık kartona çarpmış, kıvrılamadığı için göze ulaşamamıştır.\n3. Göremediği düzeneklerdeki kartonların deliklerini aynı yatay doğrultuya getirerek hizalamalıdır.'
    }
  ],
  'unit4-sub2': [
    {
      id: 'ib-4-2-p26-baslik-hazirlik',
      pageNumber: 'Sayfa 26',
      type: 'hazirlik_istasyonu',
      title: 'MADDENİN IŞIK GEÇİRGENLİĞİ: Hazırlık İstasyonu',
      badge: 'Hazırlık İstasyonu',
      prompt: 'Bir pencereye gelen ışığın; odaya büyük bir kısmının girebilmesi, kısmen girebilmesi ya da hiç girememesi için hangi uygulamalar yapılabilir? Fikirlerinizi yazınız.',
      interactiveAnswer: '• Işığın büyük kısmının girmesi için: Şeffaf düz pencere camı kullanılır, perdeler tamamen açılır.\n• Işığın kısmen girmesi için: Buzlu cam, ince tül perde veya jaluzi kullanılır.\n• Işığın hiç girmemesi için: Kalın kumaş fon perde, ahşap/plastik panjur kapatılır veya pencereye alüminyum folyo/karton çekilir.'
    },
    {
      id: 'ib-4-2-p26-merak',
      pageNumber: 'Sayfa 26',
      type: 'merak_istasyonu',
      title: 'MADDENİN IŞIK GEÇİRGENLİĞİ: Merak İstasyonu',
      badge: 'Merak İstasyonu',
      prompt: 'Maddelerin ışığı geçirme durumlarıyla ilgili merak ettiklerinizi yazınız: Neden bazı maddelerin arkası net görünürken bazılarının arkası hiç görünmez?',
      interactiveAnswer: 'Maddelerin tanecikli yapısı ve iç dizilimi ışığın içinden geçişini belirler. Işığı tamamen geçiren maddelerin arkası net, kısmen geçirenlerin arkası bulanık, hiç geçirmeyenlerin arkası ise tamamen karanlıkta kalır ve görünmez.'
    },
    {
      id: 'ib-4-2-p27-etkinlik-madde-isik',
      pageNumber: 'Sayfa 27',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu: Madde ve Işık Etkileşimi (Lazer Deneyi)',
      badge: 'Etkinlik İstasyonu',
      materials: ['Lazer', 'Alüminyum folyo', 'Lam', 'Kitap', 'Şeffaf dosya', 'Buzlu cam', 'Gözlük camı', 'Plastik su şişesi', 'Yağlı kâğıt'],
      steps: [
        'Karanlık sınıfta lazer ışığını sırayla her bir eşyaya doğrultunuz.',
        'Lazer ışığının eşyalardan geçip geçmeme durumunu gözlemleyerek tabloya kaydediniz.'
      ],
      evaluationQuestions: [
        {
          question: 'a. Yaptığınız etkinlikte ulaştığınız çıkarımlar nelerdir?',
          answer: 'Farklı maddelerin ışıkla etkileşimi farklıdır. Bazı maddeler ışığı doğrudan geçirirken, bazıları ışığı dağıtıp zayıflatarak kısmen geçirir, bazıları ise ışığı tamamen engelleyip arkasına geçirmez.'
        },
        {
          question: 'b. Maddelerin ışık geçirgenliğine göre nitelikleri nelerdir?',
          answer: 'Maddeler ışık geçirgenliğine göre 3 gruba ayrılır: 1. Saydam maddeler (ışığı tam geçirir), 2. Yarı saydam maddeler (ışığı kısmen geçirir), 3. Saydam olmayan / Opak maddeler (ışığı hiç geçirmez).'
        }
      ]
    },
    {
      id: 'ib-4-2-p28-etkinlik-30cm-duvar',
      pageNumber: 'Sayfa 28',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu: Maddelerin Işık Geçirgenliği (30 cm Duvar Deneyi)',
      badge: 'Gözlem Deneyi',
      materials: ['Lazer', 'Çeşitli eşyalar', 'Duvar / Perde'],
      steps: [
        'Malzemeyi duvara 30 cm mesafede tutunuz.',
        'Lazer ışığını malzemeye yönlendirip duvarda oluşan ışık noktasına bakınız.',
        'Sonuçları: "Işığı geçirdi", "Işığı kısmen geçirdi", "Işığı geçirmedi" sütunlarına yazınız.'
      ],
      evaluationQuestions: [
        {
          question: 'Işığı geçiren, kısmen geçiren ve geçirmeyen maddelere günlük yaşamdan örnekler veriniz.',
          answer: '• Işığı geçiren (Saydam): Cam bardak, akvaryum camı, gözlük camı, temiz su, hava, şeffaf naylon poşet.\n• Kısmen geçiren (Yarı saydam): Buzlu cam banyo kapısı, yağlı fırın kâğıdı, tül perde, sisli hava, renkli güneş gözlüğü.\n• Geçirmeyen (Opak): Tahta kapı, tuğla duvar, demir tencere, kitap, taş, karton koli.'
        }
      ]
    },
    {
      id: 'ib-4-2-p29-etkinlik-gruplandirma',
      pageNumber: 'Sayfa 29',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu: Işık Geçirgenliğine Göre Gruplandırma',
      badge: 'Etkinlik İstasyonu',
      materials: ['Lam', 'Şeffaf dosya', 'Kitap', 'Kalemlik', 'Plastik su şişesi', 'Alüminyum folyo'],
      steps: [
        'Malzemenin bir tarafında siz, diğer tarafında arkadaşınız duracak şekilde göz hizasında tutunuz.',
        'Cismin arkasındaki arkadaşınızı görmeye çalışıp tabloyu işaretleyiniz.'
      ],
      evaluationQuestions: [
        {
          question: 'Tablo Sonuçları (Net gördüm / Net göremedim / Göremedim):',
          answer: '• Lam: Net gördüm ➔ SAYDAM\n• Plastik şişe / Şeffaf dosya: Net gördüm / kısmen net ➔ SAYDAM / YARI SAYDAM\n• Yağlı kâğıt / Buzlu cam: Net göremedim (bulanık gördüm) ➔ YARI SAYDAM\n• Kitap / Alüminyum folyo / Kalemlik: Göremedim ➔ SAYDAM OLMAYAN (OPAK)'
        }
      ]
    },
    {
      id: 'ib-4-2-p30-bilgi-cam-tarihi',
      pageNumber: 'Sayfa 30',
      type: 'bilgi_istasyonu',
      title: 'Bilgi İstasyonu: Camın Tarihi ve Işık Geçirgenliği',
      badge: 'Bilgi İstasyonu',
      content: 'Cam yapımı fayans endüstrisinin gelişmesi veya doğada yıldırım çarpması sonucu doğal olarak ortaya çıkmıştır. İlk örnekler Mısır ve Kuzey Mezopotamya antik yazıtlarında geçer. İlk camlar mat ve renkli iken, Roma döneminde (Görsel 4.2.1) saydam cam üretimi başarılmıştır. Günümüzde cam, ışığın doğrudan geçmesini sağlayarak cisimlerin arkasını net görmemizi mümkün kılar.'
    },
    {
      id: 'ib-4-2-p31-performans-ve-kopru',
      pageNumber: 'Sayfa 31',
      type: 'performans_istasyonu',
      title: 'Performans İstasyonu: Işık Geçirgenliğine Farklı Örnekler & Köprü İstasyonu',
      badge: 'Performans & Köprü',
      prompt: 'PERFORMANS GÖREVİ (s. 31):\nSaydam, yarı saydam ve opak maddelerin günlük yaşamdaki kullanım alanları ve amaçlarını araştırarak fon kartonuna poster hazırlayınız.\n\nKÖPRÜ İSTASYONU (s. 31):\nEvlerde gece ve gündüz farklı perde türlerinin (şeffaf cam, tül perde, kalın perde) tercih edilme sebebini açıklayınız.\n\nSoru: Performans sonucunda ne öğrendiniz?',
      interactiveAnswer: 'PERFORMANS SONUCUNDA ÖĞRENİLENLER:\nMaddelerin ışık geçirgenliği rastgele değil, kullanım amacına göre seçilir:\n• Pencerelerde ışığı alıp dışarıyı net görmek için saydam cam kullanılır.\n• Gündüz mahremiyet sağlayıp gün ışığından yararlanmak için yarı saydam tül tercih edilir.\n• Gece oda ışığı yandığında içerinin görünmesini engellemek ve tam karanlıkta uyumak için opak kalın perdeler kullanılır.'
    },
    {
      id: 'ib-4-2-p32-bilgikutusu-saydamlik-kalinlik',
      pageNumber: 'Sayfa 32',
      type: 'bilgi_kutusu',
      title: 'Bilgi Kutusu: Maddenin Kalınlığı ve Işık Geçirgenliği İlişkisi',
      badge: 'Bilgi Kutusu',
      content: '• SAYDAM MADDE: Işığı iyi geçiren maddelerdir (cam, hava, su). Arkasındaki cisimler net görünür (Örn: Akvaryumdaki balıklar).\n• YARI SAYDAM MADDE: Işığın bir kısmını geçiren maddelerdir (buzlu cam, ince tül, yağlı kâğıt). Arkasındaki cisimler bulanık görünür.\n• KALINLIK ETKİSİ: Saydam ve yarı saydam maddelerin kalınlığı arttıkça ışık geçirgenliği azalır!\nÖrnekler:\n1. Camın kalınlığı çok artırılırsa ışık geçirgenliği azalır, arkası net görünmez.\n2. Denizde kıyıda sığ su saydamken derinlerde deniz tabanı görünmez.\n3. Sis tabakası kalınlaştıkça karşıdan gelen araçlar ve binalar hiç görülemez hale gelir.'
    },
    {
      id: 'ib-4-2-p33-opak-ve-karekod',
      pageNumber: 'Sayfa 33',
      type: 'karekod',
      title: 'Bilgi Kutusu: Saydam Olmayan (Opak) Maddeler & Kedi Örneği',
      badge: 'Karekod & Bilgi Kutusu',
      qrInfo: {
        title: 'EBA: "Saydam mı? Yarı Saydam mı? Opak mı?" Etkileşimli İçeriği',
        description: 'Ders kitabının 33. sayfasında yer alan EBA sınıflandırma ve eşleştirme simülasyonu.',
        type: 'interactive'
      },
      content: 'OPAK (SAYDAM OLMAYAN) MADDE: Işığı hiç geçirmeyen maddelerdir (silgi, ahşap masa, tuğla, kitap, metal kutu). Arkasındaki cisimler kesinlikle görülemez.\n\nKİTAPTAKİ GÖRSEL ANALİZİ (s. 33):\n• Görsel 4.2.7: Camın arkasındaki kedi ➔ Net görülür (Saydam).\n• Görsel 4.2.8: İnce tülün arkasındaki kedi ➔ Net görülmez, bulanık (Yarı saydam).\n• Görsel 4.2.9: Duvarın arkasındaki kedi ➔ Hiç görülmez (Opak).'
    },
    {
      id: 'ib-4-2-p34-pekistirme1-klm',
      pageNumber: 'Sayfa 34',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu-1 (K, L, M Kutuları Işık Geçirgenliği)',
      badge: 'Pekiştirme 1',
      prompt: 'K, L ve M kutularına el fenerinden ışık gönderildiğinde; K kutusundan ışık tam çıkmış, L kutusundan ışık kısmen/dağınık çıkmış, M kutusundan ise hiç ışık çıkmamıştır.\n1. K, L ve M kutularının içine yerleştirilen maddeler neler olabilir?\n2. "Çalışmayı değerlendirmek için" karekodunun amacını yazınız.',
      interactiveAnswer: '1. Kutulardaki Madde Türleri:\n• K Kutusu (Işığı tam geçirdi): SAYDAM MADDE (Cam levha, şeffaf asetat, lam, şeffaf plastik).\n• L Kutusu (Işığı kısmen geçirdi): YARI SAYDAM MADDE (Yağlı kâğıt, buzlu cam, ince tül, şeffaf dosya).\n• M Kutusu (Işığı geçirmedi): OPAK / SAYDAM OLMAYAN MADDE (Mukavva karton, tahta blok, demir plaka, tuğla, alüminyum folyo).\n2. Karekod: Performans çalışmasını değerlendirmek amacıyla MEB Ölçme ve Öz Değerlendirme Formuna bağlantı sağlar.',
      qrInfo: {
        title: 'EBA: Öz Değerlendirme Formu Karekodu (s. 34)',
        description: '"Işık Geçirgenliğine Farklı Örnekler" çalışmasını değerlendirmek için verilen karekod.',
        type: 'evaluation'
      }
    },
    {
      id: 'ib-4-2-p35-pekistirme2-kavram-haritasi',
      pageNumber: 'Sayfa 35',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu-2 (Işık ve Madde Kavram Haritası)',
      badge: 'Pekiştirme 2',
      prompt: 'Kavram haritasındaki boşlukları doldurunuz: (saydam madde, geçirmez, görülemez, kitap, arkasındaki cisim, buzlu cam, cam, tül perde, su).',
      interactiveAnswer: 'KAVRAM HARİTASI DOĞRU ÇÖZÜMÜ:\n1. Işık ➔ GEÇİRİR ➔ [SAYDAM MADDE] ➔ Arkasındaki cisim [NET GÖRÜLÜR] ➔ Örnekler: [cam], [su], hava.\n2. Işık ➔ BİR KISMINI GEÇİRİR ➔ [YARI SAYDAM MADDE] ➔ Arkasındaki cisim [BULANIK GÖRÜLÜR] ➔ Örnekler: yağlı kâğıt, [buzlu cam], [tül perde].\n3. Işık ➔ [GEÇİRMEZ] ➔ [SAYDAM OLMAYAN (OPAK) MADDE] ➔ Arkasındaki cisim [GÖRÜLEMEZ] ➔ Örnekler: tahta kaşık, [kitap].'
    }
  ],
  'unit4-sub3': [
    {
      id: 'ib-4-3-p36-baslik-hazirlik',
      pageNumber: 'Sayfa 36',
      type: 'hazirlik_istasyonu',
      title: 'TAM GÖLGENİN OLUŞUMU: Hazırlık İstasyonu',
      badge: 'Hazırlık İstasyonu',
      prompt: 'Bölüm kapağı görselini inceleyiniz: Duvarda ellerle oluşturulan kurt/köpek görüntüsünü ne olarak tanımlarsınız? Fikirlerinizi yazınız.',
      interactiveAnswer: 'Duvarda oluşan karanlık görüntü "TAM GÖLGE"dir. Ellerimiz opak (ışık geçirmeyen) bir madde olduğu için arkasına ışığın geçmesini engeller ve perdede el şeklinin karanlık gölgesi belirir.'
    },
    {
      id: 'ib-4-3-p36-merak',
      pageNumber: 'Sayfa 36',
      type: 'merak_istasyonu',
      title: 'TAM GÖLGENİN OLUŞUMU: Merak İstasyonu',
      badge: 'Merak İstasyonu',
      prompt: 'Gölge oluşumu ile ilgili merak ettiklerinizi yazınız: Gölgemiz neden bazen çok büyük, bazen çok küçük olur?',
      interactiveAnswer: 'Gölge büyüklüğü ışık kaynağı, cisim ve ekran arasındaki mesafeye bağlı olarak değişir. Cisim ışık kaynağına yaklaştıkça daha fazla ışın demetini engelleyerek büyür; uzaklaştıkça küçülür.'
    },
    {
      id: 'ib-4-3-p37-etkinlik-tangram-golge',
      pageNumber: 'Sayfa 37',
      type: 'etkinlik_istasyonu',
      title: 'TAM GÖLGE - Etkinlik İstasyonu: Figürlerin Gölgesi (Tangram Deneyi)',
      badge: 'Etkinlik İstasyonu',
      materials: ['Kitabın 163. sayfasındaki tangram modeli', 'Mukavva karton', 'Cetvel', 'El feneri', 'Bant', 'Pipet', 'Makas'],
      steps: [
        'Kitabın 163. sayfasındaki tangram parçalarını kesip mukavva kartona yapıştırınız.',
        'Tangram parçalarından bir hayvan figürü oluşturup pipeti arkasına bantlayınız.',
        'Karanlık sınıfta figürü duvara 30 cm mesafede tutup el fenerini doğrultarak gölge oluşturunuz.'
      ],
      evaluationQuestions: [
        {
          question: 'Duvarda oluşan gölgenin nitelikleri nelerdir? Tanımlayınız.',
          answer: 'Gölge, opak figürün arkasında kalan ışık almayan karanlık bölgedir. Şekli figürün geometrik sınırlarıyla tamamen aynıdır ve ışığın doğrusal yayılmasının bir sonucudur.'
        }
      ]
    },
    {
      id: 'ib-4-3-p38-etkinlik-golge-cizme-kopru',
      pageNumber: 'Sayfa 38',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu: Gölge Çizme & Köprü İstasyonu',
      badge: 'Gölge Çizme & Köprü',
      prompt: 'ETKİNLİK: Noktasal ışık kaynağından opak küre ve opak dik silindirin üst ve alt sınırlarına teğet doğrusal ışınlar çizerek ekrandaki gölgeyi çiziniz.\n\nKÖPRÜ İSTASYONU (s. 38):\nGün boyunca açık havada yürürken gölgemizin boyunun değiştiğini görürüz. Bunun sebebi nedir?',
      interactiveAnswer: '• ÇİZİM KURALI: Noktasal kaynaktan cismin en üst ve en alt noktasına cetvelle düz ışınlar gönderilir. Ekran üzerinde ışık alamayan bu bölge içi taranarak dairesel veya dikdörtgen gölge oluşturulur.\n• KÖPRÜ BİLGİSİ CEVABI: Güneş gün içinde gökyüzünde konum değiştirir. Sabah ve akşam Güneş eğik açıyla geldiğinde gölge boyumuz çok uzun olurken, öğle vakti Güneş tam tepedeyken dik açıyla geldiği için gölge boyumuz en kısa seviyeye iner.'
    },
    {
      id: 'ib-4-3-p39-etkinlik-golge-boyu-degisim',
      pageNumber: 'Sayfa 39',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu: Gölge Büyüklüğündeki Değişim',
      badge: 'Deneysel Etkinlik',
      materials: ['Fon kartonu figürü', 'Pipet', 'El feneri', 'Makas'],
      steps: [
        'I. Durum: Figür duvara 30 cm mesafede, fener belirli uzaklıkta.',
        'II. Durum: El feneri figürden uzaklaştırılır.',
        'III. Durum: El feneri figüre I. durumdan daha yakın konuma getirilir.'
      ],
      evaluationQuestions: [
        {
          question: 'a. En büyük ve en küçük gölge boyunu gözlemlediğiniz durumlar hangileridir?',
          answer: '• En büyük gölge: III. DURUM’da (Işık kaynağı cisme en yakınken) gözlemlendi.\n• En küçük gölge: II. DURUM’da (Işık kaynağı cisimden en uzaktayken) gözlemlendi.'
        },
        {
          question: 'b. Gölge büyüklüğüne etki eden faktörlerle ilgili bu etkinlikten ulaştığınız çıkarım nedir?',
          answer: '1. Işık kaynağı ile cisim arasındaki mesafe azaldıkça (yaklaştıkça) gölge BÜYÜR.\n2. Işık kaynağı ile cisim arasındaki mesafe arttıkça (uzaklaştıkça) gölge KÜÇÜLÜR.'
        }
      ],
      qrInfo: {
        title: 'EBA: "Gölge Oluşumu" Etkileşimli İçeriği',
        description: 'Ders kitabının 39. sayfasında yer alan EBA gölge simülasyonu ve mesafe deney aracı.',
        type: 'interactive'
      }
    },
    {
      id: 'ib-4-3-p40-bilgi-divrigi',
      pageNumber: 'Sayfa 40',
      type: 'bilgi_istasyonu',
      title: 'Bilgi İstasyonu: Divriği Ulu Camii’ndeki Namaz Kılan İnsan Silüeti',
      badge: 'Kültür & Bilim Mirası',
      content: 'Sivas Divriği Ulu Camii ve Darüşşifası’nın batı kapısında mayıs ve eylül ayları arasında ikindi vaktinden önce taş kabartmaların gölgesiyle ayakta duran ve namaz kılan bir insan silüeti oluşmaktadır.\nBu silüet tesadüf olmayıp, Selçuklu mimarlarının üstün astronomi, matematik ve optik bilgisiyle güneş ışınlarının geliş açılarını milimetrik hesaplamaları sayesinde inşa edilmiştir.'
    },
    {
      id: 'ib-4-3-p41-bilgikutusu-tamgolge',
      pageNumber: 'Sayfa 41',
      type: 'bilgi_kutusu',
      title: 'Bilgi Kutusu: Tam Gölge Oluşumu ve Işığın Doğrusal Yayılması',
      badge: 'Bilgi Kutusu',
      content: 'TAM GÖLGE:\n• Işık ışınları opak maddelerin içinden geçemez ve opak cismin arkasında hiçbir ışık almayan karanlık bir bölge oluşur. Bu bölgeye TAM GÖLGE denir.\n• Gölgenin oluşabilmesi ve cismin şekline benzemesi IŞIĞIN DOĞRUSAL YAYILDIĞININ kesin bir kanıtıdır. Eğer ışık kıvrılarak yayılsaydı, cismin etrafından dolanır ve arkasında karanlık gölge oluşmazdı.'
    },
    {
      id: 'ib-4-3-p42-44-bilgikutulari-ve-klip',
      pageNumber: 'Sayfa 42-44',
      type: 'karekod',
      title: 'Bilgi Kutusu: Gölgeyi Değiştiren Değişkenler & "Gölge" Klibi',
      badge: 'Karekod & Bilgi Kutusu',
      qrInfo: {
        title: 'EBA: "Gölge" Adlı Müzik Klibi Karekodu (s. 44)',
        description: 'Ders kitabının 44. sayfasında yer alan eğlenceli ve öğretici "Gölge" şarkı ve klibi.',
        type: 'video'
      },
      content: 'GÖLGE BÜYÜKLÜĞÜNÜ ETKİLEYEN KURAL VE PRENSİPLER:\n1. CİSMİN BÜYÜKLÜĞÜ: Işık kaynağına eşit uzaklıktaki iki cisimden büyük olanın (futbol topu) gölgesi, küçük olanın (tenis topu) gölgesinden daha büyüktür (s. 42).\n2. CİSMİN HAREKETİ: Işık kaynağı sabitken cisim ışık kaynağına yaklaştırılırsa gölgesi büyür; kaynaktan uzaklaştırılırsa gölgesi küçülür (s. 43).\n3. IŞIK KAYNAĞININ HAREKETİ: Cisim sabitken ışık kaynağı cisme yaklaştırılırsa gölge uzar/büyür; kaynaktan uzaklaştırılırsa gölge kısalır/küçülür (s. 44).'
    },
    {
      id: 'ib-4-3-p45-pekistirme1-kl-golge',
      pageNumber: 'Sayfa 45',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu-1: Opak K ve L Cisimlerinin Ekrandaki Gölgeleri',
      badge: 'Pekiştirme 1',
      prompt: 'Noktasal ışık kaynağı ile ekran arasına yerleştirilen opak K ve L cisimleri için 3 farklı düzenekte ekranda oluşacak gölgeleri karşılaştırınız:\n1. Düzenek: K ve L aynı eksende peş peşe.\n2. Düzenek: K kaynağa yakın, L ekrana yakın.\n3. Düzenek: K ve L alt alta konumlandırılmış.',
      interactiveAnswer: 'ÇÖZÜM ANALİZİ:\n• Işık kaynağına DAHA YAKIN olan cismin gölgesi ekranda DAHA BÜYÜK oluşur.\n• Işık kaynağından DAHA UZAK (ekrana yakın) olan cismin gölgesi DAHA KÜÇÜK oluşur.\n• Alt alta olduklarında üstte büyük K gölgesi, altta küçük L gölgesi ayrı ayrı belirir.'
    },
    ...unit4EndItems
  ],
  'unit4-end': unit4EndItems
};



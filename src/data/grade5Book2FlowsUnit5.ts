import { InteractiveBookItem } from '../types/curriculum';

/**
 * 5. SINIF FEN BİLİMLERİ 2. KİTAP - TEKRAR DİZAYN SİSTEMİ
 * 5. ÜNİTE: MADDENİN DOĞASI (Sayfa 52 - 103)
 */

const unit5EndItems: InteractiveBookItem[] = [
  {
    id: 'ib-5-end-p98-bosluk-doldurma',
    pageNumber: 'Sayfa 98',
    type: 'on_degerlendirme',
    title: '5. Ünite Sonu İstasyonu - A: Boşluk Doldurma (1-15)',
    badge: 'Ünite Sonu A',
    prompt: 'Kelimelerle cümleleri tamamlayınız (değişmez, gaz, enerji, joule, buharlaşma, ısı iletkeni, süblimleşme, ısı yalıtkanı, şekilleri, yoğuşma, yağmur, öteleme, farklı, ısı iletimi, termos, boşluklar).',
    interactiveAnswer: '1. Sıvı hâlden [GAZ] hâle geçen maddelerin tanecikleri arasındaki boşluk artar.\n2. Sıvı madde tanecikleri titreşim, dönme ve [ÖTELEME] hareketi yapar.\n3. Sıvı ve gaz maddelerin belirli [ŞEKİLLERİ] yoktur.\n4. Sıvı maddeler bir kaptan farklı bir kaba döküldüklerinde hacimleri [DEĞİŞMEZ] ancak kabın şeklini alır.\n5. Kalori veya [JOULE] bir enerji türü olan ısının birimidir.\n6. Naftalin, kükürt gibi katıların doğrudan gaz hâle geçmesi ile [SÜBLİMLEŞME] gerçekleşir.\n7. Buzdolabından çıkarılan şişenin dışındaki su damlaları [YOĞUŞMA] olayına örnektir.\n8. Islak çamaşırların kuruması [BUHARLAŞMA] olayının göstergesidir.\n9. Havadaki su buharının yoğuşmasıyla [YAĞMUR] olayı gerçekleşebilir.\n10. Isıyı iyi aktarabilen maddeler [ISI İLETKENİ] olarak adlandırılır.\n11. Sıcak ya da soğuk bölgelerde ısı yalıtımı yapmak [ENERJİ] tasarrufu sağlar.\n12. Isının tanecikler arasında aktarılması ile [ISI İLETİMİ] gerçekleşir.\n13. Sıcaklıkları [FARKLI] iki sıvı karıştırıldığında aralarında ısı alışverişi olur.\n14. Tanecikleri arasındaki [BOŞLUKLAR] fazla ise maddeler daha iyi yalıtım sağlar.\n15. İçeceklerin sıcaklığını korumak için [TERMOS] gibi yalıtımlı araçlar kullanılır.'
  },
  {
    id: 'ib-5-end-p99-acik-uclu',
    pageNumber: 'Sayfa 99',
    type: 'on_degerlendirme',
    title: '5. Ünite Sonu İstasyonu - B: Açık Uçlu Değerlendirme (1-10)',
    badge: 'Ünite Sonu B',
    prompt: '1. Hangi maddeler akışkandır, sebebi nedir?\n2. Boşluğa göre büyükten küçüğe sıralayınız.\n3. Isı alan taneciğin hareketliliği nasıl değişir?\n4. Isı ve sıcaklık farkları (2 adet).\n5. Tencere kapağında damlacık oluşumu hangi olaydır?\n6. Katı maddede hangi hâl değişimleri görülür?\n7. Kaynama ve buharlaşma farkları.\n8. Tencerede iletken ve yalıtkanın bir arada kullanılma sebebi nedir?\n9. Binalarda yalıtımın aile ekonomisine katkısı nedir?\n10. Yalıtım malzemeleri binanın nerelerine yerleştirilir?',
    interactiveAnswer: '1. Sıvı ve gaz maddeler akışkandır; çünkü tanecikleri öteleme hareketi yapar.\n2. Boşluk sıralaması: Gaz > Sıvı > Katı.\n3. Isı alan taneciğin ortalama hızı ve hareketliliği artar, tanecikler birbirinden uzaklaşır.\n4. Isı bir enerjidir (birimi Joule/kalori), kalorimetre kabı ile hesaplanır. Sıcaklık bir enerji değildir (birimi °C), termometre ile ölçülür.\n5. Yoğuşma olayıdır.\n6. Erime (sıvıya geçiş) ve Süblimleşme (doğrudan gaza geçiş).\n7. Buharlaşma her sıcaklıkta ve sadece yüzeyde olur; kaynama sabit belirli sıcaklıkta ve sıvının her yerinde kabarcıklarla olur.\n8. Gövde ısı iletkeni yapılarak yemeğin çabuk pişmesi sağlanır; kulplar ise ısı yalıtkanı yapılarak tutanın elinin yanması engellenir.\n9. Isınma ve soğutma yakıt/elektrik giderlerini %50’ye varan oranda düşürür.\n10. Çatıya, dış duvarlara, pencerelere (çift cam), taban/zemin döşemelerine ve boru hatlarına yerleştirilir.',
    qrInfo: {
      title: 'EBA: 5. Ünite Ölçme ve Değerlendirme Karekodu (s. 99)',
      description: 'Ders kitabının 99. sayfasındaki MEB EBA test ve değerlendirme içeriği.',
      type: 'evaluation'
    }
  },
  {
    id: 'ib-5-end-p100-beceri-cay-su',
    pageNumber: 'Sayfa 100',
    type: 'on_degerlendirme',
    title: '5. Ünite Sonu İstasyonu - C: Beceri Temelli Sorular (Ayşe Hanım’ın Çayı)',
    badge: 'Beceri Temelli',
    prompt: 'Ayşe Hanım 95 °C çay ve 10 °C suyu 25 °C odada bekletmiştir:\n1. Bir süre sonra çay ve suyun sıcaklığı ne olabilir? (A: 95-10, B: 85-15, C: 25-100, D: 100-5)\n2. Çayın üzerine bardaktaki sudan ekleseydi ne olurdu tablosu?\n3. Odada uzun süredir duran ahşap masa ve metal vazonun sıcaklıkları ne olabilir?',
    interactiveAnswer: '1. Soru: Çay odaya ısı vererek soğur (85 °C), su ise odadan ısı alarak ısınır (15 °C). (Doğru Cevap: B)\n2. Soru:\n• Su, çaydan ısı alırdı ➔ DOĞRU\n• Çayın son sıcaklığı 5 °C olabilirdi ➔ YANLIŞ (Son sıcaklık 10 ile 95 arasında olur)\n• Çaydan suya doğru sıcaklık akışı gerçekleşirdi ➔ YANLIŞ (Sıcaklık akmaz, ISI AKAR)\n➔ Doğru sıra: Doğru - Yanlış - Yanlış (Doğru Cevap: A)\n3. Soru: Aynı odada uzun süredir duran tüm cisimler oda ile ısıl dengeye ulaşır. Bu nedenle ahşap masa da metal vazo da odanın sıcaklığında (25 °C - 25 °C) eşittir! (Doğru Cevap: C)'
  },
  {
    id: 'ib-5-end-p101-cagini-asanlar',
    pageNumber: 'Sayfa 101',
    type: 'cagini_asanlar',
    title: 'Çağını Aşanlar: Madde ve Isı Bilginleri (s. 101)',
    badge: 'Çağını Aşanlar',
    content: '• İBNİ SİNA: Tıp, kimya ve fizikte maddelerin süblime etme, eritme ve birleştirme yöntemlerini geliştirmiştir.\n• CABİR BİN HAYYAN: Kimyanın babası sayılır; imbik aletini icat ederek damıtma, buharlaşma ve yoğuşma süreçlerini deneysel olarak kurmuştur.\n• ANDERS CELSIUS (1701-1744): Suyun donma sıcaklığını 0 °C, kaynama sıcaklığını 100 °C kabul eden modern santigrat derece ölçeğini geliştirmiştir.\n• FAHRENHEIT (1686-1736): Sıvıların genleşme ilkesinden yararlanarak ilk cıvalı hassas termometreyi icat etmiştir.'
  },
  {
    id: 'ib-5-end-p102-103-bilim-guncesi',
    pageNumber: 'Sayfa 102-103',
    type: 'bilgi_istasyonu',
    title: 'Bilim Güncesi: Taneciklerin Dansı, Tarhana Çorbası ve Yalıtım (s. 102-103)',
    badge: 'Bilim Güncesi',
    content: 'ÖĞRENCİ BAKIŞIYLA ÖZET:\n• Bütün maddeler sürekli titreşen, dönen ve öteleme yapan minik taneciklerden meydana gelir.\n• Isı bir enerji türüyken, sıcaklık termometreyle ölçülen bir değerdir.\n• Babaannemin yaptığı tarhana çorbasında tencerenin bakalit kulpundan tutarken elim yanmazken (ısı yalıtkanı), çelik kepçeye dokunduğumda elimin hemen ısınması (ısı iletkeni) günlük yaşamın en lezzetli fen dersidir.\n• Apartmanımıza yapılan dış cephe ısı yalıtımı sayesinde bu kış ısınma faturalarımız yarı yarıya düşmüştür.'
  }
];

export const unit5TekrarDizaynFlow: Record<string, InteractiveBookItem[]> = {
  'unit5-sub1': [
    {
      id: 'ib-5-1-p52-kapak',
      pageNumber: 'Sayfa 52-53',
      type: 'karekod',
      title: '5. Ünite Girişi: MADDENİN DOĞASI',
      badge: 'Ünite Giriş',
      qrInfo: {
        title: '5. Ünite Tanıtım ve Özet E-İçerik Karekodu (EBA)',
        description: 'Ders kitabının 53. sayfasında yer alan 5. Ünite "Maddenin Doğası" EBA tanıtım ve özet video karekodları.',
        type: 'video'
      },
      content: 'İÇERİK ÇERÇEVESİ: 1. Maddenin Tanecikli Yapısı, 2. Isı ve Sıcaklık, 3. Maddenin Hâl Değişimi, 4. Madde ve Isı.\nANAHTAR KAVRAMLAR: Titreşim, öteleme, dönme, ısı, sıcaklık, erime, donma, kaynama, yoğuşma, buharlaşma, süblimleşme, kırağılaşma, ısı iletkenliği, ısı yalıtkanlığı, ısı yalıtımı.\nHATIRLAYALIM: Maddelerin katı, sıvı ve gaz hâllerde bulunabileceğini ve hâl değiştirirken ısı alışverişi yaptığını öğrenmiştiniz.'
    },
    {
      id: 'ib-5-1-p54-on-deg1',
      pageNumber: 'Sayfa 54',
      type: 'on_degerlendirme',
      title: 'Ön Değerlendirme İstasyonu - 1 (Maddelerin Tanecikli Yapısı)',
      badge: 'Ön Değerlendirme 1',
      prompt: 'a. Çevrenizdeki taş, su, hava gibi maddeler bütünsel yapıda mıdır? Daha küçük taneciklerden oluşmuş olabilir mi?\nb. Dondurma çubuğu sürekli ikiye bölünürse en küçük parçalar daha da küçük parçalardan oluşmuş mudur?',
      interactiveAnswer: 'a. Taş, su, hava gibi maddeler dışarıdan bakıldığında tek parça ve bütünsel gibi görünseler de aslında gözle görülemeyecek kadar küçük sayısız tanecikten oluşmuştur.\nb. Evet, dondurma çubuğu tahtadan yapılmıştır ve tahta maddesi gözle bölünemeyecek kadar küçük atom ve molekül taneciklerinden meydana gelir.'
    },
    {
      id: 'ib-5-1-p54-on-deg2',
      pageNumber: 'Sayfa 54',
      type: 'on_degerlendirme',
      title: 'Ön Değerlendirme İstasyonu - 2 (Isı ve Sıcaklık Kavramları)',
      badge: 'Ön Değerlendirme 2',
      prompt: 'a. Günlük yaşamda "ısı" ve "sıcaklık" kavramlarının birbirinin yerine kullanılması uygun mudur? Nedenini açıklayınız.\nb. İfadeleri Doğru/Yanlış olarak değerlendiriniz:\n1. Suyun sıcaklığını 25 °C olarak ölçtüm.\n2. Yaz ayında güneş altında kalan arabanın sıcaklığı 50 °C oldu.\n3. Dondurmam sıcaklık aldıkça eridi.\n4. Kalorifer peteğinin verdiği ısı, oda sıcaklığını artırdı.\n5. Yaptığım kardan adam güneşten sıcaklık alarak eridi.\n6. Kardeşim ateşlendiğinde vücut ısısı 39 °C ölçüldü.',
      interactiveAnswer: 'a. Uygun değildir. Çünkü ısı aktarılan bir enerji türüdür (birimi joule veya kaloridir); sıcaklık ise enerjinin bir ölçüsü ve göstergesidir (birimi derece Celsius’tur).\nb. Doğruluk Değerleri:\n1. DOĞRU (Sıcaklık termometre ile °C ölçülür).\n2. DOĞRU (Araba yüzeyi sıcaklığı 50 °C).\n3. YANLIŞ (Dondurma sıcaklık değil, ISI alarak erir).\n4. DOĞRU (Peteğin verdiği ısı, odanın sıcaklığını artırır).\n5. YANLIŞ (Kardan adam sıcaklık değil, ISI alarak erir).\n6. YANLIŞ (Vücut ısısı değil, VÜCUT SICAKLIĞI 39 °C ölçülür).'
    },
    {
      id: 'ib-5-1-p55-baslik-hazirlik',
      pageNumber: 'Sayfa 55',
      type: 'hazirlik_istasyonu',
      title: 'MADDENİN TANECİKLİ YAPISI: Hazırlık İstasyonu',
      badge: 'Hazırlık İstasyonu',
      prompt: 'Uzaktan bir bütün gibi görünen kumsal aslında kum taneciklerinden oluşur. Maddelerin yapısı da kumsal örneğindeki gibi taneciklerden oluşmuş olabilir mi?',
      interactiveAnswer: 'Evet, evrendeki tüm katı, sıvı ve gaz maddeler tıpkı kumsaldaki kum taneleri gibi milyarlarca minik taneciğin bir araya gelmesiyle oluşmuştur.'
    },
    {
      id: 'ib-5-1-p55-merak',
      pageNumber: 'Sayfa 55',
      type: 'merak_istasyonu',
      title: 'MADDENİN TANECİKLİ YAPISI: Merak İstasyonu',
      badge: 'Merak İstasyonu',
      prompt: 'Maddenin yapısı ile ilgili merak ettiklerinizi yazınız: Tanecikler durur mu yoksa sürekli hareket eder mi?',
      interactiveAnswer: 'Maddenin tanecikleri hiçbir zaman durmaz; sürekli hareket halindedir. Katılar sadece titreşirken, sıvı ve gaz tanecikleri titreşimin yanında dönme ve öteleme hareketi de yapar.'
    },
    {
      id: 'ib-5-1-p56-etkinlik-market',
      pageNumber: 'Sayfa 56',
      type: 'etkinlik_istasyonu',
      title: 'MADDELERİN TANECİKLİ, BOŞLUKLU VE HAREKETLİ YAPISI: Maddenin Özellikleri',
      badge: 'Örnek Olay',
      prompt: 'Zeynep ve annesi market alışverişinde sepete kâğıt havlu ve elma koyunca sepet doldu. Sepet dolunca taşımakta zorlandılar:\n1. Sepete elma ve kâğıt havlu konulunca diğer ürünlerin sığmamasının sebebi nedir?\n2. Cisimlerin yer kaplamasına günlük hayattan örnekler veriniz.\n3. Annesi sepeti başta rahat taşırken sonra neden zorlandı?\n4. Maddenin ortak özellikleri nelerdir?',
      interactiveAnswer: '1. Cisimlerin hacimleri (boşlukta kapladıkları yer) olduğu için sepet dolmuş ve başka maddeye yer kalmamıştır.\n2. Kitaplığa kitap dizilmesi, su bardağının dolup taşması, odadaki eşyaların yer kaplaması.\n3. Sepete ürünler eklendikçe ürünlerin kütleleri toplanmış, sepetin toplam kütlesi (ağırlığı) artmıştır.\n4. Maddenin ortak özellikleri: KÜTLE ve HACİMdir. Kütlesi olan ve boşlukta yer kaplayan her şey maddedir.'
    },
    {
      id: 'ib-5-1-p57-etkinlik-pinpon',
      pageNumber: 'Sayfa 57',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu: Maddenin Hâllerinin Tanecikli Yapısını Modelleme',
      badge: 'Modelleme Etkinliği',
      materials: ['Şeffaf saklama kabı', 'Pinpon topları'],
      steps: [
        '1. Model (Katı): Kap tamamen pinpon toplarıyla doldurulur, boşluk çok azdır. Sallandığında toplar sadece yerinde titreşir.',
        '2. Model (Sıvı): Topların bir kısmı çıkarılır, aralarında boşluk oluşur. Sallandığında toplar birbiri üzerinden kayarak ötelenir.',
        '3. Model (Gaz): Topların büyük kısmı çıkarılır, çok geniş boşluk kalır. Toplar kabın her yerine çarparak bağımsız hareket eder.'
      ],
      evaluationQuestions: [
        {
          question: 'a. Katı, sıvı ve gaz modellerinizdeki benzerlik ve farklılıklar nelerdir?',
          answer: 'Benzerlik: Her üçü de taneciklerden oluşur ve tanecikleri hareketlidir. Farklılık: Tanecikler arası boşluk katıda çok az, sıvıda biraz daha fazla, gazda ise son derece fazladır.'
        },
        {
          question: 'b. Maddelerin tanecikleri hareketli midir?',
          answer: 'Evet, tüm madde tanecikleri hareketlidir. Katılar titreşim; sıvılar titreşim, dönme ve öteleme; gazlar ise titreşim, dönme ve öteleme hareketi yapar.'
        }
      ]
    },
    {
      id: 'ib-5-1-p58-etkinlik-siringa',
      pageNumber: 'Sayfa 58',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu: Maddeler Şırıngalarda (Sıkıştırılabilme Özelliği)',
      badge: 'Deneysel Etkinlik',
      materials: ['3 iğnesiz şırınga (A: Taş parçası, B: Su, C: Hava)'],
      steps: [
        'A şırıngasına taş koyunuz. Ucu kapatıp pistona kuvvet uygulayınız.',
        'B şırıngasını suyla doldurunuz. Ucu kapatıp pistona kuvvet uygulayınız.',
        'C şırıngasını hava ile doldurunuz. Ucu kapatıp pistona kuvvet uygulayınız.'
      ],
      evaluationQuestions: [
        {
          question: 'a. Hangi şırıngadaki madde sıkıştırılabildi? A, B ve C hangi hâldedir?',
          answer: 'Yalnızca C şırıngasındaki (Hava - Gaz) madde sıkıştırılabildi. A şırıngasındaki taş (Katı) ve B şırıngasındaki su (Sıvı) sıkıştırılamadı.'
        },
        {
          question: 'b. Maddelerin sıkıştırılabilmesi ile tanecikler arası boşluk ilişkisini açıklayınız.',
          answer: 'Gazlarda tanecikler arasındaki boşluk çok fazla olduğu için dıştan kuvvet uygulandığında tanecikler birbirine yaklaşır ve gazlar sıkıştırılabilir. Katı ve sıvılarda tanecikler arasındaki boşluk yok denecek kadar az olduğu için sıkıştırılamazlar.'
        }
      ]
    },
    {
      id: 'ib-5-1-p59-bilgi-democritus',
      pageNumber: 'Sayfa 59',
      type: 'bilgi_istasyonu',
      title: 'Bilgi İstasyonu: Democritus ve Tanecik Fikri & Pekiştirme İstasyonu-1',
      badge: 'Bilgi & Pekiştirme',
      content: 'MÖ 400’lü yıllarda filozof Democritus: "Bir elmayı ikiye bölünüz, yarım elmaları da ikiye bölünüz... Sürekli devam ederseniz öyle bir an gelecek ki artık bölünemeyecek kadar küçük bir parça elde edeceksiniz." diyerek maddenin bölünemez taneciklerden (atomos) oluştuğu görüşünü tarihte ilk kez ortaya atmıştır.\n\nPEKİŞTİRME İSTASYONU-1 ÇÖZÜMÜ:\nTanecikler arası boşluk sıralaması: Gaz > Sıvı > Katı.\nKatı tanecikleri sadece titreşir ve sıkıştırılamaz. Sıvı tanecikleri titreşir, döner, ötelenir ve sıkıştırılamaz kabul edilir. Gaz tanecikleri ise titreşir, döner, serbestçe ötelenir ve kolayca sıkıştırılabilir.'
    },
    {
      id: 'ib-5-1-p60-bilgikutusu-katisi-gaz',
      pageNumber: 'Sayfa 60',
      type: 'bilgi_kutusu',
      title: 'Bilgi Kutusu: Katı, Sıvı ve Gaz Maddelerin Karşılaştırma Özeti',
      badge: 'Hap Bilgi',
      content: '1. KATI MADDE: Tanecikler birbirine çok yakındır, boşluk azdır. Sadece titreşim hareketi yapar. Sıkıştırılamaz. Maddenin en düzenli halidir. Belirli şekli ve hacmi vardır.\n2. SIVI MADDE: Tanecikler arası boşluk katıya göre fazla, gaza göre azdır. Titreşim, dönme ve öteleme hareketi yapar. Sıkıştırılamaz. Belirli hacmi vardır ancak belirli şekli yoktur, kabın şeklini alır.\n3. GAZ MADDE: Tanecikler arası boşluk en fazladır. Titreşim, dönme ve öteleme hareketi yapar. Kolayca sıkıştırılabilir. Belirli hacmi ve şekli yoktur, kabın her yerine yayılır.'
    },
    {
      id: 'ib-5-1-p61-pekistirme2',
      pageNumber: 'Sayfa 61',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu-2: Maddeler ve Özellikleri Tablosu',
      badge: 'Pekiştirme 2',
      prompt: 'Demir, Su, Süt, Hava, Tahta ve Buhar maddelerinin özelliklerini tablodan işaretleyiniz:\n1. Taneciklerden oluşur (Tümü)\n2. Titreşim hareketi yapar (Tümü)\n3. Dönme ve öteleme hareketi yapar (Sıvı ve Gazlar: Su, Süt, Hava, Buhar)\n4. Belirli şekilleri vardır (Katılar: Demir, Tahta)\n5. Akışkandır (Sıvı ve Gazlar: Su, Süt, Hava, Buhar)\n6. Sıkıştırılabilir (Gazlar: Hava, Buhar)',
      interactiveAnswer: 'KATILAR (Demir, Tahta): Tanecikli, titreşim yapar, belirli şekli ve hacmi var, sıkıştırılamaz, akışkan değildir.\nSIVILAR (Su, Süt): Tanecikli, titreşim, dönme ve öteleme yapar, akışkandır, belirli hacmi var, şekli kabınkidir, sıkıştırılamaz.\nGAZLAR (Hava, Buhar): Tanecikli, titreşim, dönme, öteleme yapar, akışkandır, belirli hacmi ve şekli yoktur, kolaylıkla sıkıştırılabilir.',
      qrInfo: {
        title: 'EBA: Öz Değerlendirme Formu Karekodu (s. 61)',
        description: 'Ders kitabının 61. sayfasındaki "Maddenin Tanecikli Yapısı" öz değerlendirme ve çalışma kontrol formu.',
        type: 'evaluation'
      }
    },
    {
      id: 'ib-5-1-p64-pekistirme3-kavram',
      pageNumber: 'Sayfa 64',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu-3 (Kavram Haritası) & Görsel Soruları (s. 65)',
      badge: 'Pekiştirme 3 & 4',
      prompt: 'Kavram haritası boşluklarını doldurunuz: (hareket, dönme, gaz, sıkıştırılabilme, en düzensiz, en düzenli, titreşim, boşluk).\nSayfa 65 Görselleri (Çivi, süt, deniz suyu, taş, zeytinyağı, odun, bardak, su buharı, helyum gazı) sorularını cevaplayınız.',
      interactiveAnswer: 'KAVRAM HARİTASI ÇÖZÜMÜ:\nMadde taneciklerden oluşur ➔ Tanecikler [HAREKET] eder (Titreşim, [DÖNME], Öteleme) ➔ [BOŞLUK]lu yapıya sahiptir.\n• Katı: Tanecikler arası boşluk en azdır, [EN DÜZENLİ] haldir, sadece [TİTREŞİM] yapar, [SIKIŞTIRILABİLME] özelliğine sahip değildir.\n• Sıvı: Titreşim, dönme, öteleme yapar.\n• [GAZ]: Boşluk en fazladır, [EN DÜZENSİZ] haldir, sıkıştırılabilme özelliğine sahiptir.\n\nSAYFA 65 GÖRSEL SORULARI:\na. Dönme ve öteleme yapanlar: Süt (2), Deniz suyu (3), Zeytinyağı (5), Su buharı (8), Helyum gazı (9).\nb. Sıkıştırılabilenler: Su buharı (8), Helyum gazı (9).\nc. Akışkan olanlar: 2, 3, 5, 8, 9.\nç. Tanecikleri arası boşluk en az olanlar (Katılar): Çivi (1), Taş (4), Odun (6), Bardak (7).',
      qrInfo: {
        title: 'EBA: "Maddenin Tanecikli Yapısı" Etkileşimli İçeriği (s. 64)',
        description: 'Ders kitabının 64. sayfasındaki EBA simülasyon ve etkileşimli içerik karekodu.',
        type: 'interactive'
      }
    }
  ],
  'unit5-sub2': [
    {
      id: 'ib-5-2-p66-baslik-hazirlik',
      pageNumber: 'Sayfa 66',
      type: 'hazirlik_istasyonu',
      title: 'ISI VE SICAKLIK: Hazırlık İstasyonu',
      badge: 'Hazırlık İstasyonu',
      prompt: '“Deniz kıyısında hava, 38 °C olarak ölçüldü.” ifadesinde bahsedilen ölçüm değeri ısı mıdır yoksa sıcaklık mıdır? Fikirlerinizi yazınız.',
      interactiveAnswer: 'Ölçülen değer SICAKLIKTIR. Termometre ile ölçülen ve birimi derece Celsius (°C) olan büyüklük sıcaklıktır. Isı ise aktarılan bir enerji olup birimi joule veya kaloridir, termometre ile doğrudan derece olarak ölçülemez.'
    },
    {
      id: 'ib-5-2-p67-etkinlik-karikatur',
      pageNumber: 'Sayfa 67',
      type: 'etkinlik_istasyonu',
      title: 'ISI VE SICAKLIĞIN KARŞILAŞTIRILMASI: Isı mı? Sıcaklık mı? & Köprü İstasyonu',
      badge: 'Etkinlik & Köprü',
      prompt: 'KARİKATÜR ANALİZİ:\n1. Öğrenci: "Hava sıcaklığı 25 derece Celsius’tur."\n2. Öğrenci: "Hayır, hava ısısı 25 derece Celsius’tur."\n3. Öğrenci: "İkiniz de doğru söylüyorsunuz. Hava ısısı veya sıcaklığı 25 derece Celsius’tur."\n\nSoru: Karikatürde hangi öğrencinin ifadesi doğrudur? Nedenini açıklayınız.\n\nKÖPRÜ İSTASYONU (s. 67):\nGüneş doğal ısı ve ışık kaynağıdır. Güneş’ten gelen ısı Dünya’da sıcaklık oluşturur.',
      interactiveAnswer: 'Yalnızca 1. ÖĞRENCİNİN ifadesi doğrudur!\nNedeni: "Hava ısısı" diye bir kavram ve ölçüm yoktur. Havayı oluşturan taneciklerin ortalama kinetik enerjisini gösteren büyüklük sıcaklıktır ve termometre ile 25 °C olarak ölçülen değer hava sıcaklığıdır. 2 ve 3. öğrenciler ısı ile sıcaklık kavramlarını birbirine karıştırmıştır.'
    },
    {
      id: 'ib-5-2-p68-69-etkinlik-farklar',
      pageNumber: 'Sayfa 68-69',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu: Sıcak mı? Soğuk mu? ve Isı-Sıcaklık Farkları',
      badge: 'Karşılaştırma',
      prompt: 'Sıcaklık ve Isı arasındaki temel benzerlik ve farklılıkları yazınız.',
      interactiveAnswer: 'ISI VE SICAKLIK KARŞILAŞTIRMASI:\n• ISI: Bir enerji türüdür. Kalorimetre kabı ile hesaplanır. Birimi Joule (J) veya kaloridir (cal). Maddenin kütlesine bağlıdır. Sıcaklığı farklı maddeler arasında alınıp verilebilir.\n• SICAKLIK: Bir enerji değildir, taneciklerin ortalama kinetik enerjisinin bir göstergesidir. Termometre ile ölçülür. Birimi derece Celsius’tur (°C). Maddenin miktarına bağlı değildir. Alınıp verilemez.'
    },
    {
      id: 'ib-5-2-p70-bilgi-hadar',
      pageNumber: 'Sayfa 70',
      type: 'bilgi_istasyonu',
      title: 'Bilgi İstasyonu: HADAR Teknolojisi & Köprü İstasyonu (Termometreler)',
      badge: 'Bilgi & Köprü',
      content: 'BİLGİ İSTASYONU: HADAR (Isı Destekli Tespit ve Menzil):\nSisli ve karanlık havalarda araçların güvenle ilerlemesi için geliştirilen HADAR sistemi, nesnelerin yaydığı ısı sinyallerini (termal ışımayı) yapay zekâ kütüphanesiyle analiz eder. Böylece zifiri karanlıkta bile nesnelerin sıcaklığını ve türünü tespit ederek net görüntü sunar.\n\nKÖPRÜ İSTASYONU (s. 70):\nDuvar termometresi, dijital klinik termometre ve kızılötesi temassız ateşölçerler farklı sıcaklık ölçüm araçlarıdır. Meteorolojide hava tahminleri termometre verileriyle hazırlanır.',
      qrInfo: {
        title: 'EBA: "Isı ve Sıcaklık" Müzik Klibi (s. 70)',
        description: 'Ders kitabının 70. sayfasındaki "Isı ve Sıcaklık" şarkısı ve video klibi.',
        type: 'video'
      }
    },
    {
      id: 'ib-5-2-p71-pekistirme1-masal',
      pageNumber: 'Sayfa 71',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu-1 (Masal’ın Günündeki Kavram Hataları)',
      badge: 'Pekiştirme 1',
      prompt: 'Metindeki hatalı ısı-sıcaklık ifadelerini düzeltiniz:\n1. "...hava sıcaklığının 15 kalori olacağını..."\n2. "...180 derece Celsius ısıda piştiğini..."\n3. "...çok fazla sıcaklık enerjisine ihtiyaç olduğunu..."\n4. "...termometreyi kullanarak sütün ısısını ölçer..."\n5. "...bir enerji çeşidi olan sıcaklıkla ilgili..."',
      interactiveAnswer: 'DOĞRU İFADELER:\n1. Hava sıcaklığı 15 kalori değil, 15 DERECE CELSIUS (15 °C) olmalıdır.\n2. 180 derece Celsius ısı değil, 180 °C SICAKLIKTA olmalıdır.\n3. Sıcaklık enerjisi değil, ISI ENERJİSİNE ihtiyaç vardır.\n4. Termometre ile sütün ısısı değil, SÜTÜN SICAKLIĞI ölçülür.\n5. Sıcaklık bir enerji değildir, "bir enerji çeşidi olan ISI" denilmelidir.'
    },
    {
      id: 'ib-5-2-p72-performans-isi-alisverisi',
      pageNumber: 'Sayfa 72',
      type: 'performans_istasyonu',
      title: 'ISI ALIŞVERİŞİ: Sıcaklık Değişimi Performans Görevi',
      badge: 'Performans İstasyonu',
      materials: ['2 beherglas', 'İspirto ocağı', 'Su', 'Termometre'],
      prompt: '1. beherglastaki su 40 °C’a kadar ısıtılıyor. 2. beherglastaki soğuk suyun içine dökülüp karıştırılıyor.\nSoru: 2 numaralı beherglastaki suyun sıcaklığı neden değişti? Farkın sebebi nedir?',
      interactiveAnswer: 'Sıcak su ile soğuk su karıştırıldığında aralarında ISI ALIŞVERİŞİ gerçekleşir. Sıcaklığı yüksek olan 40 °C’lik su ısı vermiş, soğuk su ise ısı almıştır. Karışımın son sıcaklığı iki sıcaklık arasında bir değerde dengelenmiştir.',
      qrInfo: {
        title: 'EBA: Öz Değerlendirme Formu Karekodu (s. 72)',
        description: 'Ders kitabının 72. sayfasındaki "Sıcaklık Değişimi" performans görevini değerlendirme formu.',
        type: 'evaluation'
      }
    },
    {
      id: 'ib-5-2-p73-bilgikutusu-isi-akisi',
      pageNumber: 'Sayfa 73',
      type: 'bilgi_kutusu',
      title: 'Bilgi Kutusu: Isı Alışverişi ve Denge Sıcaklığı Kuralları',
      badge: 'Temel Kural',
      content: 'ISI ALIŞVERİŞİ TEMEL İLKELERİ:\n1. Isı akışı DAİMA sıcaklığı yüksek olan maddeden sıcaklığı düşük olan maddeye doğrudur (Sıcak ➔ Soğuk).\n2. Isı alışverişi maddelerin sıcaklıkları eşitleninceye (DENGE SICAKLIĞI) kadar sürer.\n3. Karışımın son denge sıcaklığı, karıştırılan iki sıvının ilk sıcaklıklarının ARASINDA bir değer alır (Örn: 90 °C ile 10 °C karıştırılırsa son sıcaklık 10 °C ile 90 °C arasında olur).\n4. Sıcaklıkları eşit olan maddeler arasında (Örn: 50 °C su ile 50 °C su) ISI ALIŞVERİŞİ GERÇEKLEŞMEZ!'
    },
    {
      id: 'ib-5-2-p74-pekistirme2-dallanmis-agac',
      pageNumber: 'Sayfa 74',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu-2: Sıvılarda Isı Alışverişi Dallanmış Ağaç',
      badge: 'Pekiştirme 2',
      prompt: 'Kaplardaki sıvılar: K (20 °C), L (40 °C), M (70 °C).\n1. "K ve L kaplarındaki sıvılar karıştırılırsa ısı alışverişi gerçekleşmez." (D/Y?)\n2. "K ve M karıştırılırsa K’deki sıvı ısı alır." (D/Y?)\n3. "K kabına 60 °C sıvı eklenirse K’deki sıvı ısı alır." (D/Y?)\nHatasız ilerlendiğinde hangi çıkışa ulaşılır?',
      interactiveAnswer: 'DOĞRU YOL ANALİZİ:\n• 1. İfade: K (20 °C) ve L (40 °C) sıcaklıkları farklı olduğu için ısı alışverişi gerçekleşir. Bu ifade YANLIŞTIR (Y okundan 4. kutucuğa gidilir).\n• 4. Kutu: K kabına (20 °C) 60 °C sıcaklığında sıvı eklenirse, 60 °C daha sıcak olduğu için K kabındaki sıvı ISI ALIR. Bu ifade DOĞRUDUR (D okundan ilerlenir).\n➔ ULAŞILAN HEDEF: 1. ÇIKIŞ!',
      qrInfo: {
        title: 'EBA: "Sıvılarda Isı Alışverişi" Etkileşimli İçeriği (s. 74)',
        description: 'Ders kitabının 74. sayfasındaki EBA ısı alışverişi simülatörü.',
        type: 'interactive'
      }
    },
    {
      id: 'ib-5-2-p75-pekistirme3-yapboz',
      pageNumber: 'Sayfa 75',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu-3 (30 °C Suya 60 °C Su İlavesi Yapbozu)',
      badge: 'Pekiştirme 3',
      prompt: 'Kaptaki 30 °C suya 60 °C su ilave ediliyor. Doğru ifadeleri işaretleyip yapbozu birleştiriniz:\n• Kaptaki suyun sıcaklığı kalorimetre ile ölçülmüştür. (Y)\n• Kaba su ilave edildiğinde termometrede okunan değer belirli süre artar. (D)\n• Kaptaki su, ilave edilen suya ısı vermiştir. (Y)\n• Kaptaki suyun son sıcaklığı 90 kalori olur. (Y)\n• Kaba eklenen su 30 °C olsaydı ısı alışverişi gerçekleşmezdi. (D)\n• İlave edilen su, kaptaki suya ısı vermiştir. (D)',
      interactiveAnswer: 'DOĞRU İFADELER:\n1. "Kaba su ilave edildiğinde termometrede okunan değer belirli süre artar." (DOĞRU - 60 °C su ısı verir, 30 °C suyun sıcaklığı yükselir).\n2. "Kaba eklenen su 30 °C olsaydı ısı alışverişi gerçekleşmezdi." (DOĞRU - Sıcaklıklar eşitken ısı akışı olmaz).\n3. "İlave edilen su, kaptaki suya ısı vermiştir." (DOĞRU - Sıcaklığı yüksek olan 60 °C’lik su ısı verir).\n➔ Bu üç parçanın birleşimiyle eksiksiz yapboz şekli elde edilir.'
    }
  ],
  'unit5-sub3': [
    {
      id: 'ib-5-3-p76-baslik-hazirlik',
      pageNumber: 'Sayfa 76',
      type: 'hazirlik_istasyonu',
      title: 'MADDENİN HÂL DEĞİŞİMİ: Hazırlık İstasyonu',
      badge: 'Hazırlık İstasyonu',
      prompt: 'Çatıdaki buz sarkıtlarının eriyerek su damlacıklarına dönüşmesinde hangi faktör etkili olmuştur? Fikirlerinizi yazınız.',
      interactiveAnswer: 'Güneş açtığında havanın ısınması ve buz sarkıtlarının çevreden ISI ALMASI etkili olmuştur. Katı haldeki buz ısı alarak erimiş ve sıvı su damlacıklarına dönüşmüştür.'
    },
    {
      id: 'ib-5-3-p77-etkinlik-gokce-kartopu',
      pageNumber: 'Sayfa 77',
      type: 'etkinlik_istasyonu',
      title: 'HÂL DEĞİŞİMLERİ: Isının Maddeye Etkisi (Gökçe ve Kartopu)',
      badge: 'Örnek Olay',
      prompt: 'Gökçe’nin kartopu ve ıslak eldiven hikayesi sorularını cevaplayınız:\n1. Gökçe kartopunu tutarken elinin ıslanmasının sebebi nedir?\n2. Kartopunu tutarken elinin üşümesinin sebebi nedir?\n3. Kartopu suya dönüşürken ısı almış mıdır, vermiş midir?\n4. Eldiven kururken ve su donarken ısı alışverişi nasıl gerçekleşir?',
      interactiveAnswer: '1. Elindeki ısı kartopuna geçmiş, kartopu eriyerek suya dönüşmüştür.\n2. Gökçe’nin eli kartopuna ISI VERDİĞİ için elinin sıcaklığı düşmüş ve üşümüştür.\n3. Kartopu erirken elden ISI ALMIŞTIR.\n4. Eldiven kururken petekten ISI ALARAK buharlaşmıştır; su buza dönüşürken dondurucu ortamına ISI VEREREK donmuştur.'
    },
    {
      id: 'ib-5-3-p78-79-etkinlik-mum-ve-su',
      pageNumber: 'Sayfa 78-79',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu: Muma Ne Oldu? ve Suya Ne Oldu?',
      badge: 'Deneysel Etkinlik',
      prompt: '1. Mum ispirto ocağında ısıtıldığında ve soğuk suya konulduğunda ne oldu?\n2. Su ısıtıldığında termometredeki sıcaklık değişimi ve kaynama esnasında ne gözlemlendi?',
      interactiveAnswer: '1. Katı mum ısı aldığında eriyerek sıvılaştı; soğuk suya konulduğunda ısı vererek tekrar katılaştı (dondu).\n2. Su ısıtıldıkça sıcaklığı 100 °C’a kadar yükseldi. 100 °C’ta su fokurdayarak kaynamaya başladı ve kaynama süresince sıcaklık 100 °C’ta SABİT KALDI.'
    },
    {
      id: 'ib-5-3-p80-pekistirme1-hal-grafigi',
      pageNumber: 'Sayfa 80',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu-1 (Erime, Donma ve Kaynama Deneyi)',
      badge: 'Pekiştirme 1',
      prompt: '1. Aşamada buz ısıtılmış (2-4. dk arası 0 °C sabit, 16-18. dk arası 100 °C sabit). 2. Aşamada 20 °C su dondurulmuş (4-8. dk arası 0 °C sabit).\n1. 2 ve 4. dakikalar arasında hangi hâl değişimi gerçekleşmiştir?\n2. Isı verilmesine rağmen sıcaklık neden sabit kalmıştır?\n3. Buz kaç °C’ta erimiş, su kaç °C’ta kaynamış ve kaç °C’ta donmuştur?',
      interactiveAnswer: '1. ERİME olayı gerçekleşmiştir.\n2. Saf maddeler hâl değiştirirken aldıkları ısıyı tanecikler arasındaki bağları koparmak ve mesafeyi açmak için kullanırlar, bu yüzden hâl değişimi bitene kadar sıcaklık sabit kalır.\n3. Buz 0 °C’ta erimiş, su 100 °C’ta kaynamış ve su 0 °C’ta donmuştur. (Saf maddeler için erime noktası ile donma noktası eşittir: 0 °C).'
    },
    {
      id: 'ib-5-3-p81-pekistirme2-tablo',
      pageNumber: 'Sayfa 81',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu-2: Günlük Yaşamda Hâl Değişimleri (Isı Alır / Isı Verir)',
      badge: 'Pekiştirme 2',
      prompt: 'Olayların ısı alma/verme durumlarını belirleyiniz:\n1. Kolonyanın buharlaşması\n2. Kar taneciklerinin oluşması\n3. Çaydanlıktaki suyun kaynaması\n4. Islak çamaşırların kuruması\n5. Araç camında buz tabakası\n6. Erimiş çikolatanın katılaşması\n7. Çimenlerde çiy damlaları\n8. Naftalinin süblimleşmesi',
      interactiveAnswer: '• ISI ALANLAR: Kolonyanın buharlaşması (1), Çaydanlıktaki suyun kaynaması (3), Islak çamaşırların kuruması (4), Naftalinin süblimleşmesi (8).\n• ISI VERENLER: Kar taneciklerinin oluşması (2), Camda buz tabakası / kırağı (5), Çikolatanın katılaşması / donması (6), Çiy oluşumu / yoğuşma (7).'
    },
    {
      id: 'ib-5-3-p83-85-bilgikutusu-hal-degisimleri',
      pageNumber: 'Sayfa 83-85',
      type: 'bilgi_kutusu',
      title: 'Bilgi Kutusu: Hâl Değişimleri & Buharlaşma - Kaynama Farkları',
      badge: 'Kapsamlı Özet',
      content: 'HÂL DEĞİŞİM TÜRLERİ:\n• Erime: Katı ➔ Sıvı (Isı alır)\n• Donma: Sıvı ➔ Katı (Isı verir)\n• Buharlaşma: Sıvı ➔ Gaz (Isı alır)\n• Yoğuşma: Gaz ➔ Sıvı (Isı verir)\n• Süblimleşme: Katı ➔ Doğrudan Gaz (Isı alır - Örn: Naftalin, kuru buz, katı iyot)\n• Kırağılaşma: Gaz ➔ Doğrudan Katı (Isı verir - Örn: Sabah araç camlarındaki buz kristalleri)\n\nBUHARLAŞMA ile KAYNAMA FARKLARI:\n• Buharlaşma sıvının sadece YÜZEYİNDE olur; kaynama sıvının HER YERİNDE fokurdayarak olur.\n• Buharlaşma HER SICAKLIKTA gerçekleşir; kaynama ise saf maddelerde BELİRLİ SABİT BİR SICAKLIKTA (su için 100 °C) gerçekleşir.',
      qrInfo: {
        title: 'EBA: "Maddenin Hâlleri" ve "Hâl Değişimi" Karekodları (s. 83)',
        description: 'Ders kitabının 83. sayfasında yer alan EBA animasyon ve etkileşimli içerikleri.',
        type: 'interactive'
      }
    },
    {
      id: 'ib-5-3-p86-pekistirme3',
      pageNumber: 'Sayfa 86',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu-3 (Hâl Değişimi Örnekleri 1-6 Analizi)',
      badge: 'Pekiştirme 3',
      prompt: 'Kutulardaki olaylar: 1. Gölün buz tutması, 2. Naftalinin süblimleşmesi, 3. Camda buz tabakası, 4. Çaydanlıktan buhar çıkması, 5. Kolonya serinliği, 6. Tereyağının erimesi.\na. Kaç numaralı olaylar ısı alarak gerçekleşmiştir?\nb. Kaç numaralı olaylar ısı vererek gerçekleşmiştir?\nc. Hangisi katının doğrudan gaza geçmesidir?',
      interactiveAnswer: 'a. Isı alarak gerçekleşenler: 2 (Süblimleşme), 4 (Buharlaşma/Kaynama), 5 (Buharlaşma), 6 (Erime).\nb. Isı vererek gerçekleşenler: 1 (Donma), 3 (Kırağılaşma).\nc. Doğrudan gaza geçme: 2 (Naftalinin süblimleşmesi).'
    }
  ],
  'unit5-sub4': [
    {
      id: 'ib-5-4-p87-baslik-hazirlik',
      pageNumber: 'Sayfa 87',
      type: 'hazirlik_istasyonu',
      title: 'MADDE VE ISI (ISI İLETİMİ & YALITIMI): Hazırlık İstasyonu',
      badge: 'Hazırlık İstasyonu',
      prompt: 'Çaydanlık çok sıcak olmasına rağmen sapından tuttuğunuzda eliniz neden yanmaz? Fikirlerinizi yazınız.',
      interactiveAnswer: 'Çaydanlığın gövdesi ısıyı çok iyi ileten metalden (çelik/alüminyum), sapı ise ısıyı iletmeyen yalıtkan malzemeden (bakalit, plastik veya ahşap) yapılmıştır. Yalıtkan kulp ısının elimize geçmesini engeller.'
    },
    {
      id: 'ib-5-4-p88-etkinlik-corba-aktarim',
      pageNumber: 'Sayfa 88',
      type: 'etkinlik_istasyonu',
      title: 'ISI İLETİMİ: Maddelerde Isı Aktarımı (Aybüke ve Necmettin)',
      badge: 'Örnek Olay',
      prompt: 'Necmettin metal kaşıkla karıştırırken eli yanmış, tahta kaşığa geçince eli yanmamıştır. Aybüke masayı korumak için nihale koymuştur:\n1. Bu durum maddelerin hangi özelliği ile ilgilidir?\n2. Tencerenin çorbayı pişirmesi hangi özelliği sayesindedir?\n3. Aybüke neden nihale kullanmıştır?\n4. Isıyı iyi ileten ve iletmeyen kavramlar nelerdir?',
      interactiveAnswer: '1. Isı iletkenliği ve yalıtkanlığı özelliği ile ilgilidir. Metal ısı iletkeni, tahta ise ısı yalıtkanıdır.\n2. Tencerenin metal gövdesinin ısı iletkeni olması sayesindedir.\n3. Masanın sıcaktan yanmasını/zarar görmesini önlemek için ısı yalıtkanı olan nihale kullanılmıştır.\n4. Isıyı iyi ileten maddelere "ISI İLETKENİ", ısıyı iyi iletmeyen maddelere "ISI YALITKANI" denir.'
    },
    {
      id: 'ib-5-4-p89-pekistirme1-tablo',
      pageNumber: 'Sayfa 89',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu-1 (İletken ve Yalıtkan Maddeler Tablosu)',
      badge: 'Pekiştirme 1',
      prompt: 'Maddelerin durumunu belirleyiniz: Çelik çaydanlık, Termos bardak, Alüminyum folyo, Tenceredeki plastik kulp, Yünlü kazak, Altın yüzük, Bakır tava, Tahta kaşık.',
      interactiveAnswer: '• ISI İLETKENLERİ: Çelik çaydanlık, Alüminyum folyo, Altın yüzük, Bakır tava (Genellikle metaller).\n• ISI YALITKANLARI: Termos bardak, Tenceredeki plastik kulp, Yünlü kazak, Tahta kaşık (Plastik, yün, ahşap, hava boşluğu).',
      qrInfo: {
        title: 'EBA: "İletken mi? Yalıtkan mı?" Etkileşimli İçeriği (s. 89)',
        description: 'Ders kitabının 89. sayfasındaki EBA sınıflandırma içeriği.',
        type: 'interactive'
      }
    },
    {
      id: 'ib-5-4-p90-pekistirme2-koy-ziyareti',
      pageNumber: 'Sayfa 90',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu-2 (Kışın Köy Ziyareti & Yalıtım)',
      badge: 'Pekiştirme 2',
      prompt: 'Köyde dede ziyareti metni soruları:\n1. Metindeki altı çizili malzemelerden hangileri ısı iletkenidir?\n2. Hangileri ısı yalıtkanıdır?\n3. Su saatinin üzerine saman dökülmüş olsaydı ne değişirdi?',
      interactiveAnswer: '1. Isı İletkenleri: Soba borusu, çaydanlık, metal çay kaşığı.\n2. Isı Yalıtkanları: Saman, mont, plastik çay tabağı, kalın bot, kışlık eldiven.\n3. Saman çok iyi bir ısı yalıtkanıdır; dışarıdaki dondurucu soğuğun su saatine ulaşmasını engelleyerek suyun donmasını önlerdi.'
    },
    {
      id: 'ib-5-4-p91-bilgi-termos',
      pageNumber: 'Sayfa 91',
      type: 'bilgi_istasyonu',
      title: 'Bilgi İstasyonu: Termosun Çalışma Prensibi & Binalarda Isı Yalıtımı',
      badge: 'Bilgi İstasyonu',
      content: 'TERMOSUN YAPISI (Görsel 5.4.11):\n• Termoslar iç içe geçmiş iki parlak kaptan oluşur.\n• İki kap arasındaki hava tamamen vakumlanarak boşluk oluşturulmuştur. Boşlukta tanecik olmadığı için iletim yoluyla ısı aktarımı durdurulur.\n• Parlak gümüşi yüzeyler ışıma ile ısı kaybını yansıtır, kapaktaki plastik/silikon conta ise hava sızdırmazlığı sağlar.\n\nBİNALARDA YALITIM MALZEMELERİ:\nPlastik köpük (strafor), taş yünü, cam yünü, ahşap, katran, volkanik tüf ve bakalit binalarda ısı yalıtımı sağlayarak enerji tasarrufu yaptırır.'
    },
    {
      id: 'ib-5-4-p92-pekistirme3-ogrenci-gorusleri',
      pageNumber: 'Sayfa 92',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu-3 (Isı Yalıtımı Öğrenci Görüşleri Analizi)',
      badge: 'Pekiştirme 3',
      prompt: 'Öğrencilerin ısı yalıtımı ile ilgili görüşlerini değerlendiriniz (1, 2, 3, 4, 5, 6. Öğrenciler).',
      interactiveAnswer: 'DOĞRU CEVAP VEREN ÖĞRENCİLER:\n• 1. Öğrenci (Isınma maliyetini düşürür),\n• 4. Öğrenci (Tüm iklim tiplerinde yazın sıcağı, kışın soğuğu keserek işlevseldir),\n• 5. Öğrenci (Nem, rutubet ve küf mantarlarını azaltıp sağlığı korur),\n• 6. Öğrenci (Daha az enerji ile konforlu sıcaklık sağlar).\n\nYANLIŞ CEVAP VEREN ÖĞRENCİLER:\n• 2. Öğrenci (Sıcak bölgelerde de klima enerjisi tasarrufu için yalıtım şarttır),\n• 3. Öğrenci (Yalıtımlı binalarda enerji maliyeti fazla değil, çok daha azdır).'
    },
    {
      id: 'ib-5-4-p93-94-etkinlik-maras-ve-harran',
      pageNumber: 'Sayfa 93-94',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik: Maraş Dondurması & Harran Kümbet Evleri',
      badge: 'Kültür & Uygulama',
      prompt: '1. Maraş dondurması 10 saatlik yolda strafor kutu ve kuru buz ile erimeden nasıl kalabilmiştir?\n2. Şanlıurfa Harran konik kümbet evlerinin yazın serin, kışın sıcak kalmasını sağlayan yalıtım özellikleri nelerdir?',
      interactiveAnswer: '1. Strafor köpük içindeki hava gözenekleri mükemmel bir ısı yalıtımı sağlamış, dış ortamdaki ısının kutu içine girmesini engellemiştir.\n2. Harran evlerinin yaklaşık 5 metre yüksekliğindeki konik kubbeleri sıcak havanın tepeden çıkmasını sağlar. Duvarlarındaki kalın balçık, saman, toprak ve yumurta akı sıvası yüksek ısı yalıtımı sunarak yazın sıcağı, kışın ise dondurucu soğuğu dışarıda tutar.',
      qrInfo: {
        title: 'EBA: "Isı Yalıtımı" Etkileşimli İçeriği (s. 94)',
        description: 'Ders kitabının 94. sayfasındaki EBA yalıtım simülasyonu.',
        type: 'interactive'
      }
    },
    {
      id: 'ib-5-4-p95-96-performans-enerji-dostu',
      pageNumber: 'Sayfa 95-96',
      type: 'performans_istasyonu',
      title: 'PERFORMANS İSTASYONU: Enerji Dostu Evler (Mühendislik Tasarımı)',
      badge: 'Mühendislik Tasarımı',
      prompt: 'Mühendislik tasarım döngüsüne uygun olarak farklı iklim koşullarına uyumlu bir ısı yalıtım maket evi tasarlayınız.\nSoru: Performans sonucunda ne öğrendiniz?',
      interactiveAnswer: 'PERFORMANS SONUCU KAZANIMLARI:\n• Bir binada çatı, dış duvarlar, pencereler (çift cam) ve zemin yalıtımı yapıldığında yakıt tüketiminin %50 oranında azaldığı kanıtlanmıştır.\n• Türk-İslam mimarisindeki kalın taş ve kerpiç duvar tekniklerinin modern mantolama yöntemlerine ilham verdiği görülmüştür.',
      qrInfo: {
        title: 'EBA: Performans Değerlendirme Formu (s. 96)',
        description: 'Ders kitabının 96. sayfasındaki öz değerlendirme karekodu.',
        type: 'evaluation'
      }
    },
    {
      id: 'ib-5-4-p97-pekistirme4-dallanmis',
      pageNumber: 'Sayfa 97',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu-4 (Dallanmış Ağaç: Zeynep ve Alp)',
      badge: 'Pekiştirme 4',
      prompt: 'Zeynep ilk ifadede hata yapmadan, Alp ise ilk ifadede hata yaparak başlamış ve sonrasında hatasız ilerlemiştir.\n"Isı iletimi, ısının madde tanecikleri arasında aktarılmasıyla gerçekleşebilir." (D)\nBuna göre Zeynep ve Alp hangi çıkışlara ulaşmıştır?',
      interactiveAnswer: '• ZEYNEP’İN YOLU: 1. İfade DOĞRU ➔ Sol kanada gider ("Demir, bakır, altın, gümüş ısı iletkenidir" ➔ DOĞRU) ➔ ("Isı yalıtımı nedeniyle ısınma maliyeti artar" ➔ YANLIŞ) ➔ 2. ÇIKIŞA ULAŞIR.\n• ALP’İN YOLU: 1. İfadeye YANLIŞ diyerek sağ kanada sapar ➔ ("Isı yalıtımı maddeler arası ısı akışını yavaşlatmak için yapılır" ➔ DOĞRU) ➔ ("Isı yalıtımı doğal kaynakların korunmasına katkıda bulunur" ➔ DOĞRU) ➔ 5. ÇIKIŞA ULAŞIR.\n➔ Cevap: Zeynep 2. Çıkışa, Alp ise 5. Çıkışa ulaşmıştır.'
    },
    ...unit5EndItems
  ],
  'unit5-end': unit5EndItems
};


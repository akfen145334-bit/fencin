import { InteractiveBookItem } from '../../types/curriculum';

/**
 * 6. SINIF FEN BİLİMLERİ 2. KİTAP - TEKRAR DİZAYN SİSTEMİ
 * 6. ÜNİTE: ELEKTRİĞİN İLETİMİ VE DİRENÇ (Sayfa 64 - 95)
 */

export const unit6EndItemsG6: InteractiveBookItem[] = [
  {
    id: 'ib-g6-u6-end-p93-a-bosluk',
    pageNumber: 'Sayfa 93',
    type: 'on_degerlendirme',
    title: '6. Ünite Sonu İstasyonu - A: Boşluk Doldurma Cümleleri (1-7)',
    badge: 'Ünite Sonu A',
    prompt: `A. Boşluk Doldurma Cümleleri (s. 93):
[Kelimeler: yalıtkan, cinsi, iletken, direnç, büyük, reosta, parlak, ohm]

1. Elektrikli aletlerde iletken ve ……………… maddeler birlikte kullanılabilir.
2. Tuzlu su ……………… sıvı maddelere örnek olarak verilebilir.
3. Maddelerin elektrik enerjisinin geçişine karşı gösterdiği zorluğa elektriksel ……………… adı verilir.
4. Bir iletkenin uzunluğu ve ……………… elektriksel direnci belirleyen değişkenlerdendir.
5. Dik kesit alanları aynı, uzunlukları farklı iki bakır telin kullanıldığı özdeş devrelerde kısa telin kullanıldığı devredeki ampul daha ……………… ışık verir.
6. Direncin birimi ……………… ile ifade edilir.
7. Klima gibi elektrikli aletlerin devrelerinde direnç değişimi ……………… adı verilen devre elemanlarıyla sağlanır.`,
    interactiveAnswer: `A. BOŞLUK DOLDURMA ÇÖZÜM ANAHTARI (SAYFA 93):
1. YALITKAN (Prizin içi bakır iletken, dışı plastik yalıtkandır; güvenlik ve iletim birlikte sağlanır).
2. İLETKEN (Tuzlu su elektrik akımını ileten elektrolit sıvıdır).
3. DİRENÇ (Akımın geçişine karşı gösterilen zorluk).
4. CİNSİ (veya dik kesit alanı; direnci belirleyen üç faktör: uzunluk, kesit alanı, cinsi).
5. PARLAK (Kısa telin direnci az olduğu için devreden geçen akım artar ve ampul daha parlak yanar).
6. OHM (Simgesi: $\\Omega$).
7. REOSTA (Ayarlanabilir değişken direnç).`
  },
  {
    id: 'ib-g6-u6-end-p93-b-klasik',
    pageNumber: 'Sayfa 93',
    type: 'pekistirme_istasyonu',
    title: '6. Ünite Sonu İstasyonu - B: Seçil, Göktuğ ve Hasan’ın Deneyleri Analizi (1-3)',
    badge: 'Ünite Sonu B',
    prompt: `Metin: Seçil test devresiyle balon, plastik ip, bant, karton poster, toplu iğne, zımba teli ve metal makasın iletkenliklerini test ediyor.
Göktuğ ve Hasan ise uzunlukları ve cinsleri aynı, dik kesit alanları farklı iki teli test ederek ampul parlaklığını gözlemliyor. Hasan, diğer adı değişken direnç olan aleti getireceğini söyleyerek ayrılıyor.

Sorular:
1. Seçil'in kullandığı iletken ve yalıtkan malzemeler nelerdir?
2. Göktuğ ve Hasan'ın yaptıkları deneyde bağımlı ve bağımsız değişken nedir?
3. Hasan, hangi devre elemanını getirmek için Göktuğ’un yanından ayrılmıştır?`,
    interactiveAnswer: `B. DENEY ANALİZİ ÇÖZÜMLERİ (SAYFA 93):
1. Seçil'in Malzeme Sınıflandırması:
   • İletken Maddeler: Toplu iğne (metal), Zımba teli (metal) ve Metal makas.
   • Yalıtkan Maddeler: Balon (kauçuk/lastik), Plastik ip, Bant ve Karton poster.

2. Göktuğ ve Hasan'ın Deney Değişkenleri:
   • Bağımsız Değişken (Deneycinin bilerek değiştirdiği): İLETKEN TELİN DİK KESİT ALANI (KALINLIĞI).
   • Bağımlı Değişken (Bağımsız değişkene bağlı olarak değişen sonuç): AMPUL PARLAKLIĞI (veya Elektriksel Direnç).
   • Kontrol Edilen (Sabit Tutulan) Değişkenler: Telin cinsi, telin uzunluğu, pil sayısı, ampul sayısı.

3. Hasan'ın Getireceği Devre Elemanı:
   Değişken direnç olarak adlandırılan REOSTA'dır.`
  },
  {
    id: 'ib-g6-u6-end-p94-95-c-devreler-ve-reosta-grafikleri',
    pageNumber: 'Sayfa 94-95',
    type: 'etkinlik_istasyonu',
    title: '6. Ünite Sonu İstasyonu - C: K, L, M, N Devreleri ve Reosta Sürgü Grafikleri (1-3)',
    badge: 'Beceri Temelli Devreler',
    prompt: `Devreler ve Açıklamalar:
- K Deneyi: 1. Demir anahtar, 2. Cam çubuk, 3. Porselen çubuk.
- L Deneyi: Bakır tel vs Nikel tel (uzunluk ve kesit eşit, cins farklı).
- M Deneyi: İnce Bakır tel vs Kalın Bakır tel (uzunluk ve cins eşit, kesit farklı).
- N Deneyi: Reosta sürgüsü hareket ettirilen devre (A devresinde sürgü sağa çekilip direnç artırılmış; B devresinde sürgü sola çekilip direnç azaltılmış).

Sorular:
1. K deneyiyle ilgili hangileri doğrudur?
   I. 2. devrede ampul ışık verir.
   II. Maddelerin iletkenlikleri belirlenebilir.
   III. Biri iletken (demir anahtar), ikisi yalıtkandır (cam, porselen).
   (A: Yalnız I, B: I ve II, C: II ve III, D: I, II ve III)

2. L ve M deneyleriyle ilgili hangi çıkarım YANLIŞTIR?
   A) M deneyinde bağımlı değişken iletkenin dik kesit alanıdır.
   B) L deneyinde iletkenin cinsinin etkisi gözlemlenebilir.
   C) M deneyinde anahtarlar kapatılınca ampuller ışık verir.
   D) L deneyindeki tellerin dirençleri farklıdır.

3. N deneyindeki A ve B devrelerinin direnç ve parlaklık grafikleri hangisinde doğru verilmiştir?`,
    interactiveAnswer: `C. DEVRE VE REOSTA ANALİZİ ÇÖZÜMLERİ (SAYFA 94-95):
1. Soru Çözümü (K Deneyi):
   • I. İfade: Cam çubuk yalıtkan olduğu için ampul ışık VERMEZ ➔ YANLIŞ.
   • II. İfade: Ampulün yanıp yanmamasına bakılarak iletkenlik belirlenir ➔ DOĞRU.
   • III. İfade: Demir anahtar iletken; cam ve porselen yalıtkandır ➔ DOĞRU.
   🎯 Doğru Cevap: C Şıkkı (II ve III).

2. Soru Çözümü (L ve M Deneyleri):
   • M deneyinde dik kesit alanı deneyci tarafından değiştirilen BAĞIMSIZ değişkendir; bağımlı değişken değildir (bağımlı değişken ampul parlaklığıdır).
   🎯 Yanlış Çıkarım: A Şıkkı.

3. Soru Çözümü (N Reosta Devresi):
   • A Devresi: Sürgü sağa çekilmiş, akımın geçtiği tel uzamıştır ➔ Direnç BÜYÜK, Parlaklık KÜÇÜK.
   • B Devresi: Sürgü sola çekilmiş, akımın geçtiği tel kısalmıştır ➔ Direnç KÜÇÜK, Parlaklık BÜYÜK.
   🎯 Bu ilişkiyi (A'nın direnci yüksek-parlaklığı düşük; B'nin direnci düşük-parlaklığı yüksek) veren grafik C ŞIKKIDIR!` ,
    qrInfo: {
      title: 'EBA: 6. Ünite Elektriğin İletimi ve Direnç Değerlendirme Testi & Bilim Güncesi (s. 95)',
      description: 'Ders kitabının 95. sayfasındaki MEB EBA ünite değerlendirme ve öğrenci bilim güncesi etkileşim karekodları.',
      type: 'evaluation'
    }
  }
];

export const grade6Book2FlowsUnit6: Record<string, InteractiveBookItem[]> = {
  'g6-u6-sub1': [
    {
      id: 'ib-g6-6-1-p64-67-kapak-on-degerlendirme',
      pageNumber: 'Sayfa 64-67',
      type: 'on_degerlendirme',
      title: '6. Ünite Girişi: Elektriğin İletimi ve Direnç & Ön Değerlendirme İstasyonu',
      badge: 'Ünite Girişi & Ön Değerlendirme',
      qrInfo: {
        title: 'EBA: 6. Ünite Tanıtım ve Özet E-İçerik Karekodu (s. 65)',
        description: 'Ders kitabının 65. sayfasındaki MEB EBA "Elektriğin İletimi ve Direnç" video karekodları.',
        type: 'video'
      },
      prompt: `Ön Değerlendirme İstasyonu (s. 66-67):
1. Basit bir elektrik devresinin çalışabilmesi için hangi elemanlara ihtiyaç vardır?
2. 1 pil, 1 ampul ve 3 plastik çubukla kurulan devrede ampul ışık verir mi, neden?
3. Devre Şeması Soruları:
   - Devredeki pil sayısı 3'e çıkarılırsa parlaklık nasıl değişir?
   - Ampul sayısı 2'ye düşürülürse parlaklık nasıl değişir?
   - Pillerden biri çıkarılırsa parlaklık nasıl değişir?
   - Devreye bir ampul eklenirse parlaklık nasıl değişir?`,
      interactiveAnswer: `ÖN DEĞERLENDİRME ÇÖZÜMLERİ (SAYFA 66-67):
1. Temel Devre Elemanları: Pil (güç kaynağı), ampul (yük/ışık kaynağı), iletken kablo (enerji iletimi) ve anahtar (devreyi açıp kapama).
2. Plastik Çubuklu Devre: Ampul IŞIK VERMEZ. Çünkü plastik yalıtkandır; elektrik yüklerinin üzerinden geçmesine izin vermez ve devreyi tamamlamaz.
3. Parlaklık Değişimleri:
   - Pil sayısı artarsa: Devre gerilimi ve akım artar ➔ AMPUL PARLAKLIĞI ARTAR.
   - Ampul sayısı azalırsa: Eşdeğer direnç düşer ➔ AMPUL PARLAKLIĞI ARTAR.
   - Pillerden biri çıkarılırsa: Gerilim düşer ➔ AMPUL PARLAKLIĞI AZALIR.
   - Devreye ampul eklenirse: Direnç artar, enerji paylaşılır ➔ AMPUL PARLAKLIĞI AZALIR.`
    },
    {
      id: 'ib-g6-6-1-p68-71-iletken-yalitkan-deney-ve-eba',
      pageNumber: 'Sayfa 68-71',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik 1-3: Katı ve Sıvı İletkenlik Test Devresi & EBA Karekodu',
      badge: 'İletken & Yalıtkan Testi',
      qrInfo: {
        title: 'EBA: "İletken mi Yalıtkan mı" Etkileşimli İçeriği (s. 71)',
        description: 'Ders kitabının 71. sayfasındaki iletken ve yalıtkan maddeleri test etme sanal deneyi.',
        type: 'interactive'
      },
      content: `İLETKEN VE YALITKAN MADDELERİN AYRIMI (Sayfa 69-72):
• İletken Maddeler: Elektrik enerjisini ileten maddelerdir.
  - Katı İletkenler: Bakır tel, demir çivi/vida, alüminyum, gümüş, altın, kurşun kalem ucu (grafit).
  - Sıvı İletkenler: Tuzlu su, limonlu su, sirkeli su, çeşme suyu, asitli çözeltiler.
• Yalıtkan Maddeler: Elektrik enerjisinin iletimini engelleyen maddelerdir.
  - Katı Yalıtkanlar: Plastik, cam çubuk, porselen fincan, tahta çubuk, kauçuk, kumaş, silgi.
  - Sıvı Yalıtkanlar: Saf su, şekerli su, alkollü su, zeytinyağı.`
    },
    {
      id: 'ib-g6-6-1-p72-73-kopru-guvenlik-ve-dart-oyunu',
      pageNumber: 'Sayfa 72-73',
      type: 'pekistirme_istasyonu',
      title: 'Köprü İstasyonu (Yalıtım ve Güvenlik) & Pekiştirme İstasyonu-1 (Dart Oyunu)',
      badge: 'İş Güvenliği & Dart',
      content: `ELEKTRİK YALITIMI VE CAN GÜVENLİĞİ (Sayfa 72):
• Prizler ve Kablolar: İç kısımları iletken bakırdan yapılırken; kullanıcıyı elektrik çarpmasından korumak için dış yüzeyleri plastik ve kauçuk gibi yalıtkanlarla kaplanır.
• Trafo Teknisyenleri: Kalın yalıtkan eldivenler, yalıtkan tabanlı çizmeler ve izole sehpalar kullanarak çalışırlar.
• Havanın İletkenliği: Hava normalde yalıtkandır; ancak yıldırım ve şimşek anında yüksek gerilimle iyonlaşarak iletken hâle gelir.
• DART OYUNU ÇÖZÜMÜ (Sayfa 73):
  Öğrenciler iletken katı (demir, bakır), iletken sıvı (limonlu su, tuzlu su, sirke), yalıtkan katı (plastik, cam) ve yalıtkan sıvı (şekerli su, kolonya) bölgelerini vurarak kurallara göre puan toplarlar.`
    }
  ],
  'g6-u6-sub2': [
    {
      id: 'ib-g6-6-2-p74-77-direncin-bagli-oldugu-3-faktor',
      pageNumber: 'Sayfa 74-77',
      type: 'etkinlik_istasyonu',
      title: '2. Bölüm: Elektriksel Direnç ve Bağlı Olduğu 3 Faktör (Araba Yolu Analojisi)',
      badge: 'Direncin 3 Faktörü',
      content: `ELEKTRİKSEL DİRENCİ ETKİLEYEN 3 DEĞİŞKEN (Sayfa 75-77):
1. İletkenin Uzunluğu ($L$):
   Yol uzadıkça arabaların zorlanması gibi, tel uzadıkça elektriksel direnç ARTAR ($R \\propto L$). Uzun telde ampul daha sönük, kısa telde daha parlak yanar.
2. İletkenin Dik Kesit Alanı ($S$ / Kalınlık):
   Yol genişledikçe arabaların daha rahat ilerlemesi gibi, tel kalınlaştıkça elektriksel direnç AZALIR ($R \\propto 1/S$). Kalın telde ampul daha parlak, ince telde daha sönük yanar.
3. İletkenin Cinsi:
   Yolun asfalt veya çamurlu toprak olması gibi; farklı metallerin atomik yapıları farklı direnç gösterir. Bakırın direnci demirden çok daha küçüktür; bu yüzden bakır telde ampul daha parlak yanar.`
    },
    {
      id: 'ib-g6-6-2-p78-80-etkinlik-6-ve-pekistirme-2-karton',
      pageNumber: 'Sayfa 78-80',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik-6 (Tel Değişimleri) & Pekiştirme İstasyonu-2 (Kartonla Gizlenen Teller)',
      badge: 'Deney & Tel Analizi',
      qrInfo: {
        title: 'EBA: "Elektriksel Direncin Ampul Parlaklığına Etkisi" Etkileşimli İçeriği (s. 79)',
        description: 'Ders kitabının 79. sayfasındaki tel uzunluğu ve kalınlığı simülasyon karekodu.',
        type: 'interactive'
      },
      prompt: `Pekiştirme İstasyonu-2 (s. 80):
Referans: Normal nikel tel takıldığında orta parlaklıkta yanan lamba.
1. Aşama: İletkenin uzunluğunun etkisi test ediliyor (Karton arkasındaki tel takılınca lamba çok sönük yanıyor).
2. Aşama: İletkenin dik kesit alanının etkisi test ediliyor (Karton arkasındaki tel takılınca lamba çok parlak yanıyor).
Hangi görseller 1. ve 2. aşamaya aittir?`,
      interactiveAnswer: `PEKİŞTİRME İSTASYONU-2 ÇÖZÜMÜ:
• 1. Aşama (Lamba Sönükleşti):
  Ampulün sönük yanması direncin arttığını gösterir. Direncin artması için telin UZUN OLMASI gerekir. Birim karede uzunluğu en fazla olan Nikel Tel ➔ "1" numarayla eşleşir.
• 2. Aşama (Lamba Çok Parlak Yandı):
  Ampulün parlak yanması direncin azaldığını gösterir. Direncin azalması için telin KALIN (DİK KESİTİ BÜYÜK) olması gerekir. Birim karede en kalın olan Nikel Tel ➔ "2" numarayla eşleşir.`
    },
    {
      id: 'ib-g6-6-2-p81-84-filaman-asik-veysel-ve-pekistirme-3',
      pageNumber: 'Sayfa 81-84',
      type: 'bilgi_kutusu',
      title: 'Ampul Filamanı, Isıtıcılar & Âşık Veysel Şiiriyle Direnç Analizi',
      badge: 'Filaman & Âşık Veysel',
      content: `AMPUL FİLAMANI VE ÂŞIK VEYSEL ŞİİRİ:
• Ampulün Filaman Teli (Sayfa 83):
  Akkor ampullerde tungsten (volfram) adı verilen erime noktası 3400°C'yi aşan çok ince ve uzun sarmal bir tel bulunur. Telin direnci o kadar yüksektir ki geçen akım teli akkor hâle getirip beyaz ışık ve ısı yaymasını sağlar.
• ÂŞIK VEYSEL ŞATIROĞLU (Sayfa 84):
  "Uzun ince bir yoldayım, gidiyorum gündüz gece..." dizeleri elektriksel direncin en büyük olduğu durumu temsil eder: Tel ne kadar UZUN ve ne kadar İNCE ise direnç o kadar BÜYÜKTÜR!`
    },
    {
      id: 'ib-g6-6-2-p85-89-reosta-kavrami-ve-kullanim-alanlari',
      pageNumber: 'Sayfa 85-89',
      type: 'bilgi_kutusu',
      title: 'Reosta (Ayarlanabilir Direnç): Çalışma Prensibi ve Günlük Yaşam Kullanımları',
      badge: 'Reosta Çalışma İlkesi',
      qrInfo: {
        title: 'EBA: "Reosta" Müzik Klibi (s. 88) & "Reosta ve Ampul Parlaklığı" (s. 89)',
        description: 'Ders kitabının 88 ve 89. sayfalarındaki MEB EBA reosta animasyon karekodları.',
        type: 'interactive'
      },
      content: `REOSTA (DEĞİŞKEN DİRENÇ) VE GÖREVLERİ (Sayfa 87-89):
• Tanım: Bir elektrik devresinde direnç değerini manuel veya otomatik olarak değiştirmeye yarayan devre elemanıdır.
• Çalışma Mantığı:
  - Sürgü hareket ettirilerek akımın üzerinden geçtiği telin uzunluğu artırılırsa: Direnç ARTAR ➔ Devre akımı azalır ➔ Ampul parlaklığı AZALIR.
  - Sürgü ters yöne çekilip telin uzunluğu kısaltılırsa: Direnç AZALIR ➔ Devre akımı artar ➔ Ampul parlaklığı ARTAR.
• Günlük Yaşam Kullanımları:
  Ütü ve fırınların termostat ayar düğmeleri, saç kurutma makinelerinin kademe ayarları, eski radyoların ses açıp kapama potansiyometreleri, oda ışığını kısıp açan dimmer anahtarlar.`
    },
    {
      id: 'ib-g6-6-2-p90-91-pekistirme-4-5-reosta-sorulari',
      pageNumber: 'Sayfa 90-91',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu 4 & 5: Reosta Sürgü Yönleri ve Tel Karşılaştırmaları',
      badge: 'Reosta Problem Çözümü',
      prompt: `Pekiştirme İstasyonu-4 (s. 90):
1. I, II, III devrelerinde reosta sürgüsü farklı konumlardadır.
   - Elektriksel dirençleri sıralayınız.
   - Ampul parlaklıklarını sıralayınız.
2. Reosta sürgüsü 1 ve 2 yönünde hareket ettirildiğinde grafikte K (sönük), L (çok parlak), M (orta) aşamaları oluşuyor. Sürgü yönlerini belirleyiniz.`,
      interactiveAnswer: `PEKİŞTİRME İSTASYONU-4 ÇÖZÜMLERİ:
1. Devre Sıralamaları:
   - Akımın geçtiği sargı uzunluğu en fazla olanda direnç en büyüktür: Direnç Sıralaması: III > II > I.
   - Direnç ile parlaklık ters orantılıdır: Parlaklık Sıralaması: I > II > III (A > B > C).
2. Reosta Sürgü Yönleri:
   - K aşamasında parlaklık azaldığı için direnç artmıştır ➔ Sürgü 1 YÖNÜNDE çekilmiştir.
   - L aşamasında parlaklık zirveye çıktığı için direnç azalmıştır ➔ Sürgü 2 YÖNÜNDE çekilmiştir.
   - M aşamasında başlangıç düzeyine yakındır ➔ Sürgü 1 YÖNÜNDE çekilmiştir.`
    },
    {
      id: 'ib-g6-6-2-p92-cagini-asanlar-elektrik',
      pageNumber: 'Sayfa 92',
      type: 'cagini_asanlar',
      title: 'Çağını Aşanlar: Thomas Edison, Nikola Tesla, Emin Kalmuk, Fuat Külünk',
      badge: 'Çağını Aşanlar',
      content: `BİLİM VE ELEKTRİK TARİHİ BİLGİNLERİ (Sayfa 92):
1. Thomas Edison (1847-1931): Yüksek elektrik direncine sahip karbonize bambu filamanla 1200 saatten fazla kesintisiz ışık veren ticari ilk ampulü icat etmiştir.
2. Nikola Tesla (1856-1943): Alternatif akım (AC) motorları ve elektrik enerjisinin kablosuz olarak kıtalararası iletilebileceğini savunan vizyoner dâhi.
3. Ord. Prof. Emin Kalmuk (1869-1954): 1. Dünya Savaşı'nda Osmanlı İstanbul Telefon Tesislerini başarıyla yönetmiş, telgraf-telefon şebekelerinin hat arızalarını çözen ilk Türk haberleşme öncüsüdür.
4. Fuat Külünk (1911-1951): İTÜ bünyesinde Türkiye'nin ve dünyanın sayılı yüksek gerilim laboratuvarlarından birini kuran elektrik makineleri hocasıdır.`
    },
    ...unit6EndItemsG6
  ],
  'g6-u6-end': unit6EndItemsG6
};

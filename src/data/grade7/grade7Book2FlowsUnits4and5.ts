import { InteractiveBookItem } from '../../types/curriculum';

/**
 * 7. SINIF FEN BİLİMLERİ 2. KİTAP - TEKRAR DİZAYN SİSTEMİ
 * 4. ÜNİTE: IŞIĞIN KIRILMASI VE MERCEKLER (Sayfa 12 - 41)
 * 5. ÜNİTE: MADDENİN DOĞASINA YOLCULUK (Sayfa 42 - 101)
 */

// --- 4. ÜNİTE SONU İSTASYONLARI ---
export const unit4EndItemsG7B2: InteractiveBookItem[] = [
  {
    id: 'ib-g7-u4-end-p35-dy-bosluk',
    pageNumber: 'Sayfa 35',
    type: 'on_degerlendirme',
    title: '4. Ünite Sonu İstasyonu - A & B: Doğru/Yanlış ve Boşluk Doldurma',
    badge: 'Ünite Sonu A-B',
    prompt: `A. Doğru / Yanlış İfadeleri (s. 35):
1. ( ) Işık ışınları az yoğun saydam ortamdan çok yoğun saydam ortama geçerken normale yaklaşarak kırılır.
2. ( ) Saydam bir ortamdan başka bir saydam ortama dik olarak gönderilen ışık ışını kırılmadan geçer.
3. ( ) Çok yoğun saydam ortamdan az yoğun saydam ortama bakıldığında cisimler bulundukları konumdan daha yakında görünebilir.
4. ( ) Kalın kenarlı mercekte kırılan ışık ışınlarının uzantıları asal eksende kesişir.
5. ( ) Gökkuşağının oluşmasının nedeni ışık ışınlarının su damlasından yansımasıdır.

B. Boşluk Doldurma (1-10) (s. 35):
[Kelimeler: asal eksen, yüzeyin normali, kırılma açısı, büyük, mercek, ışığın kırılması, uzaklaşarak, odak noktası, odak uzaklığı, yaklaşarak, ince kenarlı, kalın kenarlı]`,
    interactiveAnswer: `A. DOĞRU / YANLIŞ ÇÖZÜMLERİ:
1. DOĞRU ➔ Az yoğundan çok yoğuna geçerken ışık normale yaklaşarak kırılır, sürati azalır.
2. DOĞRU ➔ Dik (90°) gelen ışın kırılmaz; sadece hızı değişir.
3. YANLIŞ ➔ Doğrusu: Çok yoğundan (örneğin su içinden) az yoğuna (havaya) bakıldığında cisimler olduğundan DAHA UZAKTA görülür (Balıkçıyı dalgıcın uzakta görmesi).
4. DOĞRU ➔ Kalın kenarlı (ıraksak) mercekte ışınlar dağılır, uzantıları odakta kesişir.
5. YANLIŞ ➔ Doğrusu: Gökkuşağı sadece yansıma değil, ışığın yağmur damlalarında KIRILMASI ve RENKLERİNE AYRILMASI ile oluşur.

B. BOŞLUK DOLDURMA ÇÖZÜMLERİ:
1. IŞIĞIN KIRILMASI (doğrultu ve hız değiştirerek ilerlemesi)
2. YÜZEYİN NORMALİ (dik varsayılan kesikli çizgi)
3. KIRILMA AÇISI (kırılan ışın ile normal arasındaki açı)
4. MERCEK (en az bir yüzeyi küresel saydam cisim)
5. ASAL EKSEN (merceğin merkezinden geçtiği varsayılan doğru)
6. ODAK NOKTASI (asal ekseni kestiği nokta)
7. İNCE KENARLI (ortası kenarlarından kalın olan mercek)
8. ODAK UZAKLIĞI (odak noktasının optik merkeze uzaklığı)
9. KALIN KENARLI (geniş alanı görmek için kapı dürbünü vb.)
10. YAKLAŞARAK (az yoğundan çok yoğuna geçerken normale yaklaşır)`
  },
  {
    id: 'ib-g7-u4-end-p36-37-madeni-para-ve-kirilma',
    pageNumber: 'Sayfa 36-37',
    type: 'etkinlik_istasyonu',
    title: '4. Ünite Sonu İstasyonu - C & Ç: Madenî Para Deneyi ve Açık Uçlu Çözümler',
    badge: 'Madenî Para & Kırılma',
    prompt: `Ç. Madenî Para ve Su Deneyi (s. 36):
Boş kapta görünmeyen madenî para, kaba su doldurulduğunda görünür hâle geliyor.
a. Yargılara "Ulaşılabilir" veya "Ulaşılamaz" yazınız:
   I. Işık ışınları doğrusal yolla yayılır. (...)
   II. Işığın hızı farklı ortamlarda değişkenlik gösterir. (...)
   III. Farklı saydam ortama geçtiğinde ışık ışınlarının doğrultusu değişir. (...)
   IV. Az yoğun ortamdan çok yoğun ortama bakan gözlemci, cisimleri daha yakında görür. (...)
b. Madenî paradan gözlemciye yansıyan ışınların kırılma çizimini yapınız.

C. Açık Uçlu Sorular (1-4):
1. Gelme ve kırılma açısı tanımları.
2. İnce ve kalın kenarlı mercekte odak noktası tanımı.
3. Orman yangınlarına sebep olabilecek atıklar ve mercek türü.
4. Merceklerin günlük hayatta kullanıldığı 4 alan.`,
    interactiveAnswer: `DETAYLI DENEY VE SORU ÇÖZÜMLERİ:
a. Madenî Para Analizi:
   I. Ulaşılabilir (Işık saydam ortamlarda doğrusal yayılır).
   II. Ulaşılabilir (Suyun yoğunluğu farklı olduğundan ışığın hızı değişir).
   III. Ulaşılabilir (Işık sudan havaya geçerken normalden uzaklaşarak kırılır ve gözlemcinin gözüne ulaşır).
   IV. Ulaşılabilir (Gözlemci havadadır ve suyun dibindeki parayı normale yakın kırılarak gözüne gelen ışınlar sebebiyle DAHA YUKARIDA/YAKINDA görür).

b. Işın Çizimi:
   Madenî paradan çıkan ışın su-hava yüzeyine ulaştığında yüzey normalinden UZAKLAŞARAK kırılır ve kabın kenarını aşarak gözlemcinin gözüne ulaşır; uzantısı ise parayı daha yukarıda gösterir.

C. Açık Uçlu Yanıtlar:
   1. Gelme Açısı: Gelen ışın ile yüzey normali arasındaki açıdır. Kırılma Açısı: Kırılan ışın ile yüzey normali arasındaki açıdır.
   2. İnce Kenarlı Mercekte Odak: Asal eksene paralel gelen ışınların kırıldıktan sonra toplandığı gerçek noktadır. Kalın Kenarlı Mercekte Odak: Kırılan ışınların uzantılarının kesiştiği sanal noktadır.
   3. Kırık cam şişe tabanları, su dolu pet şişeler veya şeffaf naylon poşetler İNCE KENARLI MERCEK görevi görerek güneş ışınlarını bir noktada odaklar; kuru otları tutuşturarak orman yangınlarına sebep olur!
   4. Gözlükler, büyüteç, mikroskop, teleskop, fotoğraf makinesi, projeksiyon cihazı.`
  },
  {
    id: 'ib-g7-u4-end-p38-41-ortam-yogunluklari-ve-bulmaca',
    pageNumber: 'Sayfa 38-41',
    type: 'karekod',
    title: '4. Ünite Sonu İstasyonu - 2-11 & D: Ortam Yoğunlukları, Teleskop Yapımı ve Bulmaca',
    badge: 'Bulmaca & Karekod',
    prompt: `Soru 2: K, L, M ortamlarında ışığın izlediği yol (s. 38). Ortamların yoğunluklarını sıralayınız.
Soru 5: Havuzun dibindeki kutuyu almaya çalışan Alper'in kutuya temas edememesinin nedeni nedir? Ne yapmalıdır? (s. 39).
Soru 9: Murat ve Feray'ın teleskop yapımı; Feray büyük boruya ince kenarlı, Murat küçük boruya kalın kenarlı mercek takmıştır. Neden net görüntü alamadılar?
Soru 10: Erkan (M1 - yakını göremeyen hipermetrop) ve Mert (M2 - uzağı göremeyen miyop) gözlük analizi.
D. Işığın Kırılması ve Mercekler Bulmacası (s. 41).`,
    interactiveAnswer: `DETAYLI PROBLEM VE BULMACA ÇÖZÜMLERİ:
• Soru 2 (Yoğunluk Sıralaması s. 38):
  - K'den L'ye geçerken normale yaklaşmıştır ➔ Yoğunluk_L > Yoğunluk_K.
  - L'den M'ye geçerken normale daha da yaklaşmıştır ➔ Yoğunluk_M > Yoğunluk_L.
  🎯 Sıralama: M > L > K (Işığın sürat sıralaması ise tam tersidir: K > L > M).

• Soru 5 (Alper'in Havuz Kutusu s. 39):
  - Nedeni: Işık sudan havaya geçerken normalden uzaklaştığı için Alper kutuyu olduğundan daha sığda (yukarıda) görmektedir. Çubuğu gördüğü yere uzattığında kutunun üstünden geçer.
  - Yapması Gereken: Çengelli çubuğu gördüğü konumun DAHA DİBİNE (daha derinine) uzatmalıdır!

• Soru 9 (Teleskop Yapımı s. 39):
  - Teleskop yapmak için iki adet İNCE KENARLI (yakınsak) mercek gereklidir (Biri objektif, diğeri oküler göz merceği). Murat'ın elindeki mercek kalın kenarlıdır ve ışığı dağıttığı için odaklama yapılamamış, net görüntü elde edilememiştir.

• Soru 10 (Gözlük Mercekleri s. 40):
  - Erkan hipermetroptur (yakını göremez) ➔ M1: İNCE KENARLI MERCEK (Işığı toplar, orman yangını riski taşır).
  - Mert miyoptur (uzağı göremez) ➔ M2: KALIN KENARLI MERCEK (Işığı dağıtır).

• D. BULMACA CEVAPLARI (Sayfa 41):
  Yukarıdan Aşağıya: 1. İNCE KENARLI, 2. GELME AÇISI, 3. KIRILAN IŞIN, 4. IŞIĞIN KIRILMASI, 5. KIRILMA AÇISI.
  Soldan Sağa: 6. ODAK NOKTASI, 7. GELEN IŞIN, 8. KALIN KENARLI MERCEK.`,
    qrInfo: {
      title: 'EBA: 4. Ünite Işığın Kırılması ve Mercekler Genel Değerlendirme Testi (s. 40-41)',
      description: 'Ders kitabının 40 ve 41. sayfalarındaki EBA değerlendirme test karekodları.',
      type: 'evaluation'
    }
  }
];

// --- 5. ÜNİTE SONU İSTASYONLARI ---
export const unit5EndItemsG7B2: InteractiveBookItem[] = [
  {
    id: 'ib-g7-u5-end-p97-dy-bosluk',
    pageNumber: 'Sayfa 97',
    type: 'on_degerlendirme',
    title: '5. Ünite Sonu İstasyonu - A & B: Doğru/Yanlış ve Boşluk Doldurma',
    badge: 'Ünite Sonu A-B',
    prompt: `A. Doğru / Yanlış İfadeleri (s. 97):
1. ( ) Atomun en hızlı hareket eden tanecikleri protonlardır.
2. ( ) Thomson atom modeli, proton ve elektronların konumlarından dolayı Güneş sistemine benzetilmektedir.
3. ( ) Karbon dioksit molekülü iki çeşit atomdan oluşur.
4. ( ) Elementler her zaman molekül yapılıdır.
5. ( ) Elementler periyodik tabloya artan atom numaralarına göre dizilmektedir.

B. Boşluk Doldurma Cümleleri (1-10) (s. 97):
[Kelimeler: Democritus, damıtma, molekül, C, ayırma hunisi, periyodik tablo, K, çözücü, P, buharlaştırma, NaCl, Ca, bileşik, çözünen, çekirdek]`,
    interactiveAnswer: `A. DOĞRU / YANLIŞ ÇÖZÜMLERİ:
1. YANLIŞ ➔ Doğrusu: Atomun en hızlı hareket eden tanecikleri katmanlarda dolanan ELEKTRONLARDIR; protonlar çekirdekte sabittir.
2. YANLIŞ ➔ Doğrusu: Güneş sistemine benzeten RUTHERFORD'dur; Thomson atomu üzümlü keke benzetmiştir.
3. DOĞRU ➔ Karbon dioksit (CO2) Karbon (C) ve Oksijen (O) olmak üzere 2 çeşit atomdan oluşur.
4. YANLIŞ ➔ Doğrusu: Demir, bakır, altın gibi metaller ile soygazlar ATOMİK yapılıdır; bazı ametaller (H2, O2) moleküler yapılıdır.
5. DOĞRU ➔ Günümüz periyodik tablosu artan atom numaralarına (proton sayılarına) göre dizilmiştir.

B. BOŞLUK DOLDURMA ÇÖZÜMLERİ:
1. ÇEKİRDEK (atomun merkezindeki yoğun bölge)
2. DEMOCRITUS (MÖ 400'lü yıllarda ilk görüş)
3. MOLEKÜL (aynı veya farklı cins atom grupları)
4. BİLEŞİK (saf maddeler element ve bileşiktir)
5. PERİYODİK TABLO (elementlerin sınıflandırıldığı cetvel)
6. Ca (Kalsiyum) ve K (Potasyum)
7. NaCl (sofra tuzu)
8. DAMITMA (alkollü su kaynama noktası farkıyla ayrılır)
9. ÇÖZÜCÜ (miktarı fazla olan), ÇÖZÜNEN (miktarı az olan)
10. AYIRMA HUNİSİ (zeytinyağı-su yoğunluk farkı)`
  },
  {
    id: 'ib-g7-u5-end-p98-99-ceydanin-deneyi-grafik-tamirci',
    pageNumber: 'Sayfa 98-99',
    type: 'etkinlik_istasyonu',
    title: '5. Ünite Sonu İstasyonu - C: Ceyda’nın Şeker Deneyi, Atom Grafiği ve Tamir Masası',
    badge: 'Deney & Analiz',
    prompt: `1. Ceyda'nın Çözünme Deneyi (s. 98):
40 g toz şeker ile 40 g pudra şekerini eşit sıcaklık ve miktardaki suya atıp süre ölçüyor.
- I. Hangi faktörü test etmiştir?
- II. Bağımlı, bağımsız ve kontrol edilen değişkenler nelerdir?
2. H2 ve C6H12O6 maddelerinin benzerlik ve farklılıkları.
3. 7N, 10Ne, 15P, 18Ar elektron dağılımları ve grup eşleştirmeleri.
4. Nötr Atom Grafiği (Çekirdekte 8, Katmanda 4 parçacık): Grup, periyot ve kararlı iyon yükü.
5. Tamir Masası Analojisi (Periyodik tablonun bilimsel önemi) (s. 99).`,
    interactiveAnswer: `DETAYLI DENEY VE GRAFİK ÇÖZÜMLERİ:
1. Ceyda'nın Çözünme Hızı Deneyi:
   - I. Test Edilen Faktör: TEMAS YÜZEYİ (Tanecik boyutu).
   - II. Değişkenler:
     * Bağımsız Değişken: Temas yüzeyi (Toz şeker vs. Pudra şekeri).
     * Bağımlı Değişken: Çözünme hızı (Çözünme süresi).
     * Kontrol Edilen Değişkenler: Suyun sıcaklığı, suyun miktarı, şeker kütlesi (40 g), karıştırma durumu.

2. H2 ve C6H12O6 Karşılaştırması:
   - Benzerlik: İkisi de SAF MADDEDİR, ikisi de MOLEKÜL YAPILIDIR ve formülle gösterilir.
   - Farklılık: H2 aynı cins atom içerdiği için ELEMENTTİR; C6H12O6 üç farklı cins atom (C, H, O) içerdiği için BİLEŞİKTİR.

3. Elektron Dağılımı ve Gruplar:
   - 7N: 2) 5) ➔ 2. Periyot, 5A Grubu
   - 10Ne: 2) 8) ➔ 2. Periyot, 8A Grubu (Soygaz)
   - 15P: 2) 8) 5) ➔ 3. Periyot, 5A Grubu
   - 18Ar: 2) 8) 8) ➔ 3. Periyot, 8A Grubu (Soygaz)
   🎯 Aynı Grupta Olanlar: N ve P (5A grubu); Ne ve Ar (8A grubu).

4. Atom Grafiği Çözümü (s. 98):
   - Çekirdek parçacığı = 8 (Proton=4, Nötron=4). Katmandaki elektron sayısı = 4.
   - Elektron Dağılımı (4 e-): 2) 2)
   - Konum: 2. Periyot, 2A Grubu (Berilyum).
   - Kararlı Hâle Geçiş: Son katmandaki 2 elektronu verir (Dublet kuralı). İyon yükü: +2 olur!

5. Tamir Masası Analojisi:
   Nasıl ki tamir aletlerinin boyut ve işlevine göre düzenli asılması aranan aletin anında bulunmasını sağlıyorsa; periyodik tablo da 118 elementin kimyasal özelliklerini tek bakışta öngörmemizi sağlar.`
  },
  {
    id: 'ib-g7-u5-end-p100-101-kart-oyunu-ayirma-bulmaca',
    pageNumber: 'Sayfa 100-101',
    type: 'karekod',
    title: '5. Ünite Sonu İstasyonu - 6-8 & Ç: Renkli Kart Oyunu, Ayırma Yöntemleri ve Bulmaca',
    badge: 'Bulmaca & Karekod',
    prompt: `Soru 6: Mavi (Element), Kırmızı (Bileşik), Sarı (Karışım) kartları (Deniz, Yüksel, Senem).
Soru 8: K-M karışımı buharlaştırma ile ayrılıyor; L-M karışımı ayırma hunisi ile ayrılıyor (ilk sıvı M ayrılıyor). Maddeleri tespit ediniz.
Ç. Maddenin Doğası Bulmacası (s. 101).`,
    interactiveAnswer: `DETAYLI PROBLEM VE BULMACA ÇÖZÜMLERİ:
• Soru 6 (Kart Oyunu s. 100):
  - Deniz: Mavi, Mavi, Sarı (2 Element, 1 Karışım)
  - Yüksel: Sarı, Sarı, Mavi
  - Senem: Mavi, Mavi, Kırmızı
  - Yüksel'in Kartları: Tuzlu su (karışım), hava (karışım), demir (element).

• Soru 8 (Karışımların Ayrılması s. 100):
  - K-M buharlaştırmayla ayrılıp dipte katı K kalıyorsa: K katı (tuz/şeker), M sıvıdır (su).
  - L-M ayırma hunisi ile ayrılıp ilk sıvı M alınıyorsa: L ve M birbiriyle karışmayan sıvılardır. M altta olduğuna göre yoğunluğu büyüktür (M=Su, L=Zeytinyağı).
  - Yanlış İfade: B Şıkkı (M sodyum klorür katısı değil, sıvıdır!).

• Ç. BULMACA CEVAPLARI (Sayfa 101):
  Yukarıdan Aşağıya: 1. AYIRMA HUNİSİ, 2. HOMOJEN, 5. DALTON, 7. MOLEKÜL.
  Soldan Sağa: 3. PERİYODİK TABLO, 4. PROTON, 6. ATOM, 8. ELEKTRON, 9. HETEROJEN, 10. BİLEŞİK.`,
    qrInfo: {
      title: 'EBA: 5. Ünite Maddenin Doğasına Yolculuk Ölçme Değerlendirme Testi (s. 100-101)',
      description: 'Ders kitabının 100 ve 101. sayfalarındaki EBA değerlendirme test karekodları.',
      type: 'evaluation'
    }
  }
];

export const grade7Book2FlowsUnits4and5: Record<string, InteractiveBookItem[]> = {
  // ==========================================
  // 4. ÜNİTE: IŞIĞIN KIRILMASI VE MERCEKLER
  // ==========================================
  'g7-u4-sub1': [
    {
      id: 'ib-g7-4-1-p12-15-kapak-on-degerlendirme',
      pageNumber: 'Sayfa 12-15',
      type: 'karekod',
      title: '4. Ünite Girişi: Işığın Kırılması ve Mercekler & Ön Değerlendirme',
      badge: 'Ünite Girişi & Karekod',
      qrInfo: {
        title: 'EBA: 4. Ünite Işığın Kırılması Tanıtım ve Özet E-İçerik Karekodu (s. 13)',
        description: 'Ders kitabının 13. sayfasındaki MEB EBA "Ünite Alanı" ve "Özet E-İçerik" etkileşimli video karekodları.',
        type: 'video'
      },
      content: `KAZANIM VE İÇERİK ÇERÇEVESİ (Sayfa 12-15):
• Işığın Kırılması ve Kırılma Kanunları: Işığın saydam ortamlarda hız ve doğrultu değiştirmesi, gelme ve kırılma açıları, az yoğundan çok yoğuna geçiş (normale yaklaşma), çok yoğundan az yoğuna geçiş (normalden uzaklaşma).
• Mercekler: İnce kenarlı (yakınsak) ve kalın kenarlı (ıraksak) mercekler, odak noktası, ışığı toplama/dağıtma özellikleri, orman yangınları riski ve optik aletler.`,
      prompt: `Ön Değerlendirme Soruları (s. 14):
1. Işık nasıl yayılır? Bir ışık kaynağı çizerek ışık ışınlarının izlediği yolu gösteriniz.
2. Çevrenizdeki maddeleri ışığı geçirme durumlarına göre sınıflandırınız (Saydam, yarı saydam, opak).
3. Güneş enerjisinin kullanım alanlarına günlük yaşamdan 3 örnek veriniz.
4. Yansıma açısı çizimleri: Normal ile yapılan açıları tamamlayınız.`,
      interactiveAnswer: `ÖN DEĞERLENDİRME ÇÖZÜMLERİ:
1. Işığın Yayılması:
   Işık bir kaynaktan çıkarak homojen saydam ortamlarda ve boşlukta HER YÖNDE ve DOĞRUSAL (düz çizgiler hâlinde) yayılır. Çiziminde yönlü doğru parçaları (oklar) kullanılır.

2. Maddelerin Işık Geçirgenliği:
   • Saydam Maddeler: Işığı tamamen geçiren, arkasını net gösteren maddeler (Hava, su, cam).
   • Yarı Saydam Maddeler: Işığı kısmen geçiren, arkasını puslu gösteren maddeler (Buzlu cam, yağlı kâğıt, sis).
   • Opak (Saydam Olmayan) Maddeler: Işığı hiç geçirmeyen maddeler (Tahta, demir levha, beton duvar, taş).

3. Güneş Enerjisi Kullanım Alanları:
   - Güneş panelleriyle elektrik üretimi (çatılarda, uzay araçlarında).
   - Güneş kolektörleriyle sıcak su elde edilmesi.
   - Güneş ocaklarıyla yemek pişirilmesi ve seracılıkta ısıtma.

4. Yansıma Çizimleri:
   - I: Gelme açısı = 90° - 35° = 55°, Yansıma açısı da 55° olarak çizilir.
   - II: Yüzeye dik (90°) gelen ışın kendi üzerinden geri yansır.
   - III: Normalle 50° yapan ışın 50° ile yansır.
   - IV: Normalle 60° açı yapan ışın 60° açı ile yansıtılır.`
    },
    {
      id: 'ib-g7-4-1-p15-18-balikligol-kirilma-tanimi',
      pageNumber: 'Sayfa 15-18',
      type: 'hazirlik_istasyonu',
      title: '1. Bölüm Ana Başlık: IŞIĞIN KIRILMASI (Merve’nin Balıklıgöl Ziyareti & Etkinlik 1-2)',
      badge: 'Işığın Kırılması',
      content: `IŞIĞIN KIRILMASI VE BALIKLIGÖL (Sayfa 15-18):
• Merve'nin Gözlemi: Şanlıurfa Balıklıgöl'de yüzen balıkların yüzeye çok yakın görünmesi ve çay bardağındaki kaşığın kırılmış gibi algılanması.
• IŞIĞIN KIRILMASI TANIMI:
  Işık ışınlarının saydam bir ortamdan yoğunluğu farklı başka bir saydam ortama geçerken DOĞRULTU ve HIZ DEĞİŞTİREREK ilerlemesine ışığın kırılması denir.
• Temel Elemanlar:
  - Yüzey Normali (N): Yüzeye dik (90°) çizilen varsayımsal kesikli çizgi.
  - Gelme Açısı: Gelen ışın ile normal arasındaki açı.
  - Kırılma Açısı: Kırılan ışın ile normal arasındaki açı.`,
      prompt: `Etkinlik Noktası-1 & 2 Soruları (s. 16-17):
1. Su dolu bardağa bırakılan kalem neden kırılmış gibi görünür?
2. Lazer ışığı havadan suya (az yoğundan çok yoğuna) ve sudan havaya (çok yoğundan az yoğuna) geçerken nasıl bir yol izler?`,
      interactiveAnswer: `KIRILMA DENEYLERİ ÇÖZÜMLERİ:
1. Kırık Kalem Olayı:
   Kalemden yansıyan ışık ışınları sudan (çok yoğun) havaya (az yoğun) geçerken kırılır ve doğrultu değiştirir. Gözümüz ışınların kırılmadan geldiğini varsaydığı için kalemin su altındaki kısmını gerçek yerinden farklı bir konumda algılar.

2. Lazer Işığı Gözlemi (Sayfa 17-18):
   • Havadan Suya Geçiş (Az Yoğundan Çok Yoğuna): Lazer ışını normale YAKLAŞARAK kırılır. Işığın hızı azalır. (Gelme Açısı > Kırılma Açısı).
   • Sudan Havaya Geçiş (Çok Yoğundan Az Yoğuna): Lazer ışını normalden UZAKLAŞARAK kırılır. Işığın hızı artar. (Kırılma Açısı > Gelme Açısı).`
    },
    {
      id: 'ib-g7-4-1-p19-20-kirilma-kanunlari-kontrol',
      pageNumber: 'Sayfa 19-20',
      type: 'pekistirme_istasyonu',
      title: 'Kırılma Kanunları & Kontrol Noktası: Sudaki Balık Deneyi',
      badge: 'Kırılma Kanunları',
      qrInfo: {
        title: 'EBA: "Işığın Kırılması" Etkileşimli İçeriği (s. 19)',
        description: 'Ders kitabının 19. sayfasındaki ışığın kırılması simülasyonu karekodu.',
        type: 'interactive'
      },
      content: `4 TEMEL KIRILMA KANUNU (Sayfa 19):
1. Gelen ışın, yüzeyin normali ve kırılan ışın aynı düzlemdedir.
2. Az yoğun ortamdan çok yoğun ortama geçen ışın NORMALE YAKLAŞARAK kırılır. Kırılma açısı gelme açısından küçüktür. Sürati azalır.
3. Çok yoğun ortamdan az yoğun ortama geçen ışın NORMALDEN UZAKLAŞARAK kırılır. Kırılma açısı gelme açısından büyüktür. Sürati artar.
4. Sınır yüzeyine DİK (90°) gelen ışın kırılmadan, doğrultu değiştirmeden geçer; ancak ortam yoğunluğuna göre hızı değişir.`,
      prompt: `Kontrol Noktası Sorusu (s. 19):
Sudaki balığı gözlemleyen öğrenci K noktasındaki balığı L noktasında görüyor.
I. Işık çok yoğun ortamdan az yoğuna geçerken kırılmıştır.
II. Sudan havaya geçen ışınlar normale yaklaşarak kırılır.
III. Öğrenci balığı bulunduğu konumdan daha uzakta görmektedir.
IV. Görselde gelme açısı kırılma açısından küçüktür.
Doğru ifadeler hangileridir?`,
      interactiveAnswer: `KONTROL NOKTASI ÇÖZÜMÜ:
• I. İfade DOĞRUDUR: Işık balıktan (sudan) çıkıp göze (havaya) gelmektedir (Çok yoğundan az yoğuna).
• II. İfade YANLIŞTIR: Sudan havaya geçen ışınlar normalden UZAKLAŞARAK kırılır.
• III. İfade YANLIŞTIR: Öğrenci balığı (K) daha uzakta değil, yüzeye DAHA YAKINDA (L noktasında) görmektedir.
• IV. İfade DOĞRUDUR: Sudan havaya geçerken kırılma açısı gelme açısından büyüktür (Gelme Açısı < Kırılma Açısı).
🎯 Doğru Olanlar: I ve IV numaralı ifadelerdir.`
    },
    {
      id: 'ib-g7-4-1-p20-22-isik-prizmasi-mirim-celebi',
      pageNumber: 'Sayfa 20-23',
      type: 'bilgi_kutusu',
      title: 'Işık Prizması, Gökkuşağı Oluşumu & Mîrim Çelebi',
      badge: 'Prizma & Mîrim Çelebi',
      content: `BEYAZ IŞIK VE RENKLER (Sayfa 20-22):
• Prizmada Kırılma: Beyaz ışık (güneş ışığı) aslında tüm renklerin birleşimidir. Üçgen cam prizmaya gönderilen beyaz ışık kırılma indisi farkı nedeniyle sırasıyla kırmızı, turuncu, sarı, yeşil, mavi, lacivert ve mor renklere ayrılır (KUTUSAYAMAM). En az kırılan kırmızı, en çok kırılan mordur.
• Gökkuşağı: Yağmur sonrası havadaki su damlacıklarının doğal bir prizma gibi davranarak güneş ışığını kırması ve tam yansıtmasıyla oluşur.
• TARİHE NOT DÜŞENLER - MÎRİM ÇELEBİ (?-1525): Ali Kuşçu ve Kadızâde-i Rûmî'nin torunudur. 16. yüzyıl Osmanlı matematik ve astronomi bilginidir. Optik üzerine kaleme aldığı eserinde ışığın kırılması, görme fizyolojisi, gökkuşağı ve halenin oluşum mekanizmasını incelemiştir.`
    }
  ],
  'g7-u4-sub2': [
    {
      id: 'ib-g7-4-2-p23-26-mercekler-giris-azra',
      pageNumber: 'Sayfa 23-26',
      type: 'hazirlik_istasyonu',
      title: '2. Bölüm Ana Başlık: MERCEKLER (Azra’nın Fotoğraf Makinesi & Etkinlik 3-4)',
      badge: 'Mercekler Giriş',
      content: `MERCEK NEDİR? (Sayfa 23-27):
• Azra'nın Lavanta Bahçesi Fotoğrafları: Uzaktaki lavantaların fotoğraf makinesinin objektifindeki mercekler sayesinde yakın ve kristal netliğinde görüntülenmesi.
• MERCEK TANIMI: En az bir yüzeyi küresel olan, cam veya sert şeffaf plastikten yapılan saydam cisimlerdir.
• Merceğin Ekseni: Yatay merkez çizgisine "ASAL EKSEN", ortasındaki simetri noktasına "OPTİK MERKEZ (O)" denir. Optik merkeze gelen ışınlar kırılmadan geçer.`,
      prompt: `Etkinlik Noktası-3 & 4 Sorusu (s. 24-25):
Su damlası kâğıttaki yazıları neden büyütür? İnce ve kalın kenarlı merceklerin kenar ve orta kalınlıklarını karşılaştırınız.`,
      interactiveAnswer: `MERCEK ETKİSİ VE SINIFLANDIRMA ÇÖZÜMÜ:
1. Su Damlası Etkisi:
   Kâğıt üzerine damlayan su damlası küresel yüzeyi sayesinde İNCE KENARLI MERCEK gibi davranır. Işığı toplayarak yazının harflerini büyütür.

2. İki Temel Mercek Türü (Sayfa 27-28):
   • İnce Kenarlı (Yakınsak) Mercek: Ortası kalın, kenarları incedir. Çift taraflı ok (<--->) ile sembolize edilir. Işığı TOPLAR.
   • Kalın Kenarlı (Iraksak) Mercek: Ortası ince, kenarları kalındır. Uçları içe dönük ok (>---<) ile gösterilir. Işığı DAĞITIR.`
    },
    {
      id: 'ib-g7-4-2-p27-30-odak-noktasi-ve-yangin-uyarisi',
      pageNumber: 'Sayfa 27-30',
      type: 'etkinlik_istasyonu',
      title: 'Odak Noktası, Işığın Kırılması & Orman Yangınları Güvenlik Uyarısı',
      badge: 'Odak Noktası',
      qrInfo: {
        title: 'EBA: "Mercekler" Etkileşimli İçeriği (s. 28)',
        description: 'Ders kitabının 28. sayfasındaki mercekler 3D optik simülasyon karekodu.',
        type: 'interactive'
      },
      content: `ODAK VE GÖRÜNTÜ ÖZELLİKLERİ (Sayfa 27-29):
• İnce Kenarlı Mercek (Yakınsak):
  - Asal eksene paralel gelen ışınlar kırılarak tek bir noktada toplanır. Bu noktaya ODAK NOKTASI (F) denir.
  - Odak noktası ile optik merkez arasındaki mesafeye ODAK UZAKLIĞI (f) denir.
  - Cisim odak ile mercek arasına konursa BÜYÜK ve DÜZ görüntü verir (Büyüteç, mikroskop).
• Kalın Kenarlı Mercek (Iraksak):
  - Asal eksene paralel gelen ışınlar dağılarak kırılır. Kırılan ışınların geriye doğru UZANTILARI odak noktasında (F) kesişir.
  - Cisimleri KÜÇÜK ve DÜZ gösterir. Geniş bir alanı tek bakışta görmek için kapı dürbünlerinde kullanılır.
• HAYATİ UYARI - ORMAN YANGINLARI (s. 28):
  Piknik alanlarına atılan kırık cam şişeler, su dolu pet şişeler ince kenarlı mercek görevi görerek güneş ışınlarını tek bir noktada odaklar. Odaklanan bu yüksek ısı kuru otları tutuşturarak orman yangınlarına neden olur!`
    },
    {
      id: 'ib-g7-4-2-p30-33-kullanim-alanlari-ve-opmer',
      pageNumber: 'Sayfa 30-33',
      type: 'performans_istasyonu',
      title: 'Merceklerin Kullanım Alanları, OPMER Laboratuvarı & Neler Öğrendik?',
      badge: 'Optik Aletler & OPMER',
      qrInfo: {
        title: 'EBA: "Mercek Çeşitleri" Etkileşimli İçeriği ve Formu (s. 31)',
        description: 'Ders kitabının 31. sayfasındaki mercekler performans görevi karekodu.',
        type: 'interactive'
      },
      content: `OPTİK CİHAZLAR VE MİLLÎ ATILIM (Sayfa 31-33):
• Kullanım Alanları:
  - Büyüteç, Mikroskop, Teleskop, Fotoğraf Makinesi, Dürbün, Projeksiyon Cihazı, Kameralı Cep Telefonu, Gözlükler.
• Göz Kusurları ve Mercekler:
  - Hipermetrop (Yakını net görememe) ➔ İNCE KENARLI MERCEK ile düzeltilir.
  - Miyop (Uzağı net görememe) ➔ KALIN KENARLI MERCEK ile düzeltilir.
• BİLGİ BANKASI - TÜBİTAK UZAY OPMER:
  Optik Sistemler Araştırma Laboratuvarı (OPMER); başta uzay uydularımız (İMECE, Göktürk) olmak üzere millî savunma sanayisinde ihtiyaç duyulan devasa ve hassas mercek ve aynaların yurt dışından ithal edilmesini önlemek, millî imkânlarla üretmek amacıyla kurulmuştur.`,
      prompt: `Neler Öğrendik Soruları (s. 33):
A. 8 Çıkışlı Labirent: "Optik merkez üzerine gelen ışınlar merceklerden kırılmadan geçer." (D/Y?) labirentini çözünüz.
B. 6 Optik Alet Eşleştirmesi (Okuma gözlüğü, Mikroskop, Fotoğraf makinesi, Büyüteç, El feneri, Projeksiyon cihazı).`,
      interactiveAnswer: `NELER ÖĞRENDİK (SAYFA 33) ÇÖZÜMLERİ:
A. 8 Çıkışlı Labirent Analizi:
   1. Adım: "Optik merkez üzerine gelen ışınlar kırılmadan geçer." ➔ DOĞRU.
   2. Adım (Sol Kol): "Kalın kenarlı merceklerin ortası kenarlarına göre incedir." ➔ DOĞRU.
   3. Adım: "İnce kenarlı merceklerin ışık ışınlarını dağıtıcı özelliği vardır." ➔ YANLIŞ (İnce kenarlı mercekler toplayıcıdır).
   🎯 HEDEF ÇIKIŞ: 2. ÇIKIŞA ULAŞILIR!

B. Optik Aletler Eşleştirmesi:
   a. İnce kenarlı mercek bulunduranlar: 1 (Okuma gözlüğü - hipermetrop), 2 (Mikroskop), 3 (Fotoğraf makinesi), 4 (Büyüteç), 6 (Projeksiyon).
   b. Kalın kenarlı mercek bulunduranlar: Miyop gözlüğü, kapı dürbünü.
   c. Kaydedilecek görüntünün mesafesini değiştirenler: 3 (Fotoğraf makinesi zoom objektifi).
   ç. Görüntüyü büyütenler: 1, 2, 4, 6.`
    },
    ...unit4EndItemsG7B2
  ],
  'g7-u4-end': unit4EndItemsG7B2,

  // ==========================================
  // 5. ÜNİTE: MADDENİN DOĞASINA YOLCULUK
  // ==========================================
  'g7-u5-sub1': [
    {
      id: 'ib-g7-5-1-p42-45-kapak-on-degerlendirme',
      pageNumber: 'Sayfa 42-45',
      type: 'karekod',
      title: '5. Ünite Girişi: Maddenin Doğasına Yolculuk & Ön Değerlendirme',
      badge: 'Ünite Girişi & Karekod',
      qrInfo: {
        title: 'EBA: 5. Ünite Maddenin Doğası Tanıtım ve Özet E-İçerik Karekodu (s. 43)',
        description: 'Ders kitabının 43. sayfasındaki MEB EBA "Ünite Alanı" ve "Özet E-İçerik" etkileşimli video karekodları.',
        type: 'video'
      },
      content: `KAZANIM VE İÇERİK ÇERÇEVESİ (Sayfa 42-45):
• 1. Maddenin Tanecikli Yapısı: Atom, proton, nötron, elektron, çekirdek, katman, tarihsel atom modelleri (Democritus, Dalton, Thomson, Rutherford, Bohr, Modern Atom Teorisi).
• 2. Saf Maddeler: Elementler (ilk 18 element + yaygın elementler), Periyodik Tablo (grup ve periyotlar), Bileşikler ve formülleri.
• 3. Karışımlar: Homojen (çözelti) ve heterojen karışımlar, çözünme hızına etki eden faktörler (sıcaklık, temas yüzeyi, karıştırma).
• 4. Karışımların Ayrılması: Buharlaştırma, yoğunluk farkı (ayırma hunisi), damıtma (ayrımsal damıtma).`,
      prompt: `Ön Değerlendirme Soruları (s. 44):
1. Suya atılan bir kaşık şekerin gözden kaybolması ancak suyun tadının şekerli olması "maddenin tanecikli yapısı" ile nasıl açıklanır?
2. Bütün karışımlar süzme yöntemiyle ayrılabilir mi? Örnek veriniz.
3. Saf madde ile karışım arasındaki temel farkı örnekle açıklayınız.`,
      interactiveAnswer: `ÖN DEĞERLENDİRME ÇÖZÜMLERİ:
1. Şekerin Çözünmesi:
   Şeker suya atıldığında şeker molekülleri birbirinden ayrılarak su molekülleri arasındaki gözle görülemeyen mikroskobik boşluklara homojen olarak dağılır. Madde yok olmamış, taneciklerine ayrışmıştır; bu nedenle suyun tadı tatlı kalır.

2. Süzme Yönteminin Sınırları:
   HAYIR, bütün karışımlar süzmeyle ayrılamaz. Süzme sadece katı-sıvı heterojen karışımlarda (talaş-su, çamurlu su) tanecik boyutu süzgeç gözeneklerinden büyük olduğunda işe yarar. Tuzlu su veya şekerli su gibi homojen karışımlarda çözünen tanecikler süzgeç deliklerinden serbestçe geçer.

3. Saf Madde vs Karışım:
   • Saf Madde: Tek cins tanecik (atom ya da molekül) içerir, belirli erime-kaynama noktası vardır (Örn: Saf su, demir).
   • Karışım: Birden fazla farklı maddenin kendi kimyasal özelliklerini kaybetmeden rastgele oranlarda birleşmesidir, formülü ve sabit kaynama noktası yoktur (Örn: Tuzlu su, limonata, hava).`
    },
    {
      id: 'ib-g7-5-1-p45-48-eymen-atomun-temel-parcaciklari',
      pageNumber: 'Sayfa 45-48',
      type: 'hazirlik_istasyonu',
      title: '1. Bölüm: MADDENİN TANECİKLİ YAPISI (Eymen ile Eylül & Atomun Temel Parçacıkları)',
      badge: 'Atomun Yapısı',
      content: `ATOM VE TEMEL PARÇACIKLARI (Sayfa 45-48):
• Eymen ve Eylül: Tuğlanın toprak tanelerinden, canlıların hücrelerden oluşması gibi tüm evrendeki maddeler ATOM adı verilen temel taneciklerden oluşur.
• ÇEKİRDEK:
  - PROTON (p+): Pozitif (+) yüklüdür. Atomun çekirdeğinde bulunur. Atomun KİMLİĞİNİ (atom numarasını) belirler.
  - NÖTRON (n0): Yüksüz (nötr) parçacıktır. Çekirdekte bulunur. Protonla beraber atomun kütlesini oluşturur.
• KATMANLAR (YÖRÜNGELER):
  - ELEKTRON (e-): Negatif (-) yüklüdür. Çekirdeğin çevresinde inanılmaz bir hızla dolanır. Atomun HACMİNİ ve yarıçapını belirler.
• Kütle Kıyası: 1 proton kütlesi ≈ 1 nötron kütlesi ≈ 2000 elektron kütlesi. Elektronun kütlesi ihmal edilecek kadar küçüktür (1/2000). Bu yüzden atomun kütlesi = Proton + Nötron sayısıdır!`,
      prompt: `Kontrol Noktası Sorusu (s. 47):
Atom şemasında ok ile gösterilen parçacıkların isimlerini (proton, nötron, elektron) ve yüklerini yazınız.`,
      interactiveAnswer: `KONTROL NOKTASI ATOM ŞEMASI:
1. Çekirdek etrafında dolanan negatif yüklü tanecik = ELEKTRON (e-)
2. Çekirdekte bulunan pozitif yüklü tanecik = PROTON (p+)
3. Çekirdekte bulunan yüksüz tanecik = NÖTRON (n0)`
    },
    {
      id: 'ib-g7-5-1-p49-51-katmanlar-ve-atom-modelleri-tarihi',
      pageNumber: 'Sayfa 49-51',
      type: 'bilgi_kutusu',
      title: 'Katman Elektron Dağılımı Kuralları & Tarihsel Atom Modelleri',
      badge: 'Atom Modelleri',
      qrInfo: {
        title: 'EBA: "Atom Modelleri" Belgeseli ve "Atomun Yapısı" Videosu (s. 49-50)',
        description: 'Ders kitabının 49 ve 50. sayfalarındaki atom modelleri tarihi belgesel karekodları.',
        type: 'video'
      },
      content: `ATOM MODELLERİNİN TARİHSEL GELİŞİMİ (Sayfa 50-51):
1. Democritus (MÖ 400): Atom kavramını ilk ortaya atan filozoftur. Maddenin bölünemeyen en küçük parçasına "atomos" adını vermiştir.
2. Dalton (1805): Atomu içi dolu, berk, bölünemez kürelere benzetmiştir.
3. Thomson (1897): Elektronu keşfetmiştir. Atomu "Üzümlü Keke" benzetmiştir (Kek hamuru pozitif yük, gömülü üzümler negatif elektronlardır).
4. Rutherford (1912): Çekirdeği keşfetmiştir. Atomun büyük kısmının boşluk olduğunu savunmuş, modeli Güneş sistemine benzetilmiştir.
5. Bohr (1913): Elektronların çekirdek çevresinde belirli enerjilere sahip katmanlarda dolandığını açıklamıştır.
6. Modern Atom Teorisi (1930): Elektronların yeri tam olarak bilinemez; sadece bulunma olasılığının yüksek olduğu "ELEKTRON BULUTU" vardır.`
    },
    {
      id: 'ib-g7-5-1-p52-57-etkinlik-molekul-neler-ogrendik',
      pageNumber: 'Sayfa 52-58',
      type: 'performans_istasyonu',
      title: 'Performans İstasyonu: Molekül Modelleri Yapalım & Sayfa 57 Neler Öğrendik?',
      badge: 'Molekül Modelleri',
      qrInfo: {
        title: 'EBA: Molekül Modelleri ve Atom Değerlendirme Formu (s. 56)',
        description: 'Ders kitabının 56. sayfasındaki molekül modeli performans görevi formu karekodu.',
        type: 'interactive'
      },
      content: `MOLEKÜL VE BİLİMSEL BİLGİ (Sayfa 54-56):
• MOLEKÜL: Aynı veya farklı cins atomların kovalent bağlarla bir araya gelerek oluşturduğu bağımsız atom gruplarıdır.
  - Aynı Cins Atomlardan Oluşan Molekül (Element Molekülü): H2, O2, N2, Cl2, O3 (Ozon).
  - Farklı Cins Atomlardan Oluşan Molekül (Bileşik Molekülü): H2O (Su), CO2 (Karbon dioksit), NH3 (Amonyak).
• Bilimsel Bilginin Doğası: Bilimsel bilgi kesin ve değişmez değildir; teknolojik gelişmeler ve yeni deneylerle zamanla gelişebilir, değişebilir ve yenilenebilir (Örn: Dalton'un bölünemez atom fikrinin parçalanması).`,
      prompt: `Neler Öğrendik Değerlendirme Soruları (s. 57):
A. Tablodan numara eşleştirme (proton, nötron, elektron, çekirdek, katman).
B. İfadeleri ilgili kavramla eşleştiriniz.
C. Bilimsel bilginin 3 temel özelliğini yazınız.
Ç. 8 Çıkışlı Labirent: "Elektronlar çekirdek etrafında hareket eder." (D/Y?) labirentini çözünüz.`,
      interactiveAnswer: `NELER ÖĞRENDİK (SAYFA 57) ÇÖZÜMLERİ:
A. Numara Eşleştirme:
   a. (+) yüklü parçacık ➔ 6. PROTON
   b. Atomun kütlesini oluşturanlar ➔ 1. NÖTRON ve 6. PROTON
   c. Elektronların hareket ettiği bölgeler ➔ 2. KATMAN
   ç. Elektronların belirlediği son sınır ➔ 8. ATOM YARIÇAPI
   d. Proton ve nötronun bulunduğu yer ➔ 5. ÇEKİRDEK

B. Kavram Eşleştirme:
   1. Maddenin en küçük yapı taşı ➔ Atom
   2. Atomların bir araya gelmesiyle oluşan gruplar ➔ Molekül
   3. Geçici çözüm önerisi ➔ Hipotez
   4. Çekirdekteki yüksüz parçacık ➔ Nötron
   5. Elektronların bulunma olasılığı yüksek bölge ➔ Elektron Bulutu

C. Bilimsel Bilginin 3 Özelliği:
   1. Değişebilir ve gelişebilirdir (Mutlak doğma değildir).
   2. Deney, gözlem ve kanıtlara dayanır.
   3. Mantıksal ve evrenseldir.

Ç. 8 Çıkışlı Labirent Analizi:
   1. Adım: "Elektronlar çekirdek etrafında hareket eder." ➔ DOĞRU.
   2. Adım (Sol Kol): "Nötron sayısı atomun kimliğini belirler." ➔ YANLIŞ (Kimliği belirleyen PROTON sayısıdır).
   3. Adım: "Elektronlar (+) yüklü parçacıklardır." ➔ YANLIŞ (Elektronlar negatif yüklüdür).
   🎯 HEDEF ÇIKIŞ: 4. ÇIKIŞA ULAŞILIR!`
    }
  ],
  'g7-u5-sub2': [
    {
      id: 'ib-g7-5-2-p58-62-saf-maddeler-element-ve-bilesik',
      pageNumber: 'Sayfa 58-62',
      type: 'hazirlik_istasyonu',
      title: '2. Bölüm: SAF MADDELER (Elementler ve Bileşikler)',
      badge: 'Saf Maddeler',
      content: `SAF MADDE TANIMI VE AYRIMI (Sayfa 58-62):
• Saf Madde: Yapısında tek çeşit atom ya da tek çeşit molekül bulunduran maddelerdir. Homojendirler, kendilerine özgü ayırt edici özellikleri (erime, kaynama noktası, yoğunluk) sabittir.
1. ELEMENT:
   - Aynı cins atomlardan oluşan saf maddelerdir.
   - Fiziksel ya da kimyasal yollarla daha basit maddelere ayrılamazlar.
   - SEMBOLLERLE gösterilirler (Demir: Fe, Oksijen: O).
2. BİLEŞİK:
   - Farklı cins atomların belirli oranlarda kimyasal bağlarla birleşmesiyle oluşan saf maddelerdir.
   - Kendini oluşturan elementlerin özelliklerini TAŞIMAZLAR (Örn: Yanıcı H2 ve yakıcı O2 birleşip söndürücü H2O suyunu oluşturur).
   - FORMÜLLERLE gösterilirler (Su: H2O, Sofra Tuzu: NaCl, Karbon dioksit: CO2).
   - Yalnızca KİMYASAL YOLLARLA (elektroliz vb.) bileşenlerine ayrıştırılabilirler.`,
      prompt: `Sayfa 61-62 Kontrol Noktası Sorusu:
Element ile bileşik arasındaki temel farklar nelerdir?`,
      interactiveAnswer: `ELEMENT VE BİLEŞİK KARŞILAŞTIRMASI:
• Element: Tek cins atom içerir, sembolle gösterilir, kimyasal yolla dahi parçalanamaz.
• Bileşik: En az iki farklı cins atomun sabit oranda kimyasal birleşmesidir, formülle gösterilir, kimyasal yollarla elementlerine ayrılabilir.`
    },
    {
      id: 'ib-g7-5-2-p63-66-elementlerin-sembolleri-ve-kartlar',
      pageNumber: 'Sayfa 63-66',
      type: 'etkinlik_istasyonu',
      title: 'İlk 18 Element, Yaygın Metaller ve "Element Kartları" Performans Görevi',
      badge: 'Element Sembolleri',
      qrInfo: {
        title: 'EBA: "Elementlerin Sembolleri" Etkileşimli İçeriği (s. 65)',
        description: 'Ders kitabının 65. sayfasındaki elementler ve sembolleri eşleştirme karekodu.',
        type: 'interactive'
      },
      content: `İLK 18 ELEMENTİN İSİM VE SEMBOLLERİ (Sayfa 63-65):
1. Hidrojen (H) | 2. Helyum (He) | 3. Lityum (Li) | 4. Berilyum (Be) | 5. Bor (B) | 6. Karbon (C) | 7. Azot (N) | 8. Oksijen (O) | 9. Flor (F) | 10. Neon (Ne) | 11. Sodyum (Na) | 12. Magnezyum (Mg) | 13. Alüminyum (Al) | 14. Silisyum (Si) | 15. Fosfor (P) | 16. Kükürt (S) | 17. Klor (Cl) | 18. Argon (Ar).
• Günlük Yaşamda Çok Kullanılan Diğer Elementler:
  Demir (Fe), Bakır (Cu), Çinko (Zn), Gümüş (Ag), İyot (I), Platin (Pt), Altın (Au), Cıva (Hg), Kurşun (Pb).
• Sembol Kuralı: Berzelius tarafından önerilmiştir. Latince adın ilk harfi büyük yazılır; aynı harfle başlayan varsa ikinci harf küçük eklenir. Uluslararası ortak bilimsel dil sağlar.`,
      prompt: `Kontrol Noktası Boşluk Doldurma (s. 65):
He, P, O, Ne, C element sembollerinin isimlerini ve Berilyum, Silisyum, Klor, Kalsiyum, Kükürt, Sodyum isimlerinin sembollerini yazınız.`,
      interactiveAnswer: `KONTROL NOKTASI SEMBOL TABLOSU:
• He = Helyum | P = Fosfor | O = Oksijen | Ne = Neon | C = Karbon
• Berilyum = Be | Silisyum = Si | Klor = Cl | Kalsiyum = Ca | Kükürt = S | Sodyum = Na`
    },
    {
      id: 'ib-g7-5-2-p67-75-periyodik-tablo-ve-elektron-dizilimi',
      pageNumber: 'Sayfa 67-75',
      type: 'pekistirme_istasyonu',
      title: 'Periyodik Tablo (Grup & Periyot), Katman Dizilimi ve İyon Oluşumu',
      badge: 'Periyodik Tablo',
      qrInfo: {
        title: 'EBA: "Periyodik Tabloda Yer Bulma" ve "Elektron Dizilimi" Simülasyonu (s. 69-73)',
        description: 'Ders kitabının 69 ve 73. sayfalarındaki periyodik cetvel etkileşimli içerik karekodları.',
        type: 'interactive'
      },
      content: `PERİYODİK TABLO KURALLARI (Sayfa 67-75):
• 7 Periyot (Yatay Satır) ve 18 Grup (Dikey Sütun - 8 tane A, 10 tane B grubu) bulunur.
• Katman Elektron Dağılım Kuralı:
  - 1. Katman: En fazla 2 elektron.
  - 2. Katman: En fazla 8 elektron.
  - 3. Katman: En fazla 8 elektron alabilir.
• Kural:
  - KATMAN SAYISI = PERİYOT NUMARASINI verir.
  - SON KATMANDAKİ ELEKTRON SAYISI (Değerlik e-) = A GRUP NUMARASINI verir!
  - İSTİSNA: Helyum (2He) 2 elektrona sahiptir; tek katmanı vardır ama tam dolu olduğu için 8A SOYGAZ grubundadır!
• İYON OLUŞUMU:
  - Son katmanını 2'ye tamamlama ➔ DUBLET, 8'e tamamlama ➔ OKTET kuralıdır.
  - Elektron VEREN atom (+) Pozitif İyon (Katyon) olur.
  - Elektron ALAN atom (-) Negatif İyon (Anyon) olur.`,
      prompt: `Sayfa 74 Kontrol Noktası Soruları:
a. Periyodik tablodaki yatay satırlara ne ad verilir?
b. Grup numarasını hangi değer belirler?
c. Periyodik tablodaki yeri bakımından istisna olan element hangisidir?
ç. 6A grubu 2. periyottaki element hangisidir?`,
      interactiveAnswer: `KONTROL NOKTASI VE PERİYODİK CETVEL ÇÖZÜMLERİ:
a. Yatay satırlar ➔ 5. PERİYOT
b. Grup numarasını belirleyen ➔ 8. SON KATMANDAKİ ELEKTRON SAYISI
c. İstisna olan element ➔ 6. HELYUM (2 elektronu var ama 8A'dadır)
ç. 6A grubu 2. periyot elementi ➔ 7. OKSİJEN (2) 6) ➔ Toplam 8 proton)`
    },
    {
      id: 'ib-g7-5-2-p75-79-bilesikler-ve-formulleri',
      pageNumber: 'Sayfa 75-79',
      type: 'etkinlik_istasyonu',
      title: 'Bileşikler, Formülleri, Modelleri & Sayfa 78 Neler Öğrendik?',
      badge: 'Bileşik Formülleri',
      qrInfo: {
        title: 'EBA: "Bileşik Formülleri" Etkileşimli İçeriği (s. 77)',
        description: 'Ders kitabının 77. sayfasındaki bileşik formülleri kart oyunu karekodu.',
        type: 'interactive'
      },
      content: `YAYGIN BİLEŞİKLER VE FORMÜLLERİ (Sayfa 75-77):
• Su: H2O (2 Hidrojen, 1 Oksijen)
• Sofra Tuzu (Sodyum klorür): NaCl (1 Sodyum, 1 Klor)
• Amonyak: NH3 (1 Azot, 3 Hidrojen)
• Karbon dioksit: CO2 (1 Karbon, 2 Oksijen)
• Karbon monoksit: CO (1 Karbon, 1 Oksijen)
• Kükürt dioksit: SO2 (1 Kükürt, 2 Oksijen)
• Hidrojen klorür (Tuz ruhu): HCl (1 Hidrojen, 1 Klor)
• Sülfürik asit (Zaç yağı): H2SO4 (2 Hidrojen, 1 Kükürt, 4 Oksijen)
• Sodyum hidroksit (Sud-kostik): NaOH (1 Sodyum, 1 Oksijen, 1 Hidrojen)
• Glikoz (Basit Şeker): C6H12O6 (6 Karbon, 12 Hidrojen, 6 Oksijen ➔ Toplam 24 atom!)`,
      prompt: `Neler Öğrendik Soruları (s. 78):
A. 8 Çıkışlı Labirent: "Saf maddelerin belirli ayırt edici özellikleri vardır." (D/Y?) labirentini çözünüz.
B. Maddeleri Formül ve Sembol durumuna göre işaretleyiniz (Mg, Cl, H2, P, CO2, O2, H2O, Na, NaOH).
C. C6H12O6 Basit Şeker:
   a. Hangi elementlerden oluşur?
   b. Bir molekülünde toplam kaç atom vardır?`,
      interactiveAnswer: `NELER ÖĞRENDİK (SAYFA 78) ÇÖZÜMLERİ:
A. 8 Çıkışlı Labirent Analizi:
   1. Adım: "Saf maddelerin belirli ayırt edici özellikleri vardır." ➔ DOĞRU.
   2. Adım (Sol Kol): "Bileşikler sembollerle gösterilir." ➔ YANLIŞ (Elementler sembolle, bileşikler formülle gösterilir).
   3. Adım: "Elementler atomik yapıda olabilir." ➔ DOĞRU (Demir, altın, soygazlar atomiktir).
   🎯 HEDEF ÇIKIŞ: 3. ÇIKIŞA ULAŞILIR!

B. Sembol vs Formül:
   • SEMBOLLER: Mg, Cl, P, Na (Atomik elementler).
   • FORMÜLLER: H2 (Moleküler element), O2 (Moleküler element), CO2 (Bileşik), H2O (Bileşik), NaOH (Bileşik).

C. Glikoz Analizi:
   a. Oluştuğu Elementler: Karbon (C), Hidrojen (H) ve Oksijen (O) olmak üzere 3 ÇEŞİT elementten oluşur.
   b. Toplam Atom Sayısı: 6 Karbon + 12 Hidrojen + 6 Oksijen = 24 TANE ATOM vardır.`
    }
  ],
  'g7-u5-sub3': [
    {
      id: 'ib-g7-5-3-p79-84-karisimlar-homojen-heterojen-cozelti',
      pageNumber: 'Sayfa 79-84',
      type: 'hazirlik_istasyonu',
      title: '3. Bölüm: KARIŞIMLAR (Aslı’nın Salatası, Homojen-Heterojen Karışımlar & Alaşımlar)',
      badge: 'Karışımlar & Çözeltiler',
      qrInfo: {
        title: 'EBA: "Karışımların Sınıflandırılması" Etkileşimli İçeriği (s. 82)',
        description: 'Ders kitabının 82. sayfasındaki karışımlar sınıflandırma karekodu.',
        type: 'interactive'
      },
      content: `KARIŞIM TÜRLERİ VE ÖZELLİKLERİ (Sayfa 79-84):
• Karışım: Birden fazla saf maddenin kimyasal bağ kurmadan, rastgele oranlarda bir araya gelmesiyle oluşur. Formülleri yoktur, fiziksel yöntemlerle ayrılabilirler.
1. HETEROJEN KARIŞIM: Her yerinde aynı özelliği göstermeyen, tanecikleri eşit dağılmayan karışımlardır (Salata, ayran, zeytinyağı-su, çorba, kum-su, sis, kan).
2. HOMOJEN KARIŞIM (ÇÖZELTİ): Her yerinde aynı özelliği gösteren, dışarıdan tek bir madde gibi görünen karışımlardır (Tuzlu su, şekerli su, hava, maden suyu, kolonya, gazoz, tentürdiyot).
   - Çözelti = Çözücü + Çözünen.
   - Su olan karışımlarda su daima çözücüdür.
• ALAŞIMLAR (Katı-Katı Homojen Karışımlar s. 83):
  Metallerin eritilip karıştırılmasıyla elde edilir: Çelik (Demir + Karbon/Nikel), Tunç/Bronz (Bakır + Kalay), Lehim (Kurşun + Kalay), Pirinç (Bakır + Çinko).`,
      prompt: `Sayfa 83 Kontrol Noktası Soruları:
Aysel (su, tuz, alkol, talaş) ve Mehmet (su, tebeşir tozu, şeker, zeytinyağı):
a. Aysel hangi maddelerle homojen karışım elde eder?
b. Mehmet'in homojen karışımında çözücü ve çözünen ne olur?
c. Mehmet katı-sıvı heterojen karışım için neleri kullanmalıdır?`,
      interactiveAnswer: `KONTROL NOKTASI ÇÖZÜMLERİ (SAYFA 83):
a. Aysel: Tuz-Su çözeltisi veya Alkol-Su çözeltisi yaparak homojen karışım elde eder.
b. Mehmet: Şeker ve suyu karıştırır. Çözücü SU, çözünen ŞEKERDİR.
c. Mehmet: Tebeşir tozu ve suyu karıştırırsa katı-sıvı heterojen karışım (süspansiyon) elde eder.`
    },
    {
      id: 'ib-g7-5-3-p84-88-cozunme-hizi-arda-deneyler',
      pageNumber: 'Sayfa 84-89',
      type: 'etkinlik_istasyonu',
      title: 'Çözünme Hızına Etki Eden Faktörler (Arda’nın Çayı, 3 Aşamalı Deney & Neler Öğrendik?)',
      badge: 'Çözünme Hızı',
      qrInfo: {
        title: 'EBA: "Çözünme Hızı" Etkileşimli İçeriği ve Formu (s. 87)',
        description: 'Ders kitabının 87. sayfasındaki çözünme hızı deneyleri karekodu.',
        type: 'interactive'
      },
      content: `ÇÖZÜNME HIZINI ETKİLEYEN 3 FAKTÖR (Sayfa 84-88):
1. Sıcaklık: Sıcaklık arttıkça taneciklerin kinetik enerjisi artar, çözücü ve çözünen tanecikleri daha hızlı çarpışır ➔ ÇÖZÜNME HIZI ARTAR (Sıcak çayda şeker daha hızlı çözünür).
2. Temas Yüzeyi (Tanecik Boyutu): Tanecikler ufalandıkça temas yüzeyi genişler ➔ ÇÖZÜNME HIZI ARTAR (Pudra şekeri > Toz şeker > Küp şeker).
3. Karıştırma (Çalkalama): Çözücü molekülleriyle çözünen taneciklerinin temasını hızlandırır ➔ ÇÖZÜNME HIZI ARTAR.`,
      prompt: `Neler Öğrendik Soruları (s. 88):
A. İfadeleri Homojen ve Heterojen ile eşleştiriniz.
B. Çözeltileri oluşturan maddelerin fiziksel hâllerini yazınız (deniz suyu, çelik, hava, lehim, kolonya, gazoz).
C. Deney Beherleri (I. 20°C 60 ml su + 20 g küp şeker, II. 20°C 60 ml su + 20 g toz şeker, III. 40°C 60 ml su + 20 g toz şeker):
Sıcaklığın etkisini araştırmak için hangi iki düzenek seçilmelidir? Neden?`,
      interactiveAnswer: `NELER ÖĞRENDİK (SAYFA 88) ÇÖZÜMLERİ:
A. Eşleştirme:
   • a, c, ç ➔ HOMOJEN (Karışımın her yerinde aynı özellik, alkol-su, çözelti).
   • b, d, e ➔ HETEROJEN (Eşit dağılmayan, tuz-şeker, zeytinyağı-su).

B. Çözeltilerin Fiziksel Hâlleri:
   • Deniz suyu: Sıvı (su) - Katı (tuz)
   • Çelik: Katı (demir) - Katı (karbon) alaşım
   • Hava: Gaz (azot) - Gaz (oksijen)
   • Lehim: Katı - Katı alaşım
   • Kolonya: Sıvı (su) - Sıvı (alkol)
   • Gazoz: Sıvı (su) - Gaz (karbon dioksit)

C. Sıcaklık Deneyi Seçimi:
   - SEÇİLECEK DÜZENEKLER: II ve III numaralı beherler!
   - Gerekçe: Kontrollü bir deneyde sadece test edilen faktör (bağımsız değişken = sıcaklık) farklı olmalıdır. II (20°C) ve III (40°C) düzeneklerinde su miktarları (60 ml), şeker miktarları (20 g) ve şeker türü (toz şeker) tamamen aynıdır; tek fark suyun sıcaklığıdır!`
    }
  ],
  'g7-u5-sub4': [
    {
      id: 'ib-g7-5-4-p89-93-karisimlarin-ayrilmasi-eylul',
      pageNumber: 'Sayfa 89-93',
      type: 'hazirlik_istasyonu',
      title: '4. Bölüm: KARIŞIMLARIN AYRILMASI (Eylül’ün Deniz Tuzu Merakı & V Diyagramı)',
      badge: 'Ayırma Yöntemleri',
      qrInfo: {
        title: 'EBA: "Karışımları Ayırma Yöntemleri" Etkileşimli İçeriği (s. 92)',
        description: 'Ders kitabının 92. sayfasındaki ayırma yöntemleri simülasyon karekodu.',
        type: 'interactive'
      },
      content: `KARIŞIMLARI AYIRMADA KULLANILAN FİZİKSEL ÖZELLİKLER (Sayfa 89-93):
Karışımlar maddelerin fiziksel özellik farklarından yararlanılarak ayrılır:
1. Tanecik Boyutu Farkı: Süzme, eleme, diyaliz.
2. Yoğunluk (Özkütle) Farkı: Ayırma hunisi (zeytinyağı-su), yüzdürme (saman-buğday, talaş-su), savurma.
3. Çözünürlük Farkı: Kristallendirme (tuzlu suyun soğutulması), özütleme (çay demleme).
4. Kaynama Noktası Farkı: Buharlaştırma (tuzlu sudan tuz eldesi), Basit Damıtma, Ayrımsal Damıtma (alkol-su, ham petrol).
5. Manyetik Özellik Farkı: Mıknatısla ayırma (demir, nikel, kobalt).`,
      prompt: `Etkinlik Noktası-12 Değerlendirme Sorusu (s. 92):
Kum-su, tuz-su, zeytinyağı-su, etil alkol-su, kepek-un karışımları hangi yöntemlerle ayrılır?`,
      interactiveAnswer: `AYIRMA YÖNTEMLERİ EŞLEŞTİRMESİ:
• Kum - Su: SÜZME yöntemiyle ayrılır (Tanecik boyutu farkı).
• Tuz - Su: BUHARLAŞTIRMA veya DAMITMA ile ayrılır (Kaynama noktası farkı).
• Zeytinyağı - Su: AYIRMA HUNİSİ ile ayrılır (Yoğunluk farkı; su altta, zeytinyağı üstte kalır).
• Etil Alkol - Su: AYRIMSAL DAMITMA ile ayrılır (Kaynama noktaları farkı: Alkol 78°C'de önce buharlaşır ve yoğunlaştırıcıda toplanır).
• Kepek - Un: ELEME yöntemiyle ayrılır (Tanecik boyutu farkı).`
    },
    {
      id: 'ib-g7-5-4-p93-96-cabir-bin-hayyan-eylulun-parfumu',
      pageNumber: 'Sayfa 93-96',
      type: 'bilgi_kutusu',
      title: 'Tarihe Not Düşenler: Câbir Bin Hayyân & Eylül’ün Doğal Parfümü',
      badge: 'Câbir Bin Hayyân',
      content: `KİMYANIN ATASI VE DAMITMA İMBİĞİ (Sayfa 93-96):
• CÂBİR BİN HAYYÂN (721-815): Modern kimyanın kurucularından kabul edilir. İlk kimya laboratuvarını kurmuş; damıtma imbiğini (imbik), deney tüplerini ve fırınları icat etmiştir. Nitrik asit ve hidroklorik asidi karıştırarak altını dahi eriten "KRAL SUYU"nu bulmuştur.
• İZ BIRAKAN DİĞER KİMYACILAR (s. 96):
  - Ebû Bekir er-Râzî (865-925): Çeşitli yağ ve tuzları damıtmış, ilk kez çiçek aşısı ve antiseptikler geliştirmiştir.
  - Robert Boyle (1627-1691): Elementi daha basit maddelere parçalanamayan madde olarak tanımlamıştır.
  - Antoine Lavoisier (1743-1794): Kütlenin Korunumu Kanunu'nu bulmuş, oksijen ve hidrojene isimlerini vermiştir.
  - Oktay Sinanoğlu (1935-2015): 26 yaşında Yale Üniversitesi'nde dünyanın en genç profesörü olmuş, atom ve moleküllerde çoklu elektron kuramını geliştirmiştir.`,
      prompt: `Sayfa 95 Neler Öğrendik: Eylül'ün "Doğal Parfüm" Projesi Soruları:
Eylül gül yaprakları ve lavantayı bitkisel yağla karıştırıyor. Önce yağ ve suyu ayırmak için cam düzenek, sonra aromatik yağı saflaştırmak için kaynama noktası farkından yararlanıyor.
1. Yağ ve suyu ayırdığı yöntemin adı nedir?
2. Dayandığı fiziksel özellik nedir?
3. İkinci yöntemin adı nedir?`,
      interactiveAnswer: `EYLÜL'ÜN PARFÜM PROJESİ ÇÖZÜMLERİ (SAYFA 95):
1. Birinci Yöntem: AYIRMA HUNİSİ ile ayırma.
2. Dayandığı Fiziksel Özellik: YOĞUNLUK (ÖZKÜTLE) FARKI (Yağ ve su birbiri içinde çözünmez, suyun yoğunluğu büyük olduğu için altta toplanır).
3. İkinci Yöntem: AYRIMSAL DAMITMA (veya basit damıtma - kaynama noktası farkına dayanır).
4. Genel Açıklama: Sıvı-sıvı heterojen karışımı yoğunluk farkıyla (ayırma hunisi), sıvı-sıvı homojen karışımı ise kaynama noktası farkıyla (damıtma) saflaştırmıştır.`
    },
    ...unit5EndItemsG7B2
  ],
  'g7-u5-end': unit5EndItemsG7B2
};

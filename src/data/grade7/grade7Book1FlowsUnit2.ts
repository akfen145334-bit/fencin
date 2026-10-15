import { InteractiveBookItem } from '../../types/curriculum';

/**
 * 7. SINIF FEN BİLİMLERİ 1. KİTAP - TEKRAR DİZAYN SİSTEMİ
 * 2. ÜNİTE: KUVVET VE ENERJİYİ KEŞFEDELİM (Sayfa 56 - 85)
 */

export const unit2EndItemsG7: InteractiveBookItem[] = [
  {
    id: 'ib-g7-u2-end-p81-dy-bosluk',
    pageNumber: 'Sayfa 81',
    type: 'on_degerlendirme',
    title: '2. Ünite Sonu İstasyonu - A & B: Doğru/Yanlış ve Boşluk Doldurma',
    badge: 'Ünite Sonu A-B',
    prompt: `A. Doğru/Yanlış İfadeleri (s. 81):
1. ( ) Bir cisim uygulanan kuvvet ile aynı yönde hareket ediyorsa iş yapar.
2. ( ) Kuvvet doğrultusunda hareket eden cisme uygulanan kuvvet artarsa fiziksel anlamda yapılan iş de artar.
3. ( ) Kinetik enerji kütle ve hıza bağlıdır.
4. ( ) Aynı rafta bulunan farklı ağırlıktaki kitapların çekim potansiyel enerjileri aynıdır.
5. ( ) Salınım hareketi yapan sarkaçta esneklik potansiyel enerjisi ile kinetik enerji dönüşümleri gerçekleşir.

B. Boşluk Doldurma (1-10) (s. 81):
[Kelimeler: yükseklik, kuvvet, joule, iş, sıkışma, doğru orantılı, kinetik, ağırlık, çekim potansiyel, esneklik, sürtünme kuvveti, yok olmaz]`,
    interactiveAnswer: `A. DOĞRU / YANLIŞ ÇÖZÜMLERİ:
1. DOĞRU ➔ Cisim uygulanan kuvvet doğrultusunda hareket ederse fiziksel anlamda iş yapılır.
2. DOĞRU ➔ Yapılan iş formülü W = F × Δx olup, kuvvet arttıkça yapılan iş de artar.
3. DOĞRU ➔ Kinetik enerji hem kütle hem de sürat/hız ile doğru orantılıdır.
4. YANLIŞ ➔ Doğrusu: Çekim potansiyel enerjisi ağırlığa da bağlıdır; aynı raftaki ağır kitabın potansiyel enerjisi daha fazladır.
5. YANLIŞ ➔ Doğrusu: Sarkaçta esneklik değil, ÇEKİM POTANSİYEL ENERJİSİ ile kinetik enerji birbirine dönüşür.

B. BOŞLUK DOLDURMA ÇÖZÜMLERİ:
1. KUVVET (hareket yönüne dik olmayan bir kuvvet uygulanmalıdır)
2. JOULE (iş birimi)
3. DOĞRU ORANTILI (yer değiştirme arttıkça iş doğru orantılı artar)
4. AĞIRLIK (ve yüksekliğine bağlıdır)
5. KİNETİK (hızlı olan yarış arabasının kinetik enerjisi fazladır)
6. SIKIŞMA (veya gerilme miktarına bağlıdır)
7. YÜKSEKLİK (çekim potansiyel enerjisinin yükseklikle ilişkisi için eşit ağırlıklı iki cisim kullanılır)
8. YOK OLMAZ (enerji yoktan var olmaz, yok olmaz; sadece tür değiştirir)
9. SÜRTÜNME KUVVETİ (etkisiyle kinetik enerji ısı ve sese dönüşür)
10. ÇEKİM POTANSİYEL (uçan balon yükseldikçe çekim potansiyel enerjisi artar)`
  },
  {
    id: 'ib-g7-u2-end-p82-83-acik-uclu-kutular',
    pageNumber: 'Sayfa 82-83',
    type: 'etkinlik_istasyonu',
    title: '2. Ünite Sonu İstasyonu - C: Süt Kutuları ve Sibel Hanım Fiziksel İş Analizleri',
    badge: 'İş Analizleri',
    prompt: `C. Açık Uçlu Problem Çözümleri (s. 82-83):
1. Bir cisme fiziksel anlamda iş yaptırabilmek için gerekli 2 temel şart nedir?
2. Kuvvet ile hareket yönü nasıl olursa iş yapılmamış olur?
3. Market çalışanı Eser mavi kutuları 50 cm yüksekliğindeki 3. rafa, İnci ise yeşil kutuları 1 m yüksekliğindeki 5. rafa taşıyor. (Kutuların kütlesi eşit):
   - I. Doğru ifadeler hangileridir? (İnci'nin bir kutu taşırken yaptığı iş = Eser'in iki kutu taşırken yaptığı iş midir?)
   - II. Kutuların tamamı raflara konduğunda yapılan işleri karşılaştırınız.
5. Sibel Hanım'ın Günlük Hayatı (1-9 eylemleri): Hangi numaralarda fiziksel anlamda iş yapılmıştır?
6. Bilye Kaydırağı (A, B, C, Ç, D, E noktalarında 4 küplü kinetik ve potansiyel enerji paylaşımı).
7. Kaçış Rampası ve Çekici Problemi (30 m ve 15 m duran kamyonlar).`,
    interactiveAnswer: `DETAYLI SORU ANALİZLERİ VE ÇÖZÜMLER:
1. Fiziksel İş İçin Gerekli Şartlar:
   - Cisme net bir kuvvet uygulanmalı.
   - Cisim uygulanan kuvvet DOĞRULTUSUNDA yer değiştirmelidir.

2. İş Yapılmama Durumu:
   - Uygulanan kuvvet ile hareket yönü birbirine DİK (90°) olursa (Örn: Çantayı omuzda sallamadan yatay yolda yürümek) veya net yer değiştirme SIFIR olursa iş yapılmaz.

3. Süt Kutuları Problemi:
   - W = Kuvvet × Yol. Kutuların ağırlığı G olsun.
   - Eser'in 1 kutu için yaptığı iş: W_Eser = G × 0,5 m = 0,5G Joule.
   - İnci'nin 1 kutu için yaptığı iş: W_İnci = G × 1,0 m = 1,0G Joule.
   - Doğru Yargı: İnci'nin 1 kutu taşırken yaptığı iş, Eser'in 2 kutu taşırken yaptığı işe EŞİTTİR (b şıkkı DOĞRU).
   - Tüm kutular yerleştiğinde: Eşit sayıda kutu varsa İnci'nin yaptığı toplam iş Eser'in iki katıdır.

5. Sibel Hanım Fiziksel İş Yaptığı Durumlar:
   - (2) Çantayı yerden sırtına kaldırdığında: İŞ VAR (Kuvvet yukarı, hareket yukarı).
   - (3) Kapıyı kilitlerken anahtarı döndürme: İŞ VAR.
   - (4) Merdivenlerden aşağı inerken çantasını indirme: İŞ VAR.
   - (6) İkinci kata merdivenlerden çıkarken: İŞ VAR (Düşey yer değiştirme).
   - (8) Beyaz tahtaya yazarken kaleme kuvvet uygulayıp hareket ettirme: İŞ VAR.
   - (5) ve (9) numaralarda: Düz yolda çantayı sallamadan yürüme ve oturup ekrana bakmada FİZİKSEL İŞ YOKTUR!

6. 4 Küplü Enerji Paylaşımı (Sürtünmesiz Ray):
   - A noktası (En tepe): P.E = 4 küp, K.E = 0 küp.
   - B noktası (Orta iniş): P.E = 2 küp, K.E = 2 küp.
   - C noktası (Dip zemin): P.E = 0 küp, K.E = 4 küp (Maksimum hız).
   - Ç noktası: P.E = 0 küp, K.E = 4 küp.
   - D noktası: P.E = 2 küp, K.E = 2 küp.
   - E noktası (A ile aynı hiza): P.E = 4 küp, K.E = 0 küp (Bilye anlık durur).

7. Kaçış Rampası ve Çekici:
   - I. Çekicinin Yaptığı İş: W = F × x. Eşit kuvvetle Görsel 1'deki kamyon 30 m, Görsel 2'deki 15 m çekildiğine göre Görsel 1'de yapılan iş 2 kat DAHA FAZLADIR (W1 = 2 × W2).
   - II. Giriş Kinetik Enerjileri: Rampada daha uzağa (30 m) tırmanan kamyonun rampaya giriş anındaki kinetik enerjisi daha büyüktür.`
  },
  {
    id: 'ib-g7-u2-end-p84-85-bilyeler-ve-bulmaca',
    pageNumber: 'Sayfa 84-85',
    type: 'karekod',
    title: '2. Ünite Sonu İstasyonu - 8-9 & Ç: Kum Havuzu Bilye Deneyi ve Enerji Bulmacası',
    badge: 'Bulmaca & Karekod',
    prompt: `8. Kum Havuzu ve K (300 N), L (300 N), M (200 N) Bilyeleri:
- I. Çekim potansiyel enerjisi ile AĞIRLIK ilişkisini ispatlamak için hangi bilyeler seçilmelidir?
- II. Çekim potansiyel enerjisi ile YÜKSEKLİK ilişkisini ispatlamak için hangi bilyeler seçilmelidir?
9. Koşu Yarışı: Kütleleri eşit Anıl (48 sn), Mert (52 sn), Erkan (45 sn):
- I. Kinetik enerjilerini karşılaştırınız.
- II. Neden farklı olduğunu açıklayınız.
Ç. Bulmaca Çözümü (s. 85).`,
    interactiveAnswer: `DETAYLI DENEY VE BULMACA ÇÖZÜMLERİ:
8. Kum Havuzu Kontrollü Deney Düzenekleri:
   - I. Ağırlık İlişkisi (Bağımsız Değişken = Ağırlık):
     Yükseklik sabit tutulmalı (Örn: İkisi de 1 m yükseklikten serbest bırakılmalı). Farklı ağırlıktaki K (300 N) ve M (200 N) bilyeleri kum havuzuna bırakılır. Ağır olan K bilyesinin kumda daha derin iz bıraktığı gözlemlenir.
   - II. Yükseklik İlişkisi (Bağımsız Değişken = Yükseklik):
     Ağırlık sabit tutulmalı! Özdeş K (300 N) ve L (300 N) bilyeleri seçilir. K bilyesi 1 metreden, L bilyesi 2 metreden serbest bırakılır. Yüksekten bırakılan L'nin kumda daha derin çukur açtığı kanıtlanır.

9. Koşu Yarışı Kinetik Enerji Sıralaması:
   - Süreler: Erkan = 45 sn (En hızlı!), Anıl = 48 sn (Orta), Mert = 52 sn (En yavaş).
   - Kütleler eşit olduğuna göre sürati fazla olanın kinetik enerjisi en büyüktür:
   - Kinetik Enerji Sıralaması: ERKAN > ANIL > MERT.
   - Nedeni: Kinetik enerji süratin karesiyle doğru orantılı olarak artar.

Ç. BULMACA CEVAPLARI (Sayfa 85):
Yukarıdan Aşağıya:
1. POTANSİYEL ENERJİ
2. ESNEK CİSİM
3. JOULE
4. ÇEKİM POTANSİYELİ

Soldan Sağa:
5. ISI ENERJİSİ
6. ENERJİ
7. KİNETİK ENERJİ
8. FİZİKSEL İŞ`,
    qrInfo: {
      title: 'EBA: 2. Ünite Kuvvet ve Enerji Ölçme Testi & İlginç Bilgiler (s. 84-85)',
      description: 'Ders kitabının 84 ve 85. sayfalarındaki EBA ek soru ve ünite değerlendirme karekodları.',
      type: 'evaluation'
    }
  }
];

export const grade7Book1FlowsUnit2: Record<string, InteractiveBookItem[]> = {
  'g7-u2-sub1': [
    {
      id: 'ib-g7-2-1-p56-58-kapak-on-degerlendirme',
      pageNumber: 'Sayfa 56-58',
      type: 'karekod',
      title: '2. Ünite Girişi: Kuvvet ve Enerjiyi Keşfedelim & Ön Değerlendirme İstasyonu',
      badge: 'Ünite Girişi & Karekod',
      qrInfo: {
        title: 'EBA: 2. Ünite Tanıtım ve Özet E-İçerik Karekodu (s. 57)',
        description: 'Ders kitabının 57. sayfasındaki MEB EBA "Ünite Alanı" ve "Özet E-İçerik" etkileşimli video karekodları.',
        type: 'video'
      },
      content: `KAZANIM VE İÇERİK ÇERÇEVESİ (Sayfa 56-58):
• Kuvvet, İş ve Enerji İlişkisi: Fiziksel anlamda işin şartları, Joule birimi, kinetik enerji ve potansiyel enerji (çekim ve esneklik potansiyeli).
• Enerji Dönüşümleri: Kinetik ve potansiyel enerjinin birbirine dönüşümü, sürtünme kuvveti ve ısıl kayıplar, enerjinin korunumu kanunu.
• Ön Hazırlık: Kütle, ağırlık, kuvvet, doğrultu, yön ve yer değiştirme kavramlarını önceki sınıflarda öğrenmiştiniz.`,
      prompt: `Ön Değerlendirme Soruları (s. 58):
1. Bisiklet süren Koray ve dedesi:
   a. Hareket yönü ile aynı yönde kuvvet uygulanırsa bisikletin hareketi nasıl değişir?
   b. Hareket yönüne zıt yönde kuvvet uygulanırsa bisikletin hareketi nasıl değişir?
   c. Gidon sola çevrilirse hareket yönü ve doğrultusu hakkında ne söylenebilir?
2. Dünya'da kütlesi 10 kg olan bir cisim:
   a. Cismin Ay'daki kütlesi hangi araçla ölçülür?
   b. Cismin Ay'daki kütlesi kaç kg'dır?
   c. Dünya'daki ve Ay'daki ağırlıkları hangi araçla ölçülür ve nasıl değişir?
3. Parka 10 dakikada gidip aynı yoldan 15 dakikada dönen öğrencinin yer değiştirmesi ve hız karşılaştırması nasıldır?`,
      interactiveAnswer: `ÖN DEĞERLENDİRME ÇÖZÜMLERİ:
1. Bisiklet Hareketi:
   a. Aynı yönde kuvvet uygulanırsa bisiklet HIZLANIR.
   b. Zıt yönde kuvvet uygulanırsa bisiklet YAVAŞLAR ve durabilir.
   c. Gidon sola çevrilirse bisikletin hareket yönü ve doğrultusu DEĞİŞİR (eğrisel hareket yapar).

2. Kütle ve Ağırlık Farkı:
   a. Kütle EŞİT KOLLU TERAZİ ile ölçülür.
   b. Kütle değişmeyen madde miktarıdır; Dünya'da 10 kg olan cismin Ay'daki kütlesi de YİNE 10 KG'DIR!
   c. Ağırlık DİNAMOMETRE ile ölçülür. Dünya'daki ağırlığı yaklaşık 100 N iken; Ay'daki yer çekimi Dünya'nın 1/6'sı olduğu için Ay'daki ağırlığı yaklaşık 16,6 N'a düşer.

3. Park Hareketi:
   a. Öğrenci hareket etmiştir (konum değiştirmiştir).
   b. Başladığı evine geri döndüğü için toplam YER DEĞİŞTİRMESİ SIFIRDIR (0 metre)!
   c. Aynı yolu gidişte 10 dk, dönüşte 15 dk'da aldığı için parka gidiş sürati dönüş süratinden DAHA BÜYÜKTÜR.`
    },
    {
      id: 'ib-g7-2-1-p59-61-necmettin-ogretmen-ve-fiziksel-is',
      pageNumber: 'Sayfa 59-61',
      type: 'hazirlik_istasyonu',
      title: '1. Bölüm Ana Başlık: KUVVET, İŞ VE ENERJİ İLİŞKİSİ (Necmettin Öğretmen & Etkinlik Noktası 1-2)',
      badge: 'Fiziksel İş',
      content: `FİZİKSEL ANLAMDA İŞ TANIMI (Sayfa 60-61):
Bir kuvvetin fiziksel anlamda iş yapabilmesi için İKİ KATI ŞART vardır:
1. Cisme net bir kuvvet uygulanmalıdır (F > 0).
2. Cisim, UYGULANAN KUVVET DOĞRULTUSUNDA yer değiştirmelidir (Δx > 0 ve F ile aynı doğrultuda olmalıdır).`,
      prompt: `Etkinlik Noktası-2 Matris Tablosu Soruları (s. 61):
Aşağıdaki 4 görselde fiziksel anlamda iş yapılmış mıdır? Neden?
I. Oyuncak arabayı 100 N kuvvetle iterek hareket ettiren çocuk.
II. 50 N'lık okul çantasını sırtında taşıyarak yatay yolda yürüyen öğrenci.
III. 500 N'lık halteri yukarı doğru kaldıran sporcu.
IV. Testereyi 20 N kuvvetle aşağı doğru iten marangoz.`,
      interactiveAnswer: `GÖRSEL ANALİZİ VE ÇÖZÜMLER (SAYFA 61):
• I. Oyuncak Araba: Kuvvet yatay doğrultuda, hareket yatay doğrultuda. ➔ FİZİKSEL ANLAMDA İŞ YAPILMIŞTIR (W = 100 N × yol).
• II. Sırt Çantası Taşıyan Öğrenci: Çantayı düşürmemek için uygulanan kuvvet YUKARI (Düşey), hareket ise İLERİ (Yatay). Kuvvet ile hareket birbirine DİKTİR (90°). ➔ FİZİKSEL ANLAMDA İŞ YAPILMAMIŞTIR!
• III. Halter Kaldıran Sporcu: Uygulanan kuvvet yukarı, halterin yükselme yönü yukarı. ➔ FİZİKSEL ANLAMDA İŞ YAPILMIŞTIR.
• IV. Testere İten Marangoz: Kuvvet aşağı doğrultuda, testerenin hareketi aşağı doğrultuda. ➔ FİZİKSEL ANLAMDA İŞ YAPILMIŞTIR.`
    },
    {
      id: 'ib-g7-2-1-p62-64-joule-ve-ahmetin-kolisi',
      pageNumber: 'Sayfa 62-64',
      type: 'etkinlik_istasyonu',
      title: 'İş Birimi Joule & Kontrol Noktası: Ahmet’in Koli Taşıma Deneyi',
      badge: 'Joule & İş Hesabı',
      qrInfo: {
        title: 'EBA: "Fiziksel Anlamda İşin Bağlı Olduğu Faktörler" Simülasyonu (s. 63)',
        description: 'Ders kitabının 63. sayfasındaki fiziksel iş ve kuvvet simülasyon karekodu.',
        type: 'interactive'
      },
      content: `İŞ FORMÜLÜ VE BİRİMİ (Sayfa 62):
• İş (W) = Kuvvet (F) × Kuvvet Doğrultusunda Alınan Yol (Δx)
• Kuvvet Newton (N), yol metre (m) alınırsa; İş birimi "JOULE" (J) olur.
  1 Joule = 1 Newton × 1 Metre (1 J = 1 N·m).`,
      prompt: `Kontrol Noktası Soruları (s. 63):
1. Ahmet koliyi A noktasında yerden kaldırıyor, A-B arasında sallamadan düz koridorda taşıyor, B-C arasında merdivenlerden yukarı çıkarıyor ve C noktasında yere bırakıyor:
   - A noktasında iş yapıldı mı?
   - A-B aralığında iş yapıldı mı?
   - B-C aralığında iş yapıldı mı?
   - C noktasında iş yapıldı mı?
2. Grafik Sorusu: K, L, M ve N kitaplarına uygulanan kuvvetler ve yollar verilmiştir:
   K (F=100 N, x=1 m), L (F=100 N, x=2 m), M (F=100 N, x=3 m), N (F=100 N, x=1 m).
   Ahmet’in kitaplara uyguladığı fiziksel anlamda iş büyüklüklerini büyükten küçüğe sıralayınız.`,
      interactiveAnswer: `KONTROL NOKTASI ÇÖZÜMLERİ:
1. Ahmet'in Aşamaları:
   • A noktasında (Yerden kaldırma): İŞ YAPILMIŞTIR (Kuvvet yukarı, koli yukarı yükseldi).
   • A-B aralığında (Yatay koridorda düz taşıma): İŞ YAPILMAMIŞTIR (Kuvvet yukarı düşey, hareket yatay doğrultuda; birbirine diktir!).
   • B-C aralığında (Merdivenden yukarı çıkarma): İŞ YAPILMIŞTIR (Koli düşeyde yukarı doğru yükseldi, kuvvet yönünde yol aldı).
   • C noktasında (Yere bırakırken kontrollü indirme): İŞ YAPILMIŞTIR (Düşeyde yer değiştirme gerçekleşti).

2. Kitapların İş Sıralaması (W = F × x):
   • W_K = 100 N × 1 m = 100 J
   • W_L = 100 N × 2 m = 200 J
   • W_M = 100 N × 3 m = 300 J
   • W_N = 100 N × 1 m = 100 J
   🎯 Sıralama: M > L > K = N`
    },
    {
      id: 'ib-g7-2-1-p65-68-kinetik-enerji-lunapark-yedikule',
      pageNumber: 'Sayfa 65-68',
      type: 'etkinlik_istasyonu',
      title: 'Kinetik Enerji & Kontrol Noktası: Go-Kart Yarışı ve Yedikule Oyunu',
      badge: 'Kinetik Enerji',
      content: `KİNETİK ENERJİ (HAREKET ENERJİSİ) (Sayfa 65-67):
• Tanım: Cisimlerin hareketinden (süratinden) dolayı sahip olduğu enerjidir. Birimi Joule'dür.
• Kinetik Enerjiyi Etkileyen İki Faktör:
  1. Kütle: Süratleri eşitse, kütlesi büyük olanın kinetik enerjisi daha büyüktür.
  2. Sürat (Hız): Kütleleri eşitse, sürati fazla olanın kinetik enerjisi çok daha büyüktür.`,
      prompt: `Kontrol Noktası Soruları (s. 67):
1. Lunaparkta kütleleri aynı olan Erdem ve Fatih'in araçlarından, yarışı daha hızlı bitiren Erdem'in durma mesafesi neden daha uzun olmuştur?
2. Yedikule oyununda aynı süratle atılan basketbol topu 6 taş devirirken, plastik top neden sadece 2 taş devirmiştir?`,
      interactiveAnswer: `KİNETİK ENERJİ SORU ÇÖZÜMLERİ:
1. Lunapark Go-Kart Analizi:
   Kütleleri eşit olan iki araçtan Erdem'in sürati daha fazladır. Sürati fazla olan aracın KİNETİK ENERJİSİ DAHA BÜYÜKTÜR. Bu yüksek enerjiyi sürtünme kuvvetiyle tüketip aracı durdurabilmek için gereken fren mesafesi (yol) daha uzun olur.

2. Yedikule Oyunu Analizi:
   Basketbol topu ile plastik topun süratleri aynıdır; fakat basketbol topunun KÜTLESİ plastik toptan çok daha fazladır. Kütlesi büyük olan basketbol topunun KİNETİK ENERJİSİ DAHA FAZLADIR. Taşlara çarptığında taşlara aktardığı enerji fazla olduğu için daha çok (6 taş) devirmiştir.`
    },
    {
      id: 'ib-g7-2-1-p68-71-potansiyel-enerji-ve-neler-ogrendik',
      pageNumber: 'Sayfa 68-71',
      type: 'pekistirme_istasyonu',
      title: 'Potansiyel Enerji (Çekim ve Esneklik) & Neler Öğrendik?',
      badge: 'Potansiyel Enerji',
      qrInfo: {
        title: 'EBA: "Kinetik ve Potansiyel Enerji" Etkileşimli İçeriği (s. 69)',
        description: 'Ders kitabının 69. sayfasındaki enerji çeşitleri ve karşılaştırmaları karekodu.',
        type: 'interactive'
      },
      content: `POTANSİYEL ENERJİ ÇEŞİTLERİ (Sayfa 68-70):
1. Çekim Potansiyel Enerjisi: Cisimlerin bulundukları yükseklikten dolayı sahip oldukları depolanmış enerjidir. Cismin AĞIRLIĞINA (Kütlesine) ve YÜKSEKLİĞİNE bağlıdır.
2. Esneklik Potansiyel Enerjisi: Esnek cisimlerin (sarmal yay, paket lastiği, sünger, trambolin, gerilmiş yay) sıkıştırılması veya gerilmesi sonucu depolanan enerjidir. Sıkışma/gerilme miktarına ve yayın esneklik özelliğine bağlıdır.`,
      prompt: `Neler Öğrendik Soruları (s. 70):
A. Kavram Haritası: Market arabasını ileri doğru hareket ettiren çocuk...
B. 5 Doğru/Yanlış Sorusu.
C. Boşluk Doldurma Cümleleri.`,
      interactiveAnswer: `NELER ÖĞRENDİK (SAYFA 70) ÇÖZÜMLERİ:
A. Kavram Haritası:
   Market arabasını ileri süren çocuk ➔ İŞ yapmıştır.
   İş, KUVVET ve YOL ile doğru orantılıdır; birimi JOULE'dür.
   İş yapabilme yeteneğine ENERJİ denir; birimi JOULE'dür.
   Enerji çeşitleri:
   - Hareketinden dolayı sahip olduğu ➔ KİNETİK ENERJİ
   - Konumundan dolayı sahip olduğu ➔ ÇEKİM POTANSİYEL ENERJİSİ
   - Esnekliğinden dolayı sahip olduğu ➔ ESNEKLİK POTANSİYEL ENERJİSİ

B. Doğru / Yanlış:
   1. DOĞRU (İş birimi Joule'dür)
   2. YANLIŞ (Kinetik enerji yüksekliğe değil, kütle ve sürate bağlıdır)
   3. DOĞRU (Kuvvet doğrultusunda yer değiştiriyorsa iş yapılır)
   4. YANLIŞ (Hafif ve ağır kitapların çekim potansiyeli eşit olamaz, ağırlık etkiler)
   5. DOĞRU (Gerilen sarmal yayda esneklik potansiyeli depolanır)

C. Boşluk Doldurma:
   1. İŞ
   2. KİNETİK
   3. İŞ YAPMIŞ
   4. ÇEKİM POTANSİYEL
   5. GERİLME`
    }
  ],
  'g7-u2-sub2': [
    {
      id: 'ib-g7-2-2-p71-73-enerji-donusumleri-salincak',
      pageNumber: 'Sayfa 71-73',
      type: 'hazirlik_istasyonu',
      title: '2. Bölüm Ana Başlık: ENERJİ DÖNÜŞÜMLERİ (Salıncak & Sarkaç Deneyleri)',
      badge: 'Enerji Dönüşümü',
      content: `SALINCAK VE SARKAÇTA ENERJİ DÖNÜŞÜMÜ (Sayfa 71-73):
• Merve ve Arda'nın Parktaki Salıncağı:
  - Salıncak en yüksek noktadayken (tepede): Bir an durur, hızı sıfırdır ➔ Çekim Potansiyel Enerjisi MAKSİMUM, Kinetik Enerji SIFIRDIR.
  - Salıncak aşağı doğru inerken: Yükseklik azalır, potansiyel enerji azalırken kinetik enerjiye dönüşür; salıncak hızlanır.
  - En alt noktadan geçerken (zemine en yakın): Hız en büyüktür ➔ Kinetik Enerji MAKSİMUM, Potansiyel Enerji MİNİMUMDUR.
  - Tekrar yukarı çıkarken: Kinetik enerji azalır, çekim potansiyel enerjisine dönüşür.`,
      prompt: `Etkinlik Noktası-5 Giriş Sorusu (s. 72):
Sarkacın serbest bırakıldığı başlangıç noktası, en alt nokta ve tekrar çıktığı en üst noktadaki kinetik ve potansiyel enerjilerini karşılaştırınız.`,
      interactiveAnswer: `SARKAÇ VE SALINCAK ENERJİ DÖNÜŞÜM ÇÖZÜMÜ:
1. Başlangıç Noktası (En Tepe):
   - Kinetik Enerji = 0
   - Potansiyel Enerji = Maksimum (Tüm enerji potansiyeldir).

2. En Alt Nokta (Denge Konumu):
   - Kinetik Enerji = Maksimum (Topuz en yüksek hızla geçer).
   - Potansiyel Enerji = Minimum (Zemine en yakın).

3. Karşı Taraftaki En Üst Nokta:
   - Kinetik Enerji = 0 (Anlık durur ve geri döner).
   - Potansiyel Enerji = Maksimum (Sürtünme yoksa başlangıçtaki ile aynı yüksekliğe çıkar).`
    },
    {
      id: 'ib-g7-2-2-p74-76-top-yay-ve-egik-duzlem',
      pageNumber: 'Sayfa 74-76',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik Noktası-5: Basketbol Topu, Yaylı Araba ve Eğik Düzlem Deneyleri',
      badge: 'Dönüşüm Deneyleri',
      qrInfo: {
        title: 'EBA: "Enerji Dönüşümü" Etkileşimli İçeriği (s. 75)',
        description: 'Ders kitabının 75. sayfasındaki enerji dönüşümü simülasyon ve form karekodları.',
        type: 'interactive'
      },
      content: `DENEY DÜZENEKLERİ (Sayfa 74-75):
1. Basketbol Topu: Omuz hizasından serbest bırakıldığında düşerken potansiyel kinetiğe, yere çarpıp sıkışırken esneklik potansiyeline, tekrar yukarı zıplarken kinetik çekim potansiyeline dönüşür.
2. Yaylı Maket Araba: Sıkışan yaydaki ESNEKLİK POTANSİYEL ENERJİSİ, serbest bırakılınca arabanın KİNETİK ENERJİSİNE dönüşür.
3. Eğik Düzlem: Tepeden bırakılan araba aşağı indikçe çekim potansiyeli kinetik enerjiye dönüşür; zeminde hız maksimuma ulaşır.`,
      prompt: `Değerlendirme Soruları (s. 75):
1. Sallanan sarkaçta potansiyel ve kinetik enerji değişimi nasıldır?
2. Sıkıştırılan yayın serbest bırakılmasıyla hangi dönüşüm gerçekleşir?
3. Kinetik ve potansiyel enerji arasındaki dönüşümden hareketle toplam mekanik enerji hakkında nasıl bir genelleme yapabilirsiniz?`,
      interactiveAnswer: `ETKİNLİK NOKTASI-5 DEĞERLENDİRME ÇÖZÜMLERİ:
1. Sarkaç Değişimi:
   Yükseklik arttıkça kinetik enerji azalır, potansiyel enerji artar. Yükseklik azaldıkça potansiyel enerji kinetik enerjiye dönüşür.

2. Yay Dönüşümü:
   Yayın sıkıştırılmasıyla depolanan ESNEKLİK POTANSİYEL ENERJİSİ, fırlayan arabaya aktarılarak KİNETİK ENERJİYE dönüşür.

3. Toplam Enerji Genellemesi (Enerjinin Korunumu):
   Sürtünmesiz bir ortamda kinetik enerji ile potansiyel enerjinin toplamı (Mekanik Enerji) DAİMA SABİT KALIR. Enerji kaybolmaz, yoktan var edilemez; yalnızca bir türden diğerine dönüşür.`
    },
    {
      id: 'ib-g7-2-2-p76-77-enerjinin-korunumu-ve-cezeri',
      pageNumber: 'Sayfa 76-78',
      type: 'performans_istasyonu',
      title: 'Enerjinin Korunumu Kanunu, Balık Kılçığı Diyagramı & Cezerî',
      badge: 'Enerjinin Korunumu',
      qrInfo: {
        title: 'EBA: Enerji Dönüşümleri Değerlendirme Formu (s. 76)',
        description: 'Ders kitabının 76. sayfasındaki performans görevi değerlendirme form karekodu.',
        type: 'interactive'
      },
      content: `ENERJİNİN KORUNUMU VE SÜRTÜNME (Sayfa 76-78):
• Kanun: Enerji yoktan var olamaz, var olan enerji de yok olamaz; ancak başka bir enerji türüne dönüşür.
• Sürtünme Kuvvetinin Etkisi: Gerçek hayatta hareketli cisimler sürtünme nedeniyle kinetik enerjilerinin bir kısmını ISI ve SES enerjisine dönüştürür. Bu nedenle hareketli cisimler bir süre sonra yavaşlayıp durur.
• CEZERÎ (1181-1206 - Tarihe Not Düşenler s. 77): Artuklu sarayında başmühendislik yapan İslam bilgini. "Kitab-ül Hiyel" (Mekanik Biliminde Bilgi ve Uygulamanın Bağdaştırılması) adlı eseriyle sibernetik ve robotik biliminin kurucusudur. Su saatleri, fıskiyeler ve otomatik müzik aletlerini YER ÇEKİMİ POTANSİYEL ENERJİSİ ve şamandıra mekanizmalarıyla çalıştırmıştır.`,
      prompt: `Performans Görevi Sorusu:
Enerji dönüşümlerini özetleyen bir balık kılçığı diyagramı hazırlayınız. Balığın başı "Enerjinin Korunumu", kılçıkları kinetik, potansiyel, ısı ve sürtünme faktörleridir. Performans sonucunda ne öğrendiniz?`,
      interactiveAnswer: `PERFORMANS KAZANIMI VE CEVAP:
• "Performans sonucunda ne öğrendiniz?" Cevabı:
  Doğadaki hiçbir enerjinin kaybolmadığını; sürtünme nedeniyle yavaşlayan bir arabanın veya duran bir sarkacın enerjisinin yok olmadığını, temas yüzeyinde hissedilmeyen mikro ısı enerjisine ve sese dönüştüğünü; Cezerî'nin mekanik tasarımlarında da bu enerji dönüşüm ilkelerini dahiyane bir şekilde kullandığını öğrendik.`
    },
    {
      id: 'ib-g7-2-2-p78-80-kaykayci-ve-iz-birakanlar',
      pageNumber: 'Sayfa 78-80',
      type: 'bilgi_kutusu',
      title: 'Kaykaycı Anıl’ın Hareketi & İz Bırakanlar (Galileo, Joule, Helmholtz, Rankine)',
      badge: 'İz Bırakanlar',
      content: `KAYKAYCI ANIL VE BİLİM İNSANLARI (Sayfa 78-81):
• Kaykaycı Anıl (s. 78):
  - A ve B konumları arası: Yükseklik azalır, Potansiyel Azalır, Kinetik ARTAR.
  - B ve C konumları arası: Yükseklik artar, Potansiyel ARTAR, Kinetik AZALIR.
  - Sürtünme ihmal edilmezse: Her gidiş-gelişte mekanik enerjinin bir kısmı ısıya dönüşür; Anıl tepeye daha az tırmanır ve sonunda B noktasında durur.
• BİLİM TARİHİNE İZ BIRAKANLAR (s. 80):
  1. Galileo Galilei (1564-1642): Sarkaç periyodu ve eğik düzlemde serbest düşüş hareketlerini keşfetti.
  2. James Prescott Joule (1818-1889): Mekanik iş ile ısı enerjisinin eşdeğer olduğunu deneysel olarak ispatladı. İş ve enerji birimine adı verildi.
  3. Hermann von Helmholtz (1821-1894): Enerjinin korunumu kanununu matematiksel formülasyonla ilk kez tescil etti.
  4. William John Macquorn Rankine (1824-1907): Termodinamiğin kurucularındandır; mekanik enerjide "potansiyel enerji" terimini literatüre kazandırdı.`
    },
    ...unit2EndItemsG7
  ],
  'g7-u2-end': unit2EndItemsG7
};

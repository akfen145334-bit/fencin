import { InteractiveBookItem } from '../../types/curriculum';

/**
 * 6. SINIF FEN BİLİMLERİ 1. KİTAP - TEKRAR DİZAYN SİSTEMİ
 * 2. ÜNİTE: KUVVETİN ETKİSİNDE HAREKET (Sayfa 44 - 79)
 */

export const unit2EndItemsG6: InteractiveBookItem[] = [
  {
    id: 'ib-g6-u2-end-p77-a-bosluk',
    pageNumber: 'Sayfa 77',
    type: 'on_degerlendirme',
    title: '2. Ünite Sonu İstasyonu - A: Boşluk Doldurma Cümleleri (1-9)',
    badge: 'Ünite Sonu A',
    prompt: `A. Boşluk Doldurma Cümleleri (s. 77):
[Kelimeler: sıfır, kuzey, toplanarak, sürat, doğrultusu, fazla, aynı, az, yönü, hız]

1. Bir cisme etki eden kuvvetin uygulama noktası, büyüklüğü, ……………… ve yönü vardır.
2. Kuzey-güney doğrultusunda olan bir kuvvetin yönü, ……………… veya güney olabilir.
3. Bir cisme etki eden kuvvetler aynı doğrultuda ve aynı yönde ise bileşke kuvvet büyüklüğü, kuvvetlerin büyüklükleri ……………… bulunur.
4. Sabit süratli hareket eden bir cisme uygulanan kuvvetlerin bileşkesi ……………… ise cisim sabit süratle hareket edebilir.
5. Bir cisme ……………… yönlü kuvvetler etki ediyorsa bileşke kuvvetin yönü de etki eden kuvvetler ile aynıdır.
6. Bir cismin birim zamanda aldığı yol ……………… olarak adlandırılır.
7. Doğrusal bir parkuru tamamlayan iki araçtan parkuru daha kısa sürede tamamlayan aracın hızı daha ……………… olur.
8. Aynı sürede daha az yol alan hareketli cismin sürati daha ……………… olur.
9. Yer değiştirme ……………… olan bir büyüklüktür.`,
    interactiveAnswer: `A. BOŞLUK DOLDURMA ÇÖZÜM ANAHTARI (SAYFA 77):
1. DOĞRULTUSU (Kuvvetin 4 temel özelliği: Uygulama noktası, büyüklük, doğrultu ve yön).
2. KUZEY (Kuzey-güney doğrultusu birbirine zıt iki yönü kapsar: Kuzey veya Güney).
3. TOPLANARAK (Aynı yönlü kuvvetlerde R = F1 + F2 formülü uygulanır).
4. SIFIR (Dengelenmiş kuvvetler etkisinde cisim sabit süratle hareketine devam eder).
5. AYNI (Kuvvetler aynı yönlüyse bileşke de o yöndedir).
6. SÜRAT (Birim zamanda alınan toplam yol sürattir).
7. FAZLA (Kısa sürede bitiren hareketlinin hızı daha büyüktür).
8. AZ (Aynı sürede daha az yol alanın sürati daha düşüktür).
9. YÖNÜ (Yer değiştirme başlangıçtan bitişe yönlü/vektörel bir büyüklüktür).`
  },
  {
    id: 'ib-g6-u2-end-p77-b-klasik',
    pageNumber: 'Sayfa 77',
    type: 'pekistirme_istasyonu',
    title: '2. Ünite Sonu İstasyonu - B: Açık Uçlu Soru ve Hesaplamalar (1-3)',
    badge: 'Ünite Sonu B',
    prompt: `B. Aşağıdaki soruları cevaplayınız (s. 77):
1. Bir cisme aynı yönde, büyüklükleri 3 N ve 5 N olan kuvvetler uygulanıyor. Buna göre bu cisme etki eden bileşke kuvvetin büyüklüğü kaç N’dır?
2. Bir cisme aynı doğrultuda, 3 N, 4 N ve 5 N büyüklüğünde üç kuvvet etki edecektir. Bu cisme etki eden bileşke kuvvetin değeri en büyük ve en küçük kaç N olabilir?
3. K noktasından koşmaya başlayan bir sporcu, P noktasına kadar 200 metre koşup geri dönerek M noktasına ulaşıyor (K-L: 50 m, L-M: 50 m, M-N: 50 m, N-P: 50 m, P-R: 50 m).
   Buna göre sporcunun aldığı yol ve yer değiştirme kaç metredir?`,
    interactiveAnswer: `B. SORU VE HESAPLAMA ÇÖZÜMLERİ (SAYFA 77):
1. Soru Çözümü:
   Aynı yönlü kuvvetler toplanır:
   R = F1 + F2 = 3 N + 5 N = 8 N (Uygulanan kuvvetlerin yönündedir).

2. Soru Çözümü:
   • En Büyük Değer: Üç kuvvet de aynı yönde uygulandığında:
     R_en_büyük = 3 + 4 + 5 = 12 N.
   • En Küçük Değer: Zıt yön kombinasyonları denenir:
     (3 N + 4 N = 7 N Doğuya) ve (5 N Batıya) ➔ R = 7 - 5 = 2 N.
     Veya (3 N + 5 N = 8 N Doğuya) ve (4 N Batıya) ➔ R = 8 - 4 = 4 N.
     Veya (4 N + 5 N = 9 N Doğuya) ve (3 N Batıya) ➔ R = 9 - 3 = 6 N.
     Dolayısıyla en küçük bileşke değer 2 N olabilir!

3. Soru Çözümü (K'den başlayıp P'ye gidip M'ye dönen sporcu):
   • Alınan Yol = (K'den P'ye gidiş) + (P'den M'ye dönüş)
     K ➔ P arası mesafe = 50 + 50 + 50 + 50 = 200 m
     P ➔ M arası dönüş mesafesi = 50 + 50 = 100 m
     Toplam Alınan Yol = 200 + 100 = 300 METRE.
   • Yer Değiştirme = Başlangıç (K) ile Bitiş (M) arasındaki en kısa doğrusal mesafe:
     K ➔ M arası = 50 + 50 = 100 METRE DOĞU YÖNÜNDEDİR!`
  },
  {
    id: 'ib-g6-u2-end-p78-c1-robot-oyunu',
    pageNumber: 'Sayfa 78',
    type: 'etkinlik_istasyonu',
    title: '2. Ünite Sonu İstasyonu - C-1: Cisimlerin Bileşke Kuvvetleri & Robot Yönergesi',
    badge: 'Robot Oyunu & Çizim',
    prompt: `C-1 Soruları (s. 78):
K cismi: Doğuya 1 N, Doğuya 3 N (F1=1 N, F2=3 N)
L cismi: Kuzeye 1 N, Kuzeye 2 N, Güneye 4 N
M cismi: Doğuya 5 N, Batıya 2 N

1. Soru: Bu cisimlere etki eden bileşke kuvvetlerle ilgili hangisi DOĞRUDUR?
A) K cismine etki eden bileşke kuvvet sıfırdır.
B) L cismine etki eden bileşke kuvvet doğu yönündedir.
C) M cismine etki eden bileşke kuvvetin büyüklüğü 3 N değerindedir.
D) K, L ve M cisimlerine etki eden bileşke kuvvetlerin doğrultuları aynıdır.

2. Soru: Robot oyununda yönerge:
- K cismine etki eden bileşkeyi başlangıçtan çiz.
- Ucuna L cismine etki eden bileşkeyi ekle.
- Ucuna M cismi için DENGELEYİCİ kuvveti çiz.
Hangi çizim doğrudur? (Her kare 1 N).`,
    interactiveAnswer: `C-1 ANALİZ VE ROBOT OYUNU ÇÖZÜMLERİ:
1. Soru Analizi:
   • K cismi: R_K = 1 N + 3 N = 4 N DOĞU.
   • L cismi: Kuzeye 1+2=3 N, Güneye 4 N ➔ R_L = 4 - 3 = 1 N GÜNEY.
   • M cismi: Doğuya 5 N, Batıya 2 N ➔ R_M = 5 - 2 = 3 N DOĞU.
   🎯 Doğru Cevap: C Şıkkı (M cismine etki eden bileşke kuvvet 3 N'dır).

2. Soru Robot Çizim Analizi:
   • 1. Adım: K bileşkesi ➔ 4 birim DOĞUYA çizilir (➔➔➔➔).
   • 2. Adım: Ucundan L bileşkesi ➔ 1 birim GÜNEYE çizilir (⬇).
   • 3. Adım: M'nin bileşkesi 3 N Doğu olduğuna göre DENGELEYİCİ KUVVETİ 3 birim BATIYA (⬅⬅⬅) çizilmelidir!
   🎯 Bu rotayı birebir veren seçenek B ŞIKKIDIR!`
  },
  {
    id: 'ib-g6-u2-end-p79-c2-oryantiring-eba',
    pageNumber: 'Sayfa 79',
    type: 'karekod',
    title: '2. Ünite Sonu İstasyonu - C-2: Oryantiring Parkuru & EBA Karekodları',
    badge: 'Oryantiring & Karekod',
    prompt: `Metin: İki koşucu oryantiring yarışmasında haritada başlangıç ve bitiş noktası aynı olan parkurlarda koşmuş ve ikisi de 1200 saniyede bitirmiştir.
1. Yarışmacı haritada daha dolambaçlı uzun rotadan gitmiş; 2. yarışmacı daha kestirme rotadan gitmiştir.

1. Yarışmacıların aldıkları yollar ve yer değiştirmeler için hangisi doğrudur?
A) Aldıkları yollar birbirine eşittir.
B) 1. yarışmacı daha çok yer değiştirmiştir.
C) Yer değiştirmeleri birbirine eşittir (ikisi de sıfırdır!).
D) 2. yarışmacı daha çok yer değiştirmiştir.

2. Süratleri için hangisi doğrudur?
A) Süratleri eşittir.  B) İkisinin de süratleri sıfırdır.
C) 1. yarışmacı daha süratlidir.  D) 2. yarışmacı daha süratlidir.

3. Hızları için hangisi doğrudur?
A) İkisinin de hızı sıfırdır (Yer değiştirme 0 olduğu için Hız = 0 / 1200 = 0!).`,
    interactiveAnswer: `C-2 ORYANTİRİNG SORULARI ÇÖZÜMLERİ:
1. Soru Çözümü:
   Başlangıç noktası ile bitiş noktası AYNI olduğu için her iki koşucunun da YER DEĞİŞTİRMESİ SIFIRDIR (0 m). Dolayısıyla yer değiştirmeleri birbirine eşittir!
   🎯 Doğru Cevap: C Şıkkı.

2. Soru Çözümü:
   Süreler eşit (1200 s) iken 1. yarışmacı daha uzun ve dolambaçlı yol almıştır. Sürat = Yol / Zaman formülüne göre alınan yol fazla olan 1. yarışmacı daha süratlidir.
   🎯 Doğru Cevap: C Şıkkı.

3. Soru Çözümü:
   Hız = Yer Değiştirme / Zaman. İkisinin de yer değiştirmesi 0 metre olduğuna göre ikisinin de HIZI SIFIRDIR!
   🎯 Doğru Cevap: A Şıkkı.` ,
    qrInfo: {
      title: 'EBA: 2. Ünite Kuvvet ve Hareket Ölçme Testi & Bilim Güncesi (s. 79)',
      description: 'Ders kitabının 79. sayfasındaki MEB EBA değerlendirme ve bilim güncesi etkileşim karekodları.',
      type: 'evaluation'
    }
  }
];

export const grade6Book1FlowsUnit2: Record<string, InteractiveBookItem[]> = {
  'g6-u2-sub1': [
    {
      id: 'ib-g6-2-1-p44-46-kapak-on-degerlendirme',
      pageNumber: 'Sayfa 44-46',
      type: 'on_degerlendirme',
      title: '2. Ünite Girişi: Kuvvetin Etkisinde Hareket & Ön Değerlendirme İstasyonu',
      badge: 'Ünite Girişi & Ön Değerlendirme',
      qrInfo: {
        title: 'EBA: 2. Ünite Tanıtım ve Özet E-İçerik Karekodu (s. 45)',
        description: 'Ders kitabının 45. sayfasındaki MEB EBA "Kuvvetin Etkisinde Hareket" video animasyon karekodları.',
        type: 'video'
      },
      prompt: `Ön Değerlendirme İstasyonu (s. 44-46):
1. Kuvvetin etkileri haritasını doldurunuz:
   - Kaykaya hareketi yönünde kuvvet uygulanması ➔ ?
   - Futbolcunun duran topa vurması ➔ ?
   - Kâğıdın buruşturulması ➔ ?
   - Kalecinin topu tutması ➔ ?
   - Bisikletin frenine basılması ➔ Yavaşlatma
   - Topacın döndürülmesi ➔ ?
   - Tenisçinin servisi karşılaması ➔ ?
2. Kuvvet ne ile ölçülür ve birimi nedir?`,
      interactiveAnswer: `ÖN DEĞERLENDİRME ÇÖZÜMÜ:
1. Kuvvetin Etkileri:
   - Kaykaya hareket yönünde kuvvet: HIZLANDIRMA etkisi.
   - Duran topa vurma: HAREKET ETTİRME (Hızlandırma) etkisi.
   - Kâğıdın buruşturulması: ŞEKİL DEĞİŞTİRME etkisi.
   - Kalecinin topu tutması: DURDURMA etkisi.
   - Bisiklet frenine basılması: YAVAŞLATMA etkisi.
   - Topacın döndürülmesi: DÖNDÜRME etkisi.
   - Tenisçinin servisi karşılaması: YÖN DEĞİŞTİRME etkisi.
2. Ölçüm Aleti ve Birim:
   Kuvvet DİNAMOMETRE ile ölçülür; birimi NEWTON'dır (N).`
    },
    {
      id: 'ib-g6-2-1-p47-48-bileske-kuvvet-4-ozellik',
      pageNumber: 'Sayfa 47-48',
      type: 'bilgi_kutusu',
      title: 'Kuvvetin 4 Temel Özelliği & Gösterimi (F1 ve F2)',
      badge: 'Kuvvetin Nitelikleri',
      qrInfo: {
        title: 'EBA: "Kuvvet" Etkileşimli İçeriği (s. 48)',
        description: 'Ders kitabının 48. sayfasındaki kuvvetin yön, doğrultu ve büyüklük simülasyonu.',
        type: 'interactive'
      },
      content: `KUVVETİN 4 TEMEL NİTELİĞİ (Sayfa 48):
1. Uygulama Noktası: Kuvvetin cisme değdiği/etki ettiği başlangıç noktası (A noktası).
2. Yönü: Kuvvetin uygulandığı yön (Doğu, Batı, Kuzey, Güney). Okun ucunun gösterdiği taraftır.
3. Doğrultusu: Birbirine zıt iki yönü içine alan sonsuz çizgi (Doğu-Batı veya Kuzey-Güney).
4. Büyüklüğü: Kuvvetin sayısal şiddetidir (Örn: 10 N). Vektörün uzunluğu ile temsil edilir.
• Tablo İncelemesi: F1 = 3 N Doğu (Doğu-Batı doğrultusu); F2 = 2 N Batı (Doğu-Batı doğrultusu).`
    },
    {
      id: 'ib-g6-2-1-p49-etkinlik-1-kamyon-analizi',
      pageNumber: 'Sayfa 49',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu-1: Duran Kamyona Uygulanan Zıt Kuvvetler',
      badge: 'Etkinlik & Analiz',
      prompt: `Duran sarı kamyona A noktasından F1 = 4 N Batı, B noktasından F2 = 4 N Doğu yönünde kuvvet uygulanıyor (s. 49).
1. F1 ve F2 kuvvetlerinin özelliklerini yazınız.
2. Sorular:
   a. Kuvvetlerin doğrultuları ve yönleri aynı mıdır?
   b. F1 kuvvetinin büyüklüğü daha fazla olsaydı ne olurdu?
   c. F2 kuvveti batı yönünde uygulansaydı ne olurdu?`,
      interactiveAnswer: `ETKİNLİK İSTASYONU-1 ÇÖZÜMLERİ:
1. Kuvvet Özellikleri:
   - F1: Uygulama Noktası = A, Yönü = Batı, Doğrultusu = Doğu-Batı, Büyüklüğü = 4 N.
   - F2: Uygulama Noktası = B, Yönü = Doğu, Doğrultusu = Doğu-Batı, Büyüklüğü = 4 N.
2. Analiz Yanıtları:
   a. Doğrultuları AYNIDIR (Doğu-Batı); fakat yönleri ZITTIR (biri Batı, diğeri Doğu).
   b. F1 daha büyük olsaydı (örneğin 6 N), bileşke kuvvet batı yönünde olur ve kamyon BATIYA DOĞRU HIZLANARAK HAREKET EDERDİ.
   c. F2 de batı yönünde uygulansaydı, iki kuvvet toplanır (4 + 4 = 8 N) ve kamyon çok daha büyük bir ivmeyle batıya hareket ederdi.`
    },
    {
      id: 'ib-g6-2-1-p50-51-pekistirme-1-ve-2-cisimler',
      pageNumber: 'Sayfa 50-51',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu 1 & 2: Cisimlere Etki Eden Kuvvetler',
      badge: 'Kuvvet Diyagramları',
      prompt: `Pekiştirme İstasyonu-2 Örnekleri (s. 51):
1. Kırmızı Araba: F1 = 3 N Batı, F2 = 5 N Doğu
2. Evrak Çantası: F1 = 2 N Yukarı (Kuzey), F2 = 2 N Yukarı (Kuzey)
3. Market Arabası: F1 = 3 N Batı, F2 = 5 N Doğu
4. Basketbol Topu: F1 = 3 N Kuzey, F2 = 2 N Güney
Cisimlerin hareket durumlarını yorumlayınız.`,
      interactiveAnswer: `PEKİŞTİRME İSTASYONU-2 ÇÖZÜMLERİ:
1. Kırmızı Araba: Zıt yönlüdür. R = 5 - 3 = 2 N DOĞU yönünde. Araba doğuya doğru hareket eder.
2. Evrak Çantası: Aynı yönlüdür (ikisi de yukarı). R = 2 + 2 = 4 N YUKARI (Kuzey). Çanta yukarı doğru kaldırılır.
3. Market Arabası: Zıt yönlüdür. R = 5 - 3 = 2 N DOĞU yönünde. Araba doğuya doğru sürülür.
4. Basketbol Topu: Zıt yönlüdür. R = 3 - 2 = 1 N KUZEY yönünde. Top yukarıya doğru hareket eder.`
    },
    {
      id: 'ib-g6-2-1-p52-53-masa-deneyi-ve-net-kuvvet',
      pageNumber: 'Sayfa 52-53',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu-2: Öğretmen Masası İtme/Çekme 6 Durum Analizi',
      badge: 'Masa Deneyi & Formül',
      prompt: `Masa üzerinde 6 farklı durum test ediliyor (s. 52-53):
1. Durum: Bir kişi doğuya itiyor.
2. Durum: İki kişi doğuya itiyor.
3. Durum: Karşılıklı zıt yönlerde eşit kuvvet uyguluyorlar.
4. Durum: İki kişi batı yönünde itiyor.
5. Durum: Biri batıya itiyor, diğeri batıya çekiyor.
6. Durum: İki kişi batıya, bir kişi doğuya uyguluyor.
Sorular:
a. Hangi durumlarda hareket en fazladır?
b. 3. durumda masanın hareketi nedir?
c. Masa hangi durumlarda batı yönünde hareket eder?
d. Bileşke kuvvetin (net kuvvet) tanımı nedir?`,
      interactiveAnswer: `MASA ETKİNLİĞİ DEĞERLENDİRME ÇÖZÜMÜ:
a. En Fazla Kuvvet Etkisi: 2. durum (iki kişi doğu) ve 5. durum (biri itiyor biri çekiyor, ikisi de batı yönünde). İki kuvvet toplanır ve en büyük net kuvvet oluşur.
b. 3. Durum: Zıt yönlü ve eşit büyüklükte kuvvetler birbirini sıfırlar (R = F - F = 0). Masa HAREKETSİZ KALIR (DENGEDEDİR).
c. Batıya Hareket: 4. durum (iki kişi batı), 5. durum (itme+çekme batı) ve 6. durum (iki kişi batıya çekerken bir kişi doğuya direnirse 2F - F = F batı yönünde kalır).
d. Bileşke Kuvvet (Net Kuvvet) Tanımı: Bir cisme etki eden birden fazla kuvvetin yaptığı etkiyi tek başına gerçekleştiren hayalî toplam kuvvettir (R).`
    },
    {
      id: 'ib-g6-2-1-p54-56-hesaplamalar-ve-bileske-kurallari',
      pageNumber: 'Sayfa 54-56',
      type: 'bilgi_kutusu',
      title: 'Bileşke Kuvvet Kuralları, Yolda Kalan Araba & EBA Karekodu',
      badge: 'Bileşke Kuralları',
      qrInfo: {
        title: 'EBA: "Bileşke Kuvveti Bulalım" & "Bileşke Kuvvetin Nitelikleri" (s. 54-56)',
        description: 'Ders kitabının 54 ve 56. sayfalarındaki MEB EBA etkileşimli içerik karekodları.',
        type: 'interactive'
      },
      content: `BİLEŞKE KUVVETİN ALTIN KURALLARI (Sayfa 56):
1. Aynı Doğrultulu ve Aynı Yönlü Kuvvetler:
   Kuvvetler doğrudan TOPLANIR: R = F1 + F2. Bileşke kuvvet kuvvetlerin yönündedir.
   Örnek: Doğuya 3 N ve Doğuya 4 N ➔ R = 3 + 4 = 7 N Doğu.
2. Aynı Doğrultulu ve Zıt Yönlü Kuvvetler:
   Büyük kuvvetten küçük kuvvet ÇIKARILIR: R = F_büyük - F_küçük. Bileşke kuvvet büyük olan kuvvetin yönündedir.
   Örnek: Batıya 4 N ve Doğuya 3 N ➔ R = 4 - 3 = 1 N Batı.
• KÖPRÜ İSTASYONU (Sayfa 54):
  Çamura saplanan bir arabayı tek kişi itemezken, birkaç kişi aynı yönde kuvvet uyguladığında kuvvetler birleşir (R büyür), sürtünme aşılır ve araba hareket eder. Bu durum birlik ve dayanışmanın fiziksel kanıtıdır.`
    },
    {
      id: 'ib-g6-2-1-p57-59-dengelenmis-dengelenmemis-ve-dengeleyici',
      pageNumber: 'Sayfa 57-59',
      type: 'bilgi_kutusu',
      title: 'Dengelenmiş vs Dengelenmemiş Kuvvetler & Dengeleyici Kuvvet',
      badge: 'Denge & Dengeleyici',
      content: `DENGE DURUMLARI VE ETKİLERİ (Sayfa 59):
• DENGELENMİŞ KUVVETLER (R = 0):
  Bileşke kuvvet sıfırdır.
  - Cisim duruyorsa DURMAYA DEVAM EDER (masadaki kitap, duvardaki tablo).
  - Cisim hareket ediyorsa SABİT SÜRATLE yoluna devam eder (sabit süratli araba).
• DENGELENMEMİŞ KUVVETLER (R ≠ 0):
  Bileşke kuvvet sıfırdan farklıdır. Cisim duruyorsa bileşke yönünde harekete geçer; hareket halindeyse HIZLANABİLİR, YAVAŞLAYABİLİR veya YÖN DEĞİŞTİREBİLİR (daldan düşen elma, fren yapan araba, yukarı fırlatılan top).
• DENGELEYİCİ KUVVET:
  Cisme etki eden bileşke kuvveti sıfır yapan kuvvettir.
  Özelliği: Bileşke kuvvet ile AYNI BÜYÜKLÜKTE, AYNI DOĞRULTUDA fakat ZIT YÖNDEDİR!
  Örnek: Cisme etki eden bileşke kuvvet R = 5 N Doğu ise Dengeleyici Kuvvet = 5 N BATI'dır!`
    },
    {
      id: 'ib-g6-2-1-p60-63-deney-ve-pekistirme-5-6',
      pageNumber: 'Sayfa 60-63',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu 5 & 6: Grafik Okuma ve 3. Kuvvet Hesaplamaları',
      badge: 'Grafik & Problem Çözümü',
      qrInfo: {
        title: 'EBA: "Dengeleyici Kuvvet" Etkileşimli İçeriği (s. 61)',
        description: 'Ders kitabının 61. sayfasındaki dengeleyici kuvveti bulma simülasyonu karekodu.',
        type: 'interactive'
      },
      prompt: `Pekiştirme İstasyonu-5 & 6 Soruları:
1. Grafik: F1 = 6 N Batı, F2 = 10 N Doğu.
   - Bileşke kuvvet nedir ve cisim dengelenmiş midir?
   - Dengeleyici kuvvet nedir?
2. F1 = 5 N Batı, F2 = 3 N Doğu uygulanan bir cisimde Dengeleyici Kuvvet = 4 N Batı olarak veriliyor. Cisme etki eden 3. kuvvet (F3) ve Bileşke kuvvet nedir?
3. Günlük yaşam örneklerini işaretleyiniz: Daldan düşen elma, Hızlanan araba, Sabit süratli bisiklet, Masada duran kitap, Yukarı atılan top, Duvardaki tablo. Hangileri dengelenmiş kuvvetler etkisindedir?`,
      interactiveAnswer: `PEKİŞTİRME İSTASYONU 5 & 6 ÇÖZÜMLERİ:
1. Grafik Analizi:
   - Bileşke Kuvvet: R = 10 (Doğu) - 6 (Batı) = 4 N DOĞU yönündedir.
   - Cisim R ≠ 0 olduğu için DENGELENMEMİŞ KUVVETLER ETKİSİNDEDİR.
   - Dengeleyici Kuvvet: Bileşkeye eşit ve zıt yönde ➔ 4 N BATI yönündedir.

2. Üçüncü Kuvvet Bulma Analizi:
   - Dengeleyici kuvvet 4 N Batı ise, BİLEŞKE KUVVET 4 N DOĞU olmalıdır!
   - Mevcut iki kuvvet: 5 N Batı + 3 N Doğu = 2 N Batı.
   - Net kuvvetin 4 N Doğu olabilmesi için: F3 = 6 N DOĞU olmalıdır! (Çünkü 3 + 6 = 9 N Doğu; 9 - 5 = 4 N Doğu olur!).

3. Dengelenmiş Kuvvetler Etkisindeki Örnekler:
   ✓ SABİT SÜRATLİ BİSİKLET (Sürat değişmediği için net kuvvet 0'dır).
   ✓ MASADA DURAN KİTAP (Hareketsiz durduğu için net kuvvet 0'dır).
   ✓ DUVARDAKİ TABLO (Hareketsiz durduğu için net kuvvet 0'dır).
   (Daldan düşen elma, hızlanan araba ve yukarı atılan top ise hızları değiştiği için DENGELENMEMİŞ kuvvetlerdedir).`
    }
  ],
  'g6-u2-sub2': [
    {
      id: 'ib-g6-2-2-p64-67-sabit-surat-ve-hiz-giris',
      pageNumber: 'Sayfa 64-67',
      type: 'etkinlik_istasyonu',
      title: '2. Bölüm: Sabit Süratli ve Sabit Hızlı Hareket & Alınan Yol / Yer Değiştirme',
      badge: 'Yol vs Yer Değiştirme',
      qrInfo: {
        title: 'EBA: "Alınan Yol ve Yer Değiştirme" Etkileşimli İçeriği (s. 67)',
        description: 'Ders kitabının 67. sayfasındaki doğrusal ve eğrisel yörünge simülasyonu karekodu.',
        type: 'interactive'
      },
      content: `ALINAN YOL İLE YER DEĞİŞTİRME ARASINDAKİ FARK (Sayfa 66-67):
• Alınan Yol: Cismin izlediği rotanın toplam uzunluğudur. Yönsüzdür (skaler).
• Yer Değiştirme: Başlangıç noktası ile bitiş noktası arasındaki en kısa yönlü doğrusal mesafedir (vektörel).
• Eylül'ün Okulu (Görsel 2.2.1): Kıvrımlı yoldan 500 m yürüyor (Alınan Yol = 500 m); kuş uçuşu doğrudan doğuya mesafe 300 m (Yer Değiştirme = 300 m Doğu).
• Ev-Park-Ev Örneği (Görsel 2.2.3): Parka 300 m gidip eve 300 m dönüyor. Alınan Yol = 600 m; başladığı yere döndüğü için YER DEĞİŞTİRME = 0 METRE!`
    },
    {
      id: 'ib-g6-2-2-p68-70-parkur-surat-ve-hiz-hesaplama',
      pageNumber: 'Sayfa 68-70',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu 7 & Pekiştirme İstasyonu-7: Sürat ve Hız Formülleri',
      badge: 'Formül & Birimler',
      qrInfo: {
        title: 'EBA: "Sürat ve Hız Aynı mıdır?" Etkileşimli İçeriği (s. 69)',
        description: 'Ders kitabının 69. sayfasındaki sürat ve hız kavramları karşılaştırması karekodu.',
        type: 'interactive'
      },
      prompt: `Pekiştirme İstasyonu-7 Soruları (s. 70):
Tablo 1: K aracı 5 saatte 400 km yol alıyor; L aracı 8 saatte 400 km yol alıyor.
- Hangi aracın sürati daha fazladır, neden?
Tablo 2: M aracı 5 saatte 360 km yer değiştiriyor; N aracı 5 saatte 400 km yer değiştiriyor.
- Hangi aracın hızı daha fazladır, neden?`,
      interactiveAnswer: `SÜRAT VE HIZ HESAPLAMA ÇÖZÜMLERİ:
1. Sürat Karşılaştırması:
   • K aracının sürati: Sürat = Yol / Zaman = 400 km / 5 h = 80 km/h.
   • L aracının sürati: Sürat = Yol / Zaman = 400 km / 8 h = 50 km/h.
   ➔ K aracının sürati daha fazladır; çünkü aynı yolu daha kısa sürede almıştır.

2. Hız Karşılaştırması:
   • M aracının hızı: Hız = Yer Değiştirme / Zaman = 360 km / 5 h = 72 km/h.
   • N aracının hızı: Hız = Yer Değiştirme / Zaman = 400 km / 5 h = 80 km/h.
   ➔ N aracının hızı daha fazladır; çünkü aynı sürede daha büyük yer değiştirme yapmıştır.`
    },
    {
      id: 'ib-g6-2-2-p71-73-elif-ayse-ve-virajli-yol',
      pageNumber: 'Sayfa 71-73',
      type: 'bilgi_kutusu',
      title: 'Elif ile Ayşe Hikâyesi, Virajlı Yol Köprüsü & Doğu-Batı Örneği',
      badge: 'Hikâye & Analiz',
      content: `SÜRAT VE HIZIN KRİTİK AYRIMI (Sayfa 71-72):
• İki Araba Örneği (Sayfa 71):
  - Biri doğuya her saniyede 10 m gidiyor: Sürati = 10 m/s, Hızı = 10 m/s Doğu.
  - Diğeri batıya her saniyede 10 m gidiyor: Sürati = 10 m/s, Hızı = 10 m/s Batı.
  ➔ Süratleri EŞİTTİR (ikisi de 10 m/s); fakat hızları FARKIDIR çünkü yönleri zıttır!
• KÖPRÜ İSTASYONU (Sayfa 72):
  Virajlı yolda gösterge sabit 40 km/h gösterirken aracın sürati sabittir; ancak virajda yön sürekli değiştiği için aracın HIZI SABİT DEĞİLDİR, SÜREKLİ DEĞİŞİR!`
    },
    {
      id: 'ib-g6-2-2-p74-75-kosucular-ve-pekistirme-8-9',
      pageNumber: 'Sayfa 74-75',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu 8 & 9: İki Koşucu ve K-L-M Harita Rotaları',
      badge: 'Problem Çözümü',
      qrInfo: {
        title: 'EBA: "Kuvvet ve Hız" Müzik Klibi (s. 74)',
        description: 'Ders kitabının 74. sayfasındaki MEB EBA eğitici şarkı klibi karekodu.',
        type: 'video'
      },
      prompt: `Pekiştirme İstasyonu-8 (s. 74):
İki koşucu 200 metrelik parkurda birbirine doğru koşuyor. 1. koşucu bitişe 100 sn'de, 2. koşucu 50 sn'de varıyor.
1. Yer değiştirmeleri kaç metredir?
2. Hangi yönlerde yer değiştirmişlerdir?
3. Süratleri ve hızları kaç m/s'dir?

Pekiştirme İstasyonu-9 (s. 75):
K, L, M araçları aynı noktadan çıkıp aynı sürede bitişe ulaşıyor. K en kıvrımlı, M orta, L ise dümdüz çizgiden gidiyor.
1. Aldıkları yolları sıralayınız.
2. Yer değiştirmelerini karşılaştırınız.
3. Sürati en fazla olan araç hangisidir?
4. Hızlarının büyüklüklerini karşılaştırınız.`,
      interactiveAnswer: `PEKİŞTİRME İSTASYONU 8 & 9 ÇÖZÜMLERİ:
Pekiştirme 8 (Koşucular):
1. Yer Değiştirmeler: İkisi de 200 metredir.
2. Yönler: 1. Koşucu Doğuya, 2. Koşucu Batıya doğru yer değiştirmiştir.
3. Hesaplamalar:
   - 1. Koşucu: Sürat = 200 / 100 = 2 m/s; Hız = 2 m/s Doğu.
   - 2. Koşucu: Sürat = 200 / 50 = 4 m/s; Hız = 4 m/s Batı.

Pekiştirme 9 (K-L-M Harita Analizi):
1. Alınan Yollar: K > M > L (K en çok dönemeçli yolu izlemiştir).
2. Yer Değiştirmeler: K = L = M (Hepsi aynı başlangıç ve aynı bitiş noktasına varmıştır!).
3. Sürati En Fazla Olan: K aracıdır (Aynı sürede en çok yolu almıştır).
4. Hız Büyüklükleri: K = L = M (Süreler ve yer değiştirmeler eşit olduğu için hızları eşittir!).`
    },
    {
      id: 'ib-g6-2-2-p76-cagini-asanlar-hareket',
      pageNumber: 'Sayfa 76',
      type: 'cagini_asanlar',
      title: 'Çağını Aşanlar: İbni Bâcce, Mimar Sinan, Galileo ve Vecihi Hürkuş',
      badge: 'Çağını Aşanlar',
      content: `BİLİM VE TEKNOLOJİ TARİHİ ÖNCÜLERİ (Sayfa 76):
1. İbni Bâcce (1095-1138): Hareket fiziğine eşsiz katkılarda bulunmuş; Aristoteles'in "boşlukta hız sonsuz olur" tezini çürüterek Galileo ve Newton fiziğine zemin hazırlamıştır.
2. Mimar Sinan (1490-1588): Statik denge ve mühendislik dehası. Selimiye Camisi'nde dev kubbeyi 8 taşıyıcı ayak üzerine mükemmel bir kuvvet dağılımıyla oturtmuş, asırlardır depremlere meydan okumuştur.
3. Galileo Galilei (1564-1642): Avizenin salınım hareketini inceleyerek sarkaç periyodunu keşfetmiş, saatin olmadığı dönemde nabız atışlarıyla süreyi ölçmüştür.
4. Vecihi Hürkuş (1896-1969): Türkiye'nin ilk yerli uçağı "Vecihi K-VI"yı (1925) tasarlayıp uçuran ilk Türk pilot ve havacılık mühendisimizdir.`
    },
    ...unit2EndItemsG6
  ],
  'g6-u2-end': unit2EndItemsG6
};

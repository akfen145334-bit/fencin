import { InteractiveBookItem } from '../../types/curriculum';

/**
 * 7. SINIF FEN BİLİMLERİ 2. KİTAP - TEKRAR DİZAYN SİSTEMİ
 * 6. ÜNİTE: ELEKTRİKLENME (Sayfa 102 - 127)
 * 7. ÜNİTE: SÜRDÜRÜLEBİLİR YAŞAM VE ENERJİ (Sayfa 128 - 161)
 */

// --- 6. ÜNİTE SONU İSTASYONLARI ---
export const unit6EndItemsG7B2: InteractiveBookItem[] = [
  {
    id: 'ib-g7-u6-end-p123-dy-bosluk',
    pageNumber: 'Sayfa 123',
    type: 'on_degerlendirme',
    title: '6. Ünite Sonu İstasyonu - A & B: Doğru/Yanlış ve Boşluk Doldurma',
    badge: 'Ünite Sonu A-B',
    prompt: `A. Doğru / Yanlış İfadeleri (s. 123):
1. ( ) Elektriklenme olabilmesi için cisimler arasında temas olması gerekmektedir.
2. ( ) Aynı elektrik yükü ile yüklü cisimler birbirlerine yaklaştırıldığında aralarında itme kuvveti olduğu gözlemlenir.
3. ( ) Sürtünme ile elektriklenmede cisimlerden biri negatif diğeri pozitif yüklü olur.
4. ( ) Elektriklenme olayında cisimler arasında aktarılabilen parçacıklar protonlardır.
5. ( ) Cisimlerin yük durumları sahip oldukları elektriksel yük miktarına göre belirlenir.

B. Boşluk Doldurma Cümleleri (1-10) (s. 123):
[Kelimeler: etki, elektriklenme, nötr cisim, pozitif, dokunma, şimşek, elektroskop, ütü, yük, aynı, yıldırım, zıt, nötron, çekme, elektrikli süpürge]`,
    interactiveAnswer: `A. DOĞRU / YANLIŞ ÇÖZÜMLERİ:
1. YANLIŞ ➔ Doğrusu: Etki (tesir) ile elektriklenmede temas olmadan, uzaktan yaklaştırma ile de elektriklenme gerçekleşebilir.
2. DOĞRU ➔ Aynı yükler (+ ile + veya - ile -) birbirini İTER.
3. DOĞRU ➔ Sürtünen cisimlerden biri elektron kaybedip (+), diğeri elektron alıp (-) zıt yükle yüklenir.
4. YANLIŞ ➔ Doğrusu: Çekirdekteki protonlar sabittir, aktarılmaz; yalnızca katmanlardaki ELEKTRONLAR aktarılabilir.
5. DOĞRU ➔ Pozitif yük fazlaysa pozitif, negatif fazlaysa negatif, eşitse nötr cisim adını alır.

B. BOŞLUK DOLDURMA ÇÖZÜMLERİ:
1. ELEKTRİKLENME (negatif yüklerin yer değiştirmesi)
2. DOKUNMA (sürtünme ve dokunma temas gerektirir)
3. NÖTR CİSİM (pozitif ve negatif yük sayısı eşit olan cisim)
4. ÇEKME (pozitif ve negatif zıt yükler birbirini çeker)
5. ŞİMŞEK (yüklü bulutlar arasında gerçekleşen aktarım)
6. ELEKTROSKOP (cismin yük durumunu ve cinsini belirleyen alet)
7. ETKİ (temas olmadan gerçekleşen elektriklenme)
8. ZIT (sürtünme ile elektriklenen cisimler zıt yüklenir)
9. NÖTRON (atomda elektrik yükü taşımayan yüksüz tanecik)
10. ELEKTRİKLİ SÜPÜRGE (toz tutucu torba elektrostatik filtreleme)`
  },
  {
    id: 'ib-g7-u6-end-p124-126-boyama-ve-kureler-analizi',
    pageNumber: 'Sayfa 124-126',
    type: 'etkinlik_istasyonu',
    title: '6. Ünite Sonu İstasyonu - C: Elektrostatik Boyama, Küreler ve Kâğıt Deneyi',
    badge: 'Elektrostatik Analiz',
    prompt: `1. Balon, Kazak ve Su: Ela balonu yün kazağa sürtüp çeşmeden akan suya yaklaştırıyor. Hangi yollarla elektriklenmişlerdir? (s. 124)
2. Otomobil ve Buzdolabı Boyama: Mustafa Bey arabayı (+) spreyi (+) yüklüyor ve boya tutmuyor; Gökalp Bey buzdolabını (-) spreyi (+) yüklüyor ve boya kusursuz yapışıyor.
   - I. Hatalı ifade hangisidir?
   - II. Boyanın eşit dağılması için boya ve cisim nasıl yüklenmelidir?
3. Nötr V, Y, Z Küreleri (s. 125): Yün kumaşa sürtülen plastik çubuk (-) soldan yaklaştırılıyor ve çubuk çekilmeden küreler ayrılıyor. V, Y, Z'nin son yükleri nedir?
4. K, L, M Yük Grafiği (s. 125): K (+5, -7 ➔ Net -2), L (+1, -1 ➔ Nötr), M (+3, -3 ➔ Nötr). Dokunma etkileşimleri.
6. Gözde'nin Deneyi (s. 126): Plastik çubuk yüne sürtülüyor, kâğıdı çekiyor, kâğıt yapışıyor ve bir süre sonra yere düşüyor!`,
    interactiveAnswer: `DETAYLI DENEY VE ELEKTRİKLENME ÇÖZÜMLERİ:
1. Su ve Balon Elektriklenmesi:
   - Balon ve Kazak: SÜRTÜNME İLE ELEKTRİKLENME (Balon -, kazak +).
   - Akan Su: ETKİ (TESİR) İLE ELEKTRİKLENME (Negatif balon nötr suyun artı yüklerini kendine çeker, su akışı bükülür).

2. Sanayide Boyama Analizi (s. 124):
   - I. Hatalı İfade: C Şıkkı ("Araba pozitif, boya nötr olsaydı itme kuvveti oluşurdu" ifadesi YANLIŞTIR; yüklü cisim nötr cismi daima çeker!).
   - II. Doğru Boyama Prensibi: Boyanacak cisim ile sprey boya ZIT ELEKTRİK YÜKLERİYLE (+ ve -) yüklenmelidir. Böylece boya damlacıkları metale kuvvetle yapışır; aynı zamanda boya tanecikleri birbiriyle aynı yüklü olduğu için birbirini iterek yüzeye eşit, pürüzsüz ve homojen bir tabaka hâlinde yayılır.

3. V, Y, Z Küreleri (s. 125):
   - Negatif (-) plastik çubuk soldan yaklaştırılınca: Elektronları en uzak noktaya (Z küresine) iter.
   - V Küresi: Elektron kaybettiği için POZİTİF (+) yüklenir.
   - Y Küresi: NÖTR (0) kalır.
   - Z Küresi: Fazla elektron toplandığı için NEGATİF (-) yüklenir!

4. K, L, M Cisimleri:
   - K (-2 yüklü) nötr M'ye dokunursa yükü paylaşırlar, ikisi de (-) negatif olur. L cismine (nötr) yaklaştırılırsa çekim kuvveti uygular.

6. Gözde'nin Kâğıt Deneyi Aşamaları (s. 126):
   - a) Gerçekleşen Türler: D Şıkkı (I, II ve III - Sürtünme, Etki ve Dokunma).
   - b) Sıralama: 1. Sürtünme (çubuk yüklenir) ➔ 2. Etki ile (kâğıt kutuplanıp çekilir) ➔ 3. Dokunma ile (kâğıda çubuktan yük geçer).
   - c) Kâğıtların Yere Düşme Nedeni: Kâğıtlar çubuğa dokunduğu anda çubukla AYNI YÜKLE yüklenir. Aynı yükler birbirini İTTİĞİ için çubuk kâğıdı iter ve kâğıtlar yere düşer!`
  },
  {
    id: 'ib-g7-u6-end-p127-bulmaca',
    pageNumber: 'Sayfa 127',
    type: 'karekod',
    title: '6. Ünite Sonu İstasyonu - Ç: Elektriklenme Bulmacası & EBA Karekodları',
    badge: 'Bulmaca & Karekod',
    prompt: `Ç. Elektriklenme Bulmaca Çözümü (s. 127):
Yukarıdan Aşağıya:
2. Cisimlerin elektriklenme ile kazandığı ya da kaybettiği özellik.
3. Cisimlerin yüklü olup olmadığını, yük cinsini gösteren alet.
4. Bulut ile yeryüzü arasındaki yük aktarımı.
5. Kaydıraktan kayarken saçların havalanmasına neden olan elektriklenme.

Soldan Sağa:
1. Zıt elektrik yüklerinin birbirine uyguladığı kuvvet.
6. Proton ve elektronların belirlediği temel elektriksel özellik.
7. Pozitif ve negatif yük sayısı eşit olan cisimlerin durumu.
8. Atomun çekirdeğindeki yüksüz tanecik.
9. Yüklerin bulutlar arasında iletilmesiyle oluşan hava olayı.`,
    interactiveAnswer: `BULMACA CEVAP ANAHTARI (SAYFA 127):
Yukarıdan Aşağıya:
2. ELEKTRİK YÜKÜ
3. ELEKTROSKOP
4. YILDIRIM
5. SÜRTÜNME

Soldan Sağa:
1. ÇEKME KUVVETİ
6. YÜK DURUMU
7. NÖTR
8. NÖTRON
9. ŞİMŞEK`,
    qrInfo: {
      title: 'EBA: 6. Ünite Elektriklenme Ölçme Değerlendirme Testi (s. 126-127)',
      description: 'Ders kitabının 126 ve 127. sayfalarındaki EBA değerlendirme test karekodları.',
      type: 'evaluation'
    }
  }
];

// --- 7. ÜNİTE SONU İSTASYONLARI ---
export const unit7EndItemsG7B2: InteractiveBookItem[] = [
  {
    id: 'ib-g7-u7-end-p158-dy-bosluk',
    pageNumber: 'Sayfa 158',
    type: 'on_degerlendirme',
    title: '7. Ünite Sonu İstasyonu - A & B: Doğru/Yanlış ve Boşluk Doldurma',
    badge: 'Ünite Sonu A-B',
    prompt: `A. Doğru / Yanlış İfadeleri (s. 158):
1. ( ) Besin zinciri, madde ve enerjinin organizmadan organizmaya besin biçiminde aktarılmasıyla oluşan dizidir.
2. ( ) Besin zincirindeki sıralama ayrıştırıcılardan üreticilere doğrudur.
3. ( ) Ekoloji piramidinde biyolojik birikim yukarıdan aşağıya doğru artar.
4. ( ) Atık su evsel, tarımsal, endüstriyel vb. alanlarda oluşan kirlenmiş sulardır.
5. ( ) Tatlı suların tamamı tüm canlıların kullanımı için uygundur.
6. ( ) Su ayak izi yalnızca bireylere ait olabileceği gibi bir ürüne, bölgeye veya ülkeye de ait olabilir.

B. Boşluk Doldurma Cümleleri (1-10) (s. 158):
[Kelimeler: kare, besin zinciri, atık su, su ayak izi, yer üstü, su arıtma tesisi, ışık, üretici, ekoloji piramidi, ok, tüketici, ayrıştırıcı, yer altı suları]`,
    interactiveAnswer: `A. DOĞRU / YANLIŞ ÇÖZÜMLERİ:
1. DOĞRU ➔ Besin zinciri enerji ve maddenin canlılar arasındaki aktarım dizisidir.
2. YANLIŞ ➔ Doğrusu: Besin zincirinde temel akış ÜRETİCİLERDEN TÜKETİCİLERE doğrudur.
3. YANLIŞ ➔ Doğrusu: Biyolojik birikim aşağıdan yukarıya doğru (üreticiden son tüketiciye doğru) ARTAR.
4. DOĞRU ➔ Kullanılmış ve özellikleri değişmiş tüm sular atık sudur.
5. YANLIŞ ➔ Doğrusu: Tatlı suların %69'u buzullarda hapsolmuştur ve doğrudan kullanılamaz; canlıların erişebildiği tatlı su oranı %1 civarındadır.
6. DOĞRU ➔ Su ayak izi bir birey, bir pamuklu tişört, bir otomobil veya tüm bir ülke için hesaplanabilir.

B. BOŞLUK DOLDURMA ÇÖZÜMLERİ:
1. AYRIŞTIRICI (besin zincirinin her basamağında yer alır)
2. OK (beslenmenin yönünü gösterir)
3. SU AYAK İZİ (akıllı telefon için 12.760 L)
4. EKOLOJİ PİRAMİDİ (üreticiden tüketiciye enerji aktarım modeli)
5. SU ARITMA TESİSİ (atık suyu temizleyen tesisler)
6. ÜRETİCİ (ekoloji piramidinin en geniş tabanında yer alır)
7. TÜKETİCİ (son basamakta üçüncü/dördüncü tüketici yer alır)
8. IŞIK (güneş ışığıyla üreticiler fotosentez yapar)
9. ATIK SU (kirlenmiş sular)
10. YER ÜSTÜ (tatlı suyun çoğu nehir ve göllerden karşılanır)`
  },
  {
    id: 'ib-g7-u7-end-p159-160-ekosistem-ve-su-ayak-izi',
    pageNumber: 'Sayfa 159-160',
    type: 'etkinlik_istasyonu',
    title: '7. Ünite Sonu İstasyonu - C: Okul Bahçesi Ekosistemi, Derya’nın Gezisi & Tişört Analizi',
    badge: 'Besin Ağı & Su Ayak İzi',
    prompt: `1. Nihat ve Arkadaşlar Bahçe Ekosistemi (Çiçek, Kelebek, Kurbağa, Mantar):
- I. Doğru ifade hangisidir? (Çiçek üreticidir).
- II. Besin zinciri sırası: Çiçek ➔ Kelebek ➔ Kurbağa (Mantar ayrıştırıcı).
- III. Ekoloji piramidi çizimi.
- IV. Aşağıdan yukarı çıkıldıkça birey sayısı ve biyolojik birikim nasıl değişir?
- V. Çiçekler yok edilirse kelebek ve kurbağa sayısı nasıl etkilenir?
- VI. Kelebek yiyen örümcek eklenirse besin ağı nasıl değişir?
2. Derya'nın Atık Su Gezisi ve Annesinin Atık Yağı (s. 160).
3. Hülya ve Annesinin Tişört Alışverişi Su Ayak İzi (s. 160).`,
    interactiveAnswer: `DETAYLI EKOSİSTEM VE SU AYAK İZİ ÇÖZÜMLERİ:
1. Okul Bahçesi Besin Zinciri:
   - I. Doğru Seçenek: C Şıkkı (Çiçek, üretici olarak güneş ışığıyla kendi besinini üretir).
   - II. Besin Zinciri: ÇİÇEK (Üretici) ➔ KELEBEK (1. Tüketici) ➔ KURBAĞA (2. Tüketici). Mantar ise hepsinin atıklarını ayrıştırır.
   - IV. Ekoloji Piramidi Kuralları:
     * Aşağıdan yukarı çıkıldıkça: Birey sayısı AZALIR, Biyolojik birikim ARTAR.
     * Yukarıdan aşağıya inildikçe: Birey sayısı ARTAR, Biyolojik birikim AZALIR.
   - V. Çiçeklerin Yok Edilmesi:
     * Kelebek: Besin bulamadığı için sayısı AZALIR.
     * Kurbağa: Kelebek azaldığı için aç kalır ve sayısı AZALIR!
   - VI. Örümcek Eklenmesi:
     Kelebek hem kurbağanın hem de örümceğin besini olur; kurbağa örümceği de yiyebilir ➔ Çapraz besin ağı oluşur.

2. Derya ve Atık Yağ Uyarısı (s. 160):
   - I. Annesine Uyarısı: "Anneciğim, 1 litre atık yağ 1 milyon litre temiz içme suyunu kirletir ve lavabo borularını tıkayıp kanalizasyon arıtmasını felç eder! Bu yağı kavanozda biriktirip atık yağ toplama kutusuna vermeliyiz."
   - II. Geri Kazanım: Arıtma çamurundan biyogaz (elektrik) ve tarımsal gübre elde edilebilir.
   - III. Arıtılmadan Salınırsa: Sudaki oksijen biter, balık ölümleri yaşanır, ağır metaller besin zinciriyle soframıza gelir.

3. Tişört ve Su Ayak İzi (s. 160):
   - I. Ulaşılamaz Yargı: D Şıkkı ("Tişörtün su ayak izinin en büyük kısmı taşıma esnasında oluşur" yanlıştır; en büyük kısım pamuğun sulanmasında harcanır!).
   - II. Yaşam Döngüsü: Ham madde pamuğun yetiştirilmesi ➔ İplik yapımı ve kumaş dokuma ➔ Boyama ve yıkama ➔ Konfeksiyon ➔ Taşıma ➔ Tüketim. Her aşamada doğrudan ve dolaylı su harcanır ve atık su oluşur.`
  },
  {
    id: 'ib-g7-u7-end-p161-bulmaca',
    pageNumber: 'Sayfa 161',
    type: 'karekod',
    title: '7. Ünite Sonu İstasyonu - Ç: Sürdürülebilirlik Bulmacası & EBA Karekodları',
    badge: 'Bulmaca & Karekod',
    prompt: `Ç. Sürdürülebilir Yaşam Bulmacası (s. 161):
Yukarıdan Aşağıya:
1. Bir ekosistemin canlı sayısını, enerji ilişkilerini ve toplam biyokütlesini gösteren model.
5. Evsel, endüstriyel ve tarımsal kullanımlar sonucu kirlenmiş sular.
6. Birden çok besin zincirinin bir arada olduğu karmaşık yapı.

Soldan Sağa:
2. Besin zincirinde üst basamaklara doğru zehirli maddelerin artması olayı.
3. Madde ve enerjinin besin biçiminde aktarılma dizisi.
4. Üretim ve tüketimde doğrudan ve dolaylı harcanan su miktarını gösteren bütüncül ölçüt.`,
    interactiveAnswer: `BULMACA CEVAPLARI (SAYFA 161):
Yukarıdan Aşağıya:
1. EKOLOJİ PİRAMİDİ
5. ATIK SU
6. BESİN AĞI

Soldan Sağa:
2. BİYOLOJİK BİRİKİM
3. BESİN ZİNCİRİ
4. SU AYAK İZİ`,
    qrInfo: {
      title: 'EBA: 7. Ünite Sürdürülebilir Yaşam ve Enerji Genel Değerlendirme Testi (s. 160-163)',
      description: 'Ders kitabının 160 ve 163. sayfalarındaki EBA değerlendirme test karekodları.',
      type: 'evaluation'
    }
  }
];

export const grade7Book2FlowsUnits6and7: Record<string, InteractiveBookItem[]> = {
  // ==========================================
  // 6. ÜNİTE: ELEKTRİKLENME
  // ==========================================
  'g7-u6-sub1': [
    {
      id: 'ib-g7-6-1-p102-105-kapak-on-degerlendirme',
      pageNumber: 'Sayfa 102-105',
      type: 'karekod',
      title: '6. Ünite Girişi: Elektriklenme & Ön Değerlendirme İstasyonu',
      badge: 'Ünite Girişi & Karekod',
      qrInfo: {
        title: 'EBA: 6. Ünite Elektriklenme Tanıtım ve Özet E-İçerik Karekodu (s. 103)',
        description: 'Ders kitabının 103. sayfasındaki MEB EBA "Ünite Alanı" ve "Özet E-İçerik" etkileşimli video karekodları.',
        type: 'video'
      },
      content: `KAZANIM VE İÇERİK ÇERÇEVESİ (Sayfa 102-105):
• Elektrik Yükleri ve Elektriklenmenin Teknolojideki Kullanımı: Pozitif (+), Negatif (-) ve Nötr cisimler; sürtünme ve dokunma (temaslı), etki ile elektriklenme (temassız); şimşek ve yıldırım; elektrostatik boyama, baca filtreleri, fotokopi/lazer yazıcı.
• Merak ve Hatırlatma: Atomda çekirdekte proton (+) ve nötron (0), katmanlarda elektron (-) yer aldığını öğrenmiştiniz.`,
      prompt: `Ön Değerlendirme Soruları (s. 104):
1. Atomu oluşturan temel parçacıklar, yükleri ve bulundukları yerleri yazınız.
2. Atom modeli çiziniz.
3. Atomların yük durumları ile bu atomlardan oluşan cisimlerin yük durumları arasında nasıl bir ilişki vardır?`,
      interactiveAnswer: `ÖN DEĞERLENDİRME ÇÖZÜMLERİ:
1. Atom Parçacıkları Tablosu:
   • Proton: Pozitif (+) yüklü | Çekirdekte bulunur.
   • Nötron: Yüksüz (0) | Çekirdekte bulunur.
   • Elektron: Negatif (-) yüklü | Katmanlarda dolanır.

3. Atom ve Cisim Yük İlişkisi:
   Cisimler trilyonlarca atomdan oluşur. Eğer bir cismin atomlarındaki toplam proton sayısı toplam elektron sayısına eşitse cisim NÖTRDÜR. Elektron kazanırsa NEGATİF YÜKLÜ, elektron kaybederse POZİTİF YÜKLÜ cisim hâline gelir.`
    },
    {
      id: 'ib-g7-6-1-p105-107-elifin-kazagi-ve-kesif-noktasi',
      pageNumber: 'Sayfa 105-107',
      type: 'hazirlik_istasyonu',
      title: '1. Bölüm Ana Başlık: ELEKTRİK YÜKLERİ VE ELEKTRİKLENME (Elif’in Kazağı & Keşif)',
      badge: 'Elektriklenme',
      qrInfo: {
        title: 'EBA: "Elektriklenme" Etkileşimli İçeriği (s. 107)',
        description: 'Ders kitabının 107. sayfasındaki elektrik yükleri ve statik elektriklenme karekodu.',
        type: 'interactive'
      },
      content: `ELEKTRİKLENME VE GÜNLÜK YAŞAM (Sayfa 105-107):
• Elif'in Bilim Merkezi Ziyareti: Soğuk havada yün kazağını giyerken duyduğu çıtırtılar, saçlarının havalanması, araba kapısına dokununca çarpılması ve gökyüzündeki şimşekler.
• ELEKTRİKLENME TANIMI:
  Maddelerin sahip olduğu NEGATİF ELEKTRİKSEL YÜKLERİN (elektronların) yer değiştirmesi veya sürtünme/dokunma ile elektron kazanıp kaybetmesi olayıdır.
• DİKKAT: Pozitif yükler (protonlar) çekirdekte hapsolmuştur, ASLA HAREKET ETMEZ VE AKTARILMAZ! Sadece elektronlar (-) yer değiştirir.`,
      prompt: `Değerlendirme Soruları (s. 107):
1. Anahtar kavramları (proton, nötron, nötr cisim, pozitif yüklü cisim, negatif yüklü cisim, elektron) kullanarak elektriklenmeyi tanımlayınız.
2. Elektriklenmenin teknolojideki uygulama alanlarına örnekler veriniz.`,
      interactiveAnswer: `KEŞİF NOKTASI VE ÇALIŞMA KÂĞIDI ÇÖZÜMLERİ:
1. Kavramlarla Elektriklenme Tanımı:
   Nötr cisimlerde pozitif yüklü proton sayısı ile negatif yüklü elektron sayısı birbirine eşittir. Sürtünme veya dokunma sırasında elektron kaybeden nötr cisim POZİTİF YÜKLÜ CİSİM, elektron kazanan nötr cisim ise NEGATİF YÜKLÜ CİSİM hâline gelir. Yüksüz nötronlar bu yük dengesine katılmaz.

2. Teknolojik Uygulamalar:
   - Sanayide elektrostatik toz boyama (araba ve buzdolabı boyama).
   - Fabrika bacalarındaki elektrostatik duman ve is filtreleri.
   - Lazer yazıcı ve fotokopi makinelerinde tonerin kâğıda yapıştırılması.
   - Kriminal laboratuvarlarda parmak izi tespiti.`
    },
    {
      id: 'ib-g7-6-1-p108-110-teknolojideki-kullanim-performans',
      pageNumber: 'Sayfa 108-110',
      type: 'performans_istasyonu',
      title: 'Elektriklenmenin Teknolojideki Kullanım Alanları & Performans Görevi',
      badge: 'Teknolojide Elektriklenme',
      qrInfo: {
        title: 'EBA: Elektriklenme Kavramı ve Uygulamaları Formu (s. 108)',
        description: 'Ders kitabının 108. sayfasındaki poster görevi değerlendirme formu karekodu.',
        type: 'interactive'
      },
      content: `6 TEMEL TEKNOLOJİK KULLANIM ALANI (Sayfa 109):
1. Sanayide Boyama: Otomobil kaportası veya beyaz eşya negatif (-), püskürtülen boya damlacıkları pozitif (+) yüklenir. Zıt yüklerin çekimiyle boya yüzeye pürüzsüz yapışır; aynı yüklü boya tanecikleri birbirini ittiği için eşit dağılır, boya israfı önlenir.
2. Elektrostatik Baca Filtreleri: Sanayi ve fabrika bacalarından çıkan duman ve kül tanecikleri yüklenir; zıt yüklü metal plakalara yapışarak havaya zehirli partikül salınımı engellenir.
3. Lazer Yazıcı ve Fotokopi: Dönen tambur elektriklenir, toner tozları zıt yükle yüklenerek kâğıda yapıştırılır ve sıcaklıkla eritilip sabitlenir.
4. Parmak İzi Çıkarma: Olay yeri inceleme ekipleri elektrostatik tozlama yöntemiyle yüzeydeki görünmez parmak izlerini görünür kılar.
5. Klima Filtreleri: Havada dolaşan toz ve polen tanecikleri elektrostatik çekimle filtrelere hapsedilir.
6. Elektrikli Süpürge: Toz torbasında tozların statik yükle tutunması sağlanır.`,
      prompt: `Performans Görevi Sorusu:
Elektriklenmenin teknolojideki kullanım alanlarını anlatan bir poster hazırlayınız. Performans sonucunda ne öğrendiniz?`,
      interactiveAnswer: `PERFORMANS KAZANIMI VE CEVAP:
• "Performans Sonucunda Ne Öğrendiniz?" Cevabı:
  Elektriklenmenin sadece kazağımızı çıkarırken çarpılmaktan ibaret olmadığını; otomotiv, çevre sağlığı, hava temizliği, matbaa ve adli bilişim gibi devasa endüstri kollarında elektrostatik çekim ve itme kuvvetlerinin güvenli, tasarruflu ve hatasız üretim için vazgeçilmez bir bilimsel temel olduğunu öğrendik.`
    }
  ],
  'g7-u6-sub2': [
    {
      id: 'ib-g7-6-2-p110-114-elektriklenme-cesitleri-thales',
      pageNumber: 'Sayfa 110-114',
      type: 'hazirlik_istasyonu',
      title: '2. Bölüm Ana Başlık: ELEKTRİKLENME ÇEŞİTLERİ (Thales, Sürtünme, Dokunma & Etki)',
      badge: 'Elektriklenme Türleri',
      qrInfo: {
        title: 'EBA: "Elektriklenme Çeşitleri" Ek Deneyler Videosu ve Formu (s. 113)',
        description: 'Ders kitabının 113. sayfasındaki elektriklenme türleri video karekodu.',
        type: 'video'
      },
      content: `ELEKTRİKLENME ÇEŞİTLERİ ŞEMASI (Sayfa 110-114):
• Thales ve Kehribar (s. 110): MÖ 600'de kehribarı yüne sürterek tozları çektiğini keşfetmiş; Yunanca kehribar demek olan "elektron" kelimesinden elektrik türetilmiştir.
• 1. TEMASLI ELEKTRİKLENME:
  - Sürtünme ile Elektriklenme: İki yalıtkan cisim sürtüldüğünde elektron alışverişi olur. Biri (+), diğeri (-) olmak üzere daima ZIT YÜKLE yüklenirler.
  - Dokunma ile Elektriklenme: Yüklü bir cisim nötr veya yüklü başka bir cisme dokundurulduğunda toplam yük paylaşılır. Cisimler son durumda AYNI CİNS YÜKLE yüklenirler.
• 2. TEMASSIZ ELEKTRİKLENME (ETKİ / TESİR İLE):
  - Temas olmadan sadece yaklaştırma ile gerçekleşir. Yüklü cisim, nötr iletken cisimdeki yükleri kutuplar (Zıt yükleri kendine çeker, aynı yükleri en uzak uca iter). Cisim genel toplamda yine nötrdür ama uçları zıt kutuplanır.`,
      prompt: `Etkinlik Noktası-1 & 2 Değerlendirme Soruları (s. 111-113):
Balona dokundurulan alüminyum küreler neden birbirini iter?`,
      interactiveAnswer: `DENEY DEĞERLENDİRME ÇÖZÜMLERİ:
Yün kumaşa sürtülen balon negatif (-) yüklenir. İki alüminyum folyo topa dokundurulduğunda balonun negatif yükleri toplara geçer (Dokunma ile elektriklenme). Her iki top da NEGATİF (-) yüklendiği için aynı yükler birbirini İTER ve küreler havada açılarak birbirinden uzaklaşır!`
    },
    {
      id: 'ib-g7-6-2-p114-118-yuk-etkilesimleri-ve-elektroskop',
      pageNumber: 'Sayfa 114-120',
      type: 'etkinlik_istasyonu',
      title: 'Plastik ve Cam Çubuk Yükleri, Yük Etkileşimleri & Elektroskop',
      badge: 'Elektroskop & Yükler',
      qrInfo: {
        title: 'EBA: "Elektroskop" Etkileşimli İçeriği (s. 119)',
        description: 'Ders kitabının 119. sayfasındaki elektroskop çalışma prensibi simülasyon karekodu.',
        type: 'interactive'
      },
      content: `KLASİK DENEYLER VE ELEKTROSKOP (Sayfa 116-119):
• Plastik (Ebonit) Çubuk + Yün Kumaş: Plastik çubuk NEGATİF (-), Yün kumaş POZİTİF (+) yüklenir.
• Cam Çubuk + İpek Kumaş: Cam çubuk POZİTİF (+), İpek kumaş NEGATİF (-) yüklenir.
• YÜKLERİN BİRBİRİNE KUVVETİ:
  - Zıt yükler birbirini ÇEKER (+ ile -).
  - Aynı yükler birbirini İTER (+ ile +, - ile -).
  - Yüklü bir cisim nötr bir cismi ÇEKER!
  - Nötr iki cisim birbirine itme ya da çekme uygulamaz!
• ELEKTROSKOP (s. 119):
  Bir cismin elektrikle yüklü olup olmadığını, yüklüyse yükünün cinsini tespit etmeye yarayan cihazdır. İletken topuz, iletken gövde ve hafif metal yapraklardan oluşur.
  - Cisim yüksüz (nötr) ise: Yapraklar KAPALIDIR.
  - Cisim yüklüyse: Yapraklar aynı yükle yüklenerek BİRBİRİNİ İTER VE AÇILIR!`,
      prompt: `Sayfa 119 Kontrol Noktası Sorusu:
K (+4, -4), L (+3, -5), M (+4, -2) cisimleri:
1. Yük durumlarını belirleyiniz.
2. Cisimler birbirine yaklaştırıldığında aralarındaki etkileşim nasıl olur?`,
      interactiveAnswer: `KONTROL NOKTASI YÜK ANALİZİ:
1. Yük Cinsleri:
   • K Cismi: Pozitif=4, Negatif=4 ➔ NÖTR CİSİM
   • L Cismi: Pozitif=3, Negatif=5 ➔ NEGATİF (-) YÜKLÜ CİSİM
   • M Cismi: Pozitif=4, Negatif=2 ➔ POZİTİF (+) YÜKLÜ CİSİM

2. Birbirine Yaklaştırıldığında Etkileşimler:
   • K (Nötr) ile L (-) ➔ BİRBİRİNİ ÇEKER (Yüklü cisim nötr cismi çeker).
   • L (-) ile M (+) ➔ BİRBİRİNİ ÇEKER (Zıt yükler birbirini çeker).
   • K (Nötr) ile M (+) ➔ BİRBİRİNİ ÇEKER (Yüklü cisim nötr cismi çeker).`
    },
    {
      id: 'ib-g7-6-2-p120-123-franklin-faraday-ve-iz-birakanlar',
      pageNumber: 'Sayfa 120-123',
      type: 'bilgi_kutusu',
      title: 'İz Bırakanlar: Benjamin Franklin, Faraday Kafesi, Gilbert ve Tesla',
      badge: 'İz Bırakanlar',
      content: `ELEKTRİK TARİHİNE YÖN VERENLER (Sayfa 120-123):
• BENJAMIN FRANKLIN (1706-1790): Fırtınalı havada uçurtma deneyi yaparak yıldırımın elektrikten kaynaklandığını ispatlamış, binaları koruyan PARATONERİ icat etmiştir. Pozitif ve negatif terimlerini literatüre kazandırmıştır.
• MICHAEL FARADAY (1791-1867): 1836'da "Faraday Kafesi"ni tasarlamıştır. İletken metal kafeslerde elektrik yükleri dış yüzeyde dağılır ve içeriye elektrik akımı geçmez. Bu ilke sayesinde uçaklara ve otomobillere yıldırım çarptığında içindeki yolcular hiçbir zarar görmez.
• William Gilbert (1540-1603): "Versorium" elektroskobuyla kehribar dışında cam ve kükürdün de elektriklendiğini kanıtlamıştır.
• Nicola Cabeo (1585-1650): Elektriklenmede itme kuvvetini keşfetmiştir.
• Nikola Tesla (1856-1943): Alternatif akım motorunu geliştirmiş, Tesla Bobini ile kablosuz elektrik iletimini başarmıştır.`
    },
    ...unit6EndItemsG7B2
  ],
  'g7-u6-end': unit6EndItemsG7B2,

  // ==========================================
  // 7. ÜNİTE: SÜRDÜRÜLEBİLİR YAŞAM VE ENERJİ
  // ==========================================
  'g7-u7-sub1': [
    {
      id: 'ib-g7-7-1-p128-131-kapak-on-degerlendirme',
      pageNumber: 'Sayfa 128-131',
      type: 'karekod',
      title: '7. Ünite Girişi: Sürdürülebilir Yaşam ve Enerji & Ön Değerlendirme',
      badge: 'Ünite Girişi & Karekod',
      qrInfo: {
        title: 'EBA: 7. Ünite Sürdürülebilir Yaşam Tanıtım ve Özet E-İçerik Karekodu (s. 129)',
        description: 'Ders kitabının 129. sayfasındaki MEB EBA "Ünite Alanı" ve "Özet E-İçerik" etkileşimli video karekodları.',
        type: 'video'
      },
      content: `KAZANIM VE İÇERİK ÇERÇEVESİ (Sayfa 128-131):
• 1. Besin Zinciri ve Enerji Akışı: Üreticiler, tüketiciler (1., 2., 3.), ayrıştırıcılar, besin ağı, ekoloji piramidi, %10 enerji aktarımı kuralı, biyolojik birikim.
• 2. Sürdürülebilir Yaşam: Su kaynakları dağılımı (%97,5 tuzlu, %2,5 tatlı), atık su ve arıtma, SU AYAK İZİ (mavi, yeşil, gri su ayak izi), tasarruf tedbirleri, Mimar Sinan ve Kerecî.`,
      prompt: `Ön Değerlendirme Soruları (s. 130-131):
1. Canlıların sınıflandırıldığı tabloyu doldurunuz (Mikroskobik canlılar, mantarlar, bitkiler, hayvanlar).
2. Ecem'in kahvaltısı: "Yediğin yumurta hangi canlıdan elde edilir? O canlı ne ile beslenir?"
3. Kaynak ve tasarruf nedir? Günlük hayatta nelerden tasarruf edilebilir?`,
      interactiveAnswer: `ÖN DEĞERLENDİRME ÇÖZÜMLERİ:
1. Canlılar Sınıflandırması:
   • Mikroskobik Canlılar: Bakteriler, amip, öglena, terliksi hayvan (mikroskopla görülür).
   • Mantarlar: Maya, küf, pas ve şapkalı mantarlar (ayrıştırıcıdır, fotosentez yapamazlar).
   • Bitkiler: Otlar, ağaçlar, çiçekler (klorofilleriyle fotosentez yapan üreticilerdir).
   • Hayvanlar: Omurgalı ve omurgasız tüketiciler.

2. Ecem'in Besin Zinciri:
   Yumurta TAVUKTAN elde edilir. Tavuk buğday, mısır, arpa, tohum veya solucan/böceklerle beslenir (Hem üreticiyle hem tüketiciyle beslenen bir hepçildir).

3. Kaynak ve Tasarruf:
   • Kaynak: İhtiyaçlarımızı karşılamak için doğadan temin ettiğimiz varlıkların tümüdür (Su, toprak, hava, enerji).
   • Tasarruf: Kaynakları israf etmeden, ihtiyacımız kadar ve en verimli şekilde kullanmaktır.`
    },
    {
      id: 'ib-g7-7-1-p132-136-keremin-gunlugu-besin-zinciri',
      pageNumber: 'Sayfa 132-136',
      type: 'hazirlik_istasyonu',
      title: '1. Bölüm: BESİN ZİNCİRİ VE ENERJİ AKIŞI (Kerem’in Pikniği & Etkinlik 1-2)',
      badge: 'Besin Zinciri',
      content: `BESİN ZİNCİRİ BASAMAKLARI (Sayfa 132-136):
• Kerem'in Piknik Günlüğü:
  Güneş Enerjisi ➔ Yaprak ➔ Tırtıl ➔ Serçe ➔ Kedi / Arpa ➔ Tavuk ➔ İnsan.
• BESİN ZİNCİRİ:
  Madde ve enerjinin bir canlıdan diğerine beslenme yoluyla aktarıldığı zincirdir. Okun yönü (→) DAİMA besini sağlayan canlıdan beslenen tüketiciye doğrudur.
  1. Üreticiler: Fotosentezle kendi besinini üreten klorofilli canlılar (Bitkiler, algler, siyanobakteriler). Zincirin İLK BASAMAĞIDIR.
  2. Birincil Tüketiciler (Otçullar): Doğrudan üreticileri yiyen otla beslenen hayvanlar (Çekirge, inek, koyun, tavşan).
  3. İkincil ve Üçüncül Tüketiciler (Etçil/Hepçiller): Otçulları yiyen hayvanlar (Kuş, yılan, tilki, kartal, insan).
  4. Ayrıştırıcılar (Çürükçüller): Canlı ölülerini ve organik atıkları çürüten bakteri ve mantarlardır. Zincirin HER BASAMAĞINDA yer alırlar.`,
      prompt: `Etkinlik Noktası-2 Değerlendirme Sorusu (s. 136):
Aynı beslenme grubuna dâhil canlılar (örneğin sadece iki etçil ya da sadece iki otçul) kendi aralarında tek başlarına besin zinciri oluşturabilir mi? Neden?`,
      interactiveAnswer: `BESİN ZİNCİRİ KURALI ÇÖZÜMÜ:
HAYIR, OLUŞTURAMAZ! Çünkü bir besin zincirinin başlayabilmesi için mutlaka ilk basamakta güneş enerjisini kimyasal besin enerjisine çeviren bir ÜRETİCİ CANLI (bitki/alg) bulunmak zorundadır. Üretici olmadan enerji ekosisteme giremez.`
    },
    {
      id: 'ib-g7-7-1-p137-140-besin-agi-ve-piramit-dengesi',
      pageNumber: 'Sayfa 137-140',
      type: 'etkinlik_istasyonu',
      title: 'Besin Ağı, Çukurova Deltası Kontrol Noktası & Ekosistem Dengesi',
      badge: 'Besin Ağı',
      content: `BESİN AĞI VE DELTA EKOSİSTEMİ (Sayfa 137-140):
• BESİN AĞI: Doğada canlılar tek bir besinle beslenmez. Birçok besin zincirinin karmaşık bir ağ şeklinde birbirine bağlanmasıyla "BESİN AĞI" oluşur (Görsel 7.1.3).
• Ekosistem Dengesi (s. 139):
  Çimen ➔ Çekirge ➔ Kirpi ➔ Tilki
  Eğer tarım ilaçlarıyla çekirgeler yok edilirse:
  - Çimen sayısı ARTAR (Onu yiyen çekirge kalmaz).
  - Kirpi sayısı AZALIR (Aç kalır).
  - Tilki sayısı AZALIR (Kirpi azaldığı için besin bulamaz).`,
      prompt: `Sayfa 138 Kontrol Noktası: Çukurova Deltası Canlıları (Su bitkisi, su yosunu, sucul böcek larvası, sazan, turna balığı, leylek, şahin, yusufçuk):
İki farklı besin zinciri oluşturup üretici ve tüketicileri sınıflandırınız.`,
      interactiveAnswer: `ÇUKUROVA DELTASI BESİN ZİNCİRLERİ:
• Zincir 1: Su Yosunu (Üretici) ➔ Sucul Böcek Larvası (1. Tüketici) ➔ Sazan Balığı (2. Tüketici) ➔ Turna Balığı (3. Tüketici) ➔ Leylek (Son Tüketici).
• Zincir 2: Su Bitkisi (Üretici) ➔ Yusufçuk (1. Tüketici) ➔ Sazan Balığı (2. Tüketici) ➔ Şahin (Son Tüketici).
• Ortak Canlılar: Sazan balığı her iki zincirde de ikincil tüketici olarak yer alır.`
    },
    {
      id: 'ib-g7-7-1-p141-144-ekoloji-piramidi-biyolojik-birikim',
      pageNumber: 'Sayfa 141-144',
      type: 'pekistirme_istasyonu',
      title: 'Ekoloji Piramidi, Biyolojik Birikim (Gökdoğan) & Neler Öğrendik?',
      badge: 'Ekoloji Piramidi',
      qrInfo: {
        title: 'EBA: "Canlılarda Enerji Aktarımı" Etkileşimli İçeriği (s. 142)',
        description: 'Ders kitabının 142. sayfasındaki ekoloji piramidi ve enerji akışı karekodu.',
        type: 'interactive'
      },
      content: `EKOLOJİ PİRAMİDİNDE YUKARI ÇIKILDIKÇA (Sayfa 141-143):
1. Birey Sayısı: AZALIR (En çok ot, en az yırtıcı kuş).
2. Toplam Canlı Kütlesi (Biyokütle): AZALIR.
3. Aktarılan Enerji Miktarı: AZALIR (Canlı enerjisinin %90'ını kendi metabolizmasında harcar; üst basamağa sadece %10'u aktarılır!).
4. Bireyin Vücut Büyüklüğü: GENELLİKLE ARTAR.
5. BİYOLOJİK BİRİKİM (Zehirli Madde Miktarı): ARTAR!
• GÖKDOĞAN VE BİYOLOJİK BİRİKİM (s. 142):
  Tarımda kullanılan DDT ve ağır metaller yağ dokuda birikir, vücuttan atılamaz. Ekoloji piramidinin en tepesindeki yırtıcı kuş olan Gökdoğan'ın vücudunda bu zehir en yüksek seviyeye ulaşır; yumurta kabuklarını incelterek üremelerini engeller. Gökdoğan ekosistem kirliliğinin gösterge türüdür.`,
      prompt: `Neler Öğrendik Soruları (s. 143):
A. Kavram Haritası: Besin zinciri, ekoloji piramidi, enerji aktarımı.
B. Artar / Azalır Sepetine 5 Özelliği Yerleştiriniz (1. Birey sayısı, 2. Biyolojik birikim, 3. Aktarılan enerji, 4. Toplam kütle, 5. Vücut büyüklüğü).`,
      interactiveAnswer: `NELER ÖĞRENDİK (SAYFA 143) ÇÖZÜMLERİ:
A. Kavram Haritası:
   - Enerji Aktarımı yukarılara doğru çıkıldıkça AZALIR.
   - Biyolojik Birikim yukarılara doğru çıkıldıkça ARTAR.
   - Üreticiler ➔ Yeşil Yapraklı Bitkiler örnektir.
   - Tüketiciler ➔ Otçul, etçil, hepçil olabilir.
   - Besin Ağı ➔ Besin zincirine göre daha karmaşıktır.

B. Sepet Eşleştirmesi (Aşağıdan Yukarı Çıkıldıkça):
   • ARTAR Sepeti: 2 (Biyolojik birikim), 5 (Birey vücut büyüklüğü).
   • AZALIR Sepeti: 1 (Birey sayısı), 3 (Aktarılan enerji miktarı), 4 (Canlının toplam biyokütlesi).`
    }
  ],
  'g7-u7-sub2': [
    {
      id: 'ib-g7-7-2-p144-148-su-kaynaklari-ve-mimar-sinan',
      pageNumber: 'Sayfa 144-148',
      type: 'hazirlik_istasyonu',
      title: '2. Bölüm: SÜRDÜRÜLEBİLİR YAŞAM (Su Kaynakları, Afiş & Mimar Sinan)',
      badge: 'Su Kaynakları & Tasarruf',
      qrInfo: {
        title: 'EBA: "Su Kaynakları" Videosu (s. 146)',
        description: 'Ders kitabının 146. sayfasındaki dünyadaki su kaynakları dağılımı karekodu.',
        type: 'video'
      },
      content: `DÜNYADAKİ SU DAĞILIMI (Sayfa 145-147):
• Dünya Suyunun:
  - %97,5'i TUZLU SU (Okyanus ve denizler - içilmez).
  - Sadece %2,5'i TATLI SUDUR!
• Bu %2,5 Tatlı Suyun Dağılımı:
  - %69'u BUZULLAR VE BUZ DAĞLARINDA hapsolmuştur.
  - %30'u YER ALTI SULARIDIR.
  - SADECE %1'i YÜZEY SUYUDUR (Göller, nehirler, bataklıklar).
  ➔ Dünya'daki tüm su 333 bardak olsa, canlıların içebileceği erişilebilir tatlı su SADECE 1 BARDAKTIR!
• TARİHE NOT DÜŞENLER - MİMAR SİNAN (1490-1588): Kanuni Sultan Süleyman döneminde başmimar olan Sinan, İstanbul'un su krizini 55 km mesafeden getirdiği Kırk Çeşme Su Tesisi, çökeltme havuzları ve Mağlova Su Kemeri gibi muhteşem mühendislik şaheserleriyle çözmüştür.`,
      prompt: `Sayfa 145 Afiş Sorusu:
"Su varken tasarruf edilir." sözü sizin için ne ifade ediyor? Açıklayınız.`,
      interactiveAnswer: `SU TASARRUFU VE MİMAR SİNAN ANALİZİ:
"Su Varken Tasarruf Edilir" İlkesi:
Barajlarımız ve musluklarımız akarken suyun sınırsız olduğunu düşünmek en büyük yanılgıdır. Kuraklık kapıya dayandıktan sonra yapılacak tasarruf çare olmaz; kaynaklar tükenmeden önce bilinçli kullanılmalı, atık su oluşumu önlenmelidir.`
    },
    {
      id: 'ib-g7-7-2-p148-151-atik-su-ve-su-ayak-izi',
      pageNumber: 'Sayfa 148-152',
      type: 'etkinlik_istasyonu',
      title: 'Atık Su, Su Ayak İzi Kavramı & Görünmez Su Tüketimi',
      badge: 'Su Ayak İzi',
      qrInfo: {
        title: 'EBA: "Su Tasarrufu" Videosu ve Formu (s. 151)',
        description: 'Ders kitabının 151. sayfasındaki bireysel su ayak izi ve tasarruf karekodu.',
        type: 'video'
      },
      content: `SU AYAK İZİ BİLEŞENLERİ (Sayfa 149-151):
• SU AYAK İZİ: Bir mal veya hizmetin üretilmesi, taşınması ve tüketilmesi sürecinde doğrudan ve dolaylı harcanan toplam tatlı su miktarıdır (Arjen Hoekstra).
  1. Mavi Su Ayak İzi: Üretimde kullanılan yüzey ve yer altı tatlı su miktarı.
  2. Yeşil Su Ayak İzi: Üretimde (tarımda) kullanılan yağmur suyu miktarı.
  3. Gri Su Ayak İzi: Üretim sonucu oluşan kirliliği gidermek ve su kalitesini standartlara ulaştırmak için gereken temiz su miktarıdır.
• GÖRÜNMEZ SU TÜKETİMİ (s. 150):
  - 1 Fincan Kahve: 130 Litre su
  - 1 Dilim Ekmek: 40 Litre su
  - 1 Adet Tişört (Pamuklu): 2.720 Litre su
  - 1 Çift Ayakkabı: 8.000 Litre su
  - 1 Kot Pantolon: Yaklaşık 10.000 Litre su!
  - 1 Akıllı Telefon: 12.760 Litre su!
• ATIK YAĞ UYARISI: Lavaboya dökülen 1 litre atık kızartma yağı, 1 milyon litre içme suyunu kirletir!`,
      prompt: `Keşif Noktası Sorusu (s. 151):
Bireysel su ayak izinizi azaltmak için günlük yaşamınızda yapabileceğiniz 3 somut eylem yazınız.`,
      interactiveAnswer: `SU AYAK İZİNİ AZALTMA YOLLARI:
1. İhtiyacımız yokken yeni giysi ve teknolojik alet almamak, eskiyenleri tamir ettirip uzun süre kullanmak (Tişört ve telefon su ayak izini düşürmek).
2. Gıda israfından kaçınmak (Tabağa yiyebileceğimiz kadar yemek almak, ekmeği bayatlatmadan değerlendirmek).
3. Diş fırçalarken ve duş alırken suyu boşa akıtmamak, atık yağları asla lavaboya dökmemek.`
    },
    {
      id: 'ib-g7-7-2-p153-157-performans-ve-iz-birakanlar',
      pageNumber: 'Sayfa 153-157',
      type: 'performans_istasyonu',
      title: 'Performans İstasyonu: Su Kaynakları Raporu, 22 Mart Su Günü & İz Bırakanlar',
      badge: 'Su Yönetimi & Öncüler',
      qrInfo: {
        title: 'EBA: Su Kaynaklarının Kullanımı Değerlendirme Formu (s. 153)',
        description: 'Ders kitabının 153. sayfasındaki su yönetimi araştırma görevi karekodu.',
        type: 'interactive'
      },
      content: `ÇEVRE VE SU BİLİMİNE İZ BIRAKANLAR (Sayfa 154-157):
• 22 Mart Dünya Su Günü: Birleşmiş Milletler öncülüğünde tatlı su krizine dikkat çekmek için kutlanır.
• İZ BIRAKAN BİLİM İNSANLARI (s. 157):
  1. Kerecî (953-1029): İslam mühendisi; yer altı su yolları (kehrizler), su kaldırma aygıtları ve su sertliği üzerine ilk teknik kılavuzu yazmıştır.
  2. Charles Elton (1900-1991): Modern ekolojinin babasıdır; besin zinciri, besin ağı ve ekoloji piramidi modellerini geliştirmiştir.
  3. Rachel Carson (1907-1964): "Sessiz Bahar" (Silent Spring) kitabıyla tarım ilaçlarının (DDT) kuşları yok ettiğini kanıtlayıp biyolojik birikim tehlikesini dünyaya duyurmuş, çevre hareketini başlatmıştır.
  4. Arjen Ysbert Hoekstra (1967-2019): "Su Ayak İzi" kavramının mucididir; küresel su ticaretini ve görünmez su tüketimini haritalandırmıştır.`,
      prompt: `Sayfa 156 Neler Öğrendik: Tarık ve Tuna'nın Su Ayak İzi Tablosu:
Tarık (3000 L su, 1,5 kg et, 20 kg bitkisel, 100 peçete, yürüyerek); Tuna (3700 L su, 2,5 kg et, 30 kg bitkisel, 150 peçete, otomobille):
Hangi öğrencinin su ayak izi daha büyüktür? Neden?`,
      interactiveAnswer: `TARIK VE TUNA SU AYAK İZİ KARŞILAŞTIRMASI:
• TUNA'NIN SU AYAK İZİ ÇOK DAHA BÜYÜKTÜR!
• Gerekçeleri:
  1. Doğrudan su tüketimi daha fazladır (3700 L > 3000 L).
  2. Hayvansal gıda tüketimi fazladır (2,5 kg > 1,5 kg). Kırmızı et üretimi en yüksek su ayak izine sahiptir (1 kg et ~ 15.000 L su).
  3. Kâğıt peçete tüketimi fazladır (Kâğıt sanayisi yüksek su tüketir).
  4. Ulaşımı otomobille yapmaktadır (Fosil yakıt üretimi ve rafineri su ayak izini doğrudan artırır). Tarık yürüyerek sıfır su tüketmiştir.`
    },
    ...unit7EndItemsG7B2
  ],
  'g7-u7-end': unit7EndItemsG7B2
};

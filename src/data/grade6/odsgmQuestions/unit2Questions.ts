import { LgsQuestion } from '../../../types/curriculum';

// ============================================================================
// 6. SINIF 2. ÜNİTE: KUVVET VE HAREKET (TEST 3) - MEB KAZANIM & BECERİ TESTLERİ
// ============================================================================

export const odsgmGrade6Unit2Questions: LgsQuestion[] = [
  // --- TEST 3: BİLEŞKE KUVVET VE SABİT SÜRATLİ HAREKET ---
  {
    id: 62101,
    subTopicId: 'g6-u2-sub1',
    contextTitle: 'Kuvvetlerin Büyüklük, Doğrultu ve Yön Analizi',
    scenario: 'Eşit kare bölmeli düzlemde F1, F2, F3, F4 ve F5 kuvvetleri gösterilmiştir (Bölmeler arası mesafe eşittir).',
    questionPrompt: 'Verilen kuvvetlerle ilgili hangi ifade yanlıştır?',
    options: [
      { key: 'A', text: 'F3 ve F5 kuvvetleri eşit büyüklüktedir.' },
      { key: 'B', text: 'F1 ve F2 farklı doğrultulardadır.' },
      { key: 'C', text: 'F1 ve F4 ters yöndedir.' },
      { key: 'D', text: 'F2, F4’ün iki katı büyüklüktedir.' }
    ],
    correctAnswer: 'B',
    explanation: 'Aynı dikey veya yatay hat üzerindeki kuvvetler aynı doğrultudadır. Yönleri zıt olsa bile doğrultuları aynı olabilir; dolayısıyla F1 ve F2 aynı doğrultudadır (farklı doğrultulardadır ifadesi yanlıştır).',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Kuvvet Vektörü Özellikleri',
    theme: 'Kuvvetin Özellikleri'
  },
  {
    id: 62102,
    subTopicId: 'g6-u2-sub1',
    contextTitle: 'Piyanoya Etki Eden Kuvvetlerin Özellikleri',
    scenario: 'Sürtünmesiz yatay düzlemde duran bir piyanoya Batı yönünde 16 N ve Doğu yönünde 14 N büyüklüğünde iki kuvvet etki etmektedir.',
    questionPrompt: 'Buna göre bu iki kuvvetin;\nI. büyüklükleri,\nII. doğrultuları,\nIII. yönleri\nözelliklerinden hangileri kesinlikle aynıdır?',
    options: [
      { key: 'A', text: 'Yalnız II.' },
      { key: 'B', text: 'Yalnız III.' },
      { key: 'C', text: 'I ve II.' },
      { key: 'D', text: 'II ve III.' }
    ],
    correctAnswer: 'A',
    explanation: 'Biri Doğu, diğeri Batı yönünde olduğu için yönleri zıttır (III aynı değil). Büyüklükleri 16 N ve 14 N olup farklıdır (I aynı değil). Ancak ikisi de Doğu-Batı ekseninde olduğu için DOĞRULTULARI kesinlikle aynıdır (Yalnız II).',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Doğrultu ve Yön Kavram Ayrımı',
    theme: 'Bileşke Kuvvet Prensipleri'
  },
  {
    id: 62103,
    subTopicId: 'g6-u2-sub1',
    contextTitle: 'Dengelenmiş ve Dengelenmemiş Kuvvetler',
    scenario: 'Günlük hayatta gözlemlediğimiz çeşitli hareket durumları incelenmektedir.',
    questionPrompt: 'Aşağıdaki varlıklardan hangisi dengelenmemiş kuvvetlerin etkisindedir?',
    options: [
      { key: 'A', text: 'Ağaç dalında duran elma' },
      { key: 'B', text: 'Sabit süratle düz yolda ilerleyen araba' },
      { key: 'C', text: 'Yokuştan aşağı hızlanan bisiklet' },
      { key: 'D', text: 'Duvarda sabit çalışan saat' }
    ],
    correctAnswer: 'C',
    explanation: 'Duran veya sabit süratle doğrusal hareket eden cisimler dengelenmiş kuvvetlerin etkisindedir (Net kuvvet = 0). Yokuştan aşağı hızlanan bisiklet ise hızlanma hareketi yaptığı için net kuvvet sıfır değildir, dengelenmemiş kuvvetlerin etkisindedir.',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'Dengelenmiş/Dengelenmemiş Kuvvet Ayrımı',
    theme: 'Net Kuvvet ve Hareket'
  },
  {
    id: 62104,
    subTopicId: 'g6-u2-sub1',
    contextTitle: 'Fırlatılan Taşın Tepe Noktasındaki Bileşke Kuvveti',
    scenario: 'Bir öğrenci elindeki taşı eğik olarak yukarı doğru fırlatıyor. Taş havada yükselip en tepe noktasına ulaşıyor.',
    questionPrompt: 'Taş en yüksek noktaya ulaştığı anda taşa etkiyen bileşke kuvvetin yönü hangi seçenekte doğru verilmiştir?',
    options: [
      { key: 'A', text: 'Yukarı doğru' },
      { key: 'B', text: 'Yatay sağa doğru' },
      { key: 'C', text: 'Eğik yukarı doğru' },
      { key: 'D', text: 'Aşağıya (Dünya’nın merkezine) doğru' }
    ],
    correctAnswer: 'D',
    explanation: 'Havadaki taşa elden çıktıktan sonra etki eden tek kuvvet Dünya\'nın uyguladığı yerçekimi kuvvetidir. En yüksek noktada da yerçekimi kuvveti aşağı yönde etki etmeye devam eder.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Yerçekimi ve Kuvvet Yönü',
    theme: 'Kuvvet ve Serbest Hareket'
  },
  {
    id: 62105,
    subTopicId: 'g6-u2-sub1',
    contextTitle: 'Kuvvet ve Hareket Temel Yasaları',
    scenario: 'Kuvvetin cisimler üzerindeki etkileri ve hareket kuralları tartışılmaktadır.',
    questionPrompt: 'Aşağıdakilerden hangisi kuvvet ile ilgili doğru bir ifadedir?',
    options: [
      { key: 'A', text: 'Sabit sürat daima sabit net kuvvet gerektirir.' },
      { key: 'B', text: 'Cisme etkiyen bileşke kuvvet sıfırsa cisim kesinlikle hareket edemez.' },
      { key: 'C', text: 'Kuvvet sadece canlılar tarafından uygulanır.' },
      { key: 'D', text: 'Cismin hareket yönünü ve ivmelenmesini, üzerine etkiyen bileşke kuvvetin yönü belirler.' }
    ],
    correctAnswer: 'D',
    explanation: 'Bileşke kuvvet sıfırdan farklı olduğunda cisim bu net kuvvet yönünde hızlanır veya yavaşlar. (Bileşke kuvvet sıfırken cisim sabit süratle de hareket edebilir).',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'Kuvvet Kavramı Doğruluğu',
    theme: 'Kuvvetin Temel Nitelikleri'
  },
  {
    id: 62106,
    subTopicId: 'g6-u2-sub1',
    contextTitle: 'Özdeş Dinamometrelerde Ağırlık Ölçümü',
    scenario: 'Şekildeki D1 ve D2 dinamometreleri özdeştir. D1 dinamometresinde asılı olan K cisminin ağırlığı 15 N olarak ölçülmüştür.',
    questionPrompt: 'Özdeş D2 dinamometresinde aynı yay bölmelendirmesiyle asılan cismin ağırlığı kaç N olarak ölçülür?',
    options: [
      { key: 'A', text: '15 N' },
      { key: 'B', text: '20 N' },
      { key: 'C', text: '25 N' },
      { key: 'D', text: '30 N' }
    ],
    correctAnswer: 'A',
    explanation: 'Dinamometre yayındaki uzama miktarı asılan cismin ağırlığıyla doğru orantılıdır. D1 ve D2 dinamometrelerindeki yay uzamaları kontrol edildiğinde eşit uzama gösteren düzenekte ağırlık 15 N ölçülür.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Dinamometre Ölçüm İlkeleri',
    theme: 'Dinamometre ve Ağırlık'
  },
  {
    id: 62107,
    subTopicId: 'g6-u2-sub2',
    contextTitle: 'Fiziksel Birimler: Sürat Birimi',
    scenario: 'Hareketli bir varlığın birim zamanda aldığı yola sürat denir (Sürat = Alınan Yol / Geçen Zaman).',
    questionPrompt: 'Aşağıdakilerden hangisi sürat birimidir?',
    options: [
      { key: 'A', text: 'kilometre / metre' },
      { key: 'B', text: 'metre x dakika' },
      { key: 'C', text: 'metre / saniye' },
      { key: 'D', text: 'saniye / kilometre' }
    ],
    correctAnswer: 'C',
    explanation: 'Yol birimi metre (m), zaman birimi saniye (s) alındığında standart sürat birimi metre/saniye (m/s) veya kilometre/saat (km/h)\'tir.',
    skillTag: 'Temel Bilgi & Mantık',
    cognitiveLevel: 'Birim Türetme ve Sürat',
    theme: 'Sürat Birimleri'
  },
  {
    id: 62108,
    subTopicId: 'g6-u2-sub1',
    contextTitle: 'Aynı Doğrultudaki Üç Kuvvetin Bileşkesi',
    scenario: 'Bir cisme uygulanan aynı doğrultudaki üç kuvvetin büyüklükleri sırasıyla 2 N, 7 N ve 9 N’dur.',
    questionPrompt: 'Buna göre bu kuvvetlerin oluşturabileceği bileşke kuvvetin büyüklüğü aşağıdakilerden hangisi olamaz?',
    options: [
      { key: 'A', text: '0 N' },
      { key: 'B', text: '8 N' },
      { key: 'C', text: '14 N' },
      { key: 'D', text: '18 N' }
    ],
    correctAnswer: 'B',
    explanation: 'Kuvvetlerin olası bileşkeleri: Hepsi aynı yöndeyse 2+7+9 = 18 N. 2 ve 7 aynı, 9 zıt yöndeyse (2+7)-9 = 0 N. 7 ve 9 aynı yönde 2 zıtsa (7+9)-2 = 14 N. Ancak 8 N değerini verecek hiçbir yön kombinasyonu kurulamaz.',
    skillTag: 'Hesaplama & Mantık',
    cognitiveLevel: 'Vektörel Bileşke Olasılıkları',
    theme: 'Bileşke Kuvvet Hesabı'
  },
  {
    id: 62109,
    subTopicId: 'g6-u2-sub2',
    contextTitle: 'Hızlanan Cismin Sürat-Zaman Grafiği',
    scenario: 'Bir cisim sürtünmesiz bir ortamda sabit süratle hareket ederken sürati zamanla düzgün olarak artmaya başlıyor. Sürat artışından sonra yoluna tekrar sabit süratle devam ediyor.',
    questionPrompt: 'Bu cismin sürat-zaman grafiği aşağıdakilerden hangisi olabilir?',
    options: [
      { key: 'A', text: 'Sürekli azalan doğrusal grafik' },
      { key: 'B', text: 'Önce yatay sabit çizgi, ardından yukarı doğru eğimli artış, sonra daha yüksek değerde yatay sabit çizgi' },
      { key: 'C', text: 'Sıfırdan başlayıp sürekli yükselen grafik' },
      { key: 'D', text: 'Sürekli dalgalanan eğri' }
    ],
    correctAnswer: 'B',
    explanation: 'Sabit süratli hareket sürat-zaman grafiğinde yatay doğru ile gösterilir. Sürat artışı yukarı doğru eğimli doğru, ardından tekrar sabit sürat ise daha üst seviyede yatay bir doğru ile temsil edilir.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Grafik Okuma ve Çizgi Analizi',
    theme: 'Sürat-Zaman Grafiği'
  },
  {
    id: 62110,
    subTopicId: 'g6-u2-sub2',
    contextTitle: 'Alınan Yol - Zaman Grafiğinde Duran Araç',
    scenario: 'Bir aracın hareketine ait Alınan Yol - Zaman grafiğinde zaman ekseni I, II, III ve IV aralıklarına ayrılmıştır. II. aralıkta alınan yol çizgisi yatay olarak sabit kalmıştır.',
    questionPrompt: 'Yukarıda alınan yol - zaman grafiği verilen araç hangi zaman aralığında yol almamıştır (durmuştur)?',
    options: [
      { key: 'A', text: 'I.' },
      { key: 'B', text: 'II.' },
      { key: 'C', text: 'III.' },
      { key: 'D', text: 'IV.' }
    ],
    correctAnswer: 'B',
    explanation: 'Alınan yol - zaman grafiğinde yolun zamana göre değişmediği yatay doğru aralığı (II. aralık), aracın hareket etmediğini (süratinin 0 olduğunu) gösterir.',
    skillTag: 'Grafik ve Tablo Yorumlama',
    cognitiveLevel: 'Yol-Zaman Grafiği Okuma',
    theme: 'Hareketsiz Cisim ve Grafikler'
  },
  {
    id: 62111,
    subTopicId: 'g6-u2-sub2',
    contextTitle: 'Karşılaşan ve Yan Yana Gelen Otobüslerin Sürat Kıyaslaması',
    scenario: '• Şekil I: Sabit süratle birbirine doğru hareket eden K ve L otobüsleri A noktasında karşılaşıyor. K otobüsü 400 m yol alırken, L otobüsü 200 m yol alıyor.\n• Şekil II: Sabit süratle aynı yöne giden L ve M otobüsleri B noktasında yan yana geliyor. Bu sürede L otobüsü 500 m, M otobüsü 300 m yol alıyor.',
    questionPrompt: 'Buna göre otobüslerin süratlerinin karşılaştırılması hangi seçenekte doğru verilmiştir?',
    options: [
      { key: 'A', text: 'K > L > M' },
      { key: 'B', text: 'L > K > M' },
      { key: 'C', text: 'M > L > K' },
      { key: 'D', text: 'L > M > K' }
    ],
    correctAnswer: 'A',
    explanation: 'Aynı sürede daha fazla yol alan aracın sürati daha büyüktür. Şekil I’de geçen sürede K 400 m, L 200 m aldığından v_K > v_L’dir. Şekil II’de aynı sürede L 500 m, M 300 m aldığından v_L > v_M’dir. Birleştirildiğinde: K > L > M sıralaması elde edilir.',
    skillTag: 'Mantık Muhakeme',
    cognitiveLevel: 'Sürat = Yol / Zaman Kıyaslaması',
    theme: 'Bağıl Hareket ve Sürat Karşılaştırması'
  },
  {
    id: 62112,
    subTopicId: 'g6-u2-sub2',
    contextTitle: 'Üç Aracın Yol-Zaman Grafiğinden Ortalama Sürat Hesabı',
    scenario: 'K, L ve M araçlarına ait grafik verileri:\n• K aracı: 6 saniyede 60 m yol almıştır.\n• L aracı: 8 saniyede 40 m yol almıştır.\n• M aracı: 4 saniyede 80 m yol almıştır.',
    questionPrompt: 'Buna göre bu araçların ortalama süratleri (m/s) hangi seçenekte doğru olarak verilmiştir?',
    options: [
      { key: 'A', text: 'K: 10 — L: 5 — M: 20' },
      { key: 'B', text: 'K: 20 — L: 10 — M: 5' },
      { key: 'C', text: 'K: 10 — L: 20 — M: 5' },
      { key: 'D', text: 'K: 20 — L: 5 — M: 10' }
    ],
    correctAnswer: 'A',
    explanation: 'Sürat = Yol / Zaman bağıntısından:\nv_K = 60 / 6 = 10 m/s\nv_L = 40 / 8 = 5 m/s\nv_M = 80 / 4 = 20 m/s bulunur.',
    skillTag: 'Hesaplama & Mantık',
    cognitiveLevel: 'Grafikten Sürat Hesaplama',
    theme: 'Sürat Hesaplamaları'
  }
];

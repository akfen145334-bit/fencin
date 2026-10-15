import { LgsQuestion } from '../../../types/curriculum';

// ============================================================================
// 6. SINIF 6. ÜNİTE: ELEKTRİĞİN İLETİMİ VE DİRENÇ (TEST 13) - MEB KAZANIM & BECERİ TESTLERİ
// ============================================================================

export const odsgmGrade6Unit6Questions: LgsQuestion[] = [
  // --- TEST 13: ELEKTRİĞİN İLETİMİ VE ELEKTRİKSEL DİRENÇ ---
  {
    id: 66101,
    subTopicId: 'g6-u6-sub1',
    contextTitle: 'İletken ve Yalıtkan Maddelerin Elektriksel Direnci',
    scenario: 'Maddelerin elektrik akımına karşı gösterdiği zorluğa elektriksel direnç denir.\nI. İletken maddelerin direnci az da olsa vardır.\nII. Yalıtkanların direnci çok küçüktür.\nIII. İletkenlerin direnci küçük, yalıtkanların dirençleri ise oldukça büyüktür.',
    questionPrompt: 'Yukarıdaki ifadelerden hangileri doğrudur?',
    options: [
      { key: 'A', text: 'Yalnız I.' },
      { key: 'B', text: 'I ve II.' },
      { key: 'C', text: 'I ve III.' },
      { key: 'D', text: 'II ve III.' }
    ],
    correctAnswer: 'C',
    explanation: 'Hiçbir iletken sıfır dirençli değildir, metallerin de az da olsa direnci vardır (I doğru). Yalıtkanlar elektrik akımına devasa direnç gösterir (II yanlış, III doğru). I ve III doğrudur.',
    skillTag: 'Kavramsal Analiz',
    cognitiveLevel: 'İletken ve Yalıtkan Direnç İlkeleri',
    theme: 'Elektriksel Direnç Tanımı'
  },
  {
    id: 66102,
    subTopicId: 'g6-u6-sub2',
    contextTitle: 'Ampul Parlaklığının İletken Kesit Alanına Bağlılığı Deneyi',
    scenario: 'Ahmet ampul parlaklığının iletkenin dik kesit alanına (kalınlığına) bağlılığını araştırmak istemektedir.\n• I. Devre: Uzunluk L, Kesit S\n• II. Devre: Uzunluk L, Kesit 2S\n• III. Devre: Uzunluk 2L, Kesit S\n• IV. Devre: Uzunluk L, Kesit 3S',
    questionPrompt: 'Ahmet’in kontrollü deney kurabilmesi için hangi iki devreyi karşılaştırması uygun olur?',
    options: [
      { key: 'A', text: 'I ve III.' },
      { key: 'B', text: 'II ve III.' },
      { key: 'C', text: 'I ve IV.' },
      { key: 'D', text: 'III ve IV.' }
    ],
    correctAnswer: 'C',
    explanation: 'Bağımsız değişken kesit alanı (kalınlık) olmalıdır. İletkenin boyu (L) ve cinsi sabit tutulup yalnızca kesit alanları farklı olan devreler seçilmelidir: I (S, L) ve IV (3S, L) ya da I ve II devreleri.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Kontrollü Deney Devre Seçimi',
    theme: 'İletkenin Kesit Alanı ve Direnç'
  },
  {
    id: 66103,
    subTopicId: 'g6-u6-sub2',
    contextTitle: 'Akkor Ampulün Yapısı ve Filaman Teli',
    scenario: 'Ampul vidalı metal kısım ve cam fanustan oluşur. İçinde filaman adı verilen tel bulunur.\nI. Filaman yüksek erime sıcaklığına sahip volfram (tungsten) metalinden yapılır.\nII. Filamanın sarmal hale getirilmesi boyunu uzatarak direncini artırır ve akkorlaşmasını sağlar.\nIII. Ampulün içinde filamanın oksitlenip yanmasını önleyen asal argon gazı bulunur.',
    questionPrompt: 'Buna göre filaman ve ampul yapısıyla ilgili yukarıdaki ifadelerden hangileri doğrudur?',
    options: [
      { key: 'A', text: 'Yalnız I.' },
      { key: 'B', text: 'Yalnız II.' },
      { key: 'C', text: 'I ve II.' },
      { key: 'D', text: 'I ve III.' }
    ],
    correctAnswer: 'D',
    explanation: 'Volfram yaklaşık 3400 °C erime noktasına sahip olduğu için yüksek sıcaklıkta erimez (I doğru). İçerisindeki argon gazı telin yanmasını engeller (III doğru).',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Akkor Lamba Teknolojisi',
    theme: 'Ampulün Yapısı ve Direnç'
  },
  {
    id: 66104,
    subTopicId: 'g6-u6-sub2',
    contextTitle: 'Farklı Boy ve Kesit Alanına Sahip İletkenlerin Dirençleri',
    scenario: 'Aynı maddeden yapılmış iletkenler:\n• X iletkeni: Boy 10 cm, Kesit S\n• Y iletkeni: Boy 20 cm, Kesit S\n• Z iletkeni: Boy 10 cm, Kesit 2S',
    questionPrompt: 'Buna göre bu iletken tellerin elektriksel dirençlerinin büyükten küçüğe sıralaması hangisidir?',
    options: [
      { key: 'A', text: 'X > Y > Z' },
      { key: 'B', text: 'Y > X > Z' },
      { key: 'C', text: 'Z > Y > X' },
      { key: 'D', text: 'Z > X > Y' }
    ],
    correctAnswer: 'B',
    explanation: 'Direnç telin boyuyla doğru, kesit alanıyla ters orantılıdır (R = L / S). Y teli en uzun olduğundan direnci en büyüktür (20/S). Z teli kalın olduğundan direnci en küçüktür (10/2S = 5). Sıralama: Y > X > Z.',
    skillTag: 'Hesaplama & Mantık',
    cognitiveLevel: 'İletken Geometrisi ve Direnç Oranı',
    theme: 'Direnci Etkileyen Faktörler'
  },
  {
    id: 66105,
    subTopicId: 'g6-u6-sub2',
    contextTitle: 'İletkenin Cinsi ve Ampul Parlaklığı Kontrollü Deneyi',
    scenario: 'Zeynep boyları (L) ve kesit alanları (S) eşit olan Gümüş ve Bakır telleri özdeş devrelerde kullanarak ampul parlaklıklarını gözlemlemiştir.',
    questionPrompt: 'Zeynep’in deneyindeki bağımlı, bağımsız ve sabit tutulan değişkenler hangi seçenekte doğru verilmiştir?',
    options: [
      { key: 'A', text: 'Bağımlı: İletkenin cinsi — Bağımsız: Pil sayısı — Sabit: Tel uzunluğu' },
      { key: 'B', text: 'Bağımlı: Ampul parlaklığı — Bağımsız: İletkenin cinsi — Sabit: Pil sayısı ve tel boyutları' },
      { key: 'C', text: 'Bağımlı: Pil sayısı — Bağımsız: İletkenin cinsi — Sabit: Dik kesit alanı' },
      { key: 'D', text: 'Bağımlı: Dik kesit alanı — Bağımsız: Pil sayısı — Sabit: Ampul parlaklığı' }
    ],
    correctAnswer: 'B',
    explanation: 'Deneyde bizim değiştirdiğimiz etken iletkenin cinsidir (Bağımsız değişken). Buna bağlı olarak değişen sonuç ampul parlaklığıdır (Bağımlı değişken). Sabit tutulanlar ise pil sayısı, tel boyu ve kesit alanıdır.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Bilimsel Süreç Becerileri Değişken Tespiti',
    theme: 'Kontrollü Deney Değişkenleri'
  },
  {
    id: 66106,
    subTopicId: 'g6-u6-sub2',
    contextTitle: 'İletkenin Boyu ve Ampul Parlaklığı İlişkisi',
    scenario: 'Bilgi: İletkenin boyu arttıkça elektriksel direnç artar, devreden geçen akım azalır.\nÖzdeş devrelerde kullanılan bakır tellerin boyları:\n1. Devre: 10 cm\n2. Devre: 15 cm\n3. Devre: 20 cm',
    questionPrompt: 'Verilen devrelerdeki ampullerin parlaklıkları arasındaki ilişki nasıl olur?',
    options: [
      { key: 'A', text: '1 > 2 > 3' },
      { key: 'B', text: '1 > 3 > 2' },
      { key: 'C', text: '2 > 3 > 1' },
      { key: 'D', text: '3 > 2 > 1' }
    ],
    correctAnswer: 'A',
    explanation: 'Boyu en kısa olan 1. devredeki telin direnci en küçüktür; akım en fazla geçeceği için ampul en parlak yanar. Boy uzadıkça direnç artar ve parlaklık azalır: 1 > 2 > 3.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'İletken Boyu ve Parlaklık Bağıntısı',
    theme: 'Tel Boyu ve Devre Akımı'
  },
  {
    id: 66107,
    subTopicId: 'g6-u6-sub1',
    contextTitle: 'Demir Çubuk Yerine Gümüş Çubuk Bağlanması',
    scenario: 'Elektrik devresinde test uçları arasına demir çubuk bağlanmıştır. Demir çubuk sökülüp yerine aynı boy ve kalınlıkta gümüş çubuk bağlanıyor (İletkenlik: Demir < Gümüş).',
    questionPrompt: 'Buna göre devrede meydana gelen değişimle ilgili;\nI. Gümüşün elektriksel direnci daha düşük olduğu için ampul daha parlak yanar.\nII. Gümüşün iletkenliği daha yüksek olduğu için ampul daha parlak yanar.\nIII. Devrenin toplam elektriksel direnci artmıştır.\nyargılarından hangileri doğrudur?',
    options: [
      { key: 'A', text: 'Yalnız I.' },
      { key: 'B', text: 'Yalnız II.' },
      { key: 'C', text: 'I ve II.' },
      { key: 'D', text: 'I ve III.' }
    ],
    correctAnswer: 'C',
    explanation: 'Gümüş elektriği demirden daha iyi iletir (özdirenci daha küçüktür). Direnç azaldığı için devre akımı artar ve ampul daha parlak yanar (I ve II doğru).',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Özdirenç ve İletkenlik Karşılaştırması',
    theme: 'Maddelerin İletkenlik Derecesi'
  },
  {
    id: 66108,
    subTopicId: 'g6-u6-sub2',
    contextTitle: 'Dirençölçerde 6 Ohm Değerini Artırma Yolları',
    scenario: 'Dirençölçer ile 40 cm boyunda ve 10 cm² kesit alanına sahip iletken telin direnci 6 ohm olarak ölçülmüştür.',
    questionPrompt: 'Aynı cins aşağıdaki tellerden hangisi bağlanırsa dirençölçerde okunan değer 6 ohmdan daha fazla olur?',
    options: [
      { key: 'A', text: 'Boy: 40 cm, Kesit: 5 cm² (Daha ince tel)' },
      { key: 'B', text: 'Boy: 40 cm, Kesit: 10 cm²' },
      { key: 'C', text: 'Boy: 40 cm, Kesit: 15 cm²' },
      { key: 'D', text: 'Boy: 40 cm, Kesit: 20 cm²' }
    ],
    correctAnswer: 'A',
    explanation: 'İletken tel inceldikçe (kesit alanı azaldıkça) elektriksel direnç artar. Kesit alanı 10 cm²\'den 5 cm²\'ye düşürülen A seçeneğindeki telin direnci iki katına çıkarak 12 ohm (>6 ohm) olur.',
    skillTag: 'Hesaplama & Mantık',
    cognitiveLevel: 'Kesit Alanı Değişimi ve Direnç Artışı',
    theme: 'Direnç Hesapları'
  },
  {
    id: 66109,
    subTopicId: 'g6-u6-sub1',
    contextTitle: 'Hem İletken Hem Yalıtkan İçeren Araçlar',
    scenario: 'Araçlar:\nI. Kurşun kalem (Grafit uç iletken, ahşap gövde yalıtkan)\nII. Kontrol kalemi (Metal tornavida ucu iletken, plastik gövde yalıtkan)\nIII. Floresan lamba (Metal bağlantı pimleri iletken, cam tüp yalıtkan)\nIV. Bakalit çubuk (Tamamen yalıtkan)',
    questionPrompt: 'Yukarıdaki araçların hangilerinin yapısında hem iletken hem yalıtkan maddeler bir arada bulunur?',
    options: [
      { key: 'A', text: 'Yalnız II.' },
      { key: 'B', text: 'I ve IV.' },
      { key: 'C', text: 'III ve IV.' },
      { key: 'D', text: 'I, II ve III.' }
    ],
    correctAnswer: 'D',
    explanation: 'Kurşun kalem, kontrol kalemi ve floresan lamba hem elektrik ileten kısımlara hem de kullanıcıyı koruyan/tutulan yalıtkan kısımlara sahiptir (I, II ve III).',
    skillTag: 'Günlük Yaşam Bağı',
    cognitiveLevel: 'İletken-Yalıtkan Kompozit Yapılar',
    theme: 'İletken ve Yalıtkan Kullanımı'
  },
  {
    id: 66110,
    subTopicId: 'g6-u6-sub2',
    contextTitle: 'Aynı Kesitteki Üç Metal Telin Direnç Sıralaması',
    scenario: 'Aynı metalden yapılmış ve kesit alanları eşit (S) olan üç tel:\n• K teli: 30 cm\n• L teli: 20 cm\n• M teli: 15 cm',
    questionPrompt: 'Bu tellerin elektriksel dirençlerinin büyükten küçüğe doğru sıralanışı nasıldır?',
    options: [
      { key: 'A', text: 'M > L > K' },
      { key: 'B', text: 'L > K > M' },
      { key: 'C', text: 'K > M > L' },
      { key: 'D', text: 'K > L > M' }
    ],
    correctAnswer: 'D',
    explanation: 'Kesit alanları eşitken telin boyu arttıkça elektronların çarpışma sayısı yani elektriksel direnç artar. En uzun K teli en büyük dirence, en kısa M teli en küçük dirence sahiptir: K > L > M.',
    skillTag: 'Model ve Şema Yorumlama',
    cognitiveLevel: 'Boyut-Direnç Bağıntısı',
    theme: 'İletken Boyu ve Direnç'
  },
  {
    id: 66111,
    subTopicId: 'g6-u6-sub1',
    contextTitle: 'Sıvıların İletkenliği ve Tuzlu Su Çözeltisi',
    scenario: 'Berat kurduğu elektrik devresinde uçları saf su dolu kaba daldırmış ancak ampulün ışık vermediğini görmüştür (Saf su yalıtkandır).',
    questionPrompt: 'Ampulün ışık vermesini isteyen Berat, devresinde hangi değişikliği yapmalıdır?',
    options: [
      { key: 'A', text: 'Kaba biraz daha saf su eklemeli' },
      { key: 'B', text: 'Saf suya tuz (sofra tuzu) döküp karıştırmalı' },
      { key: 'C', text: 'Telin bir ucunu sudan çıkarmalı' },
      { key: 'D', text: 'Kaptaki suyu tamamen boşaltmalı' }
    ],
    correctAnswer: 'B',
    explanation: 'Saf su elektriği iletmez (yalıtkandır). İçerisine sofra tuzu (NaCl) atılıp çözündüğünde serbest sodyum ve klor iyonları oluşur; tuzlu su güçlü bir elektrolit iletken haline gelerek ampulün yanmasını sağlar.',
    skillTag: 'Deney & Değişken Analizi',
    cognitiveLevel: 'Sıvı İletkenliği ve İyonik Çözeltiler',
    theme: 'İletken ve Yalıtkan Sıvılar'
  },
  {
    id: 66112,
    subTopicId: 'g6-u6-sub2',
    contextTitle: 'Devredeki Ampul Parlaklığını Artırma Yöntemleri',
    scenario: 'Bir öğrenci basit bir elektrik devresinde bağlı olan ampulün daha parlak yanmasını istemektedir.',
    questionPrompt: 'Buna göre öğrenci;\nI. Telin kalınlığını azaltmak (inceltmek)\nII. Telin boyunu kısaltmak\nIII. Devreye seri bir ampul daha bağlamak\nişlemlerinden hangilerini yapabilir?',
    options: [
      { key: 'A', text: 'Yalnız II.' },
      { key: 'B', text: 'I ve III.' },
      { key: 'C', text: 'II ve III.' },
      { key: 'D', text: 'I, II ve III.' }
    ],
    correctAnswer: 'A',
    explanation: 'Parlaklığı artırmak için devredeki direnç azaltılmalıdır. Telin boyunu kısaltmak direnci düşürür ve ampulü daha parlak yapar (II doğru). Teli inceltmek direnci artırır (I yanlış). Ek ampul bağlamak eşdeğer direnci artırıp parlaklığı düşürür (III yanlış). Yalnız II yapılabilir.',
    skillTag: 'Bilimsel Çıkarım',
    cognitiveLevel: 'Devre Direncini Optimize Etme',
    theme: 'Ampul Parlaklığını Değiştirme'
  }
];

import { Unit } from '../../types/curriculum';
import { grade8Unit1End20Questions } from './grade8UnitEndExams';
import { sebahattinMevsimlerQuestions, sebahattinIklimQuestions } from './sebahattinQuestions';

export const grade8Unit1Data: Unit = {
  id: 'g8-unit-1',
  unitNumber: 1,
  bookNumber: 1,
  grade: 8,
  subject: 'Fen Bilimleri',
  title: 'Mevsimler ve İklim',
  unitEndPageRange: 'Ünite Sonu',
  colorTheme: {
    primary: 'from-sky-600 to-indigo-700',
    border: 'border-sky-500/40',
    bg: 'bg-sky-950/40',
    accent: 'text-sky-400',
    text: 'text-sky-200'
  },
  unitEnd20Questions: grade8Unit1End20Questions,
  subTopics: [
    {
      id: 'g8-u1-sub1',
      title: '1. Bölüm: Mevsimlerin Oluşumu',
      shortTitle: 'Mevsimlerin Oluşumu',
      badge: 'Kavramlar & LGS',
      pageRange: '',
      concepts: [
        'Dünya’nın Geoid Şekli',
        'Dönme Ekseni ve Eksen Eğikliği (23° 27\')',
        'Dolanma Düzlemi ve Yörünge',
        'Güneş Işınlarının Düşme Açısı (Dik vs Eğik)',
        'Aydınlanan Alan ve Birim Yüzeye Düşen Enerji',
        '21 Haziran Yaz Gündönümü',
        '21 Aralık Kış Gündönümü',
        '21 Mart - 23 Eylül Ekinoksu',
        'Gece-Gündüz Süreleri Değişimi',
        'Gölge Boyu ve 45° Kuralı'
      ],
      simulationId: 'moon-phases',
      summarySections: [
        {
          heading: 'Dünya’nın Şekli, Eksen Eğikliği ve Temel Hareketler',
          paragraphs: [
            'Dünya kutuplardan basık, Ekvator\'dan şişkin kendine has bir şekle sahiptir ve bu şekle "Geoit" adı verilir. Dünya kendi dönme ekseni etrafında batıdan doğuya (saat yönünün tersine) doğru döner ve bu hareketini 24 saatte tamamlar.',
            'Kendi ekseni etrafında dönmesi sonucunda gece ve gündüz birbirini takip eder (ardalanır). Gece ve gündüz ardalanmasına bağlı olarak, gün içinde Güneş ışınlarının yeryüzüne geliş açısı sürekli değişir ve bu durum "günlük sıcaklık farklarının" meydana gelmesine neden olur (ÖS ÇIKTI).',
            'Dünya, Güneş etrafında "elips" şeklinde bir yörüngede (yörünge düzleminde) dolanma hareketi yapar. Bu yörüngede dolanırken Dünya\'nın dönme ekseni yörünge düzlemine tam dik değildir, 23 derece 27 dakikalık bir eğikliğe sahiptir.',
            'Mevsimlerin oluşmasında iki temel olay etkilidir: Dünya\'nın Güneş etrafında dolanması ve dönme ekseninin eğik olması (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Dünya\'nın Güneş etrafındaki elips şeklindeki yörüngesinden dolayı Güneş\'e olan uzaklığı yıl içinde sürekli değişir (Örneğin 3 Ocak\'ta Güneş\'e en yakın konumdadır). Ancak, Dünya\'nın Güneş\'e olan uzaklığının değişmesi mevsimlerin oluşumu veya hava sıcaklığı değişimleri üzerinde kesinlikle etkili değildir (ÖS ÇIKTI).',
            'Kuzey ve Güney yarım kürelerde aynı anda birbirinin tam tersi (farklı) mevsimlerin yaşanmasının temel sebebi dönme ekseninin eğikliği ve Dünya\'nın Güneş etrafındaki dolanma hareketidir (LGS ÇIKTI).'
          ],
          keyPoints: [
            'Dönme Hareketi: 24 saatte tamamlanır, gece ve gündüzün ardalanmasını ve gün içi sıcaklık farklarını oluşturur (ÖS ÇIKTI).',
            'Dolanma Hareketi & Eksen Eğikliği: 365 gün 6 saatte tamamlanır; mevsimlerin oluşumunu ve yarım kürelerde farklı mevsimlerin yaşanmasını sağlar (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Mesafe Etkisizliği: 3 Ocak\'ta Dünya Güneş\'e en yakın olmasına rağmen Kuzey Yarım Küre kış mevsimini yaşar; mesafe mevsim yapmaz (ÖS ÇIKTI).'
          ]
        },
        {
          heading: 'Güneş Işınlarının Geliş Açısı, Aydınlanma Alanı ve Gölge Boyu İlişkisi',
          paragraphs: [
            'Güneş ışınlarının yeryüzüne düşme açısı büyüdükçe (dik ve dike yakın 90 derecelik açılarla geldikçe) ışınların yeryüzünde aydınlattığı alan küçülür (daralır). Alan küçüldüğü için birim yüzeye düşen (aktarılan) enerji miktarı artar ve bu durum o bölgede yaz mevsiminin yaşanmasına neden olur (ÖS ÇIKTI) (LGS ÇIKTI).',
            'Güneş ışınlarının yeryüzüne düşme açısı küçüldükçe (eğik açıyla geldikçe) aydınlanan alan büyür (genişler). Alan büyüdüğü için ışınların enerjisi daha geniş bir yüzeye dağılır, birim yüzeye düşen ışık miktarı ve ısı enerjisi azalır, bu da o bölgede kış mevsiminin yaşanmasına neden olur (ÖS ÇIKTI).',
            'Güneş ışınlarının geliş açısı ile cisimlerin gölge boyu arasında ters orantı vardır; ışınlar dik veya dike yakın açıya yaklaştıkça gölge boyu kısalır, eğik açıya yaklaştıkça gölge boyu uzar (ÖS ÇIKTI).',
            'Bir bölgede öğle vakti bir cismin gölgesinin yönüne ve en uzun/kısa günlerin yaşandığı tarihlere bakılarak o bölgenin Dünya üzerinde hangi yarım kürede yer aldığı kesin olarak tespit edilebilir (ÖS ÇIKTI).'
          ],
          table: {
            headers: ['Özellik', 'Dik Düşen Işınlar (Yaz)', 'Eğik Düşen Işınlar (Kış)'],
            rows: [
              ['Geliş Açısı', 'Büyük açı (Dike yakın / 90°)', 'Küçük açı (Eğik açı)'],
              ['Aydınlanan Yüzey Alanı', 'Dar alan (küçük)', 'Geniş alan (büyük) (ÖS ÇIKTI)'],
              ['Birim Alana Düşen Enerji', 'Yüksek enerji miktarı (LGS ÇIKTI)', 'Düşük enerji miktarı (ÖS ÇIKTI)'],
              ['Mevsimsel Etki', 'Yaz mevsimi (LGS ÇIKTI)', 'Kış mevsimi (ÖS ÇIKTI)'],
              ['Öğle Vakti Gölge Boyu', 'Kısa veya sıfır (ÖS ÇIKTI)', 'Oldukça uzun (ÖS ÇIKTI)']
            ]
          }
        },
        {
          heading: 'Önemli Tarihler (Mevsim Geçişleri ve Ekinokslar)',
          paragraphs: [
            '21 Haziran (Gün Dönümü): Kuzey yarım kürede yaz, Güney yarım kürede kış mevsiminin başlangıcıdır. Kuzey yarım kürede yılın en uzun gündüzü, en kısa gecesi yaşanır. Bu tarihte Güneş ışınları Kuzey yarım küredeki Yengeç Dönencesi\'ne öğle vakti tam dik (90 derece) açıyla gelir (LGS ÇIKTI) (ÖS ÇIKTI).',
            '21 Aralık (Gün Dönümü): Kuzey yarım kürede kış, Güney yarım kürede yaz mevsiminin başlangıcıdır. Kuzey yarım kürede yılın en uzun gecesi yaşanırken, Güney yarım kürede en uzun gündüz yaşanır. Güneş ışınları Güney yarım küredeki Oğlak Dönencesi\'ne öğle vakti tam dik açıyla gelir (ÖS ÇIKTI).',
            '21 Mart ve 23 Eylül (Ekinoks): Eksen eğikliğinin etkisi ortadan kalkar. Tüm dünyada gece ve gündüz süreleri birbirine eşittir (12 saat gündüz, 12 saat gece yaşanır). Güneş ışınları Ekvator çizgisine öğle vakti dik düşer (ÖS ÇIKTI).',
            'Bir yarım kürede (Örneğin Kuzey yarım kürede 21 Haziran\'da) en uzun gündüz yaşandıktan sonra, gündüz süreleri günden güne kısalmaya başlasa dahi, bir sonraki ekinoks tarihine (23 Eylül) kadar gündüz süresi gece süresinden daha uzun olmaya devam eder (ÖS ÇIKTI).',
            'Farklı yarım kürelerde olup Ekvator\'a eşit uzaklıkta bulunan noktalarda yılın aynı gününde farklı mevsimler yaşanır; ancak yılın belirli farklı aylarında (örneğin biri için Ocak, diğeri için Temmuz) Güneş ışınlarının düşme açıları paralellik gösterdiği için sıcaklık ortalamaları birbirine eşit olabilir (LGS ÇIKTI).'
          ],
          table: {
            headers: ['Kavram / Soru Alanı', 'Öğrencinin Düşündüğü (Yanlış Mantık)', 'Kavram Yanılgısının Düzeltilmesi (Doğru Yaklaşım)'],
            rows: [
              ['Mevsimlerin Oluşumu', 'Dünya Güneş\'e yaklaştığında yaz, uzaklaştığında kış yaşanır.', 'Mesafe farkı mevsim yapmaz. 3 Ocak\'ta Dünya en yakınken KYK kış yaşar. Asıl neden eksen eğikliği ve geliş açısıdır (ÖS ÇIKTI).'],
              ['Gün Dönümü Sonrası Süreler', '21 Haziran\'dan sonra gündüzler kısalmaya başladığı için ertesi günden itibaren geceler gündüzden uzun olur.', '21 Haziran\'da gündüz zirvedir; ertesi gün kısalmaya başlar ama 23 Eylül ekinoksuna kadar gündüz süresi geceden uzundur (ÖS ÇIKTI).'],
              ['Aydınlanma Alanı ve Isı', 'Güneş ışınları eğik geldiğinde daha geniş alanı aydınlattığı için o bölge daha çok ısınır.', 'Toplam enerji geniş alana dağıldığında birim yüzeye düşen enerji yoğunluğu azalır, bu yüzden kış yaşanır (ÖS ÇIKTI).'],
              ['Ekinoks ve Eksen Eğikliği', '21 Mart ve 23 Eylül\'de Dünya\'nın eksen eğikliği tamamen ortadan kalkarak düzelir.', 'Eksen eğikliği fiziksel olarak daima 23° 27\'dir; ekinoksta sadece geliş doğrultusu nedeniyle eksen eğikliğinin "etkisi" kalkar (ÖS ÇIKTI).'],
              ['Yaz Mevsimi ve 90° Dik Açı', 'Bir yerde yaz mevsimi yaşanıyorsa Güneş ışınları kesinlikle 90° dik açıyla geliyordur.', 'Işınlar sadece dönenceler arasına dik düşer. Dönenceler dışında kalan yerlere (ör. Türkiye) yazın ışınlar dik değil, "dike yakın" açılarla gelir (LGS ÇIKTI).']
            ]
          },
          examNote: '📌 LGS & ÖS ÇIKMIŞ SORU KRİTİK KALIPLARI: 1) Ekvator üzerinde yıl boyu gece ve gündüz süresi 12 saat eşit olmasına rağmen, Güneş ışınlarının geliş açısının değişmesi nedeniyle yıl içinde sıcaklık farklılıkları yaşanır (ÖS ÇIKTI). 2) Dönenceler dışındaki bölgelerde (örneğin Türkiye\'de) Güneş ışınları hiçbir zaman 90° tam dik açıyla düşmez; bu nedenle öğle vakti gölge boyu asla sıfır olmaz (LGS ÇIKTI). 3) Öğle vakti gölge yönüne ve gündüz uzunluğuna bakılarak bir noktanın hangi yarım kürede olduğu kesin tespit edilebilir (ÖS ÇIKTI).'
        }
      ],
      glossary: [
        { term: 'Eksen Eğikliği', definition: 'Dünya’nın dönme ekseni ile dolanma düzlemi arasındaki 23 derece 27 dakikalık açısal sapma.' },
        { term: 'Solstis (Gündönümü)', definition: 'Güneş ışınlarının dönencelere dik geldiği ve yarım kürelerde en uzun gece veya gündüzün yaşandığı 21 Haziran ve 21 Aralık tarihleri.' },
        { term: 'Ekinoks', definition: 'Güneş ışınlarının Ekvator’a dik açıyla düştüğü ve tüm Dünya’da gece-gündüz sürelerinin eşitlendiği 21 Mart ve 23 Eylül tarihleri.' },
        { term: 'Birim Alandaki Enerji', definition: 'Işığın yüzeye düşme açısına bağlı olarak bir metrekareye aktarılan foton ve ısı enerjisi miktarı.' },
        { term: 'Gölge Boyu', definition: 'Bir cismin arkasında oluşan ışıksız alan uzunluğu; ışının düşme açısıyla ters orantılıdır.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Mevsimlerin oluşmasında Dünya’nın Güneş’e olan mesafesinin değişmesi etkilidir.', isCorrect: false, explanation: 'Mevsimlerin sebebi Güneş’e olan mesafe değil, eksen eğikliği ve dolanma hareketidir.' },
        { id: 2, statement: '21 Haziran tarihinde Güneş ışınları öğle vakti Yengeç Dönencesi’ne dik açıyla düşer.', isCorrect: true, explanation: '21 Haziran yaz gündönümünde Yengeç Dönencesi dik açı alır.' },
        { id: 3, statement: 'Güneş ışınlarının gelme açısı küçüldükçe aydınlanan alan daralır ve sıcaklık artar.', isCorrect: false, explanation: 'Açı küçüldükçe ışık geniş bir alana yayılır ve birim alana düşen ısı enerjisi azalır.' },
        { id: 4, statement: 'Ekvator çizgisi üzerinde yıl boyunca daima 12 saat gece ve 12 saat gündüz yaşanır.', isCorrect: true, explanation: 'Ekvator’da gece-gündüz süresi yıl boyu sabittir ve 12 saattir.' },
        { id: 5, statement: '21 Aralık tarihinde Kuzey Yarım Küre’de en uzun gece, Güney Yarım Küre’de en uzun gündüz yaşanır.', isCorrect: true, explanation: '21 Aralık KYK kış gündönümü, GYK yaz gündönümüdür.' },
        { id: 6, statement: '21 Mart ve 23 Eylül tarihlerinde eksen eğikliğinin etkisi geçici olarak ortadan kalkar.', isCorrect: true, explanation: 'Ekinoks tarihlerinde aydınlanma çemberi kutuplardan geçer ve gece-gündüz eşitlenir.' },
        { id: 7, statement: 'Güneş ışınları 45 derecelik açıyla geldiğinde bir çubuğun gölge boyu kendi boyuna eşit olur.', isCorrect: true, explanation: '45 derecelik açıda ikizkenar dik üçgen oluşur ve gölge boyu cismin boyuna eşittir.' },
        { id: 8, statement: 'Türkiye’ye Güneş ışınları yıl içinde en az iki kez 90 derecelik dik açıyla düşer.', isCorrect: false, explanation: 'Türkiye dönencelerin dışında yer aldığı için hiçbir zaman 90 derecelik dik açı alamaz.' },
        { id: 9, statement: '21 Haziran tarihinden sonra Kuzey Yarım Küre’de gündüzler kısalmaya başlar.', isCorrect: true, explanation: '21 Haziran en uzun gündüz zirvesidir, bu tarihten sonra gündüzler kısalmaya başlar.' },
        { id: 10, statement: 'Dünya kendi ekseni etrafında dönerken dolanma düzlemi ile ekvator düzlemi birbiriyle çakışır.', isCorrect: false, explanation: 'Eksen eğikliği nedeniyle dolanma düzlemi ile ekvator düzlemi arasında 23° 27\' açı vardır.' }
      ],
      lgsQuestions: [
        ...sebahattinMevsimlerQuestions,
        {
          id: 1,
          theme: 'Güneş Işınlarının Düşme Açısı ve Sıcaklık Artışı',
          cognitiveLevel: 'Deney ve Değişken Analizi',
          contextTitle: 'Özdeş Işık Kaynakları ve Termometre Deneyi',
          scenario: 'Bir araştırmacı başlangıç sıcaklıkları eşit olan özdeş K, L ve M termometrelerini özdeş zeminler üzerine koymuş ve özdeş ışık kaynaklarını eşit mesafelerden farklı açılarla tutmuştur. K termometresine ışık 90 derece dik açıyla, L termometresine 60 derece açıyla, M termometresine ise 25 derece eğik açıyla 15 dakika boyunca gönderilmiştir.',
          questionPrompt: 'Yapılan bu kontrollü deney sonucunda termometrelerde okunan sıcaklık artışları arasındaki ilişki hangisinde doğru olarak verilmiştir?',
          options: [
            { key: 'A', text: 'K termometresindeki sıcaklık artışı L termometresinden, L termometresindeki artış ise M termometresinden fazladır.' },
            { key: 'B', text: 'M termometresindeki sıcaklık artışı L termometresinden, L termometresindeki artış ise K termometresinden fazladır.' },
            { key: 'C', text: 'L termometresindeki sıcaklık artışı K ve M termometrelerinin sıcaklık artışlarının aritmetik ortalamasından düşüktür.' },
            { key: 'D', text: 'Her üç termometredeki sıcaklık artışları birbirine eşit olup ışığın geliş açısı sıcaklığı etkilememiştir.' }
          ],
          correctAnswer: 'A',
          explanation: 'Işınlar ne kadar dik yani büyük açıyla gelirse birim alana düşen ısı enerjisi o kadar fazla olur. K (90°) > L (60°) > M (25°) olduğundan sıcaklık artışı K > L > M şeklindedir.'
        },
        {
          id: 2,
          theme: 'Gölge Boyu ve Işık Açısı İlişkisi',
          cognitiveLevel: 'Gözlem ve Grafik Muhakemesi',
          contextTitle: 'Öğle Vakti Çubuk Gölgesi ve 45 Derece Kuralı',
          scenario: 'Dönence üzerinde bulunan bir gözlem istasyonunda 100 cm uzunluğundaki özdeş bir çubuğun öğle vakti gölge boyu farklı tarihlerde ölçülmüştür. Birinci tarihte gölge boyu tam 100 cm, ikinci tarihte sıfır cm, üçüncü tarihte ise 180 cm olarak kaydedilmiştir.',
          questionPrompt: 'Yapılan ölçüm sonuçlarına göre Güneş ışınlarının geliş açıları hakkında aşağıdaki yorumlardan hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Gölge boyunun sıfır olduğu tarihte ışınlar yerle 45 derecelik açı yapmaktadır.' },
            { key: 'B', text: 'Gölge boyunun 100 cm olduğu tarihte ışınlar 45 derecelik açıyla, sıfır olduğu tarihte ise 90 derecelik dik açıyla gelmiştir.' },
            { key: 'C', text: 'Gölge boyunun 180 cm olduğu tarihte Güneş ışınları yüzeye dik açıyla ulaşmıştır.' },
            { key: 'D', text: 'Geliş açısı küçüldükçe aydınlanan alan ve gölge boyu aynı oranda küçülme gösterir.' }
          ],
          correctAnswer: 'B',
          explanation: 'Işık 90° dik geldiğinde gölge sıfırdır. Işık 45° açıyla geldiğinde ikizkenar dik üçgen kuralı gereğince gölge boyu cismin gerçek boyuna eşit olur (100 cm).'
        },
        {
          id: 3,
          theme: '21 Haziran Tarihinde Gece ve Gündüz Süreleri Dağılımı',
          cognitiveLevel: 'Grafik ve Tablo Yorumlama',
          contextTitle: 'Farklı Yarım Kürelerdeki Şehirlerin Süre Analizi',
          scenario: '21 Haziran tarihinde Dünya üzerinde yer alan X, Y ve Z şehirlerinde ölçülen gündüz süreleri şu şekildedir: X şehrinde gündüz süresi 15 saat, Y şehrinde gündüz süresi 12 saat, Z şehrinde ise gündüz süresi 8 saattir.',
          questionPrompt: 'Verilen bu ölçüm sonuçlarına göre X, Y ve Z şehirlerinin Dünya üzerindeki konumları ile ilgili aşağıdaki yargılardan hangisi doğrudur?',
          options: [
            { key: 'A', text: 'X şehri Güney Yarım Küre’de, Y şehri Yengeç Dönencesi üzerinde, Z şehri ise Ekvator çizgisi üzerindedir.' },
            { key: 'B', text: 'Z şehri Kuzey Yarım Küre’de, Y şehri Oğlak Dönencesi üzerinde, X şehri ise Ekvator üzerindedir.' },
            { key: 'C', text: 'X şehri Kuzey Yarım Küre’de, Y şehri Ekvator çizgisi üzerinde, Z şehri ise Güney Yarım Küre’dedir.' },
            { key: 'D', text: 'Her üç şehir de aynı yarım kürede yer almakta olup sadece yükseltileri birbirinden farklıdır.' }
          ],
          correctAnswer: 'C',
          explanation: '21 Haziran tarihinde Kuzey Yarım Küre\'de gündüz süresi 12 saatten uzundur (X = 15 saat). Ekvator\'da daima 12 saat gündüz yaşanır (Y = 12 saat). Güney Yarım Küre\'de ise kış olduğundan gündüz süresi 12 saatten kısadır (Z = 8 saat).'
        },
        {
          id: 4,
          theme: 'Dünya’nın Güneş’e Uzaklığı ve Mevsim İlişkisi',
          cognitiveLevel: 'Kavramsal Yanılgı ve Bilimsel Muhakeme',
          contextTitle: 'Eliptik Yörünge ve Günberi Tarihi Analizi',
          scenario: 'Bir öğrenci fen bilimleri dersinde şu hipotezi kurmuştur: Dünya Güneş’e yaklaştığında hava ısınır ve yaz mevsimi yaşanır, Güneş’ten uzaklaştığında ise hava soğur ve kış mevsimi yaşanır.',
          questionPrompt: 'Aşağıdaki bilimsel kanıtlardan hangisi öğrencinin kurduğu bu hipotezin kesinlikle yanlış olduğunu tek başına kanıtlar?',
          options: [
            { key: 'A', text: 'Dünya’nın kendi ekseni etrafındaki dönme hızının gece ve gündüz periyodu boyunca hiç değişmeden sabit kalması.' },
            { key: 'B', text: 'Ay’ın Dünya etrafında dolanırken yörüngesinin elips şeklinde olması sebebiyle evrelerin periyodik olarak tekrarlanması.' },
            { key: 'C', text: 'Ekvator çizgisi üzerinde yıl boyunca gece ve gündüz sürelerinin birbirine eşit olması.' },
            { key: 'D', text: 'Dünya’nın Güneş’e en yakın olduğu 3 Ocak tarihinde Kuzey Yarım Küre’de dondurucu kış mevsiminin yaşanması.' }
          ],
          correctAnswer: 'D',
          explanation: 'Dünya Güneş’e en yakın olduğu 3 Ocak günberi tarihinde Kuzey Yarım Küre kış yaşamaktadır. Bu gerçek mesafenin mevsimlerle hiçbir ilgisi olmadığını tek başına kanıtlar.'
        },
        {
          id: 5,
          theme: 'Dünya Modeli ve Eksen Eğikliği Deneyi',
          cognitiveLevel: 'Laboratuvar ve Model Yorumu',
          contextTitle: 'Karanlık Ortamda Işık Kaynağı ve İki Ülke Karşılaştırması',
          scenario: 'Fen laboratuvarında dönme ekseni 23 derece 27 dakika eğik olan Dünya modeline Türkiye ve Brezilya noktalarına özdeş termometreler yapıştırılmıştır. Işık kaynağı 21 Haziran konumundan tutularak 10 dakika beklenmiş ve sıcaklık artışları kaydedilmiştir.',
          questionPrompt: 'Bu modelleme sonucunda termometrelerde okunan değerler hakkında yapılan çıkarımlardan hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Kuzey Yarım Küre ışık kaynağına dönük olduğu için Türkiye’deki termometrenin sıcaklık artışı Brezilya’dan fazladır.' },
            { key: 'B', text: 'Brezilya ışık kaynağından gelen ışınları 90 derecelik açıyla aldığı için sıcaklığı Türkiye’den daha yüksektir.' },
            { key: 'C', text: 'Her iki termometre de ışık kaynağından eşit mesafede tutulduğu için sıcaklık artışları birbirine eşittir.' },
            { key: 'D', text: 'Dünya modelinin kendi ekseni etrafında dönmesi yıllık sıcaklık farklarının oluşmasını tek başına sağlar.' }
          ],
          correctAnswer: 'A',
          explanation: '21 Haziran konumunda Kuzey Yarım Küre ışık kaynağına eğiktir ve ışınları daha büyük açıyla alır; bu sebeple Türkiye\'deki termometre daha çok ısınır.'
        },
        {
          id: 6,
          theme: 'Yıllık Dolanım Yörüngesi ve Mevsim Başlangıçları',
          cognitiveLevel: 'Görsel Şema ve Konum Analizi',
          contextTitle: 'Dolanma Yörüngesindeki Dört Temel Konum',
          scenario: 'Dünya’nın Güneş etrafındaki dolanma yörüngesinde 1 numaralı konum 21 Mart, 2 numaralı konum 21 Haziran, 3 numaralı konum 23 Eylül, 4 numaralı konum ise 21 Aralık tarihlerini temsil etmektedir.',
          questionPrompt: 'Dünya bu yörünge üzerinde dolanırken Güney Yarım Küre’de ilkbahar mevsiminin başladığı konum hangisidir?',
          options: [
            { key: 'A', text: '1 numaralı konumda Güney Yarım Küre ilkbahar mevsimini yaşamaya başlar.' },
            { key: 'B', text: '3 numaralı konumda Güney Yarım Küre ilkbahar mevsimini yaşamaya başlar.' },
            { key: 'C', text: '2 numaralı konumda Güney Yarım Küre ilkbahar mevsimini yaşamaya başlar.' },
            { key: 'D', text: '4 numaralı konumda Güney Yarım Küre ilkbahar mevsimini yaşamaya başlar.' }
          ],
          correctAnswer: 'B',
          explanation: '3 numaralı konum 23 Eylül tarihidir. Bu tarihte Kuzey Yarım Küre\'de sonbahar, Güney Yarım Küre\'de ise ilkbahar mevsimi başlar.'
        },
        {
          id: 7,
          theme: 'Dönenceler ve Güneş Işınlarının Dik Gelme Sıklığı',
          cognitiveLevel: 'Coğrafi Bilimsel Muhakeme',
          contextTitle: 'Yengeç Dönencesi, Ekvator ve Orta Kuşak Analizi',
          scenario: 'Dünya üzerinde Ekvator çizgisi, Yengeç Dönencesi ve Türkiye sınırları içinde yer alan Ankara şehri olmak üzere üç farklı bölge belirlenmiştir.',
          questionPrompt: 'Bu üç bölgeye bir yıl içerisinde Güneş ışınlarının 90 derecelik dik açıyla düşme sıklığı hangisinde doğru belirtilmiştir?',
          options: [
            { key: 'A', text: 'Ankara’ya yılda iki defa, Ekvator’a yılda bir defa dik açıyla ışık düşmektedir.' },
            { key: 'B', text: 'Her üç bölgeye de ekinoks tarihlerinde yılda ikişer defa dik açıyla ışık ulaşır.' },
            { key: 'C', text: 'Ekvator’a yılda iki defa, Yengeç Dönencesi’ne yılda bir defa dik gelirken Ankara’ya hiçbir zaman dik gelmez.' },
            { key: 'D', text: 'Yengeç Dönencesi’ne yılda iki defa, Ekvator’a yılda dört defa dik açıyla ışık düşmektedir.' }
          ],
          correctAnswer: 'C',
          explanation: 'Dönenceler arasına (Ekvator dahil) yılda 2 kez, dönencelere yılda 1 kez dik gelir. Dönencelerin dışındaki orta kuşak ülkelerine (Türkiye/Ankara) güneş ışınları hiçbir zaman 90° dik açıyla düşmez.'
        },
        {
          id: 8,
          theme: 'Birim Yüzeye Düşen Işık Enerjisi ve Güneş Panelleri',
          cognitiveLevel: 'Uygulamalı Fizik ve Veri Analizi',
          contextTitle: '21 Aralık Tarihinde Özdeş İki Güneş Paneli',
          scenario: '21 Aralık günü öğle saat 12.00’de özdeş iki güneş paneli Kuzey Yarım Küre’deki Londra’ya ve Güney Yarım Küre’deki Buenos Aires’e yere paralel olarak yerleştirilmiştir. Gökyüzü her iki şehirde de tamamen açıktır.',
          questionPrompt: 'Güneş panellerinin birim zamanda ürettikleri elektrik enerjisi ile ilgili aşağıdaki değerlendirmelerden hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Londra’daki panel ışınları dik aldığı için dar alanda daha yüksek elektrik akımı üretir.' },
            { key: 'B', text: 'Öğle vakti ölçüldüğü için her iki panelde üretilen elektrik enerjileri birbirine eşittir.' },
            { key: 'C', text: 'Buenos Aires’te aydınlanan alan daha geniş olduğundan birim yüzeye düşen enerji düşüktür.' },
            { key: 'D', text: 'Buenos Aires ışınları dik ve dike yakın açıyla aldığı için birim alandaki enerji ve üretilen elektrik Londra’dan fazladır.' }
          ],
          correctAnswer: 'D',
          explanation: '21 Aralık tarihinde Güney Yarım Küre yaz mevsimini yaşar ve güneş ışınları büyük açıyla düşer. Birim alana düşen ışık enerjisi yüksek olduğu için Buenos Aires\'teki panel çok daha fazla elektrik üretir.'
        },
        {
          id: 9,
          theme: 'Ekinoks Tarihlerinde Küresel Aydınlanma',
          cognitiveLevel: 'Kavramsal Muhakeme',
          contextTitle: '23 Eylül Tarihinde Gece ve Gündüz Durumu',
          scenario: '23 Eylül tarihinde Dünya üzerinde yer alan kutup noktaları, dönenceler ve Ekvator çizgisi üzerinde gece-gündüz süreleri 24 saat boyunca izlenmiştir.',
          questionPrompt: 'Bu tarihte gerçekleşen olaylarla ilgili aşağıdaki yargılardan hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Aydınlanma çemberi kutup noktalarından teğet geçtiği için Dünya’nın her yerinde 12 saat gece ve 12 saat gündüz yaşanır.' },
            { key: 'B', text: 'Kuzey Yarım Küre’de yılın en uzun gündüz süresi tamamlanmış ve geceler kısalmaya başlamıştır.' },
            { key: 'C', text: 'Güney Kutup Noktası’nda 6 aylık kesintisiz gece süreci bu tarihte başlamaktadır.' },
            { key: 'D', text: 'Güneş ışınları sadece Oğlak Dönencesi’ne dik açıyla düşerek gölge boyunu sıfırlar.' }
          ],
          correctAnswer: 'A',
          explanation: '21 Mart ve 23 Eylül ekinoks tarihlerinde güneş ışınları Ekvator\'a dik düşer, eksen eğikliğinin etkisi geçici olarak kalkar ve tüm dünyada 12 saat gece, 12 saat gündüz yaşanır.'
        },
        {
          id: 10,
          theme: 'Eksen Eğikliğinin Sonuçları ve Varsayımsal Model',
          cognitiveLevel: 'Tersine Düşünme ve Mantık Yürütme',
          contextTitle: 'Eksen Eğikliği Olmayan Bir Gezegen Tasarımı',
          scenario: 'Bir gökbilimci dönme ekseni dolanma düzlemine tam dik olan yani eksen eğikliği sıfır derece olan hayalî bir gezegenin yıllık hareketini incelemektedir.',
          questionPrompt: 'Bu hayalî gezegende Dünya’dakinden farklı olarak aşağıdaki durumlardan hangisi gözlemlenir?',
          options: [
            { key: 'A', text: 'Gece ve gündüz süreleri arasındaki fark kutuplara doğru gidildikçe yıl içinde sürekli artardı.' },
            { key: 'B', text: 'Güneş ışınlarının bir noktaya geliş açısı yıl boyunca hiç değişmez, mevsimler oluşmaz ve daima gece-gündüz eşitliği yaşanırdı.' },
            { key: 'C', text: 'Gezegen kendi ekseni etrafında dönmeyi bırakır ve bir yarım küresi sürekli karanlık kalırdı.' },
            { key: 'D', text: 'Orta kuşakta yaz mevsimleri günümüze göre çok daha sıcak, kışlar ise çok daha dondurucu geçerdi.' }
          ],
          correctAnswer: 'B',
          explanation: 'Eksen eğikliği olmasaydı ışığın geliş açısı yıl boyunca sabit kalırdı, mevsimler oluşmazdı, yıllık sıcaklık farkları meydana gelmezdi ve her gün 12 saat gece, 12 saat gündüz yaşanırdı.'
        }
      ]
    },
    {
      id: 'g8-u1-sub2',
      title: '2. Bölüm: İklim ve Hava Hareketleri',
      shortTitle: 'İklim ve Hava Hareketleri',
      badge: 'Kavramlar & LGS',
      pageRange: '',
      concepts: [
        'Atmosfer Gazları (Azot %78, Oksijen %21, Diğer %1)',
        'Hava Olayı vs İklim',
        'Meteoroloji ve Meteorolog',
        'Klimatoloji ve Klimatolog',
        'Alçak Basınç (Sıcak hava, yükselici hareket, bulut ve yağış)',
        'Yüksek Basınç (Soğuk hava, alçalıcı hareket, açık hava)',
        'Rüzgârın Oluşum Mekanizması ve Yönü',
        'Yağış Çeşitleri (Yağmur, Kar, Dolu, Çiy, Kırağı, Sis)',
        'Sera Etkisi ve Küresel İklim Değişikliği',
        'Deniz Canlıları ve Çözünmüş Oksijen'
      ],
      simulationId: 'moon-phases',
      summarySections: [
        {
          heading: 'Hava Olayları, Basınç Merkezleri ve Rüzgâr',
          paragraphs: [
            'Dünya\'mızın etrafını saran atmosfer tabakası %78 azot, %21 oksijen ve %1 oranında diğer gazlardan (karbondioksit, su buharı vb.) oluşur. Havada meydana gelen sıcaklık farkları ve havadaki nem (su buharı) hava olaylarının temel sebebidir. Havadaki nem yağışları, sıcaklık farkı ise rüzgârı oluşturur.',
            'Dar bir alanda, kısa süre (günlük, saatlik) içinde görülen değişken doğa olaylarına hava olayları denir. Hava olaylarını inceleyen bilim dalına "Meteoroloji", uzmanlarına ise "Meteorolog" denir. Tahminidir, değişkenlik fazladır (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Yüksek Basınç Alanı: Havanın soğuk olduğu bölgelerdir. Soğuyan havanın tanecikleri birbirine yaklaşır, yoğunluğu artar ve ağırlaşarak aşağı doğru çöker. Bu duruma "alçalıcı hava hareketi" denir. Hava yeryüzüne baskı yaptığı için bulut oluşumu görülmez, hava genellikle açıktır ve yağış beklenmez (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Alçak Basınç Alanı: Havanın sıcak olduğu bölgelerdir. Isınan hava genleşir, yoğunluğu azalır ve hafifleyerek yukarı doğru çıkar. Bu duruma "yükselici hava hareketi" denir. Yükselen hava soğuyarak içindeki nemi yoğuşturur ve bulutları oluşturur. Bu nedenle yağış görülme ihtimali yüksektir (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Rüzgâr: Daima yüksek basınç alanından (soğuk bölge), alçak basınç alanına (sıcak bölge) doğru gerçekleşen yatay yönlü hava hareketidir. İki bölge arasındaki sıcaklık (ve basınç) farkı ne kadar fazlaysa rüzgârın şiddeti o kadar büyük olur (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Görsel / Günlük Yaşam: Deniz kenarında gündüzleri karalar hızlı ısındığı için alçak basınç (yükselici hava), denizler daha serin olduğu için yüksek basınç (alçalıcı hava) alanıdır. Bu yüzden gündüz rüzgâr denizden karaya eser. Gece ise tam tersi karadan denize eser (ÖS ÇIKTI).'
          ],
          keyPoints: [
            'Rüzgâr Yönü: Daima Yüksek Basınç (Soğuk) ➔ Alçak Basınç (Sıcak) doğrultusundadır (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Rüzgârın Durması: İki bölge arasındaki rüzgârın yavaşlayıp tamamen durması, iki bölgenin sıcaklıklarının ve hava basınçlarının eşitlenerek ısıl dengeye ulaşmasıyla mümkündür.',
            'Hava Hareketi Tuzağı: Alçalıcı hava hareketi Yüksek Basınçta (soğukta), Yükselici hava hareketi Alçak Basınçta (sıcakta) görülür (LGS ÇIKTI).'
          ]
        },
        {
          heading: 'Yağış Türleri ve Oluşum Yerleri',
          paragraphs: [
            'Su döngüsünün bir parçası olan yağışlar, oluştukları yere ve sıcaklığa göre sınıflandırılır:',
            'Gökyüzüne yakın yerlerde (Atmosferde) oluşanlar: Su buharının soğuk hava tabakasıyla karşılaşıp su damlacıklarına dönüşmesiyle Yağmur, 0°C\'nin altındaki soğuk hava tabakasıyla karşılaşıp aniden buz kristallerine dönüşmesiyle Kar, yağmur damlalarının fırtınayla aniden donup buz toplarına dönüşmesiyle Dolu oluşur (ÖS ÇIKTI).',
            'Yeryüzüne yakın yerlerde oluşanlar: Su buharının soğuk nesneler (yaprak, araba camı) üzerinde su damlacıkları oluşturmasına Çiy, 0°C\'nin altında doğrudan buz kristallerine dönüşmesine Kırağı, su buharının yeryüzüne çok yakın yerlerde yoğuşarak havada asılı kalmasına Sis denir (ÖS ÇIKTI).'
          ],
          table: {
            headers: ['Yağış Türü', 'Oluştuğu Konum', 'Fiziksel Değişim & Sıcaklık', 'LGS / ÖS Çıkış Durumu'],
            rows: [
              ['Yağmur', 'Gökyüzüne yakın (Atmosfer)', 'Yoğuşma (0°C üstü)', 'ÖS ÇIKTI'],
              ['Kar', 'Gökyüzüne yakın (Atmosfer)', 'Buz kristalleri (0°C altı)', 'ÖS ÇIKTI'],
              ['Dolu', 'Gökyüzüne yakın (Atmosfer)', 'Fırtınayla ani donan buz topları', 'ÖS ÇIKTI'],
              ['Çiy', 'Yeryüzüne yakın nesneler üzerinde', 'Su damlacıkları (0°C üstü)', 'ÖS ÇIKTI'],
              ['Kırağı', 'Yeryüzüne yakın zemin üzerinde', 'Doğrudan buz kristalleri (0°C altı)', 'ÖS ÇIKTI'],
              ['Sis', 'Yeryüzüne çok yakın atmosferde', 'Yoğuşarak havada asılı kalan damlacıklar', 'ÖS ÇIKTI']
            ]
          }
        },
        {
          heading: 'İklim, Küresel İklim Değişikliği ve Sera Gazları',
          paragraphs: [
            'İklim: Geniş bir bölgede, uzun yıllar boyunca (en az 30-35 yıl) gözlemlenen sıcaklık, nem, rüzgâr ve yağış gibi tüm hava olaylarının ortalamasıdır. İklim kesinlik bildirir (Kurak, yağışlı, sıcak, ılıman gibi ifadeler kullanılır). Bu alanda çalışan bilim dalına "Klimatoloji", uzmanına "Klimatolog" denir. Bir bölgenin iklimini Ekvator\'a olan uzaklık, denizden yükseklik (rakım), yeryüzü şekilleri ve denize uzaklık etkiler (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Küresel İklim Değişikliği: İnsanların sanayi, ulaşım ve enerji üretimi için fosil yakıtları (kömür, petrol, doğal gaz) yoğun olarak kullanması ve ormanları tahrip etmesi sonucunda atmosfere salınan karbondioksit (CO2), metan vb. sera gazlarının miktarı aşırı artmıştır.',
            'Sera Etkisi ve Küresel Isınma: Bu gazlar, yeryüzünden yansıyan Güneş ışınlarını tutarak (sera etkisi) Dünya\'nın ortalama sıcaklığının artmasına yani küresel ısınmaya neden olur (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Sonuçları: Buzulların erimesi, deniz seviyelerinin yükselmesi, kıyı şeritlerinin sular altında kalması, kuraklık, çölleşme ve şiddetli meteorolojik afetlerin (kasırga, sel) artması küresel iklim değişikliğinin sonuçlarıdır (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Önlemler: Yenilenemez enerji yerine yenilenebilir (güneş, rüzgâr) enerji kaynakları kullanılmalı, enerji tasarrufu yapılmalı, geri dönüşüm yaygınlaştırılmalı ve yeşil alanlar artırılmalıdır (ÖS ÇIKTI). Rüzgâr ağaçları gibi yeni nesil yenilenebilir sistemler karbon ayak izini sıfıra yaklaştırır.'
          ],
          table: {
            headers: ['Kavram / Soru Alanı', 'Öğrencinin Düşündüğü (Yanlış Mantık)', 'Kavram Yanılgısının Düzeltilmesi (Doğru Yaklaşım)'],
            rows: [
              ['Basınç Merkezleri Sıcaklığı', 'Yüksek basınç güneşli ve hava çok olduğu için sıcaktır; alçak basınç soğuktur.', 'Tam tersidir. Yüksek basınç alanında hava SOĞUKTUR, tanecikler büzüşüp çöker. Alçak basınç alanında hava SICAKTIR, hafifleyip yükselir (LGS ÇIKTI).'],
              ['Hava Hareketinin Yönü', 'Yükselici hava hareketi varsa havanın yukarı çıkmasından dolayı yüksek basınç vardır.', 'Yükselici hava hareketinde hava yeri terk ettiği için yeryüzüne yaptığı baskı (basınç) azalır. Bu yüzden yükselici hava hareketi ALÇAK basınç alanıdır.'],
              ['İklim Verilerinin Değişimi', 'Birkaç gün veya bir kış mevsimi boyunca yaşanan aşırı yağışlar iklimin tamamen değiştiğini kanıtlar.', 'İklimin değiştiğini söylemek için aşırı hava olaylarının en az 30-35 yıl boyunca sürekli ve kalıcı tekrar edip genel ortalamayı değiştirmesi gerekir.'],
              ['Bulut Oluşumu ve Yağış', 'Rüzgâr bulutları sürükleyip yüksek basınç alanına getirir ve yağmuru oraya yağdırır.', 'Bulut oluşumu ve yağış ALÇAK basınç alanlarında görülür. Çünkü yükselen sıcak ve nemli hava soğuyarak bulutları oluşturur (LGS ÇIKTI).'],
              ['Sera Etkisi ve Ozon Tabakası', 'Ozon tabakasının delinmesi Güneş ışınlarının daha çok girmesine ve küresel ısınmaya neden olur.', 'Ozon incelmesi zararlı UV ışınlarının Dünya\'ya girmesine yol açar (cilt kanseri). Küresel ısınma ise CO2 gibi gazların battaniye gibi ısıyı hapsetmesidir (LGS ÇIKTI).']
            ]
          },
          examNote: '📌 LGS & ÖS ÇIKMIŞ SORU KRİTİK KALIPLARI: 1) İki bölge arasında esen rüzgârın durması ancak sıcaklıkların ve hava basınçlarının eşitlenerek ısıl dengeye ulaşmasıyla mümkündür (LGS ÇIKTI). 2) Bir ülkenin sanayisi büyük olsa bile, rüzgâr ve güneş gibi yenilenebilir enerji kullanan gelişmiş ülkelerin karbon salınım oranları fosil yakıt kullananlara göre çok daha düşük olabilir (ÖS ÇIKTI).'
        }
      ],
      glossary: [
        { term: 'Rüzgâr', definition: 'Yüksek basınç alanından alçak basınç alanına doğru yatay hareket eden hava akımı.' },
        { term: 'Alçak Basınç', definition: 'Isınan havanın genleşip yükselmesiyle oluşan, bulutlu ve yağış ihtimali yüksek atmosfer bölgesi.' },
        { term: 'Yüksek Basınç', definition: 'Soğuyan havanın sıkışıp alçalmasıyla oluşan, açık ve bulutsuz atmosfer bölgesi.' },
        { term: 'Klimatoloji', definition: 'Geniş bölgelerde uzun yıllar boyunca devam eden ortalama hava koşullarını inceleyen iklim bilimi.' },
        { term: 'Sera Etkisi', definition: 'Atmosferdeki sera gazlarının Güneş’ten gelen ve yerden yansıyan ısıyı tutarak Dünya’yı ısıtması.' }
      ],
      trueFalseQuestions: [
        { id: 1, statement: 'Rüzgâr daima alçak basınç alanından yüksek basınç alanına doğru hareket eder.', isCorrect: false, explanation: 'Rüzgâr daima yüksek basınç alanından alçak basınç alanına doğru eser.' },
        { id: 2, statement: 'Alçak basınç alanında hava sıcak olup yükselici hava hareketleri görülür.', isCorrect: true, explanation: 'Sıcak hava genleşerek yükselir ve bulut oluşturur.' },
        { id: 3, statement: 'Yüksek basınç alanlarında gökyüzü genellikle açık ve bulutsuzdur.', isCorrect: true, explanation: 'Alçalıcı hava hareketleri bulut oluşumunu engeller.' },
        { id: 4, statement: 'Kırağı, gökyüzünde soğuyan su damlacıklarının aniden donmasıyla meydana gelir.', isCorrect: false, explanation: 'Kırağı yeryüzüne yakın yerlerde nesnelerin üzerinde oluşur; gökyüzündeki ani donma doludur.' },
        { id: 5, statement: 'Sis, yeryüzüne yakın temas tabakasında havada asılı kalan mikroskobik su damlacıklarıdır.', isCorrect: true, explanation: 'Sis yeryüzü bulutu olarak da tanımlanan yoğuşma olayıdır.' },
        { id: 6, statement: 'Hava olayları dar bir alanda etkilidir ve gün içerisinde değişkenlik gösterir.', isCorrect: true, explanation: 'Hava durumu saatlik ve günlük tahminlere dayanır.' },
        { id: 7, statement: 'İklimi inceleyen bilim insanlarına meteorolog adı verilir.', isCorrect: false, explanation: 'İklimi inceleyen bilim insanına klimatolog (iklim bilimci) denir.' },
        { id: 8, statement: 'Atmosferdeki karbondioksit miktarının artması sera etkisini güçlendirerek küresel ısınmaya yol açar.', isCorrect: true, explanation: 'CO2 sera gazı olup ısıyı tutarak küresel sıcaklığı artırır.' },
        { id: 9, statement: 'İki bölge arasındaki sıcaklık ve basınç farkı arttıkça rüzgârın esme hızı artar.', isCorrect: true, explanation: 'Basınç farkı rüzgârın itici gücüdür; fark arttıkça hız artar.' },
        { id: 10, statement: 'Gündüzleri denizler karalardan daha sıcaktır ve rüzgâr karadan denize doğru eser.', isCorrect: false, explanation: 'Gündüz karalar daha hızlı ısınır (alçak basınç), rüzgâr denizden karaya eser.' }
      ],
      lgsQuestions: [
        ...sebahattinIklimQuestions,
        {
          id: 1,
          theme: 'Rüzgâr Oluşumu ve Basınç Düzenekleri',
          cognitiveLevel: 'Deney Tasarımı ve Mantık Muhakeme',
          contextTitle: 'Mum ve Buz Kalıbı ile Rüzgâr Tüneli Deneyi',
          scenario: 'Fen bilimleri öğretmeni sınıfta cam borunun bir ucuna yanan üç adet mum, diğer ucuna ise kâse içinde buz kalıbı yerleştirmiştir. Cam borunun orta kısmına asılan hafif renkli kâğıt şeritlerin hareket yönü öğrenciler tarafından dikkatle izlenmiştir.',
          questionPrompt: 'Bu deney düzeneğinde gerçekleşen olaylar ve kâğıt şeritlerin hareketi ile ilgili hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Buz bulunan bölge Alçak Basınç alanı olup kâğıt şeritler mumların bulunduğu bölgeden buza doğru sürüklenir.' },
            { key: 'B', text: 'Mumların bulunduğu bölgede hava soğur ve kâğıt şeritler her iki tarafa eşit aralıklarla gidip gelir.' },
            { key: 'C', text: 'Buz olan taraf Yüksek Basınç alanı oluşturduğundan kâğıt şeritler soğuk taraftan sıcak tarafa doğru yönelir.' },
            { key: 'D', text: 'Cam boru içerisindeki hava basıncı tamamen eşitlendiğinden kâğıt şeritler deney süresince hareketsiz kalır.' }
          ],
          correctAnswer: 'C',
          explanation: 'Buzun bulunduğu bölge soğuk olduğu için Yüksek Basınç, mumların bulunduğu bölge sıcak olduğu için Alçak Basınçtır. Rüzgâr daima Yüksek Basınçtan Alçak Basınca (buzdan muma) doğru eser.'
        },
        {
          id: 2,
          theme: 'İklim ve Hava Olayı Ayrımı',
          cognitiveLevel: 'Sınıflandırma ve Çıkarım Yapma',
          contextTitle: 'Haber Bültenleri ve Bilimsel Raporlar',
          scenario: 'Bir araştırmacı harita üzerindeki farklı şehirlerle ilgili şu notları almıştır:\nI. Rize’de her mevsim bol yağış görülür ve yıllık yağış miktarı oldukça yüksektir.\nII. Yarın sabah İzmir genelinde şiddetli fırtına ve gök gürültülü sağanak beklenmektedir.\nIII. Konya Ovası’nda yaz ayları genellikle çok sıcak ve kurak geçer.\nIV. Antalya’da öğleden sonra aniden bastıran dolu yağışı seralara zarar vermiştir.',
          questionPrompt: 'Verilen ifadelerden hangileri iklim, hangileri ise hava olayları kapsamında değerlendirilmelidir?',
          options: [
            { key: 'A', text: 'I ve IV numaralı ifadeler iklim özelliği taşırken, II ve III numaralı ifadeler anlık hava olaylarını belirtir.' },
            { key: 'B', text: 'II ve III numaralı ifadeler iklim özelliği taşırken, I ve IV numaralı ifadeler anlık hava olaylarını belirtir.' },
            { key: 'C', text: 'I ve II numaralı ifadeler iklim özelliği taşırken, III ve IV numaralı ifadeler anlık hava olaylarını belirtir.' },
            { key: 'D', text: 'I ve III numaralı ifadeler uzun yıllara dayalı iklim özelliği, II ve IV ise kısa süreli hava durumudur.' }
          ],
          correctAnswer: 'D',
          explanation: 'I ve III ifadeleri uzun yılların değişmeyen ortalamasını (İklim); II ve IV ifadeleri ise anlık ve tahmini koşulları (Hava Olayı) ifade eder.'
        },
        {
          id: 3,
          theme: 'Yağış Türlerinin Oluşum Mekanizmaları',
          cognitiveLevel: 'Deney ve Gözlem Analizi',
          contextTitle: 'Kapalı Kapta Yoğuşma ve Yağış Modeli',
          scenario: 'Bir öğrenci cam kavanozun içine ılık su koymuş, kavanozun ağzını metal bir kapakla kapatmış ve kapağın üzerine buz parçaları yerleştirmiştir. Birkaç dakika sonra kapağın alt yüzeyinde su damlacıklarının biriktiği ve kavanozun tabanına doğru damladığı gözlemlenmiştir.',
          questionPrompt: 'Öğrencinin gerçekleştirdiği bu deney doğadaki hangi hava olayını modellemek amacıyla tasarlanmıştır?',
          options: [
            { key: 'A', text: 'Buharlaşan suyun gökyüzünde soğuk hava tabakasıyla karşılaşarak yoğuşmasını ve yağmur damlalarına dönüşmesini modeller.' },
            { key: 'B', text: 'Yeryüzündeki bitkilerin terlemesi sonucunda oluşan gece kırağılaşması olayını modeller.' },
            { key: 'C', text: 'Yeryüzüne yakın havada asılı kalan mikroskobik su damlacıklarının oluşturduğu yoğun sis bulutunu modeller.' },
            { key: 'D', text: 'Su buharının sıfır derecenin altındaki soğuk zeminde aniden katılaşarak oluşturduğu kar kristallerini modeller.' }
          ],
          correctAnswer: 'A',
          explanation: 'Ilık su buharlaşmayı, buzlu kapak gökyüzündeki soğuk hava tabakasını, damlayan sular ise yoğuşarak yeryüzüne inen yağmur damlalarını modeller.'
        },
        {
          id: 4,
          theme: 'Deniz ve Kara Meltemlerinin Basınç Dinamiği',
          cognitiveLevel: 'Gerçek Yaşam Problemi Muhakemesi',
          contextTitle: 'Kıyı Bölgelerinde Gece ve Gündüz Esen Rüzgârlar',
          scenario: 'Kıyı şeridinde yaşayan bir balıkçı, gündüz saatlerinde denizden karaya doğru tatlı bir esinti hissederken, gece geç saatlerde rüzgârın yön değiştirerek karadan denize doğru estiğini fark etmiştir.',
          questionPrompt: 'Kıyı bölgelerinde yaşanan bu rüzgâr yönü değişiminin temel fiziksel sebebi aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Ay’ın deniz suları üzerinde oluşturduğu gelgit çekim kuvvetinin gece ve gündüz farklı yönlere etki etmesi.' },
            { key: 'B', text: 'Karaların öz ısısının küçük olması sebebiyle gündüzleri çabuk ısınıp geceleri ise denizlerden daha hızlı soğuması.' },
            { key: 'C', text: 'Deniz suyunun buharlaşma hızının gece saatlerinde gündüz saatlerine oranla çok daha yüksek seviyeye çıkması.' },
            { key: 'D', text: 'Dünya’nın kendi ekseni etrafında dönme hareketini gece saatlerinde yavaşlatarak hava akımını tersine çevirmesi.' }
          ],
          correctAnswer: 'B',
          explanation: 'Karaların öz ısısı denizden küçüktür; gündüz karalar çabuk ısınır (Alçak Basınç) ve rüzgâr denizden karaya eser. Gece karalar hızla soğur (Yüksek Basınç) ve rüzgâr karadan denize eser.'
        },
        {
          id: 5,
          theme: 'Atmosfer Tabakaları ve Su Buharı Dağılımı',
          cognitiveLevel: 'Kavramsal Analiz',
          contextTitle: 'Troposfer Tabakasında Hava Olayları',
          scenario: 'Hava kürede yağmur, kar, fırtına, sis gibi meteorolojik olayların tamamına yakını atmosferin yeryüzüne temas eden ilk 3-4 kilometrelik alt kısmında gerçekleşmektedir.',
          questionPrompt: 'Hava olaylarının yalnızca bu alt katmanda yoğunlaşmasının temel bilimsel sebebi hangisidir?',
          options: [
            { key: 'A', text: 'Güneş ışınlarının atmosferin üst katmanlarına hiçbir zaman ulaşamaması.' },
            { key: 'B', text: 'Yeryüzündeki yer çekimi kuvvetinin atmosferin üst kısımlarında tamamen yok olması.' },
            { key: 'C', text: 'Havadaki su buharının tamamına yakınının bu alt katmanda toplanmış olması.' },
            { key: 'D', text: 'Rüzgâr hareketlerinin sadece yüksek dağ zirvelerinde meydana gelmesi.' }
          ],
          correctAnswer: 'C',
          explanation: 'Hava olaylarının (yağmur, kar, sis vb.) oluşması için su buharı (nem) şarttır. Atmosferdeki su buharının neredeyse tamamı ilk 3-4 km içinde yer alır.'
        },
        {
          id: 6,
          theme: 'Sıcaklık ve Yağış Grafiği Yorumlama',
          cognitiveLevel: 'Grafik ve Veri Okuma',
          contextTitle: 'Bir İlin 50 Yıllık İklim Raporu Analizi',
          scenario: 'Bir meteoroloji istasyonu bir şehrin 50 yıllık aylık sıcaklık ve yağış ortalamalarını gösteren detaylı bir iklim grafiği yayınlamıştır.',
          questionPrompt: 'Yalnızca bu grafikteki verilere dayanarak aşağıdaki bilgilerden hangisine ulaşılamaz?',
          options: [
            { key: 'A', text: 'Şehirde en kurak ve en yağışlı geçen ayların hangileri olduğuna.' },
            { key: 'B', text: 'Yıl içindeki en yüksek ve en düşük ortalama sıcaklık değerlerine.' },
            { key: 'C', text: 'Bölgede hakim olan iklim türünün genel karakterine.' },
            { key: 'D', text: 'Gelecek yılın 15 Ekim günü saat 14.00\'te yağmur yağıp yağmayacağına.' }
          ],
          correctAnswer: 'D',
          explanation: 'İklim grafikleri uzun yılların genel ortalamalarını gösterir; belirli bir gün ve saatteki anlık hava tahminine bu grafiklerden ulaşılamaz.'
        },
        {
          id: 7,
          theme: 'Deniz Suyu Sıcaklığı ve Çözünmüş Oksijen Miktarı',
          cognitiveLevel: 'Ekoloji ve Çözünürlük Muhakemesi',
          contextTitle: 'Küresel Isınmanın Okyanus Yaşamına Etkisi',
          scenario: 'Laboratuvarda yapılan deneyler, gazların sıvılardaki çözünürlüğünün sıvı sıcaklığı arttıkça azaldığını göstermektedir. Küresel iklim değişikliği nedeniyle okyanus sularının ortalama sıcaklığı yükselmektedir.',
          questionPrompt: 'Bu bilimsel durumun deniz ekosistemleri üzerindeki doğrudan sonucu hangisinde doğru açıklanmıştır?',
          options: [
            { key: 'A', text: 'Okyanus sularının ısınması çözünmüş oksijen miktarını azaltarak deniz canlılarının yaşam alanlarını daraltır.' },
            { key: 'B', text: 'Deniz suyu ısındıkça sudaki oksijen gazı miktarı artar ve balıkların üreme hızı yükselir.' },
            { key: 'C', text: 'Sıcaklık artışı denizlerdeki buharlaşmayı tamamen durdurarak suyun tuzluluk oranını sıfırlar.' },
            { key: 'D', text: 'Okyanuslardaki sıcaklık artışı sadece kutup ayılarını etkiler, su altı canlıları etkilenmez.' }
          ],
          correctAnswer: 'A',
          explanation: 'Sıcaklık arttıkça gazların sıvıdaki çözünürlüğü azalır. Isınan deniz sularında oksijen miktarı düşer ve deniz canlılarının yaşam alanı tehlikeye girer.'
        },
        {
          id: 8,
          theme: 'Basınç Merkezleri ve Dikey Hava Hareketleri',
          cognitiveLevel: 'Kavramsal Karşılaştırma',
          contextTitle: 'Alçak ve Yüksek Basınç Karşılaştırma Tablosu',
          scenario: 'K bölgesinde hava sıcak olup gökyüzü bulutludur. L bölgesinde ise hava soğuk olup gökyüzü açık ve berraktır.',
          questionPrompt: 'Bu iki bölge arasındaki hava hareketleri ve atmosfer basıncı ile ilgili hangisi doğrudur?',
          options: [
            { key: 'A', text: 'K bölgesinde alçalıcı hava hareketleri görülür ve yüzeye uygulanan hava basıncı çok yüksektir.' },
            { key: 'B', text: 'K bölgesi Alçak Basınç, L bölgesi Yüksek Basınç alanı olup rüzgâr L\'den K\'ye doğru eser.' },
            { key: 'C', text: 'L bölgesinde yükselici hava hareketi vardır ve gün boyu şiddetli sağanak yağış beklenir.' },
            { key: 'D', text: 'Hava akımının yönü daima alçak basınç alanından yüksek basınç alanına doğrudur.' }
          ],
          correctAnswer: 'B',
          explanation: 'Sıcak hava genleşip yükselir ve Alçak Basınç oluşturur (K). Soğuk hava alçalır ve Yüksek Basınç oluşturur (L). Rüzgâr Yüksek Basınçtan Alçak Basınca (L\'den K\'ye) eser.'
        },
        {
          id: 9,
          theme: 'Sera Etkisi ve Karbon Salımı',
          cognitiveLevel: 'Çevre Bilimi ve Sebep-Sonuç İlişkisi',
          contextTitle: 'Atmosferdeki Sera Gazları Dengesi',
          scenario: 'Fosil yakıtların aşırı kullanımı ve sanayi tesislerinin yaygınlaşması atmosferdeki karbondioksit ve metan gibi sera gazlarının yoğunluğunu kritik seviyelere çıkarmıştır.',
          questionPrompt: 'Sera etkisinin kontrolden çıkmasının Dünya üzerindeki etkileri ile ilgili aşağıdaki ifadelerden hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Sera gazları Güneş’ten gelen ışınların yeryüzüne ulaşmasını tamamen engelleyerek gezegeni soğutur.' },
            { key: 'B', text: 'Atmosferdeki karbondioksit artışı kutup buzullarının kalınlaşmasına ve deniz seviyesinin düşmesine yol açar.' },
            { key: 'C', text: 'Yeryüzünden yansıyan kızılötesi ışınların fazlaca tutulması ortalama küresel sıcaklığı artırır ve aşırı hava olaylarına sebep olur.' },
            { key: 'D', text: 'Sera etkisinin artması yer altı tatlı su kaynaklarının kendiliğinden çoğalmasını sağlar.' }
          ],
          correctAnswer: 'C',
          explanation: 'Sera gazları yerden yansıyan ısıyı tutarak yeryüzünün gereğinden fazla ısınmasına (küresel ısınma) ve aşırı hava olaylarına neden olur.'
        },
        {
          id: 10,
          theme: 'Meteorolojik Gözlemlerin Özellikleri',
          cognitiveLevel: 'Gözlem Verisi Muhakemesi',
          contextTitle: 'Üç Günlük Hava Durumu Takip Tablosu',
          scenario: 'Bir öğrenci yaşadığı şehirde üç gün boyunca gözlem yapmış; birinci gün 10 derece rüzgarlı, ikinci gün 12 derece bulutlu, üçüncü gün ise 13 derece yağmurlu hava tespit etmiştir.',
          questionPrompt: 'Öğrencinin bu gözlem sonuçlarına dayanarak ulaştığı aşağıdaki sonuçlardan hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Gözlemin yapıldığı şehrin iklimi kesinlikle Akdeniz iklimi olarak sınıflandırılır.' },
            { key: 'B', text: 'Hava sıcaklığı arttıkça rüzgârın şiddetinin de zorunlu olarak sürekli artması gerekir.' },
            { key: 'C', text: 'Bölgede 50 yıl boyunca aynı hava şartlarının değişmeden devam edeceği kanıtlanmıştır.' },
            { key: 'D', text: 'Hava olayları kısa süreler içinde değişkenlik gösterebilir ve aynı yerde farklı hava koşulları gözlenebilir.' }
          ],
          correctAnswer: 'D',
          explanation: 'Hava olayları dar bir alanda, kısa sürelerde değişkenlik gösterir ve tahminlere dayanır. 3 günlük veri iklimi değil hava olayının değişkenliğini kanıtlar.'
        }
      ]
    }
  ]
};

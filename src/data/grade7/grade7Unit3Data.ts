import { Unit } from '../../types/curriculum';

export const grade7Unit3Data: Unit = {
  id: 'g7-unit-3',
  unitNumber: 3,
  bookNumber: 1,
  grade: 7,
  subject: 'Fen Bilimleri',
  title: 'Vücudumuzdaki Sistemler',
    unitEndPageRange: 's. 141-148',
  unitEnd20Questions: [
    {
        "id": 7301,
        "theme": "Sindirim Organları ve Villus",
        "cognitiveLevel": "Görsel Analiz & Biyolojik Model",
        "contextTitle": "İnce Bağırsak ve Banyo Havlusu Benzetmesi",
        "scenario": "Bir tekstil mühendisi, banyo sonrasında suyu çok daha hızlı emen yüksek kapasiteli bir havlu tasarlamak için düz kumaş yerine yüzeyinde binlerce küçük iplik çıkıntısı (bukle) olan bir yapı geliştirmiştir. Fen bilimleri öğretmeni, bu havlu tasarımının insan vücudundaki ince bağırsağın iç yüzeyindeki mikroskobik villus uzantılarıyla aynı prensipte çalıştığını belirtmiştir.",
        "questionPrompt": "İnce bağırsağın iç yüzeyinde milyonlarca villus bulunmasının sindirim sistemine sağladığı temel avantaj aşağıdakilerden hangisidir?",
        "options": [
            {
                "key": "A",
                "text": "Besinlerin emilim yüzey alanını yüzlerce kat genişleterek besin yapı taşlarının kana geçişini hızlandırmak"
            },
            {
                "key": "B",
                "text": "Besinlerin mideye geri kaçmasını önleyen mekanik bir kapak görevi üstlenmek"
            },
            {
                "key": "C",
                "text": "Mide asidini tamamen nötrleyerek bağırsak kaslarının kasılmasını durdurmak"
            },
            {
                "key": "D",
                "text": "Besinlerin kalın bağırsağa geçiş süresini geciktirerek su kaybını engellemek"
            }
        ],
        "correctAnswer": "A",
        "explanation": "Villuslar ince bağırsağın iç yüzey alanını yaklaşık 250-300 m² büyüklüğüne ulaştırarak sindirilen besinlerin kana emilimini son derece hızlı ve verimli kılar."
    },
    {
        "id": 7302,
        "theme": "Enzim ve Sıcaklık İlişkisi",
        "cognitiveLevel": "Deney ve Değişken Analizi",
        "contextTitle": "Protein Sindiriminde Sıcaklık Etkisi",
        "scenario": "Bir araştırmacı protein sindirimini incelemek amacıyla iki deney tüpü hazırlıyor:\n1. Tüp: 30 g bütün protein + 10 g pankreas öz suyu + su (Oda sıcaklığında - 25 °C)\n2. Tüp: 30 g bütün protein + 10 g pankreas öz suyu + su (Buzdolabında - 4 °C)\nDeney sonunda 1. tüpte proteinlerin hızla sindirildiği, 2. tüpte ise sindirimin gerçekleşmediği belirleniyor.",
        "questionPrompt": "Bu deneyin sonuçlarına göre araştırmacının ulaştığı bilimsel sonuç aşağıdakilerden hangisidir?",
        "options": [
            {
                "key": "A",
                "text": "Proteinler yalnızca ağızda bulunan enzimlerle kimyasal sindirime uğrayabilir."
            },
            {
                "key": "B",
                "text": "Ortam sıcaklığı sindirim enzimlerinin çalışma hızını doğrudan etkiler."
            },
            {
                "key": "C",
                "text": "Buzdolabı ortamında fiziksel sindirim hızlanırken kimyasal sindirim durur."
            },
            {
                "key": "D",
                "text": "Pankreas öz suyu sadece düşük sıcaklıklarda proteinleri parçalayabilir."
            }
        ],
        "correctAnswer": "B",
        "explanation": "Enzimler belirli sıcaklık aralıklarında optimum çalışır; düşük sıcaklıkta (4 °C) enzimlerin aktivitesi durur veya çok yavaşlar, oda sıcaklığında ise aktif olarak sindirimi gerçekleştirir."
    },
    {
        "id": 7303,
        "theme": "Sindirime Yardımcı Organlar",
        "cognitiveLevel": "Kavramsal Çıkarım",
        "contextTitle": "Karaciğer ve Pankreas Salgılarının Rolü",
        "scenario": "Karaciğer safra sıvısını üreterek safra kesesinde depolar ve bir kanal yardımıyla ince bağırsağa yollar. Pankreas ise pankreas öz suyunu üreterek aynı şekilde bir kanalla ince bağırsağa ulaştırır. Yağlı bir yemek yiyen bireyde safra kanalı tıkandığında yağların sindiriminin ciddi şekilde aksadığı gözlemlenmiştir.",
        "questionPrompt": "Safra kanalının tıkanması sonucunda yağ sindiriminin aksamasının temel nedeni aşağıdakilerden hangisidir?",
        "options": [
            {
                "key": "A",
                "text": "Pankreasın enzim üretmeyi tamamen durdurması"
            },
            {
                "key": "B",
                "text": "Midede protein sindiriminin gerçekleşememesi"
            },
            {
                "key": "C",
                "text": "Yağların fiziksel olarak küçük damlacıklara ayrılamaması nedeniyle pankreas enzimlerinin etki yüzeyinin yetersiz kalması"
            },
            {
                "key": "D",
                "text": "Safra sıvısındaki kimyasal sindirim enzimlerinin ince bağırsağa ulaşamaması"
            }
        ],
        "correctAnswer": "C",
        "explanation": "Safra sıvısı enzim içermez; yağları mekanik olarak küçük damlacıklara böler. Safra gelmediğinde yağların yüzey alanı küçük kalır ve pankreas lipaz enzimi yeterince hızlı etki edemez."
    },
    {
        "id": 7304,
        "theme": "Sindirim Sistemi Sağlığı",
        "cognitiveLevel": "Sağlık ve Biyolojik Çıkarım",
        "contextTitle": "Çölyak Hastalığı ve Emilim Bozukluğu",
        "scenario": "Çölyak hastalığı, buğday ve arpada bulunan gluten proteinine karşı bağışıklık sisteminin aşırı tepki vermesiyle ortaya çıkar. Bu tepki sonucunda ince bağırsak iç yüzeyindeki parmaksı villuslar zamanla silinip düzleşir.",
        "questionPrompt": "Villusları düzleşen bir çölyak hastasında aşağıdaki durumlardan hangisinin görülmesi beklenir?",
        "options": [
            {
                "key": "A",
                "text": "Ağızda tükürük salgısının durması ve dişlerin çürümesi"
            },
            {
                "key": "B",
                "text": "Midede asit salgılanmasının tamamen sona ermesi"
            },
            {
                "key": "C",
                "text": "Kalın bağırsakta kimyasal sindirimin hızlanması"
            },
            {
                "key": "D",
                "text": "Besin maddelerinin kana yeterince emilememesi sonucu beslenme yetersizliği ve kilo kaybı yaşanması"
            }
        ],
        "correctAnswer": "D",
        "explanation": "Villusların yıpranıp düzleşmesi besin emilim yüzeyini yok eder; bu durum besin yapı taşlarının kana geçmesini engelleyerek kilo kaybına ve gelişim geriliğine yol açar."
    },
    {
        "id": 7305,
        "theme": "Dolaşım Sistemi Modeli",
        "cognitiveLevel": "Model Oluşturma & Analoji",
        "contextTitle": "Kombi ve Kalorifer Tesisatı Benzetmesi",
        "scenario": "Bir öğrenci dolaşım sistemini evdeki ısıtma tesisatına benzetmiştir: Kombide ısınan su kırmızı borularla kalorifer peteklerine pompalanır, peteklerde ısısını odaya veren soğuyan su mavi borularla tekrar kombiye döner.",
        "questionPrompt": "Bu modelde kombi, kırmızı borular ve mavi borular sırasıyla hangi dolaşım elemanlarına karşılık gelir?",
        "options": [
            {
                "key": "A",
                "text": "Kalp - Atardamar - Toplardamar"
            },
            {
                "key": "B",
                "text": "Kalp - Toplardamar - Atardamar"
            },
            {
                "key": "C",
                "text": "Akciğer - Kılcal damar - Toplardamar"
            },
            {
                "key": "D",
                "text": "Böbrek - Atardamar - Kılcal damar"
            }
        ],
        "correctAnswer": "A",
        "explanation": "Pompalayan merkez (kombi) kalp, kanı organlara dağıtan (kırmızı boru) atardamar, kanı merkeze geri toplayan (mavi boru) toplardamardır."
    },
    {
        "id": 7306,
        "theme": "Büyük ve Küçük Kan Dolaşımı",
        "cognitiveLevel": "Sistem Analizi",
        "contextTitle": "Dolaşım Yollarında Gaz Değişimi",
        "scenario": "İnsan vücudunda gerçekleşen dolaşım yollarında:\n• Küçük Dolaşım: Kalbin sağ karıncığından çıkan kan akciğerlere gider ve temizlenerek kalbin sol kulakçığına döner.\n• Büyük Dolaşım: Kalbin sol karıncığından çıkan kan vücut dokularına gider ve kirlenerek kalbin sağ kulakçığına döner.",
        "questionPrompt": "Buna göre aşağıdaki damarlardan hangisinde oksijen oranı yüksek, karbondioksit oranı düşük kan bulunur?",
        "options": [
            {
                "key": "A",
                "text": "Akciğer atardamarı"
            },
            {
                "key": "B",
                "text": "Akciğer toplardamarı"
            },
            {
                "key": "C",
                "text": "Karaciğer toplardamarı"
            },
            {
                "key": "D",
                "text": "Böbrek toplardamarı"
            }
        ],
        "correctAnswer": "B",
        "explanation": "Akciğer toplardamarı akciğerde oksijenle zenginleşen temiz kanı kalbin sol tarafına taşıdığı için oksijen oranı yüksektir."
    },
    {
        "id": 7307,
        "theme": "Kanın Yapısı ve Hücreleri",
        "cognitiveLevel": "Veri Analizi",
        "contextTitle": "Santrifüj Edilmiş Kan Tüpü Katmanları",
        "scenario": "Bir laboratuvarda bir tüp kan santrifüj cihazına konularak yüksek devirde döndürülmüştür. Döndürme sonucunda kan iki ana katmana ayrılmıştır:\n• 1. Katman (%55): Üstte kalan sarı renkli sıvı katman.\n• 2. Katman (%45): Altta çöken hücresel katman.",
        "questionPrompt": "Bu katmanların içeriği ve görevleri ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
        "options": [
            {
                "key": "A",
                "text": "1. katman tamamen alyuvarlardan oluşur ve oksijen taşır."
            },
            {
                "key": "B",
                "text": "2. katmanda su, hormonlar ve çözünmüş besin maddeleri yer alır."
            },
            {
                "key": "C",
                "text": "1. katman kan plazması olup su ve besin taşırken, 2. katman alyuvar, akyuvar ve kan pulcuklarını içerir."
            },
            {
                "key": "D",
                "text": "Her iki katmanda da eşit sayıda mikrop öldürücü akyuvar hücresi bulunur."
            }
        ],
        "correctAnswer": "C",
        "explanation": "Kanın %55’i plazma sıvısı (su, besin, atık, hormon), %45’i ise kan hücreleridir (alyuvar, akyuvar, kan pulcukları)."
    },
    {
        "id": 7308,
        "theme": "Kan Hücreleri ve Adaptasyon",
        "cognitiveLevel": "Grafik Yorumlama",
        "contextTitle": "Yüksek Rakımda Alyuvar Sayısının Artışı",
        "scenario": "Deniz seviyesinden 2500 metre yükseklikteki bir dağ kampına çıkan sağlıklı bir sporcunun kan tahlilleri incelendiğinde, kandaki alyuvar sayısının zamanla belirgin biçimde arttığı kaydedilmiştir.",
        "questionPrompt": "Yüksek rakımda sporcunun vücudunda alyuvar sayısının artmasının fizyolojik gerekçesi nedir?",
        "options": [
            {
                "key": "A",
                "text": "Havadaki toz miktarının artması sonucu mikroplarla savaşma ihtiyacı"
            },
            {
                "key": "B",
                "text": "Yükseklerde azalan açık hava basıncı nedeniyle kanın pıhtılaşmasını sağlamak"
            },
            {
                "key": "C",
                "text": "Vücudun su kaybını önleyerek terlemeyi durdurmak"
            },
            {
                "key": "D",
                "text": "Yükseklerde azalan oksijen miktarını telafi ederek doku ve organlara yeterli oksijen taşıyabilmek"
            }
        ],
        "correctAnswer": "D",
        "explanation": "Yüksek rakımlarda oksijen basıncı düşüktür; vücut dokulara yeterli oksijen ulaştırabilmek için kemik iliğinde daha fazla alyuvar üretir."
    },
    {
        "id": 7309,
        "theme": "Toplumsal Dayanışma ve Sağlık",
        "cognitiveLevel": "Kavramsal Çıkarım",
        "contextTitle": "Kan Bağışı ve Organ Nakli Şartları",
        "scenario": "Kızılay kan bağışı kampanyasında görevli doktor, bağışçılara kanın fabrikalarda üretilemediğini, tek kaynağının sağlıklı insanlar olduğunu anlatmıştır. Ayrıca organ naklinde doku ve kan grubu uyumunun şart olduğu vurgulanmıştır.",
        "questionPrompt": "Kan bağışı ve organ nakli ile ilgili aşağıdaki değerlendirmelerden hangisi doğrudur?",
        "options": [
            {
                "key": "A",
                "text": "18-65 yaş arasındaki sağlıklı ve 50 kg üzerindeki bireyler kan bağışında bulunabilir."
            },
            {
                "key": "B",
                "text": "Kan bağışı yapan bir bireyin vücudundaki kan miktarı kalıcı olarak eksik kalır."
            },
            {
                "key": "C",
                "text": "Organ naklinde kan grubu uyumu aranmaz, sadece yaş uyumu yeterlidir."
            },
            {
                "key": "D",
                "text": "Organ bağışı sadece canlı vericiler arasında yapılabilir, beyin ölümü gerçekleşmiş kişilerden nakil yapılamaz."
            }
        ],
        "correctAnswer": "A",
        "explanation": "Kan bağışı için yasal ve tıbbi kriter 18-65 yaş arası, en az 50 kg ve bulaşıcı hastalığı olmayan sağlıklı bireylerdir."
    },
    {
        "id": 7310,
        "theme": "Dolaşım Sistemi Sağlığı",
        "cognitiveLevel": "Grafik Analizi",
        "contextTitle": "Egzersiz Sırasında Nabız Değişimi",
        "scenario": "Bir öğrenci dinlenme halindeyken dakikadaki nabız sayısını 72 olarak ölçüyor. Ardından 10 dakika tempolu koştuktan sonra nabzının dakikada 130’a çıktığını tespit ediyor.",
        "questionPrompt": "Egzersiz sırasında nabzın artmasının vücut mekanizması açısından temel nedeni nedir?",
        "options": [
            {
                "key": "A",
                "text": "Kalp kaslarının yorularak gevşemesi"
            },
            {
                "key": "B",
                "text": "Çalışan kasların artan oksijen ve besin ihtiyacını karşılamak için kalbin daha hızlı kan pompalaması"
            },
            {
                "key": "C",
                "text": "Kandaki alyuvar sayısının aniden yarıya düşmesi"
            },
            {
                "key": "D",
                "text": "Vücut sıcaklığının aşırı düşmesini engellemek için dolaşımın durması"
            }
        ],
        "correctAnswer": "B",
        "explanation": "Egzersiz sırasında kasların enerji ve oksijen tüketimi katlanır; kalp daha hızlı kasılıp gevşeyerek dokulara gereken kanı ulaştırır ve nabız artar."
    },
    {
        "id": 7311,
        "theme": "Solunum Sistemi Modeli",
        "cognitiveLevel": "Deney Düzeneği Analizi",
        "contextTitle": "Pet Şişe ve Balonlu Akciğer Modeli",
        "scenario": "Bir öğrenci altı kesilmiş plastik şişenin içine Y şeklinde bir boru ve ucuna iki küçük balon yerleştirmiştir. Şişenin tabanına ise esnek bir balon zar gerdirmiştir. Esnek zar aşağı doğru çekildiğinde içerideki balonların şiştiği gözlemlenmiştir.",
        "questionPrompt": "Bu modeldeki esnek zar ve içerideki balonlar insan vücudunda sırasıyla hangi yapıları temsil eder?",
        "options": [
            {
                "key": "A",
                "text": "Kaburgalar - Yutak"
            },
            {
                "key": "B",
                "text": "Soluk borusu - Bronşçuklar"
            },
            {
                "key": "C",
                "text": "Diyafram kası - Akciğerler"
            },
            {
                "key": "D",
                "text": "Gırtlak - Alveoller"
            }
        ],
        "correctAnswer": "C",
        "explanation": "Tabandaki esnek zar diyafram kasını, Y borusunun ucundaki iki balon ise sağ ve sol akciğerleri temsil eder. Zar çekildiğinde iç basınç düşer ve akciğerler şişer (soluk alma)."
    },
    {
        "id": 7312,
        "theme": "Soluk Alıp Verme Mekanizması",
        "cognitiveLevel": "Karşılaştırmalı Analiz",
        "contextTitle": "Soluk Verme Sırasında Meydana Gelen Değişimler",
        "scenario": "Soluk alma ve soluk verme art arda gerçekleşen döngüsel mekanizmalardır. Soluk verme anında vücuttaki kaslarda ve göğüs kafesinde belirli fiziksel değişimler gerçekleşir.",
        "questionPrompt": "Buna göre soluk verme sırasında aşağıdaki olaylardan hangisi gerçekleşir?",
        "options": [
            {
                "key": "A",
                "text": "Diyafram kası kasılarak düzleşir."
            },
            {
                "key": "B",
                "text": "Kaburgalar arası kaslar kasılarak göğüs kafesi genişler."
            },
            {
                "key": "C",
                "text": "Akciğerlerin hacmi büyür ve iç basınç düşer."
            },
            {
                "key": "D",
                "text": "Diyafram kası gevşeyerek kubbeleşir ve göğüs boşluğunun hacmi daralır."
            }
        ],
        "correctAnswer": "D",
        "explanation": "Soluk verme anında diyafram gevşer (kubbeleşir), kaburgalar arası kaslar gevşer, göğüs kafesi daralır ve akciğerlerdeki hava dışarı itilir."
    },
    {
        "id": 7313,
        "theme": "Solunum Gazları Analizi",
        "cognitiveLevel": "Tablo Yorumlama",
        "contextTitle": "Solunan Hava ile Verilen Havadaki Gaz Oranları",
        "scenario": "Sağlıklı bir insanın soluduğu atmosfer havası ile vücuttan dışarı verdiği nefesteki gazların yaklaşık oranları ölçülerek tabloya kaydedilmiştir:\n• Oksijen: Alınan havada %21, Verilen havada %16\n• Karbondioksit: Alınan havada %0,04, Verilen havada %4,4\n• Azot: Alınan havada %78, Verilen havada %78",
        "questionPrompt": "Bu tablodaki verilerden yararlanılarak aşağıdaki çıkarımlardan hangisine ulaşılabilir?",
        "options": [
            {
                "key": "A",
                "text": "Solunan havadaki oksijenin bir kısmı alveollerden kana geçmiş, kandaki karbondioksit ise havaya aktarılmıştır."
            },
            {
                "key": "B",
                "text": "Azot gazı hücrelerde enerji üretiminde tamamen tüketilmiştir."
            },
            {
                "key": "C",
                "text": "Verilen solukta oksijen gazı tamamen tükenmiştir."
            },
            {
                "key": "D",
                "text": "Soluk alma sırasında karbondioksit gazı vücuda hiç giremez."
            }
        ],
        "correctAnswer": "A",
        "explanation": "Verilen solukta oksijenin %21’den %16’ya düşmesi oksijenin kana geçtiğini; karbondioksitin %0,04’ten %4,4’e çıkması ise hücresel solunum atığı CO2’in dışarı verildiğini gösterir."
    },
    {
        "id": 7314,
        "theme": "Alveol ve Kılcal Damar Etkileşimi",
        "cognitiveLevel": "Mikroskobik Düzey Analizi",
        "contextTitle": "Akciğer Alveollerinde Gaz Değişimi",
        "scenario": "Akciğerlerde bronşçukların ucunda bulunan milyonlarca üzüm salkımı benzeri alveol kesesi, tek katlı ince epitel dokudan oluşur ve etrafı yoğun bir kılcal damar ağı ile sarılmıştır.",
        "questionPrompt": "Alveoller ile kılcal damarlar arasındaki gaz geçişi ile ilgili aşağıdakilerden hangisi doğrudur?",
        "options": [
            {
                "key": "A",
                "text": "Alveoldeki karbondioksit kana, kandaki oksijen alveole geçer."
            },
            {
                "key": "B",
                "text": "Alveoldeki oksijen kana geçerken, kandaki karbondioksit alveol boşluğuna geçer."
            },
            {
                "key": "C",
                "text": "Alveoller gaz değişimi yapmaz, sadece havadaki mikropları yok eder."
            },
            {
                "key": "D",
                "text": "Alveollerde sadece su buharı emilir, oksijen emilimi midede gerçekleşir."
            }
        ],
        "correctAnswer": "B",
        "explanation": "Havadaki yüksek oksijen alveolden kılcal damardaki kana; kandaki yüksek karbondioksit ise kılcal damardan alveole geçerek solukla atılır."
    },
    {
        "id": 7315,
        "theme": "Solunum Sistemi Sağlığı",
        "cognitiveLevel": "Günlük Yaşam ve Çıkarım",
        "contextTitle": "Kapalı ve Havasız Odalarda Ders Çalışma",
        "scenario": "Penceresi kapalı ve uzun süre havalandırılmamış bir odada ders çalışan bir öğrencide bir süre sonra esneme, dikkat dağınıklığı ve baş ağrısı şikâyetleri ortaya çıkmıştır. Odanın penceresi açılıp temiz hava girişi sağlandığında öğrencinin dikkati yeniden toplanmıştır.",
        "questionPrompt": "Odanın havasız kalması sonucunda öğrencide halsizlik ve odaklanma güçlüğü oluşmasının nedeni nedir?",
        "options": [
            {
                "key": "A",
                "text": "Odadaki oksijen oranının azalıp karbondioksitin artması sonucu hücrelerde üretilen enerjinin azalması"
            },
            {
                "key": "B",
                "text": "Odadaki azot gazının solunum yollarını tıkaması"
            },
            {
                "key": "C",
                "text": "Öğrencinin alyuvarlarının tamamen parçalanması"
            },
            {
                "key": "D",
                "text": "Odadaki havanın sıcaklığının mutlak sıfıra düşmesi"
            }
        ],
        "correctAnswer": "A",
        "explanation": "Havasız ortamda CO2 birikir ve O2 azalır; beyin ve vücut hücrelerine yetersiz oksijen gittiğinde enerji üretimi düşer, yorgunluk ve uyku hali başlar."
    },
    {
        "id": 7316,
        "theme": "Boşaltım Sistemi ve Damar Analizi",
        "cognitiveLevel": "Grafik ve Veri Yorumlama",
        "contextTitle": "Böbrek Atardamarı ve Toplardamarı Madde Kıyaslaması",
        "scenario": "Böbreklere kan getiren böbrek atardamarı ile böbreklerden çıkan böbrek toplardamarındaki kan analiz edilerek karşılaştırılmıştır:\n• Üre: Atardamarda ÇOK, Toplardamarda AZ\n• Tuz: Atardamarda ÇOK, Toplardamarda AZ\n• Su: Atardamarda %49,5, Toplardamarda %49,3",
        "questionPrompt": "Bu analiz sonuçlarına göre böbreklerin temel görevi hakkında aşağıdaki yargılardan hangisine varılır?",
        "options": [
            {
                "key": "A",
                "text": "Böbrekler kan hücrelerini parçalayarak enerji üretir."
            },
            {
                "key": "B",
                "text": "Böbrekler kanı filtreleyerek üre ve fazla tuz gibi metabolik atıkları ayırıp idrarı oluşturur."
            },
            {
                "key": "C",
                "text": "Böbrekler kana besin ve hormon salgılayarak kan miktarını artırır."
            },
            {
                "key": "D",
                "text": "Böbrekler kanda bulunan suyun tamamını süzerek vücuttan dışarı atar."
            }
        ],
        "correctAnswer": "B",
        "explanation": "Böbrekler süzme (filtrasyon) yaparak kandaki üre ve tuz miktarını düşürür ve bu atıkları idrar torbasına gönderir."
    },
    {
        "id": 7317,
        "theme": "Boşaltım Organları Sıralaması",
        "cognitiveLevel": "Anatomik Sıralama",
        "contextTitle": "İdrarın Oluşumundan Dışarı Atılmasına Kadar İzlediği Yol",
        "scenario": "Vücutta metabolik atıkların kandan temizlenip idrar halinde vücut dışına atılmasına kadar 4 temel yapı ve organ sırasıyla görev yapar.",
        "questionPrompt": "İdrarın izlediği doğru sıralama aşağıdakilerin hangisinde verilmiştir?",
        "options": [
            {
                "key": "A",
                "text": "Böbrek ➔ Üretra ➔ Mesane ➔ Üreter"
            },
            {
                "key": "B",
                "text": "Mesane ➔ Böbrek ➔ Üreter ➔ Üretra"
            },
            {
                "key": "C",
                "text": "Böbrek ➔ Üreter ➔ Mesane (İdrar Kesesi) ➔ Üretra"
            },
            {
                "key": "D",
                "text": "Üreter ➔ Böbrek ➔ Üretra ➔ Mesane"
            }
        ],
        "correctAnswer": "C",
        "explanation": "İdrar böbreklerde oluşur, üreter (idrar borusu) ile mesaneye (idrar kesesi) taşınır, burada depolanır ve üretra (idrar kanalı) ile dışarı atılır."
    },
    {
        "id": 7318,
        "theme": "Boşaltım Sistemi Modeli",
        "cognitiveLevel": "Model Analizi",
        "contextTitle": "Huni, Pamuk ve Balonlu Süzme Düzeneği",
        "scenario": "Öğrenciler bir huni içine pamuk yerleştirmiş, huninin ucunu bir plastik boruyla balona, balonu da bir pipetle toplama kabına bağlamıştır. Karışım huniye döküldüğünde katı maddeler pamukta kalırken sıvı kısım balonda birikmiş, ardından pipetten kaba akmıştır.",
        "questionPrompt": "Bu modelde pamuklu huni, plastik boru ve balon sırasıyla hangi boşaltım organlarına karşılık gelir?",
        "options": [
            {
                "key": "A",
                "text": "Mesane - Üretra - Böbrek"
            },
            {
                "key": "B",
                "text": "Böbrek - Üreter - Mesane (İdrar Kesesi)"
            },
            {
                "key": "C",
                "text": "Üreter - Böbrek - Üretra"
            },
            {
                "key": "D",
                "text": "Böbrek - Üretra - Üreter"
            }
        ],
        "correctAnswer": "B",
        "explanation": "Süzmeyi yapan pamuklu huni böbrek, ileten boru üreter, depolayan balon ise mesanedir."
    },
    {
        "id": 7319,
        "theme": "Boşaltıma Yardımcı Organlar",
        "cognitiveLevel": "Sistemler Arası İlişki",
        "contextTitle": "Deri, Akciğer ve Karaciğerin Boşaltımdaki Rolü",
        "scenario": "Boşaltım sadece böbreklerle sınırlı değildir; vücutta farklı organlar da atık maddelerin uzaklaştırılmasına veya zararsız hale getirilmesine destek olur.",
        "questionPrompt": "Boşaltıma yardımcı organlar ve görevleri ile ilgili aşağıdaki eşleştirmelerden hangisi yanlıştır?",
        "options": [
            {
                "key": "A",
                "text": "Deri: Terleme yoluyla su ve tuzun fazlasını dışarı atar."
            },
            {
                "key": "B",
                "text": "Akciğerler: Soluk verme yoluyla karbondioksit ve su buharını vücuttan uzaklaştırır."
            },
            {
                "key": "C",
                "text": "Karaciğer: Protein atığı çok zehirli amonyağı daha az zararlı üreye dönüştürür."
            },
            {
                "key": "D",
                "text": "Kalın bağırsak: Kandaki üreyi ve zehirli gazları doğrudan süzerek dışarı atar."
            }
        ],
        "correctAnswer": "D",
        "explanation": "Kalın bağırsak kanı süzmez; sindirilmeyen posayı ve bir miktar suyu dışkı olarak atar. Kanı süzen organ böbrektir."
    },
    {
        "id": 7320,
        "theme": "Boşaltım Sistemi Sağlığı",
        "cognitiveLevel": "Sağlık ve Klinik Çıkarım",
        "contextTitle": "Böbrek Taşı Oluşumu ve Diyaliz Tedavisi",
        "scenario": "Günde 1 litreden az su tüketen ve aşırı tuzlu gıdalarla beslenen bir bireyde şiddetli bel ve yan ağrısı şikayetiyle böbrek taşı teşhisi konulmuştur. Diğer yandan böbrekleri tamamen iflas eden bir hasta haftada 3 gün diyaliz makinesine bağlanmaktadır.",
        "questionPrompt": "Böbrek sağlığının korunması ve tedavi yöntemleri ile ilgili aşağıdaki çıkarımlardan hangisi doğrudur?",
        "options": [
            {
                "key": "A",
                "text": "Böbrek taşı oluşumunu engellemek için tuz tüketimi artırılmalı, su içmekten kaçınılmalıdır."
            },
            {
                "key": "B",
                "text": "Diyaliz makinesi böbreklerin kanı filtreleme görevini üstlenerek kandaki zararlı atıkları temizler."
            },
            {
                "key": "C",
                "text": "Böbrek yetmezliği olan hastalara sadece karaciğer nakli yapılarak kesin tedavi sağlanır."
            },
            {
                "key": "D",
                "text": "Diyaliz tedavisi gören kişilerin böbrekleri normal insanlardan daha fazla idrar üretir."
            }
        ],
        "correctAnswer": "B",
        "explanation": "Diyaliz makinesi yapay bir böbrek gibi çalışır; hastanın kanındaki üre, fazla tuz ve toksinleri yarı geçirgen zarlardan süzerek kanı temizler."
    }
],
  colorTheme: {
    primary: 'from-emerald-600 to-teal-700',
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-950/40',
    accent: 'text-emerald-400',
    text: 'text-emerald-200'
  },
  subTopics: [
    {
      id: 'g7-u3-sub1',
      title: '1. Sindirim Sistemi',
      shortTitle: 'Sindirim Sistemi',
      badge: '1. Bölüm',
      pageRange: '89-100',
      concepts: ['Ağız', 'Mide', 'İnce Bağırsak', 'Fiziksel Sindirim', 'Kimyasal Sindirim', 'Karaciğer & Safra', 'Pankreas'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Sindirim Nedir? Fiziksel ve Kimyasal Sindirim',
          paragraphs: [
            'Canlıların büyüme, gelişme ve yaşamsal faaliyetlerini sürdürmesi için enerjiye ihtiyacı vardır. Tükettiğimiz büyük moleküllü besinlerin hücre zarından geçebilecek kadar küçük yapı taşlarına parçalanıp kana karışması sürecine sindirim denir.',
            'Sindirim iki aşamalı bir nizamla gerçekleşir: Fiziksel (Mekanik) Sindirim ve Kimyasal Sindirim.'
          ],
          keyPoints: [
            'Fiziksel (Mekanik) Sindirim: Besinlerin çiğneme (dişler), kas hareketleri (çalkalama) ve safra sıvısı yardımıyla kimyasal yapısı değişmeden sadece küçük parçalara ayrılmasıdır. Amacı: Besinin yüzey alanını artırarak enzimlerin daha hızlı etki etmesini sağlamaktır.',
            'Kimyasal Sindirim: Besinlerin enzimler ve su yardımıyla en küçük yapı taşlarına (glikoz, amino asit vb.) parçalanmasıdır.'
          ],
          table: {
            headers: ['Sindirim Türü', 'Kullanılan Araçlar', 'Besinin Kimyasal Yapısı', 'Temel Görevi'],
            rows: [
              ['Fiziksel (Mekanik)', 'Dişler, kaslar, safra sıvısı', 'Değişmez (Sadece küçülür)', 'Yüzey alanını genişletmek'],
              ['Kimyasal', 'Enzimler ve su', 'Değişir (Yapı taşlarına ayrılır)', 'Kana geçecek boyuta getirmek']
            ]
          }
        },
        {
          heading: 'Sindirim Organları ve Sindirime Yardımcı Organlar',
          paragraphs: [
            'Sindirim kanalı organları sırasıyla: Ağız ➔ Yutak ➔ Yemek Borusu ➔ Mide ➔ İnce Bağırsak ➔ Kalın Bağırsak ➔ Anüs.',
            'Yutak ve yemek borusunda HİÇBİR SİNDİRİM (ne fiziksel ne kimyasal) GERÇEKLEŞMEZ; besini kas hareketleriyle mideye iletirler.'
          ],
          keyPoints: [
            'Ağız: Karbonhidratların kimyasal sindirimi tükürük enzimiyle başlar. Dişlerle fiziksel sindirim yapılır.',
            'Mide: Proteinlerin kimyasal sindirimi mide öz suyu enzimleri ile başlar. Mide kasları çalkalayarak fiziksel sindirim yapar (bulamaç / kimus oluşur).',
            'İnce Bağırsak: Karbonhidrat, protein ve yağların kimyasal sindirimi tamamlanır. Yağların kimyasal sindirimi İLK KEZ burada başlar ve biter. Sindirilen besinler villus (tümür) uzantılarıyla emilerek kana geçer.',
            'Kalın Bağırsak: Sindirim gerçekleşmez. Posada kalan su, vitamin ve mineraller burada emilir.',
            'Yardımcı Organ 1 - Karaciğer: Safra sıvısı salgılar. Safra ince bağırsağa dökülerek yağların FİZİKSEL (mekanik) sindirimini sağlar (Enzim içermez!).',
            'Yardımcı Organ 2 - Pankreas: Pankreas öz suyu salgılar. İnce bağırsağa gönderilen bu öz su karbonhidrat, protein ve yağların KİMYASAL sindirimini tamamlar.'
          ],
          table: {
            headers: ['Besin İçeriği', 'Kimyasal Sindirimin Başladığı Yer', 'Kimyasal Sindirimin Bittiği Yer'],
            rows: [
              ['Karbonhidratlar', 'Ağız (Tükürük)', 'İnce Bağırsak (Pankreas öz suyu)'],
              ['Proteinler', 'Mide (Mide öz suyu)', 'İnce Bağırsak (Pankreas öz suyu)'],
              ['Yağlar', 'İnce Bağırsak (Pankreas öz suyu)', 'İnce Bağırsak (Pankreas öz suyu)']
            ]
          }
        },
        {
          heading: 'Sindirim Sisteminin Sağlığı ve Beslenme Alışkanlıkları',
          paragraphs: [
            'Ders kitabının 96-100 sayfalarında vurgulandığı üzere, sindirim sistemi sağlığı yaşam tarzımızla birebir ilişkilidir.',
            'Yeterli ve dengeli beslenmek, lifli gıdalar (sebze, meyve, tam tahıllar) tüketmek ve günde en az 1.5 - 2 litre su içmek sindirimi kolaylaştırır.'
          ],
          keyPoints: [
            'Hareketsizlik ve Ekran Bağımlılığı: Uzun süre ekran başında hareketsiz oturmak bağırsak hareketlerini yavaşlatır, kabızlığa ve sindirim kramplarına yol açar.',
            'Ayaküstü (Fast-Food) ve Hızlı Yemek: Besinlerin yeterince çiğnenmeden yutulması mideye aşırı yük bindirir, reflü ve gastrite zemin hazırlar.',
            'Düzenli Egzersiz: Karın ve vücut kaslarını çalıştırarak bağırsak peristaltizmini artırır ve stresi azaltır.'
          ]
        }
      ],
      glossary: [
        { term: 'Sindirim', definition: 'Besin maddelerinin kana geçebilecek kadar küçük moleküllere parçalanması süreci.' },
        { term: 'Enzim', definition: 'Kimyasal tepkimeleri ve kimyasal sindirimi çok yüksek hızda gerçekleştiren özel biyolojik proteinler.' },
        { term: 'Safra Sıvısı', definition: 'Karaciğer tarafından üretilen, safra kesesinde depolanan ve yağları mekanik olarak damlacıklara bölen sıvı.' },
        { term: 'Villus', definition: 'İnce bağırsağın iç yüzeyinde emilim yüzeyini katbekat genişleten parmak benzeri mikroskobik kıvrımlar.' },
        { term: 'Pankreas Öz Suyu', definition: 'Karbonhidrat, protein ve yağları kimyasal olarak parçalayan sindirim enzimlerini içeren sıvı.' }
      ],
      trueFalseQuestions: [
        { id: 1, text: 'Karbonhidratların kimyasal sindirimi ağızda başlar, ince bağırsakta tamamlanır.', isCorrect: true, explanation: 'Doğrudur. Tükürükteki amilaz ağızda başlatır, ince bağırsakta biter.' },
        { id: 2, text: 'Mide, yalnızca kimyasal sindirim yapar; kas hareketleriyle fiziksel sindirim yapmaz.', isCorrect: false, explanation: 'Yanlıştır. Mide güçlü kaslarıyla besinleri çalkalayarak mekanik sindirime uğratır.' },
        { id: 3, text: 'Karaciğerin salgıladığı safra sıvısı yağların kimyasal sindirimini sağlar.', isCorrect: false, explanation: 'Yanlıştır. Safra sıvısında enzim yoktur; yağların yalnızca mekanik (fiziksel) sindirimini yapar.' },
        { id: 4, text: 'Yutak ve yemek borusunda hiçbir kimyasal veya fiziksel sindirim gerçekleşmez.', isCorrect: true, explanation: 'Doğrudur. Yutak ve yemek borusu sadece iletim görevi üstlenir.' },
        { id: 5, text: 'Besinlerin sindirimi tamamlandıktan sonra kana emilimi büyük oranda ince bağırsaktaki villuslarla gerçekleşir.', isCorrect: true, explanation: 'Doğrudur. Villuslar emilim yüzeyini artırarak besinlerin kana geçmesini sağlar.' },
        { id: 6, text: 'Kalın bağırsakta besin maddeleri enzimlerle kimyasal sindirime uğratılır.', isCorrect: false, explanation: 'Yanlıştır. Kalın bağırsakta sindirim yoktur; sadece su, mineral ve vitaminlerin geri emilimi yapılır.' },
        { id: 7, text: 'Pankreas öz suyu karbonhidrat, yağ ve proteinlerin üçünün birden kimyasal sindiriminde görev alır.', isCorrect: true, explanation: 'Doğrudur. Pankreas öz suyu her üç besin grubunu da sindiren enzimler içerir.' },
        { id: 8, text: 'Yağların kimyasal sindirimi midede başlar.', isCorrect: false, explanation: 'Yanlıştır. Yağların kimyasal sindirimi ince bağırsakta başlar ve yine ince bağırsakta biter.' },
        { id: 9, text: 'Uzun süre hareketsiz ekran başında kalmak bağırsak hareketlerini hızlandırarak sindirime fayda sağlar.', isCorrect: false, explanation: 'Yanlıştır. Hareketsizlik bağırsak hareketlerini yavaşlatır ve sindirim sorunlarına sebep olur.' },
        { id: 10, text: 'Besinleri yavaş ve iyice çiğneyerek yemek mide ve bağırsakların iş yükünü hafifletir.', isCorrect: true, explanation: 'Doğrudur. Çiğneme besin yüzey alanını artırır ve sindirimi kolaylaştırır.' },
        {"id":11,"statement":"Besin maddelerinin dişler yardımıyla çiğnenmesi fiziksel sindirimi sağlar.","isCorrect":true,"explanation":"Dişler besinleri ezerek ve parçalayarak yüzey alanını artırır ve fiziksel sindirimi gerçekleştirir."},
        {"id":12,"statement":"Kimyasal sindirim gerçekleştikten sonra besinler fiziksel sindirime uğrar.","isCorrect":false,"explanation":"Fiziksel sindirim önce gerçekleşerek besin yüzeyini artırır ve kimyasal sindirimi kolaylaştırır."},
        {"id":13,"statement":"Yemek borusundaki peristaltik kas hareketleri sırasında besinlerin kimyasal sindirimi gerçekleşir.","isCorrect":false,"explanation":"Yemek borusunda hiçbir kimyasal veya fiziksel sindirim gerçekleşmez; sadece mideye iletim yapılır."},
        {"id":14,"statement":"İnce bağırsaktaki villuslar besinlerle temas yüzeyini artırarak besin emilimini hızlandırır.","isCorrect":true,"explanation":"Villus adı verilen parmaksı çıkıntılar emilim yüzeyini katbekat artırarak sindirilen besinlerin kana geçişini kolaylaştırır."},
        {"id":15,"statement":"Karaciğerin ürettiği safra sıvısı doğrudan kalın bağırsağa dökülür.","isCorrect":false,"explanation":"Safra sıvısı bir kanal aracılığıyla ince bağırsağa iletilir ve burada yağların fiziksel sindirimini sağlar."},
        {"id":16,"statement":"Pankreas öz suyundaki enzimler karbonhidrat, yağ ve proteinlerin kimyasal sindirimini sağlar.","isCorrect":true,"explanation":"Pankreas öz suyu her üç temel besin grubunun kimyasal sindirimini tamamlayan enzimler içerir."},
        {"id":17,"statement":"Midede kas hareketleriyle katı ve sıvı besinlerin karıştırılıp bulamaç hâline getirilmesi fiziksel sindirimdir.","isCorrect":true,"explanation":"Mide kaslarının kasılıp gevşemesiyle besinlerin kimusa (bulamaca) dönüştürülmesi mekanik bir olaydır."},
        {"id":18,"statement":"Gün boyunca yeterli miktarda (yaklaşık 2 litre) su tüketmek sindirim sisteminin sağlıklı çalışmasını destekler.","isCorrect":true,"explanation":"Yeterli sıvı alımı sindirim enzimlerinin etkin çalışması ve kabızlığın önlenmesi için gereklidir."},
        {"id":19,"statement":"Karaciğer ve pankreas sindirim kanalının organları olup besinler bu organların içinden geçer.","isCorrect":false,"explanation":"Karaciğer ve pankreas sindirime yardımcı organlardır; besinler bu organların içinden geçmez, salgılarını kanalla ince bağırsağa gönderirler."},
        {"id":20,"statement":"Sindirim olayı sonucunda hücrelerdeki yaşamsal faaliyetler için gerekli enerji doğrudan açığa çıkar.","isCorrect":false,"explanation":"Sindirim besinleri kana ve hücreye geçecek boyuta küçültür; enerjinin açığa çıkması ise hücresel solunum ile gerçekleşir."}
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Karaciğer ve Safra Deneyi',
          cognitiveLevel: 'Deney ve Değişken',
          scenario: 'Bir araştırmacı özdeş iki deney tüpüne eşit miktarda zeytinyağı ve su koyuyor.\n1. Tüpe: Pankreas öz suyu ilave ediliyor.\n2. Tüpe: Safra sıvısı + Pankreas öz suyu ilave ediliyor.\nBelirli bir süre sonra 2. tüpteki yağların çok daha kısa sürede sindirildiği gözlemleniyor.',
          questionPrompt: '2. tüpte yağların daha hızlı sindirilmesinin nedeni aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Safra sıvısının yağları küçük damlacıklara bölerek (fiziksel sindirim) pankreas enzimlerinin etki yüzeyini artırması' },
            { key: 'B', text: 'Safra sıvısının yağları doğrudan yapı taşlarına kadar kimyasal olarak parçalaması' },
            { key: 'C', text: 'Pankreas öz suyunun 1. tüpte etkisiz kalması' },
            { key: 'D', text: 'Safra sıvısının suyun sıcaklığını kaynama noktasına çıkarması' }
          ],
          correctAnswer: 'A',
          explanation: 'Safra sıvısı yağların mekanik sindirimini yaparak temas yüzeyini artırır; böylece pankreas enzimleri yağı çok daha hızlı sindirir.'
        },
        {
          id: 2,
          theme: 'Sindirim Organları Numaralandırma',
          cognitiveLevel: 'Görsel Analiz',
          scenario: 'Kitabın 143. sayfasında insan sindirim sistemi şemasında:\n1: Ağız, 2: Karaciğer, 3: Safra kesesi, 4: Kalın bağırsak, 5: Yutak, 6: Yemek borusu, 7: Mide, 8: İnce bağırsak, 9: Anüs gösterilmiştir.',
          questionPrompt: 'Proteinlerin kimyasal sindiriminin başladığı organ ile yağların kimyasal sindiriminin başladığı organ sırasıyla hangileridir?',
          options: [
            { key: 'A', text: '7 (Mide) ve 8 (İnce bağırsak)' },
            { key: 'B', text: '1 (Ağız) ve 7 (Mide)' },
            { key: 'C', text: '6 (Yemek borusu) ve 4 (Kalın bağırsak)' },
            { key: 'D', text: '2 (Karaciğer) ve 3 (Safra kesesi)' }
          ],
          correctAnswer: 'A',
          explanation: 'Proteinlerin kimyasal sindirimi 7 numaralı organda (mide) başlar; yağların kimyasal sindirimi ise 8 numaralı organda (ince bağırsak) başlar.'
        },
        {
          id: 3,
          theme: 'Villus Yapısı ve Emilim',
          cognitiveLevel: 'Biyolojik Uyum',
          scenario: 'İnce bağırsağın iç yüzeyi düz bir boru şeklinde olmayıp milyonlarca kıvrımlı parmak benzeri villus çıkıntısıyla kaplıdır.',
          questionPrompt: 'Bu özel anatomik yapının insana sağladığı en büyük fayda nedir?',
          options: [
            { key: 'A', text: 'Besinlerin geri kusulmasını engellemek' },
            { key: 'B', text: 'Emilim yüzey alanını tenis kortu büyüklüğüne (yaklaşık 250-300 m²) ulaştırarak besin yapı taşlarının kana hızla ve eksiksiz geçmesini sağlamak' },
            { key: 'C', text: 'Mide asidini yok etmek' },
            { key: 'D', text: 'Su ihtiyacını sıfıra indirmek' }
          ],
          correctAnswer: 'B',
          explanation: 'Villuslar yüzey alanını muazzam oranda genişleterek besin emilim verimini en üst düzeye çıkarır.'
        },
        {
          id: 4,
          theme: 'Mide Öz Suyu ve Korunma',
          cognitiveLevel: 'Analiz',
          scenario: 'Mide öz suyu proteinleri parçalayacak kadar güçlü enzimler ve pH 1-2 düzeyinde güçlü hidroklorik asit içerir.',
          questionPrompt: 'Midenin bu derece güçlü asit ortamında kendi kendini sindirip erimesini engelleyen koruyucu yapı nedir?',
          options: [
            { key: 'A', text: 'Midenin iç yüzeyini kaplayan kalın mukus tabakası' },
            { key: 'B', text: 'Safra sıvısı' },
            { key: 'C', text: 'Tükürük sıvısı' },
            { key: 'D', text: 'Yemek borusunun kıkırdak halkaları' }
          ],
          correctAnswer: 'A',
          explanation: 'Mide iç duvarı mukus salgısı ile kaplanarak asidin ve sindirim enzimlerinin mide kaslarına zarar vermesi önlenir.'
        },
        {
          id: 5,
          theme: 'Beslenme Alışkanlığı ve Sağlık',
          cognitiveLevel: 'Örnek Olay Değerlendirme',
          scenario: 'Kitabın 144. sayfasındaki örnek olayda Burçak kahvaltısını yapmış ancak akşam yemeğini 21:00’de ayaküstü hızlıca fast-food yemiştir; Arda ise kahvaltıyı atlayıp kantinden paketli abur cuburla beslenmiştir.',
          questionPrompt: 'Her iki öğrencinin de ortak sindirim hatası aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Çok fazla su tüketmeleri' },
            { key: 'B', text: 'Öğün düzenine uymayıp hazır, aşırı yağlı paketli gıdaları çiğnemeden hızlı tüketmeleri' },
            { key: 'C', text: 'Aşırı spor yapmaları' },
            { key: 'D', text: 'Yalnızca sebze yemeleri' }
          ],
          correctAnswer: 'B',
          explanation: 'Düzensiz saatler, hazır paketli gıdalar ve hızlı yemek yemek sindirim sistemi sağlığını bozan ortak hatalardır.'
        },
        {
          id: 6,
          theme: 'Kimyasal Sindirimde Enzim Etkisi',
          cognitiveLevel: 'Çıkarım',
          scenario: 'Ağızda ekmek çiğneyen bir kişi ekmeği hemen yutmayıp 2-3 dakika boyunca çiğnediğinde ağzında tatlı bir lezzet oluştuğunu fark eder.',
          questionPrompt: 'Bu tatlılaşmanın sebebi nedir?',
          options: [
            { key: 'A', text: 'Ekmeğin içindeki nişastanın (karbonhidrat) tükürükteki enzimlerle parçalanarak tatlı glikoz/maltoz şekerlerine dönüşmesi' },
            { key: 'B', text: 'Dişlerin şeker üretmesi' },
            { key: 'C', text: 'Ekmeğin eriyip kaybolması' },
            { key: 'D', text: 'Mide asidinin ağza gelmesi' }
          ],
          correctAnswer: 'A',
          explanation: 'Tükürükteki amilaz enzimi nişastayı parçalayarak tatlı yapı taşlarına ayırır; bu kimyasal sindirimin başladığının kanıtıdır.'
        },
        {
          id: 7,
          theme: 'Mekanik Sindirim Yapan Yapılar',
          cognitiveLevel: 'Sınıflandırma',
          scenario: 'Sindirim kanalında besinlerin boyutunu küçülterek yüzeyini artıran fiziksel sindirim yapıları listelenmiştir.',
          questionPrompt: 'Aşağıdaki yapılardan hangisi MEKANİK sindirimde görev ALMAZ?',
          options: [
            { key: 'A', text: 'Ağızdaki azı dişleri' },
            { key: 'B', text: 'Midenin düz kasları' },
            { key: 'C', text: 'Karaciğerin ürettiği safra sıvısı' },
            { key: 'D', text: 'Tükürük sıvısındaki amilaz enzimi' }
          ],
          correctAnswer: 'D',
          explanation: 'Amilaz bir enzimdir ve kimyasal sindirim yapar. Dişler, mide kasları ve safra ise mekanik sindirim yapar.'
        },
        {
          id: 8,
          theme: 'Kalın Bağırsağın Görevi',
          cognitiveLevel: 'Kavrama',
          scenario: 'İnce bağırsakta sindirimi tamamlanan besinlerden arta kalan posa kalın bağırsağa geçer.',
          questionPrompt: 'Kalın bağırsakta emilimi gerçekleşen maddeler hangileridir?',
          options: [
            { key: 'A', text: 'Proteinler ve amino asitler' },
            { key: 'B', text: 'Su, bazı vitaminler (B ve K) ve mineraller' },
            { key: 'C', text: 'Yağ damlacıkları' },
            { key: 'D', text: 'Büyük nişasta molekülleri' }
          ],
          correctAnswer: 'B',
          explanation: 'Kalın bağırsakta besin sindirimi olmaz; yalnızca su, B-K vitaminleri ve minerallerin emilimi yapılır.'
        },
        {
          id: 9,
          theme: 'Pankreas ve Karaciğer Kanalları',
          cognitiveLevel: 'Anatomik Bağlantı',
          scenario: 'Karaciğerin ürettiği safra sıvısı ile pankreasın ürettiği pankreas öz suyu özel kanallarla sindirim kanalına dökülür.',
          questionPrompt: 'Bu iki salgının döküldüğü ve sindirimi tamamladığı organ hangisidir?',
          options: [
            { key: 'A', text: 'Mide' },
            { key: 'B', text: 'İnce bağırsak' },
            { key: 'C', text: 'Kalın bağırsak' },
            { key: 'D', text: 'Yemek borusu' }
          ],
          correctAnswer: 'B',
          explanation: 'Her iki salgı da ince bağırsağın başlangıç bölümüne dökülür.'
        },
        {
          id: 10,
          theme: 'Sindirimde İzlenen Yol Sıralaması',
          cognitiveLevel: 'Süreç Bilgisi',
          scenario: 'Bir elma ısırıldıktan sonra posasının atılmasına kadar geçen yolculuk takip edilmiştir.',
          questionPrompt: 'Besinin izlediği doğru anatomik sıra hangisidir?',
          options: [
            { key: 'A', text: 'Ağız ➔ Yutak ➔ Yemek borusu ➔ Mide ➔ İnce bağırsak ➔ Kalın bağırsak ➔ Anüs' },
            { key: 'B', text: 'Ağız ➔ Mide ➔ Yutak ➔ İnce bağırsak ➔ Kalın bağırsak' },
            { key: 'C', text: 'Yutak ➔ Ağız ➔ Mide ➔ Kalın bağırsak' },
            { key: 'D', text: 'Ağız ➔ Yemek borusu ➔ İnce bağırsak ➔ Mide' }
          ],
          correctAnswer: 'A',
          explanation: 'Doğru sıra: Ağız ➔ Yutak ➔ Yemek borusu ➔ Mide ➔ İnce bağırsak ➔ Kalın bağırsak ➔ Anüs.'
        },
        {
          id: 11,
          theme: 'Besin Türü ve Sindirim Yeri Eşlemesi',
          cognitiveLevel: 'Karşılaştırma',
          scenario: 'Bir öğrenci öğle yemeğinde haşlanmış et (protein) ve patates kızartması (karbonhidrat ve yağ) yemiştir.',
          questionPrompt: 'Etin kimyasal sindiriminin başladığı yer ile patatesteki nişastanın kimyasal sindiriminin başladığı yer hangisidir?',
          options: [
            { key: 'A', text: 'Et: Mide | Patates: Ağız' },
            { key: 'B', text: 'Et: Ağız | Patates: Mide' },
            { key: 'C', text: 'Her ikisi de Ağız' },
            { key: 'D', text: 'Her ikisi de İnce bağırsak' }
          ],
          correctAnswer: 'A',
          explanation: 'Proteinlerin (et) kimyasal sindirimi midede, karbonhidratların (patates) ağızda başlar.'
        },
        {
          id: 12,
          theme: 'Mide Krampları ve Hareketsizlik',
          cognitiveLevel: 'Sağlık Bilinci',
          scenario: 'Kitabın 96. sayfasındaki bilgisayar mühendisi Ruhi masa başında saatlerce kıpırdamadan çalışmaktadır.',
          questionPrompt: 'Doktorun Ruhi’ye tavsiye ettiği yaşam tarzı değişiklikleri arasında hangisi YER ALMAZ?',
          options: [
            { key: 'A', text: 'Öğün saatlerini düzenli hale getirmek' },
            { key: 'B', text: 'Günde en az 2 litre su içmek ve düzenli yürüyüş/spor yapmak' },
            { key: 'C', text: 'Tüm yemekleri ayakta ve çok hızlı tüketmek' },
            { key: 'D', text: 'Aşırı tuzlu, yağlı ve baharatlı gıdalardan uzak durmak' }
          ],
          correctAnswer: 'C',
          explanation: 'Ayakta ve hızlı yemek sindirim sistemini bozar, doktor tam tersini (oturarak, yavaş çiğneyerek yemek) önerir.'
        },
        {
          id: 13,
          theme: 'Enzimlerin Çalışma Sıcaklığı',
          cognitiveLevel: 'Biyokimyasal İlke',
          scenario: 'İnsan vücudundaki sindirim enzimleri yaklaşık 36.5 - 37 °C vücut sıcaklığında en verimli şekilde çalışır.',
          questionPrompt: 'Aşırı buzlu içeceklerin yemek esnasında hızla tüketilmesinin sindirimi zorlaştırmasının nedeni nedir?',
          options: [
            { key: 'A', text: 'Mide sıcaklığını düşürerek sindirim enzimlerinin çalışma hızını yavaşlatması' },
            { key: 'B', text: 'Suyun besinleri parçalaması' },
            { key: 'C', text: 'Dişlerin kırılması' },
            { key: 'D', text: 'Safra salgısını durdurması' }
          ],
          correctAnswer: 'A',
          explanation: 'Aşırı soğuk içecekler mide sıcaklığını düşürerek enzim aktivitesini yavaşlatır ve kramplara sebep olur.'
        },
        {
          id: 14,
          theme: 'Yemek Borusunun Peristaltik Hareketi',
          cognitiveLevel: 'Mekanizma Kavrama',
          scenario: 'Bir insan baş aşağı dursa bile yuttuğu lokma mideye doğru ilerlemeye devam eder.',
          questionPrompt: 'Lokmanın yer çekimine zıt yönde bile mideye ilerleyebilmesini sağlayan yapısal özellik nedir?',
          options: [
            { key: 'A', text: 'Yemek borusu düz kaslarının dalgalı kasılıp gevşeme (peristaltik) hareketi' },
            { key: 'B', text: 'Ağızdaki tükürüğün vakum yapması' },
            { key: 'C', text: 'Midenin lokmayı içine çekmesi' },
            { key: 'D', text: 'Dişlerin itmesi' }
          ],
          correctAnswer: 'A',
          explanation: 'Yemek borusu istemsiz çalışan düz kasların dalga benzeri ritmik kasılmasıyla (peristaltizm) besinleri iter.'
        },
        {
          id: 15,
          theme: 'Lifli Gıdaların Önemi',
          cognitiveLevel: 'Beslenme',
          scenario: 'Diyetisyenler sağlıklı bir sindirim için kepekli ekmek, yulaf, elma kabuğu gibi lifli gıdaların tüketilmesini önerir.',
          questionPrompt: 'Lifli gıdaların bağırsak sağlığına en büyük faydası hangisidir?',
          options: [
            { key: 'A', text: 'Suyu tutarak dışkının kıvamını düzenlemesi ve bağırsak kaslarının çalışmasını uyararak kabızlığı önlemesi' },
            { key: 'B', text: 'Vücuda aşırı kalori yüklemesi' },
            { key: 'C', text: 'Sindirim enzimlerini yok etmesi' },
            { key: 'D', text: 'Mide asidini sıfırlaması' }
          ],
          correctAnswer: 'A',
          explanation: 'Lifler suyu tutar, bağırsak hareketlerini canlı tutarak kabızlık ve bağırsak tembelliğini engeller.'
        },
        {
          id: 16,
          theme: 'Besin Emiliminde Kan Damarları',
          cognitiveLevel: 'İlişkilendirme',
          scenario: 'İnce bağırsaktaki villusların içi yoğun bir kılcal damar ağıyla çevrilidir.',
          questionPrompt: 'Villusların içinde kılcal damar bulunmasının amacı nedir?',
          options: [
            { key: 'A', text: 'Sindirilen besin yapı taşlarının doğrudan kana geçip vücut hücrelerine taşınmasını sağlamak' },
            { key: 'B', text: 'Mideye kan pompalamak' },
            { key: 'C', text: 'Bağırsağı soğutmak' },
            { key: 'D', text: 'Besinleri dondurmak' }
          ],
          correctAnswer: 'A',
          explanation: 'Emilen besinler kılcal damarlara geçerek dolaşım sistemiyle tüm hücrelere ulaştırılır.'
        },
        {
          id: 17,
          theme: 'Karaciğerin Sindirim Dışı Görevi',
          cognitiveLevel: 'Geniş Bilgi',
          scenario: 'Karaciğer safra üretmenin yanı sıra sindirimden gelen kanı ilk karşılayan organdır.',
          questionPrompt: 'Aşağıdakilerden hangisi karaciğerin görevlerinden biridir?',
          options: [
            { key: 'A', text: 'Zararlı maddeleri etkisiz hale getirmek ve fazla glikozu glikojen olarak depolamak' },
            { key: 'B', text: 'Tükürük salgılamak' },
            { key: 'C', text: 'Besinleri dışarı atmak' },
            { key: 'D', text: 'İdrar toplamak' }
          ],
          correctAnswer: 'A',
          explanation: 'Karaciğer vücudun kimya laboratuvarıdır; toksinleri arıtır ve fazla şekeri depolar.'
        },
        {
          id: 18,
          theme: 'Sindirimde Su Emilimi',
          cognitiveLevel: 'Organ Görevi',
          scenario: 'İshal olan bir bireyin kalın bağırsağında suyun geri emilimi yeterince gerçekleşemez ve vücut hızla su kaybeder.',
          questionPrompt: 'Bu durum kalın bağırsağın hangi temel fonksiyonunun aksadığını gösterir?',
          options: [
            { key: 'A', text: 'Posadaki fazla su ve mineralleri emip vücuda geri kazandırma işlevini' },
            { key: 'B', text: 'Protein sindirme işlevini' },
            { key: 'C', text: 'Safra üretme işlevini' },
            { key: 'D', text: 'Dişleri güçlendirme işlevini' }
          ],
          correctAnswer: 'A',
          explanation: 'Kalın bağırsağın ana görevi atık posadaki suyu ve mineralleri geri emmektir.'
        },
        {
          id: 19,
          theme: 'Çiğneme ve Sindirim Verimi',
          cognitiveLevel: 'Deney ve Matematiksel Mantık',
          scenario: '1 adet bütün küp şekeri bir bardak suya attığımızda 60 saniyede çözünürken, aynı küp şekeri toz haline getirip suya attığımızda 10 saniyede çözünür.',
          questionPrompt: 'Bu deney sindirim sisteminde hangi olayın önemini kanıtlamak için model olarak kullanılır?',
          options: [
            { key: 'A', text: 'Dişlerle yapılan mekanik sindirimin besin yüzey alanını artırarak kimyasal sindirim enzimlerinin hızını artırmasını' },
            { key: 'B', text: 'Enzimlerin şekeri sevmediğini' },
            { key: 'C', text: 'Midenin çalışmasına gerek olmadığını' },
            { key: 'D', text: 'Yemek borusunun tıkandığını' }
          ],
          correctAnswer: 'A',
          explanation: 'Tanecik boyutu küçüldükçe temas yüzeyi artar ve enzimler çok daha hızlı etki eder.'
        },
        {
          id: 20,
          theme: 'Sindirim Sistemi Sağlığı Kuralları',
          cognitiveLevel: 'Sentez ve Değerlendirme',
          scenario: 'Bir okulda öğrencilerin sindirim sağlığını korumak için hazırlanan rehber panosu incelenmiştir.',
          questionPrompt: 'Aşağıdaki maddelerden hangisi bu panoda YER ALMAMALIDIR?',
          options: [
            { key: 'A', text: 'Yemekleri çok sıcak ya da çok soğuk tüketmemeliyiz.' },
            { key: 'B', text: 'Akşam geç saatlerde ağır yağlı yemekler yiyip hemen uyumalıyız.' },
            { key: 'C', text: 'Öğünlerimizde taze sebze, meyve ve lifli gıdalara yer vermeliyiz.' },
            { key: 'D', text: 'Günde yeterli miktarda temiz su içmeye özen göstermeliyiz.' }
          ],
          correctAnswer: 'B',
          explanation: 'Gece geç saatte yemek yiyip yatmak reflü, mide asidi kaçması ve sindirim bozukluklarına neden olur.'
        }
      ]
    },
    {
      id: 'g7-u3-sub2',
      title: '2. Dolaşım Sistemi',
      shortTitle: 'Dolaşım Sistemi',
      badge: '2. Bölüm',
      pageRange: '101-116',
      concepts: ['Kalp', 'Kan', 'Damarlar', 'Küçük Kan Dolaşımı', 'Büyük Kan Dolaşımı', 'Kan Bağışı', 'Organ Bağışı'],
      simulationId: 'skeleton',
      summarySections: [
        {
          heading: 'Dolaşım Sisteminin Görevleri ve Kalbin Yapısı',
          paragraphs: [
            'Dolaşım sistemi; vücut hücrelerinin ihtiyaç duyduğu oksijen, besin ve hormonları hücrelere taşıyan, hücrelerde oluşan zararlı atık maddeleri ve karbon dioksiti ilgili boşaltım organlarına ulaştıran muazzam bir iç nakliye ağıdır.',
            'Dolaşım sistemi; Kalp, Damarlar ve Kan olmak üzere üç temel yapıdan meydana gelir.'
          ],
          keyPoints: [
            'Kalp: Göğüs boşluğunda iki akciğer arasında sola meyilli yer alan, çizgili kas gibi güçlü ama istemsiz çalışan özel kalp kasından (miyokard) yapılmış harika bir pompadır.',
            'Kalbin 4 Odacığı: Üstte 2 kulakçık, altta 2 karıncık bulunur.',
            'Kalbin Sol Tarafı: Daima oksijence zengin TEMİZ KAN taşır.',
            'Kalbin Sağ Tarafı: Daima oksijence fakir (karbon dioksitçe zengin) KİRLİ KAN taşır.',
            'Kulakçıklar ile karıncıklar arasında kanın geriye kaçmasını engelleyen tek yönlü kapakçıklar vardır.'
          ]
        },
        {
          heading: 'Kan Damarları: Atardamar, Toplardamar ve Kılcal Damar',
          paragraphs: [
            'Kan, vücudu bir ağ gibi saran üç farklı damar tipinde akar:',
            '1. Atardamar (Arter): Kalpten çıkan kanı organlara taşır. Akciğer atardamarı HARİÇ hepsi TEMİZ kan taşır. Kan basıncı ve akış hızı en yüksek damardır.',
            '2. Toplardamar (Ven): Organlardan toplanan kanı kalbe getirir. Akciğer toplardamarı HARİÇ hepsi KİRLİ kan taşır. Vücudun alt kısımlarındaki toplardamarlarda kanın yer çekimiyle aşağı kaçmasını önleyen tek yönlü kapakçıklar bulunur.',
            '3. Kılcal Damar: Atardamarlar ile toplardamarları birbirine bağlayan, tek katlı epitelden oluşan çok ince damarlardır. Kan ile doku hücreleri arasındaki madde ve gaz alışverişi YALNIZCA kılcal damarlarda gerçekleşir.'
          ],
          table: {
            headers: ['Özellik', 'Atardamar', 'Kılcal Damar', 'Toplardamar'],
            rows: [
              ['Görevi', 'Kalpten organlara kan taşır', 'Hücrelerle madde alışverişi', 'Organlardan kalbe kan getirir'],
              ['Kan Basıncı', 'En Yüksek', 'Orta', 'En Düşük'],
              ['Akış Hızı', 'En Hızlı', 'En Yavaş (Madde alışverişi için)', 'Orta'],
              ['İstisna Damar', 'Akciğer atardamarı kirlidir', 'Madde alışverişi yeri', 'Akciğer toplardamarı temizdir']
            ]
          }
        },
        {
          heading: 'Küçük ve Büyük Kan Dolaşımı',
          paragraphs: [
            'İnsan vücudunda kanın izlediği iki ana dolaşım yolu harika bir senkronizasyonla çalışır:',
            'Küçük Kan Dolaşımı (Kanı Temizleme Yolu):\nKalbin Sağ Karıncığı ➔ Akciğer Atardamarı ➔ Akciğer Kılcalları (Kan oksijenlenir, CO2 bırakılır) ➔ Akciğer Toplardamarı ➔ Kalbin Sol Kulakçığı.\nAmacı: Kirli kanı akciğerlerde temizlemektir.',
            'Büyük Kan Dolaşımı (Vücudu Besleme Yolu):\nKalbin Sol Karıncığı ➔ Aort Ana Atardamarı ➔ Tüm Vücut Organ Kılcalları (Oksijen/besin verilir, CO2/atık alınır) ➔ Ana Toplardamarlar ➔ Kalbin Sağ Kulakçığı.\nAmacı: Temiz kanı dokulara ulaştırıp besin ve oksijen dağıtmak, kirli kanı geri toplamaktır.'
          ],
          table: {
            headers: ['Dolaşım', 'Başladığı Yer', 'Bittiği Yer', 'Temel Amacı'],
            rows: [
              ['Küçük Kan Dolaşımı', 'Sağ Karıncık', 'Sol Kulakçık', 'Kanı akciğerlerde oksijence zenginleştirmek (temizlemek)'],
              ['Büyük Kan Dolaşımı', 'Sol Karıncık', 'Sağ Kulakçık', 'Hücrelere besin ve O2 dağıtmak, atıkları toplamak']
            ]
          }
        },
        {
          heading: 'Kanın Yapısı, Kan Bağışı ve Organ Bağışı',
          paragraphs: [
            'Kan; %55 kan plazması ve %45 kan hücrelerinden oluşur.',
            'Kan Hücreleri: Alyuvarlar (kırmızı, hemoglobin ile O2 ve CO2 taşır), Akyuvarlar (beyaz, mikroplarla savaşır ve antikor üretir), Kan Pulcukları / Trombositler (yaralanmalarda pıhtılaşmayı sağlayarak kan kaybını önler).',
            'Kan ve Organ Bağışı: Türk Kızılayı ülkemizin kan ihtiyacını karşılar. 18-65 yaş arası, 50 kg üzeri sağlıklı bireyler kan bağışlayabilir. Organ bağışı ise tedavisi mümkün olmayan hastalara yeni bir hayat sunan en yüce toplumsal dayanışma örneğidir.'
          ],
          scientistBox: {
            name: 'İbnü’n Nefîs (1213-1288) & William Harvey (1578-1657)',
            role: 'Dolaşım Sisteminin Öncüleri',
            contribution: 'İbnü’n Nefîs, tıp tarihinde küçük kan dolaşımını ilk kez doğru şekilde keşfeden ve kalbin akciğerlerle bağlantısını çizen İslam âlimidir. William Harvey ise kanın kapalı bir devridaim sistemiyle tüm vücudu dolaştığını mekanik olarak açıklamıştır.'
          }
        }
      ],
      glossary: [
        { term: 'Kalp', definition: 'Dolaşım sisteminin merkezinde yer alan, kasılıp gevşeyerek kanı vücuda pompalayan hayati organ.' },
        { term: 'Atardamar', definition: 'Kanı kalpten alıp akciğerlere veya vücut organlarına taşıyan yüksek basınçlı damar.' },
        { term: 'Toplardamar', definition: 'Kanı vücuttan veya akciğerlerden toplayıp kalbe geri getiren damar.' },
        { term: 'Kılcal Damar', definition: 'Doku hücreleri ile kan arasında besin, oksijen ve atık madde alışverişini gerçekleştiren mikroskobik ince damar.' },
        { term: 'Alyuvar', definition: 'Kana kırmızı rengini veren, oksijen ve karbon dioksit gazlarını taşıyan çekirdeksiz kan hücresi.' },
        { term: 'Akyuvar', definition: 'Vücudu mikroplara ve enfeksiyonlara karşı koruyan, antikor üreten beyaz kan hücresi.' },
        { term: 'Kan Pulcukları', definition: 'Damar yaralanmalarında pıhtılaşma tıkacı oluşturarak kanamayı durduran kan parçacıkları.' },
        { term: 'Nabız', definition: 'Kalbin her kasılışında atardamarlara yaptığı basıncın bilek ve boyundan ritmik vuruşlar olarak hissedilmesi.' },
        { term: 'Küçük Dolaşım', definition: 'Kalp ile akciğerler arasında kanın temizlenmesi amacıyla gerçekleşen dolaşım döngüsü.' },
        { term: 'Büyük Dolaşım', definition: 'Kalp ile tüm vücut organları arasında besin ve oksijen iletimi amacıyla gerçekleşen ana dolaşım.' }
      ],
      trueFalseQuestions: [
        { id: 1, text: 'Kalbin sol tarafında daima oksijence zengin temiz kan, sağ tarafında ise kirli kan bulunur.', isCorrect: true, explanation: 'Doğrudur. Sol taraf temiz, sağ taraf kirli kan taşır.' },
        { id: 2, text: 'Akciğer atardamarı hariç tüm atardamarlar oksijence zengin temiz kan taşır.', isCorrect: true, explanation: 'Doğrudur. Akciğer atardamarı kalpten akciğere kirli kan götürür; diğer tüm atardamarlar temizdir.' },
        { id: 3, text: 'Madde ve gaz alışverişi yalnızca atardamarlarda gerçekleşir, kılcal damarlar madde geçirmez.', isCorrect: false, explanation: 'Yanlıştır. Madde ve gaz alışverişi YALNIZCA kılcal damarlarda gerçekleşir.' },
        { id: 4, text: 'Küçük kan dolaşımı kalbin sağ karıncığından başlar ve sol kulakçığında sona erer.', isCorrect: true, explanation: 'Doğrudur. Sağ karıncık ➔ Akciğerler ➔ Sol kulakçık küçük dolaşımın rotasıdır.' },
        { id: 5, text: 'Akyuvarlar kana kırmızı rengini verir ve oksijen taşır.', isCorrect: false, explanation: 'Yanlıştır. Oksijen taşıyan ve kırmızı renk veren alyuvarlardır; akyuvarlar mikroplara karşı savunma yapar.' },
        { id: 6, text: 'Küçük kan dolaşımını tıp tarihinde ilk kez doğru açıklayan ve çizen bilim insanı İbnü’n Nefîs’tir.', isCorrect: true, explanation: 'Doğrudur. Kitabın 106. sayfasında İbnü’n Nefîs’in bu tarihi keşfi anlatılmaktadır.' },
        { id: 7, text: 'Kan pulcukları (trombositler) yaralanma durumunda kanın pıhtılaşmasını sağlayarak aşırı kan kaybını önler.', isCorrect: true, explanation: 'Doğrudur. Pıhtılaşmayı sağlayarak damar deliğini kapatırlar.' },
        { id: 8, text: '18 yaşından küçük bireyler de Kızılay Kan Merkezlerine giderek düzenli kan bağışında bulunabilir.', isCorrect: false, explanation: 'Yanlıştır. Kan bağışı için yasal ve biyolojik yaş sınırı 18-65 yaş arasıdır (ve en az 50 kg).' },
        { id: 9, text: 'Organ bağışında öncelikle kan ve doku uyumu ile hastanın tıbbi aciliyet durumu dikkate alınır.', isCorrect: true, explanation: 'Doğrudur. Din, ırk, zenginlik ayrımı yapılmaz; doku uyumu ve aciliyet esastır.' },
        { id: 10, text: 'Büyük kan dolaşımının amacı akciğerlerdeki kanı temizlemektir.', isCorrect: false, explanation: 'Yanlıştır. Kanı akciğerde temizleyen KÜÇÜK dolaşımdır; büyük dolaşımın amacı tüm vücut dokularına besin ve O2 dağıtmaktır.' },
        {"id":11,"statement":"Kalpten vücut organlarına kan taşıyan damarlara atardamar denir.","isCorrect":true,"explanation":"Atardamarlar kanı kalpten uzaklaştırarak organlara ve dokulara iletir."},
        {"id":12,"statement":"Toplardamarlar, atardamar ile kılcal damarlar arasında yer alır.","isCorrect":false,"explanation":"Kan akış sırası atardamar ➔ kılcal damar ➔ toplardamar şeklindedir."},
        {"id":13,"statement":"Küçük kan dolaşımı kalbin sağ tarafındaki atardamar ile akciğerlere kan pompalanmasıyla başlar.","isCorrect":true,"explanation":"Kalbin sağ karıncığından çıkan akciğer atardamarı kirli kanı temizlenmek üzere akciğerlere taşır."},
        {"id":14,"statement":"Büyük kan dolaşımı sırasında kandaki oksijen oranı artarken karbondioksit oranı azalır.","isCorrect":false,"explanation":"Büyük kan dolaşımında dokulara oksijen verilip karbondioksit alındığı için kandaki oksijen azalır, karbondioksit artar."},
        {"id":15,"statement":"Kandaki alyuvarlar oksijen ve karbondioksit gazlarının taşınmasında görev yapar.","isCorrect":true,"explanation":"Alyuvarlar içerdikleri hemoglobin proteini sayesinde solunum gazlarını taşır ve kana kırmızı rengini verir."},
        {"id":16,"statement":"Akyuvarlar vücudu mikroplara karşı savunan ve hastalık durumunda sayısı artan kan hücreleridir.","isCorrect":true,"explanation":"Akyuvarlar bağışıklık sisteminin temel hücreleridir ve enfeksiyon anında sayıları hızla artar."},
        {"id":17,"statement":"Yaralanmalarda damar çeperinde pıhtılaşmayı sağlayarak kan kaybını önleyen hücreler kan pulcuklarıdır.","isCorrect":true,"explanation":"Kan pulcukları (trombositler) pıhtı tıkacı oluşturarak kanamanın durmasını sağlar."},
        {"id":18,"statement":"18-65 yaş aralığında ve 50 kg üzerindeki sağlıklı her birey kan bağışında bulunabilir.","isCorrect":true,"explanation":"Kızılay ve Dünya Sağlık Örgütü standartlarına göre 18-65 yaş arası sağlıklı bireyler kan bağışı yapabilir."},
        {"id":19,"statement":"Kan bağışı sonrasında vücuttaki kan miktarı her zaman eksik kalır ve kendini yenileyemez.","isCorrect":false,"explanation":"Vücut verilen kan hücrelerini ve plazmayı kısa süre içinde kemik iliği ve sıvılarla tamamen yeniler."},
        {"id":20,"statement":"Kalbin kasılıp gevşemesi sırasında atardamar duvarında hissedilen ritmik vuruşlara nabız denir.","isCorrect":true,"explanation":"Kalbin her atımında atardamarlarda oluşturduğu basınç dalgası nabız olarak hissedilir."}
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Küçük ve Büyük Dolaşım Şeması',
          cognitiveLevel: 'Süreç Takibi',
          scenario: 'Kitabın 146. sayfasındaki 5. soruda dolaşım sistemindeki damarlar numaralandırılmıştır:\n1: Akciğer atardamarı (Kalpten akciğere gider)\n4: Akciğer toplardamarı (Akciğerden kalbe gelir)\n2: Aort ana atardamarı (Kalpten vücuda gider)\n5: Alt ve üst ana toplardamarlar (Vücuttan kalbe döner)',
          questionPrompt: 'Bu damarlardaki kanın oksijen oranı ve dolaşım türü ile ilgili hangisi KESİNLİKLE DOĞRUDUR?',
          options: [
            { key: 'A', text: '1 numaralı damardaki kanın oksijen oranı, 4 numaralı damardaki kanın oksijen oranından daha düşüktür.' },
            { key: 'B', text: '4 numaralı damar kirli kan taşır.' },
            { key: 'C', text: '2 numaralı damar küçük dolaşımın başlangıcıdır.' },
            { key: 'D', text: '5 numaralı damar temiz kan taşır.' }
          ],
          correctAnswer: 'A',
          explanation: '1 numaralı akciğer atardamarı kirli kan (oksijeni düşük), 4 numaralı akciğer toplardamarı ise akciğerde temizlenmiş bol oksijenli temiz kan taşır.'
        },
        {
          id: 2,
          theme: 'İbnü’n Nefîs’in Tarihî Keşfi',
          cognitiveLevel: 'Bilim Tarihi ve Muhakeme',
          scenario: '13. yüzyılda yaşayan İbnü’n Nefîs, Galen’in "kan kalp karıncıkları arasındaki görünmez deliklerden sızarak geçer" iddiasını reddetmiş; sağ karıncıktaki kanın akciğer atardamarıyla akciğere gidip orada havayla temas ederek temizlendiğini ve sol kulakçığa döndüğünü ispatlamıştır.',
          questionPrompt: 'İbnü’n Nefîs’in keşfettiği bu dolaşım mekanizması günümüzde ne olarak adlandırılır?',
          options: [
            { key: 'A', text: 'Küçük kan dolaşımı' },
            { key: 'B', text: 'Büyük kan dolaşımı' },
            { key: 'C', text: 'Lenf dolaşımı' },
            { key: 'D', text: 'Hücre solunumu' }
          ],
          correctAnswer: 'A',
          explanation: 'Kalp ile akciğer arasındaki temizleme döngüsü İbnü’n Nefîs tarafından keşfedilen küçük kan dolaşımıdır.'
        },
        {
          id: 3,
          theme: 'Kan Hücreleri ve Enfeksiyon',
          cognitiveLevel: 'Grafik ve Tablo Çıkarımı',
          scenario: 'Boğaz enfeksiyonu geçiren ve yüksek ateşi olan bir hastanın kan tahlili yapılmış; kanda bulunan bir hücre tipinin normal değerin 3 katına çıktığı görülmüştür.',
          questionPrompt: 'Sayısı artan bu kan hücresi ve görevi aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Akyuvar; vücuda giren mikropları yutarak ve antikor üreterek hastalıkla savaşır.' },
            { key: 'B', text: 'Alyuvar; kanın pıhtılaşmasını durdurur.' },
            { key: 'C', text: 'Kan pulcuğu; vücut sıcaklığını sıfırlar.' },
            { key: 'D', text: 'Plazma; kandaki suyu tamamen yok eder.' }
          ],
          correctAnswer: 'A',
          explanation: 'Enfeksiyon anında vücudun bağışıklık askeri olan akyuvarların sayısı hızla artar.'
        },
        {
          id: 4,
          theme: 'Toplardamarlardaki Kapakçıklar',
          cognitiveLevel: 'Anatomik Mantık',
          scenario: 'Bacaklarımızdaki toplardamarların içinde yer çekiminin aksine kalbe doğru yukarı çıkan kanın aşağı geri akmasını engelleyen kapakçıklar bulunur.',
          questionPrompt: 'Bu kapakçıkların bozulması durumunda ortaya çıkan damar hastalığı hangisidir?',
          options: [
            { key: 'A', text: 'Varis (bacak damarlarında kan göllenmesi ve şişlik)' },
            { key: 'B', text: 'Zatürre' },
            { key: 'C', text: 'Reflü' },
            { key: 'D', text: 'Böbrek taşı' }
          ],
          correctAnswer: 'A',
          explanation: 'Toplardamar kapakçıkları yetersiz kalınca kan bacaklarda birikir ve varis rahatsızlığı oluşur.'
        },
        {
          id: 5,
          theme: 'Kılcal Damarlarda Akış Hızı',
          cognitiveLevel: 'Fiziksel Biyoloji',
          scenario: 'Kanın akış hızı atardamarlarda saniyede 30-40 cm iken, kılcal damarlarda saniyede 0.5 milimetreye kadar düşmektedir.',
          questionPrompt: 'Kılcal damarlarda kanın bu kadar yavaş akmasının yaşamsal gerekliliği nedir?',
          options: [
            { key: 'A', text: 'Hücreler ile kan arasında besin, oksijen ve atık maddelerin difüzyonla rahatça alışveriş yapabilmesi için yeterli zamanı sağlamak' },
            { key: 'B', text: 'Kalbin yorulmasını engellemek' },
            { key: 'C', text: 'Damarların donmasını sağlamak' },
            { key: 'D', text: 'Kan rengini değiştirmek' }
          ],
          correctAnswer: 'A',
          explanation: 'Kılcal damarlarda yavaş akış, doku hücreleriyle gaz ve besin alışverişinin eksiksiz tamamlanmasını sağlar.'
        },
        {
          id: 6,
          theme: 'Kızılay ve Kan Bağışı',
          cognitiveLevel: 'Sosyal Bilinç ve Fen',
          scenario: 'Kitabın 116. sayfasındaki B etkinliğinde Özgür, televizyonda Kızılay’ın kan stoklarının azaldığını öğrenince annesi gidip kan bağışında bulunmuştur.',
          questionPrompt: 'Kan bağışının sağlık ve toplum açısından en önemli yararı hangisidir?',
          options: [
            { key: 'A', text: 'Kaza, ameliyat ve lösemi hastalarının hayatını kurtarırken, bağışçının da yeni kan hücreleri üreterek yenilenmesini sağlaması' },
            { key: 'B', text: 'Bağış yapanın bir daha hiç hastalanmaması' },
            { key: 'C', text: 'Kızılay’ın kanı yurt dışına satması' },
            { key: 'D', text: 'Hastanelerin kapatılmasını sağlaması' }
          ],
          correctAnswer: 'A',
          explanation: 'Kan bağışı acil hastaların hayatını kurtarır ve kemik iliğini uyararak bağışçının kan hücrelerini tazeler.'
        },
        {
          id: 7,
          theme: 'Spor Yaparken Kalp Ritmi',
          cognitiveLevel: 'Uygulama',
          scenario: 'Futbol maçında koşan bir öğrencinin nabzı 75’ten 140 atım/dakikaya fırlamıştır.',
          questionPrompt: 'Koşma esnasında kalbin hızlanmasının temel fizyolojik nedeni nedir?',
          options: [
            { key: 'A', text: 'Çalışan bacak kaslarının çok daha fazla oksijen ve glikoza ihtiyaç duyması, biriken CO2 ve laktik asidin hızla uzaklaştırılması zorunluluğu' },
            { key: 'B', text: 'Kalbin hava ile dolması' },
            { key: 'C', text: 'Vücuttaki kan miktarının 2 katına çıkması' },
            { key: 'D', text: 'Kemiklerin erimesini önlemek' }
          ],
          correctAnswer: 'A',
          explanation: 'Kaslar enerji üretirken daha çok oksijen ve besin tüketir; kalp bu ihtiyacı karşılamak için daha hızlı kan pompalar.'
        },
        {
          id: 8,
          theme: 'Dolaşım Sistemi Sağlığı Tablosu',
          cognitiveLevel: 'Tablo Analizi',
          scenario: 'Kitabın 147. sayfasındaki 7. soruda: Stres, aşırı tuzlu/yağlı beslenme, uykusuzluk ve hareketsizlik kalp-damar hastalıkları riskini artırır.',
          questionPrompt: 'Damar tıkanıklığını (ateroskleroz) önlemek isteyen bir kişinin beslenmesinde hangisine öncelik vermesi gerekir?',
          options: [
            { key: 'A', text: 'Zeytinyağı, ceviz, balık (omega-3), taze sebze ve günde en az 2 litre su' },
            { key: 'B', text: 'Kızartılmış margarinli hamur işleri' },
            { key: 'C', text: 'Tuzlanmış salam ve sosisler' },
            { key: 'D', text: 'Aşırı şekerli enerji içecekleri' }
          ],
          correctAnswer: 'A',
          explanation: 'Sağlıklı yağlar, sebzeler ve su damar elastikiyetini korur ve plak oluşumunu önler.'
        },
        {
          id: 9,
          theme: 'Alyuvarların Yapısal Özelliği',
          cognitiveLevel: 'Kavramsal Derinlik',
          scenario: 'İnsan alyuvarları olgunlaştıklarında çekirdeklerini ve organellerini kaybederler.',
          questionPrompt: 'Alyuvarların çekirdeksiz olmasının sağladığı biyolojik avantaj nedir?',
          options: [
            { key: 'A', text: 'Hücre içinde daha fazla hemoglobin ve oksijen gazı taşıyabilecek hacim yaratmak' },
            { key: 'B', text: 'Hemen ölmelerini sağlamak' },
            { key: 'C', text: 'Damarlardan dışarı kaçmak' },
            { key: 'D', text: 'Mikropları içine çekmek' }
          ],
          correctAnswer: 'A',
          explanation: 'Çekirdeğin olmaması alyuvara bikonkav (iki yanı basık) disk şekli verir ve maksimum oksijen bağlama kapasitesi sağlar.'
        },
        {
          id: 10,
          theme: 'Organ Bağışı İlkeleri',
          cognitiveLevel: 'Etik ve Hukuki Fen Bilinci',
          scenario: 'Kitabın 112-113. sayfalarında organ bağışı koşulları ve ilkeleri anlatılmıştır.',
          questionPrompt: 'Aşağıdakilerden hangisi organ bağışı hakkında DOĞRU bir bilgidir?',
          options: [
            { key: 'A', text: 'Bağışlanan organlar maddi durumu iyi olan kişilere öncelikle satılır.' },
            { key: 'B', text: '18 yaşını doldurmuş, akli dengesi yerinde her birey kendi hür iradesiyle organlarını bağışlayabilir.' },
            { key: 'C', text: 'Sadece kalbi duran herkesin organı hemen alınır.' },
            { key: 'D', text: 'Organ bağışı için doku uyumuna bakılmasına gerek yoktur.' }
          ],
          correctAnswer: 'B',
          explanation: '18 yaşını dolduran her sağlıklı birey organ bağışında bulunabilir; nakillerde doku uyumu ve aciliyet esastır.'
        },
        {
          id: 11,
          theme: 'Kanın Pıhtılaşması',
          cognitiveLevel: 'Hücresel Görev',
          scenario: 'Parmağı iğneyle delinen bir kişinin parmağından bir damla kan akmış, birkaç dakika sonra kanama durmuş ve kabuk bağlamıştır.',
          questionPrompt: 'Bu pıhtılaşmayı sağlayan kan bileşeni hangisidir?',
          options: [
            { key: 'A', text: 'Kan pulcukları (Trombositler)' },
            { key: 'B', text: 'Alyuvarlar' },
            { key: 'C', text: 'Akyuvarlar' },
            { key: 'D', text: 'Kan serumu' }
          ],
          correctAnswer: 'A',
          explanation: 'Trombositler fibrin lifleriyle pıhtı tıkacı oluşturarak kan kaybını durdurur.'
        },
        {
          id: 12,
          theme: 'Kalbin Odacıkları Arasındaki Kapakçıklar',
          cognitiveLevel: 'Mekanik Analiz',
          scenario: 'Kalbin sol kulakçığı ile sol karıncığı arasında ikili (biküspit/mitral), sağ tarafında ise üçlü (triküspit) kapakçıklar bulunur.',
          questionPrompt: 'Karıncıklar kasıldığında bu kapakçıkların kapanmasının amacı nedir?',
          options: [
            { key: 'A', text: 'Kanın kulakçıklara geri fışkırmasını engelleyip doğrudan atardamarlara yönlendirmek' },
            { key: 'B', text: 'Kanın kalpten çıkışını durdurmak' },
            { key: 'C', text: 'Kanı soğutmak' },
            { key: 'D', text: 'Oksijen üretmek' }
          ],
          correctAnswer: 'A',
          explanation: 'Kapakçıklar tek yönlüdür; kasılma anında kapanarak kanın geriye kaçmasını önler.'
        },
        {
          id: 13,
          theme: 'Tansiyon Kavramı',
          cognitiveLevel: 'Kavrama',
          scenario: 'Doktor tansiyon ölçtüğünde "büyük tansiyon 120, küçük tansiyon 80" değerlerini belirtmiştir.',
          questionPrompt: 'Büyük tansiyon kalbin hangi hareketini ifade eder?',
          options: [
            { key: 'A', text: 'Karıncıkların kasılarak kanı atardamarlara pompaladığı andaki en yüksek damar içi basınç' },
            { key: 'B', text: 'Kalbin tamamen durduğu an' },
            { key: 'C', text: 'Akciğerlerin nefes verme anı' },
            { key: 'D', text: 'Midenin kasılma basıncı' }
          ],
          correctAnswer: 'A',
          explanation: 'Büyük tansiyon karıncıkların kasılma (sistol) anındaki kan basıncıdır.'
        },
        {
          id: 14,
          theme: 'Aort Atardamarının Önemi',
          cognitiveLevel: 'Sistemik Çıkarım',
          scenario: 'Kalbin sol karıncığından çıkan en kalın ana atardamar Aort damarıdır.',
          questionPrompt: 'Aort damarındaki kanın özelliği ve gideceği yer hangisidir?',
          options: [
            { key: 'A', text: 'Oksijence zengin temiz kandır ve tüm vücut organlarına dallanarak dağılır.' },
            { key: 'B', text: 'Oksijence fakir kirli kandır ve akciğere gider.' },
            { key: 'C', text: 'Yalnızca karaciğere gider.' },
            { key: 'D', text: 'İdrar taşır.' }
          ],
          correctAnswer: 'A',
          explanation: 'Aort temiz kanı sol karıncıktan alıp tüm vücuda dağıtan ana atardamardır.'
        },
        {
          id: 15,
          theme: 'Damarlarda Kan Basıncı Grafiği',
          cognitiveLevel: 'Grafik Yorumlama',
          scenario: 'Kan basıncının damar çeşitlerine göre değişimi incelendiğinde:',
          questionPrompt: 'Kan basıncının en yüksekten en düşüğe doğru sıralanışı hangisidir?',
          options: [
            { key: 'A', text: 'Atardamar > Kılcal damar > Toplardamar' },
            { key: 'B', text: 'Toplardamar > Kılcal damar > Atardamar' },
            { key: 'C', text: 'Kılcal damar > Atardamar > Toplardamar' },
            { key: 'D', text: 'Hepsi eşittir.' }
          ],
          correctAnswer: 'A',
          explanation: 'Kalpten uzaklaştıkça sürtünme nedeniyle basınç düşer: Atardamar > Kılcal damar > Toplardamar.'
        },
        {
          id: 16,
          theme: 'Dolaşım ve Solunum Entegrasyonu',
          cognitiveLevel: 'Sistemler Arası Bağ',
          scenario: 'Küçük kan dolaşımında kalpten çıkan kirli kan akciğer alveollerine ulaşır.',
          questionPrompt: 'Alveol kılcallarından geçerken kanda hangi gazın oranı artar, hangisi azalır?',
          options: [
            { key: 'A', text: 'Oksijen oranı artar, Karbon dioksit oranı azalır.' },
            { key: 'B', text: 'Karbon dioksit artar, Oksijen azalır.' },
            { key: 'C', text: 'Azot gazı artar.' },
            { key: 'D', text: 'Gaz değişimi olmaz.' }
          ],
          correctAnswer: 'A',
          explanation: 'Alveollerde difüzyonla oksijen kana geçer, kandaki karbondioksit havaya verilir; kan temizlenir.'
        },
        {
          id: 17,
          theme: 'Sigara ve Damar Sağlığı',
          cognitiveLevel: 'Sağlık Bilinci',
          scenario: 'Sigara dumanındaki nikotin ve karbonmonoksit damar iç yüzeyindeki endotel tabakasına zarar verir ve damarları daraltır.',
          questionPrompt: 'Bu durum dolaşım sisteminde doğrudan hangi soruna yol açar?',
          options: [
            { key: 'A', text: 'Tansiyonun yükselmesine, damar sertliğine ve kalp krizi riskinin katlanmasına' },
            { key: 'B', text: 'Kan hücrelerinin çoğalmasına' },
            { key: 'C', text: 'Kemiklerin sertleşmesine' },
            { key: 'D', text: 'Kalbin dinlenmesine' }
          ],
          correctAnswer: 'A',
          explanation: 'Damar daralması ve sertleşmesi kalp krizinin (enfarktüs) bir numaralı sebebidir.'
        },
        {
          id: 18,
          theme: 'Dolaşım Sistemi Rol Oynama Oyunu',
          cognitiveLevel: 'Uygulama',
          scenario: 'Kitabın 108. sayfasında okul bahçesine çizilen dolaşım şemasında öğrenciler ellerinde mavi ve kırmızı kartlarla dolaşmaktadır.',
          questionPrompt: 'Öğrencinin elindeki mavi kartı kırmızı kartla değiştirdiği organ hangisidir?',
          options: [
            { key: 'A', text: 'Akciğerler (Kirli kan temizlendiği için)' },
            { key: 'B', text: 'Böbrekler' },
            { key: 'C', text: 'Mide' },
            { key: 'D', text: 'Beyin' }
          ],
          correctAnswer: 'A',
          explanation: 'Akciğere mavi (kirli) giden kan, oksijen alarak kırmızıya (temiz) döner.'
        },
        {
          id: 19,
          theme: 'Kan Plazmasının İçeriği',
          cognitiveLevel: 'Bileşen Analizi',
          scenario: 'Tüpe alınan kan santrifüj edildiğinde üstte sarı renkli sıvı plazma ayrışır.',
          questionPrompt: 'Kan plazmasının yaklaşık %90’ını oluşturan temel madde hangisidir?',
          options: [
            { key: 'A', text: 'Su' },
            { key: 'B', text: 'Yağ' },
            { key: 'C', text: 'Demir' },
            { key: 'D', text: 'Oksijen gazı' }
          ],
          correctAnswer: 'A',
          explanation: 'Kan plazmasının %90-92’si sudur; içinde çözünmüş besin, hormon, antikor ve atıklar taşınır.'
        },
        {
          id: 20,
          theme: 'Dolaşım Sistemi ve Bağışıklık',
          cognitiveLevel: 'Sentez',
          scenario: 'Aşı olduğumuzda dolaşım sistemimizdeki akyuvarlar zayıflatılmış mikrobu tanır ve hafıza hücreleri oluşturur.',
          questionPrompt: 'Bu durum dolaşım sisteminin hangi hayati görevini kanıtlar?',
          options: [
            { key: 'A', text: 'Vücudu hastalıklara karşı koruma ve savunma görevi' },
            { key: 'B', text: 'Yalnızca ısı dağıtma görevi' },
            { key: 'C', text: 'Besinleri öğütme görevi' },
            { key: 'D', text: 'Kemikleri bağlama görevi' }
          ],
          correctAnswer: 'A',
          explanation: 'Akyuvarlar ve antikorlar dolaşım yoluyla tüm vücutta savunma ve bağışıklık sağlar.'
        }
      ]
    },
    {
      id: 'g7-u3-sub3',
      title: '3. Solunum Sistemi',
      shortTitle: 'Solunum Sistemi',
      badge: '3. Bölüm',
      pageRange: '117-128',
      concepts: ['Burun', 'Soluk Borusu', 'Akciğerler', 'Alveol', 'Diyafram', 'Soluk Alma / Verme', 'Yeşilay'],
      simulationId: 'skeleton',
      summarySections: [
        {
          heading: 'Solunum Sisteminin Görevi ve Organları',
          paragraphs: [
            'Hücrelerimizin besinleri parçalayarak yaşamsal enerji (ATP) üretebilmesi için oksijene ihtiyacı vardır. Solunum sistemi; havadaki oksijeni alıp kana geçiren, kandaki zararlı karbon dioksiti ise vücuttan uzaklaştıran harika bir gaz değişim sistemidir.',
            'Solunum organları sırasıyla: Burun ➔ Yutak ➔ Gırtlak ➔ Soluk Borusu ➔ Akciğerler (Bronşlar, Bronşçuklar, Alveoller).'
          ],
          keyPoints: [
            'Burun: Havanın girdiği ilk kapıdır. Mukus sıvısı havayı nemlendirir, kılcal damarlar havayı ısıtır, burun kılları ise toz ve mikropları tutarak süzer. Ağızdan değil daima burundan nefes alınmalıdır!',
            'Gırtlak: Yutak ile soluk borusu arasındadır. Kıkırdak yapıdadır ve içinde ses telleri bulunur. Yutkunurken küçük dil soluk borusunu kapatarak lokmaların nefes borusuna kaçmasını önler.',
            'Soluk Borusu: Üst üste dizilmiş "C" biçimli kıkırdak halkalardan yapılmıştır; bu sayede boru asla birbirine yapışmaz ve hava yolu daima açık kalır.',
            'Akciğerler: Göğüs kafesi içinde yer alır. Sağ akciğer 3 loplu (daha büyük), sol akciğer ise kalbe yer açmak için 2 lopludur.',
            'Alveoller (Hava Keseleri): Bronşçukların ucunda bulunan, etrafı yoğun kılcal damarlarla sarılı mikroskobik hava kesecikleridir. Oksijen ile karbondioksitin gaz değişimi BURADA gerçekleşir.'
          ]
        },
        {
          heading: 'Soluk Alma ve Verme Mekanizması: Diyafram Kası',
          paragraphs: [
            'Soluk alıp vermede göğüs kafesi kasları ile göğüs boşluğunu karın boşluğundan ayıran kubbe şeklindeki diyafram kası birlikte çalışır.'
          ],
          table: {
            headers: ['Olay / Parametre', 'Soluk Alma Sırasında', 'Soluk Verme Sırasında'],
            rows: [
              ['Diyafram Kası', 'Kasılır ve DÜZLEŞİR (Aşağı iner)', 'Gevşer ve KUBBELEŞİR (Yukarı çıkar)'],
              ['Kaburga Kasları', 'Kasılır (Yukarı-dışa kalkar)', 'Gevşer (Aşağı-içe iner)'],
              ['Göğüs Boşluğu Hacmi', 'GENİŞLER (Artar)', 'DARALIR (Azalır)'],
              ['Akciğerlerin Durumu', 'Hava dolar, hacmi artar', 'Hava dışarı atılır, hacmi küçülür'],
              ['Karın Boşluğu Hacmi', 'Daralır', 'Genişler']
            ]
          }
        },
        {
          heading: 'Solunum Sistemi Sağlığı ve Yeşilay (Hilâl-i Ahdar)',
          paragraphs: [
            'Temiz hava, düzenli spor ve tütün ürünlerinden (sigara, nargile, elektronik sigara) uzak durmak akciğerlerimizin ömrünü uzatır.',
            'Sigara dumanında bulunan katran akciğer alveollerini tıkar, elastikiyetini yok eder (KOAH) ve akciğer kanserine yol açar.'
          ],
          keyPoints: [
            'Yeşilay (Hilâl-i Ahdar): 5 Mart 1920’de Dr. Mazhar Osman Uzman ve arkadaşları tarafından kurulmuştur. Tütün, alkol, madde ve teknoloji bağımlılıklarıyla mücadele eden en köklü sivil toplum kuruluşumuzdur.',
            'Yeşil Dedektör: Kamuya açık kapalı alanlarda sigara yasağını ihlal edenleri tespit ve ihbar eden Sağlık Bakanlığı uygulamasıdır.',
            'ALO 171: Sigara bırakma danışma hattıdır.'
          ]
        }
      ],
      glossary: [
        { term: 'Solunum Sistemi', definition: 'Oksijenin vücuda alınıp kana verilmesini, karbon dioksidin ise kandan alınıp dışarı atılmasını sağlayan sistem.' },
        { term: 'Diyafram', definition: 'Göğüs boşluğu ile karın boşluğunu ayıran, soluk alıp vermede kasılıp düzleşen çizgili kas tabakası.' },
        { term: 'Soluk Borusu', definition: 'Kıkırdak halkalardan oluşan, havanın akciğerlere güvenle ulaşmasını sağlayan hava kanalı.' },
        { term: 'Bronş ve Bronşçuk', definition: 'Soluk borusunun iki akciğere ayrılan kolları (bronş) ve akciğer içinde dallanan ince kanalcıkları (bronşçuk).' },
        { term: 'Alveol', definition: 'Akciğerlerde etrafı kılcal damarlarla sarılı, gaz değişiminin yapıldığı tek katlı epitelden oluşan hava kesesi.' },
        { term: 'Yeşilay', definition: 'Tütün, alkol ve bağımlılık yapıcı zararlı maddelerle mücadele eden millî vakıf (Hilâl-i Ahdar).' }
      ],
      trueFalseQuestions: [
        { id: 1, text: 'Soluk alma sırasında diyafram kası kasılarak düzleşir ve göğüs boşluğu genişler.', isCorrect: true, explanation: 'Doğrudur. Diyafram düzleşir, akciğerlere hava dolar.' },
        { id: 2, text: 'Gaz değişimi soluk borusunda gerçekleşir.', isCorrect: false, explanation: 'Yanlıştır. Gaz değişimi sadece akciğerlerdeki mikroskobik alveollerde gerçekleşir.' },
        { id: 3, text: 'Sol akciğer kalbe yer açmak için sağ akciğere göre biraz daha küçüktür (2 lopludur).', isCorrect: true, explanation: 'Doğrudur. Sağ akciğer 3 loplu, sol akciğer 2 lopludur.' },
        { id: 4, text: 'Soluk verme sırasında diyafram kası gevşeyerek kubbeleşir.', isCorrect: true, explanation: 'Doğrudur. Kubbeleşerek göğüs boşluğunu daraltır ve havayı dışarı iter.' },
        { id: 5, text: 'Burundaki mukus sıvısı ve kıllar havayı ısıtma, nemlendirme ve mikropları tutma görevi yapar.', isCorrect: true, explanation: 'Doğrudur. Bu yüzden burundan nefes almak sağlıklıdır.' },
        { id: 6, text: 'Yeşilay, 1920 yılında Dr. Mazhar Osman tarafından bağımlılıkla mücadele amacıyla kurulmuştur.', isCorrect: true, explanation: 'Doğrudur. Hilâl-i Ahdar adıyla kurulmuştur.' },
        { id: 7, text: 'Sigara ve tütün kullanımı yalnızca akciğerlere zarar verir, dolaşım sistemine hiçbir zararı yoktur.', isCorrect: false, explanation: 'Yanlıştır. Sigara damarları tıkayarak kalp krizi ve tansiyon gibi ölümcül dolaşım sorunlarına da yol açar.' },
        { id: 8, text: 'Soluk borusunun kıkırdak halkaları borunun içe çöküp kapanmasını engeller.', isCorrect: true, explanation: 'Doğrudur. C şeklindeki kıkırdak halkalar hava yolunun daima açık kalmasını sağlar.' },
        { id: 9, text: 'Soluk alma anında karın boşluğunun hacmi genişler.', isCorrect: false, explanation: 'Yanlıştır. Diyafram aşağı inip düzleştiği için karın boşluğu sıkışır ve daralır.' },
        { id: 10, text: 'Temiz havada yürüyüş yapmak ve düzenli spor yapmak akciğer kapasitesini artırır.', isCorrect: true, explanation: 'Doğrudur. Solunum kaslarını güçlendirir.' },
        {"id":11,"statement":"Solunan hava burundan geçerken burundaki kıllar, mukus ve kılcal damarlar sayesinde temizlenir, nemlendirilir ve ısıtılır.","isCorrect":true,"explanation":"Burun boşluğundaki mukus ve kıllar partikülleri tutar, kılcal damarlar ise havayı vücut sıcaklığına getirir."},
        {"id":12,"statement":"Soluk alma sırasında diyafram kası gevşeyerek kubbeleşir.","isCorrect":false,"explanation":"Soluk alma sırasında diyafram kası kasılarak düzleşir, soluk verirken gevşeyerek kubbeleşir."},
        {"id":13,"statement":"Soluk verme sırasında kaburgalar arası kaslar gevşer ve göğüs boşluğu daralır.","isCorrect":true,"explanation":"Kaslar gevşediğinde göğüs kafesi daralır, iç basınç artar ve hava dışarı atılır."},
        {"id":14,"statement":"Akciğerlerdeki hava kesecikleri olan alveoller hava ile kan arasında gaz değişimini sağlar.","isCorrect":true,"explanation":"Alveollerin etrafındaki kılcal damarlarla hava arasında difüzyonla oksijen ve karbondioksit değişimi gerçekleşir."},
        {"id":15,"statement":"Soluk borusunun yapısında bulunan kıkırdak halkalar borunun sürekli açık kalmasını destekler.","isCorrect":true,"explanation":"Kıkırdak halkalar soluk borusunun birbirine yapışmasını önleyerek kesintisiz hava geçişini sağlar."},
        {"id":16,"statement":"Vücuttan dışarı verilen havadaki karbondioksit oranı, solunan havadakine göre daha yüksektir.","isCorrect":true,"explanation":"Solunan havada %0,04 karbondioksit varken verilen solukta bu oran yaklaşık %4,4 düzeyine çıkar."},
        {"id":17,"statement":"Soluk borusu akciğerlere girerken iki ana kola ayrılır, bu kollara bronş adı verilir.","isCorrect":true,"explanation":"Soluk borusu sağ ve sol bronşlara ayrılır, bronşlar da bronşçuklara dallanır."},
        {"id":18,"statement":"Tütün ürünlerinin kullanımı en çok sindirim sistemine zarar verir, solunum sistemini etkilemez.","isCorrect":false,"explanation":"Tütün dumanı en büyük zararı solunum sistemine (akciğer alveollerine ve bronşlara) verir."},
        {"id":19,"statement":"Düzenli egzersiz yapmak solunum kaslarını güçlendirerek akciğer kapasitesini artırır.","isCorrect":true,"explanation":"Spor ve fiziksel aktivite diyafram ve kaburga kaslarını güçlendirerek solunum verimini yükseltir."},
        {"id":20,"statement":"1-7 Mart haftası Yeşilay Haftası olarak kutlanır ve bağımlılıkla mücadelede toplumsal bilinç oluşturulur.","isCorrect":true,"explanation":"Yeşilay (Hilâl-i Ahdar) tütün, alkol ve madde bağımlılığına karşı toplumu bilinçlendiren kuruluştur."}
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Diyafram ve Soluk Alma Modeli',
          cognitiveLevel: 'Model Tasarımı ve Yorumlama',
          scenario: 'Fen dersinde bir cam kavanoz, "Y" şeklinde plastik boru, 2 küçük balon ve kavanozun tabanına gerilmiş elastik balon zarı (diyafram) kullanılarak solunum modeli yapılmıştır.',
          questionPrompt: 'Tabandaki elastik balon zarı aşağı doğru çekildiğinde kavanoz içindeki küçük balonların şişmesi hangi olayı modeller?',
          options: [
            { key: 'A', text: 'Diyafram kasının kasılıp düzleşerek göğüs hacmini artırması ve dış basınç farkıyla akciğerlere hava dolmasını (Soluk alma)' },
            { key: 'B', text: 'Soluk verme olayını' },
            { key: 'C', text: 'Alveollerin yırtılmasını' },
            { key: 'D', text: 'Besinlerin mideye inmesini' }
          ],
          correctAnswer: 'A',
          explanation: 'Zar aşağı çekildiğinde kavanoz içi hacim artar, basınç düşer ve balonlara hava dolar; bu soluk alma mekanizmasıdır.'
        },
        {
          id: 2,
          theme: 'Alveol ve Kılcal Damar Gaz Değişimi',
          cognitiveLevel: 'Hücresel Difüzyon Analizi',
          scenario: 'Akciğer alveolündeki oksijen gazı konsantrasyonu, kılcal damardaki oksijenden yüksektir; kandaki karbon dioksit konsantrasyonu ise alveolden yüksektir.',
          questionPrompt: 'Bu konsantrasyon farkı sayesinde gerçekleşen gaz geçişi hangi seçenekte DOĞRU ifade edilmiştir?',
          options: [
            { key: 'A', text: 'Oksijen alveolden kılcal damara, Karbon dioksit kılcal damardan alveole geçer.' },
            { key: 'B', text: 'Karbon dioksit alveolden kana geçer.' },
            { key: 'C', text: 'Her iki gaz da alveolde hapsolur.' },
            { key: 'D', text: 'Yalnızca su buharı yer değiştirir.' }
          ],
          correctAnswer: 'A',
          explanation: 'Çok yoğun ortamdan az yoğuna: O2 kanda az olduğu için kana geçer, CO2 kanda çok olduğu için alveole verilir.'
        },
        {
          id: 3,
          theme: 'Ağızdan vs Burundan Nefes Alma',
          cognitiveLevel: 'Sağlık Karşılaştırması',
          scenario: 'Kış aylarında dışarıda koşan iki öğrenciden biri sadece ağzından, diğeri ise sadece burnundan nefes almaktadır.',
          questionPrompt: 'Ağzından nefes alan öğrencinin daha çabuk boğaz enfeksiyonu geçirmesinin bilimsel sebebi nedir?',
          options: [
            { key: 'A', text: 'Ağızda havayı ısıtan kılcallar, nemlendiren mukus ve tozu tutan kıllar bulunmadığı için kuru, soğuk ve tozlu havanın doğrudan boğaza çarpması' },
            { key: 'B', text: 'Ağızdan nefes alırken oksijenin yok olması' },
            { key: 'C', text: 'Dişlerin solunumu engellemesi' },
            { key: 'D', text: 'Tükürüğün akciğerleri tıkaması' }
          ],
          correctAnswer: 'A',
          explanation: 'Burun havayı filtreler, ısıtır ve nemlendirir; ağızdan alınan hava boğazı tahriş eder.'
        },
        {
          id: 4,
          theme: 'Soluk Verme Aşamaları',
          cognitiveLevel: 'Sıralama ve Mantık',
          scenario: 'Soluk verme sürecinde gerçekleşen olaylar şunlardır:\n1. Diyafram kası gevşeyerek kubbeleşir.\n2. Kaburgalar arası kaslar gevşer.\n3. Göğüs kafesi daralır.\n4. Akciğer içi basınç artar ve hava dışarı atılır.',
          questionPrompt: 'Bu olaylar esnasında akciğerdeki havanın dışarı çıkmasını sağlayan temel fiziksel itici güç nedir?',
          options: [
            { key: 'A', text: 'Göğüs kafesinin daralmasıyla akciğer iç basıncının açık hava basıncından daha yüksek hale gelmesi' },
            { key: 'B', text: 'Mide kaslarının akciğeri patlatması' },
            { key: 'C', text: 'Dış havanın akciğerleri emmesi' },
            { key: 'D', text: 'Kandaki alyuvarların havayı dışarı üflemesi' }
          ],
          correctAnswer: 'A',
          explanation: 'Hacim küçülünce iç basınç artar ve yüksek basınçtan düşük basınca doğru hava dışarı akar.'
        },
        {
          id: 5,
          theme: 'Yeşilay ve Bağımlılıkla Mücadele',
          cognitiveLevel: 'Sosyal Sorumluluk',
          scenario: 'Yeşilay Vakfı (Hilâl-i Ahdar), tütün, alkol, uyuşturucu ve ekran bağımlılığına karşı okullarda farkındalık seminerleri düzenlemektedir.',
          questionPrompt: 'Aşağıdakilerden hangisi Yeşilay’ın temel hedeflerinden biridir?',
          options: [
            { key: 'A', text: 'Gençleri zararlı alışkanlıklardan koruyarak bedenen ve ruhen sağlıklı nesiller yetişmesini sağlamak' },
            { key: 'B', text: 'Tütün fabrikaları kurmak' },
            { key: 'C', text: 'Hastanelerde ameliyat ücreti toplamak' },
            { key: 'D', text: 'Yalnızca meteoroloji raporları yayınlamak' }
          ],
          correctAnswer: 'A',
          explanation: 'Yeşilay’ın kuruluş misyonu toplumu ve gençleri her türlü bağımlılıktan korumaktır.'
        },
        {
          id: 6,
          theme: 'KOAH ve Alveol Harabiyeti',
          cognitiveLevel: 'Hastalık Analizi',
          scenario: 'Yıllarca sigara içen bireylerde alveol duvarları yırtılarak hava kesecikleri birleşir ve yüzey alanı çok büyük oranda küçülür (Amfizem/KOAH).',
          questionPrompt: 'Bu hastaların merdiven çıkarken bile nefes nefese kalmasının sebebi nedir?',
          options: [
            { key: 'A', text: 'Alveol yüzey alanı küçüldüğü için kana geçen oksijen miktarının dokulara yetersiz gelmesi' },
            { key: 'B', text: 'Kalplerinin durması' },
            { key: 'C', text: 'Kanda su kalmaması' },
            { key: 'D', text: 'Diyaframın tamamen erimesi' }
          ],
          correctAnswer: 'A',
          explanation: 'Yüzey alanı azaldığında gaz difüzyonu düşer, dokulara oksijen gitmez ve nefes darlığı yaşanır.'
        },
        {
          id: 7,
          theme: 'Soluk Borusu Kıkırdak Yapısı',
          cognitiveLevel: 'Anatomi Uyum',
          scenario: 'Soluk borusu kıkırdak halkalardan oluşurken arkasında yer alan yemek borusu tamamen kaslı ve esnek yapıdadır.',
          questionPrompt: 'Soluk borusunun kıkırdak halkalı olmasının sağladığı hayati fayda nedir?',
          options: [
            { key: 'A', text: 'Nefes alıp verirken oluşan negatif basınçta borunun kapanmasını engelleyerek kesintisiz hava akışı sağlamak' },
            { key: 'B', text: 'Yemeklerin daha hızlı kaymasını sağlamak' },
            { key: 'C', text: 'Boynun bükülmesini önlemek' },
            { key: 'D', text: 'Ses tonunu kalınlaştırmak' }
          ],
          correctAnswer: 'A',
          explanation: 'Kıkırdak halkalar borunun açık kalmasını sağlar; eğer kaslı olsaydı nefes çekerken vakumla kapanırdı.'
        },
        {
          id: 8,
          theme: 'Solunumda Diyafram Hareketi',
          cognitiveLevel: 'Eşleştirme',
          scenario: 'Bir tiyatro oyuncusu repliğini söylerken derin nefes almakta ve yavaşça konuşmaktadır.',
          questionPrompt: 'Doğru diyafram nefesi alırken vücutta gözlemlenen doğru hareket hangisidir?',
          options: [
            { key: 'A', text: 'Omuzları yukarı kaldırmak yerine diyafram kasını aşağı iterek karın bölgesini şişirmek' },
            { key: 'B', text: 'Nefesi ağızdan alıp hızlıca bırakmak' },
            { key: 'C', text: 'Göğsü aşırı sıkıştırmak' },
            { key: 'D', text: 'Kalp atışını durdurmak' }
          ],
          correctAnswer: 'A',
          explanation: 'Kitabın 119. sayfasında belirtildiği gibi: Göğüs yerine diyafram hareket ettirilmeli ve burundan nefes alınmalıdır.'
        },
        {
          id: 9,
          theme: 'Egzersiz Sırasında Solunum Hızı',
          cognitiveLevel: 'Metabolik Çıkarım',
          scenario: 'Hızlı koşan bir atlette hücreler daha fazla enerji üretir ve atık olarak kanda karbon dioksit miktarı hızla yükselir.',
          questionPrompt: 'Kandaki CO2 artışına beynin ve solunum sisteminin verdiği anlık tepki nedir?',
          options: [
            { key: 'A', text: 'Soluk alıp verme hızını ve derinliğini artırarak kandaki fazla CO2’yi hızla atmak' },
            { key: 'B', text: 'Solunumu tamamen durdurmak' },
            { key: 'C', text: 'Böbrekleri kapatmak' },
            { key: 'D', text: 'Mideyi çalıştırmak' }
          ],
          correctAnswer: 'A',
          explanation: 'Kanda CO2 artınca kan asitleşir; beyin solunum merkezini uyararak soluk alıp vermeyi hızlandırır.'
        },
        {
          id: 10,
          theme: 'Solunum Organları Sıralaması',
          cognitiveLevel: 'Kavram Bilgisi',
          scenario: 'Kitabın 118. sayfasında solunum organları gösterilmiştir.',
          questionPrompt: 'Havanın burundan alveollere ulaşana kadar izlediği yol sırasıyla hangisidir?',
          options: [
            { key: 'A', text: 'Burun ➔ Yutak ➔ Gırtlak ➔ Soluk Borusu ➔ Bronş ➔ Bronşçuk ➔ Alveol' },
            { key: 'B', text: 'Burun ➔ Gırtlak ➔ Yutak ➔ Alveol ➔ Bronş' },
            { key: 'C', text: 'Burun ➔ Yemek borusu ➔ Mide ➔ Akciğer' },
            { key: 'D', text: 'Yutak ➔ Burun ➔ Soluk borusu ➔ Kalp' }
          ],
          correctAnswer: 'A',
          explanation: 'Doğru sıra: Burun ➔ Yutak ➔ Gırtlak ➔ Soluk Borusu ➔ Bronş ➔ Bronşçuk ➔ Alveol.'
        },
        {
          id: 11,
          theme: 'Gırtlak Kapağı (Epiglottis) İşlevi',
          cognitiveLevel: 'Anatomik Koruma',
          scenario: 'Yemek yerken konuştuğumuzda veya güldüğümüzde aniden öksürük nöbetine tutuluruz.',
          questionPrompt: 'Bunun temel anatomik sebebi hangisidir?',
          options: [
            { key: 'A', text: 'Yutkunma anında soluk borusunu kapatması gereken gırtlak kapağının açık kalarak besin kırıntısının soluk borusuna kaçması' },
            { key: 'B', text: 'Midenin yukarı fırlaması' },
            { key: 'C', text: 'Burnun tıkanması' },
            { key: 'D', text: 'Dişlerin birbirine çarpması' }
          ],
          correctAnswer: 'A',
          explanation: 'Gırtlak kapağı (epiglottis) yutkunurken soluk borusunu örter; konuşunca açık kalır ve lokma kaçarak öksürük refleksi doğurur.'
        },
        {
          id: 12,
          theme: 'Solunan Hava vs Verilen Hava İçeriği',
          cognitiveLevel: 'Gaz Analizi',
          scenario: 'İçimize çektiğimiz hava ile dışarı verdiğimiz havanın bileşimi karşılaştırılmıştır.',
          questionPrompt: 'Verilen havadaki gaz oranları solunan havaya göre nasıl değişir?',
          options: [
            { key: 'A', text: 'Oksijen oranı azalmış, Karbon dioksit ve su buharı oranı artmıştır.' },
            { key: 'B', text: 'Oksijen artmış, Karbon dioksit sıfırlanmıştır.' },
            { key: 'C', text: 'Azot gazı tamamen yok olmuştur.' },
            { key: 'D', text: 'Hiçbir gaz oranı değişmemiştir.' }
          ],
          correctAnswer: 'A',
          explanation: 'Vücut oksijeni kullanır (oranı düşer) ve solunum atığı olarak CO2 ile su buharı verir (oranları artar).'
        },
        {
          id: 13,
          theme: 'Ses Telleri ve Konuşma',
          cognitiveLevel: 'Fizyoloji',
          scenario: 'İnsanlar konuşurken akciğerlerden dışarı verilen hava gırtlaktaki ses tellerini titreştirir.',
          questionPrompt: 'Ses telleri solunum sisteminin hangi organında yer alır?',
          options: [
            { key: 'A', text: 'Gırtlak' },
            { key: 'B', text: 'Burun' },
            { key: 'C', text: 'Alveol' },
            { key: 'D', text: 'Diyafram' }
          ],
          correctAnswer: 'A',
          explanation: 'Ses telleri kıkırdak yapılı gırtlağın içinde bulunur.'
        },
        {
          id: 14,
          theme: 'Hava Kirliliği ve Akciğer Sağlığı',
          cognitiveLevel: 'Çevre ve Sağlık',
          scenario: 'Kitabın 123. sayfasındaki Elif, sanayi bölgesinde yoğun araç trafiği ve fabrika bacalarının olduğu bir şehirde yaşamakta ve nefes darlığı çekmektedir.',
          questionPrompt: 'Hava kirliliğinin solunum sistemine verdiği en büyük tahribat hangisidir?',
          options: [
            { key: 'A', text: 'Partikül ve zehirli gazların soluk borusu titrek tüylerini felç edip alveollerde iltihaplanma ve tıkanmaya yol açması' },
            { key: 'B', text: 'Kemikleri eritmesi' },
            { key: 'C', text: 'Kulak zarını patlatması' },
            { key: 'D', text: 'Diyaframı kemikleştirmesi' }
          ],
          correctAnswer: 'A',
          explanation: 'Hava kirliliği solunum yollarının koruyucu sillerini bozar ve kronik solunum rahatsızlıklarına yol açar.'
        },
        {
          id: 15,
          theme: 'Pasif İçicilik',
          cognitiveLevel: 'Toplum Sağlığı',
          scenario: 'Kendisi sigara içmediği halde sigara içilen kapalı ortamlarda bulunan kişilere "pasif içici" denir.',
          questionPrompt: 'Pasif içicilerin sağlığı hakkında hangisi DOĞRUDUR?',
          options: [
            { key: 'A', text: 'Dumanı soludukları için aktif içiciler gibi solunum ve damar hastalıkları riskine maruz kalırlar.' },
            { key: 'B', text: 'Hiçbir zarar görmezler.' },
            { key: 'C', text: 'Akciğerleri temizlenir.' },
            { key: 'D', text: 'Duman onları mikroplardan korur.' }
          ],
          correctAnswer: 'A',
          explanation: 'Pasif içicilik en az aktif içicilik kadar kanser ve damar tıkanıklığı riski taşır.'
        },
        {
          id: 16,
          theme: 'Diyafram Kası Yapısı',
          cognitiveLevel: 'Biyolojik Bilgi',
          scenario: 'Diyafram göğüs ve karın boşluğu arasındaki en büyük solunum kasıdır.',
          questionPrompt: 'Diyafram kası hangi kas tipindedir ve çalışması nasıldır?',
          options: [
            { key: 'A', text: 'Çizgili kastır; hem istemsiz (otomatik) hem de isteğimizle kontrol edilebilir.' },
            { key: 'B', text: 'Düz kastır; asla kontrol edilemez.' },
            { key: 'C', text: 'Kalp kasıdır.' },
            { key: 'D', text: 'Kemik dokusudur.' }
          ],
          correctAnswer: 'A',
          explanation: 'Diyafram çizgili kastır; nefesimizi tutabilir veya hızlandırabiliriz, uyurken ise otomatik çalışır.'
        },
        {
          id: 17,
          theme: 'Solunum Yolu Enfeksiyonlarından Korunma',
          cognitiveLevel: 'Önleyici Sağlık',
          scenario: 'Kış aylarında grip, nezle gibi damlacık yoluyla bulaşan hastalıklar kapalı sınıflarda hızla yayılır.',
          questionPrompt: 'Sınıf ortamında bulaşmayı önlemenin en etkili ve basit yolu nedir?',
          options: [
            { key: 'A', text: 'Teneffüslerde pencereleri açarak sınıfı düzenli havalandırmak ve elleri sık sık yıkamak' },
            { key: 'B', text: 'Pencereleri hiç açmamak' },
            { key: 'C', text: 'Su içmemek' },
            { key: 'D', text: 'Hiç nefes almamak' }
          ],
          correctAnswer: 'A',
          explanation: 'Düzenli havalandırma virüs ve bakteri yoğunluğunu azaltır, el hijyeni teması keser.'
        },
        {
          id: 18,
          theme: 'Yeşil Dedektör Uygulaması',
          cognitiveLevel: 'Güncel Vatandaşlık',
          scenario: 'Sağlık Bakanlığı ve Yeşilay iş birliğiyle geliştirilen mobil uygulama sayesinde vatandaşlar kapalı alanlardaki tütün ihlallerini bildirebilmektedir.',
          questionPrompt: 'Bu uygulamanın adı nedir?',
          options: [
            { key: 'A', text: 'Yeşil Dedektör' },
            { key: 'B', text: 'Mavi Bayrak' },
            { key: 'C', text: 'Hava Net' },
            { key: 'D', text: 'Dumansız Park' }
          ],
          correctAnswer: 'A',
          explanation: 'Kitabın 126. sayfasında açıkça belirtildiği üzere uygulamanın adı "Yeşil Dedektör"dür.'
        },
        {
          id: 19,
          theme: 'Soluk Borusundaki Titrek Tüyler',
          cognitiveLevel: 'Mikroskobik Mekanizma',
          scenario: 'Soluk borusunun iç yüzeyi tek yönlü yukarı doğru dalgalanan mikroskobik titrek tüylerle (siller) kaplıdır.',
          questionPrompt: 'Bu tüylerin mukusla yakalanan toz ve mikropları boğaza doğru süpürmesinin amacı nedir?',
          options: [
            { key: 'A', text: 'Yabancı partiküllerin hassas akciğer alveollerine ulaşmasını engelleyip balgamla dışarı atılmasını sağlamak' },
            { key: 'B', text: 'Besinleri mideye indirmek' },
            { key: 'C', text: 'Havanın hızını kesmek' },
            { key: 'D', text: 'Ses tonunu ayarlamak' }
          ],
          correctAnswer: 'A',
          explanation: 'Titrek tüyler yürüyen merdiven gibi tozu yukarı taşır ve akciğerleri temiz tutar.'
        },
        {
          id: 20,
          theme: 'Solunumun Amacı',
          cognitiveLevel: 'Büyük Resim / Genelleme',
          scenario: 'Hücre solunumu: Besin + Oksijen ➔ Karbon dioksit + Su + Enerji (ATP).',
          questionPrompt: 'Solunum sisteminin tüm canlılar için vazgeçilmez olmasının nihai amacı nedir?',
          options: [
            { key: 'A', text: 'Hücrelerin yaşamak için muhtaç olduğu enerjiyi (ATP) üretmelerini sağlayacak oksijeni temin etmek ve zehirli CO2’yi uzaklaştırmak' },
            { key: 'B', text: 'Vücudu şişirmek' },
            { key: 'C', text: 'Kalbi durdurmak' },
            { key: 'D', text: 'Yalnızca ses çıkarmak' }
          ],
          correctAnswer: 'A',
          explanation: 'Solunumun biyolojik gayesi hücresel enerji üretimi için gaz değişimini sağlamaktır.'
        }
      ]
    },
    {
      id: 'g7-u3-sub4',
      title: '4. Boşaltım Sistemi',
      shortTitle: 'Boşaltım Sistemi',
      badge: '4. Bölüm',
      pageRange: '129-139',
      concepts: ['Böbrekler', 'Üreter (İdrar Borusu)', 'Mesane (İdrar Kesesi)', 'Üretra (İdrar Kanalı)', 'Boşaltıma Yardımcı Organlar', 'Böbrek Sağlığı'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Boşaltım Nedir? Boşaltım Sistemini Oluşturan Yapı ve Organlar',
          paragraphs: [
            'Vücut hücrelerimizdeki yaşamsal faaliyetler sonucunda üre, fazla su, mineral tuzları ve toksik atıklar oluşur. Bu zararlı maddelerin kandan süzülüp vücut dışına atılması işlemine boşaltım denir.',
            'Boşaltım sistemi 4 temel organdan meydana gelir: Böbrekler ➔ Üreter (İdrar Borusu) ➔ Mesane (İdrar Kesesi) ➔ Üretra (İdrar Kanalı).'
          ],
          keyPoints: [
            'Böbrekler: Bel hizasında, omurganın iki yanında yer alan fasulye biçimli iki organdır. Kanı süzerek temizler; yararlı maddelerin (glikoz, suyun büyük kısmı) tekrar kana geçmesini sağlar (geri emilim), üre, tuz ve fazla suyu idrar olarak ayırır.',
            'Üreter (İdrar Borusu): Böbreklerde oluşan idrarı idrar kesesine taşıyan iki adet borucuktur.',
            'Mesane (İdrar Kesesi): İdrarın vücut dışına atılıncaya kadar biriktirildiği kaslı esnek torbadır. Belirli bir doluluğa ulaşınca sinirler uyarılır ve idrar yapma ihtiyacı hissedilir.',
            'Üretra (İdrar Kanalı): Mesanede biriken idrarın vücut dışına atıldığı kısa kanaldır.'
          ],
          table: {
            headers: ['Organ', 'Yapısal Özelliği', 'Temel Görevi'],
            rows: [
              ['Böbrekler', 'Fasulye şeklinde, nefron süzgeçli', 'Kanı süzer, idrarı oluşturur'],
              ['Üreter', 'İki ince borucuk', 'İdrarı böbrekten mesaneye iletir'],
              ['Mesane (İdrar Kesesi)', 'Genişleyebilen kaslı torba', 'İdrarı depolar'],
              ['Üretra', 'Dışarı açılan kanal', 'İdrarı vücuttan dışarı atar']
            ]
          }
        },
        {
          heading: 'Boşaltıma Yardımcı Olan Diğer Organlar',
          paragraphs: [
            'Vücudumuzdaki tek boşaltım organı böbrekler değildir. Farklı atık maddeleri vücuttan atan yardımcı organlar harika bir iş birliği içindedir:'
          ],
          keyPoints: [
            'Deri: Terleme yoluyla vücuttaki fazla su ve tuzu dışarı atar. Aynı zamanda ter buharlaşırken vücut sıcaklığını dengeler.',
            'Akciğerler: Soluk verme sırasında hücresel solunum atığı olan karbon dioksit (CO2) ve su buharını dışarı atar.',
            'Kalın Bağırsak: Sindirilemeyen besin atıklarını, safrayı ve fazla suyu dışkı yoluyla vücuttan uzaklaştırır.',
            'Karaciğer: Proteinlerin sindirimiyle oluşan son derece zehirli amonyağı (NH3), daha az zararlı olan üre ve ürik aside dönüştürerek böbreklerin işini kolaylaştırır.'
          ],
          table: {
            headers: ['Yardımcı Organ', 'Vücuttan Uzaklaştırdığı Atık Maddeler'],
            rows: [
              ['Deri', 'Su ve mineral tuzları (Ter ile)'],
              ['Akciğerler', 'Karbon dioksit ve su buharı (Soluk verme ile)'],
              ['Kalın Bağırsak', 'Besin posası, safra ve su (Dışkı ile)'],
              ['Karaciğer', 'Zehirli amonyağı üreye çevirir (Dönüştürme görevi)']
            ]
          }
        },
        {
          heading: 'Boşaltım Sistemi Sağlığı ve Diyaliz',
          paragraphs: [
            'Ders kitabının 135-139. sayfalarında belirtildiği üzere böbrek sağlığını korumanın bir numaralı kuralı günde en az 1.5 - 2 litre temiz su içmektir.',
            'Aşırı tuzlu, aşırı baharatlı yemekler yemek, bilinçsiz ve aşırı ağrı kesici/antibiyotik ilaç kullanmak böbrekleri yorar ve böbrek taşı ile yetmezliğe yol açar.'
          ],
          keyPoints: [
            'Böbrek Taşı: İdrardaki kalsiyum ve tuz kristallerinin yetersiz su tüketimi nedeniyle böbrek havuzcuklarında çöküp birikmesiyle oluşur.',
            'Böbrek Yetmezliği & Diyaliz: Böbrekleri çalışmayan hastalar haftada birkaç gün diyaliz makinesine bağlanarak kanlarındaki üre ve zararlı atıkları temizletmek zorundadır. Kesin çözüm ise organ (böbrek) naklidir.'
          ],
          scientistBox: {
            name: 'Zehrâvî (936-1013) & Sabuncuoğlu Şerefeddin',
            role: 'Cerrahi ve Tıbbın Öncüleri',
            contribution: 'Endülüslü hekim Zehrâvî, mesane taşlarını ameliyatla çıkarma tekniklerini ve 200’den fazla cerrahi aleti resmettiği "Et-Tasrif" kitabında anlatmıştır. Osmanlı cerrahı Sabuncuoğlu Şerefeddin ise Amasya Darüşşifası’nda minyatürlerle ameliyat yöntemlerini çizmiştir.'
          }
        }
      ],
      glossary: [
        { term: 'Boşaltım', definition: 'Hücrelerde oluşan üre, atık su ve tuz gibi zararlı metabolik atıkların vücuttan uzaklaştırılması.' },
        { term: 'Böbrek', definition: 'Kanı nefron adı verilen mikroskobik filtreleriyle süzüp idrar oluşturan hayati organ.' },
        { term: 'Üreter', definition: 'İdrarı böbreklerden idrar kesesine (mesaneye) taşıyan borucuk.' },
        { term: 'Mesane', definition: 'İdrarın dışarı atılıncaya kadar biriktirildiği kaslı idrar torbası.' },
        { term: 'Üretra', definition: 'İdrarın mesaneden vücut dışına boşaltıldığı kanal.' },
        { term: 'Diyaliz', definition: 'Böbrekleri çalışmayan hastalarda kanın özel bir yapay filtre makinesinden geçirilerek üre ve atıklardan arındırılması.' },
        { term: 'Üre', definition: 'Karaciğerde amonyaktan dönüştürülen ve böbrekler tarafından idrarla atılan azotlu atık madde.' }
      ],
      trueFalseQuestions: [
        { id: 1, text: 'Böbrekler kanı süzerek kandaki üre, fazla su ve tuzu idrar şeklinde vücuttan uzaklaştırır.', isCorrect: true, explanation: 'Doğrudur. Böbreğin temel görevi kanı filtreleyip idrar üretmektir.' },
        { id: 2, text: 'İdrar, böbrekten mesaneye üretra adı verilen boru ile taşınır.', isCorrect: false, explanation: 'Yanlıştır. Böbrekten mesaneye taşıyan ÜRETER’dir; vücut dışına atan ise ÜRETRA’dır.' },
        { id: 3, text: 'Deri, terleme yoluyla fazla su ve tuzu dışarı atarak boşaltıma yardımcı olur.', isCorrect: true, explanation: 'Doğrudur. Terleme su ve tuz atar, vücut ısısını dengeler.' },
        { id: 4, text: 'Karaciğer, zehirli amonyağı daha az zararlı olan üreye dönüştürerek boşaltıma yardımcı olur.', isCorrect: true, explanation: 'Doğrudur. Amonyak üreye karaciğerde çevrilir.' },
        { id: 5, text: 'Akciğerler sadece oksijen alır, vücuttan hiçbir boşaltım atığı uzaklaştırmaz.', isCorrect: false, explanation: 'Yanlıştır. Akciğerler soluk verirken karbon dioksit ve su buharını dışarı atar.' },
        { id: 6, text: 'Böbrek sağlığını korumak için günde en az 1.5 - 2 litre su içilmeli ve aşırı tuzdan kaçınılmalıdır.', isCorrect: true, explanation: 'Doğrudur. Yeterli su böbrek taşı ve yetmezliğini önler.' },
        { id: 7, text: 'Diyaliz makinesi, böbrek yetmezliği olan hastaların kanını yapay olarak süzen tıbbi bir aygıttır.', isCorrect: true, explanation: 'Doğrudur. Böbreğin süzme görevini üstlenir.' },
        { id: 8, text: 'İdrar kesesi (mesane) kemikten yapılmış sert bir kutudur.', isCorrect: false, explanation: 'Yanlıştır. Mesane genişleyip büzülebilen elastik düz kaslardan yapılmış bir torbadır.' },
        { id: 9, text: 'Zehrâvî ve Sabuncuoğlu Şerefeddin tarihte cerrahi aletler ve ameliyat çizimleriyle iz bırakmış hekimlerdir.', isCorrect: true, explanation: 'Doğrudur. Kitabın 140. sayfasında İz Bırakanlar bölümünde yer alırlar.' },
        { id: 10, text: 'Bilinçsiz ve aşırı ilaç kullanımı böbrek dokularına hiçbir zarar vermez.', isCorrect: false, explanation: 'Yanlıştır. Aşırı antibiyotik ve ağrı kesiciler böbreklerde kalıcı yetmezliğe yol açabilir.' },
        {"id":11,"statement":"Böbrekler kanı süzerek zararlı ve fazla maddeleri ayıklar ve idrarı oluşturur.","isCorrect":true,"explanation":"Böbreklerin temel görevi kanı süzerek metabolik atıkları (üre, fazla tuz vb.) idrar şeklinde uzaklaştırmaktır."},
        {"id":12,"statement":"Böbrek atardamarındaki üre miktarı, böbrek toplardamarındaki üre miktarından daha azdır.","isCorrect":false,"explanation":"Böbreğe gelen kanda (atardamar) üre çoktur; süzüldükten sonra çıkan kanda (toplardamar) üre miktarı azalmıştır."},
        {"id":13,"statement":"Böbreklerde oluşan idrarı idrar kesesine (mesaneye) taşıyan boru şeklindeki yapıya üreter denir.","isCorrect":true,"explanation":"Sağ ve sol böbrekten çıkan üreterler idrarı mesaneye iletir."},
        {"id":14,"statement":"İdrar kesesinde biriken idrarın vücut dışına atılmasını sağlayan kanal üretradır.","isCorrect":true,"explanation":"Üretra boşaltım sisteminin idrarı dışarıya tahliye eden son kanalıdır."},
        {"id":15,"statement":"Deri, terleme yoluyla vücuttan su ve tuz atarak boşaltıma yardımcı olur.","isCorrect":true,"explanation":"Ter bezleri su ve tuzun fazlasını atar ve aynı zamanda vücut sıcaklığını dengeler."},
        {"id":16,"statement":"Akciğerler soluk verme sırasında vücuttan karbondioksit ve su buharı atarak boşaltıma yardımcı olur.","isCorrect":true,"explanation":"Solunum atığı olan CO2 ve su buharı akciğerler aracılığıyla dışarı atılır."},
        {"id":17,"statement":"Karaciğer, proteinlerin parçalanmasıyla oluşan çok zehirli amonyağı daha az zararlı üreye dönüştürür.","isCorrect":true,"explanation":"Karaciğer amonyağı üreye çevirerek böbreklerin süzebileceği forma dönüştürür."},
        {"id":18,"statement":"Kalın bağırsak sindirilmeyen besin atıkları ve bir miktar suyu dışkı yoluyla atarak boşaltıma yardımcı olur.","isCorrect":true,"explanation":"Sindirim atıklarının vücuttan atılması boşaltıma destek sağlar."},
        {"id":19,"statement":"Yetersiz su tüketimi ve aşırı tuzlu beslenme böbrek taşı oluşma riskini artırır.","isCorrect":true,"explanation":"Az su içildiğinde idrar yoğunlaşır ve mineraller çökerek böbrek taşlarına dönüşebilir."},
        {"id":20,"statement":"Böbrekleri çalışmayan hastaların kanı diyaliz makinesi yardımıyla süzülerek temizlenir.","isCorrect":true,"explanation":"Diyaliz makinesi böbreklerin süzme işlevini yapay olarak üstlenen tıbbi bir cihazdır."}
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Boşaltım Organları ve Akış Sırası',
          cognitiveLevel: 'Anatomik Sıralama',
          scenario: 'Kandaki üre ve atık maddelerin böbrekte süzüldükten sonra vücut dışına atılana kadar izlediği yol incelenmiştir.',
          questionPrompt: 'İdrarın vücut dışına atılma güzergahı hangi seçenekte doğru sıralanmıştır?',
          options: [
            { key: 'A', text: 'Böbrek ➔ Üreter (İdrar Borusu) ➔ Mesane (İdrar Kesesi) ➔ Üretra (İdrar Kanalı)' },
            { key: 'B', text: 'Böbrek ➔ Üretra ➔ Mesane ➔ Üreter' },
            { key: 'C', text: 'Mesane ➔ Böbrek ➔ Üreter ➔ Üretra' },
            { key: 'D', text: 'Üreter ➔ Böbrek ➔ Üretra ➔ Mesane' }
          ],
          correctAnswer: 'A',
          explanation: 'Sıra: Böbrek (süzme) ➔ Üreter (taşıma) ➔ Mesane (depolama) ➔ Üretra (dışarı atma).'
        },
        {
          id: 2,
          theme: 'Böbrekte Geri Emilim Mekanizması',
          cognitiveLevel: 'Fizyolojik Mantık',
          scenario: 'Böbreklerimiz günde yaklaşık 180 litre kan sıvısını süzer ancak gün içinde sadece 1.5 litre civarında idrar üretilir.',
          questionPrompt: 'Geriye kalan yaklaşık 178.5 litrelik sıvının yok olmamasının sebebi nedir?',
          options: [
            { key: 'A', text: 'Süzülen suyun ve kandaki glikoz, amino asit gibi yararlı maddelerin nefron kanallarında geri emilerek tekrar kana kazandırılması' },
            { key: 'B', text: 'Sıvının deriden buharlaşması' },
            { key: 'C', text: 'Akciğerlerin bu sıvıyı içmesi' },
            { key: 'D', text: 'Mesanenin suyu yok etmesi' }
          ],
          correctAnswer: 'A',
          explanation: 'Böbrekler kandan süzdüğü suyun %99’unu ve yararlı maddeleri geri emerek vücutta tutar; sadece atıkları idrar yapar.'
        },
        {
          id: 3,
          theme: 'Boşaltıma Yardımcı Organlar Eşlemesi',
          cognitiveLevel: 'Tablo Yorumlama',
          scenario: 'Kitabın 134. sayfasındaki "Boşaltıma Yardımcı Diğer Organlar" tablosu incelenmiştir:\nOrgan K: Su ve mineral tuzlarını terleme ile atar.\nOrgan L: Karbon dioksit ve su buharını soluk verme ile atar.\nOrgan M: Besin posasını dışkı ile atar.',
          questionPrompt: 'K, L ve M organları sırasıyla hangileridir?',
          options: [
            { key: 'A', text: 'K: Deri, L: Akciğerler, M: Kalın bağırsak' },
            { key: 'B', text: 'K: Akciğerler, L: Deri, M: Mide' },
            { key: 'C', text: 'K: Böbrek, L: Karaciğer, M: Kalın bağırsak' },
            { key: 'D', text: 'K: Deri, L: Kalın bağırsak, M: Akciğerler' }
          ],
          correctAnswer: 'A',
          explanation: 'Deri terle su ve tuz atar; Akciğer solukla CO2 ve su buharı atar; Kalın bağırsak dışkı atar.'
        },
        {
          id: 4,
          theme: 'Karaciğerin Boşaltımdaki Kritik Rolü',
          cognitiveLevel: 'Biyokimyasal Çıkarım',
          scenario: 'Hücrelerde proteinler parçalandığında çok zehirli bir bileşik olan amonyak (NH3) açığa çıkar. Eğer amonyak doğrudan kana karışsaydı hücreleri hızla zehirlerdi.',
          questionPrompt: 'Bu zehirli amonyağı daha az zararlı üreye dönüştüren ve böylece böbreklerimizi koruyan organ hangisidir?',
          options: [
            { key: 'A', text: 'Karaciğer' },
            { key: 'B', text: 'Pankreas' },
            { key: 'C', text: 'Mide' },
            { key: 'D', text: 'Dalak' }
          ],
          correctAnswer: 'A',
          explanation: 'Karaciğer ornitin döngüsüyle zehirli amonyağı daha az zehirli üreye çevirir.'
        },
        {
          id: 5,
          theme: 'Sıcak Havada İdrar Miktarı Değişimi',
          cognitiveLevel: 'Günlük Yaşam Bağı',
          scenario: 'Kitabın 129. sayfasında Bora beden eğitimi dersinde çok koşmuş, bolca su içmiş ancak çok terlediği için dersten sonra idrara sıkışmamıştır.',
          questionPrompt: 'Bora’nın çok su içmesine rağmen idrara sıkışmamasının bilimsel sebebi nedir?',
          options: [
            { key: 'A', text: 'Vücuttaki fazla su ve tuzun derideki ter bezleri yoluyla buharlaştırılarak dışarı atılması, böbreğe düşen su süzme yükünün azalması' },
            { key: 'B', text: 'Bora’nın böbreklerinin çalışmayı durdurması' },
            { key: 'C', text: 'İçtiği suyun yok olması' },
            { key: 'D', text: 'Bora’nın kemiklerinin suyu emmesi' }
          ],
          correctAnswer: 'A',
          explanation: 'Sıcakta veya sporda suyun büyük kısmı terle atıldığı için böbrekler suyu tutar ve idrar miktarı azalır.'
        },
        {
          id: 6,
          theme: 'Böbrek Yetmezliği ve Diyaliz',
          cognitiveLevel: 'Tıbbi Teknoloji',
          scenario: 'Kitabın 139. sayfasındaki Meltem, böbrek yetmezliği hastası Mehmet’in haftada 3 gün diyaliz makinesine bağlanarak yaşamını sürdürdüğünü öğrenmiştir.',
          questionPrompt: 'Diyaliz makinesinin çalışma mantığı hakkında hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Hastanın kanını yarı geçirgen filtrelerden geçirerek kanda biriken zehirli üre ve fazla tuzu temizleyip kanı vücuda geri verir.' },
            { key: 'B', text: 'Vücuda yeni kan hücresi üretir.' },
            { key: 'C', text: 'Böbreği ameliyatla büyütür.' },
            { key: 'D', text: 'Midedeki besinleri öğütür.' }
          ],
          correctAnswer: 'A',
          explanation: 'Diyaliz yapay bir böbrek gibi difüzyon prensibiyle kandaki üre ve zararlı atıkları süzer.'
        },
        {
          id: 7,
          theme: 'Böbrek Taşı Oluşumu ve Önleme',
          cognitiveLevel: 'Sağlık ve Korunma',
          scenario: 'Kitabın 135. sayfasında Uygar Bey sırt ve bel bölgesinde şiddetli ağrılarla doktora gitmiş ve böbrek taşı tespit edilmiştir.',
          questionPrompt: 'Böbrek taşı oluşumunu engellemek için Uygar Bey’in günlük hayatında yapması gereken en kritik davranış nedir?',
          options: [
            { key: 'A', text: 'Günde en az 2 - 2.5 litre su içmek, tuz ve aşırı proteini kısıtlamak' },
            { key: 'B', text: 'Hiç su içmeyip sadece asitli içecek tüketmek' },
            { key: 'C', text: 'Aşırı tuzlu gıdalarla beslenmek' },
            { key: 'D', text: 'Günde 15 saat hareketsiz yatmak' }
          ],
          correctAnswer: 'A',
          explanation: 'Bol su tüketimi minerallerin kristalleşmesini engeller ve böbrek taşı oluşumunu önler.'
        },
        {
          id: 8,
          theme: 'Tarihe Not Düşenler: Zehrâvî ve Cerrahî',
          cognitiveLevel: 'Bilim Tarihi',
          scenario: '936-1013 yılları arasında yaşayan İslam bilgini Zehrâvî, idrar kesesindeki (mesane) taşların cerrahi yöntemle çıkarılması için özel aletler tasarlamıştır.',
          questionPrompt: 'Zehrâvî’nin tıp dünyasına bıraktığı 200’den fazla cerrahi aleti anlatan ünlü ansiklopedik eser hangisidir?',
          options: [
            { key: 'A', text: 'Et-Tasrif' },
            { key: 'B', text: 'Kitab-ül Hiyel' },
            { key: 'C', text: 'Kozmografya' },
            { key: 'D', text: 'Zîc-i Uluğ Bey' }
          ],
          correctAnswer: 'A',
          explanation: 'Kitabın 140. sayfasında belirtildiği gibi Zehrâvî’nin cerrahi aletleri anlatan meşhur eseri Et-Tasrif’tir.'
        },
        {
          id: 9,
          theme: 'Böbreğin Kan Dolaşımı ile Bağlantısı',
          cognitiveLevel: 'Sistemler Arası İlişki',
          scenario: 'Böbreğe temizlenmek üzere kan getiren böbrek atardamarı ile süzülen kanı kalbe geri götüren böbrek toplardamarı karşılaştırılmıştır.',
          questionPrompt: 'Böbrek atardamarındaki kan ile böbrek toplardamarındaki kan kıyaslandığında hangisi DOĞRUDUR?',
          options: [
            { key: 'A', text: 'Böbrek atardamarındaki üre miktarı, böbrek toplardamarındaki üre miktarından daha fazladır.' },
            { key: 'B', text: 'Böbrek toplardamarı daha çok üre taşır.' },
            { key: 'C', text: 'Böbrekten çıkan kanda hiç oksijen yoktur.' },
            { key: 'D', text: 'Böbrek kanı temizlemez.' }
          ],
          correctAnswer: 'A',
          explanation: 'Böbrek atardamarı üreyle yüklü kirli kan getirir; böbrek nefronları üreyi süzer, böylece böbrek toplardamarındaki üre miktarı düşer.'
        },
        {
          id: 10,
          theme: 'İdrar Yolu Enfeksiyonları ve Hijyen',
          cognitiveLevel: 'Kişisel Sağlık',
          scenario: 'Üretra yoluyla dışarıdan bakterilerin mesaneye ulaşması idrar yolu enfeksiyonlarına (sistit) neden olur.',
          questionPrompt: 'Bu rahatsızlığı önlemek için aşağıdakilerden hangisi gereklidir?',
          options: [
            { key: 'A', text: 'Tuvalet hijyenine dikkat etmek, idrarı uzun süre tutmamak ve bol sıvı tüketmek' },
            { key: 'B', text: 'Tuvalete hiç gitmemek' },
            { key: 'C', text: 'Sürekli kuru gıdalarla beslenmek' },
            { key: 'D', text: 'Kirli sularla yıkanmak' }
          ],
          correctAnswer: 'A',
          explanation: 'Hijyen ve düzenli idrara çıkma bakterilerin kanalda çoğalmasını engeller.'
        },
        {
          id: 11,
          theme: 'Üreter ile Üretra Ayrımı',
          cognitiveLevel: 'Kavram Yanılgısı',
          scenario: 'Bir sınavda öğrencilerin üreter ile üretra kavramlarını karıştırdığı görülmüştür.',
          questionPrompt: 'Aşağıdaki ifadelerden hangisi ÜRETER’i doğru tanımlar?',
          options: [
            { key: 'A', text: 'Böbrekten çıkan idrarı mesaneye taşıyan 2 adet idrar borusudur.' },
            { key: 'B', text: 'İdrarı vücut dışına atan tek kanaldır.' },
            { key: 'C', text: 'Kanı süzen birimdir.' },
            { key: 'D', text: 'Safra sıvısını taşır.' }
          ],
          correctAnswer: 'A',
          explanation: 'Üreter idrar borusudur (böbrek-mesane arası); üretra ise idrar kanalıdır (mesane-dışarısı).'
        },
        {
          id: 12,
          theme: 'Böbreklerin Vücuttaki Konumu',
          cognitiveLevel: 'Anatomik Bilgi',
          scenario: 'Böbrekler vücudumuzun neresinde yer alır?',
          questionPrompt: 'Böbreklerin vücuttaki konumu hangisinde doğru tarif edilmiştir?',
          options: [
            { key: 'A', text: 'Karın boşluğunun arka tarafında, bel hizasında, omurganın iki yanında birer adet' },
            { key: 'B', text: 'Göğüs kafesinin tam ortasında kalbin üstünde' },
            { key: 'C', text: 'Kafatasının içinde' },
            { key: 'D', text: 'Bacak kaslarının arasında' }
          ],
          correctAnswer: 'A',
          explanation: 'Böbrekler bel hizasında omurganın sağ ve solunda korunaklı şekilde yer alır.'
        },
        {
          id: 13,
          theme: 'Nefron Kavramı',
          cognitiveLevel: 'Hücresel Biyoloji',
          scenario: 'Her bir böbreğin içinde yaklaşık birer milyon adet mikroskobik süzme ünitesi bulunur.',
          questionPrompt: 'Böbreğin kanı süzen bu mikroskobik temel yapı birimine ne ad verilir?',
          options: [
            { key: 'A', text: 'Nefron' },
            { key: 'B', text: 'Nöron' },
            { key: 'C', text: 'Alveol' },
            { key: 'D', text: 'Villus' }
          ],
          correctAnswer: 'A',
          explanation: 'Böbreklerin mikroskobik süzme birimleri nefronlardır (nöron sinir hücresi, alveol akciğer kesesi, villus bağırsak emilim kıvrımıdır).'
        },
        {
          id: 14,
          theme: 'Mesanenin Kaslı Yapısı',
          cognitiveLevel: 'Uyum Analizi',
          scenario: 'Mesane içine idrar doldukça balon gibi esneyerek genişler ve yaklaşık 400-500 ml idrar depolayabilir.',
          questionPrompt: 'Mesanenin bu genişleme yeteneği hangi dokusu sayesinde gerçekleşir?',
          options: [
            { key: 'A', text: 'Esnek düz kas dokusu' },
            { key: 'B', text: 'Sert kemik dokusu' },
            { key: 'C', text: 'Kıkırdak halkalar' },
            { key: 'D', text: 'Çizgili iskelet kası' }
          ],
          correctAnswer: 'A',
          explanation: 'Mesane duvarındaki düz kaslar elastik olup idrar doldukça genişler ve boşalınca kasılır.'
        },
        {
          id: 15,
          theme: 'Terlemenin Çift Fonksiyonu',
          cognitiveLevel: 'Entegrasyon',
          scenario: 'Yazın spor yaparken yoğun terleriz.',
          questionPrompt: 'Terlemenin boşaltım dışındaki diğer en önemli fizyolojik işlevi nedir?',
          options: [
            { key: 'A', text: 'Ter sıvısının deriden buharlaşırken ısı alması sayesinde aşırı ısınan vücut sıcaklığını düşürüp dengelemek' },
            { key: 'B', text: 'Vücudu ıslatarak parlatmak' },
            { key: 'C', text: 'Kalbi durdurmak' },
            { key: 'D', text: 'Kilo aldırmak' }
          ],
          correctAnswer: 'A',
          explanation: 'Terleme fazla su ve tuzu atarak boşaltım yaparken, buharlaşma ısısıyla vücut ısısını termoregülasyonla sabit tutar.'
        },
        {
          id: 16,
          theme: 'Tarihe Not Düşenler: Sabuncuoğlu Şerefeddin',
          cognitiveLevel: 'Bilim Tarihi',
          scenario: '15. yüzyılda Amasya Darüşşifası’nda hekimlik yapan Sabuncuoğlu Şerefeddin, tıp tarihinde cerrahi müdahaleleri ilk defa minyatür tekniğiyle resimli olarak kitaplaştırmıştır.',
          questionPrompt: 'Sabuncuoğlu Şerefeddin’in bu eseri Türk ve dünya tıp tarihinde neden bir dönüm noktasıdır?',
          options: [
            { key: 'A', text: 'Cerrahi operasyonların, aletlerin ve hastaya yaklaşımın ilk kez görsel olarak adım adım öğretilmesini sağladığı için' },
            { key: 'B', text: 'Yalnızca şiirler içerdiği için' },
            { key: 'C', text: 'Ameliyatları yasakladığı için' },
            { key: 'D', text: 'Mikroskop icat ettiği için' }
          ],
          correctAnswer: 'A',
          explanation: 'Sabuncuoğlu’nun "Cerrahiyyetü’l-Haniyye" eseri minyatürlü cerrahi ameliyat atlası olarak dünya tıp tarihinin başyapıtlarındandır.'
        },
        {
          id: 17,
          theme: 'Böbrek Nakli (Transplantasyon)',
          cognitiveLevel: 'Tedavi Yöntemleri',
          scenario: 'Böbrek yetmezliği olan bir hastaya sağlıklı bir vericiden (donörden) alınan böbrek ameliyatla nakledilmiştir.',
          questionPrompt: 'Böbrek nakli yapılan hastanın hayatında hangi olumlu değişim gerçekleşir?',
          options: [
            { key: 'A', text: 'Haftalık diyaliz makinelerine bağımlılığı sona erer ve yaşam kalitesi doğal sağlığına kavuşur.' },
            { key: 'B', text: 'Bir daha hiç yemek yemesi gerekmez.' },
            { key: 'C', text: 'Su içmesi yasaklanır.' },
            { key: 'D', text: 'Kan dolaşımı durur.' }
          ],
          correctAnswer: 'A',
          explanation: 'Böbrek nakli hastayı diyalizden kurtararak bağımsız ve sağlıklı bir yaşama döndürür.'
        },
        {
          id: 18,
          theme: 'Boşaltım Sistemi ve İlaç Kullanımı',
          cognitiveLevel: 'İlaç Bilinci',
          scenario: 'Baş her ağrıdığında doktora danışmadan kontrolsüzce ağrı kesici yutan bir bireyde zamanla kanda kreatinin ve üre değerleri yükselmiştir.',
          questionPrompt: 'Bu durum bilinçsiz ilaç kullanımının hangi organa doğrudan toksik zarar verdiğini kanıtlar?',
          options: [
            { key: 'A', text: 'Böbreklere' },
            { key: 'B', text: 'Akciğerlere' },
            { key: 'C', text: 'Dişlere' },
            { key: 'D', text: 'Gözlere' }
          ],
          correctAnswer: 'A',
          explanation: 'İlaçların kimyasal atıkları böbreklerden atılır; gereksiz ve aşırı ilaç böbrek nefronlarını tahrip eder.'
        },
        {
          id: 19,
          theme: 'Marcello Malpighi ve Mikroskobik Anatomi',
          cognitiveLevel: 'Bilim Tarihi',
          scenario: 'Kitabın 140. sayfasındaki Marcello Malpighi, mikroskopla böbrek ve dolaşım dokularını incelemiştir.',
          questionPrompt: 'Malpighi’nin böbrek dokusundaki süzme yumaklarına kendi adı verilmiş olan yapı hangisidir?',
          options: [
            { key: 'A', text: 'Malpighi cisimciği (kılcal damar yumağı ve kapsül)' },
            { key: 'B', text: 'Üretra kanalı' },
            { key: 'C', text: 'Safra kesesi' },
            { key: 'D', text: 'Diyafram' }
          ],
          correctAnswer: 'A',
          explanation: 'Böbreklerdeki kılcal damar süzgeçlerine Malpighi cisimciği denir.'
        },
        {
          id: 20,
          theme: 'Boşaltım Sisteminin Bütüncül Özeti',
          cognitiveLevel: 'Sentez',
          scenario: 'Vücudumuzdaki trilyonlarca hücrenin sağlıklı bir ortamda yaşayabilmesi için iç dengenin (homeostazi) korunması zorunludur.',
          questionPrompt: 'Boşaltım sisteminin iç dengeye (homeostaziye) yaptığı en temel katkı hangisidir?',
          options: [
            { key: 'A', text: 'Kanın su, tuz, mineral dengesini ve pH seviyesini ayarlayarak zehirli metabolizma atıklarını düzenli olarak uzaklaştırmak' },
            { key: 'B', text: 'Vücuttaki tüm suyu tamamen kurutmak' },
            { key: 'C', text: 'Yalnızca besinleri sindirmek' },
            { key: 'D', text: 'Kalp atış hızını sıfırlamak' }
          ],
          correctAnswer: 'A',
          explanation: 'Boşaltım sistemi vücudun sıvı-elektrolit, kan basıncı ve atık arıtma dengesini sağlayarak canlılığı korur.'
        }
      ]
    }
  ]
};

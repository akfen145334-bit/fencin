import { Unit } from '../../types/curriculum';
import { grade8Unit4End20Questions } from './grade8UnitEndExams';
import { sebahattinMaddeQuestions } from './sebahattinQuestions';

export const grade8Unit4Data: Unit = {
  "id": "g8-unit-4",
  "unitNumber": 4,
  "bookNumber": 1,
  "grade": 8,
  "subject": "Fen Bilimleri",
  "title": "Madde ve Endüstri",
  "unitEndPageRange": "Ünite Sonu",
  "colorTheme": {
    "primary": "from-cyan-600 to-blue-700",
    "border": "border-cyan-500/40",
    "bg": "bg-cyan-950/40",
    "accent": "text-cyan-400",
    "text": "text-cyan-200"
  },
  "unitEnd20Questions": grade8Unit4End20Questions,
  "subTopics": [
    {
      "id": "g8-u4-sub1",
      "title": "1. Bölüm: Periyodik Sistem",
      "shortTitle": "Periyodik Sistem",
      "badge": "Kavramlar & LGS",
      "pageRange": "",
      "concepts": [
        "Periyodik Tablo Tarihçesi",
        "Döbereiner (Triadlar)",
        "Newlands (Oktavlar)",
        "Mendeleyev (Atom Kütlesi)",
        "Henry Moseley (Atom Numarası)",
        "Glenn Seaborg",
        "Periyotlar (7 Adet)",
        "Gruplar (18 Adet)",
        "Metaller, Ametaller, Yarı Metaller, Soygazlar"
      ],
      "simulationId": "microscope",
      "summarySections": [
        {
          "heading": "Periyodik Sistemin Tarihsel Gelişimi ve Düzeni",
          "paragraphs": [
            "Doğada bulunan elementlerin daha kolay incelenebilmesi ve özelliklerinin tahmin edilebilmesi için belirli kurallara göre sınıflandırıldığı tabloya periyodik sistem denir.",
            "Günümüzdeki Periyodik Tablo: Henry Moseley, elementleri artan atom numaralarına (proton sayılarına) göre sıralayarak günümüzde kullandığımız modern periyodik sistemin temelini atmıştır. Glenn Seaborg ise tablonun altına iki satır daha ekleyerek tabloya son şeklini vermiştir.",
            "Periyodik sistemde yatay sıralara periyot (7 tanedir), dikey sütunlara ise grup (18 tanedir; 8 tane A, 10 tane B grubu) adı verilir.",
            "Aynı Gruptaki Elementler: Aynı grupta (dikey sütunda) yer alan elementlerin kimyasal özellikleri (tepkimeye girme istekleri, sertlikleri vb.) genellikle birbirine benzerdir (LGS ÇIKTI)."
          ],
          "keyPoints": [
            "Henry Moseley: Elementleri artan atom numarasına (proton sayısına) göre dizmiştir.",
            "Aynı Gruptaki Elementler: Kimyasal özellikleri benzerdir (İstisnalara dikkat: 1A'da Hidrojen ametal, diğerleri metaldir) (LGS ÇIKTI).",
            "Ardışık Atom Numarası: Atom numarası ardışık olan iki element kesinlikle farklı gruptadır; aynı periyotta veya farklı sınıfta olabilir (LGS ÇIKTI) (ÖS ÇIKTI)."
          ]
        },
        {
          "heading": "Elementlerin Sınıflandırılması: Metal, Ametal, Yarı Metal ve Soygazlar",
          "paragraphs": [
            "1. Metaller: Periyodik tablonun genellikle sol ve orta kısımlarında yer alırlar. Oda sıcaklığında (cıva hariç) hepsi katı hâldedir. Isı ve elektriği çok iyi iletirler. Tel ve levha hâline getirilebilirler (şekil verilebilirler), esnektirler ve kırılgan değildirler. Isıya dayanıklı olup mutfak eşyası (çaydanlık vb.) yapımında kullanılırlar (ÖS ÇIKTI). Yüzeyleri parlaktır ve ışığı yansıtırlar.",
            "2. Ametaller: Periyodik tablonun genellikle sağ tarafında bulunurlar (Ancak 1A grubunun en üstünde bulunan Hidrojen de bir ametaldir). Oda sıcaklığında katı, sıvı veya gaz hâlde bulunabilirler. Isı ve elektriği iyi iletmezler (yalıtkandırlar). Mat görünümlüdürler. Kırılgandırlar, bu yüzden tel ve levha hâline getirilemezler (şekil verilemezler) (ÖS ÇIKTI). Periyodik tabloda sadece ametallerden oluşan hem grup (örneğin 8A) hem de periyot (örneğin 1. periyot: Hidrojen ve Helyum) bulunmaktadır (LGS ÇIKTI).",
            "3. Yarı Metaller: Metaller ile ametallerin arasında merdiven basamağı şeklinde yer alırlar (Bor ve Silisyum en bilinenleridir). Fiziksel özellikleri bakımından (parlak veya mat olabilme, şekil verilebilme) metallere, kimyasal özellikleri bakımından ametallere benzerler. Elektrik ve ısı iletkenliği metallerden kötü, ametallerden iyidir. Elektronik devrelerde (akıllı telefonlar, bilgisayarlar) çokça kullanılırlar.",
            "4. Soygazlar (Asal Gazlar): Ametaller sınıfının özel bir grubudurlar ve periyodik tablonun en sağında (8A grubunda) bulunurlar. Oda sıcaklığında tamamı tek atomlu gaz hâlindedir. Kararlı bir yapıya sahiptirler, kimyasal tepkimeye girme eğilimleri yoktur (bağ yapmazlar) (LGS ÇIKTI).",
            "Kritik İstisnalar: 1) Hidrojen İstisnası: 1A grubunun en üstünde bulunmasına rağmen metal değil, ametaldir. 2) Helyum İstisnası: Son katmanında 2 elektron bulunmasına rağmen 2A grubunda değil, kararlı yapısından dolayı 8A grubunda (soygazlar arasında) yer alır. 3) Periyodik sistemde atom numaraları ardışık (peş peşe) olan herhangi iki element kesinlikle farklı gruplarda yer alır ancak aynı periyotta veya farklı element sınıfında olabilirler (LGS ÇIKTI) (ÖS ÇIKTI)."
          ],
          "table": {
            "headers": ["Kavram / Soru Alanı", "Öğrencinin Düşündüğü (Yanlış Mantık)", "Kavram Yanılgısının Düzeltilmesi (Doğru Yaklaşım)"],
            "rows": [
              ["Grup ve Özellik İlişkisi", "1A grubunda bulunan tüm elementler metaldir ve benzer kimyasal özellik gösterir.", "1A'nın en tepesindeki Hidrojen (H) bir ametaldir; altındaki metallerle benzer kimyasal özellik göstermez (LGS ÇIKTI)."],
              ["Helyumun Yeri", "Helyumun atom numarası 2'dir, bu yüzden 2A grubunda bulunan bir Toprak Alkali Metaldir.", "Helyumun 2 elektronu vardır ve ilk katmanı tam doludur (kararlıdır). Kimyasal tepkimeye girmez, 8A soygaz grubundadır (LGS ÇIKTI)."],
              ["Periyotların Sınıf Yapısı", "Periyodik cetveldeki periyotların hepsinde mutlaka metal, ametal ve yarı metal bulunur.", "Sadece ametallerden oluşan periyot vardır (1. periyotta sadece Hidrojen ve Helyum ametalleri bulunur; hiç metal yoktur) (LGS ÇIKTI)."],
              ["Ardışık Atom Numaraları", "Atom numarası ardışık gelen iki element kesinlikle aynı element sınıfına aittir.", "Elementler soldan sağa dizilirken metalden yarı metale, oradan ametale geçer. Ardışık iki elementten biri metal, yanındaki ametal olabilir (LGS ÇIKTI)."],
              ["Soygazların Sınıfı", "Soygazlar metaller ve ametaller dışında yepyeni dördüncü bir bağımsız element sınıfıdır.", "Soygazlar bağımsız dördüncü bir sınıf değildir; Ametaller sınıfının özel şartlara sahip kararlı bir alt grubudur."]
            ]
          },
          "examNote": "📌 LGS & ÖS ÇIKMIŞ SORU KRİTİK KALIPLARI: 1) Periyodik sistemden rastgele alınan T veya kare şeklinde bir kesitteki elementlerin tamamı metal olamaz; 1A'daki Hidrojen ametaldir (ÖS ÇIKTI). 2) Helyum ve Magnezyum'un son katmanlarında eşit (2) elektron bulunmasına rağmen benzer kimyasal özellik göstermezler; Helyum 8A soygazı, Magnezyum 2A aktif metalidir (LGS ÇIKTI)."
        }
      ],
      "glossary": [
        {
          "term": "Periyot",
          "definition": "Periyodik tablodaki 7 adet yatay sıranın her biri (katman sayısını verir)."
        },
        {
          "term": "Grup",
          "definition": "Periyodik tablodaki 18 adet düşey sütun (Aynı gruptakilerin kimyasal özellikleri benzerdir)."
        },
        {
          "term": "Soygaz",
          "definition": "8A grubunda yer alan, kararlı yapıda ve tek atomlu gaz halindeki elementler."
        }
      ],
      "trueFalseQuestions": [
        {
          "id": 1,
          "statement": "Modern periyodik sistem elementlerin artan atom kütlelerine göre dizilmiştir.",
          "isCorrect": false,
          "explanation": "Modern tablo Henry Moseley tarafından artan atom numaralarına (proton sayılarına) göre dizilmiştir."
        },
        {
          "id": 2,
          "statement": "1A grubunda bulunan hidrojen elementi aktif bir metaldir.",
          "isCorrect": false,
          "explanation": "Hidrojen 1A grubunun tek ametal elementidir."
        },
        {
          "id": 3,
          "statement": "Soygazlar oda koşullarında tek atomlu gaz halinde bulunur ve bileşik oluşturmaz.",
          "isCorrect": true,
          "explanation": "Kararlı elektron yapısına sahip oldukları için reaksiyona girmezler."
        },
        {"id":4,"statement":"1A grubunda bulunan hidrojen elementi diğer 1A elementleri gibi alkali metal sınıfındadır.","isCorrect":false,"explanation":"Hidrojen 1A grubunda yer almasına rağmen metal değil, ametaldir."}
      ],
      "lgsQuestions": [
        ...sebahattinMaddeQuestions.filter(q => q.subTopicId === 'g8-u4-sub1'),
        {
          "id": 1,
          "theme": "Periyodik Tabloda Kesit Analizi",
          "cognitiveLevel": "Tablo Yorumlama",
          "contextTitle": "Komşu Elementlerin Özellikleri",
          "scenario": "Periyodik sistem kesitinde yer alan X, Y ve Z elementlerinden X ve Y aynı periyotta yan yana, X ve Z ise aynı grupta alt altadır. Z elementi X elementinin hemen altında bulunmaktadır.",
          "questionPrompt": "Bu elementlerle ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
          "options": [
            {
              "key": "A",
              "text": "Z elementinin atom numarası (proton sayısı) X elementinden daha büyüktür."
            },
            {
              "key": "B",
              "text": "X ve Y elementlerinin katman sayıları birbirinden farklıdır."
            },
            {
              "key": "C",
              "text": "X ve Z elementlerinin kimyasal özellikleri birbirine tamamen zıttır."
            },
            {
              "key": "D",
              "text": "Y elementinin periyot numarası Z elementinden fazladır."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Aynı grupta yukarıdan aşağıya inildikçe atom numarası ve katman sayısı artar; dolayısıyla X’in altında olan Z’nin proton sayısı X’ten kesinlikle büyüktür."
        },
        {
          "id": 2,
          "theme": "Elementlerin Sınıflandırılması ve Fiziksel Özellikler",
          "cognitiveLevel": "Özellik Eşleştirme ve Çıkarım",
          "contextTitle": "Laboratuvarda Üç Bilinmeyen Element",
          "scenario": "Bir fen bilimleri öğretmeni sınıfa getirdiği K, L ve M saf maddelerini inceletmiştir: K maddesi tel ve levha haline getirilebilmekte ve elektriği çok iyi iletmektedir. L maddesi kırılgan olup yüzeyi mattır ve oda sıcaklığında gaz haldedir. M maddesi ise parlak görünümlü olmasına rağmen elektrik iletkenliği metallerden az, ametallerden fazladır.",
          "questionPrompt": "Bu elementlerin periyodik sistemdeki sınıflandırılması ile ilgili hangisi doğrudur?",
          "options": [
            {
              "key": "A",
              "text": "K metal, L ametal, M yarı metaldir."
            },
            {
              "key": "B",
              "text": "K ametal, L metal, M soygazdır."
            },
            {
              "key": "C",
              "text": "K yarı metal, L metal, M ametaldir."
            },
            {
              "key": "D",
              "text": "K soygaz, L ametal, M metaldir."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Tel-levha haline gelen ve elektriği iyi ileten K metaldir. Kırılgan, mat ve gaz olan L ametaldir. İletkenliği metallerle ametaller arasında olan M yarı metaldir."
        },
        {
          "id": 3,
          "theme": "Elektron Katman Dizilimi ve Grup-Periyot İlişkisi",
          "cognitiveLevel": "Analitik Akıl Yürütme",
          "contextTitle": "Nötr Atomların Katman Modelleri",
          "scenario": "Nötr bir atomun ilk katmanında 2, ikinci katmanında 8, üçüncü (son) katmanında ise 7 elektron bulunmaktadır.",
          "questionPrompt": "Bu element ile ilgili aşağıdaki değerlendirmelerden hangisi yanlıştır?",
          "options": [
            {
              "key": "A",
              "text": "Periyodik tablonun 3. periyot 7A grubunda (halojenler) yer alır."
            },
            {
              "key": "B",
              "text": "Atom numarası (proton sayısı) 17 olan bir ametaldir."
            },
            {
              "key": "C",
              "text": "1 elektron alarak kararlı soygaz elektron dizilimine ulaşma eğilimindedir."
            },
            {
              "key": "D",
              "text": "Oda sıcaklığında elektrik akımını çok iyi ileten bir metaldir."
            }
          ],
          "correctAnswer": "D",
          "explanation": "3 katmanı olduğu için 3. periyotta, son katmanında 7 elektron olduğu için 7A grubundadır (Klor elementi). 7A grubu bir ametaldir ve elektriği iletmez."
        },
        {
          "id": 4,
          "theme": "Tarihsel Gelişim: Mendeleyev ve Moseley Karşılaştırması",
          "cognitiveLevel": "Bilimsel Tarih ve Mantık Muhakeme",
          "contextTitle": "Periyodik Sistemin Diziliş Kriteri Değişimi",
          "scenario": "Dmitri Mendeleyev elementleri artan atom kütlelerine göre dizdiğinde bazı elementlerin kimyasal özelliklerinin periyodik tekrara uymadığını fark etmiştir. Henry Moseley ise X ışınları ile yaptığı deneylerde elementlerin doğru diziliş kriterini keşfetmiştir.",
          "questionPrompt": "Modern periyodik sistemin temelini oluşturan bu değişim hakkında hangisi doğrudur?",
          "options": [
            {
              "key": "A",
              "text": "Moseley elementleri atom kütleleri yerine artan atom numaralarına (proton sayılarına) göre dizerek tutarsızlıkları çözmüştür."
            },
            {
              "key": "B",
              "text": "Moseley periyodik tablodaki tüm ametalleri tablodan çıkarıp sadece metalleri sıralamıştır."
            },
            {
              "key": "C",
              "text": "Mendeleyev günümüzde kullandığımız modern periyodik tablonun birebir aynısını eksiksiz tamamlamıştır."
            },
            {
              "key": "D",
              "text": "Moseley elementleri nötron sayılarına göre dikey sütunlara dizmiştir."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Modern periyodik sistem Henry Moseley tarafından elementlerin artan atom numaralarına (çekirdekteki proton sayılarına) göre düzenlenmiştir."
        }
      ]
    },
    {
      "id": "g8-u4-sub2",
      "title": "2. Bölüm: Fiziksel ve Kimyasal Değişimler",
      "shortTitle": "Fiziksel & Kimyasal Değişim",
      "badge": "Kavramlar & LGS",
      "pageRange": "",
      "concepts": [
        "Fiziksel Değişim",
        "Kimyasal Değişim",
        "İç Yapının Değişmesi",
        "Molekül ve Atom Bağları",
        "Renk Değişimi, Gaz Çıkışı, Çökelek",
        "Hâl Değişimleri ve Çözünme"
      ],
      "simulationId": "microscope",
      "summarySections": [
        {
          "heading": "Fiziksel ve Kimyasal Değişim Arasındaki Farklar",
          "paragraphs": [
            "Fiziksel Değişim: Maddenin sadece dış görünüşünde (şekil, büyüklük, hâl) meydana gelen değişimlerdir. Maddenin kimliği (iç yapısı) değişmez. Kesilme, yırtılma, kırılma, hâl değişimleri (erime, buharlaşma vb.) ve çözünme (iyotun, şekerin veya tuzun suda çözünmesi) olayları fizikseldir (ÖS ÇIKTI).",
            "Kimyasal Değişim: Maddenin iç yapısının (kimliğinin) değişerek yepyeni maddelere dönüşmesi olayıdır. Yanma, paslanma, çürüme, küflenme, mayalanma, pişme ve fotosentez gibi olaylar kimyasaldır.",
            "Kimyasal Değişimin Kanıtları: Bir olayda gaz çıkışı (kaynama hariç), ısı ve ışık yayılması, kalıcı renk değişimi veya çökelti (katı madde) oluşumu gözlemleniyorsa bu durum genellikle kimyasal değişimin kanıtıdır (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Renksiz iki farklı sıvı çözelti birbirine karıştırıldığında sarı renkli katı bir madde (çökelti) oluşuyorsa, bu sarı katı madde çözeltilerin donmuş hâli değil, kimyasal tepkime sonucu oluşmuş yepyeni bir maddedir (LGS ÇIKTI).",
            "Isıtılan yeşil bir katı maddenin renginin kararması ve açığa çıkan gazın kireç suyunu bulandırması, o maddenin kimyasal tepkimeye girerek yapısının değiştiğini ve yeni maddeler (gaz ve siyah katı) oluştuğunu ispatlar (LGS ÇIKTI).",
            "DİKKAT (Önemli İstisna): Her renk değişimi kimyasal tepkime değildir. Katı iyot parçaları suyun içerisine atılıp karıştırıldığında suyun rengi değişir ancak bu durum sadece iyotun suda fiziksel olarak çözünmesidir, yeni bir bağ oluşumu (kimyasal tepkime) gerçekleşmez (ÖS ÇIKTI)."
          ],
          "table": {
            "headers": ["Kavram / Soru Alanı", "Öğrencinin Düşündüğü (Yanlış Mantık)", "Kavram Yanılgısının Düzeltilmesi (Doğru Yaklaşım)"],
            "rows": [
              ["Çözünme ve Renk Değişimi", "İyot suya atıldığında suyun rengini değiştirip gözden kaybolduğu için kimyasal tepkime gerçekleşmiştir.", "Çözünme olayları (tuz, şeker, iyot) fizikseldir; molekül kimliği değişmez. Suyu buharlaştırınca aynı madde geri elde edilir (ÖS ÇIKTI)."],
              ["Çökelti Oluşumu", "İki sıvı karıştırıldığında dibe katı çöküyorsa sıvılardan biri donmuştur (hâl değiştirmiştir).", "Oluşan katı çökelti donmuş bir sıvı değil; kimyasal tepkimeyle atomların yeniden dizilmesi sonucu oluşmuş suda çözünmeyen yepyeni bir maddedir (LGS ÇIKTI)."]
            ]
          },
          "examNote": "📌 LGS & ÖS ÇIKMIŞ SORU KRİTİK KALIPLARI: Bütün hâl değişimleri ve çözünmeler (iyotun suda dağılması dâhil) fizikseldir (ÖS ÇIKTI). Nitrik aside bakır atılınca gaz çıkışı ve çözeltinin maviye dönmesi veya sarı çökelti oluşumu kimyasal değişimin kesin kanıtıdır (LGS ÇIKTI)."
        }
      ],
      "glossary": [
        {
          "term": "Fiziksel Değişim",
          "definition": "Maddenin kimliğini kaybetmeden sadece dış görünüşünde meydana gelen değişim."
        },
        {
          "term": "Kimyasal Değişim",
          "definition": "Maddenin iç yapısının ve bağlarının değişerek yeni kimlikte maddeye dönüşmesi."
        }
      ],
      "trueFalseQuestions": [
        {
          "id": 1,
          "statement": "Şekerin suda çözünmesi kimyasal değişime örnektir.",
          "isCorrect": false,
          "explanation": "Çözünme fizikseldir; su buharlaştırıldığında şeker dipte aynen geri kalır."
        },
        {
          "id": 2,
          "statement": "Demirin paslanması sırasında demirin kimyasal özellikleri değişir.",
          "isCorrect": true,
          "explanation": "Demir havadaki oksijenle tepkimeye girerek pas (demir oksit) bileşiğini oluşturur."
        },
        {
          "id": 3,
          "statement": "Sütün mayalanarak yoğurt olması fiziksel bir olaydır.",
          "isCorrect": false,
          "explanation": "Mayalanma mikroorganizmaların etkisiyle gerçekleşen kimyasal bir değişimdir."
        },
        {"id":4,"statement":"Gümüşün zamanla kararması ve elmanın kararması kimyasal değişime örnektir.","isCorrect":true,"explanation":"Kararma olayları oksijenle kimyasal tepkimeye girme (oksitlenme) sonucu oluşur ve maddenin kimliği değişir."}
      ],
      "lgsQuestions": [
        ...sebahattinMaddeQuestions.filter(q => q.subTopicId === 'g8-u4-sub2'),
        {
          "id": 1,
          "theme": "Fiziksel ve Kimyasal Olayların Tespiti",
          "cognitiveLevel": "Kavramsal Eşleştirme",
          "contextTitle": "Mutfaktaki Günlük Olaylar",
          "scenario": "Mert mutfakta şu olayları gözlemlemiştir: 1. Sıcak ekmeğin üzerindeki tereyağının erimesi. 2. Dilimlenmiş elmanın yüzeyinin açıkta kalınca kararması.",
          "questionPrompt": "Bu iki olayla ilgili hangisi doğrudur?",
          "options": [
            {
              "key": "A",
              "text": "1. olay fiziksel değişim, 2. olay kimyasal değişimdir."
            },
            {
              "key": "B",
              "text": "Her iki olayda da maddenin iç yapısı değişmiştir."
            },
            {
              "key": "C",
              "text": "1. olayda yeni bir madde oluşurken 2. olayda sadece şekil değişmiştir."
            },
            {
              "key": "D",
              "text": "Her iki olay da basitçe tersine çevrilebilen fiziksel olaylardır."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Tereyağının erimesi bir hâl değişimidir (fiziksel). Elmanın kararması ise havadaki oksijenle enzimatik reaksiyondur (kimyasal değişim)."
        },
        {
          "id": 2,
          "theme": "Molekül Modelleri ile Değişimin İncelenmesi",
          "cognitiveLevel": "Model Analizi ve Çıkarım",
          "contextTitle": "Tanecik Düzeyinde Değişim Deneyi",
          "scenario": "Öğrenciler iki farklı deney tüpündeki değişimi mikroskobik modelle çizmiştir: 1. tüpteki iki atomlu moleküller arasındaki mesafe artmış ancak atomlar arası bağlar aynen kalmıştır. 2. tüpteki moleküllerin atomları arasındaki bağlar kopmuş ve farklı renkli atomlar birleşerek yeni moleküller oluşturmuştur.",
          "questionPrompt": "Bu tanecik modelleri hakkında aşağıdaki ifadelerden hangisi doğrudur?",
          "options": [
            {
              "key": "A",
              "text": "1. tüpte sadece fiziksel değişim gerçekleşmiş, 2. tüpte ise kimyasal tepkime gerçekleşmiştir."
            },
            {
              "key": "B",
              "text": "Her iki tüpte de maddeler kimliklerini kaybetmeden aynı kalmıştır."
            },
            {
              "key": "C",
              "text": "1. tüpte yeni bağlar oluşmuş, 2. tüpte ise hiçbir bağ değişmemiştir."
            },
            {
              "key": "D",
              "text": "2. tüpteki olay buharlaşmaya, 1. tüpteki olay ise yanmaya örnektir."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Molekül yapısı değişmeden sadece tanecikler arası mesafenin değişmesi fizikseldir (hâl değişimi). Atomlar arası bağların kopup yeni bağların kurulması kimyasal değişimdir."
        },
        {
          "id": 3,
          "theme": "Mumun Yanması ve Erimesi Arasındaki Fark",
          "cognitiveLevel": "Çok Boyutlu Deney Muhakemesi",
          "contextTitle": "Yanan Bir Mumun İki Ayrı Bölgesi",
          "scenario": "Laboratuvarda bir mum yakılmış ve şu iki gözlem kaydedilmiştir: I. Mumun fitili alev alarak siyah duman ve karbondioksit gazı yaymaktadır. II. Mumun gövdesindeki katı parafin ısı etkisiyle sıvılaşarak aşağı doğru akmaktadır.",
          "questionPrompt": "I ve II numaralı gözlemler hakkında yapılan aşağıdaki yorumlardan hangisi doğrudur?",
          "options": [
            {
              "key": "A",
              "text": "I numaralı olay kimyasal değişim (yanma), II numaralı olay fiziksel değişimdir (erime)."
            },
            {
              "key": "B",
              "text": "Her iki olay da parafinin kimyasal yapısını geri dönülmez şekilde değiştirmiştir."
            },
            {
              "key": "C",
              "text": "Fitilin yanması sadece fiziksel bir şekil değişikliğidir."
            },
            {
              "key": "D",
              "text": "Parafinin erimesi sırasında yeni kimyasal bağlar oluşur ve yeni madde meydana gelir."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Fitilin yanması kimyasal bir reaksiyondur (yanma tepkimesi). Mumun erimesi ise fiziksel bir hâl değişimidir; sıvı parafin soğuyunca tekrar katı parafıne dönüşür."
        }
      ]
    },
    {
      "id": "g8-u4-sub3",
      "title": "3. Bölüm: Kimyasal Tepkimeler",
      "shortTitle": "Kimyasal Tepkimeler",
      "badge": "Kavramlar & LGS",
      "pageRange": "",
      "concepts": [
        "Kimyasal Tepkime",
        "Tepkimeye Girenler",
        "Ürünler",
        "Bağ Kırılımı ve Bağ Oluşumu",
        "Kütlenin Korunumu Kanunu (Lavoisier)",
        "Atom Sayısı ve Cinsi Korunumu",
        "Yanma Tepkimesi"
      ],
      "simulationId": "microscope",
      "summarySections": [
        {
          "heading": "Kimyasal Tepkimenin Gerçekleşme Süreci (Bağ Kırılımı ve Oluşumu)",
          "paragraphs": [
            "Maddelerin kimyasal değişime uğrayarak iç yapılarının (kimliklerinin) değişmesi ve yepyeni özelliklere sahip maddelere dönüşmesi sürecine kimyasal tepkime denir.",
            "Kimyasal tepkime sürecinde, tepkimeye giren maddelerin (reaktiflerin) atomları veya molekülleri arasındaki var olan eski kimyasal bağlar koparılır (kırılır) (LGS ÇIKTI).",
            "Bağları kırılan bu atomlar, yeniden düzenlenerek birbirleri arasında yepyeni kimyasal bağlar oluştururlar ve böylece kimliği tamamen farklı yeni ürünler meydana gelir (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Tepkime İpuçları ve Kanıtları: Örneğin; sirke içerisine kabartma tozu eklendiğinde baloncuklar hâlinde gaz çıkışının gözlemlenmesi kimyasal bir tepkimedir (ÖS ÇIKTI). Nitrik asit (HNO3) çözeltisi içerisine bakır parçaları atıldığında renkli bir gaz çıkışının olması, çözeltinin renginin maviye dönmesi ve tepkime kabının ısınması olayları maddenin iç yapısının değiştiğinin ve kimyasal tepkimenin kesin kanıtlarıdır (LGS ÇIKTI).",
            "Isıtılan yeşil bir katı maddenin kararması ve açığa çıkan gazın kireç suyunu bulandırması da yeni maddeler oluştuğunun ispatıdır (LGS ÇIKTI)."
          ],
          "keyPoints": [
            "Bağ Kırılımı & Oluşumu: Eski bağlar kopar, yeni kimyasal bağlar kurulur (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Korunan Özellikler: Atomların cinsi (türü) ve toplam atom sayısı hiçbir zaman değişmez, daima korunur. Toplam kütle açık ve kapalı tüm sistemlerde daima korunur.",
            "Değişebilen Özellikler: Fiziksel hâl, hacim, kimyasal özellik ve molekül sayısı değişebilir."
          ]
        },
        {
          "heading": "Kütlenin Korunumu Kanunu ve Grafik Yorumlama",
          "paragraphs": [
            "Kimyasal tepkimelerde, tepkimeye giren maddelerin kütleleri toplamı, tepkime sonucu oluşan ürünlerin kütleleri toplamına her zaman eşittir (Lavoisier Kanunu).",
            "Sirke ve kabartma tozu karıştırıldığında bir kimyasal tepkime gerçekleşir ve karbondioksit gazı açığa çıkar. Eğer bu tepkime kapalı bir kapta gerçekleştirilirse (veya açığa çıkan gaz hapsedilirse), tepkime öncesi ve sonrası ölçülen toplam kütle tamamen aynı çıkar (ÖS ÇIKTI)."
          ],
          "table": {
            "headers": ["Kavram / Soru Alanı", "Öğrencinin Düşündüğü (Yanlış Mantık)", "Kavram Yanılgısının Düzeltilmesi (Doğru Yaklaşım)"],
            "rows": [
              ["Atomların Cinsi ve Dönüşüm", "Maddeler başka maddelere dönüştüğü için atomlar yok olur ve yeni cinsten atomlar oluşur.", "Kimyasal tepkimelerde atomlar asla yok olmaz veya yeni bir atom türü ortaya çıkmaz. Sadece var olan atomlar arasındaki bağlar kopup yeniden dizilir (LGS ÇIKTI)."],
              ["Açık Kaplarda Kütle Korunumu", "Ağzı açık kapta sirke ve kabartma tozu karıştırıldığında terazideki değer azaldığı için kütle yok olmuştur.", "Kütle kapalı veya açık her sistemde daima korunur. Terazideki azalma gazın havaya karışmasından kaynaklanır; gaz dahil edildiğinde toplam kütle başlangıçla tamamen eşittir (ÖS ÇIKTI)."]
            ]
          },
          "examNote": "📌 LGS & ÖS ÇIKMIŞ SORU KRİTİK KALIPLARI: 1) Kapalı kapta katı kütlesi azalıp gaz kütlesi artsa bile \"toplam kütle\" grafikte düz bir çizgi halinde daima sabit kalır (LGS ÇIKTI). 2) Ağzı açık kapta gaz çıkışı olan tepkimede terazinin hafiflemesi kütlenin korunmadığı anlamına gelmez; uçan gaz da üründür (ÖS ÇIKTI)."
        }
      ],
      "glossary": [
        {
          "term": "Kimyasal Tepkime",
          "definition": "Atomlar arası bağların kopup yeni bağların oluşmasıyla yeni maddelerin meydana gelmesi."
        },
        {
          "term": "Kütlenin Korunumu",
          "definition": "Kimyasal bir tepkimede yoktan madde var edilemeyeceği ve var olan maddenin yok olamayacağı ilkesi."
        }
      ],
      "trueFalseQuestions": [
        {
          "id": 1,
          "statement": "Kimyasal tepkimelerde tepkimeye giren maddelerin atom cinsleri değişerek yeni atomlar oluşur.",
          "isCorrect": false,
          "explanation": "Atom cinsi asla değişmez; sadece atomlar arasındaki bağlar kopup yeniden dizilir."
        },
        {
          "id": 2,
          "statement": "Kapalı kapta gerçekleşen tepkimelerde toplam kütle daima korunur.",
          "isCorrect": true,
          "explanation": "Lavoisier kütlenin korunumu kanununa göre girenler = ürünler kütlesidir."
        },
        {
          "id": 3,
          "statement": "Kimyasal tepkimelerde molekül sayısı her zaman korunmak zorundadır.",
          "isCorrect": false,
          "explanation": "Molekül sayısı artabilir, azalabilir veya sabit kalabilir."
        },
        {"id":4,"statement":"Kimyasal tepkimelerde toplam kütle, atom sayısı ve atom türü daima korunur.","isCorrect":true,"explanation":"Kütlenin Korunumu Kanunu gereğince kimyasal tepkimeye giren maddelerin kütleleri toplamı ürünlerin kütleleri toplamına eşittir."},
        {"id":5,"statement":"Kimyasal tepkime gerçekleşirken kabın toplam molekül sayısı daima sabit kalmak zorundadır.","isCorrect":false,"explanation":"Atom sayısı ve türü daima korunur ancak molekül sayısı değişebilir (örneğin 2H2 + O2 -> 2H2O tepkimesinde 3 molekül girip 2 molekül çıkar)."}
      ],
      "lgsQuestions": [
        ...sebahattinMaddeQuestions.filter(q => q.subTopicId === 'g8-u4-sub3'),
        {
          "id": 1,
          "theme": "Kütlenin Korunumu Problemi",
          "cognitiveLevel": "Matematiksel Muhakeme",
          "contextTitle": "Kimyasal Tepkimede Kütlenin Korunumu",
          "scenario": "A + B ➔ AB tepkimesinde 15 gram A maddesi ile bir miktar B maddesi tamamen tepkimeye girerek 70 gram AB bileşiği oluşturmuştur.",
          "questionPrompt": "Kütlenin korunumu kanununa göre tepkimede kullanılan B maddesi kaç gramdır?",
          "options": [
            {
              "key": "A",
              "text": "55 gram"
            },
            {
              "key": "B",
              "text": "85 gram"
            },
            {
              "key": "C",
              "text": "70 gram"
            },
            {
              "key": "D",
              "text": "50 gram"
            }
          ],
          "correctAnswer": "A",
          "explanation": "Girenler Kütlesi = Ürünler Kütlesi kuralından: mA + mB = mAB ➔ 15 + mB = 70 ➔ mB = 55 gramdır."
        },
        {
          "id": 2,
          "theme": "Kimyasal Tepkime Grafiği ve Reaktif-Ürün Analizi",
          "cognitiveLevel": "Grafik Analizi ve Problem Çözme",
          "contextTitle": "Kapalı Kaptaki Kütle Değişim Grafiği",
          "scenario": "Kapalı bir kapta gerçekleşen tepkimeye ait grafikte: X maddesi 50 gramdan 10 grama düşmüş, Y maddesi 30 gramdan tamamen sıfıra inmiş, Z maddesi ise sıfırdan başlayarak artmıştır.",
          "questionPrompt": "Bu tepkime denklemi ve oluşan Z maddesinin kütlesi hangisinde doğru verilmiştir?",
          "options": [
            {
              "key": "A",
              "text": "Tepkime: X + Y ➔ Z ; Oluşan Z kütlesi: 70 gramdır."
            },
            {
              "key": "B",
              "text": "Tepkime: Z ➔ X + Y ; Oluşan Z kütlesi: 80 gramdır."
            },
            {
              "key": "C",
              "text": "Tepkime: X ➔ Y + Z ; Oluşan Z kütlesi: 40 gramdır."
            },
            {
              "key": "D",
              "text": "Tepkime: X + Z ➔ Y ; Oluşan Z kütlesi: 20 gramdır."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Kütlesi azalanlar girenlerdir: Harcanan X = 50 - 10 = 40 g. Harcanan Y = 30 g. Kütlesi artan Z üründür: Z = 40 + 30 = 70 g. Denklem X + Y ➔ Z şeklindedir."
        },
        {
          "id": 3,
          "theme": "Atom Sayısı ve Cinsi Korunumu",
          "cognitiveLevel": "Denklem Denkleştirme ve Mantık",
          "contextTitle": "Bilinmeyen Bileşiğin Formülünü Bulma",
          "scenario": "Bir kimyasal tepkimenin denklemi şöyledir: C3H8 + 5 O2 ➔ 3 CO2 + 4 X. Tepkimede giren ve çıkan atom sayıları kütlenin korunumu yasası gereği birbirine eşittir.",
          "questionPrompt": "Buna göre tepkime denkleminde X ile gösterilen ürünün kimyasal formülü nedir?",
          "options": [
            {
              "key": "A",
              "text": "H2O (Su)"
            },
            {
              "key": "B",
              "text": "H2 (Hidrojen gazı)"
            },
            {
              "key": "C",
              "text": "CO (Karbonmonoksit)"
            },
            {
              "key": "D",
              "text": "CH4 (Metan)"
            }
          ],
          "correctAnswer": "A",
          "explanation": "Girenlerde 3 C, 8 H, 10 O vardır. Ürünlerde 3 C ve 6 O (3 CO2 içinde) mevcuttur. Geriye 8 H ve 4 O kalır. 4 X içinde 8 H ve 4 O olması için X = H2O olmalıdır."
        },
        {
          "id": 4,
          "theme": "Açık Kapta Yanma Tepkimesi ve Kütle Değişimi",
          "cognitiveLevel": "Kontrollü Deney ve Kavram Yanılgısı",
          "contextTitle": "Hassas Terazide Ağzı Açık Kapta Kömür Yakılması",
          "scenario": "Bir öğrenci hassas terazi üzerine koyduğu ağzı açık cam kapta 100 gram odun kömürünü yakmıştır. Yanma bittikten sonra terazide kalan külün kütlesini 15 gram olarak ölçmüş ve \"Kütlenin korunumu kanunu yanma olaylarında geçerli değildir\" hipotezini kurmuştur.",
          "questionPrompt": "Öğrencinin vardığı sonuçtaki bilimsel hata ve doğrusu hangisinde belirtilmiştir?",
          "options": [
            {
              "key": "A",
              "text": "Hata yapmıştır; yanma sonucu oluşan karbondioksit ve su buharı gaz halinde havaya karıştığı için kap hafiflemiştir, gazlar toplansaydı kütle korunurdu."
            },
            {
              "key": "B",
              "text": "Haklıdır; çünkü kömür yanarken atomların bir kısmı enerjiye dönüşerek tamamen yok olur."
            },
            {
              "key": "C",
              "text": "Hata yapmıştır; çünkü kömür yanarken havadaki oksijeni içine çekerek katılaşmıştır."
            },
            {
              "key": "D",
              "text": "Haklıdır; katı maddeler yandığında kütle kaybı fizik kuralıdır."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Açık kapta gaz çıkışı olan tepkimelerde gazlar havaya uçar. Deney kapalı kapta yapılsaydı giren katı + gaz kütlesi ile ürün katı + gaz kütlesinin tam eşit olduğu görülürdü."
        }
      ]
    },
    {
      "id": "g8-u4-sub4",
      "title": "4. Bölüm: Asitler ve Bazlar",
      "shortTitle": "Asitler & Bazlar",
      "badge": "Kavramlar & LGS",
      "pageRange": "",
      "concepts": [
        "Asitler (H+ İyonu)",
        "Bazlar (OH- İyonu)",
        "pH Cetveli (0-14)",
        "Belirteçler (Turnusol, Fenolftalein, Metil Oranj)",
        "Nötrleşme Tepkimesi",
        "Asit Yağmurları",
        "Tuz Ruhu, Kezzap, Zaç Yağı, Sud-kostik"
      ],
      "simulationId": "microscope",
      "summarySections": [
        {
          "heading": "Asitlerin ve Bazların Karşılaştırmalı Özellikleri",
          "paragraphs": [
            "Asitler: Suda çözündüğünde ortama hidrojen iyonu (H+) veren maddelerdir. Tatları ekşidir (limon, sirke, elma, yoğurt). Mavi turnusol kâğıdını KIRMIZIYA çevirirler. pH değerleri 0 ile 7 arasındadır (0’a yaklaştıkça asitlik kuvveti artar). Metallerle tepkimeye girerek hidrojen (H2) gazı açığa çıkarırlar ve metalleri aşındırırlar. Mermer yüzeyleri aşındırırlar. Sulu çözeltileri elektrik akımını iletir.",
            "Bazlar: Suda çözündüğünde ortama hidroksit iyonu (OH-) veren maddelerdir. Tatları acıdır ve ele kayganlık hissi verirler (sabun, deterjan, diş macunu, şampuan). Kırmızı turnusol kâğıdını MAVİYE çevirirler. pH değerleri 7 ile 14 arasındadır (14’e yaklaştıkça bazlık kuvveti artar). Cam ve porselen eşyaları zamanla aşındırıp matlaştırırlar. Sulu çözeltileri elektrik akımını iletir."
          ],
          "table": {
            "headers": [
              "Özellik",
              "Asitler (0 < pH < 7)",
              "Bazlar (7 < pH < 14)"
            ],
            "rows": [
              [
                "Tat ve His",
                "Ekşidir, tahriş edicidir",
                "Acıdır, ele kayganlık hissi verir"
              ],
              [
                "Suda Verdiği İyon",
                "H+ (Hidrojen)",
                "OH- (Hidroksit)"
              ],
              [
                "Turnusol Kâğıdı",
                "Maviyi KIRMIZI yapar",
                "Kırmızıyı MAVİ yapar"
              ],
              [
                "Fenolftalein Damlatılınca",
                "Renk değişmez (Renksiz)",
                "PEMBE / FUŞYA renge döner"
              ],
              [
                "Metil Oranj Damlatılınca",
                "KIRMIZI renge döner",
                "SARI renge döner"
              ],
              [
                "Aşındırdığı Yüzeyler",
                "Metaller ve Mermer",
                "Cam ve Porselen"
              ],
              [
                "Önemli Temsilciler",
                "HCl (Tuz ruhu), HNO3 (Kezzap), H2SO4 (Zaç yağı)",
                "NaOH (Sud-kostik), KOH (Potas-kostik), NH3 (Amonyak)"
              ]
            ]
          }
        },
        {
          "heading": "Nötrleşme Tepkimesi, Ev Kimyasalları ve Asit Yağmurları",
          "paragraphs": [
            "Nötrleşme Tepkimesi: Bir asit ile bir bazın tepkimeye girerek birbirinin etkisini yok etmesi ve tuz ile su oluşturmasıdır: Asit + Baz ➔ Tuz + Su (HCl + NaOH ➔ NaCl + H2O). pH değeri tam 7 olan saf su ve nötr tuz oluşur.",
            "Ev Kimyasalları Uyarısı: Tuz ruhu (asit) ile çamaşır suyu (baz) ASLA birbirine karıştırılmamalıdır! Karıştırıldığında ölümcül zehirli klor (Cl2) gazı açığa çıkar.",
            "Asit Yağmurları: Fosil yakıtların yanması sonucu bacalardan ve egzozlardan çıkan kükürtdioksit (SO2), azotdioksit (NO2) ve karbondioksit (CO2) gazları atmosferdeki su buharı ile tepkimeye girerek sülfürik asit (H2SO4) ve nitrik asite (HNO3) dönüşür. Yağan asit yağmurları (pH < 5) tarihi mermer heykelleri, metal köprüleri, ormanları tahrip eder ve suları zehirler."
          ],
          "examNote": "📌 LGS BİLGİSİ: Amonyak (NH3) yapısında hidrojen (H) bulunmasına rağmen bir BAZDIR! Suda çözündüğünde ortama OH- verir: NH3 + H2O ➔ NH4+ + OH-."
        }
      ],
      "glossary": [
        {
          "term": "pH Cetveli",
          "definition": "0 ile 14 arasında maddelerin asitlik (0-7), nötrlük (7) ve bazlık (7-14) derecesini gösteren ölçek."
        },
        {
          "term": "Nötrleşme",
          "definition": "Asit ve bazın tepkimeye girerek tuz ve su oluşturması."
        },
        {
          "term": "Asit Yağmuru",
          "definition": "Fosil yakıt gazlarının atmosferde asite dönüşerek yağış şeklinde yeryüzüne inmesi."
        }
      ],
      "trueFalseQuestions": [
        {
          "id": 1,
          "statement": "pH değeri 2 olan bir çözelti, pH değeri 5 olan çözeltiye göre daha kuvvetli bir asittir.",
          "isCorrect": true,
          "explanation": "pH 0’a yaklaştıkça asitlik kuvveti artar."
        },
        {
          "id": 2,
          "statement": "Amonyak (NH3) yapısında H atomu içerdiği için asidik özellik gösterir.",
          "isCorrect": false,
          "explanation": "Amonyak kuvvetli bir bazdır, suda OH- iyonu oluşturur."
        },
        {
          "id": 3,
          "statement": "Çamaşır suyu ile tuz ruhu birlikte karıştırılarak daha etkili temizlik yapılmalıdır.",
          "isCorrect": false,
          "explanation": "KESİNLİKLE HAYIR! Zehirli klor gazı çıkar ve ölüme yol açabilir."
        },
        {"id":4,"statement":"Asit çözeltileri mavi turnusol kağıdını kırmızıya, baz çözeltileri ise kırmızı turnusolu maviye dönüştürür.","isCorrect":true,"explanation":"Turnusol belirteci asidik ortamda kırmızı, bazik ortamda mavi renk verir."}
      ],
      "lgsQuestions": [
        ...sebahattinMaddeQuestions.filter(q => q.subTopicId === 'g8-u4-sub4'),
        {
          "id": 1,
          "theme": "Ayıraçlar ve pH Belirleme",
          "cognitiveLevel": "Deney Yorumlama",
          "contextTitle": "Asit-Baz Ayıracı ve pH Belirteci",
          "scenario": "İsmail elindeki P sıvısına mavi turnusol batırdığında kırmızıya döndüğünü, R sıvısına kırmızı turnusol batırdığında ise maviye döndüğünü gözlemlemiştir.",
          "questionPrompt": "P ve R sıvılarının özellikleri ve pH aralıkları ile ilgili hangisi doğrudur?",
          "options": [
            {
              "key": "A",
              "text": "P sıvısı asidiktir (pH < 7), R sıvısı ise baziktir (pH > 7)."
            },
            {
              "key": "B",
              "text": "P sıvısı camı matlaştırır, R sıvısı metali aşındırır."
            },
            {
              "key": "C",
              "text": "Her iki sıvının da pH değeri 7’dir."
            },
            {
              "key": "D",
              "text": "P sıvısının tadı acı, R sıvısının tadı ekşidir."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Maviyi kırmızıya çeviren P asittir (pH 0-7 arası); kırmızıyı maviye çeviren R bazdır (pH 7-14 arası)."
        },
        {
          "id": 2,
          "theme": "Asit ve Bazların Madde Üzerindeki Etkileri",
          "cognitiveLevel": "Materyal Seçimi ve Risk Değerlendirmesi",
          "contextTitle": "Laboratuvarda Asit ve Baz Saklama Kapları",
          "scenario": "Bir kimya laboratuvarında hidroklorik asit (HCl) ve sodyum hidroksit (NaOH) çözeltileri saklanmak istenmektedir. Laboratuvarda mermer, alüminyum metal, cam ve plastik kaplar bulunmaktadır.",
          "questionPrompt": "Bu kimyasalların güvenle saklanabileceği kap türleri hangisinde doğru eşleştirilmiştir?",
          "options": [
            {
              "key": "A",
              "text": "HCl plastik veya cam kapta; NaOH plastik veya metal kapta saklanabilir."
            },
            {
              "key": "B",
              "text": "HCl alüminyum metal kapta; NaOH mermer kapta saklanmalıdır."
            },
            {
              "key": "C",
              "text": "Her iki kimyasal da sadece mermer bloklar içinde saklanabilir."
            },
            {
              "key": "D",
              "text": "HCl ve NaOH birbirine karıştırılarak tek bir cam şişede saklanmalıdır."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Asitler (HCl) metalleri ve mermeri aşındırır, bu yüzden cam veya plastikte saklanır. Bazlar (NaOH) cam ve porseleni matlaştırıp aşındırır, metal veya plastikte saklanır."
        },
        {
          "id": 3,
          "theme": "Nötrleşme Tepkimesi ve pH Değişimi",
          "cognitiveLevel": "Deneysel Grafik Analizi",
          "contextTitle": "Büretten Asit Damlatılan Baz Çözeltisi",
          "scenario": "İçinde başlangıçta pH değeri 12 olan 100 mL NaOH çözeltisi bulunan behere, büret yardımıyla damla damla pH değeri 1 olan HCl çözeltisi eklenmektedir.",
          "questionPrompt": "Bu deney süresince kaptaki çözeltinin pH değerindeki değişim nasıl gerçekleşir?",
          "options": [
            {
              "key": "A",
              "text": "pH değeri 12’den başlayıp 7’ye doğru kademeli olarak düşer, asit eklenmeye devam edilirse 7’nin altına iner."
            },
            {
              "key": "B",
              "text": "pH değeri daima 12’de sabit kalır, hiçbir değişiklik olmaz."
            },
            {
              "key": "C",
              "text": "pH değeri doğrudan 14’e yükselir ve çözelti daha kuvvetli baz olur."
            },
            {
              "key": "D",
              "text": "Çözelti aniden gaz haline geçerek beheri tamamen terk eder."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Baz üzerine asit eklendikçe H+ ve OH- birleşerek nötrleşir (tuz ve su oluşur). Çözeltinin pH’ı 12’den 7’ye (nötr nokta) ve asit fazlasıyla 7’nin altına düşer."
        },
        {
          "id": 4,
          "theme": "Asit Yağmurlarının Nedenleri ve Ekolojik Sonuçları",
          "cognitiveLevel": "Çevre Sorunu ve Mantık Muhakeme",
          "contextTitle": "Sanayi Şehrinde Yağan Yağmurun Analizi",
          "scenario": "Termik santrallerin ve fabrikaların yoğun olduğu bir sanayi bölgesinde yağan yağmur sularının pH değeri 4,2 olarak ölçülmüştür. Bölgedeki tarihi mermer heykellerin yüzeylerinde erimeler, çam ormanlarında kuruma ve göldeki balık ölümlerinde artış gözlenmiştir.",
          "questionPrompt": "Bu duruma yol açan gazlar ve alınması gereken önlem hangisinde doğru verilmiştir?",
          "options": [
            {
              "key": "A",
              "text": "Kükürtdioksit (SO2) ve azotdioksit (NO2) gazları asit yağmuru oluşturmuştur; fabrika bacalarına filtre takılmalı ve yenilenebilir enerjiye geçilmelidir."
            },
            {
              "key": "B",
              "text": "Havadaki oksijen gazının aşırı artması suyun pH’ını düşürmüştür; fabrikalarda daha çok kömür yakılmalıdır."
            },
            {
              "key": "C",
              "text": "Yağmur suyuna amonyak gazı karıştığı için heykeller bazik aşınmaya uğramıştır."
            },
            {
              "key": "D",
              "text": "Ozon tabakasının kalınlaşması yağmur suyunu asitleştirmiştir; egzoz gazları artırılmalıdır."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Fosil yakıt gazları (SO2, NO2) su buharıyla asitlere (H2SO4, HNO3) dönüşerek asit yağmurlarını (pH < 5) oluşturur. Çözüm baca filtreleri ve temiz enerjidir."
        }
      ]
    },
    {
      "id": "g8-u4-sub5",
      "title": "5. Bölüm: Maddenin Isı ile Etkileşimi",
      "shortTitle": "Maddenin Isı ile Etkileşimi",
      "badge": "Kavramlar & LGS",
      "pageRange": "",
      "concepts": [
        "Isı ve Sıcaklık Farkı",
        "Öz Isı (c)",
        "Sıcaklık Değişimi ve Kütle İlişkisi",
        "Erime Isısı (Le)",
        "Buharlaşma Isısı (Lb)",
        "Isınma ve Soğuma Grafikleri",
        "Hâl Değişimi Sabit Sıcaklık Kuralı"
      ],
      "simulationId": "microscope",
      "summarySections": [
        {
          "heading": "Öz Isı Kavramı ve Sıcaklık Artışına Etkisi",
          "paragraphs": [
            "Öz Isı (c): Bir maddenin 1 gramının sıcaklığını 1 °C artırmak için gereken ısı enerjisi miktarıdır. Birimi J/g °C’tur. Saf maddeler için AYIRT EDİCİ bir özelliktir (Madde miktarına bağlı değildir).",
            "Öz Isının Fiziksel Anlamı: Öz ısısı büyük olan maddeler GEÇ ISINIR, GEÇ SOĞUR (Su c=4,18 J/g °C). Öz ısısı küçük olan maddeler ise ÇABUK ISINIR, ÇABUK SOĞUR (Demir c=0,46 J/g °C). Bu yüzden denizler karalara göre geç ısınıp geç soğur; çorba tenceresinin metal kısmı hemen ısınırken içindeki su henüz ılıktır.",
            "Kütle ile İlişki: Aynı cins maddeden kütlesi az olan, eşit ısı verildiğinde daha ÇABUK ve ÇOK ısınır (50 ml su, 100 ml sudan daha çabuk kaynar)."
          ],
          "keyPoints": [
            "Eşit kütleli farklı sıvılara eşit ısı verildiğinde: Öz ısısı KÜÇÜK olan sıvının sıcaklık artışı en FAZLA olur.",
            "Hâl Değişimi Isıları: Erime ısısı (Le), Donma ısısı (Ld), Buharlaşma ısısı (Lb), Yoğuşma ısısı (Ly). Saf maddeler için ayırt edicidir.",
            "Hâl Değişimi Sırasında Sıcaklık: Saf maddeler hâl değiştirirken (erirken, donarken, kaynarken) sıcaklıkları KESİNLİKLE SABİT KALIR! Alınan veya verilen ısı sıcaklığı artırmaz, tanecikler arası bağların kopmasına veya kurulmasına harcanır."
          ]
        },
        {
          "heading": "Isınma ve Soğuma Eğrileri & Günlük Yaşam Örnekleri",
          "paragraphs": [
            "Sıcaklık-Zaman Grafiğinde Düz Çizgiler: Grafikte sıcaklığın yatay seyrettiği (sabit kaldığı) bölgeler maddenin HÂL DEĞİŞTİRDİĞİ anlardır. Bu aralıklarda madde heterojendir (Katı+Sıvı veya Sıvı+Gaz bir aradadır).",
            "Buharlaşırken Isı Alma Örnekleri: Ele dökülen kolonyanın serinlik vermesi, denizden çıkınca üşümemiz, kesilen karpuzun güneşe konunca soğuması, toprak testideki suyun soğuk kalması, sıcak yaz günlerinde dükkân önlerine su serpilmesi."
          ],
          "examNote": "📌 LGS GRAFİK SORUSU: Grafikte 2 kez sıcaklık sabit kalmışsa (2 plato) madde başlangıçta KATIDIR (1. plato erime, 2. plato kaynamadır)."
        }
      ],
      "glossary": [
        {
          "term": "Öz Isı",
          "definition": "1 gram saf maddenin sıcaklığını 1 °C değiştirmek için gereken ısı miktarı (c)."
        },
        {
          "term": "Erime Isısı",
          "definition": "Erime sıcaklığındaki 1 gram katıyı sıvı yapmak için gereken ısı (Le)."
        }
      ],
      "trueFalseQuestions": [
        {
          "id": 1,
          "statement": "Öz ısısı büyük olan maddeler öz ısısı küçük olanlara göre daha çabuk ısınır.",
          "isCorrect": false,
          "explanation": "Öz ısısı büyük olan geç ısınır ve geç soğur."
        },
        {
          "id": 2,
          "statement": "Saf maddeler hâl değiştirirken sıcaklıkları sabit kalır.",
          "isCorrect": true,
          "explanation": "Alınan ısı tanecikler arası bağları değiştirmeye harcanır."
        },
        {
          "id": 3,
          "statement": "Karpuz kesilip güneşte bekletildiğinde yüzeyindeki su buharlaşırken karpuzdan ısı alır ve karpuz soğur.",
          "isCorrect": true,
          "explanation": "Buharlaşma ısı alan (endotermik) bir olaydır."
        },
        {"id":4,"statement":"Öz ısısı büyük olan maddeler geç ısınır ve geç soğur.","isCorrect":true,"explanation":"Öz ısı bir maddenin 1 gramının sıcaklığını 1 °C artırmak için gereken ısı miktarıdır; öz ısısı büyük olan madde daha zor ısınır ve soğurken çevreye daha uzun süre ısı verir."}
      ],
      "lgsQuestions": [
        ...sebahattinMaddeQuestions.filter(q => q.subTopicId === 'g8-u4-sub5'),
        {
          "id": 1,
          "theme": "Öz Isı ve Sıcaklık Değişimi",
          "cognitiveLevel": "Deney ve Grafik Analizi",
          "contextTitle": "Farklı Sıvıların Öz Isı Değerleri",
          "scenario": "Başlangıç sıcaklıkları 35 °C ve kütleleri eşit olan P, R ve S sıvıları özdeş ısıtıcılarla eşit süre ısıtıldığında son sıcaklıkları sırasıyla 45 °C, 60 °C ve 80 °C olarak ölçülmüştür.",
          "questionPrompt": "Bu sıvıların öz ısılarının (cP, cR, cS) büyükten küçüğe doğru sıralanışı hangisidir?",
          "options": [
            {
              "key": "A",
              "text": "cP > cR > cS"
            },
            {
              "key": "B",
              "text": "cS > cR > cP"
            },
            {
              "key": "C",
              "text": "cR > cP > cS"
            },
            {
              "key": "D",
              "text": "Üç sıvının öz ısıları birbirine eşittir."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Eşit ısı verildiğinde sıcaklığı en az artan sıvının (P sıvısı 10 °C arttı) öz ısısı en büyüktür. Sıcaklığı en çok artan sıvının (S sıvısı 45 °C arttı) öz ısısı en küçüktür. Sıralama cP > cR > cS şeklindedir."
        },
        {
          "id": 2,
          "theme": "Isınma Eğrisi ve Hâl Değişimi Aşamaları",
          "cognitiveLevel": "Grafik Yorumlama ve Termodinamik",
          "contextTitle": "Saf Bir Katının Sıcaklık-Zaman Grafiği",
          "scenario": "İlk sıcaklığı -10 °C olan saf bir katı özdeş ısıtıcıyla ısıtılmaktadır. Sıcaklık 0 °C’ye geldiğinde 4 dakika boyunca sabit kalmış, ardından 100 °C’ye yükselmiş ve 100 °C’de 6 dakika boyunca tekrar sabit kalmıştır.",
          "questionPrompt": "Bu maddenin sıcaklık-zaman grafiği ve fiziksel hâlleri hakkında hangisi doğrudur?",
          "options": [
            {
              "key": "A",
              "text": "Madde iki kez hâl değiştirmiştir; 0 °C erime noktası, 100 °C ise kaynama noktasıdır."
            },
            {
              "key": "B",
              "text": "Maddenin sıcaklığı sabit kaldığı dakikalarda ısıtıcı kapatılmıştır."
            },
            {
              "key": "C",
              "text": "Sıcaklığın sabit kaldığı aralıklarda madde tamamen tek fazlı homojendir."
            },
            {
              "key": "D",
              "text": "Bu madde saf bir katı değil heterojen bir karışımdır."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Saf maddeler hâl değiştirirken sıcaklıkları sabit kalır. İki plato gözlendiğine göre başlangıçta katı olan madde 0 °C’de erimiş, 100 °C’de kaynamıştır (örneğin saf su/buz)."
        },
        {
          "id": 3,
          "theme": "Günlük Yaşamda Buharlaşma Isısı ve Soğuma",
          "cognitiveLevel": "Gerçek Hayat Uygulamaları",
          "contextTitle": "Toprak Testideki Suyun Soğuk Kalması",
          "scenario": "Yazın sıcağında toprak testiye konan suyun plastik şişedeki suya göre daha serin kaldığı ve testinin dış yüzeyinin daima nemli olduğu görülür. Benzer şekilde denizden çıkan bir kişi rüzgâr estiğinde titremeye başlar.",
          "questionPrompt": "Bu iki durumun altında yatan ortak bilimsel ilke aşağıdakilerden hangisidir?",
          "options": [
            {
              "key": "A",
              "text": "Sıvıların buharlaşırken temas ettikleri yüzeyden ısı alması sonucu o yüzeyin sıcaklığının düşmesi."
            },
            {
              "key": "B",
              "text": "Toprak testinin suyu dışarı sızdırarak içine hava çekmesi ve basınç oluşturması."
            },
            {
              "key": "C",
              "text": "Rüzgârın insan vücudundaki su moleküllerini dondurarak katılaştırması."
            },
            {
              "key": "D",
              "text": "Güneş ışığının toprak testi ve insan derisinde kimyasal tepkime başlatması."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Buharlaşma ısı alan (endotermik) bir olaydır. Testi gözeneklerinden sızan su buharlaşırken testiden ısı çeker ve suyu serinletir; tendeki su buharlaşırken vücuttan ısı çeker ve üşütür."
        }
      ]
    },
    {
      "id": "g8-u4-sub6",
      "title": "6. Bölüm: Türkiye’de Kimya Endüstrisi",
      "shortTitle": "Türkiye’de Kimya Endüstrisi",
      "badge": "Kavramlar & LGS",
      "pageRange": "",
      "concepts": [
        "Kimya Endüstrisi",
        "İthalat ve İhracat",
        "Ham Madde Bağımlılığı (Petrol)",
        "Karabük Demir Çelik (1937)",
        "MKE",
        "PETKİM",
        "TÜBİTAK",
        "ETİ Maden (Bor)",
        "Kimya Meslekleri"
      ],
      "simulationId": "microscope",
      "summarySections": [
        {
          "heading": "Türkiye’de Kimya Sektörünün Gelişimi ve Kurumlar",
          "paragraphs": [
            "Kimya endüstrisi; plastik, boya, ilaç, deterjan, gübre, kozmetik, tekstil ve otomotiv gibi sanayi kollarının temel ham maddelerini ve ara ürünlerini üreten stratejik bir sektördür.",
            "Cumhuriyet Öncesi ve Sonrası: Osmanlı’da sabun ve barut gibi kısıtlı üretim varken, Cumhuriyet ile planlı ağır sanayi hamlesi başlamıştır. 1937’de Karabük Demir Çelik Fabrikası kurulmuştur.",
            "Önemli Kuruluşlar: MKE (Makine ve Kimya Endüstrisi - savunma sanayisi ve mühimmat), PETKİM (Petrokimya ve plastik ham maddeleri), TÜBİTAK (Bilimsel Ar-Ge), ETİ Maden (Dünya rezervlerinin %73’üne sahip olduğumuz Bor minerali işletmesi), TPAO (Petrol ve doğal gaz arama).",
            "Dış Ticaret Durumu: Türkiye kimya endüstrisinde ham madde bakımından (özellikle ham petrol ve organik kimyasallar) %70 oranında DIŞA BAĞIMLIDIR (ithalat fazladır)."
          ],
          "keyPoints": [
            "Kimya Mühendisi: Kimyasal süreçlerin en ekonomik şekilde endüstriyel tesislere dönüştürülmesini tasarlar.",
            "Kimyager: Maddelerin atomik yapısını, yeni bileşikleri ve laboratuvar analizlerini araştıran bilim insanıdır.",
            "Kimya Teknisyeni: Laboratuvarda mühendis ve kimyager gözetiminde analiz ve kontrol yapan ara elemandır.",
            "Metalurji Mühendisi: Maden filizlerinden metal ve alaşımların üretimiyle ilgilenir."
          ],
          "examNote": "📌 LGS ÇIKARIMI: Ülkemizde kimya sanayisinin en büyük sorunu ham madde ithalatı bağımlılığıdır. Çözüm; yerli kaynakların işlenmesi ve yüksek katma değerli Ar-Ge ürünlerinin üretilmesidir."
        }
      ],
      "glossary": [
        {
          "term": "İthalat",
          "definition": "Başka ülkelerden mal ve ham madde satın alınması (dış alım)."
        },
        {
          "term": "İhracat",
          "definition": "Ülkede üretilen malların dış ülkelere satılması (dış satım)."
        },
        {
          "term": "Petrokimya",
          "definition": "Petrolden plastik, elyaf ve kimyasallar üreten sanayi dalı."
        }
      ],
      "trueFalseQuestions": [
        {
          "id": 1,
          "statement": "Türkiye kimya endüstrisi petrol ham maddesi bakımından dışa bağımlıdır.",
          "isCorrect": true,
          "explanation": "Ham petrolün büyük kısmı ithal edilir."
        },
        {
          "id": 2,
          "statement": "Türkiye dünyadaki bor rezervlerinin yaklaşık %73’üne sahiptir.",
          "isCorrect": true,
          "explanation": "ETİ Maden bu rezervleri işleten lider kuruluştur."
        },
        {
          "id": 3,
          "statement": "Kimya mühendisleri sadece eczanelerde ilaç satışı yapar.",
          "isCorrect": false,
          "explanation": "Kimya mühendisleri fabrikaların ve üretim tesislerinin tasarım ve işletmesini yapar."
        },
        {"id":4,"statement":"Türkiye kimya endüstrisinde kullandığı ham maddelerin büyük kısmını yerli üretimle karşılamakta olup dışa bağımlı değildir.","isCorrect":false,"explanation":"Türkiye kimya endüstrisinde kullanılan ham maddelerin yaklaşık %70’ini (özellikle petrol ve petrokimya ürünlerini) ithalat yoluyla karşılamaktadır."}
      ],
      "lgsQuestions": [
        {
          "id": 1,
          "theme": "Kimya Endüstrisi ve Meslekler",
          "cognitiveLevel": "Mesleki Eşleştirme",
          "contextTitle": "Kimya Sektöründe Görev Dağılımı",
          "scenario": "Kimya sektöründe çalışan iki uzmanın görev tanımları şöyledir: 1. Kimyasal maddelerin laboratuvar ortamında yapısını analiz eder, yeni bileşikler geliştirir ve deneyler yapar. 2. Laboratuvarda geliştirilen bu ürünlerin fabrikada tonlarca miktarda en az maliyetle ve çevreye zarar vermeden üretilmesini sağlayan tesisleri tasarlar.",
          "questionPrompt": "Bu iki uzmanlık alanı sırasıyla hangisinde doğru verilmiştir?",
          "options": [
            {
              "key": "A",
              "text": "1: Kimyager , 2: Kimya Mühendisi"
            },
            {
              "key": "B",
              "text": "1: Kimya Teknisyeni , 2: Eczacı"
            },
            {
              "key": "C",
              "text": "1: Kimya Mühendisi , 2: Kimyager"
            },
            {
              "key": "D",
              "text": "1: Biyolog , 2: Metalurji Mühendisi"
            }
          ],
          "correctAnswer": "A",
          "explanation": "Maddenin yapısını ve kimyasal reaksiyonunu laboratuvarda araştıran Kimyagerdir. Üretim sürecini ve fabrika ölçekli tesisleri tasarlayan ise Kimya Mühendisidir."
        },
        {
          "id": 2,
          "theme": "Dış Ticaret ve Bor Madeninin Önemi",
          "cognitiveLevel": "Ekonomik ve Stratejik Değerlendirme",
          "contextTitle": "Türkiye Kimya Sanayisinde İthalat-İhracat Dengesi",
          "scenario": "Türkiye kimya endüstrisi verileri incelendiğinde plastik, kauçuk ve organik kimyasallarda ham madde ithalatının ihracattan fazla olduğu görülmektedir. Buna karşılık Türkiye dünyadaki toplam bor rezervlerinin yaklaşık %73’üne sahiptir.",
          "questionPrompt": "Kimya sektörümüzün dışa bağımlılığını azaltmak ve bor madeninden en yüksek geliri elde etmek için en etkili strateji hangisidir?",
          "options": [
            {
              "key": "A",
              "text": "Bor madenini ham (işlenmemiş) toprak olarak satmak yerine, ileri teknolojiyle işleyip yüksek katma değerli batarya ve savunma ürünlerine dönüştürmek."
            },
            {
              "key": "B",
              "text": "Tüm kimya fabrikalarını kapatıp sadece tarımsal üretime yönelmek."
            },
            {
              "key": "C",
              "text": "Yurt dışından daha fazla işlenmiş plastik ve deterjan ithal etmek."
            },
            {
              "key": "D",
              "text": "Bor madeni ocaklarını tamamen kapatıp rezervleri hiç kullanmamak."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Ham maddeyi işlenmemiş satmak düşük gelir getirir. Boru ileri teknoloji ürünlerinde (ısıya dayanıklı cam, batarya, zırh, nükleer yakıt) işleyerek ihraç etmek dış ticaret açığını kapatır."
        }
      ]
    }
  ]
};

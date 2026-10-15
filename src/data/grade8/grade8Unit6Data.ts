import { Unit } from '../../types/curriculum';
import { grade8Unit6End20Questions } from './grade8UnitEndExams';
import { sebahattinEnerjiCevreQuestions } from './sebahattinQuestions';

export const grade8Unit6Data: Unit = {
  "id": "g8-unit-6",
  "unitNumber": 6,
  "bookNumber": 1,
  "grade": 8,
  "subject": "Fen Bilimleri",
  "title": "Enerji Dönüşümleri ve Çevre Bilimi",
  "unitEndPageRange": "Ünite Sonu",
  "colorTheme": {
    "primary": "from-teal-600 to-emerald-700",
    "border": "border-teal-500/40",
    "bg": "bg-teal-950/40",
    "accent": "text-teal-400",
    "text": "text-teal-200"
  },
  "unitEnd20Questions": grade8Unit6End20Questions,
  "subTopics": [
    {
      "id": "g8-u6-sub1",
      "title": "1. Bölüm: Besin Zinciri ve Enerji Akışı",
      "shortTitle": "Besin Zinciri & Enerji Akışı",
      "badge": "Kavramlar & LGS",
      "pageRange": "",
      "concepts": [
        "Besin Zinciri",
        "Üreticiler (Ototrof)",
        "Tüketiciler (Heterotrof)",
        "Ayrıştırıcılar (Saprofit)",
        "Ekoloji Piramidi",
        "%10 Enerji Aktarımı Kuralı",
        "Biyolojik Birikim (Zehir)",
        "Biyokütle"
      ],
      "simulationId": "microscope",
      "summarySections": [
        {
          "heading": "Besin Zincirinin Canlıları ve Ekolojik Enerji Piramidi",
          "paragraphs": [
            "Canlılar yaşamsal faaliyetlerini sürdürebilmek için enerjiye gereksinim duyar; ekosistemdeki tüm enerjinin temel ve birincil kaynağı Güneş'tir (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Güneş'ten gelen ışık enerjisinin fotosentezle kimyasal bağ enerjisine çevrilerek üreticilerden tüketicilere beslenme yoluyla aktarıldığı canlılar dizisine besin zinciri denir (ÖS ÇIKTI).",
            "Üreticiler (Ototroflar): Klorofil pigmenti bulundurarak fotosentez yoluyla inorganik maddelerden organik besin üreten yeşil bitkiler, siyanobakteriler, algler ve fitoplanktonlardır; besin zincirinin daima İLK basamağında yer alırlar (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Tüketiciler (Heterotroflar): Kendi besinini üretemeyip hazır alan canlılardır: 1. Otçullar (Birincil Tüketiciler): Doğrudan üreticilerle beslenir (koyun, inek, çekirge, tavşan). 2. Etçiller (İkincil ve Üçüncül Tüketiciler): Otçulları veya diğer etçilleri yer (tilki, yılan, aslan, kartal). 3. Hepçiller: Hem bitki hem et tüketir (insan, ayı, maymun, tavuk) (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Ayrıştırıcılar (Saprofitler): Ölü bitki ve hayvan kalıntıları ile organik atıkları çürüterek inorganik maddelere ve minerallere dönüştüren bazı bakteri ve mantarlardır (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Ayrıştırıcıların Konumu: Besin zincirinin ve ekolojik besin piramidinin tek bir katına ait olmayıp HER BASAMAĞINDA yer alırlar; madde döngülerinin kilit taşıdırlar (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Besin Ağı: Ekosistemde birden fazla besin zincirinin birbiriyle kesişmesi ve iç içe geçmesiyle oluşan karmaşık beslenme ağıdır; ağdaki bir canlının popülasyonundaki değişim diğer basamakları doğrudan etkiler (LGS ÇIKTI) (ÖS ÇIKTI)."
          ],
          "keyPoints": [
            "Ekoloji Piramidinde Aşağıdan Yukarıya (Üreticiden Son Tüketiciye) Doğru Çıkıldıkça: 1. Aktarılan enerji miktarı AZALIR; %10 kuralına göre her basamakta enerjinin yaklaşık %10'u bir üst basamağa aktarılır, %90'ı ısı ve metabolik faaliyetlerde harcanır (LGS ÇIKTI) (ÖS ÇIKTI).",
            "2. Toplam canlı sayısı (Birey sayısı) AZALIR (LGS ÇIKTI) (ÖS ÇIKTI).",
            "3. Toplam Biyokütle (tüm bireylerin toplam canlı ağırlığı) AZALIR (LGS ÇIKTI) (ÖS ÇIKTI).",
            "4. Canlıların vücudunda ve dokularında biriken zehirli kimyasal madde miktarı (BİYOLOJİK BİRİKİM) KATLANARAK ARTAR (LGS ÇIKTI) (ÖS ÇIKTI).",
            "5. Canlıların vücut büyüklüğü genellikle ARTAR (ÖS ÇIKTI).",
            "Biyolojik Birikim (Zehir Oranı): Suda çözünmeyen ağır metaller (cıva, kurşun) ve tarım ilaçları (DDT) piramidin en tepesindeki son tüketicide (yırtıcı kartal, insan) EN FAZLA miktarda birikir (LGS ÇIKTI) (ÖS ÇIKTI)."
          ],
          "examNote": "📌 LGS & ÖS SORU KALIBI: Bir ekosistemde üretici sayısı artarsa otçul ve etçil sayısı da artar; ancak otçul sayısı aşırı avlanma sebebiyle azalırsa üreticiler artarken etçil canlılar besin yetersizliğinden azalır (LGS ÇIKTI) (ÖS ÇIKTI)."
        }
      ],
      "glossary": [
        {
          "term": "Üretici",
          "definition": "Fotosentez yoluyla kendi organik besinini üreten bitki, alg ve bakteriler."
        },
        {
          "term": "Ayrıştırıcı",
          "definition": "Ölü canlı kalıntılarını parçalayarak toprağa mineral kazandıran bakteri ve mantarlar."
        },
        {
          "term": "Biyolojik Birikim",
          "definition": "Besin zinciri boyunca üst basamaklara doğru zehirli kimyasalların artarak birikmesi."
        }
      ],
      "trueFalseQuestions": [
        {
          "id": 1,
          "statement": "Ayrıştırıcı canlılar besin piramidinin sadece en alt basamağında bulunur.",
          "isCorrect": false,
          "explanation": "Ayrıştırıcılar besin zincirinin ve piramidinin her basamağında etkilidir."
        },
        {
          "id": 2,
          "statement": "Ekoloji piramidinde yukarı çıkıldıkça aktarılan enerji miktarı her basamakta %10 oranında aktarılır.",
          "isCorrect": true,
          "explanation": "%10 kuralına göre enerjinin %90’ı kaybolur, %10’u üste geçer."
        },
        {
          "id": 3,
          "statement": "Biyolojik birikim (zehir oranı) besin zincirinin başlangıcındaki üreticilerde en fazladır.",
          "isCorrect": false,
          "explanation": "Zehir birikimi piramidin en üstündeki son tüketicide en fazladır."
        },
        {"id":4,"statement":"Besin zincirinde üreticiden son tüketiciye doğru gidildikçe canlıların dokularında biriken zehirli madde miktarı (biyolojik birikim) artar.","isCorrect":true,"explanation":"Zehirli maddeler metabolizma tarafından kolay atılamadığı için üst trofik düzeylerde gittikçe katlanarak birikir."},
        {"id":5,"statement":"Ayrıştırıcı canlılar (mantarlar ve bakteriler) sadece besin zincirinin en tepe basamağında yer alırlar.","isCorrect":false,"explanation":"Ayrıştırıcılar besin zincirinin her basamağında bulunur ve organik atıkları inorganik maddelere dönüştürerek döngüye katar."}
      ],
      "lgsQuestions": [
        ...sebahattinEnerjiCevreQuestions.filter(q => q.subTopicId === 'g8-u6-sub1'),
        {
          "id": 1,
          "theme": "Ekoloji Piramidinde Değişimler",
          "cognitiveLevel": "Şema Analizi",
          "contextTitle": "Besin Zincirinde Biyolojik Birikim",
          "scenario": "Bir su ekosistemine ait besin piramidinde üreticiden son tüketiciye doğru sıralanan canlılarda çeşitli parametreler incelenmiştir: Fitoplankton ➔ Zooplankton ➔ Küçük Balık ➔ Martı.",
          "questionPrompt": "Üreticilerden tepeye doğru çıkıldıkça gerçekleşen değişimlerden hangisi doğrudur?",
          "options": [
            {
              "key": "A",
              "text": "Biyolojik birikim artarken, aktarılan enerji miktarı ve biyokütle azalır."
            },
            {
              "key": "B",
              "text": "Aktarılan enerji miktarı artarken biyolojik birikim azalır."
            },
            {
              "key": "C",
              "text": "Birey sayısı ve toplam biyokütle sürekli artış gösterir."
            },
            {
              "key": "D",
              "text": "Her basamağa aktarılan enerji miktarı tamamen eşit kalır."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Piramitte yukarı çıkıldıkça aktarılan enerji ve birey sayısı hızla azalır; vücutta biriken zehirli atık miktarı (biyolojik birikim) ise katlanarak artar."
        },
        {
          "id": 2,
          "theme": "Besin Ağında Popülasyon Değişimleri",
          "cognitiveLevel": "Çoklu Değişken Muhakemesi",
          "contextTitle": "Tarım Alanında Yılan Sayısının Azalması",
          "scenario": "Bir ekosistemde şu besin zinciri bulunmaktadır: Buğday ➔ Çekirge ➔ Kurbağa ➔ Yılan ➔ Şahin. Bölgede kaçak avlanma sonucu yılan popülasyonu hızla tükenmiştir.",
          "questionPrompt": "Yılanların tükenmesi durumunda diğer canlıların sayılarındaki ilk değişim hangisinde doğru verilmiştir?",
          "options": [
            {
              "key": "A",
              "text": "Kurbağa sayısı artar, çekirge sayısı azalır, buğday verimi artar."
            },
            {
              "key": "B",
              "text": "Çekirge sayısı hızla artar ve buğdaylar tamamen yok olur."
            },
            {
              "key": "C",
              "text": "Şahin sayısı artışa geçerken kurbağalar yok olur."
            },
            {
              "key": "D",
              "text": "Tüm ekosistemdeki canlı sayıları hiçbir değişikliğe uğramaz."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Yılanlar azalınca onları avlayan şahinler besinsiz kalır ve azalır; yılanların yediği kurbağalar av baskısından kurtulup çoğalır. Çoğalan kurbağalar daha çok çekirge yer (çekirge azalır), çekirge azalınca buğday verimi artar."
        },
        {
          "id": 3,
          "theme": "%10 Enerji Aktarımı Hesaplaması",
          "cognitiveLevel": "Matematiksel Ekoloji Muhakemesi",
          "contextTitle": "Güneş Enerjisinin Basamaklara İletimi",
          "scenario": "Bir çayır ekosisteminde üretici bitkiler fotosentezle 100.000 Joule kimyasal bağ enerjisi üretmiştir. Bu ekosistemde zincir: Ot ➔ Tavşan ➔ Tilki ➔ Kartal şeklindedir.",
          "questionPrompt": "Ekoloji piramidindeki %10 enerji aktarımı kuralına göre son tüketici olan kartala ulaşan enerji miktarı kaç Joule’dür?",
          "options": [
            {
              "key": "A",
              "text": "100 Joule"
            },
            {
              "key": "B",
              "text": "10.000 Joule"
            },
            {
              "key": "C",
              "text": "1.000 Joule"
            },
            {
              "key": "D",
              "text": "10 Joule"
            }
          ],
          "correctAnswer": "A",
          "explanation": "Ot: 100.000 J ➔ Tavşan (1. basamak): 10.000 J ➔ Tilki (2. basamak): 1.000 J ➔ Kartal (3. basamak): 100 J enerji aktarılır."
        },
        {
          "id": 4,
          "theme": "Biyolojik Birikim ve Ağır Metal Kirliliği",
          "cognitiveLevel": "Çevre Sağlığı ve Laboratuvar Analizi",
          "contextTitle": "Göldeki Cıva Miktarının Canlılardaki Dağılımı",
          "scenario": "Sanayi atıklarıyla kirlenen bir tatlı su gölünde canlıların vücut dokularındaki cıva miktarları ölçülmüştür: K canlısında 0,02 ppm, L canlısında 12,5 ppm, M canlısında 0,4 ppm, N canlısında 2,1 ppm.",
          "questionPrompt": "Bu ölçüm sonuçlarına göre bu göldeki besin zincirinin üreticiden son tüketiciye doğru dizilişi hangisidir?",
          "options": [
            {
              "key": "A",
              "text": "K ➔ M ➔ N ➔ L"
            },
            {
              "key": "B",
              "text": "L ➔ N ➔ M ➔ K"
            },
            {
              "key": "C",
              "text": "M ➔ K ➔ L ➔ N"
            },
            {
              "key": "D",
              "text": "K ➔ L ➔ M ➔ N"
            }
          ],
          "correctAnswer": "A",
          "explanation": "Biyolojik birikim besin zincirinde üreticiden son tüketiciye doğru katlanarak artar. Cıva miktarı en az olan K üretici (0,02), sonra M (0,4), sonra N (2,1), en çok olan L ise son tüketicidir (12,5)."
        },
        {
          "id": 5,
          "theme": "Ayrıştırıcıların Ekosistemdeki Yeri",
          "cognitiveLevel": "Kavramsal ve Fonksiyonel Çıkarım",
          "contextTitle": "Orman Tabanında Sonbahar Yapraklarının Çürümesi",
          "scenario": "Orman tabanına dökülen tonlarca kuru yaprak ve dal parçasının birkaç ay içinde toprağa karışarak verimli humusa dönüştüğü ve ortamda yığılma olmadığı gözlenmektedir.",
          "questionPrompt": "Bu olayı gerçekleştiren canlı grubu ve ekolojik önemi ile ilgili hangisi doğrudur?",
          "options": [
            {
              "key": "A",
              "text": "Ayrıştırıcı bakteri ve mantarlar organik atıkları inorganik minerallere çevirerek üreticilerin kullanımına sunar."
            },
            {
              "key": "B",
              "text": "Sadece otçul böcekler yaprakları yiyerek karbonu tamamen yok eder."
            },
            {
              "key": "C",
              "text": "Ayrıştırıcılar besin zincirinin sadece en tepesinde bulunur."
            },
            {
              "key": "D",
              "text": "Bu dönüşüm canlılar olmadan sadece güneş ışığı ve rüzgâr etkisiyle gerçekleşen fiziksel bir olaydır."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Saprofitler (ayrıştırıcılar) organik atıkları parçalayıp minerallere dönüştürür. Bu mineraller üretici bitkiler tarafından tekrar alınarak madde döngüsü tamamlanır."
        }
      ]
    },
    {
      "id": "g8-u6-sub2",
      "title": "2. Bölüm: Enerji Dönüşümleri (Fotosentez ve Solunum)",
      "shortTitle": "Fotosentez & Solunum",
      "badge": "Kavramlar & LGS",
      "pageRange": "",
      "concepts": [
        "Fotosentez",
        "Kloroplast ve Klorofil",
        "Glikoz ve Oksijen Üretimi",
        "Fotosentez Hızını Etkileyen Faktörler",
        "Engelmann Deneyi (Işık Rengi)",
        "Oksijenli Solunum (Mitokondri)",
        "Oksijensiz Solunum",
        "Fermantasyon (Etil Alkol ve Laktik Asit)"
      ],
      "simulationId": "microscope",
      "summarySections": [
        {
          "heading": "Fotosentez Mekanizması ve Hızını Etkileyen Faktörler",
          "paragraphs": [
            "Fotosentez: Klorofil pigmenti taşıyan üretici canlıların, ışık enerjisini soğurarak karbondioksit (CO2) ve sudan (H2O), organik besin (glikoz: C6H12O6) ve oksijen gazı (O2) üretmesi sürecidir (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Kimyasal Tepkime Denklemi: 6CO2 + 6H2O + Işık Enerjisi ➔ C6H12O6 + 6O2 şeklindedir; üreticiler inorganik maddeleri organik besine dönüştürerek kimyasal bağ enerjisine çevirir (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Işık Zorunluluğu: Fotosentez SADECE IŞIK VARLIĞINDA (güneş ışığı veya klorofilin soğurabileceği yeterli yapay ışıkta) gerçekleşir; karanlıkta fotosentez tamamen DURUR (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Işık Rengi Etkisi (Engelmann Deneyi): Fotosentez hızı klorofilin ışığı soğurma miktarına bağlıdır; klorofil mor ve kırmızı ışığı en çok soğurduğu için fotosentez en hızlı MOR ve KIRMIZI ışıkta, en yavaş ise yeşil ışığı yansıttığı için YEŞİL ışıkta gerçekleşir (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Sıcaklık Faktörü: Fotosentez enzimler kontrolünde gerçekleştiği için ideal (optimum) sıcaklık 25 °C – 35 °C arasıdır; sıcaklık 50 °C üzerine çıktığında enzimlerin yapısı bozulduğu için fotosentez durur (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Işık Şiddeti ve CO2 Miktarı: Işık şiddeti veya ortamdaki karbondioksit miktarı arttıkça fotosentez hızı belirli bir doygunluk sınırına kadar artar, ardından klorofil kapasitesi dolduğu için sabit kalır (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Karbondioksit Tutucular (Kireç Suyu & KOH): Deney kaplarına konulan kireç suyu [Ca(OH)2] veya potasyum hidroksit (KOH) ortamdaki CO2'yi tutarak bulanır; CO2 azaldığı için bitkinin fotosentez hızı düşer veya durur (LGS ÇIKTI) (ÖS ÇIKTI)."
          ],
          "keyPoints": [
            "Fotosentezde Su Oranı: Hücrede su oranı %15'in altına düştüğünde enzimler çalışamaz ve fotosentez durur (ÖS ÇIKTI).",
            "Bitkide Kütle Artışı: Fotosentez yapan bir bitkide üretilen glikoz ve nişastadan dolayı kuru madde ve biyokütle ARTAR (LGS ÇIKTI) (ÖS ÇIKTI)."
          ]
        },
        {
          "heading": "Hücresel Solunum Çeşitleri ve Enerji (ATP) Üretimi",
          "paragraphs": [
            "Hücresel Solunum: Canlıların besin moleküllerindeki kimyasal enerjiyi parçalayarak yaşamsal faaliyetler için gerekli hücresel enerjiye (ATP) dönüştürmesi sürecidir (ÖS ÇIKTI).",
            "Solunumun Zamanı: Canlılarda hücresel solunum GECE VE GÜNDÜZ KESİNTİSİZ devam eder; solunumun durması canlının yaşamının sona ermesi demektir (LGS ÇIKTI) (ÖS ÇIKTI).",
            "1. Oksijenli Solunum: Besinlerin oksijen kullanılarak karbondioksit ve suya kadar parçalanmasıdır; gelişmiş canlılarda MİTOKONDRİ organelinde gerçekleşir ve yüksek miktarda enerji (yaklaşık 30-32 ATP) açığa çıkarır (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Oksijenli Solunum Denklemi: Glikoz (Besin) + Oksijen ➔ Karbondioksit + Su + ATP + Isı Enerjisi (LGS ÇIKTI) (ÖS ÇIKTI).",
            "2. Oksijensiz Solunum: Oksijen kullanılmadan besinlerin sitoplazmada enzimler aracılığıyla parçalanmasıdır; bazı bakterilerde görülür (ÖS ÇIKTI).",
            "3. Fermantasyon (Mayalanma): Oksijensiz ortamda sitoplazmada besinlerin enzimlerle kısmen parçalanarak sınırlı enerji (2 ATP) üretilmesidir (LGS ÇIKTI) (ÖS ÇIKTI).",
            "a) Etil Alkol Fermantasyonu: Maya mantarları ve bazı bakterilerce yapılır; glikoz etil alkol, CO2 gazı ve ATP'ye dönüşür (hamurun mayalanması ve gaz kabarcığı çıkışı CO2 kaynaklıdır) (LGS ÇIKTI) (ÖS ÇIKTI).",
            "b) Laktik Asit Fermantasyonu: Yoğurt bakterileri ile aşırı yorulan çizgili kas hücrelerinde görülür; glikoz laktik aside ve ATP'ye çevrilir, KARBONDİOKSİT GAZI ÇIKMAZ; kaslarda biriken laktik asit yorgunluğa neden olur (LGS ÇIKTI) (ÖS ÇIKTI)."
          ],
          "table": {
            "headers": [
              "Karşılaştırma Özelliği",
              "Fotosentez",
              "Oksijenli Solunum"
            ],
            "rows": [
              [
                "Gerçekleştiği Canlılar",
                "Sadece klorofilli üretici canlılar (bitki, alg, bakteri)",
                "Tüm canlı hücreler (bitki, hayvan, mantar, bakteri)"
              ],
              [
                "Zamanı",
                "Sadece ışık varlığında (gündüz)",
                "Gece ve gündüz kesintisiz her an"
              ],
              [
                "Gerçekleştiği Hücre Bölümü",
                "Kloroplast (bakterilerde sitoplazma)",
                "Mitokondri (bakterilerde sitoplazma)"
              ],
              [
                "Kullanılan (Giren) Maddeler",
                "Karbondioksit (CO2) ve Su (H2O)",
                "Besin (Glikoz) ve Oksijen (O2)"
              ],
              [
                "Üretilen (Çıkan) Maddeler",
                "Organik Besin (Glikoz) ve Oksijen (O2)",
                "Karbondioksit (CO2), Su (H2O) ve ATP Enerjisi"
              ],
              [
                "Madde ve Kütle Değişimi",
                "Canlının kuru kütlesi ve ağırlığı artar",
                "Besin tüketildiği için canlının kütlesi azalır"
              ]
            ]
          },
          "examNote": "📌 LGS & ÖS SINAV KURALI: Yeşil bitkiler gündüz ışıkta hem fotosentez hem solunum yaparken, gece karanlıkta SADECE SOLUNUM yapar; aydınlık ortamda fotosentez hızı solunum hızından fazla ise bitki dışarıya oksijen verir (LGS ÇIKTI) (ÖS ÇIKTI)."
        }
      ],
      "glossary": [
        {
          "term": "Fotosentez",
          "definition": "Işık enerjisiyle su ve karbondioksitten besin ve oksijen üretilmesi."
        },
        {
          "term": "ATP",
          "definition": "Hücrelerin doğrudan kullandığı enerji para birimi (Adenozin Trifosfat)."
        },
        {
          "term": "Fermantasyon",
          "definition": "Oksijensiz ortamda besinin parçalanarak etil alkol veya laktik aside dönüştürülmesi."
        }
      ],
      "trueFalseQuestions": [
        {
          "id": 1,
          "statement": "Bitkiler geceleri karanlıkta fotosentez yapmaya devam eder.",
          "isCorrect": false,
          "explanation": "Fotosentez için ışık şarttır; karanlıkta sadece solunum yaparlar."
        },
        {
          "id": 2,
          "statement": "Fotosentez hızı en fazla yeşil ışıkta, en az mor ışıkta gerçekleşir.",
          "isCorrect": false,
          "explanation": "Tam tersi! En hızlı mor ve kırmızıda, en yavaş yeşil ışıktadır."
        },
        {
          "id": 3,
          "statement": "Yoğurt mayalanması laktik asit fermantasyonu ile gerçekleşir.",
          "isCorrect": true,
          "explanation": "Süt bakterileri laktik asit üreterek yoğurda dönüştürür."
        },
        {"id":4,"statement":"Fotosentez olayında klorofilli canlılar ışık enerjisini kullanarak su ve karbondioksitten besin (glikoz) ve oksijen üretir.","isCorrect":true,"explanation":"Fotosentez denklemi: 6CO2 + 6H2O + Işık Enerjisi -> C6H12O6 + 6O2 şeklindedir."},
        {"id":5,"statement":"Yeşil yapraklı bir bitki gündüz fotosentez yaparken solunum yapmaz, sadece gece solunum yapar.","isCorrect":false,"explanation":"Tüm canlılar gibi bitkiler de yaşamsal faaliyetlerini sürdürmek için gece ve gündüz kesintisiz 24 saat solunum yaparlar."}
      ],
      "lgsQuestions": [
        ...sebahattinEnerjiCevreQuestions.filter(q => q.subTopicId === 'g8-u6-sub2'),
        {
          "id": 1,
          "theme": "Fotosentez ve Kireç Suyu Deneyi",
          "cognitiveLevel": "Deney Yorumlama",
          "contextTitle": "Işık Şiddeti ve Fotosentez Hızı",
          "scenario": "25 °C’ta ışık alan iki özdeş cam fanustan 1. sine uğur böceği ve yeşil saksı bitkisi, 2. sine ise sadece uğur böceği ve kireç suyu konulmuştur (Kireç suyu CO2 ile bulanır).",
          "questionPrompt": "1. düzenekte uğur böceğinin çok daha uzun süre yaşamasının temel nedeni hangisidir?",
          "options": [
            {
              "key": "A",
              "text": "Bitkinin fotosentez ile ürettiği oksijeni böceğin solunumda kullanması ve böceğin verdiği CO2’yi bitkinin fotosentezde tüketmesi."
            },
            {
              "key": "B",
              "text": "Bitkinin odadaki ışığı tamamen soğurması."
            },
            {
              "key": "C",
              "text": "Kireç suyunun oksijen gazını tüketmesi."
            },
            {
              "key": "D",
              "text": "Uğur böceğinin bitki yapraklarını yiyerek enerji kazanması."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Bitki ile böcek arasında fotosentez-solunum dengesi kurulur: Bitki O2 üretir böcek tüketir; böcek CO2 üretir bitki fotosentezde tüketir."
        },
        {
          "id": 2,
          "theme": "Işık Renginin Fotosentez Hızına Etkisi",
          "cognitiveLevel": "Grafik ve Deney Analizi",
          "contextTitle": "Özdeş Bitkilerin Renkli Işıklar Altında Gelişimi",
          "scenario": "Aynı tür ve özdeş üç saksı bitkisi 25 °C sıcaklıkta eşit ışık şiddetine sahip mor, yeşil ve kırmızı ışık yayan lambaların altına yerleştirilmiştir. Belli bir süre sonra bitkilerin birim zamanda ürettiği oksijen kabarcığı sayıları ölçülmüştür.",
          "questionPrompt": "Işık renklerine göre üretilen oksijen kabarcığı sayılarının karşılaştırılması hangisinde doğru verilmiştir?",
          "options": [
            {
              "key": "A",
              "text": "Mor ışıkta en fazla, yeşil ışıkta en az oksijen kabarcığı üretilir."
            },
            {
              "key": "B",
              "text": "Yeşil ışıkta en fazla, mor ve kırmızı ışıkta sıfır kabarcık üretilir."
            },
            {
              "key": "C",
              "text": "Üç ışık renginde de üretilen oksijen miktarı birbirine eşittir."
            },
            {
              "key": "D",
              "text": "Kırmızı ışıkta bitki fotosentez yapamaz ve kurur."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Klorofil yeşil ışığı yansıttığı için fotosentez yeşil ışıkta en yavaştır. Klorofil mor ve kırmızı ışığı yüksek oranda soğurur; bu yüzden fotosentez en hızlı mor ve kırmızı ışıktadır."
        },
        {
          "id": 3,
          "theme": "Bitkilerde Gece-Gündüz Gaz Değişimi",
          "cognitiveLevel": "Zaman Bazlı Fizyolojik Muhakeme",
          "contextTitle": "Kapalı Cam Odada Gaz Seviyeleri",
          "scenario": "İçinde sadece yeşil yapraklı bir bitki bulunan kapalı cam odadaki gaz değişimleri 24 saat boyunca sensörlerle izlenmiştir.",
          "questionPrompt": "Gündüz ışıklı saatlerde ve gece zifiri karanlıkta odadaki gaz değişimleri hakkında hangisi doğrudur?",
          "options": [
            {
              "key": "A",
              "text": "Gündüz fotosentez hızı solunumdan yüksek olduğu için O2 artar, CO2 azalır; gece ise sadece solunum yapıldığı için CO2 artar, O2 azalır."
            },
            {
              "key": "B",
              "text": "Gece ve gündüz gaz oranları tamamen sabit kalır."
            },
            {
              "key": "C",
              "text": "Gece fotosentez hızlanarak oksijen seviyesi zirveye çıkar."
            },
            {
              "key": "D",
              "text": "Bitkiler gündüzleri hiç solunum yapmaz, sadece geceleri solunum yapar."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Bitkiler gündüz hem fotosentez hem solunum yapar; gündüz fotosentez baskın olduğundan O2 salar. Gece ışık olmadığından fotosentez durur, sadece solunum yapar ve ortama CO2 verir."
        },
        {
          "id": 4,
          "theme": "Fermantasyon Türleri ve Gaz Çıkışı",
          "cognitiveLevel": "Biyokimyasal Reaksiyon Analizi",
          "contextTitle": "Maya Mantarı ile Hamurun Kabarması",
          "scenario": "Bir fırıncı ılık şekerli su, un ve ekmek mayasını (maya mantarı) karıştırarak hamur hazırlamış ve üzerini kapatarak ılık bir yerde bekletmiştir. Bir süre sonra hamurun içinde gaz kabarcıkları oluşarak kabardığı görülmüştür.",
          "questionPrompt": "Hamurun kabarmasını sağlayan gaz ve gerçekleşen reaksiyon türü hangisidir?",
          "options": [
            {
              "key": "A",
              "text": "Karbondioksit (CO2) gazı - Etil alkol fermantasyonu"
            },
            {
              "key": "B",
              "text": "Oksijen (O2) gazı - Oksijenli solunum"
            },
            {
              "key": "C",
              "text": "Azot (N2) gazı - Laktik asit fermantasyonu"
            },
            {
              "key": "D",
              "text": "Metan (CH4) gazı - Fotosentez"
            }
          ],
          "correctAnswer": "A",
          "explanation": "Maya mantarları oksijensiz ortamda etil alkol fermantasyonu yapar: Glikoz ➔ Etil Alkol + CO2 + 2 ATP. Açığa çıkan karbondioksit gazı hamuru kabartır."
        },
        {
          "id": 5,
          "theme": "Çizgili Kaslarda Laktik Asit Fermantasyonu",
          "cognitiveLevel": "İnsan Fizyolojisi ve Efor",
          "contextTitle": "Ağır Antrenman Yapan Sporcunun Kas Ağrısı",
          "scenario": "Yoğun tempoda 400 metre depar atan bir koşucunun bacak kaslarına yeterli oksijen ulaşamadığı anda kas hücreleri alternatif bir enerji üretim yoluna başvurmuştur.",
          "questionPrompt": "Bu esnada kas hücrelerinde gerçekleşen enerji dönüşümü ve oluşan yan ürün hangisidir?",
          "options": [
            {
              "key": "A",
              "text": "Laktik asit fermantasyonu gerçekleşir; biriken laktik asit kaslarda yorgunluk hissine yol açar."
            },
            {
              "key": "B",
              "text": "Etil alkol fermantasyonu gerçekleşir ve bacak kaslarında karbondioksit birikir."
            },
            {
              "key": "C",
              "text": "Kaslar fotosentez yaparak kendi glikozunu üretmeye başlar."
            },
            {
              "key": "D",
              "text": "Kas hücreleri enerji üretimini tamamen durdurarak dondurucu uykuya geçer."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Çizgili kaslar oksijen yetersizliğinde laktik asit fermantasyonu yapar. Oluşan laktik asit beyindeki yorgunluk merkezini uyarır ve kas ağrısı yapar."
        },
        {
          "id": 6,
          "theme": "Sıcaklığın Fotosentez Hızına Etkisi",
          "cognitiveLevel": "Enzimatik Grafik Yorumlama",
          "contextTitle": "Serada Sıcaklık Kontrolü Deneyi",
          "scenario": "Bir serada ışık şiddeti ve karbondioksit miktarı sabit tutularak ortam sıcaklığı 5 °C’den başlayıp 55 °C’ye kadar kademeli olarak artırılmıştır.",
          "questionPrompt": "Seradaki bitkilerin fotosentez hızındaki değişim grafiği nasıl olur?",
          "options": [
            {
              "key": "A",
              "text": "25-35 °C aralığına kadar artar, en yüksek hıza ulaşır; 35 °C’den sonra düşer ve 50 °C civarında enzimler bozulduğu için sıfırlanır."
            },
            {
              "key": "B",
              "text": "Sıcaklık arttıkça fotosentez hızı kesintisiz olarak sonsuza kadar yükselir."
            },
            {
              "key": "C",
              "text": "En yüksek fotosentez hızı 5 °C’de görülür, sonra sürekli azalır."
            },
            {
              "key": "D",
              "text": "Sıcaklık değişimi fotosentez hızını hiçbir şekilde etkilemez."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Fotosentez enzimatik bir süreçtir. Optimum sıcaklık 25-35 °C’dir. Aşırı yüksek sıcaklıkta (50 °C+) enzimlerin protein yapısı kalıcı olarak bozulur ve fotosentez durur."
        }
      ]
    },
    {
      "id": "g8-u6-sub3",
      "title": "3. Bölüm: Madde Döngüleri ve Çevre Sorunları",
      "shortTitle": "Madde Döngüleri & İklim",
      "badge": "Kavramlar & LGS",
      "pageRange": "",
      "concepts": [
        "Su Döngüsü",
        "Karbon Döngüsü",
        "Oksijen Döngüsü",
        "Azot Döngüsü",
        "Azot Bağlayıcı ve Ayrıştırıcı Bakteriler",
        "Sera Gazları ve Küresel Isınma",
        "Ozon Tabakası",
        "Ekolojik Ayak İzi"
      ],
      "simulationId": "microscope",
      "summarySections": [
        {
          "heading": "Madde Döngüleri (Su, Karbon, Oksijen ve Azot Döngüsü)",
          "paragraphs": [
            "Canlılığın kesintisiz devam edebilmesi için su, karbon, oksijen ve azot gibi maddelerin canlılar ile cansız çevre arasındaki çevrimine madde döngüsü denir (ÖS ÇIKTI).",
            "Su Döngüsü: Okyanus, deniz ve göllerden buharlaşma, canlılardan terleme ve solunumla atmosfere çıkan su buharı yükselip yoğuşarak yağmur, kar ve dolu şeklinde yeryüzüne ve yer altı su kaynaklarına geri döner (ÖS ÇIKTI).",
            "Karbon ve Oksijen Döngüsü: Birbiriyle doğrudan bağlantılı iki döngüdür; fotosentez atmosferdeki CO2'yi tüketip O2 üretirken; hücresel solunum, yanma tepkimeleri ve fosil yakıt kullanımı atmosferdeki O2'yi tüketip ortama CO2 verir (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Azot Döngüsü: Atmosferin %78'ini serbest azot (N2) gazı oluşturmasına rağmen bitkiler ve hayvanlar bunu doğrudan solunum yoluyla kullanamaz (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Azotun Toprağa Bağlanması: Yıldırım ve şimşek gibi atmosferik elektrik boşalmaları ile baklagillerin (fasulye, bezelye, nohut, yonca) kök yumrularında yaşayan AZOT BAĞLAYICI BAKTERİLER azotu bağlayarak nitrat tuzlarına çevirir (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Azotun Besin Zincirine ve Atmosfere Dönüşü: Bitkiler bu nitrat tuzlarını kökleriyle alarak amino asit ve protein sentezler; otçul ve etçiller besin zinciriyle azotu bünyelerine katar; ölen canlıların proteinleri ayrıştırıcılar ve topraktaki AZOT AYRIŞTIRICI BAKTERİLER tarafından parçalanarak serbest azot gazı şeklinde yeniden atmosfere salınır (LGS ÇIKTI) (ÖS ÇIKTI)."
          ],
          "keyPoints": [
            "Azot Bağlayıcı Bakteriler: Havadaki serbest azotu toprağa bağlar (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Azot Ayrıştırıcı Bakteriler: Topraktaki azot bileşiklerini serbest azot gazına çevirip atmosfere verir (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Ayrıştırıcılar: Ölü organik artıkları amonyağa dönüştürerek döngüyü besler (LGS ÇIKTI) (ÖS ÇIKTI)."
          ]
        },
        {
          "heading": "Küresel İklim Değişikliği, Sera Etkisi ve Ekolojik Ayak İzi",
          "paragraphs": [
            "Sera Etkisi ve Küresel Isınma: Fosil yakıtların (kömür, petrol, doğal gaz) aşırı tüketimi sonucu atmosferde biriken karbondioksit (CO2) ve metan (CH4) gazları, yeryüzünden yansıyan güneş ışınlarını tutarak Dünya'nın ortalama sıcaklığının artmasına yol açar (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Küresel İklim Değişikliğinin Sonuçları: Kutuplardaki buzulların erimesi, deniz seviyesinin yükselmesi, aşırı kuraklık, taşkınlar, fırtınalar ve çölleşme meydana gelir (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Ozon Tabakası İncelmesi: Kloroflorokarbon (CFC) gazlarının etkisiyle ozon tabakasının seyrelmesi zararlı UV ışınlarının yeryüzüne ulaşmasına yol açar (ÖS ÇIKTI).",
            "Ekolojik Ayak İzi: Bir bireyin veya toplumun tükettiği doğal kaynakları üretmek ve meydana getirdiği atıkları bertaraf etmek için gereken verimli toprak ve su alanının ölçüsüdür (ÖS ÇIKTI).",
            "Dünya Limit Aşım Günü: İnsanlığın doğadan 1 yıllık kaynak talebinin, gezegenin o yılki biyolojik kendini yenileme kapasitesini aştığı tarihtir (ÖS ÇIKTI)."
          ],
          "examNote": "📌 LGS & ÖS AZOT VE SERA KURALI: Azot gazını doğrudan havadaki gazdan toprağa bağlayanlar BAKLAGİL KÖKÜNDEKİ AZOT BAĞLAYICI BAKTERİLERDİR; fosil yakıtların yanması ise atmosferdeki CO2 miktarını artırarak sera etkisini ve küresel ısınmayı tetikler (LGS ÇIKTI) (ÖS ÇIKTI)."
        }
      ],
      "glossary": [
        {
          "term": "Madde Döngüsü",
          "definition": "Su, karbon, azot ve oksijenin canlı ve cansız ortam arasındaki çevrimi."
        },
        {
          "term": "Ekolojik Ayak İzi",
          "definition": "Tüketilen kaynaklar ve üretilen atıklar için gezegenden talep edilen biyolojik verimli alan."
        }
      ],
      "trueFalseQuestions": [
        {
          "id": 1,
          "statement": "İnsanlar ve hayvanlar havadaki serbest azot gazını doğrudan solunumla alarak kullanabilirler.",
          "isCorrect": false,
          "explanation": "Azot gazı doğrudan alınamaz; bitkiler aracılığıyla besin zincirinden alınır."
        },
        {
          "id": 2,
          "statement": "Fotosentez atmosferdeki karbon dioksiti azaltırken oksijen oranını artırır.",
          "isCorrect": true,
          "explanation": "Fotosentez CO2 tüketir, O2 üretir."
        },
        {
          "id": 3,
          "statement": "Ekolojik ayak izinin büyümesi gezegenin sürdürülebilirliğine katkı sağlar.",
          "isCorrect": false,
          "explanation": "Ayak izi büyüdükçe doğal kaynaklar tükenir ve çevre kirlenir."
        },
        {"id":4,"statement":"Havadaki serbest azotu doğrudan solunum yoluyla alarak vücut proteinlerine katan canlılar insan ve memeli hayvanlardır.","isCorrect":false,"explanation":"İnsanlar ve hayvanlar havadaki serbest azotu doğrudan kullanamaz; azotu topraktaki azot bağlayıcı bakteriler ve bitkiler üzerinden besinlerle alırlar."},
        {"id":5,"statement":"Fosil yakıtların (kömür, petrol, doğal gaz) aşırı tüketilmesi atmosferdeki karbondioksit oranının artmasına ve karbon dengesinin bozulmasına neden olur.","isCorrect":true,"explanation":"Fosil yakıt yanması atmosfere yoğun CO2 salarak karbon döngüsünün doğal dengesini bozar."}
      ],
      "lgsQuestions": [
        ...sebahattinEnerjiCevreQuestions.filter(q => q.subTopicId === 'g8-u6-sub3'),
        {
          "id": 1,
          "theme": "Azot Döngüsü",
          "cognitiveLevel": "Şema Analizi",
          "contextTitle": "Azot Döngüsü ve Baklagil Bakterileri",
          "scenario": "Azot döngüsü şemasında yıldırım, baklagil köklerindeki bakteriler, üreticiler, tüketiciler ve ayrıştırıcılar gösterilmiştir.",
          "questionPrompt": "Azot döngüsü ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
          "options": [
            {
              "key": "A",
              "text": "Bitki ve hayvanların yapısındaki azot atmosfere dönemediği için atmosferdeki azot miktarı her geçen gün azalır."
            },
            {
              "key": "B",
              "text": "Yıldırım ve şimşek olayları atmosferdeki azotun toprağa geçmesine yardımcı olur."
            },
            {
              "key": "C",
              "text": "Baklagillerin köklerinde azot bağlayıcı bakteriler yaşar."
            },
            {
              "key": "D",
              "text": "Topraktaki azot tuzu besin zinciri yoluyla üreticilerden tüketicilere geçer."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Azot ayrıştırıcı bakteriler ölü canlı atıklarındaki azotu tekrar azot gazına dönüştürerek atmosfere verir; döngü sayesinde havadaki %78 azot oranı sabit kalır."
        },
        {
          "id": 2,
          "theme": "Sera Etkisi ve Küresel Isınma Mekanizması",
          "cognitiveLevel": "Nedensellik ve Çevre Muhakemesi",
          "contextTitle": "Atmosferdeki Karbondioksit Seviyesinin Artışı",
          "scenario": "Sanayi devriminden günümüze kadar kömür, petrol ve doğal gaz gibi fosil yakıtların aşırı tüketilmesi sonucu atmosferdeki CO2 ve metan (CH4) gazı derişimi rekor seviyelere ulaşmıştır.",
          "questionPrompt": "Bu gazların yol açtığı sera etkisi ve küresel ısınma mekanizması hangisinde doğru açıklanmıştır?",
          "options": [
            {
              "key": "A",
              "text": "Sera gazları yeryüzünden yansıyan kızılötesi ısı ışınlarını soğurarak uzaya kaçmasını engeller ve yer kürenin ortalama sıcaklığını artırır."
            },
            {
              "key": "B",
              "text": "Sera gazları Güneş’ten gelen tüm ışınları doğrudan yeryüzüne düşmeden uzaya geri yansıtır."
            },
            {
              "key": "C",
              "text": "Karbondioksit gazı ozon tabakasını kalınlaştırarak dünyanın aşırı soğumasına neden olur."
            },
            {
              "key": "D",
              "text": "Sera etkisi kutuplardaki buzulların donma hızını iki katına çıkarır."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Sera gazları battaniye görevi görür; güneş ışığı geçer ancak yerden yansıyan ısı ışınları tutulur. Bu da küresel ısınmaya ve iklim krizine yol açar."
        },
        {
          "id": 3,
          "theme": "Ozon Tabakası ve İncelmesinin Etkileri",
          "cognitiveLevel": "Ekolojik Risk ve Koruma",
          "contextTitle": "Kloroflorokarbon (CFC) Gazlarının Salınımı",
          "scenario": "Eski tip soğutucularda, klimalarda ve spreylerde kullanılan CFC gazlarının stratosferdeki ozon (O3) gazı moleküllerini parçalayarak ozon tabakasında incelmeye neden olduğu kanıtlanmıştır.",
          "questionPrompt": "Ozon tabakasının incelmesi durumunda canlılar üzerinde beklenen en büyük tehlike nedir?",
          "options": [
            {
              "key": "A",
              "text": "Güneş’in zararlı ultraviyole (UV) ışınlarının yeryüzüne daha fazla ulaşması sonucu cilt kanseri, katarakt ve mutasyonların artması."
            },
            {
              "key": "B",
              "text": "Yeryüzündeki yer çekimi kuvvetinin yarı yarıya azalması."
            },
            {
              "key": "C",
              "text": "Atmosferdeki oksijen gazının tamamen tükenmesi."
            },
            {
              "key": "D",
              "text": "Dünyadaki tüm su döngüsünün tamamen durması."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Ozon tabakası ölümcül UV-B ve UV-C ışınlarını süzer. İncelmesi durumunda UV ışınları DNA hasarlarına, cilt kanserine ve fitoplankton ölümlerine yol açar."
        },
        {
          "id": 4,
          "theme": "Ekolojik Ayak İzi Bileşenleri",
          "cognitiveLevel": "Sürdürülebilirlik Göstergesi Analizi",
          "contextTitle": "Bir Ülkenin Ekolojik Ayak İzi Raporu",
          "scenario": "Bir ülkenin ekolojik ayak izi hesaplamasında karbon ayak izi %60, tarım arazisi ayak izi %18, orman ayak izi %12, yapılaşmış alan ve balıkçılık sahası %10 olarak belirlenmiştir.",
          "questionPrompt": "Bu ülkenin toplam ekolojik ayak izini en hızlı ve etkili şekilde küçültmesi için atması gereken öncelikli adım hangisidir?",
          "options": [
            {
              "key": "A",
              "text": "Fosil yakıt kullanımını azaltıp yenilenebilir enerjiye (güneş, rüzgâr) geçerek karbon ayak izini düşürmek."
            },
            {
              "key": "B",
              "text": "Tüm ormanları kesip yerine beton binalar inşa etmek."
            },
            {
              "key": "C",
              "text": "Tarım arazilerinde kimyasal gübre ve tarım ilacı kullanımını beş katına çıkarmak."
            },
            {
              "key": "D",
              "text": "Denizlerde aşırı ve kontrolsüz balık avcılığını serbest bırakmak."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Ekolojik ayak izinin en büyük payı (%60) karbon ayak izine aittir. Fosil yakıtlar yerine yeşil enerji kullanımı ayak izini hızla küçültür."
        },
        {
          "id": 5,
          "theme": "Su Döngüsü ve İnsan Faaliyetleri",
          "cognitiveLevel": "Döngü Bütünlüğü ve Koruma",
          "contextTitle": "Yeraltı Sularının Aşırı Çekilmesi ve Obruklar",
          "scenario": "Konya Ovası’nda tarımsal sulama için derin kuyu pompalarıyla yeraltı suları kontrolsüz biçimde çekilmiş, yeraltı su seviyesi onlarca metre düşmüş ve arazide derin obruklar oluşmuştur.",
          "questionPrompt": "Bu durum su döngüsü ve çevre dengesi açısından hangi sonuca işaret eder?",
          "options": [
            {
              "key": "A",
              "text": "Suyun tüketim hızının döngüsel yenilenme hızını aşması sonucu su kaynaklarının tükenmesi ve jeolojik yapının çökmesi."
            },
            {
              "key": "B",
              "text": "Yeraltı suyunun çekilmesinin yağış miktarını iki katına çıkarması."
            },
            {
              "key": "C",
              "text": "Obruk oluşumunun tarımsal verimliliği artıran doğal bir döngü basamağı olması."
            },
            {
              "key": "D",
              "text": "Aşırı su çekiminin buharlaşmayı engelleyerek atmosferi kurutması."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Doğal su döngüsünde yeraltı suları yağışlarla beslenir. Çekilen su beslenmeden fazlaysa akiferler boşalır, kuraklık başlar ve toprak tabakası çökerek obruklar oluşturur."
        }
      ]
    },
    {
      "id": "g8-u6-sub4",
      "title": "4. Bölüm: Sürdürülebilir Kalkınma",
      "shortTitle": "Sürdürülebilir Kalkınma & Geri Dönüşüm",
      "badge": "Kavramlar & LGS",
      "pageRange": "",
      "concepts": [
        "Sürdürülebilir Kalkınma (Ekonomik, Sosyal, Çevresel)",
        "Kaynakların Tasarruflu Kullanımı",
        "Geri Dönüşüm",
        "Kaynağında Ayrıştırma",
        "Enerji Tasarrufu",
        "Sıfır Atık"
      ],
      "simulationId": "microscope",
      "summarySections": [
        {
          "heading": "Sürdürülebilir Kalkınma, Geri Dönüşüm ve Sıfır Atık",
          "paragraphs": [
            "Sürdürülebilir Kalkınma: Doğal kaynakları tüketmeden, gelecek nesillerin ihtiyaçlarını karşılama hakkını güvence altına alarak günümüzün ekonomik ve sosyal gelişimini planlama modelidir (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Sürdürülebilir kalkınmanın ekonomik kalkınma, toplumsal refah ve ekolojik çevrenin korunması olmak üzere 3 temel boyutu vardır (ÖS ÇIKTI).",
            "Geri Dönüşüm: Kullanım ömrünü tamamlamış kâğıt, cam, metal, plastik ve pil gibi geri dönüştürülebilir katı atıkların fiziksel ve kimyasal işlemlerle ikincil ham maddeye dönüştürülüp yeniden imalat sürecine dahil edilmesidir (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Geri Dönüşümün Enerji Avantajı: Geri dönüştürülmüş malzemelerle üretim yapmak, doğrudan birincil doğal ham maddelerden (madenlerden, ağaçlardan) üretmeye göre ÇOK DAHA AZ ENERJİ HARCAR ve hava/su kirliliğini büyük oranda azaltır (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Kaynağında Ayrıştırma İlkesi: Katı atıkların organik çöplerle karışmadan evde, okulda ve iş yerlerinde ayrı geri dönüşüm kutularında toplanmasıdır; sağlıklı geri dönüşümün İLK ve EN KRİTİK adımıdır (LGS ÇIKTI) (ÖS ÇIKTI)."
          ],
          "keyPoints": [
            "Tasarruf Oranları: 1 ton kullanılmış kâğıdın geri dönüştürülmesiyle 17 yetişkin ağacın kesilmesi önlenir, %60 enerji ve %50 su tasarrufu sağlanır; alüminyum kutuların geri dönüşümü boksit cevherinden sıfırdan üretime göre %95 enerji tasarrufu sağlar (ÖS ÇIKTI).",
            "Doğada Yok Olma Süreleri: Kâğıt: 3 ay, Metal kutu: 10-100 yıl, Plastik şişe: 400-1000 yıl, Cam şişe: 4000 yıl (ÖS ÇIKTI).",
            "Bireysel Tasarruf Tedbirleri: Evlerde A+++ enerji sınıfı cihazların seçilmesi, gereksiz lambaların kapatılması, su kaçaklarının onarılması, kompost gübre yapılması ve Sıfır Atık projelerine katılım sağlanması sürdürülebilirliğe doğrudan katkı sunar (ÖS ÇIKTI)."
          ],
          "examNote": "📌 LGS & ÖS GERİ DÖNÜŞÜM SORUSU: Geri dönüşüm uygulamaları hem tükenmekte olan doğal kaynakları korur hem de üretimde tüketilen fosil yakıt ve elektrik enerjisinde devasa tasarruf sağlayarak sera gazı salımını azaltır (LGS ÇIKTI) (ÖS ÇIKTI)."
        }
      ],
      "glossary": [
        {
          "term": "Sürdürülebilir Kalkınma",
          "definition": "Doğal dengeyi koruyarak kalkınmayı gelecek nesillere aktarabilme stratejisi."
        },
        {
          "term": "Geri Dönüşüm",
          "definition": "Atık maddelerin yeniden ham maddeye dönüştürülerek üretime kazandırılması."
        }
      ],
      "trueFalseQuestions": [
        {
          "id": 1,
          "statement": "Geri dönüşüm ile üretilen malzemeler enerji tasarrufu sağlamaz.",
          "isCorrect": false,
          "explanation": "Alüminyumda %90’a varan devasa enerji tasarrufu sağlar."
        },
        {
          "id": 2,
          "statement": "Geri dönüşümün ilk basamağı atıkların kaynağında ayrı kutularda toplanmasıdır.",
          "isCorrect": true,
          "explanation": "Temiz ayrıştırma için kaynağında ayırma esastır."
        },
        {
          "id": 3,
          "statement": "Plastik atıkların doğada tamamen yok olması bin yılı bulabilmektedir.",
          "isCorrect": true,
          "explanation": "Plastikler doğada yaklaşık 1000 yılda zor parçalanır."
        },
        {"id":4,"statement":"Sera gazlarının atmosferde birikmesi sonucu Dünya’dan yansıyan ısı ışınlarının uzaya kaçamaması küresel ısınmaya yol açar.","isCorrect":true,"explanation":"CO2, CH4 ve su buharı gibi sera gazları sera etkisini artırarak yerkürenin ortalama sıcaklığını yükseltir."},
        {"id":5,"statement":"Ekolojik ayak izi bir insanın veya toplumun tükettiği doğal kaynakları üretmek ve oluşturduğu atıkları yok etmek için gereken verimli toprak ve su alanıdır.","isCorrect":true,"explanation":"Ekolojik ayak izi gezegene verilen yükü ve sürdürülebilirlik seviyesini ölçen temel göstergedir."}
      ],
      "lgsQuestions": [
        ...sebahattinEnerjiCevreQuestions.filter(q => q.subTopicId === 'g8-u6-sub4'),
        {
          "id": 1,
          "theme": "Sürdürülebilir Yaşam ve Tasarruf",
          "cognitiveLevel": "Muhakeme",
          "contextTitle": "Geri Dönüşüm ve Ekolojik Ayak İzi",
          "scenario": "Bir okulda sürdürülebilir kalkınma ve kaynakların tasarruflu kullanımı amacıyla önlemler listesi hazırlanmıştır.",
          "questionPrompt": "Aşağıdakilerden hangisi kaynakları tasarruflu kullanmak ve geri dönüşümü desteklemek için uygun bir yöntem DEĞİLDİR?",
          "options": [
            {
              "key": "A",
              "text": "Tüm atıkların türüne bakılmaksızın tek bir ortak çöp kutusunda toplanması."
            },
            {
              "key": "B",
              "text": "Kâğıt, plastik, cam ve metallerin ayrı geri dönüşüm kutularına atılması."
            },
            {
              "key": "C",
              "text": "Bitmiş pillerin diğer çöplerden ayrı atık pil kutularında toplanması."
            },
            {
              "key": "D",
              "text": "Kullanılmayan elektronik aletlerin fişten çekilmesi."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Tüm atıkların tek kutuda toplanması malzemeleri kirletir ve geri dönüştürülebilirliği engeller; atıklar kaynağında ayrıştırılmalıdır."
        },
        {
          "id": 2,
          "theme": "Alüminyum ve Kâğıt Geri Dönüşümünün Katkıları",
          "cognitiveLevel": "Veri Analizi ve Tasarruf Hesabı",
          "contextTitle": "1 Ton Kâğıt ve Alüminyum Geri Kazanımı",
          "scenario": "Verilere göre 1 ton kullanılmış kâğıdın geri dönüştürülmesi 17 yetişkin çam ağacının kesilmesini önlemekte, 2,5 metreküp depolama alanından ve %60 elektrik enerjisinden tasarruf sağlamaktadır. 1 alüminyum kutunun geri dönüşümü ise sıfırdan boksit cevherinden üretimine göre %95 enerji tasarrufu sağlamaktadır.",
          "questionPrompt": "Bu verilerden çıkarılabilecek en kapsamlı sürdürülebilirlik sonucu hangisidir?",
          "options": [
            {
              "key": "A",
              "text": "Geri dönüşüm doğal kaynakları korurken çok yüksek oranlarda enerji ve depolama alanı tasarrufu sağlar."
            },
            {
              "key": "B",
              "text": "Geri dönüştürülen malzemeler hiçbir zaman ikinci kez kullanılamaz."
            },
            {
              "key": "C",
              "text": "Kâğıt geri dönüştürmek ağaç kesimini artırır."
            },
            {
              "key": "D",
              "text": "Alüminyum madenini doğrudan topraktan çıkarmak geri dönüştürmekten daha az enerji gerektirir."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Geri dönüşüm hem doğal ormanları ve ham maddeleri korur, hem de hammadde çıkarma ve işleme aşamalarındaki devasa enerji tüketimini önler."
        },
        {
          "id": 3,
          "theme": "Sıfır Atık Projesi ve Kompost Üretimi",
          "cognitiveLevel": "Uygulamalı Çevre Projesi Muhakemesi",
          "contextTitle": "Organik Mutfak Atıklarından Doğal Gübre",
          "scenario": "Sıfır Atık projesi kapsamında bir okul yemekhanesindeki meyve-sebze kabukları, çay posaları ve yemek artıkları plastik veya cam çöplerine karıştırılmadan ayrı bir kompost kutusuna toplanmış ve fermantasyonla doğal organik gübreye dönüştürülmüştür.",
          "questionPrompt": "Bu uygulamanın sağladığı çevresel ve ekonomik faydalar ile ilgili hangisi doğrudur?",
          "options": [
            {
              "key": "A",
              "text": "Çöpe gidecek organik atıklar değerlendirilerek okul bahçesi için kimyasal gübre yerine doğal gübre üretilmiştir."
            },
            {
              "key": "B",
              "text": "Organik atıkların kompost yapılması topraktaki zararlı asitleri iki katına çıkarır."
            },
            {
              "key": "C",
              "text": "Bu yöntem sadece cam şişelerin geri dönüşümünde kullanılabilir."
            },
            {
              "key": "D",
              "text": "Yemekhanedeki atıkların ayrıştırılması okuldaki çöp miktarını artırmıştır."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Kompost organik atıkları doğal gübreye çevirerek toprağı zenginleştirir, kimyasal gübre ihtiyacını azaltır ve çöp depolama alanlarına giden atığı minimuma indirir."
        },
        {
          "id": 4,
          "theme": "Gelecek Nesiller ve Kaynak Yönetimi",
          "cognitiveLevel": "Etik ve Çevresel Gelecek Vizyonu",
          "contextTitle": "Dünya Limit Aşım Günü Raporu",
          "scenario": "Küresel ayak izi ağının açıkladığı raporda; dünya genelinde insanlığın doğal kaynak tüketiminin yıllık biyolojik yenilenme kapasitesini aşarak Limit Aşım Günü’nün her yıl temmuz veya ağustos aylarına gerilediği belirtilmiştir.",
          "questionPrompt": "Limit Aşım Günü’nü aralık ayının sonuna doğru ötelemek için bireylerin ve toplumların benimsemesi gereken en temel tutum nedir?",
          "options": [
            {
              "key": "A",
              "text": "Aşırı tüketim ve israfı azaltmak, döngüsel ekonomiye geçmek ve yenilenebilir enerji kaynaklarını yaygınlaştırmak."
            },
            {
              "key": "B",
              "text": "Fosil yakıt tüketimini iki katına çıkararak sanayi üretimini hızlandırmak."
            },
            {
              "key": "C",
              "text": "Doğal orman alanlarını tarla ve sanayi bölgesine dönüştürmek."
            },
            {
              "key": "D",
              "text": "Tek kullanımlık plastik ürünlerin kullanımını teşvik etmek."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Limit aşımını geciktirmek; doğanın yenileyebileceği kadar kaynak tüketmekle (israfı önleme, geri dönüşüm, temiz enerji) mümkündür."
        }
      ]
    }
  ]
};

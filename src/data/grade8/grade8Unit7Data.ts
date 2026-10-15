import { Unit } from '../../types/curriculum';
import { grade8Unit7End20Questions } from './grade8UnitEndExams';
import { sebahattinElektrikQuestions } from './sebahattinQuestions';

export const grade8Unit7Data: Unit = {
  "id": "g8-unit-7",
  "unitNumber": 7,
  "bookNumber": 1,
  "grade": 8,
  "subject": "Fen Bilimleri",
  "title": "Elektrik Yükleri ve Elektrik Enerjisi",
  "unitEndPageRange": "Ünite Sonu",
  "colorTheme": {
    "primary": "from-violet-600 to-purple-700",
    "border": "border-violet-500/40",
    "bg": "bg-violet-950/40",
    "accent": "text-violet-400",
    "text": "text-violet-200"
  },
  "unitEnd20Questions": grade8Unit7End20Questions,
  "subTopics": [
    {
      "id": "g8-u7-sub1",
      "title": "1. Bölüm: Elektrik Yükleri ve Elektriklenme",
      "shortTitle": "Elektrik Yükleri & Elektriklenme",
      "badge": "Kavramlar & LGS",
      "pageRange": "",
      "concepts": [
        "Proton (+)",
        "Elektron (-)",
        "Nötr Cisim",
        "Elektriklenme Çeşitleri",
        "Sürtünme ile Elektriklenme (Ebonit-Yün, Cam-İpek)",
        "Dokunma ile Elektriklenme",
        "Etki ile Elektriklenme",
        "Şimşek ve Yıldırım",
        "Fotokopi ve Baca Filtresi"
      ],
      "simulationId": "dynamometer",
      "summarySections": [
        {
          "heading": "Elektrik Yükleri, Yük Dengesi ve Etkileşim Kuralları",
          "paragraphs": [
            "Maddeleri oluşturan atomlarda pozitif yüklü protonlar (+), negatif yüklü elektronlar (-) ve yüksüz nötronlar yer alır (ÖS ÇIKTI).",
            "Cisimlerin Yük Durumları: 1. Nötr (Yüksüz) Cisim: Pozitif yük sayısı negatif yük sayısına tam olarak eşittir (LGS ÇIKTI) (ÖS ÇIKTI). 2. Pozitif Yüklü Cisim: Pozitif yük sayısı negatif yük sayısından fazladır; dışarıya elektron vermiştir (LGS ÇIKTI) (ÖS ÇIKTI). 3. Negatif Yüklü Cisim: Negatif yük sayısı pozitif yük sayısından fazladır; dışarıdan elektron almıştır (LGS ÇIKTI) (ÖS ÇIKTI).",
            "ALTIN ELEKTRİKLENME KURALI: Pozitif yükler (protonlar) çekirdekte sabittir ve KESİNLİKLE HAREKET ETMEZ; elektriklenme olaylarında sadece negatif yükler (elektronlar) alınıp verilir (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Elektriksel İtme ve Çekme Kuralları: Aynı cins elektrik yükleri birbirini İTER (+ ile +, - ile -) (LGS ÇIKTI) (ÖS ÇIKTI). Zıt cins elektrik yükleri birbirini ÇEKER (+ ile -) (LGS ÇIKTI) (ÖS ÇIKTI). Yüklü bir cisim (ister pozitif ister negatif olsun) nötr iletken veya yalıtkan cisimleri etkiyle kutuplandırarak DAİMA ÇEKER (LGS ÇIKTI) (ÖS ÇIKTI). İki nötr cisim birbirine elektriksel çekme veya itme kuvveti uygulamaz (LGS ÇIKTI) (ÖS ÇIKTI)."
          ],
          "keyPoints": [
            "Sürtünme ile Elektriklenme: Yalıtkan iki cisim birbirine sürtüldüğünde aralarında elektron transferi gerçekleşir; cisimler ZIT CİNS ve EŞİT MİKTARDA yük kazanır (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Ebonit (Plastik) Çubuk + Yün Kumaş: Elektronlar yün kumaştan plastik çubuğa geçer; Ebonit (-) negatif, yün kumaş (+) pozitif yüklenir (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Cam Çubuk + İpek Kumaş: Elektronlar cam çubuktan ipek kumaşa geçer; Cam çubuk (+) pozitif, ipek kumaş (-) negatif yüklenir (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Dokunma ile Elektriklenme: Yüklü iletken bir cisim başka bir iletkene dokundurulduğunda toplam yük kapasitelerine göre paylaşılır; dokunan cisimler DAİMA AYNI CİNS yükle yüklenir (ya ikisi de +, ya ikisi de -, ya da nötr); asla zıt yüklenemezler (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Etki (Tesir) ile Elektriklenme: Temas olmaksızın yüklü bir cisim nötr cisme yaklaştırıldığında, nötr cisimdeki elektronların itilmesi veya çekilmesiyle yük kutuplanması oluşmasıdır (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Etki ile Kutuplanma: Yaklaştırılan yüklü cisme YAKIN UÇ zıt yükle, UZAK UÇ ise aynı cins yükle kutuplanır; yüklü cisim uzaklaştırıldığında nötr cisim eski homojen yüksüz yapısına geri döner (LGS ÇIKTI) (ÖS ÇIKTI)."
          ]
        },
        {
          "heading": "Doğal Elektrik Olayları ve Teknolojik Uygulamalar",
          "paragraphs": [
            "Şimşek: Rüzgârın etkisiyle sürtünerek zıt yüklenen iki bulut arasında gerçekleşen kıvılcımlı elektrik boşalmasıdır (ÖS ÇIKTI).",
            "Yıldırım: Elektrik yüklü bir bulut ile yeryüzü arasında gerçekleşen şiddetli ve tehlikeli yük akışıdır (ÖS ÇIKTI).",
            "Teknolojideki Örnekler: Fotokopi makineleri ve lazer yazıcılar (kâğıt ve tonerin zıt yüklenerek birbirine yapışması), fabrika bacalarındaki elektrostatik filtreler (toz ve kurumların zıt yükle çekilerek tutulması), otomobil ve beyaz eşyaların elektrostatik boyanması (boya zerrecikleri ile yüzeyin zıt yüklenmesi sayesinde homojen boyanması) elektriklenme prensibine dayanır (LGS ÇIKTI) (ÖS ÇIKTI)."
          ],
          "examNote": "📌 LGS & ÖS PRATİK ŞİFRESİ: 'E-Y-N / C-İ-P' ➔ Ebonit Yüne sürter Negatif olur! Cam İpeğe sürter Pozitif olur! Elektriklenmede protonlar asla hareket etmez, daima elektronlar hareket eder (LGS ÇIKTI) (ÖS ÇIKTI)."
        }
      ],
      "glossary": [
        {
          "term": "Elektriklenme",
          "definition": "Bir cismin elektron alarak veya vererek yük dengesinin bozulması."
        },
        {
          "term": "Şimşek",
          "definition": "İki yüklü bulut arasında gerçekleşen elektrik yükü geçişi."
        },
        {
          "term": "Yıldırım",
          "definition": "Yüklü bulut ile yeryüzü arasındaki elektrik boşalması."
        }
      ],
      "trueFalseQuestions": [
        {
          "id": 1,
          "statement": "Elektriklenme olayında protonlar bir cisimden diğerine aktarılır.",
          "isCorrect": false,
          "explanation": "Protonlar çekirdektedir, hareket etmez; sadece elektronlar aktarılır."
        },
        {
          "id": 2,
          "statement": "İpek kumaşa sürtülen cam çubuk pozitif (+) elektrik yüküyle yüklenir.",
          "isCorrect": true,
          "explanation": "Cam çubuk elektronlarını ipeğe vererek pozitif yüklenir."
        },
        {
          "id": 3,
          "statement": "Dokunma ile elektriklenen iki cisimden biri pozitif diğeri negatif yüklenebilir.",
          "isCorrect": false,
          "explanation": "Dokunmada her iki cisim kesinlikle AYNI CİNS yükle yüklenir."
        },
        {"id":4,"statement":"Cam çubuk ipek kumaşa sürtüldüğünde cam çubuk pozitif (+), ipek kumaş negatif (-) yükle yüklenir.","isCorrect":true,"explanation":"Cam çubuktan ipek kumaşa elektron geçişi olur; elektron kaybeden cam (+) yüklenirken, elektron kazanan ipek (-) yüklenir."},
        {"id":5,"statement":"Ebonit (plastik) çubuk yün kumaşa sürtüldüğünde ebonit çubuk negatif (-), yün kumaş pozitif (+) yükle yüklenir.","isCorrect":true,"explanation":"Yün kumaştan ebonit çubuğa elektron geçer; ebonit (-) yüklenirken yün (+) yüklenir."},
        {"id":6,"statement":"Aynı cins elektrik yüküyle yüklü iki cisim birbirini iterken, zıt yüklü iki cisim birbirini çeker.","isCorrect":true,"explanation":"Artı-artı ve eksi-eksi birbirini iter; artı-eksi birbirini çeker."},
        {"id":7,"statement":"Nötr bir cisim hiçbir elektrik yükü içermeyen tamamen yüksüz bir maddedir.","isCorrect":false,"explanation":"Nötr cisimlerde pozitif yük sayısı negatif yük sayısına eşittir; yük vardır ancak net yük sıfırdır."}
      ],
      "lgsQuestions": [
        ...sebahattinElektrikQuestions.filter(q => q.subTopicId === 'g8-u7-sub1'),
        {
          "id": 1,
          "theme": "Elektriklenme Çeşitleri",
          "cognitiveLevel": "Deney Analizi",
          "contextTitle": "Sürtünme ile Elektriklenme ve Yük Aktarımı",
          "scenario": "Şekil 1’de yünlü kumaşa sürtülen ebonit çubuk nötr iletken küreye dokunduruluyor. Şekil 2’de ise ipek kumaşa sürtülen cam çubuk diğer nötr iletken küreye dokunduruluyor.",
          "questionPrompt": "Bu işlemlerle ilgili aşağıdaki ifadelerden hangisi kesinlikle doğrudur?",
          "options": [
            {
              "key": "A",
              "text": "Şekil 1’de ebonit çubuktan nötr küreye (-) yükler geçer ve her iki küre de kendilerine dokundurulan çubuğun yük cinsiyle yüklenir."
            },
            {
              "key": "B",
              "text": "Şekil 2’de cam çubuktan nötr küreye (+) yükler akar."
            },
            {
              "key": "C",
              "text": "Her iki küre de nötr kalmaya devam eder."
            },
            {
              "key": "D",
              "text": "Kürelerin yük cinsleri dokunma sonrası birbirinin zıttı olur."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Ebonit çubuk (-) yüklüdür ve küreye elektron verir. Cam çubuk (+) yüklüdür, nötr küreden çubuğa elektron akar ve küre (+) kalır. Dokunma ile cisimler dokunanın yükünü alır."
        },
        {
          "id": 2,
          "theme": "Etki ile Elektriklenme ve Kutuplanma",
          "cognitiveLevel": "Kavramsal Muhakeme",
          "contextTitle": "Birbirine Değen İletken K ve L Küreleri",
          "scenario": "Birbirine temas eden yalıtkan ayaklar üzerindeki nötr iletken K ve L kürelerine, sol taraftan (-) yüklü ebonit bir çubuk temas ettirilmeden yaklaştırılmıştır. Çubuk uzaklaştırılmadan K ve L küreleri birbirinden ayrılmıştır.",
          "questionPrompt": "K ve L kürelerinin son yük durumları hangisinde doğru verilmiştir?",
          "options": [
            {
              "key": "A",
              "text": "K küresi pozitif (+), L küresi negatif (-) yüklü olur."
            },
            {
              "key": "B",
              "text": "Her iki küre de negatif (-) yüklü olur."
            },
            {
              "key": "C",
              "text": "K küresi negatif (-), L küresi pozitif (+) yüklü olur."
            },
            {
              "key": "D",
              "text": "Her iki küre de nötr kalır."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Negatif yüklü çubuk K’deki serbest elektronları iterek en uzak nokta olan L küresine gönderir. Çubuk çekilmeden ayrıldıklarında elektron kaybeden K (+), elektron kazanan L (-) yüklenir."
        },
        {
          "id": 3,
          "theme": "Sürtünme ile Elektriklenmede Yük Korunumu",
          "cognitiveLevel": "Temel Yasa ve Analiz",
          "contextTitle": "Cam Çubuk ile İpek Kumaşın Sürtünmesi",
          "scenario": "Tamamen nötr olan bir cam çubuk ile nötr ipek kumaş birbirine sürtülmüştür. Sürtünme sonucunda cam çubuğun yükü +6q olarak ölçülmüştür.",
          "questionPrompt": "İpek kumaşın son yükü ve sürtünme sırasındaki parçacık hareketi hangisinde doğru açıklanmıştır?",
          "options": [
            {
              "key": "A",
              "text": "İpek kumaş -6q yüklenmiştir; cam çubuktan ipek kumaşa elektron geçişi olmuştur."
            },
            {
              "key": "B",
              "text": "İpek kumaş +6q yüklenmiştir; ipek kumaştan cam çubuğa proton geçmiştir."
            },
            {
              "key": "C",
              "text": "İpek kumaş nötr kalmıştır; sadece cam çubuk yüklenir."
            },
            {
              "key": "D",
              "text": "İpek kumaş -3q yüklenmiştir; yüklerin yarısı havaya uçmuştur."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Sürtünmede toplam yük korunur. Cam çubuk elektron verip +6q olduğunda, o elektronları alan ipek kumaş -6q olur. Protonlar asla hareket etmez."
        },
        {
          "id": 4,
          "theme": "Yüklü Cisimlerin Nötr Cisimleri Çekmesi İlkesi",
          "cognitiveLevel": "Gözlem ve Mantık",
          "contextTitle": "Saça Sürtülen Tarağın Kâğıt Parçalarını Çekmesi",
          "scenario": "Kuru saçına plastik tarağı sürten bir öğrenci, tarağı masadaki minik nötr kâğıt parçacıklarına yaklaştırdığında kâğıtların havaya zıplayarak tarağa yapıştığını görmüştür.",
          "questionPrompt": "Nötr kâğıt parçacıklarının yüklü tarak tarafından çekilmesinin bilimsel açıklaması nedir?",
          "options": [
            {
              "key": "A",
              "text": "Yüklü tarak etki ile kâğıtların yakın ucunu zıt yükle kutuplar ve zıt yüklerin çekim kuvveti itme kuvvetinden büyük olduğu için nötr kâğıdı çeker."
            },
            {
              "key": "B",
              "text": "Kâğıt parçaları saçtan gelen elektrikle önceden pozitif yüklenmiştir."
            },
            {
              "key": "C",
              "text": "Plastik tarak manyetik bir mıknatısa dönüşerek kâğıdı manyetik kuvvetle çeker."
            },
            {
              "key": "D",
              "text": "Tarak ile kâğıt arasında yer çekimi kuvveti iki katına çıkmıştır."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Yüklü cisimler etki ile kutuplanma sayesinde nötr iletken veya yalıtkan nesnelerin yakın yüzeyinde zıt yük oluşturur ve onları daima çeker."
        },
        {
          "id": 5,
          "theme": "Doğal Elektriklenme: Şimşek ve Yıldırım Olayları",
          "cognitiveLevel": "Doğa Olayı ve Güvenlik",
          "contextTitle": "Fırtınalı Havada Ağaç Altına Sığınma Riski",
          "scenario": "Gök gürültülü sağanak yağışta açık arazide kalan bir yürüyüşçü, yağmurdan korunmak için arazideki tek yüksek çam ağacının altına sığınmak istemiştir.",
          "questionPrompt": "Bu davranışın yıldırım tehlikesi açısından son derece hatalı olmasının sebebi nedir?",
          "options": [
            {
              "key": "A",
              "text": "Yıldırım bulut ile yeryüzündeki en yüksek ve sivri noktalardan toprağa aktığı için yüksek ağaçlara yıldırım düşme olasılığı çok fazladır."
            },
            {
              "key": "B",
              "text": "Ağaç yaprakları pozitif yükleri emerek bulutları iter."
            },
            {
              "key": "C",
              "text": "Ağaçların kökleri topraktaki elektriği bulutlara doğru fırlatır."
            },
            {
              "key": "D",
              "text": "Yıldırım sadece plastik nesnelere çarpar, ağaçlara düşmez."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Yüklü bulutlar yere en yakın, sivri ve yüksek cisimler üzerinden deşarj olur (yıldırım). Bu nedenle açık alanda tek ağaç altı en tehlikeli yerdir."
        },
        {
          "id": 6,
          "theme": "Teknolojide Elektrostatik Boyama Teknolojisi",
          "cognitiveLevel": "Endüstriyel Uygulama Analizi",
          "contextTitle": "Otomobil Kaportalarının Fabrikada Boyanması",
          "scenario": "Otomobil fabrikalarında püskürtülen boya damlacıkları pozitif (+) yükle yüklenirken, boyanacak metal otomobil kaportası negatif (-) yükle yüklenir.",
          "questionPrompt": "Bu elektrostatik yöntemin fabrikaya sağladığı en önemli teknik ve ekonomik kazanım hangisidir?",
          "options": [
            {
              "key": "A",
              "text": "Zıt yüklerin çekimi sayesinde boya damlalarının yüzeye eşit ve pürüzsüz yapışması ile boya israfının önlenmesi."
            },
            {
              "key": "B",
              "text": "Boyanın kuruma süresini birkaç hafta geciktirmek."
            },
            {
              "key": "C",
              "text": "Boya damlalarının birbirini itmesini engelleyerek topaklanma oluşturmak."
            },
            {
              "key": "D",
              "text": "Otomobilin ağırlığını artırarak yol tutuşunu yükseltmek."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Boya damlacıkları aynı yüklü olduğu için birbirini iter ve havada homojen sis oluşturur; zıt yüklü metal yüzey ise tüm damlacıkları mıknatıs gibi çekerek israfı önler ve pürüzsüz boyar."
        },
        {
          "id": 7,
          "theme": "Fabrika Bacalarında Elektrostatik Filtreler",
          "cognitiveLevel": "Çevre Teknolojisi Muhakemesi",
          "contextTitle": "Termik Santral Bacasındaki Toz Tutucu Sistem",
          "scenario": "Termik santral bacasının çıkışına yerleştirilen metal ızgaralar (-) yükle yüklenmiş, duman içindeki kül ve toz tanecikleri ise yüksek gerilimle (+) yüklenmiştir.",
          "questionPrompt": "Bu elektrostatik filtrenin çalışma ilkesi hangisinde doğru verilmiştir?",
          "options": [
            {
              "key": "A",
              "text": "Zıt yüklü kül parçacıklarının bacadaki negatif plakalara yapışarak tutulması ve atmosfere zehirli katı partikül yayılmasının engellenmesi."
            },
            {
              "key": "B",
              "text": "Bacadan çıkan dumanın tamamen oksijen gazına dönüştürülmesi."
            },
            {
              "key": "C",
              "text": "Bacada elektrik akımı üreterek fabrikaya bedava elektrik sağlamak."
            },
            {
              "key": "D",
              "text": "Kül taneciklerinin bacanın çıkış hızını iki katına çıkarmak."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Elektrostatik filtreler toz ve duman taneciklerini statik elektrikle yükleyip zıt yüklü levhalara yapıştırarak havayı temizler."
        }
      ]
    },
    {
      "id": "g8-u7-sub2",
      "title": "2. Bölüm: Elektrik Yüklü Cisimler, Elektroskop ve Topraklama",
      "shortTitle": "Elektroskop & Topraklama",
      "badge": "Kavramlar & LGS",
      "pageRange": "",
      "concepts": [
        "Elektroskop",
        "Metal Topuz ve Metal Yapraklar",
        "Yüklü Cisim Yaklaştırma ve Dokundurma",
        "Topraklama",
        "Nötrlenme Prensibi",
        "Paratoner (Yıldırımsavar)",
        "Tanker Zinciri ve Topraklı Priz"
      ],
      "simulationId": "dynamometer",
      "summarySections": [
        {
          "heading": "Elektroskobun Yapısı, Yük Tespiti ve Yaprak Hareketleri",
          "paragraphs": [
            "Elektroskop: Bir cismin elektrikle yüklü olup olmadığını, yüklü ise hangi cins (+ veya -) elektrik yüküyle yüklü olduğunu tespit etmeye yarayan deney aracıdır (ÖS ÇIKTI).",
            "Kısımları: İletken metal topuz, iletken metal gövde, iletken hafif metal yapraklar, cam muhafaza fanusu ve yalıtkan tıpadan oluşur (ÖS ÇIKTI).",
            "Yaprakların Temel Durumu: Elektroskop NÖTR iken yapraklar tamamen KAPALIDIR; elektroskop YÜKLÜ iken (ister pozitif ister negatif olsun) aynı yükler birbirini iteceği için yapraklar AÇIKTIR; elektroskoptaki yük miktarı arttıkça yapraklar arasındaki açı büyür (LGS ÇIKTI) (ÖS ÇIKTI)."
          ],
          "keyPoints": [
            "Nötr Elektroskoba (+) Yüklü Cisim Yaklaştırılırsa: Yapraklardaki elektronlar topuza doğru çekilir; topuz (-) negatif yüklenirken yapraklar (+) yük fazlalığı nedeniyle AÇILIR (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Nötr Elektroskoba (-) Yüklü Cisim Yaklaştırılırsa: Topuzdaki elektronlar yapraklara doğru itilir; topuz (+) pozitif yüklenirken yapraklar (-) yük fazlalığı nedeniyle AÇILIR (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Yüklü Elektroskoba Aynı Cins Cisim Dokundurulursa: Elektroskobun yapraklarındaki yük yoğunluğu artarsa yapraklar BİRAZ DAHA AÇILIR (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Yüklü Elektroskoba Zıt Cins Cisim Dokundurulursa: Yük miktarlarına bağlı olarak; yapraklar biraz kapanabilir, yükler tam eşitse yapraklar TAMAMEN KAPANABİLİR veya cismin yükü çok fazlaysa yapraklar önce tamamen kapanıp ardından zıt cins yükle TEKRAR AÇILABİLİR (LGS ÇIKTI) (ÖS ÇIKTI)."
          ]
        },
        {
          "heading": "Topraklama Olayı ve Hayati Güvenlik Önlemleri",
          "paragraphs": [
            "Topraklama: Elektrik yüklü bir iletkenin iletken bir tel yardımıyla Dünya'ya bağlanarak NÖTR HÂLE getirilmesi işlemidir; yerküre devasa bir nötr yük haznesidir (LGS ÇIKTI) (ÖS ÇIKTI).",
            "1. Negatif (-) Yüklü Cisim Topraklandığında: Cisimdeki fazla elektronlar iletken tel üzerinden toprağa akar ve cisim NÖTR olur (LGS ÇIKTI) (ÖS ÇIKTI).",
            "2. Pozitif (+) Yüklü Cisim Topraklandığında: Pozitif yükler (protonlar) asla hareket edemez; topraktan cisme doğru elektron (-) geçişi gerçekleşir ve cisim NÖTR olur (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Topraklama Güvenliği Örnekleri: Akaryakıt tankerlerinin arkasına takılan ve yere sürtünen metal zincirler sürtünme elektriğini toprağa boşaltarak kıvılcım ve patlamaları önler (LGS ÇIKTI) (ÖS ÇIKTI).",
            "İniş yapan uçakların tekerleklerindeki iletken katman havadaki sürtünme elektriğini piste ileterek nötrler; evlerdeki topraklı prizler gövde kaçaklarını toprağa akıtarak çarpılmaları önler; yüksek binalardaki sivri uçlu paratonerler (yıldırımsavar) yıldırım elektriğini doğrudan toprağa iletir (LGS ÇIKTI) (ÖS ÇIKTI)."
          ],
          "examNote": "📌 LGS & ÖS TOPRAKLAMA KURALI: Topraklanan bir iletken cisim pozitif de olsa negatif de olsa KESİNLİKLE NÖTR OLUR; her iki durumda da sadece elektronlar hareket eder (LGS ÇIKTI) (ÖS ÇIKTI)."
        }
      ],
      "glossary": [
        {
          "term": "Elektroskop",
          "definition": "Cismin elektriksel yük durumunu yapraklarının hareketiyle gösteren deney aleti."
        },
        {
          "term": "Topraklama",
          "definition": "Yüklü cismin iletkenle toprağa bağlanıp nötrlenmesi işlemi."
        },
        {
          "term": "Paratoner",
          "definition": "Yıldırımı güvenli biçimde toprağa ileten sivri uçlu metal düzenek."
        }
      ],
      "trueFalseQuestions": [
        {
          "id": 1,
          "statement": "Nötr bir elektroskobun yaprakları birbirini iterek açık durur.",
          "isCorrect": false,
          "explanation": "Nötr elektroskobun yaprakları tamamen kapalıdır."
        },
        {
          "id": 2,
          "statement": "Pozitif yüklü bir cisim topraklandığında artı yükler toprağa akar.",
          "isCorrect": false,
          "explanation": "Artı yükler hareket edemez; topraktan cisme elektronlar gelir."
        },
        {
          "id": 3,
          "statement": "Topraklama yapılan bir cisim net yük dengesini kurarak nötr hale gelir.",
          "isCorrect": true,
          "explanation": "Topraklanan cisim nötrleşir."
        },
        {"id":4,"statement":"Yüklü bir elektroskobun topuzuna dokundurulan aynı cins yüklü bir cisim elektroskobun yapraklarının biraz daha açılmasına neden olabilir.","isCorrect":true,"explanation":"Elektroskoba aynı cins yük aktarılırsa yapraklardaki yük yoğunluğu artar ve birbirini daha kuvvetle iterek yapraklar daha fazla açılır."},
        {"id":5,"statement":"Topraklama yapılan pozitif yüklü bir cisim, topraktan elektron alarak nötr hale gelir.","isCorrect":true,"explanation":"Pozitif yükler hareket etmez; topraktan cisme doğru elektron (negatif yük) akışı gerçekleşir ve cisim nötrlenir."},
        {"id":6,"statement":"Yıldırım bulut ile yer arasındaki elektrik boşalması iken, şimşek iki bulut arasındaki elektrik boşalmasıdır.","isCorrect":true,"explanation":"Bulut-yer arası statik elektrik boşalması yıldırım, bulut-bulut arası ise şimşektir."},
        {"id":7,"statement":"Binaların tepesine kurulan paratonerler (yıldırımsavar) yıldırım düşmesini tamamen engelleyen aletlerdir.","isCorrect":false,"explanation":"Paratoner yıldırımın oluşmasını engellemez; yıldırımı güvenli bir şekilde toprağa ileterek binaya zarar vermesini önler."}
      ],
      "lgsQuestions": [
        ...sebahattinElektrikQuestions.filter(q => q.subTopicId === 'g8-u7-sub2'),
        {
          "id": 1,
          "theme": "Topraklama ve Yük Geçişi",
          "cognitiveLevel": "Şema Yorumlama",
          "contextTitle": "İletken Kürelerin Topraklanması",
          "scenario": "1. şekilde (+) yüklü iletken bir küre, 2. şekilde ise (-) yüklü iletken bir küre anahtar kapatılarak topraklanmıştır.",
          "questionPrompt": "Anahtarlar kapatıldığında gerçekleşen yük hareketleri ile ilgili hangisi doğrudur?",
          "options": [
            {
              "key": "A",
              "text": "1. şekilde topraktan küreye elektron geçer; 2. şekilde küreden toprağa elektron geçer ve her iki küre de nötr olur."
            },
            {
              "key": "B",
              "text": "1. şekildeki küreden toprağa protonlar akar."
            },
            {
              "key": "C",
              "text": "Her iki şekilde de topraktan küreye yük akar."
            },
            {
              "key": "D",
              "text": "1. küre pozitif kalmaya devam ederken 2. küre nötrlenir."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Topraklamada sadece elektronlar hareket eder. (+) küreye topraktan elektron gelir; (-) küreden toprağa elektron akar. Her iki küre de sonuçta nötrlenir."
        },
        {
          "id": 2,
          "theme": "Elektroskoba Yüklü Cisim Yaklaştırılması",
          "cognitiveLevel": "Etki ile Yük Dağılımı Muhakemesi",
          "contextTitle": "Nötr Elektroskoba Negatif Çubuk Yaklaştırma",
          "scenario": "Yaprakları tamamen kapalı olan nötr bir elektroskobun iletken topuzuna, (-) yüklü ebonit bir çubuk dokundurulmadan yaklaştırılmıştır.",
          "questionPrompt": "Bu durumda elektroskobun topuzunda ve yapraklarında meydana gelen değişim hangisinde doğru belirtilmiştir?",
          "options": [
            {
              "key": "A",
              "text": "Topuzdaki serbest elektronlar yapraklara itilir; topuz (+) pozitif yüklenir, yapraklar (-) yüklenerek açılır."
            },
            {
              "key": "B",
              "text": "Topuz (-) yüklenir, yapraklar (+) yüklenerek kapalı kalır."
            },
            {
              "key": "C",
              "text": "Yapraklardan topuza proton akışı olur ve yapraklar kapanır."
            },
            {
              "key": "D",
              "text": "Elektroskobun yük dağılımında hiçbir değişiklik olmaz."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Negatif yüklü çubuk topuzdaki elektronları en uzağa (yapraklara) iter. Topuzda (+) fazlalığı, yapraklarda (-) fazlalığı oluşur. Yapraklar aynı yükle (-) dolduğu için birbirini iter ve açılır."
        },
        {
          "id": 3,
          "theme": "Yüklü Elektroskoba Zıt Yüklü Cisim Dokundurulması",
          "cognitiveLevel": "Kritik Düşünme ve Durum Analizi",
          "contextTitle": "(+) Yüklü Elektroskoba (-) Yüklü Cisim Dokundurma",
          "scenario": "Pozitif (+) yüklü bir elektroskobun topuzuna, yük miktarı bilinmeyen (-) yüklü iletken bir küre dokunduruluyor.",
          "questionPrompt": "Elektroskobun yapraklarında aşağıdaki durumlardan hangisinin gerçekleşmesi KESİNLİKLE MÜMKÜN DEĞİLDİR?",
          "options": [
            {
              "key": "A",
              "text": "Yaprakların doğrudan biraz daha fazla açılması."
            },
            {
              "key": "B",
              "text": "Yaprakların biraz kapanması."
            },
            {
              "key": "C",
              "text": "Yaprakların tamamen kapanması."
            },
            {
              "key": "D",
              "text": "Yaprakların önce tamamen kapanıp sonra tekrar açılması."
            }
          ],
          "correctAnswer": "A",
          "explanation": "(+) elektroskoba (-) dokunursa nötrleşme olur. Eğer (-) az ise biraz kapanır. Eşit ise tamamen kapanır. (-) çok ise nötrlenip yapraklar (-) ile tekrar açılır. Ancak yaprakların doğrudan daha fazla açılması imkânsızdır."
        },
        {
          "id": 4,
          "theme": "Akaryakıt Tankerlerinde Statik Elektrik ve Topraklama",
          "cognitiveLevel": "Günlük Yaşam Güvenliği Muhakemesi",
          "contextTitle": "Tekerlekli Tankerlerin Arkasındaki Metal Zincir",
          "scenario": "Yolda hareket eden benzin ve mazot tankerlerinin arka tamponunda yere sürtünerek giden metal bir zincir sarkar.",
          "questionPrompt": "Bu zincirin kullanılmasının temel teknik amacı nedir?",
          "options": [
            {
              "key": "A",
              "text": "Yolda hava ve tekerlek sürtünmesiyle tanker gövdesinde biriken statik elektriği sürekli toprağa aktararak kıvılcım ve patlama riskini önlemek."
            },
            {
              "key": "B",
              "text": "Tankerin fren mesafesini kısaltarak kazaları önlemek."
            },
            {
              "key": "C",
              "text": "Yol üzerindeki manyetik metalleri toplayıp depolamak."
            },
            {
              "key": "D",
              "text": "Tankerin arkasından gelen araçları ses çıkararak uyarmak."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Sürtünme ile elektriklenen tankerdeki kıvılcım benzini patlatabilir. Yere değen zincir sürekli topraklama yaparak tankeri nötr tutar."
        },
        {
          "id": 5,
          "theme": "Paratoner (Yıldırımsavar) Sistemi",
          "cognitiveLevel": "Mühendislik ve Doğa Olayı Dengesi",
          "contextTitle": "Gökdelenlerin Çatısındaki Sivri Metal Çubuklar",
          "scenario": "Yüksek binaların ve minarelerin tepesine monte edilen paratonerlerin kalın bir bakır şeritle toprağın derinliklerine gömülen metal levhaya bağlandığı bilinmektedir.",
          "questionPrompt": "Paratoner sisteminin çalışma prensibi hakkında hangisi doğrudur?",
          "options": [
            {
              "key": "A",
              "text": "Yıldırım düştüğünde devasa elektrik akımını binaya zarar vermeden doğrudan toprağa ileterek zararsız hale getirir."
            },
            {
              "key": "B",
              "text": "Bulutlardaki elektriği emerek evin elektrik prizlerine dağıtır."
            },
            {
              "key": "C",
              "text": "Yıldırımın oluşmasını engelleyerek yağmur yağışını durdurur."
            },
            {
              "key": "D",
              "text": "Sadece güneş enerjisini elektrik enerjisine çevirir."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Paratoner sivri ucuyla yıldırım akımını üzerine çeker ve dirençsiz iletken hatla doğrudan toprağa aktararak can ve mal kaybını önler."
        },
        {
          "id": 6,
          "theme": "Topraklı Prizlerin Ev Güvenliğindeki Rolü",
          "cognitiveLevel": "Ev İçi Güvenlik ve Mantık",
          "contextTitle": "Çamaşır Makinesinde Elektrik Kaçağı",
          "scenario": "Metal gövdesinde elektrik kaçağı olan bir çamaşır makinesi topraklı prize takılmıştır.",
          "questionPrompt": "Bu durumda kullanıcı makineye dokunduğunda elektrik çarpmasından nasıl korunur?",
          "options": [
            {
              "key": "A",
              "text": "Kaçak elektrik akımı direnci çok daha az olan topraklama hattından toprağa akar ve insanı çarpmaz."
            },
            {
              "key": "B",
              "text": "Topraklı priz makinenin çalışmasını anında durdurarak elektriği kapatır."
            },
            {
              "key": "C",
              "text": "İnsan vücudu topraktan daha iletken olduğu için akım insana hücum eder."
            },
            {
              "key": "D",
              "text": "Topraklı priz elektrik akımını manyetik alana çevirerek havaya dağıtır."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Elektrik akımı daima en az dirençli yolu seçer. Topraklama telinin direnci insan vücudundan çok düşüktür; bu yüzden akım toprağa akar ve insan zarar görmez."
        },
        {
          "id": 7,
          "theme": "Özdeş İki Elektroskobun İletken Telle Birleştirilmesi",
          "cognitiveLevel": "Yük Paylaşımı ve Yaprak Açıklığı",
          "contextTitle": "K ve L Elektroskopları Arasındaki Anahtar",
          "scenario": "Yükü -8q olan K elektroskobu ile yükü +2q olan özdeş L elektroskobu arasındaki iletken telin anahtarı kapatılmıştır.",
          "questionPrompt": "Yük dengesi sağlandıktan sonra elektroskopların son yükleri ve yaprak durumları hangisinde doğru verilmiştir?",
          "options": [
            {
              "key": "A",
              "text": "Toplam yük (-6q) eşit paylaşılır (-3q); K’nin yaprakları biraz kapanır, L’nin yaprakları önce kapanıp sonra tekrar açılır."
            },
            {
              "key": "B",
              "text": "Her iki elektroskop da tamamen nötrlenir ve yaprakları kapanır."
            },
            {
              "key": "C",
              "text": "K elektroskobu -8q kalır, L elektroskobu nötr olur."
            },
            {
              "key": "D",
              "text": "L elektroskobunun yaprakları doğrudan daha fazla açılır."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Toplam yük = -8q + (+2q) = -6q. Özdeş olduklarından kişi başı -3q alırlar. K (-8q’dan -3q’ya) yaprakları biraz kapanır. L (+2q’dan -3q’ya) önce nötrlenip yaprakları kapanır, sonra (-) yüklenip tekrar açılır."
        }
      ]
    },
    {
      "id": "g8-u7-sub3",
      "title": "3. Bölüm: Elektrik Enerjisinin Dönüşümü, Güç Santralleri ve Tasarruf",
      "shortTitle": "Enerji Dönüşümü & Güç Santralleri",
      "badge": "Kavramlar & LGS",
      "pageRange": "",
      "concepts": [
        "Elektrik Enerjisinin Isıya Dönüşümü",
        "Sigorta",
        "Işığa Dönüşüm (Filaman ve LED)",
        "Elektrik Motoru (Elektrik ➔ Hareket)",
        "Jeneratör (Hareket ➔ Elektrik)",
        "Hidroelektrik Santral (HES)",
        "Termik Santral",
        "Rüzgâr Santrali (RES)",
        "Jeotermal Santral",
        "Nükleer Santral",
        "Enerji Verimliliği ve A Sınıfı"
      ],
      "simulationId": "dynamometer",
      "summarySections": [
        {
          "heading": "Elektrik Enerjisinin Isı, Işık ve Hareket Enerjisine Dönüşümü",
          "paragraphs": [
            "Elektrik enerjisi iletkenlerin direncine ve kullanılan teknolojiye bağlı olarak ısı, ışık veya mekanik hareket enerjisine dönüştürülebilir (ÖS ÇIKTI).",
            "Isıya Dönüşüm: Yüksek dirençli iletken tellerden (krom-nikel tel) akım geçtiğinde tel ısınır; açığa çıkan ısı enerjisi akımın karesi, iletkenin direnci ve süresiyle doğru orantılıdır (ÖS ÇIKTI).",
            "Isı Enerjisine Dönüşüm Örnekleri: Elektrikli soba, su ısıtıcısı (kettle), fırın, ütü, tost makinesi, termosifon ve saç kurutma makinesinde elektrik doğrudan ısıya dönüştürülür (ÖS ÇIKTI).",
            "Sigorta: Elektrik devresinden normalden fazla akım geçtiğinde eriyerek devreyi kesen, yangın çıkmasını ve ev aletlerinin yanmasını önleyen güvenlik elemanıdır (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Sigorta Bağlantı Kuralı: Sigorta devredeki alıcıya (cihaza) DAİMA SERİ bağlanır; sigorta değeri cihazın çektiği normal akımdan biraz daha büyük seçilmelidir (Örn: 5 Amper çeken cihaza 6 Amper sigorta uygundur) (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Kısa Devre: Akımın dirençsiz veya çok düşük dirençli kolay yolu tercih ederek devreyi tamamlaması sonucu aşırı akım geçmesi ve kabloların aşırı ısınıp yanması olayıdır (ÖS ÇIKTI).",
            "Işığa Dönüşüm: Akkor telli klasik ampullerde yüksek erime sıcaklığına sahip ince ve uzun tungsten filaman tel ışıma yapar ancak enerjinin yaklaşık %90'ını ısı olarak boşa harcar; günümüzde kullanılan LED ve tasarruflu lambalar enerjiyi doğrudan ışığa çevirerek yüksek enerji verimi sağlar (ÖS ÇIKTI).",
            "Elektrik Motoru: Elektrik enerjisini HAREKET (KİNETİK) ENERJİSİNE dönüştüren araçlardır; vantilatör, çamaşır makinesi, mikser, matkap, uzaktan kumandalı araba, robotlar ve elektrikli trenlerde bulunur (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Jeneratör (Dinamo): HAREKET (KİNETİK) ENERJİSİNİ ELEKTRİK ENERJİSİNE dönüştüren araçtır; elektrik santrallerinde türbinlerin dönmesiyle elektrik üretimini sağlar (LGS ÇIKTI) (ÖS ÇIKTI)."
          ],
          "keyPoints": [
            "Elektrik Motoru: Elektrik ➔ Kinetik (Hareket) enerjisi (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Jeneratör: Kinetik (Hareket) ➔ Elektrik enerjisi (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Sigorta Prensibi: Cihazı korumak için seri bağlanır ve aşırı akımda eriyerek akımı keser (LGS ÇIKTI) (ÖS ÇIKTI)."
          ]
        },
        {
          "heading": "Elektrik Üreten Güç Santralleri ve Tasarruf Tedbirleri",
          "paragraphs": [
            "1. Hidroelektrik Santral (HES): Barajda biriken suyun çekim potansiyel enerjisi ➔ Akan suyun kinetik enerjisi ➔ Su türbini ➔ Jeneratör ➔ Elektrik enerjisi; atık üretmez ancak baraj gölü yerleşim alanlarını ve doğal ekosistemi sular altında bırakır (LGS ÇIKTI) (ÖS ÇIKTI).",
            "2. Termik Santraller: Kömür, linyit, fuel-oil veya doğal gaz gibi fosil yakıtların yanması ➔ Isı enerjisi ➔ Yüksek basınçlı su buharı ➔ Buhar türbini ➔ Jeneratör ➔ Elektrik enerjisi; sera gazı salarak küresel ısınmaya ve asit yağmurlarına yol açar (LGS ÇIKTI) (ÖS ÇIKTI).",
            "3. Rüzgâr Santrali (RES): Rüzgârın kinetik enerjisi ➔ Rüzgâr türbini kanatları ➔ Jeneratör ➔ Elektrik enerjisi; temiz ve yenilenebilir bir kaynaktır (ÖS ÇIKTI).",
            "4. Jeotermal Santraller: Yerin derinliklerindeki sıcak su ve buharın kinetik enerjisi ➔ Buhar türbini ➔ Jeneratör ➔ Elektrik enerjisi (ÖS ÇIKTI).",
            "5. Nükleer Santraller: Uranyum atomlarının çekirdek parçalanması (fisyon) ➔ Yüksek ısı enerjisi ➔ Buhar türbini ➔ Jeneratör ➔ Elektrik enerjisi; atmosfere sera gazı salmaz ancak radyoaktif atık ve kaza riski yüksektir (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Elektrik Tasarrufu: Evlerde A+++ enerji sınıfı cihazların tercih edilmesi, cihazların bekleme (stand-by) konumunda bırakılmayıp kapatılması ve gereksiz lambaların söndürülmesi hem aile bütçesine hem de ülke ekonomisine büyük tasarruf sağlar (ÖS ÇIKTI)."
          ],
          "table": {
            "headers": [
              "Alet / Cihaz",
              "Giriş Enerjisi",
              "Dönüşen Çıkış Enerjisi"
            ],
            "rows": [
              [
                "Elektrikli Soba / Ütü",
                "Elektrik Enerjisi",
                "Isı Enerjisi"
              ],
              [
                "Ampul / LED Lamba",
                "Elektrik Enerjisi",
                "Işık ve Isı Enerjisi"
              ],
              [
                "Elektrik Motoru (Vantilatör)",
                "Elektrik Enerjisi",
                "Hareket (Kinetik) Enerjisi"
              ],
              [
                "Jeneratör / Dinamo",
                "Hareket (Kinetik) Enerjisi",
                "Elektrik Enerjisi"
              ]
            ]
          },
          "examNote": "📌 LGS & ÖS ENERJİ DÖNÜŞÜM FARKI: Elektrik Motoru 'Elektrik ➔ Hareket' üretirken; Jeneratör tam tersi mekanizmayla 'Hareket ➔ Elektrik' üretir; santrallerde türbini çeviren hareket kaynağı ne olursa olsun elektriği üreten aygıt JENERATÖRDÜR (LGS ÇIKTI) (ÖS ÇIKTI)."
        }
      ],
      "glossary": [
        {
          "term": "Elektrik Motoru",
          "definition": "Elektrik enerjisini dönme ve hareket enerjisine çeviren aygıt."
        },
        {
          "term": "Jeneratör",
          "definition": "Hareket enerjisini elektrik enerjisine çeviren üreteç."
        },
        {
          "term": "Sigorta",
          "definition": "Aşırı akımda eriyerek elektrik devresini kesen güvenlik aracı."
        }
      ],
      "trueFalseQuestions": [
        {
          "id": 1,
          "statement": "Elektrik motorları hareket enerjisini elektrik enerjisine dönüştürür.",
          "isCorrect": false,
          "explanation": "Jeneratör hareketten elektrik üretir; elektrik motoru elektrikten hareket üretir."
        },
        {
          "id": 2,
          "statement": "Sigortalar elektrik devrelerinde yüksek gerilim ve yangın tehlikesine karşı koruma sağlar.",
          "isCorrect": true,
          "explanation": "Aşırı akımda teli eriyerek akımı keser."
        },
        {
          "id": 3,
          "statement": "Hidroelektrik santrallerde suyun potansiyel enerjisi hareket enerjisine, o da jeneratörle elektriğe dönüşür.",
          "isCorrect": true,
          "explanation": "HES’lerdeki enerji dönüşüm zinciridir."
        },
        {"id":4,"statement":"Elektrikli fırın ve ütü gibi cihazlar elektrik enerjisini ısı enerjisine dönüştürmek amacıyla direnci yüksek iletken teller kullanır.","isCorrect":true,"explanation":"Yüksek dirençli iletkenlerden akım geçtiğinde Joule kanununa göre açığa çıkan ısı enerjisi artar."},
        {"id":5,"statement":"Sigorta, bir elektrik devresinden güvenli sınırın üzerinde aşırı akım geçtiğinde devreyi keserek yangın ve hasarı önleyen güvenlik elemanıdır.","isCorrect":true,"explanation":"Sigortalar aşırı akımda eriyerek ya da devreyi otomatik açarak akımı keser."},
        {"id":6,"statement":"Hidroelektrik santrallerde suyun potansiyel enerjisi önce kinetik enerjiye, ardından türbin ve jeneratörler yardımıyla elektrik enerjisine dönüştürülür.","isCorrect":true,"explanation":"Barajdaki suyun düşüş enerjisi türbinleri döndürerek jeneratörde elektrik üretir."},
        {"id":7,"statement":"Aynı aydınlatma şiddetine sahip akkor telli ampuller, LED ampullere göre elektrik enerjisini daha tasarruflu kullanır.","isCorrect":false,"explanation":"LED ampuller elektrik enerjisinin çoğunu ışığa çevirirken akkor ampuller büyük kısmını ısı olarak yayarak fazla enerji harcar."}
      ],
      "lgsQuestions": [
        ...sebahattinElektrikQuestions.filter(q => q.subTopicId === 'g8-u7-sub3'),
        {
          "id": 1,
          "theme": "Enerji Dönüşümleri ve Cihazlar",
          "cognitiveLevel": "Kavramsal Eşleştirme",
          "contextTitle": "Elektrik Enerjisinin Isıya Dönüşümü ve Sigorta",
          "scenario": "Elektrik enerjisinin ısı, ışık ve hareket enerjisine dönüştüğü cihazlar incelenmektedir.",
          "questionPrompt": "Aşağıdaki cihazlardan hangisi elektrik enerjisini doğrudan hareket enerjisine dönüştürür?",
          "options": [
            {
              "key": "A",
              "text": "Çamaşır makinesi"
            },
            {
              "key": "B",
              "text": "Elektrikli fırın"
            },
            {
              "key": "C",
              "text": "Tost makinesi"
            },
            {
              "key": "D",
              "text": "Akkor ampul"
            }
          ],
          "correctAnswer": "A",
          "explanation": "Çamaşır makinesinde bulunan elektrik motoru elektrik enerjisini kazanın dönme (hareket) enerjisine dönüştürür."
        },
        {
          "id": 2,
          "theme": "Elektrik Motoru ve Jeneratör Karşılaştırması",
          "cognitiveLevel": "İşlevsel Zıtlık Muhakemesi",
          "contextTitle": "Vantilatör ve Bisiklet Dinamosu",
          "scenario": "Bir fen laboratuvarında vantilatör ile bisiklet dinamosunun çalışma prensipleri karşılaştırılmaktadır.",
          "questionPrompt": "Bu iki aygıtın enerji dönüşüm yönleri hakkında hangisi doğrudur?",
          "options": [
            {
              "key": "A",
              "text": "Vantilatör elektrik enerjisini hareket enerjisine çevirir; bisiklet dinamosu ise hareket enerjisini elektrik enerjisine çevirir."
            },
            {
              "key": "B",
              "text": "Her iki aygıt da sadece ısı enerjisi üretmek için tasarlanmıştır."
            },
            {
              "key": "C",
              "text": "Vantilatör jeneratör prensibiyle çalışır."
            },
            {
              "key": "D",
              "text": "Dinamo elektrik tüketir, vantilatör elektrik üretir."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Vantilatör elektrik motoru içerir (Elektrik ➔ Hareket). Dinamo bir jeneratördür (Tekerleğin Hareketi ➔ Elektrik)."
        },
        {
          "id": 3,
          "theme": "Sigorta Değeri Seçimi ve Yangın Güvenliği",
          "cognitiveLevel": "Devre Güvenliği ve Hesaplama",
          "contextTitle": "Ev Aletlerinin Çektiği Akım ve Sigorta",
          "scenario": "Bir evde normal çalışma sırasında 12 Amper akım çeken bir elektrikli fırının bağlı olduğu hatta sigorta takılacaktır.",
          "questionPrompt": "Fırının güvenle çalışması ve aşırı akımda devreyi kesmesi için takılması gereken en uygun sigorta değeri kaç Amper olmalıdır?",
          "options": [
            {
              "key": "A",
              "text": "13 veya 16 Amper"
            },
            {
              "key": "B",
              "text": "5 Amper"
            },
            {
              "key": "C",
              "text": "10 Amper"
            },
            {
              "key": "D",
              "text": "50 Amper"
            }
          ],
          "correctAnswer": "A",
          "explanation": "Sigorta değeri cihazın normal çektiği akımdan (12 A) hemen bir tık büyük olmalıdır (13-16 A). 5 A veya 10 A olursa fırın hiç çalışmaz; 50 A olursa fırın yansa bile sigorta atmaz ve yangın çıkar."
        },
        {
          "id": 4,
          "theme": "Hidroelektrik Santrallerde Enerji Dönüşüm Zinciri",
          "cognitiveLevel": "Sistem Süreci Sıralaması",
          "contextTitle": "Baraj Göletinden Şebekeye Elektrik Üretimi",
          "scenario": "Bir hidroelektrik santralde (HES) baraj gölünde toplanan suyun elektrik enerjisine dönüşüm aşamaları incelenmiştir.",
          "questionPrompt": "HES’lerde gerçekleşen enerji dönüşüm basamaklarının doğru sıralanışı hangisidir?",
          "options": [
            {
              "key": "A",
              "text": "Çekim Potansiyel Enerjisi ➔ Kinetik Enerji (Akış) ➔ Mekanik Enerji (Türbin) ➔ Elektrik Enerjisi (Jeneratör)"
            },
            {
              "key": "B",
              "text": "Kimyasal Enerji ➔ Nükleer Enerji ➔ Elektrik Enerjisi"
            },
            {
              "key": "C",
              "text": "Elektrik Enerjisi ➔ Potansiyel Enerji ➔ Kinetik Enerji"
            },
            {
              "key": "D",
              "text": "Isı Enerjisi ➔ Işık Enerjisi ➔ Elektrik Enerjisi"
            }
          ],
          "correctAnswer": "A",
          "explanation": "Yüksekteki su potansiyel enerjiye sahiptir. Borulardan hızla akarken kinetik enerjiye, çarkı döndürünce mekanik enerjiye, jeneratörde ise elektrik enerjisine dönüşür."
        },
        {
          "id": 5,
          "theme": "Güç Santrallerinin Çevresel Etkileri",
          "cognitiveLevel": "Çevre Değerlendirmesi ve Karşılaştırma",
          "contextTitle": "Termik Santral ile Rüzgâr Santralinin Kıyaslanması",
          "scenario": "Kömürle çalışan bir termik santral ile kanatları rüzgârla dönen bir rüzgâr enerji santrali (RES) çevresel etkileri bakımından karşılaştırılmıştır.",
          "questionPrompt": "Bu iki santralin çevreye etkileri ile ilgili hangisi doğrudur?",
          "options": [
            {
              "key": "A",
              "text": "Termik santral fosil yakıt yaktığı için sera gazı ve asit yağmuru salar; rüzgâr santrali ise karbon salımı yapmayan temiz ve yenilenebilir bir kaynaktır."
            },
            {
              "key": "B",
              "text": "Rüzgâr santralleri atmosferdeki oksijen gazını tamamen tüketir."
            },
            {
              "key": "C",
              "text": "Termik santraller çevreye hiçbir zararlı gaz veya atık bırakmaz."
            },
            {
              "key": "D",
              "text": "Her iki santral de uranyum madeni kullanarak nükleer atık üretir."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Kömürlü termik santraller CO2 ve SO2 salarak küresel ısınmaya ve asit yağmuruna neden olur. RES ise yakıt yakmaz ve sıfır emisyonludur."
        },
        {
          "id": 6,
          "theme": "Akkor Flamanlı Ampul ile LED Lambanın Verimlilik Kıyası",
          "cognitiveLevel": "Enerji Tasarrufu ve Verimlilik Analizi",
          "contextTitle": "Aynı Işığı Veren İki Farklı Aydınlatma Aracı",
          "scenario": "Aynı aydınlatma şiddetini veren 100 Watt gücündeki akkor filamanlı klasik ampul ile 12 Watt gücündeki LED lamba 1 saat boyunca çalıştırılmıştır.",
          "questionPrompt": "LED lambanın akkor ampule göre neredeyse 10 kat daha az enerji tüketmesinin bilimsel sebebi nedir?",
          "options": [
            {
              "key": "A",
              "text": "Akkor ampul aldığı enerjinin %90’ını istenmeyen ısı enerjisine dönüştürürken, LED lamba enerjinin neredeyse tamamını doğrudan ışığa dönüştürür."
            },
            {
              "key": "B",
              "text": "LED lamba çalışırken elektrik şebekesinden hiç elektrik akımı çekmez."
            },
            {
              "key": "C",
              "text": "Akkor ampul sadece karanlıkta ışık yayabilir."
            },
            {
              "key": "D",
              "text": "LED lambanın içinde nükleer reaksiyon gerçekleşmektedir."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Klasik filamanlı ampullerde enerjinin %90-95’i ısı olarak boşa gider, sadece %5-10’u ışıktır. LED lambalar ise yarı iletken teknolojisiyle enerjiyi ısıtmadan doğrudan ışığa çevirerek devasa tasarruf sağlar."
        }
      ]
    }
  ]
};

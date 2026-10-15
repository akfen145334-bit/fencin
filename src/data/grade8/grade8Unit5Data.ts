import { Unit } from '../../types/curriculum';
import { grade8Unit5End20Questions } from './grade8UnitEndExams';
import { sebahattinBasitMakinelerQuestions } from './sebahattinQuestions';

export const grade8Unit5Data: Unit = {
  "id": "g8-unit-5",
  "unitNumber": 5,
  "bookNumber": 1,
  "grade": 8,
  "subject": "Fen Bilimleri",
  "title": "Basit Makineler",
  "unitEndPageRange": "Ünite Sonu",
  "colorTheme": {
    "primary": "from-orange-600 to-amber-700",
    "border": "border-orange-500/40",
    "bg": "bg-orange-950/40",
    "accent": "text-orange-400",
    "text": "text-orange-200"
  },
  "unitEnd20Questions": grade8Unit5End20Questions,
  "subTopics": [
    {
      "id": "g8-u5-sub1",
      "title": "1. Bölüm: Basit Makineler ve Makaralar",
      "shortTitle": "Basit Makineler & Makaralar",
      "badge": "Kavramlar & LGS",
      "pageRange": "",
      "concepts": [
        "Giriş ve Çıkış Kuvveti",
        "Kuvvet Kazancı",
        "Yoldan Kayıp",
        "İş ve Enerjiden Kazanç Olmaz Kuralı",
        "Sabit Makara",
        "Hareketli Makara",
        "Palangalar",
        "Kuvvetin Yönünü Değiştirme"
      ],
      "simulationId": "dynamometer",
      "summarySections": [
        {
          "heading": "Basit Makinelerin Genel Çalışma İlkeleri ve İş Prensibi",
          "paragraphs": [
            "Günlük yaşamda iş yapma kolaylığı sağlamak amacıyla kullanılan az parçalı araçlara basit makine denir (ÖS ÇIKTI).",
            "ALTIN İŞ KURALI: Hiçbir basit makinede İŞTEN veya ENERJİDEN KAZANÇ KESİNLİKLE SAĞLANAMAZ; yer çekimine karşı yapılan toplam iş ve harcanan enerji miktarı aynı kalır (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Basit makineler uygulanan giriş kuvvetinin büyüklüğünü, yönünü ya da doğrultusunu değiştirerek veya zamandan kazanç sağlayarak iş yapma kolaylığı oluşturur (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Kuvvet Kazancı ve Yoldan Kayıp Prensibi: Bir basit makinede kuvvetten kazanç ne oranda varsa, yoldan AYNI ORANDA KAYIP vardır; aynı anda hem kuvvetten hem de yoldan kazanç sağlanamaz (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Kuvvet Kazancı Oranı: Yük / Kuvvet (Çıkış Kuvveti / Giriş Kuvveti) formülü ile hesaplanır; bu oran 1'den büyükse kuvvetten kazanç, 1'e eşitse kazanç/kayıp yok, 1'den küçükse yoldan kazanç vardır (ÖS ÇIKTI)."
          ],
          "keyPoints": [
            "İş Değişmezliği İlkesi: İş = Kuvvet × Yol formülünde kuvvet küçülürse çekilen ip miktarı (yol) aynı oranda uzar; sonuçta yapılan iş sabit kalır (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Sabit Makara Prensibi: Dönme ekseninden tavana veya duvara sabitlenmiş makaralardır; sürtünmesiz ortamda kuvvet yükün ağırlığına eşittir (F = P) ve kuvvetten veya yoldan kazanç/kayıp yoktur (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Sabit Makaranın İş Kolaylığı: Yalnızca kuvvetin yönünü değiştirerek yer çekimi kuvvetinden ve vücut ağırlığından yararlanma imkanı sunar (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Sabit Makarada İp Hareketi: Yükün h kadar yükselmesi için çekilen ip miktarının da tam olarak h kadar olması gerekir; makara ağırlığı veya yarıçapı uygulanacak kuvveti ve kazancı etkilemez (ÖS ÇIKTI).",
            "Hareketli Makara Prensibi: Yükün makara eksenine asıldığı ve makaranın yükle beraber aşağı-yukarı hareket ettiği sistemlerdir; sürtünmesiz ortamda 2 kat kuvvet kazancı sağlarken yoldan 2 kat kaybettirir (F = P / 2) (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Hareketli Makarada İp Hareketi: Yükün h kadar yükseltilmesi için ipin 2h kadar çekilmesi şarttır (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Hareketli Makarada Kuvvet Yönü: İpin çekilme yönü ile yükün yükselme yönü aynıdır; kuvvetin yönü değişmez (ÖS ÇIKTI).",
            "Makara Ağırlığı Etkisi: Hareketli makaranın kendi kütlesi varsa bu ağırlık yüke eklenir ve kuvvet ipindeki gerilmeyi artırarak sistemin kuvvet kazancını düşürür (ÖS ÇIKTI).",
            "Palanga Sistemleri: Sabit ve hareketli makaraların birlikte bağlandığı düzeneklerdir; yükü taşıyan ip sayısına bağlı olarak kuvvet kazancı sağlar ve makara bağlanışına göre kuvvetin yönünü de değiştirebilir (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Palangalarda İp Sayımı: Kuvvet uygulanan ip yukarı yönlü çekiliyorsa hareketli makarayı taşıdığı için iplere dahil edilir; aşağı yönlü çekiliyorsa yükü taşımadığı için sayıya katılmaz (LGS ÇIKTI) (ÖS ÇIKTI)."
          ],
          "examNote": "📌 LGS & ÖS SINAV TUZAĞI: 'Basit makine kullanılarak yapılan iş veya harcanan enerji azaltılır' ifadesi kesinlikle YANLIŞTIR; yapılan iş sabittir, yalnızca uygulanan kuvvet küçülerek veya yönü değiştirilerek iş kolaylığı sağlanır (LGS ÇIKTI) (ÖS ÇIKTI)."
        }
      ],
      "glossary": [
        {
          "term": "Kuvvet Kazancı",
          "definition": "Yükün uygulanan kuvvetten büyük olması durumu (Yük / Kuvvet > 1)."
        },
        {
          "term": "Sabit Makara",
          "definition": "Sadece kuvvetin yönünü değiştirerek iş kolaylığı sağlayan makara."
        },
        {
          "term": "Hareketli Makara",
          "definition": "Yükle beraber hareket eden ve 2 kat kuvvet kazancı sağlayan makara."
        }
      ],
      "trueFalseQuestions": [
        {
          "id": 1,
          "statement": "Basit makineler kullanılarak yapılan işten ve enerjiden kazanç sağlanır.",
          "isCorrect": false,
          "explanation": "Basit makinelerde işten veya enerjiden asla kazanç sağlanmaz."
        },
        {
          "id": 2,
          "statement": "Hareketli makarada yükü 2 metre yukarı çıkarmak için ip 4 metre çekilmelidir.",
          "isCorrect": true,
          "explanation": "Kuvvetten 2 kat kazanç olduğu için yoldan 2 kat kayıp vardır."
        },
        {
          "id": 3,
          "statement": "Sabit makaralarda kuvvetin büyüklüğü yükün ağırlığına eşittir.",
          "isCorrect": true,
          "explanation": "Sürtünmeler ihmal edildiğinde F = P’dir."
        },
        {"id":4,"statement":"Kuvvet kolu yük kolundan büyük olan bir kaldıraçta kuvvetten kazanç sağlanırken yoldan kayıp oluşur.","isCorrect":true,"explanation":"Kuvvet kazancı = Kuvvet Kolu / Yük Kolu oranına eşittir; oran 1’den büyükse kuvvetten kazanç, yoldan kayıp vardır."},
        {"id":5,"statement":"Basit makineler enerjiden veya yapılan işten kazanç sağlamak amacıyla kullanılır.","isCorrect":false,"explanation":"Hiçbir basit makine işten veya enerjiden kazanç sağlamaz; sadece iş yapma kolaylığı sağlar ve kuvvetin yönünü/büyüklüğünü değiştirebilir."},
        {"id":6,"statement":"Cımbız ve tenis raketi desteğin yük ile kuvvet arasında olduğu çift taraflı kaldıraçlara örnektir.","isCorrect":false,"explanation":"Cımbız ve raket kuvvetin ortada olduğu kaldıraç tipine örnektir; yoldan kazanç, kuvvetten kayıp vardır."},
        {"id":7,"statement":"El arabası ve ceviz kıracağı yükün ortada olduğu ve daima kuvvetten kazanç sağlayan kaldıraçlardır.","isCorrect":true,"explanation":"Yük ortada olduğunda kuvvet kolu daima yük kolundan büyük olur, bu nedenle her zaman kuvvet kazancı vardır."}
      ],
      "lgsQuestions": [
        ...sebahattinBasitMakinelerQuestions.filter(q => q.subTopicId === 'g8-u5-sub1'),
        {
          "id": 1,
          "theme": "Makaralarda İp Çekme ve Yük Hareketi",
          "cognitiveLevel": "Problem Çözme",
          "contextTitle": "Sabit ve Hareketli Makaralar",
          "scenario": "K düzeneğinde 10 N yük sabit makaraya, L düzeneğinde ise 10 N yük hareketli makaraya bağlanarak dengelenmiştir.",
          "questionPrompt": "Bu düzeneklerle ilgili aşağıdaki ifadelerden hangisi doğrudur?",
          "options": [
            {
              "key": "A",
              "text": "L düzeneğinde yükü 2 metre yukarı çıkarmak için ip 4 metre çekilmelidir."
            },
            {
              "key": "B",
              "text": "K düzeneğinde uygulanan kuvvet L düzeneğinden daha küçüktür."
            },
            {
              "key": "C",
              "text": "L düzeneğinde yapılan iş K düzeneğinden daha azdır."
            },
            {
              "key": "D",
              "text": "K düzeneğinde kuvvetten 2 kat kazanç vardır."
            }
          ],
          "correctAnswer": "A",
          "explanation": "L düzeneği hareketli makaradır; kuvvetten 2 kat kazanç (F = 5 N) sağlarken yoldan 2 kat kaybettirir. Yükü 2 m kaldırmak için ip 4 m çekilmelidir."
        },
        {
          "id": 2,
          "theme": "Sabit Makaranın İş Kolaylığı Prensibi",
          "cognitiveLevel": "Kavramsal Muhakeme",
          "contextTitle": "İnşaatta Harç Taşıma Makarası",
          "scenario": "Bir inşaat işçisi 60 N ağırlığındaki harç kovasını 3. kata çıkarırken tavana sabitlenmiş bir sabit makara kullanmaktadır. İpi aşağı doğru çekerek harç kovasını yukarı doğru hareket ettirmektedir.",
          "questionPrompt": "Bu sabit makara sistemi ile ilgili hangisi doğrudur?",
          "options": [
            {
              "key": "A",
              "text": "İşçinin harcadığı kuvvet yükün ağırlığına eşittir ancak kuvvetin yönünü değiştirerek yer çekiminden ve vücut ağırlığından yararlanma iş kolaylığı sağlamıştır."
            },
            {
              "key": "B",
              "text": "İşçi bu sistem sayesinde yapılan toplam işten yarı yarıya tasarruf etmiştir."
            },
            {
              "key": "C",
              "text": "İşçi kovayı 6 metre yukarı çıkarmak için ipi 12 metre çekmek zorundadır."
            },
            {
              "key": "D",
              "text": "Sabit makara sürtünmesiz ortamda kuvvet kazancı 4 kat olan bir sistemdir."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Sabit makarada kuvvetten veya yoldan kazanç yoktur. İş kolaylığı yalnızca kuvvetin yönünü değiştirmekten (aşağı çekerek vücut ağırlığını kullanabilmekten) kaynaklanır."
        },
        {
          "id": 3,
          "theme": "Hareketli Makara ve Dinamometre Değerleri",
          "cognitiveLevel": "Deneysel Ölçüm Analizi",
          "contextTitle": "Sürtünmesiz Makarada Yük Ölçümü",
          "scenario": "Laboratuvarda 120 N ağırlığındaki bir koli, ağırlığı ve sürtünmesi önemsiz bir hareketli makara düzeneğine asılmış ve dinamometre ile dengede tutulmuştur.",
          "questionPrompt": "Dinamometrenin gösterdiği değer ve kolinin 3 metre yükselmesi için ipin çekilmesi gereken miktar hangisidir?",
          "options": [
            {
              "key": "A",
              "text": "Dinamometre 60 N gösterir, ip 6 metre çekilmelidir."
            },
            {
              "key": "B",
              "text": "Dinamometre 120 N gösterir, ip 3 metre çekilmelidir."
            },
            {
              "key": "C",
              "text": "Dinamometre 30 N gösterir, ip 12 metre çekilmelidir."
            },
            {
              "key": "D",
              "text": "Dinamometre 240 N gösterir, ip 1,5 metre çekilmelidir."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Hareketli makarada F = P / 2 = 120 / 2 = 60 N olur. Yoldan 2 kat kayıp olduğu için yükün 3 m yükselmesi amacıyla ip 3 x 2 = 6 m çekilmelidir."
        },
        {
          "id": 4,
          "theme": "Palanga Sistemlerinde Kuvvet Kazancı Hesabı",
          "cognitiveLevel": "Mekanik Sistem Çözümlemesi",
          "contextTitle": "İki Farklı Palanga Düzeneği",
          "scenario": "Özdeş makaralarla kurulan iki palangada 180 N ağırlığındaki yük taşınmaktadır: 1. palangada ip yukarı doğru çekilmekte ve yükü taşıyan 3 ip bulunmaktadır. 2. palangada ise ip aşağı doğru çekilmekte ve yükü taşıyan 2 ip bulunmaktadır.",
          "questionPrompt": "Bu palangalarda yükü dengeleyen F1 ve F2 kuvvetleri kaç Newton’dur?",
          "options": [
            {
              "key": "A",
              "text": "F1 = 60 N , F2 = 90 N"
            },
            {
              "key": "B",
              "text": "F1 = 90 N , F2 = 60 N"
            },
            {
              "key": "C",
              "text": "F1 = 45 N , F2 = 90 N"
            },
            {
              "key": "D",
              "text": "F1 = 60 N , F2 = 45 N"
            }
          ],
          "correctAnswer": "A",
          "explanation": "1. palangada 3 ip taşıdığı için F1 = 180 / 3 = 60 N. 2. palangada 2 ip taşıdığı için F2 = 180 / 2 = 90 N olur."
        },
        {
          "id": 5,
          "theme": "Basit Makinelerde İş Prensibi",
          "cognitiveLevel": "Kavram Yanılgısı ve Muhakeme",
          "contextTitle": "Ağır Bir Sandığı 2. Kata Taşıma Görevi",
          "scenario": "Bir öğrenci 200 N sandığı tek başına doğrudan 5 metre yüksekliğe merdivenden çıkarmış (1. yöntem); diğer öğrenci ise 4 kat kuvvet kazancı sağlayan bir palanga kurarak sandığı aynı 5 metre yüksekliğe çıkarmıştır (2. yöntem).",
          "questionPrompt": "İki yöntemde yer çekimine karşı yapılan işler (W1 ve W2) ile ilgili hangisi doğrudur?",
          "options": [
            {
              "key": "A",
              "text": "Yapılan işler birbirine eşittir (W1 = W2), palanga işten değil yalnızca kuvvetten tasarruf sağlamıştır."
            },
            {
              "key": "B",
              "text": "2. yöntemde yapılan iş 1. yöntemde yapılan işin 4 katıdır."
            },
            {
              "key": "C",
              "text": "2. yöntemde kuvvet kazancı olduğu için yapılan iş 4 kat azalmıştır."
            },
            {
              "key": "D",
              "text": "1. yöntemde sandık daha hafif hissedildiği için daha az enerji harcanmıştır."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Basit makinelerde yapılan iş değişmez: İş = Kuvvet x Yol. Palangada kuvvet 4 kat küçülmüş ancak çekilen ip 4 kat uzamıştır. Dolayısıyla W1 = W2 = 200 x 5 = 1000 J olur."
        },
        {
          "id": 6,
          "theme": "Makara Ağırlığının Kuvvete Etkisi",
          "cognitiveLevel": "Kontrollü Değişken Muhakemesi",
          "contextTitle": "Ağırlığı Olan Hareketli Makara Deneyi",
          "scenario": "Bir deneyde 80 N yük önce ağırlığı önemsiz bir hareketli makara ile (F1), sonra her biri 20 N ağırlığında olan hareketli makaralar ile (F2) dengelenmiştir.",
          "questionPrompt": "Makara ağırlığının uygulanan kuvvete etkisi hakkında hangisi doğrudur?",
          "options": [
            {
              "key": "A",
              "text": "F1 = 40 N iken makara ağırlığı eklendiğinde F2 = (80 + 20) / 2 = 50 N olur; makara ağırlığı uygulanan kuvveti artırır."
            },
            {
              "key": "B",
              "text": "Makaranın ağırlığı kuvvet kazancını iki katına çıkarır."
            },
            {
              "key": "C",
              "text": "F2 kuvveti 30 N değerine düşer ve sistem daha verimli çalışır."
            },
            {
              "key": "D",
              "text": "Hareketli makaranın ağırlığı uygulanan kuvveti kesinlikle etkilemez."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Hareketli makarada makaranın kendi ağırlığı da yükle birlikte kalkar: F = (P + Pmakara) / 2 = (80 + 20) / 2 = 50 N olur. Makara ağırlığı kuvvet kazancını azaltır."
        },
        {
          "id": 7,
          "theme": "Makaralarda İp Gerilmesi Analizi",
          "cognitiveLevel": "Sistem Dengesi ve Mantık",
          "contextTitle": "Tavana Bağlı İplerdeki Gerilmeler",
          "scenario": "Sürtünmesiz bir sabit makaranın bir ucunda 50 N yük, diğer ucunda ise 50 N uygulayan el bulunmaktadır.",
          "questionPrompt": "Makaranın tavanına bağlı olan taşıyıcı askı ipindeki toplam gerilme kuvveti kaç Newton’dur?",
          "options": [
            {
              "key": "A",
              "text": "100 N"
            },
            {
              "key": "B",
              "text": "50 N"
            },
            {
              "key": "C",
              "text": "0 N"
            },
            {
              "key": "D",
              "text": "25 N"
            }
          ],
          "correctAnswer": "A",
          "explanation": "Makaranın solundaki ip 50 N (yük), sağındaki ip 50 N (kuvvet) ile aşağı çekmektedir. Makarayı tavanda tutan askı ipi her iki kolun toplamını taşır: 50 + 50 = 100 N olur."
        }
      ]
    },
    {
      "id": "g8-u5-sub2",
      "title": "2. Bölüm: Kaldıraçlar",
      "shortTitle": "Kaldıraç Çeşitleri",
      "badge": "Kavramlar & LGS",
      "pageRange": "",
      "concepts": [
        "Kaldıraç Dengesi",
        "Destek Noktası",
        "Kuvvet Kolu",
        "Yük Kolu",
        "Desteğin Arada Olduğu Kaldıraç",
        "Yükün Arada Olduğu Kaldıraç",
        "Kuvvetin Arada Olduğu Kaldıraç",
        "Archimedes"
      ],
      "simulationId": "dynamometer",
      "summarySections": [
        {
          "heading": "Kaldıraç Prensibi ve Denge Şartı",
          "paragraphs": [
            "Sabit bir dönme noktası (destek) etrafında serbestçe dönebilen çubuk sistemlerine kaldıraç denir (ÖS ÇIKTI).",
            "Kaldıraçlarda Denge Bağıntısı: 'Kuvvet × Kuvvet Kolu = Yük × Yük Kolu' (F · a = P · b) eşitliği ile sağlanır (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Kuvvet Kolu: Kuvvetin uygulandığı noktanın destek noktasına olan dik uzaklığıdır; Yük Kolu: Yükün destek noktasına olan dik uzaklığıdır (ÖS ÇIKTI).",
            "Kuvvet Kazancı Kuralı: Bir kaldıraçta kuvvet kolu yük kolundan ne kadar uzunsa (Kuvvet Kolu > Yük Kolu), KUVVETTEN O KADAR KAZANÇ sağlanır; uygulanan kuvvet yükten küçük olur (LGS ÇIKTI) (ÖS ÇIKTI)."
          ],
          "keyPoints": [
            "Desteğin Arada Olduğu Kaldıraçlar (1. Tip / Çift Taraflı): Destek noktası yük ile kuvvetin arasındadır (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Desteğin Arada Olduğu Tiplerde Kazanç: Kuvvet kolu yük koluna eşitse kazanç yoktur (F = P); kuvvet kolu uzunsa kuvvetten kazanç, yük kolu uzunsa yoldan kazanç vardır; KUVVETİN YÖNÜ DAİMA DEĞİŞİR (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Desteğin Arada Olduğu Örnekler: Tahterevalli, eşit kollu terazi, makas, pense, kerpeten ve keser bu gruba girer (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Yükün Arada Olduğu Kaldıraçlar (2. Tip): Yük, destek ile kuvvet arasındadır (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Yükün Arada Olduğu Tiplerde Kazanç: Destek uçta olduğu için kuvvet kolu her zaman yük kolundan uzundur; bu nedenle DAİMA KUVVETTEN KAZANÇ, YOLDAN KAYIP vardır; kuvvetin yönü değişmez (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Yükün Arada Olduğu Örnekler: El arabası, fındık/ceviz kıracağı, gazoz açacağı, menteşeli kapı ve delgeç yükün ortada olduğu aletlerdir (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Kuvvetin Arada Olduğu Kaldıraçlar (3. Tip): Kuvvet, destek ile yükün arasındadır (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Kuvvetin Arada Olduğu Tiplerde Kazanç: Yük kolu her zaman kuvvet kolundan uzun olduğu için DAİMA KUVVETTEN KAYIP, YOLDAN KAZANÇ vardır; kuvvetin yönü değişmez (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Kuvvetin Arada Olduğu Tiplerin İş Kolaylığı: Kuvvetten kazandırmaz ancak hareket mesafesini ve hızını artırarak hassas işlerin daha kolay yapılmasına imkan tanır (ÖS ÇIKTI).",
            "Kuvvetin Arada Olduğu Örnekler: Cımbız, maşa, kürek, olta, tenis raketi, zımba ve insan kolu kuvvetin ortada olduğu araçlardır (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Dengeyi Değiştirme Kuralı: Bir kaldıraçta kuvvet kazancını artırmak için destek yüke yaklaştırılmalı veya kuvvet uygulama noktası destekten uzaklaştırılmalıdır (LGS ÇIKTI) (ÖS ÇIKTI)."
          ],
          "table": {
            "headers": [
              "Kaldıraç Tipi",
              "Ortadaki Eleman",
              "Kuvvet Kazancı Durumu",
              "Kuvvetin Yönü",
              "Günlük Yaşam Örnekleri"
            ],
            "rows": [
              [
                "1. Tip (Çift Taraflı)",
                "DESTEK ortada",
                "Kollara bağlıdır (Kazanç, kayıp veya eşit olabilir)",
                "Değişir (Zıt yönlü)",
                "Tahterevalli, pense, makas, eşit kollu terazi, keser"
              ],
              [
                "2. Tip (Tek Taraflı)",
                "YÜK ortada",
                "DAİMA KUVVET KAZANCI vardır (Kuvvet kolu > Yük kolu)",
                "Değişmez (Aynı yönlü)",
                "El arabası, ceviz kıracağı, gazoz açacağı, menteşeli kapı"
              ],
              [
                "3. Tip (Tek Taraflı)",
                "KUVVET ortada",
                "DAİMA KUVVETTEN KAYIP, YOLDAN KAZANÇ vardır",
                "Değişmez (Aynı yönlü)",
                "Cımbız, maşa, kürek, olta, tenis raketi, zımba"
              ]
            ]
          },
          "examNote": "📌 LGS & ÖS ŞİFRESİ: Yükün arada olduğu kaldıraçlarda (el arabası, ceviz kıracağı) destek uçta, kuvvet diğer uçtadır; bu yüzden kuvvet kolu daima yük kolundan uzundur ve DAİMA KUVVET KAZANCI vardır; kuvvetin yönü değişmez (LGS ÇIKTI) (ÖS ÇIKTI)."
        }
      ],
      "glossary": [
        {
          "term": "Kuvvet Kolu",
          "definition": "Uygulanan kuvvet ile destek noktası arasındaki dik mesafe."
        },
        {
          "term": "Yük Kolu",
          "definition": "Yük ile destek noktası arasındaki dik mesafe."
        }
      ],
      "trueFalseQuestions": [
        {
          "id": 1,
          "statement": "Kuvvet kolu yük kolundan uzun olan kaldıraçlarda daima kuvvet kazancı vardır.",
          "isCorrect": true,
          "explanation": "Kuvvet kolu uzadıkça uygulanacak kuvvet küçülür."
        },
        {
          "id": 2,
          "statement": "Cımbız ve maşada kuvvet ortada olduğu için kuvvetten kazanç sağlanır.",
          "isCorrect": false,
          "explanation": "Kuvvet ortadayken kuvvet kolu kısa kalır; kuvvetten kayıp, yoldan kazanç vardır."
        },
        {
          "id": 3,
          "statement": "El arabasında yük destek ile kuvvet arasında yer alır.",
          "isCorrect": true,
          "explanation": "Tekerlek destek, hazne yük, kollar kuvvettir."
        },
        {"id":4,"statement":"Sabit makara kuvvetin yönünü değiştirerek iş kolaylığı sağlar ancak kuvvetten kazanç sağlamaz.","isCorrect":true,"explanation":"Sabit makarada uygulanan kuvvet yükün ağırlığına eşittir (F = G); kuvvet kazancı yoktur, sadece yön değişimiyle iş kolaylığı sağlar."},
        {"id":5,"statement":"Hareketli makarada 100 N ağırlığındaki bir yükü dengede tutmak için sürtünmeler ve makara ağırlığı ihmal edildiğinde 50 N kuvvet yeterlidir.","isCorrect":true,"explanation":"Hareketli makarada yükü iki ip kolu taşıdığı için kuvvet kazancı 2 kattır (F = G / 2 = 50 N)."},
        {"id":6,"statement":"Hareketli makarada yükü 3 metre yukarı kaldırmak için ipi 1,5 metre çekmek yeterlidir.","isCorrect":false,"explanation":"Kuvvetten 2 kat kazanç olduğu için yoldan 2 kat kayıp vardır; yükü 3 metre kaldırmak için ip 6 metre çekilmelidir."},
        {"id":7,"statement":"Palanga sistemlerinde kuvvet kazancı sistemi oluşturan sabit ve hareketli makara sayısına ve yükü taşıyan ip sayısına bağlıdır.","isCorrect":true,"explanation":"Palangalarda kuvvet kazancı yükü doğrudan yukarı çeken hareketli makaralara bağlı ip sayısına göre belirlenir."}
      ],
      "lgsQuestions": [
        ...sebahattinBasitMakinelerQuestions.filter(q => q.subTopicId === 'g8-u5-sub2'),
        {
          "id": 1,
          "theme": "Kaldıraç Tipleri ve Örnekleri",
          "cognitiveLevel": "Sınıflandırma",
          "contextTitle": "Çift Taraflı Kaldıraç Dengesi",
          "scenario": "Günlük yaşamda kullanılan kaldıraç çeşitleri incelenmiştir: 1. Desteğin ortada olduğu kaldıraç, 2. Yükün ortada olduğu kaldıraç, 3. Kuvvetin ortada olduğu kaldıraç.",
          "questionPrompt": "Ceviz kıracağı ve cımbız sırasıyla hangi kaldıraç tiplerine örnektir?",
          "options": [
            {
              "key": "A",
              "text": "Yükün ortada olduğu kaldıraç - Kuvvetin ortada olduğu kaldıraç"
            },
            {
              "key": "B",
              "text": "Desteğin ortada olduğu kaldıraç - Yükün ortada olduğu kaldıraç"
            },
            {
              "key": "C",
              "text": "Kuvvetin ortada olduğu kaldıraç - Desteğin ortada olduğu kaldıraç"
            },
            {
              "key": "D",
              "text": "Her ikisi de desteğin ortada olduğu kaldıraca örnektir."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Ceviz kıracağında kırılacak ceviz (yük) ortadadır (daima kuvvet kazancı). Cımbızda ise kuvvet parmaklarla ortadan uygulanır (yoldan kazanç)."
        },
        {
          "id": 2,
          "theme": "Kaldıraçta Denge Formülü ve Hesaplama",
          "cognitiveLevel": "Matematiksel Muhakeme",
          "contextTitle": "Eşit Bölmeli Çubukta Ağır Yük Dengesi",
          "scenario": "Eşit bölmeli, türdeş ve ağırlığı önemsiz bir çubuğun sol ucundan 2 birim uzaklıkta destek noktası bulunmaktadır. Sol uçta 60 N ağırlığında yük asılıdır.",
          "questionPrompt": "Destek noktasından 4 birim sağdaki noktadan uygulanması gereken dengeleyici F kuvveti kaç Newton’dur?",
          "options": [
            {
              "key": "A",
              "text": "30 N"
            },
            {
              "key": "B",
              "text": "60 N"
            },
            {
              "key": "C",
              "text": "120 N"
            },
            {
              "key": "D",
              "text": "15 N"
            }
          ],
          "correctAnswer": "A",
          "explanation": "Kuvvet x Kuvvet Kolu = Yük x Yük Kolu ➔ F x 4 = 60 x 2 ➔ 4F = 120 ➔ F = 30 N olur."
        },
        {
          "id": 3,
          "theme": "Destek Noktasını Kaydırmanın Etkisi",
          "cognitiveLevel": "Deneysel Değişken Muhakemesi",
          "contextTitle": "Kaya Parçasını Kaldıran İnşaat Levyesi",
          "scenario": "Bir işçi uzun bir demir levye ile büyük bir taşı yerinden oynatmak istemektedir. Levye taşın altına yerleştirilmiş ve altına bir takoz (destek) konmuştur.",
          "questionPrompt": "İşçinin taşı en az kuvvetle kaldırabilmesi için desteğin ve kuvvetin konumu nasıl olmalıdır?",
          "options": [
            {
              "key": "A",
              "text": "Destek taşa mümkün olduğunca yakın, kuvvet ise levyenin en ucundan uygulanmalıdır."
            },
            {
              "key": "B",
              "text": "Destek işçinin eline çok yakın, kuvvet taşa yakın uygulanmalıdır."
            },
            {
              "key": "C",
              "text": "Destek tam ortada olmalı, kuvvet levyenin ortasından uygulanmalıdır."
            },
            {
              "key": "D",
              "text": "Levye ne kadar kısa olursa kuvvet kazancı o kadar çok artar."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Kuvvet kazancını artırmak için kuvvet kolu (destek ile el arası) en uzun, yük kolu (destek ile taş arası) en kısa olmalıdır. Bu yüzden destek yüke yaklaştırılmalıdır."
        },
        {
          "id": 4,
          "theme": "Yükün Ortada Olduğu Kaldıraçlar (El Arabası)",
          "cognitiveLevel": "Gerçek Hayat Uygulama Analizi",
          "contextTitle": "El Arabasında Taşınan Ağır Kum",
          "scenario": "El arabasında ön tekerlek destek noktasıdır. Kum haznesi ortada yer almakta, işçi kolları arka uçtan yukarı doğru kaldırmaktadır.",
          "questionPrompt": "El arabası mekanizmasının kullanıcıya sağladığı temel avantaj hangisidir?",
          "options": [
            {
              "key": "A",
              "text": "Kuvvet kolu yük kolundan daima daha uzun olduğu için her zaman kuvvetten kazanç sağlar."
            },
            {
              "key": "B",
              "text": "Kuvvetin yönünü aşağı doğru çevirerek yükü havaya fırlatır."
            },
            {
              "key": "C",
              "text": "Yoldan kazandırarak kumu gideceği yere iki kat hızlı ulaştırır."
            },
            {
              "key": "D",
              "text": "Kum taşırken yapılan toplam iş miktarını yarıya indirir."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Yükün arada olduğu sistemlerde (el arabası, ceviz kıracağı) destek bir uçta, kuvvet diğer uçtadır. Kuvvet kolu daima yük kolundan büyüktür ve daima kuvvet kazancı vardır."
        },
        {
          "id": 5,
          "theme": "Kuvvetin Ortada Olduğu Kaldıraçlar (Maşa ve Cımbız)",
          "cognitiveLevel": "Kavramsal ve Fonksiyonel Çıkarım",
          "contextTitle": "Sıcak Kömürü Tutan Barbekü Maşası",
          "scenario": "Et pişirirken kullanılan barbekü maşasında menteşe destek noktasıdır (arka uç). Maşanın ortasından parmaklarla kuvvet uygulanır, maşanın uç kısmı ise sıcak kömürü tutar.",
          "questionPrompt": "Bu maşanın çalışma prensibi ve avantajı ile ilgili hangisi doğrudur?",
          "options": [
            {
              "key": "A",
              "text": "Kuvvetten kayıp vardır ancak güvenli tutuş, hassasiyet ve yoldan kazanç sağlar."
            },
            {
              "key": "B",
              "text": "Kuvvet kazancı 5 kat olduğu için ağır nesneleri kaldırmaya yarar."
            },
            {
              "key": "C",
              "text": "Kuvvet kolu yük kolundan daha uzundur."
            },
            {
              "key": "D",
              "text": "Kuvvetin yönünü değiştirerek iş kolaylığı sağlar."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Kuvvetin ortada olduğu maşa ve cımbızda kuvvet kolu kısadır (kuvvetten kayıp vardır). Amaç ağır cisim kaldırmak değil, el yakmadan hassas ve hızlı tutuş (iş kolaylığı ve yoldan kazanç) sağlamaktır."
        },
        {
          "id": 6,
          "theme": "Makas Türleri ve Kullanım Amacına Göre Tasarım",
          "cognitiveLevel": "Mühendislik Tasarımı ve Mantık",
          "contextTitle": "Terzi Makası ile Sac Kesme Makası",
          "scenario": "İki makas modeli karşılaştırılmıştır: 1. Terzi makasında kumaşı tek seferde uzun kesebilmek için bıçaklar uzun, tutma kolları kısadır. 2. Sac (demir) kesme makasında ise sert metalleri kolayca kesebilmek için tutma kolları çok uzun, bıçaklar ise çok kısadır.",
          "questionPrompt": "Sac makasının kollarının uzun, bıçaklarının kısa yapılmasının bilimsel sebebi nedir?",
          "options": [
            {
              "key": "A",
              "text": "Kuvvet kolunu büyüterek ve yük kolunu küçülterek çok yüksek kuvvet kazancı elde etmek."
            },
            {
              "key": "B",
              "text": "Yoldan kazanç sağlayarak demiri daha hızlı kesmek."
            },
            {
              "key": "C",
              "text": "Sac makasında desteğin ortadan kaldırılmasını sağlamak."
            },
            {
              "key": "D",
              "text": "Demir keserken enerji tüketimini sıfıra indirmek."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Sert metalleri kesmek için büyük kuvvet gerekir. Kuvvet kolunu (sapları) uzun, yük kolunu (bıçakları) kısa tutmak kuvvet kazancını maksimize eder."
        },
        {
          "id": 7,
          "theme": "Kaldıraçta Çift Yüklü Denge Problemi",
          "cognitiveLevel": "İleri Seviye Denge Mantığı",
          "contextTitle": "Tahterevallide Çocukların Dengelenmesi",
          "scenario": "Desteği tam ortada olan 6 bölmeli bir tahterevallide, sol uçta (3. bölmede) 40 kg kütleli Ali oturmaktadır. Sağ tarafta 2. bölmede ise 30 kg kütleli Ayşe oturmaktadır.",
          "questionPrompt": "Tahterevallinin yatay dengede kalabilmesi için 30 kg kütleli Mehmet sağ tarafta hangi noktaya oturmalıdır?",
          "options": [
            {
              "key": "A",
              "text": "Destekten 2 birim uzaklıktaki noktaya"
            },
            {
              "key": "B",
              "text": "Destekten 1 birim uzaklıktaki noktaya"
            },
            {
              "key": "C",
              "text": "Destekten 3 birim uzaklıktaki noktaya"
            },
            {
              "key": "D",
              "text": "Tahterevallinin tam destek noktasının üzerine"
            }
          ],
          "correctAnswer": "A",
          "explanation": "Sol Tork = Sağ Tork ➔ 40 x 3 = 120 birim. Sağ taraf: Ayşe 30 x 2 = 60 birim. Geriye 120 - 60 = 60 birim kalır. Mehmet 30 kg olduğuna göre x = 60 / 30 = 2 birim uzaklıkta oturmalıdır."
        }
      ]
    },
    {
      "id": "g8-u5-sub3",
      "title": "3. Bölüm: Eğik Düzlem, Çıkrık, Vida ve Bileşik Makineler",
      "shortTitle": "Eğik Düzlem & Çıkrık",
      "badge": "Kavramlar & LGS",
      "pageRange": "",
      "concepts": [
        "Eğik Düzlem",
        "Rampa Eğimi ve Kuvvet Kazancı",
        "Çıkrık (Kuyular, Direksiyon, Tornavida)",
        "Vida ve Vida Adımı (a)",
        "Dişli Çarklar ve Kasnaklar",
        "Bileşik Makine (Bisiklet)"
      ],
      "simulationId": "dynamometer",
      "summarySections": [
        {
          "heading": "Eğik Düzlem, Çıkrık, Vida ve Dişli Mekanizmaları",
          "paragraphs": [
            "Eğik Düzlem: Ağır bir yükü dik olarak doğrudan kaldırmak yerine bir rampa boyunca iterek veya çekerek belirli bir yüksekliğe (h) çıkarmayı sağlayan eğimli düzlemdir (ÖS ÇIKTI).",
            "Eğik Düzlemde Kuvvet Kazancı Kuralı: Eğik düzlemin rampa boyu (L) daima dik yüksekliğinden (h) daha uzun olduğu için (L > h) eğik düzlemlerde DAİMA KUVVETTEN KAZANÇ, YOLDAN KAYIP vardır (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Eğik Düzlem Bağıntısı: Kuvvet × Eğik Düzlem Boyu = Yük × Yükseklik (F · L = P · h) eşitliği ile ifade edilir (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Eğik Düzlemde Kazancı Artırma: Eğik düzlemin boyu (L) artırıldıkça ya da dik yüksekliği (h) azaltıldıkça (eğim açısı küçüldükçe) kuvvet kazancı artar ve yük daha küçük bir kuvvetle zirveye çıkarılır (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Yük Ağırlığının Kuvvet Kazancına Etkisi: Eğik düzlemde taşınan yükün ağırlığı artsa bile KUVVET KAZANCI ORANI DEĞİŞMEZ; çünkü kazanç yalnızca boy ve yükseklik geometrisine (L / h oranına) bağlıdır (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Eğik Düzlemde İş İlkesi: Sürtünmesiz ortamda eğik düzlem kullanılarak yapılan iş, yükün doğrudan dikey olarak aynı yüksekliğe çıkarılmasıyla yapılan işe tamamen eşittir (İş = P · h); işten ya da enerjiden asla kazanç sağlanmaz (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Günlük Yaşam Örnekleri: Dağ virajları, engelli rampaları, kaydıraklar, yükleme kalasları ve vidanın dişleri eğik düzlem prensibine dayanır (ÖS ÇIKTI).",
            "Çıkrık Mekanizması: Dönme eksenleri çakışık, yarıçapları farklı iki silindirden oluşan basit makinedir; kuvvet büyük silindire (kol: R), yük ise küçük silindire (mil: r) bağlıdır (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Çıkrık Bağıntısı ve Kazanç: Kuvvet × Çıkrık Kolu = Yük × Silindir Yarıçapı (F · R = P · r) şeklindedir; R > r olduğu için çıkrıkta DAİMA KUVVETTEN KAZANÇ, YOLDAN KAYIP vardır (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Çıkrıkta Kazancı Artırma: Çıkrık kolunun uzunluğu (R) artırıldığında veya yükün sarıldığı silindirin yarıçapı (r) küçültüldüğünde kuvvet kazancı artar (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Çıkrıkta İp Parametreleri: Yükün sarıldığı ipin kalınlığı veya silindire kaç tur sarıldığı kuvvet kazancını kesinlikle etkilemez (ÖS ÇIKTI).",
            "Çıkrık Örnekleri: Su kuyusu çıkrığı, tornavida, otomobil direksiyonu, bisiklet pedalı, kapı anahtarı/tokmağı, kahve değirmeni ve el matkabı çıkrık sistemine örnektir (LGS ÇIKTI) (ÖS ÇIKTI)."
          ],
          "keyPoints": [
            "Vida Modeli: Silindirik bir mil üzerine sarılmış eğik düzlemdir (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Vida Adımı (a): Ardışık iki vida dişi arasındaki mesafedir; vida 1 tam tur döndüğünde zemin içinde tam olarak 1 vida adımı (a) kadar ilerler (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Vida Adımı ve Kuvvet Kazancı: Vida adımı (a) küçüldükçe eğik düzlemin eğim açısı azalır ve kuvvet kazancı artar; vidalamak daha kolaylaşır ancak aynı mesafede ilerlemek için daha çok tur döndürmek gerekir (ÖS ÇIKTI).",
            "Dişli Çarklar ve Kasnaklar: Birbirine temas eden dişli çarklar ZIT YÖNDE döner (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Kayış Bağlantıları: Düz bağlı kasnak ve kayışlar AYNI YÖNDE, çapraz bağlı kasnaklar ise ZIT YÖNDE döner (ÖS ÇIKTI).",
            "Eş Merkezli Dişliler: Aynı mil üzerine sabitlenmiş eş merkezli dişli ve kasnakların dönme yönleri ve tur sayıları KESİNLİKLE BİRBİRİNE EŞİTTİR (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Farklı Merkezli Dişlilerde Dönme Sayısı: Diş sayısı veya yarıçap ile tur sayısı ters orantılıdır (n1 · r1 = n2 · r2); küçük dişli büyük dişliden daima daha fazla tur atar (LGS ÇIKTI) (ÖS ÇIKTI).",
            "Bileşik Makineler: Birden fazla basit makinenin bir arada çalıştığı mekanizmalardır; bisiklette pedal = çıkrık, dişliler ve zincir, fren kolları = kaldıraç, bağlantı vidaları ise vida prensibini barındırır (LGS ÇIKTI) (ÖS ÇIKTI)."
          ],
          "examNote": "📌 LGS & ÖS FORMÜL ÖZETİ: Eğik düzlemde Kuvvet Kazancı = L / h; Çıkrıkta Kuvvet Kazancı = R / r oranına eşittir; her iki sistemde de bu oranlar 1'den büyük olduğu için sürtünmesiz ortamda DAİMA KUVVET KAZANCI vardır ve yapılan toplam iş değişmez (LGS ÇIKTI) (ÖS ÇIKTI)."
        }
      ],
      "glossary": [
        {
          "term": "Eğik Düzlem",
          "definition": "Bir cismi daha az kuvvetle yüksek bir yere çıkarmak için oluşturulan rampa."
        },
        {
          "term": "Çıkrık",
          "definition": "Aynı eksen etrafında dönen farklı yarıçaplı silindir sistemi."
        },
        {
          "term": "Bileşik Makine",
          "definition": "Birden fazla basit makinenin birleşimiyle çalışan düzenek."
        }
      ],
      "trueFalseQuestions": [
        {
          "id": 1,
          "statement": "Eğik düzlemin boyu sabit tutulup yüksekliği artırılırsa kuvvet kazancı artar.",
          "isCorrect": false,
          "explanation": "Yükseklik arttıkça eğim artar ve kuvvet kazancı azalır."
        },
        {
          "id": 2,
          "statement": "Tornavida, kapı anahtarı ve araba direksiyonu çıkrık prensibiyle çalışır.",
          "isCorrect": true,
          "explanation": "Geniş yarıçaplı kısımdan kuvvet uygulanıp dar mil döndürülür."
        },
        {
          "id": 3,
          "statement": "Eğik düzlemde her zaman yoldan kazanç vardır.",
          "isCorrect": false,
          "explanation": "Eğik düzlemde DAİMA yoldan kayıp, kuvvetten kazanç vardır."
        },
        {"id":4,"statement":"Eğik düzlemde eğim azaldıkça (eğik düzlemin boyu uzadıkça) kuvvet kazancı artar.","isCorrect":true,"explanation":"Kuvvet kazancı = Eğik Düzlem Boyu (L) / Yükseklik (h) oranına eşittir; boy uzadıkça kazanç artar ve uygulanması gereken kuvvet küçülür."},
        {"id":5,"statement":"Vida iki veya daha fazla parçayı birbirine tutturmaya yarayan silindir üzerine sarılmış eğik düzlem modelidir.","isCorrect":true,"explanation":"Vida bir silindir etrafına sarılmış eğik düzlemdir ve daima kuvvetten kazanç sağlar."},
        {"id":6,"statement":"Birbirine zincirle bağlı dişli çarklar zıt yönde, birbirine temas eden dişli çarklar ise aynı yönde döner.","isCorrect":false,"explanation":"Birbirine temas eden dişliler zıt yönlerde dönerken, zincir veya düz kayışla bağlı olanlar aynı yönde döner."},
        {"id":7,"statement":"Kuyudan su çekmeye yarayan çıkrık sisteminde çıkrık kolunun yarıçapı silindirin yarıçapından büyük olduğu için kuvvetten kazanç sağlanır.","isCorrect":true,"explanation":"Kuvvet Kolu (R) > Yük Kolu (r) olduğu için çıkrık daima kuvvetten kazanç sağlar."}
      ],
      "lgsQuestions": [
        ...sebahattinBasitMakinelerQuestions.filter(q => q.subTopicId === 'g8-u5-sub3'),
        {
          "id": 1,
          "theme": "Eğik Düzlemde Kuvvet Kazancı",
          "cognitiveLevel": "Deney Karşılaştırma",
          "contextTitle": "Eğik Düzlem ve Çıkrık Sistemi",
          "scenario": "Özdeş iki yük sürtünmesiz eğik düzlemlerle çıkarılmaktadır: 1. eğik düzlemin boyu 6 m, yüksekliği 2 m; 2. eğik düzlemin boyu 6 m, yüksekliği 3 m’dir.",
          "questionPrompt": "Bu iki düzenek karşılaştırıldığında hangisi doğrudur?",
          "options": [
            {
              "key": "A",
              "text": "1. düzenekte kuvvet kazancı daha fazladır ve cisme uygulanan kuvvet daha küçüktür."
            },
            {
              "key": "B",
              "text": "2. düzenekte yapılan iş 1. düzenekten daha azdır."
            },
            {
              "key": "C",
              "text": "2. düzenekte kuvvet kazancı daha fazladır."
            },
            {
              "key": "D",
              "text": "Her iki düzenekte de uygulanan kuvvetler birbirine eşittir."
            }
          ],
          "correctAnswer": "A",
          "explanation": "1. düzenekte eğim daha azdır (L/h = 6/2 = 3 kat kazanç). 2. düzenekte kazanç 6/3 = 2 kattır. Dolayısıyla 1. düzenekte kuvvet kazancı fazla ve uygulanan kuvvet daha küçüktür."
        },
        {
          "id": 2,
          "theme": "Çıkrık Prensibi ve Yarıçap İlişkisi",
          "cognitiveLevel": "Mekanik Oran Muhakemesi",
          "contextTitle": "Su Kuyusunda Çıkrık Kolu Değişimi",
          "scenario": "Bir köy kuyusunda silindirin yarıçapı r = 10 cm, çıkrık kolunun uzunluğu R = 50 cm’dir. Kuyudan 100 N ağırlığındaki su dolu kova çekilmektedir.",
          "questionPrompt": "Kuyudaki kuvvet kazancı ve kovayı dengeleyen F kuvveti hangisinde doğru verilmiştir?",
          "options": [
            {
              "key": "A",
              "text": "Kuvvet kazancı 5 kattır, uygulanan kuvvet 20 N’dur."
            },
            {
              "key": "B",
              "text": "Kuvvet kazancı 2 kattır, uygulanan kuvvet 50 N’dur."
            },
            {
              "key": "C",
              "text": "Kuvvet kazancı yoktur, uygulanan kuvvet 100 N’dur."
            },
            {
              "key": "D",
              "text": "Kuvvet kazancı 10 kattır, uygulanan kuvvet 10 N’dur."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Çıkrıkta Kuvvet Kazancı = R / r = 50 / 10 = 5 kattır. F = P / 5 = 100 / 5 = 20 N olur."
        },
        {
          "id": 3,
          "theme": "Vida Mekanizması ve Vida Adımı",
          "cognitiveLevel": "Yapısal Analiz ve Derinlik Hesabı",
          "contextTitle": "Ahşap Bloğa Vidalama İşlemi",
          "scenario": "Vida adımı a = 2 mm olan bir vida, tornavida ile tam 10 tur döndürülerek ahşap bir zemine vidalanmıştır.",
          "questionPrompt": "Vidanın ahşap blok içinde ilerleme miktarı (h) kaç milimetredir?",
          "options": [
            {
              "key": "A",
              "text": "20 mm"
            },
            {
              "key": "B",
              "text": "10 mm"
            },
            {
              "key": "C",
              "text": "5 mm"
            },
            {
              "key": "D",
              "text": "40 mm"
            }
          ],
          "correctAnswer": "A",
          "explanation": "Vida her 1 tam turda 1 vida adımı (a) kadar ilerler: h = n x a = 10 x 2 mm = 20 mm ilerleme gerçekleşir."
        },
        {
          "id": 4,
          "theme": "Dişli Çarklarda Dönme Yönü ve Tur Sayısı",
          "cognitiveLevel": "Dönme Dinamiği ve Çark Sistemleri",
          "contextTitle": "Birbirine Temas Eden İki Dişli Çark",
          "scenario": "Yarıçapı 3r olan K dişlisi ile yarıçapı r olan L dişlisi birbirine zincirsiz doğrudan temas etmektedir. K dişlisi saat yönünde 2 tam tur döndürülmüştür.",
          "questionPrompt": "L dişlisinin dönme yönü ve attığı tur sayısı hangisinde doğru verilmiştir?",
          "options": [
            {
              "key": "A",
              "text": "Saat yönünün tersine 6 tur"
            },
            {
              "key": "B",
              "text": "Saat yönünde 6 tur"
            },
            {
              "key": "C",
              "text": "Saat yönünün tersine 2 tur"
            },
            {
              "key": "D",
              "text": "Saat yönünde 1 tur"
            }
          ],
          "correctAnswer": "A",
          "explanation": "Doğrudan birbirine temas eden dişliler zıt yönde döner (saat yönünün tersi). n1 x r1 = n2 x r2 ➔ 2 x 3r = n2 x r ➔ n2 = 6 tur atar."
        },
        {
          "id": 5,
          "theme": "Bileşik Makinelerin Parça Analizi (Bisiklet)",
          "cognitiveLevel": "Sistem Ayrıştırma ve Kavram",
          "contextTitle": "Bisiklet Üzerindeki Basit Makineler",
          "scenario": "Bir öğrenci bisikleti incelerken şu parçaları listelemiştir: 1. Ayakla çevrilen pedal sistemi, 2. Ön ve arka tekeri bağlayan zincir-dişli mekanizması, 3. Direksiyon üzerindeki fren kolları, 4. Parçaları bir arada tutan cıvatalar.",
          "questionPrompt": "Bu parçalar sırasıyla hangi basit makinelerin prensibiyle çalışır?",
          "options": [
            {
              "key": "A",
              "text": "Çıkrık - Dişli Çark - Kaldıraç - Vida"
            },
            {
              "key": "B",
              "text": "Eğik Düzlem - Çıkrık - Makara - Kaldıraç"
            },
            {
              "key": "C",
              "text": "Kaldıraç - Vida - Çıkrık - Eğik Düzlem"
            },
            {
              "key": "D",
              "text": "Makara - Dişli Çark - Eğik Düzlem - Vida"
            }
          ],
          "correctAnswer": "A",
          "explanation": "Pedal çıkrıktır (geniş pedal kolu mili döndürür), zincir-dişli dişli çarktır, fren kolu kaldıraçtır, cıvata ve vidalar ise vidadır."
        },
        {
          "id": 6,
          "theme": "Dağ Yollarında Virajlar (Eğik Düzlem Uygulaması)",
          "cognitiveLevel": "Mühendislik ve Doğa Mantığı",
          "contextTitle": "Dağa Tırmanan Kıvrımlı Yollar",
          "scenario": "Yüksek dağlara tırmanan karayollarının dik bir çizgi yerine \"S\" harfi şeklinde kıvrılarak (serpantin virajlarla) yapıldığı görülür.",
          "questionPrompt": "Dağ yollarının bu şekilde kıvrımlı tasarlanmasının temel fiziksel gerekçesi nedir?",
          "options": [
            {
              "key": "A",
              "text": "Eğik düzlemin boyunu (yolu) uzatarak eğimi azaltmak ve araç motorlarının daha az kuvvet harcayarak tırmanmasını sağlamak."
            },
            {
              "key": "B",
              "text": "Araçların dağa tırmanırken harcadığı benzin enerjisinden tasarruf etmek."
            },
            {
              "key": "C",
              "text": "Dağın yüksekliğini azaltarak yer çekimini düşürmek."
            },
            {
              "key": "D",
              "text": "Yoldan kazanç sağlayarak araçların zirveye daha kısa sürede varmasını sağlamak."
            }
          ],
          "correctAnswer": "A",
          "explanation": "Kıvrımlı yollar eğik düzlemdir. Yol uzatıldıkça (L artar) eğim azalır; kuvvet kazancı artar ve arabalar dik yokuşu zorlanmadan tırmanabilir."
        }
      ]
    }
  ]
};

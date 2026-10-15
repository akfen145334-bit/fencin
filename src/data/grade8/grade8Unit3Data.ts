import { Unit } from '../../types/curriculum';
import { grade8Unit3End20Questions } from './grade8UnitEndExams';
import { sebahattinBasincQuestions } from './sebahattinQuestions';

export const grade8Unit3Data: Unit = {
  id: 'g8-unit-3',
  unitNumber: 3,
  bookNumber: 1,
  grade: 8,
  subject: 'Fen Bilimleri',
  title: 'Basınç',
  unitEndPageRange: 'Ünite Sonu',
  colorTheme: {
    primary: 'from-emerald-600 to-green-700',
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-950/40',
    accent: 'text-emerald-400',
    text: 'text-emerald-200'
  },
  unitEnd20Questions: grade8Unit3End20Questions,
  subTopics: [
    {
      id: 'g8-u3-sub1',
      title: '1. Bölüm: Katı Basıncı',
      shortTitle: 'Katı Basıncı',
      badge: 'Kavramlar & LGS',
      pageRange: '',
      concepts: ['Birim Yüzeye Dik Kuvvet', 'Basınç', 'Pascal (Pa)', 'Yüzey Alanı', 'Ağırlık ve Kuvvet', 'Katıların Kuvveti İletmesi', 'Bıçak ve Çivi', 'Kar Ayakkabısı ve Palet'],
      simulationId: 'lever',
      summarySections: [
        {
          heading: 'Katılarda Basınç ve Etkileyen Değişkenler',
          paragraphs: [
            'Katı maddeler ağırlıkları nedeniyle bulundukları yüzeye dikey yönde bir kuvvet uygularlar. Birim yüzeye etki eden bu dik kuvvete basınç denir. Katı basıncı, cismin zemine uyguladığı kuvvet (ağırlık) ve temas ettiği yüzey alanı ile doğrudan ilişkilidir.',
            'Ağırlık (Kuvvet) İlişkisi: Katıların basıncı, cismin zemine uyguladığı dik kuvvet (çoğu zaman ağırlığı) ile doğru orantılıdır. Yüzey alanı sabit tutulmak şartıyla, ağırlık arttıkça zemine uygulanan basınç ve dolayısıyla esnek zemindeki (kum, kar, sünger vb.) batma/çökme miktarı artar (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Yüzey Alanı İlişkisi: Katıların basıncı, kuvvetin uygulandığı (yere temas eden) yüzey alanı ile ters orantılıdır. Ağırlık (uygulanan kuvvet) sabit kalmak şartıyla, yere temas eden yüzey alanı büyüdükçe basınç azalır, yüzey alanı küçüldükçe basınç artar (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Görsel Model: Özdeş iki tuğladan biri geniş yüzeyi üzerine, diğeri ise dar (dik) yüzeyi üzerine kuma bırakıldığında, dar yüzey üzerindeki tuğlanın kuma daha çok gömüldüğü görülür. Çünkü yüzey alanı küçüldükçe basınç artar.',
            'Kuvvetin ve Basıncın İletilmesi: Katılar, üzerlerine uygulanan kuvveti aynı yönde, aynı doğrultuda ve aynı büyüklükte (aynen) iletirler. Ancak basıncı aynen iletmezler; basınç temas yüzeyinin büyüklüğüne göre değişir. Örneğin; bir raptiyeyi baş parmağımızla işaret parmağımız arasına alıp sıktığımızda her iki parmağa da eşit büyüklükte kuvvet etki eder. Ancak raptiyenin sivri ucunun temas ettiği parmakta alan çok küçük olduğu için oluşan basınç çok fazladır ve acı verir (ÖS ÇIKTI).',
            'Orantılı Değişim (Kesilme ve Eklenme Durumları): Düzgün geometrik şekilli bir katı cisim (küp veya prizma) yukarıdan aşağıya (dikey doğrultuda) düzgün kesilirse, ağırlığının azaldığı oranda yere temas eden yüzey alanı da azalır. Bu orantılı değişim nedeniyle geriye kalan parçaların zemine uyguladığı basınç başlangıçtaki durumla aynı kalır (değişmez) (LGS ÇIKTI) (ÖS ÇIKTI). Bir cismin yanına onunla özdeş başka bir cisim eklendiğinde ağırlık ve yüzey alanı aynı oranda artacağı için basınç değişmez. Ancak cismin üzerine eklendiğinde yüzey alanı sabit kalıp ağırlık artacağı için basınç artar (ÖS ÇIKTI).'
          ],
          keyPoints: [
            'Basıncı Azaltma (Yüzeyi Büyütme): Kar ayakkabısı, kamyon ve trenlerde çok sayıda tekerlek, iş makineleri ve tanklarda geniş paletler, fil ve develerin geniş ayak tabanları (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Basıncı Artırma (Yüzeyi Küçültme): Bıçak ve baltanın bilenmesi, çivi, iğne ve raptiyelerin sivri ucu, buz pateni bıçağı, kışın araç tekerleklerine zincir takılması (ÖS ÇIKTI).',
            'Kuvvet vs Basınç İletimi: Katılar kuvveti aynen iletir; basıncı ise yüzey alanına bağlı olarak farklılaştırır (ÖS ÇIKTI).'
          ]
        },
        {
          heading: 'Katı Basıncında Kesilme, Değişken Kontrolü ve Sınav Tuzakları',
          paragraphs: [
            'Geometrik olarak düzgün olmayan (örneğin yukarıya doğru daralan bir koni veya genişleyen bir piramit) katı bir cismin yatay olarak kesilmesi durumunda, taban alanı değişmediği hâlde ağırlığın azalması veya taban alanının da ağırlıkla eşitsiz bir oranda değişmesi sonucunda zemine yapılan basınç farklılaşır (LGS ÇIKTI).',
            'Üzerinde hareketli veya ek parçalar barındıran sistemlerde (açılır kapanır bir köprü, merdiven veya rampa), sistemin şekil değiştirmesiyle yere temas eden yüzey alanının mı yoksa zemine binen toplam ağırlığın mı değiştiği analiz edilerek basınç değişimi bulunur (LGS ÇIKTI).'
          ],
          table: {
            headers: ['Kavram / Soru Alanı', 'Öğrencinin Düşündüğü (Yanlış Mantık)', 'Kavram Yanılgısının Düzeltilmesi (Doğru Yaklaşım)'],
            rows: [
              ['Kuvvet ve Basıncın İletimi', 'Çiviye çekiçle vurulduğunda sivri uç daha çok basınç uyguluyorsa, uç kısma iletilen kuvvet daha büyüktür.', 'Katılar kuvveti hiçbir değişikliğe uğratmadan (aynı büyüklükte ve yönde) iletirler. Uçtaki basıncın fazla olması kuvvetin artması değil, temas alanının çok küçük olmasıdır (LGS ÇIKTI).'],
              ['Yüzey Alanı - Ağırlık İlişkisi', 'Geniş tabanlı ayakkabı giydiğimizde veya tekerlek sayısı arttığında ağırlığımız azaldığı için batmayız.', 'Temas yüzeyinin değişmesi cismin ağırlığını (toplam net kuvveti) kesinlikle değiştirmez. Sadece birim alana düşen payını azaltır (ÖS ÇIKTI).'],
              ['Kesilme İşlemleri', 'Bir cismi nasıl kesersek keselim kütlesi azaldığı için zemine yaptığı basınç da azalmak zorundadır.', 'Cisim yukarıdan aşağıya (dikey) ve düzgün kesilirse, ağırlığın azaldığı oran ile yüzey alanının azaldığı oran eşit olduğundan basınç sabit kalır (LGS ÇIKTI).'],
              ['Katıların Basınç Yönü', 'Katı cisimler sıvılar ve gazlar gibi her yöne (yanlara ve yukarıya) ağırlıklarından dolayı basınç uygularlar.', 'Katılar yalnızca ağırlıkları doğrultusunda (yer çekimi yönünde, yani aşağıya doğru) temas ettikleri tabana basınç uygularlar.']
            ]
          },
          examNote: '📌 LGS & ÖS ÇIKMIŞ SORU KRİTİK KALIPLARI: 1) Düzgün katı cisimler dikey kesildiğinde basınç değişmez (LGS ÇIKTI). Ancak yatay kesildiğinde taban alanı sabit kalıp ağırlık azaldığı için tabana yapılan basınç azalır. 2) Katılar kuvveti aynen iletirken basıncı iletmez; çivinin başına vurulan kuvvet uca aynen aktarılır (ÖS ÇIKTI).'
        }
      ],
      glossary: [
        { term: 'Katı Basıncı', definition: 'Katı cisimlerin ağırlıklarından dolayı temas ettikleri yüzeye birim alanda uyguladıkları dik kuvvet.' },
        { term: 'Pascal', definition: 'Metrekareye uygulanan bir Newtonluk dik kuvvete karşılık gelen standart basınç birimi.' }
      ],
      trueFalseQuestions: [
        {
                "id": 1,
                "statement": "Katı cisimlerin taban alanı küçüldükçe zemine uyguladıkları basınç artar.",
                "isCorrect": true,
                "explanation": "Katı basıncı temas yüzey alanı ile ters orantılıdır; yüzey azaldıkça birim alana düşen kuvvet artar."
        },
        {
                "id": 2,
                "statement": "Katı basıncı cismin ağırlığından bağımsızdır.",
                "isCorrect": false,
                "explanation": "Katı basıncı cismin zemine dik uyguladığı kuvvet (ağırlık) ile doğru orantılıdır."
        },
        {
                "id": 3,
                "statement": "Bıçağın keskin yüzeyinin ince bilenmesi, yüzey alanını küçülterek basıncı artırma amacına yöneliktir.",
                "isCorrect": true,
                "explanation": "Temas yüzey alanı küçüldüğünde basınç artar ve kesme işlemi kolaylaşır."
        },
        {
                "id": 4,
                "statement": "Kar ayakkabılarının geniş tabanlı olması, yere uygulanan basıncı artırarak batmayı önler.",
                "isCorrect": false,
                "explanation": "Geniş taban yüzey alanını artırır, böylece katı basıncı azalır ve kara batma engellenir."
        },
        {
                "id": 5,
                "statement": "Düzgün prizma şeklindeki homojen bir tuğla düşey doğrultuda tam ortadan ikiye kesilirse, her iki parçanın yere yaptığı basınç ilk tuğlanın basıncına eşit olur.",
                "isCorrect": true,
                "explanation": "Ağırlık yarıya inerken taban alanı da aynı oranda yarıya indiğinden (G/S oranı sabit kaldığından) basınç değişmez."
        },
        {
                "id": 6,
                "statement": "Katılar üzerlerine uygulanan kuvveti temas ettikleri doğrultuda büyüklüğünü değiştirmeden aynen iletirler.",
                "isCorrect": true,
                "explanation": "Katı maddeler sıkıştırılamaz kabul edilir ve üzerlerine uygulanan dik kuvveti aynı yönde ve eşit büyüklükte iletir."
        },
        {
                "id": 7,
                "statement": "Ağır iş makinelerinin paletli tekerleklere sahip olması zemine uygulanan basıncı artırmak içindir.",
                "isCorrect": false,
                "explanation": "Palet tekerlekler geniş yüzey alanı sağlayarak zemine yapılan basıncı azaltır ve batmayı önler."
        }
],
      lgsQuestions: [
        ...sebahattinBasincQuestions.filter(q => q.subTopicId === 'g8-u3-sub1'),
        {
          id: 1,
          theme: 'Katı Basıncında Yüzey Alanı ve Ağırlık',
          cognitiveLevel: 'Kontrollü Deney Analizi',
          contextTitle: 'Özdeş Tuğlaların Kum Zemindeki Batma Derinliği',
          scenario: 'Özdeş tuğlalar kullanılarak kum havuzunda iki aşamalı deney yapılmıştır: 1. aşamada bir tuğla önce yatay sonra dikey konmuştur. 2. aşamada ise yatay duran tuğlanın üzerine özdeş ikinci bir tuğla daha eklenmiştir.',
          questionPrompt: 'Bu deney basamaklarında tuğlaların kumda bıraktığı izlerin derinlikleri ile ilgili hangisi doğrudur?',
          options: [
            { key: 'A', text: '1. aşamada dikey tuğla daha derine batarken, 2. aşamada iki tuğlanın battığı derinlik tek tuğladan fazladır.' },
            { key: 'B', text: 'Yatay tuğlanın yüzey alanı geniş olduğu için kuma dikey tuğladan daha fazla batar.' },
            { key: 'C', text: 'Ağırlık artışı yüzey alanı sabitken katı basıncını ve kumdaki batma derinliğini azaltır.' },
            { key: 'D', text: 'Her iki aşamada da tuğlaların kuma batma derinlikleri tamamen eşit kalır.' }
          ],
          correctAnswer: 'A',
          explanation: 'Dikey tuğlanın temas yüzeyi dar olduğundan basıncı fazladır ve çok batar. Üst üste iki tuğlada ise ağırlık iki katına çıktığından basınç ve batma derinliği artar.'
        },
        {
          id: 2,
          theme: 'Katıların Kuvvet ve Basınç İletimi',
          cognitiveLevel: 'Fiziksel İlke ve Muhakeme',
          contextTitle: 'Çivinin Baş ve Sivri Uç Dinamiği',
          scenario: 'Bir tahta bloğa çivi çakılırken geniş başlı ucuna çekiçle 50 N büyüklüğünde bir kuvvet uygulanmıştır.',
          questionPrompt: 'Çivinin geniş başı ve sivri ucu arasında gerçekleşen kuvvet ve basınç ilişkisi hangisinde doğru ifade edilmiştir?',
          options: [
            { key: 'A', text: 'Çekiçle uygulanan kuvvet sivri uca iletilirken yarıya iner ancak basınç sabit kalır.' },
            { key: 'B', text: 'Geniş başa uygulanan 50 N kuvvet sivri uca aynen iletilir ancak sivri uçta yüzey dar olduğu için çok daha büyük bir basınç oluşur.' },
            { key: 'C', text: 'Çivinin sivri ucundaki basınç geniş baştaki basınçtan daha küçük değerdedir.' },
            { key: 'D', text: 'Katılar kendilerine uygulanan basıncı her doğrultuda eşit büyüklükte iletme özelliğine sahiptir.' }
          ],
          correctAnswer: 'B',
          explanation: 'Katılar kuvveti aynen iletir (50 N). Sivri ucun yüzey alanı çok küçük olduğundan oluşan katı basıncı devasa boyutlara ulaşır.'
        },
        {
          id: 3,
          theme: 'Teknolojide Basıncı Azaltma Tasarımları',
          cognitiveLevel: 'Günlük Yaşam ve Mühendislik Uygulaması',
          contextTitle: 'Ağır İş Makineleri ve Zemin Uyumu',
          scenario: 'Ağır yük taşıyan zırhlı araçlar ve inşaat kepçeleri yumuşak çamurlu arazilerde batmadan ilerleyebilmek için geniş paletlerle donatılmıştır.',
          questionPrompt: 'Aşağıdaki araç ve gereçlerden hangisi paletlerin tasarımında kullanılan temel basınç ilkesiyle aynı amaca hizmet eder?',
          options: [
            { key: 'A', text: 'Et kesmek için kullanılan kasap bıçaklarının ince bilenmesi.' },
            { key: 'B', text: 'Futbolcuların çim sahada kaymamak için krampon tabanına çiviler taktırması.' },
            { key: 'C', text: 'Karlı yollarda batmadan yürümek için tabanı geniş kar ayakkabılarının giyilmesi.' },
            { key: 'D', text: 'Dikiş iğnelerinin kumaşı delmesi için uç kısımlarının sivri yapılması.' }
          ],
          correctAnswer: 'C',
          explanation: 'Paletler ve kar ayakkabıları temas yüzey alanını artırarak katı basıncını azaltmayı ve zemine batmamayı hedefler.'
        },
        {
          id: 4,
          theme: 'Özdeş Küplerle Basınç Sıralaması',
          cognitiveLevel: 'Görsel Matematiksel Analiz',
          contextTitle: 'Özdeş Küplerden Oluşan Üç Farklı Model',
          scenario: 'Ağırlıkları ve boyutları özdeş olan küplerle üç düzenek kurulmuştur: 1. düzenekte tabanda 2 küp üzerinde 1 küp (toplam 3 küp, taban 2S), 2. düzenekte tabanda 1 küp üzerinde 2 küp (toplam 3 küp, taban S), 3. düzenekte tabanda 4 küp yan yana (toplam 4 küp, taban 4S) bulunmaktadır.',
          questionPrompt: 'Bu düzeneklerin zemine uyguladıkları katı basınçlarının büyükten küçüğe doğru sıralaması hangisidir?',
          options: [
            { key: 'A', text: '1. düzenek > 2. düzenek > 3. düzenek' },
            { key: 'B', text: '3. düzenek > 1. düzenek > 2. düzenek' },
            { key: 'C', text: 'Her üç düzeneğin zemine uyguladığı katı basınçları birbirine eşittir.' },
            { key: 'D', text: '2. düzenek > 1. düzenek > 3. düzenek' }
          ],
          correctAnswer: 'D',
          explanation: 'Basınç = Ağırlık/Taban. 2. düzenek: 3G/S = 3P. 1. düzenek: 3G/2S = 1,5P. 3. düzenek: 4G/4S = 1P. Sıralama: 2 > 1 > 3 şeklindedir.'
        },
        {
          id: 5,
          theme: 'Cismin Konum Değişimi ve Basınç Dinamiği',
          cognitiveLevel: 'Durum Değişimi Analizi',
          contextTitle: 'Geniş Tabanlı Vazoda Konum Değişikliği',
          scenario: 'Tabanı geniş, ağız kısmı dar olan homojen dolu bir vazo düz masanın üzerinde tabanı üzerinde durmaktadır. Bu vazo ters çevrilerek dar ağız kısmı üzerine oturtulmuştur.',
          questionPrompt: 'Vazo ters çevrildiğinde masaya uygulanan kuvvet ve basınç nasıl değişir?',
          options: [
            { key: 'A', text: 'Masaya uygulanan toplam kuvvet değişmezken, temas yüzeyi küçüldüğü için katı basıncı artar.' },
            { key: 'B', text: 'Vazonun ağırlığı azaldığı için hem uygulanan kuvvet hem de basınç azalır.' },
            { key: 'C', text: 'Temas yüzey alanı küçüldüğü için uygulanan kuvvet artar ancak basınç sabit kalır.' },
            { key: 'D', text: 'Masa yüzeyine etki eden kuvvet ve basınç değerlerinin her ikisi de yarı yarıya düşer.' }
          ],
          correctAnswer: 'A',
          explanation: 'Katı cismin ağırlığı değişmediği için zemine uygulanan dik kuvvet değişmez. Ancak temas yüzey alanı küçüldüğü için basınç artar.'
        },
        {
          id: 6,
          theme: 'Biyolojik Uyum ve Katı Basıncı',
          cognitiveLevel: 'Canlılar ve Çevre Muhakemesi',
          contextTitle: 'Çamurda Yürüyen Tavuk ve Ördeğin Ayak İzleri',
          scenario: 'Ağırlıkları tamamen eşit olan bir tavuk ile bir ördek ıslak çamurlu arazide yan yana yürümüştür. Tavuğun ayaklarının çamura çok fazla battığı, ördeğin ise batmadan rahatça yürüdüğü gözlenmiştir.',
          questionPrompt: 'Bu gözlem sonucunun temel bilimsel nedeni aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Tavuğun kas gücünün ördeğinkinden daha zayıf olması.' },
            { key: 'B', text: 'Ördeğin ayaklarının perdeli ve geniş yüzeyli olması sebebiyle çamura uyguladığı katı basıncının daha küçük olması.' },
            { key: 'C', text: 'Tavuğun vücut sıcaklığının çamurun donmasına sebep olarak batmayı kolaylaştırması.' },
            { key: 'D', text: 'Ördeğin yer çekimi ivmesinden tavuğa oranla daha az etkilenmesi.' }
          ],
          correctAnswer: 'B',
          explanation: 'Ağırlıklar eşitken ördeğin perdeli ayakları yüzey alanını büyütür ve basıncı düşürür; böylece çamura batması önlenir.'
        },
        {
          id: 7,
          theme: 'Bileme İşlemi ve Basınç Artışı',
          cognitiveLevel: 'Günlük Yaşam Çıkarımı',
          contextTitle: 'Kör Bıçağın Bilenmesi ve Kesme Kolaylığı',
          scenario: 'Mutfakta domatesi kesmekte zorlanan bir aşçı, bıçağını bileyici aletle bileyerek uç kısmını inceltmiş ve ardından aynı domatesi hiç zorlanmadan kolayca dilimlemiştir.',
          questionPrompt: 'Bıçağın bilenmesi ile gerçekleşen fiziksel durum hangisinde doğru açıklanmıştır?',
          options: [
            { key: 'A', text: 'Bıçak bilendiğinde uygulanan kuvveti yok ederek işten kazanç sağlamıştır.' },
            { key: 'B', text: 'Bilenme işlemi bıçağın kütlesini artırarak yer çekimi kuvvetini çoğaltmıştır.' },
            { key: 'C', text: 'Bıçağın keskin yüzey alanı küçültülmüş, böylece aynı kuvvetle birim alanda çok daha büyük basınç elde edilmiştir.' },
            { key: 'D', text: 'Bileme işlemi maddenin kimyasal yapısını değiştirerek metali akışkan hale getirmiştir.' }
          ],
          correctAnswer: 'C',
          explanation: 'Bileme işlemi temas yüzey alanını küçültür; P = F/S gereği aynı kuvvetle çok daha büyük kesme basıncı oluşur.'
        }
      ]
    },
    {
      id: 'g8-u3-sub2',
      title: '2. Bölüm: Sıvı Basıncı ve Pascal Prensibi',
      shortTitle: 'Sıvı Basıncı & Pascal',
      badge: 'Kavramlar & LGS',
      pageRange: '',
      concepts: ['Sıvı Basıncı Formülü', 'Derinlik (h)', 'Yoğunluk (d)', 'Kabın Şekline Bağlı Olmama', 'Baraj Duvarları', 'Pascal Prensibi', 'Su Cenderesi', 'Hidrolik Fren ve Lift'],
      simulationId: 'lever',
      summarySections: [
        {
          heading: 'Sıvı Basıncını Etkileyen Değişkenler ve Özellikler',
          paragraphs: [
            'Sıvılar, akışkan özelliklere sahip oldukları ve ağırlıkları bulunduğu için temas ettikleri kabın tüm yüzeylerine bir basınç uygularlar. Sıvı basıncının dinamiği katı basıncından farklı çalışır ve belirli değişkenlere sıkı sıkıya bağlıdır.',
            'Derinlik (Yükseklik) İlişkisi: Sıvı basıncı, sıvının en üst açık yüzeyine olan dikey uzaklığı (derinliği) ile doğru orantılıdır. Sıvının derinliği arttıkça kabın tabanına veya yan yüzeylerine yaptığı basınç artar (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Yoğunluk (Sıvının Cinsi) İlişkisi: Sıvı basıncı, sıvının yoğunluğu ile doğru orantılıdır. Eşit derinlikte bulunan farklı cins sıvılardan, yoğunluğu büyük olanın (örneğin suyun, zeytinyağı veya alkole göre) uyguladığı sıvı basıncı daha büyüktür (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Derinlik arttıkça sıvı basıncı artacağı için, su dolu bir kabın farklı derinliklerinden açılan deliklerden fışkıran sıvının yatayda aldığı mesafe (fışkırma hızı), en alttaki delikte en fazladır (ÖS ÇIKTI).',
            'Bir sıvı içine tamamen daldırılan katı bir cismin (örneğin bir küpün) alt yüzeyine etki eden sıvı basıncı ve sıvı basınç kuvveti, üst yüzeyine etki eden sıvı basıncından daima daha büyüktür; çünkü alt yüzeyin derinliği daha fazladır (LGS ÇIKTI).',
            'Sıvı Basıncının Bağlı Olmadığı Durumlar: Sıvı basıncı; kabın geometrik şekline (düz, genişleyen, daralan vb.), kabın duruşuna, kabın genişliğine ve sıvının toplam miktarına (hacmine/kütlesine) kesinlikle bağlı değildir (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Aynı cins sıvı içerisinde, aynı derinlikteki (aynı yatay hizadaki) tüm noktalarda sıvı basınçları birbirine eşittir. Durgun bir suda yatay olarak yüzen bir dalgıca etki eden sıvı basıncı değişmez (ÖS ÇIKTI).'
          ],
          keyPoints: [
            'Bağlı Olduğu Faktörler: Sadece Derinlik (h) ve Sıvı Yoğunluğudur (d) (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Bağlı Olmadığı Faktörler: Sıvının miktarı, kütlesi, kabın şekli veya taban alanı sıvı basıncını etkilemez (LGS ÇIKTI).',
            'Aynı Yatay Hiza: Aynı derinlikteki tüm noktalarda sıvı basıncı eşittir (ÖS ÇIKTI).'
          ]
        },
        {
          heading: 'Pascal Prensibi ve Teknolojik Uygulamaları',
          paragraphs: [
            'Sıvıların en önemli fiziksel özelliklerinden biri "sıkıştırılamaz" kabul edilmeleridir. Kapalı bir kapta bulunan sıvıya dışarıdan bir kuvvet uygulandığında bir basınç oluşur. Sıvılar, üzerlerine uygulanan bu basıncı kabın her noktasına ve her yöne aynı büyüklükte (aynen) iletirler. Buna Pascal Prensibi denir (LGS ÇIKTI) (ÖS ÇIKTI).',
            'İçi su dolu esnek bir balona eşit büyüklükte delikler açılıp üzerine bastırıldığında, deliklerden fışkıran suların aynı uzaklığa gitmesi Pascal prensibi ile açıklanır (ÖS ÇIKTI).',
            'Bir kapta birbirine karışmayan farklı yoğunluktaki sıvılar (örneğin altta su, üstte yağ) üst üste bulunuyorsa, kap tabanındaki toplam sıvı basıncı, her bir sıvının kendi yüksekliğiyle oluşturduğu basınçların toplamına eşittir. Üstteki sıvı, ağırlığından dolayı oluşturduğu basıncı alttaki sıvıya Pascal prensibi gereği aynen iletir (ÖS ÇIKTI).',
            'Günlük Hayattaki Uygulamaları: Su cendereleri (küçük pistondaki basıncın büyük pistona iletilmesi) (ÖS ÇIKTI), Otomobil hidrolik fren sistemleri (LGS ÇIKTI) (ÖS ÇIKTI), Hidrolik kaldıraçlar (liftler), itfaiye merdivenleri, damperli kamyonlar ve kepçeler, Berber koltukları ve ilaçlama pompaları, Birbiriyle bağlantılı kaplardan oluşan "Bileşik Kaplar" ve köylerdeki "Su Depoları" (Şehir şebeke sistemleri) sıvı basıncı dengesi ve iletimi ilkesiyle çalışır (ÖS ÇIKTI).'
          ],
          table: {
            headers: ['Kavram / Soru Alanı', 'Öğrencinin Düşündüğü (Yanlış Mantık)', 'Kavram Yanılgısının Düzeltilmesi (Doğru Yaklaşım)'],
            rows: [
              ['Sıvı Miktarı ve Basınç', 'Geniş bir havuzdaki su miktarı çok fazla olduğu için tabana yaptığı basınç ince borudakinden her zaman büyüktür.', 'Sıvı basıncı miktara değil, sadece sıvının derinliğine ve cinsine bağlıdır. 1 metre derinlikteki havuz ile 1 metre derinlikteki bardağın taban basıncı eşittir (ÖS ÇIKTI).'],
              ['Pascal Prensibi (İletim)', 'Kapalı kaptaki sıvıya kuvvet uyguladığımızda sıvı bu kuvveti her yöne aynen iletir ve büyük pistonu kaldırır.', 'Sıvılar "kuvveti" değil, "basıncı" (birim yüzeye düşen kuvveti) her yöne aynen iletir. Basınç sabit kalır; yüzey genişleyince kuvvet katlanır (LGS ÇIKTI).'],
              ['Derinlik Kavramı (Hiza)', 'Kaptaki bir noktanın derinliği ölçülürken kabın tabanından yukarıya doğru olan mesafe alınır.', 'Sıvılarda derinlik (h), kabın tabanından değil; sıvının atmosfere açık olan en üst seviyesinden aşağıya doğru ölçülen dikey mesafedir.'],
              ['Kap Şekli (Eğim)', 'Kabın yan yüzeyleri dışa eğimli (genişleyen) ise suyun ağırlığı duvara biner ve tabandaki sıvı basıncı azalır.', 'Noktanın üzerindeki dikey sıvı yüksekliği (h) aynı kaldığı sürece kabın şekli veya eğimi tabandaki sıvı basıncını kesinlikle değiştirmez.']
            ]
          },
          examNote: '📌 LGS & ÖS ÇIKMIŞ SORU KRİTİK KALIPLARI: 1) Yukarı doğru daralan veya genişleyen kap ters çevrildiğinde, içindeki sıvının hacmi değişmese bile taban alanı değiştiği için sıvının yüksekliği (h) değişir; bu sebeple sıvı basıncı artar veya azalır (LGS ÇIKTI). 2) İçi sıvı dolu bir kaba suda batan katı bir cisim (örneğin taş) atıldığında, cisim kendi hacmi kadar sıvıyı yukarı iterek derinliği artırdığı için kabın tabanındaki sıvı basıncı artar (ÖS ÇIKTI).'
        }
      ],
      glossary: [
        { term: 'Sıvı Basıncı', definition: 'Sıvıların ağırlıklarından ötürü temas ettikleri tüm yüzeylere uyguladıkları dik basınç.' },
        { term: 'Pascal Prensibi', definition: 'Sıvıların sıkıştırılamaz kabul edilerek üzerlerine uygulanan basıncı her yöne aynen iletmesi kuralı.' },
        { term: 'Su Cenderesi', definition: 'Pascal prensibinden faydalanarak küçük kuvvetle büyük yükleri kaldırmaya yarayan hidrolik sistem.' }
      ],
      trueFalseQuestions: [
        {
                "id": 1,
                "statement": "Sıvı basıncı sadece sıvının derinliğine bağlı olup sıvının cinsinden (yoğunluğundan) etkilenmez.",
                "isCorrect": false,
                "explanation": "Sıvı basıncı formülü P = h.d.g gereğince hem derinliğe (h) hem de sıvının yoğunluğuna (d) doğru orantılı olarak bağlıdır."
        },
        {
                "id": 2,
                "statement": "Aynı derinlikteki saf su ve yoğunluğu sudan büyük olan tuzlu sudan, tuzlu su kabın tabanına daha fazla sıvı basıncı uygular.",
                "isCorrect": true,
                "explanation": "Derinlikler eşit olduğunda yoğunluğu büyük olan sıvının basıncı daha fazladır."
        },
        {
                "id": 3,
                "statement": "Sıvı basıncı kabın şekline ve kaptaki toplam sıvı hacmine bağlı değildir.",
                "isCorrect": true,
                "explanation": "Sıvı basıncı yalnızca ölçüm noktasının serbest sıvı yüzeyine olan dik derinliğine ve sıvı yoğunluğuna bağlıdır."
        },
        {
                "id": 4,
                "statement": "Pascal Prensibine göre sıvılar sıkıştırılamaz ve üzerlerine uygulanan basıncı temas ettikleri her doğrultuda aynen iletirler.",
                "isCorrect": true,
                "explanation": "Kapalı kaptaki sıvıya uygulanan basınç, sıvının her noktasına ve kabın iç yüzeylerine eşit büyüklükte dik olarak iletilir."
        },
        {
                "id": 5,
                "statement": "Hidrolik fren sistemleri ve berber koltukları gazların basıncı aynen iletmesi ilkesiyle çalışır.",
                "isCorrect": false,
                "explanation": "Hidrolik frenler ve berber koltukları sıvıların basıncı iletmesi olan Pascal Prensibi ile çalışır."
        },
        {
                "id": 6,
                "statement": "Bir baraj duvarının tabanına doğru inildikçe duvar kalınlığının artırılmasının nedeni derinlik arttıkça sıvı basıncının artmasıdır.",
                "isCorrect": true,
                "explanation": "Derinlik arttıkça suyun uyguladığı sıvı basıncı arttığı için baraj duvarları tabanda daha kalın inşa edilir."
        },
        {
                "id": 7,
                "statement": "U borusunda birbiriyle karışmayan iki sıvı dengede olduğunda yoğunluğu büyük olan sıvı daima üst kısımda yer alır.",
                "isCorrect": false,
                "explanation": "Yoğunluğu büyük olan sıvı yerçekimi etkisiyle daima en altta yer alır."
        }
],
      lgsQuestions: [
        ...sebahattinBasincQuestions.filter(q => q.subTopicId === 'g8-u3-sub2'),
        {
          id: 1,
          theme: 'Sıvı Derinliği ve Basınç İlişkisi',
          cognitiveLevel: 'Gözlem ve Menzi̇l Değerlendirmesi',
          contextTitle: 'Su Dolu Şişedeki Üç Farklı Delik Deneyi',
          scenario: 'Su dolu 2 litrelik silindirik pet şişenin yan yüzeyine üstten alta doğru eşit aralıklarla K, L ve M delikleri açılmıştır. Tıkaçlar aynı anda çekildiğinde deliklerden fışkıran suların yatayda aldıkları yollar ölçülmüştür.',
          questionPrompt: 'Deliklerden çıkan suların fışkırma uzaklıkları ile ilgili aşağıdaki karşılaştırmalardan hangisi doğrudur?',
          options: [
            { key: 'A', text: 'K deliğindeki su en uzağa fışkırır çünkü açık hava basıncına en yakındır.' },
            { key: 'B', text: 'Her üç delikten fışkıran suların menzilleri birbirine eşittir.' },
            { key: 'C', text: 'L deliği ortada olduğu için en büyük basınç değerine sahiptir.' },
            { key: 'D', text: 'En derinde bulunan M deliğindeki sıvı basıncı en büyük olduğundan buradan çıkan su en uzak mesafeye dökülür.' }
          ],
          correctAnswer: 'D',
          explanation: 'Sıvı basıncı derinlikle (h) doğru orantılıdır. Taban seviyesine en yakın olan M deliğindeki derinlik ve basınç en fazladır; bu yüzden su en uzağa gider.'
        },
        {
          id: 2,
          theme: 'Baraj Duvarlarının Mühendislik Tasarımı',
          cognitiveLevel: 'Mühendislik Uygulaması ve Sebeplendirme',
          contextTitle: 'Su Toplama Barajlarının Taban Duvarları',
          scenario: 'Hidroelektrik santrallerinde inşa edilen dev baraj duvarlarının yukarıdan aşağıya doğru inildikçe kademeli olarak kalınlaştırıldığı görülmektedir.',
          questionPrompt: 'Baraj duvarlarının tabana doğru kalınlaştırılmasının temel fiziksel gerekçesi hangisidir?',
          options: [
            { key: 'A', text: 'Su derinliği arttıkça tabana etki eden sıvı basıncının artması ve kalın duvarların bu basınca dayanması.' },
            { key: 'B', text: 'Baraj gölünün üst kısmındaki suyun buharlaşmasını engellemek.' },
            { key: 'C', text: 'Suyun yoğunluğunun tabana doğru azalarak akışkanlığı yavaşlatması.' },
            { key: 'D', text: 'Baraj gölündeki balıkların tabanda daha rahat yüzmesini sağlamak.' }
          ],
          correctAnswer: 'A',
          explanation: 'Suyun derinliği arttıkça uyguladığı hidrostatik sıvı basıncı artar. Baraj tabanındaki dev basınca dayanabilmek için alt duvarlar çok kalın inşa edilir.'
        },
        {
          id: 3,
          theme: 'Sıvı Yoğunluğu ve Taban Basıncı',
          cognitiveLevel: 'Kontrollü Değişken Deneyi',
          contextTitle: 'Özdeş Kaplarda Su ve Zeytinyağı',
          scenario: 'Özdeş iki silindirik kaba aynı yükseklikte (h) olacak şekilde birine su (yoğunluğu 1 g/cm3), diğerine ise zeytinyağı (yoğunluğu 0,9 g/cm3) konulmuştur.',
          questionPrompt: 'Kapların tabanlarına uygulanan sıvı basınçları karşılaştırıldığında hangisi kesinlikle doğrudur?',
          options: [
            { key: 'A', text: 'Zeytinyağı konulan kabın taban basıncı daha büyüktür çünkü yağ daha kıvamlıdır.' },
            { key: 'B', text: 'Derinlikler eşit olduğundan yoğunluğu büyük olan suyun tabana yaptığı sıvı basıncı zeytinyağından büyüktür.' },
            { key: 'C', text: 'Her iki sıvının da yüksekliği eşit olduğu için taban basınçları birbirine eşittir.' },
            { key: 'D', text: 'Kapların taban alanları iki katına çıkarılırsa sıvı basınçları yarıya iner.' }
          ],
          correctAnswer: 'B',
          explanation: 'Sıvı basıncı derinlik ve yoğunluğun çarpımıdır (P = h.d). Derinlikler (h) eşitken yoğunluğu (d) büyük olan suyun taban basıncı daha fazladır.'
        },
        {
          id: 4,
          theme: 'Kabın Şekline Bağlı Olmama Kuralı',
          cognitiveLevel: 'Kavramsal Yanılgıyı Giderme',
          contextTitle: 'Farklı Şekilli Üç Ayrı Kap Deneyi',
          scenario: 'Taban alanları eşit ancak biri yukarı doğru genişleyen, biri silindirik, biri de yukarı doğru daralan üç farklı kaba aynı cins sıvıdan eşit yükseklikte (h) doldurulmuştur.',
          questionPrompt: 'Kapların tabanlarında oluşan sıvı basınçları arasındaki ilişki hangisinde doğru verilmiştir?',
          options: [
            { key: 'A', text: 'Genişleyen kapta sıvı miktarı fazla olduğu için taban basıncı en büyüktür.' },
            { key: 'B', text: 'Daralan kapta sıvının uyguladığı basınç diğerlerinden fazladır.' },
            { key: 'C', text: 'Sıvıların cinsi ve derinlikleri eşit olduğu için kapların tabanlarındaki sıvı basınçları birbirine eşittir.' },
            { key: 'D', text: 'Silindirik kabın taban basıncı diğer iki kabın basıncının aritmetik ortalamasına eşittir.' }
          ],
          correctAnswer: 'C',
          explanation: 'Sıvı basıncı kabın şekline ve toplam sıvı miktarına bağlı değildir. Sıvı cinsi ve derinlik eşit olduğundan her üç kabın taban basıncı eşittir.'
        },
        {
          id: 5,
          theme: 'Pascal Prensibi ve Su Cenderesi',
          cognitiveLevel: 'Hidrolik Sistem Analizi',
          contextTitle: 'Oto Liftinde Ağır Bir Aracın Kaldırılması',
          scenario: "Bir tamirhanedeki su cenderesinde küçük pistonun yüzey alanı S, büyük pistonun yüzey alanı ise 50S'dir. Küçük pistona F kuvveti uygulanarak büyük pistondaki 1500 kg ağırlığındaki araç dengelenmiştir.",
          questionPrompt: 'Bu su cenderesinin çalışma prensibi ve elde edilen kazanç hakkında hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Sıvıların basıncı aynen iletmesi sayesinde küçük bir kuvvetle çok büyük bir araç kaldırılmış ve kuvvetten kazanç sağlanmıştır.' },
            { key: 'B', text: 'Büyük pistonda elde edilen basınç değeri küçük pistona uygulanan basınçtan 50 kat büyüktür.' },
            { key: 'C', text: 'Bu hidrolik sistem sayesinde yapılan toplam işten yüzde 50 oranında tasarruf edilmiştir.' },
            { key: 'D', text: 'Aracı 1 metre yukarı kaldırmak için küçük pistonun da sadece 1 metre itilmesi yeterlidir.' }
          ],
          correctAnswer: 'A',
          explanation: 'Pascal prensibine göre sıvı basıncı her noktaya aynen iletir. Yüzey büyüdükçe uygulanan kuvvet büyür ve kuvvetten kazanç sağlanır (işten kazanç olmaz).'
        },
        {
          id: 6,
          theme: 'Araba Fren Sistemleri ve Hidrolik Basınç',
          cognitiveLevel: 'Uygulamalı Teknoloji Muhakemesi',
          contextTitle: 'Hidrolik Fren Sisteminde Pedala Basılması',
          scenario: 'Sürücü frene bastığında fren pedalına bağlı merkez silindirindeki fren sıvısı basınç üretir. Bu basınç borular içindeki sıvı ile tekerleklerdeki fren pabuçlarına iletilir ve araç durur.',
          questionPrompt: 'Fren sisteminin çalışması ile ilgili aşağıdaki ifadelerden hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Tekerleklere iletilen basınç fren sıvısının rengine ve akışkanlık hızına göre yön değiştirir.' },
            { key: 'B', text: 'Fren boruları içerisindeki sıvı sıkışarak hacmini kaybeder ve gaz haline geçer.' },
            { key: 'C', text: 'Fren sistemi katıların kuvveti tek yönde iletmesi prensibine dayalı mekanik bir çarktır.' },
            { key: 'D', text: 'Pedala uygulanan kuvvetin oluşturduğu sıvı basıncı tekerleklere kadar her doğrultuda eşit değerde iletilir.' }
          ],
          correctAnswer: 'D',
          explanation: 'Sıvılar sıkıştırılamaz kabul edilir ve Pascal prensibine göre üzerlerine uygulanan basıncı tekerleklere kadar her yöne eşit büyüklükte iletir.'
        },
        {
          id: 7,
          theme: 'Dalgıçların Maruz Kaldığı Sıvı Basıncı',
          cognitiveLevel: 'Gerçek Yaşam ve Derinlik Çıkarımı',
          contextTitle: 'Denizde K, L ve M Noktalarında Dalan Bir Dalgıç',
          scenario: 'Bir dalgıç deniz seviyesindeki K noktasından 10 metre derindeki L noktasına inmiş, ardından yatay olarak yüzüp aynı derinlikteki M noktasına ilerlemiştir.',
          questionPrompt: 'Dalgıcın hareketi boyunca vücuduna etki eden sıvı basıncındaki değişim hangisinde doğru belirtilmiştir?',
          options: [
            { key: 'A', text: "K'den L'ye inerken basınç azalır, L'den M'ye giderken basınç artar." },
            { key: 'B', text: "K'den L'ye inerken derinlik arttığı için basınç artar; L'den M'ye yatay yüzerken derinlik değişmediği için basınç sabit kalır." },
            { key: 'C', text: 'Dalgıcın üzerindeki sıvı basıncı hareket ettiği her saniye kesintisiz olarak sürekli yükselir.' },
            { key: 'D', text: 'Yatay yüzdüğü L-M aralığında deniz suyu yoğunluğu arttığı için basınç zirveye çıkar.' }
          ],
          correctAnswer: 'B',
          explanation: 'Derinlere indikçe (K-L) sıvı basıncı artar. Aynı derinlikte yatay hareket ederken (L-M) derinlik değişmediği için sıvı basıncı değişmez.'
        }
      ]
    },
    {
      id: 'g8-u3-sub3',
      title: '3. Bölüm: Gazların Basıncı ve Açık Hava Basıncı',
      shortTitle: 'Gaz Basıncı & Torricelli',
      badge: 'Kavramlar & LGS',
      pageRange: '',
      concepts: ['Açık Hava Basıncı (Atmosfer Basıncı)', 'Torricelli Deneyi (76 cm-Hg)', 'Yükseklikle Basınç Değişimi', 'Vantuz ve Pipet İlkeleri', 'Ters Çevrilen Bardak Deneyi', 'Kapalı Kap Gaz Basıncı', 'Mutfak Tüpü ve Oksijen Tüpü'],
      simulationId: 'lever',
      summarySections: [
        {
          heading: 'Gazlarda Basınç, Toriçelli Deneyi ve Rakım İlişkisi',
          paragraphs: [
            'Gazlar da tıpkı sıvılar gibi akışkandır. Gaz taneciklerinin bağımsız, sürekli ve rastgele hareketleri ile kendi ağırlıkları, temas ettikleri tüm yüzeylere kuvvet uygulamalarına neden olur. Birim yüzeye etki eden bu kuvvete gaz basıncı denir. Kapalı kaplardaki gaz basıncı manometre, açık hava basıncı ise barometre ile ölçülür.',
            'Kapalı Kaplardaki Gaz Basıncı: Kapalı bir kabın içindeki gaz molekülleri sürekli hareket halindedir ve kabın iç yüzeyinin her noktasına çarparak bir basınç oluştururlar. Gazlar bulundukları kabın tamamını doldurduğu için kabın her noktasına uyguladıkları basınç eşittir.',
            'Toriçelli Deneyi ve Basıncın Ölçülmesi: Bilim insanı Toriçelli, deniz seviyesinde ve 0°C sıcaklıkta, yaklaşık 1 metre uzunluğundaki bir cam boruyu tamamen cıva ile doldurup cıva dolu çanağa ters daldırmıştır. Borudaki cıva seviyesi 76 cm hizasında sabitlenmiştir. Bu durum, borunun dışından sıvıya etki eden açık hava basıncının boru içindeki 76 cm\'lik cıvanın uyguladığı sıvı basıncı ile dengelenmesidir (ÖS ÇIKTI).',
            'Cam boruda ölçülen bu sıvı yüksekliği (h); borunun kalınlığına, eğimine, şekline veya uzunluğuna kesinlikle bağlı değildir (ÖS ÇIKTI).',
            'Toriçelli deneyinde cıva yerine yoğunluğu çok daha küçük bir sıvı (örneğin su) kullanılsaydı, açık hava basıncını dengelemek için çok daha yüksek bir sıvı sütununa (yaklaşık 10,5 metre) ihtiyaç duyulurdu (ÖS ÇIKTI).',
            'Rakım ve Açık Hava Basıncı İlişkisi: Deniz seviyesinden yükseklere (dağlara doğru) çıkıldıkça, üzerimizdeki atmosfer tabakasının kalınlığı, miktarı ve havanın yoğunluğu azalır. Bu nedenle deniz seviyesinden yukarılara çıkıldıkça açık hava basıncı azalır. Kulaklarımızın tıkanması veya burun kanaması bu dış basınç düşüşünün vücut içi basınçla etkileşimidir (LGS ÇIKTI) (ÖS ÇIKTI).'
          ],
          keyPoints: [
            'Açık Hava Basıncı: Her yöne eşit şekilde etki eder (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Rakım Kuralı: Deniz seviyesinden yukarılara çıkıldıkça açık hava basıncı daima azalır (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Toriçelli Bağımsızlığı: Borunun eğimi, şekli ve kalınlığı 76 cm cıva yüksekliğini kesinlikle değiştirmez (ÖS ÇIKTI).'
          ]
        },
        {
          heading: 'Günlük Hayatta Açık Hava Basıncının Varlığını İspatlayan Durumlar',
          paragraphs: [
            'Ters Çevrilen Bardak Deneyi: Tamamen su doldurulmuş bir bardağın üzeri kâğıtla kapatılıp hızlıca ters çevrildiğinde suyun dökülmemesi; aşağıdan yukarıya doğru kâğıda etki eden açık hava basıncının bardak içindeki suyun sıvı basıncını dengelemesiyle açıklanır (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Büzülen Teneke / Yakıt Tankeri: İçi hava dolu boş metal kutu ısıtılıp kapatılarak soğutulduğunda veya yakıt tankerinin havası vakumlandığında içe doğru büzülür (çöker). Bunun nedeni dış açık hava basıncının artması değil, iç gaz basıncının azalarak dış basıncın net ezici üstünlük sağlamasıdır (LGS ÇIKTI) (ÖS ÇIKTI).',
            'Vantuzlar (Magdeburg Yarım Küreleri): Pürüzsüz masaya kuvvetlice bastırılan vantuzun içindeki hava boşalır; dış yüzeyine etki eden güçlü açık hava basıncı sayesinde vantuzu çekerek masayı havaya kaldırmak mümkündür (ÖS ÇIKTI).',
            'Şişirilemeyen Balon Deneyi: Boş pet şişe içine geçirilen balonu üfleyerek şişirmek zordur; çünkü balon genişlemek istedikçe şişede hapsolmuş hava sıkışarak balona karşı dirençli bir basınç uygular (ÖS ÇIKTI).',
            'Sıvı Akışının Kontrolü: İçi sıvı dolu altı delik şişenin kapağı kapatıldığında sıvı akışı durur (açık hava basıncı deliği dengeler). Kapak açıldığında sıvının üstüne de açık hava basıncı biner ve sıvı akar. Çaydanlık ve meyve suyu kutularındaki ikinci delik de bu prensiple çalışır (LGS ÇIKTI) (ÖS ÇIKTI).'
          ],
          table: {
            headers: ['Kavram / Soru Alanı', 'Öğrencinin Düşündüğü (Yanlış Mantık)', 'Kavram Yanılgısının Düzeltilmesi (Doğru Yaklaşım)'],
            rows: [
              ['Gaz Basıncının Yönü', 'Havanın ağırlığı olduğuna göre açık hava basıncı katılar gibi sadece yukarıdan aşağıya etki eder.', 'Gaz tanecikleri her yöne rastgele hareket eder. Açık hava basıncı cisimlerin tüm yüzeylerine her yönden (alttan, üstten, yanlardan) eşit şekilde etki eder (ÖS ÇIKTI).'],
              ['Büzülen Teneke / Kutu', 'İçi boşaltılan kutu büzülüyorsa dış ortamdaki açık hava basıncı aniden artıp kutuyu ezmiştir.', 'Dışarıdaki açık hava basıncı sabittir. Kutunun çökme sebebi içindeki hava molekülleri boşaldığı için "İç Basıncın" düşmesidir. Sabit dış basınç galip gelerek cismi ezer (LGS ÇIKTI).'],
              ['Yükseklik ve Basınç', 'Dağlara çıkıldıkça yer çekimi azaldığı veya hava soğuduğu için atmosfer basıncı daha da artar.', 'Yukarılara çıkıldıkça üzerimizdeki atmosfer tabakasının kalınlığı ve gaz yoğunluğu azalır; bu yüzden açık hava basıncı giderek azalır (LGS ÇIKTI).'],
              ['Toriçelli Deneyi Sıvı Cinsi', 'Toriçelli deneyinde su kullanılsaydı su daha hafif olduğu için boruda 76 cm\'den daha az yükselirdi.', 'Açık hava basıncı sabittir. Sıvının yoğunluğu ne kadar küçükse onu dengelemek için gereken sıvı sütunu o kadar yüksek olmalıdır (Su kullanılsaydı 10,5 metre olurdu) (ÖS ÇIKTI).']
            ]
          },
          examNote: '📌 LGS & ÖS ÇIKMIŞ SORU KRİTİK KALIPLARI: 1) Deniz seviyesinden yükseklere (dağlara) çıkarılan esnek bir çocuk balonunun (veya kapalı cips paketinin) dışarıdaki açık hava basıncının azalmasıyla hacmi giderek büyür ve patlayabilir (LGS ÇIKTI). 2) Toriçelli deneyinde farklı kalınlıkta, eğimde veya şekildeki cam borular kullanıldığında borudaki cıva kütlesi değişse bile dikey yükseklik (76 cm) kesinlikle aynı kalır (ÖS ÇIKTI).'
        }
      ],
      glossary: [
        { term: 'Açık Hava Basıncı', definition: 'Atmosferdeki gaz kütlesinin ağırlığı sebebiyle yeryüzündeki nesnelere uyguladığı basınç.' },
        { term: 'Barometre', definition: 'Açık hava basıncını ölçmeye yarayan düzenek.' },
        { term: 'Manometre', definition: 'Kapalı kaplardaki gazların basıncını ölçen aygıt.' }
      ],
      trueFalseQuestions: [
        {
                "id": 1,
                "statement": "Deniz seviyesinden yüksek dağ zirvelerine çıkıldıkça açık hava basıncı artar.",
                "isCorrect": false,
                "explanation": "Yükseklere çıkıldıkça gaz yoğunluğu ve atmosferi oluşturan hava tabakasının kalınlığı azaldığı için açık hava basıncı azalır."
        },
        {
                "id": 2,
                "statement": "Toriçelli deneyinde deniz seviyesinde ve 0 °C sıcaklıkta cıva sütunu yüksekliği 76 cm olarak ölçülmüştür.",
                "isCorrect": true,
                "explanation": "Açık hava basıncı 76 cm-Hg cıva basıncına eşittir."
        },
        {
                "id": 3,
                "statement": "Toriçelli deneyinde cıva yerine yoğunluğu çok daha küçük olan su kullanılsaydı cam borudaki sıvı yüksekliği yaklaşık 10,3 metre olurdu.",
                "isCorrect": true,
                "explanation": "Suyun yoğunluğu cıvadan yaklaşık 13,6 kat küçük olduğu için borudaki sıvı yüksekliği yaklaşık 10,5 metre olmalıdır."
        },
        {
                "id": 4,
                "statement": "Vantuzların pürüzsüz fayans yüzeylere yapışması açık hava basıncının etkisiyle açıklanır.",
                "isCorrect": true,
                "explanation": "Vantuz ile yüzey arasındaki hava boşaltıldığında dışarıdaki açık hava basıncı vantuzu yüzeye kuvvetle bastırır."
        },
        {
                "id": 5,
                "statement": "Şişirilmiş bir esnek balon gökyüzüne doğru yükseldikçe dış ortamdaki açık hava basıncı arttığı için hacmi küçülür.",
                "isCorrect": false,
                "explanation": "Yükseklere çıkıldıkça açık hava basıncı azaldığı için esnek balonun hacmi gittikçe büyür ve patlayabilir."
        },
        {
                "id": 6,
                "statement": "Oksijen tüpleri ve mutfak tüpleri gazların yüksek basınç altında sıkıştırılarak sıvılaştırılması esasına dayanır.",
                "isCorrect": true,
                "explanation": "Gazlar basınç altında yüksek oranda sıkıştırılabilir ve kapalı kapta her yöne eşit basınç uygular."
        },
        {
                "id": 7,
                "statement": "Pipetle meyve suyu içerken kutunun içe doğru büzülmesi açık hava basıncının kutu içindeki gaz basıncından büyük olmasından kaynaklanır.",
                "isCorrect": true,
                "explanation": "Pipetle hava çekildiğinde kutu iç basıncı düşer ve açık hava basıncı kutuyu içeri doğru büzer."
        }
],
      lgsQuestions: [
        ...sebahattinBasincQuestions.filter(q => q.subTopicId === 'g8-u3-sub3'),
        {
          id: 1,
          theme: 'Torricelli Deneyi ve Rakım İlişkisi',
          cognitiveLevel: 'Deney ve Yükseklik Muhakemesi',
          contextTitle: 'Torricelli Düzeneğinin Dağın Tepesine Taşınması',
          scenario: 'Deniz seviyesinde yapılan Torricelli deneyinde cam borudaki cıva seviyesi 76 cm ölçülmüştür. Bu deney düzeneği hiçbir sızıntı olmadan 2500 metre yükseklikteki bir dağın zirvesine çıkarılmıştır.',
          questionPrompt: 'Dağın zirvesinde yapılan ölçümde cıva seviyesindeki değişim ve sebebi hangisinde doğru açıklanmıştır?',
          options: [
            { key: 'A', text: 'Zirvede hava sıcaklığı düştüğü için cıva seviyesi 85 cm seviyesine yükselir.' },
            { key: 'B', text: 'Yer çekimi ivmesi azaldığı için borudaki cıva tamamen çanağa boşalır.' },
            { key: 'C', text: "Yükseklere çıkıldıkça atmosfer yoğunluğu ve açık hava basıncı azaldığı için cıva seviyesi 76 cm'nin altına düşer." },
            { key: 'D', text: 'Açık hava basıncı yüksekliğe bağlı olmadığı için cıva seviyesi tam 76 cm kalır.' }
          ],
          correctAnswer: 'C',
          explanation: "Yükseklere çıkıldıkça açık hava basıncı düşer. Dış basınç azaldığı için borudaki cıvayı tutan kuvvet zayıflar ve cıva seviyesi 76 cm'nin altına iner."
        },
        {
          id: 2,
          theme: 'Ters Çevrilen Bardak ve Basınç Dengesi',
          cognitiveLevel: 'Görsel Deney Açıklaması',
          contextTitle: 'Ağzı Kağıtla Kapatılan Su Bardağı Deneyi',
          scenario: 'Tamamen suyla doldurulan bir su bardağının ağzına düz bir kağıt kapatılmış ve bardak dikkatlice ters çevrilmiştir. Kağıdın düşmediği ve suyun dökülmediği gözlenmiştir.',
          questionPrompt: 'Suyun dökülmesini engelleyen temel fiziksel etki aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: 'Kağıdın suyu emerek bardağın kenarlarına yapışkan bir madde salgılaması.' },
            { key: 'B', text: 'Suyun yoğunluğunun açık hava basıncından binlerce kat daha büyük olması.' },
            { key: 'C', text: 'Bardağın içindeki vakumun suyu bardağın tabanına doğru kuvvetle çekmesi.' },
            { key: 'D', text: 'Kağıdın alt yüzeyine etki eden açık hava basıncının bardağın içindeki suyun sıvı basıncından büyük olması.' }
          ],
          correctAnswer: 'D',
          explanation: 'Alttan etki eden açık hava basıncı, bardaktaki suyun yaptığı sıvı basıncını dengeleyerek kağıdın ve suyun düşmesini engeller.'
        },
        {
          id: 3,
          theme: 'Esnek Balon ve İç-Dış Basınç Dengesi',
          cognitiveLevel: 'Fiziksel Model Muhakemesi',
          contextTitle: 'Deniz Seviyesinden Dağa Çıkarılan Esnek Balon',
          scenario: 'Ağzı hava sızdırmaz şekilde bağlanan esnek bir çocuk balonu deniz kıyısındaki K noktasından yüksek bir dağın zirvesindeki L noktasına çıkarılmıştır.',
          questionPrompt: 'Balon L noktasına ulaştığında balonda meydana gelen değişim hangisinde doğru verilmiştir?',
          options: [
            { key: 'A', text: 'Dış ortamdaki açık hava basıncı azaldığı için balon iç basıncını dengelemek amacıyla genleşir ve hacmi büyür.' },
            { key: 'B', text: 'Dış basınç arttığı için balonun hacmi küçülür ve sönük hale gelir.' },
            { key: 'C', text: 'Balonun içindeki gaz molekülleri kaybolduğu için balonun kütlesi yarıya iner.' },
            { key: 'D', text: 'Balonun hacmi ve iç basıncı hiçbir değişikliğe uğramadan sabit kalır.' }
          ],
          correctAnswer: 'A',
          explanation: 'Yükseklerde açık hava basıncı düşer. Esnek balon iç ve dış basıncı eşitlemek için genişler; yani hacmi artar.'
        },
        {
          id: 4,
          theme: 'Akışkanlar ve Basınç Farkı',
          cognitiveLevel: 'Günlük Yaşam Problemi',
          contextTitle: 'Yağ Tenekesinden Sıvı Yağın Akıtılması',
          scenario: 'Hamza Bey tenekedeki zeytinyağını boşaltırken tek delik açtığında yağın kesik kesik aktığını ve zorlandığını görmüş; tenekenin üst kısmına ikinci bir delik açtığında ise yağın pürüzsüz ve hızlı aktığını fark etmiştir.',
          questionPrompt: 'İkinci deliğin açılmasıyla yağın kolayca akmasının sebebi nedir?',
          options: [
            { key: 'A', text: 'Tenekedeki zeytinyağının yoğunluğunun ikinci delikten sonra aniden düşmesi.' },
            { key: 'B', text: 'Açılan ikinci delikten içeri giren açık havanın tenekedeki yağı iterek basınç dengesi sağlaması.' },
            { key: 'C', text: 'İkinci delikten sonra yer çekimi kuvvetinin teneke üzerinde iki katına çıkması.' },
            { key: 'D', text: 'Tenekenin içindeki havanın tamamen dışarı kaçarak içeride vakum oluşturması.' }
          ],
          correctAnswer: 'B',
          explanation: 'İkinci delikten içeri giren açık hava, içerideki basıncı dengeler ve sıvıyı dışarı iterek yağın düzenli akmasını sağlar.'
        },
        {
          id: 5,
          theme: 'Atmosfer Basıncının Varlık Kanıtı',
          cognitiveLevel: 'Deney ve Gözlem Yorumu',
          contextTitle: 'Havası Boşaltılan Pet Şişenin Büzüşmesi',
          scenario: 'İçinde az miktarda ılık su bulunan pet şişenin ağzına vakum pompası bağlanarak içerisindeki hava hızla boşaltılmıştır. Pompa çalıştırıldığı anda plastik şişenin her taraftan içe doğru büzüşüp ezildiği görülmüştür.',
          questionPrompt: 'Pet şişenin ezilmesi olayından çıkarılacak en temel bilimsel sonuç hangisidir?',
          options: [
            { key: 'A', text: 'Plastik maddenin kimyasal bağlarının sıcak su buharıyla tamamen kopması.' },
            { key: 'B', text: 'Havanın sadece yukarıdan aşağıya doğru tek yönlü basınç uygulayabilmesi.' },
            { key: 'C', text: 'Açık hava basıncının atmosferdeki tüm nesnelere her yönden büyük bir kuvvet uyguladığının kanıtlanması.' },
            { key: 'D', text: 'Pet şişenin içindeki sıvı basıncının dışarıdaki gaz basıncını yenmesi.' }
          ],
          correctAnswer: 'C',
          explanation: 'Şişenin içindeki hava çekilince iç basınç düşer. Dışarıdaki açık hava basıncı şişeyi her yönden sıkıştırıp büzüştürür; bu açık hava basıncının varlığını ispatlar.'
        },
        {
          id: 6,
          theme: 'Kapalı Kaplarda Gaz Basıncı Teknolojisi',
          cognitiveLevel: 'Uygulamalı Teknoloji Değerlendirmesi',
          contextTitle: 'Sıkıştırılmış Gaz İçeren Güvenlik Araçları',
          scenario: 'Mutfak tüpleri, yangın söndürme tüpleri ve otomobillerdeki hava yastıkları yüksek basınç altında sıkıştırılmış gaz teknolojisinden yararlanılarak üretilmiştir.',
          questionPrompt: 'Kapalı kaplardaki gazların basınç özellikleri ile ilgili aşağıdaki ifadelerden hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Kapalı kaplardaki gazlar kabın sadece taban kısmına basınç uygular, yan duvarlara uygulamaz.' },
            { key: 'B', text: 'Gazlar sıcaklık arttıkça daha yavaş hareket eder ve uyguladıkları basınç düşer.' },
            { key: 'C', text: 'Kapalı kaptaki gazın hacmi küçüldükçe ve molekül sayısı arttıkça basıncı azalır.' },
            { key: 'D', text: 'Gaz tanecikleri kabın içindeki her noktaya sürekli çarparak tüm yüzeylere eşit büyüklükte basınç uygular.' }
          ],
          correctAnswer: 'D',
          explanation: 'Kapalı kaplardaki gaz molekülleri serbestçe hareket eder ve kabın her noktasına homojen şekilde çarparak her yere eşit basınç uygular.'
        }
      ]
    }
  ]
};

import { Unit } from '../../types/curriculum';

export const grade7Unit5Data: Unit = {
  id: 'g7-unit-5',
  unitNumber: 5,
  bookNumber: 2,
  grade: 7,
  subject: 'Fen Bilimleri',
  title: 'Maddenin Doğasına Yolculuk',
  unitEndPageRange: 's. 97-101',
  colorTheme: {
    primary: 'from-emerald-600 to-teal-700',
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-950/40',
    accent: 'text-emerald-400',
    text: 'text-emerald-200'
  },
  subTopics: [
    {
      id: 'g7-u5-sub1',
      title: '1. Maddenin Tanecikli Yapısı ve Atom Modelleri',
      shortTitle: 'Atom ve Modelleri',
      badge: '1. Bölüm',
      pageRange: '45-57',
      concepts: ['Atom', 'Proton', 'Nötron', 'Elektron', 'Çekirdek', 'Katman', 'Molekül', 'Democritus', 'Dalton', 'Thomson', 'Rutherford', 'Bohr', 'Modern Atom Teorisi'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Maddenin Tanecikli Yapısı ve Atomun Temel Parçacıkları',
          paragraphs: [
            'Tüm maddeler, gözle görülemeyecek kadar küçük taneciklerin muazzam bir intizamla bir araya getirilmesiyle yaratılmıştır. Maddeleri oluşturan bu en küçük yapı taşlarına atom adı verilir.',
            'Atom; merkezde yer alan çekirdek ve çekirdeğin etrafındaki katmanlar olmak üzere iki temel kısımdan meydana gelir. Çekirdekte pozitif (+) yüklü protonlar ile yüksüz nötronlar yer alır. Katmanlarda ise çok hızlı hareket eden negatif (-) yüklü elektronlar dolanır.'
          ],
          keyPoints: [
            'Proton (p+): Çekirdekte bulunur. Pozitif (+) yüklüdür. Atomun kimliğini belirler.',
            'Nötron (n0): Çekirdekte bulunur. Yüksüz (nötr) parçacıktır. Proton ile birlikte atomun kütlesini oluşturur.',
            'Elektron (e-): Çekirdek çevresindeki katmanlarda çok yüksek süratle hareket eder. Negatif (-) yüklüdür. Atomun hacmini ve yarıçapını belirler.',
            'Kütle İlişkisi: 1 proton ≈ 1 nötron ≈ 2000 elektron kütlesi. Elektronların kütlesi yok denecek kadar az olduğundan atomun kütlesini çekirdek belirler.'
          ],
          table: {
            headers: ['Parçacık', 'Yükü', 'Sembolü', 'Atomdaki Yeri', 'Görevi / Özelliği'],
            rows: [
              ['Proton', 'Pozitif (+)', 'p+', 'Çekirdek', 'Atomun kimlik numarasını (atom numarası) belirler.'],
              ['Nötron', 'Yüksüz (0)', 'n0', 'Çekirdek', 'Protonla beraber çekirdeğin kütlesini oluşturur.'],
              ['Elektron', 'Negatif (-)', 'e-', 'Katmanlar', 'Çok hızlı hareket eder, atomun yarıçapını ve hacmini belirler.']
            ]
          }
        },
        {
          heading: 'Geçmişten Günümüze Atom Modellerinin Gelişimi',
          paragraphs: [
            'Bilimsel bilgi kesin ve değişmez olmayıp yeni gözlem ve teknolojilerle gelişebilir. Tarih boyunca atom hakkında geliştirilen teoriler şunlardır:'
          ],
          keyPoints: [
            'Democritus (MÖ 400): Atom kavramını ilk kullanan filozoftur. Maddenin bölünemeyen en küçük parçasına Yunanca "atomos" adını vermiştir.',
            'Dalton (1805): Atomu içi dolu, berk ve parçalanamaz kürelere benzetmiştir.',
            'Thomson (1897): Elektronları keşfetmiş, atomu üzümlü keke benzetmiştir (Kek pozitif yük, gömülü üzümler negatif yük).',
            'Rutherford (1912): Atom çekirdeğini keşfetmiştir. Atomun büyük kısmının boşluk olduğunu ve elektronların çekirdek etrafında Güneş sistemine benzer şekilde dolandığını savunmuştur.',
            'Bohr (1913): Elektronların çekirdek etrafında rastgele değil, belirli enerji düzeylerine sahip katmanlarda (yörüngelerde) dolandığını belirtmiştir.',
            'Modern Atom Teorisi (1930): Elektronların yerleri kesin olarak bilinemez; ancak bulunma ihtimalinin yüksek olduğu bölgeler vardır. Bu bölgelere elektron bulutu adı verilir.'
          ]
        },
        {
          heading: 'Molekül Kavramı',
          paragraphs: [
            'Aynı veya farklı cins atomların belirli oranlarda birbirine kimyasal bağlarla bağlanarak oluşturduğu atom gruplarına molekül denir. Örneğin hidrojen gazı (H2) ve oksijen gazı (O2) aynı cins atomlardan oluşan moleküllerdir. Su (H2O) ve karbondioksit (CO2) ise farklı cins atomlardan meydana gelen moleküllerdir.'
          ]
        }
      ],
      trueFalseQuestions: [
        {
          id: 1,
          text: 'Atomun kütlesinin neredeyse tamamını çekirdekte bulunan proton ve nötronlar oluşturur.',
          isCorrect: true,
          explanation: 'Doğrudur. Elektronun kütlesi protonun yaklaşık 2000’de biri kadar çok küçük olduğundan atom kütlesi çekirdekte toplanmıştır.'
        },
        {
          id: 2,
          text: 'Thomson atom modelinde atom Güneş sistemine benzetilmiştir.',
          isCorrect: false,
          explanation: 'Yanlıştır. Atomu Güneş sistemine benzeten Rutherford’dur; Thomson ise üzümlü kek modelini ortaya atmıştır.'
        },
        {
          id: 3,
          text: 'Modern atom teorisine göre elektronların çekirdek etrafında bulunma olasılığının yüksek olduğu bölgelere elektron bulutu denir.',
          isCorrect: true,
          explanation: 'Doğrudur. Modern atom teorisinde elektronlar katman çizgilerinde değil elektron bulutunda hareket eder.'
        }
      ],
      lgsQuestions: [
        {
          id: 1,
          questionPrompt: 'Nötr bir atomun çekirdeğinde 11 proton ve 12 nötron bulunmaktadır.\n\nBuna göre bu atomun katmanlarındaki elektron sayısı ve atom kütlesini oluşturan parçacık sayısı hangi seçenekte doğru verilmiştir?',
          options: [
            { key: 'A', text: 'Elektron sayısı: 11, Kütle parçacığı: 23' },
            { key: 'B', text: 'Elektron sayısı: 12, Kütle parçacığı: 11' },
            { key: 'C', text: 'Elektron sayısı: 23, Kütle parçacığı: 12' },
            { key: 'D', text: 'Elektron sayısı: 11, Kütle parçacığı: 12' }
          ],
          correctAnswer: 'A',
          explanation: 'Nötr atomda proton sayısı elektron sayısına eşittir (Elektron = 11). Çekirdekteki kütleyi oluşturan parçacıklar proton + nötron = 11 + 12 = 23\'tür.'
        }
      ]
    },
    {
      id: 'g7-u5-sub2',
      title: '2. Saf Maddeler: Elementler, Periyodik Tablo ve Bileşikler',
      shortTitle: 'Elementler ve Bileşikler',
      badge: '2. Bölüm',
      pageRange: '58-78',
      concepts: ['Element', 'Bileşik', 'Periyodik Tablo', 'İlk 18 Element', 'Grup ve Periyot', 'Katman Elektron Dağılımı', 'Dublet ve Oktet', 'İyon'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Saf Maddeler: Elementler ve Sembolleri',
          paragraphs: [
            'Yapısında tek çeşit atom ya da molekül bulunduran maddelere saf madde denir. Saf maddelerin erime noktası, kaynama noktası ve yoğunluk gibi belirli ayırt edici özellikleri vardır.',
            'Aynı cins atomlardan oluşan ve fiziksel ya da kimyasal yöntemlerle daha basit maddelere ayrıştırılamayan saf maddelere element denir. Tüm dünyada bilimsel birliği sağlamak amacıyla elementler ortak sembollerle ifade edilir. Sembolün ilk harfi daima büyük, varsa ikinci harfi küçük yazılır.'
          ],
          table: {
            headers: ['Atom No', 'Element Adı', 'Sembolü', 'Günlük Hayattaki Yaygın Elementler', 'Sembolü'],
            rows: [
              ['1', 'Hidrojen', 'H', 'Demir', 'Fe'],
              ['2', 'Helyum', 'He', 'Bakır', 'Cu'],
              ['3', 'Lityum', 'Li', 'Çinko', 'Zn'],
              ['4', 'Berilyum', 'Be', 'Gümüş', 'Ag'],
              ['5', 'Bor', 'B', 'Altın', 'Au'],
              ['6', 'Karbon', 'C', 'Cıva', 'Hg'],
              ['7', 'Azot', 'N', 'Kurşun', 'Pb'],
              ['8', 'Oksijen', 'O', 'Platin', 'Pt'],
              ['9', 'Flor', 'F', 'İyot', 'I']
            ]
          }
        },
        {
          heading: 'Periyodik Tablo, Katman Dağılımı ve İyon Oluşumu',
          paragraphs: [
            'Bilinen tüm elementlerin artan atom numaralarına (proton sayılarına) göre sınıflandırıldığı tabloya periyodik tablo denir. Tabloda 7 yatay satır (periyot) ve 18 dikey sütun (grup: 8 A, 10 B) bulunur.',
            'Nötr atomların elektronları katmanlara belirli kurallarla yerleşir: 1. katman en fazla 2, 2. katman en fazla 8, 3. katman en fazla 8 elektron alabilir.',
            'Katman Sayısı = Periyot Numarasını verir.',
            'Son Katmandaki Elektron Sayısı (Değerlik Elektronu) = A grubu numarasını verir (İstisna: Helyumun 2 elektronu olmasına rağmen 8A soygaz grubundadır).'
          ],
          keyPoints: [
            'Kararlı Atom: Son katmanı alabileceği maksimum elektronla dolu olan atomlardır.',
            'Dublet Kuralı: Son katmandaki elektron sayısını 2\'ye tamamlama (Helyum düzeni).',
            'Oktet Kuralı: Son katmandaki elektron sayısını 8\'e tamamlama.',
            'İyon: Elektron alarak negatif (-) ya da elektron vererek pozitif (+) yük fazlalığına sahip olan yüklü taneciktir. Son katmanında 1, 2, 3 elektron olanlar elektron vererek (+) katyon olur; 5, 6, 7 olanlar elektron alarak (-) anyon olur.'
          ]
        },
        {
          heading: 'Bileşikler ve Formülleri',
          paragraphs: [
            'Farklı cins atomların belirli sabit oranlarda kimyasal bağlarla bir araya gelmesiyle oluşan ve sadece kimyasal yollarla ayrıştırılabilen saf maddelere bileşik denir. Bileşiği oluşturan elementler kendi kimyasal özelliklerini tamamen kaybederler.',
            'Bileşikler formüllerle gösterilir. Örneğin yanıcı hidrojen ile yakıcı oksijen birleşerek söndürücü olan suyu (H2O) meydana getirir.'
          ],
          table: {
            headers: ['Bileşik Adı', 'Formülü', 'İçerdiği Atom Türleri ve Sayısı'],
            rows: [
              ['Su', 'H2O', '2 Hidrojen, 1 Oksijen'],
              ['Sofra Tuzu (Sodyum klorür)', 'NaCl', '1 Sodyum, 1 Klor'],
              ['Amonyak', 'NH3', '1 Azot, 3 Hidrojen'],
              ['Karbondioksit', 'CO2', '1 Karbon, 2 Oksijen'],
              ['Karbonmonoksit', 'CO', '1 Karbon, 1 Oksijen'],
              ['Sülfürik Asit (Zaç yağı)', 'H2SO4', '2 Hidrojen, 1 Kükürt, 4 Oksijen'],
              ['Hidrojen Klorür (Tuz ruhu)', 'HCl', '1 Hidrojen, 1 Klor'],
              ['Sodyum Hidroksit (Sud-kostik)', 'NaOH', '1 Sodyum, 1 Oksijen, 1 Hidrojen'],
              ['Glikoz (Basit şeker)', 'C6H12O6', '6 Karbon, 12 Hidrojen, 6 Oksijen']
            ]
          }
        }
      ],
      trueFalseQuestions: [
        {
          id: 4,
          text: 'Helyum (He) elementi son katmanında 2 elektron bulundurmasına rağmen 8A grubunda yer alır.',
          isCorrect: true,
          explanation: 'Doğrudur. Helyumun tek katmanı tam dolu ve kararlı olduğundan soygazlar (8A) grubunda bulunur.'
        },
        {
          id: 5,
          text: 'Bileşikler kendilerini oluşturan elementlerin özelliklerini aynen taşırlar.',
          isCorrect: false,
          explanation: 'Yanlıştır. Bileşiği oluşturan elementler kendi kimyasal özelliklerini tamamen kaybederek yepyeni özellikte bir saf madde oluştururlar.'
        }
      ],
      lgsQuestions: [
        {
          id: 2,
          questionPrompt: 'Atom numarası 12 olan Magnezyum (Mg) elementinin katman elektron dağılımı ve kararlı iyon hâli ile ilgili hangisi DOĞRUDUR?',
          options: [
            { key: 'A', text: 'Elektron dağılımı 2-8-2 olup 3. periyot 2A grubundadır; 2 elektron vererek +2 yüklü iyon olur.' },
            { key: 'B', text: 'Elektron dağılımı 2-8-2 olup 2. periyot 3A grubundadır; 6 elektron alarak -6 yüklü iyon olur.' },
            { key: 'C', text: 'Elektron dağılımı 2-8-2 olup dublet kuralına uymak için elektron alır.' },
            { key: 'D', text: 'Elektron dağılımı 2-10 olup soygaz sınıfındadır.' }
          ],
          correctAnswer: 'A',
          explanation: '12Mg: 1. katman 2, 2. katman 8, 3. katman 2 elektrondur (3 katman = 3. periyot, son katmanda 2 elektron = 2A grubu). Kararlı olmak için son katmandaki 2 elektronu verir ve +2 yüklü iyon olur.'
        }
      ]
    },
    {
      id: 'g7-u5-sub3',
      title: '3. Karışımlar ve Çözünme Hızı',
      shortTitle: 'Karışımlar ve Çözeltiler',
      badge: '3. Bölüm',
      pageRange: '79-88',
      concepts: ['Karışım', 'Homojen Karışım (Çözelti)', 'Heterojen Karışım', 'Çözücü', 'Çözünen', 'Çözünme Hızı', 'Bağımsız Değişken', 'Alaşım'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Karışım Nedir? Homojen ve Heterojen Karışımlar',
          paragraphs: [
            'Birden fazla maddenin kimyasal bağ oluşturmadan, kendi özelliklerini kaybetmeden rastgele oranlarda bir araya gelmesiyle oluşan saf olmayan maddelere karışım denir. Karışımların sembolü veya formülü yoktur; fiziksel yollarla ayrılabilirler.',
            'Homojen Karışım (Çözelti): Her tarafında aynı özelliği gösteren, dışarıdan bakıldığında tek bir madde gibi algılanan karışımlardır. Çözücü + Çözünen = Çözelti formülüyle ifade edilir. Genellikle miktarı fazla olan çözücü, az olan çözünendir; su her zaman çözücüdür. Örnek: Tuzlu su, şekerli su, hava, gazoz, kolonya, madeni para ve alaşımlar (çelik, bronz/tunç, lehim).',
            'Heterojen Karışım: Karışımı oluşturan maddelerin her yere eşit dağılmadığı ve birden fazla fazın görüldüğü karışımlardır. Örnek: Zeytinyağı-su, salata, çorba, ayran, süt, kum-su, sis.'
          ]
        },
        {
          heading: 'Çözünme Hızına Etki Eden Faktörler',
          paragraphs: [
            'Birim zamanda çözünen madde miktarına çözünme hızı denir. Bir maddenin bir çözücü içinde daha hızlı çözünmesini sağlayan üç temel faktör vardır:'
          ],
          keyPoints: [
            '1. Sıcaklık Artışı: Sıcaklık arttıkça taneciklerin kinetik enerjisi ve hareket hızı artar; çözünme hızı yükselir (Sıcak çaydaki şeker, soğuk çaydakinden hızlı çözünür).',
            '2. Karıştırma / Çalkalama: Çözeltiyi kaşıkla karıştırmak çözücü ile çözünenin temasını hızlandırır ve çözünme süresini kısaltır.',
            '3. Temas Yüzeyinin Artırılması: Katı maddenin tanecik boyutu küçültüldüğünde çözücüyle temas eden yüzey alanı artar; çözünme hızlanır (Pudra şekeri > Toz şeker > Küp şeker).'
          ],
          table: {
            headers: ['Faktör', 'Değişim', 'Çözünme Hızına Etkisi', 'Örnek Durum'],
            rows: [
              ['Sıcaklık', 'Yükselirse', 'Artar (Süre kısalır)', '40°C sudaki şeker, 20°C sudaki şekerden hızlı çözünür'],
              ['Mekanik Etki', 'Karıştırılırsa', 'Artar (Süre kısalır)', 'Karıştırılan küp şeker, bekletilen şekerden hızlı çözünür'],
              ['Temas Yüzeyi', 'Tanecik küçülürse', 'Artar (Süre kısalır)', 'Toz şeker, küp şekerden daha hızlı çözünür']
            ]
          },
          examNote: 'Deney Değişkenleri: Bir deneyde bizim değiştirdiğimiz faktör BAĞIMSIZ DEĞİŞKEN, buna bağlı olarak değişen sonuç BAĞIMLI DEĞİŞKEN (çözünme hızı/süresi), sabit tutulan şartlar ise KONTROL EDİLEN DEĞİŞKENDİR.'
        }
      ],
      trueFalseQuestions: [
        {
          id: 6,
          text: 'Tuzun suda çözünmesiyle oluşan tuzlu su elektrik akımını iletirken, şekerli su çözeltisi elektrik akımını iletmez.',
          isCorrect: true,
          explanation: 'Doğrudur. Tuz suda iyonlarına (Na+ ve Cl-) ayrıştığı için elektrik akımını iletir; şeker ise moleküler çözündüğü için iletmez.'
        },
        {
          id: 7,
          text: 'Küp şekerin toz şekere kıyasla daha hızlı çözünmesinin sebebi temas yüzeyinin daha geniş olmasıdır.',
          isCorrect: false,
          explanation: 'Yanlıştır. Toz şekerin temas yüzeyi küp şekere göre daha fazladır, dolayısıyla toz şeker daha hızlı çözünür.'
        }
      ],
      lgsQuestions: [
        {
          id: 3,
          questionPrompt: 'Bir araştırmacı sıcaklığın çözünme hızına etkisini incelemek istemektedir.\n\nBuna göre araştırmacının kullanacağı iki düzenekte;\nI. Su miktarı ve kap şekli\nII. Şekerin kütlesi ve cinsi (toz şeker)\nIII. Suyun sıcaklığı\n\nniceliklerinden hangileri KONTROL EDİLEN (sabit tutulan), hangisi BAĞIMSIZ DEĞİŞKEN olmalıdır?',
          options: [
            { key: 'A', text: 'Sabit: I ve II ; Bağımsız: III' },
            { key: 'B', text: 'Sabit: III ; Bağımsız: I ve II' },
            { key: 'C', text: 'Sabit: II ; Bağımsız: I ve III' },
            { key: 'D', text: 'Sabit: I ; Bağımsız: II ve III' }
          ],
          correctAnswer: 'A',
          explanation: 'Sıcaklığın etkisi araştırıldığı için bağımsız değişken sadece sıcaklık (III) olmalıdır. Diğer tüm şartlar (su miktarı, şeker kütlesi ve cinsi) sabit (kontrol edilen değişken) tutulmalıdır.'
        }
      ]
    },
    {
      id: 'g7-u5-sub4',
      title: '4. Karışımların Ayrılması ve Kimya Öncüleri',
      shortTitle: 'Karışımları Ayırma Yöntemleri',
      badge: '4. Bölüm',
      pageRange: '89-96',
      concepts: ['Buharlaştırma', 'Ayırma Hunisi', 'Damıtma (Ayrımsal Damıtma)', 'Yoğunluk Farkı', 'Kaynama Noktası Farkı', 'Câbir Bin Hayyân', 'Lavoisier', 'Boyle'],
      simulationId: 'microscope',
      summarySections: [
        {
          heading: 'Karışımları Ayırma Yöntemleri',
          paragraphs: [
            'Karışımlar fiziksel yöntemlerle kendilerini oluşturan saf maddelere ayrıştırılabilir. Kullanılacak yöntem maddelerin fiziksel hâllerine ve ayırt edici özellik farklarına dayanır:'
          ],
          keyPoints: [
            'Buharlaştırma (Kaynama/Uçurma): Katı-sıvı homojen karışımlarda sıvıyı buharlaştırıp geride katı maddeyi bırakma yöntemidir (Örnek: Deniz veya tuz gölünden tuz elde edilmesi, salça ve reçel yapımı).',
            'Ayırma Hunisi ile Ayırma: Birbiri içinde çözünmeyen heterojen sıvı-sıvı karışımlarda yoğunluk farkından yararlanılarak yapılır. Yoğunluğu büyük olan sıvı altta, küçük olan üstte kalır. Musluk açılarak alttaki sıvı başka kaba alınır (Örnek: Zeytinyağı-su karışımı).',
            'Damıtma (Ayrımsal Damıtma): Birbiri içinde homojen çözünen sıvı-sıvı çözeltileri kaynama noktası farkından yararlanarak ayırma yöntemidir. Kaynama noktası düşük olan sıvı önce buharlaşır, soğutucudan geçerek yoğuşur ve ayrı kapta saf olarak toplanır (Örnek: Alkol-su karışımı, ham petrolün benzin ve mazota ayrılması).'
          ],
          table: {
            headers: ['Ayırma Yöntemi', 'Yararlanılan Fiziksel Özellik', 'Uygulandığı Karışım Türü', 'Örnek'],
            rows: [
              ['Buharlaştırma', 'Kaynama noktası / Buharlaşma', 'Katı - Sıvı Homojen', 'Tuzlu su, şekerli su'],
              ['Ayırma Hunisi', 'Yoğunluk farkı', 'Sıvı - Sıvı Heterojen', 'Zeytinyağı - su'],
              ['Ayrımsal Damıtma', 'Kaynama noktası farkı', 'Sıvı - Sıvı Homojen', 'Etil alkol - su, petrol'],
              ['Süzme', 'Tanecik boyutu farkı', 'Katı - Sıvı Heterojen', 'Kum - su, tebeşir tozu - su'],
              ['Mıknatısla Ayırma', 'Manyetik özellik farkı', 'Katı - Katı Karışım', 'Demir tozu - kükürt']
            ]
          }
        },
        {
          heading: 'Kimya Bilimine İz Bırakan Bilim İnsanları',
          paragraphs: [
            'Tarih boyunca kimya alanında devrim niteliğinde keşifler yapan önemli şahsiyetler:'
          ],
          keyPoints: [
            'Câbir Bin Hayyân (721-815): Modern kimyanın kurucularındandır. Damıtma imbiğini, deney tüplerini ve fırınları icat etmiştir. Nitrik asit ile hidroklorik asidi karıştırarak altını çözen "Kral Suyu"nu bulmuştur.',
            'Ebû Bekir er-Râzî (865-925): Damıtma, kristalleştirme, çözündürme yöntemlerini geliştirmiş ve saf metalleri elde etmeye çalışmıştır.',
            'Antoine Lavoisier (1743-1794): Kütlenin korunumu kanununu bulmuş, elementlerin birleşerek bileşikleri oluşturduğunu kanıtlamıştır.',
            'Robert Boyle (1627-1691): Kendinden daha basit maddelere ayrıştırılamayan saf maddeleri element olarak tanımlamıştır.',
            'Oktay Sinanoğlu (1935-2015): Türk kuramsal kimyacı; "Atom ve moleküllerde çoklu elektron kuramı" ile kuantum kimyasına çığır açıcı katkılar yapmıştır.'
          ]
        }
      ],
      trueFalseQuestions: [
        {
          id: 8,
          text: 'Zeytinyağı ve su karışımı kaynama noktaları farkından yararlanılarak damıtma yöntemi ile ayrılır.',
          isCorrect: false,
          explanation: 'Yanlıştır. Zeytinyağı ve su birbiriyle karışmayan heterojen sıvılar olduğundan yoğunluk farkından yararlanılarak ayırma hunisi ile ayrılır.'
        },
        {
          id: 9,
          text: 'Câbir bin Hayyân damıtma imbiğini icat ederek kimya laboratuvarlarının temellerini atmıştır.',
          isCorrect: true,
          explanation: 'Doğrudur. Câbir bin Hayyân damıtma imbiği ve deney tüplerini icat eden modern kimyanın öncüsüdür.'
        }
      ],
      lgsQuestions: [
        {
          id: 4,
          questionPrompt: 'Bir öğrenci elindeki K-M karışımını buharlaştırma yöntemiyle, L-M karışımını ise ayırma hunisi kullanarak ayırabilmektedir. Ayırma hunisinin musluğu açıldığında ilk ayrılan sıvı M sıvısıdır.\n\nBuna göre bu maddeler ve karışımlarla ilgili hangisi YANLIŞTIR?',
          options: [
            { key: 'A', text: 'K-M karışımı katı-sıvı homojen bir karışımdır.' },
            { key: 'B', text: 'M sıvısının yoğunluğu L sıvısının yoğunluğundan büyüktür.' },
            { key: 'C', text: 'L ve M sıvıları birbiri içinde çözünmeyen heterojen karışımdır.' },
            { key: 'D', text: 'K maddesi oda sıcaklığında sıvı bir maddedir.' }
          ],
          correctAnswer: 'D',
          explanation: 'Buharlaştırma katı-sıvı çözeltilerde (tuzlu su gibi) kullanılır; sıvı buharlaşır, katı dipte kalır. Dolayısıyla K katı bir maddedir, sıvı olamaz.'
        }
      ]
    }
  ],
  unitEndQuestions: [
    {
      id: 1,
      pageNumber: '97',
      type: 'multiple_choice',
      title: 'Atomun Kimliği',
      questionPrompt: 'Atomun kimliğini belirleyen ve çekirdekte bulunan pozitif yüklü temel parçacık hangisidir?',
      options: [
        { key: 'A', text: 'Proton' },
        { key: 'B', text: 'Nötron' },
        { key: 'C', text: 'Elektron' },
        { key: 'D', text: 'Molekül' }
      ],
      correctAnswer: 'A',
      detailedExplanation: 'Atomun kimliğini ve atom numarasını çekirdekte bulunan proton sayısı belirler.'
    },
    {
      id: 2,
      pageNumber: '97',
      type: 'multiple_choice',
      title: 'Bileşik Formülü',
      questionPrompt: 'Aşağıda formülü verilen bileşiklerden hangisinin yapısında üç farklı çeşit element atomu bulunur?',
      options: [
        { key: 'A', text: 'NaCl' },
        { key: 'B', text: 'H2O' },
        { key: 'C', text: 'H2SO4' },
        { key: 'D', text: 'CO2' }
      ],
      correctAnswer: 'C',
      detailedExplanation: 'H2SO4 (Sülfürik asit) yapısında Hidrojen (H), Kükürt (S) ve Oksijen (O) olmak üzere 3 farklı element atomu barındırır.'
    },
    {
      id: 3,
      pageNumber: '98',
      type: 'multiple_choice',
      title: 'Ayırma Yöntemleri',
      questionPrompt: 'Alkol ve su karışımını bileşenlerine ayırmak için hangi fiziksel özellik farkından yararlanılır?',
      options: [
        { key: 'A', text: 'Yoğunluk farkı' },
        { key: 'B', text: 'Kaynama noktası farkı' },
        { key: 'C', text: 'Çözünürlük farkı' },
        { key: 'D', text: 'Tanecik boyutu farkı' }
      ],
      correctAnswer: 'B',
      detailedExplanation: 'Alkol-su gibi sıvı-sıvı homojen karışımlar ayrımsal damıtma ile kaynama noktaları farkından yararlanılarak ayrılır.'
    }
  ],
  unitEnd20Questions: [
    {
      id: 1,
      questionPrompt: 'Periyodik tabloda 3. periyot 7A grubunda yer alan nötr bir elementin atom numarası kaçtır?',
      options: [
        { key: 'A', text: '7' },
        { key: 'B', text: '15' },
        { key: 'C', text: '17' },
        { key: 'D', text: '18' }
      ],
      correctAnswer: 'C',
      explanation: '3. periyot = 3 katman. Katman elektron dağılımı: 2 - 8 - 7\'dir. Toplam proton sayısı = 2 + 8 + 7 = 17 (Klor - Cl).'
    },
    {
      id: 2,
      questionPrompt: 'Aşağıdakilerden hangisi bir element sembolü değil, bileşik formülüdür?',
      options: [
        { key: 'A', text: 'Co' },
        { key: 'B', text: 'CO' },
        { key: 'C', text: 'Ca' },
        { key: 'D', text: 'Cu' }
      ],
      correctAnswer: 'B',
      explanation: 'CO (Karbonmonoksit) iki büyük harfle yazılan bir bileşik formülüdür. Co (Kobalt), Ca (Kalsiyum) ve Cu (Bakır) ise element sembolleridir.'
    },
    {
      id: 3,
      questionPrompt: 'Democritus’un ortaya attığı "atomos" kelimesinin anlamı nedir?',
      options: [
        { key: 'A', text: 'Bölünemez' },
        { key: 'B', text: 'Görünmez' },
        { key: 'C', text: 'Küçük küre' },
        { key: 'D', text: 'Enerji paketi' }
      ],
      correctAnswer: 'A',
      explanation: 'Democritus Yunancada bölünemeyen anlamına gelen atomos kavramını kullanmıştır.'
    }
  ]
};

import { Unit } from '../../types/curriculum';

export const grade7Unit2Data: Unit = {
  id: 'g7-unit-2',
  unitNumber: 2,
  bookNumber: 1,
  grade: 7,
  subject: 'Fen Bilimleri',
  title: 'Kuvvet ve Enerjiyi Keşfedelim',
  unitEndPageRange: 's. 81-85',
  colorTheme: {
    primary: 'from-amber-500 to-orange-600',
    border: 'border-amber-500/40',
    bg: 'bg-amber-950/40',
    accent: 'text-amber-400',
    text: 'text-amber-200'
  },
  subTopics: [
    {
      id: 'g7-u2-sub1',
      title: '1. Kuvvet, İş ve Enerji İlişkisi',
      shortTitle: 'Kuvvet, İş ve Enerji',
      badge: '1. Bölüm',
      pageRange: '59-70',
      concepts: ['Fiziksel Anlamda İş', 'Joule (J)', 'Enerji', 'Kinetik Enerji', 'Çekim Potansiyel Enerjisi', 'Esneklik Potansiyel Enerjisi'],
      simulationId: 'dynamometer',
      summarySections: [
        {
          heading: 'Fiziksel Anlamda İş ve Gerekli Koşullar',
          paragraphs: [
            'Günlük hayatta "ders çalışmak, bilgisayar ekranına bakmak, bekçilik yapmak" gibi durumlar iş olarak adlandırılsa da fen bilimlerinde "fiziksel anlamda iş" kavramının iki katı bilimsel kuralı vardır:',
            '1. Koşul: Cisme net bir kuvvet uygulanmalıdır.',
            '2. Koşul: Cisim, uygulanan kuvvet doğrultusunda yer değiştirmelidir (yol almalıdır).'
          ],
          keyPoints: [
            'İş = Kuvvet × Yol (W = F × Δx). Kuvvet birimi Newton (N), yol birimi metre (m) alındığında yapılan işin birimi Joule (J) olur (1 J = 1 N · m).',
            'Fiziksel Anlamda İş Yapılan Durumlar: Masayı iterek hareket ettirmek, yerdeki çantayı yukarı kaldırmak, merdivenlerden yukarı koli taşımak, topa vurarak hareket ettirmek.',
            'Fiziksel Anlamda İş Yapılmayan Durumlar: Duvarı var gücüyle itip hareket ettirememek (yol sıfır), halteri başının üstünde sabit tutmak (yol sıfır), sırtındaki çantayı sallamadan yatay yolda yürüyerek taşımak (uygulanan kuvvet yukarı düşey, hareket yönü ise yataydır; yani diktir! Doğrultu aynı değildir!).'
          ],
          table: {
            headers: ['Örnek Olay', 'Kuvvet Yönü', 'Hareket Yönü', 'Fiziksel İş Var mı?'],
            rows: [
              ['Yerdeki çantayı masaya kaldırmak', 'Yukarı (Düşey)', 'Yukarı (Düşey)', 'EVET (Kuvvet ve yol aynı doğrultuda)'],
              ['Çantayı omuzda sallamadan düz yolda yürümek', 'Yukarı (Düşey)', 'İleri (Yatay)', 'HAYIR (Kuvvet harekete dik)'],
              ['Sabit duran duvarı tüm gücüyle itmek', 'İleri (Yatay)', 'Hareketsiz (0 m)', 'HAYIR (Yer değiştirme yok)'],
              ['Market arabasını iterek reyonlar arasında sürmek', 'İleri (Yatay)', 'İleri (Yatay)', 'EVET (Kuvvet yönünde yol alır)'],
              ['Halteri havada hareketsiz tutmak', 'Yukarı (Düşey)', 'Hareketsiz (0 m)', 'HAYIR (Yer değiştirme yok)']
            ]
          }
        },
        {
          heading: 'Enerji Nedir? Kinetik (Hareket) Enerjisi',
          paragraphs: [
            'Enerji; iş yapabilme yeteneğidir. İş ile enerjinin birimi aynıdır ve Joule (J) olarak ifade edilir. Bir cisim ne kadar çok iş yapabiliyorsa o kadar çok enerjiye sahiptir.',
            'Cisimlerin hareketinden dolayı sahip olduğu enerjiye kinetik enerji (hareket enerjisi) denir. Koşan çocuk, uçan kuş, yuvarlanan top ve yolda giden otomobil kinetik enerjiye sahiptir.'
          ],
          keyPoints: [
            'Kinetik Enerjiyi Etkileyen Faktörler:',
            '1. Cismin Kütlesi: Süratleri eşit olan iki hareketliden kütlesi büyük olanın kinetik enerjisi daha fazladır (Örn: Aynı süratle giden kamyonun kinetik enerjisi otomobilden büyüktür; aynı hızla atılan basketbol topu plastik toptan daha çok kule devirir).',
            '2. Cismin Sürati (Hızı): Kütleleri eşit olan iki hareketliden sürati fazla olanın kinetik enerjisi daha fazladır (Örn: Lunaparkta süratli giden araç fren yapınca durma mesafesi daha uzun olur).'
          ]
        },
        {
          heading: 'Potansiyel Enerji: Çekim ve Esneklik Potansiyeli',
          paragraphs: [
            'Cisimlerin konumlarından veya esnekliklerinden dolayı depoladıkları saklı enerjiye potansiyel enerji denir. İki çeşittir:',
            '1. Çekim Potansiyel Enerjisi: Cisimlerin bulundukları yükseklikten dolayı sahip oldukları enerjidir. Ağaç dalındaki elma, barajda biriken su ve raftaki kitap çekim potansiyel enerjisine sahiptir.',
            'Çekim potansiyel enerjisi; cismin AĞIRLIĞINA (Kütlesine) ve YÜKSEKLİĞİNE bağlıdır. Ağırlığı ve yüksekliği artan cismin çekim potansiyel enerjisi artar.',
            '2. Esneklik Potansiyel Enerjisi: Kuvvet uygulandığında şekli değişen ve kuvvet kalktığında eski haline dönen esnek cisimlerin depoladığı enerjidir (Gerilmiş paket lastiği, sıkıştırılmış sarmal yay, gerilmiş yay oku, trambolin).'
          ],
          table: {
            headers: ['Enerji Türü', 'Neye Bağlıdır?', 'Artması İçin Ne Yapılmalı?', 'Örnek'],
            rows: [
              ['Kinetik Enerji', 'Kütle ve Sürat', 'Kütleyi ve sürati artırmak', 'Hızlanan tren, koşan atlet'],
              ['Çekim Potansiyel', 'Ağırlık (Kütle) ve Yükseklik', 'Daha yukarı kaldırmak / ağır cisim seçmek', 'Yüksek raftaki koli, dağdaki kaya'],
              ['Esneklik Potansiyel', 'Yayın cinsi ve sıkışma/gerilme miktarı', 'Yayı daha çok sıkıştırmak veya germek', 'Ok fırlatmaya hazır gerilmiş yay']
            ]
          },
          examNote: 'LGS Hatırlatması: Eşit yükseklikteki cisimlerden kütlesi büyük olanın çekim potansiyel enerjisi daha fazladır. Özdeş cisimlerden ise yerden yüksekliği fazla olanın çekim potansiyeli büyüktür.'
        }
      ],
      glossary: [
        { term: 'Fiziksel Anlamda İş', definition: 'Bir cisme uygulanan net kuvvet doğrultusunda cismin yer değiştirmesi sonucu aktarılan enerji.' },
        { term: 'Joule (J)', definition: 'Fen bilimlerinde iş ve enerjinin uluslararası kabul gören standart birimi.' },
        { term: 'Enerji', definition: 'Bir cismin ya da sistemin fiziksel anlamda iş yapabilme kabiliyeti ve yeteneği.' },
        { term: 'Kinetik Enerji', definition: 'Hareket halindeki bir cismin kütlesi ve süratinden dolayı sahip olduğu hareket enerjisi.' },
        { term: 'Potansiyel Enerji', definition: 'Cisimlerin konumları (yükseklikleri) veya esneklikleri sebebiyle bünyelerinde depoladıkları gizil enerji.' },
        { term: 'Çekim Potansiyel Enerjisi', definition: 'Yer çekimi kuvvetine karşı yapılan iş sonucu cismin ağırlığı ve yüksekliğine bağlı olarak depolanan enerji.' },
        { term: 'Esneklik Potansiyel Enerjisi', definition: 'Sarmal yay, lastik gibi esnek cisimlerin sıkıştırılması veya gerilmesiyle depolanan enerji.' }
      ],
      trueFalseQuestions: [
        { id: 1, text: 'Bir cismin fiziksel anlamda iş yapabilmesi için uygulanan kuvvet ile hareket yönünün aynı doğrultuda olması şarttır.', isCorrect: true, explanation: 'Doğrudur. Doğrultu uyuşmazsa (örneğin kuvvet düşey, hareket yatay ise) iş yapılmaz.' },
        { id: 2, text: 'Sırt çantasını omuzlarında sabit tutarak yatay yolda yürüyen bir öğrenci fiziksel anlamda iş yapmış sayılır.', isCorrect: false, explanation: 'Yanlıştır. Kuvvet yukarı doğrudur ama hareket yataydır (birbirine diktir), fiziksel iş yapılmaz.' },
        { id: 3, text: 'İş ve enerjinin birimi aynı olup ikisi de Joule (J) olarak adlandırılır.', isCorrect: true, explanation: 'Doğrudur. İş yapılan enerji miktarını belirler, ikisinin birimi de Joule’dür.' },
        { id: 4, text: 'Kinetik enerji cismin yalnızca kütlesine bağlıdır, süratin kinetik enerjiye hiçbir etkisi yoktur.', isCorrect: false, explanation: 'Yanlıştır. Kinetik enerji hem kütleye hem de sürate bağlıdır; sürat arttıkça kinetik enerji katlanarak artar.' },
        { id: 5, text: 'Yerden belirli bir yükseklikte duran bir cismin çekim potansiyel enerjisi kütlesi ve yüksekliği ile doğru orantılıdır.', isCorrect: true, explanation: 'Doğrudur. Ağırlık ve yükseklik arttıkça çekim potansiyeli artar.' },
        { id: 6, text: 'Sarmal yayı daha fazla sıkıştırdığımızda depolanan esneklik potansiyel enerjisi azalır.', isCorrect: false, explanation: 'Yanlıştır. Yay ne kadar çok sıkıştırılır veya gerilirse depolanan esneklik potansiyel enerjisi o kadar artar.' },
        { id: 7, text: 'Duvarı var gücüyle iten ancak kıpırdatamayan bir sporcu çok yorulmasına rağmen fiziksel anlamda iş yapmamıştır.', isCorrect: true, explanation: 'Doğrudur. Yol (yer değiştirme) sıfır olduğu için yapılan iş sıfırdır.' },
        { id: 8, text: 'Aynı süratle giden bir kamyonun kinetik enerjisi, aynı süratteki bir bisikletten çok daha fazladır.', isCorrect: true, explanation: 'Doğrudur. Kamyonun kütlesi bisikletten katbekat büyük olduğu için kinetik enerjisi de çok büyüktür.' },
        { id: 9, text: 'Yerden yukarıya doğru kaldırılan bir kolinin hem çekim potansiyel enerjisi artar hem de yukarı kaldırılırken fiziksel iş yapılır.', isCorrect: true, explanation: 'Doğrudur. Kuvvet yukarı, hareket yukarıdır; iş yapılır ve yükseklik arttığı için potansiyel enerji kazanır.' },
        { id: 10, text: 'Halteri kaldırıp havada 10 saniye sabit bekleten halterci beklediği süre boyunca büyük miktarda fiziksel iş üretir.', isCorrect: false, explanation: 'Yanlıştır. Bekleme esnasında halter hareket etmediği (yer değiştirmediği) için yapılan iş sıfırdır.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Fiziksel İşin Şartları ve Günlük Yaşam',
          cognitiveLevel: 'Analiz ve Değerlendirme',
          scenario: 'Ders kitabının 82. sayfasında yer alan Sibel Hanım’ın gününden kesitler incelenmiştir:\n1. Çantasını yerden kaldırıp sırtına aldı.\n2. Evin kapısını kilitledi.\n3. Ofise doğru çantasını sallamadan yatay düz yolda yürüdü.\n4. İkinci kattaki sunum odasına merdivenlerden yukarı çıktı.\n5. Çantasını masaya bıraktı.',
          questionPrompt: 'Buna göre Sibel Hanım numaralandırılmış durumların hangilerinde çantaya uyguladığı kuvvetle fiziksel anlamda iş yapmıştır?',
          options: [
            { key: 'A', text: 'Yalnız 3' },
            { key: 'B', text: '1 ve 4' },
            { key: 'C', text: '2 ve 3' },
            { key: 'D', text: '3 ve 5' }
          ],
          correctAnswer: 'B',
          explanation: '1’de çanta yukarı kaldırılırken düşey kuvvet yönünde yol alır (iş yapılır). 4’te merdivenlerden yukarı çıkarken yer çekimine karşı düşeyde yol alınır (iş yapılır). 3’te ise yatay yürüyüşte kuvvet düşey kaldırma olduğu için iş yapılmaz.'
        },
        {
          id: 2,
          theme: 'İş Formülü ve Grafik Okuma',
          cognitiveLevel: 'Grafik Yorumlama',
          scenario: 'Kitabın 63. sayfasındaki Kontrol Noktası’nda Ahmet kütüphanedeki kitap kolilerini taşımaktadır. K, L, M ve N kitaplarına uygulanan kuvvetler ve aldırılan yollar şöyledir:\nK: Kuvvet = 100 N, Yol = 1 m\nL: Kuvvet = 100 N, Yol = 2 m\nM: Kuvvet = 100 N, Yol = 3 m\nN: Kuvvet = 100 N, Yol = 1 m',
          questionPrompt: 'Buna göre Ahmet’in kitaplara uyguladığı fiziksel anlamda yapılan işlerin büyüklük sıralaması nasıldır?',
          options: [
            { key: 'A', text: 'M > L > K = N' },
            { key: 'B', text: 'K = L = M = N' },
            { key: 'C', text: 'N > M > L > K' },
            { key: 'D', text: 'K > L > M > N' }
          ],
          correctAnswer: 'A',
          explanation: 'İş = Kuvvet × Yol. M: 100×3 = 300 J; L: 100×2 = 200 J; K ve N: 100×1 = 100 J. Sıralama M > L > K = N.'
        },
        {
          id: 3,
          theme: 'Kinetik Enerji ve Kütle İlişkisi',
          cognitiveLevel: 'Deney ve Değişken Analizi',
          scenario: 'Kitabın 67. sayfasındaki "Yedikule" oyununda öğrenciler yassı taşları üst üste dizmiştir. Hacimleri ve atılma hızları eşit olan basketbol topu ve plastik top taşlara fırlatılmıştır. Basketbol topu 6 taş devirirken, plastik top yalnızca 2 taş devirebilmiştir.',
          questionPrompt: 'Basketbol topunun plastik topa göre daha fazla taş devirmesinin temel sebebi hangi bilimsel çıkarımla açıklanır?',
          options: [
            { key: 'A', text: 'Plastik topun kütlesinin daha büyük olması' },
            { key: 'B', text: 'Süratleri eşit hareketlilerden kütlesi büyük olan basketbol topunun daha fazla kinetik enerjiye sahip olması' },
            { key: 'C', text: 'Basketbol topunun çekim potansiyel enerjisi depolaması' },
            { key: 'D', text: 'Plastik topun sürtünme kuvvetini sıfırlaması' }
          ],
          correctAnswer: 'B',
          explanation: 'Kinetik enerji kütle ile doğru orantılıdır. Hızları aynı iken kütlesi fazla olan basketbol topu daha çok kinetik enerji taşır ve daha çok taş devirir.'
        },
        {
          id: 4,
          theme: 'Kinetik Enerji ve Sürat İlişkisi',
          cognitiveLevel: 'Günlük Yaşam Bağı',
          scenario: 'Kütleleri eşit olan iki yarış arabası düz pistte yarışmaktadır. 1. arabanın sürati 120 km/h, 2. arabanın sürati ise 60 km/h’dir. Her iki araç aynı anda tam fren yaptığında 1. araba durana kadar çok daha uzun bir fren izi bırakmıştır.',
          questionPrompt: '1. arabanın durma mesafesinin daha uzun olmasının nedeni nedir?',
          options: [
            { key: 'A', text: 'Kütlesi eşit araçlardan sürati fazla olanın kinetik enerjisinin çok daha büyük olması' },
            { key: 'B', text: '1. arabanın potansiyel enerjisinin sıfırlanması' },
            { key: 'C', text: '2. arabanın motorunun daha ağır olması' },
            { key: 'D', text: '1. arabanın yer çekiminden kurtulması' }
          ],
          correctAnswer: 'A',
          explanation: 'Sürati fazla olan aracın kinetik enerjisi çok daha yüksektir; bu enerjiyi sürtünmeyle ısıya çevirip durdurmak için daha uzun mesafe gerekir.'
        },
        {
          id: 5,
          theme: 'Çekim Potansiyel Enerjisi Değişkenleri',
          cognitiveLevel: 'Hipotez Test Etme',
          scenario: 'Kitabın 84. sayfasındaki kum havuzu deneyinde eşit hacimli K (300 N), L (300 N) ve M (200 N) metal bilyeleri bulunmaktadır. Bir araştırmacı "Çekim potansiyel enerjisi cismin ağırlığına bağlıdır" hipotezini test etmek istemektedir.',
          questionPrompt: 'Araştırmacı hipotezini doğrulamak için hangi iki bilyeyi hangi yüksekliklerden kum havuzuna bırakmalıdır?',
          options: [
            { key: 'A', text: 'K (300 N) ve L (300 N) bilyelerini farklı yüksekliklerden' },
            { key: 'B', text: 'L (300 N) ve M (200 N) bilyelerini AYNI yükseklikten serbest bırakıp kumda açtıkları iz derinliklerini karşılaştırmalıdır.' },
            { key: 'C', text: 'M bilyesini önce fırlatıp sonra tutmalıdır.' },
            { key: 'D', text: 'K bilyesini kumun içine gömmelidir.' }
          ],
          correctAnswer: 'B',
          explanation: 'Ağırlığın etkisini ölçmek için (bağımsız değişken ağırlık) yükseklik sabit tutulmalı (kontrol değişkeni), ağırlıkları farklı L ve M bilyeleri aynı yükseklikten bırakılmalıdır.'
        },
        {
          id: 6,
          theme: 'Esneklik Potansiyel Enerjisi',
          cognitiveLevel: 'Tasarım ve Değerlendirme',
          scenario: 'Özdeş iki paket lastiğinden 1. lastik 5 cm gerilip önüne kağıt parçası konuyor, 2. lastik ise 15 cm gerilip önüne özdeş kağıt parçası konup aynı anda serbest bırakılıyor.',
          questionPrompt: '2. lastiğin fırlattığı kağıdın daha uzağa gitmesinin sebebi aşağıdakilerden hangisidir?',
          options: [
            { key: 'A', text: '2. lastiğin daha ağır olması' },
            { key: 'B', text: 'Esnek cisimlerde gerilme/sıkışma miktarı arttıkça depolanan esneklik potansiyel enerjisinin artması ve kağıda daha büyük kinetik enerji aktarması' },
            { key: 'C', text: '1. lastiğin kütle çekiminin olmaması' },
            { key: 'D', text: '2. lastiğin sürtünme kuvvetini artırması' }
          ],
          correctAnswer: 'B',
          explanation: 'Esnek cisim daha çok gerildiğinde daha fazla esneklik potansiyel enerjisi depolar; bırakılınca bu enerji kinetik enerjiye dönüşür.'
        },
        {
          id: 7,
          theme: 'Market Rafına Kutu Taşıma (İş Kıyaslaması)',
          cognitiveLevel: 'Orantısal Muhakeme',
          scenario: 'Kitabın 82. sayfasındaki 4. soruda: Eser, özdeş süt kutularını 50 cm yükseklikteki rafa; İnci ise aynı süt kutularından bir tanesini 1 metre (100 cm) yükseklikteki rafa koyuyor.',
          questionPrompt: 'İnci ve Eser’in birer kutu yerleştirirken yaptıkları fiziksel işler hakkında hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Eser daha fazla iş yapmıştır.' },
            { key: 'B', text: 'İnci’nin 1 kutuyu 1 metreye çıkarırken yaptığı iş, Eser’in 1 kutuyu 50 cm’ye çıkarırken yaptığı işin 2 katıdır.' },
            { key: 'C', text: 'Her ikisinin yaptığı iş birbirine eşittir.' },
            { key: 'D', text: 'İnci hiç iş yapmamıştır.' }
          ],
          correctAnswer: 'B',
          explanation: 'Kuvvetler eşit (özdeş kutuların ağırlığı F). İnci yolu 1 m, Eser 0.5 m aldırıyor. W_İnci = F × 1 = F, W_Eser = F × 0.5 = 0.5F. İnci’nin işi Eser’in iki katıdır.'
        },
        {
          id: 8,
          theme: 'Koşu Yarışı ve Kinetik Enerji',
          cognitiveLevel: 'Çıkarım',
          scenario: 'Kitabın 84. sayfasındaki 9. soruda: Eşit kütleli öğrencilerden Anıl koşu yarışını 48 saniyede, Mert 52 saniyede, Erkan ise 45 saniyede tamamlamıştır.',
          questionPrompt: 'Yarış esnasındaki ortalama kinetik enerjileri büyükten küçüğe nasıl sıralanır?',
          options: [
            { key: 'A', text: 'Erkan > Anıl > Mert' },
            { key: 'B', text: 'Mert > Anıl > Erkan' },
            { key: 'C', text: 'Erkan = Anıl = Mert' },
            { key: 'D', text: 'Mert > Erkan > Anıl' }
          ],
          correctAnswer: 'A',
          explanation: 'Pisti en kısa sürede bitiren Erkan en süratlidir (v_Erkan > v_Anıl > v_Mert). Kütleleri eşit olduğuna göre sürati en büyük olan Erkan’ın kinetik enerjisi en fazladır.'
        },
        {
          id: 9,
          theme: 'Fiziksel Anlamda İşin Sıfır Olduğu Durum',
          cognitiveLevel: 'Mantık Muhakeme',
          scenario: 'Bir kuvvetin fiziksel anlamda iş yapabilmesi için cisme kendi doğrultusunda yol aldırması şarttır.',
          questionPrompt: 'Aşağıdaki durumlardan hangisinde cisme uygulanan kuvvet sıfırdan farklı olmasına rağmen fiziksel anlamda yapılan iş kesinlikle SIFIRDIR?',
          options: [
            { key: 'A', text: 'Yerdeki kutuyu kucağına alan sporcu' },
            { key: 'B', text: 'Ağır bir dolabı saatlerce ittiği halde santimetre bile kıpırdatamayan kişi' },
            { key: 'C', text: 'Balkondan aşağı düşen saksı' },
            { key: 'D', text: 'Frenine basılan bisiklet' }
          ],
          correctAnswer: 'B',
          explanation: 'İş = Kuvvet × Yol. Dolap hareket etmediği için yol (Δx) = 0 m olur, yapılan iş sıfırdır.'
        },
        {
          id: 10,
          theme: 'Kinetik Enerji ve Kütle - Hız Bağıntısı',
          cognitiveLevel: 'Analiz',
          scenario: 'Özdeş K ve L araçlarından K aracı 50 km/h, L aracı 100 km/h hızla gitmektedir. M aracı ise bu araçların 2 katı kütleye sahip olup 50 km/h hızla gitmektedir.',
          questionPrompt: 'Bu araçların kinetik enerjileri arasındaki ilişki hakkında hangisi söylenebilir?',
          options: [
            { key: 'A', text: 'K aracının kinetik enerjisi en büyüktür.' },
            { key: 'B', text: 'L ve M araçlarının kinetik enerjileri K aracından büyüktür.' },
            { key: 'C', text: 'Tüm araçların kinetik enerjisi eşittir.' },
            { key: 'D', text: 'M aracının kinetik enerjisi sıfırdır.' }
          ],
          correctAnswer: 'B',
          explanation: 'L aracının sürati, M aracının kütlesi K’dan büyük olduğu için her ikisinin de kinetik enerjisi K’dan büyüktür.'
        },
        {
          id: 11,
          theme: 'Çekim Potansiyel Enerjisi Örnekleri',
          cognitiveLevel: 'Kavrama',
          scenario: 'Bir hidroelektrik santralinde baraj gölünde tutulan su kapaklar açıldığında borulardan aşağı hızla akarak türbinleri döndürür ve elektrik üretilir.',
          questionPrompt: 'Baraj gölünde yüksekte biriken su hangi enerji türüne sahiptir?',
          options: [
            { key: 'A', text: 'Esneklik potansiyel enerjisi' },
            { key: 'B', text: 'Çekim potansiyel enerjisi' },
            { key: 'C', text: 'Isı enerjisi' },
            { key: 'D', text: 'Nükleer enerji' }
          ],
          correctAnswer: 'B',
          explanation: 'Barajda toplanan yüksekteki durgun su, konumundan ve yer çekiminden dolayı çekim potansiyel enerjisine sahiptir.'
        },
        {
          id: 12,
          theme: 'Kuvvet ve Yol Doğrultusu',
          cognitiveLevel: 'Bilimsel İlke',
          scenario: 'Fiziksel anlamda iş yapılabilmesi için kuvvet ile hareket doğrultusunun çakışması gerekir.',
          questionPrompt: 'Aşağıdakilerden hangisinde kuvvet ile hareket doğrultusu BİRBİRİNE DİKTİR ve bu nedenle iş yapılmaz?',
          options: [
            { key: 'A', text: 'Yerdeki koliyi kucağında tutarak yatay koridorda sabit hızla yürüyen işçi' },
            { key: 'B', text: 'Çekmecenin kulpunu çekerek açan öğrenci' },
            { key: 'C', text: 'Kızağı ipinden çekerek karda kaydıran çocuk' },
            { key: 'D', text: 'Daldan düşen armut' }
          ],
          correctAnswer: 'A',
          explanation: 'Kucağında koli tutan işçi yukarı doğru kuvvet uygular ancak hareket yataydır (dik açı). Dolayısıyla fiziksel iş yapılmaz.'
        },
        {
          id: 13,
          theme: 'Esnek Cisimler',
          cognitiveLevel: 'Tanımlama',
          scenario: 'Kuvvet uygulandığında şekil değiştiren, kuvvet ortadan kalktığında tekrar eski biçimine dönen cisimlere esnek cisim denir.',
          questionPrompt: 'Aşağıdakilerden hangisi esneklik potansiyel enerjisi DEPOLAYAMAZ?',
          options: [
            { key: 'A', text: 'Paket lastiği' },
            { key: 'B', text: 'Sarmal çelik yay' },
            { key: 'C', text: 'Oyun hamuru' },
            { key: 'D', text: 'Bulaşık süngeri' }
          ],
          correctAnswer: 'C',
          explanation: 'Oyun hamuru esnek değildir, plastik şekil değiştirir; kuvvet kalkınca eski haline dönmez ve esneklik potansiyeli depolamaz.'
        },
        {
          id: 14,
          theme: 'İşin Büyüklüğünü Etkileyen Faktörler',
          cognitiveLevel: 'Deney Tasarımı',
          scenario: 'Bir deneyde aynı cisim sürtünmesiz yatay zeminde önce 10 N kuvvetle 2 metre çekilmiş, daha sonra 20 N kuvvetle 2 metre çekilmiştir.',
          questionPrompt: 'Bu deneyin bağımsız değişkeni ve ulaşılan sonuç nedir?',
          options: [
            { key: 'A', text: 'Bağımsız değişken yoldur; yapılan iş değişmemiştir.' },
            { key: 'B', text: 'Bağımsız değişken uygulanan kuvvettir; kuvvet arttıkça yapılan fiziksel iş artmıştır.' },
            { key: 'C', text: 'Bağımsız değişken potansiyel enerjidir.' },
            { key: 'D', text: 'Bağımsız değişken kütledir.' }
          ],
          correctAnswer: 'B',
          explanation: 'Farklı uygulanan şey kuvvettir (10 N ve 20 N). Yol sabitken kuvvet arttıkça iş (W = F·x) iki katına çıkmıştır.'
        },
        {
          id: 15,
          theme: 'Potansiyel Enerji Sıralaması',
          cognitiveLevel: 'Karşılaştırma',
          scenario: 'Kitaplıkta bulunan üç özdeş kitabın konumları şöyledir:\n1. Kitap: 1. rafta (Yükseklik: 40 cm)\n2. Kitap: 2. rafta (Yükseklik: 80 cm)\n3. Kitap: 3. rafta (Yükseklik: 120 cm)',
          questionPrompt: 'Bu özdeş kitapların çekim potansiyel enerjileri arasındaki ilişki nasıldır?',
          options: [
            { key: 'A', text: '1 > 2 > 3' },
            { key: 'B', text: '3 > 2 > 1' },
            { key: 'C', text: '1 = 2 = 3' },
            { key: 'D', text: '2 > 1 > 3' }
          ],
          correctAnswer: 'B',
          explanation: 'Kitaplar özdeş olduğu için ağırlıkları eşittir. Yerden yüksekliği en fazla olan 3. kitaptaki çekim potansiyel enerjisi en büyüktür.'
        },
        {
          id: 16,
          theme: 'Uçan Balonun Enerji Değişimi',
          cognitiveLevel: 'Süreç Analizi',
          scenario: 'Çocuğun elinden kaçan helyum dolu uçan balon gökyüzüne doğru giderek yükselmektedir.',
          questionPrompt: 'Balon yükselirken çekim potansiyel enerjisinde nasıl bir değişim meydana gelir?',
          options: [
            { key: 'A', text: 'Yüksekliği arttığı için çekim potansiyel enerjisi sürekli artar.' },
            { key: 'B', text: 'Kütlesi azaldığı için enerjisi biter.' },
            { key: 'C', text: 'Sıfıra düşer.' },
            { key: 'D', text: 'Değişmez.' }
          ],
          correctAnswer: 'A',
          explanation: 'Çekim potansiyel enerjisi yüksekliğe bağlıdır; yükseldikçe çekim potansiyel enerjisi artar.'
        },
        {
          id: 17,
          theme: 'Kaçış Rampaları ve Enerji',
          cognitiveLevel: 'Mühendislik Uygulaması',
          scenario: 'Kitabın 83. sayfasında uzun iniş eğimli karayollarında freni patlayan ağır vasıtalar için yapılan "kaçış rampaları" anlatılmaktadır.',
          questionPrompt: 'Ağır kamyonların kaçış rampasında yukarı tırmanıp durabilmesinin temel fiziksel açıklaması nedir?',
          options: [
            { key: 'A', text: 'Kamyonun kinetik enerjisinin rampa boyunca yokuş çıktıkça çekim potansiyel enerjisine ve çakıllı zemindeki sürtünmeyle ısı enerjisine dönüşerek tükenmesi' },
            { key: 'B', text: 'Rampada yer çekiminin yok olması' },
            { key: 'C', text: 'Kamyonun ağırlığının sıfırlanması' },
            { key: 'D', text: 'Yolun kısalması' }
          ],
          correctAnswer: 'A',
          explanation: 'Yokuş yukarı çıkıldıkça kinetik enerji potansiyel enerjiye ve zemin sürtünmesiyle ısıya dönüşerek aracı güvenle durdurur.'
        },
        {
          id: 18,
          theme: 'Halterci ve Fiziksel İş',
          cognitiveLevel: 'Kavram Yanılgısı',
          scenario: 'Bir halterci 150 kg’lık halteri yerden kaldırıp omuz hizasına getirmiş, ardından başının üstüne kaldırmış ve orada 5 saniye hareketsiz beklemiştir.',
          questionPrompt: 'Haltercinin bu aşamalarda yaptığı iş hakkında hangisi doğrudur?',
          options: [
            { key: 'A', text: 'Halteri kaldırırken iş yapmış, başının üstünde hareketsiz tutarken ise fiziksel iş yapmamıştır.' },
            { key: 'B', text: 'Hiçbir aşamada iş yapmamıştır.' },
            { key: 'C', text: 'Yalnızca beklerken iş yapmıştır.' },
            { key: 'D', text: 'Halter hafifledikçe iş artmıştır.' }
          ],
          correctAnswer: 'A',
          explanation: 'Kaldırma esnasında kuvvet yönünde yol alınır (iş var); sabit tutulduğunda yol alınmadığı için fiziksel iş sıfırdır.'
        },
        {
          id: 19,
          theme: 'Yay Sabiti ve Esneklik',
          cognitiveLevel: 'Karşılaştırma',
          scenario: 'Kalın çelik yay ile ince yumuşak yay aynı miktarda (10 cm) sıkıştırılmıştır.',
          questionPrompt: 'Kalın çelik yayın depoladığı esneklik potansiyel enerjisinin daha fazla olmasının sebebi nedir?',
          options: [
            { key: 'A', text: 'Daha sert ve esneklik direnci yüksek olduğu için sıkıştırmak adına daha büyük kuvvet gerektirmesi ve daha çok iş yapılması' },
            { key: 'B', text: 'Daha soğuk olması' },
            { key: 'C', text: 'Daha uzun olması' },
            { key: 'D', text: 'Yer çekimini engellemesi' }
          ],
          correctAnswer: 'A',
          explanation: 'Sert yayları aynı miktar sıkıştırmak için daha büyük kuvvet uygulanır; yapılan iş ve depolanan enerji daha büyüktür.'
        },
        {
          id: 20,
          theme: 'İş - Enerji Teoremi Özeti',
          cognitiveLevel: 'Genelleme',
          scenario: 'Bir cisim üzerine net bir kuvvet etki ettiğinde ve cisim yol aldığında iş yapılır. Yapılan bu iş cisme enerji olarak aktarılır.',
          questionPrompt: 'Buna göre yatay sürtünmesiz zeminde duran bir sandığa 50 N kuvvet uygulanarak 4 metre çekilirse sandığın kazanacağı kinetik enerji kaç Joule olur?',
          options: [
            { key: 'A', text: '200 J' },
            { key: 'B', text: '50 J' },
            { key: 'C', text: '12.5 J' },
            { key: 'D', text: '0 J' }
          ],
          correctAnswer: 'A',
          explanation: 'Yapılan iş W = F × Δx = 50 N × 4 m = 200 J. Sürtünme olmadığı için yapılan tüm iş kinetik enerjiye dönüşür (200 J).'
        }
      ]
    },
    {
      id: 'g7-u2-sub2',
      title: '2. Enerji Dönüşümleri',
      shortTitle: 'Enerji Dönüşümleri',
      badge: '2. Bölüm',
      pageRange: '71-80',
      concepts: ['Enerjinin Korunumu', 'Mekanik Enerji', 'Sürtünme Kuvveti', 'Isı Enerjisi', 'Cezerî', 'Sarkaç Deneyleri'],
      simulationId: 'dynamometer',
      summarySections: [
        {
          heading: 'Enerjinin Korunumu Kanunu',
          paragraphs: [
            'Evrende enerji asla yoktan var edilemez, var olan bir enerji de asla yok olamaz! Enerji yalnızca bir türden başka bir enerji türüne dönüşür. Bu evrensel gerçeğe Enerjinin Korunumu Kanunu denir.',
            'Bir sistemdeki Kinetik Enerji ile Potansiyel Enerjinin toplamına Mekanik Enerji denir. Sürtünmesiz bir ortamda mekanik enerji daima sabit kalır.'
          ],
          keyPoints: [
            'Salıncak Örneği: Salıncakta sallanan bir çocuk en tepeye çıktığında bir an durur; burada Potansiyel Enerji MAKSİMUM, Kinetik Enerji SIFIRDIR. Aşağıya doğru inerken potansiyel enerji azalır, kinetik enerji artar. En alt noktadan geçerken sürat maksimum, Kinetik Enerji MAKSİMUM, Potansiyel Enerji MİNİMUMDUR.',
            'Sarkaç Deneyi: K noktasından serbest bırakılan bilye L noktasında (en altta) en yüksek sürate ulaşır (tüm potansiyel kinetiğe dönüştü). Karşı taraftaki M noktasına çıktığında tekrar aynı yüksekliğe ulaşır ve tüm kinetik enerji potansiyele dönüşür.'
          ],
          table: {
            headers: ['Konum', 'Potansiyel Enerji', 'Kinetik Enerji', 'Toplam Mekanik Enerji'],
            rows: [
              ['En Üst Nokta (Serbest Bırakılma)', 'Maksimum', 'Sıfır', 'Sabit (Korunur)'],
              ['Orta Yükseklik (İniş Sırası)', 'Azalır', 'Artar', 'Sabit (Korunur)'],
              ['En Alt Nokta (Zemin)', 'Minimum (Sıfır)', 'Maksimum', 'Sabit (Korunur)'],
              ['Yukarı Çıkış Sırası', 'Artar', 'Azalır', 'Sabit (Korunur)']
            ]
          }
        },
        {
          heading: 'Sürtünme Kuvveti ve Kinetik Enerjinin Isıya Dönüşümü',
          paragraphs: [
            'Gerçek hayatta sallanan bir salıncak veya serbest bırakılan sarkaç sonsuza kadar sallanmaz; bir süre sonra yavaşlayarak durur.',
            'Bunun sebebi enerjinin yok olması değil; hareketli cismin hava ve temas ettiği yüzeyle sürtünmesi sonucu kinetik enerjisinin bir kısmının ISI ve SES enerjisine dönüşmesidir.'
          ],
          keyPoints: [
            'Fren Yapan Araç: Hızla giden bir araba aniden frene bastığında lastikler ve asfalt ısınır, duman çıkar. Kinetik enerji sürtünmeyle ısı enerjisine dönüşmüştür.',
            'Elleri Birbirine Sürtmek: Soğuk kış günlerinde ellerimizi birbirine sürttüğümüzde ellerimizin ısınması hareket (kinetik) enerjisinin sürtünmeyle ısıya dönüştüğünü gösterir.',
            'Meteorların Atmosferde Yanması: Uzaydan gelen meteorların atmosfer gazlarına sürtünerek akkor hale gelip yanması kinetik enerjinin ısı ve ışık enerjisine dönüşümüdür.'
          ],
          scientistBox: {
            name: 'Cezerî (1181-1206)',
            role: 'İslam Medeniyetinin Mühendislik ve Sibernetik Dehası',
            contribution: 'Diyarbakır Artuklu Sarayı’nda yaşayan Cezerî, kaleme aldığı "Kitab-ül Hiyel" eserinde yer çekimi potansiyel enerjisini, suyun akış kinetik enerjisini ve dişli çarkları kullanarak çalışan iki şamandıralı fıskiyeler, otomatik abdest alma makineleri ve fil su saatleri tasarlamıştır.'
          }
        }
      ],
      glossary: [
        { term: 'Enerjinin Korunumu Kanunu', definition: 'Enerjinin yoktan var edilemeyeceği, var olan enerjinin de yok olmayıp yalnızca başka biçimlere dönüşebileceğini ifade eden temel fizik yasası.' },
        { term: 'Mekanik Enerji', definition: 'Bir cismin kinetik enerjisi ile potansiyel enerjisinin toplamı.' },
        { term: 'Sürtünme Kuvveti', definition: 'Temas halindeki yüzeyler arasında hareketi zorlaştıran ve kinetik enerjiyi ısıya dönüştüren direnç kuvveti.' },
        { term: 'Isı Enerjisi', definition: 'Maddelerin taneciklerinin kinetik hareketliliğinden kaynaklanan ve sürtünmeyle açığa çıkabilen enerji türü.' },
        { term: 'Sarkaç', definition: 'Sabit bir nokta çevresinde yer çekimi ve kinetik enerji dönüşümüyle serbestçe salınım yapan asılı düzenek.' },
        { term: 'Cezerî', definition: 'Mekanik ve otomatik makinelerin öncüsü olan, potansiyel su enerjisini harekete dönüştüren büyük Türk-İslam bilim insanı.' }
      ],
      trueFalseQuestions: [
        { id: 1, text: 'Enerjinin korunumu kanununa göre bir enerji türü yok olmaz, sadece başka bir enerji türüne dönüşür.', isCorrect: true, explanation: 'Doğrudur. Enerji evrende daima korunur.' },
        { id: 2, text: 'Sürtünmesiz bir ortamda salıncakta sallanan bir çocuğun mekanik enerjisi sürekli artar.', isCorrect: false, explanation: 'Yanlıştır. Sürtünmesiz ortamda kinetik ve potansiyel birbirine dönüşür ancak toplam mekanik enerji SABİT kalır.' },
        { id: 3, text: 'Salıncak en alt noktadan geçerken çekim potansiyel enerjisi en büyük değere ulaşır.', isCorrect: false, explanation: 'Yanlıştır. En alt noktada yükseklik minimum olduğundan potansiyel enerji minimum, kinetik enerji ise maksimumdur.' },
        { id: 4, text: 'Kaydıraktan kayan bir çocuğun kinetik enerjisinin bir kısmı sürtünme nedeniyle ısı enerjisine dönüşür.', isCorrect: true, explanation: 'Doğrudur. Çocuk kayarken pantolonu ve kaydırak yüzeyi sürtünmeden dolayı ısınır.' },
        { id: 5, text: 'Cezerî, tasarladığı otomatik su saatlerinde ve makinelerinde yer çekimi ve suyun hareket enerjisinden faydalanmıştır.', isCorrect: true, explanation: 'Doğrudur. Cezerî şamandıralı düzenekler ve düşen ağırlıklarla çalışan makineler geliştirmiştir.' },
        { id: 6, text: 'Frene basan arabanın durması enerjinin tamamen yok olduğunu kanıtlar.', isCorrect: false, explanation: 'Yanlıştır. Kinetik enerji yok olmamış, sürtünmeyle lastik ve asfaltta ısı ve ses enerjisine dönüşmüştür.' },
        { id: 7, text: 'Yerden yukarı fırlatılan bir taşın yukarı çıkarken kinetik enerjisi azalır, çekim potansiyel enerjisi artar.', isCorrect: true, explanation: 'Doğrudur. Yükseldikçe hızı azalır (kinetik azalır), yüksekliği arttığı için potansiyel enerjisi artar.' },
        { id: 8, text: 'Hermann von Helmholtz enerjinin korunumu kanununu matematiksel olarak formüle eden bilim insanıdır.', isCorrect: true, explanation: 'Doğrudur. Ders kitabının 80. sayfasındaki İz Bırakanlar bölümünde belirtilmiştir.' },
        { id: 9, text: 'Sürtünme kuvveti her zaman kinetik enerjiyi artırıcı yönde etki eder.', isCorrect: false, explanation: 'Yanlıştır. Sürtünme harekete zıt yönde direnç gösterir ve kinetik enerjiyi azaltarak ısıya dönüştürür.' },
        { id: 10, text: 'Sıkıştırılmış bir yayın önüne konulan bilye serbest bırakıldığında, yaydaki esneklik potansiyeli bilyede kinetik enerjiye dönüşür.', isCorrect: true, explanation: 'Doğrudur. Yay gevşerken depoladığı esneklik enerjisini bilyeye hareket (kinetik) enerjisi olarak aktarır.' }
      ],
      lgsQuestions: [
        {
          id: 1,
          theme: 'Kaykay Pisti ve Enerji Grafiği',
          cognitiveLevel: 'Grafik ve Süreç Analizi',
          scenario: 'Kitabın 78. sayfasındaki A etkinliğinde Anıl U şeklindeki sürtünmesiz kaykay pistinde A noktasından kaymaya başlamakta, B (en dip) noktasından geçip C noktasına çıkmaktadır.',
          questionPrompt: 'Anıl’ın A’dan B’ye ve B’den C’ye hareketi sırasında potansiyel ve kinetik enerjilerinin değişimi hangi seçenekte DOĞRU verilmiştir?',
          options: [
            { key: 'A', text: 'A-B arası: Potansiyel azalır, Kinetik artar | B-C arası: Potansiyel artar, Kinetik azalır' },
            { key: 'B', text: 'A-B arası: Potansiyel artar, Kinetik artar | B-C arası: Potansiyel azalır, Kinetik azalır' },
            { key: 'C', text: 'A-B arası: İkisi de değişmez | B-C arası: Kinetik sıfırlanır' },
            { key: 'D', text: 'A-B arası: Potansiyel sıfır | B-C arası: Kinetik maksimum' }
          ],
          correctAnswer: 'A',
          explanation: 'A’dan B’ye inerken yükseklik azalır (potansiyel azalır), hız artar (kinetik artar). B’den C’ye çıkarken ise yükseklik artar (potansiyel artar), hız azalır (kinetik azalır).'
        },
        {
          id: 2,
          theme: 'Sarkaçta Enerji Dönüşümü',
          cognitiveLevel: 'Deney Yorumlama',
          scenario: 'Kitabın 79. sayfasındaki C etkinliğinde sürtünmesiz sarkaç K noktasından serbest bırakılmıştır. L en alt nokta, M ise karşı taraftaki en üst noktadır.',
          questionPrompt: 'Bilye L noktasından geçerken kinetik ve potansiyel enerjilerinin sütun grafiği nasıl olmalıdır?',
          options: [
            { key: 'A', text: 'Kinetik Enerji tam dolu (Maksimum), Potansiyel Enerji boş (Sıfır)' },
            { key: 'B', text: 'Potansiyel tam dolu, Kinetik boş' },
            { key: 'C', text: 'Her ikisi de yarı yarıya dolu' },
            { key: 'D', text: 'Her ikisi de sıfır' }
          ],
          correctAnswer: 'A',
          explanation: 'En alt nokta olan L seviyesinde yükseklik sıfır kabul edilir, tüm enerji maksimum kinetik enerjiye dönüşmüştür.'
        },
        {
          id: 3,
          theme: 'Sıkıştırılan Yay ve Rampa Düzeneği',
          cognitiveLevel: 'Enerji Zinciri Analizi',
          scenario: 'Kitabın 79. sayfasındaki B etkinliğinde duvara sabitlenmiş bir yay cisimle sıkıştırılıyor. Yay serbest bırakıldığında cisim düz yolda A noktasına ulaşıp rampadan tırmanarak B noktasına kadar çıkıyor ve bir an duruyor.',
          questionPrompt: 'Bu düzenekte gerçekleşen enerji dönüşüm zinciri sırasıyla hangisidir?',
          options: [
            { key: 'A', text: 'Esneklik Potansiyel Enerjisi ➔ Kinetik Enerji ➔ Çekim Potansiyel Enerjisi' },
            { key: 'B', text: 'Kinetik Enerji ➔ Esneklik Potansiyeli ➔ Isı Enerjisi' },
            { key: 'C', text: 'Çekim Potansiyeli ➔ Isı ➔ Kinetik Enerji' },
            { key: 'D', text: 'Elektrik Enerjisi ➔ Işık Enerjisi ➔ Kinetik Enerji' }
          ],
          correctAnswer: 'A',
          explanation: 'Sıkışan yayda esneklik potansiyel enerjisi vardır. Bırakılınca cisme kinetik enerji verir. Cisim rampaya tırmandıkça bu kinetik enerji çekim potansiyel enerjisine dönüşür.'
        },
        {
          id: 4,
          theme: 'Tarihe Not Düşenler: Cezerî’nin Mühendisliği',
          cognitiveLevel: 'Tarih ve Teknoloji',
          scenario: '1200’lü yıllarda yaşayan Cezerî, tasarladığı fıskiyelerde suyun yüksek bir depodan borularla akışını ve şamandıraların su yüzeyindeki hareketini kullanmıştır.',
          questionPrompt: 'Cezerî’nin bu makinelerinde yararlandığı temel fiziksel prensip nedir?',
          options: [
            { key: 'A', text: 'Yüksekteki suyun potansiyel enerjisinin akış esnasında kinetik enerjiye ve mekanik işe dönüşmesi' },
            { key: 'B', text: 'Elektrik motorlarının gücü' },
            { key: 'C', text: 'Nükleer reaksiyonlar' },
            { key: 'D', text: 'Güneş panelleri' }
          ],
          correctAnswer: 'A',
          explanation: 'Cezerî yer çekimi potansiyel enerjisini ve suyun kinetik enerjisini mekanik dişlilerle birleştirerek tarihin ilk otomasyon sistemlerini kurmuştur.'
        },
        {
          id: 5,
          theme: 'Sürtünmeli Ortamda Salınım',
          cognitiveLevel: 'Muhakeme',
          scenario: 'Hava ortamında sallanan bir salıncak bir süre sonra giderek daha az yükselir ve sonunda tamamen durur.',
          questionPrompt: 'Salıncağın durması ile ilgili yapılan aşağıdaki açıklamalardan hangisi BİLİMSEL OLARAK DOĞRUDUR?',
          options: [
            { key: 'A', text: 'Mekanik enerji tamamen yok olmuştur.' },
            { key: 'B', text: 'Hava sürtünmesi ve zincir bağlantılarındaki sürtünme kuvveti, mekanik enerjiyi yavaş yavaş ısı ve ses enerjisine dönüştürmüştür.' },
            { key: 'C', text: 'Dünya’nın yer çekimi kuvveti aniden artmıştır.' },
            { key: 'D', text: 'Çocuğun kütlesi zamanla artmıştır.' }
          ],
          correctAnswer: 'B',
          explanation: 'Enerjinin korunumu gereği enerji yok olmaz, sürtünme nedeniyle çevreye ısı ve ses enerjisi olarak dağılır.'
        },
        {
          id: 6,
          theme: 'Zıplayan Basketbol Topu',
          cognitiveLevel: 'Aşama Takibi',
          scenario: 'Kitabın 73. sayfasında bir basketbol topu omuz hizasından yere serbest bırakılıyor. Top yere çarpıp tekrar yukarı zıpladığında ilk bırakıldığı yüksekliğe kadar ÇIKAMIYOR.',
          questionPrompt: 'Topun ilk bırakıldığı yüksekliğe kadar çıkamamasının sebebi nedir?',
          options: [
            { key: 'A', text: 'Topun kütlesinin azalması' },
            { key: 'B', text: 'Yere çarpma anında ve havayla temasında enerjinin bir kısmının ses, ısı ve esneme sürtünmesine dönüşmesi' },
            { key: 'C', text: 'Havanın kaldırma kuvvetinin yok olması' },
            { key: 'D', text: 'Yerin topu yutması' }
          ],
          correctAnswer: 'B',
          explanation: 'Yere çarptığında çıkan "pat" sesi ve topun sıkışıp ısınması mekanik enerjinin bir kısmını harcar, bu yüzden daha az yüksekliğe zıplar.'
        },
        {
          id: 7,
          theme: 'Mekanik Enerjinin Korunumu',
          cognitiveLevel: 'Sayısal Muhakeme',
          scenario: 'Sürtünmesiz bir ortamda yerden 10 metre yüksekteki bir cismin potansiyel enerjisi 500 Joule’dür. Cisim serbest bırakılıyor.',
          questionPrompt: 'Cisim yere tam çarpma anında sahip olduğu kinetik enerji kaç Joule olur?',
          options: [
            { key: 'A', text: '500 J' },
            { key: 'B', text: '250 J' },
            { key: 'C', text: '0 J' },
            { key: 'D', text: '1000 J' }
          ],
          correctAnswer: 'A',
          explanation: 'Sürtünmesiz ortamda başlangıçtaki tüm potansiyel enerji (500 J) yere çarpma anında tamamen kinetik enerjiye dönüşür (500 J).'
        },
        {
          id: 8,
          theme: 'Eğik Düzlemde Enerji',
          cognitiveLevel: 'Deney Analizi',
          scenario: 'Kitabın 74. sayfasındaki 5. adımda: Kitapların üstüne konan eğik düzlemden serbest bırakılan maket araba en üst, orta ve en alt noktalardan geçmektedir.',
          questionPrompt: 'Arabanın en alt noktaya (masaya) ulaştığında hızı ve enerjisi hakkında ne söylenebilir?',
          options: [
            { key: 'A', text: 'Potansiyel enerjisi en büyüktür.' },
            { key: 'B', text: 'Hızı en büyük değerdedir ve kinetik enerjisi maksimumdur.' },
            { key: 'C', text: 'Araba durur.' },
            { key: 'D', text: 'Kinetik enerjisi sıfırdır.' }
          ],
          correctAnswer: 'B',
          explanation: 'Eğik düzlemin dibine inildiğinde tüm yükseklik potansiyeli kinetik enerjiye dönüştüğü için araba en yüksek sürate ulaşır.'
        },
        {
          id: 9,
          theme: 'James Prescott Joule Katkısı',
          cognitiveLevel: 'Bilim Tarihi',
          scenario: 'İngiliz fizikçi James Prescott Joule, bir kaba yerleştirdiği paletleri mekanik ağırlıklar düşürerek döndürmüş ve suyun sıcaklığının arttığını hassas termometreyle ölçmüştür.',
          questionPrompt: 'Joule’ün bu ünlü deneyi hangi büyük bilimsel ilkeyi ispatlamıştır?',
          options: [
            { key: 'A', text: 'Mekanik işin doğrudan ısı enerjisine dönüşebildiğini ve enerjinin korunduğunu' },
            { key: 'B', text: 'Suyun asla ısınamayacağını' },
            { key: 'C', text: 'Teleskopların çalışma mantığını' },
            { key: 'D', text: 'Güneş lekelerinin sıcaklığını' }
          ],
          correctAnswer: 'A',
          explanation: 'Joule mekanik iş ile ısı arasındaki denkliği kanıtlamış ve bu yüzden iş-enerji birimine onun adı verilmiştir.'
        },
        {
          id: 10,
          theme: 'Hız Treni (Roller Coaster) Dinamiği',
          cognitiveLevel: 'Gerçek Yaşam Simülasyonu',
          scenario: 'Bir lunaparktaki hız treni motor yardımıyla en yüksek tepeye (A noktası) çıkarılır. Buradan serbest bırakıldıktan sonra hiçbir motor gücü olmadan pistteki döngüleri tamamlar.',
          questionPrompt: 'Hız treninin pisti tamamlayabilmesini sağlayan temel enerji dinamiği nedir?',
          options: [
            { key: 'A', text: 'A noktasında kazandığı devasa çekim potansiyel enerjisinin inişlerde yüksek kinetik enerjiye dönüşerek treni sonraki tepelere taşıması' },
            { key: 'B', text: 'Trenin tekerleklerinin elektrik üretmesi' },
            { key: 'C', text: 'Havanın treni ileri itmesi' },
            { key: 'D', text: 'Trenin ağırlığının tepeye çıktıkça artması' }
          ],
          correctAnswer: 'A',
          explanation: 'En tepedeki çekim potansiyel enerjisi inişte kinetiğe, tırmanışta tekrar potansiyele dönüşerek sürüşü sağlar.'
        },
        {
          id: 11,
          theme: 'Sürtünme Kuvvetini Azaltma Yolları',
          cognitiveLevel: 'Uygulama',
          scenario: 'Makinelerin dişlilerinde aşırı sürtünme kinetik enerjinin istenmeyen ısıya dönüşmesine ve parçaların aşınmasına yol açar.',
          questionPrompt: 'Mühendisler bu enerji kaybını azaltmak ve verimi artırmak için hangi yöntemi uygular?',
          options: [
            { key: 'A', text: 'Temas eden yüzeyleri zımparalayarak pürüzlü hale getirmek' },
            { key: 'B', text: 'Dişliler arasına yağ (makine yağı) koymak ve bilyeli rulmanlar kullanmak' },
            { key: 'C', text: 'Makineleri daha yüksek ısıda çalıştırmak' },
            { key: 'D', text: 'Yüzeyleri kumla kaplamak' }
          ],
          correctAnswer: 'B',
          explanation: 'Yağlama ve bilyeli rulmanlar yüzey sürtünmesini azaltarak kinetik enerjinin ısıya dönüşüp kaybolmasını engeller.'
        },
        {
          id: 12,
          theme: 'Kinetik - Potansiyel Dönüşüm Tablosu',
          cognitiveLevel: 'Tablo Okuma',
          scenario: 'Yukarı doğru düşey olarak fırlatılan 2 kg kütleli bir topun yerden yüksekliği ve sürati kaydedilmiştir.',
          questionPrompt: 'Top yukarı doğru tırmanırken kinetik, potansiyel ve mekanik enerjisi nasıl değişir (Sürtünme önemsiz)?',
          options: [
            { key: 'A', text: 'Kinetik azalır, Potansiyel artar, Mekanik değişmez' },
            { key: 'B', text: 'Kinetik artar, Potansiyel azalır, Mekanik artar' },
            { key: 'C', text: 'Hepsi azalır' },
            { key: 'D', text: 'Kinetik değişmez, Potansiyel artar, Mekanik azalır' }
          ],
          correctAnswer: 'A',
          explanation: 'Yükseldikçe yavaşlar (kinetik azalır), yükseldiği için potansiyel artar; sürtünmesiz ortamda toplam mekanik enerji sabittir.'
        },
        {
          id: 13,
          theme: 'Enerji Dönüşümü ve Canlılar',
          cognitiveLevel: 'Biyofiziksel Çıkarım',
          scenario: 'İnsanlar besinlerden kimyasal enerji alır. Bu enerji kaslarda hareket (kinetik) enerjisine ve vücut ısısına dönüşür.',
          questionPrompt: 'Bu durum aşağıdakilerden hangisinin bir kanıtıdır?',
          options: [
            { key: 'A', text: 'Canlıların enerjiyi yok edebildiğinin' },
            { key: 'B', text: 'Enerjinin korunumu kanununun canlı metabolizmasında da aynen geçerli olduğunun' },
            { key: 'C', text: 'İnsanların yer çekiminden etkilenmediğinin' },
            { key: 'D', text: 'Besinlerde enerji bulunmadığının' }
          ],
          correctAnswer: 'B',
          explanation: 'Besinlerdeki kimyasal bağ enerjisi ATP aracılığıyla kinetik ve ısı enerjisine dönüşür; enerjinin korunumu ilkesi canlılarda da işler.'
        },
        {
          id: 14,
          theme: 'Yaylı Trambolin',
          cognitiveLevel: 'Kavramsal Uygulama',
          scenario: 'Trambolinde zıplayan bir sporcu en yüksek noktaya çıkar, aşağı düşerek trambolin ağını ve yaylarını esnetir ve tekrar yukarı fırlar.',
          questionPrompt: 'Sporcunun trambolin yaylarını en çok sıkıştırdığı/gerdiği anda hangi enerji türü maksimumdur?',
          options: [
            { key: 'A', text: 'Yayların esneklik potansiyel enerjisi' },
            { key: 'B', text: 'Sporcunun kinetik enerjisi' },
            { key: 'C', text: 'Sporcunun çekim potansiyel enerjisi' },
            { key: 'D', text: 'Rüzgâr enerjisi' }
          ],
          correctAnswer: 'A',
          explanation: 'En alt noktada sporcu bir an durur (kinetik sıfır), trambolin maksimum esner ve tüm enerji esneklik potansiyeline dönüşür.'
        },
        {
          id: 15,
          theme: 'Sarkaçta Açı ve Yükseklik',
          cognitiveLevel: 'Deney Değişkeni',
          scenario: 'Bir öğrenci sarkacı denge konumundan 10 derece çekip bıraktığında L noktasındaki sürati v1, 30 derece çekip bıraktığında L noktasındaki sürati v2 olmuştur.',
          questionPrompt: 'v2 süratinin v1 süratinden daha büyük olmasının bilimsel nedeni nedir?',
          options: [
            { key: 'A', text: '30 derece çekildiğinde sarkacın yerden daha fazla yükselmesi ve daha büyük çekim potansiyel enerjisi kazanması' },
            { key: 'B', text: 'Bilyenin kütlesinin artması' },
            { key: 'C', text: 'İpin boyunun uzaması' },
            { key: 'D', text: 'Havanın bilyeyi çekmesi' }
          ],
          correctAnswer: 'A',
          explanation: 'Daha büyük açıyla çekilen sarkaç daha yüksek konuma çıkar (daha çok potansiyel enerji depolar), bu da dipte daha büyük hıza dönüşür.'
        },
        {
          id: 16,
          theme: 'Fren Mesafesi ve Sürtünme Isısı',
          cognitiveLevel: 'Günlük Yaşam Bağı',
          scenario: 'Bisikletle dik bir yokuştan aşağı inerken sürekli frene basan Deniz, yokuşun sonunda bisikletin jantlarına ve fren pabuçlarına dokunduğunda ellerinin yandığını fark etmiştir.',
          questionPrompt: 'Jantların ve fren pabuçlarının aşırı ısınmasının nedeni hangisidir?',
          options: [
            { key: 'A', text: 'Bisikletin güneş ışığını soğurması' },
            { key: 'B', text: 'Yokuş boyunca azalan çekim potansiyel enerjisi ve kinetik enerjinin fren sürtünmesiyle ısı enerjisine dönüşmesi' },
            { key: 'C', text: 'Deniz’in bisiklete elektrik vermesi' },
            { key: 'D', text: 'Havanın soğuması' }
          ],
          correctAnswer: 'B',
          explanation: 'Fren sürtünmesi mekanik enerjiyi ısıya çevirir, bu nedenle pabuçlar ve jant ısınır.'
        },
        {
          id: 17,
          theme: 'Hermann von Helmholtz ve Enerji Denklemi',
          cognitiveLevel: 'Bilim Tarihi',
          scenario: '19. yüzyılın büyük bilgini Helmholtz, enerjinin yok edilemezliğini matematiksel denklemlerle ortaya koymuş ve "Doğadaki tüm kuvvetler tek bir genel korunum yasasına bağlıdır" demiştir.',
          questionPrompt: 'Bu ifade günümüzde hangi temel kanun olarak kabul edilir?',
          options: [
            { key: 'A', text: 'Enerjinin Korunumu Kanunu' },
            { key: 'B', text: 'Evrensel Çekim Yasası' },
            { key: 'C', text: 'Ohm Kanunu' },
            { key: 'D', text: 'Mendel Genetik Yasası' }
          ],
          correctAnswer: 'A',
          explanation: 'Helmholtz’un formüle ettiği bu yasa Enerjinin Korunumu Kanunudur.'
        },
        {
          id: 18,
          theme: 'Kinetik Enerji Sıfır Noktası',
          cognitiveLevel: 'Analiz',
          scenario: 'Havaya fırlatılan bir ok yükselir, tepe noktasına ulaşır ve geri düşmeye başlar.',
          questionPrompt: 'Okun kinetik enerjisinin anlık olarak SIFIR olduğu konum neresidir?',
          options: [
            { key: 'A', text: 'Ulaşabildiği en tepe (maksimum yükseklik) noktası' },
            { key: 'B', text: 'Yayı terk ettiği ilk an' },
            { key: 'C', text: 'Yere çarpmadan hemen önceki an' },
            { key: 'D', text: 'Düşüşün tam orta noktası' }
          ],
          correctAnswer: 'A',
          explanation: 'Tepe noktasında anlık olarak düşey hız sıfırlanır, dolayısıyla kinetik enerji sıfır, çekim potansiyeli maksimumdur.'
        },
        {
          id: 19,
          theme: 'Sarkaç Deneyinde Kütlenin Etkisi',
          cognitiveLevel: 'Bilimsel Deney Kurgusu',
          scenario: 'İp uzunlukları eşit olan iki sarkaçtan birine 100 gramlık, diğerine 500 gramlık bilye takılmıştır. Her ikisi de aynı açıyla (yükseklikten) serbest bırakılmıştır (Sürtünme ihmal).',
          questionPrompt: 'En alt noktadan geçerken bilyelerin süratleri ve kinetik enerjileri hakkında ne söylenebilir?',
          options: [
            { key: 'A', text: 'En alttaki süratleri eşittir ancak 500 gramlık bilyenin kinetik enerjisi 5 kat büyüktür.' },
            { key: 'B', text: '100 gramlık bilye daha hızlı geçer.' },
            { key: 'C', text: 'Kinetik enerjileri eşittir.' },
            { key: 'D', text: '500 gramlık bilye hareket edemez.' }
          ],
          correctAnswer: 'A',
          explanation: 'Yer çekimi ivmesi her iki bilyeyi de aynı hızla hızlandırır (hızlar eşit). Ancak kinetik enerji kütleyle orantılı olduğundan 500 g bilyenin kinetik enerjisi 5 kat fazladır.'
        },
        {
          id: 20,
          theme: 'Enerji Dönüşümlerini Özetleme',
          cognitiveLevel: 'Sentez',
          scenario: 'Rüzgâr türbinleri rüzgârın kinetik enerjisini elektrik enerjisine, elektrikli su ısıtıcısı elektrik enerjisini ısı enerjisine, el feneri kimyasal enerjiyi ışık enerjisine dönüştürür.',
          questionPrompt: 'Bu durumların tümü aşağıdaki ilkelerden hangisini doğrudan örneklendirir?',
          options: [
            { key: 'A', text: 'Enerjinin sürekli form değiştirerek bir türden başka bir türe dönüşebildiğini' },
            { key: 'B', text: 'Enerjinin sadece rüzgârda bulunduğunu' },
            { key: 'C', text: 'Elektriğin kendiliğinden var olduğunu' },
            { key: 'D', text: 'Enerjinin kullanıldıkça tamamen yok olduğunu' }
          ],
          correctAnswer: 'A',
          explanation: 'Tüm bu teknolojik aygıtlar enerjinin bir formdan diğerine dönüştürülmesi prensibiyle çalışır.'
        }
      ]
    }
  ]
};

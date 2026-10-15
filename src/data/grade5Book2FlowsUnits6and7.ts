import { InteractiveBookItem } from '../types/curriculum';

/**
 * 5. SINIF FEN BİLİMLERİ 2. KİTAP - TEKRAR DİZAYN SİSTEMİ
 * 6. ÜNİTE: YAŞAMIMIZDAKİ ELEKTRİK (Sayfa 104 - 135)
 * 7. ÜNİTE: SÜRDÜRÜLEBİLİR YAŞAM VE GERİ DÖNÜŞÜM (Sayfa 136 - 161)
 */

const unit6EndItems: InteractiveBookItem[] = [
  {
    id: 'ib-6-end-p130-bosluk-doldurma',
    pageNumber: 'Sayfa 130',
    type: 'on_degerlendirme',
    title: '6. Ünite Sonu İstasyonu - A: Boşluk Doldurma (1-15)',
    badge: 'Ünite Sonu A',
    prompt: 'Kelimeleri boşluklara yerleştiriniz (kolaylık, ampul, farklı, bilimsel, bağımsız, deney, bağımlı, artırılırsa, az parlak, sembol, şeması, pil, bağlantı kablosu, hipotez, kontrol, anahtar).',
    interactiveAnswer: '1. Bir elektrik devresinde pil [SEMBOL] kullanılarak gösterilebilir.\n2. Devre elemanlarının sembollerle gösterimi birçok yönden [KOLAYLIK] sağlar.\n3. Bir elektrik devresinde [ANAHTAR], sembolü ile gösterilir.\n4. Devre elemanlarının sembollerle gösterimi ortak [BİLİMSEL] bir dil oluşmasını sağlar.\n5. Bir elektrik devresinde [BAĞLANTI KABLOSU], düz çizgi sembolü ile gösterilir.\n6. Bir elektrik devresinin devre [ŞEMASI] çizilebilir.\n7. Bir elektrik devresinde [PİL], —|ı— sembolü ile gösterilir.\n8. Bir elektrik devresinde [AMPUL], —⊗— sembolü ile gösterilir.\n9. Bilimsel bir deneyle [HİPOTEZ] test edilir.\n10. Bir deneyde araştırılan bir durum [BAĞIMLI] değişken olarak bilinir.\n11. Diğer değişkenler sabit tutulup ampul sayısının artırılması ampulün daha [AZ PARLAK] yanmasına neden olur.\n12. Bir devrede ampul sayısı sabit tutulup pil sayısı [ARTIRILIRSA] ampul daha parlak yanar.\n13. Bir deneyde miktarı değiştirilen değişken [BAĞIMSIZ] değişken olarak adlandırılır.\n14. Bir deneyde bağımlı, bağımsız ve [KONTROL] değişkeni adı verilen değişkenler bulunur.\n15. Hipotezlerin doğruluğu [DENEY] ve gözlemlerle test edilebilir.'
  },
  {
    id: 'ib-6-end-p131-acik-uclu',
    pageNumber: 'Sayfa 131',
    type: 'on_degerlendirme',
    title: '6. Ünite Sonu İstasyonu - B: Açık Uçlu Değerlendirme (1-10)',
    badge: 'Ünite Sonu B',
    prompt: '1. Devre elemanları neden sembollerle gösterilir?\n2. Sembolü "—|ı—" olan eleman nedir?\n3. Sembolü olan devre elemanları nelerdir?\n4. Sembollerle yapılan çizime ne denir?\n5. Ampul parlaklığını etkileyen faktörler nelerdir?\n6. Bağımsız değişken nedir?\n7. Bağımlı değişken nedir?\n8. Pil sayısı bağımsız değişkense ampul sayısı hangi değişkendir?\n9. Pil sabitken ampul artarsa parlaklık nasıl değişir?\n10. Ampul sabitken pil artarsa parlaklık nasıl değişir?',
    interactiveAnswer: '1. Tüm dünyada ortak bilimsel bir dil oluşturmak, çizimi ve tamiri kolaylaştırmak için.\n2. Pil (üreteç).\n3. Pil, ampul, bağlantı kablosu, açık anahtar, kapalı anahtar.\n4. Devre şeması.\n5. Devredeki pil sayısı ve ampul sayısı.\n6. Bir deneyde sonucu etkilemesi için deneycinin bilinçli olarak değiştirdiği değişkendir.\n7. Bağımsız değişkene bağlı olarak değişen, deneyde ölçülen ve gözlemlenen sonuçtur.\n8. Kontrol edilen (sabit tutulan) değişken grubunda yer almalıdır.\n9. Ampul parlaklığı AZALIR.\n10. Ampul parlaklığı ARTAR.',
    qrInfo: {
      title: 'EBA: 6. Ünite Ölçme ve Değerlendirme Karekodu (s. 131)',
      description: 'Ders kitabının 131. sayfasındaki MEB EBA Ünite Sonu Değerlendirme testleri.',
      type: 'evaluation'
    }
  },
  {
    id: 'ib-6-end-p132-beceri-cadir-aydinlatma',
    pageNumber: 'Sayfa 132',
    type: 'on_degerlendirme',
    title: '6. Ünite Sonu İstasyonu - C: Hipotez Testi Soruları (Çadır Aydınlatması)',
    badge: 'Beceri Temelli',
    prompt: 'Öğrencinin devresinde 1 pil ve 3 ampul vardır. Parlaklık yetersiz gelmiş ve şu hipotezi kurmuştur:\n"Pil sayısını artırırsam ampul parlaklığı artar."\n1. Hipotezini test etmek için mevcut devre ile birlikte hangi şemayı kullanmalıdır? (A: 2 pil 2 ampul, B: 2 pil 3 ampul, C: 3 pil 3 ampul, D: 3 pil 4 ampul)\n2. Kurduğu deneydeki bağımsız ve bağımlı değişkenler hangisidir?',
    interactiveAnswer: '1. Soru Çözümü: Hipotez "pil sayısının etkisi"ni test ettiği için ampul sayısı (3 adet) SABİT TUTULMALI, sadece pil sayısı artırılmalıdır. 3 ampul ve 3 pilli olan [C] şeması seçilmelidir. (Doğru Cevap: C)\n2. Soru Çözümü: Bağımsız değişken değiştirilen "Pil sayısı", bağımlı değişken ise ölçülen "Ampul parlaklığı"dır. (Doğru Cevap: D)'
  },
  {
    id: 'ib-6-end-p133-cagini-asanlar',
    pageNumber: 'Sayfa 133',
    type: 'cagini_asanlar',
    title: 'Çağını Aşanlar: Elektrik Biliminin Öncüleri (s. 133)',
    badge: 'Çağını Aşanlar',
    content: '• ORD. PROF. BURHANETTİN SEZERAR: Türkiye’de elektrik mühendisliğinin kurucusu kabul edilir; Anadolu ve Trakya şehirlerinin elektrik şebekesine kavuşmasına öncülük etmiştir.\n• NIKOLA TESLA: Alternatif akım (AC) sistemini, kablosuz enerji iletimini ve radyo teknolojisini insanlığa armağan eden dahi mucittir.\n• ALESSANDRO VOLTA: Çinko ve bakır metalleriyle tuzlu su çözeltisini kullanarak tarihteki ilk kimyasal elektrik pili (Volta Pili)ni icat etmiştir.\n• THOMAS ALVA EDISON: 1879’da uzun ömürlü pratik karbon filamanlı elektrik ampulünü icat ederek modern aydınlatma çağını başlatmıştır.'
  },
  {
    id: 'ib-6-end-p134-135-bilim-guncesi',
    pageNumber: 'Sayfa 134-135',
    type: 'bilgi_istasyonu',
    title: 'Bilim Güncesi: Trafik İşaretlerinden Devre Şemalarına (s. 134-135)',
    badge: 'Bilim Güncesi',
    content: 'ÖĞRENCİ BAKIŞIYLA ÖZET:\n• Trafik levhaları nasıl ki tüm sürücülere evrensel kuralları anlatıyorsa, devre elemanlarının sembolleri de tüm dünyada ortak bir bilimsel dil oluşturur.\n• Atölyede kendi kurduğum devrenin ampulü ışık verince büyük mutluluk duydum.\n• Deneylerimizde hipotez kurmayı öğrendik: Pil sayısını artırdığımızda ampulün parlaklığı parıl parıl arttı; ancak aynı pile yeni ampuller bağladığımızda parlaklık azaldı. Bilimsel değişkenleri keşfetmek kendimi bir bilim insanı gibi hissettirdi!'
  }
];

export const unit6TekrarDizaynFlow: Record<string, InteractiveBookItem[]> = {
  'unit6-sub1': [
    {
      id: 'ib-6-1-p104-kapak',
      pageNumber: 'Sayfa 104-105',
      type: 'karekod',
      title: '6. Ünite Girişi: YAŞAMIMIZDAKİ ELEKTRİK',
      badge: 'Ünite Giriş',
      qrInfo: {
        title: '6. Ünite Tanıtım ve Özet E-İçerik Karekodu (EBA)',
        description: 'Ders kitabının 105. sayfasında yer alan 6. Ünite "Yaşamımızdaki Elektrik" EBA tanıtım ve özet video karekodları.',
        type: 'video'
      },
      content: 'İÇERİK ÇERÇEVESİ: 1. Devre Elemanlarının Sembolleri ve Devre Şeması, 2. Basit Bir Elektrik Devresinde Ampul Parlaklığını Etkileyen Değişkenler.\nANAHTAR KAVRAMLAR: Basit elektrik devre elemanlarının sembolleri, devre şeması, pil sayısı, ampul sayısı.\nHATIRLAYALIM: Basit bir elektrik devresini oluşturan elemanları ve bağımlı-bağımsız değişken kavramlarını öğrenmiştiniz.'
    },
    {
      id: 'ib-6-1-p106-107-on-deg',
      pageNumber: 'Sayfa 106-107',
      type: 'on_degerlendirme',
      title: 'Ön Değerlendirme İstasyonu: Semboller ve Değişkenler (1, 2 ve 3)',
      badge: 'Ön Değerlendirme',
      prompt: '1. Sembol kullanımının iletişim yönünden önemi nedir?\n2. Basit elektrik devre elemanlarının isimlerini yazınız (Pil, açık anahtar, kablo, kapalı anahtar, ampul).\n3. Umut I. devrede açık anahtarla ampulün yanmadığını, II. devrede kapalı anahtarla yandığını gözlemliyor:\na. Bağımsız değişken nedir?\nb. Bağımlı değişken nedir?\nc. Kontrol değişkeni nedir?',
      interactiveAnswer: '1. Semboller tüm dünyada ortak bir dil oluşturarak farklı dilleri konuşan insanların aynı teknik şemayı kolayca anlamasını ve uygulamasını sağlar.\n2. Görseldeki Elemanlar: Pil, Açık Anahtar, Bağlantı Kablosu, Kapalı Anahtar, Ampul.\n3. Değişken Analizi:\na. Bağımsız Değişken: Deneycinin bizzat değiştirdiği "Anahtarın konumu (açık/kapalı olması)".\nb. Bağımlı Değişken: Bağımsız değişkene bağlı olarak değişen "Ampulün ışık verme durumu (yanıp yanmaması)".\nc. Kontrol Edilen (Sabit) Değişkenler: Pil sayısı, ampul sayısı, kablo cinsi ve uzunluğu.'
    },
    {
      id: 'ib-6-1-p108-109-baslik-ve-kopru',
      pageNumber: 'Sayfa 108-109',
      type: 'hazirlik_istasyonu',
      title: 'DEVRE ELEMANLARININ SEMBOLLERİ: Hazırlık & Köprü İstasyonu',
      badge: 'Hazırlık & Köprü',
      prompt: 'HAZIRLIK (s. 108): Farklı dili konuşan öğrencilerin basit bir elektrik devresini şemaya bakarak aynı şekilde kurabilmelerini sağlayan nedir?\n\nKÖPRÜ İSTASYONU (s. 109): Televizyon kumandası ve cep telefonundaki pil yatağındaki (+) ve (-) kutup işaretlerinin önemini açıklayınız.',
      interactiveAnswer: '• HAZIRLIK CEVABI: Devre elemanlarının tüm dünyada standartlaşmış ortak sembollerle gösterilmesidir (uluslararası bilimsel dil).\n• KÖPRÜ CEVABI: Piller kimyasal enerjiyi elektrik enerjisine dönüştürür. Akımın doğru yönde akması ve cihazın çalışabilmesi için pillerin (+) çıkıntılı ucu ile (-) düz kutbunun devredeki işaretlere tam uyumlu yerleştirilmesi şarttır.'
    },
    {
      id: 'ib-6-1-p110-111-etkinlik-semboller',
      pageNumber: 'Sayfa 110-111',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu: Devre Elemanlarını Sembolleri ile Nitelendirme & Sembolü Var mı?',
      badge: 'Etkinlik İstasyonu',
      prompt: '1. Sayfa 110 eşleştirmesini yapınız:\n• 1 (Kapalı Anahtar) ➔ ç\n• 2 (Bağlantı Kablosu) ➔ d\n• 3 (Pil) ➔ a\n• 4 (Açık Anahtar) ➔ b\n• 5 (Ampul) ➔ c\n2. Sayfa 111: Hangi devre elemanlarının sembolü vardır, hangilerinin yoktur?',
      interactiveAnswer: '1. EŞLEŞTİRME: 1-ç, 2-d, 3-a, 4-b, 5-c.\n2. SEMBOLÜ OLANLAR: Pil, Ampul, Bağlantı Kablosu, Açık Anahtar, Kapalı Anahtar.\nSEMBOLÜ OLMAYANLAR: Pil Yatağı ve Duy! (Çünkü piller kablolara bantlanarak veya lehimlenerek, ampul de doğrudan kablo uçlarına temas ettirilerek duy ve pil yatağı olmadan da devre çalıştırılabilir).'
    },
    {
      id: 'ib-6-1-p112-113-pekistirme1-ve-kopru',
      pageNumber: 'Sayfa 112-113',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu-1 & Köprü İstasyonu: Elektronik Cihazlar ve Servis',
      badge: 'Pekiştirme & Köprü',
      prompt: 'KÖPRÜ İSTASYONU (s. 112): Elektronik cihazlardaki devre elemanları sembollerle ifade edilmeseydi hangi sorunlar ortaya çıkabilirdi?\n\nPEKİŞTİRME İSTASYONU-1 (s. 113): Devre elemanlarının sembollerini çiziniz.',
      interactiveAnswer: '• KÖPRÜ CEVABI: Farklı ülkelerdeki mühendis ve teknisyenler cihazın devre şemasını okuyamazdı; uluslararası ticaret, üretim, montaj ve tamir işlemleri imkânsız hale gelirdi.\n• SEMBOL ÇİZİMLERİ: Pil (—|ı—), Ampul (—⊗—), Bağlantı Kablosu (—————), Açık Anahtar (—• / •—), Kapalı Anahtar (—•—•—).',
      qrInfo: {
        title: 'EBA: "Devre Elemanları ve Sembolleri" Etkileşimli İçeriği (s. 113)',
        description: 'Ders kitabının 113. sayfasındaki EBA sembol eşleştirme ve devre kurma aracı.',
        type: 'interactive'
      }
    },
    {
      id: 'ib-6-1-p114-115-bilgikutusu-ve-pekistirme2',
      pageNumber: 'Sayfa 114-115',
      type: 'pekistirme_istasyonu',
      title: 'Bilgi Kutusu ve Pekiştirme İstasyonu-2: Dallanmış Ağaç',
      badge: 'Pekiştirme 2',
      prompt: '1. İfade: "Devre elemanlarının sembollerle gösterimi ortak bilimsel bir dil oluşmasını sağlar." (D/Y?)\n2. İfade: "Bağlantı kablosunun belirli bir sembolü yoktur." (D/Y?)\n3. İfade: "Pil yatağının belirli bir sembolü yoktur." (D/Y?)\nEtkinlik hatasız tamamlandığında hangi çıkışa ulaşılır?',
      interactiveAnswer: 'DOĞRU YOL ANALİZİ:\n1. İfade: Devre elemanlarının sembollerle gösterimi ortak bilimsel dil sağlar ➔ DOĞRU (Sol dala gider).\n2. İfade: Bağlantı kablosunun sembolü düz çizgidir, "sembolü yoktur" ifadesi ➔ YANLIŞTIR (Sağ dala gider).\n3. İfade: Pil yatağının belirli bir sembolü yoktur ➔ DOĞRUDUR!\n➔ HEDEF: 3. ÇIKIŞA ULAŞILIR!',
      qrInfo: {
        title: 'EBA: Öz Değerlendirme Formu (s. 114)',
        description: 'Ders kitabının 114. sayfasındaki afiş ve poster çalışması değerlendirme karekodu.',
        type: 'evaluation'
      }
    },
    {
      id: 'ib-6-1-p116-118-etkinlik-sema-cizme',
      pageNumber: 'Sayfa 116-118',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu: Devre Şeması Çizme & Pekiştirme İstasyonu-3 (Eşleştirme)',
      badge: 'Şema & Eşleştirme',
      prompt: 'Sayfa 118 Pekiştirme-3 Soruları (a, b, c, ç, d, e kutuları):\n1. Hangi kutularda devre şemaları vardır?\n2. Hangi devre şemalarındaki ampuller ışık verir?\n3. Hangi şemada ampul sayısı daha fazladır?\n4. Hangi düzenekte pil sayısı daha fazladır?\n5. Devre düzenekleri ile şemalarını eşleştiriniz.',
      interactiveAnswer: '1. Devre Şeması Olanlar: b, ç, e kutularıdır.\n2. Ampulü Yanan Şemalar: Anahtarı kapalı olan b kutusundaki devre ışık verir. (ç ve e’de anahtar açıktır, akım geçmez).\n3. Ampul Sayısı Fazla Olan Şema: ç kutusu (2 ampul).\n4. Pil Sayısı Fazla Olan Düzenek: d kutusu (2 pil).\n5. Eşleştirmeler: a düzeneği ➔ e şeması, c düzeneği ➔ ç şeması, d düzeneği ➔ b şeması.',
      qrInfo: {
        title: 'EBA: "Devre Şemaları" Etkileşimli İçeriği (s. 117)',
        description: 'Ders kitabının 117. sayfasındaki EBA sanal devre laboratuvarı.',
        type: 'interactive'
      }
    },
    {
      id: 'ib-6-1-p119-121-pekistirme4-5',
      pageNumber: 'Sayfa 119-121',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu-4 & 5: El Feneri Şeması ve Çoklu Devre Çizimleri',
      badge: 'Şema Çizimi',
      prompt: '1. Sayfa 119: 3 pilli, 1 ampullü ve kayar anahtarlı el fenerinin devre şemasını çiziniz.\n2. Sayfa 120 ve 121: 2 ampul, 2 pil, 1 açık anahtar devresi ile 2 ampul, 1 pil, 1 kapalı anahtar devresi eleman sayıları tablosunu doldurunuz.',
      interactiveAnswer: '1. EL FENERİ ŞEMASI: Seri bağlı 3 pil (—|ı—|ı—|ı—), bağlantı kablosu, 1 adet açık/kapalı anahtar ve 1 adet ampul (—⊗—) sembollerinden oluşan tek döngülü kapalı şemadır.\n2. DEVRE ELEMANLARI SAYILARI TABLOSU:\n• a Devresi: 2 Pil, 2 Ampul, 1 Açık Anahtar, Bağlantı kablosu. (Anahtar açık olduğu için ampuller yanmaz).\n• b Devresi: 1 Pil, 2 Ampul, 1 Kapalı Anahtar, Bağlantı kablosu. (Anahtar kapalı olduğu için ampuller ışık verir).\n• 3 Pil, 4 Ampul, 1 Kapalı Anahtarlı Şema: 3 pil seri dizilir, 4 ampul seri bağlanır ve anahtar kapalı olarak devre tamamlanır.'
    }
  ],
  'unit6-sub2': [
    {
      id: 'ib-6-2-p122-baslik-hazirlik',
      pageNumber: 'Sayfa 122',
      type: 'hazirlik_istasyonu',
      title: 'AMPUL PARLAKLIĞINI ETKİLEYEN DEĞİŞKENLER: Hazırlık İstasyonu',
      badge: 'Hazırlık İstasyonu',
      prompt: 'Elektrik devrelerinde ampul parlaklığı değiştirilebilir mi? Günlük hayatta böyle bir durumla karşılaştınız mı?',
      interactiveAnswer: 'Evet, değiştirilebilir. Örneğin pilleri zayıflayan el fenerinin ışığı sönükleşir, yeni ve daha fazla pil takıldığında ise çok daha parlak yanar. Evlerdeki dimmerli lambalarla da parlaklık ayarlanabilir.'
    },
    {
      id: 'ib-6-2-p123-124-etkinlik-parlaklik-degiskenler',
      pageNumber: 'Sayfa 123-124',
      type: 'etkinlik_istasyonu',
      title: 'Etkinlik İstasyonu: Ampul Parlaklığı Nasıl Değişir? & Değişkenler',
      badge: 'Bilimsel Değişkenler',
      prompt: '1. DURUM: Ampul sayısı sabit tutulup pil sayısı artırılırsa:\n• Bağımsız Değişken: ?\n• Bağımlı Değişken: ?\n• Kontrol Edilen Değişken: ?\n\n2. DURUM: Pil sayısı sabit tutulup ampul sayısı artırılırsa:\n• Bağımsız Değişken: ?\n• Bağımlı Değişken: ?\n• Kontrol Edilen Değişken: ?',
      interactiveAnswer: '1. DURUM ANALİZİ (Pil Sayısı Değişimi):\n• Bağımsız Değişken: Pil sayısı (Araştırmacının değiştirdiği etken)\n• Bağımlı Değişken: Ampul parlaklığı (Sonuç: Parlaklık ARTAR)\n• Kontrol Edilen Değişken: Ampul sayısı, kablo cinsi ve anahtar durumu\n\n2. DURUM ANALİZİ (Ampul Sayısı Değişimi):\n• Bağımsız Değişken: Ampul sayısı\n• Bağımlı Değişken: Ampul parlaklığı (Sonuç: Enerji paylaşıldığı için parlaklık AZALIR)\n• Kontrol Edilen Değişken: Pil sayısı, kablo cinsi ve anahtar durumu'
    },
    {
      id: 'ib-6-2-p125-bilgi-livermore-ampul',
      pageNumber: 'Sayfa 125',
      type: 'bilgi_istasyonu',
      title: 'Bilgi İstasyonu: 120 Yıldır Sönmeyen Asırlık Ampul (Livermore)',
      badge: 'Bilgi İstasyonu',
      content: 'ABD’nin Livermore İtfaiye İstasyonu’nda bulunan el yapımı karbon filamanlı bir ampul, 1901 yılından bu yana aralıksız yanmaktadır. Guinness Rekorlar Kitabı’na giren bu ampul, bir asrı aşkın süredir kısa elektrik kesintileri dışında hiç sönmemiştir. Günümüzde yaydığı ışık miktarı ilk güne göre azalsa da hâlâ gece lambası gibi ışık vermeye devam etmektedir.',
      qrInfo: {
        title: 'EBA: "Ampul Parlaklığını Etkileyen Değişkenler" ve "Devre" Klibi (s. 125)',
        description: 'Ders kitabının 125. sayfasındaki simülasyon ve şarkı klibi.',
        type: 'video'
      }
    },
    {
      id: 'ib-6-2-p126-bilgikutusu-parlaklik-kurallari',
      pageNumber: 'Sayfa 126',
      type: 'bilgi_kutusu',
      title: 'Bilgi Kutusu & Köprü İstasyonu: Parlaklık Kuralları ve El Fenerleri',
      badge: 'Temel Kurallar',
      content: 'AMPUL PARLAKLIĞI TEMEL KURALLARI:\n1. PİL SAYISI ETKİSİ: Ampul sayısı sabitken bir devreye pil eklendikçe devreye sağlanan elektrik enerjisi artar ve AMPULLER DAHA PARLAK YANAR.\n2. AMPUL SAYISI ETKİSİ: Pil sayısı sabitken devreye ampul eklendikçe üretilen enerji ampuller arasında paylaşılır ve AMPULLERİN PARLAKLIĞI AZALIR.\n\nKÖPRÜ İSTASYONU (s. 126):\nİçinde 1 pil bulunan el fenerine göre, özdeş 2 veya 3 pil bulunan el fenerinin ampulü çok daha parlak ışık saçar.'
    },
    {
      id: 'ib-6-2-p127-129-pekistirme-sorulari',
      pageNumber: 'Sayfa 127-129',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu-1, 2 ve 3: Devre Karşılaştırma Analizleri',
      badge: 'Pekiştirme 1-3',
      prompt: 'K, L, M, N Devreleri (s. 129):\n• K: 1 pil, 3 ampul\n• L: 1 pil, 1 ampul\n• M: 3 pil, 1 ampul\n• N: 1 pil, 3 ampul\nSorular:\n1. Ampul parlaklığı en fazla olan devre hangisidir?\n2. Ampul parlaklığı en az olan devre hangisidir?\n3. Ampul sayısının etkisini araştırmak için hangi iki devre seçilmelidir?\n4. Pil sayısının etkisini araştırmak için hangi iki devre seçilmelidir?',
      interactiveAnswer: '1. En Parlak Devre: [M Devresi] (3 pil tek bir ampule bağlıdır).\n2. En Sönük Devre: [K ve N Devreleri] (1 pil 3 ampule bölünmüştür).\n3. Ampul Sayısının Etkisini Araştırmak İçin: [L ve K Devreleri] seçilmelidir. (Pil sayıları 1 olarak sabittir, ampul sayısı 1’den 3’e çıkarılmıştır).\n4. Pil Sayısının Etkisini Araştırmak İçin: [L ve M Devreleri] seçilmelidir. (Ampul sayıları 1 olarak sabittir, pil sayısı 1’den 3’e çıkarılmıştır).'
    },
    ...unit6EndItems
  ],
  'unit6-end': unit6EndItems
};

const unit7EndItems: InteractiveBookItem[] = [
  {
    id: 'ib-7-end-p156-bosluk-doldurma',
    pageNumber: 'Sayfa 156',
    type: 'on_degerlendirme',
    title: '7. Ünite Sonu İstasyonu - A: Boşluk Doldurma (1-15)',
    badge: 'Ünite Sonu A',
    prompt: 'Kutudaki kelimelerle doldurunuz (yeniden, domates, karton, atık yönetimi, kızartma yağları, kaynakların, teneke kutu, Sıfır Atık, sürdürülebilir, çöp, ağaçlar, katı atık, çevre, toprak, tasarruf, atık).',
    interactiveAnswer: '1. Mobilyaların tamir edilmesi ve elbiselerin bağışlanması [YENİDEN] kullanım örneklerindendir.\n2. Kullanılmış gazete, defter ve kitap gibi maddeler [KATI ATIK] grubunda yer alır.\n3. İsrafın önlenmesini amaçlayan proje [SIFIR ATIK] Projesi’dir.\n4. Sıvı atıklara kullanılmış [KIZARTMA YAĞLARI] örnek verilebilir.\n5. Geri dönüştürülemeyen atıklar [ÇÖP] grubundadır.\n6. Bakır cezve, plastik oyuncaklar ve [TENEKE KUTU] geri dönüşümü olan maddelerdendir.\n7. Atık yönetimi [SÜRDÜRÜLEBİLİR] yaşam için önemlidir.\n8. Kömür külü, bozulmuş süt ve çürümüş [DOMATES] geri dönüşümü olmayan atıklardır.\n9. Kâğıt atıkların geri dönüşümü sayesinde [AĞAÇLAR] korunmuş olur.\n10. Geri dönüşüm enerjiden [TASARRUF] sağlar.\n11. Sıfır atık sürecinde ilk adım [ATIK] oluşumunun azaltılmasıdır.\n12. Bitkisel atık yağlar Çevre Bakanlığının verdiği [ATIK YÖNETİMİ] lisansı almış işletmelerce toplanmalıdır.\n13. Çevrenin korunmasına [GERİ DÖNÜŞÜM] uygulamaları katkıda bulunur.\n14. Geri dönüşüm, doğal [KAYNAKLARIN] korunmasına katkıda bulunur.\n15. Tehlike oluşturacak atık maddeler [TOPRAK], su ve kanalizasyona dökülmemelidir.'
  },
  {
    id: 'ib-7-end-p157-acik-uclu',
    pageNumber: 'Sayfa 157',
    type: 'on_degerlendirme',
    title: '7. Ünite Sonu İstasyonu - B: Açık Uçlu Değerlendirme (1-6)',
    badge: 'Ünite Sonu B',
    prompt: '1. Atıkların kaynağında ayrıştırılmasının avantajları nelerdir?\n2. İleri dönüşüm ile geri dönüşüm farkları nelerdir?\n3. Atık kızartma yağları evlerden nasıl uzaklaştırılmalıdır?\n4. Yeniden kullanıma 1 örnek veriniz.\n5. Sıfır Atık Projesi’nin israfı önlemeye katkısı nedir?\n6. Geri dönüşümün sağladığı 3 avantajı yazınız.',
    interactiveAnswer: '1. Atıkların kirlenmesini önler, geri dönüşüm kalitesini artırır, iş gücü, taşıma ve ayrıştırma enerjisinden tasarruf sağlar.\n2. Geri dönüşümde malzeme eritilerek ham maddeye çevrilir. İleri dönüşümde ise atık dönüştürülmeden doğrudan işlenerek daha estetik, değerli bir sanat veya kullanım eşyasına çevrilir.\n3. Asla lavaboya veya çöpe dökülmemeli; cam/plastik sızdırmaz şişelerde biriktirilip belediyelerin atık yağ toplama kumbaralarına teslim edilmelidir.\n4. Cam kavanozların yıkanıp içine salça, baharat veya kışlık konserve konulması.\n5. İhtiyaç fazlası tüketimi engeller, porsiyon ve ambalaj israfını bitirir, ham madde tasarrufu sağlar.\n6. Üç Büyük Avantaj:\n• Ağaçların kesilmesini ve doğal kaynakların tükenmesini önler.\n• Enerji ve su tasarrufu sağlar.\n• Çevre kirliliğini ve sera gazı salınımını azaltır.',
    qrInfo: {
      title: 'EBA: 7. Ünite Ölçme ve Değerlendirme Karekodu (s. 157)',
      description: 'Ders kitabının 157. sayfasındaki MEB EBA test ve değerlendirme içeriği.',
      type: 'evaluation'
    }
  },
  {
    id: 'ib-7-end-p158-beceri-kazanim-tablosu',
    pageNumber: 'Sayfa 158',
    type: 'on_degerlendirme',
    title: '7. Ünite Sonu İstasyonu - C: Biner Ton Geri Dönüşüm Kazanım Tablosu',
    badge: 'Beceri Temelli',
    prompt: 'Tablo Verileri (Biner ton için):\n• Plastik: 16.300 varil petrol, 5.774.000 kWh enerji tasarrufu\n• Cam: 1.200 kg ham madde, 42.000 kWh enerji tasarrufu\n• Kâğıt: 17.000 kesilmekten kurtarılan ağaç, 4.100.000 kWh enerji tasarrufu\n• Metal: 1.300 kg ham madde, 642.000 kWh enerji tasarrufu\n\n1. En çok enerji tasarrufu sağlanan malzeme hangisidir?\n2. Tabloya göre hangi yorum yanlıştır? (A: Plastik önemli, B: Farklı ham maddeler korunur, C: Plastik metallerden çok enerji tasarrufu sağlar, D: Camda enerji tasarrufu az diye geri dönüşümü gereksizdir)',
    interactiveAnswer: '1. Soru Çözümü: 5.774.000 kWh enerji tasarrufu ile en çok enerji tasarrufu sağlayan malzeme PLASTİK (Plastik şişe)tir. (Doğru Cevap: A)\n2. Soru Çözümü: Cam geri dönüşümü sonsuz kez yapılabilir, kum kaynaklarını korur ve çevre temizliği sağlar. Enerji tasarrufu az diye camın geri dönüşümünün gereksiz olduğunu söylemek tamamen YANLIŞTIR. (Doğru Cevap: D)'
  },
  {
    id: 'ib-7-end-p159-cagini-asanlar',
    pageNumber: 'Sayfa 159',
    type: 'cagini_asanlar',
    title: 'Çağını Aşanlar: Çevre ve Geri Dönüşüm Öncüleri (s. 159)',
    badge: 'Çağını Aşanlar',
    content: '• MEVLANA: Kaynakların sınırsız olmadığını, aşırı tüketim ve israfın insanlığı ve doğayı felakete sürükleyeceğini asırlar öncesinden öğütlemiştir.\n• İBNİ HALDUN: İnsan ile çevre arasındaki dengenin medeniyetlerin yükseliş ve çöküşündeki belirleyici rolünü açıklamış, çevre bilincini vurgulamıştır.\n• BENJAMIN LAW (1813): Eski giysi ve kumaş artıklarını liflerine ayırarak dünyada ilk tekstil geri dönüşüm sistemini geliştirmiştir.\n• AUGUST FERDINAND MÖBIUS: Bir yüzeyi diğerine bağlayan sonsuz döngülü "Möbius Şeridi"ni matematiksel olarak keşfetmiş; bu şekil günümüzdeki evrensel 3 oklu yeşil geri dönüşüm logosunun ilham kaynağı olmuştur.'
  },
  {
    id: 'ib-7-end-p160-161-bilim-guncesi',
    pageNumber: 'Sayfa 160-161',
    type: 'bilgi_istasyonu',
    title: 'Bilim Güncesi: Çöp Kutumuzdaki Hazine & Sıfır Atık Günlüğü (s. 160-161)',
    badge: 'Bilim Güncesi',
    content: 'ÖĞRENCİ BAKIŞIYLA ÖZET:\n• Evimizdeki çöp kutusuna baktığımda atılan şeylerin çoğunun çöp değil, geri dönüştürülebilir kâğıt, cam ve plastik olduğunu anladım.\n• Büyükannemle eski kot pantolonumdan fırın eldiveni ve şık bir çanta yaptık; bu ileri dönüşüm hem çok eğlenceliydi hem de yeni bir ürün satın almaktan kurtardı.\n• Artık 4 yaşındaki kardeşim bile meyve suyunu içtikten sonra kutusunu mavi geri dönüşüm kutusuna atıyor. Kaynaklarımızı korumak ve gelecek nesillere temiz bir vatan bırakmak hepimizin görevidir!'
  }
];

export const unit7TekrarDizaynFlow: Record<string, InteractiveBookItem[]> = {
  'unit7-sub1': [
    {
      id: 'ib-7-1-p136-137-kapak',
      pageNumber: 'Sayfa 136-137',
      type: 'karekod',
      title: '7. Ünite Girişi: SÜRDÜRÜLEBİLİR YAŞAM VE GERİ DÖNÜŞÜM',
      badge: 'Ünite Giriş',
      qrInfo: {
        title: '7. Ünite Tanıtım ve Özet E-İçerik Karekodu (EBA)',
        description: 'Ders kitabının 137. sayfasında yer alan 7. Ünite "Sürdürülebilir Yaşam ve Geri Dönüşüm" EBA video karekodları.',
        type: 'video'
      },
      content: 'İÇERİK ÇERÇEVESİ: Evsel Atıklar ve Geri Dönüşüm.\nANAHTAR KAVRAMLAR: Evsel atık, yeniden kullanım, atık yönetimi, geri kazanım, geri dönüşüm, ileri dönüşüm, sıfır atık hiyerarşisi, uzaklaştırma.\nHATIRLAYALIM: Geri dönüşüm ve sürdürülebilirlik kavramlarını öğrenmiştiniz.'
    },
    {
      id: 'ib-7-1-p138-on-deg',
      pageNumber: 'Sayfa 138',
      type: 'on_degerlendirme',
      title: 'Ön Değerlendirme İstasyonu: Sürdürülebilirlik ve Geri Dönüşüm Soruları',
      badge: 'Ön Değerlendirme',
      prompt: 'a. Günlük hayatta hangi atıklarla karşılaşıyorsunuz?\nb. Çevrenizdeki atıklar nasıl uzaklaştırılmalıdır?\nc. Geri dönüşümün sürdürülebilirliğe katkısı nedir?\nç. Kaynak kavramı nedir?\nd. Geri dönüşüm nedir, hangi malzemeler dönüştürülebilir?\ne. Geri dönüşümün amacı nedir?\nf. Çevrenizde geri dönüşümle ilgili yapılan çalışmalar nelerdir?\ng. Bireysel olarak neler yapabilirsiniz?',
      interactiveAnswer: 'a. Plastik şişeler, kâğıt, cam kavanoz, alüminyum kutu, yemek artıkları, atık piller.\nb. Türlerine göre evde kaynağında ayrı kutularda toplanmalı ve belediye geri dönüşüm kutularına atılmalıdır.\nc. Doğal ham madde ihtiyacını azaltır, ağaçların kesilmesini, enerji ve su israfını önler.\nç. İnsan ihtiyaçlarını karşılamada kullanılan doğadaki tüm maddesel varlıklar (su, orman, madenler, petrol).\nd. Kullanım dışı kalmış atıkların fiziksel ve kimyasal işlemlerle tekrar ham maddeye dönüştürülmesidir (Cam, metal, plastik, kâğıt).\ne. Doğal kaynakları korumak, çevre kirliliğini önlemek ve ülke ekonomisine katkı sağlamak.\nf. Sıfır Atık kutuları, atık pil toplama noktaları, mobil atık getirme merkezleri.\ng. Bez çanta kullanmak, atıkları evde ayrıştırmak, israftan kaçınmak ve tek kullanımlık plastikleri reddetmek.'
    },
    {
      id: 'ib-7-1-p139-140-baslik-ve-etkinlik',
      pageNumber: 'Sayfa 139-140',
      type: 'hazirlik_istasyonu',
      title: 'EVSEL ATIKLAR VE GERİ DÖNÜŞÜM: Hazırlık & Atıkların Nitelendirilmesi',
      badge: 'Hazırlık & Etkinlik',
      prompt: 'HAZIRLIK (s. 139): Atıkların uygun kutulara atılmasının faydaları nelerdir?\n\nETKİNLİK (s. 140): Verilen atıkları sınıflandırınız:\na. Besin artıkları, b. Kullanılmış su şişesi, c. Maden suyu şişesi, ç. Kumaş parçaları, d. Kuruyemiş kabukları, e. Alüminyum içecek kutusu, f. Plastik deterjan kabı, g. Cam turşu kavanozu.',
      interactiveAnswer: '• HAZIRLIK CEVABI: Atıkların birbirini kirletmesini önler, geri dönüşüm sürecini hızlandırır, iş gücü ve enerji tasarrufu sağlar.\n• GERİ DÖNÜŞTÜRÜLEBİLEN ATIKLAR: b (Plastik su şişesi), c (Cam maden suyu şişesi), e (Alüminyum içecek kutusu), f (Plastik deterjan kabı), g (Cam turşu kavanozu).\n• GERİ DÖNÜŞTÜRÜLEMEYEN / ÇÖP: a (Besin artıkları - kompost yapılabilir), ç (Kumaş parçaları), d (Kuruyemiş kabukları).'
    },
    {
      id: 'ib-7-1-p141-142-pekistirme1-atiklar',
      pageNumber: 'Sayfa 141-142',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu-1 (Geri Dönüşümü Mümkün Olan ve Olmayan Maddeler)',
      badge: 'Pekiştirme 1',
      prompt: '12 maddeyi gruplandırınız: 1. Alüminyum içecek kutusu, 2. Pil, 3. Cam şişe, 4. Çürümüş domates, 5. Plastik tarak, 6. Bozulmuş süt, 7. Eskimiş defter, 8. Gazete, 9. Kömür külü, 10. Araba aküsü, 11. Küflenmiş ekmek, 12. Eskimiş battaniye.',
      interactiveAnswer: '• GERİ DÖNÜŞTÜRÜLEBİLEN MADDELER: 1 (Alüminyum kutu), 2 (Pil - özel geri dönüşüm), 3 (Cam şişe), 5 (Plastik tarak), 7 (Eskimiş defter), 8 (Gazete), 10 (Araba aküsü).\n• GERİ DÖNÜŞTÜRÜLEMEYEN (ÇÖP) MADDELER: 4 (Çürümüş domates), 6 (Bozulmuş süt), 9 (Kömür külü), 11 (Küflenmiş ekmek), 12 (Eskimiş battaniye).'
    },
    {
      id: 'ib-7-1-p143-bilgikutusu-renkli-kutular',
      pageNumber: 'Sayfa 143',
      type: 'bilgi_kutusu',
      title: 'Bilgi Kutusu: Geri Dönüşüm Kutularının Renkleri, Piller ve Atık Yağlar',
      badge: 'Renk Kodları',
      content: 'GERİ DÖNÜŞÜM KUTULARI RENK STANDARDI:\n• SARI KUTU: Plastik atıklar (şişe, bidon, kapaklar, kova).\n• YEŞİL KUTU: Cam atıklar (şişe, kavanoz, tabak, bardak).\n• MAVİ KUTU: Kâğıt atıklar (kitap, defter, karton, gazete).\n• GRİ KUTU: Metal atıklar (teneke kutu, alüminyum folyo, çatal, konserve).\n\nÖZEL ATIKLAR:\n• ATIK PİLLER: Kırmızı renkli atık pil kutularında toplanmalıdır. Cıva ve kurşun gibi zehirli ağır metallerin toprağa ve yer altı sularına karışması engellenir.\n• BİTKİSEL ATIK YAĞLAR: Kesinlikle lavaboya dökülmemelidir! 1 litre atık yağ 1 milyon litre temiz içme suyunu kirletir. Sızdırmaz kaplarda biriktirilerek lisanslı toplama noktalarına teslim edilmelidir.'
    },
    {
      id: 'ib-7-1-p144-bilgi-ve-kopru-sistemler',
      pageNumber: 'Sayfa 144',
      type: 'bilgi_istasyonu',
      title: 'Bilgi İstasyonu: Kendini Yenileyen Plastik & Köprü İstasyonu: Atık Takip Sistemleri',
      badge: 'Teknoloji & Köprü',
      content: 'BİLGİ İSTASYONU: KENDİNİ YENİLEYEN PLASTİK:\nBilim insanları çizildiğinde veya kırıldığında kendi moleküler bağlarını ısı ve ışıkla onarabilen akıllı plastikler geliştirmektedir. Bu sayede plastik eşyaların kullanım ömrü uzatılarak atık oluşumu kaynağında azaltılmaktadır.\n\nKÖPRÜ İSTASYONU (s. 144):\nÇevre, Şehircilik ve İklim Değişikliği Bakanlığı Atık Beyan Sistemi (TABS), Mobil Atık Takip (MoTAT) ve Kütle Denge Sistemi (KDS) ile tüm endüstriyel atıkları dijital olarak takip etmektedir.',
      qrInfo: {
        title: 'EBA: "Kendini Yenileyen Plastik" Videosu (s. 144)',
        description: 'Ders kitabının 144. sayfasındaki video içeriği.',
        type: 'video'
      }
    },
    {
      id: 'ib-7-1-p145-bilgikutusu-kultur-ecodrone',
      pageNumber: 'Sayfa 145',
      type: 'karekod',
      title: 'Bilgi Kutusu: İsraf Karşıtı Kültürümüz & "Ecodrone Sahilde" Karekodu',
      badge: 'Kültür & Karekod',
      qrInfo: {
        title: 'EBA: "Ecodrone Sahilde" Etkileşimli İçeriği (s. 145)',
        description: 'Ders kitabının 145. sayfasındaki çevre simülasyonu.',
        type: 'interactive'
      },
      content: 'KÜLTÜRÜMÜZDE ÇEVRE VE İSRAF:\n• Türk-İslam kültüründe ekmeğe, suya ve toprağa hürmet esastır. Nimetlerin israf edilmesi asla hoş karşılanmaz.\n• "Aslan yattığı yerden belli olur" ve "Temiz avlu evin süsüdür" sözleri çevre ahlakını gösterir. Tarihte Osmanlı şehirlerini gezen yabancı seyyahlar, sokakların ve hanların temizliğine, kuş evlerine ve imaretlere hayran kalmışlardır.'
    },
    {
      id: 'ib-7-1-p146-148-etkinlik-ve-pekistirme2',
      pageNumber: 'Sayfa 146-148',
      type: 'pekistirme_istasyonu',
      title: 'Etkinlik ve Pekiştirme İstasyonu-2: 19 Milyon Öğrenci Pet Şişe Analizi',
      badge: 'Matematiksel Analiz',
      prompt: 'Türkiye’deki yaklaşık 19 milyon öğrencinin her biri günde 1 pet şişe atık oluşturduğunda 1 ayda (30 günde) kaç pet şişe birikir?\nBu pet şişelerin geri dönüşümünün ülke kaynaklarına katkısı ne olur?',
      interactiveAnswer: 'HESAPLAMA VE KAZANIM:\n• 1 Günde: 19.000.000 pet şişe\n• 1 Ayda (30 Gün): 19.000.000 × 30 = 570 MİLYON ADET PET ŞİŞE!\n• ÜLKE KAYNAKLARINA KATKISI:\n1. Milyonlarca varil ham petrol tasarrufu sağlanır (plastik petrolden üretilir).\n2. Çöplüklere ve denizlere gidecek yüz binlerce ton plastik kirliliği önlenir.\n3. Geri dönüştürülen plastiklerden tekstil lifleri (polar montlar, kumaşlar) ve yeni ürünler üretilerek ekonomiye milyarlarca lira katma değer kazandırılır.'
    },
    {
      id: 'ib-7-1-p149-150-bilgi-sifir-atik-piramidi',
      pageNumber: 'Sayfa 149-150',
      type: 'bilgi_istasyonu',
      title: 'Bilgi İstasyonu: Sıfır Atık Hiyerarşisi Piramidi (En Öncelikliden En Sona)',
      badge: 'Sıfır Atık Hiyerarşisi',
      content: 'SIFIR ATIK HİYERARŞİSİ (Görsel 7.1.10):\n1. ÖNLEME (En Öncelikli Seçenek): Atık oluşumunu daha en baştan önlemek (Örn: Bez torba ile alışveriş yapmak).\n2. AZALTMA: İhtiyaç fazlası tüketimden kaçınmak, tek kullanımlık ürünleri azaltmak.\n3. TEKRAR KULLANIM: Bir eşyayı atmadan aynı amaçla tekrar tekrar kullanmak.\n4. GERİ DÖNÜŞÜM: Atığı fabrikada eritip yeniden ham madde yapmak.\n5. ENERJİ GERİ KAZANIMI: Dönüştürülemeyen atıkları yakarak biyogaz veya elektrik üretmek.\n6. BERTARAF (En Son İstenmeyen Seçenek): Düzenli depolama sahalarına gömmek.'
    },
    {
      id: 'ib-7-1-p151-153-bilgikutusu-ileri-donusum-klip',
      pageNumber: 'Sayfa 151-153',
      type: 'karekod',
      title: 'Bilgi Kutusu: İleri Dönüşüm (Upcycling) & "Geri Dönüşüm" Şarkı Klibi',
      badge: 'İleri Dönüşüm & Klip',
      qrInfo: {
        title: 'EBA: "Geri Dönüşüm" Müzik Klibi (s. 153)',
        description: 'Ders kitabının 153. sayfasındaki "Geri Dönüşüm" şarkısı ve klibi.',
        type: 'video'
      },
      content: 'KAVRAM FARKLARI:\n• GERİ DÖNÜŞÜM: Atık maddenin eritilip sanayide ham maddeye dönüştürülmesidir (Cam kırığından yeni şişe yapılması).\n• İLERİ DÖNÜŞÜM (Upcycling): Atık malzemelerin sanat veya tasarım yoluyla DAHA YÜKSEK DEĞERDE ve estetik yeni bir ürüne dönüştürülmesidir (Eski kottan fırın eldiveni veya çanta yapılması, pet şişe kapaklarından balık mozaiği sanat eseri yapılması - s. 153).\n• YENİDEN KULLANIM: Eski sandalyenin tamir edilip boyanarak aynı amaçla kullanılmaya devam edilmesidir.'
    },
    {
      id: 'ib-7-1-p154-155-bulmaca',
      pageNumber: 'Sayfa 154-155',
      type: 'pekistirme_istasyonu',
      title: 'Pekiştirme İstasyonu-4: Sıfır Atık ve Geri Dönüşüm Bulmacası',
      badge: 'Bulmaca Çözümü',
      prompt: 'Bulmaca Soruları (s. 155):\n1. Üretim amaçları ile aynı ya da benzer amaçla tekrar kullanılmasıdır.\n2. Ham madde olarak üretim sürecine tekrar katılmasıdır.\n3. Kaynakların verimli kullanılması projesinin adıdır.\n4. Atıkların daha yüksek değere sahip yeni ürünlere dönüştürülme sürecidir.\n5. Deterjanlı su ve sıvı yağların yer aldığı atık grubudur.\n6. Yaşam alanlarında oluşan atıkların genel adıdır.\n7. Cam, metal, kâğıt, plastik gibi atıkların yer aldığı atık grubudur.',
      interactiveAnswer: 'BULMACA CEVAPLARI:\n1. YENİDEN KULLANIM\n2. GERİ KAZANIM\n3. SIFIR ATIK\n4. İLERİ DÖNÜŞÜM\n5. SIVI ATIK\n6. EVSEL ATIK\n7. KATI ATIK',
      qrInfo: {
        title: 'EBA: "Geri Dönüşümün Sanat Yolculuğu" Videosu (s. 154)',
        description: 'Ders kitabının 154. sayfasındaki sanat ve çevre video içeriği.',
        type: 'video'
      }
    },
    ...unit7EndItems
  ],
  'unit7-end': unit7EndItems
};

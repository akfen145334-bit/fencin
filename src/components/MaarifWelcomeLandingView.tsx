import React from 'react';
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Layers,
  CheckCircle2,
  QrCode,
  PenTool,
  Clock,
  ShieldCheck,
  ArrowRight,
  Atom,
  Flame,
  Globe2,
  Award,
  CheckCheck
} from 'lucide-react';

interface Props {
  onSelectGrade: (grade: number) => void;
  currentGrade?: number;
}

export const MaarifWelcomeLandingView: React.FC<Props> = ({ onSelectGrade, currentGrade }) => {
  const gradeOptions = [
    {
      grade: 5,
      title: '5. Sınıf Fen Bilimleri',
      subtitle: 'Türkiye Yüzyılı Maarif Modeli',
      booksInfo: '1. ve 2. Kitap (7 Ünite Tam Uyumlu)',
      pagesInfo: '322 Sayfa • Sayfa Sayfa İnteraktif İstasyonlar',
      badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      description: 'Güneş, Dünya ve Ay, Kuvvet, Canlılar Dünyası, Işığın Dünyası, Maddenin Doğası, Elektrik ve Geri Dönüşüm.',
      highlights: ['152 Sayfa 1. Kitap (3 Ünite)', '170 Sayfa 2. Kitap (4 Ünite)', 'Açılır-Kapanır Cevap Kutuları', '20 LGS Mantık Sorusu']
    },
    {
      grade: 6,
      title: '6. Sınıf Fen Bilimleri',
      subtitle: 'Türkiye Yüzyılı Maarif Modeli',
      booksInfo: '1. ve 2. Kitap (7 Ünite Tam Uyumlu)',
      pagesInfo: '314 Sayfa • Tekrar Dizayn Tescilli',
      badgeBg: 'bg-teal-100 text-teal-800 border-teal-300',
      description: 'Güneş Sistemi & Tutulmalar, Kuvvet ve Hareket, Canlılarda Sistemler, Işığın Yansıması & Renkler, Maddenin Özellikleri, Elektrik ve Biyoçeşitlilik.',
      highlights: ['184 Sayfa 1. Kitap (4 Ünite)', '130 Sayfa 2. Kitap (3 Ünite)', 'Gravzant Halkası & Reosta', 'Tüm EBA Karekodları']
    },
    {
      grade: 7,
      title: '7. Sınıf Fen Bilimleri',
      subtitle: 'Türkiye Yüzyılı Maarif Modeli',
      booksInfo: '1. ve 2. Kitap (7 Ünite Tam Uyumlu)',
      pagesInfo: '319 Sayfa • Tekrar Dizayn Tescilli',
      badgeBg: 'bg-indigo-100 text-indigo-800 border-indigo-300',
      description: 'Güneş Sistemi ve Ötesi, Hücre ve Bölünmeler, Kuvvet ve Enerji, Işığın Kırılması & Mercekler, Maddenin Doğası, Elektriklenme ve Sürdürülebilir Yaşam.',
      highlights: ['153 Sayfa 1. Kitap (3 Ünite)', '166 Sayfa 2. Kitap (4 Ünite)', 'İbnü’l-Heysem & Faraday', 'Sayfa Sayfa Çözümlü']
    },
    {
      grade: 8,
      title: '8. Sınıf Fen Bilimleri',
      subtitle: 'LGS Hazırlık & Maarif Formatı',
      booksInfo: 'LGS Odaklı Müfredat (7 Ünite)',
      pagesInfo: 'Kapsamlı Soru Bankası & Deneyler',
      badgeBg: 'bg-blue-100 text-blue-800 border-blue-300',
      description: 'Mevsimler ve İklim, DNA ve Genetik Kod, Basınç, Madde ve Endüstri, Basit Makineler, Enerji Dönüşümleri ve Çevre Bilimi.',
      highlights: ['LGS Beceri Temelli Sorular', 'Yeni Nesil Deney Analizleri', 'Sınav Odaklı Özetler', 'Akıllı Tahta Araçları']
    }
  ];

  return (
    <div className="space-y-8 py-2 animate-in fade-in duration-300 max-w-6xl mx-auto">
      
      {/* Hero Welcome Banner - Temel Dinî Bilgiler Teması */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-sm text-center space-y-4">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold tracking-wider uppercase">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>TÜRKİYE YÜZYILI MAARİF MODELİ • AKILLI TAHTA SİSTEMİ</span>
        </div>

        {/* Main Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 font-fredoka tracking-tight leading-tight">
          Yüzde 100 Maarif Uyumlu Fen Bilimleri Sitesine <span className="text-emerald-700">Hoş Geldiniz</span>
        </h1>

        {/* Prompt Message */}
        <p className="text-base sm:text-xl font-bold text-slate-700 max-w-2xl mx-auto leading-relaxed">
          Lütfen ders işlemek istediğiniz sınıf seviyesini seçiniz:
        </p>
      </div>

      {/* Grade Cards 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {gradeOptions.map(card => {
          const isSelected = currentGrade === card.grade;

          return (
            <div
              key={card.grade}
              onClick={() => onSelectGrade(card.grade)}
              className={`rounded-3xl p-6 sm:p-8 transition-all flex flex-col justify-between group cursor-pointer border ${
                isSelected
                  ? 'bg-white border-2 border-emerald-500 shadow-md ring-2 ring-emerald-400/30'
                  : 'bg-white hover:bg-slate-50/80 border-slate-200 hover:border-emerald-400 shadow-xs'
              }`}
            >
              <div className="space-y-4">
                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white font-black text-2xl flex items-center justify-center shadow-sm">
                      {card.grade}
                    </div>
                    <div>
                      <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${card.badgeBg}`}>
                        {card.subtitle}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-fredoka mt-0.5">
                        {card.title}
                      </h2>
                    </div>
                  </div>

                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                    {card.booksInfo}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {card.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {card.highlights.map((hl, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700 bg-slate-50 p-2 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">
                  {card.pagesInfo}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectGrade(card.grade);
                  }}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs"
                >
                  <span>Dersi Başlat</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info Banner */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-2">
          <CheckCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>
            Tüm sınıf ve ünitelerde akıllı tahta çizim kalemi, ders süreölçeri, öğrenci çarkı, EBA karekodları, açılır-kapanır cevap kutucukları ve <strong>Otomatik Soru & PDF Çıktı</strong> alma sistemi entegredir.
          </span>
        </div>
      </div>
    </div>
  );
};

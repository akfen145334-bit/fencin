import { Unit, SubTopic } from '../types/curriculum';

/**
 * Temizlenmiş alt konu başlığı üretir (Numara, sayfa ve ek parantezleri ayıklar)
 */
export function cleanSubTopicTitle(title: string): string {
  if (!title) return '';
  return title
    .replace(/^(\d+[\.\)]\s*(Bölüm:?)?\s*)/i, '') // "1. Bölüm: " veya "1. " kaldır
    .replace(/\(Kavramlar\s*&\s*LGS\)/gi, '')
    .replace(/\(Bölüm\s*\d+\)/gi, '')
    .replace(/\(Sayfa\s*[\d\-]+\)/gi, '')
    .replace(/\(1\.\s*Bölüm\)|\(2\.\s*Bölüm\)|\(3\.\s*Bölüm\)|\(4\.\s*Bölüm\)/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Aktif ünite ve alt konu için özel EBA arama ve içerik bağlantısını oluşturur.
 */
export function getSpecificEbaLink(
  grade: number = 8,
  unit?: Unit,
  subTopic?: SubTopic
): string {
  if (subTopic?.ebaUrl) {
    return subTopic.ebaUrl;
  }

  const cleanTitle = subTopic ? cleanSubTopicTitle(subTopic.title) : (unit?.title || 'Fen Bilimleri');
  const unitTitle = unit?.title || 'Fen Bilimleri';
  const effectiveGrade = unit?.grade || grade || 8;

  // Özel MEB EBA Arama terimi (Doğrudan ders, sınıf seviyesi ve alt konuyu hedefler)
  const searchQuery = `${effectiveGrade}. Sınıf Fen Bilimleri ${cleanTitle}`;
  return `https://www.eba.gov.tr/#/icerik-arama?kelime=${encodeURIComponent(searchQuery)}`;
}

export interface EbaResourceOption {
  id: string;
  title: string;
  subtitle: string;
  category: 'direct' | 'video' | 'test' | 'simulation' | 'portal';
  badge: string;
  url: string;
}

/**
 * Aktif alt konu için tüm ilgili EBA içerik bağlantı seçeneklerini listeler.
 */
export function getEbaResourceOptions(
  grade: number = 8,
  unit?: Unit,
  subTopic?: SubTopic
): EbaResourceOption[] {
  const cleanTitle = subTopic ? cleanSubTopicTitle(subTopic.title) : (unit?.title || 'Fen Bilimleri');
  const effectiveGrade = unit?.grade || grade || 8;
  const primaryUrl = getSpecificEbaLink(effectiveGrade, unit, subTopic);

  return [
    {
      id: 'primary-topic',
      title: `${cleanTitle} - EBA Konu İçerikleri`,
      subtitle: `MEB EBA platformunda ${effectiveGrade}. sınıf için hazırlanmış etkileşimli ders materyalleri`,
      category: 'direct',
      badge: 'Doğrudan Konu',
      url: primaryUrl
    },
    {
      id: 'videos-and-anims',
      title: `${cleanTitle} - Video & Animasyonlar`,
      subtitle: 'Konu anlatımları, deney videoları ve etkileşimli Maarif e-içerikleri',
      category: 'video',
      badge: 'Video & Deney',
      url: `https://www.eba.gov.tr/#/icerik-arama?kelime=${encodeURIComponent(`${effectiveGrade}. Sınıf ${cleanTitle} Video Deney`)}`
    },
    {
      id: 'tests-and-questions',
      title: `${cleanTitle} - EBA Kazanım Testleri & Sorular`,
      subtitle: 'MEB Ölçme ve Değerlendirme Genel Müdürlüğü / EBA testleri ve mantık muhakeme soruları',
      category: 'test',
      badge: 'Kazanım Testi',
      url: `https://www.eba.gov.tr/#/icerik-arama?kelime=${encodeURIComponent(`${effectiveGrade}. Sınıf ${cleanTitle} Test Soru`)}`
    },
    {
      id: 'interactive-simulations',
      title: `${cleanTitle} - Sanal Deney ve Simülasyonlar`,
      subtitle: 'Etkileşimli laboratuvar, animasyonlar ve sanal araçlar',
      category: 'simulation',
      badge: 'Simülasyon',
      url: `https://www.eba.gov.tr/#/icerik-arama?kelime=${encodeURIComponent(`${cleanTitle} Simülasyon Etkileşim`)}`
    },
    {
      id: 'eba-main-portal',
      title: 'EBA Ana Portalı (Giriş Ekranı)',
      subtitle: 'MEB Eğitim Bilişim Ağı öğretmen ve öğrenci giriş ekranı',
      category: 'portal',
      badge: 'EBA Portalı',
      url: 'https://www.eba.gov.tr'
    }
  ];
}

/**
 * Güvenli ve iFrame/popup dostu şekilde yeni sekmede link açma yardımcısı.
 */
export function openExternalUrlInNewTab(url: string): void {
  if (typeof window === 'undefined') return;
  try {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    console.error('Failed to open link:', err);
  }
}

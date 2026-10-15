import { Unit, SubTopic, InteractiveBookItem } from '../types/curriculum';
import { grade8InteractiveBookFlow } from './grade8/grade8InteractiveBookData';

export function getCompleteInteractiveBookFlow(unit: Unit, subTopic: SubTopic): InteractiveBookItem[] {
  if (!unit || !subTopic) return [];

  // 8. Sınıf interactive book flow
  if (unit.grade === 8 && grade8InteractiveBookFlow[subTopic.id]) {
    return grade8InteractiveBookFlow[subTopic.id];
  }

  // Fallback interactive stations if not already explicitly mapped
  return [
    {
      id: `${subTopic.id}-intro-1`,
      pageNumber: subTopic.pageRange || '1. İstasyon',
      title: `${subTopic.shortTitle} - Merak ve Keşif İstasyonu`,
      badge: 'Gözlem & Merak',
      type: 'merak_istasyonu',
      prompt: `${subTopic.title} konusuyla ilgili çevremizde gözlemlediğimiz temel olaylar ve merak ettiğimiz sorular nelerdir?`,
      content: `Kavramlar: ${subTopic.concepts.join(', ')}`,
      evaluationQuestions: [
        {
          question: `Bu bölümde hangi temel fen kazanımları hedeflenmektedir?`,
          answer: `${subTopic.concepts.slice(0, 3).join(', ')} kavramlarının günlük yaşam ve bilimsel deneylerle ilişkilendirilmesi hedeflenir.`
        }
      ],
      resultInfoBox: `Maarif Modeli kapsamında her istasyon öğrencinin doğrudan analiz, sentez ve bilimsel muhakeme yapmasını sağlar.`
    },
    {
      id: `${subTopic.id}-info-2`,
      pageNumber: subTopic.pageRange || '2. İstasyon',
      title: `${subTopic.shortTitle} - Bilgi ve Kavram İstasyonu`,
      badge: 'Bilgi İstasyonu',
      type: 'bilgi_istasyonu',
      prompt: `Konuyla ilgili temel kavram haritası ve ilkeler:`,
      content: subTopic.concepts.map(c => `• ${c}: İlgili fen ilkesi ve deney protokolüyle öğrenilir.`),
      interactiveAnswer: `Detaylı bilgi ve formüller konu özeti bölümünde interaktif şemalarla pekiştirilmiştir.`
    }
  ];
}

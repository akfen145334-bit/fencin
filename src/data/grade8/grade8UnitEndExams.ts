import { LgsQuestion } from '../../types/curriculum';
import { sebahattinMevsimlerQuestions, sebahattinIklimQuestions } from './sebahattinQuestions/unit1Questions';
import { sebahattinDnaQuestions } from './sebahattinQuestions/unit2Questions';
import { sebahattinBasitMakinelerQuestions } from './sebahattinQuestions/unit5Questions';
import { sebahattinEnerjiCevreQuestions } from './sebahattinQuestions/unit6Questions';

export const grade8Unit1End20Questions: LgsQuestion[] = [
  ...sebahattinMevsimlerQuestions.slice(0, 10),
  ...sebahattinIklimQuestions.slice(0, 10)
];

export const grade8Unit2End20Questions: LgsQuestion[] = [
  ...sebahattinDnaQuestions.slice(0, 20)
];

export const grade8Unit3End20Questions: LgsQuestion[] = [
  {
    id: 3001,
    subTopicId: 'g8-u3-sub1',
    contextTitle: 'Katı Basıncı ve Temas Yüzey Alanı',
    scenario: 'Özdeş tuğlalar sünger zemin üzerine farklı yüzeyleri temas edecek şekilde konuluyor.',
    questionPrompt: 'Buna göre tuğlaların süngere batma miktarları arasındaki ilişki hangi seçenekte doğru verilmiştir?',
    options: [
      { key: 'A', text: 'Temas yüzey alanı küçüldükçe basınç ve batma miktarı artar.' },
      { key: 'B', text: 'Tuğlaların ağırlığı değiştiği için batma miktarları farklıdır.' },
      { key: 'C', text: 'Yüzey alanı büyüdükçe süngere uygulanan toplam kuvvet artar.' },
      { key: 'D', text: 'Katı basıncı zemin cinsine bağlı olup yüzey alanından etkilenmez.' }
    ],
    correctAnswer: 'A',
    explanation: 'Katı basıncı ağırlıkla doğru, temas yüzey alanıyla ters orantılıdır.',
    skillTag: 'Bilimsel Çıkarım'
  },
  {
    id: 3002,
    subTopicId: 'g8-u3-sub2',
    contextTitle: 'Sıvı Basıncı ve Derinlik İlişkisi',
    scenario: 'Aynı cins sıvı ile doldurulan silindirik bir kabın farklı derinliklerindeki özdeş deliklerden fışkıran suların yatayda aldıkları yollar ölçülüyor.',
    questionPrompt: 'En alttaki delikten fışkıran suyun en uzağa gitmesinin sebebi hangisidir?',
    options: [
      { key: 'A', text: 'Sıvı basıncının derinlik arttıkça artması' },
      { key: 'B', text: 'En alttaki deliğin çapının daha geniş olması' },
      { key: 'C', text: 'Kabın şeklinin tabana doğru daralması' },
      { key: 'D', text: 'Sıvının yoğunluğunun tabanda daha yüksek olması' }
    ],
    correctAnswer: 'A',
    explanation: 'Sıvı basıncı P = h × d formülüne göre derinlik (h) arttıkça artar.',
    skillTag: 'Deney Analizi'
  }
];

export const grade8Unit4End20Questions: LgsQuestion[] = [
  {
    id: 4001,
    subTopicId: 'g8-u4-sub1',
    contextTitle: 'Periyodik Sistem ve Grup Numarası',
    scenario: 'İlk 18 element içerisinde yer alan X, Y ve Z elementlerinin elektron dağılımları verilmiştir.',
    questionPrompt: 'Buna göre bu elementlerle ilgili hangi yargı doğrudur?',
    options: [
      { key: 'A', text: 'Son katmandaki elektron sayısı benzer kimyasal özellik gösteren elementlerin belirlenmesinde rol oynar.' },
      { key: 'B', text: 'Katman sayısı arttıkça grup numarası kesinlikle artar.' },
      { key: 'C', text: 'Aynı periyottaki tüm elementlerin kimyasal özellikleri özdeştir.' },
      { key: 'D', text: 'Soygazların son katmanında daima 8 elektron bulunur.' }
    ],
    correctAnswer: 'A',
    explanation: 'Son katmandaki değerlik elektron sayısı grup numarasını belirler ve benzer gruptaki elementler benzer kimyasal özellik gösterir.',
    skillTag: 'Tablo Okuma'
  }
];

export const grade8Unit5End20Questions: LgsQuestion[] = [
  ...sebahattinBasitMakinelerQuestions.slice(0, 20)
];

export const grade8Unit6End20Questions: LgsQuestion[] = [
  ...sebahattinEnerjiCevreQuestions.slice(0, 20)
];

export const grade8Unit7End20Questions: LgsQuestion[] = [
  {
    id: 7001,
    subTopicId: 'g8-u7-sub1',
    contextTitle: 'Sürtünme ile Elektriklenme',
    scenario: 'Yün kumaşa sürtülen ebonit çubuk ile ipek kumaşa sürtülen cam çubuğun yük cinsleri inceleniyor.',
    questionPrompt: 'Buna göre yapılan incelemeyle ilgili hangi ifade doğrudur?',
    options: [
      { key: 'A', text: 'Ebonit çubuk negatif (-), cam çubuk pozitif (+) yükle yüklenir.' },
      { key: 'B', text: 'Her iki çubuk da nötr kalmaya devam eder.' },
      { key: 'C', text: 'Yün kumaş elektron alarak eksi yüklenir.' },
      { key: 'D', text: 'Cam çubuk sürtünme sonucu proton kazanmıştır.' }
    ],
    correctAnswer: 'A',
    explanation: 'Ebonit çubuk yün kumaştan elektron alarak (-), cam çubuk ipek kumaşa elektron vererek (+) yüklenir.',
    skillTag: 'Kavram Bilgisi'
  }
];

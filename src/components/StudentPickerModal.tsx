import React, { useState } from 'react';
import { Sparkles, Users, X, Shuffle, Plus, Trash2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const DEFAULT_STUDENTS = [
  'Ahmet', 'Ayşe', 'Ali', 'Zeynep', 'Mehmet', 'Elif', 'Mustafa', 'Fatma',
  'Emir', 'Hiranur', 'Yusuf', 'Ecrin', 'Ömer', 'Defne', 'Kerem', 'Nehir',
  'Eymen', 'Asel', 'Hamza', 'Azra', 'Alperen', 'Meryem', 'Burak', 'İclal'
];

export const StudentPickerModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [students, setStudents] = useState<string[]>(() => {
    const saved = localStorage.getItem('smartboard_students');
    return saved ? JSON.parse(saved) : DEFAULT_STUDENTS;
  });
  const [newStudent, setNewStudent] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showListEdit, setShowListEdit] = useState(false);

  if (!isOpen) return null;

  const handlePick = () => {
    if (students.length === 0) return;
    setIsSpinning(true);
    setSelectedStudent(null);

    let count = 0;
    const maxChanges = 22;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * students.length);
      setSelectedStudent(students[randomIndex]);
      count++;
      if (count >= maxChanges) {
        clearInterval(interval);
        setIsSpinning(false);
      }
    }, 75);
  };

  const addStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudent.trim()) return;
    const updated = [...students, newStudent.trim()];
    setStudents(updated);
    localStorage.setItem('smartboard_students', JSON.stringify(updated));
    setNewStudent('');
  };

  const removeStudent = (index: number) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
    localStorage.setItem('smartboard_students', JSON.stringify(updated));
  };

  const resetToDefault = () => {
    setStudents(DEFAULT_STUDENTS);
    localStorage.setItem('smartboard_students', JSON.stringify(DEFAULT_STUDENTS));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-white border border-slate-300 rounded-3xl shadow-2xl overflow-hidden p-6 text-slate-900">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-sm">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 font-fredoka">
                Rastgele Öğrenci Seçici (Çark)
              </h2>
              <p className="text-xs text-slate-500">
                Sözlü, deney görevi veya soru yanıtlamak için öğrenci seçin
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-800 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Student Display */}
        <div className="my-8 text-center">
          <div className="h-32 flex items-center justify-center">
            {selectedStudent ? (
              <div className={`transition-all transform ${isSpinning ? 'scale-90 opacity-80' : 'scale-110'}`}>
                <div className="text-xs font-black uppercase tracking-wider text-emerald-800 mb-1">
                  {isSpinning ? 'Çark Dönüyor...' : 'Seçilen Şanslı Öğrenci:'}
                </div>
                <div className="text-3xl sm:text-5xl font-black text-slate-900 font-fredoka bg-emerald-50 px-8 py-3 rounded-3xl border-2 border-emerald-400 shadow-sm inline-block">
                  {selectedStudent}
                </div>
              </div>
            ) : (
              <div className="text-slate-400 text-sm font-semibold flex flex-col items-center gap-2">
                <Sparkles className="w-8 h-8 text-emerald-500 animate-bounce" />
                <span>Öğrenci belirlemek için aşağıdaki butona basınız</span>
              </div>
            )}
          </div>

          {/* Action button */}
          <button
            onClick={handlePick}
            disabled={isSpinning || students.length === 0}
            className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-black text-base shadow-sm flex items-center justify-center gap-2 transition-all transform active:scale-95 cursor-pointer disabled:cursor-not-allowed"
          >
            <Shuffle className={`w-5 h-5 ${isSpinning ? 'animate-spin' : ''}`} />
            <span>{isSpinning ? 'Öğrenci Seçiliyor...' : '🎲 Rastgele Öğrenci Seç'}</span>
          </button>
        </div>

        {/* Footer controls: Edit list */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
          <span className="text-slate-500 font-semibold">
            Kayıtlı: {students.length} Öğrenci
          </span>

          <button
            onClick={() => setShowListEdit(!showListEdit)}
            className="text-emerald-700 hover:text-emerald-800 font-bold cursor-pointer"
          >
            {showListEdit ? 'Düzenlemeyi Kapat' : 'Sınıf Listesini Düzenle'}
          </button>
        </div>

        {/* Sınıf Listesi Düzenleme Çekmecesi */}
        {showListEdit && (
          <div className="mt-4 pt-4 border-t border-slate-200 space-y-3 animate-in fade-in duration-150">
            <form onSubmit={addStudent} className="flex gap-2">
              <input
                type="text"
                value={newStudent}
                onChange={e => setNewStudent(e.target.value)}
                placeholder="Yeni öğrenci adı..."
                className="flex-1 px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-4 h-4" /> Ekle
              </button>
            </form>

            <div className="max-h-40 overflow-y-auto space-y-1 p-2 bg-slate-50 rounded-xl border border-slate-200">
              {students.map((st, i) => (
                <div key={i} className="flex items-center justify-between text-xs py-1 px-2 hover:bg-white rounded-lg">
                  <span className="font-semibold text-slate-700">{i + 1}. {st}</span>
                  <button
                    onClick={() => removeStudent(i)}
                    className="text-rose-500 hover:text-rose-700 p-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={resetToDefault}
              className="text-[11px] text-slate-500 hover:text-slate-700 underline"
            >
              Varsayılan 24 Öğrenci Listesine Sıfırla
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

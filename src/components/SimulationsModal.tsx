import React, { useState } from 'react';
import { X, Sparkles, Compass, Eye, RotateCw, Activity, Layers, ArrowRight } from 'lucide-react';

interface Props {
  isOpen: boolean;
  activeSimId?: string;
  onClose: () => void;
}

export const SimulationsModal: React.FC<Props> = ({ isOpen, activeSimId = 'moon-phases', onClose }) => {
  const [selectedSim, setSelectedSim] = useState<string>(activeSimId);

  // Simulation 1: Moon Phases State
  const [day, setDay] = useState(1);

  // Simulation 2: Dynamometer State
  const [springType, setSpringType] = useState<'thin' | 'thick'>('thin');
  const [force, setForce] = useState(10); // in Newton

  // Simulation 3: Mass & Weight Planet State
  const [massKg, setMassKg] = useState(60);
  const [selectedPlanet, setSelectedPlanet] = useState<'earth' | 'moon' | 'jupiter' | 'mars'>('earth');

  // Simulation 4: Microscope State
  const [sampleType, setSampleType] = useState<'plant' | 'animal'>('plant');
  const [magnification, setMagnification] = useState<10 | 40 | 100>(40);
  const [selectedOrganelle, setSelectedOrganelle] = useState<string | null>(null);

  // Simulation 5: Skeleton & Muscles
  const [activeOrgan, setActiveOrgan] = useState<'femur' | 'wrist' | 'skull' | 'biceps' | 'stomach' | 'heart'>('femur');

  if (!isOpen) return null;

  // Moon phase calculation
  const getMoonPhaseDetails = (currentDay: number) => {
    // 29.5 days cycle
    const normalized = ((currentDay - 1) % 29.5);
    if (normalized < 1.5 || normalized >= 28.5) {
      return {
        name: 'Yeni Ay (Ana Evre)',
        desc: 'Ay, Güneş ile Dünya arasındadır. Karanlık yüzü Dünya’ya dönük olduğu için gökyüzünde görünmez.',
        imageBg: 'bg-slate-950 border-2 border-slate-700',
        worldViewText: 'Karanlık (Görünmez)'
      };
    } else if (normalized < 6.5) {
      return {
        name: 'Hilal (Ara Evre - Ters C)',
        desc: 'Ay, Yeni Ay evresinden İlk Dördün’e geçerken batı göğünde hilal şeklinde ("ters C") görülür.',
        imageBg: 'bg-slate-950 border border-slate-700',
        worldViewText: 'Ters "C" Harfi Görünümü'
      };
    } else if (normalized < 8.5) {
      return {
        name: 'İlk Dördün (Ana Evre - D)',
        desc: 'Yeni Ay’dan 1 hafta sonra oluşur. Ay’ın Dünya’ya bakan yüzünün sağ yarısı aydınlıktır ("D" harfi).',
        imageBg: 'bg-gradient-to-r from-amber-200 via-amber-200 to-slate-900',
        worldViewText: 'Düz "D" Harfi (Sağ Yarı Aydınlık)'
      };
    } else if (normalized < 14.0) {
      return {
        name: 'Şişkin Ay (Ara Evre)',
        desc: 'İlk Dördün ile Dolunay arasında Ay’ın yarısından fazlası aydınlık görünür.',
        imageBg: 'bg-gradient-to-r from-amber-200 via-amber-200 to-amber-200',
        worldViewText: 'Yarısından Fazlası Aydınlık'
      };
    } else if (normalized < 16.0) {
      return {
        name: 'Dolunay (Ana Evre)',
        desc: 'Dünya, Güneş ile Ay arasındadır. Ay’ın Dünya’ya bakan yüzü tamamen aydınlık ve parlak bir daire şeklinde görülür.',
        imageBg: 'bg-amber-100 shadow-[0_0_30px_rgba(251,191,36,0.6)]',
        worldViewText: 'Tam Daire / Tamamı Aydınlık'
      };
    } else if (normalized < 21.5) {
      return {
        name: 'Şişkin Ay (Ara Evre)',
        desc: 'Dolunay’dan Son Dördün’e geçerken Ay yavaş yavaş küçülür, sol yarısı şişkin kalır.',
        imageBg: 'bg-gradient-to-l from-amber-200 via-amber-200 to-slate-900',
        worldViewText: 'Sol Taraf Şişkin'
      };
    } else if (normalized < 23.5) {
      return {
        name: 'Son Dördün (Ana Evre - Ters D)',
        desc: 'Dolunay’dan 1 hafta sonra oluşur. Ay’ın Dünya’ya bakan yüzünün sol yarısı aydınlıktır ("ters D" harfi).',
        imageBg: 'bg-gradient-to-l from-amber-200 via-amber-200 to-slate-900',
        worldViewText: 'Ters "D" Harfi (Sol Yarı Aydınlık)'
      };
    } else {
      return {
        name: 'Hilal (Ara Evre - Düz C)',
        desc: 'Son Dördün’den sonra Güneş doğmadan önce doğu göğünde düz "C" harfi şeklinde hilal belirir.',
        imageBg: 'bg-slate-950 border border-slate-700',
        worldViewText: 'Düz "C" Harfi Görünümü'
      };
    }
  };

  const currentMoon = getMoonPhaseDetails(day);

  // Planet Gravity Constants
  const planets = {
    earth: { name: 'Dünya', g: 9.8, factor: 1.0, color: 'text-sky-400', desc: 'Deniz seviyesinde 1 kg ≈ 10 N yer çekimi' },
    moon: { name: 'Ay', g: 1.62, factor: 0.166, color: 'text-amber-300', desc: 'Dünya’nın yaklaşık 1/6’sı kadar çekim gücü' },
    jupiter: { name: 'Jüpiter', g: 24.79, factor: 2.53, color: 'text-orange-400', desc: 'Devasa kütlesiyle Dünya’nın ~2,5 katı çekim gücü' },
    mars: { name: 'Mars', g: 3.71, factor: 0.38, color: 'text-rose-400', desc: 'Dünya’nın yaklaşık %38’i kadar yer çekimi' }
  };

  const planetWeight = Math.round(massKg * planets[selectedPlanet].g);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-white border border-slate-300 rounded-3xl shadow-2xl overflow-hidden flex flex-col text-slate-900">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-sm">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 font-fredoka flex items-center gap-2">
                Akıllı Tahta İnteraktif Fen Laboratuvarı
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Canlı Deneyler
                </span>
              </h2>
              <p className="text-xs text-slate-500">
                Kavramları somutlaştıran etkileşimli Maarif simülasyonları
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

        {/* Tab Selector */}
        <div className="flex items-center gap-2 px-6 py-2.5 bg-slate-50 border-b border-slate-200 overflow-x-auto text-xs font-bold">
          <button
            onClick={() => setSelectedSim('moon-phases')}
            className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
              selectedSim === 'moon-phases'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            <Compass className="w-4 h-4" /> 1. Ünite: Ay’ın Evreleri Çarkı
          </button>

          <button
            onClick={() => setSelectedSim('dynamometer')}
            className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
              selectedSim === 'dynamometer'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            <Activity className="w-4 h-4" /> 2. Ünite: Dinamometre & Yay
          </button>

          <button
            onClick={() => setSelectedSim('mass-weight')}
            className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 shrink-0 ${
              selectedSim === 'mass-weight'
                ? 'bg-teal-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <RotateCw className="w-4 h-4" /> 2. Ünite: Kütle & Ağırlık Karşılaştırıcı
          </button>

          <button
            onClick={() => setSelectedSim('microscope')}
            className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 shrink-0 ${
              selectedSim === 'microscope'
                ? 'bg-sky-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Eye className="w-4 h-4" /> 3. Ünite: Mikroskop & Hücre Fabrikası
          </button>

          <button
            onClick={() => setSelectedSim('skeleton')}
            className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 shrink-0 ${
              selectedSim === 'skeleton'
                ? 'bg-indigo-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" /> 3. Ünite: İskelet & Kas Eşleyici
          </button>
        </div>

        {/* Modal Main Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* SIMULATION 1: MOON PHASES */}
          {selectedSim === 'moon-phases' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 bg-slate-950/80 rounded-2xl border border-slate-800 p-5 flex flex-col items-center justify-center relative min-h-[380px]">
                {/* Orbit Representation */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-dashed border-slate-700 flex items-center justify-center">
                  {/* Sun Rays Indicator (Left) */}
                  <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-amber-400 shadow-[0_0_35px_rgba(251,191,36,0.9)] animate-pulse flex items-center justify-center text-slate-950 font-black text-[10px]">
                      GÜNEŞ
                    </div>
                    <span className="text-[10px] text-amber-400 font-bold mt-1">Işık ➔</span>
                  </div>

                  {/* Earth at Center */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-700 via-sky-500 to-emerald-400 border-2 border-white/40 shadow-lg flex items-center justify-center text-center">
                    <span className="text-[10px] font-black text-white drop-shadow">DÜNYA</span>
                  </div>

                  {/* Moon Orbiting */}
                  {(() => {
                    const angleRad = ((day - 1) / 29.5) * 2 * Math.PI - Math.PI;
                    const radius = 120;
                    const moonX = Math.cos(angleRad) * radius;
                    const moonY = Math.sin(angleRad) * radius;

                    return (
                      <div
                        className="absolute w-8 h-8 rounded-full border border-amber-300 shadow-md flex items-center justify-center transition-all duration-150"
                        style={{
                          transform: `translate(${moonX}px, ${moonY}px)`
                        }}
                      >
                        <div className="w-full h-full rounded-full bg-amber-200 overflow-hidden relative">
                          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900" />
                        </div>
                      </div>
                    );
                  })()}
                </div>

                <div className="text-[11px] text-slate-400 text-center mt-3">
                  Ay, Dünya etrafında saat yönünün tersinde dolanırken Güneş ışığını alma açısı değişir.
                </div>
              </div>

              {/* Controls and World View */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                {/* World View Display */}
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex flex-col items-center text-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-2">
                    Dünya’dan Gökyüzüne Bakıldığında
                  </span>

                  <div className="w-24 h-24 rounded-full flex items-center justify-center p-1 bg-slate-900 border border-slate-700 mb-3 shadow-inner">
                    <div className={`w-20 h-20 rounded-full transition-all duration-300 ${currentMoon.imageBg} flex items-center justify-center text-xs font-bold text-slate-900`}>
                      {day === 1 ? '🌑' : day === 8 ? '🌓' : day === 15 ? '🌕' : day === 22 ? '🌗' : '🌙'}
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-white font-fredoka">
                    {currentMoon.name}
                  </h3>
                  <div className="text-xs text-amber-300 font-semibold mb-2">
                    {currentMoon.worldViewText}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentMoon.desc}
                  </p>
                </div>

                {/* Day Slider */}
                <div className="p-4 bg-slate-800/80 border border-slate-700/60 rounded-2xl">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-300 mb-2">
                    <span>Ay Takvimi: {day}. Gün</span>
                    <span className="text-amber-400">Dönem: ~29,5 Gün</span>
                  </div>

                  <input
                    type="range"
                    min={1}
                    max={30}
                    value={day}
                    onChange={e => setDay(Number(e.target.value))}
                    className="w-full accent-amber-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
                  />

                  {/* Phase Shortcut Buttons */}
                  <div className="grid grid-cols-4 gap-1.5 mt-3 text-[10px] font-bold">
                    <button
                      onClick={() => setDay(1)}
                      className={`p-1.5 rounded-lg border transition-all ${
                        day === 1 ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-slate-900 text-slate-300 border-slate-700'
                      }`}
                    >
                      Yeni Ay
                    </button>
                    <button
                      onClick={() => setDay(8)}
                      className={`p-1.5 rounded-lg border transition-all ${
                        day === 8 ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-slate-900 text-slate-300 border-slate-700'
                      }`}
                    >
                      İlk Dördün
                    </button>
                    <button
                      onClick={() => setDay(15)}
                      className={`p-1.5 rounded-lg border transition-all ${
                        day === 15 ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-slate-900 text-slate-300 border-slate-700'
                      }`}
                    >
                      Dolunay
                    </button>
                    <button
                      onClick={() => setDay(22)}
                      className={`p-1.5 rounded-lg border transition-all ${
                        day === 22 ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-slate-900 text-slate-300 border-slate-700'
                      }`}
                    >
                      Son Dördün
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SIMULATION 2: DYNAMOMETER */}
          {selectedSim === 'dynamometer' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 bg-slate-950/80 rounded-2xl border border-slate-800 p-6 flex flex-col items-center justify-center min-h-[380px]">
                {/* Dynamometer Visual Rig */}
                <div className="relative w-44 flex flex-col items-center">
                  {/* Top Hook */}
                  <div className="w-8 h-8 rounded-full border-4 border-slate-400 -mb-2 z-10" />

                  {/* Body tube */}
                  <div className="w-24 h-48 bg-slate-800 border-2 border-slate-600 rounded-t-xl relative overflow-hidden flex flex-col items-center shadow-lg">
                    <span className="text-[9px] font-bold text-emerald-400 mt-1">DİNAMOMETRE</span>
                    <span className="text-[8px] text-slate-400 font-mono">Max: 50 N</span>

                    {/* Scale markings */}
                    <div className="absolute right-2 top-8 bottom-4 w-3 flex flex-col justify-between text-[8px] text-slate-400 font-mono">
                      <span>0</span>
                      <span>10</span>
                      <span>20</span>
                      <span>30</span>
                      <span>40</span>
                      <span>50</span>
                    </div>

                    {/* Inner Spring */}
                    <div
                      className="w-12 border-x-2 border-emerald-400/80 border-dashed transition-all duration-300"
                      style={{
                        height: `${Math.min(130, 20 + (force / 50) * 110)}px`
                      }}
                    />

                    {/* Pointer bar moving down */}
                    <div
                      className="w-16 h-2 bg-emerald-400 rounded-full transition-all duration-300 shadow"
                      style={{
                        transform: `translateY(${Math.min(120, (force / 50) * 110)}px)`
                      }}
                    />
                  </div>

                  {/* Extension Rod coming out */}
                  <div
                    className="w-3 bg-slate-400 border border-slate-500 transition-all duration-300"
                    style={{
                      height: `${Math.min(90, 15 + (force / 50) * 75)}px`
                    }}
                  />

                  {/* Bottom Hanging Weight */}
                  <div className="w-20 py-2.5 px-2 bg-gradient-to-b from-amber-500 to-amber-600 rounded-xl text-slate-950 font-black text-xs text-center shadow-xl border border-amber-300">
                    {force} N
                  </div>
                </div>

                {force > 50 && (
                  <div className="mt-4 px-4 py-2 bg-rose-500/20 border border-rose-500/40 rounded-xl text-rose-300 text-xs font-bold text-center animate-bounce">
                    ⚠️ DİKKAT: 50 N sınırı aşıldı! Sarmal yayın esneklik özelliği bozuldu!
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                    Ölçüm Hesaplama Ekranı
                  </h4>

                  <div className="space-y-2 text-xs font-mono text-slate-300">
                    <div className="flex justify-between border-b border-slate-800 py-1">
                      <span className="text-slate-400">Toplam Kapasite:</span>
                      <span className="text-white font-bold">50 N (10 Bölme)</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 py-1">
                      <span className="text-slate-400">1 Bölmenin Değeri:</span>
                      <span className="text-emerald-400 font-bold">50 / 10 = 5 N</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 py-1">
                      <span className="text-slate-400">Dışarı Çıkan Bölme:</span>
                      <span className="text-amber-400 font-bold">{(force / 5).toFixed(1)} Bölme</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-slate-400">Ölçülen Kuvvet:</span>
                      <span className="text-emerald-300 font-black text-sm">{force} Newton</span>
                    </div>
                  </div>
                </div>

                {/* Force Selector */}
                <div className="p-4 bg-slate-800/80 border border-slate-700/60 rounded-2xl">
                  <div className="flex justify-between text-xs font-bold text-slate-200 mb-2">
                    <span>Asılan Yük: {force} N</span>
                    <span className="text-emerald-400">Bölme: {force / 5}</span>
                  </div>

                  <input
                    type="range"
                    min={0}
                    max={65}
                    step={5}
                    value={force}
                    onChange={e => setForce(Number(e.target.value))}
                    className="w-full accent-emerald-500 h-2 bg-slate-700 rounded-lg cursor-pointer"
                  />

                  <div className="grid grid-cols-4 gap-1.5 mt-3 text-[10px] font-bold">
                    <button
                      onClick={() => setForce(10)}
                      className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-700 text-slate-300 border border-slate-700"
                    >
                      10 N
                    </button>
                    <button
                      onClick={() => setForce(25)}
                      className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-700 text-slate-300 border border-slate-700"
                    >
                      25 N
                    </button>
                    <button
                      onClick={() => setForce(45)}
                      className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-700 text-slate-300 border border-slate-700"
                    >
                      45 N
                    </button>
                    <button
                      onClick={() => setForce(60)}
                      className="p-1.5 rounded-lg bg-rose-950/60 hover:bg-rose-900 text-rose-300 border border-rose-700/60"
                    >
                      60 N (Aşırı)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SIMULATION 3: MASS & WEIGHT */}
          {selectedSim === 'mass-weight' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 bg-slate-950/80 rounded-2xl border border-slate-800 p-6 flex flex-col items-center justify-center min-h-[380px]">
                <div className="text-center mb-6">
                  <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-1">
                    Seçilen Gök Cismi
                  </div>
                  <h3 className={`text-3xl font-black font-fredoka ${planets[selectedPlanet].color}`}>
                    {planets[selectedPlanet].name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {planets[selectedPlanet].desc}
                  </p>
                </div>

                {/* Comparison Dual Cards */}
                <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                  {/* Mass Box */}
                  <div className="p-4 rounded-2xl bg-slate-900 border border-teal-500/40 text-center shadow-lg">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      KÜTLE (Terazi)
                    </span>
                    <div className="text-3xl font-black text-white font-mono">
                      {massKg} <span className="text-base text-teal-400 font-sans">kg</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-semibold block mt-1">
                      🔒 Hiçbir Yerde Değişmez
                    </span>
                  </div>

                  {/* Weight Box */}
                  <div className="p-4 rounded-2xl bg-slate-900 border border-amber-500/40 text-center shadow-lg">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      AĞIRLIK (Dinamometre)
                    </span>
                    <div className="text-3xl font-black text-amber-300 font-mono">
                      {planetWeight} <span className="text-base text-amber-400 font-sans">N</span>
                    </div>
                    <span className="text-[10px] text-amber-300 font-semibold block mt-1">
                      🔄 Gezegene Göre Değişir
                    </span>
                  </div>
                </div>

                <div className="mt-6 text-center text-xs text-slate-300 bg-slate-900/60 px-4 py-2 rounded-xl border border-slate-800">
                  Ay’da ağırlık Dünya’dakinin 1/6’sına düşer; ancak kütle (madde miktarı) sabit kalır!
                </div>
              </div>

              {/* Controls */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                {/* Planet Selector */}
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl">
                  <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-2.5">
                    Gök Cismi Seçin
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {(Object.keys(planets) as Array<keyof typeof planets>).map(pKey => (
                      <button
                        key={pKey}
                        onClick={() => setSelectedPlanet(pKey)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          selectedPlanet === pKey
                            ? 'bg-teal-500/20 border-teal-400 text-white shadow'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        <div className="font-bold text-sm">{planets[pKey].name}</div>
                        <div className="text-[10px] opacity-75 font-mono">
                          {planets[pKey].g} N/kg
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mass Slider */}
                <div className="p-4 bg-slate-800/80 border border-slate-700/60 rounded-2xl">
                  <div className="flex justify-between text-xs font-bold text-slate-200 mb-2">
                    <span>Astronot Kütlesi: {massKg} kg</span>
                  </div>

                  <input
                    type="range"
                    min={10}
                    max={120}
                    step={5}
                    value={massKg}
                    onChange={e => setMassKg(Number(e.target.value))}
                    className="w-full accent-teal-400 h-2 bg-slate-700 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )}

          {/* SIMULATION 4: MICROSCOPE */}
          {selectedSim === 'microscope' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 bg-slate-950/80 rounded-2xl border border-slate-800 p-6 flex flex-col items-center justify-center min-h-[380px] relative">
                {/* Microscope Circular Viewport */}
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full border-4 border-slate-700 bg-slate-900 relative overflow-hidden shadow-2xl flex items-center justify-center">
                  {sampleType === 'plant' ? (
                    /* Plant Cell Grid (Köşeli Tuğla Yapı) */
                    <div className="w-full h-full p-2 grid grid-cols-2 grid-rows-2 gap-1.5 opacity-90">
                      {[1, 2, 3, 4].map(i => (
                        <div
                          key={i}
                          className="border-2 border-emerald-500 bg-emerald-950/40 rounded-md relative p-2 flex flex-col justify-between"
                        >
                          <div className="w-4 h-4 rounded-full bg-indigo-500/80 absolute top-2 right-2 border border-indigo-300" title="Çekirdek" />
                          <div className="w-8 h-8 rounded-lg bg-teal-400/30 border border-teal-300/40" title="Büyük Koful" />
                          <div className="flex gap-1">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" title="Kloroplast" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" title="Kloroplast" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Animal Cell (Yuvarlak / Oval) */
                    <div className="w-full h-full p-6 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full border-2 border-sky-400 bg-sky-950/40 relative flex items-center justify-center shadow-inner">
                        {/* Nucleus */}
                        <div className="w-12 h-12 rounded-full bg-indigo-500 border-2 border-indigo-300 flex items-center justify-center text-[9px] font-bold text-white">
                          Çekirdek
                        </div>
                        {/* Small Vacuoles */}
                        <div className="w-3 h-3 rounded-full bg-teal-400 absolute top-8 left-8" title="Küçük Koful" />
                        <div className="w-3 h-3 rounded-full bg-teal-400 absolute bottom-8 right-10" title="Küçük Koful" />
                        {/* Mitochondria */}
                        <div className="w-5 h-2.5 rounded-full bg-rose-500 absolute bottom-10 left-12" title="Mitokondri" />
                        <div className="w-5 h-2.5 rounded-full bg-rose-500 absolute top-10 right-12" title="Mitokondri" />
                      </div>
                    </div>
                  )}

                  {/* Objective Lens Overlay Crosshair */}
                  <div className="absolute inset-0 pointer-events-none border border-slate-700/50 rounded-full" />
                </div>

                <div className="text-xs font-bold text-slate-300 mt-3 text-center">
                  Büyütme Oranı: <span className="text-sky-400 font-mono">{magnification}x</span> ({sampleType === 'plant' ? 'Soğan Zarı Hücresi - Köşeli' : 'Ağız İçi Epitel Hücresi - Yuvarlak'})
                </div>
              </div>

              {/* Controls */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl">
                  <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2.5">
                    Preparat / Örnek Seçimi
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSampleType('plant')}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        sampleType === 'plant'
                          ? 'bg-emerald-500/20 border-emerald-400 text-white shadow'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="font-bold text-sm">Bitki Hücresi</div>
                      <div className="text-[10px] text-emerald-400">Soğan zarı (Köşeli & Çeperli)</div>
                    </button>

                    <button
                      onClick={() => setSampleType('animal')}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        sampleType === 'animal'
                          ? 'bg-sky-500/20 border-sky-400 text-white shadow'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="font-bold text-sm">Hayvan Hücresi</div>
                      <div className="text-[10px] text-sky-400">Epitel hücresi (Yuvarlak & Esnek)</div>
                    </button>
                  </div>
                </div>

                {/* Magnification */}
                <div className="p-4 bg-slate-800/80 border border-slate-700/60 rounded-2xl">
                  <h4 className="text-xs font-bold text-slate-200 mb-2">
                    Objektif Büyütmesi
                  </h4>
                  <div className="flex gap-2">
                    {[10, 40, 100].map(mag => (
                      <button
                        key={mag}
                        onClick={() => setMagnification(mag as any)}
                        className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                          magnification === mag
                            ? 'bg-sky-500 text-slate-950 shadow'
                            : 'bg-slate-900 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {mag}x
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SIMULATION 5: SKELETON & MUSCLES */}
          {selectedSim === 'skeleton' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 bg-slate-950/80 rounded-2xl border border-slate-800 p-6 flex flex-col items-center justify-center min-h-[380px]">
                <div className="grid grid-cols-3 gap-2 w-full max-w-md">
                  <button
                    onClick={() => setActiveOrgan('femur')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      activeOrgan === 'femur'
                        ? 'bg-indigo-500/20 border-indigo-400 text-white shadow-lg'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className="text-xl mb-1">🦵</div>
                    <div className="text-xs font-bold">Uyluk Kemiği</div>
                    <div className="text-[10px] text-indigo-300">Uzun Kemik</div>
                  </button>

                  <button
                    onClick={() => setActiveOrgan('wrist')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      activeOrgan === 'wrist'
                        ? 'bg-indigo-500/20 border-indigo-400 text-white shadow-lg'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className="text-xl mb-1">🖐️</div>
                    <div className="text-xs font-bold">El Bilek</div>
                    <div className="text-[10px] text-indigo-300">Kısa Kemik</div>
                  </button>

                  <button
                    onClick={() => setActiveOrgan('skull')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      activeOrgan === 'skull'
                        ? 'bg-indigo-500/20 border-indigo-400 text-white shadow-lg'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className="text-xl mb-1">💀</div>
                    <div className="text-xs font-bold">Kafatası</div>
                    <div className="text-[10px] text-indigo-300">Yassı Kemik</div>
                  </button>

                  <button
                    onClick={() => setActiveOrgan('biceps')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      activeOrgan === 'biceps'
                        ? 'bg-rose-500/20 border-rose-400 text-white shadow-lg'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className="text-xl mb-1">💪</div>
                    <div className="text-xs font-bold">Kol Kası</div>
                    <div className="text-[10px] text-rose-300">Çizgili Kas</div>
                  </button>

                  <button
                    onClick={() => setActiveOrgan('stomach')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      activeOrgan === 'stomach'
                        ? 'bg-rose-500/20 border-rose-400 text-white shadow-lg'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className="text-xl mb-1">🫃</div>
                    <div className="text-xs font-bold">Mide Duvarı</div>
                    <div className="text-[10px] text-rose-300">Düz Kas</div>
                  </button>

                  <button
                    onClick={() => setActiveOrgan('heart')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      activeOrgan === 'heart'
                        ? 'bg-rose-500/20 border-rose-400 text-white shadow-lg'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className="text-xl mb-1">❤️</div>
                    <div className="text-xs font-bold">Kalp Duvarı</div>
                    <div className="text-[10px] text-rose-300">Kalp Kası</div>
                  </button>
                </div>
              </div>

              {/* Details Pane */}
              <div className="lg:col-span-5 flex flex-col gap-4 justify-center">
                <div className="p-5 bg-slate-950 border border-slate-800 rounded-2xl">
                  {activeOrgan === 'femur' && (
                    <>
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                        Uzun Kemik
                      </span>
                      <h3 className="text-xl font-black text-white font-fredoka mt-1">Uyluk Kemiği</h3>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                        İnsan iskeletinin en uzun ve en güçlü kemiğidir. Boyu eninden belirgin şekilde fazladır. İçerisinde sarı kemik iliği barındırır ve uç kısımlarında sürtünmeyi önleyen kıkırdak tabaka bulunur.
                      </p>
                    </>
                  )}

                  {activeOrgan === 'wrist' && (
                    <>
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                        Kısa Kemik
                      </span>
                      <h3 className="text-xl font-black text-white font-fredoka mt-1">El Bilek Kemikleri</h3>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                        Boyu, eni ve kalınlığı birbirine neredeyse eşittir. Küpümsü yapıdadır. El ve ayak bileklerimizde bulunarak karmaşık ve hassas hareketleri yapmamızı sağlar.
                      </p>
                    </>
                  )}

                  {activeOrgan === 'skull' && (
                    <>
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                        Yassı Kemik
                      </span>
                      <h3 className="text-xl font-black text-white font-fredoka mt-1">Kafatası Kemiği</h3>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                        Levha şeklinde geniş yüzeylidir. Birbirine testere dişleri gibi kenetlenen OYNAMAZ eklemlerle bağlıdır. İçerideki beynimizi dış darbelerden muhafaza eder.
                      </p>
                    </>
                  )}

                  {activeOrgan === 'biceps' && (
                    <>
                      <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                        Çizgili Kas (İskelet Kası)
                      </span>
                      <h3 className="text-xl font-black text-white font-fredoka mt-1">Kol İskelet Kası</h3>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                        Kemiklerin üzerini örter. İsteğimizle (istemli) çalışır. Çok hızlı kasılır fakat çabuk yorulur. Kırmızı renklidir.
                      </p>
                    </>
                  )}

                  {activeOrgan === 'stomach' && (
                    <>
                      <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                        Düz Kas
                      </span>
                      <h3 className="text-xl font-black text-white font-fredoka mt-1">Mide & Bağırsak Düz Kası</h3>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                        İç organlarımızın duvarlarında yer alır. İsteğimiz dışında (istemsiz) çalışır. Yavaş, ritmik ve yorulmadan sürekli besinleri öğütür.
                      </p>
                    </>
                  )}

                  {activeOrgan === 'heart' && (
                    <>
                      <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                        Kalp Kası
                      </span>
                      <h3 className="text-xl font-black text-white font-fredoka mt-1">Özel Kalp Kası</h3>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                        Sadece kalbimizin yapısında bulunur. Mikroskopta çizgili kasa benzer (kırmızı ve enine çizgili); ancak çalışması düz kas gibidir: İstemsiz, ritmik, güçlü ve ömür boyu yorulmadan çalışır.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

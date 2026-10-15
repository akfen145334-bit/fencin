import React, { useState } from 'react';
import { Unit, SubTopic } from '../types/curriculum';
import {
  FlaskConical,
  Sparkles,
  Layers,
  RotateCcw,
  Play,
  Pause,
  Sliders,
  CheckCircle2,
  Thermometer,
  Zap,
  Eye,
  Compass,
  ArrowRight,
  Sun,
  Moon,
  Info
} from 'lucide-react';

interface Props {
  unit: Unit;
  currentSubTopic: SubTopic;
  onSelectSubTopic: (sub: SubTopic) => void;
}

export const ExperimentLabView: React.FC<Props> = ({
  unit,
  currentSubTopic,
  onSelectSubTopic
}) => {
  // Experiment 1: Sun, Earth & Moon Simulator
  const [orbitSpeed, setOrbitSpeed] = useState<number>(1);
  const [isPlayingOrbit, setIsPlayingOrbit] = useState<boolean>(true);
  const [moonAngle, setMoonAngle] = useState<number>(0);
  const [eclipseMode, setEclipseMode] = useState<'normal' | 'solar' | 'lunar'>('normal');

  // Experiment 2: Dynamometer & Friction
  const [appliedForce, setAppliedForce] = useState<number>(15);
  const [springConstant, setSpringConstant] = useState<'thin' | 'medium' | 'thick'>('thin');
  const [surfaceType, setSurfaceType] = useState<'ice' | 'wood' | 'sandpaper'>('wood');

  // Experiment 3: Reflection & Mirrors
  const [incidentAngle, setIncidentAngle] = useState<number>(45);
  const [mirrorType, setMirrorType] = useState<'flat' | 'concave' | 'convex'>('flat');
  const [objectDistance, setObjectDistance] = useState<number>(50);

  // Experiment 4: Heat, Expansion & Density Tower
  const [temperature, setTemperature] = useState<number>(20);
  const [ballHeated, setBallHeated] = useState<boolean>(false);
  const [selectedLiquid, setSelectedLiquid] = useState<'water' | 'oil' | 'mercury' | 'alcohol'>('water');
  const [cubeMass, setCubeMass] = useState<number>(100);
  const [cubeVolume, setCubeVolume] = useState<number>(50);

  // Experiment 5: Circuit, Resistance & Rheostat
  const [wireLength, setWireLength] = useState<number>(20); // cm
  const [wireThickness, setWireThickness] = useState<number>(1); // mm^2
  const [wireMaterial, setWireMaterial] = useState<'copper' | 'iron' | 'nichrome'>('copper');
  const [rheostatPosition, setRheostatPosition] = useState<number>(50); // %
  const [isSwitchClosed, setIsSwitchClosed] = useState<boolean>(true);

  // Experiment 6: Plant Germination Lab
  const [germWater, setGermWater] = useState<boolean>(true);
  const [germTemp, setGermTemp] = useState<number>(25); // °C
  const [germOxygen, setGermOxygen] = useState<boolean>(true);
  const [germLight, setGermLight] = useState<boolean>(false); // Işık çimlenmeyi etkilemez!

  // Calculations for dynamic feedback
  const getFrictionCoeff = () => {
    switch (surfaceType) {
      case 'ice': return 0.1;
      case 'wood': return 0.4;
      case 'sandpaper': return 0.8;
    }
  };

  const getSpringElongation = () => {
    const k = springConstant === 'thin' ? 1 : springConstant === 'medium' ? 2 : 4;
    return (appliedForce / k).toFixed(1);
  };

  const getCalculatedDensity = () => {
    return (cubeMass / Math.max(cubeVolume, 1)).toFixed(2);
  };

  const getResistance = () => {
    const resistivity = wireMaterial === 'copper' ? 0.017 : wireMaterial === 'iron' ? 0.1 : 1.1;
    const effectiveLength = wireLength * (1 + (100 - rheostatPosition) / 100);
    const R = (resistivity * effectiveLength) / Math.max(wireThickness, 0.1);
    return Math.max(0.5, R).toFixed(2);
  };

  const getBulbBrightness = () => {
    if (!isSwitchClosed) return 0;
    const R = parseFloat(getResistance());
    // Current I = V / R with V = 6V
    const current = 6 / R;
    const brightnessPct = Math.min(100, Math.max(5, Math.round(current * 18)));
    return brightnessPct;
  };

  const isGerminating = germWater && germOxygen && germTemp >= 15 && germTemp <= 35;

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-20">
      {/* Station Header Banner - Temel Dinî Bilgiler Teması */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-600 text-white flex items-center gap-1.5 shadow-xs">
              <FlaskConical className="w-4 h-4 text-emerald-200" /> MEB MAARİF FEN LABORATUVARI
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
              {unit.grade || 5}. Sınıf • {unit.unitNumber}. Ünite
            </span>
          </div>

          <h1 className="text-xl sm:text-3xl font-extrabold text-slate-900 font-fredoka mt-1">
            {unit.title} — Deney & Etkinlik İstasyonu
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            Ders kitabındaki etkinliklerin, deneylerin ve fiziksel modellerin etkileşimli dijital laboratuvar ortamı. Değişkenleri değiştirerek sonuçları gözlemleyiniz.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
            <Sliders className="w-4 h-4 text-emerald-600" />
            <span>Genişletilmiş Simülasyon Alanı</span>
          </div>
        </div>
      </div>

      {/* SUBTOPICS SELECTOR (Alt Başlık Seçici Barı) */}
      <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2 mb-3 px-1">
          <Layers className="w-4 h-4 text-emerald-600" />
          <span className="text-xs font-black tracking-wider text-slate-900 uppercase">
            DENEY YAPILACAK ALT BAŞLIĞI SEÇİNİZ:
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {unit.subTopics.map((sub, idx) => {
            const isSelected = sub.id === currentSubTopic.id;
            return (
              <button
                key={sub.id}
                onClick={() => onSelectSubTopic(sub)}
                className={`p-3.5 rounded-2xl text-left transition-all border flex items-center justify-between gap-3 cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-50 border-2 border-emerald-500 text-slate-900 shadow-xs ring-1 ring-emerald-400/30'
                    : 'bg-slate-50 hover:bg-emerald-50/50 border-slate-200 text-slate-700 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono text-xs font-black shrink-0 ${
                    isSelected ? 'bg-emerald-600 text-white shadow-xs' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {idx + 1}
                  </span>
                  <div className="truncate">
                    <div className="text-xs font-bold text-slate-500">
                      {sub.shortTitle || `Bölüm ${idx + 1}`}
                    </div>
                    <div className="text-sm font-extrabold text-slate-900 truncate">
                      {sub.title.split('(')[0]}
                    </div>
                  </div>
                </div>

                {isSelected && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* LARGE-FORMAT INTERACTIVE EXPERIMENT LABORATORY CANVAS (Genişletilmiş Sayfa Yarısı Alanı) */}
      <div className="rounded-3xl bg-[#090d16] border-2 border-slate-700/80 p-6 sm:p-8 shadow-2xl relative overflow-hidden min-h-[560px]">
        {/* Lab Top Info Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
              <FlaskConical className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Aktif Deney İstasyonu
              </div>
              <h2 className="text-lg sm:text-2xl font-black text-white font-fredoka">
                {currentSubTopic.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {currentSubTopic.pageRange ? (
              <span className="text-xs px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 border border-slate-700">
                Ders Kitabı Sayfa: {currentSubTopic.pageRange}
              </span>
            ) : (
              <span className="text-xs px-3 py-1.5 rounded-xl bg-indigo-950 text-indigo-300 border border-indigo-700">
                LGS Deney İstasyonu
              </span>
            )}
          </div>
        </div>

        {/* ========================================================================================= */}
        {/* EXPERIMENT RENDERER BY UNIT & SUBTOPIC */}
        {/* ========================================================================================= */}

        {/* 1. GÜNEŞ SİSTEMİ & TUTULMALAR VEYA GÖKYÜZÜ EXPERIMENTS */}
        {(currentSubTopic.concepts.includes('Güneş Sistemi') || currentSubTopic.concepts.includes('Güneş Tutulması') || currentSubTopic.concepts.includes('Ay’ın Evreleri')) && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Canvas (Large Visual Area) */}
            <div className="lg:col-span-8 bg-slate-950/80 rounded-3xl p-6 border border-slate-800 relative min-h-[380px] flex flex-col items-center justify-center overflow-hidden">
              {/* Background Stars */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

              {/* Sun */}
              <div className="absolute left-10 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                <div className="w-28 h-28 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-300 shadow-[0_0_60px_#f59e0b] animate-pulse flex items-center justify-center">
                  <Sun className="w-12 h-12 text-amber-950 animate-spin" style={{ animationDuration: '30s' }} />
                </div>
                <span className="text-xs font-black text-amber-300 mt-2 font-mono">GÜNEŞ</span>
              </div>

              {/* Central Orbit Center (Earth) */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500 border-2 border-cyan-400 shadow-[0_0_30px_#0284c7] flex items-center justify-center">
                  <span className="text-white text-xs font-black font-fredoka">DÜNYA</span>
                </div>

                {/* Moon Orbiting */}
                <div
                  className="absolute w-64 h-64 rounded-full border border-dashed border-cyan-500/40 pointer-events-none"
                  style={{
                    transform: `rotate(${eclipseMode === 'solar' ? 180 : eclipseMode === 'lunar' ? 0 : moonAngle}deg)`,
                    transition: isPlayingOrbit ? 'none' : 'transform 0.5s ease-out'
                  }}
                >
                  <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-300 border-2 border-slate-100 shadow-[0_0_15px_#ffffff] flex items-center justify-center">
                    <Moon className="w-4 h-4 text-slate-800" />
                  </div>
                </div>
              </div>

              {/* Eclipse Shadow Visualization */}
              {eclipseMode === 'solar' && (
                <div className="absolute z-20 left-[165px] top-1/2 -translate-y-1/2 w-48 h-12 bg-gradient-to-r from-slate-950/90 to-transparent pointer-events-none rounded-full blur-sm border-l-2 border-amber-400/50" />
              )}
              {eclipseMode === 'lunar' && (
                <div className="absolute z-20 right-[150px] top-1/2 -translate-y-1/2 w-48 h-16 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none rounded-full blur-sm" />
              )}

              {/* Live Status Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 p-3 rounded-2xl border border-slate-700/80 flex items-center justify-between text-xs">
                <span className="text-slate-300">
                  Durum: <strong className="text-cyan-300">{eclipseMode === 'solar' ? 'Güneş Tutulması (Ay Yeniay Evresinde)' : eclipseMode === 'lunar' ? 'Ay Tutulması (Ay Dolunay Evresinde)' : 'Düzenli Dolanma Hareketi'}</strong>
                </span>
                <span className="text-amber-400 font-mono">Dolanma Açısı: {moonAngle}°</span>
              </div>
            </div>

            {/* Interactive Control Panel (Sliders & Buttons) */}
            <div className="lg:col-span-4 bg-slate-900/80 rounded-3xl p-6 border border-slate-800 space-y-5">
              <h3 className="text-base font-black text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-cyan-400" />
                Laboratuvar Kontrolleri
              </h3>

              {/* Presets */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400">Doğa Olayı Konumu:</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => { setEclipseMode('normal'); }}
                    className={`py-2 px-1 text-xs font-bold rounded-xl border transition-all ${
                      eclipseMode === 'normal' ? 'bg-cyan-500 text-slate-950 border-cyan-400' : 'bg-slate-800 text-slate-300 border-slate-700'
                    }`}
                  >
                    Serbest
                  </button>
                  <button
                    onClick={() => { setEclipseMode('solar'); setMoonAngle(180); }}
                    className={`py-2 px-1 text-xs font-bold rounded-xl border transition-all ${
                      eclipseMode === 'solar' ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-slate-800 text-slate-300 border-slate-700'
                    }`}
                  >
                    Güneş Tut.
                  </button>
                  <button
                    onClick={() => { setEclipseMode('lunar'); setMoonAngle(0); }}
                    className={`py-2 px-1 text-xs font-bold rounded-xl border transition-all ${
                      eclipseMode === 'lunar' ? 'bg-purple-500 text-white border-purple-400' : 'bg-slate-800 text-slate-300 border-slate-700'
                    }`}
                  >
                    Ay Tutulması
                  </button>
                </div>
              </div>

              {/* Angle Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-400">
                  <span>Ay'ın Yörünge Konumu</span>
                  <span className="text-cyan-400 font-mono">{moonAngle}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={moonAngle}
                  disabled={eclipseMode !== 'normal'}
                  onChange={(e) => setMoonAngle(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Scientific Insight Box */}
              <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 text-xs text-slate-300 space-y-1.5">
                <div className="font-extrabold text-cyan-300 flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-cyan-400" /> Maarif Bilgi Notu:
                </div>
                <p>
                  Güneş tutulması Güneş-Ay-Dünya sırasında ve Yeniay evresinde; Ay tutulması Güneş-Dünya-Ay sırasında ve Dolunay evresinde gerçekleşir. Yörünge düzlemleri arasındaki 5° açı farkı sebebiyle her ay tutulma olmaz.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 2. KUVVET, DİNAMOMETRE, BİLEŞKE KUVVET VEYA HAREKET EXPERIMENTS */}
        {(currentSubTopic.concepts.includes('Kuvvet') || currentSubTopic.concepts.includes('Bileşke Kuvvet (Net Kuvvet - R)') || currentSubTopic.concepts.includes('Sürat')) && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 bg-slate-950/80 rounded-3xl p-6 border border-slate-800 relative min-h-[380px] flex flex-col items-center justify-center">
              {/* Dynamometer Visual */}
              <div className="w-full max-w-md bg-slate-900 border-2 border-slate-700 p-6 rounded-3xl shadow-xl flex items-center justify-between gap-6">
                <div className="text-center">
                  <div className="text-xs font-bold text-slate-400">Uygulanan Kuvvet</div>
                  <div className="text-3xl font-black text-amber-400 font-mono">{appliedForce} N</div>
                </div>

                {/* Spring Animation */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-4 h-8 bg-slate-700 rounded-t-lg" />
                  <div
                    className="w-10 border-x-4 border-dashed border-amber-400 transition-all duration-200"
                    style={{
                      height: `${Math.min(180, 40 + parseFloat(getSpringElongation()) * 8)}px`,
                      borderColor: springConstant === 'thin' ? '#f59e0b' : springConstant === 'medium' ? '#38bdf8' : '#a855f7'
                    }}
                  />
                  <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-amber-400 flex items-center justify-center text-xs font-bold text-white">
                    {getSpringElongation()} cm
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-xs font-bold text-slate-400">Yay Uzaması</div>
                  <div className="text-2xl font-black text-emerald-400 font-mono">{getSpringElongation()} cm</div>
                </div>
              </div>

              {/* Result Summary Bar */}
              <div className="mt-8 grid grid-cols-3 gap-4 w-full max-w-lg text-center text-xs">
                <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="text-slate-400 font-bold">Yay Cinsi</div>
                  <div className="font-extrabold text-white capitalize">{springConstant} Yay</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="text-slate-400 font-bold">Ölçüm Aracı</div>
                  <div className="font-extrabold text-amber-400">Dinamometre</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="text-slate-400 font-bold">Net Kuvvet</div>
                  <div className="font-extrabold text-emerald-400">{appliedForce} Newton</div>
                </div>
              </div>
            </div>

            {/* Control Panel */}
            <div className="lg:col-span-4 bg-slate-900/80 rounded-3xl p-6 border border-slate-800 space-y-5">
              <h3 className="text-base font-black text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-amber-400" />
                Dinamometre Ayarları
              </h3>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-400">
                  <span>Asılan Kuvvet / Ağırlık</span>
                  <span className="text-amber-400 font-mono">{appliedForce} N</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={appliedForce}
                  onChange={(e) => setAppliedForce(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400">Yay Kalınlığı:</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setSpringConstant('thin')}
                    className={`py-2 text-xs font-bold rounded-xl border ${springConstant === 'thin' ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-slate-800 text-slate-300 border-slate-700'}`}
                  >
                    İnce Yay
                  </button>
                  <button
                    onClick={() => setSpringConstant('medium')}
                    className={`py-2 text-xs font-bold rounded-xl border ${springConstant === 'medium' ? 'bg-cyan-500 text-slate-950 border-cyan-400' : 'bg-slate-800 text-slate-300 border-slate-700'}`}
                  >
                    Orta Yay
                  </button>
                  <button
                    onClick={() => setSpringConstant('thick')}
                    className={`py-2 text-xs font-bold rounded-xl border ${springConstant === 'thick' ? 'bg-purple-500 text-white border-purple-400' : 'bg-slate-800 text-slate-300 border-slate-700'}`}
                  >
                    Kalın Yay
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-800/40 text-xs text-slate-300 space-y-1.5">
                <div className="font-extrabold text-amber-300 flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-amber-400" /> Bilimsel Çıkarım:
                </div>
                <p>
                  Dinamometredeki uzama miktarı uygulanan kuvvetle doğru orantılıdır. İnce yaylar küçük kuvvetleri hassas ölçerken, kalın yaylar büyük kuvvetleri ölçmek için kullanılır.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 3. IŞIĞIN YANSIMASI, AYNALAR VEYA RENK EXPERIMENTS */}
        {(currentSubTopic.concepts.includes('Yansıma') || currentSubTopic.concepts.includes('Düzlem Ayna') || currentSubTopic.concepts.includes('Işığın Soğurulması')) && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 bg-slate-950/80 rounded-3xl p-6 border border-slate-800 relative min-h-[380px] flex flex-col items-center justify-center">
              {/* Optical Bench Visualization */}
              <div className="relative w-full max-w-lg h-64 border-b-4 border-slate-600 flex items-center justify-center">
                {/* Mirror in Center */}
                <div
                  className={`w-3 h-48 bg-gradient-to-b from-cyan-200 to-blue-400 border border-cyan-100 shadow-[0_0_20px_#38bdf8] transition-all ${
                    mirrorType === 'concave' ? 'rounded-l-full' : mirrorType === 'convex' ? 'rounded-r-full' : 'rounded-none'
                  }`}
                />

                {/* Normal Line */}
                <div className="absolute w-full h-[1px] border-t border-dashed border-slate-500 pointer-events-none" />
                <span className="absolute right-2 top-1/2 -translate-y-5 text-[11px] font-mono text-slate-400">Yüzey Normali (N)</span>

                {/* Light Ray Incoming */}
                <div
                  className="absolute left-10 w-44 h-1 bg-amber-400 origin-right shadow-[0_0_12px_#f59e0b]"
                  style={{ transform: `rotate(${incidentAngle}deg)` }}
                />

                {/* Light Ray Reflected */}
                <div
                  className="absolute left-10 w-44 h-1 bg-emerald-400 origin-right shadow-[0_0_12px_#10b981]"
                  style={{ transform: `rotate(${-incidentAngle}deg)` }}
                />
              </div>

              {/* Data readouts */}
              <div className="mt-6 flex items-center justify-center gap-8 text-xs font-mono">
                <span className="text-amber-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                  Gelme Açısı (i) = {incidentAngle}°
                </span>
                <span className="text-emerald-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                  Yansıma Açısı (r) = {incidentAngle}°
                </span>
              </div>
            </div>

            {/* Control Panel */}
            <div className="lg:col-span-4 bg-slate-900/80 rounded-3xl p-6 border border-slate-800 space-y-5">
              <h3 className="text-base font-black text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-blue-400" />
                Optik Kontrolleri
              </h3>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-400">
                  <span>Işın Gelme Açısı</span>
                  <span className="text-cyan-400 font-mono">{incidentAngle}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="80"
                  value={incidentAngle}
                  onChange={(e) => setIncidentAngle(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400">Ayna Türü:</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setMirrorType('flat')}
                    className={`py-2 text-xs font-bold rounded-xl border ${mirrorType === 'flat' ? 'bg-cyan-500 text-slate-950 border-cyan-400' : 'bg-slate-800 text-slate-300 border-slate-700'}`}
                  >
                    Düzlem
                  </button>
                  <button
                    onClick={() => setMirrorType('concave')}
                    className={`py-2 text-xs font-bold rounded-xl border ${mirrorType === 'concave' ? 'bg-blue-500 text-white border-blue-400' : 'bg-slate-800 text-slate-300 border-slate-700'}`}
                  >
                    Çukur
                  </button>
                  <button
                    onClick={() => setMirrorType('convex')}
                    className={`py-2 text-xs font-bold rounded-xl border ${mirrorType === 'convex' ? 'bg-indigo-500 text-white border-indigo-400' : 'bg-slate-800 text-slate-300 border-slate-700'}`}
                  >
                    Tümsek
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-800/40 text-xs text-slate-300 space-y-1.5">
                <div className="font-extrabold text-blue-300 flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-blue-400" /> Yansıma Kanunu:
                </div>
                <p>
                  Yansıma kanununa göre Gelme Açısı DAİMA Yansıma Açısına eşittir ($i = r$). Yüzeye dik gelen ışın (0°) kendi üzerinden geri döner.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 4. ELEKTRİK, DEVRE ELEMANLARI, REOSTA VEYA DİRENÇ EXPERIMENTS */}
        {(currentSubTopic.concepts.includes('İletken Maddeler') || currentSubTopic.concepts.includes('Elektriksel Direnç') || currentSubTopic.concepts.includes('Devre Elemanları')) && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 bg-slate-950/80 rounded-3xl p-6 border border-slate-800 relative min-h-[380px] flex flex-col items-center justify-center">
              {/* Electric Circuit Board */}
              <div className="relative w-full max-w-md bg-slate-900 border-2 border-slate-700 rounded-3xl p-8 shadow-2xl flex flex-col items-center justify-between gap-8">
                {/* Top: Lightbulb with Glow Animation */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-16 h-16 rounded-full border-2 border-yellow-400 transition-all duration-300 flex items-center justify-center"
                    style={{
                      backgroundColor: isSwitchClosed ? `rgba(234, 179, 8, ${getBulbBrightness() / 100})` : '#1e293b',
                      boxShadow: isSwitchClosed ? `0 0 ${getBulbBrightness() * 0.8}px rgba(234, 179, 8, 0.8)` : 'none'
                    }}
                  >
                    <Zap className={`w-8 h-8 ${isSwitchClosed ? 'text-amber-950' : 'text-slate-600'}`} />
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-300 mt-2">
                    Ampul Parlaklığı: %{getBulbBrightness()}
                  </span>
                </div>

                {/* Middle: Rheostat & Wire Indicator */}
                <div className="w-full bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center justify-between gap-4">
                  <div className="text-xs text-slate-400">
                    <div>İletken Tel: <strong className="text-white capitalize">{wireMaterial}</strong></div>
                    <div>Uzunluk: <strong className="text-cyan-400">{wireLength} cm</strong></div>
                  </div>

                  <div className="text-right text-xs">
                    <div className="text-slate-400">Reosta Sürgüsü: %{rheostatPosition}</div>
                    <div className="text-sm font-black text-amber-400 font-mono">Direnç: {getResistance()} Ω</div>
                  </div>
                </div>

                {/* Bottom: Battery & Switch */}
                <div className="w-full flex items-center justify-between px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-6 bg-slate-800 border border-slate-600 rounded flex items-center justify-center text-[10px] font-mono text-cyan-400 font-bold">
                      6V PİL
                    </div>
                  </div>

                  <button
                    onClick={() => setIsSwitchClosed(!isSwitchClosed)}
                    className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                      isSwitchClosed ? 'bg-emerald-500 text-slate-950 shadow-md' : 'bg-red-500/20 text-red-300 border border-red-500/40'
                    }`}
                  >
                    {isSwitchClosed ? 'Anahtar KAPALI (Akım Var)' : 'Anahtar AÇIK (Akım Yok)'}
                  </button>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="lg:col-span-4 bg-slate-900/80 rounded-3xl p-6 border border-slate-800 space-y-5">
              <h3 className="text-base font-black text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-yellow-400" />
                Devre Değişkenleri
              </h3>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-400">
                  <span>Reosta Sürgü Ayarı</span>
                  <span className="text-yellow-400 font-mono">%{rheostatPosition}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={rheostatPosition}
                  onChange={(e) => setRheostatPosition(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400">İletken Cinsi:</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setWireMaterial('copper')}
                    className={`py-2 text-xs font-bold rounded-xl border ${wireMaterial === 'copper' ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-slate-800 text-slate-300 border-slate-700'}`}
                  >
                    Bakır
                  </button>
                  <button
                    onClick={() => setWireMaterial('iron')}
                    className={`py-2 text-xs font-bold rounded-xl border ${wireMaterial === 'iron' ? 'bg-slate-600 text-white border-slate-500' : 'bg-slate-800 text-slate-300 border-slate-700'}`}
                  >
                    Demir
                  </button>
                  <button
                    onClick={() => setWireMaterial('nichrome')}
                    className={`py-2 text-xs font-bold rounded-xl border ${wireMaterial === 'nichrome' ? 'bg-purple-500 text-white border-purple-400' : 'bg-slate-800 text-slate-300 border-slate-700'}`}
                  >
                    Nikel-Krom
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-yellow-950/40 border border-yellow-800/40 text-xs text-slate-300 space-y-1.5">
                <div className="font-extrabold text-yellow-300 flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-yellow-400" /> Ohm Kanunu ve Direnç:
                </div>
                <p>
                  Reosta sürgüsü kaydırılarak devredeki telin direnci artırılırsa elektrik akımı zorlaşır ve ampulün parlaklığı azalır. Tel kısaldıkça ve kalınlaştıkça direnç azalır.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 5. GENLEŞME, YOĞUNLUK VEYA HÂL DEĞİŞİMİ EXPERIMENTS */}
        {(currentSubTopic.concepts.includes('Genleşme') || currentSubTopic.concepts.includes('Yoğunluk (d)') || currentSubTopic.concepts.includes('Maddenin Tanecikli Yapısı')) && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 bg-slate-950/80 rounded-3xl p-6 border border-slate-800 relative min-h-[380px] flex flex-col items-center justify-center">
              {/* Density Aquarium / Cylinder */}
              <div className="relative w-56 h-72 bg-slate-900 border-4 border-slate-600 rounded-b-3xl overflow-hidden shadow-2xl flex flex-col justify-end p-2">
                {/* Water Level */}
                <div className="w-full h-48 bg-gradient-to-t from-cyan-600/70 to-blue-500/50 rounded-b-2xl relative flex items-center justify-center">
                  <span className="text-[11px] font-bold text-cyan-200 absolute top-2 left-3">
                    Su (d = 1.00 g/cm³)
                  </span>

                  {/* Test Solid Cube */}
                  <div
                    className="w-16 h-16 rounded-xl border-2 border-white shadow-lg flex flex-col items-center justify-center text-xs font-black text-white transition-all duration-500"
                    style={{
                      transform: `translateY(${
                        parseFloat(getCalculatedDensity()) > 1 ? '60px' : parseFloat(getCalculatedDensity()) === 1 ? '0px' : '-65px'
                      })`,
                      backgroundColor: parseFloat(getCalculatedDensity()) > 1 ? '#dc2626' : parseFloat(getCalculatedDensity()) === 1 ? '#eab308' : '#16a34a'
                    }}
                  >
                    <span>{getCalculatedDensity()}</span>
                    <span className="text-[9px] font-normal">g/cm³</span>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-4 px-4 py-2 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300">
                Durum:{' '}
                <strong className={parseFloat(getCalculatedDensity()) > 1 ? 'text-red-400' : parseFloat(getCalculatedDensity()) === 1 ? 'text-yellow-400' : 'text-emerald-400'}>
                  {parseFloat(getCalculatedDensity()) > 1 ? 'DİBE BATTI (Yoğunluk > 1)' : parseFloat(getCalculatedDensity()) === 1 ? 'ASKIDA KALDI (Yoğunluk = 1)' : 'SUDA YÜZÜYOR (Yoğunluk < 1)'}
                </strong>
              </div>
            </div>

            {/* Controls */}
            <div className="lg:col-span-4 bg-slate-900/80 rounded-3xl p-6 border border-slate-800 space-y-5">
              <h3 className="text-base font-black text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-cyan-400" />
                Kütle ve Hacim Ayarları
              </h3>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-400">
                  <span>Cismin Kütlesi (m)</span>
                  <span className="text-cyan-400 font-mono">{cubeMass} g</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="300"
                  value={cubeMass}
                  onChange={(e) => setCubeMass(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-400">
                  <span>Cismin Hacmi (V)</span>
                  <span className="text-cyan-400 font-mono">{cubeVolume} cm³</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="200"
                  value={cubeVolume}
                  onChange={(e) => setCubeVolume(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 text-xs text-slate-300 space-y-1.5">
                <div className="font-extrabold text-cyan-300 flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-cyan-400" /> Yoğunluk Formülü:
                </div>
                <p>
                  $d = m / V$ formülü ile birim hacimdeki madde miktarı hesaplanır. Suyun yoğunluğu 1 g/cm³ olduğundan yoğunluğu 1'den küçük cisimler yüzer (tahta, buz), 1'den büyük cisimler batar (demir).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 6. ÇİMLENME, BİTKİ VE BİYOLOJİ EXPERIMENTS */}
        {(currentSubTopic.concepts.includes('Çimlenme') || currentSubTopic.concepts.includes('Biyoçeşitlilik') || currentSubTopic.concepts.includes('Hücre')) && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 bg-slate-950/80 rounded-3xl p-6 border border-slate-800 relative min-h-[380px] flex flex-col items-center justify-center">
              {/* Plant Pot Simulation */}
              <div className="relative w-64 h-64 bg-slate-900 border-2 border-slate-700 rounded-3xl p-6 flex flex-col items-center justify-end shadow-2xl overflow-hidden">
                {/* Soil */}
                <div className="w-full h-24 bg-amber-950 rounded-b-2xl border-t-4 border-amber-900 flex items-center justify-center relative">
                  {/* Seed / Sprout */}
                  <div className={`w-8 h-8 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
                    isGerminating ? 'bg-emerald-600 border-emerald-400 scale-125 -translate-y-8' : 'bg-amber-800 border-amber-600'
                  }`}>
                    {isGerminating ? '🌱' : '🌰'}
                  </div>
                </div>

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className={germLight ? 'text-amber-400 font-bold' : 'text-slate-500 font-bold'}>
                    {germLight ? '☀️ Aydınlık' : '🌑 Karanlık'}
                  </span>
                  <span className="text-cyan-300 font-mono font-bold">{germTemp} °C</span>
                </div>
              </div>

              {/* Status Outcome */}
              <div className="mt-4 px-4 py-2 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-bold text-center">
                Çimlenme Durumu:{' '}
                <strong className={isGerminating ? 'text-emerald-400' : 'text-red-400'}>
                  {isGerminating ? '✓ ÇİMLENME GERÇEKLEŞTİ (Tohum Filizlendi!)' : '✗ ÇİMLENME OLMADI (Şartlar Yetersiz!)'}
                </strong>
              </div>
            </div>

            {/* Controls */}
            <div className="lg:col-span-4 bg-slate-900/80 rounded-3xl p-6 border border-slate-800 space-y-5">
              <h3 className="text-base font-black text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-emerald-400" />
                Çimlenme Koşulları (S-O-S)
              </h3>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                  <span>Ortam Sıcaklığı:</span>
                  <span className="text-emerald-400 font-mono">{germTemp} °C</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={germTemp}
                  onChange={(e) => setGermTemp(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setGermWater(!germWater)}
                  className={`p-3 rounded-xl text-xs font-bold border transition-all ${germWater ? 'bg-cyan-500 text-slate-950 border-cyan-400' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
                >
                  💧 Su / Nem: {germWater ? 'VAR' : 'YOK'}
                </button>
                <button
                  onClick={() => setGermOxygen(!germOxygen)}
                  className={`p-3 rounded-xl text-xs font-bold border transition-all ${germOxygen ? 'bg-emerald-500 text-slate-950 border-emerald-400' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
                >
                  💨 Oksijen: {germOxygen ? 'VAR' : 'YOK'}
                </button>
              </div>

              <button
                onClick={() => setGermLight(!germLight)}
                className={`w-full p-3 rounded-xl text-xs font-bold border transition-all ${germLight ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
              >
                ☀️ Işık: {germLight ? 'AYDINLIK' : 'KARANLIK (Fark Etmez)'}
              </button>

              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/40 text-xs text-slate-300 space-y-1.5">
                <div className="font-extrabold text-emerald-300 flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-emerald-400" /> Bilimsel Gerçek:
                </div>
                <p>
                  Tohum çimlenirken fotosentez yapmadığı için ışığa ihtiyaç duymaz. Yalnızca <strong>Su, Oksijen ve Uygun Sıcaklık</strong> (S-O-S) şarttır!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

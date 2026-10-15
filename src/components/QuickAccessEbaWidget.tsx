import React, { useState, useEffect, useRef } from 'react';
import { Unit, SubTopic } from '../types/curriculum';
import {
  getSpecificEbaLink,
  getEbaResourceOptions,
  cleanSubTopicTitle,
  EbaResourceOption
} from '../utils/ebaLinks';
import {
  ExternalLink,
  Globe,
  Copy,
  Check,
  Sparkles,
  Video,
  FileText,
  FlaskConical,
  ChevronUp,
  ChevronDown,
  X,
  Layers,
  GraduationCap
} from 'lucide-react';

interface Props {
  currentGrade: number;
  currentUnit: Unit;
  currentSubTopic: SubTopic;
}

export const QuickAccessEbaWidget: React.FC<Props> = ({
  currentGrade,
  currentUnit,
  currentSubTopic
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const cleanTitle = cleanSubTopicTitle(currentSubTopic?.title || currentUnit?.title || 'Fen Bilimleri');
  const specificUrl = getSpecificEbaLink(currentGrade, currentUnit, currentSubTopic);
  const resourceOptions = getEbaResourceOptions(currentGrade, currentUnit, currentSubTopic);

  // Close menu on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleCopyLink = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(specificUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback copy
      const textArea = document.createElement('textarea');
      textArea.value = specificUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getCategoryIcon = (category: EbaResourceOption['category']) => {
    switch (category) {
      case 'video':
        return <Video className="w-4 h-4 text-rose-500" />;
      case 'test':
        return <FileText className="w-4 h-4 text-amber-500" />;
      case 'simulation':
        return <FlaskConical className="w-4 h-4 text-blue-500" />;
      case 'portal':
        return <Globe className="w-4 h-4 text-emerald-500" />;
      default:
        return <Sparkles className="w-4 h-4 text-orange-500" />;
    }
  };

  return (
    <div
      ref={menuRef}
      className="fixed bottom-5 left-5 z-40 select-none print:hidden flex flex-col items-start gap-2"
    >
      {/* POPUP / FLYOUT MENU */}
      {isOpen && (
        <div className="w-[340px] sm:w-[400px] max-h-[82vh] flex flex-col bg-white border border-orange-200/90 shadow-2xl rounded-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200 text-slate-800">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 text-white p-4 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3.5 right-3.5 p-1 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors"
              title="Kapat (Esc)"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-black tracking-wider uppercase bg-white/20 text-white border border-white/30 backdrop-blur-sm">
                <Globe className="w-3.5 h-3.5" />
                EBA Hızlı Erişim
              </span>
              <span className="text-[11px] font-bold text-orange-100 flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5" />
                {currentGrade}. Sınıf
              </span>
            </div>

            <h3 className="text-base font-extrabold tracking-tight text-white leading-snug line-clamp-1">
              {currentUnit?.title}
            </h3>

            <div className="mt-1 flex items-center gap-1.5 text-xs text-orange-50/90 font-medium">
              <span className="px-1.5 py-0.5 rounded bg-black/20 text-white font-mono text-[10px]">
                {currentSubTopic?.badge || `${currentGrade}.${currentUnit?.unitNumber}`}
              </span>
              <span className="truncate">{cleanTitle}</span>
            </div>
          </div>

          {/* Primary Action Button (Direct EBA Link for Active Sub-Topic) */}
          <div className="p-3.5 bg-orange-50/60 border-b border-orange-100">
            <a
              href={specificUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full group flex items-center justify-between px-4 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold rounded-xl shadow-md shadow-orange-500/25 transition-all duration-200 hover:shadow-lg active:scale-[0.98]"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
                <div className="text-left min-w-0">
                  <div className="text-xs uppercase font-extrabold tracking-wider text-orange-100">
                    Tek Tıkla Yeni Sekmede Aç
                  </div>
                  <div className="text-sm font-black truncate text-white">
                    {cleanTitle} EBA Sayfası
                  </div>
                </div>
              </div>
              <span className="px-2 py-1 rounded-md text-[10px] font-bold bg-white/20 text-white shrink-0 group-hover:bg-white group-hover:text-orange-700 transition-colors">
                Aç ↗
              </span>
            </a>

            {/* Quick URL preview & copy */}
            <div className="mt-2.5 flex items-center justify-between text-xs text-slate-500 px-1">
              <span className="truncate font-mono text-[11px] text-slate-400 max-w-[240px]">
                eba.gov.tr/...{encodeURIComponent(cleanTitle).slice(0, 20)}...
              </span>
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-orange-700 hover:text-orange-900 transition-colors"
                title="EBA arama bağlantısını panoya kopyala"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Kopyalandı!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Linki Kopyala</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* List of Resource Links */}
          <div className="p-3 space-y-1.5 overflow-y-auto max-h-[300px]">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1 mb-1">
              Özel EBA İçerik Kategorileri
            </div>

            {resourceOptions.map(opt => (
              <a
                key={opt.id}
                href={opt.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50 border border-transparent hover:border-orange-200 transition-all text-slate-700 hover:text-slate-900"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-white flex items-center justify-center shrink-0 border border-slate-200 group-hover:border-orange-200 transition-colors mt-0.5">
                  {getCategoryIcon(opt.category)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-800 group-hover:text-orange-950 truncate">
                      {opt.title}
                    </span>
                    <span className="px-1.5 py-0.2 rounded text-[9px] font-semibold bg-slate-100 group-hover:bg-orange-200/60 text-slate-600 group-hover:text-orange-800 shrink-0">
                      {opt.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-tight mt-0.5 line-clamp-1">
                    {opt.subtitle}
                  </p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-600 shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          {/* Footer note */}
          <div className="px-3.5 py-2.5 bg-slate-50 border-t border-slate-100 text-[10px] text-slate-500 flex items-center justify-between font-medium">
            <span>Türkiye Yüzyılı Maarif Modeli</span>
            <span className="text-orange-600 font-semibold">MEB • EBA Platformu</span>
          </div>
        </div>
      )}

      {/* FLOATING ACTION BUTTON (Always Visible) */}
      <div className="flex items-center rounded-2xl shadow-xl shadow-orange-600/20 border border-orange-400/40 bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 text-white p-1 backdrop-blur hover:shadow-orange-600/35 transition-all">
        
        {/* Main Clickable Area: Opens specific EBA link in a new tab */}
        <a
          href={specificUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={`Aktif Alt Konu (${cleanTitle}) için MEB EBA bağlantısını yeni sekmede aç`}
          className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/15 active:bg-white/25 transition-all text-left group"
        >
          <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center shrink-0 border border-white/30 group-hover:scale-105 transition-transform">
            <Globe className="w-3.5 h-3.5 text-white" />
          </div>

          <div className="flex flex-col leading-tight">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-black tracking-tight text-white uppercase drop-shadow-sm">
                EBA Hızlı Erişim
              </span>
              <ExternalLink className="w-3 h-3 text-orange-200 group-hover:text-white transition-colors" />
            </div>
            <span className="text-[10px] font-medium text-orange-100 truncate max-w-[150px] sm:max-w-[210px]">
              {currentSubTopic?.badge ? `${currentSubTopic.badge} • ` : ''}{cleanTitle}
            </span>
          </div>
        </a>

        {/* Menu Toggle Caret Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className={`p-2 rounded-xl transition-colors ${
            isOpen ? 'bg-white/30 text-white' : 'hover:bg-white/15 text-white/90 hover:text-white'
          }`}
          title={isOpen ? 'EBA Menüsünü Gizle' : 'EBA Seçenekler Menüsünü Aç'}
          aria-label="EBA Seçenekler Menüsü"
        >
          {isOpen ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronUp className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
};

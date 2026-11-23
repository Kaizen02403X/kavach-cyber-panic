import React from 'react';
import { Shield, PhoneCall, Globe, HeartPulse } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';

export const Navbar = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const { setIsBreatheModalOpen, clearScenario, currentScenario } = useApp();

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800/80 px-4 py-2.5">
      <div className="max-w-md mx-auto flex items-center justify-between gap-2">
        {/* Logo and title */}
        <button
          onClick={clearScenario}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
          title="Return to triage home"
        >
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg shadow-teal-900/30 group-active:scale-95 transition-transform">
            <Shield className="w-5 h-5 text-white stroke-[2.2]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-900 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base tracking-tight text-white">
                {t('appTitle')}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800/60">
                SOS
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium leading-none">
              {lang === 'hi' ? 'साइबर सुरक्षा' : 'Cyber Panic Button'}
            </p>
          </div>
        </button>

        {/* Right action group */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Calming Breathing Button */}
          <button
            onClick={() => setIsBreatheModalOpen(true)}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-teal-300 border border-slate-700/60 active:scale-95 transition-all"
            aria-label="Calm breathing exercise"
            title="4-4-4 Box Breathing"
          >
            <HeartPulse className="w-4 h-4 text-teal-400 animate-breathe" />
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 text-xs font-semibold border border-slate-700/60 active:scale-95 transition-all"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-teal-400" />
            <span>{lang === 'en' ? 'हिंदी' : 'EN'}</span>
          </button>

          {/* Call 1930 Helpline Button */}
          <a
            href="tel:1930"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs tracking-tight shadow-md shadow-amber-950/40 active:scale-95 transition-all"
            aria-label="Call 1930 cyber fraud helpline"
          >
            <PhoneCall className="w-3.5 h-3.5 fill-slate-950 animate-bounce" />
            <span>{lang === 'hi' ? '1930 कॉल' : 'Call 1930'}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

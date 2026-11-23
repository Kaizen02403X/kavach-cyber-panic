import React, { useState, useEffect } from 'react';
import { X, HeartPulse } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';

export const BreathingModal = () => {
  const { lang, t } = useLanguage();
  const { isBreatheModalOpen, setIsBreatheModalOpen } = useApp();
  
  // Phase: 0: Inhale (4s), 1: Hold (4s), 2: Exhale (4s), 3: Rest (4s)
  const [phase, setPhase] = useState(0);
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    if (!isBreatheModalOpen) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setPhase((p) => (p + 1) % 4);
          return 4;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isBreatheModalOpen, phase]);

  if (!isBreatheModalOpen) return null;

  const phases = [
    { name: t('breatheIn'), color: 'from-teal-400 to-cyan-500', scale: 'scale-125' },
    { name: t('breatheHold'), color: 'from-cyan-500 to-sky-500', scale: 'scale-125 ring-4 ring-cyan-400/40' },
    { name: t('breatheOut'), color: 'from-sky-500 to-teal-500', scale: 'scale-90' },
    { name: t('breatheRest'), color: 'from-slate-600 to-slate-700', scale: 'scale-90 opacity-80' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-sm bg-slate-900 border border-slate-700/80 rounded-3xl p-6 shadow-2xl text-center overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={() => setIsBreatheModalOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white active:scale-95 transition-all"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-1 text-teal-400">
          <HeartPulse className="w-5 h-5" />
          <h3 className="text-base font-bold text-slate-100">
            {t('breatheTitle')}
          </h3>
        </div>
        <p className="text-xs text-slate-400 mb-6 px-2">
          {t('breatheSubtitle')}
        </p>

        {/* Breathing Animation Circle */}
        <div className="my-8 flex items-center justify-center">
          <div className="relative flex items-center justify-center w-48 h-48">
            {/* Outer pulse wave */}
            <div
              className={`absolute inset-0 rounded-full bg-teal-500/10 transition-all duration-1000 ${
                phase === 0 || phase === 1 ? 'scale-110 opacity-100' : 'scale-95 opacity-30'
              }`}
            />
            {/* Core expanding sphere */}
            <div
              className={`w-36 h-36 rounded-full bg-gradient-to-br ${phases[phase].color} shadow-xl shadow-teal-950/50 flex flex-col items-center justify-center text-slate-950 font-bold transition-all duration-1000 ease-in-out ${phases[phase].scale}`}
            >
              <span className="text-4xl font-extrabold tracking-tighter">
                {countdown}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider opacity-85 mt-0.5">
                sec
              </span>
            </div>
          </div>
        </div>

        {/* Current phase prompt */}
        <div className="min-h-[48px] flex items-center justify-center">
          <p className="text-base font-semibold text-teal-200 tracking-wide">
            {phases[phase].name}
          </p>
        </div>

        {/* Reassurance text */}
        <div className="mt-4 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
          <p className="text-xs text-slate-300">
            {lang === 'hi'
              ? 'याद रखें: हड़बड़ी में गलत फैसला लेने से बचें। बैंक और साइबर हेल्पलाइन 1930 आपकी सुरक्षा के लिए तैयार हैं।'
              : 'Remember: Scammers rush you so you make mistakes. Taking a minute to slow down gives you control.'}
          </p>
        </div>

        {/* I'm ready button */}
        <button
          onClick={() => setIsBreatheModalOpen(false)}
          className="mt-5 w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm tracking-wide active:scale-98 transition-all"
        >
          {lang === 'hi' ? 'मैं तैयार हूँ, आगे बढ़ें' : "I'm ready, take action"}
        </button>
      </div>
    </div>
  );
};

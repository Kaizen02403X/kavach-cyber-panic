import React, { useState, useEffect } from 'react';
import { Clock, ShieldCheck, RefreshCw, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';

export const GoldenHourBanner = () => {
  const { lang, t } = useLanguage();
  const { timerStartTime, resetGoldenTimer } = useApp();
  const [elapsedMinutes, setElapsedMinutes] = useState(0);

  useEffect(() => {
    const updateTimer = () => {
      const now = Date.now();
      const diffSecs = Math.max(0, Math.floor((now - timerStartTime) / 1000));
      const mins = Math.floor(diffSecs / 60);
      setElapsedMinutes(mins);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 30000);
    return () => clearInterval(interval);
  }, [timerStartTime]);

  const goldenLimit = 120; // 2 hours
  const isWithinGoldenHour = elapsedMinutes <= goldenLimit;
  const remaining = Math.max(0, goldenLimit - elapsedMinutes);
  const remainingHours = Math.floor(remaining / 60);
  const remainingMins = remaining % 60;

  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 rounded-2xl p-3.5 mb-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <div className="mt-0.5 p-2 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300">
            <Clock className="w-4 h-4 text-teal-400" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-slate-100 uppercase tracking-wide">
                {t('goldenHourTitle')}
              </span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-teal-950/80 text-teal-300 border border-teal-800/60">
                {isWithinGoldenHour
                  ? lang === 'hi'
                    ? `${remainingHours}घं ${remainingMins}मि शेष`
                    : `${remainingHours}h ${remainingMins}m remaining`
                  : lang === 'hi'
                  ? 'तुरंत 1930 मिलाएं'
                  : 'Call 1930 immediately'}
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              {t('goldenHourDesc')}
            </p>
          </div>
        </div>

        <button
          onClick={resetGoldenTimer}
          className="text-slate-400 hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-700/50 active:scale-95 transition-all text-[11px] flex-shrink-0"
          title={t('resetTimer')}
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

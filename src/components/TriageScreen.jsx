import React from 'react';
import { 
  QrCode, 
  KeyRound, 
  Smartphone, 
  Link2Off, 
  ShieldAlert, 
  ArrowRight, 
  PhoneCall, 
  Users, 
  Landmark, 
  FileText,
  AlertTriangle,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { GoldenHourBanner } from './GoldenHourBanner';

export const TriageScreen = () => {
  const { lang, t } = useLanguage();
  const { selectScenario, setIsBankModalOpen, setIsFamilyModalOpen, setActiveTab } = useApp();

  const scenarios = [
    {
      id: 'upi_fraud',
      icon: QrCode,
      color: 'from-amber-500/20 to-teal-500/20 border-amber-500/40 text-amber-400',
      badgeColor: 'bg-amber-950 text-amber-300 border-amber-700/50'
    },
    {
      id: 'shared_otp',
      icon: KeyRound,
      color: 'from-rose-500/20 to-amber-500/20 border-rose-500/40 text-rose-400',
      badgeColor: 'bg-rose-950 text-rose-300 border-rose-700/50'
    },
    {
      id: 'shady_apk',
      icon: Smartphone,
      color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/40 text-cyan-400',
      badgeColor: 'bg-cyan-950 text-cyan-300 border-cyan-700/50'
    },
    {
      id: 'suspicious_link',
      icon: Link2Off,
      color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-400',
      badgeColor: 'bg-emerald-950 text-emerald-300 border-emerald-700/50'
    },
    {
      id: 'account_hacked',
      icon: ShieldAlert,
      color: 'from-violet-500/20 to-purple-500/20 border-violet-500/40 text-violet-400',
      badgeColor: 'bg-violet-950 text-violet-300 border-violet-700/50'
    }
  ];

  const currentDict = lang === 'hi' ? t('scenarios') : t('scenarios');

  return (
    <div className="pb-24 pt-2">
      {/* Reassuring Calm Header */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950/80 border border-slate-800 rounded-3xl p-5 mb-4 shadow-sm relative overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-teal-400">
            {lang === 'hi' ? 'आपातकालीन साइबर सहायता' : 'Emergency Cyber Recovery'}
          </span>
        </div>
        <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
          {t('calmHeader')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
          {t('calmSubheader')}
        </p>

        {/* Quick Help Pill row */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <a
            href="tel:1930"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow active:scale-95 transition-all"
          >
            <PhoneCall className="w-4 h-4 fill-slate-950" />
            <span>{t('callHelpline')}</span>
          </a>
          <button
            onClick={() => setIsFamilyModalOpen(true)}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 active:scale-95 transition-all"
          >
            <Users className="w-4 h-4 text-teal-400" />
            <span>{t('alertFamilyBtn')}</span>
          </button>
        </div>
      </div>

      {/* Golden hour banner */}
      <GoldenHourBanner />

      {/* Scenario Selection Section */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2 px-1">
          <div>
            <h2 className="text-base font-bold text-white tracking-tight">
              {t('selectScenarioTitle')}
            </h2>
            <p className="text-xs text-slate-400">
              {t('selectScenarioSubtitle')}
            </p>
          </div>
        </div>

        {/* Scenario Cards */}
        <div className="space-y-3 mt-3">
          {scenarios.map((item) => {
            const data = currentDict[item.id];
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => selectScenario(item.id)}
                className="w-full text-left p-4 rounded-2xl bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-slate-700/80 active:scale-[0.98] transition-all shadow-md group relative overflow-hidden"
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} border flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  <div className="flex-1 min-w-0 pr-6">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-bold text-sm sm:text-base text-slate-100 group-hover:text-teal-300 transition-colors">
                        {data?.title}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 font-medium line-clamp-1 mb-1">
                      {data?.subtitle}
                    </p>

                    <p className="text-[11px] text-slate-400 line-clamp-1">
                      {data?.shortDesc}
                    </p>

                    <div className="mt-2.5 flex items-center gap-2">
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${item.badgeColor}`}
                      >
                        {data?.badge}
                      </span>
                    </div>
                  </div>

                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400 group-hover:text-teal-300 group-hover:bg-slate-700/80 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Access Utility Bar */}
      <div className="grid grid-cols-2 gap-3 mt-6">
        <button
          onClick={() => setIsBankModalOpen(true)}
          className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 flex items-center gap-3 active:scale-95 transition-all text-left"
        >
          <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400">
            <Landmark className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-100 block">
              {lang === 'hi' ? 'बैंक हेल्पलाइन' : 'Bank Helplines'}
            </span>
            <span className="text-[10px] text-slate-400">
              {lang === 'hi' ? 'SBI, HDFC, ICICI, etc.' : 'Direct toll-free & SMS'}
            </span>
          </div>
        </button>

        <button
          onClick={() => setActiveTab('evidence')}
          className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 flex items-center gap-3 active:scale-95 transition-all text-left"
        >
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-100 block">
              {lang === 'hi' ? 'शिकायत पत्र ड्राफ्ट' : 'Draft Complaint'}
            </span>
            <span className="text-[10px] text-slate-400">
              {lang === 'hi' ? 'साइबर पोर्टल के लिए' : 'For cybercrime.gov.in'}
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

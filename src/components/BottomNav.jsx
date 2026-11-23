import React from 'react';
import { CheckSquare, Landmark, FileText, HeartPulse } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';

export const BottomNav = () => {
  const { lang, t } = useLanguage();
  const { 
    activeTab, 
    setActiveTab, 
    currentScenario, 
    setIsBankModalOpen, 
    setIsBreatheModalOpen 
  } = useApp();

  const handleTabChange = (tabId) => {
    if (tabId === 'helplines') {
      setIsBankModalOpen(true);
    } else if (tabId === 'breathe') {
      setIsBreatheModalOpen(true);
    } else {
      setActiveTab(tabId);
    }
  };

  const isChecklistActive = activeTab === 'checklist' || activeTab === 'triage';
  const isEvidenceActive = activeTab === 'evidence';

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 pb-safe">
      <div className="max-w-md mx-auto px-4 py-2 flex items-center justify-around">
        {/* Checklist / Action Plan */}
        <button
          onClick={() => handleTabChange(currentScenario ? 'checklist' : 'triage')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all ${
            isChecklistActive
              ? 'text-teal-400 font-bold'
              : 'text-slate-400 hover:text-slate-200 font-medium'
          }`}
          aria-label="Checklist"
        >
          <div className="relative">
            <CheckSquare className="w-5 h-5" />
            {isChecklistActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-teal-400" />
            )}
          </div>
          <span className="text-[10px] tracking-tight">
            {t('navChecklist')}
          </span>
        </button>

        {/* Bank Helplines Drawer */}
        <button
          onClick={() => handleTabChange('helplines')}
          className="flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-slate-400 hover:text-slate-200 font-medium transition-all"
          aria-label="Bank Helplines"
        >
          <Landmark className="w-5 h-5 text-slate-300" />
          <span className="text-[10px] tracking-tight">
            {t('navHelplines')}
          </span>
        </button>

        {/* Draft Complaint Vault */}
        <button
          onClick={() => handleTabChange('evidence')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all ${
            isEvidenceActive
              ? 'text-teal-400 font-bold'
              : 'text-slate-400 hover:text-slate-200 font-medium'
          }`}
          aria-label="Draft Complaint"
        >
          <div className="relative">
            <FileText className="w-5 h-5" />
            {isEvidenceActive && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-teal-400" />
            )}
          </div>
          <span className="text-[10px] tracking-tight">
            {t('navComplaint')}
          </span>
        </button>

        {/* Breathe / Panic Relief */}
        <button
          onClick={() => handleTabChange('breathe')}
          className="flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-slate-400 hover:text-teal-300 font-medium transition-all"
          aria-label="Calm breathing"
        >
          <HeartPulse className="w-5 h-5 text-teal-400 animate-pulse" />
          <span className="text-[10px] tracking-tight">
            {t('navBreathe')}
          </span>
        </button>
      </div>
    </nav>
  );
};

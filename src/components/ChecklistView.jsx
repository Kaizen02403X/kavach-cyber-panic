import React from 'react';
import { 
  CheckCircle2, 
  Circle, 
  PhoneCall, 
  ExternalLink, 
  Landmark, 
  FileText, 
  Users, 
  HelpCircle, 
  ChevronLeft, 
  Sparkles, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';
import { CHECKLIST_DATA } from '../data/checklistData';
import { GoldenHourBanner } from './GoldenHourBanner';

export const ChecklistView = () => {
  const { lang, t, getLocalized } = useLanguage();
  const { 
    currentScenario, 
    clearScenario, 
    toggleStep, 
    isStepCompleted, 
    completedSteps,
    setIsBankModalOpen,
    setIsFamilyModalOpen,
    setActiveTab,
    setGuideModalStep
  } = useApp();

  const scenarioData = currentScenario ? CHECKLIST_DATA[currentScenario] : null;
  const scenarioMeta = currentScenario ? t('scenarios')[currentScenario] : null;

  if (!scenarioData || !scenarioMeta) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-400">Please select a situation first.</p>
        <button
          onClick={clearScenario}
          className="mt-4 px-4 py-2 bg-teal-600 rounded-xl text-white text-sm font-semibold"
        >
          Go to Home
        </button>
      </div>
    );
  }

  const steps = scenarioData.steps || [];
  const currentScenarioCompleted = completedSteps[currentScenario] || [];
  const completedCount = steps.filter(s => currentScenarioCompleted.includes(s.id)).length;
  const progressPercent = steps.length > 0 ? Math.round((completedCount / steps.length) * 100) : 0;
  const isAllDone = completedCount === steps.length;

  const handleActionClick = (step) => {
    switch (step.actionType) {
      case 'call':
        window.location.href = `tel:${step.actionTarget}`;
        break;
      case 'ussd':
        window.location.href = `tel:${step.actionTarget}`;
        break;
      case 'bank_modal':
        setIsBankModalOpen(true);
        break;
      case 'family_modal':
        setIsFamilyModalOpen(true);
        break;
      case 'evidence_tab':
        setActiveTab('evidence');
        break;
      case 'url':
        window.open(step.actionTarget, '_blank', 'noopener,noreferrer');
        break;
      case 'email':
        window.location.href = step.actionTarget;
        break;
      case 'guide':
      case 'device_guide':
        setGuideModalStep(step);
        break;
      default:
        break;
    }
  };

  return (
    <div className="pb-24 pt-2">
      {/* Top navigation back to scenarios */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <button
          onClick={clearScenario}
          className="flex items-center gap-1.5 py-1.5 px-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium active:scale-95 transition-all"
        >
          <ChevronLeft className="w-4 h-4 text-teal-400" />
          <span>{t('changeScenario')}</span>
        </button>

        <span className="text-[11px] font-bold text-teal-400 bg-teal-950/80 border border-teal-800/60 px-2.5 py-1 rounded-full">
          {scenarioMeta.badge}
        </span>
      </div>

      {/* Scenario header card */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-5 mb-4 shadow-sm">
        <h1 className="text-xl font-extrabold text-white tracking-tight">
          {scenarioMeta.title}
        </h1>
        <p className="text-xs text-slate-300 mt-1">
          {scenarioMeta.subtitle}
        </p>

        {/* Live Progress Bar */}
        <div className="mt-4 pt-4 border-t border-slate-800/80">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-semibold text-slate-300">
              {t('stepProgress')}: <span className="text-teal-400">{completedCount} of {steps.length}</span>
            </span>
            <span className="font-bold text-teal-400">{progressPercent}%</span>
          </div>

          <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Golden hour reminder */}
      <GoldenHourBanner />

      {/* Completion celebratory banner */}
      {isAllDone && (
        <div className="mb-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-teal-950/60 to-emerald-950/80 border border-emerald-500/40 text-left animate-fadeIn">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-emerald-200">
                {t('allDoneTitle')}
              </h3>
              <p className="text-xs text-emerald-300/90 mt-1 leading-relaxed">
                {t('allDoneDesc')}
              </p>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => setActiveTab('evidence')}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs shadow hover:bg-emerald-400 active:scale-95 transition-all flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'शिकायत पत्र ड्राफ्ट करें' : 'Generate Complaint Draft'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Checklist items */}
      <div className="space-y-3.5">
        {steps.map((step, idx) => {
          const isDone = isStepCompleted(currentScenario, step.id);
          const stepTitle = getLocalized(step, 'title');
          const stepDesc = getLocalized(step, 'desc');
          const stepWhy = getLocalized(step, 'why');
          const actionLabel = getLocalized(step, 'actionLabel');

          return (
            <div
              key={step.id}
              className={`p-4 rounded-2xl border transition-all duration-200 ${
                isDone
                  ? 'bg-slate-900/40 border-slate-800/50 opacity-75'
                  : 'bg-slate-900/90 border-slate-700/80 shadow-md'
              }`}
            >
              {/* Header row with step index and checkbox */}
              <div className="flex items-start justify-between gap-3">
                <button
                  onClick={() => toggleStep(currentScenario, step.id)}
                  className="flex items-start gap-3 text-left flex-1 group"
                >
                  <div className="mt-0.5 flex-shrink-0">
                    {isDone ? (
                      <CheckCircle2 className="w-6 h-6 text-teal-400 fill-teal-950 transition-colors" />
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-slate-500 group-hover:border-teal-400 flex items-center justify-center transition-colors">
                        <span className="text-[11px] font-bold text-slate-300">
                          {idx + 1}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {t('stepNumber')} {idx + 1}
                      </span>
                      {step.urgency === 'critical' && !isDone && (
                        <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-amber-950 text-amber-300 border border-amber-800/80">
                          {lang === 'hi' ? 'अति महत्वपूर्ण' : 'Critical'}
                        </span>
                      )}
                    </div>
                    <h3
                      className={`text-sm sm:text-base font-bold mt-0.5 leading-snug ${
                        isDone ? 'line-through text-slate-400' : 'text-slate-100'
                      }`}
                    >
                      {stepTitle}
                    </h3>
                  </div>
                </button>
              </div>

              {/* Step Description */}
              <p className="text-xs sm:text-sm text-slate-300 mt-2 ml-9 leading-relaxed">
                {stepDesc}
              </p>

              {/* "Why this matters" reassurance box */}
              <div className="mt-2.5 ml-9 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/70 text-slate-300 text-xs">
                <span className="font-semibold text-teal-400 mr-1">
                  {t('whyItMatters')}
                </span>
                <span>{stepWhy}</span>
              </div>

              {/* Action Buttons Row */}
              <div className="mt-3 ml-9 flex flex-wrap items-center gap-2">
                {step.actionType && actionLabel && (
                  <button
                    onClick={() => handleActionClick(step)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs tracking-tight shadow active:scale-95 transition-all"
                  >
                    {step.actionType === 'call' && <PhoneCall className="w-3.5 h-3.5 fill-white" />}
                    {step.actionType === 'ussd' && <PhoneCall className="w-3.5 h-3.5 text-white" />}
                    {step.actionType === 'bank_modal' && <Landmark className="w-3.5 h-3.5 text-white" />}
                    {step.actionType === 'family_modal' && <Users className="w-3.5 h-3.5 text-white" />}
                    {step.actionType === 'evidence_tab' && <FileText className="w-3.5 h-3.5 text-white" />}
                    {step.actionType === 'url' && <ExternalLink className="w-3.5 h-3.5 text-white" />}
                    {(step.actionType === 'guide' || step.actionType === 'device_guide') && (
                      <HelpCircle className="w-3.5 h-3.5 text-white" />
                    )}
                    <span>{actionLabel}</span>
                  </button>
                )}

                {/* Mark Done quick toggle button */}
                <button
                  onClick={() => toggleStep(currentScenario, step.id)}
                  className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold border active:scale-95 transition-all ${
                    isDone
                      ? 'bg-slate-800 text-teal-300 border-teal-800/60'
                      : 'bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 border-slate-700'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isDone ? t('markedDone') : t('markCompleted')}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA to file evidence */}
      <div className="mt-6 p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-3">
        <div>
          <span className="text-xs font-bold text-white block">
            {lang === 'hi' ? 'सबूत सुरक्षित करें' : 'Record Evidence & Complaint'}
          </span>
          <span className="text-[11px] text-slate-400">
            {lang === 'hi' ? 'पुलिस व बैंक के लिए औपचारिक पत्र बनाएं' : 'Auto-format official letter for portal & bank'}
          </span>
        </div>
        <button
          onClick={() => setActiveTab('evidence')}
          className="px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow active:scale-95 transition-all flex items-center gap-1.5"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>{lang === 'hi' ? 'ड्राफ्ट देखें' : 'Open Vault'}</span>
        </button>
      </div>
    </div>
  );
};

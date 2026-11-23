import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { TriageScreen } from './components/TriageScreen';
import { ChecklistView } from './components/ChecklistView';
import { EvidenceVault } from './components/EvidenceVault';
import { BankHelplinesModal } from './components/BankHelplinesModal';
import { BreathingModal } from './components/BreathingModal';
import { FamilyAlertModal } from './components/FamilyAlertModal';
import { StepGuideModal } from './components/StepGuideModal';
import { BottomNav } from './components/BottomNav';

const MainLayout = () => {
  const { currentScenario, activeTab } = useApp();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area - Mobile Centered Container */}
      <main className="flex-1 w-full max-w-md mx-auto px-4">
        {activeTab === 'evidence' ? (
          <EvidenceVault />
        ) : currentScenario ? (
          <ChecklistView />
        ) : (
          <TriageScreen />
        )}
      </main>

      {/* Bottom Navigation */}
      <BottomNav />

      {/* Modals & Overlays */}
      <BreathingModal />
      <BankHelplinesModal />
      <FamilyAlertModal />
      <StepGuideModal />
    </div>
  );
};

export function App() {
  return (
    <LanguageProvider>
      <AppProvider>
        <MainLayout />
      </AppProvider>
    </LanguageProvider>
  );
}

export default App;

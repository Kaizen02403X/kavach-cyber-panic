import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Current active scenario (null means user is at triage selection)
  const [currentScenario, setCurrentScenario] = useState(() => {
    try {
      return localStorage.getItem('kavach_scenario') || null;
    } catch {
      return null;
    }
  });

  // Completed steps per scenario { upi_fraud: ['call_1930', ...], ... }
  const [completedSteps, setCompletedSteps] = useState(() => {
    try {
      const saved = localStorage.getItem('kavach_completed_steps');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Evidence data form
  const [evidenceData, setEvidenceData] = useState(() => {
    try {
      const saved = localStorage.getItem('kavach_evidence');
      return saved
        ? JSON.parse(saved)
        : {
            incidentType: 'Sent money / UPI fraud',
            dateTime: new Date().toISOString().slice(0, 16),
            amount: '',
            utr: '',
            scammerInfo: '',
            bankApp: '',
            brief: ''
          };
    } catch {
      return {
        incidentType: 'Sent money / UPI fraud',
        dateTime: new Date().toISOString().slice(0, 16),
        amount: '',
        utr: '',
        scammerInfo: '',
        bankApp: '',
        brief: ''
      };
    }
  });

  // Golden Hour start timestamp
  const [timerStartTime, setTimerStartTime] = useState(() => {
    try {
      const saved = localStorage.getItem('kavach_golden_start');
      if (saved) return parseInt(saved, 10);
      const now = Date.now();
      localStorage.setItem('kavach_golden_start', now.toString());
      return now;
    } catch {
      return Date.now();
    }
  });

  // Navigation tab: 'triage' | 'checklist' | 'evidence' | 'helplines'
  const [activeTab, setActiveTab] = useState(() => {
    try {
      const saved = localStorage.getItem('kavach_scenario');
      return saved ? 'checklist' : 'triage';
    } catch {
      return 'triage';
    }
  });

  // Modal controls
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  const [isBreatheModalOpen, setIsBreatheModalOpen] = useState(false);
  const [isFamilyModalOpen, setIsFamilyModalOpen] = useState(false);
  const [guideModalStep, setGuideModalStep] = useState(null);

  // Sync state to local storage
  useEffect(() => {
    try {
      if (currentScenario) {
        localStorage.setItem('kavach_scenario', currentScenario);
      } else {
        localStorage.removeItem('kavach_scenario');
      }
    } catch (e) {
      console.warn('Storage error:', e);
    }
  }, [currentScenario]);

  useEffect(() => {
    try {
      localStorage.setItem('kavach_completed_steps', JSON.stringify(completedSteps));
    } catch (e) {
      console.warn('Storage error:', e);
    }
  }, [completedSteps]);

  useEffect(() => {
    try {
      localStorage.setItem('kavach_evidence', JSON.stringify(evidenceData));
    } catch (e) {
      console.warn('Storage error:', e);
    }
  }, [evidenceData]);

  // Scenario selection
  const selectScenario = (scenarioId) => {
    setCurrentScenario(scenarioId);
    setActiveTab('checklist');
    
    // Auto-update incident type in evidence vault
    const scenarioLabels = {
      upi_fraud: 'Sent money / UPI fraud (Unauthorized Debit)',
      shared_otp: 'Shared OTP or Card details (Compromised Account)',
      shady_apk: 'Installed shady app / APK (Remote Access Trojan)',
      suspicious_link: 'Clicked suspicious link (Phishing Website)',
      account_hacked: 'WhatsApp / Social media hacked (Account Takeover)'
    };
    if (scenarioLabels[scenarioId]) {
      setEvidenceData((prev) => ({
        ...prev,
        incidentType: scenarioLabels[scenarioId]
      }));
    }
  };

  const clearScenario = () => {
    setCurrentScenario(null);
    setActiveTab('triage');
  };

  // Toggle step completion
  const toggleStep = (scenarioId, stepId) => {
    setCompletedSteps((prev) => {
      const list = prev[scenarioId] || [];
      const updated = list.includes(stepId)
        ? list.filter((id) => id !== stepId)
        : [...list, stepId];
      return { ...prev, [scenarioId]: updated };
    });
  };

  const isStepCompleted = (scenarioId, stepId) => {
    return Boolean(completedSteps[scenarioId]?.includes(stepId));
  };

  // Update evidence fields
  const updateEvidence = (fields) => {
    setEvidenceData((prev) => ({ ...prev, ...fields }));
  };

  // Reset timer
  const resetGoldenTimer = () => {
    const now = Date.now();
    setTimerStartTime(now);
    try {
      localStorage.setItem('kavach_golden_start', now.toString());
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentScenario,
        selectScenario,
        clearScenario,
        completedSteps,
        toggleStep,
        isStepCompleted,
        evidenceData,
        updateEvidence,
        timerStartTime,
        resetGoldenTimer,
        activeTab,
        setActiveTab,
        isBankModalOpen,
        setIsBankModalOpen,
        isBreatheModalOpen,
        setIsBreatheModalOpen,
        isFamilyModalOpen,
        setIsFamilyModalOpen,
        guideModalStep,
        setGuideModalStep
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

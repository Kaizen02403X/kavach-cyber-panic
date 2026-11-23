import React, { useState } from 'react';
import { 
  FileText, 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  PhoneCall, 
  Share2, 
  ShieldCheck, 
  Clock, 
  Building2, 
  Hash, 
  IndianRupee,
  AlertCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';

export const EvidenceVault = () => {
  const { lang, t } = useLanguage();
  const { evidenceData, updateEvidence } = useApp();
  const [copied, setCopied] = useState(false);

  const handleChange = (field, value) => {
    updateEvidence({ [field]: value });
  };

  // Generate formal complaint letter
  const generateFormalComplaint = () => {
    const dateFormatted = evidenceData.dateTime 
      ? new Date(evidenceData.dateTime).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) 
      : 'Immediate';

    return `FORMAL CYBERCRIME & BANK FRAUD DISPUTE COMPLAINT
Generated via Kavach Emergency Recovery Assistant
Date of Report: ${new Date().toLocaleDateString('en-IN')}

TO:
1. The Officer-in-Charge, National Cyber Crime Reporting Portal (cybercrime.gov.in) / Citizen Financial Cyber Fraud Reporting System (Helpline 1930)
2. The Fraud Risk Management & Customer Grievance Desk, ${evidenceData.bankApp || '[Bank / Payment App Name]'}

SUBJECT: Urgent Complaint regarding Unauthorized Cyber Fraud - Request to Freeze Fraudulent Beneficiary Account & Reverse Debited Funds

RESPECTED SIR / MADAM,

I am writing to formally report an unauthorized fraudulent transaction that occurred on my account/device. The details of the incident are as follows:

--- INCIDENT PARTICULARS ---
• Nature of Incident: ${evidenceData.incidentType || 'Financial Cyber Fraud / Unauthorized Electronic Debit'}
• Date & Approximate Time: ${dateFormatted}
• Disputed Amount Debited: ₹${evidenceData.amount || '0.00'}
• Transaction Reference / UTR Number: ${evidenceData.utr || 'Pending Bank Statement Verification'}
• Victim Bank / Application: ${evidenceData.bankApp || 'Not Specified'}
• Suspect / Fraudster Details:
  - Phone / Contact Number: ${evidenceData.scammerInfo || 'To be traced from digital footprints'}
  - Suspect UPI ID / Account / URL: ${evidenceData.scammerInfo || 'Submitted in digital logs'}

--- BRIEF SUMMARY OF THE FRAUD ---
${evidenceData.brief || 'The unauthorized debit was conducted without valid informed consent under fraudulent social engineering / technical compromise. The victim has taken immediate mitigation steps including contacting helpline 1930 and requesting card/UPI blocks.'}

--- LEGAL & REGULATORY GROUNDS ---
1. Section 66D of Information Technology Act, 2000: Punishment for cheating by personation by using computer resource.
2. Reserve Bank of India (RBI) Circular DBR.No.Leg.BC.78/09.07.005/2017-18 dated July 6, 2017 on "Customer Protection – Limiting Liability of Customers in Unauthorised Electronic Banking Transactions": As this incident is being reported promptly within the zero-liability notification window, the bank is legally obligated to register the complaint, initiate chargeback procedures, and credit the disputed sum pending investigation.
3. CFCFRMS / 1930 Protocol: The beneficiary bank is requested to immediately place a debit freeze on the mule recipient account holding the UTR funds to prevent cash withdrawal via ATM or off-ramps.

PRAYER / RELIEF REQUESTED:
1. Immediately freeze the suspect recipient account where funds corresponding to UTR ${evidenceData.utr || '[UTR]'} were transferred.
2. Issue an official Acknowledgement Number / Reference Slip for this complaint.
3. Process a temporary shadow credit / reversal as per RBI guidelines.

Sincerely,
Aggrieved Account Holder / Complainant
(Digital Signature & Submission via Kavach Cyber Defense App)`;
  };

  const complaintText = generateFormalComplaint();

  const handleCopy = () => {
    navigator.clipboard.writeText(complaintText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([complaintText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `Cybercrime_Complaint_${Date.now()}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(complaintText);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="pb-24 pt-2">
      {/* Header card */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-5 mb-4 shadow-sm">
        <div className="flex items-center gap-2 mb-1.5 text-teal-400">
          <FileText className="w-5 h-5" />
          <h1 className="text-xl font-extrabold text-white tracking-tight">
            {t('evidenceTitle')}
          </h1>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          {t('evidenceSubtitle')}
        </p>

        {/* Quick action bar */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <a
            href="tel:1930"
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow active:scale-95 transition-all"
          >
            <PhoneCall className="w-3.5 h-3.5 fill-slate-950" />
            <span>{t('call1930Direct')}</span>
          </a>
          <a
            href="https://cybercrime.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 active:scale-95 transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5 text-teal-400" />
            <span>{t('filePortalBtn')}</span>
          </a>
        </div>
      </div>

      {/* Incident Input Form */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 mb-5 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-teal-400" />
          <span>{lang === 'hi' ? 'घटना की मुख्य जानकारी' : 'Incident Details'}</span>
        </h2>

        {/* Incident Type */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">
            {t('fieldIncidentType')}
          </label>
          <input
            type="text"
            value={evidenceData.incidentType}
            onChange={(e) => handleChange('incidentType', e.target.value)}
            placeholder="e.g. Sent money / UPI fraud, Fake KYC"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-teal-500 transition-colors"
          />
        </div>

        {/* Amount Lost & Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              {t('fieldAmount')}
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                ₹
              </span>
              <input
                type="number"
                value={evidenceData.amount}
                onChange={(e) => handleChange('amount', e.target.value)}
                placeholder="e.g. 25000"
                className="w-full pl-8 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-teal-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              {t('fieldDateTime')}
            </label>
            <input
              type="datetime-local"
              value={evidenceData.dateTime}
              onChange={(e) => handleChange('dateTime', e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-teal-500 transition-colors"
            />
          </div>
        </div>

        {/* UTR Number */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">
            {t('fieldUtr')}
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
              <Hash className="w-4 h-4" />
            </span>
            <input
              type="text"
              value={evidenceData.utr}
              onChange={(e) => handleChange('utr', e.target.value)}
              placeholder="e.g. 432587651234 (12 digits on SMS or UPI app)"
              className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-teal-500 transition-colors font-mono"
            />
          </div>
        </div>

        {/* Scammer contact / UPI */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">
            {t('fieldScammerInfo')}
          </label>
          <input
            type="text"
            value={evidenceData.scammerInfo}
            onChange={(e) => handleChange('scammerInfo', e.target.value)}
            placeholder="e.g. +91 98765 43210 or fake-merchant@okhdfcbank"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-teal-500 transition-colors"
          />
        </div>

        {/* Bank or App Used */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">
            {t('fieldBankApp')}
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
              <Building2 className="w-4 h-4" />
            </span>
            <input
              type="text"
              value={evidenceData.bankApp}
              onChange={(e) => handleChange('bankApp', e.target.value)}
              placeholder="e.g. SBI / HDFC / Google Pay / PhonePe"
              className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-teal-500 transition-colors"
            />
          </div>
        </div>

        {/* Brief Description */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">
            {t('fieldBrief')}
          </label>
          <textarea
            rows={3}
            value={evidenceData.brief}
            onChange={(e) => handleChange('brief', e.target.value)}
            placeholder="e.g. Received a call claiming my electricity would be disconnected unless I clicked an APK link and paid ₹10 via UPI..."
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-teal-500 transition-colors resize-none"
          />
        </div>
      </div>

      {/* Generated Formal Complaint Preview */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <h3 className="text-sm font-bold text-white">
              {t('complaintDraftHeading')}
            </h3>
          </div>
          <span className="text-[10px] font-semibold text-teal-300 px-2 py-0.5 rounded bg-teal-950 border border-teal-800/60">
            {lang === 'hi' ? 'कानूनी रूप से मान्य' : 'Legally Formatted'}
          </span>
        </div>

        <p className="text-xs text-slate-400 mb-3 leading-relaxed">
          {t('complaintDisclaimer')}
        </p>

        {/* Draft text area container */}
        <div className="relative rounded-2xl bg-slate-950 border border-slate-800/90 p-4 font-mono text-xs text-slate-300 max-h-64 overflow-y-auto whitespace-pre-wrap leading-relaxed select-all">
          {complaintText}
        </div>

        {/* Action Button Group */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs transition-all active:scale-95 shadow ${
              copied
                ? 'bg-emerald-500 text-slate-950'
                : 'bg-teal-600 hover:bg-teal-500 text-white'
            }`}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? (lang === 'hi' ? 'कॉपी हो गया!' : 'Copied!') : t('copyComplaint')}</span>
          </button>

          {/* Download TXT Button */}
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 active:scale-95 transition-all"
          >
            <Download className="w-4 h-4 text-teal-400" />
            <span>{t('downloadTxt')}</span>
          </button>

          {/* WhatsApp Share Button */}
          <button
            onClick={handleWhatsAppShare}
            className="col-span-2 sm:col-span-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-white font-semibold text-xs border border-emerald-600/40 active:scale-95 transition-all"
          >
            <Share2 className="w-4 h-4 text-white" />
            <span>{lang === 'hi' ? 'शेयर करें' : 'Share Draft'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

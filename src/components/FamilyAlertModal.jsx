import React, { useState } from 'react';
import { X, Users, MessageCircle, Send, PhoneCall, Copy, Check, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';

export const FamilyAlertModal = () => {
  const { lang, t } = useLanguage();
  const { isFamilyModalOpen, setIsFamilyModalOpen } = useApp();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isFamilyModalOpen) return null;

  const defaultMessage = t('whatsappShareText');

  const handleWhatsApp = () => {
    const encoded = encodeURIComponent(defaultMessage);
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    const url = cleanNumber.length >= 10
      ? `https://wa.me/${cleanNumber.startsWith('91') ? cleanNumber : '91' + cleanNumber}?text=${encoded}`
      : `https://wa.me/?text=${encoded}`;
    window.open(url, '_blank');
  };

  const handleSMS = () => {
    const encoded = encodeURIComponent(defaultMessage);
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    const url = cleanNumber ? `sms:${cleanNumber}?body=${encoded}` : `sms:?body=${encoded}`;
    window.location.href = url;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(defaultMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-sm bg-slate-900 border border-slate-700/80 rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl overflow-hidden pb-safe">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2 text-teal-400">
            <Users className="w-5 h-5" />
            <h2 className="text-base font-bold text-white">
              {t('alertFamilyTitle')}
            </h2>
          </div>
          <button
            onClick={() => setIsFamilyModalOpen(false)}
            className="p-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white active:scale-95 transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-300 mt-3 leading-relaxed">
          {t('alertFamilyDesc')}
        </p>

        {/* Optional contact input */}
        <div className="mt-4">
          <label className="block text-xs font-semibold text-slate-400 mb-1">
            {lang === 'hi' ? 'परिजन का मोबाइल नंबर (वैकल्पिक)' : 'Trusted Mobile Number (Optional)'}
          </label>
          <div className="relative">
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="e.g. 9876543210"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-teal-500 transition-colors font-mono"
            />
          </div>
        </div>

        {/* Message preview box */}
        <div className="mt-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 italic">
          "{defaultMessage}"
        </div>

        {/* Action Buttons */}
        <div className="mt-4 space-y-2">
          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsApp}
            className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/30 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>{t('sendWhatsApp')}</span>
          </button>

          {/* SMS Button */}
          <button
            onClick={handleSMS}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <Send className="w-4 h-4 text-teal-400" />
            <span>{t('sendSMS')}</span>
          </button>

          {/* Copy Message */}
          <button
            onClick={handleCopy}
            className="w-full py-2 text-center text-xs text-slate-400 hover:text-slate-200 flex items-center justify-center gap-1.5 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? (lang === 'hi' ? 'कॉपी हो गया' : 'Copied!') : (lang === 'hi' ? 'संदेश टेक्स्ट कॉपी करें' : 'Copy message text')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

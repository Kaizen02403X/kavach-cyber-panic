import React from 'react';
import { X, CheckCircle, Info, ShieldAlert, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';

export const StepGuideModal = () => {
  const { lang, t, getLocalized } = useLanguage();
  const { guideModalStep, setGuideModalStep } = useApp();

  if (!guideModalStep) return null;

  const stepTitle = getLocalized(guideModalStep, 'title');

  // Detailed guidance instructions based on step id
  const getGuideContent = (id) => {
    switch (id) {
      case 'report_payment_app':
        return {
          en: {
            title: "How to Dispute Inside UPI Apps",
            steps: [
              "Google Pay: Open Google Pay -> tap on the fraudulent transaction -> tap 'Having issues?' -> select 'Payment fraud / Unauthorized transfer' -> Submit.",
              "PhonePe: Open PhonePe -> History -> select transaction -> tap 'Contact PhonePe Support' -> select 'I did not make this payment' -> Submit ticket.",
              "Paytm: Open Paytm -> Balance & History -> select payment -> tap 'Need Help / 24x7 Helpdesk' -> report as unauthorized fraud."
            ],
            tip: "Save the complaint reference number shown by the app; you will need it for the 1930 portal."
          },
          hi: {
            title: "पेमेंट ऐप में फ्रॉड शिकायत दर्ज करने का तरीका",
            steps: [
              "Google Pay: ऐप खोलें -> उस लेन-देन पर टैप करें -> 'Having issues?' चुनें -> 'Payment fraud' चुनकर शिकायत सबमिट करें।",
              "PhonePe: PhonePe खोलें -> History -> उस पेमेंट पर टैप करें -> 'Contact PhonePe Support' -> 'I did not make this payment' चुनें।",
              "Paytm: Paytm खोलें -> Passbook / History -> पेमेंट पर टैप करें -> 'Need Help / 24x7 Helpdesk' में जाकर अनधिकृत लेन-देन दर्ज करें।"
            ],
            tip: "शिकायत दर्ज करने के बाद मिलने वाला टिकट/रेफरेंस नंबर जरूर नोट कर लें।"
          }
        };

      case 'uninstall_apk_safemode':
        return {
          en: {
            title: "How to Safely Remove Malicious Apps",
            steps: [
              "Step 1: Keep Airplane mode ON. Do not turn internet back on yet.",
              "Step 2: Go to phone Settings -> Apps -> App Management.",
              "Step 3: Look for recent apps with names like AnyDesk, QuickSupport, TeamViewer, 'Electricity Support', or apps with blank icons.",
              "Step 4: Tap on the app -> Permissions -> Revoke all permissions (especially SMS, Phone, and Accessibility).",
              "Step 5: Tap 'Force Stop', then tap 'Uninstall'. If Uninstall is greyed out, go to Settings -> Security -> Device Admin Apps, deactivate the app first, then uninstall."
            ],
            tip: "If the screen keeps flickering, reboot into 'Safe Mode' (hold Power button -> long press 'Power off' -> tap 'Safe Mode') to uninstall."
          },
          hi: {
            title: "संदिग्ध ऐप को सुरक्षित अनइंस्टॉल करने का तरीका",
            steps: [
              "कदम 1: Airplane mode चालू रखें। अभी इंटरनेट ऑन न करें।",
              "कदम 2: फोन की सेटिंग्स -> Apps (ऐप प्रबंधन) में जाएं।",
              "कदम 3: हाल ही में आई अनजान ऐप जैसे AnyDesk, QuickSupport, बिजली बिल ऐप या बिना नाम/आइकन वाली ऐप खोजें।",
              "कदम 4: उस ऐप पर टैप करें -> Permissions में जाकर SMS और Accessibility की अनुमति बंद करें।",
              "कदम 5: 'Force Stop' दबाएं, फिर 'Uninstall' पर टैप करें। यदि अनइंस्टॉल बटन काम न करे तो Settings -> Security -> Device Admin Apps में जाकर ऐप को निष्क्रिय करें।"
            ],
            tip: "यदि फोन अटक रहा हो तो फोन को Safe Mode में चालू करके ऐप डिलीट करें।"
          }
        };

      case 'change_upi_mpin':
        return {
          en: {
            title: "How to Reset UPI PIN (MPIN)",
            steps: [
              "Step 1: Open Google Pay or PhonePe.",
              "Step 2: Tap your Profile picture at top right -> select 'Bank Accounts'.",
              "Step 3: Tap on the bank account you want to protect.",
              "Step 4: Tap 'Reset UPI PIN' or 'Forgot UPI PIN'.",
              "Step 5: Enter the last 6 digits of your Debit Card & Expiry date, or choose 'Verify using Aadhaar'. Enter the bank OTP and create a new 6-digit PIN."
            ],
            tip: "Never use your birth year or simple sequences like 123456 or 000000."
          },
          hi: {
            title: "नया UPI पिन (MPIN) बनाने का तरीका",
            steps: [
              "कदम 1: Google Pay या PhonePe खोलें।",
              "कदम 2: ऊपर दाईं ओर अपनी प्रोफाइल फोटो पर टैप करें -> 'Bank Accounts' चुनें।",
              "कदम 3: अपने बैंक खाते पर टैप करें।",
              "कदम 4: 'Reset UPI PIN' या 'Forgot UPI PIN' चुनें।",
              "कदम 5: अपने डेबिट कार्ड के अंतिम 6 अंक व एक्सपायरी डालें (या आधार OTP चुनें) और नया 6 अंकों का गुप्त पिन बनाएं।"
            ],
            tip: "अपना जन्म वर्ष या 123456 जैसा आसान पिन कभी न बनाएं।"
          }
        };

      default:
        return {
          en: {
            title: stepTitle,
            steps: [
              "Follow the highlighted instructions on screen calmly.",
              "Keep all digital evidence and transaction receipts ready.",
              "Contact the official cyber helpline 1930 for real-time state police support."
            ],
            tip: "Do not panic. Prompt action prevents financial loss."
          },
          hi: {
            title: stepTitle,
            steps: [
              "स्क्रीन पर दिए गए निर्देशों का शांत रहकर पालन करें।",
              "सभी डिजिटल सबूत और लेन-देन रसीदें संभाल कर रखें।",
              "तत्काल सरकारी सहायता के लिए हेल्पलाइन 1930 पर संपर्क करें।"
            ],
            tip: "घबराएं नहीं। सही समय पर कदम उठाने से नुकसान रुक जाता है।"
          }
        };
    }
  };

  const content = getGuideContent(guideModalStep.id)[lang] || getGuideContent(guideModalStep.id).en;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-slate-900 border border-slate-700/80 rounded-t-3xl sm:rounded-3xl p-5 shadow-2xl overflow-hidden pb-safe">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2 text-teal-400">
            <Info className="w-5 h-5" />
            <h2 className="text-sm sm:text-base font-bold text-white">
              {content.title}
            </h2>
          </div>
          <button
            onClick={() => setGuideModalStep(null)}
            className="p-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white active:scale-95 transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Steps walkthrough */}
        <div className="mt-4 space-y-3">
          {content.steps.map((st, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200 leading-relaxed">
              <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 font-bold flex items-center justify-center flex-shrink-0 text-[10px] mt-0.5">
                {i + 1}
              </span>
              <span>{st}</span>
            </div>
          ))}
        </div>

        {/* Pro Tip */}
        {content.tip && (
          <div className="mt-4 p-3 rounded-xl bg-teal-950/50 border border-teal-800/50 text-xs text-teal-300">
            <strong>{lang === 'hi' ? 'महत्वपूर्ण सुझाव:' : 'Crucial Advice:'}</strong> {content.tip}
          </div>
        )}

        {/* Got it button */}
        <button
          onClick={() => setGuideModalStep(null)}
          className="mt-5 w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs tracking-wide active:scale-95 transition-all"
        >
          {lang === 'hi' ? 'समझ गया' : 'Got it, close'}
        </button>
      </div>
    </div>
  );
};

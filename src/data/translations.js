export const TRANSLATIONS = {
  en: {
    appTitle: "Kavach",
    appSubtitle: "Cyber Panic Assistant",
    tagline: "Emergency cyber recovery for India",
    calmHeader: "Take a deep breath. We'll fix this step-by-step.",
    calmSubheader: "Scammers rely on panic and speed. Slow down, follow these exact steps, and protect your accounts now.",
    callHelpline: "Call 1930",
    helplineDesc: "National Cyber Fraud Helpline (Free)",
    helplineSubtitle: "Toll-free | 24x7 Government of India",
    goldenHourTitle: "The Golden Hour Window",
    goldenHourDesc: "Reporting within 1 to 2 hours gives banks and NPCI the highest chance to freeze fraudulent beneficiary accounts before cash withdrawal.",
    timerStarted: "Incident Timer Active",
    resetTimer: "Reset Timer",
    selectScenarioTitle: "What just happened?",
    selectScenarioSubtitle: "Tap your situation below to get an instant tailored recovery checklist:",
    
    scenarios: {
      upi_fraud: {
        id: "upi_fraud",
        title: "Sent Money / UPI Fraud",
        subtitle: "Fake QR scan, trick payment, or entered UPI PIN",
        shortDesc: "Money debited via GPay, PhonePe, Paytm, BHIM, or UPI",
        icon: "QrCode",
        urgency: "Immediate",
        badge: "Critical 2-Hour Window"
      },
      shared_otp: {
        id: "shared_otp",
        title: "Shared OTP or Card Details",
        subtitle: "Fake bank caller, KYC renewal, or reward scam",
        shortDesc: "Disclosed OTP, CVV, Card Number, or NetBanking password",
        icon: "KeyRound",
        urgency: "Immediate",
        badge: "Account At Risk"
      },
      shady_apk: {
        id: "shady_apk",
        title: "Installed Shady App or APK",
        subtitle: "AnyDesk, TeamViewer, fake electricity/loan APK",
        shortDesc: "Screen-sharing tool or rogue APK downloaded on phone",
        icon: "SmartphoneAlert",
        urgency: "Critical - Device Compromised",
        badge: "Turn Off Internet"
      },
      suspicious_link: {
        id: "suspicious_link",
        title: "Clicked a Suspicious Link",
        subtitle: "Fake electricity cut, parcel delivery, or job link",
        shortDesc: "Opened phishing SMS/WhatsApp link, entered details",
        icon: "Link2Off",
        urgency: "High",
        badge: "Prevent Account Drain"
      },
      account_hacked: {
        id: "account_hacked",
        title: "WhatsApp / Social Media Hacked",
        subtitle: "Logged out, scammer asking contacts for money",
        shortDesc: "WhatsApp account takeover, Instagram, or Facebook hack",
        icon: "ShieldAlert",
        urgency: "High",
        badge: "Protect Contacts"
      }
    },

    // Step by step lists
    checklistHeader: "Emergency Action Plan",
    stepProgress: "Steps Completed",
    allDoneTitle: "All critical steps completed!",
    allDoneDesc: "Great job keeping your cool. Make sure you keep your formal cyber complaint reference number safe.",
    changeScenario: "Switch Situation",
    markCompleted: "Mark Done",
    markedDone: "Done",
    
    // Bottom navigation
    navChecklist: "Checklist",
    navHelplines: "Bank Lines",
    navComplaint: "Draft Complaint",
    navBreathe: "Breathe (Calm)",

    // Family alert
    alertFamilyBtn: "Alert Trusted Contact",
    alertFamilyTitle: "Alert a Trusted Contact",
    alertFamilyDesc: "Notify a family member or friend via WhatsApp so they can support you and watch out for impersonation.",
    whatsappShareText: "URGENT: I think I just faced a cyber scam / fraudulent transaction and need help. I am following emergency recovery steps right now on Kavach. Please call me immediately.",
    sendWhatsApp: "Open in WhatsApp",
    sendSMS: "Send as SMS",

    // Breathing box
    breatheTitle: "Panic Relief: 4-4-4 Box Breathing",
    breatheSubtitle: "Inhale, hold, exhale. 60 seconds to calm your adrenaline.",
    breatheIn: "Inhale slowly...",
    breatheHold: "Hold your breath...",
    breatheOut: "Exhale gently...",
    breatheRest: "Rest & relax...",

    // Evidence & Auto complaint
    evidenceTitle: "Quick Evidence & Complaint Draft",
    evidenceSubtitle: "Record key transaction details now while they are fresh. Kavach generates an official complaint for cybercrime.gov.in and your bank.",
    fieldIncidentType: "Incident Type",
    fieldDateTime: "Approximate Date & Time",
    fieldAmount: "Amount Lost (₹)",
    fieldUtr: "Transaction ID / UTR / Reference No.",
    fieldScammerInfo: "Scammer's Phone / UPI ID / Link",
    fieldBankApp: "Your Bank / Payment App",
    fieldBrief: "Brief summary of what happened",
    generateComplaint: "Generate Official Complaint",
    copyComplaint: "Copy Complaint Text",
    copiedToast: "Complaint copied to clipboard!",
    downloadTxt: "Download (.TXT)",
    filePortalBtn: "Open cybercrime.gov.in",
    call1930Direct: "Call 1930 Now",
    complaintDraftHeading: "Generated Official Complaint Draft",
    complaintDisclaimer: "You can paste this directly on the National Cyber Crime Portal (cybercrime.gov.in) or email it to your bank's fraud grievance desk.",

    // Bank helplines modal
    bankDirectoryTitle: "Indian Bank & UPI Emergency Helplines",
    bankDirectorySubtitle: "Tap to call directly to freeze your account or block debit/credit cards.",
    searchBankPlaceholder: "Search bank (e.g. SBI, HDFC, PhonePe)...",
    smsBlockCode: "Instant SMS Block Code",
    officialPortal: "Official Portal",
    directCall: "Direct Call",

    // General UI
    close: "Close",
    back: "Back",
    whyItMatters: "Why this matters:",
    actionPrompt: "Take Action:",
    stepNumber: "Step"
  },

  hi: {
    appTitle: "कवच",
    appSubtitle: "साइबर आपातकालीन सहायता",
    tagline: "धोखाधड़ी से तत्काल सुरक्षा और रिकवरी",
    calmHeader: "एक गहरी सांस लें। हम इसे कदम-दर-कदम संभालेंगे।",
    calmSubheader: "ठग आपके डर और घबराहट का फायदा उठाते हैं। शांत रहें, नीचे दिए गए कदम उठाएं और अपने पैसे व फोन को सुरक्षित करें।",
    callHelpline: "1930 पर कॉल करें",
    helplineDesc: "राष्ट्रीय साइबर वित्तीय हेल्पलाइन (निःशुल्क)",
    helplineSubtitle: "टोल-फ्री | 24x7 भारत सरकार",
    goldenHourTitle: "गोल्डन आवर (अहम 2 घंटे)",
    goldenHourDesc: "घटना के 1-2 घंटे के भीतर 1930 पर सूचना देने से बैंक और NPCI ठग के बैंक खाते में पैसा फ्रीज (होल्ड) करवा सकते हैं।",
    timerStarted: "घटना टाइमर सक्रिय",
    resetTimer: "टाइमर रीसेट",
    selectScenarioTitle: "आपके साथ क्या हुआ?",
    selectScenarioSubtitle: "अपनी स्थिति चुनें ताकि तुरंत सही कदम दिखाए जा सकें:",

    scenarios: {
      upi_fraud: {
        id: "upi_fraud",
        title: "पैसे कट गए / UPI फ्रॉड",
        subtitle: "फर्जी QR स्कैन, गलत ट्रांसफर या पिन डलवा दिया",
        shortDesc: "GPay, PhonePe, Paytm या बैंक खाते से पैसे कट गए",
        icon: "QrCode",
        urgency: "तत्काल कार्रवाई",
        badge: "गोल्डन 2 घंटे"
      },
      shared_otp: {
        id: "shared_otp",
        title: "OTP या कार्ड डिटेल साझा की",
        subtitle: "फर्जी बैंक अधिकारी, KYC या रिवॉर्ड कॉल",
        shortDesc: "फोन पर किसी को OTP, CVV या पासवर्ड बता दिया",
        icon: "KeyRound",
        urgency: "अत्यधिक संवेदनशील",
        badge: "खाता तुरंत फ्रीज करें"
      },
      shady_apk: {
        id: "shady_apk",
        title: "संदिग्ध ऐप या APK इनस्टॉल की",
        subtitle: "AnyDesk, TeamViewer या बिजली/लोन ऐप",
        shortDesc: "स्क्रीन-शेयरिंग ऐप या अज्ञात APK डाउनलोड की",
        icon: "SmartphoneAlert",
        urgency: "फोन पर खतरा",
        badge: "तुरंत इंटरनेट बंद करें"
      },
      suspicious_link: {
        id: "suspicious_link",
        title: "संदिग्ध लिंक पर क्लिक किया",
        subtitle: "बिजली बिल, कूरियर पार्सल या लॉटरी लिंक",
        shortDesc: "SMS या WhatsApp पर आए लिंक में जानकारी भरी",
        icon: "Link2Off",
        urgency: "उच्च सतर्कता",
        badge: "डिटेल ब्लॉक करें"
      },
      account_hacked: {
        id: "account_hacked",
        title: "WhatsApp / सोशल मीडिया हैक हुआ",
        subtitle: "अकाउंट लॉगआउट, दोस्तों से पैसे मांगे जा रहे हैं",
        shortDesc: "WhatsApp या Instagram पर किसी और का कब्जा",
        icon: "ShieldAlert",
        urgency: "उच्च सतर्कता",
        badge: "संपर्कों को सतर्क करें"
      }
    },

    checklistHeader: "आपातकालीन कार्य योजना",
    stepProgress: "पूरे किए गए कदम",
    allDoneTitle: "सभी महत्वपूर्ण कदम पूरे हुए!",
    allDoneDesc: "शाबाश! आपने समय रहते कदम उठाए। 1930 की पावती संख्या (Acknowledgement No.) सुरक्षित रखें।",
    changeScenario: "स्थिति बदलें",
    markCompleted: "पूरा चिह्नित करें",
    markedDone: "पूर्ण",

    navChecklist: "कार्य योजना",
    navHelplines: "बैंक हेल्पलाइन",
    navComplaint: "शिकायत ड्राफ्ट",
    navBreathe: "सांस लें (शांति)",

    alertFamilyBtn: "विश्वस्त परिजन को अलर्ट भेजें",
    alertFamilyTitle: "परिवार या मित्र को तुरंत सूचित करें",
    alertFamilyDesc: "WhatsApp पर एक क्लिक से संदेश भेजें ताकि कोई आपके नाम से ठगी का शिकार न हो और आपको सहयोग मिले।",
    whatsappShareText: "जरूरी सूचना: मुझे लगता है मेरे साथ साइबर धोखाधड़ी/फ्रॉड हुआ है। मैं कवच ऐप से आपातकालीन कदम उठा रहा/रही हूँ। कृपया मुझे तुरंत कॉल करें।",
    sendWhatsApp: "WhatsApp पर भेजें",
    sendSMS: "SMS द्वारा भेजें",

    breatheTitle: "तनाव मुक्ति: 4-4-4 सांस तकनीक",
    breatheSubtitle: "अंदर लें, रोकें, बाहर छोड़ें। 60 सेकंड में घबराहट शांत करें।",
    breatheIn: "धीरे-धीरे सांस अंदर लें...",
    breatheHold: "सांस रोक कर रखें...",
    breatheOut: "धीरे-धीरे सांस छोड़ें...",
    breatheRest: "आराम करें...",

    evidenceTitle: "सबूत दर्ज करें और औपचारिक शिकायत बनाएं",
    evidenceSubtitle: "लेन-देन की जानकारी अभी भरें जब वह याद है। कवच cybercrime.gov.in और बैंक के लिए तैयार शिकायत पत्र बनाएगा।",
    fieldIncidentType: "घटना का प्रकार",
    fieldDateTime: "घटना की तारीख और समय",
    fieldAmount: "गंवाई गई राशि (₹)",
    fieldUtr: "ट्रांजेक्शन ID / UTR / संदर्भ संख्या",
    fieldScammerInfo: "ठग का फोन नंबर / UPI ID / लिंक",
    fieldBankApp: "आपका बैंक या पेमेंट ऐप",
    fieldBrief: "क्या हुआ उसका संक्षिप्त विवरण",
    generateComplaint: "औपचारिक शिकायत तैयार करें",
    copyComplaint: "शिकायत कॉपी करें",
    copiedToast: "शिकायत क्लिपबोर्ड पर कॉपी हो गई!",
    downloadTxt: "डाउनलोड करें (.TXT)",
    filePortalBtn: "cybercrime.gov.in खोलें",
    call1930Direct: "तुरंत 1930 मिलाएं",
    complaintDraftHeading: "तैयार आधिकारिक शिकायत पत्र",
    complaintDisclaimer: "यह पत्र आप सीधे राष्ट्रीय साइबर पोर्टल (cybercrime.gov.in) पर पेस्ट कर सकते हैं या अपने बैंक को ईमेल कर सकते हैं।",

    bankDirectoryTitle: "भारतीय बैंक और UPI आपातकालीन नंबर",
    bankDirectorySubtitle: "खाता फ्रीज करने या कार्ड ब्लॉक करने के लिए सीधे कॉल करें।",
    searchBankPlaceholder: "बैंक खोजें (जैसे SBI, HDFC, PhonePe)...",
    smsBlockCode: "त्वरित SMS ब्लॉक कोड",
    officialPortal: "आधिकारिक वेबसाइट",
    directCall: "सीधी कॉल",

    close: "बंद करें",
    back: "वापस जाएं",
    whyItMatters: "यह क्यों जरूरी है:",
    actionPrompt: "तुरंत करें:",
    stepNumber: "कदम"
  }
};

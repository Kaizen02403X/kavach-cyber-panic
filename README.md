# 🛡️ Kavach: Cyber Panic Button
### कवच - आपातकालीन साइबर सुरक्षा और रिकवरी सहायक

> **An emergency cyber-recovery Progressive Web App (PWA) designed for everyday Indian users who have just been scammed, suffered unauthorized bank debits, or suspect their device is compromised.**

---

## 🌟 Core UX Philosophy
* **Zero-Jargon & Anti-Panic:** Eliminates scary technical jargon and flashing alarms. Utilizes a calming, trustworthy deep navy and teal palette (`#090D16`, `#0F172A`, `#0D9488`).
* **One-Thumb, Mobile-First Accessibility:** Optimized for 375px–430px mobile viewports (cleanly centered on desktop) with large tap targets and visible progress indicators.
* **Zero Friction (No Login Wall):** Instant access on load. All progress and evidence are persisted locally via `localStorage` so users never lose state if they switch apps to make emergency phone calls.
* **Full Bilingual Support (English ⇋ हिंदी):** Seamless real-time language toggle translating headers, triage scenarios, action checklists, reassurance notes, and official complaint templates.

---

## 🚀 Key Features

### 1. Instant Triage Home Screen
* **Emergency 1930 Helpline Quick-Dial:** Prominent direct calling button (`tel:1930`) to the **National Cyber Crime Reporting Helpline**.
* **The "Golden Hour" Countdown Timer:** Live 2-hour window highlighting the critical window when funds can still be frozen across Indian banks and NPCI (via CFCFRMS) before scammers cash out via ATMs.
* **4-4-4 Box Breathing Tool:** Interactive calming exercise with visual pulses and 4-second breath cycles (Inhale, Hold, Exhale, Rest) to help users regain control.
* **5 Indian Scam Scenarios:**
  1. **Sent Money / UPI Fraud:** Fake QR scan, trick payments, or unauthorized UPI PIN debits.
  2. **Shared OTP or Card Details:** Fake bank manager/KYC calls, CVV disclosures, or reward scams.
  3. **Installed Shady App or APK:** Screen-sharing tools (AnyDesk, QuickSupport) or rogue APK downloads (electricity bill, fake loan apps).
  4. **Clicked a Suspicious Link:** Phishing SMS/WhatsApp links, fake electricity power cut warnings, or parcel delivery notifications.
  5. **Social Media / WhatsApp Hacked:** Account takeover and scammers impersonating victims to demand emergency money from relatives.

### 2. Dynamic Action Checklist
* **Tailored Recovery Steps:** Real-time step-by-step checklist based on the selected threat scenario.
* **Why This Matters:** Reassuring plain-language explanations of the legal and technical rationale behind each action.
* **Direct Actions:** One-tap triggers for `tel:1930`, USSD verification codes (`*#21#` and `##002#` to detect/clear hidden call & SMS forwarders), bank drawers, and official portals.
* **Interactive Step Guides:** In-app walkthroughs for disputing in UPI apps (Google Pay, PhonePe, Paytm), safely uninstalling APKs in Safe Mode, and resetting UPI MPINs.

### 3. Quick Evidence Logger & Auto-Complaint Generator
* **Low-Friction Input Form:** Capture critical transaction details while fresh (Incident Type, Date/Time, Amount in ₹, 12-digit UTR, Scammer Contact/UPI, Bank/App used).
* **Official Pre-Formatted Cyber Complaint:** Formatted for direct copy-pasting to `cybercrime.gov.in` and bank fraud grievance desks.
* **Statutory Cites:**
  * **Section 66D of Information Technology Act, 2000** (Cheating by personation).
  * **RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18** (Zero Customer Liability for timely reporting of unauthorized transactions).
  * **CFCFRMS / 1930 Beneficiary Account Freeze Protocols**.
* **Export Options:** One-tap Copy to Clipboard, Download as `.TXT`, and Share via WhatsApp.

### 4. Indian Bank & UPI Helplines Directory
* Quick-dial directory for major Indian banks (SBI, HDFC, ICICI, Axis, Kotak, PNB, Bank of Baroda) and UPI apps (Google Pay, PhonePe, Paytm, BHIM/NPCI).
* Instant SMS block syntax for debit/credit cards (e.g., `BLOCK <last 4 digits>` to 567676 for SBI).

### 5. "Family Alert" Quick-Share
* One-tap WhatsApp / SMS message generator to alert trusted contacts immediately, preventing secondary impersonation extortion.

---

## 🛠️ Tech Stack
* **Framework:** React 18 + Vite
* **Styling:** Tailwind CSS (Custom calm cyber-defense color system)
* **Icons:** Lucide React
* **PWA:** Web App Manifest + Offline Service Worker (`sw.js`)

---

## 💻 Local Setup & Development

```bash
# 1. Clone the repository
git clone https://github.com/Kaizen02403X/kavach-cyber-panic.git
cd kavach-cyber-panic

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Build for production
npm run build
```

---

## 📄 License
MIT License. Built for public safety and rapid cyber fraud mitigation in India.

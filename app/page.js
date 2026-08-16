'use client';

import React, { useState, useEffect } from 'react';
import { situationsData } from '../data/situations';
import { translationsData } from '../data/translations';
import { Icons } from '../components/Icons';
import SearchBox from '../components/SearchBox';
import BannerSection from '../components/BannerSection';
import EmptyState from '../components/EmptyState';
import SOSModal from '../components/SOSModal';
import FIRLetterModal from '../components/FIRLetterModal';
import SituationCard from '../components/SituationCard';
import WizardSection from '../components/WizardSection';
import FaqSection from '../components/FaqSection';

export default function Home() {
  const [lang, setLang] = useState('en');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeId, setActiveId] = useState(null);
  const [activeTab, setActiveTab] = useState('tab-action');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSosOpen, setIsSosOpen] = useState(false);
  const [isFirOpen, setIsFirOpen] = useState(false);
  
  // Complaint Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    spOffice: '',
    date: '',
    station: '',
    details: ''
  });
  const [generatedLetter, setGeneratedLetter] = useState('');

  // Apply dark class to document element on theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const t = translationsData[lang];
  const situationsList = situationsData[lang];

  // Filter situations based on query
  const filteredSituations = situationsList.filter(item => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return item.title.toLowerCase().includes(query) ||
           item.category.toLowerCase().includes(query) ||
           item.quick_actions.some(act => act.toLowerCase().includes(query)) ||
           item.detailed_steps.some(step => step.toLowerCase().includes(query));
  });

  // Handle SP letter compilation
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    let letter = "";
    if (lang === 'en') {
      letter = `Date: ${currentDate}

To,
The Superintendent of Police (SP) / Deputy Commissioner of Police (DCP),
Office of the SP, ${formData.spOffice}

Subject: Written complaint under Section 173(4) of BNSS, 2023 regarding refusal of the Officer-in-Charge to register FIR.

Respected Sir/Madam,

I am writing to formally bring to your attention a cognizable offense and the subsequent refusal of the officer-in-charge at the local police station to register my First Information Report (FIR). 

As per the mandate under Section 173(1) of the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023, the police are bound to register an FIR when information of a cognizable offense is received. However, my request was refused.

Complainant Details:
- Name: ${formData.name}
- Address: ${formData.address}
- Contact Phone: ${formData.phone}

Incident Details:
- Date of Incident: ${formData.date}
- Location / Police Station jurisdiction: ${formData.station}

Summary of Incident & Offense:
${formData.details}

Since the Officer-in-Charge of the ${formData.station} has refused to record my complaint or register an FIR, I am sending this complaint to your good office under Section 173(4) of the Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023. I request you to kindly investigate the matter yourself or direct an officer subordinate to you to register the FIR and conduct a fair investigation.

Thanking you,

Sincerely,


____________________
(${formData.name})`;
    } else {
      letter = `दिनांक: ${currentDate}

सेवा में,
पुलिस अधीक्षक (SP) / पुलिस उपायुक्त (DCP),
कार्यालय पुलिस अधीक्षक, ${formData.spOffice}

विषय: एफआईआर (FIR) दर्ज करने से थाना प्रभारी के इनकार के संबंध में भारतीय नागरिक सुरक्षा संहिता (BNSS), 2023 की धारा 173(4) के तहत लिखित शिकायत।

महोदय/महोदया,

मैं औपचारिक रूप से आपका ध्यान एक संज्ञेय अपराध की घटना और स्थानीय पुलिस थाने के प्रभारी द्वारा मेरी प्रथम सूचना रिपोर्ट (FIR) दर्ज करने से इनकार करने की ओर आकर्षित करने के लिए लिख रहा/रही हूँ।

भारतीय नागरिक सुरक्षा संहिता (BNSS), 2023 की धारा 173(1) के तहत, संज्ञेय अपराध की सूचना मिलने पर पुलिस एफआईआर दर्ज करने के लिए कानूनी रूप से बाध्य है। हालांकि, मेरे अनुरोध को अस्वीकार कर दिया गया।

शिकायतकर्ता का विवरण:
- नाम: ${formData.name}
- पता: ${formData.address}
- संपर्क फोन: ${formData.phone}

घटना का विवरण:
- घटना की तिथि: ${formData.date}
- स्थान / पुलिस थाना क्षेत्र: ${formData.station}

घटना एवं अपराध का विवरण:
${formData.details}

चूंकि ${formData.station} के प्रभारी अधिकारी ने मेरी शिकायत दर्ज करने या एफआईआर दर्ज करने से इनकार कर दिया है, इसलिए मैं भारतीय नागरिक सुरक्षा संहिता (BNSS), 2023 की धारा 173(4) के तहत यह शिकायत आपके कार्यालय में भेज रहा/रही हूँ। मेरा आपसे विनम्र अनुरोध है कि कृपया स्वयं इस मामले की जांच करें या अपने अधीनस्थ किसी अधिकारी को एफआईआर दर्ज करने और निष्पक्ष जांच करने का निर्देश दें।

सधन्यवाद,

भवदीय,


____________________
(${formData.name})`;
    }

    setGeneratedLetter(letter);
  };

  const handleDownload = () => {
    const blob = new Blob([generatedLetter], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `SP_Complaint_Letter_${lang}.txt`;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <>
      {/* Top Brand Line */}
      <div style={{ height: '4px', background: 'var(--accent-color)', width: '100%' }}></div>

      {/* Sleek Announcement Topbar */}
      <div className="announcement-topbar">
        <div className="topbar-inner">
          <span className="badge-live">LIVE</span>
          <span className="topbar-text">
            {lang === 'en' 
              ? "BNSS 2023 Rules: Police are now legally bound to register FIR (Zero FIR) anywhere in India."
              : "BNSS 2023 नियम: पुलिस अब पूरे भारत में कहीं भी एफआईआर (जीरो एफआईआर) दर्ज करने के लिए कानूनी रूप से बाध्य है।"}
          </span>
          <span className="topbar-emergency" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#f43f5e' }}>
            <Icons.PhoneCall />
            <span>{lang === 'en' ? "Emergency: 112" : "आपातकालीन: 112"}</span>
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="header-inner">
          <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src="/logo.jpg" alt="Citizen Shield Logo" style={{ width: '40px', height: '40px', borderRadius: '8px', border: '1px solid var(--border-color)' }} />
            <div>
              <h1 style={{ lineHeight: '1.2' }}>Citizen Shield</h1>
              <p style={{ marginTop: '0' }}>Bilingual Guide to Indian Police Rights (BNSS & BNS)</p>
            </div>
          </div>
          <div className="controls">
            <button className="btn icon-btn" onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Toggle Theme">
              {isDarkMode ? <Icons.Sun /> : <Icons.Moon />}
            </button>
            <button className="btn" onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}>
              <Icons.Languages />
              <span>{lang === 'en' ? 'हिन्दी' : 'English'}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="app-container">
        {/* Landing Page Hero Section */}
        <section className="hero-section">
          <div className="hero-badge">{t.hero_badge}</div>
          <h2 className="hero-title">{t.hero_title}</h2>
          <p className="hero-subtitle">{t.hero_subtitle}</p>
          <div className="hero-ctas">
            <button className="btn btn-danger btn-large pulse-btn" onClick={() => setIsSosOpen(true)}>
              <Icons.ShieldAlert />
              <span>{t.cta_sos}</span>
            </button>
            <button className="btn btn-accent btn-large" onClick={() => setIsFirOpen(true)}>
              <Icons.FileWarning />
              <span>{t.cta_fir}</span>
            </button>
            <a href="#explore-rights" className="btn btn-secondary btn-large">
              <Icons.Search />
              <span>{t.cta_rights}</span>
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-icon">⚡</span>
              <span className="stat-text">{t.stat_rules}</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">⚖️</span>
              <span className="stat-text">{t.stat_bnss}</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">📝</span>
              <span className="stat-text">{t.stat_complaint}</span>
            </div>
          </div>
        </section>

        {/* National & State Helpline Hub (Moved to Top for Crisis Access) */}
        <section className="helpline-section-hub" style={{ marginTop: '2rem', borderTop: 'none', paddingTop: '0' }}>
          <h3 className="section-title-hub">
            {lang === 'en' ? "National & State Helpline Directory" : "राष्ट्रीय एवं राज्य हेल्पलाइन निर्देशिका"}
          </h3>
          <p className="section-subtitle-hub" style={{ marginBottom: '2rem' }}>
            {lang === 'en' 
              ? "Instant assistance channels provided by government and municipal authorities for emergency grievance registration."
              : "आपातकालीन शिकायत पंजीकरण के लिए सरकारी और नगर निगम अधिकारियों द्वारा प्रदान किए गए त्वरित सहायता चैनल।"}
          </p>
          <div className="helpline-hub-grid">
            <div className="hub-card">
              <div className="hub-card-icon">📞</div>
              <div className="hub-card-content">
                <h4>{lang === 'en' ? "National Emergency Service" : "राष्ट्रीय आपातकालीन सेवा"}</h4>
                <p>{lang === 'en' ? "Immediate police, fire, or medical dispatch" : "तत्काल पुलिस, अग्नि या चिकित्सा सेवा"}</p>
                <a href="tel:112" className="hub-call-btn">112</a>
              </div>
            </div>
            <div className="hub-card">
              <div className="hub-card-icon">🏛️</div>
              <div className="hub-card-content">
                <h4>{lang === 'en' ? "CM Helpline Desk" : "मुख्यमंत्री (CM) हेल्पलाइन"}</h4>
                <p>{lang === 'en' ? "State government public grievance redressal cell" : "राज्य सरकार जन शिकायत निवारण प्रकोष्ठ"}</p>
                <a href="tel:181" className="hub-call-btn">181 / 1076</a>
              </div>
            </div>
            <div className="hub-card">
              <div className="hub-card-icon">🛡️</div>
              <div className="hub-card-content">
                <h4>{lang === 'en' ? "Cyber Crime Helpdesk" : "साइबर अपराध हेल्पडेस्क"}</h4>
                <p>{lang === 'en' ? "Report online fraud, identity theft, & scams" : "ऑनलाइन धोखाधड़ी, पहचान चोरी और घोटालों की रिपोर्ट करें"}</p>
                <a href="tel:1930" className="hub-call-btn">1930</a>
              </div>
            </div>
            <div className="hub-card">
              <div className="hub-card-icon">👩</div>
              <div className="hub-card-content">
                <h4>{lang === 'en' ? "Women Safety Helpline" : "महिला सुरक्षा हेल्पलाइन"}</h4>
                <p>{lang === 'en' ? "24/7 dedicated support & local squad alert" : "24/7 समर्पित सहायता और स्थानीय पुलिस दस्ता अलर्ट"}</p>
                <a href="tel:1091" className="hub-call-btn">1091</a>
              </div>
            </div>
          </div>
        </section>

        {/* Citizen Legal Flowchart */}
        <section className="legal-flowchart-section">
          <h3 className="section-title-hub">
            {lang === 'en' ? "Citizen Action Protocol Flowchart" : "नागरिक कानूनी कार्रवाई प्रवाह चार्ट"}
          </h3>
          <p className="section-subtitle-hub">
            {lang === 'en' 
              ? "Follow these crucial steps sequentially when facing police interaction or filing a complaint."
              : "पुलिस बातचीत का सामना करते समय या शिकायत दर्ज करते समय अनुक्रम में इन महत्वपूर्ण चरणों का पालन करें।"}
          </p>
          <div className="flowchart-container">
            <div className="flow-step">
              <div className="flow-step-num">1</div>
              <div className="flow-step-title">{lang === 'en' ? "Encounter" : "पुलिस सामना"}</div>
              <p className="flow-step-desc">
                {lang === 'en' 
                  ? "Remain calm. Do not physically resist. Ask for the officer's name, ID, and police station."
                  : "शांत रहें। शारीरिक रूप से विरोध न करें। अधिकारी का नाम, आईडी और पुलिस स्टेशन पूछें।"}
              </p>
            </div>
            <div className="flow-connector">➔</div>
            <div className="flow-step">
              <div className="flow-step-num">2</div>
              <div className="flow-step-title">{lang === 'en' ? "Interrogation" : "पूछताछ व तलाशी"}</div>
              <p className="flow-step-desc">
                {lang === 'en' 
                  ? "Show your ID. You have the right to remain silent. Do not confess or sign blank papers."
                  : "अपनी आईडी दिखाएं। आपके पास चुप रहने का अधिकार है। अपराध स्वीकार न करें या खाली कागजों पर हस्ताक्षर न करें।"}
              </p>
            </div>
            <div className="flow-connector">➔</div>
            <div className="flow-step">
              <div className="flow-step-num">3</div>
              <div className="flow-step-title">{lang === 'en' ? "Arrest/Detention" : "गिरफ्तारी / हिरासत"}</div>
              <p className="flow-step-desc">
                {lang === 'en' 
                  ? "Ask for the grounds. Demand an arrest memo. Relatives must be informed immediately."
                  : "गिरफ्तारी का कारण पूछें। अरेस्ट मेमो की मांग करें। रिश्तेदारों को तुरंत सूचित किया जाना चाहिए।"}
              </p>
            </div>
            <div className="flow-connector">➔</div>
            <div className="flow-step">
              <div className="flow-step-num">4</div>
              <div className="flow-step-title">{lang === 'en' ? "Remedy (FIR Refused)" : "उपाय (FIR इनकार)"}</div>
              <p className="flow-step-desc">
                {lang === 'en' 
                  ? "If local station refuses FIR, write direct complaint to District SP under Sec 173(4) BNSS."
                  : "यदि स्थानीय थाना एफआईआर दर्ज करने से मना करता है, तो धारा 173(4) BNSS के तहत जिला एसपी को शिकायत लिखें।"}
              </p>
            </div>
          </div>
        </section>

        {/* Am I Detained Interactive Diagnostic Tool */}
        <WizardSection t={t} lang={lang} />

        {/* Anchored Section for Rights Exploration */}
        <div id="explore-rights" style={{ scrollMarginTop: '120px' }}></div>

        {/* Urgent Action Banners */}
        <BannerSection 
          t={t} 
          onSosOpen={() => setIsSosOpen(true)} 
          onFirOpen={() => setIsFirOpen(true)} 
        />

        {/* Modern Search Filter */}
        <SearchBox 
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder={t.search_placeholder}
          onClear={() => setSearchQuery('')}
        />

        {/* Empty Greeting Banner (No Card Active & No Search Active) */}
        {!activeId && !searchQuery && (
          <EmptyState 
            title={t.placeholder_title}
            desc={t.placeholder_desc}
          />
        )}

        {/* Enterprise Accordion Flow */}
        <div className="accordion-list">
          {filteredSituations.map(item => (
            <SituationCard 
              key={item.id}
              item={item}
              activeId={activeId}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              t={t}
              onToggle={() => {
                if (activeId === item.id) {
                  setActiveId(null);
                } else {
                  setActiveId(item.id);
                  setActiveTab('tab-action');
                }
              }}
            />
          ))}
        </div>

        {/* Good Practices & Verification Section */}
        <section className="good-practices-section" style={{ marginTop: '5rem', borderTop: '1px solid var(--border-color)', paddingTop: '4rem' }}>
          <h3 className="section-title-hub">
            {lang === 'en' ? "Good Practices for Citizens" : "नागरिकों के लिए सर्वोत्तम प्रथाएं"}
          </h3>
          <p className="section-subtitle-hub">
            {lang === 'en' 
              ? "Recommended guidelines to keep in mind during any police interaction."
              : "पुलिस से बातचीत के दौरान ध्यान रखने योग्य अनुशंसित दिशा-निर्देश।"}
          </p>
          <div className="helpline-hub-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            <div className="hub-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🧘</div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '0.25rem' }}>
                {lang === 'en' ? "Stay Calm & Polite" : "शांत और विनम्र रहें"}
              </h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                {lang === 'en' ? "Avoid physical resistance or verbal argument. State your points firmly." : "शारीरिक विरोध या बहस से बचें। अपनी बात दृढ़ता से कहें।"}
              </p>
            </div>
            <div className="hub-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📝</div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '0.25rem' }}>
                {lang === 'en' ? "Keep Records" : "विवरण रिकॉर्ड रखें"}
              </h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                {lang === 'en' ? "Note dates, times, badge numbers, names of officers and witnesses." : "तारीखें, समय, बैज नंबर, अधिकारियों और गवाहों के नाम नोट करें।"}
              </p>
            </div>
            <div className="hub-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🔍</div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '0.25rem' }}>
                {lang === 'en' ? "Read Before Signing" : "हस्ताक्षर से पहले पढ़ें"}
              </h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                {lang === 'en' ? "Never sign blank papers or confessions you do not agree with." : "सहमत न होने पर कभी भी खाली कागजात या बयानों पर हस्ताक्षर न करें।"}
              </p>
            </div>
            <div className="hub-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>⚖️</div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '0.25rem' }}>
                {lang === 'en' ? "Preserve Evidence" : "साक्ष्य सुरक्षित रखें"}
              </h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                {lang === 'en' ? "Retain photos, videos, medical slips, or documents lawfully." : "तस्वीरें, वीडियो, मेडिकल पर्चियां या दस्तावेज कानूनी रूप से सुरक्षित रखें।"}
              </p>
            </div>
          </div>
        </section>

        {/* Verification of Information & Official Sources */}
        <section className="sources-verification-section" style={{ marginTop: '5rem', borderTop: '1px solid var(--border-color)', paddingTop: '4rem' }}>
          <h3 className="section-title-hub">
            {lang === 'en' ? "Official Government Portals" : "आधिकारिक सरकारी पोर्टल"}
          </h3>
          <p className="section-subtitle-hub">
            {lang === 'en' 
              ? "Verify legal clauses directly against the latest official central laws and gazette notifications."
              : "नवीनतम आधिकारिक केंद्रीय कानूनों और राजपत्र अधिसूचनाओं के खिलाफ कानूनी धाराओं को सीधे सत्यापित करें।"}
          </p>
          <div className="helpline-hub-grid">
            <a href="https://www.indiacode.nic.in" target="_blank" rel="noreferrer" className="hub-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="hub-card-icon">🏛️</div>
              <div className="hub-card-content">
                <h4>India Code</h4>
                <p>{lang === 'en' ? "Official repository of all central laws & acts." : "सभी केंद्रीय कानूनों और अधिनियमों का आधिकारिक भंडार।"}</p>
                <span className="hub-call-btn" style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}>{lang === 'en' ? "Verify ↗" : "सत्यापित करें ↗"}</span>
              </div>
            </a>
            <a href="https://www.mha.gov.in" target="_blank" rel="noreferrer" className="hub-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="hub-card-icon">📝</div>
              <div className="hub-card-content">
                <h4>Ministry of Home Affairs</h4>
                <p>{lang === 'en' ? "Updates on BNSS 2023, BNS, and criminal reforms." : "BNSS 2023, BNS और आपराधिक सुधारों पर आधिकारिक अपडेट।"}</p>
                <span className="hub-call-btn" style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}>{lang === 'en' ? "Verify ↗" : "सत्यापित करें ↗"}</span>
              </div>
            </a>
            <a href="https://nhrc.nic.in" target="_blank" rel="noreferrer" className="hub-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="hub-card-icon">🛡️</div>
              <div className="hub-card-content">
                <h4>NHRC Portal</h4>
                <p>{lang === 'en' ? "National Human Rights Commission grievance portal." : "राष्ट्रीय मानव अधिकार आयोग शिकायत पोर्टल।"}</p>
                <span className="hub-call-btn" style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}>{lang === 'en' ? "Verify ↗" : "सत्यापित करें ↗"}</span>
              </div>
            </a>
            <a href="https://sci.gov.in" target="_blank" rel="noreferrer" className="hub-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="hub-card-icon">⚖️</div>
              <div className="hub-card-content">
                <h4>Supreme Court of India</h4>
                <p>{lang === 'en' ? "Access historic landmark rulings & directives." : "ऐतिहासिक मील का पत्थर फैसलों और निर्देशों तक पहुंचें।"}</p>
                <span className="hub-call-btn" style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}>{lang === 'en' ? "Verify ↗" : "सत्यापित करें ↗"}</span>
              </div>
            </a>
          </div>
        </section>

        {/* Project Core Principles */}
        <section className="principles-section" style={{ marginTop: '5rem', borderTop: '1px solid var(--border-color)', paddingTop: '4rem' }}>
          <h3 className="section-title-hub">
            {lang === 'en' ? "Our Core Principles" : "हमारे मुख्य सिद्धांत"}
          </h3>
          <div className="helpline-hub-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            <div className="hub-card" style={{ padding: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '1.75rem' }}>🔒</span>
              <h5 style={{ fontWeight: 800, marginTop: '0.5rem', fontSize: '0.9rem' }}>{lang === 'en' ? "100% Private" : "100% निजी"}</h5>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{lang === 'en' ? "No registration or personal data required." : "कोई पंजीकरण या व्यक्तिगत डेटा की आवश्यकता नहीं।"}</p>
            </div>
            <div className="hub-card" style={{ padding: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '1.75rem' }}>🗣️</span>
              <h5 style={{ fontWeight: 800, marginTop: '0.5rem', fontSize: '0.9rem' }}>{lang === 'en' ? "Plain Language" : "सरल भाषा"}</h5>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{lang === 'en' ? "Legal guidelines explained in plain terms." : "सरल शब्दों में समझाई गई कानूनी रूपरेखा।"}</p>
            </div>
            <div className="hub-card" style={{ padding: '1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '1.75rem' }}>🇮🇳</span>
              <h5 style={{ fontWeight: 800, marginTop: '0.5rem', fontSize: '0.9rem' }}>{lang === 'en' ? "Official Directives" : "आधिकारिक निर्देश"}</h5>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{lang === 'en' ? "Directly sourced from Indian Constitution & SC." : "सीधे भारतीय संविधान और एससी से संकलित।"}</p>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <FaqSection t={t} lang={lang} />
      </main>

      {/* Reusable Emergency Modals */}
      <SOSModal 
        t={t}
        isOpen={isSosOpen}
        onClose={() => setIsSosOpen(false)}
      />

      <FIRLetterModal 
        t={t}
        isOpen={isFirOpen}
        onClose={() => setIsFirOpen(false)}
        formData={formData}
        onChange={setFormData}
        onSubmit={handleFormSubmit}
        generatedLetter={generatedLetter}
        onDownload={handleDownload}
      />

      {/* Institutional Footer */}
      <footer className="app-footer">
        <div className="footer-inner">
          <div className="footer-links-grid">
            <div className="footer-column brand-column" style={{ gridColumn: 'span 2' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <img src="/logo.jpg" alt="Citizen Shield Logo" style={{ width: '45px', height: '45px', borderRadius: '8px', border: '1px solid var(--border-color)' }} />
                <h4 style={{ margin: 0, textTransform: 'none', fontSize: '1.3rem', letterSpacing: '-0.02em', fontWeight: 800 }}>Citizen Shield</h4>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '360px', marginBottom: '1.5rem' }}>
                {lang === 'en' 
                  ? "Citizen Shield is an open-source civic initiative designed to translate complex legal clauses of the Bharatiya Nagarik Suraksha Sanhita (BNSS) and BNS 2023 into simple, actionable guidelines. Our mission is to promote legal literacy and prevent citizen harassment."
                  : "सिटीजन शील्ड एक ओपन-सोर्स नागरिक पहल है जिसे भारतीय नागरिक सुरक्षा संहिता (BNSS) और BNS 2023 के जटिल कानूनी अनुच्छेदों को सरल, व्यावहारिक दिशा-निर्देशों में अनुवाद करने के लिए डिज़ाइन किया गया है। हमारा मिशन कानूनी साक्षरता को बढ़ावा देना और नागरिक उत्पीड़न को रोकना है।"}
              </p>
            </div>
            <div className="footer-column">
              <h4>{lang === 'en' ? "Rights Explorer" : "अधिकार एक्सप्लोरर"}</h4>
              <ul>
                <li><a href="#explore-rights">{lang === 'en' ? "Arrest & Detention" : "गिरफ्तारी और हिरासत"}</a></li>
                <li><a href="#explore-rights">{lang === 'en' ? "Search & Seizure" : "तलाशी और जब्ती"}</a></li>
                <li><a href="#explore-rights">{lang === 'en' ? "FIR Refusal Remedies" : "FIR इनकार के उपाय"}</a></li>
                <li><a href="#explore-rights">{lang === 'en' ? "Bribe & Misconduct" : "रिश्वत और दुर्व्यवहार"}</a></li>
                <li><a href="#explore-rights">{lang === 'en' ? "Women Safety Laws" : "महिला सुरक्षा कानून"}</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>{lang === 'en' ? "Legal Framework" : "कानूनी ढांचा"}</h4>
              <ul>
                <li><a href="https://www.mha.gov.in" target="_blank" rel="noreferrer">Bharatiya Nagarik Suraksha Sanhita (BNSS)</a></li>
                <li><a href="https://www.mha.gov.in" target="_blank" rel="noreferrer">Bharatiya Nyaya Sanhita (BNS)</a></li>
                <li><a href="https://www.mha.gov.in" target="_blank" rel="noreferrer">Bharatiya Sakshya Adhiniyam (BSA)</a></li>
                <li><a href="https://www.india.gov.in" target="_blank" rel="noreferrer">Constitution of India</a></li>
                <li><a href="https://www.mha.gov.in" target="_blank" rel="noreferrer">Code of Criminal Procedure (CrPC) Archive</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>{lang === 'en' ? "Quick Services" : "त्वरित सेवाएं"}</h4>
              <ul>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsSosOpen(true); }}>{lang === 'en' ? "SOS Checklist Protocol" : "SOS चेकलिस्ट प्रोटोकॉल"}</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setIsFirOpen(true); }}>{lang === 'en' ? "Draft SP Complaint Letter" : "SP शिकायत पत्र का मसौदा"}</a></li>
                <li><a href="tel:112">{lang === 'en' ? "National Emergency (112)" : "राष्ट्रीय आपातकाल (112)"}</a></li>
                <li><a href="tel:181">{lang === 'en' ? "State CM Helpline (181)" : "राज्य CM हेल्पलाइन (181)"}</a></li>
                <li><a href="tel:1930">{lang === 'en' ? "Cyber Crime Reporting (1930)" : "साइबर अपराध रिपोर्टिंग (1930)"}</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>{lang === 'en' ? "Official Government Portals" : "आधिकारिक सरकारी पोर्टल"}</h4>
              <ul>
                <li><a href="https://digitalpolice.gov.in" target="_blank" rel="noreferrer">Digital Police Portal India</a></li>
                <li><a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer">National Cyber Crime Reporting Portal</a></li>
                <li><a href="https://nalsa.gov.in" target="_blank" rel="noreferrer">National Legal Services Authority (NALSA)</a></li>
                <li><a href="https://www.mha.gov.in" target="_blank" rel="noreferrer">Ministry of Home Affairs (MHA)</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom-info">
            <p className="sources-text">
              <strong>Sources:</strong> Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 | Bharatiya Nyaya Sanhita (BNS), 2023 | Constitution of India
            </p>
            <p className="disclaimer-text">
              Disclaimer: This application is for educational and guidance purposes only and does not constitute formal legal advice. If you require legal assistance, please contact a qualified advocate.
            </p>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem', fontWeight: 600 }}>
              &copy; 2026 Citizen Shield. Designed for Independence Day Citizen Welfare Initiative.
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem', fontWeight: 700 }}>
              Made with ❤️ by Pratik | Sponsored by Let's Code | जय हिन्द 🇮🇳
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

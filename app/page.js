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

      {/* Main Header */}
      <header className="main-header">
        <div className="header-inner">
          <div className="brand">
            <h1>Adhikar</h1>
            <p>Bilingual Guide to Indian Police Rights (BNSS & BNS)</p>
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
          <p className="sources-text">
            <strong>Sources:</strong> Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 | Bharatiya Nyaya Sanhita (BNS), 2023 | Constitution of India
          </p>
          <p className="disclaimer-text">
            Disclaimer: This application is for educational and guidance purposes only and does not constitute formal legal advice. If you require legal assistance, please contact a qualified advocate.
          </p>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
            &copy; 2026 Adhikar. Designed for Independence Day Citizen Welfare Initiative.
          </p>
        </div>
      </footer>
    </>
  );
}

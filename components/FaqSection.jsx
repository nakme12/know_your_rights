'use client';

import React, { useState } from 'react';
import { Icons } from './Icons';

export default function FaqSection({ t, lang }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqsList = [
    {
      q_en: "Can a police officer check my mobile phone or WhatsApp chats on the road?",
      q_hi: "क्या कोई पुलिस अधिकारी सड़क पर मेरा मोबाइल फोन या व्हाट्सएप चैट चेक कर सकता है?",
      a_en: "NO. Police officers cannot randomly demand to inspect your personal smartphone, unlock your screen, or read your private WhatsApp messages unless your phone is legally seized with a Seizure Memo under reasonable suspicion or court warrant related to a specific crime.",
      a_hi: "नहीं। पुलिस अधिकारी सड़क पर आपका व्यक्तिगत स्मार्टफोन देखने, स्क्रीन अनलॉक करने या निजी व्हाट्सएप संदेशों को पढ़ने की मांग नहीं कर सकते जब तक कि आपका फोन उचित संदेह या किसी विशिष्ट अपराध से संबंधित अदालती वारंट के तहत जब्ती मेमो के साथ कानूनी रूप से जब्त न किया गया हो।",
      law: "Article 21 (Right to Privacy - Puttaswamy ruling) & Sec 107 BNSS / 102 CrPC"
    },
    {
      q_en: "Is a Zero FIR valid anywhere in India?",
      q_hi: "क्या जीरो एफआईआर (Zero FIR) पूरे भारत में कहीं भी मान्य है?",
      a_en: "YES. A Zero FIR can be filed at any police station across India, regardless of jurisdiction. The station must accept the complaint and then forward it to the appropriate local station for investigation.",
      a_hi: "हाँ। पूरे भारत में किसी भी पुलिस स्टेशन में क्षेत्राधिकार की परवाह किए बिना जीरो एफआईआर दर्ज की जा सकती है। संबंधित थाने को शिकायत स्वीकार करनी होगी और फिर इसे जांच के लिए उचित स्थानीय थाने में भेजना होगा।",
      law: "Section 173(1) BNSS & Lalita Kumari landmark ruling"
    },
    {
      q_en: "Can women be arrested by police at night?",
      q_hi: "क्या महिलाओं को रात में पुलिस द्वारा गिरफ्तार किया जा सकता है?",
      a_en: "NO. Under Section 43(5) BNSS, women cannot be arrested after sunset (6 PM) and before sunrise (6 AM) except in extraordinary circumstances where a female police officer obtains prior written permission from a Judicial Magistrate.",
      a_hi: "नहीं। धारा 43(5) BNSS के तहत, महिलाओं को सूर्यास्त (शाम 6 बजे) के बाद और सूर्योदय (सुबह 6 बजे) से पहले गिरफ्तार नहीं किया जा सकता है, सिवाय असाधारण परिस्थितियों के जहां एक महिला पुलिस अधिकारी न्यायिक मजिस्ट्रेट से लिखित अनुमति प्राप्त करती है।",
      law: "Section 43(5) BNSS / Section 46(4) CrPC"
    },
    {
      q_en: "What is the maximum time police can hold a person without court permission?",
      q_hi: "अदालत की अनुमति के बिना पुलिस किसी व्यक्ति को अधिकतम कितने समय तक हिरासत में रख सकती है?",
      a_en: "24 HOURS. Under Article 22 of the Constitution and Section 58 BNSS, police must produce the arrested individual before the nearest Judicial Magistrate within 24 hours (excluding travel time). Holding someone beyond this limit is illegal confinement.",
      a_hi: "24 घंटे। संविधान के अनुच्छेद 22 और धारा 58 BNSS के तहत, पुलिस को गिरफ्तार व्यक्ति को 24 घंटे के भीतर (यात्रा के समय को छोड़कर) निकटतम न्यायिक मजिस्ट्रेट के सामने पेश करना होगा। इससे अधिक समय तक रोकना अवैध है।",
      law: "Article 22 Constitution of India & Section 58 BNSS"
    },
    {
      q_en: "What should I do if a police officer demands a bribe?",
      q_hi: "यदि कोई पुलिस अधिकारी रिश्वत मांगता है तो मुझे क्या करना चाहिए?",
      a_en: "Do not pay. Note down the officer's details (badge, rank, time, location). Report directly to the Anti-Corruption Bureau (ACB) Helpline at 1064 or submit a complaint to the Police Complaints Authority (PCA).",
      a_hi: "रिश्वत न दें। अधिकारी का विवरण (बैज नंबर, पद, समय, स्थान) नोट करें। सीधे भ्रष्टाचार निरोधक ब्यूरो (ACB) हेल्पलाइन 1064 पर रिपोर्ट करें या पुलिस शिकायत प्राधिकरण (PCA) में शिकायत दर्ज करें।",
      law: "Section 7 Prevention of Corruption Act"
    },
    {
      q_en: "Do traffic police have the right to take away my car keys?",
      q_hi: "क्या ट्रैफिक पुलिस को मेरी कार की चाबियां छीनने का अधिकार है?",
      a_en: "NO. Under Motor Vehicle acts, police officers do not have the legal authority to arbitrarily snatch your keys or deflate your tires. Snatching keys is a violation of law and is disciplinary misconduct.",
      a_hi: "नहीं। मोटर वाहन अधिनियमों के तहत, पुलिस अधिकारियों को मनमाने ढंग से आपकी चाबियां छीनने या आपके टायरों की हवा निकालने का कोई कानूनी अधिकार नहीं है। चाबियां छीनना कानून का उल्लंघन और कदाचार है।",
      law: "Motor Vehicles Act Rules & Police Disciplinary Codes"
    }
  ];

  return (
    <section className="faq-section-wrapper" style={{ marginTop: '5rem', borderTop: '1px solid var(--border-color)', paddingTop: '4rem' }}>
      <div className="section-header-centered">
        <h3 className="section-title-hub">{t.faq_title}</h3>
        <p className="section-subtitle-hub">{t.faq_subtitle}</p>
      </div>

      <div className="faq-accordion-list" style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {faqsList.map((faq, i) => {
          const isOpen = activeIndex === i;
          return (
            <div key={i} className={`situation-card ${isOpen ? 'active' : ''}`}>
              <button 
                className="situation-card-header" 
                onClick={() => setActiveIndex(isOpen ? null : i)}
                style={{ padding: '1.5rem 2rem' }}
              >
                <div className="header-title-wrapper">
                  <span style={{ fontSize: '1.2rem' }}>❓</span>
                  <h3>{lang === 'en' ? faq.q_en : faq.q_hi}</h3>
                </div>
                <span className="chevron-icon">
                  {isOpen ? <Icons.ChevronUp /> : <Icons.ChevronDown />}
                </span>
              </button>
              {isOpen && (
                <div className="situation-card-body" style={{ padding: '1.5rem 2rem 2rem 2rem' }}>
                  <p style={{ fontSize: '0.925rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                    {lang === 'en' ? faq.a_en : faq.a_hi}
                  </p>
                  <div style={{ marginTop: '1.25rem', fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    ⚖️ {lang === 'en' ? 'Cited Law:' : 'सत्यापित कानून:'} {faq.law}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

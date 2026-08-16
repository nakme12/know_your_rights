'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Icons } from './Icons';

// Simple AI responses based on keywords
function getAIResponse(query, lang) {
  const q = query.toLowerCase();
  
  const responses = {
    en: [
      { keys: ['fir', 'refuse', 'register'], answer: "If police refuse to file your FIR, you can: (1) Send a written complaint to the District SP under Section 173(4) BNSS, (2) File a complaint with the Judicial Magistrate under Section 175(3) BNSS, or (3) File a Zero FIR at any other police station in India." },
      { keys: ['arrest', 'detained', 'custody'], answer: "Under Article 22, police must produce you before a Magistrate within 24 hours. You have the right to know grounds of arrest, get an arrest memo, inform a relative, and consult a lawyer. Women cannot be arrested between sunset and sunrise (Sec 43(5) BNSS)." },
      { keys: ['search', 'phone', 'mobile', 'whatsapp'], answer: "Police cannot randomly check your phone or WhatsApp. Your phone can only be seized with a Seizure Memo under reasonable suspicion or a court warrant related to a specific crime (Article 21 — Right to Privacy, Puttaswamy ruling)." },
      { keys: ['bribe', 'money', 'pay'], answer: "Do NOT pay any bribe. Note the officer's badge number, rank, time, and location. Report to Anti-Corruption Bureau (ACB) helpline 1064 or file a complaint with the Police Complaints Authority (Section 7, Prevention of Corruption Act)." },
      { keys: ['women', 'lady', 'female', 'night'], answer: "Women cannot be arrested after sunset (6 PM) and before sunrise (6 AM) except with written permission from a Judicial Magistrate, and only by a female officer (Section 43(5) BNSS / Section 46(4) CrPC)." },
      { keys: ['zero fir', 'jurisdiction'], answer: "A Zero FIR can be filed at ANY police station in India regardless of jurisdiction. The station must accept it and forward it to the correct local station. This is mandated under Section 173(1) BNSS & the Lalita Kumari ruling." },
      { keys: ['traffic', 'car', 'key', 'tyre'], answer: "Traffic police do NOT have the legal authority to snatch your car keys or deflate your tires. This is a violation of law and disciplinary misconduct under the Motor Vehicles Act." },
      { keys: ['rights', 'help', 'what'], answer: "Key rights during police interaction: (1) Right to know grounds of action, (2) Right to remain silent, (3) Right to a lawyer, (4) Right to an arrest memo, (5) Right to inform family, (6) Right to medical examination, (7) Right to file complaints against misconduct." },
    ],
    hi: [
      { keys: ['fir', 'refuse', 'register', 'दर्ज'], answer: "यदि पुलिस FIR दर्ज करने से मना करे: (1) धारा 173(4) BNSS के तहत जिला SP को लिखित शिकायत भेजें, (2) धारा 175(3) BNSS के तहत न्यायिक मजिस्ट्रेट से शिकायत करें, (3) किसी भी अन्य थाने में जीरो FIR दर्ज करें।" },
      { keys: ['arrest', 'गिरफ्तार', 'हिरासत'], answer: "अनुच्छेद 22 के तहत, पुलिस को आपको 24 घंटे के भीतर मजिस्ट्रेट के सामने पेश करना होगा। गिरफ्तारी का कारण जानने, अरेस्ट मेमो, परिवार को सूचित करने और वकील से मिलने का अधिकार है। महिलाओं को सूर्यास्त से सूर्योदय तक गिरफ्तार नहीं किया जा सकता।" },
      { keys: ['phone', 'मोबाइल', 'whatsapp', 'फोन'], answer: "पुलिस आपका फोन या व्हाट्सएप रैंडमली चेक नहीं कर सकती। फोन केवल उचित संदेह या कोर्ट वारंट के साथ जब्ती मेमो से जब्त किया जा सकता है (अनुच्छेद 21 — पुट्टस्वामी फैसला)।" },
      { keys: ['bribe', 'रिश्वत', 'पैसे'], answer: "रिश्वत न दें। अधिकारी का बैज नंबर, पद, समय, स्थान नोट करें। ACB हेल्पलाइन 1064 पर रिपोर्ट करें या पुलिस शिकायत प्राधिकरण में शिकायत दर्ज करें।" },
    ]
  };

  const langResponses = responses[lang] || responses.en;
  for (const r of langResponses) {
    if (r.keys.some(k => q.includes(k))) return r.answer;
  }
  
  return lang === 'en' 
    ? "I can help with questions about FIR filing, arrest rights, phone search rules, bribery, women's safety, and more. Try asking about a specific situation!"
    : "मैं FIR दर्ज करने, गिरफ्तारी के अधिकार, फोन तलाशी, रिश्वत, महिला सुरक्षा आदि के बारे में मदद कर सकता हूं। किसी विशिष्ट स्थिति के बारे में पूछें!";
}

export default function FloatingWidgets({ lang }) {
  const [helplineOpen, setHelplineOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // Initialize with welcome message
  useEffect(() => {
    setChatMessages([{
      role: 'bot',
      text: lang === 'en' 
        ? "👋 Hi! I'm your Legal Rights Assistant. Ask me anything about your rights during a police encounter — FIR, arrest, search, bribery, etc."
        : "👋 नमस्ते! मैं आपका कानूनी अधिकार सहायक हूं। पुलिस से संबंधित किसी भी अधिकार के बारे में पूछें — FIR, गिरफ्तारी, तलाशी, रिश्वत आदि।"
    }]);
  }, [lang]);

  const handleSend = () => {
    if (!chatInput.trim()) return;
    const userMsg = chatInput.trim();
    setChatInput('');
    setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);

    // Simulate slight delay
    setTimeout(() => {
      const reply = getAIResponse(userMsg, lang);
      setChatMessages(prev => [...prev, { role: 'bot', text: reply }]);
    }, 400);
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fab-stack">
        <button 
          className="fab fab-helpline" 
          onClick={() => { setHelplineOpen(!helplineOpen); setChatOpen(false); }}
          title={lang === 'en' ? "Emergency Helplines" : "आपातकालीन हेल्पलाइन"}
        >
          📞
        </button>
        <button 
          className="fab fab-chat" 
          onClick={() => { setChatOpen(!chatOpen); setHelplineOpen(false); }}
          title={lang === 'en' ? "Ask a Question" : "सवाल पूछें"}
        >
          💬
        </button>
      </div>

      {/* Helpline Floating Panel */}
      {helplineOpen && (
        <div className="floating-panel helpline-panel">
          <div className="floating-panel-header">
            <h4>🚨 {lang === 'en' ? "Emergency Helplines" : "आपातकालीन हेल्पलाइन"}</h4>
            <button className="panel-close" onClick={() => setHelplineOpen(false)}>✕</button>
          </div>
          <div className="floating-panel-body">
            <a href="tel:112" className="floating-helpline-row row-danger">
              <span className="fh-icon">📞</span>
              <div><strong>112</strong><br /><span>{lang === 'en' ? "National Emergency — Police, Fire, Medical" : "राष्ट्रीय आपातकालीन — पुलिस, अग्नि, चिकित्सा"}</span></div>
            </a>
            <a href="tel:181" className="floating-helpline-row row-accent">
              <span className="fh-icon">🏛️</span>
              <div><strong>181 / 1076</strong><br /><span>{lang === 'en' ? "CM Helpline — Public Grievance" : "मुख्यमंत्री हेल्पलाइन — जन शिकायत"}</span></div>
            </a>
            <a href="tel:1930" className="floating-helpline-row row-accent">
              <span className="fh-icon">🛡️</span>
              <div><strong>1930</strong><br /><span>{lang === 'en' ? "Cyber Crime Reporting" : "साइबर अपराध रिपोर्टिंग"}</span></div>
            </a>
            <a href="tel:1091" className="floating-helpline-row row-danger">
              <span className="fh-icon">👩</span>
              <div><strong>1091</strong><br /><span>{lang === 'en' ? "Women Safety — 24/7" : "महिला सुरक्षा — 24/7"}</span></div>
            </a>
            <a href="tel:15100" className="floating-helpline-row row-accent">
              <span className="fh-icon">⚖️</span>
              <div><strong>15100</strong><br /><span>{lang === 'en' ? "NALSA — Free Legal Aid" : "NALSA — मुफ्त कानूनी सहायता"}</span></div>
            </a>
            <a href="tel:1064" className="floating-helpline-row row-danger">
              <span className="fh-icon">🚫</span>
              <div><strong>1064</strong><br /><span>{lang === 'en' ? "Anti-Corruption Bureau (ACB)" : "भ्रष्टाचार निरोधक ब्यूरो (ACB)"}</span></div>
            </a>
          </div>
        </div>
      )}

      {/* Chat Floating Panel */}
      {chatOpen && (
        <div className="floating-panel chat-panel">
          <div className="floating-panel-header chat-header">
            <h4>💬 {lang === 'en' ? "Rights Assistant" : "अधिकार सहायक"}</h4>
            <button className="panel-close" onClick={() => setChatOpen(false)}>✕</button>
          </div>
          <div className="chat-messages">
            {chatMessages.map((msg, i) => (
              <div key={i} className={`chat-bubble ${msg.role === 'user' ? 'bubble-user' : 'bubble-bot'}`}>
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="chat-input-row">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={lang === 'en' ? "Ask about your rights..." : "अपने अधिकारों के बारे में पूछें..."}
              className="chat-input"
            />
            <button className="chat-send-btn" onClick={handleSend}>
              <Icons.Search />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

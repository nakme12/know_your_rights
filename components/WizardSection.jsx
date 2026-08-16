'use client';

import React, { useState } from 'react';

export default function WizardSection({ t, lang }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({ q1: null, q2: null, q3: null });

  const handleAnswer = (question, val) => {
    setAnswers(prev => ({ ...prev, [question]: val }));
    setStep(prev => prev + 1);
  };

  const resetWizard = () => {
    setAnswers({ q1: null, q2: null, q3: null });
    setStep(1);
  };

  // Determine status based on answers
  const getStatus = () => {
    if (answers.q1 === 'yes') {
      return {
        badge: '🟢 ' + (lang === 'en' ? 'FREE TO GO' : 'जाने के लिए स्वतंत्र'),
        desc: lang === 'en' 
          ? "You can legally walk away. Police cannot detain you without concrete suspicion or grounds."
          : "आप कानूनी रूप से जा सकते हैं। पुलिस आपको बिना किसी ठोस संदेह या आधार के रोक नहीं सकती।",
        class: 'status-green'
      };
    }
    if (answers.q2 === 'yes' || answers.q3 === 'yes') {
      return {
        badge: '🔴 ' + (lang === 'en' ? 'DETENTION / ARREST' : 'हिरासत / गिरफ्तारी'),
        desc: lang === 'en'
          ? "You are not free to go. Immediately ask: 'On what grounds am I being arrested?' Demand an Arrest Memo and consult your lawyer."
          : "आप जाने के लिए स्वतंत्र नहीं हैं। तुरंत पूछें: 'मुझे किस आधार पर गिरफ्तार किया जा रहा है?' अरेस्ट मेमो की मांग करें और अपने वकील से संपर्क करें।",
        class: 'status-red'
      };
    }
    if (answers.q1 === 'no' && answers.q2 === 'no') {
      return {
        badge: '🟡 ' + (lang === 'en' ? 'VOLUNTARY COOPERATION' : 'स्वैच्छिक सहयोग'),
        desc: lang === 'en'
          ? "You are cooperating with an inquiry. You are free to walk away unless they explicitly place you under arrest."
          : "आप एक जांच में सहयोग कर रहे हैं। जब तक वे आपको स्पष्ट रूप से गिरफ्तार नहीं करते, आप जाने के लिए स्वतंत्र हैं।",
        class: 'status-yellow'
      };
    }
    return null;
  };

  const status = getStatus();

  return (
    <section className="wizard-section-wrapper">
      <div className="section-header-centered">
        <h3 className="section-title-hub">{t.wizard_title}</h3>
        <p className="section-subtitle-hub">{t.wizard_subtitle}</p>
      </div>

      <div className="wizard-card-container">
        {step === 1 && (
          <div className="wizard-step-pane">
            <p className="wizard-question-text">{t.wizard_q1}</p>
            <div className="wizard-actions-row">
              <button className="btn btn-accent btn-large" onClick={() => handleAnswer('q1', 'yes')}>
                {lang === 'en' ? 'Yes' : 'हाँ'}
              </button>
              <button className="btn btn-secondary btn-large" onClick={() => handleAnswer('q1', 'no')}>
                {lang === 'en' ? 'No' : 'नहीं'}
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="wizard-step-pane">
            <p className="wizard-question-text">{t.wizard_q2}</p>
            <div className="wizard-actions-row">
              <button className="btn btn-danger btn-large" onClick={() => handleAnswer('q2', 'yes')}>
                {lang === 'en' ? 'Yes' : 'हाँ'}
              </button>
              <button className="btn btn-secondary btn-large" onClick={() => handleAnswer('q2', 'no')}>
                {lang === 'en' ? 'No' : 'नहीं'}
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="wizard-step-pane">
            <p className="wizard-question-text">{t.wizard_q3}</p>
            <div className="wizard-actions-row">
              <button className="btn btn-danger btn-large" onClick={() => handleAnswer('q3', 'yes')}>
                {lang === 'en' ? 'Yes' : 'हाँ'}
              </button>
              <button className="btn btn-secondary btn-large" onClick={() => handleAnswer('q3', 'no')}>
                {lang === 'en' ? 'No' : 'नहीं'}
              </button>
            </div>
          </div>
        )}

        {step > 3 && status && (
          <div className="wizard-step-pane result-pane">
            <h4 className="wizard-result-header">{t.wizard_status}</h4>
            <div className={`status-display-badge ${status.class}`}>
              {status.badge}
            </div>
            <p className="wizard-result-desc">{status.desc}</p>
            <button className="btn btn-accent btn-large" style={{ marginTop: '1.5rem' }} onClick={resetWizard}>
              {t.wizard_btn_reset}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

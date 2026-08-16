import React from 'react';
import { Icons, getIcon } from './Icons';

export default function SituationCard({ item, activeId, onToggle, activeTab, setActiveTab, t }) {
  const isActive = activeId === item.id;

  return (
    <div className={`situation-card ${isActive ? 'active' : ''}`}>
      <button 
        className="situation-card-header"
        onClick={onToggle}
      >
        <div className="header-title-wrapper">
          {getIcon(item.icon)}
          <div>
            <span className="category-tag-small">{item.category}</span>
            <h3>{item.title}</h3>
          </div>
        </div>
        <span className="chevron-icon">
          {isActive ? <Icons.ChevronUp /> : <Icons.ChevronDown />}
        </span>
      </button>

      {isActive && (
        <div className="situation-card-body">
          {/* Tabs Nav */}
          <div className="tab-nav">
            <button className={`tab-trigger ${activeTab === 'tab-action' ? 'active' : ''}`} onClick={() => setActiveTab('tab-action')}>{t.tab_action}</button>
            <button className={`tab-trigger ${activeTab === 'tab-rights' ? 'active' : ''}`} onClick={() => setActiveTab('tab-rights')}>{t.tab_rights}</button>
            <button className={`tab-trigger ${activeTab === 'tab-complain' ? 'active' : ''}`} onClick={() => setActiveTab('tab-complain')}>{t.tab_complain}</button>
          </div>

          {/* Tab content */}
          {activeTab === 'tab-action' && (
            <div className="tab-content">
              <div className="quick-box">
                <h4 className="quick-box-title" style={{ color: 'var(--accent-color)' }}>
                  <span>⚡</span>
                  {t.quick_read_title}
                </h4>
                <ul className="quick-list">
                  {item.quick_actions.map((act, i) => <li key={i}>{act}</li>)}
                </ul>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '0.75rem' }}>{t.detailed_steps_title}</h4>
                <ol className="step-list">
                  {item.detailed_steps.map((step, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: step }}></li>
                  ))}
                </ol>
              </div>
            </div>
          )}

          {activeTab === 'tab-rights' && (
            <div className="tab-content">
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '1rem' }}>{t.legal_backing_title}</h4>
              <div className="laws-container">
                {item.rights.map((r, i) => (
                  <div key={i} className="law-card">
                    <h5 className="law-title">{r.section}</h5>
                    <p className="law-desc">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'tab-complain' && (
            <div className="tab-content">
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '1rem' }}>{t.complaint_procedure_title}</h4>
              <div className="complaint-timeline">
                {item.complaints.map((c, i) => (
                  <div key={i} className="complaint-step">
                    <div className="step-num">{c.step}</div>
                    <div className="step-text">{c.text}</div>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
                <h5 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 700 }}>{t.relevant_helplines}</h5>
                <div className="helplines-grid">
                  {item.helplines.map((h, i) => (
                    <a key={i} href={`tel:${h.number}`} className="helpline-card">
                      <Icons.PhoneCall />
                      <div className="helpline-card-text">
                        <span className="helpline-label">{h.name}</span>
                        <span className="helpline-number">{h.number}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

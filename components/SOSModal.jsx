import React from 'react';
import { Icons } from './Icons';

export default function SOSModal({ t, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 style={{ color: 'var(--danger-color)' }}>{t.sos_modal_title}</h3>
          <button className="btn icon-btn" onClick={onClose} style={{ border: 'none' }}><Icons.X /></button>
        </div>
        <div className="modal-body">
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>{t.sos_modal_intro}</p>
          <div className="sos-checklist">
            <div className="sos-item">
              <div className="sos-badge">1</div>
              <div className="sos-details">
                <h4>{t.sos_rule_1_title}</h4>
                <p>{t.sos_rule_1_desc}</p>
              </div>
            </div>
            <div className="sos-item">
              <div className="sos-badge">2</div>
              <div className="sos-details">
                <h4>{t.sos_rule_2_title}</h4>
                <p>{t.sos_rule_2_desc}</p>
              </div>
            </div>
            <div className="sos-item">
              <div className="sos-badge">3</div>
              <div className="sos-details">
                <h4>{t.sos_rule_3_title}</h4>
                <p>{t.sos_rule_3_desc}</p>
              </div>
            </div>
            <div className="sos-item">
              <div className="sos-badge">4</div>
              <div className="sos-details">
                <h4>{t.sos_rule_4_title}</h4>
                <p>{t.sos_rule_4_desc}</p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '1.75rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
            <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 700, marginBottom: '0.75rem' }}>{t.emergency_numbers_title}</h4>
            <div className="helplines-grid">
              <a href="tel:112" className="helpline-card" style={{ borderColor: 'var(--danger-color)', backgroundColor: 'var(--danger-bg-light)' }}>
                <Icons.PhoneCall />
                <div className="helpline-card-text">
                  <span className="helpline-label" style={{ color: 'var(--danger-color)' }}>Police Emergency</span>
                  <span className="helpline-number" style={{ color: 'var(--danger-color)' }}>112</span>
                </div>
              </a>
              <a href="tel:15100" className="helpline-card">
                <Icons.PhoneCall />
                <div className="helpline-card-text">
                  <span className="helpline-label">NALSA Legal Aid</span>
                  <span className="helpline-number">15100</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn" onClick={onClose}>{t.close_btn}</button>
        </div>
      </div>
    </div>
  );
}

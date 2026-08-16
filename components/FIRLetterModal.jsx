import React from 'react';
import { Icons } from './Icons';

export default function FIRLetterModal({ t, isOpen, onClose, formData, onChange, onSubmit, generatedLetter, onDownload }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '650px' }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{t.fir_modal_title}</h3>
          <button className="btn icon-btn" onClick={onClose} style={{ border: 'none' }}><Icons.X /></button>
        </div>
        <div className="modal-body">
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>{t.fir_modal_intro}</p>
          
          <form onSubmit={onSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>{t.form_name}</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => onChange({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                />
              </div>
              <div className="form-group">
                <label>{t.form_phone}</label>
                <input 
                  type="tel" 
                  required 
                  value={formData.phone}
                  onChange={(e) => onChange({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +91 9876543210"
                />
              </div>
            </div>

            <div className="form-group">
              <label>{t.form_address}</label>
              <input 
                type="text" 
                required 
                value={formData.address}
                onChange={(e) => onChange({ ...formData, address: e.target.value })}
                placeholder="e.g. Flat 401, Apex Heights, Sector 5, Indore"
              />
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>{t.form_sp}</label>
                <input 
                  type="text" 
                  required 
                  value={formData.spOffice}
                  onChange={(e) => onChange({ ...formData, spOffice: e.target.value })}
                  placeholder="e.g. Indore District, Madhya Pradesh"
                />
              </div>
              <div className="form-group">
                <label>{t.form_date}</label>
                <input 
                  type="date" 
                  required 
                  value={formData.date}
                  onChange={(e) => onChange({ ...formData, date: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label>{t.form_ps}</label>
              <input 
                type="text" 
                required 
                value={formData.station}
                onChange={(e) => onChange({ ...formData, station: e.target.value })}
                placeholder="e.g. Vijay Nagar Police Station, Indore"
              />
            </div>

            <div className="form-group">
              <label>{t.form_details}</label>
              <textarea 
                rows="3" 
                required 
                value={formData.details}
                onChange={(e) => onChange({ ...formData, details: e.target.value })}
                placeholder="Briefly state the incident, offense, and that the local Police Station refused to file the FIR."
              />
            </div>

            <button type="submit" className="btn btn-accent" style={{ width: '100%' }}>{t.form_submit}</button>
          </form>

          {generatedLetter && (
            <div className="preview-box">
              <div className="preview-top">
                <h4>{t.letter_preview}</h4>
                <button className="btn btn-secondary btn-sm" onClick={onDownload}>
                  <Icons.Download />
                  <span>{t.download_txt}</span>
                </button>
              </div>
              <pre className="preview-text">{generatedLetter}</pre>
            </div>
          )}
        </div>
        <div className="modal-footer">
          <button className="btn" onClick={onClose}>{t.close_btn}</button>
        </div>
      </div>
    </div>
  );
}

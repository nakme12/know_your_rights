import React from 'react';
import { Icons } from './Icons';

export default function BannerSection({ t, onSosOpen, onFirOpen }) {
  return (
    <section className="banners-grid">
      <div className="banner-card">
        <div className="banner-info">
          <div className="banner-icon" style={{ borderColor: 'var(--danger-color)', color: 'var(--danger-color)' }}>
            <Icons.ShieldAlert />
          </div>
          <div className="banner-text">
            <h2>{t.sos_title}</h2>
            <p>{t.sos_desc}</p>
          </div>
        </div>
        <button className="btn btn-danger" onClick={onSosOpen}>{t.sos_action}</button>
      </div>

      <div className="banner-card">
        <div className="banner-info">
          <div className="banner-icon" style={{ borderColor: 'var(--accent-color)', color: 'var(--accent-color)' }}>
            <Icons.FileWarning />
          </div>
          <div className="banner-text">
            <h2>{t.tool_title}</h2>
            <p>{t.tool_desc}</p>
          </div>
        </div>
        <button className="btn btn-accent" onClick={onFirOpen}>{t.tool_action}</button>
      </div>
    </section>
  );
}

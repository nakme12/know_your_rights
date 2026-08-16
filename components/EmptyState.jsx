import React from 'react';

export default function EmptyState({ title, desc }) {
  return (
    <section className="empty-state-banner">
      <img src="/legal_rights.jpg" alt="Legal Rights Illustration" style={{ width: '160px', height: '160px', borderRadius: '12px', opacity: 0.9 }} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </section>
  );
}

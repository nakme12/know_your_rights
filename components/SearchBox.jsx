import React from 'react';
import { Icons } from './Icons';

export default function SearchBox({ value, onChange, placeholder, onClear }) {
  return (
    <section className="search-container">
      <span className="search-icon-left"><Icons.Search /></span>
      <input 
        type="text" 
        className="search-input" 
        placeholder={placeholder} 
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button 
          onClick={onClear}
          style={{ 
            position: 'absolute', 
            right: '1rem', 
            top: '50%', 
            transform: 'translateY(-50%)', 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer', 
            color: 'var(--text-muted)' 
          }}
        >
          <Icons.X />
        </button>
      )}
    </section>
  );
}

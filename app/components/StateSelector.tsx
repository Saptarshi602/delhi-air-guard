'use client';
import { useState } from 'react';

interface StateSelectorProps {
  onSelect: (state: string) => void;
}

// Mock list of states + travel permission
const states = [
  { name: 'Delhi', canTravel: true },
  { name: 'Assam', canTravel: true },
  { name: 'Gujarat', canTravel: false },
  { name: 'Rajasthan', canTravel: true },
  {name: 'Haryana', canTravel: true },
  { name: 'West Bengal', canTravel: true },
  { name: 'Maharashtra', canTravel: false },
  { name: 'Karnataka', canTravel: true },
  { name: 'Tamil Nadu', canTravel: true },
  { name: 'Uttar Pradesh', canTravel: false },
  { name: 'Bihar', canTravel: true },
  { name: 'Punjab', canTravel: true },
  // Add all other states/UTs similarly
];

export default function StateSelector({ onSelect }: StateSelectorProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState('Delhi');

  const handleSelect = (state: string, canTravel: boolean) => {
    if (!canTravel) {
      alert(`🚫 Travel not allowed to ${state} currently.`);
      return;
    }
    setSelected(state);
    onSelect(state);
    setShowDropdown(false);
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem',
          border: '1px solid #cbd5e1',
          borderRadius: '0.375rem',
          cursor: 'pointer',
          backgroundColor: 'white',
        }}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span>{selected}</span>
        <span style={{ transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)' }}>⬇️</span>
      </div>

      {showDropdown && (
        <ul
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            maxHeight: '200px',
            overflowY: 'auto',
            border: '1px solid #cbd5e1',
            borderRadius: '0.375rem',
            backgroundColor: 'white',
            marginTop: '0.25rem',
            zIndex: 10,
          }}
        >
          {states.map((s) => (
            <li
              key={s.name}
              onClick={() => handleSelect(s.name, s.canTravel)}
              style={{
                padding: '0.5rem',
                cursor: s.canTravel ? 'pointer' : 'not-allowed',
                color: s.canTravel ? 'black' : '#9ca3af',
                backgroundColor: s.name === selected ? '#e2e8f0' : 'white',
              }}
            >
              {s.name} {s.canTravel ? '' : '🚫'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

'use client';

import { useState } from 'react';

export default function SearchBox() {
  const [city, setCity] = useState('Delhi');

  return (
    <input
      type="text"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      placeholder="Enter city"
      style={{
        padding: '0.5rem',
        width: '100%',
        borderRadius: '0.375rem',
        border: '1px solid #cbd5e1',
      }}
    />
  );
}

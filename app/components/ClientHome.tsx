'use client';

import { useState } from 'react';
import StateSelector from './StateSelector';
import AQIMeter from './AQIMeter';
import SaveButton from './SaveButton';

export default function ClientHome() {
  const [state, setState] = useState<string | null>(null);
  const [aqi, setAqi] = useState<number | null>(null);

  function handleSelect(selectedState: string) {
    setState(selectedState);
    // temporary AQI (later replace with real API)
    setAqi(135);
  }

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Delhi Air Guard</h1>

      <StateSelector onSelect={handleSelect} />

      {aqi && <AQIMeter aqi={aqi} />}

      <SaveButton />
    </main>
  );
}

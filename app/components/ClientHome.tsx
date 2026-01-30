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
    // later: fetch AQI here
    setAqi(120);
  }

  return (
    <main className="p-6">
      <StateSelector onSelect={handleSelect} />
      {aqi && <AQIMeter aqi={aqi} />}
      <SaveButton />
    </main>
  );
}

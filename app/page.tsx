'use client';

import { useState } from 'react';
import StateSelector from './components/StateSelector';
import AQIMeter from './components/AQIMeter';
import HealthAlert from './components/HealthAlert';
import TravelAdvice from './components/TravelAdvice';
import AskQuestionBox from './components/AskQuestionBox';

export default function Home() {
  // Selected state and AQI (replace AQI with API later)
  const [selectedState, setSelectedState] = useState('Delhi');
  const [aqi, setAqi] = useState(420); // placeholder, can fetch real data later

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      
      {/* State selector */}
      <section>
        <h2>🔍 Select State / UT</h2>
        <StateSelector onSelect={(state) => setSelectedState(state)} />
        <p>Selected: {selectedState}</p>
      </section>

      {/* AQI Meter */}
      <section>
        <h2>📊 AQI Meter</h2>
        <AQIMeter aqi={aqi} />
      </section>

      {/* Health Alert */}
      <section>
        <h2>⚠️ Health Alert</h2>
        <HealthAlert aqi={aqi} />
      </section>

      {/* Travel Advice */}
      <section>
        <h2>🚗 Travel Advice</h2>
        <TravelAdvice aqi={aqi} />
      </section>

      {/* AI-powered Q&A */}
      <section>
        <h2>💬 Ask AI about your state</h2>
        <AskQuestionBox state={selectedState} aqi={aqi} />
      </section>
    </div>
  );
}

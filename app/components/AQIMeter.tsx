'use client';

interface AQIMeterProps {
  aqi: number;
}

export default function AQIMeter({ aqi }: AQIMeterProps) {
  let status = 'Good';
  if (aqi > 300) status = 'Severe';
  else if (aqi > 200) status = 'Poor';
  else if (aqi > 100) status = 'Moderate';

  return (
    <div style={{ padding: '1rem', border: '1px solid #cbd5e1', borderRadius: '0.375rem' }}>
      <h3>AQI: {aqi}</h3>
      <p>Status: {status}</p>
    </div>
  );
}

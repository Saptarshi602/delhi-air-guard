'use client';

interface TravelAdviceProps {
  aqi: number;
}

export default function TravelAdvice({ aqi }: TravelAdviceProps) {
  const advice = aqi > 300 ? '❌ Avoid travel between 3–6 PM' : '✅ Best travel time: Morning 6–8 AM';

  return (
    <div style={{ padding: '1rem', border: '1px solid #cbd5e1', borderRadius: '0.375rem' }}>
      {advice}
    </div>
  );
}

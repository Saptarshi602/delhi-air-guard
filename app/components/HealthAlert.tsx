'use client';

interface HealthAlertProps {
  aqi: number;
}

export default function HealthAlert({ aqi }: HealthAlertProps) {
  if (aqi < 200) return null;

  return (
    <div
      style={{
        padding: '1rem',
        border: '1px solid #f87171',
        borderRadius: '0.375rem',
        backgroundColor: '#fee2e2',
      }}
    >
      ⚠️ Health Alert: Asthma & heart patients should avoid outdoor activity.
    </div>
  );
}

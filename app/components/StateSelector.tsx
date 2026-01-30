"use client";

type StateSelectorProps = {
  onSelect: (state: string) => void;
};

export default function StateSelector({ onSelect }: StateSelectorProps) {
  const states = [
    "Delhi",
    "Maharashtra",
    "Uttar Pradesh",
    "Tamil Nadu",
    "West Bengal",
  ];

  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select State</option>
      {states.map((state) => (
        <option key={state} value={state}>
          {state}
        </option>
      ))}
    </select>
  );
}

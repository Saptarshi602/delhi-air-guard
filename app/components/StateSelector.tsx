'use client';

type StateSelectorProps = {
  onSelect: (state: string) => void;
};

export default function StateSelector({ onSelect }: StateSelectorProps) {
  return (
    <select
      className="border p-2 rounded"
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="">Select State</option>
      <option value="Delhi">Delhi</option>
      <option value="Maharashtra">Maharashtra</option>
      <option value="Karnataka">Karnataka</option>
    </select>
  );
}

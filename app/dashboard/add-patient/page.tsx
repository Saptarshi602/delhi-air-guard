"use client";

export default function AddPatient() {
  return (
    <div className="card">
      <h2>Add Patient</h2>

      <input placeholder="Patient Name" />
      <input placeholder="Age" type="number" />

      <select>
        <option>Normal</option>
        <option>Asthma</option>
        <option>Heart Patient</option>
      </select>

      <button>Save Patient</button>
    </div>
  );
}

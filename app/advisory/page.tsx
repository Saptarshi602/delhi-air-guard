"use client";
import { useState } from "react";

export default function Advisory() {
  const [state, setState] = useState("");
  const [aqi, setAqi] = useState<number | null>(null);
  const [advice, setAdvice] = useState("");

  async function checkAQI() {
    const res = await fetch(`/api/aqi?state=${state}`);
    const data = await res.json();
    setAqi(data.aqi);

    const ai = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({ aqi: data.aqi }),
    });
    const aiData = await ai.json();
    setAdvice(aiData.advice);
  }

  return (
    <div className="card">
      <h2>State Health Advisory</h2>

      <input
        placeholder="Enter State"
        onChange={(e) => setState(e.target.value)}
      />

      <button onClick={checkAQI}>Check</button>

      {aqi && <p>AQI: {aqi}</p>}
      {advice && <p>{advice}</p>}
    </div>
  );
}

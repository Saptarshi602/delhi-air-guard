'use client';
import React, { useEffect, useState } from "react";

interface AQIData {
  aqi: number;
  healthMessage: string;
}

export default function DashboardPage() {
  const [aqiData, setAqiData] = useState<AQIData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/.netlify/functions/fetchAQI")
      .then((res) => res.json())
      .then((data) => {
        // Assume API returns { aqi: 250, healthMessage: "Avoid going outside" }
        setAqiData(data);
        setLoading(false);
      })
      .catch(() => {
        setAqiData({ aqi: -1, healthMessage: "Error fetching AQI" });
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading Dashboard...</div>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Delhi AQI Dashboard</h1>
      <p>
        <strong>Current AQI:</strong> {aqiData?.aqi}
      </p>
      <p>
        <strong>Health Advisory:</strong> {aqiData?.healthMessage}
      </p>
    </div>
  );
}

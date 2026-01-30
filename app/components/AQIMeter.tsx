type AQIMeterProps = {
  aqi?: number;
};

export default function AQIMeter({ aqi = 120 }: AQIMeterProps) {
  return (
    <div>
      <h3>Current AQI</h3>
      <p>{aqi}</p>
    </div>
  );
}

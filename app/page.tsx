import StateSelector from "./components/StateSelector";
import SaveButton from "./components/SaveButton";
import AQIMeter from "./components/AQIMeter";

export default function Home() {
  return (
    <main>
      <h1>Delhi Air Guard</h1>

      <StateSelector onSelect={(state) => console.log(state)} />
      <AQIMeter aqi={180} />

      <SaveButton />
    </main>
  );
}

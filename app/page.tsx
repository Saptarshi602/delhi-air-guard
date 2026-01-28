import Link from "next/link";

export default function Home() {
  return (
    <div className="card">
      <h1>🌫️ Delhi AIR Guard</h1>
      <p>
        Smart AI-powered air quality, health & travel advisory system.
        Designed to protect families from air pollution risks.
      </p>

      <Link href="/login">
        <button>Login with Google →</button>
      </Link>
    </div>
  );
}

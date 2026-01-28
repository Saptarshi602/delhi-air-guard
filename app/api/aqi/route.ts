import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Temporary static data (safe for build & demo)
  const data = {
    city: "Delhi",
    aqi: 220,
    level: "Poor",
    updatedAt: new Date().toISOString(),
  };

  return NextResponse.json(data);
}

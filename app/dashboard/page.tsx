import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/");

  return (
    <div>
      <h1>Your Health Dashboard</h1>
      <p>Personalised AQI & patient reports</p>
    </div>
  );
}

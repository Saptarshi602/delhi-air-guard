'use client'

import { signIn, signOut, useSession } from "next-auth/react"

export default function TopNavbar() {
  const { data: session } = useSession()

  return (
    <header className="bg-slate-900 text-white px-6 py-3 flex items-center justify-between">
      
      {/* Left */}
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-bold">Delhi Air Guard</h1>

        <div className="hidden md:flex items-center gap-2 text-sm text-gray-300">
          📍 New Delhi
        </div>
      </div>

      {/* Center */}
      <div className="flex-1 max-w-xl mx-6 hidden md:flex">
        <input
          className="w-full rounded-l-md px-4 py-2 text-black"
          placeholder="Search AQI, area, health tips..."
        />
        <button className="bg-yellow-400 text-black px-4 rounded-r-md font-semibold">
          Search
        </button>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 text-sm">
        <button className="hover:underline">Health Records</button>
        <button className="hover:underline">AI Chat</button>
        <button className="hover:underline">Alerts</button>

        {session ? (
          <button onClick={() => signOut()} className="btn-outline">
            Logout
          </button>
        ) : (
          <button onClick={() => signIn("google")} className="btn-primary">
            Login
          </button>
        )}
      </div>
    </header>
  )
}

'use client'

import {
  MapPin,
  Search,
  Bell,
  MessageCircle,
  FileText,
  User
} from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function TopNavbar() {
  const { data: session, status } = useSession()

  return (
    <header className="sticky top-0 z-50 bg-[#0f172a] text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">

        {/* LOGO */}
        <div className="text-2xl font-bold tracking-wide cursor-pointer">
          Delhi<span className="text-emerald-400">Air</span>Guard
        </div>

        {/* LOCATION */}
        <div className="hidden md:flex items-center gap-2 rounded-md px-3 py-2 hover:bg-white/10 cursor-pointer">
          <MapPin size={18} />
          <div className="leading-tight">
            <p className="text-xs text-gray-300">Location</p>
            <p className="font-semibold">New Delhi</p>
          </div>
        </div>

        {/* SEARCH */}
        <div className="flex flex-1 items-center">
          <input
            className="w-full rounded-l-md px-4 py-2 text-black outline-none"
            placeholder="Search AQI, area, health tips..."
          />
          <button className="rounded-r-md bg-emerald-400 px-4 py-2 hover:bg-emerald-500">
            <Search className="text-black" />
          </button>
        </div>

        {/* RIGHT MENU */}
        <div className="hidden lg:flex items-center gap-5 text-sm">

          <Nav icon={<FileText size={18} />} label="Health Records" />
          <Nav icon={<MessageCircle size={18} />} label="AI Chat" />
          <Nav icon={<Bell size={18} />} label="Alerts" />

          {status === 'authenticated' ? (
            <div
              onClick={() => signOut()}
              className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-white/10 cursor-pointer"
            >
              <User size={18} />
              <span className="font-medium">
                {session.user?.name}
              </span>
            </div>
          ) : (
            <button
              onClick={() => signIn('google')}
              className="rounded-md border border-white px-4 py-2 hover:bg-white hover:text-black transition"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

function Nav({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-white/10 cursor-pointer">
      {icon}
      <span>{label}</span>
    </div>
  )
}

'use client'

import { MapPin, Search, Bell, MessageCircle, FileText, User } from 'lucide-react'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function TopNavbar() {
  const { data: session, status } = useSession()

  return (
    <header className="w-full bg-[#131921] text-white">
      <div className="flex items-center gap-4 px-4 py-2">

        {/* Logo */}
        <div className="text-xl font-bold whitespace-nowrap cursor-pointer">
          Delhi<span className="text-orange-400">Air</span>Guard
        </div>

        {/* Location */}
        <div className="hidden md:flex items-center gap-1 text-sm cursor-pointer hover:outline hover:outline-1 hover:outline-white px-2 py-1 rounded">
          <MapPin size={16} />
          <div>
            <p className="text-xs text-gray-300">Location</p>
            <p className="font-semibold">New Delhi</p>
          </div>
        </div>

        {/* Search */}
        <div className="flex flex-1 items-center">
          <input
            type="text"
            placeholder="Search AQI, area, health tips..."
            className="w-full px-4 py-2 text-black rounded-l-md outline-none"
          />
          <button className="bg-orange-400 px-4 py-2 rounded-r-md hover:bg-orange-500">
            <Search size={18} className="text-black" />
          </button>
        </div>

        {/* Right Section */}
        <nav className="hidden lg:flex items-center gap-6 text-sm">

          <NavItem icon={<FileText size={18} />} label="Health Records" />
          <NavItem icon={<MessageCircle size={18} />} label="AI Health Chat" />
          <NavItem icon={<Bell size={18} />} label="Alerts" />

          {/* Auth */}
          {status === 'authenticated' ? (
            <div
              onClick={() => signOut()}
              className="flex items-center gap-1 cursor-pointer hover:outline hover:outline-1 hover:outline-white px-2 py-1 rounded"
            >
              <User size={18} />
              <span>Hello, {session.user?.name}</span>
            </div>
          ) : (
            <button
              onClick={() => signIn('google')}
              className="px-3 py-1 border border-white rounded hover:bg-white hover:text-black"
            >
              Login
            </button>
          )}
        </nav>
      </div>
    </header>
  )
}

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-1 cursor-pointer hover:outline hover:outline-1 hover:outline-white px-2 py-1 rounded">
      {icon}
      <span>{label}</span>
    </div>
  )
}

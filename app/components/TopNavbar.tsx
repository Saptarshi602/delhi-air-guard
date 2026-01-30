'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { MapPin, MessageCircle, FileText, Bell } from 'lucide-react';

export default function TopNavbar() {
  const { data: session } = useSession();

  return (
    <header className="w-full bg-[#131921] text-white">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-6 py-3">
        
        {/* LEFT */}
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-bold text-green-400">
            Delhi Air Guard
          </h1>

          <div className="flex items-center text-sm text-gray-300">
            <MapPin size={16} className="mr-1" />
            <span>New Delhi</span>
          </div>
        </div>

        {/* CENTER */}
        <div className="hidden md:flex w-[40%]">
          <input
            placeholder="Search AQI, area, health tips..."
            className="w-full px-4 py-2 rounded-l-md text-black"
          />
          <button className="bg-yellow-400 px-4 rounded-r-md text-black font-semibold">
            Search
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6 text-sm">
          {!session ? (
            <button
              onClick={() => signIn('google')}
              className="hover:underline"
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => signOut()}
              className="hover:underline"
            >
              Hello, {session.user?.name?.split(' ')[0]}
            </button>
          )}

          <Bell size={18} />
        </div>
      </div>

      {/* SUB BAR */}
      <div className="bg-[#232f3e] px-6 py-2 flex gap-8 text-sm">
        <NavItem icon={<FileText size={16} />} text="Health Records" />
        <NavItem icon={<MessageCircle size={16} />} text="AI Health Chat" />
        <NavItem icon={<Bell size={16} />} text="Alerts" />
        <NavItem text="Help" />
      </div>
    </header>
  );
}

function NavItem({ icon, text }: { icon?: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-1 cursor-pointer hover:underline">
      {icon}
      <span>{text}</span>
    </div>
  );
}

'use client';

import { useSession, signIn } from 'next-auth/react';

export default function SaveButton() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <button
        onClick={() => signIn('google')}
        className="px-4 py-2 rounded bg-blue-600 text-white"
      >
        Login to save report
      </button>
    );
  }

  return (
    <button className="px-4 py-2 rounded bg-green-600 text-white">
      Save Health Report
    </button>
  );
}

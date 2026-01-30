'use client';

import { useSession, signIn } from 'next-auth/react';

export default function SaveButton() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <button onClick={() => signIn('google')}>
        Login to save report
      </button>
    );
  }

  return <button>Save Health Report</button>;
}

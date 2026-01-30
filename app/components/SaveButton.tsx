"use client";

import { signIn, useSession } from "next-auth/react";

export default function SaveButton() {
  const { data: session } = useSession();

  const handleSave = () => {
    if (!session) {
      alert("Please login to save details and enjoy all features");
      signIn("google");
      return;
    }

    alert("Details saved successfully!");
  };

  return (
    <button onClick={handleSave}>
      Save My Health Details
    </button>
  );
}

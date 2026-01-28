"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="card">
      <h2>Login</h2>
      <button onClick={() => signIn("google")}>
        Sign in with Google
      </button>
    </div>
  );
}

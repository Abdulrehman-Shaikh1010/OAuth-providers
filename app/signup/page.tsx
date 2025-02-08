"use client";
import { signIn } from "next-auth/react";

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <button
          onClick={() => signIn("github")}
          className="w-full bg-black text-white py-2 rounded-md mb-2"
        >
          Sign up with GitHub
        </button>
        <button
          onClick={() => signIn("google")}
          className="w-full bg-red-500 text-white py-2 rounded-md"
        >
          Sign up with Google
        </button>
      </div>
    </div>
  );
}

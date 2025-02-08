"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function DashboardPage() {
  const { data: session } = useSession();

  if (!session || !session.user) {
    return <p className="text-center text-xl mt-10">Access Denied</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome, {session.user.name}</h2>
        
        {session.user.image && (
          <Image
            src={session.user.image}
            alt="User Avatar"
            width={64}
            height={64}
            className="w-16 h-16 rounded-full mb-4"
          />
        )}

        <p className="text-lg mb-4">{session.user.email}</p>
        
        <button
          onClick={() => signOut()}
          className="w-full bg-red-500 text-white py-2 rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

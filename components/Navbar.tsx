"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b shadow-sm h-14 flex items-center">
      <div className="max-w-5xl mx-auto w-full flex justify-between px-4">
        <Link href="/" className="text-xl font-bold">BookTrailer AI</Link>

        <div className="space-x-4">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/create">Create Project</Link>
        </div>
      </div>
    </nav>
  );
}

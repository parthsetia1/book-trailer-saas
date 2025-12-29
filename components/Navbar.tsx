import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between mb-8 p-4 bg-white shadow">
      <div className="text-xl font-bold">BookTrailer AI</div>

      <div className="flex gap-6">
        <Link className="hover:underline" href="/">Dashboard</Link>
        <Link className="hover:underline" href="/create">Create Project</Link>
      </div>
    </nav>
  );
}




"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default function Dashboard() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
      setProjects(data);
    }
    load();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Your Projects</h1>

      <Link href="/create" className="block mt-4 bg-black text-white px-4 py-2 rounded-md">
        + New Project
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-4">
        {projects.map((p) => (
          <Link
            key={p.id}
            href={`/project/${p.id}`}
            className="p-4 border rounded-lg shadow-sm bg-white"
          >
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="text-gray-600">{p.description}</p>
            <p>Status: {p.status}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

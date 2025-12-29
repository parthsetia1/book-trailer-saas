"use client";

import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../lib/config";
import Navbar from "@/components/Navbar";

type Project = {
  id: string;
  title: string;
  description?: string;
  status?: string;
  video_url?: string | null;
  duration?: number;
};

export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([]);

  const USER_ID = "11111111-1111-1111-1111-111111111111"; // Static user (for demo)

  useEffect(() => {
    fetch(`${BACKEND_URL}/projects?user_id=${USER_ID}`)
      .then((res) => res.json())
      .then((data: Project[]) => setProjects(data))
      .catch(() => setProjects([]));
  }, []);

  return (
    <>
      <Navbar />

      <h1 className="text-3xl font-bold mb-6">Your Projects</h1>

      <div className="grid gap-4">
        {projects.map((p) => (
          <a key={p.id} href={`/project/${p.id}`}>
            <div className="p-4 shadow bg-white rounded">
              <h2 className="font-semibold text-xl">{p.title}</h2>
              <p>Status: {p.status}</p>
              {p.video_url && (
                <p className="text-green-600 font-bold">Trailer Ready!</p>
              )}
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

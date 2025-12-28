"use client";

import { useState } from "react";
import { createProject } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function CreateClient() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("60");

  const user_id = "demo-user";

  async function submit() {
    const res = await createProject(title, "AI Trailer", Number(duration), user_id);
    router.push(`/upload?project_id=${res.project_id}`);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Create New Project</h1>

      <div className="mt-4 space-y-3">
        <input
          className="border p-2 w-full"
          placeholder="Project title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select className="border p-2 w-full" value={duration} onChange={(e)=>setDuration(e.target.value)}>
          <option value="30">30 seconds</option>
          <option value="60">60 seconds</option>
          <option value="90">90 seconds</option>
        </select>

        <button onClick={submit} className="bg-black text-white px-4 py-2 rounded">
          Create
        </button>
      </div>
    </div>
  );
}

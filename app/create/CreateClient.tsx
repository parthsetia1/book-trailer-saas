"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createProject } from "@/lib/api";

export default function CreateClient() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("60");

  async function submit() {
    if (!title.trim()) {
      alert("Title required");
      return;
    }

    const res = await createProject(
      title,
      "AI Generated Book Trailer",
      Number(duration),
      "demo-user"
    );

    router.push(`/upload?project_id=${res.project_id}`);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Create New Project</h1>

      <input
        className="border p-3 w-full rounded-md mb-4"
        placeholder="Project title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        className="border p-3 w-full rounded-md mb-6"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      >
        <option value="30">30 seconds</option>
        <option value="60">60 seconds</option>
        <option value="90">90 seconds</option>
      </select>

      <button
        onClick={submit}
        className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md cursor-pointer"
      >
        Create
      </button>
    </div>
  );
}

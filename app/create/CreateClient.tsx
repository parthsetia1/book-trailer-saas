"use client";

import { useState } from "react";
import { BACKEND_URL } from "../../lib/config";
import Navbar from "@/components/Navbar";

export default function CreateProject() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [duration, setDuration] = useState("10");

  const USER_ID = "11111111-1111-1111-1111-111111111111";

  async function createProject() {
    const form = new FormData();
    form.append("title", title);
    form.append("description", desc);
    form.append("duration", duration);
    form.append("user_id", USER_ID);
    form.append("duration", String(parseInt(duration)));


    const res = await fetch(`${BACKEND_URL}/create_project`, {
      method: "POST",
      body: form,
    });

    const data = await res.json();
    window.location.href = `/project/${data.project_id}`;
  }

  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold mb-6">Create New Project</h1>

      <input
        className="w-full p-3 border mb-4"
        placeholder="Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full p-3 border mb-4"
        placeholder="Description..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <select
        className="p-3 border mb-4"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      >
        <option value="5">5 seconds</option>
        <option value="10">10 seconds</option>
        <option value="20">20 seconds</option>
        <option value="30">30 seconds</option>
        <option value="60">60 seconds</option>
        <option value="90">90 seconds</option>
      </select>

      <button
        className="p-3 bg-black text-white"
        onClick={createProject}
      >
        Create
      </button>
    </>
  );
}

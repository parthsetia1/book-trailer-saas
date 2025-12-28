"use client";

import { useState } from "react";
import { uploadDialogue, uploadImage } from "@/lib/api";
import { useSearchParams, useRouter } from "next/navigation";

export default function UploadClient() {
  const params = useSearchParams();
  const router = useRouter();

  const project_id = params.get("project_id")!;
  const [dialogue, setDialogue] = useState("");

  async function addDialogue() {
    await uploadDialogue(project_id, dialogue);
    setDialogue("");
  }

  async function addImage(e: any) {
    await uploadImage(project_id, e.target.files[0]);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Upload Assets</h1>

      <div className="mt-6">
        <textarea
          className="border p-2 w-full"
          rows={4}
          placeholder="Enter dialogue..."
          value={dialogue}
          onChange={(e)=>setDialogue(e.target.value)}
        />

        <button
          onClick={addDialogue}
          className="mt-2 bg-black text-white px-4 py-2 rounded"
        >
          Add Dialogue
        </button>
      </div>

      <div className="mt-6">
        <input type="file" onChange={addImage} />
      </div>

      <button
        onClick={() => router.push(`/generate?project_id=${project_id}`)}
        className="mt-6 bg-purple-600 text-white px-4 py-2 rounded"
      >
        Generate Trailer →
      </button>
    </div>
  );
}

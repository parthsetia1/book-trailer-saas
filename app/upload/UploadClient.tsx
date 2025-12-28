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
      <h1 className="text-3xl font-bold mb-6">Upload Images & Dialogues</h1>

      {/* Dialogue Box */}
      <div className="mb-6">
        <textarea
          className="border p-3 w-full rounded-md"
          rows={4}
          placeholder="Type dialogue text..."
          value={dialogue}
          onChange={(e)=>setDialogue(e.target.value)}
        />

        <button
          onClick={addDialogue}
          className="mt-3 bg-blue-600 text-white px-5 py-2 rounded-md"
        >
          Add Dialogue
        </button>
      </div>

      {/* Image Upload */}
      <div className="mb-10">
        <input
          type="file"
          onChange={addImage}
          className="w-full border p-3 rounded-md"
        />
      </div>

      {/* Continue */}
      <button
        onClick={() => router.push(`/generate?project_id=${project_id}`)}
        className="bg-purple-600 text-white px-6 py-3 rounded-md"
      >
        Continue to Trailer Generation →
      </button>
    </div>
  );
}

"use client";

import { BACKEND_URL } from "../lib/config";
import { useState } from "react";

export default function DialogueInput({
  projectId,
  onUploaded,
}: {
  projectId: string;
  onUploaded: () => void;
}) {
  const [text, setText] = useState("");

  async function submitDialogue() {
    const form = new FormData();
    form.append("project_id", projectId);
    form.append("type", "dialogue");
    form.append("dialogue", text);

    await fetch(`${BACKEND_URL}/upload_asset`, {
      method: "POST",
      body: form,
    });

    setText("");
    onUploaded();
  }

  return (
    <div className="mb-4">
      <p className="font-semibold mb-2">Scene Description / Dialogue</p>

      <textarea
        className="w-full p-3 border"
        placeholder="Describe the scene..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="mt-2 p-2 bg-black text-white"
        onClick={submitDialogue}
      >
        Add Dialogue
      </button>
    </div>
  );
}

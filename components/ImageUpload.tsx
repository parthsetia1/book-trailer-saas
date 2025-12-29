"use client";

import { ChangeEvent } from "react";
import { BACKEND_URL } from "../lib/config";

export default function ImageUpload({
  projectId,
  onUploaded,
}: {
  projectId: string;
  onUploaded: () => void;
}) {
  async function handleFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const form = new FormData();
    form.append("project_id", projectId);
    form.append("type", "image");
    form.append("file", file);

    await fetch(`${BACKEND_URL}/upload_asset`, {
      method: "POST",
      body: form,
    });

    onUploaded();
  }

  return (
    <div className="mb-4">
      <p className="font-semibold mb-2">Upload Character Images</p>
      <input type="file" onChange={handleFile} />
    </div>
  );
}


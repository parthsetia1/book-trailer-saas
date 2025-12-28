"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { generateTrailer } from "@/lib/api";
import { useState } from "react";

export default function GeneratePage() {
  const params = useSearchParams();
  const router = useRouter();

  const project_id = params.get("project_id")!;
  const [loading, setLoading] = useState(false);

  async function generate() {
    setLoading(true);
    const res = await generateTrailer(project_id);
    router.push(`/project/${project_id}`);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Generate Trailer</h1>

      <button
        className="mt-4 bg-black text-white px-4 py-2 rounded"
        onClick={generate}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Now"}
      </button>
    </div>
  );
}

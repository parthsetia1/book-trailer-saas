"use client";

import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../../lib/config";
import Navbar from "@/components/Navbar";
import ImageUpload from "@/components/ImageUpload";
import DialogueInput from "@/components/DialogueInput";
import VideoPlayer from "@/components/VideoPlayer";

type Project = {
  id: string;
  title: string;
  description?: string;
  status?: string;
  video_url?: string | null;
  duration?: number;
};

export default function Project({ params }: { params: { id: string } }) {
  const projectId = params.id;

  const [project, setProject] = useState<Project | null>(null);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    let mounted = true;

    fetch(`${BACKEND_URL}/projects?user_id=11111111-1111-1111-1111-111111111111`)
      .then((res) => res.json())
      .then((data: Project[]) => {
        if (!mounted) return;
        const proj = data.find((d) => d.id === projectId) ?? null;
        setProject(proj);
      })
      .catch(() => {
        if (mounted) setProject(null);
      });

    return () => {
      mounted = false;
    };
  }, [projectId, refresh]);

  async function generateVideo() {
    if (!project) return;

    const form = new FormData();
    form.append("project_id", projectId);
    form.append("duration", String(project.duration ?? 10));

    await fetch(`${BACKEND_URL}/generate_trailer`, {
      method: "POST",
      body: form,
    });

    // Wait a moment for backend / supabase update
    setTimeout(() => setRefresh((r) => r + 1), 3000);
  }

  if (!project) return <div>Loading...</div>;

  return (
    <>
      <Navbar />

      <h1 className="text-3xl font-bold mb-3">{project.title}</h1>
      <p>Status: {project.status}</p>

      {!project.video_url && (
        <>
          <ImageUpload projectId={projectId} onUploaded={() => setRefresh((r) => r + 1)} />
          <DialogueInput projectId={projectId} onUploaded={() => setRefresh((r) => r + 1)} />

          <button className="p-3 bg-blue-600 text-white" onClick={generateVideo}>
            Generate AI Trailer
          </button>
        </>
      )}

      <VideoPlayer url={project.video_url ?? undefined} />
    </>
  );
}

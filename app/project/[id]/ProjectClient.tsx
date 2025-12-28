"use client";

import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProjectClient() {
  const params = useParams();
  const id = params.id;

  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from("projects").select("*").eq("id", id).single();
      setProject(data);
    }
    load();
  }, [id]);

  if (!project) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p>Status: {project.status}</p>

      {project.video_url && (
        <>
          <video src={project.video_url} controls className="mt-4 w-full rounded shadow" />
          <a
            className="mt-4 inline-block bg-black text-white px-4 py-2 rounded"
            href={project.video_url}
            download
          >
            Download Video
          </a>
        </>
      )}
    </div>
  );
}

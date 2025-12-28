export const backend = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function createProject(title: string, description: string, duration: number, user_id: string) {
  const form = new FormData();
  form.append("title", title);
  form.append("description", description);
  form.append("duration", duration.toString());
  form.append("user_id", user_id);

  const res = await fetch(`${backend}/create_project`, {
    method: "POST",
    body: form,
  });
  
  return res.json();
}

export async function uploadDialogue(project_id: string, dialogue: string) {
  const form = new FormData();
  form.append("project_id", project_id);
  form.append("type", "dialogue");
  form.append("dialogue", dialogue);

  return fetch(`${backend}/upload_asset`, { method: "POST", body: form });
}

export async function uploadImage(project_id: string, file: File) {
  const form = new FormData();
  form.append("project_id", project_id);
  form.append("type", "image");
  form.append("file", file);

  return fetch(`${backend}/upload_asset`, { method: "POST", body: form });
}

export async function generateTrailer(project_id: string) {
  const form = new FormData();
  form.append("project_id", project_id);

  const res = await fetch(`${backend}/generate_trailer`, {
    method: "POST",
    body: form,
  });

  return res.json();
}

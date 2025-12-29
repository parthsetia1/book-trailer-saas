export const dynamic = "force-dynamic";
export const runtime = "edge";

import Project from "./ProjectClient";

export default function Page({ params }: { params: { id: string } }) {
  return <Project params={params} />;
}

export const dynamic = "force-dynamic";   // avoid prerendering
export const runtime = "edge";            // recommended for vercel

import CreateProject from "./CreateClient";

export default function Page() {
  return <CreateProject />;
}

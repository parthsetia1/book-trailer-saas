export default function VideoPlayer({ url }: { url?: string }) {
  if (!url) return null;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">Generated Trailer</h2>
      <video
        src={url}
        controls
        className="w-full rounded shadow"
      />
    </div>
  );
}

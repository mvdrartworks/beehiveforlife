type ParsedVideo =
  | { provider: "youtube"; src: string }
  | { provider: "vimeo"; src: string }
  | null;

function parseVideoUrl(url: string): ParsedVideo {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = u.pathname.replace(/^\//, "").split("/")[0];
      if (id) return { provider: "youtube", src: `https://www.youtube.com/embed/${id}` };
    }
    if (host === "youtube.com" || host === "m.youtube.com") {
      if (u.pathname === "/watch") {
        const id = u.searchParams.get("v");
        if (id) return { provider: "youtube", src: `https://www.youtube.com/embed/${id}` };
      }
      const embed = u.pathname.match(/^\/(embed|shorts)\/([^/?#]+)/);
      if (embed) {
        return { provider: "youtube", src: `https://www.youtube.com/embed/${embed[2]}` };
      }
    }
    if (host === "vimeo.com") {
      const id = u.pathname.replace(/^\//, "").split("/")[0];
      if (id && /^\d+$/.test(id)) {
        return { provider: "vimeo", src: `https://player.vimeo.com/video/${id}` };
      }
    }
    if (host === "player.vimeo.com") {
      const m = u.pathname.match(/^\/video\/(\d+)/);
      if (m) return { provider: "vimeo", src: `https://player.vimeo.com/video/${m[1]}` };
    }
  } catch {
    return null;
  }
  return null;
}

export default function VideoEmbed({
  url,
  title = "Video",
  className = "",
}: {
  url: string | undefined | null;
  title?: string;
  className?: string;
}) {
  if (!url) return null;
  const parsed = parseVideoUrl(url);
  if (!parsed) return null;

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-deep/10 shadow-card ${className}`}
    >
      <iframe
        src={parsed.src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}

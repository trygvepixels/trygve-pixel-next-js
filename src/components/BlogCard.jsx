"use client";
import Image from "next/image";

const ACCENT = "#86D8FF";

const BlogCard = ({
  image,
  category = "General",
  date,
  readTime,
  title = "",
  summary = "",
  authorName = "Unknown",
  authorImage = "/authors/default.jpg",
}) => {
  const toTitleCase = (str = "") =>
    String(str)
      .toLowerCase()
      .split(" ")
      .map((w) => (w[0] ? w[0].toUpperCase() + w.slice(1) : ""))
      .join(" ");

  const showNextImage = Boolean(image && image.startsWith("/")); // heuristic: local assets → use <Image/>, remote → <img/>

  return (
    <article
      className="group relative rounded-2xl overflow-hidden border shadow-[0_6px_22px_rgba(0,0,0,0.45)] transition-all will-change-transform hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(134,216,255,0.18)]"
      style={{ borderColor: "rgba(255,255,255,0.08)", background: "#0D0F12" }}
      aria-label={toTitleCase(title)}
    >
      {/* Media */}
      <div className="relative aspect-[16/9] overflow-hidden">
        {/* Fallback bg when no image */}
        {!image && (
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
            }}
          />
        )}

        {image ? (
          showNextImage ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              priority={false}
            />
          ) : (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          )
        ) : null}

        {/* Overlay gradient */}
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 60%, rgba(13,15,18,1) 100%)",
          }}
        />

        {/* Category chip */}
        <div className="absolute left-3 top-3">
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium backdrop-blur"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.9)",
            }}
          >
            <span
              className="mr-1 inline-block h-2 w-2 rounded-full"
              style={{ background: ACCENT, boxShadow: `0 0 10px ${ACCENT}80` }}
            />
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Meta top row */}
        <p className="text-[12px] text-white/60 mb-1.5">
          <span className="align-middle">{date || "—"}</span>
          <span className="mx-2 text-white/20">•</span>
          <span className="align-middle">{readTime || "5 mins read"}</span>
        </p>

        {/* Title */}
        <h3 className="text-[18px] leading-snug font-semibold text-white">
          <span className="bg-clip-text">
            {toTitleCase(title)}
          </span>
        </h3>

        {/* Summary */}
        <p className="mt-1.5 text-sm text-white/70 line-clamp-2">
          {summary || "No description available."}
        </p>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* avatar */}
             
            <p className="text-sm font-medium text-white/90">{authorName}</p>
          </div>

          {/* subtle CTA chevron (pure CSS) */}
          <div className="flex items-center gap-1 text-xs text-white/60">
            Read
            <span
              className="ml-1 inline-block h-2 w-2 rounded-full transition-transform group-hover:translate-x-0.5"
              style={{ background: ACCENT, boxShadow: `0 0 10px ${ACCENT}80` }}
            />
          </div>
        </div>
      </div>

      {/* focus ring for a11y if card becomes a link wrapper */}
      <style jsx>{`
        article:focus-within {
          box-shadow: 0 0 0 2px ${ACCENT}55, 0 18px 60px rgba(134, 216, 255, 0.18);
          outline: none;
        }
      `}</style>
    </article>
  );
};

export default BlogCard;

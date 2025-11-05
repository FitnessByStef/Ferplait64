import React, { useEffect, useMemo, useState } from "react";

type Props = {
  images: string[];
  intervalMs?: number;
  height?: string;         // classes tailwind pour la hauteur
  autoPlay?: boolean;
  showArrows?: boolean;
};

export default function Carousel({
  images,
  intervalMs = 4000,
  height = "h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px]",
  autoPlay = true,
  showArrows = true,
}: Props) {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);

  // Navigation
  const goTo = (newIndex: number) => {
    if (safeImages.length === 0) return;
    const total = safeImages.length;
    const normalized = ((newIndex % total) + total) % total; // modulo positif
    setIndex(normalized);
  };

  useEffect(() => {
    if (!autoPlay || safeImages.length <= 1) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % safeImages.length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [safeImages, intervalMs, autoPlay]);

  if (safeImages.length === 0) {
    return (
      <div
        className={`
          relative ${height}
          bg-[#101014] rounded-3xl border border-white/5
        `}
      />
    );
  }

  return (
    <div
      className={`
        relative ${height} overflow-hidden
        rounded-[2.2rem]
        bg-[#0f1011]
        shadow-[0_18px_45px_rgba(0,0,0,0.35)]
        border border-white/5
      `}
    >
      {safeImages.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`bannière ${i + 1}`}
          className={[
            "absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out bg-black/5",
            i === index ? "opacity-100" : "opacity-0",
          ].join(" ")}
          loading="eager"
        />
      ))}

      {/* Flèches de navigation (desktop / tablette surtout) */}
      {showArrows && safeImages.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className="
              hidden sm:flex
              absolute left-3 top-1/2 -translate-y-1/2
              h-9 w-9 items-center justify-center
              rounded-full bg-black/40 hover:bg-black/65
              border border-white/15
              text-white text-lg
              backdrop-blur-sm
              transition-all duration-200
            "
            aria-label="Image précédente"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className="
              hidden sm:flex
              absolute right-3 top-1/2 -translate-y-1/2
              h-9 w-9 items-center justify-center
              rounded-full bg-black/40 hover:bg-black/65
              border border-white/15
              text-white text-lg
              backdrop-blur-sm
              transition-all duration-200
            "
            aria-label="Image suivante"
          >
            ›
          </button>
        </>
      )}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {safeImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              h-2.5 rounded-full transition-all
              ${i === index ? "w-6 bg-white/90" : "w-2.5 bg-white/25"}
            `}
            aria-label={`slide ${i + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}

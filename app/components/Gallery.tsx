"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

export interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryImage[];
  /** Passed to next/image sizes prop for grid thumbnails */
  sizes?: string;
  /** Tailwind classes for the grid container */
  gridClassName?: string;
}

export default function Gallery({
  images,
  sizes = "(max-width: 768px) 50vw, 33vw",
  gridClassName = "columns-2 md:columns-3 lg:columns-5 gap-2 md:gap-3 space-y-2 md:space-y-3",
}: GalleryProps) {
  const [index, setIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const isOpen = index !== null;

  const close = useCallback(() => setIndex(null), []);

  const prev = useCallback(() => {
    setIndex((i) =>
      i !== null ? (i - 1 + images.length) % images.length : null
    );
  }, [images.length]);

  const next = useCallback(() => {
    setIndex((i) => (i !== null ? (i + 1) % images.length : null));
  }, [images.length]);

  // Keyboard navigation + scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, close, prev, next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 60) {
      delta > 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  return (
    <>
      {/* ── Grid ── */}
      <div className={gridClassName}>
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className="relative overflow-hidden bg-linen break-inside-avoid w-full block focus:outline-none focus-visible:ring-2 focus-visible:ring-clay group"
            aria-label={`Open image: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={500}
              sizes={sizes}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-bark/0 group-hover:bg-bark/20 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-ivory text-xl">
                ⊕
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {isOpen && index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          className="fixed inset-0 z-[100] bg-bark/95 flex flex-col items-center justify-center"
          onClick={close}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top bar */}
          <div
            className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="mono-label text-driftwood text-xs">
              {index + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={close}
              className="mono-label text-driftwood hover:text-ivory transition-colors text-xs uppercase tracking-widest px-3 py-1"
              aria-label="Close lightbox"
            >
              Close ✕
            </button>
          </div>

          {/* Image */}
          <div
            className="relative w-full max-w-4xl max-h-[80vh] mx-6"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              width={1200}
              height={900}
              sizes="(max-width: 768px) 100vw, 80vw"
              className="w-full h-auto max-h-[80vh] object-contain"
              priority
            />
          </div>

          {/* Bottom nav */}
          <div
            className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-8 py-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={prev}
              className="mono-label text-driftwood hover:text-ivory transition-colors text-xs uppercase tracking-widest px-4 py-2"
              aria-label="Previous image"
            >
              ← Prev
            </button>
            <button
              type="button"
              onClick={next}
              className="mono-label text-driftwood hover:text-ivory transition-colors text-xs uppercase tracking-widest px-4 py-2"
              aria-label="Next image"
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </>
  );
}

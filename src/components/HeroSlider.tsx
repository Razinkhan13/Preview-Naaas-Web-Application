"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { businesses } from "@/data/businesses";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 300);
    },
    [isTransitioning]
  );

  const prev = useCallback(() => {
    goTo((current - 1 + businesses.length) % businesses.length);
  }, [current, goTo]);

  const next = useCallback(() => {
    goTo((current + 1) % businesses.length);
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = businesses[current];

  return (
    <section className="relative w-full h-[100svh] overflow-hidden">
      {/* Background images */}
      {businesses.map((b, i) => (
        <div
          key={b.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={b.heroImage}
            alt={b.heroTitle}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Slide content */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <h1 className="text-3xl md:text-5xl font-bold tracking-widest mb-6 drop-shadow-lg uppercase">
          {slide.heroTitle}
        </h1>
        <a
          href="#businesses"
          className="px-8 py-3 text-sm font-bold tracking-widest uppercase text-white border border-[#C8A951] bg-[#C8A951]/80 hover:bg-[#C8A951] transition-colors backdrop-blur-sm"
        >
          CLICK HERE
        </a>
      </div>

      {/* Prev/Next buttons */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {businesses.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-[#C8A951] w-6" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

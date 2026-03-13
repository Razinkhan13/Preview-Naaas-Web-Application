"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: 1,
    title: "NAAAS LOGISTICS",
    subtitle: "Connecting the world through excellence in logistics",
    bg: "from-sky-800 to-slate-900",
    imagePlaceholder: "✈",
    emoji: "✈️",
  },
  {
    id: 2,
    title: "NAAAS EVENTS & MARKETING",
    subtitle: "Creating unforgettable experiences across the region",
    bg: "from-gray-900 to-yellow-900",
    imagePlaceholder: "🎆",
    emoji: "🎆",
  },
  {
    id: 3,
    title: "NAAAS REAL ESTATE",
    subtitle: "Building tomorrow's landmarks today",
    bg: "from-indigo-900 to-purple-900",
    imagePlaceholder: "🏙",
    emoji: "🏙️",
  },
  {
    id: 4,
    title: "NAAAS AGRICULTURE",
    subtitle: "Sustainable farming for a greener future",
    bg: "from-green-900 to-emerald-800",
    imagePlaceholder: "🌾",
    emoji: "🌾",
  },
  {
    id: 5,
    title: "MEDICAL TECH FOR MEDICINES",
    subtitle: "Advancing healthcare access with innovative medical solutions",
    bg: "from-teal-900 to-cyan-800",
    imagePlaceholder: "💊",
    emoji: "💊",
  },
  {
    id: 6,
    title: "NAAAS TRAVEL & HOSPITALITY",
    subtitle: "Crafting premium journeys and hospitality experiences",
    bg: "from-orange-900 to-rose-800",
    imagePlaceholder: "✈",
    emoji: "🧳",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(idx);
        setAnimating(false);
      }, 350);
    },
    [animating]
  );

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "calc(100vh - var(--navbar-height))", minHeight: 400 }}>
      {/* Background gradient representing image */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${slide.bg} transition-all duration-700`}
        style={{ opacity: animating ? 0 : 1 }}
      />

      {/* Large emoji/icon as visual placeholder */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: animating ? 0 : 0.15, transition: "opacity 0.7s ease" }}
      >
        <span className="text-[20rem] leading-none select-none">{slide.emoji}</span>
      </div>

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content overlay */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-end pb-16 px-6 text-center"
        style={{ opacity: animating ? 0 : 1, transition: "opacity 0.5s ease" }}
      >
        <h1 className="text-white text-2xl sm:text-4xl font-extrabold tracking-wider uppercase mb-4 drop-shadow-lg">
          {slide.title}
        </h1>
        <p className="text-white/80 text-sm sm:text-base mb-6 max-w-md">{slide.subtitle}</p>
        <a
          href="#businesses"
          className="inline-block px-8 py-3 bg-[#C9A84C] hover:bg-[#A8892A] text-white text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-200 rounded-sm shadow-lg"
        >
          CLICK HERE
        </a>
      </div>

      {/* Prev arrow */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? "bg-[#C9A84C] w-6" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

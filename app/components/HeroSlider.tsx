"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const slides = [
  {
    id: 1,
    title: "NAAAS LOGISTICS",
    subtitle: "Connecting the world through excellence in logistics",
    description: "Global supply chain solutions with cutting-edge technology and unmatched reliability",
    bg: "from-sky-900 via-blue-900 to-slate-900",
    emoji: "✈️",
    accentColor: "from-sky-400 to-blue-500",
  },
  {
    id: 2,
    title: "NAAAS EVENTS & MARKETING",
    subtitle: "Creating unforgettable experiences across the region",
    description: "Transforming visions into extraordinary events that leave lasting impressions",
    bg: "from-purple-900 via-pink-900 to-rose-900",
    emoji: "🎆",
    accentColor: "from-pink-400 to-rose-500",
  },
  {
    id: 3,
    title: "NAAAS REAL ESTATE",
    subtitle: "Building tomorrow's landmarks today",
    description: "Developing premium properties that redefine urban living and commercial spaces",
    bg: "from-indigo-900 via-purple-900 to-violet-900",
    emoji: "🏙️",
    accentColor: "from-indigo-400 to-purple-500",
  },
  {
    id: 4,
    title: "NAAAS AGRICULTURE",
    subtitle: "Sustainable farming for a greener future",
    description: "Innovation in agriculture for environmental sustainability and food security",
    bg: "from-green-900 via-emerald-900 to-teal-800",
    emoji: "🌾",
    accentColor: "from-green-400 to-emerald-500",
  },
  {
    id: 5,
    title: "MEDICAL TECH FOR MEDICINES",
    subtitle: "Healthcare innovation for a healthier tomorrow",
    description: "Advanced medical technology solutions improving lives worldwide",
    bg: "from-cyan-900 via-teal-900 to-blue-900",
    emoji: "⚕️",
    accentColor: "from-cyan-400 to-teal-500",
  },
  {
    id: 6,
    title: "NAAAS TRAVEL & HOSPITALITY",
    subtitle: "Exceptional journeys and unparalleled hospitality",
    description: "Crafting memorable travel experiences with world-class service",
    bg: "from-amber-900 via-orange-900 to-red-900",
    emoji: "🏨",
    accentColor: "from-amber-400 to-orange-500",
  },
];

type SlideData = (typeof slides)[0];

// Renders one full slide layer (background + content)
function SlideLayer({
  slide,
  entering,
  visible,
  direction,
}: {
  slide: SlideData;
  entering: boolean;
  visible: boolean;
  direction: "next" | "prev";
}) {
  const translateX = entering && !visible
    ? direction === "next" ? "60px" : "-60px"
    : "0px";

  return (
    <>
      {/* Gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${slide.bg}`}
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.9s ease-in-out" }}
      />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Large decorative emoji */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          opacity: visible ? 0.08 : 0,
          transform: visible ? "scale(1) rotate(0deg)" : "scale(0.9) rotate(-5deg)",
          transition: "opacity 0.9s ease-in-out, transform 0.9s ease-in-out",
        }}
      >
        <span className="text-[25rem] leading-none select-none">{slide.emoji}</span>
      </div>

      {/* Dark gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

      {/* Accent stripe */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${slide.accentColor}`}
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.9s ease-in-out" }}
      />

      {/* Slide content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pb-20"
        style={{
          opacity: visible ? 1 : 0,
          transform: `translateX(${translateX})`,
          transition: "opacity 0.9s ease-in-out, transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        <div className="mb-6">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-wider uppercase drop-shadow-2xl">
            {slide.title}
          </h1>
        </div>

        <div className={`w-24 h-1 bg-gradient-to-r ${slide.accentColor} mb-4 rounded-full`} />

        <p className="text-white/90 text-base sm:text-xl md:text-2xl mb-3 max-w-2xl font-light">
          {slide.subtitle}
        </p>

        <p className="text-white/70 text-sm sm:text-base mb-8 max-w-xl">
          {slide.description}
        </p>

        <a
          href="#businesses"
          className={`group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r ${slide.accentColor} hover:shadow-2xl hover:scale-105 text-white text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-full shadow-gold`}
        >
          EXPLORE MORE
          <svg
            className="w-5 h-5 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </>
  );
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  // Index of the slide currently fading in (null when idle)
  const [entering, setEntering] = useState<number | null>(null);
  // Controls whether the entering layer is visible (opacity 1) or hidden (opacity 0)
  const [enterVisible, setEnterVisible] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const raf1 = useRef<number | null>(null);
  const raf2 = useRef<number | null>(null);
  const mountedRef = useRef(true);

  const goTo = useCallback(
    (idx: number, dir: "next" | "prev" = "next") => {
      // Use `entering` directly (not a derived value) to satisfy the deps array
      if (entering !== null || idx === current) return;

      setDirection(dir);
      setEntering(idx);
      setEnterVisible(false);

      // Cancel any pending rAF callbacks from a previous call
      if (raf1.current !== null) cancelAnimationFrame(raf1.current);
      if (raf2.current !== null) cancelAnimationFrame(raf2.current);

      // Two rAF frames ensure the entering element is mounted before we trigger
      // the CSS transition (mounting at opacity:0, then animating to opacity:1).
      raf1.current = requestAnimationFrame(() => {
        raf2.current = requestAnimationFrame(() => {
          if (mountedRef.current) setEnterVisible(true);
        });
      });

      if (transitionTimer.current) clearTimeout(transitionTimer.current);
      transitionTimer.current = setTimeout(() => {
        if (!mountedRef.current) return;
        setCurrent(idx);
        setEntering(null);
        setEnterVisible(false);
        transitionTimer.current = null;
      }, 950);
    },
    [entering, current]
  );

  const prev = useCallback(
    () => goTo((current - 1 + slides.length) % slides.length, "prev"),
    [current, goTo]
  );
  const next = useCallback(
    () => goTo((current + 1) % slides.length, "next"),
    [current, goTo]
  );

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  // Cleanup timers and rAF handles on unmount
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (transitionTimer.current) clearTimeout(transitionTimer.current);
      if (raf1.current !== null) cancelAnimationFrame(raf1.current);
      if (raf2.current !== null) cancelAnimationFrame(raf2.current);
    };
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "calc(100vh - var(--navbar-height))", minHeight: 500 }}
    >
      {/* Base layer — the currently active slide (always fully visible) */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <SlideLayer
          slide={slides[current]}
          entering={false}
          visible={true}
          direction={direction}
        />
      </div>

      {/* Top layer — the incoming slide (crossfades + slides in over the base) */}
      {entering !== null && (
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          <SlideLayer
            slide={slides[entering]}
            entering={true}
            visible={enterVisible}
            direction={direction}
          />
        </div>
      )}

      {/* Navigation arrows — above both slide layers */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
        style={{ zIndex: 10 }}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
        style={{ zIndex: 10 }}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dot navigation */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 px-6 py-3 rounded-full bg-black/20 backdrop-blur-md border border-white/20"
        style={{ zIndex: 10 }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? "next" : "prev")}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "bg-white w-8 h-3"
                : "bg-white/50 hover:bg-white/70 w-3 h-3"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div
        className="absolute top-6 right-6 text-white/80 text-sm font-medium bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
        style={{ zIndex: 10 }}
      >
        {current + 1} / {slides.length}
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: 1,
    title: "NAAAS LOGISTICS",
    subtitle: "Connecting the world through excellence in logistics",
    description: "Global supply chain solutions with cutting-edge technology and unmatched reliability",
    bg: "from-sky-900 via-blue-900 to-slate-900",
    imagePlaceholder: "✈",
    emoji: "✈️",
    accentColor: "from-sky-400 to-blue-500",
  },
  {
    id: 2,
    title: "NAAAS EVENTS & MARKETING",
    subtitle: "Creating unforgettable experiences across the region",
    description: "Transforming visions into extraordinary events that leave lasting impressions",
    bg: "from-purple-900 via-pink-900 to-rose-900",
    imagePlaceholder: "🎆",
    emoji: "🎆",
    accentColor: "from-pink-400 to-rose-500",
  },
  {
    id: 3,
    title: "NAAAS REAL ESTATE",
    subtitle: "Building tomorrow's landmarks today",
    description: "Developing premium properties that redefine urban living and commercial spaces",
    bg: "from-indigo-900 via-purple-900 to-violet-900",
    imagePlaceholder: "🏙",
    emoji: "🏙️",
    accentColor: "from-indigo-400 to-purple-500",
  },
  {
    id: 4,
    title: "NAAAS AGRICULTURE",
    subtitle: "Sustainable farming for a greener future",
    description: "Innovation in agriculture for environmental sustainability and food security",
    bg: "from-green-900 via-emerald-900 to-teal-800",
    imagePlaceholder: "🌾",
    emoji: "🌾",
    accentColor: "from-green-400 to-emerald-500",
  },
  {
    id: 5,
    title: "MEDICAL TECH FOR MEDICINES",
    subtitle: "Healthcare innovation for a healthier tomorrow",
    description: "Advanced medical technology solutions improving lives worldwide",
    bg: "from-cyan-900 via-teal-900 to-blue-900",
    imagePlaceholder: "⚕",
    emoji: "⚕️",
    accentColor: "from-cyan-400 to-teal-500",
  },
  {
    id: 6,
    title: "NAAAS TRAVEL & HOSPITALITY",
    subtitle: "Exceptional journeys and unparalleled hospitality",
    description: "Crafting memorable travel experiences with world-class service",
    bg: "from-amber-900 via-orange-900 to-red-900",
    imagePlaceholder: "🏨",
    emoji: "🏨",
    accentColor: "from-amber-400 to-orange-500",
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

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "calc(100vh - var(--navbar-height))", minHeight: 500 }}>
      {/* Animated gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${slide.bg} transition-all duration-1000`}
        style={{ opacity: animating ? 0.8 : 1 }}
      />

      {/* Overlay pattern for depth */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Large animated emoji as visual element */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: animating ? 0 : 0.08, transition: "opacity 1s ease, transform 1s ease" }}
      >
        <span
          className="text-[25rem] leading-none select-none"
          style={{
            transform: animating ? 'scale(0.9) rotate(-5deg)' : 'scale(1) rotate(0deg)',
            transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        >
          {slide.emoji}
        </span>
      </div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Accent gradient stripe */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${slide.accentColor}`} />

      {/* Content overlay with staggered animations */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pb-20"
        style={{ opacity: animating ? 0 : 1, transition: "opacity 0.6s ease" }}
      >
        {/* Animated title */}
        <div className="mb-6 overflow-hidden">
          <h1
            className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-wider uppercase drop-shadow-2xl"
            style={{
              transform: animating ? 'translateY(100%)' : 'translateY(0)',
              transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            {slide.title}
          </h1>
        </div>

        {/* Decorative line */}
        <div className={`w-24 h-1 bg-gradient-to-r ${slide.accentColor} mb-4 rounded-full`}
          style={{
            transform: animating ? 'scaleX(0)' : 'scaleX(1)',
            transition: 'transform 0.6s ease 0.2s'
          }}
        />

        {/* Subtitle */}
        <p
          className="text-white/90 text-base sm:text-xl md:text-2xl mb-3 max-w-2xl font-light"
          style={{
            transform: animating ? 'translateY(30px)' : 'translateY(0)',
            opacity: animating ? 0 : 1,
            transition: 'all 0.6s ease 0.3s'
          }}
        >
          {slide.subtitle}
        </p>

        {/* Description */}
        <p
          className="text-white/70 text-sm sm:text-base mb-8 max-w-xl"
          style={{
            transform: animating ? 'translateY(30px)' : 'translateY(0)',
            opacity: animating ? 0 : 1,
            transition: 'all 0.6s ease 0.4s'
          }}
        >
          {slide.description}
        </p>

        {/* CTA Button with premium styling */}
        <a
          href="#businesses"
          className={`group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r ${slide.accentColor} hover:shadow-2xl hover:scale-105 text-white text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-full shadow-gold`}
          style={{
            transform: animating ? 'translateY(30px) scale(0.9)' : 'translateY(0) scale(1)',
            opacity: animating ? 0 : 1,
            transition: 'all 0.6s ease 0.5s'
          }}
        >
          EXPLORE MORE
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>

      {/* Premium navigation arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Enhanced dot navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 px-6 py-3 rounded-full bg-black/20 backdrop-blur-md border border-white/20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
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
      <div className="absolute top-6 right-6 text-white/80 text-sm font-medium bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
        {current + 1} / {slides.length}
      </div>
    </section>
  );
}

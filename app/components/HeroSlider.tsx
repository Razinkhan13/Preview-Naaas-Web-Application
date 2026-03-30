"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    tag: "Global Logistics",
    title: "Connecting the World",
    subtitle: "Through Excellence",
    description:
      "Global supply chain solutions powered by cutting-edge technology and unmatched reliability across continents.",
    accent: "#38BDF8",
    glow: "rgba(56, 189, 248, 0.15)",
    shape: "M0,0 L100,0 L80,100 L0,100Z",
  },
  {
    id: 2,
    tag: "Events & Marketing",
    title: "Crafting Experiences",
    subtitle: "That Last Forever",
    description:
      "Transforming visionary concepts into extraordinary events that leave lasting impressions across the region.",
    accent: "#E879F9",
    glow: "rgba(232, 121, 249, 0.15)",
    shape: "M20,0 L100,0 L100,100 L0,80Z",
  },
  {
    id: 3,
    tag: "Real Estate",
    title: "Building Tomorrow's",
    subtitle: "Landmarks Today",
    description:
      "Developing premium properties that redefine urban living and set new benchmarks for commercial spaces.",
    accent: "#818CF8",
    glow: "rgba(129, 140, 248, 0.15)",
    shape: "M0,0 L100,20 L100,100 L0,100Z",
  },
  {
    id: 4,
    tag: "Agriculture",
    title: "Sustainable Farming",
    subtitle: "For a Greener Future",
    description:
      "Pioneering innovation in agriculture for environmental sustainability and long-term food security.",
    accent: "#34D399",
    glow: "rgba(52, 211, 153, 0.15)",
    shape: "M0,20 L100,0 L100,80 L0,100Z",
  },
  {
    id: 5,
    tag: "Medical Technology",
    title: "Healthcare Innovation",
    subtitle: "For a Healthier World",
    description:
      "Advanced medical technology solutions that improve and transform lives across the globe.",
    accent: "#22D3EE",
    glow: "rgba(34, 211, 238, 0.15)",
    shape: "M10,0 L100,0 L90,100 L0,100Z",
  },
  {
    id: 6,
    tag: "Travel & Hospitality",
    title: "Exceptional Journeys",
    subtitle: "World-Class Hospitality",
    description:
      "Crafting unforgettable travel experiences with service that exceeds every expectation.",
    accent: "#FBBF24",
    glow: "rgba(251, 191, 36, 0.15)",
    shape: "M0,0 L100,0 L100,100 L20,80Z",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (transitioning || idx === current) return;
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(idx);
        setTimeout(() => {
          setTransitioning(false);
        }, 800);
      }, 50);
    },
    [transitioning, current]
  );

  const goPrev = () => goTo((current - 1 + slides.length) % slides.length);
  const goNext = useCallback(
    () => goTo((current + 1) % slides.length),
    [current, goTo]
  );

  useEffect(() => {
    const timer = setInterval(goNext, 7000);
    return () => clearInterval(timer);
  }, [goNext]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full overflow-hidden bg-[#080B12]"
      style={{ minHeight: "100vh" }}
    >
      {/* ── Background ambient glow ── */}
      <div
        className="absolute inset-0 transition-all duration-1000 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 60% 40%, ${slide.glow}, transparent 70%)`,
        }}
      />

      {/* ── Grid pattern overlay ── */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none" />

      {/* ── Animated geometric accent shapes ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large orb top-right */}
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.07] blur-3xl transition-all duration-1000"
          style={{ background: `radial-gradient(circle, ${slide.accent}, transparent 70%)` }}
        />
        {/* Small orb bottom-left */}
        <div
          className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-3xl transition-all duration-1000"
          style={{ background: `radial-gradient(circle, ${slide.accent}, transparent 70%)` }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-breathe"
            style={{
              width: `${4 + i * 3}px`,
              height: `${4 + i * 3}px`,
              background: slide.accent,
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i}s`,
              opacity: 0.4,
            }}
          />
        ))}

        {/* Diagonal accent line */}
        <div
          className="absolute top-0 right-[20%] w-px h-full opacity-10 transition-all duration-1000"
          style={{ background: `linear-gradient(to bottom, transparent, ${slide.accent}, transparent)` }}
        />
        <div
          className="absolute top-0 right-[40%] w-px h-full opacity-5 transition-all duration-1000"
          style={{ background: `linear-gradient(to bottom, transparent, ${slide.accent}, transparent)` }}
        />
      </div>

      {/* ── Slide number indicator top-left ── */}
      <div className="absolute top-8 left-8 z-20 hidden md:flex items-center gap-3">
        <span className="text-xs font-mono text-white/30 uppercase tracking-widest">
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="w-8 h-px bg-white/20" />
        <span className="text-xs font-mono text-white/20 uppercase tracking-widest">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* ── Slide content ── */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-[var(--navbar-height)]"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="max-w-4xl mx-auto transition-all duration-700"
          style={{ opacity: transitioning ? 0 : 1, transform: transitioning ? "translateY(30px)" : "translateY(0)" }}
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span
              className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border"
              style={{
                color: slide.accent,
                borderColor: `${slide.accent}40`,
                background: `${slide.accent}12`,
              }}
            >
              {slide.tag}
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display font-bold text-white leading-tight mb-2">
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
              {slide.title}
            </span>
            <span
              className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ color: slide.accent }}
            >
              {slide.subtitle}
            </span>
          </h1>

          {/* Gold rule */}
          <div className="flex items-center justify-center gap-3 my-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A84C]" />
            <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A84C]" />
          </div>

          {/* Description */}
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            {slide.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#businesses"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase text-[#080B12] transition-all duration-300 hover:shadow-gold-lg hover:scale-105"
              style={{ background: `linear-gradient(135deg, #C9A84C, #E8C96A)` }}
            >
              Explore Our Businesses
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase text-white/70 border border-white/20 hover:border-white/40 hover:text-white transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* ── NAAAS logo watermark ── */}
        <div className="absolute bottom-28 right-8 md:right-16 opacity-[0.04] pointer-events-none hidden md:block">
          <Image
            src="/naaas-logo.svg"
            alt=""
            width={300}
            height={120}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* ── Left / Right arrows ── */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:border-[#C9A84C]/50 transition-all duration-300 hover:scale-110"
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass flex items-center justify-center text-white/60 hover:text-white hover:border-[#C9A84C]/50 transition-all duration-300 hover:scale-110"
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* ── Dot navigation ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className="transition-all duration-400 rounded-full"
            style={{
              width: i === current ? "32px" : "8px",
              height: "8px",
              background: i === current ? slide.accent : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>

      {/* ── Bottom gradient fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #080B12, transparent)" }}
      />
    </section>
  );
}

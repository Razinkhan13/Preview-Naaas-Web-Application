"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const slides = [
  {
    id: 1,
    tag: "Global Logistics",
    title: "Connecting",
    titleLine2: "the World",
    subtitle: "Through Excellence",
    description:
      "Global supply chain solutions powered by cutting-edge technology and unmatched reliability across continents.",
    accent: "#38BDF8",
    glow: "rgba(56, 189, 248, 0.12)",
  },
  {
    id: 2,
    tag: "Events & Marketing",
    title: "Crafting",
    titleLine2: "Experiences",
    subtitle: "That Last Forever",
    description:
      "Transforming visionary concepts into extraordinary events that leave lasting impressions across the region.",
    accent: "#E879F9",
    glow: "rgba(232, 121, 249, 0.12)",
  },
  {
    id: 3,
    tag: "Real Estate",
    title: "Building",
    titleLine2: "Tomorrow's",
    subtitle: "Landmarks Today",
    description:
      "Developing premium properties that redefine urban living and set new benchmarks for commercial spaces.",
    accent: "#818CF8",
    glow: "rgba(129, 140, 248, 0.12)",
  },
  {
    id: 4,
    tag: "Agriculture",
    title: "Sustainable",
    titleLine2: "Farming",
    subtitle: "For a Greener Future",
    description:
      "Pioneering innovation in agriculture for environmental sustainability and long-term food security.",
    accent: "#34D399",
    glow: "rgba(52, 211, 153, 0.12)",
  },
  {
    id: 5,
    tag: "Medical Technology",
    title: "Healthcare",
    titleLine2: "Innovation",
    subtitle: "For a Healthier World",
    description:
      "Advanced medical technology solutions that improve and transform lives across the globe.",
    accent: "#22D3EE",
    glow: "rgba(34, 211, 238, 0.12)",
  },
  {
    id: 6,
    tag: "Travel & Hospitality",
    title: "Exceptional",
    titleLine2: "Journeys",
    subtitle: "World-Class Hospitality",
    description:
      "Crafting unforgettable travel experiences with service that exceeds every expectation.",
    accent: "#FBBF24",
    glow: "rgba(251, 191, 36, 0.12)",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const animateIn = useCallback(() => {
    if (!contentRef.current) return;
    const tl = gsap.timeline();
    const elements = contentRef.current.querySelectorAll("[data-animate]");

    gsap.set(elements, { y: 60, opacity: 0 });

    tl.to(elements, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });

    return tl;
  }, []);

  const animateOut = useCallback(() => {
    if (!contentRef.current) return;
    const elements = contentRef.current.querySelectorAll("[data-animate]");
    return gsap.to(elements, {
      y: -40,
      opacity: 0,
      duration: 0.4,
      stagger: 0.03,
      ease: "power3.in",
    });
  }, []);

  const goTo = useCallback(
    (idx: number) => {
      if (isAnimating || idx === current) return;
      setIsAnimating(true);

      const outAnim = animateOut();
      if (outAnim) {
        outAnim.then(() => {
          setCurrent(idx);
          setTimeout(() => {
            animateIn();
            setIsAnimating(false);
          }, 50);
        });
      }
    },
    [isAnimating, current, animateIn, animateOut]
  );

  const goNext = useCallback(
    () => goTo((current + 1) % slides.length),
    [current, goTo]
  );

  const goPrev = useCallback(
    () => goTo((current - 1 + slides.length) % slides.length),
    [current, goTo]
  );

  useEffect(() => {
    animateIn();
  }, [animateIn]);

  useEffect(() => {
    const timer = setInterval(goNext, 7000);
    return () => clearInterval(timer);
  }, [goNext]);

  // Parallax on mouse move (desktop)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouse = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(".hero-parallax-layer", {
        x: x * 30,
        y: y * 30,
        duration: 1,
        ease: "power2.out",
      });
    };

    section.addEventListener("mousemove", handleMouse);
    return () => section.removeEventListener("mousemove", handleMouse);
  }, []);

  const slide = slides[current];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-background"
      style={{ minHeight: "100dvh" }}
    >
      {/* Background ambient glow */}
      <div
        className="absolute inset-0 transition-all duration-[1500ms] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 60% 40%, ${slide.glow}, transparent 70%)`,
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none" />

      {/* Animated geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hero-parallax-layer">
        {/* Large orb */}
        <div
          className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full opacity-[0.06] blur-[100px] transition-all duration-[1500ms]"
          style={{ background: `radial-gradient(circle, ${slide.accent}, transparent 70%)` }}
        />
        {/* Small orb */}
        <div
          className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[80px] transition-all duration-[1500ms]"
          style={{ background: `radial-gradient(circle, ${slide.accent}, transparent 70%)` }}
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${3 + i * 2}px`,
              height: `${3 + i * 2}px`,
              background: slide.accent,
              left: `${10 + i * 11}%`,
              top: `${15 + (i % 4) * 20}%`,
              animation: `breathe ${3 + i * 0.8}s ease-in-out ${i * 0.5}s infinite`,
              opacity: 0.3,
            }}
          />
        ))}

        {/* Vertical accent lines */}
        <div
          className="absolute top-0 right-[18%] w-px h-full opacity-[0.06] transition-all duration-[1500ms]"
          style={{ background: `linear-gradient(to bottom, transparent, ${slide.accent}, transparent)` }}
        />
        <div
          className="absolute top-0 right-[38%] w-px h-full opacity-[0.03] transition-all duration-[1500ms]"
          style={{ background: `linear-gradient(to bottom, transparent, ${slide.accent}, transparent)` }}
        />
        <div
          className="absolute top-0 left-[12%] w-px h-full opacity-[0.04] transition-all duration-[1500ms]"
          style={{ background: `linear-gradient(to bottom, transparent, ${slide.accent}, transparent)` }}
        />

        {/* Rotating ring */}
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 hidden lg:block">
          <svg width="300" height="300" viewBox="0 0 300 300" className="animate-spin-slow opacity-[0.04]">
            <circle cx="150" cy="150" r="140" fill="none" stroke={slide.accent} strokeWidth="0.5" strokeDasharray="8 12" />
            <circle cx="150" cy="150" r="100" fill="none" stroke={slide.accent} strokeWidth="0.3" strokeDasharray="4 8" />
          </svg>
        </div>
      </div>

      {/* Slide number indicator */}
      <div className="absolute top-[calc(var(--navbar-height)+1rem)] left-8 z-20 hidden md:flex items-center gap-3">
        <span className="text-xs font-mono text-foreground-muted/50 uppercase tracking-widest">
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="w-10 h-px bg-foreground-muted/30" />
        <span className="text-xs font-mono text-foreground-muted/30 uppercase tracking-widest">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Side vertical text */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-foreground-muted/30" />
        <span className="text-[10px] font-mono text-foreground-muted/30 tracking-widest uppercase" style={{ writingMode: "vertical-rl" }}>
          NAAAS Holding Group
        </span>
        <div className="w-px h-16 bg-gradient-to-t from-transparent to-foreground-muted/30" />
      </div>

      {/* Slide content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-[var(--navbar-height)]"
        style={{ minHeight: "100dvh" }}
      >
        <div ref={contentRef} className="max-w-5xl mx-auto">
          {/* Tag */}
          <div data-animate>
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] border mb-8"
              style={{
                color: slide.accent,
                borderColor: `${slide.accent}30`,
                background: `${slide.accent}0A`,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: slide.accent }}
              />
              {slide.tag}
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display font-bold text-foreground leading-none mb-2">
            <span data-animate className="block hero-title">
              {slide.title}
            </span>
            <span data-animate className="block hero-title" style={{ color: slide.accent }}>
              {slide.titleLine2}
            </span>
          </h1>

          {/* Subtitle */}
          <div data-animate className="overflow-hidden mb-6">
            <p className="hero-subtitle font-display font-bold text-foreground-muted/30">
              {slide.subtitle}
            </p>
          </div>

          {/* Gold rule */}
          <div data-animate className="flex items-center justify-center gap-4 my-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#C9A84C]" />
            <div className="w-2.5 h-2.5 rounded-full border border-[#C9A84C] flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#C9A84C]" />
            </div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#C9A84C]" />
          </div>

          {/* Description */}
          <p data-animate className="text-foreground-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-12">
            {slide.description}
          </p>

          {/* CTA Buttons */}
          <div data-animate className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#businesses"
              className="magnetic-btn group px-10 py-4 rounded-full text-sm font-semibold tracking-[0.15em] uppercase overflow-hidden border-2 border-[#C9A84C] text-[#C9A84C] hover:text-[#080B12] transition-colors duration-500"
            >
              <span className="btn-fill" />
              <span className="btn-text inline-flex items-center gap-3">
                Explore Our Businesses
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-sm font-semibold tracking-[0.15em] uppercase text-foreground-muted border border-foreground-muted/20 hover:border-foreground-muted/40 hover:text-foreground transition-all duration-[400ms]"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Logo watermark */}
        <div className="absolute bottom-28 right-8 md:right-16 opacity-[0.03] pointer-events-none hidden md:block">
          <Image
            src="/naaas-logo.svg"
            alt=""
            width={350}
            height={140}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full glass flex items-center justify-center text-foreground-muted/60 hover:text-foreground hover:border-[#C9A84C]/50 transition-all duration-300 hover:scale-110 group"
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="transition-transform group-hover:-translate-x-0.5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full glass flex items-center justify-center text-foreground-muted/60 hover:text-foreground hover:border-[#C9A84C]/50 transition-all duration-300 hover:scale-110 group"
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="transition-transform group-hover:translate-x-0.5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Progress dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className="relative group"
          >
            <span
              className="block rounded-full transition-all duration-500"
              style={{
                width: i === current ? "40px" : "8px",
                height: "8px",
                background: i === current ? slide.accent : "var(--foreground-muted)",
                opacity: i === current ? 1 : 0.3,
              }}
            />
            {i === current && (
              <span
                className="absolute inset-0 rounded-full animate-pulse"
                style={{ background: `${slide.accent}30` }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-foreground-muted/60">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-foreground-muted/30 flex justify-center pt-1.5">
          <div className="w-0.5 h-2 rounded-full bg-foreground-muted/60 animate-bounce" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--background), transparent)" }}
      />
    </section>
  );
}

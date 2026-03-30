"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 6, suffix: "+", label: "Business Units", color: "#38BDF8" },
  { value: 15, suffix: "+", label: "Years Excellence", color: "#E879F9" },
  { value: 500, suffix: "+", label: "Team Members", color: "#34D399" },
  { value: 10, suffix: "+", label: "Countries", color: "#FBBF24" },
];

const values = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="16" cy="16" r="12" />
        <path d="M16 8v8l5 3" />
      </svg>
    ),
    title: "Our Mission",
    description:
      "To create sustainable value through diversified excellence and relentless innovation across all our business ventures.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M16 4l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z" />
        <path d="M16 20v8" />
      </svg>
    ),
    title: "Our Vision",
    description:
      "To be the most trusted and innovative holding group, setting definitive benchmarks in every industry we serve.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M16 6l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1z" />
        <path d="M6 26c0-6 4-10 10-10s10 4 10 10" />
      </svg>
    ),
    title: "Our Values",
    description:
      "Integrity, innovation, excellence, and an unwavering commitment to sustainable growth and community development.",
  },
];

function useCounter(target: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => setCount(Math.floor(obj.val)),
    });
  }, [active, target]);
  return count;
}

function StatCard({ stat, active }: { stat: typeof stats[0]; active: boolean }) {
  const count = useCounter(stat.value, active);
  return (
    <div className="flex flex-col items-center text-center p-6 md:p-8">
      <div
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-3 font-display tabular-nums tracking-tight"
        style={{ color: stat.color }}
      >
        {count}{stat.suffix}
      </div>
      <div className="w-10 h-[1px] mb-3 opacity-40" style={{ background: stat.color }} />
      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground-muted/50">
        {stat.label}
      </p>
    </div>
  );
}

export default function AboutSection() {
  const [active, setActive] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      if (headerRef.current) {
        gsap.from(headerRef.current.querySelectorAll("[data-reveal]"), {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      // Stats trigger
      if (statsRef.current) {
        ScrollTrigger.create({
          trigger: statsRef.current,
          start: "top 80%",
          onEnter: () => setActive(true),
        });

        gsap.from(statsRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      // Values cards
      if (valuesRef.current) {
        gsap.from(valuesRef.current.querySelectorAll(".value-card"), {
          y: 60,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="relative py-28 md:py-40 bg-surface overflow-hidden noise-overlay" ref={sectionRef}>
      {/* Top and bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px divider-gold" />
      <div className="absolute bottom-0 left-0 right-0 h-px divider-gold" />

      {/* Background accents */}
      <div className="absolute -left-64 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.03] pointer-events-none bg-[#C9A84C]" />
      <div className="absolute -right-64 top-1/3 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.02] pointer-events-none bg-[#C9A84C]" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-[20%] w-px h-full opacity-[0.03] pointer-events-none bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent" />
      <div className="absolute top-0 right-[20%] w-px h-full opacity-[0.03] pointer-events-none bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent" />

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <p data-reveal className="text-xs font-semibold tracking-[0.3em] text-[#C9A84C] uppercase mb-4">
            Who We Are
          </p>
          <h2 data-reveal className="font-display font-bold section-title text-foreground mb-4 leading-tight">
            NAAAS <span className="gradient-text">Holding Group</span>
          </h2>
          <p data-reveal className="text-foreground-muted/40 text-sm tracking-[0.2em] uppercase mb-10">
            Building & Venture BD Ltd.
          </p>
          <div data-reveal className="divider-gold w-48 mx-auto mb-10" />
          <p data-reveal className="text-foreground-muted text-lg max-w-2xl mx-auto leading-relaxed">
            A <span className="text-[#C9A84C] font-semibold">diversified conglomerate</span> operating
            across multiple high-growth sectors — logistics, real estate, agriculture, events & marketing,
            medical technology, and travel & hospitality.
          </p>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground-muted/10 rounded-2xl overflow-hidden mb-24">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface hover:bg-surface-2 transition-colors duration-500">
              <StatCard stat={stat} active={active} />
            </div>
          ))}
        </div>

        {/* Values */}
        <div ref={valuesRef} className="grid md:grid-cols-3 gap-6 md:gap-8">
          {values.map((item) => (
            <div
              key={item.title}
              className="value-card group relative p-8 md:p-10 rounded-2xl bg-background hover-gold-border transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#C9A84C]/8 border border-[#C9A84C]/15 flex items-center justify-center text-[#C9A84C] mb-6 group-hover:bg-[#C9A84C]/15 group-hover:scale-110 transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-foreground-muted text-sm leading-relaxed">{item.description}</p>
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

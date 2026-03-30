"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 6, suffix: "+", label: "Business Units", color: "#38BDF8" },
  { value: 15, suffix: "+", label: "Years Excellence", color: "#E879F9" },
  { value: 500, suffix: "+", label: "Team Members", color: "#34D399" },
  { value: 10, suffix: "+", label: "Countries", color: "#FBBF24" },
];

const values = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
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
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
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
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
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
    const steps = 60;
    const duration = 2000;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const ease = 1 - Math.pow(1 - step / steps, 3);
      setCount(Math.floor(target * ease));
      if (step >= steps) { setCount(target); clearInterval(timer); }
    }, interval);
    return () => clearInterval(timer);
  }, [active, target]);
  return count;
}

function StatCard({ stat, active }: { stat: typeof stats[0]; active: boolean }) {
  const count = useCounter(stat.value, active);
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div
        className="text-5xl md:text-6xl font-extrabold mb-2 font-display tabular-nums"
        style={{ color: stat.color }}
      >
        {count}{stat.suffix}
      </div>
      <div className="w-8 h-px mb-3" style={{ background: stat.color }} />
      <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
        {stat.label}
      </p>
    </div>
  );
}

export default function AboutSection() {
  const [active, setActive] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { setActive(true); observer.disconnect(); }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-28 bg-[#0D1220] overflow-hidden" ref={sectionRef}>
      {/* Top and bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px divider-gold" />
      <div className="absolute bottom-0 left-0 right-0 h-px divider-gold" />

      {/* Background accent */}
      <div className="absolute -left-64 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A84C, transparent)" }}
      />
      <div className="absolute -right-64 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A84C, transparent)" }}
      />

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#C9A84C] uppercase mb-3">
            Who We Are
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-4 leading-tight">
            NAAAS <span className="gradient-text">Holding Group</span>
          </h2>
          <p className="text-white/30 text-sm tracking-widest uppercase mb-8">
            Building & Venture BD Ltd.
          </p>
          <div className="divider-gold w-40 mx-auto mb-8" />
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            A <span className="text-[#C9A84C] font-semibold">diversified conglomerate</span> operating
            across multiple high-growth sectors — logistics, real estate, agriculture, events & marketing,
            medical technology, and travel & hospitality.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#0D1220]">
              <StatCard stat={stat} active={active} />
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((item, i) => (
            <div
              key={item.title}
              className="group relative p-8 rounded-2xl bg-[#080B12] hover-gold-border transition-all duration-500"
              style={{
                opacity: active ? 1 : 0,
                transform: active ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 150 + 400}ms, transform 0.6s ease ${i * 150 + 400}ms, border-color 0.3s ease, box-shadow 0.3s ease`,
              }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] mb-5 group-hover:bg-[#C9A84C]/20 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

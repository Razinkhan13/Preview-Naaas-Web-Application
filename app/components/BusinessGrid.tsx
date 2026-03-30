"use client";

import { useEffect, useRef, useState } from "react";

const businesses = [
  {
    id: 1,
    tag: "01",
    name: "NAAAS Logistics",
    description:
      "Global supply chain solutions with cutting-edge technology, delivering reliability across continents.",
    accent: "#38BDF8",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M6 32h36M6 32l4-16h28l4 16M14 32v6M34 32v6M10 22h28" />
        <circle cx="14" cy="40" r="2" fill="currentColor" stroke="none" />
        <circle cx="34" cy="40" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 2,
    tag: "02",
    name: "Events & Marketing",
    description:
      "Transforming visions into extraordinary experiences that resonate and create lasting impressions.",
    accent: "#E879F9",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M24 6l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" />
        <path d="M8 36c4-4 8-6 16-6s12 2 16 6" />
      </svg>
    ),
  },
  {
    id: 3,
    tag: "03",
    name: "Medical Technology",
    description:
      "Advanced medical tech solutions improving lives through innovation in diagnostics and healthcare.",
    accent: "#22D3EE",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="14" y="8" width="20" height="32" rx="3" />
        <path d="M24 16v8M20 20h8M18 30h12" />
        <circle cx="24" cy="36" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 4,
    tag: "04",
    name: "Real Estate",
    description:
      "Developing premium properties that redefine urban living and set new commercial benchmarks.",
    accent: "#818CF8",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M6 42h36M10 42V22l14-14 14 14v20M18 42V30h12v12" />
        <path d="M24 8v4" />
      </svg>
    ),
  },
  {
    id: 5,
    tag: "05",
    name: "Agriculture",
    description:
      "Pioneering sustainable farming for environmental resilience and long-term food security.",
    accent: "#34D399",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M24 42V20M24 20c0-8 8-12 14-10-2 8-8 12-14 10zM24 20c0-8-8-12-14-10 2 8 8 12 14 10z" />
        <path d="M10 42h28" />
      </svg>
    ),
  },
  {
    id: 6,
    tag: "06",
    name: "Travel & Hospitality",
    description:
      "Crafting unforgettable journeys and world-class hospitality that redefines service excellence.",
    accent: "#FBBF24",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M6 38h36M10 38V20l14-10 14 10v18M18 38V28h12v10" />
        <path d="M20 22h8M20 26h8" />
      </svg>
    ),
  },
];

export default function BusinessGrid() {
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            businesses.forEach((_, i) => {
              setTimeout(() => {
                setVisible((prev) => new Set([...prev, i]));
              }, i * 100);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="businesses"
      className="relative py-28 bg-[#080B12] overflow-hidden"
      ref={sectionRef}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px divider-gold" />
      <div className="absolute bottom-0 left-0 right-0 h-px divider-gold" />

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#C9A84C] uppercase mb-3">
              Our Portfolio
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight">
              Our{" "}
              <span className="gradient-text">Businesses</span>
            </h2>
          </div>
          <p className="text-white/50 text-sm max-w-xs leading-relaxed md:text-right">
            Diversified excellence across six high-growth industries, united by innovation and a commitment to quality.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((biz, idx) => (
            <div
              key={biz.id}
              className="group relative rounded-2xl p-8 cursor-pointer hover-gold-border transition-all duration-500 bg-[#0D1220]"
              style={{
                opacity: visible.has(idx) ? 1 : 0,
                transform: visible.has(idx) ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.6s ease ${idx * 80}ms, transform 0.6s ease ${idx * 80}ms, border-color 0.3s ease, box-shadow 0.3s ease`,
              }}
            >
              {/* Corner tag */}
              <span className="absolute top-6 right-6 text-xs font-mono text-white/20 group-hover:text-white/40 transition-colors duration-300">
                {biz.tag}
              </span>

              {/* Icon */}
              <div
                className="mb-6 transition-all duration-300"
                style={{ color: biz.accent }}
              >
                {biz.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-white transition-colors">
                {biz.name}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {biz.description}
              </p>

              {/* Arrow link */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300"
                style={{ color: `${biz.accent}80` }}
              >
                <span className="group-hover:text-white transition-colors duration-300" style={{ color: "inherit" }}>
                  Learn More
                </span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  style={{ color: biz.accent }}
                >
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${biz.accent}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-widest text-[#080B12] bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] hover:shadow-gold-lg hover:scale-105 transition-all duration-300"
          >
            Explore Opportunities
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

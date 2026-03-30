"use client";

import { useEffect, useRef, useState } from "react";

const businesses = [
  {
    id: 1,
    name: "NAAAS",
    subtitle: "LOGISTICS",
    description: "Global supply chain excellence",
    color: "from-[#C9A84C] to-[#E8C96A]",
    bgGradient: "from-[#0D1526] to-[#111C35]",
    icon: "✈️",
    logoVariant: "blue",
  },
  {
    id: 2,
    name: "NAAAS",
    subtitle: "EVENTS & MARKETING",
    description: "Unforgettable experiences",
    color: "from-[#C9A84C] to-[#E8C96A]",
    bgGradient: "from-[#0D1526] to-[#111C35]",
    icon: "🎪",
    logoVariant: "pink",
  },
  {
    id: 3,
    name: "MEDICAL TECH",
    subtitle: "FOR MEDICINES",
    description: "Healthcare innovation",
    color: "from-[#C9A84C] to-[#E8C96A]",
    bgGradient: "from-[#0D1526] to-[#111C35]",
    icon: "⚕️",
    logoVariant: "teal",
  },
  {
    id: 4,
    name: "NAAAS",
    subtitle: "REAL-ESTATE",
    description: "Building tomorrow's landmarks",
    color: "from-[#C9A84C] to-[#E8C96A]",
    bgGradient: "from-[#0D1526] to-[#111C35]",
    icon: "🏗️",
    logoVariant: "purple",
  },
  {
    id: 5,
    name: "NAAAS",
    subtitle: "AGRICULTURE",
    description: "Sustainable farming solutions",
    color: "from-[#C9A84C] to-[#E8C96A]",
    bgGradient: "from-[#0D1526] to-[#111C35]",
    icon: "🌱",
    logoVariant: "green",
  },
  {
    id: 6,
    name: "NAAAS",
    subtitle: "TRAVEL & HOSPITALITY",
    description: "Exceptional journeys",
    color: "from-[#C9A84C] to-[#E8C96A]",
    bgGradient: "from-[#0D1526] to-[#111C35]",
    icon: "🏨",
    logoVariant: "amber",
  },
];

// Mini logo SVG for all business cards
function BusinessLogo() {
  return (
    <svg
      width="80"
      height="50"
      viewBox="0 0 180 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-all duration-500 group-hover:scale-110"
    >
      <path
        d="M20 80 C20 80 30 50 50 40 C55 38 58 42 55 48 C52 54 44 58 44 70 C44 82 52 88 60 85"
        stroke="#C9A84C"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M60 85 C68 82 78 72 80 60 C82 50 78 44 84 40 C90 36 96 42 94 52 C92 62 84 68 84 80"
        stroke="#C9A84C"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M110 20 C110 20 106 50 108 70 C110 86 120 90 128 86 C136 82 138 70 136 58"
        stroke="#C9A84C"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="138" cy="22" r="8" fill="#CC2229" />
      <path
        d="M15 88 Q50 96 90 90 Q120 84 145 88"
        stroke="#C9A84C"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function BusinessGrid() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = Array.from(entry.target.querySelectorAll('.business-card'));
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...new Set([...prev, parseInt(card.getAttribute('data-index') || '0')])]);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="businesses" className="py-20 bg-[#080D1A] relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #C9A84C 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        {/* Section header with animations */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] text-[#C9A84C] uppercase mb-4 animate-fade-in">
            Our Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 animate-fade-in-up">
            <span className="gradient-text">Our Businesses</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] mx-auto rounded-full mb-6" />
          <p className="text-[#8A9ABB] text-lg max-w-2xl mx-auto">
            Diversified excellence across industries, united by innovation and commitment to quality
          </p>
        </div>

        {/* Premium grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((biz, index) => (
            <div
              key={biz.id}
              data-index={index}
              className={`business-card group relative rounded-2xl overflow-hidden border border-[#C9A84C]/15 hover:border-[#C9A84C]/50 hover:shadow-2xl transition-all duration-500 cursor-pointer shadow-card-dark ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {/* Card background with gradient */}
              <div className={`bg-gradient-to-br ${biz.bgGradient} h-full`}>
                {/* Top section with logo and icon */}
                <div className="relative bg-[#0D1526] p-8 flex flex-col items-center justify-center min-h-[240px] overflow-hidden">
                  {/* Animated background circles */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#C9A84C] opacity-5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-[#C9A84C] opacity-5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                  </div>

                  {/* Logo */}
                  <div className="card-image mb-4 relative z-10">
                    <BusinessLogo />
                  </div>

                  {/* Icon with animation */}
                  <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-500">
                    {biz.icon}
                  </div>

                  {/* Decorative line */}
                  <div className="w-16 h-0.5 bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] rounded-full group-hover:w-24 transition-all duration-300" />
                </div>

                {/* Bottom section with info */}
                <div className="relative p-6 bg-gradient-to-r from-[#C9A84C] to-[#E8C96A]">
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  <div className="relative z-10">
                    <p className="text-xs font-semibold tracking-widest uppercase mb-1 text-[#080D1A]/70">
                      {biz.name}
                    </p>
                    <p className="text-base font-bold tracking-wide uppercase mb-2 text-[#080D1A]">
                      {biz.subtitle}
                    </p>
                    <p className="text-sm text-[#080D1A]/70 font-light">
                      {biz.description}
                    </p>
                  </div>

                  {/* Arrow icon */}
                  <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-[#080D1A]/20 flex items-center justify-center group-hover:bg-[#080D1A]/30 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4 text-[#080D1A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Hover border glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] hover:shadow-gold hover:scale-105 text-[#080D1A] text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 rounded-full shadow-lg"
          >
            EXPLORE OPPORTUNITIES
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

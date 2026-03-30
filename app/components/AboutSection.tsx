"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const [visibleStats, setVisibleStats] = useState(false);
  const [counters, setCounters] = useState({ business: 0, years: 0, team: 0, countries: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleStats(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;

    const targets = { business: 6, years: 15, team: 500, countries: 10 };
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounters({
        business: Math.floor(targets.business * easeOut),
        years: Math.floor(targets.years * easeOut),
        team: Math.floor(targets.team * easeOut),
        countries: Math.floor(targets.countries * easeOut),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);
  };

  return (
    <section id="about" className="py-24 bg-[#0D1526] relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#C9A84C] to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#C9A84C] to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className={`inline-block text-xs font-semibold tracking-[0.3em] text-[#C9A84C] uppercase mb-4 transition-all duration-700 ${visibleStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Who We Are
          </span>
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-3 transition-all duration-700 delay-100 ${visibleStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="gradient-text">NAAAS HOLDING GROUP</span>
          </h2>
          <p className={`text-sm text-[#8A9ABB] tracking-widest uppercase mb-6 transition-all duration-700 delay-200 ${visibleStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Building & Venture BD
          </p>
          <div className={`w-24 h-1 bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] mx-auto rounded-full mb-8 transition-all duration-700 delay-300 ${visibleStats ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />

          {/* Description */}
          <div className={`max-w-3xl mx-auto transition-all duration-700 delay-400 ${visibleStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-[#C0C8DC] text-lg leading-relaxed mb-4">
              NAAAS Holding Group is a <span className="font-semibold text-[#C9A84C]">diversified conglomerate</span> operating across multiple
              high-growth sectors including logistics, real estate, agriculture, events &
              marketing, medical technology, and travel & hospitality.
            </p>
            <p className="text-[#8A9ABB] leading-relaxed">
              Committed to <span className="font-semibold text-white">innovation and excellence</span>, we build sustainable futures across the region,
              delivering exceptional value to our stakeholders and communities.
            </p>
          </div>
        </div>

        {/* Premium stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {[
            { value: counters.business, suffix: "+", label: "Business Units", color: "from-[#C9A84C] to-[#E8C96A]", delay: "delay-500" },
            { value: counters.years, suffix: "+", label: "Years of Excellence", color: "from-[#C9A84C] to-[#E8C96A]", delay: "delay-600" },
            { value: counters.team, suffix: "+", label: "Team Members", color: "from-[#C9A84C] to-[#E8C96A]", delay: "delay-700" },
            { value: counters.countries, suffix: "+", label: "Countries", color: "from-[#C9A84C] to-[#E8C96A]", delay: "delay-[800ms]" },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`group relative p-8 bg-[#111C35] border border-[#C9A84C]/15 hover:border-[#C9A84C]/40 rounded-2xl hover:shadow-2xl transition-all duration-500 shadow-card-dark ${stat.delay} ${
                visibleStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`text-5xl md:text-6xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}>
                  {stat.value}{stat.suffix}
                </div>
                <div className={`w-12 h-1 bg-gradient-to-r ${stat.color} rounded-full mb-3 group-hover:w-16 transition-all duration-300`} />
                <span className="text-xs md:text-sm font-semibold tracking-widest text-[#8A9ABB] uppercase">
                  {stat.label}
                </span>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${stat.color} opacity-10 rounded-bl-full rounded-tr-2xl`} />
            </div>
          ))}
        </div>

        {/* Core values / Mission section */}
        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-700 delay-[900ms] ${visibleStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            {
              icon: "🎯",
              title: "Our Mission",
              description: "To create sustainable value through diversified excellence and innovation across all our business ventures"
            },
            {
              icon: "💡",
              title: "Our Vision",
              description: "To be the most trusted and innovative holding group, setting benchmarks in every industry we serve"
            },
            {
              icon: "⭐",
              title: "Our Values",
              description: "Integrity, innovation, excellence, and commitment to sustainable growth and community development"
            }
          ].map((item) => (
            <div
              key={item.title}
              className="group relative p-6 bg-[#111C35] border border-[#C9A84C]/15 hover:border-[#C9A84C]/40 rounded-xl hover:shadow-lg transition-all duration-300 shadow-card-dark"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#8A9ABB] leading-relaxed text-sm">
                {item.description}
              </p>

              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#C9A84C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

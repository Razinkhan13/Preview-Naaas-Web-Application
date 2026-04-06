"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  label: string;
  suffix?: string;
};

const stats: Stat[] = [
  { value: 6, label: "Business Units", suffix: "+" },
  { value: 15, label: "Years of Excellence", suffix: "+" },
  { value: 500, label: "Team Members", suffix: "+" },
  { value: 10, label: "Countries", suffix: "+" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasAnimated) return;
    const targets = stats.map((stat) => stat.value);
    const duration = 1200;
    const start = performance.now();
    let frame = requestAnimationFrame(step);

    function step(timestamp: number) {
      const progress = Math.min((timestamp - start) / duration, 1);
      setCounts(targets.map((target) => Math.round(target * progress)));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    }

    return () => cancelAnimationFrame(frame);
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} id="about" className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <span className="text-xs font-semibold tracking-[0.3em] text-[#C9A84C] uppercase">
          Who We Are
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          NAAAS HOLDING GROUP
        </h2>
        <p className="mt-2 text-sm text-gray-500 tracking-widest uppercase">
          NAAAS Holding Group
        </p>
        <div className="mt-6 max-w-2xl mx-auto">
          <p className="text-gray-600 leading-relaxed">
            NAAAS Holding Group is a diversified conglomerate operating across multiple
            high-growth sectors including logistics, real estate, agriculture, events &
            marketing, medical technology, and travel & hospitality. Committed to innovation
            and excellence, we build sustainable futures across the region.
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

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-4xl font-extrabold text-[#C9A84C]">
                {counts[idx]}
                {stat.suffix}
              </span>
              <span className="mt-1 text-xs font-semibold tracking-widest text-gray-500 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  "Logistics",
  "Real Estate",
  "Agriculture",
  "Events",
  "Medical Tech",
  "Hospitality",
  "Innovation",
  "Excellence",
];

export default function Marquee() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!track1Ref.current || !track2Ref.current || !sectionRef.current) return;

    // Speed up marquee on scroll
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          const speedFactor = Math.min(Math.abs(velocity) / 1000, 3);

          if (track1Ref.current) {
            track1Ref.current.style.animationDuration = `${Math.max(10, 30 - speedFactor * 8)}s`;
          }
          if (track2Ref.current) {
            track2Ref.current.style.animationDuration = `${Math.max(12, 35 - speedFactor * 8)}s`;
          }
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const renderItems = (separator: string) => (
    <>
      {[...items, ...items].map((item, i) => (
        <span key={i} className="flex items-center gap-8 flex-shrink-0">
          <span className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white/[0.04] hover:text-white/[0.08] transition-colors duration-500 whitespace-nowrap select-none">
            {item}
          </span>
          <span className="text-[#C9A84C]/20 text-2xl">{separator}</span>
        </span>
      ))}
    </>
  );

  return (
    <div ref={sectionRef} className="relative py-16 md:py-24 bg-[#080B12] overflow-hidden">
      {/* Top/bottom subtle lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      {/* Track 1 - left to right */}
      <div className="overflow-hidden mb-6">
        <div ref={track1Ref} className="marquee-track">
          {renderItems("/")}
        </div>
      </div>

      {/* Track 2 - right to left */}
      <div className="overflow-hidden">
        <div ref={track2Ref} className="marquee-track-reverse">
          {renderItems("*")}
        </div>
      </div>
    </div>
  );
}

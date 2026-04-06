"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
          onComplete,
        });
      },
    });

    // Counter animation
    const counter = { val: 0 };
    tl.to(counter, {
      val: 100,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => setCount(Math.floor(counter.val)),
    }, 0);

    // Text reveal - animate each character
    const chars = textRef.current?.querySelectorAll(".char");
    if (chars) {
      tl.to(chars, {
        y: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",
      }, 0.2);
    }

    // Line expand
    tl.to(lineRef.current, {
      width: "200px",
      duration: 1.5,
      ease: "power2.inOut",
    }, 0.3);

    // Hold
    tl.to({}, { duration: 0.3 });

    // Fade out text
    if (chars) {
      tl.to(chars, {
        y: -120,
        duration: 0.5,
        stagger: 0.02,
        ease: "power3.in",
      });
    }

    return () => { tl.kill(); };
  }, [onComplete]);

  const text = "NAAAS";

  return (
    <div ref={containerRef} className="preloader">
      {/* Counter */}
      <div className="absolute top-8 right-8">
        <span
          ref={counterRef}
          className="text-sm font-mono text-white/30 tracking-widest"
        >
          {String(count).padStart(3, "0")}
        </span>
      </div>

      {/* Brand text */}
      <div ref={textRef} className="preloader-text gradient-text">
        {text.split("").map((char, i) => (
          <span key={i} className="char">
            {char}
          </span>
        ))}
      </div>

      {/* Expanding line */}
      <div ref={lineRef} className="preloader-line" />

      {/* Subtitle */}
      <p className="text-white/20 text-xs tracking-[0.4em] uppercase mt-4 animate-fade-in" style={{ animationDelay: "0.8s", animationFillMode: "both" }}>
        Holding Group
      </p>
    </div>
  );
}

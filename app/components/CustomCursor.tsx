"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on devices with a fine pointer (mouse)
    if (typeof window === "undefined") return;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    dot.style.display = "block";
    outline.style.display = "block";

    const moveCursor = (e: MouseEvent) => {
      gsap.to(dot, {
        x: e.clientX - 4,
        y: e.clientY - 4,
        duration: 0.1,
        ease: "power2.out",
      });
      gsap.to(outline, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleHoverEnter = () => {
      outline.classList.add("hovering");
      gsap.to(dot, { scale: 0, duration: 0.2 });
    };

    const handleHoverLeave = () => {
      outline.classList.remove("hovering");
      gsap.to(dot, { scale: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", moveCursor);

    // Watch for interactive elements
    const observer = new MutationObserver(() => {
      const interactives = document.querySelectorAll("a, button, [data-cursor-hover]");
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverEnter);
        el.removeEventListener("mouseleave", handleHoverLeave);
        el.addEventListener("mouseenter", handleHoverEnter);
        el.addEventListener("mouseleave", handleHoverLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initial setup
    const interactives = document.querySelectorAll("a, button, [data-cursor-hover]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverEnter);
      el.addEventListener("mouseleave", handleHoverLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ display: "none" }} />
      <div ref={outlineRef} className="cursor-outline" style={{ display: "none" }} />
    </>
  );
}

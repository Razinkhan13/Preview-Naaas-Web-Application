"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Our Businesses", href: "#businesses" },
  { label: "Contact Us", href: "#contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // GSAP animations
  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    const tl = gsap.timeline();

    // Background reveal
    tl.fromTo(containerRef.current, {
      clipPath: "circle(0% at 0% 0%)",
    }, {
      clipPath: "circle(150% at 0% 0%)",
      duration: 0.6,
      ease: "power3.inOut",
    });

    // Stagger nav links
    if (linksRef.current) {
      tl.from(linksRef.current.querySelectorAll(".nav-link"), {
        x: -80,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
      }, "-=0.2");
    }

    // Social links
    if (socialRef.current) {
      tl.from(socialRef.current.children, {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power3.out",
      }, "-=0.2");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[60] bg-[#080B12] flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 h-[var(--navbar-height)] border-b border-white/8">
        <span className="text-xl font-bold gradient-text tracking-wider font-display">NAAAS</span>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="w-11 h-11 rounded-full border border-white/12 flex items-center justify-center text-white/60 hover:text-white hover:border-[#C9A84C]/50 transition-all duration-300"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Nav links */}
      <nav ref={linksRef} className="flex-1 flex flex-col justify-center px-8 gap-1">
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="nav-link group flex items-center gap-5 py-5 border-b border-white/5 hover:border-[#C9A84C]/25 transition-all duration-[400ms]"
          >
            <span className="text-xs font-mono text-[#C9A84C]/30 group-hover:text-[#C9A84C]/60 transition-colors">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="w-0 h-px bg-[#C9A84C]/60 group-hover:w-8 transition-all duration-500" />
            <span className="text-3xl font-light text-white/60 group-hover:text-white tracking-wide transition-all duration-[400ms] font-display">
              {link.label}
            </span>
          </a>
        ))}
      </nav>

      {/* Social + footer */}
      <div ref={socialRef} className="px-8 py-8 border-t border-white/8">
        <p className="text-[10px] text-white/25 uppercase tracking-[0.3em] mb-4">Follow Us</p>
        <div className="flex items-center gap-4">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#C9A84C] hover:border-[#C9A84C]/50 transition-all duration-300"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

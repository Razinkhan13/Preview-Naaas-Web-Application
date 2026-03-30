"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Businesses", href: "#businesses" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Animate navbar in on mount
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 2.8, // After preloader
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 40);

      // Hide/show on scroll direction
      if (currentScroll > lastScroll.current && currentScroll > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#080B12]/85 backdrop-blur-2xl shadow-[0_1px_0_rgba(201,168,76,0.15)]"
            : "bg-transparent"
        } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
        style={{ height: "var(--navbar-height)" }}
      >
        <div className="max-w-screen-xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Hamburger - mobile */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex flex-col gap-[6px] p-2 md:hidden group"
          >
            <span className="block w-6 h-[1.5px] bg-[#C9A84C] rounded-full transition-all duration-300 group-hover:w-4" />
            <span className="block w-4 h-[1.5px] bg-[#C9A84C] rounded-full transition-all duration-300 group-hover:w-6" />
            <span className="block w-6 h-[1.5px] bg-[#C9A84C] rounded-full transition-all duration-300 group-hover:w-4" />
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <a href="#" className="block">
              <Image
                src="/naaas-logo.svg"
                alt="NAAAS Holding Group"
                width={160}
                height={50}
                priority
                className={`transition-all duration-500 ${scrolled ? "h-9 w-auto" : "h-12 w-auto"}`}
              />
            </a>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-[13px] font-medium text-white/60 hover:text-white transition-colors duration-300 tracking-wide uppercase group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] group-hover:w-full transition-all duration-500 ease-out" />
              </a>
            ))}
            <a
              href="#contact"
              className="magnetic-btn px-6 py-2.5 text-[13px] font-semibold tracking-wider uppercase border border-[#C9A84C]/50 text-[#C9A84C] rounded-full hover:bg-[#C9A84C] hover:text-[#080B12] transition-all duration-[400ms] hover:shadow-[0_8px_32px_rgba(201,168,76,0.25)] overflow-hidden"
            >
              <span className="btn-fill" />
              <span className="btn-text">Get In Touch</span>
            </a>
          </nav>

          {/* Spacer for mobile centering */}
          <div className="w-10 md:hidden" />
        </div>

        {/* Bottom line animation */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
        )}
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

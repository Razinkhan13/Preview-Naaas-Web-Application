"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#080D1A]/95 backdrop-blur-md shadow-lg border-b border-[#C9A84C]/20"
            : "bg-[#080D1A] border-b border-[#C9A84C]/10"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 h-[var(--navbar-height)] flex items-center justify-between">
          {/* Hamburger menu */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex flex-col gap-1.5 p-2 hover:opacity-70 transition-all duration-300 group"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} className="block w-6 h-0.5 bg-[#C9A84C] transition-all duration-300" />
            ))}
          </button>

          {/* Centered Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center select-none">
            <Image
              src="/naaas-logo.svg"
              alt="NAAAS Holding Venture BD Ltd logo"
              width={240}
              height={240}
              priority
              className={`h-14 w-auto transition-all duration-300 ${scrolled ? 'h-12' : ''}`}
            />
          </div>

          {/* Desktop navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#8A9ABB]">
            <a
              href="#about"
              className="relative hover:text-[#C9A84C] transition-colors duration-300 group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#businesses"
              className="relative hover:text-[#C9A84C] transition-colors duration-300 group"
            >
              Our Businesses
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] text-[#080D1A] rounded-full hover:shadow-gold hover:scale-105 transition-all duration-300 font-semibold"
            >
              Contact
            </a>
          </nav>

          {/* Spacer for symmetry on mobile */}
          <div className="w-10 md:hidden" />
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

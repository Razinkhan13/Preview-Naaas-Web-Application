"use client";

import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md"
            : "bg-white dark:bg-gray-900"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
          {/* Hamburger */}
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="flex flex-col gap-1.5 p-2 group"
          >
            <span className="block w-6 h-0.5 bg-gray-900 dark:bg-white transition-all group-hover:w-8" />
            <span className="block w-6 h-0.5 bg-gray-900 dark:bg-white transition-all group-hover:w-8" />
            <span className="block w-6 h-0.5 bg-gray-900 dark:bg-white transition-all group-hover:w-8" />
          </button>

          {/* Logo */}
          <a href="#" className="flex flex-col items-center select-none">
            {/* SVG Logo inspired by NAAAS Holding Group calligraphic style */}
            <div className="flex items-center gap-2">
              <svg
                width="52"
                height="48"
                viewBox="0 0 52 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="NAAAS Logo"
              >
                {/* Main calligraphic shape */}
                <path
                  d="M8 36 C8 36 4 28 6 20 C8 12 14 10 14 10 C14 10 12 18 16 22 C20 26 26 24 26 24"
                  stroke="#9A7C3A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M26 24 C26 24 30 22 34 18 C38 14 40 8 40 8"
                  stroke="#9A7C3A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M40 8 C40 8 44 12 44 20 C44 28 38 34 32 36"
                  stroke="#9A7C3A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M8 36 C8 36 16 38 24 38 C32 38 40 36 40 36"
                  stroke="#9A7C3A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Red dot */}
                <circle cx="26" cy="10" r="3" fill="#DC2626" />
                {/* Decorative dots */}
                <circle cx="14" cy="32" r="1.5" fill="#9A7C3A" />
                <circle cx="38" cy="32" r="1.5" fill="#9A7C3A" />
              </svg>
            </div>
            <div className="text-center leading-none mt-0.5">
              <div className="text-[8px] tracking-widest font-medium text-[#9A7C3A] dark:text-[#C8A951] font-serif">
                مجموعة ناس القابضة
              </div>
              <div className="text-[8px] tracking-[0.2em] font-bold text-[#9A7C3A] dark:text-[#C8A951] uppercase mt-0.5">
                NAAAS HOLDING GROUP
              </div>
            </div>
          </a>

          {/* Spacer to balance hamburger */}
          <div className="w-10" />
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

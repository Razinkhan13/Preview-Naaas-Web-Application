"use client";

import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 h-[var(--navbar-height)] flex items-center justify-between">
          {/* Hamburger menu */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex flex-col gap-1.5 p-2 hover:opacity-70 transition-opacity"
          >
            <span className="block w-6 h-0.5 bg-gray-800" />
            <span className="block w-6 h-0.5 bg-gray-800" />
            <span className="block w-6 h-0.5 bg-gray-800" />
          </button>

          {/* Centered Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center select-none">
            {/* Arabic-style logo mark using SVG */}
            <svg
              width="72"
              height="44"
              viewBox="0 0 180 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Naaas Holding Group logo mark"
            >
              {/* Left calligraphic stroke */}
              <path
                d="M20 80 C20 80 30 50 50 40 C55 38 58 42 55 48 C52 54 44 58 44 70 C44 82 52 88 60 85"
                stroke="#C9A84C"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
              {/* Middle calligraphic stroke */}
              <path
                d="M60 85 C68 82 78 72 80 60 C82 50 78 44 84 40 C90 36 96 42 94 52 C92 62 84 68 84 80"
                stroke="#C9A84C"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
              {/* Right tall stroke */}
              <path
                d="M110 20 C110 20 106 50 108 70 C110 86 120 90 128 86 C136 82 138 70 136 58"
                stroke="#C9A84C"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
              {/* Red dot accent */}
              <circle cx="138" cy="22" r="7" fill="#CC2229" />
              {/* Connecting base line */}
              <path
                d="M15 88 Q50 96 90 90 Q120 84 145 88"
                stroke="#C9A84C"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <p className="text-[9px] tracking-widest text-[#C9A84C] font-semibold mt-0.5 leading-tight text-center">
              مجموعة ناس القابضة
            </p>
            <p className="text-[9px] tracking-[0.2em] text-[#8B7232] font-bold uppercase leading-tight">
              NAAAS HOLDING GROUP
            </p>
          </div>

          {/* Desktop navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#about" className="hover:text-[#C9A84C] transition-colors">About</a>
            <a href="#businesses" className="hover:text-[#C9A84C] transition-colors">Our Businesses</a>
            <a href="#contact" className="hover:text-[#C9A84C] transition-colors">Contact</a>
          </nav>

          {/* Spacer for symmetry on mobile */}
          <div className="w-10 md:hidden" />
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

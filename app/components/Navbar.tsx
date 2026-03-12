"use client";

import { useState } from "react";
import Image from "next/image";
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
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center select-none">
            <Image
              src="/naaas-logo.svg"
              alt="NAAAS Holding Venture BD Ltd logo"
              width={240}
              height={240}
              priority
              className="h-14 w-auto"
            />
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

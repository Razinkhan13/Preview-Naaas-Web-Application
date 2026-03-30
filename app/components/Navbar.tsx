"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#080B12]/90 backdrop-blur-xl shadow-[0_1px_0_rgba(201,168,76,0.2)]"
            : "bg-transparent"
        }`}
        style={{ height: "var(--navbar-height)" }}
      >
        <div className="max-w-screen-xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Hamburger — mobile */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex flex-col gap-[5px] p-2 md:hidden group"
          >
            <span className="block w-6 h-0.5 bg-[#C9A84C] rounded-full transition-all duration-300" />
            <span className="block w-4 h-0.5 bg-[#C9A84C] rounded-full transition-all duration-300" />
            <span className="block w-6 h-0.5 bg-[#C9A84C] rounded-full transition-all duration-300" />
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <Image
              src="/naaas-logo.svg"
              alt="NAAAS Holding Group"
              width={160}
              height={50}
              priority
              className={`h-12 w-auto transition-all duration-300 ${scrolled ? "h-10" : ""}`}
            />
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] group-hover:w-full transition-all duration-400" />
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 text-sm font-semibold border border-[#C9A84C]/60 text-[#C9A84C] rounded-full hover:bg-[#C9A84C] hover:text-[#080B12] transition-all duration-300 hover:shadow-gold"
            >
              Get In Touch
            </a>
          </nav>

          {/* Spacer for mobile centering */}
          <div className="w-10 md:hidden" />
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

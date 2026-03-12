"use client";

import { useEffect } from "react";
import { navLinks } from "@/data/businesses";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-white dark:bg-gray-900 flex flex-col transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      {/* Close button */}
      <div className="flex items-start justify-start px-6 pt-6 pb-4">
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="text-gray-900 dark:text-white hover:text-[#9A7C3A] transition-colors"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4L24 24M24 4L4 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 py-6">
        {/* Facebook */}
        <a href="#" aria-label="Facebook" className="text-gray-700 dark:text-gray-300 hover:text-[#9A7C3A] transition-colors">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
        </a>
        {/* Twitter/X */}
        <a href="#" aria-label="Twitter" className="text-gray-700 dark:text-gray-300 hover:text-[#9A7C3A] transition-colors">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        {/* LinkedIn */}
        <a href="#" aria-label="LinkedIn" className="text-gray-700 dark:text-gray-300 hover:text-[#9A7C3A] transition-colors">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        {/* YouTube */}
        <a href="#" aria-label="YouTube" className="text-gray-700 dark:text-gray-300 hover:text-[#9A7C3A] transition-colors">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
        </a>
        {/* Instagram */}
        <a href="#" aria-label="Instagram" className="text-gray-700 dark:text-gray-300 hover:text-[#9A7C3A] transition-colors">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 flex flex-col justify-center px-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="text-center text-2xl font-light text-gray-900 dark:text-white py-5 border-b border-gray-200 dark:border-gray-700 hover:text-[#9A7C3A] dark:hover:text-[#C8A951] transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

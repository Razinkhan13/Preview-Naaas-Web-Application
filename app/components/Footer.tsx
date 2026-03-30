import Image from "next/image";

const footerLinks = {
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Businesses", href: "#businesses" },
    { label: "Leadership", href: "#leadership" },
    { label: "Careers", href: "#career" },
  ],
  Businesses: [
    { label: "Logistics", href: "#businesses" },
    { label: "Events & Marketing", href: "#businesses" },
    { label: "Medical Tech", href: "#businesses" },
    { label: "Real Estate", href: "#businesses" },
    { label: "Agriculture", href: "#businesses" },
    { label: "Travel & Hospitality", href: "#businesses" },
  ],
  Resources: [
    { label: "News & Media", href: "#media" },
    { label: "Press Releases", href: "#press" },
    { label: "Contact Us", href: "#contact" },
    { label: "Privacy Policy", href: "#privacy" },
  ],
};

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-[#060810] overflow-hidden">
      {/* Top divider */}
      <div className="divider-gold" />

      {/* Main content */}
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/naaas-logo.svg"
              alt="NAAAS Holding Group"
              width={140}
              height={45}
              className="h-10 w-auto mb-4"
            />
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Building the future through diversified excellence across logistics,
              real estate, agriculture, and more.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#C9A84C] hover:border-[#C9A84C]/40 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/35 hover:text-[#C9A84C] text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="divider-gold mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <p>
            © {year}{" "}
            <span className="text-[#C9A84C]/70 font-semibold">NAAAS Holding Group</span>
            . All rights reserved.
          </p>
          <p>Building & Venture BD Ltd.</p>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />
    </footer>
  );
}

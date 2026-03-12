const businesses = [
  {
    id: 1,
    name: "NAAAS",
    subtitle: "LOGISTICS",
    color: "from-amber-400 to-yellow-600",
    icon: "✈",
    logoVariant: "gold",
  },
  {
    id: 2,
    name: "NAAAS",
    subtitle: "EVENTS & MARKETING",
    color: "from-amber-400 to-yellow-600",
    icon: "🎪",
    logoVariant: "blue",
  },
  {
    id: 3,
    name: "MEDICAL TECH",
    subtitle: "FOR MEDICINES",
    color: "from-amber-400 to-yellow-600",
    icon: "⚕",
    logoVariant: "teal",
  },
  {
    id: 4,
    name: "NAAAS",
    subtitle: "REAL-ESTATE",
    color: "from-amber-400 to-yellow-600",
    icon: "🏗",
    logoVariant: "gold",
  },
  {
    id: 5,
    name: "NAAAS",
    subtitle: "AGRICULTURE",
    color: "from-amber-400 to-yellow-600",
    icon: "🌱",
    logoVariant: "green",
  },
  {
    id: 6,
    name: "NAAAS",
    subtitle: "TRAVEL & HOSPITALITY",
    color: "from-amber-400 to-yellow-600",
    icon: "🏨",
    logoVariant: "purple",
  },
];

// Mini logo SVG variants
function BusinessLogo({ variant }: { variant: string }) {
  const strokeColor =
    variant === "gold"
      ? "#C9A84C"
      : variant === "blue"
      ? "#1E40AF"
      : variant === "teal"
      ? "#0D9488"
      : variant === "green"
      ? "#16A34A"
      : variant === "purple"
      ? "#7C3AED"
      : "#C9A84C";

  return (
    <svg
      width="64"
      height="40"
      viewBox="0 0 180 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 80 C20 80 30 50 50 40 C55 38 58 42 55 48 C52 54 44 58 44 70 C44 82 52 88 60 85"
        stroke={strokeColor}
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M60 85 C68 82 78 72 80 60 C82 50 78 44 84 40 C90 36 96 42 94 52 C92 62 84 68 84 80"
        stroke={strokeColor}
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M110 20 C110 20 106 50 108 70 C110 86 120 90 128 86 C136 82 138 70 136 58"
        stroke={strokeColor}
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="138" cy="22" r="8" fill="#CC2229" />
      <path
        d="M15 88 Q50 96 90 90 Q120 84 145 88"
        stroke={strokeColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function BusinessGrid() {
  return (
    <section id="businesses" className="py-10 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-center text-xs font-semibold tracking-[0.3em] text-[#C9A84C] uppercase mb-6">
          Our Businesses
        </h2>

        {/* Scrollable row on mobile, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:gap-6 snap-x snap-mandatory">
          {businesses.map((biz) => (
            <div
              key={biz.id}
              className="business-card flex-shrink-0 w-52 md:w-auto snap-start rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300 cursor-pointer group"
            >
              {/* White top area with logo */}
              <div className="bg-white flex items-center justify-center h-32 overflow-hidden">
                <div className="card-image transition-transform duration-300 group-hover:scale-105">
                  <BusinessLogo variant={biz.logoVariant} />
                </div>
              </div>

              {/* Golden bottom label */}
              <div className={`bg-gradient-to-r ${biz.color} px-4 py-3`}>
                <p className="text-white text-xs font-semibold tracking-widest uppercase leading-tight">
                  {biz.name}
                </p>
                <p className="text-white text-sm font-bold tracking-wide uppercase leading-tight">
                  {biz.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

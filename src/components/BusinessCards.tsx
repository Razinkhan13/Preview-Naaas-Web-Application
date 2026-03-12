"use client";

import { businesses } from "@/data/businesses";

// Small inline logo for NAAAS cards
function NaaasLogo({ color = "#9A7C3A" }: { color?: string }) {
  return (
    <svg width="80" height="70" viewBox="0 0 52 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 36 C8 36 4 28 6 20 C8 12 14 10 14 10 C14 10 12 18 16 22 C20 26 26 24 26 24" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M26 24 C26 24 30 22 34 18 C38 14 40 8 40 8" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M40 8 C40 8 44 12 44 20 C44 28 38 34 32 36" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M8 36 C8 36 16 38 24 38 C32 38 40 36 40 36" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"/>
      <circle cx="26" cy="10" r="3" fill="#DC2626"/>
      <circle cx="14" cy="32" r="1.5" fill={color}/>
      <circle cx="38" cy="32" r="1.5" fill={color}/>
    </svg>
  );
}

// Medical Tech logo placeholder
function MedicalLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-[#2563EB] flex items-center justify-center text-white font-bold text-lg rounded-sm">M</div>
      <div className="text-[#2563EB] font-bold text-sm leading-tight">
        <div>MEDICAL</div>
        <div>TECH</div>
      </div>
    </div>
  );
}

export default function BusinessCards() {
  return (
    <section id="businesses" className="py-8 bg-white dark:bg-gray-900">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-0 px-0 min-w-max md:grid md:grid-cols-3 lg:grid-cols-6 md:min-w-0 md:px-0">
          {businesses.map((business) => (
            <a
              key={business.id}
              href="#"
              className="flex-shrink-0 w-48 md:w-auto flex flex-col group cursor-pointer"
            >
              {/* Card white area with logo */}
              <div className="bg-white dark:bg-gray-800 flex items-center justify-center h-36 md:h-40 border border-gray-100 dark:border-gray-700 group-hover:shadow-lg transition-shadow">
                {business.subtitle === "FOR MEDICINES" ? (
                  <MedicalLogo />
                ) : (
                  <NaaasLogo color={business.color} />
                )}
              </div>

              {/* Golden label band */}
              <div
                className="px-3 py-3 text-white"
                style={{ backgroundColor: "#C8A951" }}
              >
                <div className="text-xs font-bold tracking-wider">{business.name}</div>
                <div className="text-xs font-black tracking-wider leading-tight">{business.subtitle}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

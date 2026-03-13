export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <span className="text-xs font-semibold tracking-[0.3em] text-[#C9A84C] uppercase">
          Who We Are
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          NAAAS HOLDING GROUP
        </h2>
        <p className="mt-2 text-sm text-gray-500 tracking-widest uppercase">
          NAAAS Holding Group
        </p>
        <div className="mt-6 max-w-2xl mx-auto">
          <p className="text-gray-600 leading-relaxed">
            NAAAS Holding Group is a diversified conglomerate operating across multiple
            high-growth sectors including logistics, real estate, agriculture, events &
            marketing, medical technology, and travel & hospitality. Committed to innovation
            and excellence, we build sustainable futures across the region.
          </p>
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "6+", label: "Business Units" },
            { value: "15+", label: "Years of Excellence" },
            { value: "500+", label: "Team Members" },
            { value: "10+", label: "Countries" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-4xl font-extrabold text-[#C9A84C]">{stat.value}</span>
              <span className="mt-1 text-xs font-semibold tracking-widest text-gray-500 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

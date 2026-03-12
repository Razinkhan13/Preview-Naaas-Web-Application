export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 tracking-wide uppercase">
          About Us
        </h2>
        <div className="w-16 h-0.5 bg-[#C8A951] mx-auto mb-8" />
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-lg">
          NAAAS Holding Group is a diversified conglomerate with a presence across multiple industries,
          including logistics, events &amp; marketing, real estate, agriculture, medical technology, and travel &amp; hospitality.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
          Founded with a vision to drive innovation and excellence across the Arab world and beyond,
          we are committed to creating sustainable value for our partners, communities, and stakeholders.
        </p>
      </div>

      {/* Stats */}
      <div className="max-w-5xl mx-auto mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { value: "20+", label: "Years of Excellence" },
          { value: "6+", label: "Business Sectors" },
          { value: "500+", label: "Team Members" },
          { value: "15+", label: "Countries Served" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="text-center p-6 bg-white dark:bg-gray-900 rounded-sm shadow-sm border-t-4 border-[#C8A951]"
          >
            <div className="text-4xl font-black text-[#C8A951] mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium tracking-wider uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

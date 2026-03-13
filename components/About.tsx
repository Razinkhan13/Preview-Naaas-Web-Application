import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-900"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-neutral-400 dark:text-neutral-500 mb-4">
            Our Story
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight">
            Fashion that speaks for itself.
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5">
            Naaas was born from a simple belief — clothing should empower, not define. We design pieces that blend timeless craftsmanship with modern sensibility, made for the way you actually live.
          </p>
          <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8">
            Based in Bangladesh, crafted with care. Every stitch tells a story of local artisanship meeting global aesthetics.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-10">
            {[
              { value: "500+", label: "Styles" },
              { value: "10K+", label: "Happy Customers" },
              { value: "100%", label: "Locally Made" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-bold text-neutral-900 dark:text-white">{value}</p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1 uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual block */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden aspect-square bg-neutral-200 dark:bg-neutral-700 relative">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
                alt="Brand lifestyle 1"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square bg-neutral-200 dark:bg-neutral-700 mt-8 relative">
              <Image
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80"
                alt="Brand lifestyle 2"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
          {/* Decorative */}
          <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-neutral-100 dark:bg-neutral-800 -z-10" />
        </div>
      </div>
    </section>
  );
}

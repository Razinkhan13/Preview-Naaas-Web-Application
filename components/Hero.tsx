import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-50 dark:bg-neutral-900"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 60px)",
          }}
        />
      </div>

      {/* Decorative circle */}
      <div className="absolute right-[-10%] top-[-10%] w-[600px] h-[600px] rounded-full bg-neutral-200 dark:bg-neutral-800 opacity-40 blur-3xl" />
      <div className="absolute left-[-5%] bottom-[10%] w-[400px] h-[400px] rounded-full bg-neutral-300 dark:bg-neutral-700 opacity-30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <p className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400 mb-6 border border-neutral-300 dark:border-neutral-600 px-4 py-1.5 rounded-full">
          New Collection — Spring 2025
        </p>

        {/* Headline */}
        <h1 className="text-6xl sm:text-8xl font-bold tracking-tight text-neutral-900 dark:text-white leading-none mb-6">
          Live in
          <span className="block italic font-light text-neutral-500 dark:text-neutral-400">
            Style.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="max-w-lg mx-auto text-base sm:text-lg text-neutral-500 dark:text-neutral-400 mb-10 leading-relaxed">
          Discover curated fashion for the modern soul. Minimal by design, expressive by nature.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#shop"
            className="inline-flex items-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide uppercase hover:bg-neutral-700 dark:hover:bg-neutral-100 transition-colors"
          >
            Shop Now
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center gap-2 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide uppercase hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            Our Story
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400 dark:text-neutral-600">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-neutral-300 dark:bg-neutral-700 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 tracking-wide uppercase">
          Contact Us
        </h2>
        <div className="w-16 h-0.5 bg-[#C8A951] mx-auto mb-8" />
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Get in touch with our team. We&apos;d love to hear from you.
        </p>

        <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#C8A951] transition-colors"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#C8A951] transition-colors"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#C8A951] transition-colors"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#C8A951] transition-colors resize-none"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-10 py-3 bg-[#C8A951] hover:bg-[#9A7C3A] text-white font-bold tracking-widest uppercase text-sm transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

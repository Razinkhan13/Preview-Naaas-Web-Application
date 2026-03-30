"use client";

import { useState } from "react";

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "info@naaasholdinggroup.com",
    href: "mailto:info@naaasholdinggroup.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+880 123 456 789",
    href: "tel:+880123456789",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Address",
    value: "Dhaka, Bangladesh",
    href: "#",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#080B12] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px divider-gold" />

      {/* Background radial */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A84C, transparent)" }}
      />

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#C9A84C] uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <div className="divider-gold w-40 mx-auto mb-6" />
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Ready to explore opportunities? Connect with us and let&apos;s create value together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Form — 3 cols */}
          <div className="lg:col-span-3 bg-[#0D1220] rounded-2xl p-8 md:p-10 hover-gold-border transition-all duration-500">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#C9A84C]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/50 text-sm">We&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-white/40">
                      Your Name *
                    </label>
                    <input
                      type="text" id="name" name="name"
                      value={formData.name} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-lg bg-[#080B12] border border-white/8 text-white placeholder-white/20 focus:border-[#C9A84C]/60 focus:outline-none transition-colors duration-300 text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-white/40">
                      Email Address *
                    </label>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange} required
                      className="w-full px-4 py-3 rounded-lg bg-[#080B12] border border-white/8 text-white placeholder-white/20 focus:border-[#C9A84C]/60 focus:outline-none transition-colors duration-300 text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="text-xs font-semibold uppercase tracking-widest text-white/40">
                    Company / Organization
                  </label>
                  <input
                    type="text" id="company" name="company"
                    value={formData.company} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#080B12] border border-white/8 text-white placeholder-white/20 focus:border-[#C9A84C]/60 focus:outline-none transition-colors duration-300 text-sm"
                    placeholder="Your Company Ltd."
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-white/40">
                    Your Message *
                  </label>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleChange} required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-[#080B12] border border-white/8 text-white placeholder-white/20 focus:border-[#C9A84C]/60 focus:outline-none transition-colors duration-300 resize-none text-sm"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full py-4 rounded-lg bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] text-[#080B12] font-bold text-sm uppercase tracking-widest hover:shadow-gold-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Info — 2 cols */}
          <div className="lg:col-span-2 space-y-5">
            {/* Contact info cards */}
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="group flex items-center gap-4 p-5 rounded-xl bg-[#0D1220] hover-gold-border transition-all duration-300 block"
              >
                <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] flex-shrink-0 group-hover:bg-[#C9A84C]/20 transition-colors duration-300">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-0.5">
                    {info.label}
                  </p>
                  <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}

            {/* CTA card */}
            <div className="relative p-6 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C] to-[#A8892A]" />
              <div className="absolute inset-0 bg-careers-pattern opacity-30" />
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-[#080B12] mb-2">Join Our Team</h3>
                <p className="text-[#080B12]/70 text-sm mb-4">
                  Explore exciting career opportunities across our diverse business units.
                </p>
                <a
                  href="#career"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#080B12] text-[#C9A84C] rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#0D1220] transition-colors duration-300"
                >
                  View Careers
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

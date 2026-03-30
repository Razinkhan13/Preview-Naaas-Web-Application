"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "info@naaasholdinggroup.com",
    href: "mailto:info@naaasholdinggroup.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+880 123 456 789",
    href: "tel:+880123456789",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
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
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current.querySelectorAll("[data-reveal]"), {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      if (formRef.current) {
        gsap.from(formRef.current, {
          x: -60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }

      if (infoRef.current) {
        gsap.from(infoRef.current.children, {
          x: 60,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClasses = (field: string) =>
    `w-full px-5 py-4 rounded-xl bg-[#080B12] border text-white placeholder-white/15 focus:outline-none transition-all duration-500 text-sm ${
      focusedField === field
        ? "border-[#C9A84C]/60 shadow-[0_0_20px_rgba(201,168,76,0.1)]"
        : "border-white/8 hover:border-white/15"
    }`;

  return (
    <section id="contact" ref={sectionRef} className="relative py-28 md:py-36 bg-[#080B12] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px divider-gold" />

      {/* Background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[150px] opacity-[0.03] pointer-events-none bg-[#C9A84C]" />

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <p data-reveal className="text-xs font-semibold tracking-[0.3em] text-[#C9A84C] uppercase mb-4">
            Get In Touch
          </p>
          <h2 data-reveal className="font-display font-bold section-title text-white mb-4">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <div data-reveal className="divider-gold w-48 mx-auto mb-8" />
          <p data-reveal className="text-white/40 text-lg max-w-xl mx-auto leading-relaxed">
            Ready to explore opportunities? Connect with us and let&apos;s create value together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Form */}
          <div ref={formRef} className="lg:col-span-3 bg-[#0D1220] rounded-2xl p-8 md:p-10 hover-gold-border transition-all duration-500">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/25 flex items-center justify-center mb-6 animate-scale-in">
                  <svg className="w-10 h-10 text-[#C9A84C]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-white/40 text-sm">We&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
                      Your Name *
                    </label>
                    <input
                      type="text" id="name" name="name"
                      value={formData.name} onChange={handleChange} required
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses("name")}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
                      Email Address *
                    </label>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange} required
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses("email")}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
                    Company / Organization
                  </label>
                  <input
                    type="text" id="company" name="company"
                    value={formData.company} onChange={handleChange}
                    onFocus={() => setFocusedField("company")}
                    onBlur={() => setFocusedField(null)}
                    className={inputClasses("company")}
                    placeholder="Your Company Ltd."
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
                    Your Message *
                  </label>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleChange} required
                    rows={5}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={`${inputClasses("message")} resize-none`}
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
                <button
                  type="submit"
                  className="magnetic-btn group w-full py-4 rounded-xl bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] text-[#080B12] font-bold text-sm uppercase tracking-[0.15em] hover:shadow-[0_16px_48px_rgba(201,168,76,0.35)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
                >
                  Send Message
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1.5 duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div ref={infoRef} className="lg:col-span-2 space-y-5">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="group flex items-center gap-5 p-5 rounded-xl bg-[#0D1220] hover-gold-border transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/8 border border-[#C9A84C]/15 flex items-center justify-center text-[#C9A84C] flex-shrink-0 group-hover:bg-[#C9A84C]/15 group-hover:scale-110 transition-all duration-500">
                  {info.icon}
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/25 mb-1">
                    {info.label}
                  </p>
                  <p className="text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-300">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}

            {/* CTA card */}
            <div className="relative p-8 rounded-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C] to-[#A8892A] transition-all duration-500" />
              <div className="absolute inset-0 bg-careers-pattern opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[#080B12] mb-3">Join Our Team</h3>
                <p className="text-[#080B12]/60 text-sm mb-5 leading-relaxed">
                  Explore exciting career opportunities across our diverse business units.
                </p>
                <a
                  href="#career"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#080B12] text-[#C9A84C] rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#0D1220] transition-all duration-300 hover:scale-105"
                >
                  View Careers
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
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

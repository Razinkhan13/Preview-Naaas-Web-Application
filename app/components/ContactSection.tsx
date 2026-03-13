"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-[#C9A84C] to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tl from-[#C9A84C] to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] text-[#C9A84C] uppercase mb-4 animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 animate-fade-in-up">
            <span className="gradient-text">Let's Work Together</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to explore opportunities? Connect with us to discuss how we can create value together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label
                  htmlFor="name"
                  className={"absolute left-4 transition-all duration-300 pointer-events-none " + (focusedField === "name" || formData.name ? "top-0 text-xs text-[#C9A84C] bg-white px-2 -translate-y-1/2" : "top-1/2 -translate-y-1/2 text-gray-500")}
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-[#C9A84C] focus:outline-none transition-colors duration-300"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="email"
                  className={"absolute left-4 transition-all duration-300 pointer-events-none " + (focusedField === "email" || formData.email ? "top-0 text-xs text-[#C9A84C] bg-white px-2 -translate-y-1/2" : "top-1/2 -translate-y-1/2 text-gray-500")}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-[#C9A84C] focus:outline-none transition-colors duration-300"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="company"
                  className={"absolute left-4 transition-all duration-300 pointer-events-none " + (focusedField === "company" || formData.company ? "top-0 text-xs text-[#C9A84C] bg-white px-2 -translate-y-1/2" : "top-1/2 -translate-y-1/2 text-gray-500")}
                >
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("company")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg focus:border-[#C9A84C] focus:outline-none transition-colors duration-300"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="message"
                  className={"absolute left-4 transition-all duration-300 pointer-events-none " + (focusedField === "message" || formData.message ? "top-4 text-xs text-[#C9A84C] bg-white px-2" : "top-8 text-gray-500")}
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={5}
                  className="w-full px-4 py-4 pt-8 border-2 border-gray-200 rounded-lg focus:border-[#C9A84C] focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] text-white py-4 px-8 rounded-lg font-bold text-sm tracking-[0.15em] uppercase hover:shadow-gold hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                SEND MESSAGE
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-2">Get in touch via email</p>
                  <a href="mailto:info@naaasholdinggroup.com" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    info@naaasholdinggroup.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-2">Mon-Fri from 9am to 6pm</p>
                  <a href="tel:+880123456789" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                    +880 123 456 789
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
                  <p className="text-gray-600">
                    NAAAS Holding Group<br />
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#C9A84C] to-[#E8C96A] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Join Our Team</h3>
              <p className="mb-6 text-white/90">
                Explore exciting career opportunities across our diverse business units
              </p>
              <a
                href="#career"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#C9A84C] rounded-lg font-bold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                VIEW CAREERS
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Marquee from "./components/Marquee";
import BusinessGrid from "./components/BusinessGrid";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <SmoothScroll>
        <CustomCursor />
        <main className="min-h-screen flex flex-col bg-background">
          <Navbar />
          <HeroSlider />
          <Marquee />
          <BusinessGrid />
          <AboutSection />
          <ContactSection />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}

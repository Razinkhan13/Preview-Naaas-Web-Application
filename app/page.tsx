import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductGrid />
      <About />
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import AboutSection from "./components/AboutSection";
import BusinessGrid from "./components/BusinessGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSlider />
      <BusinessGrid />
      <AboutSection />
      <Footer />
    </main>
  );
}

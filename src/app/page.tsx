import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import BusinessCards from "@/components/BusinessCards";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main className="pt-[72px]">
        <HeroSlider />
        <BusinessCards />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}


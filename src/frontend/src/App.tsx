import { useEffect } from "react";
import BusinessSectors from "./components/BusinessSectors";
import CTASection from "./components/CTASection";
import FloatingActions from "./components/FloatingActions";
import Footer from "./components/Footer";
import GrowthTimeline from "./components/GrowthTimeline";
import HeroSection from "./components/HeroSection";
import IndustrySectors from "./components/IndustrySectors";
import LocationMap from "./components/LocationMap";
import MarketInsights from "./components/MarketInsights";
import Navbar from "./components/Navbar";
import PropertyShowcase from "./components/PropertyShowcase";
import Testimonials from "./components/Testimonials";
import WhyGrowBig from "./components/WhyGrowBig";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    const revealEls = document.querySelectorAll(".section-reveal");
    for (const el of revealEls) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}
    >
      <Navbar />
      <HeroSection />
      <BusinessSectors />
      <PropertyShowcase />
      <WhyGrowBig />
      <GrowthTimeline />
      <IndustrySectors />
      <Testimonials />
      <MarketInsights />
      <CTASection />
      <LocationMap />
      <Footer />
      <FloatingActions />
    </div>
  );
}

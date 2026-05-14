import {
  ChevronLeft,
  ChevronRight,
  Factory,
  Hotel,
  Network,
  Package,
  ShoppingBag,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SECTORS, type Sector } from "../data/siteData";

const iconMap: Record<string, React.ReactNode> = {
  Hotel: <Hotel size={36} />,
  ShoppingBag: <ShoppingBag size={36} />,
  Factory: <Factory size={36} />,
  Package: <Package size={36} />,
  Network: <Network size={36} />,
};

function SectorCard({ sector }: { sector: Sector }) {
  return (
    <div
      className="glass rounded-2xl p-5 sm:p-8 flex flex-col gap-4 sm:gap-5 card-lift glow-gold-hover flex-shrink-0"
      style={{ width: "clamp(240px, 80vw, 320px)" }}
      data-ocid={`experience.card.${sector.id}`}
    >
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center"
        style={{ background: "rgba(200,155,60,0.12)", color: "#C89B3C" }}
      >
        {iconMap[sector.icon]}
      </div>
      <div className="flex flex-col gap-2">
        <h3
          className="font-bold text-xl"
          style={{ color: "#F5F5F5", fontFamily: "var(--font-display)" }}
        >
          {sector.name}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#9A9A9A" }}>
          {sector.description}
        </p>
      </div>
      <div className="mt-auto">
        <span
          className="inline-block text-xs font-bold px-3 py-1.5 rounded-full"
          style={{
            background: "rgba(200,155,60,0.15)",
            color: "#C89B3C",
            border: "1px solid rgba(200,155,60,0.3)",
            fontFamily: "var(--font-display)",
            letterSpacing: "0.03em",
          }}
        >
          {sector.stat}
        </span>
      </div>
    </div>
  );
}

export default function IndustrySectors() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = SECTORS.length;

  useEffect(() => {
    const startAuto = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveIndex((a) => (a + 1) % total);
      }, 3000);
    };
    startAuto();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [total]);

  const startAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((a) => (a + 1) % total);
    }, 3000);
  };

  const handlePrev = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActiveIndex((a) => (a - 1 + total) % total);
    startAuto();
  };

  const handleNext = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActiveIndex((a) => (a + 1) % total);
    startAuto();
  };

  const handleDot = (i: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActiveIndex(i);
    startAuto();
  };

  return (
    <section
      id="experience"
      className="py-24 px-6 overflow-hidden"
      style={{ background: "#0A0A0B" }}
      data-ocid="experience.section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 section-reveal">
          <span
            className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full"
            style={{
              color: "#C89B3C",
              background: "rgba(200,155,60,0.1)",
              border: "1px solid rgba(200,155,60,0.25)",
              fontFamily: "var(--font-display)",
            }}
          >
            INDUSTRY EXPERTISE
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ color: "#F5F5F5", fontFamily: "var(--font-display)" }}
          >
            Sectors We Serve
          </h2>
          <div className="gold-line" />
          <p className="max-w-xl text-base" style={{ color: "#9A9A9A" }}>
            Deep domain knowledge across Udaipur&#39;s most dynamic commercial
            sectors.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative section-reveal">
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 glow-gold-hover"
            style={{
              left: "4px",
              background: "#1A1A1D",
              border: "1px solid #2C2C30",
              color: "#C89B3C",
            }}
            aria-label="Previous sector"
            data-ocid="experience.prev_button"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 glow-gold-hover"
            style={{
              right: "4px",
              background: "#1A1A1D",
              border: "1px solid #2C2C30",
              color: "#C89B3C",
            }}
            aria-label="Next sector"
            data-ocid="experience.next_button"
          >
            <ChevronRight size={20} />
          </button>

          <div className="overflow-hidden px-12 sm:px-14">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${activeIndex} * (clamp(240px, 80vw, 320px) + 24px)))`,
              }}
              data-ocid="experience.carousel"
            >
              {SECTORS.map((sector) => (
                <SectorCard key={sector.id} sector={sector} />
              ))}
            </div>
          </div>
        </div>

        {/* Dot nav */}
        <div className="flex justify-center gap-2 mt-10">
          {SECTORS.map((sector, i) => (
            <button
              key={sector.id}
              type="button"
              onClick={() => handleDot(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? "28px" : "8px",
                height: "8px",
                background:
                  i === activeIndex
                    ? "linear-gradient(90deg,#C89B3C,#E2B95B)"
                    : "#2C2C30",
              }}
              aria-label={`Go to sector ${i + 1}`}
              data-ocid={`experience.dot.${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

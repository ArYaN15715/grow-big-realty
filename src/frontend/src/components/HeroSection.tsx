import { useEffect, useState } from "react";

const propertyCards = [
  {
    type: "Luxury Apartment",
    location: "Baner, Pune",
    price: "\u20b91.2 Cr",
    tag: "Residential",
    tagColor: "#009FD4",
    badge: "Ready to Move",
  },
  {
    type: "Commercial Space",
    location: "Hinjewadi, Pune",
    price: "\u20b985 L",
    tag: "Commercial",
    tagColor: "#C9A96E",
    badge: "Premium Location",
  },
  {
    type: "Premium Villa",
    location: "Kothrud, Pune",
    price: "\u20b92.4 Cr",
    tag: "Residential",
    tagColor: "#009FD4",
    badge: "Pre-Launch",
  },
];

const trustIndicators = [
  "5.0 Rated Property Advisory",
  "Residential & Commercial Expertise",
  "Transparent Consultation",
  "Trusted Across Pune",
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background:
          "linear-gradient(135deg, #F8F9FA 0%, #EEF2F7 50%, #E8EEF5 100%)",
        fontFamily: "var(--font-body)",
      }}
      data-ocid="hero.section"
    >
      {/* Background decorative blobs */}
      <div
        className="absolute top-10 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #009FD4 0%, transparent 70%)",
          transform: "translate(30%, -20%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #C9A96E 0%, transparent 70%)",
          transform: "translate(-30%, 20%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* LEFT: Content */}
          <div
            className={`w-full lg:w-1/2 space-y-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <span
                data-ocid="hero.rating_badge"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                style={{ backgroundColor: "#009FD4" }}
              >
                <span>\u2605</span>
                <span>5.0 Google Rated</span>
              </span>
              <span
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-white"
                style={{ backgroundColor: "#10B981" }}
              >
                \u2713 Verified Advisory
              </span>
            </div>

            <h1
              data-ocid="hero.headline"
              className="font-bold leading-tight tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#2D3142",
                lineHeight: 1.1,
              }}
            >
              Smart Property Decisions{" "}
              <span style={{ color: "#009FD4" }}>Begin With</span> Trusted
              Guidance
            </h1>

            <p
              data-ocid="hero.subheadline"
              className="text-lg leading-relaxed"
              style={{ color: "#6B7280", maxWidth: "32rem" }}
            >
              Helping families, professionals, and investors across Pune
              discover residential and commercial properties with transparency,
              expertise, and personalized consultation.
            </p>

            <div
              data-ocid="hero.cta_group"
              className={`flex flex-wrap gap-3 transition-all duration-700 delay-200 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <button
                type="button"
                data-ocid="hero.primary_button"
                onClick={() => scrollTo("#properties")}
                className="px-6 py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#009FD4",
                  fontFamily: "var(--font-display)",
                  minWidth: "160px",
                }}
              >
                Explore Properties
              </button>
              <button
                type="button"
                data-ocid="hero.secondary_button"
                onClick={() => scrollTo("#contact")}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 border-2"
                style={{
                  borderColor: "#009FD4",
                  color: "#009FD4",
                  backgroundColor: "transparent",
                  fontFamily: "var(--font-display)",
                  minWidth: "160px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(0,159,212,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                Book Consultation
              </button>
            </div>

            <div
              data-ocid="hero.trust_indicators"
              className={`grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 transition-all duration-700 delay-300 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {trustIndicators.map((indicator) => (
                <div
                  key={indicator}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "#2D3142" }}
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: "#10B981" }}
                  >
                    \u2713
                  </span>
                  {indicator}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Visual card stack */}
          <div
            className={`w-full lg:w-1/2 relative transition-all duration-700 delay-150 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/generated/dwell-hero-property.dim_800x600.jpg"
                alt="Premium properties in Pune"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(45,49,66,0.5) 0%, transparent 60%)",
                }}
              />
              <div
                data-ocid="hero.trust_badge"
                className="absolute top-4 right-4 backdrop-blur-md rounded-xl px-3 py-2 border flex items-center gap-2"
                style={{
                  backgroundColor: "rgba(255,255,255,0.92)",
                  borderColor: "rgba(255,255,255,0.6)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
              >
                <div className="text-center">
                  <div
                    className="text-lg font-bold"
                    style={{
                      color: "#009FD4",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    5.0 \u2605
                  </div>
                  <div className="text-xs" style={{ color: "#6B7280" }}>
                    Google Reviews
                  </div>
                </div>
                <div
                  className="w-px h-8 self-center"
                  style={{ backgroundColor: "#E5E7EB" }}
                />
                <div className="text-center">
                  <div
                    className="text-lg font-bold"
                    style={{
                      color: "#2D3142",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    100+
                  </div>
                  <div className="text-xs" style={{ color: "#6B7280" }}>
                    Happy Clients
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {propertyCards.map((card, i) => (
                <div
                  key={`${card.type}-${card.location}`}
                  data-ocid={`hero.property_card.${i + 1}`}
                  className="rounded-xl p-4 border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.88)",
                    backdropFilter: "blur(12px)",
                    borderColor: "rgba(255,255,255,0.7)",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                  }}
                >
                  <div className="flex items-start justify-between gap-1 mb-2">
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: card.tagColor }}
                    >
                      {card.tag}
                    </span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        backgroundColor: "rgba(16,185,129,0.12)",
                        color: "#10B981",
                      }}
                    >
                      {card.badge}
                    </span>
                  </div>
                  <p
                    className="font-semibold text-sm"
                    style={{
                      color: "#2D3142",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {card.type}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "#6B7280" }}>
                    \ud83d\udccd {card.location}
                  </p>
                  <p
                    className="text-sm font-bold mt-2"
                    style={{
                      color: "#009FD4",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {card.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

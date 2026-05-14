import { MapPin, Maximize2, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PROPERTIES, type Property } from "../data/siteData";
import PropertyModal from "./PropertyModal";

const FILTERS = [
  "All",
  "Commercial",
  "Hospitality",
  "Warehouse",
  "F&B",
  "Industrial",
  "Farm House",
];

function PropertyCard({
  property,
  onSelect,
  index,
}: {
  property: Property;
  onSelect: (p: Property) => void;
  index: number;
}) {
  return (
    <button
      type="button"
      className="group card-lift rounded-xl overflow-hidden cursor-pointer section-reveal text-left w-full"
      style={{
        background: "#1A1A1D",
        border: "1px solid #2C2C30",
        transitionDelay: `${index * 0.07}s`,
        transition:
          "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "#C89B3C";
        (e.currentTarget as HTMLButtonElement).style.boxShadow =
          "0 0 24px rgba(200,155,60,0.15)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "#2C2C30";
        (e.currentTarget as HTMLButtonElement).style.boxShadow = "";
      }}
      onClick={() => onSelect(property)}
      data-ocid={`properties.item.${index + 1}`}
    >
      {/* Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,15,16,0.3), rgba(15,15,16,0.6))",
          }}
        />
        {/* Type badge */}
        <span
          className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full"
          style={{
            background: "rgba(200,155,60,0.85)",
            color: "#0F0F10",
            fontFamily: "var(--font-display)",
          }}
        >
          {property.type}
        </span>
        {/* Status badge */}
        <span
          className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            background: "rgba(76,175,80,0.15)",
            color: "#4CAF50",
            border: "1px solid rgba(76,175,80,0.3)",
          }}
        >
          {property.status}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h3
          className="font-bold text-lg leading-snug line-clamp-2"
          style={{ color: "#F5F5F5", fontFamily: "var(--font-display)" }}
        >
          {property.title}
        </h3>

        <div
          className="flex items-center gap-1.5 text-sm"
          style={{ color: "#9A9A9A" }}
        >
          <MapPin size={13} style={{ color: "#C89B3C", flexShrink: 0 }} />
          <span className="truncate">{property.location}</span>
        </div>

        <div
          className="flex items-center gap-1.5 text-sm"
          style={{ color: "#9A9A9A" }}
        >
          <Maximize2 size={13} style={{ color: "#C89B3C", flexShrink: 0 }} />
          <span>{property.area}</span>
        </div>

        <div className="flex items-center justify-between mt-1">
          <span
            className="font-bold text-xl"
            style={{ color: "#C89B3C", fontFamily: "var(--font-display)" }}
          >
            {property.price}
          </span>
          <div
            className="flex items-center gap-1 text-sm"
            style={{ color: "#E2B95B" }}
          >
            <TrendingUp size={13} />
            <span>{property.roi}</span>
          </div>
        </div>

        <div
          className="mt-2 w-full btn-gold py-2.5 text-sm font-semibold text-center"
          data-ocid={`properties.view_button.${index + 1}`}
        >
          View Details
        </div>
      </div>
    </button>
  );
}

export default function PropertyShowcase() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Property | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered =
    filter === "All" ? PROPERTIES : PROPERTIES.filter((p) => p.type === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    const targets = sectionRef.current?.querySelectorAll(".section-reveal");
    if (targets) {
      for (const el of targets) observer.observe(el);
    }
    return () => observer.disconnect();
    // Re-observe when filtered list changes so new cards get revealed
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="properties"
      className="py-16 sm:py-24 px-4 sm:px-6"
      style={{ background: "#0F0F10" }}
      data-ocid="properties.section"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-5 mb-14 section-reveal">
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "#C89B3C", letterSpacing: "0.2em" }}
          >
            LIVE OPPORTUNITIES
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ color: "#F5F5F5", fontFamily: "var(--font-display)" }}
          >
            Featured <span className="text-gradient-gold">Properties</span>
          </h2>
          <div className="gold-line" />
          <p className="max-w-xl text-base" style={{ color: "#9A9A9A" }}>
            Curated commercial, hospitality, and industrial properties across
            Udaipur.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className="flex overflow-x-auto gap-2 mb-12 section-reveal pb-2 no-scrollbar"
          data-ocid="properties.filter_tabs"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className="px-4 sm:px-5 py-2 text-xs font-semibold rounded-full transition-all duration-200 whitespace-nowrap flex-shrink-0"
              style={{
                background: filter === f ? "#C89B3C" : "#1A1A1D",
                color: filter === f ? "#0F0F10" : "#9A9A9A",
                border:
                  filter === f ? "1px solid #C89B3C" : "1px solid #2C2C30",
                fontFamily: "var(--font-display)",
              }}
              onMouseEnter={(e) => {
                if (filter !== f)
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "#C89B3C";
              }}
              onMouseLeave={(e) => {
                if (filter !== f)
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "#9A9A9A";
              }}
              data-ocid={`properties.filter.${f.toLowerCase().replace(/[^a-z0-9]/g, "_")}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            data-ocid="properties.list"
          >
            {filtered.map((p, i) => (
              <PropertyCard
                key={p.id}
                property={p}
                onSelect={setSelected}
                index={i}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20" data-ocid="properties.empty_state">
            <p className="text-lg mb-2" style={{ color: "#9A9A9A" }}>
              No properties in this category.
            </p>
            <p className="text-sm" style={{ color: "#9A9A9A" }}>
              Contact us for specific requirements.
            </p>
          </div>
        )}
      </div>

      {selected && (
        <PropertyModal property={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

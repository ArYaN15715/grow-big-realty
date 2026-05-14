import {
  CheckCircle2,
  MapPin,
  Maximize2,
  Phone,
  TrendingUp,
  X,
} from "lucide-react";
import { useEffect } from "react";
import type { Property } from "../data/siteData";

interface Props {
  property: Property;
  onClose: () => void;
}

export default function PropertyModal({ property, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      data-ocid="property_modal.dialog"
    >
      {/* Backdrop — click to close, keyboard handled by document listener */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.80)", backdropFilter: "blur(8px)" }}
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        role="button"
        tabIndex={-1}
        aria-label="Close modal"
      />
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl z-10"
        style={{
          background: "#1A1A1D",
          border: "1px solid #2C2C30",
          animation: "fadeInUp 0.3s ease",
        }}
      >
        {/* Header Image */}
        <div className="relative h-64 overflow-hidden rounded-t-2xl flex-shrink-0">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(15,15,16,0.7))",
            }}
          />
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(15,15,16,0.70)",
              color: "#F5F5F5",
              border: "1px solid rgba(200,155,60,0.3)",
            }}
            aria-label="Close modal"
            data-ocid="property_modal.close_button"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 flex flex-col gap-5 sm:gap-6">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full"
              style={{
                background: "rgba(200,155,60,0.15)",
                color: "#C89B3C",
                border: "1px solid rgba(200,155,60,0.35)",
                fontFamily: "var(--font-display)",
              }}
            >
              {property.type}
            </span>
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                background: "rgba(76,175,80,0.15)",
                color: "#4CAF50",
                border: "1px solid rgba(76,175,80,0.3)",
              }}
            >
              {property.status}
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-2xl sm:text-3xl font-black leading-tight"
            style={{ color: "#F5F5F5", fontFamily: "var(--font-display)" }}
          >
            {property.title}
          </h2>

          {/* Location */}
          <div className="flex items-center gap-2" style={{ color: "#9A9A9A" }}>
            <MapPin size={15} style={{ color: "#C89B3C" }} />
            <span className="text-sm">{property.location}</span>
          </div>

          {/* Divider */}
          <div className="gold-line" />

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {[
              {
                icon: <Maximize2 size={14} />,
                label: "Area",
                value: property.area,
              },
              {
                icon: <TrendingUp size={14} />,
                label: "Price",
                value: property.price,
              },
              {
                icon: <TrendingUp size={14} />,
                label: "ROI",
                value: property.roi,
              },
              {
                icon: <TrendingUp size={14} />,
                label: "Investment Type",
                value: property.investmentType,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1.5 p-3 rounded-xl"
                style={{
                  background: "rgba(44,44,48,0.5)",
                  border: "1px solid rgba(44,44,48,0.8)",
                }}
              >
                <div
                  className="flex items-center gap-1.5 text-xs"
                  style={{ color: "#9A9A9A" }}
                >
                  <span style={{ color: "#C89B3C" }}>{item.icon}</span>
                  {item.label}
                </div>
                <span
                  className="font-bold text-sm"
                  style={{
                    color: "#F5F5F5",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-base leading-relaxed" style={{ color: "#9A9A9A" }}>
            {property.description}
          </p>

          {/* Features */}
          <div>
            <h4
              className="font-semibold text-sm mb-3"
              style={{
                color: "#E2B95B",
                fontFamily: "var(--font-display)",
                letterSpacing: "0.05em",
              }}
            >
              KEY FEATURES
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {property.features.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "#9A9A9A" }}
                >
                  <CheckCircle2
                    size={14}
                    style={{ color: "#C89B3C", flexShrink: 0 }}
                  />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div
            className="rounded-xl p-5 flex flex-col gap-4"
            style={{
              background: "rgba(200,155,60,0.05)",
              border: "1px solid rgba(200,155,60,0.15)",
            }}
          >
            <h4
              className="font-bold text-base text-center"
              style={{ color: "#F5F5F5", fontFamily: "var(--font-display)" }}
            >
              Interested in this property?
            </h4>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:7572905655"
                className="flex-1 btn-gold flex items-center justify-center gap-2 text-sm py-3"
                data-ocid="property_modal.call_button"
              >
                <Phone size={15} />
                Call Us Now
              </a>
              <a
                href="https://wa.me/917572905655"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-outline flex items-center justify-center gap-2 text-sm py-3"
                data-ocid="property_modal.whatsapp_button"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="15"
                  height="15"
                  fill="currentColor"
                  role="img"
                  aria-label="WhatsApp"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
            <p className="text-xs text-center" style={{ color: "#9A9A9A" }}>
              Or visit us at Near Ice Factory, road, Udaipur, Rajasthan 313001
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

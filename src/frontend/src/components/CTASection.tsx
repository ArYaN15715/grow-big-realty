import { MapPin, MessageSquare, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0F0F10 0%, #1A1A1D 50%, #0F0F10 100%)",
      }}
      data-ocid="contact.section"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div
          style={{
            width: "700px",
            height: "500px",
            background:
              "radial-gradient(ellipse at center, rgba(200,155,60,0.07) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
      </div>
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #C89B3C, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #E2B95B, transparent)" }}
        aria-hidden="true"
      />
      {/* Accent lines */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #C89B3C 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 left-0 right-0 h-px opacity-5 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, #C89B3C, transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-0 right-0 h-px opacity-5 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, #C89B3C, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col gap-10">
        <div className="flex flex-col gap-5 section-reveal">
          <span
            className="mx-auto text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full"
            style={{
              color: "#C89B3C",
              background: "rgba(200,155,60,0.1)",
              border: "1px solid rgba(200,155,60,0.25)",
              fontFamily: "var(--font-display)",
            }}
          >
            GET IN TOUCH
          </span>
          <h2
            className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold"
            style={{
              color: "#F5F5F5",
              fontFamily: "var(--font-display)",
              lineHeight: 1.15,
            }}
          >
            Looking to <span className="text-gradient-gold">Expand</span>
            <br />
            Your Business?
          </h2>
          <p
            className="text-base sm:text-lg max-w-xl mx-auto"
            style={{ color: "#9A9A9A" }}
          >
            Find the right commercial opportunity with strategic real estate
            guidance.
          </p>
        </div>

        {/* 3 CTAs */}
        <div
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 section-reveal"
          data-ocid="contact.cta_group"
        >
          <a
            href="tel:7572905655"
            className="btn-gold flex items-center justify-center gap-2 w-full sm:w-auto"
            data-ocid="contact.strategy_button"
          >
            <Phone size={18} />
            Schedule Strategy Call
          </a>
          <a
            href="tel:7572905655"
            className="btn-outline flex items-center justify-center gap-2 w-full sm:w-auto"
            data-ocid="contact.call_button"
          >
            <Phone size={18} />
            Call Now: 7572905655
          </a>
          <a
            href="https://wa.me/917572905655"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 font-semibold transition-all duration-300 w-full sm:w-auto"
            style={{
              color: "#25D366",
              border: "1px solid #25D366",
              padding: "0.75rem 1.75rem",
              borderRadius: "4px",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(37,211,102,0.1)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 18px rgba(37,211,102,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "transparent";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
            data-ocid="contact.whatsapp_button"
          >
            <MessageSquare size={18} />
            WhatsApp Us
          </a>
        </div>

        {/* Contact info */}
        <div
          className="flex flex-wrap justify-center gap-6 pt-6 section-reveal"
          style={{ borderTop: "1px solid #2C2C30" }}
        >
          <div
            className="flex items-center gap-2 text-sm"
            style={{ color: "#9A9A9A" }}
          >
            <Phone size={14} style={{ color: "#C89B3C", flexShrink: 0 }} />
            <a
              href="tel:7572905655"
              className="transition-colors duration-200"
              style={{ color: "#9A9A9A" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#C89B3C";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#9A9A9A";
              }}
            >
              7572905655
            </a>
          </div>
          <div
            className="flex items-start gap-2 text-sm"
            style={{ color: "#9A9A9A" }}
          >
            <MapPin
              size={14}
              style={{ color: "#C89B3C", flexShrink: 0, marginTop: "2px" }}
            />
            <span>Near Ice Factory, road, Udaipur, Rajasthan 313001</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import { MapPin, MessageCircle, Phone } from "lucide-react";
import { BUSINESS_INFO, SERVICES } from "../data/siteData";

const SERVICE_LINKS = [
  "Franchise Leasing",
  "Hotels & Restaurants",
  "Warehouses",
  "Restaurant Setup",
  "Industrial Plots",
  "Farm Houses",
  "Commercial Leasing",
];

export default function Footer() {
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "growbig",
  );

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6"
      style={{
        background: "#0F0F10",
        borderTop: "2px solid rgba(200,155,60,0.3)",
      }}
      data-ocid="footer"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 mb-14 text-center lg:text-left">
          {/* Brand */}
          <div className="flex flex-col gap-5 items-center lg:items-start">
            <img
              src="/assets/images/logo.webp"
              alt="Grow Big Leasing & Real Estate"
              className="h-12 w-auto"
              style={{ objectFit: "contain", objectPosition: "left" }}
            />
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "#9A9A9A" }}
            >
              Helping Businesses Expand Through Smart Real Estate
            </p>
            <div
              className="inline-flex items-center gap-3 self-start px-4 py-2.5 rounded-lg"
              style={{
                background: "rgba(200,155,60,0.08)",
                border: "1px solid rgba(200,155,60,0.2)",
              }}
            >
              <span
                style={{
                  color: "#C89B3C",
                  fontSize: "16px",
                  letterSpacing: "2px",
                }}
              >
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              <div className="flex flex-col leading-tight">
                <span
                  className="font-bold text-sm"
                  style={{
                    color: "#F5F5F5",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  5.0
                </span>
                <span className="text-xs" style={{ color: "#9A9A9A" }}>
                  Google Rating
                </span>
              </div>
            </div>
            <p
              className="text-xs leading-relaxed max-w-xs"
              style={{ color: "#9A9A9A" }}
            >
              Udaipur&#39;s leading commercial expansion consultancy &mdash;
              specializing in franchise leasing, hospitality, industrial, and
              investment real estate.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <h4
              className="font-bold text-sm uppercase tracking-widest mb-2"
              style={{ color: "#C89B3C", fontFamily: "var(--font-display)" }}
            >
              Our Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {SERVICE_LINKS.map((name) => (
                <li key={name}>
                  <button
                    type="button"
                    onClick={() => scrollTo("sectors")}
                    className="text-sm text-left transition-colors duration-200"
                    style={{ color: "#9A9A9A" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "#C89B3C";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "#9A9A9A";
                    }}
                    data-ocid={`footer.service.${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  >
                    <span
                      style={{
                        color: "rgba(200,155,60,0.4)",
                        marginRight: "8px",
                      }}
                    >
                      &#8250;
                    </span>
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <h4
              className="font-bold text-sm uppercase tracking-widest mb-2"
              style={{ color: "#C89B3C", fontFamily: "var(--font-display)" }}
            >
              Get In Touch
            </h4>
            <div className="flex flex-col gap-4">
              <div
                className="flex items-start gap-3 text-sm"
                style={{ color: "#9A9A9A" }}
              >
                <MapPin
                  size={15}
                  style={{ color: "#C89B3C", flexShrink: 0, marginTop: "2px" }}
                />
                <span className="leading-relaxed">{BUSINESS_INFO.address}</span>
              </div>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-3 text-sm transition-colors duration-200"
                style={{ color: "#9A9A9A" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#C89B3C";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#9A9A9A";
                }}
                data-ocid="footer.phone_link"
              >
                <Phone size={15} style={{ color: "#C89B3C", flexShrink: 0 }} />
                {BUSINESS_INFO.phone}
              </a>
              <a
                href={`https://wa.me/91${BUSINESS_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors duration-200"
                style={{ color: "#9A9A9A" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#25D366";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#9A9A9A";
                }}
                data-ocid="footer.whatsapp_link"
              >
                <MessageCircle
                  size={15}
                  style={{ color: "#25D366", flexShrink: 0 }}
                />
                WhatsApp: {BUSINESS_INFO.whatsapp}
              </a>
              <p className="text-xs" style={{ color: "#9A9A9A" }}>
                Proprietor:{" "}
                <span style={{ color: "#F5F5F5" }}>
                  {BUSINESS_INFO.ownerName}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-xs"
          style={{ borderTop: "1px solid #2C2C30", color: "#9A9A9A" }}
        >
          <span>
            &copy; {year} Grow Big Leasing &amp; Real Estate. All Rights
            Reserved.
          </span>
          <span>Udaipur, Rajasthan</span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utm}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{ color: "#9A9A9A" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#C89B3C";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#9A9A9A";
            }}
          >
            Built with love using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

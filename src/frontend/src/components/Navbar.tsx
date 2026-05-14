import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { NAV_LINKS } from "../data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        transition:
          "background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease, padding 0.3s ease",
        background: scrolled ? "rgba(15,15,16,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(44,44,48,0.8)"
          : "1px solid transparent",
        padding: scrolled ? "10px 0" : "18px 0",
      }}
      data-ocid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
        {/* Logo */}
        <button
          type="button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center shrink-0"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
          data-ocid="navbar.logo"
        >
          <img
            src="/assets/images/logo.webp"
            alt="Grow Big Leasing & Real Estate"
            className="h-10 w-auto object-contain"
            style={{ transition: "opacity 0.3s ease" }}
          />
        </button>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-8 flex-1 justify-center"
          data-ocid="navbar.nav"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="relative text-sm font-medium tracking-wide group"
              style={{
                color: "#9A9A9A",
                fontFamily: "var(--font-display)",
                transition: "color 0.25s ease",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px 0",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#C89B3C";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#9A9A9A";
              }}
              data-ocid={`navbar.link.${link.label.toLowerCase()}`}
            >
              {link.label}
              {/* Gold underline on hover */}
              <span
                className="absolute bottom-0 left-0 w-0 h-[1px] group-hover:w-full"
                style={{
                  background: "linear-gradient(90deg, #C89B3C, #E2B95B)",
                  transition: "width 0.3s ease",
                }}
              />
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          type="button"
          onClick={() => handleNavClick("#contact")}
          className="hidden md:block btn-gold text-sm shrink-0"
          data-ocid="navbar.cta_button"
        >
          Book Consultation
        </button>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          style={{
            color: "#C89B3C",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          data-ocid="navbar.hamburger"
        >
          <span
            style={{
              display: "block",
              transition: "transform 0.3s ease, opacity 0.3s ease",
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </span>
        </button>
      </div>

      {/* Mobile menu — slide down */}
      <div
        className="md:hidden overflow-hidden"
        style={{
          maxHeight: menuOpen ? "400px" : "0",
          transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          background: "rgba(15,15,16,0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
        data-ocid="navbar.mobile_menu"
      >
        <div
          style={{
            borderTop: "1px solid rgba(44,44,48,0.8)",
            padding: "1.25rem 1.5rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="text-left text-base font-medium transition-colors duration-200 py-4 w-full"
              style={{
                color: "#9A9A9A",
                fontFamily: "var(--font-display)",
                background: "none",
                border: "none",
                cursor: "pointer",
                borderBottom: "1px solid rgba(44,44,48,0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#C89B3C";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#9A9A9A";
              }}
              data-ocid={`navbar.mobile.${link.label.toLowerCase()}`}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleNavClick("#contact")}
            className="btn-gold text-sm mt-4 text-center w-full"
            data-ocid="navbar.mobile.cta_button"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </header>
  );
}

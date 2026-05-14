import { TRUST_ITEMS } from "../data/siteData";

export default function HeroSection() {
  const trustItems = [...TRUST_ITEMS, ...TRUST_ITEMS, ...TRUST_ITEMS];

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col overflow-hidden"
      style={{ minHeight: "100dvh" }}
      data-ocid="hero.section"
    >
      {/* Cinematic background image with gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(15,15,16,0.65) 0%, rgba(15,15,16,0.45) 50%, rgba(15,15,16,0.92) 100%), url(/assets/generated/hero-cinematic.dim_1920x1080.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Slow-moving radial gold tint — animated via CSS */}
      <div
        className="absolute inset-0 animate-gold-pulse"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(200,155,60,0.07) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 30%, rgba(226,185,91,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Top gold accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #C89B3C 30%, #E2B95B 50%, #C89B3C 70%, transparent 100%)",
          zIndex: 10,
        }}
      />

      {/* Main content — centered vertically */}
      <div className="relative z-10 flex-1 flex items-center justify-center pt-24 pb-8">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6">
          <div className="max-w-4xl flex flex-col gap-6">
            {/* 5-star badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full self-start animate-fade-in-up"
              style={{
                background: "rgba(200,155,60,0.1)",
                border: "1px solid rgba(200,155,60,0.35)",
                animationDelay: "0.1s",
                opacity: 0,
              }}
              data-ocid="hero.rating_badge"
            >
              <span
                style={{
                  color: "#C89B3C",
                  fontSize: "0.9rem",
                  letterSpacing: "0.1em",
                }}
              >
                ★★★★★
              </span>
              <span
                className="text-xs font-bold tracking-wider uppercase"
                style={{ color: "#E2B95B", fontFamily: "var(--font-display)" }}
              >
                5.0
              </span>
              <span
                className="text-xs font-medium"
                style={{
                  color: "rgba(154,154,154,0.85)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Google Rating
              </span>
              <span
                className="hidden sm:inline text-xs"
                style={{ color: "rgba(44,44,48,0.9)" }}
              >
                |
              </span>
              <span
                className="hidden sm:inline text-xs font-medium"
                style={{
                  color: "rgba(154,154,154,0.7)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Udaipur's Premier Commercial Consultancy
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight animate-fade-in-up"
              style={{
                fontFamily: "var(--font-display)",
                color: "#F5F5F5",
                animationDelay: "0.25s",
                opacity: 0,
              }}
              data-ocid="hero.headline"
            >
              Real Estate That <br className="hidden sm:block" />
              <span className="text-gradient-gold">Helps Businesses</span>
              <br />
              Grow.
            </h1>

            {/* Gold divider line */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              <div
                style={{
                  width: "72px",
                  height: "3px",
                  background: "linear-gradient(90deg, #C89B3C, #E2B95B)",
                  borderRadius: "2px",
                }}
              />
            </div>

            {/* Subheadline */}
            <p
              className="text-base sm:text-xl leading-relaxed max-w-2xl animate-fade-in-up"
              style={{
                color: "rgba(154,154,154,0.9)",
                animationDelay: "0.45s",
                opacity: 0,
                fontFamily: "var(--font-body)",
              }}
              data-ocid="hero.subheadline"
            >
              Commercial leasing, franchise expansion, hospitality spaces,
              industrial properties, and investment consulting.
            </p>

            {/* CTA row */}
            <div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 animate-fade-in-up"
              style={{ animationDelay: "0.6s", opacity: 0 }}
              data-ocid="hero.cta_group"
            >
              <button
                type="button"
                onClick={() => scrollTo("#contact")}
                className="btn-gold text-center"
                data-ocid="hero.primary_button"
              >
                Book Consultation
              </button>
              <button
                type="button"
                onClick={() => scrollTo("#properties")}
                className="btn-outline text-center"
                data-ocid="hero.secondary_button"
              >
                Explore Opportunities
              </button>
            </div>

            {/* Stat pills row */}
            <div
              className="flex flex-wrap gap-2 sm:gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.75s", opacity: 0 }}
            >
              {[
                { value: "200+", label: "Deals Closed" },
                { value: "40+", label: "Brands Served" },
                { value: "15+", label: "Years in Udaipur" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 px-4 py-2 rounded"
                  style={{
                    background: "rgba(26,26,29,0.7)",
                    border: "1px solid rgba(44,44,48,0.6)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span
                    className="text-base font-black"
                    style={{
                      color: "#C89B3C",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-xs font-medium"
                    style={{
                      color: "#9A9A9A",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div
        className="relative z-10 flex justify-center pb-6 animate-float"
        style={{ marginTop: "auto" }}
      >
        <button
          type="button"
          onClick={() => scrollTo("#sectors")}
          aria-label="Scroll down"
          className="flex flex-col items-center gap-1 group"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <span
            className="text-xs font-medium tracking-widest uppercase group-hover:text-[#C89B3C] transition-colors duration-300"
            style={{
              color: "rgba(154,154,154,0.5)",
              fontFamily: "var(--font-display)",
            }}
          >
            Scroll
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            role="img"
            aria-label="Scroll down"
            className="group-hover:translate-y-1 transition-transform duration-300"
          >
            <path
              d="M10 4v12M4 10l6 6 6-6"
              stroke="rgba(200,155,60,0.6)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Trust strip marquee */}
      <div
        className="relative z-10 w-full overflow-hidden"
        style={{
          borderTop: "1px solid rgba(44,44,48,0.5)",
          background: "rgba(15,15,16,0.75)",
          backdropFilter: "blur(8px)",
          padding: "14px 0",
        }}
        data-ocid="hero.trust_strip"
      >
        {/* Fade edges */}
        <div
          className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(15,15,16,0.95), transparent)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, rgba(15,15,16,0.95), transparent)",
          }}
        />
        <div className="flex animate-marquee whitespace-nowrap">
          {trustItems.map((item, i) => (
            <span
              key={`${i}-${item}`}
              className="inline-flex items-center gap-3 mx-8 text-xs sm:text-sm font-medium"
              style={{ color: "#9A9A9A", fontFamily: "var(--font-display)" }}
            >
              <span
                style={{
                  color: "#C89B3C",
                  fontSize: "0.5rem",
                  display: "inline-block",
                }}
              >
                ◆
              </span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

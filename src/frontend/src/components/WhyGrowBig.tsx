import { Building2, LineChart, Target, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";

const AUTHORITY_POINTS = [
  {
    icon: TrendingUp,
    title: "Expansion-Focused Consulting",
    desc: "We think like business strategists, not property dealers. Every recommendation is aligned to your growth goals.",
  },
  {
    icon: Building2,
    title: "Commercial Leasing Expertise",
    desc: "Deep expertise in commercial, industrial, and hospitality real estate across Udaipur and Rajasthan.",
  },
  {
    icon: Target,
    title: "Brand Growth Strategy",
    desc: "We understand what a brand needs to succeed — footfall, visibility, infrastructure, and competitive positioning.",
  },
  {
    icon: LineChart,
    title: "Investment Opportunities",
    desc: "Access to exclusive off-market properties and investment-grade commercial assets.",
  },
];

const STATS = [
  { value: "200+", label: "Deals Closed" },
  { value: "8+", label: "Years Active" },
  { value: "100%", label: "Satisfaction" },
];

export default function WhyGrowBig() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const pointRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        }
      },
      { threshold: 0.15 },
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (headingRef.current) observer.observe(headingRef.current);
    for (const el of pointRefs.current) {
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why"
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 sm:px-6"
      style={{ background: "#0A0A0B" }}
      data-ocid="why.section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT: Decorative visual */}
          <div
            ref={leftRef}
            className="relative hidden lg:flex flex-col items-center justify-center section-reveal"
            data-ocid="why.visual"
          >
            {/* Concentric rings */}
            <div className="relative w-80 h-80 flex items-center justify-center">
              {[1, 2, 3, 4].map((ring) => (
                <div
                  key={ring}
                  className="absolute rounded-full animate-gold-pulse"
                  style={{
                    width: `${ring * 72}px`,
                    height: `${ring * 72}px`,
                    border: `1px solid rgba(200,155,60,${0.3 - ring * 0.06})`,
                    animationDelay: `${ring * 0.4}s`,
                  }}
                />
              ))}

              {/* Animated vertical gold lines */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 overflow-hidden rounded-full">
                {(
                  [
                    "left-outer",
                    "left-inner",
                    "center",
                    "right-inner",
                    "right-outer",
                  ] as const
                ).map((pos, i) => {
                  const opacityVal = [0.15, 0.35, 0.7, 0.35, 0.15][i];
                  return (
                    <div
                      key={pos}
                      className="rounded-full"
                      style={{
                        width: "1px",
                        height: "60%",
                        background: `linear-gradient(to bottom, transparent, rgba(200,155,60,${opacityVal}), transparent)`,
                        animation: `goldLinePulse ${2 + i * 0.3}s ease-in-out infinite alternate`,
                        animationDelay: `${i * 0.25}s`,
                      }}
                    />
                  );
                })}
              </div>

              {/* Monogram center */}
              <div
                className="relative z-10 w-28 h-28 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(200,155,60,0.15), rgba(226,185,91,0.08))",
                  border: "1px solid rgba(200,155,60,0.4)",
                  boxShadow:
                    "0 0 40px rgba(200,155,60,0.15), inset 0 0 20px rgba(200,155,60,0.05)",
                }}
              >
                <span
                  className="text-5xl font-black text-gradient-gold"
                  style={{
                    fontFamily: "var(--font-display)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  GB
                </span>
              </div>
            </div>

            {/* Stats strip */}
            <div
              className="flex gap-8 mt-10 pt-8"
              style={{ borderTop: "1px solid rgba(200,155,60,0.2)" }}
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-2xl font-black text-gradient-gold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: "#9A9A9A", letterSpacing: "0.08em" }}
                  >
                    {stat.label.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Authority points */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Heading */}
            <div
              ref={headingRef}
              className="section-reveal flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="gold-line" />
                <span
                  className="text-xs font-bold tracking-[0.2em] uppercase"
                  style={{ color: "#C89B3C" }}
                >
                  WHY CHOOSE US
                </span>
              </div>
              <h2
                className="text-2xl sm:text-3xl sm:text-3xl lg:text-5xl font-black"
                style={{
                  color: "#F5F5F5",
                  fontFamily: "var(--font-display)",
                  lineHeight: 1.1,
                }}
              >
                Why <span className="text-gradient-gold">Grow Big?</span>
              </h2>
              <p
                className="text-base max-w-md"
                style={{ color: "#9A9A9A", lineHeight: 1.7 }}
              >
                Not a brokerage. A commercial expansion consultancy with the
                expertise to help your business find the right space, at the
                right terms.
              </p>
            </div>

            {/* Points list */}
            <div className="relative flex flex-col">
              {/* Connecting vertical gold line */}
              <div
                className="absolute left-[21px] top-12 bottom-12 w-px"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(200,155,60,0.5), rgba(200,155,60,0.05))",
                }}
              />

              {AUTHORITY_POINTS.map((point, i) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.title}
                    ref={(el) => {
                      pointRefs.current[i] = el;
                    }}
                    className="group flex gap-5 py-5 section-reveal"
                    style={{ animationDelay: `${i * 0.12}s` }}
                    data-ocid={`why.point.${i + 1}`}
                  >
                    {/* Icon circle */}
                    <div
                      className="relative z-10 w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(200,155,60,0.4)]"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(200,155,60,0.15), rgba(200,155,60,0.05))",
                        border: "1px solid rgba(200,155,60,0.35)",
                        color: "#C89B3C",
                      }}
                    >
                      <Icon size={18} />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-1 pt-1">
                      <h3
                        className="font-bold text-sm transition-colors duration-200 group-hover:text-[#E2B95B]"
                        style={{
                          color: "#F5F5F5",
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        {point.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "#9A9A9A" }}
                      >
                        {point.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { TIMELINE_STEPS } from "../data/siteData";

export default function GrowthTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.1 },
    );

    if (headingRef.current) observer.observe(headingRef.current);
    for (const el of stepRefs.current) {
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 sm:px-6"
      style={{ background: "var(--color-bg)" }}
      data-ocid="process.section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div
          ref={headingRef}
          className="flex flex-col items-center text-center gap-4 mb-20 section-reveal"
        >
          <div className="flex items-center gap-3">
            <div className="gold-line" />
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: "#C89B3C" }}
            >
              HOW IT WORKS
            </span>
            <div className="gold-line" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black"
            style={{
              color: "#F5F5F5",
              fontFamily: "var(--font-display)",
              lineHeight: 1.1,
            }}
          >
            Our <span className="text-gradient-gold">Growth Process</span>
          </h2>
          <p
            className="max-w-xl text-base"
            style={{ color: "#9A9A9A", lineHeight: 1.7 }}
          >
            A structured 5-step approach to finding, evaluating, and executing
            the right commercial opportunity for your business.
          </p>
        </div>

        {/* DESKTOP: Horizontal zigzag timeline */}
        <div className="hidden lg:block" data-ocid="process.timeline">
          {/* Connector line */}
          <div className="relative flex items-center justify-between px-12 mb-0">
            <div
              className="absolute left-12 right-12 top-1/2 h-px"
              style={{
                background:
                  "linear-gradient(to right, rgba(200,155,60,0.1), rgba(200,155,60,0.5), rgba(200,155,60,0.5), rgba(200,155,60,0.5), rgba(200,155,60,0.1))",
              }}
            />
            {/* Chevron arrows between steps */}
            {TIMELINE_STEPS.slice(0, -1).map((step, i) => {
              const positions = [16.6, 33.3, 50, 66.6];
              return (
                <div
                  key={step.step}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                  style={{
                    left: `${positions[i]}%`,
                    color: "rgba(200,155,60,0.6)",
                    zIndex: 2,
                  }}
                >
                  <ChevronRight size={14} strokeWidth={2.5} />
                </div>
              );
            })}

            {/* Step circles */}
            {TIMELINE_STEPS.map((step, i) => (
              <div
                key={step.step}
                className="relative z-10 flex items-center justify-center"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-black text-xl transition-all duration-300 hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, #C89B3C, #E2B95B)",
                    color: "#0F0F10",
                    fontFamily: "var(--font-display)",
                    boxShadow: "0 0 20px rgba(200,155,60,0.35)",
                  }}
                  data-ocid={`process.step.${i + 1}`}
                >
                  {step.step}
                </div>
              </div>
            ))}
          </div>

          {/* Content cards — alternating top/bottom */}
          <div className="relative grid grid-cols-5 gap-4 mt-0">
            {TIMELINE_STEPS.map((step, i) => {
              const isAbove = i % 2 === 0;
              return (
                <div
                  key={step.step}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  className={`section-reveal flex flex-col gap-3 ${
                    isAbove ? "-mt-52 mb-0" : "mt-8"
                  }`}
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {/* Connector dot to line */}
                  {!isAbove && (
                    <div
                      className="w-px h-8 mx-auto"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(200,155,60,0.5), rgba(200,155,60,0.1))",
                      }}
                    />
                  )}

                  <div
                    className="p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] cursor-default"
                    style={{
                      background: "rgba(26,26,29,0.9)",
                      border: "1px solid #2C2C30",
                    }}
                  >
                    <h3
                      className="font-bold text-sm mb-1"
                      style={{
                        color: "#F5F5F5",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "#9A9A9A" }}
                    >
                      {step.description}
                    </p>
                  </div>

                  {isAbove && (
                    <div
                      className="w-px h-8 mx-auto"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(200,155,60,0.1), rgba(200,155,60,0.5))",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE: Vertical stacked timeline */}
        <div
          className="flex flex-col gap-0 lg:hidden"
          style={{ paddingLeft: "0" }}
          data-ocid="process.timeline.mobile"
        >
          {/* Vertical connector line */}
          <div className="relative">
            <div
              className="absolute left-[27px] top-6 bottom-6 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(200,155,60,0.6), rgba(200,155,60,0.05))",
              }}
            />

            {TIMELINE_STEPS.map((step, i) => (
              <div
                key={step.step}
                ref={(el) => {
                  stepRefs.current[5 + i] = el;
                }}
                className="relative flex gap-4 pb-8 last:pb-0 section-reveal"
                style={{ animationDelay: `${i * 0.15}s` }}
                data-ocid={`process.step.mobile.${i + 1}`}
              >
                {/* Step badge */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-black text-base sm:text-lg"
                    style={{
                      background: "linear-gradient(135deg, #C89B3C, #E2B95B)",
                      color: "#0F0F10",
                      fontFamily: "var(--font-display)",
                      boxShadow: "0 0 16px rgba(200,155,60,0.3)",
                    }}
                  >
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div
                  className="flex-1 rounded-xl p-4 sm:p-5"
                  style={{
                    background: "rgba(26,26,29,0.9)",
                    border: "1px solid #2C2C30",
                    marginTop: "10px",
                  }}
                >
                  <h3
                    className="font-bold text-sm mb-2"
                    style={{
                      color: "#F5F5F5",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#9A9A9A" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

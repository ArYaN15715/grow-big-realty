import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "../data/siteData";

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} style={{ color: "#C89B3C", fontSize: "15px" }}>
          &#9733;
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isHoveredRef = useRef(isHovered);
  isHoveredRef.current = isHovered;

  useEffect(() => {
    const startAuto = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        if (isHoveredRef.current) return;
        setAnimating(true);
        setTimeout(() => {
          setActive((a) => (a + 1) % TESTIMONIALS.length);
          setAnimating(false);
        }, 280);
      }, 2500);
    };
    startAuto();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const go = (dir: number) => {
    if (animating) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    setAnimating(true);
    setTimeout(() => {
      setActive((a) => (a + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
      setAnimating(false);
    }, 250);
    // Restart auto-advance after manual navigation
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (isHoveredRef.current) return;
      setAnimating(true);
      setTimeout(() => {
        setActive((a) => (a + 1) % TESTIMONIALS.length);
        setAnimating(false);
      }, 280);
    }, 2500);
  };

  const t = TESTIMONIALS[active];

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 px-4 sm:px-6"
      style={{ background: "var(--color-bg)" }}
      data-ocid="testimonials.section"
    >
      <div className="max-w-5xl mx-auto">
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
            CLIENT STORIES
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ color: "#F5F5F5", fontFamily: "var(--font-display)" }}
          >
            What Our Clients Say
          </h2>
          <div className="gold-line" />
          <p className="max-w-xl text-base" style={{ color: "#9A9A9A" }}>
            Real results from real businesses who expanded with Grow Big.
          </p>
        </div>

        <div
          className="section-reveal"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          data-ocid="testimonials.carousel"
        >
          <div
            className="relative rounded-2xl p-6 sm:p-10 glow-gold-hover"
            style={{
              background: "#1A1A1D",
              border: "1px solid #2C2C30",
              borderLeft: "4px solid #C89B3C",
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(12px)" : "translateY(0)",
              transition: "opacity 0.28s ease, transform 0.28s ease",
            }}
          >
            <div
              className="absolute top-6 right-8 text-8xl leading-none select-none"
              style={{
                color: "rgba(200,155,60,0.12)",
                fontFamily: "Georgia, serif",
              }}
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <div className="mb-5">
              <Stars />
            </div>

            <blockquote
              className="text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8 italic relative z-10"
              style={{ color: "#F5F5F5" }}
              data-ocid="testimonials.active_quote"
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg,#C89B3C,#E2B95B)",
                  color: "#0F0F10",
                  fontFamily: "var(--font-display)",
                }}
              >
                {t.avatar}
              </div>
              <div>
                <div
                  className="font-bold text-sm"
                  style={{
                    color: "#F5F5F5",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {t.name}
                </div>
                <div className="text-xs mt-0.5" style={{ color: "#9A9A9A" }}>
                  {t.role} &bull; {t.company}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {TESTIMONIALS.map((testimonial, i) => (
                <button
                  key={testimonial.id}
                  type="button"
                  onClick={() => {
                    if (intervalRef.current) clearInterval(intervalRef.current);
                    setAnimating(true);
                    setTimeout(() => {
                      setActive(i);
                      setAnimating(false);
                    }, 250);
                    // Restart auto-advance
                    intervalRef.current = setInterval(() => {
                      if (isHoveredRef.current) return;
                      setAnimating(true);
                      setTimeout(() => {
                        setActive((a) => (a + 1) % TESTIMONIALS.length);
                        setAnimating(false);
                      }, 280);
                    }, 2500);
                  }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? "28px" : "8px",
                    height: "8px",
                    background:
                      i === active
                        ? "linear-gradient(90deg,#C89B3C,#E2B95B)"
                        : "#2C2C30",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  data-ocid={`testimonials.dot.${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 glow-gold-hover"
                style={{
                  background: "rgba(44,44,48,0.6)",
                  border: "1px solid #2C2C30",
                  color: "#C89B3C",
                }}
                aria-label="Previous testimonial"
                data-ocid="testimonials.prev_button"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 glow-gold-hover"
                style={{
                  background: "rgba(44,44,48,0.6)",
                  border: "1px solid #2C2C30",
                  color: "#C89B3C",
                }}
                aria-label="Next testimonial"
                data-ocid="testimonials.next_button"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

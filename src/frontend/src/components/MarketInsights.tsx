import { TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { MARKET_INSIGHTS } from "../data/siteData";

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, active, duration]);
  return count;
}

function parseValue(raw: string): {
  prefix: string;
  num: number;
  suffix: string;
} {
  const match = raw.match(/^([^\d]*)(\d+(?:\.\d+)?)([^\d]*)$/);
  if (!match) return { prefix: "", num: 0, suffix: raw };
  return {
    prefix: match[1],
    num: Number.parseFloat(match[2]),
    suffix: match[3],
  };
}

function InsightCard({
  insight,
  index,
}: { insight: (typeof MARKET_INSIGHTS)[0]; index: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { prefix, num, suffix } = parseValue(insight.value);
  const count = useCountUp(num, visible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-xl overflow-hidden card-lift"
      style={{
        background: "#1A1A1D",
        border: "1px solid #2C2C30",
        transitionDelay: `${index * 0.08}s`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition:
          "opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease",
      }}
      data-ocid={`insights.card.${index + 1}`}
    >
      <div
        className="h-1 w-full"
        style={{ background: "linear-gradient(90deg, #C89B3C, #E2B95B)" }}
      />
      <div className="p-6 flex flex-col gap-4">
        <span
          className="self-start flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full"
          style={{
            background: "rgba(74,222,128,0.1)",
            color: "#4ADE80",
            border: "1px solid rgba(74,222,128,0.25)",
          }}
        >
          <TrendingUp size={11} />
          {insight.trend}
        </span>
        <div className="flex flex-col gap-0.5">
          <span
            className="text-3xl sm:text-5xl font-bold text-gradient-gold"
            style={{ fontFamily: "var(--font-display)", lineHeight: 1.1 }}
          >
            {prefix}
            {count}
            {suffix}
          </span>
          <span className="text-xs font-medium" style={{ color: "#9A9A9A" }}>
            {insight.unit}
          </span>
        </div>
        <div
          className="flex flex-col gap-1 pt-3"
          style={{ borderTop: "1px solid #2C2C30" }}
        >
          <h3
            className="font-bold text-sm"
            style={{ color: "#F5F5F5", fontFamily: "var(--font-display)" }}
          >
            {insight.title}
          </h3>
          <p className="text-xs leading-relaxed" style={{ color: "#9A9A9A" }}>
            {insight.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MarketInsights() {
  return (
    <section
      id="insights"
      className="py-16 sm:py-24 px-4 sm:px-6"
      style={{ background: "#0A0A0B" }}
      data-ocid="insights.section"
    >
      <div className="max-w-7xl mx-auto">
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
            MARKET INTELLIGENCE
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ color: "#F5F5F5", fontFamily: "var(--font-display)" }}
          >
            Udaipur Commercial Overview
          </h2>
          <div className="gold-line" />
          <p className="max-w-xl text-base" style={{ color: "#9A9A9A" }}>
            Real-time commercial real estate insights for Udaipur&#39;s
            fastest-growing zones.
          </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          data-ocid="insights.grid"
        >
          {MARKET_INSIGHTS.map((insight, i) => (
            <InsightCard key={insight.id} insight={insight} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

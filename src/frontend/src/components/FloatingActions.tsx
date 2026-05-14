import { MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

export default function FloatingActions() {
  const [waHovered, setWaHovered] = useState(false);
  const [callHovered, setCallHovered] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
      data-ocid="floating.actions"
    >
      {/* WhatsApp */}
      <div className="relative">
        {waHovered && (
          <div
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-lg pointer-events-none"
            style={{
              background: "#1A1A1D",
              color: "#F5F5F5",
              border: "1px solid #2C2C30",
              fontFamily: "var(--font-display)",
            }}
          >
            Chat with us
          </div>
        )}
        <a
          href="https://wa.me/917572905655"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center animate-float transition-all duration-300"
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "#25D366",
            color: "#fff",
            boxShadow: waHovered
              ? "0 0 24px rgba(37,211,102,0.6), 0 8px 24px rgba(0,0,0,0.4)"
              : "0 4px 20px rgba(37,211,102,0.35)",
            transform: waHovered ? "scale(1.12)" : "scale(1)",
            animationDelay: "0.5s",
          }}
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setWaHovered(true)}
          onMouseLeave={() => setWaHovered(false)}
          data-ocid="floating.whatsapp_button"
        >
          <MessageCircle size={24} />
        </a>
      </div>

      {/* Call */}
      <div className="relative">
        {callHovered && (
          <div
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-lg pointer-events-none"
            style={{
              background: "#1A1A1D",
              color: "#F5F5F5",
              border: "1px solid #2C2C30",
              fontFamily: "var(--font-display)",
            }}
          >
            Call us
          </div>
        )}
        <a
          href="tel:7572905655"
          className="flex items-center justify-center animate-float transition-all duration-300"
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #C89B3C, #E2B95B)",
            color: "#0F0F10",
            boxShadow: callHovered
              ? "0 0 28px rgba(200,155,60,0.7), 0 8px 24px rgba(0,0,0,0.4)"
              : "0 4px 20px rgba(200,155,60,0.3)",
            transform: callHovered ? "scale(1.12)" : "scale(1)",
          }}
          aria-label="Call Now"
          onMouseEnter={() => setCallHovered(true)}
          onMouseLeave={() => setCallHovered(false)}
          data-ocid="floating.call_button"
        >
          <Phone size={22} />
        </a>
      </div>
    </div>
  );
}

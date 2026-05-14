import { MapPin, Navigation, Phone } from "lucide-react";

export function LocationMap() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0F0F10] section-reveal">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F5] mb-3">
            Find Us in <span className="text-[#C89B3C]">Udaipur</span>
          </h2>
          <p className="text-[#9A9A9A] text-base sm:text-lg">
            Near Ice Factory, Road, Udaipur, Rajasthan 313001
          </p>
        </div>

        {/* Map container with gold border */}
        <div className="rounded-xl overflow-hidden border border-[#C89B3C]/30 shadow-[0_0_30px_rgba(200,155,60,0.15)] mb-8">
          <iframe
            title="Grow Big Leasing & Real Estate Location"
            src="https://maps.google.com/maps?q=Near+Ice+Factory+Udaipur+Rajasthan+313001&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-64 sm:h-80 lg:h-96 border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Info row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <a
            href="tel:7572905655"
            className="flex items-center gap-2 text-[#9A9A9A] hover:text-[#C89B3C] transition-colors duration-300"
          >
            <Phone className="w-4 h-4 text-[#C89B3C]" />
            <span className="text-sm sm:text-base">7572905655</span>
          </a>
          <div className="flex items-center gap-2 text-[#9A9A9A]">
            <MapPin className="w-4 h-4 text-[#C89B3C]" />
            <span className="text-sm sm:text-base">Udaipur, Rajasthan</span>
          </div>
          <a
            href="https://maps.google.com/maps?q=Near+Ice+Factory+Udaipur+Rajasthan+313001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 btn-gold px-5 py-2.5 rounded-full text-sm font-semibold"
            data-ocid="location.directions_button"
          >
            <Navigation className="w-4 h-4" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}

export default LocationMap;

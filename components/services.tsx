import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    name: "Custom Cabinets",
    tagline: "The Heart of Every Transformation",
    description:
      "Floor-to-ceiling custom cabinet systems built to maximize your storage and completely transform your space. Designed for your exact garage — not a box-store afterthought.",
    image:
      "https://galaxy-prod.tlcdn.com/view/user_313Kanfy9lKPIfcEXHq34emdQcR/df04494a3e704cb4afa0ea21b903648d.jpg",
    features: [
      "Custom-sized to fit your space perfectly",
      "Multiple premium finish options",
      "Soft-close hinges & full-extension drawer slides",
      "Garage-grade construction — built to last",
    ],
    featured: true,
    badge: "Most Popular",
    cta: "Schedule a Consultation",
  },
  {
    name: "Slatwall Organizers",
    tagline: "Everything in Its Place",
    description:
      "Versatile slatwall panels with interchangeable accessories that keep tools, bikes, sports gear — and everything else — off the floor and within easy reach.",
    image:
      "https://galaxy-prod.tlcdn.com/view/user_313Kanfy9lKPIfcEXHq34emdQcR/56e2685d3c804e52b55da1d3e4f01da4.jpg",
    features: [
      "Heavy-duty commercial-grade panels",
      "Interchangeable hooks & accessories",
      "Bikes, tools, sports gear — and more",
      "Easy to reconfigure as needs change",
      "Clean, modern look that wows",
    ],
    featured: false,
    badge: null,
    cta: "Schedule a Consultation",
  },
  {
    name: "Concrete Coatings",
    tagline: "The Perfect Foundation",
    description:
      "Professional polyurea, polyaspartic, epoxy and polished concrete coatings. Installed in as little as one day. UV stable, slip resistant, and showroom stunning.",
    image:
      "https://ibb.co/PvNSqg8w",
    features: [
      "Polyurea, polyaspartic, epoxy & polished options",
      "Installed in as little as one day",
      "UV stable — won't yellow or peel",
      "Slip resistant & easy to clean",
      "Showroom-quality finish",
    ],
    featured: false,
    badge: null,
    cta: "Schedule a Consultation",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#f5f3ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-[#c94a0c] font-bold uppercase tracking-[0.35em] text-xs mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What We Do
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-[#0a1628] mb-5 uppercase leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Complete Garage
            <br />
            <span className="text-[#c94a0c]">Transformation Systems</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            From custom cabinets to polished floors, we design and install
            complete garage solutions that add lasting beauty, function, and
            real value to your home.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {services.map((service, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col ${
                service.featured
                  ? "ring-2 ring-[#c94a0c] ring-offset-2 ring-offset-[#f5f3ee]"
                  : ""
              }`}
            >
              {/* Featured badge */}
              {service.badge && (
                <div
                  className="bg-[#c94a0c] text-white text-[10px] font-black uppercase tracking-[0.3em] text-center py-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  ⭐ {service.badge}
                </div>
              )}

              {/* Photo */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white/60 text-[10px] uppercase tracking-[0.25em] font-semibold mb-0.5">
                    {service.tagline}
                  </p>
                  <h3
                    className="text-white font-black text-2xl uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {service.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {service.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-[#c94a0c] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl text-sm uppercase tracking-[0.1em] group ${
                    service.featured
                      ? "bg-[#c94a0c] hover:bg-[#e05c1a] text-white shadow-lg shadow-orange-900/20"
                      : "bg-[#0a1628] hover:bg-[#c94a0c] text-white"
                  }`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Need everything?{" "}
            <a
              href="#promo"
              className="text-[#c94a0c] font-bold hover:underline"
            >
              Bundle Cabinets + Slatwall + Coatings and save 20% →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

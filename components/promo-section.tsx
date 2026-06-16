import { Shield, Trophy, Star } from "lucide-react";

interface PromoTier {
  icon: React.ElementType;
  service: string;
  discount: string;
  description: string;
  items: string[];
  featured: boolean;
}

const tiers: PromoTier[] = [
  {
    icon: Shield,
    service: "Cabinets Only",
    discount: "SAVE 10%",
    description: "Custom cabinet installation",
    items: ["Custom cabinet design", "Professional installation", "Expert craftsmanship"],
    featured: false,
  },
  {
    icon: Star,
    service: "Cabinets + Slatwall",
    discount: "SAVE 15%",
    description: "Cabinet & organizer combo",
    items: ["Custom cabinets", "Slatwall panels & accessories", "Complete wall organization"],
    featured: false,
  },
  {
    icon: Trophy,
    service: "Full Transformation",
    discount: "SAVE 20%",
    description: "Cabinets + Slatwall + Coatings",
    items: ["Custom cabinets", "Slatwall + accessories", "Concrete coating system", "Complete garage makeover"],
    featured: true,
  },
];

export function PromoSection() {
  return (
    <section id="promo" className="py-24 bg-[#0a1628] relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] border-[60px] border-white/3 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] border-[50px] border-[#c94a0c]/8 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] border border-white/3 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 bg-[#c94a0c]/15 border border-[#c94a0c]/30 text-[#c94a0c] font-black uppercase tracking-[0.25em] text-xs px-6 py-2.5 rounded-full mb-7"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            🔥 Limited Time — Summer Savings Event
          </div>
          <h2
            className="text-4xl md:text-6xl font-black text-white mb-5 uppercase leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Transform Your Garage.
            <br />
            <span className="text-[#c94a0c]">Save Up to 20%.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            Our biggest promotion of the year. Limited spots available —
            call today before these prices are gone.
          </p>
        </div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {tiers.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <div
                key={i}
                className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  tier.featured
                    ? "bg-gradient-to-b from-[#c94a0c]/20 to-[#c94a0c]/5 border-2 border-[#c94a0c] shadow-2xl shadow-orange-900/30 scale-105"
                    : "bg-white/5 border border-white/10 hover:border-white/20"
                }`}
              >
                {tier.featured && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c94a0c] text-white text-[10px] font-black uppercase tracking-[0.3em] px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Best Value
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    tier.featured ? "bg-[#c94a0c]" : "bg-white/8"
                  }`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Tier info */}
                <h3
                  className="text-white font-black text-xl uppercase mb-1 leading-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {tier.service}
                </h3>
                <p className="text-white/40 text-xs mb-5">{tier.description}</p>

                {/* Discount */}
                <div
                  className={`text-4xl font-black mb-6 ${
                    tier.featured ? "text-[#c94a0c]" : "text-white"
                  }`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {tier.discount}
                </div>

                {/* Items */}
                <ul className="space-y-2 mb-8 flex-1">
                  {tier.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm">
                      <div
                        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          tier.featured ? "bg-[#c94a0c]" : "bg-white/40"
                        }`}
                      />
                      <span className="text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`block text-center font-bold py-3.5 px-6 rounded-xl text-sm uppercase tracking-[0.1em] ${
                    tier.featured
                      ? "bg-[#c94a0c] hover:bg-[#e05c1a] text-white shadow-lg shadow-orange-900/30"
                      : "bg-white/10 hover:bg-white/15 text-white border border-white/15"
                  }`}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Schedule a Consultation
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom urgency + phone */}
        <div className="text-center border-t border-white/8 pt-12">
          <p className="text-white/35 text-xs uppercase tracking-[0.25em] mb-4">
            ⏰ Summer pricing is limited — spots fill fast
          </p>
          <p className="text-white/60 mb-3 text-sm">
            Call or text to claim your discount and schedule your free in-home consultation:
          </p>
          <a
            href="tel:2108643308"
            className="text-[#c94a0c] hover:text-white font-black text-3xl md:text-4xl transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            210-864-3308
          </a>
          <p className="text-white/25 text-xs mt-3">
            Free In-Home Consultation · No Pressure · No Obligation
          </p>
        </div>
      </div>
    </section>
  );
}

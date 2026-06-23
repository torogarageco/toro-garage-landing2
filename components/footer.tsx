import { Phone, Globe, MapPin } from "lucide-react";
import Image from "next/image";

const serviceLinks = [
  "Custom Garage Cabinets",
  "Slatwall Organizers",
  "Concrete Coatings",
  "Full Garage Transformations",
  "Free In-Home Consultations",
];

const quickLinks = [
  { label: "Our Services", href: "#services" },
  { label: "Our Work", href: "#gallery" },
  { label: "Summer Savings", href: "#promo" },
  { label: "How It Works", href: "#process" },
  { label: "Schedule Consultation", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#060d1a] text-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <Image
                src="https://galaxy-prod.tlcdn.com/view/user_313Kanfy9lKPIfcEXHq34emdQcR/e8c129fafd0a48e4a6f5c9d9789a44b2.png"
                alt="Toro Garage Co."
                width={220}
                height={42}
                style={{ objectFit: "contain", objectPosition: "left center" }}
              />
            </a>
            <p className="text-white/35 leading-relaxed max-w-sm text-sm mb-7">
              San Antonio&apos;s trusted custom garage cabinet specialists. We
              design and install complete garage transformation systems for
              discerning homeowners across South Texas.
            </p>
            <div className="space-y-3">
              <a href="tel:2108643308" className="flex items-center gap-3 text-[#c94a0c] hover:text-white transition-colors group">
                <div className="w-7 h-7 bg-[#c94a0c]/10 rounded-lg flex items-center justify-center group-hover:bg-[#c94a0c]/20 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-black text-base" style={{ fontFamily: "var(--font-heading)" }}>
                  210-864-3308
                </span>
              </a>
              <a href="https://ToroGarageCo.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="w-7 h-7 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm">ToroGarageCo.com</span>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm">Serving San Antonio · Texas Hill Country · South Texas</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-white/35 hover:text-white transition-colors text-sm">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/35 hover:text-white transition-colors text-sm">{link.label}</a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a href="#contact" className="block text-center bg-[#c94a0c] hover:bg-[#e05c1a] text-white font-black text-xs py-3 px-5 rounded-xl uppercase tracking-[0.15em] shadow-lg shadow-orange-900/20 transition-all hover:scale-105" style={{ fontFamily: "var(--font-heading)" }}>
                Schedule Consultation →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-7 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs text-center md:text-left">
            © 2025 Toro Garage Co. All rights reserved. · San Antonio, TX 78201
          </p>
          <p className="text-white/15 text-xs text-center md:text-right">
            Proudly serving San Antonio, Texas Hill Country &amp; South Texas
          </p>
        </div>
      </div>
    </footer>
  );
}

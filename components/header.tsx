"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#gallery" },
    { label: "Summer Savings", href: "#promo" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
        scrolled
          ? "bg-[#0a1628]/98 backdrop-blur-md shadow-2xl shadow-black/40"
          : "bg-gradient-to-b from-black/60 to-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo — horizontal brand image */}
          <a href="#" className="flex items-center group">
            <Image
              src="https://galaxy-prod.tlcdn.com/view/user_313Kanfy9lKPIfcEXHq34emdQcR/e8c129fafd0a48e4a6f5c9d9789a44b2.png"
              alt="Toro Garage Co."
              width={200}
              height={38}
              style={{ objectFit: "contain", objectPosition: "left center" }}
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-white/75 hover:text-[#c94a0c] text-xs font-bold tracking-[0.2em] uppercase transition-colors",
                  link.label === "Summer Savings" &&
                    "text-[#c94a0c] hover:text-white"
                )}
              >
                {link.label === "Summer Savings" && "🔥 "}
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:2108643308"
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 bg-[#c94a0c]/20 rounded-full flex items-center justify-center group-hover:bg-[#c94a0c]/40 transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#c94a0c]" />
              </div>
              <span
                className="text-white font-black text-sm tracking-wide group-hover:text-[#c94a0c] transition-colors"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                210-864-3308
              </span>
            </a>
            <a
              href="#contact"
              className="bg-[#c94a0c] hover:bg-[#e05c1a] text-white font-black text-xs px-6 py-3 rounded-lg uppercase tracking-[0.15em] shadow-lg shadow-orange-900/20 hover:scale-105"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Free Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#0a1628] border-t border-white/10 pb-4">
            <nav className="py-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-white/80 hover:text-[#c94a0c] hover:bg-white/5 py-3 px-4 font-bold tracking-[0.15em] uppercase text-xs transition-colors"
                >
                  {link.label === "Summer Savings" && "🔥 "}
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="px-4 pt-3 pb-1 border-t border-white/10 space-y-3">
              <a
                href="tel:2108643308"
                className="flex items-center gap-3 text-[#c94a0c] font-black text-xl"
              >
                <Phone className="w-5 h-5" />
                210-864-3308
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block bg-[#c94a0c] text-white font-black py-4 px-4 rounded-xl text-center uppercase tracking-[0.15em] text-sm shadow-lg"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Free Consultation →
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

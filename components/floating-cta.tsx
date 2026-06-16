"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-5 z-50 lg:hidden">
      <a
        href="tel:2108643308"
        className="flex items-center gap-2.5 bg-[#c94a0c] hover:bg-[#e05c1a] text-white font-black px-5 py-3.5 rounded-full shadow-2xl shadow-orange-900/50 hover:scale-105 transition-all"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        <Phone className="w-4 h-4 animate-pulse" />
        <span className="text-sm uppercase tracking-wide">Call Now</span>
      </a>
    </div>
  );
}

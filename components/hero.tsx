"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Shield, Star, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://galaxy-prod.tlcdn.com/view/user_313Kanfy9lKPIfcEXHq34emdQcR/a3f6be9007f64a9ba7258069b18d5075.jpg"
          alt="Luxury custom garage transformation with Porsche"
          fill
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          priority
          quality={90}
        />
        {/* Multi-layer dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/75 to-[#0a1628]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-32">
        <div className="max-w-3xl">
          {/* Star rating badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-[#c94a0c] text-[#c94a0c]"
                />
              ))}
            </div>
            <span className="text-white/80 text-xs font-semibold tracking-wide">
              Trusted by Texas Homeowners
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95] mb-5 uppercase tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            A Custom Garage
            <br />
            That Matches the
            <br />
            <span className="text-[#c94a0c]">Beauty & Quality</span>
            <br />
            of Your Home.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="text-white/75 text-lg sm:text-xl mb-10 max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Custom garage cabinets, slatwall organizers & concrete coatings —
            professionally designed and installed for discerning Texas
            homeowners.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#c94a0c] hover:bg-[#e05c1a] text-white font-black text-base px-10 py-4 rounded-xl uppercase tracking-[0.1em] shadow-2xl shadow-orange-900/40 hover:scale-105 hover:shadow-orange-700/40"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Schedule My Consultation →
            </a>
            <a
              href="tel:2108643308"
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-white font-bold text-base px-8 py-4 rounded-xl uppercase tracking-[0.1em]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <Phone className="w-4 h-4" />
              210-864-3308
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {[
              "Free In-Home Consultation",
              "No Pressure. No Obligation.",
              "Custom Designed for Your Space",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-white/60 text-sm"
              >
                <Shield className="w-3.5 h-3.5 text-[#c94a0c] flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Summer Savings Announcement Banner */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="bg-[#c94a0c] py-3.5 px-4">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-5">
            <span
              className="text-white font-black text-xs sm:text-sm uppercase tracking-[0.2em]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              🔥 Summer Savings Event
            </span>
            <span className="hidden sm:block text-white/50 text-xs">|</span>
            <span className="text-white/90 text-xs sm:text-sm font-semibold">
              Save up to{" "}
              <span className="font-black text-white">20% off</span> — Limited
              Time Only
            </span>
            <span className="hidden sm:block text-white/50 text-xs">|</span>
            <a
              href="#promo"
              className="text-white font-black text-xs uppercase tracking-wider underline underline-offset-2 hover:text-yellow-200"
            >
              See All Offers →
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-20 right-8 z-20 hidden lg:flex flex-col items-center gap-2"
      >
        <ChevronDown className="w-5 h-5 text-white/30 animate-bounce" />
      </motion.div>
    </section>
  );
}

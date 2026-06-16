"use client";

import { useState } from "react";
import { Phone, CheckCircle, Lock } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "cabinets",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    const firstName = formData.name.trim().split(" ")[0] || "there";
    return (
      <section id="contact" className="py-24 bg-[#f5f3ee]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h3
              className="text-3xl font-black text-[#0a1628] mb-4 uppercase"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              We&apos;ll Be in Touch, {firstName}!
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Your request has been received. We&apos;ll contact you within{" "}
              <strong>24 hours</strong> to schedule your free in-home
              consultation.
            </p>
            <p className="text-gray-500 text-sm mb-5">
              Prefer to talk now? We&apos;re just a call or text away:
            </p>
            <a
              href="tel:2108643308"
              className="inline-flex items-center gap-3 bg-[#c94a0c] hover:bg-[#e05c1a] text-white font-black text-xl px-10 py-4 rounded-xl uppercase tracking-wide shadow-lg"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <Phone className="w-5 h-5" />
              210-864-3308
            </a>
          </div>
        </div>
      </section>
    );
  }

  const benefitItems = [
    "Free in-home measurement & design consultation",
    "Custom quote tailored to your exact space",
    "No pressure sales — ever. We don't do that.",
    "Summer savings automatically applied to your quote",
  ];

  return (
    <section id="contact" className="py-24 bg-[#f5f3ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Value prop */}
          <div>
            <p
              className="text-[#c94a0c] font-bold uppercase tracking-[0.35em] text-xs mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Free Consultation
            </p>
            <h2
              className="text-4xl md:text-5xl font-black text-[#0a1628] mb-6 uppercase leading-[0.95]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to Transform
              <br />
              <span className="text-[#c94a0c]">Your Garage?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Fill out the form and we&apos;ll reach out within 24 hours to
              schedule your free, no-pressure in-home consultation. We&apos;ll
              measure your space, walk you through the options, and give you a
              custom quote — with summer savings already applied.
            </p>

            <div className="space-y-4 mb-12">
              {benefitItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 bg-[#c94a0c]/15 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-[#c94a0c]" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Phone block */}
            <div className="bg-[#0a1628] rounded-2xl p-7">
              <p
                className="text-white/40 text-[10px] uppercase tracking-[0.3em] mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Prefer to call or text?
              </p>
              <a
                href="tel:2108643308"
                className="flex items-center gap-3 text-[#c94a0c] hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-[#c94a0c]/20 rounded-full flex items-center justify-center group-hover:bg-[#c94a0c] transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span
                  className="font-black text-2xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  210-864-3308
                </span>
              </a>
              <p className="text-white/30 text-xs mt-2">
                Mon–Sat, 8am–6pm · Call or text anytime
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
            <div className="mb-7">
              <h3
                className="text-2xl font-black text-[#0a1628] uppercase mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Schedule Your Consultation
              </h3>
              <p className="text-gray-400 text-sm">
                We respond within 24 hours. No spam — ever.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-[0.15em]">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Smith"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-800 text-sm placeholder-gray-300 focus:outline-none focus:border-[#c94a0c] focus:ring-2 focus:ring-[#c94a0c]/15 transition-all"
                />
              </div>

              {/* Phone + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-[0.15em]">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(210) 555-0100"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-800 text-sm placeholder-gray-300 focus:outline-none focus:border-[#c94a0c] focus:ring-2 focus:ring-[#c94a0c]/15 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-[0.15em]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-800 text-sm placeholder-gray-300 focus:outline-none focus:border-[#c94a0c] focus:ring-2 focus:ring-[#c94a0c]/15 transition-all"
                  />
                </div>
              </div>

              {/* Service selector */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-[0.15em]">
                  I&apos;m Interested In *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-800 text-sm focus:outline-none focus:border-[#c94a0c] focus:ring-2 focus:ring-[#c94a0c]/15 transition-all bg-white appearance-none cursor-pointer"
                >
                  <option value="cabinets">
                    Custom Cabinets Only — Save 10%
                  </option>
                  <option value="cabinets-slatwall">
                    Cabinets + Slatwall — Save 15%
                  </option>
                  <option value="full">
                    Full Transformation (Cabinets + Slatwall + Coatings) — Save
                    20%
                  </option>
                  <option value="coatings">Concrete Coatings Only</option>
                  <option value="slatwall">Slatwall Organizers Only</option>
                  <option value="unsure">
                    Not Sure Yet — I&apos;d Like a Consultation
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5 uppercase tracking-[0.15em]">
                  Tell Us About Your Garage{" "}
                  <span className="text-gray-400 normal-case tracking-normal font-normal">
                    (optional)
                  </span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="e.g., 2-car garage, lots of tools, want more storage space..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-800 text-sm placeholder-gray-300 focus:outline-none focus:border-[#c94a0c] focus:ring-2 focus:ring-[#c94a0c]/15 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#c94a0c] hover:bg-[#e05c1a] disabled:opacity-70 text-white font-black text-base py-4 rounded-xl uppercase tracking-[0.1em] shadow-lg shadow-orange-900/20 hover:scale-[1.01] disabled:hover:scale-100 transition-all"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {loading ? "Sending..." : "Schedule My Consultation →"}
              </button>

              {/* Privacy note */}
              <div className="flex items-center justify-center gap-2 text-gray-400 text-xs">
                <Lock className="w-3 h-3" />
                <span>
                  Your info is private. We never share or sell your contact
                  info.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

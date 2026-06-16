const steps = [
  {
    number: "01",
    emoji: "📐",
    title: "Free In-Home Consultation",
    description:
      "We come to you. Our design consultant will measure your space, listen to your vision, and show you exactly what's possible — with transparent pricing. Zero pressure. Zero obligation.",
  },
  {
    number: "02",
    emoji: "✏️",
    title: "Custom Design",
    description:
      "We create a custom design specific to your garage and walk you through every detail. Once you love it and approve, we schedule your installation at a time that works for you.",
  },
  {
    number: "03",
    emoji: "🔧",
    title: "Professional Install",
    description:
      "Our expert installers handle everything. Most installs are completed in just 1–2 days. We clean up completely and leave you with a garage that looks better than you imagined.",
  },
  {
    number: "04",
    emoji: "🏆",
    title: "Enjoy Your New Garage",
    description:
      "Step back and admire your transformation. Your garage has been completely reimagined — organized, beautiful, and built to perform for years to come.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-[#c94a0c] font-bold uppercase tracking-[0.35em] text-xs mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Simple Process
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-[#0a1628] mb-5 uppercase leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            From First Call to
            <br />
            <span className="text-[#c94a0c]">Finished Garage</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg leading-relaxed">
            We make it easy from start to finish. Most garage transformations
            go from consultation to completed install in under 2 weeks.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#c94a0c]/30 to-transparent" />

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col">
              {/* Step number + icon */}
              <div className="relative z-10 flex flex-col items-start mb-5">
                <div className="w-20 h-20 bg-[#0a1628] rounded-2xl flex items-center justify-center text-3xl mb-3 shadow-xl shadow-navy-900/20">
                  {step.emoji}
                </div>
                <div
                  className="text-6xl font-black text-[#c94a0c]/15 leading-none -mt-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.number}
                </div>
              </div>

              <h3
                className="text-[#0a1628] font-black text-lg uppercase mb-3 leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 bg-[#f5f3ee] rounded-2xl p-7 text-center">
          <p className="text-gray-600 text-base">
            Ready to get started?{" "}
            <strong className="text-[#0a1628]">
              Most consultations are scheduled within 48 hours.
            </strong>{" "}
            <a
              href="#contact"
              className="text-[#c94a0c] font-black hover:underline"
            >
              Schedule yours today →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

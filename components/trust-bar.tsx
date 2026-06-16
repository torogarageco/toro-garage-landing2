export function TrustBar() {
  const stats = [
    { value: "5★", label: "Google Reviews", sub: "Rated in San Antonio" },
    { value: "500+", label: "Garages Transformed", sub: "Across South Texas" },
    { value: "Local", label: "San Antonio Owned", sub: "Texas Hill Country & South TX" },
    { value: "Free", label: "In-Home Consultation", sub: "No pressure. No obligation." },
  ];

  return (
    <section className="bg-[#0a1628] border-b border-white/8 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group"
            >
              <div
                className="text-3xl md:text-4xl font-black text-[#c94a0c] mb-1 leading-none"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-white font-bold text-sm uppercase tracking-wide mb-0.5"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.label}
              </div>
              <div className="text-white/40 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

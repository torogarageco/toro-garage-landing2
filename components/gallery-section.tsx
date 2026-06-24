import Image from "next/image";

const photos = [
  {
    src: "https://galaxy-prod.tlcdn.com/view/user_313Kanfy9lKPIfcEXHq34emdQcR/a3f6be9007f64a9ba7258069b18d5075.jpg",
    alt: "Full garage transformation with custom cabinets, slatwall, coatings and Porsche",
    label: "Full Transformation — Cabinets + Slatwall + Coatings",
    size: "large",
  },
  {
    src: "https://galaxy-prod.tlcdn.com/view/user_313Kanfy9lKPIfcEXHq34emdQcR/df04494a3e704cb4afa0ea21b903648d.jpg",
    alt: "Custom garage cabinet system with slatwall organizers",
    label: "Custom Cabinets + Slatwall System",
    size: "small",
  },
  {
    src: "https://galaxy-prod.tlcdn.com/view/user_313Kanfy9lKPIfcEXHq34emdQcR/56e2685d3c804e52b55da1d3e4f01da4.jpg",
    alt: "Slatwall organizer system with tools and ladder",
    label: "Slatwall with Full Accessory System",
    size: "small",
  },
  {
    src: "https://galaxy-prod.tlcdn.com/view/user_313Kanfy9lKPIfcEXHq34emdQcR/df063272d90d459187a781b978858d80.jpg",
    alt: "Full garage slatwall wall with bikes and garden tools",
    label: "Complete Wall Organization — Bikes, Tools & More",
    size: "small",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-[#c94a0c] font-bold uppercase tracking-[0.35em] text-xs mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Real Results
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-[#0a1628] mb-5 uppercase leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            See the
            <br />
            <span className="text-[#c94a0c]">Toro Difference</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            These are real Texas garages we&apos;ve transformed.
<br />
No stock photos. No renders. Every single one is our actual work.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Large hero photo - spans 2 rows on desktop */}
          <div className="relative md:row-span-2 h-80 md:h-auto rounded-2xl overflow-hidden group shadow-xl">
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-[#c94a0c]" />
                <span
                  className="text-white/60 text-[10px] uppercase tracking-[0.25em] font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Featured Project
                </span>
              </div>
              <p
                className="text-white font-bold text-base"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {photos[0].label}
              </p>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#c94a0c]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Smaller photos */}
          {photos.slice(1).map((photo, i) => (
            <div
              key={i}
              className="relative h-64 rounded-2xl overflow-hidden group shadow-lg"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  className="text-white font-bold text-sm"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {photo.label}
                </p>
              </div>
              <div className="absolute inset-0 bg-[#c94a0c]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* CTA Below Gallery */}
        <div className="mt-14 bg-[#0a1628] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-white font-black text-xl md:text-2xl uppercase mb-1"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to See What We Can Do With YOUR Garage?
            </h3>
            <p className="text-white/50 text-sm">
              Free in-home design consultation — no pressure, no obligation.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-[#c94a0c] hover:bg-[#e05c1a] text-white font-black text-sm px-10 py-4 rounded-xl uppercase tracking-[0.1em] shadow-lg shadow-orange-900/30 hover:scale-105 whitespace-nowrap"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Schedule My Consultation →
          </a>
        </div>
      </div>
    </section>
  );
}

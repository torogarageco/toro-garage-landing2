import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GTM_ID = "GTM-M82HR952";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Custom Garage Cabinets San Antonio TX | Toro Garage Co.",
  description:
    "San Antonio's #1 custom garage cabinet company. Expert garage cabinets, slatwall organizers & concrete floor coatings. Free in-home consultation. Serving San Antonio, Texas Hill Country & South Texas.",
  keywords: [
    "custom garage cabinets San Antonio",
    "garage cabinets San Antonio TX",
    "garage storage solutions San Antonio",
    "garage organization San Antonio",
    "concrete floor coatings San Antonio",
    "garage slatwall organizers Texas",
    "custom garage storage Texas",
    "garage makeover San Antonio",
    "epoxy garage floor San Antonio",
    "garage cabinet installation San Antonio",
    "polyurea floor coating San Antonio",
    "garage transformation San Antonio",
    "Toro Garage Co",
    "garage remodel San Antonio TX",
  ],
  authors: [{ name: "Toro Garage Co." }],
  creator: "Toro Garage Co.",
  publisher: "Toro Garage Co.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://go.torogarageco.com",
    siteName: "Toro Garage Co.",
    title: "Custom Garage Cabinets San Antonio TX | Toro Garage Co.",
    description:
      "Transform your garage with custom cabinets, slatwall organizers & concrete coatings. San Antonio's trusted garage transformation experts. Free in-home consultation.",
    images: [
      {
        url: "https://galaxy-prod.tlcdn.com/view/user_313Kanfy9lKPIfcEXHq34emdQcR/a3f6be9007f64a9ba7258069b18d5075.jpg",
        width: 2048,
        height: 1152,
        alt: "Toro Garage Co. — Custom garage cabinets and concrete coatings San Antonio TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Garage Cabinets San Antonio TX | Toro Garage Co.",
    description:
      "Transform your garage with custom cabinets, slatwall organizers & concrete coatings. Free in-home consultation. Serving San Antonio & South Texas.",
    images: [
      "https://galaxy-prod.tlcdn.com/view/user_313Kanfy9lKPIfcEXHq34emdQcR/a3f6be9007f64a9ba7258069b18d5075.jpg",
    ],
  },
  alternates: {
    canonical: "https://go.torogarageco.com",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Toro Garage Co.",
  description:
    "Custom garage cabinets, slatwall organizers, and concrete floor coatings for San Antonio homeowners. Professional design and installation.",
  url: "https://torogarageco.com",
  telephone: "+12108643308",
  email: "info@torogarageco.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1615 W. Summit Ave.",
    addressLocality: "San Antonio",
    addressRegion: "TX",
    postalCode: "78201",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.4241,
    longitude: -98.4936,
  },
  areaServed: [
    {
      "@type": "City",
      name: "San Antonio",
      sameAs: "https://en.wikipedia.org/wiki/San_Antonio",
    },
    { "@type": "State", name: "Texas" },
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 29.4241,
      longitude: -98.4936,
    },
    geoRadius: "100000",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Garage Transformation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Garage Cabinets",
          description:
            "Floor-to-ceiling custom cabinet systems designed and installed for your garage.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Slatwall Organizers",
          description:
            "Commercial-grade slatwall panels and accessories for complete garage organization.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Concrete Floor Coatings",
          description:
            "Professional polyurea, polyaspartic, epoxy and polished concrete garage floor coatings.",
        },
      },
    ],
  },
  sameAs: ["https://torogarageco.com"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}

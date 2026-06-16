import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

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
  title: "Toro Garage Co. | Custom Garage Cabinets San Antonio TX",
  description:
    "Transform your garage with custom cabinets, slatwall organizers & concrete coatings. Serving San Antonio, Texas Hill Country & South Texas. Free in-home estimate. No pressure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

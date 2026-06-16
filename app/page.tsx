import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { Services } from "@/components/services";
import { GallerySection } from "@/components/gallery-section";
import { PromoSection } from "@/components/promo-section";
import { ProcessSection } from "@/components/process-section";
import { LeadForm } from "@/components/lead-form";
import { Footer } from "@/components/footer";
import { FloatingCTA } from "@/components/floating-cta";

export default function ToroCo() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <GallerySection />
        <PromoSection />
        <ProcessSection />
        <LeadForm />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

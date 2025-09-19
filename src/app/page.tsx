import FeatureGrid from "@/components/FeatureGrid";
import Hero from "@/components/Hero";
import StickyShowcase from "@/components/StickyShowcase";
import ReadyMarketplace from "@/components/ReadyMarketplace";
import ServicesSection from "@/components/Services";
import PricingSection from "@/components/PricingSection";



export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      <Hero/>
      <ReadyMarketplace/>
      <ServicesSection/>
      <PricingSection/>
      <FeatureGrid/>
      <StickyShowcase/>
    </main>
  );
}

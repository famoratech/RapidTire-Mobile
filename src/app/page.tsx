import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Reviews from "@/components/home/Reviews";
import ServiceAreaChecker from "@/components/home/ServiceAreaChecker";
import Services from "@/components/home/Services";
import { siteConfig } from "@/site-config";
import { Metadata } from "next";

// Dynamic SEO Metadata for the Homepage
export const metadata: Metadata = {
  title: `${siteConfig.businessName} | Mobile Tire Service in ${siteConfig.serviceArea.center}`,
  description: `Mobile tire swaps, flat repairs, and new tire installation in ${siteConfig.serviceArea.center}. We come to you. Book online or call for emergency roadside assistance.`,
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      {/* <Reviews /> */}
      {/* <ServiceAreaChecker /> */}
      {/* We will add the Services Section here next */}
    </main>
  );
}

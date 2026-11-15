import Services from "@/components/home/Services";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/site-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Our Services | ${siteConfig.businessName}`,
  description:
    "Explore our mobile tire services including winter swaps, flat repairs, and new tire installation.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-10">
      <Section>
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Mobile <span className="text-[#F59E0B]">Tire Services</span>
          </h1>
          <p className="text-gray-400">
            Everything a traditional shop does, right in your driveway.
          </p>
        </div>

        {/* We reuse the exact same component we built for the homepage! */}
        <Services />
      </Section>
    </main>
  );
}

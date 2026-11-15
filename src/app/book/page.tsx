import QuoteWizard from "@/components/booking/QuoteWizard";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/site-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Book a Service | ${siteConfig.businessName}`,
  description: "Request a mobile tire service quote instantly.",
};

export default function BookPage() {
  return (
    <main className="min-h-screen pt-10">
      <Section>
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Book a <span className="text-[#F59E0B]">Mobile Service</span>
          </h1>
          <p className="text-gray-400">
            Fill out the details below to get an instant quote.
          </p>
        </div>

        <QuoteWizard />
      </Section>
    </main>
  );
}

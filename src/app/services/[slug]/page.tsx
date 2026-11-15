import { siteConfig } from "@/site-config";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle, ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return siteConfig.services.map((service) => ({
    slug: service.id,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = siteConfig.services.find((s) => s.id === resolvedParams.slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} in ${siteConfig.serviceArea.center} | ${siteConfig.businessName}`,
    description: `Professional ${service.title.toLowerCase()} starting at $${service.basePrice}. We come to your location in ${siteConfig.serviceArea.center}. Book your mobile service today.`,
  };
}

export default async function ServicePage({ params }: Props) {
  const resolvedParams = await params;
  const service = siteConfig.services.find((s) => s.id === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-10">
      <Section>
        <Link
          href="/#services"
          className="inline-flex items-center text-gray-400 hover:text-[#F59E0B] mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to all services
        </Link>

        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-gray-700/50 pb-8">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                {service.title}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Mobile service dispatched directly to your location in{" "}
                {siteConfig.serviceArea.center} and surrounding areas.
              </p>
            </div>
            <div className="bg-gray-900 border border-[#F59E0B]/30 rounded-xl p-6 text-center shrink-0 w-full md:w-auto">
              <div className="text-gray-400 text-sm font-medium mb-1">
                Starting at
              </div>
              <div className="text-4xl font-extrabold text-[#F59E0B]">
                ${service.basePrice}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                What's Included:
              </h3>
              <ul className="space-y-3">
                {[
                  "On-site professional service",
                  "Tire pressure check and adjustment",
                  "Lug nut torquing to factory specs",
                  "Zero wait time in a shop lobby",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-green-500 mr-3 shrink-0 mt-0.5"
                    />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-2">
                Ready to get started?
              </h3>
              <p className="text-gray-400 mb-6">
                Book online now to lock in your price and coordinate a time that
                works for you.
              </p>
              <Link href="/book">
                <Button size="lg" className="w-full">
                  Book this Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

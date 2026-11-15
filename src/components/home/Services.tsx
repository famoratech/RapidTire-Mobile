"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/site-config";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { Snowflake, PenTool, Disc, ArrowRight } from "lucide-react";
import Link from "next/link";

// Map specific icons and descriptions to our config IDs
const serviceDetails: Record<string, { icon: React.ReactNode; desc: string }> =
  {
    "winter-swap": {
      icon: <Snowflake className="text-[#F59E0B]" size={32} />,
      desc: "Seasonal changeovers done in your driveway. On-rim or off-rim options available.",
    },
    "flat-repair": {
      icon: <PenTool className="text-[#F59E0B]" size={32} />,
      desc: "Quick, safe puncture repairs to get you back on the road without needing a tow.",
    },
    "new-tires": {
      icon: <Disc className="text-[#F59E0B]" size={32} />,
      desc: "Supply and installation of premium new tires, balanced and mounted at your location.",
    },
  };

// Framer motion variants for the staggered grid animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <Section id="services" className="bg-gray-900/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Mobile <span className="text-[#F59E0B]">Services</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Skip the waiting room. We bring professional tire equipment directly
          to your vehicle.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {siteConfig.services.map((service) => (
          <motion.div key={service.id} variants={itemVariants}>
            <Link href={`/services/${service.id}`} className="block h-full">
              {/* Using our reusable Card component with the hoverEffect enabled */}
              <Card
                hoverEffect
                className="h-full flex flex-col cursor-pointer group"
              >
                <div className="mb-4 bg-gray-900/50 w-16 h-16 rounded-full flex items-center justify-center border border-gray-700 group-hover:border-[#F59E0B]/50 transition-colors">
                  {serviceDetails[service.id]?.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-400 flex-grow mb-6">
                  {serviceDetails[service.id]?.desc}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-700/50">
                  <span className="font-semibold text-white">
                    From ${service.basePrice}
                  </span>
                  <span className="flex items-center text-sm font-medium text-[#F59E0B] group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </span>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

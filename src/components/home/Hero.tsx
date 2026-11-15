"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/site-config";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { MapPin, Clock, AlertTriangle } from "lucide-react";
import Link from "next/link";
import SOSButton from "../ui/SOSButton";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-40">
      {/* Subtle background glow effect for that premium dark mode look */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F59E0B]/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center">
        {/* SEO: Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-6 text-sm font-medium text-gray-400"
        >
          <span className="flex items-center gap-1.5">
            <MapPin size={16} className="text-[#F59E0B]" />
            Serving {siteConfig.serviceArea.center} &{" "}
            {siteConfig.serviceArea.radiusMiles}mi radius
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <Clock size={16} className="text-[#F59E0B]" />
            Fast Dispatch
          </span>
        </motion.div>

        {/* SEO: Primary H1 Keyword Targeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Mobile Tire Shop & <br className="hidden sm:block" />
            <span className="text-[#F59E0B]">Flat Repair</span>
          </h1>
        </motion.div>

        {/* SEO: Descriptive Paragraph (H2 alternative) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          We bring the tire shop to your driveway, workplace, or the side of the
          road. Professional seasonal swaps, flat repairs, and new tire
          installations on your schedule.
        </motion.p>

        {/* Calls to Action */}
        {/* Calls to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/book" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto group cursor-pointer">
              Book a Service
            </Button>
          </Link>

          {/* Our fully functional SOS Button */}
          <SOSButton size="lg" fullWidth className="sm:w-auto cursor-pointer" />
        </motion.div>
      </div>
    </Section>
  );
}

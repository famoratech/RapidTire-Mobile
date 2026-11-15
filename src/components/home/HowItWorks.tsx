"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { Smartphone, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Request a Service",
    description:
      "Book an appointment online, request a quote, or hit the SOS button for emergency flat repair.",
    icon: <Smartphone size={28} className="text-black" />,
  },
  {
    id: 2,
    title: "We Come to You",
    description:
      "Our fully equipped mobile tire van arrives at your home, office, or roadside location.",
    icon: <Truck size={28} className="text-black" />,
  },
  {
    id: 3,
    title: "Back on the Road",
    description:
      "We professionally mount, balance, or repair your tires while you relax. Pay securely on-site.",
    icon: <CheckCircle size={28} className="text-black" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HowItWorks() {
  return (
    <Section id="how-it-works">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          How It <span className="text-[#F59E0B]">Works</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Tire trouble? Seasonal swap? We've made the process completely
          effortless.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 relative"
      >
        {/* Optional: Connecting line behind the steps on desktop */}
        <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-0.5 bg-gray-800 -z-10" />

        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            variants={itemVariants}
            className="relative text-center"
          >
            <div className="flex flex-col items-center">
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-full bg-[#F59E0B] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                {step.icon}
              </div>

              {/* Step Number Badge */}
              <div className="absolute top-0 right-1/2 translate-x-10 -translate-y-2 bg-gray-900 border border-gray-700 w-8 h-8 rounded-full flex items-center justify-center font-bold text-[#F59E0B] text-sm">
                {step.id}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

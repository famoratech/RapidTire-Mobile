"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { Star } from "lucide-react";

// Placeholder data: you can move this to site-config.ts later if you want!
const reviews = [
  {
    id: 1,
    name: "Michael T.",
    date: "2 weeks ago",
    text: "Absolute lifesaver! Got a flat on my way to work. They arrived in 30 minutes, patched the tire on the side of the road, and I still made my morning meeting. Worth every penny.",
  },
  {
    id: 2,
    name: "Sarah J.",
    date: "1 month ago",
    text: "I used to waste my entire Saturday morning at the tire shop for seasonal swaps. Having them do it right in my driveway while I drink coffee inside is a game changer. 10/10.",
  },
  {
    id: 3,
    name: "David K.",
    date: "2 months ago",
    text: "Professional, fast, and polite. Bought a brand new set of winter tires from them and the installation was flawless. Will definitely use them again next season.",
  },
];

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

export default function Reviews() {
  return (
    <Section id="reviews" className="bg-gray-900/30">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-2 mb-4">
          {/* 5 Stars */}
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={24} className="text-[#F59E0B]" fill="#F59E0B" />
          ))}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Trusted by <span className="text-[#F59E0B]">Local Drivers</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Don't just take our word for it. Here is what our customers are saying
          on Google.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {reviews.map((review) => (
          <motion.div key={review.id} variants={itemVariants}>
            <Card className="h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="font-bold text-white text-lg">
                    {review.name}
                  </div>
                  <div className="text-sm text-gray-500">{review.date}</div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-[#F59E0B]"
                      fill="#F59E0B"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 italic flex-grow">"{review.text}"</p>

              {/* Subtle Google Trust Badge Placeholder */}
              <div className="mt-6 pt-4 border-t border-gray-700/50 flex items-center gap-2">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center font-bold text-blue-600 text-xs">
                  G
                </div>
                <span className="text-xs font-medium text-gray-400">
                  Verified Google Review
                </span>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

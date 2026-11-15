"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/site-config";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { MapPin, CheckCircle, XCircle, Search } from "lucide-react";
import Link from "next/link";

export default function ServiceAreaChecker() {
  const [postalCode, setPostalCode] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();

    // Clean the input: remove spaces and force uppercase
    const cleanCode = postalCode.replace(/\s+/g, "").toUpperCase();

    // Ensure they typed at least 3 characters
    if (cleanCode.length < 3) {
      setStatus("error");
      return;
    }

    // Extract the first 3 characters (The Canadian FSA prefix)
    const prefix = cleanCode.substring(0, 3);
    const isSupported =
      siteConfig.serviceArea.acceptedPostalPrefixes.includes(prefix);

    setStatus(isSupported ? "success" : "error");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostalCode(e.target.value);
    // Reset the message if they start typing again
    if (status !== "idle") setStatus("idle");
  };

  return (
    <Section id="service-area">
      <div className="max-w-3xl mx-auto bg-gray-800/50 border border-gray-700 rounded-2xl p-6 md:p-10 backdrop-blur-sm shadow-xl text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] mb-6">
          <MapPin size={24} />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Check Our Service Area
        </h2>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
          Enter your postal code to see if our mobile tire vans are currently
          serving your neighborhood.
        </p>

        <form
          onSubmit={handleCheck}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6"
        >
          <div className="relative flex-1">
            <input
              type="text"
              value={postalCode}
              onChange={handleChange}
              placeholder="e.g., N3T 1A1"
              maxLength={7}
              className="w-full bg-gray-900 border border-gray-600 rounded-lg py-3 px-4 pl-10 text-white font-medium focus:outline-none focus:border-[#F59E0B] uppercase placeholder:normal-case transition-colors"
            />
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>
          <Button type="submit" disabled={!postalCode.trim()}>
            Verify
          </Button>
        </form>

        {/* Smoothly reveal the result */}
        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between max-w-md mx-auto text-left gap-4"
            >
              <div className="flex items-center gap-3">
                <CheckCircle size={24} className="shrink-0" />
                <p className="text-sm font-medium">
                  Great news! We have a van covering{" "}
                  <strong>{postalCode.substring(0, 3).toUpperCase()}</strong>.
                </p>
              </div>
              <Link href="/book">
                <Button
                  size="sm"
                  className="bg-green-500 hover:bg-green-600 text-white shadow-none w-full sm:w-auto shrink-0"
                >
                  Book Now
                </Button>
              </Link>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              key="error"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between max-w-md mx-auto text-left gap-4"
            >
              <div className="flex items-center gap-3">
                <XCircle size={24} className="shrink-0" />
                <p className="text-sm font-medium">
                  We don't regularly service{" "}
                  <strong>
                    {postalCode.substring(0, 3).toUpperCase() || "that area"}
                  </strong>
                  , but we may accommodate you.
                </p>
              </div>
              <a href={`tel:${siteConfig.phoneNumber}`}>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto shrink-0 border-red-500/50 text-red-400 hover:bg-red-500/10"
                >
                  Call Us
                </Button>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}

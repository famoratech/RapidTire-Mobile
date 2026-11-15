"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/site-config";
import Button from "@/components/ui/Button";
import { ChevronRight, ChevronLeft, CheckCircle } from "lucide-react";

type FormData = {
  service: string;
  vehicle: string;
  address: string;
};

export default function QuoteWizard() {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const selectedService = watch("service");

  const onSubmit = (data: FormData) => {
    // Find the service name from our config
    const serviceName =
      siteConfig.services.find((s) => s.id === data.service)?.title ||
      data.service;

    // Construct the WhatsApp message
    const message = `*New Booking Request*%0A%0A*Service:* ${serviceName}%0A*Vehicle:* ${data.vehicle}%0A*Location:* ${data.address}%0A%0ACan I get a quote and availability?`;

    // Open WhatsApp instantly
    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`,
      "_blank",
    );
  };

  const slideVariants = {
    enter: { x: 50, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  };

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 md:p-8 backdrop-blur-sm max-w-2xl mx-auto overflow-hidden">
      {/* Progress Indicator */}
      <div className="flex justify-between items-center mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex-1 flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= i ? "bg-[#F59E0B] text-black" : "bg-gray-700 text-gray-400"}`}
            >
              {step > i ? <CheckCircle size={16} /> : i}
            </div>
            {i < 3 && (
              <div
                className={`flex-1 h-1 mx-2 rounded transition-colors ${step > i ? "bg-[#F59E0B]" : "bg-gray-700"}`}
              />
            )}
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative min-h-[300px]"
      >
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                What do you need help with?
              </h3>
              <div className="space-y-4">
                {siteConfig.services.map((svc) => (
                  <label
                    key={svc.id}
                    className={`block p-4 border rounded-lg cursor-pointer transition-all ${selectedService === svc.id ? "border-[#F59E0B] bg-[#F59E0B]/10" : "border-gray-600 bg-gray-900 hover:border-gray-500"}`}
                  >
                    <input
                      type="radio"
                      value={svc.id}
                      {...register("service", { required: true })}
                      className="hidden"
                    />
                    <div className="font-semibold text-white">{svc.title}</div>
                    <div className="text-sm text-gray-400">
                      Starting at ${svc.basePrice}
                    </div>
                  </label>
                ))}
              </div>
              <Button
                type="button"
                onClick={() => setStep(2)}
                disabled={!selectedService}
                className="mt-8 w-full flex justify-between items-center"
              >
                Next Step <ChevronRight size={20} />
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Vehicle & Location
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Vehicle Make & Model
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 2019 Honda Civic"
                    {...register("vehicle", { required: true })}
                    className="w-full bg-gray-900 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-[#F59E0B]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Service Address / Postal Code
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 123 Main St, N3T 1A1"
                    {...register("address", { required: true })}
                    className="w-full bg-gray-900 border border-gray-600 rounded-lg p-3 text-white focus:outline-none focus:border-[#F59E0B]"
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setStep(1)}
                  className="px-4"
                >
                  <ChevronLeft size={20} />
                </Button>
                <Button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1"
                >
                  Review Request
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Request via WhatsApp
              </h3>
              <p className="text-gray-300 mb-6">
                Because we are fully mobile, we use WhatsApp to coordinate exact
                ETAs and send you photos of your tire inspection if needed.
              </p>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-green-500 hover:bg-green-600 text-white shadow-[0_0_15px_rgba(34,197,94,0.4)]"
              >
                Send to Dispatch
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(2)}
                className="w-full mt-4"
              >
                Go Back
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}

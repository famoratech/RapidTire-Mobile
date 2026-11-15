"use client";

import {
  Home,
  Wrench,
  CalendarCheck,
  AlertTriangle,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { useSOS } from "@/hooks/useSOS";

export default function MobileNav() {
  // Pull in the logic hook for the minimalist nav icon
  const { triggerSOS, loading } = useSOS();

  return (
    <nav className="md:hidden fixed bottom-0 w-full bg-gray-900 border-t border-gray-800 z-50">
      <div className="flex justify-around items-center h-16 pb-safe">
        <Link
          href="/"
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#F59E0B] transition-colors"
        >
          <Home size={20} />
          <span className="text-[10px] font-medium">Home</span>
        </Link>

        <Link
          href="/services"
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#F59E0B] transition-colors"
        >
          <Wrench size={20} />
          <span className="text-[10px] font-medium">Services</span>
        </Link>

        <Link
          href="/book"
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-[#F59E0B] transition-colors"
        >
          <CalendarCheck size={20} />
          <span className="text-[10px] font-medium">Book</span>
        </Link>

        {/* The wired-up SOS Nav Button */}
        <button
          onClick={triggerSOS}
          disabled={loading}
          className="flex flex-col items-center gap-1 text-red-500 hover:text-red-400 transition-colors disabled:opacity-50"
        >
          {loading ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <AlertTriangle size={20} />
          )}
          <span className="text-[10px] font-medium">
            {loading ? "Wait..." : "SOS"}
          </span>
        </button>
      </div>
    </nav>
  );
}

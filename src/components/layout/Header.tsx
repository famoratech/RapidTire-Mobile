import { siteConfig } from "@/site-config";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-white tracking-tight">
          {/* Splitting the name to highlight the first word with our accent color */}
          <span className="text-[#F59E0B]">
            {siteConfig.businessName.split(" ")[0]}
          </span>
          {siteConfig.businessName.split(" ").slice(1).join(" ")}
        </Link>

        {/* The phone button is hidden on small mobile screens because they will have the bottom nav */}
        <a
          href={`tel:${siteConfig.phoneNumber}`}
          className="hidden md:flex items-center gap-2 bg-[#F59E0B] text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition-colors"
        >
          <Phone size={18} />
          <span>{siteConfig.phoneNumber}</span>
        </a>
      </div>
    </header>
  );
}

import Link from "next/link";
import { siteConfig } from "@/site-config";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800 pt-16 pb-24 md:pb-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <Link
              href="/"
              className="font-bold text-2xl text-white tracking-tight inline-block mb-4"
            >
              <span className="text-[#F59E0B]">
                {siteConfig.businessName.split(" ")[0]}
              </span>{" "}
              {siteConfig.businessName.split(" ").slice(1).join(" ")}
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Premium mobile tire replacement and repair. We bring the tire shop
              directly to your driveway, workplace, or roadside emergency.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#services"
                  className="text-gray-400 hover:text-[#F59E0B] text-sm transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="text-gray-400 hover:text-[#F59E0B] text-sm transition-colors"
                >
                  Book an Appointment
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-gray-400 hover:text-[#F59E0B] text-sm transition-colors"
                >
                  How it Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#reviews"
                  className="text-gray-400 hover:text-[#F59E0B] text-sm transition-colors"
                >
                  Customer Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phoneNumber}`}
                  className="flex items-center text-gray-400 hover:text-[#F59E0B] text-sm transition-colors"
                >
                  <Phone size={16} className="mr-3 text-[#F59E0B]" />
                  {siteConfig.phoneNumber}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center text-gray-400 hover:text-[#F59E0B] text-sm transition-colors"
                >
                  <Mail size={16} className="mr-3 text-[#F59E0B]" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start text-gray-400 text-sm">
                <MapPin
                  size={16}
                  className="mr-3 mt-0.5 text-[#F59E0B] shrink-0"
                />
                <span>
                  Serving {siteConfig.serviceArea.center} and a{" "}
                  {siteConfig.serviceArea.radiusMiles}-mile radius.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Agency Plug */}
        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; {currentYear} {siteConfig.businessName}. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Built by{" "}
            <a
              href="https://www.edgehit.ca/"
              className="text-gray-400 hover:text-white transition-colors font-medium"
            >
              EdgeHit CA
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

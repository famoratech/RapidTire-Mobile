import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import MobileNav from "@/components/layout/MobileNav";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema"; // ADD THIS
import { siteConfig } from "@/site-config";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.businessName,
  description: "Premium mobile tire replacement and repair at your location.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-900 text-gray-100 min-h-screen flex flex-col`}
      >
        {/* INJECT THE SCHEMA HERE */}
        <LocalBusinessSchema />
        <Header />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer /> {/* ADD FOOTER HERE */}
        <MobileNav />
      </body>
    </html>
  );
}

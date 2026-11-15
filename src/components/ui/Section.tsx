import React from "react";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClass?: string;
}

export default function Section({
  id,
  children,
  className = "",
  containerClass = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div
        className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl ${containerClass}`}
      >
        {children}
      </div>
    </section>
  );
}

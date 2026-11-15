import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({
  children,
  className = "",
  hoverEffect = false,
}: CardProps) {
  return (
    <div
      className={`
        bg-gray-800/50 border border-gray-700 rounded-xl p-6 overflow-hidden backdrop-blur-sm
        ${hoverEffect ? "hover:border-[#F59E0B]/50 hover:bg-gray-800 transition-all duration-300" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

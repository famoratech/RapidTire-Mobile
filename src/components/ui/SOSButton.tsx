"use client";

import { AlertTriangle, Loader2 } from "lucide-react";
import Button from "./Button";
import { useSOS } from "@/hooks/useSOS";

export default function SOSButton({
  className = "",
  fullWidth = false,
  size = "md" as any,
}) {
  // Pull in our reusable logic!
  const { triggerSOS, loading } = useSOS();

  return (
    <Button
      variant="danger"
      size={size}
      onClick={triggerSOS}
      disabled={loading}
      className={`${fullWidth ? "w-full" : ""} ${className}`}
    >
      {loading ? (
        <Loader2 className="animate-spin" size={20} />
      ) : (
        <AlertTriangle size={20} />
      )}
      <span className="ml-2">{loading ? "Locating..." : "Emergency SOS"}</span>
    </Button>
  );
}

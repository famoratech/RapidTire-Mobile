import { useState } from "react";
import { siteConfig } from "@/site-config";

export function useSOS() {
  const [loading, setLoading] = useState(false);

  const triggerSOS = () => {
    setLoading(true);

    if (!navigator.geolocation) {
      alert(
        "Geolocation is not supported by your browser. Please call us directly.",
      );
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const mapLink = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
        const message = `*EMERGENCY SOS*%0A%0AI have a flat tire and am stranded at this exact location:%0A${mapLink}%0A%0APlease help!`;

        setLoading(false);
        window.open(
          `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`,
          "_blank",
        );
      },
      (error) => {
        console.error(error);
        alert(
          "We couldn't get your location. Please check your location permissions or call us.",
        );
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  };

  return { triggerSOS, loading };
}

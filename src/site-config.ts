export const siteConfig = {
  businessName: "RapidTire Mobile Service",
  phoneNumber: "+1-555-019-8473",
  whatsappNumber: "15550198473",
  email: "help@rapidtire.example.com",
  serviceArea: {
    center: "Brantford, ON",
    radiusMiles: 50,
    acceptedPostalPrefixes: ["N3T", "N3R", "N3S", "N3V", "M5V", "M5A", "M5B"],
  },
  theme: {
    primary: "#F59E0B", // High-visibility amber/orange
    background: "#111827", // Sleek dark gray
  },
  services: [
    { id: "winter-swap", title: "Winter Tire Swap", basePrice: 120 },
    { id: "flat-repair", title: "Emergency Flat Repair", basePrice: 150 },
    { id: "new-tires", title: "New Tire Installation", basePrice: 200 },
  ],
};

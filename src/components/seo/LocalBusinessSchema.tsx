import { siteConfig } from "@/site-config";

export default function LocalBusinessSchema() {
  // =====================================================================
  // ⚠️ PRE-LAUNCH CHECKLIST: UPDATE THESE VARIABLES FOR EACH NEW CLIENT
  // =====================================================================
  const PRODUCTION_DOMAIN = "https://www.INSERT-CLIENT-DOMAIN-HERE.com";
  const OG_IMAGE_URL = `${PRODUCTION_DOMAIN}/og-image.jpg`; // Make sure to put an og-image.jpg in the /public folder
  const CURRENCY = "CAD"; // Change to "USD" if the client is in the United States
  const PRICE_LEVEL = "$$"; // $ = Cheap, $$ = Moderate, $$$ = Expensive
  // =====================================================================

  // Construct the JSON-LD object for a mobile service business
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: siteConfig.businessName,
    image: OG_IMAGE_URL,
    "@id": PRODUCTION_DOMAIN,
    url: PRODUCTION_DOMAIN,
    telephone: siteConfig.phoneNumber,
    email: siteConfig.email,
    priceRange: PRICE_LEVEL,

    // Defines them as a mobile business (Service Area Business)
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        // We use the center city name.
        // For a real launch, adding exact Lat/Lng coordinates here is even better.
        description: siteConfig.serviceArea.center,
      },
      geoRadius: siteConfig.serviceArea.radiusMiles * 1609.34, // Converts miles to meters for Schema.org
    },

    // Explicitly lists their services to help rank for specific keywords
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tire Services",
      itemListElement: siteConfig.services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
        },
        price: service.basePrice,
        priceCurrency: CURRENCY,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

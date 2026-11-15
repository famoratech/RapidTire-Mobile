import { MetadataRoute } from "next";
import { siteConfig } from "@/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // IMPORTANT: Update this variable when you buy the actual domain name!
  const baseUrl = "https://www.yourdomain.com";

  // 1. Define your static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0, // The homepage is the most important
    },
    {
      url: `${baseUrl}/book`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // 2. Dynamically generate routes for each service in your config
  const dynamicRoutes: MetadataRoute.Sitemap = siteConfig.services.map(
    (service) => ({
      url: `${baseUrl}/services/${service.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9, // High priority because these rank for specific keywords
    }),
  );

  // Combine and return them
  return [...staticRoutes, ...dynamicRoutes];
}

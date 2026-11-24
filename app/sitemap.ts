import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://YOUR-DOMAIN.com",
      lastModified: new Date(),
    },
    {
      url: "https://YOUR-DOMAIN.com/car-rental",
      lastModified: new Date(),
    },
  ];
}
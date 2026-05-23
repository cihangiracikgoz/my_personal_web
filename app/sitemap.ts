import type { MetadataRoute } from "next";
import { env } from "@/lib/env";

const buildTime = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: env.NEXT_PUBLIC_BASE_URL,
      lastModified: buildTime,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
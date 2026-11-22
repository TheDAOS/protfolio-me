import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sanju.fyi/";
  return [
    {
      url: baseUrl,
    },
  ];
}

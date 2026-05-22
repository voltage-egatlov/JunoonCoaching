import type { MetadataRoute } from "next";

const BASE_URL = "https://junooncoaching.com";

const blogSlugs = [
  "how-to-manage-summer-travel-and-still-maintain-your-fitness-progress",
  "why-are-indians-lazier-when-it-comes-to-fitness-the-perspective-of-an-indian-fitness-coach",
  "why-doing-only-cardio-is-ruining-your-fitness-progress",
  "the-protein-dilemma",
  "building-habits-science-behind-fitness-progress",
  "high-protein-indian-foods",
  "how-indian-history-amp-culture-shaped-our-health-today",
  "indian-diet-health-issues",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/coaches`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/testimonials`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}

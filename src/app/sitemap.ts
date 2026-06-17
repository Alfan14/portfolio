import { siteConfig } from "@/lib/site-config"
import { projects } from "@/content/projects"
import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1.0 },
    { url: siteConfig.url + "/projects", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: siteConfig.url + "/about", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: siteConfig.url + "/contact", lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.7 },
  ]
  const projectRoutes = projects.map((p) => ({
    url: siteConfig.url + "/projects/" + p.slug,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))
  return [...staticRoutes, ...projectRoutes]
}

import type { MetadataRoute } from "next";
import { insights, projects } from "./data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://muhammadshahroze.dev";
  const pages = ["", "/projects", "/about", "/experience", "/skills", "/ai-workflow", "/process", "/resume", "/work-with-me", "/services/engagements", "/services/faq", "/insights", "/contact", "/privacy"];
  return [
    ...pages.map((path) => ({ url: `${base}${path}`, lastModified: new Date("2026-08-12"), changeFrequency: "monthly" as const, priority: path === "" ? 1 : .7 })),
    ...projects.filter((project) => project.slug !== "android-billing-platform").map((project) => ({ url: `${base}/projects/${project.slug}`, lastModified: new Date("2026-08-12"), changeFrequency: "monthly" as const, priority: project.featured ? .9 : .65 })),
    ...insights.map((insight) => ({ url: `${base}/insights/${insight.slug}`, lastModified: new Date("2026-08-12"), changeFrequency: "yearly" as const, priority: .7 })),
  ];
}

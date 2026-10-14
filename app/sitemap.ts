import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/open-driving-file-dubai",
  "/dubai-driving-license-cost",
  "/driving-license-requirements-uae",
  "/driving-schools-dubai",
  "/foreign-driving-license-exchange-dubai",
  "/dubai-driving-license-renewal",
  "/golden-chance-driving-license-dubai",
  "/rent-a-car-dubai-requirements",
  "/international-driving-permit-uae",
  "/driving-license-eye-test-dubai",
  "/driving-license-faq",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-and-disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.domain}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
